# Uso: python3 geo/patriarcas.py  (desde la raíz del repositorio)
# Genera public/apps/patriarcas/patriarcas-geo.js: los lugares, rótulos y recorridos que el recurso
# «Los patriarcas» necesita y que no están en imperios-geo.js ni en tierra-de-israel/tierra-geo.js
# (la página carga los dos antes que este). Extiende IMPERIOS_GEO al cargarse, sin modificar la
# geografía compartida (DIRECTRICES §7, geografía propia por recurso). No usa Natural Earth.
# *** Ubicaciones y trazados APROXIMADOS: los caminos son los probables de la época, no rutas
# documentadas; varios lugares (Gerar, Mahanaim, Beer-lahai-roi, Hoba, Sodoma) son hipótesis. ***
# Los lugares que son hipótesis llevan el prefijo r- para que el atlas no los agregue como sitios.
import json, os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
LUGARES = {
    # id: [nombre, lat, lng, lado de la etiqueta]
    # Mesopotamia y Siria
    'mari': ['Mari', 34.55, 40.89, 'bottom'],
    'nuzi': ['Nuzi', 35.38, 44.33, 'right'],
    'alepo': ['Alepo', 36.2, 37.16, 'top'],
    'ebla': ['Ebla', 35.8, 36.8, 'left'],
    'r-urfa': ['Urfa (Ur del norte, hipótesis)', 37.16, 38.79, 'top'],
    'r-padan-aram': ['Padan-aram', 36.4, 39.6, 'bottom'],
    'r-hoba': ['Hoba (aprox.)', 33.75, 36.42, 'right'],
    # Canaán
    'mamre': ['Mamre', 31.56, 35.11, 'right'],
    'salem': ['Salem', 31.778, 35.235, 'right'],
    'moriah': ['Monte Moriah', 31.778, 35.235, 'right'],
    'r-gerar': ['Gerar (aprox.)', 31.39, 34.6, 'left'],
    'r-rehobot': ['Rehobot (aprox.)', 31.03, 34.65, 'left'],
    'r-beer-lahai-roi': ['Beer-lahai-roi (aprox.)', 30.75, 34.45, 'left'],
    'r-sodoma-sur': ['Sodoma (hipótesis del sur)', 31.2, 35.54, 'right'],
    'r-sodoma-norte': ['Sodoma (hipótesis del norte)', 31.84, 35.67, 'right'],
    'r-zoar': ['Zoar (aprox.)', 31.03, 35.47, 'left'],
    'dotan': ['Dotán', 32.42, 35.24, 'right'],
    'r-mahanaim': ['Mahanaim (aprox.)', 32.26, 35.74, 'right'],
    'r-peniel': ['Peniel (aprox.)', 32.18, 35.69, 'bottom'],
    'sucot': ['Sucot', 32.196, 35.62, 'bottom'],
    'r-galaad-mizpa': ['Galaad (Mizpa, aprox.)', 32.45, 35.85, 'right'],
    'efrata': ['Efrata (Belén)', 31.705, 35.2, 'left'],
    'r-neguev': ['Neguev', 30.9, 34.85, 'right'],
    # Egipto
    'r-itjtawy': ['Itjtawy (capital, aprox.)', 29.57, 31.22, 'left'],
}
ROTULOS = [
    ['Mar Grande', 32.6, 33.9, 'mar'], ['Mar Salado', 31.42, 35.47, 'mar'], ['Jordán', 32.25, 35.6, 'rio'],
    ['Éufrates', 34.9, 40.3, 'rio'], ['Tigris', 35.0, 43.75, 'rio'], ['Nilo', 28.6, 30.9, 'rio'], ['Golfo Pérsico', 27.4, 51.2, 'mar'],
    ['Mar Rojo', 26.0, 35.3, 'mar'], ['Canaán', 32.75, 35.12, 'region'], ['Aram', 34.4, 37.6, 'region'],
    ['Sinar', 32.0, 45.3, 'region'], ['Egipto', 27.3, 31.2, 'region'], ['Sinaí', 29.2, 33.6, 'region'],
    ['Arabia', 26.5, 43.0, 'region'], ['Edom (Seir)', 30.4, 35.55, 'region'],
]
# Coordenadas de lugares de las otras geografías, para trazar los caminos
UR = [30.963, 46.103]; HARAN = [36.865, 39.031]; DAMASCO = [33.51, 36.29]; SIQUEM = [32.2137, 35.2797]
BETEL = [31.9306, 35.2164]; HEBRON = [31.5326, 35.0998]; BEERSEBA = [31.2589, 34.7913]; GAZA = [31.5, 34.46]
PELUSIO = [31.04, 32.55]; GOSEN = [30.62, 31.62]; MENFIS = [29.85, 31.25]; DAN = [33.2489, 35.6519]
JERUSALEN = [31.778, 35.235]; DOTAN = [32.42, 35.24]; GERAR = [31.39, 34.6]
EUFRATES = [[30.963, 46.103], [31.32, 45.64], [32.0, 45.0], [32.536, 44.421], [33.06, 44.25],
            [33.9, 42.4], [34.45, 41.0], [34.55, 40.89], [35.33, 40.15], [35.95, 39.03], [36.4, 38.95], [36.865, 39.031]]
# Harán a Canaán: por Alepo, Hamat y Damasco, y bajando por la serranía hasta Siquem
HARAN_CANAAN = [HARAN, [36.55, 38.2], [36.2, 37.16], [35.13, 36.75], [34.4, 36.5], [33.51, 36.29],
                [33.0, 35.95], [32.6, 35.55], [32.35, 35.35], SIQUEM]
TRAZOS = {
    'pt-ur-haran': {'n': 'De Ur a Harán (Gn 11:31)', 'l': EUFRATES},
    'pt-haran-canaan': {'n': 'De Harán a Canaán (Gn 12:4-6)', 'l': HARAN_CANAAN},
    'pt-canaan-sur': {'n': 'De Siquem al Neguev (Gn 12:6-9)', 'l': [SIQUEM, BETEL, [31.7, 35.15], HEBRON, [31.05, 34.85]]},
    'pt-egipto': {'n': 'Abram baja a Egipto (Gn 12:10)', 'l': [[31.05, 34.85], [30.95, 34.3], [31.13, 33.8], PELUSIO, [30.9, 32.1], GOSEN, MENFIS]},
    'pt-egipto-vuelta': {'n': 'Abram vuelve a Betel (Gn 13:1-4)', 'l': [MENFIS, GOSEN, [30.9, 32.1], PELUSIO, [31.13, 33.8], [30.95, 34.3], [31.05, 34.85], HEBRON, [31.7, 35.15], BETEL]},
    'pt-lot': {'n': 'Lot hacia la llanura del Jordán (Gn 13:10-12)', 'l': [BETEL, [31.87, 35.44], [31.75, 35.58], [31.45, 35.62], [31.2, 35.54]]},
    'pt-abram-hebron': {'n': 'Abram a Mamre (Gn 13:18)', 'l': [BETEL, [31.7, 35.15], [31.56, 35.11]]},
    'pt-reyes': {'n': 'Los reyes del oriente (Gn 14:1-12)', 'l': [[33.51, 36.29], [32.6, 36.15], [31.8, 35.9], [30.9, 35.6], [30.4, 35.2], [30.68, 34.5], [30.9, 35.3], [31.2, 35.54]]},
    'pt-rescate': {'n': 'Abram persigue a los reyes (Gn 14:13-17)', 'l': [[31.56, 35.11], BETEL, SIQUEM, [32.6, 35.55], [33.0, 35.6], DAN, [33.5, 36.1], [33.75, 36.42]]},
    'pt-rescate-vuelta': {'n': 'Regreso y encuentro con Melquisedec (Gn 14:17-18)', 'l': [[33.75, 36.42], DAN, [32.6, 35.55], SIQUEM, BETEL, JERUSALEN]},
    'pt-agar': {'n': 'Agar huye hacia Shur (Gn 16:6-7)', 'l': [[31.56, 35.11], BEERSEBA, [30.75, 34.45]]},
    'pt-gerar': {'n': 'Abraham en Gerar y Beerseba (Gn 20:1; 21:31)', 'l': [[31.56, 35.11], [31.3, 34.9], GERAR, BEERSEBA]},
    'pt-moriah': {'n': 'De Beerseba al monte Moriah, tres días (Gn 22:3-4)', 'l': [BEERSEBA, [31.4, 34.95], HEBRON, [31.705, 35.2], JERUSALEN]},
    'pt-siervo': {'n': 'El siervo de Abraham a la ciudad de Nacor (Gn 24:10)', 'l': [HEBRON, [31.7, 35.15], BETEL] + HARAN_CANAAN[::-1]},
    'pt-isaac': {'n': 'Isaac en Gerar, Rehobot y Beerseba (Gn 26)', 'l': [[30.75, 34.45], GERAR, [31.03, 34.65], BEERSEBA]},
    'pt-jacob-ida': {'n': 'Jacob huye a Harán (Gn 28:10)', 'l': [BEERSEBA, HEBRON, [31.7, 35.15], BETEL] + HARAN_CANAAN[::-1][1:]},
    'pt-jacob-vuelta': {'n': 'Jacob vuelve a Canaán (Gn 31–35)', 'l': [HARAN, [36.55, 38.2], [36.0, 37.5], [35.2, 37.1], [34.2, 36.75], [33.51, 36.29], [32.9, 36.0], [32.45, 35.85], [32.26, 35.74], [32.18, 35.69], [32.196, 35.62], SIQUEM, BETEL, [31.705, 35.2], [31.56, 35.11]]},
    'pt-esau': {'n': 'Esaú se va a Seir (Gn 33:16; 36:6-8)', 'l': [[32.18, 35.69], [31.8, 35.75], [31.0, 35.6], [30.5, 35.5]]},
    'pt-jose': {'n': 'José: de Hebrón a Dotán y vendido a Egipto (Gn 37)', 'l': [HEBRON, [31.7, 35.15], BETEL, SIQUEM, DOTAN, [32.35, 35.0], [32.0, 34.85], [31.75, 34.65], GAZA, [31.13, 33.8], PELUSIO, [30.9, 32.1], GOSEN, MENFIS]},
    'pt-hermanos': {'n': 'Los hermanos bajan a Egipto (Gn 42–45)', 'l': [HEBRON, [31.5, 34.9], GAZA, [31.13, 33.8], PELUSIO, [30.9, 32.1], GOSEN, MENFIS]},
    'pt-jacob-egipto': {'n': 'Jacob baja a Egipto (Gn 46)', 'l': [HEBRON, BEERSEBA, [31.05, 34.3], [31.13, 33.8], PELUSIO, [30.9, 32.1], GOSEN]},
    'pt-entierro': {'n': 'El entierro de Jacob en Macpela (Gn 50:7-13)', 'l': [GOSEN, [30.9, 32.1], PELUSIO, [31.13, 33.8], GAZA, [31.5, 34.9], HEBRON]},
}
X = {'lugares': LUGARES, 'trazos': TRAZOS}
js = ('/* ==========================================================\n'
      '   patriarcas-geo.js — Geografía propia de «Los patriarcas»\n'
      '   Generado por geo/patriarcas.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y tierra-de-israel/tierra-geo.js, y agrega sus lugares\n'
      '   y recorridos a IMPERIOS_GEO. Define además PATRIARCAS_ROTULOS para los mapas del recurso.\n'
      '   *** Ubicaciones y caminos APROXIMADOS; los lugares con prefijo r- son hipótesis. ***\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      f'  const X = {json.dumps(X, ensure_ascii=False)};\n'
      '  Object.keys(X.lugares).forEach(k => { if (!G.lugares[k]) G.lugares[k] = X.lugares[k]; });\n'
      '  Object.assign(G.trazos, X.trazos);\n'
      f'  window.PATRIARCAS_ROTULOS = {json.dumps(ROTULOS, ensure_ascii=False)};\n'
      '})();\n')
dest = os.path.join(R, 'public', 'apps', 'patriarcas')
os.makedirs(dest, exist_ok=True)
open(os.path.join(dest, 'patriarcas-geo.js'), 'w', encoding='utf-8').write(js)
print('patriarcas-geo.js:', len(LUGARES), 'lugares,', len(TRAZOS), 'recorridos')
