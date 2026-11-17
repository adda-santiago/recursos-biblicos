# Uso: python3 herramientas/alfabeto_griego_citas.py  (desde la raíz del repositorio)
# Arma public/apps/alfabeto-griego/data.js a partir de herramientas/alfabeto_griego/parte1-5.js:
#   '@@libro/cap/vv'        → texto de la RV 1960 del sitio (public/biblia/rv1960)
#   '@@n1904:libro/cap/vv'  → griego del Nuevo Testamento de Nestle 1904 (herramientas/n1904.py)
#   '@@n1904p:libro/cap/v'  → lista JS de las palabras griegas del versículo
# Necesita el CSV de Nestle 1904 en herramientas/biblia/fuentes/n1904/ (ver herramientas/n1904.py).
# Una imagen propia (img/…) que todavía no existe pierde su src: el motor muestra «Ilustración por generar».
# Al final comprueba con Node que cada pasaje tenga tantas glosas como palabras.
import os, re, json, sys, subprocess
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import n1904
APP = os.path.join(R, 'public', 'apps', 'alfabeto-griego')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
src = ''.join(open(os.path.join(R, 'herramientas', 'alfabeto_griego', f'parte{i}.js'), encoding='utf-8').read() for i in range(1, 6))
js = lambda t: "'" + t.replace('\\', '\\\\').replace("'", "\\'") + "'"
def rango(vv):
    a, _, z = vv.partition('-')
    return range(int(a), int(z or a) + 1)
def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    return js(' '.join(versos[v - 1] for v in rango(vv)))
def griego(m):
    tipo, libro, cap, vv = m.group(1), m.group(2), int(m.group(3)), m.group(4)
    if tipo == 'n1904p':
        return '[' + ', '.join(js(w) for w in n1904.palabras(libro, cap, int(vv))) + ']'
    return js(' '.join(n1904.verso(libro, cap, v) for v in rango(vv)))
faltan = []
def imagen(m):
    ruta = m.group(1)
    if os.path.exists(os.path.join(APP, ruta)):
        return m.group(0)
    faltan.append(ruta)
    return ''
os.makedirs(APP, exist_ok=True)
out = re.sub(r"'@@(n1904|n1904p):([a-z0-9]+)/(\d+)/([\d-]+)'", griego, src)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, out)
out = re.sub(r"src: '((?:img|\.\./[a-z0-9-]+/img)/[^']+)', ", imagen, out)
assert '@@' not in out
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres')
if faltan:
    print('Imágenes por agregar:', ', '.join(faltan))
r = subprocess.run(['node', '-e', "global.window={};require(process.argv[1]);const D=window.RUTA_DATA;let n=0;D.rutas.forEach(r=>n+=r.estaciones.length);console.log(D.rutas.length+' rutas, '+n+' estaciones')", os.path.join(APP, 'data.js')], capture_output=True, text=True)
print(r.stdout.strip() or r.stderr.strip())
