"""Genera public/apps/dinastia-herodes/herodes-geo.js: la geografía propia de «La dinastía de Herodes».

Agrega a window.IMPERIOS_GEO (sin modificar imperios-geo.js, tierra-geo.js, entre-geo.js ni mundo-geo.js)
lo que usa solo este recurso:
  · capas del reino de Herodes en tres etapas (37, 30 y 20 a.C.), del reparto del 4 a.C. (Arquelao, Antipas
    y Felipe) y de los reinos de Agripa I (37 y 40 d.C.) y Agripa II, que reutilizan los contornos de las
    divisiones del tiempo de Jesús de La tierra de Israel (nt-galilea, nt-judea, nt-felipe…);
  · unos pocos lugares que no están en las geografías cargadas (Abilinia, Calcis y Lugdunum, con prefijo h-
    porque no aparece en la Biblia);
  · los trazos de la huida de Herodes a Roma (40 a.C.), su regreso (39 a.C.) y el destierro de Antipas (39 d.C.).
La página carga antes tierra-geo.js, entre-geo.js y mundo-geo.js (Herodión, Maresa, Accio, Séforis,
el reino de Agripa I) y usa los rótulos de mundo-geo.js (window.MUNDO_ROTULOS).
No usa Natural Earth ni shapely.

*** Contornos y trazos APROXIMADOS e ILUSTRATIVOS. ***

Uso:  python geo/herodes.py
Coordenadas [latitud, longitud].
"""
import json, os

AQUI = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(AQUI, '..', 'public', 'apps', 'dinastia-herodes', 'herodes-geo.js')

HERODES = '#8a5a44'
CAPAS = {
    # El reino de Herodes el Grande crece en tres etapas
    'hd-herodes-37': {'n': 'Reino de Herodes', 'periodo': '37 a.C.', 'color': HERODES,
                      'polys': ['nt-judea', 'nt-idumea', 'nt-galilea', 'nt-perea'], 'rot': [31.75, 35.15]},
    'hd-herodes-30': {'n': 'Reino de Herodes', 'periodo': '30 a.C., con Samaria y la costa', 'color': HERODES,
                      'polys': ['nt-judea', 'nt-idumea', 'nt-samaria', 'nt-galilea', 'nt-perea'], 'rot': [31.9, 35.15]},
    'hd-herodes-20': {'n': 'Reino de Herodes', 'periodo': '20–4 a.C.', 'color': HERODES, 'polys': ['h-herodes'], 'rot': [31.9, 35.15]},
    # El reparto del 4 a.C.
    'hd-arquelao': {'n': 'Arquelao, etnarca', 'periodo': '4 a.C.–6 d.C.', 'color': '#9e2b25',
                    'polys': ['nt-judea', 'nt-samaria', 'nt-idumea'], 'rot': [31.85, 35.05]},
    'hd-antipas': {'n': 'Antipas, tetrarca', 'periodo': '4 a.C.–39 d.C.', 'color': '#2f8a8a',
                   'polys': ['nt-galilea', 'nt-perea'], 'rot': [33.02, 35.42]},
    'hd-felipe': {'n': 'Felipe, tetrarca', 'periodo': '4 a.C.–34 d.C.', 'color': '#c08a1e', 'polys': ['nt-felipe'], 'rot': [32.95, 36.2]},
    'hd-provincia': {'n': 'Judea, provincia romana', 'periodo': 'prefectos, 6–41 d.C.', 'color': '#6b5a7a',
                     'polys': ['nt-judea', 'nt-samaria', 'nt-idumea'], 'rot': [31.85, 35.05]},
    # Los reinos de los Agripas
    'hd-agripa1-37': {'n': 'Reino de Agripa I', 'periodo': '37 d.C.', 'color': '#4a6b7c', 'polys': ['nt-felipe'], 'rot': [32.95, 36.2]},
    'hd-agripa1-40': {'n': 'Reino de Agripa I', 'periodo': '40 d.C.', 'color': '#4a6b7c',
                      'polys': ['nt-felipe', 'nt-galilea', 'nt-perea'], 'rot': [32.8, 35.6]},
    'hd-agripa2': {'n': 'Reino de Agripa II', 'periodo': 'desde 53 d.C. (aprox.)', 'color': '#7a3fa0', 'polys': ['nt-felipe'], 'rot': [32.95, 36.2]},
}

LUGARES = {
    'abilinia': ['Abilinia (Abila)', 33.69, 36.09, 'right'],
    'calcis': ['Calcis', 33.73, 35.93, 'left'],
    'h-lugdunum': ['Lugdunum (Lyon)', 45.76, 4.83, 'right'],
}

TRAZOS = {
    'hd-huida-40': {'n': 'Herodes huye a Roma (40 a.C.)',
                    'l': [[31.778, 35.235], [31.315, 35.354], [30.33, 35.44], [31.13, 33.8], [31.04, 32.55], [31.2, 29.9],
                          [36.43, 28.22], [37.6, 22.5], [40.63, 17.94], [41.9, 12.5]]},
    'hd-regreso-39': {'n': 'Herodes vuelve como rey (39 a.C.)',
                      'l': [[41.9, 12.5], [40.63, 17.94], [37.2, 21.5], [35.0, 28.0], [33.6, 33.0], [32.92, 35.08]]},
    'hd-antipas-39': {'n': 'Antipas, al destierro (39 d.C.)',
                      'l': [[32.79, 35.535], [32.5, 34.9], [33.6, 31.0], [35.2, 24.0], [37.6, 16.5], [40.82, 14.12], [41.9, 12.5],
                            [43.8, 10.3], [44.2, 7.3], [45.76, 4.83]]},
}

X = {'polys': {}, 'capas': CAPAS, 'lugares': LUGARES, 'trazos': TRAZOS}
os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
with open(SALIDA, 'w', encoding='utf-8') as f:
    f.write('/* ==========================================================\n'
            '   herodes-geo.js — Geografía propia de «La dinastía de Herodes»\n'
            '   Generado por geo/herodes.py: NO EDITAR A MANO, editar el script.\n'
            '   Se carga después de imperios-geo.js, ../tierra-de-israel/tierra-geo.js,\n'
            '   ../entre-los-testamentos/entre-geo.js y ../mundo-judio/mundo-geo.js.\n'
            '   *** Contornos y trazos APROXIMADOS e ILUSTRATIVOS. ***\n'
            '   ========================================================== */\n'
            '(() => {\n'
            '  const G = window.IMPERIOS_GEO;\n'
            '  if (!G) return;\n'
            f'  const X = {json.dumps(X, ensure_ascii=False, separators=(",", ":"))};\n'
            "  ['polys', 'capas', 'lugares', 'trazos'].forEach(k => Object.assign(G[k], X[k]));\n"
            '})();\n')
print('Escrito', SALIDA)
