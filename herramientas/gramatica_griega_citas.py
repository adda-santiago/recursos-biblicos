# Uso: python3 herramientas/gramatica_griega_citas.py  (desde la raíz del repositorio)
# Arma «Vocabulario y gramática básica del griego del NT» (public/apps/gramatica-griega/):
#  1. data.js a partir de herramientas/gramatica_griega/parte*.js, con estas marcas (dos arrobas y luego):
#       libro/cap/vv           → texto de la RV 1960 del sitio (public/biblia/rv1960)
#       n1904:libro/cap/vv     → griego del Nuevo Testamento de Nestle 1904 (herramientas/n1904.py)
#       n1904t:libro/cap/v     → lista JS de pares [palabra griega, transliteración] del versículo
#       n1904tr:libro/cap/vv   → transliteración sencilla del pasaje, con su puntuación (herramientas/griego_tr.py)
#  2. vocabulario/palabras.js a partir de herramientas/gramatica_griega/frecuencias.tsv
#     (gramatica_griega_lista.py), glosas.txt (a mano) y paradigma.json (las tablas modelo).
# Necesita el CSV de Nestle 1904 en herramientas/biblia/fuentes/n1904/ (ver herramientas/n1904.py).
# Una imagen propia (img/…) que todavía no existe pierde su src: el motor muestra «Ilustración por generar».
import os, re, json, sys, glob, subprocess, unicodedata
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import n1904
from griego_tr import tr
H = os.path.join(R, 'herramientas', 'gramatica_griega')
APP = os.path.join(R, 'public', 'apps', 'gramatica-griega')
B = os.path.join(R, 'public', 'biblia', 'rv1960')
CREDITO = ('Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades '
           'Bíblicas Unidas, 1988. Utilizado con permiso. Texto griego: Nuevo Testamento de Eberhard Nestle (1904), '
           'dominio público, según la edición de biblicalhumanities.org; frecuencias, lemas y números de Strong '
           'calculados con su morfología (CC0).')
js = lambda t: "'" + t.replace('\\', '\\\\').replace("'", "\\'") + "'"

def rango(vv):
    a, _, z = vv.partition('-')
    return range(int(a), int(z or a) + 1)

def pasaje(m):
    libro, cap, vv = m.group(1), int(m.group(2)), m.group(3)
    versos = json.load(open(os.path.join(B, libro, f'{cap}.json'), encoding='utf-8'))
    return js(' '.join(versos[v - 1] for v in rango(vv)))

PUNT = {'·': ';', '·': ';', ';': '?', ';': '?', ',': ',', '.': '.'}

def tr_texto(texto):
    """Transliteración de un pasaje: cada palabra con tr() y la puntuación griega en su forma española."""
    out = []
    for tok in texto.split():
        cola = ''
        while tok and tok[-1] in PUNT:
            cola = PUNT[tok[-1]] + cola
            tok = tok[:-1]
        tok = tok.strip('()[]—')
        if tok:
            out.append(tr(tok) + cola)
    s = ' '.join(out)
    return s[:1].upper() + s[1:]

def griego(m):
    tipo, libro, cap, vv = m.group(1), m.group(2), int(m.group(3)), m.group(4)
    if tipo == 'n1904t':
        return '[' + ', '.join(f'[{js(w)}, {js(tr(w))}]' for w in n1904.palabras(libro, cap, int(vv))) + ']'
    texto = ' '.join(n1904.verso(libro, cap, v) for v in rango(vv))
    if tipo == 'n1904tr':
        return js(tr_texto(texto))
    return js(texto)

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
out = re.sub(r"'@@(n1904|n1904t|n1904tr):([a-z0-9]+)/(\d+)/([\d-]+)'", griego, src)
out = re.sub(r"'@@([a-z0-9]+)/(\d+)/([\d-]+)'", pasaje, out)
out = re.sub(r"src: '((?:img|\.\./[a-z0-9-]+/img)/[^']+)', ", imagen, out)
assert '@@' not in out, re.findall(r'@@[^\']*', out)[:5]
open(os.path.join(APP, 'data.js'), 'w', encoding='utf-8').write(out)
print('data.js:', len(out), 'caracteres, de', len(partes), 'partes')
if faltan:
    print('Imágenes por agregar:', ', '.join(sorted(set(faltan))))
r = subprocess.run(['node', '-e', "global.window={};require(process.argv[1]);const D=window.RUTA_DATA;let n=0,p=0;D.rutas.forEach(r=>{n+=r.estaciones.length;r.estaciones.forEach(e=>{p+=e.texto.filter(x=>typeof x==='string').join(' ').split(/\\s+/).length})});console.log(D.rutas.length+' rutas, '+n+' estaciones, '+Math.round(p/n)+' palabras por estación en promedio')", os.path.join(APP, 'data.js')], capture_output=True, text=True)
print(r.stdout.strip() or r.stderr.strip())

# ---------- 2. vocabulario/palabras.js ----------
indice = json.load(open(os.path.join(R, 'public', 'biblia', 'indice.json'), encoding='utf-8'))
NOMBRE = dict(indice['libros'])
glosas = {}
for l in open(os.path.join(H, 'glosas.txt'), encoding='utf-8'):
    if l.startswith('#') or not l.strip():
        continue
    lema, clase, tema, es = l.rstrip('\n').split('|')
    glosas[unicodedata.normalize('NFC', lema)] = (clase, tema, es)
filas = [l.rstrip('\n').split('\t') for l in open(os.path.join(H, 'frecuencias.tsv'), encoding='utf-8')][1:]
lista = []
limpio = lambda s: re.sub(r'\s*\((?:II|I)\)$', '', s)
for lema, st, veces, _, trl, ej, forma in filas:
    clase, tema, es = glosas[lema]
    libro, cap, v = ej.split('/')
    verso = n1904.verso(libro, int(cap), int(v))
    lista.append([st, limpio(lema), tr(limpio(lema)), clase, tema, es, int(veces), f'{NOMBRE[libro]} {cap}:{v}', verso, forma])
TOTAL = 137779  # palabras del Nuevo Testamento de Nestle 1904 (el total que informa gramatica_griega_lista.py)
voc = {'total': TOTAL, 'lecciones': 45, 'porLeccion': 25, 'credito': CREDITO, 'palabras': lista}
par = json.load(open(os.path.join(H, 'paradigma.json'), encoding='utf-8'))
os.makedirs(os.path.join(APP, 'vocabulario'), exist_ok=True)
with open(os.path.join(APP, 'vocabulario', 'palabras.js'), 'w', encoding='utf-8') as o:
    o.write('/* Generado por herramientas/gramatica_griega_citas.py: no editar a mano. */\n')
    o.write('window.VOCABULARIO = ' + json.dumps(voc, ensure_ascii=False, separators=(',', ':')) + ';\n')
    o.write('window.PARADIGMA = ' + json.dumps(par, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('vocabulario/palabras.js:', len(lista), 'palabras')
