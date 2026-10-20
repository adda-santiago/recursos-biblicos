# Uso: python3 herramientas/interpretar_citas.py  (desde la raíz del repositorio)
# Arma public/apps/interpretar-biblia/data.js a partir de herramientas/interpretar/parte1-5.js y copia
# el texto de los pasajes marcados '@@libro/capítulo/versículos' desde la RV 1960 del sitio.
import os, re, json
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
APP = os.path.join(R, 'public', 'apps', 'interpretar-biblia')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
src = ''.join(open(os.path.join(R, 'herramientas', 'interpretar', f'parte{i}.js'), encoding='utf-8').read() for i in range(1, 6))
def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    a, _, z = vv.partition('-')
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    txt = ' '.join(versos[v - 1] for v in range(int(a), int(z or a) + 1))
    return "'" + txt.replace('\\', '\\\\').replace("'", "\\'") + "'"
os.makedirs(APP, exist_ok=True)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, src)
assert '@@' not in out
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres')
