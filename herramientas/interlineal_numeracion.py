# Interlineal hebreo–español · numeración de las otras versiones (desde la v2.51).
# Los datos de cada libro traen la correspondencia hebreo → RV 1960 ("rv", de interlineal_datos.py).
# La RV 1909 y la RV 1865 numeran distinto en unos pocos capítulos (Jonás 1–2, Job 38–41, Salmo 47…).
# Este script alinea por texto, en esos capítulos, cada versículo de la RV 1960 con el de la otra versión y
# agrega a datos/{libro}.json  "rvv": {"rv1909": {"cap:vers RV 1960": "cap:vers" | null}}  (null: el texto
# va unido al versículo anterior en esa versión). Se corre después de interlineal_datos.py.
import os, re, json, difflib, unicodedata
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.path.join(RAIZ, 'public', 'biblia')
DATOS = os.path.join(RAIZ, 'public', 'apps', 'interlineal-hebreo', 'interlineal', 'datos')
V = json.load(open(os.path.join(B, 'indice.json'), encoding='utf8'))['versiculos']

def cap(ver, libro, c):
    f = os.path.join(B, ver, libro, f'{c}.json')
    return json.load(open(f, encoding='utf8')) if os.path.exists(f) else []

def norm(t):
    t = unicodedata.normalize('NFD', (t or '').lower())
    t = ''.join(ch for ch in t if unicodedata.category(ch) != 'Mn')
    return re.findall(r'[a-zñ]+', t)

def sim(a, b):
    return difflib.SequenceMatcher(None, a, b, autojunk=False).ratio() if a and b else 0

def main():
    for f in sorted(os.listdir(DATOS)):
        libro = f[:-5]
        p = os.path.join(DATOS, f)
        d = json.load(open(p, encoding='utf8'))
        d.pop('rvv', None)
        for ver in ('rv1909', 'rv1865'):
            a, c = V['rv1960'].get(libro, []), V[ver].get(libro, [])
            raros = set()
            for i in range(max(len(a), len(c))):
                x = a[i] if i < len(a) else 0
                y = c[i] if i < len(c) else 0
                vacio = y and any(not (t or '').strip() for t in cap(ver, libro, i + 1))
                if x != y or vacio:
                    raros |= {i, i + 1, i + 2}
            mapa = {}
            # Bloques de capítulos contiguos con diferencias, más un capítulo a cada lado
            orden = sorted(x for x in raros if 1 <= x <= max(len(a), len(c)))
            bloques, act = [], []
            for c0 in orden:
                if act and c0 != act[-1] + 1:
                    bloques.append(act); act = []
                act.append(c0)
            if act:
                bloques.append(act)
            for bl in bloques:
                bl = [x for x in range(bl[0] - 1, bl[-1] + 2) if x >= 1]
                r = [(c0, v0, norm(t)) for c0 in bl for v0, t in enumerate(cap('rv1960', libro, c0), 1)]
                o = [(c0, v0, norm(t)) for c0 in bl for v0, t in enumerate(cap(ver, libro, c0), 1)]
                if not r or not o:
                    continue
                # Alineación monótona: cada versículo de la RV 1960 va a un versículo de la otra versión,
                # en orden; dos pueden ir al mismo (versículos unidos). Desempata a favor del mismo número.
                def puntaje(x, y):
                    w, w2 = x[2], y[2]
                    if not w or not w2:
                        return -1
                    m = difflib.SequenceMatcher(None, w, w2, autojunk=False)
                    cont = sum(b.size for b in m.get_matching_blocks()) / len(w)
                    return cont + (0.05 if (x[0], x[1]) == (y[0], y[1]) else 0)
                n, m_ = len(r), len(o)
                S = [[puntaje(r[i0], o[j0]) for j0 in range(m_)] for i0 in range(n)]
                dp = [[0.0] * m_ for _ in range(n)]
                de = [[0] * m_ for _ in range(n)]
                for j0 in range(m_):
                    dp[0][j0] = S[0][j0]
                for i0 in range(1, n):
                    mejor, arg = -1e9, 0
                    for j0 in range(m_):
                        if dp[i0 - 1][j0] > mejor:
                            mejor, arg = dp[i0 - 1][j0], j0
                        dp[i0][j0] = S[i0][j0] + mejor
                        de[i0][j0] = arg
                j0 = max(range(m_), key=lambda k: dp[n - 1][k])
                for i0 in range(n - 1, -1, -1):
                    x, y = r[i0], o[j0]
                    if (x[0], x[1]) != (y[0], y[1]):
                        mapa[f'{x[0]}:{x[1]}'] = f'{y[0]}:{y[1]}'
                    if i0:
                        j0 = de[i0][j0]
            if mapa:
                d.setdefault('rvv', {})[ver] = mapa
                print(ver, libro, mapa)
        with open(p, 'w', encoding='utf8') as fh:
            json.dump(d, fh, ensure_ascii=False, separators=(',', ':'))

if __name__ == '__main__':
    main()
