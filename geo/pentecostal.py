"""Genera public/apps/movimiento-pentecostal/pentecostal-geo.js: la geografía propia de
«El movimiento pentecostal».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js) lugares y trazos para el mapa del
mundo (mapa-mundo.js). No usa polígonos, así que no necesita los datos de Natural Earth.
Los lugares posteriores a la Biblia llevan el prefijo h- (el atlas bíblico no los agrega:
herramientas/atlas_recursos.mjs). Los ids que ya usa historia-iglesia-2/historia-geo.js conservan
el mismo id y las mismas coordenadas.

*** Los trazos son APROXIMADOS e ILUSTRATIVOS: unen ciudades, no reproducen rutas de viaje. ***

Uso:  python geo/pentecostal.py
Coordenadas [latitud, longitud].
"""
import json, os

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'movimiento-pentecostal', 'pentecostal-geo.js')

# ---------- Lugares (h- = posteriores a la Biblia) ----------
lugares = {
    # Raíces (siglos XVIII y XIX)
    'h-londres': ['Londres', 51.51, -0.13], 'h-keswick': ['Keswick', 54.6, -3.13, 'left'],
    'h-vineland': ['Vineland', 39.49, -75.03], 'h-nueva-york': ['Nueva York', 40.71, -74.01],
    'h-zion': ['Zion (Illinois)', 42.45, -87.83, 'bottom'],
    'h-frigia': ['Frigia (montanismo)', 38.9, 30.5],
    # Primeros focos (1901-1910)
    'h-topeka': ['Topeka', 39.05, -95.68], 'h-houston': ['Houston', 29.76, -95.37],
    'h-los-angeles': ['Los Ángeles', 34.05, -118.24, 'left'], 'h-chicago': ['Chicago', 41.88, -87.63],
    'h-gales': ['Gales (Loughor)', 51.66, -4.07, 'left'], 'h-mukti': ['Mukti (Kedgaon)', 18.43, 74.33, 'left'],
    'h-oslo': ['Oslo', 59.91, 10.75], 'h-estocolmo': ['Estocolmo', 59.33, 18.07],
    'h-sunderland': ['Sunderland', 54.91, -1.38], 'h-calcuta': ['Calcuta', 22.57, 88.36],
    'h-hong-kong': ['Hong Kong', 22.32, 114.17], 'h-pyongyang': ['Pionyang', 39.04, 125.76],
    'h-johannesburgo': ['Johannesburgo', -26.2, 28.05], 'h-liberia': ['Monrovia', 6.3, -10.8, 'left'],
    # Organización (1907-1960)
    'h-memphis': ['Memphis', 35.15, -90.05], 'h-cleveland-tn': ['Cleveland (Tennessee)', 35.16, -84.88, 'bottom'],
    'h-hot-springs': ['Hot Springs', 34.5, -93.06, 'left'], 'h-san-luis': ['San Luis (Misuri)', 38.63, -90.2],
    'h-springfield': ['Springfield', 37.21, -93.29, 'bottom'], 'h-battleford': ['North Battleford', 52.78, -108.29],
    'h-zurich': ['Zúrich', 47.38, 8.54],
    # América Latina
    'h-valparaiso': ['Valparaíso', -33.05, -71.61, 'left'], 'h-santiago': ['Santiago', -33.45, -70.67, 'left'],
    'h-concepcion': ['Concepción', -36.83, -73.05, 'left'], 'h-temuco': ['Temuco', -38.74, -72.6, 'left'],
    'h-belem': ['Belém', -1.46, -48.49], 'h-sao-paulo': ['São Paulo', -23.55, -46.63],
    'h-rio': ['Río de Janeiro', -22.91, -43.17], 'h-buenos-aires': ['Buenos Aires', -34.6, -58.38],
    'h-la-plata': ['La Plata', -34.92, -57.95, 'bottom'], 'h-ponce': ['Ponce', 18.01, -66.61],
    'h-mexico': ['Ciudad de México', 19.43, -99.13, 'left'], 'h-el-paso': ['El Paso', 31.76, -106.49, 'left'],
    'h-san-antonio': ['San Antonio (Texas)', 29.42, -98.49, 'bottom'], 'h-guatemala': ['Guatemala', 14.63, -90.51, 'left'],
    'h-san-salvador': ['San Salvador', 13.69, -89.22], 'h-tegucigalpa': ['Tegucigalpa', 14.07, -87.19],
    'h-bogota': ['Bogotá', 4.71, -74.07, 'left'], 'h-lima': ['Lima', -12.05, -77.04, 'left'],
    'h-la-paz': ['La Paz', -16.5, -68.15, 'left'], 'h-puno': ['Puno', -15.84, -70.02],
    'h-quito': ['Quito', -0.18, -78.47, 'left'], 'h-asuncion': ['Asunción', -25.26, -57.58],
    'h-honolulu': ['Honolulu', 21.31, -157.86],
    # Renovación y nuevas olas
    'h-van-nuys': ['Van Nuys', 34.19, -118.45, 'bottom'], 'h-pittsburgh': ['Pittsburgh', 40.44, -80.0],
    'h-costa-mesa': ['Costa Mesa', 33.64, -117.92], 'h-anaheim': ['Anaheim', 33.84, -117.91, 'left'],
    'h-toronto': ['Toronto', 43.65, -79.38], 'h-seul': ['Seúl', 37.57, 126.98, 'bottom'],
    'h-lagos': ['Lagos', 6.52, 3.38], 'h-accra': ['Acra', 5.6, -0.19, 'left'], 'h-nairobi': ['Nairobi', -1.29, 36.82],
    'h-henan': ['Henan (China)', 34.76, 113.65], 'h-sidney': ['Sídney', -33.87, 151.21],
}

# ---------- Trazos (aproximados) ----------
L = lambda k: lugares[k][1:3]
trazos = {
    'h-p-topeka-houston': {'n': 'De Topeka a Houston (1901-1905)', 'l': [L('h-topeka'), [34.5, -95.6], L('h-houston')]},
    'h-p-houston-la': {'n': 'Seymour de Houston a Los Ángeles (1906)', 'l': [L('h-houston'), [32.0, -106.0], L('h-los-angeles')]},
    'h-p-azusa-oslo': {'n': 'De Nueva York a Oslo: Barratt (1906)', 'l': [L('h-nueva-york'), [50.0, -40.0], [58.0, -10.0], L('h-oslo')]},
    'h-p-azusa-ny': {'n': 'De Los Ángeles a Nueva York', 'l': [L('h-los-angeles'), [38.5, -100.0], [41.0, -85.0], L('h-nueva-york')]},
    'h-p-oslo-sunderland': {'n': 'De Oslo a Sunderland (1907)', 'l': [L('h-oslo'), [57.5, 3.0], L('h-sunderland')]},
    'h-p-oslo-estocolmo': {'n': 'De Oslo a Estocolmo (1907)', 'l': [L('h-oslo'), L('h-estocolmo')]},
    'h-p-garr': {'n': 'Los Garr: de Los Ángeles a Calcuta y Hong Kong (1907)',
                 'l': [L('h-los-angeles'), [41.0, -90.0], L('h-nueva-york'), [45.0, -30.0], [36.0, -5.6], [33.5, 20.0],
                       [30.0, 32.5], [12.5, 45.0], [10.0, 75.0], [15.0, 85.0], L('h-calcuta'), [12.0, 92.0], [6.0, 97.0],
                       [1.3, 104.0], [10.0, 110.0], L('h-hong-kong')]},
    'h-p-azusa-liberia': {'n': 'Misioneros de Azusa a Liberia (1907)', 'l': [L('h-nueva-york'), [30.0, -45.0], [12.0, -20.0], L('h-liberia')]},
    'h-p-azusa-sudafrica': {'n': 'Misioneros a Sudáfrica (1908)', 'l': [L('h-chicago'), L('h-nueva-york'), [20.0, -35.0], [-10.0, -10.0],
                                                                     [-34.5, 18.0], [-33.0, 25.0], L('h-johannesburgo')]},
    'h-p-mukti-chile': {'n': 'Noticias de la India a Chile (1907)', 'l': [L('h-mukti'), [-5.0, 70.0], [-36.0, 22.0], [-40.0, -20.0], [-45.0, -60.0], L('h-valparaiso')]},
    'h-p-chicago-belem': {'n': 'Berg y Vingren: de Chicago a Belém (1910)', 'l': [L('h-chicago'), L('h-nueva-york'), [25.0, -65.0], [5.0, -48.0], L('h-belem')]},
    'h-p-chicago-sp': {'n': 'Francescon: de Chicago a São Paulo (1910)', 'l': [L('h-chicago'), L('h-nueva-york'), [10.0, -50.0], [-15.0, -35.0], L('h-sao-paulo')]},
    'h-p-lugo': {'n': 'Juan L. Lugo: de Hawái a Ponce (1916)', 'l': [L('h-honolulu'), [30.0, -135.0], L('h-los-angeles'), [32.0, -110.0], [28.0, -90.0], [22.0, -75.0], L('h-ponce')]},
    'h-p-suecia-sur': {'n': 'Misioneros suecos a América del Sur (desde 1920)', 'l': [L('h-estocolmo'), [55.0, 5.0], [40.0, -20.0], [0.0, -30.0], [-25.0, -40.0], L('h-buenos-aires'), [-30.0, -64.0], L('h-santiago')]},
}
for t in trazos.values():
    t['l'] = [[round(a, 2), round(b, 2)] for a, b in t['l']]

rotulos = [
    ['Océano Atlántico', 28, -40, 'mar'], ['Océano Pacífico', 5, -125, 'mar'], ['Océano Índico', -18, 78, 'mar'],
    ['África', 5, 20, 'region'], ['Asia', 45, 95, 'region'], ['Europa', 52, 20, 'region'],
    ['América del Norte', 45, -100, 'region'], ['América del Sur', -18, -60, 'region'], ['Oceanía', -25, 135, 'region'],
]

js = ('/* ==========================================================\n'
      '   pentecostal-geo.js — Geografía propia de «El movimiento pentecostal»\n'
      '   Generado por geo/pentecostal.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y agrega sus lugares y trazos a IMPERIOS_GEO.\n'
      '   Los lugares posteriores a la Biblia llevan el prefijo h- (el atlas bíblico no los agrega).\n'
      '   *** Trazos APROXIMADOS e ILUSTRATIVOS. ***\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      '  const X = ' + json.dumps({'lugares': lugares, 'trazos': trazos}, ensure_ascii=False, separators=(',', ':')) + ';\n'
      '  Object.assign(G.lugares, X.lugares); Object.assign(G.trazos, X.trazos);\n'
      '  window.PENTECOSTAL_ROTULOS = ' + json.dumps(rotulos, ensure_ascii=False) + ';\n'
      '})();\n')
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
open(SALIDA, 'w', encoding='utf-8').write(js)
print('pentecostal-geo.js:', len(js) // 1024, 'KB ·', len(lugares), 'lugares,', len(trazos), 'trazos')
