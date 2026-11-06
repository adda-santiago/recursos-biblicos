# Texto hebreo del Antiguo Testamento para los recursos (desde la v2.48).
# Fuente: Códice de Leningrado (Westminster Leningrad Codex 4.20, dominio público) en la edición
# de Open Scriptures Hebrew Bible (OSHB, morfología CC BY 4.0). Los XML se descargan aparte en
# herramientas/biblia/fuentes/wlc/ (no se suben al repositorio):
#   for b in Gen Exod ...; do curl -o herramientas/biblia/fuentes/wlc/$b.xml \
#     https://raw.githubusercontent.com/openscriptures/morphhb/master/wlc/$b.xml; done
# Uso desde otro script: from wlc import verso, palabras
#   verso('gn', 1, 1)              → texto con vocales, sin acentos de cantilación
#   verso('gn', 1, 1, acentos=True) → texto con todos los signos masoréticos
#   palabras('gn', 1, 1)           → lista de palabras (las unidas por maqaf van juntas)
import os, re, xml.etree.ElementTree as ET
DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'biblia', 'fuentes', 'wlc')
# Códigos del sitio (citas.js) → archivos de OSHB
LIBROS = {'gn': 'Gen', 'ex': 'Exod', 'lv': 'Lev', 'nm': 'Num', 'dt': 'Deut', 'jos': 'Josh', 'jue': 'Judg', 'rt': 'Ruth',
          '1s': '1Sam', '2s': '2Sam', '1r': '1Kgs', '2r': '2Kgs', '1cr': '1Chr', '2cr': '2Chr', 'esd': 'Ezra', 'neh': 'Neh',
          'est': 'Esth', 'job': 'Job', 'sal': 'Ps', 'pr': 'Prov', 'ec': 'Eccl', 'cnt': 'Song', 'is': 'Isa', 'jer': 'Jer',
          'lm': 'Lam', 'ez': 'Ezek', 'dn': 'Dan', 'os': 'Hos', 'jl': 'Joel', 'am': 'Amos', 'abd': 'Obad', 'jon': 'Jonah',
          'mi': 'Mic', 'nah': 'Nah', 'hab': 'Hab', 'sof': 'Zeph', 'hag': 'Hag', 'zac': 'Zech', 'mal': 'Mal'}
NS = '{http://www.bibletechnologies.net/2003/OSIS/namespace}'
_cache = {}
ACENTOS = re.compile('[֑-ֽ֯׀ׅׄ]')  # cantilación, meteg, paseq, puntos superiores e inferiores

def _libro(cod):
    f = LIBROS[cod]
    if f not in _cache:
        raiz = ET.parse(os.path.join(DIR, f + '.xml')).getroot()
        _cache[f] = {v.get('osisID'): v for v in raiz.iter(NS + 'verse')}
    return f, _cache[f]

def _texto(v, acentos):
    partes = []
    for el in v:
        tag = el.tag.replace(NS, '')
        if tag == 'w':
            t = ''.join(el.itertext()).replace('/', '')
            partes.append(('w', t))
        elif tag == 'seg':
            partes.append(('s', el.text or ''))
        # las notas (qere, variantes) se omiten: queda el texto escrito del códice
    out = ''
    for k, t in partes:
        if k == 'w':
            out += ('' if not out or out.endswith('־') else ' ') + t
        else:
            if t == '׃':
                out += t
            elif t == '־':
                out += t
            elif t in ('פ', 'ס'):   # petuja y setuma (marcas de párrafo)
                continue
            else:
                out += t
    if not acentos:
        out = ACENTOS.sub('', out)
    return re.sub(r'\s+', ' ', out).strip()

def verso(cod, cap, vers, acentos=False):
    f, vs = _libro(cod)
    return _texto(vs[f'{f}.{cap}.{vers}'], acentos)

def palabras(cod, cap, vers):
    t = verso(cod, cap, vers).replace('׃', '')
    return t.split()

if __name__ == '__main__':
    for r in [('gn', 1, 1), ('dt', 6, 4), ('nm', 6, 24), ('sal', 23, 1), ('is', 7, 14)]:
        print(r, verso(*r)); print('  ', verso(*r, acentos=True)); print('  ', palabras(*r))
