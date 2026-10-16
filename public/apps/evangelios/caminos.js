/* ==========================================================
   Armonía de los evangelios · red de caminos de Palestina en el siglo I (aproximada)
   Sirve para trazar el recorrido de Jesús por caminos plausibles, no en línea recta.
   Nodos: [lat, lon]. Los que coinciden con imperios-geo.js usan la misma clave.
   Aristas: [nodoA, nodoB, [puntos intermedios…], tipo]  tipo: 'camino' | 'barca'
   Fuentes generales: trazado de las vías romanas y caminos antiguos (Via Maris, camino de la
   cresta por Samaria, valle del Jordán, subida de Jericó); aproximado.
   ========================================================== */
window.CAMINOS = {
  nodos: {
    // Galilea y el lago
    'capernaum': [32.881, 35.575], 'betsaida': [32.91, 35.63], 'corazin': [32.91, 35.56], 'magdala': [32.825, 35.515],
    'tiberias': [32.79, 35.535], 'senabris': [32.72, 35.57], 'cana': [32.75, 35.34], 'nazaret': [32.70, 35.30],
    'nain': [32.63, 35.35], 'arbel': [32.81, 35.47], 'seforis': [32.75, 35.28], 'mar-galilea': [32.84, 35.59],
    'kursi': [32.83, 35.65], 'hipos': [32.78, 35.66], 'gadara': [32.65, 35.68], 'decapolis': [32.55, 35.85],
    'r-galilea': [32.86, 35.42],
    // Norte
    'hula': [33.07, 35.61], 'cesarea-filipo': [33.25, 35.69], 'giscala': [33.02, 35.45], 'tiro-sidon': [33.27, 35.20],
    // Camino de la cresta (por Samaria)
    'jezreel': [32.58, 35.32], 'ginea': [32.46, 35.30], 'sicar': [32.21, 35.28], 'silo': [32.05, 35.29],
    'betel': [31.93, 35.22], 'efrain': [31.95, 35.30],
    // Valle del Jordán y Perea
    'escitopolis': [32.50, 35.50], 'enon': [32.37, 35.53], 'pela': [32.45, 35.61], 'adam': [32.10, 35.55],
    'perea': [31.95, 35.62], 'betabara': [31.84, 35.55], 'jerico': [31.87, 35.44],
    'desierto-judea': [31.80, 35.40], 'subida': [31.81, 35.33],
    // Jerusalén y alrededores
    'betania': [31.77, 35.26], 'monte-olivos': [31.778, 35.245], 'getsemani': [31.779, 35.24],
    'jerusalen': [31.778, 35.235], 'golgota': [31.778, 35.229], 'emaus': [31.84, 35.14], 'emaus-camino': [31.81, 35.18],
    'belen': [31.705, 35.20], 'maqueronte': [31.56, 35.62]
  },
  nombres: {
    'capernaum': 'Capernaum', 'betsaida': 'Betsaida', 'corazin': 'Corazín', 'magdala': 'Magdala', 'tiberias': 'Tiberias',
    'cana': 'Caná', 'nazaret': 'Nazaret', 'nain': 'Naín', 'kursi': 'Gadara (orilla)', 'gadara': 'Gadara', 'decapolis': 'Decápolis',
    'r-galilea': 'Galilea', 'cesarea-filipo': 'Cesarea de Filipo', 'tiro-sidon': 'Tiro y Sidón',
    'sicar': 'Sicar', 'efrain': 'Efraín', 'escitopolis': 'Escitópolis', 'enon': 'Enón', 'perea': 'Perea', 'betabara': 'Betábara',
    'jerico': 'Jericó', 'desierto-judea': 'Desierto', 'betania': 'Betania', 'monte-olivos': 'Monte de los Olivos',
    'getsemani': 'Getsemaní', 'jerusalen': 'Jerusalén', 'golgota': 'Gólgota', 'emaus': 'Emaús', 'belen': 'Belén'
  },
  aristas: [
    // Lago de Galilea (orilla oeste) y Galilea baja
    ['capernaum', 'magdala', [[32.86, 35.55]], 'camino'], ['magdala', 'tiberias', [], 'camino'], ['tiberias', 'senabris', [], 'camino'],
    ['capernaum', 'corazin', [], 'camino'], ['capernaum', 'betsaida', [[32.89, 35.61]], 'camino'],
    ['magdala', 'arbel', [], 'camino'], ['arbel', 'cana', [[32.78, 35.40]], 'camino'], ['cana', 'nazaret', [[32.72, 35.32]], 'camino'],
    ['cana', 'seforis', [], 'camino'], ['seforis', 'nazaret', [], 'camino'], ['nazaret', 'nain', [[32.66, 35.33]], 'camino'],
    ['arbel', 'r-galilea', [], 'camino'], ['r-galilea', 'cana', [], 'camino'],
    // Orilla este y Decápolis
    ['betsaida', 'kursi', [[32.87, 35.65]], 'camino'], ['kursi', 'hipos', [], 'camino'], ['hipos', 'gadara', [[32.71, 35.65]], 'camino'],
    ['gadara', 'decapolis', [[32.60, 35.76]], 'camino'], ['senabris', 'gadara', [[32.68, 35.60]], 'camino'],
    // Cruces en barca
    ['capernaum', 'kursi', [[32.86, 35.61]], 'barca'], ['magdala', 'kursi', [[32.83, 35.58]], 'barca'], ['capernaum', 'mar-galilea', [], 'barca'],
    ['mar-galilea', 'kursi', [], 'barca'], ['tiberias', 'hipos', [[32.79, 35.60]], 'barca'],
    // Norte: Cesarea de Filipo y Tiro
    ['betsaida', 'hula', [[32.98, 35.63]], 'camino'], ['hula', 'cesarea-filipo', [[33.15, 35.64]], 'camino'],
    ['corazin', 'giscala', [[32.96, 35.51]], 'camino'], ['giscala', 'tiro-sidon', [[33.13, 35.33]], 'camino'],
    // Camino de la cresta: Galilea – Samaria – Jerusalén
    ['nain', 'jezreel', [], 'camino'], ['nazaret', 'jezreel', [[32.64, 35.30]], 'camino'], ['jezreel', 'ginea', [], 'camino'],
    ['ginea', 'sicar', [[32.36, 35.27], [32.28, 35.24]], 'camino'], ['sicar', 'silo', [[32.13, 35.28]], 'camino'],
    ['silo', 'betel', [[31.99, 35.25]], 'camino'], ['betel', 'jerusalen', [[31.86, 35.22]], 'camino'],
    ['betel', 'efrain', [], 'camino'], ['efrain', 'jerico', [[31.92, 35.38]], 'camino'],
    // Valle del Jordán (lado oeste) y Perea (lado este)
    ['senabris', 'escitopolis', [[32.62, 35.56]], 'camino'], ['jezreel', 'escitopolis', [[32.55, 35.42]], 'camino'],
    ['escitopolis', 'enon', [], 'camino'], ['enon', 'adam', [[32.25, 35.53]], 'camino'], ['adam', 'jerico', [[31.98, 35.50]], 'camino'],
    ['escitopolis', 'pela', [], 'camino'], ['pela', 'perea', [[32.25, 35.62], [32.10, 35.62]], 'camino'], ['perea', 'betabara', [[31.88, 35.58]], 'camino'],
    ['adam', 'perea', [], 'camino'], ['betabara', 'jerico', [[31.85, 35.50]], 'camino'], ['sicar', 'adam', [[32.15, 35.42]], 'camino'],
    ['jerico', 'desierto-judea', [], 'camino'], ['betabara', 'desierto-judea', [[31.81, 35.47]], 'camino'],
    ['perea', 'maqueronte', [[31.75, 35.62]], 'camino'],
    // Subida de Jericó a Jerusalén
    ['jerico', 'subida', [[31.84, 35.39]], 'camino'], ['subida', 'betania', [[31.79, 35.29]], 'camino'],
    ['betania', 'monte-olivos', [], 'camino'], ['monte-olivos', 'getsemani', [], 'camino'], ['getsemani', 'jerusalen', [], 'camino'],
    ['jerusalen', 'golgota', [], 'camino'], ['jerusalen', 'emaus-camino', [[31.79, 35.21]], 'camino'], ['emaus-camino', 'emaus', [[31.83, 35.16]], 'camino'],
    ['jerusalen', 'belen', [[31.74, 35.21]], 'camino']
  ]
};
