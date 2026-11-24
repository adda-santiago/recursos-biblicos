# Uso: python3 geo/exodo.py  (desde la raíz del repositorio)
# Genera public/apps/exodo-desierto/exodo-geo.js: los lugares, rótulos y recorridos que el recurso
# «El Éxodo y el desierto» necesita y que no están en imperios-geo.js ni en tierra-de-israel/tierra-geo.js
# (la página carga los dos antes que este). Extiende IMPERIOS_GEO al cargarse, sin modificar la
# geografía compartida (DIRECTRICES §7, geografía propia por recurso). No usa Natural Earth.
# *** Ubicaciones y trazados APROXIMADOS. Casi ninguna etapa del Éxodo está identificada con
# certeza: los lugares con prefijo r- son propuestas (Mara, Elim, Refidim, Hazerot, el monte Hor…)
# y el atlas no los agrega como sitios. Los lugares del cruce del mar y del monte Sinaí se dibujan
# según tres o cuatro hipótesis, y el recurso no fija la del cruce (decisión del responsable). ***
import json, os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
LUGARES = {
    # id: [nombre, lat, lng, lado de la etiqueta]
    # Egipto
    'ramses': ['Ramesés (Avaris)', 30.79, 31.83, 'top'],
    'r-sucot-egipto': ['Sucot (aprox.)', 30.53, 32.0, 'bottom'],
    'r-etam': ['Etam (aprox.)', 30.47, 32.33, 'right'],
    'r-sile': ['Silé, fortaleza de la frontera', 30.94, 32.36, 'top'],
    # El cruce del mar, según tres hipótesis
    'r-cruce-lagos': ['Cruce: lagos Amargos (hipótesis)', 30.35, 32.4, 'right'],
    'mar-rojo': ['Cruce: golfo de Suez (hipótesis)', 29.95, 32.56, 'left'],
    'r-cruce-aqaba': ['Cruce: Nuweiba, golfo de Áqaba (hipótesis)', 28.98, 34.66, 'left'],
    'r-sirbonis': ['Lago Sirbonis (hipótesis del norte)', 31.13, 33.15, 'top'],
    # Ruta del sur (tradicional)
    'r-mara': ['Mara (aprox.)', 29.43, 32.88, 'right'],
    'r-elim': ['Elim (aprox.)', 29.3, 33.0, 'right'],
    'r-desierto-sin': ['Desierto de Sin', 28.85, 33.28, 'left'],
    'r-dofca': ['Dofca (aprox.)', 29.03, 33.46, 'right'],
    'r-refidim': ['Refidim (aprox.)', 28.7, 33.65, 'left'],
    'r-hazerot': ['Hazerot (aprox.)', 28.88, 34.42, 'right'],
    # El monte Sinaí, según cuatro propuestas ('sinai' es la tradicional, en imperios-geo.js)
    'r-sinai-lawz': ['Jabal al-Lawz (hipótesis)', 28.65, 35.3, 'right'],
    'r-sinai-karkom': ['Har Karkom (hipótesis)', 30.29, 34.73, 'right'],
    'r-sinai-hilal': ['Jebel Hilal (hipótesis)', 30.68, 33.95, 'left'],
    'r-madian': ['Madián', 28.49, 34.99, 'right'],
    # Neguev, Arabá y Transjordania
    'r-horma': ['Horma (aprox.)', 31.21, 34.97, 'left'],
    'r-escol': ['Valle de Escol (Hebrón)', 31.55, 35.08, 'left'],
    'r-rehob': ['Rehob, entrada de Hamat (aprox.)', 33.27, 35.62, 'right'],
    'r-monte-hor': ['Monte Hor (aprox.)', 30.32, 35.41, 'right'],
    'r-punon': ['Punón (aprox.)', 30.62, 35.49, 'right'],
    'r-zered': ['Arroyo de Zered', 30.98, 35.62, 'right'],
    'r-arnon': ['Arroyo de Arnón', 31.45, 35.62, 'right'],
    'r-jahaz': ['Jahaza (aprox.)', 31.56, 35.92, 'right'],
    'r-sitim': ['Sitim (aprox.)', 31.84, 35.66, 'top'],
    'r-llanuras-moab': ['Llanuras de Moab', 31.8, 35.56, 'left'],
    'alepo': ['Alepo', 36.2, 37.16, 'top'],
    'r-petor': ['Petor, tierra de Balaam (aprox.)', 36.65, 38.08, 'right'],
}
ROTULOS = [
    ['Mar Grande', 32.0, 32.9, 'mar'], ['Mar Salado', 31.42, 35.47, 'mar'], ['Jordán', 32.25, 35.6, 'rio'], ['Nilo', 29.4, 31.1, 'rio'],
    ['Golfo de Suez', 28.95, 32.85, 'mar'], ['Golfo de Áqaba', 28.75, 34.72, 'mar'], ['Mar Rojo', 27.2, 34.4, 'mar'],
    ['Lagos Amargos', 30.2, 32.62, 'mar'],
    ['Egipto', 28.6, 30.9, 'region'], ['Gosén', 30.7, 31.55, 'region'], ['Desierto de Shur', 30.62, 33.3, 'region'],
    ['Desierto de Parán', 29.95, 34.25, 'region'], ['Desierto de Zin', 30.65, 34.95, 'region'], ['Sinaí', 28.3, 33.7, 'region'],
    ['Madián', 28.1, 35.5, 'region'], ['Neguev', 31.05, 34.7, 'region'], ['Canaán', 32.1, 35.05, 'region'],
    ['Basán', 32.75, 36.1, 'region'], ['Arabá', 30.05, 35.15, 'region'], ['Arabia', 28.0, 37.2, 'region'],
]
# Coordenadas para trazar los caminos
RAMSES = [30.79, 31.83]; SUCOT = [30.53, 32.0]; ETAM = [30.47, 32.33]; MENFIS = [29.85, 31.25]
LAGOS = [30.35, 32.4]; LAGOS_E = [30.33, 32.47]; SUEZ = [29.95, 32.56]; SUEZ_E = [29.93, 32.64]
NUWEIBA = [28.98, 34.66]; ARABIA_E = [28.9, 34.86]
MARA = [29.43, 32.88]; ELIM = [29.3, 33.0]; SIN = [28.85, 33.28]; DOFCA = [29.03, 33.46]
REFIDIM = [28.7, 33.65]; SINAI = [28.54, 33.97]; HAZEROT = [28.88, 34.42]; CADES = [30.69, 34.42]
LAWZ = [28.65, 35.3]; KARKOM = [30.29, 34.73]; HILAL = [30.68, 33.95]; MADIAN = [28.49, 34.99]
EZION = [29.53, 34.99]; HOR = [30.32, 35.41]; HEBRON = [31.5326, 35.0998]; BEERSEBA = [31.2589, 34.7913]
SIQUEM = [32.2137, 35.2797]; DAN = [33.2489, 35.6519]; REHOB = [33.27, 35.62]; HORMA = [31.21, 34.97]
DIBON = [31.5, 35.78]; HESBON = [31.8, 35.81]; JAHAZ = [31.56, 35.92]; EDREI = [32.62, 36.1]
SITIM = [31.84, 35.66]; NEBO = [31.7667, 35.7269]; LLANURAS = [31.8, 35.56]
SALIDA = [RAMSES, [30.65, 31.92], SUCOT, ETAM]
TRAZOS = {
    'ex-moises-madian': {'n': 'Moisés huye a Madián (Éx 2:15)', 'l': [RAMSES, [30.75, 32.3], [30.6, 32.9], [30.25, 33.4], [29.95, 33.8], [29.75, 34.4], [29.55, 34.95], [29.2, 34.92], MADIAN]},
    'ex-moises-vuelta': {'n': 'Moisés vuelve a Egipto (Éx 4:18-20, 27)', 'l': [MADIAN, [29.2, 34.92], [29.55, 34.95], [29.75, 34.4], [29.95, 33.8], [30.25, 33.4], [30.6, 32.9], [30.75, 32.3], RAMSES]},
    'ex-salida': {'n': 'De Ramesés a Sucot y Etam (Éx 12:37; 13:20)', 'l': SALIDA},
    'ex-camino-filisteos': {'n': 'El camino de la tierra de los filisteos, que Dios no tomó (Éx 13:17)', 'l': [RAMSES, [30.94, 32.36], [31.1, 32.75], [31.15, 33.3], [31.13, 33.8], [31.3, 34.2], [31.5, 34.46]]},
    'ex-cruce-lagos': {'n': 'Hipótesis de los lagos Amargos (Éx 14)', 'l': [ETAM, [30.42, 32.36], LAGOS, LAGOS_E]},
    'ex-cruce-suez': {'n': 'Hipótesis del golfo de Suez (Éx 14)', 'l': [ETAM, [30.3, 32.36], [30.1, 32.42], SUEZ, SUEZ_E]},
    'ex-cruce-aqaba': {'n': 'Hipótesis del golfo de Áqaba (Éx 14)', 'l': [ETAM, [30.4, 32.9], [30.2, 33.4], [29.95, 33.8], [29.6, 34.2], [29.2, 34.45], [29.05, 34.6], NUWEIBA, ARABIA_E]},
    'ex-cruce-norte': {'n': 'Hipótesis del norte, junto al lago Sirbonis (Éx 14)', 'l': [RAMSES, [30.94, 32.36], [31.05, 32.7], [31.13, 33.0], [31.13, 33.15], [31.1, 33.3]]},
    'ex-lagos-suez': {'n': 'De los lagos Amargos al desierto de Shur (Éx 15:22)', 'l': [LAGOS_E, [30.15, 32.6], SUEZ_E]},
    'ex-sur-sinai': {'n': 'Ruta del sur: Mara, Elim, Sin y Refidim (Éx 15:22–19:2)', 'l': [SUEZ_E, [29.7, 32.75], MARA, ELIM, [29.12, 33.08], SIN, DOFCA, [28.85, 33.55], REFIDIM, [28.6, 33.8], SINAI]},
    'ex-arabia-lawz': {'n': 'Ruta por Arabia hasta Jabal al-Lawz', 'l': [ARABIA_E, [28.8, 35.05], [28.7, 35.18], LAWZ]},
    'ex-ruta-karkom': {'n': 'Ruta central hasta Har Karkom', 'l': [LAGOS_E, [30.4, 32.9], [30.45, 33.5], [30.38, 34.1], KARKOM]},
    'ex-ruta-hilal': {'n': 'Ruta del norte hasta Jebel Hilal', 'l': [[31.1, 33.3], [30.95, 33.5], [30.8, 33.75], HILAL]},
    'ex-sinai-cades': {'n': 'Del Sinaí a Cades-barnea por Hazerot (Nm 10:11–12:16; Dt 1:2, 19)', 'l': [SINAI, [28.7, 34.2], HAZEROT, [29.2, 34.62], [29.6, 34.7], [30.0, 34.6], [30.4, 34.5], CADES]},
    'ex-espias': {'n': 'Los doce espías: de Cades a Rehob y de vuelta (Nm 13:21-26)', 'l': [CADES, [30.95, 34.65], BEERSEBA, HEBRON, [31.9, 35.22], SIQUEM, [32.6, 35.45], [33.0, 35.6], REHOB, [33.0, 35.6], [32.6, 35.45], SIQUEM, [31.9, 35.22], [31.55, 35.08], HEBRON, BEERSEBA, [30.95, 34.65], CADES]},
    'ex-horma': {'n': 'El ataque sin Dios y la derrota hasta Horma (Nm 14:40-45)', 'l': [CADES, [30.95, 34.75], HORMA]},
    'ex-38-anos': {'n': 'Los años en torno a Cades: hasta Ezión-geber y de vuelta (Nm 33:30-36; Dt 2:1)', 'l': [CADES, [30.3, 34.75], [29.95, 34.9], EZION, [29.95, 35.08], [30.35, 34.95], CADES]},
    'ex-cades-hor': {'n': 'De Cades al monte Hor (Nm 20:22)', 'l': [CADES, [30.55, 34.85], [30.4, 35.2], HOR]},
    'ex-rodeo-edom': {'n': 'Rodeando Edom por el camino del mar Rojo (Nm 21:4; Dt 2:8)', 'l': [HOR, [30.0, 35.2], [29.75, 35.05], EZION, [29.75, 35.3], [30.05, 35.75], [30.45, 35.98], [30.95, 36.0], [31.35, 36.0], [31.45, 35.95]]},
    'ex-moab': {'n': 'Del Arnón a Hesbón y a las llanuras de Moab (Nm 21:13–22:1)', 'l': [[31.45, 35.95], DIBON, JAHAZ, HESBON, NEBO, SITIM, LLANURAS]},
    'ex-og': {'n': 'La campaña contra Og, rey de Basán (Nm 21:33-35)', 'l': [HESBON, [32.05, 35.95], [32.35, 36.05], EDREI]},
    'ex-balaam': {'n': 'Balaam viene de Petor, junto al Éufrates (Nm 22:5; Dt 23:4)', 'l': [[36.65, 38.08], [36.2, 37.16], [35.13, 36.75], [34.4, 36.5], [33.51, 36.29], [32.62, 36.1], [32.0, 35.95], [31.56, 35.92]]},
}
X = {'lugares': LUGARES, 'trazos': TRAZOS}
js = ('/* ==========================================================\n'
      '   exodo-geo.js — Geografía propia de «El Éxodo y el desierto»\n'
      '   Generado por geo/exodo.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y tierra-de-israel/tierra-geo.js, y agrega sus lugares\n'
      '   y recorridos a IMPERIOS_GEO. Define además EXODO_ROTULOS para los mapas del recurso.\n'
      '   *** Ubicaciones y caminos APROXIMADOS; los lugares con prefijo r- son propuestas o hipótesis. ***\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      f'  const X = {json.dumps(X, ensure_ascii=False)};\n'
      '  Object.keys(X.lugares).forEach(k => { if (!G.lugares[k]) G.lugares[k] = X.lugares[k]; });\n'
      '  Object.assign(G.trazos, X.trazos);\n'
      f'  window.EXODO_ROTULOS = {json.dumps(ROTULOS, ensure_ascii=False)};\n'
      '})();\n')
dest = os.path.join(R, 'public', 'apps', 'exodo-desierto')
os.makedirs(dest, exist_ok=True)
open(os.path.join(dest, 'exodo-geo.js'), 'w', encoding='utf-8').write(js)
print('exodo-geo.js:', len(LUGARES), 'lugares,', len(TRAZOS), 'recorridos')
