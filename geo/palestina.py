"""Genera public/apps/assets/js/mapa-detalle-palestina.js: geografía de alta resolución de Palestina
para la armonía de los evangelios (mar, tierra, lagos y ríos), recortada a la región.
Uso: pip install shapely · python geo/palestina.py
Requiere en geo/: ne_10m_land.geojson, ne_10m_lakes.geojson, ne_10m_rivers_lake_centerlines.geojson
(github.com/nvkelso/natural-earth-vector, dominio público).
Ajustes históricos: el mar Muerto se une en un solo lago (en el siglo I la cuenca sur estaba cubierta de agua)
y se agrega el lago Hula, desecado en la década de 1950 (contorno aproximado)."""
import json, os
from shapely.geometry import shape, box, Polygon, MultiPolygon, LineString, MultiLineString
from shapely.ops import unary_union
AQUI = os.path.dirname(os.path.abspath(__file__))
B = box(33.4, 29.4, 37.2, 34.2)            # lon, lat
TOL = 0.0015
def feats(n): return json.load(open(os.path.join(AQUI, n)))['features']
tierra = unary_union([shape(f['geometry']) for f in feats('ne_10m_land.geojson') if shape(f['geometry']).intersects(B)]).intersection(B)
mar = B.difference(tierra)
lagos = [shape(f['geometry']) for f in feats('ne_10m_lakes.geojson') if shape(f['geometry']).intersects(B)]
galilea = [g for g in lagos if g.area < 0.03 and g.centroid.y > 32.5]
muerto = [g for g in lagos if g.centroid.y < 31.8]
muerto = unary_union(muerto).buffer(0.06).buffer(-0.06)          # un solo lago, como en el siglo I
hula = Polygon([(35.597, 33.118), (35.612, 33.121), (35.625, 33.112), (35.628, 33.095), (35.622, 33.078), (35.608, 33.071), (35.598, 33.080), (35.594, 33.100)])
lagos = galilea + [muerto, hula]
agua = unary_union(lagos)
rios = [shape(f['geometry']).intersection(B).difference(agua) for f in feats('ne_10m_rivers_lake_centerlines.geojson') if shape(f['geometry']).intersects(B)]   # sin las líneas centrales que cruzan los lagos
def polis(g):
    g = g.simplify(TOL, preserve_topology=True)
    gs = list(g.geoms) if isinstance(g, MultiPolygon) else [g] if isinstance(g, Polygon) else [x for x in getattr(g, 'geoms', []) if isinstance(x, Polygon)]
    return [[[[round(y, 4), round(x, 4)] for x, y in p.exterior.coords]] + [[[round(y, 4), round(x, 4)] for x, y in h.coords] for h in p.interiors] for p in gs if p.area > 1e-6]
def lineas(g):
    g = g.simplify(TOL)
    gs = list(g.geoms) if hasattr(g, 'geoms') else [g]
    return [[[round(y, 4), round(x, 4)] for x, y in l.coords] for l in gs if isinstance(l, LineString) and len(l.coords) > 1]
D = {'caja': [[29.4, 33.4], [34.2, 37.2]], 'mar': polis(mar), 'tierra': polis(tierra),
     'lagos': [p for g in lagos for p in polis(g)], 'rios': [l for g in rios for l in lineas(g)]}
JS = ('/* mapa-detalle-palestina.js — Geografía de alta resolución de Palestina (Natural Earth 1:10m, dominio público).\n'
      '   Generado por geo/palestina.py. Mar Muerto unido como en el siglo I y lago Hula agregado (aproximado). No editar a mano. */\n'
      'window.MAPA_DETALLE = ' + json.dumps(D, separators=(',', ':')) + ';\n')
open(os.path.join(AQUI, '..', 'public', 'apps', 'assets', 'js', 'mapa-detalle-palestina.js'), 'w').write(JS)
print('KB', len(JS) // 1024, 'mar', len(D['mar']), 'tierra', len(D['tierra']), 'lagos', len(D['lagos']), 'rios', len(D['rios']), 'muerto área', round(muerto.area, 4))
