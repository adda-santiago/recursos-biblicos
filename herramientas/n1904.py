# Texto griego del Nuevo Testamento para los recursos (desde la v2.52).
# Fuente: Nestle 1904 (Eberhard Nestle, dominio público), en la edición de biblicalhumanities.org
# (texto base de Diego Renato dos Santos, dominio público; morfología, lemas y números de Strong
# de Ulrik Sandborg-Petersen, CC0). El CSV se descarga aparte en herramientas/biblia/fuentes/n1904/
# (no se sube al repositorio):
#   curl -o herramientas/biblia/fuentes/n1904/Nestle1904.csv \
#     https://raw.githubusercontent.com/biblicalhumanities/Nestle1904/master/morph/Nestle1904.csv
# Uso desde otro script: from n1904 import verso, palabras
#   verso('jn', 1, 1)     → texto del versículo con acentos y puntuación
#   palabras('jn', 1, 1)  → lista de palabras, sin la puntuación
#   morfologia('jn', 1, 1) → lista de (palabra, morfología, strong, lema)
import os, csv, unicodedata
DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'biblia', 'fuentes', 'n1904')
# Códigos del sitio (citas.js) → abreviaturas del CSV
LIBROS = {'mt': 'Matt', 'mr': 'Mark', 'lc': 'Luke', 'jn': 'John', 'hch': 'Acts', 'ro': 'Rom', '1co': '1Cor', '2co': '2Cor',
          'ga': 'Gal', 'ef': 'Eph', 'fil': 'Phil', 'col': 'Col', '1ts': '1Thess', '2ts': '2Thess', '1ti': '1Tim', '2ti': '2Tim',
          'tit': 'Titus', 'flm': 'Phlm', 'he': 'Heb', 'stg': 'Jas', '1p': '1Pet', '2p': '2Pet', '1jn': '1John', '2jn': '2John',
          '3jn': '3John', 'jud': 'Jude', 'ap': 'Rev'}
_v = None
PUNT = '.,;·’·;'

def _cargar():
    global _v
    if _v is None:
        _v = {}
        with open(os.path.join(DIR, 'Nestle1904.csv'), encoding='utf-8-sig') as f:
            r = csv.reader(f, delimiter='\t')
            next(r)
            for fila in r:
                _v.setdefault(fila[0], []).append([unicodedata.normalize('NFC', x) for x in fila[1:6]])
    return _v

def _fil(cod, cap, v):
    clave = f'{LIBROS[cod]} {cap}:{v}'
    filas = _cargar().get(clave)
    if not filas:
        raise KeyError(f'No existe {clave} en Nestle 1904')
    return filas

def _limpia(w):
    return w.strip('()[]—').rstrip('.,;·\u0387\u037e').strip('()[]')

def verso(cod, cap, v):
    return ' '.join(f[0] for f in _fil(cod, cap, v))

def palabras(cod, cap, v):
    # la apóstrofe de elisión (ἀλλ’) es parte de la palabra
    return [_limpia(f[0]) for f in _fil(cod, cap, v)]

def morfologia(cod, cap, v):
    return [(_limpia(f[0]), f[1], f[3], f[4]) for f in _fil(cod, cap, v)]
