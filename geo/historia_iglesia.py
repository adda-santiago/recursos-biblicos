"""Genera public/apps/historia-iglesia-2/historia-geo.js: la geografía propia de
«Historia de la Iglesia II (de la Reforma a hoy)».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js):
  · capas de las confesiones cristianas en Europa hacia 1600 (luteranos, reformados, anglicanos,
    católicos, ortodoxos) y el dominio otomano (solo contorno);
  · la América española y portuguesa (con fronteras de hoy);
  · lugares de la historia de la iglesia después de la Biblia, con el prefijo h- (el atlas bíblico
    no los agrega como puntos grises: herramientas/atlas_recursos.mjs);
  · trazos (viajes y rutas, aproximados) y rótulos para el mapa del mundo (mapa-mundo.js).

*** Las confesiones de 1600 son APROXIMADAS e ILUSTRATIVAS: se armaron con países y franjas de hoy
(Natural Earth admin 0, dominio público), no con las fronteras de la época. En muchas regiones
convivían varias confesiones; el mapa muestra la que predominaba. ***

Uso:  pip install shapely  ·  python geo/historia_iglesia.py
Requiere en geo/ (no se suben al repositorio): ne_50m_admin_0_countries.geojson
Coordenadas [latitud, longitud].
"""
import json, os
from shapely.geometry import shape, Polygon, box, Point
from shapely import affinity
from shapely.ops import unary_union

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'historia-iglesia-2', 'historia-geo.js')
PAISES = {f['properties']['ADMIN']: shape(f['geometry'])
          for f in json.load(open(os.path.join(AQUI, 'ne_50m_admin_0_countries.geojson'), encoding='utf-8'))['features']}
def P(*nombres): return unary_union([PAISES[n] for n in nombres])
def B(o, s, e, n): return box(o, s, e, n)          # lon oeste, lat sur, lon este, lat norte
def E(lon, lat, rx, ry): return affinity.scale(Point(lon, lat).buffer(1, 48), rx, ry)   # elipse en grados
def Q(*pts): return Polygon(pts)                    # polígono a mano (lon, lat)

# ---------- Europa hacia 1600 ----------
ALEMANIA, SUIZA, PAISES_BAJOS, REINO_UNIDO = P('Germany'), P('Switzerland'), P('Netherlands'), P('United Kingdom')
RUSIA, POLONIA, RUMANIA, HUNGRIA = P('Russia'), P('Poland'), P('Romania'), P('Hungary')
IRLANDA_N = B(-8.3, 54.0, -5.4, 55.4)
PRUSIA = B(18.6, 53.6, 23.0, 55.5)
TRANSILVANIA = E(23.8, 46.6, 2.1, 1.0)
HUNGRIA_E = E(21.6, 47.4, 1.7, 1.1)
PALATINADO = E(8.0, 49.55, 0.75, 0.45)
WURTEMBERG = E(9.3, 48.85, 0.95, 0.6)
SUIZA_PROT = unary_union([E(7.1, 46.9, 1.25, 0.7), E(8.9, 47.5, 0.85, 0.35)])
ESCOCIA = REINO_UNIDO.intersection(B(-8.0, 55.0, 0.0, 61.0)).difference(IRLANDA_N)
INGLATERRA = REINO_UNIDO.intersection(B(-6.5, 49.8, 2.0, 55.0)).difference(IRLANDA_N)

NORTE_LUT = Q((7.0, 55.5), (7.3, 53.4), (7.9, 52.6), (8.7, 52.1), (8.9, 51.3), (9.6, 50.6), (10.6, 50.3), (12.1, 50.2), (13.6, 50.6), (15.2, 50.9), (15.4, 52.5), (14.6, 54.6), (11.0, 55.2))
ALEMANIA_LUT = unary_union([ALEMANIA.intersection(NORTE_LUT),
                            ALEMANIA.intersection(WURTEMBERG)]).difference(PALATINADO)
luteranos = unary_union([P('Denmark', 'Norway', 'Sweden', 'Finland', 'Iceland', 'Estonia', 'Latvia'),
                         ALEMANIA_LUT, RUSIA.intersection(PRUSIA), POLONIA.intersection(PRUSIA)])
reformados = unary_union([PAISES_BAJOS.intersection(B(3.0, 51.6, 7.5, 54.0)), SUIZA.intersection(SUIZA_PROT),
                          ALEMANIA.intersection(PALATINADO), ESCOCIA, RUMANIA.intersection(TRANSILVANIA),
                          HUNGRIA.intersection(HUNGRIA_E)])
anglicanos = INGLATERRA
ortodoxos = unary_union([RUSIA.intersection(B(19.0, 40.0, 60.0, 70.0)).difference(PRUSIA),
                         P('Belarus', 'Ukraine', 'Moldova', 'Bulgaria', 'Republic of Serbia', 'North Macedonia',
                           'Montenegro', 'Greece', 'Cyprus', 'Georgia', 'Armenia'),
                         RUMANIA.difference(TRANSILVANIA)])
catolicos = unary_union([P('Spain', 'Portugal', 'Italy', 'France', 'Belgium', 'Luxembourg', 'Ireland', 'Austria',
                           'Lithuania', 'Czechia', 'Slovakia', 'Croatia', 'Slovenia', 'Malta', 'Liechtenstein', 'Andorra'),
                         POLONIA.difference(PRUSIA), HUNGRIA.difference(HUNGRIA_E), REINO_UNIDO.intersection(IRLANDA_N),
                         PAISES_BAJOS.difference(B(3.0, 51.6, 7.5, 54.0)),
                         ALEMANIA.difference(ALEMANIA_LUT).difference(PALATINADO),
                         SUIZA.difference(SUIZA_PROT)])
otomanos = unary_union([P('Turkey', 'Greece', 'Bulgaria', 'Republic of Serbia', 'North Macedonia', 'Albania',
                          'Bosnia and Herzegovina', 'Montenegro', 'Kosovo'),
                        HUNGRIA.intersection(B(17.5, 45.7, 21.8, 47.6)), RUMANIA.intersection(B(22.0, 43.6, 29.8, 45.6))])

# ---------- América ----------
america_esp = P('Mexico', 'Guatemala', 'Belize', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama',
                'Cuba', 'Dominican Republic', 'Puerto Rico', 'Colombia', 'Venezuela', 'Ecuador', 'Peru', 'Bolivia',
                'Chile', 'Argentina', 'Paraguay', 'Uruguay')
america_por = P('Brazil')

def polis(g, tol=0.04, minimo=0.02):
    g = g.simplify(tol, preserve_topology=True)
    out = []
    for p in (g.geoms if hasattr(g, 'geoms') else [g]):
        if not isinstance(p, Polygon) or p.area < minimo: continue
        out.append([[round(y, 2), round(x, 2)] for x, y in p.exterior.coords])
    return out

polys = {
    'h-luteranos': polis(luteranos), 'h-reformados': polis(reformados), 'h-anglicanos': polis(anglicanos),
    'h-catolicos': polis(catolicos), 'h-ortodoxos': polis(ortodoxos), 'h-otomanos': polis(otomanos),
    'h-am-esp': polis(america_esp, 0.08, 0.05), 'h-am-por': polis(america_por, 0.08, 0.05),
}
COL = {'lut': '#3f6fa3', 'ref': '#4f7d43', 'ang': '#9e2b25', 'cat': '#a9772a', 'ort': '#6b4e7c', 'oto': '#5a5750',
       'esp': '#a9772a', 'por': '#4f7d43'}
capas = {
    'h-luteranos': {'n': 'Luteranos', 'polys': ['h-luteranos'], 'color': COL['lut'], 'rot': [58.5, 15.5]},
    'h-reformados': {'n': 'Reformados', 'polys': ['h-reformados'], 'color': COL['ref'], 'rot': [56.6, -4.3]},
    'h-anglicanos': {'n': 'Anglicanos', 'polys': ['h-anglicanos'], 'color': COL['ang'], 'rot': [52.4, -1.6]},
    'h-catolicos': {'n': 'Católicos', 'polys': ['h-catolicos'], 'color': COL['cat'], 'rot': [40.0, -3.8]},
    'h-ortodoxos': {'n': 'Ortodoxos', 'polys': ['h-ortodoxos'], 'color': COL['ort'], 'rot': [54.5, 33.0]},
    'h-otomanos': {'n': 'Bajo dominio otomano', 'polys': ['h-otomanos'], 'color': COL['oto'], 'borde': True, 'sinRotulo': True},
    'h-am-esp': {'n': 'América española', 'polys': ['h-am-esp'], 'color': COL['esp'], 'rot': [-27.0, -65.0]},
    'h-am-por': {'n': 'América portuguesa', 'polys': ['h-am-por'], 'color': COL['por'], 'rot': [-9.0, -50.0]},
}

# ---------- Lugares (h- = posteriores a la Biblia) ----------
lugares = {
    # Reforma
    'h-wittenberg': ['Wittenberg', 51.87, 12.65], 'h-erfurt': ['Erfurt', 50.98, 11.03, 'left'],
    'h-worms': ['Worms', 49.63, 8.36, 'left'], 'h-wartburg': ['Wartburg', 50.97, 10.31, 'bottom'],
    'h-augsburgo': ['Augsburgo', 48.37, 10.9], 'h-leipzig': ['Leipzig', 51.34, 12.37, 'bottom'],
    'h-zurich': ['Zúrich', 47.38, 8.54], 'h-ginebra': ['Ginebra', 46.2, 6.14, 'left'], 'h-basilea': ['Basilea', 47.56, 7.59, 'left'],
    'h-estrasburgo': ['Estrasburgo', 48.57, 7.75, 'left'], 'h-marburgo': ['Marburgo', 50.81, 8.77, 'left'],
    'h-munster': ['Münster', 51.96, 7.63, 'left'], 'h-heidelberg': ['Heidelberg', 49.4, 8.69, 'left'],
    'h-francfort': ['Fráncfort', 50.11, 8.68], 'h-praga': ['Praga', 50.08, 14.44],
    'h-londres': ['Londres', 51.51, -0.13], 'h-oxford': ['Oxford', 51.75, -1.26, 'left'], 'h-edimburgo': ['Edimburgo', 55.95, -3.19],
    'h-paris': ['París', 48.86, 2.35], 'h-amsterdam': ['Ámsterdam', 52.37, 4.9], 'h-amberes': ['Amberes', 51.22, 4.4, 'left'],
    'h-dordrecht': ['Dordrecht', 51.81, 4.67, 'bottom'], 'h-sevilla': ['Sevilla', 37.39, -5.98], 'h-valladolid': ['Valladolid', 41.65, -4.72],
    'h-roma': ['Roma', 41.9, 12.5], 'h-trento': ['Trento', 46.07, 11.12], 'h-osnabruck': ['Osnabrück', 52.28, 8.05],
    'h-goa': ['Goa', 15.5, 73.83, 'left'], 'h-kagoshima': ['Kagoshima', 31.6, 130.55], 'h-reducciones': ['Reducciones guaraníes', -27.3, -55.9],
    # Siglos XVII y XVIII
    'h-herrnhut': ['Herrnhut', 51.02, 14.74], 'h-halle': ['Halle', 51.48, 11.97, 'bottom'], 'h-bedford': ['Bedford', 52.14, -0.47],
    'h-plymouth-ing': ['Plymouth (Inglaterra)', 50.37, -4.14, 'left'], 'h-plymouth': ['Plymouth (Massachusetts)', 41.96, -70.67],
    'h-northampton': ['Northampton', 42.33, -72.64, 'left'], 'h-bristol': ['Bristol', 51.45, -2.59, 'left'],
    'h-copenhague': ['Copenhague', 55.68, 12.57], 'h-santo-tomas': ['Santo Tomás', 18.34, -64.93],
    'h-groenlandia': ['Groenlandia', 64.18, -51.72],
    # Siglo XIX
    'h-serampore': ['Serampore (Calcuta)', 22.75, 88.34], 'h-rangun': ['Rangún', 16.84, 96.17], 'h-canton': ['Cantón', 23.13, 113.26],
    'h-shanghai': ['Shanghái', 31.23, 121.47], 'h-pyongyang': ['Pionyang', 39.04, 125.76], 'h-seul': ['Seúl', 37.57, 126.98, 'bottom'],
    'h-pekin': ['Pekín', 39.9, 116.4, 'left'], 'h-ciudad-del-cabo': ['Ciudad del Cabo', -33.92, 18.42],
    'h-kuruman': ['Kuruman', -27.45, 23.43], 'h-victoria': ['Cataratas Victoria', -17.92, 25.86],
    'h-freetown': ['Freetown', 8.48, -13.23, 'left'], 'h-abeokuta': ['Abeokuta', 7.15, 3.35], 'h-jamaica': ['Jamaica', 18.1, -77.3, 'left'],
    'h-cane-ridge': ['Cane Ridge', 38.27, -84.09, 'left'], 'h-rochester': ['Rochester', 43.16, -77.61], 'h-keswick': ['Keswick', 54.6, -3.13, 'left'],
    'h-liverpool': ['Liverpool', 53.41, -2.98, 'left'],
    # Siglo XX
    'h-topeka': ['Topeka', 39.05, -95.68], 'h-los-angeles': ['Los Ángeles', 34.05, -118.24, 'left'], 'h-chicago': ['Chicago', 41.88, -87.63],
    'h-gales': ['Gales (Loughor)', 51.66, -4.07, 'left'], 'h-mukti': ['Mukti (Kedgaon)', 18.43, 74.33, 'left'], 'h-oslo': ['Oslo', 59.91, 10.75],
    'h-barmen': ['Barmen', 51.26, 7.15, 'left'], 'h-flossenburg': ['Flossenbürg', 49.73, 12.35], 'h-moscu': ['Moscú', 55.76, 37.62],
    'h-lausana': ['Lausana', 46.52, 6.63, 'bottom'], 'h-pittsburgh': ['Pittsburgh', 40.44, -80.0], 'h-manila': ['Manila', 14.6, 120.98],
    # América Latina
    'h-santo-domingo': ['Santo Domingo', 18.47, -69.89], 'h-mexico': ['Ciudad de México', 19.43, -99.13, 'left'], 'h-lima': ['Lima', -12.05, -77.04, 'left'],
    'h-bogota': ['Bogotá', 4.71, -74.07, 'left'], 'h-quito': ['Quito', -0.18, -78.47, 'left'], 'h-panama': ['Panamá', 8.98, -79.52],
    'h-buenos-aires': ['Buenos Aires', -34.6, -58.38], 'h-santiago': ['Santiago', -33.45, -70.67, 'left'],
    'h-valparaiso': ['Valparaíso', -33.05, -71.61, 'left'], 'h-belem': ['Belém', -1.46, -48.49], 'h-sao-paulo': ['São Paulo', -23.55, -46.63],
    'h-bahia-aguirre': ['Bahía Aguirre (Tierra del Fuego)', -54.92, -65.95], 'h-ushuaia': ['Ushuaia', -54.8, -68.3, 'left'],
    'h-montevideo': ['Montevideo', -34.9, -56.16, 'bottom'],
}

# ---------- Trazos (aproximados) ----------
L = lambda k: lugares[k][1:3]
trazos = {
    'h-t-lutero': {'n': 'Lutero: Wittenberg, Worms y Wartburg (1521)', 'l': [L('h-wittenberg'), [51.1, 10.9], L('h-worms'), [50.4, 9.3], L('h-wartburg')]},
    'h-t-reina': {'n': 'Huida de Casiodoro de Reina (1557-1569, aprox.)',
                  'l': [L('h-sevilla'), [40.5, -3.7], [43.3, 1.2], L('h-ginebra'), [48.0, 3.2], [50.9, 1.5], L('h-londres'), [51.2, 2.3],
                        L('h-amberes'), L('h-francfort'), L('h-estrasburgo'), L('h-basilea')]},
    'h-t-mayflower': {'n': 'El Mayflower (1620)', 'l': [L('h-plymouth-ing'), [48.5, -20.0], [46.0, -45.0], [42.5, -66.0], L('h-plymouth')]},
    'h-t-moravos-1': {'n': 'Moravos a Santo Tomás (1732)', 'l': [L('h-herrnhut'), L('h-copenhague'), [56.0, 4.0], [50.0, -20.0], [30.0, -45.0], L('h-santo-tomas')]},
    'h-t-moravos-2': {'n': 'Moravos a Groenlandia (1733)', 'l': [L('h-copenhague'), [59.5, 2.0], [61.5, -20.0], [61.0, -42.0], L('h-groenlandia')]},
    'h-t-carey': {'n': 'Carey a la India (1793)', 'l': [L('h-londres'), [49.5, -6.0], [32.6, -17.5], [0.0, -22.0], [-34.5, 16.0],
                                                     [-36.0, 25.0], [-20.0, 60.0], [-2.0, 82.0], [15.0, 88.5], L('h-serampore')]},
    'h-t-taylor': {'n': 'Hudson Taylor a China (1853-1854)', 'l': [L('h-liverpool'), [48.0, -10.0], [10.0, -24.0], [-35.5, 18.0], [-36.0, 40.0],
                                                                [-25.0, 85.0], [-6.5, 105.5], [5.0, 108.0], [18.0, 114.0], L('h-shanghai')]},
    'h-t-thomson': {'n': 'Diego Thomson (1818-1827)', 'l': [L('h-buenos-aires'), L('h-santiago'), [-20.0, -71.5], L('h-lima'), [-3.0, -80.5],
                                                         L('h-quito'), L('h-bogota'), [11.0, -76.0], [18.0, -85.0], L('h-mexico')]},
    'h-t-azusa-oslo': {'n': 'De Azusa a Europa', 'l': [L('h-los-angeles'), [40.0, -105.0], [42.0, -80.0], [50.0, -40.0], L('h-oslo')]},
    'h-t-chicago-belem': {'n': 'De Chicago a Brasil (1910)', 'l': [L('h-chicago'), [25.0, -72.0], [5.0, -50.0], L('h-belem')]},
    'h-t-mukti-chile': {'n': 'Noticias de la India a Chile (1907)', 'l': [L('h-mukti'), [-5.0, 70.0], [-36.0, 22.0], [-40.0, -20.0], [-45.0, -60.0], L('h-valparaiso')]},
}
for t in trazos.values():
    t['l'] = [[round(a, 2), round(b, 2)] for a, b in t['l']]

rotulos = [
    ['Océano Atlántico', 28, -40, 'mar'], ['Océano Pacífico', 5, -125, 'mar'], ['Océano Índico', -18, 78, 'mar'],
    ['Mar Mediterráneo', 35.3, 17.5, 'mar'],
    ['África', 5, 20, 'region'], ['Asia', 45, 95, 'region'],
    ['América del Norte', 45, -100, 'region'], ['América del Sur', -18, -60, 'region'], ['Oceanía', -25, 135, 'region'],
]

js = ('/* ==========================================================\n'
      '   historia-geo.js — Geografía propia de «Historia de la Iglesia II (de la Reforma a hoy)»\n'
      '   Generado por geo/historia_iglesia.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y agrega sus capas, lugares y trazos a IMPERIOS_GEO.\n'
      '   Los lugares posteriores a la Biblia llevan el prefijo h- (el atlas bíblico no los agrega).\n'
      '   *** Confesiones de 1600 APROXIMADAS e ILUSTRATIVAS, con países de hoy (Natural Earth). ***\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      '  const X = ' + json.dumps({'polys': polys, 'capas': capas, 'lugares': lugares, 'trazos': trazos}, ensure_ascii=False, separators=(',', ':')) + ';\n'
      '  Object.assign(G.polys, X.polys); Object.assign(G.capas, X.capas);\n'
      '  Object.assign(G.lugares, X.lugares); Object.assign(G.trazos, X.trazos);\n'
      '  window.HISTORIA_ROTULOS = ' + json.dumps(rotulos, ensure_ascii=False) + ';\n'
      '})();\n')
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
open(SALIDA, 'w', encoding='utf-8').write(js)
print('historia-geo.js:', len(js) // 1024, 'KB ·', len(capas), 'capas,', len(lugares), 'lugares,', len(trazos), 'trazos')
