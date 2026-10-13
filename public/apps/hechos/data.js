/* ==========================================================
   Recursos Bíblicos — Hechos de los Apóstoles · contenido de las rutas
   Motor: ../assets/js/ruta-estudio.js (formato descrito en su encabezado).
   Geografía: ../assets/js/imperios-geo.js. Citas textuales: Reina-Valera 1960.
   Las referencias del texto se vuelven burbujas con citas.js (texto en /biblia/).
   Estudio de libro: rutas I a IV fijas (introducción, panorama, exégesis,
   teología) más mapas y temas. En temas doctrinales prevalece la línea
   pentecostal clásica (Asambleas de Dios), con escatología dispensacionalista,
   sin mencionarla. Las posturas distintas se presentan con el bloque { posturas }.
   ========================================================== */
(() => {
  const MEDITERRANEO = [[28, -2], [46, 40]];
  const OTRA = '../';

  /* ---------------- Ruta I · Introducción y trasfondo ---------------- */
  const introduccion = [
    {
      id: 'portada', n: 'Hechos de los Apóstoles', ref: 'Hechos 1:1-11', fecha: [30, 62],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperios-historia/img/integrador-pentecostes.webp', alt: 'El día de Pentecostés en Jerusalén: los discípulos llenos del Espíritu Santo hablan a una multitud de judíos de muchas naciones', pie: 'Pentecostés, el comienzo de la historia que narra Hechos.', origen: 'ia' }
      ],
      texto: [
        'Hechos de los Apóstoles es el puente del Nuevo Testamento. Los Evangelios terminan con Jesús resucitado que asciende al cielo; las cartas están dirigidas a iglesias que ya existen en Roma, Corinto, Éfeso o Filipos. Entre ambos queda una pregunta: ¿cómo llegó un grupo de discípulos reunidos en Jerusalén a formar iglesias por todo el imperio romano en apenas treinta años? Hechos es la respuesta.',
        'El libro abre con la última promesa de Jesús antes de subir al cielo: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Todo lo que sigue es el cumplimiento de esa promesa. En el capítulo 2, el Espíritu Santo desciende el día de Pentecostés; desde ese momento, una iglesia llena del Espíritu predica, sana, ora y avanza, a pesar de las cárceles, los azotes y las persecuciones.',
        'Por eso Hechos no es solo un libro de historia antigua. Es el relato de cómo comenzó la iglesia de la que formamos parte, y el retrato de cómo Dios quiere que viva: llena del Espíritu, perseverante en la oración, unida y dispuesta a testificar.',
        { h: 'Cómo recorrer este estudio' },
        'Esta primera ruta prepara el terreno. Antes de leer el libro capítulo por capítulo conviene saber quién lo escribió, cuándo y para qué; en qué mundo político y religioso ocurrieron los hechos que narra, y con qué principios se interpreta un libro de historia que también enseña doctrina.',
        'Las siguientes rutas presentan el libro completo en panorama, lo comentan capítulo por capítulo, ordenan su enseñanza sobre el Espíritu Santo, Cristo, la iglesia y los últimos tiempos, y lo recorren en mapas. Usa el botón de rutas, en la esquina, para moverte entre ellas. Toda cita bíblica del texto se puede tocar para leerla.'
      ],
      pensar: 'Jesús mandó a sus discípulos esperar en Jerusalén hasta ser «investidos de poder desde lo alto» (Lc 24:49) antes de salir a testificar. ¿Por qué crees que no los envió de inmediato, si ya habían visto al Señor resucitado?'
    },
    {
      id: 'segundo-tomo', n: 'Un segundo tomo', ref: 'Hechos 1:1-3; Lucas 1:1-4', fecha: 62,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En el primer tratado, oh Teófilo, hablé acerca de todas las cosas que Jesús comenzó a hacer y a enseñar, hasta el día en que fue recibido arriba, después de haber dado mandamientos por el Espíritu Santo a los apóstoles que había escogido.', ref: 'Hechos 1:1-2' },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-lucas-escribe.webp', alt: 'Lucas, un hombre de mediana edad con túnica sencilla, escribe sobre un rollo de papiro a la luz de una lámpara de aceite, con otros rollos y tablillas a su alrededor', pie: 'Lucas, el autor de los dos tomos.', origen: 'ia' }
      ],
      texto: [
        'Hechos comienza mirando hacia atrás: «En el primer tratado, oh Teófilo, hablé acerca de todas las cosas que Jesús comenzó a hacer y a enseñar» (Hch 1:1). El «primer tratado» (Hch 1:1) es el Evangelio según Lucas, dirigido al mismo Teófilo (Lc 1:3). El autor no está empezando una obra nueva, sino continuando la que ya había escrito.',
        'Fíjate en una palabra: Jesús «comenzó» a hacer y a enseñar. El Evangelio contó el comienzo; Hechos cuenta la continuación. El protagonista sigue siendo el mismo Señor, que ahora, desde el cielo, actúa por medio del Espíritu Santo y de su iglesia. Cuando Pedro sana al cojo de la puerta del templo, no dice que lo sanó su propio poder, sino el nombre de Jesús (Hch 3:12, 16). Cuando Saulo persigue a los creyentes, Jesús le pregunta: «¿por qué me persigues?» (Hch 9:4). Lo que se hace a la iglesia se le hace a Cristo.',
        'El Evangelio de Lucas también tiene un prólogo que explica su método. El autor cuenta que muchos ya habían escrito sobre Jesús, y que él decidió escribir «después de haber investigado con diligencia todas las cosas desde su origen» (Lc 1:3), basándose en «los que desde el principio lo vieron con sus ojos» (Lc 1:2). Su propósito era que Teófilo conociera «bien la verdad de las cosas» en las que había sido instruido (Lc 1:4).',
        'Ese prólogo vale para los dos tomos. Hechos fue escrito con el mismo cuidado de historiador: con nombres de autoridades, ciudades, rutas de navegación y detalles que se pueden comprobar. Pero no es una crónica neutral. Lucas selecciona y ordena los hechos para mostrar cómo el evangelio avanzó, bajo la dirección del Espíritu, desde Jerusalén hasta Roma.',
        'Por eso los estudiosos hablan de «Lucas-Hechos»: una sola obra en dos volúmenes, que juntos ocupan más de una cuarta parte del Nuevo Testamento. Leer Hechos sin el Evangelio de Lucas es como empezar una historia por el segundo capítulo.'
      ],
      pensar: 'Lucas dice que su primer libro trató de lo que Jesús «comenzó» a hacer y a enseñar (Hch 1:1). Si Hechos es la continuación, ¿qué dice eso de lo que Jesús sigue haciendo hoy por medio de su iglesia?'
    },
    {
      id: 'dos-tomos', n: 'Lucas-Hechos, una obra en dos tomos', ref: 'Lucas 3:21-22; 4:18; 24:49; Hechos 1:8; 2:4', fecha: 30,
      visual: [
        { tipo: 'tabla', titulo: 'Paralelos', tabla: {
          titulo: 'El Evangelio y Hechos, lado a lado',
          cab: ['', 'Evangelio de Lucas', 'Hechos'],
          filas: [
            ['Destinatario', 'Teófilo (Lc 1:3)', 'Teófilo (Hch 1:1)'],
            ['Recorrido', 'De Galilea a Jerusalén', 'De Jerusalén a Roma'],
            ['La ascensión', 'Al final (Lc 24:50-51)', 'Al comienzo (Hch 1:9-11)'],
            ['El Espíritu desciende', 'Sobre Jesús, mientras ora (Lc 3:21-22)', 'Sobre los discípulos, que perseveraban en oración (Hch 1:14; 2:1-4)'],
            ['Primer anuncio', 'Jesús en Nazaret: «Espíritu del Señor está sobre mí» (Lc 4:18)', 'Pedro en Pentecostés: «esto es lo dicho por el profeta Joel» (Hch 2:16)'],
            ['Señales', 'Jesús sana, libera y resucita muertos', 'Pedro y Pablo sanan, liberan y resucitan muertos'],
            ['Final', 'Los discípulos esperan la promesa (Lc 24:49)', 'Pablo predica «sin impedimento» (Hch 28:31)']
          ],
          nota: 'Los paralelos muestran el diseño de la obra: la iglesia continúa el ministerio de Jesús con el mismo Espíritu.'
        } }
      ],
      texto: [
        'Cuando se leen los dos tomos juntos, aparece un diseño cuidadoso. El Evangelio avanza desde Galilea hacia Jerusalén, donde Jesús muere, resucita y asciende. Hechos parte de Jerusalén y avanza hacia afuera, hasta llegar a Roma, la capital del mundo conocido. Jerusalén es el centro de la obra: hacia ella camina Jesús, y desde ella sale el evangelio.',
        'El paralelo más importante tiene que ver con el Espíritu Santo. Jesús no comenzó su ministerio público hasta que el Espíritu descendió sobre él mientras oraba, después de su bautismo (Lc 3:21-22). Luego volvió «en el poder del Espíritu» a Galilea (Lc 4:14) y, en la sinagoga de Nazaret, leyó: «Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres» (Lc 4:18).',
        'Lo mismo ocurre con la iglesia. Los discípulos ya habían creído en Jesús, lo habían visto resucitado y habían recibido sus enseñanzas. Sin embargo, el Señor les mandó: «quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49). Mientras perseveraban unánimes en oración, el Espíritu vino sobre ellos, «y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). Solo entonces comenzó su testimonio público.',
        'Lucas quiere que veamos la correspondencia: así como Jesús fue ungido por el Espíritu para su ministerio, la iglesia es ungida por el mismo Espíritu para el suyo. La experiencia del Espíritu en Pentecostés no es la conversión de los discípulos, que ya creían, sino una investidura de poder para servir y testificar.',
        'Este diseño ayuda a entender todo el libro. Las sanidades, las liberaciones y la predicación valiente de los apóstoles no son hazañas personales. Son el mismo ministerio de Jesús, que sigue adelante por el poder del mismo Espíritu.'
      ],
      pensar: 'Si Jesús mismo esperó la unción del Espíritu antes de comenzar su ministerio, y mandó a sus discípulos hacer lo mismo, ¿qué lugar debería tener la búsqueda del poder del Espíritu en la vida de un creyente que quiere servir a Dios?'
    },
    {
      id: 'autor-interna', n: 'El autor: lo que dice el libro', ref: 'Hechos 16:10-17; 20:5–21:18; 27:1–28:16; Colosenses 4:10-14', fecha: [50, 62],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-lucas-barco.webp', alt: 'Lucas y el apóstol Pablo de pie en la cubierta de un barco mercante del siglo I, con la costa de Macedonia a la vista y marineros recogiendo las velas', pie: '«En seguida procuramos partir para Macedonia» (Hch 16:10).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Pasajes «nosotros»', tabla: {
          titulo: 'Los pasajes en primera persona plural',
          cab: ['Pasaje', 'Recorrido', 'Qué muestra'],
          filas: [
            ['Hch 16:10-17', 'De Troas a Filipos', 'El autor se une a Pablo en el segundo viaje'],
            ['Hch 20:5–21:18', 'De Filipos a Jerusalén', 'Vuelve a acompañarlo al final del tercer viaje'],
            ['Hch 27:1–28:16', 'De Cesarea a Roma', 'Comparte el naufragio y llega con él a Roma']
          ],
          nota: 'Entre los pasajes, el relato vuelve a la tercera persona: el autor solo dice «nosotros» cuando estuvo presente.'
        } }
      ],
      texto: [
        'Ni el Evangelio de Lucas ni Hechos dicen en su texto quién los escribió. El título «Evangelio según Lucas» no forma parte de lo que escribió el autor: es un encabezado que agregaron las copias antiguas, y el manuscrito más antiguo que lo trae, un papiro conocido como P75, es de fines del siglo II o comienzos del III. Ese título recoge lo que la iglesia ya sabía, como se verá en la estación siguiente, pero no es una firma del autor. Dentro del texto, sin embargo, el propio libro deja pistas. La más clara son los llamados pasajes «nosotros». En la mayor parte del libro, el narrador habla de Pablo y sus compañeros en tercera persona: «ellos». Pero de pronto, en Troas, el relato cambia: «Cuando vio la visión, en seguida procuramos partir para Macedonia, dando por cierto que Dios nos llamaba» (Hch 16:10).',
        'El narrador se incluye en el grupo. Ese «nosotros» aparece en tres bloques: de Troas a Filipos (Hch 16:10-17), de Filipos a Jerusalén (Hch 20:5–21:18) y en el viaje a Roma, con el naufragio incluido (Hch 27:1–28:16). El autor fue, por lo tanto, un compañero de Pablo que estuvo presente en esos viajes y llegó con él a Roma.',
        { h: '¿Cuál de los compañeros de Pablo?' },
        'Las cartas que Pablo escribió desde su prisión en Roma nombran a quienes estaban con él. En Colosenses saluda «Lucas el médico amado» (Col 4:14), y en Filemón aparecen «Marcos, Aristarco, Demas y Lucas, mis colaboradores» (Flm 24). Años después, en su última carta, Pablo escribe: «Sólo Lucas está conmigo» (2 Ti 4:11).',
        'Si se descartan los compañeros que Hechos nombra en tercera persona, como Silas, Timoteo o Aristarco, y por eso no pueden ser el narrador, Lucas es el candidato que mejor encaja: estuvo con Pablo en Roma, fue un colaborador fiel hasta el final y su nombre nunca aparece en Hechos. Un autor no suele nombrarse a sí mismo en su propio relato.',
        'Hay además una coincidencia de estilo. Hechos y el Evangelio de Lucas comparten vocabulario, giros y un griego cuidado, de persona educada. Algunos han señalado su interés por las enfermedades y las curaciones, aunque ese argumento por sí solo no prueba que el autor fuera médico. Lo decisivo es el conjunto: el «nosotros», las cartas de Pablo y, como veremos, el testimonio unánime de la iglesia antigua.'
      ],
      pensar: 'Lucas acompañó a Pablo en naufragios y prisiones, y se quedó con él cuando otros lo abandonaron (2 Ti 4:10-11). Sin embargo, nunca escribió su propio nombre en Hechos. ¿Qué nos enseña su ejemplo sobre servir a Dios sin buscar reconocimiento?'
    },
    {
      id: 'autor-externa', n: 'Lucas, el médico amado', ref: 'Colosenses 4:10-14; Lucas 1:1-4', fecha: [50, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Testimonio antiguo', tabla: {
          titulo: 'Lo que dice la iglesia antigua sobre el autor',
          cab: ['Fuente', 'Fecha aproximada', 'Testimonio'],
          filas: [
            ['Ireneo de Lyon, Contra las herejías', 'c. 180 d.C.', 'Lucas, compañero de Pablo, escribió el Evangelio y relató los hechos de los apóstoles'],
            ['Canon Muratoriano', 'Fines del siglo II', 'Los Hechos de todos los apóstoles fueron escritos por Lucas en un libro dirigido a Teófilo'],
            ['Prólogo antiguo al Evangelio de Lucas', 'Siglos II–IV', 'Lucas, médico de Antioquía de Siria, compañero de Pablo'],
            ['Eusebio de Cesarea, Historia eclesiástica', 'c. 325 d.C.', 'Lucas, de Antioquía, médico, autor del Evangelio y de Hechos']
          ],
          nota: 'Ninguna fuente antigua atribuye Hechos a otro autor. El origen antioqueño de Lucas es tradición, no un dato del Nuevo Testamento.'
        } }
      ],
      texto: [
        'Lo que sugiere el propio libro lo confirma la historia de la iglesia. Desde fines del siglo II, los escritores cristianos atribuyen el Evangelio y Hechos a Lucas, sin que ninguna fuente antigua proponga otro nombre. Ireneo, obispo de Lyon hacia el año 180, presenta a Lucas como seguidor y compañero de Pablo, y autor de ambos libros. El llamado Canon Muratoriano, una de las listas más antiguas de libros del Nuevo Testamento, dice que Lucas escribió los Hechos de los apóstoles para Teófilo.',
        'Es un testimonio significativo, porque Lucas no era un apóstol ni una figura principal. Si alguien hubiera querido dar autoridad a un libro inventándole un autor, habría escogido a Pedro o a Pablo, no a un colaborador poco conocido.',
        { h: '¿Quién era Lucas?' },
        'El Nuevo Testamento lo menciona solo tres veces, siempre al final de cartas de Pablo. Colosenses dice que era médico (Col 4:14), y agrega un detalle importante. Pablo enumera primero a Aristarco, Marcos y Jesús llamado Justo, «que son los únicos de la circuncisión que me ayudan» (Col 4:10-11), y después nombra a Epafras, Lucas y Demas. La mayoría entiende que Lucas no estaba entre «los de la circuncisión», y que por lo tanto era gentil. Sería el único autor no judío de la Biblia.',
        'Eso explica algunos rasgos de su obra. Lucas escribe un griego culto, conoce bien el mundo grecorromano, sus títulos y sus costumbres, y muestra un interés especial por la llegada del evangelio a los gentiles, desde el centurión Cornelio hasta los paganos de Listra y los filósofos de Atenas.',
        'La tradición posterior lo hace originario de Antioquía de Siria, la ciudad donde los discípulos fueron llamados cristianos por primera vez (Hch 11:26). Es posible, pero el Nuevo Testamento no lo dice. Lo seguro es lo que muestran sus libros: un hombre que investigó con diligencia, que caminó junto a Pablo y que puso por escrito, con cuidado de historiador y fe de creyente, cómo nació la iglesia.'
      ],
      pensar: 'Dios usó a un médico gentil, que no fue apóstol ni testigo del ministerio de Jesús, para escribir más de una cuarta parte del Nuevo Testamento. ¿Qué te dice esto sobre los dones y la preparación que Dios puede usar en su obra?'
    },
    {
      id: 'teofilo', n: '¿Quién era Teófilo?', ref: 'Lucas 1:3-4; Hechos 1:1; 23:26; 24:3; 26:25', fecha: 60,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-teofilo.webp', alt: 'Un hombre romano de alto rango, con toga de borde ribeteado, lee un rollo en el atrio de su casa con columnas, mientras un esclavo espera a su lado', pie: 'Teófilo, el destinatario de la obra de Lucas.', origen: 'ia' }
      ],
      texto: [
        'Los dos tomos de Lucas están dedicados a un mismo hombre: «oh excelentísimo Teófilo» (Lc 1:3), y simplemente «oh Teófilo» al comienzo de Hechos (Hch 1:1). Su nombre es griego y significa «amigo de Dios» o «amado por Dios». Más allá de eso, la Biblia no dice nada de él. ¿Quién era?',
        { posturas: {
          titulo: 'Dos maneras de entender a Teófilo',
          a: { n: 'Una persona real', t: 'Teófilo fue un hombre concreto, probablemente de alto rango. El título «excelentísimo» es el mismo que Lucas da a los gobernadores romanos Félix y Festo (Hch 23:26; 24:3; 26:25). Era común en la antigüedad dedicar una obra a un personaje importante, que a veces costeaba su copia y difusión. Lucas dice que Teófilo ya había sido «instruido» en la fe (Lc 1:4).' },
          b: { n: 'Un nombre simbólico', t: 'Como el nombre significa «amigo de Dios», algunos han propuesto que Lucas no se dirige a una persona, sino a todo creyente que ama a Dios, o a todo lector interesado en conocer la verdad sobre Jesús.' },
          c: 'La primera postura es la más aceptada y la que se sigue aquí. Un título como «excelentísimo» no se le daría a un lector simbólico. Además, Teófilo era un nombre común en la época. Eso no impide que la obra sirva a todo «amigo de Dios»: Lucas escribió para una persona concreta, y el Espíritu Santo preservó su obra para toda la iglesia.'
        } },
        'Si Teófilo era un funcionario o un hombre de posición, se entienden mejor algunos énfasis del libro. Lucas muestra que las autoridades romanas, una y otra vez, no encontraron delito en Pablo ni en los cristianos. Para un lector romano educado, esa era una información importante: el cristianismo no era una secta peligrosa ni una rebelión contra el César.',
        'El propósito declarado de Lucas sigue siendo el mismo para cualquier lector: «para que conozcas bien la verdad de las cosas en las cuales has sido instruido» (Lc 1:4). La fe cristiana no descansa en leyendas, sino en hechos que ocurrieron, que tuvieron testigos y que pueden ser investigados.'
      ],
      pensar: 'Teófilo ya había sido instruido en la fe, y aun así Lucas escribió dos libros para que conociera «bien la verdad» (Lc 1:4). ¿Por qué es importante que un creyente no se conforme con lo que ya sabe, y siga profundizando en la Palabra?'
    },
    {
      id: 'fecha', n: 'Cuándo se escribió', ref: 'Hechos 28:30-31', fecha: 62,
      visual: [
        { tipo: 'tabla', titulo: 'Posturas', tabla: {
          titulo: 'Fecha de escritura de Hechos',
          cab: ['Postura', 'Fecha', 'Argumento principal'],
          filas: [
            ['Temprana', 'c. 61–63 d.C.', 'El relato termina con Pablo preso en Roma, sin contar el resultado del juicio ni su muerte'],
            ['Intermedia', 'c. 70–90 d.C.', 'Lucas habría usado el Evangelio de Marcos, y su descripción del sitio de Jerusalén (Lc 21:20) supondría que ya ocurrió'],
            ['Tardía', 'Siglo II', 'El autor dependería de escritos posteriores; hoy la sostienen pocos']
          ],
          nota: 'Este estudio sigue la fecha temprana. Las fechas del siglo I son aproximadas.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-calle.webp', alt: 'Una calle de Roma en el siglo I con edificios de varios pisos, tiendas, gente de distintas clases y un acueducto al fondo', pie: 'Roma, el lugar probable donde se escribió Hechos.', origen: 'ia' }
      ],
      texto: [
        'Hechos termina de una manera inesperada. Después de veintiocho capítulos de viajes, juicios y un naufragio, el lector espera saber qué pasó con Pablo ante el César. Pero Lucas solo dice: «Pablo permaneció dos años enteros en una casa alquilada, y recibía a todos los que a él venían, predicando el reino de Dios y enseñando acerca del Señor Jesucristo, abiertamente y sin impedimento» (Hch 28:30-31). Y ahí termina.',
        'La explicación más sencilla es que Lucas terminó de escribir en ese momento, cuando los dos años todavía estaban transcurriendo o acababan de cumplirse. Pablo llegó a Roma hacia el año 60; los dos años llevan a cerca del 62.',
        { h: 'Lo que Hechos no menciona' },
        'Esta fecha temprana se apoya en varios silencios difíciles de explicar si el libro se hubiera escrito más tarde. Hechos no menciona la muerte de Jacobo, el hermano del Señor y líder de la iglesia de Jerusalén, que según el historiador Josefo ocurrió hacia el año 62. No menciona el gran incendio de Roma ni la persecución de Nerón contra los cristianos, en el año 64. No menciona la muerte de Pedro ni la de Pablo, que según la tradición murieron en Roma bajo Nerón. Y, sobre todo, no menciona la destrucción de Jerusalén y del templo en el año 70, un acontecimiento que habría reforzado muchos de sus temas.',
        'Además, el tono hacia Roma es todavía esperanzado: las autoridades romanas protegen a Pablo y lo declaran inocente. Después de la persecución de Nerón, ese tono habría sido difícil de mantener.',
        { posturas: {
          titulo: '¿Temprana o posterior?',
          a: { n: 'Fecha temprana (c. 62)', t: 'Hechos se escribió en Roma mientras Pablo esperaba su juicio. Por eso termina allí y no menciona hechos posteriores.' },
          b: { n: 'Fecha posterior (70–90)', t: 'Lucas escribió después del año 70 y terminó en Roma por motivos literarios: su meta era mostrar al evangelio llegando a la capital, no contar la vida de Pablo.' },
          c: 'Ambas posturas aceptan a Lucas como autor y el carácter histórico del libro. Este estudio sigue la fecha temprana, que explica mejor los silencios del libro y su final abierto. En ambos casos, la autoridad del libro no depende de la fecha, sino de que es Palabra inspirada por Dios.'
        } }
      ],
      pensar: 'Pablo estaba preso, esperando un juicio que podía costarle la vida, y aun así pasó esos dos años predicando «abiertamente y sin impedimento» (Hch 28:31). ¿Qué te enseña su actitud sobre cómo vivir los tiempos de espera?'
    },
    {
      id: 'trasfondo-politico', n: 'El mundo romano de Hechos', ref: 'Hechos 11:28; 12:1-23; 18:2, 12; 23–26; 25:11', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Autoridades', tabla: {
          titulo: 'Gobernantes que aparecen en Hechos',
          cab: ['Gobernante', 'Cargo', 'En Hechos'],
          filas: [
            ['Claudio (41–54)', 'Emperador', 'El hambre anunciada por Agabo (Hch 11:28) y la expulsión de los judíos de Roma (Hch 18:2)'],
            ['Nerón (54–68)', 'Emperador', 'El «César» a quien Pablo apela (Hch 25:11)'],
            ['Herodes Agripa I († 44)', 'Rey de Judea', 'Mata a Jacobo, encarcela a Pedro y muere herido por un ángel (Hch 12)'],
            ['Sergio Paulo', 'Procónsul de Chipre', 'Cree al ver la ceguera del mago Elimas (Hch 13:7-12)'],
            ['Galión', 'Procónsul de Acaya', 'Se niega a juzgar a Pablo en Corinto (Hch 18:12-17)'],
            ['Félix y Festo', 'Gobernadores de Judea', 'Retienen a Pablo preso en Cesarea (Hch 23–25)'],
            ['Agripa II', 'Rey vasallo', 'Escucha la defensa de Pablo (Hch 25:13–26:32)']
          ],
          nota: 'Años de reinado y de gobierno aproximados.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-calzada.webp', alt: 'Una calzada romana pavimentada con grandes piedras que atraviesa el campo, con un mojón y viajeros a pie', pie: 'Una calzada romana, el camino de los misioneros.', origen: 'ia' }
      ],
      texto: [
        'Todo lo que narra Hechos ocurre dentro del imperio romano, que en el siglo I dominaba todo el Mediterráneo. Durante los treinta años que cubre el libro gobernaron cuatro emperadores: Tiberio, bajo quien fue crucificado Jesús; Calígula; Claudio, y Nerón. Dos de ellos aparecen en el relato. En tiempos de Claudio ocurrió el hambre anunciada por el profeta Agabo (Hch 11:28), y fue Claudio quien expulsó a los judíos de Roma, por lo que Aquila y Priscila llegaron a Corinto (Hch 18:2). Nerón es el César a quien Pablo apeló (Hch 25:11).',
        'Lucas conoce bien la organización del imperio. Las provincias pacíficas las gobernaba un procónsul nombrado por el senado, como Sergio Paulo en Chipre o Galión en Acaya. Las provincias difíciles, como Judea, estaban en manos de gobernadores nombrados por el emperador, como Félix y Festo. Junto a ellos había reyes vasallos de la familia de Herodes: Herodes Agripa I, que persiguió a la iglesia (Hch 12), y su hijo Agripa II, ante quien Pablo dio su defensa (Hch 26).',
        { h: 'Un mundo preparado' },
        'El imperio también ofrecía condiciones que facilitaron la expansión del evangelio. La paz romana permitía viajar con relativa seguridad; las calzadas unían las ciudades, y las rutas marítimas conectaban los puertos del Mediterráneo. El griego común, el koiné, se hablaba en todo el oriente del imperio, de modo que Pablo podía predicar en la misma lengua en Antioquía, Éfeso, Corinto y Roma. Y la ciudadanía romana de Pablo lo protegió más de una vez (Hch 16:37; 22:25-28).',
        'Pablo escribió que Dios envió a su Hijo «cuando vino el cumplimiento del tiempo» (Gá 4:4). Lo mismo puede decirse de la iglesia: nació en el momento preciso, en un mundo unido por caminos, leyes y una lengua común, donde el mensaje podía viajar hasta lo último de la tierra.',
        'Para conocer este mundo con más detalle, el recurso El imperio romano recorre su historia, su sociedad y su lugar en la Biblia.'
      ],
      pensar: 'Dios usó las calzadas, la lengua y las leyes de un imperio pagano para extender el evangelio. ¿Qué herramientas de nuestro tiempo podría estar poniendo Dios en manos de la iglesia para llevar el mensaje hasta lo último de la tierra?'
    },
    {
      id: 'galion', n: 'Galión, un ancla en la historia', ref: 'Hechos 18:1-17', fecha: 51,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-galion.webp', alt: 'El apóstol Pablo de pie ante el procónsul Galión, sentado en una tribuna de piedra elevada en el foro de Corinto, mientras un grupo de acusadores gesticula', pie: 'Pablo ante el tribunal de Galión en Corinto (Hch 18:12).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'La inscripción', tabla: {
          titulo: 'La inscripción de Delfos',
          cab: ['Dato', 'Detalle'],
          filas: [
            ['Qué es', 'Fragmentos de una carta del emperador Claudio grabada en piedra en Delfos, Grecia'],
            ['Qué dice', 'Menciona a «Junio Galión, mi amigo y procónsul»'],
            ['Cuándo', 'Fechada por los títulos de Claudio en el año 52 d.C.'],
            ['Qué permite', 'Ubicar el proconsulado de Galión hacia 51–52 d.C., y con él la estadía de Pablo en Corinto'],
            ['Dónde está', 'Museo de Delfos']
          ],
          nota: 'La imagen de esta estación es una recreación de la escena de Hch 18, no de la inscripción.'
        } }
      ],
      texto: [
        'En el segundo viaje misionero, Pablo llegó a Corinto y se quedó un año y seis meses enseñando la palabra de Dios (Hch 18:11). Entonces, «siendo Galión procónsul de Acaya, los judíos se levantaron de común acuerdo contra Pablo, y le llevaron al tribunal» (Hch 18:12). Galión se negó a juzgarlo: si se tratara de un crimen, los escucharía, «pero si son cuestiones de palabras, y de nombres, y de vuestra ley, vedlo vosotros» (Hch 18:15).',
        'Este pequeño episodio tiene un gran valor para la historia. Galión fue un personaje conocido en Roma: era hermano mayor de Séneca, el filósofo y consejero de Nerón. Y a comienzos del siglo XX se publicaron unos fragmentos de piedra hallados en Delfos, en Grecia, con una carta del emperador Claudio que menciona a «Junio Galión, mi amigo y procónsul».',
        'La carta está fechada por los títulos del emperador en el año 52. Como los procónsules gobernaban normalmente un año, el proconsulado de Galión se ubica hacia los años 51 y 52. Es una de las pocas fechas seguras de toda la vida de Pablo, y a partir de ella los estudiosos calculan hacia adelante y hacia atrás el resto de la cronología de Hechos.',
        { h: 'Un libro que se puede comprobar' },
        'Lucas no inventó un gobernador para dar color a su historia. Nombró a una autoridad real, en el cargo correcto, en la provincia correcta y en el tiempo correcto. Como veremos, no es el único caso: los hallazgos arqueológicos han confirmado una y otra vez los nombres, los títulos y los lugares que menciona Hechos.',
        'La actitud de Galión tiene también un significado para el relato. Un alto funcionario romano decidió que la predicación de Pablo era un asunto religioso interno de los judíos y no un delito contra Roma. Con eso, el evangelio pudo seguir avanzando libremente en Acaya. Detrás de la decisión de un procónsul estaba la promesa que el Señor había hecho a Pablo poco antes, en una visión: «yo estoy contigo, y ninguno pondrá sobre ti la mano para hacerte mal, porque yo tengo mucho pueblo en esta ciudad» (Hch 18:10).'
      ],
      pensar: 'El Señor le prometió a Pablo que nadie le haría daño en Corinto, y esa promesa se cumplió por medio de la decisión de un gobernador pagano (Hch 18:9-17). ¿Cómo puede Dios cumplir sus promesas usando a personas que ni siquiera lo conocen?'
    },
    {
      id: 'trasfondo-religioso', n: 'El mundo religioso de Hechos', ref: 'Hechos 4:1-2; 5:34; 8:9-11; 13:14; 17:16-23; 19:23-27; 23:6-8', fecha: [30, 62],
      visual: [
        { tipo: 'imagen', titulo: 'Sinagoga', src: OTRA + 'imperio-griego/img/grecia-sinagoga.webp', alt: 'Una sinagoga del siglo I con hombres judíos sentados en bancos de piedra escuchando la lectura de un rollo', pie: 'En la sinagoga comenzaba Pablo su predicación en cada ciudad.', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Templo pagano', src: OTRA + 'imperio-griego/img/grecia-templo-diosa.webp', alt: 'El interior de un templo griego con una gran estatua de una diosa, iluminado por lámparas, con ofrendas en el altar', pie: 'Un templo pagano, como el de la diosa Diana en Éfeso.', origen: 'ia' }
      ],
      texto: [
        'El evangelio salió de Jerusalén hacia un mundo con muchas creencias. En Jerusalén, el centro de la vida religiosa era el templo, y el sanedrín, el gran concilio judío, tenía autoridad en los asuntos religiosos. Dentro del judaísmo había grupos distintos. Los saduceos, la élite sacerdotal, «dicen que no hay resurrección, ni ángel, ni espíritu» (Hch 23:8); por eso fueron los primeros en perseguir a los apóstoles, «resentidos de que enseñasen al pueblo, y anunciasen en Jesús la resurrección de entre los muertos» (Hch 4:2). Los fariseos, en cambio, creían en la resurrección, y uno de sus maestros, Gamaliel, aconsejó prudencia ante los apóstoles (Hch 5:34-39).',
        { h: 'La diáspora y las sinagogas' },
        'Fuera de Judea vivían muchos más judíos que dentro: era la diáspora, presente en casi todas las ciudades del imperio. Cada comunidad se reunía en su sinagoga cada día de reposo para leer la ley y los profetas. Allí comenzaba Pablo en cada ciudad: «como acostumbraba, fue a ellos, y por tres días de reposo discutió con ellos» (Hch 17:2).',
        'En las sinagogas había también gentiles atraídos por el Dios de Israel. Algunos se convertían por completo al judaísmo: eran los prosélitos. Otros adoraban a Dios sin circuncidarse; Hechos los llama temerosos de Dios, como el centurión Cornelio (Hch 10:2) o Lidia, la vendedora de púrpura (Hch 16:14). Ellos fueron muchas veces los primeros en recibir el evangelio.',
        { h: 'El mundo pagano' },
        'Más allá de la sinagoga estaba el paganismo grecorromano. Cada ciudad tenía sus dioses y sus templos: en Éfeso, el gran templo de Diana, cuya venta de imágenes de plata sostenía a los artesanos (Hch 19:24-27). En Atenas, Pablo vio una ciudad «entregada a la idolatría» (Hch 17:16) y discutió con filósofos epicúreos y estoicos (Hch 17:18). Y por todas partes estaba la magia: Simón en Samaria (Hch 8:9-11), el mago Elimas en Chipre (Hch 13:6-8) y los libros de magia quemados en Éfeso (Hch 19:19).',
        'En ese mundo, el evangelio no se abrió paso con argumentos solamente. Lucas muestra una y otra vez que el poder de Dios, manifestado en señales, sanidades y liberaciones, venció a los poderes de las tinieblas.'
      ],
      pensar: 'En Éfeso, los que habían practicado la magia quemaron públicamente sus libros, que valían una fortuna (Hch 19:19). ¿Qué enseña esa escena sobre lo que significa romper con el pasado cuando una persona se convierte a Cristo?'
    },
    {
      id: 'mapa', n: 'El mundo de Hechos en el mapa', ref: 'Hechos 1:8; 2:9-11', fecha: [30, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Jerusalén: allí nace la iglesia el día de Pentecostés (Hch 2).', fecha: 30,
            estado: { view: [[30.8, 33.6], [33.8, 36.8]], capas: ['roma-14'], lugares: ['jerusalen'] } },
          { t: 'Judea y Samaria: la persecución dispersa a los creyentes, que predican por toda la región (Hch 8–9).', fecha: 34,
            estado: { view: [[30.8, 33.6], [33.8, 36.8]], capas: ['roma-14'], lugares: ['jerusalen', 'samaria', 'jope', 'cesarea', 'gaza'] } },
          { t: 'Damasco y Antioquía: Saulo se convierte, y en Antioquía nace la primera iglesia con gentiles (Hch 9; 11).', fecha: 40,
            estado: { view: [[30.5, 31], [37.5, 39]], capas: ['roma-14'], lugares: ['jerusalen', 'samaria', 'cesarea', 'damasco', 'antioquia'] } },
          { t: 'Asia Menor y Grecia: los viajes de Pablo llevan el evangelio a Éfeso, Filipos, Tesalónica, Atenas y Corinto (Hch 13–20).', fecha: 50,
            estado: { view: [[30, 18], [42, 39]], capas: ['roma-14'], lugares: ['jerusalen', 'antioquia', 'efeso', 'filipos', 'tesalonica', 'atenas', 'corinto'] } },
          { t: 'Roma: Pablo llega preso a la capital del imperio y predica sin impedimento (Hch 27–28).', fecha: 60,
            estado: { view: MEDITERRANEO, capas: ['roma-14'], lugares: ['jerusalen', 'cesarea', 'creta', 'malta', 'puteoli', 'roma'], trazos: ['viaje-roma'] } }
        ] }
      ],
      texto: [
        'Hechos es un libro en movimiento. Comienza en un aposento de Jerusalén y termina en Roma, a más de dos mil kilómetros de distancia. Entre ambos puntos aparecen decenas de lugares: ciudades, provincias, islas, puertos y caminos. Conocer el mapa ayuda a seguir el relato y a comprender la magnitud de lo que ocurrió.',
        'El escenario es el Mediterráneo oriental, que en el siglo I era casi por completo romano. En el extremo oriental está Judea, con Jerusalén en sus montes y Cesarea, la capital romana, en la costa. Al norte, Siria, con Damasco y Antioquía, la tercera ciudad del imperio. Más al occidente, la gran península de Asia Menor, la actual Turquía, con provincias como Galacia y Asia, cuya capital era Éfeso. Al cruzar el mar Egeo se llega a Macedonia y Acaya, la actual Grecia, con Filipos, Tesalónica, Atenas y Corinto. Y más allá, Italia y Roma.',
        { h: 'Un mapa que sigue una promesa' },
        'Jesús trazó el mapa del libro antes de ascender: «me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). El relato avanza en círculos cada vez más amplios, como las ondas que produce una piedra al caer en el agua.',
        'Hay además un anticipo en el día de Pentecostés. Lucas enumera a los judíos piadosos de muchas naciones que estaban en Jerusalén: partos, medos, elamitas, habitantes de Mesopotamia, de Judea, de Capadocia, del Ponto y de Asia, de Frigia y Panfilia, de Egipto y de las regiones de África más allá de Cirene, romanos, cretenses y árabes (Hch 2:9-11). Todos oyeron hablar en sus propias lenguas las maravillas de Dios. Desde el primer día, el evangelio tenía destino universal.',
        'Usa los botones bajo el mapa para seguir el avance del evangelio desde Jerusalén hasta Roma. La ruta Mapa de la expansión de la iglesia lo recorre con más detalle, y el recurso Los viajes de Pablo sigue cada uno de sus viajes.'
      ],
      pensar: 'El día de Pentecostés, personas de muchas naciones oyeron las maravillas de Dios en su propia lengua (Hch 2:11). ¿Qué te dice eso sobre el deseo de Dios de alcanzar a personas de toda lengua y cultura, también en tu propia ciudad?'
    },
    {
      id: 'tema', n: 'El tema del libro', ref: 'Hechos 1:8; 6:7; 9:31; 12:24; 16:5; 19:20; 28:31', fecha: 30,
      visual: [
        { tipo: 'cita', titulo: 'Versículo clave', texto: 'pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.', ref: 'Hechos 1:8' },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperios-historia/img/integrador-jerusalen-caminos.webp', alt: 'Vista de Jerusalén antigua sobre sus colinas al amanecer, con caminos que parten hacia el mar, el desierto y el norte', pie: 'Desde Jerusalén, hasta lo último de la tierra.', origen: 'ia' }
      ],
      texto: [
        'Si hubiera que resumir Hechos en una frase, sería esta: el avance del evangelio, en el poder del Espíritu Santo, desde Jerusalén hasta lo último de la tierra. Todo está ya en el versículo clave, Hechos 1:8, que tiene tres partes.',
        'Primero, el poder: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo». La palabra griega es dýnamis, la misma que se usa para los milagros. No se trata de una influencia vaga, sino de una capacitación sobrenatural que viene cuando el Espíritu desciende sobre el creyente.',
        'Segundo, el propósito: «y me seréis testigos». El poder del Espíritu no es para exhibirlo ni para el beneficio propio, sino para testificar de Cristo. Un testigo no habla de sí mismo; dice lo que vio y oyó. Por eso los apóstoles declaraban: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20).',
        'Tercero, el alcance: «en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra». Es el bosquejo del libro. Los capítulos 1 a 7 ocurren en Jerusalén; los capítulos 8 a 12 llevan el evangelio a Judea y Samaria, y abren la puerta a los gentiles; los capítulos 13 a 28 siguen a Pablo hasta Roma.',
        { h: 'La palabra crecía' },
        'Lucas marca el avance con breves resúmenes repartidos a lo largo del libro: «crecía la palabra del Señor, y el número de los discípulos se multiplicaba grandemente» (Hch 6:7); «las iglesias tenían paz… y se acrecentaban fortalecidas por el Espíritu Santo» (Hch 9:31); «la palabra del Señor crecía y se multiplicaba» (Hch 12:24); «las iglesias eran confirmadas en la fe, y aumentaban en número cada día» (Hch 16:5); «así crecía y prevalecía poderosamente la palabra del Señor» (Hch 19:20).',
        'Cada resumen cierra una etapa y abre la siguiente. Ni la persecución, ni las divisiones internas, ni las cárceles pudieron detener el avance. El último versículo del libro deja a Pablo predicando «abiertamente y sin impedimento» (Hch 28:31): el evangelio sigue su camino.'
      ],
      pensar: 'Jesús unió el poder del Espíritu con el testimonio: «recibiréis poder… y me seréis testigos» (Hch 1:8). ¿Qué relación ves entre la llenura del Espíritu Santo y el deseo de hablar de Cristo a otros?'
    },
    {
      id: 'proposito', n: 'Para qué se escribió', ref: 'Lucas 1:1-4; Hechos 1:1; 18:14-15; 23:29; 25:25; 26:31-32', fecha: [30, 62],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-pablo-festo.webp', alt: 'El apóstol Pablo de pie ante el gobernador romano Festo en su tribunal, rodeado de soldados y consejeros', pie: 'Pablo ante Festo: ninguna autoridad romana halló delito en él.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Veredictos', tabla: {
          titulo: 'Las autoridades romanas ante Pablo',
          cab: ['Autoridad', 'Lugar', 'Veredicto'],
          filas: [
            ['Los magistrados', 'Filipos', 'Piden disculpas y lo liberan (Hch 16:38-39)'],
            ['Galión, procónsul', 'Corinto', '«Cuestiones de palabras… y de vuestra ley» (Hch 18:15)'],
            ['El escribano de la ciudad', 'Éfeso', 'Los acusados no son sacrílegos ni blasfemos (Hch 19:37)'],
            ['Claudio Lisias, tribuno', 'Jerusalén', '«Ningún delito tenía digno de muerte o de prisión» (Hch 23:29)'],
            ['Festo, gobernador', 'Cesarea', '«Ninguna cosa digna de muerte ha hecho» (Hch 25:25)'],
            ['Agripa II, rey', 'Cesarea', '«Podía este hombre ser puesto en libertad» (Hch 26:32)']
          ]
        } }
      ],
      texto: [
        'Lucas no escribió por un solo motivo. Al leer la obra completa se reconocen varios propósitos que se complementan.',
        { h: 'Un propósito histórico' },
        'Lucas quería dar a Teófilo un relato ordenado y verdadero, basado en testigos (Lc 1:1-4). La fe cristiana se apoya en hechos: la resurrección de Jesús, el derramamiento del Espíritu y el nacimiento de la iglesia ocurrieron en lugares y fechas concretas, con testigos que todavía vivían.',
        { h: 'Un propósito teológico' },
        'Hechos muestra que la obra de Jesús no terminó con su ascensión. El Señor resucitado sigue actuando desde el cielo, por medio del Espíritu Santo y de la iglesia. Al mismo tiempo, el libro explica cómo un movimiento nacido entre judíos llegó a incluir a los gentiles sin exigirles la circuncisión: no fue una idea humana, sino una obra de Dios que los apóstoles reconocieron (Hch 10:47; 15:7-11).',
        { h: 'Un propósito de defensa' },
        'Lucas registra con cuidado que ninguna autoridad romana encontró delito en Pablo: ni los magistrados de Filipos, ni Galión en Corinto, ni el tribuno Lisias, ni Festo, ni el rey Agripa (Hch 26:31-32). Los conflictos venían de la oposición religiosa, no de una rebelión contra Roma. Para un lector como Teófilo, eso dejaba claro que el cristianismo no era una amenaza para el orden público.',
        { h: 'Un propósito misionero y pastoral' },
        'Hechos es, por último, un modelo para la iglesia de todos los tiempos. Muestra cómo vive una iglesia llena del Espíritu: persevera en la doctrina de los apóstoles, en la comunión, en el partimiento del pan y en las oraciones (Hch 2:42); ora en medio de la persecución y vuelve a ser llena del Espíritu (Hch 4:31); envía misioneros bajo la dirección del Espíritu (Hch 13:2-3), y espera señales y prodigios que confirmen la palabra (Hch 14:3). Lucas no escribió solo para que sepamos cómo fue la iglesia, sino para que sepamos cómo debe ser.'
      ],
      pensar: 'Los primeros creyentes eran acusados de trastornar el mundo (Hch 17:6), pero ninguna autoridad podía probar que hubieran hecho algo malo. ¿Cómo puede un creyente hoy ser al mismo tiempo un ciudadano irreprochable y un testigo que causa impacto en su entorno?'
    },
    {
      id: 'caracteristicas', n: 'Características especiales', ref: 'Hechos 1:14; 2:42; 4:31; 12:5; 13:2-3; 16:25', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Rasgos', tabla: {
          titulo: 'Lo que distingue al libro de los Hechos',
          cab: ['Rasgo', 'Dónde se ve'],
          filas: [
            ['El Espíritu Santo, protagonista', 'Más de cincuenta menciones; dirige, llena, envía y prohíbe (Hch 2:4; 8:29; 13:2; 16:6-7)'],
            ['Los discursos', 'Pedro (Hch 2; 3; 10), Esteban (Hch 7) y Pablo (Hch 13; 17; 20; 22; 26)'],
            ['La oración', 'Antes de cada avance (Hch 1:14; 4:31; 12:5; 13:3; 16:25)'],
            ['Señales y prodigios', 'Sanidades, liberaciones y resurrecciones (Hch 3; 9:36-42; 14:8-10; 19:11-12)'],
            ['De judíos a gentiles', 'Samaria, el etíope, Cornelio, Antioquía y el concilio (Hch 8; 10; 11; 15)'],
            ['Precisión histórica', 'Títulos exactos de cada autoridad local'],
            ['Final abierto', 'Pablo predica en Roma «sin impedimento» (Hch 28:31)']
          ]
        } }
      ],
      texto: [
        'Hechos tiene rasgos que lo distinguen de cualquier otro libro de la Biblia.',
        'El protagonista es el Espíritu Santo. Se lo menciona más de cincuenta veces, más que en cualquier otro libro del Nuevo Testamento. Él llena a los creyentes (Hch 2:4; 4:31), habla y dirige (Hch 8:29; 13:2), envía misioneros (Hch 13:4) y también cierra puertas (Hch 16:6-7). Por eso muchos han dicho que el libro podría llamarse «los Hechos del Espíritu Santo».',
        'Los discursos ocupan un lugar central. Lucas resume los mensajes de Pedro en Pentecostés y en casa de Cornelio, la defensa de Esteban ante el sanedrín y los discursos de Pablo en la sinagoga de Antioquía de Pisidia, en el Areópago de Atenas, ante los ancianos de Éfeso y ante el rey Agripa. Por ellos sabemos qué predicaba la iglesia primitiva y cómo adaptaba el mensaje a cada público.',
        'La oración precede a cada avance. Los discípulos esperan el Espíritu «unánimes en oración» (Hch 1:14); la iglesia perseguida ora y el lugar tiembla (Hch 4:31); la iglesia ora sin cesar por Pedro encarcelado (Hch 12:5); Bernabé y Saulo son enviados después de ayunar y orar (Hch 13:3); Pablo y Silas oran y cantan en la cárcel a medianoche (Hch 16:25).',
        'El libro narra una transición. El evangelio comienza entre judíos en Jerusalén y termina alcanzando a los gentiles en todo el imperio. Lucas muestra con cuidado cada paso: los samaritanos, el eunuco etíope, el centurión Cornelio, la iglesia de Antioquía y el concilio de Jerusalén.',
        'Lucas es, además, un historiador preciso, como veremos en la estación siguiente. Y deja un final abierto: no cuenta la muerte de Pablo, sino que lo deja predicando. La historia del avance del evangelio no termina en el capítulo 28.'
      ],
      pensar: 'En Hechos, cada avance importante de la iglesia está precedido por la oración. ¿Qué lugar ocupa la oración en los proyectos y decisiones de tu vida y de tu congregación?'
    },
    {
      id: 'politarcas', n: 'Un historiador preciso', ref: 'Hechos 13:7; 16:20-22; 17:6-8; 19:31, 35; 28:7', fecha: 50,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-jason-tesalonica.webp', alt: 'Una turba arrastra a Jasón y a algunos creyentes ante los magistrados de Tesalónica, sentados en el foro de la ciudad, con columnas y edificios griegos al fondo', pie: 'Jasón ante las autoridades de Tesalónica (Hch 17:6).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Títulos', tabla: {
          titulo: 'Títulos exactos en cada ciudad',
          cab: ['Lugar', 'Título en Hechos', 'Qué confirman las fuentes'],
          filas: [
            ['Chipre', 'Procónsul (Hch 13:7)', 'Provincia senatorial, gobernada por un procónsul'],
            ['Filipos', 'Magistrados y alguaciles (Hch 16:20, 35)', 'Colonia romana, con magistrados de estilo romano'],
            ['Tesalónica', 'Autoridades de la ciudad, en griego politarcas (Hch 17:6)', 'Inscripciones del período usan el mismo título para los magistrados de la ciudad'],
            ['Éfeso', 'Autoridades de Asia, en griego asiarcas, y el escribano (Hch 19:31, 35)', 'Inscripciones confirman ambos cargos en Éfeso'],
            ['Malta', 'El hombre principal de la isla (Hch 28:7)', 'Inscripciones de Malta usan el mismo título']
          ],
          nota: 'Las imágenes de esta estación son recreaciones de escenas, no de los objetos arqueológicos.'
        } }
      ],
      texto: [
        'En el siglo I, cada ciudad del imperio tenía su propia forma de gobierno, y sus autoridades llevaban títulos distintos. Un escritor que inventara su relato a distancia podía equivocarse fácilmente. Lucas, en cambio, usa en cada lugar el título exacto.',
        'En Tesalónica, una turba arrastró a Jasón y a algunos hermanos «ante las autoridades de la ciudad» (Hch 17:6). La palabra griega que usa Lucas es politarcas, «gobernantes de la ciudad». Durante mucho tiempo se señaló que ese término no aparecía en la literatura griega conocida. Hoy se conocen decenas de inscripciones que lo usan, varias de ellas en Tesalónica misma, para nombrar a los magistrados de la ciudad.',
        'Lo mismo ocurre en otros lugares. Chipre era una provincia del senado, y Lucas llama a Sergio Paulo «procónsul» (Hch 13:7). Filipos era una colonia romana, y sus autoridades actúan como magistrados romanos, con alguaciles que llevan las varas (Hch 16:20-22, 35). En Éfeso aparecen las «autoridades de Asia», los asiarcas, y el escribano de la ciudad, que calma el tumulto en el teatro (Hch 19:31, 35). En Malta, Lucas llama a Publio «el hombre principal de la isla» (Hch 28:7), el mismo título que usan las inscripciones de Malta.',
        { h: 'Un testigo confiable' },
        'Esta precisión no es un detalle menor. Muestra que Lucas conocía de primera mano los lugares que describe, o tenía fuentes muy cercanas a los hechos. Su relato de la navegación de Pablo a Roma, en los capítulos 27 y 28, es tan detallado en vientos, puertos y maniobras que ha sido estudiado por marinos como un documento náutico.',
        'Para el creyente, la Palabra de Dios no necesita que la arqueología la confirme para ser verdadera. Pero estos hallazgos son un estímulo: el mismo autor que fue exacto en los nombres de los magistrados de Tesalónica es el que relata el derramamiento del Espíritu en Pentecostés, la sanidad del cojo y la resurrección de Dorcas. Su relato merece nuestra confianza.'
      ],
      pensar: 'La Biblia no necesita la confirmación de la arqueología para ser verdad, pero los hallazgos muestran una y otra vez que sus relatos son exactos. ¿Cómo puede este conocimiento fortalecer tu fe y ayudarte a responder a quienes dudan de la Biblia (1 P 3:15)?'
    },
    {
      id: 'describe-o-ensena', n: '¿Hechos describe o enseña?', ref: '2 Timoteo 3:16-17; Romanos 15:4; Hechos 2:4; 8:14-19; 9:17; 10:44-46; 19:1-6', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'El patrón', tabla: {
          titulo: 'Cuando el Espíritu vino sobre los creyentes',
          cab: ['Pasaje', 'Quiénes', 'Qué se observa'],
          filas: [
            ['Hch 2:1-4', 'Los discípulos en Jerusalén', 'Llenos del Espíritu, hablan en otras lenguas'],
            ['Hch 8:14-19', 'Los samaritanos', 'Ya creían y estaban bautizados; reciben el Espíritu después, con algo visible que impresiona a Simón'],
            ['Hch 9:17-18', 'Saulo de Tarso', 'Es lleno del Espíritu tres días después de encontrarse con Cristo; más tarde dice que habla en lenguas más que todos (1 Co 14:18)'],
            ['Hch 10:44-46', 'Cornelio y su casa', 'Los oían hablar en lenguas y magnificar a Dios'],
            ['Hch 19:1-6', 'Los discípulos de Éfeso', 'Hablaban en lenguas y profetizaban']
          ],
          nota: 'En los relatos que describen la manifestación, las lenguas están presentes.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-efeso-espiritu.webp', alt: 'El apóstol Pablo impone las manos sobre un grupo de discípulos en una casa de Éfeso; algunos levantan los brazos y hablan con fervor, con el rostro iluminado', pie: '«Vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban» (Hch 19:6).', origen: 'ia' }
      ],
      texto: [
        'Hechos es un libro narrativo: cuenta lo que ocurrió. Eso plantea una pregunta importante para interpretarlo. ¿Lo que narra Hechos es solo historia de la iglesia primitiva, o también enseña cómo debe ser la iglesia de hoy?',
        { posturas: {
          titulo: 'Dos maneras de leer Hechos',
          a: { n: 'Solo describe', t: 'Hechos relata una etapa única y de transición. La doctrina se toma de las enseñanzas directas de Jesús y de las cartas de los apóstoles; lo que Hechos narra no debe convertirse en norma, salvo que una carta lo enseñe de forma explícita.' },
          b: { n: 'También enseña', t: '«Toda la Escritura es inspirada por Dios, y útil para enseñar» (2 Ti 3:16), también la narración. Pablo usó relatos del Antiguo Testamento para enseñar a la iglesia (Ro 15:4; 1 Co 10:11). Lucas es un teólogo que selecciona y repite lo que quiere enseñar; cuando un patrón se repite en el libro y armoniza con el resto de la Escritura, marca una norma para la iglesia.' },
          c: 'Este estudio sigue la segunda manera. Hechos no es solo un álbum de recuerdos; es la historia inspirada que muestra cómo actúa el Espíritu Santo en la iglesia, y lo que muestra de forma repetida es el modelo de Dios para su pueblo.'
        } },
        { h: 'El ejemplo más importante' },
        'La diferencia entre ambas lecturas se ve con claridad en la experiencia del Espíritu Santo. En Hechos, el bautismo en el Espíritu aparece como una experiencia distinta de la conversión: los samaritanos ya habían creído y habían sido bautizados en agua, pero recibieron el Espíritu días después, cuando Pedro y Juan oraron por ellos (Hch 8:14-17). Los discípulos de Éfeso recibieron el Espíritu cuando Pablo les impuso las manos (Hch 19:6).',
        'Además, cada vez que Lucas describe lo que se vio y se oyó cuando el Espíritu vino sobre los creyentes, aparecen las lenguas: en Pentecostés (Hch 2:4), en casa de Cornelio, donde fue la señal que convenció a los judíos que acompañaban a Pedro (Hch 10:45-46), y en Éfeso (Hch 19:6). En Samaria, Simón el mago «vio» que se daba el Espíritu (Hch 8:18): algo visible y audible ocurrió.',
        'Por eso, la experiencia de Pentecostés no quedó encerrada en el primer siglo. Pedro mismo lo dijo: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39).'
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hch 2:39). ¿Qué razones da el propio texto para esperar hoy la misma experiencia de Pentecostés?'
    },
    {
      id: 'principios', n: 'Principios para interpretar Hechos', ref: 'Hechos 1:6-7; 3:19-21; 5:1-11; 15:14-17, 39', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Principios', tabla: {
          titulo: 'Siete principios para leer Hechos',
          cab: ['Principio', 'Ejemplo'],
          filas: [
            ['1. Leer Lucas-Hechos como una obra', 'La unción de Jesús (Lc 4:18) explica la de la iglesia (Hch 1:8)'],
            ['2. Distinguir lo irrepetible de lo que se repite', 'Pentecostés como nacimiento de la iglesia ocurrió una vez; la llenura del Espíritu se repite (Hch 4:31)'],
            ['3. Buscar los patrones', 'Lenguas cuando el Espíritu viene (Hch 2; 10; 19)'],
            ['4. Atender a la intención del autor', 'Qué elige contar Lucas, cuánto espacio le da y en qué orden'],
            ['5. Armonizar con el resto de la Escritura', 'Las lenguas en Hechos y los dones en 1 Corintios 12–14'],
            ['6. Reconocer la transición entre Israel y la iglesia', 'Hch 1:6-7; 3:19-21; 15:14-17'],
            ['7. Narrar no es aprobar', 'Ananías y Safira (Hch 5); el desacuerdo de Pablo y Bernabé (Hch 15:39)']
          ]
        } }
      ],
      texto: [
        'Para leer bien un libro como Hechos conviene tener presentes algunos principios.',
        'Primero, leer Lucas-Hechos como una sola obra. Muchas cosas de Hechos se entienden a la luz del Evangelio, como la unción del Espíritu para el ministerio.',
        'Segundo, distinguir lo irrepetible de lo que se repite. Algunos hechos ocurrieron una sola vez: la ascensión, el derramamiento del Espíritu en Pentecostés como nacimiento de la iglesia, o el papel de los doce como testigos oculares de la resurrección. Otros se repiten a lo largo del libro y siguen vigentes: la llenura del Espíritu, la oración, el testimonio, las sanidades y los dones.',
        'Tercero, buscar los patrones. Lucas enseña repitiendo. Lo que aparece una y otra vez en el relato tiene más peso que un detalle aislado.',
        'Cuarto, atender a la intención del autor. Un historiador selecciona: Lucas dedica dos capítulos enteros a la conversión de Cornelio (Hch 10–11) y repite tres veces la conversión de Pablo (Hch 9; 22; 26). Esa insistencia indica lo que considera importante.',
        'Quinto, armonizar con el resto de la Escritura. Hechos no contradice a las cartas, sino que las ilustra. Las lenguas de Hechos y la enseñanza de Pablo sobre los dones en 1 Corintios 12 a 14 se iluminan mutuamente.',
        'Sexto, reconocer la transición entre Israel y la iglesia. Antes de ascender, los discípulos preguntaron: «Señor, ¿restaurarás el reino a Israel en este tiempo?» Jesús no negó que el reino sería restaurado; solo dijo que no les tocaba saber cuándo (Hch 1:6-7). Pedro anunció la venida de los «tiempos de la restauración de todas las cosas» (Hch 3:21), y en el concilio, Jacobo explicó que Dios visitaba primero a los gentiles «para tomar de ellos pueblo para su nombre», y que después reedificaría «el tabernáculo de David» (Hch 15:14-16). La iglesia no reemplaza a Israel: Dios tiene un plan para ambos.',
        'Séptimo, narrar no es aprobar. Lucas cuenta también los pecados y los conflictos, como la mentira de Ananías y Safira o el desacuerdo entre Pablo y Bernabé. El contexto muestra cuándo un hecho es ejemplo para seguir y cuándo es advertencia.'
      ],
      pensar: 'Jesús no les negó a sus discípulos que el reino sería restaurado a Israel; solo les dijo que no les tocaba saber cuándo, y les encargó ser sus testigos (Hch 1:6-8). ¿Por qué crees que el Señor puso el testimonio por delante de la curiosidad sobre los tiempos del fin?'
    },
    {
      id: 'cronologia', n: 'Cronología de Hechos', ref: 'Hechos 2; 9; 12; 15; 18:12; 21:27-36; 28:30', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Cronología', tabla: {
          titulo: 'Fechas aproximadas del libro de los Hechos',
          cab: ['Año (d.C.)', 'Acontecimiento', 'Pasaje'],
          filas: [
            ['c. 30', 'Ascensión de Jesús y Pentecostés', 'Hch 1–2'],
            ['c. 32–34', 'Muerte de Esteban; el evangelio llega a Samaria', 'Hch 7–8'],
            ['c. 33–34', 'Conversión de Saulo', 'Hch 9'],
            ['c. 40', 'Cornelio, primer gentil en recibir el Espíritu', 'Hch 10'],
            ['44', 'Muerte de Herodes Agripa I', 'Hch 12:20-23'],
            ['c. 46–48', 'Primer viaje misionero', 'Hch 13–14'],
            ['c. 49', 'Concilio de Jerusalén', 'Hch 15'],
            ['c. 49–52', 'Segundo viaje; Galión en Corinto (51–52)', 'Hch 15:36–18:22'],
            ['c. 53–57', 'Tercer viaje; tres años en Éfeso', 'Hch 18:23–21:16'],
            ['c. 57', 'Arresto de Pablo en el templo', 'Hch 21:27-36'],
            ['c. 57–59', 'Prisión en Cesarea', 'Hch 23–26'],
            ['c. 59–60', 'Viaje a Roma y naufragio', 'Hch 27–28:15'],
            ['c. 60–62', 'Dos años en una casa alquilada en Roma', 'Hch 28:30-31']
          ],
          nota: 'Hechos casi no da fechas. Las que se usan aquí se calculan a partir de Galión, Herodes Agripa I y otros datos externos; varían en uno o dos años según los autores.'
        } }
      ],
      texto: [
        'Lucas casi nunca da fechas. Cuenta cuánto tiempo pasó entre algunos hechos, como el año y medio de Pablo en Corinto (Hch 18:11), los tres años en Éfeso (Hch 20:31), los dos años de prisión en Cesarea (Hch 24:27) o los dos años en Roma (Hch 28:30), pero no dice en qué año ocurrieron. Para fecharlos hay que relacionar el relato con la historia conocida.',
        'Algunos puntos sirven de ancla. La muerte de Herodes Agripa I, narrada en Hechos 12, ocurrió en el año 44, según el historiador Josefo. El proconsulado de Galión, gracias a la inscripción de Delfos, se ubica hacia 51 y 52. El cambio de gobernador de Félix a Festo (Hch 24:27) ocurrió hacia el año 59 o 60. A partir de esos puntos, y de los intervalos que da el propio Lucas, se reconstruye el resto.',
        { h: 'Unos treinta años' },
        'El resultado es que Hechos cubre unos treinta años, desde la ascensión de Jesús, hacia el año 30, hasta el final de los dos años de Pablo en Roma, hacia el 62. En ese tiempo, el evangelio pasó de un grupo de ciento veinte personas reunidas en Jerusalén (Hch 1:15) a iglesias establecidas en las principales ciudades del imperio.',
        'Hay que tener presente que estas fechas son aproximadas. Los estudiosos discuten, por ejemplo, si la crucifixión fue en el año 30 o en el 33, y eso mueve todas las fechas de los primeros capítulos. Las diferencias entre las cronologías suelen ser de uno a tres años, y no cambian el orden de los acontecimientos.',
        'Las cartas de Pablo se escribieron durante estos mismos años. Por ejemplo, las cartas a los Tesalonicenses, desde Corinto en el segundo viaje; 1 Corintios, desde Éfeso en el tercero, y Filipenses, Colosenses, Efesios y Filemón, probablemente desde la prisión en Roma. El recurso Los viajes de Pablo las ubica en el mapa.'
      ],
      pensar: 'En unos treinta años, un grupo de ciento veinte personas reunidas en oración llegó a tener iglesias en las principales ciudades del imperio. ¿Qué crees que puede hacer Dios con una congregación pequeña que se entrega por completo a su propósito?'
    },
    {
      id: 'final-abierto', n: 'Un libro sin final', ref: 'Hechos 28:16-31', fecha: 62,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-roma.webp', alt: 'El apóstol Pablo, ya mayor, encadenado por la muñeca a un soldado romano, enseña a un grupo de hombres y mujeres sentados en una sencilla habitación de una casa alquilada en Roma', pie: 'Pablo en Roma, «abiertamente y sin impedimento» (Hch 28:31).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Pablo permaneció dos años enteros en una casa alquilada, y recibía a todos los que a él venían, predicando el reino de Dios y enseñando acerca del Señor Jesucristo, abiertamente y sin impedimento.', ref: 'Hechos 28:30-31' }
      ],
      texto: [
        'Hechos termina en Roma, con Pablo bajo custodia, encadenado a un soldado (Hch 28:16, 20), pero libre para recibir a quien quisiera visitarlo. No hay un cierre solemne, ni una despedida, ni un relato de su muerte. La última palabra del libro en griego es akolýtos: «sin impedimento».',
        'Hemos visto que este final se explica, en parte, porque Lucas terminó de escribir mientras Pablo todavía esperaba su juicio. Pero también tiene un sentido más profundo. El libro no se cierra con la historia de un hombre, porque su protagonista no es Pablo, sino el Señor que obra por su Espíritu. Pablo está encadenado, pero la palabra de Dios no está presa (2 Ti 2:9).',
        { h: 'La promesa cumplida y la tarea pendiente' },
        'Al llegar a Roma, la promesa de Hechos 1:8 se ha cumplido en lo esencial: el evangelio ha sido predicado en Jerusalén, en Judea, en Samaria, y ha llegado a la capital del mundo conocido. Sin embargo, la frase de Jesús decía «hasta lo último de la tierra», y la tierra es mucho más grande que el imperio romano. La tarea sigue abierta.',
        'Por eso se suele decir que Hechos tiene un capítulo 29 que todavía se está escribiendo. Cada generación de creyentes, llena del mismo Espíritu, continúa la obra que Jesús «comenzó a hacer y a enseñar» (Hch 1:1). El mismo Espíritu que descendió en Pentecostés sigue llenando, enviando y confirmando la palabra con señales, hasta el día en que «este mismo Jesús… así vendrá como le habéis visto ir al cielo» (Hch 1:11).',
        { h: 'Lo que sigue en este estudio' },
        'Con esta introducción ya conoces al autor, la fecha, el mundo y el propósito del libro. La ruta Visión panorámica presenta su estructura completa, sus palabras y versículos clave y sus grandes temas. Después, la ruta Comentario capítulo por capítulo lo recorre de principio a fin.'
      ],
      pensar: 'Hechos termina sin cerrar la historia: el evangelio sigue avanzando «sin impedimento» (Hch 28:31). Si la historia de la iglesia continúa, ¿qué parte de ese capítulo que todavía se escribe le corresponde a tu vida y a tu congregación?'
    }
  ];

  /* ---------------- Ruta II · Visión panorámica ---------------- */
  const panorama = [
    {
      id: 'vistazo', n: 'El libro de un vistazo', ref: 'Hechos 1:1-8; 28:30-31', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Ficha', tabla: {
          titulo: 'Hechos de los Apóstoles en cifras',
          cab: ['Dato', 'Hechos'],
          filas: [
            ['Extensión', '28 capítulos y 1.007 versículos'],
            ['Período que cubre', 'Unos treinta años, de c. 30 a c. 62 d.C.'],
            ['Escenario', 'De Jerusalén a Roma, por Judea, Samaria, Siria, Asia Menor, Grecia y el Mediterráneo'],
            ['Protagonistas humanos', 'Pedro en los capítulos 1 a 12; Pablo en los capítulos 13 a 28'],
            ['Protagonista divino', 'El Espíritu Santo: 54 menciones del «Espíritu» con mayúscula en la RV 1960'],
            ['Versículo clave', 'Hechos 1:8'],
            ['Palabra clave', 'Testigos'],
            ['Cristo en Hechos', 'El Señor resucitado y exaltado, que obra desde el cielo por su Espíritu']
          ],
          nota: 'Conteos hechos sobre el texto de la Reina-Valera 1960 publicado en este sitio.'
        } }
      ],
      texto: [
        'La ruta de introducción respondió quién escribió Hechos, cuándo y para qué. Esta ruta mira el libro desde arriba, como quien observa un territorio desde un monte antes de recorrerlo a pie. Aquí no se comenta cada capítulo: se trata de ver la forma del libro, cómo se ordena, qué palabras repite y qué temas lo atraviesan de principio a fin.',
        'Hechos tiene 28 capítulos y 1.007 versículos. Cubre unos treinta años, desde la ascensión de Jesús hacia el año 30 hasta los dos años de Pablo en Roma, hacia el 62. En ese tiempo, el relato se desplaza miles de kilómetros: de un aposento en Jerusalén a la capital del imperio.',
        { h: 'Dos apóstoles y un protagonista' },
        'El libro se divide de manera natural en dos mitades según su personaje principal. En los capítulos 1 a 12 el protagonista humano es Pedro, junto a Juan, Esteban, Felipe y Bernabé. En los capítulos 13 a 28 es Pablo. El nombre de Pedro aparece 57 veces; el de Pablo, 135, además de las 26 veces que se lo llama Saulo.',
        'Pero el verdadero protagonista es otro. En la RV 1960, la palabra «Espíritu» con mayúscula, es decir, referida al Espíritu de Dios, aparece 54 veces en Hechos. El Espíritu Santo desciende, llena, habla, envía, prohíbe, consuela y da poder. Los apóstoles no actúan por iniciativa propia: siguen la dirección del Espíritu.',
        'Y detrás del Espíritu está Cristo. El libro comienza recordando lo que Jesús «comenzó a hacer y a enseñar» (Hch 1:1), y termina con Pablo «enseñando acerca del Señor Jesucristo» (Hch 28:31). El Señor exaltado sigue presente en todo el relato: es él quien derrama el Espíritu (Hch 2:33), quien recibe a Esteban (Hch 7:56), quien se aparece a Saulo (Hch 9:5) y quien anima a Pablo en la cárcel (Hch 23:11).',
        'Las estaciones que siguen presentan el bosquejo del libro, sus seis etapas, el paralelo entre Pedro y Pablo, un resumen de cada gran sección, las palabras y los versículos clave, y los temas principales.'
      ],
      pensar: 'En Hechos, el nombre de Pablo aparece muchas más veces que el de cualquier otra persona, pero el libro deja claro que todo lo hizo el Señor por medio de su Espíritu (Hch 14:27; 15:12). ¿Por qué es importante que quien sirve a Dios recuerde siempre quién es el verdadero protagonista de la obra?'
    },
    {
      id: 'bosquejo', n: 'El bosquejo de Hechos 1:8', ref: 'Hechos 1:8', fecha: [30, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Capítulos 1 a 7: el testimonio en Jerusalén.', fecha: [30, 33],
            estado: { view: [[30.8, 33.6], [33.8, 36.8]], capas: ['roma-14'], lugares: ['jerusalen'] } },
          { t: 'Capítulos 8 a 12: el testimonio en Judea y Samaria, y las primeras puertas a los gentiles.', fecha: [33, 44],
            estado: { view: [[30.5, 31], [37.5, 39]], capas: ['roma-14'], lugares: ['jerusalen', 'samaria', 'gaza', 'jope', 'cesarea', 'damasco', 'antioquia'] } },
          { t: 'Capítulos 13 a 28: el testimonio hasta lo último de la tierra, de Antioquía a Roma.', fecha: [46, 62],
            estado: { view: MEDITERRANEO, capas: ['roma-14'], lugares: ['jerusalen', 'antioquia', 'efeso', 'filipos', 'tesalonica', 'atenas', 'corinto', 'malta', 'roma'], trazos: ['viaje-roma'] } }
        ] },
        { tipo: 'tabla', titulo: 'Bosquejo', tabla: {
          titulo: 'Bosquejo geográfico',
          cab: ['Parte', 'Capítulos', 'Contenido'],
          filas: [
            ['Introducción', '1', 'La promesa del Espíritu, la ascensión y la espera en oración'],
            ['I. En Jerusalén', '2–7', 'Pentecostés, la iglesia de Jerusalén, la persecución y Esteban'],
            ['II. En Judea y Samaria', '8–12', 'Felipe, la conversión de Saulo, Cornelio, Antioquía y Herodes'],
            ['III. Hasta lo último de la tierra', '13–28', 'Los viajes de Pablo, el concilio, el arresto y el viaje a Roma']
          ]
        } }
      ],
      texto: [
        'La manera más sencilla de bosquejar Hechos la dio el propio Jesús: «me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). El libro sigue ese orden con bastante fidelidad.',
        { h: 'Introducción: la promesa (capítulo 1)' },
        'El capítulo 1 prepara todo lo que sigue. Jesús resucitado enseña durante cuarenta días sobre el reino de Dios, manda a los discípulos esperar la promesa del Padre y asciende al cielo. Los ciento veinte esperan en oración, y se elige a Matías para completar el número de los doce.',
        { h: 'Primera parte: Jerusalén (capítulos 2 a 7)' },
        'El Espíritu desciende en Pentecostés y nace la iglesia. Pedro predica y se convierten unas tres mil personas. La iglesia crece en medio de señales, comunión y persecución, hasta que Esteban, uno de los siete servidores, muere apedreado por su testimonio.',
        { h: 'Segunda parte: Judea y Samaria (capítulos 8 a 12)' },
        'La persecución dispersa a los creyentes, y el evangelio sale de Jerusalén. Felipe predica en Samaria y bautiza a un funcionario etíope. Saulo, el perseguidor, se encuentra con Cristo. Pedro lleva el evangelio a la casa del centurión Cornelio, y en Antioquía nace una iglesia con muchos gentiles.',
        { h: 'Tercera parte: hasta lo último de la tierra (capítulos 13 a 28)' },
        'Desde Antioquía, el Espíritu envía a Bernabé y a Saulo. Pablo realiza tres viajes misioneros por Asia Menor y Grecia; el concilio de Jerusalén confirma que los gentiles se salvan por gracia, sin circuncidarse. Pablo es arrestado en Jerusalén, pasa dos años preso en Cesarea, apela al César y llega a Roma después de un naufragio.',
        'Este bosquejo muestra la intención de Lucas: el libro no es una biografía de los apóstoles, sino el relato del avance del evangelio en círculos cada vez más amplios. Usa los botones bajo el mapa para ver las tres etapas.'
      ],
      pensar: 'El evangelio salió de Jerusalén cuando la persecución dispersó a los creyentes (Hch 8:1, 4). ¿Cómo puede Dios usar las circunstancias difíciles para llevar su mensaje a lugares a los que de otro modo no habría llegado?'
    },
    {
      id: 'seis-etapas', n: 'Seis etapas: «la palabra crecía»', ref: 'Hechos 6:7; 9:31; 12:24; 16:5; 19:20; 28:31', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Las seis etapas', tabla: {
          titulo: 'El libro en seis etapas, cada una cerrada por un resumen de crecimiento',
          cab: ['Etapa', 'Pasaje', 'Dónde avanza el evangelio', 'Resumen que la cierra'],
          filas: [
            ['1', 'Hch 1:1–6:7', 'Jerusalén', 'Crecía la palabra y se multiplicaban los discípulos (Hch 6:7)'],
            ['2', 'Hch 6:8–9:31', 'Judea, Galilea y Samaria', 'Las iglesias tenían paz y se acrecentaban (Hch 9:31)'],
            ['3', 'Hch 9:32–12:24', 'Hacia los gentiles: Cornelio y Antioquía', 'La palabra crecía y se multiplicaba (Hch 12:24)'],
            ['4', 'Hch 12:25–16:5', 'Asia Menor: Chipre y Galacia', 'Las iglesias aumentaban en número cada día (Hch 16:5)'],
            ['5', 'Hch 16:6–19:20', 'Europa: Macedonia, Acaya, y Éfeso', 'Crecía y prevalecía la palabra (Hch 19:20)'],
            ['6', 'Hch 19:21–28:31', 'De Jerusalén a Roma', 'Pablo predica sin impedimento (Hch 28:31)']
          ],
          nota: 'Esta división en seis paneles es muy usada por los comentaristas; no es la única posible.'
        } }
      ],
      texto: [
        'Además del bosquejo geográfico de Hechos 1:8, Lucas dejó otra señal de cómo ordenó su libro. Seis veces interrumpe el relato con un breve resumen que habla del crecimiento de la palabra o de la iglesia. Cada resumen cierra una etapa, y la siguiente lleva el evangelio a un territorio nuevo.',
        'La primera etapa ocurre en Jerusalén y termina con la elección de los siete servidores: «crecía la palabra del Señor, y el número de los discípulos se multiplicaba grandemente en Jerusalén» (Hch 6:7). La segunda comienza con Esteban, sigue con la dispersión, Samaria y la conversión de Saulo, y cierra con las iglesias de «toda Judea, Galilea y Samaria» edificadas y fortalecidas por el Espíritu Santo (Hch 9:31).',
        'La tercera etapa abre la puerta a los gentiles: Pedro en casa de Cornelio y la iglesia de Antioquía. A pesar de que Herodes mata a Jacobo y encarcela a Pedro, Herodes muere, y «la palabra del Señor crecía y se multiplicaba» (Hch 12:24). La cuarta etapa es el primer viaje misionero y el concilio de Jerusalén, y cierra con iglesias que «aumentaban en número cada día» (Hch 16:5).',
        'La quinta lleva el evangelio a Europa, con Filipos, Tesalónica, Atenas y Corinto, y luego a Éfeso, donde los libros de magia son quemados: «así crecía y prevalecía poderosamente la palabra del Señor» (Hch 19:20). La sexta sigue a Pablo desde Éfeso a Jerusalén, a la prisión y finalmente a Roma, donde el libro termina con la predicación «abiertamente y sin impedimento» (Hch 28:31).',
        { h: 'Lo que enseña este orden' },
        'Fíjate en lo que ocurre justo antes de cada resumen: una disputa interna sobre las viudas, una persecución violenta, un rey que mata a un apóstol, una controversia doctrinal, el poder de la magia, la cárcel y un naufragio. Ningún obstáculo detuvo la palabra. Lucas enseña así que el crecimiento de la iglesia no depende de circunstancias favorables, sino del poder de Dios y de la fidelidad de quienes testifican.'
      ],
      pensar: 'Cada etapa de Hechos termina con un informe de crecimiento, aunque cada una estuvo llena de problemas y persecuciones. ¿Qué te enseña esto sobre cómo mirar las dificultades de tu congregación?'
    },
    {
      id: 'pedro-pablo', n: 'Pedro y Pablo, en paralelo', ref: 'Hechos 3:1-10; 14:8-10; 9:36-41; 20:9-12; 12:6-11; 16:25-26', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Paralelos', tabla: {
          titulo: 'Lo que Dios hizo por medio de Pedro y de Pablo',
          cab: ['', 'Pedro', 'Pablo'],
          filas: [
            ['Sanidad de un cojo de nacimiento', 'En la puerta del templo (Hch 3:1-10)', 'En Listra (Hch 14:8-10)'],
            ['Milagros extraordinarios', 'Su sombra (Hch 5:15)', 'Paños y delantales (Hch 19:11-12)'],
            ['Enfrentamiento con un mago', 'Simón, en Samaria (Hch 8:18-24)', 'Elimas, en Chipre (Hch 13:6-12)'],
            ['Imposición de manos y el Espíritu', 'En Samaria (Hch 8:17)', 'En Éfeso (Hch 19:6)'],
            ['Resurrección de un muerto', 'Dorcas, en Jope (Hch 9:36-41)', 'Eutico, en Troas (Hch 20:9-12)'],
            ['Rechazo de la adoración', 'Ante Cornelio (Hch 10:25-26)', 'En Listra (Hch 14:11-15)'],
            ['Liberación de la cárcel', 'Por un ángel (Hch 12:6-11)', 'Por un terremoto (Hch 16:25-26)']
          ]
        } }
      ],
      texto: [
        'Lucas construyó su libro alrededor de dos apóstoles, y al leerlo con atención se descubre que sus historias se reflejan una en la otra. Muchas de las cosas que Dios hizo por medio de Pedro en la primera mitad las hizo también por medio de Pablo en la segunda.',
        'Pedro sana a un cojo de nacimiento en la puerta del templo de Jerusalén; Pablo sana a otro cojo de nacimiento en Listra. La gente sacaba a los enfermos a las calles para que al menos la sombra de Pedro los tocara; en Éfeso, los paños que habían tocado el cuerpo de Pablo eran llevados a los enfermos, y las enfermedades y los espíritus malos se iban. Pedro reprende a Simón el mago en Samaria; Pablo reprende al mago Elimas en Chipre.',
        'Por medio de Pedro, Dios resucita a Dorcas en Jope; por medio de Pablo, a Eutico en Troas. Cornelio se postra ante Pedro, y Pedro lo levanta diciendo que él también es hombre; en Listra, la multitud quiere ofrecer sacrificios a Pablo y Bernabé, y ellos rasgan sus ropas para impedirlo. Pedro es liberado de la cárcel por un ángel; Pablo y Silas, por un terremoto mientras cantaban himnos a medianoche.',
        { h: 'Por qué Lucas destaca estos paralelos' },
        'Los paralelos no son casualidad ni invento literario: Lucas seleccionó, entre muchos hechos, aquellos que mostraban la misma obra de Dios en ambos apóstoles. Tienen al menos dos propósitos.',
        'Primero, muestran que Pablo, que no había sido uno de los doce y que antes persiguió a la iglesia, es un apóstol con la misma autoridad que Pedro. El mismo Espíritu respaldó a ambos con las mismas señales. Esto era importante en una iglesia donde algunos cuestionaban el apostolado de Pablo (1 Co 9:1-2; 2 Co 12:12).',
        'Segundo, muestran que el poder no estaba en los hombres, sino en el Señor. Las mismas sanidades, liberaciones y resurrecciones ocurren por medio de dos personas muy distintas, porque es el mismo Cristo quien obra por el mismo Espíritu. Ambos lo sabían, y por eso rechazaron cualquier honra que les quisieran dar.'
      ],
      pensar: 'Pedro y Pablo vieron grandes milagros, pero los dos se negaron a recibir la honra de la gente (Hch 10:26; 14:14-15). ¿Cómo puede un creyente que es usado por Dios guardar su corazón del orgullo?'
    },
    {
      id: 'parte-jerusalen', n: 'Primera parte: Jerusalén (1–7)', ref: 'Hechos 1–7', fecha: [30, 33],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-portico-salomon.webp', alt: 'Los apóstoles enseñan a una multitud en el pórtico de Salomón, una larga columnata de piedra en el atrio del templo de Jerusalén, con enfermos traídos en camillas a su alrededor', pie: 'Los apóstoles en el pórtico de Salomón (Hch 5:12-16).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Capítulos', tabla: {
          titulo: 'Capítulos 1 a 7',
          cab: ['Capítulo', 'Contenido'],
          filas: [
            ['1', 'Ascensión, espera en oración y elección de Matías'],
            ['2', 'Pentecostés, el sermón de Pedro y la primera iglesia'],
            ['3', 'Sanidad del cojo y segundo sermón de Pedro'],
            ['4', 'Primera persecución y oración que sacude el lugar'],
            ['5', 'Ananías y Safira, señales y segunda persecución'],
            ['6', 'Los siete servidores; Esteban es arrestado'],
            ['7', 'Discurso y muerte de Esteban']
          ]
        } }
      ],
      texto: [
        'La primera parte transcurre entera en Jerusalén y muestra a la iglesia en su primer amor. Comienza con ciento veinte personas que perseveran unánimes en oración y ruego (Hch 1:14), y termina con miles de creyentes y con el primer mártir.',
        'En el día de Pentecostés, cincuenta días después de la Pascua en que murió Jesús, «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). Pedro explica que se está cumpliendo la profecía de Joel y predica a Cristo crucificado y resucitado. Unas tres mil personas se arrepienten y se bautizan. El capítulo cierra con el retrato de la primera iglesia: perseverante en la doctrina, la comunión, el partimiento del pan y las oraciones (Hch 2:42).',
        'Los capítulos 3 a 5 alternan milagros y oposición. La sanidad de un cojo en la puerta del templo provoca un segundo sermón y el arresto de Pedro y Juan. Ante la amenaza, la iglesia no pide protección, sino denuedo, y el lugar tiembla: todos son llenos del Espíritu Santo (Hch 4:31). Dentro de la iglesia aparece el primer pecado grave, la mentira de Ananías y Safira, y Dios lo juzga con severidad. Las señales se multiplican y los apóstoles son encarcelados, liberados por un ángel y azotados, pero salen gozosos de haber sido tenidos por dignos de padecer por el nombre de Jesús (Hch 5:41).',
        'En el capítulo 6 surge un problema de administración: las viudas de los judíos de habla griega eran desatendidas. Los apóstoles proponen elegir a siete varones «llenos del Espíritu Santo y de sabiduría» (Hch 6:3). Uno de ellos, Esteban, hace grandes prodigios y es acusado ante el sanedrín. Su discurso, el más largo del libro, recorre la historia de Israel y muestra que el pueblo siempre resistió a los enviados de Dios. Esteban muere apedreado mientras ve al Hijo del Hombre a la diestra de Dios y perdona a sus verdugos. Un joven llamado Saulo cuida la ropa de los que lo matan (Hch 7:58).'
      ],
      pensar: 'Amenazada por las autoridades, la iglesia no pidió que se acabara la persecución, sino denuedo para seguir hablando (Hch 4:29-31). ¿Qué pides tú a Dios cuando tu fe enfrenta oposición?'
    },
    {
      id: 'parte-judea-samaria', n: 'Segunda parte: Judea y Samaria (8–12)', ref: 'Hechos 8–12', fecha: [33, 44],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-felipe-etiope.webp', alt: 'Felipe corre junto a un carro detenido en un camino del desierto y habla con un funcionario etíope que lee un rollo, mientras su escolta espera', pie: 'Felipe y el funcionario etíope en el camino a Gaza (Hch 8:26-39).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Capítulos', tabla: {
          titulo: 'Capítulos 8 a 12',
          cab: ['Capítulo', 'Contenido'],
          filas: [
            ['8', 'Persecución; Felipe en Samaria; el funcionario etíope'],
            ['9', 'Conversión de Saulo; Pedro sana a Eneas y resucita a Dorcas'],
            ['10', 'Pedro en casa de Cornelio: el Espíritu cae sobre los gentiles'],
            ['11', 'Pedro explica en Jerusalén; nace la iglesia de Antioquía'],
            ['12', 'Herodes mata a Jacobo; Pedro liberado; muerte de Herodes']
          ]
        } }
      ],
      texto: [
        'Tras la muerte de Esteban se desata una gran persecución, y todos, salvo los apóstoles, son esparcidos por Judea y Samaria. Pero «los que fueron esparcidos iban por todas partes anunciando el evangelio» (Hch 8:4). Lo que parecía una derrota se convierte en la salida misionera de la iglesia.',
        'Felipe, otro de los siete, predica en Samaria con grandes señales, y hay gran gozo en la ciudad. Los samaritanos creen y se bautizan, pero el Espíritu no ha descendido sobre ninguno de ellos; cuando Pedro y Juan llegan y les imponen las manos, reciben el Espíritu Santo (Hch 8:14-17). Luego el Espíritu envía a Felipe al camino de Gaza, donde un alto funcionario de la reina de Etiopía lee al profeta Isaías. Felipe le anuncia a Jesús, y el etíope se bautiza y sigue su camino gozoso.',
        'En el capítulo 9 ocurre la conversión más importante del libro. Saulo, que perseguía a la iglesia, se encuentra con Jesús resucitado en el camino a Damasco. Queda ciego tres días, hasta que Ananías ora por él: recobra la vista y es lleno del Espíritu Santo. El Señor lo llama «instrumento escogido… para llevar mi nombre en presencia de los gentiles» (Hch 9:15). Mientras tanto, Pedro recorre la región, sana a Eneas en Lida y resucita a Dorcas en Jope.',
        'Los capítulos 10 y 11 narran el gran giro del libro. Dios prepara por medio de visiones al centurión romano Cornelio y a Pedro. Mientras Pedro predica en casa de Cornelio, el Espíritu Santo cae sobre los gentiles que oyen, y hablan en lenguas (Hch 10:44-46). Pedro tiene que defender en Jerusalén lo ocurrido, y la iglesia reconoce que Dios ha dado también a los gentiles arrepentimiento para vida (Hch 11:18). En Antioquía de Siria nace una iglesia con muchos gentiles, y allí los discípulos son llamados cristianos por primera vez.',
        'El capítulo 12 cierra la sección con Herodes Agripa I, que mata a Jacobo y encarcela a Pedro. La iglesia ora sin cesar, un ángel libera a Pedro, y Herodes muere herido por el Señor por no dar la gloria a Dios.'
      ],
      pensar: 'Dios guio a Felipe hasta un solo hombre en un camino del desierto (Hch 8:26-29). ¿Qué te dice esto sobre el valor que tiene para Dios una sola persona, y sobre tu disposición a obedecer la guía del Espíritu?'
    },
    {
      id: 'parte-viajes', n: 'Tercera parte (I): los viajes (13–21:16)', ref: 'Hechos 13:1–21:16', fecha: [46, 57],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-griego/img/grecia-pablo-areopago.webp', foco: '62% 50%', alt: 'El apóstol Pablo predica de pie en el Areópago de Atenas ante filósofos griegos, con la Acrópolis al fondo', pie: 'Pablo en el Areópago de Atenas (Hch 17:22).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Capítulos', tabla: {
          titulo: 'Capítulos 13 a 21:16',
          cab: ['Pasaje', 'Contenido'],
          filas: [
            ['13–14', 'Primer viaje: Chipre y Galacia'],
            ['15:1-35', 'El concilio de Jerusalén'],
            ['15:36–18:22', 'Segundo viaje: Macedonia y Acaya'],
            ['18:23–21:16', 'Tercer viaje: Éfeso, Macedonia y regreso a Jerusalén']
          ]
        } }
      ],
      texto: [
        'La tercera parte comienza en Antioquía. Mientras los profetas y maestros de la iglesia ministran al Señor y ayunan, el Espíritu Santo dice: «Apartadme a Bernabé y a Saulo para la obra a que los he llamado» (Hch 13:2). Desde entonces, Antioquía reemplaza a Jerusalén como base misionera.',
        { h: 'El primer viaje (capítulos 13 y 14)' },
        'Bernabé y Saulo, a quien desde ahora Lucas llama Pablo, recorren Chipre y las ciudades de Galacia del sur: Antioquía de Pisidia, Iconio, Listra y Derbe. En cada ciudad predican primero en la sinagoga, y cuando los judíos rechazan el mensaje, se vuelven a los gentiles. Sufren persecución, y en Listra Pablo es apedreado y dado por muerto, pero se levanta y sigue. A su regreso cuentan «cuán grandes cosas había hecho Dios con ellos, y cómo había abierto la puerta de la fe a los gentiles» (Hch 14:27).',
        { h: 'El concilio de Jerusalén (capítulo 15)' },
        'Algunos enseñan que los gentiles deben circuncidarse y guardar la ley de Moisés para ser salvos. Los apóstoles y ancianos se reúnen en Jerusalén, y Pedro declara: «creemos que por la gracia del Señor Jesús seremos salvos, de igual modo que ellos» (Hch 15:11). La decisión, comunicada en una carta, libera a los gentiles del yugo de la ley.',
        { h: 'El segundo viaje (15:36–18:22)' },
        'Pablo y Silas visitan las iglesias de Galacia, se suma Timoteo, y el Espíritu les impide predicar en Asia. En Troas, una visión llama a Pablo a Macedonia, y el evangelio entra en Europa: Filipos, Tesalónica, Berea, Atenas y Corinto, donde Pablo se queda año y medio.',
        { h: 'El tercer viaje (18:23–21:16)' },
        'Pablo se establece casi tres años en Éfeso. Allí doce discípulos reciben el Espíritu Santo, hablan en lenguas y profetizan (Hch 19:6), y la palabra se extiende por toda la provincia de Asia. Después de un tumulto en el teatro, visita Macedonia y Grecia, se despide de los ancianos de Éfeso en Mileto y sube a Jerusalén, advertido por el Espíritu de que le esperan prisiones.'
      ],
      pensar: 'El Espíritu le cerró a Pablo la puerta de Asia antes de abrirle la de Macedonia (Hch 16:6-10). ¿Cómo puede un «no» de Dios ser parte de su dirección para tu vida?'
    },
    {
      id: 'parte-roma', n: 'Tercera parte (II): preso hasta Roma (21:17–28)', ref: 'Hechos 21:17–28:31', fecha: [57, 62],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-naufragio.webp', alt: 'Un barco romano naufraga en medio de una tormenta junto a la costa rocosa de Malta', pie: 'El naufragio en Malta (Hch 27).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Capítulos', tabla: {
          titulo: 'Capítulos 21:17 a 28',
          cab: ['Pasaje', 'Contenido'],
          filas: [
            ['21:17–23:35', 'Arresto en el templo, defensa ante el pueblo y el sanedrín; traslado a Cesarea'],
            ['24', 'Ante el gobernador Félix; dos años de prisión'],
            ['25–26', 'Ante Festo y el rey Agripa; apelación al César'],
            ['27', 'Viaje por mar y naufragio'],
            ['28', 'Malta, llegada a Roma y dos años de predicación']
          ]
        } }
      ],
      texto: [
        'Los últimos ocho capítulos ocupan casi un tercio del libro, y en ellos Pablo está preso. Lucas les dedica tanto espacio porque muestran algo esencial: el evangelio avanza también por medio de las cadenas.',
        'En Jerusalén, algunos judíos de Asia acusan a Pablo de profanar el templo, y una turba intenta matarlo. El tribuno romano lo rescata. Pablo da su testimonio ante el pueblo, en lengua hebrea, y luego ante el sanedrín. Esa noche, el Señor se le presenta y le dice: «Ten ánimo, Pablo, pues como has testificado de mí en Jerusalén, así es necesario que testifiques también en Roma» (Hch 23:11). Descubierta una conspiración para matarlo, es enviado con escolta a Cesarea.',
        'En Cesarea comparece ante el gobernador Félix, que lo deja preso dos años esperando un soborno. Su sucesor, Festo, propone juzgarlo en Jerusalén, y Pablo, sabiendo que allí lo matarían, apela al César. Antes de enviarlo, Festo lo presenta al rey Agripa II, y Pablo cuenta por tercera vez en el libro su encuentro con Cristo. Todos concluyen que no ha hecho nada digno de muerte ni de prisión.',
        { h: 'El naufragio y la llegada a Roma' },
        'El capítulo 27 es uno de los relatos de navegación más detallados de la antigüedad. Contra el consejo de Pablo, el barco zarpa en mala estación, y una tempestad lo arrastra catorce días. Un ángel asegura a Pablo que nadie morirá, y él anima a los doscientos setenta y seis tripulantes y pasajeros. El barco se destroza en la costa de Malta, pero todos llegan a salvo a tierra.',
        'En Malta, Pablo sobrevive a la mordedura de una víbora y sana al padre de Publio y a muchos enfermos de la isla. Tres meses después llega a Roma, donde los hermanos salen a recibirlo. Allí habla primero con los principales de los judíos, y luego pasa dos años en una casa alquilada predicando a todos los que vienen. La promesa de Hechos 23:11 se ha cumplido.'
      ],
      pensar: 'El Señor prometió a Pablo que testificaría en Roma, y luego vinieron dos años de prisión, un juicio y un naufragio (Hch 23:11; 27). ¿Cómo te ayuda este relato a seguir confiando en una promesa de Dios cuando el camino para cumplirse parece ir en dirección contraria?'
    },
    {
      id: 'palabras-clave', n: 'Palabras clave', ref: 'Hechos 1:8; 2:4; 4:12; 6:7', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Palabras', tabla: {
          titulo: 'Palabras que Hechos repite (RV 1960)',
          cab: ['Palabra', 'Veces en Hechos', 'Ejemplo'],
          filas: [
            ['Señor', '107', '«Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús… Dios le ha hecho Señor y Cristo» (Hch 2:36)'],
            ['Espíritu (de Dios)', '54', 'Hch 2:4; 8:29; 13:2'],
            ['Palabra', '63', '«Crecía la palabra del Señor» (Hch 6:7)'],
            ['Nombre', '35', '«No hay otro nombre bajo el cielo» (Hch 4:12)'],
            ['Testigo, testimonio', '29', '«Me seréis testigos» (Hch 1:8)'],
            ['Orar, oración', '23', 'Hch 1:14; 4:31; 12:5'],
            ['Iglesia', '20', 'Hch 2:47; 9:31; 20:28'],
            ['Resurrección, resucitar', '18', 'Hch 4:2; 17:18'],
            ['Señales y prodigios', '18', 'Hch 2:43; 5:12; 14:3'],
            ['Gracia', '14', 'Hch 15:11; 20:24']
          ],
          nota: 'Conteo automático sobre el texto de la RV 1960 de este sitio; incluye plurales y formas verbales. «Señor» incluye los usos referidos a Dios Padre.'
        } }
      ],
      texto: [
        'Una buena manera de descubrir lo que un autor quiere enseñar es observar qué palabras repite. En Hechos, algunas palabras aparecen tantas veces que funcionan como hilos que atraviesan todo el libro.',
        'La más frecuente es Señor. Jesús, el crucificado, ha sido exaltado: «Dios le ha hecho Señor y Cristo» (Hch 2:36). Los creyentes invocan su nombre, le obedecen y esperan su regreso.',
        'Después está el Espíritu. Con mayúscula, referido al Espíritu de Dios, aparece 54 veces. Es la palabra que mejor define el libro: el Espíritu llena, dirige, envía y capacita.',
        'La palabra aparece 63 veces, muchas de ellas como «la palabra de Dios» o «la palabra del Señor». En Hechos, la palabra casi parece tener vida propia: crece, se multiplica y prevalece (Hch 6:7; 12:24; 19:20). Es el mensaje del evangelio que avanza por medio de los testigos.',
        'El nombre de Jesús aparece en el centro de la predicación y de los milagros. El cojo es sanado en el nombre de Jesús (Hch 3:6); los creyentes se bautizan en su nombre (Hch 2:38), y Pedro declara ante el sanedrín: «no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos» (Hch 4:12).',
        'Testigo es la palabra del versículo clave. Los apóstoles son testigos de la resurrección (Hch 2:32; 3:15), y Pablo recibe el encargo de ser testigo de Cristo ante todos los hombres (Hch 22:15).',
        'Completan el cuadro la oración, que precede los grandes momentos del libro; la iglesia, la comunidad de los creyentes; la resurrección, el centro del mensaje que despertaba la oposición de los saduceos y la burla de los filósofos; las señales y prodigios, con que el Señor confirmaba la palabra de su gracia (Hch 14:3), y la gracia misma, por la cual judíos y gentiles son salvos de igual modo (Hch 15:11).'
      ],
      pensar: 'En Hechos, la palabra de Dios «crecía» y «prevalecía» como si tuviera vida propia (Hch 12:24; 19:20). ¿Qué lugar ocupa la palabra de Dios en tu vida diaria, y cómo puede crecer por medio de ti?'
    },
    {
      id: 'versiculos-clave', n: 'Versículos clave', ref: 'Hechos 1:8; 2:4; 2:38-39; 2:42; 4:12; 13:2; 16:31; 20:24; 28:31', fecha: [30, 62],
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.', ref: 'Hechos 2:4' },
        { tipo: 'tabla', titulo: 'Diez versículos', tabla: {
          titulo: 'Diez versículos para recordar',
          cab: ['Versículo', 'Tema'],
          filas: [
            ['Hch 1:8', 'El poder del Espíritu para testificar'],
            ['Hch 2:4', 'La llenura del Espíritu y las lenguas'],
            ['Hch 2:38-39', 'Arrepentimiento, bautismo y la promesa para todos'],
            ['Hch 2:42', 'La vida de la iglesia'],
            ['Hch 4:12', 'Solo en Cristo hay salvación'],
            ['Hch 4:31', 'Oración y denuedo'],
            ['Hch 13:2', 'El Espíritu envía misioneros'],
            ['Hch 16:31', 'Cree en el Señor Jesucristo'],
            ['Hch 20:24', 'Terminar la carrera con gozo'],
            ['Hch 28:31', 'Abiertamente y sin impedimento']
          ]
        } }
      ],
      texto: [
        'Algunos versículos de Hechos resumen su mensaje de una manera tan clara que vale la pena aprenderlos de memoria.',
        'El primero es Hechos 1:8, el versículo clave del libro, con su promesa de poder y su encargo de testificar hasta lo último de la tierra. Junto a él está Hechos 2:4, su cumplimiento: «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen».',
        'En el mismo capítulo, Pedro responde a quienes preguntan qué deben hacer: «Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo. Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hch 2:38-39). Es el llamado del evangelio y la promesa del Espíritu para cada generación.',
        'Hechos 2:42 describe la vida de la primera iglesia: «perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones». Hechos 4:12 contiene el centro del mensaje: «en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos». Y Hechos 4:31 muestra a la iglesia que ora en medio de la amenaza y vuelve a ser llena del Espíritu para hablar con denuedo.',
        'Hechos 13:2 recuerda que la misión nace del Espíritu: «Apartadme a Bernabé y a Saulo para la obra a que los he llamado». Hechos 16:31 es la respuesta más breve a la pregunta más importante: «Cree en el Señor Jesucristo, y serás salvo, tú y tu casa».',
        'Hechos 20:24 es el lema de un siervo: «de ninguna cosa hago caso, ni estimo preciosa mi vida para mí mismo, con tal que acabe mi carrera con gozo, y el ministerio que recibí del Señor Jesús». Y el último versículo del libro deja el evangelio avanzando «abiertamente y sin impedimento» (Hch 28:31).'
      ],
      pensar: 'Pablo dijo que no estimaba preciosa su vida, con tal de acabar su carrera con gozo y cumplir el ministerio que recibió del Señor (Hch 20:24). ¿Qué cosas tendrías que dejar de considerar «preciosas» para cumplir lo que Dios te ha encomendado?'
    },
    {
      id: 'temas', n: 'Los grandes temas', ref: 'Hechos 1:8; 2:17-21; 4:12; 10:34-35; 14:22; 15:14-17', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Temas', tabla: {
          titulo: 'Siete temas que atraviesan el libro',
          cab: ['Tema', 'Pasajes representativos'],
          filas: [
            ['El Espíritu Santo y su poder', 'Hch 1:8; 2:4; 4:31; 8:17; 10:44-46; 13:2; 19:6'],
            ['El testimonio de Cristo resucitado', 'Hch 2:32; 3:15; 4:20, 33; 22:15'],
            ['La iglesia', 'Hch 2:42-47; 4:32-35; 6:1-7; 14:23; 20:28'],
            ['El evangelio para todas las naciones', 'Hch 2:39; 10:34-35; 13:47; 15:7-11; 28:28'],
            ['Señales y prodigios', 'Hch 2:43; 3:6-8; 5:12-16; 14:3; 19:11-12'],
            ['La oposición y la soberanía de Dios', 'Hch 4:27-28; 5:38-39; 12:23-24; 14:22'],
            ['El reino de Dios y la esperanza', 'Hch 1:3, 6-11; 3:19-21; 15:14-17; 28:31']
          ]
        } }
      ],
      texto: [
        'Siete grandes temas atraviesan Hechos de principio a fin. Cada uno tendrá su propio desarrollo en las rutas de teología y de temas; aquí se presentan en conjunto.',
        'El primero es el Espíritu Santo y su poder. El libro comienza con la promesa del bautismo en el Espíritu y la narra cumplida una y otra vez: en Jerusalén, en Samaria, en Damasco, en Cesarea y en Éfeso. La llenura del Espíritu no es un hecho aislado, sino una experiencia que se repite y se renueva (Hch 4:31).',
        'El segundo es el testimonio de Cristo resucitado. La resurrección está en el centro de todos los sermones: Dios levantó a Jesús, de lo cual los apóstoles son testigos. Por anunciarla fueron arrestados en Jerusalén y despreciados en Atenas.',
        'El tercero es la iglesia: una comunidad que persevera en la enseñanza, la comunión, la oración y la generosidad; que resuelve sus problemas con la guía del Espíritu y que se organiza con ancianos y servidores.',
        'El cuarto es el evangelio para todas las naciones. Pedro descubre que «Dios no hace acepción de personas» (Hch 10:34), y el concilio confirma que judíos y gentiles se salvan de igual manera, por la gracia del Señor Jesús.',
        'El quinto son las señales y prodigios con que el Señor daba testimonio a la palabra de su gracia (Hch 14:3). Las sanidades y liberaciones acompañan la predicación en todo el libro.',
        'El sexto es la soberanía de Dios en medio de la oposición. Cárceles, azotes, apedreamientos, conspiraciones y naufragios no detienen el plan de Dios; al contrario, lo hacen avanzar. Pablo lo resume: «es necesario que a través de muchas tribulaciones entremos en el reino de Dios» (Hch 14:22).',
        'El séptimo es el reino de Dios y la esperanza. El libro comienza y termina hablando del reino de Dios (Hch 1:3; 28:31). Los ángeles anuncian que Jesús volverá como se fue (Hch 1:11), y Dios todavía tiene un propósito con Israel: después de tomar de los gentiles un pueblo para su nombre, reedificará el tabernáculo de David (Hch 15:14-16).'
      ],
      pensar: 'Hechos comienza y termina hablando del reino de Dios (Hch 1:3; 28:31), y entre ambos extremos anuncia que Jesús volverá (Hch 1:11). ¿Cómo debería influir la esperanza de su regreso en la manera en que vives y testificas hoy?'
    },
    {
      id: 'en-la-biblia', n: 'Hechos en toda la Biblia', ref: 'Joel 2:28-32; Hechos 2:16-21; 13:47; 15:15-17', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Profecías', tabla: {
          titulo: 'El Antiguo Testamento cumplido en Hechos',
          cab: ['Pasaje', 'Lo que anuncia', 'Cumplimiento en Hechos'],
          filas: [
            ['Joel 2:28-32', 'El derramamiento del Espíritu', 'Pentecostés (Hch 2:16-21)'],
            ['Salmo 16:8-11', 'El Santo no verá corrupción', 'La resurrección de Jesús (Hch 2:25-31; 13:35)'],
            ['Salmo 110:1', '«Siéntate a mi diestra»', 'La exaltación de Jesús (Hch 2:34-35)'],
            ['Salmo 118:22', 'La piedra desechada', 'Jesús rechazado y exaltado (Hch 4:11)'],
            ['Isaías 53:7-8', 'Como oveja a la muerte', 'El etíope lee a Isaías (Hch 8:32-35)'],
            ['Isaías 49:6', 'Luz de los gentiles', 'La misión a los gentiles (Hch 13:47)'],
            ['Amós 9:11-12', 'El tabernáculo de David', 'El concilio de Jerusalén (Hch 15:15-17)']
          ]
        } }
      ],
      texto: [
        'Hechos es el libro que une el Antiguo Testamento, los Evangelios y las cartas.',
        'Con el Antiguo Testamento, porque los apóstoles predican que lo ocurrido es cumplimiento de las Escrituras. Pedro explica Pentecostés con el profeta Joel: «esto es lo dicho por el profeta Joel: Y en los postreros días, dice Dios, derramaré de mi Espíritu sobre toda carne» (Hch 2:16-17). Prueba la resurrección con el Salmo 16 y la exaltación con el Salmo 110. Pablo justifica la misión a los gentiles con Isaías: «Te he puesto para luz de los gentiles, a fin de que seas para salvación hasta lo último de la tierra» (Hch 13:47). Y Jacobo resuelve el concilio con el profeta Amós. La iglesia no inventó un mensaje nuevo: anunció el cumplimiento de lo que Dios había prometido.',
        'Con los Evangelios, porque Hechos es el segundo tomo de Lucas y continúa la historia donde los Evangelios la dejan. La promesa de Jesús de enviar al Consolador (Jn 14:16-17; 16:7) y el encargo de ir y hacer discípulos a todas las naciones (Mt 28:19) se cumplen en Hechos.',
        'Con las cartas, porque Hechos les da su marco histórico. Sin Hechos, no sabríamos cómo nació la iglesia de Filipos a la que Pablo escribe con tanto cariño, ni por qué tuvo que salir tan pronto de Tesalónica, ni cuánto tiempo pasó en Corinto y en Éfeso. Las cartas, a su vez, completan lo que Hechos cuenta: muestran los problemas, las enseñanzas y la vida interna de esas iglesias. El recurso Los viajes de Pablo ubica cada carta en su contexto.',
        { h: 'Lo que sigue' },
        'Con esta visión panorámica ya tienes el mapa del libro. La ruta Comentario capítulo por capítulo lo recorre de principio a fin, y la ruta Teología de Hechos ordena su enseñanza sobre el Espíritu Santo, Cristo, la iglesia y los últimos tiempos.'
      ],
      pensar: 'Pedro dijo que el derramamiento del Espíritu ocurre «en los postreros días» (Hch 2:17), y que alcanza a hijos e hijas, jóvenes y ancianos. ¿Qué significa para tu vida que estemos viviendo en esos postreros días?'
    }
  ];

  /* ---------------- Ruta V · La expansión de la iglesia ---------------- */
  const JUDEA = [[30.9, 33.9], [33.0, 36.4]];
  const LEVANTE = [[30.6, 32.0], [37.6, 38.6]];
  const ASIA_MENOR = [[34.2, 29.0], [39.6, 37.2]];
  const EGEO = [[33.5, 20.0], [42.2, 37.0]];
  const PENTECOSTES = [[22.0, 8.0], [46.0, 60.0]];
  const MUNDO = [[18.0, -12.0], [48.0, 48.0]];
  const expansion = [
    {
      id: 'promesa', n: 'Un mapa trazado por Jesús', ref: 'Hechos 1:8; 2:5-11', fecha: 30,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Jerusalén, el día de Pentecostés.', fecha: 30,
            estado: { view: JUDEA, capas: ['roma-14', 'iglesia-30'], lugares: ['jerusalen'] } },
          { t: 'Las naciones de donde venían los que oyeron hablar en su propia lengua (Hch 2:9-11).', fecha: 30,
            estado: { view: PENTECOSTES, capas: ['roma-14', 'iglesia-30'], lugares: ['jerusalen', 'r-partia', 'r-media', 'r-elam', 'r-mesopotamia', 'r-capadocia', 'r-ponto', 'r-asia', 'r-frigia', 'r-panfilia', 'r-egipto', 'r-libia', 'r-roma', 'r-creta', 'r-arabia'] } }
        ] }
      ],
      texto: [
        'Antes de ascender, Jesús trazó el mapa de la misión: «me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Esta ruta sigue ese mapa paso a paso, desde el aposento de Jerusalén hasta Roma, y mira más allá, hacia lo que el libro deja abierto.',
        'El orden de la promesa no es solo geográfico; también es espiritual. Jerusalén era el centro de la fe de Israel. Judea era su territorio. Samaria era la región de un pueblo mezclado y despreciado por los judíos, con su propio templo y sus propias Escrituras. Y lo último de la tierra eran los gentiles, las naciones paganas. Cada círculo exigía a la iglesia cruzar una barrera más difícil que la anterior.',
        { h: 'Un anticipo el día de Pentecostés' },
        'El mismo día en que nació la iglesia, Dios dio una señal del alcance que tendría la misión. En Jerusalén estaban «judíos, varones piadosos, de todas las naciones bajo el cielo» (Hch 2:5), que habían subido a la fiesta. Lucas los enumera de oriente a occidente: partos, medos y elamitas, de más allá del Éufrates; habitantes de Mesopotamia, de Judea, de Capadocia, del Ponto y de Asia, de Frigia y Panfilia, de Egipto y de las regiones de África más allá de Cirene, romanos, cretenses y árabes (Hch 2:9-11).',
        'Todos ellos oyeron a los discípulos, galileos sin estudios, hablar en sus propias lenguas las maravillas de Dios. En Babel, Dios había confundido las lenguas y esparcido a los pueblos (Gn 11:7-9); en Pentecostés, el Espíritu dio lenguas para reunir a los pueblos en torno a Cristo.',
        'Muchos de esos peregrinos volvieron a sus tierras después de la fiesta. Es probable que algunos de los tres mil que creyeron ese día llevaran el evangelio a sus ciudades antes de que llegara ningún apóstol. Por eso, cuando Pablo llegó a Roma, ya había hermanos esperándolo (Hch 28:15).',
        'Usa los botones bajo el mapa para ver Jerusalén y luego las naciones de Pentecostés. Las ubicaciones de las regiones son aproximadas. En todos los mapas de esta ruta, el rojo es el imperio romano y el verde es la iglesia: en cada estación verás cómo el área verde crece sobre el imperio, siempre en zonas aproximadas, alrededor de los lugares donde Hechos registra creyentes o iglesias. La última estación muestra toda la evolución seguida.'
      ],
      pensar: 'En Pentecostés, el Espíritu dio a los discípulos la capacidad de hablar las lenguas de los pueblos que estaban en Jerusalén (Hch 2:6-8). ¿Qué te enseña esto sobre el deseo de Dios de que su mensaje llegue a cada persona en su propia lengua y cultura?'
    },
    {
      id: 'jerusalen', n: 'Jerusalén, la iglesia madre', ref: 'Hechos 1:15; 2:41, 47; 4:4; 5:14; 6:1, 7; 21:20', fecha: [30, 33],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: JUDEA, capas: ['roma-14', 'iglesia-30'], lugares: ['jerusalen', 'belen', 'jope', 'samaria'] } },
        { tipo: 'tabla', titulo: 'Crecimiento', tabla: {
          titulo: 'El crecimiento de la iglesia en Jerusalén',
          cab: ['Pasaje', 'Lo que dice Lucas'],
          filas: [
            ['Hch 1:15', 'Los reunidos eran como ciento veinte'],
            ['Hch 2:41', 'Se añadieron aquel día como tres mil personas'],
            ['Hch 2:47', 'El Señor añadía cada día a la iglesia los que habían de ser salvos'],
            ['Hch 4:4', 'El número de los varones era como cinco mil'],
            ['Hch 5:14', 'Gran número así de hombres como de mujeres'],
            ['Hch 6:7', 'Se multiplicaba grandemente; también muchos sacerdotes'],
            ['Hch 21:20', 'Millares de judíos que han creído']
          ]
        } }
      ],
      texto: [
        'Durante los primeros años, la iglesia vivió entera en Jerusalén. No fue una etapa de espera, sino de crecimiento extraordinario. Lucas va dejando cifras que muestran el avance: de ciento veinte reunidos en oración (Hch 1:15) a tres mil bautizados el día de Pentecostés (Hch 2:41), y a cinco mil varones poco después (Hch 4:4), sin contar mujeres ni niños.',
        'Después, Lucas deja de contar. Ya no dice cuántos eran, sino que «los que creían en el Señor aumentaban más, gran número así de hombres como de mujeres» (Hch 5:14). Llegaron a creer «muchos de los sacerdotes» (Hch 6:7), los mismos que servían en el templo que había condenado a Jesús. Años más tarde, Jacobo pudo decirle a Pablo que en Jerusalén había «millares de judíos» que habían creído (Hch 21:20).',
        { h: 'Por qué Jerusalén primero' },
        'Jesús pudo haber enviado a los discípulos de inmediato a las naciones, pero los mandó comenzar en Jerusalén. Era la ciudad donde lo habían crucificado, y donde nadie podía negar que su tumba estaba vacía. Allí, los mismos que gritaron «crucifícale» oyeron el anuncio de la resurrección y se arrepintieron.',
        'Además, Dios cumplía su palabra con Israel. Pedro les dijo: «A vosotros primeramente, Dios, habiendo levantado a su Hijo, lo envió para que os bendijese» (Hch 3:26). El evangelio fue ofrecido primero al pueblo de las promesas, y desde allí se extendió a las naciones.',
        'La iglesia de Jerusalén fue la iglesia madre. Desde allí se enviaron a Pedro y Juan a Samaria, y a Bernabé a Antioquía; allí se reunió el concilio, y a ella llevaron Pablo y sus compañeros la ofrenda de las iglesias gentiles. Pero el Señor no quería que el evangelio se quedara en Jerusalén, y como veremos, usó un medio inesperado para hacerlo salir.'
      ],
      pensar: 'El Señor «añadía cada día a la iglesia los que habían de ser salvos» (Hch 2:47). ¿Qué te enseña esa frase sobre quién produce el crecimiento verdadero de una iglesia, y qué le toca hacer a los creyentes?'
    },
    {
      id: 'samaria', n: 'La dispersión y Samaria', ref: 'Hechos 8:1-25', fecha: 34,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: JUDEA, capas: ['roma-14', 'iglesia-34'], lugares: ['jerusalen', 'samaria'], trazos: ['hch-samaria'] } }
      ],
      texto: [
        'La muerte de Esteban marcó un cambio. «En aquel día hubo una gran persecución contra la iglesia que estaba en Jerusalén; y todos fueron esparcidos por las tierras de Judea y de Samaria, salvo los apóstoles» (Hch 8:1). Saulo entraba casa por casa y llevaba a hombres y mujeres a la cárcel.',
        'Parecía el fin de la iglesia. Pero Lucas añade enseguida: «los que fueron esparcidos iban por todas partes anunciando el evangelio» (Hch 8:4). La palabra griega que usa para «esparcidos» se emplea para la semilla que se siembra. La persecución no destruyó la iglesia: la sembró por toda la región. Lo que Jesús había mandado en Hechos 1:8 comenzó a cumplirse por medio de lo que parecía una derrota.',
        { h: 'El evangelio cruza la primera barrera' },
        'Felipe, uno de los siete servidores elegidos en el capítulo 6, descendió a la ciudad de Samaria y «les predicaba a Cristo» (Hch 8:5). Judíos y samaritanos se despreciaban desde hacía siglos. Los samaritanos descendían de la mezcla de israelitas con los pueblos que Asiria trajo a la región, tenían su propio templo en el monte Gerizim y solo aceptaban los cinco libros de Moisés. Un judío evitaba incluso pasar por su territorio (Jn 4:9).',
        'Sin embargo, la gente escuchaba con atención, viendo las señales que Felipe hacía: los espíritus inmundos salían dando grandes voces, y muchos paralíticos y cojos eran sanados, «así que había gran gozo en aquella ciudad» (Hch 8:8).',
        'Cuando los apóstoles supieron que Samaria había recibido la palabra de Dios, enviaron a Pedro y a Juan. Ellos oraron por los samaritanos, les impusieron las manos, y recibieron el Espíritu Santo (Hch 8:14-17). Así, la iglesia de Jerusalén reconoció a los samaritanos como parte del mismo pueblo de Dios, con el mismo Espíritu. Juan, que una vez quiso pedir fuego del cielo contra una aldea samaritana (Lc 9:52-54), ahora oraba para que recibieran el fuego del Espíritu. De regreso, Pedro y Juan predicaron el evangelio «en muchas poblaciones de los samaritanos» (Hch 8:25).'
      ],
      pensar: 'Juan, que antes quiso pedir fuego del cielo contra los samaritanos (Lc 9:54), terminó orando para que recibieran el Espíritu Santo (Hch 8:14-17). ¿Hay personas o grupos hacia los que necesitas que Dios cambie tu corazón?'
    },
    {
      id: 'etiope', n: 'Hacia el sur: el etíope', ref: 'Hechos 8:26-40', fecha: 34,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: JUDEA, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'gaza', 'asdod', 'jope', 'cesarea'], trazos: ['hch-felipe'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-felipe-etiope.webp', alt: 'Felipe corre junto a un carro detenido en un camino del desierto y habla con un funcionario etíope que lee un rollo, mientras su escolta espera', pie: 'Felipe y el funcionario etíope (Hch 8:29-30).', origen: 'ia' }
      ],
      texto: [
        'En medio del avivamiento de Samaria, un ángel del Señor le dio a Felipe una orden extraña: «Levántate y ve hacia el sur, por el camino que desciende de Jerusalén a Gaza, el cual es desierto» (Hch 8:26). Dejar una ciudad entera que se convertía para ir a un camino vacío no parecía lógico. Pero Felipe «se levantó y fue» (Hch 8:27).',
        'En ese camino viajaba un etíope, alto funcionario de Candace, reina de los etíopes, encargado de todos sus tesoros. La Etiopía de la Biblia no es la actual, sino el reino de Kush, al sur de Egipto, en lo que hoy es Sudán. Para un lector del siglo I, era uno de los confines del mundo conocido. El funcionario había ido a Jerusalén a adorar al Dios de Israel y volvía leyendo en voz alta al profeta Isaías.',
        'El Espíritu le dijo a Felipe que se acercara al carro. El etíope leía el pasaje del siervo que es llevado como oveja al matadero (Is 53:7-8), y no entendía de quién hablaba el profeta. Felipe, «comenzando desde esta escritura, le anunció el evangelio de Jesús» (Hch 8:35). Al ver agua junto al camino, el etíope pidió ser bautizado.',
        { h: 'El evangelio hacia África' },
        'Después del bautismo, «el Espíritu del Señor arrebató a Felipe; y el eunuco no le vio más, y siguió gozoso su camino» (Hch 8:39). Lucas no cuenta lo que pasó después con él, pero el evangelio iba ahora rumbo al sur, hacia el corazón de África, en el carro de un alto funcionario de una reina extranjera.',
        'Felipe apareció en Azoto, la antigua Asdod de los filisteos, y siguió predicando en todas las ciudades de la costa hasta llegar a Cesarea (Hch 8:40). Allí se estableció, y allí lo encontraremos veinte años después, con su familia, recibiendo a Pablo en su casa (Hch 21:8-9).',
        'El relato muestra que la expansión de la iglesia no fue solo un plan humano de misiones, sino una obra dirigida paso a paso por el Espíritu Santo. A veces, el Espíritu lleva a sus siervos de una multitud a una sola persona.'
      ],
      pensar: 'Felipe obedeció sin preguntar por qué debía dejar una ciudad entera para ir a un camino desierto (Hch 8:26-27). ¿Qué tan dispuesto estás a obedecer la dirección del Espíritu cuando no entiendes el motivo?'
    },
    {
      id: 'damasco', n: 'Hacia el norte: Damasco y Tarso', ref: 'Hechos 9:1-31; Gálatas 1:15-24', fecha: [34, 37],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Saulo va de Jerusalén a Damasco a perseguir a los creyentes, y se encuentra con Cristo (Hch 9:1-19).', fecha: 34,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-36'], lugares: ['jerusalen', 'damasco'], trazos: ['hch-damasco'] } },
          { t: 'Después de predicar en Damasco y en Jerusalén, los hermanos lo envían por Cesarea a Tarso, su ciudad natal (Hch 9:30).', fecha: 37,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-37'], lugares: ['jerusalen', 'damasco', 'cesarea', 'tarso'] } }
        ] }
      ],
      texto: [
        'Mientras Felipe llevaba el evangelio al sur, el principal perseguidor de la iglesia se dirigía al norte. Saulo, «respirando aún amenazas y muerte contra los discípulos del Señor» (Hch 9:1), pidió al sumo sacerdote cartas para las sinagogas de Damasco, a fin de traer presos a Jerusalén a los que fueran «de este Camino» (Hch 9:2). El dato muestra que el evangelio ya había llegado a Damasco, a más de doscientos kilómetros de Jerusalén, fuera de la tierra de Israel.',
        'Cerca de la ciudad, una luz del cielo lo rodeó, y oyó una voz: «Saulo, Saulo, ¿por qué me persigues?» Era Jesús resucitado. Saulo entró en Damasco ciego, guiado de la mano, y estuvo tres días sin comer ni beber. Entonces el Señor envió a un discípulo llamado Ananías, que le impuso las manos para que recobrara la vista y fuera lleno del Espíritu Santo (Hch 9:17).',
        { h: 'De perseguidor a predicador' },
        'El cambio fue inmediato: «En seguida predicaba a Cristo en las sinagogas, diciendo que éste era el Hijo de Dios» (Hch 9:20). En la carta a los Gálatas, Pablo agrega que fue a Arabia y volvió a Damasco, y que solo tres años después subió a Jerusalén (Gá 1:17-18). En Damasco, los judíos quisieron matarlo, y los discípulos lo bajaron de noche por el muro en una canasta.',
        'En Jerusalén, los discípulos le tenían miedo, hasta que Bernabé lo presentó a los apóstoles. Cuando también allí intentaron matarlo, los hermanos lo llevaron a Cesarea y lo enviaron a Tarso, la ciudad de Cilicia donde había nacido (Hch 9:30). Allí pasó varios años de los que Hechos no cuenta nada. Pablo dice que después fue «a las regiones de Siria y de Cilicia» (Gá 1:21), y es probable que predicara allí.',
        'Lucas cierra la sección con un resumen: «las iglesias tenían paz por toda Judea, Galilea y Samaria; y eran edificadas, andando en el temor del Señor, y se acrecentaban fortalecidas por el Espíritu Santo» (Hch 9:31). El que había venido a destruir la iglesia ahora era el instrumento escogido para llevarla a los gentiles.'
      ],
      pensar: 'Dios escogió al mayor perseguidor de la iglesia para que fuera su apóstol a las naciones (Hch 9:15). ¿Hay alguien a quien hayas considerado demasiado lejos de Dios como para convertirse? ¿Qué te dice la historia de Saulo sobre esa persona?'
    },
    {
      id: 'pedro-costa', n: 'Hacia el oeste: Lida, Jope y Cesarea', ref: 'Hechos 9:32–11:18', fecha: [38, 40],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: JUDEA, capas: ['roma-14', 'iglesia-40'], lugares: ['jerusalen', 'lida', 'jope', 'cesarea'], trazos: ['hch-pedro'] } }
      ],
      texto: [
        'Mientras Saulo estaba en Tarso, Pedro recorría las iglesias de Judea. En Lida sanó a Eneas, un paralítico que llevaba ocho años en cama, y «le vieron todos los que habitaban en Lida y en Sarón, los cuales se convirtieron al Señor» (Hch 9:35). En Jope, el puerto principal de Judea, oró por Dorcas, una discípula que había muerto, y Dios la resucitó. «Esto fue notorio en toda Jope, y muchos creyeron en el Señor» (Hch 9:42).',
        'Pedro se quedó muchos días en Jope, en casa de Simón, un curtidor. El detalle no es menor: los curtidores trabajaban con pieles de animales muertos y eran considerados ceremonialmente impuros. Pedro ya estaba cruzando, sin saberlo, una frontera.',
        { h: 'La barrera más difícil' },
        'A cincuenta kilómetros, en Cesarea, la capital romana de Judea, vivía Cornelio, un centurión romano «piadoso y temeroso de Dios con toda su casa» (Hch 10:2). Un ángel le mandó buscar a Pedro. Al mismo tiempo, Pedro tuvo en Jope una visión: un lienzo con toda clase de animales, y una voz que le decía: «Lo que Dios limpió, no lo llames tú común» (Hch 10:15).',
        'Pedro entendió la visión cuando llegaron los enviados de Cornelio. En Cesarea dijo: «Vosotros sabéis cuán abominable es para un varón judío juntarse o acercarse a un extranjero; pero a mí me ha mostrado Dios que a ningún hombre llame común o inmundo» (Hch 10:28). Mientras predicaba, el Espíritu Santo cayó sobre todos los que oían, y hablaban en lenguas y magnificaban a Dios. Los judíos que acompañaban a Pedro quedaron atónitos.',
        'Fue la barrera más difícil de todas. La iglesia aceptaba que los gentiles pudieran salvarse, pero suponía que primero debían hacerse judíos. Dios mostró lo contrario: dio el Espíritu a gentiles incircuncisos, igual que a los apóstoles en Pentecostés. Cuando Pedro lo explicó en Jerusalén, la iglesia glorificó a Dios, diciendo: «¡De manera que también a los gentiles ha dado Dios arrepentimiento para vida!» (Hch 11:18).',
        'El camino a lo último de la tierra quedaba abierto. La ruta temática El Espíritu Santo en Hechos estudia este relato en detalle.'
      ],
      pensar: 'Dios tuvo que darle a Pedro una visión tres veces para que entendiera que no debía llamar inmundo a ningún hombre (Hch 10:16, 28). ¿Qué prejuicios podrían estar impidiendo que lleves el evangelio a ciertas personas?'
    },
    {
      id: 'antioquia', n: 'Antioquía: la primera iglesia gentil', ref: 'Hechos 11:19-30; 13:1-3', fecha: [40, 46],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Los esparcidos llegan a Fenicia, Chipre y Antioquía (Hch 11:19).', fecha: 40,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-44'], lugares: ['jerusalen', 'tolemaida', 'tiro', 'sidon', 'salamina-chipre', 'antioquia'], trazos: ['hch-antioquia'] } },
          { t: 'Bernabé va a Tarso a buscar a Saulo y lo trae a Antioquía (Hch 11:25-26).', fecha: 43,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-44'], lugares: ['jerusalen', 'antioquia', 'tarso', 'seleucia'] } }
        ] }
      ],
      texto: [
        'Mientras Pedro estaba en Cesarea, otros creyentes seguían avanzando por su cuenta. Los que habían sido esparcidos por la persecución de Esteban «pasaron hasta Fenicia, Chipre y Antioquía, no hablando a nadie la palabra, sino sólo a los judíos» (Hch 11:19).',
        'Pero algunos, hombres de Chipre y de Cirene, al llegar a Antioquía hablaron también a los griegos, «anunciando el evangelio del Señor Jesús. Y la mano del Señor estaba con ellos, y gran número creyó y se convirtió al Señor» (Hch 11:20-21). Ningún apóstol los había enviado; eran creyentes comunes, cuyos nombres ni siquiera conocemos.',
        { h: 'Una ciudad del mundo' },
        'Antioquía de Siria, a orillas del río Orontes, era una de las grandes ciudades del imperio, junto a Roma y Alejandría. Era cosmopolita, rica y conocida por su inmoralidad. En ese ambiente nació la primera iglesia con un gran número de gentiles.',
        'La iglesia de Jerusalén envió a Bernabé, un levita de Chipre, «varón bueno, y lleno del Espíritu Santo y de fe» (Hch 11:24). Al ver la gracia de Dios, se regocijó y animó a todos a permanecer fieles. Luego hizo algo decisivo: fue a Tarso a buscar a Saulo y lo trajo a Antioquía. Durante un año enseñaron a mucha gente, «y a los discípulos se les llamó cristianos por primera vez en Antioquía» (Hch 11:26). El nombre, que significa «los de Cristo», probablemente se lo pusieron los de afuera, porque los creyentes hablaban de Cristo todo el tiempo.',
        'La iglesia de Antioquía fue también generosa. Cuando el profeta Agabo anunció por el Espíritu una gran hambre, los discípulos enviaron ayuda a los hermanos de Judea por medio de Bernabé y Saulo (Hch 11:27-30).',
        { h: 'La nueva base misionera' },
        'En esta iglesia había profetas y maestros de orígenes muy distintos: Bernabé, de Chipre; Simón, llamado Niger, nombre que significa negro; Lucio, de Cirene, en África; Manaén, criado con Herodes el tetrarca, y Saulo, de Tarso (Hch 13:1). Mientras ministraban al Señor y ayunaban, el Espíritu Santo los llamó a apartar a Bernabé y a Saulo para la obra misionera. Desde entonces, Antioquía fue el punto de partida del evangelio hacia lo último de la tierra.'
      ],
      pensar: 'La iglesia de Antioquía fue fundada por creyentes cuyos nombres no conocemos, que hablaron de Jesús a los griegos (Hch 11:20-21). ¿Qué te enseña esto sobre la responsabilidad de cada creyente, y no solo de los pastores o misioneros, de compartir el evangelio?'
    },
    {
      id: 'viaje-1', n: 'Asia Menor: el primer viaje', ref: 'Hechos 13:4–14:28', fecha: [46, 48],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'seleucia', 'salamina-chipre', 'pafos', 'perge', 'atalia', 'antioquia-pisidia', 'iconio', 'listra', 'derbe'], trazos: ['viaje-1'] } }
      ],
      texto: [
        'Enviados por el Espíritu Santo, Bernabé y Saulo partieron de Seleucia, el puerto de Antioquía, hacia Chipre, la isla natal de Bernabé. La recorrieron de este a oeste, desde Salamina hasta Pafos. Allí, el procónsul Sergio Paulo quería oír la palabra de Dios, pero el mago Elimas se oponía. Saulo, «lleno del Espíritu Santo» (Hch 13:9), lo reprendió, y el mago quedó ciego por un tiempo. El procónsul creyó, maravillado de la doctrina del Señor. Desde este momento, Lucas llama a Saulo por su nombre romano, Pablo, y lo pone delante de Bernabé.',
        'De Chipre navegaron a Perge, en la costa de Asia Menor, y subieron a la meseta interior, a Antioquía de Pisidia. En la sinagoga, Pablo predicó a Cristo como cumplimiento de las promesas hechas a David. Muchos gentiles quisieron oír más, pero los judíos se opusieron, y Pablo y Bernabé declararon: «he aquí, nos volvemos a los gentiles. Porque así nos ha mandado el Señor» (Hch 13:46-47). La palabra del Señor se difundía por toda aquella provincia.',
        'Expulsados de Antioquía, siguieron a Iconio, donde el Señor confirmaba la palabra concediendo que se hicieran señales y prodigios por mano de ellos (Hch 14:3). En Listra, Pablo sanó a un cojo de nacimiento, y la multitud pagana quiso ofrecerles sacrificios como a dioses. Poco después, instigada por judíos venidos de otras ciudades, la misma multitud apedreó a Pablo y lo dejó por muerto. Pero cuando los discípulos lo rodearon, se levantó, y al día siguiente siguió a Derbe.',
        { h: 'Iglesias establecidas' },
        'En vez de volver por el camino más corto, regresaron por las mismas ciudades donde habían sido perseguidos, «confirmando los ánimos de los discípulos» y diciéndoles: «Es necesario que a través de muchas tribulaciones entremos en el reino de Dios» (Hch 14:22). En cada iglesia constituyeron ancianos, oraron con ayunos y los encomendaron al Señor.',
        'De vuelta en Antioquía, reunieron a la iglesia y contaron cómo Dios había abierto «la puerta de la fe a los gentiles» (Hch 14:27). Las iglesias de Galacia, a las que Pablo escribiría después una carta, ya existían. El recurso Los viajes de Pablo recorre este viaje en detalle.'
      ],
      pensar: 'Pablo volvió a Listra, la ciudad donde lo habían apedreado, para fortalecer a los nuevos creyentes (Hch 14:19-22). ¿Qué te enseña su ejemplo sobre el cuidado de los que recién llegan a la fe?'
    },
    {
      id: 'europa', n: 'Europa: el segundo viaje', ref: 'Hechos 15:36–18:22', fecha: [49, 52],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Por Galacia hasta Troas: el Espíritu les cierra Asia y Bitinia (Hch 16:6-8).', fecha: 49,
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'tarso', 'derbe', 'listra', 'iconio', 'antioquia-pisidia', 'troas'] } },
          { t: 'La visión del varón macedonio: el evangelio entra en Europa (Hch 16:9–18:22).', fecha: 50,
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['troas', 'filipos', 'tesalonica', 'berea', 'atenas', 'corinto', 'efeso', 'cesarea', 'jerusalen', 'antioquia'], trazos: ['viaje-2'] } }
        ] }
      ],
      texto: [
        'Después del concilio de Jerusalén, Pablo propuso volver a visitar las iglesias. Bernabé y Pablo no se pusieron de acuerdo sobre llevar a Marcos, y se separaron: Bernabé fue con Marcos a Chipre, y Pablo eligió a Silas. Dios usó incluso ese desacuerdo para que hubiera dos equipos misioneros en lugar de uno. En Listra se les unió Timoteo, un joven discípulo de madre judía y padre griego.',
        'Entonces ocurrió algo inesperado. Al intentar predicar en la provincia de Asia, les fue prohibido por el Espíritu Santo, y cuando quisieron ir a Bitinia, «el Espíritu no se lo permitió» (Hch 16:7). Llegaron así a Troas, junto al mar. Esa noche, Pablo tuvo una visión: un varón macedonio le rogaba: «Pasa a Macedonia y ayúdanos» (Hch 16:9). Aquí comienza el primer pasaje «nosotros»: Lucas se había unido al grupo.',
        { h: 'El evangelio cruza a Europa' },
        'Cruzaron el mar Egeo y llegaron a Filipos, colonia romana. Allí, junto a un río, una mujer llamada Lidia creyó, y su casa fue la primera iglesia de Europa. Pablo y Silas fueron azotados y encarcelados, pero a medianoche oraban y cantaban himnos, y un terremoto abrió las puertas. El carcelero creyó con toda su casa.',
        'En Tesalónica, en tres días de reposo, muchos creyeron, pero una turba los acusó de ser «estos que trastornan el mundo entero» (Hch 17:6). En Berea, los judíos recibieron la palabra con solicitud y escudriñaban cada día las Escrituras. En Atenas, la capital intelectual del mundo griego, Pablo predicó en el Areópago al Dios desconocido, y algunos creyeron.',
        'En Corinto, una ciudad comercial famosa por su inmoralidad, Pablo trabajó con Aquila y Priscila haciendo tiendas. El Señor le dijo en visión: «No temas, sino habla, y no calles… porque yo tengo mucho pueblo en esta ciudad» (Hch 18:9-10), y se quedó un año y seis meses. Luego pasó brevemente por Éfeso, prometiendo volver, y regresó por Cesarea y Jerusalén a Antioquía.',
        'En este viaje nacieron las iglesias a las que Pablo escribió las cartas a los Filipenses, a los Tesalonicenses y a los Corintios.'
      ],
      pensar: 'El Espíritu cerró dos puertas antes de abrir la de Macedonia, y por eso el evangelio llegó a Europa (Hch 16:6-10). ¿Cómo puedes discernir la dirección de Dios cuando algunos de tus planes no se cumplen?'
    },
    {
      id: 'asia', n: 'Éfeso y toda Asia: el tercer viaje', ref: 'Hechos 18:23–21:16', fecha: [53, 57],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'derbe', 'iconio', 'antioquia-pisidia', 'efeso', 'troas', 'filipos', 'tesalonica', 'berea', 'corinto', 'mileto', 'rodas', 'patara', 'tiro', 'cesarea', 'jerusalen'], trazos: ['viaje-3'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-efeso-espiritu.webp', alt: 'El apóstol Pablo impone las manos sobre un grupo de discípulos en una casa de Éfeso; algunos levantan los brazos y hablan con fervor', pie: 'Los doce discípulos de Éfeso reciben el Espíritu Santo (Hch 19:6).', origen: 'ia' }
      ],
      texto: [
        'En su tercer viaje, Pablo recorrió otra vez Galacia y Frigia, confirmando a los discípulos, y llegó a Éfeso, la capital de la provincia de Asia. Era una de las ciudades más grandes del imperio, con un puerto activo y el famoso templo de Diana, una de las maravillas del mundo antiguo. Esta vez el Espíritu no le cerró la puerta: Pablo se quedó allí cerca de tres años (Hch 20:31).',
        'Al llegar, encontró a unos doce discípulos que solo conocían el bautismo de Juan. Les preguntó: «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2). Después de bautizarlos en el nombre del Señor Jesús, les impuso las manos, «vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban» (Hch 19:6). Así comenzó la obra en Éfeso: con una iglesia llena del Espíritu.',
        { h: 'Toda una provincia' },
        'Pablo enseñó tres meses en la sinagoga y luego, durante dos años, cada día en la escuela de un tal Tiranno. El resultado fue asombroso: «todos los que habitaban en Asia, judíos y griegos, oyeron la palabra del Señor Jesús» (Hch 19:10). Es probable que en esos años nacieran iglesias en otras ciudades de la provincia, como Colosas, Laodicea y Hierápolis (Col 4:13), y quizás varias de las siete iglesias del Apocalipsis.',
        'Dios hacía milagros extraordinarios por mano de Pablo: los paños que habían tocado su cuerpo eran llevados a los enfermos, y las enfermedades y los espíritus malos se iban. Muchos que practicaban la magia quemaron sus libros, y la venta de imágenes de Diana cayó tanto que el platero Demetrio provocó un tumulto en el teatro, quejándose de que Pablo había apartado a muchas gentes «no solamente en Efeso, sino en casi toda Asia» (Hch 19:26).',
        'Después del tumulto, Pablo visitó Macedonia y Grecia, y emprendió el regreso a Jerusalén con representantes de las iglesias, llevando una ofrenda para los pobres de Judea. En Mileto se despidió con lágrimas de los ancianos de Éfeso, sabiendo que lo esperaban prisiones. En Tiro y en Cesarea, los profetas le advirtieron por el Espíritu lo que le esperaba, pero él siguió adelante, dispuesto a morir por el nombre del Señor Jesús (Hch 21:13).'
      ],
      pensar: 'En dos años, toda la provincia de Asia oyó la palabra del Señor (Hch 19:10). ¿Qué crees que hizo posible un alcance tan grande, si Pablo enseñaba en una sola ciudad?'
    },
    {
      id: 'roma', n: 'Roma: el evangelio en la capital', ref: 'Hechos 21:17–28:31; Romanos 1:8; 15:23-24', fecha: [57, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'cesarea', 'sidon', 'creta', 'malta', 'siracusa', 'puteoli', 'roma'], trazos: ['viaje-roma'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-roma.webp', alt: 'El apóstol Pablo, ya mayor, encadenado a un soldado romano, enseña a un grupo de hombres y mujeres en una habitación sencilla de una casa alquilada en Roma', pie: 'Pablo en su casa alquilada en Roma (Hch 28:30-31).', origen: 'ia' }
      ],
      texto: [
        'El último tramo del avance del evangelio en Hechos no lo hace un misionero libre, sino un prisionero. Arrestado en el templo de Jerusalén, Pablo pasó dos años preso en Cesarea y, al apelar al César, fue enviado a Roma bajo custodia de un centurión. Después de una tempestad de catorce días, el naufragio en Malta y un invierno en la isla, llegó a Italia por el puerto de Puteoli.',
        { h: 'Hermanos que ya estaban allí' },
        'Un detalle importa para la historia de la expansión: Pablo no fue el primero en llevar el evangelio a Italia. En Puteoli encontró hermanos que lo hospedaron una semana, y desde Roma salieron otros a recibirlo hasta el Foro de Apio y las Tres Tabernas, a unos sesenta kilómetros de la ciudad. «Al verlos, Pablo dio gracias a Dios y cobró aliento» (Hch 28:15).',
        'La iglesia de Roma existía desde hacía años. Pablo le había escrito su carta más extensa, Romanos, desde Corinto, al final de su tercer viaje, y en ella dice que su fe «se divulga por todo el mundo» (Ro 1:8). Nadie sabe con certeza quién la fundó. Es probable que el evangelio llegara por medio de judíos y prosélitos de Roma que estuvieron en Pentecostés (Hch 2:10), y de creyentes que viajaban por el imperio, como Aquila y Priscila (Hch 18:2; Ro 16:3-5).',
        { h: 'Sin impedimento' },
        'En Roma, Pablo vivió dos años en una casa alquilada, encadenado a un soldado, pero libre para recibir visitas. Primero reunió a los principales de los judíos de la ciudad y les testificó del reino de Dios desde la mañana hasta la tarde. Algunos creyeron y otros no, y Pablo declaró que la salvación de Dios había sido enviada a los gentiles, «y ellos oirán» (Hch 28:28).',
        'Desde su prisión escribió, según la mayoría de los estudiosos, las cartas a los Efesios, a los Filipenses, a los Colosenses y a Filemón. En Filipenses cuenta que sus prisiones habían servido para el progreso del evangelio, y que su causa se había hecho conocida en todo el pretorio, la guardia imperial (Fil 1:12-13). El evangelio había llegado al corazón del imperio, y aun a la casa de César (Fil 4:22).'
      ],
      pensar: 'Las cadenas de Pablo, en lugar de detener el evangelio, lo llevaron hasta la guardia del emperador (Fil 1:12-13). ¿Qué circunstancias de tu vida que parecen limitarte podría Dios usar para que otros conozcan a Cristo?'
    },
    {
      id: 'mas-alla', n: 'Hasta lo último de la tierra', ref: 'Romanos 15:19-28; Colosenses 1:6, 23; Mateo 24:14; Apocalipsis 7:9', fecha: 62,
      visual: [
        { tipo: 'mapa', titulo: 'Toda la expansión', pasos: [
          { t: 'Pentecostés: la iglesia nace en Jerusalén.', fecha: 30,
            estado: { view: JUDEA, capas: ['roma-14', 'iglesia-30'], lugares: ['jerusalen'] } },
          { t: 'La persecución esparce a los creyentes por Judea y Samaria.', fecha: 34,
            estado: { view: JUDEA, capas: ['roma-14', 'iglesia-34'], lugares: ['jerusalen', 'samaria'] } },
          { t: 'Felipe predica en las ciudades de la costa, hasta Cesarea.', fecha: 34,
            estado: { view: JUDEA, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'samaria', 'gaza', 'cesarea'] } },
          { t: 'Damasco y Galilea: las iglesias tienen paz y se acrecientan.', fecha: 35,
            estado: { view: JUDEA, capas: ['roma-14', 'iglesia-36'], lugares: ['jerusalen', 'damasco'] } },
          { t: 'Saulo en Tarso: iglesias en Siria y Cilicia.', fecha: 37,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-37'], lugares: ['jerusalen', 'damasco', 'tarso'] } },
          { t: 'Lida, Jope y Cesarea: el Espíritu cae sobre los gentiles.', fecha: 40,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-40'], lugares: ['jerusalen', 'jope', 'cesarea', 'tarso'] } },
          { t: 'Fenicia, Chipre y Antioquía, la primera iglesia gentil.', fecha: 44,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-44'], lugares: ['jerusalen', 'antioquia', 'tarso'] } },
          { t: 'El primer viaje: Chipre y Galacia.', fecha: 48,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'pafos', 'antioquia-pisidia', 'listra'] } },
          { t: 'El segundo viaje: Macedonia y Acaya, en Europa.', fecha: 52,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-52'], lugares: ['antioquia', 'filipos', 'tesalonica', 'corinto'] } },
          { t: 'El tercer viaje: Éfeso y toda Asia.', fecha: 57,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'efeso', 'corinto', 'filipos'] } },
          { t: 'Pablo en Roma: el evangelio en la capital del imperio.', fecha: 62,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'efeso', 'corinto', 'roma'] } }
        ] },
        { tipo: 'mapa', titulo: 'Más allá de Hechos', estado: { view: MUNDO, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'efeso', 'corinto', 'roma', 'hispania', 'alejandria', 'cirene', 'r-partia'] } }
      ],
      texto: [
        'Hechos termina en Roma, pero Roma no era «lo último de la tierra». Pablo mismo lo sabía. En la carta a los Romanos escribió que desde Jerusalén hasta Ilírico, en la costa del Adriático, lo había llenado todo del evangelio de Cristo, y que ya no tenía más campo en esas regiones. Su plan era seguir hacia el occidente: «cuando vaya a España, iré a vosotros» (Ro 15:24).',
        { posturas: {
          titulo: '¿Llegó Pablo a España?',
          a: { n: 'Probablemente sí', t: 'Hacia el año 95, Clemente de Roma escribió que Pablo llegó «al límite del occidente» antes de morir, y algunos escritos del siglo II lo afirman. Las cartas pastorales sugieren que Pablo fue liberado después de los dos años de Hechos 28 y siguió viajando.' },
          b: { n: 'No se sabe', t: 'El Nuevo Testamento no lo dice. La expresión de Clemente podría referirse a Roma, que estaba al occidente de las tierras donde Pablo predicó.' },
          c: 'La Biblia solo registra el deseo de Pablo. Lo que sí es seguro es que el evangelio llegó a Hispania muy pronto: hacia fines del siglo II, Ireneo ya menciona iglesias en las provincias de Iberia.'
        } },
        'Antes de que terminara el siglo I, el evangelio también había llegado al norte de África, a Alejandría y a Cirene, de donde eran algunos de los fundadores de la iglesia de Antioquía (Hch 11:20). Las tradiciones antiguas hablan de apóstoles que llevaron el mensaje a Persia y a la India, aunque esos relatos no forman parte de la Escritura y deben tomarse con cautela.',
        { h: 'La tarea continúa' },
        'Pablo pudo decir que el evangelio había llegado «a todo el mundo» (Col 1:6), en el sentido del mundo conocido de su época. Pero el encargo de Hechos 1:8 sigue vigente. Jesús anunció: «será predicado este evangelio del reino en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin» (Mt 24:14). Y Juan vio el resultado final: una gran multitud «de todas naciones y tribus y pueblos y lenguas» delante del trono y del Cordero (Ap 7:9).',
        'Entre ese mapa del siglo I y aquella multitud está la historia de la iglesia, y en ella estamos nosotros. El evangelio que salió de Jerusalén cruzó el Mediterráneo, después el océano, y llegó hasta lugares que ningún apóstol imaginó, como el extremo sur de América. Para los primeros cristianos, nuestra tierra era literalmente lo último de la tierra.'
      ],
      pensar: 'Para los apóstoles, América del Sur era literalmente «lo último de la tierra», y el evangelio llegó hasta aquí. ¿Qué lugares o personas son hoy «lo último de la tierra» para tu congregación, y qué puedes hacer para alcanzarlos?'
    }
  ];

  /* ---------------- Ruta III · Comentario capítulo por capítulo ---------------- */
  const comentario = [
    {
      id: 'cap-1', n: 'Capítulo 1: la promesa y la espera', ref: 'Hechos 1', fecha: 30,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-ascension.webp', alt: 'Jesús resucitado asciende al cielo desde el monte de los Olivos y una nube comienza a ocultarlo, mientras los once discípulos miran hacia arriba y dos varones con vestiduras blancas aparecen junto a ellos', pie: '«Así vendrá como le habéis visto ir al cielo» (Hch 1:11).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Estructura', tabla: {
          titulo: 'Hechos 1',
          cab: ['Versículos', 'Contenido'],
          filas: [
            ['1-3', 'Prólogo: los cuarenta días del Resucitado'],
            ['4-5', 'La promesa del Padre: el bautismo en el Espíritu Santo'],
            ['6-8', 'El reino para Israel y la misión de la iglesia'],
            ['9-11', 'La ascensión y la promesa de su regreso'],
            ['12-14', 'La espera en oración en el aposento alto'],
            ['15-26', 'Matías ocupa el lugar de Judas']
          ]
        } }
      ],
      texto: [
        'Durante cuarenta días después de su resurrección, Jesús se presentó vivo a los apóstoles «con muchas pruebas indubitables», hablándoles del reino de Dios (Hch 1:3). La fe de la iglesia no nació de una visión subjetiva, sino de encuentros repetidos con el Señor resucitado.',
        { h: 'La promesa del Padre (1:4-8)' },
        'Jesús les mandó no salir de Jerusalén y esperar «la promesa del Padre», y la explicó así: «Juan ciertamente bautizó con agua, mas vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días» (Hch 1:5). Los apóstoles ya creían en él y habían recibido el soplo del Resucitado (Jn 20:22); aun así, les faltaba esta experiencia, que el versículo 8 describe como una investidura de poder para testificar.',
        'Ellos preguntaron: «Señor, ¿restaurarás el reino a Israel en este tiempo?» (Hch 1:6). Jesús no corrigió la idea de un reino futuro para Israel; solo dijo que no les tocaba saber los tiempos, que el Padre puso en su sola potestad. Mientras tanto, la tarea de la iglesia es ser testigos hasta lo último de la tierra.',
        { h: 'La ascensión (1:9-11)' },
        'Jesús fue alzado ante sus ojos y una nube lo ocultó. Dos varones con vestiduras blancas anunciaron: «Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo» (Hch 1:11). Su regreso será personal, visible y corporal. Zacarías anunció que en aquel día sus pies se afirmarán sobre el monte de los Olivos (Zac 14:4), el mismo lugar desde donde ascendió.',
        { h: 'La espera y Matías (1:12-26)' },
        'Los once volvieron a Jerusalén, al aposento alto, y allí «todos éstos perseveraban unánimes en oración y ruego, con las mujeres, y con María la madre de Jesús, y con sus hermanos» (Hch 1:14). Los hermanos del Señor, que antes no creían en él (Jn 7:5), estaban ahora entre los discípulos.',
        'Pedro explicó que la traición de Judas cumplía las Escrituras (Sal 69:25; 109:8) y que su lugar debía ser ocupado por alguien que hubiera acompañado a Jesús desde el bautismo de Juan hasta la ascensión, para ser «testigo con nosotros, de su resurrección» (Hch 1:22). Oraron y echaron suertes, y la suerte cayó sobre Matías. Es la última vez que la Biblia menciona las suertes para conocer la voluntad de Dios: desde Pentecostés, la iglesia es guiada por el Espíritu Santo.'
      ],
      pensar: 'Los discípulos esperaron la promesa del Espíritu «unánimes en oración y ruego» (Hch 1:14). ¿Qué te enseña esa espera sobre cómo buscar hoy la llenura del Espíritu Santo?'
    },
    {
      id: 'cap-2a', n: 'Capítulo 2 (I): el día de Pentecostés', ref: 'Hechos 2:1-13; Levítico 23:15-21', fecha: 30,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperios-historia/img/integrador-pentecostes.webp', alt: 'El día de Pentecostés en Jerusalén: los discípulos llenos del Espíritu Santo hablan a una multitud de judíos de muchas naciones', pie: '«Les oímos hablar en nuestras lenguas las maravillas de Dios» (Hch 2:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.', ref: 'Hechos 2:4' }
      ],
      texto: [
        'Pentecostés, palabra griega que significa «quincuagésimo», era la fiesta judía de las semanas, que se celebraba cincuenta días después de la Pascua (Lv 23:15-16). Era una fiesta de cosecha, en la que se presentaban a Dios los primeros panes del trigo nuevo. Con el tiempo, los judíos la asociaron también con la entrega de la ley en el Sinaí. Jesús había muerto en la Pascua y resucitado al día siguiente del sábado, como las primicias de la cebada; cincuenta días después, Dios recogió las primicias de la cosecha de la iglesia.',
        { h: 'Viento, fuego y lenguas (2:1-4)' },
        '«Cuando llegó el día de Pentecostés, estaban todos unánimes juntos» (Hch 2:1). De repente vino del cielo un estruendo como de un viento recio que llenó toda la casa, y se les aparecieron «lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos» (Hch 2:3). El viento y el fuego eran señales conocidas de la presencia de Dios. El fuego se repartió sobre cada uno: el Espíritu no vino solo sobre los apóstoles, sino sobre los ciento veinte, hombres y mujeres.',
        'Entonces «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). Lucas usa varias expresiones para la misma experiencia: Jesús la llamó ser «bautizados con el Espíritu Santo» (Hch 1:5), y aquí se la describe como ser «llenos». Fíjate en el orden: primero fueron llenos, y como consecuencia hablaron en lenguas que no habían aprendido. Ellos hablaban; el Espíritu les daba qué decir.',
        { h: '«¿Qué quiere decir esto?» (2:5-13)' },
        'El estruendo reunió a una multitud de judíos piadosos de muchas naciones, que estaban atónitos, «porque cada uno les oía hablar en su propia lengua» (Hch 2:6). Eran galileos, gente sencilla, y hablaban idiomas reales de pueblos lejanos, proclamando «las maravillas de Dios» (Hch 2:11). En otros pasajes del Nuevo Testamento, las lenguas que da el Espíritu son también lenguas que nadie entiende sin el don de interpretación (1 Co 14:2), pero en Pentecostés Dios las usó como una señal para los visitantes.',
        'La reacción fue doble. Unos preguntaban: «¿Qué quiere decir esto?»; otros se burlaban: «Están llenos de mosto» (Hch 2:12-13). Así ha sido siempre ante el mover del Espíritu: unos se abren a entender, y otros lo descartan sin examinarlo. La pregunta de los primeros abrió la puerta al primer sermón de la iglesia.'
      ],
      pensar: 'En Pentecostés, el fuego se repartió «sobre cada uno de ellos» (Hch 2:3), y «todos» fueron llenos (Hch 2:4). ¿Qué te dice esto sobre quiénes pueden recibir la llenura del Espíritu Santo?'
    },
    {
      id: 'cap-2b', n: 'Capítulo 2 (II): el sermón y la primera iglesia', ref: 'Hechos 2:14-47; Joel 2:28-32', fecha: 30,
      visual: [
        { tipo: 'tabla', titulo: 'El sermón', tabla: {
          titulo: 'El primer sermón de la iglesia',
          cab: ['Versículos', 'Argumento', 'Escritura'],
          filas: [
            ['14-21', 'Esto es lo dicho por Joel: el Espíritu derramado', 'Jl 2:28-32'],
            ['22-24', 'Jesús, aprobado por Dios, crucificado y resucitado', ''],
            ['25-32', 'David anunció la resurrección', 'Sal 16:8-11'],
            ['33-36', 'Jesús exaltado derramó el Espíritu: es Señor y Cristo', 'Sal 110:1'],
            ['37-41', 'Arrepentíos y bautizaos; la promesa es para todos', ''],
            ['42-47', 'La vida de la primera iglesia', '']
          ]
        } }
      ],
      texto: [
        'Pedro, el mismo que semanas antes había negado a Jesús ante una criada, se puso en pie con los once y alzó la voz ante la multitud. No estaban ebrios, explicó, porque era apenas la hora tercera, las nueve de la mañana. Lo que veían era el cumplimiento de la profecía de Joel: «en los postreros días, dice Dios, derramaré de mi Espíritu sobre toda carne» (Hch 2:17).',
        'Pedro cambió una palabra de Joel, que decía «después de esto», por «en los postreros días». Con Pentecostés comenzaron los últimos días, el tiempo de la iglesia, que se extiende hasta el regreso de Cristo. Las señales en el sol y en la luna que menciona Joel, antes del día grande del Señor, todavía esperan su cumplimiento completo. Pero el derramamiento del Espíritu sobre hijos e hijas, jóvenes y ancianos, siervos y siervas, ya comenzó y sigue vigente.',
        { h: 'Cristo en el centro (2:22-36)' },
        'El sermón no se queda en el Espíritu: va a Cristo. Jesús de Nazaret fue aprobado por Dios con señales, entregado por el determinado consejo de Dios y crucificado por manos de inicuos, pero Dios lo levantó, «por cuanto era imposible que fuese retenido» por la muerte (Hch 2:24). David había anunciado que el Santo de Dios no vería corrupción (Sal 16:10), y David murió y su sepulcro estaba allí; por lo tanto, hablaba del Mesías. Exaltado a la diestra de Dios, Jesús recibió del Padre la promesa del Espíritu y «ha derramado esto que vosotros veis y oís» (Hch 2:33). La conclusión: «a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo» (Hch 2:36).',
        { h: '«¿Qué haremos?» (2:37-41)' },
        'Los oyentes se compungieron de corazón. Pedro respondió: «Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo» (Hch 2:38). La promesa no era solo para ellos, sino para sus hijos y para todos los que están lejos. Ese día se añadieron como tres mil personas.',
        { h: 'La primera iglesia (2:42-47)' },
        'Los nuevos creyentes perseveraban en la doctrina de los apóstoles, en la comunión, en el partimiento del pan y en las oraciones. Había temor de Dios, señales y maravillas, generosidad para con los necesitados, alegría y sencillez de corazón, reuniones en el templo y en las casas. «Y el Señor añadía cada día a la iglesia los que habían de ser salvos» (Hch 2:47).'
      ],
      pensar: 'Pedro, que había negado a Jesús por miedo, predicó con valentía ante miles después de ser lleno del Espíritu (Hch 2:14). ¿Qué cambio puede producir el Espíritu Santo en una persona temerosa?'
    },
    {
      id: 'cap-3', n: 'Capítulo 3: el cojo de la puerta Hermosa', ref: 'Hechos 3', fecha: 30,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-cojo-hermosa.webp', alt: 'Pedro toma de la mano derecha a un hombre cojo sentado junto a una gran puerta de bronce del templo de Jerusalén y lo levanta, mientras Juan observa y la gente se detiene asombrada', pie: '«En el nombre de Jesucristo de Nazaret, levántate y anda» (Hch 3:6).', origen: 'ia' }
      ],
      texto: [
        'Pedro y Juan subían al templo a la hora novena, las tres de la tarde, la hora de la oración. Los apóstoles seguían participando de la vida religiosa de Israel. En la puerta llamada la Hermosa, probablemente la gran puerta de bronce de Corinto que daba al atrio de las mujeres, estaba un hombre cojo de nacimiento, de más de cuarenta años (Hch 4:22), que pedía limosna cada día.',
        { h: '«Lo que tengo te doy» (3:1-10)' },
        'Pedro le dijo: «Míranos». El hombre esperaba una moneda. «Mas Pedro dijo: No tengo plata ni oro, pero lo que tengo te doy; en el nombre de Jesucristo de Nazaret, levántate y anda» (Hch 3:6). Lo tomó de la mano derecha y lo levantó, y al momento se le afirmaron los pies y los tobillos. El hombre entró al templo «andando, y saltando, y alabando a Dios» (Hch 3:8). Isaías había anunciado que en el tiempo del Mesías «el cojo saltará como un ciervo» (Is 35:6).',
        'Fíjate en que Pedro no oró pidiendo a Dios que sanara al hombre: habló con autoridad en el nombre de Jesús, como Jesús mismo lo había hecho. El poder que la iglesia recibió en Pentecostés no era solo para predicar, sino también para sanar.',
        { h: 'El segundo sermón (3:11-26)' },
        'La gente corrió al pórtico de Salomón, y Pedro aprovechó la ocasión. Lo primero que hizo fue desviar la atención de sí mismo: «¿por qué ponéis los ojos en nosotros, como si por nuestro poder o piedad hubiésemos hecho andar a éste?» (Hch 3:12). El que había sanado al cojo era Jesús, a quien ellos habían negado ante Pilato, pidiendo en su lugar a un homicida. Mataron «al Autor de la vida», pero Dios lo resucitó, y la fe en su nombre había dado al hombre «esta completa sanidad» (Hch 3:15-16).',
        'Pedro reconoció que lo hicieron por ignorancia, y los llamó: «arrepentíos y convertíos, para que sean borrados vuestros pecados; para que vengan de la presencia del Señor tiempos de refrigerio» (Hch 3:19). El cielo debía recibir a Jesús «hasta los tiempos de la restauración de todas las cosas» (Hch 3:21) que anunciaron los profetas: el reino que vendrá con su regreso.',
        'Jesús era el profeta semejante a Moisés que Dios prometió levantar (Dt 18:15), y la simiente de Abraham en la que serían benditas todas las familias de la tierra. Pedro concluyó: «A vosotros primeramente, Dios, habiendo levantado a su Hijo, lo envió para que os bendijese» (Hch 3:26).'
      ],
      pensar: 'Pedro no tenía dinero, pero tenía algo mejor que dar: el poder del nombre de Jesús (Hch 3:6). ¿Qué tienes tú para dar a las personas necesitadas que te rodean?'
    },
    {
      id: 'cap-4', n: 'Capítulo 4: la primera persecución', ref: 'Hechos 4; Salmo 2:1-2; 118:22', fecha: 31,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pedro-sanedrin.webp', alt: 'Pedro y Juan, de pie y serenos, ante el sanedrín reunido en semicírculo, con el sumo sacerdote y ancianos vestidos con mantos, mientras el hombre sanado está junto a ellos', pie: 'Pedro y Juan ante el sanedrín (Hch 4:5-14).', origen: 'ia' }
      ],
      texto: [
        'La sanidad del cojo y el sermón en el templo provocaron la primera reacción oficial. Los sacerdotes, el jefe de la guardia del templo y los saduceos arrestaron a Pedro y a Juan, «resentidos de que enseñasen al pueblo, y anunciasen en Jesús la resurrección de entre los muertos» (Hch 4:2). Pero la palabra ya había hecho su obra: el número de los varones que creyeron llegó a unos cinco mil.',
        { h: 'Ante el sanedrín (4:5-22)' },
        'Al día siguiente comparecieron ante el mismo tribunal que había condenado a Jesús: Anás, Caifás y la familia del sumo sacerdote. Les preguntaron con qué potestad habían hecho aquello. «Entonces Pedro, lleno del Espíritu Santo» (Hch 4:8), respondió. Es importante notar que Pedro ya había sido lleno en Pentecostés, y aquí es lleno otra vez para una necesidad particular. El bautismo en el Espíritu es una experiencia inicial; las llenuras se renuevan.',
        'Pedro declaró que el hombre había sido sanado en el nombre de Jesús, a quien ellos crucificaron y Dios resucitó. Citó el Salmo 118: Jesús era la piedra desechada por los edificadores, que vino a ser cabeza del ángulo. Y concluyó: «en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos» (Hch 4:12).',
        'Los jueces se maravillaron del denuedo de Pedro y Juan, porque eran «hombres sin letras y del vulgo», y «les reconocían que habían estado con Jesús» (Hch 4:13). Les prohibieron hablar en el nombre de Jesús, y ellos respondieron: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20).',
        { h: 'La oración que sacudió el lugar (4:23-31)' },
        'Al ser soltados, volvieron a los suyos, y toda la iglesia oró. Comenzaron reconociendo la soberanía de Dios, «Soberano Señor», y vieron en el Salmo 2 la conspiración de los reyes contra el Ungido. Pero no pidieron que cesara la persecución, sino: «concede a tus siervos que con todo denuedo hablen tu palabra, mientras extiendes tu mano para que se hagan sanidades y señales y prodigios» (Hch 4:29-30). El lugar tembló, «y todos fueron llenos del Espíritu Santo, y hablaban con denuedo la palabra de Dios» (Hch 4:31).',
        { h: 'Un corazón y un alma (4:32-37)' },
        'La multitud de los creyentes era de un corazón y un alma, y nadie consideraba suyo lo que poseía. Los apóstoles daban testimonio de la resurrección con gran poder, y no había necesitados entre ellos. Lucas presenta un ejemplo: José, un levita de Chipre a quien llamaban Bernabé, «Hijo de consolación», vendió una heredad y puso el dinero a los pies de los apóstoles.'
      ],
      pensar: 'Los jueces reconocieron que Pedro y Juan «habían estado con Jesús» (Hch 4:13), aunque no tenían estudios. ¿Qué debería notar la gente en tu vida para reconocer que has estado con Jesús?'
    },
    {
      id: 'cap-5', n: 'Capítulo 5: santidad, señales y libertad', ref: 'Hechos 5', fecha: 32,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-portico-salomon.webp', alt: 'Los apóstoles enseñan a una multitud en el pórtico de Salomón, con enfermos traídos en camillas a su alrededor', pie: '«Estaban todos unánimes en el pórtico de Salomón» (Hch 5:12).', origen: 'ia' }
      ],
      texto: [
        'Tras el ejemplo de Bernabé, Lucas narra un contraste: Ananías y Safira vendieron una propiedad y llevaron a los apóstoles solo una parte del dinero, como si fuera todo.',
        { h: 'Ananías y Safira (5:1-11)' },
        'El pecado no fue quedarse con dinero. Pedro lo dijo claramente: la propiedad era suya, y después de venderla, el dinero estaba en su poder. El pecado fue la mentira, el deseo de aparentar una consagración que no tenían. Pedro le dijo: «¿por qué llenó Satanás tu corazón para que mintieses al Espíritu Santo…? No has mentido a los hombres, sino a Dios» (Hch 5:3-4). Mentir al Espíritu Santo es mentir a Dios: el pasaje es una de las pruebas claras de que el Espíritu Santo es Dios, una persona divina y no una simple fuerza.',
        'Ananías cayó y expiró, y tres horas después lo mismo ocurrió con Safira, que sostuvo la misma mentira. El juicio fue severo porque la iglesia estaba en su comienzo, y Dios mostró que con su presencia santa no se juega. «Y vino gran temor sobre toda la iglesia» (Hch 5:11).',
        { h: 'Señales y sanidades (5:12-16)' },
        'Los apóstoles hacían muchas señales y prodigios, y los creyentes se reunían en el pórtico de Salomón. La gente sacaba a los enfermos a las calles «para que al pasar Pedro, a lo menos su sombra cayese sobre alguno de ellos», y de las ciudades vecinas traían enfermos y atormentados de espíritus inmundos, «y todos eran sanados» (Hch 5:15-16).',
        { h: 'Obedecer a Dios (5:17-42)' },
        'El sumo sacerdote y los saduceos, llenos de celos, encarcelaron a los apóstoles, pero un ángel abrió de noche las puertas y les mandó anunciar en el templo «todas las palabras de esta vida» (Hch 5:20). Llevados otra vez ante el concilio, respondieron: «Es necesario obedecer a Dios antes que a los hombres» (Hch 5:29).',
        'El fariseo Gamaliel aconsejó prudencia: si la obra era de hombres, se desvanecería, como las revueltas de Teudas y de Judas el galileo; «mas si es de Dios, no la podréis destruir» (Hch 5:39).',
        { posturas: {
          titulo: 'El Teudas de Gamaliel',
          a: { n: 'Lo que dice Josefo', t: 'El historiador Josefo menciona a un Teudas que encabezó una revuelta hacia el año 45, unos diez años después del discurso de Gamaliel.' },
          b: { n: 'Lo que dice Hechos', t: 'Gamaliel habla de un Teudas anterior a Judas el galileo, que se levantó en tiempos del censo, hacia el año 6 d.C.' },
          c: 'Teudas era un nombre común, y Josefo cuenta que tras la muerte de Herodes el Grande, en 4 a.C., surgieron muchos cabecillas rebeldes. Gamaliel se refiere a uno de ellos, distinto del que Josefo menciona décadas después.'
        } },
        'Los apóstoles fueron azotados y salieron «gozosos de haber sido tenidos por dignos de padecer afrenta por causa del Nombre» (Hch 5:41), y no cesaban de enseñar, en el templo y por las casas.'
      ],
      pensar: 'Ananías y Safira no pecaron por dar poco, sino por aparentar más de lo que daban (Hch 5:4). ¿Por qué crees que Dios trata con tanta seriedad la hipocresía en su iglesia?'
    },
    {
      id: 'cap-6', n: 'Capítulo 6: los siete y Esteban', ref: 'Hechos 6', fecha: 33,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-siete.webp', alt: 'Los apóstoles imponen las manos sobre siete hombres arrodillados, en una sala sencilla de Jerusalén, mientras la congregación ora alrededor', pie: 'Los apóstoles imponen las manos sobre los siete (Hch 6:6).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Los siete', tabla: {
          titulo: 'Los siete servidores',
          cab: ['Nombre', 'Lo que se sabe'],
          filas: [
            ['Esteban', 'Lleno de fe y del Espíritu Santo; hacía grandes prodigios; primer mártir'],
            ['Felipe', 'Evangelista en Samaria y con el etíope; vivió en Cesarea (Hch 21:8)'],
            ['Prócoro, Nicanor, Timón, Parmenas', 'Solo se conocen sus nombres'],
            ['Nicolás', 'Prosélito de Antioquía: un gentil convertido al judaísmo']
          ],
          nota: 'Los siete nombres son griegos, como los de las viudas que eran desatendidas.'
        } }
      ],
      texto: [
        'El crecimiento trajo su primer problema de organización. En la iglesia de Jerusalén había dos grupos de judíos: los hebreos, nacidos en la tierra de Israel, que hablaban arameo, y los griegos o helenistas, judíos nacidos en otras regiones del imperio, que hablaban griego. Hubo murmuración porque las viudas de los helenistas eran desatendidas en la distribución diaria de alimentos (Hch 6:1).',
        { h: 'Una solución guiada por el Espíritu (6:2-7)' },
        'Los doce reunieron a toda la iglesia y dijeron: «No es justo que nosotros dejemos la palabra de Dios, para servir a las mesas» (Hch 6:2). No despreciaban ese servicio, sino que reconocían su propio llamado: «nosotros persistiremos en la oración y en el ministerio de la palabra» (Hch 6:4). Propusieron elegir a siete varones «de buen testimonio, llenos del Espíritu Santo y de sabiduría» (Hch 6:3).',
        'Fíjate en el requisito. Para administrar alimentos no bastaba con ser honrado y capaz: había que estar lleno del Espíritu. En la iglesia, aun las tareas prácticas son ministerio, y requieren el poder y la sabiduría de Dios.',
        'La congregación eligió a siete hombres, todos con nombres griegos. La iglesia confió el problema de los helenistas a hermanos del propio grupo que se sentía desatendido. Los apóstoles oraron y les impusieron las manos. El resultado fue que «crecía la palabra del Señor, y el número de los discípulos se multiplicaba grandemente en Jerusalén; también muchos de los sacerdotes obedecían a la fe» (Hch 6:7).',
        'Muchos ven en estos siete a los primeros diáconos, palabra que significa «servidores», aunque Lucas no usa ese título para ellos.',
        { h: 'Esteban (6:8-15)' },
        'Uno de los siete pronto se destacó por mucho más que servir mesas. «Esteban, lleno de gracia y de poder, hacía grandes prodigios y señales entre el pueblo» (Hch 6:8). Unos judíos helenistas de la sinagoga de los libertos, con gente de Cirene, Alejandría, Cilicia y Asia, discutieron con él, pero «no podían resistir a la sabiduría y al Espíritu con que hablaba» (Hch 6:10). Es posible que Saulo de Tarso, ciudad de Cilicia, estuviera entre ellos.',
        'Incapaces de vencerlo con argumentos, sobornaron a testigos falsos que lo acusaron de hablar contra el templo y contra la ley de Moisés, como habían hecho con Jesús. Llevado ante el concilio, todos los que lo miraron «vieron su rostro como el rostro de un ángel» (Hch 6:15).'
      ],
      pensar: 'Para servir las mesas, la iglesia buscó hombres «llenos del Espíritu Santo y de sabiduría» (Hch 6:3). ¿Qué cambia en una tarea práctica de la iglesia cuando quien la hace está lleno del Espíritu?'
    },
    {
      id: 'cap-7', n: 'Capítulo 7: el discurso y la muerte de Esteban', ref: 'Hechos 7; Isaías 66:1-2', fecha: 33,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-esteban.webp', alt: 'Esteban, de rodillas fuera de los muros de Jerusalén, con el rostro iluminado y la mirada hacia el cielo abierto, mientras a lo lejos un joven llamado Saulo cuida unas ropas', pie: '«Veo los cielos abiertos, y al Hijo del Hombre que está a la diestra de Dios» (Hch 7:56).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'El discurso', tabla: {
          titulo: 'El discurso de Esteban',
          cab: ['Versículos', 'Tema', 'La enseñanza'],
          filas: [
            ['2-8', 'Abraham', 'Dios se reveló fuera de la tierra santa'],
            ['9-16', 'José', 'Rechazado por sus hermanos, fue su salvador'],
            ['17-43', 'Moisés', 'Rechazado por su pueblo, Dios lo envió como libertador'],
            ['44-50', 'El tabernáculo y el templo', 'El Altísimo no habita en templos hechos de mano'],
            ['51-53', 'La acusación', 'Resistís siempre al Espíritu Santo']
          ]
        } }
      ],
      texto: [
        'El discurso de Esteban es el más largo de Hechos. Acusado de hablar contra el templo y contra la ley, Esteban no se defiende a sí mismo: recorre la historia de Israel y muestra dos cosas. Dios nunca estuvo limitado a un lugar, y el pueblo siempre rechazó a los que Dios le envió.',
        { h: 'Dios no está atado a un lugar (7:2-50)' },
        '«El Dios de la gloria apareció a nuestro padre Abraham, estando en Mesopotamia» (Hch 7:2), lejos de Canaán. Dios estuvo con José en Egipto, y se reveló a Moisés en una zarza en el desierto, en un lugar que llamó tierra santa. Salomón le edificó casa, «si bien el Altísimo no habita en templos hechos de mano» (Hch 7:48), como lo anunció Isaías y lo citó Esteban: «El cielo es mi trono, y la tierra el estrado de mis pies» (Hch 7:49; Is 66:1). Esteban no despreciaba el templo, pero recordaba que la presencia de Dios no depende de un edificio.',
        { h: 'Un pueblo que rechaza a sus libertadores (7:9-53)' },
        'Los patriarcas, por envidia, vendieron a José, pero Dios lo hizo gobernador de Egipto y salvador de su familia. Los israelitas rechazaron a Moisés diciendo: «¿Quién te ha puesto por gobernante y juez?» (Hch 7:35), pero Dios lo envió como libertador. El patrón apuntaba a Jesús, rechazado por los suyos y exaltado por Dios. Esteban concluyó: «¡Duros de cerviz…! Vosotros resistís siempre al Espíritu Santo; como vuestros padres, así también vosotros» (Hch 7:51).',
        { posturas: {
          titulo: '¿Setenta o setenta y cinco?',
          a: { n: 'Génesis', t: 'El texto hebreo de Génesis 46:27, que sigue la RV 1960, cuenta setenta personas de la casa de Jacob que entraron en Egipto.' },
          b: { n: 'Esteban', t: 'Esteban habla de «setenta y cinco personas» (Hch 7:14).' },
          c: 'Esteban citaba la Septuaginta, la traducción griega que usaban los judíos de habla griega, que en Génesis 46:27 cuenta setenta y cinco: incluye a cinco descendientes de José. Ambos números son correctos según cómo se cuente la familia.'
        } },
        { h: 'El primer mártir (7:54-60)' },
        'Los oyentes se enfurecieron. Pero Esteban, «lleno del Espíritu Santo», vio la gloria de Dios y a Jesús a la diestra de Dios, y dijo: «veo los cielos abiertos, y al Hijo del Hombre que está a la diestra de Dios» (Hch 7:55-56). Jesús, que suele aparecer sentado a la diestra del Padre, está aquí de pie, como quien se levanta a recibir a su siervo.',
        'Lo sacaron de la ciudad y lo apedrearon. Como su Señor en la cruz, Esteban encomendó su espíritu y perdonó a sus asesinos: «Señor, no les tomes en cuenta este pecado» (Hch 7:60). Los testigos dejaron sus ropas a los pies de un joven llamado Saulo.'
      ],
      pensar: 'Esteban murió perdonando a quienes lo mataban, como Jesús en la cruz (Hch 7:60; Lc 23:34). Uno de los que aprobaban su muerte, Saulo, llegaría a ser el apóstol Pablo. ¿Qué poder puede tener el perdón de un creyente en la vida de quien le hace daño?'
    },
    {
      id: 'cap-8', n: 'Capítulo 8: Samaria y el etíope', ref: 'Hechos 8', fecha: 34,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-felipe-etiope.webp', alt: 'Felipe corre junto a un carro detenido en un camino del desierto y habla con un funcionario etíope que lee un rollo', pie: 'Felipe y el funcionario etíope (Hch 8:26-39).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: JUDEA, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'samaria', 'gaza', 'asdod', 'cesarea'], trazos: ['hch-samaria', 'hch-felipe'] } }
      ],
      texto: [
        'La muerte de Esteban desató una gran persecución, y todos, salvo los apóstoles, fueron esparcidos por Judea y Samaria. Saulo «asolaba la iglesia, y entrando casa por casa, arrastraba a hombres y a mujeres» (Hch 8:3). Pero los esparcidos iban por todas partes anunciando el evangelio.',
        { h: 'Felipe en Samaria (8:4-13)' },
        'Felipe predicó a Cristo en la ciudad de Samaria, con señales: salían espíritus inmundos y eran sanados paralíticos y cojos, «así que había gran gozo en aquella ciudad» (Hch 8:8). Allí vivía Simón, un mago que se hacía pasar por «el gran poder de Dios». Él también creyó, se bautizó y seguía a Felipe, atónito ante las señales.',
        { h: 'Los samaritanos reciben el Espíritu (8:14-25)' },
        'Este pasaje es clave para entender la experiencia del Espíritu. Los samaritanos habían creído y habían sido bautizados en el nombre de Jesús, pero el Espíritu Santo «aún no había descendido sobre ninguno de ellos» (Hch 8:16). Eran creyentes, y sin embargo les faltaba algo. Pedro y Juan oraron por ellos y les impusieron las manos, «y recibían el Espíritu Santo» (Hch 8:17).',
        'Lucas no dice qué ocurrió, pero dice que Simón «vio» que se daba el Espíritu por la imposición de manos (Hch 8:18). Hubo una manifestación visible y audible, que a la luz de los otros relatos de Hechos se entiende como el hablar en lenguas. Simón quiso comprar con dinero ese poder, y Pedro lo reprendió con dureza: el don de Dios no se compra, y su corazón no era recto delante de Dios. De su nombre viene la palabra «simonía», el comercio con las cosas sagradas.',
        { h: 'El funcionario etíope (8:26-40)' },
        'Un ángel envió a Felipe al camino desierto de Jerusalén a Gaza. Allí viajaba un etíope, alto funcionario de Candace, reina de los etíopes, que volvía de adorar en Jerusalén leyendo a Isaías. Leía: «Como oveja a la muerte fue llevado» (Hch 8:32), y preguntó de quién hablaba el profeta. Felipe, comenzando desde esa Escritura, le anunció el evangelio de Jesús.',
        'Al ver agua, el etíope pidió ser bautizado. Cuando subieron del agua, el Espíritu del Señor arrebató a Felipe, y el etíope «siguió gozoso su camino» (Hch 8:39). Felipe apareció en Azoto y predicó en todas las ciudades hasta Cesarea.',
        'Como eunuco, la ley le impedía entrar en la congregación de Jehová (Dt 23:1). Pero Isaías había prometido que Dios daría a los eunucos que le fueran fieles un nombre mejor que el de hijos e hijas (Is 56:3-5). En Cristo, ese hombre que había quedado fuera fue recibido plenamente.'
      ],
      pensar: 'Los samaritanos creyeron y fueron bautizados, y después recibieron el Espíritu Santo cuando los apóstoles oraron por ellos (Hch 8:12-17). ¿Qué te enseña este relato sobre la diferencia entre la salvación y el bautismo en el Espíritu Santo?'
    },
    {
      id: 'cap-9', n: 'Capítulo 9: la conversión de Saulo', ref: 'Hechos 9', fecha: 34,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-saulo-damasco.webp', alt: 'En un camino cerca de Damasco, una luz deslumbrante desde el cielo rodea a Saulo, caído en el suelo junto a su caballo, mientras sus acompañantes retroceden atemorizados', pie: '«Saulo, Saulo, ¿por qué me persigues?» (Hch 9:4).', origen: 'ia' }
      ],
      texto: [
        'Saulo, «respirando aún amenazas y muerte contra los discípulos del Señor» (Hch 9:1), pidió cartas al sumo sacerdote para llevar presos desde Damasco a los que fueran «de este Camino». Es el primer nombre con que Hechos llama a la fe cristiana: el Camino.',
        { h: 'En el camino a Damasco (9:3-9)' },
        'Cerca de Damasco lo rodeó una luz del cielo. Cayó a tierra y oyó una voz: «Saulo, Saulo, ¿por qué me persigues?». Él preguntó: «¿Quién eres, Señor?», y la respuesta cambió su vida: «Yo soy Jesús, a quien tú persigues» (Hch 9:4-5). Jesús se identifica con su iglesia: perseguirla es perseguirlo a él. Saulo se levantó ciego y fue llevado de la mano a Damasco, donde estuvo tres días sin ver, sin comer ni beber, orando.',
        { h: 'Ananías (9:10-19)' },
        'El Señor habló en visión a Ananías, un discípulo de Damasco, y lo envió a orar por Saulo. Ananías temía, porque conocía su fama, pero el Señor le dijo: «instrumento escogido me es éste, para llevar mi nombre en presencia de los gentiles, y de reyes, y de los hijos de Israel» (Hch 9:15).',
        'Ananías le impuso las manos y le dijo: «Hermano Saulo, el Señor Jesús… me ha enviado para que recibas la vista y seas lleno del Espíritu Santo» (Hch 9:17). Saulo recobró la vista y fue bautizado. Lucas no describe aquí la manifestación de su llenura, pero el mismo Pablo escribió años después: «Doy gracias a Dios que hablo en lenguas más que todos vosotros» (1 Co 14:18). También en su caso, ser lleno del Espíritu fue una experiencia posterior a su encuentro con Cristo.',
        { h: 'Del perseguidor al predicador (9:19-31)' },
        'En seguida predicaba en las sinagogas que Jesús era el Hijo de Dios. Los judíos de Damasco planearon matarlo, y los discípulos lo bajaron de noche por el muro en una canasta. En Jerusalén, los creyentes le tenían miedo, hasta que Bernabé lo presentó a los apóstoles. Cuando también allí intentaron matarlo, lo enviaron a Tarso. Las iglesias de Judea, Galilea y Samaria tuvieron paz y se acrecentaban, fortalecidas por el Espíritu Santo.',
        { h: 'Pedro en Lida y Jope (9:32-43)' },
        'El capítulo termina con Pedro. En Lida sanó a Eneas, paralítico desde hacía ocho años: «Eneas, Jesucristo te sana» (Hch 9:34). En Jope, Dorcas, una discípula llena de buenas obras, murió; Pedro oró de rodillas y le dijo: «Tabita, levántate» (Hch 9:40), y ella abrió los ojos. Muchos creyeron en el Señor.'
      ],
      pensar: 'Jesús le dijo a Saulo: «¿por qué me persigues?», aunque Saulo perseguía a los creyentes (Hch 9:4). ¿Qué te enseña esto sobre cómo ve Jesús a su iglesia y lo que se le hace a ella?'
    },
    {
      id: 'cap-10', n: 'Capítulo 10: Pedro en casa de Cornelio', ref: 'Hechos 10', fecha: 40,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-centurion.webp', alt: 'Un centurión romano con su casco de cresta transversal y su vara de vid', pie: 'Cornelio era un centurión de la compañía llamada la Italiana (Hch 10:1).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mientras aún hablaba Pedro estas palabras, el Espíritu Santo cayó sobre todos los que oían el discurso. Y los fieles de la circuncisión que habían venido con Pedro se quedaron atónitos de que también sobre los gentiles se derramase el don del Espíritu Santo. Porque los oían que hablaban en lenguas, y que magnificaban a Dios.', ref: 'Hechos 10:44-46' }
      ],
      texto: [
        'El capítulo 10 es el punto de inflexión del libro. Dios prepara a dos hombres a la vez para derribar el muro entre judíos y gentiles.',
        { h: 'Cornelio (10:1-8)' },
        'Cornelio era centurión de la compañía llamada la Italiana, en Cesarea. Era «piadoso y temeroso de Dios con toda su casa», daba limosnas y oraba siempre (Hch 10:2). Era un gentil sincero que buscaba a Dios. Un ángel le dijo que sus oraciones habían subido para memoria delante de Dios, y le mandó buscar a Pedro en Jope. Dios no le reveló el evangelio por medio del ángel: lo envió a buscar a un predicador.',
        { h: 'La visión de Pedro (10:9-23)' },
        'Al día siguiente, Pedro oraba en la azotea y tuvo una visión: un gran lienzo que bajaba del cielo con toda clase de animales, puros e impuros según la ley, y una voz que le decía que matara y comiera. Pedro se negó: nunca había comido nada inmundo. La voz respondió: «Lo que Dios limpió, no lo llames tú común» (Hch 10:15). Ocurrió tres veces. Mientras Pedro pensaba en la visión, llegaron los enviados de Cornelio, y el Espíritu le dijo que fuera con ellos sin dudar.',
        { h: 'En Cesarea (10:24-43)' },
        'Cornelio había reunido a sus parientes y amigos. Cuando se postró ante Pedro, este lo levantó: «Levántate, pues yo mismo también soy hombre» (Hch 10:26). Pedro entró a la casa de un gentil, algo que un judío piadoso evitaba, y explicó lo que había entendido: «En verdad comprendo que Dios no hace acepción de personas, sino que en toda nación se agrada del que le teme y hace justicia» (Hch 10:34-35). Luego predicó a Jesús: ungido por Dios con el Espíritu Santo y con poder, crucificado, resucitado al tercer día y constituido juez de vivos y muertos.',
        { h: 'El Pentecostés de los gentiles (10:44-48)' },
        'Pedro no había terminado de hablar cuando el Espíritu Santo cayó sobre todos los que oían. Los judíos que acompañaban a Pedro quedaron atónitos de que también sobre los gentiles se derramara el don del Espíritu, «porque los oían que hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46).',
        'Fíjate en la palabra «porque». ¿Cómo supieron que esos gentiles habían recibido el Espíritu? Porque hablaban en lenguas. Las lenguas fueron la señal reconocible de que había ocurrido lo mismo que en Pentecostés. En este caso, el Espíritu cayó mientras oían y creían, antes del bautismo en agua. Pedro concluyó que nadie podía impedir que fueran bautizados quienes habían recibido el Espíritu Santo «también como nosotros» (Hch 10:47).'
      ],
      pensar: 'Los judíos supieron que los gentiles habían recibido el Espíritu Santo «porque los oían que hablaban en lenguas» (Hch 10:46). ¿Por qué crees que Dios dio una señal tan clara en ese momento de la historia de la iglesia?'
    },
    {
      id: 'cap-11', n: 'Capítulo 11: Jerusalén y Antioquía', ref: 'Hechos 11', fecha: [40, 44],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-44'], lugares: ['jerusalen', 'cesarea', 'tiro', 'sidon', 'salamina-chipre', 'antioquia', 'tarso'], trazos: ['hch-antioquia'] } }
      ],
      texto: [
        'La noticia de que los gentiles habían recibido la palabra de Dios llegó a Jerusalén antes que Pedro. Cuando subió, los creyentes judíos le reprocharon: «¿Por qué has entrado en casa de hombres incircuncisos, y has comido con ellos?» (Hch 11:3).',
        { h: 'Pedro explica (11:4-18)' },
        'Pedro contó todo por orden: la visión, los enviados, la orden del Espíritu y lo ocurrido en Cesarea. Su argumento decisivo fue la experiencia del Espíritu: «cuando comencé a hablar, cayó el Espíritu Santo sobre ellos también, como sobre nosotros al principio» (Hch 11:15). Recordó la palabra del Señor: «Juan ciertamente bautizó en agua, mas vosotros seréis bautizados con el Espíritu Santo» (Hch 11:16). Lo de Cesarea fue, entonces, el mismo bautismo en el Espíritu que recibieron los apóstoles en Pentecostés, con la misma señal.',
        '«Si Dios, pues, les concedió también el mismo don que a nosotros… ¿quién era yo que pudiese estorbar a Dios?» (Hch 11:17). Los creyentes de Jerusalén callaron y glorificaron a Dios: «¡De manera que también a los gentiles ha dado Dios arrepentimiento para vida!» (Hch 11:18).',
        { h: 'La iglesia de Antioquía (11:19-26)' },
        'Mientras tanto, creyentes esparcidos por la persecución habían llegado a Fenicia, Chipre y Antioquía hablando solo a los judíos. Pero algunos, de Chipre y de Cirene, hablaron también a los griegos, «y la mano del Señor estaba con ellos, y gran número creyó y se convirtió al Señor» (Hch 11:21).',
        'Jerusalén envió a Bernabé, que al ver la gracia de Dios se regocijó y exhortó a todos a permanecer fieles al Señor «con propósito de corazón». Lucas lo describe como «varón bueno, y lleno del Espíritu Santo y de fe» (Hch 11:24). Bernabé fue a Tarso a buscar a Saulo, y durante un año enseñaron juntos a mucha gente. «Y a los discípulos se les llamó cristianos por primera vez en Antioquía» (Hch 11:26).',
        { h: 'Profecía y generosidad (11:27-30)' },
        'Unos profetas bajaron de Jerusalén a Antioquía. Uno de ellos, Agabo, anunció por el Espíritu una gran hambre en toda la tierra habitada, que ocurrió en tiempos del emperador Claudio. Los historiadores romanos confirman que hubo varias hambrunas en su reinado. La iglesia de Antioquía no esperó a que llegara: cada uno, conforme a lo que tenía, envió ayuda a los hermanos de Judea por medio de Bernabé y Saulo.',
        'El don de profecía funcionaba en la iglesia, y la iglesia respondía a la profecía con obediencia práctica. La primera iglesia gentil ayudó a la iglesia madre judía: el evangelio había unido lo que antes estaba separado.'
      ],
      pensar: 'Pedro dijo: «¿quién era yo que pudiese estorbar a Dios?» (Hch 11:17). ¿En qué situaciones podríamos estar estorbando lo que Dios quiere hacer, por aferrarnos a nuestras costumbres o prejuicios?'
    },
    {
      id: 'cap-12', n: 'Capítulo 12: Herodes, Pedro y la oración', ref: 'Hechos 12', fecha: 44,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pedro-carcel.webp', alt: 'En una celda oscura, un ángel resplandeciente despierta a Pedro, dormido entre dos soldados, mientras las cadenas caen de sus manos', pie: '«Las cadenas se le cayeron de las manos» (Hch 12:7).', origen: 'ia' }
      ],
      texto: [
        'Herodes Agripa I, nieto de Herodes el Grande, gobernaba Judea como rey por favor del emperador. Para ganar popularidad entre los judíos, persiguió a la iglesia: hizo matar a espada a Jacobo, hermano de Juan, el primero de los doce en morir por su fe. Al ver que esto agradaba a los judíos, prendió también a Pedro durante la fiesta de los panes sin levadura.',
        { h: 'La iglesia ora (12:5-17)' },
        '«Así que Pedro estaba custodiado en la cárcel; pero la iglesia hacía sin cesar oración a Dios por él» (Hch 12:5). La noche antes de su juicio, Pedro dormía entre dos soldados, atado con dos cadenas, mientras otros guardias vigilaban la puerta. Dormía tranquilo, aunque al día siguiente podía morir.',
        'Un ángel del Señor se presentó, una luz resplandeció en la cárcel, y el ángel lo despertó: «Levántate pronto». Las cadenas se le cayeron de las manos. Pedro lo siguió creyendo que era una visión. Pasaron la primera y la segunda guardia, y la puerta de hierro que daba a la ciudad se les abrió por sí misma. Solo en la calle, cuando el ángel lo dejó, Pedro volvió en sí: «Ahora entiendo verdaderamente que el Señor ha enviado su ángel» (Hch 12:11).',
        'Fue a la casa de María, la madre de Juan Marcos, donde muchos estaban reunidos orando. Una muchacha llamada Rode reconoció su voz y, de gozo, corrió a avisar sin abrir la puerta. Los que oraban le dijeron que estaba loca. Oraban por Pedro, pero les costó creer que Dios hubiera respondido. Pedro siguió llamando, le abrieron, contó lo ocurrido y se fue a otro lugar.',
        { h: 'La muerte de Herodes (12:18-25)' },
        'Herodes mandó ejecutar a los guardias y se fue a Cesarea. Allí, vestido con ropas reales, dio un discurso, y el pueblo gritó: «¡Voz de Dios, y no de hombre!» (Hch 12:22). Al momento, un ángel del Señor lo hirió, «por cuanto no dio la gloria a Dios», y murió (Hch 12:23).',
        'El historiador judío Josefo narra el mismo hecho: en el año 44, en unos juegos en Cesarea, Agripa apareció con una vestidura de plata que brillaba al sol; sus aduladores lo llamaron dios, él no los reprendió, y fue atacado por un dolor violento del que murió a los cinco días. Las dos fuentes coinciden en lo esencial.',
        'El contraste final es intencional. El rey que perseguía a la iglesia murió, «pero la palabra del Señor crecía y se multiplicaba» (Hch 12:24). Bernabé y Saulo volvieron de Jerusalén llevando consigo a Juan Marcos.'
      ],
      pensar: 'La iglesia oraba por Pedro, pero cuando Dios respondió, les costó creerlo (Hch 12:12-16). ¿Oras esperando de verdad que Dios responda? ¿Cómo puedes crecer en una oración con fe?'
    },
    {
      id: 'cap-13', n: 'Capítulo 13: enviados por el Espíritu', ref: 'Hechos 13', fecha: [46, 47],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-antioquia-envio.webp', alt: 'En la iglesia de Antioquía, un grupo de profetas y maestros de distintos orígenes impone las manos sobre Bernabé y Saulo, arrodillados, después de ayunar y orar', pie: '«Apartadme a Bernabé y a Saulo» (Hch 13:2).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-44'], lugares: ['antioquia', 'seleucia', 'salamina-chipre', 'pafos', 'perge', 'antioquia-pisidia'], trazos: ['viaje-1'] } }
      ],
      texto: [
        'Comienza la tercera parte del libro. En la iglesia de Antioquía había profetas y maestros, y «ministrando éstos al Señor, y ayunando, dijo el Espíritu Santo: Apartadme a Bernabé y a Saulo para la obra a que los he llamado» (Hch 13:2). La misión no nació de un plan humano, sino de una iglesia que adoraba y ayunaba, y escuchaba la voz del Espíritu, probablemente por medio de una profecía. La iglesia confirmó el llamado: ayunaron, oraron, les impusieron las manos y los despidieron.',
        { h: 'Chipre: el mago y el procónsul (13:4-12)' },
        'Enviados por el Espíritu Santo, llevando a Juan Marcos como ayudante, recorrieron Chipre predicando en las sinagogas. En Pafos, el procónsul Sergio Paulo quería oír la palabra, pero el mago Elimas se oponía. «Entonces Saulo, que también es Pablo, lleno del Espíritu Santo» (Hch 13:9), lo reprendió, y el mago quedó ciego por un tiempo. El procónsul creyó, maravillado de la doctrina del Señor. Desde aquí, Lucas usa el nombre romano, Pablo, y lo pone al frente del grupo.',
        { h: 'Antioquía de Pisidia (13:13-52)' },
        'En Perge, Juan Marcos los dejó y volvió a Jerusalén, un abandono que más tarde causaría un desacuerdo. Pablo y Bernabé subieron a Antioquía de Pisidia. En la sinagoga, después de la lectura de la ley y los profetas, los invitaron a hablar. El sermón de Pablo recorre la historia de Israel hasta David, y presenta a Jesús como el Salvador prometido de su descendencia. Lo crucificaron, pero Dios lo levantó de los muertos, como anunciaban los Salmos.',
        'El centro del mensaje es la justificación: «por medio de él se os anuncia perdón de pecados, y que de todo aquello de que por la ley de Moisés no pudisteis ser justificados, en él es justificado todo aquel que cree» (Hch 13:38-39). Es la misma enseñanza que Pablo desarrollará en Gálatas y Romanos.',
        'El siguiente día de reposo se juntó casi toda la ciudad. Los judíos, llenos de celos, contradecían, y Pablo y Bernabé respondieron: «A vosotros a la verdad era necesario que se os hablase primero la palabra de Dios; mas puesto que la desecháis… he aquí, nos volvemos a los gentiles» (Hch 13:46). Citaron a Isaías: Dios había puesto a su siervo «para luz de los gentiles» (Hch 13:47).',
        'Los gentiles se regocijaron, y la palabra se difundió por toda la provincia. Los judíos levantaron persecución y los expulsaron, y ellos sacudieron el polvo de sus pies. Pero los discípulos «estaban llenos de gozo y del Espíritu Santo» (Hch 13:52).'
      ],
      pensar: 'El llamado misionero de Bernabé y Saulo llegó mientras la iglesia ministraba al Señor y ayunaba (Hch 13:2). ¿Qué lugar tienen la adoración, la oración y el ayuno cuando buscas conocer la voluntad de Dios para tu vida?'
    },
    {
      id: 'cap-14', n: 'Capítulo 14: Iconio, Listra y Derbe', ref: 'Hechos 14', fecha: [47, 48],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-listra.webp', alt: 'En Listra, Pablo y Bernabé rasgan sus ropas y gritan a una multitud pagana que trae toros adornados con guirnaldas para ofrecerles sacrificios ante el templo de Júpiter', pie: '«Nosotros también somos hombres semejantes a vosotros» (Hch 14:15).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'antioquia-pisidia', 'iconio', 'listra', 'derbe', 'perge', 'atalia'], trazos: ['viaje-1'] } }
      ],
      texto: [
        'En Iconio, Pablo y Bernabé hablaron en la sinagoga de tal manera que creyó una gran multitud de judíos y griegos. Se quedaron mucho tiempo, hablando con denuedo, confiados en el Señor, «el cual daba testimonio a la palabra de su gracia, concediendo que se hiciesen por las manos de ellos señales y prodigios» (Hch 14:3). Las señales no reemplazaban la predicación: la confirmaban. Cuando supieron que planeaban apedrearlos, huyeron a Listra y Derbe.',
        { h: 'Listra: de dioses a apedreados (14:8-20)' },
        'En Listra había un hombre cojo de nacimiento que nunca había andado. Oía hablar a Pablo, y Pablo, «viendo que tenía fe para ser sanado» (Hch 14:9), le dijo a gran voz: «Levántate derecho sobre tus pies». El hombre saltó y anduvo.',
        'La multitud, que hablaba en lengua licaónica, gritó que los dioses habían bajado en forma de hombres. Llamaron a Bernabé Júpiter y a Pablo Mercurio, porque era el que hablaba, y el sacerdote de Júpiter trajo toros con guirnaldas para ofrecerles sacrificios. Al entenderlo, los apóstoles rasgaron sus ropas y gritaron que eran hombres como ellos, y que anunciaban que se convirtieran de esas vanidades al Dios vivo, que hizo el cielo, la tierra y el mar, y que nunca dejó de dar testimonio de sí mismo con lluvias, cosechas y alimento (Hch 14:15-17).',
        'Es un mensaje distinto del que se predicaba en las sinagogas. A un público pagano, que no conocía las Escrituras, Pablo comenzó por el Dios creador que se revela en la naturaleza.',
        'Poco después, judíos de Antioquía e Iconio persuadieron a la multitud, y los mismos que querían adorarlo apedrearon a Pablo y lo arrastraron fuera de la ciudad, dándolo por muerto. Pero cuando los discípulos lo rodearon, se levantó y entró en la ciudad, y al día siguiente salió con Bernabé a Derbe. Años después, Pablo escribiría: «una vez apedreado» (2 Co 11:25).',
        { h: 'Confirmando a los discípulos (14:21-28)' },
        'Después de hacer muchos discípulos en Derbe, volvieron por Listra, Iconio y Antioquía, «confirmando los ánimos de los discípulos, exhortándoles a que permaneciesen en la fe» (Hch 14:22). En cada iglesia constituyeron ancianos y, después de orar con ayunos, los encomendaron al Señor. De vuelta en Antioquía de Siria, contaron cuán grandes cosas había hecho Dios con ellos, y cómo había abierto la puerta de la fe a los gentiles.'
      ],
      pensar: 'La misma multitud que quiso adorar a Pablo terminó apedreándolo (Hch 14:11-19). ¿Qué te enseña esto sobre poner tu seguridad en la aprobación de la gente?'
    },
    {
      id: 'cap-15', n: 'Capítulo 15: el concilio de Jerusalén', ref: 'Hechos 15; Amós 9:11-12', fecha: 49,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-concilio.webp', alt: 'Los apóstoles y los ancianos de Jerusalén reunidos en una sala, escuchando a Jacobo, un hombre de barba larga que habla de pie, mientras Pedro, Pablo y Bernabé están sentados entre ellos', pie: 'El concilio de Jerusalén (Hch 15:6-21).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'El concilio', tabla: {
          titulo: 'Cómo se resolvió la controversia',
          cab: ['Quién habla', 'Argumento'],
          filas: [
            ['Algunos fariseos creyentes', 'Los gentiles deben circuncidarse y guardar la ley de Moisés (Hch 15:5)'],
            ['Pedro', 'Dios les dio el Espíritu Santo igual que a nosotros; somos salvos por la gracia del Señor Jesús (Hch 15:7-11)'],
            ['Pablo y Bernabé', 'Las señales y maravillas que Dios hizo entre los gentiles (Hch 15:12)'],
            ['Jacobo', 'Lo confirman los profetas (Am 9:11-12): no inquietar a los gentiles (Hch 15:13-21)'],
            ['La carta', '«Ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28)']
          ]
        } }
      ],
      texto: [
        'Algunos que venían de Judea enseñaban a los hermanos de Antioquía: «Si no os circuncidáis conforme al rito de Moisés, no podéis ser salvos» (Hch 15:1). Era la pregunta más importante de la iglesia primitiva: ¿un gentil debe hacerse judío para ser cristiano? Pablo y Bernabé fueron enviados a Jerusalén a tratar el asunto con los apóstoles y los ancianos.',
        { h: 'El debate (15:6-21)' },
        'Hubo una larga discusión. Pedro recordó lo que Dios había hecho en casa de Cornelio: Dios, que conoce los corazones, «les dio testimonio, dándoles el Espíritu Santo lo mismo que a nosotros; y ninguna diferencia hizo entre nosotros y ellos, purificando por la fe sus corazones» (Hch 15:8-9). ¿Por qué imponerles un yugo que ni sus padres ni ellos pudieron llevar? «Antes creemos que por la gracia del Señor Jesús seremos salvos, de igual modo que ellos» (Hch 15:11).',
        'Pablo y Bernabé contaron las señales y maravillas que Dios había hecho entre los gentiles. Finalmente habló Jacobo, el hermano del Señor y líder de la iglesia de Jerusalén. Dijo que Dios había visitado a los gentiles «para tomar de ellos pueblo para su nombre», y que con esto concordaban los profetas: «Después de esto volveré y reedificaré el tabernáculo de David, que está caído» (Hch 15:14-16).',
        'Jacobo distingue dos etapas. Primero, Dios toma de entre los gentiles un pueblo para su nombre: es el tiempo de la iglesia. «Después de esto», volverá y restaurará el reino de David: es la restauración futura de Israel, cuando Cristo regrese. La iglesia no reemplaza a Israel; Dios cumplirá también sus promesas a la descendencia de David.',
        { h: 'La decisión (15:22-35)' },
        'Jacobo propuso no inquietar a los gentiles que se convertían a Dios, sino escribirles que se apartaran de lo contaminado por los ídolos, de fornicación, de ahogado y de sangre. Eran prácticas especialmente ofensivas para los judíos, y evitarlas permitía la comunión entre creyentes de ambos orígenes. La carta decía: «Porque ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28). La decisión fue una obra conjunta de la iglesia y del Espíritu.',
        'En Antioquía, la carta produjo gran gozo. Judas y Silas, que también eran profetas, consolaron y confirmaron a los hermanos con abundancia de palabras.',
        { h: 'La separación (15:36-41)' },
        'Pablo propuso volver a visitar las iglesias. Bernabé quería llevar a Juan Marcos; Pablo no, porque los había abandonado en Panfilia. «Hubo tal desacuerdo entre ellos, que se separaron» (Hch 15:39). Bernabé fue con Marcos a Chipre, y Pablo con Silas a Siria y Cilicia. Años después, Pablo pediría que le trajeran a Marcos, «porque me es útil para el ministerio» (2 Ti 4:11).'
      ],
      pensar: 'El concilio resolvió un conflicto escuchando lo que Dios había hecho, examinando las Escrituras y buscando la dirección del Espíritu (Hch 15:28). ¿Qué te enseña esto sobre cómo resolver los desacuerdos en la iglesia?'
    },
    {
      id: 'cap-16', n: 'Capítulo 16: Macedonia y la cárcel de Filipos', ref: 'Hechos 16', fecha: 50,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-carcel-filipos.webp', alt: 'A medianoche, en el calabozo de Filipos, Pablo y Silas, con los pies en el cepo y las espaldas heridas, cantan con el rostro levantado mientras los muros tiemblan y las puertas se abren', pie: '«A medianoche, orando Pablo y Silas, cantaban himnos a Dios» (Hch 16:25).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-48'], lugares: ['derbe', 'listra', 'iconio', 'antioquia-pisidia', 'troas', 'neapolis', 'filipos'], trazos: ['viaje-2'] } }
      ],
      texto: [
        'En Listra, Pablo encontró a Timoteo, hijo de una judía creyente y de padre griego, del cual daban buen testimonio los hermanos. Pablo lo tomó como compañero, y las iglesias eran confirmadas en la fe y aumentaban en número cada día.',
        { h: 'Puertas cerradas, puerta abierta (16:6-10)' },
        'Al atravesar Frigia y Galacia, «les fue prohibido por el Espíritu Santo hablar la palabra en Asia» (Hch 16:6); quisieron ir a Bitinia, «pero el Espíritu no se lo permitió» (Hch 16:7). No sabemos cómo se manifestó esa prohibición: quizá por una profecía, por una impresión interior o por circunstancias. Llegaron a Troas, y allí, de noche, Pablo vio a un varón macedonio que le rogaba: «Pasa a Macedonia y ayúdanos» (Hch 16:9). El relato pasa a «nosotros»: Lucas se había unido al grupo.',
        { h: 'Lidia (16:11-15)' },
        'En Filipos, colonia romana, no había sinagoga. El día de reposo salieron junto al río, donde solían orar algunas mujeres. Una de ellas, Lidia, vendedora de púrpura de Tiatira, que adoraba a Dios, escuchaba, «y el Señor abrió el corazón de ella para que estuviese atenta» (Hch 16:14). Fue bautizada con su familia, y su casa fue la primera iglesia de Europa.',
        { h: 'Una muchacha liberada (16:16-24)' },
        'Una muchacha esclava con espíritu de adivinación, que daba grandes ganancias a sus amos, seguía a los misioneros gritando: «Estos hombres son siervos del Dios Altísimo» (Hch 16:17). Lo que decía era verdad, pero venía de un espíritu malo. Pablo se volvió y le dijo al espíritu: «Te mando en el nombre de Jesucristo, que salgas de ella», y salió en aquella misma hora (Hch 16:18). Sus amos, al ver perdida su ganancia, arrastraron a Pablo y Silas ante los magistrados, que los mandaron azotar con varas y echar en el calabozo de más adentro, con los pies en el cepo.',
        { h: 'Himnos a medianoche (16:25-40)' },
        'A medianoche, con las espaldas heridas, Pablo y Silas oraban y cantaban himnos, y los presos los oían. Sobrevino un gran terremoto: se abrieron las puertas y se soltaron las cadenas. El carcelero, creyendo que los presos habían huido, iba a matarse, pero Pablo le gritó que no se hiciera daño. Temblando, preguntó: «Señores, ¿qué debo hacer para ser salvo?». Ellos respondieron: «Cree en el Señor Jesucristo, y serás salvo, tú y tu casa» (Hch 16:30-31). Esa misma noche fue bautizado con toda su familia.',
        'Al día siguiente, Pablo hizo valer su ciudadanía romana: los habían azotado sin juicio. Los magistrados vinieron a pedirles disculpas y a rogarles que salieran de la ciudad.'
      ],
      pensar: 'Pablo y Silas cantaban himnos a medianoche, heridos y encadenados, y los demás presos los oían (Hch 16:25). ¿Qué testimonio da un creyente que adora a Dios en medio del sufrimiento?'
    },
    {
      id: 'cap-17', n: 'Capítulo 17: Tesalónica, Berea y Atenas', ref: 'Hechos 17', fecha: [50, 51],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-griego/img/grecia-pablo-areopago.webp', foco: '62% 50%', alt: 'El apóstol Pablo predica de pie en el Areópago de Atenas ante filósofos griegos, con la Acrópolis al fondo', pie: '«Al que vosotros adoráis, pues, sin conocerle, es a quien yo os anuncio» (Hch 17:23).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['filipos', 'anfipolis', 'tesalonica', 'berea', 'atenas'], trazos: ['viaje-2'] } }
      ],
      texto: [
        'Por la vía Egnatia, la gran calzada romana, Pablo y Silas llegaron a Tesalónica, capital de Macedonia. Como acostumbraba, Pablo discutió en la sinagoga durante tres días de reposo, mostrando por las Escrituras que era necesario que el Cristo padeciese y resucitase, y que Jesús era el Cristo. Creyeron algunos judíos, muchos griegos piadosos y no pocas mujeres nobles.',
        'Los judíos, celosos, alborotaron la ciudad y, al no encontrar a Pablo, arrastraron a Jasón ante las autoridades gritando: «Estos que trastornan el mundo entero también han venido acá» (Hch 17:6). Pablo tuvo que salir de noche. Meses después, preocupado por esa iglesia joven, les escribió las cartas a los Tesalonicenses, donde les enseña sobre la venida del Señor y el arrebatamiento de la iglesia (1 Ts 4:13-18).',
        { h: 'Berea (17:10-15)' },
        'En Berea, los judíos «eran más nobles que los que estaban en Tesalónica, pues recibieron la palabra con toda solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11). Recibir la palabra con entusiasmo y examinarla a la luz de la Biblia no se contradicen. Pero los de Tesalónica llegaron también allí, y Pablo siguió solo a Atenas.',
        { h: 'Atenas (17:16-34)' },
        'Atenas ya no tenía el poder de otros tiempos, pero seguía siendo la capital de la filosofía. Pablo vio una ciudad «entregada a la idolatría» (Hch 17:16) y se le enardeció el espíritu. Discutía en la sinagoga y en la plaza con epicúreos y estoicos, que lo llamaron «palabrero» y lo llevaron al Areópago.',
        'Allí, Pablo dio un discurso modelo para hablar a quienes no conocen la Biblia. Partió de algo que ellos tenían: un altar «AL DIOS NO CONOCIDO» (Hch 17:23). Les anunció al Dios que hizo el mundo, que no habita en templos hechos por manos, que da a todos vida y aliento, que de una sangre hizo todo el linaje humano, y que no está lejos de cada uno, «porque en él vivimos, y nos movemos, y somos», como dijeron sus propios poetas (Hch 17:28).',
        'Luego fue al punto que no podía omitir: Dios manda ahora a todos los hombres en todo lugar que se arrepientan, porque ha establecido un día en el cual juzgará al mundo con justicia por medio del varón que designó, «dando fe a todos con haberle levantado de los muertos» (Hch 17:31). Al oír de la resurrección, unos se burlaron y otros dijeron que lo oirían otra vez. Pero algunos creyeron, entre ellos Dionisio, miembro del Areópago, y una mujer llamada Dámaris.'
      ],
      pensar: 'Los de Berea recibieron la palabra con entusiasmo y la examinaban cada día en las Escrituras (Hch 17:11). ¿Cómo puedes practicar esa misma actitud con lo que oyes predicar?'
    },
    {
      id: 'cap-18', n: 'Capítulo 18: Corinto', ref: 'Hechos 18', fecha: [51, 53],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-galion.webp', alt: 'El apóstol Pablo de pie ante el procónsul Galión, sentado en una tribuna de piedra en el foro de Corinto', pie: 'Pablo ante Galión (Hch 18:12-17).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['atenas', 'corinto', 'cencrea', 'efeso', 'cesarea', 'jerusalen', 'antioquia'], trazos: ['viaje-2'] } }
      ],
      texto: [
        'Corinto era una ciudad rica y cosmopolita, con dos puertos, y famosa en todo el imperio por su inmoralidad. Pablo llegó solo, y encontró a Aquila y Priscila, un matrimonio judío expulsado de Roma por el edicto de Claudio. Tenían el mismo oficio, hacer tiendas, y Pablo trabajó con ellos y se quedó en su casa. Cada día de reposo discutía en la sinagoga.',
        'Cuando Silas y Timoteo llegaron de Macedonia, probablemente con una ofrenda de las iglesias, Pablo se dedicó por entero a la predicación. Los judíos se opusieron y blasfemaron, y Pablo se fue a la casa de Ticio Justo, un temeroso de Dios que vivía junto a la sinagoga. Crispo, el principal de la sinagoga, creyó con toda su casa, y muchos corintios creían y eran bautizados.',
        { h: 'La palabra del Señor en la noche (18:9-11)' },
        'Pablo venía de ser expulsado de Filipos, de Tesalónica y de Berea, y de ser despreciado en Atenas. Más tarde escribiría que llegó a Corinto «con debilidad, y mucho temor y temblor» (1 Co 2:3). Entonces el Señor le dijo en visión: «No temas, sino habla, y no calles; porque yo estoy contigo, y ninguno pondrá sobre ti la mano para hacerte mal, porque yo tengo mucho pueblo en esta ciudad» (Hch 18:9-10). Pablo se quedó un año y seis meses.',
        { h: 'Ante Galión (18:12-17)' },
        'Los judíos llevaron a Pablo al tribunal del procónsul Galión, acusándolo de enseñar a honrar a Dios contra la ley. Antes de que Pablo hablara, Galión los despidió: era un asunto de palabras y nombres de su propia ley, y no quería ser juez de esas cosas. La promesa del Señor se cumplió: nadie le hizo daño.',
        { h: 'Regreso a Antioquía y Apolos (18:18-28)' },
        'Pablo se despidió y navegó a Siria con Priscila y Aquila, a quienes dejó en Éfeso. Allí discutió brevemente en la sinagoga y prometió volver, «si Dios quiere» (Hch 18:21). Pasó por Cesarea, subió a saludar a la iglesia de Jerusalén y volvió a Antioquía. Poco después partió de nuevo, recorriendo Galacia y Frigia.',
        'Mientras tanto llegó a Éfeso Apolos, un judío de Alejandría, elocuente y poderoso en las Escrituras, que enseñaba con fervor lo concerniente al Señor, aunque solo conocía el bautismo de Juan. Priscila y Aquila lo tomaron aparte y le expusieron más exactamente el camino de Dios. Apolos pasó a Acaya, donde fue de gran provecho a los creyentes.'
      ],
      pensar: 'Pablo, que había sido perseguido en varias ciudades, llegó a Corinto con temor, y el Señor le dijo: «No temas, sino habla» (Hch 18:9). ¿Qué temores te impiden hablar de Cristo, y qué promesas de Dios puedes oponerles?'
    },
    {
      id: 'cap-19', n: 'Capítulo 19: Éfeso', ref: 'Hechos 19', fecha: [53, 56],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-efeso-espiritu.webp', alt: 'El apóstol Pablo impone las manos sobre un grupo de discípulos en una casa de Éfeso; algunos levantan los brazos y hablan con fervor', pie: '«Vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban» (Hch 19:6).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'mileto', 'pergamo', 'sardis', 'troas'] } }
      ],
      texto: [
        'Pablo llegó a Éfeso y encontró a unos doce discípulos. Su primera pregunta fue: «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2). Es una pregunta que no tendría sentido si todo creyente recibiera automáticamente el bautismo en el Espíritu al convertirse. Pablo esperaba que fuera una experiencia identificable, de la que se pudiera dar razón.',
        'Ellos respondieron que ni siquiera habían oído que hubiera Espíritu Santo: solo conocían el bautismo de Juan. Pablo les explicó que Juan bautizó con bautismo de arrepentimiento, diciendo que creyeran en el que vendría después de él, es decir, en Jesús. Fueron bautizados en el nombre del Señor Jesús, «y habiéndoles impuesto Pablo las manos, vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban» (Hch 19:6).',
        'Es el último de los grandes relatos de Hechos sobre la venida del Espíritu, unos veinticinco años después de Pentecostés y a cientos de kilómetros de Jerusalén. La experiencia es la misma: una venida del Espíritu distinta de creer y ser bautizado en agua, con la señal de las lenguas.',
        { h: 'Toda Asia oyó la palabra (19:8-20)' },
        'Pablo enseñó tres meses en la sinagoga y luego, por dos años, en la escuela de Tiranno, «de manera que todos los que habitaban en Asia, judíos y griegos, oyeron la palabra del Señor Jesús» (Hch 19:10). Dios hacía milagros extraordinarios: aun los paños o delantales que habían tocado su cuerpo eran llevados a los enfermos, y las enfermedades se iban y los espíritus malos salían.',
        'Unos exorcistas judíos ambulantes, los siete hijos de Esceva, intentaron usar el nombre de Jesús como una fórmula mágica: «Os conjuro por Jesús, el que predica Pablo». El espíritu malo respondió: «A Jesús conozco, y sé quién es Pablo; pero vosotros, ¿quiénes sois?» (Hch 19:15), y los atacó. El nombre de Jesús no es un amuleto: tiene poder en boca de quienes le pertenecen. El temor cayó sobre todos, muchos confesaron sus prácticas, y los que habían practicado la magia quemaron sus libros, por valor de cincuenta mil piezas de plata.',
        { h: 'El alboroto de los plateros (19:21-41)' },
        'Demetrio, un platero que fabricaba templecillos de plata de Diana, reunió a los artesanos: Pablo enseñaba que no son dioses los que se hacen con las manos, y su negocio y el templo de la gran diosa estaban en peligro. La ciudad se llenó de confusión y la multitud corrió al teatro, gritando durante dos horas: «¡Grande es Diana de los efesios!» (Hch 19:34). Finalmente el escribano de la ciudad los calmó: los acusados no habían robado templos ni blasfemado a la diosa, y si había quejas, había tribunales.'
      ],
      pensar: 'Pablo preguntó a los discípulos de Éfeso: «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2). Si alguien te hiciera hoy esa pregunta, ¿qué responderías?'
    },
    {
      id: 'cap-20', n: 'Capítulo 20: Troas y Mileto', ref: 'Hechos 20', fecha: 57,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-mileto.webp', alt: 'En la playa de Mileto, el apóstol Pablo, de rodillas, ora con los ancianos de Éfeso, que lloran y lo abrazan antes de que suba al barco', pie: '«Se puso de rodillas, y oró con todos ellos» (Hch 20:36).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'filipos', 'corinto', 'troas', 'mileto', 'rodas', 'patara', 'tiro', 'cesarea', 'jerusalen'], trazos: ['viaje-3'] } }
      ],
      texto: [
        'Después del alboroto, Pablo partió a Macedonia y Grecia, donde estuvo tres meses. Allí, según la mayoría de los estudiosos, escribió la carta a los Romanos. Una conspiración de los judíos lo obligó a regresar por tierra a través de Macedonia. Lo acompañaban hermanos de varias iglesias, que llevaban la ofrenda para los pobres de Jerusalén.',
        { h: 'Eutico (20:7-12)' },
        'En Troas, «el primer día de la semana, reunidos los discípulos para partir el pan» (Hch 20:7), Pablo les enseñaba, y como iba a partir al día siguiente, alargó el discurso hasta la medianoche. Es una de las primeras referencias a la reunión de la iglesia en domingo, el día de la resurrección. Un joven llamado Eutico, sentado en una ventana del tercer piso, se durmió y cayó, y lo levantaron muerto. Pablo bajó, se echó sobre él y lo abrazó: «No os alarméis, pues está vivo» (Hch 20:10). Siguieron conversando hasta el alba, y fueron grandemente consolados.',
        { h: 'La despedida en Mileto (20:17-38)' },
        'Pablo quería llegar a Jerusalén para Pentecostés, y desde Mileto hizo llamar a los ancianos de Éfeso. Es el único discurso de Hechos dirigido a líderes de la iglesia, y es un modelo de ministerio pastoral.',
        'Pablo les recordó cómo había servido «con toda humildad, y con muchas lágrimas», enseñando en público y «por las casas» (Hch 20:19-20), sin callar nada útil. Les dijo que iba a Jerusalén «ligado en espíritu», sin saber lo que allí le esperaba, salvo que el Espíritu Santo le daba testimonio en todas las ciudades de que lo esperaban prisiones. Pero declaró: «de ninguna cosa hago caso, ni estimo preciosa mi vida para mí mismo, con tal que acabe mi carrera con gozo» (Hch 20:24).',
        'Luego les encargó: «Por tanto, mirad por vosotros, y por todo el rebaño en que el Espíritu Santo os ha puesto por obispos, para apacentar la iglesia del Señor, la cual él ganó por su propia sangre» (Hch 20:28). Los ancianos no se nombran a sí mismos: el Espíritu Santo los pone. La iglesia no les pertenece: Cristo la compró con su sangre. Les advirtió que vendrían lobos rapaces de afuera, y que de entre ellos mismos se levantarían hombres que hablarían cosas perversas.',
        'Les recordó que había trabajado con sus manos para no ser carga, y citó una palabra de Jesús que no aparece en los Evangelios: «Más bienaventurado es dar que recibir» (Hch 20:35). Después se puso de rodillas y oró con todos. Lloraron, lo abrazaron y lo besaron, doloridos sobre todo porque les dijo que no verían más su rostro.'
      ],
      pensar: 'Pablo dijo a los ancianos que el Espíritu Santo los había puesto para cuidar la iglesia que Cristo ganó «por su propia sangre» (Hch 20:28). ¿Cómo debería influir esta verdad en la manera en que servimos y cuidamos a los hermanos?'
    },
    {
      id: 'cap-21', n: 'Capítulo 21: hacia Jerusalén y el arresto', ref: 'Hechos 21', fecha: 57,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-agabo.webp', alt: 'En la casa de Felipe en Cesarea, el profeta Agabo se ata las manos y los pies con el cinto de Pablo, mientras Pablo, Lucas y otros hermanos lo miran conmovidos', pie: '«Así atarán los judíos en Jerusalén al varón de quien es este cinto» (Hch 21:11).', origen: 'ia' }
      ],
      texto: [
        'El viaje a Jerusalén siguió por mar: Cos, Rodas, Pátara y luego Tiro, donde el barco descargaba. Allí encontraron discípulos, que «decían a Pablo por el Espíritu, que no subiese a Jerusalén» (Hch 21:4). Al partir, todos, con sus mujeres e hijos, los acompañaron hasta la playa y oraron de rodillas.',
        { h: 'En casa de Felipe (21:8-14)' },
        'En Cesarea se hospedaron en casa de Felipe el evangelista, uno de los siete, que «tenía cuatro hijas doncellas que profetizaban» (Hch 21:9). Era el cumplimiento de Joel citado en Pentecostés: «vuestros hijos y vuestras hijas profetizarán». El don de profecía se manifestaba también en las mujeres de la iglesia.',
        'Llegó de Judea el profeta Agabo, el mismo que había anunciado el hambre en tiempos de Claudio. Tomó el cinto de Pablo, se ató las manos y los pies, y dijo: «Esto dice el Espíritu Santo: Así atarán los judíos en Jerusalén al varón de quien es este cinto» (Hch 21:11). Los hermanos le rogaron que no subiera. Pablo respondió: «yo estoy dispuesto no sólo a ser atado, mas aun a morir en Jerusalén por el nombre del Señor Jesús» (Hch 21:13).',
        '¿Desobedeció Pablo al Espíritu? No. El Espíritu le anunciaba lo que le esperaba, como ya lo había hecho en cada ciudad (Hch 20:23), pero no le prohibía ir. Los hermanos, al oír la profecía, sacaron la conclusión de que no debía subir; Pablo entendió que el Espíritu lo preparaba para el sufrimiento. Finalmente todos dijeron: «Hágase la voluntad del Señor» (Hch 21:14). La profecía debe ser recibida, pero también discernida.',
        { h: 'Con Jacobo y los ancianos (21:15-26)' },
        'En Jerusalén, Jacobo y los ancianos glorificaron a Dios por la obra entre los gentiles, pero le advirtieron que millares de judíos creyentes, celosos por la ley, creían que Pablo enseñaba a abandonar a Moisés. Le propusieron purificarse en el templo con cuatro hombres que tenían un voto, y Pablo aceptó: a los judíos se hizo como judío (1 Co 9:20).',
        { h: 'El alboroto en el templo (21:27-40)' },
        'Unos judíos de Asia lo vieron en el templo y gritaron que lo había profanado metiendo a griegos, porque lo habían visto en la ciudad con Trófimo, un efesio. Arrastraron a Pablo fuera del templo para matarlo, pero el tribuno romano lo rescató y mandó atarlo con dos cadenas, como había anunciado Agabo.',
        'El tribuno pensó que era un egipcio que había encabezado una sedición en el desierto, un rebelde que también menciona Josefo. Pablo le habló en griego: era judío de Tarso, «ciudadano de una ciudad no insignificante de Cilicia» (Hch 21:39). Le pidió permiso para hablar al pueblo, y desde las gradas de la fortaleza hizo callar a la multitud.'
      ],
      pensar: 'Pablo sabía por el Espíritu que le esperaban cadenas en Jerusalén, y aun así siguió adelante (Hch 21:13). ¿Qué diferencia hay entre una profecía que advierte y una que prohíbe, y por qué es importante discernirlas?'
    },
    {
      id: 'cap-22', n: 'Capítulo 22: el testimonio de Pablo', ref: 'Hechos 22; 9:7', fecha: 57,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-gradas-antonia.webp', alt: 'El apóstol Pablo, encadenado entre soldados romanos, habla con la mano levantada desde las gradas de la fortaleza Antonia a una multitud en el atrio del templo', pie: 'Pablo habla al pueblo desde las gradas (Hch 21:40–22:1).', origen: 'ia' }
      ],
      texto: [
        'Desde las gradas de la fortaleza, Pablo habló en lengua hebrea, es decir, en el arameo que hablaba el pueblo, y se hizo un gran silencio. No dio un sermón doctrinal: contó su testimonio. Es la segunda de las tres veces que Hechos narra su conversión.',
        'Pablo comenzó presentándose como uno de ellos: judío de Tarso, criado en Jerusalén, instruido a los pies de Gamaliel, celoso de Dios como lo eran ellos. Él mismo había perseguido «este Camino» hasta la muerte. Luego contó la luz del cielo cerca de Damasco, la voz de Jesús de Nazaret y su ceguera.',
        { posturas: {
          titulo: '¿Oyeron o no oyeron la voz?',
          a: { n: 'Hechos 9:7', t: 'Los hombres que iban con Saulo se pararon atónitos, «oyendo a la verdad la voz, mas sin ver a nadie».' },
          b: { n: 'Hechos 22:9', t: 'Pablo dice que sus acompañantes «vieron a la verdad la luz, y se espantaron; pero no entendieron la voz del que hablaba conmigo». Otras traducciones dicen «no oyeron».' },
          c: 'En griego, el verbo oír puede significar percibir un sonido o comprender lo que se dice. Los acompañantes oyeron el sonido de una voz, pero no entendieron las palabras dirigidas a Saulo. La RV 1960 traduce 22:9 con «no entendieron», que recoge ese sentido.'
        } },
        { h: 'Ananías y el envío (22:12-21)' },
        'Pablo describió a Ananías como «varón piadoso según la ley», con buen testimonio de todos los judíos. Ananías le dijo que el Dios de sus padres lo había escogido para conocer su voluntad, ver al Justo y oír su voz, «porque serás testigo suyo a todos los hombres, de lo que has visto y oído. Ahora, pues, ¿por qué te detienes? Levántate y bautízate, y lava tus pecados, invocando su nombre» (Hch 22:15-16). El lavamiento viene de invocar el nombre del Señor; el bautismo es la expresión pública de esa fe.',
        'Contó también algo que no aparece en el capítulo 9: tiempo después, orando en el templo, tuvo un éxtasis y oyó al Señor decirle que saliera de Jerusalén, porque no recibirían su testimonio: «Ve, porque yo te enviaré lejos a los gentiles» (Hch 22:21).',
        { h: 'Ciudadano romano (22:22-30)' },
        'Hasta esa palabra lo escucharon. Al oír «gentiles», la multitud estalló: «Quita de la tierra a tal hombre, porque no conviene que viva» (Hch 22:22). El tribuno mandó azotarlo para averiguar la causa del alboroto. Mientras lo ataban, Pablo preguntó al centurión si era lícito azotar a un ciudadano romano sin juicio. El tribuno, que había comprado su ciudadanía con una gran suma, se asustó: Pablo lo era de nacimiento. Al día siguiente lo presentó ante el concilio.'
      ],
      pensar: 'Ante una multitud hostil, Pablo no discutió: contó lo que Cristo había hecho en su vida (Hch 22:3-16). ¿Cómo contarías en pocos minutos tu propio testimonio de lo que Jesús hizo por ti?'
    },
    {
      id: 'cap-23', n: 'Capítulo 23: ante el sanedrín', ref: 'Hechos 23', fecha: 57,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'A la noche siguiente se le presentó el Señor y le dijo: Ten ánimo, Pablo, pues como has testificado de mí en Jerusalén, así es necesario que testifiques también en Roma.', ref: 'Hechos 23:11' }
      ],
      texto: [
        'Ante el concilio, Pablo comenzó: «yo con toda buena conciencia he vivido delante de Dios hasta el día de hoy» (Hch 23:1). El sumo sacerdote Ananías mandó golpearlo en la boca. Pablo le respondió: «¡Dios te golpeará a ti, pared blanqueada!», porque lo juzgaba según la ley mientras quebrantaba la ley. Cuando le dijeron que había injuriado al sumo sacerdote, Pablo se disculpó: «No sabía, hermanos, que era el sumo sacerdote; pues escrito está: No maldecirás a un príncipe de tu pueblo» (Hch 23:5).',
        'No se sabe por qué Pablo no lo reconoció: quizá no lo conocía de vista después de tantos años fuera, o la reunión fue convocada por el tribuno sin las vestiduras oficiales. Lo importante es su reacción: reconoció el error y se sometió a la Escritura. Ananías era conocido por su violencia, y años después fue asesinado por los rebeldes judíos, según cuenta Josefo.',
        { h: '«Acerca de la resurrección se me juzga» (23:6-10)' },
        'Pablo notó que el concilio estaba formado por saduceos y fariseos, y alzó la voz: «yo soy fariseo, hijo de fariseo; acerca de la esperanza y de la resurrección de los muertos se me juzga» (Hch 23:6). No era una maniobra deshonesta: la resurrección de Jesús era el centro de su mensaje, y los fariseos creían en la resurrección, mientras los saduceos la negaban. La asamblea se dividió, y algunos escribas fariseos dijeron que no hallaban mal en él. El alboroto fue tan grande que el tribuno tuvo que rescatarlo otra vez.',
        { h: 'La promesa en la noche (23:11)' },
        'Esa noche, solo en la fortaleza, rechazado por su pueblo y sin saber qué vendría, Pablo recibió la visita del Señor: «Ten ánimo, Pablo, pues como has testificado de mí en Jerusalén, así es necesario que testifiques también en Roma» (Hch 23:11). Desde ese momento, todo lo que sigue, la conspiración, la prisión, los juicios y el naufragio, será el camino por el que Dios cumplirá esta promesa.',
        { h: 'La conspiración descubierta (23:12-35)' },
        'Más de cuarenta judíos se juramentaron bajo maldición a no comer ni beber hasta matar a Pablo, y pidieron al concilio que lo hicieran bajar de nuevo, para emboscarlo en el camino. Pero el hijo de la hermana de Pablo oyó del plan y avisó a Pablo, y luego al tribuno. Dios usó a un joven del que no sabemos ni el nombre.',
        'El tribuno, Claudio Lisias, envió a Pablo esa misma noche a Cesarea, con una escolta de doscientos soldados, setenta jinetes y doscientos lanceros, y con una carta para el gobernador Félix: no había en él delito digno de muerte o de prisión.'
      ],
      pensar: 'En el momento más oscuro, el Señor se presentó a Pablo y le dijo: «Ten ánimo» (Hch 23:11). ¿Qué promesa de Dios te ha sostenido a ti en una noche difícil?'
    },
    {
      id: 'cap-24', n: 'Capítulo 24: ante Félix', ref: 'Hechos 24', fecha: [57, 59],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-felix.webp', alt: 'En el palacio de Cesarea, el apóstol Pablo, encadenado, habla con firmeza al gobernador Félix y a su esposa Drusila, sentados en sillas de marfil; Félix se ve inquieto', pie: '«Al disertar Pablo acerca de la justicia, del dominio propio y del juicio venidero, Félix se espantó» (Hch 24:25).', origen: 'ia' }
      ],
      texto: [
        'Cinco días después llegaron a Cesarea el sumo sacerdote Ananías, algunos ancianos y un orador llamado Tértulo. Tértulo comenzó adulando a Félix por la paz que el pueblo gozaba bajo su gobierno, algo muy lejos de la verdad, porque su administración fue violenta. Luego acusó a Pablo de ser «una plaga, y promotor de sediciones entre todos los judíos por todo el mundo, y cabecilla de la secta de los nazarenos» (Hch 24:5), y de haber intentado profanar el templo.',
        { h: 'La defensa de Pablo (24:10-21)' },
        'Pablo respondió punto por punto, sin adulación. Había subido a Jerusalén hacía apenas doce días para adorar; no promovió alborotos ni en el templo ni en las sinagogas ni en la ciudad, y nadie podía probar lo contrario. Luego confesó su fe: «según el Camino que ellos llaman herejía, así sirvo al Dios de mis padres, creyendo todas las cosas que en la ley y en los profetas están escritas» (Hch 24:14).',
        'Pablo tenía la misma esperanza que sus acusadores: «que ha de haber resurrección de los muertos, así de justos como de injustos» (Hch 24:15). Todos los muertos resucitarán: los justos para vida y los injustos para juicio (Dn 12:2; Jn 5:28-29). Por esa esperanza, Pablo procuraba tener siempre una conciencia sin ofensa ante Dios y ante los hombres. Había venido a Jerusalén a traer limosnas a su nación, y lo encontraron purificado en el templo. Los que lo acusaban, los judíos de Asia, ni siquiera estaban presentes.',
        { h: 'Félix y Drusila (24:22-27)' },
        'Félix, que conocía bien el Camino, aplazó la causa hasta que viniera el tribuno Lisias, y mandó que Pablo estuviera custodiado pero con libertad para recibir a sus amigos. Días después, con su mujer Drusila, que era judía, llamó a Pablo para oírlo hablar acerca de la fe en Jesucristo.',
        'Pablo no le dijo lo que quería oír. Félix había seducido a Drusila, hija de Herodes Agripa I, para casarse con ella, y era conocido por su crueldad y su codicia. «Pero al disertar Pablo acerca de la justicia, del dominio propio y del juicio venidero, Félix se espantó, y dijo: Ahora vete; pero cuando tenga oportunidad te llamaré» (Hch 24:25). La oportunidad conveniente nunca llegó. Félix hablaba a menudo con Pablo, pero esperaba que le diera dinero para soltarlo.',
        'Así pasaron dos años. Cuando Félix fue reemplazado por Porcio Festo, dejó a Pablo preso para congraciarse con los judíos.'
      ],
      pensar: 'Félix se espantó al oír del juicio venidero, pero dejó la decisión para «cuando tenga oportunidad» (Hch 24:25), y esa oportunidad nunca llegó. ¿Qué peligro hay en postergar la respuesta a Dios cuando él habla al corazón?'
    },
    {
      id: 'cap-25', n: 'Capítulo 25: «A César apelo»', ref: 'Hechos 25', fecha: 59,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-pablo-festo.webp', alt: 'El apóstol Pablo de pie ante el gobernador romano Festo en su tribunal, rodeado de soldados y consejeros', pie: '«A César apelo» (Hch 25:11).', origen: 'ia' }
      ],
      texto: [
        'Festo, el nuevo gobernador, subió a Jerusalén tres días después de asumir su cargo. Los principales sacerdotes le pidieron, como favor, que trajera a Pablo a Jerusalén: planeaban matarlo en el camino. Dos años no habían apagado su odio. Festo respondió que Pablo estaba en Cesarea y que, si había algo contra él, fueran allá a acusarlo.',
        { h: 'Ante el tribunal de Festo (25:6-12)' },
        'En Cesarea, los judíos presentaron muchas acusaciones graves que no podían probar. Pablo se defendió: «Ni contra la ley de los judíos, ni contra el templo, ni contra César he pecado en nada» (Hch 25:8). Festo, queriendo congraciarse con los judíos, le preguntó si quería subir a Jerusalén para ser juzgado allá.',
        'Pablo sabía lo que eso significaba. Respondió que estaba ante el tribunal de César, donde debía ser juzgado. No rehusaba morir si había hecho algo digno de muerte, pero si las acusaciones eran falsas, nadie podía entregarlo a ellos. «A César apelo» (Hch 25:11). Todo ciudadano romano tenía derecho a apelar al emperador. Festo consultó con su consejo y respondió: «A César has apelado; a César irás» (Hch 25:12).',
        'La apelación no fue solo una estrategia legal. Era el medio por el que se cumpliría la promesa del Señor: «es necesario que testifiques también en Roma» (Hch 23:11). Pablo había deseado ir a Roma como misionero (Ro 1:10-11; 15:23-24); iría como prisionero, con el viaje pagado por el imperio y una escolta romana.',
        { h: 'Festo y Agripa (25:13-27)' },
        'Días después llegaron a Cesarea el rey Agripa II y su hermana Berenice para saludar al nuevo gobernador. Agripa era bisnieto de Herodes el Grande e hijo del Herodes que mató a Jacobo; Roma le había confiado la vigilancia del templo y el nombramiento de los sumos sacerdotes, y conocía bien las costumbres judías.',
        'Festo le contó el caso con perplejidad. Esperaba acusaciones de crímenes, pero solo había encontrado «ciertas cuestiones acerca de su religión, y de un cierto Jesús, ya muerto, el que Pablo afirmaba estar vivo» (Hch 25:19). Sin saberlo, Festo resumió el centro del evangelio: Jesús murió y está vivo.',
        'Agripa quiso oír a Pablo. Al día siguiente, el rey y Berenice entraron con gran pompa en la sala de audiencias, con los tribunos y los principales de la ciudad. Festo tenía un problema: debía enviar a un preso al emperador sin poder indicar los cargos contra él.'
      ],
      pensar: 'Festo resumió el caso diciendo que Pablo afirmaba que un tal Jesús, ya muerto, estaba vivo (Hch 25:19). ¿Por qué la resurrección de Jesús es el centro de la fe cristiana, y qué cambia en tu vida que él esté vivo?'
    },
    {
      id: 'cap-26', n: 'Capítulo 26: ante el rey Agripa', ref: 'Hechos 26', fecha: 59,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-agripa.webp', alt: 'En una sala de audiencias suntuosa, el apóstol Pablo, con una cadena en la muñeca, extiende la mano mientras habla ante el rey Agripa y Berenice, sentados en tronos, rodeados de tribunos y nobles', pie: '«Por poco me persuades a ser cristiano» (Hch 26:28).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tres relatos', tabla: {
          titulo: 'La conversión de Pablo, contada tres veces',
          cab: ['Pasaje', 'Quién la cuenta', 'Ante quién', 'Lo que destaca'],
          filas: [
            ['Hch 9:1-19', 'Lucas', 'El lector', 'Los hechos; Ananías; la llenura del Espíritu'],
            ['Hch 22:3-16', 'Pablo', 'El pueblo de Jerusalén', 'Su judaísmo y su celo; Ananías como judío piadoso'],
            ['Hch 26:9-18', 'Pablo', 'El rey Agripa', 'El encargo de Cristo: abrir los ojos de los gentiles']
          ]
        } }
      ],
      texto: [
        'Agripa le dio la palabra, y Pablo, extendiendo la mano, presentó la defensa más completa del libro. Se alegraba de hablar ante un rey que conocía las costumbres y cuestiones de los judíos.',
        { h: 'La esperanza de Israel (26:4-8)' },
        'Toda su vida había sido conocida: vivió como fariseo, la secta más rigurosa. Y declaró que era juzgado «por la esperanza de la promesa que hizo Dios a nuestros padres» (Hch 26:6), la promesa que las doce tribus esperaban alcanzar. Preguntó: «¿Se juzga entre vosotros cosa increíble que Dios resucite a los muertos?» (Hch 26:8). Para Pablo, la resurrección de Jesús era el cumplimiento y la garantía de la esperanza de Israel.',
        { h: 'El encargo de Cristo (26:9-23)' },
        'Pablo contó otra vez cómo había perseguido a los santos y cómo, camino a Damasco, una luz más resplandeciente que el sol lo rodeó al mediodía. En este relato destaca las palabras de Jesús que definieron su misión: lo enviaba a los gentiles «para que abras sus ojos, para que se conviertan de las tinieblas a la luz, y de la potestad de Satanás a Dios; para que reciban, por la fe que es en mí, perdón de pecados y herencia entre los santificados» (Hch 26:18).',
        'Es una definición completa de la salvación: ojos abiertos, paso de las tinieblas a la luz, liberación del poder de Satanás, perdón de pecados y herencia entre los santos, todo por la fe en Cristo. Pablo concluyó: «no fui rebelde a la visión celestial» (Hch 26:19). Había predicado que se arrepintieran, se convirtieran a Dios e hicieran obras dignas de arrepentimiento, sin decir nada fuera de lo que los profetas y Moisés dijeron: que el Cristo había de padecer y ser el primero de la resurrección.',
        { h: '«Por poco me persuades» (26:24-32)' },
        'Festo lo interrumpió a gran voz: «Estás loco, Pablo; las muchas letras te vuelven loco». Pablo respondió que hablaba palabras de verdad y de cordura, y que el rey sabía de estas cosas, «pues no se ha hecho esto en algún rincón» (Hch 26:26). Luego se dirigió a Agripa: «¿Crees, oh rey Agripa, a los profetas? Yo sé que crees».',
        'Agripa respondió: «Por poco me persuades a ser cristiano» (Hch 26:28). Pablo, el prisionero, le contestó con el corazón de un evangelista: quisiera Dios que no solo él, sino todos los que lo oían, fueran como él, «excepto estas cadenas» (Hch 26:29). Al retirarse, todos coincidieron en que no había hecho nada digno de muerte ni de prisión. Agripa dijo a Festo que podría haber sido puesto en libertad, si no hubiera apelado a César.'
      ],
      pensar: 'Agripa estuvo «por poco» de ser persuadido (Hch 26:28). ¿Qué separa a alguien que está cerca del reino de Dios de alguien que entra en él?'
    },
    {
      id: 'cap-27', n: 'Capítulo 27: la tempestad y el naufragio', ref: 'Hechos 27', fecha: [59, 60],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-naufragio.webp', alt: 'Un barco romano naufraga en medio de una tormenta junto a la costa rocosa de Malta', pie: '«Todos se salvaron saliendo a tierra» (Hch 27:44).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-57'], lugares: ['cesarea', 'sidon', 'creta', 'malta', 'siracusa', 'puteoli', 'roma'], trazos: ['viaje-roma'] } }
      ],
      texto: [
        'El capítulo 27 es uno de los relatos de navegación más detallados que han llegado de la antigüedad. Lucas, que viajaba con Pablo, anota puertos, vientos, maniobras y profundidades con precisión de testigo.',
        { h: 'De Cesarea a Creta (27:1-12)' },
        'Pablo y otros presos fueron entregados a Julio, centurión de la compañía Augusta, que lo trató con humanidad y le permitió visitar a sus amigos en Sidón. Con vientos contrarios, cambiaron de barco en Mira, a una nave de Alejandría que llevaba trigo a Italia, y llegaron con dificultad a Buenos Puertos, en Creta.',
        'Era peligroso navegar porque ya había pasado el ayuno, el día de la Expiación, a fines de septiembre o comienzos de octubre, cuando comenzaba la temporada de tormentas. Pablo les advirtió que la navegación sería con mucha pérdida, aun de vidas. Pero el centurión creyó más al piloto y al dueño de la nave, y la mayoría decidió buscar un puerto mejor para invernar.',
        { h: 'Catorce días de tempestad (27:13-26)' },
        'Un viento suave los engañó, y pronto se desató un huracán llamado Euroclidón. La nave fue arrebatada sin poder hacerle frente. Ciñeron el casco con cables, arrojaron la carga y luego los aparejos. Durante muchos días no se vieron ni el sol ni las estrellas, «ya habíamos perdido toda esperanza de salvarnos» (Hch 27:20).',
        'Entonces Pablo se puso en pie en medio de ellos. Esa noche había estado con él «el ángel del Dios de quien soy y a quien sirvo», diciéndole: «Pablo, no temas; es necesario que comparezcas ante César; y he aquí, Dios te ha concedido todos los que navegan contigo» (Hch 27:23-24). Y añadió: «yo confío en Dios que será así como se me ha dicho» (Hch 27:25).',
        { h: 'Todos se salvaron (27:27-44)' },
        'La decimocuarta noche, los marineros sintieron que se acercaban a tierra e intentaron huir en el bote. Pablo advirtió al centurión que, si ellos no permanecían en la nave, los demás no podrían salvarse, y los soldados cortaron las amarras del bote. Al amanecer, Pablo los animó a comer; tomó el pan, «dio gracias a Dios en presencia de todos» (Hch 27:35), y todos cobraron ánimo. Eran doscientas setenta y seis personas.',
        'Al intentar llegar a una playa, la nave encalló y la popa se deshizo con las olas. Los soldados quisieron matar a los presos para que no escaparan, pero el centurión, queriendo salvar a Pablo, lo impidió. Los que sabían nadar se echaron primero al mar, y los demás llegaron sobre tablas y restos de la nave. «Y así aconteció que todos se salvaron saliendo a tierra» (Hch 27:44).'
      ],
      pensar: 'En medio de la tormenta, el prisionero Pablo terminó animando a todos los del barco con la palabra que Dios le había dado (Hch 27:22-25). ¿Cómo puede un creyente ser fuente de esperanza para otros en medio de una crisis?'
    },
    {
      id: 'cap-28', n: 'Capítulo 28: Malta y Roma', ref: 'Hechos 28', fecha: [60, 62],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-malta-vibora.webp', alt: 'Junto a una fogata en una playa de Malta bajo la lluvia, el apóstol Pablo sacude de su mano una víbora hacia el fuego, mientras los isleños y los náufragos lo miran asombrados', pie: '«Sacudiendo la víbora en el fuego, ningún daño padeció» (Hch 28:5).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'En Roma', src: 'img/hechos-pablo-roma.webp', alt: 'El apóstol Pablo, encadenado a un soldado romano, enseña a un grupo de personas en una casa alquilada en Roma', pie: '«Abiertamente y sin impedimento» (Hch 28:31).', origen: 'ia' }
      ],
      texto: [
        'Los náufragos supieron que la isla se llamaba Malta. Sus habitantes los trataron con no poca humanidad y encendieron un fuego, porque llovía y hacía frío.',
        { h: 'La víbora y las sanidades (28:1-10)' },
        'Pablo recogió ramas secas, y al echarlas al fuego, una víbora, huyendo del calor, se le prendió en la mano. Los isleños pensaron que era un homicida al que la justicia divina no dejaba vivir. Pero Pablo, «sacudiendo la víbora en el fuego, ningún daño padeció» (Hch 28:5). Esperaban que se hinchara o cayera muerto, y al ver que no le pasaba nada, cambiaron de parecer y dijeron que era un dios. Se cumplía lo que Jesús había dicho de las señales que seguirían a los que creen: «tomarán en las manos serpientes» (Mr 16:18). No se trata de provocar a Dios buscando el peligro, sino de su protección sobre sus siervos en medio de la misión.',
        'Publio, el hombre principal de la isla, los hospedó tres días. Su padre estaba enfermo de fiebre y disentería; Pablo entró a verlo, oró, le impuso las manos y lo sanó. Después venían los demás enfermos de la isla, y eran sanados. Durante tres meses, una isla entera vio el poder de Dios.',
        { h: 'Llegada a Roma (28:11-16)' },
        'En primavera navegaron en otra nave de Alejandría hasta Puteoli, donde encontraron hermanos. Desde Roma salieron creyentes a recibirlos hasta el Foro de Apio y las Tres Tabernas, «y al verlos, Pablo dio gracias a Dios y cobró aliento» (Hch 28:15). A Pablo se le permitió vivir aparte, con un soldado que lo custodiaba.',
        { h: 'Pablo y los judíos de Roma (28:17-29)' },
        'Tres días después, Pablo convocó a los principales de los judíos. Les explicó que no había hecho nada contra su pueblo, y que «por la esperanza de Israel» estaba sujeto con esa cadena (Hch 28:20). En un día señalado, les testificó del reino de Dios desde la mañana hasta la tarde, persuadiéndolos acerca de Jesús por la ley y los profetas. Algunos creyeron y otros no. Pablo citó a Isaías sobre el pueblo que oye sin entender, y concluyó que la salvación de Dios era enviada a los gentiles, «y ellos oirán» (Hch 28:28). Pero Dios no ha desechado a su pueblo: Pablo mismo enseñó en Romanos que el endurecimiento de Israel es parcial y temporal, hasta que haya entrado la plenitud de los gentiles, y que luego todo Israel será salvo (Ro 11:25-26).',
        { h: 'Sin impedimento (28:30-31)' },
        'Pablo permaneció dos años en una casa alquilada, recibiendo a todos los que venían, «predicando el reino de Dios y enseñando acerca del Señor Jesucristo, abiertamente y sin impedimento» (Hch 28:31). Así termina el libro: no con la muerte de Pablo, sino con el evangelio avanzando.'
      ],
      pensar: 'Después de veintiocho capítulos de persecuciones, cárceles y un naufragio, Hechos termina con el evangelio «sin impedimento» (Hch 28:31). ¿Qué te enseña ese final sobre el poder del evangelio frente a cualquier obstáculo?'
    }
  ];

  /* ---------------- Ruta IV · Teología de Hechos ---------------- */
  const teologia = [
    {
      id: 'espiritu-persona', n: 'El Espíritu Santo: persona divina', ref: 'Hechos 5:3-4; 8:29; 13:2-4; 15:28; 16:6-7; 20:28', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Lo que hace', tabla: {
          titulo: 'Lo que el Espíritu Santo hace en Hechos',
          cab: ['Acción', 'Pasaje'],
          filas: [
            ['Habla', 'Hch 1:16; 8:29; 10:19; 13:2; 21:11'],
            ['Envía', 'Hch 13:4'],
            ['Prohíbe e impide', 'Hch 16:6-7'],
            ['Decide junto con la iglesia', 'Hch 15:28'],
            ['Pone ancianos en la iglesia', 'Hch 20:28'],
            ['Testifica y advierte', 'Hch 5:32; 20:23'],
            ['Se le puede mentir, tentar y resistir', 'Hch 5:3, 9; 7:51']
          ],
          nota: 'Solo de una persona se puede decir que habla, decide, prohíbe o es engañada.'
        } }
      ],
      texto: [
        'Hechos no tiene un capítulo dedicado a explicar quién es el Espíritu Santo, pero lo muestra en acción en cada página. Y lo que muestra es claro: el Espíritu Santo no es una fuerza impersonal ni una energía, sino una persona, y esa persona es Dios.',
        { h: 'Una persona' },
        'El Espíritu habla: le dice a Felipe que se acerque al carro del etíope (Hch 8:29), a Pedro que vaya con los enviados de Cornelio (Hch 10:19-20), y a la iglesia de Antioquía: «Apartadme a Bernabé y a Saulo para la obra a que los he llamado» (Hch 13:2). Fíjate en el pronombre: «apartadme», «los he llamado». El Espíritu se refiere a sí mismo como alguien que llama.',
        'Además decide: la carta del concilio dice que «ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28). Prohíbe: impidió a Pablo predicar en Asia y entrar en Bitinia (Hch 16:6-7). Nombra líderes: es él quien puso a los ancianos de Éfeso como obispos del rebaño (Hch 20:28). Y puede ser ofendido: se le puede mentir (Hch 5:3), tentar (Hch 5:9) y resistir (Hch 7:51). Nada de esto se puede decir de una fuerza.',
        { h: 'Una persona divina' },
        'El pasaje más directo es el de Ananías. Pedro le pregunta por qué mintió «al Espíritu Santo», y un momento después le dice: «No has mentido a los hombres, sino a Dios» (Hch 5:3-4). Mentir al Espíritu Santo es mentir a Dios, porque el Espíritu Santo es Dios.',
        'Hechos muestra también al Padre, al Hijo y al Espíritu obrando juntos. Pedro explica Pentecostés así: Jesús, exaltado a la diestra de Dios, recibió «del Padre la promesa del Espíritu Santo» y la derramó (Hch 2:33). En un solo versículo aparecen las tres personas de la Trinidad: el Padre que promete, el Hijo exaltado que derrama y el Espíritu que es derramado.',
        { h: 'Por qué importa' },
        'Si el Espíritu fuera una fuerza, el creyente podría intentar usarlo. Como es una persona divina, el creyente se rinde a él, lo obedece y cuida de no contristarlo (Ef 4:30). La llenura del Espíritu no es tener más de una sustancia, sino estar plenamente bajo la dirección de Dios mismo.'
      ],
      pensar: 'El Espíritu Santo habla, dirige, prohíbe y puede ser entristecido. ¿Cómo cambia tu relación con él saber que es una persona divina y no una fuerza?'
    },
    {
      id: 'bautismo-espiritu', n: 'El bautismo en el Espíritu Santo', ref: 'Hechos 1:4-8; 2:4, 38-39; 8:14-17; 9:17; 10:44-46; 11:15-17; 19:1-6', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'La doctrina', tabla: {
          titulo: 'Lo que enseña Hechos sobre el bautismo en el Espíritu',
          cab: ['Enseñanza', 'Base en Hechos'],
          filas: [
            ['Es una promesa del Padre para todos los creyentes', 'Hch 1:4-5; 2:38-39'],
            ['Es distinto de la conversión y puede venir después de ella', 'Hch 8:12-17; 9:17; 19:1-6'],
            ['Su propósito es dar poder para testificar', 'Hch 1:8; 4:31'],
            ['Su señal inicial es hablar en otras lenguas', 'Hch 2:4; 10:45-46; 19:6'],
            ['Se recibe por la fe, con oración, a veces con imposición de manos', 'Hch 1:14; 8:15-17; 9:17; 19:6'],
            ['Es la puerta a una vida de llenuras renovadas', 'Hch 4:8, 31; 13:9, 52']
          ]
        } }
      ],
      texto: [
        'Jesús llamó «la promesa del Padre» a lo que sus discípulos recibirían en Pentecostés, y la describió como ser «bautizados con el Espíritu Santo» (Hch 1:4-5). Esta estación reúne lo que Hechos enseña sobre esa experiencia.',
        { h: 'Para todos los creyentes' },
        'El Espíritu vino sobre los ciento veinte, hombres y mujeres, no solo sobre los apóstoles. Pedro dijo que la promesa era «para vosotros… y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). No es un privilegio de líderes ni de la iglesia del siglo I, sino una promesa para cada creyente de cada generación.',
        { h: 'Distinto de la conversión' },
        'En Hechos, el bautismo en el Espíritu es una experiencia distinta del nuevo nacimiento, y en varios casos ocurre después. Los discípulos ya creían antes de Pentecostés. Los samaritanos creyeron y se bautizaron, y recibieron el Espíritu días después (Hch 8:12-17). Saulo se encontró con Cristo y fue lleno tres días más tarde (Hch 9:17). Los discípulos de Éfeso recibieron el Espíritu después de ser bautizados en el nombre de Jesús (Hch 19:5-6). En casa de Cornelio, ambas cosas ocurrieron casi al mismo tiempo, pero aun allí son dos realidades distintas: creer y ser bautizado en el Espíritu.',
        'Todo creyente tiene al Espíritu Santo, porque nadie puede ser de Cristo sin él (Ro 8:9). Pero ser regenerado por el Espíritu no es lo mismo que ser bautizado en el Espíritu para recibir poder.',
        { h: 'Con una señal' },
        'Cada vez que Lucas describe lo que se vio y oyó cuando el Espíritu vino sobre creyentes, aparecen las lenguas: en Pentecostés (Hch 2:4), en Cesarea (Hch 10:46) y en Éfeso (Hch 19:6). En Cesarea fueron la prueba que convenció a los judíos de que los gentiles habían recibido el mismo don (Hch 10:45-47; 11:17). Por eso se entiende que hablar en otras lenguas, según el Espíritu da que se hable, es la señal física inicial del bautismo en el Espíritu Santo.',
        { h: 'Para servir' },
        'El propósito no es la experiencia en sí: es el poder para ser testigos (Hch 1:8). El bautismo en el Espíritu es una puerta de entrada a una vida en la que el creyente vuelve a ser lleno una y otra vez para cada necesidad.'
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es «para cuantos el Señor nuestro Dios llamare» (Hch 2:39). ¿Has recibido el bautismo en el Espíritu Santo? Si no, ¿qué te dice este estudio sobre cómo buscarlo?'
    },
    {
      id: 'llenuras-dones', n: 'Llenuras y dones del Espíritu', ref: 'Hechos 4:8, 31; 6:3-5; 11:24, 27-28; 13:1-2, 9, 52; 21:9-11', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Dones', tabla: {
          titulo: 'Dones del Espíritu que aparecen en Hechos',
          cab: ['Don', 'Ejemplos en Hechos', 'En 1 Corintios 12'],
          filas: [
            ['Lenguas', 'Hch 2:4; 10:46; 19:6', 'Diversos géneros de lenguas'],
            ['Profecía', 'Agabo, las hijas de Felipe, los profetas de Antioquía (Hch 11:28; 13:1; 21:9)', 'Profecía'],
            ['Sanidades', 'Hch 3:6-8; 9:34; 14:10; 28:8', 'Dones de sanidades'],
            ['Milagros', 'Hch 9:40; 13:11; 19:11-12', 'El hacer milagros'],
            ['Discernimiento de espíritus', 'Pedro ante Ananías y Simón; Pablo ante la adivina (Hch 5:3; 8:23; 16:18)', 'Discernimiento de espíritus'],
            ['Palabra de sabiduría', 'Esteban (Hch 6:10); el concilio (Hch 15:28)', 'Palabra de sabiduría'],
            ['Fe', 'Esteban, lleno de fe (Hch 6:5); Pablo en la tormenta (Hch 27:25)', 'Fe']
          ]
        } }
      ],
      texto: [
        'Pentecostés no fue el final de la experiencia del Espíritu, sino su comienzo. Hechos muestra a los mismos creyentes llenos una y otra vez, y a la iglesia funcionando con los dones del Espíritu.',
        { h: 'Un bautismo, muchas llenuras' },
        'Pedro fue lleno del Espíritu en Pentecostés (Hch 2:4). Días después, ante el sanedrín, «Pedro, lleno del Espíritu Santo» habló con denuedo (Hch 4:8). Poco más tarde, cuando la iglesia oró, «todos fueron llenos del Espíritu Santo» (Hch 4:31), y entre ellos estaban los que ya habían sido llenos en Pentecostés. Pablo, lleno del Espíritu en Damasco (Hch 9:17), fue lleno otra vez para enfrentar al mago Elimas (Hch 13:9).',
        'El bautismo en el Espíritu es una experiencia inicial; las llenuras se renuevan según la necesidad. Por eso Pablo manda: «sed llenos del Espíritu» (Ef 5:18), con un verbo que en griego indica una acción continua.',
        'Hechos describe también a personas llenas del Espíritu como un rasgo permanente de su carácter: los siete servidores, Esteban y Bernabé son llamados «llenos del Espíritu Santo» (Hch 6:3, 5; 11:24). Y los discípulos de Antioquía de Pisidia, en medio de la persecución, «estaban llenos de gozo y del Espíritu Santo» (Hch 13:52).',
        { h: 'Los dones en acción' },
        'Lo que Pablo enseña en 1 Corintios 12 a 14 sobre los dones aparece funcionando en Hechos: lenguas, profecía, sanidades, milagros, discernimiento de espíritus, palabra de sabiduría y fe. Los profetas tenían un lugar en la iglesia: Agabo anunció un hambre y el arresto de Pablo, y las cuatro hijas de Felipe profetizaban. Los dones no eran exclusivos de los apóstoles: Esteban y Felipe hacían señales, y Ananías, un discípulo común, fue usado para sanar a Saulo.',
        { posturas: {
          titulo: '¿Siguen vigentes los dones?',
          a: { n: 'Terminaron', t: 'Algunos enseñan que los dones milagrosos sirvieron para confirmar a los apóstoles y para la etapa de fundación de la iglesia, y cesaron cuando se completó el Nuevo Testamento.' },
          b: { n: 'Siguen vigentes', t: 'El Nuevo Testamento no anuncia que cesarían antes de la venida de Cristo. La promesa del Espíritu es para todas las generaciones (Hch 2:39), y los dones deben ejercerse hasta que venga lo perfecto (1 Co 13:10) y mientras esperamos la manifestación del Señor (1 Co 1:7).' },
          c: 'Este estudio sigue la segunda postura: los dones del Espíritu son para la iglesia de hoy y deben ejercerse con orden, para edificación (1 Co 14:26, 40).'
        } }
      ],
      pensar: 'Los mismos creyentes que fueron llenos del Espíritu en Pentecostés necesitaron ser llenos otra vez ante la persecución (Hch 4:31). ¿Qué situaciones de tu vida necesitan hoy una nueva llenura del Espíritu?'
    },
    {
      id: 'cristologia', n: 'Cristo en Hechos', ref: 'Hechos 2:22-36; 3:13-15; 4:12; 5:31; 7:55-56; 9:20; 10:36-43; 17:31', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Títulos', tabla: {
          titulo: 'Títulos de Jesús en Hechos',
          cab: ['Título', 'Pasaje', 'Significado'],
          filas: [
            ['Señor y Cristo', 'Hch 2:36', 'El Mesías prometido, exaltado con autoridad divina'],
            ['Siervo / Hijo', 'Hch 3:13, 26; 4:27', 'El Siervo sufriente de Isaías'],
            ['El Santo y el Justo', 'Hch 3:14; 7:52', 'Sin pecado, condenado injustamente'],
            ['Autor de la vida', 'Hch 3:15', 'La fuente de la vida, a quien mataron'],
            ['Príncipe y Salvador', 'Hch 5:31', 'Exaltado para dar arrepentimiento y perdón'],
            ['Hijo del Hombre', 'Hch 7:56', 'El que recibe el reino (Dn 7:13-14)'],
            ['Hijo de Dios', 'Hch 9:20', 'La primera predicación de Pablo'],
            ['Señor de todos', 'Hch 10:36', 'De judíos y gentiles'],
            ['Juez de vivos y muertos', 'Hch 10:42; 17:31', 'El que juzgará al mundo']
          ]
        } }
      ],
      texto: [
        'Hechos es el libro del Espíritu Santo, pero el Espíritu no habla de sí mismo: glorifica a Cristo (Jn 16:13-14). Por eso la predicación de Hechos gira siempre en torno a Jesús.',
        { h: 'Crucificado y resucitado' },
        'Todos los sermones de Hechos tienen el mismo centro: Jesús fue crucificado por manos de inicuos, pero según el determinado consejo de Dios, y Dios lo resucitó (Hch 2:23-24). La resurrección es el hecho decisivo. Los apóstoles se presentan como testigos de ella (Hch 1:22; 2:32; 3:15), y por anunciarla son perseguidos.',
        { h: 'Exaltado a la diestra de Dios' },
        'Hechos insiste en algo que los Evangelios apenas narran: Jesús no solo resucitó, sino que fue exaltado. Está a la diestra de Dios (Hch 2:33; 5:31; 7:55-56), desde donde derrama el Espíritu, da arrepentimiento y perdón de pecados, y sigue actuando en su iglesia. Es él quien se aparece a Saulo, quien habla a Ananías y quien anima a Pablo en la cárcel. El libro no presenta a un fundador ausente, sino a un Señor presente.',
        'Pedro lo resume: «Dios le ha hecho Señor y Cristo» (Hch 2:36). Señor, en la Septuaginta que leían los judíos de habla griega, era el nombre con que se traducía Jehová. Los creyentes invocan el nombre de Jesús para ser salvos (Hch 2:21; 22:16), y Esteban le encomienda su espíritu como Jesús se lo encomendó al Padre (Hch 7:59). Lo tratan como solo se trata a Dios.',
        { h: 'El único Salvador' },
        'En Hechos no hay salvación fuera de Cristo: «en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos» (Hch 4:12). A los judíos se les anuncia que Jesús es el Mesías prometido en la ley y los profetas; a los paganos de Listra y Atenas, que el Dios creador los llama a arrepentirse por medio de él.',
        { h: 'El que vendrá' },
        'Finalmente, Jesús es el que volverá. Los ángeles anunciaron que vendría como fue visto ir al cielo (Hch 1:11). El cielo lo recibe hasta los tiempos de la restauración de todas las cosas (Hch 3:21), y Dios lo ha puesto por juez de vivos y muertos, dando fe de ello al resucitarlo (Hch 10:42; 17:31).'
      ],
      pensar: 'En Hechos, Jesús no es un recuerdo del pasado, sino el Señor exaltado que sigue obrando en su iglesia. ¿Cómo cambia tu vida cristiana saber que él está vivo, presente y actuando hoy?'
    },
    {
      id: 'salvacion', n: 'La salvación en Hechos', ref: 'Hechos 2:21, 37-41; 3:19; 10:43; 13:38-39; 15:7-11; 16:30-34; 26:18', fecha: [30, 62],
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa.', ref: 'Hechos 16:31' }
      ],
      texto: [
        'Tres veces en Hechos alguien pregunta qué debe hacer: los oyentes de Pentecostés («¿qué haremos?», Hch 2:37), el carcelero de Filipos («¿qué debo hacer para ser salvo?», Hch 16:30) y, en su relato, el propio Saulo («¿Qué haré, Señor?», Hch 22:10). Las respuestas muestran cómo entendía la salvación la iglesia primitiva.',
        { h: 'Por gracia, por medio de la fe' },
        'La salvación es un regalo de Dios. En el concilio, Pedro declaró: «creemos que por la gracia del Señor Jesús seremos salvos» (Hch 15:11). No se obtiene por cumplir la ley de Moisés: en Cristo «es justificado todo aquel que cree» (Hch 13:39). Por eso la respuesta al carcelero es tan sencilla: «Cree en el Señor Jesucristo, y serás salvo» (Hch 16:31). Los profetas daban testimonio de que todos los que creen en él recibirán perdón de pecados por su nombre (Hch 10:43).',
        { h: 'Arrepentimiento' },
        'La fe que salva va unida al arrepentimiento. Pedro llama: «Arrepentíos y convertíos, para que sean borrados vuestros pecados» (Hch 3:19), y Pablo predicaba que se arrepintieran y se convirtieran a Dios, haciendo obras dignas de arrepentimiento (Hch 26:20). Arrepentirse no es solo sentir pena, sino cambiar de dirección: dejar el pecado y volverse a Dios. Aun el arrepentimiento es un don de Dios (Hch 5:31; 11:18).',
        { h: 'El bautismo en agua' },
        'En Hechos, los que creen se bautizan pronto, a menudo el mismo día: los tres mil de Pentecostés, los samaritanos, el etíope, Saulo, Cornelio, Lidia y el carcelero. El bautismo es la confesión pública de la fe en Jesús y el paso de obediencia que la acompaña. No es lo que salva: Cornelio y su casa recibieron el Espíritu, señal de que Dios los había aceptado, antes de ser bautizados (Hch 10:44-48). Se practicaba descendiendo al agua (Hch 8:38), y la iglesia mantiene el bautismo por inmersión como mandato del Señor.',
        { h: 'Tú y tu casa' },
        'La promesa al carcelero incluye a su casa. No significa que la fe de uno salve a otros, sino que el mensaje se ofrecía a toda la familia: esa misma noche, Pablo habló la palabra del Señor «a todos los que estaban en su casa», y el carcelero se regocijó «con toda su casa de haber creído a Dios» (Hch 16:32, 34). Dios desea alcanzar a familias enteras.',
        'Pablo resumió ante Agripa el resultado de la salvación: ojos abiertos, conversión de las tinieblas a la luz y de la potestad de Satanás a Dios, perdón de pecados y herencia entre los santificados (Hch 26:18).'
      ],
      pensar: 'La respuesta al carcelero fue: «Cree en el Señor Jesucristo, y serás salvo, tú y tu casa» (Hch 16:31). ¿Por quiénes de tu familia estás orando para que conozcan a Cristo?'
    },
    {
      id: 'eclesiologia', n: 'La iglesia en Hechos', ref: 'Hechos 2:41-47; 6:1-7; 11:26; 14:23; 15:1-31; 20:7, 28', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'La iglesia', tabla: {
          titulo: 'Rasgos de la iglesia en Hechos',
          cab: ['Rasgo', 'Pasaje'],
          filas: [
            ['Comunidad de creyentes bautizados', 'Hch 2:41; 5:14'],
            ['Perseverante en doctrina, comunión, partimiento del pan y oración', 'Hch 2:42'],
            ['Reunida en el templo y por las casas', 'Hch 2:46; 5:42; 20:20'],
            ['Con dos ordenanzas: bautismo y cena del Señor', 'Hch 2:41-42; 20:7'],
            ['Con ancianos y servidores', 'Hch 6:3-6; 14:23; 20:17, 28'],
            ['Que se disciplina y resuelve sus conflictos', 'Hch 5:1-11; 6:1-7; 15:1-31'],
            ['Que envía misioneros', 'Hch 13:1-3; 14:26-27']
          ]
        } }
      ],
      texto: [
        'Hechos narra el nacimiento de la iglesia y muestra cómo vivía, cómo se organizaba y cómo cumplía su misión. No es un reglamento, pero da un modelo.',
        { h: 'Un pueblo, no un edificio' },
        'La palabra iglesia, en griego ekklesía, significa asamblea, los convocados. En Hechos nunca designa un edificio: los creyentes se reunían en el templo y en las casas. La iglesia es el pueblo que Dios se tomó para su nombre, de judíos y de gentiles (Hch 15:14), que Cristo «ganó por su propia sangre» (Hch 20:28). Existe la iglesia en una ciudad, como la de Jerusalén o la de Antioquía, y existe la iglesia como un todo, extendida por Judea, Galilea y Samaria (Hch 9:31).',
        { h: 'Las ordenanzas' },
        'Hechos muestra las dos ordenanzas que Cristo dejó a su iglesia. El bautismo en agua de los que creen, y el partimiento del pan, la cena del Señor, en la que los creyentes recuerdan su muerte. En Troas, la iglesia se reunía «el primer día de la semana… para partir el pan» (Hch 20:7).',
        { h: 'El liderazgo' },
        'Los apóstoles tuvieron un papel único como testigos de la resurrección y fundamento de la iglesia. Junto a ellos surgieron otros ministerios. Los siete fueron elegidos para servir, con la condición de estar llenos del Espíritu y de sabiduría (Hch 6:3). En cada iglesia nueva, Pablo y Bernabé constituyeron ancianos, después de orar con ayunos (Hch 14:23). A esos ancianos Pablo los llama también obispos, es decir, supervisores, y pastores del rebaño (Hch 20:28). Había además profetas y maestros (Hch 13:1).',
        { h: 'Una iglesia que resuelve sus problemas' },
        'La iglesia de Hechos no es perfecta. Hubo mentira (Ananías y Safira), quejas por discriminación (las viudas), una controversia doctrinal grave (la circuncisión) y desacuerdos entre líderes (Pablo y Bernabé). Hechos muestra cómo se enfrentaron: con disciplina, escuchando a los afectados, delegando responsabilidades, reuniendo a los líderes, examinando las Escrituras y buscando la dirección del Espíritu.',
        { h: 'Una iglesia en misión' },
        'Sobre todo, la iglesia de Hechos existe para testificar. La iglesia de Antioquía envió a Bernabé y a Saulo, y ellos volvieron a darle cuenta de lo que Dios había hecho (Hch 14:26-27). Las iglesias nacidas de la misión se convertían a su vez en centros desde donde la palabra se extendía.'
      ],
      pensar: 'La iglesia de Hechos tenía problemas, pero los enfrentaba en oración, con las Escrituras y bajo la guía del Espíritu. ¿Qué podemos aprender de ella para enfrentar los problemas de nuestras congregaciones?'
    },
    {
      id: 'escatologia', n: 'Los últimos tiempos en Hechos', ref: 'Hechos 1:6-11; 2:17-21; 3:19-21; 15:14-17; 17:31; 24:15; 28:20', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Esperanza', tabla: {
          titulo: 'La esperanza futura en Hechos',
          cab: ['Enseñanza', 'Pasaje'],
          filas: [
            ['Jesús volverá de manera visible y personal', 'Hch 1:11'],
            ['Los postreros días comenzaron con el derramamiento del Espíritu', 'Hch 2:17'],
            ['Habrá señales antes del día grande del Señor', 'Hch 2:19-20'],
            ['Vendrán tiempos de refrigerio y restauración', 'Hch 3:19-21'],
            ['El reino será restaurado a Israel en el tiempo del Padre', 'Hch 1:6-7; 15:16'],
            ['Habrá resurrección de justos e injustos', 'Hch 24:15'],
            ['Dios juzgará al mundo por medio de Cristo', 'Hch 10:42; 17:31']
          ]
        } }
      ],
      texto: [
        'Hechos no es un libro de profecía como Daniel o Apocalipsis, pero toda su historia está enmarcada por la esperanza del regreso de Cristo.',
        { h: 'Este mismo Jesús vendrá' },
        'El libro comienza con la ascensión y una promesa: «Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo» (Hch 1:11). Volverá el mismo Jesús, no otro; de la misma manera, visible y en las nubes; y al mismo lugar, el monte de los Olivos (Zac 14:4). Las cartas que Pablo escribió durante sus viajes desarrollan esta esperanza: antes del día de la ira, el Señor descenderá del cielo y los creyentes, vivos y muertos, serán arrebatados para recibirlo en el aire (1 Ts 4:16-17; 5:9). La iglesia vive esperando ese momento.',
        { h: 'Los postreros días' },
        'Pedro entendió que Pentecostés inauguraba «los postreros días» anunciados por Joel (Hch 2:17). El derramamiento del Espíritu ya comenzó; las señales en el sol y la luna, antes del «día del Señor, grande y manifiesto», todavía esperan su cumplimiento (Hch 2:20). Vivimos en el tiempo entre la primera y la segunda venida de Cristo.',
        { h: 'Israel en el plan de Dios' },
        'Hechos no enseña que la iglesia haya reemplazado a Israel. Cuando los discípulos preguntaron si Jesús restauraría el reino a Israel, él no negó que eso ocurriría: solo dijo que no les tocaba saber cuándo (Hch 1:6-7). Pedro anunció a Israel que, si se arrepentía, vendrían «tiempos de refrigerio» y Dios enviaría a Jesucristo, a quien el cielo recibe «hasta los tiempos de la restauración de todas las cosas» (Hch 3:19-21). Jacobo explicó que Dios toma ahora de los gentiles un pueblo para su nombre, y que «después de esto» reedificará el tabernáculo de David (Hch 15:14-16). Pablo, hasta el final, dijo que estaba preso «por la esperanza de Israel» (Hch 28:20).',
        'Estas palabras distinguen dos etapas: el tiempo presente de la iglesia, formada por judíos y gentiles, y la futura restauración de Israel en el reino de Cristo, cuando él regrese a reinar.',
        { h: 'Resurrección y juicio' },
        'Pablo esperaba «resurrección de los muertos, así de justos como de injustos» (Hch 24:15). Dios ha establecido un día en que juzgará al mundo con justicia por medio de Jesús, y la prueba es que lo resucitó (Hch 17:31). Por eso el mensaje de Hechos siempre termina con un llamado urgente al arrepentimiento.'
      ],
      pensar: 'Los ángeles preguntaron a los discípulos por qué estaban mirando al cielo, y les recordaron que Jesús volvería (Hch 1:11). ¿Cómo se equilibran en tu vida la esperanza del regreso de Cristo y el trabajo de ser su testigo mientras tanto?'
    }
  ];

  /* ---------------- Ruta VI · Los viajes de Pablo (puente) ---------------- */
  const viajes = [
    {
      id: 'tres-viajes', n: 'Los viajes en un mapa', ref: 'Hechos 13–14; 15:36–18:22; 18:23–21:16; 27–28', fecha: [46, 60],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Primer viaje, c. 46–48: Chipre y Galacia (Hch 13–14).', fecha: [46, 48],
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'salamina-chipre', 'pafos', 'perge', 'antioquia-pisidia', 'iconio', 'listra', 'derbe'], trazos: ['viaje-1'] } },
          { t: 'Segundo viaje, c. 49–52: Macedonia y Acaya (Hch 15:36–18:22).', fecha: [49, 52],
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['antioquia', 'troas', 'filipos', 'tesalonica', 'berea', 'atenas', 'corinto', 'efeso', 'jerusalen'], trazos: ['viaje-2'] } },
          { t: 'Tercer viaje, c. 53–57: Éfeso y regreso a Jerusalén (Hch 18:23–21:16).', fecha: [53, 57],
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'efeso', 'troas', 'filipos', 'corinto', 'mileto', 'tiro', 'cesarea', 'jerusalen'], trazos: ['viaje-3'] } },
          { t: 'Viaje a Roma, c. 59–60: preso, por mar (Hch 27–28).', fecha: [59, 60],
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: ['cesarea', 'creta', 'malta', 'puteoli', 'roma'], trazos: ['viaje-roma'] } }
        ] }
      ],
      texto: [
        'Más de la mitad de Hechos sigue a Pablo en sus viajes. Lucas narra tres viajes misioneros, que parten de Antioquía de Siria, y un cuarto viaje, a Roma, que Pablo hace como prisionero. Usa los botones bajo el mapa para ver cada uno.',
        'El primer viaje, con Bernabé, llevó el evangelio a la isla de Chipre y a las ciudades de Galacia del sur. El segundo, con Silas y luego con Timoteo y Lucas, cruzó a Europa: Filipos, Tesalónica, Berea, Atenas y Corinto. El tercero tuvo su centro en Éfeso, donde Pablo pasó casi tres años, y terminó con el regreso a Jerusalén llevando la ofrenda de las iglesias. El viaje a Roma, después de dos años de prisión en Cesarea, incluyó una tempestad de catorce días y un naufragio en Malta.',
        { h: 'Una estrategia' },
        'Los viajes de Pablo no fueron recorridos al azar. Siguen un patrón que se repite. Pablo buscaba ciudades importantes, capitales de provincia o centros comerciales, desde donde el evangelio pudiera extenderse a la región. Comenzaba en la sinagoga, donde encontraba judíos y gentiles temerosos de Dios que ya conocían las Escrituras. Cuando era rechazado, se volvía a los gentiles. Establecía iglesias, nombraba ancianos y volvía a visitarlas o les escribía cartas.',
        'Pero sobre todo, seguía la dirección del Espíritu Santo. Fue el Espíritu quien lo envió desde Antioquía (Hch 13:2-4), quien le cerró las puertas de Asia y Bitinia y lo llevó a Macedonia (Hch 16:6-10), y quien le advirtió de las prisiones que lo esperaban en Jerusalén (Hch 20:22-23).',
        'Las fechas son aproximadas y se calculan a partir de datos externos, como el proconsulado de Galión en Corinto. Las rutas del mapa también son aproximadas: Lucas nombra las ciudades, pero no siempre los caminos.'
      ],
      pensar: 'Pablo planificaba sus viajes con inteligencia, pero estaba dispuesto a cambiar de rumbo cuando el Espíritu Santo le cerraba una puerta (Hch 16:6-10). ¿Cómo combinas tú la planificación con la sensibilidad a la dirección de Dios?'
    },
    {
      id: 'comparacion', n: 'Los viajes, lado a lado', ref: 'Hechos 13–28', fecha: [46, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Comparación', tabla: {
          titulo: 'Los viajes de Pablo en Hechos',
          cab: ['', 'Primer viaje', 'Segundo viaje', 'Tercer viaje', 'A Roma'],
          filas: [
            ['Pasaje', 'Hch 13–14', 'Hch 15:36–18:22', 'Hch 18:23–21:16', 'Hch 27–28'],
            ['Fecha aproximada', 'c. 46–48', 'c. 49–52', 'c. 53–57', 'c. 59–60'],
            ['Compañeros', 'Bernabé, Juan Marcos', 'Silas, Timoteo, Lucas', 'Timoteo, Erasto, Gayo, Aristarco, Lucas y otros', 'Lucas, Aristarco'],
            ['Regiones', 'Chipre, Galacia', 'Galacia, Macedonia, Acaya', 'Galacia, Asia, Macedonia, Acaya', 'Creta, Malta, Italia'],
            ['Ciudades principales', 'Pafos, Antioquía de Pisidia, Iconio, Listra, Derbe', 'Filipos, Tesalónica, Berea, Atenas, Corinto', 'Éfeso, Troas, Mileto', 'Malta, Puteoli, Roma'],
            ['Cartas escritas', 'Gálatas (según algunos, poco después)', '1 y 2 Tesalonicenses', '1 y 2 Corintios, Romanos', 'Efesios, Filipenses, Colosenses, Filemón (desde Roma)'],
            ['Momento clave', 'Pablo apedreado en Listra', 'La visión del varón macedonio', 'Doce discípulos reciben el Espíritu en Éfeso', 'El naufragio']
          ],
          nota: 'Fechas y lugar de escritura de las cartas aproximados; algunos se discuten.'
        } }
      ],
      texto: [
        'La tabla compara los cuatro viajes de Pablo que narra Hechos. Algunas observaciones ayudan a leerla.',
        { h: 'Un equipo, no un héroe solitario' },
        'Pablo nunca viajó solo por mucho tiempo. Comenzó con Bernabé, que lo había presentado a los apóstoles y lo había buscado en Tarso. Después de separarse de él, formó equipo con Silas, profeta de la iglesia de Jerusalén, y fue sumando a Timoteo, a Lucas y a hermanos de las iglesias que fundaba, como Aristarco de Tesalónica, Gayo de Derbe y Tíquico y Trófimo de Asia (Hch 20:4). La misión era una obra de equipo, y Pablo formaba a otros mientras viajaba.',
        { h: 'Las cartas nacieron en el camino' },
        'Muchas cartas de Pablo se escribieron durante estos viajes, para iglesias que había fundado y que no podía visitar. Desde Corinto, en el segundo viaje, escribió a los Tesalonicenses, preocupado por una iglesia que había tenido que dejar demasiado pronto. Desde Éfeso, en el tercero, escribió 1 Corintios, y desde Macedonia, 2 Corintios. En Corinto, al final del tercer viaje, escribió Romanos, a una iglesia que todavía no conocía. Desde su prisión en Roma escribió Efesios, Filipenses, Colosenses y Filemón.',
        'Por eso, leer Hechos junto a las cartas ilumina a ambos. Hechos 17 cuenta por qué Pablo salió de Tesalónica de noche; 1 Tesalonicenses 2 y 3 muestran cuánto le dolió no poder volver. Hechos 18 cuenta su año y medio en Corinto; las cartas a los Corintios muestran los problemas de esa iglesia.',
        { h: 'Viajes cada vez más largos' },
        'El primer viaje duró unos dos años; el tercero, unos cuatro. Pablo se quedaba más tiempo en ciudades estratégicas: año y medio en Corinto, casi tres años en Éfeso. Desde allí, la palabra se extendió por toda la región sin que él tuviera que recorrerla.'
      ],
      pensar: 'Pablo siempre trabajó en equipo y formaba a otros mientras viajaba, como Timoteo y Silas. ¿A quién estás formando tú en la fe, y quién te está formando a ti?'
    },
    {
      id: 'recurso-general', n: 'El recurso Los viajes de Pablo', ref: 'Hechos 9–28; Gálatas 1–2; 2 Corintios 11:23-28', fecha: [34, 67],
      visual: [
        { tipo: 'tabla', titulo: 'El recurso', tabla: {
          titulo: 'Lo que recorre el recurso Los viajes de Pablo',
          cab: ['Ruta', 'Contenido'],
          filas: [
            ['El recorrido completo', 'De Tarso y Jerusalén a Damasco, Arabia, los tres viajes, Cesarea y Roma'],
            ['Las cartas en su contexto', 'Dónde y cuándo escribió cada una de sus trece cartas'],
            ['Las ciudades', 'Antioquía, Filipos, Tesalónica, Atenas, Corinto, Éfeso y Roma'],
            ['Los sufrimientos de Pablo', '2 Corintios 11:23-28 ubicado en el mapa'],
            ['Después de Hechos', 'La probable liberación, los viajes de las cartas pastorales y su muerte']
          ],
          nota: 'Recurso general en preparación. Lo podrán usar también los estudios de las cartas de Pablo.'
        } }
      ],
      texto: [
        'Esta ruta presenta los viajes de Pablo de forma resumida, porque forman parte de Hechos. Pero los viajes de Pablo no son solo un tema de Hechos: también los necesitan quienes estudian Romanos, Corintios, Gálatas, Filipenses, Tesalonicenses y las demás cartas. Por eso tendrán un recurso propio, Los viajes de Pablo, que se podrá abrir desde cualquiera de esos estudios.',
        'Ese recurso recorrerá con más detalle cada etapa: los años antes de los viajes, que Hechos apenas menciona y que Pablo cuenta en Gálatas, como su estadía en Arabia y los catorce años antes del concilio (Gá 1:17–2:1); cada viaje, ciudad por ciudad; las cartas que escribió y el momento en que lo hizo, y lo que ocurrió después de los dos años en Roma.',
        { h: 'Lo que Hechos no cuenta' },
        'Hechos es un relato selectivo. Pablo mismo enumera en 2 Corintios sufrimientos que Lucas no narra: cinco veces recibió treinta y nueve azotes de los judíos, tres veces fue azotado con varas, tres veces naufragó, y pasó una noche y un día como náufrago en alta mar (2 Co 11:24-25). Todo eso ocurrió antes del naufragio de Malta. Hechos muestra apenas una parte de lo que costó llevar el evangelio a los gentiles.',
        'Tampoco narra el final de su vida. Las cartas pastorales sugieren que fue liberado, que visitó otra vez algunas iglesias, que dejó a Tito en Creta (Tit 1:5) y que volvió a ser encarcelado. En su última carta, desde Roma, Pablo escribió: «He peleado la buena batalla, he acabado la carrera, he guardado la fe» (2 Ti 4:7). Según la tradición, murió en Roma bajo Nerón.',
        'Mientras el recurso general está en preparación, las rutas La expansión de la iglesia y Comentario capítulo por capítulo de este estudio siguen los viajes en el mapa.'
      ],
      pensar: 'Al final de su vida, Pablo pudo decir: «he acabado la carrera, he guardado la fe» (2 Ti 4:7). ¿Qué te gustaría poder decir tú al final de tu carrera?'
    }
  ];

  /* ---------------- Ruta VII · El Espíritu Santo en Hechos ---------------- */
  const espiritu = [
    {
      id: 'promesa-espiritu', n: 'La promesa del Espíritu', ref: 'Joel 2:28-29; Lucas 24:49; Juan 14:16-17; 16:7; Hechos 1:4-8', fecha: 30,
      visual: [
        { tipo: 'tabla', titulo: 'La promesa', tabla: {
          titulo: 'La promesa del Espíritu a lo largo de la Biblia',
          cab: ['Quién la anuncia', 'Pasaje', 'Lo que promete'],
          filas: [
            ['Moisés', 'Nm 11:29', 'Ojalá todo el pueblo de Jehová fuese profeta'],
            ['Joel', 'Jl 2:28-29', 'El Espíritu derramado sobre toda carne'],
            ['Ezequiel', 'Ez 36:26-27', 'Un espíritu nuevo dentro del pueblo'],
            ['Juan el Bautista', 'Lc 3:16', 'Él os bautizará en Espíritu Santo y fuego'],
            ['Jesús', 'Jn 14:16-17; 16:7', 'Otro Consolador, que estará para siempre'],
            ['Jesús resucitado', 'Lc 24:49; Hch 1:4-8', 'Poder desde lo alto para ser testigos']
          ]
        } }
      ],
      texto: [
        'Pentecostés no fue una sorpresa. Fue el cumplimiento de una promesa que recorre toda la Biblia. Esta ruta sigue esa promesa y los cinco relatos de Hechos en que el Espíritu viene sobre los creyentes.',
        { h: 'En el Antiguo Testamento' },
        'En el Antiguo Testamento, el Espíritu de Dios venía sobre algunas personas para tareas especiales: jueces, reyes, profetas. Moisés expresó un deseo que parecía imposible: «Ojalá todo el pueblo de Jehová fuese profeta, y que Jehová pusiera su espíritu sobre ellos» (Nm 11:29). Siglos después, el profeta Joel anunció que ese deseo se cumpliría: «derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas» (Jl 2:28). Ya no solo sobre unos pocos, sino sobre todos: hombres y mujeres, jóvenes y ancianos, siervos y siervas.',
        { h: 'En los Evangelios' },
        'Juan el Bautista presentó a Jesús como el que bautizaría «en Espíritu Santo y fuego» (Lc 3:16). Jesús mismo, en la última cena, prometió a sus discípulos «otro Consolador», el Espíritu de verdad, que estaría con ellos para siempre (Jn 14:16-17), y les dijo que les convenía que él se fuera, porque si no, el Consolador no vendría (Jn 16:7).',
        'Después de resucitar, Jesús les mandó: «quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49). Y antes de ascender, precisó: «vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días… recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos» (Hch 1:5, 8).',
        { h: 'Una promesa con propósito' },
        'Jesús llamó a esta experiencia «la promesa del Padre». Los discípulos ya creían en él, lo habían visto resucitado y habían sido enseñados durante cuarenta días. Aun así, Jesús no los envió hasta que recibieran el poder del Espíritu. El testimonio de la iglesia no depende solo de lo que sabe, sino del poder de Dios que la acompaña.',
        'Las estaciones siguientes recorren los cinco relatos de Hechos donde se narra la venida del Espíritu, y la última los compara.'
      ],
      pensar: 'Moisés deseó que todo el pueblo de Dios recibiera el Espíritu (Nm 11:29), y en Pentecostés ese deseo comenzó a cumplirse. ¿Qué significa para ti que la promesa del Espíritu no sea solo para líderes, sino para todo creyente?'
    },
    {
      id: 'e-jerusalen', n: 'Jerusalén: el Espíritu derramado', ref: 'Hechos 2:1-21, 33, 38-39', fecha: 30,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperios-historia/img/integrador-pentecostes.webp', alt: 'El día de Pentecostés en Jerusalén: los discípulos llenos del Espíritu Santo hablan a una multitud de muchas naciones', pie: 'Pentecostés (Hch 2:1-13).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Lo que ocurrió', tabla: {
          titulo: 'Pentecostés: el primer relato',
          cab: ['Pregunta', 'Respuesta en Hechos 2'],
          filas: [
            ['¿Quiénes?', 'Los ciento veinte discípulos, hombres y mujeres, que ya creían en Jesús'],
            ['¿Cuándo?', 'Diez días después de la ascensión, en la fiesta de Pentecostés'],
            ['¿Cómo se preparaban?', 'Perseveraban unánimes en oración (Hch 1:14)'],
            ['¿Qué se vio y oyó?', 'Un estruendo como de viento recio y lenguas como de fuego'],
            ['¿Qué hicieron ellos?', 'Hablaron en otras lenguas, según el Espíritu les daba'],
            ['¿Qué produjo?', 'Testimonio valiente y tres mil conversiones']
          ]
        } }
      ],
      texto: [
        'El primer relato es el modelo para entender los demás. En el día de Pentecostés, los ciento veinte estaban «unánimes juntos» (Hch 2:1), después de diez días de perseverar en oración.',
        'Hubo señales que no se repiten en el resto del libro: un estruendo como de un viento recio y lenguas como de fuego que se asentaban sobre cada uno. Eran señales de la llegada del Espíritu, el comienzo de una nueva etapa en el plan de Dios, como el fuego y el viento del Sinaí marcaron el comienzo de la antigua alianza.',
        'Pero hubo también algo que sí se repite: «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). Todos fueron llenos, y todos hablaron.',
        { h: 'Lo que Pedro explicó' },
        'Pedro dio la interpretación inspirada de lo ocurrido. Era el cumplimiento de Joel: el derramamiento del Espíritu de los postreros días (Hch 2:16-17). Y era obra de Jesús: exaltado a la diestra de Dios, habiendo recibido del Padre la promesa del Espíritu, «ha derramado esto que vosotros veis y oís» (Hch 2:33). Lo que la multitud veía y oía era la prueba de que Jesús estaba vivo y glorificado.',
        { h: 'Para todos' },
        'Cuando la multitud preguntó qué debía hacer, Pedro respondió: «Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo. Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:38-39).',
        'Pedro distinguió el arrepentimiento y el bautismo en agua, por un lado, del don del Espíritu, por otro, y afirmó que la promesa alcanza a los hijos de los que oían y a todos los que están lejos, sin límite de tiempo ni de lugar. Es el texto principal para afirmar que la experiencia de Pentecostés es para la iglesia de hoy.'
      ],
      pensar: 'Lo que la multitud veía y oía en Pentecostés era la prueba de que Jesús estaba vivo y exaltado (Hch 2:33). ¿De qué manera la vida llena del Espíritu de un creyente puede ser hoy un testimonio de que Jesús vive?'
    },
    {
      id: 'e-samaria', n: 'Samaria: creyentes que aún no lo habían recibido', ref: 'Hechos 8:5-24', fecha: 34,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Los cuales, habiendo venido, oraron por ellos para que recibiesen el Espíritu Santo; porque aún no había descendido sobre ninguno de ellos, sino que solamente habían sido bautizados en el nombre de Jesús. Entonces les imponían las manos, y recibían el Espíritu Santo.', ref: 'Hechos 8:15-17' }
      ],
      texto: [
        'El segundo relato ocurre en Samaria y es quizá el más importante para entender que el bautismo en el Espíritu es una experiencia distinta de la conversión.',
        { h: 'Creyeron y fueron bautizados' },
        'Felipe predicó a Cristo en Samaria con grandes señales. Lucas dice expresamente que los samaritanos «creyeron a Felipe, que anunciaba el evangelio del reino de Dios y el nombre de Jesucristo, se bautizaban hombres y mujeres» (Hch 8:12). Eran verdaderos creyentes. Tanto que, cuando los apóstoles supieron que Samaria «había recibido la palabra de Dios», enviaron a Pedro y a Juan (Hch 8:14).',
        { h: 'Pero el Espíritu no había descendido' },
        'Pedro y Juan oraron por ellos «para que recibiesen el Espíritu Santo; porque aún no había descendido sobre ninguno de ellos, sino que solamente habían sido bautizados en el nombre de Jesús» (Hch 8:15-16). Habían creído, eran salvos, estaban bautizados en agua, y sin embargo les faltaba la experiencia del Espíritu viniendo sobre ellos. Los apóstoles no lo dieron por supuesto: lo buscaron en oración.',
        'Les impusieron las manos, «y recibían el Espíritu Santo» (Hch 8:17). El tiempo entre la conversión y la recepción del Espíritu fue de días o semanas: el tiempo que tardó la noticia en llegar a Jerusalén y los apóstoles en viajar.',
        { h: 'Algo que se pudo ver' },
        'Lucas no dice qué se manifestó, pero da una pista importante: «Cuando vio Simón que por la imposición de las manos de los apóstoles se daba el Espíritu Santo, les ofreció dinero» (Hch 8:18). Simón, que ya había visto milagros y sanidades hechos por Felipe, vio algo nuevo y lo bastante impresionante como para querer comprar el poder de producirlo. A la luz de los otros relatos, lo más probable es que viera lo mismo que se vio en Jerusalén, en Cesarea y en Éfeso: personas que hablaban en lenguas.',
        { h: 'Por qué Dios lo hizo así' },
        'Samaria era el primer paso fuera del judaísmo. Al hacer que el Espíritu viniera por medio de Pedro y Juan, Dios unió a los samaritanos con la iglesia de Jerusalén, evitando que hubiera dos iglesias rivales, como había dos templos. Pero el relato enseña además algo permanente: un creyente puede haber nacido de nuevo y no haber recibido aún el bautismo en el Espíritu Santo.'
      ],
      pensar: 'Pedro y Juan no dieron por supuesto que los samaritanos ya tenían todo lo que Dios quería darles: oraron para que recibieran el Espíritu (Hch 8:15). ¿Qué te enseña esto sobre orar por los nuevos creyentes?'
    },
    {
      id: 'e-saulo', n: 'Damasco: Saulo es lleno del Espíritu', ref: 'Hechos 9:1-19; 1 Corintios 14:18', fecha: 34,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-saulo-damasco.webp', alt: 'Una luz deslumbrante desde el cielo rodea a Saulo, caído en el camino cerca de Damasco', pie: 'El encuentro de Saulo con Cristo (Hch 9:3-6).', origen: 'ia' }
      ],
      texto: [
        'El tercer relato es breve, pero tiene la misma secuencia: primero el encuentro con Cristo, después la llenura del Espíritu.',
        { h: 'El encuentro con Cristo' },
        'Camino a Damasco, Saulo se encontró con Jesús resucitado. Reconoció su señorío: «¿Quién eres, Señor?» y, en el relato que hace después, preguntó: «¿Qué haré, Señor?» (Hch 22:10). Entró en la ciudad ciego, y pasó tres días sin comer ni beber, orando (Hch 9:11). Era ya un hombre rendido a Cristo.',
        { h: 'Tres días después' },
        'Entonces el Señor envió a Ananías, un discípulo sin cargo ni título, que entró en la casa, le impuso las manos y le dijo: «Hermano Saulo, el Señor Jesús, que se te apareció en el camino por donde venías, me ha enviado para que recibas la vista y seas lleno del Espíritu Santo» (Hch 9:17). Ananías lo llamó hermano: ya lo reconocía como parte de la familia de la fe. Y le anunció dos cosas: recibir la vista y ser lleno del Espíritu.',
        'Lucas narra que al momento le cayeron de los ojos como escamas, recibió la vista y fue bautizado. No describe cómo se manifestó la llenura del Espíritu, porque el foco del relato está en la conversión del perseguidor. Pero el propio Pablo dejó un testimonio años después: «Doy gracias a Dios que hablo en lenguas más que todos vosotros» (1 Co 14:18). El apóstol que más escribió sobre los dones del Espíritu hablaba en lenguas, y lo consideraba motivo de gratitud.',
        { h: 'Lo que muestra este relato' },
        'El relato de Saulo confirma el patrón de Samaria: hubo un tiempo, aunque breve, entre su encuentro con Cristo y su llenura del Espíritu. También muestra que Dios puede usar a cualquier creyente para orar por otros: no fue un apóstol, sino Ananías, quien impuso las manos sobre Saulo.',
        'Y muestra el propósito de la llenura. Inmediatamente después, Saulo «en seguida predicaba a Cristo en las sinagogas, diciendo que éste era el Hijo de Dios» (Hch 9:20). Lleno del Espíritu, el perseguidor se convirtió en testigo, tal como Jesús había prometido en Hechos 1:8.'
      ],
      pensar: 'Dios usó a Ananías, un discípulo común, para orar por Saulo y que fuera lleno del Espíritu (Hch 9:17). ¿Estás dispuesto a ser usado por Dios para orar por otros, aunque no tengas un cargo en la iglesia?'
    },
    {
      id: 'e-cesarea', n: 'Cesarea: el Espíritu sobre los gentiles', ref: 'Hechos 10:44-48; 11:15-18; 15:7-9', fecha: 40,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y cuando comencé a hablar, cayó el Espíritu Santo sobre ellos también, como sobre nosotros al principio. Entonces me acordé de lo dicho por el Señor, cuando dijo: Juan ciertamente bautizó en agua, mas vosotros seréis bautizados con el Espíritu Santo.', ref: 'Hechos 11:15-16' }
      ],
      texto: [
        'El cuarto relato abre la puerta a los gentiles, y en él la señal de las lenguas tiene un papel decisivo.',
        { h: 'Mientras Pedro hablaba' },
        'En casa de Cornelio, Pedro predicaba a Jesús, ungido con el Espíritu Santo y con poder, crucificado y resucitado, y concluyó que todos los que creen en él reciben perdón de pecados. «Mientras aún hablaba Pedro estas palabras, el Espíritu Santo cayó sobre todos los que oían el discurso» (Hch 10:44). Aquí no hubo intervalo visible ni imposición de manos: los oyentes creyeron y el Espíritu vino sobre ellos casi al mismo tiempo, antes del bautismo en agua.',
        { h: '«Porque los oían que hablaban en lenguas»' },
        'Los judíos creyentes que acompañaban a Pedro «se quedaron atónitos de que también sobre los gentiles se derramase el don del Espíritu Santo. Porque los oían que hablaban en lenguas, y que magnificaban a Dios» (Hch 10:45-46). La palabra «porque» es la clave. ¿Cómo supieron que esos gentiles habían recibido el Espíritu? Por las lenguas. Para aquellos judíos, que nunca habrían aceptado a un gentil incircunciso, nada menos que la misma señal de Pentecostés podía convencerlos.',
        { h: '«Como sobre nosotros al principio»' },
        'En Jerusalén, Pedro usó este hecho como argumento definitivo: el Espíritu cayó sobre ellos «como sobre nosotros al principio» (Hch 11:15). Lo identificó con el bautismo en el Espíritu prometido por Jesús, y concluyó: «Si Dios, pues, les concedió también el mismo don que a nosotros… ¿quién era yo que pudiese estorbar a Dios?» (Hch 11:17). Años después, en el concilio, volvió a decirlo: Dios les dio el Espíritu Santo lo mismo que a nosotros, y ninguna diferencia hizo (Hch 15:8-9).',
        'Pedro reconoció que Cesarea fue lo mismo que Pentecostés porque vio lo mismo: las mismas lenguas. Esto muestra que la experiencia de Pentecostés no fue única e irrepetible, sino un modelo que se repitió en otros creyentes, en otro lugar y años después.',
        { h: 'La señal y la unidad' },
        'El relato de Cesarea muestra también una función de la señal de las lenguas: probar que Dios no hace acepción de personas. Judíos y gentiles recibieron el mismo Espíritu, de la misma manera. El bautismo en el Espíritu es un don de unidad: une en un solo pueblo a quienes estaban separados.'
      ],
      pensar: 'Pedro dijo que Dios dio a los gentiles «el mismo don que a nosotros» (Hch 11:17). ¿Qué te enseña esto sobre la unidad que el Espíritu Santo produce entre creyentes de distinto origen?'
    },
    {
      id: 'e-efeso', n: 'Éfeso: «¿Recibisteis el Espíritu Santo?»', ref: 'Hechos 19:1-7', fecha: 53,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-efeso-espiritu.webp', alt: 'El apóstol Pablo impone las manos sobre un grupo de discípulos en una casa de Éfeso; algunos levantan los brazos y hablan con fervor', pie: '«Hablaban en lenguas, y profetizaban» (Hch 19:6).', origen: 'ia' }
      ],
      texto: [
        'El quinto relato ocurre unos veinticinco años después de Pentecostés, lejos de Jerusalén, en una iglesia gentil, y por medio de Pablo y no de Pedro. Muestra que la experiencia de Pentecostés seguía siendo parte normal de la vida de la iglesia.',
        { h: 'Una pregunta reveladora' },
        'Al llegar a Éfeso, Pablo halló a unos doce discípulos y les preguntó: «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2). La pregunta muestra tres cosas. Primero, que Pablo consideraba posible haber creído sin haber recibido aún el Espíritu de esta manera. Segundo, que esperaba que fuera una experiencia identificable, de la que una persona puede dar razón. Y tercero, que le daba suficiente importancia como para preguntarlo apenas los conoció.',
        { h: 'Discípulos de Juan' },
        'Ellos respondieron que ni siquiera habían oído si había Espíritu Santo. Solo conocían el bautismo de Juan. Pablo les explicó que Juan había bautizado con bautismo de arrepentimiento, diciendo al pueblo que creyesen en el que vendría después de él, en Jesús. Al oírlo, fueron bautizados en el nombre del Señor Jesús.',
        'Algunos piensan que estos hombres todavía no eran cristianos, y que por eso no habían recibido el Espíritu. Pero aun así, el relato distingue dos momentos: primero creyeron en Jesús y se bautizaron en su nombre; luego, en un acto distinto, Pablo les impuso las manos y recibieron el Espíritu.',
        { h: 'Lenguas y profecía' },
        '«Y habiéndoles impuesto Pablo las manos, vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban» (Hch 19:6). Como en Pentecostés y en Cesarea, la venida del Espíritu se manifestó con lenguas; aquí, además, con profecía. Las lenguas son la señal inicial, pero el Espíritu da también otros dones.',
        'Así comenzó la iglesia de Éfeso, que en los dos años siguientes llevaría la palabra a toda la provincia de Asia (Hch 19:10). Una iglesia que nació llena del Espíritu se convirtió en un centro misionero. La pregunta de Pablo sigue siendo válida para cada creyente.'
      ],
      pensar: 'La pregunta de Pablo, «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2), supone que es posible saberlo con certeza. ¿Qué responderías tú a esa pregunta hoy?'
    },
    {
      id: 'e-patron', n: 'El patrón de Hechos', ref: 'Hechos 2:4; 8:17-18; 9:17; 10:44-46; 19:6', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Comparación', tabla: {
          titulo: 'Los cinco relatos comparados',
          cab: ['', 'Jerusalén', 'Samaria', 'Damasco', 'Cesarea', 'Éfeso'],
          filas: [
            ['Pasaje', 'Hch 2:1-4', 'Hch 8:14-19', 'Hch 9:17-18', 'Hch 10:44-46', 'Hch 19:1-7'],
            ['Año aprox.', '30', '34', '34', '40', '53'],
            ['Quiénes', 'Discípulos judíos', 'Samaritanos', 'Saulo', 'Gentiles', 'Discípulos de Juan'],
            ['Ya creían antes', 'Sí', 'Sí', 'Sí (3 días)', 'Al mismo tiempo', 'Sí'],
            ['Imposición de manos', 'No', 'Sí', 'Sí', 'No', 'Sí'],
            ['Manifestación descrita', 'Lenguas', 'Algo visible (Simón «vio»)', 'No descrita; Pablo habla en lenguas (1 Co 14:18)', 'Lenguas', 'Lenguas y profecía']
          ],
          nota: 'Donde Lucas describe la manifestación, aparecen las lenguas.'
        } }
      ],
      texto: [
        'Al comparar los cinco relatos aparecen elementos que varían y elementos que se repiten. Lo que varía muestra la libertad de Dios; lo que se repite muestra su patrón.',
        { h: 'Lo que varía' },
        'El tiempo entre creer y recibir el Espíritu varía: días o semanas en Samaria, tres días en Saulo, prácticamente nada en Cesarea. La imposición de manos aparece en Samaria, Damasco y Éfeso, pero no en Pentecostés ni en Cesarea. Las personas que oran también varían: apóstoles en Samaria y Éfeso, un discípulo común en Damasco, nadie en Pentecostés ni en Cesarea. Dios no está atado a un método.',
        { h: 'Lo que se repite' },
        'En todos los relatos, el bautismo en el Espíritu es una experiencia que viene sobre personas que creen en Jesús, distinta de la fe y del bautismo en agua, aunque a veces muy cercana en el tiempo. Y en los tres relatos donde Lucas describe lo que se vio y oyó, aparecen las lenguas: en Jerusalén, en Cesarea y en Éfeso. En Samaria hubo una manifestación visible que impresionó a Simón; en Saulo, el relato no la describe, pero Pablo mismo hablaba en lenguas.',
        'Por eso, la iglesia pentecostal enseña que el bautismo en el Espíritu Santo es una experiencia posterior o distinta de la regeneración, y que su señal física inicial es hablar en otras lenguas, según el Espíritu da que se hable. No es una doctrina construida sobre un solo versículo, sino sobre un patrón repetido en el único libro de la Biblia que narra la vida de la iglesia llena del Espíritu.',
        { h: 'Más que una señal' },
        'Las lenguas son la señal inicial, no la meta. El propósito del bautismo en el Espíritu es el poder para testificar (Hch 1:8). Y la evidencia más amplia de una vida llena del Espíritu es el fruto del Espíritu en el carácter (Gá 5:22-23), los dones al servicio de la iglesia y un testimonio valiente de Cristo.',
        'Hechos termina, pero la promesa no. Sigue siendo «para cuantos el Señor nuestro Dios llamare» (Hch 2:39).'
      ],
      pensar: 'Dios no siguió siempre el mismo método, pero sí el mismo patrón: creyentes llenos del Espíritu, con la señal de las lenguas, para ser testigos. ¿Qué paso necesitas dar tú para vivir esa experiencia y crecer en ella?'
    }
  ];

  /* ---------------- Ruta VIII · Los discursos ---------------- */
  const discursos = [
    {
      id: 'kerigma', n: 'El mensaje de la iglesia primitiva', ref: 'Hechos 2:14-40; 3:12-26; 10:34-43; 13:16-41', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Los discursos', tabla: {
          titulo: 'Los principales discursos de Hechos',
          cab: ['Pasaje', 'Quién', 'Dónde', 'Público'],
          filas: [
            ['Hch 2:14-40', 'Pedro', 'Jerusalén', 'Judíos de muchas naciones'],
            ['Hch 3:12-26', 'Pedro', 'El templo', 'El pueblo de Jerusalén'],
            ['Hch 4:8-12', 'Pedro', 'El sanedrín', 'Los gobernantes'],
            ['Hch 7:2-53', 'Esteban', 'El sanedrín', 'Los gobernantes'],
            ['Hch 10:34-43', 'Pedro', 'Cesarea', 'Gentiles temerosos de Dios'],
            ['Hch 13:16-41', 'Pablo', 'Antioquía de Pisidia', 'La sinagoga'],
            ['Hch 14:15-17', 'Pablo', 'Listra', 'Paganos sencillos'],
            ['Hch 17:22-31', 'Pablo', 'Atenas', 'Filósofos'],
            ['Hch 20:18-35', 'Pablo', 'Mileto', 'Ancianos de la iglesia'],
            ['Hch 22; 24; 26', 'Pablo', 'Jerusalén y Cesarea', 'El pueblo, Félix y Agripa']
          ]
        } }
      ],
      texto: [
        'Una parte importante de Hechos está formada por discursos. Lucas no los transcribe palabra por palabra, como una grabación: presenta resúmenes fieles de lo que se dijo, inspirados por el Espíritu Santo. Gracias a ellos sabemos qué predicaba la iglesia primitiva y cómo lo hacía.',
        { h: 'El kerigma' },
        'Los estudiosos llaman kerigma, palabra griega que significa proclamación, al contenido básico de la predicación apostólica. Al comparar los sermones de Pedro y de Pablo, aparecen los mismos elementos:',
        'Primero, el tiempo del cumplimiento ha llegado: lo que anunciaron los profetas se está cumpliendo. Segundo, Jesús de Nazaret, aprobado por Dios con señales, fue crucificado según el plan de Dios. Tercero, Dios lo resucitó, y los apóstoles son testigos. Cuarto, Jesús ha sido exaltado a la diestra de Dios como Señor y Cristo, y ha derramado el Espíritu Santo. Quinto, volverá como juez. Sexto, por eso todos deben arrepentirse y creer en él para recibir el perdón de los pecados y el don del Espíritu.',
        { h: 'Un mensaje, muchos públicos' },
        'Lo que cambia de un discurso a otro no es el centro del mensaje, sino la manera de presentarlo. A los judíos, Pedro y Pablo les hablan desde las Escrituras: Jesús es el Mesías prometido a David. A los paganos de Listra y Atenas, que no conocen las Escrituras, Pablo les habla del Dios creador que se revela en la naturaleza. A los ancianos de Éfeso, les habla como pastor. Ante gobernadores y reyes, presenta su testimonio personal.',
        'Pablo lo resumió en una carta: «a todos me he hecho de todo, para que de todos modos salve a algunos» (1 Co 9:22). Adaptar la forma nunca significó cambiar el contenido: en todos los discursos aparecen Cristo resucitado y el llamado al arrepentimiento.',
        'Las estaciones siguientes estudian los discursos según su público.'
      ],
      pensar: 'Los apóstoles predicaban el mismo mensaje a públicos muy distintos, pero adaptaban la forma de presentarlo. ¿Cómo presentarías el evangelio a un amigo que no conoce la Biblia, sin cambiar su contenido?'
    },
    {
      id: 'd-pedro', n: 'Pedro: a los judíos', ref: 'Hechos 2:14-40; 3:12-26; 4:8-12', fecha: 30,
      visual: [
        { tipo: 'tabla', titulo: 'Estructura', tabla: {
          titulo: 'Los sermones de Pedro a los judíos',
          cab: ['Elemento', 'Pentecostés (Hch 2)', 'El templo (Hch 3)'],
          filas: [
            ['Punto de partida', 'Lo que ven y oyen: el Espíritu derramado', 'Lo que ven: el cojo sanado'],
            ['Escritura', 'Joel 2; Salmos 16 y 110', 'Deuteronomio 18; Génesis 22:18'],
            ['La cruz', 'Vosotros lo matasteis', 'Vosotros lo negasteis ante Pilato'],
            ['La resurrección', 'Dios lo levantó; somos testigos', 'Dios lo resucitó; somos testigos'],
            ['El llamado', 'Arrepentíos y bautícese cada uno', 'Arrepentíos y convertíos'],
            ['La promesa', 'Perdón y el don del Espíritu', 'Perdón y tiempos de refrigerio']
          ]
        } }
      ],
      texto: [
        'Los primeros sermones de Hechos son de Pedro, dirigidos a judíos en Jerusalén. Tienen una estructura muy parecida.',
        { h: 'Desde lo que la gente ve' },
        'Pedro no comienza con una idea abstracta, sino con lo que su público acaba de ver. En Pentecostés, con el estruendo y las lenguas: «esto es lo dicho por el profeta Joel» (Hch 2:16). En el templo, con el cojo que salta: «¿por qué os maravilláis de esto?» (Hch 3:12). La obra visible del Espíritu abre la puerta a la palabra.',
        { h: 'Desde las Escrituras' },
        'Su público conocía las Escrituras, y Pedro las usa como prueba. Cita el Salmo 16, donde David dice que Dios no dejará que su Santo vea corrupción, y argumenta que David murió y su sepulcro estaba allí; por lo tanto, hablaba de la resurrección del Cristo (Hch 2:29-31). Cita el Salmo 110, «Dijo el Señor a mi Señor: Siéntate a mi diestra», para mostrar la exaltación de Jesús (Hch 2:34-35). Presenta a Jesús como el profeta semejante a Moisés (Hch 3:22) y como la simiente de Abraham en la que serán benditas todas las familias de la tierra (Hch 3:25).',
        { h: 'Con valentía y con gracia' },
        'Pedro no suaviza la responsabilidad de sus oyentes: «a este Jesús a quien vosotros crucificasteis» (Hch 2:36); «matasteis al Autor de la vida» (Hch 3:15). Pero tampoco los condena sin esperanza. Reconoce que actuaron por ignorancia (Hch 3:17) y les ofrece perdón. La convicción de pecado es el camino a la gracia.',
        'La respuesta fue abrumadora: en Pentecostés, tres mil personas; después del segundo sermón, el número de varones llegó a cinco mil.',
        { h: 'Ante el sanedrín' },
        'El tercer discurso es breve y valiente, ante los mismos jueces que condenaron a Jesús. Pedro, lleno del Espíritu Santo, les dijo que el cojo había sido sanado en el nombre de Jesús de Nazaret, a quien ellos crucificaron y Dios resucitó; que Jesús es la piedra que ellos desecharon, y que en ningún otro hay salvación (Hch 4:10-12). El pescador sin estudios dejó maravillados a los sabios del sanedrín.'
      ],
      pensar: 'Pedro comenzaba sus sermones con lo que la gente acababa de ver y oír de la obra de Dios (Hch 2:16; 3:12). ¿Qué obras de Dios en tu vida podrías usar como punto de partida para hablar de Cristo?'
    },
    {
      id: 'd-esteban', n: 'Esteban: una historia de rechazo', ref: 'Hechos 7:2-53', fecha: 33,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-esteban.webp', alt: 'Esteban mira hacia el cielo abierto, con el rostro iluminado', pie: 'Esteban ante el sanedrín (Hch 7).', origen: 'ia' }
      ],
      texto: [
        'El discurso de Esteban es el más largo del libro y el más distinto. No es un sermón evangelístico, sino una defensa que se convierte en acusación. Esteban había sido acusado de hablar contra el templo y contra la ley (Hch 6:13-14). Su respuesta es un recorrido por la historia de Israel con dos grandes temas.',
        { h: 'Dios no está limitado a un lugar' },
        'Esteban muestra que Dios se reveló una y otra vez fuera de la tierra santa y sin templo. Se apareció a Abraham en Mesopotamia (Hch 7:2). Estuvo con José en Egipto (Hch 7:9). Habló a Moisés en una zarza en el desierto de Sinaí, y le dijo que ese lugar era tierra santa (Hch 7:30-33). Israel tuvo en el desierto el tabernáculo del testimonio, hecho según el modelo que Dios mostró, y solo mucho después Salomón edificó el templo. Pero el Altísimo no habita en templos hechos de mano (Hch 7:48).',
        'Esteban no despreciaba el templo, pero recordaba que Dios es más grande que cualquier edificio. Esa verdad preparaba a la iglesia para lo que vendría: el evangelio saldría de Jerusalén, y Dios estaría presente con su pueblo en cualquier lugar de la tierra.',
        { h: 'Israel siempre rechazó a sus libertadores' },
        'El segundo tema es todavía más fuerte. Los hermanos de José lo vendieron por envidia, pero Dios lo hizo su salvador (Hch 7:9-14). Moisés quiso librar a su pueblo, «pero él pensaba que sus hermanos comprendían que Dios les daría libertad por mano suya; mas ellos no lo habían entendido así» (Hch 7:25). Lo rechazaron, y sin embargo Dios lo envió como libertador (Hch 7:35). Después, en el desierto, el pueblo se volvió a los ídolos.',
        'El patrón apuntaba a Jesús. Así como José y Moisés fueron rechazados por los suyos y luego exaltados como salvadores, Jesús fue rechazado y Dios lo exaltó. Esteban concluyó con una acusación directa: «Vosotros resistís siempre al Espíritu Santo; como vuestros padres, así también vosotros… habéis sido entregadores y matadores» del Justo (Hch 7:51-52).',
        'El discurso le costó la vida. Pero su visión final, los cielos abiertos y Jesús a la diestra de Dios, confirmó todo lo que había dicho: el rechazado era el exaltado.'
      ],
      pensar: 'Esteban mostró que el pueblo de Dios muchas veces rechazó a quienes Dios le enviaba (Hch 7:51-52). ¿De qué maneras podemos hoy resistir al Espíritu Santo sin darnos cuenta?'
    },
    {
      id: 'd-sinagoga', n: 'Pablo en la sinagoga', ref: 'Hechos 13:16-41; 17:2-3; 28:23', fecha: 46,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-griego/img/grecia-sinagoga.webp', alt: 'Una sinagoga del siglo I con hombres sentados en bancos de piedra escuchando la lectura de un rollo', pie: 'Pablo comenzaba en la sinagoga de cada ciudad (Hch 17:2).', origen: 'ia' }
      ],
      texto: [
        'El único sermón de Pablo en una sinagoga que Lucas registra completo es el de Antioquía de Pisidia, en el primer viaje (Hch 13:16-41). Es un modelo de cómo predicaba Pablo a judíos y a gentiles temerosos de Dios en todas las ciudades.',
        { h: 'El contexto' },
        'Era el día de reposo. Después de la lectura de la ley y de los profetas, los principales de la sinagoga invitaron a los visitantes a hablar si tenían alguna palabra de exhortación. Pablo se levantó y se dirigió a dos grupos: «Varones israelitas, y los que teméis a Dios» (Hch 13:16), es decir, a los judíos y a los gentiles que adoraban al Dios de Israel.',
        { h: 'De la historia de Israel a Jesús' },
        'Pablo comenzó, como Esteban, con la historia: Dios escogió a los padres, sacó al pueblo de Egipto, le dio la tierra, jueces y reyes, hasta David, un varón conforme a su corazón. «De la descendencia de éste, y conforme a la promesa, Dios levantó a Jesús por Salvador a Israel» (Hch 13:23). Juan el Bautista lo había anunciado.',
        'Luego vino el centro: los habitantes de Jerusalén y sus gobernantes, sin conocer a Jesús ni las palabras de los profetas que se leían cada día de reposo, las cumplieron al condenarlo. Pidieron a Pilato que lo matara. «Mas Dios le levantó de los muertos» (Hch 13:30), y fue visto por muchos testigos. Pablo citó el Salmo 2, Isaías 55 y el Salmo 16 para mostrar que la resurrección cumplía lo anunciado.',
        { h: 'La justificación por la fe' },
        'La conclusión es la primera exposición en Hechos de lo que Pablo desarrollaría en Gálatas y Romanos: por medio de Jesús se anuncia el perdón de pecados, y de todo aquello de que no podían ser justificados por la ley de Moisés, en él es justificado todo aquel que cree (Hch 13:38-39). La ley no puede justificar; Cristo sí.',
        'Pablo terminó con una advertencia del profeta Habacuc a los que menosprecian la obra de Dios (Hch 13:40-41).',
        { h: 'Siempre a la sinagoga primero' },
        'Pablo empezaba en la sinagoga porque el evangelio era «al judío primeramente» (Ro 1:16), y porque allí encontraba a personas que ya conocían las Escrituras y esperaban al Mesías. El último discurso del libro, en Roma, sigue el mismo patrón: Pablo persuade a los judíos acerca de Jesús, desde la ley de Moisés y los profetas (Hch 28:23).'
      ],
      pensar: 'Pablo anunció que en Cristo «es justificado todo aquel que cree», lo que la ley de Moisés no podía hacer (Hch 13:39). ¿Por qué es tan importante saber que somos aceptados por Dios por la fe y no por nuestro cumplimiento?'
    },
    {
      id: 'd-paganos', n: 'Pablo a los paganos: Listra y Atenas', ref: 'Hechos 14:15-17; 17:22-31', fecha: [47, 50],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-griego/img/grecia-pablo-areopago.webp', foco: '62% 50%', alt: 'El apóstol Pablo predica en el Areópago de Atenas ante filósofos griegos', pie: 'Pablo en el Areópago (Hch 17:22).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Atenas', tabla: {
          titulo: 'El discurso del Areópago',
          cab: ['Versículos', 'Lo que dice Pablo', 'Punto de contacto'],
          filas: [
            ['22-23', 'El Dios no conocido', 'Su propio altar'],
            ['24-25', 'El creador no habita en templos ni necesita nada', 'Los filósofos que criticaban la idolatría'],
            ['26-27', 'Hizo de una sangre todo el linaje humano', 'La búsqueda humana de Dios'],
            ['28-29', 'En él vivimos, nos movemos y somos', 'Sus propios poetas'],
            ['30-31', 'Arrepentíos: él juzgará por el varón que resucitó', 'Ninguno: es la verdad nueva']
          ]
        } }
      ],
      texto: [
        'Hechos registra dos discursos de Pablo a públicos paganos, que no conocían las Escrituras. Muestran cómo presentaba el evangelio cuando no podía partir de Moisés ni de los profetas.',
        { h: 'Listra: el Dios de la lluvia y las cosechas' },
        'En Listra, después de la sanidad del cojo, la multitud quiso ofrecer sacrificios a Pablo y Bernabé como a dioses. Pablo les habló sencillamente: eran hombres como ellos, y anunciaban que se convirtieran de esas vanidades «al Dios vivo, que hizo el cielo y la tierra, el mar, y todo lo que en ellos hay» (Hch 14:15). Dios había dejado a las naciones andar en sus caminos, pero nunca dejó de dar testimonio de sí mismo, haciendo bien, dando lluvias y tiempos fructíferos, llenando de alimento y alegría sus corazones (Hch 14:17).',
        { h: 'Atenas: el Dios no conocido' },
        'En Atenas, Pablo habló ante los filósofos del Areópago con un discurso más elaborado. Comenzó con un elogio respetuoso: los veía muy religiosos. Había encontrado un altar con la inscripción «AL DIOS NO CONOCIDO», y les dijo: «Al que vosotros adoráis, pues, sin conocerle, es a quien yo os anuncio» (Hch 17:23).',
        'Les presentó al Dios creador, que no habita en templos hechos por manos ni necesita nada, porque él da a todos vida y aliento. De una sangre hizo todo el linaje humano, para que buscaran a Dios, aunque no está lejos de cada uno. Citó a sus propios poetas: «en él vivimos, y nos movemos, y somos», y «linaje suyo somos» (Hch 17:28). Si somos su linaje, no podemos pensar que Dios es semejante a una imagen de oro, plata o piedra.',
        { h: 'Sin callar lo esencial' },
        'Pablo buscó puntos de contacto con su público, pero no se quedó en ellos. Llegó a lo que los filósofos no querían oír: Dios manda ahora a todos los hombres en todo lugar que se arrepientan, porque ha establecido un día para juzgar al mundo por medio de un varón, «dando fe a todos con haberle levantado de los muertos» (Hch 17:31). La resurrección provocó burla en unos y curiosidad en otros, pero algunos creyeron.',
        'Estos discursos enseñan a comenzar donde están las personas, en lo que ya conocen de Dios por la creación y la conciencia, para llevarlas a Cristo resucitado.'
      ],
      pensar: 'En Atenas, Pablo partió de algo que los atenienses ya tenían, su altar al Dios no conocido, para llevarlos a Cristo (Hch 17:23). ¿Qué puntos de contacto encuentras en tu entorno para hablar de Dios a quienes no conocen la Biblia?'
    },
    {
      id: 'd-mileto', n: 'Pablo a los ancianos de Éfeso', ref: 'Hechos 20:17-38', fecha: 57,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-mileto.webp', alt: 'En la playa de Mileto, Pablo ora de rodillas con los ancianos de Éfeso', pie: 'La despedida en Mileto (Hch 20:36-38).', origen: 'ia' }
      ],
      texto: [
        'El discurso de Mileto es el único de Hechos dirigido a líderes de la iglesia. Es el testamento pastoral de Pablo, y en él se escucha su corazón más que en ningún otro.',
        { h: 'Un ministerio que se puede examinar' },
        'Pablo comenzó apelando a lo que ellos mismos habían visto: «Vosotros sabéis cómo me he comportado entre vosotros todo el tiempo» (Hch 20:18). Había servido al Señor con humildad, con lágrimas y en medio de pruebas. No había rehuido anunciar nada útil, enseñando en público y por las casas, a judíos y a gentiles, el arrepentimiento para con Dios y la fe en nuestro Señor Jesucristo (Hch 20:19-21). Había anunciado «todo el consejo de Dios» (Hch 20:27), sin callar las partes difíciles. Y no había codiciado ni plata ni oro: había trabajado con sus manos para su sustento y el de sus compañeros (Hch 20:33-34).',
        { h: 'Ligado en espíritu' },
        'Pablo les contó que iba a Jerusalén ligado en espíritu, sabiendo por el Espíritu Santo que le esperaban prisiones y tribulaciones. Pero su vida no le era preciosa, con tal de acabar su carrera con gozo y el ministerio de dar testimonio del evangelio de la gracia de Dios (Hch 20:22-24).',
        { h: 'El encargo' },
        'El centro del discurso es una orden: «mirad por vosotros, y por todo el rebaño en que el Espíritu Santo os ha puesto por obispos, para apacentar la iglesia del Señor, la cual él ganó por su propia sangre» (Hch 20:28). El líder debe cuidarse primero a sí mismo. Su autoridad viene del Espíritu, no de sí mismo. Su tarea es apacentar, alimentar y cuidar. Y la iglesia que cuida no le pertenece: es de Dios, que la compró con la sangre de Cristo.',
        'Pablo les advirtió de dos peligros: lobos rapaces que vendrían de afuera, y hombres de entre ellos mismos que hablarían cosas perversas para arrastrar discípulos tras sí. Por eso debían velar, recordando que durante tres años él no había cesado de amonestar con lágrimas a cada uno. Los encomendó a Dios y a la palabra de su gracia, que tiene poder para sobreedificarlos (Hch 20:29-32).',
        { h: 'Más bienaventurado es dar' },
        'Pablo cerró con una palabra del Señor Jesús que solo conocemos por este discurso: «Más bienaventurado es dar que recibir» (Hch 20:35). Después oró de rodillas con todos ellos, y hubo gran llanto.'
      ],
      pensar: 'Pablo pidió a los líderes que cuidaran primero de sí mismos y luego del rebaño (Hch 20:28). ¿Por qué el cuidado de la propia vida espiritual es la primera responsabilidad de quien sirve a otros?'
    },
    {
      id: 'd-defensas', n: 'Las defensas de Pablo', ref: 'Hechos 22:1-21; 24:10-21; 26:2-29', fecha: [57, 59],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-agripa.webp', alt: 'Pablo, encadenado, habla ante el rey Agripa y Berenice en una sala de audiencias', pie: 'Pablo ante Agripa (Hch 26).', origen: 'ia' }
      ],
      texto: [
        'Los últimos discursos de Hechos son defensas judiciales: ante el pueblo de Jerusalén (Hch 22), ante el sanedrín (Hch 23), ante el gobernador Félix (Hch 24) y ante el rey Agripa (Hch 26). Jesús había anunciado a sus discípulos: «seréis llevados ante reyes y ante gobernadores por causa de mi nombre. Y esto os será ocasión para dar testimonio» (Lc 21:12-13). Eso fue lo que hizo Pablo.',
        { h: 'Un testimonio personal' },
        'En dos de estas defensas, Pablo no argumenta: cuenta su conversión. Ante el pueblo y ante Agripa relata quién era, cómo perseguía a la iglesia, cómo Jesús se le apareció y qué le encargó. Un testimonio personal es difícil de refutar: no es una teoría, sino lo que a uno le pasó. Y en ambos casos, Pablo lo conecta con las Escrituras: no está diciendo nada fuera de lo que los profetas y Moisés anunciaron (Hch 26:22).',
        { h: 'La resurrección en el centro' },
        'En todas sus defensas, Pablo vuelve a la misma cuestión: la resurrección de los muertos. Ante el sanedrín dice: «acerca de la esperanza y de la resurrección de los muertos se me juzga» (Hch 23:6). Ante Félix confiesa su esperanza de resurrección de justos e injustos (Hch 24:15). Ante Agripa pregunta: «¿Se juzga entre vosotros cosa increíble que Dios resucite a los muertos?» (Hch 26:8). Para Pablo, Jesús resucitado era el cumplimiento de la esperanza de Israel.',
        { h: 'Sin perder el corazón evangelista' },
        'Lo más notable de estas defensas es que Pablo nunca deja de ser evangelista. Ante Félix, en vez de defenderse, le habla de justicia, dominio propio y juicio venidero, y el gobernador se espanta (Hch 24:25). Ante Agripa, después de su defensa, le pregunta directamente si cree a los profetas, y cuando el rey responde que por poco lo persuade a ser cristiano, Pablo le contesta que quisiera que todos los presentes fueran como él, «excepto estas cadenas» (Hch 26:29).',
        'Pablo, el prisionero, terminó predicando a quienes tenían poder para juzgarlo. Los juicios no detuvieron el evangelio: lo llevaron ante gobernadores y reyes, como Jesús había anunciado que haría con Saulo (Hch 9:15).'
      ],
      pensar: 'Ante gobernadores y reyes, Pablo usó su propio testimonio para presentar a Cristo (Hch 22; 26). ¿Cómo contarías tu testimonio de manera breve y clara si alguien te preguntara por qué crees?'
    }
  ];

  /* ---------------- Ruta IX · Señales y milagros ---------------- */
  const senales = [
    {
      id: 's-catalogo', n: 'Las señales de Hechos', ref: 'Hechos 2:43; 5:12; 14:3; 19:11-12', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Catálogo', tabla: {
          titulo: 'Señales y milagros narrados en Hechos',
          cab: ['Tipo', 'Pasajes'],
          filas: [
            ['Sanidades', 'Cojo del templo (3:1-10); enfermos por la sombra de Pedro (5:15-16); Eneas (9:32-35); cojo de Listra (14:8-10); padre de Publio y enfermos de Malta (28:8-9)'],
            ['Liberaciones', 'Espíritus inmundos en Samaria (8:7); la muchacha adivina (16:16-18); Éfeso (19:12)'],
            ['Resurrecciones', 'Dorcas (9:36-42); Eutico (20:9-12)'],
            ['Juicios', 'Ananías y Safira (5:1-11); Elimas (13:8-12); Herodes (12:20-23)'],
            ['Liberaciones de cárcel', 'Los apóstoles (5:19); Pedro (12:6-11); Pablo y Silas (16:25-26)'],
            ['Visiones y ángeles', 'Esteban (7:55); Saulo (9:3-6); Cornelio y Pedro (10); Macedonia (16:9); Corinto (18:9); Jerusalén (23:11); la tormenta (27:23)'],
            ['Protección', 'Pablo apedreado se levanta (14:19-20); la víbora (28:3-6)'],
            ['Resúmenes', '«Muchas señales y prodigios» (2:43; 5:12; 6:8; 8:6; 14:3; 15:12; 19:11)']
          ]
        } }
      ],
      texto: [
        'Hechos está lleno de lo sobrenatural. Lucas narra sanidades, liberaciones de espíritus malos, resurrecciones de muertos, juicios divinos, ángeles que abren cárceles, visiones y terremotos. Además, una y otra vez resume la actividad de los apóstoles diciendo que se hacían «muchas señales y prodigios» (Hch 2:43; 5:12).',
        { h: 'Tres palabras' },
        'Hechos usa tres palabras para describir estos hechos, las mismas que Pedro usa para el ministerio de Jesús: «maravillas, prodigios y señales» (Hch 2:22). Maravillas, en griego dýnamis, son obras de poder. Prodigios son hechos que causan asombro. Señales son hechos que apuntan a algo más allá de sí mismos: muestran quién es Dios y confirman su palabra.',
        { h: 'La continuación del ministerio de Jesús' },
        'Las señales de Hechos son, en su mayoría, las mismas que hizo Jesús: el cojo que salta, los paralíticos que se levantan, los espíritus que salen, los muertos que resucitan. Pedro dice a Eneas: «Jesucristo te sana» (Hch 9:34). El que obra los milagros es el mismo Jesús, ahora exaltado, por medio de su iglesia. Es lo que había prometido: «el que en mí cree, las obras que yo hago, él las hará también; y aun mayores hará, porque yo voy al Padre» (Jn 14:12).',
        { h: 'No solo los apóstoles' },
        'Aunque muchas señales se hacen por mano de los apóstoles, no son exclusivas de ellos. Esteban, uno de los siete, hacía «grandes prodigios y señales» (Hch 6:8). Felipe hacía señales en Samaria (Hch 8:6). Ananías, un discípulo sin cargo, oró por Saulo y este recobró la vista (Hch 9:17-18). Los creyentes de Jerusalén oraban pidiendo que Dios extendiera su mano para sanidades, señales y prodigios (Hch 4:30).',
        'Las estaciones siguientes estudian las sanidades, las liberaciones, los juicios, las intervenciones de Dios en favor de sus siervos y el propósito de las señales.'
      ],
      pensar: 'La iglesia de Jerusalén pidió a Dios que extendiera su mano «para que se hagan sanidades y señales y prodigios» (Hch 4:30). ¿Se atreve tu congregación a orar así? ¿Qué te impide hacerlo?'
    },
    {
      id: 's-sanidades', n: 'Sanidades', ref: 'Hechos 3:1-16; 5:15-16; 9:32-35; 14:8-10; 28:8-9', fecha: [30, 60],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-cojo-hermosa.webp', alt: 'Pedro toma de la mano a un hombre cojo y lo levanta junto a una puerta del templo', pie: '«En el nombre de Jesucristo de Nazaret, levántate y anda» (Hch 3:6).', origen: 'ia' }
      ],
      texto: [
        'Las sanidades son las señales más frecuentes de Hechos. Ocurren en Jerusalén, Lida, Listra, Éfeso y Malta; por medio de Pedro, de Pablo, de Felipe y de Ananías; a judíos y a paganos.',
        { h: 'En el nombre de Jesús' },
        'El rasgo común es el nombre de Jesús. Pedro le dice al cojo: «en el nombre de Jesucristo de Nazaret, levántate y anda» (Hch 3:6), y luego explica: «por la fe en su nombre, a éste… le ha confirmado su nombre» (Hch 3:16). A Eneas le dice: «Jesucristo te sana» (Hch 9:34). Los apóstoles nunca se atribuyen el poder: el que sana es Jesús.',
        { h: 'Diversas maneras' },
        'Las sanidades ocurren de maneras distintas. Unas veces por una palabra de autoridad, como con el cojo del templo o el de Listra. Otras, con imposición de manos y oración, como con el padre de Publio en Malta (Hch 28:8). Algunas son extraordinarias: la gente buscaba que la sombra de Pedro cayera sobre los enfermos (Hch 5:15), y en Éfeso los paños que habían tocado a Pablo eran llevados a los enfermos (Hch 19:12). Lucas no las presenta como métodos para imitar, sino como muestras de que Dios obraba de manera extraordinaria.',
        { h: 'Fe para ser sanado' },
        'En Listra, Pablo vio que el cojo «tenía fe para ser sanado» (Hch 14:9). La fe aparece del lado del que ora y, a veces, del que recibe. Pero no siempre se menciona la fe del enfermo: el cojo del templo solo esperaba una limosna. Dios sana por su gracia, no como premio a una fe perfecta.',
        { h: 'La sanidad en la obra de Cristo' },
        'La iglesia pentecostal enseña que la sanidad divina es parte de lo que Cristo obtuvo en la cruz. Isaías anunció que el Siervo llevaría nuestras enfermedades y sufriría nuestros dolores, y que por su llaga seríamos curados (Is 53:4-5). Mateo aplica esa profecía a las sanidades que hacía Jesús (Mt 8:16-17). Santiago manda a los enfermos llamar a los ancianos de la iglesia para que oren por ellos, ungiéndolos con aceite en el nombre del Señor (Stg 5:14-15).',
        'Esto no significa que todo creyente será sanado siempre en esta vida. Pablo dejó a Trófimo enfermo en Mileto (2 Ti 4:20), y recomendó a Timoteo cuidar su estómago (1 Ti 5:23). Pero la iglesia ora con fe por los enfermos, sabiendo que el Señor sigue sanando, y que la sanidad completa llegará con la resurrección del cuerpo.'
      ],
      pensar: 'Pedro declaró que el cojo fue sanado «por la fe en su nombre», el nombre de Jesús (Hch 3:16). ¿Por quién podrías orar esta semana por sanidad, confiando en el nombre de Jesús?'
    },
    {
      id: 's-liberaciones', n: 'Liberaciones y el poder de las tinieblas', ref: 'Hechos 5:16; 8:7; 13:6-12; 16:16-18; 19:11-20; 26:18', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Confrontaciones', tabla: {
          titulo: 'El evangelio frente al poder de las tinieblas',
          cab: ['Lugar', 'Confrontación', 'Resultado'],
          filas: [
            ['Samaria', 'Felipe y los espíritus inmundos; Simón el mago', 'Gran gozo en la ciudad; Simón reprendido (Hch 8)'],
            ['Chipre', 'Pablo y Elimas el mago', 'El mago ciego; el procónsul cree (Hch 13)'],
            ['Filipos', 'Pablo y el espíritu de adivinación', 'La muchacha liberada; Pablo y Silas encarcelados (Hch 16)'],
            ['Éfeso', 'Espíritus malos; los hijos de Esceva; la magia', 'Libros de magia quemados; la palabra prevalece (Hch 19)']
          ]
        } }
      ],
      texto: [
        'Jesús envió a Pablo a los gentiles «para que se conviertan de las tinieblas a la luz, y de la potestad de Satanás a Dios» (Hch 26:18). En Hechos, el avance del evangelio es también una confrontación con el poder de las tinieblas.',
        { h: 'Espíritus inmundos que salen' },
        'Como en el ministerio de Jesús, en Hechos hay personas atormentadas por espíritus inmundos que son liberadas. En Jerusalén, traían a los apóstoles enfermos y atormentados, «y todos eran sanados» (Hch 5:16). En Samaria, de muchos que tenían espíritus inmundos, salían estos dando grandes voces (Hch 8:7). En Éfeso, los espíritus malos salían de los enfermos (Hch 19:12).',
        { h: 'La muchacha de Filipos' },
        'El caso más detallado es el de la muchacha esclava de Filipos, que tenía espíritu de adivinación. Durante muchos días siguió a Pablo gritando: «Estos hombres son siervos del Dios Altísimo, quienes os anuncian el camino de salvación» (Hch 16:17). Lo que decía era cierto, pero la fuente era un espíritu malo, y Pablo no quiso ese testimonio. Le dijo al espíritu: «Te mando en el nombre de Jesucristo, que salgas de ella» (Hch 16:18), y salió en aquella misma hora. La liberación tuvo un costo: los amos de la muchacha, que perdieron su ganancia, hicieron azotar y encarcelar a Pablo y a Silas.',
        { h: 'La magia derrotada' },
        'Hechos muestra tres enfrentamientos con la magia. Simón, en Samaria, había engañado a la gente por mucho tiempo, pero quedó asombrado ante las señales de Felipe (Hch 8:9-13). Elimas, en Chipre, quiso apartar de la fe al procónsul, y Pablo, lleno del Espíritu Santo, lo dejó ciego por un tiempo (Hch 13:8-11). En Éfeso, el centro de la magia del mundo antiguo, los que la practicaban quemaron sus libros, por valor de cincuenta mil piezas de plata (Hch 19:19).',
        { h: 'El nombre de Jesús no es una fórmula' },
        'El relato de los hijos de Esceva enseña una lección seria. Unos exorcistas judíos intentaron usar el nombre de Jesús como una palabra mágica. El espíritu malo les respondió: «A Jesús conozco, y sé quién es Pablo; pero vosotros, ¿quiénes sois?» (Hch 19:15), y los dominó. La autoridad sobre los demonios no está en repetir un nombre, sino en pertenecer al dueño de ese nombre. El resultado fue que el nombre del Señor Jesús fue magnificado, y la palabra crecía y prevalecía poderosamente (Hch 19:17-20).'
      ],
      pensar: 'Los hijos de Esceva usaron el nombre de Jesús sin conocerlo, y fueron vencidos (Hch 19:13-16). ¿Qué diferencia hay entre usar el nombre de Jesús como fórmula y orar en su nombre como alguien que le pertenece?'
    },
    {
      id: 's-vida-juicio', n: 'Resurrecciones y juicios', ref: 'Hechos 5:1-11; 9:36-42; 12:20-23; 13:8-12; 20:7-12', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Vida y juicio', tabla: {
          titulo: 'El poder de Dios para dar vida y para juzgar',
          cab: ['Hecho', 'Pasaje', 'Efecto'],
          filas: [
            ['Dorcas resucita', 'Hch 9:36-42', 'Muchos creyeron en el Señor'],
            ['Eutico resucita', 'Hch 20:9-12', 'Fueron grandemente consolados'],
            ['Ananías y Safira mueren', 'Hch 5:1-11', 'Gran temor sobre toda la iglesia'],
            ['Elimas queda ciego', 'Hch 13:8-12', 'El procónsul creyó'],
            ['Herodes muere', 'Hch 12:20-24', 'La palabra crecía y se multiplicaba']
          ]
        } }
      ],
      texto: [
        'Hechos muestra que el poder de Dios da vida, pero también juzga. Ambos aspectos aparecen en el libro.',
        { h: 'Dorcas y Eutico' },
        'Dorcas, también llamada Tabita, era una discípula de Jope que «abundaba en buenas obras y en limosnas» (Hch 9:36). Cuando murió, las viudas lloraban mostrando las túnicas y vestidos que ella hacía. Pedro hizo salir a todos, se puso de rodillas, oró, y dijo: «Tabita, levántate» (Hch 9:40). Ella abrió los ojos y se incorporó. La escena recuerda a Jesús en casa de Jairo. El milagro fue notorio en toda Jope, y muchos creyeron en el Señor.',
        'Eutico era un joven de Troas que, mientras Pablo predicaba hasta la medianoche, se durmió y cayó desde un tercer piso. Lo levantaron muerto. Pablo descendió, se echó sobre él, lo abrazó y dijo: «No os alarméis, pues está vivo» (Hch 20:10). La reunión siguió hasta el alba.',
        'Estas resurrecciones son anticipos de la resurrección final. No eran permanentes: Dorcas y Eutico volverían a morir. Pero mostraban que Jesús, el Autor de la vida, tiene poder sobre la muerte.',
        { h: 'Los juicios' },
        'Hechos registra también juicios de Dios. Ananías y Safira murieron por mentir al Espíritu Santo, y vino gran temor sobre toda la iglesia (Hch 5:11). Elimas, que se oponía al evangelio, quedó ciego por un tiempo: un juicio que dejaba lugar al arrepentimiento, como la ceguera temporal de Saulo (Hch 13:11). Herodes Agripa I, que persiguió a la iglesia y aceptó que lo aclamaran como dios, murió herido por un ángel del Señor (Hch 12:23).',
        { h: 'La santidad de Dios' },
        'Los juicios de Hechos son pocos y excepcionales, pero recuerdan que el Dios que sana y resucita es también santo. El mismo Espíritu que llena a la iglesia de poder no tolera la hipocresía en ella. El temor de Dios, es decir, el respeto profundo ante su santidad, era una marca de la iglesia primitiva: «sobrevino temor a toda persona; y muchas maravillas y señales eran hechas por los apóstoles» (Hch 2:43). Las señales y el temor de Dios van juntos.'
      ],
      pensar: 'En Hechos, el poder de Dios que sanaba y resucitaba iba unido al temor de Dios en la iglesia (Hch 2:43; 5:11). ¿Por qué es peligroso buscar el poder de Dios sin respetar su santidad?'
    },
    {
      id: 's-intervenciones', n: 'Ángeles, visiones y protección', ref: 'Hechos 5:17-20; 10:1-23; 12:6-11; 16:9, 25-26; 18:9-10; 23:11; 27:23-25; 28:3-6', fecha: [30, 60],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pedro-carcel.webp', alt: 'Un ángel resplandeciente despierta a Pedro en la cárcel', pie: 'Un ángel libera a Pedro (Hch 12:7).', origen: 'ia' }
      ],
      texto: [
        'Además de las señales que acompañan la predicación, Hechos narra muchas intervenciones directas de Dios para guiar y proteger a sus siervos.',
        { h: 'Ángeles' },
        'Los ángeles aparecen en momentos clave. Anuncian el regreso de Cristo en la ascensión (Hch 1:10-11). Abren la cárcel a los apóstoles (Hch 5:19) y a Pedro (Hch 12:7-10). Envían a Felipe al camino de Gaza (Hch 8:26). Visitan a Cornelio (Hch 10:3). Hieren a Herodes (Hch 12:23). Y en medio de la tormenta, un ángel asegura a Pablo que nadie morirá (Hch 27:23-24). Son, como dice Hebreos, «espíritus ministradores, enviados para servicio a favor de los que serán herederos de la salvación» (He 1:14).',
        { h: 'Visiones' },
        'Dios guía a la iglesia también por medio de visiones. Ananías recibe en visión la orden de ir a orar por Saulo (Hch 9:10). Pedro ve el lienzo con los animales y entiende que no debe llamar inmundo a ningún hombre (Hch 10:9-16). Pablo ve al varón macedonio que le ruega que pase a ayudarles (Hch 16:9). En Corinto, el Señor le dice en visión que no tema (Hch 18:9-10). En Jerusalén, el Señor se le presenta y le promete que testificará en Roma (Hch 23:11).',
        'Las visiones de Hechos tienen siempre un propósito práctico: llevar el evangelio a alguien, abrir una puerta nueva o animar a un siervo en peligro. Y siempre concuerdan con la palabra de Dios.',
        { h: 'Protección' },
        'Dios protegió a sus siervos de muchas maneras: con un terremoto que abrió las puertas de la cárcel de Filipos mientras Pablo y Silas cantaban (Hch 16:25-26); con un joven que descubrió la conspiración contra Pablo (Hch 23:16); con un centurión que impidió que los soldados mataran a los presos en el naufragio (Hch 27:42-43); y en Malta, cuando la víbora no hizo daño a Pablo (Hch 28:3-6).',
        { h: 'Pero no siempre' },
        'Hechos también es honesto: Dios no siempre libró a sus siervos de la muerte. Esteban fue apedreado y Jacobo murió a espada, mientras Pedro fue liberado. Dios es soberano. Unas veces libra de la prueba, y otras da fuerza para atravesarla. En ambos casos, el evangelio sigue avanzando.'
      ],
      pensar: 'Dios liberó a Pedro de la cárcel, pero permitió que Jacobo muriera (Hch 12:1-11). ¿Cómo puedes confiar en la bondad de Dios cuando no te libra de una prueba como esperabas?'
    },
    {
      id: 's-proposito', n: 'Para qué son las señales', ref: 'Hechos 4:29-31; 8:6-8; 9:35, 42; 13:12; 14:3; Marcos 16:15-20; Hebreos 2:3-4', fecha: [30, 62],
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, se detuvieron allí mucho tiempo, hablando con denuedo, confiados en el Señor, el cual daba testimonio a la palabra de su gracia, concediendo que se hiciesen por las manos de ellos señales y prodigios.', ref: 'Hechos 14:3' }
      ],
      texto: [
        '¿Por qué hacía Dios señales y prodigios? Hechos responde con claridad.',
        { h: 'Para confirmar la palabra' },
        'En Iconio, el Señor «daba testimonio a la palabra de su gracia, concediendo que se hiciesen por las manos de ellos señales y prodigios» (Hch 14:3). Las señales no reemplazaban la predicación ni eran el centro del mensaje: lo confirmaban. Es lo mismo que dice Marcos al final de su Evangelio: los discípulos predicaron en todas partes, «ayudándoles el Señor y confirmando la palabra con las señales que la seguían» (Mr 16:20).',
        { h: 'Para abrir corazones' },
        'En Hechos, las señales producen atención y fe. En Samaria, la gente escuchaba atentamente a Felipe, «oyendo y viendo las señales que hacía» (Hch 8:6). Después de la sanidad de Eneas, todos los de Lida y Sarón se convirtieron al Señor (Hch 9:35); después de la resurrección de Dorcas, muchos creyeron (Hch 9:42); al ver el juicio sobre Elimas, el procónsul creyó (Hch 13:12). Las señales no obligan a creer, pero abren la puerta.',
        { h: 'Para mostrar la compasión de Dios' },
        'Las señales también son actos de misericordia. El cojo de la puerta Hermosa pudo entrar al templo saltando y alabando a Dios después de cuarenta años. Los enfermos de Malta fueron sanados sin que se mencione una predicación previa. Dios sana porque ama.',
        { h: 'Para hoy' },
        'La iglesia de Jerusalén oró: «concede a tus siervos que con todo denuedo hablen tu palabra, mientras extiendes tu mano para que se hagan sanidades y señales y prodigios mediante el nombre de tu santo Hijo Jesús» (Hch 4:29-30). Es una oración que la iglesia puede seguir haciendo. Nada en el Nuevo Testamento indica que Dios haya dejado de confirmar su palabra con señales. Jesús dijo que las señales seguirían «a los que creen» (Mr 16:17), no solo a los apóstoles.',
        'Pero el orden de esa oración es importante. Primero pidieron denuedo para hablar la palabra, y luego que Dios extendiera su mano. Las señales acompañan al evangelio predicado; no lo reemplazan. Una iglesia que busca señales sin predicar a Cristo se desvía; una iglesia que predica a Cristo puede esperar que el Señor confirme su palabra.'
      ],
      pensar: 'La iglesia de Jerusalén pidió primero denuedo para hablar la palabra, y luego que Dios hiciera señales (Hch 4:29-30). ¿Por qué crees que ese orden es importante?'
    }
  ];

  /* ---------------- Ruta X · La iglesia primitiva ---------------- */
  const iglesia = [
    {
      id: 'i-retrato', n: 'Un retrato de la primera iglesia', ref: 'Hechos 2:41-47', fecha: 30,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.', ref: 'Hechos 2:42' },
        { tipo: 'tabla', titulo: 'El retrato', tabla: {
          titulo: 'La vida de la primera iglesia (Hch 2:42-47)',
          cab: ['Rasgo', 'Versículo'],
          filas: [
            ['Enseñanza de los apóstoles', '42'],
            ['Comunión', '42'],
            ['Partimiento del pan', '42, 46'],
            ['Oración', '42'],
            ['Temor de Dios, maravillas y señales', '43'],
            ['Generosidad con los necesitados', '44-45'],
            ['Reuniones en el templo y en las casas', '46'],
            ['Alegría, sencillez y alabanza', '46-47'],
            ['Favor con el pueblo y crecimiento diario', '47']
          ]
        } }
      ],
      texto: [
        'Al final del capítulo 2, Lucas detiene el relato para pintar un retrato de la iglesia recién nacida. Son seis versículos que describen cómo vivían los tres mil que se convirtieron en Pentecostés, y han servido de modelo a la iglesia de todos los tiempos.',
        { h: 'Cuatro cosas en que perseveraban' },
        '«Perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones» (Hch 2:42). La palabra perseverar indica constancia, dedicación continua.',
        'La doctrina de los apóstoles era la enseñanza de los testigos de Jesús, lo que hoy tenemos en el Nuevo Testamento. Una iglesia llena del Espíritu no desprecia la enseñanza: la busca. La comunión, en griego koinonía, es la vida compartida: tener algo en común, participar juntos. El partimiento del pan incluía la cena del Señor, celebrada en el contexto de comidas compartidas en las casas. Y las oraciones, en plural, eran tanto los momentos de oración en el templo como la oración de la iglesia reunida.',
        { h: 'Lo que se veía desde afuera' },
        'Esa vida tenía efectos visibles. Había temor de Dios y muchas señales. Había una generosidad sorprendente: vendían sus propiedades y sus bienes y lo repartían según la necesidad de cada uno. Se reunían cada día en el templo y partían el pan en las casas, comiendo juntos «con alegría y sencillez de corazón» (Hch 2:46). Alababan a Dios y tenían favor con todo el pueblo.',
        { h: 'Y Dios añadía' },
        'El retrato termina con el resultado: «Y el Señor añadía cada día a la iglesia los que habían de ser salvos» (Hch 2:47). El crecimiento no fue producto de una estrategia, sino de la obra del Señor en una comunidad que vivía de esta manera. La iglesia no se dedicaba a crecer; se dedicaba a Dios y a los hermanos, y el Señor la hacía crecer.',
        'Este retrato no describe una iglesia perfecta: los capítulos siguientes mostrarán sus problemas. Pero muestra lo que el Espíritu Santo produce cuando una comunidad se entrega a Dios.'
      ],
      pensar: 'La primera iglesia perseveraba en cuatro cosas: la doctrina, la comunión, el partimiento del pan y la oración (Hch 2:42). ¿En cuál de ellas necesitas crecer en tu vida y en tu congregación?'
    },
    {
      id: 'i-generosidad', n: 'Comunión y generosidad', ref: 'Hechos 2:44-45; 4:32-37; 5:1-11; 6:1-6; 11:27-30; 20:35; 24:17', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Generosidad', tabla: {
          titulo: 'La generosidad en Hechos',
          cab: ['Ejemplo', 'Pasaje'],
          filas: [
            ['Repartían según la necesidad de cada uno', 'Hch 2:45'],
            ['No había entre ellos ningún necesitado', 'Hch 4:34'],
            ['Bernabé vende una heredad', 'Hch 4:36-37'],
            ['La distribución diaria a las viudas', 'Hch 6:1'],
            ['Dorcas hacía ropa para las viudas', 'Hch 9:36, 39'],
            ['Antioquía envía ayuda a Judea', 'Hch 11:29-30'],
            ['La ofrenda de las iglesias gentiles', 'Hch 24:17; Ro 15:25-26'],
            ['«Más bienaventurado es dar que recibir»', 'Hch 20:35']
          ]
        } }
      ],
      texto: [
        'Uno de los rasgos más llamativos de la iglesia de Jerusalén es su generosidad. «La multitud de los que habían creído era de un corazón y un alma; y ninguno decía ser suyo propio nada de lo que poseía, sino que tenían todas las cosas en común» (Hch 4:32).',
        { h: 'Voluntaria, no obligatoria' },
        'Algunos han visto en estos pasajes un modelo económico obligatorio, pero el texto muestra otra cosa. La generosidad era voluntaria. Pedro le dijo a Ananías que su propiedad era suya antes de venderla, y que el dinero estaba en su poder después de venderla (Hch 5:4). Nadie estaba obligado a vender. Además, los creyentes seguían teniendo casas: se reunían en ellas, como la casa de María, la madre de Juan Marcos (Hch 12:12).',
        'Lo que cambió fue la actitud hacia los bienes. Ninguno decía que lo que tenía era solo suyo. Cuando un hermano tenía una necesidad, los demás respondían, incluso vendiendo propiedades. El resultado fue que «no había entre ellos ningún necesitado» (Hch 4:34), que es lo que la ley de Moisés había querido para Israel (Dt 15:4).',
        { h: 'Organizada y extendida' },
        'La generosidad no era desordenada. Los bienes se ponían a los pies de los apóstoles, y cuando la distribución a las viudas tuvo problemas, la iglesia nombró a siete hombres llenos del Espíritu para administrarla (Hch 6:1-6). Y no se quedó en Jerusalén: cuando Agabo anunció un hambre, la iglesia de Antioquía envió ayuda «cada uno conforme a lo que tenía» (Hch 11:29). Años después, Pablo llevó a Jerusalén una ofrenda de las iglesias de Macedonia y Acaya para los santos pobres (Hch 24:17; Ro 15:25-26). La generosidad unía a judíos y gentiles.',
        { h: 'Con un corazón sincero' },
        'El relato de Ananías y Safira muestra que a Dios no le importa solo la cantidad que se da, sino la sinceridad con que se da. Quisieron recibir la honra de Bernabé sin pagar su precio, y mintieron al Espíritu Santo.',
        'Pablo recordó a los ancianos de Éfeso las palabras de Jesús: «Más bienaventurado es dar que recibir» (Hch 20:35). La iglesia llena del Espíritu es una iglesia generosa.'
      ],
      pensar: 'En la primera iglesia nadie decía que lo que tenía era solo suyo, y por eso no había necesitados entre ellos (Hch 4:32-34). ¿Cómo puedes practicar esa misma actitud hacia los hermanos de tu congregación?'
    },
    {
      id: 'i-oracion', n: 'Una iglesia que ora', ref: 'Hechos 1:14; 4:23-31; 6:4; 10:9; 12:5, 12; 13:2-3; 14:23; 16:25; 20:36', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'La oración', tabla: {
          titulo: 'La oración en los momentos clave',
          cab: ['Momento', 'Pasaje'],
          filas: [
            ['Antes de Pentecostés', 'Hch 1:14'],
            ['Antes de elegir a Matías', 'Hch 1:24'],
            ['Ante la persecución', 'Hch 4:24-31'],
            ['Al nombrar a los siete', 'Hch 6:6'],
            ['Antes de la visión de Pedro', 'Hch 10:9'],
            ['Por Pedro encarcelado', 'Hch 12:5, 12'],
            ['Al enviar misioneros', 'Hch 13:2-3'],
            ['Al nombrar ancianos', 'Hch 14:23'],
            ['En la cárcel de Filipos', 'Hch 16:25'],
            ['Al despedirse', 'Hch 20:36; 21:5']
          ]
        } }
      ],
      texto: [
        'Si hay un hábito que caracteriza a la iglesia de Hechos, es la oración. La palabra aparece en todos los momentos importantes del libro.',
        { h: 'Antes de cada avance' },
        'La iglesia nació en oración: los ciento veinte perseveraban unánimes en oración y ruego antes de Pentecostés (Hch 1:14). La primera decisión, el reemplazo de Judas, se tomó orando (Hch 1:24). Los primeros servidores fueron presentados a los apóstoles, «quienes, orando, les impusieron las manos» (Hch 6:6). La puerta a los gentiles se abrió mientras Pedro oraba en la azotea y Cornelio oraba en su casa (Hch 10:2, 9). La misión a las naciones comenzó mientras la iglesia de Antioquía ministraba al Señor y ayunaba (Hch 13:2-3).',
        { h: 'En medio de la persecución' },
        'Ante las amenazas del sanedrín, la iglesia alzó «unánimes la voz a Dios» (Hch 4:24). Su oración es un modelo: comienza reconociendo la soberanía de Dios, el creador; usa las Escrituras (el Salmo 2); y pide denuedo para hablar y que Dios extienda su mano con señales. La respuesta fue inmediata: el lugar tembló y todos fueron llenos del Espíritu Santo.',
        'Cuando Herodes encarceló a Pedro, «la iglesia hacía sin cesar oración a Dios por él» (Hch 12:5), y Dios envió un ángel. En la cárcel de Filipos, Pablo y Silas oraban y cantaban a medianoche, y Dios envió un terremoto.',
        { h: 'Con ayuno' },
        'La oración en Hechos va unida a veces al ayuno, sobre todo cuando se buscan decisiones importantes. La iglesia de Antioquía ayunaba cuando el Espíritu habló, y volvió a ayunar y orar antes de enviar a Bernabé y a Saulo (Hch 13:2-3). Pablo y Bernabé nombraron ancianos en cada iglesia «habiendo orado con ayunos» (Hch 14:23).',
        { h: 'Prioridad de los líderes' },
        'Cuando los apóstoles delegaron la distribución de alimentos, lo hicieron para dedicarse a dos cosas: «nosotros persistiremos en la oración y en el ministerio de la palabra» (Hch 6:4). Para los líderes de la primera iglesia, la oración no era un complemento del ministerio, sino su primera tarea.'
      ],
      pensar: 'Los apóstoles delegaron otras tareas para persistir «en la oración y en el ministerio de la palabra» (Hch 6:4). ¿Qué lugar ocupa la oración en tu servicio a Dios, y qué podrías dejar para darle más espacio?'
    },
    {
      id: 'i-organizacion', n: 'Organización y ministerios', ref: 'Hechos 1:15-26; 6:1-7; 11:30; 13:1; 14:23; 15:2-6, 22; 20:17, 28; 21:8-10', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Ministerios', tabla: {
          titulo: 'Ministerios y funciones en la iglesia de Hechos',
          cab: ['Ministerio', 'Función', 'Ejemplos'],
          filas: [
            ['Apóstoles', 'Testigos de la resurrección, fundamento de la iglesia', 'Los doce; Pablo y Bernabé (Hch 14:14)'],
            ['Ancianos u obispos', 'Pastorear y cuidar cada iglesia', 'Jerusalén (Hch 15:6); Éfeso (Hch 20:17, 28)'],
            ['Los siete', 'Servicio y administración', 'Esteban, Felipe (Hch 6:5)'],
            ['Profetas', 'Hablar de parte de Dios a la iglesia', 'Agabo, Judas y Silas (Hch 11:28; 15:32)'],
            ['Maestros', 'Enseñar la palabra', 'Antioquía (Hch 13:1)'],
            ['Evangelistas', 'Anunciar el evangelio', 'Felipe (Hch 21:8)']
          ]
        } }
      ],
      texto: [
        'La iglesia de Hechos no era una organización rígida, pero tampoco era desordenada. A medida que crecía, el Espíritu Santo fue estableciendo ministerios y formas de organización según las necesidades.',
        { h: 'Los apóstoles' },
        'Al principio, los doce apóstoles dirigían la iglesia. Tenían una función única: ser testigos de la resurrección, haber acompañado a Jesús desde el bautismo de Juan hasta la ascensión (Hch 1:21-22). Su enseñanza era la norma de la iglesia. Hechos llama también apóstoles a Pablo y Bernabé (Hch 14:14), enviados por el Espíritu desde Antioquía.',
        { h: 'Servidores y ancianos' },
        'Cuando la iglesia creció, surgió la necesidad de delegar. Los siete fueron elegidos por la congregación, con requisitos espirituales, y confirmados por los apóstoles con imposición de manos (Hch 6:3-6). Más adelante aparecen los ancianos, primero en Jerusalén (Hch 11:30), y luego en cada iglesia fundada por Pablo (Hch 14:23). En Mileto, Pablo llama a los mismos hombres ancianos y obispos, y les encarga pastorear el rebaño (Hch 20:17, 28): son tres nombres para un mismo ministerio de cuidado pastoral.',
        { h: 'Los dones del Espíritu en el ministerio' },
        'Junto a los cargos, el Espíritu daba dones a diversas personas. En Antioquía había profetas y maestros (Hch 13:1). Agabo profetizó el hambre y el arresto de Pablo; Judas y Silas, que también eran profetas, consolaron y confirmaron a los hermanos con abundancia de palabras (Hch 15:32). Felipe es llamado evangelista (Hch 21:8). Son los mismos ministerios que Pablo enumera en Efesios 4:11.',
        { h: 'Decisiones en comunidad' },
        'Las grandes decisiones se tomaban de manera compartida. En el concilio de Jerusalén, se reunieron los apóstoles y los ancianos, hablaron Pedro, Pablo, Bernabé y Jacobo, y la decisión «pareció bien a los apóstoles y a los ancianos, con toda la iglesia» (Hch 15:22). Pero el que tenía la última palabra era el Espíritu Santo: «ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28).'
      ],
      pensar: 'Para servir las mesas, la iglesia buscó personas llenas del Espíritu Santo (Hch 6:3). ¿Qué cualidades espirituales debería buscar hoy una iglesia al elegir a quienes sirven en ella?'
    },
    {
      id: 'i-problemas', n: 'Problemas y cómo se resolvieron', ref: 'Hechos 5:1-11; 6:1-7; 11:1-18; 15:1-35, 36-41; 21:17-26', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Problemas', tabla: {
          titulo: 'Los problemas de la iglesia de Hechos',
          cab: ['Problema', 'Pasaje', 'Cómo se enfrentó'],
          filas: [
            ['Hipocresía', 'Hch 5:1-11', 'Juicio de Dios; temor en la iglesia'],
            ['Discriminación de las viudas', 'Hch 6:1-7', 'Se escuchó la queja y se delegó a hombres llenos del Espíritu'],
            ['Dudas sobre los gentiles', 'Hch 11:1-18', 'Pedro explicó lo que Dios había hecho'],
            ['Controversia doctrinal', 'Hch 15:1-35', 'Concilio, Escrituras y dirección del Espíritu'],
            ['Desacuerdo entre líderes', 'Hch 15:36-41', 'Se separaron; luego hubo reconciliación (2 Ti 4:11)'],
            ['Malentendidos sobre Pablo', 'Hch 21:17-26', 'Gesto de buena voluntad en el templo']
          ]
        } }
      ],
      texto: [
        'La iglesia de Hechos no fue perfecta. Lucas no oculta sus problemas, y precisamente por eso su relato es útil: muestra cómo una iglesia llena del Espíritu enfrentó los conflictos.',
        { h: 'Pecado dentro de la iglesia' },
        'El primer problema fue moral: Ananías y Safira mintieron para aparentar una consagración que no tenían. Dios intervino con un juicio severo. La lección fue que la santidad de Dios no se negocia en su iglesia, y «vino gran temor sobre toda la iglesia» (Hch 5:11).',
        { h: 'Una queja justa' },
        'El segundo fue la murmuración de los helenistas porque sus viudas eran desatendidas. Los apóstoles no ignoraron la queja ni la descalificaron: reunieron a la iglesia, reconocieron el problema y propusieron una solución. La iglesia eligió a siete hombres de nombre griego, del grupo afectado. El conflicto se resolvió y la palabra siguió creciendo.',
        { h: 'Una controversia doctrinal' },
        'El tercero fue el más grave: ¿debían los gentiles circuncidarse para ser salvos? No era un detalle, sino la esencia del evangelio. La iglesia no lo resolvió por imposición de un líder ni por votación apresurada. Se reunieron los apóstoles y ancianos, hubo una larga discusión, se escuchó lo que Dios había hecho entre los gentiles, se examinaron las Escrituras y se buscó la dirección del Espíritu. La decisión se comunicó por carta, con amor, y produjo gozo.',
        { h: 'Un desacuerdo personal' },
        'El cuarto fue entre dos grandes siervos de Dios: Pablo y Bernabé discutieron sobre Juan Marcos, y fue tal el desacuerdo que se separaron. Lucas no dice quién tenía razón. Quizá ambos la tenían en parte: Pablo, en exigir fidelidad para la misión; Bernabé, en dar una segunda oportunidad. Dios usó la separación para formar dos equipos. Y la historia terminó en reconciliación: años después, Pablo pidió que le trajeran a Marcos, «porque me es útil para el ministerio» (2 Ti 4:11).',
        { h: 'Lo que enseñan' },
        'Los problemas no detuvieron el avance del evangelio. Lo que hizo la diferencia fue la manera de enfrentarlos: con oración, honestidad, escucha, las Escrituras, delegación y sensibilidad al Espíritu Santo.'
      ],
      pensar: 'Pablo y Bernabé se separaron por un desacuerdo, pero la historia terminó con Pablo valorando a Marcos (Hch 15:39; 2 Ti 4:11). ¿Hay alguna relación en tu vida que necesite reconciliación?'
    }
  ];

  /* ---------------- Ruta XI · Personajes ---------------- */
  const personajes = [
    {
      id: 'p-pedro', n: 'Pedro', ref: 'Hechos 1–5; 8:14-25; 9:32–11:18; 12:1-17; 15:7-11', fecha: [30, 49],
      visual: [
        { tipo: 'tabla', titulo: 'Pedro', tabla: {
          titulo: 'Pedro en Hechos',
          cab: ['Pasaje', 'Lo que hace'],
          filas: [
            ['Hch 1:15-26', 'Dirige la elección de Matías'],
            ['Hch 2:14-41', 'Predica en Pentecostés'],
            ['Hch 3–4', 'Sana al cojo; testifica ante el sanedrín'],
            ['Hch 5:1-11', 'Confronta a Ananías y Safira'],
            ['Hch 8:14-25', 'Ora por los samaritanos'],
            ['Hch 9:32-43', 'Sana a Eneas y resucita a Dorcas'],
            ['Hch 10–11', 'Abre la puerta a los gentiles'],
            ['Hch 12', 'Es liberado por un ángel'],
            ['Hch 15:7-11', 'Habla en el concilio: salvos por gracia']
          ]
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pedro-sanedrin.webp', alt: 'Pedro y Juan, serenos, ante el sanedrín', pie: 'Pedro ante el sanedrín (Hch 4).', origen: 'ia' }
      ],
      texto: [
        'Pedro es el protagonista de la primera mitad de Hechos. Es el mismo pescador impulsivo de los Evangelios, el que caminó sobre el agua y se hundió, el que confesó que Jesús era el Cristo y luego lo negó tres veces. En Hechos aparece transformado.',
        { h: 'El cambio' },
        'Las diferencias son notables. En los Evangelios, Pedro negó a Jesús ante una criada; en Hechos, lo confiesa ante el sanedrín que lo condenó. En los Evangelios, no entendía por qué el Mesías debía sufrir; en Hechos, predica la cruz y la resurrección con las Escrituras. En los Evangelios, se durmió en Getsemaní; en Hechos, duerme tranquilo en la cárcel la noche antes de su posible ejecución.',
        '¿Qué cambió? Dos cosas: Pedro vio a Jesús resucitado, que lo restauró (Jn 21:15-19), y fue lleno del Espíritu Santo. El que temía a una criada, «lleno del Espíritu Santo», habló con denuedo a los gobernantes del pueblo (Hch 4:8, 13).',
        { h: 'Las llaves del reino' },
        'Jesús había dicho a Pedro que le daría las llaves del reino de los cielos (Mt 16:19). En Hechos, Pedro abre la puerta del evangelio a cada nuevo grupo: a los judíos en Pentecostés, a los samaritanos cuando ora por ellos, y a los gentiles en casa de Cornelio. Después de abrir esas puertas, Pedro deja de ser el protagonista del libro, y la misión a los gentiles pasa a Pablo.',
        { h: 'Un hombre que aprendió' },
        'Pedro también tuvo que cambiar sus prejuicios. Le costó aceptar que Dios quería a los gentiles: necesitó una visión repetida tres veces, y aun así, años después, Pablo tuvo que reprenderlo en Antioquía por apartarse de los gentiles por temor a los judíos (Gá 2:11-14). Pero en el concilio fue él quien declaró que judíos y gentiles son salvos por la gracia del Señor Jesús de igual modo (Hch 15:11).',
        'Hechos no narra su muerte. Según la tradición, murió crucificado en Roma bajo Nerón, como Jesús había anunciado (Jn 21:18-19). Antes de morir escribió dos cartas, en las que se presenta como «anciano también», testigo de los padecimientos de Cristo (1 P 5:1).'
      ],
      pensar: 'Pedro pasó de negar a Jesús ante una criada a confesarlo ante el sanedrín (Hch 4:8-13). ¿Qué te enseña su transformación sobre lo que Dios puede hacer con tus fracasos?'
    },
    {
      id: 'p-pablo', n: 'Pablo', ref: 'Hechos 7:58–8:3; 9; 13–28; Filipenses 3:4-8', fecha: [33, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Pablo', tabla: {
          titulo: 'Pablo: datos de su vida',
          cab: ['Dato', 'Pasaje'],
          filas: [
            ['Nacido en Tarso de Cilicia, ciudadano romano de nacimiento', 'Hch 21:39; 22:28'],
            ['De la tribu de Benjamín; fariseo', 'Fil 3:5; Hch 23:6'],
            ['Educado en Jerusalén a los pies de Gamaliel', 'Hch 22:3'],
            ['Fabricante de tiendas', 'Hch 18:3'],
            ['Perseguidor de la iglesia', 'Hch 8:3; 26:9-11'],
            ['Convertido camino a Damasco', 'Hch 9:1-19'],
            ['Tres viajes misioneros y el viaje a Roma', 'Hch 13–28'],
            ['Autor de trece cartas del Nuevo Testamento', 'Romanos a Filemón']
          ]
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-saulo-damasco.webp', alt: 'Una luz desde el cielo rodea a Saulo en el camino a Damasco', pie: 'La conversión de Saulo (Hch 9).', origen: 'ia' }
      ],
      texto: [
        'Pablo es el personaje que más espacio ocupa en Hechos. Aparece por primera vez como un joven llamado Saulo que cuida la ropa de los que apedrean a Esteban, y el libro termina con él predicando en Roma.',
        { h: 'Dos mundos' },
        'Pablo estaba preparado para su misión de una manera única. Era judío de pura cepa, de la tribu de Benjamín, fariseo, educado en Jerusalén por Gamaliel, uno de los maestros más respetados. Pero había nacido en Tarso, una ciudad griega importante, hablaba griego, conocía la cultura y los poetas de los gentiles, y era ciudadano romano de nacimiento. Dios lo había formado, sin que él lo supiera, para ser puente entre el mundo judío y el mundo gentil (Gá 1:15).',
        { h: 'El perseguidor' },
        'Antes de su conversión, Saulo fue el más feroz enemigo de la iglesia. Consintió en la muerte de Esteban, entraba en las casas para llevar presos a hombres y mujeres, y daba su voto contra los creyentes cuando los mataban (Hch 26:10). Lo hacía por celo religioso: creía que servía a Dios. Por eso nunca olvidó la gracia que recibió. Se llamó a sí mismo el primero de los pecadores (1 Ti 1:15).',
        { h: 'El apóstol' },
        'Desde su encuentro con Cristo, toda su vida tuvo un solo propósito. Recorrió miles de kilómetros a pie y por mar, fundó iglesias en las principales ciudades del oriente del imperio, formó a colaboradores como Timoteo, Tito y Silas, escribió cartas que son parte de la Escritura y sufrió azotes, cárceles, naufragios y apedreamientos.',
        'Hechos lo presenta lleno del Espíritu Santo (Hch 9:17; 13:9), haciendo señales y prodigios (Hch 14:3; 19:11), guiado y a veces detenido por el Espíritu (Hch 16:6-7), y sostenido por visiones del Señor en los momentos difíciles (Hch 18:9; 23:11; 27:23).',
        'Pablo resumió su vida así: lo que antes era ganancia, lo estimó como pérdida por amor de Cristo, por la excelencia del conocimiento de Cristo Jesús, su Señor (Fil 3:7-8).'
      ],
      pensar: 'Dios preparó a Pablo, desde antes de su conversión, con una formación que después usaría en su ministerio (Gá 1:15). ¿Qué experiencias de tu vida podría usar Dios para su propósito?'
    },
    {
      id: 'p-esteban-felipe', n: 'Esteban y Felipe', ref: 'Hechos 6–8; 21:8-9', fecha: [32, 57],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-esteban.webp', alt: 'Esteban mira hacia el cielo abierto con el rostro iluminado', pie: 'Esteban, el primer mártir (Hch 7:55-60).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Felipe', src: 'img/hechos-felipe-etiope.webp', alt: 'Felipe habla con el funcionario etíope junto a su carro', pie: 'Felipe y el etíope (Hch 8:26-39).', origen: 'ia' }
      ],
      texto: [
        'Esteban y Felipe fueron elegidos para servir las mesas, pero Dios los usó para mucho más. Muestran que no hace falta ser apóstol para ser un instrumento poderoso en las manos de Dios.',
        { h: 'Esteban, el primer mártir' },
        'Lucas describe a Esteban con una acumulación de elogios: «varón lleno de fe y del Espíritu Santo» (Hch 6:5), «lleno de gracia y de poder» (Hch 6:8). Hacía grandes prodigios y señales, y sus adversarios no podían resistir la sabiduría y el Espíritu con que hablaba.',
        'Esteban fue el primero en entender con claridad algunas consecuencias del evangelio: que Dios no está limitado al templo de Jerusalén, y que el pueblo que rechazó a Jesús repetía la historia de rechazo de sus padres. Su discurso le costó la vida. Murió como su Señor: encomendando su espíritu y perdonando a sus verdugos.',
        'Su muerte tuvo consecuencias que él no vio. La persecución que siguió dispersó a la iglesia y llevó el evangelio a Samaria y hasta Antioquía. Y entre los que aprobaban su muerte estaba Saulo. Agustín de Hipona, siglos después, dijo que si Esteban no hubiera orado, la iglesia no tendría a Pablo.',
        { h: 'Felipe, el evangelista' },
        'Felipe fue el primero en predicar fuera del mundo judío: en Samaria, con grandes señales y gozo, y luego al funcionario etíope, a quien encontró por obediencia a un ángel en un camino desierto. Felipe sabía hablar a multitudes y a una sola persona.',
        'Después de llegar a Cesarea, se estableció allí. Veinte años más tarde, Lucas lo llama «Felipe el evangelista», y cuenta que hospedó a Pablo en su casa. Tenía cuatro hijas doncellas que profetizaban (Hch 21:8-9). Su familia era una familia llena del Espíritu, donde también las mujeres ejercían el don de profecía.',
        'Esteban vivió poco y murió como mártir; Felipe vivió muchos años y sirvió como evangelista. Los dos fueron fieles en su llamado.'
      ],
      pensar: 'Esteban y Felipe fueron elegidos para servir mesas, y Dios los usó como predicadores y hacedores de milagros (Hch 6:5, 8; 8:5-6). ¿Qué te enseña esto sobre la fidelidad en las tareas pequeñas?'
    },
    {
      id: 'p-bernabe', n: 'Bernabé, el hijo de consolación', ref: 'Hechos 4:36-37; 9:26-27; 11:22-30; 13–15', fecha: [30, 49],
      visual: [
        { tipo: 'tabla', titulo: 'Bernabé', tabla: {
          titulo: 'Bernabé en Hechos',
          cab: ['Pasaje', 'Lo que hace'],
          filas: [
            ['Hch 4:36-37', 'Vende una heredad y la da a la iglesia'],
            ['Hch 9:26-27', 'Presenta a Saulo a los apóstoles cuando todos le temían'],
            ['Hch 11:22-24', 'Anima a la nueva iglesia de Antioquía'],
            ['Hch 11:25-26', 'Busca a Saulo en Tarso y enseñan juntos'],
            ['Hch 13–14', 'Primer viaje misionero con Pablo'],
            ['Hch 15:2, 12', 'Defiende a los gentiles en el concilio'],
            ['Hch 15:37-39', 'Da una segunda oportunidad a Juan Marcos']
          ]
        } }
      ],
      texto: [
        'Su nombre era José, pero los apóstoles le pusieron un sobrenombre que describía su carácter: Bernabé, «que traducido es, Hijo de consolación» (Hch 4:36). Era un levita de Chipre, y aparece por primera vez vendiendo una heredad y poniendo el dinero a los pies de los apóstoles.',
        { h: 'El que creyó en Saulo' },
        'Cuando Saulo llegó a Jerusalén después de su conversión, todos le tenían miedo, «no creyendo que fuese discípulo». Pero Bernabé lo tomó, lo trajo a los apóstoles y les contó cómo había visto al Señor y había predicado con denuedo en Damasco (Hch 9:26-27). Sin Bernabé, quizá Saulo nunca habría sido aceptado por la iglesia.',
        { h: 'El que vio la gracia' },
        'Cuando la iglesia de Jerusalén supo que en Antioquía muchos griegos habían creído, envió a Bernabé. «Este, cuando llegó, y vio la gracia de Dios, se regocijó, y exhortó a todos a que con propósito de corazón permaneciesen fieles al Señor» (Hch 11:23). Bernabé no llegó a buscar errores, sino a ver lo que Dios estaba haciendo. Lucas explica por qué: «era varón bueno, y lleno del Espíritu Santo y de fe» (Hch 11:24).',
        'Bernabé supo también reconocer que la obra lo superaba, y fue a Tarso a buscar a Saulo para que lo ayudara. Al principio, Lucas habla de «Bernabé y Saulo»; después del primer viaje, de «Pablo y Bernabé». Bernabé aceptó que su discípulo lo superara.',
        { h: 'El de la segunda oportunidad' },
        'Cuando Juan Marcos, su sobrino (Col 4:10), abandonó la misión en Panfilia, Pablo no quiso llevarlo de nuevo, pero Bernabé sí. Se separaron por eso. Bernabé tomó a Marcos y se fue a Chipre, y ahí sale del relato de Hechos. Pero su confianza dio fruto: Marcos llegó a ser útil para Pablo (2 Ti 4:11) y, según la tradición, escribió el Evangelio que lleva su nombre.',
        'Bernabé es el modelo del creyente que anima, que cree en los demás, que abre puertas y que da segundas oportunidades.'
      ],
      pensar: 'Bernabé creyó en Saulo cuando todos le temían, y en Marcos cuando Pablo lo rechazó (Hch 9:27; 15:37-39). ¿A quién podrías animar o dar una segunda oportunidad como lo hizo Bernabé?'
    },
    {
      id: 'p-equipo', n: 'Silas, Timoteo, Priscila, Aquila y Apolos', ref: 'Hechos 15:22-40; 16:1-3; 18:1-28; Romanos 16:3-5', fecha: [49, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Colaboradores', tabla: {
          titulo: 'Colaboradores de Pablo en Hechos',
          cab: ['Nombre', 'Origen', 'Lo que sabemos'],
          filas: [
            ['Silas (Silvano)', 'Jerusalén', 'Profeta; ciudadano romano; compañero del segundo viaje (Hch 15:22, 32, 40; 16:37)'],
            ['Timoteo', 'Listra', 'Madre judía creyente, padre griego; colaborador más cercano de Pablo (Hch 16:1-3; Fil 2:19-22)'],
            ['Priscila y Aquila', 'Ponto; Roma', 'Fabricantes de tiendas; hospedaron a Pablo y a la iglesia en su casa (Hch 18:2-3; 1 Co 16:19)'],
            ['Apolos', 'Alejandría', 'Elocuente y poderoso en las Escrituras; ministró en Corinto (Hch 18:24-28; 1 Co 3:6)'],
            ['Lucas', 'Antioquía, según la tradición', 'Médico; autor de Lucas y Hechos; compañero de viajes (Col 4:14)'],
            ['Aristarco', 'Tesalónica', 'Compañero en Éfeso, en el viaje a Roma y en la prisión (Hch 19:29; 27:2; Col 4:10)']
          ]
        } }
      ],
      texto: [
        'Pablo nunca trabajó solo. Hechos y sus cartas mencionan decenas de colaboradores. Algunos de ellos ocupan un lugar especial.',
        { h: 'Silas' },
        'Silas era uno de los «varones principales entre los hermanos» de Jerusalén (Hch 15:22), y profeta (Hch 15:32). Fue enviado a Antioquía con la carta del concilio, y después Pablo lo eligió como compañero del segundo viaje. Fue azotado con Pablo en Filipos y cantó con él a medianoche en la cárcel. Como Pablo, era ciudadano romano. En las cartas aparece con el nombre de Silvano (1 Ts 1:1).',
        { h: 'Timoteo' },
        'Timoteo era un joven de Listra, hijo de una judía creyente y de padre griego, del que daban buen testimonio los hermanos (Hch 16:1-2). Probablemente conoció el evangelio en el primer viaje de Pablo. Se convirtió en su colaborador más cercano: Pablo lo llama «verdadero hijo en la fe» (1 Ti 1:2) y dice que no tenía a nadie del mismo ánimo (Fil 2:20). Le escribió dos cartas.',
        { h: 'Priscila y Aquila' },
        'Este matrimonio judío, expulsado de Roma por Claudio, recibió a Pablo en Corinto, donde trabajaban juntos haciendo tiendas. Lo acompañaron a Éfeso, y allí, cuando oyeron a Apolos, «le tomaron aparte y le expusieron más exactamente el camino de Dios» (Hch 18:26). Lucas casi siempre nombra primero a Priscila, quizá por su papel destacado. En sus casas, en Éfeso y en Roma, se reunía la iglesia (1 Co 16:19; Ro 16:3-5). Pablo dice que expusieron su vida por él.',
        { h: 'Apolos' },
        'Apolos era un judío de Alejandría, elocuente, poderoso en las Escrituras y ferviente de espíritu, pero solo conocía el bautismo de Juan. Aceptó con humildad ser enseñado por un matrimonio de artesanos, y luego fue de gran provecho a los creyentes de Acaya. Pablo lo reconoció: «Yo planté, Apolos regó; pero el crecimiento lo ha dado Dios» (1 Co 3:6).',
        'La misión de Hechos fue obra de un equipo de hombres y mujeres de diversos orígenes, unidos por el mismo Espíritu.'
      ],
      pensar: 'Apolos, un predicador elocuente, aceptó ser enseñado por un matrimonio de artesanos (Hch 18:26). ¿Estás dispuesto a aprender de otros, aunque tengan menos estudios o reconocimiento que tú?'
    },
    {
      id: 'p-mujeres', n: 'Las mujeres de Hechos', ref: 'Hechos 1:14; 2:17-18; 9:36-42; 12:12-15; 16:13-15; 17:4, 12, 34; 18:26; 21:9', fecha: [30, 57],
      visual: [
        { tipo: 'tabla', titulo: 'Mujeres', tabla: {
          titulo: 'Mujeres en Hechos',
          cab: ['Nombre', 'Pasaje', 'Lo que hace'],
          filas: [
            ['María, la madre de Jesús, y otras mujeres', 'Hch 1:14', 'Perseveran en oración antes de Pentecostés'],
            ['Las hijas y siervas', 'Hch 2:17-18', 'Reciben el Espíritu y profetizan'],
            ['Dorcas (Tabita)', 'Hch 9:36-42', 'Discípula llena de buenas obras; resucitada'],
            ['María, madre de Juan Marcos', 'Hch 12:12', 'La iglesia ora en su casa'],
            ['Rode', 'Hch 12:13-15', 'Reconoce la voz de Pedro'],
            ['Lidia', 'Hch 16:14-15, 40', 'Primera convertida de Europa; abre su casa a la iglesia'],
            ['Mujeres nobles de Tesalónica y Berea', 'Hch 17:4, 12', 'Creen al evangelio'],
            ['Dámaris', 'Hch 17:34', 'Cree en Atenas'],
            ['Priscila', 'Hch 18:2, 18, 26', 'Colaboradora de Pablo; enseña a Apolos'],
            ['Las cuatro hijas de Felipe', 'Hch 21:9', 'Profetizan']
          ]
        } }
      ],
      texto: [
        'Lucas presta una atención especial a las mujeres, tanto en su Evangelio como en Hechos. En un mundo donde la mujer tenía pocos derechos y poca voz pública, Hechos muestra a mujeres que oran, profetizan, sirven, enseñan, hospedan a la iglesia y son contadas entre los discípulos.',
        { h: 'Desde el principio' },
        'En el aposento alto, antes de Pentecostés, junto a los apóstoles perseveraban en oración las mujeres, y María la madre de Jesús (Hch 1:14). Cuando el Espíritu vino, vino sobre todos. Pedro explicó que se cumplía Joel: «vuestros hijos y vuestras hijas profetizarán… y de cierto sobre mis siervos y sobre mis siervas en aquellos días derramaré de mi Espíritu, y profetizarán» (Hch 2:17-18). Desde el primer día, el Espíritu se derramó sobre hombres y mujeres por igual.',
        { h: 'Discípulas y servidoras' },
        'Dorcas es la única mujer a quien el Nuevo Testamento llama expresamente discípula (Hch 9:36). Era abundante en buenas obras y en limosnas; hacía túnicas y vestidos para las viudas. Su muerte causó tanto dolor que llamaron a Pedro, y Dios la resucitó.',
        { h: 'Casas abiertas' },
        'Varias mujeres abrieron sus casas a la iglesia. En casa de María, la madre de Juan Marcos, la iglesia oraba por Pedro encarcelado (Hch 12:12). Lidia, una comerciante de púrpura de Tiatira, fue la primera convertida de Europa; insistió en hospedar a los misioneros, y su casa fue el lugar de reunión de la iglesia de Filipos (Hch 16:15, 40).',
        { h: 'Profetisas y maestras' },
        'Las cuatro hijas de Felipe profetizaban (Hch 21:9). Priscila, junto a su marido Aquila, enseñó «más exactamente el camino de Dios» a Apolos (Hch 18:26), y Pablo la llama su colaboradora en Cristo Jesús (Ro 16:3).',
        'Hechos muestra que el Espíritu Santo da dones y ministerios a hombres y a mujeres, para la edificación de la iglesia y el avance del evangelio.'
      ],
      pensar: 'Desde Pentecostés, el Espíritu se derramó sobre hijos e hijas, siervos y siervas (Hch 2:17-18). ¿Qué dones y servicios ha dado Dios a las mujeres de tu congregación, y cómo se pueden valorar y desarrollar?'
    },
    {
      id: 'p-autoridades', n: 'Las autoridades', ref: 'Hechos 4–5; 12; 13:7; 16:19-39; 18:12-17; 21–26', fecha: [30, 62],
      visual: [
        { tipo: 'tabla', titulo: 'Autoridades', tabla: {
          titulo: 'Las autoridades ante el evangelio',
          cab: ['Autoridad', 'Pasaje', 'Actitud'],
          filas: [
            ['Anás, Caifás y el sanedrín', 'Hch 4–5', 'Prohíben predicar; azotan a los apóstoles'],
            ['Gamaliel', 'Hch 5:34-39', 'Aconseja prudencia: no luchar contra Dios'],
            ['Herodes Agripa I', 'Hch 12', 'Mata a Jacobo; muere herido por Dios'],
            ['Sergio Paulo', 'Hch 13:7-12', 'Cree en el Señor'],
            ['Magistrados de Filipos', 'Hch 16:19-39', 'Azotan sin juicio; luego piden disculpas'],
            ['Galión', 'Hch 18:12-17', 'Se niega a juzgar asuntos religiosos'],
            ['Claudio Lisias', 'Hch 21–23', 'Rescata a Pablo dos veces'],
            ['Félix', 'Hch 24', 'Se espanta pero posterga; espera un soborno'],
            ['Festo', 'Hch 25–26', 'Cree que Pablo está loco; no halla delito'],
            ['Agripa II', 'Hch 26', '«Por poco me persuades a ser cristiano»'],
            ['Julio, centurión', 'Hch 27', 'Trata a Pablo con humanidad; lo salva']
          ]
        } }
      ],
      texto: [
        'Hechos está lleno de autoridades: sumos sacerdotes, reyes, procónsules, gobernadores, magistrados y centuriones. Sus reacciones ante el evangelio son muy variadas.',
        { h: 'Los que se opusieron' },
        'Las autoridades religiosas de Jerusalén fueron los primeros adversarios. El sanedrín prohibió a los apóstoles hablar en el nombre de Jesús, los encarceló y los azotó. Herodes Agripa I mató a Jacobo para agradar a los judíos. Los magistrados de Filipos azotaron a Pablo y a Silas sin juicio, ante una turba.',
        'A estas autoridades, los apóstoles respondieron con respeto, pero con firmeza: «Es necesario obedecer a Dios antes que a los hombres» (Hch 5:29). Cuando una autoridad manda algo contrario a la voluntad de Dios, el creyente obedece a Dios y acepta las consecuencias.',
        { h: 'Los que protegieron' },
        'Pero Hechos muestra también a autoridades que, a veces sin saberlo, protegieron el avance del evangelio. Gamaliel aconsejó no luchar contra Dios. Galión se negó a juzgar a Pablo en Corinto. El tribuno Claudio Lisias lo rescató dos veces de la muerte. El centurión Julio lo trató con humanidad y, en el naufragio, impidió que los soldados lo mataran. Pablo sabía hacer valer sus derechos de ciudadano romano, y lo hizo varias veces para protegerse y proteger a la iglesia.',
        { h: 'Los que oyeron' },
        'Hechos muestra, además, a autoridades que oyeron el evangelio. Sergio Paulo, procónsul de Chipre, creyó (Hch 13:12). Félix oyó a Pablo hablar de justicia, dominio propio y juicio venidero, y se espantó, pero dejó la decisión para otro momento. Agripa estuvo «por poco» de ser persuadido. Así se cumplía lo que el Señor dijo de Saulo: llevaría su nombre «en presencia de los gentiles, y de reyes» (Hch 9:15).',
        { h: 'La soberanía de Dios' },
        'Detrás de todas estas autoridades, Hechos muestra a Dios gobernando la historia. La iglesia oró reconociendo que Herodes, Poncio Pilato y los gentiles hicieron «cuanto tu mano y tu consejo habían antes determinado que sucediera» (Hch 4:28). Ninguna autoridad pudo detener el evangelio, y Dios usó aun a las que se oponían para llevarlo hasta Roma.'
      ],
      pensar: 'Los apóstoles respetaban a las autoridades, pero dijeron: «Es necesario obedecer a Dios antes que a los hombres» (Hch 5:29). ¿Cómo se equilibran en tu vida el respeto a las autoridades y la obediencia a Dios?'
    }
  ];

  /* ---------------- Ruta XII · Las iglesias en las casas ---------------- */
  const CASAS = ['jerusalen', 'jope', 'cesarea', 'filipos', 'tesalonica', 'corinto', 'efeso', 'troas', 'roma'];
  const casas = [
    {
      id: 'c-sin-templos', n: 'Una iglesia sin templos', ref: 'Hechos 2:46; 5:42; 20:20; Romanos 16:5; 1 Corintios 16:19; Colosenses 4:15; Filemón 2', fecha: [30, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: CASAS } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-casa-iglesia.webp', alt: 'Una iglesia del siglo I reunida en el patio de una casa grecorromana: hombres, mujeres, niños y esclavos sentados juntos alrededor de una mesa con pan, mientras uno lee un rollo a la luz de lámparas', pie: 'Una iglesia reunida en una casa.', origen: 'ia' }
      ],
      texto: [
        'Durante los primeros siglos, los cristianos no tuvieron templos. Los primeros edificios construidos o adaptados especialmente como iglesias son del siglo III. En el tiempo de Hechos, la iglesia se reunía en el templo de Jerusalén mientras pudo hacerlo, en sinagogas al comienzo de cada misión, en lugares públicos como la escuela de Tiranno, y sobre todo en las casas de los creyentes.',
        { h: '«Por las casas»' },
        'Lucas lo repite varias veces. Los primeros creyentes se reunían cada día en el templo, «y partiendo el pan en las casas, comían juntos con alegría y sencillez de corazón» (Hch 2:46). Después de ser azotados, los apóstoles «todos los días, en el templo y por las casas, no cesaban de enseñar y predicar a Jesucristo» (Hch 5:42). Pablo recordó a los ancianos de Éfeso que les había enseñado «públicamente y por las casas» (Hch 20:20).',
        'La casa era el lugar de la comunión, de la cena del Señor, de la enseñanza, de la oración y de la hospitalidad. Cuando Saulo perseguía a la iglesia, entraba «casa por casa» (Hch 8:3): sabía dónde estaba la iglesia.',
        { h: 'En todo el Nuevo Testamento' },
        'Las cartas confirman lo que muestra Hechos. Pablo saluda a «la iglesia de su casa», es decir, a la iglesia que se reunía en la casa de Priscila y Aquila, en Roma (Ro 16:5) y antes en Éfeso (1 Co 16:19); a Ninfas y la iglesia que estaba en su casa (Col 4:15); a Filemón y «la iglesia que está en tu casa» (Flm 2). En una gran ciudad podía haber varias de estas iglesias en casas, que juntas formaban la iglesia de esa ciudad.',
        'El mapa muestra las ciudades donde Hechos menciona casas que recibieron a la iglesia o a los misioneros. Las estaciones siguientes las recorren una por una.',
        { h: 'Por qué importa' },
        'La iglesia de las casas no era una iglesia de segunda categoría por no tener edificio. Era una familia. Allí se conocían, se cuidaban, comían juntos, oraban por las necesidades de cada uno y recibían a los que llegaban. Esa cercanía fue una de las razones del crecimiento de la iglesia primitiva.'
      ],
      pensar: 'La primera iglesia partía el pan «en las casas», y comían juntos con alegría y sencillez de corazón (Hch 2:46). ¿Cómo podría tu casa ser un lugar de comunión, oración y hospitalidad para otros creyentes?'
    },
    {
      id: 'c-jerusalen', n: 'Jerusalén: el aposento alto y la casa de María', ref: 'Hechos 1:13-14; 2:1-2; 12:12-17', fecha: [30, 44],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-casa-maria.webp', alt: 'De noche, en el patio de la casa de María en Jerusalén, un grupo de creyentes ora arrodillado a la luz de lámparas, mientras una joven sirvienta corre desde la puerta exterior', pie: 'La iglesia ora en casa de María, la madre de Juan Marcos (Hch 12:12).', origen: 'ia' }
      ],
      texto: [
        'La iglesia nació en una casa. Después de la ascensión, los once volvieron a Jerusalén y «subieron al aposento alto, donde moraban» (Hch 1:13). Allí perseveraban unánimes en oración con las mujeres, con María la madre de Jesús y con sus hermanos.',
        { h: 'El aposento alto' },
        'Un aposento alto era una habitación en el piso superior de una casa, a veces bastante grande. Podía reunir a ciento veinte personas (Hch 1:15). No sabemos de quién era la casa. Algunos piensan que era la misma donde Jesús celebró la última cena, que también fue en un aposento alto (Lc 22:12), y quizá la casa de María, la madre de Juan Marcos, pero el texto no lo dice.',
        'El día de Pentecostés, el viento recio «llenó toda la casa donde estaban sentados» (Hch 2:2). El Espíritu Santo fue derramado por primera vez en una casa, no en el templo. Después, los discípulos salieron, y la multitud se juntó.',
        { h: 'La casa de María' },
        'La primera casa de Jerusalén que Hechos identifica por su dueña es la de María, la madre de Juan Marcos. Cuando Herodes encarceló a Pedro, «muchos estaban reunidos orando» en esa casa (Hch 12:12). Era una casa grande, con una puerta exterior que daba a la calle y una sirvienta, Rode, que atendía. Al ser liberado, Pedro fue directamente allí: sabía dónde estaría la iglesia.',
        'La escena muestra la vida de una iglesia en casa: reunida de noche, orando por una necesidad urgente, con una familia que abría su hogar aun cuando era peligroso. Herodes acababa de matar a Jacobo, y reunirse a orar por Pedro podía costar caro.',
        'De esa casa salió también Juan Marcos, que acompañó a Bernabé y a Saulo, y según la tradición escribió el Evangelio de Marcos. Una casa abierta a la iglesia fue también una casa que dio un misionero.'
      ],
      pensar: 'María abrió su casa para que la iglesia orara, aunque era peligroso, y de esa casa salió un misionero, Juan Marcos (Hch 12:12, 25). ¿Qué bendiciones puede traer a una familia abrir su hogar a la obra de Dios?'
    },
    {
      id: 'c-gentiles', n: 'Casas de gentiles: Cornelio, Lidia y el carcelero', ref: 'Hechos 10:24-48; 11:12-14; 16:14-15, 29-34, 40', fecha: [40, 50],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['jope', 'cesarea', 'filipos', 'troas'] } },
        { tipo: 'imagen', titulo: 'Lidia', src: 'img/hechos-lidia.webp', alt: 'Junto a un río en las afueras de Filipos, Lidia, una comerciante con un manto de púrpura, escucha a Pablo con atención, rodeada de otras mujeres sentadas en la orilla', pie: 'Lidia junto al río de Filipos (Hch 16:13-15).', origen: 'ia' }
      ],
      texto: [
        'Cuando el evangelio llegó a los gentiles, también entró por las casas. Tres relatos de Hechos muestran casas enteras que recibieron a Cristo.',
        { h: 'La casa de Cornelio' },
        'El ángel le dijo a Cornelio que Pedro le hablaría palabras «por las cuales serás salvo tú, y toda tu casa» (Hch 11:14). Cornelio reunió en su casa a sus parientes y amigos más íntimos (Hch 10:24). Para Pedro, entrar en la casa de un gentil era algo que la tradición judía consideraba indebido, y tuvo que explicarlo (Hch 10:28). Pero fue allí, en esa casa, donde el Espíritu Santo se derramó sobre los gentiles. Pedro se quedó con ellos algunos días.',
        { h: 'La casa de Lidia' },
        'En Filipos, Lidia, una comerciante de telas de púrpura, escuchó a Pablo junto al río, y el Señor abrió su corazón. «Y cuando fue bautizada, y su familia, nos rogó diciendo: Si habéis juzgado que yo sea fiel al Señor, entrad en mi casa, y posad. Y nos obligó a quedarnos» (Hch 16:15). Su casa se convirtió en la base de la misión y en el lugar de reunión de la primera iglesia de Europa. Cuando Pablo y Silas salieron de la cárcel, «entraron en casa de Lidia, y habiendo visto a los hermanos, los consolaron» (Hch 16:40).',
        { h: 'La casa del carcelero' },
        'Esa misma noche, el carcelero de Filipos preguntó qué debía hacer para ser salvo. La respuesta incluyó a su casa: «Cree en el Señor Jesucristo, y serás salvo, tú y tu casa». Pablo y Silas le hablaron la palabra «a él y a todos los que estaban en su casa». El carcelero les lavó las heridas, fue bautizado con todos los suyos, y llevándolos a su casa les puso la mesa, «y se regocijó con toda su casa de haber creído a Dios» (Hch 16:31-34).',
        { h: 'La casa en el mundo antiguo' },
        'En el mundo grecorromano, la casa, en griego oíkos, incluía no solo a los padres y los hijos, sino también a parientes, esclavos y a veces trabajadores. Cuando el jefe de la casa se convertía, el evangelio se ofrecía a todos sus miembros, y cada uno debía creer. Por eso el evangelio se extendió tan rápido: avanzaba por las redes de las familias.'
      ],
      pensar: 'El carcelero de Filipos se regocijó «con toda su casa de haber creído a Dios» (Hch 16:34). ¿Quiénes forman tu «casa», tu red de familia y amigos cercanos, y cómo puedes compartirles el evangelio?'
    },
    {
      id: 'c-grecia', n: 'Tesalónica y Corinto: Jasón, Ticio Justo, Priscila y Aquila', ref: 'Hechos 17:5-9; 18:1-8; Romanos 16:23; 1 Corintios 1:14-16; 16:19', fecha: [50, 52],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-jason-tesalonica.webp', alt: 'Una turba arrastra a Jasón y a algunos creyentes ante los magistrados de Tesalónica', pie: 'La turba asalta la casa de Jasón (Hch 17:5-6).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Casas', tabla: {
          titulo: 'Casas en Tesalónica, Corinto y Éfeso',
          cab: ['Casa', 'Pasaje', 'Lo que ocurrió'],
          filas: [
            ['Jasón, Tesalónica', 'Hch 17:5-9', 'Hospedó a Pablo y Silas; la turba asaltó su casa y él pagó la fianza'],
            ['Priscila y Aquila, Corinto', 'Hch 18:2-3', 'Pablo vivió y trabajó con ellos'],
            ['Ticio Justo, Corinto', 'Hch 18:7', 'Su casa, junto a la sinagoga, fue el lugar de enseñanza'],
            ['Crispo, Corinto', 'Hch 18:8', 'Creyó con toda su casa'],
            ['Gayo, Corinto', 'Ro 16:23', 'Hospedaba a Pablo y a toda la iglesia'],
            ['Priscila y Aquila, Éfeso', '1 Co 16:19', 'La iglesia se reunía en su casa']
          ]
        } }
      ],
      texto: [
        'En Grecia, el patrón se repite: el evangelio encuentra casas que se abren, y esas casas pagan a veces un precio.',
        { h: 'La casa de Jasón' },
        'En Tesalónica, Pablo y Silas se hospedaban en la casa de Jasón. Cuando los judíos alborotaron la ciudad, «asaltando la casa de Jasón, procuraban sacarlos al pueblo» (Hch 17:5). Al no encontrarlos, arrastraron a Jasón y a algunos hermanos ante las autoridades, acusándolo de haber recibido a los que trastornaban el mundo. Jasón tuvo que pagar una fianza. Abrir la casa a los siervos de Dios podía costar caro.',
        { h: 'Las casas de Corinto' },
        'En Corinto, Pablo vivió en la casa de Priscila y Aquila, y trabajaba con ellos haciendo tiendas (Hch 18:3). Cuando los judíos de la sinagoga se opusieron, Pablo se fue a la casa de un hombre llamado Ticio Justo, temeroso de Dios, «la cual estaba junto a la sinagoga» (Hch 18:7). Desde entonces, esa casa fue el lugar donde se reunía la iglesia, justo al lado de la sinagoga de donde los habían expulsado.',
        'Crispo, el principal de la sinagoga, «creyó en el Señor con toda su casa» (Hch 18:8). En la carta a los Corintios, Pablo menciona también que bautizó a la familia de Estéfanas (1 Co 1:16). Y en Romanos, escrita desde Corinto, envía saludos de Gayo, «hospedador mío y de toda la iglesia» (Ro 16:23): la casa de Gayo era suficientemente grande para reunir a todos los creyentes de la ciudad.',
        { h: 'Priscila y Aquila, una casa itinerante' },
        'Priscila y Aquila son el mejor ejemplo de una casa al servicio del evangelio. Recibieron a Pablo en Corinto. Se trasladaron a Éfeso, y allí la iglesia se reunía en su casa (1 Co 16:19); allí también recibieron a Apolos y le enseñaron. Más tarde volvieron a Roma, y de nuevo la iglesia se reunía en su casa (Ro 16:3-5). Dondequiera que iban, su hogar se convertía en iglesia.'
      ],
      pensar: 'Priscila y Aquila abrieron su casa a la iglesia en tres ciudades distintas (Hch 18; 1 Co 16:19; Ro 16:5). ¿Qué te enseña su ejemplo sobre usar lo que tienes, incluido tu hogar, para servir a Dios?'
    },
    {
      id: 'c-troas-cesarea', n: 'Troas y Cesarea: el aposento de Troas y la casa de Felipe', ref: 'Hechos 20:7-12; 21:8-16', fecha: 57,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-troas.webp', alt: 'De noche, en el aposento alto de una casa de Troas iluminado por muchas lámparas, Pablo enseña a creyentes reunidos para partir el pan, mientras un joven dormita sentado en una ventana', pie: 'La reunión en Troas (Hch 20:7-9).', origen: 'ia' }
      ],
      texto: [
        'En el viaje de regreso a Jerusalén, al final del tercer viaje, Lucas narra dos escenas en casas que muestran la vida de la iglesia con detalle.',
        { h: 'El aposento alto de Troas' },
        '«El primer día de la semana, reunidos los discípulos para partir el pan, Pablo les enseñaba» (Hch 20:7). La reunión era en un aposento alto, en el tercer piso de una casa, donde había muchas lámparas (Hch 20:8). Probablemente se reunían de noche porque muchos creyentes trabajaban durante el día, y el domingo era un día laboral en el mundo romano.',
        'Pablo alargó su enseñanza hasta la medianoche, y un joven llamado Eutico, sentado en la ventana, se durmió y cayó al vacío. Lo levantaron muerto, pero Pablo bajó, se echó sobre él y anunció que estaba vivo. Luego subieron otra vez, partieron el pan, comieron y conversaron hasta el alba.',
        'La escena muestra los elementos de la reunión de una iglesia en casa: el día del Señor, la cena del Señor y una comida compartida, la enseñanza de la palabra, la conversación, y el poder de Dios presente. Todo en una casa, con la iglesia entera reunida.',
        { h: 'La casa de Felipe en Cesarea' },
        'Al llegar a Cesarea, los misioneros se hospedaron en la casa de Felipe el evangelista, uno de los siete, que se había establecido allí veinte años antes (Hch 21:8). Tenía cuatro hijas doncellas que profetizaban. Era una casa donde funcionaban los dones del Espíritu.',
        'En esa casa, el profeta Agabo se ató con el cinto de Pablo y anunció que lo atarían en Jerusalén. Allí lloraron los hermanos rogando a Pablo que no subiera, y allí todos se rindieron finalmente a la voluntad de Dios (Hch 21:10-14).',
        'De Cesarea a Jerusalén, los acompañaron algunos discípulos, que los llevaron a hospedarse con un tal Mnasón, de Chipre, «discípulo antiguo» (Hch 21:16). Hasta el final del viaje, Pablo y sus compañeros encontraron casas abiertas.'
      ],
      pensar: 'En la casa de Felipe, una familia entera servía a Dios: el padre como evangelista y las hijas profetizando (Hch 21:8-9). ¿Cómo puede tu familia servir junta al Señor?'
    },
    {
      id: 'c-roma', n: 'Roma: la casa alquilada', ref: 'Hechos 28:16, 23, 30-31; Romanos 16:3-16; Filipenses 4:22', fecha: [60, 62],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/hechos-pablo-roma.webp', alt: 'Pablo, encadenado a un soldado, enseña a un grupo en una habitación sencilla de una casa alquilada en Roma', pie: '«Recibía a todos los que a él venían» (Hch 28:30).', origen: 'ia' }
      ],
      texto: [
        'Hechos termina en una casa. En Roma, a Pablo «se le permitió vivir aparte, con un soldado que le custodiase» (Hch 28:16). No estaba en una cárcel, sino en una vivienda alquilada, encadenado a un guardia que se iba turnando.',
        { h: 'Una casa abierta, aunque encadenada' },
        'En esa casa recibió a los principales de los judíos de Roma, que vinieron «muchos… a la posada», y les testificó del reino de Dios desde la mañana hasta la tarde (Hch 28:23). Y allí permaneció «dos años enteros en una casa alquilada, y recibía a todos los que a él venían, predicando el reino de Dios y enseñando acerca del Señor Jesucristo, abiertamente y sin impedimento» (Hch 28:30-31).',
        'La última imagen del libro es la de un hombre encadenado que abre su casa a todos. Pablo no podía salir a las sinagogas ni a las plazas, pero las personas venían a él. Su casa se convirtió en un centro de evangelización y de enseñanza en la capital del imperio.',
        { h: 'Las iglesias de Roma' },
        'Pablo no fue el primero en llevar el evangelio a Roma. Unos años antes había escrito la carta a los Romanos, y al final saludaba a varios grupos de creyentes: a Priscila y Aquila «y a la iglesia de su casa», a los de la casa de Aristóbulo, a los de la casa de Narciso, y a los hermanos que estaban con varios otros (Ro 16:3-15). La iglesia de Roma era una red de iglesias en casas en distintos barrios de la ciudad.',
        'Desde su casa alquilada, Pablo escribió que su prisión había servido para el progreso del evangelio, que se había hecho conocido en todo el pretorio, y que lo saludaban «los de la casa de César» (Fil 1:12-13; 4:22). El evangelio había entrado aun en la casa del emperador.',
        { h: 'De casa en casa hasta hoy' },
        'Desde el aposento alto de Jerusalén hasta la casa alquilada de Roma, la iglesia de Hechos creció de casa en casa. Muchas congregaciones de hoy recuperan esa práctica con grupos que se reúnen en los hogares para orar, estudiar la Palabra, compartir y alcanzar a vecinos y amigos. Es una práctica tan antigua como la iglesia.'
      ],
      pensar: 'Encadenado y sin poder salir, Pablo convirtió una casa alquilada en un lugar donde recibía a todos para hablarles de Cristo (Hch 28:30-31). ¿Qué limitaciones de tu vida podrían convertirse en oportunidades para recibir y bendecir a otros?'
    }
  ];

  const LINEA = { desde: 25, hasta: 72, hitos: [
    { a: 30, t: 'Pentecostés' }, { a: 34, t: 'Conversión de Pablo' }, { a: 40, t: 'Cornelio' }, { a: 49, t: 'Concilio' },
    { a: 57, t: 'Arresto' }, { a: 60, t: 'Roma' }, { a: 70, t: 'Cae el templo' }
  ] };


  window.RUTA_DATA = {
    titulo: 'Hechos de los Apóstoles',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Fronteras de los mapas aproximadas.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'introduccion', grupo: 'Estudio del libro', n: 'Introducción y trasfondo', info: 'Autor, destinatario, fecha, mundo romano y judío, tema, propósito, características y principios para interpretar',
        linea: { desde: 25, hasta: 72, hitos: [
          { a: 30, t: 'Pentecostés' }, { a: 34, t: 'Conversión de Pablo' }, { a: 49, t: 'Concilio' },
          { a: [51, 52], t: 'Galión' }, { a: 57, t: 'Arresto' }, { a: 62, t: 'Fin de Hechos' }, { a: 70, t: 'Cae el templo' }
        ] },
        estaciones: introduccion },
      { id: 'panorama', grupo: 'Estudio del libro', n: 'Visión panorámica', info: 'Bosquejo, seis etapas, Pedro y Pablo, resumen por secciones, palabras y versículos clave, grandes temas',
        linea: { desde: 25, hasta: 72, hitos: [
          { a: 30, t: 'Pentecostés' }, { a: 34, t: 'Conversión de Pablo' }, { a: 40, t: 'Cornelio' }, { a: 49, t: 'Concilio' },
          { a: 57, t: 'Arresto' }, { a: 60, t: 'Roma' }, { a: 70, t: 'Cae el templo' }
        ] },
        estaciones: panorama },
      { id: 'comentario', grupo: 'Estudio del libro', n: 'Comentario capítulo por capítulo', info: 'Los 28 capítulos de Hechos, uno por uno',
        linea: { desde: 25, hasta: 72, hitos: [
          { a: 30, t: 'Pentecostés' }, { a: 33, t: 'Esteban' }, { a: 40, t: 'Cornelio' }, { a: 49, t: 'Concilio' },
          { a: 57, t: 'Arresto' }, { a: 60, t: 'Roma' }, { a: 70, t: 'Cae el templo' }
        ] },
        estaciones: comentario },
      { id: 'teologia', grupo: 'Estudio del libro', n: 'Teología de Hechos', info: 'El Espíritu Santo, el bautismo en el Espíritu, los dones, Cristo, la salvación, la iglesia y los últimos tiempos', linea: LINEA, estaciones: teologia },
      { id: 'expansion', grupo: 'Mapas', n: 'La expansión de la iglesia', info: 'De Jerusalén a Samaria, Antioquía, Asia, Europa y Roma, y hasta lo último de la tierra',
        linea: { desde: 25, hasta: 72, hitos: [
          { a: 30, t: 'Pentecostés' }, { a: 34, t: 'Samaria' }, { a: 40, t: 'Cornelio' }, { a: 46, t: 'Primer viaje' },
          { a: 50, t: 'Europa' }, { a: 54, t: 'Éfeso' }, { a: 60, t: 'Roma' }
        ] },
        estaciones: expansion },
      { id: 'viajes', grupo: 'Mapas', n: 'Los viajes de Pablo', info: 'Los cuatro viajes en el mapa, comparados, y el recurso general', linea: LINEA, estaciones: viajes },
      { id: 'espiritu', grupo: 'Temas', n: 'El Espíritu Santo en Hechos', info: 'La promesa y los cinco relatos: Jerusalén, Samaria, Damasco, Cesarea y Éfeso', linea: LINEA, estaciones: espiritu },
      { id: 'discursos', grupo: 'Temas', n: 'Los discursos', info: 'El mensaje de la iglesia primitiva: Pedro, Esteban y Pablo', linea: LINEA, estaciones: discursos },
      { id: 'senales', grupo: 'Temas', n: 'Señales y milagros', info: 'Sanidades, liberaciones, resurrecciones, juicios, ángeles y su propósito', linea: LINEA, estaciones: senales },
      { id: 'iglesia', grupo: 'Temas', n: 'La iglesia primitiva', info: 'Su vida, su generosidad, su oración, su organización y sus problemas', linea: LINEA, estaciones: iglesia },
      { id: 'personajes', grupo: 'Temas', n: 'Personajes', info: 'Pedro, Pablo, Esteban y Felipe, Bernabé, los colaboradores, las mujeres y las autoridades', linea: LINEA, estaciones: personajes },
      { id: 'casas', grupo: 'Temas', n: 'Las iglesias en las casas', info: 'De la casa de Jerusalén a la casa alquilada de Roma', linea: LINEA, estaciones: casas }
    ]
  };
})();
