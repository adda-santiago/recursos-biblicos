# Uso: python3 herramientas/gramatica_griega_lista.py  (desde la raíz del repositorio)
# Paso 1 del vocabulario de «Vocabulario y gramática básica del griego del NT»:
# cuenta las palabras del Nuevo Testamento griego de Nestle 1904 por lema (herramientas/n1904.py)
# y escribe en herramientas/gramatica_griega/frecuencias.tsv las que aparecen 10 veces o más
# (decisión del responsable, 18-11-2026: 1.124 palabras), con su número de Strong, su clase según
# la morfología, la transliteración sencilla y un versículo de ejemplo (la primera aparición).
# Las glosas en español se escriben a mano en herramientas/gramatica_griega/glosas.txt.
import os, sys, csv, collections, unicodedata
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import n1904
from griego_tr import tr
MINIMO = 10
INV = {v: k for k, v in n1904.LIBROS.items()}
cuenta = collections.Counter(); strong = collections.defaultdict(collections.Counter)
morf = collections.defaultdict(collections.Counter); ejemplo = {}
with open(os.path.join(n1904.DIR, 'Nestle1904.csv'), encoding='utf-8-sig') as f:
    r = csv.reader(f, delimiter='\t'); next(r)
    for fila in r:
        bcv, texto, fm, _, st, lema = [unicodedata.normalize('NFC', x) for x in fila[:6]]
        cuenta[lema] += 1
        strong[lema][st.split('&')[0]] += 1
        p = fm.split('-')
        clave = p[0]
        if p[0] == 'N' and len(p) > 1 and len(p[1]) >= 3:
            clave = 'N' + p[1][2]  # género del sustantivo
        morf[lema][clave] += 1
        if lema not in ejemplo:
            libro, cv = bcv.rsplit(' ', 1)
            c, v = cv.split(':')
            ejemplo[lema] = (f'{INV[libro]}/{c}/{v}', n1904._limpia(texto))
CLASE = {'V': 'v', 'NM': 'sm', 'NF': 'sf', 'NN': 'sn', 'A': 'adj', 'T': 'art', 'P': 'pron', 'R': 'pron', 'D': 'pron',
         'I': 'pron', 'X': 'pron', 'F': 'pron', 'S': 'pron', 'C': 'pron', 'K': 'pron', 'Q': 'pron', 'PREP': 'prep',
         'CONJ': 'conj', 'COND': 'conj', 'ADV': 'adv', 'PRT': 'part', 'INJ': 'interj', 'HEB': 'part', 'ARAM': 'part'}
filas = [(l, k) for l, k in cuenta.most_common() if k >= MINIMO]
tot = sum(cuenta.values())
os.makedirs(os.path.join(R, 'herramientas', 'gramatica_griega'), exist_ok=True)
with open(os.path.join(R, 'herramientas', 'gramatica_griega', 'frecuencias.tsv'), 'w', encoding='utf-8') as o:
    o.write('lema\tstrong\tveces\tclase\ttr\tejemplo\tforma\n')
    for l, k in filas:
        c = CLASE.get(morf[l].most_common(1)[0][0], '?')
        if l[0].isupper() and c in ('sm', 'sf', 'sn'):
            c = 'np'
        ref, forma = ejemplo[l]
        o.write(f'{l}\t{strong[l].most_common(1)[0][0]}\t{k}\t{c}\t{tr(l)}\t{ref}\t{forma}\n')
print(len(filas), 'palabras (la última aparece', filas[-1][1], 'veces); cubren',
      f'{sum(k for _, k in filas) / tot:.1%}', 'de', tot)
