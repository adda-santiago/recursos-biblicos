/* ==========================================================
   Recursos Bíblicos — Entre los Testamentos · contenido de las rutas
   FUENTE de public/apps/entre-los-testamentos/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/entre_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica, sin nombrarla.
   1 y 2 Macabeos y Josefo se usan como fuentes históricas, nunca como Escritura: se parafrasean,
   sin comillas ni burbuja. No se escriben referencias que la burbuja tomaría por capítulos
   inexistentes de la Biblia (los Macabeos se nombran sin capítulo o como «el primer libro de los Macabeos»).
   Los grupos e instituciones (ruta VII) se estudian en su origen; su actuación en los evangelios va en
   El mundo judío en tiempos de Jesús (nº 91). Los libros del período se estudian en Los libros apócrifos.
   ========================================================== */
(() => {
  const V = {
    judea: [[31.2, 34.3], [32.5, 35.9]],
    palestina: [[30.7, 34.0], [33.5, 36.6]],
    levante: [[29.0, 31.5], [37.0, 38.5]],
    oriente: [[23.5, 22.0], [41.5, 56.0]],
    mediterraneo: [[24.0, 10.0], [43.0, 48.0]],
    egipto: [[23.5, 28.0], [33.8, 37.5]],
    campana: [[29.6, 28.6], [36.8, 37.6]]
  };
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/entre_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(["debate-templo.webp", "elefantina-carta.webp", "elefantina-papiro.webp", "esquema-asmoneos.svg", "esquema-periodos.svg", "gimnasio-jerusalen.webp", "herodes-obras.webp", "inscripcion-teodoto.webp", "matatias-modin.webp", "moneda-janeo.webp", "pascua-samaritana.webp", "pompeyo-templo.webp", "qumran-esenios.webp", "simeon-templo.webp"]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (f.startsWith('../') ? { src: EMB[f] || f } : HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  const R = {
    apocrifos: '../../libros-apocrifos/', daniel: '../../daniel/', griego: '../../imperio-griego/', persa: '../../imperio-persa/',
    romano: '../../imperio-romano/', palabra: '../../palabra-de-dios/', biblia: '../../de-la-biblia-a-nosotros/',
    templo: '../../templo-herodes/', exilio: '../../exilio/', tierra: '../../tierra-de-israel/', sacerdocio: '../../sacerdocio/'
  };
  window.__ET = { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R };

  // ================== RUTA I. Panorama ==================
  const panorama = [
    {
      id: 'silencio', n: '¿Cuatrocientos años de silencio?', ref: 'Malaquías 4:4-6; Amós 8:11; Lucas 1:13-17; Gálatas 4:4', fecha: [-430, -5],
      visual: [
        img('../sacerdocio/img/sac-zacarias.webp', 'Dentro del lugar santo del templo, a la luz del candelero de oro, el anciano sacerdote Zacarías, vestido de lino blanco, ofrece incienso en el altar de oro y se sobresalta al ver a un ángel resplandeciente', 'El silencio profético termina en el templo, con el anuncio del ángel a Zacarías (Lucas 1:11-13). Recreación.'),
        cita('Malaquías 4:4-6', 'Acordaos de la ley de Moisés mi siervo, al cual encargué en Horeb ordenanzas y leyes para todo Israel. He aquí, yo os envío el profeta Elías, antes que venga el día de Jehová, grande y terrible. El hará volver el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres, no sea que yo venga y hiera la tierra con maldición.'),
        tabla({
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Qué estudia'],
          filas: [
            ['I. Panorama', 'De Malaquías a Mateo, las fuentes, Daniel y los cinco períodos'],
            ['II. El final del período persa', 'Yehud, Elefantina, los samaritanos y la ley en el centro (430–332 a.C.)'],
            ['III. Alejandro y los Ptolomeos', 'El helenismo, Alejandría, la Septuaginta y los Tobíadas (332–198 a.C.)'],
            ['IV. Los seléucidas y la crisis', 'El sumo sacerdocio comprado, Antíoco IV, la abominación y los mártires (198–164 a.C.)'],
            ['V. Los macabeos y los asmoneos', 'La rebelión, la Dedicación, la independencia y la guerra entre hermanos (167–63 a.C.)'],
            ['VI. Roma y Herodes', 'Pompeyo, Antípatro, Herodes, el templo y Augusto (63–4 a.C.)'],
            ['VII. Lo que nació en estos siglos', 'La sinagoga, los escribas, fariseos, saduceos, esenios, el Sanedrín y la esperanza del Mesías'],
            ['VIII. El cumplimiento del tiempo', 'Cómo Dios preparó el mundo para la venida de su Hijo']
          ]
        })
      ],
      texto: [
        'Si se lee la Biblia de corrido, entre la última página de Malaquías y la primera de Mateo pasan unos cuatrocientos años. Malaquías escribió hacia el año 430 a.C., cuando Nehemías gobernaba Judá bajo los persas. Cuando se abre Mateo, Judea tiene un rey llamado Herodes, la gobierna Roma, la gente habla arameo y griego, y en el relato aparecen fariseos, saduceos, sinagogas y un Sanedrín que el Antiguo Testamento nunca nombra. Este recurso cuenta qué pasó en medio.',
        { h: 'Un silencio profético' },
        'A esos siglos se los suele llamar «los cuatrocientos años de silencio». La expresión tiene una parte de verdad: después de Malaquías, Israel no tuvo profetas que hablaran con la autoridad de Isaías o Jeremías, ni se escribieron nuevos libros de la Escritura. Los mismos judíos de la época lo sabían; el primer libro de los Macabeos cuenta tres veces que en su tiempo no había profeta en Israel. Amós lo había anunciado como un juicio posible: «enviaré hambre a la tierra, no hambre de pan, ni sed de agua, sino de oír la palabra de Jehová» (Am 8:11).',
        'Pero Dios no estaba ausente. Malaquías terminó con una promesa: «He aquí, yo os envío el profeta Elías, antes que venga el día de Jehová, grande y terrible» (Mal 4:5). Y el silencio se rompió justamente en el templo, cuando un ángel anunció a Zacarías que su hijo iría delante del Señor «con el espíritu y el poder de Elías» (Lc 1:17).',
        { posturas: {
          titulo: '¿Silencio de Dios o silencio profético?',
          a: { n: 'Dios guardó silencio', t: 'Algunos predicadores presentan este período como un tiempo en que Dios se apartó de su pueblo y no actuó, como castigo por su infidelidad.' },
          b: { n: 'Silencio de la profecía, no de Dios', t: 'La Escritura del Antiguo Testamento quedó completa con Malaquías, pero Dios siguió gobernando la historia: cumplió en estos siglos lo que había anunciado por Daniel, preservó a su pueblo en la persecución y preparó el mundo para la venida de su Hijo.' },
          c: 'Este estudio sigue la segunda lectura: hubo silencio profético, no silencio de Dios. Pablo lo resume diciendo que Cristo vino «cuando vino el cumplimiento del tiempo» (Gá 4:4).'
        } },
        { ejercicio: {
          pregunta: '¿Qué quiere decir que estos siglos fueron un «silencio profético»?',
          opciones: [
            { t: 'Que Dios abandonó a Israel y no intervino en su historia.', ok: false, por_que: 'Dios siguió cumpliendo sus promesas y sus profecías, como las de Daniel, durante todo el período.' },
            { t: 'Que no hubo profetas con la autoridad de los del Antiguo Testamento ni se escribieron nuevos libros de la Escritura.', ok: true, por_que: 'Los mismos judíos de la época reconocían que no tenían profeta; el silencio terminó con Juan el Bautista.' },
            { t: 'Que los judíos dejaron de leer las Escrituras.', ok: false, por_que: 'Al contrario: en estos siglos la ley pasó al centro de la vida del pueblo, con escribas y sinagogas.' }
          ],
          explicacion: 'El canon del Antiguo Testamento se cerró con Malaquías; Dios volvió a hablar por un profeta cuando llegó el tiempo del Mesías.'
        } }
      ],
      pensar: 'Durante siglos no hubo un nuevo profeta, pero la promesa de Malaquías seguía en pie y se cumplió. ¿Cómo te sostiene una promesa de Dios cuando pasa mucho tiempo sin ver su cumplimiento?'
    },
    {
      id: 'poder-lengua', n: 'De Malaquías a Mateo: quién gobierna y qué lengua se habla', ref: 'Nehemías 5:14; Mateo 2:1; Lucas 2:1; Juan 19:20', fecha: [-430, -5],
      visual: [
        pasos([
          { t: 'Hacia 430 a.C.: Judá es Yehud, una pequeña provincia del imperio persa', fecha: -430, estado: { view: V.oriente, capas: ['persia-336'], lugares: ['jerusalen', 'susa', 'persepolis'] } },
          { t: '323 a.C.: Alejandro Magno ha conquistado todo el imperio persa', fecha: -323, estado: { view: V.oriente, capas: ['alejandro-323'], lugares: ['jerusalen', 'babilonia', 'alejandria'] } },
          { t: 'Hacia 250 a.C.: Judea pertenece a los Ptolomeos de Egipto', fecha: -250, estado: { view: V.levante, capas: ['ptolomeos-250'], lugares: ['jerusalen', 'alejandria', 'antioquia'] } },
          { t: 'Desde 198 a.C.: Judea pasa a los seléucidas de Siria', fecha: -198, estado: { view: V.levante, capas: ['seleucidas-200'], lugares: ['jerusalen', 'antioquia'] } },
          { t: '142–63 a.C.: Judea independiente bajo los asmoneos', fecha: -100, estado: { view: V.palestina, capas: ['h-asmoneo'], lugares: ['jerusalen', 'samaria', 'jope'] } },
          { t: 'Desde 63 a.C.: Roma; Herodes reina desde el 37 a.C.', fecha: -37, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['jerusalen', 'roma', 'alejandria'] } }
        ]),
        tabla({
          titulo: 'Lo que cambió en el poder y en la vida diaria',
          cab: ['', 'En Malaquías (c. 430 a.C.)', 'En Mateo (c. 5 a.C.)'],
          filas: [
            ['Imperio', 'Persia', 'Roma'],
            ['Gobierno de Judea', 'Un gobernador judío nombrado por el rey persa (Nehemías)', 'Herodes, rey vasallo de Roma'],
            ['Sumo sacerdote', 'De la familia de Sadoc, por herencia', 'Nombrado y removido por Herodes'],
            ['Lengua del pueblo', 'Hebreo y arameo', 'Arameo; griego en el comercio y las ciudades; hebreo en la Escritura'],
            ['Moneda', 'Dáricos persas y pequeñas monedas de Yehud', 'Denarios romanos, dracmas, siclos de Tiro y pequeñas monedas judías'],
            ['Ciudades griegas cerca', 'Ninguna', 'La Decápolis, Cesarea, Séforis y Tiberíades']
          ]
        })
      ],
      texto: [
        'Nehemías fue gobernador de la provincia de Judá por nombramiento del rey persa (Neh 5:14). Cuando nace Jesús, «en días del rey Herodes» (Mt 2:1), el que manda es «Augusto César» (Lc 2:1), y el rey de los judíos es un idumeo puesto por Roma. Entre un momento y otro, Judea pasó por cinco poderes distintos: los persas, Alejandro y sus sucesores egipcios, los reyes griegos de Siria, una dinastía judía independiente y, finalmente, Roma. El mapa paso a paso muestra el recorrido.',
        { h: 'Una tierra en el cruce de los imperios' },
        'La tierra de Israel está en el puente entre Egipto y Mesopotamia. Por eso, cuando el imperio de Alejandro se dividió, Judea quedó en medio de la frontera entre los dos reinos más fuertes de sus sucesores, los Ptolomeos de Egipto y los seléucidas de Siria, que pelearon cinco guerras por ella. Daniel había visto esas guerras siglos antes como las luchas entre el rey del sur y el rey del norte (Dn 11).',
        { h: 'Una nueva lengua' },
        'El cambio más profundo fue cultural. Después de Alejandro, el griego se convirtió en la lengua común del oriente: la hablaban los comerciantes, los soldados, los funcionarios y los judíos que vivían fuera de su tierra. En Judea el pueblo siguió hablando arameo, la lengua que se había impuesto desde el exilio; el hebreo quedó sobre todo para la Escritura, la oración y los estudiosos. Por eso, cuando Pilato puso el título sobre la cruz de Jesús, lo escribió «en hebreo, en griego y en latín» (Jn 19:20): las tres lenguas de la Judea del siglo I.',
        { h: 'Un nuevo mapa de ciudades' },
        'También cambió el paisaje. Alrededor de Judea se fundaron o refundaron ciudades al estilo griego, con teatros, gimnasios y templos a los dioses: las diez ciudades de la Decápolis, Ptolemaida (la antigua Aco), Samaria convertida en Sebaste, y Cesarea, construida por Herodes junto al mar. Jesús caminó por una tierra donde el mundo judío y el mundo griego vivían a pocos kilómetros de distancia.'
      ],
      pensar: 'Judea cambió de dueño cinco veces, pero las promesas de Dios a su pueblo no cambiaron. ¿Qué te da estabilidad cuando las circunstancias a tu alrededor cambian una y otra vez?'
    },
    {
      id: 'fe-esperanza', n: 'De Malaquías a Mateo: la fe, el templo y la esperanza', ref: 'Malaquías 1:6-8; Malaquías 3:1; Lucas 4:16; Hechos 23:6-8; Lucas 3:15', fecha: [-430, -5],
      visual: [
        img('../imperio-griego/img/grecia-sinagoga.webp', 'Una sinagoga del siglo I con hombres judíos sentados en bancos de piedra escuchando la lectura de un rollo', 'La sinagoga, desconocida en el Antiguo Testamento, era el centro de la vida judía en tiempos de Jesús. Recreación.'),
        tabla({
          titulo: 'Lo que cambió en la vida religiosa',
          cab: ['', 'En Malaquías', 'En Mateo'],
          filas: [
            ['Templo', 'El de Zorobabel, modesto, con sacerdotes descuidados (Mal 1:6-8)', 'El de Herodes, ampliado y espléndido (Jn 2:20)'],
            ['Lectura de la ley', 'Esdras la lee al pueblo reunido (Neh 8)', 'Se lee cada sábado en las sinagogas de cada ciudad (Hch 15:21)'],
            ['Maestros', 'Sacerdotes y levitas', 'Escribas y fariseos, llamados «rabí»'],
            ['Grupos religiosos', 'No se mencionan', 'Fariseos, saduceos, esenios, herodianos'],
            ['Idolatría', 'Ya no es el gran pecado de Israel', 'Rechazada con firmeza, incluso hasta la muerte'],
            ['Resurrección y ángeles', 'Pocas menciones', 'Creencia común, negada por los saduceos (Hch 23:8)'],
            ['Esperanza', 'El mensajero y el Señor que vendrá a su templo (Mal 3:1)', 'El pueblo en expectativa del Cristo (Lc 3:15)']
          ]
        })
      ],
      texto: [
        'En el libro de Malaquías, el templo reconstruido después del exilio es pobre, los sacerdotes ofrecen animales ciegos y cojos (Mal 1:8) y el pueblo se pregunta si vale la pena servir a Dios. Cuatro siglos después, el templo de Herodes es uno de los edificios más admirados del imperio, y la vida religiosa de Judea es mucho más intensa y más compleja.',
        { h: 'La ley en el centro' },
        'Después del exilio, Israel nunca volvió a la idolatría que habían denunciado los profetas. La ley de Moisés pasó a ocupar el centro de la vida del pueblo. Surgieron los escribas, maestros que la copiaban y explicaban, y las sinagogas, lugares de reunión donde se leía y se enseñaba cada sábado. Jesús «entró en la sinagoga, conforme a su costumbre» (Lc 4:16), una costumbre que el Antiguo Testamento no conoce.',
        { h: 'Nuevos grupos' },
        'En estos siglos nacieron los grupos que encontramos en los evangelios. Los fariseos, que buscaban vivir toda la ley en la vida diaria; los saduceos, la aristocracia sacerdotal del templo; los esenios, que se apartaron a vivir en comunidades propias. Sus diferencias venían de cómo respondió cada uno a la crisis del helenismo y a la dinastía asmonea, como se verá en las rutas IV, V y VII.',
        { h: 'Nuevas preguntas y una gran esperanza' },
        'La persecución de Antíoco IV, en la que muchos murieron por ser fieles, hizo urgente una pregunta: ¿qué pasa con los justos que mueren? La fe en la resurrección, anunciada en Daniel 12:2, se volvió una convicción extendida, que los fariseos defendían y los saduceos negaban (Hch 23:8). Y la experiencia de tantos reyes extranjeros, y luego de reyes judíos infieles, avivó la esperanza en un Mesías, hijo de David. Por eso, cuando apareció Juan el Bautista, «el pueblo estaba en expectativa, preguntándose todos en sus corazones si acaso Juan sería el Cristo» (Lc 3:15).',
        { ejercicio: {
          pregunta: '¿Cuál de estos elementos de los evangelios NO aparece en el Antiguo Testamento y nació en el período entre los testamentos?',
          opciones: [
            { t: 'El templo de Jerusalén.', ok: false, por_que: 'El templo existe desde Salomón; el segundo templo se reconstruyó en tiempos de Esdras y fue ampliado por Herodes.' },
            { t: 'La sinagoga y los grupos de fariseos y saduceos.', ok: true, por_que: 'Ninguno se menciona en el Antiguo Testamento; se desarrollaron entre Malaquías y Mateo.' },
            { t: 'La fiesta de la Pascua.', ok: false, por_que: 'La Pascua se instituyó en Egipto (Éx 12).' }
          ],
          explicacion: 'Muchas realidades de los evangelios se entienden mejor conociendo estos siglos.'
        } }
      ],
      pensar: 'En tiempos de Malaquías la gente servía a Dios con desgano; en tiempos de Jesús, muchos eran muy religiosos pero no lo reconocieron. ¿Qué te enseña eso sobre la diferencia entre religiosidad y fe verdadera?'
    },
    {
      id: 'fuentes', n: 'Cómo conocemos estos siglos', ref: 'Lucas 1:1-4; Romanos 3:2',
      visual: [
        img('../de-la-biblia-a-nosotros/img/pastor-qumran.webp', 'Un joven pastor beduino se asoma a la entrada de una cueva en un acantilado del desierto de Judea y descubre en la penumbra unas tinajas de barro', 'El hallazgo de los rollos de Qumrán, en 1947, cambió lo que sabemos de este período. Recreación.'),
        tabla({
          titulo: 'Las fuentes principales',
          cab: ['Fuente', 'Qué es', 'Qué aporta'],
          filas: [
            ['Daniel', 'Libro profético de la Escritura (siglo VI a.C.)', 'Anuncia de antemano los imperios y las guerras del período (Dn 8 y 11)'],
            ['1 Macabeos', 'Historia escrita en hebreo hacia el 100 a.C.', 'La rebelión y los asmoneos, de 175 a 134 a.C.; sobria y con fechas'],
            ['2 Macabeos', 'Resumen griego de una obra de Jasón de Cirene', 'La crisis de 175–161 a.C., los sumos sacerdotes y los mártires'],
            ['Flavio Josefo', 'Historiador judío (37–c. 100 d.C.): Antigüedades judías y La guerra de los judíos', 'Todo el período, con detalle desde los asmoneos y Herodes'],
            ['Papiros de Elefantina', 'Cartas en arameo de una colonia judía en Egipto (siglo V a.C.)', 'El final del período persa'],
            ['Rollos del mar Muerto', 'Unos novecientos manuscritos hallados en Qumrán (1947–1956)', 'La Biblia de la época y la vida de un grupo judío del siglo I a.C.'],
            ['Polibio y otros historiadores griegos', 'Historias del mundo helenístico', 'Las guerras entre Ptolomeos y seléucidas'],
            ['Arqueología', 'Monedas, inscripciones, fortalezas, palacios', 'Confirma y completa lo que dicen los textos']
          ],
          nota: 'Los Macabeos y Josefo se usan como historia, no como Escritura. Este recurso los resume con palabras propias.'
        })
      ],
      texto: [
        'Para los siglos que cubre el Antiguo Testamento, la fuente principal es la misma Biblia. Para el período entre los testamentos no hay un libro inspirado que cuente la historia, con una excepción notable: Daniel, que la anunció de antemano. Lo que sabemos viene de historiadores antiguos, de documentos hallados por los arqueólogos y de los libros judíos de la época.',
        { h: 'Los libros de los Macabeos' },
        'El primer libro de los Macabeos, escrito en hebreo hacia el 100 a.C. y conservado en griego, es la fuente principal sobre la rebelión contra Antíoco IV y sobre los primeros gobernantes asmoneos. Es un relato sobrio, con fechas y nombres, que la mayoría de los historiadores considera confiable en lo esencial. El segundo libro cuenta la crisis desde otro ángulo, con más interés en el templo y en los mártires. Las Biblias católicas y ortodoxas los incluyen como Escritura; las evangélicas no, pero los valoran como historia.',
        ir('Ver en Los libros apócrifos: 1 y 2 Macabeos', R.apocrifos + '#historicos/1'),
        { h: 'Flavio Josefo' },
        'José hijo de Matías, conocido como Flavio Josefo, fue un sacerdote judío que participó en la guerra contra Roma en el año 66, se rindió y terminó viviendo en Roma. Escribió dos grandes obras: La guerra de los judíos y las Antigüedades judías, que cuentan la historia de Israel desde la creación hasta su propio tiempo. Para los asmoneos y Herodes es la fuente más completa que existe. Josefo es valioso, pero escribe para lectores romanos y a veces exagera o embellece; sus datos se comparan con otras fuentes.',
        { h: 'Los hallazgos' },
        'El siglo XX trajo documentos nuevos: los papiros de Elefantina, en Egipto, con cartas de una colonia judía del período persa; los rollos del mar Muerto, con las copias más antiguas de la Biblia hebrea y los escritos de un grupo judío del siglo I a.C.; y miles de monedas, inscripciones y restos de las construcciones de los asmoneos y de Herodes.',
        'Lucas investigó «con diligencia todas las cosas desde su origen» antes de escribir su evangelio (Lc 1:3). Estudiar estas fuentes con cuidado es seguir su ejemplo: conocer bien el mundo en que Dios cumplió sus promesas.'
      ],
      pensar: 'Lucas quiso que Teófilo conociera «bien la verdad» de lo que había aprendido (Lc 1:4). ¿Te tomas el tiempo de conocer el trasfondo de lo que lees en la Biblia?'
    },
    {
      id: 'daniel-mapa', n: 'Daniel, el mapa profético de estos siglos', ref: 'Daniel 2:36-44; Daniel 8:20-25; Daniel 11:2-4; Daniel 11:31-32', fecha: [-539, -164],
      visual: [
        img('../imperios-historia/img/integrador-cuatro-bestias.webp', 'Cuatro bestias simbólicas suben de un mar agitado por el viento: un león con alas de águila, un oso, un leopardo de cuatro alas y una bestia terrible con dientes de hierro', 'Las cuatro bestias de Daniel 7: Babilonia, Medo-Persia, Grecia y Roma. Recreación.'),
        cita('Daniel 8:21-22', 'El macho cabrío es el rey de Grecia, y el cuerno grande que tenía entre sus ojos es el rey primero. Y en cuanto al cuerno que fue quebrado, y sucedieron cuatro en su lugar, significa que cuatro reinos se levantarán de esa nación, aunque no con la fuerza de él.'),
        tabla({
          titulo: 'Lo que Daniel anunció sobre este período',
          cab: ['Profecía', 'Qué anuncia', 'Cumplimiento'],
          filas: [
            ['Daniel 8:5-8, 21', 'Un macho cabrío con un cuerno grande que vence al carnero', 'Alejandro Magno vence a Persia (334–331 a.C.)'],
            ['Daniel 8:8, 22; 11:4', 'El cuerno se quiebra y salen cuatro', 'El imperio se divide entre sus generales (301 a.C.)'],
            ['Daniel 11:5-20', 'Las guerras entre el rey del sur y el rey del norte', 'Ptolomeos y seléucidas luchan por Judea (274–187 a.C.)'],
            ['Daniel 11:21-35; 8:9-14, 23-25', 'Un rey despreciable que profana el santuario', 'Antíoco IV Epífanes (175–164 a.C.)'],
            ['Daniel 11:32-35', 'El pueblo que conoce a su Dios se esfuerza; algunos caen', 'La resistencia de los fieles y los macabeos'],
            ['Daniel 2:40; 7:7', 'Un cuarto reino fuerte como el hierro', 'Roma, que domina Judea desde el 63 a.C.']
          ]
        })
      ],
      texto: [
        'El libro de Daniel es la única parte de la Escritura que habla en detalle de estos siglos, y lo hace antes de que ocurrieran. En el siglo VI a.C., en Babilonia, Daniel recibió visiones de los imperios que vendrían: Medo-Persia, Grecia y un cuarto reino terrible, que la mayoría de los intérpretes identifica con Roma. El capítulo 11 describe con tanto detalle las guerras entre los sucesores de Alejandro que se lo puede seguir año por año.',
        { h: 'Un mapa que se cumplió' },
        'El ángel le explicó a Daniel la visión del carnero y el macho cabrío: «El macho cabrío es el rey de Grecia, y el cuerno grande que tenía entre sus ojos es el rey primero» (Dn 8:21). Y añadió que, quebrado ese cuerno, se levantarían cuatro reinos de su nación, «aunque no con la fuerza de él» (Dn 8:22). Eso fue exactamente lo que pasó con Alejandro y sus generales.',
        'Las rutas de este recurso muestran, en los lugares correspondientes, cómo la historia cumplió lo anunciado: la conquista de Alejandro (III.1), las guerras de los Ptolomeos y los seléucidas (IV.1), Antíoco IV y la profanación del templo (IV.3 y IV.4), y la resistencia del pueblo fiel (IV.5 y ruta V).',
        { h: 'Para un pueblo que iba a sufrir' },
        'Las profecías de Daniel no fueron escritas para satisfacer la curiosidad, sino para sostener la fe de un pueblo que iba a pasar por la prueba más dura de su historia. Cuando Antíoco IV prohibió la ley y profanó el templo, los judíos fieles pudieron leer en Daniel que Dios lo había visto venir, que la persecución tenía un límite y que «el pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32).',
        'Este recurso no repite el estudio de esas profecías, que se hace en el estudio de libro de Daniel y en El imperio griego. Aquí se cuenta la historia que las cumplió.',
        ir('Estudiar Daniel 11 en el estudio de Daniel', R.daniel),
        ir('Ver en El imperio griego: Daniel 11:5-35 y la historia', R.griego)
      ],
      pensar: 'Dios anunció a Daniel lo que su pueblo viviría siglos después. ¿Qué confianza te da saber que ninguna crisis de la historia, ni de tu vida, toma a Dios por sorpresa?'
    },
    {
      id: 'periodos', n: 'Los cinco períodos en una línea', ref: 'Daniel 2:21; Hechos 17:26', fecha: [-430, -4],
      visual: [
        esq('esquema-periodos.svg', 'Línea de tiempo de 430 a 4 a.C. dividida en cinco franjas de color: período persa hasta 332, Alejandro y los Ptolomeos hasta 198, los seléucidas hasta 142, los asmoneos hasta 63 y Roma con Herodes hasta 4 a.C., con los hechos principales marcados', 'Los cinco períodos entre Malaquías y Mateo.'),
        tabla({
          titulo: 'Los cinco períodos',
          cab: ['Período', 'Años', 'Quién gobierna Judea', 'Hecho clave'],
          filas: [
            ['Persa', '430–332 a.C.', 'Gobernadores persas y el sumo sacerdote', 'La ley en el centro de la vida del pueblo'],
            ['Alejandro y los Ptolomeos', '332–198 a.C.', 'Los reyes griegos de Egipto', 'El helenismo y la Septuaginta'],
            ['Seléucida', '198–142 a.C.', 'Los reyes griegos de Siria', 'Antíoco IV y la rebelión de los macabeos (167–164 a.C.)'],
            ['Asmoneo', '142–63 a.C.', 'Sacerdotes y reyes judíos de la familia de Matatías', 'Independencia y expansión; nacen fariseos y saduceos'],
            ['Romano', '63–4 a.C.', 'Roma; Herodes desde el 37 a.C.', 'El templo de Herodes y el nacimiento de Jesús']
          ]
        }),
        cita('Daniel 2:20-21', 'Y Daniel habló y dijo: Sea bendito el nombre de Dios de siglos en siglos, porque suyos son el poder y la sabiduría. El muda los tiempos y las edades; quita reyes, y pone reyes; da la sabiduría a los sabios, y la ciencia a los entendidos.')
      ],
      texto: [
        'Los cuatrocientos años entre los testamentos se dividen en cinco períodos, según quién gobernaba Judea. Es un esquema sencillo para no perderse entre tantos reyes y fechas. La línea de tiempo de abajo acompaña cada ruta del recurso.',
        { h: '1. El período persa (430–332 a.C.)' },
        'Judea, llamada Yehud, es una provincia pequeña del imperio persa. El sumo sacerdote es la autoridad principal del pueblo, y la ley de Moisés, leída por Esdras, ordena la vida de la comunidad. Es el período más tranquilo y del que menos se sabe.',
        { h: '2. Alejandro y los Ptolomeos (332–198 a.C.)' },
        'Alejandro Magno conquista el imperio persa en pocos años. A su muerte, Judea queda en manos de los Ptolomeos, los reyes griegos de Egipto. Es el tiempo de la expansión del helenismo y de la traducción de la Biblia al griego en Alejandría.',
        { h: '3. Los seléucidas (198–142 a.C.)' },
        'Antíoco III, rey seléucida de Siria, se queda con Judea. Bajo su hijo Antíoco IV llega la peor crisis: la helenización forzada, la prohibición de la ley y la profanación del templo. La rebelión de los macabeos recupera el templo en el 164 a.C.',
        { h: '4. Los asmoneos (142–63 a.C.)' },
        'Por primera vez desde el exilio, Judea es independiente, gobernada por los descendientes de Matatías, que se hacen sumos sacerdotes y reyes. Su reino crece hasta parecerse al de David, pero termina dividido por la ambición y la guerra civil.',
        { h: '5. Roma y Herodes (63–4 a.C.)' },
        'Pompeyo entra en Jerusalén y Judea pasa a depender de Roma. Herodes, un idumeo, es nombrado rey por el Senado romano y gobierna con mano de hierro hasta su muerte, poco después del nacimiento de Jesús.',
        'Daniel lo había dicho en su oración: Dios «muda los tiempos y las edades; quita reyes, y pone reyes» (Dn 2:21).'
      ],
      pensar: 'Daniel alabó a Dios porque «quita reyes, y pone reyes». ¿Cómo cambia tu manera de mirar las noticias saber que Dios sigue gobernando la historia?'
    }
  ];

  window.__ET.panorama = panorama;
})();
/* Entre los Testamentos · rutas II. El final del período persa y III. Alejandro y los Ptolomeos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  // ================== RUTA II. El final del período persa ==================
  const persa = [
    {
      id: 'yehud', n: 'Yehud, una provincia gobernada por sacerdotes', ref: 'Nehemías 12:10-11; Nehemías 12:22; Nehemías 5:14-15; Hageo 1:1', fecha: [-430, -332],
      visual: [
        mapa({ view: V.judea, capas: ['h-yehud'], lugares: ['jerusalen', 'mizpa', 'jerico', 'belen', 'gezer'] }),
        cita('Nehemías 12:10-11', 'Jesúa engendró a Joiacim, y Joiacim engendró a Eliasib, y Eliasib engendró a Joiada; Joiada engendró a Jonatán, y Jonatán engendró a Jadúa.'),
        tabla({
          titulo: 'Los sumos sacerdotes después del exilio',
          cab: ['Sumo sacerdote', 'Época aproximada', 'Dónde aparece'],
          filas: [
            ['Jesúa (Josué)', '538–510 a.C.', 'Esdras 3:2; Hageo 1:1; Zacarías 3'],
            ['Joiacim', 'c. 500 a.C.', 'Nehemías 12:10, 12'],
            ['Eliasib', 'c. 445 a.C.', 'Nehemías 3:1; 13:4, 28'],
            ['Joiada', 'c. 430 a.C.', 'Nehemías 12:10; 13:28'],
            ['Jonatán o Johanán', 'c. 410 a.C.', 'Nehemías 12:11, 22; papiros de Elefantina (407 a.C.)'],
            ['Jadúa', 'c. 332 a.C.', 'Nehemías 12:11, 22; Josefo lo pone ante Alejandro']
          ],
          nota: 'Nehemías 12 lleva la lista de los sumos sacerdotes hasta Jadúa, en el final del período persa.'
        })
      ],
      texto: [
        'Después de Nehemías, la provincia persa de Judá, llamada en arameo Yehud, siguió existiendo durante un siglo más, hasta la llegada de Alejandro Magno en el 332 a.C. Era un territorio muy pequeño: de Mizpa y Bet-el, al norte, hasta Bet-sur, al sur, apenas unos cuarenta kilómetros, con Jerusalén en el centro. Sus habitantes no eran muchos más que los de una ciudad mediana de hoy.',
        { h: 'Un gobernador y un sumo sacerdote' },
        'Yehud tenía un gobernador nombrado por el rey persa, como lo había sido Nehemías (Neh 5:14). Se conocen algunos por los papiros y las monedas, como Bagohi, gobernador hacia el 407 a.C., y Yehezquías, cuyo nombre aparece en pequeñas monedas de plata del siglo IV. Pero la autoridad que más pesaba en la vida del pueblo era el sumo sacerdote. Él presidía el templo, representaba a la comunidad ante los persas y era el guardián de la ley.',
        'Nehemías conserva la lista de los sumos sacerdotes desde el regreso del exilio: «Jesúa engendró a Joiacim, y Joiacim engendró a Eliasib, y Eliasib engendró a Joiada; Joiada engendró a Jonatán, y Jonatán engendró a Jadúa» (Neh 12:10-11). Esa lista llega hasta Jadúa, que según Josefo era sumo sacerdote cuando llegó Alejandro. Es el último dato histórico del Antiguo Testamento.',
        { h: 'Una provincia que acuñaba monedas' },
        'Los arqueólogos han encontrado decenas de pequeñas monedas de plata con la inscripción YHD, «Yehud», en letras hebreas antiguas. Algunas copian el búho de las monedas de Atenas, que circulaban por todo el oriente. Son la prueba de que la provincia tenía cierta autonomía y de que la cultura griega ya llegaba a Judea antes de Alejandro, por el comercio.',
        { h: 'Un tiempo de espera' },
        'Del siglo IV a.C. la Biblia no cuenta nada y las demás fuentes dicen muy poco. Fue un tiempo tranquilo, sin grandes acontecimientos, en que la pequeña comunidad de Jerusalén vivía alrededor del templo reconstruido y de la ley. Hageo y Zacarías habían prometido que la gloria de esa casa sería mayor que la de la primera (Hag 2:9). Esa promesa seguía esperando su cumplimiento.'
      ],
      pensar: 'Yehud era una provincia pequeña y sin poder, pero en ella Dios preservó la línea de la promesa. ¿Desprecias los comienzos pequeños, o confías en que Dios obra también en ellos (Zac 4:10)?'
    },
    {
      id: 'elefantina', n: 'Los papiros de Elefantina', ref: 'Jeremías 44:1; Nehemías 2:10; Nehemías 12:22; Deuteronomio 12:5-6', fecha: [-419, -407],
      visual: [
        img('elefantina-carta.webp', 'En una casa de adobe de la isla de Elefantina, junto al Nilo, un escriba judío de unos cincuenta años, sentado en el suelo con las piernas cruzadas, escribe en arameo sobre una hoja de papiro con un cálamo; a su lado, un sacerdote judío de barba gris dicta, y por la puerta abierta se ven palmeras, el río y barcas de vela', 'Los judíos de Elefantina escriben al gobernador de Judá pidiendo ayuda para reconstruir su templo (407 a.C.). Recreación.'),
        mapa({ view: V.egipto, capas: ['persia-336'], lugares: ['elefantina', 'menfis', 'jerusalen', 'samaria'] }),
        foto('elefantina-papiro.webp', 'Papiro escrito en arameo con diecisiete líneas de tinta negra, de la colonia judía de Elefantina', 'La petición al gobernador Bagohi para reconstruir el templo de Elefantina (407 a.C.).', 'Dominio público · reproducción de Sachau (1907), vía Wikimedia Commons', 'Foto del papiro'),
        tabla({
          titulo: 'Personas de la Biblia nombradas en los papiros',
          cab: ['Persona', 'En la Biblia', 'En los papiros'],
          filas: [
            ['Sanbalat', 'Gobernador de Samaria, enemigo de Nehemías (Neh 2:10)', 'Sus hijos Delaías y Selemías gobiernan Samaria en el 407 a.C.'],
            ['Johanán', 'Sumo sacerdote, hijo de Eliasib (Neh 12:22-23)', 'Sumo sacerdote en Jerusalén; no respondió una carta anterior']
          ]
        })
      ],
      texto: [
        'Elefantina es una isla del río Nilo, en el extremo sur de Egipto, frente a la actual Asuán. Allí había, en el siglo V a.C., una guarnición de soldados judíos al servicio de los persas, con sus familias. A comienzos del siglo XX se encontraron en la isla cientos de papiros en arameo con sus contratos, cartas y listas. Son la mejor ventana que tenemos a la vida judía en los años de Esdras, Nehemías y Malaquías.',
        { h: 'Un templo fuera de Jerusalén' },
        'Los judíos de Elefantina tenían un templo propio dedicado a Yahu, como escribían el nombre de Dios, con altar para sacrificios. Decían que existía desde antes de que los persas conquistaran Egipto, en el 525 a.C. En el 410 a.C., aprovechando la ausencia del gobernador persa, los sacerdotes del dios egipcio Jnum lo destruyeron.',
        'Tres años después, los jefes de la colonia escribieron a Bagohi, el gobernador persa de Judá. Le recordaban que ya habían escrito al sumo sacerdote Johanán y a los nobles de Jerusalén, sin recibir respuesta, y le pedían permiso para reconstruir el templo. Enviaron la misma petición a Delaías y Selemías, hijos de Sanbalat, gobernador de Samaria, el mismo Sanbalat que se había opuesto a Nehemías (Neh 2:10). La respuesta autorizó a reconstruir el altar para ofrendas de cereal e incienso, pero no mencionó los sacrificios de animales.',
        { h: 'Lo que muestran' },
        'Los papiros confirman nombres y personas del libro de Nehemías, y muestran que la comunicación entre Jerusalén, Samaria y Egipto era fluida. Uno de ellos, del 419 a.C., da instrucciones para celebrar la fiesta de los panes sin levadura. Pero también revelan una fe mezclada: algunos documentos nombran a otras divinidades junto a Yahu. Un siglo y medio antes, Jeremías había reprendido a los judíos que vivían en Egipto, «en Migdol, en Tafnes, en Menfis y en tierra de Patros» (Jer 44:1), por adorar a la reina del cielo.',
        'El silencio del sumo sacerdote Johanán probablemente no fue casual. La ley mandaba ofrecer los sacrificios solo en el lugar que Dios escogiera (Dt 12:5-6). Mientras en Jerusalén la ley pasaba al centro de la vida del pueblo, en la lejana Elefantina la fe se había mezclado con las costumbres de los vecinos.'
      ],
      pensar: 'Los judíos de Elefantina conservaron el nombre de Dios, pero lo mezclaron con otros dioses. ¿Qué influencias de tu entorno pueden ir mezclándose, sin que lo notes, con tu fe en el único Dios?'
    },
    {
      id: 'samaritanos', n: 'Los samaritanos y el templo del monte Gerizim', ref: '2 Reyes 17:24-41; Esdras 4:1-5; Nehemías 13:28; Juan 4:19-22', fecha: [-450, -111],
      visual: [
        img('../tierra-de-israel/img/pozo-jacob.webp', 'Jesús, de espaldas, sentado junto a un pozo de piedra a mediodía, conversando con una mujer samaritana que sostiene un cántaro; detrás se levanta el monte Gerizim', 'Jesús y la mujer samaritana junto al pozo de Jacob, frente al monte Gerizim (Juan 4). Recreación.'),
        cita('Juan 4:19-22', 'Le dijo la mujer: Señor, me parece que tú eres profeta. Nuestros padres adoraron en este monte, y vosotros decís que en Jerusalén es el lugar donde se debe adorar. Jesús le dijo: Mujer, créeme, que la hora viene cuando ni en este monte ni en Jerusalén adoraréis al Padre. Vosotros adoráis lo que no sabéis; nosotros adoramos lo que sabemos; porque la salvación viene de los judíos.'),
        mapa({ view: V.judea, lugares: ['monte-gerizim', 'samaria', 'sicar', 'jerusalen'] }),
        foto('pascua-samaritana.webp', 'Un samaritano vestido de blanco, con gorro rojo y blanco, sentado sobre unas piedras afila el cuchillo para el sacrificio de la Pascua', 'Un samaritano prepara el cuchillo para el sacrificio de la Pascua en el monte Gerizim (2011). La comunidad samaritana celebra allí la Pascua hasta hoy.', 'CC BY 2.0 · Flavio~, vía Wikimedia Commons', 'Foto 2011')
      ],
      texto: [
        'Cuando la mujer de Sicar le dijo a Jesús: «Nuestros padres adoraron en este monte, y vosotros decís que en Jerusalén es el lugar donde se debe adorar» (Jn 4:20), se refería al monte Gerizim, que se levantaba frente al pozo de Jacob. La división entre judíos y samaritanos, tan visible en los evangelios, se consolidó en el período entre los testamentos.',
        { h: 'El origen de la división' },
        'Después de que los asirios deportaron a Israel en el 722 a.C., trajeron a Samaria gente de otras naciones, que mezcló el culto a Jehová con el de sus dioses (2 R 17:24-41). Cuando los judíos volvieron de Babilonia y reconstruyeron el templo, los habitantes de la región quisieron participar, pero Zorobabel los rechazó, y desde entonces se opusieron a la obra (Esd 4:1-5). Sanbalat, gobernador de Samaria, fue el gran enemigo de Nehemías.',
        'Nehemías cuenta que uno de los nietos del sumo sacerdote Eliasib se había casado con una hija de Sanbalat, y que él lo expulsó (Neh 13:28). Josefo cuenta una historia parecida, aunque la ubica un siglo después: un hermano del sumo sacerdote Jadúa, casado con la hija de otro Sanbalat, fue expulsado de Jerusalén y se convirtió en el sacerdote del nuevo templo que su suegro construyó en el monte Gerizim.',
        { h: 'Un templo rival' },
        'Las excavaciones en la cumbre del Gerizim descubrieron un gran recinto sagrado, construido probablemente a mediados del siglo V a.C. y ampliado en tiempos griegos. Los samaritanos tenían su propia versión del Pentateuco, que solo reconocía los cinco libros de Moisés, y en ella el monte escogido por Dios era el Gerizim. El templo funcionó hasta que el rey asmoneo Juan Hircano lo destruyó, hacia el año 111 a.C. (ruta V). Esa destrucción dejó una herida que explica el odio que encontramos en los evangelios: «judíos y samaritanos no se tratan entre sí» (Jn 4:9).',
        { h: 'La respuesta de Jesús' },
        'Jesús no esquivó la pregunta. Afirmó que «la salvación viene de los judíos» (Jn 4:22), porque las promesas fueron dadas a Israel, pero anunció que llegaba la hora en que los verdaderos adoradores adorarían al Padre en espíritu y en verdad, ni en el Gerizim ni en Jerusalén. Y luego fue a Sicar y muchos samaritanos creyeron en él (Jn 4:39-42). Hasta hoy, una pequeña comunidad samaritana, de menos de mil personas, celebra la Pascua en la cumbre del Gerizim.'
      ],
      pensar: 'Una enemistad de siglos separaba a judíos y samaritanos, y Jesús la cruzó para dar el evangelio a una mujer. ¿Hay alguna barrera de enemistad o prejuicio que Cristo te está llamando a cruzar?'
    },
    {
      id: 'ley-centro', n: 'Lo que dejó Esdras: la ley en el centro', ref: 'Esdras 7:10; Nehemías 8:1-8; Nehemías 13:15-22; Malaquías 4:4', fecha: [-458, -332],
      visual: [
        img('../exilio/img/exi-esdras-ley.webp', 'En la plaza frente a la puerta de las Aguas de Jerusalén, el escriba Esdras, de pie sobre un púlpito de madera, abre un gran rollo de la ley ante una multitud de hombres, mujeres y niños', 'Esdras lee la ley ante el pueblo (Nehemías 8). Recreación.'),
        cita('Nehemías 8:8', 'Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.'),
        tabla({
          titulo: 'Cambios que comenzaron con Esdras',
          cab: ['Antes del exilio', 'Después del exilio'],
          filas: [
            ['La idolatría era el gran pecado de Israel', 'Israel no vuelve a adorar ídolos'],
            ['Los profetas llaman al pueblo a volver a la ley', 'La ley se lee, se copia y se enseña en público'],
            ['El hebreo es la lengua del pueblo', 'El pueblo habla arameo; la ley se explica en su lengua'],
            ['El templo es el centro del culto', 'El templo sigue siendo el centro, pero la ley llega a cada casa y aldea'],
            ['El día de reposo se descuida', 'Se guarda con cuidado (Neh 13:15-22)']
          ]
        })
      ],
      texto: [
        'Esdras «había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos» (Esd 7:10). Su obra marcó el período que siguió más que la de cualquier rey. El último profeta, Malaquías, cerró su libro con el mismo llamado: «Acordaos de la ley de Moisés mi siervo» (Mal 4:4).',
        { h: 'Un pueblo del libro' },
        'El exilio había enseñado una lección dura. Los profetas habían anunciado que Israel perdería su tierra por adorar a otros dioses, y así había ocurrido. Los que volvieron no repitieron ese pecado. En los siglos siguientes, el pueblo judío se distinguió en todo el mundo antiguo por adorar a un solo Dios, sin imágenes, y por estar dispuesto a morir antes que inclinarse ante un ídolo.',
        'Esa fidelidad se apoyaba en la ley escrita. Cuando Esdras leyó el libro de la ley desde el alba hasta el mediodía, los levitas «leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Muchos ven aquí el comienzo de la costumbre de explicar la Escritura en arameo, la lengua del pueblo, que más tarde dio origen a los targumes, traducciones arameas que se leían en las sinagogas.',
        { h: 'Las bases de lo que vendría' },
        'De este período vienen tres realidades que encontraremos en los evangelios. La primera, los escribas, maestros dedicados a copiar, estudiar y explicar la ley, siguiendo el modelo de Esdras, «escriba diligente en la ley de Moisés» (Esd 7:6). La segunda, la reunión del pueblo para leer y oír la ley, que con el tiempo daría origen a la sinagoga (ruta VII). La tercera, el cuidado minucioso por cumplir cada mandamiento, como el día de reposo, que Nehemías defendió cerrando las puertas de Jerusalén a los comerciantes (Neh 13:15-22).',
        'La tradición judía posterior atribuyó a Esdras y a una «gran asamblea» de sabios la tarea de ordenar las Escrituras. Lo cierto es que, al terminar el período persa, Israel tenía la Ley, los Profetas y los demás Escritos que Jesús nombraría al hablar de lo escrito de él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44).',
        { h: 'Un riesgo' },
        'El amor por la ley era bueno. Pero con el tiempo, a la ley escrita se le fue sumando una larga tradición de explicaciones, que algunos llegaron a poner a su misma altura. Jesús reprendería a los fariseos por eso: «Porque dejando el mandamiento de Dios, os aferráis a la tradición de los hombres» (Mr 7:8).'
      ],
      pensar: 'Los levitas leían la ley «y ponían el sentido» para que el pueblo entendiera. ¿Lees la Biblia buscando entenderla, o solo cumpliendo con leerla?'
    }
  ];

  // ================== RUTA III. Alejandro y los Ptolomeos ==================
  const ptolomeos = [
    {
      id: 'alejandro-jerusalen', n: 'Alejandro Magno y Jerusalén', ref: 'Daniel 8:5-8; Daniel 11:3-4; Zacarías 9:1-8', fecha: [-334, -323],
      visual: [
        img('../imperio-griego/img/grecia-alejandro.webp', 'Alejandro Magno, joven y sin barba, a caballo al frente de su caballería macedonia', 'Alejandro Magno conquistó el imperio persa en apenas tres años. Recreación.'),
        pasos([
          { t: '334 a.C.: Alejandro cruza a Asia y vence en el río Gránico', fecha: -334, estado: { view: V.oriente, capas: ['persia-336'], lugares: ['granico'], trazos: ['alejandro'] } },
          { t: '333–332 a.C.: Issos, el sitio de Tiro (siete meses) y el de Gaza (dos meses)', fecha: -332, estado: { view: V.levante, capas: ['persia-336'], lugares: ['issos', 'tiro', 'gaza', 'jerusalen'] } },
          { t: '331 a.C.: funda Alejandría y vence a Darío III en Gaugamela', fecha: -331, estado: { view: V.oriente, lugares: ['alejandria', 'gaugamela', 'babilonia'], trazos: ['alejandro'] } },
          { t: '323 a.C.: muere en Babilonia, con 32 años, dueño de un imperio de Grecia a la India', fecha: -323, estado: { view: V.oriente, capas: ['alejandro-323'], lugares: ['babilonia', 'jerusalen'] } }
        ]),
        cita('Zacarías 9:8', 'Entonces acamparé alrededor de mi casa como un guarda, para que ninguno vaya ni venga, y no pasará más sobre ellos el opresor; porque ahora miraré con mis ojos.')
      ],
      texto: [
        'Alejandro, hijo de Filipo de Macedonia, llegó al trono en el 336 a.C. con veinte años. Dos años después cruzó a Asia con unos cuarenta mil soldados. En tres grandes batallas, el río Gránico (334), Issos (333) y Gaugamela (331), destruyó el imperio persa. Tiro, la ciudad fenicia en una isla, resistió siete meses; Gaza, dos. Jerusalén se rindió sin pelear.',
        'Daniel lo había visto como un macho cabrío que venía del occidente «sobre la faz de toda la tierra, sin tocar tierra», y que derribaba al carnero de dos cuernos (Dn 8:5-7). Y había visto también su final: el cuerno grande se quebró en su mayor fuerza, y en su lugar salieron cuatro (Dn 8:8). Alejandro murió en Babilonia en el 323 a.C., con 32 años, sin un heredero capaz.',
        { h: 'Alejandro en Jerusalén, según Josefo' },
        'Josefo cuenta una historia famosa. Mientras Alejandro sitiaba Tiro, pidió ayuda a los judíos y el sumo sacerdote Jadúa se negó, por fidelidad a Darío. Después de tomar Gaza, Alejandro subió contra Jerusalén. Jadúa salió a recibirlo vestido con sus ropas sacerdotales, con los sacerdotes de lino y el pueblo de blanco. Alejandro se inclinó ante el nombre de Dios grabado en la mitra del sumo sacerdote, dijo que había visto a ese hombre en un sueño, ofreció sacrificios en el templo y le mostraron el libro de Daniel, donde se anunciaba que un griego destruiría a los persas. Al final, concedió a los judíos vivir según sus leyes.',
        { posturas: {
          titulo: '¿Visitó Alejandro Jerusalén?',
          a: { n: 'Un hecho, quizá adornado', t: 'Josefo se basa en tradiciones judías antiguas. Alejandro solía respetar a los dioses y sacerdotes de los pueblos que conquistaba, y es seguro que confirmó a los judíos el derecho a vivir según su ley, que luego respetaron sus sucesores.' },
          b: { n: 'Una leyenda posterior', t: 'Los historiadores griegos de Alejandro no mencionan la visita, y su ruta de Tiro a Gaza seguía la costa. Muchos estudiosos piensan que el relato se escribió para mostrar que Dios protegió a su templo y que el conquistador reconoció las profecías.' },
          c: 'Lo que la Escritura afirma es que Dios anunció de antemano el ascenso y la caída de Alejandro (Dn 8; 11:3-4). Muchos ven también en Zacarías 9:1-8 un anuncio de su campaña por Siria, Tiro y Gaza, con una promesa para Jerusalén: «acamparé alrededor de mi casa como un guarda» (Zac 9:8).'
        } }
      ],
      pensar: 'El hombre más poderoso de su tiempo murió joven y su imperio se dividió, tal como Daniel lo había anunciado. ¿Qué te dice eso sobre dónde poner tu confianza?'
    },
    {
      id: 'helenismo', n: 'Qué era el helenismo', ref: 'Zacarías 9:13; Hechos 17:18-21; 1 Corintios 1:22-24; Colosenses 2:8', fecha: [-332, -167],
      visual: [
        img('../imperio-griego/img/grecia-agora.webp', 'El ágora de una ciudad griega, con ciudadanos conversando entre columnas, comerciantes y un templo al fondo', 'El ágora, la plaza de la ciudad griega. Recreación.'),
        tabla({
          titulo: 'Lo que trajo el helenismo y cómo lo vivieron los judíos',
          cab: ['Elemento', 'Qué era', 'Lo que significó para los judíos'],
          filas: [
            ['La lengua griega (koiné)', 'Griego común, hablado de Egipto a la India', 'Una lengua para comerciar, leer la Biblia en la diáspora y, más tarde, escribir el Nuevo Testamento'],
            ['La ciudad (polis)', 'Ciudad con ciudadanos, asamblea, templos y edificios públicos', 'Ciudades griegas rodean Judea: la Decápolis, Ptolemaida, Gaza'],
            ['El gimnasio', 'Escuela y club de los jóvenes, donde se ejercitaban desnudos', 'Una tentación para los jóvenes de buena familia (ruta IV)'],
            ['El teatro y los juegos', 'Espectáculos dedicados a los dioses', 'Incompatibles con la ley para los fieles'],
            ['La filosofía', 'Platón, Aristóteles, los estoicos, los epicúreos', 'Algunos judíos la usaron para explicar su fe; otros la rechazaron'],
            ['Los nombres griegos', 'Alejandro, Jasón, Felipe, Andrés', 'Muchos judíos los adoptaron; dos apóstoles los llevan']
          ]
        }),
        cita('Zacarías 9:13', 'Porque he entesado para mí a Judá como arco, e hice a Efraín su flecha, y despertaré a tus hijos, oh Sion, contra tus hijos, oh Grecia, y te pondré como espada de valiente.')
      ],
      texto: [
        'Alejandro no solo conquistó territorios: quiso unir oriente y occidente bajo una misma cultura. Sus soldados se establecieron en decenas de ciudades nuevas, y con ellos llegaron la lengua, las costumbres y los dioses de Grecia. Los historiadores llaman helenismo, de Hélade, el nombre griego de Grecia, a esa cultura mezclada que dominó el oriente durante tres siglos.',
        { h: 'Una cultura atractiva' },
        'El helenismo era seductor. Ofrecía una lengua común que abría puertas en todo el mundo conocido, ciudades con agua corriente, teatros y baños, una educación admirada, filosofía, ciencia y deporte. Para un joven ambicioso de Jerusalén, hablar griego, vestirse a la griega y frecuentar el gimnasio era la forma de progresar. Muchas familias judías empezaron a dar nombres griegos a sus hijos. Siglos después, dos de los doce apóstoles se llamarían Andrés y Felipe.',
        { h: 'Una cultura con dioses' },
        'Pero el helenismo no era neutral. Las ciudades griegas giraban alrededor de sus templos, los juegos se dedicaban a los dioses, el gimnasio exigía ejercitarse desnudo y la filosofía ponía la razón humana por encima de toda revelación. Para un judío fiel, aceptarlo todo significaba abandonar la ley. La pregunta que dividió al pueblo durante estos siglos fue hasta dónde se podía adoptar la cultura griega sin traicionar al Dios de Israel.',
        'Zacarías había anunciado ese enfrentamiento: «despertaré a tus hijos, oh Sion, contra tus hijos, oh Grecia» (Zac 9:13). En el siglo II a.C. la tensión estallaría en la crisis de Antíoco IV y la rebelión de los macabeos (rutas IV y V).',
        { h: 'Lo que Dios usó' },
        'Al mismo tiempo, Dios usó el helenismo para preparar la extensión del evangelio. La lengua griega permitió que el Antiguo Testamento se tradujera y que el Nuevo se escribiera en una lengua que se entendía de Roma a Persia. Pablo pudo predicar en el Areópago de Atenas (Hch 17) y escribir a iglesias de Galacia, Macedonia y Roma en el mismo idioma. Pero también advirtió: «Mirad que nadie os engañe por medio de filosofías y huecas sutilezas» (Col 2:8).',
        ir('Ver en El imperio griego: lo que dejó el mundo griego', R.griego)
      ],
      pensar: 'Los jóvenes de Jerusalén tuvieron que decidir qué tomar y qué rechazar de la cultura griega. ¿Cómo decides tú qué aceptar de la cultura de tu tiempo sin traicionar tu fe?'
    },
    {
      id: 'alejandria', n: 'Alejandría y la diáspora', ref: 'Hechos 2:5-11; Hechos 6:9; Hechos 18:24; Juan 7:35; Santiago 1:1', fecha: [-331, 40],
      visual: [
        pasos([
          { t: 'A la muerte de Alejandro, sus generales se reparten el imperio', fecha: -301, estado: { view: V.oriente, capas: ['ptolomeos-301', 'seleucidas-301', 'lisimaco-301', 'casandro-301'], lugares: ['ipso', 'alejandria', 'antioquia', 'jerusalen'] } },
          { t: 'Hacia 250 a.C.: el reino de los Ptolomeos, con Judea y su capital en Alejandría', fecha: -250, estado: { view: V.levante, capas: ['ptolomeos-250'], lugares: ['alejandria', 'jerusalen', 'gaza', 'tiro'] } },
          { t: 'La diáspora judía en el siglo I: de Babilonia a Roma', fecha: 30, estado: { view: V.mediterraneo, lugares: ['jerusalen', 'alejandria', 'babilonia', 'antioquia', 'roma', 'efeso', 'cirene', 'tarso'] } }
        ]),
        cita('Hechos 2:9-11', 'Partos, medos, elamitas, y los que habitamos en Mesopotamia, en Judea, en Capadocia, en el Ponto y en Asia, en Frigia y Panfilia, en Egipto y en las regiones de Africa más allá de Cirene, y romanos aquí residentes, tanto judíos como prosélitos, cretenses y árabes, les oímos hablar en nuestras lenguas las maravillas de Dios.'),
        tabla({
          titulo: 'Las grandes comunidades de la diáspora',
          cab: ['Región', 'Origen', 'En el Nuevo Testamento'],
          filas: [
            ['Babilonia y Persia', 'Los que no volvieron del exilio', 'Partos, medos y elamitas en Pentecostés (Hch 2:9)'],
            ['Egipto (Alejandría)', 'Soldados, comerciantes y colonos desde el siglo VI a.C.', 'Apolos, «natural de Alejandría» (Hch 18:24)'],
            ['Siria (Antioquía)', 'Colonos de los seléucidas', 'La iglesia de Antioquía (Hch 11:19-26)'],
            ['Asia Menor', 'Familias trasladadas por Antíoco III hacia el 210 a.C.', 'Las sinagogas que visitó Pablo'],
            ['Cirene y Libia', 'Colonos de los Ptolomeos', 'Simón de Cirene (Mr 15:21); la sinagoga de los cireneos (Hch 6:9)'],
            ['Roma', 'Cautivos de Pompeyo (63 a.C.) y comerciantes', 'Los judíos expulsados por Claudio (Hch 18:2)']
          ]
        })
      ],
      texto: [
        'Después de la muerte de Alejandro, sus generales pelearon durante veinte años por su herencia. En el 301 a.C., tras la batalla de Ipso, el imperio quedó repartido en cuatro reinos, como lo había anunciado Daniel (Dn 8:22). Dos de ellos importan para Judea: el de Ptolomeo, en Egipto, y el de Seleuco, en Siria y Mesopotamia. Durante un siglo, hasta el 198 a.C., Judea fue parte del reino de los Ptolomeos.',
        { h: 'Alejandría' },
        'Alejandro fundó Alejandría en el 331 a.C., en la costa de Egipto. Bajo los Ptolomeos se convirtió en la ciudad más grande y culta del mundo griego, con su faro, uno de los siete grandes monumentos del mundo antiguo, su puerto y su biblioteca, que reunía cientos de miles de rollos. Desde el principio hubo allí judíos, y llegaron a ser tantos que, en el siglo I, dos de los cinco barrios de la ciudad eran judíos. Allí vivió Filón, un filósofo judío contemporáneo de Jesús, y de allí era Apolos, «varón elocuente, poderoso en las Escrituras» (Hch 18:24).',
        { h: 'La diáspora' },
        'Diáspora es una palabra griega que significa dispersión. Desde el exilio, la mayoría de los judíos vivía fuera de la tierra de Israel. En el período helenístico la dispersión creció: soldados, comerciantes, esclavos liberados y colonos se establecieron en Egipto, Siria, Asia Menor, Grecia, Cirene y, más tarde, Roma. Santiago dirigió su carta «a las doce tribus que están en la dispersión» (Stg 1:1).',
        'Los judíos de la diáspora hablaban griego, vivían en ciudades paganas y se reunían en sus sinagogas, que en Egipto ya aparecen en inscripciones del siglo III a.C. Guardaban el día de reposo, se negaban a adorar a los dioses de la ciudad y enviaban cada año una ofrenda al templo de Jerusalén, adonde peregrinaban en las fiestas. Por eso, en Pentecostés había en Jerusalén «judíos, varones piadosos, de todas las naciones bajo el cielo» (Hch 2:5).',
        { h: 'Un puente para el evangelio' },
        'Esas comunidades fueron el primer puente del evangelio hacia el mundo. Pablo comenzaba su predicación en cada ciudad en la sinagoga, donde encontraba judíos que conocían las Escrituras y gentiles que temían a Dios. Los mismos líderes de Jerusalén se preguntaron si Jesús iría «a los dispersos entre los griegos» a enseñar a los griegos (Jn 7:35), sin imaginar que eso era precisamente lo que iba a pasar.'
      ],
      pensar: 'Dios usó la dispersión de su pueblo para preparar el camino del evangelio. ¿Puede Dios usar también los cambios de lugar y las mudanzas de tu vida para extender su reino?'
    },
    {
      id: 'septuaginta', n: 'La Septuaginta: la Biblia en griego', ref: 'Hebreos 10:5-7; Salmo 40:6-8; Hechos 8:30-35; Romanos 3:2', fecha: [-260, -130],
      visual: [
        img('../imperio-griego/img/grecia-septuaginta.webp', 'Ancianos judíos traducen las Escrituras hebreas al griego en una sala de Alejandría, con rollos sobre las mesas', 'La traducción de la ley al griego en Alejandría. Recreación.'),
        tabla({
          titulo: 'La Septuaginta en el Nuevo Testamento',
          cab: ['Pasaje del NT', 'Cita', 'Qué muestra'],
          filas: [
            ['Hebreos 10:5', 'Salmo 40:6', '«Me preparaste cuerpo» sigue el griego; el hebreo dice «has abierto mis oídos»'],
            ['Hechos 8:32-33', 'Isaías 53:7-8', 'El etíope lee Isaías en griego'],
            ['Mateo 1:23', 'Isaías 7:14', 'El griego traduce «virgen» (parthénos)'],
            ['Hechos 15:16-17', 'Amós 9:11-12', 'Jacobo cita la forma griega, que habla de «los hombres» que buscan al Señor']
          ],
          nota: 'Los apóstoles citan unas veces la Septuaginta y otras el texto hebreo; el Espíritu Santo los guio en cada caso.'
        })
      ],
      texto: [
        'Los judíos de Alejandría hablaban griego y muchos ya no entendían el hebreo. Necesitaban la Escritura en su lengua. Así nació la primera traducción de la Biblia, la Septuaginta, que se hizo en Alejandría a partir del siglo III a.C.',
        { h: 'La leyenda de los setenta' },
        'Un escrito judío del siglo II a.C., la Carta de Aristeas, cuenta que el rey Ptolomeo II (285–246 a.C.) quiso tener la ley de los judíos en su biblioteca y pidió al sumo sacerdote de Jerusalén traductores. Llegaron setenta y dos ancianos, seis por tribu, que tradujeron la ley en setenta y dos días en la isla de Faros. De ese número viene el nombre Septuaginta, «setenta», que se abrevia con el número romano LXX. La historia tiene rasgos de leyenda, pero es probable que la ley se tradujera en Alejandría en el siglo III a.C., y que los demás libros se tradujeran poco a poco durante el siglo siguiente. Hacia el 132 a.C., el nieto de Ben Sira ya conocía la traducción de la Ley, los Profetas y los demás libros.',
        { h: 'La Biblia de la iglesia primitiva' },
        'La Septuaginta fue la Biblia de los judíos de la diáspora y, después, la de los primeros cristianos de habla griega. Cuando Felipe encontró al funcionario etíope, este iba leyendo Isaías, muy probablemente en griego (Hch 8:30). Muchas citas del Antiguo Testamento en el Nuevo siguen la Septuaginta. Por ejemplo, Hebreos pone en boca de Cristo las palabras «me preparaste cuerpo» (He 10:5), que es la forma griega del Salmo 40:6.',
        'Sin la Septuaginta, la predicación de los apóstoles a los gentiles habría sido mucho más difícil. Cuando Pablo llegaba a una sinagoga de Asia o Grecia, los judíos y los gentiles temerosos de Dios ya conocían las promesas de Dios en su propia lengua.',
        { h: 'Una traducción, no un nuevo canon' },
        'Las copias de la Septuaginta que conocemos, hechas por cristianos siglos después, incluyen además algunos libros escritos en griego o traducidos más tarde, los que hoy se llaman apócrifos. Pero eso no significa que los judíos de Alejandría tuvieran una Biblia distinta. A Israel le fue confiada la palabra de Dios (Ro 3:2), y esa palabra es la que la Septuaginta tradujo.',
        ir('Ver en De la Biblia a nosotros: las versiones antiguas', R.biblia),
        ir('Ver en Los libros apócrifos: cómo llegaron a las Biblias', R.apocrifos + '#que/4')
      ],
      pensar: 'Dios hizo que su palabra se tradujera a la lengua que hablaba el mundo de entonces. ¿Qué haces tú para que la Palabra llegue en un lenguaje que entiendan quienes te rodean?'
    },
    {
      id: 'tobiadas', n: 'Los Tobíadas y el dinero griego en Judea', ref: 'Nehemías 2:10; Nehemías 13:4-9; Mateo 9:9-11; Lucas 16:13', fecha: [-260, -175],
      visual: [
        mapa({ view: V.palestina, capas: ['ptolomeos-250'], lugares: ['iraq-el-emir', 'jerusalen', 'rabat-amon', 'gaza'] }),
        cita('Nehemías 13:4-5', 'Y antes de esto el sacerdote Eliasib, siendo jefe de la cámara de la casa de nuestro Dios, había emparentado con Tobías, y le había hecho una gran cámara, en la cual guardaban antes las ofrendas, el incienso, los utensilios, el diezmo del grano, del vino y del aceite, que estaba mandado dar a los levitas, a los cantores y a los porteros, y la ofrenda de los sacerdotes.'),
        tabla({
          titulo: 'Una familia en tres siglos',
          cab: ['Persona', 'Época', 'Qué se sabe'],
          filas: [
            ['Tobías el amonita', 'c. 445 a.C.', 'Enemigo de Nehemías; tenía un aposento en el templo (Neh 2:10; 13:4-9)'],
            ['Tobías', '259 a.C.', 'Jefe militar en Amón; escribe al ministro de Ptolomeo II (papiros de Zenón)'],
            ['José hijo de Tobías', 'c. 240–200 a.C.', 'Sobrino del sumo sacerdote; cobra los impuestos de toda Siria y Fenicia para los Ptolomeos (Josefo)'],
            ['Hircano el Tobíada', 'c. 200–175 a.C.', 'Construye un palacio fortificado en Araq el-Emir; se suicida bajo Antíoco IV']
          ]
        })
      ],
      texto: [
        'Nehemías tuvo un adversario tenaz llamado Tobías, «el siervo amonita» (Neh 2:10), que estaba emparentado con familias importantes de Jerusalén. Cuando Nehemías viajó a Persia, el sacerdote Eliasib le preparó a Tobías una cámara en los atrios del templo, y Nehemías, al volver, arrojó todos sus muebles fuera (Neh 13:4-8). Dos siglos después, sus descendientes, los Tobíadas, eran una de las familias más ricas e influyentes de Judea.',
        { h: 'Una familia en los papiros' },
        'Los papiros de Zenón, el secretario de un ministro de Ptolomeo II, conservan cartas del año 259 a.C. escritas por un Tobías, jefe de una colonia militar en la región de Amón, al otro lado del Jordán, que enviaba regalos al rey. La familia controlaba esa región desde hacía generaciones.',
        { h: 'José, el cobrador de impuestos' },
        'Josefo cuenta la historia de José, hijo de Tobías y sobrino del sumo sacerdote Onías II. Cuando su tío se negó a pagar el tributo a Egipto, José viajó a Alejandría, se ganó al rey con regalos y su habilidad, y obtuvo el derecho a cobrar los impuestos de toda Siria y Fenicia. Lo hizo durante veintidós años, con mano dura, y se volvió inmensamente rico. Su hijo Hircano construyó un palacio fortificado en Araq el-Emir, en Transjordania, cuyas ruinas, con leones esculpidos y una inscripción con el nombre Tobías, se visitan hasta hoy.',
        { h: 'Una aristocracia helenizada' },
        'Los Tobíadas representan a un sector de la sociedad judía que se enriqueció colaborando con los reyes griegos y que adoptó su estilo de vida. Para ellos, la ley de Moisés era importante, pero no debía impedir los negocios ni el progreso. Cuando Judea pasó a los seléucidas, sus divisiones con otras familias sacerdotales abrieron la puerta a la crisis del sumo sacerdocio que se estudia en la ruta IV.',
        'El sistema de arrendar los impuestos a quien ofreciera más, que los Ptolomeos aplicaron en Judea, se mantuvo con los romanos. De allí vienen los publicanos de los evangelios, como Mateo y Zaqueo, despreciados por su pueblo porque cobraban para un poder extranjero y solían enriquecerse con ello. Jesús llamó a uno de ellos a seguirlo y comió en su casa (Mt 9:9-11).',
        { ejercicio: {
          pregunta: '¿Qué relación hay entre los Tobíadas y los publicanos de los evangelios?',
          opciones: [
            { t: 'Ninguna: los publicanos aparecen recién con los romanos.', ok: false, por_que: 'El sistema de arrendar los impuestos a particulares ya lo usaban los Ptolomeos, y José el Tobíada fue uno de esos arrendatarios.' },
            { t: 'Ambos cobraban impuestos para un poder extranjero y se enriquecían con ello.', ok: true, por_que: 'José el Tobíada cobraba para Egipto; los publicanos, para Roma. Por eso el pueblo los veía como colaboradores.' },
            { t: 'Los publicanos eran descendientes directos de los Tobíadas.', ok: false, por_que: 'No hay relación de familia; lo que se mantuvo fue el sistema de cobro.' }
          ],
          explicacion: 'Las costumbres de los evangelios tienen raíces en estos siglos.'
        } }
      ],
      pensar: 'Los Tobíadas prosperaron, pero su amor por la riqueza los alejó de la fidelidad a Dios. Jesús dijo: «No podéis servir a Dios y a las riquezas» (Lc 16:13). ¿Qué lugar ocupa el dinero en tus decisiones?'
    }
  ];

  window.__ET.persa = persa;
  window.__ET.ptolomeos = ptolomeos;
})();
/* Entre los Testamentos · ruta IV. Los seléucidas y la crisis (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const crisis = [
    {
      id: 'panion', n: 'La batalla de Panión: Judea cambia de dueño', ref: 'Daniel 11:10-20', fecha: [-217, -175],
      visual: [
        pasos([
          { t: '217 a.C.: en Rafia, Ptolomeo IV detiene a Antíoco III', fecha: -217, estado: { view: V.levante, capas: ['ptolomeos-250', 'seleucidas-200'], lugares: ['rafia', 'jerusalen', 'antioquia', 'alejandria'] } },
          { t: '200 a.C.: Antíoco III vence en Panión, junto a las fuentes del Jordán', fecha: -200, estado: { view: V.palestina, lugares: ['panion', 'jerusalen', 'gaza', 'sidon'] } },
          { t: '198 a.C.: Judea es seléucida; Jerusalén recibe bien al nuevo rey', fecha: -198, estado: { view: V.levante, capas: ['seleucidas-200'], lugares: ['jerusalen', 'antioquia'] } },
          { t: '190 a.C.: Roma derrota a Antíoco III en Magnesia y le impone una deuda enorme', fecha: -190, estado: { view: V.mediterraneo, capas: ['seleucidas-200', 'roma-133'], lugares: ['magnesia', 'roma', 'antioquia', 'jerusalen'] } }
        ]),
        cita('Daniel 11:16', 'Y el que vendrá contra él hará su voluntad, y no habrá quien se le pueda enfrentar; y estará en la tierra gloriosa, la cual será consumida en su poder.'),
        tabla({
          titulo: 'Daniel 11:10-20 y la historia',
          cab: ['Daniel', 'Lo que anuncia', 'Lo que ocurrió'],
          filas: [
            ['11:11-12', 'El rey del sur vence a una gran multitud', 'Ptolomeo IV vence a Antíoco III en Rafia (217 a.C.)'],
            ['11:15-16', 'El rey del norte toma una ciudad fuerte y está en la tierra gloriosa', 'Antíoco III vence en Panión y toma Sidón (200–198 a.C.)'],
            ['11:17', 'Le da su hija por mujer', 'Cleopatra I, hija de Antíoco III, se casa con Ptolomeo V (193 a.C.)'],
            ['11:18', 'Vuelve el rostro a las costas; un príncipe hace cesar su afrenta', 'Invade Grecia y Asia Menor; el romano Lucio Escipión lo vence en Magnesia (190 a.C.)'],
            ['11:20', 'Uno hace pasar un cobrador de tributos por la gloria del reino', 'Seleuco IV envía a Heliodoro a tomar el tesoro del templo (c. 178 a.C.)']
          ]
        })
      ],
      texto: [
        'Durante el siglo III a.C., los Ptolomeos de Egipto y los seléucidas de Siria pelearon cinco guerras por la franja de tierra que los separaba, la que hoy llamamos el Levante: Fenicia, Judea y el sur de Siria. Daniel las había anunciado como las luchas entre «el rey del sur» y «el rey del norte» (Dn 11:5-20), con tantos detalles que el capítulo se puede seguir como una crónica.',
        { h: 'Antíoco III, el Grande' },
        'El rey seléucida Antíoco III (223–187 a.C.) quiso recuperar el imperio de sus antepasados. En el 217 a.C. invadió Palestina, pero fue derrotado por Ptolomeo IV en Rafia, al sur de Gaza. Diecisiete años después volvió y, en el 200 a.C., venció al general egipcio Escopas en Panión, junto a las fuentes del Jordán. Es el mismo lugar que siglos después se llamaría Cesarea de Filipo, donde Pedro confesó que Jesús es el Cristo (Mt 16:13-16). Daniel lo había dicho: el rey del norte «estará en la tierra gloriosa» (Dn 11:16).',
        'Muchos en Jerusalén recibieron bien al nuevo rey, cansados de los impuestos egipcios. Josefo conserva la carta en que Antíoco III recompensó a los judíos: ayudas para el templo, rebaja de impuestos y el derecho a vivir «según las leyes de sus padres». Por un tiempo, la vida siguió en paz bajo el sumo sacerdote Simón, a quien Ben Sira elogia como el hombre que reparó la casa de Dios.',
        { h: 'Roma entra en escena' },
        'Antíoco III cometió un error: avanzó sobre Grecia y Asia Menor, donde chocó con Roma. En el 190 a.C. fue derrotado en Magnesia y, por el tratado de Apamea, tuvo que pagar una indemnización enorme y entregar rehenes, entre ellos a su hijo menor, el futuro Antíoco IV, que vivió catorce años en Roma. Desde entonces, los reyes seléucidas vivieron buscando dinero. Antíoco III murió saqueando un templo en Elimaida. Su hijo Seleuco IV envió a su ministro Heliodoro a apoderarse del tesoro del templo de Jerusalén; según el segundo libro de los Macabeos, no lo logró. Daniel había hablado de «uno que hará pasar un cobrador de tributos por la gloria del reino» (Dn 11:20).',
        'La necesidad de dinero de los seléucidas y la ambición de algunas familias de Jerusalén iban a encontrarse muy pronto.'
      ],
      pensar: 'Daniel describió siglos antes las guerras de reyes que aún no habían nacido. ¿Qué te dice eso de la fidelidad de la palabra de Dios en lo que aún no se ha cumplido?'
    },
    {
      id: 'sumo-sacerdocio', n: 'Jasón, Menelao y el sumo sacerdocio comprado', ref: 'Daniel 11:21-22; Números 25:11-13; Malaquías 2:7-8; Hebreos 5:4', fecha: [-175, -162],
      visual: [
        img('gimnasio-jerusalen.webp', 'En un patio de ejercicios rodeado de columnas, al pie de una colina de Jerusalén, jóvenes judíos de buena familia con sombreros griegos de ala ancha practican el lanzamiento de disco y la lucha, mientras dos sacerdotes jóvenes con túnicas de lino blanco se apresuran a unirse a ellos; al fondo, sobre la colina, se ve el templo', 'El gimnasio griego de Jerusalén, construido bajo el sumo sacerdote Jasón (hacia 175 a.C.). Recreación.'),
        tabla({
          titulo: 'Los sumos sacerdotes de la crisis',
          cab: ['Sumo sacerdote', 'Años', 'Cómo llegó', 'Qué hizo'],
          filas: [
            ['Onías III', 'Hasta 175 a.C.', 'Por herencia, de la familia de Sadoc', 'Fiel a la ley; depuesto y asesinado en Dafne (c. 171 a.C.)'],
            ['Jasón (Josué)', '175–172 a.C.', 'Compró el cargo a Antíoco IV', 'Construyó el gimnasio y convirtió Jerusalén en ciudad griega'],
            ['Menelao', '172–162 a.C.', 'Ofreció más dinero que Jasón; no era de la familia de Sadoc', 'Robó vasos del templo y apoyó a Antíoco IV'],
            ['Alcimo', '162–159 a.C.', 'Nombrado por Demetrio I', 'Persiguió a los fieles'],
            ['Jonatán Macabeo', '152–143 a.C.', 'Nombrado por un rey seléucida', 'Primer sumo sacerdote de la familia asmonea (ruta V)']
          ]
        })
      ],
      texto: [
        'Durante siglos, el sumo sacerdocio había pasado de padre a hijo en la familia de Sadoc, el sacerdote de David y Salomón. Era un cargo santo, ligado al pacto que Dios hizo con Finees (Nm 25:12-13). En el 175 a.C., con la llegada de Antíoco IV al trono, se convirtió en algo que se compraba.',
        { h: 'Jasón compra el cargo' },
        'El sumo sacerdote era Onías III, un hombre piadoso. Su hermano Josué, que usaba el nombre griego Jasón, viajó a Antioquía y ofreció a Antíoco IV trescientos sesenta talentos de plata, y otros ciento cincuenta más por el permiso para construir un gimnasio y registrar a los habitantes de Jerusalén como ciudadanos de Antioquía. El rey, necesitado de dinero, aceptó. Onías fue depuesto, y Jasón empezó a transformar Jerusalén en una ciudad griega.',
        'El segundo libro de los Macabeos describe la escena con dolor: el gimnasio se levantó junto al monte del templo, los jóvenes más nobles se pusieron el sombrero griego, y los mismos sacerdotes descuidaban los sacrificios para correr a los juegos apenas sonaba la señal. El primer libro añade que algunos se avergonzaban de la circuncisión y procuraban disimularla, para no ser objeto de burla en el gimnasio. Nadie los obligó: fue una helenización voluntaria, promovida por el propio sumo sacerdote.',
        { h: 'Menelao compra más caro' },
        'Tres años después, en el 172 a.C., Jasón envió a Antioquía a un tal Menelao para entregar el dinero. Menelao aprovechó la audiencia y ofreció trescientos talentos más que Jasón. Antíoco le dio el cargo. Menelao ni siquiera pertenecía a la familia de Sadoc. Para pagar lo prometido, sacó vasos de oro del templo, y cuando Onías III lo denunció, hizo que lo asesinaran cerca de Antioquía. Muchos intérpretes ven en «el príncipe del pacto» quebrantado de Daniel 11:22 una alusión a ese crimen.',
        { h: 'Un oficio santo en manos de hombres sin temor' },
        'Malaquías había dicho que «los labios del sacerdote han de guardar la sabiduría», pero que los sacerdotes de su tiempo se habían apartado del camino (Mal 2:7-8). En el siglo II a.C., la corrupción del sacerdocio llegó a su punto más bajo. Hebreos lo recuerda por contraste: «nadie toma para sí esta honra, sino el que es llamado por Dios, como lo fue Aarón» (He 5:4). Cristo no compró su sacerdocio: lo recibió del Padre y lo ejerce para siempre.',
        ir('Ver El sacerdocio en Israel: la línea de Sadoc', R.sacerdocio)
      ],
      pensar: 'Jasón y Menelao compraron el cargo más santo de Israel para su propio beneficio. ¿Buscas tú posiciones en la iglesia por servir a Dios o por lo que te dan?'
    },
    {
      id: 'antioco', n: 'Antíoco IV Epífanes', ref: 'Daniel 11:21-30; Daniel 8:23-25', fecha: [-175, -164],
      visual: [
        pasos([
          { t: '169 a.C.: Antíoco IV invade Egipto y, al volver, saquea el templo de Jerusalén', fecha: -169, estado: { view: V.campana, capas: ['seleucidas-200'], lugares: ['antioquia', 'pelusio', 'alejandria', 'jerusalen'], trazos: ['et-antioco-168'] } },
          { t: '168 a.C.: frente a Alejandría, un enviado de Roma le ordena retirarse', fecha: -168, estado: { view: V.campana, lugares: ['alejandria', 'pelusio', 'antioquia'], trazos: ['et-antioco-168'] } },
          { t: '168–167 a.C.: humillado, vuelve por Jerusalén y la castiga', fecha: -167, estado: { view: V.palestina, lugares: ['gaza', 'jerusalen', 'modin'], trazos: ['et-antioco-regreso'] } }
        ]),
        cita('Daniel 11:29-30', 'Al tiempo señalado volverá al sur; mas no será la postrera venida como la primera. Porque vendrán contra él naves de Quitim, y él se contristará, y volverá, y se enojará contra el pacto santo, y hará según su voluntad; volverá, pues, y se entenderá con los que abandonen el santo pacto.'),
        tabla({
          titulo: 'Antíoco IV en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Reinado', '175–164 a.C.'],
            ['Su título', 'Epífanes, «dios manifestado»; sus enemigos lo apodaban Epímanes, «el loco»'],
            ['Antes de reinar', 'Rehén en Roma durante catorce años'],
            ['En Daniel', 'El «hombre despreciable» (Dn 11:21) y el «rey altivo de rostro» (Dn 8:23)'],
            ['Su muerte', 'En Persia, en el 164 a.C., durante una campaña para saquear templos']
          ]
        })
      ],
      texto: [
        'Antíoco IV subió al trono en el 175 a.C., aprovechando que el heredero legítimo, su sobrino Demetrio, estaba como rehén en Roma. Daniel lo describe como un «hombre despreciable, al cual no darán la honra del reino; pero vendrá sin aviso y tomará el reino con halagos» (Dn 11:21). Se hacía llamar Epífanes, «dios manifestado», y en sus monedas aparecía con los rasgos de Zeus. El historiador griego Polibio cuenta que sus contemporáneos lo apodaban Epímanes, «el loco», por su conducta extravagante.',
        { h: 'Las campañas contra Egipto' },
        'En el 169 a.C., Antíoco IV invadió Egipto y llegó cerca de Alejandría. Al volver, pasó por Jerusalén y, con la complicidad del sumo sacerdote Menelao, entró en el santuario y se llevó el altar de oro, el candelero, la mesa de los panes y los tesoros. Al año siguiente volvió a Egipto, pero esta vez lo esperaba un enviado del Senado romano, Popilio Lenas. Cuenta Polibio que le entregó la orden de retirarse y, cuando el rey pidió tiempo para pensarlo, trazó con su bastón un círculo en la arena alrededor de él y le exigió responder antes de salir de él. Antíoco obedeció.',
        'Daniel lo había anunciado: «vendrán contra él naves de Quitim, y él se contristará, y volverá, y se enojará contra el pacto santo» (Dn 11:30). Quitim era el nombre de Chipre y, por extensión, de los pueblos del occidente. La humillación ante Roma desató la furia de Antíoco contra Jerusalén.',
        { h: 'Castigo a Jerusalén' },
        'Mientras tanto, el depuesto Jasón, al oír el rumor de que Antíoco había muerto, atacó Jerusalén para recuperar el sumo sacerdocio. El rey lo tomó como una rebelión. Envió a su general Apolonio, que entró en la ciudad un día de reposo, mató a muchos, derribó parte de los muros y construyó una fortaleza, el Acra, con una guarnición griega junto al templo. Durante veinticinco años, esa fortaleza sería un símbolo de la opresión extranjera.',
        'Pero lo peor estaba por venir. Antíoco decidió que la manera de asegurar la frontera con Egipto era terminar con la religión que hacía distintos a los judíos.'
      ],
      pensar: 'Antíoco, el que se hacía llamar «dios manifestado», tuvo que obedecer a un mensajero romano con un bastón. ¿Qué te enseña eso sobre el poder de los hombres frente al poder de Dios?'
    },
    {
      id: 'abominacion', n: 'La abominación desoladora del 167 a.C.', ref: 'Daniel 11:31; Daniel 8:11-14; Daniel 12:11; Mateo 24:15', fecha: -167,
      visual: [
        img('../imperio-griego/img/grecia-profanacion.webp', 'Soldados seléucidas levantan un altar pagano en el atrio del templo de Jerusalén mientras sacerdotes judíos observan con dolor', 'La profanación del templo, diciembre del 167 a.C. Recreación.'),
        cita('Daniel 11:31-32', 'Y se levantarán de su parte tropas que profanarán el santuario y la fortaleza, y quitarán el continuo sacrificio, y pondrán la abominación desoladora. Con lisonjas seducirá a los violadores del pacto; mas el pueblo que conoce a su Dios se esforzará y actuará.'),
        tabla({
          titulo: 'Lo que prohibió el decreto de Antíoco IV',
          cab: ['Prohibición', 'Lo que significaba'],
          filas: [
            ['Los sacrificios en el templo', 'Fin del culto que Dios había ordenado'],
            ['El día de reposo y las fiestas', 'Fin de la señal del pacto (Éx 31:13)'],
            ['La circuncisión', 'Fin de la señal de Abraham (Gn 17:10)'],
            ['La ley de los alimentos', 'Obligación de comer carne de cerdo'],
            ['Los rollos de la ley', 'Los ejemplares se rompían y quemaban'],
            ['El templo de Jerusalén', 'Dedicado a Zeus Olímpico, con un altar pagano sobre el altar']
          ]
        })
      ],
      texto: [
        'En el 167 a.C., Antíoco IV publicó un decreto que no tenía antecedentes en el mundo antiguo. Los imperios solían respetar los dioses de los pueblos conquistados; esta vez un rey prohibió una religión entera. El primer libro de los Macabeos describe las medidas: se suspendieron los sacrificios, se prohibió guardar el día de reposo y las fiestas, se castigó con la muerte la circuncisión, se obligó a ofrecer y comer cerdo en altares levantados en cada aldea, y se quemaron los rollos de la ley que se encontraban.',
        { h: 'La abominación en el templo' },
        'El día quince del mes de Quisleu, en diciembre del 167 a.C., se levantó sobre el altar de los holocaustos un altar pagano, y diez días después se ofreció en él el primer sacrificio. El templo fue dedicado a Zeus Olímpico; el del monte Gerizim, a Zeus protector de los forasteros. Los judíos lo llamaron con las palabras de Daniel: la abominación desoladora, el ídolo que deja desolado el santuario.',
        'Daniel lo había anunciado casi cuatro siglos antes: «se levantarán de su parte tropas que profanarán el santuario y la fortaleza, y quitarán el continuo sacrificio, y pondrán la abominación desoladora» (Dn 11:31). En el capítulo 8 había visto al cuerno pequeño que quitaba el continuo sacrificio y echaba por tierra el lugar del santuario, y había oído cuánto duraría (Dn 8:11-14).',
        { h: 'Una profecía con dos cumplimientos' },
        'Dos siglos después, Jesús volvió a hablar de la abominación desoladora como algo futuro: «cuando veáis en el lugar santo la abominación desoladora de que habló el profeta Daniel (el que lee, entienda)» (Mt 24:15). Antíoco IV fue un cumplimiento real de la profecía y, al mismo tiempo, un anticipo del cumplimiento final: el hombre de pecado que se sentará en el templo de Dios haciéndose pasar por Dios (2 Ts 2:3-4). Ese tema se estudia en Daniel y en Los últimos tiempos.',
        ir('Estudiar la abominación desoladora en Daniel', R.daniel),
        { ejercicio: {
          pregunta: '¿Cómo se relacionan Daniel 11:31 y Mateo 24:15?',
          opciones: [
            { t: 'Daniel habla solo de Antíoco IV, y Jesús se equivocó al aplicarlo al futuro.', ok: false, por_que: 'Jesús es el Señor de la profecía; si él la aplica al futuro, la profecía tiene un cumplimiento todavía por venir.' },
            { t: 'Antíoco IV cumplió la profecía en el 167 a.C., y Jesús anunció un cumplimiento final del que ese fue un anticipo.', ok: true, por_que: 'Es la lectura del Nuevo Testamento: Antíoco es un tipo del hombre de pecado de 2 Tesalonicenses 2.' },
            { t: 'Ninguno de los dos se refiere a un hecho histórico.', ok: false, por_que: 'La profanación del 167 a.C. es uno de los hechos mejor documentados del período.' }
          ],
          explicacion: 'Una profecía puede tener un cumplimiento cercano que anticipa otro final.'
        } }
      ],
      pensar: 'Antíoco quiso borrar la ley de Dios quemando sus rollos, y no lo logró. ¿Qué lugar tiene en tu vida una Palabra que tantos intentaron destruir?'
    },
    {
      id: 'martires', n: 'Los mártires y los fieles', ref: 'Daniel 11:32-35; Hebreos 11:35-38; Daniel 12:2-3; Apocalipsis 2:10', fecha: [-167, -164],
      visual: [
        img('../libros-apocrifos/img/madre-siete-hijos.webp', 'En un salón de piedra con columnas, ante el rey seléucida Antíoco IV sentado en su trono, una madre judía de unos cincuenta años, de pie y serena, toma del hombro a su hijo menor', 'La madre anima a su hijo menor a permanecer fiel, según el segundo libro de los Macabeos. Recreación.'),
        cita('Hebreos 11:35-38', 'Las mujeres recibieron sus muertos mediante resurrección; mas otros fueron atormentados, no aceptando el rescate, a fin de obtener mejor resurrección. Otros experimentaron vituperios y azotes, y a más de esto prisiones y cárceles. Fueron apedreados, aserrados, puestos a prueba, muertos a filo de espada; anduvieron de acá para allá cubiertos de pieles de ovejas y de cabras, pobres, angustiados, maltratados; de los cuales el mundo no era digno; errando por los desiertos, por los montes, por las cuevas y por las cavernas de la tierra.')
      ],
      texto: [
        'El decreto de Antíoco IV obligó a cada judío a elegir. Muchos obedecieron por miedo o por convicción, porque ya admiraban la cultura griega. Pero muchos otros prefirieron morir antes que comer cerdo, abandonar el día de reposo o entregar sus rollos de la ley. Daniel lo había visto: «el pueblo que conoce a su Dios se esforzará y actuará. Y los sabios del pueblo instruirán a muchos; y por algunos días caerán a espada y a fuego, en cautividad y despojo» (Dn 11:32-33).',
        { h: 'Los que murieron' },
        'Los libros de los Macabeos conservan algunos nombres e historias. Madres que circuncidaron a sus hijos fueron ejecutadas con sus bebés. Eleazar, un escriba de noventa años, se negó a comer cerdo, y también a fingir que lo comía, para no dar un mal ejemplo a los jóvenes. Una madre vio morir a sus siete hijos uno por uno, animándolos a ser fieles con la esperanza de la resurrección. Un grupo de mil personas, hombres, mujeres y niños, se escondió en cuevas del desierto; cuando los soldados los atacaron en día de reposo, no se defendieron para no quebrantar el sábado, y murieron todos.',
        { h: 'Los piadosos' },
        'En esos años aparece un grupo llamado los asideos, de la palabra hebrea hasidim, «piadosos». Eran judíos dedicados a guardar la ley con todo rigor, que se unieron a la rebelión de los macabeos para defender la fe. De ellos saldrían, según muchos historiadores, los fariseos y los esenios (ruta VII).',
        { h: 'Recordados en la Escritura' },
        'La carta a los Hebreos, al recorrer la galería de los héroes de la fe, menciona a los que «fueron atormentados, no aceptando el rescate, a fin de obtener mejor resurrección», y a otros que «anduvieron de acá para allá cubiertos de pieles de ovejas y de cabras, pobres, angustiados, maltratados», que vivieron errantes «por los desiertos, por los montes, por las cuevas y por las cavernas de la tierra» (He 11:35-38). Muchos ven aquí un recuerdo de los mártires y fugitivos de la persecución de Antíoco.',
        'Los mártires murieron con una esperanza que Daniel había anunciado: «muchos de los que duermen en el polvo de la tierra serán despertados, unos para vida eterna» (Dn 12:2). Su testimonio preparó a los creyentes de todas las épocas para la palabra de Cristo: «Sé fiel hasta la muerte, y yo te daré la corona de la vida» (Ap 2:10).',
        ir('Ver en Los libros apócrifos: 2 Macabeos, mártires y resurrección', R.apocrifos + '#historicos/2')
      ],
      pensar: 'Eleazar no quiso ni siquiera fingir que comía lo prohibido, para no hacer tropezar a los jóvenes. ¿Qué ejemplo das con tus decisiones a los que vienen detrás de ti?'
    },
    {
      id: 'importa', n: 'Por qué esta crisis importa al leer el Nuevo Testamento', ref: 'Juan 10:22-23; Hechos 10:14; Hechos 10:28; Mateo 24:15; 2 Tesalonicenses 2:3-4', fecha: -167,
      visual: [
        tabla({
          titulo: 'Huellas de la crisis en el Nuevo Testamento',
          cab: ['Tema', 'Origen en la crisis', 'En el Nuevo Testamento'],
          filas: [
            ['La fiesta de la Dedicación', 'Purificación del templo en el 164 a.C.', 'Jesús en el templo en invierno (Jn 10:22-23)'],
            ['La abominación desoladora', 'El altar de Zeus sobre el altar del templo', 'Mateo 24:15; Marcos 13:14'],
            ['El hombre de pecado', 'Antíoco IV se proclama dios', '2 Tesalonicenses 2:3-4'],
            ['Las leyes de los alimentos', 'Los mártires mueren por no comer cerdo', 'Pedro: «ninguna cosa común o inmunda he comido jamás» (Hch 10:14)'],
            ['Separación de los gentiles', 'Rechazo de las costumbres griegas', '«abominable es para un varón judío juntarse o acercarse a un extranjero» (Hch 10:28)'],
            ['La fe en la resurrección', 'La esperanza de los mártires', 'Los fariseos creen; los saduceos niegan (Hch 23:8)'],
            ['Un Mesías libertador', 'La victoria de los macabeos', 'Quieren hacer rey a Jesús por la fuerza (Jn 6:15)']
          ]
        }),
        cita('Hechos 10:13-14', 'Y le vino una voz: Levántate, Pedro, mata y come. Entonces Pedro dijo: Señor, no; porque ninguna cosa común o inmunda he comido jamás.')
      ],
      texto: [
        'La persecución de Antíoco IV duró apenas tres años, pero marcó al pueblo judío durante siglos. Muchas actitudes que encontramos en los evangelios y en Hechos se entienden mejor recordando lo que vivieron los abuelos de los abuelos de los apóstoles.',
        { h: 'Una identidad defendida con sangre' },
        'Para un judío del siglo I, guardar el día de reposo, circuncidar a sus hijos y no comer alimentos impuros no eran costumbres sin importancia: eran las señales por las que sus antepasados habían muerto. Por eso, cuando en la visión de Hechos 10 una voz le dijo a Pedro que matara y comiera animales impuros, él respondió: «Señor, no; porque ninguna cosa común o inmunda he comido jamás» (Hch 10:14). Y por eso la entrada de los gentiles en la iglesia sin circuncidarse provocó la crisis que se resolvió en el concilio de Jerusalén (Hch 15).',
        'Esa historia ayuda a leer con más compasión a los judíos que se opusieron a Pablo. No defendían simples tradiciones, sino lo que consideraban la fidelidad a Dios por la que tantos habían dado la vida. Pablo lo sabía bien: él mismo había sido «en cuanto a la ley, fariseo; en cuanto a celo, perseguidor de la iglesia» (Fil 3:5-6).',
        { h: 'Una esperanza con forma de espada' },
        'La victoria de los macabeos, contra todo pronóstico, quedó grabada como modelo de liberación. Muchos esperaban que el Mesías hiciera lo mismo con los romanos: levantar al pueblo, purificar el templo y expulsar a los extranjeros. Cuando Jesús entró en Jerusalén, la multitud agitaba ramas de palmera, como se hacía en las celebraciones de los macabeos. Pero Jesús no vino a tomar el poder por la espada, sino a dar su vida en rescate por muchos (Mr 10:45).',
        { h: 'Un anticipo de lo que vendrá' },
        'Finalmente, Antíoco IV quedó en la Escritura como figura del último enemigo de Dios. Jesús y Pablo hablaron de una abominación futura y de un hombre de pecado que «se opone y se levanta contra todo lo que se llama Dios» (2 Ts 2:4). La crisis del siglo II a.C. enseña a la iglesia que la persecución tiene un límite fijado por Dios y que el pueblo que conoce a su Dios puede permanecer firme.',
        ir('Ver en Los últimos tiempos: el anticristo', '../../escatologia/')
      ],
      pensar: 'Pedro tuvo que aprender que Dios recibía también a los gentiles, aunque eso chocaba con lo que su pueblo había defendido con sangre. ¿Hay convicciones tuyas que son más tradición que mandamiento de Dios?'
    }
  ];

  window.__ET.crisis = crisis;
})();
/* Entre los Testamentos · ruta V. Los macabeos y los asmoneos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const asmoneos = [
    {
      id: 'matatias', n: 'Matatías en Modín', ref: 'Números 25:7-13; Daniel 11:32; 1 Reyes 19:10', fecha: [-167, -166],
      visual: [
        img('matatias-modin.webp', 'En la plaza de la aldea de Modín, junto a un altar pagano recién levantado, un anciano sacerdote judío de barba blanca, Matatías, de pie y con el brazo extendido en señal de rechazo, se niega ante un oficial seléucida con casco de bronce y capa roja que le ofrece una bolsa de monedas; detrás del anciano, sus cinco hijos adultos lo respaldan, y los aldeanos observan en silencio', 'Matatías rechaza el sacrificio pagano en Modín (167 a.C.). Recreación.'),
        mapa({ view: V.judea, lugares: ['modin', 'jerusalen', 'desierto-judea', 'jerico'] }),
        cita('Números 25:11', 'Finees hijo de Eleazar, hijo del sacerdote Aarón, ha hecho apartar mi furor de los hijos de Israel, llevado de celo entre ellos; por lo cual yo no he consumido en mi celo a los hijos de Israel.')
      ],
      texto: [
        'Modín era una aldea en las colinas al noroeste de Jerusalén, a unos treinta kilómetros. Allí se había retirado Matatías, un sacerdote anciano de la familia de Joarib, con sus cinco hijos: Juan, Simón, Judas, Eleazar y Jonatán. Su familia sería conocida como los asmoneos, por un antepasado llamado Asmón, y sus hijos como los macabeos, por el sobrenombre de Judas.',
        { h: 'El día del sacrificio' },
        'En el 167 a.C. llegaron a Modín los oficiales del rey para obligar al pueblo a ofrecer sacrificios a los dioses. Según el primer libro de los Macabeos, se dirigieron primero a Matatías, como hombre principal de la aldea, y le prometieron que él y sus hijos serían contados entre los amigos del rey y recibirían oro y plata si daban el ejemplo. Matatías respondió en voz alta que, aunque todas las naciones obedecieran al rey, él, sus hijos y sus hermanos seguirían en el pacto de sus padres.',
        'Apenas terminó de hablar, un judío se adelantó para ofrecer el sacrificio en el altar pagano. Matatías, encendido de celo, lo mató sobre el altar, junto con el oficial del rey, y derribó el altar. El autor del libro lo compara con Finees, el nieto de Aarón que había actuado con celo por Dios en el desierto (Nm 25:7-13). Luego Matatías recorrió la aldea llamando a todos los que tuvieran celo por la ley a seguirlo, y huyó con sus hijos a los montes, dejando todo lo que tenían.',
        { h: 'Pelear en día de reposo' },
        'Muchos fieles se unieron a ellos. Cuando supieron que mil personas habían muerto en las cuevas por no defenderse en día de reposo (ruta IV), Matatías y sus amigos tomaron una decisión difícil: si todos hacían lo mismo, los paganos terminarían con Israel en poco tiempo. Resolvieron defenderse si los atacaban en sábado, aunque no atacarían ellos ese día. Recorrieron las aldeas derribando altares paganos, circuncidando a los niños y persiguiendo a los apóstatas.',
        'Matatías murió al año siguiente, en el 166 a.C. Antes de morir, según el libro, recordó a sus hijos la fidelidad de Abraham, José, Finees, Josué, Caleb, David, Elías y Daniel, y puso a Judas al frente de la lucha.',
        { h: 'Celo según la Escritura' },
        'La rebelión comenzó como una defensa de la fe, y en eso cumplió lo anunciado: «el pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32). Pero el celo humano, sin la guía de Dios, puede terminar en violencia y ambición, como se verá en la historia de los descendientes de Matatías. Pablo, que conocía bien ese celo, escribió de sus hermanos judíos que tenían «celo de Dios, pero no conforme a ciencia» (Ro 10:2).'
      ],
      pensar: 'Matatías dijo que, aunque todos obedecieran al rey, él seguiría en el pacto de sus padres. ¿Estarías dispuesto a quedarte solo por ser fiel a Dios?'
    },
    {
      id: 'judas', n: 'Judas Macabeo', ref: '1 Samuel 14:6; 2 Crónicas 14:11; Daniel 11:34; Hebreos 11:33-34', fecha: [-166, -160],
      visual: [
        pasos([
          { t: '166 a.C.: Judas vence a Apolonio y a Serón en la subida de Bet-horón', fecha: -166, estado: { view: V.judea, lugares: ['bet-horon', 'jerusalen', 'modin', 'samaria'] } },
          { t: '165 a.C.: sorprende al ejército de Gorgias en Emaús', fecha: -165, estado: { view: V.judea, lugares: ['emaus', 'mizpa', 'jerusalen', 'modin'] } },
          { t: '164 a.C.: vence a Lisias en Bet-sur y entra en Jerusalén', fecha: -164, estado: { view: V.judea, capas: ['a-judas'], lugares: ['bet-sur', 'jerusalen', 'hebron'] } },
          { t: '160 a.C.: muere en la batalla de Elasa', fecha: -160, estado: { view: V.judea, lugares: ['bet-horon', 'jerusalen', 'modin'] } }
        ]),
        cita('1 Samuel 14:6', 'Dijo, pues, Jonatán a su paje de armas: Ven, pasemos a la guarnición de estos incircuncisos; quizá haga algo Jehová por nosotros, pues no es difícil para Jehová salvar con muchos o con pocos.'),
        tabla({
          titulo: 'Las batallas de Judas Macabeo',
          cab: ['Año', 'Lugar', 'Enemigo', 'Resultado'],
          filas: [
            ['166 a.C.', 'Samaria', 'Apolonio', 'Victoria; Judas toma su espada'],
            ['166 a.C.', 'Bet-horón', 'Serón', 'Victoria en la subida, como Josué (Jos 10:10)'],
            ['165 a.C.', 'Emaús', 'Gorgias y Nicanor', 'Victoria por sorpresa'],
            ['164 a.C.', 'Bet-sur', 'Lisias', 'Victoria; Judas recupera Jerusalén'],
            ['161 a.C.', 'Adasa', 'Nicanor', 'Victoria; se celebra cada año el día de Nicanor'],
            ['160 a.C.', 'Elasa', 'Báquides', 'Derrota; Judas muere']
          ]
        })
      ],
      texto: [
        'Judas, el tercer hijo de Matatías, recibió el sobrenombre de Macabeo, que probablemente significa «el martillo», por la fuerza de sus golpes contra el enemigo. Con él, la resistencia de unos fugitivos en los montes se convirtió en un ejército. El primer libro de los Macabeos lo compara con un león que ruge sobre su presa.',
        { h: 'Pocos contra muchos' },
        'Judas peleaba con pocos hombres, mal armados, contra ejércitos profesionales, y aprovechaba el conocimiento del terreno: los pasos estrechos de las montañas de Judea, donde la caballería y los elefantes de los seléucidas no podían desplegarse. En la subida de Bet-horón, el mismo lugar donde Josué había perseguido a los amorreos (Jos 10:10), derrotó al general Serón. Según el libro, cuando sus hombres temieron por ser pocos, Judas les recordó que la victoria no depende del número de los soldados, sino de la fuerza que viene del cielo.',
        'Era la misma fe de Jonatán, el hijo de Saúl: «no es difícil para Jehová salvar con muchos o con pocos» (1 S 14:6), y la del rey Asa: «para ti no hay diferencia alguna en dar ayuda al poderoso o al que no tiene fuerzas» (2 Cr 14:11).',
        { h: 'De Emaús a Jerusalén' },
        'En el 165 a.C., el regente Lisias envió un gran ejército al mando de Gorgias y Nicanor, acompañado de comerciantes que venían a comprar a los judíos como esclavos. Judas reunió a su gente en Mizpa para ayunar y orar, y luego, de noche, sorprendió el campamento de Emaús mientras Gorgias lo buscaba en los montes. Al año siguiente derrotó a Lisias en Bet-sur, al sur de Jerusalén. El camino a la ciudad santa estaba abierto (V.3).',
        { h: 'Un final en batalla' },
        'Después de purificar el templo, Judas siguió luchando para proteger a los judíos de Galaad y Galilea, y en el 161 a.C. hizo una alianza con Roma. En el 160 a.C., frente a un ejército mucho mayor, la mayoría de sus hombres lo abandonó. Se negó a huir y murió peleando en Elasa. Sus hermanos lo sepultaron en Modín.',
        'Daniel había anunciado que, en la persecución, los fieles «serán ayudados de pequeño socorro» (Dn 11:34). Hebreos recuerda a los que «por fe conquistaron reinos… se hicieron fuertes en batallas, pusieron en fuga ejércitos extranjeros» (He 11:33-34). Judas Macabeo fue uno de ellos.'
      ],
      pensar: 'Judas enfrentó ejércitos enormes con pocos hombres, confiando en que la victoria viene de Dios. ¿Qué batalla estás evitando porque te sientes demasiado débil?'
    },
    {
      id: 'dedicacion', n: 'La purificación del templo y la fiesta de la Dedicación', ref: 'Juan 10:22-36; 1 Reyes 8:63; Esdras 6:16-17; Malaquías 3:1', fecha: -164,
      visual: [
        img('../imperio-griego/img/grecia-purificacion-templo.webp', 'Judas Macabeo y sus hombres purifican el templo de Jerusalén y vuelven a encender el candelero', 'La purificación del templo, diciembre del 164 a.C. Recreación.'),
        cita('Juan 10:22-23', 'Celebrábase en Jerusalén la fiesta de la dedicación. Era invierno, y Jesús andaba en el templo por el pórtico de Salomón.'),
        tabla({
          titulo: 'Tres dedicaciones del templo',
          cab: ['Templo', 'Año', 'Pasaje'],
          filas: [
            ['El templo de Salomón', 'c. 959 a.C.', '1 Reyes 8; «así dedicaron el rey y todos los hijos de Israel la casa de Jehová» (1 R 8:63)'],
            ['El templo de Zorobabel', '515 a.C.', 'Esdras 6:16-17'],
            ['El templo purificado por Judas', '164 a.C.', 'Primer libro de los Macabeos; Juan 10:22']
          ],
          nota: 'Dedicación se dice en hebreo janucá: de allí el nombre de la fiesta judía.'
        })
      ],
      texto: [
        'Cuando Judas y sus hombres subieron a Jerusalén en el 164 a.C., encontraron el santuario desolado, las puertas quemadas y la hierba creciendo en los atrios como en un bosque. Rasgaron sus vestidos, se echaron ceniza sobre la cabeza y clamaron al cielo. Mientras unos vigilaban la fortaleza del Acra, todavía en manos de los griegos, otros se pusieron a trabajar.',
        { h: 'La purificación' },
        'Judas escogió sacerdotes sin tacha, fieles a la ley, que limpiaron el santuario y sacaron las piedras contaminadas. El altar de los holocaustos, que había sido profanado, lo desarmaron, y guardaron sus piedras en el monte del templo hasta que viniera un profeta que dijera qué hacer con ellas. Construyeron un altar nuevo de piedras sin labrar, como mandaba la ley, hicieron nuevos utensilios, el candelero, el altar del incienso y la mesa, y colgaron los velos.',
        'El día veinticinco del mes de Quisleu, en diciembre del 164 a.C., exactamente tres años después de la profanación, ofrecieron el primer sacrificio en el nuevo altar, con cantos, cítaras y címbalos. Celebraron durante ocho días, y Judas estableció que la fiesta se celebrara cada año. Josefo la llama la fiesta de las Luces. La historia de una vasija de aceite que alcanzó milagrosamente para ocho días aparece en escritos judíos siglos posteriores; los libros de los Macabeos no la cuentan.',
        { h: 'Jesús en la fiesta de la Dedicación' },
        'Dos siglos después, Juan cuenta: «Celebrábase en Jerusalén la fiesta de la dedicación. Era invierno, y Jesús andaba en el templo por el pórtico de Salomón» (Jn 10:22-23). Los judíos lo rodearon y le preguntaron si era el Cristo. En medio de la fiesta que recordaba la consagración del templo, Jesús se presentó como aquel «al que el Padre santificó y envió al mundo» (Jn 10:36). El verdadero templo consagrado estaba delante de ellos.',
        'Malaquías había anunciado que «vendrá súbitamente a su templo el Señor a quien vosotros buscáis» (Mal 3:1). El templo que Judas purificó, ampliado después por Herodes, fue el que recibió al Señor.',
        { ejercicio: {
          pregunta: '¿Qué fiesta celebraban los judíos cuando Jesús enseñaba en el pórtico de Salomón en Juan 10?',
          opciones: [
            { t: 'La fiesta de los tabernáculos, mandada en la ley de Moisés.', ok: false, por_que: 'Esa fiesta se menciona en Juan 7; la de Juan 10 ocurre en invierno.' },
            { t: 'La fiesta de la Dedicación, que recordaba la purificación del templo por Judas Macabeo.', ok: true, por_que: 'Se celebraba desde el 164 a.C., en diciembre; Juan la nombra en 10:22.' },
            { t: 'La fiesta de Purim, que recordaba a Ester.', ok: false, por_que: 'Purim se celebra a fines del invierno, en el mes de Adar, y recuerda la liberación de Ester 9.' }
          ],
          explicacion: 'La Dedicación es la única fiesta del Nuevo Testamento que nació entre los testamentos.'
        } }
      ],
      pensar: 'Los macabeos limpiaron el templo de todo lo que lo contaminaba. Pablo dice que el creyente es templo del Espíritu Santo (1 Co 6:19). ¿Qué necesita ser quitado de tu vida para que Dios sea honrado en ella?'
    },
    {
      id: 'jonatan-simon', n: 'Jonatán y Simón', ref: 'Números 3:10; Ezequiel 44:15-16; Hebreos 7:11-14', fecha: [-160, -134],
      visual: [
        esq('esquema-asmoneos.svg', 'Árbol de la familia asmonea: Matatías y sus cinco hijos Juan, Simón, Judas, Eleazar y Jonatán; de Simón, Juan Hircano; de él, Aristóbulo I y Alejandro Janeo, casado con Salomé Alejandra; de ellos, Hircano II y Aristóbulo II; de Aristóbulo II, Antígono y Alejandro, padre de Mariamne, que se casa con Herodes', 'Los asmoneos, de Matatías a Mariamne, la esposa de Herodes.'),
        tabla({
          titulo: 'Los gobernantes asmoneos',
          cab: ['Gobernante', 'Años', 'Título'],
          filas: [
            ['Judas Macabeo', '166–160 a.C.', 'Jefe militar'],
            ['Jonatán', '160–143 a.C.', 'Sumo sacerdote desde el 152 a.C.'],
            ['Simón', '142–134 a.C.', 'Sumo sacerdote, jefe y etnarca'],
            ['Juan Hircano I', '134–104 a.C.', 'Sumo sacerdote y etnarca'],
            ['Aristóbulo I', '104–103 a.C.', 'Sumo sacerdote y rey'],
            ['Alejandro Janeo', '103–76 a.C.', 'Sumo sacerdote y rey'],
            ['Salomé Alejandra', '76–67 a.C.', 'Reina (su hijo Hircano II, sumo sacerdote)'],
            ['Aristóbulo II', '67–63 a.C.', 'Sumo sacerdote y rey'],
            ['Hircano II', '63–40 a.C.', 'Sumo sacerdote y etnarca bajo Roma'],
            ['Antígono', '40–37 a.C.', 'Sumo sacerdote y rey, con apoyo de los partos']
          ]
        })
      ],
      texto: [
        'Después de la muerte de Judas, en el 160 a.C., los fieles eligieron como jefe a su hermano menor, Jonatán. Al principio tuvo que esconderse en el desierto de Tecoa, como David cuando huía de Saúl. Pero pronto encontró una oportunidad en las luchas internas del reino seléucida.',
        { h: 'Jonatán, sumo sacerdote por decreto de un rey griego' },
        'Dos pretendientes se disputaban el trono de Siria, Demetrio I y Alejandro Balas, y ambos buscaron el apoyo de Jonatán. Alejandro Balas ofreció más: en el 152 a.C. lo nombró sumo sacerdote y le envió una vestidura de púrpura y una corona de oro. En la fiesta de los tabernáculos de ese año, Jonatán se vistió con las ropas sagradas y ofició en el templo.',
        'Era un paso enorme. Jonatán era sacerdote, pero no de la familia de Sadoc, la que había ejercido el sumo sacerdocio desde Salomón y que Ezequiel señalaba como la línea de los sacerdotes fieles (Ez 44:15). Además, recibió el cargo de manos de un rey pagano. Muchos judíos piadosos nunca lo aceptaron. Una mayoría de los estudiosos piensa que el «sacerdote impío» del que hablan los rollos del mar Muerto, enemigo del fundador de la comunidad de Qumrán, fue Jonatán o su hermano Simón (ruta VII).',
        'Jonatán supo moverse entre los reyes sirios y amplió su poder, hasta que el general Trifón lo atrajo con engaños a Tolemaida, lo tomó prisionero y lo mató en el 143 a.C.',
        { h: 'Simón' },
        'El último hermano vivo, Simón, tomó el mando. Con él llegaría la independencia (V.5). Pero el modelo ya estaba establecido: el jefe de la nación sería también el sumo sacerdote, y el cargo quedaría en su familia. Lo que había empezado como una defensa de la ley terminó concentrando en una sola familia el poder político, militar y religioso.',
        { h: 'Un sacerdocio distinto' },
        'La ley separaba al rey, de la tribu de Judá, del sacerdote, de la tribu de Leví. Hebreos explica que Jesús es sacerdote, aunque vino de Judá, porque lo es «según el orden de Melquisedec» (He 7:11-17), el rey y sacerdote de Salem. Lo que los asmoneos tomaron por la fuerza, Cristo lo recibió por juramento de Dios: es Rey y Sacerdote para siempre.'
      ],
      pensar: 'Los asmoneos juntaron en sus manos el trono y el altar, y eso terminó corrompiéndolos. ¿Por qué es una buena noticia que ese doble oficio lo tenga solo Cristo?'
    },
    {
      id: 'independencia', n: 'La independencia de Judea', ref: 'Deuteronomio 18:15-18; Malaquías 4:5; Juan 1:21; Juan 6:14', fecha: [-142, -134],
      visual: [
        pasos([
          { t: '164 a.C.: Judas controla Judea, pero no el Acra de Jerusalén', fecha: -164, estado: { view: V.judea, capas: ['a-judas'], lugares: ['jerusalen', 'bet-sur', 'modin'] } },
          { t: '142 a.C.: Simón logra la independencia; toma Gezer y el puerto de Jope', fecha: -142, estado: { view: V.judea, capas: ['a-simon'], lugares: ['jerusalen', 'gezer', 'jope', 'bet-sur'] } },
          { t: '134 a.C.: Simón es asesinado en la fortaleza de Doc, cerca de Jericó', fecha: -134, estado: { view: V.judea, capas: ['a-simon'], lugares: ['jerico', 'jerusalen'] } }
        ]),
        cita('Deuteronomio 18:15', 'Profeta de en medio de ti, de tus hermanos, como yo, te levantará Jehová tu Dios; a él oiréis;')
      ],
      texto: [
        'En el 142 a.C., el rey seléucida Demetrio II, debilitado por una guerra civil, eximió a Judea del tributo. El primer libro de los Macabeos celebra ese momento diciendo que en ese año fue quitado de Israel el yugo de las naciones, y que el pueblo empezó a fechar sus documentos «en el año primero de Simón». Por primera vez desde la caída de Jerusalén en el 586 a.C., hacía más de cuatrocientos años, los judíos tenían un estado independiente.',
        { h: 'El Acra, Gezer y Jope' },
        'Simón completó la obra de sus hermanos. Tomó Gezer, una ciudad fuerte en el camino a la costa, y el puerto de Jope, que daba a Judea salida al mar. En el 141 a.C. obligó a rendirse a la guarnición griega del Acra, la fortaleza de Jerusalén que desde hacía veinticinco años dominaba el templo. Los judíos entraron en ella con alabanzas, ramas de palmera, arpas y címbalos. El libro describe esos años como una edad de oro: cada uno se sentaba bajo su vid y su higuera, como en los días de Salomón (1 R 4:25; Mi 4:4).',
        { h: '«Hasta que se levante un profeta fiel»' },
        'En el 140 a.C., una gran asamblea de sacerdotes, jefes y ancianos del pueblo confirmó a Simón como sumo sacerdote, jefe militar y gobernante de los judíos. El decreto, grabado en tablas de bronce en el monte Sion, decía que el cargo sería para siempre, hasta que se levantara un profeta digno de confianza.',
        'Esa frase muestra que el pueblo sabía dos cosas. La primera, que no tenía profeta, y que lo que estaba haciendo era provisorio. La segunda, que esperaba uno: el profeta como Moisés que Dios había prometido (Dt 18:15). Por eso, cuando apareció Juan el Bautista, le preguntaron: «¿Eres tú el profeta?» (Jn 1:21), y cuando Jesús multiplicó los panes, la gente dijo: «Este verdaderamente es el profeta que había de venir al mundo» (Jn 6:14).',
        { h: 'El fin de Simón' },
        'Simón renovó la alianza con Roma, que reconoció la independencia de Judea. Pero en el 134 a.C., su yerno Tolomeo, gobernador de Jericó, lo invitó a un banquete en la fortaleza de Doc y lo asesinó, junto con dos de sus hijos, para quedarse con el poder. El tercer hijo, Juan, que estaba en Gezer, escapó y tomó el gobierno. Todos los hijos de Matatías murieron de forma violenta.',
        { ejercicio: {
          pregunta: '¿Qué muestra la frase del decreto de Simón «hasta que se levante un profeta digno de confianza»?',
          opciones: [
            { t: 'Que Simón se consideraba a sí mismo el profeta prometido.', ok: false, por_que: 'El decreto dice lo contrario: su cargo valía mientras no viniera un profeta.' },
            { t: 'Que el pueblo reconocía que no tenía profeta y esperaba al que Dios había prometido.', ok: true, por_que: 'Es la esperanza del profeta como Moisés (Dt 18:15), que se cumple en Jesús (Hch 3:22-23).' },
            { t: 'Que los judíos ya no creían en los profetas.', ok: false, por_que: 'Al contrario: esperaban uno, y por eso preguntaron a Juan el Bautista si lo era.' }
          ],
          explicacion: 'La independencia no apagó la esperanza: el pueblo seguía esperando la palabra de Dios.'
        } }
      ],
      pensar: 'Después de cuatro siglos, Israel tuvo su propio estado, pero seguía esperando un profeta. ¿Puede algún logro humano llenar el lugar que solo la palabra de Dios puede ocupar?'
    },
    {
      id: 'hircano', n: 'Juan Hircano: Idumea y el monte Gerizim', ref: 'Juan 4:9; Juan 4:20; Malaquías 1:2-4; Mateo 2:1', fecha: [-134, -104],
      visual: [
        mapa({ view: V.palestina, capas: ['a-hircano'], lugares: ['jerusalen', 'monte-gerizim', 'samaria', 'maresa', 'madaba', 'jope'] }),
        tabla({
          titulo: 'Las conquistas de Juan Hircano',
          cab: ['Región', 'Qué hizo', 'Consecuencia en el Nuevo Testamento'],
          filas: [
            ['Transjordania', 'Tomó Medeba y otras ciudades', 'Perea, la región del otro lado del Jordán, se vuelve judía'],
            ['Samaria', 'Destruyó el templo del Gerizim (c. 111 a.C.) y la ciudad de Samaria', 'El odio entre judíos y samaritanos (Jn 4:9)'],
            ['Idumea', 'Obligó a los idumeos a circuncidarse y guardar la ley', 'Herodes, de familia idumea, será rey de los judíos (Mt 2:1)']
          ]
        })
      ],
      texto: [
        'Juan Hircano, hijo de Simón, gobernó treinta años, del 134 al 104 a.C. Comenzó con dificultades: el rey seléucida Antíoco VII sitió Jerusalén y lo obligó a pagar tributo. Pero en el 129 a.C. Antíoco VII murió peleando contra los partos, y el reino seléucida entró en una decadencia de la que no se recuperó. Hircano quedó libre para extender su territorio.',
        { h: 'El fin del templo del Gerizim' },
        'Hircano conquistó Siquem y destruyó el templo samaritano del monte Gerizim. Josefo ubica ese hecho en el 128 a.C.; las monedas encontradas en las excavaciones sugieren una fecha cercana al 111 a.C. Años después sitió y arrasó la ciudad de Samaria. Para los samaritanos fue una herida que nunca se cerró. Cuando Jesús pasó por Sicar, el santuario del Gerizim llevaba más de un siglo en ruinas, pero la mujer seguía diciendo: «Nuestros padres adoraron en este monte» (Jn 4:20).',
        { h: 'Los idumeos se vuelven judíos' },
        'Al sur, Hircano conquistó Idumea, la tierra de los descendientes de Esaú, que se habían establecido en el sur de Judá después del exilio. Según Josefo, les permitió quedarse con la condición de que se circuncidaran y guardaran la ley de los judíos. Así, los edomitas, enemigos de Israel desde los días de Jacob y Esaú (Mal 1:2-4), pasaron a ser parte del pueblo judío. Una generación después, una familia idumea, la de Antípatro, entraría al servicio de los asmoneos; y de ella saldría Herodes, el rey que gobernaba cuando nació Jesús (Mt 2:1).',
        { h: 'El sumo sacerdote y los fariseos' },
        'Hircano empezó como amigo de los fariseos, que ya eran un grupo influyente. Josefo cuenta que, en un banquete, un fariseo le pidió que dejara el sumo sacerdocio y se conformara con gobernar, insinuando que su madre había sido cautiva y que por eso él no podía ser sumo sacerdote. Hircano, ofendido, rompió con los fariseos y se pasó al partido de los saduceos (ruta VII). Desde entonces, la tensión entre la casa real y los fariseos marcaría la política judía.',
        'Hircano fue el primer asmoneo en acuñar sus propias monedas, con la inscripción «Juan el sumo sacerdote y el consejo de los judíos». El pequeño territorio de Judas Macabeo se había convertido en un estado que ocupaba casi toda la tierra de Israel.'
      ],
      pensar: 'Hircano obligó a los idumeos a aceptar la ley, pero no podía cambiar su corazón. ¿Por qué la fe verdadera nunca puede imponerse por la fuerza?'
    },
    {
      id: 'janeo', n: 'Alejandro Janeo y Salomé Alejandra', ref: 'Deuteronomio 17:14-20; Marcos 12:41-44; Proverbios 29:2', fecha: [-104, -67],
      visual: [
        mapa({ view: V.palestina, capas: ['h-asmoneo'], lugares: ['jerusalen', 'gaza', 'gadara', 'samaria', 'maqueronte', 'masada'] }),
        foto('moneda-janeo.webp', 'Las dos caras de una pequeña moneda de bronce: en una, dos cuernos de la abundancia con una granada entre ellos; en la otra, letras hebreas antiguas dentro de una corona', 'Moneda de bronce de Alejandro Janeo, con la inscripción en hebreo antiguo «Jonatán el sumo sacerdote y el consejo de los judíos». Las blancas que la viuda echó en el arca del templo eran monedas pequeñas de bronce como esta.', 'CC BY-SA 4.0 · Atzmonit (colección Itamar Atzmon), vía Wikimedia Commons', 'Foto de la moneda'),
        cita('Deuteronomio 17:18-19', 'Y cuando se siente sobre el trono de su reino, entonces escribirá para sí en un libro una copia de esta ley, del original que está al cuidado de los sacerdotes levitas; y lo tendrá consigo, y leerá en él todos los días de su vida, para que aprenda a temer a Jehová su Dios, para guardar todas las palabras de esta ley y estos estatutos, para ponerlos por obra;')
      ],
      texto: [
        'A la muerte de Juan Hircano, en el 104 a.C., su hijo Aristóbulo I encarceló a su madre y a tres de sus hermanos, hizo matar a otro, y fue el primero en llamarse rey. Murió al año siguiente. Su viuda, Salomé Alejandra, liberó a los hermanos presos y se casó con uno de ellos, Alejandro Janeo, que reinó del 103 al 76 a.C.',
        { h: 'Un rey guerrero' },
        'Janeo pasó casi todo su reinado en guerra. Conquistó las ciudades de la costa, desde el Carmelo hasta Gaza, que destruyó; tomó ciudades griegas al otro lado del Jordán y extendió el reino hasta un tamaño parecido al de David y Salomón. Construyó fortalezas como Maqueronte, donde más tarde sería encarcelado Juan el Bautista, y comenzó la de Masada. En sus monedas se llamaba en hebreo «Jonatán el rey», y en griego, «del rey Alejandro». Sus pequeñas monedas de bronce circularon durante más de un siglo; muchos estudiosos piensan que las dos blancas que echó la viuda en el arca del templo (Mr 12:42) eran monedas como esas.',
        { h: 'Un rey contra su pueblo' },
        'Pero Janeo fue también un sumo sacerdote violento, que el pueblo despreciaba. Josefo cuenta que, en una fiesta de los tabernáculos, mientras oficiaba en el altar, la multitud le arrojó los frutos de cidra que llevaba en las manos. Janeo respondió matando a seis mil personas. Siguió una guerra civil de seis años contra sus propios súbditos, encabezados por los fariseos, en la que murieron unos cincuenta mil judíos. Al final, según Josefo, hizo crucificar a ochocientos de sus enemigos en Jerusalén mientras banqueteaba con sus concubinas, y antes hizo degollar ante sus ojos a sus mujeres e hijos.',
        'La ley había dicho que el rey de Israel debía tener consigo una copia de la ley y leerla todos los días, «para que aprenda a temer a Jehová su Dios» y «para que no se eleve su corazón sobre sus hermanos» (Dt 17:19-20). Un siglo después de Judas Macabeo, sus descendientes se comportaban como los reyes paganos contra los que él había peleado.',
        { h: 'Salomé Alejandra, una reina en paz' },
        'Antes de morir, Janeo aconsejó a su esposa reconciliarse con los fariseos. Salomé Alejandra reinó nueve años, del 76 al 67 a.C. Fue un tiempo de paz que la memoria judía recordó con cariño. Puso como sumo sacerdote a su hijo mayor, Hircano II, y el ejército en manos del menor, Aristóbulo II. Los fariseos ganaron influencia en el gobierno y en el consejo de los ancianos. Pero la paz terminó con su muerte: sus dos hijos se disputarían el trono.'
      ],
      pensar: '«Cuando los justos dominan, el pueblo se alegra; mas cuando domina el impío, el pueblo gime» (Pr 29:2). ¿Oras por los que gobiernan, para que lo hagan con justicia?'
    },
    {
      id: 'hermanos', n: 'La guerra entre hermanos', ref: 'Marcos 3:24-25; Mateo 12:25; Santiago 4:1-2', fecha: [-67, -63],
      visual: [
        pasos([
          { t: '67 a.C.: Aristóbulo II vence a su hermano Hircano II cerca de Jericó', fecha: -67, estado: { view: V.judea, capas: ['h-asmoneo'], lugares: ['jerico', 'jerusalen'] } },
          { t: '65 a.C.: Hircano, aconsejado por Antípatro, se refugia con los nabateos y sitia Jerusalén', fecha: -65, estado: { view: V.palestina, lugares: ['petra', 'jerusalen', 'damasco'] } },
          { t: '63 a.C.: los dos hermanos piden a Pompeyo, en Damasco, que decida', fecha: -63, estado: { view: V.palestina, capas: ['roma-133'], lugares: ['damasco', 'jerusalen', 'jerico'], trazos: ['et-pompeyo'] } }
        ]),
        cita('Marcos 3:24-25', 'Si un reino está dividido contra sí mismo, tal reino no puede permanecer. Y si una casa está dividida contra sí misma, tal casa no puede permanecer.'),
        tabla({
          titulo: 'Los bandos de la guerra',
          cab: ['', 'Hircano II', 'Aristóbulo II'],
          filas: [
            ['Carácter', 'Tranquilo, sin ambición', 'Enérgico y ambicioso'],
            ['Apoyo judío', 'Los fariseos', 'Los saduceos y el ejército'],
            ['Aliados', 'Antípatro el idumeo y el rey nabateo Aretas III', 'Al principio, el legado romano Escauro'],
            ['Final', 'Sumo sacerdote bajo Roma; ejecutado por Herodes (30 a.C.)', 'Llevado preso a Roma; envenenado (49 a.C.)']
          ]
        })
      ],
      texto: [
        'Cuando murió Salomé Alejandra, en el 67 a.C., su hijo menor, Aristóbulo II, se levantó contra su hermano mayor, Hircano II. Lo venció cerca de Jericó y lo obligó a renunciar al trono y al sumo sacerdocio. Hircano, de carácter tranquilo, parecía conforme. Pero a su lado había un hombre que no lo estaba.',
        { h: 'Antípatro entra en escena' },
        'Antípatro era un idumeo, hijo de un gobernador de Idumea nombrado por Alejandro Janeo, rico e inteligente. Convenció a Hircano de que su vida corría peligro y de que debía recuperar lo que le correspondía. Lo llevó de noche a Petra, la capital de los nabateos, y consiguió que el rey Aretas III lo apoyara con un ejército a cambio de ciudades. Juntos sitiaron a Aristóbulo en el monte del templo.',
        'Josefo cuenta un episodio de ese sitio. Los partidarios de Hircano llevaron al campamento a un hombre justo llamado Onías, famoso porque Dios había respondido sus oraciones pidiendo lluvia, para que maldijera a Aristóbulo. Onías se negó: oró pidiendo que Dios no escuchara a ninguno de los dos bandos, porque los dos eran su pueblo y los dos eran sacerdotes. Lo mataron a pedradas.',
        { h: 'Roma decide' },
        'En ese momento, Roma estaba reorganizando el oriente. El general Pompeyo acababa de convertir a Siria en provincia romana, en el 64 a.C. Los dos hermanos enviaron regalos y embajadores a sus legados. En la primavera del 63 a.C., en Damasco, se presentaron ante Pompeyo Hircano, Aristóbulo y una tercera delegación del pueblo, que pedía terminar con la monarquía y volver al gobierno de los sacerdotes. Pompeyo postergó su decisión, pero Aristóbulo se impacientó, y Pompeyo marchó contra Jerusalén (ruta VI).',
        { h: 'Un reino dividido' },
        'Ochenta años después de la independencia, la ambición de dos hermanos entregó Judea a un imperio extranjero. Jesús lo diría como un principio: «Si un reino está dividido contra sí mismo, tal reino no puede permanecer» (Mr 3:24). Santiago preguntaría a las iglesias de dónde vienen las guerras y los pleitos: «¿No es de vuestras pasiones, las cuales combaten en vuestros miembros?» (Stg 4:1).'
      ],
      pensar: 'La pelea entre dos hermanos terminó con la libertad de toda una nación. ¿Hay alguna división en tu familia o en tu iglesia que estés alimentando en lugar de buscar la paz?'
    }
  ];

  window.__ET.asmoneos = asmoneos;
})();
/* Entre los Testamentos · ruta VI. Roma y Herodes (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const roma = [
    {
      id: 'pompeyo', n: 'Pompeyo entra en el Lugar Santísimo', ref: 'Levítico 16:2; Hebreos 9:7; Hebreos 10:19-20; Daniel 2:40', fecha: -63,
      visual: [
        img('pompeyo-templo.webp', 'En el interior del santuario del templo de Jerusalén, a la luz de un candelero de oro de siete brazos, el general romano Pompeyo, con coraza y capa púrpura, avanza hacia el velo del Lugar Santísimo seguido por oficiales romanos, mientras dos sacerdotes judíos con vestiduras de lino blanco lo miran horrorizados', 'Pompeyo entra en el santuario del templo (63 a.C.). Recreación.'),
        mapa({ view: V.levante, capas: ['roma-133'], lugares: ['damasco', 'jerusalen', 'antioquia'], trazos: ['et-pompeyo'] }),
        tabla({
          titulo: 'Lo que cambió con Pompeyo',
          cab: ['Antes (asmoneos)', 'Después (63 a.C.)'],
          filas: [
            ['Judea independiente', 'Judea paga tributo a Roma'],
            ['Un rey y sumo sacerdote', 'Hircano II, solo sumo sacerdote y jefe del pueblo, sin título de rey'],
            ['Un reino de la costa al otro lado del Jordán', 'Pierde la costa, Samaria y las ciudades griegas de la Decápolis'],
            ['Política propia', 'Bajo el gobernador romano de Siria']
          ]
        })
      ],
      texto: [
        'En el otoño del 63 a.C., Pompeyo, el general más poderoso de Roma, llegó a Jerusalén. Aristóbulo II se había rendido, pero sus partidarios se encerraron en el monte del templo, mientras los de Hircano abrían a los romanos las puertas de la ciudad. El sitio del templo duró tres meses.',
        { h: 'Un sitio en día de reposo' },
        'Josefo cuenta que los romanos aprovecharon el día de reposo para levantar sus terraplenes y acercar las máquinas de asedio, porque los judíos solo se defendían en sábado si eran atacados directamente. Cuando la muralla cedió, los soldados entraron en los atrios. Los sacerdotes siguieron ofreciendo los sacrificios mientras eran degollados junto al altar, sin abandonar el servicio. Murieron unos doce mil judíos.',
        { h: 'En el Lugar Santísimo' },
        'Entonces ocurrió lo que los judíos nunca olvidarían. Pompeyo, con algunos de sus oficiales, entró en el santuario y llegó hasta el Lugar Santísimo, donde solo el sumo sacerdote podía entrar una vez al año, el Día de la Expiación, «no sin sangre» (He 9:7). Vio el candelero, la mesa, los vasos de oro y los tesoros, pero según Josefo no tocó nada, y al día siguiente ordenó purificar el templo y reanudar los sacrificios. Los romanos se sorprendieron de que en el lugar más santo de los judíos no hubiera ninguna imagen de su Dios.',
        'Los Salmos de Salomón, escritos poco después por judíos piadosos, lloran esa profanación y la ven como castigo por los pecados de los gobernantes de Jerusalén.',
        ir('Ver en Los libros apócrifos: los Salmos de Salomón', R.apocrifos + '#pseudo/4'),
        { h: 'Roma, el cuarto reino' },
        'Desde ese día, Judea no volvió a ser libre hasta el siglo XX. Pompeyo restituyó a Hircano II como sumo sacerdote, pero sin título de rey; separó de Judea la costa, Samaria y las ciudades griegas; y llevó a Aristóbulo y a sus hijos a Roma, para exhibirlos en su desfile triunfal. Muchos cautivos judíos quedaron en Roma y, al ser liberados, formaron allí la comunidad judía que conocemos en Hechos y en la carta a los Romanos.',
        'Daniel había anunciado un cuarto reino «fuerte como hierro» que desmenuzaría y quebrantaría todo (Dn 2:40). En el 63 a.C., ese reino llegó a Jerusalén. Cuarenta años más tarde, sería bajo su dominio que nacería el Rey cuyo reino no tendrá fin (Dn 2:44; Lc 1:33).'
      ],
      pensar: 'Pompeyo entró en el Lugar Santísimo por la fuerza y salió sin encontrar a Dios. Jesús abrió para nosotros «el camino nuevo y vivo» por su sangre (He 10:19-20). ¿Te acercas a Dios con la confianza que Cristo te dio?'
    },
    {
      id: 'antipatro', n: 'Antípatro el idumeo', ref: 'Génesis 25:23; Abdías 1:10; Malaquías 1:2-3; Marcos 3:6', fecha: [-63, -43],
      visual: [
        mapa({ view: V.palestina, capas: ['nt-idumea', 'nt-judea', 'nt-galilea'], lugares: ['jerusalen', 'maresa', 'petra', 'seforis'] }),
        tabla({
          titulo: 'La familia de Antípatro',
          cab: ['Persona', 'Relación', 'Qué hizo'],
          filas: [
            ['Antípatro', 'Idumeo, consejero de Hircano II', 'Gobierna Judea en la práctica; envenenado en el 43 a.C.'],
            ['Cipros', 'Su esposa, de familia noble nabatea', 'Madre de sus hijos'],
            ['Fasael', 'Hijo mayor', 'Gobernador de Jerusalén; muere prisionero de los partos (40 a.C.)'],
            ['Herodes', 'Segundo hijo', 'Gobernador de Galilea a los veinticinco años; rey de Judea desde el 40 a.C.'],
            ['Feroras', 'Hijo menor', 'Tetrarca de Perea bajo su hermano'],
            ['Salomé', 'Hija', 'Intrigó contra Mariamne y sus hijos']
          ]
        }),
        cita('Abdías 1:10', 'Por la injuria a tu hermano Jacob te cubrirá vergüenza, y serás cortado para siempre.')
      ],
      texto: [
        'Mientras Hircano II tenía el título de sumo sacerdote, el poder real estaba en manos de su consejero, Antípatro. Era un idumeo, es decir, descendiente de los edomitas que Juan Hircano había obligado a hacerse judíos medio siglo antes (V.6). Para muchos judíos piadosos, nunca dejó de ser un extranjero.',
        { h: 'Un hombre al lado de Roma' },
        'Antípatro entendió antes que nadie que el futuro de Judea se decidía en Roma, y apostó siempre por el romano más fuerte. Cuando Julio César quedó atrapado en Alejandría, en el 47 a.C., Antípatro llegó en su ayuda con tres mil soldados judíos y convenció a los judíos de Egipto de apoyarlo. César lo recompensó con la ciudadanía romana y lo nombró procurador de Judea, a la vez que confirmaba a Hircano como sumo sacerdote y jefe de los judíos. También concedió privilegios a los judíos de todo el imperio: libertad para reunirse, guardar el sábado y enviar dinero al templo.',
        { h: 'Herodes ante el Sanedrín' },
        'Antípatro puso a sus hijos en el gobierno: Fasael en Jerusalén y Herodes, de unos veinticinco años, en Galilea. Herodes persiguió con éxito a una banda de salteadores y ejecutó a su jefe, Ezequías, sin juicio. Los líderes de Jerusalén protestaron, porque solo el consejo podía condenar a muerte, y Herodes fue citado ante el Sanedrín. Es la primera vez que Josefo usa esa palabra para el tribunal de los judíos (ruta VII). Herodes llegó vestido de púrpura y con guardia armada, y los jueces callaron. Solo uno, Samaías, se atrevió a advertir que ese joven algún día los castigaría a todos. Hircano suspendió el juicio y Herodes se fue.',
        'En el 43 a.C., Antípatro murió envenenado. Pero su familia ya estaba instalada en el poder.',
        { h: 'Esaú y Jacob' },
        'Siglos antes, Dios había dicho a Rebeca que dos naciones estaban en su vientre, y que «el mayor servirá al menor» (Gn 25:23). Edom fue durante siglos enemigo de Israel, y Abdías lo reprendió por la violencia contra su hermano Jacob (Abd 1:10). Ahora, por una vuelta de la historia, un descendiente de Esaú iba a sentarse en el trono de Jerusalén. Y ese rey, Herodes, intentaría matar al Hijo de David recién nacido (Mt 2:16).'
      ],
      pensar: 'Antípatro siempre se puso del lado del más fuerte. ¿De qué lado te pones tú cuando seguir a Cristo no es lo más conveniente?'
    },
    {
      id: 'herodes', n: 'Herodes, rey de los judíos', ref: 'Mateo 2:1-18; Lucas 1:5; Juan 18:36', fecha: [-40, -4],
      visual: [
        img('herodes-obras.webp', 'En lo alto de una colina artificial en forma de cono, en el desierto de Judea, el rey Herodes, de unos sesenta años, con manto púrpura y diadema, revisa planos sobre una mesa con su arquitecto mientras cientos de obreros levantan los muros circulares de la fortaleza del Herodión', 'Herodes supervisa la construcción del Herodión. Recreación.'),
        mapa({ view: V.palestina, capas: ['h-herodes'], lugares: ['jerusalen', 'cesarea', 'samaria', 'masada', 'herodion', 'maqueronte', 'jerico'] }),
        tabla({
          titulo: 'Herodes en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombrado rey', 'Por el Senado romano, en el 40 a.C.'],
            ['Reinó', 'Del 37 a.C., cuando tomó Jerusalén, hasta su muerte en el 4 a.C.'],
            ['Esposas', 'Diez; entre ellas Mariamne, nieta de Hircano II y de Aristóbulo II'],
            ['Construcciones', 'El templo, la fortaleza Antonia, Cesarea y su puerto, Sebaste, Masada, el Herodión, Maqueronte, palacios en Jericó'],
            ['Víctimas en su familia', 'Su cuñado Aristóbulo III, Hircano II, su esposa Mariamne, la madre de ella y tres de sus propios hijos'],
            ['En el Nuevo Testamento', 'Rey cuando nacen Juan el Bautista y Jesús (Lc 1:5; Mt 2:1)']
          ]
        })
      ],
      texto: [
        'En el 40 a.C., los partos, enemigos de Roma, invadieron Siria y Judea, y pusieron como rey y sumo sacerdote a Antígono, el último hijo de Aristóbulo II. Hircano fue mutilado de las orejas para que no pudiera volver a ser sumo sacerdote, y Fasael murió prisionero. Herodes escapó con su familia a Masada, la dejó allí y viajó a Roma. Allí, con el apoyo de Marco Antonio y Octavio, el Senado lo declaró rey de Judea. Volvió con un ejército romano y, en el 37 a.C., después de un sitio de cinco meses, tomó Jerusalén. Antígono fue decapitado. Terminaba la dinastía asmonea.',
        { h: 'Un rey constructor' },
        'Herodes reinó treinta y tres años. Fue un administrador hábil y un gran constructor: levantó Cesarea Marítima con su puerto artificial, reconstruyó Samaria con el nombre de Sebaste, construyó fortalezas y palacios en Masada, Maqueronte, Jericó y el Herodión, donde fue sepultado, y reconstruyó el templo de Jerusalén (VI.4).',
        { h: 'Un rey temeroso' },
        'Pero Herodes vivía con miedo a perder el trono. Para ganar legitimidad se casó con Mariamne, una princesa asmonea, y luego hizo morir a todos los que podían hacerle sombra: ahogó en una piscina de Jericó a su cuñado Aristóbulo III, de diecisiete años, a quien él mismo había nombrado sumo sacerdote; ejecutó al anciano Hircano II, a Mariamne, a la madre de ella y a tres de sus propios hijos, el último cinco días antes de morir. Un escritor romano cuenta que Augusto bromeaba diciendo que era mejor ser cerdo de Herodes que hijo de Herodes.',
        'Con ese carácter, no sorprende lo que cuenta Mateo. Cuando los magos preguntaron por el rey de los judíos que había nacido, «el rey Herodes se turbó, y toda Jerusalén con él» (Mt 2:3); y cuando se vio burlado, mandó matar a todos los niños menores de dos años de Belén (Mt 2:16). Herodes murió poco después, en Jericó, y su reino se repartió entre sus hijos Arquelao, Antipas y Felipe.',
        'La historia de sus descendientes se estudiará en La dinastía de Herodes (en preparación).',
        { posturas: {
          titulo: '¿Cuándo murió Herodes?',
          a: { n: 'En el 4 a.C.', t: 'La fecha más aceptada, según Josefo y los reinados de sus hijos. Jesús habría nacido hacia el 6–5 a.C.' },
          b: { n: 'En el 1 a.C.', t: 'Algunos estudiosos proponen otra cuenta y ubican el nacimiento de Jesús hacia el 3–2 a.C.' },
          c: 'En ambos casos Jesús nació en días de Herodes, como dice el evangelio. El desfase con el año 1 se debe a un cálculo del monje Dionisio el Exiguo, en el siglo VI.'
        } }
      ],
      pensar: 'Herodes tenía todo el poder y vivía con miedo a perderlo, hasta querer matar a un niño. Jesús dijo: «Mi reino no es de este mundo» (Jn 18:36). ¿Qué temores te quita saber que tu vida está en el reino de Cristo?'
    },
    {
      id: 'templo', n: 'El templo reconstruido por Herodes', ref: 'Hageo 2:7-9; Juan 2:19-21; Marcos 13:1-2; Malaquías 3:1', fecha: [-20, 64],
      visual: [
        img('../imperio-romano/img/roma-templo-herodes.webp', 'El templo de Jerusalén ampliado por Herodes, con sus grandes atrios y pórticos, visto desde el monte de los Olivos', 'El templo de Herodes desde el monte de los Olivos. Recreación.'),
        cita('Juan 2:19-21', 'Respondió Jesús y les dijo: Destruid este templo, y en tres días lo levantaré. Dijeron luego los judíos: En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás? Mas él hablaba del templo de su cuerpo.'),
        tabla({
          titulo: 'La obra de Herodes en el templo',
          cab: ['', ''],
          filas: [
            ['Comienzo', 'Año 18 de su reinado, 20–19 a.C.'],
            ['El santuario', 'Construido en un año y medio por mil sacerdotes formados como albañiles'],
            ['Los atrios y pórticos', 'Ocho años; la obra siguió hasta el 63–64 d.C.'],
            ['La explanada', 'Duplicada con enormes muros de contención; su muro occidental se conserva'],
            ['Destrucción', 'Por los romanos de Tito, en el 70 d.C.']
          ]
        })
      ],
      texto: [
        'El templo que habían reconstruido Zorobabel y Josué después del exilio tenía casi quinientos años y se veía pobre al lado de los edificios griegos y romanos. En el 20 o 19 a.C., en el año dieciocho de su reinado, Herodes anunció que lo reconstruiría con un esplendor digno de Jerusalén. Quería ganarse al pueblo, que lo despreciaba, y dejar un monumento a su nombre.',
        { h: 'Una obra cuidadosa' },
        'Los judíos temían que, al derribar el templo viejo, Herodes no construyera el nuevo. Por eso preparó todos los materiales antes de empezar. Como solo los sacerdotes podían entrar en el santuario, hizo enseñar el oficio de albañil y carpintero a mil sacerdotes, que construyeron el santuario en un año y medio sin que se interrumpieran los sacrificios. Los atrios y los pórticos tomaron ocho años más, y los trabajos siguieron, con mejoras y reparaciones, hasta pocos años antes de su destrucción.',
        'Herodes duplicó la superficie del monte del templo con muros de contención hechos de piedras enormes, algunas de más de cien toneladas. Uno de esos muros, el muro occidental, se conserva hasta hoy. Los rabinos posteriores dijeron que quien no había visto el edificio de Herodes no había visto nunca un edificio hermoso. Los discípulos de Jesús pensaban lo mismo: «Maestro, mira qué piedras, y qué edificios» (Mr 13:1).',
        { h: 'Cuarenta y seis años' },
        'Cuando Jesús purificó el templo al comienzo de su ministerio, los judíos le dijeron: «En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás?» (Jn 2:20). Contando desde el 20–19 a.C., eso nos lleva al año 27 o 28 d.C., una de las claves para fechar el ministerio de Jesús. Juan aclara que él hablaba del templo de su cuerpo (Jn 2:21).',
        { h: 'La gloria mayor' },
        'Hageo había prometido, a los que lloraban por la pobreza del segundo templo, que «la gloria postrera de esta casa será mayor que la primera» (Hag 2:9), y Malaquías, que el Señor vendría súbitamente a su templo (Mal 3:1). La gloria mayor de esa casa no fueron las piedras de Herodes, que Jesús anunció que serían derribadas (Mr 13:2), sino la presencia del Hijo de Dios enseñando en sus atrios.',
        ir('Recorrer el templo de Herodes en 3D', R.templo)
      ],
      pensar: 'Los discípulos admiraban las piedras del templo; Jesús les habló de su cuerpo como el verdadero templo. ¿Qué admiras más en tu vida de fe: lo que se ve o la presencia de Cristo?'
    },
    {
      id: 'augusto', n: 'Augusto y la paz romana', ref: 'Lucas 2:1-14; Gálatas 4:4; Daniel 2:44', fecha: [-31, 14],
      visual: [
        img('../imperio-romano/img/roma-augusto.webp', 'El emperador Augusto con toga y corona de laurel, de pie en un salón de mármol del palacio', 'Augusto, el emperador del nacimiento de Jesús. Recreación.'),
        mapa({ view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'accion', 'alejandria', 'jerusalen', 'cesarea', 'samaria'] }),
        cita('Lucas 2:10-11', 'Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor.'),
        tabla({
          titulo: 'Los títulos de Augusto y los de Cristo',
          cab: ['Lo que se decía de Augusto', 'Lo que el ángel anunció de Jesús'],
          filas: [
            ['Hijo del divino (César)', 'Hijo del Altísimo (Lc 1:32)'],
            ['Salvador del mundo', 'Un Salvador, que es Cristo el Señor (Lc 2:11)'],
            ['Su nacimiento, comienzo de buenas noticias para el mundo', 'Nuevas de gran gozo para todo el pueblo (Lc 2:10)'],
            ['Trajo la paz al imperio', 'En la tierra paz, buena voluntad para con los hombres (Lc 2:14)']
          ],
          nota: 'Los títulos de Augusto aparecen en inscripciones de la época, como la de Priene, en Asia Menor (9 a.C.).'
        })
      ],
      texto: [
        'Mientras Herodes reinaba en Judea, Roma vivía su propia transformación. Después del asesinato de Julio César, en el 44 a.C., estallaron guerras civiles que terminaron en el 31 a.C. con la batalla naval de Accio, donde Octavio, sobrino nieto de César, venció a Marco Antonio y Cleopatra. Herodes había apoyado a Antonio, pero se presentó ante el vencedor sin su diadema y le prometió la misma lealtad. Octavio lo confirmó como rey y le amplió el reino.',
        { h: 'El primer emperador' },
        'En el 27 a.C., el Senado dio a Octavio el título de Augusto, «el venerable». Gobernó hasta el 14 d.C. como el primer emperador de Roma, aunque mantuvo la apariencia de la república. Terminó con un siglo de guerras civiles e inauguró la llamada paz romana, que duró unos doscientos años. Los caminos y los mares se volvieron seguros, se construyeron calzadas por todo el imperio y el comercio floreció.',
        'Augusto fue también objeto de culto. Se lo llamaba «hijo del divino» César, y en muchas ciudades se le dedicaron templos. Herodes mismo le construyó templos en Cesarea y en Sebaste. Una inscripción de la ciudad de Priene, del 9 a.C., dice que el nacimiento de Augusto fue para el mundo el comienzo de las buenas noticias, usando en griego la misma palabra que el Nuevo Testamento usa para el evangelio.',
        { h: '«Aconteció en aquellos días…»' },
        'Lucas comienza el relato del nacimiento de Jesús nombrando a ese emperador: «Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado» (Lc 2:1). El hombre más poderoso de la tierra dio una orden desde Roma, y una pareja de Nazaret tuvo que viajar a Belén, donde los profetas habían dicho que nacería el Mesías (Mi 5:2).',
        'Y en los campos de Belén, el ángel anunció a unos pastores las verdaderas buenas noticias: «os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor» (Lc 2:11). La paz de Augusto se mantenía con legiones; la paz que cantaron los ángeles venía de Dios. Daniel lo había anunciado: en los días de esos reyes, «el Dios del cielo levantará un reino que no será jamás destruido» (Dn 2:44).',
        ir('Ver en El imperio romano: el censo de Cirenio', R.romano)
      ],
      pensar: 'Augusto se hacía llamar salvador e hijo de un dios; el verdadero Salvador nació en un pesebre. ¿A quién reconoces tú como Señor cuando otros poderes reclaman tu lealtad?'
    }
  ];

  window.__ET.roma = roma;
})();
/* Entre los Testamentos · ruta VII. Lo que nació en estos siglos (ver encabezado en parte1.js)
   Cada grupo o institución se estudia en su origen; su actuación en los evangelios va en El mundo judío
   en tiempos de Jesús (nº 91, en preparación). */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const nacio = [
    {
      id: 'sinagoga', n: 'La sinagoga', ref: 'Lucas 4:16-21; Hechos 13:14-15; Hechos 15:21; Hechos 16:13', fecha: [-250, 70],
      visual: [
        img('../imperio-griego/img/grecia-sinagoga.webp', 'Una sinagoga del siglo I con hombres judíos sentados en bancos de piedra escuchando la lectura de un rollo', 'Una sinagoga del siglo I. Recreación.'),
        foto('inscripcion-teodoto.webp', 'Placa de piedra caliza con diez líneas de texto griego tallado, la inscripción de Teodoto', 'Réplica de la inscripción de Teodoto, de una sinagoga de Jerusalén anterior al año 70: dice que fue construida «para la lectura de la ley y la enseñanza de los mandamientos».', 'CC BY-SA 3.0 · Sodabottle, vía Wikimedia Commons (réplica en el Museo ANU, Tel Aviv)', 'Foto de la réplica'),
        cita('Hechos 15:21', 'Porque Moisés desde tiempos antiguos tiene en cada ciudad quien lo predique en las sinagogas, donde es leído cada día de reposo.'),
        tabla({
          titulo: 'Una reunión en la sinagoga',
          cab: ['Momento', 'Qué se hacía', 'En el Nuevo Testamento'],
          filas: [
            ['Confesión de fe', 'Se recitaba el «Oye, Israel» (Dt 6:4-9)', 'Marcos 12:29'],
            ['Oraciones', 'Bendiciones y peticiones dirigidas por un miembro', 'Mateo 6:5'],
            ['Lectura de la ley', 'Se leía una porción de los libros de Moisés', 'Hechos 13:15'],
            ['Lectura de los profetas', 'Se leía un pasaje de los profetas', 'Lucas 4:17'],
            ['Explicación', 'Uno de los presentes explicaba lo leído', 'Lucas 4:20-21; Hechos 13:15-16'],
            ['Bendición', 'Si había un sacerdote, daba la bendición', 'Números 6:24-26']
          ]
        })
      ],
      texto: [
        'Sinagoga es una palabra griega que significa reunión. Designaba tanto al grupo de judíos que se reunían como al edificio donde lo hacían. El Antiguo Testamento no la menciona; en los evangelios aparece en cada aldea. Jesús «entró en la sinagoga, conforme a su costumbre, y se levantó a leer» (Lc 4:16), y Pablo comenzaba siempre su predicación en la sinagoga de cada ciudad.',
        { h: 'Un origen que no se conoce con certeza' },
        'Muchos piensan que la costumbre de reunirse para leer la ley y orar nació en el exilio, cuando los judíos no tenían templo, o en los días de Esdras, cuando el pueblo se juntó a escuchar la ley (Neh 8). Las primeras pruebas seguras vienen de Egipto: inscripciones del siglo III a.C., en tiempos de Ptolomeo III, que dedican lugares de oración judíos, con la misma palabra griega que Lucas usa en Filipos, donde «solía hacerse la oración» (Hch 16:13). En la tierra de Israel, los edificios más antiguos que se han excavado, en Gamla, Masada, el Herodión y Magdala, son del siglo I a.C. y del siglo I d.C.',
        { h: 'Lo que se hacía' },
        'La sinagoga no era un templo: allí no se ofrecían sacrificios, que solo se ofrecían en Jerusalén. Era una casa de oración y de estudio. Cada sábado se leía una porción de la ley de Moisés y otra de los profetas, y alguien la explicaba. Un jefe de la sinagoga organizaba el culto e invitaba a los que hablarían, como hicieron con Pablo en Antioquía de Pisidia: «Varones hermanos, si tenéis alguna palabra de exhortación para el pueblo, hablad» (Hch 13:15). Durante la semana servía de escuela, de tribunal local y de lugar de reunión de la comunidad.',
        'Una inscripción hallada en Jerusalén, anterior al año 70, cuenta que un sacerdote llamado Teodoto construyó una sinagoga «para la lectura de la ley y la enseñanza de los mandamientos», con un albergue para los peregrinos que venían del extranjero.',
        { h: 'Un instrumento de Dios' },
        'La sinagoga mantuvo viva la Palabra de Dios en cada pueblo judío del imperio. Jacobo lo dijo en el concilio de Jerusalén: «Moisés desde tiempos antiguos tiene en cada ciudad quien lo predique en las sinagogas, donde es leído cada día de reposo» (Hch 15:21). Y las primeras iglesias, que se reunían para leer la Escritura, orar y enseñar, heredaron mucho de su forma.',
        'La sinagoga de Magdala, contemporánea de Jesús, se estudiará en su propio recurso (en preparación).'
      ],
      pensar: 'Jesús iba a la sinagoga «conforme a su costumbre». ¿Tienes tú la costumbre de reunirte con la iglesia para oír la Palabra, aun cuando no tienes ganas?'
    },
    {
      id: 'escribas', n: 'Los escribas y la tradición oral', ref: 'Esdras 7:6, 10; Marcos 7:1-13; Mateo 23:2-3; Hechos 22:3', fecha: [-450, 70],
      visual: [
        img('../de-la-biblia-a-nosotros/img/escriba-copia.webp', 'Un escriba judío anciano copia con cálamo un rollo de la ley sobre pergamino, a la luz de una lámpara de aceite, con el rollo modelo abierto a su lado', 'Un escriba copia la ley. Recreación.'),
        cita('Marcos 7:6-8', 'Respondiendo él, les dijo: Hipócritas, bien profetizó de vosotros Isaías, como está escrito: Este pueblo de labios me honra, Mas su corazón está lejos de mí. Pues en vano me honran, Enseñando como doctrinas mandamientos de hombres. Porque dejando el mandamiento de Dios, os aferráis a la tradición de los hombres: los lavamientos de los jarros y de los vasos de beber; y hacéis otras muchas cosas semejantes.'),
        tabla({
          titulo: 'Maestros de la ley en tiempos de Jesús',
          cab: ['Maestro', 'Época', 'Lo que se sabe'],
          filas: [
            ['Hillel', 'Fines del siglo I a.C.', 'Venido de Babilonia; escuela flexible; resumió la ley en no hacer al prójimo lo que uno aborrece'],
            ['Samai', 'Fines del siglo I a.C.', 'Escuela más estricta, por ejemplo sobre el divorcio'],
            ['Gamaliel', 'Siglo I d.C.', 'Nieto de Hillel; maestro de Pablo; aconsejó prudencia al Sanedrín (Hch 5:34-39; 22:3)']
          ],
          nota: 'Las discusiones entre las escuelas de Hillel y Samai sobre el divorcio ayudan a entender la pregunta de Mateo 19:3.'
        })
      ],
      texto: [
        'Esdras era «escriba diligente en la ley de Moisés» (Esd 7:6). En el Antiguo Testamento, un escriba era un secretario o copista. Después del exilio, la palabra pasó a designar a los estudiosos de la ley: hombres que la copiaban, la interpretaban y la enseñaban. En los evangelios se los llama también intérpretes de la ley o doctores de la ley, y sus discípulos los llamaban «rabí», mi maestro.',
        { h: 'Un oficio honrado' },
        'Hacia el 180 a.C., Ben Sira describió al escriba como el sabio que estudia la ley del Altísimo, busca la sabiduría de los antiguos y se ocupa de las profecías, en contraste con el campesino o el artesano, que no tienen tiempo para el estudio. Los escribas no eran necesariamente sacerdotes; venían de todas las clases sociales. Muchos de ellos eran fariseos, y por eso los evangelios los nombran juntos.',
        { h: 'La tradición de los ancianos' },
        'Para aplicar la ley a la vida diaria, los escribas formularon una enorme cantidad de reglas: qué trabajos estaban prohibidos en el día de reposo, cómo lavar las manos antes de comer, cómo dar el diezmo de cada hierba del huerto. Esas explicaciones se transmitían de maestro a discípulo, de memoria, y se llamaban «la tradición de los ancianos» (Mr 7:3). Los fariseos enseñaban que tenía casi la misma autoridad que la ley escrita, porque venía, decían, de Moisés. Esa tradición se puso por escrito alrededor del año 200 d.C., en la Misná.',
        'En el tiempo de Herodes se destacaron dos grandes maestros, Hillel y Samai, con escuelas que discutían sobre casi todo. Gamaliel, nieto de Hillel, fue el maestro de Pablo: «instruido a los pies de Gamaliel, estrictamente conforme a la ley de nuestros padres» (Hch 22:3).',
        { h: 'Lo que Jesús reconoció y lo que reprendió' },
        'Jesús reconoció la autoridad de los escribas como maestros de la ley: «En la cátedra de Moisés se sientan los escribas y los fariseos. Así que, todo lo que os digan que guardéis, guardadlo y hacedlo; mas no hagáis conforme a sus obras» (Mt 23:2-3). Pero reprendió con dureza que la tradición ocupara el lugar de la Palabra: «Porque dejando el mandamiento de Dios, os aferráis a la tradición de los hombres» (Mr 7:8). La tradición de los ancianos les permitía, por ejemplo, dejar sin ayuda a los padres con el pretexto de una ofrenda (Mr 7:10-13).'
      ],
      pensar: 'Jesús no rechazó a los maestros, sino la tradición que anulaba la Palabra. ¿Hay costumbres en tu vida cristiana que pesan más que lo que Dios dice en la Escritura?'
    },
    {
      id: 'fariseos', n: 'Los fariseos', ref: 'Hechos 23:6-9; Filipenses 3:5; Hechos 26:5; Mateo 23:23; Juan 3:1-2', fecha: [-145, 70],
      visual: [
        img('debate-templo.webp', 'En un pórtico de columnas del templo de Jerusalén, un grupo de fariseos con mantos sencillos y flecos azules en las esquinas, uno de ellos con una cajita de cuero atada en la frente, discute con firmeza frente a un grupo de sacerdotes saduceos de vestimenta lujosa y aspecto aristocrático; algunos peregrinos observan', 'Fariseos y saduceos discuten en los atrios del templo. Recreación.'),
        cita('Hechos 23:6-8', 'Entonces Pablo, notando que una parte era de saduceos y otra de fariseos, alzó la voz en el concilio: Varones hermanos, yo soy fariseo, hijo de fariseo; acerca de la esperanza y de la resurrección de los muertos se me juzga. Cuando dijo esto, se produjo disensión entre los fariseos y los saduceos, y la asamblea se dividió. Porque los saduceos dicen que no hay resurrección, ni ángel, ni espíritu; pero los fariseos afirman estas cosas.')
      ],
      texto: [
        'La palabra fariseo viene probablemente del hebreo perushim, «separados». No se sabe con certeza de qué se separaban: de la impureza, de los paganos o de la gente que no guardaba la ley. Muchos historiadores piensan que nacieron de los asideos, los piadosos que resistieron la helenización en tiempos de Antíoco IV (ruta IV). Josefo los menciona por primera vez en tiempos de Jonatán, hacia el 145 a.C.',
        { h: 'Un movimiento del pueblo' },
        'Los fariseos no eran sacerdotes, aunque algunos lo fueran. Eran, en su mayoría, hombres del pueblo que se proponían vivir toda la ley en la vida diaria, también las reglas de pureza que la ley daba para los sacerdotes del templo. Se reunían en grupos, comían juntos cuidando la pureza de los alimentos y daban el diezmo de todo, hasta de la menta y el comino (Mt 23:23). El pueblo los respetaba como los más fieles.',
        'Su historia estuvo ligada a la de los asmoneos. Rompieron con Juan Hircano (V.6), encabezaron la guerra civil contra Alejandro Janeo, que hizo crucificar a ochocientos de ellos (V.7), y alcanzaron gran influencia con la reina Salomé Alejandra. Josefo dice que en tiempos de Herodes eran unos seis mil, y que se negaron a jurarle lealtad.',
        { h: 'Lo que creían' },
        'Los fariseos creían en la resurrección de los muertos, en los ángeles y los espíritus, en el juicio futuro, y en que Dios gobierna la historia sin quitar la responsabilidad humana. Esperaban un Mesías, hijo de David. Y daban gran autoridad a la tradición oral (VII.2). En muchas doctrinas estaban más cerca del evangelio que cualquier otro grupo. Pablo pudo decir ante el Sanedrín: «Yo soy fariseo, hijo de fariseo; acerca de la esperanza y de la resurrección de los muertos se me juzga» (Hch 23:6).',
        { h: 'Lo bueno y lo peligroso' },
        'En los evangelios, Jesús enfrenta muchas veces a los fariseos, sobre todo por la hipocresía de algunos, que cuidaban los detalles de la ley y descuidaban «lo más importante de la ley: la justicia, la misericordia y la fe» (Mt 23:23), y por poner su tradición por encima de la Palabra. Pero no todos eran iguales. Nicodemo, fariseo y principal de los judíos, buscó a Jesús de noche (Jn 3:1-2); Gamaliel aconsejó no oponerse a los apóstoles (Hch 5:34-39); y Pablo, «conforme a la más rigurosa secta de nuestra religión», vivió fariseo hasta que Cristo lo alcanzó (Hch 26:5).',
        { ejercicio: {
          pregunta: '¿Por qué los fariseos defendieron a Pablo en Hechos 23?',
          opciones: [
            { t: 'Porque se habían convertido a Cristo.', ok: false, por_que: 'Algunos fariseos creyeron (Hch 15:5), pero en Hechos 23 lo defienden por otra razón.' },
            { t: 'Porque Pablo dijo que lo juzgaban por la resurrección, que los fariseos creían y los saduceos negaban.', ok: true, por_que: 'La resurrección era una diferencia central entre los dos grupos, nacida en estos siglos (Hch 23:8).' },
            { t: 'Porque Pablo era sacerdote del templo.', ok: false, por_que: 'Pablo era de la tribu de Benjamín (Fil 3:5), no sacerdote.' }
          ],
          explicacion: 'Conocer el origen de los grupos ayuda a entender escenas como esta.'
        } }
      ],
      pensar: 'Los fariseos sabían mucho de la ley, pero algunos descuidaron la misericordia. ¿Puede tu conocimiento de la Biblia volverse orgullo si no lleva a la misericordia?'
    },
    {
      id: 'saduceos', n: 'Los saduceos', ref: 'Mateo 22:23-33; Hechos 4:1-2; Hechos 5:17; Éxodo 3:6', fecha: [-130, 70],
      visual: [
        cita('Mateo 22:31-32', 'Pero respecto a la resurrección de los muertos, ¿no habéis leído lo que os fue dicho por Dios, cuando dijo: Yo soy el Dios de Abraham, el Dios de Isaac y el Dios de Jacob? Dios no es Dios de muertos, sino de vivos.'),
        tabla({
          titulo: 'Los grupos judíos en tiempos de Jesús',
          cab: ['', 'Fariseos', 'Saduceos', 'Esenios'],
          filas: [
            ['Origen probable', 'Los asideos de la crisis macabea', 'La aristocracia sacerdotal de Jerusalén', 'Los asideos; sacerdotes que rechazaron a los asmoneos'],
            ['Quiénes eran', 'Laicos y escribas, respetados por el pueblo', 'Sacerdotes principales y familias ricas', 'Comunidades apartadas'],
            ['Autoridad', 'La ley escrita y la tradición oral', 'Solo la ley escrita', 'La ley y las enseñanzas de su Maestro'],
            ['Resurrección y ángeles', 'Creían', 'Negaban', 'Creían'],
            ['Relación con el templo', 'Participaban, pero su centro era la ley', 'Lo controlaban', 'Lo consideraban contaminado'],
            ['Relación con Roma', 'Tolerancia con distancia', 'Colaboración', 'Rechazo'],
            ['En el Nuevo Testamento', 'Muchas veces', 'Varias veces, junto al sumo sacerdote', 'No se nombran']
          ],
          nota: 'Josefo menciona además la «cuarta filosofía», que dio origen a los zelotes en el siglo I d.C.'
        })
      ],
      texto: [
        'Los saduceos eran el otro gran partido judío. Su nombre viene probablemente de Sadoc, el sumo sacerdote de Salomón, cuya familia había ejercido el sacerdocio durante siglos. No eran un movimiento popular, sino el grupo de las familias sacerdotales principales y de los ricos de Jerusalén. Controlaban el templo, sus tesoros y el sumo sacerdocio.',
        { h: 'Cerca del poder' },
        'Los saduceos aparecen en la historia junto a los asmoneos, que eran a la vez reyes y sumos sacerdotes. Cuando Juan Hircano rompió con los fariseos, se apoyó en ellos (V.6), y lo mismo hizo Alejandro Janeo. Más tarde, bajo Herodes y los romanos, siguieron ocupando los cargos del templo. Eran prácticos: preferían colaborar con quien tuviera el poder, con tal de mantener el orden y el culto del templo. Caifás, sumo sacerdote cuando murió Jesús, expresó esa manera de pensar: «os conviene que un hombre muera por el pueblo, y no que toda la nación perezca» (Jn 11:50).',
        { h: 'Lo que creían' },
        'Los saduceos solo reconocían como norma la ley escrita, y rechazaban la tradición oral de los fariseos. Negaban la resurrección de los muertos, el juicio futuro, los ángeles y los espíritus: «los saduceos dicen que no hay resurrección, ni ángel, ni espíritu» (Hch 23:8). Para ellos, la recompensa de Dios se recibía en esta vida.',
        { h: 'Jesús les responde con la ley' },
        'Un día, unos saduceos le presentaron a Jesús el caso de una mujer que se casó con siete hermanos, uno tras otro, para burlarse de la resurrección. Jesús les respondió: «Erráis, ignorando las Escrituras y el poder de Dios» (Mt 22:29), y les citó precisamente la ley de Moisés, que ellos aceptaban: «Yo soy el Dios de Abraham, el Dios de Isaac y el Dios de Jacob. Dios no es Dios de muertos, sino de vivos» (Mt 22:32; Éx 3:6).',
        'Después de Pentecostés, fueron los saduceos los que más se opusieron a los apóstoles, «resentidos de que enseñasen al pueblo, y anunciasen en Jesús la resurrección de entre los muertos» (Hch 4:2). Cuando los romanos destruyeron el templo en el año 70, los saduceos desaparecieron con él; el judaísmo que sobrevivió fue el de los fariseos.'
      ],
      pensar: 'Los saduceos conocían la ley de memoria, pero no creían en el poder de Dios para resucitar. ¿Lees la Biblia esperando que Dios actúe, o solo como un libro que conoces?'
    },
    {
      id: 'esenios', n: 'Los esenios y Qumrán', ref: 'Isaías 40:3; Mateo 3:1-3; Juan 1:23; Malaquías 3:1', fecha: [-150, 68],
      visual: [
        img('qumran-esenios.webp', 'Al amanecer, en un edificio de piedra junto a los acantilados del desierto frente al mar Muerto, varios hombres vestidos de lino blanco copian rollos sentados ante largas mesas de yeso, mientras otro baja por las escaleras de un baño ritual excavado en la roca; al fondo, el mar Muerto refleja la luz', 'Una comunidad judía del desierto copia las Escrituras junto al mar Muerto. Recreación.'),
        mapa({ view: V.judea, lugares: ['qumran', 'jerusalen', 'jerico', 'en-gadi', 'masada'] }),
        cita('Isaías 40:3', 'Voz que clama en el desierto: Preparad camino a Jehová; enderezad calzada en la soledad a nuestro Dios.'),
        tabla({
          titulo: 'Los rollos del mar Muerto',
          cab: ['', ''],
          filas: [
            ['Hallazgo', 'Entre 1947 y 1956, en once cuevas cerca de Qumrán'],
            ['Cantidad', 'Unos novecientos manuscritos, la mayoría en fragmentos'],
            ['Manuscritos bíblicos', 'Unos doscientos treinta, de todos los libros del Antiguo Testamento menos Ester'],
            ['Fechas', 'Del siglo III a.C. al siglo I d.C.'],
            ['Escritos de la comunidad', 'La Regla de la comunidad, el Documento de Damasco, el Rollo de la guerra, comentarios de los profetas']
          ]
        })
      ],
      texto: [
        'Josefo, Filón de Alejandría y el escritor romano Plinio describen un tercer grupo judío, los esenios, que el Nuevo Testamento no nombra. Eran unos cuatro mil, vivían en comunidades en las aldeas de Judea y en el desierto junto al mar Muerto, compartían sus bienes, se bañaban ritualmente cada día, vestían de blanco, guardaban el día de reposo con un rigor extremo y estudiaban la ley en común. Algunos no se casaban.',
        { h: 'Los rollos del mar Muerto' },
        'En 1947, un pastor beduino encontró en una cueva cerca de Qumrán, en la costa noroeste del mar Muerto, unas tinajas con rollos antiguos. En los años siguientes aparecieron en once cuevas unos novecientos manuscritos, y junto a ellas se excavó un asentamiento habitado desde el siglo I a.C. hasta que los romanos lo destruyeron en el 68 d.C. La mayoría de los estudiosos piensa que allí vivió una comunidad de esenios, que copió y guardó esos rollos.',
        'Entre ellos están las copias más antiguas de la Biblia hebrea, mil años más antiguas que las que se conocían, como el gran rollo de Isaías, que mostraron con qué fidelidad se había copiado el texto.',
        ir('Ver en De la Biblia a nosotros: el gran rollo de Isaías', R.biblia),
        { h: 'Una comunidad que se apartó' },
        'Los escritos propios de la comunidad cuentan su origen. Un grupo de sacerdotes, guiado por un hombre al que llaman «el Maestro de justicia», rompió con el templo de Jerusalén porque lo consideraba contaminado por un «sacerdote impío», probablemente uno de los primeros asmoneos (V.4), y por un calendario equivocado. Se retiraron al desierto para preparar el camino del Señor, citando Isaías: «Voz que clama en el desierto: Preparad camino a Jehová» (Is 40:3). Esperaban una guerra final entre los hijos de la luz y los hijos de las tinieblas, y la llegada de dos mesías, uno sacerdotal y otro real.',
        { h: 'Juan el Bautista y Qumrán' },
        'Ese mismo versículo de Isaías es el que los evangelios aplican a Juan el Bautista, que predicaba en el desierto de Judea, no lejos de Qumrán (Mt 3:1-3). Algunos han pensado que Juan tuvo contacto con los esenios. Lo que la Escritura deja claro es la diferencia: los esenios se apartaron para formar una comunidad pura y esperar; Juan clamó en el desierto para llamar a todo el pueblo al arrepentimiento y señalar al que ya venía: «He aquí el Cordero de Dios» (Jn 1:29).'
      ],
      pensar: 'Los esenios se apartaron del mundo para preparar el camino del Señor; Juan lo preparó llamando a todos al arrepentimiento. ¿Tu fe te aparta de la gente o te lleva a ella con el mensaje de Cristo?'
    },
    {
      id: 'sanedrin', n: 'El Sanedrín', ref: 'Números 11:16-17; Marcos 14:55; Hechos 5:21, 34; Juan 18:31; Lucas 23:50-51', fecha: [-200, 70],
      visual: [
        img('../hechos/img/hechos-pedro-sanedrin.webp', 'Pedro y Juan, de pie y serenos, ante el sanedrín reunido en semicírculo, con el sumo sacerdote y ancianos vestidos con mantos', 'Pedro y Juan ante el Sanedrín (Hechos 4). Recreación.'),
        cita('Juan 18:31', 'Entonces les dijo Pilato: Tomadle vosotros, y juzgadle según vuestra ley. Y los judíos le dijeron: A nosotros no nos está permitido dar muerte a nadie;'),
        tabla({
          titulo: 'El Sanedrín en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombre', 'Del griego synédrion, «consejo», «los que se sientan juntos»'],
            ['Antecedente', 'El consejo de los ancianos (gerousía) que menciona Antíoco III hacia el 200 a.C.'],
            ['Miembros', 'Setenta y uno, según la tradición judía: los principales sacerdotes, los escribas y los ancianos'],
            ['Presidente', 'El sumo sacerdote (Mt 26:57; Hch 5:27)'],
            ['Miembros nombrados en el Nuevo Testamento', 'Nicodemo (Jn 7:50), José de Arimatea (Lc 23:50-51), Gamaliel (Hch 5:34)'],
            ['Límite bajo Roma', 'No podía ejecutar sin permiso del gobernador (Jn 18:31)']
          ]
        })
      ],
      texto: [
        'El Sanedrín era el consejo supremo de los judíos en Jerusalén. En los evangelios y en Hechos aparece como el tribunal que juzga a Jesús, a Pedro y Juan, a Esteban y a Pablo. El Antiguo Testamento no lo menciona con ese nombre, que es griego.',
        { h: 'Un consejo de ancianos' },
        'La tradición judía posterior vinculó el Sanedrín con los setenta ancianos que Dios dio a Moisés para ayudarlo a llevar la carga del pueblo (Nm 11:16-17). Históricamente, su antecedente es el consejo de los ancianos de Jerusalén, que gobernaba junto al sumo sacerdote. La carta de Antíoco III a los judíos, hacia el 200 a.C., ya lo nombra. Bajo los asmoneos siguió existiendo, y los fariseos ganaron un lugar en él con Salomé Alejandra.',
        'La primera vez que Josefo usa la palabra sanedrín para un tribunal judío es en el juicio a Herodes, en el 47 a.C. (VI.2). Cuando Herodes llegó al poder, hizo ejecutar a muchos de sus miembros, y desde entonces el consejo quedó sometido al rey y, después, a los gobernadores romanos.',
        { h: 'Cómo funcionaba' },
        'Según la tradición judía, tenía setenta y un miembros y lo presidía el sumo sacerdote. Lo formaban los principales sacerdotes, en su mayoría saduceos; los escribas, muchos de ellos fariseos; y los ancianos, jefes de las familias importantes. Se ocupaba de los asuntos de la ley, del templo y de la vida de la comunidad judía. Bajo los romanos podía juzgar, pero no ejecutar una sentencia de muerte sin permiso del gobernador. Por eso le dijeron a Pilato: «A nosotros no nos está permitido dar muerte a nadie» (Jn 18:31).',
        { h: 'Un tribunal dividido' },
        'El Sanedrín no era un bloque. Cuando Pablo compareció ante él, bastó mencionar la resurrección para que fariseos y saduceos se dividieran (Hch 23:6-10). Algunos de sus miembros fueron discípulos de Jesús, aunque en secreto: Nicodemo, que lo defendió (Jn 7:50-51), y José de Arimatea, «miembro del concilio, varón bueno y justo», que «no había consentido en el acuerdo ni en los hechos de ellos» (Lc 23:50-51) y pidió el cuerpo de Jesús para sepultarlo.'
      ],
      pensar: 'José de Arimatea no se dejó arrastrar por la decisión de la mayoría del concilio. ¿Te atreves a no consentir cuando un grupo decide algo contra la justicia?'
    },
    {
      id: 'libros', n: 'Los libros de este período', ref: 'Romanos 3:2; Lucas 24:44; Judas 14-15', fecha: [-300, 100],
      visual: [
        img('../libros-apocrifos/img/mesa-rollos.webp', 'Sobre una mesa de madera antigua, a la luz de una lámpara de aceite, hay rollos de pergamino abiertos con escritura hebrea y griega, un códice encuadernado en cuero y un tintero con cálamo', 'Los judíos de estos siglos escribieron muchos libros, además de copiar la Escritura. Recreación.'),
        tabla({
          titulo: 'Libros escritos entre los testamentos',
          cab: ['Tipo', 'Ejemplos', 'Qué aportan'],
          filas: [
            ['Historia', '1 y 2 Macabeos', 'La crisis de Antíoco IV y los asmoneos'],
            ['Relatos', 'Tobías, Judit, adiciones a Ester y a Daniel', 'La piedad judía en el exilio y en la persecución'],
            ['Sabiduría', 'Eclesiástico (Ben Sira), Sabiduría de Salomón', 'Cómo pensaban los maestros de la ley'],
            ['Apocalipsis', '1 Enoc, 4 Esdras', 'Las esperanzas sobre el fin y el juicio'],
            ['Salmos y oraciones', 'Salmos de Salomón, Oración de Manasés', 'La espera del Mesías hijo de David'],
            ['Reescrituras de la Biblia', 'Jubileos, Testamentos de los doce patriarcas', 'Cómo se leía el Génesis'],
            ['Escritos de Qumrán', 'Regla de la comunidad, comentarios de los profetas', 'La vida y las creencias de los esenios']
          ]
        })
      ],
      texto: [
        'Aunque no hubo profetas, los judíos de estos siglos escribieron mucho. Contaron su historia, escribieron oraciones, proverbios y novelas con enseñanza, imaginaron el fin de los tiempos y volvieron a contar los relatos del Génesis. Muchos de esos libros se conservaron en la Septuaginta, en los rollos del mar Muerto o en traducciones antiguas.',
        { h: 'Libros útiles, pero no Escritura' },
        'Algunos de estos libros forman parte de las Biblias católicas y ortodoxas, que los llaman deuterocanónicos. Las iglesias evangélicas, siguiendo el canon que Israel recibió y que Jesús confirmó (Lc 24:44), no los reciben como Escritura, pero los valoran como fuentes para conocer la historia y el pensamiento del judaísmo antes de Jesús. A Israel le fue confiada la palabra de Dios (Ro 3:2), y estos libros no estaban entre ella.',
        'Para estudiar este período son indispensables. El primer libro de los Macabeos es la fuente principal sobre la rebelión; el Eclesiástico muestra cómo pensaba un maestro de la ley en Jerusalén poco antes de la crisis; los Salmos de Salomón revelan qué esperaban los judíos piadosos del Mesías; y 1 Enoc, que Judas cita (Jud 14-15), muestra cómo se imaginaban los ángeles y el juicio.',
        'Leerlos también ayuda a valorar la Escritura. Al lado de los relatos de Judit o de Tobías, con sus errores de historia y sus enseñanzas mezcladas, se nota la sobriedad y la verdad de la Biblia. Y al lado de las especulaciones de los apocalipsis judíos sobre el fin, se aprecia la claridad de lo que Dios reveló por medio de Daniel y de Juan.',
        { h: 'Un recurso propio' },
        'Estos libros se estudian uno por uno en Los libros apócrifos y pseudoepígrafos, con lo que cuentan, cuándo se escribieron, lo que aportan y en qué se apartan de la Escritura.',
        ir('Abrir Los libros apócrifos y pseudoepígrafos', R.apocrifos),
        ir('Ver los libros históricos: 1, 2, 3 y 4 Macabeos', R.apocrifos + '#historicos/1'),
        ir('Ver los pseudoepígrafos: 1 Enoc y los Salmos de Salomón', R.apocrifos + '#pseudo/1')
      ],
      pensar: 'Hay muchos libros que ayudan a entender la Biblia, pero solo uno es Palabra de Dios. ¿Dedicas más tiempo a leer sobre la Biblia que a leer la Biblia?'
    },
    {
      id: 'esperanza', n: 'La esperanza del Mesías', ref: 'Juan 1:19-25; Juan 7:40-42; Lucas 2:25-38; Daniel 7:13-14; 1 Corintios 1:23', fecha: [-63, 30],
      visual: [
        cita('Juan 1:19-21', 'Este es el testimonio de Juan, cuando los judíos enviaron de Jerusalén sacerdotes y levitas para que le preguntasen: ¿Tú, quién eres? Confesó, y no negó, sino confesó: Yo no soy el Cristo. Y le preguntaron: ¿Qué pues? ¿Eres tú Elías? Dijo: No soy. ¿Eres tú el profeta? Y respondió: No.'),
        tabla({
          titulo: 'Lo que esperaban y cómo se cumplió en Jesús',
          cab: ['Esperanza', 'Dónde se apoyaba', 'Cómo se cumplió en Jesús'],
          filas: [
            ['Un rey hijo de David', '2 Samuel 7:12-16; Salmos de Salomón', 'Hijo de David, nacido en Belén (Mt 1:1; Jn 7:42)'],
            ['El profeta como Moisés', 'Deuteronomio 18:15', 'El profeta que había de venir al mundo (Jn 6:14; Hch 3:22)'],
            ['El regreso de Elías', 'Malaquías 4:5', 'Cumplido en Juan el Bautista (Mt 11:14)'],
            ['Un mesías sacerdote', 'Salmo 110:4; escritos de Qumrán', 'Sumo sacerdote según el orden de Melquisedec (He 7)'],
            ['El Hijo del Hombre que viene del cielo', 'Daniel 7:13-14; 1 Enoc', 'El título que Jesús usó para sí mismo (Mr 14:62)'],
            ['Un libertador de los romanos', 'La memoria de los macabeos', 'Jesús lo rechazó: su reino no es de este mundo (Jn 6:15; 18:36)']
          ]
        })
      ],
      texto: [
        'Cuando Juan el Bautista empezó a predicar, los sacerdotes y levitas de Jerusalén fueron a preguntarle: «¿Tú, quién eres?». Juan confesó: «Yo no soy el Cristo». Le preguntaron: «¿Eres tú Elías?». Dijo: «No soy». «¿Eres tú el profeta?». Y respondió: «No» (Jn 1:19-21). Esas tres preguntas resumen lo que el pueblo esperaba al final de estos siglos.',
        { h: 'Una esperanza avivada' },
        'La experiencia de estos siglos hizo crecer la esperanza. Los judíos habían vivido bajo reyes extranjeros, habían sufrido la persecución de Antíoco IV, habían visto a sus propios reyes asmoneos volverse tiranos, y finalmente habían caído bajo Roma y bajo un rey idumeo. Muchos volvieron a leer las promesas de los profetas y esperaron que Dios enviara pronto a su Ungido.',
        'Pero no todos esperaban lo mismo. Los Salmos de Salomón piden un rey hijo de David que expulse a los gentiles y reine con justicia. Los escritos de Qumrán esperan dos mesías, uno sacerdote y otro rey, y un profeta. Algunos libros, como 1 Enoc, hablan de un Hijo del Hombre celestial que juzgará a los reyes, tomando la imagen de Daniel 7:13. Otros esperaban a Elías, como prometió Malaquías, o al profeta como Moisés.',
        { h: 'Los que esperaban en silencio' },
        'Lucas presenta a algunos de ellos en el templo, cuando José y María llevaron al niño Jesús: Simeón, que era «justo y piadoso, esperaba la consolación de Israel», y Ana, la profetisa, que hablaba del niño «a todos los que esperaban la redención en Jerusalén» (Lc 2:25, 38). No eran poderosos ni famosos. Esperaban orando, y vieron el cumplimiento.',
        { h: 'Un Mesías inesperado' },
        'Jesús cumplió todas esas esperanzas, pero de una manera que nadie imaginaba. Era el Hijo de David, el Profeta, el Sacerdote y el Hijo del Hombre; pero vino primero a sufrir y morir. Por eso, para muchos fue tropezadero: «nosotros predicamos a Cristo crucificado, para los judíos ciertamente tropezadero» (1 Co 1:23). El mismo Jesús resucitado tuvo que explicar a dos discípulos que el Cristo debía padecer antes de entrar en su gloria (Lc 24:25-27). Su reino vendrá en gloria cuando vuelva.'
      ],
      pensar: 'Muchos esperaban un Mesías a su medida y no reconocieron al que vino. ¿Esperas tú que Jesús cumpla tus expectativas, o te dejas sorprender por lo que él quiere hacer?'
    }
  ];

  window.__ET.nacio = nacio;
})();
/* Entre los Testamentos · ruta VIII. «Cuando vino el cumplimiento del tiempo», y datos del recurso (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const cumplimiento = [
    {
      id: 'lengua-caminos', n: 'Una lengua común, caminos y paz', ref: 'Gálatas 4:4; Hechos 17:26-27; Hechos 21:37; Juan 19:20', fecha: [-27, 60],
      visual: [
        img('../imperio-romano/img/roma-calzada.webp', 'Una calzada romana pavimentada con grandes piedras que atraviesa el campo, con un mojón y viajeros a pie', 'Las calzadas romanas unieron el imperio. Recreación.'),
        mapa({ view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'jerusalen', 'antioquia', 'efeso', 'corinto', 'alejandria', 'tarso'] }),
        tabla({
          titulo: 'Lo que el mundo tenía cuando nació Jesús',
          cab: ['Preparación', 'De dónde vino', 'Cómo sirvió al evangelio'],
          filas: [
            ['Una lengua común', 'La conquista de Alejandro (III.2)', 'El Nuevo Testamento se escribió en griego y se leyó de Roma a Persia'],
            ['Un solo imperio', 'Las conquistas de Roma (VI.1 y VI.5)', 'Los apóstoles cruzaron fronteras sin pasaportes'],
            ['Caminos y mares seguros', 'La paz de Augusto', 'Pablo recorrió miles de kilómetros en sus viajes'],
            ['Leyes y ciudadanía', 'El derecho romano', 'Pablo apeló a sus derechos de ciudadano (Hch 16:37; 25:11)']
          ]
        })
      ],
      texto: [
        'Pablo escribió a los gálatas: «Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley» (Gá 4:4). Jesús no nació en cualquier momento. Dios había preparado el mundo durante siglos, y mucho de esa preparación ocurrió en los años que recorre este recurso.',
        { h: 'Una lengua' },
        'Gracias a Alejandro y a sus sucesores, el griego se hablaba en todo el oriente del Mediterráneo, en Egipto, en Siria y hasta en Roma. Un mensaje escrito en griego podía leerse en Antioquía, en Corinto o en Roma sin traducción. Cuando el tribuno romano arrestó a Pablo en el templo, se sorprendió de que le hablara en griego (Hch 21:37); Pablo, judío de Tarso, hablaba griego y arameo, y era ciudadano romano. Los veintisiete libros del Nuevo Testamento se escribieron en esa lengua común.',
        { h: 'Caminos y paz' },
        'Gracias a Roma, por primera vez en la historia todo el Mediterráneo estaba bajo un solo gobierno. La paz de Augusto terminó con las guerras entre reinos y con buena parte de la piratería. Las calzadas romanas, con sus mojones y sus posadas, unían las ciudades del imperio; los barcos llevaban mercaderías y viajeros de un puerto a otro. Por esos caminos y esos mares viajaron los apóstoles. Pablo pudo ir de Jerusalén a Antioquía, Galacia, Macedonia, Grecia, Asia y Roma sin cruzar una sola frontera.',
        { h: 'Un Dios que gobierna la historia' },
        'Ni Alejandro ni Augusto pensaban en el evangelio cuando conquistaron el mundo. Pero Dios usó sus ambiciones para cumplir su propósito. Pablo lo dijo en Atenas: Dios «de una sangre ha hecho todo el linaje de los hombres» y «les ha prefijado el orden de los tiempos, y los límites de su habitación; para que busquen a Dios» (Hch 17:26-27).',
        'El título de la cruz, escrito «en hebreo, en griego y en latín» (Jn 19:20), resume esa preparación: la lengua de la Escritura, la lengua del mundo y la lengua del imperio anunciaron juntas quién era el crucificado.'
      ],
      pensar: 'Dios usó a conquistadores que no lo conocían para preparar el camino de su Hijo. ¿Qué te dice eso sobre los acontecimientos de tu tiempo que parecen no tener que ver con Dios?'
    },
    {
      id: 'diaspora-temerosos', n: 'Una diáspora con sinagogas en todo el imperio', ref: 'Hechos 13:14-16; Hechos 13:26; Hechos 10:1-2; Hechos 16:13-14; Hechos 17:1-4', fecha: [-250, 60],
      visual: [
        img('../imperios-historia/img/integrador-pentecostes.webp', 'El día de Pentecostés en Jerusalén: los discípulos llenos del Espíritu Santo hablan a una multitud de judíos de muchas naciones', 'Pentecostés: judíos de todas las naciones oyen el evangelio en su propia lengua (Hechos 2). Recreación.'),
        cita('Hechos 13:26', 'Varones hermanos, hijos del linaje de Abraham, y los que entre vosotros teméis a Dios, a vosotros es enviada la palabra de esta salvación.'),
        tabla({
          titulo: 'Tres clases de personas en las sinagogas',
          cab: ['Grupo', 'Quiénes eran', 'Ejemplos en Hechos'],
          filas: [
            ['Judíos', 'Descendientes de Abraham, nacidos en la tierra de Israel o en la diáspora', 'Los judíos de Antioquía de Pisidia (Hch 13:14-16)'],
            ['Prosélitos', 'Gentiles convertidos al judaísmo, circuncidados', 'Nicolás de Antioquía (Hch 6:5); los prosélitos de Pentecostés (Hch 2:10)'],
            ['Temerosos de Dios', 'Gentiles que adoraban al Dios de Israel y asistían a la sinagoga, sin circuncidarse', 'Cornelio (Hch 10:2), Lidia (Hch 16:14), los griegos piadosos de Tesalónica (Hch 17:4)']
          ]
        })
      ],
      texto: [
        'Cuando Pablo llegaba a una ciudad, buscaba primero la sinagoga. Allí encontraba un auditorio preparado: judíos que conocían las Escrituras y esperaban al Mesías, y gentiles que habían aprendido a adorar al Dios de Israel. Esa red de comunidades, extendida por todo el imperio, se formó en los siglos que estudia este recurso.',
        { h: 'Judíos en todas partes' },
        'En el siglo I, los judíos que vivían fuera de la tierra de Israel eran más que los que vivían en ella. Había comunidades en Alejandría, Antioquía, Damasco, Asia Menor, Grecia, Cirene, Roma y Babilonia (III.3). Guardaban el día de reposo, se reunían en sus sinagogas, leían la Escritura en griego y peregrinaban a Jerusalén en las fiestas. Por eso, en Pentecostés, la multitud que oyó a los apóstoles venía de quince regiones distintas (Hch 2:9-11), y muchos volvieron a sus ciudades llevando la noticia.',
        { h: 'Los gentiles que temían a Dios' },
        'Muchos paganos se sintieron atraídos por la fe judía: un solo Dios, creador de todo, una ley moral clara, una Escritura antigua. Algunos se convertían por completo, se circuncidaban y pasaban a ser prosélitos. Otros, más numerosos, asistían a la sinagoga, oraban al Dios de Israel y daban limosnas, sin llegar a circuncidarse: los llamados temerosos de Dios. Pablo se dirigía a ellos expresamente: «Varones hermanos, hijos del linaje de Abraham, y los que entre vosotros teméis a Dios, a vosotros es enviada la palabra de esta salvación» (Hch 13:26).',
        'Cornelio, el centurión de Cesarea, era uno de ellos: «piadoso y temeroso de Dios con toda su casa, y que hacía muchas limosnas al pueblo, y oraba a Dios siempre» (Hch 10:2). También Lidia, la vendedora de púrpura de Tiatira, «que adoraba a Dios» (Hch 16:14). Fueron los primeros gentiles en recibir el evangelio, y el puente por el que la fe en Cristo pasó a las naciones.',
        { h: 'Preparados por la Palabra' },
        'Esos hombres y mujeres ya conocían a Abraham, a Moisés, a David y a los profetas. Cuando oyeron que Jesús era el Cristo prometido, tenían las Escrituras para comprobarlo. Los de Berea, que recibieron la palabra con toda solicitud, escudriñaban cada día las Escrituras para ver si estas cosas eran así (Hch 17:11). La traducción griega de la Biblia (III.4) y la sinagoga (VII.1) habían hecho su trabajo.'
      ],
      pensar: 'Cornelio buscaba a Dios con lo poco que conocía, y Dios le envió a Pedro con el evangelio. ¿Conoces a alguien que busca a Dios y necesita que alguien le hable de Cristo?'
    },
    {
      id: 'esperaban', n: 'Un pueblo que esperaba', ref: 'Lucas 2:25-38; Lucas 1:68-79; Marcos 15:43; Isaías 40:1-2', fecha: [-5, 30],
      visual: [
        img('simeon-templo.webp', 'En un atrio del templo de Jerusalén, un anciano judío de barba blanca, Simeón, sostiene en brazos a un bebé envuelto en pañales y levanta el rostro al cielo con alegría, mientras una joven madre judía, María, y su esposo José, un carpintero de unos treinta años que lleva dos tórtolas en una jaula de mimbre, lo miran asombrados', 'Simeón toma en brazos al niño Jesús en el templo (Lucas 2:25-32). Recreación.'),
        cita('Lucas 2:25-32', 'Y he aquí había en Jerusalén un hombre llamado Simeón, y este hombre, justo y piadoso, esperaba la consolación de Israel; y el Espíritu Santo estaba sobre él. Y le había sido revelado por el Espíritu Santo, que no vería la muerte antes que viese al Ungido del Señor. Y movido por el Espíritu, vino al templo. Y cuando los padres del niño Jesús lo trajeron al templo, para hacer por él conforme al rito de la ley, él le tomó en sus brazos, y bendijo a Dios, diciendo: Ahora, Señor, despides a tu siervo en paz, Conforme a tu palabra; Porque han visto mis ojos tu salvación, La cual has preparado en presencia de todos los pueblos; Luz para revelación a los gentiles, Y gloria de tu pueblo Israel.')
      ],
      texto: [
        'Al comienzo de su evangelio, Lucas presenta a un grupo de personas sencillas que esperaban el cumplimiento de las promesas de Dios. No eran sumos sacerdotes ni reyes. Eran un sacerdote anciano y su esposa, Zacarías y Elisabet; una joven de Nazaret, María; un carpintero, José; unos pastores de Belén; un anciano llamado Simeón y una viuda profetisa llamada Ana. Después de cuatro siglos sin profetas, el Espíritu Santo volvió a hablar, y lo hizo a través de ellos.',
        { h: 'Simeón' },
        'Simeón era un hombre «justo y piadoso, esperaba la consolación de Israel; y el Espíritu Santo estaba sobre él» (Lc 2:25). La consolación de Israel era la que Isaías había anunciado: «Consolaos, consolaos, pueblo mío, dice vuestro Dios» (Is 40:1). Dios le había revelado que no moriría antes de ver al Ungido del Señor. Cuando José y María llevaron al niño al templo, Simeón lo tomó en sus brazos y bendijo a Dios: «Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación» (Lc 2:29-30).',
        'Simeón vio en ese niño lo que el pueblo esperaba y algo más: una luz para revelación a los gentiles y gloria de Israel (Lc 2:32). Las dos esperanzas que este recurso ha seguido, la del pueblo judío y la de las naciones dispersas, se encontraban en ese bebé.',
        { h: 'Ana y los que esperaban' },
        'Ana, una viuda de ochenta y cuatro años, que servía en el templo de noche y de día con ayunos y oraciones, llegó en ese momento, daba gracias a Dios y hablaba del niño «a todos los que esperaban la redención en Jerusalén» (Lc 2:38). Había un grupo, entonces, que esperaba. Treinta años después, otro de ellos, José de Arimatea, «que también esperaba el reino de Dios» (Mr 15:43), sepultaría el cuerpo de Jesús.',
        { h: 'Un remanente fiel' },
        'En medio de un período de reyes violentos, sacerdotes corruptos y grupos enfrentados, Dios se había guardado un remanente que oraba, leía las Escrituras y esperaba. El cántico de Zacarías lo expresa: Dios había visitado y redimido a su pueblo, «para hacer misericordia con nuestros padres, y acordarse de su santo pacto» (Lc 1:72). Las promesas no habían caducado durante los siglos de silencio.'
      ],
      pensar: 'Simeón y Ana esperaron en oración durante años y vieron el cumplimiento. ¿Qué promesa de Dios estás esperando tú, y cómo la esperas: con oración o con impaciencia?'
    },
    {
      id: 'dios-obra', n: 'Dios obra aunque no hable por profetas', ref: 'Gálatas 4:4-5; Hebreos 1:1-2; Isaías 55:10-11; Romanos 15:4', fecha: [-430, -5],
      visual: [
        img('../imperio-romano/img/roma-censo-belen.webp', 'José y María, ella embarazada, llegan a Belén entre una multitud de viajeros que acuden a empadronarse ante funcionarios romanos', 'José y María llegan a Belén por el censo de Augusto. Recreación.'),
        cita('Gálatas 4:4-5', 'Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley, para que redimiese a los que estaban bajo la ley, a fin de que recibiésemos la adopción de hijos.'),
        tabla({
          titulo: 'Lo que Dios preparó entre los testamentos',
          cab: ['Preparación', 'Ruta'],
          filas: [
            ['Un pueblo fiel a un solo Dios, sin idolatría', 'II.4 y IV.5'],
            ['Las Escrituras completas y traducidas al griego', 'II.4 y III.4'],
            ['Sinagogas en cada ciudad', 'VII.1 y VIII.2'],
            ['Gentiles que temían al Dios de Israel', 'VIII.2'],
            ['Una lengua común', 'III.2 y VIII.1'],
            ['Un imperio con caminos y paz', 'VI.5 y VIII.1'],
            ['La fe en la resurrección', 'IV.5 y VII.3'],
            ['Un pueblo que esperaba al Mesías', 'VII.8 y VIII.3'],
            ['Las profecías de Daniel cumplidas', 'I.5 y ruta IV']
          ]
        })
      ],
      texto: [
        'El recorrido termina donde empezó: en el silencio entre Malaquías y Mateo. Ahora se puede ver con más claridad que ese silencio no fue vacío. Durante cuatrocientos años, Dios no envió profetas, pero no dejó de obrar.',
        { h: 'Lo que Dios hizo en silencio' },
        'Dios cumplió en estos siglos lo que había anunciado por Daniel: los imperios llegaron y cayeron en el orden previsto, y el rey que profanó el santuario no pudo destruir al pueblo que conocía a su Dios. Preservó a ese pueblo a través de la helenización, la persecución y la guerra. Hizo que su Palabra se tradujera a la lengua del mundo y se leyera cada sábado en cientos de sinagogas. Llevó a gentiles de muchas naciones a adorar al Dios de Israel. Y despertó en muchos corazones la esperanza de que el Ungido estaba por llegar.',
        'Cuando todo estuvo listo, «cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley, para que redimiese a los que estaban bajo la ley, a fin de que recibiésemos la adopción de hijos» (Gá 4:4-5).',
        { h: 'La palabra final' },
        'Hebreos comienza diciendo que Dios habló «muchas veces y de muchas maneras en otro tiempo a los padres por los profetas», y que «en estos postreros días nos ha hablado por el Hijo» (He 1:1-2). El silencio de los profetas terminó con la voz de Juan el Bautista, y la profecía alcanzó su cumplimiento en Jesucristo, la Palabra hecha carne. Por eso la iglesia no espera un nuevo Malaquías ni un libro nuevo: tiene en Cristo y en la Escritura completa la revelación de Dios, y el Espíritu Santo que la ilumina.',
        { h: 'Para quienes esperan hoy' },
        'La historia entre los testamentos es también una enseñanza para la iglesia. Hay épocas en que Dios parece callar y en que los acontecimientos del mundo parecen no tener que ver con su reino. Pero «las cosas que se escribieron antes, para nuestra enseñanza se escribieron, a fin de que por la paciencia y la consolación de las Escrituras, tengamos esperanza» (Ro 15:4). El mismo Dios que preparó el mundo para la primera venida de su Hijo está preparando su regreso.',
        { ejercicio: {
          pregunta: '¿Cuál es la mejor conclusión sobre los cuatrocientos años entre los testamentos?',
          opciones: [
            { t: 'Fueron un tiempo perdido, en que Dios se olvidó de su pueblo.', ok: false, por_que: 'Dios cumplió en ellos sus profecías y preparó al mundo para la venida de su Hijo.' },
            { t: 'Dios no envió profetas, pero gobernó la historia y preparó todo para enviar a su Hijo en el cumplimiento del tiempo.', ok: true, por_que: 'Es lo que enseña Gálatas 4:4 y lo que muestra la historia del período.' },
            { t: 'Los libros escritos en ese tiempo completan la Biblia.', ok: false, por_que: 'Son útiles como historia, pero no son Escritura; la revelación final de Dios es su Hijo (He 1:1-2).' }
          ],
          explicacion: 'El silencio de los profetas no fue el silencio de Dios.'
        } }
      ],
      pensar: 'Dios preparó durante siglos la primera venida de su Hijo, y está preparando la segunda. ¿Vives tú como alguien que espera a Cristo?'
    }
  ];

  const E = window.__ET;
  delete window.__ET;
  const LINEA = { desde: -450, hasta: 75, hitos: [
    { a: -430, t: 'Malaquías' }, { a: -332, t: 'Alejandro' }, { a: -301, t: 'Ipso' }, { a: -200, t: 'Panión' },
    { a: -167, t: 'Antíoco IV' }, { a: -142, t: 'Independencia' }, { a: -63, t: 'Pompeyo' }, { a: -37, t: 'Herodes' },
    { a: -5, t: 'Nace Jesús' }, { a: 70, t: 'Cae el templo' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Entre los Testamentos',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama', info: 'De Malaquías a Mateo, las fuentes, Daniel y los cinco períodos', estaciones: E.panorama, linea: LINEA },
      { id: 'persa', grupo: 'La historia, período por período', n: 'II. El final del período persa', info: 'Yehud, Elefantina, los samaritanos y la ley en el centro (430–332 a.C.)', estaciones: E.persa, linea: LINEA },
      { id: 'ptolomeos', grupo: 'La historia, período por período', n: 'III. Alejandro y los Ptolomeos', info: 'Alejandro, el helenismo, Alejandría, la Septuaginta y los Tobíadas (332–198 a.C.)', estaciones: E.ptolomeos, linea: LINEA },
      { id: 'crisis', grupo: 'La historia, período por período', n: 'IV. Los seléucidas y la crisis', info: 'Panión, el sumo sacerdocio comprado, Antíoco IV, la abominación y los mártires (198–164 a.C.)', estaciones: E.crisis, linea: LINEA },
      { id: 'asmoneos', grupo: 'La historia, período por período', n: 'V. Los macabeos y los asmoneos', info: 'Matatías, Judas, la Dedicación, la independencia y la guerra entre hermanos (167–63 a.C.)', estaciones: E.asmoneos, linea: LINEA },
      { id: 'roma', grupo: 'La historia, período por período', n: 'VI. Roma y Herodes', info: 'Pompeyo, Antípatro, Herodes, el templo y Augusto (63–4 a.C.)', estaciones: E.roma, linea: LINEA },
      { id: 'nacio', grupo: 'El mundo que recibió a Jesús', n: 'VII. Lo que nació en estos siglos', info: 'La sinagoga, los escribas, fariseos, saduceos, esenios, el Sanedrín, los libros y la esperanza del Mesías', estaciones: E.nacio, linea: LINEA },
      { id: 'cumplimiento', grupo: 'El mundo que recibió a Jesús', n: 'VIII. «Cuando vino el cumplimiento del tiempo»', info: 'Cómo Dios preparó el mundo para la venida de su Hijo', estaciones: cumplimiento, linea: LINEA }
    ]
  };
})();
