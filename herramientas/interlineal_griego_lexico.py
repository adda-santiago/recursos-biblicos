# Interlineal griego–español · léxico con las glosas en español (desde la v2.57).
# Junta, por lema de Nestle 1904, la glosa en español:
#   1. herramientas/interlineal_griego/glosas_1.txt … _8.txt   escritas a mano desde el léxico de Strong
#   2. herramientas/interlineal_griego/nombres_revisados.txt   nombres propios y gentilicios (grafía de la RV 1960)
#   3. herramientas/interlineal_griego/glosas_0.txt            las 1.124 palabras del vocabulario (primer sentido)
# y escribe public/apps/interlineal-griego/interlineal/lexico.js:
#   window.LEXICO_G = [[lema, glosa, transliteración, veces, Strong, 1 si está en el vocabulario, sentido completo del vocabulario], …]
#   en el orden de herramientas/interlineal_griego/lemas.tsv (el n.º de lema de cada palabra en datos/).
# Convención de las glosas: sustantivos con artículo (el/la/los/las: da el género en español); "=" al comienzo =
# invariable (no se pluraliza ni lleva artículo); verbos en infinitivo; adjetivos en masculino singular.
# Para corregir una glosa se edita el .txt y se vuelve a correr este script, nunca lexico.js.
import os, csv, json, sys, glob
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from griego_tr import tr

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = os.path.join(RAIZ, 'herramientas', 'interlineal_griego')
SALIDA = os.path.join(RAIZ, 'public', 'apps', 'interlineal-griego', 'interlineal', 'lexico.js')


def leer(f):
    d = {}
    for l in open(f, encoding='utf8'):
        if l.strip() and not l.startswith('#'):
            lem, g = l.rstrip('\n').split('|', 1)
            d[lem] = g.strip()
    return d


def main():
    lemas = list(csv.DictReader(open(os.path.join(T, 'lemas.tsv'), encoding='utf8'), delimiter='\t'))
    manual = {}
    for f in sorted(glob.glob(os.path.join(T, 'glosas_[1-9].txt'))):
        manual.update(leer(f))
    nombres = leer(os.path.join(T, 'nombres_revisados.txt'))
    g0 = leer(os.path.join(T, 'glosas_0.txt'))
    # sentido completo de las 1.124 palabras del vocabulario (lema|clase|tema|sentido), para la ficha de la palabra
    vocab = {}
    for l in open(os.path.join(RAIZ, 'herramientas', 'gramatica_griega', 'glosas.txt'), encoding='utf8'):
        if '|' in l and not l.startswith('#'):
            p = l.rstrip('\n').split('|')
            vocab[p[0]] = p[3] if len(p) > 3 else ''
    out, falta = [], []
    for x in lemas:
        lem = x['lema']
        g = manual.get(lem) or nombres.get(lem) or g0.get(lem)
        if not g:
            falta.append(lem)
            g = '?'
        st = int(x['strong']) if x['strong'].isdigit() else 0
        out.append([lem, g, tr(lem.split(' (')[0]), int(x['veces']), st, 1 if lem in vocab else 0, vocab.get(lem, '')])
    sobran = set(manual) - {x['lema'] for x in lemas}
    with open(SALIDA, 'w', encoding='utf8') as fh:
        fh.write('// Interlineal griego–español · léxico (generado por herramientas/interlineal_griego_lexico.py; no editar a mano)\n')
        fh.write('// [lema, glosa, transliteración, veces en el NT, Strong, 1 = está en el vocabulario de 1.124 palabras, sentidos según el vocabulario]\n')
        fh.write('window.LEXICO_G=' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print(len(out), 'lemas;', len(falta), 'sin glosa:', ' '.join(falta[:40]), '; glosas sin lema:', ' '.join(sorted(sobran)[:20]))


if __name__ == '__main__':
    main()
