# Uso: python3 herramientas/alfabeto_citas.py  (desde la raíz del repositorio)
# Arma public/apps/alfabeto-hebreo/data.js a partir de herramientas/alfabeto/parte1-5.js:
#   '@@libro/cap/vv'      → texto de la RV 1960 del sitio (public/biblia/rv1960)
#   '@@wlc:libro/cap/vv'  → hebreo del Códice de Leningrado con vocales, sin acentos (herramientas/wlc.py)
#   '@@wlca:libro/cap/v'  → el mismo hebreo con acentos de cantilación
#   '@@wlcp:libro/cap/v'  → lista JS de las palabras hebreas del versículo
# Necesita los XML de OSHB en herramientas/biblia/fuentes/wlc/ (ver herramientas/wlc.py).
# Una imagen propia (img/…) que todavía no existe pierde su src: el motor muestra «Ilustración por generar».
import os, re, json, sys
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import wlc
APP = os.path.join(R, 'public', 'apps', 'alfabeto-hebreo')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
src = ''.join(open(os.path.join(R, 'herramientas', 'alfabeto', f'parte{i}.js'), encoding='utf-8').read() for i in range(1, 6))
js = lambda t: "'" + t.replace('\\', '\\\\').replace("'", "\\'") + "'"
def rango(vv):
    a, _, z = vv.partition('-')
    return range(int(a), int(z or a) + 1)
def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    return js(' '.join(versos[v - 1] for v in rango(vv)))
def hebreo(m):
    tipo, libro, cap, vv = m.group(1), m.group(2), int(m.group(3)), m.group(4)
    if tipo == 'wlcp':
        return '[' + ', '.join(js(w) for w in wlc.palabras(libro, cap, int(vv))) + ']'
    return js(' '.join(wlc.verso(libro, cap, v, acentos=(tipo == 'wlca')) for v in rango(vv)))
faltan = []
def imagen(m):
    ruta = m.group(1)
    if os.path.exists(os.path.join(APP, ruta)):
        return m.group(0)
    faltan.append(ruta)
    return ''
os.makedirs(APP, exist_ok=True)
out = re.sub(r"'@@(wlc|wlca|wlcp):([a-z0-9]+)/(\d+)/([\d-]+)'", hebreo, src)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, out)
out = re.sub(r"src: '((?:img|\.\./[a-z-]+/img)/[^']+)', ", imagen, out)
assert '@@' not in out
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres')
if faltan:
    print('Imágenes por agregar:', ', '.join(faltan))
