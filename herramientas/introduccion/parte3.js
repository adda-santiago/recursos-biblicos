/* Introducción al Nuevo Testamento · parte 3: IV. Las cartas de Pablo */
(() => {
  const ORIENTE = [[33.5, 11], [43.5, 39]];   // de Roma a Siria
  const EGEO = [[33.5, 20.0], [42.2, 37.0]];
  const ASIA_MENOR = [[34.2, 29.0], [41.6, 38.0]];
  const ficha = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Ficha', tabla: { titulo, cab: ['', ''], filas, nota } });
  const bosquejo = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Bosquejo', tabla: { titulo, cab: ['Capítulos', 'Contenido'], filas, nota } });
  const ESTUDIO = 'Esta carta tendrá su propio estudio de libro en el sitio, hoy en preparación.';

  const pablo = [
    {
      id: 'pablo', n: 'Pablo, el escritor', ref: 'Hechos 9:15; Romanos 15:20; 2 Corintios 11:28; 2 Pedro 3:15-16', fecha: [48, 67],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las trece cartas de Pablo en orden aproximado',
          cab: ['Carta', 'Escrita desde', 'Fecha aprox.', 'Momento'],
          filas: [
            ['Gálatas', 'Antioquía (o Éfeso)', 'c. 48–49 (o c. 55)', 'Antes del concilio (o en el tercer viaje)'],
            ['1 y 2 Tesalonicenses', 'Corinto', 'c. 50–51', 'Segundo viaje'],
            ['1 Corintios', 'Éfeso', 'c. 55–56', 'Tercer viaje'],
            ['2 Corintios', 'Macedonia', 'c. 56', 'Tercer viaje'],
            ['Romanos', 'Corinto', 'c. 57', 'Fin del tercer viaje'],
            ['Efesios, Colosenses, Filemón', 'Roma', 'c. 60–61', 'Primera prisión'],
            ['Filipenses', 'Roma', 'c. 61–62', 'Primera prisión'],
            ['1 Timoteo, Tito', 'Macedonia (?)', 'c. 62–64', 'Después de Hechos'],
            ['2 Timoteo', 'Roma', 'c. 66–67', 'Segunda prisión']
          ],
          nota: 'Fechas aproximadas, las de Cronología del Nuevo Testamento. El lugar y la fecha de algunas cartas se discuten.'
        } },
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Las primeras cartas: Gálatas y Tesalonicenses (c. 48–51).', fecha: [48, 51], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-52'], lugares: ['antioquia', 'r-galacia', 'corinto', 'tesalonica'], trazos: ['nt-galatas', 'nt-tesalonicenses'] } },
          { t: 'Las grandes cartas del tercer viaje: Corintios y Romanos (c. 55–57).', fecha: [55, 57], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'corinto', 'filipos', 'roma'], trazos: ['nt-1corintios', 'nt-romanos'] } },
          { t: 'Las cartas de la prisión, desde Roma (c. 60–62).', fecha: [60, 62], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'efeso', 'colosas', 'filipos'], trazos: ['nt-colosenses', 'nt-filipenses'] } },
          { t: 'Las cartas pastorales (c. 62–67).', fecha: [62, 67], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['r-macedonia', 'efeso', 'creta-isla', 'roma'], trazos: ['nt-1timoteo', 'nt-tito', 'nt-2timoteo'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: '../viajes-pablo/img/vp-carta.webp', alt: 'En una casa de Corinto, Pablo dicta una carta a un secretario que escribe en un papiro, mientras Silas y Timoteo escuchan', pie: 'Casi todas las cartas de Pablo nacieron en el camino.', origen: 'ia' }
      ],
      texto: [
        'Trece de los veintisiete libros del Nuevo Testamento llevan el nombre de Pablo. Ningún otro autor bíblico escribió tantos libros. Sus cartas forman casi una cuarta parte del Nuevo Testamento y han dado forma a la doctrina cristiana desde el siglo I.',
        { h: 'El hombre' },
        'Saulo de Tarso fue un fariseo formado en Jerusalén que persiguió a la iglesia hasta que Cristo resucitado le salió al encuentro camino a Damasco. El Señor dijo de él: «instrumento escogido me es éste, para llevar mi nombre en presencia de los gentiles, y de reyes, y de los hijos de Israel» (Hch 9:15). Durante unos treinta años recorrió el imperio fundando iglesias donde Cristo no había sido nombrado (Ro 15:20).',
        { h: 'Cartas de un pastor' },
        'Pablo no escribía tratados para una biblioteca. Escribía a iglesias que había fundado y que no podía visitar, para responder preguntas, corregir errores, animar en la persecución o preparar una visita. Cargaba cada día «la preocupación por todas las iglesias» (2 Co 11:28). Sus cartas son la voz de un pastor a la distancia. Por eso, para entenderlas, ayuda saber en qué momento de su vida las escribió, como muestran la tabla y el mapa.',
        { h: 'Cuatro grupos' },
        'Las cartas pueden agruparse según el momento en que se escribieron. Las primeras, Gálatas y Tesalonicenses, defienden el evangelio de la gracia y enseñan sobre la venida del Señor. Las grandes cartas del tercer viaje, Corintios y Romanos, exponen el evangelio y corrigen la vida de la iglesia. Las cartas de la prisión, escritas desde Roma, exaltan a Cristo y a su iglesia. Las cartas pastorales, a Timoteo y a Tito, ordenan las iglesias para cuando Pablo ya no esté.',
        'Algunos críticos modernos sostienen que no todas las cartas son de Pablo. La iglesia antigua las recibió todas como suyas, y este recurso sigue esa postura; la estación sobre 1 Timoteo y Tito presenta la discusión.',
        { ir: { t: 'Ver «Las cartas en su contexto» en Los viajes de Pablo', a: '../../viajes-pablo/#cartas/1' } },
        { ir: { t: 'Ver «Las trece cartas de Pablo» en Cronología del Nuevo Testamento', a: '../../cronologia-nuevo-testamento/#libros/3' } }
      ],
      pensar: 'Pedro reconoció que en las cartas de Pablo hay «algunas difíciles de entender» (2 P 3:16). ¿Qué te ayudaría a leerlas con más paciencia, siguiendo su argumento completo?'
    },
    {
      id: 'galatas', n: 'Gálatas: libres por la gracia', ref: 'Gálatas 1:6-9; 2:16, 20; 3:28; 5:1, 22-23', fecha: [48, 49],
      visual: [
        ficha('La carta a los Gálatas', [
          ['Autor', 'Pablo (Ga 1:1)'],
          ['Destinatarios', 'Las iglesias de Galacia, probablemente las del sur: Antioquía de Pisidia, Iconio, Listra y Derbe'],
          ['Fecha', 'Hacia el 48–49 d.C., antes del concilio de Jerusalén (se discute)'],
          ['Lugar', 'Antioquía de Siria (o Éfeso, si es posterior)'],
          ['Ocasión', 'Maestros judaizantes enseñaban que los gentiles debían circuncidarse y guardar la ley para ser salvos'],
          ['Tema', 'El hombre es justificado por la fe en Cristo, no por las obras de la ley'],
          ['Versículo clave', 'Gálatas 2:16; también 5:1']
        ]),
        bosquejo('Bosquejo de Gálatas', [
          ['1–2', 'Personal: Pablo defiende su apostolado y su evangelio, recibido de Cristo'],
          ['3–4', 'Doctrinal: Abraham fue justificado por la fe; la ley fue un ayo hasta Cristo'],
          ['5–6', 'Práctico: la libertad cristiana y la vida en el Espíritu']
        ]),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'antioquia-pisidia', 'iconio', 'listra', 'derbe', 'r-galacia'], trazos: ['nt-galatas'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ga/2/16', ref: 'Gálatas 2:16' }
      ],
      texto: [
        'Gálatas es la carta más urgente de Pablo. No tiene acción de gracias al comienzo, como casi todas las demás. Después del saludo, va directo al problema: «Estoy maravillado de que tan pronto os hayáis alejado del que os llamó por la gracia de Cristo, para seguir un evangelio diferente» (Ga 1:6).',
        { h: 'La ocasión' },
        'Después de que Pablo fundó las iglesias de Galacia, llegaron maestros desde Judea que enseñaban que los gentiles debían circuncidarse y guardar la ley de Moisés para ser salvos. También ponían en duda la autoridad de Pablo. Él responde con firmeza, porque estaba en juego el evangelio mismo: si la salvación depende de la ley, la muerte de Cristo fue en vano (Ga 2:21).',
        { h: 'El mensaje' },
        'El centro de la carta es la justificación por la fe: «el hombre no es justificado por las obras de la ley, sino por la fe de Jesucristo» (Ga 2:16). Abraham fue justificado por creer, antes de la ley (Ga 3:6). La ley tuvo un papel, como un ayo que cuida a un niño hasta que llega a la edad adulta, pero vino la fe y ya no estamos bajo ayo (Ga 3:24-25). En Cristo ya no hay judío ni griego, esclavo ni libre, varón ni mujer: todos son uno (Ga 3:28). Esa libertad no es licencia para pecar, sino vida guiada por el Espíritu, que produce su fruto (Ga 5:22-23).',
        { posturas: {
          titulo: '¿A quiénes y cuándo?',
          a: { n: 'Galacia del sur, hacia el 48–49', t: 'Las iglesias serían las del primer viaje, en la provincia romana de Galacia. La carta no menciona el concilio de Jerusalén, que habría resuelto la misma cuestión; por eso se habría escrito antes, y sería la primera carta de Pablo. La visita de Gálatas 2:1-10 sería la de la ofrenda (Hch 11:30).' },
          b: { n: 'Galacia del norte, hacia el 55', t: 'Las iglesias estarían en el antiguo territorio de los gálatas, más al norte, que Pablo habría visitado en su segundo y tercer viaje (Hch 16:6; 18:23). La carta se habría escrito desde Éfeso, y Gálatas 2 describiría el concilio de Hechos 15.' },
          c: 'Este recurso sigue la primera postura, la misma de Los viajes de Pablo, por las razones dadas, y nota que la segunda tiene buenos defensores. El mensaje de la carta es el mismo en las dos.'
        } },
        { ir: { t: 'Ver «Gálatas: libres por la gracia» en Los viajes de Pablo', a: '../../viajes-pablo/#cartas/2' } },
        ESTUDIO
      ],
      pensar: 'Pablo escribió: «Estad, pues, firmes en la libertad con que Cristo nos hizo libres» (Ga 5:1). ¿Hay alguna regla humana que te haga sentir que debes ganarte el amor de Dios?'
    },
    {
      id: 'tesalonicenses', n: '1 y 2 Tesalonicenses: su venida', ref: '1 Tesalonicenses 1:9-10; 4:13-18; 5:1-11; 2 Tesalonicenses 2:1-12; 3:6-13', fecha: [50, 51],
      visual: [
        ficha('Las cartas a los Tesalonicenses', [
          ['Autor', 'Pablo, con Silvano (Silas) y Timoteo (1 Ts 1:1; 2 Ts 1:1)'],
          ['Destinatarios', 'La iglesia de Tesalónica, capital de Macedonia, fundada en el segundo viaje (Hch 17:1-9)'],
          ['Fecha', 'Hacia el 50–51 d.C., con pocos meses de diferencia'],
          ['Lugar', 'Corinto'],
          ['Ocasión', '1 Ts: buenas noticias de Timoteo y preguntas sobre los creyentes que habían muerto. 2 Ts: una enseñanza falsa decía que el día del Señor ya había llegado'],
          ['Tema', 'Vivir en santidad esperando la venida del Señor'],
          ['Versículo clave', '1 Tesalonicenses 4:16-17; 2 Tesalonicenses 2:3']
        ]),
        bosquejo('Bosquejo de las dos cartas', [
          ['1 Ts 1–3', 'Gratitud por una iglesia ejemplar y defensa del ministerio de Pablo'],
          ['1 Ts 4–5', 'Santidad, trabajo, la venida del Señor por los suyos y el día del Señor'],
          ['2 Ts 1', 'Ánimo en la persecución: el juicio justo de Dios'],
          ['2 Ts 2', 'Lo que debe ocurrir antes del día del Señor: la apostasía y el hombre de pecado'],
          ['2 Ts 3', 'Oración, trabajo y disciplina']
        ], 'Cada capítulo de 1 Tesalonicenses termina mencionando la venida del Señor.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['filipos', 'tesalonica', 'berea', 'atenas', 'corinto'], trazos: ['nt-tesalonicenses'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1ts/4/16-17', ref: '1 Tesalonicenses 4:16-17' }
      ],
      texto: [
        'Pablo pasó pocas semanas en Tesalónica. Una persecución lo obligó a salir de noche hacia Berea (Hch 17:10). Preocupado por esa iglesia tan nueva, envió a Timoteo desde Atenas, y cuando este volvió a Corinto con buenas noticias, Pablo escribió la primera carta. Es, con Gálatas, uno de los escritos cristianos más antiguos que tenemos.',
        { h: 'Una iglesia ejemplar' },
        'Los tesalonicenses se habían convertido «de los ídolos a Dios, para servir al Dios vivo y verdadero, y esperar de los cielos a su Hijo» (1 Ts 1:9-10). Esas tres palabras, servir, esperar y convertirse, resumen la carta. A pesar de la persecución, su fe se comentaba en toda Macedonia y Acaya.',
        { h: 'Los que duermen' },
        'Algunos creyentes habían muerto, y la iglesia se preguntaba qué pasaría con ellos cuando Cristo volviera. Pablo responde para que no se entristezcan «como los otros que no tienen esperanza» (1 Ts 4:13). El Señor mismo descenderá del cielo, los muertos en Cristo resucitarán primero, y los que vivan serán arrebatados juntamente con ellos para recibir al Señor en el aire (1 Ts 4:16-17). Este pasaje es la enseñanza más clara del arrebatamiento de la iglesia. Pablo agrega que Dios no nos ha puesto para ira, sino para alcanzar salvación (1 Ts 5:9).',
        { h: 'La segunda carta' },
        'Poco después, alguien enseñó, incluso con una carta falsa atribuida a Pablo, que el día del Señor ya había llegado (2 Ts 2:2). Pablo explica que antes vendrá la apostasía y se manifestará el hombre de pecado, que ahora es detenido. También corrige a quienes habían dejado de trabajar esperando el fin: «Si alguno no quiere trabajar, tampoco coma» (2 Ts 3:10). Esperar al Señor no es quedarse de brazos cruzados.',
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Pablo terminó su enseñanza sobre la venida del Señor diciendo: «alentaos los unos a los otros con estas palabras» (1 Ts 4:18). ¿A quién podrías animar hoy con esa esperanza?'
    },
    {
      id: '1corintios', n: '1 Corintios: una iglesia con dones y problemas', ref: '1 Corintios 1:2, 10; 12:7; 13:13; 14:40; 15:3-4', fecha: [55, 56],
      visual: [
        ficha('La primera carta a los Corintios', [
          ['Autor', 'Pablo, con Sóstenes (1 Co 1:1)'],
          ['Destinatarios', 'La iglesia de Corinto, fundada en el segundo viaje (Hch 18:1-18)'],
          ['Fecha', 'Hacia el 56 d.C.'],
          ['Lugar', 'Éfeso, en el tercer viaje (1 Co 16:8)'],
          ['Ocasión', 'Noticias de divisiones e inmoralidad, y una carta de la iglesia con preguntas (1 Co 1:11; 7:1)'],
          ['Tema', 'Una iglesia santificada en Cristo, que debe vivir en unidad, santidad, amor y orden'],
          ['Versículo clave', '1 Corintios 1:2; también 13:13']
        ]),
        bosquejo('Bosquejo de 1 Corintios', [
          ['1–4', 'Las divisiones y la sabiduría de la cruz'],
          ['5–6', 'Inmoralidad y pleitos entre hermanos'],
          ['7', 'Matrimonio y soltería'],
          ['8–10', 'La carne sacrificada a los ídolos y la libertad cristiana'],
          ['11', 'El orden en el culto y la Cena del Señor'],
          ['12–14', 'Los dones espirituales, el amor y el orden'],
          ['15', 'La resurrección'],
          ['16', 'La ofrenda para Jerusalén y saludos']
        ], 'Desde el capítulo 7, Pablo responde las preguntas de la carta de los corintios: «En cuanto a…»'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'corinto', 'cencrea', 'atenas'], trazos: ['nt-1corintios'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-pablo-galion.webp', alt: 'Pablo de pie ante el procónsul Galión, sentado en una tribuna de piedra elevada en el foro de Corinto', pie: 'Corinto, la ciudad de Galión (Hch 18:12), era un puerto rico y cosmopolita.', origen: 'ia' }
      ],
      texto: [
        'Corinto era una ciudad portuaria, rica y famosa por su inmoralidad. Pablo vivió allí un año y medio, y nació una iglesia numerosa y llena de dones (1 Co 1:7). Pero también tenía muchos problemas. Primera de Corintios es la carta en que Pablo los enfrenta uno por uno.',
        { h: 'Los problemas' },
        'La iglesia estaba dividida en grupos que seguían a distintos líderes: «Yo soy de Pablo; y yo de Apolos; y yo de Cefas; y yo de Cristo» (1 Co 1:12). Toleraba un caso de inmoralidad grave, los hermanos se llevaban a juicio ante los tribunales y la Cena del Señor se había convertido en ocasión de desigualdad. Además, la iglesia había escrito a Pablo con preguntas sobre el matrimonio, la comida ofrecida a los ídolos, los dones espirituales y la resurrección.',
        { h: 'La respuesta' },
        'Pablo responde siempre desde la cruz y desde la identidad de los creyentes. Los saluda como «santificados en Cristo Jesús, llamados a ser santos» (1 Co 1:2): ya pertenecen a Dios, y deben vivir como tales. A las divisiones opone la sabiduría de la cruz. A la inmoralidad, que el cuerpo es templo del Espíritu Santo (1 Co 6:19).',
        { h: 'Los dones y el amor' },
        'Los capítulos 12 a 14 son la enseñanza más amplia de la Biblia sobre los dones del Espíritu. Pablo no los prohíbe ni los menosprecia: «a cada uno le es dada la manifestación del Espíritu para provecho» (1 Co 12:7), y desea que todos hablen en lenguas y, más aún, que profeticen (1 Co 14:5). Pero los dones deben ejercerse con amor, el camino más excelente (1 Co 13), y con orden: «hágase todo decentemente y con orden» (1 Co 14:40).',
        { h: 'La resurrección' },
        'La carta culmina con el capítulo 15, que resume el evangelio, enumera a los testigos del resucitado y explica la resurrección del cuerpo. Si Cristo no resucitó, la fe es vana; pero Cristo ha resucitado, primicias de los que durmieron (1 Co 15:17-20).',
        ESTUDIO
      ],
      pensar: 'Pablo puso el capítulo del amor en medio de su enseñanza sobre los dones. ¿Cómo se ve el amor en la manera en que tú usas los dones que Dios te dio?'
    },
    {
      id: '2corintios', n: '2 Corintios: el poder en la debilidad', ref: '2 Corintios 2:4; 4:7; 5:17-21; 8:9; 11:23-33; 12:9-10', fecha: 56,
      visual: [
        ficha('La segunda carta a los Corintios', [
          ['Autor', 'Pablo, con Timoteo (2 Co 1:1)'],
          ['Destinatarios', 'La iglesia de Corinto y los santos de toda Acaya'],
          ['Fecha', 'Hacia el 56 d.C.'],
          ['Lugar', 'Macedonia, en el tercer viaje (2 Co 7:5-7)'],
          ['Ocasión', 'Tito trae noticias: la mayoría se ha arrepentido, pero falsos apóstoles atacan a Pablo'],
          ['Tema', 'El ministerio del nuevo pacto: el poder de Dios se perfecciona en la debilidad'],
          ['Versículo clave', '2 Corintios 12:9; también 4:7']
        ]),
        bosquejo('Bosquejo de 2 Corintios', [
          ['1–7', 'El ministerio de Pablo: consuelo, gloria del nuevo pacto, reconciliación'],
          ['8–9', 'La ofrenda para los santos de Jerusalén'],
          ['10–13', 'Defensa frente a los falsos apóstoles: gloriarse en la debilidad']
        ], 'Es la carta más personal de Pablo.'),
        { tipo: 'imagen', titulo: 'Foto', src: 'img/foto-p46.jpg', alt: 'Una hoja de papiro con una columna de letras griegas mayúsculas en tinta oscura; el borde inferior está roto', pie: 'Una hoja del papiro 46, hacia el año 200, con 2 Corintios 11:33–12:9, la huida en el canasto y «Bástate mi gracia».', origen: 'foto', licencia: 'Biblioteca Chester Beatty, Dublín. Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'troas', 'filipos', 'tesalonica', 'corinto'], trazos: ['nt-2corintios'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2co/12/9-10', ref: '2 Corintios 12:9-10' }
      ],
      texto: [
        'Entre la primera y la segunda carta, la relación de Pablo con Corinto pasó por momentos muy duros. Hizo una visita dolorosa y escribió una carta «con muchas lágrimas» (2 Co 2:4), que no se conserva. Luego, inquieto, salió de Éfeso a esperar noticias. En Macedonia lo encontró Tito: la mayoría de la iglesia se había arrepentido (2 Co 7:6-7). Con alivio, Pablo escribió esta carta, la más personal de todas.',
        { h: 'Un tesoro en vasos de barro' },
        'Unos maestros que se presentaban como «grandes apóstoles» se burlaban de Pablo. Decían que sus cartas eran fuertes, pero su presencia débil y su palabra menospreciable (2 Co 10:10). Pablo no responde mostrando su fuerza, sino su debilidad: «tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros» (2 Co 4:7). Enumera azotes, naufragios, hambre y peligros, y cuenta cómo huyó de Damasco descolgado en un canasto (2 Co 11:23-33).',
        { h: 'Bástate mi gracia' },
        'Pablo recibió revelaciones extraordinarias, pero también un aguijón en la carne. Tres veces pidió que se le quitara, y el Señor le respondió: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Co 12:9). La foto muestra ese pasaje en el papiro 46, una de las copias más antiguas de las cartas de Pablo.',
        { h: 'El ministerio de la reconciliación' },
        'La carta tiene también algunas de las páginas más hermosas sobre el evangelio. El ministerio del nuevo pacto tiene una gloria mayor que el de Moisés (2 Co 3). «Si alguno está en Cristo, nueva criatura es» (2 Co 5:17), y Dios nos dio el ministerio de la reconciliación. Los capítulos 8 y 9, sobre la ofrenda para los pobres de Jerusalén, son la enseñanza más amplia del Nuevo Testamento sobre la generosidad: Cristo, siendo rico, se hizo pobre por nosotros (2 Co 8:9), y Dios ama al dador alegre (2 Co 9:7).',
        { ir: { t: 'Ver «El aguijón y la gracia suficiente» en Los viajes de Pablo', a: '../../viajes-pablo/#sufrimientos/3' } },
        ESTUDIO
      ],
      pensar: 'Dios no le quitó el aguijón a Pablo, pero le dio su gracia. ¿En qué debilidad tuya podría perfeccionarse el poder de Cristo?'
    },
    {
      id: 'romanos', n: 'Romanos: el evangelio de la justicia de Dios', ref: 'Romanos 1:16-17; 3:21-26; 5:1; 8:1; 11:25-27; 12:1-2; 15:24; 16:1, 22', fecha: 57,
      visual: [
        ficha('La carta a los Romanos', [
          ['Autor', 'Pablo, por medio de su secretario Tercio (Ro 1:1; 16:22)'],
          ['Destinatarios', 'La iglesia de Roma, de judíos y gentiles, que Pablo no había fundado'],
          ['Fecha', 'Hacia el 57 d.C.'],
          ['Lugar', 'Corinto, en casa de Gayo, al final del tercer viaje (Ro 16:23); la llevó Febe, de Cencrea (Ro 16:1)'],
          ['Ocasión', 'Pablo planea ir a Roma y desde allí a España, y presenta el evangelio que predica (Ro 15:22-29)'],
          ['Tema', 'En el evangelio se revela la justicia de Dios, que justifica por la fe a judíos y gentiles'],
          ['Versículo clave', 'Romanos 1:16-17']
        ]),
        bosquejo('Bosquejo de Romanos', [
          ['1:1-17', 'Introducción y tema'],
          ['1:18–3:20', 'Pecado: todo el mundo es culpable ante Dios'],
          ['3:21–5:21', 'Justificación: por la fe en Cristo, como Abraham'],
          ['6–8', 'Santificación: libres del pecado y de la ley, vida en el Espíritu'],
          ['9–11', 'Israel en el plan de Dios: su caída, su remanente y su restauración futura'],
          ['12–16', 'La vida del creyente: sacrificio vivo, amor, autoridades, débiles y fuertes; planes y saludos']
        ]),
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-romanos-tercio.webp', alt: 'En una habitación de una casa de Corinto, Pablo, de pie, dicta con la mano levantada a Tercio, un secretario sentado que escribe en un papiro sobre una mesa baja, a la luz de una lámpara', pie: '«Yo Tercio, que escribí la epístola, os saludo en el Señor» (Ro 16:22).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[33, 8], [44, 30]], capas: ['roma-14', 'iglesia-57'], lugares: ['corinto', 'cencrea', 'roma'], trazos: ['nt-romanos'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ro/1/16-17', ref: 'Romanos 1:16-17' }
      ],
      texto: [
        'Romanos es la exposición más completa y ordenada del evangelio en toda la Biblia. A diferencia de las demás cartas de Pablo, se dirige a una iglesia que él no había fundado ni visitado. Por eso no responde a problemas concretos tanto como presenta, de principio a fin, el mensaje que Pablo predicaba.',
        { h: 'La ocasión' },
        'Al terminar su tercer viaje, Pablo pasó tres meses en Corinto. Desde allí planeaba llevar a Jerusalén la ofrenda de las iglesias, y luego viajar a España, pasando por Roma (Ro 15:24-25). Quería que la iglesia de Roma conociera su evangelio y lo ayudara en esa misión. Dictó la carta a Tercio, y la llevó Febe, una servidora de la iglesia de Cencrea, el puerto de Corinto (Ro 16:1).',
        { h: 'El argumento' },
        'El tema está en el capítulo 1: el evangelio «es poder de Dios para salvación a todo aquel que cree», porque en él se revela la justicia de Dios por fe (Ro 1:16-17). Pablo muestra primero que todos, judíos y gentiles, son culpables: «todos pecaron, y están destituidos de la gloria de Dios» (Ro 3:23). Luego explica que Dios justifica gratuitamente por su gracia, mediante la redención en Cristo. El justificado tiene paz con Dios (Ro 5:1), es libre del dominio del pecado y vive por el Espíritu: «ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1).',
        { h: 'Israel y la vida cristiana' },
        'En los capítulos 9 a 11, Pablo se pregunta si Dios desechó a Israel. Responde que no: hay un remanente escogido por gracia, el endurecimiento de Israel es parcial y temporal, y «todo Israel será salvo» cuando haya entrado la plenitud de los gentiles (Ro 11:25-26). Los capítulos 12 a 16 aplican el evangelio a la vida: presentar el cuerpo en sacrificio vivo, amar sin fingimiento, someterse a las autoridades y recibir al hermano débil.',
        'Romanos ha cambiado la historia. Por ella se convirtieron Agustín de Hipona en el siglo IV y Martín Lutero en el XVI, y al oír leer su prefacio a Romanos, Juan Wesley sintió su corazón «extrañamente ardido» en 1738.',
        { ir: { t: 'Ver «Israel y la iglesia» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/7' } },
        ESTUDIO
      ],
      pensar: 'Pablo dijo: «no me avergüenzo del evangelio» (Ro 1:16). ¿Hay situaciones en las que te cuesta hablar de él? ¿Qué te enseña Romanos sobre su poder?'
    },
    {
      id: 'efesios-colosenses', n: 'Efesios y Colosenses: Cristo y su iglesia', ref: 'Efesios 1:3-14; 2:8-10; 4:1-16; 6:10-20; Colosenses 1:15-20; 2:8-10; 4:7-9, 16', fecha: [60, 61],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Dos cartas gemelas',
          cab: ['', 'Efesios', 'Colosenses'],
          filas: [
            ['Autor', 'Pablo, prisionero (Ef 3:1)', 'Pablo, con Timoteo (Col 1:1)'],
            ['Destinatarios', 'La iglesia de Éfeso y, probablemente, otras iglesias de Asia', 'La iglesia de Colosas, fundada por Epafras (Col 1:7)'],
            ['Fecha y lugar', 'Hacia el 60–61, desde Roma', 'Hacia el 60–61, desde Roma'],
            ['Mensajero', 'Tíquico (Ef 6:21)', 'Tíquico, con Onésimo (Col 4:7-9)'],
            ['Ocasión', 'Fortalecer a las iglesias en su identidad en Cristo', 'Una enseñanza que mezclaba filosofía, ritos judíos y culto a los ángeles'],
            ['Tema', 'La iglesia, cuerpo de Cristo, unida en Él', 'Cristo, cabeza de todo, plenitud de Dios'],
            ['Versículo clave', 'Efesios 2:8-10', 'Colosenses 2:9-10']
          ],
          nota: 'Unos setenta versículos de Efesios tienen paralelo en Colosenses.'
        } },
        bosquejo('Bosquejo de las dos cartas', [
          ['Ef 1–3', 'Lo que Dios hizo: bendiciones en Cristo, salvos por gracia, judíos y gentiles en un cuerpo'],
          ['Ef 4–6', 'Cómo vivir: unidad y dones, vida nueva, familia, armadura de Dios'],
          ['Col 1–2', 'La supremacía de Cristo y la advertencia contra la falsa enseñanza'],
          ['Col 3–4', 'Buscar las cosas de arriba: vida nueva y relaciones']
        ], 'Las dos cartas pasan de la doctrina (lo que Dios hizo) a la práctica (cómo vivir).'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'efeso', 'colosas', 'laodicea', 'hierapolis'], trazos: ['nt-efesios', 'nt-colosenses'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-pablo-roma.webp', alt: 'Pablo, ya mayor, encadenado por la muñeca a un soldado romano, enseña a un grupo de hombres y mujeres en una casa alquilada en Roma', pie: 'Desde la casa alquilada de Roma salieron las cartas de la prisión (Hch 28:30-31).', origen: 'ia' }
      ],
      texto: [
        'Durante sus dos años de prisión en Roma, Pablo escribió cuatro cartas: Efesios, Colosenses, Filemón y Filipenses. Por eso se llaman cartas de la prisión. Las tres primeras viajaron juntas, en manos de Tíquico y de Onésimo. Efesios y Colosenses son casi gemelas: comparten temas, estructura y muchas frases.',
        { h: 'Efesios: la iglesia, cuerpo de Cristo' },
        'Efesios comienza con una alabanza: Dios «nos bendijo con toda bendición espiritual en los lugares celestiales en Cristo» (Ef 1:3). En Cristo fuimos escogidos, redimidos y sellados con el Espíritu Santo. Somos salvos «por gracia… por medio de la fe; y esto no de vosotros, pues es don de Dios» (Ef 2:8). Y Dios hizo algo nuevo: judíos y gentiles, antes enemigos, forman un solo cuerpo. La segunda mitad enseña a vivir esa unidad: un cuerpo, un Espíritu, un Señor, una fe (Ef 4:4-5), con dones dados para edificar a la iglesia. Termina con la armadura de Dios para estar firmes contra las asechanzas del diablo (Ef 6:11).',
        'Algunos manuscritos antiguos no traen las palabras «en Éfeso» en el primer versículo, y la carta no tiene saludos personales, aunque Pablo vivió tres años allí. Por eso muchos piensan que fue una carta circular para varias iglesias de Asia, que se guardó en Éfeso.',
        { h: 'Colosenses: Cristo sobre todo' },
        'Pablo no conocía en persona la iglesia de Colosas, fundada por Epafras. Allí circulaba una enseñanza que mezclaba filosofía, normas de comida y días de fiesta, y culto a los ángeles, como si Cristo no bastara. Pablo responde con uno de los grandes himnos sobre Cristo: Él es la imagen del Dios invisible, por Él fueron creadas todas las cosas, y es la cabeza de la iglesia (Col 1:15-18). «En él habita corporalmente toda la plenitud de la Deidad, y vosotros estáis completos en él» (Col 2:9-10). Quien tiene a Cristo no necesita nada más.',
        { posturas: {
          titulo: '¿Desde dónde se escribieron las cartas de la prisión?',
          a: { n: 'Desde Roma', t: 'Es la postura tradicional. Pablo estuvo dos años preso en Roma con cierta libertad para recibir visitas (Hch 28:30-31). Filipenses menciona el pretorio y a los de la casa de César (Fil 1:13; 4:22).' },
          b: { n: 'Desde Éfeso o Cesarea', t: 'Algunos estudiosos piensan en una prisión en Éfeso, que Hechos no narra, o en los dos años en Cesarea (Hch 24:27). Éfeso queda más cerca de Colosas y de Filipos, lo que facilitaría los viajes que las cartas mencionan.' },
          c: 'Este recurso sigue la postura tradicional, la de Roma, como Los viajes de Pablo. El contenido de las cartas no cambia con el lugar.'
        } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Colosenses dice que en Cristo estás completo (Col 2:10). ¿Buscas a veces en otras cosas lo que ya tienes en Él?'
    },
    {
      id: 'filemon', n: 'Filemón: de esclavo a hermano', ref: 'Filemón 1-25; Colosenses 4:9', fecha: [60, 61],
      visual: [
        ficha('La carta a Filemón', [
          ['Autor', 'Pablo, prisionero, con Timoteo (Flm 1)'],
          ['Destinatarios', 'Filemón, creyente de Colosas, con Apia, Arquipo y la iglesia en su casa (Flm 1-2)'],
          ['Fecha', 'Hacia el 60–61 d.C.'],
          ['Lugar', 'Roma, junto con Colosenses'],
          ['Ocasión', 'Onésimo, esclavo de Filemón, había huido; se convirtió con Pablo y ahora vuelve'],
          ['Tema', 'El evangelio reconcilia y hace hermanos al amo y al esclavo'],
          ['Versículo clave', 'Filemón 16']
        ]),
        bosquejo('Bosquejo de Filemón', [
          ['1-7', 'Saludo y gratitud por el amor de Filemón'],
          ['8-21', 'El ruego por Onésimo: recíbelo como a mí mismo'],
          ['22-25', 'Planes y saludos']
        ], 'Es la carta más breve de Pablo: un solo capítulo de 25 versículos.'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-casa-iglesia.webp', alt: 'Una iglesia del siglo I reunida en el patio de una casa grecorromana: hombres, mujeres, niños y esclavos sentados juntos alrededor de una mesa con pan', pie: 'La carta se dirigía también a «la iglesia que está en tu casa» (Flm 2).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@flm/1/15-17', ref: 'Filemón 15-17' }
      ],
      texto: [
        'Filemón es una carta breve y personal, pero dice mucho sobre el poder del evangelio. Filemón era un creyente de Colosas, probablemente convertido por medio de Pablo, que tenía una iglesia en su casa. Onésimo, su esclavo, había huido, quizá después de causarle algún perjuicio (Flm 18). En Roma encontró a Pablo y se convirtió. Ahora volvía a su amo, con Tíquico, llevando esta carta.',
        { h: 'Un ruego' },
        'En el imperio romano, un esclavo fugitivo podía ser castigado con dureza. Pablo podría haber ordenado a Filemón lo que convenía, pero prefiere rogarle por amor (Flm 8-9). Hace un juego de palabras con el nombre Onésimo, que significa útil: «en otro tiempo te fue inútil, pero ahora a ti y a mí nos es útil» (Flm 11). Le pide que lo reciba «no ya como esclavo, sino como más que esclavo, como hermano amado» (Flm 16). Y se ofrece a pagar lo que Onésimo deba: «ponlo a mi cuenta» (Flm 18).',
        { h: 'Una imagen del evangelio' },
        'Lo que Pablo hace por Onésimo es una imagen de lo que Cristo hizo por nosotros. Intercede por el culpable, carga su deuda y lo presenta como hermano. Martín Lutero escribió que todos somos Onésimos de Dios.',
        { h: 'El evangelio y la esclavitud' },
        'Pablo no lanzó una campaña contra la esclavitud, que estaba en la base de la economía romana. Pero sembró algo más profundo: en Cristo ya no hay esclavo ni libre (Ga 3:28), y el amo y el esclavo se sientan a la misma mesa como hermanos. Esa verdad terminó socavando la institución. Siglos después, muchos cristianos que lucharon contra la esclavitud, como William Wilberforce, lo hicieron movidos por el evangelio.',
        'Una antigua tradición menciona a un Onésimo obispo de Éfeso a comienzos del siglo II. No es seguro que sea el mismo, pero sería un hermoso final para la historia del esclavo que volvió.',
        ESTUDIO
      ],
      pensar: '«Ponlo a mi cuenta» (Flm 18). ¿Con quién necesitas reconciliarte, y qué te enseña el ejemplo de Pablo sobre cómo dar el primer paso?'
    },
    {
      id: 'filipenses', n: 'Filipenses: la carta del gozo', ref: 'Filipenses 1:12-21; 2:5-11; 3:7-14; 4:4-13, 18', fecha: [61, 62],
      visual: [
        ficha('La carta a los Filipenses', [
          ['Autor', 'Pablo, con Timoteo (Fil 1:1)'],
          ['Destinatarios', 'La iglesia de Filipos, la primera de Europa (Hch 16:12-40)'],
          ['Fecha', 'Hacia el 61–62 d.C., al final de la primera prisión'],
          ['Lugar', 'Roma (Fil 1:13; 4:22)'],
          ['Ocasión', 'Agradecer la ofrenda que llevó Epafrodito y animar a la unidad (Fil 4:18; 2:25-30)'],
          ['Tema', 'El gozo en Cristo, en toda circunstancia'],
          ['Versículo clave', 'Filipenses 1:21; también 4:4']
        ]),
        bosquejo('Bosquejo de Filipenses', [
          ['1', 'Gozo en la prisión: el evangelio avanza; para mí el vivir es Cristo'],
          ['2', 'Gozo en el servicio: el ejemplo de Cristo, de Timoteo y de Epafrodito'],
          ['3', 'Gozo en conocer a Cristo: todo lo demás es pérdida'],
          ['4', 'Gozo en toda situación: paz, contentamiento y gratitud por la ofrenda']
        ], 'Las palabras gozo y regocijarse aparecen unas quince veces en cuatro capítulos.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'filipos', 'tesalonica'], trazos: ['nt-filipenses'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-lidia.webp', alt: 'Junto a un río en las afueras de Filipos, Lidia, con un manto de púrpura, escucha a Pablo, rodeada de otras mujeres sentadas en la orilla', pie: 'La iglesia de Filipos comenzó junto a un río, con Lidia (Hch 16:13-15).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@fil/2/5-11', ref: 'Filipenses 2:5-11' }
      ],
      texto: [
        'La iglesia de Filipos tenía un lugar especial en el corazón de Pablo. Nació junto a un río con Lidia, una comerciante de púrpura, creció con un carcelero que creyó una noche de terremoto, y fue la única que ayudó a Pablo con ofrendas una y otra vez (Fil 4:15-16). Cuando supo que estaba preso en Roma, le envió una ofrenda por medio de Epafrodito. Pablo le responde con esta carta.',
        { h: 'Gozo encadenado' },
        'Filipenses es la carta del gozo, escrita por un hombre encadenado que no sabía si viviría o moriría. «Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!» (Fil 4:4). Pablo cuenta que su prisión había servido para que el evangelio se conociera en todo el pretorio, y que muchos hermanos predicaban con más valor (Fil 1:12-14). Su gozo no dependía de las circunstancias, sino de Cristo: «para mí el vivir es Cristo, y el morir es ganancia» (Fil 1:21).',
        { h: 'El sentir de Cristo' },
        'En la iglesia había algunas tensiones, y dos hermanas, Evodia y Síntique, no se ponían de acuerdo (Fil 4:2). Pablo llama a la humildad con el ejemplo supremo: Cristo, siendo en forma de Dios, se despojó a sí mismo, tomó forma de siervo y se humilló hasta la muerte de cruz; por eso Dios lo exaltó hasta lo sumo (Fil 2:5-11). Es uno de los pasajes más importantes del Nuevo Testamento sobre la persona de Cristo.',
        { h: 'Contentamiento' },
        'En el último capítulo, Pablo agradece la ofrenda, pero aclara que ha aprendido a contentarse en cualquier situación, en abundancia o en necesidad. En ese contexto dice: «Todo lo puedo en Cristo que me fortalece» (Fil 4:13). No es una promesa de éxito en cualquier proyecto, sino la fuerza para vivir con fidelidad tanto en la escasez como en la abundancia.',
        { ir: { t: 'Ver el taller sobre Filipenses 4:13 en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#taller/3' } },
        ESTUDIO
      ],
      pensar: 'Pablo aprendió a contentarse en cualquier situación (Fil 4:11). ¿En qué área de tu vida necesitas aprender ese contentamiento?'
    },
    {
      id: '1timoteo-tito', n: '1 Timoteo y Tito: el orden de la iglesia', ref: '1 Timoteo 1:3; 3:1-15; 4:12; Tito 1:5-9; 2:11-14; 3:5', fecha: [62, 64],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Dos cartas pastorales',
          cab: ['', '1 Timoteo', 'Tito'],
          filas: [
            ['Autor', 'Pablo (1 Ti 1:1)', 'Pablo (Tit 1:1)'],
            ['Destinatario', 'Timoteo, en Éfeso (1 Ti 1:3)', 'Tito, en Creta (Tit 1:5)'],
            ['Fecha', 'Hacia el 62–64 d.C.', 'Hacia el 62–64 d.C.'],
            ['Lugar', 'Macedonia, probablemente', 'Macedonia o Grecia; Pablo piensa invernar en Nicópolis (Tit 3:12)'],
            ['Ocasión', 'Falsos maestros en Éfeso', 'Iglesias nuevas sin ancianos en Creta'],
            ['Tema', 'Cómo conducirse en la casa de Dios', 'Sana doctrina que produce buenas obras'],
            ['Versículo clave', '1 Timoteo 3:15', 'Tito 2:11-13']
          ]
        } },
        bosquejo('Bosquejo de las dos cartas', [
          ['1 Ti 1', 'Contra la falsa doctrina; el testimonio de Pablo'],
          ['1 Ti 2–3', 'La oración, el culto y los requisitos de obispos y diáconos'],
          ['1 Ti 4–6', 'El buen ministro, las viudas, los ancianos, los esclavos y los ricos'],
          ['Tit 1', 'Ancianos en cada ciudad y los falsos maestros de Creta'],
          ['Tit 2–3', 'La gracia que enseña a vivir; salvos por misericordia']
        ]),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[33.5, 17], [42.5, 31]], capas: ['roma-14', 'iglesia-62'], lugares: ['filipos', 'efeso', 'creta-isla', 'nicopolis'], trazos: ['nt-1timoteo', 'nt-tito'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../viajes-pablo/img/vp-creta.webp', alt: 'En el puerto de una ciudad de Creta, Pablo se despide de Tito, un hombre joven y firme, y le entrega un rollo, mientras un barco espera junto al muelle', pie: '«Por esta causa te dejé en Creta» (Tit 1:5).', origen: 'ia' }
      ],
      texto: [
        'Las cartas a Timoteo y a Tito se llaman pastorales porque tratan del cuidado de las iglesias y de sus líderes. No se dirigen a congregaciones, sino a dos colaboradores de confianza encargados de organizarlas.',
        { h: 'El contexto' },
        'Hechos termina con Pablo preso en Roma, pero las pastorales mencionan viajes que no caben en Hechos: Pablo dejó a Timoteo en Éfeso al ir a Macedonia (1 Ti 1:3) y a Tito en Creta (Tit 1:5). La explicación más probable es que Pablo fue liberado hacia el 62, como esperaba (Fil 2:24), y visitó otra vez las iglesias de Oriente. Clemente de Roma, hacia el año 96, dice que Pablo llegó «al límite de Occidente», lo que muchos entienden como España.',
        { h: 'Sana doctrina y buen orden' },
        'En Éfeso, algunos enseñaban fábulas, genealogías y una ley mal entendida. Pablo encarga a Timoteo que los corrija y que sea ejemplo de los creyentes, aunque sea joven (1 Ti 4:12). Le explica cómo conducirse «en la casa de Dios, que es la iglesia del Dios viviente, columna y baluarte de la verdad» (1 Ti 3:15). Las dos cartas dan los requisitos de los obispos o ancianos y de los diáconos, que se refieren más al carácter que a los talentos. Tito recibe la misma tarea en Creta: establecer ancianos en cada ciudad.',
        'La sana doctrina siempre produce una vida transformada: la gracia de Dios se ha manifestado para salvación, «enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente, aguardando la esperanza bienaventurada» (Tit 2:11-13).',
        { posturas: {
          titulo: '¿Escribió Pablo las cartas pastorales?',
          a: { n: 'Las escribió otro, con el nombre de Pablo', t: 'Muchos críticos modernos piensan que las pastorales fueron escritas a fines del siglo I por un discípulo de Pablo que usó su nombre. Señalan diferencias de vocabulario y de estilo, una organización de la iglesia que les parece más tardía y viajes que no caben en Hechos.' },
          b: { n: 'Las escribió Pablo', t: 'La iglesia antigua las recibió sin dudar como cartas de Pablo, y ya se citan a comienzos del siglo II. Las diferencias de estilo se explican por el tema, los destinatarios, la edad de Pablo y el uso de un secretario, quizá Lucas (2 Ti 4:11). Los ancianos y diáconos ya existían en tiempos de Hechos (Hch 14:23; Fil 1:1), y los viajes caben después de la primera prisión.' },
          c: 'Este recurso sigue la segunda postura. Las cartas dicen ser de Pablo y contienen detalles personales difíciles de inventar, como el capote olvidado en Troas (2 Ti 4:13). Una carta escrita con un nombre falso para engañar no sería coherente con su propia enseñanza sobre la verdad. El mismo razonamiento vale para Efesios, Colosenses y 2 Tesalonicenses, también discutidas por algunos críticos.'
        } },
        { ir: { t: 'Ver «Las cartas pastorales» en Los viajes de Pablo', a: '../../viajes-pablo/#cartas/7' } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Los requisitos de los líderes hablan más del carácter que de los talentos (1 Ti 3:1-7). ¿Qué rasgo de esa lista te gustaría que Dios desarrollara en ti?'
    },
    {
      id: '2timoteo', n: '2 Timoteo: he acabado la carrera', ref: '2 Timoteo 1:5-8; 2:2; 3:14-17; 4:1-8, 9-22', fecha: [66, 67],
      visual: [
        ficha('La segunda carta a Timoteo', [
          ['Autor', 'Pablo, preso por segunda vez (2 Ti 1:8, 16-17)'],
          ['Destinatario', 'Timoteo, probablemente en Éfeso'],
          ['Fecha', 'Hacia el 66–67 d.C., poco antes de su muerte'],
          ['Lugar', 'Roma, en una prisión más dura que la primera'],
          ['Ocasión', 'Pablo sabe que va a morir y pide a Timoteo que venga pronto (2 Ti 4:6, 9)'],
          ['Tema', 'Guardar el depósito de la fe y pasarlo a otros, aunque cueste sufrir'],
          ['Versículo clave', '2 Timoteo 4:7; también 3:16']
        ]),
        bosquejo('Bosquejo de 2 Timoteo', [
          ['1', 'No te avergüences: aviva el don de Dios'],
          ['2', 'Esfuérzate: soldado, atleta y labrador; enseña a otros'],
          ['3', 'Persiste: tiempos peligrosos y la Escritura inspirada'],
          ['4', 'Predica la palabra: el testamento de Pablo y sus últimos encargos']
        ], 'Es la última carta de Pablo que conocemos.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'troas', 'efeso', 'mileto'], trazos: ['nt-2timoteo'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../viajes-pablo/img/vp-segunda-prision.webp', alt: 'En una celda de piedra fría y oscura en Roma, Pablo, anciano y encadenado, dicta una carta a Lucas, que escribe a la luz de una pequeña lámpara', pie: '«Sólo Lucas está conmigo» (2 Ti 4:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2ti/4/6-8', ref: '2 Timoteo 4:6-8' }
      ],
      texto: [
        'Segunda de Timoteo es el testamento de Pablo. En el año 64, un gran incendio destruyó buena parte de Roma, y Nerón culpó a los cristianos. Comenzó una persecución sangrienta. Pablo fue arrestado de nuevo, y esta vez no había casa alquilada ni esperanza de libertad. Escribe desde una prisión fría, abandonado por muchos: «Sólo Lucas está conmigo» (2 Ti 4:11).',
        { h: 'Un padre a su hijo' },
        'Timoteo era el hijo espiritual de Pablo, criado en la fe por su abuela Loida y su madre Eunice (2 Ti 1:5). Pablo le pide que avive el fuego del don de Dios, porque «no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio» (2 Ti 1:7). Le recuerda que el soldado, el atleta y el labrador se esfuerzan, y le da un encargo que mira a las generaciones futuras: «Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros» (2 Ti 2:2).',
        { h: 'La Escritura y la predicación' },
        'Pablo advierte que vendrán tiempos peligrosos, y le da a Timoteo un ancla: las Sagradas Escrituras que conoce desde la niñez. «Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia» (2 Ti 3:16). Por eso, su último encargo es: «que prediques la palabra; que instes a tiempo y fuera de tiempo» (2 Ti 4:2).',
        { h: 'La corona' },
        'Pablo sabe que su muerte está cerca: «yo ya estoy para ser sacrificado». Mira atrás sin remordimiento y adelante sin temor: «He peleado la buena batalla, he acabado la carrera, he guardado la fe» (2 Ti 4:6-7). Le espera la corona de justicia, no solo a él, sino a todos los que aman la venida del Señor. Luego, como cualquier anciano, pide que le traigan el capote que dejó en Troas y los libros. Según la tradición, Pablo fue decapitado en Roma, fuera de la ciudad, hacia el año 67.',
        { ir: { t: 'Ver «He acabado la carrera» en Los viajes de Pablo', a: '../../viajes-pablo/#despues/4' } },
        ESTUDIO
      ],
      pensar: 'Pablo encargó a Timoteo pasar la fe a hombres fieles que enseñaran a otros (2 Ti 2:2). ¿A quién estás formando tú en la fe?'
    }
  ];

  window.__NT.pablo = pablo;
})();
