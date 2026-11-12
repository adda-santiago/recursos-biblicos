# Interlineal hebreo–español · propuesta de nombres propios con la grafía de la RV 1960 (desde la v2.51).
# Empareja cada lema de nombre propio (morfología Np) con la palabra en mayúscula que lo traduce en la RV 1960,
# versículo por versículo, y deja la propuesta en herramientas/interlineal/nombres_auto.tsv para revisarla.
# Lo revisado a mano va en herramientas/interlineal/glosas_*.txt, que tienen prioridad.
import os, re, json, collections, sys, unicodedata
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DAT = os.path.join(RAIZ, 'public', 'apps', 'interlineal-hebreo', 'interlineal', 'datos')
BIB = os.path.join(RAIZ, 'public', 'biblia', 'rv1960')
NO = set('''Dios Jehová Señor SEÑOR Altísimo Omnipotente Todopoderoso Santo Espíritu Creador Redentor Rey Pastor
Fuerte Dios Padre Hijo Él El La Los Las Y Mas Pero Porque Oh Ah He Así Entonces Ni Si No Yo Tú Te Mi Ve Ven Mira Sea
Bendito Bienaventurado Ahora Pues Aleluya Selah Sela Amén Por Para De Que Cuando Este Esta Estos Estas'''.split())

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

def sin_tildes(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if unicodedata.category(c) != 'Mn')

def main():
    lex = {}
    s = open(os.path.join(RAIZ, 'herramientas', 'biblia', 'fuentes', 'HebrewStrong.xml'), encoding='utf8').read()
    for m in re.finditer(r'<entry id="H(\d+)">(.*?)</entry>', s, re.S):
        d = re.findall(r'<def>(.*?)</def>', m.group(2))
        xl = re.search(r'xlit="([^"]*)"', m.group(2))
        lex[m.group(1)] = (d[0] if d else '', xl.group(1) if xl else '')
    co = collections.defaultdict(collections.Counter)
    fl = collections.Counter()
    versos = []
    for f in sorted(os.listdir(DAT)):
        d = json.load(open(os.path.join(DAT, f), encoding='utf8'))
        cod = d['l']
        cache = {}
        for ci, vs in enumerate(d['c'], 1):
            for vi, pals in enumerate(vs, 1):
                ref = d['rv'].get(f'{ci}:{vi}', f'{ci}:{vi}')
                if ref == 't':
                    continue
                rc, rv = map(int, ref.split(':'))
                if rc not in cache:
                    try: cache[rc] = json.load(open(os.path.join(BIB, cod, f'{rc}.json'), encoding='utf8'))
                    except FileNotFoundError: cache[rc] = []
                txt = cache[rc][rv - 1] if rv - 1 < len(cache[rc]) else ''
                nps = set()
                for p in pals:
                    w = p[5][0] if len(p) == 6 and p[5] else p
                    for lp, mp in zip(w[2].split('/'), w[3][1:].split('/')):
                        num = re.sub(r'\D', '', lp.split('+')[0])
                        if num and mp.startswith('Np') and num not in ('3068', '3069'):
                            nps.add(num)
                cands = set(palabras_rv(txt))
                for n in nps:
                    fl[n] += 1
                    for w in cands:
                        co[n][w] += 1
                versos.append((nps, cands))
    asignado = {}
    # emparejamiento por coocurrencia y por parecido con la transliteración de Strong
    import difflib
    def norm(x):
        x = sin_tildes(re.sub(r"[ʼʻᵉ^\u02bc\u02bb]", '', x))
        for a_, b_ in (('sh', 's'), ('ch', 'j'), ('ts', 's'), ('tz', 's'), ('ph', 'f'), ('th', 't'), ('k', 'c'), ('q', 'c'),
                       ('w', 'v'), ('b', 'v'), ('y', 'i'), ('z', 's'), ('h', ''), ('j', 'i'), ('ee', 'e'), ('aa', 'a'),
                       ('oo', 'o'), ('uu', 'u'), ('ii', 'i'), ('x', 's')):
            x = x.replace(a_, b_)
        return re.sub(r'[^a-z]', '', x)
    for n, c in co.items():
        if not c:
            continue
        xl = lex.get(n, ('', ''))[1]
        def score(kv):
            w, k = kv
            sim = difflib.SequenceMatcher(None, norm(w), norm(xl)).ratio()
            return (k / fl[n]) * 0.5 + sim * 0.5, sim
        mejor = max(c.items(), key=lambda kv: score(kv)[0])
        sc, sim = score(mejor)
        asignado[n] = (mejor[0], sim, fl[n])
    with open(os.path.join(RAIZ, 'herramientas', 'interlineal', 'nombres_auto.tsv'), 'w', encoding='utf8') as fh:
        for n in sorted(asignado, key=lambda x: int(x)):
            w, conf, f = asignado[n]
            fh.write(f'{n}\t{w}\t{conf:.2f}\t{f}\t{lex.get(n, ("", ""))[1]}\n')
    print(len(asignado), 'nombres propuestos')

if __name__ == '__main__':
    main()
