/* Introducción al Nuevo Testamento · parte 5: VII. El Nuevo Testamento como un todo, y armado de RUTA_DATA */
(() => {
  const NT = [30, 100];
  const MEDIT = [[29, 9], [44.5, 40]];

  const conjunto = [
    {
      id: 'cuando', n: 'Cuándo se escribió cada libro', ref: 'Lucas 1:1-4; 1 Corintios 15:3-8; 2 Pedro 1:16', fecha: [45, 95],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los 27 libros por fecha aproximada',
          cab: ['Fecha aprox.', 'Libro', 'Autor', 'Escrito en'],
          filas: [
            ['45–49', 'Santiago', 'Jacobo, hermano del Señor', 'Jerusalén'],
            ['48–49', 'Gálatas', 'Pablo', 'Antioquía'],
            ['50–51', '1 y 2 Tesalonicenses', 'Pablo', 'Corinto'],
            ['50–60', 'Mateo', 'Mateo', 'Judea o Antioquía'],
            ['55–56', '1 Corintios', 'Pablo', 'Éfeso'],
            ['55–65', 'Marcos', 'Juan Marcos', 'Roma'],
            ['56', '2 Corintios', 'Pablo', 'Macedonia'],
            ['57', 'Romanos', 'Pablo', 'Corinto'],
            ['60–61', 'Lucas', 'Lucas', 'Cesarea o Roma'],
            ['60–61', 'Efesios, Colosenses, Filemón', 'Pablo', 'Roma'],
            ['61–62', 'Filipenses', 'Pablo', 'Roma'],
            ['c. 62', 'Hechos', 'Lucas', 'Roma'],
            ['62–64', '1 Timoteo, Tito', 'Pablo', 'Macedonia'],
            ['63–64', '1 Pedro', 'Pedro', 'Roma'],
            ['64–67', '2 Pedro', 'Pedro', 'Roma'],
            ['64–68', 'Hebreos', 'Desconocido', '¿Italia?'],
            ['65–70', 'Judas', 'Judas, hermano del Señor', 'Desconocido'],
            ['66–67', '2 Timoteo', 'Pablo', 'Roma'],
            ['85–90', 'Juan', 'Juan', 'Éfeso'],
            ['85–95', '1, 2 y 3 Juan', 'Juan', 'Éfeso'],
            ['c. 95', 'Apocalipsis', 'Juan', 'Patmos']
          ],
          nota: 'Fechas aproximadas, las de Cronología del Nuevo Testamento; varias se discuten (ver cada libro).'
        } },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-orden.svg', alt: 'Línea de tiempo del año 40 al 100 con cada libro del Nuevo Testamento ubicado en la fecha aproximada en que se escribió, coloreado según su grupo', pie: 'Cuándo se escribió cada libro: fechas aproximadas.', origen: 'esquema' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDIT, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'corinto', 'efeso', 'roma', 'patmos', 'r-macedonia', 'cesarea'] } }
      ],
      texto: [
        'Leído en orden cronológico, el Nuevo Testamento cuenta su propia historia. La tabla ordena los 27 libros por la fecha aproximada en que se escribieron, y el mapa muestra los lugares desde donde salieron.',
        { h: 'Tres etapas' },
        'Hasta mediados de los años 50, los libros nacen de la misión: cartas de Santiago a los creyentes judíos dispersos, y de Pablo a las iglesias que acababa de fundar. Entre los años 55 y 67, el período más fecundo, se escriben las grandes cartas de Pablo, los tres primeros evangelios, Hechos, las cartas de Pedro, Hebreos y Judas. Es la generación de los apóstoles que se acerca a su fin: Jacobo muere en el 62, y Pedro y Pablo en la persecución de Nerón, entre el 64 y el 67. Por eso esos libros insisten en guardar la fe y pasarla a otros. Después del año 70, cuando el templo ya ha sido destruido, queda el último apóstol: Juan escribe desde Éfeso y Patmos su evangelio, sus cartas y Apocalipsis.',
        { h: 'Cerca de los hechos' },
        'El Nuevo Testamento entero se escribió dentro del siglo I, la mayor parte entre veinte y treinta y cinco años después de la resurrección, cuando muchos testigos todavía vivían. Pablo podía decir que, de los más de quinientos hermanos que vieron al resucitado a la vez, «muchos viven aún» (1 Co 15:6). Pedro afirmaba que no siguieron fábulas artificiosas, sino que vieron con sus propios ojos la majestad de Cristo (2 P 1:16). Para la historia antigua, es una distancia muy corta: las principales biografías de Alejandro Magno que se conservan, las de Plutarco y Arriano, se escribieron más de cuatrocientos años después de su muerte.',
        'Las fechas exactas se discuten, y algunos estudiosos proponen fechas más tardías para varios libros. Este recurso sigue las fechas tradicionales, que concuerdan con lo que los libros dicen de sí mismos y con el hecho de que ninguno describe como pasada la destrucción del templo del año 70, el acontecimiento más grande de la historia judía del siglo I.',
        { ir: { t: 'Ver «¿Por qué casi todo es anterior al 70?» en Cronología del Nuevo Testamento', a: '../../cronologia-nuevo-testamento/#libros/5' } }
      ],
      pensar: 'Los apóstoles escribieron cuando muchos testigos aún vivían. ¿Qué significa para ti que tu fe se apoye en hechos que otros vieron y oyeron?'
    },
    {
      id: 'autores', n: 'Nueve autores, un solo Autor', ref: '2 Timoteo 3:16; 2 Pedro 1:20-21; 3:15-16; Juan 14:26; 16:13', fecha: NT,
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-autores.svg', alt: 'Los nueve autores del Nuevo Testamento con sus libros: Mateo, Marcos, Lucas, Juan, Pablo, el autor de Hebreos, Santiago, Pedro y Judas, unidos por el Espíritu Santo que los inspiró', pie: 'Nueve autores humanos, un solo Espíritu.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los autores y su relación con Jesús',
          cab: ['Autor', 'Quién era', 'Libros'],
          filas: [
            ['Mateo', 'Apóstol, antes publicano', 'Mateo'],
            ['Juan', 'Apóstol, el discípulo amado', 'Juan, 1, 2 y 3 Juan, Apocalipsis'],
            ['Pedro', 'Apóstol, líder de los doce', '1 y 2 Pedro'],
            ['Pablo', 'Apóstol a los gentiles, llamado por el resucitado', '13 cartas'],
            ['Santiago', 'Hermano del Señor, líder en Jerusalén', 'Santiago'],
            ['Judas', 'Hermano del Señor', 'Judas'],
            ['Marcos', 'Compañero de Pedro y de Pablo', 'Marcos'],
            ['Lucas', 'Médico, compañero de Pablo', 'Lucas, Hechos'],
            ['Autor de Hebreos', 'Del círculo de los apóstoles', 'Hebreos']
          ],
          nota: 'Cuatro apóstoles, dos hermanos del Señor y tres colaboradores cercanos de los apóstoles.'
        } }
      ],
      texto: [
        'Los 27 libros tienen nueve autores humanos muy distintos. Un cobrador de impuestos, dos pescadores, un fariseo erudito, un médico gentil, dos hermanos de Jesús que al principio no creyeron en Él, un joven que había abandonado un viaje misionero y un maestro de nombre desconocido. Cada uno escribió con su propio vocabulario, su estilo y su personalidad. Pablo argumenta como un rabino; Lucas investiga como un historiador; Juan contempla; Santiago exhorta como un profeta.',
        { h: 'Cercanos a Jesús' },
        'Como muestra la tabla, todos estuvieron cerca de Jesús o de sus apóstoles. Cuatro fueron apóstoles; dos eran hermanos del Señor; los otros tres fueron colaboradores cercanos de los apóstoles. Esa cercanía fue uno de los criterios con que la iglesia antigua reconoció los libros.',
        { h: 'Un solo Autor' },
        'Detrás de las nueve voces hay una sola: la del Espíritu Santo. Jesús prometió a sus apóstoles que el Espíritu les enseñaría todas las cosas y les recordaría todo lo que Él les había dicho (Jn 14:26), y que los guiaría a toda la verdad (Jn 16:13). Pablo afirma que «toda la Escritura es inspirada por Dios» (2 Ti 3:16), y Pedro, que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo (2 P 1:21). La inspiración no anuló la personalidad de los autores: Dios los usó tal como eran, con su historia y su manera de escribir, para decir exactamente lo que Él quería.',
        'Por eso el Nuevo Testamento tiene una unidad notable. Escrito por nueve personas, en distintos lugares, a lo largo de unos cincuenta años, presenta el mismo Cristo, el mismo evangelio y la misma esperanza.',
        { ir: { t: 'Ver «Los escritos de los apóstoles» en La Palabra de Dios', a: '../../palabra-de-dios/#inspiracion/5' } }
      ],
      pensar: 'Dios usó a un publicano, a pescadores y a un perseguidor para escribir su Palabra. ¿Qué te dice eso sobre cómo puede usarte a ti, con tu historia y tu personalidad?'
    },
    {
      id: 'hilos', n: 'Los hilos que lo unen', ref: 'Hebreos 1:1-3; Hechos 2:33; Efesios 1:22-23; Tito 2:13; Apocalipsis 22:20', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro hilos en los cinco grupos',
          cab: ['', 'Cristo', 'El Espíritu Santo', 'La iglesia', 'La esperanza'],
          filas: [
            ['Evangelios', 'Su vida, muerte y resurrección', 'Lo unge y es prometido (Lc 4:18; Jn 14:16)', 'Llama a los doce: «edificaré mi iglesia» (Mt 16:18)', 'Anuncia su venida (Mt 24:30)'],
            ['Hechos', 'Exaltado a la diestra de Dios', 'Derramado en Pentecostés (Hch 2:4, 33)', 'Nace y se extiende por el mundo', 'Volverá como fue al cielo (Hch 1:11)'],
            ['Cartas de Pablo', 'Cabeza de todo; en Él somos justificados', 'Mora en el creyente, da dones y fruto', 'Cuerpo de Cristo', 'El arrebatamiento y la resurrección (1 Ts 4:16-17)'],
            ['Hebreos y generales', 'Sumo sacerdote; ejemplo en el sufrimiento', 'Inspiró las Escrituras (2 P 1:21)', 'Real sacerdocio, peregrinos', 'El día del Señor y cielos nuevos (2 P 3:13)'],
            ['Apocalipsis', 'El Cordero que vence y reina', 'Habla a las iglesias (Ap 2:7)', 'La esposa del Cordero', 'La nueva Jerusalén (Ap 21–22)']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/1/1-3', ref: 'Hebreos 1:1-3' }
      ],
      texto: [
        'Al recorrer los 27 libros, algunos temas aparecen una y otra vez, como hilos que atraviesan toda la tela. La tabla sigue cuatro de ellos a través de los cinco grupos de libros.',
        { h: 'Cristo, el centro' },
        'El primer hilo es Jesucristo. Los evangelios cuentan lo que hizo; Hechos, lo que sigue haciendo desde el cielo; las cartas explican lo que su obra significa; Apocalipsis muestra su victoria final. Hebreos lo resume: Dios, que antes habló por los profetas, nos ha hablado por el Hijo, el resplandor de su gloria, que efectuó la purificación de nuestros pecados y se sentó a la diestra de la Majestad (He 1:1-3).',
        { h: 'El Espíritu Santo' },
        'El segundo hilo es el Espíritu Santo. Jesús fue concebido por el Espíritu, ungido por Él y lleno de Él. Prometió a sus discípulos que serían bautizados con el Espíritu Santo y recibirían poder (Hch 1:5, 8). En Pentecostés la promesa se cumplió, y a lo largo de Hechos el Espíritu llena, guía, envía y da poder para testificar. Las cartas enseñan que mora en cada creyente, produce su fruto y reparte sus dones para la edificación de la iglesia. El Nuevo Testamento es, de principio a fin, un libro del Espíritu.',
        { h: 'La iglesia' },
        'El tercer hilo es la iglesia. Jesús anunció que la edificaría (Mt 16:18); Hechos cuenta cómo nació y creció; las cartas la describen como cuerpo de Cristo, templo del Espíritu y familia de Dios, y le enseñan a vivir en santidad, unidad y amor. Apocalipsis la muestra como la esposa del Cordero.',
        { h: 'La esperanza' },
        'El cuarto hilo es la esperanza. El Nuevo Testamento mira siempre hacia adelante: Cristo volverá, primero por su iglesia y luego en gloria con ella, para juzgar y reinar. Todos los grupos de libros hablan de esa venida, y la Biblia termina con ella: «Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús» (Ap 22:20).',
        { ir: { t: 'Abrir La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/' } },
        { ir: { t: 'Ver «La esperanza bienaventurada» en Los últimos tiempos', a: '../../escatologia/#panorama/1' } }
      ],
      pensar: 'Cristo, el Espíritu, la iglesia y la esperanza recorren todo el Nuevo Testamento. ¿Cuál de esos cuatro hilos necesitas fortalecer en tu vida cristiana?'
    },
    {
      id: 'leer', n: 'Cómo leer el Nuevo Testamento completo', ref: 'Hechos 17:11; Colosenses 3:16; 2 Timoteo 3:14-17; Apocalipsis 1:3', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Plan', tabla: {
          titulo: 'El Nuevo Testamento en trece semanas',
          cab: ['Semana', 'Lectura', 'Capítulos'],
          filas: [
            ['1', 'Marcos; Gálatas', '22'],
            ['2', 'Mateo 1–20', '20'],
            ['3', 'Mateo 21–28; 1 y 2 Tesalonicenses; Santiago', '21'],
            ['4', 'Lucas 1–21', '21'],
            ['5', 'Lucas 22–24; Hechos 1–17', '20'],
            ['6', 'Hechos 18–28; 1 Corintios 1–9', '20'],
            ['7', '1 Corintios 10–16; 2 Corintios', '20'],
            ['8', 'Romanos; Filipenses', '20'],
            ['9', 'Efesios; Colosenses; Filemón; 1 Timoteo; Tito', '20'],
            ['10', '2 Timoteo; Hebreos; 1 Pedro 1–3', '20'],
            ['11', '1 Pedro 4–5; 2 Pedro; Judas; Juan 1–14', '20'],
            ['12', 'Juan 15–21; 1, 2 y 3 Juan; Apocalipsis 1–6', '20'],
            ['13', 'Apocalipsis 7–22', '16']
          ],
          nota: '260 capítulos en 91 días: unos tres capítulos por día. Las cartas se leen junto a los momentos de Hechos en que se escribieron.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../palabra-de-dios/img/carta-leida.webp', alt: 'Una pequeña congregación del siglo I reunida en el patio de una casa escucha a un hombre que lee en voz alta una carta recién llegada', pie: 'Los primeros cristianos escuchaban las cartas completas, de una sola vez.', origen: 'ia' }
      ],
      texto: [
        'El Nuevo Testamento tiene 260 capítulos. Leyendo unos tres por día, se puede leer completo en trece semanas, como propone la tabla. Leyendo uno por día, en menos de nueve meses. No es una tarea imposible: es una de las mejores inversiones de tiempo que un creyente puede hacer.',
        { h: 'Un orden que ayuda' },
        'El plan no sigue exactamente el orden de la Biblia. Comienza con Marcos, el evangelio más breve, para tener pronto una visión de conjunto de la vida de Jesús. Luego intercala las cartas con los evangelios y con Hechos, más o menos en el orden en que se escribieron: Gálatas y Tesalonicenses al comienzo, Corintios después del capítulo 19 de Hechos, Romanos al final del tercer viaje, las cartas de la prisión y las pastorales después de Hechos. Juan y sus cartas quedan para el final, junto con Apocalipsis, como en la historia.',
        { h: 'Sugerencias' },
        'Lee las cartas breves de una sola vez, como las escuchaban las iglesias. Antes de leer un libro, vuelve a su ficha en este recurso para recordar quién lo escribió, a quién y por qué. Ten a mano un cuaderno para anotar una verdad sobre Dios, un mandamiento para obedecer y una pregunta para estudiar. Pide al Espíritu Santo que te ilumine, porque Él inspiró lo que vas a leer. Y, como los de Berea, escudriña cada día las Escrituras para ver si las cosas son así (Hch 17:11).',
        'Leer en grupo también ayuda. Una familia, un grupo de jóvenes o una célula pueden seguir el mismo plan y conversar una vez por semana sobre lo leído. La palabra de Cristo habita en abundancia cuando se comparte (Col 3:16).',
        { ir: { t: 'Ver «Observar: leer con preguntas» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/2' } }
      ],
      pensar: '«Bienaventurado el que lee» (Ap 1:3). ¿Cuándo comenzarás a leer el Nuevo Testamento completo, y con quién podrías hacerlo?'
    },
    {
      id: 'repaso', n: 'Repaso: ¿qué libro es?', ref: 'Juan 20:31; Hechos 1:8; 1 Tesalonicenses 4:16-17; 2 Timoteo 4:7', fecha: NT,
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-27-libros.svg', alt: 'Los 27 libros del Nuevo Testamento en cinco grupos de colores', pie: 'Los 27 libros del Nuevo Testamento, agrupados como aparecen en la Biblia.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cuatro.svg', alt: 'Cuatro columnas con los cuatro evangelios: Mateo presenta al Rey, Marcos al Siervo, Lucas al Hombre perfecto y Juan al Hijo de Dios', pie: 'Cuatro retratos de Jesús.', origen: 'esquema' }
      ],
      texto: [
        'Para terminar, pon a prueba lo que aprendiste. Cada pregunta describe un libro del Nuevo Testamento. Elige una opción; si te equivocas, la explicación te dirá por qué y podrás intentarlo de nuevo. Puedes volver a la ficha de cualquier libro con el botón de rutas.',
        { ejercicio: {
          pregunta: '1. Su autor dice que lo escribió «para que creáis que Jesús es el Cristo, el Hijo de Dios». ¿Qué libro es?',
          opciones: [
            { t: 'El evangelio de Juan', ok: true, por_que: 'Juan declara su propósito al final del capítulo 20.' },
            { t: 'El evangelio de Mateo', ok: false, por_que: 'Mateo presenta a Jesús como el Mesías prometido, pero esa frase es de Juan (Jn 20:31).' },
            { t: 'La primera carta de Juan', ok: false, por_que: 'Primera de Juan se escribió para que los que creen sepan que tienen vida eterna (1 Jn 5:13).' }
          ],
          explicacion: 'Juan escribió su evangelio para despertar la fe; su primera carta, para dar seguridad a los que ya creen.'
        } },
        { ejercicio: {
          pregunta: '2. Es la carta más urgente de Pablo: no tiene acción de gracias y defiende que el hombre es justificado por la fe y no por las obras de la ley. ¿Cuál es?',
          opciones: [
            { t: 'Romanos', ok: false, por_que: 'Romanos expone la justificación por la fe con calma y orden, y comienza con acción de gracias (Ro 1:8).' },
            { t: 'Gálatas', ok: true, por_que: 'Pablo va directo al problema: «Estoy maravillado…» (Ga 1:6).' },
            { t: 'Efesios', ok: false, por_que: 'Efesios comienza con una gran alabanza (Ef 1:3).' }
          ],
          explicacion: 'Gálatas responde a los judaizantes; Romanos desarrolla el mismo evangelio de manera completa.'
        } },
        { ejercicio: {
          pregunta: '3. Es el único libro del Nuevo Testamento cuyo autor no conocemos. ¿Cuál es?',
          opciones: [
            { t: 'Santiago', ok: false, por_que: 'Lo escribió Jacobo, el hermano del Señor (Stg 1:1).' },
            { t: 'Judas', ok: false, por_que: 'Lo escribió Judas, hermano de Jacobo (Jud 1).' },
            { t: 'Hebreos', ok: true, por_que: 'No tiene saludo con el nombre del autor; ya Orígenes dijo que solo Dios sabe quién la escribió.' }
          ],
          explicacion: 'La autoridad de Hebreos no depende de conocer el nombre de su autor.'
        } },
        { ejercicio: {
          pregunta: '4. Pablo pide a un creyente que reciba a su esclavo fugitivo «como hermano amado». ¿Qué carta es?',
          opciones: [
            { t: 'Tito', ok: false, por_que: 'Tito trata del orden de las iglesias de Creta.' },
            { t: 'Filemón', ok: true, por_que: 'Pablo intercede por Onésimo (Flm 16).' },
            { t: 'Colosenses', ok: false, por_que: 'Colosenses viajó junto con Filemón y menciona a Onésimo (Col 4:9), pero el ruego por él está en Filemón.' }
          ],
          explicacion: 'Filemón muestra cómo el evangelio convierte al amo y al esclavo en hermanos.'
        } },
        { ejercicio: {
          pregunta: '5. Su bosquejo sigue el plan de un versículo: Jerusalén, Judea y Samaria, y hasta lo último de la tierra. ¿Qué libro es?',
          opciones: [
            { t: 'Hechos', ok: true, por_que: 'Hechos 1:8 es el índice del libro.' },
            { t: 'Lucas', ok: false, por_que: 'Lucas termina en Jerusalén; Hechos, su segundo tomo, sigue el plan de Hch 1:8.' },
            { t: 'Romanos', ok: false, por_que: 'Romanos habla de llevar el evangelio a España, pero no sigue ese plan.' }
          ],
          explicacion: 'Hechos cuenta cómo el Espíritu llevó el testimonio de Jerusalén a Roma.'
        } },
        { ejercicio: {
          pregunta: '6. Pablo consuela a una iglesia por sus creyentes que habían muerto y enseña que los vivos serán arrebatados juntamente con ellos. ¿Qué carta es?',
          opciones: [
            { t: '1 Corintios', ok: false, por_que: 'Primera de Corintios enseña la resurrección (1 Co 15), pero el pasaje del arrebatamiento está en 1 Ts 4:13-18.' },
            { t: '2 Timoteo', ok: false, por_que: 'Segunda de Timoteo es el testamento de Pablo.' },
            { t: '1 Tesalonicenses', ok: true, por_que: 'Es el pasaje de 1 Ts 4:13-18.' }
          ],
          explicacion: 'Primera de Tesalonicenses es la enseñanza más clara del arrebatamiento de la iglesia.'
        } },
        { ejercicio: {
          pregunta: '7. Es la última carta de Pablo que conocemos: «He peleado la buena batalla, he acabado la carrera, he guardado la fe». ¿Cuál es?',
          opciones: [
            { t: 'Filipenses', ok: false, por_que: 'Filipenses es de la primera prisión, cuando Pablo esperaba ser liberado (Fil 2:24).' },
            { t: '2 Timoteo', ok: true, por_que: 'Pablo la escribió en su segunda prisión, sabiendo que iba a morir (2 Ti 4:6-7).' },
            { t: 'Hebreos', ok: false, por_que: 'Hebreos habla de correr la carrera (He 12:1), pero su autor es desconocido.' }
          ],
          explicacion: 'Segunda de Timoteo es el testamento de Pablo.'
        } },
        { ejercicio: {
          pregunta: '8. Fue escrito por el hermano del Señor que dirigía la iglesia de Jerusalén y enseña que la fe sin obras está muerta. ¿Qué libro es?',
          opciones: [
            { t: 'Santiago', ok: true, por_que: 'Jacobo, el hermano del Señor, escribió a las doce tribus en la dispersión (Stg 1:1; 2:17).' },
            { t: 'Judas', ok: false, por_que: 'Judas también era hermano del Señor, pero no dirigía la iglesia de Jerusalén ni trata ese tema.' },
            { t: '1 Pedro', ok: false, por_que: 'Pedro escribió desde Roma a creyentes de Asia Menor sobre la esperanza en el sufrimiento.' }
          ],
          explicacion: 'Santiago y Pablo no se contradicen: la fe que salva produce obras.'
        } }
      ],
      pensar: 'Has recorrido los 27 libros del Nuevo Testamento. ¿Cuál quieres leer completo primero, y por qué?'
    }
  ];

  const N = window.__NT;
  delete window.__NT;
  const LINEA = { desde: 25, hasta: 100, hitos: [
    { a: 33, t: 'Cruz y Pentecostés' }, { a: [46, 57], t: 'Viajes de Pablo' }, { a: 64, t: 'Nerón persigue' },
    { a: 70, t: 'Cae el templo' }, { a: 95, t: 'Apocalipsis' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Introducción al Nuevo Testamento',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama', info: 'Qué es el Nuevo Testamento, su mundo, sus géneros, su orden y su canon', estaciones: N.panorama, linea: LINEA },
      { id: 'evangelios', grupo: 'Los libros', n: 'II. Los evangelios', info: 'Mateo, Marcos, Lucas y Juan: cuatro retratos de Jesús', estaciones: N.evangelios, linea: LINEA },
      { id: 'hechos', grupo: 'Los libros', n: 'III. Hechos', info: 'El puente entre los evangelios y las cartas', estaciones: N.hechos, linea: LINEA },
      { id: 'pablo', grupo: 'Los libros', n: 'IV. Las cartas de Pablo', info: 'Trece cartas, de Gálatas a 2 Timoteo, en su contexto', estaciones: N.pablo, linea: LINEA },
      { id: 'generales', grupo: 'Los libros', n: 'V. Hebreos y las cartas generales', info: 'Hebreos, Santiago, Pedro, Juan y Judas', estaciones: N.generales, linea: LINEA },
      { id: 'apocalipsis', grupo: 'Los libros', n: 'VI. Apocalipsis', info: 'La revelación de Jesucristo', estaciones: N.apocalipsis, linea: LINEA },
      { id: 'conjunto', grupo: 'El conjunto', n: 'VII. El Nuevo Testamento como un todo', info: 'Fechas, autores, temas, un plan de lectura y un repaso', estaciones: conjunto, linea: LINEA }
    ]
  };
})();
