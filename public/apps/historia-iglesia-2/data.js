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
  const HAY = new Set(["azusa.jpg", "bautismo-1525.webp", "biblia-lutero-1534.jpg", "bonhoeffer.jpg", "calvino.jpg", "campamento.webp", "colonial.webp", "colportor.webp", "congregacion.webp", "contrabando.webp", "crowther.jpg", "edimburgo-1910.jpg", "emancipacion.webp", "esquema-biblia.svg", "esquema-continentes.svg", "esquema-etapas.svg", "esquema-familias.svg", "esquema-latam.svg", "esquema-pentecostales.svg", "esquema-solas.svg", "gardiner.webp", "herrnhut.webp", "hudson-taylor.jpg", "iglesia-casa.webp", "lutero-cranach.jpg", "mayflower.webp", "perseguida.webp", "puritanos.webp", "serampore.webp", "tesis.webp", "thomson.webp", "trento.webp", "tyndale-1526.jpg", "valparaiso.webp", "wartburg.webp", "wesley.webp"]);
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
        cita('Mateo 16:18', 'Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.')
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
        cita('Mateo 13:31-32', 'Otra parábola les refirió, diciendo: El reino de los cielos es semejante al grano de mostaza, que un hombre tomó y sembró en su campo; el cual a la verdad es la más pequeña de todas las semillas; pero cuando ha crecido, es la mayor de las hortalizas, y se hace árbol, de tal manera que vienen las aves del cielo y hacen nidos en sus ramas.'),
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
  // ================== RUTA II. La Reforma (siglo XVI) ==================
  const reforma = [
    {
      id: 'europa', n: 'Europa hacia 1500', ref: 'Marcos 7:13; Salmo 119:130; Isaías 40:8', fecha: 1500,
      visual: [
        img('../de-la-biblia-a-nosotros/img/imprenta.webp', 'Taller de imprenta del siglo XV: un operario tira de la palanca de una prensa de madera mientras otro entinta los tipos y un tercero revisa un pliego recién impreso', 'La imprenta de tipos móviles, hacia 1455, cambió la manera de difundir las ideas (recreación).'),
        mapa({ view: V.europa, lugares: ['h-oxford', 'h-praga', 'h-roma', 'h-wittenberg', 'h-basilea', 'h-paris', 'h-sevilla'] }, 'Mapa'),
        tabla({
          titulo: 'Antes de Lutero',
          cab: ['Fecha', 'Hecho'],
          filas: [
            ['Hacia 1175', 'Pedro Valdo, en Lyon, hace traducir la Escritura y predica la pobreza; nacen los valdenses'],
            ['Hacia 1380', 'Juan Wycliffe, en Oxford, impulsa la primera Biblia completa en inglés'],
            ['1415', 'Juan Hus, predicador de Praga, muere en la hoguera en el Concilio de Constanza'],
            ['Hacia 1455', 'Gutenberg imprime en Maguncia la primera Biblia con tipos móviles'],
            ['1516', 'Erasmo publica en Basilea el Nuevo Testamento en griego']
          ],
          nota: 'Los precursores de la Reforma se estudian en Historia de la Iglesia I (en preparación).'
        })
      ],
      texto: [
        'Hacia el año 1500, casi todos los habitantes de Europa occidental eran bautizados en la iglesia de Roma y vivían su fe dentro de ella. Las catedrales dominaban las ciudades, el calendario seguía las fiestas de la iglesia y el papa era una de las figuras más poderosas del continente. Pero muchos sentían que algo andaba mal.',
        { h: 'Una iglesia que necesitaba reforma' },
        'Los papas del Renacimiento vivían como príncipes, hacían guerras y daban cargos a sus familiares. Muchos sacerdotes de pueblo apenas sabían latín y no predicaban. La salvación se vivía como un sistema de méritos: misas, peregrinaciones, reliquias y obras que ayudaban a reducir el tiempo en el purgatorio. Las indulgencias, que la iglesia concedía a cambio de una obra piadosa o de una ofrenda, se habían convertido en un negocio. La Biblia se leía en latín, una lengua que el pueblo no entendía, y en varios países estaba prohibido traducirla.',
        'Muchos pedían una reforma «en la cabeza y en los miembros», y algunos lo pagaron caro. Pedro Valdo y sus seguidores fueron perseguidos por predicar la Escritura en lengua del pueblo. Juan Wycliffe, en Oxford, enseñó que la Biblia está por encima del papa e impulsó una traducción al inglés. Juan Hus predicó en Praga ideas parecidas y murió en la hoguera en 1415. Jesús había advertido contra los que invalidan «la palabra de Dios» con su tradición (Mr 7:13), y estos precursores se atrevieron a decirlo en su tiempo.',
        { h: 'Dos herramientas nuevas' },
        'Dos cosas prepararon el camino de la Reforma. La primera fue el humanismo, un movimiento de eruditos que quería volver «a las fuentes»: leer los textos antiguos en su lengua original. En 1516 Erasmo de Róterdam publicó el Nuevo Testamento en griego, y por primera vez muchos maestros pudieron comparar la traducción latina con el texto que escribieron los apóstoles. La segunda fue la imprenta de tipos móviles, que Gutenberg usó hacia 1455 para imprimir la Biblia. Hacia 1500 ya había imprentas en más de doscientas ciudades de Europa: un escrito podía multiplicarse por miles en pocas semanas.',
        'Así, cuando un profesor de Wittenberg comenzó a enseñar que el pecador es justificado por la fe, sus ideas no quedaron encerradas en un aula. El salmista dice que «la exposición de tus palabras alumbra» (Sal 119:130), y en el siglo XVI esa luz llegó, por primera vez, a las manos de miles de personas comunes.'
      ],
      pensar: 'Durante siglos, la mayoría de los cristianos de Europa no pudo leer la Biblia en su lengua. Hoy la tienes al alcance de la mano. ¿Qué lugar ocupa realmente en tu semana?'
    },
    {
      id: 'lutero', n: 'Lutero: un monje en busca de paz', ref: 'Romanos 1:16-17; Habacuc 2:4; Romanos 3:23-24', fecha: [1483, 1517],
      visual: [
        foto('lutero-cranach.jpg', 'Retrato de Martín Lutero pintado por Lucas Cranach el Viejo en 1529: un hombre de unos cuarenta y cinco años, de rostro ancho, con gorro y ropa negra de profesor, sobre fondo verde azulado', 'Martín Lutero, por Lucas Cranach el Viejo (1529).', 'Dominio público, vía Wikimedia Commons', 'Retrato'),
        cita('Romanos 1:16-17', 'Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego. Porque en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá.')
      ],
      texto: [
        'Martín Lutero nació en 1483 en Eisleben, en Alemania, hijo de un minero que había prosperado y que quería que su hijo fuera abogado. En julio de 1505, cuando volvía a la universidad, lo sorprendió una tormenta y un rayo cayó cerca de él. Aterrado, prometió hacerse monje. Pocos días después entró en el monasterio de los agustinos de Erfurt.',
        { h: 'Un corazón sin paz' },
        'Lutero fue un monje ejemplar: oraba, ayunaba, pasaba noches en vela y se confesaba durante horas. Pero cuanto más se esforzaba, menos paz tenía. Sabía que Dios es justo y que exige un corazón perfecto, y sabía que su corazón no lo era. Llegó a decir que odiaba al Dios justo que castiga a los pecadores. Su superior, Johann von Staupitz, le aconsejó mirar las heridas de Cristo y, para ocuparlo, lo envió a estudiar teología. En 1512 Lutero fue nombrado doctor y profesor de Biblia en la pequeña universidad de Wittenberg.',
        { h: 'El descubrimiento' },
        'Entre 1513 y 1517 Lutero enseñó los Salmos, Romanos y Gálatas. Le costaba especialmente un versículo: «en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá» (Ro 1:17). Él entendía «la justicia de Dios» como la justicia con que Dios castiga. Meditando día y noche en el texto, comprendió que Pablo habla de otra justicia: la que Dios da gratuitamente al que cree. El pecador no se vuelve aceptable ante Dios por sus obras, sino que es declarado justo por la fe en Cristo, que cargó con su pecado. Es lo que dice Pablo un poco más adelante: «siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús» (Ro 3:24).',
        'Años después, Lutero recordó ese momento con palabras famosas: sintió que había nacido de nuevo y que había entrado por puertas abiertas en el paraíso mismo. Toda la Escritura le pareció distinta. El versículo que Pablo cita viene del profeta Habacuc: «mas el justo por su fe vivirá» (Hab 2:4). Una frase escrita seis siglos antes de Cristo, citada por un apóstol, cambió la vida de un monje y, a través de él, la historia de Europa.',
        { h: 'Lo que estaba en juego' },
        'El descubrimiento de Lutero no fue una idea nueva: era el mensaje de Pablo, que Agustín había defendido mil años antes. Lo nuevo fue que Lutero sacó todas sus consecuencias. Si somos justificados solo por la fe, entonces no hacen falta méritos acumulados, ni indulgencias, ni un sistema que venda el perdón. El perdón es un regalo. Esa convicción lo llevaría, en pocos años, a enfrentarse con el papa y el emperador.'
      ],
      pensar: 'Lutero buscó la paz con Dios en sus esfuerzos y la encontró en la gracia. ¿Hay algo en tu vida cristiana con lo que todavía intentas «ganarte» el favor de Dios?'
    },
    {
      id: 'tesis', n: 'Las 95 tesis', ref: 'Mateo 4:17; Hechos 3:19; Efesios 2:8-9', fecha: 1517,
      visual: [
        img('tesis.webp', 'Martín Lutero, un monje agustino de unos treinta y cuatro años con hábito negro y tonsura, fija un pliego de papel en la gran puerta de madera de la iglesia del castillo de Wittenberg; algunos estudiantes y vecinos lo observan', 'Wittenberg, 31 de octubre de 1517 (recreación de la tradición).'),
        pasos([
          { t: 'Wittenberg: las 95 tesis (octubre de 1517)', fecha: 1517, estado: { view: V.reforma, lugares: ['h-wittenberg'] } },
          { t: 'Heidelberg: Lutero explica su teología a los agustinos (1518)', fecha: 1518, estado: { view: V.reforma, lugares: ['h-wittenberg', 'h-heidelberg'] } },
          { t: 'Leipzig: debate con Juan Eck (1519)', fecha: 1519, estado: { view: V.reforma, lugares: ['h-wittenberg', 'h-heidelberg', 'h-leipzig'] } },
          { t: 'Wittenberg: Lutero quema la bula del papa (diciembre de 1520)', fecha: 1520, estado: { view: V.reforma, lugares: ['h-wittenberg', 'h-leipzig', 'h-roma'] } }
        ], 'De las tesis a la ruptura')
      ],
      texto: [
        'En 1517 llegó a los alrededores de Wittenberg un predicador de indulgencias, el dominico Juan Tetzel. El papa León X necesitaba dinero para construir la basílica de San Pedro en Roma, y el arzobispo Alberto de Maguncia, que debía grandes sumas, recibía una parte. Según la fama de su predicación, Tetzel prometía que el dinero entregado por un difunto lo libraba del purgatorio. Los fieles de Lutero cruzaban la frontera para comprar indulgencias y después le decían que ya no necesitaban arrepentirse.',
        { h: 'El 31 de octubre de 1517' },
        'Lutero escribió noventa y cinco tesis, es decir, afirmaciones para un debate académico, y el 31 de octubre de 1517 se las envió al arzobispo. Según una tradición antigua, ese mismo día las clavó en la puerta de la iglesia del castillo de Wittenberg, que servía de tablero de anuncios de la universidad; algunos historiadores dudan de que lo haya hecho así, pero la fecha se recuerda desde entonces como el Día de la Reforma.',
        'La primera tesis decía que, cuando Jesús mandó «Arrepentíos», quiso que toda la vida de los creyentes fuera arrepentimiento. Lutero recordaba que el perdón no se compra con dinero sino que nace de un corazón que se vuelve a Dios: «arrepentíos y convertíos, para que sean borrados vuestros pecados» (Hch 3:19). La tesis 62 resumía su convicción: el verdadero tesoro de la iglesia es el santo evangelio de la gloria y de la gracia de Dios.',
        { h: 'Un debate que no se detuvo' },
        'Lutero escribió en latín, para los eruditos, pero alguien tradujo las tesis al alemán y las imprimió. En dos semanas se leían en toda Alemania. En los años siguientes el debate se volvió más profundo. En Leipzig, en 1519, el teólogo Juan Eck lo llevó a reconocer que también los concilios podían equivocarse, y que Juan Hus había tenido razón en muchas cosas. En 1520 Lutero publicó tres libros que llegaron a miles de lectores: llamó a los príncipes a reformar la iglesia, criticó el sistema de los sacramentos y escribió sobre la libertad del cristiano, que es libre por la fe y servidor de todos por el amor.',
        'El papa respondió con una bula que le daba sesenta días para retractarse. El 10 de diciembre de 1520, ante los estudiantes, Lutero arrojó la bula al fuego. Ya no había vuelta atrás. Lo que empezó como una discusión sobre las indulgencias se había convertido en una pregunta sobre la autoridad: ¿quién decide lo que es verdad en la iglesia, el papa o la Escritura?',
        { ejercicio: {
          pregunta: '¿Qué criticaba principalmente Lutero en las 95 tesis?',
          opciones: [
            { t: 'La venta de indulgencias y la idea de que el perdón se podía comprar.', ok: true, por_que: 'Las tesis atacan la predicación de las indulgencias y recuerdan que el perdón viene del arrepentimiento y de la gracia de Dios.' },
            { t: 'El bautismo de los niños y la misa en latín.', ok: false, por_que: 'Esos temas aparecieron después, en otros debates; las 95 tesis tratan casi solo de las indulgencias y el arrepentimiento.' },
            { t: 'La existencia del papa y de los obispos.', ok: false, por_que: 'En 1517 Lutero todavía apelaba al papa; la ruptura con Roma llegó en los años siguientes.' }
          ],
          explicacion: 'Las tesis eran un llamado a debatir sobre las indulgencias. Lo que nadie esperaba era que, gracias a la imprenta, ese debate llegara en pocas semanas a toda Alemania.'
        } }
      ],
      pensar: 'Lutero dijo que toda la vida del creyente es arrepentimiento. ¿Qué significa para ti vivir en arrepentimiento día a día, y no solo el día de tu conversión?'
    },
    {
      id: 'worms', n: 'Worms y la Biblia alemana', ref: 'Hechos 5:29; Salmo 46:1; Hechos 4:19-20', fecha: [1521, 1546],
      visual: [
        img('wartburg.webp', 'Una pequeña habitación de madera en el castillo de Wartburg: una mesa con un Nuevo Testamento griego abierto, pliegos escritos a mano, una pluma, un tintero y una vela; por la ventana se ven los bosques de Turingia', 'La habitación de Wartburg donde Lutero tradujo el Nuevo Testamento en 1521-1522 (recreación).'),
        foto('biblia-lutero-1534.jpg', 'Portada de la Biblia completa de Lutero, impresa en Wittenberg en 1534, con un grabado en madera y el título en letra gótica alemana', 'Portada de la Biblia de Lutero (Wittenberg, 1534); arriba dice «Gottes wort bleibt ewig», la palabra de Dios permanece para siempre.', 'Dominio público, vía Wikimedia Commons'),
        mapa({ view: V.alemania, lugares: ['h-wittenberg', 'h-worms', 'h-wartburg', 'h-erfurt', 'h-augsburgo'], trazos: ['h-t-lutero'] }, 'Mapa')
      ],
      texto: [
        'En abril de 1521 Lutero fue citado ante la dieta imperial, la asamblea del imperio, en la ciudad de Worms. Presidía el joven emperador Carlos V, que también era rey de España. Lutero viajó con un salvoconducto, aunque sabía que a Juan Hus le habían dado uno y lo habían quemado igual. Frente a una mesa llena de sus libros, le preguntaron si los reconocía como suyos y si se retractaba.',
        { h: '«Mi conciencia está cautiva de la Palabra de Dios»' },
        'Lutero pidió un día para pensar. El 18 de abril respondió que, a menos que lo convencieran con el testimonio de la Escritura o con razones evidentes, no podía retractarse, porque su conciencia estaba cautiva de la Palabra de Dios, y actuar contra la conciencia no era seguro ni correcto. Las palabras «Aquí estoy, no puedo hacer otra cosa» aparecen en las primeras ediciones impresas, aunque quizá no las dijo así. Su actitud recuerda la de los apóstoles: «Es necesario obedecer a Dios antes que a los hombres» (Hch 5:29).',
        'El emperador lo declaró fuera de la ley. Camino a casa, unos jinetes lo secuestraron: eran hombres de su protector, el príncipe Federico de Sajonia, que lo escondieron en el castillo de Wartburg. Allí, disfrazado de caballero, Lutero tradujo el Nuevo Testamento del griego al alemán en unas once semanas. Se publicó en septiembre de 1522 y se agotó enseguida. En 1534, con la ayuda de otros eruditos, apareció la Biblia completa. Su alemán era el de la calle y la casa: Lutero decía que había que escuchar cómo habla la madre en su hogar y los niños en la calle. Esa traducción ayudó a formar la lengua alemana moderna.',
        { h: 'Una iglesia que canta' },
        'Lutero quiso que toda la congregación cantara, y no solo el coro. Escribió himnos en alemán con melodías fáciles; el más conocido, «Castillo fuerte es nuestro Dios», está inspirado en el Salmo 46: «Dios es nuestro amparo y fortaleza» (Sal 46:1). En 1525 se casó con Catalina de Bora, una exmonja, y su hogar se convirtió en modelo de la familia pastoral protestante. En 1530, sus colaboradores presentaron al emperador la Confesión de Augsburgo, que resume la fe luterana.',
        { h: 'Luces y sombras' },
        'Lutero tuvo también graves errores. En la guerra de los campesinos de 1525 pidió a los príncipes reprimir sin piedad a los rebeldes, y en sus últimos años escribió contra los judíos textos duros e injustos, que siglos después fueron usados para fines terribles. Las iglesias luteranas los han rechazado públicamente. Reconocer estas sombras no niega lo que Dios hizo por medio de él, pero recuerda que solo la Escritura, y no ningún reformador, es la regla de la fe. Lutero murió en 1546, en Eisleben, la ciudad donde había nacido.'
      ],
      pensar: 'Lutero arriesgó la vida antes que actuar contra su conciencia sujeta a la Palabra. ¿En qué situación de tu trabajo, tu estudio o tu familia te cuesta más obedecer a Dios antes que a los hombres?'
    },
    {
      id: 'solas', n: 'Las cinco «solas»', ref: 'Efesios 2:8-9; 2 Timoteo 3:16-17; 1 Timoteo 2:5; 1 Pedro 2:9', fecha: [1517, 1560],
      visual: [
        esq('esquema-solas.svg', 'Esquema de las cinco solas como columnas que sostienen un mismo techo: Sola Escritura (2 Ti 3:16-17), Sola gracia (Ef 2:8), Sola fe (Ro 3:28), Solo Cristo (1 Ti 2:5) y Solo a Dios la gloria (1 Co 10:31); en la base, el sacerdocio de todos los creyentes (1 P 2:9)', 'Las cinco convicciones de la Reforma.', 'Las cinco solas'),
        tabla({
          titulo: 'Qué afirmaban y qué rechazaban',
          cab: ['Convicción', 'Afirma', 'Rechaza'],
          filas: [
            ['Sola Escritura', 'La Biblia es la autoridad final en la fe y en la vida', 'Tradiciones y decretos que la contradicen o se ponen a su altura'],
            ['Sola gracia', 'La salvación es un regalo que Dios da sin que lo merezcamos', 'La idea de merecer el perdón'],
            ['Sola fe', 'Somos justificados al confiar en Cristo, no por obras', 'Indulgencias, méritos y obras como causa de la salvación'],
            ['Solo Cristo', 'Cristo es el único mediador y su sacrificio basta', 'Otros mediadores y la misa como sacrificio repetido'],
            ['Solo a Dios la gloria', 'Toda la vida es para la gloria de Dios', 'La gloria de los hombres y de las instituciones']
          ],
          nota: 'La lista de las cinco «solas» se formuló en el siglo XX; las convicciones son las de los reformadores del siglo XVI.'
        })
      ],
      texto: [
        'La Reforma no fue solo una protesta contra abusos. Fue la recuperación de convicciones bíblicas que los reformadores resumían con la palabra latina sola, «solo». Con el tiempo se ordenaron en cinco frases, que se repiten hasta hoy en las iglesias evangélicas.',
        { h: 'Sola Escritura' },
        'La Biblia es la autoridad final de la iglesia. Los reformadores no despreciaban a los padres de la iglesia ni los concilios, pero los ponían bajo la Escritura, porque «toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia» (2 Ti 3:16). De esta convicción nacieron las traducciones a las lenguas del pueblo y la predicación como centro del culto.',
        { h: 'Sola gracia, sola fe' },
        'La salvación es un regalo inmerecido: «por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe» (Ef 2:8-9). La fe no es una obra que gane la salvación, sino la mano vacía que recibe lo que Dios da. Los reformadores insistían en que la fe verdadera produce obras, porque somos creados en Cristo «para buenas obras» (Ef 2:10), pero las obras son fruto de la salvación y no su causa.',
        { h: 'Solo Cristo, solo a Dios la gloria' },
        'Cristo es suficiente. Hay «un solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5), y su sacrificio en la cruz no necesita repetirse, porque «con una sola ofrenda hizo perfectos para siempre a los santificados» (He 10:14). Por eso los reformadores rechazaron la intercesión de los santos como mediadores y la misa entendida como sacrificio. Y como todo viene de Dios, toda la gloria es suya: el trabajo, el hogar y el estudio pueden ser vividos «para la gloria de Dios» (1 Co 10:31).',
        { h: 'El sacerdocio de todos los creyentes' },
        'De estas convicciones surgió otra muy práctica. Si Cristo es el único mediador, todo creyente tiene acceso directo a Dios. Pedro llama a toda la iglesia «real sacerdocio» (1 P 2:9). Lutero enseñó que un zapatero o una madre que sirven a Dios en su vocación hacen una obra tan santa como la de un sacerdote. Los pastores siguen teniendo un llamado especial para enseñar, pero la iglesia no se divide en una clase de religiosos y otra de laicos pasivos: todos son ministros.',
        { ejercicio: {
          pregunta: 'Según los reformadores, ¿qué relación hay entre la fe y las buenas obras?',
          opciones: [
            { t: 'Las buenas obras no importan, porque basta con creer.', ok: false, por_que: 'Los reformadores enseñaron que la fe verdadera siempre produce obras; una fe sin obras está muerta (Stg 2:17).' },
            { t: 'Las buenas obras son el fruto de la salvación, no su causa.', ok: true, por_que: 'Somos salvos por la fe, y por eso hacemos buenas obras: creados en Cristo «para buenas obras» (Ef 2:10).' },
            { t: 'La fe y las obras juntas ganan la salvación.', ok: false, por_que: 'Esa era la enseñanza que los reformadores rechazaron: las obras no aportan méritos para ser justificados.' }
          ],
          explicacion: 'La fórmula clásica dice que somos justificados solo por la fe, pero la fe que justifica nunca está sola: siempre va acompañada de amor y de obras.'
        } }
      ],
      pensar: 'Pedro dice que todos los creyentes son «real sacerdocio». ¿Cómo puedes servir a Dios como sacerdote en el lugar donde trabajas o estudias esta semana?'
    },
    {
      id: 'zuinglio', n: 'Zuinglio y Zúrich', ref: '1 Corintios 11:23-26; Mateo 26:26-28; Hebreos 10:14', fecha: [1519, 1531],
      visual: [
        mapa({ view: V.suiza, lugares: ['h-zurich', 'h-basilea', 'h-ginebra', 'h-marburgo', 'h-estrasburgo'] }, 'Mapa'),
        cita('1 Corintios 11:23-26', 'Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan; y habiendo dado gracias, lo partió, y dijo: Tomad, comed; esto es mi cuerpo que por vosotros es partido; haced esto en memoria de mí. Asimismo tomó también la copa, después de haber cenado, diciendo: Esta copa es el nuevo pacto en mi sangre; haced esto todas las veces que la bebiereis, en memoria de mí. Así, pues, todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del Señor anunciáis hasta que él venga.')
      ],
      texto: [
        'Al mismo tiempo que Lutero, pero sin depender de él, un sacerdote suizo llegaba a convicciones parecidas. Ulrico Zuinglio, nacido en 1484, era un humanista que había estudiado el Nuevo Testamento griego de Erasmo y lo copiaba a mano para aprenderlo de memoria. El 1 de enero de 1519 asumió como predicador de la catedral de Zúrich y anunció algo nuevo: en vez de seguir las lecturas fijas del año, predicaría el Evangelio de Mateo capítulo por capítulo.',
        { h: 'La reforma de una ciudad' },
        'La predicación de Zuinglio fue cambiando la ciudad. En 1522 algunos de sus amigos comieron salchichas en Cuaresma, y él los defendió diciendo que la Escritura no prohibía comer carne en esos días. En 1523 el concejo de Zúrich organizó un debate público y decidió que en la ciudad se predicaría solo lo que pudiera probarse con la Biblia. Se quitaron las imágenes de las iglesias, se suprimió la misa y la Cena del Señor se celebró con sencillez. Zuinglio reunía cada mañana a los pastores para estudiar el Antiguo Testamento en hebreo y el Nuevo en griego; de ese trabajo salió la Biblia de Zúrich, completa en 1531.',
        { h: 'Marburgo: la Cena del Señor' },
        'Los príncipes protestantes querían una alianza entre alemanes y suizos, y en 1529 reunieron a Lutero y Zuinglio en Marburgo. Estuvieron de acuerdo en catorce de quince puntos: la Trinidad, la justificación por la fe, la autoridad de la Escritura. Pero no se pusieron de acuerdo en la Cena del Señor. Lutero escribió con tiza sobre la mesa «Esto es mi cuerpo» (Mt 26:26) y no aceptó otra interpretación. Se separaron sin darse la mano como hermanos, y la Reforma quedó dividida en dos ramas: la luterana y la reformada.',
        { posturas: {
          titulo: '¿Qué significa «esto es mi cuerpo»?',
          a: { n: 'Presencia real (Lutero)', t: 'Cristo está presente con su cuerpo y su sangre «en, con y bajo» el pan y el vino, aunque estos no se transforman. Las palabras de Jesús deben tomarse literalmente (Mt 26:26).' },
          b: { n: 'Memorial (Zuinglio)', t: 'El pan y el vino representan el cuerpo y la sangre de Cristo. La Cena es un recuerdo y una proclamación de su muerte: «haced esto en memoria de mí» (1 Co 11:24), «la muerte del Señor anunciáis hasta que él venga» (1 Co 11:26).' },
          c: 'Calvino propuso un camino intermedio: Cristo está presente espiritualmente y el creyente se alimenta de Él por la fe. Las iglesias pentecostales y la mayoría de las evangélicas de América Latina celebran la Cena como una ordenanza que Cristo mandó, un memorial de su muerte, una comunión con Él por la fe y un anuncio de su venida, sin entender que el pan y el vino cambien de sustancia ni que se repita su sacrificio (He 10:14).'
        } },
        'Zuinglio murió en 1531 en la batalla de Kappel, adonde había ido como capellán de las tropas de Zúrich en una guerra contra los cantones católicos. Su sucesor, Enrique Bullinger, condujo la iglesia de Zúrich durante más de cuarenta años, y su obra preparó el camino de Calvino.'
      ],
      pensar: 'Lutero y Zuinglio coincidían en casi todo y se separaron por un solo punto. ¿Cómo distingues entre las verdades por las que vale la pena separarse y las diferencias que pueden convivir dentro del amor?'
    },
    {
      id: 'calvino', n: 'Calvino y Ginebra', ref: 'Romanos 11:36; Efesios 4:11-12; Salmo 119:105', fecha: [1536, 1564],
      visual: [
        foto('calvino.jpg', 'Retrato anónimo de Juan Calvino, del siglo XVI: un hombre delgado de barba larga y oscura, con gorro negro y ropa de erudito', 'Juan Calvino, retrato anónimo francés de hacia 1550 (Museo Catharijneconvent, Utrecht).', 'Dominio público, vía Wikimedia Commons', 'Retrato'),
        pasos([
          { t: 'Ginebra, ciudad de la Reforma (1541)', fecha: 1541, estado: { view: V.europa, lugares: ['h-ginebra'] } },
          { t: 'Llegan refugiados de Francia, Italia, España, Inglaterra y Escocia', fecha: 1555, estado: { view: V.europa, lugares: ['h-ginebra', 'h-paris', 'h-roma', 'h-sevilla', 'h-londres', 'h-edimburgo'] } },
          { t: 'Vuelven a sus países: hugonotes, reformados, puritanos y presbiterianos', fecha: 1560, estado: { view: V.europa1600, capas: ['h-reformados'], lugares: ['h-ginebra', 'h-paris', 'h-amsterdam', 'h-edimburgo', 'h-londres'] } }
        ], 'Ginebra y sus refugiados')
      ],
      texto: [
        'Juan Calvino nació en 1509 en Noyon, Francia, y estudió derecho y letras clásicas. Hacia 1533 tuvo lo que él llamó una «conversión súbita»: Dios sometió su corazón a la enseñanza de la Escritura. Como Francia perseguía a los evangélicos, tuvo que huir. En 1536, con apenas 26 años, publicó en Basilea la Institución de la religión cristiana, una exposición ordenada de la fe que dedicó al rey de Francia para defender a sus hermanos perseguidos. La fue ampliando toda su vida, hasta la edición de 1559.',
        { h: 'Ginebra' },
        'Ese mismo año, de paso por Ginebra, el predicador Guillermo Farel lo convenció de quedarse para ayudar a reformar la ciudad. Los primeros años fueron difíciles: en 1538 los expulsaron. Calvino vivió tres años felices en Estrasburgo, como pastor de los refugiados franceses, y allí se casó. En 1541 Ginebra le rogó que volviera, y se quedó hasta su muerte en 1564. Organizó la iglesia con cuatro ministerios: pastores que predican, maestros que enseñan, ancianos que cuidan la vida de la congregación y diáconos que atienden a los pobres. Predicaba casi todos los días, libro por libro de la Biblia.',
        { h: 'Una escuela para Europa' },
        'Ginebra se convirtió en refugio de perseguidos. Llegaron miles de franceses, italianos, ingleses, escoceses y también españoles, entre ellos varios de los monjes que huyeron de Sevilla con Casiodoro de Reina. En 1559 Calvino fundó una academia para formar pastores, y de allí salieron predicadores hacia Francia, los Países Bajos, Escocia y Hungría. En Ginebra se preparó la Biblia de Ginebra en inglés (1560), la Biblia de los puritanos. El escocés Juan Knox, que vivió allí, escribió que era la escuela de Cristo más perfecta desde los días de los apóstoles.',
        { h: 'Su enseñanza y su sombra' },
        'En el centro de la teología de Calvino estaba la soberanía de Dios, de quien, por quien y para quien son todas las cosas (Ro 11:36). Enseñó con fuerza la autoridad de la Escritura, la unión del creyente con Cristo, la obra del Espíritu Santo y la predestinación, un tema que después dividió a sus herederos y que se estudia en la ruta III. Su legado incluye también una mancha: en 1553 apoyó el proceso contra Miguel Servet, un médico español que negaba la Trinidad, quien murió en la hoguera en Ginebra. Así se castigaba entonces la herejía en casi toda Europa, católica y protestante, pero es un recordatorio de que la verdad no se defiende con la espada. En 1903, los reformados de Ginebra levantaron un monumento de arrepentimiento en el lugar donde murió Servet.'
      ],
      pensar: 'Calvino organizó la iglesia para que cada creyente fuera cuidado: con predicación, enseñanza, ancianos que velan y diáconos que sirven a los necesitados. ¿Cuál de esos ministerios necesita hoy más tu ayuda en tu congregación?'
    },
    {
      id: 'radicales', n: 'La reforma radical', ref: 'Hechos 2:38-41; Hechos 8:36-38; Romanos 6:3-4', fecha: [1525, 1561],
      visual: [
        img('bautismo-1525.webp', 'En la sala sencilla de una casa de Zúrich, en invierno de 1525, un hombre arrodillado recibe agua sobre la cabeza de manos de otro, ante un pequeño grupo de hombres y mujeres con ropa de artesanos del siglo XVI que oran en silencio; la luz de una ventana pequeña ilumina la escena', 'Los primeros bautismos de creyentes en Zúrich, enero de 1525 (recreación; personas anónimas).'),
        cita('Hechos 8:36-38', 'Y yendo por el camino, llegaron a cierta agua, y dijo el eunuco: Aquí hay agua; ¿qué impide que yo sea bautizado? Felipe dijo: Si crees de todo corazón, bien puedes. Y respondiendo, dijo: Creo que Jesucristo es el Hijo de Dios. Y mandó parar el carro; y descendieron ambos al agua, Felipe y el eunuco, y le bautizó.')
      ],
      texto: [
        'Entre los alumnos de Zuinglio había un grupo de jóvenes que quería llevar la Reforma más lejos. Conrado Grebel, Félix Manz y otros leían el Nuevo Testamento y no encontraban en él el bautismo de recién nacidos. En Hechos, primero se oye el evangelio, se cree y luego se bautiza: «los que recibieron su palabra fueron bautizados» (Hch 2:41). Pidieron a Zuinglio y al concejo de Zúrich que la iglesia estuviera formada solo por creyentes que se bautizaran por decisión propia. El concejo se negó y ordenó bautizar a todos los niños.',
        { h: 'El 21 de enero de 1525' },
        'Esa noche, en una casa de Zúrich, el grupo se reunió a orar. Jorge Blaurock pidió a Grebel que lo bautizara según su fe, y después él bautizó a los demás. Fue el comienzo de un movimiento que sus enemigos llamaron «anabautista», es decir, de los que bautizan otra vez. Ellos no lo veían así: entendían que el bautismo de un bebé no era el bautismo del Nuevo Testamento.',
        'La persecución fue terrible, y vino tanto de católicos como de protestantes. Félix Manz fue ahogado en el río Limmat en enero de 1527, por orden de las autoridades protestantes de Zúrich. Ese mismo año, Miguel Sattler fue quemado en Alemania pocos meses después de redactar la Confesión de Schleitheim, que resume la fe de los hermanos suizos: bautismo de creyentes, disciplina en la iglesia, separación del mundo y rechazo de la espada. Miles de anabautistas murieron en las décadas siguientes, muchos cantando himnos camino a la muerte.',
        { h: 'Münster y Menno Simons' },
        'En 1534 un grupo de radicales violentos tomó la ciudad de Münster y proclamó un reino apocalíptico, que terminó en una masacre en 1535. Ese episodio, ajeno a la mayoría pacífica, desprestigió a todos los anabautistas. Un exsacerdote holandés, Menno Simons, reunió a los dispersos y les dio una dirección pacífica; de él vienen los menonitas.',
        { posturas: {
          titulo: '¿A quién se bautiza?',
          a: { n: 'Bautismo de niños', t: 'Luteranos, reformados, anglicanos y católicos bautizan a los hijos de los creyentes. Ven el bautismo como señal del pacto, como la circuncisión en Israel (Col 2:11-12), y recuerdan que en Hechos se bautizaron familias enteras (Hch 16:33).' },
          b: { n: 'Bautismo de creyentes', t: 'Anabautistas, bautistas, pentecostales y la mayoría de las iglesias evangélicas de América Latina bautizan a quienes creen y confiesan su fe. En el Nuevo Testamento el orden es creer y luego bautizarse (Hch 2:38-41; 8:12, 36-38), y la inmersión expresa la muerte y resurrección con Cristo (Ro 6:3-4).' },
          c: 'Este recurso sigue el bautismo de creyentes por inmersión, como lo enseña la mayoría de las iglesias evangélicas de habla hispana. Reconoce, a la vez, que quienes bautizan niños lo hacen convencidos de seguir la Escritura, y que el bautismo no salva por sí mismo: es la confesión pública de una fe que ya salvó.'
        } },
        'El legado de los anabautistas es enorme. Insistieron en que la fe no se impone por la fuerza, en que la iglesia y el Estado deben estar separados y en que la conciencia debe ser libre. Siglos después, esas convicciones fueron aceptadas por casi todas las iglesias evangélicas.'
      ],
      pensar: 'Los anabautistas pagaron con la vida su convicción de que la fe es una decisión personal. ¿Qué significó tu bautismo para ti, y qué significa hoy?'
    },
    {
      id: 'inglaterra', n: 'Inglaterra y Escocia', ref: 'Salmo 119:105; Hechos 7:59-60; Apocalipsis 2:10', fecha: [1526, 1611],
      visual: [
        img('contrabando.webp', 'Un muelle de Londres en 1526: estibadores descargan fardos de tela de un barco mercante; uno de los fardos está abierto y deja ver pequeños libros impresos escondidos entre la tela, que un comerciante cubre con rapidez mientras mira de reojo', 'Los Nuevos Testamentos de Tyndale entraban a Inglaterra escondidos en fardos de mercadería (recreación; personas anónimas).'),
        foto('tyndale-1526.jpg', 'Facsímil del Nuevo Testamento de Guillermo Tyndale abierto en el comienzo del Evangelio de Juan, con letra gótica, iniciales de colores y un grabado del evangelista escribiendo', 'Comienzo del Evangelio de Juan en un facsímil del Nuevo Testamento de Tyndale.', 'Foto: Kevin Rawlings, CC BY 2.0, vía Wikimedia Commons'),
        mapa({ view: V.britania, capas: ['h-anglicanos', 'h-reformados'], lugares: ['h-londres', 'h-oxford', 'h-edimburgo', 'h-amberes', 'h-worms'] }, 'Mapa')
      ],
      texto: [
        'En Inglaterra la Reforma tuvo dos caras: una historia de fe y una historia de poder. La de fe comienza con Guillermo Tyndale, un erudito que quería que el pueblo inglés tuviera la Biblia traducida del griego y del hebreo. Según un testigo de la época, le dijo a un clérigo que, si Dios le daba vida, haría que el muchacho que guía el arado supiera más de la Escritura que él. Como en Inglaterra estaba prohibido traducirla, Tyndale se fue al continente y en 1526 imprimió en Worms su Nuevo Testamento. Los ejemplares entraban escondidos en fardos de tela; los obispos los compraban para quemarlos.',
        'Tyndale fue traicionado en Amberes, encarcelado y, en octubre de 1536, estrangulado y quemado. Según el relato de su muerte, sus últimas palabras fueron una oración: «Señor, abre los ojos del rey de Inglaterra».',
        { h: 'Un rey contra el papa' },
        'La otra cara es política. El rey Enrique VIII quería anular su matrimonio con Catalina de Aragón, que no le había dado un hijo varón, y el papa no lo permitió. En 1534 el Parlamento lo declaró jefe supremo de la iglesia de Inglaterra. Enrique no era protestante de corazón, pero la ruptura con Roma abrió la puerta. En 1539 ordenó poner en cada iglesia la Gran Biblia en inglés, basada en gran parte en la traducción de Tyndale: tres años después de su muerte, la oración del mártir tenía respuesta. Bajo su hijo Eduardo VI, el arzobispo Tomás Cranmer preparó el Libro de Oración Común (1549).',
        { h: 'Los mártires y el acuerdo isabelino' },
        'Entre 1553 y 1558 reinó María Tudor, que restauró el catolicismo. Cerca de trescientas personas murieron en la hoguera, entre ellas los obispos Latimer y Ridley y el propio Cranmer. Según el relato de Juan Foxe, Latimer animó a su compañero diciendo que ese día encenderían en Inglaterra una vela que, por la gracia de Dios, nunca se apagaría. Con Isabel I (1558-1603) se estableció una iglesia de Inglaterra protestante en su doctrina, con obispos y liturgia: el anglicanismo. Su sobrino nieto, Jacobo I, mandó preparar la versión de 1611, que todavía conserva buena parte de las palabras de Tyndale.',
        { h: 'Escocia' },
        'En Escocia la Reforma fue más popular y más ligada a Ginebra. Juan Knox, que había sido condenado a remar en las galeras francesas y luego vivió con Calvino, volvió en 1559. En 1560 el Parlamento escocés adoptó una confesión reformada, y nació la Iglesia de Escocia, gobernada por ancianos o presbíteros. De ella vienen los presbiterianos, que siglos después llegarían a América Latina.'
      ],
      pensar: 'Tyndale murió orando por el rey que lo perseguía, y Dios respondió su oración. ¿Por qué autoridad o persona difícil puedes orar hoy, en vez de solo quejarte?'
    },
    {
      id: 'espana', n: 'La Reforma en España', ref: 'Isaías 40:8; Apocalipsis 2:10; Hebreos 11:36-38', fecha: [1529, 1602],
      visual: [
        img('../de-la-biblia-a-nosotros/img/casiodoro-basilea.webp', 'Casiodoro de Reina, un hombre de unos cincuenta años con barba castaña entrecana y ropa negra de erudito del siglo XVI, revisa un pliego recién impreso en un taller de imprenta de Basilea', 'Casiodoro de Reina en Basilea, 1569 (recreación).'),
        mapa({ view: V.reina, lugares: ['h-sevilla', 'h-valladolid', 'h-ginebra', 'h-londres', 'h-amberes', 'h-francfort', 'h-estrasburgo', 'h-basilea', 'h-amsterdam'], trazos: ['h-t-reina'] }, 'La huida de Reina'),
        foto('../de-la-biblia-a-nosotros/img/biblia-del-oso.webp', 'Portada de la Biblia del Oso de 1569, con el grabado de un oso que come miel de un panal en un árbol', 'Portada de la Biblia del Oso (Basilea, 1569).', 'Dominio público, vía Wikimedia Commons')
      ],
      texto: [
        'Es fácil pensar que la Reforma fue un asunto del norte de Europa, pero también llegó a España. Allí había una larga tradición de estudio bíblico: la Universidad de Alcalá había publicado la Biblia Políglota Complutense, y las obras de Erasmo eran muy leídas. Algunos españoles abrazaron el evangelio y lo pagaron con el exilio o con la vida.',
        { h: 'Los primeros evangélicos españoles' },
        'Juan de Valdés, un humanista de Cuenca, escribió en 1529 un Diálogo de doctrina cristiana y reunió en Nápoles un círculo de creyentes que leía las cartas de Pablo. Francisco de Enzinas, de Burgos, tradujo el Nuevo Testamento del griego y en 1543 se lo presentó al emperador Carlos V; terminó en la cárcel, de donde escapó. Juan Pérez de Pineda publicó otro Nuevo Testamento en Ginebra en 1556. Mientras tanto, en Sevilla y en Valladolid se formaron grupos de lectores de la Biblia y de libros de la Reforma, entre ellos los monjes jerónimos del monasterio de San Isidoro del Campo.',
        { h: 'La huida y los autos de fe' },
        'Un sevillano llamado Julián Hernández llevaba libros evangélicos desde Ginebra escondidos en toneles. En 1557 la Inquisición descubrió los grupos. Doce monjes de San Isidoro alcanzaron a huir, entre ellos Casiodoro de Reina y Cipriano de Valera. Los que se quedaron no tuvieron esa suerte. En 1559 y 1560 se celebraron grandes autos de fe en Valladolid y en Sevilla, con el rey Felipe II presente en uno de ellos. Decenas de personas murieron en la hoguera, entre ellas Julián Hernández, y muchas más fueron condenadas a prisión. A Reina lo quemaron en efigie, porque no lo pudieron atrapar. En pocos años, la Reforma desapareció de España.',
        { h: 'La Biblia del Oso' },
        'Reina vivió como refugiado en Ginebra, Londres, Amberes, Fráncfort y Estrasburgo, perseguido incluso fuera de España, mientras traducía la Biblia del hebreo y del griego. En 1569, en Basilea, se imprimió la primera Biblia completa en español traducida de las lenguas originales, conocida por el oso de su portada. En ella Reina puso el versículo: «la palabra del Dios nuestro permanece para siempre» (Is 40:8). Cipriano de Valera la revisó y la publicó en Ámsterdam en 1602. La Biblia que hoy leen millones de hispanos nació de esos exiliados.',
        'Pero la Biblia de Reina casi no pudo entrar en España ni en América. Durante casi tres siglos, el mundo de habla hispana vivió sin acceso libre a la Escritura en su lengua. La ruta VII cuenta cómo esa Biblia llegó por fin a nuestros países.',
        ir('Leer la historia de la Reina-Valera', '../../de-la-biblia-a-nosotros/'),
        { ejercicio: {
          pregunta: '¿Dónde se imprimió la Biblia del Oso de Casiodoro de Reina, y por qué allí?',
          opciones: [
            { t: 'En Sevilla, con permiso del rey Felipe II.', ok: false, por_que: 'En España estaba prohibida; Reina había huido de Sevilla en 1557 perseguido por la Inquisición.' },
            { t: 'En Basilea, porque en España los evangélicos eran perseguidos.', ok: true, por_que: 'Reina era un exiliado; la imprimió en Basilea, Suiza, en 1569, donde podía hacerlo con libertad.' },
            { t: 'En Roma, por encargo del papa.', ok: false, por_que: 'La Biblia del Oso fue obra de un reformador perseguido; Roma no autorizaba traducciones protestantes.' }
          ],
          explicacion: 'La primera Biblia completa en español traducida de los originales se imprimió en el exilio. La revisión de Valera, de 1602, también se imprimió fuera de España, en Ámsterdam.'
        } }
      ],
      pensar: 'Hebreos recuerda a los que «experimentaron vituperios y azotes, y a más de esto prisiones y cárceles» (He 11:36) por su fe. ¿Qué te dice el precio que pagaron los evangélicos españoles sobre el valor de la Biblia que hoy lees libremente?'
    }
  ];
  // ================== RUTA III. Respuestas y guerras (1540-1648) ==================
  const respuestas = [
    {
      id: 'trento', n: 'La respuesta católica: Trento', ref: 'Romanos 3:28; Marcos 7:13; 2 Timoteo 3:16', fecha: [1545, 1563],
      visual: [
        img('trento.webp', 'Sesión del Concilio de Trento en la catedral de la ciudad: decenas de obispos con mitras blancas y capas sentados en gradas de madera a ambos lados de la nave, frente a una mesa presidida por los legados del papa; un secretario lee un documento en voz alta', 'Una sesión del Concilio de Trento (recreación; personas anónimas).'),
        tabla({
          titulo: 'Trento y la Reforma: los puntos centrales',
          cab: ['Tema', 'Concilio de Trento', 'Reformadores'],
          filas: [
            ['Autoridad', 'La Escritura y la tradición, recibidas con igual reverencia', 'La Escritura como autoridad final, sobre la tradición'],
            ['Biblia', 'La Vulgata latina es la versión auténtica para la enseñanza', 'Traducción de los originales a la lengua del pueblo'],
            ['Canon', 'Incluye los libros que los evangélicos llaman apócrifos', 'El canon hebreo para el Antiguo Testamento'],
            ['Justificación', 'Comienza por gracia y crece con las obras y los sacramentos', 'Declaración de Dios recibida solo por la fe'],
            ['Sacramentos', 'Siete; la misa es un sacrificio', 'Dos ordenanzas: bautismo y Cena del Señor'],
            ['Purgatorio e indulgencias', 'Se afirman, corrigiendo los abusos', 'Se rechazan por no tener base bíblica']
          ]
        })
      ],
      texto: [
        'La iglesia de Roma no se quedó de brazos cruzados. Ya antes de Lutero había católicos que trabajaban por una reforma: en España, el cardenal Cisneros había reformado a los religiosos y promovido la Biblia Políglota de Alcalá. Después de 1517, muchos católicos reconocieron que los abusos eran reales y que la iglesia necesitaba cambiar. Pero no aceptaron la doctrina de los reformadores.',
        { h: 'El Concilio de Trento (1545-1563)' },
        'El papa Pablo III convocó un concilio en la ciudad de Trento, en el norte de Italia. Sesionó con largas interrupciones durante dieciocho años. Corrigió muchos abusos: exigió que los obispos vivieran en sus diócesis, prohibió vender cargos y ordenó crear seminarios para formar mejor a los sacerdotes. Pero en doctrina respondió punto por punto a la Reforma, como resume la tabla. Afirmó que la Escritura y la tradición deben recibirse con igual reverencia, declaró auténtica la Vulgata latina, incluyó en el canon los libros apócrifos, mantuvo los siete sacramentos y la misa como sacrificio, y condenó la enseñanza de que el pecador es justificado solo por la fe.',
        'En los mismos años se creó la Inquisición romana (1542) y se publicó un índice de libros prohibidos (1559), en el que figuraban las Biblias en lengua vulgar sin permiso. En España y en sus colonias, la Inquisición ya existía y actuó con dureza contra los evangélicos, como se vio en Sevilla y Valladolid.',
        { h: 'Una reforma real y una división profunda' },
        'Trento produjo una iglesia católica más disciplinada, con sacerdotes mejor formados, y una fuerte renovación espiritual: es la época de Teresa de Ávila y Juan de la Cruz. Al mismo tiempo, fijó por cuatro siglos las diferencias con los protestantes. Para los evangélicos, el punto central sigue siendo el que Pablo resume así: «el hombre es justificado por fe sin las obras de la ley» (Ro 3:28). Este recurso describe con respeto la fe de los católicos y reconoce a los católicos que aman a Cristo, pero no oculta que en ese punto hay una diferencia de fondo.',
        'En el siglo XX, el Concilio Vaticano II cambió muchas prácticas y abrió la lectura de la Biblia a los católicos, como se verá en la ruta VI. Pero las doctrinas de Trento sobre la autoridad, los sacramentos y la misa siguen vigentes en la iglesia católica.'
      ],
      pensar: 'Jesús advirtió contra invalidar la palabra de Dios con la tradición (Mr 7:13). ¿Hay alguna costumbre de tu propia iglesia o familia que hayas puesto, sin darte cuenta, a la altura de la Escritura?'
    },
    {
      id: 'jesuitas', n: 'Los jesuitas y las misiones católicas', ref: 'Mateo 28:19-20; Romanos 10:14-15', fecha: [1540, 1767],
      visual: [
        pasos([
          { t: 'Roma: Ignacio de Loyola funda la Compañía de Jesús (1540)', fecha: 1540, estado: { view: V.mundo, lugares: ['h-roma'] } },
          { t: 'Francisco Javier en la India (1542) y Japón (1549)', fecha: 1549, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima'] } },
          { t: 'México y Lima: misiones en América (desde 1570)', fecha: 1570, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima', 'h-mexico', 'h-lima'] } },
          { t: 'Pekín: Mateo Ricci en la corte de China (1601)', fecha: 1601, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima', 'h-mexico', 'h-lima', 'h-pekin'] } },
          { t: 'Reducciones guaraníes en Paraguay (1609-1767)', fecha: 1609, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima', 'h-mexico', 'h-lima', 'h-pekin', 'h-reducciones'] } }
        ], 'Las misiones de los jesuitas')
      ],
      texto: [
        'La respuesta católica a la Reforma no fue solo un concilio. Fue también un movimiento de misioneros, educadores y predicadores, y el más influyente fue la Compañía de Jesús, los jesuitas.',
        { h: 'Ignacio de Loyola' },
        'Ignacio de Loyola era un soldado vasco que en 1521, el mismo año de la dieta de Worms, fue herido en una batalla. Durante su larga convalecencia leyó vidas de santos y una vida de Cristo, y decidió entregar su vida a Dios. Escribió los Ejercicios espirituales, un método de oración y examen de conciencia, y reunió a un grupo de compañeros de estudio en París. En 1540 el papa aprobó la Compañía de Jesús, con un voto especial de obediencia al papa. Los jesuitas fundaron cientos de colegios y fueron la vanguardia de la reconquista católica de regiones que se habían vuelto protestantes, como Polonia, Baviera y Austria.',
        { h: 'Hasta los confines de la tierra' },
        'Su gran obra fueron las misiones. Francisco Javier llegó a Goa, en la India, en 1542, y a Japón en 1549, y murió a las puertas de China. Mateo Ricci aprendió el chino, se vistió como un sabio confuciano y en 1601 fue recibido en la corte de Pekín. En América, los jesuitas, junto a franciscanos, dominicos y otras órdenes, evangelizaron pueblos enteros; en Paraguay organizaron las reducciones guaraníes, pueblos donde los indígenas vivían protegidos de los esclavistas, hasta que el rey de España expulsó a la orden en 1767.',
        'Estas misiones tuvieron luces y sombras, que se estudian en la ruta VII: muchas veces el bautismo se impuso sin conversión verdadera, y la fe se mezcló con creencias antiguas. Pero muestran un celo misionero que pone en evidencia una pregunta incómoda.',
        { h: '¿Y los protestantes?' },
        'Durante casi doscientos años, las iglesias protestantes casi no enviaron misioneros fuera de Europa. Había razones: estaban ocupadas en sobrevivir a las guerras, no tenían colonias en ultramar ni órdenes religiosas que pudieran enviar, y algunos teólogos pensaban que la Gran Comisión había sido solo para los apóstoles. Hubo excepciones, como un grupo de hugonotes que llegó a Brasil en 1557 y los misioneros enviados desde Halle a la India en 1706. Pero el gran movimiento misionero evangélico tuvo que esperar hasta fines del siglo XVIII, como muestra la ruta V. El mandato de Jesús había sido claro: «id, y haced discípulos a todas las naciones» (Mt 28:19).',
        { ejercicio: {
          pregunta: '¿Cuál de estas razones explica que los protestantes enviaran pocos misioneros en los siglos XVI y XVII?',
          opciones: [
            { t: 'Creían que los pueblos lejanos no podían salvarse.', ok: false, por_que: 'No era esa la razón; la Reforma afirmaba que el evangelio es para todo el que cree.' },
            { t: 'Estaban absorbidos por las guerras y no tenían colonias ni órdenes misioneras.', ok: true, por_que: 'Las iglesias protestantes luchaban por sobrevivir en Europa y no tenían las estructuras que sí tenían los católicos.' },
            { t: 'El papa les había prohibido salir de Europa.', ok: false, por_que: 'Los protestantes no reconocían la autoridad del papa; sus limitaciones eran prácticas y teológicas.' }
          ],
          explicacion: 'Además de las guerras y la falta de colonias, algunos teólogos pensaban que la Gran Comisión había sido solo para los apóstoles. Esa idea cambió con los avivamientos del siglo XVIII.'
        } }
      ],
      pensar: 'Pablo pregunta: «¿cómo oirán sin haber quien les predique?» (Ro 10:14). ¿Qué excusas usamos hoy los creyentes para no anunciar el evangelio, como lo hicieron muchos protestantes durante dos siglos?'
    },
    {
      id: 'guerras', n: 'Las guerras de religión', ref: 'Juan 18:36; Mateo 26:52; 2 Corintios 10:4', fecha: [1546, 1598],
      visual: [
        pasos([
          { t: 'Alemania: guerra de Esmalcalda y paz de Augsburgo (1546-1555)', fecha: 1555, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-wittenberg'] } },
          { t: 'Francia: guerras de religión y noche de San Bartolomé (1562-1572)', fecha: 1572, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-paris'] } },
          { t: 'Países Bajos: rebelión contra España (desde 1568)', fecha: 1568, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-paris', 'h-amsterdam', 'h-amberes'] } },
          { t: 'Francia: edicto de Nantes, tolerancia para los hugonotes (1598)', fecha: 1598, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-paris', 'h-amsterdam', 'h-amberes'] } }
        ], 'Guerras y paces'),
        cita('Juan 18:36', 'Respondió Jesús: Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían para que yo no fuera entregado a los judíos; pero mi reino no es de aquí.')
      ],
      texto: [
        'En el siglo XVI casi nadie imaginaba que en un mismo país pudieran convivir personas de distintas confesiones. Se pensaba que la unidad de la fe era la base de la paz y de la obediencia al rey. Por eso, cuando Europa se dividió entre católicos y protestantes, la religión se mezcló con la política, y vinieron casi cien años de guerras.',
        { h: 'Alemania: «a tal rey, tal religión»' },
        'En Alemania, el emperador Carlos V derrotó a los príncipes luteranos en 1547, pero no pudo imponer el catolicismo. En 1555, la paz de Augsburgo estableció un principio que después se resumió así: «cuyo es el reino, suya es la religión». Cada príncipe decidía si su territorio sería católico o luterano, y quien no estuviera de acuerdo debía emigrar. Los reformados y los anabautistas quedaron fuera del acuerdo.',
        { h: 'Francia: los hugonotes' },
        'En Francia, los evangélicos, llamados hugonotes, llegaron a ser una minoría numerosa y organizada. Entre 1562 y 1598 hubo ocho guerras civiles. La más terrible matanza ocurrió en la noche de San Bartolomé, el 24 de agosto de 1572: en París y luego en otras ciudades fueron asesinados miles de hugonotes. Finalmente, en 1598, el rey Enrique IV, que había sido protestante, firmó el edicto de Nantes, que daba a los hugonotes libertad de culto en ciertos lugares. En 1685 Luis XIV lo revocó, y cientos de miles de hugonotes huyeron a otros países.',
        { h: 'Los Países Bajos' },
        'En los Países Bajos, que pertenecían a España, la persecución de los protestantes se unió al rechazo de los impuestos y del gobierno extranjero. Desde 1568, las provincias del norte se rebelaron contra Felipe II y, tras una larga guerra, formaron una república donde los reformados eran mayoría y otras confesiones eran toleradas. Ámsterdam se volvió refugio de perseguidos de toda Europa, y allí se imprimió en 1602 la revisión de Cipriano de Valera.',
        { h: 'Lo que estas guerras enseñan' },
        'Hubo en estas guerras mártires verdaderos, y también ambiciones políticas disfrazadas de fe. Ninguna de las dos partes estaba libre de culpa. Jesús había dicho a Pilato: «Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían» (Jn 18:36), y a Pedro: «todos los que tomen espada, a espada perecerán» (Mt 26:52). La lección que la iglesia aprendió con tanto dolor es que el evangelio se extiende por la predicación y el testimonio, no por la fuerza, porque «las armas de nuestra milicia no son carnales» (2 Co 10:4).'
      ],
      pensar: 'Es fácil defender la fe con enojo y con armas de este mundo: insultos, presiones, votos o poder. ¿Cómo puedes defender la verdad con las armas que pide Pablo, sin dejar de ser firme?'
    },
    {
      id: 'westfalia', n: 'Los Treinta Años y la paz de Westfalia', ref: 'Romanos 12:18; Mateo 5:9; Salmo 133:1', fecha: [1618, 1648],
      visual: [
        mapa({ view: V.europa1600, capas: [...EUROPA_1600, 'h-otomanos'], lugares: ['h-praga', 'h-munster', 'h-osnabruck', 'h-roma', 'h-ginebra', 'h-wittenberg'] }, 'Europa hacia 1600'),
        tabla({
          titulo: 'La guerra de los Treinta Años',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1618', 'Defenestración de Praga: los protestantes de Bohemia se rebelan'],
            ['1620', 'Batalla de la Montaña Blanca; Bohemia vuelve por la fuerza al catolicismo'],
            ['1630', 'El rey Gustavo Adolfo de Suecia entra en la guerra a favor de los protestantes'],
            ['1635', 'Francia, católica, se une a la guerra contra los Habsburgo católicos'],
            ['1648', 'Paz de Westfalia, firmada en Münster y Osnabrück']
          ],
          nota: 'El mapa muestra la confesión que predominaba en cada región hacia 1600, con fronteras de hoy y de forma aproximada. En muchas regiones convivían varias confesiones.'
        })
      ],
      texto: [
        'El mapa muestra cómo quedó Europa después de un siglo de Reforma. El norte de Alemania y Escandinavia eran luteranos. Suiza, los Países Bajos del norte, Escocia y partes de Hungría eran reformados. Inglaterra era anglicana. España, Portugal, Italia, Francia, Irlanda, Polonia y el sur de Alemania seguían siendo católicos. En el este, Rusia y los Balcanes eran ortodoxos, estos últimos bajo el dominio del imperio otomano.',
        { h: 'La guerra más destructiva' },
        'Esta división terminó en la guerra de los Treinta Años (1618-1648), la más destructiva que Europa había conocido hasta entonces. Comenzó en Praga, cuando los protestantes de Bohemia se rebelaron contra el emperador católico y arrojaron por una ventana a sus representantes. En 1620 fueron derrotados en la batalla de la Montaña Blanca, y Bohemia, la tierra de Juan Hus, fue obligada a volver al catolicismo; miles de familias evangélicas tuvieron que exiliarse. Algunos de sus descendientes, los hermanos moravos, reaparecerán en la ruta IV.',
        'Poco a poco la guerra se convirtió en una lucha entre potencias por el dominio de Europa. Suecia intervino a favor de los protestantes y Francia, aunque católica, se alió con ellos contra los Habsburgo. Ejércitos de mercenarios saquearon Alemania durante décadas. Con la guerra vinieron el hambre y las epidemias, y en algunas regiones murió un tercio de la población.',
        { h: 'La paz de Westfalia (1648)' },
        'Agotados, los gobernantes firmaron la paz en las ciudades de Münster y Osnabrück, en Westfalia. El acuerdo reconoció a los reformados junto a católicos y luteranos, y fijó por mucho tiempo el mapa religioso de Europa. Fue el fin de las grandes guerras de religión en el continente.',
        'Westfalia tuvo consecuencias profundas. Muchos europeos, cansados de la violencia en nombre de Dios, empezaron a pensar que la religión era un asunto privado que el Estado no debía imponer. Esa idea preparó el camino de la tolerancia religiosa, una conquista valiosa, pero también de la Ilustración y de una sociedad que con el tiempo dejaría de lado la fe, como se verá en la ruta IV. Los creyentes que querían una fe viva, en cambio, buscaron renovación en la oración, la Biblia y la comunión: así nacieron el pietismo y los avivamientos.',
        { ejercicio: {
          pregunta: 'Según el mapa de Europa hacia 1600, ¿cuál de estas regiones era principalmente reformada (calvinista)?',
          opciones: [
            { t: 'Escandinavia.', ok: false, por_que: 'Dinamarca, Noruega y Suecia adoptaron la Reforma luterana.' },
            { t: 'Escocia.', ok: true, por_que: 'Escocia adoptó en 1560 una confesión reformada, bajo la influencia de Juan Knox y de Ginebra.' },
            { t: 'España.', ok: false, por_que: 'En España la Inquisición eliminó a los grupos evangélicos; siguió siendo católica.' }
          ],
          explicacion: 'Las regiones reformadas eran Suiza, los Países Bajos del norte, Escocia, el Palatinado alemán y partes de Hungría y Transilvania. De Escocia vienen los presbiterianos.'
        } }
      ],
      pensar: 'Pablo pide: «Si es posible, en cuanto dependa de vosotros, estad en paz con todos los hombres» (Ro 12:18). ¿Con quién necesitas buscar la paz, aunque piensen distinto de ti?'
    },
    {
      id: 'confesiones', n: 'Las confesiones de fe y la gran discusión', ref: '1 Timoteo 2:4; Efesios 1:4-5; Hebreos 3:12-14', fecha: [1530, 1689],
      visual: [
        tabla({
          titulo: 'Las grandes confesiones de fe',
          cab: ['Año', 'Confesión', 'Familia'],
          filas: [
            ['1530', 'Confesión de Augsburgo', 'Luterana'],
            ['1563', 'Catecismo de Heidelberg', 'Reformada (Alemania y Países Bajos)'],
            ['1571', 'Treinta y nueve Artículos', 'Anglicana'],
            ['1619', 'Cánones de Dort', 'Reformada (Países Bajos)'],
            ['1647', 'Confesión de Westminster', 'Presbiteriana (Inglaterra y Escocia)'],
            ['1689', 'Segunda Confesión de Londres', 'Bautista']
          ],
          nota: 'Las confesiones no reemplazan a la Biblia: resumen lo que una iglesia entiende que la Biblia enseña.'
        }),
        mapa({ view: V.reforma, capas: EUROPA_1600, lugares: ['h-dordrecht', 'h-heidelberg', 'h-augsburgo', 'h-londres'] }, 'Mapa')
      ],
      texto: [
        'Después de la primera generación de reformadores, las iglesias protestantes pusieron por escrito su fe en confesiones y catecismos. Querían enseñar a los niños, formar a los pastores y mostrar que no eran herejes sino fieles a la Escritura. Algunas de esas obras se siguen usando hoy. El Catecismo de Heidelberg comienza preguntando cuál es el único consuelo en la vida y en la muerte, y responde que es pertenecer a Jesucristo, que pagó por todos los pecados con su sangre. El Catecismo de Westminster empieza afirmando que el fin principal del hombre es glorificar a Dios y gozar de Él para siempre.',
        { h: 'Arminio y el sínodo de Dort' },
        'En los Países Bajos estalló una discusión que sigue viva. Jacobo Arminio, un pastor y profesor reformado, cuestionó la manera en que se enseñaba la predestinación. Después de su muerte, sus seguidores presentaron en 1610 una «protesta» en cinco puntos. Las iglesias reformadas convocaron un gran sínodo en la ciudad de Dordrecht (Dort), que en 1619 rechazó esas ideas y respondió con cinco puntos que hoy se conocen como los cinco puntos del calvinismo. Desde entonces, las iglesias evangélicas se dividen entre calvinistas y arminianos.',
        { posturas: {
          titulo: 'Calvinismo y arminianismo',
          a: { n: 'Calvinismo (Dort)', t: 'Dios escogió desde la eternidad, por pura gracia, a los que serán salvos (Ef 1:4-5; Ro 8:29-30). Cristo murió para salvarlos con eficacia, el Espíritu los atrae de manera irresistible (Jn 6:44) y Dios los guarda de modo que no pueden perder la salvación (Jn 10:28-29).' },
          b: { n: 'Arminianismo (Arminio, Wesley)', t: 'Dios quiere que todos los hombres sean salvos (1 Ti 2:4; 2 P 3:9) y Cristo murió por todos (1 Jn 2:2). Su gracia precede y capacita a todos para creer, pero puede ser resistida (Hch 7:51). Dios elige en Cristo a los que creen, y el creyente permanece seguro mientras permanece en la fe (He 3:12-14; Jn 15:6).' },
          c: 'Las iglesias pentecostales y metodistas, y muchas otras de América Latina, siguen la segunda postura: Dios ofrece la salvación a todos, la gracia llama y capacita, el ser humano es responsable de responder, y la seguridad del creyente descansa en el poder de Dios que guarda a los que permanecen en Cristo (Jud 1:24; He 3:14). Ambas posturas afirman que la salvación es solo por gracia y solo por la fe, y en ambas hay creyentes fieles.'
        } },
        { h: 'El valor de las confesiones' },
        'Las confesiones de fe tienen un gran valor: ayudan a enseñar con orden, protegen contra el error y conectan a la iglesia de hoy con la de ayer. Pablo pedía a Timoteo: «Retén la forma de las sanas palabras» (2 Ti 1:13). Pero ninguna confesión es infalible. En el siglo XVII, algunos protestantes llegaron a discutir tanto sobre los detalles de sus confesiones que la fe se volvió fría y más intelectual que vital. Contra esa frialdad reaccionaron los movimientos que se estudian en la próxima ruta.'
      ],
      pensar: 'Hebreos exhorta a retener «firme hasta el fin nuestra confianza del principio» (He 3:14). ¿Qué hábitos te ayudan a permanecer firme en la fe en tiempos de prueba?'
    }
  ];
  // ================== RUTA IV. Puritanos, pietistas y avivamientos (siglos XVII y XVIII) ==================
  const avivamientos = [
    {
      id: 'puritanos', n: 'Los puritanos', ref: 'Deuteronomio 6:6-7; 1 Pedro 1:15-16; Josué 24:15', fecha: [1560, 1689],
      visual: [
        img('puritanos.webp', 'Una familia inglesa del siglo XVII reunida junto a la chimenea de una casa de campo: el padre lee en voz alta una Biblia grande, la madre y cuatro hijos de distintas edades escuchan sentados en bancos de madera; ropa sencilla oscura con cuellos blancos, luz de fuego y velas', 'El culto familiar de los puritanos (recreación; personas anónimas).'),
        tabla({
          titulo: 'Los puritanos en fechas',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1560', 'La Biblia de Ginebra, con notas, se vuelve la Biblia del pueblo inglés'],
            ['1643-1649', 'La Asamblea de Westminster redacta una confesión y dos catecismos'],
            ['1649-1658', 'Guerra civil, ejecución del rey y gobierno de Oliverio Cromwell'],
            ['1662', 'Unos dos mil pastores puritanos son expulsados de la Iglesia de Inglaterra'],
            ['1660-1672', 'Juan Bunyan pasa doce años preso por predicar sin licencia'],
            ['1678', 'Se publica El progreso del peregrino']
          ]
        })
      ],
      texto: [
        'En la Inglaterra de Isabel I, muchos creyentes sentían que la Reforma había quedado a medio camino. La iglesia anglicana había cambiado su doctrina, pero conservaba ceremonias, vestiduras y costumbres que les parecían restos del catolicismo. Querían «purificar» la iglesia según la Escritura, y por eso los llamaron puritanos. Aunque la palabra se usa hoy como sinónimo de rigidez, los puritanos fueron un movimiento de profunda vida espiritual.',
        { h: 'Una fe para toda la vida' },
        'Para los puritanos, toda la vida debía estar bajo la Palabra de Dios. Pusieron la predicación en el centro del culto, con sermones largos que explicaban el texto y lo aplicaban a la conciencia. Guardaban el día del Señor, practicaban el culto familiar cada día y escribían diarios espirituales para examinar su corazón. Querían que cada padre cumpliera el mandato de Moisés: «estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos» (Dt 6:6-7). Buscaban una santidad práctica, porque «escrito está: Sed santos, porque yo soy santo» (1 P 1:16).',
        { h: 'Guerra, poder y persecución' },
        'En el siglo XVII los puritanos se mezclaron en la política. Durante la guerra civil inglesa (1642-1651), el Parlamento, con mayoría puritana, venció al rey Carlos I, que fue ejecutado en 1649, y Oliverio Cromwell gobernó el país. En esos años la Asamblea de Westminster redactó una confesión de fe y dos catecismos que todavía usan los presbiterianos. Pero cuando volvió la monarquía, en 1660, los puritanos fueron perseguidos: en 1662 unos dos mil pastores fueron expulsados de sus iglesias por no aceptar el Libro de Oración Común.',
        { h: 'Juan Bunyan' },
        'Uno de los perseguidos fue Juan Bunyan, un calderero sin estudios que se había convertido después de años de lucha interior. Predicaba sin licencia y pasó doce años en la cárcel de Bedford. Allí, para mantener a su familia, hacía cordones, y escribió. En 1678 publicó El progreso del peregrino, la historia de un hombre llamado Cristiano que deja la Ciudad de Destrucción con una carga en la espalda, la pierde al pie de la cruz y atraviesa pruebas hasta llegar a la Ciudad Celestial. Es uno de los libros más traducidos de la historia después de la Biblia.',
        'Los puritanos dejaron una herencia muy grande: una manera de predicar centrada en la Biblia, una literatura devocional que se sigue leyendo y la convicción de que la fe se vive en el hogar, en el trabajo y en la sociedad. También muestran un peligro: cuando la iglesia busca el poder político, puede terminar persiguiendo o siendo perseguida por las mismas armas.'
      ],
      pensar: 'Los puritanos practicaban el culto familiar todos los días. ¿Cómo podrías apartar un momento, aunque sea breve, para leer la Biblia y orar con los de tu casa (Jos 24:15)?'
    },
    {
      id: 'libertad', n: 'Peregrinos, bautistas y libertad religiosa', ref: 'Mateo 5:14; Mateo 22:21; Gálatas 5:1', fecha: [1609, 1689],
      visual: [
        img('mayflower.webp', 'Peregrinos ingleses de 1620, hombres, mujeres y niños con ropa sencilla y abrigos de lana, en la cubierta de un velero de madera en un mar gris de noviembre, mirando hacia una costa boscosa que aparece en el horizonte', 'Los peregrinos del Mayflower ven la costa de América, noviembre de 1620 (recreación; personas anónimas).'),
        mapa({ view: V.atlantico, lugares: ['h-plymouth-ing', 'h-plymouth', 'h-amsterdam', 'h-londres', 'h-boston'], trazos: ['h-t-mayflower'] }, 'El Mayflower')
      ],
      texto: [
        'Algunos puritanos llegaron a la conclusión de que la iglesia de Inglaterra no tenía arreglo y que había que formar congregaciones separadas, solo de creyentes. Los llamaron separatistas. Como la ley lo prohibía, varios grupos huyeron a los Países Bajos, donde había más libertad.',
        { h: 'Los primeros bautistas' },
        'En Ámsterdam, hacia 1609, un pastor separatista llamado Juan Smyth llegó a la convicción de que el bautismo debía ser para los creyentes, como enseñaban los menonitas que vivían en la ciudad. Su grupo formó la primera iglesia bautista. En 1612, uno de sus miembros, Tomás Helwys, volvió a Inglaterra y fundó en Londres la primera iglesia bautista de ese país. Ese mismo año publicó un libro dirigido al rey, en el que pedía libertad religiosa para todos, incluso para quienes no eran cristianos, porque el rey no tiene poder sobre las almas. Helwys murió en la cárcel.',
        { h: 'El Mayflower' },
        'Otro grupo de separatistas, que vivía en Leiden, decidió buscar un lugar donde pudiera vivir su fe y conservar su lengua y costumbres. En septiembre de 1620 unas cien personas zarparon de Plymouth, en Inglaterra, en un barco llamado Mayflower. Tras dos meses de travesía llegaron a la costa de Norteamérica y fundaron la colonia de Plymouth. La mitad murió el primer invierno. Diez años después llegaron muchos más puritanos a Massachusetts. Su gobernador, Juan Winthrop, les recordó que debían ser como una ciudad sobre un monte, a la vista de todos, como dijo Jesús: «una ciudad asentada sobre un monte no se puede esconder» (Mt 5:14).',
        { h: 'Roger Williams y la libertad de conciencia' },
        'Pero los puritanos de Massachusetts no toleraban otras creencias. Un pastor llamado Roger Williams sostuvo que el gobierno no debía castigar los pecados contra Dios ni imponer una religión, y fue desterrado en 1636. Fundó la colonia de Rhode Island, la primera donde hubo verdadera libertad de conciencia, y allí se formó la primera iglesia bautista de América. Jesús había distinguido entre lo que se debe al gobierno y lo que se debe a Dios: «Dad, pues, a César lo que es de César, y a Dios lo que es de Dios» (Mt 22:21).',
        'Estas ideas, que nacieron entre anabautistas, bautistas y separatistas perseguidos, se volvieron con el tiempo la base de la libertad religiosa moderna. En América Latina llegaron mucho después, con las independencias del siglo XIX, y gracias a ellas hoy las iglesias evangélicas pueden reunirse y predicar con libertad.',
        { ejercicio: {
          pregunta: '¿Qué pedía Tomás Helwys al rey de Inglaterra en 1612?',
          opciones: [
            { t: 'Que la iglesia bautista fuera la iglesia oficial del reino.', ok: false, por_que: 'Helwys pedía justamente lo contrario: que el rey no impusiera ninguna religión.' },
            { t: 'Libertad religiosa para todos, porque el rey no tiene poder sobre las almas.', ok: true, por_que: 'Helwys defendió la libertad de conciencia aun para los no cristianos; murió en la cárcel por sus convicciones.' },
            { t: 'Permiso para emigrar a América con su congregación.', ok: false, por_que: 'Helwys volvió de Ámsterdam a Inglaterra para fundar allí una iglesia, sabiendo que lo perseguirían.' }
          ],
          explicacion: 'La libertad religiosa que hoy disfrutan las iglesias evangélicas fue defendida primero por minorías perseguidas, como los anabautistas y los bautistas, que sufrieron por pedirla.'
        } }
      ],
      pensar: 'Pablo dice: «Estad, pues, firmes en la libertad con que Cristo nos hizo libres» (Gá 5:1). ¿Cómo puedes usar la libertad religiosa que tienes para anunciar el evangelio y servir, en lugar de darla por sentada?'
    },
    {
      id: 'pietismo', n: 'El pietismo', ref: 'Juan 3:3; Hechos 2:42; Santiago 2:17', fecha: [1675, 1730],
      visual: [
        tabla({
          titulo: 'Los «deseos piadosos» de Spener (1675)',
          cab: ['Propuesta', 'Qué significaba'],
          filas: [
            ['1. Más Biblia', 'Que los creyentes leyeran toda la Escritura, también en grupos en las casas'],
            ['2. Sacerdocio de todos', 'Que cada creyente ejerciera su ministerio, no solo el pastor'],
            ['3. Fe practicada', 'Que el cristianismo no fuera solo saber, sino vida y amor'],
            ['4. Amor en las discusiones', 'Debatir con los que piensan distinto con oración y caridad'],
            ['5. Pastores piadosos', 'Formar a los pastores en piedad, no solo en teología'],
            ['6. Predicación que edifica', 'Sermones para formar la vida, no para lucirse']
          ]
        }),
        mapa({ view: V.mundo, lugares: ['h-halle', 'h-copenhague'] }, 'Mapa')
      ],
      texto: [
        'En Alemania, después de la guerra de los Treinta Años, la iglesia luterana tenía teólogos brillantes y una doctrina bien definida, pero mucha gente vivía una fe de costumbre: se bautizaban, iban a la iglesia y comulgaban, pero sin una relación viva con Dios. Contra esa frialdad surgió el pietismo, un movimiento que buscaba una fe del corazón, o «piedad».',
        { h: 'Felipe Jacobo Spener' },
        'En 1675 un pastor de Fráncfort, Felipe Jacobo Spener, publicó un pequeño libro llamado Pia desideria, «deseos piadosos». La tabla resume sus seis propuestas. La más práctica fue reunir grupos pequeños en las casas para leer la Biblia, orar y compartir. No pretendía crear una nueva iglesia, sino renovar la existente desde dentro, con creyentes que vivieran lo que confesaban. Su idea recuerda a la iglesia de Jerusalén, que perseveraba «en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones» (Hch 2:42).',
        'Spener insistía en el nuevo nacimiento. Jesús dijo a Nicodemo: «el que no naciere de nuevo, no puede ver el reino de Dios» (Jn 3:3). Ser bautizado de niño y pertenecer a una iglesia no reemplazaba la conversión personal.',
        { h: 'Augusto Hermann Francke y Halle' },
        'Su discípulo Augusto Hermann Francke convirtió la ciudad de Halle en un centro de fe y servicio. En 1698 fundó un orfanato sin más recursos que la oración, que llegó a albergar a cientos de niños, junto con escuelas, una farmacia y una imprenta. En 1710 un colaborador suyo creó un instituto para imprimir Biblias baratas, y en pocas décadas distribuyó cientos de miles de ejemplares, al alcance de los pobres.',
        { h: 'Los primeros misioneros protestantes' },
        'De Halle salieron, en 1706, los primeros misioneros protestantes enviados a la India: Bartolomé Ziegenbalg y Enrique Plütschau, con el apoyo del rey de Dinamarca. Ziegenbalg aprendió el tamil y tradujo el Nuevo Testamento. Así, mucho antes del gran siglo de las misiones, el pietismo mostró que una fe viva produce frutos de amor y de misión.',
        'El pietismo tuvo también sus riesgos: a veces valoró tanto la experiencia que descuidó la doctrina, o se volvió legalista con las costumbres. Pero su influencia fue enorme. Por medio de los moravos llegó a Juan Wesley, y por medio de él, a los avivamientos de los que nacen las iglesias de santidad y pentecostales.'
      ],
      pensar: 'Spener propuso grupos pequeños en las casas para leer la Biblia y orar. ¿Participas de algún grupo así? Si no, ¿qué te impide comenzar uno?'
    },
    {
      id: 'moravos', n: 'Los moravos: cien años de oración', ref: 'Hechos 2:1-4; Hechos 13:2-3; Isaías 6:8', fecha: [1722, 1760],
      visual: [
        img('herrnhut.webp', 'De noche, en una sala sencilla de madera de la aldea de Herrnhut, en 1727, dos hombres y una mujer con ropa de campesinos alemanes del siglo XVIII oran de rodillas junto a una mesa con una Biblia abierta y una vela; por la ventana se ven las casas del pueblo bajo la nieve', 'La vigilia de oración de Herrnhut, que duró unos cien años (recreación; personas anónimas).'),
        pasos([
          { t: 'Herrnhut, refugio de los hermanos de Moravia (1722)', fecha: 1722, estado: { view: V.atlantico, lugares: ['h-herrnhut'] } },
          { t: 'Santo Tomás, en el Caribe: los primeros misioneros (1732)', fecha: 1732, estado: { view: V.atlantico, lugares: ['h-herrnhut', 'h-copenhague', 'h-santo-tomas'], trazos: ['h-t-moravos-1'] } },
          { t: 'Groenlandia (1733)', fecha: 1733, estado: { view: V.atlantico, lugares: ['h-herrnhut', 'h-copenhague', 'h-santo-tomas', 'h-groenlandia'], trazos: ['h-t-moravos-1', 'h-t-moravos-2'] } }
        ], 'Las primeras misiones moravas')
      ],
      texto: [
        'En la ruta III vimos cómo, en 1620, los evangélicos de Bohemia y Moravia fueron obligados a volver al catolicismo. Algunos de ellos, herederos de los seguidores de Juan Hus, conservaron su fe en secreto durante un siglo. En 1722, un grupo de estas familias huyó a Sajonia y pidió refugio en las tierras de un joven conde luterano, Nicolás Luis de Zinzendorf. Allí fundaron una aldea que llamaron Herrnhut, «la guarda del Señor».',
        { h: 'El 13 de agosto de 1727' },
        'Al principio Herrnhut fue un lugar de discusiones: llegaron refugiados de distintas tradiciones que no se entendían. Zinzendorf los visitó casa por casa, los llamó a la oración y redactó un acuerdo de convivencia. El 13 de agosto de 1727, durante una celebración de la Cena del Señor, la comunidad vivió un mover del Espíritu Santo tan profundo que lo recordaron como su Pentecostés. Las enemistades se disolvieron en amor, y los creyentes salieron sabiendo que eran una sola familia.',
        { h: 'Cien años de oración' },
        'Pocos días después, veinticuatro hombres y veinticuatro mujeres se comprometieron a orar por turnos de una hora, de modo que hubiera oración las veinticuatro horas del día. Esa vigilia continuó, según los registros de la comunidad, durante unos cien años. De esa oración nació un fuego misionero. En 1732 dos jóvenes, Leonardo Dober y David Nitschmann, partieron a la isla de Santo Tomás, en el Caribe, para anunciar el evangelio a los esclavos africanos. Al año siguiente otros fueron a Groenlandia. En pocas décadas los moravos tenían misioneros en América, África y Asia, muchos de ellos artesanos que se sostenían con su trabajo.',
        'Igual que en Antioquía, la misión nació de la oración: «Ministrando éstos al Señor, y ayunando, dijo el Espíritu Santo: Apartadme a Bernabé y a Saulo» (Hch 13:2). Zinzendorf resumía su vida en una frase: tenía una sola pasión, y era Cristo.',
        { h: 'Moravos y Wesley' },
        'En 1736 un joven pastor anglicano viajaba en barco a la colonia de Georgia. En medio de una tormenta terrible, mientras los ingleses gritaban de miedo, un grupo de moravos alemanes cantaba himnos con calma. El pastor quedó impresionado: él no tenía esa paz. Se llamaba Juan Wesley, y los moravos tendrían un papel decisivo en su conversión.',
        { ejercicio: {
          pregunta: '¿Qué relación hubo entre la vigilia de oración de Herrnhut y las misiones moravas?',
          opciones: [
            { t: 'Ninguna: las misiones fueron organizadas por el rey de Dinamarca.', ok: false, por_que: 'El rey dio facilidades, pero el impulso nació en la comunidad que oraba en Herrnhut.' },
            { t: 'La oración constante de la comunidad dio origen a un fuerte llamado misionero.', ok: true, por_que: 'Cinco años después de comenzar la vigilia, en 1732, partieron los primeros misioneros, y luego muchos más.' },
            { t: 'Los moravos dejaron de orar para dedicarse a las misiones.', ok: false, por_que: 'La vigilia continuó durante unos cien años, mientras los misioneros salían.' }
          ],
          explicacion: 'Como en Antioquía (Hch 13:2-3), la misión moravia nació de una iglesia que ministraba al Señor en oración. La oración y la misión fueron juntas.'
        } }
      ],
      pensar: 'Los moravos oraron por turnos durante cien años. ¿Qué lugar ocupa la oración por las misiones en tu vida y en tu congregación?'
    },
    {
      id: 'wesley', n: 'Juan Wesley y el metodismo', ref: 'Romanos 8:16; 1 Tesalonicenses 5:23; Zacarías 3:2', fecha: [1703, 1791],
      visual: [
        img('wesley.webp', 'Juan Wesley, un hombre delgado de unos treinta y seis años con cabello largo castaño, toga negra de clérigo y alzacuello blanco, predica de pie sobre un pequeño montículo al aire libre a una multitud de mineros del carbón con ropas gastadas y rostros tiznados, cerca de Bristol en 1739', 'Juan Wesley predica al aire libre cerca de Bristol, 1739 (recreación).'),
        tabla({
          titulo: 'Juan Wesley (1703-1791)',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1709', 'Lo rescatan de un incendio en la casa pastoral de Epworth'],
            ['1729', 'En Oxford, el «Club Santo» de su hermano Carlos; los llaman metodistas'],
            ['1736', 'Viaje a Georgia; encuentro con los moravos en la tormenta'],
            ['1738', 'El 24 de mayo, en la calle Aldersgate de Londres, siente su corazón «extrañamente ardiente»'],
            ['1739', 'Comienza a predicar al aire libre en Bristol'],
            ['1739-1791', 'Recorre Gran Bretaña a caballo y predica unas cuarenta mil veces'],
            ['1791', 'Muere en Londres; su última carta anima a Wilberforce contra la esclavitud']
          ]
        }),
        mapa({ view: V.britania, lugares: ['h-londres', 'h-oxford', 'h-bristol'] }, 'Mapa')
      ],
      texto: [
        'Juan Wesley nació en 1703, hijo de un pastor anglicano de Epworth, en Inglaterra, y de Susana, una madre que educó a sus hijos con disciplina y oración. Cuando tenía cinco años, la casa pastoral se incendió y lo sacaron por una ventana en el último momento. Toda su vida se vio a sí mismo, con palabras del profeta, como «un tizón arrebatado del incendio» (Zac 3:2).',
        { h: 'Religioso, pero sin paz' },
        'En la Universidad de Oxford, Juan y su hermano Carlos formaron un grupo de estudiantes que oraban, leían la Biblia, comulgaban cada semana y visitaban a los presos. Por su vida tan ordenada los llamaron, en burla, «metodistas». Pero Juan, como Lutero, no tenía paz. En 1735 fue como misionero a Georgia, y fracasó. El encuentro con los moravos en la tormenta le mostró que le faltaba algo.',
        { h: 'Aldersgate' },
        'De regreso en Londres, un moravo llamado Pedro Böhler le habló de la fe que confía en Cristo y recibe la seguridad del perdón. La noche del 24 de mayo de 1738 Wesley fue, sin ganas, a una reunión en la calle Aldersgate. Alguien leía el prefacio de Lutero a la carta a los Romanos. Wesley escribió en su diario que sintió su corazón extrañamente ardiente, que confió solo en Cristo para su salvación y que recibió la seguridad de que Él había quitado sus pecados. Es la experiencia de la que habla Pablo: «El Espíritu mismo da testimonio a nuestro espíritu, de que somos hijos de Dios» (Ro 8:16).',
        { h: 'El mundo es mi parroquia' },
        'Las iglesias anglicanas le cerraron sus puertas por su predicación encendida. En 1739, invitado por su amigo Jorge Whitefield, que había predicado a los mineros del carbón de Kingswood, Wesley predicó por primera vez al aire libre, en las afueras de Bristol. Desde entonces recorrió Gran Bretaña a caballo durante cincuenta años, unos 400.000 kilómetros, predicando dos o tres veces al día. Organizó a los convertidos en «clases» de unas doce personas que se reunían cada semana para orar y rendirse cuentas, y formó predicadores laicos. Su hermano Carlos escribió miles de himnos para que el pueblo cantara su fe.',
        'Wesley enseñaba que la gracia de Dios es para todos, que el creyente puede tener seguridad de su salvación y que Dios quiere santificar por completo a sus hijos: «el mismo Dios de paz os santifique por completo» (1 Ts 5:23). Su fe tuvo frutos sociales: escuelas, ayuda a los pobres, visitas a las cárceles y una oposición firme a la esclavitud. De sus seguidores nacieron las iglesias metodistas, que llegaron a Norteamérica y desde allí, en el siglo XIX, a América Latina. De esa familia saldrán el movimiento de santidad y, en Chile, el avivamiento de Valparaíso.'
      ],
      pensar: 'Wesley era un hombre religioso y disciplinado, pero necesitó una experiencia personal con Cristo. ¿Tienes la seguridad, por el testimonio del Espíritu, de que eres hijo de Dios (Ro 8:16)?'
    },
    {
      id: 'despertar', n: 'El Gran Despertar', ref: '1 Juan 4:1-3; Salmo 85:6; Juan 3:8', fecha: [1734, 1745],
      visual: [
        mapa({ view: V.atlantico, lugares: ['h-northampton', 'h-boston', 'h-bristol', 'h-londres'] }, 'Mapa'),
        tabla({
          titulo: 'Las señales de una obra del Espíritu, según Jonathan Edwards (1741)',
          cab: ['Señal', 'Base bíblica'],
          filas: [
            ['Exalta a Jesús como Hijo de Dios y Salvador', '1 Jn 4:2-3'],
            ['Se opone al reino de Satanás y al pecado', '1 Jn 4:4-5'],
            ['Aumenta el amor y el respeto por la Escritura', '1 Jn 4:6'],
            ['Conduce a la verdad', '1 Jn 4:6'],
            ['Produce amor a Dios y al prójimo', '1 Jn 4:7-8']
          ],
          nota: 'Edwards advertía que las manifestaciones exteriores (llanto, gritos, desmayos) no prueban por sí solas que una obra sea de Dios, ni que no lo sea: se la juzga por sus frutos.'
        })
      ],
      texto: [
        'Mientras Wesley predicaba en Inglaterra, en las colonias inglesas de Norteamérica ocurría un avivamiento que se llamó el Gran Despertar. Comenzó en 1734 en Northampton, un pueblo de Massachusetts, donde el pastor Jonathan Edwards predicaba sobre la justificación por la fe. Cientos de personas se convirtieron en pocos meses, y Edwards describió el movimiento como una obra sorprendente de Dios.',
        { h: 'Jorge Whitefield' },
        'En 1739 llegó desde Inglaterra Jorge Whitefield, un joven predicador de voz poderosa, amigo de los Wesley. Recorrió las colonias predicando al aire libre a multitudes de decenas de miles de personas. Benjamín Franklin, que no era creyente, calculó que su voz podía ser oída por unas treinta mil personas a la vez. Whitefield predicaba sobre todo un mensaje: «Os es necesario nacer de nuevo» (Jn 3:7). En 1741 Edwards predicó en Enfield un sermón famoso sobre los pecadores en las manos de un Dios airado, que provocó llanto y clamor entre los oyentes.',
        { h: 'Las manifestaciones y el discernimiento' },
        'El avivamiento estuvo acompañado de manifestaciones intensas: personas que lloraban, gritaban, temblaban o caían al suelo. Eso dividió a las iglesias. Algunos pastores lo rechazaban todo como fanatismo; otros aceptaban todo como obra de Dios. Edwards, que vivió el avivamiento de cerca, escribió en 1741 un estudio de 1 Juan 4, que comienza: «no creáis a todo espíritu, sino probad los espíritus si son de Dios» (1 Jn 4:1). La tabla resume las señales que propuso.',
        'Su conclusión fue equilibrada: las manifestaciones del cuerpo no prueban que una obra sea de Dios, pero tampoco prueban que no lo sea. Lo que importa es el fruto: si Jesús es exaltado, si el pecado es abandonado, si crece el amor por la Escritura y por los hermanos. Este criterio sigue siendo útil para las iglesias pentecostales y carismáticas de hoy. Pablo lo dice así: «No apaguéis al Espíritu. No menospreciéis las profecías. Examinadlo todo; retened lo bueno» (1 Ts 5:19-21).',
        'El Gran Despertar transformó las colonias. Nacieron nuevas iglesias y universidades, y muchos indígenas y africanos esclavizados escucharon el evangelio. El misionero David Brainerd, que murió joven entre los indígenas de Nueva Jersey, dejó un diario que Edwards publicó y que inspiró después a muchos misioneros.',
        { ejercicio: {
          pregunta: 'En una reunión de oración, varias personas lloran y algunas caen al suelo. Según el criterio de Edwards, ¿cómo se puede saber si es una obra del Espíritu?',
          opciones: [
            { t: 'Si hay manifestaciones fuertes, es seguro que es una obra de Dios.', ok: false, por_que: 'Edwards advertía que las manifestaciones por sí solas no prueban nada: pueden venir de Dios, de la emoción humana o de otra fuente.' },
            { t: 'Si hay manifestaciones, seguro que no es de Dios, porque Dios es orden.', ok: false, por_que: 'Edwards rechazó también ese extremo: las manifestaciones no prueban que una obra no sea de Dios.' },
            { t: 'Por sus frutos: si exalta a Jesús, aparta del pecado y produce amor por la Escritura y por los hermanos.', ok: true, por_que: 'Es el criterio de 1 Juan 4 que Edwards aplicó: se prueba el espíritu por lo que produce.' }
          ],
          explicacion: 'Jesús dijo: «Por sus frutos los conoceréis» (Mt 7:16). El discernimiento no se basa en lo que se ve en el momento, sino en lo que la obra produce con el tiempo.'
        } }
      ],
      pensar: 'El salmista oraba: «¿No volverás a darnos vida, para que tu pueblo se regocije en ti?» (Sal 85:6). ¿Estás orando por un avivamiento en tu iglesia, y estás dispuesto a examinarlo con la Escritura cuando llegue?'
    },
    {
      id: 'ilustracion', n: 'La Ilustración: la razón sin revelación', ref: 'Colosenses 2:8; 1 Corintios 1:20-25; Romanos 1:20-22', fecha: [1687, 1802],
      visual: [
        tabla({
          titulo: 'La Ilustración y la fe',
          cab: ['Año', 'Obra o hecho', 'Idea central'],
          filas: [
            ['1687', 'Newton, Principios matemáticos', 'El universo sigue leyes; Newton era creyente'],
            ['1696', 'Toland, Cristianismo sin misterios', 'Deísmo: nada en la religión puede estar por encima de la razón'],
            ['1736', 'Butler, La analogía de la religión', 'Respuesta cristiana: la revelación es razonable'],
            ['1748', 'Hume, Sobre los milagros', 'Los milagros no se pueden creer'],
            ['1764', 'Voltaire, Diccionario filosófico', 'Burla de la iglesia y de la Biblia'],
            ['1789-1794', 'Revolución francesa', 'Ataque a la iglesia; «culto de la Razón» en Notre-Dame (1793)'],
            ['1802', 'Paley, Teología natural', 'El diseño de la naturaleza apunta a un Diseñador']
          ]
        }),
        cita('1 Corintios 1:20-25', '¿Dónde está el sabio? ¿Dónde está el escriba? ¿Dónde está el disputador de este siglo? ¿No ha enloquecido Dios la sabiduría del mundo? Pues ya que en la sabiduría de Dios, el mundo no conoció a Dios mediante la sabiduría, agradó a Dios salvar a los creyentes por la locura de la predicación. Porque los judíos piden señales, y los griegos buscan sabiduría; pero nosotros predicamos a Cristo crucificado, para los judíos ciertamente tropezadero, y para los gentiles locura; mas para los llamados, así judíos como griegos, Cristo poder de Dios, y sabiduría de Dios. Porque lo insensato de Dios es más sabio que los hombres, y lo débil de Dios es más fuerte que los hombres.')
      ],
      texto: [
        'Después de las guerras de religión, muchos pensadores europeos concluyeron que la fe dividía y que la razón unía. Así nació la Ilustración, un movimiento intelectual del siglo XVIII que quería iluminar todo con la luz de la razón humana. Trajo avances reales: la ciencia moderna, la crítica a la tortura y a los privilegios, la defensa de la tolerancia. Muchos de sus primeros científicos, como Isaac Newton, eran creyentes que veían en las leyes del universo la obra del Creador.',
        { h: 'El deísmo' },
        'Pero pronto muchos ilustrados fueron más lejos. El deísmo enseñaba que Dios creó el mundo como un relojero que fabrica un reloj y luego lo deja funcionar solo: no interviene, no hace milagros, no se revela. La Biblia sería solo un libro humano con buenas enseñanzas morales. El filósofo escocés David Hume escribió en 1748 que nunca es razonable creer en un milagro. Voltaire ridiculizó a la iglesia y a la Escritura. En Francia, durante la Revolución, se cerraron templos, se mató a sacerdotes y en 1793 se celebró un culto a la Razón en la catedral de Notre-Dame.',
        { h: 'La respuesta de la fe' },
        'Los creyentes respondieron de dos maneras. Algunos pensadores mostraron que la fe no es irracional: el matemático Blas Pascal, en el siglo XVII, había escrito que el corazón tiene razones que la razón no conoce; el obispo José Butler y el teólogo Guillermo Paley defendieron la revelación y el diseño de la creación. Pablo ya había dicho que las cosas invisibles de Dios «se hacen claramente visibles desde la creación del mundo» (Ro 1:20).',
        'La otra respuesta fue el avivamiento. El mismo siglo que produjo a Voltaire produjo a Wesley, a Whitefield y a Edwards. Mientras unos discutían si Dios podía actuar en el mundo, miles de mineros, campesinos y esclavos experimentaban que Dios actuaba en sus vidas. Pablo lo había escrito: «agradó a Dios salvar a los creyentes por la locura de la predicación» (1 Co 1:21).',
        { h: 'Una herencia que sigue viva' },
        'La Ilustración cambió para siempre la manera de pensar de Occidente. En el siglo XIX, sus ideas llegaron a las universidades y a la teología, como se verá en la ruta V, y en el siglo XX produjeron sociedades que viven como si Dios no existiera. También influyeron en las independencias de América Latina, cuyos líderes leían a los ilustrados. Pablo advirtió: «Mirad que nadie os engañe por medio de filosofías y huecas sutilezas» (Col 2:8). No se trata de rechazar la razón, que es un don de Dios, sino de ponerla al servicio de la verdad revelada.'
      ],
      pensar: 'Pedro pide estar «siempre preparados para presentar defensa» de nuestra esperanza (1 P 3:15). ¿Qué pregunta de un amigo incrédulo te gustaría saber responder mejor, y dónde podrías aprender?'
    }
  ];
  // ================== RUTA V. El siglo de las misiones (1792-1910) ==================
  const misiones = [
    {
      id: 'carey', n: 'William Carey', ref: 'Isaías 54:2-3; Romanos 10:14-15; Mateo 28:19-20', fecha: [1792, 1834],
      visual: [
        img('serampore.webp', 'Taller de imprenta de la misión de Serampore, en Bengala, hacia 1810: impresores bengalíes con dhoti y un europeo con chaleco revisan pliegos con letra bengalí junto a una prensa de madera; estantes con pilas de libros y un gran ventanal con palmeras afuera', 'La imprenta de la misión de Serampore, en la India (recreación; personas anónimas).'),
        mapa({ view: V.mundo, lugares: ['h-londres', 'h-ciudad-del-cabo', 'h-serampore'], trazos: ['h-t-carey'] }, 'El viaje de Carey (1793)')
      ],
      texto: [
        'Guillermo Carey nació en 1761 en una aldea de Inglaterra. Era zapatero, pobre y casi sin escuela, pero aprendió solo latín, griego, hebreo, francés y holandés. En su taller tenía un mapa del mundo hecho a mano, donde anotaba la población y la religión de cada país, que sacaba de los relatos de viaje del capitán Cook. Mientras arreglaba zapatos, oraba por los pueblos que nunca habían oído el evangelio.',
        { h: 'Un llamado a toda la iglesia' },
        'Carey se hizo pastor bautista y planteó a sus colegas una pregunta: ¿no seguía vigente el mandato de hacer discípulos a todas las naciones? Según una tradición, un pastor mayor le respondió que, si Dios quería convertir a los paganos, lo haría sin su ayuda. Carey no se calló. En 1792 publicó un estudio sobre la obligación de los cristianos de usar medios para la conversión de los pueblos no cristianos, y predicó un sermón sobre Isaías 54: «Ensancha el sitio de tu tienda … alarga tus cuerdas, y refuerza tus estacas» (Is 54:2). Su consejo se resume en dos frases que se hicieron famosas: esperar grandes cosas de Dios, emprender grandes cosas para Dios. Ese mismo año se fundó la Sociedad Misionera Bautista.',
        { h: 'Cuarenta años en la India' },
        'En 1793 Carey viajó a la India con su familia. Los primeros años fueron durísimos: pobreza, enfermedad, la muerte de un hijo y la enfermedad mental de su esposa. Pasaron siete años antes de que se convirtiera el primer bengalí, Krishna Pal, en 1800. Ese año Carey se estableció en Serampore, una colonia danesa cerca de Calcuta, con otros dos misioneros, Joshua Marshman y William Ward. Juntos fundaron una iglesia, escuelas, un colegio y una imprenta. En 1812 un incendio destruyó la imprenta y años de manuscritos de traducción; Carey lloró, oró y volvió a empezar.',
        'Carey y sus colaboradores tradujeron la Biblia completa a seis lenguas de la India y partes de ella a otras veintinueve. Carey luchó también contra la costumbre de quemar viudas en la pira funeraria del marido, que el gobierno británico prohibió en 1829. Murió en Serampore en 1834.',
        { h: '¿El padre de las misiones modernas?' },
        'A Carey se le llama a menudo el padre de las misiones modernas. No fue el primero, porque antes habían salido los misioneros de Halle y los moravos, pero su llamado despertó a las iglesias de habla inglesa y dio origen a decenas de sociedades misioneras. En pocos años se fundaron la Sociedad Misionera de Londres (1795), la de la Iglesia Anglicana (1799) y muchas más, y comenzó lo que los historiadores llaman el gran siglo de las misiones.',
        { ejercicio: {
          pregunta: '¿Qué hizo Carey para despertar a las iglesias a la misión?',
          opciones: [
            { t: 'Esperó a que Dios convirtiera a los pueblos sin intervención humana.', ok: false, por_que: 'Esa era la idea que Carey combatió: él insistió en que los cristianos debían usar medios para llevar el evangelio.' },
            { t: 'Publicó un llamado a la obligación misionera, predicó sobre Isaías 54 y se ofreció él mismo para ir.', ok: true, por_que: 'Carey escribió, predicó, ayudó a fundar una sociedad misionera y partió a la India en 1793.' },
            { t: 'Pidió al rey de Inglaterra que enviara soldados para proteger a los misioneros.', ok: false, por_que: 'Carey no dependió del poder político; de hecho, la Compañía de las Indias Orientales se oponía a los misioneros.' }
          ],
          explicacion: 'Carey unió la convicción bíblica, la oración, la organización y la entrega personal. «¿Cómo predicarán si no fueren enviados?» (Ro 10:15).'
        } }
      ],
      pensar: 'Carey oraba por las naciones mientras hacía su trabajo de zapatero. ¿Cómo podrías unir tu trabajo diario con la oración por los pueblos que no conocen a Cristo?'
    },
    {
      id: 'sociedades', n: 'Las sociedades bíblicas', ref: 'Romanos 10:17; Isaías 55:11; Salmo 119:105', fecha: [1804, 1946],
      visual: [
        tabla({
          titulo: 'Las sociedades bíblicas',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1800', 'Según la tradición, Mary Jones camina unos 40 km en Gales para comprar una Biblia'],
            ['1804', 'Se funda en Londres la Sociedad Bíblica Británica y Extranjera'],
            ['1816', 'Se funda la Sociedad Bíblica Americana, en Nueva York'],
            ['Siglo XIX', 'Agentes y colportores llevan la Biblia a América Latina, Asia y África'],
            ['1946', 'Se forman las Sociedades Bíblicas Unidas'],
            ['1960', 'Las Sociedades Bíblicas publican la revisión Reina-Valera 1960']
          ]
        }),
        cita('Isaías 55:10-11', 'Porque como desciende de los cielos la lluvia y la nieve, y no vuelve allá, sino que riega la tierra, y la hace germinar y producir, y da semilla al que siembra, y pan al que come, así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero, y será prosperada en aquello para que la envié.')
      ],
      texto: [
        'Una de las grandes obras del siglo XIX fue poner la Biblia al alcance de todos. Se cuenta que en 1800 una muchacha galesa llamada Mary Jones ahorró durante seis años para comprar una Biblia y caminó unos cuarenta kilómetros, descalza, hasta el pueblo de Bala, donde el pastor Tomás Charles tenía algunos ejemplares. La historia conmovió a Charles, que planteó en Londres una pregunta: si Gales necesitaba Biblias, ¿por qué no también el resto del mundo?',
        { h: 'Una Biblia sin notas para todos' },
        'En 1804 se fundó en Londres la Sociedad Bíblica Británica y Extranjera, con un propósito sencillo: imprimir y distribuir la Biblia, sin notas ni comentarios, al precio más bajo posible, en todas las lenguas. Al no incluir notas, anglicanos, metodistas, bautistas y otros podían trabajar juntos. En 1816 se fundó la Sociedad Bíblica Americana, y luego muchas más en Europa y en otros continentes. En un siglo distribuyeron cientos de millones de Biblias y porciones y patrocinaron traducciones a cientos de lenguas.',
        { h: 'Los colportores' },
        'Para llevar la Biblia a los pueblos, las sociedades contrataban colportores: vendedores ambulantes de Biblias que recorrían caminos y aldeas a pie o a lomo de mula. Muchos eran creyentes sencillos que además de vender explicaban la Escritura y oraban con las personas. En América Latina fueron muchas veces los primeros evangélicos que conoció un pueblo, y algunos fueron encarcelados o apedreados, como se verá en la ruta VII.',
        'Las sociedades vendían las Biblias a un precio bajo, en lugar de regalarlas, porque habían comprobado que lo que se compra se valora más. Pero nunca dejaron de ayudar a los más pobres.',
        { h: 'La Biblia que lees' },
        'Las Sociedades Bíblicas Unidas, que reúnen a las sociedades nacionales desde 1946, son las que publicaron la Reina-Valera 1960, la Biblia de la mayoría de los evangélicos de habla hispana, que este sitio cita en todos sus recursos. Cada vez que abres tu Biblia tienes en las manos el fruto de dos siglos de trabajo de estas sociedades. Dios prometió: «así será mi palabra que sale de mi boca; no volverá a mí vacía» (Is 55:11).'
      ],
      pensar: 'Mary Jones caminó cuarenta kilómetros por una Biblia. ¿Qué estás dispuesto a hacer tú para leerla, estudiarla y ponerla en manos de otros?'
    },
    {
      id: 'asia', n: 'El evangelio en Asia', ref: '1 Corintios 9:22; Juan 12:24; Hechos 20:24', fecha: [1807, 1907],
      visual: [
        foto('hudson-taylor.jpg', 'Fotografía de Hudson Taylor hacia 1865: un hombre de unos treinta años, de cabello claro peinado hacia atrás y patillas, con ropa oscura y cuello blanco', 'Hudson Taylor hacia 1865, año en que fundó la Misión al Interior de China.', 'Dominio público, vía Wikimedia Commons', 'Foto'),
        pasos([
          { t: 'Roberto Morrison en Cantón (1807)', fecha: 1807, estado: { view: V.asia, lugares: ['h-canton'] } },
          { t: 'Adoniram Judson en Birmania (1813)', fecha: 1813, estado: { view: V.asia, lugares: ['h-canton', 'h-rangun'] } },
          { t: 'Hudson Taylor llega a Shanghái (1854)', fecha: 1854, estado: { view: V.mundo, lugares: ['h-liverpool', 'h-canton', 'h-rangun', 'h-shanghai'], trazos: ['h-t-taylor'] } },
          { t: 'El avivamiento de Pionyang, Corea (1907)', fecha: 1907, estado: { view: V.asia, lugares: ['h-canton', 'h-rangun', 'h-shanghai', 'h-pyongyang', 'h-seul'] } }
        ], 'Misiones en Asia')
      ],
      texto: [
        'Asia era el continente más poblado y el más difícil para los misioneros: grandes civilizaciones con religiones antiguas, gobiernos que prohibían el cristianismo y lenguas muy distintas de las europeas.',
        { h: 'Morrison y Judson' },
        'Roberto Morrison llegó a Cantón en 1807, cuando era ilegal enseñar chino a un extranjero. Trabajó como traductor de una compañía comercial y, en secreto, tradujo la Biblia al chino, que se publicó completa en 1823. En 27 años vio muy pocos convertidos, pero abrió la puerta para los que vendrían. Adoniram Judson y su esposa Ana llegaron a Birmania en 1813. Durante una guerra con Inglaterra, Judson pasó más de un año y medio en la cárcel en condiciones terribles, y Ana lo mantuvo vivo llevándole comida. Ana murió poco después. Judson terminó la Biblia en birmano en 1834, y al morir dejó miles de creyentes, sobre todo entre el pueblo karen.',
        { h: 'Hudson Taylor' },
        'Hudson Taylor llegó a China en 1854, con 21 años. Pronto tomó una decisión que escandalizó a otros misioneros: se vistió como un maestro chino, se dejó la trenza y vivió como la gente del lugar, porque quería que el evangelio no pareciera una religión extranjera. Pablo dijo: «a todos me he hecho de todo, para que de todos modos salve a algunos» (1 Co 9:22). En 1865, preocupado por los millones de chinos del interior que nunca habían oído de Cristo, fundó la Misión al Interior de China, que no pedía dinero a nadie sino que confiaba en la oración. Al morir Taylor, en 1905, la misión tenía cientos de misioneros. En la rebelión de los bóxers, en 1900, murieron decenas de ellos junto con miles de cristianos chinos.',
        { h: 'Corea' },
        'Los primeros misioneros evangélicos llegaron a Corea en 1884 y 1885. Desde el principio animaron a los coreanos a sostener sus propias iglesias, a estudiar la Biblia en grupos y a evangelizar a sus vecinos. En enero de 1907, en Pionyang, durante una reunión de estudio bíblico, la congregación vivió un avivamiento con confesión pública de pecados, llanto y oración en voz alta de todos a la vez. De allí se extendió por todo el país. Hoy Corea del Sur es uno de los países que más misioneros envía al mundo.',
        'La historia de Asia muestra que la semilla a veces tarda en germinar. Jesús dijo: «si el grano de trigo no cae en la tierra y muere, queda solo; pero si muere, lleva mucho fruto» (Jn 12:24). Hoy hay más de cuatrocientos millones de cristianos en Asia.'
      ],
      pensar: 'Hudson Taylor dejó sus costumbres para que el evangelio no pareciera extranjero. ¿Qué costumbres de tu iglesia podrían ser un obstáculo para que tus vecinos escuchen el evangelio, y cuáles son esenciales?'
    },
    {
      id: 'africa', n: 'El evangelio en África', ref: 'Hechos 8:26-39; Apocalipsis 7:9; Salmo 126:5-6', fecha: [1816, 1891],
      visual: [
        foto('crowther.jpg', 'Retrato enmarcado del obispo Samuel Ajayi Crowther, un hombre africano mayor de cabello canoso con vestiduras de obispo anglicano, expuesto en un museo de Badagry, Nigeria', 'Samuel Ajayi Crowther, primer obispo anglicano africano (1864), en el museo de Badagry.', 'Foto: Yemi Festus, CC BY 3.0, vía Wikimedia Commons', 'Foto'),
        mapa({ view: V.africa, lugares: ['h-freetown', 'h-abeokuta', 'h-kuruman', 'h-victoria', 'h-ciudad-del-cabo'] }, 'Mapa')
      ],
      texto: [
        'El cristianismo no era nuevo en África: desde los primeros siglos había iglesias en Egipto y Etiopía, y el eunuco etíope fue uno de los primeros convertidos fuera de Israel (Hch 8:27-39). Pero en el siglo XIX la mayor parte del continente nunca había oído el evangelio, y gran parte de su costa sufría el tráfico de esclavos.',
        { h: 'Un precio muy alto' },
        'Los misioneros que fueron a África occidental pagaron un precio terrible. La malaria y la fiebre amarilla mataron a tantos en los primeros años que la región fue llamada la tumba del hombre blanco. Muchos misioneros murieron a los pocos meses de llegar, y sin embargo otros seguían ofreciéndose. Hoy se visitan en la costa africana cementerios llenos de tumbas de misioneros jóvenes.',
        { h: 'Livingstone' },
        'En el sur, Roberto Moffat trabajó medio siglo en Kuruman y tradujo la Biblia a la lengua tswana. Su yerno, David Livingstone, médico y misionero escocés, recorrió el interior de África durante treinta años, cruzó el continente de costa a costa y fue el primer europeo en ver las cataratas Victoria, en 1855. Denunció con fuerza el tráfico de esclavos que todavía hacían comerciantes árabes y portugueses. Murió en 1873 en una aldea de la actual Zambia, de rodillas junto a su cama; sus compañeros africanos enterraron su corazón allí y llevaron su cuerpo hasta la costa.',
        { h: 'Samuel Ajayi Crowther' },
        'Samuel Ajayi Crowther era un niño yoruba cuando fue capturado y vendido como esclavo en 1821. El barco que lo llevaba fue interceptado por la marina británica, y Crowther fue liberado en Freetown, Sierra Leona, donde conoció a Cristo. Estudió, fue ordenado pastor, tradujo la Biblia al yoruba y en 1864 fue consagrado obispo: el primer obispo anglicano africano. El niño que iba a ser esclavo llegó a ser pastor de su pueblo.',
        { posturas: {
          titulo: 'Las misiones y el colonialismo',
          a: { n: 'Crítica', t: 'Muchos misioneros llegaron junto con los imperios europeos, se beneficiaron de su protección y a veces confundieron el evangelio con la cultura europea, despreciando las culturas africanas y asiáticas.' },
          b: { n: 'Matiz', t: 'Muchos misioneros se opusieron a los abusos coloniales, defendieron a los pueblos locales y tradujeron la Biblia a sus lenguas, lo que ayudó a preservarlas. Investigaciones recientes muestran que donde hubo más misiones protestantes hubo más escuelas y alfabetización, y que la iglesia creció más rápido después de la independencia, cuando quedó en manos africanas.' },
          c: 'Las dos cosas son verdad. El evangelio no es europeo ni de ninguna cultura, y su mejor prueba fue lo que pasó después: los propios africanos lo hicieron suyo y lo llevaron a sus pueblos. En 1900 había unos diez millones de cristianos en África; en 2026 hay casi 780 millones.'
        } }
      ],
      pensar: '«Los que sembraron con lágrimas, con regocijo segarán» (Sal 126:5). ¿Qué te enseña el sacrificio de los misioneros que murieron en África sobre el valor de sembrar aunque no veas el fruto?'
    },
    {
      id: 'abolicion', n: 'La abolición de la esclavitud', ref: 'Éxodo 21:16; 1 Timoteo 1:10; Gálatas 3:28; Filemón 1:16', fecha: [1787, 1888],
      visual: [
        img('emancipacion.webp', 'En una capilla sencilla de madera en Jamaica, a medianoche del 31 de julio de 1834, hombres, mujeres y niños afrodescendientes, recién liberados, están de rodillas o de pie con las manos levantadas, algunos llorando de alegría; un reloj de pared marca las doce y la luz de velas ilumina la escena', 'Medianoche del 1 de agosto de 1834: entra en vigor la abolición en las colonias británicas (recreación; personas anónimas).'),
        tabla({
          titulo: 'Fechas de la abolición',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1787', 'Se forma en Londres la Sociedad para la Abolición del Tráfico de Esclavos'],
            ['1807', 'Gran Bretaña prohíbe el tráfico de esclavos'],
            ['1823', 'Chile declara la abolición de la esclavitud'],
            ['1833-1834', 'Gran Bretaña abole la esclavitud en sus colonias'],
            ['1865', 'Estados Unidos abole la esclavitud tras la guerra civil'],
            ['1888', 'Brasil, el último país de América en abolirla']
          ]
        })
      ],
      texto: [
        'Durante siglos, millones de africanos fueron capturados, llevados a América en condiciones inhumanas y obligados a trabajar como esclavos. Lo más triste es que muchos que se decían cristianos participaron en ese comercio o se beneficiaron de él, y algunos usaron la Biblia para justificarlo. Pero también fueron cristianos los que más lucharon para terminarlo.',
        { h: 'Wilberforce y sus amigos' },
        'Los primeros en oponerse en forma organizada fueron los cuáqueros. Luego se sumaron evangélicos anglicanos, metodistas y bautistas. Juan Newton había sido capitán de un barco negrero; después de su conversión fue pastor, escribió el himno «Sublime gracia» y denunció públicamente el tráfico que él mismo había practicado. Guillermo Wilberforce, un joven diputado convertido en 1785, dedicó su vida a la abolición. Con un grupo de amigos evangélicos presentó proyectos de ley año tras año durante dos décadas, recogió firmas, publicó testimonios y soportó burlas y amenazas. En 1807 el Parlamento prohibió el tráfico de esclavos, y en 1833, tres días antes de que Wilberforce muriera, aprobó la abolición de la esclavitud en las colonias británicas. Juan Wesley, en su última carta, lo había animado a seguir adelante.',
        { h: 'En América' },
        'En Estados Unidos la esclavitud dividió a las iglesias: metodistas y bautistas se separaron en una rama del norte y otra del sur. Muchos evangélicos, como el predicador Carlos Finney, fueron abolicionistas, mientras otros defendían la esclavitud con versículos sacados de contexto. Hizo falta una guerra civil para terminarla, en 1865. En América Latina, la abolición llegó con las repúblicas: Chile la declaró en 1823, y Brasil fue el último país del continente, en 1888.',
        { h: 'Una lección de interpretación' },
        'Los defensores de la esclavitud citaban los pasajes que regulan la servidumbre en Israel o que piden a los siervos obedecer. Los abolicionistas respondían con la Biblia entera: la ley de Moisés castigaba con la muerte a quien secuestrara una persona para venderla, «el que robare una persona y la vendiere … morirá» (Éx 21:16); Pablo pone a los «secuestradores» entre los que se oponen a la sana doctrina (1 Ti 1:10); en Cristo «no hay esclavo ni libre» (Gá 3:28), y Pablo pide recibir a Onésimo «no ya como esclavo, sino como más que esclavo, como hermano amado» (Flm 1:16). El tráfico de esclavos de los siglos XVI al XIX era justamente secuestro y venta de personas.',
        { ejercicio: {
          pregunta: '¿Qué error de interpretación cometían quienes usaban la Biblia para defender la esclavitud?',
          opciones: [
            { t: 'Tomaban versículos aislados y no consideraban el mensaje de toda la Escritura sobre la dignidad humana.', ok: true, por_que: 'Citaban pasajes que regulan una realidad de su tiempo, pero ignoraban que la Biblia condena el secuestro de personas y que en Cristo todos son hermanos.' },
            { t: 'Usaban una traducción equivocada de la Biblia.', ok: false, por_que: 'El problema no era la traducción, sino la manera de leer y aplicar los textos.' },
            { t: 'Leían solo el Nuevo Testamento.', ok: false, por_que: 'Citaban pasajes de ambos Testamentos; el problema era sacarlos de su contexto y del mensaje completo.' }
          ],
          explicacion: 'Un texto fuera de contexto se puede usar para defender casi cualquier cosa. Por eso la Escritura se interpreta con la Escritura, leyendo cada pasaje dentro del mensaje completo de la Biblia.'
        } }
      ],
      pensar: 'Wilberforce perseveró veinte años en una causa justa. ¿Qué injusticia de tu entorno podrías ayudar a enfrentar desde tu fe, con oración y perseverancia (Pr 31:8-9)?'
    },
    {
      id: 'predicadores', n: 'Avivamientos y grandes predicadores', ref: 'Hechos 3:19; 2 Timoteo 4:2; Mateo 9:37-38', fecha: [1801, 1899],
      visual: [
        img('campamento.webp', 'Una reunión campestre en Kentucky en 1801, de noche: una multitud de familias de colonos rodea una plataforma de troncos donde predica un hombre con levita; hay fogatas, carretas y tiendas de lona entre los árboles; algunas personas están de rodillas y otras con las manos levantadas', 'Una reunión campestre del Segundo Gran Despertar (recreación; personas anónimas).'),
        mapa({ view: V.atlantico, lugares: ['h-cane-ridge', 'h-rochester', 'h-londres', 'h-chicago'] }, 'Mapa')
      ],
      texto: [
        'A comienzos del siglo XIX, Norteamérica vivió un segundo gran avivamiento. En agosto de 1801, en un lugar llamado Cane Ridge, en Kentucky, se reunieron miles de colonos en una reunión campestre que duró casi una semana. Predicadores presbiterianos, metodistas y bautistas hablaban al mismo tiempo desde distintas plataformas, y muchas personas se convertían con llanto, gritos y caídas. Desde entonces, las reuniones campestres se volvieron una costumbre de las iglesias de la frontera.',
        { h: 'Carlos Finney' },
        'Carlos Finney era abogado cuando se convirtió en 1821, en una experiencia que él describió como olas de amor que lo inundaban. Se hizo predicador y llevó el avivamiento a las ciudades, como Rochester, en 1830. Introdujo «nuevas medidas»: reuniones durante muchos días seguidos, llamados a pasar adelante y oración por los que buscaban la salvación. Enseñaba que un avivamiento no es un milagro que solo hay que esperar, sino el resultado de usar los medios que Dios ha dado: oración, predicación y arrepentimiento. Otros, como Edwards un siglo antes, insistían en que el avivamiento es una obra soberana de Dios. Ambas cosas tienen su lugar en la Escritura: Dios promete sanar la tierra de su pueblo, si su pueblo se humilla y ora (2 Cr 7:14).',
        { h: 'Spurgeon y Moody' },
        'En Londres, Carlos Spurgeon, un bautista que llegó como pastor a los diecinueve años, llenó cada domingo durante décadas el Tabernáculo Metropolitano, con capacidad para unas cinco mil personas. Sus sermones se imprimían cada semana y se leían en todo el mundo. En Estados Unidos, Dwight L. Moody, un vendedor de zapatos casi sin estudios, se convirtió en el evangelista más conocido de su tiempo. Con el cantante Ira Sankey predicó a multitudes en Gran Bretaña y Estados Unidos, y fundó en Chicago un instituto bíblico para formar obreros.',
        { h: 'Los estudiantes voluntarios' },
        'En 1886, en un encuentro de estudiantes organizado por Moody, cien jóvenes universitarios firmaron un compromiso: si Dios lo permitía, serían misioneros en el extranjero. Así nació el Movimiento Estudiantil Voluntario, con un lema audaz: la evangelización del mundo en esta generación. En las décadas siguientes, más de veinte mil jóvenes partieron como misioneros. Jesús había dicho: «Rogad, pues, al Señor de la mies, que envíe obreros a su mies» (Mt 9:38).'
      ],
      pensar: 'Cien estudiantes cambiaron la historia misionera al decir «iré si Dios lo permite». ¿Hay algún joven en tu iglesia al que podrías animar a considerar el llamado misionero?'
    },
    {
      id: 'santidad', n: 'El movimiento de santidad', ref: '1 Tesalonicenses 5:23; Hebreos 12:14; Mateo 3:11; Santiago 5:14-15', fecha: [1835, 1900],
      visual: [
        tabla({
          titulo: 'Del «evangelio cuádruple» al «evangelio completo»',
          cab: ['Simpson y la santidad (1880)', 'Los pentecostales (1906-1914)'],
          filas: [
            ['Jesús salva', 'Jesús salva'],
            ['Jesús santifica', 'Jesús bautiza con el Espíritu Santo'],
            ['Jesús sana', 'Jesús sana'],
            ['Jesús viene otra vez', 'Jesús viene otra vez']
          ],
          nota: 'Muchas iglesias pentecostales enseñan las cinco verdades: salvación, santificación, bautismo en el Espíritu Santo, sanidad divina y segunda venida de Cristo.'
        }),
        cita('Mateo 3:11', 'Yo a la verdad os bautizo en agua para arrepentimiento; pero el que viene tras mí, cuyo calzado yo no soy digno de llevar, es más poderoso que yo; él os bautizará en Espíritu Santo y fuego.')
      ],
      texto: [
        'Juan Wesley había enseñado que Dios quiere santificar por completo a sus hijos, librándolos del dominio del pecado y llenándolos de amor. En el siglo XIX, algunos metodistas sintieron que sus iglesias, ya grandes y respetables, estaban olvidando esa enseñanza. Así nació el movimiento de santidad, que buscaba una vida consagrada y una experiencia de santificación posterior a la conversión.',
        { h: 'Febe Palmer y las reuniones campestres' },
        'En Nueva York, una mujer metodista llamada Febe Palmer dirigió durante décadas una reunión de los martes dedicada a la santidad, a la que asistían obispos, pastores y laicos. Enseñaba que el creyente puede consagrarse por completo a Dios, poniendo todo sobre el altar, y recibir por fe la santificación. Después de la guerra civil, en 1867, se organizaron grandes reuniones campestres de santidad a las que asistían decenas de miles de personas. En Inglaterra, desde 1875, la convención de Keswick reunía cada año a creyentes que buscaban una vida cristiana victoriosa.',
        { h: 'El lenguaje del bautismo del Espíritu' },
        'Poco a poco, el movimiento empezó a hablar de esa experiencia como el «bautismo del Espíritu Santo», recordando las palabras de Juan el Bautista: «él os bautizará en Espíritu Santo y fuego» (Mt 3:11). Algunos lo entendían sobre todo como purificación del corazón; otros, como una investidura de poder para servir, como la que recibieron los discípulos en Pentecostés (Hch 1:8). Muchos creyentes oraban por un nuevo Pentecostés al comenzar el siglo XX.',
        { h: 'Sanidad divina' },
        'El movimiento de santidad también recuperó la oración por los enfermos. Santiago dice: «¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor» (Stg 5:14). Se abrieron casas de sanidad para orar por enfermos, y Alberto Simpson, fundador de la Alianza Cristiana y Misionera, resumió el mensaje en un «evangelio cuádruple»: Jesús salva, santifica, sana y viene otra vez.',
        'De este ambiente salió, pocos años después, el movimiento pentecostal. Los primeros pentecostales conservaron casi todo lo que habían aprendido en la santidad: la búsqueda de la consagración, la oración por los enfermos, la espera de la venida de Cristo y muchos himnos. Pero entendieron el bautismo en el Espíritu Santo como una experiencia de poder distinta de la conversión, acompañada de la señal de hablar en otras lenguas, como en Hechos 2:4. La tabla muestra ese cambio.',
        { ejercicio: {
          pregunta: '¿Qué cambiaron los pentecostales en el «evangelio cuádruple» del movimiento de santidad?',
          opciones: [
            { t: 'Quitaron la sanidad divina.', ok: false, por_que: 'Los pentecostales mantuvieron con fuerza la oración por los enfermos.' },
            { t: 'Pusieron en el centro a Jesús que bautiza con el Espíritu Santo.', ok: true, por_que: 'El bautismo en el Espíritu, con la señal de hablar en lenguas, pasó a ser la marca distintiva del pentecostalismo; muchas iglesias mantuvieron también la santificación.' },
            { t: 'Dejaron de esperar la segunda venida de Cristo.', ok: false, por_que: 'Al contrario, los primeros pentecostales vivían con una fuerte expectativa de la venida de Cristo.' }
          ],
          explicacion: 'El pentecostalismo nació dentro de la santidad y conservó la mayor parte de su mensaje, pero puso en el centro la promesa de Hechos 1:5: «seréis bautizados con el Espíritu Santo».'
        } }
      ],
      pensar: '«Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor» (He 12:14). ¿Qué área de tu vida necesitas poner hoy sobre el altar?'
    },
    {
      id: 'liberalismo', n: 'El liberalismo teológico', ref: '2 Timoteo 3:16; 2 Pedro 1:20-21; 1 Corintios 15:3-4', fecha: [1799, 1900],
      visual: [
        tabla({
          titulo: 'Las ideas y las respuestas',
          cab: ['Año', 'Idea liberal', 'Respuesta evangélica'],
          filas: [
            ['1799', 'Schleiermacher: la religión es un sentimiento de dependencia, no una doctrina revelada', 'La fe se basa en lo que Dios ha revelado en su Palabra'],
            ['1835', 'Strauss: los milagros de los evangelios son mitos', 'Los evangelios son testimonio de testigos (Lc 1:1-4)'],
            ['1859', 'Darwin publica El origen de las especies; muchos lo usan para negar la creación', 'Dios es el Creador, cualquiera sea la forma en que se discuta el cómo'],
            ['1878', 'Wellhausen: el Pentateuco es una suma de documentos tardíos', 'Jesús cita a Moisés como autor de la ley (Jn 5:46)'],
            ['1881', '—', 'A. A. Hodge y B. B. Warfield defienden la inspiración y la inerrancia'],
            ['1887', '—', 'Spurgeon denuncia la «pendiente» de las iglesias que abandonan la Biblia']
          ]
        }),
        cita('2 Pedro 1:20-21', 'entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.')
      ],
      texto: [
        'Mientras los misioneros llevaban la Biblia a todo el mundo, en las universidades de Europa crecía una corriente que ponía en duda su autoridad. Las ideas de la Ilustración entraron en la teología y dieron origen a lo que se llamó el liberalismo teológico.',
        { h: 'Una fe sin lo sobrenatural' },
        'El teólogo alemán Federico Schleiermacher quiso hacer la fe aceptable para las personas cultas de su tiempo. Enseñó que la religión no es un conjunto de doctrinas reveladas, sino un sentimiento de dependencia de Dios. Sus seguidores fueron más lejos. Algunos estudiosos afirmaron que los milagros de los evangelios eran mitos, que muchos libros de la Biblia se escribieron mucho después de lo que dicen y que Jesús había sido un gran maestro moral pero no Dios hecho hombre. A fines del siglo, el historiador Adolfo von Harnack resumió el cristianismo en la paternidad de Dios, la hermandad de los hombres y el valor del alma humana, sin cruz como sacrificio ni resurrección corporal.',
        'La teoría de la evolución de Carlos Darwin, publicada en 1859, fue usada por muchos para sostener que el mundo no necesitaba un Creador. En pocas décadas, buena parte de las universidades y de los seminarios protestantes de Europa y Norteamérica adoptaron estas ideas.',
        { h: 'La respuesta' },
        'Otros respondieron con firmeza. En el seminario de Princeton, Archibaldo Hodge y Benjamín Warfield defendieron la inspiración de la Escritura y su verdad en todo lo que afirma: «los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21). En Londres, Spurgeon denunció en 1887 que muchas iglesias iban cuesta abajo al abandonar la autoridad de la Biblia y la expiación, y se retiró de la unión bautista. Las iglesias de santidad, los avivamientos y los misioneros siguieron creyendo y predicando la Biblia como Palabra de Dios.',
        'El liberalismo planteó preguntas reales que los creyentes no podían ignorar, y obligó a estudiar mejor la historia y las lenguas de la Biblia. Pero sus respuestas vaciaban el evangelio: un cristianismo sin milagros, sin cruz y sin resurrección no es el que predicaron los apóstoles. Pablo resumió lo esencial: «que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día» (1 Co 15:3-4). Este sitio sostiene la inspiración plena de la Escritura, que se estudia en el recurso La Palabra de Dios.',
        ir('Estudiar la inspiración de la Escritura', '../../palabra-de-dios/')
      ],
      pensar: 'El liberalismo quiso hacer la fe aceptable quitándole lo sobrenatural. ¿Hay alguna enseñanza bíblica que te cuesta aceptar porque choca con lo que piensa la gente a tu alrededor? ¿Qué harás con ella?'
    },
    {
      id: 'dispensaciones', n: 'Darby y la esperanza de la venida de Cristo', ref: '1 Tesalonicenses 4:16-17; Tito 2:13; Apocalipsis 20:4-6', fecha: [1830, 1909],
      visual: [
        cita('1 Tesalonicenses 4:16-17', 'Porque el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor.'),
        tabla({
          titulo: 'Tres maneras de entender el milenio',
          cab: ['Postura', 'Qué enseña', 'Época de mayor difusión'],
          filas: [
            ['Premilenial', 'Cristo vuelve antes de reinar mil años en la tierra (Ap 20:4-6)', 'Iglesia antigua; desde el siglo XIX entre los evangélicos'],
            ['Amilenial', 'El milenio es simbólico: el reinado actual de Cristo', 'Desde Agustín (siglo V); muchas iglesias históricas'],
            ['Postmilenial', 'El evangelio transformará el mundo y luego vendrá Cristo', 'Siglos XVIII y XIX, en tiempos de avivamiento']
          ]
        })
      ],
      texto: [
        'El siglo XIX fue también un tiempo de gran interés por la profecía bíblica. Muchos creyentes estudiaban Daniel y Apocalipsis, y se preguntaban cómo sería la venida de Cristo. Un predicador irlandés tuvo un papel decisivo en esa búsqueda.',
        { h: 'Juan Nelson Darby' },
        'Juan Nelson Darby era un pastor anglicano de Irlanda que, hacia 1830, se unió a un grupo de creyentes que se reunían con sencillez, sin clero, para partir el pan y estudiar la Biblia: los Hermanos, llamados a veces de Plymouth. Darby enseñó que Dios ha tratado con la humanidad en distintas etapas o dispensaciones, que Israel y la iglesia son distintos en el plan de Dios, y que la iglesia será arrebatada para encontrarse con el Señor antes de la gran tribulación. Se apoyaba en pasajes como el de Pablo: «seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire» (1 Ts 4:17).',
        { h: 'De las conferencias a la Biblia de Scofield' },
        'Las ideas de Darby se difundieron en Norteamérica por medio de conferencias bíblicas sobre la profecía, como las del Niágara (desde la década de 1870), y fueron adoptadas por muchos evangelistas, entre ellos Moody. En 1909 Ciro Scofield publicó una Biblia con notas que explicaban la Escritura según este sistema, y que fue leída por millones. Así, el premilenialismo dispensacional se convirtió en la manera más común de entender la profecía entre los evangélicos de Norteamérica y, con los misioneros, entre los de América Latina, incluidas la mayoría de las iglesias pentecostales.',
        { posturas: {
          titulo: '¿Antes o después de la tribulación?',
          a: { n: 'Arrebatamiento pretribulacional', t: 'La iglesia será arrebatada antes de la gran tribulación, porque Dios no la ha puesto para ira (1 Ts 5:9), y el Señor puede venir en cualquier momento (Tit 2:13). Después de la tribulación, Cristo volverá con su iglesia para reinar mil años.' },
          b: { n: 'Otras posturas', t: 'Muchos premileniales históricos creen que la iglesia pasará por la tribulación y será reunida con Cristo cuando Él venga en gloria (Mt 24:29-31). Amileniales y postmileniales entienden el milenio de manera simbólica.' },
          c: 'Este recurso sigue la postura premilenial y pretribulacional, que se estudia en Los últimos tiempos, sin fijar fechas, porque «del día y la hora nadie sabe» (Mt 24:36). En todas las posturas hay creyentes que esperan con amor la venida del Señor.'
        } },
        'La esperanza de la venida de Cristo tuvo un efecto práctico: dio urgencia a la evangelización. Si el Señor podía venir en cualquier momento, había que anunciar el evangelio a todas las naciones cuanto antes (Mt 24:14). Esa urgencia impulsó a miles de misioneros.',
        ir('Estudiar Los últimos tiempos', '../../escatologia/')
      ],
      pensar: 'Pablo vivía «aguardando la esperanza bienaventurada» (Tit 2:13). ¿Cómo cambia tu manera de usar el tiempo y el dinero el saber que el Señor puede venir en cualquier momento?'
    },
    {
      id: 'edimburgo', n: 'Edimburgo 1910', ref: 'Juan 17:21; Mateo 24:14; Romanos 15:20-21', fecha: 1910,
      visual: [
        foto('edimburgo-1910.jpg', 'Fotografía de la Conferencia Misionera Mundial de Edimburgo, en junio de 1910: cientos de delegados, hombres y mujeres, llenan la sala de asambleas del New College de la Universidad de Edimburgo, con galerías de madera y una mesa central de la presidencia', 'La Conferencia Misionera Mundial de Edimburgo, en la sala de asambleas del New College (1910).', 'Dominio público, vía Wikimedia Commons', 'Foto'),
        tabla({
          titulo: 'La conferencia en cifras',
          cab: ['', ''],
          filas: [
            ['Fecha', '14 al 23 de junio de 1910'],
            ['Delegados', 'Unos 1.200, de sociedades misioneras protestantes'],
            ['Delegados de Asia y África', 'Menos de veinte'],
            ['Delegados de América Latina', 'Ninguno: el continente quedó fuera del temario'],
            ['Presidente', 'Juan R. Mott, del Movimiento Estudiantil Voluntario']
          ]
        })
      ],
      texto: [
        'El siglo de las misiones culminó en junio de 1910 con la Conferencia Misionera Mundial de Edimburgo, en Escocia. Unos 1.200 delegados de sociedades misioneras protestantes se reunieron para estudiar cómo terminar la tarea de evangelizar el mundo. Los presidía Juan R. Mott, un laico metodista que había recorrido el mundo organizando a los estudiantes cristianos.',
        { h: 'Optimismo y realidad' },
        'El ambiente era de gran optimismo. Los misioneros habían llegado a casi todos los países, la Biblia estaba traducida a cientos de lenguas y muchos pensaban que el mundo entero sería cristiano en pocas décadas. Cuatro años después estalló la Primera Guerra Mundial, en la que naciones «cristianas» se mataron entre sí por millones. El optimismo se derrumbó, y el siglo XX mostró que la tarea era más difícil de lo que creían.',
        { h: '«Dadnos amigos»' },
        'Entre los pocos delegados de Asia estaba Vedanayagam Samuel Azariah, un joven pastor de la India que después sería el primer obispo anglicano indio. En un discurso que incomodó a muchos, agradeció a los misioneros su sacrificio, pero les pidió algo más: que no trataran a los creyentes de Asia como subordinados sino como hermanos. Terminó con una frase que se recuerda hasta hoy: habían dado sus bienes para alimentar a los pobres y sus cuerpos para ser quemados, pero también pedían amor; y concluyó: «¡Dadnos amigos!».',
        { h: 'América Latina, fuera' },
        'Para América Latina, Edimburgo tuvo una consecuencia importante. Algunas iglesias, sobre todo anglicanas, se negaron a tratar a América Latina como campo misionero, porque la consideraban ya cristiana por ser católica. Por eso el continente quedó fuera del temario. Los misioneros que trabajaban en América Latina organizaron entonces su propio congreso, que se reunió en Panamá en 1916 y que se estudia en la ruta VII.',
        'De Edimburgo nació también el deseo de que las iglesias cooperaran en la misión. Jesús había orado «para que todos sean uno … para que el mundo crea» (Jn 17:21). Ese deseo dio origen al movimiento ecuménico del siglo XX, que se estudia en la ruta VI, con sus logros y sus desvíos.',
        { ejercicio: {
          pregunta: '¿Por qué América Latina no estuvo en el temario de Edimburgo 1910?',
          opciones: [
            { t: 'Porque ya era mayoritariamente evangélica.', ok: false, por_que: 'En 1910 los evangélicos eran una pequeña minoría en América Latina.' },
            { t: 'Porque algunas iglesias la consideraban ya cristiana por ser católica.', ok: true, por_que: 'Para no ofender a quienes veían a América Latina como cristiana, se la excluyó; eso llevó al Congreso de Panamá en 1916.' },
            { t: 'Porque los gobiernos latinoamericanos prohibieron a sus ciudadanos viajar.', ok: false, por_que: 'No hubo tal prohibición; la exclusión fue una decisión de los organizadores.' }
          ],
          explicacion: 'La exclusión de América Latina en Edimburgo impulsó a los evangélicos del continente a organizarse por su cuenta, desde Panamá 1916.'
        } }
      ],
      pensar: 'Azariah pidió a los misioneros amistad y no solo ayuda. ¿Cómo tratas a los hermanos de otras culturas o de otros países que llegan a tu iglesia?'
    }
  ];
  // ================== RUTA VI. El siglo XX ==================
  const siglo20 = [
    {
      id: 'azusa', n: 'Gales, Azusa y el nuevo Pentecostés', ref: 'Hechos 2:1-4; Hechos 2:16-18; Joel 2:28-29', fecha: [1901, 1914],
      visual: [
        foto('azusa.jpg', 'El edificio de madera de dos pisos de la Misión de la Fe Apostólica, en la calle Azusa 312 de Los Ángeles, con el nombre pintado en la fachada y automóviles antiguos estacionados delante', 'La Misión de la Fe Apostólica de la calle Azusa, en una fotografía posterior al avivamiento (por los automóviles, de fines de la década de 1920).', 'Dominio público, vía Wikimedia Commons', 'Foto'),
        pasos([
          { t: 'Topeka: Agnes Ozman habla en lenguas (1 de enero de 1901)', fecha: 1901, estado: { view: V.mundo, lugares: ['h-topeka'] } },
          { t: 'Avivamiento de Gales (1904-1905)', fecha: 1904, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales'] } },
          { t: 'Avivamiento de Mukti, India (1905)', fecha: 1905, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales', 'h-mukti'] } },
          { t: 'Calle Azusa, Los Ángeles (1906); el fuego llega a Europa', fecha: 1906, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales', 'h-mukti', 'h-los-angeles', 'h-oslo'], trazos: ['h-t-azusa-oslo'] } },
          { t: 'Pionyang (1907), Valparaíso (1909) y Brasil (1910-1911)', fecha: 1909, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales', 'h-mukti', 'h-los-angeles', 'h-oslo', 'h-pyongyang', 'h-valparaiso', 'h-chicago', 'h-belem'], trazos: ['h-t-azusa-oslo', 'h-t-mukti-chile', 'h-t-chicago-belem'] } }
        ], 'El fuego se extiende'),
        esq('esquema-pentecostales.svg', 'Gráfico de barras con el número de pentecostales y carismáticos en el mundo: unos 981 mil en 1900, 57,6 millones en 1970, 442,6 millones en 2000 y 676,1 millones en 2026', 'Pentecostales y carismáticos en el mundo (Status of Global Christianity 2026).', 'Crecimiento')
      ],
      texto: [
        'Al comenzar el siglo XX, muchos creyentes del movimiento de santidad oraban por un nuevo Pentecostés. Las respuestas llegaron en varios lugares a la vez. El 1 de enero de 1901, en una escuela bíblica de Topeka, Kansas, dirigida por Carlos Parham, una alumna llamada Agnes Ozman pidió que le impusieran las manos para recibir el Espíritu Santo y comenzó a hablar en otras lenguas. Parham enseñó desde entonces que hablar en lenguas es la señal inicial del bautismo en el Espíritu. En 1904 y 1905, Gales vivió un avivamiento en el que, según se calculó entonces, unas cien mil personas se convirtieron. En 1905, en la misión de Mukti, en la India, dirigida por Pandita Ramabai, jóvenes viudas y huérfanas vivieron un mover del Espíritu con oración, arrepentimiento y lenguas.',
        { h: 'La calle Azusa' },
        'Guillermo Seymour era un predicador afroamericano, hijo de antiguos esclavos, que había escuchado las clases de Parham en Houston sentado en el pasillo, porque las leyes de segregación no le permitían entrar al aula. En 1906 fue invitado a predicar en Los Ángeles. En abril, en una casa de la calle Bonnie Brae, varios de los que oraban con él recibieron el bautismo en el Espíritu y hablaron en lenguas. Pronto se trasladaron a un viejo edificio de madera en la calle Azusa 312. Durante tres años hubo reuniones casi todos los días, a veces sin un programa, con oración, alabanza, testimonios, sanidades y personas que hablaban en lenguas. Lo más sorprendente para la época era que negros, blancos, latinos y asiáticos oraban juntos; un testigo escribió que la línea del color había sido lavada en la sangre.',
        'Desde Azusa salieron misioneros y un periódico, La fe apostólica, que llevó la noticia a todo el mundo. En pocos años el movimiento llegó a Noruega, Inglaterra, India, China, Corea, Chile, Brasil, Sudáfrica y muchos otros lugares. Los pentecostales y carismáticos, que eran menos de un millón en 1900, son hoy unos 676 millones.',
        { posturas: {
          titulo: '¿Siguen vigentes los dones del Espíritu?',
          a: { n: 'Cesacionismo', t: 'Algunos teólogos evangélicos enseñan que los dones de señales, como las lenguas, la profecía y los milagros, cesaron con los apóstoles, una vez completada la Escritura. Entienden que «lo perfecto» de 1 Corintios 13:10 es el Nuevo Testamento terminado.' },
          b: { n: 'Continuismo', t: 'La promesa del Espíritu es «para vosotros es la promesa … y para todos los que están lejos» (Hch 2:39), los dones están dados para edificar a la iglesia «esperando la manifestación de nuestro Señor Jesucristo» (1 Co 1:7), y «lo perfecto» es la venida de Cristo, cuando veremos «cara a cara» (1 Co 13:10, 12).' },
          c: 'Este recurso sigue la segunda postura: el bautismo en el Espíritu Santo y los dones espirituales son para hoy, para edificación de la iglesia y para el testimonio. Se ejercen con amor (1 Co 13), con orden (1 Co 14:40) y bajo la autoridad de la Escritura, que es completa y no se aumenta.'
        } },
        'Este recurso dedica a Azusa una sola estación porque el movimiento pentecostal tendrá su propio recurso (en preparación). La ruta VII cuenta el avivamiento de Valparaíso, que dio origen al pentecostalismo latinoamericano.',
        { ejercicio: {
          pregunta: '¿Qué rasgo del avivamiento de la calle Azusa llamó especialmente la atención en la sociedad de 1906?',
          opciones: [
            { t: 'Que se celebraba en una catedral con liturgia en latín.', ok: false, por_que: 'Se celebraba en un edificio de madera muy sencillo, sin liturgia fija.' },
            { t: 'Que personas de distintas razas oraban juntas bajo el liderazgo de un pastor afroamericano.', ok: true, por_que: 'En una época de segregación, Azusa reunía a negros, blancos, latinos y asiáticos, y la dirigía Guillermo Seymour, hijo de esclavos.' },
            { t: 'Que lo organizaba el gobierno de Estados Unidos.', ok: false, por_que: 'Fue un movimiento espontáneo de creyentes sencillos; la prensa de la época incluso se burló de él.' }
          ],
          explicacion: 'Pentecostés fue desde el principio un don para «toda carne» (Hch 2:17): hijos e hijas, jóvenes y ancianos, siervos y siervas. En Azusa eso se vio de manera visible.'
        } }
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hch 2:39). ¿Has buscado ser lleno del Espíritu Santo para ser testigo de Cristo donde vives?'
    },
    {
      id: 'fundamentos', n: 'Los fundamentos de la fe', ref: '1 Corintios 15:3-4; Judas 1:3; 2 Timoteo 3:16', fecha: [1910, 1925],
      visual: [
        tabla({
          titulo: 'Las verdades que defendían Los fundamentos (1910-1915)',
          cab: ['Doctrina', 'Base bíblica'],
          filas: [
            ['La inspiración y la verdad de la Escritura', '2 Ti 3:16; 2 P 1:21'],
            ['El nacimiento virginal de Cristo', 'Mt 1:23; Lc 1:34-35'],
            ['La muerte de Cristo en lugar del pecador', '1 P 2:24; Is 53:5'],
            ['La resurrección corporal de Cristo', '1 Co 15:3-8'],
            ['La realidad de los milagros', 'Jn 20:30-31'],
            ['La segunda venida de Cristo', 'Hch 1:11']
          ],
          nota: 'Doce tomos de ensayos de autores de varias denominaciones, distribuidos gratuitamente en unos tres millones de ejemplares.'
        }),
        cita('Judas 1:3', 'Amados, por la gran solicitud que tenía de escribiros acerca de nuestra común salvación, me ha sido necesario escribiros exhortándoos que contendáis ardientemente por la fe que ha sido una vez dada a los santos.')
      ],
      texto: [
        'A comienzos del siglo XX, las ideas liberales que se estudiaron en la ruta V habían llegado a muchas iglesias y seminarios de Norteamérica. Entre 1910 y 1915, dos empresarios cristianos financiaron la publicación de Los fundamentos, doce tomos de ensayos escritos por pastores y profesores de varias denominaciones, que defendían las doctrinas centrales de la fe. Se enviaron gratis a pastores, misioneros y estudiantes de todo el mundo, en unos tres millones de ejemplares.',
        { h: 'Fundamentalistas y modernistas' },
        'En 1920 se empezó a llamar «fundamentalistas» a quienes defendían esas verdades. Del otro lado estaban los «modernistas». En 1922, un famoso predicador liberal, Harry Emerson Fosdick, predicó un sermón titulado ¿Ganarán los fundamentalistas?, en el que pedía tolerancia para quienes no creían en el nacimiento virginal ni en la segunda venida literal. Al año siguiente, el profesor presbiteriano Juan Gresham Machen respondió con un libro en el que sostenía que el liberalismo no es otra versión del cristianismo, sino otra religión, porque niega lo que el cristianismo afirma sobre el pecado, Cristo y la salvación.',
        'Judas había escrito a la iglesia que contendiera «ardientemente por la fe que ha sido una vez dada a los santos» (Jud 1:3). Para los fundamentalistas, no se trataba de detalles: si Cristo no resucitó, «vana es entonces nuestra predicación» (1 Co 15:14).',
        { h: 'El juicio de Scopes y el repliegue' },
        'En 1925, en Dayton, Tennessee, un profesor fue juzgado por enseñar la evolución en una escuela pública, contra una ley del estado. El juicio se volvió un espectáculo nacional. El profesor fue condenado, pero la prensa ridiculizó a los fundamentalistas como ignorantes y atrasados. Muchos se retiraron de las universidades y de las grandes denominaciones, y formaron sus propias iglesias, escuelas e institutos bíblicos.',
        { h: 'Lo que dejó esta lucha' },
        'El movimiento fundamentalista defendió verdades esenciales y formó a generaciones de pastores y misioneros que llegaron también a América Latina. Pero con el tiempo una parte se volvió combativa, desconfiada de toda cultura y separada de otros creyentes. A mediados del siglo, otros evangélicos buscaron un camino que mantuviera las mismas verdades con una actitud más abierta y comprometida con el mundo, como se verá en la estación sobre Lausana. Para los pentecostales, que eran rechazados por muchos fundamentalistas por su experiencia del Espíritu, esa nueva etapa abrió la puerta a la comunión con otros evangélicos.'
      ],
      pensar: 'Judas pide contender por la fe, y Pablo pide hacerlo con amor y mansedumbre (2 Ti 2:24-25). ¿Cómo puedes defender las verdades centrales de la fe sin volverte contencioso por cosas secundarias?'
    },
    {
      id: 'totalitarismo', n: 'La iglesia ante Hitler', ref: 'Hechos 5:29; Lucas 9:23; Mateo 16:24-25', fecha: [1933, 1945],
      visual: [
        foto('bonhoeffer.jpg', 'Fotografía de Dietrich Bonhoeffer en 1939: un hombre de unos treinta y tres años, de pie y de perfil, con anteojos, chaqueta clara, camisa y corbata oscura, en un jardín', 'Dietrich Bonhoeffer en Sigurdshof, Pomerania, sede del seminario clandestino (1939).', 'Bundesarchiv, Bild 146-1987-074-16 / CC BY-SA 3.0 DE, vía Wikimedia Commons', 'Foto'),
        mapa({ view: V.reforma, lugares: ['h-barmen', 'h-flossenburg', 'h-wittenberg'] }, 'Mapa'),
        tabla({
          titulo: 'La iglesia confesante',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1933', 'Hitler llega al poder; los «cristianos alemanes» apoyan al nazismo'],
            ['1934', 'Declaración de Barmen: Cristo es la única Palabra de Dios'],
            ['1935-1937', 'Bonhoeffer dirige un seminario clandestino en Finkenwalde'],
            ['1937', 'Bonhoeffer publica El precio de la gracia; Niemöller es arrestado'],
            ['1944', 'Corrie ten Boom es arrestada en Holanda por esconder judíos'],
            ['1945', 'Bonhoeffer es ejecutado el 9 de abril en Flossenbürg']
          ]
        })
      ],
      texto: [
        'En 1933 Adolfo Hitler llegó al poder en Alemania, el país de la Reforma. Muchos protestantes lo recibieron con entusiasmo. Un movimiento llamado «cristianos alemanes» quiso unir la fe con el nacionalismo: pedía expulsar de la iglesia a los pastores de origen judío, quitar el Antiguo Testamento y presentar a Jesús como un héroe ario. El gobierno impuso un obispo del Reich.',
        { h: 'La Declaración de Barmen' },
        'Un grupo de pastores y teólogos se resistió. En mayo de 1934, reunidos en Barmen, firmaron una declaración redactada principalmente por el teólogo suizo Karl Barth. Su primer punto decía que Jesucristo, tal como lo presenta la Sagrada Escritura, es la única Palabra de Dios que la iglesia debe oír, confiar y obedecer en la vida y en la muerte, y rechazaba que la iglesia reconociera otras revelaciones, como la voz de un líder o de una nación. Así nació la iglesia confesante. El pastor Martín Niemöller, que había fundado una liga de pastores contra la persecución de los cristianos de origen judío, pasó ocho años en campos de concentración.',
        { h: 'Dietrich Bonhoeffer' },
        'Dietrich Bonhoeffer era un joven teólogo luterano de Berlín. Dirigió un seminario clandestino para formar pastores de la iglesia confesante y en 1937 publicó un libro sobre el discipulado en el que distinguía entre la «gracia barata», que perdona sin pedir arrepentimiento ni seguimiento, y la gracia costosa, que llama a seguir a Cristo y cuesta la vida. Recordaba las palabras de Jesús: «Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame» (Lc 9:23). En 1939 estaba a salvo en Nueva York, pero volvió a Alemania porque sentía que no podría ayudar a reconstruir la iglesia después de la guerra si no compartía el sufrimiento de su pueblo. Participó en la resistencia contra Hitler, fue arrestado en 1943 y ahorcado el 9 de abril de 1945, pocas semanas antes del fin de la guerra.',
        'En Holanda, la familia ten Boom, relojeros de Haarlem, escondió judíos en su casa. Corrie ten Boom fue arrestada en 1944 y llevada a un campo de concentración, donde murió su hermana Betsie. Después de la guerra, Corrie recorrió el mundo predicando el perdón, y llegó a dar la mano a uno de sus antiguos guardias.',
        { h: 'El silencio de muchos' },
        'La iglesia confesante fue una minoría. La mayoría de los cristianos alemanes calló o apoyó al régimen mientras se perseguía y asesinaba a millones de judíos. En octubre de 1945, los líderes de la iglesia evangélica alemana confesaron públicamente su culpa: no haber dado testimonio con más valor, ni orado con más fe, ni amado con más ardor. Es una advertencia para todas las generaciones: la iglesia que confunde el evangelio con una nación o un partido pierde su voz profética.'
      ],
      pensar: 'Bonhoeffer advirtió contra la «gracia barata», que perdona sin llamar a seguir a Cristo. ¿Hay alguna forma en que vives la gracia de Dios como si no te costara nada?'
    },
    {
      id: 'comunismo', n: 'Bajo el comunismo', ref: 'Salmo 2:1-4; Juan 15:18-20; Hechos 8:4', fecha: [1917, 1991],
      visual: [
        img('iglesia-casa.webp', 'Un pequeño grupo de creyentes chinos de distintas edades reunido de noche en la sala de una casa sencilla de la década de 1970: algunos sentados en taburetes y otros en el suelo, uno lee en voz baja una Biblia copiada a mano mientras los demás escuchan con atención; cortinas cerradas y luz de una lámpara pequeña', 'Una iglesia en casa en China durante la Revolución Cultural (recreación; personas anónimas).'),
        tabla({
          titulo: 'El cristianismo bajo regímenes comunistas',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1917', 'Revolución rusa; comienza la persecución de las iglesias'],
            ['1925', 'Se funda en la URSS la Liga de los Militantes Ateos'],
            ['1949', 'Triunfo comunista en China; en pocos años salen todos los misioneros'],
            ['1954', 'China crea el Movimiento Patriótico de las Tres Autonomías, controlado por el Estado'],
            ['1966-1976', 'Revolución Cultural: se cierran todos los templos de China'],
            ['1989-1991', 'Caída del muro de Berlín y fin de la Unión Soviética']
          ]
        })
      ],
      texto: [
        'El siglo XX fue el siglo con más mártires cristianos de la historia. Una parte de ellos murió bajo regímenes comunistas, que veían en la religión un obstáculo para construir una sociedad nueva sin Dios.',
        { h: 'La Unión Soviética' },
        'Después de la revolución de 1917, el gobierno soviético se propuso eliminar la religión. Miles de sacerdotes, pastores y creyentes fueron fusilados o enviados a campos de trabajo. De las decenas de miles de templos ortodoxos que había en Rusia, en 1939 quedaban abiertos apenas unos centenares. Los bautistas y otros evangélicos también fueron perseguidos; muchos se reunían en secreto en bosques y casas. En Rumania, el pastor Ricardo Wurmbrand pasó catorce años en la cárcel y fue torturado; después contó su historia en un libro que despertó a los creyentes de Occidente a orar por la iglesia perseguida. Un joven holandés, conocido como el Hermano Andrés, comenzó en 1955 a llevar Biblias escondidas a los países comunistas, y de esa obra nació Puertas Abiertas, que hoy publica cada año una lista de los países donde más se persigue a los cristianos.',
        { h: 'China' },
        'En 1949, cuando los comunistas tomaron el poder en China, había menos de un millón de protestantes. En pocos años todos los misioneros extranjeros fueron expulsados. El Estado creó una iglesia oficial, controlada por el partido, y los que no aceptaban ese control tuvieron que reunirse en casas. Durante la Revolución Cultural (1966-1976) se cerraron todos los templos, se quemaron las Biblias y muchos pastores pasaron décadas presos; Watchman Nee murió en un campo de trabajo en 1972. Parecía el fin de la iglesia en China.',
        { h: '«El que mora en los cielos se reirá»' },
        'Pero ocurrió lo contrario. Sin edificios, sin misioneros y sin libertad, los creyentes chinos se multiplicaron en las iglesias en casa, copiando la Biblia a mano y evangelizando de persona a persona. Las estimaciones varían mucho, pero hoy se habla de decenas de millones de cristianos en China. En 1989 cayó el muro de Berlín y en 1991 se disolvió la Unión Soviética, mientras las iglesias que habían sobrevivido salían a la luz. El salmista lo había anunciado: los reyes de la tierra se levantan contra el Señor y su ungido, pero «el que mora en los cielos se reirá» (Sal 2:4). Como en Hechos, «los que fueron esparcidos iban por todas partes anunciando el evangelio» (Hch 8:4).'
      ],
      pensar: 'Los creyentes chinos copiaban la Biblia a mano porque no podían tenerla impresa. ¿Qué te enseña su ejemplo sobre el valor de la Palabra y sobre la fuerza de la iglesia cuando le quitan todo lo demás?'
    },
    {
      id: 'lausana', n: 'Billy Graham y Lausana', ref: 'Marcos 16:15; 2 Corintios 5:19-20; Mateo 5:13-16', fecha: [1942, 2024],
      visual: [
        tabla({
          titulo: 'El movimiento evangélico mundial',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1942', 'Se forma en Estados Unidos la Asociación Nacional de Evangélicos, con iglesias pentecostales entre sus fundadoras'],
            ['1949', 'Campaña de Billy Graham en Los Ángeles; comienza su ministerio mundial'],
            ['1966', 'Congreso Mundial de Evangelización en Berlín'],
            ['1974', 'Congreso Internacional de Evangelización Mundial en Lausana, Suiza'],
            ['1989', 'Segundo Congreso de Lausana, en Manila'],
            ['2010', 'Tercer Congreso de Lausana, en Ciudad del Cabo'],
            ['2024', 'Cuarto Congreso de Lausana, en Seúl-Incheon, al cumplirse cincuenta años']
          ]
        }),
        mapa({ view: V.mundo, lugares: ['h-los-angeles', 'h-lausana', 'h-manila', 'h-ciudad-del-cabo', 'h-seul'] }, 'Mapa')
      ],
      texto: [
        'A mediados del siglo XX, un grupo de evangélicos de Norteamérica quiso superar el aislamiento en que habían caído muchos fundamentalistas, sin abandonar ninguna de sus convicciones. En 1942 formaron la Asociación Nacional de Evangélicos, y por primera vez varias iglesias pentecostales fueron aceptadas como hermanas por otras iglesias evangélicas. Se fundaron seminarios y revistas, y una nueva generación se propuso llevar el evangelio con seriedad intelectual y compromiso con la sociedad.',
        { h: 'Billy Graham' },
        'La figura más conocida de este movimiento fue Billy Graham, un evangelista bautista de Carolina del Norte. Su campaña en Los Ángeles, en 1949, duró ocho semanas y lo hizo famoso. Durante más de sesenta años predicó en casi todos los países del mundo, a cientos de millones de personas, por radio, televisión y en estadios. Su mensaje era sencillo: Dios te ama, el pecado te separa de Él, Cristo murió por ti y debes recibirlo por la fe. Al final de cada predicación invitaba a pasar adelante para entregar la vida a Cristo. Murió en 2018, a los 99 años.',
        { h: 'El Congreso de Lausana (1974)' },
        'En julio de 1974, Graham y otros líderes convocaron un congreso sobre la evangelización mundial en Lausana, Suiza. Llegaron unos 2.700 participantes de más de 150 países, muchos de ellos de Asia, África y América Latina. Allí hablaron, con una fuerza que sorprendió a muchos, dos latinoamericanos: el ecuatoriano René Padilla y el peruano Samuel Escobar. Pidieron que la evangelización no se separara de la vida concreta de los pueblos, ni el evangelio de una cultura extranjera.',
        'El congreso aprobó el Pacto de Lausana, redactado bajo la dirección del pastor inglés Juan Stott. Afirma que la evangelización y la responsabilidad social son parte del deber cristiano, y que en la misión de la iglesia la evangelización es lo primero, porque somos embajadores de Cristo que ruegan a los hombres: «Reconciliaos con Dios» (2 Co 5:20). El movimiento de Lausana siguió con congresos en Manila (1989), Ciudad del Cabo (2010) y Seúl-Incheon (2024), y es hoy una de las principales redes de cooperación misionera evangélica.',
        { ejercicio: {
          pregunta: 'Según el Pacto de Lausana, ¿qué lugar tiene la evangelización en la misión de la iglesia?',
          opciones: [
            { t: 'Es lo único que importa; la acción social no forma parte del deber cristiano.', ok: false, por_que: 'El Pacto afirma que la responsabilidad social también es parte del deber cristiano.' },
            { t: 'Es lo primero, aunque la responsabilidad social también es parte del deber cristiano.', ok: true, por_que: 'Lausana unió ambas cosas, pero afirmó la prioridad de anunciar el evangelio.' },
            { t: 'Debe dejarse de lado hasta que mejoren las condiciones sociales de los pueblos.', ok: false, por_que: 'Lausana nunca puso en duda la urgencia de evangelizar; al contrario, llamó a toda la iglesia a hacerlo.' }
          ],
          explicacion: 'Jesús envió a sus discípulos a predicar el evangelio a toda criatura (Mr 16:15) y a ser sal y luz con sus buenas obras (Mt 5:13-16). Lausana quiso mantener las dos cosas en su lugar.'
        } }
      ],
      pensar: 'Billy Graham predicó un mensaje sencillo durante sesenta años. ¿Podrías explicar con claridad el evangelio a un amigo en cinco minutos? Inténtalo esta semana.'
    },
    {
      id: 'unidad', n: 'El movimiento ecuménico', ref: 'Juan 17:20-23; Efesios 4:3-6; 1 Corintios 1:10', fecha: [1910, 1999],
      visual: [
        cita('Juan 17:20-23', 'Mas no ruego solamente por éstos, sino también por los que han de creer en mí por la palabra de ellos, para que todos sean uno; como tú, oh Padre, en mí, y yo en ti, que también ellos sean uno en nosotros; para que el mundo crea que tú me enviaste. La gloria que me diste, yo les he dado, para que sean uno, así como nosotros somos uno. Yo en ellos, y tú en mí, para que sean perfectos en unidad, para que el mundo conozca que tú me enviaste, y que los has amado a ellos como también a mí me has amado.'),
        tabla({
          titulo: 'De Edimburgo al Consejo Mundial',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1910', 'Conferencia Misionera de Edimburgo'],
            ['1921', 'Consejo Misionero Internacional'],
            ['1925-1927', 'Conferencias de Vida y Acción (Estocolmo) y de Fe y Constitución (Lausana)'],
            ['1948', 'Nace en Ámsterdam el Consejo Mundial de Iglesias'],
            ['1961', 'Dos iglesias pentecostales chilenas se unen al Consejo, las primeras pentecostales en hacerlo'],
            ['1999', 'Luteranos y católicos firman una declaración conjunta sobre la justificación']
          ]
        })
      ],
      texto: [
        'Jesús oró por la unidad de los que creerían en Él: «para que todos sean uno … para que el mundo crea que tú me enviaste» (Jn 17:21). En el siglo XX, muchas iglesias sintieron que sus divisiones eran un escándalo ante el mundo y un obstáculo para la misión. Así nació el movimiento ecuménico, que buscaba la unidad de los cristianos.',
        { h: 'El Consejo Mundial de Iglesias' },
        'El deseo de cooperar que surgió en Edimburgo en 1910 dio origen a varias organizaciones, que en 1948 se unieron en Ámsterdam para formar el Consejo Mundial de Iglesias. Al principio lo integraron 147 iglesias protestantes y ortodoxas que confesaban a Jesucristo como Dios y Salvador. Con los años creció hasta reunir a cientos de iglesias. En 1961 se unieron dos iglesias pentecostales de Chile, las primeras de esta familia en hacerlo, mientras la mayoría de los pentecostales y evangélicos del mundo prefirió mantenerse fuera.',
        { h: 'Por qué muchos evangélicos se distanciaron' },
        'Con el tiempo, muchos evangélicos se distanciaron del Consejo. Les preocupaba que, por buscar la unidad de las instituciones, se dejaran de lado verdades esenciales, como la autoridad de la Biblia y la necesidad de la conversión personal; que la evangelización se reemplazara por el diálogo con otras religiones; y que el Consejo apoyara causas políticas de un solo signo. Por eso, a la vez, muchos evangélicos formaron sus propias redes de cooperación, como la Alianza Evangélica Mundial y el movimiento de Lausana.',
        { posturas: {
          titulo: '¿Qué clase de unidad pidió Jesús?',
          a: { n: 'Unidad visible e institucional', t: 'Las iglesias deben buscar la comunión plena y visible: reconocerse mutuamente, compartir la Cena del Señor y, si es posible, formar una sola organización, para que el mundo vea la unidad (Jn 17:21).' },
          b: { n: 'Unidad espiritual en la verdad', t: 'La unidad ya existe entre todos los verdaderos creyentes, porque hay «un cuerpo, y un Espíritu» (Ef 4:4). Se expresa en el amor y la cooperación, pero nace de compartir la verdad del evangelio y no requiere una sola organización (Ef 4:13; Gá 1:8).' },
          c: 'La mayoría de las iglesias evangélicas de América Latina sigue la segunda postura: busca la unidad con todos los que confiesan a Cristo según la Escritura y coopera con ellos en la misión y el servicio, sin sacrificar la verdad del evangelio por la unidad de las estructuras.'
        } },
        'La unidad que pidió Jesús es un desafío también para los evangélicos, que se han dividido muchas veces por orgullo o por cuestiones menores. Pablo pregunta: «¿Acaso está dividido Cristo?» (1 Co 1:13). No se trata de borrar las diferencias, sino de amar a los hermanos de otras iglesias, orar juntos y trabajar juntos en lo que nos une, que es mucho.'
      ],
      pensar: '«En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros» (Jn 13:35). ¿Qué paso concreto podrías dar para acercarte a creyentes de otra iglesia evangélica de tu ciudad?'
    },
    {
      id: 'renovacion', n: 'Vaticano II y la renovación carismática', ref: '1 Corintios 12:7; Hechos 10:44-47; 1 Tesalonicenses 5:21', fecha: [1960, 1990],
      visual: [
        tabla({
          titulo: 'El Concilio Vaticano II (1962-1965)',
          cab: ['Qué cambió', 'Qué no cambió'],
          filas: [
            ['La misa pasó del latín a la lengua de cada pueblo', 'La misa sigue entendiéndose como sacrificio'],
            ['Se animó a los católicos a leer la Biblia', 'La tradición y el magisterio siguen junto a la Escritura'],
            ['Se llamó a los protestantes «hermanos separados»', 'El papado y los dogmas marianos se mantienen'],
            ['Se afirmó la libertad religiosa', 'Las doctrinas de Trento siguen vigentes']
          ]
        }),
        mapa({ view: V.eeuu, lugares: ['h-los-angeles', 'h-pittsburgh', 'h-chicago'] }, 'Mapa')
      ],
      texto: [
        'En la década de 1960 ocurrieron dos cambios que sorprendieron a los evangélicos: la iglesia católica abrió sus puertas a la Biblia y a la lengua del pueblo, y la experiencia del Espíritu Santo, que hasta entonces parecía propia de los pentecostales, llegó a iglesias tradicionales.',
        { h: 'El Concilio Vaticano II' },
        'En 1962 el papa Juan XXIII convocó un concilio para poner al día a la iglesia católica. El Concilio Vaticano II (1962-1965) cambió muchas prácticas, como resume la tabla: la misa empezó a celebrarse en la lengua de cada pueblo, se animó a los fieles a leer la Escritura, se reconoció la libertad religiosa y se llamó a los protestantes «hermanos separados» en lugar de herejes. En América Latina, donde durante siglos la Biblia había estado lejos del pueblo, comenzaron a circular Biblias católicas en castellano. En 1999 luteranos y católicos firmaron una declaración conjunta en la que reconocían un acuerdo básico sobre la justificación por gracia mediante la fe.',
        'Pero las doctrinas centrales que separaron a la Reforma de Roma siguen vigentes: la autoridad del papa, la tradición junto a la Escritura, la misa como sacrificio, los dogmas sobre María y el purgatorio. Por eso los evangélicos valoran el acercamiento a la Biblia y el respeto mutuo, sin dejar de afirmar que la Escritura es la autoridad final.',
        { h: 'La renovación carismática' },
        'En 1960 un pastor episcopal de California, Dennis Bennett, contó a su congregación que había recibido el bautismo en el Espíritu Santo y había hablado en lenguas. La noticia se difundió por todo el país. En los años siguientes, miles de anglicanos, luteranos, presbiterianos y metodistas vivieron experiencias semejantes sin dejar sus iglesias: así nació el movimiento carismático. En febrero de 1967, durante un retiro de estudiantes de la Universidad Duquesne, en Pittsburgh, varios jóvenes católicos vivieron la misma experiencia, y comenzó la renovación carismática católica, que se extendió por todo el mundo, también por América Latina. En la década de 1980 surgió una «tercera ola» en iglesias evangélicas que no se identificaban como pentecostales.',
        'Para los pentecostales fue una sorpresa: lo que antes se rechazaba como fanatismo era ahora buscado en iglesias históricas. Muchos se alegraron, recordando que Pedro reconoció que Dios había dado el mismo don a los gentiles (Hch 10:47). Otros advirtieron que una experiencia espiritual no reemplaza la doctrina bíblica: la renovación debe llevar a la Escritura, a Cristo como único mediador y a una vida santa. El criterio sigue siendo el de Pablo: «Examinadlo todo; retened lo bueno» (1 Ts 5:21).'
      ],
      pensar: 'Pedro, al ver que el Espíritu caía sobre los gentiles, dijo: «¿Puede acaso alguno impedir el agua?» (Hch 10:47). ¿Cómo reaccionas cuando Dios obra en personas o grupos que no esperabas?'
    },
    {
      id: 'sur', n: 'El cristianismo se traslada al sur', ref: 'Isaías 49:6; Salmo 22:27; Malaquías 1:11', fecha: [1945, 2000],
      visual: [
        esq('esquema-continentes.svg', 'Gráfico de barras con el número de cristianos por continente en 1900 y en 2026', 'Cristianos por continente, en millones (Status of Global Christianity 2026).', 'Por continente'),
        tabla({
          titulo: 'Cristianos que viven en el sur global',
          cab: ['Año', 'Porcentaje'],
          filas: [['1900', '17,6 %'], ['1970', '42,7 %'], ['2000', '59,0 %'], ['2026', '69,0 %']],
          nota: 'Fuente: Status of Global Christianity, 2026. El sur global comprende África, Asia, América Latina y Oceanía.'
        })
      ],
      texto: [
        'Después de la Segunda Guerra Mundial, los imperios europeos se desmoronaron. La India se independizó en 1947 y, en las dos décadas siguientes, casi toda África y Asia. Muchos pensaron que, sin el respaldo colonial, el cristianismo desaparecería de esos países, por considerarlo una religión de extranjeros. Ocurrió exactamente lo contrario.',
        { h: 'África' },
        'En África, la iglesia creció como nunca cuando pasó a manos africanas. Desde la década de 1930, un avivamiento en Ruanda y Uganda, conocido como el avivamiento de África oriental, llamó a creyentes y pastores a la confesión del pecado y a la santidad, y se extendió durante décadas. Surgieron iglesias fundadas por africanos, con un fuerte énfasis en la oración, la sanidad y el Espíritu Santo. El número de cristianos en África pasó de unos 137 millones en 1970 a casi 780 millones en 2026: hoy es el continente con más cristianos.',
        { h: 'Asia' },
        'En Corea del Sur, el crecimiento de la iglesia fue extraordinario: en Seúl, una congregación pentecostal fundada en 1958 en una carpa llegó a ser la más grande del mundo, con cientos de miles de miembros organizados en grupos en las casas. En China, como se vio, la iglesia creció bajo persecución. También creció en Indonesia, Filipinas, Nepal, la India y otros países, muchas veces entre los más pobres y despreciados.',
        { h: 'Un nuevo mapa' },
        'El resultado es que el centro de gravedad del cristianismo se trasladó al sur, como muestra la tabla: en 1900, menos de dos de cada diez cristianos vivían en el sur global; en 2026, casi siete de cada diez. Hoy Brasil, Corea del Sur y Nigeria están entre los países que más misioneros envían. Iglesias africanas y latinoamericanas tienen congregaciones en Europa, donde los creyentes inmigrantes llenan templos que estaban vacíos. Lo que comenzó con misioneros que salían del norte hacia el sur se ha convertido en una misión de todas partes hacia todas partes.',
        'Dios había dicho a su Siervo: «te di por luz de las naciones, para que seas mi salvación hasta lo postrero de la tierra» (Is 49:6). El siglo XX vio cumplirse esa promesa como nunca antes.',
        { ejercicio: {
          pregunta: '¿Qué pasó con el cristianismo en África y Asia después del fin de los imperios coloniales?',
          opciones: [
            { t: 'Desapareció, porque era una religión impuesta por los extranjeros.', ok: false, por_que: 'Muchos lo predijeron, pero los datos muestran lo contrario: el cristianismo creció como nunca.' },
            { t: 'Creció con fuerza, sobre todo cuando las iglesias quedaron en manos de los creyentes de cada país.', ok: true, por_que: 'En África los cristianos pasaron de unos 137 millones en 1970 a casi 780 millones en 2026.' },
            { t: 'Se mantuvo igual que en tiempos coloniales.', ok: false, por_que: 'El cambio fue enorme: hoy la mayoría de los cristianos del mundo vive en el sur global.' }
          ],
          explicacion: 'El evangelio no pertenece a ninguna cultura. Cuando los creyentes de cada pueblo lo hicieron suyo, se extendió más que nunca.'
        } }
      ],
      pensar: 'Hoy la iglesia de América Latina es parte del sur que envía misioneros al mundo. ¿Qué podrías hacer tú, o tu iglesia, para participar en esa misión?'
    }
  ];
  // ================== RUTA VII. El evangelio en América Latina ==================
  const america = [
    {
      id: 'colonia', n: 'La cristiandad colonial', ref: 'Hechos 17:26; Génesis 1:27; Miqueas 6:8', fecha: [1492, 1810],
      visual: [
        img('colonial.webp', 'Interior de una iglesia de adobe en un pueblo de los Andes hacia 1600: un fraile con hábito pardo celebra ante un altar de madera dorada mientras una congregación de indígenas quechuas, con mantas tejidas de colores, está arrodillada en el suelo de tierra; luz entrando por una puerta lateral', 'Una iglesia de pueblo en la América colonial (recreación; personas anónimas).'),
        mapa({ view: V.america, capas: ['h-am-esp', 'h-am-por'], lugares: ['h-santo-domingo', 'h-mexico', 'h-lima', 'h-reducciones'] }, 'Mapa'),
        tabla({
          titulo: 'La fe en la colonia',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1492', 'Llegada de Colón; comienza la conquista y la evangelización'],
            ['1511', 'Sermón de Antonio de Montesinos en Santo Domingo contra los abusos a los indígenas'],
            ['1550-1551', 'Debate de Valladolid entre Bartolomé de las Casas y Juan Ginés de Sepúlveda'],
            ['1557', 'Primer culto evangélico en América, de hugonotes franceses en la bahía de Guanabara (Brasil)'],
            ['1570-1610', 'Tribunales de la Inquisición en Lima, México y Cartagena'],
            ['1790-1793', 'Primera Biblia católica en castellano autorizada en España (Scio de San Miguel)']
          ],
          nota: 'El mapa muestra la América española y portuguesa con las fronteras de los países de hoy.'
        })
      ],
      texto: [
        'Para entender la historia evangélica de América Latina hay que empezar antes, en la colonia. Durante tres siglos, desde 1492 hasta las independencias, el continente fue gobernado por España y Portugal, y la iglesia católica fue la única permitida. Por un acuerdo con el papa, los reyes tenían el «patronato»: nombraban obispos, financiaban las misiones y decidían sobre la vida de la iglesia. La cruz y la espada llegaron juntas.',
        { h: 'Evangelización y abusos' },
        'Miles de frailes franciscanos, dominicos, agustinos y jesuitas vinieron a evangelizar. Algunos aprendieron las lenguas indígenas, escribieron gramáticas y catecismos, fundaron escuelas y hospitales, y defendieron a los indígenas. Pero muchas veces el bautismo se impuso sin verdadera conversión, y en muchos pueblos la fe cristiana se mezcló con las creencias antiguas. Los conquistadores y encomenderos explotaron a los indígenas hasta la muerte, y después trajeron millones de africanos esclavizados.',
        'Hubo voces valientes. En diciembre de 1511, en Santo Domingo, el fraile dominico Antonio de Montesinos predicó ante los colonos un sermón que los escandalizó: les preguntó con qué derecho trataban así a los indígenas, y si acaso no eran hombres con almas racionales. Bartolomé de las Casas, que había sido encomendero, renunció a sus indígenas en 1514 y pasó cincuenta años defendiéndolos ante los reyes. La Escritura les daba la razón: Dios «de una sangre ha hecho todo el linaje de los hombres» (Hch 17:26), y todos fueron creados a su imagen (Gn 1:27).',
        { h: 'Sin Biblia y sin libertad' },
        'Durante la colonia, el pueblo casi no tuvo acceso a la Biblia. El índice de libros prohibidos de España, de 1559, prohibía las Biblias en lengua vulgar, y la Inquisición, con tribunales en Lima, México y Cartagena, vigilaba que no entraran libros protestantes. Los pocos evangélicos que llegaron, casi siempre marineros o comerciantes extranjeros, fueron juzgados. Un grupo de hugonotes franceses que se estableció en 1555 en la bahía de Guanabara, en Brasil, celebró en 1557 el primer culto evangélico de América; poco después, tres de ellos murieron ejecutados por su fe.',
        'Por eso, cuando llegaron las independencias, América Latina era un continente católico por tradición, con una piedad popular llena de devoción, pero donde la mayoría nunca había leído la Biblia ni oído con claridad que la salvación es un regalo de Dios por la fe en Cristo. Esa es la tierra en la que se sembró el evangelio en los siglos XIX y XX.'
      ],
      pensar: 'Montesinos y Las Casas defendieron a los indígenas cuando casi nadie lo hacía. ¿A quién desprecia hoy tu sociedad, y cómo te llama la Escritura a tratarlo (Mi 6:8)?'
    },
    {
      id: 'thomson', n: 'Diego Thomson y la Biblia en la escuela', ref: 'Salmo 119:130; Salmo 119:9; Proverbios 22:6', fecha: [1818, 1827],
      visual: [
        img('thomson.webp', 'Diego Thomson, un escocés de unos treinta años con levita oscura y corbatín blanco, de pie en una gran sala de escuela de Buenos Aires hacia 1819; decenas de niños criollos sentados en largos bancos leen en grupos pequeños lecciones colgadas en la pared, mientras niños mayores les enseñan; ventanas altas con luz de la mañana', 'Diego Thomson en una escuela lancasteriana de Buenos Aires, hacia 1819 (recreación).'),
        mapa({ view: V.america, lugares: ['h-buenos-aires', 'h-santiago', 'h-lima', 'h-quito', 'h-bogota', 'h-mexico'], trazos: ['h-t-thomson'] }, 'Los viajes de Thomson')
      ],
      texto: [
        'Las independencias, entre 1810 y 1825, abrieron una puerta inesperada. Los nuevos gobiernos querían educar al pueblo y buscaban métodos modernos. En 1818 llegó a Buenos Aires un pastor bautista escocés, Diego Thomson, enviado por una sociedad británica de escuelas y por la Sociedad Bíblica Británica y Extranjera.',
        { h: 'Las escuelas lancasterianas' },
        'Thomson traía el método lancasteriano, inventado en Inglaterra: en cada escuela, un maestro enseñaba a los alumnos mayores, y estos enseñaban a grupos pequeños de niños menores, de modo que una sola escuela podía educar a cientos de niños con pocos recursos. Para enseñar a leer, Thomson usaba lecciones sacadas de la Biblia, en una traducción católica aprobada, sin notas. Así, miles de niños aprendieron a leer con las palabras de la Escritura.',
        'Los libertadores lo recibieron con entusiasmo. El gobierno de Buenos Aires lo nombró director de escuelas y le dio la ciudadanía. En 1821 lo contrató el gobierno de Chile, bajo Bernardo O\'Higgins, y en 1822 José de San Martín lo invitó al Perú. Después recorrió Ecuador y Colombia, donde en 1825 se fundó en Bogotá una sociedad bíblica con participación de sacerdotes católicos, y en 1827 llegó a México. En todas partes vendía o regalaba Biblias y Nuevos Testamentos, y conversaba con autoridades, sacerdotes y familias.',
        { h: 'Una semilla' },
        'Muchas de las escuelas lancasterianas cerraron cuando cambiaron los gobiernos, y la iglesia oficial terminó oponiéndose a la distribución de Biblias sin notas. Pero Thomson había abierto un camino: había mostrado que la Biblia podía circular libremente en América Latina, y que muchos la recibían con gozo. En sus cartas contó que en muchos lugares la gente nunca había visto una Biblia completa. El salmista dice: «La exposición de tus palabras alumbra; hace entender a los simples» (Sal 119:130).',
        'Thomson no fundó iglesias evangélicas: su propósito era poner la Palabra en manos del pueblo. Esa obra la continuaron las sociedades bíblicas y los colportores durante todo el siglo XIX, como se ve en la próxima estación.',
        { ejercicio: {
          pregunta: '¿Qué método usó Diego Thomson para llevar la Biblia a América Latina?',
          opciones: [
            { t: 'Fundó iglesias evangélicas en cada ciudad que visitó.', ok: false, por_que: 'Thomson no fundó iglesias; su propósito era educar y distribuir la Biblia.' },
            { t: 'Organizó escuelas donde los niños aprendían a leer con lecciones tomadas de la Biblia.', ok: true, por_que: 'Las escuelas lancasterianas usaban textos bíblicos para enseñar a leer, con apoyo de los nuevos gobiernos.' },
            { t: 'Predicó en las plazas contra la iglesia católica.', ok: false, por_que: 'Thomson trabajó con las autoridades y aun con sacerdotes, y evitó la confrontación.' }
          ],
          explicacion: 'Thomson unió dos necesidades de las nuevas repúblicas: educar al pueblo y darle la Palabra de Dios. Fue un comienzo humilde que preparó el terreno para el evangelio.'
        } }
      ],
      pensar: 'Miles de niños aprendieron a leer con la Biblia gracias a Thomson. ¿Qué estás haciendo para que los niños de tu familia o de tu iglesia aprendan a amar la Escritura (Pr 22:6)?'
    },
    {
      id: 'colportores', n: 'Colportores y libertad de cultos', ref: 'Isaías 52:7; Romanos 10:15; Hechos 4:19-20', fecha: [1833, 1925],
      visual: [
        img('colportor.webp', 'Un colportor del siglo XIX, un hombre delgado con sombrero de ala ancha, poncho de lana y botas gastadas, guía por la brida a una mula cargada con dos cajones de madera llenos de Biblias por un sendero de montaña en los Andes, con cumbres nevadas al fondo', 'Un colportor de las sociedades bíblicas en los Andes (recreación; persona anónima).'),
        tabla({
          titulo: 'La libertad de cultos en algunos países',
          cab: ['País', 'Año', 'Paso'],
          filas: [
            ['Argentina', '1853', 'La Constitución garantiza la libertad de culto'],
            ['México', '1860', 'Ley de libertad de cultos de las Leyes de Reforma'],
            ['Chile', '1865', 'Ley que permite el culto privado de los no católicos y sus escuelas'],
            ['Brasil', '1890', 'Separación de la iglesia y el Estado'],
            ['Perú', '1915', 'Se suprime la prohibición del culto público no católico'],
            ['Uruguay', '1918', 'La Constitución separa la iglesia del Estado'],
            ['Chile', '1925', 'La Constitución separa la iglesia del Estado']
          ],
          nota: 'Fechas de los pasos principales; en cada país hubo leyes anteriores y posteriores.'
        })
      ],
      texto: [
        'Durante el siglo XIX, las sociedades bíblicas enviaron a América Latina agentes y colportores, vendedores ambulantes de Biblias. Viajaban a pie o a lomo de mula por caminos de montaña, selvas y desiertos, de pueblo en pueblo, con cajones de Biblias, Nuevos Testamentos y Evangelios. Muchos eran latinoamericanos convertidos; otros, europeos que adoptaron estas tierras como propias.',
        { h: 'Francisco Penzotti' },
        'Uno de los más conocidos fue Francisco Penzotti, un italiano que emigró a Uruguay, se convirtió en Montevideo y se dedicó a distribuir la Biblia. Con el escocés Andrés Milne recorrió Argentina, Chile, Bolivia, Perú y Ecuador. En Lima, además de vender Biblias, reunía a un grupo de creyentes. El 26 de julio de 1890 fue arrestado por realizar cultos no católicos, que la Constitución prohibía, y pasó unos ocho meses en una cárcel insalubre. Una fotografía suya tras las rejas dio la vuelta al mundo y provocó protestas internacionales. Fue liberado en marzo de 1891. Su caso alimentó el debate que llevó, en 1915, a que el Perú suprimiera la prohibición del culto público no católico.',
        'Otros colportores no tuvieron la misma suerte: fueron apedreados, expulsados de los pueblos o vieron quemar sus Biblias en las plazas. Algunos murieron. Pero siguieron adelante, convencidos de que valía la pena. Isaías lo dice: «¡Cuán hermosos son sobre los montes los pies del que trae alegres nuevas!» (Is 52:7).',
        { h: 'La lucha por la libertad' },
        'Al mismo tiempo, en cada país hubo un largo debate entre quienes querían mantener el catolicismo como religión única y quienes defendían la libertad de conciencia. Muchos liberales defendían la libertad religiosa por razones políticas, y los evangélicos la defendían por razones bíblicas: la fe no se impone, se recibe. La tabla muestra algunos de los pasos principales. Gracias a esas leyes, los evangélicos pudieron reunirse, construir templos, fundar escuelas y, con el tiempo, predicar en las calles.',
        'Los apóstoles respondieron a las autoridades que les prohibían predicar: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20). Esa misma convicción sostuvo a los colportores y a los primeros evangélicos de América Latina en tiempos de prohibición.'
      ],
      pensar: 'Los colportores arriesgaron la vida para que la Biblia llegara a los pueblos. ¿Quién de tu barrio o tu familia todavía no tiene una Biblia, y cómo podrías ayudarle a tenerla?'
    },
    {
      id: 'gardiner', n: 'Allen Gardiner y los pueblos del sur', ref: '1 Pedro 5:7; Filipenses 4:11-13; Juan 12:24', fecha: [1838, 1880],
      visual: [
        img('gardiner.webp', 'La costa desolada de una bahía de Tierra del Fuego en invierno: playa de piedras grises, un bote de madera volcado junto a la entrada de una cueva entre las rocas, árboles torcidos por el viento y montañas con nieve bajo un cielo nublado; no hay personas', 'La costa de Bahía Aguirre, en Tierra del Fuego, donde murió la expedición de Gardiner en 1851 (recreación).'),
        mapa({ view: V.conosur, lugares: ['h-bahia-aguirre', 'h-ushuaia', 'h-santiago', 'h-valparaiso', 'h-buenos-aires'] }, 'Mapa')
      ],
      texto: [
        'Allen Gardiner era un oficial de la marina británica que, después de su conversión, dedicó su vida a llevar el evangelio a los pueblos que nadie alcanzaba. Trabajó primero entre los zulúes de Sudáfrica y, desde 1838, recorrió el sur de Chile, Argentina y Bolivia buscando cómo llegar a los pueblos originarios. En 1844 fundó en Inglaterra una pequeña sociedad misionera para la Patagonia.',
        { h: 'La expedición de 1850' },
        'En 1850 Gardiner partió con seis compañeros hacia Tierra del Fuego, para llegar a los pueblos yámanas. Llevaban provisiones para seis meses y esperaban un barco con más alimentos. El barco nunca llegó a tiempo. Los yámanas, desconfiados, no los dejaron establecerse, y los misioneros tuvieron que refugiarse en la costa de Bahía Aguirre, en botes y en una cueva. Uno tras otro murieron de hambre y de escorbuto. Gardiner fue el último; murió hacia el 6 de septiembre de 1851. Cuando un barco llegó en octubre, solo encontró sus cuerpos y sus escritos.',
        'Los últimos apuntes de Gardiner no tienen una sola queja contra Dios. Escribió que había aprendido a estar contento en cualquier situación y que había echado todo su cuidado sobre Dios, esperando su tiempo. Son palabras que recuerdan a Pablo: «he aprendido a contentarme, cualquiera que sea mi situación» (Fil 4:11), y a Pedro: «echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros» (1 P 5:7).',
        { h: 'La semilla que murió' },
        'La noticia conmovió a Inglaterra, y en lugar de abandonar la misión, muchos se ofrecieron para continuarla. La sociedad, que después se llamó Sociedad Misionera Sudamericana, estableció una base en las islas Malvinas y luego en Tierra del Fuego. En 1869 se instaló una misión en Ushuaia, y el misionero Tomás Bridges aprendió la lengua yámana y escribió un diccionario de decenas de miles de palabras. Carlos Darwin, que años antes había visitado Tierra del Fuego y creía que sus habitantes no podían cambiar, quedó tan impresionado por la transformación que vio en los informes de la misión que se hizo contribuyente de la sociedad.',
        'La historia tiene también un final triste: las enfermedades que trajeron los colonos y la ocupación de sus tierras casi hicieron desaparecer a los yámanas a comienzos del siglo XX. Pero la sociedad que nació del sacrificio de Gardiner siguió trabajando entre los pueblos originarios del Chaco argentino y paraguayo y entre los mapuches de Chile. Jesús lo había dicho: «si el grano de trigo no cae en la tierra y muere, queda solo; pero si muere, lleva mucho fruto» (Jn 12:24).'
      ],
      pensar: 'Gardiner murió de hambre sin ver ningún fruto, y aun así escribió que estaba contento en Dios. ¿Qué te enseña su fe para los momentos en que tu servicio parece no dar resultado?'
    },
    {
      id: 'historicas', n: 'Iglesias de inmigrantes y misiones históricas', ref: 'Jeremías 29:7; Mateo 13:31-32; Zacarías 4:10', fecha: [1845, 1916],
      visual: [
        mapa({ view: V.sudamerica, lugares: ['h-valparaiso', 'h-santiago', 'h-buenos-aires', 'h-montevideo', 'h-sao-paulo', 'h-lima', 'h-bogota'] }, 'Mapa'),
        tabla({
          titulo: 'Algunos comienzos',
          cab: ['Año', 'Lugar', 'Comienzo'],
          filas: [
            ['1845', 'Valparaíso', 'Llega el pastor David Trumbull; funda la Iglesia Unión'],
            ['1855', 'Río de Janeiro', 'El médico escocés Robert Kalley inicia una iglesia brasileña'],
            ['Década de 1850', 'Sur de Chile y de Brasil', 'Colonos alemanes luteranos fundan sus iglesias'],
            ['1856-1858', 'Uruguay', 'Llegan colonos valdenses del norte de Italia'],
            ['1859', 'Brasil', 'Llega el misionero presbiteriano Ashbel Simonton'],
            ['1870', 'São Paulo', 'Se funda la escuela presbiteriana que dará origen a la Universidad Mackenzie'],
            ['1877', 'Chile', 'El metodista William Taylor inicia escuelas que se sostienen solas']
          ]
        })
      ],
      texto: [
        'Con la libertad de comercio llegaron a los puertos de América Latina comerciantes británicos, norteamericanos y alemanes, y con ellos las primeras iglesias evangélicas estables. Al principio eran iglesias para extranjeros, con cultos en inglés o alemán, que las leyes toleraban siempre que no buscaran convertir a los católicos.',
        { h: 'Iglesias de inmigrantes' },
        'En 1845 llegó a Valparaíso David Trumbull, un pastor norteamericano que fundó una iglesia para los marinos y extranjeros, y que luchó durante décadas por la libertad religiosa en Chile; llegó a hacerse ciudadano chileno. En el sur de Chile y de Brasil se establecieron miles de colonos alemanes, que formaron iglesias luteranas. En Uruguay y Argentina se instalaron colonos valdenses, descendientes de los seguidores de Pedro Valdo que habían sobrevivido en los valles de los Alpes desde la Edad Media: una historia de fe que unía siete siglos.',
        { h: 'Las misiones históricas' },
        'Poco a poco llegaron misioneros que querían evangelizar a los latinoamericanos en su propia lengua: presbiterianos, metodistas, bautistas, anglicanos y otros. En Brasil, el médico escocés Robert Kalley fundó en 1858 una iglesia evangélica brasileña, y el presbiteriano Ashbel Simonton llegó en 1859. En Chile, Argentina, Perú, México y otros países se formaron las primeras congregaciones de habla castellana. Estas misiones, que hoy se llaman históricas, fundaron también colegios, hospitales e imprentas. Muchos de sus colegios fueron de los primeros en educar a las mujeres y en usar métodos modernos, y algunos llegaron a ser universidades.',
        { h: 'Pequeñas y extranjeras' },
        'A comienzos del siglo XX, los evangélicos eran todavía una pequeña minoría, menos del uno por ciento en casi todos los países. Muchas de sus iglesias dependían de misioneros y dinero del extranjero, tenían cultos con himnos traducidos y formas importadas, y la gente las veía como «la religión de los gringos». Faltaba que el evangelio echara raíces en el pueblo latinoamericano y que los propios latinoamericanos lo llevaran a sus vecinos. Eso ocurriría, sobre todo, con el movimiento pentecostal.',
        'Pero aquellas pequeñas iglesias fueron fieles. Tradujeron himnos, formaron pastores, defendieron la libertad religiosa y sembraron en una tierra que parecía dura. El profeta pregunta: «los que menospreciaron el día de las pequeñeces se alegrarán» (Zac 4:10). Los comienzos pequeños no son comienzos sin valor.'
      ],
      pensar: 'Las primeras iglesias evangélicas eran pequeñas y parecían extranjeras. ¿Qué hace que tu iglesia sea hoy «de tu pueblo» y no de afuera? ¿Hay algo que todavía la hace parecer ajena a tus vecinos?'
    },
    {
      id: 'valparaiso', n: 'El avivamiento de Valparaíso', ref: 'Joel 2:28-29; Hechos 2:4; Hechos 2:47', fecha: [1907, 1910],
      visual: [
        img('valparaiso.webp', 'Interior de una iglesia metodista de madera en Valparaíso en 1909, de noche: una congregación de obreros, empleadas y familias chilenas de la época, con ropa sencilla, ora en voz alta con las manos levantadas; algunos de rodillas junto a las bancas, una joven llora con el rostro alzado; lámparas de parafina iluminan el templo', 'Una reunión de oración en Valparaíso en 1909 (recreación; personas anónimas).'),
        mapa({ view: V.mundo, lugares: ['h-mukti', 'h-valparaiso', 'h-santiago', 'h-los-angeles'], trazos: ['h-t-mukti-chile'] }, 'De la India a Chile')
      ],
      texto: [
        'Guillermo Hoover era un médico norteamericano que llegó a Chile en 1889 como profesor y misionero metodista. Desde 1902 era pastor de la Iglesia Metodista Episcopal de Valparaíso. Después del terremoto que destruyó buena parte de la ciudad en 1906, la congregación construyó un nuevo templo con mucho sacrificio.',
        { h: 'Una carta desde la India' },
        'En 1907 su esposa, María, recibió un folleto escrito por una antigua compañera de estudios, Minnie Abrams, misionera en la India. Contaba el avivamiento que había vivido en la misión de Mukti, con oración, arrepentimiento y bautismo en el Espíritu Santo. Los Hoover leyeron también noticias de lo que pasaba en otros lugares del mundo y empezaron a orar con su congregación por un derramamiento del Espíritu. Durante meses se reunieron en vigilias de oración, muchas veces toda la noche.',
        { h: '1909' },
        'En 1909 llegó la respuesta. En las reuniones de oración muchos creyentes vivieron lo que los profetas habían anunciado: hablaron en otras lenguas, tuvieron visiones, lloraron por sus pecados, cayeron al suelo bajo el poder de Dios, cantaron en el Espíritu y danzaron de gozo. Hubo conversiones de personas que vivían en el alcohol y la violencia, reconciliaciones y sanidades. La congregación creció rápidamente, y el fuego se extendió a las iglesias metodistas de Santiago y de otras ciudades. Era el cumplimiento de la promesa de Joel: «derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas» (Jl 2:28).',
        'La prensa se burló y las autoridades de la iglesia metodista se alarmaron. En la conferencia anual de 1910, Hoover fue acusado de enseñar doctrinas contrarias al metodismo. Él renunció, y con las congregaciones de Valparaíso y de Santiago que lo siguieron formó una iglesia independiente, que con el tiempo se llamó Iglesia Metodista Pentecostal.',
        { h: 'Un pentecostalismo chileno' },
        'Lo más notable de este movimiento fue que desde el principio fue chileno: no dependía de misioneros ni de dinero extranjero. Sus pastores eran obreros y campesinos que se formaban en la práctica, predicando en las calles, y sus himnos y su estilo nacieron del pueblo. En los años siguientes se formaron otras iglesias pentecostales a partir de esta y de otras raíces, y el pentecostalismo llegó a ser la mayoría de los evangélicos de Chile. Casi al mismo tiempo, en 1910 y 1911, nacieron en Brasil las primeras iglesias pentecostales, en São Paulo y en Belém, y en las décadas siguientes el movimiento se extendió por todo el continente. Lucas lo resume así: «el Señor añadía cada día a la iglesia los que habían de ser salvos» (Hch 2:47).',
        'Esta estación es un panorama; la historia del pentecostalismo latinoamericano se estudiará en detalle en el recurso sobre el movimiento pentecostal (en preparación).',
        { ejercicio: {
          pregunta: '¿Qué rasgo distinguió al pentecostalismo chileno desde sus comienzos?',
          opciones: [
            { t: 'Dependía de misioneros y fondos de Estados Unidos.', ok: false, por_que: 'Fue al revés: después de la separación de 1910, el movimiento no tuvo apoyo misionero extranjero.' },
            { t: 'Fue un movimiento nacional, con pastores chilenos formados en la práctica y predicación en las calles.', ok: true, por_que: 'Desde muy temprano fue dirigido y sostenido por chilenos, lo que explica en parte su rápido crecimiento.' },
            { t: 'Nació en una universidad, entre profesores de teología.', ok: false, por_que: 'Nació en una congregación de obreros y gente sencilla de Valparaíso, en reuniones de oración.' }
          ],
          explicacion: 'El pentecostalismo chileno mostró que el evangelio echa raíces cuando los creyentes de cada pueblo lo hacen suyo y lo anuncian a sus vecinos con sus propias palabras.'
        } }
      ],
      pensar: 'El avivamiento de Valparaíso comenzó con meses de vigilias de oración. ¿Estás dispuesto a perseverar en oración por un derramamiento del Espíritu en tu iglesia, aunque la respuesta tarde?'
    },
    {
      id: 'panama', n: 'De Panamá 1916 a la misión latinoamericana', ref: 'Hechos 1:8; 2 Timoteo 2:2; Hechos 15:28', fecha: [1916, 1992],
      visual: [
        tabla({
          titulo: 'Los encuentros evangélicos del continente',
          cab: ['Año', 'Lugar', 'Encuentro'],
          filas: [
            ['1916', 'Panamá', 'Congreso de Acción Cristiana en América Latina'],
            ['1925', 'Montevideo', 'Congreso de Obra Cristiana en Sudamérica, ya en castellano'],
            ['1929', 'La Habana', 'Congreso Evangélico Hispanoamericano'],
            ['1949', 'Buenos Aires', 'Primera Conferencia Evangélica Latinoamericana'],
            ['1969', 'Bogotá', 'Primer Congreso Latinoamericano de Evangelización (CLADE I)'],
            ['1970', 'Cochabamba', 'Se funda la Fraternidad Teológica Latinoamericana'],
            ['1979', 'Lima', 'CLADE II'],
            ['1982', 'Panamá', 'Se forma la Confraternidad Evangélica Latinoamericana (CONELA)'],
            ['1992', 'Quito', 'CLADE III']
          ]
        }),
        mapa({ view: V.america, lugares: ['h-panama', 'h-montevideo', 'h-buenos-aires', 'h-bogota', 'h-lima', 'h-quito'] }, 'Mapa')
      ],
      texto: [
        'Cuando en Edimburgo, en 1910, se dejó a América Latina fuera del temario, los misioneros que trabajaban en el continente decidieron reunirse por su cuenta. En febrero de 1916 se celebró en Panamá el Congreso de Acción Cristiana en América Latina. Asistieron unos trescientos participantes, casi todos misioneros y dirigentes extranjeros, y muy pocos latinoamericanos.',
        { h: 'Lo que se decidió en Panamá' },
        'El congreso afirmó que América Latina era un campo legítimo de misión, porque millones de personas no conocían el evangelio de manera personal. Las misiones acordaron repartirse el territorio para no competir, coordinar la literatura y la educación, y formar líderes nacionales. Pero el tono fue todavía el de una obra pensada desde afuera. En los congresos de Montevideo (1925) y La Habana (1929), en cambio, ya hablaron más latinoamericanos, y en castellano.',
        { h: 'Una voz latinoamericana' },
        'En la segunda mitad del siglo XX, los evangélicos latinoamericanos empezaron a pensar la misión desde su propia realidad. En 1969 se reunió en Bogotá el primer Congreso Latinoamericano de Evangelización, y al año siguiente un grupo de pastores y teólogos fundó la Fraternidad Teológica Latinoamericana, para reflexionar sobre la fe con raíces bíblicas y latinoamericanas. Entre sus fundadores estaban René Padilla y Samuel Escobar, que en 1974 hablarían en Lausana. En 1982 se formó la Confraternidad Evangélica Latinoamericana, que reunió a iglesias evangélicas y pentecostales del continente.',
        'Las iglesias pentecostales, que crecían más que todas las demás, participaron poco al principio en estos encuentros: estaban ocupadas evangelizando, y muchas desconfiaban de las discusiones teológicas. Con el tiempo, sus líderes se incorporaron a las redes de cooperación evangélica.',
        { h: 'De campo misionero a fuerza misionera' },
        'En un siglo, América Latina pasó de ser un continente excluido del mapa misionero a ser un continente que envía misioneros al mundo. En la década de 1980 se organizaron congresos misioneros latinoamericanos, como COMIBAM (1987), y hoy miles de misioneros latinoamericanos sirven en otros países. La promesa de Jesús sigue vigente: «me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8).'
      ],
      pensar: 'Pablo pidió a Timoteo encargar la enseñanza a «hombres fieles que sean idóneos para enseñar también a otros» (2 Ti 2:2). ¿A quién estás formando tú para que continúe la obra?'
    },
    {
      id: 'pobreza', n: 'Dos respuestas a la pobreza', ref: 'Lucas 4:18; Santiago 2:15-17; 2 Corintios 5:19-20; Gálatas 2:10', fecha: [1968, 1990],
      visual: [
        cita('Lucas 4:18', 'El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres; Me ha enviado a sanar a los quebrantados de corazón; A pregonar libertad a los cautivos, Y vista a los ciegos; A poner en libertad a los oprimidos;'),
        tabla({
          titulo: 'Dos corrientes de los años setenta',
          cab: ['', 'Teología de la liberación', 'Misión integral'],
          filas: [
            ['Origen', 'Teólogos católicos, desde Medellín (1968) y Gustavo Gutiérrez (1971); algunos protestantes', 'Evangélicos de la Fraternidad Teológica Latinoamericana (1970) y Lausana (1974)'],
            ['Punto de partida', 'La realidad de los pobres y la práctica de la justicia', 'La autoridad de la Escritura y la misión de la iglesia'],
            ['Salvación', 'Se entiende también como liberación de estructuras sociales injustas', 'Reconciliación con Dios por la fe en Cristo, que transforma a la persona y su entorno'],
            ['Herramientas', 'Algunos usaron el análisis marxista de la sociedad', 'Rechaza reducir el evangelio a una ideología política']
          ]
        })
      ],
      texto: [
        'En las décadas de 1960 y 1970, América Latina vivía una gran pobreza, desigualdad, golpes de Estado y violencia política. Muchos creyentes se preguntaron qué tenía que decir el evangelio a esa realidad. Surgieron dos respuestas principales, que conviene conocer porque marcaron a las iglesias del continente.',
        { h: 'La teología de la liberación' },
        'En la iglesia católica, los obispos reunidos en Medellín en 1968 hablaron de una «opción preferencial por los pobres». En 1971, el sacerdote peruano Gustavo Gutiérrez publicó Teología de la liberación, que leía la Biblia desde la experiencia de los pobres y veía en el Éxodo un modelo de liberación. Algunos teólogos protestantes siguieron una línea parecida. Una parte de esta corriente usó el análisis marxista de la sociedad y apoyó movimientos políticos, y en 1984 el propio Vaticano criticó ese uso.',
        { h: 'La misión integral' },
        'Entre los evangélicos, la Fraternidad Teológica Latinoamericana propuso otro camino, que se llamó misión integral. Sostenía que el evangelio es para toda la persona: que la conversión a Cristo transforma también la vida familiar, el trabajo y la sociedad, y que la iglesia debe servir a los pobres como lo hizo Jesús, que vino a «dar buenas nuevas a los pobres» (Lc 4:18). Al mismo tiempo, afirmaba que la necesidad más profunda del ser humano es la reconciliación con Dios.',
        { posturas: {
          titulo: '¿Cuál es la relación entre el evangelio y la justicia social?',
          a: { n: 'Teología de la liberación', t: 'Dios se pone del lado de los pobres y oprimidos, como en el Éxodo. La fe se verifica en la práctica de la justicia, y la salvación incluye la liberación de estructuras sociales injustas (Lc 4:18; Is 58:6-7).' },
          b: { n: 'Misión integral', t: 'El centro del evangelio es la reconciliación con Dios por medio de Cristo (2 Co 5:19-20). Esa reconciliación produce frutos de justicia y servicio a los necesitados, porque la fe sin obras está muerta (Stg 2:15-17), pero el evangelio no se reduce a un programa político.' },
          c: 'Este recurso sigue la segunda postura, con una prioridad clara: la iglesia anuncia ante todo el perdón de los pecados y la vida nueva en Cristo, y esa vida nueva se muestra en el amor práctico a los pobres (Gá 2:10). Muchas iglesias pentecostales, sin escribir teología, vivieron la misión integral en la práctica: rescataron a personas del alcohol y la violencia, restauraron familias y sostuvieron a los más pobres en sus comunidades. La iglesia sirve a todos sin identificarse con ningún partido.'
        } },
        'La historia muestra dos peligros opuestos. Uno es reducir el evangelio a la política y olvidar la conversión personal. El otro es predicar la salvación del alma y olvidar al hermano que tiene hambre. Santiago pregunta: si alguien dice al necesitado «Id en paz, calentaos y saciaos», pero no le da lo necesario, «¿de qué aprovecha?» (Stg 2:16).'
      ],
      pensar: 'Pablo, después de debatir con los apóstoles sobre el evangelio, recordó que le pidieron «que nos acordásemos de los pobres» (Gá 2:10). ¿Cómo ayuda tu iglesia, y cómo ayudas tú, a los que pasan necesidad?'
    },
    {
      id: 'crecimiento', n: 'El crecimiento evangélico', ref: 'Isaías 60:22; Hechos 11:21; Zacarías 4:6', fecha: [1960, 2024],
      visual: [
        esq('esquema-latam.svg', 'Gráfico de barras de la religión en América Latina en 1995 y 2024 según Latinobarómetro: católicos 80 % y 54 %; evangélicos 6 % y 19 %; sin religión 4 % y 19 %', 'Religión en América Latina, 1995 y 2024 (Latinobarómetro).', 'América Latina'),
        tabla({
          titulo: 'Censos recientes',
          cab: ['País y censo', 'Católicos', 'Evangélicos', 'Sin religión'],
          filas: [
            ['Brasil, 2010', '65,1 %', '21,6 %', '7,9 %'],
            ['Brasil, 2022', '56,7 %', '26,9 %', '9,3 %'],
            ['Chile, 2002', '70,0 %', '15,1 %', '8,3 %'],
            ['Chile, 2024', '54,0 %', '16,3 %', '25,8 %']
          ],
          nota: 'Brasil: IBGE, población de 10 años o más (resultados publicados en junio de 2025). Chile: INE, población de 15 años o más (resultados publicados en julio de 2025).'
        })
      ],
      texto: [
        'Hace cien años, los evangélicos eran menos del uno por ciento en casi toda América Latina. Hoy son, según Latinobarómetro, cerca de uno de cada cinco latinoamericanos. En Brasil, el censo de 2022 contó un 26,9 % de evangélicos, más de 47 millones de personas. En Guatemala, Honduras y El Salvador, las encuestas recientes muestran que entre un tercio y más de dos quintos de la población es evangélica. Es uno de los cambios religiosos más rápidos de la historia moderna.',
        { h: 'Por qué creció' },
        'La gran mayoría de este crecimiento se debe a las iglesias pentecostales. Los estudiosos señalan varias causas. Las iglesias pentecostales fueron dirigidas por los propios latinoamericanos, con pastores salidos del pueblo, que hablaban su lenguaje. Cada creyente era un testigo, y se predicaba en las calles, en las plazas y de casa en casa. Las iglesias ofrecieron una comunidad a millones de personas que emigraban del campo a la ciudad y se sentían solas. La oración por los enfermos y la liberación de vicios como el alcohol transformaron familias enteras. Y las mujeres tuvieron un papel activo en la oración, la evangelización y el servicio. Detrás de todo, los creyentes ven la obra del Espíritu: «la mano del Señor estaba con ellos, y gran número creyó y se convirtió al Señor» (Hch 11:21).',
        { h: 'Los desafíos' },
        'El crecimiento trajo también desafíos serios. Muchas iglesias crecieron más en número que en formación bíblica, y en algunas se difundieron enseñanzas extrañas, como el llamado evangelio de la prosperidad. Hubo divisiones frecuentes, liderazgos autoritarios y escándalos que dañaron el testimonio. Algunos líderes buscaron el poder político y confundieron el reino de Dios con un partido. Y las encuestas muestran un fenómeno nuevo: crece el número de personas sin religión, entre ellas muchos jóvenes que se criaron en iglesias evangélicas y las dejaron. En Chile, el censo de 2024 mostró que uno de cada cuatro mayores de quince años no se identifica con ninguna religión.',
        'El crecimiento es una gran bendición y una gran responsabilidad. La pregunta ya no es si el evangelio puede echar raíces en América Latina, sino si las iglesias formarán discípulos maduros, fieles a la Escritura y capaces de transformar su sociedad. Dios dijo a Zorobabel: «No con ejército, ni con fuerza, sino con mi Espíritu» (Zac 4:6).',
        { ejercicio: {
          pregunta: 'Según Latinobarómetro, ¿cómo cambió la proporción de evangélicos en América Latina entre 1995 y 2024?',
          opciones: [
            { t: 'Pasó de cerca de un 6 % a cerca de un 19 %.', ok: true, por_que: 'En treinta años, la proporción de evangélicos se triplicó, mientras la de católicos bajó de 80 % a 54 %.' },
            { t: 'Se mantuvo estable, cerca de un 10 %.', ok: false, por_que: 'El cambio fue grande: en 1995 era alrededor de 6 %, y en 2024, alrededor de 19 %.' },
            { t: 'Pasó a ser la mayoría de la población del continente.', ok: false, por_que: 'Los evangélicos son cerca de uno de cada cinco latinoamericanos; los católicos siguen siendo la mayoría.' }
          ],
          explicacion: 'El mismo estudio muestra que también crecieron, en la misma proporción, las personas sin religión. Por eso el desafío de hoy es doble: seguir evangelizando y formar discípulos que perseveren.'
        } }
      ],
      pensar: '«El pequeño vendrá a ser mil, el menor, un pueblo fuerte» (Is 60:22). La iglesia evangélica de América Latina dejó de ser pequeña. ¿Qué significa para ti ser parte de una iglesia numerosa, y qué responsabilidad trae?'
    }
  ];
  // ================== RUTA VIII. La iglesia en el siglo XXI ==================
  // Cifras a octubre de 2026; revisar periódicamente (DIRECTRICES §20, Pendientes).
  const hoy = [
    {
      id: 'mundo', n: 'El cristianismo en el mundo hoy', ref: 'Apocalipsis 7:9-10; Habacuc 2:14; Mateo 28:19-20', fecha: 2026,
      visual: [
        tabla({
          titulo: 'El cristianismo mundial en 2026',
          cab: ['', 'Cifra estimada'],
          filas: [
            ['Cristianos en el mundo', '2.674 millones (32,2 % de la población)'],
            ['Cristianos que viven en el sur global', '69 %'],
            ['Pentecostales y carismáticos', '676 millones'],
            ['Evangélicos', '424 millones'],
            ['Misioneros enviados a otros países', '455.000'],
            ['Lenguas con el Nuevo Testamento traducido', '2.600'],
            ['Continente con más cristianos', 'África (casi 780 millones)']
          ],
          nota: 'Fuente: Center for the Study of Global Christianity, Status of Global Christianity, 2026. Pentecostales, carismáticos y evangélicos se superponen en parte. Son estimaciones que se actualizan cada año.'
        }),
        esq('esquema-continentes.svg', 'Gráfico de barras con el número de cristianos por continente en 1900 y en 2026', 'Cristianos por continente, en millones (Status of Global Christianity 2026).', 'Por continente')
      ],
      texto: [
        'Quinientos años después de las tesis de Lutero, el cristianismo es la fe más extendida del mundo. Según las estimaciones del Centro para el Estudio del Cristianismo Global, en 2026 hay unos 2.674 millones de cristianos, casi un tercio de la humanidad. Esa proporción es parecida a la de 1900, pero el mapa es completamente distinto.',
        { h: 'Un rostro nuevo' },
        'Como se vio en el panorama, el cristianismo de hoy es sobre todo del sur: casi siete de cada diez cristianos viven en África, América Latina, Asia y Oceanía. África es el continente con más cristianos, y crece a más del dos y medio por ciento al año. América Latina tiene unos 620 millones, Asia más de 415 millones. En Europa y Norteamérica, en cambio, el número de cristianos disminuye levemente cada año.',
        'Dentro de ese cuadro, el movimiento pentecostal y carismático es el que más ha crecido en el último siglo: de menos de un millón en 1900 a unos 676 millones en 2026, si se cuentan juntos los pentecostales clásicos, los carismáticos de iglesias históricas y las iglesias independientes de estilo pentecostal. Los evangélicos, que en buena parte se superponen con ellos, son unos 424 millones.',
        { h: 'Una tarea que continúa' },
        'Al mismo tiempo, la tarea no ha terminado. Dos de cada tres personas en el mundo no son cristianas, y hay miles de pueblos, sobre todo en Asia y el norte de África, donde casi nadie conoce a Cristo. Hay unos 455.000 misioneros sirviendo fuera de su país, enviados ya no solo desde Europa y Norteamérica, sino desde Brasil, Corea, Nigeria, la India, Filipinas y muchos otros países, incluidos los de América Latina.',
        'La visión de Juan sigue siendo la meta: una multitud «de todas naciones y tribus y pueblos y lenguas» delante del trono (Ap 7:9). Habacuc anunció que «la tierra será llena del conocimiento de la gloria de Jehová, como las aguas cubren el mar» (Hab 2:14). Cada generación de la iglesia tiene su parte en esa historia, y esta es la nuestra.'
      ],
      pensar: 'Hoy la mayoría de los cristianos vive en el sur del mundo, y América Latina es parte de ese centro. ¿Qué pueblo o país no alcanzado podría adoptar tu iglesia para orar y apoyar la misión?'
    },
    {
      id: 'perseguida', n: 'La iglesia perseguida', ref: 'Hebreos 13:3; Mateo 5:10-12; 2 Timoteo 3:12; Apocalipsis 2:10', fecha: 2026,
      visual: [
        img('perseguida.webp', 'De noche, en una habitación pequeña con las ventanas tapadas con telas, una familia de creyentes de rasgos centroasiáticos, padre, madre, una abuela y dos adolescentes, lee en voz baja una Biblia a la luz de un teléfono celular; expresiones serenas y atentas', 'Creyentes que leen la Biblia en secreto (recreación; personas anónimas).'),
        tabla({
          titulo: 'Lista Mundial de la Persecución 2026',
          cab: ['', ''],
          filas: [
            ['Cristianos que sufren persecución y discriminación altas', 'Más de 388 millones (1 de cada 7)'],
            ['Cristianos asesinados por su fe en el año de la lista', '4.849 (93 % en el África subsahariana)'],
            ['Los diez países más difíciles', 'Corea del Norte, Somalia, Yemen, Sudán, Eritrea, Siria, Nigeria, Pakistán, Libia, Irán']
          ],
          nota: 'Fuente: Puertas Abiertas, Lista Mundial de la Persecución 2026 (enero de 2026). La lista nació del ministerio del Hermano Andrés (ruta VI).'
        })
      ],
      texto: [
        'La historia de la iglesia es también una historia de persecución, y esa historia no ha terminado. Según la Lista Mundial de la Persecución que Puertas Abiertas publicó en enero de 2026, más de 388 millones de cristianos sufren niveles altos de persecución y discriminación por su fe: uno de cada siete cristianos del mundo. En el año que cubre la lista, 4.849 cristianos fueron asesinados por su fe, la gran mayoría en el África subsahariana.',
        { h: 'Distintas formas de persecución' },
        'La persecución tiene muchas formas. En Corea del Norte, que encabeza la lista, ser descubierto con una Biblia puede significar la muerte o el campo de trabajo para toda la familia. En países como Somalia, Yemen o Libia, un musulmán que se convierte puede ser rechazado y asesinado por su propia familia. En Nigeria y otras regiones de África, grupos armados atacan aldeas cristianas, queman iglesias y secuestran a creyentes. En otros países, la persecución es más silenciosa: pérdida del trabajo, exclusión de la escuela, vigilancia, cárcel para los pastores o leyes que prohíben evangelizar. También en América Latina hay creyentes perseguidos, en zonas controladas por grupos criminales o bajo gobiernos que desconfían de las iglesias.',
        { h: 'Lo que dice la Escritura' },
        'Jesús no prometió a sus discípulos una vida sin oposición: «Si a mí me han perseguido, también a vosotros os perseguirán» (Jn 15:20). Pablo escribió que «todos los que quieren vivir piadosamente en Cristo Jesús padecerán persecución» (2 Ti 3:12). Pero Jesús también dijo: «Bienaventurados los que padecen persecución por causa de la justicia, porque de ellos es el reino de los cielos» (Mt 5:10). Y la historia muestra, como en China, que la persecución no ha podido destruir a la iglesia.',
        { h: 'Qué podemos hacer' },
        'Hebreos pide: «Acordaos de los presos, como si estuvierais presos juntamente con ellos» (He 13:3). Los creyentes perseguidos suelen pedir tres cosas: que oremos por ellos, no solo para que la persecución termine, sino para que permanezcan fieles; que no los olvidemos; y que apoyemos a sus familias y a los que les llevan la Palabra. Su ejemplo también nos desafía: muchos de ellos arriesgan la vida por reunirse, mientras otros dejan de congregarse por comodidad.',
        { ejercicio: {
          pregunta: 'Según la Lista Mundial de la Persecución 2026, ¿cuántos cristianos sufren persecución y discriminación altas?',
          opciones: [
            { t: 'Unos pocos miles, en dos o tres países.', ok: false, por_que: 'Los asesinados son miles, pero los que sufren persecución alta son cientos de millones en decenas de países.' },
            { t: 'Más de 388 millones, uno de cada siete cristianos.', ok: true, por_que: 'Es la cifra que publicó Puertas Abiertas en enero de 2026.' },
            { t: 'La mitad de los cristianos del mundo.', ok: false, por_que: 'La proporción es de uno de cada siete, no de uno de cada dos.' }
          ],
          explicacion: 'La persecución no es algo del pasado ni de unos pocos lugares: afecta a millones de hermanos hoy. Hebreos 13:3 pide recordarlos como si estuviéramos presos con ellos.'
        } }
      ],
      pensar: '«Acordaos de los presos, como si estuvierais presos juntamente con ellos» (He 13:3). ¿Qué país de la lista podrías incluir esta semana en tu oración diaria?'
    },
    {
      id: 'secularizacion', n: 'Secularización: una fe que se enfría', ref: 'Romanos 12:2; Mateo 24:12-13; Hebreos 10:24-25', fecha: [1960, 2026],
      visual: [
        tabla({
          titulo: 'Personas sin religión',
          cab: ['Dónde', 'Antes', 'Ahora'],
          filas: [
            ['América Latina (Latinobarómetro)', '4 % en 1995', '19 % en 2024'],
            ['Chile (censo, mayores de 15 años)', '8,3 % en 2002', '25,8 % en 2024'],
            ['Brasil (censo, mayores de 10 años)', '7,9 % en 2010', '9,3 % en 2022']
          ],
          nota: 'Muchos de los que no se identifican con una religión dicen creer en Dios; los estudiosos lo describen más como un alejamiento de las instituciones que como ateísmo.'
        }),
        cita('Romanos 12:2', 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.')
      ],
      texto: [
        'Mientras la iglesia crece en el sur, en Europa occidental, en Norteamérica y cada vez más en algunas ciudades de América Latina ocurre lo contrario: la fe se enfría. A ese proceso se le llama secularización: la sociedad organiza su vida sin referencia a Dios, y la religión pasa a ser un asunto privado, opcional o irrelevante.',
        { h: 'Europa: de enviar misioneros a necesitarlos' },
        'En muchos países de Europa, de donde salieron los reformadores y los misioneros, hoy menos de uno de cada diez habitantes asiste regularmente a una iglesia. Hay templos convertidos en museos, bibliotecas o bares. Las ideas de la Ilustración, las guerras del siglo XX y la riqueza material contribuyeron a ese abandono. Al mismo tiempo, en esas mismas ciudades crecen iglesias de inmigrantes africanos, latinoamericanos y asiáticos, y algunas congregaciones locales viven una renovación. Europa, que fue el centro de las misiones, se ha vuelto un campo misionero.',
        { h: 'América Latina' },
        'En América Latina, el número de personas sin religión creció con rapidez en las últimas décadas. Según Latinobarómetro, pasó de un 4 % en 1995 a un 19 % en 2024; en Chile, el censo de 2024 registró un 25,8 % de personas mayores de quince años sin religión, más del triple que en 2002. Muchos de ellos dicen creer en Dios, pero no confían en las iglesias, en parte por los escándalos de abusos y de corrupción que han afectado a católicos y evangélicos. Otros son jóvenes que crecieron en hogares cristianos y nunca hicieron suya la fe.',
        { h: 'Una advertencia y una oportunidad' },
        'Jesús advirtió que «por haberse multiplicado la maldad, el amor de muchos se enfriará» (Mt 24:12), y Pablo exhorta: «No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento» (Ro 12:2). La secularización es un llamado a la iglesia a examinarse: a vivir con integridad, a formar discípulos y no solo asistentes, y a responder con humildad y claridad a las preguntas de una generación que duda.',
        'También es una oportunidad. La historia de este recurso muestra que la iglesia ha vivido antes tiempos de frialdad, como después de las guerras de religión o en la época de la Ilustración, y que Dios respondió con avivamientos. Hebreos pide: «no dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca» (He 10:25).'
      ],
      pensar: 'Muchos jóvenes que crecieron en la iglesia la dejan sin haber hecho suya la fe. ¿Qué joven de tu entorno necesita hoy que alguien lo acompañe, lo escuche y le muestre a Cristo con su vida?'
    },
    {
      id: 'biblia', n: 'La Biblia para todos los pueblos', ref: 'Apocalipsis 7:9; Romanos 10:17; Isaías 40:8', fecha: [1804, 2025],
      visual: [
        img('../de-la-biblia-a-nosotros/img/traductores-hoy.webp', 'Un equipo de traductores trabaja en una aldea: hablantes nativos y un lingüista revisan juntos un texto en una computadora portátil, bajo un techo de palma', 'La traducción de la Biblia continúa hoy (recreación; personas anónimas).'),
        esq('esquema-biblia.svg', 'Gráfico de barras sobre el acceso a la Escritura en las lenguas del mundo, en agosto de 2025: 776 lenguas con la Biblia completa, 1.798 con el Nuevo Testamento, 1.433 con algunas porciones, y 544 lenguas que esperan que comience una traducción', 'La Escritura en las lenguas del mundo (Wycliffe Global Alliance, agosto de 2025).', 'Lenguas'),
        tabla({
          titulo: 'La Escritura en las lenguas del mundo (agosto de 2025)',
          cab: ['', 'Lenguas'],
          filas: [
            ['Con la Biblia completa', '776'],
            ['Con el Nuevo Testamento', '1.798'],
            ['Con algunas porciones', '1.433'],
            ['Con traducción en curso', '4.457'],
            ['Que esperan que comience una traducción', '544 (unos 36,8 millones de personas)']
          ],
          nota: 'Fuente: Wycliffe Global Alliance, estadísticas de acceso a la Escritura, 1 de agosto de 2025.'
        })
      ],
      texto: [
        'La Reforma comenzó con el deseo de que el pueblo pudiera leer la Biblia en su lengua. Quinientos años después, ese deseo sigue impulsando a la iglesia. Según la Alianza Global Wycliffe, en agosto de 2025 la Biblia completa estaba traducida a 776 lenguas, el Nuevo Testamento a otras 1.798 y algunas porciones a 1.433 más. Es decir, alrededor de cuatro mil lenguas tienen al menos una parte de la Escritura.',
        { h: 'Lo que falta' },
        'En el mundo se hablan más de siete mil lenguas. Hay trabajo de traducción en marcha en unas 4.457, y 544 lenguas, habladas por casi 37 millones de personas, todavía esperan que alguien comience a traducir. Entre ellas hay lenguas indígenas de América Latina. Muchos de esos pueblos son pequeños, pero para Dios cada uno es importante: la multitud de Apocalipsis está formada por personas «de todas naciones y tribus y pueblos y lenguas» (Ap 7:9).',
        { h: 'Nuevas herramientas' },
        'Las herramientas han cambiado mucho. Donde Tyndale tenía una pluma y Carey una imprenta de madera, los traductores de hoy usan computadoras, programas especializados y, cada vez más, inteligencia artificial para preparar borradores que luego revisan los hablantes nativos. Los equipos ya no están formados solo por misioneros extranjeros, sino sobre todo por creyentes de cada pueblo. La Biblia llega además en audio, en lenguas de señas y en teléfonos celulares, y la película Jesús, basada en el Evangelio de Lucas, se ha doblado a más de dos mil lenguas.',
        'Pablo dice que «la fe es por el oír, y el oír, por la palabra de Dios» (Ro 10:17). Cada traducción abre una puerta para que un pueblo oiga y crea. Y la historia confirma la promesa que Casiodoro de Reina puso en la portada de su Biblia: «la palabra del Dios nuestro permanece para siempre» (Is 40:8).',
        ir('Ver cómo se traduce hoy la Biblia', '../../de-la-biblia-a-nosotros/')
      ],
      pensar: 'Hay pueblos que todavía no tienen ni un versículo en su lengua, y tú tienes la Biblia completa, quizás en varias versiones. ¿Cómo puedes responder a ese privilegio: leyendo más, orando por los traductores o apoyando su obra?'
    },
    {
      id: 'doctrinas', n: 'Doctrinas que confunden', ref: '2 Timoteo 4:3-4; Gálatas 1:8; 1 Timoteo 6:9-10; Efesios 4:14-15', fecha: [1970, 2026],
      visual: [
        tabla({
          titulo: 'Enseñanzas actuales y lo que dice la Escritura',
          cab: ['Enseñanza', 'Qué afirma', 'Qué dice la Escritura'],
          filas: [
            ['Evangelio de la prosperidad', 'La fe y las ofrendas garantizan riqueza y salud', 'Dios provee y bendice, pero la piedad no es fuente de ganancia (1 Ti 6:5-10); la vida no consiste en los bienes (Lc 12:15)'],
            ['Relativismo', 'Cada uno tiene su verdad; todos los caminos llevan a Dios', 'Jesús es el camino, la verdad y la vida (Jn 14:6)'],
            ['Fe sin iglesia', 'Se puede seguir a Cristo sin congregarse', 'El creyente es miembro de un cuerpo (1 Co 12:27; He 10:25)'],
            ['Gracia sin santidad', 'Dios perdona todo y no pide cambios', 'La gracia enseña a renunciar a la impiedad (Tit 2:11-12)'],
            ['Nuevas revelaciones sobre la Escritura', 'Profecías o visiones que añaden doctrina', 'La fe fue dada «una vez» a los santos (Jud 1:3); toda profecía se juzga (1 Co 14:29)']
          ]
        }),
        cita('2 Timoteo 4:3-4', 'Porque vendrá tiempo cuando no sufrirán la sana doctrina, sino que teniendo comezón de oír, se amontonarán maestros conforme a sus propias concupiscencias, y apartarán de la verdad el oído y se volverán a las fábulas.')
      ],
      texto: [
        'Cada época de la historia de la iglesia tuvo sus errores, y la nuestra no es la excepción. Pablo advirtió a Timoteo: «vendrá tiempo cuando no sufrirán la sana doctrina, sino que teniendo comezón de oír, se amontonarán maestros conforme a sus propias concupiscencias» (2 Ti 4:3). La tabla resume algunas enseñanzas que hoy confunden a muchos creyentes, también en América Latina.',
        { h: 'El evangelio de la prosperidad' },
        'Desde la década de 1970 se difundió, desde Norteamérica y luego en África, Asia y América Latina, una enseñanza según la cual Dios quiere que todos sus hijos sean ricos y sanos, y que eso se obtiene con fe, palabras declaradas y ofrendas generosas. Muchas personas pobres dieron lo poco que tenían esperando una recompensa económica que no llegó. La Escritura enseña que Dios cuida de sus hijos y que se puede orar por la provisión y la salud, pero advierte que «los que quieren enriquecerse caen en tentación y lazo» y que «raíz de todos los males es el amor al dinero» (1 Ti 6:9-10). Jesús llamó a buscar «primeramente el reino de Dios y su justicia» (Mt 6:33), y los apóstoles enseñaron que «a través de muchas tribulaciones» entramos en el reino (Hch 14:22). Las iglesias pentecostales clásicas han rechazado esta enseñanza, aunque ha entrado en muchas congregaciones.',
        { h: 'Otras confusiones' },
        'Junto a ella circulan otras ideas: que no hay una verdad para todos, que se puede seguir a Cristo sin pertenecer a una iglesia, que la gracia no pide un cambio de vida, o que ciertos líderes reciben revelaciones que están por encima de la Escritura. Todas tienen algo en común: quitan la autoridad final a la Palabra de Dios. Por eso la convicción de la Reforma, «sola Escritura», sigue siendo tan necesaria hoy como en 1517.',
        { h: 'Cómo protegerse' },
        'Pablo no responde al error con miedo, sino con madurez: que los creyentes ya no sean «niños fluctuantes, llevados por doquiera de todo viento de doctrina», sino que, «siguiendo la verdad en amor», crezcan en Cristo (Ef 4:14-15). La mejor protección es conocer bien la Biblia, pertenecer a una iglesia que la enseñe fielmente y examinar todo con ella, como los de Berea (Hch 17:11).',
        { ejercicio: {
          pregunta: 'Un predicador asegura que si das una ofrenda grande, Dios te devolverá el doble en dinero ese mismo año. ¿Qué responde mejor la Escritura?',
          opciones: [
            { t: 'Es correcto, porque Dios siempre multiplica el dinero de los que ofrendan.', ok: false, por_que: 'La Biblia enseña a dar con generosidad, pero no promete una ganancia económica a cambio; eso convierte la ofrenda en un negocio.' },
            { t: 'Dios ama al dador alegre y provee a sus hijos, pero no se ofrenda para enriquecerse: la piedad no es fuente de ganancia.', ok: true, por_que: 'Pablo advierte contra los que toman la piedad como fuente de ganancia (1 Ti 6:5-6) y enseña a dar «no con tristeza, ni por necesidad» (2 Co 9:7).' },
            { t: 'Los cristianos no deben dar ofrendas.', ok: false, por_que: 'La generosidad es una enseñanza clara de la Escritura (2 Co 9:6-8); el problema es dar para obtener ganancia.' }
          ],
          explicacion: 'La ofrenda es una expresión de gratitud y de confianza en Dios, no una inversión. Dios promete suplir lo que necesitamos (Fil 4:19), no hacernos ricos.'
        } }
      ],
      pensar: 'Los creyentes de Berea examinaban cada día las Escrituras para ver si lo que oían era así (Hch 17:11). ¿Qué enseñanza que has escuchado últimamente necesitas examinar con la Biblia?'
    },
    {
      id: 'esperanza', n: 'La iglesia que espera a su Señor', ref: 'Mateo 16:18; Mateo 24:14; 1 Tesalonicenses 4:16-17; Apocalipsis 22:20', fecha: 2026,
      visual: [
        img('congregacion.webp', 'Una congregación numerosa y diversa adora de pie en un templo sencillo y luminoso: personas de rasgos africanos, latinoamericanos, asiáticos y europeos, jóvenes y ancianos, algunos con las manos levantadas y otros con los ojos cerrados, con Biblias en las manos', 'Una iglesia de todas las naciones (recreación; personas anónimas).'),
        cita('Apocalipsis 7:9-10', 'Después de esto miré, y he aquí una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas, que estaban delante del trono y en la presencia del Cordero, vestidos de ropas blancas, y con palmas en las manos; y clamaban a gran voz, diciendo: La salvación pertenece a nuestro Dios que está sentado en el trono, y al Cordero.')
      ],
      texto: [
        'Este recurso ha recorrido quinientos años de historia: desde un monje en Wittenberg hasta una iglesia de más de dos mil seiscientos millones de personas en todos los continentes. Al llegar al final, conviene mirar atrás y preguntarse qué enseña esta historia.',
        { h: 'Lo que enseña la historia' },
        'Enseña, primero, que la Palabra de Dios es poderosa. Cada renovación de la iglesia comenzó con la Escritura: Lutero en Romanos, Wesley escuchando el prefacio a Romanos, Thomson enseñando a leer con la Biblia, los colportores en los Andes, los creyentes chinos copiándola a mano. Enseña, también, que el Espíritu Santo sopla donde quiere: en Herrnhut, en Northampton, en Azusa, en Valparaíso, y muchas veces entre los más pobres y despreciados. Enseña que la iglesia está formada por personas falibles, capaces de grandes actos de fe y de graves pecados, y que por eso necesita examinarse siempre a la luz de la Escritura. Y enseña que la persecución, la frialdad y el error nunca han podido destruirla, porque su Señor prometió: «edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella» (Mt 16:18).',
        { h: 'Una historia que no ha terminado' },
        'La historia de la iglesia todavía se está escribiendo, y cada creyente tiene una parte en ella. Jesús anunció que «será predicado este evangelio del reino en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin» (Mt 24:14). La iglesia de hoy vive entre esa tarea y esa esperanza.',
        'La esperanza es clara: el Señor mismo descenderá del cielo, los muertos en Cristo resucitarán primero, y los que vivan serán arrebatados para recibirlo en el aire, «y así estaremos siempre con el Señor» (1 Ts 4:17). Entonces se verá la multitud que Juan contempló: personas de todas las naciones, tribus, pueblos y lenguas, entre ellas los reformadores y los mártires, los misioneros y los colportores, los creyentes anónimos de las iglesias en casa y de las capillas de los cerros, clamando a gran voz: «La salvación pertenece a nuestro Dios que está sentado en el trono, y al Cordero» (Ap 7:10).',
        'Mientras tanto, la iglesia ora como la iglesia del primer siglo: «Amén; sí, ven, Señor Jesús» (Ap 22:20). Y trabaja, sabiendo que su trabajo en el Señor no es en vano (1 Co 15:58).',
        ir('Estudiar Los últimos tiempos', '../../escatologia/')
      ],
      pensar: 'Si la historia de la iglesia es una carrera de relevos, has recibido el testimonio de muchas generaciones de creyentes. ¿A quién se lo estás pasando tú?'
    }
  ];

  // ================== Ensamblado ==================
  window.RUTA_DATA = {
    titulo: 'Historia de la Iglesia II',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      minZoom: 1.5,
      maxZoom: 9,
      zoomEncuadre: 8,
      maxBounds: [[-72, -200], [84, 200]],
      rotulos: window.HISTORIA_ROTULOS
    },
    rutas: [
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama', info: 'Las etapas, el mapa del cristianismo, las familias evangélicas y cómo leer la historia', estaciones: panorama,
        linea: { desde: 1500, hasta: 2030, hitos: [
          { a: 1517, t: 'Reforma' }, { a: 1648, t: 'Westfalia' }, { a: 1738, t: 'Wesley' }, { a: 1792, t: 'Carey' },
          { a: 1906, t: 'Azusa' }, { a: 1974, t: 'Lausana' }
        ] } },
      { id: 'reforma', grupo: 'De la Reforma a hoy', n: 'II. La Reforma', info: 'Siglo XVI: Lutero, Zuinglio, Calvino, los anabautistas, Inglaterra y España', estaciones: reforma,
        linea: { desde: 1450, hasta: 1610, hitos: [
          { a: 1455, t: 'Imprenta' }, { a: 1517, t: '95 tesis' }, { a: 1521, t: 'Worms' },
          { a: 1536, t: 'Institución' }, { a: 1559, t: 'Autos de fe' }, { a: 1569, t: 'Biblia del Oso' }
        ] } },
      { id: 'respuestas', grupo: 'De la Reforma a hoy', n: 'III. Respuestas y guerras', info: 'Trento, los jesuitas, las guerras de religión, Westfalia y las confesiones', estaciones: respuestas,
        linea: { desde: 1530, hasta: 1700, hitos: [
          { a: 1540, t: 'Jesuitas' }, { a: [1545, 1563], t: 'Trento' }, { a: 1572, t: 'San Bartolomé' },
          { a: 1619, t: 'Dort' }, { a: [1618, 1648], t: 'Treinta Años' }, { a: 1647, t: 'Westminster' }
        ] } },
      { id: 'avivamientos', grupo: 'De la Reforma a hoy', n: 'IV. Puritanos, pietistas y avivamientos', info: 'Siglos XVII y XVIII: puritanos, bautistas, moravos, Wesley y el Gran Despertar', estaciones: avivamientos,
        linea: { desde: 1600, hasta: 1800, hitos: [
          { a: 1612, t: 'Bautistas' }, { a: 1620, t: 'Mayflower' }, { a: 1675, t: 'Pietismo' }, { a: 1727, t: 'Herrnhut' },
          { a: 1738, t: 'Aldersgate' }, { a: 1740, t: 'Gran Despertar' }, { a: 1789, t: 'Revolución' }
        ] } },
      { id: 'misiones', grupo: 'De la Reforma a hoy', n: 'V. El siglo de las misiones', info: 'De Carey a Edimburgo 1910: misiones, sociedades bíblicas, abolición y santidad', estaciones: misiones,
        linea: { desde: 1785, hasta: 1915, hitos: [
          { a: 1792, t: 'Carey' }, { a: 1804, t: 'Sociedad Bíblica' }, { a: 1833, t: 'Abolición' }, { a: 1865, t: 'Misión al Interior de China' },
          { a: 1875, t: 'Keswick' }, { a: 1910, t: 'Edimburgo' }
        ] } },
      { id: 'siglo20', grupo: 'De la Reforma a hoy', n: 'VI. El siglo XX', info: 'Azusa, los fundamentos, las guerras, el comunismo, Lausana y el sur global', estaciones: siglo20,
        linea: { desde: 1900, hasta: 2010, hitos: [
          { a: 1906, t: 'Azusa' }, { a: 1934, t: 'Barmen' }, { a: 1948, t: 'Consejo Mundial' },
          { a: 1974, t: 'Lausana' }, { a: 1989, t: 'Muro de Berlín' }
        ] } },
      { id: 'america', grupo: 'América Latina', n: 'VII. El evangelio en América Latina', info: 'De la colonia a hoy: Thomson, los colportores, Valparaíso y el crecimiento evangélico', estaciones: america,
        linea: { desde: 1490, hasta: 2030, hitos: [
          { a: 1511, t: 'Montesinos' }, { a: 1557, t: 'Hugonotes' }, { a: 1818, t: 'Thomson' },
          { a: 1909, t: 'Valparaíso' }, { a: 1969, t: 'CLADE' }
        ] } },
      { id: 'hoy', grupo: 'Hoy', n: 'VIII. La iglesia en el siglo XXI', info: 'Cifras de hoy, la iglesia perseguida, la secularización, la Biblia para todos y la esperanza', estaciones: hoy }
    ]
  };
})();
