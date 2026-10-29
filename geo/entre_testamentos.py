"""Genera public/apps/entre-los-testamentos/entre-geo.js: la geografía propia de «Entre los Testamentos».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js) lo que usa solo este recurso:
  · tres etapas del territorio judío bajo los macabeos y los asmoneos (164, 142 y 104 a.C.); la cuarta
    (c. 76 a.C.) es la capa h-asmoneo de La tierra de Israel, que la página carga antes que este archivo;
  · lugares (Bet-sur, monte Gerizim, Araq el-Emir, Herodión, Maresa, Pelusio…) y trazos (Antíoco IV en
    Egipto, Pompeyo hacia Jerusalén).
Las etapas se recortan con la costa usando las capas de tierra-geo.js, que ya están recortadas con
Natural Earth: por eso este script no necesita los datos de Natural Earth.

*** Contornos y trazos APROXIMADOS e ILUSTRATIVOS. ***

Uso:  pip install shapely  ·  python geo/entre_testamentos.py   (después de geo/tierra.py)
Coordenadas [latitud, longitud].
"""
import json, os, re
from shapely.geometry import Polygon
from shapely.ops import unary_union

AQUI = os.path.dirname(os.path.abspath(__file__))
APPS = os.path.join(AQUI, '..', 'public', 'apps')
SALIDA = os.path.join(APPS, 'entre-los-testamentos', 'entre-geo.js')

# Máscara de tierra firme: capas de La tierra de Israel ya recortadas con la costa
txt = open(os.path.join(APPS, 'tierra-de-israel', 'tierra-geo.js'), encoding='utf-8').read()
T = json.loads(re.search(r'const X = (\{.*?\});\n', txt, re.S).group(1))
def geom(pid):
    return unary_union([Polygon([(lo, la) for la, lo in anillo]) for anillo in T['polys'][pid] if len(anillo) > 3]).buffer(0)
MASCARA = unary_union([geom(p) for p in ['h-canaan', 'h-herodes', 'h-asmoneo', 'h-salomon', 'nt-judea', 'nt-idumea', 'nt-samaria', 'nt-perea']]).buffer(0)

def P(pts): return Polygon([(lo, la) for la, lo in pts]).buffer(0)
def polis(g):
    g = g.simplify(0.003, preserve_topology=True)
    out = []
    for p in (list(g.geoms) if hasattr(g, 'geoms') else [g]):
        if isinstance(p, Polygon) and p.area > 2e-5:
            out.append([[round(y, 3), round(x, 3)] for x, y in p.exterior.coords])
    return out

POLYS, CAPAS = {}, {}
def etapa(id, n, periodo, pts, rot, color='#5e7d4f'):
    POLYS[id] = polis(P(pts).intersection(MASCARA))
    CAPAS[id] = {'n': n, 'periodo': periodo, 'color': color, 'polys': [id], 'rot': rot}

etapa('a-judas', 'Judea de Judas Macabeo', '164 a.C.',
      [[32.0, 35.0], [32.02, 35.35], [31.85, 35.5], [31.6, 35.45], [31.52, 35.15], [31.6, 34.95], [31.85, 34.93]], [31.78, 35.2])
etapa('a-simon', 'Judea independiente', 'Simón, 142 a.C.',
      [[32.12, 34.7], [32.15, 35.0], [32.1, 35.35], [31.95, 35.5], [31.7, 35.5], [31.52, 35.45], [31.5, 35.1], [31.6, 34.85], [31.85, 34.82], [32.0, 34.68]], [31.85, 35.15])
etapa('a-hircano', 'Reino de Juan Hircano', 'c. 104 a.C.',
      [[32.62, 34.88], [32.58, 35.5], [32.3, 35.62], [32.0, 35.92], [31.7, 35.88], [31.5, 35.62], [31.2, 35.42], [30.98, 35.2], [31.02, 34.7], [31.45, 34.72],
       [31.75, 34.66], [32.1, 34.66], [32.45, 34.85]], [31.75, 35.15])

LUGARES = {
    'bet-sur': ['Bet-sur', 31.59, 35.08, 'left'],
    'monte-gerizim': ['Monte Gerizim', 32.2, 35.27, 'right'],
    'iraq-el-emir': ['Araq el-Emir (Tobíadas)', 31.91, 35.75, 'right'],
    'herodion': ['Herodión', 31.666, 35.241, 'right'],
    'maresa': ['Maresa', 31.6, 34.9, 'left'],
    'pelusio': ['Pelusio', 31.04, 32.55, 'bottom'],
    'dafne': ['Dafne', 36.13, 36.15, 'left'],
    'ipso': ['Ipso', 38.6, 30.9],
    'accion': ['Accio', 38.95, 20.75, 'left'],
    'seforis': ['Séforis', 32.75, 35.28, 'left'],
}
TRAZOS = {
    'et-antioco-168': {'n': 'Antíoco IV contra Egipto (169–168 a.C.)', 'l': [[36.2, 36.16], [34.4, 35.85], [33.27, 35.2], [31.5, 34.46], [31.04, 32.55], [31.2, 29.92]]},
    'et-antioco-regreso': {'n': 'El regreso por Jerusalén (168–167 a.C.)', 'l': [[31.2, 29.92], [31.04, 32.55], [31.5, 34.46], [31.78, 35.23]]},
    'et-pompeyo': {'n': 'Pompeyo hacia Jerusalén (63 a.C.)', 'l': [[33.51, 36.29], [32.65, 35.68], [32.2, 35.6], [31.87, 35.44], [31.78, 35.23]]},
}

X = {'polys': POLYS, 'capas': CAPAS, 'lugares': LUGARES, 'trazos': TRAZOS}
JS = ('/* ==========================================================\n'
      '   entre-geo.js — Geografía propia de «Entre los Testamentos»\n'
      '   Generado por geo/entre_testamentos.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y de ../tierra-de-israel/tierra-geo.js.\n'
      '   *** Contornos y trazos APROXIMADOS e ILUSTRATIVOS. ***\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n  const X = ' + json.dumps(X, ensure_ascii=False, separators=(',', ':')) + ';\n'
      "  ['polys', 'capas', 'lugares', 'trazos'].forEach(k => Object.assign(G[k], X[k]));\n})();\n")
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
open(SALIDA, 'w', encoding='utf-8').write(JS)
print('entre-geo.js:', len(JS), 'caracteres;', {k: len(v) for k, v in POLYS.items()}, 'polígonos')
