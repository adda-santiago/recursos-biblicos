# Uso: python3 geo/humano.py  (desde la raíz del repositorio)
# Genera public/apps/ser-humano-y-pecado/humano-geo.js: los lugares de la controversia sobre el pecado
# y la gracia (de Pelagio y Agustín a Arminio, Dort y Wesley) que usa el recurso «El ser humano y el
# pecado» (ruta V, estación 7). Todos son posteriores a la Biblia y llevan el prefijo h-, para que el
# atlas bíblico no los agregue (DIRECTRICES §7). Extiende IMPERIOS_GEO al cargarse, sin modificar la
# geografía compartida. No usa Natural Earth.
import json, os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
LUGARES = {
    # id: [nombre, lat, lng, lado de la etiqueta]
    'h-roma': ['Roma', 41.9, 12.5],
    'h-hipona': ['Hipona', 36.88, 7.75, 'left'],
    'h-cartago': ['Cartago (418)', 36.85, 10.32, 'right'],
    'h-dioospolis': ['Dióspolis (Lida, 415)', 31.95, 34.89, 'left'],
    'h-efeso': ['Éfeso (431)', 37.94, 27.34, 'left'],
    'h-orange': ['Orange (529)', 44.138, 4.809, 'left'],
    'h-wittenberg': ['Wittenberg', 51.87, 12.65],
    'h-ginebra': ['Ginebra', 46.2, 6.14, 'left'],
    'h-leiden': ['Leiden', 52.16, 4.49, 'left'],
    'h-dort': ['Dort (1618-1619)', 51.81, 4.67, 'bottom'],
    'h-londres': ['Londres', 51.507, -0.128, 'left'],
}
X = {'lugares': LUGARES, 'trazos': {}}
js = ('/* ==========================================================\n'
      '   humano-geo.js — Geografía propia de «El ser humano y el pecado»\n'
      '   Generado por geo/humano.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y agrega sus lugares a IMPERIOS_GEO.\n'
      '   Lugares posteriores a la Biblia (prefijo h-): el atlas bíblico no los agrega.\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      f'  const X = {json.dumps(X, ensure_ascii=False)};\n'
      '  Object.keys(X.lugares).forEach(k => { if (!G.lugares[k]) G.lugares[k] = X.lugares[k]; });\n'
      '  Object.assign(G.trazos, X.trazos);\n})();\n')
open(os.path.join(R, 'public', 'apps', 'ser-humano-y-pecado', 'humano-geo.js'), 'w', encoding='utf-8').write(js)
print('humano-geo.js:', len(LUGARES), 'lugares')
