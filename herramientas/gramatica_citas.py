# Uso: python3 herramientas/gramatica_citas.py  (desde la raíz del repositorio)
# Arma «Vocabulario y gramática básica del hebreo bíblico» (public/apps/gramatica-hebrea/):
#  1. data.js a partir de herramientas/gramatica/parte*.js, con las mismas marcas que El alfabeto hebreo:
#       '@@libro/cap/vv'      → texto de la RV 1960 del sitio (public/biblia/rv1960)
#       '@@wlc:libro/cap/vv'  → hebreo del Códice de Leningrado con vocales, sin acentos (herramientas/wlc.py)
#       '@@wlca:libro/cap/v'  → el mismo hebreo con acentos de cantilación
#       '@@wlcp:libro/cap/v'  → lista JS de las palabras hebreas del versículo
#     Las referencias del hebreo siguen la numeración del Códice de Leningrado (Joel 3:1 = Joel 2:28 en la RV).
#  2. vocabulario/palabras.js a partir de herramientas/gramatica/frecuencias.tsv (gramatica_lista.py),
#     glosas.txt (a mano) y paradigma.json (el verbo modelo).
# Una imagen propia (img/…) que todavía no existe pierde su src: el motor muestra «Ilustración por generar».
import os, re, json, sys, glob
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import wlc
H = os.path.join(R, 'herramientas', 'gramatica')
APP = os.path.join(R, 'public', 'apps', 'gramatica-hebrea')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
CREDITO = ('Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades '
           'Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), '
           'dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0); frecuencias calculadas con su '
           'morfología y números de Strong del léxico de Open Scriptures.')
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

# ---------- 1. data.js ----------
partes = sorted(glob.glob(os.path.join(H, 'parte*.js')))
src = ''.join(open(p, encoding='utf-8').read() for p in partes)
os.makedirs(APP, exist_ok=True)
out = re.sub(r"'@@(wlc|wlca|wlcp):([a-z0-9]+)/(\d+)/([\d-]+)'", hebreo, src)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, out)
out = re.sub(r"src: '((?:img|\.\./[a-z-]+/img)/[^']+)', ", imagen, out)
assert '@@' not in out, re.findall(r'@@[^\']*', out)[:5]
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres, de', len(partes), 'partes')
if faltan:
    print('Imágenes por agregar:', ', '.join(sorted(set(faltan))))

# ---------- 2. vocabulario/palabras.js ----------
indice = json.load(open(os.path.join(R, 'public', 'biblia', 'indice.json'), encoding='utf-8'))
NOMBRE = dict(indice['libros'])
glosas = {}
for l in open(os.path.join(H, 'glosas.txt'), encoding='utf-8'):
    if l.startswith('#') or not l.strip():
        continue
    n, tr, clase, tema, es = l.rstrip('\n').split('|')
    glosas[n] = (tr, clase, tema, es)
filas = [l.rstrip('\n').split('\t') for l in open(os.path.join(H, 'frecuencias.tsv'), encoding='utf-8')][1:]
lista = []
for f in filas:
    n, veces, he, _, forma, ej, _, _, ref_wlc, _ = f
    tr, clase, tema, es = glosas[n]
    libro, cap, v = ej.split('/')
    lw, cw, vw = ref_wlc.split('/')
    verso = wlc.verso(lw, int(cw), int(vw)).replace('׃', '').strip()
    he = he.replace('יְהֹוָה', 'יְהוָה').replace('יְהֹוִה', 'יְהוִה')
    lista.append([n, he, tr, clase, tema, es, int(veces), f'{NOMBRE[libro]} {cap}:{v}', verso, forma])
# total de palabras contadas (sin prefijos ni arameo), el mismo que informa gramatica_lista.py
TOTAL = 295957
voc = {'total': TOTAL, 'lecciones': 30, 'porLeccion': 25, 'credito': CREDITO, 'palabras': lista}
par = json.load(open(os.path.join(H, 'paradigma.json'), encoding='utf-8'))
os.makedirs(os.path.join(APP, 'vocabulario'), exist_ok=True)
with open(os.path.join(APP, 'vocabulario', 'palabras.js'), 'w', encoding='utf-8') as o:
    o.write('/* Generado por herramientas/gramatica_citas.py: no editar a mano. */\n')
    o.write('window.VOCABULARIO = ' + json.dumps(voc, ensure_ascii=False, separators=(',', ':')) + ';\n')
    o.write('window.PARADIGMA = ' + json.dumps(par, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('vocabulario/palabras.js:', len(lista), 'palabras')
