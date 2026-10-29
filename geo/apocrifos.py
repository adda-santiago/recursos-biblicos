"""Genera public/apps/libros-apocrifos/apocrifos-geo.js: la geografía propia de
«Los libros apócrifos y pseudoepígrafos».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js) los lugares y trazos que usa solo
este recurso, sobre el mapa base del mundo bíblico (mapa-base.js). No usa polígonos, así que no
necesita los datos de Natural Earth.
Los lugares posteriores a la Biblia llevan el prefijo h- (el atlas bíblico no los agrega:
herramientas/atlas_recursos.mjs). Los ids que ya usa historia-iglesia-2/historia-geo.js conservan
el mismo id y las mismas coordenadas.

*** Los trazos son APROXIMADOS e ILUSTRATIVOS: unen ciudades, no reproducen rutas de viaje. ***

Uso:  python geo/apocrifos.py
Coordenadas [latitud, longitud].
"""
import json, os

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'libros-apocrifos', 'apocrifos-geo.js')

lugares = {
    # Lugares antiguos (el atlas los agrega como puntos grises)
    'qumran': ['Qumrán', 31.741, 35.459, 'right'],
    'ragues': ['Ragues (Media)', 35.59, 51.44],
    # Después de la Biblia (h-)
    'h-hipona': ['Hipona (393)', 36.88, 7.75, 'left'],
    'h-wittenberg': ['Wittenberg', 51.866, 12.649],
    'h-trento': ['Trento (1546)', 46.07, 11.12],
    'h-basilea': ['Basilea (1569)', 47.56, 7.59, 'left'],
    'h-amsterdam': ['Ámsterdam (1602)', 52.37, 4.9, 'left'],
    'h-el-cairo': ['El Cairo (genizá)', 30.006, 31.231, 'left'],
    'h-aksum': ['Aksum (Etiopía)', 14.13, 38.72],
    # Hallazgos de apócrifos del Nuevo Testamento en Egipto
    'h-nag-hammadi': ['Nag Hammadi (1945)', 26.05, 32.24],
    'h-oxirrinco': ['Oxirrinco', 28.53, 30.66, 'left'],
    'h-akhmim': ['Ajmim', 26.56, 31.75, 'left'],
    'h-lyon': ['Lyon', 45.76, 4.84],
}

trazos = {
    # El viaje de Tobías (Tobías 5–11), de Nínive a Ecbatana y Ragues, ida y vuelta
    'apo-tobias': {'n': 'El viaje de Tobías (según el relato)', 'l': [[36.36, 43.15], [35.4, 45.5], [34.8, 48.52], [35.2, 50.3], [35.59, 51.44]]},
}

datos = {'lugares': lugares, 'trazos': trazos}
js = """/* ==========================================================
   apocrifos-geo.js — Geografía propia de «Los libros apócrifos y pseudoepígrafos»
   Generado por geo/apocrifos.py: NO EDITAR A MANO, editar el script.
   Se carga después de imperios-geo.js y agrega sus lugares y trazos a IMPERIOS_GEO.
   Los lugares posteriores a la Biblia llevan el prefijo h- (el atlas bíblico no los agrega).
   *** Trazos APROXIMADOS e ILUSTRATIVOS. ***
   ========================================================== */
(() => {
  const G = window.IMPERIOS_GEO;
  if (!G) return;
  const X = %s;
  Object.assign(G.lugares, X.lugares);
  Object.assign(G.trazos, X.trazos);
})();
""" % json.dumps(datos, ensure_ascii=False, separators=(',', ':'))
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
open(SALIDA, 'w', encoding='utf-8').write(js)
print('apocrifos-geo.js:', len(js), 'caracteres')
