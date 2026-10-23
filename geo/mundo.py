"""Genera public/apps/assets/js/mapa-mundo.js: mapa base vectorial del MUNDO.

Mismo formato que mapa-base.js (window.MAPA_BASE = { tierra, lagos, rios }), pero con todos los
continentes, para los recursos cuya historia sale del mundo bíblico (historia de la iglesia,
misiones, expansión del cristianismo). Una página carga mapa-base.js O mapa-mundo.js, nunca ambos.

Tierra y lagos de Natural Earth 1:50m; ríos principales de Natural Earth 1:110m (dominio público).
Simplificado para que pese poco: se pierden islas muy pequeñas y detalle de costa.

Uso:  pip install shapely  ·  python geo/mundo.py
Requiere en geo/ (no se suben al repositorio): ne_50m_land.geojson, ne_50m_lakes.geojson,
  ne_110m_rivers_lake_centerlines.geojson   (github.com/nvkelso/natural-earth-vector, carpeta geojson)
Coordenadas [latitud, longitud].
"""
import json, os
from shapely.geometry import shape, Polygon, LineString

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'assets', 'js', 'mapa-mundo.js')
def feats(n): return json.load(open(os.path.join(AQUI, n), encoding='utf-8'))['features']

def anillos(g, tol, minimo):
    g = g.simplify(tol, preserve_topology=True)
    out = []
    for p in (g.geoms if hasattr(g, 'geoms') else [g]):
        if not isinstance(p, Polygon) or p.area < minimo: continue
        out.append([[round(y, 2), round(x, 2)] for x, y in p.exterior.coords])
    return out

tierra = []
for f in feats('ne_50m_land.geojson'):
    g = shape(f['geometry'])
    if g.bounds[1] < -60: continue          # sin la Antártida
    tierra += [[a] for a in anillos(g, 0.09, 0.12)]
lagos = []
for f in feats('ne_50m_lakes.geojson'):
    g = shape(f['geometry'])
    if g.area < 0.4: continue
    lagos += anillos(g, 0.05, 0.25)
rios = []
for f in feats('ne_110m_rivers_lake_centerlines.geojson'):
    if (f['properties'].get('scalerank') or 9) > 2: continue
    g = shape(f['geometry'])
    for l in (g.geoms if hasattr(g, 'geoms') else [g]):
        if not isinstance(l, LineString): continue
        l = l.simplify(0.05)
        rios.append([[round(y, 2), round(x, 2)] for x, y in l.coords])

js = ('/* ==========================================================\n'
      '   mapa-mundo.js — Mapa base vectorial del mundo (compartido)\n'
      '   Tierra y lagos de Natural Earth 1:50m y ríos principales 1:110m (dominio público,\n'
      '   naturalearthdata.com), simplificados y sin la Antártida. Mismo formato que mapa-base.js:\n'
      '   una página carga uno de los dos. Generado por geo/mundo.py: no editar a mano.\n'
      '   Coordenadas [latitud, longitud].\n'
      '   ========================================================== */\n'
      'window.MAPA_BASE = ' + json.dumps({'tierra': tierra, 'lagos': [[l] for l in lagos], 'rios': rios}, separators=(',', ':')) + ';\n')
open(SALIDA, 'w', encoding='utf-8').write(js)
print('mapa-mundo.js:', len(js) // 1024, 'KB ·', len(tierra), 'polígonos de tierra,', len(lagos), 'lagos,', len(rios), 'ríos')
