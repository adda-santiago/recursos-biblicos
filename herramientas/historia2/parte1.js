/* ==========================================================
   Recursos Bíblicos — Historia de la Iglesia II (de la Reforma a hoy) · contenido de las rutas
   FUENTE de public/apps/historia-iglesia-2/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/historia2_citas.py
   Las ocho partes forman UNA sola función: parte1 la abre y parte8 la cierra.
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Mapas: mapa base del mundo (assets/js/mapa-mundo.js) y geografía propia historia-geo.js
   (generada por geo/historia_iglesia.py) sobre imperios-geo.js.
   Cifras actuales: Status of Global Christianity 2026 (Gordon-Conwell), Lista Mundial de la
   Persecución 2026 (Puertas Abiertas), Wycliffe Global Alliance (agosto de 2025), censos de
   Brasil (2022) y Chile (2024), Latinobarómetro (2024). Se revisan periódicamente (DIRECTRICES §20).
   ========================================================== */
(() => {
  // ---------- Ayudas ----------
  const V = {
    mundo: [[-48, -125], [68, 145]],
    europa: [[35.5, -11], [62, 32]],
    europa1600: [[35.5, -11], [64, 45]],
    reforma: [[45.6, 2.5], [54.8, 16.5]],
    alemania: [[47.6, 6.5], [52.6, 15]],
    suiza: [[45.8, 5.5], [48.3, 10]],
    britania: [[49.8, -8.5], [58.8, 2.5]],
    reina: [[36.4, -7.5], [53.5, 12]],
    atlantico: [[10, -80], [66, 20]],
    asia: [[-10, 65], [45, 135]],
    africa: [[-36, -20], [15, 45]],
    eeuu: [[30, -125], [50, -65]],
    america: [[-56, -120], [34, -34]],
    sudamerica: [[-56, -85], [13, -34]],
    conosur: [[-56, -78], [-20, -50]]
  };
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/historia2_citas.py). Una imagen que falta
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
  const EUROPA_1600 = ['h-luteranos', 'h-reformados', 'h-anglicanos', 'h-catolicos', 'h-ortodoxos'];

  // ================== RUTA I. Panorama ==================
  const panorama = [
    {
      id: 'puerta', n: 'Quinientos años de historia', ref: 'Mateo 16:18; Hebreos 12:1-2', fecha: [1517, 2026],
      visual: [
        tabla({
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Qué estudia'],
          filas: [
            ['I. Panorama', 'Las etapas, el mapa del cristianismo, las familias evangélicas y cómo leer la historia'],
            ['II. La Reforma', 'De Europa hacia 1500 a Lutero, Zuinglio, Calvino, los anabautistas, Inglaterra y España'],
            ['III. Respuestas y guerras', 'Trento, los jesuitas, las guerras de religión, Westfalia y las confesiones de fe'],
            ['IV. Puritanos, pietistas y avivamientos', 'Siglos XVII y XVIII: puritanos, bautistas, moravos, Wesley y el Gran Despertar'],
            ['V. El siglo de las misiones', 'De Carey a Edimburgo 1910: misiones, sociedades bíblicas, abolición y santidad'],
            ['VI. El siglo XX', 'Azusa, el fundamentalismo, las guerras, el comunismo, Lausana y el sur global'],
            ['VII. El evangelio en América Latina', 'De la colonia a hoy: Thomson, los colportores, Valparaíso y el crecimiento evangélico'],
            ['VIII. La iglesia en el siglo XXI', 'Cifras de hoy, la iglesia perseguida, la Biblia para todos y la esperanza']
          ],
          nota: 'Las cifras de hoy se tomaron de las fuentes más recientes disponibles en octubre de 2026 y se indican con su año.'
        }),
        cita('Mateo 16:18', '@@mt/16/18')
      ],
      texto: [
        'Este recurso cuenta la historia de la iglesia desde la Reforma protestante, en el siglo XVI, hasta hoy. Es la segunda parte de una historia más larga: la primera, Historia de la Iglesia I (en preparación), va desde los apóstoles hasta las vísperas de la Reforma. Aquí se recogen quinientos años en los que el evangelio pasó de ser la fe de Europa a ser la fe de millones de personas en todos los continentes, y en los que América Latina se convirtió en una de las regiones con más cristianos evangélicos del mundo.',
        { h: 'Por qué estudiar esta historia' },
        'Muchas cosas que un creyente evangélico vive cada domingo tienen una historia. La Biblia en su propia lengua, la predicación en el centro del culto, el canto de toda la congregación, la convicción de que somos salvos por la fe y no por obras, el bautismo de los que creen, las reuniones de oración, las misiones, la experiencia del Espíritu Santo: cada una se recuperó o se abrió camino en algún momento de estos cinco siglos, muchas veces a un alto costo. Conocer esa historia ayuda a valorar lo recibido y a entender por qué la iglesia es como es.',
        'La historia también enseña humildad. En estas rutas aparecen creyentes valientes y fieles, pero también errores, divisiones, guerras en nombre de la fe y silencios ante la injusticia. La Biblia no esconde los pecados de sus héroes, y una historia honesta de la iglesia tampoco debe hacerlo. El protagonista de esta historia no es ningún reformador ni ninguna denominación, sino el Señor de la iglesia, que prometió: «edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella» (Mt 16:18).',
        { h: 'Cómo usar este recurso' },
        'Las ocho rutas siguen un orden cronológico, salvo la ruta VII, que reúne la historia de América Latina desde la colonia. Cada estación tiene un panel visual (mapa, esquema, tabla, pasaje o ilustración) y una pregunta para pensar, y cada ruta incluye al menos un ejercicio. La línea de tiempo de la parte inferior muestra dónde está cada estación en el conjunto. Algunos temas tienen su propio recurso: la historia de la Biblia en español está en De la Biblia a nosotros, y el movimiento pentecostal tendrá un recurso propio (en preparación).',
        ir('Ver cómo llegó la Biblia hasta nosotros', '../../de-la-biblia-a-nosotros/')
      ],
      pensar: 'Hebreos 12:1 habla de «tan grande nube de testigos» que nos rodea. ¿Qué creyente del pasado, de la Biblia o de la historia, ha sido para ti un ejemplo que te anima a correr con paciencia?'
    },
    {
      id: 'etapas', n: 'Cinco siglos en una línea', ref: 'Hechos 19:20; Habacuc 3:2', fecha: [1500, 2026],
      visual: [
        esq('esquema-etapas.svg', 'Línea de tiempo de 1500 a 2026 con seis etapas: la Reforma (1517-1555), las guerras de religión y la ortodoxia protestante (1555-1648), puritanos, pietistas y avivamientos (1648-1792), el siglo de las misiones (1792-1910), el siglo XX (1910-2000) y el siglo XXI; debajo, en una franja aparte, América Latina: colonia (1492-1810), independencias y primeros evangélicos (1810-1909) y crecimiento pentecostal y evangélico (desde 1909)', 'Las grandes etapas de la historia de la iglesia desde la Reforma.', 'Etapas'),
        tabla({
          titulo: 'Fechas para recordar',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1517', 'Lutero publica las 95 tesis en Wittenberg'],
            ['1534', 'Biblia completa de Lutero en alemán; Inglaterra se separa de Roma'],
            ['1569', 'Biblia del Oso de Casiodoro de Reina, en Basilea'],
            ['1648', 'Paz de Westfalia: fin de las guerras de religión en Europa'],
            ['1738', 'Conversión de Juan Wesley; poco después, el Gran Despertar'],
            ['1792', 'William Carey publica su llamado a las misiones'],
            ['1818', 'Diego Thomson llega a Buenos Aires con la Biblia'],
            ['1906', 'Avivamiento de la calle Azusa, en Los Ángeles'],
            ['1909', 'Avivamiento de Valparaíso, en Chile'],
            ['1974', 'Congreso de Lausana sobre la evangelización mundial'],
            ['2026', 'Unos 2.674 millones de cristianos, casi siete de cada diez en el sur global']
          ]
        })
      ],
      texto: [
        'Quinientos años son mucho tiempo, y para no perderse conviene tener a la vista unas pocas etapas. El esquema las muestra en orden, y cada una tiene su ruta en este recurso.',
        { h: 'De la Reforma a Westfalia (1517-1648)' },
        'La primera etapa comienza cuando Martín Lutero, un monje y profesor alemán, cuestiona en 1517 la venta de indulgencias y llega a la convicción de que el pecador es justificado solo por la fe en Cristo. En pocos años, la Reforma se extiende por Alemania, Suiza, Escandinavia, Inglaterra, Escocia y los Países Bajos, y también llega a España, donde es perseguida. La iglesia de Roma responde con el Concilio de Trento. Siguen décadas de guerras en las que la religión se mezcla con la política, hasta la paz de Westfalia en 1648.',
        { h: 'De los puritanos a las misiones (1648-1910)' },
        'Después de las guerras, muchos creyentes buscan una fe más viva y personal: los puritanos en Inglaterra, los pietistas en Alemania, los moravos, Juan Wesley y los avivamientos en Gran Bretaña y Norteamérica. De esos avivamientos nace, a fines del siglo XVIII, un movimiento misionero sin precedentes que en un siglo lleva el evangelio a Asia, África, Oceanía y América Latina.',
        { h: 'El siglo XX y el siglo XXI' },
        'El siglo XX comienza con los avivamientos de Gales, Azusa, Corea y Valparaíso, de donde surge el movimiento pentecostal. Es también el siglo de las guerras mundiales, de la persecución comunista y de la descolonización, y al terminar, el centro del cristianismo se ha trasladado de Europa y Norteamérica al sur del mundo. Hoy la iglesia crece sobre todo en África, Asia y América Latina, y enfrenta a la vez persecución en muchos países y secularización en otros.',
        'América Latina tiene su propia línea en el esquema, porque su historia no sigue el mismo ritmo que la de Europa: tres siglos de colonia católica, la llegada de los primeros evangélicos con las independencias y un crecimiento acelerado desde comienzos del siglo XX.',
        { ejercicio: {
          pregunta: '¿Qué hecho marca, por convención, el comienzo de la Reforma protestante?',
          opciones: [
            { t: 'La publicación de las 95 tesis de Lutero en 1517.', ok: true, por_que: 'El 31 de octubre de 1517 Lutero hizo públicas sus tesis contra las indulgencias; por eso cada 31 de octubre se recuerda el Día de la Reforma.' },
            { t: 'La impresión de la Biblia del Oso en 1569.', ok: false, por_que: 'La Biblia del Oso es un fruto de la Reforma en el mundo hispano, más de cincuenta años después de su comienzo.' },
            { t: 'La paz de Westfalia en 1648.', ok: false, por_que: 'Westfalia cierra la etapa de las guerras de religión; no es el comienzo de la Reforma.' }
          ],
          explicacion: 'La Reforma tuvo precursores, como Wycliffe y Hus, pero se suele fechar su inicio en 1517, cuando las tesis de Lutero desataron un debate que ya no se pudo detener.'
        } }
      ],
      pensar: 'Habacuc oró: «aviva tu obra en medio de los tiempos» (Hab 3:2). Al mirar estos cinco siglos, ¿qué momento de avivamiento te gustaría ver repetido en tu iglesia y en tu país?'
    },
    {
      id: 'mapa', n: 'Del norte al sur: el mapa del cristianismo', ref: 'Hechos 1:8; Apocalipsis 7:9-10', fecha: [1900, 2026],
      visual: [
        esq('esquema-continentes.svg', 'Gráfico de barras con el número de cristianos por continente en 1900 y en 2026: Europa pasa de 381 a 553 millones; Norteamérica de 79 a 275; América Latina de 62 a 620; África de 10 a 780; Asia de 22 a 416; Oceanía de 5 a 31 millones', 'Cristianos por continente, en millones (Status of Global Christianity 2026).', 'Por continente'),
        tabla({
          titulo: 'El cristianismo en 1900 y en 2026',
          cab: ['', '1900', '2026'],
          filas: [
            ['Cristianos en el mundo', '558 millones', '2.674 millones'],
            ['Porcentaje de la población mundial', '34,5 %', '32,2 %'],
            ['Cristianos que viven en el sur global', '17,6 %', '69,0 %'],
            ['África', '9,6 millones', '779,6 millones'],
            ['América Latina', '62,0 millones', '619,5 millones'],
            ['Europa (con Rusia)', '380,6 millones', '553,3 millones'],
            ['Asia', '22,0 millones', '415,8 millones'],
            ['Norteamérica', '79,3 millones', '275,2 millones'],
            ['Oceanía', '4,8 millones', '30,6 millones']
          ],
          nota: 'Fuente: Center for the Study of Global Christianity, Status of Global Christianity, 2026. Las cifras de cristianos incluyen a todas las tradiciones (católicos, ortodoxos, protestantes, independientes) y son estimaciones.'
        }),
        mapa({ view: V.mundo, lugares: ['h-wittenberg', 'h-ginebra', 'h-londres', 'h-serampore', 'h-shanghai', 'h-los-angeles', 'h-valparaiso', 'h-belem', 'h-seul', 'h-abeokuta'] }, 'Mapa')
      ],
      texto: [
        'Cuando comenzó la Reforma, el cristianismo era casi por completo una religión europea. Había cristianos antiguos en Etiopía, Egipto, Armenia, la India y Medio Oriente, pero la gran mayoría vivía en Europa. En 1900, cuatro siglos después, la situación no había cambiado tanto: de cada cien cristianos del mundo, más de ochenta vivían en Europa y Norteamérica.',
        { h: 'El gran cambio del siglo XX' },
        'En el siglo XX ocurrió uno de los cambios más grandes de toda la historia de la iglesia. Los cristianos de África pasaron de unos diez millones en 1900 a casi 780 millones en 2026: hoy África es el continente con más cristianos. América Latina se multiplicó por diez, y Asia, por casi veinte. Mientras tanto, en Europa el número de cristianos casi se detuvo y hoy disminuye cada año. El resultado es que en 2026 casi siete de cada diez cristianos viven en el sur global: África, América Latina, Asia y Oceanía.',
        'Esto significa que el creyente típico de hoy no es un europeo ni un norteamericano. Es más probable que sea una mujer africana, un campesino de la India, una familia brasileña o un obrero chino que se reúne en una casa. La iglesia que Juan vio en su visión, formada «de todas naciones y tribus y pueblos y lenguas» (Ap 7:9), nunca había estado tan cerca de verse en la tierra.',
        { h: 'Por qué sucedió' },
        'Este cambio tiene muchas causas, que se estudian en las rutas V a VIII: el movimiento misionero del siglo XIX, la traducción de la Biblia a cientos de lenguas, el surgimiento de iglesias dirigidas por creyentes de cada país, los avivamientos y el movimiento pentecostal, que pasó de menos de un millón de personas en 1900 a unos 676 millones en 2026, si se cuentan juntos los pentecostales y los carismáticos. También influyó la persecución, que muchas veces dispersó a los creyentes y extendió el evangelio, como en Hechos 8:4.',
        'Las cifras son estimaciones de investigadores que estudian el cristianismo mundial, y se revisan cada año. Lo importante no es el número exacto sino la tendencia: el evangelio que salió de Jerusalén hacia «lo último de la tierra» (Hch 1:8) sigue avanzando, y hoy su centro de gravedad está en el sur.'
      ],
      pensar: 'Hoy la mayoría de los cristianos vive en el sur del mundo, y muchos países que enviaron misioneros necesitan ser evangelizados de nuevo. ¿Qué responsabilidad tiene la iglesia de América Latina en la misión mundial?'
    },
    {
      id: 'familias', n: 'Las familias evangélicas', ref: 'Efesios 4:3-6; Juan 17:21', fecha: [1517, 1910],
      visual: [
        esq('esquema-familias.svg', 'Árbol de las familias evangélicas desde la Reforma: luteranos (1517); reformados, de donde salen presbiterianos y congregacionales (1520-1560); anabautistas y menonitas (1525); anglicanos (1534); bautistas (1609), con raíces puritanas e influencia anabautista; metodistas (1738), salidos del anglicanismo; el movimiento de santidad (siglo XIX), salido del metodismo; y los pentecostales (1901-1906), salidos del movimiento de santidad', 'Cómo se relacionan las principales familias evangélicas.', 'Familias'),
        tabla({
          titulo: 'Las familias y lo que las distingue',
          cab: ['Familia', 'Origen', 'Rasgo característico'],
          filas: [
            ['Luteranos', 'Lutero, Alemania (1517)', 'Justificación por la fe; liturgia y canto congregacional'],
            ['Reformados y presbiterianos', 'Zuinglio y Calvino, Suiza; Knox, Escocia', 'Soberanía de Dios; iglesia gobernada por ancianos (presbíteros)'],
            ['Anabautistas y menonitas', 'Zúrich (1525); Menno Simons', 'Bautismo de creyentes; iglesia separada del Estado'],
            ['Anglicanos', 'Inglaterra (1534)', 'Iglesia nacional con obispos y el Libro de Oración Común'],
            ['Bautistas', 'Ámsterdam y Londres (1609-1612)', 'Bautismo de creyentes por inmersión; libertad religiosa'],
            ['Metodistas', 'Juan Wesley, Inglaterra (1738)', 'Conversión personal, santidad, predicación itinerante'],
            ['Santidad', 'Estados Unidos e Inglaterra (siglo XIX)', 'Santificación como experiencia; vida consagrada'],
            ['Pentecostales', 'Topeka, Los Ángeles, Valparaíso (1901-1910)', 'Bautismo en el Espíritu Santo y dones espirituales para hoy']
          ],
          nota: 'Es un esquema simplificado: hay muchas iglesias que combinan rasgos de varias familias, y otras que no encajan en ninguna.'
        })
      ],
      texto: [
        'Quien visita varias iglesias evangélicas descubre que no todas son iguales: unas tienen obispos y otras ancianos; unas bautizan a los niños y otras solo a los que creen; unas cantan con liturgia y otras con libertad; unas esperan los dones del Espíritu y otras no. Esa variedad tiene una historia, y el esquema muestra cómo se relacionan las principales familias que nacieron de la Reforma.',
        { h: 'Las ramas de la Reforma' },
        'En el siglo XVI surgieron cuatro grandes ramas: los luteranos, los reformados (de donde vienen los presbiterianos), los anglicanos y los anabautistas. Las tres primeras siguieron siendo iglesias ligadas al Estado, que bautizaban a todos los niños de su territorio. Los anabautistas, en cambio, insistieron en que la iglesia está formada por los que creen y se bautizan por decisión propia. En el siglo XVII nacieron los bautistas, que unieron el bautismo de creyentes con la teología de los puritanos ingleses.',
        { h: 'Las ramas de los avivamientos' },
        'En el siglo XVIII, el avivamiento de Juan Wesley dio origen al metodismo, que enseñaba la conversión personal y la búsqueda de una vida santa. En el siglo XIX, del metodismo surgió el movimiento de santidad, que hablaba de una experiencia de consagración posterior a la conversión, a veces llamada «bautismo del Espíritu». De ese ambiente nació, a comienzos del siglo XX, el movimiento pentecostal, que entendió el bautismo en el Espíritu Santo como una investidura de poder para el servicio, acompañada de la señal de hablar en otras lenguas (Hch 2:4; 1:8).',
        'Por eso un creyente pentecostal de hoy es heredero de toda esta historia: de la Reforma recibe la autoridad de la Escritura y la justificación por la fe; de los anabautistas y los bautistas, el bautismo de los que creen; de Wesley y la santidad, la búsqueda de una vida consagrada; y de Azusa y Valparaíso, la experiencia del Espíritu.',
        { h: 'Diversidad y unidad' },
        'Esta diversidad tiene un lado triste, porque muchas divisiones nacieron del orgullo o de disputas menores. Pero también tiene un lado que se puede valorar: todas estas familias confiesan al mismo Señor, la misma Escritura y la misma salvación por gracia. Pablo exhorta a guardar «la unidad del Espíritu en el vínculo de la paz», porque hay «un Señor, una fe, un bautismo» (Ef 4:3, 5).',
        { ejercicio: {
          pregunta: '¿De qué familia evangélica surgió directamente el movimiento de santidad, del que nació el pentecostalismo?',
          opciones: [
            { t: 'De los luteranos.', ok: false, por_que: 'Los luteranos influyeron en los moravos y, por medio de ellos, en Wesley, pero el movimiento de santidad surgió del metodismo.' },
            { t: 'De los metodistas.', ok: true, por_que: 'El movimiento de santidad nació en el metodismo del siglo XIX, a partir de la enseñanza de Wesley sobre la santificación.' },
            { t: 'De los anglicanos.', ok: false, por_que: 'El metodismo salió del anglicanismo, pero el movimiento de santidad surgió del metodismo, un siglo después.' }
          ],
          explicacion: 'La línea es: anglicanos → metodistas (Wesley, siglo XVIII) → movimiento de santidad (siglo XIX) → pentecostales (siglo XX). Por eso los primeros pentecostales usaron muchos himnos y expresiones del metodismo.'
        } }
      ],
      pensar: 'Jesús oró «para que todos sean uno … para que el mundo crea» (Jn 17:21). ¿Cómo puedes vivir la unidad con creyentes de otras familias evangélicas sin renunciar a lo que crees?'
    },
    {
      id: 'leer', n: 'Cómo leer la historia de la iglesia', ref: 'Mateo 13:31-32; Hechos 17:11; 1 Corintios 10:11', fecha: [1517, 2026],
      visual: [
        cita('Mateo 13:31-32', '@@mt/13/31-32'),
        tabla({
          titulo: 'Cuatro preguntas para leer la historia',
          cab: ['Pregunta', 'Para qué sirve'],
          filas: [
            ['¿Qué dice la Escritura?', 'La Biblia es el juez de la historia, no al revés (Hch 17:11)'],
            ['¿Qué hizo Dios?', 'Reconocer la mano del Señor que edifica su iglesia (Mt 16:18)'],
            ['¿Qué hicieron los hombres?', 'Ver sus aciertos y sus pecados, sin idealizar ni despreciar'],
            ['¿Qué aprendo yo?', 'La historia es ejemplo y advertencia (1 Co 10:11)']
          ]
        })
      ],
      texto: [
        'La historia de la iglesia se puede leer de maneras muy distintas. Algunos la leen como una historia de héroes que nunca se equivocaron; otros, como una historia de poder, guerras y ambiciones en la que Dios no aparece. Ninguna de las dos lecturas hace justicia a lo que pasó. La Biblia ofrece una manera mejor de mirar el pasado.',
        { h: 'La obra de Dios' },
        'Jesús comparó el reino de los cielos con un grano de mostaza, «la más pequeña de todas las semillas», que crece hasta hacerse árbol (Mt 13:31-32). La historia de la iglesia es, ante todo, la historia de ese crecimiento: el Señor edificando su iglesia a través de los siglos, a pesar de la persecución, de las herejías y de la infidelidad de los suyos. Muchas veces Dios obró por medio de personas pequeñas y desconocidas: un monje en una celda, una madre que oraba, un zapatero que leía mapas, un colportor con una mula cargada de Biblias.',
        { h: 'La responsabilidad de los hombres' },
        'Al mismo tiempo, la historia de la iglesia está hecha por personas falibles. Los reformadores tuvieron convicciones admirables y también errores graves: algunos persiguieron a otros creyentes, otros aprobaron la violencia o callaron ante la injusticia. Reconocerlo no le quita valor a lo que Dios hizo por medio de ellos; más bien muestra que el tesoro está «en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros» (2 Co 4:7).',
        { h: 'La Escritura como juez' },
        'Para un creyente, la tradición tiene valor, pero no tiene la última palabra. Los creyentes de Berea examinaban lo que Pablo enseñaba, «escudriñando cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11). Esa misma actitud es la que se pide al estudiar la historia: no se acepta una doctrina porque sea antigua ni se la rechaza porque sea nueva, sino que se la pesa con la Biblia.',
        'Pablo dice que lo que le sucedió a Israel en el desierto «están escritas para amonestarnos a nosotros» (1 Co 10:11). Lo mismo vale para la historia de la iglesia: sus avivamientos animan, sus divisiones advierten y sus mártires desafían. En cada estación de este recurso, la pregunta «Para pensar» invita a pasar de la información a la aplicación.'
      ],
      pensar: 'Si alguien escribiera dentro de cien años la historia de tu iglesia local, ¿qué te gustaría que dijera de esta generación? ¿Qué puedes hacer hoy para que sea así?'
    }
  ];
