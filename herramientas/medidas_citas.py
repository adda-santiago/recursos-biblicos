# Uso: python3 herramientas/medidas_citas.py  (desde la raíz del repositorio)
# Arma public/apps/medidas-biblicas/data.js a partir de herramientas/medidas/parte1-5.js y copia
# el texto de los pasajes marcados '@@libro/capítulo/versículos' desde la RV 1960 del sitio.
# Una imagen propia (img/…) que todavía no existe pierde su src: el motor muestra el aviso
# «Ilustración por generar» en lugar de una imagen rota.
import os, re, json
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
APP = os.path.join(R, 'public', 'apps', 'medidas-biblicas')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
src = ''.join(open(os.path.join(R, 'herramientas', 'medidas', f'parte{i}.js'), encoding='utf-8').read() for i in range(1, 6))
def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    a, _, z = vv.partition('-')
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    txt = ' '.join(versos[v - 1] for v in range(int(a), int(z or a) + 1))
    return "'" + txt.replace('\\', '\\\\').replace("'", "\\'") + "'"
faltan = []
def imagen(m):
    ruta = m.group(1)
    if os.path.exists(os.path.join(APP, ruta)):
        return m.group(0)
    faltan.append(ruta)
    return ''
os.makedirs(APP, exist_ok=True)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, src)
out = re.sub(r"src: '((?:img|\.\./[a-z-]+/img)/[^']+)', ", imagen, out)
assert '@@' not in out
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres')
if faltan:
    print('Imágenes por agregar:', ', '.join(faltan))
