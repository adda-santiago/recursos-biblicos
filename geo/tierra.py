"""Genera public/apps/tierra-de-israel/tierra-geo.js: la geografía propia de «La tierra de Israel».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js) las capas de este recurso:
  · regiones naturales (llanura costera, Sefela, serranías, valles, desiertos, Transjordania);
  · las cuatro franjas de oeste a este;
  · la tierra en cada época (Canaán, reino de David y Salomón, reino dividido, Yehud, asmoneos,
    Herodes, tiempos de Jesús, provincia romana, bizantinos, califato, cruzados, otomanos,
    mandato británico, plan de partición de 1947, líneas de 1949, 1967 y hoy);
  · caminos antiguos (sin flecha), lugares y rótulos propios.
Además escribe window.TIERRA_COMPARA: para cada país de habla hispana, el contorno de una región de
tamaño parecido, trasladado sobre la tierra de Israel A LA MISMA ESCALA (proyección acimutal de
áreas iguales centrada en cada región y luego en Israel), con su superficie calculada con los
mismos datos que la de Israel.

*** Todos los contornos históricos son APROXIMADOS e ILUSTRATIVOS, trazados a mano y recortados
con la costa de Natural Earth. Los de 1949 en adelante salen de Natural Earth (admin 0). ***

Uso:  pip install shapely pyproj  ·  python geo/tierra.py
Requiere en geo/ (Natural Earth, dominio público; no se suben al repositorio):
  ne_10m_land.geojson, ne_10m_lakes.geojson, ne_10m_admin_0_countries.geojson,
  ne_10m_admin_1_states_provinces.geojson
Coordenadas [latitud, longitud].
"""
import json, os, math, warnings
from shapely.geometry import shape, Polygon, MultiPolygon, box, Point, mapping
from shapely.ops import unary_union, transform
from pyproj import Transformer
warnings.filterwarnings('ignore')

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'tierra-de-israel', 'tierra-geo.js')
def feats(n): return json.load(open(os.path.join(AQUI, n)))['features']

CAJA = box(30.5, 27.0, 40.5, 38.5)   # lon, lat
TIERRA = unary_union([shape(f['geometry']) for f in feats('ne_10m_land.geojson') if shape(f['geometry']).intersects(CAJA)]).intersection(CAJA)
LAGOS = unary_union([shape(f['geometry']) for f in feats('ne_10m_lakes.geojson') if shape(f['geometry']).intersects(box(34, 29, 37, 34))])
# El mar Muerto se dibuja unido, como en tiempos bíblicos (igual que geo/palestina.py)
LAGOS = unary_union([g for g in getattr(LAGOS, 'geoms', [LAGOS])]).buffer(0.06).buffer(-0.06)
PAISES = {f['properties']['ADMIN']: shape(f['geometry']) for f in feats('ne_10m_admin_0_countries.geojson')}

def P(pts): return Polygon([(lo, la) for la, lo in pts])
def recortar(g, lagos=True):
    g = g.intersection(TIERRA)
    return g.difference(LAGOS) if lagos else g
TOL = 0.004
def polis(g, tol=TOL):
    g = g.simplify(tol, preserve_topology=True)
    gs = list(g.geoms) if hasattr(g, 'geoms') else [g]
    out = []
    for p in gs:
        if not isinstance(p, Polygon) or p.area < 2e-5: continue
        out.append([[round(y, 3), round(x, 3)] for x, y in p.exterior.coords])
    return out

def km2(g):
    c = g.centroid
    t = Transformer.from_crs('EPSG:4326', f'+proj=laea +lat_0={c.y} +lon_0={c.x}', always_xy=True)
    return transform(t.transform, g).area / 1e6
def km(a, b):
    (la1, lo1), (la2, lo2) = a, b
    p = math.pi / 180
    h = math.sin((la2 - la1) * p / 2) ** 2 + math.cos(la1 * p) * math.cos(la2 * p) * math.sin((lo2 - lo1) * p / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(h))

POLYS, CAPAS, LUGARES, TRAZOS = {}, {}, {}, {}
def capa(id, n, color, pts_o_geom, periodo='', rot=None, borde=False, lagos=True, sinRotulo=False, sinLeyenda=False, recorte=True):
    g = pts_o_geom if not isinstance(pts_o_geom, list) else (unary_union([P(x) for x in pts_o_geom]) if isinstance(pts_o_geom[0][0], list) else P(pts_o_geom))
    if recorte: g = recortar(g, lagos)
    POLYS[id] = polis(g)
    c = {'n': n, 'periodo': periodo, 'color': color, 'polys': [id]}
    if rot: c['rot'] = rot
    if borde: c['borde'] = True
    if sinRotulo: c['sinRotulo'] = True
    if sinLeyenda: c['sinLeyenda'] = True
    CAPAS[id] = c
    return g

# ======================= Regiones naturales (ruta II) =======================
R = {}
R['filistea'] = capa('r-filistea', 'Filistea', '#c08a2b', [[32.08, 34.3], [32.08, 34.95], [31.85, 34.88], [31.6, 34.78], [31.35, 34.62], [31.2, 34.47], [31.15, 34.2], [31.6, 34.2]], rot=[31.62, 34.62])
R['saron'] = capa('r-saron', 'Llanura de Sarón', '#b39a33', [[32.6, 34.6], [32.6, 35.0], [32.3, 35.02], [32.08, 34.97], [32.08, 34.5]], rot=[32.33, 34.88])
R['aco'] = capa('r-aco', 'Llanura de Aco', '#a8913f', [[33.1, 34.9], [33.09, 35.13], [32.92, 35.17], [32.82, 35.1], [32.78, 35.02], [32.82, 34.9]], rot=[32.98, 35.1])
R['costa-carmelo'] = capa('r-costa-carmelo', 'Costa de Dor', '#b39a33', [[32.84, 34.8], [32.8, 34.99], [32.6, 35.0], [32.6, 34.8]], sinRotulo=True, sinLeyenda=True)
R['sefela'] = capa('r-sefela', 'La Sefela', '#7f9a3c', [[31.95, 34.92], [31.88, 35.0], [31.72, 35.01], [31.55, 34.98], [31.4, 34.93], [31.3, 34.86], [31.35, 34.62], [31.6, 34.78], [31.85, 34.88]], rot=[31.62, 34.9])
R['juda'] = capa('r-juda', 'Serranía de Judá', '#8a5a44', [[31.9, 35.01], [31.88, 35.27], [31.7, 35.27], [31.55, 35.22], [31.35, 35.16], [31.28, 34.92], [31.3, 34.86], [31.4, 34.93], [31.55, 34.98], [31.72, 35.01]], rot=[31.6, 35.1])
R['desierto'] = capa('r-desierto', 'Desierto de Judea', '#c27a33', [[31.88, 35.27], [31.88, 35.5], [31.75, 35.5], [31.55, 35.45], [31.3, 35.42], [31.15, 35.38], [31.25, 35.16], [31.35, 35.16], [31.55, 35.22], [31.7, 35.27]], rot=[31.55, 35.33])
R['neguev'] = capa('r-neguev', 'El Neguev', '#c9653d', [[31.35, 34.62], [31.3, 34.86], [31.28, 34.92], [31.25, 35.16], [31.15, 35.38], [30.95, 35.3], [30.6, 35.1], [30.5, 34.7], [30.85, 34.45], [31.15, 34.3]], rot=[30.98, 34.88])
R['efrain'] = capa('r-efrain', 'Serranía de Efraín y Samaria', '#6d7f3a', [[32.47, 35.05], [32.45, 35.4], [32.25, 35.47], [32.05, 35.47], [31.88, 35.4], [31.88, 35.27], [31.9, 35.01], [31.95, 34.92], [32.1, 34.97], [32.3, 35.02]], rot=[32.17, 35.22])
R['carmelo'] = capa('r-carmelo', 'Monte Carmelo', '#3f7f5a', [[32.84, 34.97], [32.8, 35.07], [32.62, 35.17], [32.55, 35.12], [32.6, 35.0], [32.75, 34.98]], rot=[32.7, 35.05])
R['jezreel'] = capa('r-jezreel', 'Valle de Jezreel', '#4d9a62', [[32.72, 35.12], [32.7, 35.3], [32.63, 35.4], [32.56, 35.52], [32.45, 35.52], [32.48, 35.38], [32.55, 35.22], [32.62, 35.15]], rot=[32.6, 35.3])
R['galilea-baja'] = capa('r-galilea-baja', 'Baja Galilea', '#2f8a8a', [[32.95, 35.15], [32.93, 35.52], [32.85, 35.55], [32.72, 35.57], [32.63, 35.55], [32.68, 35.38], [32.72, 35.15], [32.82, 35.1], [32.92, 35.17]], rot=[32.8, 35.33])
R['galilea-alta'] = capa('r-galilea-alta', 'Alta Galilea', '#2a6a8f', [[33.28, 35.18], [33.28, 35.56], [33.1, 35.6], [32.95, 35.55], [32.95, 35.15], [33.09, 35.13]], rot=[33.07, 35.35])
R['jordan'] = capa('r-jordan', 'Valle del Jordán y Arabá', '#3f6fa3', [[33.27, 35.57], [33.27, 35.68], [33.05, 35.66], [32.88, 35.67], [32.7, 35.66], [32.6, 35.63], [32.3, 35.61], [32.0, 35.59], [31.78, 35.6], [31.5, 35.6], [31.1, 35.52], [30.5, 35.25], [30.0, 35.1], [29.53, 35.03], [29.53, 34.93], [30.0, 35.0], [30.5, 35.13], [31.0, 35.38], [31.3, 35.4], [31.75, 35.47], [32.0, 35.49], [32.3, 35.51], [32.6, 35.52], [32.72, 35.55], [32.9, 35.52], [33.05, 35.57]], rot=[32.15, 35.55], lagos=False)
R['basan'] = capa('r-basan', 'Basán', '#7b5ea7', [[33.3, 35.72], [33.3, 36.25], [33.0, 36.6], [32.68, 36.55], [32.68, 35.68], [32.88, 35.67], [33.05, 35.67]], rot=[32.95, 36.05])
R['galaad'] = capa('r-galaad', 'Galaad', '#5d6fb0', [[32.68, 35.62], [32.68, 36.0], [32.25, 35.92], [32.0, 35.83], [31.85, 35.75], [31.8, 35.6], [32.1, 35.59], [32.4, 35.6]], rot=[32.3, 35.75])
R['amon'] = capa('r-amon', 'Amón', '#9b5a8a', [[32.2, 35.93], [32.25, 36.3], [31.95, 36.4], [31.7, 36.15], [31.75, 35.9], [31.95, 35.86]], rot=[32.08, 36.25])
R['moab'] = capa('r-moab', 'Moab', '#a0603a', [[31.82, 35.58], [31.78, 35.88], [31.45, 36.05], [31.05, 35.95], [31.02, 35.55], [31.45, 35.58]], rot=[31.3, 35.88])
R['edom'] = capa('r-edom', 'Edom', '#a83a3a', [[31.05, 35.45], [31.05, 35.9], [30.5, 35.85], [30.0, 35.6], [29.6, 35.3], [29.85, 35.1], [30.5, 35.25], [31.0, 35.42]], rot=[30.55, 35.55])
REGIONES = list(CAPAS.keys())

# ======================= Las cuatro franjas (I.4) =======================
costa = unary_union([R['filistea'], R['saron'], R['aco'], R['costa-carmelo']])
serrania = unary_union([R['galilea-alta'], R['galilea-baja'], R['jezreel'], R['carmelo'], R['efrain'], R['sefela'], R['juda'], R['desierto'], R['neguev']])
valle = R['jordan']
meseta = unary_union([R['basan'], R['galaad'], R['amon'], R['moab'], R['edom']])
capa('f-costa', 'Llanura costera', '#c9a227', costa.buffer(0.004), rot=[32.2, 34.82], recorte=False)
capa('f-serrania', 'Serranía central', '#8a5a3a', serrania.buffer(0.004), rot=[31.75, 35.15], recorte=False)
capa('f-valle', 'Valle del Jordán', '#3f6fa3', valle, rot=[32.25, 35.56], recorte=False)
capa('f-meseta', 'Meseta de Transjordania', '#7a4f8a', meseta.buffer(0.004), rot=[31.75, 36.0], recorte=False)

# ======================= Dan a Beerseba y la Transjordania de las tribus =======================
# Al oeste del Jordán, entre la línea Escala de Tiro–Dan y la línea de Beerseba
OESTE = P([[33.09, 34.9], [33.09, 35.1], [33.25, 35.6], [33.25, 35.64], [33.0, 35.62], [32.88, 35.64], [32.7, 35.6], [32.6, 35.565],
           [32.3, 35.55], [32.0, 35.54], [31.78, 35.56], [31.5, 35.48], [31.2, 35.44], [31.22, 34.8], [31.32, 34.2], [32.0, 34.3]])
tierra = recortar(OESTE)
capa('t-tierra', 'De Dan a Beerseba', '#9e2b25', tierra, rot=[31.85, 35.0], recorte=False)
TRANS = P([[33.25, 35.64], [33.2, 35.95], [32.9, 36.15], [32.6, 36.2], [32.2, 36.05], [31.85, 35.95], [31.47, 35.9], [31.47, 35.55],
           [31.78, 35.57], [32.0, 35.56], [32.3, 35.57], [32.6, 35.58], [32.7, 35.62], [32.88, 35.66], [33.0, 35.64]])
trans = recortar(TRANS)
capa('t-israel', 'La tierra de Israel', '#9e2b25', tierra, sinRotulo=True, recorte=False)
capa('t-trans', 'Transjordania de las tribus', '#9e2b25', trans, borde=True, rot=[32.35, 35.85], recorte=False)
AREA_TIERRA, AREA_TRANS = km2(tierra), km2(trans)

# ======================= La tierra en cada época (I.6 y ruta V) =======================
capa('h-canaan', 'Canaán', '#a9772a', [[34.35, 35.6], [34.25, 36.35], [34.0, 36.6], [33.6, 36.35], [33.25, 35.95], [32.88, 35.68], [32.7, 35.6], [31.75, 35.57],
     [31.05, 35.5], [30.95, 35.2], [30.69, 34.42], [31.13, 33.8], [31.6, 33.6], [34.4, 35.0]], periodo='según Números 34', rot=[32.6, 35.2])
nucleo = [[33.3, 35.0], [33.3, 35.75], [32.9, 36.1], [32.4, 36.15], [31.75, 35.9], [31.45, 35.6], [31.0, 35.45], [30.6, 35.1], [30.6, 34.55], [31.15, 34.55],
          [31.55, 34.88], [31.85, 34.92], [32.05, 34.6], [32.5, 34.6], [33.1, 34.9]]
capa('h-salomon', 'Israel', '#2c5f9e', nucleo, periodo='David y Salomón', rot=[32.2, 35.3])
vas_este = [[36.1, 37.3], [36.1, 38.4], [35.0, 38.7], [34.0, 38.5], [33.0, 37.7], [32.3, 37.1], [31.5, 36.6], [30.5, 36.3], [29.6, 35.6], [29.45, 35.0],
            [30.6, 35.1], [31.0, 35.45], [31.45, 35.6], [31.75, 35.9], [32.4, 36.15], [32.9, 36.1], [33.3, 35.75], [33.8, 36.0], [34.6, 36.4], [35.4, 36.7]]
filistea_vas = [[32.05, 34.4], [32.05, 34.6], [31.85, 34.92], [31.55, 34.88], [31.15, 34.55], [31.0, 34.2], [31.5, 34.2]]
capa('h-salomon-vas', 'Reinos sometidos o tributarios', '#2c5f9e', [vas_este, filistea_vas], periodo='1 Reyes 4:21', borde=True, rot=[33.6, 37.4])
capa('h-israel-850', 'Reino de Israel', '#8a3442', [[33.3, 35.0], [33.3, 35.75], [32.9, 36.05], [32.4, 36.05], [31.85, 35.8], [31.85, 35.55], [31.9, 35.45],
     [31.9, 35.1], [31.95, 34.95], [32.05, 34.6], [32.5, 34.6], [33.1, 34.9]], periodo='c. 850 a.C.', rot=[32.4, 35.3])
capa('h-juda-850', 'Reino de Judá', '#2c4a7a', [[31.9, 35.1], [31.9, 35.45], [31.75, 35.48], [31.2, 35.4], [30.9, 35.3], [30.6, 35.1], [30.6, 34.6], [31.2, 34.55],
     [31.55, 34.85], [31.8, 34.95]], periodo='c. 850 a.C.', rot=[31.4, 35.05])
capa('h-yehud', 'Yehud', '#4a6b7c', [[31.95, 35.1], [31.97, 35.3], [31.88, 35.47], [31.7, 35.42], [31.58, 35.25], [31.6, 35.05], [31.8, 34.98]], periodo='provincia persa, c. 445 a.C.', rot=[31.8, 35.2])
capa('h-asmoneo', 'Reino asmoneo', '#5e7d4f', [[33.15, 35.1], [33.25, 35.7], [32.9, 35.95], [32.6, 35.85], [32.3, 35.85], [31.75, 35.85], [31.3, 35.75], [31.05, 35.5],
     [30.9, 35.25], [30.95, 34.55], [31.3, 34.2], [31.7, 34.4], [32.3, 34.7], [32.85, 34.85]], periodo='c. 76 a.C.', rot=[31.9, 35.2])
capa('h-herodes', 'Reino de Herodes', '#8a5a44', [[33.2, 35.05], [33.35, 35.7], [33.4, 36.3], [33.1, 36.9], [32.5, 36.85], [32.55, 36.2], [32.6, 35.95], [32.3, 35.8],
     [31.9, 35.85], [31.5, 35.7], [31.2, 35.42], [30.95, 35.2], [30.95, 34.55], [31.3, 34.2], [31.7, 34.4], [32.3, 34.7], [32.85, 34.85]], periodo='4 a.C.', rot=[31.9, 35.15])
# Tiempos de Jesús
capa('nt-galilea', 'Galilea', '#2f8a8a', [[33.15, 35.15], [33.2, 35.55], [32.9, 35.54], [32.72, 35.57], [32.62, 35.55], [32.6, 35.35], [32.68, 35.15], [32.85, 35.12]], periodo='Herodes Antipas', rot=[32.88, 35.33])
capa('nt-samaria', 'Samaria', '#6d7f3a', [[32.62, 34.85], [32.6, 35.35], [32.62, 35.55], [32.35, 35.55], [32.1, 35.55], [32.05, 35.2], [32.05, 34.7]], periodo='prefecto romano', rot=[32.28, 35.2])
capa('nt-judea', 'Judea', '#9e2b25', [[32.05, 34.6], [32.05, 35.55], [31.85, 35.55], [31.75, 35.48], [31.4, 35.4], [31.4, 34.85], [31.65, 34.55], [31.8, 34.55]], periodo='prefecto romano', rot=[31.75, 35.1])
capa('nt-idumea', 'Idumea', '#c27a33', [[31.4, 34.85], [31.4, 35.4], [31.15, 35.38], [30.95, 35.15], [30.95, 34.65], [31.25, 34.5], [31.4, 34.6]], periodo='prefecto romano', rot=[31.2, 35.0])
capa('nt-perea', 'Perea', '#7b5ea7', [[32.45, 35.6], [32.4, 35.8], [32.0, 35.85], [31.6, 35.75], [31.4, 35.62], [31.75, 35.58], [32.1, 35.58]], periodo='Herodes Antipas', rot=[31.95, 35.72])
capa('nt-decapolis', 'Decápolis', '#5d6fb0', [[32.85, 35.66], [32.9, 35.95], [32.6, 36.3], [32.3, 36.3], [31.95, 36.0], [32.0, 35.87], [32.4, 35.82], [32.45, 35.6], [32.42, 35.45],
     [32.55, 35.45], [32.62, 35.58], [32.72, 35.62]], periodo='ciudades griegas', rot=[32.45, 36.0])
capa('nt-felipe', 'Tetrarquía de Felipe', '#a0603a', [[33.45, 35.62], [33.5, 36.1], [33.2, 36.8], [32.7, 36.7], [32.88, 35.97], [32.88, 35.67], [33.1, 35.63]], periodo='Gaulanítide, Batanea, Traconite', rot=[33.1, 36.2])
capa('h-iudaea', 'Provincia de Judea', '#9e2b25', [[32.62, 34.85], [32.6, 35.35], [32.62, 35.55], [32.1, 35.55], [31.85, 35.55], [31.4, 35.4], [31.15, 35.38], [30.95, 35.15],
     [30.95, 34.65], [31.25, 34.5], [31.65, 34.55], [32.05, 34.6]], periodo='6–41 d.C.', rot=[31.8, 35.1])
capa('h-palaestina', 'Siria Palestina', '#9e2b25', [[33.2, 35.05], [33.3, 35.7], [33.1, 35.95], [32.65, 35.85], [32.3, 35.8], [31.6, 35.75], [31.2, 35.42], [30.6, 35.15],
     [30.6, 34.5], [31.3, 34.2], [31.7, 34.4], [32.3, 34.7], [32.85, 34.85]], periodo='provincia romana desde 135 d.C.', rot=[31.9, 35.15])
capa('h-bizancio', 'Las tres Palestinas', '#6b4e7c', [[33.25, 35.05], [33.35, 35.9], [32.6, 36.05], [32.2, 35.95], [31.7, 35.9], [31.2, 35.85], [30.3, 35.75], [29.5, 35.15],
     [29.9, 34.6], [30.6, 34.3], [31.3, 34.2], [31.7, 34.4], [32.3, 34.7], [32.85, 34.85]], periodo='imperio bizantino, c. 400–636', rot=[31.4, 35.1])
capa('h-califato', 'Yund Filastín y Yund al-Urdun', '#2e7d6b', [[33.4, 35.1], [33.4, 36.1], [32.6, 36.4], [32.0, 36.2], [31.2, 36.1], [30.3, 35.75], [29.5, 35.15],
     [29.9, 34.6], [30.6, 34.3], [31.3, 34.2], [31.7, 34.4], [32.3, 34.7], [32.85, 34.85]], periodo='califato, desde 636–638', rot=[31.4, 35.2])
capa('h-mamelucos', 'Sultanato mameluco', '#7d4f2a', [[33.4, 35.1], [33.4, 36.1], [32.6, 36.4], [32.0, 36.2], [31.2, 36.1], [30.3, 35.75], [29.5, 35.15],
     [29.9, 34.6], [30.6, 34.3], [31.3, 34.2], [31.7, 34.4], [32.3, 34.7], [32.85, 34.85]], periodo='1260–1516', rot=[31.4, 35.2])
capa('h-cruzados', 'Reino de Jerusalén', '#b8322a', [[33.95, 35.45], [33.95, 35.75], [33.35, 35.85], [32.9, 35.72], [32.5, 35.72], [31.95, 35.85], [31.5, 35.95], [31.0, 35.85],
     [30.3, 35.62], [29.55, 35.05], [29.9, 34.95], [30.6, 35.05], [31.0, 35.3], [31.2, 34.9], [31.3, 34.25], [31.7, 34.4], [32.3, 34.7], [33.0, 34.9]], periodo='c. 1130', rot=[32.2, 35.3])
capa('h-otomano', 'Imperio otomano', '#7d6b3d', [[37.0, 35.9], [37.0, 41.5], [34.0, 41.0], [32.4, 39.0], [30.6, 37.7], [29.4, 36.0], [29.4, 34.8], [31.3, 34.2],
     [33.0, 34.9], [35.0, 35.7], [36.4, 35.8]], periodo='1517–1917', rot=[32.6, 36.6])
# Mandato y siglo XX (Natural Earth admin 0; el Golán se separa del polígono de Israel)
GOLAN_CORTE = P([[33.35, 35.66], [33.2, 35.66], [33.0, 35.645], [32.9, 35.655], [32.82, 35.66], [32.7, 35.63], [32.64, 35.57], [32.6, 36.2], [33.4, 36.2]])
isr = PAISES['Israel']; pal = PAISES['Palestine']; jor = PAISES['Jordan']; egi = PAISES['Egypt']
golan = isr.intersection(GOLAN_CORTE)
israel49 = isr.difference(GOLAN_CORTE)
cis = pal.intersection(box(34.85, 31.3, 35.65, 32.6))
gaza = pal.intersection(box(34.1, 31.2, 34.6, 31.65))
sinai = egi.intersection(P([[31.4, 32.25], [31.2, 32.4], [30.0, 32.55], [29.9, 32.6], [29.4, 32.75], [28.0, 33.4], [27.6, 34.3], [29.6, 35.0], [31.4, 34.3]]))
mandato = unary_union([israel49, cis, gaza])
capa('h-mandato', 'Palestina (mandato británico)', '#4a6b7c', mandato, periodo='1922–1948', rot=[30.9, 34.8], recorte=False)
capa('h-transjordania', 'Transjordania', '#a0603a', jor, periodo='emirato, luego reino (1946)', rot=[31.3, 36.6], recorte=False)
# Plan de partición de la ONU (Resolución 181, 29-11-1947): contornos simplificados
judio_norte = P([[33.28, 35.57], [33.27, 35.66], [33.05, 35.645], [32.87, 35.66], [32.72, 35.63], [32.6, 35.57], [32.42, 35.56], [32.45, 35.4], [32.5, 35.25], [32.53, 35.12],
                 [32.45, 35.05], [32.3, 34.98], [32.1, 34.95], [31.92, 34.9], [31.85, 34.8], [31.82, 34.6], [31.8, 34.3], [32.95, 34.8], [32.88, 35.05], [32.78, 35.15],
                 [32.65, 35.25], [32.68, 35.4], [32.85, 35.45], [33.0, 35.48], [33.1, 35.5], [33.2, 35.52]])
jafa = P([[32.08, 34.7], [32.08, 34.79], [32.02, 34.79], [32.0, 34.7]])
judio_sur = P([[31.62, 34.68], [31.45, 34.75], [31.3, 34.7], [31.2, 34.85], [31.3, 35.0], [31.35, 35.2], [31.3, 35.4], [30.9, 35.4], [30.3, 35.15], [29.55, 34.98],
               [29.48, 34.9], [30.6, 34.4], [30.9, 34.45], [31.25, 34.45], [31.4, 34.55]])
arabe_centro = P([[32.53, 35.12], [32.5, 35.25], [32.45, 35.4], [32.42, 35.56], [32.0, 35.55], [31.8, 35.52], [31.75, 35.47], [31.3, 35.4], [31.35, 35.2], [31.3, 35.0],
                  [31.2, 34.85], [31.3, 34.7], [31.45, 34.75], [31.62, 34.68], [31.82, 34.62], [31.85, 34.8], [31.92, 34.9], [32.1, 34.95], [32.3, 34.98], [32.45, 35.05]])
arabe_galilea = P([[33.09, 34.9], [33.1, 35.5], [33.0, 35.48], [32.85, 35.45], [32.68, 35.4], [32.65, 35.25], [32.78, 35.15], [32.88, 35.05], [32.95, 34.8]])
arabe_gaza = P([[31.82, 34.62], [31.62, 34.68], [31.4, 34.55], [31.25, 34.45], [30.9, 34.45], [30.6, 34.4], [30.6, 34.2], [31.3, 34.1], [31.85, 34.4]])
corpus = P([[31.84, 35.18], [31.8, 35.28], [31.7, 35.27], [31.68, 35.17], [31.75, 35.13]])
borde_mandato = mandato.buffer(0.01)
capa('p47-judio', 'Estado judío propuesto', '#2c5f9e', unary_union([judio_norte.difference(jafa), judio_sur]).difference(corpus).intersection(borde_mandato), periodo='plan de 1947', rot=[30.6, 34.85])
capa('p47-arabe', 'Estado árabe propuesto', '#2e7d6b', unary_union([arabe_centro, arabe_galilea, arabe_gaza, jafa]).difference(corpus).intersection(borde_mandato), periodo='plan de 1947', rot=[31.95, 35.25])
capa('p47-corpus', 'Jerusalén internacional', '#b8322a', corpus, periodo='corpus separatum', rot=[31.6, 35.38])
capa('x-israel', 'Israel', '#2c5f9e', israel49, periodo='líneas de 1949', rot=[31.0, 34.85], recorte=False)
capa('x-cisjordania49', 'Cisjordania', '#a0603a', cis, periodo='bajo Jordania, 1949–1967', rot=[32.2, 35.3], recorte=False)
capa('x-gaza49', 'Franja de Gaza', '#c08a2b', gaza, periodo='bajo Egipto, 1949–1967', rot=[31.15, 34.0], recorte=False)
capa('x-cisjordania', 'Cisjordania', '#7d6b3d', cis, periodo='ocupada por Israel desde 1967', rot=[32.2, 35.3], recorte=False)
capa('x-gaza', 'Franja de Gaza', '#7d6b3d', gaza, periodo='ocupada por Israel desde 1967', rot=[31.15, 34.0], recorte=False)
capa('x-golan', 'Altos del Golán', '#7d6b3d', golan, periodo='Israel desde 1967', rot=[33.0, 35.85], recorte=False)
capa('x-sinai', 'Sinaí', '#7d6b3d', sinai, periodo='Israel 1967–1982', rot=[29.6, 33.8], recorte=False)
capa('x-cisjordania-hoy', 'Cisjordania', '#7d6b3d', cis, periodo='Autoridad Palestina y control israelí', rot=[32.2, 35.3], recorte=False)
capa('x-gaza-hoy', 'Franja de Gaza', '#9e2b25', gaza, periodo='alto el fuego de 2025', rot=[31.15, 34.0], recorte=False)
capa('x-golan-hoy', 'Altos del Golán', '#7d6b3d', golan, periodo='anexado por Israel en 1981', rot=[33.0, 35.85], recorte=False)
# Límites de la promesa (VI.2): del río de Egipto al Éufrates (Gn 15:18), contorno ilustrativo
capa('h-promesa', 'Del río de Egipto al Éufrates', '#a9772a', [[31.13, 33.8], [30.69, 34.42], [30.0, 35.0], [29.5, 35.0], [30.5, 36.3], [31.5, 36.9], [32.6, 37.6], [33.6, 38.4],
     [34.6, 39.6], [35.6, 40.0], [36.4, 38.4], [36.5, 37.4], [35.4, 36.6], [34.4, 35.9], [33.1, 35.0]], periodo='Génesis 15:18', borde=True, rot=[34.3, 38.4])
capa('h-ezequiel', 'Tierra de Ezequiel 47', '#2e7d6b', [[34.45, 35.9], [34.4, 36.4], [34.1, 36.75], [33.6, 36.45], [33.25, 35.95], [32.88, 35.68], [32.7, 35.6], [31.75, 35.57],
     [31.05, 35.5], [30.95, 35.2], [30.69, 34.42], [31.13, 33.8], [31.6, 33.6], [34.5, 35.2]], periodo='límites del reparto futuro', rot=[32.55, 35.2])

# ======================= Lugares =======================
# Mismos id y coordenadas que lugares.js del atlas cuando existen (así «Para aprender más» los reconoce)
L = {
  'dan': ['Dan', 33.2489, 35.6519, 'right'], 'beerseba': ['Beerseba', 31.2589, 34.7913, 'left'], 'hebron': ['Hebrón', 31.5326, 35.0998, 'left'],
  'betel': ['Betel', 31.9306, 35.2164, 'left'], 'silo': ['Silo', 32.0558, 35.2897, 'right'], 'siquem': ['Siquem', 32.2137, 35.2797, 'right'],
  'gabaon': ['Gabaón', 31.8483, 35.1811, 'top'], 'hai': ['Hai', 31.9333, 35.2833, 'right'], 'gilgal': ['Gilgal', 31.8833, 35.4667, 'right'],
  'tabor': ['Monte Tabor', 32.687, 35.39, 'bottom'], 'hermon': ['Monte Hermón', 33.416, 35.857, 'right'], 'gilboa': ['Monte Gilboa', 32.5, 35.4167, 'right'],
  'carmelo': ['Monte Carmelo', 32.7317, 34.9709, 'left'], 'jezreel': ['Jezreel', 32.5561, 35.3247, 'right'], 'valle-ela': ['Valle de Ela', 31.6975, 34.9636, 'left'],
  'rama': ['Ramá', 31.9161, 35.1997, 'left'], 'ezion-geber': ['Ezión-geber', 29.5328, 34.9878, 'left'], 'cades-barnea': ['Cades-barnea', 30.69, 34.42, 'left'],
  'monte-nebo': ['Monte Nebo', 31.7667, 35.7269, 'left'], 'ramot-galaad': ['Ramot de Galaad', 32.6, 35.9, 'left'], 'peniel': ['Peniel', 32.35, 35.55, 'right'],
  'timnat': ['Timnat', 31.7833, 34.9667, 'left'],
  # Lugares que no están en el atlas
  'ascalon': ['Ascalón', 31.665, 34.55, 'left'], 'gat': ['Gat', 31.70, 34.85, 'left'], 'afec': ['Afec', 32.105, 34.93, 'left'], 'dor': ['Dor', 32.618, 34.918, 'left'],
  'bet-sean': ['Bet-seán', 32.5, 35.5, 'left'], 'hazor': ['Hazor', 33.017, 35.568, 'left'], 'sunem': ['Sunem', 32.6, 35.33, 'left'],
  'en-gadi': ['En-gadi', 31.46, 35.39, 'left'], 'qumran': ['Qumrán', 31.74, 35.46, 'left'], 'arad': ['Arad', 31.28, 35.13, 'left'],
  'hesbon': ['Hesbón', 31.8, 35.81, 'right'], 'rabat-amon': ['Rabá de Amón', 31.95, 35.93, 'right'], 'dibon': ['Dibón', 31.5, 35.78, 'right'],
  'kir-hareset': ['Kir-hareset', 31.18, 35.70, 'right'], 'edrei': ['Edrei', 32.62, 36.1, 'right'], 'jabes': ['Jabes de Galaad', 32.4, 35.6, 'right'],
  'bet-horon': ['Bet-horón', 31.885, 35.12, 'top'], 'ajalon': ['Ajalón', 31.84, 34.98, 'right'], 'azeca': ['Azeca', 31.70, 34.935, 'bottom'], 'soco': ['Soco', 31.68, 34.98, 'right'],
  'bet-semes': ['Bet-semes', 31.75, 34.98, 'right'], 'quiriat-jearim': ['Quiriat-jearim', 31.805, 35.10, 'left'], 'gezer2': ['Gezer', 31.86, 34.92, 'left'],
  'gihon': ['Fuente de Gihón', 31.773, 35.236, 'right'], 'pozo-jacob': ['Pozo de Jacob', 32.209, 35.285, 'right'],
  'cedes': ['Cedes de Neftalí', 33.11, 35.53, 'right'], 'golan-ciudad': ['Golán', 32.8, 35.94, 'right'], 'beser': ['Beser', 31.75, 35.95, 'right'],
  'hula': ['Lago Hula', 33.09, 35.61, 'left'], 'tel-aviv': ['Tel Aviv', 32.08, 34.78, 'left'], 'eilat': ['Eilat', 29.557, 34.95, 'left'],
  'akaba': ['Áqaba', 29.53, 35.0, 'right'], 'amman': ['Amán', 31.95, 35.93, 'right'], 'beirut': ['Beirut', 33.89, 35.5, 'left'],
  'jerusalen-oeste': ['Jerusalén', 31.778, 35.235, 'right'], 'aelia': ['Aelia Capitolina', 31.778, 35.235, 'right'], 'betar': ['Betar', 31.73, 35.135, 'left'],
  'cesarea-mar': ['Cesarea Marítima', 32.5, 34.89, 'left'], 'tiberias': ['Tiberias', 32.79, 35.535, 'left'], 'acre': ['Acre (Aco)', 32.92, 35.08, 'left'],
  'nablus': ['Nablus', 32.22, 35.26, 'left'], 'kerak': ['Kerak', 31.18, 35.70, 'right'], 'hattin': ['Cuernos de Hattín', 32.8, 35.45, 'left'],
  'madaba': ['Madaba', 31.72, 35.79, 'right'], 'gezer': ['Gezer', 31.86, 34.92, 'left'], 'mar-salado': ['Mar Salado', 31.5, 35.5, 'right'],
  'jope2': ['Jope (Jafa)', 32.05, 34.75, 'left'], 'siquem2': ['Siquem', 32.2137, 35.2797, 'right'], 'aruna': ['Paso de Aruna', 32.48, 35.05, 'left'],
  'betfage': ['Betfagé', 31.785, 35.255, 'right'], 'safed': ['Safed', 32.965, 35.496, 'right'], 'ramla': ['Ramla', 31.93, 34.87, 'left'],
  'ain-jalut': ['Ain Jalut (fuente de Harod)', 32.55, 35.36, 'right'], 'pela': ['Pela', 32.45, 35.61, 'right'],
}
for k in ['gezer2', 'siquem2', 'jope2', 'jerusalen-oeste', 'betfage']: L.pop(k)
LUGARES.update(L)

# ======================= Caminos (sin flecha) =======================
def camino(id, n, pts, color=None):
    TRAZOS[id] = {'n': n, 'l': [[round(a, 3), round(b, 3)] for a, b in pts], 'sinFlecha': True}
    if color: TRAZOS[id]['color'] = color
camino('c-mar', 'Camino del mar', [[31.04, 32.55], [31.12, 33.3], [31.13, 33.8], [31.29, 34.25], [31.5, 34.46], [31.665, 34.56], [31.75, 34.66], [31.86, 34.74],
       [32.105, 34.93], [32.3, 34.98], [32.48, 35.05], [32.585, 35.185], [32.7, 35.35], [32.85, 35.5], [33.017, 35.568], [33.0, 35.63], [33.2, 35.95], [33.51, 36.29]], '#b8322a')
camino('c-real', 'Camino real', [[29.53, 35.0], [29.9, 35.3], [30.33, 35.44], [30.73, 35.6], [31.18, 35.7], [31.5, 35.78], [31.72, 35.79], [31.8, 35.81], [31.95, 35.93],
       [32.3, 35.9], [32.6, 35.98], [32.62, 36.1], [33.0, 36.2], [33.51, 36.29]], '#2c5f9e')
camino('c-cresta', 'Camino de la cresta', [[31.2589, 34.7913], [31.39, 34.98], [31.5326, 35.0998], [31.705, 35.2], [31.778, 35.235], [31.85, 35.22], [31.9306, 35.2164],
       [32.0558, 35.2897], [32.2137, 35.2797], [32.41, 35.24], [32.5561, 35.3247]], '#8a5a44')
camino('c-jerico', 'Subida de Jericó a Jerusalén', [[31.87, 35.44], [31.84, 35.39], [31.81, 35.33], [31.79, 35.28], [31.775, 35.255], [31.778, 35.235]], '#c27a33')
camino('c-samaria', 'Por Samaria', [[32.70, 35.30], [32.58, 35.32], [32.46, 35.30], [32.21, 35.28], [32.05, 35.29], [31.93, 35.22], [31.778, 35.235]], '#2e7d6b')
camino('c-jordan', 'Por el valle del Jordán', [[32.70, 35.30], [32.6, 35.42], [32.5, 35.5], [32.37, 35.53], [32.1, 35.55], [31.87, 35.46], [31.81, 35.33], [31.778, 35.235]], '#2c5f9e')
camino('c-bethoron', 'Subida de Bet-horón', [[31.84, 34.98], [31.87, 35.04], [31.89, 35.08], [31.885, 35.12], [31.87, 35.15], [31.8483, 35.1811]], '#b8322a')
camino('c-ela', 'Valle de Ela', [[31.70, 34.85], [31.70, 34.93], [31.69, 34.97], [31.68, 35.0], [31.66, 35.05], [31.65, 35.1]], '#c08a2b')
camino('c-aruna', 'Paso de Aruna (Meguido)', [[32.42, 34.95], [32.46, 35.0], [32.5, 35.07], [32.55, 35.13], [32.585, 35.185]], '#b8322a')
camino('c-emaus', 'Camino a Emaús', [[31.778, 35.235], [31.81, 35.18], [31.84, 35.14]], '#c27a33')

# ======================= Rótulos propios del recurso =======================
ROT = [['Mar Grande', 32.3, 34.25, 'mar'], ['Mar Salado', 31.42, 35.47, 'mar'], ['Jordán', 32.25, 35.6, 'rio'], ['Golfo de Áqaba', 28.9, 34.75, 'mar'],
       ['Mar de Cineret', 32.82, 35.66, 'mar'], ['Mar Rojo', 27.8, 34.6, 'mar'], ['Éufrates', 35.2, 39.9, 'rio'], ['Nilo', 30.4, 31.0, 'rio']]

# ======================= Compara con tu país =======================
# (código ISO, país, regiones admin-1 de Natural Earth a unir o None = el país entero, nombre en el texto)
COMPARA = [
  ('AR', 'Argentina', ['Tucumán'], 'la provincia de Tucumán'),
  ('BO', 'Bolivia', ['Tarija'], 'el departamento de Tarija'),
  ('CL', 'Chile', ['Región Metropolitana de Santiago'], 'la Región Metropolitana'),
  ('CO', 'Colombia', ['Huila'], 'el departamento del Huila'),
  ('CR', 'Costa Rica', None, 'Costa Rica'),
  ('CU', 'Cuba', ['Camagüey'], 'la provincia de Camagüey'),
  ('EC', 'Ecuador', ['Guayas'], 'la provincia del Guayas'),
  ('SV', 'El Salvador', None, 'El Salvador'),
  ('ES', 'España', ['Toledo'], 'la provincia de Toledo'),
  ('US', 'Estados Unidos', ['New Jersey'], 'el estado de Nueva Jersey'),
  ('GT', 'Guatemala', ['Petén'], 'el departamento de Petén'),
  ('GQ', 'Guinea Ecuatorial', None, 'Río Muni, la parte continental de Guinea Ecuatorial'),
  ('HN', 'Honduras', ['Gracias a Dios'], 'el departamento de Gracias a Dios'),
  ('MX', 'México', ['México'], 'el Estado de México'),
  ('NI', 'Nicaragua', ['Jinotega', 'Matagalpa'], 'los departamentos de Jinotega y Matagalpa juntos'),
  ('PA', 'Panamá', ['Veraguas', 'Coclé'], 'las provincias de Veraguas y Coclé juntas'),
  ('PY', 'Paraguay', ['Itapúa'], 'el departamento de Itapúa'),
  ('PE', 'Perú', ['Tacna'], 'el departamento de Tacna'),
  ('PR', 'Puerto Rico', None, 'Puerto Rico'),
  ('DO', 'República Dominicana', None, 'la República Dominicana'),
  ('UY', 'Uruguay', ['Tacuarembó'], 'el departamento de Tacuarembó'),
  ('VE', 'Venezuela', ['Portuguesa'], 'el estado Portuguesa'),
]
NE_PAIS = {'España': 'Spain', 'México': 'Mexico', 'Panamá': 'Panama', 'Perú': 'Peru', 'República Dominicana': 'Dominican Republic',
           'Guinea Ecuatorial': 'Equatorial Guinea', 'Estados Unidos': 'United States of America'}
ADM1 = [f for f in feats('ne_10m_admin_1_states_provinces.geojson')]
def region_geom(pais, nombres):
    ne = NE_PAIS.get(pais, pais)
    if nombres is None: return PAISES[ne]
    gs = [shape(f['geometry']) for f in ADM1 if f['properties']['admin'] == ne and f['properties']['name'] in nombres]
    assert len(gs) == len(nombres), (pais, nombres, len(gs))
    return unary_union(gs)
c0 = tierra.centroid
DESTINO = Transformer.from_crs(f'+proj=laea +lat_0={c0.y} +lon_0={c0.x}', 'EPSG:4326', always_xy=True)
def redondo(n):
    return int(round(n / 100.0) * 100)
def num(n):
    return f'{n:,}'.replace(',', '.')
CMP = []
for iso, pais, nombres, texto in COMPARA:
    g = region_geom(pais, nombres)
    # Si es un país con islas lejanas, se usa solo la parte principal
    if isinstance(g, MultiPolygon) and nombres is None:
        mayor = max(g.geoms, key=lambda p: p.area)
        g = unary_union([p for p in g.geoms if p.area > mayor.area * 0.02 and p.distance(mayor) < 2])
    area = km2(g)
    c = g.centroid
    ida = Transformer.from_crs('EPSG:4326', f'+proj=laea +lat_0={c.y} +lon_0={c.x}', always_xy=True)
    local = transform(ida.transform, g).simplify(400)
    sobre = transform(DESTINO.transform, local)
    id = 'cmp-' + iso.lower()
    POLYS[id] = polis(sobre, 0.002)
    CAPAS[id] = {'n': f'{texto[0].upper()}{texto[1:]}', 'periodo': '', 'color': '#2c5f9e', 'polys': [id], 'borde': True, 'sinRotulo': True}
    CMP.append({'id': iso.lower(), 'region': iso, 'pais': pais, 'texto': texto, 'km2': redondo(area), 'razon': round(area / AREA_TIERRA, 2)})

# ======================= Datos para el texto =======================
DATOS = {
  'area_tierra': redondo(AREA_TIERRA), 'area_trans': redondo(AREA_TRANS),
  'dan_beerseba_km': round(km((33.2489, 35.6519), (31.2589, 34.7913))),
  'ancho_galilea_km': round(km((32.92, 35.08), (32.88, 35.57))), 'ancho_sur_km': round(km((31.5, 34.46), (31.5, 35.45))),
  'jerusalen_jerico_km': round(km((31.778, 35.235), (31.87, 35.44))),
}

X = {'polys': POLYS, 'capas': CAPAS, 'lugares': LUGARES, 'trazos': TRAZOS}
JS = ('/* ==========================================================\n'
      '   tierra-geo.js — Geografía propia de «La tierra de Israel»\n'
      '   Generado por geo/tierra.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y agrega sus capas, lugares y caminos a IMPERIOS_GEO.\n'
      '   *** Contornos históricos APROXIMADOS e ILUSTRATIVOS (Natural Earth, dominio público). ***\n'
      '   TIERRA_COMPARA: regiones de tamaño parecido en cada país de habla hispana, trasladadas\n'
      '   sobre Israel a la misma escala; km2 calculados con los mismos datos que la tierra de Israel.\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n  const X = ' + json.dumps(X, ensure_ascii=False, separators=(',', ':')) + ';\n'
      "  ['polys', 'capas', 'lugares', 'trazos'].forEach(k => Object.assign(G[k], X[k]));\n})();\n"
      'window.TIERRA_ROTULOS = ' + json.dumps(ROT, ensure_ascii=False) + ';\n'
      'window.TIERRA_COMPARA = ' + json.dumps(CMP, ensure_ascii=False) + ';\n'
      'window.TIERRA_DATOS = ' + json.dumps(DATOS, ensure_ascii=False) + ';\n')
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
open(SALIDA, 'w', encoding='utf-8').write(JS)
print('KB', len(JS.encode()) // 1024, 'capas', len(CAPAS), 'lugares', len(LUGARES), 'trazos', len(TRAZOS))
print('DATOS', DATOS)
for c in CMP: print(c['region'], c['pais'], c['texto'], c['km2'], c['razon'])
