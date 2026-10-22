# Uso: python3 geo/trinidad.py  (desde la raíz del repositorio)
# Genera public/apps/dios-y-la-trinidad/trinidad-geo.js: los lugares de los concilios que el recurso
# «Dios y la Trinidad» necesita y que no están en imperios-geo.js. Extiende IMPERIOS_GEO al cargarse,
# sin modificar la geografía compartida (DIRECTRICES §7, geografía propia por recurso).
import json, os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
LUGARES = {
    # id: [nombre, lat, lng, lado de la etiqueta]
    'nicea': ['Nicea', 40.43, 29.72, 'bottom'],
    'nicomedia': ['Nicomedia', 40.77, 29.92, 'right'],
    'cesarea-capadocia': ['Cesarea de Capadocia', 38.72, 35.49, 'right'],
}
js = ('/* Generado por geo/trinidad.py: no editar a mano.\n'
      '   Lugares propios de Dios y la Trinidad que se agregan a IMPERIOS_GEO (imperios-geo.js). */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      f'  const L = {json.dumps(LUGARES, ensure_ascii=False)};\n'
      '  Object.keys(L).forEach(k => { if (!G.lugares[k]) G.lugares[k] = L[k]; });\n})();\n')
open(os.path.join(R, 'public', 'apps', 'dios-y-la-trinidad', 'trinidad-geo.js'), 'w', encoding='utf-8').write(js)
print('trinidad-geo.js:', len(LUGARES), 'lugares')
