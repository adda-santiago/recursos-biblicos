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
   El mundo judío en tiempos de Jesús (nº 91), que se enlaza con botones ir. Los libros del período se estudian en Los libros apócrifos.
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
    apocrifos: '../../libros-apocrifos/', daniel: '../../daniel/', griego: '../../imperio-griego/', persa: '../../imperio-persa/',
    romano: '../../imperio-romano/', palabra: '../../palabra-de-dios/', biblia: '../../de-la-biblia-a-nosotros/',
    templo: '../../templo-herodes/', exilio: '../../exilio/', tierra: '../../tierra-de-israel/', sacerdocio: '../../sacerdocio/',
    mundo: '../../mundo-judio/'
  };
  window.__ET = { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R };

  // ================== RUTA I. Panorama ==================
  const panorama = [
    {
      id: 'silencio', n: '¿Cuatrocientos años de silencio?', ref: 'Malaquías 4:4-6; Amós 8:11; Lucas 1:13-17; Gálatas 4:4', fecha: [-430, -5],
      visual: [
        img('../sacerdocio/img/sac-zacarias.webp', 'Dentro del lugar santo del templo, a la luz del candelero de oro, el anciano sacerdote Zacarías, vestido de lino blanco, ofrece incienso en el altar de oro y se sobresalta al ver a un ángel resplandeciente', 'El silencio profético termina en el templo, con el anuncio del ángel a Zacarías (Lucas 1:11-13). Recreación.'),
        cita('Malaquías 4:4-6', '@@mal/4/4-6'),
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
        cita('Daniel 8:21-22', '@@dn/8/21-22'),
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
        cita('Daniel 2:20-21', '@@dn/2/20-21')
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
