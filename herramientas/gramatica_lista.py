# Uso: python3 herramientas/gramatica_lista.py  (desde la raíz del repositorio)
# Paso 1 del vocabulario de «Vocabulario y gramática básica del hebreo bíblico»:
# cuenta las palabras hebreas del Códice de Leningrado (OSHB) por número de Strong, sin los
# prefijos de una letra (ב, ה, ו, כ, ל, מ, ש) y sin el arameo, y escribe en
# herramientas/gramatica/frecuencias.tsv las 751 más frecuentes, con la forma del
# léxico, la clase de palabra, la glosa inglesa de Strong (solo de referencia) y un versículo
# de ejemplo (la primera aparición cuya numeración coincide con la de la Reina-Valera).
# Necesita los XML de OSHB en herramientas/biblia/fuentes/wlc/ (wlc.py) y el léxico
# HebrewStrong.xml de openscriptures/HebrewLexicon en herramientas/biblia/fuentes/.
import os, re, sys, collections, xml.etree.ElementTree as ET
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
sys.path.insert(0, os.path.join(R, 'herramientas'))
import wlc
F = os.path.join(R, 'herramientas', 'biblia', 'fuentes')
NS = '{http://www.bibletechnologies.net/2003/OSIS/namespace}'
CANTIDAD = 751  # decisión del responsable (06-11-2026): las 751 palabras hebreas más frecuentes
inv = {v: k for k, v in wlc.LIBROS.items()}
ORDEN = list(wlc.LIBROS.values())
# Numeración del Códice de Leningrado → numeración inglesa (la de la RV 1960)
vm = ET.parse(os.path.join(F, 'wlc', 'VerseMap.xml')).getroot()
MAPA = {}
for v in vm.iter():
    if v.get('wlc'):
        MAPA[v.get('wlc')] = (v.get('kjv'), v.get('type'))
cuenta = collections.Counter(); ejemplo = {}
for libro in ORDEN:
    raiz = ET.parse(os.path.join(F, 'wlc', libro + '.xml')).getroot()
    for verso in raiz.iter(NS + 'verse'):
        osis = verso.get('osisID')
        if osis in MAPA:
            kjv, tipo = MAPA[osis]
            ref = kjv if (tipo == 'full' and kjv) else None
        else:
            ref = osis
        for i, w in enumerate(verso.iter(NS + 'w')):
            if not w.get('morph', '').startswith('H'):
                continue  # arameo
            nums = re.findall(r'(\d+)', w.get('lemma', ''))
            if not nums:
                continue
            n = nums[-1]
            cuenta[n] += 1
            if n not in ejemplo and ref:
                forma = ''.join(w.itertext()).replace('/', '')
                ejemplo[n] = (ref, wlc.ACENTOS.sub('', forma), osis, i)
lex = {}
for e in ET.parse(os.path.join(F, 'HebrewStrong.xml')).getroot().iter():
    if e.tag.endswith('entry'):
        n = e.get('id', '')[1:]
        w = next((x for x in e if x.tag.endswith('w')), None)
        if w is None: continue
        usage = ''.join(next((x for x in e if x.tag.endswith('usage')), ET.Element('u')).itertext()).strip()
        defs = [''.join(d.itertext()) for d in e.iter() if d.tag.endswith('def')]
        lex[n] = (w.text or '', w.get('pos', ''), '; '.join(defs)[:80], usage[:120])
def cod(ref):
    l, c, v = ref.split('.')
    return f'{inv[l]}/{c}/{v}'
filas = cuenta.most_common(CANTIDAD)
with open(os.path.join(R, 'herramientas', 'gramatica', 'frecuencias.tsv'), 'w', encoding='utf-8') as f:
    f.write('strong\tveces\the\tclase\tforma_ejemplo\tejemplo\tdef\tusage\twlc\tpalabra\n')
    for n, k in filas:
        he, pos, d, u = lex.get(n, ('?', '?', '', ''))
        ref, forma, osis, i = ejemplo.get(n, ('', '', '', ''))
        f.write(f'{n}\t{k}\t{he}\t{pos}\t{forma}\t{cod(ref) if ref else ""}\t{d}\t{u}\t{cod(osis) if osis else ""}\t{i}\n')
tot = sum(cuenta.values())
print(len(filas), "palabras (la última aparece", filas[-1][1], "veces); cubren", f'{sum(k for _, k in filas)/tot:.1%}', 'de', tot)
