# Uso: python3 herramientas/patriarcas_citas.py  (desde la raíz del repositorio)
# Arma public/apps/patriarcas/data.js a partir de herramientas/patriarcas/parte*.js:
# - copia el texto de los pasajes marcados '@@libro/capítulo/versículos' desde la RV 1960 del sitio
#   (un pasaje puede tener varios tramos separados por coma en el mismo capítulo);
# - copia el hebreo de los marcados '@@wlc:libro/cap/v' con herramientas/wlc.py (requiere los XML de
#   herramientas/biblia/fuentes/wlc/, que se descargan aparte; ver el encabezado de wlc.py).
# Una imagen propia (img/…) que todavía no existe pierde su src: el motor muestra el aviso
# «Ilustración por generar» o «Foto por agregar» en lugar de una imagen rota.
import os, re, json, sys
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
from wlc import verso
APP = os.path.join(R, 'public', 'apps', 'patriarcas')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
P = os.path.join(R, 'herramientas', 'patriarcas')
src = ''.join(open(os.path.join(P, f'parte{i}.js'), encoding='utf-8').read() for i in range(1, 10) if os.path.exists(os.path.join(P, f'parte{i}.js')))
q = lambda t: "'" + t.replace('\\', '\\\\').replace("'", "\\'") + "'"
def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    partes = []
    for tramo in vv.split(','):
        a, _, z = tramo.partition('-')
        partes.append(' '.join(versos[v - 1] for v in range(int(a), int(z or a) + 1)))
    return q(' … '.join(partes))
def hebreo(m):
    return q(verso(m.group(1), int(m.group(2)), int(m.group(3))))
IMG = os.path.join(APP, 'img')
hay = sorted(os.listdir(IMG)) if os.path.isdir(IMG) else []
usadas = sorted(set(re.findall(r"'img/([^']+)'", src)))
faltan = [f for f in usadas if f not in hay]
os.makedirs(APP, exist_ok=True)
out = re.sub(r"'@@wlc:([a-z0-9]+)/(\d+)/(\d+)'", hebreo, src)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d,-]+)'", pasaje, out)
out = out.replace('/*@@IMAGENES*/[]', json.dumps(hay, ensure_ascii=False))
# Las imágenes de otros recursos (../otro/img/…) deben existir
for f in set(re.findall(r"'\.\./([a-z0-9-]+/img/[^']+)'", src)):
    assert os.path.exists(os.path.join(R, 'public', 'apps', f)), f
assert '@@' not in out.replace(json.dumps(hay, ensure_ascii=False), '')
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres')
if faltan:
    print('Imágenes por agregar:', ', '.join(faltan))
