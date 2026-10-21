/* ==========================================================
   Recursos Bíblicos — unidades de la calculadora de medidas bíblicas
   Valores aproximados; coinciden con las rutas (herramientas/medidas/parte*.js)
   y los esquemas (herramientas/esquemas_medidas.py). Si se corrige uno, se corrigen todos.
   base: valor en la unidad base de la categoría (cm, litros, gramos, denarios).
   ========================================================== */
window.UNIDADES = {
  longitud: {
    n: 'Longitud y distancia', base: 'cm',
    nota: 'Codo común de 44,5 cm. Con el codo largo de Ezequiel (52 cm), las medidas basadas en el codo crecen en la misma proporción.',
    unidades: [
      { id: 'dedo', n: 'Dedo', base: 44.5 / 24, codo: true, ref: 'Jer 52:21' },
      { id: 'palmo-menor', n: 'Palmo menor', base: 44.5 / 6, codo: true, ref: '1 R 7:26' },
      { id: 'palmo', n: 'Palmo', base: 44.5 / 2, codo: true, ref: '1 S 17:4' },
      { id: 'codo', n: 'Codo', base: 44.5, codo: true, ref: 'Gn 6:15' },
      { id: 'cana', n: 'Caña de Ezequiel (6 codos largos)', base: 6 * 51.9, ref: 'Ez 40:5' },
      { id: 'braza', n: 'Braza', base: 185, ref: 'Hch 27:28' },
      { id: 'estadio', n: 'Estadio', base: 18500, ref: 'Lc 24:13' },
      { id: 'milla', n: 'Milla romana', base: 148000, ref: 'Mt 5:41' },
      { id: 'sabado', n: 'Camino de un día de reposo (2.000 codos)', base: 2000 * 44.5, codo: true, ref: 'Hch 1:12' },
      { id: 'dia', n: 'Camino de un día (aprox.)', base: 3000000, ref: 'Lc 2:44' }
    ],
    salida: [['km', 100000, 'kilómetros'], ['m', 100, 'metros'], ['cm', 1, 'centímetros']],
    ejemplos: [[300, 'codo', 'El arca de Noé (Gn 6:15)'], [6.5, 'codo', 'Goliat, seis codos y un palmo (1 S 17:4)'], [60, 'estadio', 'Emaús (Lc 24:13)'], [12000, 'estadio', 'La nueva Jerusalén (Ap 21:16)']]
  },
  capacidad: {
    n: 'Capacidad', base: 'L',
    nota: 'Efa y bato de 22 L. Algunos estudios dan valores mayores (hasta 36 L). El cántaro de Juan 2:6 es una medida griega de 39 L.',
    unidades: [
      { id: 'log', n: 'Log', base: 22 / 72, ref: 'Lv 14:10' },
      { id: 'cab', n: 'Cab', base: 22 / 18, ref: '2 R 6:25' },
      { id: 'gomer', n: 'Gomer', base: 2.2, ref: 'Éx 16:16' },
      { id: 'hin', n: 'Hin', base: 22 / 6, ref: 'Éx 29:40' },
      { id: 'seah', n: 'Seah («medida»)', base: 22 / 3, ref: 'Mt 13:33' },
      { id: 'efa', n: 'Efa o bato', base: 22, ref: 'Rt 2:17' },
      { id: 'homer', n: 'Homer o coro', base: 220, ref: 'Ez 45:11' },
      { id: 'cantaro', n: 'Cántaro (metretes, NT)', base: 39, ref: 'Jn 2:6' },
      { id: 'libra-ap', n: '«Libra» de Ap 6:6 (quénice)', base: 1.1, ref: 'Ap 6:6' }
    ],
    salida: [['L', 1, 'litros'], ['ml', 0.001, 'mililitros']],
    ejemplos: [[1, 'gomer', 'El maná de un día (Éx 16:16)'], [3, 'seah', 'Tres medidas de harina (Mt 13:33)'], [2000, 'efa', 'El mar de bronce (1 R 7:26)'], [15, 'cantaro', 'Las seis tinajas de Caná, unos 15 cántaros (Jn 2:6)']]
  },
  peso: {
    n: 'Peso', base: 'g',
    nota: 'Siclo de 11,4 g; mina de 50 siclos; talento de 3.000 siclos. La libra del Nuevo Testamento es la libra romana, de unos 327 g.',
    unidades: [
      { id: 'gera', n: 'Gera', base: 11.4 / 20, ref: 'Éx 30:13' },
      { id: 'beka', n: 'Beka (medio siclo)', base: 5.7, ref: 'Éx 38:26' },
      { id: 'pim', n: 'Pim', base: 7.8, ref: '1 S 13:21' },
      { id: 'siclo', n: 'Siclo', base: 11.4, ref: 'Gn 23:16' },
      { id: 'libra', n: 'Libra romana (NT)', base: 327, ref: 'Jn 12:3' },
      { id: 'mina', n: 'Mina', base: 570, ref: 'Esd 2:69' },
      { id: 'talento', n: 'Talento', base: 34200, ref: 'Éx 38:25' }
    ],
    salida: [['t', 1000000, 'toneladas'], ['kg', 1000, 'kilos'], ['g', 1, 'gramos']],
    ejemplos: [[666, 'talento', 'El oro anual de Salomón (1 R 10:14)'], [5000, 'siclo', 'La cota de Goliat (1 S 17:5)'], [100, 'libra', 'Las especias de Nicodemo (Jn 19:39)'], [1, 'talento', 'El granizo de Ap 16:21']]
  },
  dinero: {
    n: 'Monedas y dinero', base: 'denarios',
    nota: 'Un denario era el pago de un día de trabajo (Mt 20:2). Se cuentan unos 25 días de trabajo al mes y 300 al año.',
    unidades: [
      { id: 'blanca', n: 'Blanca (lepton)', base: 1 / 128, ref: 'Mr 12:42' },
      { id: 'cuadrante', n: 'Cuadrante', base: 1 / 64, ref: 'Mt 5:26' },
      { id: 'cuarto', n: 'Cuarto (as)', base: 1 / 16, ref: 'Mt 10:29' },
      { id: 'denario', n: 'Denario', base: 1, ref: 'Mt 20:2' },
      { id: 'dracma', n: 'Dracma', base: 1, ref: 'Lc 15:8' },
      { id: 'didracma', n: 'Dos dracmas (impuesto del templo)', base: 2, ref: 'Mt 17:24' },
      { id: 'estatero', n: 'Estatero o siclo de Tiro', base: 4, ref: 'Mt 17:27' },
      { id: 'pieza', n: 'Pieza de plata (siclo)', base: 4, ref: 'Mt 26:15' },
      { id: 'mina', n: 'Mina', base: 100, ref: 'Lc 19:13' },
      { id: 'talento', n: 'Talento', base: 6000, ref: 'Mt 25:15' }
    ],
    ejemplos: [[2, 'blanca', 'La ofrenda de la viuda (Mr 12:42)'], [2, 'denario', 'El buen samaritano (Lc 10:35)'], [30, 'pieza', 'Las treinta piezas de plata (Mt 26:15)'], [300, 'denario', 'El perfume de María (Jn 12:5)'], [10000, 'talento', 'La deuda del siervo (Mt 18:24)']]
  }
};
