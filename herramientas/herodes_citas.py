# Uso: python3 herramientas/herodes_citas.py  (desde la raíz del repositorio)
# Arma public/apps/dinastia-herodes/data.js a partir de herramientas/herodes/parte1-6.js y copia
# el texto de los pasajes marcados '@@libro/capítulo/versículos' desde la RV 1960 del sitio.
# Las imágenes se declaran con las ayudas img/esq/foto de parte1.js: el script escribe la lista de las que
# existen en img/, y una que todavía no existe (aquí o en otro recurso) queda sin src
# (el motor muestra «Ilustración por generar» o «Foto por agregar»).
import os, re, json
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
APP = os.path.join(R, 'public', 'apps', 'dinastia-herodes')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
src = ''.join(open(os.path.join(R, 'herramientas', 'herodes', f'parte{i}.js'), encoding='utf-8').read() for i in range(1, 7))
def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    a, _, z = vv.partition('-')
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    txt = ' '.join(versos[v - 1] for v in range(int(a), int(z or a) + 1))
    return "'" + txt.replace('\\', '\\\\').replace("'", "\\'") + "'"
faltan = []
os.makedirs(APP, exist_ok=True)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, src)
imgs = sorted(f for f in os.listdir(os.path.join(APP, 'img')) if not f.startswith('.')) if os.path.isdir(os.path.join(APP, 'img')) else []
out = out.replace('/*@@IMAGENES*/[]', json.dumps(imgs))
# Imágenes de otros recursos ('../otro/img/…'): solo las que existen
ext = sorted(set(re.findall(r"'(\.\./[a-z0-9-]+/img/[^']+)'", src)))
for e in ext:
    if not os.path.exists(os.path.join(APP, e)):
        faltan.append(e)
out = out.replace('/*@@EXTERNAS*/[]', json.dumps([e for e in ext if os.path.exists(os.path.join(APP, e))]))
assert '@@' not in out
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres')
for f in sorted(set(re.findall(r"(?:img|esq|foto)\('([^'.][^']+)'", src))):
    if f not in imgs:
        faltan.append(f)
if faltan:
    print('Imágenes por agregar:', ', '.join(faltan))
