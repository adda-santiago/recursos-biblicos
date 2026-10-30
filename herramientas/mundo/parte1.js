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
  const HAY = new Set(/*@@IMAGENES*/[]);
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
        cita('Lucas 3:1-2', '@@lc/3/1-2')
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
        cita('Juan 19:19-20', '@@jn/19/19-20')
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
        cita('Lucas 1:1-4', '@@lc/1/1-4')
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
