"""Genera public/apps/mundo-judio/mundo-geo.js: la geografía propia de «El mundo judío en tiempos de Jesús».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js ni tierra-geo.js) lo que usa solo este recurso:
  · capas para el reino de Agripa I (41–44 d.C.) y la provincia de los procuradores (44–66), que reutilizan el
    contorno h-herodes de La tierra de Israel, y Galilea en la guerra (67);
  · lugares del siglo I que no están en la geografía compartida (Séforis, Herodión, Gamla, Jotapata, Yavne…);
  · los trazos de la guerra judía (Vespasiano en Galilea, el avance hacia Jerusalén, Tito y Masada).
Las divisiones políticas del tiempo de Jesús (nt-galilea, nt-judea, nt-felipe…) y los caminos de los
peregrinos (c-jordan, c-samaria) ya están en tierra-geo.js, que la página carga antes que este archivo.
Define además window.MUNDO_ROTULOS, con los nombres del Nuevo Testamento para mares y ríos.
No usa Natural Earth ni shapely.

*** Contornos y trazos APROXIMADOS e ILUSTRATIVOS. ***

Uso:  python geo/mundo_judio.py
Coordenadas [latitud, longitud].
"""
import json, os

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'mundo-judio', 'mundo-geo.js')

CAPAS = {
    'mj-agripa': {'n': 'Reino de Agripa I', 'periodo': '41–44 d.C.', 'color': '#8a5a44', 'polys': ['h-herodes'], 'rot': [32.1, 35.25]},
    'mj-provincia': {'n': 'Provincia de Judea', 'periodo': 'procuradores, 44–66 d.C.', 'color': '#9e2b25', 'polys': ['h-herodes'], 'rot': [31.8, 35.1]},
    'mj-galilea-67': {'n': 'Galilea', 'periodo': 'la guerra, 67 d.C.', 'color': '#2f8a8a', 'polys': ['nt-galilea'], 'rot': [32.88, 35.33]},
}

LUGARES = {
    'seforis': ['Séforis', 32.753, 35.279, 'left'],
    'herodion': ['Herodión', 31.666, 35.241, 'right'],
    'monte-gerizim': ['Monte Gerizim', 32.2, 35.27, 'right'],
    'gamla': ['Gamla', 32.903, 35.74, 'right'],
    'jotapata': ['Jotapata', 32.84, 35.274, 'left'],
    'yavne': ['Yavne (Jamnia)', 31.877, 34.739, 'left'],
    'antipatris': ['Antípatris', 32.105, 34.93, 'left'],
}

TRAZOS = {
    'mj-vespasiano-67': {'n': 'Vespasiano en Galilea (67 d.C.)',
                         'l': [[32.92, 35.08], [32.753, 35.279], [32.84, 35.274], [32.79, 35.535], [32.825, 35.515], [32.903, 35.74]]},
    'mj-vespasiano-68': {'n': 'Vespasiano rodea Jerusalén (68 d.C.)',
                         'l': [[32.5, 34.9], [32.105, 34.93], [31.95, 34.89], [31.84, 34.99], [31.87, 35.44]]},
    'mj-tito-70': {'n': 'Tito sitia Jerusalén (70 d.C.)',
                   'l': [[32.5, 34.9], [32.28, 35.2], [32.05, 35.29], [31.778, 35.235]]},
    'mj-silva-73': {'n': 'La caída de Masada (73 o 74 d.C.)',
                    'l': [[31.778, 35.235], [31.666, 35.241], [31.32, 35.35]]},
}

ROTULOS = [
    ['Mar Mediterráneo', 32.3, 34.25, 'mar'], ['Mar Muerto', 31.42, 35.47, 'mar'], ['Jordán', 32.25, 35.6, 'rio'],
    ['Mar de Galilea', 32.82, 35.66, 'mar'], ['Golfo de Áqaba', 28.9, 34.75, 'mar'], ['Mar Rojo', 27.8, 34.6, 'mar'],
    ['Nilo', 30.4, 31.0, 'rio'], ['Éufrates', 35.2, 39.9, 'rio'],
]

X = {'polys': {}, 'capas': CAPAS, 'lugares': LUGARES, 'trazos': TRAZOS}
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
with open(SALIDA, 'w', encoding='utf-8') as f:
    f.write('/* ==========================================================\n'
            '   mundo-geo.js — Geografía propia de «El mundo judío en tiempos de Jesús»\n'
            '   Generado por geo/mundo_judio.py: NO EDITAR A MANO, editar el script.\n'
            '   Se carga después de imperios-geo.js y de ../tierra-de-israel/tierra-geo.js.\n'
            '   *** Contornos y trazos APROXIMADOS e ILUSTRATIVOS. ***\n'
            '   ========================================================== */\n'
            '(() => {\n'
            '  const G = window.IMPERIOS_GEO;\n'
            '  if (!G) return;\n'
            f'  const X = {json.dumps(X, ensure_ascii=False, separators=(",", ":"))};\n'
            "  ['polys', 'capas', 'lugares', 'trazos'].forEach(k => Object.assign(G[k], X[k]));\n"
            f'  window.MUNDO_ROTULOS = {json.dumps(ROTULOS, ensure_ascii=False)};\n'
            '})();\n')
print('Escrito', SALIDA)
