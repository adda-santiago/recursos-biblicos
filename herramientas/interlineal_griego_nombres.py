# Interlineal griego–español · propuesta de nombres propios con la grafía de la RV 1960 (desde la v2.57).
# Empareja cada lema de nombre propio (lema con mayúscula) con la palabra en mayúscula que lo traduce en la RV 1960,
# versículo por versículo, y deja la propuesta en herramientas/interlineal_griego/nombres_auto.tsv para revisarla.
# Lo revisado a mano va en herramientas/interlineal_griego/glosas_*.txt, que tienen prioridad.
import os, re, json, csv, collections, unicodedata, difflib, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from griego_tr import tr
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DAT = os.path.join(RAIZ, 'public', 'apps', 'interlineal-griego', 'interlineal', 'datos')
BIB = os.path.join(RAIZ, 'public', 'biblia', 'rv1960')
T = os.path.join(RAIZ, 'herramientas', 'interlineal_griego')
NO = set('''Dios Señor Espíritu Santo Padre Hijo Él El La Los Las Y Mas Pero Porque Oh He Así Entonces Ni Si No Yo Tú
Te Mi Mas Bienaventurados Bienaventurado Ahora Pues Amén Por Para De Que Cuando Este Esta Estos Estas Cristo Jesús
Maestro Rabí Hijo Verbo Cordero Altísimo Todopoderoso'''.split())


def sin_tildes(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')


def palabras_rv(t):
    out = []
    for m in re.finditer(r"([^\s.,;:?!¿¡()«»“”\"']+)", t):
        w = m.group(1)
        antes = t[:m.start()].rstrip()
        if not antes or antes[-1] in '.?!:¿¡«“"(':
            continue
        if w[0].isupper() and w not in NO and not w.isupper():
            out.append(w.strip('-'))
    return out


def main():
    lemas = list(csv.DictReader(open(os.path.join(T, 'lemas.tsv'), encoding='utf8'), delimiter='\t'))
    nombres = {int(x['n']) for x in lemas if x['lema'][:1].isupper()}
    co = collections.defaultdict(collections.Counter)
    fl = collections.Counter()
    for f in sorted(os.listdir(DAT)):
        d = json.load(open(os.path.join(DAT, f), encoding='utf8'))
        cod = d['l']
        for ci, vs in enumerate(d['c'], 1):
            rvc = json.load(open(os.path.join(BIB, cod, f'{ci}.json'), encoding='utf8'))
            for vi, pals in enumerate(vs, 1):
                if not pals:
                    continue
                txt = rvc[vi - 1] if vi - 1 < len(rvc) else ''
                cands = set(palabras_rv(txt))
                for n in {p[2] for p in pals if p[2] in nombres}:
                    fl[n] += 1
                    for c in cands:
                        co[n][c] += 1
    with open(os.path.join(T, 'nombres_auto.tsv'), 'w', encoding='utf8') as o:
        for x in lemas:
            n = int(x['n'])
            if n not in nombres:
                continue
            t = sin_tildes(tr(x['lema']))
            mejor, pm = '', -1
            for c, k in co[n].items():
                s = k / max(fl[n], 1) + difflib.SequenceMatcher(None, t, sin_tildes(c)).ratio()
                if s > pm:
                    mejor, pm = c, s
            o.write(f"{x['lema']}\t{mejor or tr(x['lema'])}\t{round(pm, 2)}\t{fl[n]}\n")
    print(len(nombres), 'nombres propios')


if __name__ == '__main__':
    main()
