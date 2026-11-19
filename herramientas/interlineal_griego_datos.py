# Interlineal griego–español (NT) · armado de los datos (desde la v2.57).
# Lee Nestle 1904 con su morfología (herramientas/biblia/fuentes/n1904/Nestle1904.csv, ver n1904.py) y escribe:
#   public/apps/interlineal-griego/interlineal/datos/{libro}.json   un archivo por libro
#   herramientas/interlineal_griego/lemas.tsv                         lemas con frecuencia, Strong y clase
# El léxico con las glosas en español lo arma herramientas/interlineal_griego_lexico.py.
#
# Formato de cada libro: {"l": código, "n": nombre, "c": [capítulo → [versículo → [palabra] o null]], ...}
#   palabra = [griego tal como lo imprime Nestle (con puntuación y corchetes), transliteración, n.º del lema, morfología]
#             El n.º del lema es su posición en lemas.tsv (y en window.LEXICO_G).
#   null    = versículo que la RV 1960 tiene y Nestle 1904 no (viene del Textus Receptus).
#   "rv"    = numeración de la RV 1960 cuando difiere: {"cap:vers": "cap:vers" o "cap:vers-vers"}.
#   "rvv"   = numeración de otras versiones del sitio, desde la de la RV 1960: {"rv1909": {"cap:vers": "cap:vers"}}.
#   "fc"    = final breve de Marcos (Mr 16, después del 8 en los manuscritos que lo traen): [palabra].
#   "disc"  = pasajes discutidos en los manuscritos que Nestle imprime entre corchetes: {"cap:vers": n.º de la nota}.
import os, csv, json, sys, collections, unicodedata
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from n1904 import LIBROS, DIR
from griego_tr import tr

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALIDA = os.path.join(RAIZ, 'public', 'apps', 'interlineal-griego', 'interlineal', 'datos')
TRABAJO = os.path.join(RAIZ, 'herramientas', 'interlineal_griego')
INDICE = json.load(open(os.path.join(RAIZ, 'public', 'biblia', 'indice.json'), encoding='utf8'))
NOMBRES = dict(INDICE['libros'])
RVN = INDICE['versiculos']
CSV2COD = {v: k for k, v in LIBROS.items()}

# Versículos de Nestle 1904 que abarcan dos de la RV 1960, o que la RV pone en otro lugar
RV_MAPA = {
    ('hch', 19, 40): '19:40-41',   # la RV divide en dos el versículo 40
    ('2co', 13, 12): '13:12-13',   # la RV divide en dos el saludo
    ('2co', 13, 13): '13:14',
    ('ap', 12, 18): '13:1',        # «se paró sobre la arena del mar»: comienzo de Ap 13:1 en la RV
}
# Versículos de la RV 1960 que no existen en Nestle 1904 por la numeración, no por el texto
POR_NUMERACION = {('hch', 19, 41), ('2co', 13, 14)}
# Pasajes que Nestle 1904 imprime entre corchetes dobles o paréntesis (ver la ruta IV del recurso)
DISCUTIDOS = {'mr': [(16, 9, 20, 1)], 'jn': [(7, 53, 53, 2), (8, 1, 11, 2)]}


def nfc(s):
    return unicodedata.normalize('NFC', s)


def main():
    filas = []
    with open(os.path.join(DIR, 'Nestle1904.csv'), encoding='utf-8-sig') as f:
        r = csv.reader(f, delimiter='\t')
        next(r)
        for x in r:
            libro, cv = x[0].split(' ')
            c, v = map(int, cv.split(':'))
            filas.append((CSV2COD[libro], c, v, nfc(x[1]), x[2], x[4].split('&')[0].split()[0] if x[4] else '', nfc(x[5])))
    # lemas por frecuencia
    veces = collections.Counter(f[6] for f in filas)
    strong = collections.defaultdict(collections.Counter)
    clase = collections.defaultdict(collections.Counter)
    for f in filas:
        strong[f[6]][f[5]] += 1
        clase[f[6]][f[4].split('-')[0]] += 1
    orden = sorted(veces, key=lambda l: (-veces[l], l))
    idx = {l: i for i, l in enumerate(orden)}
    os.makedirs(TRABAJO, exist_ok=True)
    with open(os.path.join(TRABAJO, 'lemas.tsv'), 'w', encoding='utf8') as o:
        o.write('n\tlema\tstrong\tveces\tclase\n')
        for i, l in enumerate(orden):
            o.write(f'{i}\t{l}\t{strong[l].most_common(1)[0][0]}\t{veces[l]}\t{clase[l].most_common(1)[0][0]}\n')
    # libros
    por_libro = collections.defaultdict(lambda: collections.defaultdict(lambda: collections.defaultdict(list)))
    for cod, c, v, w, morf, st, lem in filas:
        por_libro[cod][c][v].append([w, tr(w), idx[lem], morf.split('@@')[0]])
    os.makedirs(SALIDA, exist_ok=True)
    total = 0
    for cod in LIBROS:
        caps = por_libro[cod]
        rv1960 = RVN['rv1960'][cod]
        d = {'l': cod, 'n': NOMBRES[cod], 'c': [], 'rv': {}, 'rvv': {}}
        for c in range(1, len(rv1960) + 1):
            vs = caps.get(c, {})
            n = max([k for k in vs if k < 99] + [rv1960[c - 1]])
            cap = []
            for v in range(1, n + 1):
                if v in vs:
                    cap.append(vs[v]); total += len(vs[v])
                elif (cod, c, v) in POR_NUMERACION:
                    cap.append(0)          # 0 = versículo de la RV que aquí va unido al anterior
                else:
                    cap.append(None)
                if (cod, c, v) in RV_MAPA:
                    d['rv'][f'{c}:{v}'] = RV_MAPA[(cod, c, v)]
            d['c'].append(cap)
            if 99 in vs:
                d['fc'] = vs[99]; total += len(vs[99])
        for ver in ('rv1909', 'rv1865'):
            otra = RVN[ver][cod]
            m = {}
            for c, (a, b) in enumerate(zip(rv1960, otra), 1):
                if b < a:                  # la otra versión une los últimos versículos (3 Jn 14-15)
                    for v in range(b + 1, a + 1):
                        m[f'{c}:{v}'] = f'{c}:{b}'
            if m:
                d['rvv'][ver] = m
        if cod in DISCUTIDOS:
            d['disc'] = {f'{c}:{v}': nota for c, a, z, nota in DISCUTIDOS[cod] for v in range(a, z + 1)}
        if not d['rv']: del d['rv']
        if not d['rvv']: del d['rvv']
        with open(os.path.join(SALIDA, f'{cod}.json'), 'w', encoding='utf8') as o:
            json.dump(d, o, ensure_ascii=False, separators=(',', ':'))
    print(len(orden), 'lemas;', total, 'palabras en', len(LIBROS), 'libros')


if __name__ == '__main__':
    main()
