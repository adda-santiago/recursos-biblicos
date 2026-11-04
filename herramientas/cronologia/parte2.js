(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, linea, R } = window.__CR;

  // ================== RUTA III. El ministerio de Jesús ==================
  const ministerio = [
    {
      id: 'tiberio', n: 'El año quince de Tiberio', ref: 'Lucas 3:1-3', fecha: [28, 29],
      visual: [
        esq('cr-tiberio.svg', 'Dos escalas paralelas de los años 12 a 30 d.C.: en una, el reinado de Tiberio se cuenta desde la muerte de Augusto en el 14 y el año quince cae en el 28–29; en la otra, se cuenta desde el 12, cuando Tiberio gobernaba junto con Augusto, y el año quince cae en el 26–27', 'Dos maneras de contar «el año decimoquinto del imperio de Tiberio César» (Lc 3:1).', 'Tiberio'),
        tabla({
          titulo: 'Los seis datos de Lucas 3:1-2',
          cab: ['Dato', 'Años de gobierno', 'Qué indica'],
          filas: [
            ['Año 15 de Tiberio', '14–37 como emperador', '28–29 (o 26–27 con la otra cuenta)'],
            ['Poncio Pilato, gobernador de Judea', '26–36', 'Después del 26'],
            ['Herodes Antipas, tetrarca de Galilea', '4 a.C.–39 d.C.', 'Antes del 39'],
            ['Felipe, tetrarca de Iturea y Traconite', '4 a.C.–34 d.C.', 'Antes del 34'],
            ['Lisanias, tetrarca de Abilinia', 'Conocido por una inscripción de tiempos de Tiberio', 'Coincide'],
            ['Anás y Caifás, sumos sacerdotes', 'Caifás, 18–36; Anás seguía siendo influyente', 'Entre el 18 y el 36']
          ]
        }),
        cita('Lucas 3:1-3', '@@lc/3/1-3')
      ],
      texto: [
        'Lucas fija el comienzo de la predicación de Juan el Bautista con el dato más preciso de todo el Nuevo Testamento: «En el año decimoquinto del imperio de Tiberio César» (Lc 3:1). A eso suma otros cinco gobernantes. Todos encajan entre los años 26 y 34, y el primero permite ir más lejos.',
        { h: 'Contar los años de Tiberio' },
        'Augusto murió el 19 de agosto del año 14, y desde ese día Tiberio fue emperador. Contando así, como lo hacían los historiadores romanos, su año quince va de agosto del 28 a agosto del 29. Si se usaba la cuenta de las provincias orientales, que hacían empezar el año en otoño o en primavera, el resultado se mueve unos meses, pero sigue dentro del 28 o el 29. Esa es la cuenta que siguen este sitio y muchos estudiosos.',
        { posturas: {
          titulo: '¿Desde cuándo se cuentan los años de Tiberio?',
          a: { n: 'Desde la muerte de Augusto (año 14)', t: 'Es la forma en que los historiadores romanos Tácito, Suetonio y Dion Casio contaban los años de Tiberio, y la que habría entendido cualquier lector de Lucas. El año quince sería el 28–29. Juan comenzó a predicar ese año, y Jesús fue bautizado poco después, hacia el 29.' },
          b: { n: 'Desde que gobernó junto con Augusto (año 12)', t: 'Hacia el año 12, Augusto le dio a Tiberio autoridad sobre las provincias junto con él. Si Lucas contara desde entonces, el año quince sería el 26–27, y el ministerio de Jesús podría empezar en el 27 y terminar en el 30. Pero no hay monedas ni documentos que cuenten los años de Tiberio desde el 12.' },
          c: 'La primera cuenta es la más natural y la que mejor encaja con los demás datos (estación IV.4). Por eso el sitio fecha el comienzo del ministerio de Juan en el 28–29 y el bautismo de Jesús en el 29.'
        } },
        { h: 'La palabra de Dios en el desierto' },
        'Después de nombrar a todos los poderosos del mundo, Lucas dice dónde llegó la palabra de Dios: no al palacio del emperador, ni al del tetrarca, ni a la casa del sumo sacerdote, sino «a Juan, hijo de Zacarías, en el desierto» (Lc 3:2). La lista de nombres importantes sirve de marco para lo verdaderamente importante: Dios volvía a hablar a su pueblo después de siglos de silencio profético.',
        ir('Ver en La dinastía de Herodes: Antipas y Felipe', R.herodes + '#hijos/2')
      ],
      pensar: 'Lucas nombra a siete gobernantes poderosos, pero la palabra de Dios vino a un hombre en el desierto. ¿Dónde esperas tú que Dios hable: en los lugares importantes o en los lugares de soledad y oración?'
    },
    {
      id: 'treinta', n: '«Como de treinta años»', ref: 'Lucas 3:21-23; Números 4:3; Génesis 41:46; 2 Samuel 5:4', fecha: 29,
      visual: [
        img('../persona-y-obra-de-cristo/img/tentacion-desierto.webp', 'Un hombre visto de espaldas, con túnica clara y manto pardo, se detiene sobre las rocas del desierto de Judea al atardecer', 'Después del bautismo, cuarenta días en el desierto (Lc 4:1-2).'),
        tabla({
          titulo: 'Treinta años en la Biblia',
          cab: ['Quién', 'Qué comenzó', 'Pasaje'],
          filas: [
            ['Los levitas', 'El servicio en el tabernáculo', 'Nm 4:3'],
            ['José', 'Su servicio ante Faraón', 'Gn 41:46'],
            ['David', 'Su reinado', '2 S 5:4'],
            ['Ezequiel', 'Probablemente su ministerio profético («el año treinta»)', 'Ez 1:1'],
            ['Jesús', 'Su ministerio público', 'Lc 3:23']
          ]
        })
      ],
      texto: [
        'Lucas dice que Jesús, «al comenzar su ministerio era como de treinta años» (Lc 3:23). El dato encaja con lo anterior: si Jesús nació hacia el 6 o el 5 a.C. y fue bautizado hacia el 29, tenía unos treinta y dos años.',
        { h: '«Como de»' },
        'La expresión de Lucas no pretende ser exacta. Él mismo usa «como» para cifras aproximadas: «como tres mil personas» (Hch 2:41), «como cinco mil» (Lc 9:14). Treinta y dos años está bien dentro de lo que un lector entendía por «como de treinta». Algunos han querido leer «exactamente treinta» para fijar el nacimiento, pero el texto no lo permite.',
        { h: 'La edad del servicio' },
        'Treinta años era, en Israel, la edad de la madurez para servir. Los levitas comenzaban su trabajo en el tabernáculo «de edad de treinta años arriba» (Nm 4:3). José tenía treinta años cuando se presentó delante de Faraón (Gn 41:46), y David, cuando comenzó a reinar (2 S 5:4). Lucas, que acaba de narrar cómo el Espíritu descendió sobre Jesús en el bautismo y cómo la voz del Padre lo declaró su Hijo amado (Lc 3:21-22), presenta a Jesús entrando en su servicio en la plenitud de su vida.',
        { h: 'Del Jordán al desierto' },
        'El bautismo de Jesús ocurrió, por lo tanto, hacia el año 29, probablemente en el verano o el otoño, cuando la predicación de Juan ya atraía multitudes. Después, «lleno del Espíritu Santo», Jesús fue llevado al desierto, donde ayunó cuarenta días y venció la tentación con la Palabra de Dios (Lc 4:1-13). Luego volvió al Jordán, donde Juan lo señaló como «el Cordero de Dios» y lo siguieron sus primeros discípulos (Jn 1:29-42). Su ministerio público comenzaba con poder: «Jesús volvió en el poder del Espíritu a Galilea» (Lc 4:14).',
        { ejercicio: {
          pregunta: 'Si Jesús nació hacia el 5 a.C. y fue bautizado hacia el 29 d.C., ¿qué edad tenía, aproximadamente?',
          opciones: [
            { t: 'Treinta y cuatro años: 5 más 29.', ok: false, por_que: 'Esa suma olvida que no existe el año cero: del 1 a.C. se pasa al 1 d.C.' },
            { t: 'Treinta y tres años, como dice la tradición.', ok: false, por_que: 'La tradición de los treinta y tres años se refiere a la edad de Jesús al morir, no al ser bautizado.' },
            { t: 'Unos treinta y dos años, «como de treinta».', ok: true, por_que: 'Como no hay año cero, se resta uno: 5 + 29 − 1 = 33 años de calendario, que según el mes dan unos 32 de edad.' }
          ],
          explicacion: 'Lucas da una edad aproximada (Lc 3:23), y treinta y dos años encaja bien con su «como de treinta».'
        } }
      ],
      pensar: 'Jesús esperó treinta años en Nazaret antes de comenzar su ministerio, y lo comenzó lleno del Espíritu Santo. ¿Qué te enseña sobre la paciencia en la preparación y sobre la dependencia del Espíritu para servir?'
    },
    {
      id: 'templo-46', n: 'Los cuarenta y seis años del templo', ref: 'Juan 2:13-22', fecha: 30,
      visual: [
        img('../imperio-romano/img/roma-templo-herodes.webp', 'El templo de Herodes en Jerusalén, de piedra blanca y oro, sobre su gran explanada rodeada de pórticos', 'El templo que Herodes comenzó a reconstruir hacia el 20 a.C.'),
        cita('Juan 2:13-21', '@@jn/2/13-21'),
        tabla({
          titulo: 'Del comienzo de la obra a la primera Pascua',
          cab: ['Año', 'Qué pasó'],
          filas: [
            ['20/19 a.C.', 'Año dieciocho de Herodes: comienza la reconstrucción del templo (Josefo)'],
            ['c. 18/17 a.C.', 'El santuario queda terminado, en un año y medio'],
            ['c. 30 d.C.', '«En cuarenta y seis años fue edificado este templo» (Jn 2:20)'],
            ['c. 63 d.C.', 'Se terminan las obras de toda la explanada'],
            ['70 d.C.', 'Los romanos destruyen el templo']
          ]
        })
      ],
      texto: [
        'En su primera Pascua de ministerio, Jesús echó del templo a los vendedores y cambistas. Cuando las autoridades le pidieron una señal, respondió: «Destruid este templo, y en tres días lo levantaré». Ellos le contestaron: «En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás?» (Jn 2:19-20). Ese comentario, dicho casi de pasada, es un dato cronológico.',
        { h: 'Contar desde Herodes' },
        'Josefo dice que Herodes comenzó la reconstrucción del templo en el año dieciocho de su reinado, es decir, hacia el 20 o el 19 a.C. El santuario propiamente dicho, la casa con el Lugar Santo y el Lugar Santísimo, se terminó en un año y medio, aunque las obras de los atrios y pórticos siguieron hasta pocos años antes de la guerra contra Roma. Contando cuarenta y seis años desde el comienzo de la obra, o desde que se terminó el santuario, se llega al año 29 o 30 d.C.',
        'La palabra que usan aquí los judíos es la que designaba el santuario mismo. Por eso muchos entienden que querían decir: «este santuario ha estado en pie durante cuarenta y seis años». En cualquier caso, la primera Pascua del ministerio de Jesús cae en el año 30, poco después de su bautismo en el 29. Es un dato independiente del de Lucas 3:1, y los dos coinciden.',
        { h: 'El verdadero templo' },
        'Juan aclara que Jesús «hablaba del templo de su cuerpo», y que sus discípulos lo entendieron recién después de la resurrección (Jn 2:21-22). Las autoridades estaban orgullosas de un edificio que llevaba casi medio siglo en obra. Jesús hablaba de algo más grande: Dios habitaría entre los hombres en la persona de su Hijo, y él resucitaría al tercer día. Cuarenta años después, el edificio de Herodes fue destruido; el templo de su cuerpo vive para siempre.',
        ir('Ver El templo de Herodes en 3D', R.templo),
        ir('Ver la purificación del templo en la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'Las autoridades miraban un edificio construido durante cuarenta y seis años; Jesús les hablaba de sí mismo. ¿Pones tu confianza en lo que se ve y se construye con manos, o en Cristo resucitado?'
    },
    {
      id: 'pascuas', n: 'Las Pascuas de Juan: ¿cuánto duró el ministerio?', ref: 'Juan 2:13; 5:1; 6:4; 7:2; 10:22; 11:55', fecha: [29, 33],
      visual: [
        esq('cr-pascuas.svg', 'Escala de tiempo del otoño del 29 a la primavera del 33 con las fiestas que menciona Juan: la Pascua del 30, una fiesta en el 31, la Pascua del 32, los Tabernáculos y la Dedicación del 32, y la Pascua del 33, junto con las etapas del ministerio', 'El ministerio de Jesús en las fiestas que menciona Juan: unos tres años y medio.', 'Las fiestas'),
        tabla({
          titulo: 'Las fiestas del Evangelio de Juan',
          cab: ['Pasaje', 'Fiesta', 'Año'],
          filas: [
            ['Jn 2:13', 'Pascua: la purificación del templo', 'Primavera del 30'],
            ['Jn 4:35', '«Aún faltan cuatro meses para que llegue la siega»', 'Fines del 30'],
            ['Jn 5:1', '«Una fiesta de los judíos»: quizás la Pascua o los Tabernáculos', '31'],
            ['Jn 6:4', 'Pascua: la multiplicación de los panes', 'Primavera del 32'],
            ['Jn 7:2', 'Los Tabernáculos', 'Otoño del 32'],
            ['Jn 10:22', 'La Dedicación, en invierno', 'Diciembre del 32'],
            ['Jn 11:55; 12:1', 'Pascua: la cruz y la resurrección', 'Primavera del 33']
          ]
        })
      ],
      texto: [
        'Si solo tuviéramos los evangelios de Mateo, Marcos y Lucas, podríamos pensar que el ministerio de Jesús duró un año, porque los tres mencionan una sola Pascua: la de la cruz. Juan, en cambio, menciona al menos tres Pascuas, y entre ellas otras fiestas. Su evangelio da el esqueleto del ministerio.',
        { h: 'Las Pascuas de Juan' },
        'La primera Pascua es la de la purificación del templo (Jn 2:13), en el año 30. Después Juan menciona una «fiesta de los judíos» sin nombre (Jn 5:1). Luego, la Pascua cercana a la multiplicación de los panes (Jn 6:4), el año en que Jesús enseñó que él es el pan de vida. Siguen la fiesta de los Tabernáculos (Jn 7:2) y la de la Dedicación, que se celebraba en invierno (Jn 10:22). Por último, la Pascua en la que Jesús murió (Jn 11:55; 12:1).',
        'Entre la primera Pascua (Jn 2:13) y la de la multiplicación de los panes (Jn 6:4) pasó más de un año. Jesús dijo a sus discípulos en Samaria que faltaban cuatro meses para la siega (Jn 4:35), lo que lleva al invierno siguiente, y antes de la Pascua de Juan 6 hay toda una etapa en Galilea. Por eso la mayoría de los estudiosos cuenta cuatro Pascuas: 30, 31, 32 y 33. Si el bautismo fue en el otoño del 29, el ministerio duró unos tres años y medio.',
        { posturas: {
          titulo: '¿Cuánto duró el ministerio de Jesús?',
          a: { n: 'Unos tres años y medio', t: 'Juan menciona expresamente tres Pascuas y la secuencia de su relato exige una más entre Juan 2 y Juan 6. Con el bautismo en el 29, el ministerio llega a la Pascua del 33. Es la cuenta tradicional y la que mejor reúne los datos de Lucas 3:1 y Juan 2:20.' },
          b: { n: 'Unos dos años y medio', t: 'Otros cuentan solo las tres Pascuas que Juan nombra (30, 31 y 32, o 31, 32 y 33), y entienden que la «fiesta» de Juan 5:1 no es una Pascua. Con el bautismo en el 29, la cruz quedaría en el 32, año en que la Pascua no cayó en viernes; por eso esta cuenta suele ir con un comienzo más temprano y la cruz en el 30.' },
          c: 'Las dos lecturas aceptan que el ministerio duró más de dos años. La de tres años y medio encaja con todos los datos del calendario y es la que sigue el sitio, como la Armonía de los evangelios. La duración exacta no cambia nada de lo que Jesús hizo y enseñó.'
        } },
        'En una parábola de su último viaje, el dueño de la higuera dice que lleva «tres años» buscando fruto sin hallarlo (Lc 13:7). No es una fecha, pero refleja bien un ministerio largo entre un pueblo que no daba el fruto esperado.'
      ],
      pensar: 'Durante tres años y medio Jesús subió a Jerusalén en cada fiesta, enseñó y sanó, y la mayoría de su pueblo no lo recibió. ¿Cuánto tiempo lleva Dios buscando fruto en tu vida, y qué encuentra?'
    },
    {
      id: 'orden', n: 'El orden del ministerio', ref: 'Juan 1:43; 3:22; 4:3-4; Marcos 1:14-15; Lucas 9:51', fecha: [29, 33],
      visual: [
        pasos([
          { t: 'Otoño del 29: bautismo en el Jordán y primeros discípulos (Jn 1:28-51)', fecha: 29, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-judea', 'nt-perea'], lugares: ['betabara', 'nazaret', 'cana', 'jerusalen'] } },
          { t: '30: primera Pascua y ministerio en Judea; vuelta a Galilea por Samaria (Jn 2–4)', fecha: 30, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['jerusalen', 'sicar', 'cana', 'nazaret'], trazos: ['jesus-samaria'] } },
          { t: '30–32: el gran ministerio en Galilea, con Capernaúm como centro (Mr 1:14–9:50)', fecha: [30, 32], estado: { view: V.galilea, capas: ['nt-galilea'], lugares: ['capernaum', 'betsaida', 'corazin', 'magdala', 'nain', 'nazaret', 'cana'] } },
          { t: '32: viajes al norte: Tiro y Sidón, Cesarea de Filipo y la transfiguración (Mr 7:24; 8:27)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-felipe'], lugares: ['tiro-sidon', 'cesarea-filipo', 'capernaum', 'hermon'] } },
          { t: 'Fines del 32 a la Pascua del 33: el último viaje hacia Jerusalén, por Perea y Judea (Lc 9:51–19:28)', fecha: [32, 33], estado: { view: V.palestina, capas: ['nt-galilea', 'nt-perea', 'nt-judea'], lugares: ['capernaum', 'jerico', 'betania', 'jerusalen', 'efrain'], trazos: ['jesus-jerusalen'] } }
        ]),
        tabla({
          titulo: 'Las etapas del ministerio',
          cab: ['Etapa', 'Fechas', 'Dónde se lee'],
          filas: [
            ['Preparación y primeros discípulos', 'Otoño del 29 a la Pascua del 30', 'Mt 3–4; Lc 3–4; Jn 1'],
            ['Primer año: Judea, Samaria y Caná', '30', 'Jn 2–4'],
            ['Ministerio en Galilea', '30–32', 'Mt 4–18; Mr 1–9; Lc 4–9'],
            ['Retiros al norte y anuncio de la cruz', '32', 'Mt 15–17; Mr 7–9'],
            ['Último viaje a Jerusalén', 'Otoño del 32 a la primavera del 33', 'Lc 9:51–19:27; Jn 7–11'],
            ['La última semana', 'Marzo y abril del 33', 'Mt 21–28; Mr 11–16; Lc 19–24; Jn 12–21']
          ]
        })
      ],
      texto: [
        'Los evangelios no son diarios de viaje, y no siempre cuentan las cosas en orden cronológico. Mateo, por ejemplo, agrupa muchas enseñanzas de Jesús en grandes discursos. Pero, comparando los cuatro, se ve un movimiento general que permite seguir el ministerio de Jesús año por año.',
        { h: 'Un primer año poco conocido' },
        'Después del bautismo, en el otoño del 29, Jesús llamó a sus primeros discípulos junto al Jordán y fue con ellos a una boda en Caná (Jn 1–2). En la Pascua del 30 estuvo en Jerusalén; allí habló con Nicodemo y luego bautizó en Judea mientras Juan el Bautista seguía predicando (Jn 3:22-24). Solo Juan cuenta esta etapa. Cuando Juan el Bautista fue encarcelado, Jesús volvió a Galilea pasando por Samaria (Jn 4:3-4; Mr 1:14).',
        { h: 'Galilea' },
        'Siguió la etapa más larga: unos dos años en Galilea, con Capernaúm como base. Es el tiempo del llamado de los doce, del Sermón del monte, de las parábolas junto al lago y de la mayoría de los milagros. En la Pascua del 32 alimentó a los cinco mil, y muchos quisieron hacerlo rey por la fuerza (Jn 6:15). Desde entonces Jesús se retiró más a menudo hacia el norte, a las regiones de Tiro y Sidón y de Cesarea de Filipo. Allí Pedro lo confesó como el Cristo, y Jesús comenzó a anunciar abiertamente su muerte y su resurrección (Mr 8:27-31).',
        { h: 'Hacia Jerusalén' },
        'Lucas marca el giro con una frase solemne: «cuando se cumplió el tiempo en que él había de ser recibido arriba, afirmó su rostro para ir a Jerusalén» (Lc 9:51). Desde el otoño del 32 hasta la Pascua del 33, Jesús viajó por Perea y Judea, subió a Jerusalén para los Tabernáculos y la Dedicación (Jn 7; 10), resucitó a Lázaro en Betania (Jn 11) y se retiró a Efraín, junto al desierto (Jn 11:54), hasta la última semana.',
        ir('Ver todo el ministerio, pasaje por pasaje, en la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'Jesús «afirmó su rostro para ir a Jerusalén» sabiendo lo que lo esperaba allí. ¿Qué te enseña su determinación cuando el camino de la obediencia se vuelve difícil?'
    }
  ];

  // ================== RUTA IV. La última semana y el año de la cruz ==================
  const semana = [
    {
      id: 'dia-por-dia', n: 'La última semana, día por día', ref: 'Juan 12:1, 12; Marcos 11:1–16:8', fecha: 33,
      visual: [
        esq('../mundo-judio/img/esquema-semana.svg', 'Esquema de la última semana de Jesús, de domingo a domingo, y del viernes hora por hora, del Sanedrín al amanecer hasta la sepultura antes de la puesta del sol', 'La última semana de Jesús, de domingo a domingo.', 'La semana'),
        tabla({
          titulo: 'Marzo y abril del año 33',
          cab: ['Día', 'Fecha', 'Qué pasó', 'Pasajes'],
          filas: [
            ['Viernes o sábado', '27–28 de marzo (8 de nisán)', 'Llegada a Betania, «seis días antes de la pascua»; cena en casa de Lázaro', 'Jn 12:1-11'],
            ['Domingo', '29 de marzo', 'Entrada triunfal en Jerusalén', 'Mr 11:1-11; Jn 12:12-19'],
            ['Lunes', '30 de marzo', 'La higuera sin fruto; purificación del templo', 'Mr 11:12-19'],
            ['Martes', '31 de marzo', 'Preguntas en el templo; la ofrenda de la viuda; discurso del monte de los Olivos', 'Mr 11:20–13:37'],
            ['Miércoles', '1 de abril', 'Complot de los principales sacerdotes y traición de Judas', 'Mr 14:1-2, 10-11'],
            ['Jueves', '2 de abril (al anochecer comienza el 14 de nisán)', 'Última cena, Getsemaní y arresto', 'Mr 14:12-52; Jn 13–18'],
            ['Viernes', '3 de abril (14 de nisán)', 'Juicios, crucifixión y sepultura antes del atardecer', 'Mr 14:53–15:47; Jn 18–19'],
            ['Sábado', '4 de abril', 'En el sepulcro; las mujeres reposan', 'Lc 23:56; Mt 27:62-66'],
            ['Domingo', '5 de abril', 'Resurrección al amanecer', 'Mt 28; Mr 16; Lc 24; Jn 20']
          ],
          nota: 'Fechas del calendario juliano para el año 33. El orden de los días es el tradicional; algunos ubican la entrada triunfal el lunes.'
        })
      ],
      texto: [
        'Ninguna parte de la vida de Jesús está contada con tanto detalle como su última semana. Los cuatro evangelios le dedican cerca de un tercio de sus páginas, y Marcos va marcando los días uno por uno: «al día siguiente» (Mr 11:12), «por la mañana» (Mr 11:20), «dos días después era la pascua» (Mr 14:1), «el primer día de la fiesta de los panes sin levadura» (Mr 14:12).',
        { h: 'De Betania a Jerusalén' },
        'Juan da el punto de partida: «Seis días antes de la pascua, vino Jesús a Betania» (Jn 12:1). Allí María lo ungió con un perfume de nardo. «El siguiente día» entró en Jerusalén montado en un asno, mientras la multitud que había venido a la fiesta lo recibía con ramas de palmera (Jn 12:12-13). Según el orden tradicional, fue un domingo. Era también el tiempo en que cada familia apartaba el cordero de la Pascua, el 10 de nisán (Éx 12:3).',
        { h: 'Los días en el templo' },
        'El lunes Jesús volvió a purificar el templo. El martes fue un día largo de enseñanza: las autoridades le hicieron preguntas sobre su autoridad, el tributo al César y la resurrección, y Jesús terminó el día en el monte de los Olivos anunciando la destrucción del templo y su venida en gloria (Mr 13). El miércoles los principales sacerdotes buscaban cómo prenderlo, y Judas se ofreció a entregarlo (Mr 14:1-2, 10-11).',
        { h: 'Del jueves al domingo' },
        'El jueves por la tarde Jesús preparó la Pascua con sus discípulos. Para el calendario judío, al ponerse el sol comenzaba el 14 de nisán. Esa noche lavó los pies de los discípulos, instituyó la Cena del Señor, oró en Getsemaní y fue arrestado. Antes del amanecer del viernes compareció ante Anás, Caifás y el Sanedrín; por la mañana, ante Pilato y Herodes Antipas. A la hora tercera fue crucificado, a la hora novena murió, y antes de la puesta del sol fue sepultado (Mr 15:25, 34, 42-46). El domingo, al amanecer del primer día de la semana, la tumba estaba vacía (Mt 28:1).',
        ir('Ver la Semana Santa, día por día, en la Armonía de los evangelios', R.armonia),
        ir('Ver en El mundo judío: la última semana', R.mundo + '#jesus/6')
      ],
      pensar: 'Los evangelistas dedicaron a una sola semana casi un tercio de sus libros. ¿Qué te dice eso sobre lo que Dios quiere que entiendas por encima de todo?'
    },
    {
      id: 'que-dia', n: '¿Miércoles, jueves o viernes?', ref: 'Mateo 12:40; Marcos 15:42; Lucas 24:21; 1 Corintios 15:4; Ester 4:16; 5:1', fecha: 33,
      visual: [
        esq('cr-dia-cruz.svg', 'Tres filas comparan las propuestas de crucifixión el miércoles, el jueves y el viernes, con los días y las noches contados hasta la resurrección del domingo al amanecer', 'Tres propuestas para el día de la cruz, y cómo cuenta cada una los «tres días».', 'Tres propuestas'),
        esq('../medidas-biblicas/img/esquema-tres-dias.svg', 'Cuenta inclusiva de los tres días: viernes (muerte y sepultura antes del atardecer), sábado (en el sepulcro) y domingo (resurrección al amanecer): primer, segundo y tercer día', 'La cuenta inclusiva: viernes, sábado y domingo son tres días.', 'La cuenta inclusiva'),
        cita('Mateo 12:40', '@@mt/12/40')
      ],
      texto: [
        'La iglesia ha recordado siempre la crucifixión en viernes. Pero Jesús dijo que estaría «en el corazón de la tierra tres días y tres noches» (Mt 12:40), y entre el viernes por la tarde y el domingo de madrugada no hay setenta y dos horas. Por eso algunos proponen que Jesús murió un miércoles o un jueves.',
        { h: 'Lo que dicen los evangelios' },
        'Los cuatro evangelios dicen que Jesús murió el día de «la preparación», y Marcos lo explica: «es decir, la víspera del día de reposo» (Mr 15:42). En griego, «preparación» era, y sigue siendo, el nombre del viernes. Las mujeres vieron dónde lo sepultaban, volvieron a preparar especias y «descansaron el día de reposo, conforme al mandamiento» (Lc 23:56), y fueron al sepulcro al amanecer del primer día de la semana. Todo encaja con un solo sábado en medio.',
        'Además, el Nuevo Testamento dice muchas más veces que Jesús resucitó «al tercer día» (Mt 16:21; Lc 24:7; 1 Co 15:4) que «después de tres días». Los discípulos de Emaús, el domingo por la tarde, dijeron: «hoy es ya el tercer día que esto ha acontecido» (Lc 24:21). Con la cruz el miércoles, el domingo sería el quinto día.',
        { h: '«Tres días y tres noches»' },
        'Para un judío del siglo I, «tres días y tres noches» era una manera de decir «tres días», contando cualquier parte del día como un día completo. El libro de Ester lo muestra: Ester pidió que ayunaran por ella «tres días, noche y día», y entró a ver al rey «al tercer día» (Est 4:16; 5:1). Un maestro judío de alrededor del año 100 lo dijo así: un día y una noche forman una unidad, y una parte de ella cuenta como el todo.',
        { posturas: {
          titulo: '¿Qué día murió Jesús?',
          a: { n: 'El viernes', t: 'Los evangelios llaman a ese día «la preparación», la víspera del sábado (Mr 15:42; Lc 23:54). Hay un solo día de reposo entre la sepultura y la resurrección, y el domingo es «el tercer día» (Lc 24:21). La expresión de Mateo 12:40 se entiende con la cuenta inclusiva, como en Ester 4:16 y 5:1. Es la postura de la iglesia desde sus comienzos y la que sigue el sitio.' },
          b: { n: 'El miércoles o el jueves', t: 'Quienes leen «tres días y tres noches» como setenta y dos horas exactas ubican la cruz el miércoles, con la resurrección el sábado por la tarde, o el jueves, con dos días de reposo seguidos: el de la Pascua y el sábado. Señalan que Juan llama a ese sábado «de gran solemnidad» (Jn 19:31), porque coincidía con la fiesta.' },
          c: 'La segunda postura toma en serio las palabras de Jesús, pero obliga a leer «al tercer día» de manera forzada y a suponer dos sábados que los evangelios no mencionan. Lo esencial es lo que todos comparten: Jesús murió de verdad, fue sepultado y resucitó corporalmente el primer día de la semana.'
        } },
        ir('Ver en Pesos, medidas, monedas y horas: la semana y el tercer día', R.medidas + '#tiempo/4')
      ],
      pensar: 'Jonás pasó tres días en el vientre del gran pez y salió con vida; Jesús pasó tres días en el sepulcro y resucitó. ¿Qué significa para ti que la señal que Jesús ofreció fue su resurrección?'
    },
    {
      id: 'pascua-juan', n: 'La Pascua en Juan y en los otros evangelios', ref: 'Marcos 14:12; Lucas 22:15; Juan 13:1; 18:28; 19:14, 31; 1 Corintios 5:7', fecha: 33,
      visual: [
        img('cr-pascua-corderos.webp', 'Sacerdotes con túnicas de lino blanco, en fila, pasan de mano en mano cuencos de oro y plata en el atrio del templo de Jerusalén, entre una multitud de hombres con sus corderos, a la luz dorada de la tarde', 'La tarde del 14 de nisán: los corderos de la Pascua en el templo.'),
        tabla({
          titulo: 'Dos maneras de nombrar los mismos días',
          cab: ['Mateo, Marcos y Lucas', 'Juan'],
          filas: [
            ['La cena del jueves es la Pascua: «el primer día de la fiesta de los panes sin levadura, cuando sacrificaban el cordero de la pascua» (Mr 14:12)', '«Antes de la fiesta de la pascua» (Jn 13:1)'],
            ['«¡Cuánto he deseado comer con vosotros esta pascua antes que padezca!» (Lc 22:15)', 'El viernes por la mañana, las autoridades no entran al pretorio «para no contaminarse, y así poder comer la pascua» (Jn 18:28)'],
            ['Jesús muere en «la preparación», la víspera del sábado (Mr 15:42)', 'Jesús muere en «la preparación de la pascua» (Jn 19:14, 31)']
          ]
        }),
        cita('1 Corintios 5:7', '@@1co/5/7')
      ],
      texto: [
        'Hay una pregunta clásica sobre la última semana. Mateo, Marcos y Lucas presentan la última cena del jueves como la cena de la Pascua (Mr 14:12; Lc 22:15). Juan, en cambio, dice que el viernes por la mañana las autoridades todavía no habían comido la Pascua (Jn 18:28), y que Jesús murió el día de «la preparación de la pascua» (Jn 19:14), cuando en el templo se sacrificaban los corderos. ¿Cuándo fue la Pascua?',
        { posturas: {
          titulo: '¿Cómo se armonizan los evangelios?',
          a: { n: 'Dos maneras de contar el día', t: 'En tiempos de Jesús no todos los judíos contaban el día de la misma forma. Los galileos y muchos fariseos lo contaban de amanecer a amanecer, y celebraron la Pascua el jueves por la noche; los de Judea y los saduceos del templo lo contaban de atardecer a atardecer, y sacrificaron sus corderos el viernes por la tarde. Así, Jesús comió la Pascua con sus discípulos el jueves, y murió a la hora en que se sacrificaban los corderos de la mayoría.' },
          b: { n: '«Comer la pascua» es la fiesta completa', t: 'La Pascua duraba siete días junto con los panes sin levadura, y se ofrecían otros sacrificios y comidas festivas durante la semana. Según esta lectura, la cena del jueves fue la Pascua, como dicen los otros tres evangelios; Juan 18:28 se refiere a la comida festiva del día siguiente, y «la preparación de la pascua» significa «el viernes de la semana de Pascua».' },
          c: 'Las dos explicaciones son razonables y conservan la fecha del viernes. Lo que ninguna discute es lo que Juan quiere destacar: Jesús murió como el verdadero cordero de la Pascua. Pablo lo dijo así: «nuestra pascua, que es Cristo, ya fue sacrificada por nosotros» (1 Co 5:7).'
        } },
        { h: 'El cordero sin hueso quebrado' },
        'Juan subraya este sentido. Juan el Bautista había presentado a Jesús como «el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29). En la cruz, los soldados no le quebraron las piernas, y Juan ve allí el cumplimiento de la ley de la Pascua: «No será quebrado hueso suyo» (Jn 19:36; Éx 12:46). En la cena, Jesús tomó el pan y la copa de la Pascua y les dio un sentido nuevo: su cuerpo entregado y su sangre del nuevo pacto (Lc 22:19-20).',
        'La Pascua recordaba la noche en que la sangre del cordero protegió a Israel y Dios lo sacó de la esclavitud de Egipto. Jesús eligió ese día para morir, y con su sangre libró de la esclavitud del pecado a todos los que creen en él.',
        ir('Ver en El mundo judío: las fiestas de peregrinación', R.mundo + '#fe/2')
      ],
      pensar: 'El cordero de la Pascua se elegía sin defecto y su sangre se ponía en las puertas. ¿Estás tú cubierto por la sangre de Cristo, nuestra pascua?'
    },
    {
      id: 'anio-cruz', n: 'El año de la cruz: ¿30 o 33?', ref: 'Lucas 3:1; Juan 2:20; Juan 19:12; Hechos 2:1', fecha: 33,
      visual: [
        esq('cr-anio-cruz.svg', 'Escala del 26 al 36 d.C. con el gobierno de Pilato y el sumo sacerdocio de Caifás, los años en que el 14 de nisán cayó en viernes (30 y 33), el año quince de Tiberio y la caída de Sejano en el 31', 'Por qué la cruz solo puede estar en el año 30 o en el 33.', 'El año'),
        tabla({
          titulo: 'Los datos que deciden',
          cab: ['Dato', 'Año 30', 'Año 33'],
          filas: [
            ['Pilato (26–36) y Caifás (18–36)', 'Encaja', 'Encaja'],
            ['14 de nisán en viernes', '7 de abril', '3 de abril'],
            ['Año quince de Tiberio (Lc 3:1)', 'Solo si se cuenta desde el año 12', 'Encaja contando desde el 14'],
            ['Cuarenta y seis años del templo (Jn 2:20)', 'Pascua del 30 sería la última, no la primera', 'Pascua del 30 es la primera'],
            ['Duración del ministerio', 'Poco más de dos años, con comienzo en el 27–28', 'Unos tres años y medio, desde el 29'],
            ['«No eres amigo de César» (Jn 19:12)', 'Pilato aún tenía el respaldo de Sejano', 'Después de la caída de Sejano (31), Pilato estaba vulnerable']
          ]
        })
      ],
      texto: [
        'Juntando los datos, el año de la crucifixión queda entre dos candidatos: el 30 y el 33. Los dos tienen defensores serios. El sitio sigue el 33, como la Armonía de los evangelios.',
        { h: 'Lo que reduce las opciones' },
        'Jesús murió bajo Poncio Pilato y siendo Caifás sumo sacerdote. Los dos dejaron sus cargos en el 36. Murió un viernes, el día de la Pascua o en la semana de la Pascua. Como el calendario judío seguía la luna, los astrónomos pueden calcular en qué día de la semana cayó el 14 de nisán en cada año. Entre el 26 y el 36, los años en que pudo caer en viernes son el 30 (7 de abril) y el 33 (3 de abril); el 27 es dudoso y demasiado temprano para los demás datos.',
        { h: 'A favor del 33' },
        'El año quince de Tiberio, contado desde la muerte de Augusto, es el 28–29 (Lc 3:1). Con un ministerio que incluye al menos tres o cuatro Pascuas, la cruz no puede estar antes del 32, y la Pascua cae en viernes en el 33. El dato de los cuarenta y seis años del templo ubica la primera Pascua del ministerio en el 30 (Jn 2:20). Hay también un detalle político: en el año 31 cayó en Roma Sejano, el poderoso protector de Pilato, y Tiberio persiguió a sus allegados. Eso explica por qué en el juicio de Jesús un gobernador que antes había desafiado a los judíos cedió ante la amenaza: «Si a éste sueltas, no eres amigo de César» (Jn 19:12).',
        { posturas: {
          titulo: '¿En qué año murió Jesús?',
          a: { n: 'Año 33', t: 'Encaja con la cuenta normal de los años de Tiberio, con los cuarenta y seis años del templo, con un ministerio de tres años y medio y con la situación de Pilato después de la caída de Sejano. Es la fecha que sostienen muchos estudiosos que defienden la fiabilidad de los evangelios, y la que da el cálculo de las setenta semanas de Daniel (estación IV.5).' },
          b: { n: 'Año 30', t: 'Es la fecha que prefieren muchos historiadores. Supone que Lucas contó los años de Tiberio desde el 12, o que el ministerio de Jesús duró poco más de dos años. Algunos señalan que deja más tiempo para los hechos de Hechos antes de la conversión de Pablo.' },
          c: 'La diferencia es de tres años y no cambia nada del relato ni de la fe. Este recurso usa el 33, y el sitio ajustó a esa fecha los recursos que usaban el 30.'
        } },
        'Así, la crucifixión ocurrió con mucha probabilidad el viernes 3 de abril del año 33, a la hora novena, unas tres de la tarde, a la hora en que se ofrecía el sacrificio de la tarde en el templo.',
        ir('Ver en El mundo judío: Pilato, de Coponio a Pilato', R.mundo + '#poder/1')
      ],
      pensar: 'Pilato soltó a Barrabás y entregó a Jesús por miedo a perder el favor del emperador. ¿En qué momentos el temor a lo que piensen otros te lleva a callar lo que sabes que es justo?'
    },
    {
      id: 'setenta-semanas', n: 'Las setenta semanas y el Mesías', ref: 'Daniel 9:24-27; Nehemías 2:1-8; Lucas 19:41-44', fecha: [-444, 33],
      visual: [
        esq('cr-setenta-semanas.svg', 'Línea desde la orden de Artajerjes a Nehemías en el mes de nisán del 444 a.C. hasta el año 33 d.C.: siete semanas y sesenta y dos semanas, 483 años proféticos de 360 días o 173 880 días; después, un paréntesis, y la semana setenta en el futuro', 'Sesenta y nueve semanas: de la orden de Artajerjes al Mesías Príncipe.', 'Daniel 9'),
        cita('Daniel 9:24-27', '@@dn/9/24-27'),
        cita('Nehemías 2:1', '@@neh/2/1', 'La orden')
      ],
      texto: [
        'Quinientos años antes de Jesús, el ángel Gabriel le dio a Daniel una profecía con números: setenta semanas fueron determinadas sobre su pueblo y su ciudad. Desde la orden para restaurar y edificar Jerusalén «hasta el Mesías Príncipe, habrá siete semanas, y sesenta y dos semanas», y después de las sesenta y dos semanas «se quitará la vida al Mesías, mas no por sí» (Dn 9:25-26).',
        { h: 'Semanas de años' },
        'Las «semanas» de Daniel son períodos de siete años, como los años sabáticos de la ley (Lv 25:8). Sesenta y nueve semanas son 483 años. Muchos intérpretes cuentan esos años como años proféticos de 360 días, como los que usan el mismo Daniel y Apocalipsis, donde «tiempo, y tiempos, y medio tiempo» equivalen a 1.260 días (Dn 7:25; Ap 12:6, 14). Así, 483 años proféticos son 173.880 días.',
        { h: 'Desde Artajerjes' },
        'La orden «para restaurar y edificar a Jerusalén», con sus muros, fue la que el rey Artajerjes dio a Nehemías «en el mes de Nisán, en el año veinte» de su reinado (Neh 2:1-8), es decir, en la primavera del 444 a.C. Contando 173.880 días desde allí, el estudioso Harold Hoehner llegó al 30 de marzo del año 33, en los días de la entrada triunfal de Jesús en Jerusalén. Ese día Jesús lloró sobre la ciudad y dijo que no había conocido «el tiempo de tu visitación» (Lc 19:44). Pocos días después, como dijo Gabriel, se quitó la vida al Mesías, «mas no por sí».',
        { posturas: {
          titulo: '¿Desde dónde se cuentan las sesenta y nueve semanas?',
          a: { n: 'Desde la orden a Nehemías (444 a.C.)', t: 'Es la única orden que menciona expresamente la reconstrucción de la ciudad y sus muros. Con años proféticos de 360 días, las sesenta y nueve semanas llegan a la última semana de Jesús en el año 33, y su muerte ocurre «después» de ellas.' },
          b: { n: 'Desde la orden a Esdras (458 a.C.)', t: 'Otros cuentan desde el decreto de Artajerjes a Esdras (Esd 7), con años solares. 483 años después se llega al 26–27 d.C., que según ellos sería el comienzo del ministerio de Jesús, cuando fue ungido por el Espíritu.' },
          c: 'Las dos lecturas ven en Jesús al Mesías Príncipe y en su muerte el cumplimiento de Daniel 9:26. Ambas son defendidas por intérpretes que confían en la exactitud de la profecía.'
        } },
        { h: 'La semana que falta' },
        'La profecía menciona setenta semanas, pero solo se han cumplido sesenta y nueve. Entre la muerte del Mesías y la semana setenta, Daniel anuncia la destrucción de la ciudad y del santuario (Dn 9:26), que ocurrió en el año 70. La semana setenta, con el pacto del príncipe que ha de venir, está todavía en el futuro: es el tiempo de la gran tribulación, antes de la venida de Cristo en gloria. Dios no ha olvidado su calendario.',
        ir('Ver en Daniel: las setenta semanas', R.daniel + '#comentario/12'),
        ir('Ver Los últimos tiempos: la semana setenta', R.escatologia)
      ],
      pensar: 'Dios anunció con siglos de anticipación el tiempo de la venida y la muerte del Mesías, y lo cumplió. ¿Qué confianza te da eso respecto a las promesas que todavía faltan por cumplirse?'
    },
    {
      id: 'pentecostes', n: 'La resurrección, los cuarenta días y Pentecostés', ref: 'Mateo 28:1-6; Hechos 1:3-12; 2:1-4; Levítico 23:10-16; 1 Corintios 15:20', fecha: 33,
      visual: [
        esq('../medidas-biblicas/img/esquema-pentecostes.svg', 'Línea de cincuenta días: la Pascua y la muerte de Jesús, la resurrección el día de las primicias, cuarenta días de apariciones, la ascensión, diez días de espera en oración y el día de Pentecostés', 'De las primicias a Pentecostés: cincuenta días.', 'Cincuenta días'),
        img('../hechos/img/hechos-ascension.webp', 'Un grupo de discípulos mira hacia el cielo en la cima del monte de los Olivos, con Jerusalén al fondo', 'La ascensión, cuarenta días después de la resurrección (Hch 1:9-11).'),
        tabla({
          titulo: 'Del 3 de abril al 24 de mayo del 33',
          cab: ['Fecha', 'Día', 'Qué pasó'],
          filas: [
            ['3 de abril', 'Viernes, 14 de nisán', 'Crucifixión y sepultura'],
            ['5 de abril', 'Domingo, 16 de nisán: las primicias', 'Resurrección; apariciones a las mujeres, a Pedro, a los de Emaús y a los diez'],
            ['12 de abril', 'Domingo', 'Aparición a los once, con Tomás (Jn 20:26)'],
            ['Abril y mayo', '', 'Apariciones en Galilea y a más de quinientos hermanos (Jn 21; 1 Co 15:6)'],
            ['14 de mayo', 'Jueves, cuarenta días después', 'Ascensión en el monte de los Olivos'],
            ['24 de mayo', 'Domingo, cincuenta días después de las primicias', 'Pentecostés: el Espíritu Santo es derramado']
          ]
        })
      ],
      texto: [
        'El calendario de las fiestas de Israel le da a la resurrección y a Pentecostés su sentido. La ley mandaba que, el día siguiente al sábado de la semana de la Pascua, el sacerdote presentara ante Dios la primera gavilla de la cosecha, las primicias (Lv 23:10-11). Ese día, el domingo 5 de abril del 33, Jesús resucitó. Pablo lo dice así: «Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho» (1 Co 15:20). Su resurrección es la primera gavilla de una gran cosecha.',
        { h: 'Cuarenta días' },
        'Lucas dice que Jesús se presentó vivo a sus discípulos «con muchas pruebas indubitables, apareciéndoseles durante cuarenta días y hablándoles acerca del reino de Dios» (Hch 1:3). Contando desde el domingo de la resurrección, el día cuarenta cae el jueves 14 de mayo. Ese día Jesús llevó a sus discípulos al monte de los Olivos, les mandó esperar la promesa del Padre y fue alzado al cielo, y los ángeles anunciaron que volvería de la misma manera (Hch 1:4-11).',
        { h: 'Cincuenta días' },
        'Desde el día de las primicias, la ley mandaba contar siete semanas, cincuenta días, hasta la fiesta de las Semanas, en la que se ofrecía el pan nuevo de la cosecha (Lv 23:15-16). En griego, «cincuentena» se dice Pentecostés. En el año 33, ese día fue el domingo 24 de mayo. Los ciento veinte discípulos llevaban diez días orando juntos (Hch 1:14-15), y «cuando llegó el día de Pentecostés» fueron todos llenos del Espíritu Santo y comenzaron a hablar en otras lenguas (Hch 2:1-4). Ese día se convirtieron unas tres mil personas: las primicias de la iglesia.',
        { h: 'Un calendario cumplido' },
        'La Pascua, las primicias y Pentecostés, las tres primeras fiestas del año judío, se cumplieron en Cristo y en su iglesia en el orden exacto y en sus días: la muerte del Cordero, la resurrección de las primicias y la cosecha del Espíritu. Las fiestas del otoño, las trompetas, la expiación y los tabernáculos, señalan hacia lo que Dios todavía hará.',
        ir('Ver en Hechos: el día de Pentecostés', R.hechos + '#comentario/2'),
        ir('Ver en Pesos, medidas, monedas y horas: cincuenta días y la hora tercera', R.medidas + '#taller/6')
      ],
      pensar: 'La misma promesa del Padre que los discípulos esperaron diez días en oración está disponible hoy (Hch 2:39). ¿Has buscado ser lleno del Espíritu Santo, como ellos?'
    }
  ];

  Object.assign(window.__CR, { ministerio, semana });
})();
