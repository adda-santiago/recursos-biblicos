"""Genera public/apps/introduccion-nuevo-testamento/nt-geo.js: la geografía propia de
«Introducción al Nuevo Testamento: panorama de los 27 libros».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js) los trazos que unen el lugar donde
se escribió cada carta con su destino. Usa los lugares de imperios-geo.js; no agrega lugares ni
polígonos, así que no necesita los datos de Natural Earth.

*** Los trazos son APROXIMADOS e ILUSTRATIVOS: muestran de dónde a dónde viajó una carta,
    no la ruta exacta del mensajero. El lugar de origen de algunas cartas se discute. ***

Uso:  python geo/introduccion_nt.py
Coordenadas [latitud, longitud].
"""
import json, os

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'introduccion-nuevo-testamento', 'nt-geo.js')

# Lugares de imperios-geo.js (mismas coordenadas)
P = {
    'roma': [41.9, 12.5], 'corinto': [37.906, 22.88], 'cencrea': [37.88, 22.99], 'efeso': [37.94, 27.34],
    'filipos': [41.01, 24.29], 'tesalonica': [40.64, 22.94], 'colosas': [37.79, 29.26], 'antioquia': [36.2, 36.16],
    'antioquia-pisidia': [38.31, 31.19], 'iconio': [37.87, 32.48], 'listra': [37.58, 32.45], 'derbe': [37.35, 33.36],
    'patmos': [37.31, 26.55], 'creta': [35.3, 24.9], 'troas': [39.75, 26.16], 'ponto': [40.7, 37.0],
    'galacia': [39.3, 32.8], 'capadocia': [38.6, 35.4], 'asia': [38.7, 28.2], 'bitinia': [40.7, 30.5],
}
BRINDIS = [40.63, 17.94]
# Rutas marítimas aproximadas
ROMA_EGEO = [P['roma'], [41.1, 15.8], BRINDIS, [39.4, 20.0], [37.6, 21.0], [36.35, 23.2], [37.3, 25.2]]
CORINTO_ROMA = [P['corinto'], [38.25, 22.1], [38.35, 20.9], [39.6, 19.4], BRINDIS, [41.1, 15.8], P['roma']]

trazos = {
    'nt-galatas': {'n': 'Gálatas: de Antioquía a las iglesias de Galacia',
                   'l': [P['antioquia'], [36.9, 34.9], P['derbe'], P['listra'], P['iconio'], P['antioquia-pisidia']]},
    'nt-tesalonicenses': {'n': '1 y 2 Tesalonicenses: de Corinto a Tesalónica',
                          'l': [P['corinto'], P['cencrea'], [38.3, 24.0], [39.4, 23.6], P['tesalonica']]},
    'nt-1corintios': {'n': '1 Corintios: de Éfeso a Corinto',
                      'l': [P['efeso'], [37.7, 25.8], [37.6, 24.2], P['cencrea'], P['corinto']]},
    'nt-2corintios': {'n': '2 Corintios: de Macedonia a Corinto',
                      'l': [P['filipos'], P['tesalonica'], [39.4, 23.6], [38.3, 24.0], P['cencrea'], P['corinto']]},
    'nt-romanos': {'n': 'Romanos: de Corinto a Roma', 'l': CORINTO_ROMA},
    'nt-efesios': {'n': 'Efesios: de Roma a Éfeso', 'l': ROMA_EGEO + [P['efeso']]},
    'nt-colosenses': {'n': 'Colosenses y Filemón: de Roma a Colosas', 'l': ROMA_EGEO + [P['efeso'], [37.9, 28.3], P['colosas']]},
    'nt-filipenses': {'n': 'Filipenses: de Roma a Filipos',
                      'l': [P['roma'], [41.1, 15.8], BRINDIS, [41.3, 19.45], [41.0, 21.0], P['tesalonica'], P['filipos']]},
    'nt-1timoteo': {'n': '1 Timoteo: de Macedonia a Éfeso', 'l': [P['filipos'], [40.6, 25.4], P['troas'], [38.9, 26.6], P['efeso']]},
    'nt-tito': {'n': 'Tito: de Macedonia a Creta', 'l': [P['filipos'], P['tesalonica'], [39.4, 23.6], [37.6, 24.6], [35.9, 25.0], P['creta']]},
    'nt-2timoteo': {'n': '2 Timoteo: de Roma a Éfeso', 'l': ROMA_EGEO + [P['efeso']]},
    'nt-1pedro': {'n': '1 Pedro: de Roma («Babilonia») a Asia Menor',
                  'l': ROMA_EGEO + [[39.0, 25.9], [40.2, 26.3], [40.9, 28.5], [41.25, 29.1], [41.7, 32.0], [41.6, 35.0], P['ponto']]},
    'nt-1pedro-circuito': {'n': 'El recorrido de 1 Pedro 1:1', 'l': [P['ponto'], P['galacia'], P['capadocia'], P['asia'], P['bitinia']]},
    'nt-apocalipsis': {'n': 'Apocalipsis: de Patmos a Éfeso', 'l': [P['patmos'], [37.6, 26.9], P['efeso']]},
}
for t in trazos.values():
    t['l'] = [[round(a, 2), round(b, 2)] for a, b in t['l']]

js = ('/* ==========================================================\n'
      '   nt-geo.js — Geografía propia de «Introducción al Nuevo Testamento»\n'
      '   Generado por geo/introduccion_nt.py: NO EDITAR A MANO, editar el script.\n'
      '   Se carga después de imperios-geo.js y agrega sus trazos a IMPERIOS_GEO.\n'
      '   *** Trazos APROXIMADOS e ILUSTRATIVOS. ***\n'
      '   ========================================================== */\n'
      '(() => {\n  const G = window.IMPERIOS_GEO;\n  if (!G) return;\n'
      '  const X = ' + json.dumps({'trazos': trazos}, ensure_ascii=False, separators=(',', ':')) + ';\n'
      '  Object.assign(G.trazos, X.trazos);\n'
      '})();\n')
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
open(SALIDA, 'w', encoding='utf-8').write(js)
print('nt-geo.js:', len(js) // 1024, 'KB ·', len(trazos), 'trazos')
