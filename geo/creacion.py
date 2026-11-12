# Uso: python3 geo/creacion.py  (desde la raíz del repositorio)
# Genera public/apps/creacion-y-origenes/creacion-geo.js: los lugares y el trazo que el recurso
# «La creación y los orígenes» necesita y que no están en imperios-geo.js (el Edén, Ararat y la
# tabla de las naciones de Génesis 10). Extiende IMPERIOS_GEO al cargarse, sin modificar la
# geografía compartida (DIRECTRICES §7, geografía propia por recurso). No usa Natural Earth.
# *** Ubicaciones APROXIMADAS: el Edén y varios pueblos de Génesis 10 son hipótesis. ***
import json, os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
LUGARES = {
    # id: [nombre, lat, lng, lado de la etiqueta]
    'r-eden-sur': ['Edén: hipótesis del sur', 30.45, 47.95, 'bottom'],
    'r-eden-norte': ['Edén: hipótesis del norte', 38.75, 42.6, 'top'],
    'eridu': ['Eridu', 30.816, 45.996, 'left'],
    'acad': ['Acad (aprox.)', 33.1, 44.1, 'left'],
    'monte-ararat': ['Monte Ararat', 39.702, 44.299, 'top'],
    'r-urartu': ['Ararat (Urartu)', 38.9, 43.2, 'left'],
    # Génesis 10
    'javan': ['Javán (Jonia)', 38.4, 27.3, 'left'],
    'quitim': ['Quitim (Chipre)', 35.05, 33.2, 'bottom'],
    'canaan': ['Canaán', 31.9, 34.95, 'left'],
    'het': ['Het (hititas)', 40.02, 34.62, 'bottom'],
    'seba': ['Seba (Sabá)', 15.43, 45.33],
    'lud': ['Lud (Lidia)', 38.6, 29.0, 'bottom'],
    'aram': ['Aram (Siria)', 34.9, 37.6],
}
TRAZOS = {
    # Camino aproximado de Taré y Abram, de Ur a Harán, remontando el Éufrates (Gn 11:31)
    'cr-tare': {'n': 'De Ur a Harán (Gn 11:31)', 'l': [
        [30.963, 46.103], [31.32, 45.64], [32.0, 45.0], [32.536, 44.421], [33.06, 44.25],
        [33.9, 42.4], [34.45, 41.0], [35.33, 40.15], [35.95, 39.03], [36.4, 38.95], [36.865, 39.031]]},
}
X = {'lugares': LUGARES, 'trazos': TRAZOS}
js = ('/* ==========================================================\n'
      '   creacion-geo.js — Geografía propia de «La creación y los orígenes»\n'
      '   Generado por geo/creacion.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y agrega sus lugares y trazos a IMPERIOS_GEO.\n'
      '   *** Ubicaciones APROXIMADAS: el Edén y varios pueblos de Génesis 10 son hipótesis. ***\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      f'  const X = {json.dumps(X, ensure_ascii=False)};\n'
      '  Object.keys(X.lugares).forEach(k => { if (!G.lugares[k]) G.lugares[k] = X.lugares[k]; });\n'
      '  Object.assign(G.trazos, X.trazos);\n})();\n')
open(os.path.join(R, 'public', 'apps', 'creacion-y-origenes', 'creacion-geo.js'), 'w', encoding='utf-8').write(js)
print('creacion-geo.js:', len(LUGARES), 'lugares,', len(TRAZOS), 'trazo')
