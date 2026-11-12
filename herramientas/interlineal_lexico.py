# Interlineal hebreo–español · léxico con las glosas en español (desde la v2.51).
# Junta, por número de Strong, la glosa en español de cada lema:
#   1. herramientas/interlineal/nombres_revisados.txt   nombres propios corregidos a mano
#   2. herramientas/interlineal/glosas_0.txt              las 751 palabras del vocabulario (primer sentido)
#   3. herramientas/interlineal/glosas_1.txt … _7.txt     el resto, escritas a mano desde el léxico de Strong
#   4. herramientas/interlineal/nombres_auto.tsv          nombres propios con la grafía de la RV 1960 (interlineal_nombres.py)
# y escribe public/apps/interlineal-hebreo/interlineal/lexico.js:
#   window.LEXICO = { "1254": [glosa, lema hebreo, transliteración, veces, 1 si está en el vocabulario], … }
# Convención de las glosas: sustantivos con artículo (el/la/los/las, da el género para el plural y el artículo);
# "=" al comienzo = invariable (no se pluraliza); verbos en infinitivo; adjetivos en masculino singular.
import os, re, csv, json, sys, glob
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from interlineal_datos import translit

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = os.path.join(RAIZ, 'herramientas', 'interlineal')
SALIDA = os.path.join(RAIZ, 'public', 'apps', 'interlineal-hebreo', 'interlineal', 'lexico.js')

def leer(f):
    d = {}
    for l in open(f, encoding='utf8'):
        if l[:1].isdigit():
            n, g = l.rstrip('\n').split('|', 1)
            d[n] = g.strip()
    return d

def main():
    lemas = list(csv.DictReader(open(os.path.join(T, 'lemas.tsv'), encoding='utf8'), delimiter='\t'))
    s = open(os.path.join(RAIZ, 'herramientas', 'biblia', 'fuentes', 'HebrewStrong.xml'), encoding='utf8').read()
    lex = {}
    for m in re.finditer(r'<entry id="H(\d+)">(.*?)</entry>', s, re.S):
        w = re.search(r'<w [^>]*>([^<]*)</w>', m.group(2))
        lex[m.group(1)] = w.group(1) if w else ''
    vocab = {}
    for l in open(os.path.join(RAIZ, 'herramientas', 'gramatica', 'glosas.txt'), encoding='utf8'):
        if l[:1].isdigit():
            p = l.split('|')
            vocab[p[0]] = p[1]
    rev = leer(os.path.join(T, 'nombres_revisados.txt'))
    g0 = leer(os.path.join(T, 'glosas_0.txt'))
    manual = {}
    for f in sorted(glob.glob(os.path.join(T, 'glosas_[1-9].txt'))):
        manual.update(leer(f))
    auto = {}
    for l in open(os.path.join(T, 'nombres_auto.tsv'), encoding='utf8'):
        p = l.rstrip('\n').split('\t')
        auto[p[0]] = p[1]
    out, falta = {}, []
    for x in lemas:
        n = x['strong']
        g = rev.get(n) or g0.get(n) or manual.get(n) or auto.get(n)
        if not g:
            falta.append(n)
            g = '?'
        he = lex.get(n, '')
        tr = vocab.get(n) or translit(he)
        if x['clase'].split(',')[0].endswith('Np') and tr:
            tr = tr[:1].upper() + tr[1:]
        out[n] = [g, he, tr, int(x['veces']), 1 if n in vocab else 0]
    with open(SALIDA, 'w', encoding='utf8') as fh:
        fh.write('// Interlineal hebreo–español · léxico (generado por herramientas/interlineal_lexico.py; no editar a mano)\n')
        fh.write('// [glosa, lema hebreo, transliteración, veces en el AT, 1 = está en el vocabulario de 751 palabras]\n')
        fh.write('window.LEXICO=' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print(len(out), 'lemas;', len(falta), 'sin glosa:', ' '.join(falta[:40]))

if __name__ == '__main__':
    main()
