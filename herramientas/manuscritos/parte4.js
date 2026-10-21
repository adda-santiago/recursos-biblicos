/* De la Biblia a nosotros · ruta IV. Las traducciones y armado de RUTA_DATA (ver encabezado en parte1.js) */
(() => {
  const traducciones = [
    {
      id: 'traducir', n: 'La Palabra en la lengua del pueblo', ref: 'Nehemías 8:1-8; Hechos 2:5-11; Mateo 28:19',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../interpretar-biblia/img/esdras-lee-la-ley.webp', alt: 'Esdras lee el libro de la ley desde una plataforma de madera ante el pueblo reunido en Jerusalén', pie: 'Esdras lee la ley, y los levitas explican el sentido (Nehemías 8).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Nehemías 8', texto: '@@neh/8/7-8', ref: 'Nehemías 8:7-8' },
        { tipo: 'cita', titulo: 'Hechos 2', texto: '@@hch/2/5-11', ref: 'Hechos 2:5-11' }
      ],
      texto: [
        'La última parte del camino de la Biblia hasta nosotros es la traducción. Ningún lector de habla hispana lee el hebreo o el griego sin aprenderlos; leemos una traducción. ¿Está bien traducir la Palabra de Dios? La Biblia misma responde que sí.',
        { h: 'Esdras y los levitas' },
        'Cuando los judíos volvieron del exilio, muchos ya no hablaban bien el hebreo. Esdras leyó la ley ante el pueblo desde el alba hasta el mediodía, y los levitas ayudaban: «leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). No bastaba con que el pueblo oyera las palabras; tenía que entenderlas. Esa es la meta de toda buena traducción.',
        { h: 'Pentecostés' },
        'El día de Pentecostés, el Espíritu Santo hizo que judíos de quince regiones distintas oyeran a los discípulos hablar en sus propias lenguas: «¿Cómo, pues, les oímos nosotros hablar cada uno en nuestra lengua en la que hemos nacido?» (Hch 2:8). El don de lenguas de aquel día fue una señal de lo que Dios quería: que las maravillas de Dios se anunciaran en la lengua de cada pueblo (Hch 2:11). El evangelio no exige aprender una lengua sagrada; llega en la lengua materna.',
        { h: 'Una Palabra para todas las naciones' },
        'Jesús mandó hacer discípulos a todas las naciones (Mt 28:19), y la visión final de Apocalipsis muestra ante el trono una multitud «de todas naciones y tribus y pueblos y lenguas» (Ap 7:9). Por eso la iglesia tradujo la Escritura desde el comienzo: el Antiguo Testamento ya se había vertido al griego, y en el siglo II había traducciones al latín y al siríaco. Las estaciones de esta ruta siguen ese camino hasta la Biblia en español y la traducción a las lenguas que todavía esperan.',
        { ejercicio: {
          pregunta: 'Según Nehemías 8:8, ¿qué hacían los levitas mientras se leía la ley?',
          opciones: [
            { t: 'Leían en voz baja para que solo los sacerdotes oyeran.', ok: false, por_que: 'La lectura era pública, ante hombres, mujeres y todos los que podían entender (Neh 8:3).' },
            { t: 'Leían con claridad y explicaban el sentido para que el pueblo entendiera.', ok: true, por_que: 'Es lo que dice el versículo: ponían el sentido, de modo que entendiesen la lectura.' },
            { t: 'Traducían la ley al griego para los judíos de Egipto.', ok: false, por_que: 'La escena ocurre en Jerusalén en el siglo V a.C.; la traducción griega se hizo después, en Alejandría.' }
          ],
          explicacion: 'Desde la Biblia misma, el propósito de leer la Palabra al pueblo es que la entienda. Traducir y explicar son formas de cumplir ese propósito.'
        } }
      ],
      pensar: 'Dios quiso que oyeras sus maravillas en tu propia lengua. ¿A quién conoces que todavía no las ha oído en la suya?'
    },
    {
      id: 'vulgata', n: 'Jerónimo y la Vulgata', ref: 'Hechos 17:11; 2 Timoteo 2:15',
      fecha: [382, 405],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/jeronimo-belen.webp', alt: 'Jerónimo, un erudito anciano de barba gris, trabaja de noche en una celda de piedra de Belén con un rollo hebreo abierto, un códice griego y una tablilla donde escribe en latín', pie: 'Jerónimo en Belén, traduciendo del hebreo al latín.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La Vulgata en la historia',
          cab: ['Año', 'Hecho'],
          filas: [
            ['382', 'El obispo de Roma, Dámaso, encarga a Jerónimo revisar los evangelios en latín'],
            ['386', 'Jerónimo se establece en Belén y estudia hebreo con maestros judíos'],
            ['Hacia 390–405', 'Traduce el Antiguo Testamento directamente del hebreo'],
            ['Siglos V–XV', 'La Vulgata es la Biblia de la iglesia de Occidente'],
            ['1546', 'El Concilio de Trento la declara texto auténtico de la Iglesia católica']
          ],
          nota: 'Vulgata significa «divulgada» o «común»: la versión de uso general.'
        } }
      ],
      texto: [
        'A fines del siglo IV circulaban en Occidente muchas traducciones latinas de la Biblia, hechas por distintas personas y con calidad muy desigual. En 382, el obispo de Roma encargó a Jerónimo, el mejor erudito bíblico de su tiempo, que revisara los evangelios en latín. Jerónimo terminó haciendo mucho más.',
        { h: 'Ir a la fuente' },
        'En 386, Jerónimo se instaló en Belén. Estudió hebreo con maestros judíos, algo que casi ningún cristiano de su época hacía, y tomó una decisión discutida: traducir el Antiguo Testamento directamente del hebreo y no de la Septuaginta, como se acostumbraba. Hablaba de la «verdad hebrea». Muchos lo criticaron, incluso Agustín, que temía que una traducción nueva confundiera a los fieles acostumbrados a la antigua. Jerónimo respondió que el traductor debe ir a la lengua en que Dios habló.',
        'Jerónimo también notó que los libros apócrifos no estaban en la Biblia hebrea. Los tradujo con menos cuidado y advirtió en sus prólogos que la iglesia los leía para edificación, pero no para establecer doctrina. Más tarde esa advertencia se olvidó, y en la Edad Media los apócrifos se leyeron junto con los demás libros.',
        { h: 'Mil años de Biblia latina' },
        'La traducción de Jerónimo terminó por imponerse y se llamó Vulgata, la versión común. Durante mil años fue la Biblia de Europa occidental: de ella se copiaron miles de manuscritos, y sobre ella se escribieron los comentarios medievales. Pero el latín, que en tiempos de Jerónimo era la lengua del pueblo, dejó de serlo. Con los siglos nacieron el español, el italiano, el francés y otras lenguas, y la Biblia quedó encerrada en una lengua que el pueblo ya no entendía. La paradoja es grande: la traducción hecha para que el pueblo entendiera se volvió, con el tiempo, una barrera.',
        { ejercicio: {
          pregunta: '¿Qué tuvo de nuevo la traducción del Antiguo Testamento que hizo Jerónimo?',
          opciones: [
            { t: 'Que la tradujo directamente del hebreo, en lugar de traducir la Septuaginta griega.', ok: true, por_que: 'Jerónimo quiso ir a la lengua original, aunque eso le trajo críticas de quienes preferían la tradición.' },
            { t: 'Que fue la primera traducción de la Biblia a cualquier lengua.', ok: false, por_que: 'Ya existían la Septuaginta, las traducciones latinas antiguas, el siríaco y otras.' },
            { t: 'Que agregó los libros apócrifos, que antes no se leían.', ok: false, por_que: 'Jerónimo advirtió que los apócrifos no estaban en la Biblia hebrea y no debían usarse para establecer doctrina.' }
          ],
          explicacion: 'El principio de Jerónimo sigue vigente: una traducción fiel se hace desde las lenguas originales.'
        } }
      ],
      pensar: 'Jerónimo aprendió hebreo ya adulto para traducir mejor. ¿Qué esfuerzo estás dispuesto a hacer para entender mejor la Palabra de Dios?'
    },
    {
      id: 'reforma', n: 'La imprenta y la Reforma', ref: 'Salmo 119:105; Hechos 17:11; Colosenses 3:16',
      fecha: [1382, 1536],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/imprenta.webp', alt: 'Taller de imprenta del siglo XV: dos operarios bajan la gran prensa de madera mientras otro revisa una hoja recién impresa con dos columnas de texto en latín', pie: 'La imprenta de tipos móviles hizo posible que la Biblia llegara a muchos.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La Biblia en lengua del pueblo',
          cab: ['Año', 'Hecho'],
          filas: [
            ['Hacia 1382', 'Juan Wiclef impulsa la primera Biblia completa en inglés, traducida de la Vulgata'],
            ['Hacia 1455', 'Gutenberg imprime en Maguncia la Vulgata: el primer gran libro impreso con tipos móviles'],
            ['1516', 'Erasmo publica el Nuevo Testamento griego impreso'],
            ['1522', 'Lutero publica el Nuevo Testamento en alemán, traducido del griego'],
            ['1526', 'Tyndale imprime el Nuevo Testamento en inglés, traducido del griego'],
            ['1534', 'Lutero completa la Biblia en alemán'],
            ['1536', 'Tyndale es ejecutado cerca de Bruselas']
          ]
        } }
      ],
      texto: [
        'Al final de la Edad Media, la Biblia era un libro caro, copiado a mano, en latín y casi siempre en manos del clero. Unos pocos creyentes se atrevieron a traducirla a la lengua del pueblo, y pagaron por ello.',
        { h: 'Antes de la imprenta' },
        'En Inglaterra, hacia 1382, Juan Wiclef impulsó una traducción completa al inglés, hecha desde la Vulgata. Sus seguidores, llamados lolardos, la copiaban a mano y la leían en secreto; las autoridades la prohibieron y muchos fueron perseguidos. En Bohemia, Juan Hus siguió ideas semejantes y murió en la hoguera en 1415.',
        { h: 'La imprenta' },
        'Hacia 1455, Juan Gutenberg terminó en Maguncia el primer gran libro impreso con tipos móviles en Europa: una Biblia en latín. La imprenta cambió todo. Un libro que antes exigía meses de trabajo de un copista podía reproducirse por centenares en poco tiempo, con el mismo texto en cada ejemplar. En 1516, Erasmo publicó el Nuevo Testamento en griego, y los traductores pudieron trabajar desde la lengua original.',
        { h: 'La Reforma' },
        'La Reforma afirmó que la Escritura es la autoridad suprema de la fe y que todo creyente debe poder leerla. Martín Lutero tradujo el Nuevo Testamento al alemán desde el griego y lo publicó en 1522; la Biblia completa salió en 1534. Su lenguaje, cercano al habla del pueblo, marcó la lengua alemana. En Inglaterra, Guillermo Tyndale tradujo el Nuevo Testamento del griego e imprimió su traducción en 1526 fuera del país, porque en Inglaterra estaba prohibido. Fue arrestado y ejecutado en 1536. Según el relato de su muerte, sus últimas palabras fueron una oración pidiendo a Dios que abriera los ojos del rey de Inglaterra. Pocos años después, el rey autorizó una Biblia en inglés que tomaba gran parte del trabajo de Tyndale.',
        'La Palabra que había sido «lámpara» y «lumbrera» (Sal 119:105) para el salmista volvía a estar en las casas, en la lengua de cada familia.',
        { ejercicio: {
          pregunta: '¿Por qué la imprenta fue tan importante para la difusión de la Biblia?',
          opciones: [
            { t: 'Porque permitió producir muchos ejemplares con el mismo texto, en poco tiempo y a menor costo.', ok: true, por_que: 'La copia a mano era lenta, cara y sujeta a errores; la imprenta multiplicó los ejemplares idénticos.' },
            { t: 'Porque con la imprenta se descubrieron los manuscritos originales.', ok: false, por_que: 'La imprenta no descubrió manuscritos; reprodujo los textos que ya existían.' },
            { t: 'Porque hizo innecesario traducir la Biblia, ya que todos aprendieron latín.', ok: false, por_que: 'Fue al revés: la imprenta permitió difundir traducciones en las lenguas del pueblo.' }
          ],
          explicacion: 'La imprenta, junto con el redescubrimiento de las lenguas originales, hizo posible que la Biblia traducida llegara a las manos de los creyentes comunes.'
        } }
      ],
      pensar: 'Tyndale dio su vida para que un labrador pudiera leer la Biblia. Hoy la tienes en tu teléfono. ¿Cuánto tiempo le dedicas realmente?'
    },
    {
      id: 'espanol', n: 'La Biblia en español antes de Reina', ref: 'Salmo 119:130; Hechos 8:30-31',
      fecha: [1280, 1559],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-espanol.svg', alt: 'Línea de tiempo de la Biblia en español: Biblia alfonsina (siglo XIII), Biblia de Alba (1430), Biblia de Ferrara (1553), Nuevo Testamento de Enzinas (1543), de Pérez de Pineda (1556), Biblia del Oso de Casiodoro de Reina (1569), revisión de Cipriano de Valera (1602), revisiones de 1862, 1909 y 1960', pie: 'Siete siglos de la Biblia en español.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Traducciones al español anteriores a 1569',
          cab: ['Traducción', 'Fecha', 'Características'],
          filas: [
            ['Biblias medievales (prealfonsina y alfonsina)', 'Siglo XIII', 'Traducidas de la Vulgata; la de Alfonso X se incluye en su General Estoria'],
            ['Biblias romanceadas judías', 'Siglos XIII–XV', 'Antiguo Testamento traducido del hebreo por judíos de Castilla'],
            ['Biblia de Alba', '1422–1433', 'El rabino Moisés Arragel traduce el Antiguo Testamento del hebreo para un noble castellano'],
            ['Biblia de Ferrara', '1553', 'Antiguo Testamento de los judíos sefardíes expulsados, muy literal'],
            ['Nuevo Testamento de Francisco de Enzinas', '1543', 'Primero traducido del griego al español, impreso en Amberes'],
            ['Nuevo Testamento de Juan Pérez de Pineda', '1556', 'Impreso en Ginebra para los creyentes españoles']
          ]
        } }
      ],
      texto: [
        'La historia de la Biblia en español comienza mucho antes de la Reina-Valera. Ya en el siglo XIII, cuando el castellano se convertía en lengua escrita, se tradujeron partes de la Biblia desde el latín de la Vulgata. El rey Alfonso X el Sabio incluyó gran parte de la Biblia en su General Estoria, una historia del mundo.',
        { h: 'Las traducciones judías' },
        'En la España medieval vivían muchos judíos, y algunos tradujeron el Antiguo Testamento directamente del hebreo al castellano. La más notable es la Biblia de Alba, preparada entre 1422 y 1433 por el rabino Moisés Arragel. Después de la expulsión de los judíos en 1492, los sefardíes conservaron sus traducciones; en 1553 publicaron en Ferrara, Italia, un Antiguo Testamento en castellano muy literal, que Casiodoro de Reina consultó después.',
        { h: 'Prohibida en su propia tierra' },
        'Con la Reforma, varios españoles quisieron que su pueblo leyera la Escritura. Francisco de Enzinas tradujo el Nuevo Testamento del griego, lo imprimió en Amberes en 1543 y lo presentó al emperador Carlos V; por ello fue encarcelado, aunque logró escapar. Juan Pérez de Pineda publicó otro Nuevo Testamento en Ginebra en 1556. Pero en España, el índice de libros prohibidos de 1559 vedó la Biblia en lengua vulgar. Durante más de dos siglos, leer la Biblia en castellano fue un delito en el propio país donde se hablaba esa lengua. Las Biblias se imprimían en el extranjero y entraban escondidas, en toneles o entre mercaderías.',
        'El eunuco etíope tenía el libro de Isaías en las manos, pero necesitó que alguien le explicara: «¿Y cómo podré, si alguno no me enseñare?» (Hch 8:31). Durante siglos, el pueblo hispano no tuvo ni siquiera el libro. Esa sed explica el valor que tuvo la obra de Casiodoro de Reina, que se estudia en la próxima estación.',
        { ejercicio: {
          pregunta: '¿Por qué el Nuevo Testamento de Enzinas y el de Pérez de Pineda se imprimieron fuera de España?',
          opciones: [
            { t: 'Porque en España no había imprentas.', ok: false, por_que: 'España tenía imprentas desde el siglo XV; el problema no era técnico.' },
            { t: 'Porque en España estaba prohibido publicar y leer la Biblia en lengua del pueblo.', ok: true, por_que: 'Las autoridades persiguieron estas traducciones, y en 1559 el índice de libros prohibidos las vedó.' },
            { t: 'Porque se escribieron para lectores de otros países que hablaban español.', ok: false, por_que: 'Se escribieron pensando en los españoles, y se introducían en España a escondidas.' }
          ],
          explicacion: 'La Biblia en español nació en el exilio. Quienes la tradujeron arriesgaron su libertad y su vida para que su pueblo pudiera leerla.'
        } }
      ],
      pensar: 'Hubo un tiempo en que leer la Biblia en tu propia lengua era un delito. ¿Qué te dice eso sobre el privilegio de tenerla libremente hoy?'
    },
    {
      id: 'reina-valera', n: 'Casiodoro de Reina y Cipriano de Valera', ref: 'Isaías 40:8; Salmo 12:6-7; Mateo 24:35',
      fecha: [1569, 1960],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/casiodoro-basilea.webp', alt: 'Casiodoro de Reina, un hombre de unos cincuenta años con barba castaña entrecana y ropa negra de erudito del siglo XVI, revisa un pliego recién impreso en un taller de imprenta de Basilea', pie: 'Casiodoro de Reina en Basilea, 1569 (recreación).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Fotografía', src: 'img/biblia-del-oso.webp', alt: 'Portada de la Biblia del Oso de 1569, con el grabado de un oso que come miel de un panal en un árbol', pie: 'Portada de la Biblia del Oso (Basilea, 1569).', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Tres revisiones', tabla: {
          titulo: 'El mismo versículo en tres revisiones de la Reina-Valera',
          cab: ['Pasaje', 'Revisión de 1865', 'Revisión de 1909', 'Revisión de 1960'],
          filas: [
            ['Mateo 6:11', '@@rv1865:mt/6/11', '@@rv1909:mt/6/11', '@@mt/6/11'],
            ['Génesis 4:1', '@@rv1865:gn/4/1', '@@rv1909:gn/4/1', '@@gn/4/1'],
            ['1 Pedro 1:13', '@@rv1865:1p/1/13', '@@rv1909:1p/1/13', '@@1p/1/13']
          ],
          nota: 'Las revisiones actualizan la ortografía y el vocabulario, y ajustan algunas frases al original.'
        } }
      ],
      texto: [
        'Casiodoro de Reina nació hacia 1520 en Montemolín, en Extremadura, y fue monje en el monasterio de San Isidoro del Campo, cerca de Sevilla. Allí, un grupo de monjes leyó libros de la Reforma y la Escritura, y abrazó el evangelio. Cuando la Inquisición comenzó a perseguirlos, en 1557, Reina y otros huyeron. Varios de los que se quedaron murieron en la hoguera.',
        { h: 'Doce años de trabajo en el exilio' },
        'Reina vivió como refugiado en Ginebra, Londres, Amberes y Fráncfort, perseguido incluso fuera de España, mientras traducía. Trabajó desde el hebreo y el griego, consultando las mejores ediciones y traducciones de su tiempo, incluida la Biblia de Ferrara. En 1569, en Basilea, se imprimió la primera Biblia completa en español traducida de las lenguas originales. Por el grabado de su portada, un oso que come miel de un panal, se la llama Biblia del Oso. En la misma portada, Reina puso un versículo: «la palabra del Dios nuestro permanece para siempre» (Is 40:8).',
        'Reina incluyó los libros apócrifos intercalados en el Antiguo Testamento, como se acostumbraba en su tiempo, aunque explicó que no tenían la autoridad de los demás.',
        { h: 'La revisión de Valera' },
        'Cipriano de Valera, otro de los monjes de San Isidoro que había huido en 1557, dedicó veinte años a revisar la traducción de Reina. Su edición se imprimió en Ámsterdam en 1602. Reunió los apócrifos en una sección aparte, entre los dos Testamentos, y corrigió muchos detalles. Desde entonces se la llama Reina-Valera, en honor a los dos.',
        { h: 'Revisiones posteriores' },
        'La lengua cambia, y una traducción fiel necesita revisiones. En el siglo XIX, las sociedades bíblicas publicaron varias revisiones (entre ellas las de 1862 y 1865), sin los apócrifos. Siguió la de 1909, que muchos leyeron durante medio siglo, y en 1960 la revisión de las Sociedades Bíblicas con un comité de pastores y biblistas de América Latina. La Reina-Valera 1960 es hasta hoy la Biblia de la mayoría de los evangélicos de habla hispana. En la pestaña «Tres revisiones» se ve cómo un mismo versículo se actualizó con el tiempo.',
        { ejercicio: {
          pregunta: '¿Por qué se llama Reina-Valera a la traducción que leemos?',
          opciones: [
            { t: 'Porque la encargaron una reina de España y un noble llamado Valera.', ok: false, por_que: 'No tiene nada que ver con la realeza: Reina es el apellido del traductor, Casiodoro de Reina.' },
            { t: 'Porque la tradujo Casiodoro de Reina (1569) y la revisó Cipriano de Valera (1602).', ok: true, por_que: 'El nombre honra al traductor y a su primer revisor, dos exmonjes de San Isidoro que huyeron de la Inquisición.' },
            { t: 'Porque fue traducida en las ciudades de Reina y de Valera, en España.', ok: false, por_que: 'Se imprimió fuera de España, en Basilea (1569) y en Ámsterdam (1602), porque en España estaba prohibida.' }
          ],
          explicacion: 'Cada vez que dices «Reina-Valera» nombras a dos creyentes que arriesgaron la vida para que el pueblo hispano tuviera la Biblia.'
        } }
      ],
      pensar: 'Reina puso en la portada de su Biblia que la palabra de Dios permanece para siempre, y cuatro siglos y medio después la seguimos leyendo. ¿Qué parte de esa historia te anima a perseverar en tu propio servicio?'
    },
    {
      id: 'formas', n: 'Formas de traducir', ref: 'Romanos 3:4; Génesis 4:1; 1 Pedro 1:13',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-espectro.svg', alt: 'Espectro de traducciones: a la izquierda, equivalencia formal (palabra por palabra): interlineal, La Biblia de las Américas, Reina-Valera 1960, Biblia Textual; al centro, Nueva Versión Internacional; a la derecha, equivalencia dinámica (idea por idea): Nueva Traducción Viviente, Dios Habla Hoy, Traducción en Lenguaje Actual; en el extremo, paráfrasis', pie: 'Del texto más literal al más libre.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres decisiones de traducción',
          cab: ['Pasaje', 'Literalmente', 'Reina-Valera 1960', 'Una traducción dinámica diría'],
          filas: [
            ['Romanos 3:4', 'que no llegue a ser', 'De ninguna manera', '¡Claro que no!'],
            ['Génesis 4:1', 'Adán conoció a Eva', 'Conoció Adán a su mujer Eva', 'Adán tuvo relaciones con Eva'],
            ['1 Pedro 1:13', 'ceñid los lomos de vuestra mente', 'ceñid los lomos de vuestro entendimiento', 'preparen su mente para actuar']
          ],
          nota: 'La última columna muestra el tipo de solución que eligen las versiones dinámicas, sin citar una versión en particular.'
        } }
      ],
      texto: [
        'Traducir no es cambiar cada palabra por su equivalente en el diccionario. Cada lengua tiene su gramática, sus giros y sus imágenes. Todo traductor tiene que decidir cuánto se acerca a la forma del original y cuánto a la forma natural del español.',
        { h: 'Equivalencia formal' },
        'Una traducción de equivalencia formal sigue de cerca las palabras y la estructura del original, aunque el resultado suene menos natural. La Reina-Valera, La Biblia de las Américas y la Biblia Textual son de este tipo. Su ventaja es que permiten ver los detalles del texto: una misma palabra traducida igual en varios pasajes, una imagen hebrea conservada. Son las más útiles para el estudio detallado. Su desventaja es que a veces conservan expresiones que el lector actual no entiende, como «ceñid los lomos de vuestro entendimiento» (1 P 1:13), una imagen de quien se recoge la túnica para correr.',
        { h: 'Equivalencia dinámica' },
        'Una traducción de equivalencia dinámica o funcional busca que el lector de hoy entienda lo mismo que entendía el lector original, aunque use otras palabras. Dios Habla Hoy, la Nueva Traducción Viviente y la Traducción en Lenguaje Actual son de este tipo. Su ventaja es la claridad, sobre todo para quien recién empieza a leer la Biblia. Su riesgo es que el traductor interpreta más, y a veces decide por el lector un sentido que el original deja abierto. La Nueva Versión Internacional busca un punto intermedio.',
        { h: 'La paráfrasis' },
        'Una paráfrasis vuelve a contar el texto con libertad, a menudo a partir de otra traducción y no del original. Puede ayudar a captar el tono general de un pasaje, pero no sirve para estudiar ni para fundar una doctrina.',
        'Ninguna forma de traducir es perfecta: toda traducción interpreta algo. Por eso es útil comparar.',
        { ejercicio: {
          pregunta: 'Para estudiar con detalle cómo usa Pablo una palabra en varias cartas, ¿qué tipo de traducción conviene usar como base?',
          opciones: [
            { t: 'Una paráfrasis, porque se entiende mejor.', ok: false, por_que: 'La paráfrasis cambia las palabras con libertad; no permite seguir una palabra concreta del original.' },
            { t: 'Una traducción de equivalencia formal, porque tiende a traducir la misma palabra de la misma manera.', ok: true, por_que: 'Al seguir de cerca el original, deja ver dónde se repite una palabra o una imagen.' },
            { t: 'Cualquiera, porque todas traducen cada palabra de la misma manera.', ok: false, por_que: 'Las traducciones dinámicas varían las palabras según el contexto, lo que es útil para leer pero dificulta el estudio de vocabulario.' }
          ],
          explicacion: 'Cada tipo de traducción sirve para algo distinto: la formal para estudiar, la dinámica para entender rápido, y ambas para comparar.'
        } }
      ],
      pensar: 'Toda traducción exige decisiones. ¿Cómo te ayuda saberlo a leer tu Biblia con más atención, y no con menos confianza?'
    },
    {
      id: 'elegir', n: 'Cómo elegir y usar una traducción', ref: 'Hechos 17:11; 2 Timoteo 2:15; Salmo 119:130',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Algunas traducciones al español',
          cab: ['Traducción', 'Año (completa)', 'Tipo', 'Uso recomendado'],
          filas: [
            ['Reina-Valera 1960', '1960', 'Formal; Textus Receptus', 'Lectura, memoria, culto y estudio'],
            ['La Biblia de las Américas', '1986', 'Formal; texto crítico', 'Estudio detallado'],
            ['Biblia Textual', '1999', 'Formal; texto crítico', 'Estudio detallado, con notas sobre manuscritos'],
            ['Nueva Versión Internacional', '1999', 'Intermedia', 'Lectura y estudio'],
            ['Dios Habla Hoy', '1979', 'Dinámica', 'Lectura y nuevos lectores'],
            ['Nueva Traducción Viviente', '2010', 'Dinámica', 'Lectura y comparación'],
            ['Traducción en Lenguaje Actual', '2003', 'Dinámica, lenguaje sencillo', 'Niños y nuevos lectores']
          ],
          nota: 'Las Biblias católicas en español, como la de Nácar-Colunga (1944) o la Biblia de Jerusalén, incluyen además los libros deuterocanónicos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@hch/17/11', ref: 'Hechos 17:11' }
      ],
      texto: [
        'Hoy existen decenas de traducciones de la Biblia al español. Esa abundancia es una bendición, pero puede confundir. ¿Cuál conviene usar?',
        { h: 'Una Biblia base' },
        'Conviene tener una traducción base para leer, memorizar y estudiar, y usar siempre la misma para que el texto se grabe en la memoria. Para la mayoría de las iglesias hispanas esa versión es la Reina-Valera 1960: es la que se lee en el culto, la que citan los himnos y los predicadores, y la que permite memorizar en comunidad. Es una traducción formal, fiel y probada por generaciones. Este sitio la usa en todos sus recursos.',
        { h: 'Comparar para entender' },
        'Al estudiar un pasaje difícil, ayuda mucho leerlo en otras traducciones. Si las versiones formales y las dinámicas coinciden, el sentido es claro. Si difieren, la diferencia señala un punto que merece estudio: una palabra difícil del original, una construcción ambigua o una variante de los manuscritos. La comparación no sirve para elegir la versión que dice lo que uno quiere, sino para ver mejor lo que dice el texto.',
        { h: 'Herramientas de estudio' },
        'Las notas al pie de muchas Biblias explican traducciones alternativas y variantes de manuscritos. Una Biblia interlineal pone debajo de cada palabra hebrea o griega su equivalente en español. Una concordancia permite encontrar todos los pasajes donde aparece una palabra. Con estas herramientas, el creyente que no sabe hebreo ni griego puede acercarse mucho al texto original.',
        { h: 'Tres cuidados' },
        'Primero, no fundar una doctrina en un solo versículo de una sola traducción, y menos en una paráfrasis. Segundo, desconfiar de una versión que cambia la enseñanza clara de la Escritura para acomodarla a una secta: algunas traducciones hechas por grupos que niegan la divinidad de Cristo modifican pasajes como Juan 1:1. Tercero, no despreciar a quien lee otra traducción fiel. Los de Berea son el modelo: escudriñaban «cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11).',
        { ejercicio: {
          pregunta: 'Lees un versículo en dos traducciones y dicen cosas bastante distintas. ¿Qué es lo más prudente?',
          opciones: [
            { t: 'Elegir la que mejor apoya lo que ya pensabas.', ok: false, por_que: 'Eso es usar la Biblia para confirmar opiniones, no para escuchar a Dios.' },
            { t: 'Concluir que la Biblia no se puede entender.', ok: false, por_que: 'Las diferencias suelen ser pocas y señalan un punto que se puede estudiar.' },
            { t: 'Ver qué dicen otras traducciones, las notas al pie y el contexto, para entender la dificultad del original.', ok: true, por_que: 'La diferencia es una señal de que el pasaje merece más estudio, y las herramientas permiten resolverla.' }
          ],
          explicacion: 'Comparar traducciones es una forma de escudriñar las Escrituras. El objetivo es entender mejor lo que Dios dijo, no elegir lo que preferimos.'
        } }
      ],
      pensar: '¿Tienes una Biblia base que conozcas bien? ¿Qué herramienta podrías sumar este mes para estudiarla mejor?'
    },
    {
      id: 'todos-pueblos', n: 'Hasta el último pueblo', ref: 'Apocalipsis 7:9-10; Mateo 24:14; Romanos 10:14-17',
      fecha: 2025,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/traductores-hoy.webp', alt: 'En una comunidad indígena de los Andes, un equipo de traductores y hablantes de la lengua revisa en un computador portátil y en hojas impresas un pasaje recién traducido', pie: 'Traductores y hablantes de una lengua indígena revisan un pasaje.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La traducción de la Biblia en 2025',
          cab: ['Dato', 'Cifra'],
          filas: [
            ['Lenguas vivas en el mundo', '7.396'],
            ['Lenguas con algún trabajo de traducción en curso', '4.457'],
            ['Lenguas que todavía esperan que se inicie la traducción', '544'],
            ['Personas que hablan esas 544 lenguas', '36,8 millones'],
            ['Población mundial con acceso a alguna porción de la Escritura', 'Más del 99 %']
          ],
          nota: 'Fuente: Wycliffe Global Alliance, estadísticas al 1 de agosto de 2025.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ap/7/9-10', ref: 'Apocalipsis 7:9-10' }
      ],
      texto: [
        'La historia de la Biblia no terminó con la Reina-Valera. Hoy, miles de traductores, lingüistas y hablantes nativos siguen trabajando para que la Escritura llegue a cada lengua. Es una de las grandes obras misioneras de nuestro tiempo.',
        { h: 'Cuánto falta' },
        'Según la Wycliffe Global Alliance, en agosto de 2025 se hablaban en el mundo 7.396 lenguas. Más del 99 % de la población mundial tiene acceso a alguna porción de la Escritura en una lengua que entiende, y hay trabajo de traducción en curso en 4.457 lenguas. Pero 544 lenguas, habladas por casi 37 millones de personas, todavía esperan que alguien comience a traducir la Biblia. Muchas más tienen solo algunos libros o el Nuevo Testamento.',
        { h: 'En América Latina' },
        'Nuestro continente tiene cientos de lenguas indígenas, desde México hasta la Patagonia. Pueblos de habla quechua, aimara o guaraní tienen hoy la Biblia completa en su lengua, y otros siguen esperando. La traducción moderna se hace en equipo: traductores formados en hebreo y griego, consultores y, sobre todo, hablantes de la lengua que revisan si el texto se entiende y suena natural. Cada traducción es también un acto de amor por un pueblo, porque le dice que Dios habla su idioma.',
        { h: 'La meta' },
        'Pablo preguntó: «¿Y cómo oirán sin haber quien les predique?» (Ro 10:14), y concluyó que «la fe es por el oír, y el oír, por la palabra de Dios» (Ro 10:17). Jesús anunció que el evangelio sería predicado «en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin» (Mt 24:14). La visión de Apocalipsis muestra el resultado: una multitud que nadie puede contar, de toda lengua, alabando al Cordero. Cada Biblia traducida acerca ese día.',
        'Aquí termina el recorrido de este recurso. La Palabra que Dios reveló e inspiró fue escrita, copiada con cuidado durante siglos, comprobada por miles de testigos y traducida con sacrificio, hasta llegar a tus manos. Ahora te toca leerla, obedecerla y llevarla a otros.',
        { ejercicio: {
          pregunta: 'Según Romanos 10:14-17, ¿por qué importa que la Palabra llegue a cada pueblo?',
          opciones: [
            { t: 'Porque la fe nace de oír la palabra de Dios, y nadie puede creer en lo que no ha oído.', ok: true, por_que: 'Es el argumento de Pablo: invocar, creer, oír y predicar forman una cadena que comienza con la Palabra.' },
            { t: 'Porque cada pueblo necesita una revelación distinta y adaptada a su cultura.', ok: false, por_que: 'La revelación es una sola para todos; lo que se adapta es la lengua en que se comunica, no el mensaje.' },
            { t: 'Porque Dios solo salva a quienes leen la Biblia en su lengua materna.', ok: false, por_que: 'Pablo no pone esa condición. Afirma que la fe viene por el oír la Palabra, y por eso hay que llevarla a todos.' }
          ],
          explicacion: 'La traducción de la Biblia está al servicio de la Gran Comisión: que todos puedan oír, creer e invocar el nombre del Señor.'
        } }
      ],
      pensar: 'Hay millones de personas que todavía no tienen ni un versículo en su lengua. ¿Cómo podrías apoyar, con oración, ofrenda o servicio, que la Palabra llegue a ellos?'
    }
  ];

  const M = window.__MANUSCRITOS;
  delete window.__MANUSCRITOS;
  window.RUTA_DATA = {
    titulo: 'De la Biblia a nosotros',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Reina-Valera 1909 y 1865: dominio público.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'escritura', grupo: 'De la Biblia a nosotros', n: 'I. Cómo se escribió y se copió', info: 'Materiales, lenguas, originales y copias, escribas y copistas', estaciones: M.escritura,
        linea: { desde: -1500, hasta: 400, hitos: [
          { a: -1446, t: 'Moisés escribe la ley' }, { a: -445, t: 'Esdras' },
          { a: [50, 95], t: 'Se escribe el NT' }, { a: 313, t: 'Fin de las persecuciones' }
        ] } },
      { id: 'antiguo', grupo: 'De la Biblia a nosotros', n: 'II. El texto del Antiguo Testamento', info: 'Ketef Hinnom, los masoretas, Qumrán y las versiones antiguas', estaciones: M.antiguo,
        linea: { desde: -700, hasta: 2000, hitos: [
          { a: -600, t: 'Ketef Hinnom' }, { a: [-250, 68], t: 'Rollos de Qumrán' },
          { a: [600, 1000], t: 'Masoretas' }, { a: 1947, t: 'Hallazgo de Qumrán' }
        ] } },
      { id: 'nuevo', grupo: 'De la Biblia a nosotros', n: 'III. El texto del Nuevo Testamento', info: 'Papiros, códices, crítica textual y pasajes discutidos', estaciones: M.nuevo,
        linea: { desde: 0, hasta: 2030, hitos: [
          { a: [50, 95], t: 'Se escribe el NT' }, { a: [300, 360], t: 'Vaticano y Sinaítico' },
          { a: 1516, t: 'Erasmo' }, { a: 1881, t: 'Westcott y Hort' }
        ] } },
      { id: 'traducciones', grupo: 'De la Biblia a nosotros', n: 'IV. Las traducciones', info: 'De Jerónimo y la Reforma a la Reina-Valera y las lenguas que esperan', estaciones: traducciones,
        linea: { desde: 300, hasta: 2030, hitos: [
          { a: 405, t: 'Vulgata' }, { a: 1455, t: 'Gutenberg' },
          { a: 1569, t: 'Biblia del Oso' }, { a: 1960, t: 'RV 1960' }
        ] } }
    ]
  };
})();
