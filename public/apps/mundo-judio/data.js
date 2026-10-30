/* ==========================================================
   Recursos Bíblicos — El mundo judío en tiempos de Jesús · contenido de las rutas
   FUENTE de public/apps/mundo-judio/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/mundo_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica, sin nombrarla.
   Josefo, Filón, la Mishná y los rollos de Qumrán se usan como fuentes históricas, parafraseados,
   sin comillas ni burbuja. La Mishná se escribió hacia el año 200 d.C.: lo que depende solo de ella
   se presenta con cautela, en bloques de posturas cuando importa.
   Este recurso continúa Entre los Testamentos (nº 86): allí se estudia el ORIGEN de la sinagoga, los
   escribas, los fariseos, los saduceos, los esenios y el Sanedrín; aquí, cómo actuaban en tiempos de Jesús.
   La dinastía de Herodes (nº 92), Jerusalén en tiempos de Jesús (nº 93), La sinagoga de Magdala (nº 94) y
   Las fiestas de Israel (nº 26) tienen recurso propio: aquí se tratan solo en lo necesario.
   La responsabilidad por la muerte de Jesús: los líderes y la multitud de Jerusalén de esa generación,
   Herodes, Pilato y los gentiles (Hch 2:36; 3:13-17; 4:27), y detrás de todos, los pecados de la
   humanidad; nunca culpa colectiva de los judíos de otras épocas.
   ========================================================== */
(() => {
  const V = {
    palestina: [[30.9, 34.2], [33.45, 36.5]],
    galilea: [[32.45, 34.95], [33.35, 35.95]],
    lago: [[32.68, 35.45], [33.0, 35.72]],
    judea: [[31.2, 34.55], [32.25, 35.65]],
    jerusalen: [[31.6, 35.0], [31.95, 35.5]],
    centro: [[31.55, 34.7], [32.95, 35.75]],
    guerra: [[31.2, 34.6], [33.1, 35.95]],
    mediterraneo: [[24.0, 10.0], [43.0, 48.0]]
  };
  // Las cuatro divisiones del tiempo de Jesús (capas de La tierra de Israel)
  const DIV = ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-idumea', 'nt-perea', 'nt-decapolis', 'nt-felipe'];
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/mundo_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(["esquema-calendario.svg", "esquema-gobernantes.svg", "esquema-poder.svg", "esquema-semana.svg", "foto-barca-galilea.jpg", "foto-gamla.jpg", "foto-inscripcion-templo.jpg", "foto-mikve.jpg", "foto-osario-caifas.jpg", "foto-piedra-magdala.jpg", "foto-piedra-pilato.jpg", "mj-antipas-banquete.webp", "mj-banquete-levi.webp", "mj-boda-procesion.webp", "mj-calle-jerusalen.webp", "mj-casa-galilea.webp", "mj-censo-galileos.webp", "mj-espigas-sabado.webp", "mj-familias-sacerdotales.webp", "mj-lavamiento-manos.webp", "mj-leproso.webp", "mj-marta-maria.webp", "mj-mateo-banco.webp", "mj-multitud-rey.webp", "mj-nain-cortejo.webp", "mj-nicodemo-noche.webp", "mj-ninos-bendicion.webp", "mj-sermon-ladera.webp", "mj-tributo-cesar.webp", "mj-yavne.webp", "mj-zaqueo.webp"]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (f.startsWith('../') ? { src: EMB[f] || f } : HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  const R = {
    entre: '../../entre-los-testamentos/', sacerdocio: '../../sacerdocio/', templo: '../../templo-herodes/', romano: '../../imperio-romano/',
    tierra: '../../tierra-de-israel/', armonia: '../../evangelios/', hechos: '../../hechos/', medidas: '../../medidas-biblicas/',
    pablo: '../../viajes-pablo/', biblia: '../../de-la-biblia-a-nosotros/', interpretar: '../../interpretar-biblia/', pactos: '../../pactos-y-dispensaciones/',
    escatologia: '../../escatologia/', atlas: '../../atlas-biblico/'
  };
  window.__MJ = { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R };

  // ================== RUTA I. Panorama: un pueblo, muchas voces ==================
  const panorama = [
    {
      id: 'muchos-caminos', n: 'Un solo pueblo, muchos caminos', ref: 'Lucas 2:41-42; Hechos 2:5-11; Hechos 23:6-8; Lucas 3:15', fecha: [-6, 70],
      visual: [
        img('mj-calle-jerusalen.webp', 'Una calle empedrada de Jerusalén en el siglo I, llena de gente durante una fiesta: un fariseo con flecos azules en el manto, un sacerdote con túnica de lino blanco, campesinos galileos con un cordero, una familia de peregrinos de la diáspora con ropas de otra región, un soldado romano en una esquina y, al fondo, los muros del templo', 'Peregrinos, sacerdotes, maestros, comerciantes y soldados en una misma calle de Jerusalén. Recreación.'),
        tabla({
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Qué estudia'],
          filas: [
            ['I. Panorama', 'Quién gobernaba, las regiones, las lenguas y cómo conocemos este mundo'],
            ['II. El poder', 'Pilato, Herodes Antipas, Anás y Caifás, el Sanedrín, los impuestos, los soldados y los rebeldes'],
            ['III. Los grupos judíos', 'Fariseos, saduceos, escribas, esenios, zelotes, herodianos, samaritanos y el pueblo sencillo'],
            ['IV. La fe vivida', 'El templo, las fiestas, la sinagoga, el día de reposo, la pureza, la tradición y la esperanza'],
            ['V. La vida diaria', 'La casa, la boda, los niños, las mujeres, el trabajo, la mesa, la enfermedad y la muerte'],
            ['VI. Jesús en su mundo', 'Cómo vivió, enseñó y murió Jesús en medio de ese mundo'],
            ['VII. De Jesús al año 70', 'La iglesia de Jerusalén, Agripa I, la rebelión y la caída del templo']
          ]
        })
      ],
      texto: [
        'Cuando Jesús tenía doce años, sus padres lo llevaron a Jerusalén para la Pascua, «conforme a la costumbre de la fiesta» (Lc 2:42). Esa escena reúne el mundo que estudia este recurso. Una familia de una aldea de Galilea camina varios días hasta la ciudad santa. En las calles se cruzan sacerdotes que van al templo, maestros de la ley con sus discípulos, campesinos con su cordero, judíos que llegan de Egipto o de Babilonia, y soldados romanos que vigilan desde la fortaleza Antonia.',
        { h: 'No era un mundo uniforme' },
        'A veces se imagina a los judíos del siglo I como un bloque: todos pensaban lo mismo y vivían igual. Los evangelios muestran otra cosa. Había fariseos y saduceos que discutían sobre la resurrección (Hch 23:6-8), esenios que vivían apartados en el desierto, zelotes dispuestos a tomar las armas, publicanos que cobraban para Roma, sacerdotes ricos y pastores pobres. Había judíos de Judea que miraban con desconfianza a los de Galilea, y judíos de la diáspora que hablaban griego y apenas entendían el arameo.',
        'Lo que los unía era más fuerte que lo que los separaba: un solo Dios, una ley dada por Moisés, un templo en Jerusalén, el día de reposo, la circuncisión y la esperanza de que Dios redimiría a Israel. Por eso se puede hablar de «el mundo judío» en singular, aunque tuviera muchas voces.',
        { h: 'Por qué importa conocerlo' },
        'Jesús nació, vivió, enseñó y murió dentro de este mundo. Muchas de sus palabras se entienden mejor cuando se sabe qué pensaban los fariseos del día de reposo, por qué la gente despreciaba a un publicano, qué significaba tocar a un leproso o por qué una boda podía durar una semana. Conocer ese trasfondo no agrega nada a la Escritura, que es suficiente, pero ayuda a leerla como la leyeron sus primeros oyentes.',
        'Este recurso continúa la historia de Entre los Testamentos, donde se cuenta cómo nacieron la sinagoga, los fariseos, los saduceos y el Sanedrín. Aquí se estudia cómo eran en los días de Jesús y de los apóstoles, hasta la destrucción del templo en el año 70.',
        ir('Abrir Entre los Testamentos: lo que nació en esos siglos', R.entre + '#nacio/1')
      ],
      pensar: 'Jesús creció en una familia que subía cada año a Jerusalén para la fiesta. ¿Qué costumbres de fe de tu familia o de tu iglesia te ayudaron a conocer a Dios, y cuáles quisieras transmitir a otros?'
    },
    {
      id: 'quien-gobernaba', n: 'Quién gobernaba: Roma, los Herodes y el sumo sacerdote', ref: 'Lucas 3:1-2; Mateo 2:22; Juan 18:31; Juan 11:49-50', fecha: [-4, 44],
      visual: [
        pasos([
          { t: '4 a.C.: muere Herodes el Grande; su reino se divide entre tres hijos', fecha: -4, estado: { view: V.palestina, capas: ['h-herodes'], lugares: ['jerusalen', 'cesarea', 'jerico'] } },
          { t: '4 a.C.–6 d.C.: Arquelao en Judea y Samaria, Antipas en Galilea y Perea, Felipe al noreste', fecha: 0, estado: { view: V.palestina, capas: ['nt-judea', 'nt-samaria', 'nt-idumea', 'nt-galilea', 'nt-perea', 'nt-felipe', 'nt-decapolis'], lugares: ['jerusalen', 'seforis', 'cesarea-filipo'] } },
          { t: '6–41 d.C.: Roma depone a Arquelao; Judea pasa a un prefecto romano', fecha: 6, estado: { view: V.palestina, capas: ['h-iudaea', 'nt-galilea', 'nt-perea', 'nt-felipe', 'nt-decapolis'], lugares: ['jerusalen', 'cesarea', 'tiberias', 'cesarea-filipo'] } },
          { t: 'Hacia el 28 d.C.: Pilato, Herodes Antipas y Felipe gobiernan durante el ministerio de Jesús', fecha: 28, estado: { view: V.palestina, capas: DIV, lugares: ['jerusalen', 'cesarea', 'tiberias', 'cesarea-filipo', 'capernaum', 'nazaret'] } },
          { t: '41–44 d.C.: Agripa I, nieto de Herodes, reúne de nuevo todo el reino', fecha: 42, estado: { view: V.palestina, capas: ['mj-agripa'], lugares: ['jerusalen', 'cesarea', 'tiberias'] } }
        ]),
        esq('esquema-poder.svg', 'Esquema de quién gobernaba hacia el año 28: el emperador Tiberio, el gobernador de Siria, el prefecto de Judea Poncio Pilato, los tetrarcas Herodes Antipas y Felipe, la Decápolis, el sumo sacerdote Caifás y el Sanedrín', 'Hacia el año 28 d.C., cuatro gobiernos bajo Roma y, en Jerusalén, el sumo sacerdote y el Sanedrín.'),
        cita('Lucas 3:1-2', 'En el año decimoquinto del imperio de Tiberio César, siendo gobernador de Judea Poncio Pilato, y Herodes tetrarca de Galilea, y su hermano Felipe tetrarca de Iturea y de la provincia de Traconite, y Lisanias tetrarca de Abilinia, y siendo sumos sacerdotes Anás y Caifás, vino palabra de Dios a Juan, hijo de Zacarías, en el desierto.')
      ],
      texto: [
        'Lucas fecha el comienzo del ministerio de Juan el Bautista con una lista de gobernantes: el emperador Tiberio, el gobernador Poncio Pilato, el tetrarca Herodes en Galilea, su hermano Felipe en Iturea y Traconite, Lisanias en Abilinia, «siendo sumos sacerdotes Anás y Caifás» (Lc 3:2). Esa lista es un retrato exacto de cómo estaba repartido el poder.',
        { h: 'Un reino dividido en tres' },
        'Herodes el Grande murió en el año 4 a.C. Roma respetó su testamento y repartió el reino entre tres de sus hijos, sin darle a ninguno el título de rey. Arquelao recibió Judea, Samaria e Idumea; fue tan cruel que José, al volver de Egipto, «tuvo temor de ir allá» y se fue a Galilea (Mt 2:22). Herodes Antipas recibió Galilea y Perea, y fue el «Herodes» de casi todo el ministerio de Jesús. Felipe recibió los territorios del noreste, poblados en su mayoría por gentiles.',
        { h: 'Judea, bajo un prefecto romano' },
        'En el año 6 d.C., tras las quejas de judíos y samaritanos, Augusto depuso a Arquelao y convirtió su territorio en una provincia gobernada por un prefecto romano, que vivía en Cesarea, junto al mar, y subía a Jerusalén en las fiestas con sus soldados. Así, durante el ministerio de Jesús, Galilea tenía un gobernante judío de la familia de Herodes, mientras que Jerusalén estaba bajo un romano. Por eso Pilato, al saber que Jesús era galileo, lo envió a Herodes, que estaba en la ciudad por la Pascua (Lc 23:6-7).',
        { h: 'El sumo sacerdote y el Sanedrín' },
        'Dentro de Judea, los asuntos religiosos y buena parte del gobierno diario quedaban en manos del sumo sacerdote y del Sanedrín, el consejo de Jerusalén. Pero el sumo sacerdote ya no lo era de por vida: lo nombraba y lo quitaba el prefecto romano. El consejo podía juzgar según la ley, pero no ejecutar una sentencia de muerte sin el gobernador: «A nosotros no nos está permitido dar muerte a nadie» (Jn 18:31).',
        'Esta red de poderes explica por qué Jesús pasó por tantos tribunales en una sola noche y una mañana: Anás, Caifás, el Sanedrín, Pilato, Herodes y otra vez Pilato. La ruta II la estudia uno por uno.',
        ir('Ver la ruta II: el poder', '#poder/1')
      ],
      pensar: 'Lucas sitúa el comienzo del evangelio entre emperadores, gobernadores y sumos sacerdotes, pero «vino palabra de Dios a Juan» en el desierto (Lc 3:2). ¿Qué te enseña que Dios hable por medio de alguien que no tenía ningún poder político?'
    },
    {
      id: 'tres-regiones', n: 'Galilea, Samaria y Judea: tres regiones, tres mundos', ref: 'Juan 4:9; Juan 7:41, 52; Mateo 26:73; Mateo 4:15-16; Lucas 9:51-53', fecha: [6, 66],
      visual: [
        mapa({ view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-idumea', 'nt-perea', 'nt-decapolis'], lugares: ['jerusalen', 'nazaret', 'capernaum', 'sicar', 'monte-gerizim', 'seforis', 'tiberias', 'jerico', 'betania'], trazos: ['c-jordan', 'c-samaria'] }),
        tabla({
          titulo: 'Tres regiones en tiempos de Jesús',
          cab: ['', 'Galilea', 'Samaria', 'Judea'],
          filas: [
            ['Gobierno', 'Herodes Antipas', 'Prefecto romano', 'Prefecto romano; el sumo sacerdote y el Sanedrín en Jerusalén'],
            ['Población', 'Aldeas judías de campesinos y pescadores; ciudades nuevas como Séforis y Tiberíades', 'Samaritanos, con su templo en el monte Gerizim (destruido c. 110 a.C.)', 'Jerusalén y aldeas judías; familias sacerdotales'],
            ['Fama', 'Gente sencilla, de acento fácil de reconocer (Mt 26:73)', 'Enemigos antiguos de los judíos (Jn 4:9)', 'Centro religioso; sus maestros se sentían superiores (Jn 7:52)'],
            ['En el ministerio de Jesús', 'La mayor parte de su enseñanza y sus milagros', 'Sicar, el pozo de Jacob, el samaritano agradecido', 'Las fiestas, el templo, la última semana']
          ]
        }),
        img('../tierra-de-israel/img/peregrinos.webp', 'Un grupo grande de peregrinos judíos del siglo I, familias anónimas con niños, ancianos y burros cargados, camina por un camino de piedra entre colinas hacia Jerusalén, que se ve a lo lejos sobre un monte', 'Peregrinos de Galilea suben a Jerusalén para la fiesta. Recreación.')
      ],
      texto: [
        'Galilea, Samaria y Judea estaban a pocos días de camino una de otra, pero eran mundos distintos. Para entender los evangelios hay que saber dónde está cada escena.',
        { h: 'Galilea, la región de Jesús' },
        'Galilea era una región fértil al norte, alrededor del lago al que los evangelios llaman mar de Galilea. Sus habitantes eran en su mayoría judíos de aldea: campesinos, pescadores y artesanos. Hablaban un arameo con un acento que en Jerusalén se reconocía enseguida; a Pedro lo delató en el patio del sumo sacerdote: «tu manera de hablar te descubre» (Mt 26:73). Por estar rodeada de pueblos gentiles, Isaías la había llamado «Galilea de los gentiles» (Mt 4:15). Allí creció Jesús, en Nazaret, y allí hizo la mayor parte de su ministerio, con Capernaúm como base.',
        { h: 'Samaria, la región que muchos evitaban' },
        'Entre Galilea y Judea estaba Samaria. Sus habitantes, los samaritanos, adoraban al Dios de Israel, pero solo aceptaban los cinco libros de Moisés y tenían su propio lugar de culto en el monte Gerizim. Entre ellos y los judíos había siglos de enemistad: «judíos y samaritanos no se tratan entre sí» (Jn 4:9). Muchos galileos que subían a las fiestas preferían bajar por el valle del Jordán para no atravesar Samaria. El mapa muestra los dos caminos.',
        { h: 'Judea, el centro religioso' },
        'Al sur estaba Judea, con Jerusalén y el templo. Allí vivían las familias sacerdotales, los maestros más prestigiosos y el Sanedrín. Algunos de ellos miraban con desprecio a los galileos. Cuando Nicodemo defendió a Jesús, los fariseos le respondieron: «Escudriña y ve que de Galilea nunca se ha levantado profeta» (Jn 7:52). Se equivocaban: Jonás era de Gat-hefer, en Galilea, y sobre todo Isaías había anunciado que en Galilea resplandecería una gran luz (Is 9:1-2).',
        { ejercicio: {
          pregunta: '¿Por qué Pedro fue reconocido en el patio del sumo sacerdote?',
          opciones: [
            { t: 'Porque llevaba la ropa típica de los pescadores.', ok: false, por_que: 'El texto no habla de su ropa, sino de su manera de hablar.' },
            { t: 'Porque su acento revelaba que era de Galilea.', ok: true, por_que: 'Los galileos hablaban un arameo con un acento propio, fácil de reconocer en Jerusalén (Mateo 26:73; Marcos 14:70).' },
            { t: 'Porque los sacerdotes lo habían visto en el templo.', ok: false, por_que: 'Quienes lo señalan son los que estaban en el patio, y la razón que dan es su manera de hablar.' }
          ],
          explicacion: 'Galilea, Samaria y Judea tenían diferencias de acento, costumbres y fama que asoman en muchos pasajes de los evangelios.'
        } }
      ],
      pensar: 'Algunos maestros de Jerusalén despreciaban a Galilea, pero Dios eligió esa región para que su Hijo creciera y empezara su ministerio. ¿Qué prejuicios sobre lugares o personas podrían impedirte ver lo que Dios está haciendo?'
    },
    {
      id: 'lenguas', n: 'Arameo, hebreo, griego y latín', ref: 'Juan 19:20; Marcos 5:41; Marcos 15:34; Hechos 21:40; Hechos 6:1; Juan 12:20-21', fecha: [-6, 70],
      visual: [
        tabla({
          titulo: 'Cuatro lenguas en la tierra de Israel',
          cab: ['Lengua', 'Quiénes la usaban', 'Huellas en el Nuevo Testamento'],
          filas: [
            ['Arameo', 'El pueblo en la vida diaria, en Galilea y en Judea', '«Talita cumi» (Mr 5:41), «Efata» (Mr 7:34), «Abba» (Mr 14:36), «Eloi, Eloi, ¿lama sabactani?» (Mr 15:34)'],
            ['Hebreo', 'La lectura de la Escritura, la oración y el estudio de los maestros', 'La lectura de Isaías en Nazaret (Lc 4:16-20); los nombres de lugares como Gólgota o Getsemaní'],
            ['Griego', 'El comercio, las ciudades, los judíos de la diáspora y los gentiles', 'Todo el Nuevo Testamento; los «griegos» que buscan a Jesús (Jn 12:20-21); los helenistas de Hechos 6:1'],
            ['Latín', 'Los soldados y los funcionarios romanos', 'Palabras latinas como legión, centurión o denario; el título de la cruz (Jn 19:20)']
          ],
          nota: 'En la Biblia, «hebreo» a veces designa también el arameo que hablaban los judíos (por ejemplo, Hechos 21:40 y Juan 19:13).'
        }),
        img('../medidas-biblicas/img/mercado.webp', 'Un comerciante de Judea del siglo I pesa granos de cebada en una balanza de dos platillos, con pesas de piedra y monedas sobre su mesa en un mercado', 'En el mercado se mezclaban el arameo del pueblo y el griego del comercio. Recreación.'),
        cita('Juan 19:19-20', 'Escribió también Pilato un título, que puso sobre la cruz, el cual decía: JESÚS NAZARENO, REY DE LOS JUDÍOS. Y muchos de los judíos leyeron este título; porque el lugar donde Jesús fue crucificado estaba cerca de la ciudad, y el título estaba escrito en hebreo, en griego y en latín.')
      ],
      texto: [
        'Pilato hizo escribir sobre la cruz el motivo de la condena: «JESÚS NAZARENO, REY DE LOS JUDÍOS». Juan agrega que «el título estaba escrito en hebreo, en griego y en latín» (Jn 19:20). Esas tres lenguas, más el arameo que el evangelista incluye en la palabra «hebreo», eran las de Judea en el siglo I.',
        { h: 'El arameo, la lengua de casa' },
        'Desde el exilio en Babilonia, los judíos habían adoptado el arameo, una lengua hermana del hebreo. En tiempos de Jesús era la lengua de la casa, del campo y del mercado. Los evangelios, escritos en griego, conservan algunas palabras arameas de Jesús tal como sonaron: a la hija de Jairo le dijo «Talita cumi», que significa «Niña, a ti te digo, levántate» (Mr 5:41); y en la cruz clamó «Eloi, Eloi, ¿lama sabactani?» (Mr 15:34). Para orar, Jesús llamó a Dios «Abba», la palabra con que un hijo se dirige a su padre (Mr 14:36).',
        { h: 'El hebreo, la lengua de la Escritura' },
        'El hebreo seguía vivo en la lectura de la ley y los profetas, en las oraciones y entre los maestros. Muchos de los rollos de Qumrán están escritos en hebreo. En las sinagogas se leía la Escritura en hebreo y, donde hacía falta, se traducía al arameo para que todos entendieran.',
        { h: 'El griego, la lengua del mundo' },
        'Desde Alejandro Magno, el griego era la lengua común del oriente. Se hablaba en las ciudades de la costa y de la Decápolis, en el comercio y entre los judíos que vivían fuera de su tierra, que leían la Escritura en la traducción griega llamada Septuaginta. Muchos galileos, como los pescadores que vendían en los mercados, probablemente lo entendían. El Nuevo Testamento se escribió en griego para que el evangelio llegara a todas las naciones.',
        { h: 'El latín, la lengua del poder' },
        'El latín era la lengua del ejército y de la administración romana. Dejó en los evangelios palabras como legión, centurión, pretorio o denario.',
        { posturas: {
          titulo: '¿En qué lengua enseñaba Jesús?',
          a: { n: 'Sobre todo en arameo', t: 'La mayoría de los estudiosos piensa que Jesús enseñaba al pueblo en arameo, como muestran las palabras que conservan los evangelios, y que leía la Escritura en hebreo.' },
          b: { n: 'También en griego', t: 'Otros señalan que en Galilea se hablaba griego, y que en algunas conversaciones, como con el centurión, la mujer sirofenicia o Pilato, es probable que Jesús hablara en griego.' },
          c: 'Ambas lecturas son compatibles: Jesús vivió en una tierra con varias lenguas. Lo que importa es que sus palabras nos llegaron fielmente en el griego del Nuevo Testamento, inspirado por el Espíritu Santo.'
        } },
        ir('Ver De la Biblia a nosotros: cómo se escribió y se copió la Biblia', R.biblia)
      ],
      pensar: 'Dios hizo escribir el Nuevo Testamento en la lengua que entendía la mayor parte del mundo de entonces. ¿Qué te dice eso sobre su deseo de que cada persona escuche el evangelio en su propia lengua?'
    },
    {
      id: 'fuentes', n: 'Cómo lo conocemos', ref: 'Lucas 1:1-4; Juan 20:30-31; 2 Pedro 1:16', fecha: [-6, 200],
      visual: [
        tabla({
          titulo: 'Las fuentes para conocer el mundo de Jesús',
          cab: ['Fuente', 'Qué es', 'Qué aporta y qué cuidar'],
          filas: [
            ['Los evangelios y Hechos', 'Escritura inspirada, escrita por testigos o con testigos', 'La fuente principal y fiable; se escribió para dar fe, no para describir costumbres'],
            ['Flavio Josefo', 'Historiador judío, sacerdote, nacido hacia el 37 d.C.', 'Narra la historia de Herodes, los gobernadores, los grupos y la guerra; escribe para lectores romanos'],
            ['Filón de Alejandría', 'Filósofo judío, contemporáneo de Jesús', 'Describe a Pilato, a los esenios y la vida de la diáspora'],
            ['Los rollos de Qumrán', 'Manuscritos copiados entre el siglo II a.C. y el I d.C.', 'Muestran cómo leían la Escritura y qué esperaban algunos judíos de la época'],
            ['La Mishná', 'Colección de la tradición oral, escrita hacia el 200 d.C.', 'Conserva muchas costumbres antiguas, pero se escribió después del año 70: hay que usarla con cautela'],
            ['La arqueología', 'Casas, sinagogas, baños rituales, tumbas, monedas e inscripciones', 'Confirma y aclara detalles: la inscripción de Pilato, el osario de Caifás, la sinagoga de Magdala']
          ]
        }),
        foto('../entre-los-testamentos/img/inscripcion-teodoto.webp', 'Placa de piedra caliza con diez líneas de texto griego tallado, la inscripción de Teodoto', 'Réplica de la inscripción de Teodoto, de una sinagoga de Jerusalén anterior al año 70: una de las piezas que confirman lo que cuentan los evangelios sobre la sinagoga.', 'CC BY-SA 3.0 · Sodabottle, vía Wikimedia Commons (réplica en el Museo ANU, Tel Aviv)'),
        cita('Lucas 1:1-4', 'Puesto que ya muchos han tratado de poner en orden la historia de las cosas que entre nosotros han sido ciertísimas, tal como nos lo enseñaron los que desde el principio lo vieron con sus ojos, y fueron ministros de la palabra, me ha parecido también a mí, después de haber investigado con diligencia todas las cosas desde su origen, escribírtelas por orden, oh excelentísimo Teófilo, para que conozcas bien la verdad de las cosas en las cuales has sido instruido.')
      ],
      texto: [
        'Lucas empezó su evangelio explicando su método: muchos habían escrito sobre Jesús, y él, «después de haber investigado con diligencia todas las cosas desde su origen», las escribió en orden, para que Teófilo conociera «bien la verdad» (Lc 1:3-4). La fuente principal para conocer el mundo de Jesús es el propio Nuevo Testamento, escrito por testigos o por quienes hablaron con ellos.',
        { h: 'Los escritores judíos del siglo I' },
        'Fuera de la Biblia, la fuente más importante es Flavio Josefo, un sacerdote judío de Jerusalén nacido hacia el año 37 que participó en la guerra contra Roma, se pasó a los romanos y escribió en Roma la historia de su pueblo. Sus libros cuentan la vida de Herodes, la crueldad de algunos gobernadores, las diferencias entre fariseos, saduceos y esenios, y la destrucción de Jerusalén. Menciona a Juan el Bautista, a Santiago «hermano de Jesús, llamado Cristo», y probablemente al mismo Jesús. Josefo escribe para lectores romanos y quiere quedar bien con ellos; por eso se lo lee con criterio.',
        'Filón de Alejandría, un filósofo judío contemporáneo de Jesús, describe la vida de los judíos en Egipto y cuenta cómo Pilato ofendió a los judíos de Jerusalén.',
        { h: 'Los manuscritos y la tradición oral' },
        'Los rollos de Qumrán, hallados desde 1947, muestran cómo leía la Escritura una comunidad judía del siglo I y qué esperaba del Mesías. La Mishná, en cambio, es la colección de la tradición oral de los maestros, escrita hacia el año 200, más de un siglo después de Jesús. Conserva muchas costumbres antiguas, pero también refleja cambios posteriores a la destrucción del templo. Por eso, cuando un detalle solo se conoce por la Mishná, este recurso lo dice.',
        { h: 'Lo que dice la tierra' },
        'La arqueología agrega lo que las palabras no dicen: cómo eran las casas de Capernaúm, las sinagogas de Magdala y Gamla, los baños rituales, las tinajas de piedra, las tumbas con piedra rodante y las monedas que circulaban. Algunos hallazgos nombran a personas de los evangelios, como Poncio Pilato y, probablemente, Caifás. Estos hallazgos no prueban la fe, que descansa en la Palabra de Dios, pero muestran que los evangelios describen con exactitud el mundo en que ocurrieron.',
        { ejercicio: {
          pregunta: 'Un comentario explica una costumbre de los fariseos citando solamente la Mishná. ¿Qué conviene recordar?',
          opciones: [
            { t: 'Que la Mishná tiene la misma autoridad que los evangelios.', ok: false, por_que: 'La Mishná es una fuente histórica judía, no Escritura.' },
            { t: 'Que la Mishná se escribió hacia el año 200, y algunas reglas pueden ser posteriores al tiempo de Jesús.', ok: true, por_que: 'Conserva tradiciones antiguas, pero se redactó más de un siglo después y después de la destrucción del templo.' },
            { t: 'Que la Mishná no sirve para nada al estudiar el Nuevo Testamento.', ok: false, por_que: 'Bien usada, ayuda a entender muchas costumbres; solo hay que saber de cuándo es.' }
          ],
          explicacion: 'Las fuentes externas ayudan a entender el trasfondo; la norma de la fe y de la vida sigue siendo la Escritura.'
        } }
      ],
      pensar: 'Lucas investigó con cuidado para que Teófilo tuviera certeza de lo que había aprendido. ¿Qué lugar le das a estudiar con cuidado la Biblia para afirmar tu fe y poder explicarla a otros?'
    }
  ];

  window.__MJ.panorama = panorama;
})();
/* El mundo judío en tiempos de Jesús · ruta II. El poder (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA II. El poder ==================
  const poder = [
    {
      id: 'prefecto', n: 'El prefecto romano, de Coponio a Pilato', ref: 'Lucas 3:1; Lucas 13:1-3; Mateo 27:19; Juan 19:12; Hechos 4:27', fecha: [6, 41],
      visual: [
        foto('foto-piedra-pilato.jpg', 'Bloque de piedra caliza al aire libre con letras latinas talladas en tres líneas, donde se leen TIBERIEVM y PILATVS', 'Réplica de la inscripción de Pilato en Cesarea, donde fue hallada en 1961: Poncio Pilato, prefecto de Judea, dedica un edificio al emperador Tiberio. El original está en el Museo de Israel, en Jerusalén.', 'CC BY-SA 2.0 · Marion Doss, vía Wikimedia Commons'),
        tabla({
          titulo: 'Los gobernadores romanos de Judea',
          cab: ['Años', 'Gobernador', 'En la Biblia o en la historia'],
          filas: [
            ['6–9 d.C.', 'Coponio', 'El primer prefecto; llega con el censo de Quirinio'],
            ['9–15 d.C.', 'Marco Ambíbulo y Annio Rufo', 'Pocos datos'],
            ['15–26 d.C.', 'Valerio Grato', 'Cambia cuatro veces de sumo sacerdote hasta nombrar a Caifás'],
            ['26–36 d.C.', 'Poncio Pilato', 'Gobierna durante el ministerio de Jesús y lo condena a muerte'],
            ['36–41 d.C.', 'Marcelo y Marulo', 'Después, Agripa I reina sobre toda la tierra (41–44)'],
            ['44–66 d.C.', 'Procuradores (Félix, Festo y otros)', 'Félix y Festo juzgan a Pablo (Hechos 23–25)']
          ]
        }),
        cita('Lucas 13:1-3', 'En este mismo tiempo estaban allí algunos que le contaban acerca de los galileos cuya sangre Pilato había mezclado con los sacrificios de ellos. Respondiendo Jesús, les dijo: ¿Pensáis que estos galileos, porque padecieron tales cosas, eran más pecadores que todos los galileos? Os digo: No; antes si no os arrepentís, todos pereceréis igualmente.')
      ],
      texto: [
        'Desde el año 6 d.C., Judea, Samaria e Idumea dejaron de tener un rey y pasaron a ser gobernadas por un funcionario romano de rango ecuestre, es decir, de la clase de los caballeros, no de los senadores. Hasta el año 41 su título era prefecto; desde el 44, procurador. Los evangelios lo llaman simplemente «el gobernador».',
        { h: 'Lo que hacía un prefecto' },
        'El prefecto residía en Cesarea, la ciudad que Herodes había construido junto al mar, con un puerto, un teatro y un templo dedicado a Augusto. Mandaba sobre unos pocos miles de soldados, cobraba los tributos para Roma, nombraba y destituía al sumo sacerdote, guardaba las vestiduras sacerdotales del Día de la Expiación y era el único que podía condenar a muerte. En las fiestas subía a Jerusalén con sus tropas para vigilar a las multitudes de peregrinos.',
        { h: 'Poncio Pilato' },
        'Pilato gobernó diez años, del 26 al 36. Las fuentes judías lo describen como un hombre duro y poco atento a la sensibilidad de los judíos. Josefo cuenta que hizo entrar de noche en Jerusalén los estandartes de sus soldados con la imagen del emperador, y que solo los retiró cuando una multitud se dejó caer al suelo dispuesta a morir antes que aceptar imágenes en la ciudad santa. También tomó dinero del tesoro del templo para construir un acueducto, y reprimió con violencia la protesta. Filón agrega que colgó en Jerusalén unos escudos dedicados al emperador, que tuvo que retirar por orden de Tiberio.',
        'Lucas menciona otro episodio que no aparece en otras fuentes: unos galileos «cuya sangre Pilato había mezclado con los sacrificios de ellos» (Lc 13:1). Jesús usó la noticia para llamar al arrepentimiento, no para atacar a Roma.',
        'En el año 36, Pilato atacó a un grupo de samaritanos reunidos en el monte Gerizim; el gobernador de Siria lo envió a Roma para que respondiera ante el emperador, y no volvió a Judea.',
        { h: 'Un gobernador que temía' },
        'En el juicio de Jesús, Pilato aparece indeciso: su esposa le advierte que no tenga nada que ver con «ese justo» (Mt 27:19), él declara tres veces que no halla delito en Jesús, pero cede cuando la multitud le grita: «Si a éste sueltas, no eres amigo de César» (Jn 19:12). Un gobernador con denuncias en su contra no podía arriesgarse a que lo acusaran de proteger a un rival del emperador.',
        'En 1961, unos arqueólogos italianos hallaron en el teatro de Cesarea una piedra con su nombre y su título: prefecto de Judea. Es el único objeto de su tiempo que lo nombra.',
        ir('Ver El imperio romano: Jesús ante Roma', R.romano + '#biblia/3')
      ],
      pensar: 'Pilato sabía que Jesús era inocente, pero pesó más su temor a perder su cargo. ¿En qué situaciones el temor a lo que otros piensen puede llevarte a callar o a ceder ante lo que sabes que es injusto?'
    },
    {
      id: 'antipas', n: 'Herodes Antipas y Felipe', ref: 'Lucas 3:19-20; Marcos 6:17-29; Lucas 9:7-9; Lucas 13:31-33; Lucas 8:3; Mateo 16:13', fecha: [-4, 39],
      visual: [
        img('mj-antipas-banquete.webp', 'En un salón de un palacio herodiano de Galilea, decorado con mosaicos y columnas, Herodes Antipas reclinado en un diván preside un banquete con nobles galileos, oficiales y tribunos, mientras sirvientes llevan bandejas y copas de vino a la luz de lámparas', 'Herodes Antipas da una cena a «sus príncipes y tribunos y a los principales de Galilea» (Marcos 6:21). Recreación.'),
        mapa({ view: V.palestina, capas: ['nt-galilea', 'nt-perea', 'nt-felipe'], lugares: ['tiberias', 'seforis', 'maqueronte', 'cesarea-filipo', 'betsaida', 'nazaret', 'capernaum'] }),
        cita('Lucas 13:31-33', 'Aquel mismo día llegaron unos fariseos, diciéndole: Sal, y vete de aquí, porque Herodes te quiere matar. Y les dijo: Id, y decid a aquella zorra: He aquí, echo fuera demonios y hago curaciones hoy y mañana, y al tercer día termino mi obra. Sin embargo, es necesario que hoy y mañana y pasado mañana siga mi camino; porque no es posible que un profeta muera fuera de Jerusalén.')
      ],
      texto: [
        'Cuando los evangelios hablan de «Herodes» durante el ministerio de Jesús, se refieren a Herodes Antipas, hijo de Herodes el Grande, que gobernó Galilea y Perea del año 4 a.C. al 39 d.C. No tenía el título de rey sino el de tetrarca, que significa gobernante de una cuarta parte. Su vida y la de su familia se estudian en La dinastía de Herodes (en preparación); aquí basta con lo que importa para leer los evangelios.',
        { h: 'Un constructor de ciudades' },
        'Antipas reconstruyó Séforis, a unos seis kilómetros de Nazaret, destruida por los romanos después de la muerte de su padre. Más tarde fundó una nueva capital a orillas del lago y la llamó Tiberíades, en honor del emperador. La construyó sobre un antiguo cementerio, por lo que muchos judíos piadosos se negaban a vivir allí; los evangelios nunca dicen que Jesús entrara en ella.',
        { h: 'Juan el Bautista y Herodías' },
        'Antipas se divorció de su esposa, hija del rey de los nabateos, y se casó con Herodías, que había sido esposa de su medio hermano. Juan el Bautista le dijo públicamente: «No te es lícito tenerla» (Mt 14:4). Antipas lo encarceló; Josefo dice que en la fortaleza de Maqueronte, al este del mar Muerto. Marcos cuenta que Herodes «temía a Juan, sabiendo que era varón justo y santo», y que lo escuchaba con gusto, pero que en el banquete de su cumpleaños, por un juramento imprudente, mandó decapitarlo (Mr 6:20-28).',
        { h: 'Antipas y Jesús' },
        'Cuando oyó hablar de los milagros de Jesús, Antipas se inquietó: «A Juan yo le hice decapitar; ¿quién, pues, es éste?» (Lc 9:9). En otra ocasión, unos fariseos advirtieron a Jesús que Herodes quería matarlo. Jesús respondió: «Id, y decid a aquella zorra» que su obra seguiría hasta el final (Lc 13:32). Había gente de su corte entre los seguidores de Jesús, como Juana, «mujer de Chuza intendente de Herodes» (Lc 8:3). En la Pascua de la crucifixión, Pilato le envió a Jesús; Antipas esperaba ver una señal, y como Jesús no le respondió, lo ridiculizó y lo devolvió (Lc 23:8-11).',
        'En el año 39, Antipas viajó a Roma a pedir el título de rey; su sobrino Agripa lo acusó ante el emperador Calígula, que lo desterró a la Galia.',
        { h: 'Felipe, el tetrarca del norte' },
        'Su medio hermano Felipe gobernó las regiones del noreste, de población mayormente gentil, del 4 a.C. al 34 d.C. Reconstruyó Paneas, junto a las fuentes del Jordán, y la llamó Cesarea; para distinguirla de la de la costa se la conocía como Cesarea de Filipo. Allí Jesús preguntó a sus discípulos: «¿Quién dicen los hombres que es el Hijo del Hombre?» (Mt 16:13).'
      ],
      pensar: 'Antipas escuchaba con gusto a Juan, pero no estuvo dispuesto a cambiar su vida, y terminó matándolo por no quedar mal ante sus invitados. ¿Qué diferencia hay entre escuchar la Palabra con agrado y obedecerla?'
    },
    {
      id: 'sumos-sacerdotes', n: 'Anás, Caifás y el sumo sacerdocio', ref: 'Juan 18:12-14, 19-24; Lucas 3:2; Hechos 4:5-6; Juan 11:49-52; Mateo 26:57, 65', fecha: [6, 66],
      visual: [
        img('../sacerdocio/img/sac-caifas.webp', 'De noche, en una sala del palacio del sumo sacerdote en Jerusalén iluminada por antorchas, Caifás, con vestiduras sacerdotales, rasga su manto ante Jesús, que está de pie, atado y sereno, rodeado por miembros del sanedrín', 'Caifás rasga sus vestiduras (Mateo 26:65). Recreación.'),
        foto('foto-osario-caifas.jpg', 'Caja funeraria de piedra caliza con tapa curva, decorada en su frente con rosetas y hojas talladas, en una vitrina de museo', 'Osario hallado en 1990 en una tumba familiar al sur de Jerusalén. En uno de sus costados, que no se ve en la foto, lleva grabado el nombre «Yehosef bar Qayafa», José hijo de Caifás. Muchos estudiosos lo atribuyen al sumo sacerdote. Museo de Israel.', 'CC BY-SA 3.0 · deror_avi, vía Wikimedia Commons'),
        tabla({
          titulo: 'La familia de Anás en el sumo sacerdocio',
          cab: ['Sumo sacerdote', 'Años', 'Relación con Anás'],
          filas: [
            ['Anás', '6–15 d.C.', 'Nombrado por Quirinio; sigue influyendo después de su destitución'],
            ['Eleazar', '16–17 d.C.', 'Hijo'],
            ['Caifás (José)', '18–36 d.C.', 'Yerno (Juan 18:13)'],
            ['Jonatán', '36–37 d.C.', 'Hijo'],
            ['Teófilo', '37–41 d.C.', 'Hijo'],
            ['Matías', 'c. 43 d.C.', 'Hijo'],
            ['Anás el joven', '62 d.C.', 'Hijo; hace ejecutar a Santiago, hermano del Señor']
          ],
          nota: 'Fechas aproximadas, según Josefo.'
        }),
        cita('Juan 18:12-14', 'Entonces la compañía de soldados, el tribuno y los alguaciles de los judíos, prendieron a Jesús y le ataron, y le llevaron primeramente a Anás; porque era suegro de Caifás, que era sumo sacerdote aquel año. Era Caifás el que había dado el consejo a los judíos, de que convenía que un solo hombre muriese por el pueblo.')
      ],
      texto: [
        'En la ley de Moisés, el sumo sacerdote servía de por vida, y el cargo pasaba de padre a hijo en la familia de Aarón. En tiempos de Jesús ya no era así. Herodes el Grande, y después los gobernadores romanos, nombraban y destituían al sumo sacerdote a su gusto, eligiéndolo entre unas pocas familias sacerdotales ricas de Jerusalén. Entre el año 37 a.C. y el 70 d.C. hubo veintiocho sumos sacerdotes.',
        { h: 'Anás, el patriarca' },
        'La familia más poderosa fue la de Anás. Fue nombrado en el año 6 por Quirinio, el gobernador de Siria, y destituido en el 15, pero cinco de sus hijos y su yerno Caifás ocuparon después el cargo. Por eso, aunque ya no era sumo sacerdote, seguía siendo el hombre fuerte del templo, y los evangelios y Hechos lo siguen llamando así (Lc 3:2; Hch 4:6). Cuando arrestaron a Jesús, lo llevaron «primeramente a Anás; porque era suegro de Caifás» (Jn 18:13).',
        { h: 'Caifás, el sumo sacerdote de la cruz' },
        'José, llamado Caifás, fue sumo sacerdote del 18 al 36, más tiempo que ningún otro en el siglo I. Eso indica que supo mantener buenas relaciones con los gobernadores romanos, incluido Pilato, con quien coincidió diez años. Los dos fueron destituidos casi al mismo tiempo.',
        'Juan cuenta que, después de la resurrección de Lázaro, el concilio temió que todos creyeran en Jesús y que los romanos destruyeran el templo y la nación. Caifás respondió que convenía «que un hombre muera por el pueblo, y no que toda la nación perezca» (Jn 11:50). Hablaba de un cálculo político, pero sin saberlo anunció la verdad del evangelio: Jesús moriría por la nación, «y no solamente por la nación, sino también para congregar en uno a los hijos de Dios que estaban dispersos» (Jn 11:52).',
        { h: 'Un sacerdocio rico y poderoso' },
        'Las familias de los sumos sacerdotes controlaban el templo, sus tesoros y su comercio. Josefo cuenta que, en los años 50 y 60, algunos enviaban a sus siervos a quitar por la fuerza los diezmos que correspondían a los sacerdotes pobres. La arqueología ha excavado en la parte alta de Jerusalén grandes casas de familias sacerdotales, con mosaicos, frescos y varios baños rituales.',
        'En 1990 apareció en una tumba de Jerusalén un osario, una caja de piedra para guardar los huesos, con el nombre de José hijo de Caifás. Muchos estudiosos creen que es el del sumo sacerdote que juzgó a Jesús, aunque no hay certeza.',
        ir('Ver El sacerdocio en Israel: Asmoneos, Anás y Caifás', R.sacerdocio + '#historia/5')
      ],
      pensar: 'Caifás tomó una decisión por conveniencia política, pero Dios usó sus palabras para anunciar la salvación. ¿Qué te enseña esto sobre la soberanía de Dios aun en las decisiones injustas de los hombres?'
    },
    {
      id: 'sanedrin', n: 'El Sanedrín en tiempos de Jesús', ref: 'Juan 11:47-53; Marcos 14:53-64; Lucas 22:66-71; Lucas 23:50-51; Hechos 5:27-40; Hechos 23:1-10', fecha: [6, 66],
      visual: [
        img('../hechos/img/hechos-pedro-sanedrin.webp', 'Pedro y Juan, de pie y serenos, ante el sanedrín reunido en semicírculo, con el sumo sacerdote y ancianos vestidos con mantos', 'Pedro y Juan ante el Sanedrín (Hechos 4). Recreación.'),
        tabla({
          titulo: 'El Sanedrín en el Nuevo Testamento',
          cab: ['Ocasión', 'Pasaje', 'Lo que ocurre'],
          filas: [
            ['Después de la resurrección de Lázaro', 'Juan 11:47-53', 'Acuerdan matar a Jesús'],
            ['La noche del arresto y al amanecer', 'Marcos 14:53-64; Lucas 22:66', 'Condenan a Jesús por blasfemia y lo entregan a Pilato'],
            ['Pedro y Juan sanan a un cojo', 'Hechos 4:5-21', 'Les prohíben hablar en el nombre de Jesús'],
            ['Los apóstoles son arrestados', 'Hechos 5:17-40', 'Gamaliel aconseja dejarlos; los azotan'],
            ['Esteban', 'Hechos 6:12–7:58', 'Lo acusan y lo apedrean'],
            ['Pablo', 'Hechos 22:30–23:10', 'Fariseos y saduceos se dividen por la resurrección']
          ]
        }),
        esq('esquema-poder.svg', 'Esquema de quién gobernaba hacia el año 28, con el sumo sacerdote y el Sanedrín bajo el prefecto romano', 'El Sanedrín juzgaba según la ley, pero no podía ejecutar sin el prefecto romano.'),
        cita('Juan 11:47-53', 'Entonces los principales sacerdotes y los fariseos reunieron el concilio, y dijeron: ¿Qué haremos? Porque este hombre hace muchas señales. Si le dejamos así, todos creerán en él; y vendrán los romanos, y destruirán nuestro lugar santo y nuestra nación. Entonces Caifás, uno de ellos, sumo sacerdote aquel año, les dijo: Vosotros no sabéis nada; ni pensáis que nos conviene que un hombre muera por el pueblo, y no que toda la nación perezca. Esto no lo dijo por sí mismo, sino que como era el sumo sacerdote aquel año, profetizó que Jesús había de morir por la nación; y no solamente por la nación, sino también para congregar en uno a los hijos de Dios que estaban dispersos. Así que, desde aquel día acordaron matarle.')
      ],
      texto: [
        'El origen del Sanedrín y su composición se estudian en Entre los Testamentos. En tiempos de Jesús era el consejo supremo de los judíos en Jerusalén, presidido por el sumo sacerdote y formado por los principales sacerdotes, los escribas y los ancianos.',
        ir('Ver Entre los Testamentos: el Sanedrín', R.entre + '#nacio/6'),
        { h: 'Un tribunal bajo Roma' },
        'Bajo el gobierno de los prefectos, el Sanedrín tenía bastante poder: juzgaba los asuntos religiosos, administraba Jerusalén, tenía su propia guardia del templo y podía mandar a azotar o encarcelar. Pero la pena de muerte quedaba reservada al gobernador romano (Jn 18:31). La única excepción conocida era la de un gentil que entrara en los atrios interiores del templo, y la inscripción que lo advertía se ha encontrado.',
        { h: 'El juicio de Jesús' },
        'Los evangelios cuentan dos momentos: una reunión de noche en casa de Caifás, donde se buscaron testigos falsos y Jesús declaró ser el Cristo, el Hijo de Dios, que vendría «sentado a la diestra del poder de Dios» (Mr 14:62); y una reunión al amanecer, que confirmó la sentencia y lo entregó a Pilato (Lc 22:66-71). El cargo ante el Sanedrín fue de blasfemia; ante Pilato, de hacerse rey.',
        { posturas: {
          titulo: '¿Fue ilegal el juicio de Jesús?',
          a: { n: 'Un juicio contrario a la ley', t: 'La Mishná da reglas para los juicios de pena de muerte: no podían hacerse de noche, ni en víspera de sábado o de fiesta, y la sentencia debía esperar al día siguiente. Según estas reglas, el juicio de Jesús habría violado muchas normas, lo que mostraría la urgencia y la injusticia de sus jueces.' },
          b: { n: 'No se sabe si esas reglas regían entonces', t: 'La Mishná se escribió hacia el año 200, cuando el Sanedrín ya no existía, y refleja el ideal de los maestros fariseos más que la práctica del tribunal saduceo de Caifás. No hay forma de saber si esas reglas estaban vigentes en el año 30.' },
          c: 'Lo que los evangelios dejan claro, sin depender de la Mishná, es que se buscaron testigos falsos (Mr 14:55-56), que la decisión estaba tomada antes del juicio (Jn 11:53) y que Jesús era inocente. Su condena no fue un error judicial, sino parte del plan de Dios para nuestra salvación (Hch 2:23).'
        } },
        { h: 'Un consejo dividido' },
        'No todos los miembros estuvieron de acuerdo. José de Arimatea, «miembro del concilio, varón bueno y justo», no había consentido en la decisión (Lc 23:50-51), y Nicodemo había defendido a Jesús (Jn 7:50-51). Años después, el fariseo Gamaliel aconsejó dejar en paz a los apóstoles: si su obra era de Dios, «no la podréis destruir» (Hch 5:39).'
      ],
      pensar: 'José de Arimatea formaba parte del consejo que condenó a Jesús, pero «no había consentido en el acuerdo». ¿Qué te enseña su ejemplo sobre mantenerse fiel cuando la mayoría a tu alrededor decide lo contrario?'
    },
    {
      id: 'impuestos', n: 'Impuestos, publicanos y el tributo al César', ref: 'Mateo 9:9-11; Lucas 3:12-13; Lucas 19:1-8; Mateo 17:24-27; Mateo 22:15-21; Romanos 13:7', fecha: [6, 66],
      visual: [
        img('mj-mateo-banco.webp', 'En la orilla del mar de Galilea, junto a un camino a la entrada de Capernaúm, Mateo, un publicano judío de unos treinta años, está sentado tras una mesa de madera con monedas, una balanza y tablillas de cuentas, mientras unos comerciantes con burros cargados esperan para pagar; Jesús, visto de espaldas, se ha detenido frente a él', '«Vio a un hombre llamado Mateo, que estaba sentado al banco de los tributos públicos» (Mateo 9:9). Recreación.'),
        tabla({
          titulo: 'Lo que pagaba un judío en tiempos de Jesús',
          cab: ['Impuesto', 'A quién', 'En la Biblia'],
          filas: [
            ['Tributo personal y sobre la tierra', 'Roma (en Judea) o Herodes Antipas (en Galilea)', 'El tributo al César (Mateo 22:17); el censo (Lucas 2:1-3; Hechos 5:37)'],
            ['Peajes y aduanas', 'Cobrados por publicanos que compraban el derecho de cobrarlos', 'Mateo en Capernaúm (Mateo 9:9); Zaqueo en Jericó (Lucas 19:2)'],
            ['Medio siclo del templo', 'El templo, una vez al año, cada varón judío', 'Las dos dracmas (Mateo 17:24)'],
            ['Diezmos y primicias', 'Los sacerdotes y levitas', 'Los fariseos diezmaban hasta la menta (Mateo 23:23)']
          ]
        }),
        cita('Lucas 3:12-13', 'Vinieron también unos publicanos para ser bautizados, y le dijeron: Maestro, ¿qué haremos? El les dijo: No exijáis más de lo que os está ordenado.')
      ],
      texto: [
        'Un campesino de Galilea o de Judea pagaba impuestos a varios señores a la vez: al gobierno, al templo y a los sacerdotes. Sumados, se llevaban una parte importante de la cosecha de una familia que apenas vivía de lo que producía.',
        { h: 'El tributo a Roma' },
        'En Judea, desde el año 6, se pagaba un tributo directo a Roma: un impuesto por persona y otro sobre la tierra. Para fijarlo, Quirinio hizo un censo, y eso provocó la rebelión de Judas el galileo (II.7). En Galilea, en cambio, los impuestos se pagaban a Herodes Antipas. Por eso la pregunta que le hicieron a Jesús en Jerusalén era una trampa: «¿Es lícito dar tributo a César, o no?» (Mt 22:17). Si decía que sí, el pueblo lo rechazaría; si decía que no, podían acusarlo ante el gobernador. La respuesta de Jesús se estudia en VI.4.',
        { h: 'Los publicanos' },
        'Los peajes y las aduanas no los cobraban funcionarios, sino particulares que compraban el derecho de cobrarlos y se quedaban con lo que recaudaban por encima de lo pactado. Era fácil abusar. Los publicanos de los evangelios eran judíos que cobraban para Roma o para Herodes, y por eso el pueblo los consideraba traidores y ladrones, y los ponía al lado de los pecadores y las prostitutas (Mt 21:31). Capernaúm, donde Jesús llamó a Mateo, estaba en el camino que pasaba del territorio de Antipas al de Felipe; Jericó, donde vivía Zaqueo, «jefe de los publicanos, y rico» (Lc 19:2), era un cruce de caminos y un centro de comercio del bálsamo.',
        'Juan el Bautista no les pidió a los publicanos que dejaran su oficio, sino que fueran honestos: «No exijáis más de lo que os está ordenado» (Lc 3:13). Jesús fue más allá: comió con ellos y llamó a uno de ellos a ser apóstol. Zaqueo, al recibirlo en su casa, prometió dar la mitad de sus bienes a los pobres y devolver cuadruplicado lo que había defraudado (Lc 19:8).',
        { h: 'El impuesto del templo' },
        'Cada varón judío mayor de veinte años pagaba una vez al año medio siclo para el templo, según Éxodo 30:13. Se pagaba en moneda de Tiro, por la pureza de su plata. Cuando los cobradores preguntaron a Pedro si su Maestro pagaba «las dos dracmas», Jesús le explicó que los hijos del Rey están libres, pero pagó «para no ofenderles», con el estatero que Pedro halló en la boca de un pez (Mt 17:24-27).',
        ir('Ver Pesos, medidas, monedas y horas bíblicas: las monedas', R.medidas + '#monedas/1')
      ],
      pensar: 'Jesús llamó a un cobrador de impuestos que todos despreciaban, y Zaqueo cambió su manera de usar el dinero al encontrarse con él. ¿Qué muestra tu manera de ganar, gastar y dar el dinero sobre lo que Jesús ha hecho en tu vida?'
    },
    {
      id: 'soldados', n: 'Soldados, centuriones y la fortaleza Antonia', ref: 'Lucas 3:14; Lucas 7:1-10; Mateo 5:41; Mateo 27:27-32; Marcos 15:39; Hechos 21:31-40; Hechos 10:1-2', fecha: [6, 66],
      visual: [
        img('../imperio-romano/img/roma-centurion.webp', 'Un centurión romano con su casco de cresta transversal y su vara de vid', 'Un centurión, oficial al mando de unos ochenta soldados. Recreación.'),
        img('../hechos/img/hechos-gradas-antonia.webp', 'El apóstol Pablo, encadenado entre soldados romanos, habla con la mano levantada desde las gradas de la fortaleza Antonia a una multitud en el atrio del templo', 'Desde la fortaleza Antonia, los soldados vigilaban los atrios del templo (Hechos 21:31-40). Recreación.'),
        cita('Lucas 7:2-5', 'Y el siervo de un centurión, a quien éste quería mucho, estaba enfermo y a punto de morir. Cuando el centurión oyó hablar de Jesús, le envió unos ancianos de los judíos, rogándole que viniese y sanase a su siervo. Y ellos vinieron a Jesús y le rogaron con solicitud, diciéndole: Es digno de que le concedas esto; porque ama a nuestra nación, y nos edificó una sinagoga.')
      ],
      texto: [
        'En Judea no había legiones romanas. Las cuatro legiones de la región estaban en Siria, bajo el mando del gobernador de esa provincia. El prefecto de Judea contaba con tropas auxiliares, unos tres mil hombres reclutados en su mayoría entre los habitantes no judíos de Cesarea y de Sebaste, la antigua Samaria. Los judíos estaban exentos del servicio militar romano, y estos soldados, que conocían la región y no simpatizaban con los judíos, explican en parte la dureza con que trataron a Jesús.',
        { h: 'La fortaleza Antonia' },
        'Herodes había construido en la esquina noroeste del monte del templo una fortaleza a la que llamó Antonia, en honor de Marco Antonio. Desde sus torres, una cohorte de soldados vigilaba los atrios, sobre todo en las fiestas, cuando Jerusalén se llenaba de peregrinos. Por eso, cuando la multitud quiso matar a Pablo en el templo, el tribuno pudo bajar enseguida con sus soldados y llevarlo por las gradas a la fortaleza (Hch 21:31-35).',
        { h: 'Centuriones en los evangelios y en Hechos' },
        'El centurión era el oficial que mandaba una centuria, de unos ochenta soldados. Los que aparecen en el Nuevo Testamento suelen dejar buena impresión. En Capernaúm, un centurión, probablemente al servicio de Herodes Antipas, pidió a Jesús que sanara a su siervo; los ancianos judíos dijeron de él: «ama a nuestra nación, y nos edificó una sinagoga» (Lc 7:5). Jesús se maravilló de su fe. Al pie de la cruz, otro centurión exclamó: «Verdaderamente este hombre era Hijo de Dios» (Mr 15:39). Y Cornelio, en Cesarea, fue el primer gentil en recibir el Espíritu Santo con su casa (Hch 10).',
        { h: 'Una milla más' },
        'Un soldado romano podía obligar a un civil a cargar su equipaje durante una milla. Así obligaron a Simón de Cirene a llevar la cruz de Jesús (Mt 27:32). Jesús enseñó a sus discípulos a responder a esa imposición con generosidad: «a cualquiera que te obligue a llevar carga por una milla, ve con él dos» (Mt 5:41). Y cuando unos soldados preguntaron a Juan el Bautista qué debían hacer, les respondió: «No hagáis extorsión a nadie, ni calumniéis; y contentaos con vuestro salario» (Lc 3:14).',
        { ejercicio: {
          pregunta: '¿Por qué los ancianos judíos de Capernaúm intercedieron ante Jesús por un centurión?',
          opciones: [
            { t: 'Porque temían que el centurión los castigara si Jesús no lo ayudaba.', ok: false, por_que: 'El texto no habla de temor, sino de aprecio.' },
            { t: 'Porque el centurión amaba a la nación judía y les había construido una sinagoga.', ok: true, por_que: 'Así lo dicen ellos mismos ante Jesús (Lucas 7:4-5).' },
            { t: 'Porque el centurión se había hecho judío y estaba circuncidado.', ok: false, por_que: 'Seguía siendo gentil; él mismo dice que no es digno de que Jesús entre en su casa (Lucas 7:6).' }
          ],
          explicacion: 'Entre los soldados extranjeros también había hombres que temían a Dios; Jesús encontró en uno de ellos una fe que no había hallado en Israel (Lucas 7:9).'
        } }
      ],
      pensar: 'Jesús enseñó a responder a una exigencia injusta caminando la segunda milla. ¿Cómo puedes aplicar ese principio cuando alguien te exige más de lo que te corresponde?'
    },
    {
      id: 'agitadores', n: 'Agitadores y falsos mesías', ref: 'Hechos 5:34-39; Hechos 21:38; Lucas 23:18-19; Juan 6:15; Juan 18:36; Mateo 24:4-5, 23-26', fecha: [6, 66],
      visual: [
        img('mj-censo-galileos.webp', 'En la plaza de una aldea de Galilea en el año 6 d.C., un grupo de campesinos judíos con mantos sencillos se niega a inscribirse ante funcionarios romanos sentados tras una mesa con tablillas de censo; un hombre de barba oscura habla con el puño en alto, mientras soldados auxiliares con lanzas observan tensos', 'Muchos judíos rechazaron el censo romano del año 6 d.C.; Judas el galileo encabezó una rebelión (Hechos 5:37). Recreación con personas anónimas.'),
        tabla({
          titulo: 'Rebeldes y profetas del siglo I',
          cab: ['Quién', 'Cuándo', 'Qué hizo', 'Fuente'],
          filas: [
            ['Judas el galileo', '6 d.C.', 'Llama a rechazar el censo: solo Dios es Señor de Israel', 'Hechos 5:37; Josefo'],
            ['Barrabás', 'c. 30 d.C.', 'Preso por una sedición en la ciudad y por homicidio', 'Lucas 23:19'],
            ['Teudas', 'antes del 34 (Hechos) o c. 45 (Josefo)', 'Promete abrir el Jordán; muere con sus seguidores', 'Hechos 5:36; Josefo'],
            ['El egipcio', 'c. 55 d.C.', 'Reúne a miles en el monte de los Olivos; huye ante Félix', 'Hechos 21:38; Josefo'],
            ['Los sicarios', 'Desde c. 50 d.C.', 'Asesinan con puñales en medio de las multitudes', 'Hechos 21:38; Josefo']
          ]
        }),
        cita('Hechos 5:35-39', 'y luego dijo: Varones israelitas, mirad por vosotros lo que vais a hacer respecto a estos hombres. Porque antes de estos días se levantó Teudas, diciendo que era alguien. A éste se unió un número como de cuatrocientos hombres; pero él fue muerto, y todos los que le obedecían fueron dispersados y reducidos a nada. Después de éste, se levantó Judas el galileo, en los días del censo, y llevó en pos de sí a mucho pueblo. Pereció también él, y todos los que le obedecían fueron dispersados. Y ahora os digo: Apartaos de estos hombres, y dejadlos; porque si este consejo o esta obra es de los hombres, se desvanecerá; mas si es de Dios, no la podréis destruir; no seáis tal vez hallados luchando contra Dios.')
      ],
      texto: [
        'Cuando el Sanedrín quiso matar a los apóstoles, Gamaliel recordó dos casos que todos conocían: Teudas, que «diciendo que era alguien» reunió a unos cuatrocientos hombres, y Judas el galileo, que «en los días del censo» arrastró a mucho pueblo. Los dos murieron y sus seguidores se dispersaron (Hch 5:36-37). El siglo I estuvo lleno de hombres así.',
        { h: 'Judas el galileo y la «cuarta filosofía»' },
        'En el año 6, cuando Quirinio hizo el censo para cobrar el tributo, Judas el galileo enseñó que pagar impuestos a Roma era aceptar a un señor distinto de Dios, y llamó a la rebelión. Josefo dice que fundó una cuarta escuela, además de fariseos, saduceos y esenios, que solo reconocía a Dios como rey. La rebelión fracasó, pero sus ideas siguieron vivas: dos de sus hijos fueron crucificados hacia el año 47, y un descendiente suyo encabezó a los rebeldes que tomaron Masada en el año 66.',
        { h: 'Profetas que prometían señales' },
        'Otros no tomaron las armas, sino que prometieron milagros. Josefo cuenta que un tal Teudas convenció a una multitud de seguirlo al Jordán, porque las aguas se abrirían ante él, y que un egipcio reunió a miles en el monte de los Olivos, prometiendo que los muros de Jerusalén caerían. Por eso el tribuno confundió a Pablo con «aquel egipcio que levantó una sedición» (Hch 21:38). Jesús había advertido: «se levantarán falsos Cristos, y falsos profetas, y harán grandes señales» (Mt 24:24).',
        { posturas: {
          titulo: '¿Un error de fechas en Hechos 5:36?',
          a: { n: 'Dos personas distintas', t: 'Josefo sitúa a un Teudas hacia el año 45, unos diez años después del discurso de Gamaliel. Teudas era un nombre común, y en tiempos de agitación hubo muchos cabecillas. Gamaliel se refiere a un Teudas anterior a Judas el galileo, que Josefo no menciona.' },
          b: { n: 'El error sería de Josefo', t: 'Otros piensan que Josefo, que escribió sesenta años después y comete otros errores de cronología, pudo confundir las fechas. Lucas, que investigó con cuidado (Lc 1:3), sitúa a Teudas antes que Judas.' },
          c: 'En ningún caso hay motivo para dudar de la exactitud de Lucas, que en muchos otros detalles ha sido confirmado por la historia y la arqueología.'
        } },
        { h: 'Jesús no fue uno más' },
        'Barrabás, el preso que la multitud prefirió, estaba en la cárcel «por sedición en la ciudad, y por un homicidio» (Lc 23:19). Los dos crucificados junto a Jesús son llamados con una palabra que también se usaba para los bandidos rebeldes. Jesús murió como si fuera uno de ellos, pero no lo era. Cuando la multitud quiso hacerlo rey por la fuerza, «volvió a retirarse al monte él solo» (Jn 6:15), y ante Pilato declaró: «Mi reino no es de este mundo» (Jn 18:36).'
      ],
      pensar: 'Gamaliel dijo que lo que es de los hombres se desvanece, pero lo que es de Dios no puede ser destruido. ¿Qué cosas de tu vida y de tu servicio dependen de tus fuerzas, y cuáles descansan en lo que Dios está haciendo?'
    }
  ];

  window.__MJ.poder = poder;
})();
/* El mundo judío en tiempos de Jesús · ruta III. Los grupos judíos (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA III. Los grupos judíos ==================
  const grupos = [
    {
      id: 'fariseos', n: 'Los fariseos: Hilel y Samay, Nicodemo, Gamaliel y Pablo', ref: 'Juan 3:1-2; Mateo 19:3; Mateo 23:2-7, 23; Lucas 7:36; Lucas 13:31; Hechos 5:34; Hechos 15:5; Filipenses 3:5', fecha: [-30, 70],
      visual: [
        img('mj-nicodemo-noche.webp', 'De noche, en la azotea de una casa de Jerusalén iluminada por una lámpara de aceite, Nicodemo, un fariseo de unos sesenta años con barba gris y manto fino con flecos azules, conversa con Jesús, que está sentado frente a él y se ve de espaldas; abajo se adivinan los techos de la ciudad', 'Nicodemo, «un principal entre los judíos», vino a Jesús de noche (Juan 3:1-2). Recreación.'),
        tabla({
          titulo: 'Dos escuelas de fariseos en tiempos de Jesús',
          cab: ['Tema', 'Escuela de Hilel', 'Escuela de Samay'],
          filas: [
            ['Carácter', 'Más flexible y paciente', 'Más estricta'],
            ['El divorcio (Deuteronomio 24:1)', 'Se permite por cualquier causa, incluso por cosas pequeñas', 'Solo por una falta grave de conducta'],
            ['Los gentiles que quieren aprender', 'Los recibe con paciencia', 'Los despide con dureza'],
            ['Un dicho atribuido', 'Lo que no te gusta, no se lo hagas a tu prójimo: eso es toda la ley', 'Haz del estudio de la ley algo fijo'],
            ['En el Nuevo Testamento', 'Gamaliel, considerado su nieto (Hechos 5:34)', 'Muchos de los rebeldes del año 66 la seguían']
          ],
          nota: 'Lo que se sabe de las dos escuelas proviene sobre todo de la Mishná y de tradiciones judías posteriores.'
        }),
        img('../entre-los-testamentos/img/debate-templo.webp', 'En un pórtico de columnas del templo de Jerusalén, un grupo de fariseos con mantos sencillos y flecos azules en las esquinas discute con un grupo de sacerdotes saduceos de vestimenta lujosa', 'Fariseos y saduceos discuten en los atrios del templo. Recreación.')
      ],
      texto: [
        'Entre los Testamentos cuenta cómo nacieron los fariseos y qué creían. En tiempos de Jesús eran el movimiento religioso más respetado por el pueblo. Josefo calcula que eran unos seis mil, en su mayoría laicos: comerciantes, artesanos y maestros que se proponían cumplir toda la ley en la vida diaria, también las reglas de pureza, los diezmos y el día de reposo.',
        ir('Ver Entre los Testamentos: los fariseos', R.entre + '#nacio/3'),
        { h: 'Hilel y Samay' },
        'Poco antes del nacimiento de Jesús vivieron dos grandes maestros fariseos, Hilel y Samay, cuyas escuelas discutían sobre casi todo. Un ejemplo aparece en el evangelio. Cuando los fariseos preguntaron a Jesús: «¿Es lícito al hombre repudiar a su mujer por cualquier causa?» (Mt 19:3), estaban metiéndolo en ese debate: los de Hilel permitían el divorcio por cualquier motivo; los de Samay, solo por una falta grave. Jesús no tomó partido por ninguna escuela, sino que volvió al plan de Dios en la creación: «lo que Dios juntó, no lo separe el hombre» (Mt 19:6).',
        'A Hilel se le atribuye un resumen de la ley: lo que no te gusta, no se lo hagas a tu prójimo. Jesús lo dijo en forma positiva y más exigente: «todas las cosas que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos» (Mt 7:12).',
        { h: 'Fariseos cerca de Jesús' },
        'Los evangelios no presentan a todos los fariseos como enemigos. Varios invitaron a Jesús a comer en su casa (Lc 7:36; 14:1). Unos le advirtieron que Herodes quería matarlo (Lc 13:31). Nicodemo, «un principal entre los judíos», vino a verlo de noche (Jn 3:1-2), lo defendió ante el concilio y ayudó a sepultarlo. Gamaliel aconsejó no perseguir a los apóstoles. Después de Pentecostés, muchos fariseos creyeron en Jesús (Hch 15:5), y el apóstol Pablo nunca dejó de decir que había sido educado como fariseo (Fil 3:5).',
        { h: 'Lo que Jesús denunció' },
        'Jesús reconoció que enseñaban la ley de Moisés: «todo lo que os digan que guardéis, guardadlo y hacedlo; mas no hagáis conforme a sus obras, porque dicen, y no hacen» (Mt 23:3). Lo que denunció fue la hipocresía de muchos de ellos: hacer obras «para ser vistos por los hombres», ensanchar las filacterias, buscar los primeros asientos y que los llamen «Rabí» (Mt 23:5-7), y cuidar los detalles de la ley descuidando «la justicia, la misericordia y la fe» (Mt 23:23). Esas palabras no son un ataque contra el pueblo judío, sino una advertencia que sigue valiendo para todo creyente religioso.'
      ],
      pensar: 'Jesús no condenó el deseo de obedecer a Dios en todo, sino la hipocresía y el orgullo. ¿En qué aspectos de tu vida de fe podrías estar más preocupado por lo que ven los demás que por la justicia, la misericordia y la fe?'
    },
    {
      id: 'saduceos', n: 'Los saduceos y la aristocracia del templo', ref: 'Mateo 22:23-33; Hechos 4:1-3; Hechos 5:17-18; Hechos 23:6-8; Mateo 16:6', fecha: [-30, 70],
      visual: [
        img('mj-familias-sacerdotales.webp', 'El patio interior de una gran casa de piedra de la parte alta de Jerusalén en el siglo I, con suelos de mosaico, paredes con frescos de colores, vasijas finas y una escalera que baja a un baño ritual; un sacerdote rico con túnica de lino fino conversa con sus siervos, y por una ventana se ve el templo', 'Una casa de una familia sacerdotal rica en la parte alta de Jerusalén, como las que excavó la arqueología. Recreación.'),
        tabla({
          titulo: 'Fariseos y saduceos en tiempos de Jesús',
          cab: ['', 'Fariseos', 'Saduceos'],
          filas: [
            ['Quiénes eran', 'Laicos y algunos sacerdotes; maestros del pueblo', 'Familias sacerdotales y aristocracia de Jerusalén'],
            ['Dónde tenían influencia', 'Las sinagogas y el pueblo', 'El templo y el Sanedrín'],
            ['Las Escrituras', 'La ley, los profetas y los escritos, con la tradición oral', 'La ley escrita; rechazaban la tradición oral'],
            ['Resurrección y ángeles', 'Sí', 'No (Hechos 23:8)'],
            ['Ante Roma', 'Distancia; preferían no meterse en política', 'Cooperación, para conservar el templo y su poder'],
            ['Ante Jesús', 'Discuten con Él la ley, el sábado y la pureza', 'Lo ven como un peligro para el orden; lo entregan a Pilato'],
            ['Después del año 70', 'Dan origen al judaísmo rabínico', 'Desaparecen con el templo']
          ]
        }),
        cita('Mateo 22:29-32', 'Entonces respondiendo Jesús, les dijo: Erráis, ignorando las Escrituras y el poder de Dios. Porque en la resurrección ni se casarán ni se darán en casamiento, sino serán como los ángeles de Dios en el cielo. Pero respecto a la resurrección de los muertos, ¿no habéis leído lo que os fue dicho por Dios, cuando dijo: Yo soy el Dios de Abraham, el Dios de Isaac y el Dios de Jacob? Dios no es Dios de muertos, sino de vivos.')
      ],
      texto: [
        'Los saduceos eran pocos, pero poderosos. Pertenecían a las familias sacerdotales principales y a la aristocracia de Jerusalén, y de entre ellos salían casi siempre los sumos sacerdotes. Josefo dice que Anás el joven, hijo de Anás, era saduceo, y Hechos dice que el sumo sacerdote y «todos los que estaban con él, esto es, la secta de los saduceos» persiguieron a los apóstoles (Hch 5:17).',
        ir('Ver Entre los Testamentos: los saduceos', R.entre + '#nacio/4'),
        { h: 'Guardianes del templo y del orden' },
        'Para los saduceos, lo más importante era el templo: su culto, sus tesoros y la paz con Roma, que les permitía conservarlo. Por eso veían con alarma a cualquiera que alborotara al pueblo. Cuando Jesús purificó el templo, atacó directamente el negocio que ellos controlaban; y cuando la multitud empezó a seguirlo, temieron que los romanos vinieran y destruyeran «nuestro lugar santo y nuestra nación» (Jn 11:48).',
        'Josefo dice que eran ásperos en el trato, incluso entre ellos, y que el pueblo no los quería. Los fariseos, en cambio, tenían el favor de la gente; por eso, aun en el Sanedrín, los saduceos muchas veces tenían que aceptar lo que los fariseos proponían.',
        { h: '«Erráis, ignorando las Escrituras»' },
        'Los saduceos solo reconocían la ley escrita y negaban la resurrección, el juicio futuro, los ángeles y los espíritus. Un día le presentaron a Jesús el caso de una mujer que se casó con siete hermanos, para ridiculizar la resurrección. Jesús les respondió que no conocían «las Escrituras y el poder de Dios» (Mt 22:29), y les demostró la resurrección desde los libros de Moisés, los únicos que ellos aceptaban: Dios se presentó a Moisés como «el Dios de Abraham, el Dios de Isaac y el Dios de Jacob», y «Dios no es Dios de muertos, sino de vivos» (Mt 22:32).',
        { h: 'Contra los apóstoles' },
        'Después de Pentecostés, los saduceos fueron los primeros en perseguir a la iglesia, «resentidos de que enseñasen al pueblo, y anunciasen en Jesús la resurrección de entre los muertos» (Hch 4:2). Era exactamente lo que ellos negaban. Cuando el templo fue destruido en el año 70, los saduceos desaparecieron de la historia, porque su razón de ser estaba ligada al templo.',
        { ejercicio: {
          pregunta: '¿Por qué Jesús respondió a los saduceos citando un pasaje de Éxodo y no de Daniel o de Isaías?',
          opciones: [
            { t: 'Porque en Daniel e Isaías no se habla de la resurrección.', ok: false, por_que: 'Sí se habla: por ejemplo, Daniel 12:2 e Isaías 26:19.' },
            { t: 'Porque los saduceos solo reconocían como norma los libros de Moisés.', ok: true, por_que: 'Jesús les mostró la resurrección en la parte de la Escritura que ellos mismos aceptaban (Mateo 22:31-32).' },
            { t: 'Porque Éxodo era el único libro que se leía en el templo.', ok: false, por_que: 'En el templo y en las sinagogas se leían los libros de Moisés y los profetas.' }
          ],
          explicacion: 'Jesús argumentó desde el terreno de sus interlocutores, y aun así mostró que toda la Escritura enseña la vida después de la muerte.'
        } }
      ],
      pensar: 'Los saduceos tenían poder, riqueza y conocimiento, pero Jesús les dijo que ignoraban las Escrituras y el poder de Dios. ¿Qué puede llevar a una persona religiosa a tener mucho conocimiento y aun así no conocer el poder de Dios?'
    },
    {
      id: 'escribas', n: 'Los escribas, intérpretes de la ley', ref: 'Marcos 1:22; Mateo 23:2-8; Marcos 12:28-34; Lucas 10:25-28; Lucas 11:46, 52; Mateo 13:52', fecha: [-30, 70],
      visual: [
        img('../viajes-pablo/img/vp-gamaliel.webp', 'Un joven Saulo, sentado en el suelo junto a otros estudiantes, escucha a Gamaliel, un maestro fariseo anciano que enseña con un rollo abierto en un atrio de Jerusalén', 'Saulo, «instruido a los pies de Gamaliel» (Hechos 22:3). Recreación.'),
        tabla({
          titulo: 'Cómo los llama el Nuevo Testamento',
          cab: ['Nombre', 'Qué indica', 'Ejemplo'],
          filas: [
            ['Escribas', 'Estudiosos de la Escritura, maestros y redactores de documentos legales', 'Marcos 12:28'],
            ['Intérpretes de la ley', 'Expertos en aplicar la ley de Moisés', 'Lucas 10:25'],
            ['Doctores de la ley', 'Maestros reconocidos que enseñan a otros', 'Lucas 5:17; Hechos 5:34'],
            ['Rabí', '«Mi maestro»: un trato de respeto, todavía no un título oficial', 'Juan 1:38; 3:2']
          ]
        }),
        cita('Marcos 12:28-34', 'Acercándose uno de los escribas, que los había oído disputar, y sabía que les había respondido bien, le preguntó: ¿Cuál es el primer mandamiento de todos? Jesús le respondió: El primer mandamiento de todos es: Oye, Israel; el Señor nuestro Dios, el Señor uno es. Y amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente y con todas tus fuerzas. Este es el principal mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo. No hay otro mandamiento mayor que éstos. Entonces el escriba le dijo: Bien, Maestro, verdad has dicho, que uno es Dios, y no hay otro fuera de él; y el amarle con todo el corazón, con todo el entendimiento, con toda el alma, y con todas las fuerzas, y amar al prójimo como a uno mismo, es más que todos los holocaustos y sacrificios. Jesús entonces, viendo que había respondido sabiamente, le dijo: No estás lejos del reino de Dios. Y ya ninguno osaba preguntarle.')
      ],
      texto: [
        'Los escribas eran los especialistas en la Escritura. En los evangelios aparecen casi siempre junto a los fariseos, porque la mayoría de los escribas eran fariseos, aunque también los había entre los saduceos y los sacerdotes. Lucas los llama además intérpretes de la ley y doctores de la ley.',
        ir('Ver Entre los Testamentos: los escribas y la tradición oral', R.entre + '#nacio/2'),
        { h: 'Lo que hacía un escriba' },
        'Un escriba estudiaba la ley desde joven, a los pies de un maestro, y llegaba a ser maestro él mismo. Enseñaba en el templo y en las sinagogas, respondía preguntas sobre cómo cumplir la ley, actuaba como juez en los tribunales locales y redactaba documentos como contratos o cartas de divorcio. Muchos tenían además un oficio para vivir: Pablo, educado por Gamaliel, fabricaba tiendas (Hch 18:3). La gente los saludaba con respeto en las plazas y los llamaba «rabí», que significa «mi maestro».',
        { h: 'Un maestro distinto' },
        'Un escriba enseñaba citando a otros maestros: tal rabino dice esto, tal otro dice aquello. Por eso la gente se asombró con Jesús, «porque les enseñaba como quien tiene autoridad, y no como los escribas» (Mr 1:22). Jesús no citaba a nadie: decía «Pero yo os digo».',
        { h: 'No todos eran iguales' },
        'Jesús fue duro con los intérpretes de la ley que «cargáis a los hombres con cargas que no pueden llevar, pero vosotros ni aun con un dedo las tocáis» (Lc 11:46), y que se habían llevado «la llave de la ciencia» sin entrar ellos ni dejar entrar a otros (Lc 11:52). Pero también encontró escribas sinceros. Uno le preguntó cuál era el primer mandamiento, y cuando Jesús respondió con el amor a Dios y al prójimo, el escriba reconoció que eso valía más que todos los sacrificios. Jesús le dijo: «No estás lejos del reino de Dios» (Mr 12:34).',
        'Jesús mismo habló de un nuevo tipo de escriba: «todo escriba docto en el reino de los cielos es semejante a un padre de familia, que saca de su tesoro cosas nuevas y cosas viejas» (Mt 13:52). Es el que conoce el Antiguo Testamento y lo entiende a la luz de Cristo.',
        { h: '«Uno es vuestro Maestro»' },
        'A sus discípulos, Jesús les dijo: «vosotros no queráis que os llamen Rabí; porque uno es vuestro Maestro, el Cristo, y todos vosotros sois hermanos» (Mt 23:8). No prohibía enseñar, sino buscar honra con los títulos. En la iglesia hay maestros, pero todos son hermanos bajo un solo Maestro.'
      ],
      pensar: 'El escriba sincero estaba «no lejos del reino», pero todavía no dentro. ¿Qué le faltaba? ¿Puede alguien conocer bien la Biblia y aun así no haber entrado en el reino de Dios?'
    },
    {
      id: 'esenios', n: 'Los esenios en tiempos de Jesús', ref: 'Mateo 5:43-44; Mateo 12:11-12; Lucas 14:12-14; Juan 3:19-21', fecha: [-30, 68],
      visual: [
        img('../entre-los-testamentos/img/qumran-esenios.webp', 'Al amanecer, en un edificio de piedra junto a los acantilados del desierto frente al mar Muerto, varios hombres vestidos de lino blanco copian rollos sentados ante largas mesas de yeso, mientras otro baja por las escaleras de un baño ritual excavado en la roca', 'Una comunidad judía del desierto copia las Escrituras junto al mar Muerto. Recreación.'),
        tabla({
          titulo: 'La regla de Qumrán y la enseñanza de Jesús',
          cab: ['Tema', 'En los escritos de Qumrán', 'En la enseñanza de Jesús'],
          filas: [
            ['El enemigo', 'Amar a los hijos de la luz y aborrecer a los hijos de las tinieblas', '«Amad a vuestros enemigos» (Mateo 5:44)'],
            ['El día de reposo', 'Prohibido sacar en sábado a un animal caído en un pozo', 'Cualquiera saca su oveja; «es lícito hacer el bien» (Mateo 12:11-12)'],
            ['Los excluidos', 'Los cojos, ciegos y lisiados no pueden entrar en la asamblea', '«Llama a los pobres, los mancos, los cojos y los ciegos» (Lucas 14:13)'],
            ['La pureza', 'Separarse del mundo y de los demás judíos', 'Ir a los pecadores para llamarlos al arrepentimiento'],
            ['El templo', 'Contaminado; se apartaron de él', 'Lo purifica y lo llama «casa de oración»']
          ]
        }),
        mapa({ view: V.judea, capas: ['nt-judea'], lugares: ['jerusalen', 'qumran', 'jerico', 'en-gadi', 'masada', 'betabara'] }),
        cita('Mateo 12:11-12', 'El les dijo: ¿Qué hombre habrá de vosotros, que tenga una oveja, y si ésta cayere en un hoyo en día de reposo, no le eche mano, y la levante? Pues ¿cuánto más vale un hombre que una oveja? Por consiguiente, es lícito hacer el bien en los días de reposo.')
      ],
      texto: [
        'Los esenios, la comunidad de Qumrán y sus rollos se estudian en Entre los Testamentos. Josefo dice que en su tiempo había unos cuatro mil esenios, que vivían en comunidades en muchas aldeas de Judea y en el desierto junto al mar Muerto. Compartían los bienes, comían juntos después de bañarse, vestían de blanco, eran muy estrictos con el día de reposo y la pureza, y se preparaban para una gran guerra final entre los hijos de la luz y los hijos de las tinieblas.',
        ir('Ver Entre los Testamentos: los esenios y Qumrán', R.entre + '#nacio/5'),
        { h: 'Un grupo que el Nuevo Testamento no nombra' },
        'Los evangelios hablan de fariseos, saduceos y herodianos, pero nunca de esenios. Tal vez porque vivían apartados y no discutían con Jesús en las plazas. Sin embargo, conocer sus escritos ayuda a entender algunas palabras de Jesús, porque muestran ideas que circulaban en la época.',
        { h: 'Contrastes que iluminan los evangelios' },
        'Jesús dijo: «Oísteis que fue dicho: Amarás a tu prójimo, y aborrecerás a tu enemigo» (Mt 5:43). La ley de Moisés manda amar al prójimo, pero en ninguna parte manda aborrecer al enemigo. La regla de Qumrán, en cambio, pedía a sus miembros amar a los de la comunidad y aborrecer a los de fuera. Jesús enseñó lo contrario: «Amad a vuestros enemigos» (Mt 5:44).',
        'Un escrito de la comunidad prohibía sacar en sábado a un animal que se hubiera caído en un pozo. Jesús preguntó a los fariseos, que eran menos estrictos: «¿Qué hombre habrá de vosotros, que tenga una oveja, y si ésta cayere en un hoyo en día de reposo, no le eche mano, y la levante?» (Mt 12:11). Y otro escrito excluía de la asamblea a los cojos, los ciegos y los lisiados, mientras Jesús mandó invitarlos al banquete (Lc 14:13).',
        { h: 'Separarse o ir' },
        'Los esenios respondieron a la corrupción del templo y del pueblo apartándose al desierto para mantenerse puros. Jesús hizo lo contrario: entró en las ciudades, tocó a los impuros y comió con los pecadores. No fue indiferente al pecado, pero vino a buscarlo y salvarlo. La comunidad de Qumrán desapareció en el año 68, cuando los romanos destruyeron su asentamiento; sus rollos, escondidos en las cuevas, esperaron casi dos mil años para ser hallados.'
      ],
      pensar: 'Los esenios se apartaron del mundo para mantenerse santos; Jesús se acercó a los pecadores sin dejar de ser santo. ¿Qué te enseña su ejemplo sobre cómo vivir en santidad sin alejarte de las personas que necesitan el evangelio?'
    },
    {
      id: 'zelotes', n: 'Los zelotes y Simón el zelote', ref: 'Lucas 6:13-16; Hechos 1:13; Números 25:11-13; Gálatas 1:14; Hechos 21:20; Mateo 26:51-52', fecha: [6, 73],
      visual: [
        foto('foto-gamla.jpg', 'Colina rocosa y alargada en forma de joroba de camello en los Altos del Golán, con las ruinas de una ciudad antigua, su muralla y su sinagoga en la ladera', 'Gamla, en el Golán, ciudad judía que resistió a Roma en el año 67. Al pie de la colina se ven la muralla y la sinagoga, una de las más antiguas que se conocen.', 'Dominio público · EdoM, vía Wikimedia Commons'),
        mapa({ view: V.guerra, capas: ['nt-galilea', 'nt-felipe'], lugares: ['gamla', 'jotapata', 'tiberias', 'magdala', 'capernaum', 'seforis'], trazos: ['mj-vespasiano-67'] }),
        cita('Lucas 6:13-16', 'Y cuando era de día, llamó a sus discípulos, y escogió a doce de ellos, a los cuales también llamó apóstoles: a Simón, a quien también llamó Pedro, a Andrés su hermano, Jacobo y Juan, Felipe y Bartolomé, Mateo, Tomás, Jacobo hijo de Alfeo, Simón llamado Zelote, Judas hermano de Jacobo, y Judas Iscariote, que llegó a ser el traidor.')
      ],
      texto: [
        'Entre los doce apóstoles había un hombre llamado «Simón llamado Zelote» (Lc 6:15). La palabra zelote viene del griego y significa celoso, lleno de celo. Mateo y Marcos lo llaman «Simón el cananista», que traduce la misma palabra aramea.',
        { h: 'El celo de Finees' },
        'En la historia de Israel, el celo por Dios tenía héroes. Finees, nieto de Aarón, mató a un israelita que llevó a una madianita a su tienda en medio de la idolatría de Baal-peor, y Dios dijo que había tenido «celo por su Dios» (Nm 25:13). Elías mató a los profetas de Baal. Matatías, el padre de los macabeos, empezó la rebelión contra Antíoco IV matando a un judío que sacrificaba a los ídolos. Para muchos judíos del siglo I, ser «celoso por la ley» significaba estar dispuesto a defenderla incluso con la violencia. Pablo dice que antes de su conversión era «mucho más celoso de las tradiciones de mis padres» (Gá 1:14), y por eso perseguía a la iglesia.',
        { h: 'De celosos a partido de guerra' },
        'Josefo llama zelotes a un grupo concreto que se formó durante la guerra contra Roma, entre los años 66 y 68: hombres que tomaron el templo, mataron a los sacerdotes que consideraban traidores y lucharon hasta el final. Antes de ellos estaban los seguidores de Judas el galileo (II.7) y los sicarios, que asesinaban con puñales. Todos compartían la convicción de que Israel no debía someterse a ningún señor fuera de Dios, y que había que preparar con las armas la llegada del reino.',
        { posturas: {
          titulo: '¿Qué era Simón el zelote?',
          a: { n: 'Un rebelde antes de seguir a Jesús', t: 'Algunos piensan que Simón había pertenecido a un movimiento armado contra Roma, como los seguidores de Judas el galileo, y que dejó ese camino para seguir a Jesús.' },
          b: { n: 'Un hombre celoso por la ley', t: 'Otros señalan que el partido de los zelotes, con ese nombre, aparece en Josefo recién en la guerra del año 66. En los días de Jesús, «zelote» podía significar simplemente alguien muy celoso de la ley, como los miles de creyentes de Jerusalén que eran «celosos por la ley» (Hch 21:20).' },
          c: 'En cualquiera de los dos casos, lo notable es que Jesús reunió entre sus doce a Simón, el celoso de la ley, y a Mateo, el publicano que había cobrado para el poder extranjero. Solo Cristo podía hacer de ellos hermanos.'
        } },
        { h: 'La espada guardada' },
        'Cuando arrestaron a Jesús, Pedro sacó una espada e hirió a un siervo del sumo sacerdote. Jesús le dijo: «Vuelve tu espada a su lugar; porque todos los que tomen espada, a espada perecerán» (Mt 26:52). Treinta y cinco años después, los que tomaron la espada para establecer el reino por la fuerza llevaron a Jerusalén a la destrucción. Gamla, en el Golán, cayó en el año 67 tras un asedio terrible; el mapa muestra el avance de Vespasiano por Galilea.'
      ],
      pensar: 'Simón el zelote y Mateo el publicano estaban en extremos opuestos, pero los dos siguieron a Jesús. ¿Qué diferencias políticas, sociales o de carácter tendrías que dejar a los pies de Cristo para vivir como hermano de otros creyentes?'
    },
    {
      id: 'herodianos', n: 'Los herodianos', ref: 'Marcos 3:1-6; Marcos 8:15; Marcos 12:13-17; Mateo 22:15-16', fecha: [-4, 44],
      visual: [
        mapa({ view: V.galilea, capas: ['nt-galilea'], lugares: ['tiberias', 'seforis', 'capernaum', 'magdala', 'nazaret', 'cana'] }),
        tabla({
          titulo: 'Los herodianos en los evangelios',
          cab: ['Pasaje', 'Con quién', 'Qué hacen'],
          filas: [
            ['Marcos 3:6', 'Fariseos, en Galilea', 'Después de que Jesús sana en sábado, toman consejo para destruirlo'],
            ['Marcos 8:15', '—', 'Jesús advierte contra «la levadura de Herodes»'],
            ['Marcos 12:13; Mateo 22:16', 'Fariseos, en Jerusalén', 'Le preguntan si es lícito pagar tributo al César']
          ]
        }),
        cita('Marcos 3:1-6', 'Otra vez entró Jesús en la sinagoga; y había allí un hombre que tenía seca una mano. Y le acechaban para ver si en el día de reposo le sanaría, a fin de poder acusarle. Entonces dijo al hombre que tenía la mano seca: Levántate y ponte en medio. Y les dijo: ¿Es lícito en los días de reposo hacer bien, o hacer mal; salvar la vida, o quitarla? Pero ellos callaban. Entonces, mirándolos alrededor con enojo, entristecido por la dureza de sus corazones, dijo al hombre: Extiende tu mano. Y él la extendió, y la mano le fue restaurada sana. Y salidos los fariseos, tomaron consejo con los herodianos contra él para destruirle.')
      ],
      texto: [
        'Los herodianos aparecen solo tres veces en los evangelios, pero siempre en un mal momento: unidos a los fariseos para buscar la manera de acabar con Jesús. Ni Josefo ni otras fuentes los describen como un grupo religioso. Su nombre indica lo que eran: partidarios de la familia de Herodes.',
        { h: 'Quiénes eran' },
        'Probablemente eran funcionarios, nobles y gente influyente de la corte de Herodes Antipas en Galilea, y quizá también judíos de Jerusalén que preferían que Judea volviera a tener un rey de la familia de Herodes antes que un gobernador romano. Su interés era político: mantener el orden y el poder de la dinastía.',
        { h: 'Una alianza extraña' },
        'Los fariseos y los herodianos no tenían mucho en común. Los fariseos desconfiaban de Herodes, que no era de linaje judío puro y había matado a muchos de sus maestros. Pero los unió un enemigo común. En Galilea, después de que Jesús sanó en sábado a un hombre con la mano seca, «salidos los fariseos, tomaron consejo con los herodianos contra él para destruirle» (Mr 3:6). Los fariseos veían en Jesús a alguien que quebrantaba el día de reposo; los herodianos, a un hombre que reunía multitudes en el territorio de Antipas, que acababa de matar a Juan el Bautista por la misma razón.',
        'En Jerusalén, poco antes de la cruz, fariseos y herodianos le preguntaron juntos si era lícito pagar tributo al César (Mr 12:13-14). Los herodianos eran precisamente los que aceptaban el gobierno de Roma y de sus aliados; los fariseos, los que lo soportaban con disgusto. Cualquier respuesta parecía dejar mal a Jesús ante uno de los dos grupos.',
        { h: 'La levadura de Herodes' },
        'Jesús advirtió a sus discípulos: «guardaos de la levadura de los fariseos, y de la levadura de Herodes» (Mr 8:15). La levadura es algo pequeño que se extiende por toda la masa. La de los fariseos era la hipocresía (Lc 12:1); la de Herodes, una fe que se acomoda al poder, que busca el reino en la política y que está dispuesta a eliminar a quien estorbe. Las dos pueden entrar en el corazón de un creyente.',
        { ejercicio: {
          pregunta: '¿Qué tenían en común los fariseos y los herodianos cuando se unieron contra Jesús?',
          opciones: [
            { t: 'Las mismas creencias sobre la ley y la pureza.', ok: false, por_que: 'Los herodianos eran un grupo político; no compartían el celo de los fariseos por la tradición.' },
            { t: 'La lealtad a Roma y al emperador.', ok: false, por_que: 'Los fariseos soportaban a Roma, pero no la defendían.' },
            { t: 'Un enemigo común: Jesús, que ponía en peligro su influencia sobre el pueblo.', ok: true, por_que: 'Sus razones eran distintas, religiosas en unos y políticas en otros, pero los dos querían deshacerse de Él (Marcos 3:6).' }
          ],
          explicacion: 'Lo mismo ocurrió con Herodes Antipas y Pilato, que «se hicieron amigos» el día de la cruz (Lucas 23:12).'
        } }
      ],
      pensar: 'Personas que no tenían nada en común se unieron para oponerse a Jesús. ¿Qué te enseña esto sobre cómo el rechazo a Cristo puede unir a quienes en todo lo demás están divididos?'
    },
    {
      id: 'samaritanos', n: 'Los samaritanos en tiempos de Jesús', ref: 'Juan 4:4-42; Lucas 9:51-56; Lucas 10:30-37; Lucas 17:11-19; Juan 8:48; Hechos 8:5-8', fecha: [-4, 66],
      visual: [
        img('../tierra-de-israel/img/pozo-jacob.webp', 'Jesús, de espaldas, sentado junto a un pozo de piedra a mediodía, conversando con una mujer samaritana que sostiene un cántaro; detrás se levanta el monte Gerizim', 'Jesús y la mujer samaritana junto al pozo de Jacob, frente al monte Gerizim (Juan 4). Recreación.'),
        mapa({ view: V.centro, capas: ['nt-samaria', 'nt-galilea', 'nt-judea'], lugares: ['sicar', 'monte-gerizim', 'samaria', 'jerusalen', 'nazaret', 'jerico'], trazos: ['jesus-samaria', 'c-jordan'] }),
        foto('../entre-los-testamentos/img/pascua-samaritana.webp', 'Un samaritano vestido de blanco, con gorro rojo y blanco, sentado sobre unas piedras afila el cuchillo para el sacrificio de la Pascua', 'Un samaritano prepara el cuchillo para el sacrificio de la Pascua en el monte Gerizim (2011). La comunidad samaritana celebra allí la Pascua hasta hoy.', 'CC BY 2.0 · Flavio~, vía Wikimedia Commons'),
        cita('Juan 4:19-26', 'Le dijo la mujer: Señor, me parece que tú eres profeta. Nuestros padres adoraron en este monte, y vosotros decís que en Jerusalén es el lugar donde se debe adorar. Jesús le dijo: Mujer, créeme, que la hora viene cuando ni en este monte ni en Jerusalén adoraréis al Padre. Vosotros adoráis lo que no sabéis; nosotros adoramos lo que sabemos; porque la salvación viene de los judíos. Mas la hora viene, y ahora es, cuando los verdaderos adoradores adorarán al Padre en espíritu y en verdad; porque también el Padre tales adoradores busca que le adoren. Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren. Le dijo la mujer: Sé que ha de venir el Mesías, llamado el Cristo; cuando él venga nos declarará todas las cosas. Jesús le dijo: Yo soy, el que habla contigo.')
      ],
      texto: [
        'El origen de los samaritanos y de su templo en el monte Gerizim se estudia en Entre los Testamentos. Ese templo había sido destruido por el asmoneo Juan Hircano hacia el año 110 a.C., pero los samaritanos seguían subiendo a la cumbre del monte para adorar, como lo hacen hasta hoy. Solo aceptaban los cinco libros de Moisés, en su propia versión, y esperaban un profeta como Moisés que vendría a restaurarlo todo.',
        ir('Ver Entre los Testamentos: los samaritanos y el monte Gerizim', R.entre + '#persa/3'),
        { h: 'Una enemistad que empeoraba' },
        'En tiempos de Jesús, la enemistad entre judíos y samaritanos estaba en su peor momento. Josefo cuenta que, siendo Coponio gobernador, unos samaritanos entraron de noche en el templo de Jerusalén durante la Pascua y esparcieron huesos humanos en los pórticos, para contaminarlo. Años más tarde, hacia el 52, unos peregrinos galileos fueron asesinados en una aldea samaritana camino de la fiesta, y la venganza provocó una pequeña guerra. Llamar a alguien samaritano era un insulto: a Jesús le dijeron «¿No decimos bien nosotros, que tú eres samaritano, y que tienes demonio?» (Jn 8:48).',
        'Por eso la mujer de Sicar se sorprendió de que un judío le pidiera agua, «porque judíos y samaritanos no se tratan entre sí» (Jn 4:9). Y por eso, cuando una aldea samaritana no quiso recibir a Jesús porque iba a Jerusalén, Jacobo y Juan quisieron pedir fuego del cielo (Lc 9:52-54).',
        { h: 'Lo que hizo Jesús' },
        'Jesús reprendió a Jacobo y a Juan: «Vosotros no sabéis de qué espíritu sois» (Lc 9:55). Se detuvo junto al pozo de Jacob, habló con una mujer samaritana y se quedó dos días en su pueblo, donde muchos creyeron. No negó la verdad: le dijo que «la salvación viene de los judíos» (Jn 4:22). Pero le anunció que llegaba la hora en que los verdaderos adoradores adorarían al Padre «en espíritu y en verdad», ni en Gerizim ni en Jerusalén, y se le reveló como el Mesías que ella esperaba (Jn 4:23-26).',
        'En sus parábolas, el héroe fue un samaritano que se compadeció del herido que un sacerdote y un levita habían dejado en el camino (Lc 10:33). Y de diez leprosos sanados, solo volvió a dar gracias uno, «y éste era samaritano» (Lc 17:16).',
        { h: 'Hasta Samaria' },
        'Antes de ascender, Jesús envió a sus discípulos a ser testigos «en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Pocos años después, Felipe predicó en Samaria, y Pedro y Juan, el mismo Juan que había querido hacer bajar fuego, oraron allí para que los samaritanos recibieran el Espíritu Santo (Hch 8:14-17).'
      ],
      pensar: 'Juan quiso una vez pedir fuego del cielo sobre una aldea samaritana, y años después oró para que los samaritanos recibieran el Espíritu Santo. ¿A qué personas o grupos te cuesta amar, y qué tendría que cambiar en ti para verlos como Jesús los ve?'
    },
    {
      id: 'pueblo', n: 'El pueblo de la tierra: pecadores, publicanos y pobres', ref: 'Juan 7:47-49; Lucas 15:1-2; Mateo 9:10-13; Mateo 11:19; Lucas 18:9-14; Lucas 19:1-10; Lucas 4:18', fecha: [-4, 66],
      visual: [
        img('mj-zaqueo.webp', 'En una calle de Jericó bordeada de palmeras, una multitud rodea a Jesús, visto de espaldas, que levanta la mirada hacia un sicómoro donde está subido Zaqueo, un hombre bajo de unos cuarenta y cinco años, con ropa fina de comerciante rico; algunos en la multitud murmuran indignados', '«Zaqueo, date prisa, desciende, porque hoy es necesario que pose yo en tu casa» (Lucas 19:5). Recreación.'),
        tabla({
          titulo: 'Quiénes eran los «pecadores» de los evangelios',
          cab: ['Grupo', 'Por qué eran despreciados', 'Encuentros con Jesús'],
          filas: [
            ['El pueblo sencillo', 'No conocía ni cumplía las reglas de los fariseos', 'Las multitudes que lo seguían (Juan 7:49)'],
            ['Publicanos', 'Cobraban para Roma o para Herodes, y muchos robaban', 'Mateo, Zaqueo, el publicano del templo'],
            ['Pecadores públicos', 'Vivían en pecado conocido por todos', 'La mujer que ungió sus pies (Lucas 7:37-50)'],
            ['Oficios despreciados', 'Pastores, curtidores y otros, por su trabajo o su impureza', 'Los pastores de Belén (Lucas 2:8-20)'],
            ['Pobres, enfermos y mendigos', 'Muchos pensaban que su desgracia era castigo de Dios', 'Bartimeo, el ciego de nacimiento (Juan 9:2)']
          ]
        }),
        cita('Lucas 18:10-14', 'Dos hombres subieron al templo a orar: uno era fariseo, y el otro publicano. El fariseo, puesto en pie, oraba consigo mismo de esta manera: Dios, te doy gracias porque no soy como los otros hombres, ladrones, injustos, adúlteros, ni aun como este publicano; ayuno dos veces a la semana, doy diezmos de todo lo que gano. Mas el publicano, estando lejos, no quería ni aun alzar los ojos al cielo, sino que se golpeaba el pecho, diciendo: Dios, sé propicio a mí, pecador. Os digo que éste descendió a su casa justificado antes que el otro; porque cualquiera que se enaltece, será humillado; y el que se humilla será enaltecido.')
      ],
      texto: [
        'La gran mayoría de los judíos del tiempo de Jesús no eran fariseos, ni saduceos, ni esenios. Eran campesinos, pescadores, jornaleros y artesanos que iban a la sinagoga, subían a las fiestas cuando podían y trataban de vivir según la ley, pero no tenían tiempo ni formación para cumplir todas las reglas de pureza y de diezmos que enseñaban los fariseos. Los maestros los llamaban «el pueblo de la tierra», y algunos los despreciaban. Cuando los alguaciles volvieron sin arrestar a Jesús, los fariseos dijeron: «esta gente que no sabe la ley, maldita es» (Jn 7:49).',
        { h: 'Los pecadores' },
        'En los evangelios, los «pecadores» no son simplemente las personas que pecan, porque todos pecan. Son los que tenían fama de vivir fuera de la ley: los que cometían pecados conocidos por todos, las prostitutas, los publicanos y quienes tenían oficios considerados deshonestos o impuros. Con ellos, una persona religiosa no compartía la mesa, porque comer juntos era señal de amistad y de aceptación.',
        { h: '«Amigo de publicanos y de pecadores»' },
        'Jesús hizo justamente lo que no se hacía: comió con ellos. Sus críticos lo llamaron, para burlarse, «amigo de publicanos y de pecadores» (Mt 11:19), y murmuraban: «Este a los pecadores recibe, y con ellos come» (Lc 15:2). Jesús respondió con tres parábolas: la oveja perdida, la moneda perdida y el hijo pródigo. Y explicó su misión: «Los sanos no tienen necesidad de médico, sino los enfermos. No he venido a llamar a justos, sino a pecadores» (Mr 2:17).',
        'Jesús no aprobó el pecado de nadie. A Zaqueo no le dijo que su vida estaba bien; pero al ser recibido por Jesús, Zaqueo se arrepintió, devolvió lo robado y oyó: «Hoy ha venido la salvación a esta casa» (Lc 19:9).',
        { h: 'El fariseo y el publicano' },
        'La parábola del fariseo y el publicano resume todo. El fariseo daba gracias porque no era «como los otros hombres», y enumeraba sus ayunos y sus diezmos. El publicano, desde lejos, sin atreverse a levantar los ojos, solo decía: «Dios, sé propicio a mí, pecador». Jesús concluyó que el publicano volvió a su casa justificado, y no el otro (Lc 18:11-14).',
        { h: 'Buenas nuevas a los pobres' },
        'En la sinagoga de Nazaret, Jesús anunció que el Espíritu del Señor lo había ungido «para dar buenas nuevas a los pobres» (Lc 4:18). El pueblo sencillo, los enfermos y los despreciados fueron los primeros en recibirlo con alegría.'
      ],
      pensar: '¿Te identificas más con el fariseo o con el publicano de la parábola? ¿Qué personas de tu entorno podrían sentir que la iglesia no es para ellas, y cómo podrías mostrarles la gracia que Jesús mostró a Zaqueo?'
    }
  ];

  window.__MJ.grupos = grupos;
})();
/* El mundo judío en tiempos de Jesús · ruta IV. La fe vivida (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA IV. La fe vivida ==================
  const fe = [
    {
      id: 'templo', n: 'El templo en el centro de la vida', ref: 'Lucas 1:8-10; Lucas 2:22-24; Hechos 3:1; Juan 2:13-21; Marcos 11:15-17; Efesios 2:14', fecha: [-20, 70],
      visual: [
        img('../imperio-romano/img/roma-templo-herodes.webp', 'El templo de Jerusalén ampliado por Herodes, con sus grandes atrios y pórticos, visto desde el monte de los Olivos', 'El templo de Herodes desde el monte de los Olivos. Recreación.'),
        foto('foto-inscripcion-templo.jpg', 'Bloque de piedra caliza con siete líneas de letras griegas mayúsculas talladas, la inscripción que prohibía a los gentiles pasar al interior del templo', 'Inscripción del templo de Jerusalén hallada en 1871: advierte en griego que ningún extranjero pase la balaustrada que rodeaba el santuario, y que quien lo haga será culpable de su propia muerte. Museo Arqueológico de Estambul.', 'CC BY-SA 3.0 · Onceinawhile, vía Wikimedia Commons'),
        img('../medidas-biblicas/img/cambistas.webp', 'Cambistas sentados detrás de mesas de madera en el atrio del templo de Jerusalén, con balanzas y montones de monedas de plata, mientras peregrinos esperan para cambiar dinero', 'Los cambistas cambiaban monedas romanas y griegas por siclos de Tiro para el impuesto del templo. Recreación.'),
        cita('Marcos 11:15-17', 'Vinieron, pues, a Jerusalén; y entrando Jesús en el templo, comenzó a echar fuera a los que vendían y compraban en el templo; y volcó las mesas de los cambistas, y las sillas de los que vendían palomas; y no consentía que nadie atravesase el templo llevando utensilio alguno. Y les enseñaba, diciendo: ¿No está escrito: Mi casa será llamada casa de oración para todas las naciones? Mas vosotros la habéis hecho cueva de ladrones.')
      ],
      texto: [
        'Para un judío del siglo I, el centro del mundo era el templo de Jerusalén. Allí estaba la presencia de Dios, allí se ofrecían los sacrificios por el pecado y allí subía el pueblo en las fiestas. Herodes el Grande lo había reconstruido y ampliado desde el año 20 a.C., y las obras seguían en tiempos de Jesús: «En cuarenta y seis años fue edificado este templo», le dijeron (Jn 2:20). Se terminó recién en el año 63, siete años antes de ser destruido.',
        ir('Recorrer en 3D El templo de Herodes', R.templo),
        { h: 'Un día en el templo' },
        'Cada día, al amanecer y a media tarde, los sacerdotes ofrecían un cordero en holocausto y quemaban incienso en el altar de oro. A la hora de la ofrenda de la tarde, la hora novena, el pueblo se reunía a orar: así lo hicieron Pedro y Juan cuando sanaron al cojo de la puerta la Hermosa (Hch 3:1). Los sacerdotes servían por turnos, y Zacarías estaba de turno cuando «le tocó en suerte ofrecer el incienso» y el ángel le anunció el nacimiento de Juan (Lc 1:9). Además, cada familia traía ofrendas por sus pecados y sus purificaciones, como José y María, que ofrecieron el sacrificio de los pobres: «un par de tórtolas, o dos palominos» (Lc 2:24).',
        { h: 'Una pared de separación' },
        'El monte del templo tenía un gran atrio exterior, abierto a todos, incluso a los gentiles. Más adentro, una balaustrada de piedra marcaba el límite que ningún extranjero podía cruzar. Josefo cuenta que había avisos en griego y en latín, y se han hallado dos de ellos: quien los cruzara sería culpable de su propia muerte. Por eso casi matan a Pablo cuando lo acusaron de haber metido a griegos en el templo (Hch 21:28). Pablo usó esa imagen para hablar de la obra de Cristo, que «de ambos pueblos hizo uno, derribando la pared intermedia de separación» (Ef 2:14).',
        { h: 'Un mercado en la casa de oración' },
        'Los peregrinos que llegaban de lejos necesitaban comprar animales sin defecto para sus sacrificios y cambiar su dinero por siclos de Tiro, la única moneda aceptada para el impuesto del templo. Ese comercio se había instalado en el atrio exterior, el único lugar donde podían orar los gentiles. Jesús volcó las mesas de los cambistas y dijo: «¿No está escrito: Mi casa será llamada casa de oración para todas las naciones? Mas vosotros la habéis hecho cueva de ladrones» (Mr 11:17).',
        { h: 'Un templo mayor' },
        'Jesús amó el templo: lo llamó «casa de mi Padre» (Jn 2:16) y enseñó cada día en sus pórticos. Pero anunció que sería destruido y que Él era algo mayor: «Destruid este templo, y en tres días lo levantaré». Hablaba «del templo de su cuerpo» (Jn 2:19-21). En Él, Dios habita con los hombres.'
      ],
      pensar: 'Jesús se indignó porque el único lugar donde los gentiles podían orar se había convertido en un mercado. ¿Qué cosas pueden ocupar en la iglesia, o en tu vida, el lugar que corresponde a la oración y al encuentro con Dios?'
    },
    {
      id: 'fiestas', n: 'Las fiestas de peregrinación', ref: 'Deuteronomio 16:16; Lucas 2:41-42; Juan 7:2, 37-38; Juan 10:22-23; Hechos 2:1-11; Juan 2:13', fecha: [-6, 70],
      visual: [
        esq('esquema-calendario.svg', 'Esquema circular del año judío con los doce meses, las fiestas de Pascua, Pentecostés, Trompetas, Expiación, Tabernáculos, Dedicación y Purim, y las estaciones de lluvia y cosecha', 'El año judío: en rojo, las tres fiestas de peregrinación.'),
        tabla({
          titulo: 'Jesús en las fiestas según el evangelio de Juan',
          cab: ['Fiesta', 'Pasaje', 'Lo que hizo o enseñó Jesús'],
          filas: [
            ['Primera Pascua', 'Juan 2:13-22', 'Purifica el templo'],
            ['Una fiesta de los judíos', 'Juan 5:1-18', 'Sana al paralítico de Betesda en sábado'],
            ['Segunda Pascua', 'Juan 6:4', 'Alimenta a cinco mil en Galilea: «Yo soy el pan de vida»'],
            ['Tabernáculos', 'Juan 7–8', '«Si alguno tiene sed, venga a mí y beba»; «Yo soy la luz del mundo»'],
            ['Dedicación', 'Juan 10:22-39', '«Yo y el Padre uno somos»'],
            ['Última Pascua', 'Juan 11:55–19:42', 'Muere como el Cordero de Dios']
          ]
        }),
        cita('Juan 7:37-39', 'En el último y gran día de la fiesta, Jesús se puso en pie y alzó la voz, diciendo: Si alguno tiene sed, venga a mí y beba. El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva. Esto dijo del Espíritu que habían de recibir los que creyesen en él; pues aún no había venido el Espíritu Santo, porque Jesús no había sido aún glorificado.')
      ],
      texto: [
        'La ley mandaba que todo varón israelita se presentara ante Dios tres veces al año, en las fiestas de los panes sin levadura, de las semanas y de los tabernáculos (Dt 16:16). En el siglo I, muchos judíos de Galilea y de la diáspora no podían ir las tres veces, pero miles y miles llegaban a Jerusalén, sobre todo para la Pascua. La familia de Jesús subía «todos los años» (Lc 2:41). El sentido de cada fiesta y su cumplimiento en Cristo se estudian en Las fiestas de Israel (en preparación); aquí basta con ver cómo se vivían.',
        { h: 'La Pascua' },
        'En la tarde del 14 de nisán, los jefes de familia llevaban sus corderos al templo, donde los sacerdotes recogían la sangre y la derramaban al pie del altar. Esa noche, cada familia o grupo comía el cordero en Jerusalén, con pan sin levadura, hierbas amargas y vino, recordando la salida de Egipto. La ciudad se llenaba tanto que los peregrinos acampaban en los alrededores, en lugares como Betania o el monte de los Olivos. El gobernador romano subía con más soldados, porque la fiesta de la liberación encendía la esperanza de una nueva libertad.',
        { h: 'Pentecostés' },
        'Cincuenta días después se celebraba la fiesta de las semanas, o Pentecostés, en la que se ofrecían a Dios los primeros panes de la cosecha de trigo. Por eso, en el Pentecostés después de la resurrección, había en Jerusalén «judíos, varones piadosos, de todas las naciones bajo el cielo» (Hch 2:5), que oyeron a los discípulos hablar en sus propias lenguas cuando fueron llenos del Espíritu Santo.',
        { h: 'Los tabernáculos' },
        'En otoño, después de la cosecha de la uva y la aceituna, el pueblo vivía siete días en cabañas de ramas, recordando el desierto. Según la Mishná, cada mañana un sacerdote traía agua del estanque de Siloé y la derramaba junto al altar, y por las noches se encendían grandes candeleros en el atrio de las mujeres. Si esas ceremonias se hacían ya en tiempos de Jesús, como es probable, dan un fondo impresionante a sus palabras en esa fiesta: «Si alguno tiene sed, venga a mí y beba» (Jn 7:37) y «Yo soy la luz del mundo» (Jn 8:12).',
        { h: 'La Dedicación' },
        'En invierno se recordaba la purificación del templo por Judas Macabeo en el 164 a.C., con ocho días de lámparas encendidas: es la fiesta que hoy se llama Janucá. Juan cuenta que Jesús estaba en el templo, en el pórtico de Salomón, durante esa fiesta (Jn 10:22-23).',
        ir('Ver Entre los Testamentos: la purificación del templo y la fiesta de la Dedicación', R.entre + '#asmoneos/3')
      ],
      pensar: 'En la fiesta del agua, Jesús invitó a todo el que tuviera sed a venir a Él, y Juan explica que hablaba del Espíritu Santo (Juan 7:39). ¿De qué tienes sed hoy, y qué significa para ti venir a Jesús y beber?'
    },
    {
      id: 'sinagoga', n: 'La sinagoga en tiempos de Jesús', ref: 'Lucas 4:16-30; Marcos 1:21-28; Marcos 5:22; Lucas 13:10-17; Mateo 10:17; Juan 9:22; Hechos 13:14-15', fecha: [-6, 70],
      visual: [
        img('../palabra-de-dios/img/jesus-nazaret.webp', 'En la sinagoga de Nazaret, un hombre de pie, visto de espaldas, sostiene abierto el rollo de Isaías ante los asistentes sentados que lo miran atentos', 'Jesús lee el libro del profeta Isaías en la sinagoga de Nazaret (Lucas 4:16-21). Recreación.'),
        foto('foto-piedra-magdala.jpg', 'Bloque de piedra tallado con un candelero de siete brazos sobre una base, flanqueado por dos ánforas y columnas, en una vitrina al aire libre', 'La piedra de Magdala, hallada en 2009 en una sinagoga del siglo I junto al mar de Galilea, fotografiada en el sitio arqueológico en 2012. Es la representación más antigua del candelero del templo hallada en una sinagoga. La sinagoga se estudiará en su propio recurso.', 'CC BY-SA 3.0 · Hanay, vía Wikimedia Commons'),
        tabla({
          titulo: 'Un sábado en la sinagoga',
          cab: ['Momento', 'Qué se hacía', 'En el Nuevo Testamento'],
          filas: [
            ['Recitación', 'El Shemá: «Oye, Israel: Jehová nuestro Dios, Jehová uno es»', 'Marcos 12:29'],
            ['Oraciones', 'Bendiciones y oraciones de la comunidad', 'Mateo 6:5'],
            ['Lectura de la ley', 'Una porción de los libros de Moisés, en hebreo, traducida al arameo donde hacía falta', 'Hechos 15:21'],
            ['Lectura de los profetas', 'Un pasaje de los profetas', 'Lucas 4:17; Hechos 13:15'],
            ['Explicación', 'Un hombre, a veces un visitante, explica lo leído, sentado', 'Lucas 4:20-21; Hechos 13:15-16'],
            ['Bendición', 'Si había un sacerdote, daba la bendición final', 'Números 6:24-26']
          ],
          nota: 'El orden exacto y algunas oraciones se conocen por fuentes judías posteriores; el Nuevo Testamento muestra las lecturas y la explicación.'
        }),
        cita('Lucas 4:16-21', 'Vino a Nazaret, donde se había criado; y en el día de reposo entró en la sinagoga, conforme a su costumbre, y se levantó a leer. Y se le dio el libro del profeta Isaías; y habiendo abierto el libro, halló el lugar donde estaba escrito: El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres; Me ha enviado a sanar a los quebrantados de corazón; A pregonar libertad a los cautivos, Y vista a los ciegos; A poner en libertad a los oprimidos; A predicar el año agradable del Señor. Y enrollando el libro, lo dio al ministro, y se sentó; y los ojos de todos en la sinagoga estaban fijos en él. Y comenzó a decirles: Hoy se ha cumplido esta Escritura delante de vosotros.')
      ],
      texto: [
        'El origen de la sinagoga y la inscripción de Teodoto se estudian en Entre los Testamentos. En tiempos de Jesús había una sinagoga en cada aldea judía de Galilea y de Judea, y muchas en Jerusalén y en las ciudades de la diáspora. La arqueología ha encontrado varias anteriores al año 70: en Magdala, Gamla, Masada y el Herodión, entre otras. Eran salas sencillas, con bancos de piedra alrededor de las paredes, mirando hacia el centro donde se leía la Escritura.',
        ir('Ver Entre los Testamentos: la sinagoga', R.entre + '#nacio/1'),
        { h: 'Quiénes la dirigían' },
        'No tenía sacerdotes ni sacrificios. La dirigía el principal de la sinagoga, un hombre respetado de la comunidad que organizaba las reuniones y elegía quién leería y explicaría la Escritura. Jairo, cuya hija resucitó Jesús, era «uno de los principales de la sinagoga» (Mr 5:22). Un servidor guardaba los rollos y se los entregaba al lector: a él le devolvió Jesús el libro de Isaías (Lc 4:20). Los visitantes con conocimiento podían ser invitados a hablar, y así Jesús y después Pablo pudieron enseñar en tantas sinagogas (Hch 13:15).',
        { h: 'Jesús en la sinagoga' },
        'Jesús iba a la sinagoga el día de reposo «conforme a su costumbre» (Lc 4:16), y la usó como lugar principal de su enseñanza en Galilea (Mr 1:39). En Nazaret leyó Isaías 61 y dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21). En Capernaúm liberó a un endemoniado en medio de la reunión, y la gente se maravilló de su autoridad (Mr 1:21-27). En otra sinagoga sanó a una mujer encorvada, y el principal de la sinagoga se enojó porque lo hizo en sábado (Lc 13:14).',
        { h: 'Un lugar de disciplina' },
        'La sinagoga era también un tribunal local. Allí se castigaba con azotes a quien quebrantaba la ley, y Jesús advirtió a sus discípulos: «en sus sinagogas os azotarán» (Mt 10:17). Pablo recibió ese castigo cinco veces (2 Co 11:24). La pena más dura era la expulsión de la comunidad, y Juan cuenta que algunos ya habían acordado expulsar a quien confesara a Jesús como el Mesías (Jn 9:22).',
        { ejercicio: {
          pregunta: '¿Por qué Pablo podía predicar en las sinagogas de las ciudades que visitaba?',
          opciones: [
            { t: 'Porque era sacerdote y tenía derecho a dirigir el culto.', ok: false, por_que: 'Pablo era de la tribu de Benjamín, no sacerdote; además, la sinagoga no la dirigían sacerdotes.' },
            { t: 'Porque en la sinagoga se podía invitar a un visitante con conocimiento a explicar la Escritura.', ok: true, por_que: 'Así ocurrió en Antioquía de Pisidia, donde los principales de la sinagoga lo invitaron a hablar después de la lectura (Hechos 13:15).' },
            { t: 'Porque los romanos obligaban a las sinagogas a recibir a los predicadores.', ok: false, por_que: 'Roma no intervenía en el culto de las sinagogas; la invitación dependía de sus dirigentes.' }
          ],
          explicacion: 'La costumbre de la sinagoga abrió la puerta para que el evangelio se predicara primero a los judíos en cada ciudad del imperio.'
        } }
      ],
      pensar: 'Jesús tenía la costumbre de ir a la sinagoga cada día de reposo, aunque conocía las fallas de sus dirigentes. ¿Qué lugar ocupa en tu vida la reunión con el pueblo de Dios para escuchar su Palabra?'
    },
    {
      id: 'sabado', n: 'El día de reposo y sus disputas', ref: 'Marcos 2:23-28; Marcos 3:1-6; Lucas 13:10-17; Juan 5:8-18; Juan 9:13-16; Mateo 12:5-8; Hechos 1:12', fecha: [27, 30],
      visual: [
        img('mj-espigas-sabado.webp', 'Un sábado de primavera, en un campo de trigo maduro de Galilea, Pedro y Juan, junto a otros discípulos, arrancan espigas, las frotan entre las manos y comen los granos mientras caminan; Jesús camina adelante, visto de espaldas, y en el borde del campo dos fariseos con flecos azules en sus mantos los señalan con desaprobación', '«Mira, ¿por qué hacen en el día de reposo lo que no es lícito?» (Marcos 2:24). Recreación.'),
        tabla({
          titulo: 'Disputas sobre el día de reposo en los evangelios',
          cab: ['Pasaje', 'Lo que pasó', 'La respuesta de Jesús'],
          filas: [
            ['Marcos 2:23-28', 'Los discípulos arrancan espigas', 'David comió los panes; «el día de reposo fue hecho por causa del hombre»'],
            ['Marcos 3:1-6', 'Sana a un hombre con la mano seca', '«¿Es lícito en los días de reposo hacer bien, o hacer mal?»'],
            ['Lucas 13:10-17', 'Sana a una mujer encorvada', 'Desatan al buey para darle agua; ¿no desatar a esta hija de Abraham?'],
            ['Juan 5:1-18', 'El paralítico sanado lleva su lecho', '«Mi Padre hasta ahora trabaja, y yo trabajo»'],
            ['Juan 9:1-16', 'Hace lodo y sana a un ciego de nacimiento', '«Mientras estoy en el mundo, luz soy del mundo»']
          ]
        }),
        cita('Marcos 2:23-28', 'Aconteció que al pasar él por los sembrados un día de reposo, sus discípulos, andando, comenzaron a arrancar espigas. Entonces los fariseos le dijeron: Mira, ¿por qué hacen en el día de reposo lo que no es lícito? Pero él les dijo: ¿Nunca leísteis lo que hizo David cuando tuvo necesidad, y sintió hambre, él y los que con él estaban; cómo entró en la casa de Dios, siendo Abiatar sumo sacerdote, y comió los panes de la proposición, de los cuales no es lícito comer sino a los sacerdotes, y aun dio a los que con él estaban? También les dijo: El día de reposo fue hecho por causa del hombre, y no el hombre por causa del día de reposo. Por tanto, el Hijo del Hombre es Señor aun del día de reposo.')
      ],
      texto: [
        'El día de reposo, el sábado, era una de las señales que distinguían a los judíos en todo el imperio. Los romanos se burlaban de ellos por descansar un día de cada siete, pero los judíos lo guardaban con fidelidad desde la puesta del sol del viernes hasta la del sábado. El viernes era «la preparación, es decir, la víspera del día de reposo» (Mr 15:42): había que cocinar, encender las lámparas y terminar el trabajo antes del atardecer.',
        { h: 'Un cerco alrededor del mandamiento' },
        'La ley prohibía trabajar en el día de reposo, pero no decía en detalle qué era trabajo. Los maestros lo definieron con mucho cuidado para no quebrantarlo ni por error. La Mishná, escrita más tarde, enumera treinta y nueve tipos de trabajo prohibidos, entre ellos segar, trillar, encender fuego o llevar una carga de un lugar a otro. También se fijó cuánto se podía caminar: «camino de un día de reposo» (Hch 1:12), unos dos mil codos, menos de un kilómetro. Los esenios eran todavía más estrictos que los fariseos.',
        'Dentro de ese sistema, arrancar espigas y frotarlas en las manos era segar y trillar; llevar una camilla era cargar; hacer lodo con saliva era amasar; y curar a un enfermo que no estaba en peligro de muerte era practicar la medicina, que podía esperar al día siguiente. Por eso el principal de la sinagoga dijo: «Seis días hay en que se debe trabajar; en éstos, pues, venid y sed sanados, y no en día de reposo» (Lc 13:14).',
        { h: 'El Señor del día de reposo' },
        'Jesús no despreció el día de reposo: iba a la sinagoga y lo guardó. Pero rechazó las reglas que lo convertían en una carga. Recordó que la misma ley permitía hacer el bien en sábado: los sacerdotes trabajaban en el templo, se circuncidaba a un niño si el octavo día caía en sábado (Jn 7:22-23), y cualquiera sacaba a su animal de un pozo. Y concluyó: «El día de reposo fue hecho por causa del hombre, y no el hombre por causa del día de reposo. Por tanto, el Hijo del Hombre es Señor aun del día de reposo» (Mr 2:27-28).',
        'Esa última frase era lo que más escandalizaba: Jesús reclamaba autoridad sobre un mandamiento que Dios había dado en el Sinaí. Juan dice que por eso «los judíos aun más procuraban matarle, porque no sólo quebrantaba el día de reposo, sino que también decía que Dios era su propio Padre, haciéndose igual a Dios» (Jn 5:18).',
        ir('Ver Pactos y dispensaciones: el día de reposo (Éxodo 20:8)', R.pactos + '#taller/3')
      ],
      pensar: 'Jesús enseñó que el día de reposo fue hecho para el bien del hombre. ¿Cómo vives el descanso y el tiempo dedicado a Dios: como una carga de reglas o como un regalo de su gracia?'
    },
    {
      id: 'pureza', n: 'Pureza: lavamientos, baños rituales y tinajas de piedra', ref: 'Levítico 11:44; Marcos 1:40-42; Marcos 5:25-34, 41-42; Marcos 7:1-4, 14-23; Juan 2:6; Hechos 10:14-15', fecha: [-6, 70],
      visual: [
        img('../medidas-biblicas/img/tinajas.webp', 'Seis grandes tinajas de piedra caliza alineadas junto a un muro en el patio de una casa de Galilea durante una boda, mientras dos sirvientes vierten agua en ellas con cántaros', '«Seis tinajas de piedra para agua, conforme al rito de la purificación de los judíos» (Juan 2:6). Recreación.'),
        foto('foto-mikve.jpg', 'Pileta rectangular excavada en la roca con una escalinata de piedra que baja hasta el fondo, un baño ritual antiguo', 'Baño ritual (mikve) del período del segundo templo junto al monte del templo, en Jerusalén, con su escalinata para descender al agua. Se han hallado cientos en Jerusalén, Qumrán, Magdala y otras aldeas.', 'CC BY-SA 3.0 · Rdusatko, vía Wikimedia Commons'),
        cita('Marcos 7:14-15', 'Y llamando a sí a toda la multitud, les dijo: Oídme todos, y entended: Nada hay fuera del hombre que entre en él, que le pueda contaminar; pero lo que sale de él, eso es lo que contamina al hombre.')
      ],
      texto: [
        'La ley de Moisés distinguía entre lo puro y lo impuro. Algunas cosas hacían a una persona ritualmente impura: tocar un cadáver, tener lepra, ciertos flujos del cuerpo, el parto o comer animales prohibidos. La impureza no era lo mismo que el pecado: era una condición que impedía acercarse al santuario y que se quitaba con baños, el paso del tiempo y, a veces, un sacrificio. Así Dios enseñaba a su pueblo que Él es santo: «seréis santos, porque yo soy santo» (Lv 11:44).',
        { h: 'Una preocupación de todos los días' },
        'En tiempos de Jesús, la pureza era una preocupación muy viva. Los sacerdotes debían estar puros para servir en el templo, y los peregrinos para entrar en sus atrios. Los fariseos se proponían vivir con la pureza de los sacerdotes en sus propias casas y en sus comidas. La arqueología lo confirma: en Jerusalén, en Qumrán, en Magdala y en muchas aldeas de Judea y Galilea se han hallado cientos de baños rituales, piletas excavadas en la roca con una escalinata para descender al agua.',
        'También se han encontrado talleres de vasijas de piedra caliza. Según las reglas de los maestros, la piedra no se contaminaba como el barro, y por eso se usaba para guardar el agua de las purificaciones. En la boda de Caná había «seis tinajas de piedra para agua, conforme al rito de la purificación de los judíos» (Jn 2:6). Jesús convirtió en vino el agua de esas tinajas: el agua de la purificación se volvió el vino de la fiesta del Mesías.',
        { h: 'Jesús y lo impuro' },
        'Una persona pura que tocaba a una impura quedaba impura. Con Jesús ocurrió lo contrario. Tocó a un leproso, y el leproso quedó limpio (Mr 1:41-42). Una mujer con flujo de sangre, impura desde hacía doce años, tocó su manto y quedó sana (Mr 5:29). Tomó de la mano a la hija muerta de Jairo, y la niña se levantó (Mr 5:41-42). En lugar de contaminarse, Jesús comunicaba su santidad y su vida.',
        { h: 'Lo que sale del corazón' },
        'Cuando los fariseos se quejaron de que sus discípulos comían sin lavarse las manos según la tradición, Jesús llamó a la multitud y enseñó: «Nada hay fuera del hombre que entre en él, que le pueda contaminar; pero lo que sale de él, eso es lo que contamina al hombre» (Mr 7:15). Y explicó que del corazón salen los malos pensamientos, los adulterios, los robos y la soberbia (Mr 7:21-23). Marcos agrega que con esto Jesús declaraba limpios todos los alimentos (Mr 7:19), algo que Pedro entendió después en la visión de Jope (Hch 10:15).',
        { ejercicio: {
          pregunta: 'Según la ley de Moisés, ¿era pecado quedar ritualmente impuro?',
          opciones: [
            { t: 'Sí, toda impureza era un pecado que requería arrepentimiento.', ok: false, por_que: 'Muchas impurezas venían de cosas buenas o inevitables, como sepultar a un familiar o dar a luz.' },
            { t: 'No necesariamente; era una condición que impedía acercarse al santuario hasta purificarse.', ok: true, por_que: 'La ley daba la manera de quitarla con baños, tiempo y, a veces, un sacrificio; era pecado acercarse a lo santo estando impuro.' },
            { t: 'No, porque la impureza solo afectaba a los sacerdotes.', ok: false, por_que: 'Las leyes de pureza se aplicaban a todo el pueblo, aunque los sacerdotes tenían reglas más estrictas.' }
          ],
          explicacion: 'Las leyes de pureza enseñaban la santidad de Dios; Jesús mostró que la impureza que más importa es la del corazón, y que solo Él puede limpiarla.'
        } }
      ],
      pensar: 'Jesús enseñó que lo que contamina al hombre sale de su corazón. ¿Qué cosas cuidas mucho por fuera mientras descuidas lo que hay en tu corazón?'
    },
    {
      id: 'tradicion', n: 'La tradición de los ancianos y el corbán', ref: 'Marcos 7:1-13; Mateo 15:1-9; Mateo 23:16-22; Gálatas 1:14; Colosenses 2:8', fecha: [-6, 70],
      visual: [
        img('mj-lavamiento-manos.webp', 'En el patio de una casa judía de Galilea en el siglo I, antes de comer, un padre de familia fariseo vierte agua de un jarro de piedra sobre las manos de su hijo adolescente, mientras la familia espera junto a una mesa baja con pan y aceitunas; sobre un estante se ven vasijas de piedra caliza', 'Antes de comer, los fariseos se lavaban las manos según la tradición de los ancianos (Marcos 7:3). Recreación con personas anónimas.'),
        tabla({
          titulo: 'Mandamiento de Dios y tradición de hombres',
          cab: ['', 'El mandamiento', 'La tradición', 'Lo que dijo Jesús'],
          filas: [
            ['Los padres', '«Honra a tu padre y a tu madre» (Éxodo 20:12)', 'Declarar los bienes «corbán» libera de ayudar a los padres', 'Invalidan la palabra de Dios (Marcos 7:13)'],
            ['Las manos', 'La ley manda lavamientos a los sacerdotes al servir', 'Todos deben lavarse las manos antes de comer', 'Lo que contamina sale del corazón (Marcos 7:15)'],
            ['Los juramentos', 'Cumplir lo que se jura (Números 30:2)', 'Jurar por el templo no obliga; por el oro del templo, sí', 'Todo juramento es ante Dios (Mateo 23:16-22)']
          ]
        }),
        cita('Marcos 7:9-13', 'Les decía también: Bien invalidáis el mandamiento de Dios para guardar vuestra tradición. Porque Moisés dijo: Honra a tu padre y a tu madre; y: El que maldiga al padre o a la madre, muera irremisiblemente. Pero vosotros decís: Basta que diga un hombre al padre o a la madre: Es Corbán (que quiere decir, mi ofrenda a Dios) todo aquello con que pudiera ayudarte, y no le dejáis hacer más por su padre o por su madre, invalidando la palabra de Dios con vuestra tradición que habéis transmitido. Y muchas cosas hacéis semejantes a estas.')
      ],
      texto: [
        'Los fariseos tenían en gran estima la tradición de los ancianos: las enseñanzas de los maestros anteriores que explicaban cómo cumplir la ley en cada detalle de la vida. Se transmitía de memoria, de maestro a discípulo, y con el tiempo se puso por escrito en la Mishná. Los fariseos la consideraban casi tan obligatoria como la ley de Moisés; los saduceos, en cambio, la rechazaban.',
        { h: 'Un cerco para la ley' },
        'Un dicho antiguo que conserva la Mishná pedía a los maestros hacer un cerco alrededor de la ley. La idea era buena: si se pone una cerca alrededor de un pozo, nadie cae en él. Si se evita hasta lo que se parece a quebrantar el día de reposo, nunca se lo quebrantará. Pero con el tiempo, las cercas se multiplicaron, y algunas terminaron ocupando el lugar del mandamiento mismo.',
        { h: 'El caso del corbán' },
        'Jesús dio un ejemplo. La ley manda: «Honra a tu padre y a tu madre». Pero la tradición permitía que un hijo declarara sus bienes «corbán», es decir, «mi ofrenda a Dios», y desde ese momento ya no estaba obligado a usarlos para ayudar a sus padres ancianos, aunque él mismo podía seguir disfrutándolos. Jesús dijo que así invalidaban «la palabra de Dios con vuestra tradición» (Mr 7:13). En Jerusalén se ha encontrado una vasija de piedra con la palabra corbán grabada, señal de que esa fórmula se usaba para consagrar objetos.',
        { h: 'Lo que Jesús no rechazó' },
        'Jesús no rechazó toda costumbre. Participó en la sinagoga, en las fiestas y en la cena de la Pascua, con sus oraciones y sus copas, que no estaban mandadas en la ley sino que venían de la tradición. Lo que rechazó fue poner la tradición por encima de la palabra de Dios, y obedecer las reglas exteriores con un corazón lejos de Dios: «Este pueblo de labios me honra, mas su corazón está lejos de mí» (Mr 7:6).',
        { h: 'Una advertencia para la iglesia' },
        'También las iglesias tienen tradiciones: formas de culto, costumbres, maneras de vestir o de servir. Muchas son buenas y ayudan. Pero toda tradición debe someterse a la Escritura, y nunca puede usarse para dejar de cumplir lo que Dios manda. Pablo, que había sido celoso de «las tradiciones de mis padres» (Gá 1:14), advirtió a los colosenses contra las enseñanzas «según las tradiciones de los hombres» y no según Cristo (Col 2:8).'
      ],
      pensar: '¿Hay costumbres o reglas en tu vida o en tu iglesia que se han vuelto más importantes que obedecer lo que Dios manda, por ejemplo, en el amor y el cuidado de tu familia?'
    },
    {
      id: 'piedad', n: 'Oración, ayuno y limosna', ref: 'Deuteronomio 6:4-9; Mateo 6:1-18; Lucas 18:12; Hechos 3:1; Hechos 10:2, 9, 30; Marcos 12:41-44', fecha: [-6, 70],
      visual: [
        img('../medidas-biblicas/img/viuda.webp', 'Una viuda pobre, vestida con un manto oscuro gastado, deja caer dos pequeñas monedas de bronce en un cofre de ofrendas con forma de trompeta en el atrio del templo; a lo lejos, Jesús sentado la observa de espaldas', '«Esta viuda pobre echó más que todos» (Marcos 12:43). Recreación.'),
        img('../dios-y-la-trinidad/img/shema-familia.webp', 'En la entrada de una casa de piedra israelita, al atardecer, un padre enseña a sus dos hijos pequeños señalando un pequeño estuche de cuero fijado en el poste de la puerta', '«Y las repetirás a tus hijos… y las escribirás en los postes de tu casa» (Deuteronomio 6:7, 9). Recreación.'),
        tabla({
          titulo: 'La piedad diaria de un judío del siglo I',
          cab: ['Práctica', 'Cómo se vivía', 'En el Nuevo Testamento'],
          filas: [
            ['El Shemá', 'Se recitaba al levantarse y al acostarse (Deuteronomio 6:4-9)', 'Jesús lo cita como el primer mandamiento (Marcos 12:29-30)'],
            ['Filacterias y mezuzá', 'Pequeños estuches con pasajes de la ley, en la frente, el brazo y los postes de la casa', 'Mateo 23:5'],
            ['Horas de oración', 'En la mañana, a la hora sexta (mediodía) y a la novena (tarde)', 'Hechos 3:1; 10:9, 30'],
            ['Ayuno', 'Obligatorio en el Día de la Expiación; los piadosos ayunaban dos días por semana', 'Lucas 18:12; Hechos 27:9'],
            ['Limosna', 'Ayuda a los pobres, considerada una obra de justicia', 'Mateo 6:2-4; Hechos 10:2']
          ]
        }),
        cita('Mateo 6:1-6', 'Guardaos de hacer vuestra justicia delante de los hombres, para ser vistos de ellos; de otra manera no tendréis recompensa de vuestro Padre que está en los cielos. Cuando, pues, des limosna, no hagas tocar trompeta delante de ti, como hacen los hipócritas en las sinagogas y en las calles, para ser alabados por los hombres; de cierto os digo que ya tienen su recompensa. Mas cuando tú des limosna, no sepa tu izquierda lo que hace tu derecha, para que sea tu limosna en secreto; y tu Padre que ve en lo secreto te recompensará en público. Y cuando ores, no seas como los hipócritas; porque ellos aman el orar en pie en las sinagogas y en las esquinas de las calles, para ser vistos de los hombres; de cierto os digo que ya tienen su recompensa. Mas tú, cuando ores, entra en tu aposento, y cerrada la puerta, ora a tu Padre que está en secreto; y tu Padre que ve en lo secreto te recompensará en público.')
      ],
      texto: [
        'En el Sermón del monte, Jesús habló de tres prácticas que todo judío piadoso conocía: la limosna, la oración y el ayuno (Mt 6:1-18). No las inventó ni las prohibió: supuso que sus discípulos las practicarían, y les enseñó a hacerlo con el corazón correcto.',
        { h: 'La oración' },
        'Cada día, al levantarse y al acostarse, el judío piadoso recitaba el Shemá: «Oye, Israel: Jehová nuestro Dios, Jehová uno es» (Dt 6:4), con los pasajes que lo acompañan. Muchos llevaban filacterias, pequeños estuches de cuero con esos pasajes, atados a la frente y al brazo en la oración, y ponían otro en los postes de la puerta, la mezuzá. Se han encontrado filacterias del siglo I en las cuevas de Qumrán. Además se oraba a horas fijas, coincidiendo con los sacrificios del templo: Pedro subió a orar a la azotea «cerca de la hora sexta» (Hch 10:9), y Cornelio oraba a la hora novena (Hch 10:30).',
        'Jesús advirtió contra orar «en las esquinas de las calles, para ser vistos de los hombres», y enseñó a orar en lo secreto (Mt 6:5-6). Les dio a sus discípulos una oración breve, el Padre nuestro, que empieza llamando a Dios Padre con la confianza de un hijo.',
        { h: 'El ayuno' },
        'La ley solo mandaba ayunar en el Día de la Expiación, al que los judíos llamaban simplemente «el ayuno» (Hch 27:9). Pero los fariseos y otros judíos piadosos ayunaban dos días por semana; el fariseo de la parábola decía: «ayuno dos veces a la semana» (Lc 18:12). Jesús enseñó a ayunar sin poner cara triste para mostrar a los demás, sino ungiendo la cabeza y lavando el rostro, para que solo el Padre lo viera (Mt 6:16-18).',
        { h: 'La limosna' },
        'Dar a los pobres era una obligación muy seria; en hebreo se llamaba con la misma palabra que la justicia. Jesús enseñó que no había que hacer «tocar trompeta» delante de uno (Mt 6:2), sino dar de modo que «no sepa tu izquierda lo que hace tu derecha». En el templo, las ofrendas se depositaban en cofres con forma de trompeta. Allí vio Jesús a los ricos echar mucho y a una viuda pobre echar dos blancas, y dijo que ella había dado más que todos, porque dio todo lo que tenía (Mr 12:41-44).'
      ],
      pensar: 'Jesús dio por hecho que sus discípulos darían, orarían y ayunarían, y les enseñó a hacerlo para el Padre que ve en lo secreto. ¿Qué lugar tienen estas tres prácticas en tu vida, y para quién las haces?'
    },
    {
      id: 'mesias', n: 'Qué Mesías esperaban', ref: 'Lucas 3:15; Juan 1:19-21; Juan 6:14-15; Mateo 11:2-6; Marcos 8:27-33; Mateo 21:4-9; Lucas 24:21; Hechos 1:6-8', fecha: [27, 33],
      visual: [
        img('mj-multitud-rey.webp', 'Al atardecer, en una ladera verde junto al mar de Galilea, una multitud entusiasta de hombres galileos con cestas llenas de pedazos de pan levanta los brazos y señala hacia Jesús, que, visto de espaldas, se aleja solo subiendo hacia lo alto del monte', 'Después de la multiplicación de los panes, la multitud quiso hacer rey a Jesús (Juan 6:14-15). Recreación.'),
        tabla({
          titulo: 'Lo que esperaban y lo que Jesús hizo',
          cab: ['Lo que muchos esperaban', 'Lo que hizo Jesús'],
          filas: [
            ['Un rey que expulsara a los romanos', 'Se retiró cuando quisieron hacerlo rey (Juan 6:15)'],
            ['Un Mesías que no podía morir', 'Anunció que «le era necesario» padecer y morir (Marcos 8:31)'],
            ['Señales que lo probaran todo', 'Hizo señales, pero no las daba a quien solo quería verlas (Mateo 12:39)'],
            ['La restauración inmediata del reino a Israel', 'No la negó, pero dijo que los tiempos son del Padre, y prometió el Espíritu Santo (Hechos 1:6-8)'],
            ['Un rey en un caballo de guerra', 'Entró en Jerusalén humilde, en un asno (Mateo 21:5; Zacarías 9:9)']
          ]
        }),
        cita('Juan 6:14-15', 'Aquellos hombres entonces, viendo la señal que Jesús había hecho, dijeron: Este verdaderamente es el profeta que había de venir al mundo. Pero entendiendo Jesús que iban a venir para apoderarse de él y hacerle rey, volvió a retirarse al monte él solo.')
      ],
      texto: [
        'Entre los Testamentos muestra cómo creció la esperanza del Mesías durante los siglos anteriores, y que no todos esperaban lo mismo. En tiempos de Jesús esa esperanza estaba encendida. Cuando Juan el Bautista empezó a predicar, «el pueblo estaba en expectativa, preguntándose todos en sus corazones si acaso Juan sería el Cristo» (Lc 3:15).',
        ir('Ver Entre los Testamentos: la esperanza del Mesías', R.entre + '#nacio/8'),
        { h: 'Un rey que liberara a Israel' },
        'Para la mayoría, el Mesías sería un rey hijo de David que, con el poder de Dios, expulsaría a los romanos, castigaría a los impíos, reuniría a los dispersos y reinaría con justicia desde Jerusalén. Por eso, después de la multiplicación de los panes, la multitud dijo: «Este verdaderamente es el profeta que había de venir al mundo», y quiso tomarlo por la fuerza para hacerlo rey (Jn 6:14-15). Jesús se retiró solo al monte.',
        { h: 'Un Mesías que no se anunciaba' },
        'Jesús evitó durante su ministerio que lo proclamaran públicamente como Mesías. Cuando Pedro confesó en Cesarea de Filipo: «Tú eres el Cristo», Jesús «les mandó que no dijesen esto de él a ninguno», y comenzó a enseñarles que era necesario que padeciera, muriera y resucitara (Mr 8:29-31). Pedro lo reprendió, porque un Mesías que muere no cabía en su esperanza. Jesús prefería llamarse el Hijo del Hombre, el título de Daniel 7, que no tenía la carga política de la palabra Mesías.',
        'Incluso Juan el Bautista, desde la cárcel, mandó a preguntar: «¿Eres tú aquel que había de venir, o esperaremos a otro?». Jesús le respondió con las señales que Isaías había anunciado: los ciegos ven, los cojos andan y a los pobres se anuncia el evangelio (Mt 11:3-5).',
        { h: '«Nosotros esperábamos»' },
        'Después de la cruz, los discípulos de Emaús dijeron con tristeza: «nosotros esperábamos que él era el que había de redimir a Israel» (Lc 24:21). Jesús resucitado les mostró en las Escrituras que el Cristo debía padecer antes de entrar en su gloria. Aun así, antes de la ascensión le preguntaron: «Señor, ¿restaurarás el reino a Israel en este tiempo?» Jesús no les dijo que esa esperanza fuera falsa, sino que no les tocaba saber los tiempos, y les prometió: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos» (Hch 1:7-8). El reino que Israel esperaba vendrá cuando Cristo vuelva; mientras tanto, la iglesia lleva el evangelio a todas las naciones con el poder del Espíritu.',
        ir('Ver Los últimos tiempos: Israel y los pactos de Dios', R.escatologia + '#temas/1')
      ],
      pensar: 'Muchos esperaban un Mesías que resolviera sus problemas políticos, y no reconocieron al que vino a salvarlos del pecado. ¿Qué esperas tú de Jesús? ¿Lo buscas por lo que puede darte o por quien Él es?'
    }
  ];

  window.__MJ.fe = fe;
})();
/* El mundo judío en tiempos de Jesús · ruta V. La vida diaria (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA V. La vida diaria ==================
  const vida = [
    {
      id: 'casa', n: 'La familia y la casa', ref: 'Marcos 2:1-4; Lucas 11:5-7; Mateo 5:15; Lucas 15:8; Mateo 24:17; Hechos 10:9', fecha: [-6, 70],
      visual: [
        img('mj-casa-galilea.webp', 'El patio de piedra basáltica de una casa de Capernaúm en el siglo I, rodeado de habitaciones bajas con techos de ramas, barro y paja; una escalera de piedra sube a la azotea; una mujer hornea pan en un horno de barro, un anciano repara redes, niños juegan y una cabra está atada en un rincón', 'Varias familias emparentadas compartían el patio de una casa de Capernaúm. Recreación con personas anónimas.'),
        tabla({
          titulo: 'Las partes de una casa de aldea',
          cab: ['Parte', 'Para qué servía', 'En los evangelios'],
          filas: [
            ['El patio', 'Cocinar, trabajar, comer y recibir visitas; varias familias lo compartían', 'Pedro se calienta en el patio del sumo sacerdote (Marcos 14:66)'],
            ['Las habitaciones', 'Pequeñas y oscuras; servían sobre todo para dormir y guardar', '«Mis niños están conmigo en cama» (Lucas 11:7)'],
            ['La azotea', 'De ramas y barro sobre vigas; para secar, dormir en verano y orar', 'Abren el techo para bajar al paralítico (Marcos 2:4)'],
            ['La lámpara', 'De barro, con aceite de oliva; se ponía en un nicho o en un candelero', '«Alumbra a todos los que están en casa» (Mateo 5:15)'],
            ['El horno y el molino', 'Cada día se molía el grano y se horneaba el pan', '«Dos mujeres estarán moliendo» (Mateo 24:41)']
          ]
        }),
        cita('Marcos 2:1-5', 'Entró Jesús otra vez en Capernaum después de algunos días; y se oyó que estaba en casa. E inmediatamente se juntaron muchos, de manera que ya no cabían ni aun a la puerta; y les predicaba la palabra. Entonces vinieron a él unos trayendo un paralítico, que era cargado por cuatro. Y como no podían acercarse a él a causa de la multitud, descubrieron el techo de donde estaba, y haciendo una abertura, bajaron el lecho en que yacía el paralítico. Al ver Jesús la fe de ellos, dijo al paralítico: Hijo, tus pecados te son perdonados.')
      ],
      texto: [
        'La familia judía del siglo I no era solo el padre, la madre y los hijos. Era una familia extendida: los abuelos, los hijos casados con sus esposas y niños, y a veces otros parientes, vivían juntos alrededor de un mismo patio, bajo la autoridad del padre de familia, al que los evangelios llaman «padre de familia» o «dueño de casa».',
        { h: 'Una casa de aldea' },
        'En Capernaúm se han excavado manzanas enteras de casas del tiempo de Jesús, construidas con piedras negras de basalto, sin cemento. Cada casa tenía varias habitaciones pequeñas alrededor de un patio, donde transcurría la mayor parte de la vida: allí se cocinaba en un horno de barro, se molía el grano, se trabajaba, se comía y se recibía a los vecinos. Las habitaciones eran oscuras, con pequeñas ventanas, y servían sobre todo para dormir y guardar las provisiones. En la noche se cerraba la puerta y toda la familia dormía junta, como dice el vecino de la parábola: «la puerta ya está cerrada, y mis niños están conmigo en cama» (Lc 11:7).',
        'El techo era plano, hecho de vigas de madera cubiertas de ramas, paja y barro apisonado. Por eso cuatro hombres pudieron abrir el techo de la casa donde estaba Jesús y bajar a un paralítico en su camilla (Mr 2:4). La azotea se usaba para secar los frutos, para dormir en las noches de calor y para orar, como hizo Pedro en Jope (Hch 10:9).',
        { h: 'Luz, pan y trabajo' },
        'La luz venía de pequeñas lámparas de barro con aceite de oliva, que se ponían en un nicho de la pared o sobre un candelero. Para buscar una moneda perdida había que encender la lámpara y barrer con cuidado el suelo de tierra o de piedra (Lc 15:8). Cada día las mujeres molían el grano en un molino de mano y horneaban el pan; por eso la petición «El pan nuestro de cada día, dánoslo hoy» (Mt 6:11) se entendía literalmente.',
        { h: 'Casas en la ciudad' },
        'En Jerusalén, las familias ricas vivían en casas grandes de piedra labrada, con varios pisos, mosaicos, frescos y baños rituales propios, como las que se excavaron en la parte alta de la ciudad. El «aposento alto» donde Jesús comió la Pascua con sus discípulos (Mr 14:15) era una sala grande en el piso superior de una casa así. También la iglesia primitiva se reunió en casas: en la de María, la madre de Juan Marcos, había muchos reunidos orando cuando Pedro salió de la cárcel (Hch 12:12).'
      ],
      pensar: 'Jesús enseñó, sanó y perdonó pecados en una casa sencilla de Capernaúm, y la iglesia primitiva se reunía en casas. ¿Cómo puede tu casa ser un lugar donde otros encuentren a Jesús?'
    },
    {
      id: 'boda', n: 'El compromiso y la boda', ref: 'Mateo 1:18-25; Lucas 1:26-27; Juan 2:1-11; Mateo 25:1-13; Mateo 22:1-14; Juan 3:29; Apocalipsis 19:7-9', fecha: [-6, 70],
      visual: [
        img('mj-boda-procesion.webp', 'De noche, en una calle de tierra de una aldea de Galilea, una procesión de boda avanza a la luz de lámparas de aceite: un joven novio con manto bordado y corona de flores camina rodeado de sus amigos que cantan y tocan panderos, mientras un grupo de jóvenes muchachas con lámparas encendidas sale a recibirlo desde la puerta de una casa', '«¡Aquí viene el esposo; salid a recibirle!» (Mateo 25:6). Recreación con personas anónimas.'),
        tabla({
          titulo: 'Del compromiso a la boda',
          cab: ['Etapa', 'Qué ocurría', 'En la Biblia'],
          filas: [
            ['El acuerdo', 'Las familias acordaban el matrimonio y la dote que pagaba el novio', 'Génesis 24; 34:12'],
            ['El desposorio', 'Compromiso formal ante testigos; la pareja ya era marido y mujer ante la ley, pero no vivían juntos', 'María «desposada» con José (Mateo 1:18; Lucas 1:27)'],
            ['La espera', 'Muchas veces un año; el novio preparaba la casa', '«Voy, pues, a preparar lugar para vosotros» (Juan 14:2)'],
            ['La procesión', 'De noche, el novio iba con sus amigos a buscar a la novia y la llevaba a su casa', 'Las diez vírgenes (Mateo 25:1-13)'],
            ['El banquete', 'Fiesta de varios días, hasta una semana, con comida y vino', 'Las bodas de Caná (Juan 2:1-11)']
          ]
        }),
        cita('Mateo 25:1-6', 'Entonces el reino de los cielos será semejante a diez vírgenes que tomando sus lámparas, salieron a recibir al esposo. Cinco de ellas eran prudentes y cinco insensatas. Las insensatas, tomando sus lámparas, no tomaron consigo aceite; mas las prudentes tomaron aceite en sus vasijas, juntamente con sus lámparas. Y tardándose el esposo, cabecearon todas y se durmieron. Y a la medianoche se oyó un clamor: ¡Aquí viene el esposo; salid a recibirle!')
      ],
      texto: [
        'Mateo cuenta que María estaba «desposada» con José cuando se halló que había concebido del Espíritu Santo, y que José, «como era justo, y no quería infamarla, quiso dejarla secretamente» (Mt 1:18-19). Para entender esa escena hay que conocer cómo se casaban los judíos en tiempos de Jesús.',
        { h: 'El desposorio' },
        'Los matrimonios los arreglaban las familias. Las muchachas solían comprometerse muy jóvenes, poco después de los doce años, y los varones algo mayores. El compromiso, o desposorio, se hacía ante testigos y era un vínculo legal: desde ese momento la pareja ya era considerada marido y mujer, aunque todavía no vivían juntos. Por eso Mateo llama a José «su marido» y dice que, para terminar el compromiso, tenía que «dejarla», es decir, darle carta de divorcio. José pensaba hacerlo en privado para no exponer a María a la vergüenza o a un castigo, hasta que el ángel le habló en sueños.',
        { h: 'La espera y la procesión' },
        'Entre el desposorio y la boda solía pasar un tiempo, a veces un año, mientras el novio preparaba la casa, a menudo una habitación nueva junto a la de su padre. Jesús usó esa imagen para hablar de su regreso: «voy, pues, a preparar lugar para vosotros. Y si me fuere y os preparare lugar, vendré otra vez» (Jn 14:2-3).',
        'El día de la boda, al caer la tarde, el novio salía con sus amigos a buscar a la novia a la casa de su padre, y la llevaba en procesión, con lámparas, música y cantos, a su propia casa. Las jóvenes amigas de la novia salían a recibirlo con lámparas. En la parábola de las diez vírgenes, el novio tarda, todas se duermen, y a medianoche se oye el grito: «¡Aquí viene el esposo; salid a recibirle!» (Mt 25:6). Solo las que tenían aceite entraron a la fiesta.',
        { h: 'El banquete' },
        'La boda se celebraba con un banquete que podía durar hasta siete días. Que faltara el vino era una vergüenza para la familia del novio. En Caná, Jesús hizo su primera señal para evitarla, y el encargado del banquete se sorprendió de que el mejor vino se sirviera al final (Jn 2:10).',
        { h: 'La boda del Cordero' },
        'Toda la Biblia usa la imagen del matrimonio para hablar de Dios y su pueblo. Juan el Bautista se llamó a sí mismo «el amigo del esposo» (Jn 3:29), y Jesús se presentó como el Esposo. La historia termina con una boda: «Bienaventurados los que son llamados a la cena de las bodas del Cordero» (Ap 19:9).',
        ir('Ver Los últimos tiempos: el arrebatamiento de la iglesia', R.escatologia + '#eventos/2')
      ],
      pensar: 'Las vírgenes prudentes estaban preparadas aunque el esposo tardó. Si Jesús viniera hoy, ¿te encontraría con la lámpara encendida y con aceite? ¿Qué significa para ti estar preparado?'
    },
    {
      id: 'ninos', n: 'Los niños y la enseñanza de la ley', ref: 'Deuteronomio 6:6-7; Lucas 2:21-24, 40-52; Marcos 10:13-16; 2 Timoteo 3:15; Mateo 18:2-6', fecha: [-6, 70],
      visual: [
        img('mj-ninos-bendicion.webp', 'En el patio de una casa de Judea, madres y padres anónimos traen a sus niños pequeños a Jesús, que, visto de espaldas, está sentado y tiene en brazos a un niño mientras pone la mano sobre la cabeza de otro; Pedro y Juan, a un lado, se miran sorprendidos', '«Dejad a los niños venir a mí, y no se lo impidáis» (Marcos 10:14). Recreación.'),
        tabla({
          titulo: 'La niñez de un varón judío',
          cab: ['Edad', 'Lo que ocurría', 'En la vida de Jesús'],
          filas: [
            ['8 días', 'Circuncisión y nombre', 'Lucas 2:21'],
            ['40 días', 'Purificación de la madre y presentación del primogénito en el templo', 'Lucas 2:22-24'],
            ['Primeros años', 'La madre enseña las oraciones y las historias de Israel', 'Lucas 2:40'],
            ['Desde los 5 o 6 años', 'El padre enseña la ley y un oficio; en algunas aldeas, la sinagoga enseña a leer', '«Hijo del carpintero» (Mateo 13:55)'],
            ['12 a 13 años', 'Empieza a cumplir la ley como un adulto', 'En el templo con los doctores (Lucas 2:42-47)']
          ],
          nota: 'La ceremonia del bar mitzvá, con ese nombre, se formó varios siglos después.'
        }),
        cita('Marcos 10:13-16', 'Y le presentaban niños para que los tocase; y los discípulos reprendían a los que los presentaban. Viéndolo Jesús, se indignó, y les dijo: Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de Dios. De cierto os digo, que el que no reciba el reino de Dios como un niño, no entrará en él. Y tomándolos en los brazos, poniendo las manos sobre ellos, los bendecía.')
      ],
      texto: [
        'Para los judíos, los hijos eran una bendición de Dios, y enseñarles la ley era un mandamiento: «estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos» (Dt 6:6-7). Josefo dice con orgullo que los judíos se preocupaban más que nadie por educar a sus hijos en las leyes de sus padres.',
        { h: 'De la casa a la sinagoga' },
        'Los primeros maestros eran los padres. La madre enseñaba a los niños pequeños las oraciones, los salmos y las historias de Israel; Timoteo aprendió así las Escrituras «desde la niñez», con su abuela y su madre (2 Ti 3:15). El padre enseñaba a su hijo la ley y le transmitía su oficio: por eso a Jesús lo llamaban «el hijo del carpintero» y también «el carpintero» (Mr 6:3).',
        'Fuentes judías posteriores hablan de escuelas junto a las sinagogas, donde los niños aprendían a leer la Escritura desde los cinco o seis años, y de un sumo sacerdote del siglo I que habría ordenado tener maestros en cada ciudad. No se sabe con certeza cuán extendidas estaban en las aldeas de Galilea. Lo que muestra el evangelio es que Jesús sabía leer el rollo de Isaías en la sinagoga (Lc 4:16-17) y que conocía la Escritura de memoria.',
        { h: 'Jesús a los doce años' },
        'Lucas cuenta que, a los doce años, Jesús se quedó en el templo «sentado en medio de los doctores de la ley, oyéndoles y preguntándoles», y que todos se maravillaban «de su inteligencia y de sus respuestas» (Lc 2:46-47). Era la edad en que un muchacho comenzaba a cumplir la ley como adulto. Después volvió a Nazaret, «y estaba sujeto a ellos», y crecía «en sabiduría y en estatura, y en gracia para con Dios y los hombres» (Lc 2:51-52).',
        { h: '«Dejad a los niños venir a mí»' },
        'En el mundo antiguo los niños no tenían importancia social. Cuando unos padres trajeron a sus hijos para que Jesús los tocara, los discípulos los reprendieron, pensando que el Maestro tenía cosas más importantes que hacer. Jesús se indignó: «Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de Dios». Y tomándolos en brazos, los bendecía (Mr 10:14-16). En otra ocasión puso a un niño en medio de los discípulos como ejemplo de humildad, y advirtió con severidad contra quien hiciera tropezar a uno de esos pequeños (Mt 18:2-6).'
      ],
      pensar: 'Jesús se indignó cuando apartaron a los niños de Él. ¿Qué estás haciendo, en tu casa o en tu iglesia, para que los niños conozcan la Palabra de Dios y vengan a Jesús?'
    },
    {
      id: 'mujeres', n: 'Las mujeres en tiempos de Jesús', ref: 'Lucas 8:1-3; Lucas 10:38-42; Juan 4:27; Lucas 7:36-50; Marcos 15:40-41; Lucas 24:1-11; Hechos 1:14', fecha: [-6, 70],
      visual: [
        img('mj-marta-maria.webp', 'En la casa de Betania, al atardecer, María, una joven de unos veinte años con velo claro, está sentada en el suelo escuchando con atención a Jesús, que está sentado y se ve de espaldas, mientras su hermana Marta, de unos treinta años, con delantal y un cántaro, se acerca desde la cocina con gesto preocupado', '«María ha escogido la buena parte, la cual no le será quitada» (Lucas 10:42). Recreación.'),
        tabla({
          titulo: 'Mujeres en el ministerio de Jesús',
          cab: ['Mujer', 'Lo que hizo', 'Pasaje'],
          filas: [
            ['María Magdalena, Juana, Susana y otras', 'Seguían a Jesús y lo sostenían con sus bienes', 'Lucas 8:1-3'],
            ['María de Betania', 'Se sentó a sus pies como discípula', 'Lucas 10:39'],
            ['La samaritana', 'Anunció a Jesús a todo su pueblo', 'Juan 4:28-30, 39'],
            ['La mujer pecadora', 'Ungió sus pies con perfume y lágrimas', 'Lucas 7:36-50'],
            ['Las mujeres de Galilea', 'Estuvieron junto a la cruz cuando los discípulos huyeron', 'Marcos 15:40-41'],
            ['María Magdalena y las otras', 'Fueron las primeras testigos de la resurrección', 'Lucas 24:1-10; Juan 20:11-18']
          ]
        }),
        cita('Lucas 8:1-3', 'Aconteció después, que Jesús iba por todas las ciudades y aldeas, predicando y anunciando el evangelio del reino de Dios, y los doce con él, y algunas mujeres que habían sido sanadas de espíritus malos y de enfermedades: María, que se llamaba Magdalena, de la que habían salido siete demonios, Juana, mujer de Chuza intendente de Herodes, y Susana, y otras muchas que le servían de sus bienes.')
      ],
      texto: [
        'En el mundo judío del siglo I, como en todo el mundo antiguo, la vida de la mujer giraba en torno a la casa. Pasaba de la autoridad de su padre a la de su esposo, se ocupaba del hogar y de los hijos, y en público tenía un lugar secundario. En el templo había un atrio de las mujeres, más allá del cual no podían pasar. Algunos maestros desaconsejaban hablar mucho con mujeres o enseñarles la ley, y el testimonio de una mujer tenía poco valor ante un tribunal.',
        'Al mismo tiempo, la ley de Moisés protegía a la viuda y al huérfano, el libro de los Proverbios alababa a la mujer virtuosa, y las mujeres judías iban a la sinagoga, participaban en las fiestas y oraban. Ana, la profetisa, servía de noche y de día en el templo (Lc 2:36-38).',
        { h: 'Discípulas de Jesús' },
        'Jesús se comportó de un modo que sorprendió a todos. Habló a solas con una mujer samaritana, y sus discípulos «se maravillaron de que hablaba con una mujer» (Jn 4:27). Permitió que María de Betania se sentara a sus pies, la postura del discípulo ante su maestro, y cuando Marta se quejó, le dijo que María había escogido «la buena parte, la cual no le será quitada» (Lc 10:42). Recibió con gratitud a una mujer pecadora que ungió sus pies, y la perdonó delante de un fariseo que la despreciaba (Lc 7:44-48).',
        'Lucas cuenta que un grupo de mujeres acompañaba a Jesús y a los doce en sus viajes, y que «le servían de sus bienes» (Lc 8:3). Entre ellas estaban María Magdalena, de la que Jesús había echado siete demonios, y Juana, la esposa de un alto funcionario de Herodes Antipas.',
        { h: 'Testigos de la cruz y de la resurrección' },
        'Cuando los discípulos huyeron, las mujeres de Galilea siguieron mirando la cruz desde lejos (Mr 15:40-41), vieron dónde ponían el cuerpo y volvieron al sepulcro el primer día de la semana. Ellas fueron las primeras testigos de la resurrección. Que los cuatro evangelios lo cuenten así, en una cultura que no valoraba el testimonio de una mujer, es una señal de su veracidad: nadie que inventara la historia habría elegido esas testigos. De hecho, a los apóstoles «les parecían locura las palabras de ellas» (Lc 24:11).',
        'En el aposento alto, antes de Pentecostés, las mujeres oraban junto con los apóstoles (Hch 1:14), y cuando vino el Espíritu se cumplió la profecía de Joel: «vuestros hijos y vuestras hijas profetizarán» (Hch 2:17).'
      ],
      pensar: 'Jesús recibió a las mujeres como discípulas y las eligió como primeras testigos de su resurrección. ¿Qué te enseña esto sobre el valor que Dios da a cada persona, y sobre el lugar de las mujeres en la obra de Dios?'
    },
    {
      id: 'trabajo', n: 'Campesinos, pescadores y artesanos', ref: 'Mateo 4:18-22; Lucas 5:1-11; Marcos 6:3; Mateo 13:3-8; Juan 10:11-13; Mateo 20:1-2; Hechos 18:3', fecha: [-6, 70],
      visual: [
        img('../tierra-de-israel/img/galilea.webp', 'Una barca de pesca de madera del siglo I en el mar de Galilea al amanecer, con pescadores anónimos recogiendo una red; detrás, las colinas verdes de la orilla y la niebla sobre el agua', 'Pescadores en el mar de Galilea al amanecer. Recreación.'),
        foto('foto-barca-galilea.jpg', 'Restos de madera oscura de una barca antigua, larga y ancha, sostenidos por una estructura de metal en un museo', 'La «barca de Galilea», una barca de pesca del siglo I hallada en 1986 en el barro de la orilla, cerca de Magdala. Mide unos 8 metros de largo; en ella cabían unas trece personas. Museo Yigal Allon, Ginosar.', 'CC BY-SA 4.0 · Warfieldian, vía Wikimedia Commons'),
        tabla({
          titulo: 'Oficios en los evangelios',
          cab: ['Oficio', 'Quiénes', 'Enseñanzas de Jesús'],
          filas: [
            ['Campesino', 'La mayoría del pueblo', 'El sembrador, la semilla de mostaza, el trigo y la cizaña'],
            ['Pescador', 'Pedro, Andrés, Jacobo y Juan', '«Os haré pescadores de hombres» (Mateo 4:19); la red (Mateo 13:47)'],
            ['Artesano', 'José y Jesús; Pablo, fabricante de tiendas', 'Edificar sobre la roca (Mateo 7:24); el yugo fácil (Mateo 11:30)'],
            ['Pastor', 'Los pastores de Belén', 'El buen pastor (Juan 10:11); la oveja perdida (Lucas 15:4)'],
            ['Jornalero', 'Los que no tenían tierra', 'Los obreros de la viña (Mateo 20:1-16)']
          ]
        }),
        cita('Lucas 5:4-11', 'Cuando terminó de hablar, dijo a Simón: Boga mar adentro, y echad vuestras redes para pescar. Respondiendo Simón, le dijo: Maestro, toda la noche hemos estado trabajando, y nada hemos pescado; mas en tu palabra echaré la red. Y habiéndolo hecho, encerraron gran cantidad de peces, y su red se rompía. Entonces hicieron señas a los compañeros que estaban en la otra barca, para que viniesen a ayudarles; y vinieron, y llenaron ambas barcas, de tal manera que se hundían. Viendo esto Simón Pedro, cayó de rodillas ante Jesús, diciendo: Apártate de mí, Señor, porque soy hombre pecador. Porque por la pesca que habían hecho, el temor se había apoderado de él, y de todos los que estaban con él, y asimismo de Jacobo y Juan, hijos de Zebedeo, que eran compañeros de Simón. Pero Jesús dijo a Simón: No temas; desde ahora serás pescador de hombres. Y cuando trajeron a tierra las barcas, dejándolo todo, le siguieron.')
      ],
      texto: [
        'La gran mayoría de los judíos de Galilea y Judea vivía del campo. Las familias cultivaban trigo y cebada, viñas, olivos e higueras, y criaban ovejas y cabras. Dependían de la lluvia, de la cosecha y de que los impuestos y las deudas no les quitaran la tierra. Por eso tantas parábolas de Jesús hablan de sembradores, semillas, viñas, cosechas, graneros y pastores: eran el mundo de sus oyentes.',
        { h: 'Los pescadores del lago' },
        'Alrededor del mar de Galilea, la pesca era un negocio importante. El pescado se salaba en Magdala, cuyo nombre griego significaba «pescado salado», y se vendía en toda la región. Pedro y Andrés, Jacobo y Juan eran pescadores; Zebedeo, el padre de Jacobo y Juan, tenía jornaleros (Mr 1:20), y Pedro y sus socios tenían más de una barca (Lc 5:7). No eran mendigos, sino pequeños empresarios que trabajaban duro de noche.',
        'En 1986, durante una sequía, unos pescadores encontraron en el barro de la orilla, cerca de Magdala, una barca de madera del siglo I. Mide unos ocho metros de largo y dos y medio de ancho; en ella cabían unas trece personas. Es la clase de barca en la que Jesús cruzó el lago con sus discípulos.',
        { h: 'El carpintero de Nazaret' },
        'La gente de Nazaret llamaba a Jesús «el carpintero» (Mr 6:3). La palabra griega designa a un artesano que trabajaba con madera y a veces con piedra: hacía puertas, vigas, yugos, arados y muebles, y participaba en la construcción de casas. Jesús trabajó con sus manos durante la mayor parte de su vida antes de comenzar su ministerio, y así santificó el trabajo diario.',
        { h: 'El trabajo, un llamado' },
        'Los maestros judíos decían que un padre que no enseñaba un oficio a su hijo le enseñaba a robar, y muchos escribas tenían un oficio además de estudiar la ley. Pablo, educado a los pies de Gamaliel, fabricaba tiendas y trabajaba con sus manos para no ser una carga a las iglesias (Hch 18:3; 2 Ts 3:8). Cuando Jesús llamó a los pescadores, no despreció su oficio: lo usó como imagen de su nueva misión: «Desde ahora serás pescador de hombres» (Lc 5:10).'
      ],
      pensar: 'Jesús llamó a pescadores mientras estaban trabajando, y usó su oficio para describir su nueva misión. ¿Cómo puede Dios usar tu trabajo, tus habilidades y tu experiencia para servirle?'
    },
    {
      id: 'ricos-pobres', n: 'Ricos y pobres: deudas, jornaleros y terratenientes', ref: 'Mateo 20:1-16; Lucas 16:19-31; Mateo 18:23-35; Lucas 12:16-21; Marcos 12:1-9; Lucas 6:20-24; Santiago 5:1-4', fecha: [-6, 70],
      visual: [
        img('../medidas-biblicas/img/obreros-vina.webp', 'Al atardecer, junto a una viña de Judea, un mayordomo entrega un denario de plata a cada uno de los jornaleros cansados que hacen fila', '«Recibieron cada uno un denario» (Mateo 20:9). Recreación.'),
        tabla({
          titulo: 'Las parábolas y la economía de su tiempo',
          cab: ['Parábola', 'La realidad que refleja'],
          filas: [
            ['Los obreros de la viña (Mateo 20:1-16)', 'Jornaleros sin tierra que esperaban en la plaza que alguien los contratara por un denario al día'],
            ['Los labradores malvados (Marcos 12:1-9)', 'Grandes propietarios que vivían lejos y arrendaban sus tierras a campesinos'],
            ['Los dos deudores y el siervo que no perdonó (Mateo 18:23-35)', 'Deudas que podían terminar en la cárcel o en la venta de la familia como esclavos'],
            ['El mayordomo infiel (Lucas 16:1-8)', 'Administradores que manejaban las deudas de aceite y trigo de su señor'],
            ['El rico necio (Lucas 12:16-21)', 'Un terrateniente que acumula cosechas mientras otros pasan hambre'],
            ['El rico y Lázaro (Lucas 16:19-31)', 'Mendigos enfermos a la puerta de casas lujosas']
          ]
        }),
        cita('Lucas 16:19-21', 'Había un hombre rico, que se vestía de púrpura y de lino fino, y hacía cada día banquete con esplendidez. Había también un mendigo llamado Lázaro, que estaba echado a la puerta de aquél, lleno de llagas, y ansiaba saciarse de las migajas que caían de la mesa del rico; y aun los perros venían y le lamían las llagas.')
      ],
      texto: [
        'La sociedad del tiempo de Jesús estaba muy dividida. En la cima había unas pocas familias muy ricas: la familia de Herodes, las familias de los sumos sacerdotes y los grandes terratenientes, que vivían en Jerusalén o en las ciudades y vestían «de púrpura y de lino fino» (Lc 16:19). Debajo estaban los artesanos, los comerciantes y los campesinos con algo de tierra. Y al fondo, una gran cantidad de jornaleros sin tierra, siervos, esclavos, viudas, huérfanos, enfermos y mendigos.',
        { h: 'Las deudas' },
        'Un campesino que tenía una mala cosecha debía pedir prestado para comer y para sembrar. Si no podía pagar, perdía su tierra y pasaba a trabajarla como arrendatario o como jornalero. En casos extremos, podía ir a la cárcel o ser vendido con su familia, como el siervo de la parábola (Mt 18:25). Por eso la deuda era una imagen tan fuerte del pecado: «perdónanos nuestras deudas, como también nosotros perdonamos a nuestros deudores» (Mt 6:12). Cuando comenzó la rebelión del año 66, los rebeldes quemaron el archivo de Jerusalén donde se guardaban los contratos de deuda.',
        { h: 'Un denario al día' },
        'Un jornalero ganaba un denario por un día de trabajo (Mt 20:2), lo justo para alimentar a su familia ese día. Si no lo contrataban, no comían. Por eso la ley mandaba pagar al jornalero antes de la puesta del sol (Dt 24:15), y Santiago denunció a los ricos que retenían el jornal de los obreros (Stg 5:4). En la parábola, el dueño de la viña paga un denario también a los que trabajaron una sola hora: es la generosidad de Dios, que da por gracia lo que nadie puede ganar.',
        ir('Calcular en Pesos, medidas, monedas y horas bíblicas: el denario en tu moneda', R.medidas + 'calculadora/'),
        { h: 'Lo que enseñó Jesús' },
        'Jesús anunció buenas nuevas a los pobres (Lc 4:18) y advirtió a los ricos: «¡ay de vosotros, ricos! porque ya tenéis vuestro consuelo» (Lc 6:24). No condenó la riqueza en sí: entre sus discípulos había personas con recursos, como José de Arimatea o Juana. Pero enseñó que la vida no consiste en la abundancia de bienes (Lc 12:15), que no se puede servir a Dios y a las riquezas (Mt 6:24), y que quien tiene debe compartir con el que no tiene. El rico de la parábola no fue condenado por ser rico, sino por haber vivido sin ver a Lázaro, que estaba echado a su puerta.'
      ],
      pensar: 'El rico de la parábola tenía a un pobre a su puerta todos los días y nunca lo vio. ¿Quiénes son los necesitados que están cerca de ti, y qué te pide Dios que hagas por ellos?'
    },
    {
      id: 'mesa', n: 'La mesa: con quién se comía y cómo', ref: 'Lucas 5:29-32; Lucas 7:36-50; Lucas 14:7-14; Juan 13:1-5, 23-26; Mateo 11:19; Hechos 2:46', fecha: [-6, 70],
      visual: [
        img('mj-banquete-levi.webp', 'En el patio de la casa de Mateo en Capernaúm, de noche, un banquete con publicanos y gente sencilla reclinados sobre almohadones alrededor de mesas bajas con pan, pescado, aceitunas y vino; Jesús, visto de espaldas, está reclinado entre ellos, y desde la puerta abierta del patio unos fariseos observan con desaprobación', '«Leví le hizo gran banquete en su casa; y había mucha compañía de publicanos» (Lucas 5:29). Recreación.'),
        tabla({
          titulo: 'Costumbres de la mesa',
          cab: ['Costumbre', 'Cómo era', 'En los evangelios'],
          filas: [
            ['Reclinarse', 'En los banquetes se comía recostado sobre el codo izquierdo, con los pies hacia afuera', 'Juan, recostado al lado de Jesús (Juan 13:23); la mujer a sus pies (Lucas 7:38)'],
            ['Los lugares', 'Los de más honor, cerca del anfitrión', 'Escoger el último lugar (Lucas 14:7-11)'],
            ['La hospitalidad', 'Agua para los pies, beso de saludo, aceite para la cabeza', 'Lo que el fariseo no hizo (Lucas 7:44-46)'],
            ['El pan', 'Se partía con las manos y se bendecía a Dios', 'La multiplicación de los panes; la última cena'],
            ['Comer juntos', 'Señal de amistad y aceptación', '«Este a los pecadores recibe, y con ellos come» (Lucas 15:2)']
          ]
        }),
        cita('Lucas 14:7-11', 'Observando cómo escogían los primeros asientos a la mesa, refirió a los convidados una parábola, diciéndoles: Cuando fueres convidado por alguno a bodas, no te sientes en el primer lugar, no sea que otro más distinguido que tú esté convidado por él, y viniendo el que te convidó a ti y a él, te diga: Da lugar a éste; y entonces comiences con vergüenza a ocupar el último lugar. Mas cuando fueres convidado, ve y siéntate en el último lugar, para que cuando venga el que te convidó, te diga: Amigo, sube más arriba; entonces tendrás gloria delante de los que se sientan contigo a la mesa. Porque cualquiera que se enaltece, será humillado; y el que se humilla, será enaltecido.')
      ],
      texto: [
        'La gente sencilla comía dos veces al día, en la mañana y al caer la tarde, sentada en el suelo o en esteras: pan, aceite, aceitunas, legumbres, frutas, algo de queso y, junto al lago, pescado. La carne era para las fiestas. En los banquetes, en cambio, se seguía la costumbre griega y romana de comer reclinados sobre almohadones o divanes, apoyados en el codo izquierdo, alrededor de mesas bajas, con los pies hacia afuera.',
        { h: 'Escenas que se entienden mejor' },
        'Esa postura explica varias escenas. En la última cena, Juan estaba «recostado al lado de Jesús» y pudo inclinarse sobre su pecho para preguntarle en voz baja (Jn 13:23-25). En casa de Simón el fariseo, una mujer pecadora pudo ponerse «detrás de él a sus pies» y ungirlos sin interrumpir la comida (Lc 7:38). Y Jesús pudo levantarse de la cena y lavar los pies de los discípulos, que estaban hacia afuera (Jn 13:4-5).',
        'La hospitalidad tenía sus gestos: dar agua para lavar los pies polvorientos, saludar con un beso y ungir la cabeza con aceite. Jesús le reprochó a Simón que no le había dado nada de eso, mientras la mujer había hecho mucho más (Lc 7:44-46).',
        { h: 'Los primeros lugares' },
        'Los lugares de la mesa reflejaban el honor de cada invitado: los más importantes, cerca del anfitrión. Jesús observó cómo los invitados escogían los primeros asientos y enseñó a sentarse en el último lugar, «porque cualquiera que se enaltece, será humillado; y el que se humilla, será enaltecido» (Lc 14:11). Y al anfitrión le dijo que invitara a los pobres, los mancos, los cojos y los ciegos, que no podían devolverle la invitación (Lc 14:12-14).',
        { h: 'Comer con pecadores' },
        'Compartir la mesa era señal de aceptación y amistad. Por eso escandalizó tanto que Jesús comiera en casa de Leví con «mucha compañía de publicanos» (Lc 5:29), y que aceptara la invitación de Zaqueo. Para Jesús, la mesa era un lugar para recibir a los pecadores y llamarlos al arrepentimiento. En la última cena le dio un sentido nuevo, con el pan y la copa del nuevo pacto, y la iglesia primitiva siguió partiendo el pan en las casas «con alegría y sencillez de corazón» (Hch 2:46).'
      ],
      pensar: 'Jesús enseñó a invitar a quienes no pueden devolver la invitación, y comió con los que otros despreciaban. ¿A quién podrías invitar a tu mesa como una forma de mostrar el amor de Cristo?'
    },
    {
      id: 'enfermedad', n: 'La enfermedad, la lepra y la exclusión', ref: 'Levítico 13:45-46; Marcos 1:40-45; Marcos 5:25-34; Lucas 17:11-19; Juan 5:2-9; Juan 9:1-3; Mateo 4:23-24', fecha: [-6, 70],
      visual: [
        img('mj-leproso.webp', 'En un camino de tierra a las afueras de una aldea de Galilea, un hombre leproso con la ropa rasgada, el cabello descubierto y llagas en las manos se arrodilla suplicante ante Jesús, que, visto de espaldas, extiende la mano y le toca el hombro; a distancia, unos aldeanos anónimos miran asustados', '«Jesús, teniendo misericordia de él, extendió la mano y le tocó» (Marcos 1:41). Recreación.'),
        cita('Levítico 13:45-46', 'Y el leproso en quien hubiere llaga llevará vestidos rasgados y su cabeza descubierta, y embozado pregonará: ¡Inmundo! ¡inmundo! Todo el tiempo que la llaga estuviere en él, será inmundo; estará impuro, y habitará solo; fuera del campamento será su morada.', 'La ley'),
        cita('Marcos 1:40-42', 'Vino a él un leproso, rogándole; e hincada la rodilla, le dijo: Si quieres, puedes limpiarme. Y Jesús, teniendo misericordia de él, extendió la mano y le tocó, y le dijo: Quiero, sé limpio. Y así que él hubo hablado, al instante la lepra se fue de aquél, y quedó limpio.')
      ],
      texto: [
        'En el siglo I no había hospitales ni medicinas eficaces. Había médicos, que usaban hierbas, aceites y vino, pero eran caros y muchas veces no podían hacer nada: la mujer con flujo de sangre «había gastado en médicos todo cuanto tenía, y por ninguno había podido ser curada» (Lc 8:43). La mayoría de los enfermos dependía de su familia. Los que no tenían quién los cuidara terminaban mendigando a la entrada de las ciudades o del templo, como el ciego Bartimeo o el cojo de la puerta la Hermosa.',
        { h: '«¿Quién pecó?»' },
        'Muchos pensaban que la enfermedad era siempre un castigo por un pecado. Los discípulos preguntaron por un ciego de nacimiento: «¿quién pecó, éste o sus padres, para que haya nacido ciego?». Jesús respondió: «No es que pecó éste, ni sus padres, sino para que las obras de Dios se manifiesten en él» (Jn 9:2-3). La enfermedad es parte de un mundo caído, pero no siempre es consecuencia de un pecado personal.',
        { h: 'La lepra' },
        'La palabra lepra en la Biblia abarca varias enfermedades de la piel, no solo la que hoy se llama así. La ley mandaba que el leproso viviera fuera de la ciudad, con la ropa rasgada y la cabeza descubierta, y que gritara «¡Inmundo! ¡inmundo!» para que nadie se le acercara (Lv 13:45-46). Era una muerte en vida: el leproso perdía su familia, su trabajo y su lugar en la sinagoga y en el templo. Si sanaba, debía presentarse al sacerdote para ser declarado limpio y ofrecer un sacrificio (Lv 14).',
        { h: 'Jesús tocó al intocable' },
        'Un leproso se arrodilló ante Jesús y le dijo: «Si quieres, puedes limpiarme». Jesús podía sanarlo con una palabra, como hizo otras veces. Pero «teniendo misericordia de él, extendió la mano y le tocó, y le dijo: Quiero, sé limpio» (Mr 1:41). Tal vez hacía años que nadie lo tocaba. Después lo envió al sacerdote, para que fuera devuelto a su comunidad. Del mismo modo, la mujer con flujo de sangre, que no podía tocar a nadie sin contaminarlo, oyó que Jesús la llamaba «hija» delante de todos (Mr 5:34).',
        'Mateo resume el ministerio de Jesús diciendo que recorría Galilea enseñando, predicando el evangelio del reino «y sanando toda enfermedad y toda dolencia en el pueblo» (Mt 4:23). Las sanidades eran señales de que el reino de Dios había llegado, y Jesús envió a sus discípulos a hacer lo mismo (Mt 10:8). La iglesia sigue orando por los enfermos con fe, ungiéndolos con aceite en el nombre del Señor (Stg 5:14-15).'
      ],
      pensar: 'Jesús no solo sanó al leproso, sino que lo tocó y lo devolvió a su comunidad. ¿Quiénes viven excluidos a tu alrededor por su enfermedad o su condición, y cómo puedes llevarles el toque de Cristo y orar por ellos con fe?'
    },
    {
      id: 'muerte', n: 'La muerte y la sepultura', ref: 'Lucas 7:11-17; Mateo 9:23-25; Juan 11:17-44; Juan 19:38-42; Marcos 15:46; Mateo 23:27; Mateo 28:1-6', fecha: [-6, 70],
      visual: [
        img('mj-nain-cortejo.webp', 'A la puerta de la aldea de Naín, un cortejo fúnebre con flautistas y mujeres que lloran lleva en unas andas de madera a un joven muerto envuelto en lienzos; su madre viuda camina deshecha en llanto; Jesús, visto de espaldas, ha tocado las andas y los que las llevan se han detenido', '«Joven, a ti te digo, levántate» (Lucas 7:14). Recreación.'),
        foto('foto-tumba-piedra.jpg', 'Entrada de una tumba excavada en la roca, con una gran piedra redonda en forma de rueda colocada en un canal frente a la abertura', 'Tumba del siglo I excavada en la roca, con una piedra redonda que rodaba por un canal para cerrar la entrada, como la del sepulcro de Jesús (Marcos 15:46).', 'Licencia por verificar'),
        cita('Juan 19:38-42', 'Después de todo esto, José de Arimatea, que era discípulo de Jesús, pero secretamente por miedo de los judíos, rogó a Pilato que le permitiese llevarse el cuerpo de Jesús; y Pilato se lo concedió. Entonces vino, y se llevó el cuerpo de Jesús. También Nicodemo, el que antes había visitado a Jesús de noche, vino trayendo un compuesto de mirra y de áloes, como cien libras. Tomaron, pues, el cuerpo de Jesús, y lo envolvieron en lienzos con especias aromáticas, según es costumbre sepultar entre los judíos. Y en el lugar donde había sido crucificado, había un huerto, y en el huerto un sepulcro nuevo, en el cual aún no había sido puesto ninguno. Allí, pues, por causa de la preparación de la pascua de los judíos, y porque aquel sepulcro estaba cerca, pusieron a Jesús.')
      ],
      texto: [
        'En el clima cálido de Israel, y por las leyes de pureza, los muertos se sepultaban el mismo día en que morían. La familia cerraba los ojos del difunto, lavaba el cuerpo, lo ungía con aceites y especias y lo envolvía en lienzos, «según es costumbre sepultar entre los judíos» (Jn 19:40). Luego se lo llevaba en unas andas, en procesión, hasta la tumba.',
        { h: 'El luto' },
        'El duelo era ruidoso y público. Aun una familia pobre contrataba flautistas y mujeres que lloraban a gritos. Cuando Jesús llegó a la casa de Jairo, encontró a «los que tocaban flautas, y la gente que hacía alboroto» (Mt 9:23). El luto más intenso duraba siete días, en los que vecinos y amigos visitaban a la familia para consolarla, como los muchos judíos que habían venido a consolar a Marta y María por su hermano Lázaro (Jn 11:19).',
        { h: 'Las tumbas' },
        'Las familias que podían tenían una tumba excavada en la roca, fuera de la ciudad, con una o varias cámaras con nichos o bancos de piedra. La entrada se cerraba con una piedra. Las tumbas de los más ricos tenían una gran piedra redonda que rodaba por un canal, como la de José de Arimatea, donde pusieron a Jesús (Mr 15:46). Alrededor de un año después, cuando el cuerpo se había deshecho, se recogían los huesos y se ponían en un osario, una caja de piedra, para dejar lugar a otros miembros de la familia. Los pobres eran sepultados en fosas sencillas.',
        'Como tocar una tumba hacía impuro, las tumbas se blanqueaban con cal para que nadie las tocara sin darse cuenta, sobre todo antes de las fiestas. Jesús usó esa imagen contra la hipocresía: «sois semejantes a sepulcros blanqueados, que por fuera, a la verdad, se muestran hermosos, mas por dentro están llenos de huesos de muertos» (Mt 23:27).',
        { h: 'El Señor de la vida' },
        'En la aldea de Naín, Jesús se encontró con un cortejo fúnebre: llevaban a enterrar al hijo único de una viuda, que se quedaba sin nadie que la sostuviera. «Cuando el Señor la vio, se compadeció de ella, y le dijo: No llores». Tocó las andas, aunque tocar a un muerto hacía impuro, y dijo: «Joven, a ti te digo, levántate» (Lc 7:13-14). Resucitó también a la hija de Jairo y a Lázaro, que llevaba cuatro días en la tumba.',
        'Pero la señal mayor fue su propia tumba. José de Arimatea y Nicodemo sepultaron a Jesús con cien libras de mirra y áloe, como a un rey, e hicieron rodar la piedra. El primer día de la semana, las mujeres encontraron la piedra removida y oyeron al ángel: «No está aquí, pues ha resucitado, como dijo» (Mt 28:6).'
      ],
      pensar: 'Jesús se compadeció de una viuda que lloraba y le devolvió a su hijo, y Él mismo venció la muerte. ¿Cómo cambia la resurrección de Jesús tu manera de enfrentar la muerte de quienes amas y tu propia muerte?'
    }
  ];

  window.__MJ.vida = vida;
})();
/* El mundo judío en tiempos de Jesús · ruta VI. Jesús en su mundo (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA VI. Jesús en su mundo ==================
  const jesus = [
    {
      id: 'galileo', n: 'Un judío de Galilea: Nazaret y Capernaúm', ref: 'Gálatas 4:4; Lucas 2:21-24, 39-41; Mateo 2:23; Juan 1:46; Mateo 4:12-16; Mateo 9:1; Marcos 6:1-6', fecha: [-6, 30],
      visual: [
        pasos([
          { t: 'Nazaret, una aldea de unos pocos cientos de habitantes en las colinas de la Baja Galilea', fecha: 0, estado: { view: V.galilea, capas: ['nt-galilea'], lugares: ['nazaret', 'seforis', 'cana', 'nain'] } },
          { t: 'Capernaúm, «su ciudad», a orillas del lago, en el camino hacia el territorio de Felipe', fecha: 28, estado: { view: V.lago, capas: ['nt-galilea', 'nt-felipe'], lugares: ['capernaum', 'betsaida', 'corazin', 'magdala', 'tiberias'] } },
          { t: 'Los viajes de Jesús: Galilea, Samaria, Judea y las regiones vecinas', fecha: 29, estado: { view: V.palestina, capas: DIV, lugares: ['nazaret', 'capernaum', 'cesarea-filipo', 'tiro-sidon', 'gadara', 'sicar', 'jerusalen', 'betania', 'jerico'], trazos: ['jesus-samaria', 'jesus-jerusalen'] } }
        ]),
        img('../tierra-de-israel/img/galilea.webp', 'Una barca de pesca de madera del siglo I en el mar de Galilea al amanecer, con pescadores anónimos recogiendo una red; detrás, las colinas verdes de la orilla y la niebla sobre el agua', 'El mar de Galilea, centro del ministerio de Jesús. Recreación.'),
        cita('Mateo 4:12-16', 'Cuando Jesús oyó que Juan estaba preso, volvió a Galilea; y dejando a Nazaret, vino y habitó en Capernaum, ciudad marítima, en la región de Zabulón y de Neftalí, para que se cumpliese lo dicho por el profeta Isaías, cuando dijo: Tierra de Zabulón y tierra de Neftalí, Camino del mar, al otro lado del Jordán, Galilea de los gentiles; El pueblo asentado en tinieblas vio gran luz; Y a los asentados en región de sombra de muerte, Luz les resplandeció.')
      ],
      texto: [
        'Pablo resume el nacimiento de Jesús en pocas palabras: «Dios envió a su Hijo, nacido de mujer y nacido bajo la ley» (Gá 4:4). Jesús nació judío, en una familia judía piadosa. Fue circuncidado al octavo día, presentado en el templo, criado en la ley de Moisés y llevado cada año a Jerusalén para la Pascua. Todo lo que este recurso ha descrito fue su mundo.',
        { h: 'Nazaret' },
        'Jesús creció en Nazaret, una aldea pequeña y sin importancia en las colinas de la Baja Galilea, tan pequeña que el Antiguo Testamento no la menciona. La arqueología ha encontrado allí casas sencillas, cuevas usadas como bodegas, prensas de aceite y de vino, y terrazas de cultivo. Natanael, de la cercana Caná, preguntó con desdén: «¿De Nazaret puede salir algo de bueno?» (Jn 1:46). A unos seis kilómetros estaba Séforis, la ciudad que Herodes Antipas reconstruía; desde las colinas de Nazaret se veía el gran valle de Jezreel, con su historia de batallas y profetas.',
        'Cuando Jesús volvió a Nazaret como maestro, sus vecinos no pudieron aceptar que el carpintero que habían visto crecer fuera alguien especial: «Y se escandalizaban de él». Jesús les dijo: «No hay profeta sin honra, sino en su propia tierra y en su casa» (Mt 13:57).',
        { h: 'Capernaúm, su ciudad' },
        'Al comenzar su ministerio, Jesús dejó Nazaret y «habitó en Capernaum, ciudad marítima» (Mt 4:13), a orillas del lago. Era una aldea de pescadores y agricultores, más grande que Nazaret, en el camino que llevaba al territorio de Felipe, con una aduana y una guarnición. Allí vivían Pedro y Andrés, y desde allí recorrió Jesús las aldeas de Galilea. Mateo la llama «su ciudad» (Mt 9:1). En Capernaúm se han excavado las casas de basalto de la época, una sinagoga posterior construida sobre otra más antigua, y una casa que los cristianos veneraron desde muy temprano como la casa de Pedro.',
        'Mateo vio en ese traslado el cumplimiento de Isaías: «El pueblo asentado en tinieblas vio gran luz» (Mt 4:16). La luz del Mesías no se encendió primero en Jerusalén, sino en la despreciada Galilea.',
        ir('Ver la Armonía de los evangelios: el ministerio en Galilea', R.armonia)
      ],
      pensar: 'Jesús pasó treinta años en una aldea pequeña y sin fama, y sus propios vecinos no lo reconocieron. ¿Qué te enseña esto sobre la manera en que Dios obra, muchas veces en lo pequeño y lo escondido?'
    },
    {
      id: 'maestro', n: 'Un maestro sin escuela: «Rabí», discípulos y parábolas', ref: 'Juan 1:38; Juan 7:15; Mateo 5:1-2; Mateo 7:28-29; Marcos 3:13-15; Mateo 13:34; Lucas 9:57-62', fecha: [27, 30],
      visual: [
        img('mj-sermon-ladera.webp', 'En una ladera verde junto al mar de Galilea, en primavera, Jesús, visto de espaldas, está sentado sobre una roca enseñando a sus discípulos sentados cerca de él, mientras una gran multitud de galileos anónimos, familias, ancianos y niños, escucha sentada en la hierba; abajo brilla el lago', '«Viendo la multitud, subió al monte; y sentándose, vinieron a él sus discípulos» (Mateo 5:1). Recreación.'),
        tabla({
          titulo: 'Jesús y los maestros de su tiempo',
          cab: ['', 'Un maestro de la ley', 'Jesús'],
          filas: [
            ['Formación', 'Años a los pies de un maestro conocido', '«¿Cómo sabe éste letras, sin haber estudiado?» (Juan 7:15)'],
            ['Discípulos', 'Los discípulos elegían a su maestro', 'Jesús eligió a los suyos: «Venid en pos de mí» (Marcos 1:17)'],
            ['Autoridad', 'Citaba a los maestros anteriores', '«Pero yo os digo» (Mateo 5:22)'],
            ['Dónde enseñaba', 'En la escuela, la sinagoga o el templo', 'En sinagogas, casas, caminos, barcas, montes y en el templo'],
            ['A quién', 'A quienes podían dedicarse al estudio', 'A todos: pescadores, publicanos, mujeres, niños y pecadores'],
            ['Meta', 'Que el discípulo llegara a ser maestro', 'Que el discípulo estuviera con Él y fuera enviado (Marcos 3:14)']
          ]
        }),
        cita('Mateo 7:28-29', 'Y cuando terminó Jesús estas palabras, la gente se admiraba de su doctrina; porque les enseñaba como quien tiene autoridad, y no como los escribas.')
      ],
      texto: [
        'Los dos primeros discípulos que siguieron a Jesús le preguntaron: «Rabí (que traducido es, Maestro), ¿dónde moras?» (Jn 1:38). Así lo veía la gente: como un maestro, un rabí. Tenía discípulos, enseñaba en las sinagogas y en el templo, discutía la ley con los fariseos y le hacían las mismas preguntas que a cualquier maestro: cuál es el primer mandamiento, si es lícito el divorcio, quién es mi prójimo.',
        { h: 'Pero distinto de todos' },
        'Al mismo tiempo, Jesús no encajaba en el molde. No había estudiado con ningún maestro conocido, y en Jerusalén se preguntaban: «¿Cómo sabe éste letras, sin haber estudiado?» (Jn 7:15). Los discípulos de un rabino lo elegían a él; Jesús, en cambio, eligió a los suyos y les dijo: «Sígueme». Un maestro enseñaba citando a otros; Jesús decía: «Oísteis que fue dicho… pero yo os digo». Por eso la gente «se admiraba de su doctrina; porque les enseñaba como quien tiene autoridad, y no como los escribas» (Mt 7:28-29).',
        { h: 'Enseñar en parábolas' },
        'Los maestros judíos usaban parábolas, comparaciones tomadas de la vida diaria para explicar una verdad. Jesús las usó como nadie: «sin parábolas no les hablaba» (Mt 13:34). Hablaba de semillas y cosechas, de ovejas y pastores, de monedas, bodas, deudas y vecinos. Sus oyentes reconocían cada escena, y la historia los obligaba a pensar y a tomar una decisión. Para los que tenían el corazón abierto, las parábolas revelaban los misterios del reino; para los que lo tenían cerrado, quedaban como historias sin sentido (Mt 13:10-15).',
        { h: 'Discípulos para estar con Él' },
        'Un discípulo judío vivía junto a su maestro para aprender no solo lo que decía, sino cómo vivía. Jesús estableció a doce «para que estuviesen con él, y para enviarlos a predicar» (Mr 3:14). Seguirlo significaba dejar la casa, la barca o el banco de los tributos, y aceptar una vida sin seguridad: «las zorras tienen guaridas, y las aves de los cielos nidos; mas el Hijo del Hombre no tiene dónde recostar la cabeza» (Lc 9:58). Pero la meta no era que llegaran a ser maestros como Él, sino testigos llenos del Espíritu Santo que hicieran discípulos en todas las naciones (Mt 28:19).',
        { ejercicio: {
          pregunta: '¿Qué asombraba a la gente de la manera de enseñar de Jesús?',
          opciones: [
            { t: 'Que hablaba en griego, y no en arameo como los demás maestros.', ok: false, por_que: 'El asombro no tenía que ver con la lengua, sino con la autoridad con que enseñaba.' },
            { t: 'Que enseñaba con autoridad propia, sin apoyarse en lo que decían otros maestros.', ok: true, por_que: 'Los escribas citaban la tradición; Jesús hablaba como quien tiene autoridad (Mateo 7:29).' },
            { t: 'Que nunca citaba la Escritura en sus enseñanzas.', ok: false, por_que: 'Jesús citó constantemente la ley, los profetas y los salmos.' }
          ],
          explicacion: 'Jesús honró la Escritura, pero habló como su autor: «el cielo y la tierra pasarán, pero mis palabras no pasarán» (Mateo 24:35).'
        } }
      ],
      pensar: 'Jesús llamó a sus discípulos para que estuvieran con Él antes de enviarlos. ¿Cuánto tiempo pasas con Jesús, en su Palabra y en oración, antes de intentar servirle?'
    },
    {
      id: 'ley', n: 'Jesús y la ley: «no he venido para abrogar»', ref: 'Mateo 5:17-48; Mateo 22:35-40; Marcos 7:18-19; Romanos 10:4; Gálatas 4:4-5', fecha: [27, 30],
      visual: [
        cita('Mateo 5:17-20', 'No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir. Porque de cierto os digo que hasta que pasen el cielo y la tierra, ni una jota ni una tilde pasará de la ley, hasta que todo se haya cumplido. De manera que cualquiera que quebrante uno de estos mandamientos muy pequeños, y así enseñe a los hombres, muy pequeño será llamado en el reino de los cielos; mas cualquiera que los haga y los enseñe, éste será llamado grande en el reino de los cielos. Porque os digo que si vuestra justicia no fuere mayor que la de los escribas y fariseos, no entraréis en el reino de los cielos.'),
        tabla({
          titulo: '«Oísteis que fue dicho… pero yo os digo»',
          cab: ['Lo que decía la ley', 'Lo que enseñó Jesús', 'Mateo'],
          filas: [
            ['No matarás', 'Tampoco te enojes ni insultes a tu hermano', '5:21-26'],
            ['No cometerás adulterio', 'Tampoco mires a una mujer para codiciarla', '5:27-30'],
            ['Quien repudie a su mujer, dele carta de divorcio', 'Lo que Dios juntó, no lo separe el hombre', '5:31-32; 19:3-9'],
            ['No perjurarás', 'No jures en ninguna manera; sea vuestro sí, sí', '5:33-37'],
            ['Ojo por ojo', 'No resistas al que es malo; ve la segunda milla', '5:38-42'],
            ['Amarás a tu prójimo', 'Amad a vuestros enemigos', '5:43-48']
          ]
        })
      ],
      texto: [
        'Algunos acusaban a Jesús de despreciar la ley, porque no seguía las tradiciones de los fariseos sobre el día de reposo o la pureza. Jesús respondió con claridad: «No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17). Y agregó algo que debió sorprender a sus oyentes: «si vuestra justicia no fuere mayor que la de los escribas y fariseos, no entraréis en el reino de los cielos» (Mt 5:20). Los fariseos eran los más estrictos. ¿Cómo podía alguien ser más justo que ellos?',
        { h: 'Una justicia del corazón' },
        'La respuesta está en lo que sigue. Jesús tomó varios mandamientos y mostró que Dios no mira solo los actos, sino el corazón. No basta con no matar: el enojo y el desprecio ya son homicidio a los ojos de Dios. No basta con no cometer adulterio: la mirada codiciosa ya es adulterio en el corazón. No basta con amar al prójimo: hay que amar también al enemigo. Los fariseos ponían cercos alrededor de la ley para no quebrantarla por fuera; Jesús llevó la ley hasta el fondo del corazón, donde nadie puede cumplirla por sí mismo.',
        { h: 'Toda la ley en dos mandamientos' },
        'Cuando un intérprete de la ley le preguntó cuál era el gran mandamiento, Jesús unió dos textos de Moisés: amar a Dios con todo el corazón (Dt 6:5) y amar al prójimo como a uno mismo (Lv 19:18). «De estos dos mandamientos depende toda la ley y los profetas» (Mt 22:40).',
        { h: 'Cumplir la ley' },
        'Jesús no solo enseñó la ley: la cumplió. Fue el único que la obedeció perfectamente, desde el corazón, y en la cruz cargó la maldición que la ley pronunciaba sobre los que la quebrantan (Gá 3:13). Por eso Pablo dice que «el fin de la ley es Cristo, para justicia a todo aquel que cree» (Ro 10:4). Algunos mandamientos, como los sacrificios y las leyes de pureza, señalaban hacia Él y se cumplieron en Él. La ley moral de Dios, en cambio, sigue mostrando su voluntad, y el Espíritu Santo la escribe en el corazón del creyente (Ro 8:3-4).',
        ir('Ver Pactos y dispensaciones: ¿qué pasa con el pacto del Sinaí?', R.pactos + '#cristo/4'),
        { posturas: {
          titulo: '¿Qué significa que Jesús vino a «cumplir» la ley?',
          a: { n: 'Obedecerla y enseñarla en su sentido pleno', t: 'Jesús cumplió la ley obedeciéndola perfectamente y mostrando su verdadero sentido, que sus oyentes habían reducido a reglas exteriores.' },
          b: { n: 'Llevarla a su término', t: 'Jesús cumplió la ley como el cumplimiento cumple una profecía: todo lo que la ley anunciaba encontró su realidad en Él, y por eso algunos de sus mandamientos ya no se practican igual en el nuevo pacto.' },
          c: 'Las dos ideas son verdaderas y se complementan: Jesús obedeció la ley perfectamente y, por su muerte y resurrección, cumplió lo que la ley prefiguraba. El creyente no está bajo la ley como sistema, sino bajo la gracia, y el Espíritu lo capacita para vivir la justicia que la ley pedía.'
        } }
      ],
      pensar: 'Jesús enseñó que Dios mira el corazón y no solo los actos. Cuando lees Mateo 5, ¿qué te revela sobre tu propio corazón, y qué te enseña sobre tu necesidad de la gracia de Cristo?'
    },
    {
      id: 'frente-grupos', n: 'Jesús frente a cada grupo', ref: 'Mateo 22:15-46; Marcos 12:13-34; Lucas 20:20-26; Romanos 13:1-7', fecha: [30, 33],
      visual: [
        img('mj-tributo-cesar.webp', 'En un pórtico del templo de Jerusalén, Jesús, visto de espaldas, sostiene en alto un denario de plata frente a un grupo de fariseos con flecos azules en sus mantos y de herodianos con ropas finas de cortesanos, que miran la moneda con expresión tensa; alrededor, la multitud escucha', '«¿De quién es esta imagen, y la inscripción?» (Mateo 22:20). Recreación.'),
        tabla({
          titulo: 'El martes de la última semana: cuatro preguntas',
          cab: ['Quiénes preguntan', 'La pregunta', 'La respuesta de Jesús'],
          filas: [
            ['Fariseos y herodianos', '¿Es lícito dar tributo a César?', '«Dad a César lo que es de César, y a Dios lo que es de Dios»'],
            ['Saduceos', '¿De quién será la mujer en la resurrección?', '«Erráis, ignorando las Escrituras y el poder de Dios»'],
            ['Un intérprete de la ley', '¿Cuál es el gran mandamiento?', 'Amar a Dios y al prójimo'],
            ['Jesús pregunta', '¿De quién es hijo el Cristo?', 'Si David lo llama Señor, ¿cómo es su hijo? (Salmo 110:1)']
          ]
        }),
        cita('Mateo 22:15-22', 'Entonces se fueron los fariseos y consultaron cómo sorprenderle en alguna palabra. Y le enviaron los discípulos de ellos con los herodianos, diciendo: Maestro, sabemos que eres amante de la verdad, y que enseñas con verdad el camino de Dios, y que no te cuidas de nadie, porque no miras la apariencia de los hombres. Dinos, pues, qué te parece: ¿Es lícito dar tributo a César, o no? Pero Jesús, conociendo la malicia de ellos, les dijo: ¿Por qué me tentáis, hipócritas? Mostradme la moneda del tributo. Y ellos le presentaron un denario. Entonces les dijo: ¿De quién es esta imagen, y la inscripción? Le dijeron: De César. Y les dijo: Dad, pues, a César lo que es de César, y a Dios lo que es de Dios. Oyendo esto, se maravillaron, y dejándole, se fueron.')
      ],
      texto: [
        'Mateo, Marcos y Lucas cuentan que, en los días anteriores a su muerte, Jesús enseñaba cada día en el templo, y que los distintos grupos de Jerusalén se turnaron para ponerlo a prueba. En una sola jornada se ve a Jesús frente a todo el mundo judío de su tiempo.',
        { h: 'Fariseos y herodianos: el tributo' },
        'Primero vinieron los discípulos de los fariseos junto con los herodianos. Lo halagaron y le preguntaron si era lícito pagar tributo al César. Si respondía que no, los herodianos lo acusarían de rebelión ante Pilato; si respondía que sí, el pueblo, que odiaba el tributo, lo vería como un traidor. Jesús pidió que le mostraran la moneda del tributo. Le trajeron un denario, que llevaba la imagen de Tiberio y una inscripción que lo llamaba hijo del divino Augusto. «¿De quién es esta imagen, y la inscripción?». Le dijeron: «De César». Y Jesús respondió: «Dad, pues, a César lo que es de César, y a Dios lo que es de Dios» (Mt 22:20-21).',
        'La moneda llevaba la imagen del César y le pertenecía; el ser humano lleva la imagen de Dios y le pertenece a Él. Jesús no fue un rebelde contra el gobierno, como quería Judas el galileo, ni un servidor del poder, como los herodianos: reconoció el lugar del gobierno, que Pablo explicaría después (Ro 13:1-7), y puso a Dios por encima de todo.',
        { h: 'Saduceos: la resurrección' },
        'Luego vinieron los saduceos con su caso de la mujer y los siete hermanos (III.2). Jesús les respondió desde los libros de Moisés que Dios «no es Dios de muertos, sino de vivos» (Mt 22:32), y la multitud se admiraba de su doctrina.',
        { h: 'Un escriba: el gran mandamiento' },
        'Un intérprete de la ley, de los fariseos, le preguntó cuál era el gran mandamiento. Jesús respondió con el amor a Dios y al prójimo. Según Marcos, el escriba reconoció que eso valía más que todos los holocaustos, y Jesús le dijo que no estaba lejos del reino (Mr 12:32-34).',
        { h: 'Jesús pregunta' },
        'Finalmente Jesús les preguntó a ellos: ¿de quién es hijo el Cristo? Le dijeron: «De David». Entonces citó el Salmo 110, donde David llama al Mesías «mi Señor». Si David lo llama Señor, ¿cómo puede ser solo su hijo? (Mt 22:42-45). Nadie pudo responder. Jesús había mostrado que el Mesías es mucho más que un rey humano descendiente de David: es el Señor de David. «Y nadie le podía responder palabra; ni osó alguno desde aquel día preguntarle más» (Mt 22:46).'
      ],
      pensar: 'Jesús enseñó a dar al gobierno lo que le corresponde y a Dios lo que le pertenece. Si llevas la imagen de Dios, ¿qué significa en tu vida dar «a Dios lo que es de Dios»?'
    },
    {
      id: 'barreras', n: 'Barreras que Jesús cruzó', ref: 'Marcos 1:40-42; Juan 4:7-9, 27; Lucas 7:36-50; Mateo 8:5-13; Marcos 7:24-30; Lucas 19:1-10; Efesios 2:13-16', fecha: [27, 30],
      visual: [
        img('../dios-y-la-trinidad/img/samaritana.webp', 'Junto al pozo de Jacob, al mediodía, una mujer samaritana con un cántaro escucha a Jesús, que está sentado en el brocal y se ve de espaldas; al fondo, el monte Gerizim', 'Una mujer, samaritana y con una vida marcada por el pecado: tres barreras que Jesús cruzó junto al pozo de Jacob (Juan 4). Recreación.'),
        tabla({
          titulo: 'Barreras de su tiempo y lo que hizo Jesús',
          cab: ['Barrera', 'Lo que se esperaba', 'Lo que hizo Jesús'],
          filas: [
            ['Pureza', 'No tocar a un leproso, a una mujer con flujo ni a un muerto', 'Los tocó y quedaron limpios (Marcos 1:41; 5:27-42)'],
            ['Pueblo', 'No tratar con samaritanos', 'Pidió agua a una samaritana y se quedó en su pueblo (Juan 4)'],
            ['Género', 'Un maestro no habla a solas con una mujer', 'Habló con ella y la hizo testigo (Juan 4:27-29)'],
            ['Moral', 'No comer con pecadores', 'Comió con publicanos y pecadores (Lucas 5:29-32)'],
            ['Nación', 'Los gentiles quedan fuera', 'Sanó al siervo del centurión y a la hija de la sirofenicia (Mateo 8:5-13; Marcos 7:24-30)']
          ]
        }),
        cita('Mateo 8:10-11', 'Al oírlo Jesús, se maravilló, y dijo a los que le seguían: De cierto os digo, que ni aun en Israel he hallado tanta fe. Y os digo que vendrán muchos del oriente y del occidente, y se sentarán con Abraham e Isaac y Jacob en el reino de los cielos;')
      ],
      texto: [
        'Las rutas anteriores mostraron las muchas líneas que dividían el mundo judío del siglo I: entre puros e impuros, entre judíos y samaritanos, entre hombres y mujeres, entre justos y pecadores, entre Israel y los gentiles. Muchas de esas líneas tenían su origen en la ley de Dios, que había separado a Israel para que fuera santo. Otras las habían agregado los hombres. Jesús las cruzó todas, una y otra vez.',
        { h: 'Sin dejar de ser santo' },
        'Al cruzar esas barreras, Jesús no se volvió impuro ni aprobó el pecado. Ocurrió lo contrario: su santidad era más fuerte que la impureza. El leproso quedó limpio, la mujer pecadora salió perdonada, Zaqueo devolvió lo robado y la samaritana corrió a anunciar a su pueblo que había encontrado al Cristo. Jesús no bajó la exigencia de Dios: ofreció el poder para cumplirla.',
        { h: 'Primero a Israel, después a las naciones' },
        'Durante su ministerio, Jesús se dedicó sobre todo a Israel: «No soy enviado sino a las ovejas perdidas de la casa de Israel» (Mt 15:24). Pero cuando un centurión romano y una mujer sirofenicia, ambos gentiles, le pidieron ayuda con fe, los atendió y alabó su fe. Del centurión dijo: «ni aun en Israel he hallado tanta fe. Y os digo que vendrán muchos del oriente y del occidente, y se sentarán con Abraham e Isaac y Jacob en el reino de los cielos» (Mt 8:10-11). Cuando unos griegos pidieron ver a Jesús en la última Pascua, Él anunció que había llegado la hora de ser glorificado y de atraer a todos a sí mismo (Jn 12:20-32).',
        { h: 'La pared derribada' },
        'Lo que Jesús comenzó en su ministerio lo completó en la cruz. Pablo escribe que Cristo «es nuestra paz, que de ambos pueblos hizo uno, derribando la pared intermedia de separación» (Ef 2:14). Pensaba en la balaustrada del templo que ningún gentil podía cruzar (IV.1). En la iglesia, judíos y gentiles, hombres y mujeres, esclavos y libres, son uno en Cristo (Gá 3:28).',
        ir('Ver la ruta IV: el templo y la pared de separación', '#fe/1')
      ],
      pensar: 'Jesús cruzó las barreras que separaban a las personas, sin dejar de ser santo. ¿Qué barreras de cultura, clase social, nacionalidad o prejuicio te cuesta cruzar para llevar el amor de Cristo?'
    },
    {
      id: 'ultima-semana', n: 'La última semana: Pascua, Sanedrín y Pilato', ref: 'Marcos 14:1-2; Juan 18:28; Lucas 23:1-25; Mateo 27:24-25; Hechos 2:23, 36; Hechos 3:13-17; Hechos 4:27-28; Isaías 53:5', fecha: [30, 33],
      visual: [
        esq('esquema-semana.svg', 'Esquema de la última semana de Jesús, de domingo a domingo, y del viernes hora por hora, del Sanedrín al amanecer hasta la sepultura antes de la puesta del sol', 'La última semana de Jesús, día por día, y el viernes hora por hora.'),
        img('mj-antipas-jesus.webp', 'En un salón del palacio asmoneo de Jerusalén, Herodes Antipas, de unos cincuenta años, sentado en un trono, se ríe con desprecio mientras sus soldados ponen sobre los hombros de Jesús, que está de pie, atado y sereno, visto de espaldas, una ropa espléndida y brillante; los principales sacerdotes acusan con gestos al fondo', '«Herodes con sus soldados le menospreció y escarneció, vistiéndole de una ropa espléndida» (Lucas 23:11). Recreación.'),
        img('../imperio-romano/img/roma-jesus-pilato.webp', 'Jesús, de pie con las manos atadas, ante Poncio Pilato sentado en su tribunal en el pretorio de Jerusalén', 'Jesús ante Pilato (Juan 18:33-38). Recreación.'),
        cita('Hechos 4:27-28', 'Porque verdaderamente se unieron en esta ciudad contra tu santo Hijo Jesús, a quien ungiste, Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel, para hacer cuanto tu mano y tu consejo habían antes determinado que sucediera.')
      ],
      texto: [
        'La última semana de Jesús ocurrió en el corazón del mundo judío: en Jerusalén, durante la Pascua, con la ciudad llena de peregrinos. Los principales sacerdotes querían prenderlo, pero decían: «No durante la fiesta, para que no se haga alboroto del pueblo» (Mr 14:2). El pueblo lo tenía por profeta, y los líderes le temían.',
        { h: 'Todo el mundo de Jesús en una noche' },
        'En menos de un día, Jesús pasó por todos los poderes que este recurso ha estudiado. Lo arrestó una cohorte romana junto con la guardia del templo; lo interrogó Anás; lo juzgó el Sanedrín presidido por Caifás; lo entregaron a Pilato, el prefecto romano; Pilato lo envió a Herodes Antipas, que estaba en Jerusalén por la fiesta, y Herodes lo devolvió burlándose de él. Sus acusadores no entraron en el pretorio «para no contaminarse, y así poder comer la pascua» (Jn 18:28): cuidaban su pureza mientras pedían la muerte de un inocente.',
        'Pilato, que no halló delito en Jesús, ofreció soltarlo según la costumbre de la fiesta. La multitud pidió a Barrabás. Pilato se lavó las manos, y «respondiendo todo el pueblo, dijo: Su sangre sea sobre nosotros, y sobre nuestros hijos» (Mt 27:25). Jesús fue crucificado por soldados romanos, a la manera romana, fuera de la ciudad.',
        { h: '¿Quién mató a Jesús?' },
        'El Nuevo Testamento responde de varias maneras, y todas son verdad. Pedro dijo a los habitantes de Jerusalén: «a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo» (Hch 2:36). Los líderes y la multitud de Jerusalén que pidieron su muerte fueron responsables, y Pedro los llamó al arrepentimiento. Pero en el mismo discurso agregó: «sé que por ignorancia lo habéis hecho, como también vuestros gobernantes» (Hch 3:17), y les ofreció el perdón. La iglesia, en oración, dijo que se unieron contra Jesús «Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel» (Hch 4:27): judíos y gentiles juntos.',
        'Y detrás de todos estaba algo más profundo. Jesús fue entregado «por el determinado consejo y anticipado conocimiento de Dios» (Hch 2:23), y dio su vida voluntariamente: «Nadie me la quita, sino que yo de mí mismo la pongo» (Jn 10:18). Murió por los pecados de la humanidad entera, judíos y gentiles: «él herido fue por nuestras rebeliones, molido por nuestros pecados» (Is 53:5). Cada persona que ha pecado es parte de la causa de la cruz.',
        'Por eso es un grave error, y una injusticia que causó siglos de persecución, culpar de la muerte de Jesús a los judíos de otras épocas o al pueblo judío en general. Los primeros creyentes eran judíos, el mismo Jesús oró por quienes lo crucificaban: «Padre, perdónalos, porque no saben lo que hacen» (Lc 23:34), y el evangelio se ofreció primero en Jerusalén.'
      ],
      pensar: 'Jesús murió por los pecados de quienes lo crucificaron y también por los tuyos. ¿Has reconocido que tus pecados también llevaron a Jesús a la cruz, y has recibido el perdón que Él ofreció desde allí?'
    },
    {
      id: 'crucificado', n: 'Un Mesías crucificado: «tropezadero» para los judíos', ref: 'Deuteronomio 21:22-23; Gálatas 3:13; 1 Corintios 1:22-24; Lucas 24:19-27; Hechos 5:30-31; 1 Pedro 2:24', fecha: [30, 60],
      visual: [
        foto('foto-talon-yehohanan.jpg', 'Réplica de un hueso del talón humano atravesado por un clavo de hierro doblado, con restos de madera, conservado en una vitrina de museo', 'Réplica del talón de Yehohanán, un judío crucificado en el siglo I, hallado en 1968 en una tumba de Jerusalén con el clavo todavía en el hueso. Es la única prueba arqueológica directa de una crucifixión en la tierra de Israel. Museo de Israel.', 'Licencia por verificar'),
        img('../interpretar-biblia/img/camino-a-emaus.webp', 'Jesús resucitado camina de espaldas junto a dos discípulos por un camino de tierra entre colinas al atardecer, explicándoles las Escrituras', '«¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria?» (Lucas 24:26). Recreación.'),
        cita('Lucas 24:19-27', 'Entonces él les dijo: ¿Qué cosas? Y ellos le dijeron: De Jesús nazareno, que fue varón profeta, poderoso en obra y en palabra delante de Dios y de todo el pueblo; y cómo le entregaron los principales sacerdotes y nuestros gobernantes a sentencia de muerte, y le crucificaron. Pero nosotros esperábamos que él era el que había de redimir a Israel; y ahora, además de todo esto, hoy es ya el tercer día que esto ha acontecido. Aunque también nos han asombrado unas mujeres de entre nosotros, las que antes del día fueron al sepulcro; y como no hallaron su cuerpo, vinieron diciendo que también habían visto visión de ángeles, quienes dijeron que él vive. Y fueron algunos de los nuestros al sepulcro, y hallaron así como las mujeres habían dicho, pero a él no le vieron. Entonces él les dijo: ¡Oh insensatos, y tardos de corazón para creer todo lo que los profetas han dicho! ¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria? Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.')
      ],
      texto: [
        'Pablo escribió: «nosotros predicamos a Cristo crucificado, para los judíos ciertamente tropezadero, y para los gentiles locura» (1 Co 1:23). Para entender por qué la cruz era un escándalo para un judío del siglo I, hay que recordar lo que significaba ser crucificado.',
        { h: 'La muerte más vergonzosa' },
        'La crucifixión era el castigo romano para esclavos, rebeldes y criminales de las clases bajas. Era una muerte lenta, pública y humillante: el condenado era azotado, cargaba el madero, era desnudado y quedaba expuesto a la burla de todos. Los romanos crucificaron a miles de judíos en el siglo I, sobre todo rebeldes. En 1968 se encontró en Jerusalén el hueso del talón de un hombre llamado Yehohanán, todavía atravesado por un clavo: la única prueba arqueológica directa de una crucifixión en la tierra de Israel.',
        { h: '«Maldito por Dios es el colgado»' },
        'Para un judío, había algo peor que la vergüenza. La ley decía que el cuerpo de un ejecutado colgado en un madero no debía quedar allí de noche, «porque maldito por Dios es el colgado» (Dt 21:23). Por eso los líderes pidieron a Pilato que quitaran los cuerpos antes del sábado (Jn 19:31). Un hombre crucificado parecía maldito por Dios. ¿Cómo podía ser el Mesías, el ungido y bendito de Dios? Ninguna de las esperanzas judías de la época, ni la del rey hijo de David, ni la del sacerdote, ni la del profeta, imaginaba un Mesías crucificado.',
        { h: '«Nosotros esperábamos»' },
        'Los discípulos tampoco lo esperaban. Los dos que caminaban a Emaús le explicaron al desconocido que se les unió que Jesús había sido «varón profeta, poderoso en obra y en palabra», pero que los principales sacerdotes lo habían crucificado, y concluyeron con tristeza: «nosotros esperábamos que él era el que había de redimir a Israel» (Lc 24:19-21). Entonces Jesús resucitado les dijo: «¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria?», y les explicó en todas las Escrituras, desde Moisés y los profetas, lo que decían de Él (Lc 24:26-27).',
        { h: 'La maldición que nos redime' },
        'Lo que parecía la prueba de que Jesús no era el Mesías resultó ser el centro del plan de Dios. Pablo, el fariseo que había perseguido a la iglesia precisamente por esto, lo entendió así: «Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición (porque está escrito: Maldito todo el que es colgado en un madero)» (Gá 3:13). Jesús fue colgado en el madero no por sus pecados, sino por los nuestros. Y Dios lo resucitó y lo exaltó como Príncipe y Salvador (Hch 5:30-31). Por eso, «para los llamados, así judíos como griegos», el Cristo crucificado es «poder de Dios, y sabiduría de Dios» (1 Co 1:24).',
        ir('Ver Entre los Testamentos: la esperanza del Mesías', R.entre + '#nacio/8')
      ],
      pensar: 'La cruz parecía la mayor derrota de Jesús, y fue su mayor victoria. ¿Hay alguna situación en tu vida que parece una derrota, en la que necesitas confiar en que Dios está obrando su plan?'
    }
  ];

  window.__MJ.jesus = jesus;
})();
/* El mundo judío en tiempos de Jesús · ruta VII. De Jesús al año 70, y ensamblado (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA VII. De Jesús al año 70 ==================
  const despues = [
    {
      id: 'iglesia-jerusalen', n: 'La iglesia de Jerusalén dentro del judaísmo', ref: 'Hechos 2:41-47; Hechos 3:1; Hechos 5:12-14; Hechos 6:1-9; Hechos 6:7; Hechos 24:5, 14', fecha: [30, 44],
      visual: [
        img('../hechos/img/hechos-portico-salomon.webp', 'Los apóstoles enseñan a una multitud en el pórtico de Salomón, una larga columnata de piedra en el atrio del templo de Jerusalén, con enfermos traídos en camillas a su alrededor', 'Los apóstoles en el pórtico de Salomón (Hechos 5:12-16). Recreación.'),
        tabla({
          titulo: 'La primera iglesia y el mundo judío',
          cab: ['Lo que conservaron', 'Lo nuevo en Cristo'],
          filas: [
            ['Iban cada día al templo y oraban a las horas de oración (Hechos 2:46; 3:1)', 'Partían el pan en las casas en memoria del Señor (Hechos 2:42, 46)'],
            ['Leían la ley y los profetas', 'Los leían como Escritura cumplida en Jesús (Hechos 2:16-36)'],
            ['Guardaban las costumbres judías', 'Bautizaban en el nombre de Jesús y recibían el Espíritu Santo (Hechos 2:38)'],
            ['Se reunían en el pórtico de Salomón', 'Tenían todas las cosas en común (Hechos 4:32)'],
            ['Los llamaban «la secta de los nazarenos» (Hechos 24:5)', 'Ellos se llamaban «el Camino» (Hechos 24:14)']
          ]
        }),
        cita('Hechos 2:44-47', 'Todos los que habían creído estaban juntos, y tenían en común todas las cosas; y vendían sus propiedades y sus bienes, y lo repartían a todos según la necesidad de cada uno. Y perseverando unánimes cada día en el templo, y partiendo el pan en las casas, comían juntos con alegría y sencillez de corazón, alabando a Dios, y teniendo favor con todo el pueblo. Y el Señor añadía cada día a la iglesia los que habían de ser salvos.')
      ],
      texto: [
        'Después de Pentecostés, la iglesia de Jerusalén estaba formada por judíos que habían creído que Jesús era el Mesías. No pensaban que habían dejado el judaísmo para empezar otra religión, sino que el Dios de Israel había cumplido sus promesas. Por eso seguían «unánimes cada día en el templo», y al mismo tiempo partían el pan en las casas (Hch 2:46). Pedro y Juan subían al templo «a la hora novena, la de la oración» (Hch 3:1), y los creyentes se reunían en el pórtico de Salomón (Hch 5:12).',
        ir('Ver Hechos de los Apóstoles: Jerusalén, la iglesia madre', R.hechos + '#expansion/2'),
        { h: 'Una iglesia que crecía' },
        'La iglesia crecía con rapidez, y en el pueblo tenía buena fama. Lucas cuenta que «muchos de los sacerdotes obedecían a la fe» (Hch 6:7): seguramente sacerdotes sencillos, de los que servían por turnos en el templo, no de las familias de los sumos sacerdotes. Fuera de la iglesia, Josefo llamaba a los grupos judíos «sectas» o escuelas, y así también se referían a los creyentes: «la secta de los nazarenos» (Hch 24:5).',
        { h: 'Hebreos y helenistas' },
        'La iglesia reflejaba las diferencias del mundo judío. Había judíos de Judea y Galilea, que hablaban arameo, y judíos de la diáspora que vivían en Jerusalén y hablaban griego. Lucas los llama «hebreos» y «griegos», o helenistas, y cuenta que hubo tensión entre ellos por la atención de las viudas (Hch 6:1). La solución fue elegir a siete hombres llenos del Espíritu Santo, todos con nombres griegos.',
        'Uno de ellos, Esteban, discutía con los de «la sinagoga llamada de los libertos», formada por judíos de Cirene, Alejandría, Cilicia y Asia (Hch 6:9). Lo acusaron de hablar contra el templo y la ley, y fue apedreado. Entre los que guardaban la ropa de los que lo mataban estaba un joven fariseo de Cilicia, Saulo de Tarso.',
        { h: 'Del templo a las naciones' },
        'La persecución que siguió a la muerte de Esteban dispersó a los creyentes por Judea y Samaria, y el evangelio salió de Jerusalén, como Jesús había anunciado. Pero la iglesia de Jerusalén siguió allí, guiada por los apóstoles y después por Santiago, el hermano del Señor.'
      ],
      pensar: 'La primera iglesia perseveraba en la oración, el partimiento del pan y la comunión, y «el Señor añadía cada día a la iglesia los que habían de ser salvos». ¿Qué de su vida y de su alegría te gustaría ver en tu iglesia y en tu propia vida?'
    },
    {
      id: 'santiago', n: 'Santiago y los fariseos que creyeron', ref: 'Hechos 12:17; Hechos 15:1-21; Hechos 21:17-26; Gálatas 2:9; Santiago 1:1; 1 Corintios 15:7', fecha: [44, 62],
      visual: [
        img('../hechos/img/hechos-concilio.webp', 'Los apóstoles y los ancianos de Jerusalén reunidos en una sala, escuchando a Jacobo, un hombre de barba larga que habla de pie, mientras Pedro, Pablo y Bernabé están sentados entre ellos', 'Jacobo, el hermano del Señor, habla en el concilio de Jerusalén (Hechos 15:13-21). Recreación.'),
        cita('Hechos 15:13-20', 'Y cuando ellos callaron, Jacobo respondió diciendo: Varones hermanos, oídme. Simón ha contado cómo Dios visitó por primera vez a los gentiles, para tomar de ellos pueblo para su nombre. Y con esto concuerdan las palabras de los profetas, como está escrito: Después de esto volveré Y reedificaré el tabernáculo de David, que está caído; Y repararé sus ruinas, Y lo volveré a levantar, Para que el resto de los hombres busque al Señor, Y todos los gentiles, sobre los cuales es invocado mi nombre, Dice el Señor, que hace conocer todo esto desde tiempos antiguos. Por lo cual yo juzgo que no se inquiete a los gentiles que se convierten a Dios, sino que se les escriba que se aparten de las contaminaciones de los ídolos, de fornicación, de ahogado y de sangre.'),
        cita('Hechos 21:18-20', 'Y al día siguiente Pablo entró con nosotros a ver a Jacobo, y se hallaban reunidos todos los ancianos; a los cuales, después de haberles saludado, les contó una por una las cosas que Dios había hecho entre los gentiles por su ministerio. Cuando ellos lo oyeron, glorificaron a Dios, y le dijeron: Ya ves, hermano, cuántos millares de judíos hay que han creído; y todos son celosos por la ley.', 'Pasaje 2')
      ],
      texto: [
        'Durante el ministerio de Jesús, sus hermanos no creían en Él (Jn 7:5). Pero después de la resurrección, Jesús se apareció a Jacobo, o Santiago (1 Co 15:7), y él llegó a ser uno de los dirigentes más importantes de la iglesia de Jerusalén. Pablo lo nombra junto con Pedro y Juan entre los que «eran considerados como columnas» (Gá 2:9). Es el autor de la carta de Santiago, dirigida «a las doce tribus que están en la dispersión» (Stg 1:1).',
        { h: 'Fariseos que creyeron' },
        'Entre los creyentes de Jerusalén había fariseos. Cuando el evangelio llegó a los gentiles, «algunos de la secta de los fariseos, que habían creído», sostuvieron que los gentiles convertidos debían circuncidarse y guardar la ley de Moisés para ser salvos (Hch 15:5). Era una pregunta lógica en el mundo judío: los gentiles que querían unirse a Israel se circuncidaban y se hacían judíos.',
        'En el concilio de Jerusalén, Pedro recordó que Dios había dado el Espíritu Santo a los gentiles de la casa de Cornelio sin que se circuncidaran, «purificando por la fe sus corazones» (Hch 15:9). Santiago mostró que los profetas habían anunciado que también los gentiles buscarían al Señor, y propuso no inquietar a los gentiles con la circuncisión, sino pedirles que se apartaran de la idolatría, de la inmoralidad sexual y de las costumbres que más ofendían a los judíos (Hch 15:19-20). La salvación es por gracia, para judíos y gentiles por igual.',
        { h: '«Todos son celosos por la ley»' },
        'Años después, cuando Pablo llegó a Jerusalén con la ofrenda de las iglesias, Santiago y los ancianos le dijeron: «Ya ves, hermano, cuántos millares de judíos hay que han creído; y todos son celosos por la ley» (Hch 21:20). Habían oído rumores de que Pablo enseñaba a los judíos de la diáspora a abandonar a Moisés. Para mostrar que no era así, Pablo participó en el templo de la purificación de cuatro hombres que tenían un voto. Allí lo reconocieron unos judíos de Asia, y se produjo el tumulto que terminó con su arresto.',
        { h: 'La muerte de Santiago' },
        'Josefo cuenta que en el año 62, cuando murió el procurador Festo y su sucesor todavía no llegaba, el sumo sacerdote Anás el joven, hijo del Anás de los evangelios, reunió al Sanedrín e hizo apedrear a «Santiago, hermano de Jesús, llamado Cristo», con algunos otros. Muchos judíos respetados de Jerusalén protestaron por esa injusticia, y el nuevo gobernador destituyó a Anás. La tradición cristiana recuerda a Santiago como «el justo», por su vida de oración y de piedad.'
      ],
      pensar: 'Santiago, que no había creído en Jesús durante su ministerio, llegó a ser una columna de la iglesia y murió por su fe. ¿Qué te enseña su vida sobre lo que la resurrección de Jesús puede hacer en una persona, incluso en tu propia familia?'
    },
    {
      id: 'agripa', n: 'Agripa I y la persecución', ref: 'Hechos 12:1-24; Hechos 25:13–26:32', fecha: [37, 44],
      visual: [
        img('../hechos/img/hechos-pedro-carcel.webp', 'En una celda oscura, un ángel resplandeciente despierta a Pedro, dormido entre dos soldados, mientras las cadenas caen de sus manos', '«Las cadenas se le cayeron de las manos» (Hechos 12:7). Recreación.'),
        pasos([
          { t: '37 d.C.: Calígula da a Agripa la antigua tetrarquía de Felipe, con el título de rey', fecha: 37, estado: { view: V.palestina, capas: ['nt-felipe'], lugares: ['cesarea-filipo', 'jerusalen'] } },
          { t: '39–40 d.C.: recibe también Galilea y Perea, tras el destierro de Herodes Antipas', fecha: 40, estado: { view: V.palestina, capas: ['nt-felipe', 'nt-galilea', 'nt-perea'], lugares: ['tiberias', 'cesarea-filipo', 'jerusalen'] } },
          { t: '41–44 d.C.: Claudio le da Judea y Samaria; reina sobre todo el antiguo reino de su abuelo', fecha: 42, estado: { view: V.palestina, capas: ['mj-agripa'], lugares: ['jerusalen', 'cesarea', 'tiberias'] } }
        ]),
        cita('Hechos 12:20-24', 'Y Herodes estaba enojado contra los de Tiro y de Sidón; pero ellos vinieron de acuerdo ante él, y sobornado Blasto, que era camarero mayor del rey, pedían paz, porque su territorio era abastecido por el del rey. Y un día señalado, Herodes, vestido de ropas reales, se sentó en el tribunal y les arengó. Y el pueblo aclamaba gritando: ¡Voz de Dios, y no de hombre! Al momento un ángel del Señor le hirió, por cuanto no dio la gloria a Dios; y expiró comido de gusanos. Pero la palabra del Señor crecía y se multiplicaba.')
      ],
      texto: [
        'El «rey Herodes» de Hechos 12 es Herodes Agripa I, nieto de Herodes el Grande y de la princesa asmonea Mariamne. Creció en Roma, en la corte imperial, donde se hizo amigo del futuro emperador Calígula. Cuando Calígula subió al trono en el año 37, le dio la antigua tetrarquía de Felipe con el título de rey; después, Galilea y Perea, quitadas a Herodes Antipas. En el año 41, el emperador Claudio le dio también Judea y Samaria. Por tres años, la tierra volvió a tener un rey judío, como en tiempos de su abuelo.',
        { h: 'Un rey popular' },
        'A diferencia de su abuelo, Agripa supo ganarse a los judíos. Por su sangre asmonea lo aceptaban como uno de ellos, cumplía las costumbres judías en Jerusalén, ofrecía sacrificios en el templo y defendía los intereses de su pueblo ante Roma. Josefo dice que vivía con gusto en Jerusalén y que guardaba con cuidado las leyes de sus padres.',
        { h: 'La persecución de la iglesia' },
        'Para agradar a los líderes judíos, Agripa «echó mano a algunos de la iglesia para maltratarles. Y mató a espada a Jacobo, hermano de Juan» (Hch 12:1-2). Jacobo fue el primero de los doce en morir por su fe. Como eso agradó a los líderes, prendió también a Pedro durante la fiesta de los panes sin levadura, con la intención de presentarlo al pueblo después de la Pascua. Pero mientras la iglesia oraba sin cesar, un ángel sacó a Pedro de la cárcel (Hch 12:5-11).',
        { h: 'La muerte de Agripa' },
        'Lucas cuenta que, en Cesarea, Agripa se sentó en el tribunal con ropas reales y habló al pueblo, que gritaba: «¡Voz de Dios, y no de hombre!». Al momento un ángel del Señor lo hirió, «por cuanto no dio la gloria a Dios», y murió (Hch 12:22-23). Josefo cuenta la misma escena con detalles propios: en unos juegos en honor del emperador, Agripa apareció en el teatro de Cesarea con un manto de plata que brillaba con el sol, sus aduladores lo llamaron dios y él no los reprendió; enseguida sintió un dolor terrible y murió a los cinco días. Las dos fuentes, independientes, coinciden en lo esencial.',
        '«Pero la palabra del Señor crecía y se multiplicaba» (Hch 12:24). Después de Agripa, toda la tierra pasó a ser gobernada por procuradores romanos. Su hijo, Agripa II, recibió algunos territorios del norte; ante él y su hermana Berenice dio Pablo su defensa en Cesarea (Hch 25–26).',
        ir('Ver Los viajes de Pablo', R.pablo)
      ],
      pensar: 'Agripa mató a Jacobo y encarceló a Pedro, pero la iglesia oró y la Palabra siguió creciendo. ¿Qué te enseña este pasaje sobre el poder de la oración de la iglesia frente a la persecución?'
    },
    {
      id: 'rebelion', n: 'La gran rebelión y la caída del templo', ref: 'Lucas 19:41-44; Lucas 21:20-24; Mateo 24:1-2, 15-16; Marcos 13:1-2; Daniel 9:26', fecha: [66, 74],
      visual: [
        pasos([
          { t: '66 d.C.: estalla la rebelión en Jerusalén y Cesarea; los rebeldes vencen al gobernador de Siria', fecha: 66, estado: { view: V.guerra, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea', 'masada'] } },
          { t: '67 d.C.: Vespasiano conquista Galilea: Jotapata, Tiberíades, Magdala y Gamla', fecha: 67, estado: { view: V.guerra, capas: ['mj-galilea-67'], lugares: ['tolemaida', 'seforis', 'jotapata', 'tiberias', 'magdala', 'gamla'], trazos: ['mj-vespasiano-67'] } },
          { t: '68 d.C.: Vespasiano rodea Jerusalén; cae Qumrán. En 69 es proclamado emperador', fecha: 68, estado: { view: V.guerra, capas: ['mj-provincia'], lugares: ['cesarea', 'antipatris', 'lida', 'emaus', 'jerico', 'qumran', 'jerusalen'], trazos: ['mj-vespasiano-68'] } },
          { t: '70 d.C.: Tito sitia Jerusalén; el templo es incendiado y destruido', fecha: 70, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['cesarea', 'samaria', 'jerusalen'], trazos: ['mj-tito-70'] } },
          { t: '73 o 74 d.C.: cae Masada, el último reducto de los rebeldes', fecha: 73, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['jerusalen', 'herodion', 'masada', 'maqueronte'], trazos: ['mj-silva-73'] } }
        ]),
        img('../imperio-romano/img/roma-sitio-jerusalen.webp', 'Jerusalén sitiada por las legiones romanas, con el templo de Herodes al fondo y humo sobre la ciudad', 'El sitio de Jerusalén por Tito, año 70. Recreación.'),
        foto('../tierra-de-israel/img/arco-tito.jpg', 'Relieve del Arco de Tito en Roma: soldados romanos llevan en procesión el candelabro de siete brazos y otros objetos del templo de Jerusalén', 'El botín del templo en el Arco de Tito, Roma (hacia el año 81).', 'Jebulon, CC0 (dominio público), Wikimedia Commons'),
        cita('Lucas 19:41-44', 'Y cuando llegó cerca de la ciudad, al verla, lloró sobre ella, diciendo: ¡Oh, si también tú conocieses, a lo menos en este tu día, lo que es para tu paz! Mas ahora está encubierto de tus ojos. Porque vendrán días sobre ti, cuando tus enemigos te rodearán con vallado, y te sitiarán, y por todas partes te estrecharán, y te derribarán a tierra, y a tus hijos dentro de ti, y no dejarán en ti piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación.')
      ],
      texto: [
        'Cuando Jesús se acercó a Jerusalén por última vez, «lloró sobre ella», y anunció que sus enemigos la rodearían con vallado, la sitiarían y no dejarían en ella «piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación» (Lc 19:41-44). Cuarenta años después, esas palabras se cumplieron.',
        { h: 'Las causas' },
        'Después de Agripa I, los procuradores gobernaron cada vez peor, los sicarios asesinaban en las calles y las familias sacerdotales peleaban entre sí. En el año 66, el procurador Gesio Floro sacó dinero del tesoro del templo; la indignación estalló, y los sacerdotes dejaron de ofrecer el sacrificio diario por el emperador. Era una declaración de guerra.',
        { h: 'La guerra' },
        'Nerón envió a su general Vespasiano, que en el 67 conquistó Galilea. En Jotapata se le rindió el comandante judío de Galilea: era Flavio Josefo, el historiador. En el 69 Vespasiano fue proclamado emperador, y su hijo Tito quedó a cargo de la guerra.',
        'En Jerusalén, los grupos rebeldes luchaban entre sí y quemaron las reservas de trigo. En la primavera del 70, Tito rodeó la ciudad con un muro, como Jesús había anunciado. El hambre fue espantosa. En el verano, el templo fue incendiado y destruido; miles murieron y otros fueron vendidos como esclavos. El Arco de Tito, en Roma, todavía muestra a los soldados llevando el candelero del templo. Masada resistió hasta el 73 o el 74.',
        { h: 'Los creyentes de Jerusalén' },
        'Jesús había advertido: «cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado. Entonces los que estén en Judea, huyan a los montes» (Lc 21:20-21). Eusebio de Cesarea, historiador de la iglesia del siglo IV, cuenta que los creyentes de Jerusalén, advertidos por una revelación, salieron de la ciudad antes de la guerra y se refugiaron en Pela, al otro lado del Jordán.',
        { posturas: {
          titulo: '¿Se cumplió toda la profecía de Jesús en el año 70?',
          a: { n: 'Todo se cumplió en el 70', t: 'Algunos intérpretes, llamados preteristas, piensan que el sermón del monte de los Olivos, incluida la gran tribulación y la venida del Hijo del Hombre, se cumplió entero en la destrucción de Jerusalén.' },
          b: { n: 'Un cumplimiento parcial que anuncia el final', t: 'El año 70 cumplió lo que Jesús dijo del templo y de la ciudad (Lc 21:20-24). Pero Jesús habló también de una abominación en el lugar santo seguida de una gran tribulación, de su venida en las nubes con poder y gloria y de la reunión de sus escogidos (Mt 24:15-31), que no ocurrieron en el 70. Lucas agrega que Jerusalén sería hollada por los gentiles «hasta que los tiempos de los gentiles se cumplan» (Lc 21:24): un período que sigue abierto.' },
          c: 'Este estudio sigue la segunda lectura: la destrucción del año 70 fue un cumplimiento real de las palabras de Jesús y una advertencia de lo que vendrá, pero la gran tribulación y la venida de Cristo en gloria son todavía futuras.'
        } },
        ir('Ver Los últimos tiempos: los tiempos de los gentiles', R.escatologia + '#panorama/6')
      ],
      pensar: 'Jesús lloró sobre Jerusalén antes de anunciar su destrucción. ¿Qué te enseñan sus lágrimas sobre el corazón de Dios hacia quienes rechazan su visitación, y sobre cómo debemos anunciar su juicio?'
    },
    {
      id: 'yavne', n: 'Después del 70: Yavne y dos caminos', ref: 'Romanos 9:1-5; Romanos 11:1-2, 11-12, 25-29; Hechos 28:23-31; Lucas 21:24', fecha: [70, 135],
      visual: [
        img('mj-yavne.webp', 'En una sala sencilla de una casa de la ciudad costera de Yavne, hacia el año 80, un grupo de maestros judíos anónimos de barba, con mantos de oración, estudia rollos y discute sentado en bancos alrededor de un anciano que enseña; por la ventana se ven palmeras y la luz del Mediterráneo', 'Después de la destrucción del templo, los maestros fariseos se reunieron en Yavne para reconstruir la vida judía en torno a la ley. Recreación con personas anónimas.'),
        tabla({
          titulo: 'Lo que cambió después del año 70',
          cab: ['', 'Antes del 70', 'Después del 70'],
          filas: [
            ['El templo', 'Centro del culto, con sacrificios diarios', 'Destruido; no hay más sacrificios'],
            ['El sacerdocio', 'Sumo sacerdote, saduceos y familias sacerdotales', 'Sin función; los saduceos desaparecen'],
            ['Los grupos', 'Fariseos, saduceos, esenios, zelotes', 'Solo los herederos de los fariseos dirigen al pueblo'],
            ['El centro de la vida judía', 'El templo y la sinagoga', 'La sinagoga, la casa y el estudio de la ley'],
            ['La relación con los creyentes en Jesús', 'Una corriente dentro del judaísmo', 'Dos caminos que se separan poco a poco']
          ]
        }),
        cita('Romanos 11:25-29', 'Porque no quiero, hermanos, que ignoréis este misterio, para que no seáis arrogantes en cuanto a vosotros mismos: que ha acontecido a Israel endurecimiento en parte, hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo, como está escrito: Vendrá de Sion el Libertador, Que apartará de Jacob la impiedad. Y este será mi pacto con ellos, Cuando yo quite sus pecados. Así que en cuanto al evangelio, son enemigos por causa de vosotros; pero en cuanto a la elección, son amados por causa de los padres. Porque irrevocables son los dones y el llamamiento de Dios.')
      ],
      texto: [
        'La destrucción del templo cambió para siempre el mundo judío. Sin templo no había sacrificios ni sumo sacerdote. Los saduceos desaparecieron, Qumrán había sido destruido y los zelotes murieron en la guerra.',
        { h: 'Yavne' },
        'Sobrevivieron los herederos de los fariseos. Según la tradición judía, un maestro llamado Yohanán ben Zakay salió de Jerusalén durante el sitio y obtuvo de los romanos permiso para establecer una escuela en Yavne, una ciudad cercana a la costa. Allí, los maestros reconstruyeron la vida judía en torno a la ley, la sinagoga, la oración y el estudio, en lugar del templo y los sacrificios. De ellos nació el judaísmo rabínico, que sigue vivo hasta hoy.',
        { h: 'Dos caminos que se separan' },
        'Al mismo tiempo, la iglesia se había extendido por el imperio, y en muchas ciudades la mayoría de los creyentes eran gentiles. Con los años, el judaísmo de los maestros y la iglesia se fueron separando: para unos, los creyentes en Jesús eran una secta apartada; para los otros, Jesús era el cumplimiento de la ley y los profetas.',
        { posturas: {
          titulo: '¿Cuándo se separaron la iglesia y la sinagoga?',
          a: { n: 'Una ruptura temprana', t: 'Algunos señalan que ya en tiempos de Jesús se expulsaba de la sinagoga a quienes lo confesaban como Mesías (Jn 9:22), y que hacia fines del siglo I se agregó a la oración de la sinagoga una maldición contra los herejes que alcanzaba a los creyentes en Jesús.' },
          b: { n: 'Una separación lenta', t: 'Otros piensan que esa oración y su fecha son inciertas, y que la separación fue gradual y distinta en cada lugar: en algunas ciudades, judíos creyentes en Jesús siguieron asistiendo a la sinagoga durante generaciones, y la ruptura se hizo definitiva recién en el siglo II, tras la segunda rebelión judía contra Roma (132–135).' },
          c: 'Las dos lecturas coinciden en lo esencial: la separación no se debió a que la iglesia rechazara a Israel, sino a que la mayoría de Israel no reconoció a Jesús como el Mesías, mientras los gentiles lo recibían.'
        } },
        { h: 'Dios no ha desechado a su pueblo' },
        'Pablo, judío y apóstol de los gentiles, sufrió por su pueblo y escribió: «¿Ha desechado Dios a su pueblo? En ninguna manera» (Ro 11:1). Enseñó que a Israel le ha acontecido «endurecimiento en parte, hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo», porque «irrevocables son los dones y el llamamiento de Dios» (Ro 11:25-29). Las promesas a Israel siguen en pie y se cumplirán cuando Cristo vuelva.',
        { h: 'La historia continúa' },
        'Aquí termina el mundo judío del Nuevo Testamento. Lo que siguió, la expansión de la iglesia por el imperio, la persecución, los mártires y los primeros siglos del cristianismo, se estudia en Historia de la Iglesia I, del siglo I a la Reforma (en preparación). Sus primeros pasos están en Hechos de los Apóstoles, que termina con Pablo en Roma, predicando el reino de Dios «abiertamente y sin impedimento» (Hch 28:31).',
        ir('Abrir Hechos de los Apóstoles', R.hechos),
        ir('Ver Pactos y dispensaciones: Israel y la iglesia', R.pactos + '#cristo/7')
      ],
      pensar: 'Pablo amaba tanto a su pueblo que deseaba su salvación por encima de todo (Romanos 9:1-3; 10:1). ¿Cómo debe un creyente mirar al pueblo judío hoy, a la luz de Romanos 11, y cómo puedes orar por Israel?'
    }
  ];

  // ================== Ensamblado ==================
  const E = window.__MJ;
  delete window.__MJ;
  const LINEA = { desde: -8, hasta: 75, hitos: [
    { a: -4, t: 'Muere Herodes' }, { a: 6, t: 'Judea, provincia' }, { a: [26, 36], t: 'Pilato' },
    { a: [27, 30], t: 'Ministerio de Jesús' }, { a: [41, 44], t: 'Agripa I' }, { a: 66, t: 'Rebelión' }, { a: 70, t: 'Cae el templo' }
  ] };
  window.RUTA_DATA = {
    titulo: 'El mundo judío en tiempos de Jesús',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio (como La tierra de Israel)
      minZoom: 4.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.MUNDO_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama: un pueblo, muchas voces', info: 'Quién gobernaba, las regiones, las lenguas y las fuentes', estaciones: E.panorama, linea: LINEA },
      { id: 'poder', grupo: 'La sociedad', n: 'II. El poder', info: 'Pilato, Antipas, Anás y Caifás, el Sanedrín, los impuestos, los soldados y los rebeldes', estaciones: E.poder, linea: LINEA },
      { id: 'grupos', grupo: 'La sociedad', n: 'III. Los grupos judíos', info: 'Fariseos, saduceos, escribas, esenios, zelotes, herodianos, samaritanos y el pueblo', estaciones: E.grupos, linea: LINEA },
      { id: 'fe', grupo: 'La sociedad', n: 'IV. La fe vivida', info: 'El templo, las fiestas, la sinagoga, el sábado, la pureza, la tradición, la piedad y el Mesías', estaciones: E.fe, linea: LINEA },
      { id: 'vida', grupo: 'La sociedad', n: 'V. La vida diaria', info: 'La casa, la boda, los niños, las mujeres, el trabajo, la economía, la mesa, la enfermedad y la muerte', estaciones: E.vida, linea: LINEA },
      { id: 'jesus', grupo: 'Jesús y la iglesia en ese mundo', n: 'VI. Jesús en su mundo', info: 'Galilea, el Maestro, la ley, los grupos, las barreras, la última semana y la cruz', estaciones: E.jesus, linea: LINEA },
      { id: 'despues', grupo: 'Jesús y la iglesia en ese mundo', n: 'VII. De Jesús al año 70', info: 'La iglesia de Jerusalén, Santiago, Agripa I, la rebelión, la caída del templo y Yavne', estaciones: despues, linea: LINEA }
    ]
  };
})();
