# Uso: python3 geo/cristo.py  (desde la raíz del repositorio)
# Genera public/apps/persona-y-obra-de-cristo/cristo-geo.js: los lugares de las controversias cristológicas
# que el recurso «La persona y obra de Cristo» necesita y que no están en imperios-geo.js ni en
# dios-y-la-trinidad/trinidad-geo.js (que la página también carga, por Nicea). Extiende IMPERIOS_GEO al
# cargarse, sin modificar la geografía compartida (DIRECTRICES §7). Prefijo h-: lugares posteriores a la Biblia.
import json, os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
LUGARES = {
    # id: [nombre, lat, lng, lado de la etiqueta]
    'h-calcedonia': ['Calcedonia', 40.98, 29.03, 'bottom'],
    'h-laodicea-siria': ['Laodicea de Siria', 35.52, 35.78, 'left'],
}
js = ('/* Generado por geo/cristo.py: no editar a mano.\n'
      '   Lugares propios de La persona y obra de Cristo que se agregan a IMPERIOS_GEO (imperios-geo.js). */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      f'  const L = {json.dumps(LUGARES, ensure_ascii=False)};\n'
      '  Object.keys(L).forEach(k => { if (!G.lugares[k]) G.lugares[k] = L[k]; });\n})();\n')
open(os.path.join(R, 'public', 'apps', 'persona-y-obra-de-cristo', 'cristo-geo.js'), 'w', encoding='utf-8').write(js)
print('cristo-geo.js:', len(LUGARES), 'lugares')
