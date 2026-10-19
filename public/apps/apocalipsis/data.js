/* ==========================================================
   Recursos Bíblicos — Apocalipsis · contenido de las rutas
   Estudio de libro: rutas I a IV fijas, más mapas y temas (misma estructura que Hechos y Daniel).
   Motor: ../assets/js/ruta-estudio.js. Geografía: ../assets/js/imperios-geo.js.
   Línea: autoría del apóstol Juan, c. 95 d.C. bajo Domiciano; lectura futurista de los capítulos 4 a 22;
   premilenial y pretribulacional. Las posturas distintas van en bloques { posturas }.
   Se apoya en Los últimos tiempos, Daniel, el imperio romano y Los viajes de Pablo.
   Citas textuales: Reina-Valera 1960. Los pasajes de las pestañas «Pasaje» se copian
   de public/biblia/rv1960 al armar el archivo (herramientas/apocalipsis_citas.py).
   ========================================================== */
(() => {
  const OTRA = '../';
  const IMG = 'img/';
  const ESC = OTRA + 'escatologia/img/', RO = OTRA + 'imperio-romano/img/', GR = OTRA + 'imperio-griego/img/';
  const BA = OTRA + 'imperio-babilonico/img/', DA = OTRA + 'daniel/img/', IH = OTRA + 'imperios-historia/img/';
  const ASIA = [[36.7, 25.9], [39.6, 30.0]];
  const MUNDO = [[27.0, 8.0], [45.5, 50.0]];

  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', src, alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo) => ({ tipo: 'imagen', titulo: titulo || 'Esquema', src, alt, pie, origen: 'esquema' });
  const tabla = (titulo, t) => ({ tipo: 'tabla', titulo, tabla: t });
  const pasaje = (texto, ref, titulo) => ({ tipo: 'cita', titulo: titulo || 'Pasaje', texto, ref });
  const mapa = (estado, titulo) => ({ tipo: 'mapa', titulo: titulo || 'Mapa', estado });
  const IGLESIAS = ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia', 'laodicea'];

  /* ---------------- Ruta I · Introducción y trasfondo ---------------- */
  const introduccion = [
    {
      id: 'portada', n: 'Apocalipsis', ref: 'Apocalipsis 1:1-3; 22:6-7, 16-21', fecha: 95,
      visual: [
        img(IMG + 'apo-lectura-iglesia.webp', 'En una casa de una ciudad de Asia del siglo I, un lector de pie lee en voz alta un rollo a un grupo de creyentes sentados, a la luz de lámparas de aceite', '«Bienaventurado el que lee, y los que oyen las palabras de esta profecía» (Ap 1:3).'),
        pasaje('La revelación de Jesucristo, que Dios le dio, para manifestar a sus siervos las cosas que deben suceder pronto; y la declaró enviándola por medio de su ángel a su siervo Juan, que ha dado testimonio de la palabra de Dios, y del testimonio de Jesucristo, y de todas las cosas que ha visto. Bienaventurado el que lee, y los que oyen las palabras de esta profecía, y guardan las cosas en ella escritas; porque el tiempo está cerca.', 'Apocalipsis 1:1-3')
      ],
      texto: [
        'El último libro de la Biblia comienza diciendo de qué se trata: «La revelación de Jesucristo, que Dios le dio, para manifestar a sus siervos las cosas que deben suceder pronto» (Ap 1:1). La palabra griega del título, apokálypsis, significa «quitar el velo»: el libro no fue escrito para esconder, sino para mostrar. Y lo que muestra, ante todo, es a Jesucristo.',
        'Muchos creyentes se acercan al Apocalipsis con temor o lo dejan de lado porque parece difícil. Sin embargo, es el único libro de la Biblia que promete una bendición especial a quien lo lee: «Bienaventurado el que lee, y los que oyen las palabras de esta profecía, y guardan las cosas en ella escritas; porque el tiempo está cerca» (Ap 1:3). La promesa incluye a los que oyen, porque el libro se escribió para ser leído en voz alta en las iglesias, y a los que guardan, porque no se escribió solo para satisfacer la curiosidad, sino para cambiar la vida.',
        { h: 'Un libro para iglesias reales' },
        'Juan escribió desde la isla de Patmos a siete iglesias de la provincia romana de Asia, en lo que hoy es Turquía. Eran congregaciones pequeñas, presionadas por el culto al emperador, por la hostilidad de sus vecinos y por maestros que enseñaban a acomodarse al mundo. A ellas Cristo les reveló que la historia no está en manos de Roma, sino de Dios, y que al final el Cordero vence.',
        { h: 'Cómo recorrer este estudio' },
        'El estudio tiene la misma estructura que los de Hechos y Daniel. Las cuatro primeras rutas recorren el libro: esta introducción, una visión panorámica, un comentario capítulo por capítulo y la teología del Apocalipsis. Una ruta de mapas visita las siete iglesias de Asia, y dos rutas de temas presentan los símbolos y las verdades del libro para la vida diaria.',
        'El orden de los eventos del fin se desarrolla con más detalle en el recurso Los últimos tiempos, que este estudio usa como base. Toda cita bíblica del texto se puede tocar para leerla.'
      ],
      pensar: 'El Apocalipsis promete bendición al que lee, oye y guarda sus palabras (Ap 1:3). ¿Con cuál de esas tres actitudes necesitas acercarte hoy a este libro?'
    },
    {
      id: 'autor', n: 'El autor: Juan', ref: 'Apocalipsis 1:1, 4, 9; 22:8; Juan 21:20-24; Marcos 3:17; Gálatas 2:9', fecha: 95,
      visual: [
        img(RO + 'roma-juan-patmos.webp', 'El anciano apóstol Juan escribe en un rollo en una cueva de la isla de Patmos, con el mar Egeo a lo lejos', 'Juan en la isla de Patmos (Ap 1:9).'),
        tabla('Testimonios', {
          titulo: 'Quién escribió Apocalipsis',
          cab: ['Testimonio', 'Fuente'],
          filas: [
            ['El autor se llama Juan cuatro veces', 'Ap 1:1, 4, 9; 22:8'],
            ['Es siervo de Cristo, hermano y compañero en la tribulación', 'Ap 1:1, 9'],
            ['Las iglesias de Asia lo conocían sin más presentación', 'Ap 1:4, 11'],
            ['Justino Mártir, en Éfeso c. 135, lo atribuye al apóstol Juan', 'Diálogo con Trifón 81'],
            ['Ireneo, discípulo de Policarpo, que conoció a Juan', 'Contra las herejías IV.20.11; V.30.3'],
            ['Tertuliano, Clemente de Alejandría y Orígenes lo atribuyen al apóstol', 'Siglos II y III']
          ]
        })
      ],
      texto: [
        'El autor se presenta cuatro veces con un nombre sencillo: Juan (Ap 1:1, 4, 9; 22:8). No dice «apóstol», sino «vuestro hermano, y copartícipe vuestro en la tribulación» (Ap 1:9). Que bastara el nombre muestra que las iglesias de Asia lo conocían muy bien.',
        { h: 'El testimonio de la iglesia antigua' },
        'Los escritores cristianos más cercanos a Juan lo identifican con el apóstol, hijo de Zebedeo y hermano de Jacobo. Justino Mártir, que vivió en Éfeso hacia el año 135, dice que «Juan, uno de los apóstoles de Cristo» recibió esta revelación. Ireneo, que de joven escuchó a Policarpo de Esmirna, discípulo de Juan, afirma lo mismo. La tradición también ubica a Juan en Éfeso en sus últimos años, a cargo de las iglesias de la región.',
        'Juan fue uno de los tres discípulos más cercanos a Jesús, junto con Pedro y Jacobo. Jesús lo llamó, con su hermano, «Boanerges, esto es, Hijos del trueno» (Mr 3:17), y Pablo lo nombró entre las columnas de la iglesia de Jerusalén (Gá 2:9). Es el discípulo que se recostó junto a Jesús en la última cena y que escribió el cuarto evangelio y tres cartas.',
        { posturas: {
          titulo: '¿El apóstol o otro Juan?',
          a: { n: 'El apóstol Juan', t: 'Es la postura de la iglesia del siglo II (Justino, Ireneo) y de la mayoría de los evangélicos. Explica por qué el autor no necesita presentarse y por qué comparte con el evangelio de Juan títulos de Cristo como el Verbo y el Cordero (Jn 1:1, 29; Ap 19:13; 5:6).' },
          b: { n: 'Otro Juan', t: 'Dionisio de Alejandría (siglo III) notó que el griego del Apocalipsis es más áspero que el del evangelio y propuso a otro Juan, quizás un «Juan el anciano» mencionado por Papías.' },
          c: 'Este estudio sigue la autoría del apóstol. La diferencia de estilo se explica por el género, distinto al de un evangelio, por las visiones escritas tal como fueron vistas, y quizás porque en Patmos Juan no contaba con un secretario que puliera el griego.'
        } }
      ],
      pensar: 'El «hijo del trueno» terminó su vida llamándose «vuestro hermano, y copartícipe vuestro en la tribulación» (Ap 1:9). ¿Qué te enseña ese cambio sobre lo que el Señor hace con el carácter de sus siervos?'
    },
    {
      id: 'patmos-fecha', n: 'Patmos y la fecha', ref: 'Apocalipsis 1:9-11; 2:10, 13; 6:9-11; 17:6', fecha: 95,
      visual: [
        mapa({ view: [[35.9, 25.4], [39.0, 28.8]], capas: ['roma-14'], lugares: ['patmos', 'efeso', 'mileto'] }),
        tabla('Fecha', {
          titulo: 'Las dos fechas propuestas',
          cab: ['', 'Fecha tardía', 'Fecha temprana'],
          filas: [
            ['Emperador', 'Domiciano (81–96 d.C.)', 'Nerón (54–68 d.C.)'],
            ['Año', 'c. 95 d.C.', 'c. 65–68 d.C.'],
            ['Testimonio antiguo', 'Ireneo, Clemente de Alejandría, Eusebio', 'Algunas versiones siríacas tardías'],
            ['Estado de las iglesias', 'Éfeso ya dejó su primer amor; Laodicea es rica tras su terremoto del 60 d.C.', 'Iglesias más jóvenes'],
            ['Seguida por', 'La mayoría de los comentaristas y este estudio', 'Comentaristas preteristas']
          ]
        })
      ],
      texto: [
        'Juan escribe desde Patmos, una isla pequeña y rocosa del mar Egeo, a unos 100 km al suroeste de Éfeso. No estaba allí de paseo: «yo Juan… estaba en la isla llamada Patmos, por causa de la palabra de Dios y el testimonio de Jesucristo» (Ap 1:9). Roma solía castigar con el destierro a una isla a quienes consideraba un peligro para el orden público.',
        { h: 'Bajo Domiciano' },
        'Ireneo, a fines del siglo II, escribió que la visión fue vista hacia el final del reinado de Domiciano. Eusebio añade que Juan fue liberado tras la muerte del emperador, en el año 96, y volvió a Éfeso. Domiciano exigía honores divinos; según el historiador Suetonio, sus funcionarios lo llamaban «nuestro señor y dios». En Asia se le dedicó un gran templo en Éfeso, y negarse a ofrecer incienso a su imagen podía costar caro.',
        'Por eso el libro habla de cárcel en Esmirna (Ap 2:10), de un mártir en Pérgamo (Ap 2:13) y de almas «de los que habían sido muertos por causa de la palabra de Dios» (Ap 6:9). La persecución de Domiciano no fue tan sistemática como las posteriores, pero era real y anunciaba lo que vendría.',
        { posturas: {
          titulo: '¿Bajo Domiciano o bajo Nerón?',
          a: { n: 'Fecha tardía, c. 95', t: 'Se apoya en el testimonio más antiguo (Ireneo) y en el estado de las iglesias: Éfeso ha perdido su primer amor, Laodicea se jacta de su riqueza después de reconstruirse sola del terremoto del año 60, y la iglesia de Esmirna parece llevar tiempo establecida.' },
          b: { n: 'Fecha temprana, c. 68', t: 'Propone que el libro se escribió bajo Nerón, antes de la destrucción de Jerusalén, y que sus profecías se cumplieron en gran parte en el año 70. Es la base de la lectura preterista.' },
          c: 'Este estudio sigue la fecha tardía, que es la del testimonio antiguo. Con ella, la destrucción de Jerusalén ya había ocurrido, y las profecías de los capítulos 4 a 22 apuntan al futuro.'
        } }
      ],
      pensar: 'Juan estaba desterrado «por causa de la palabra de Dios», y justamente allí recibió la revelación más amplia del futuro (Ap 1:9). ¿Cómo puede Dios usar un lugar de pérdida en tu vida para mostrarte más de Cristo?'
    },
    {
      id: 'asia', n: 'Las iglesias de Asia y su mundo', ref: 'Apocalipsis 1:4, 11; 2:9-10, 13-14, 20; 3:9, 17; Hechos 19:10', fecha: 95,
      visual: [
        img(RO + 'roma-culto-emperador.webp', 'Un templo romano dedicado al emperador, con su estatua en el interior y ciudadanos ofreciendo incienso ante un altar', 'El culto al emperador, una presión diaria para las iglesias de Asia.'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: IGLESIAS, trazos: ['siete-iglesias'] }),
        tabla('Presiones', {
          titulo: 'Lo que enfrentaban las siete iglesias',
          cab: ['Presión', 'Cómo se manifestaba', 'Pasajes'],
          filas: [
            ['El culto al emperador', 'Templos, fiestas y ofrendas de incienso como prueba de lealtad', 'Ap 2:13; 13:4, 15'],
            ['La hostilidad de la sinagoga', 'Acusaciones ante las autoridades', 'Ap 2:9; 3:9'],
            ['Los gremios y el comercio', 'Banquetes con comida sacrificada a ídolos', 'Ap 2:14, 20'],
            ['Los falsos maestros', 'Nicolaítas, Balaam y Jezabel: acomodarse al mundo', 'Ap 2:6, 14-15, 20'],
            ['La riqueza y la comodidad', 'Autosuficiencia y tibieza', 'Ap 3:17']
          ]
        })
      ],
      texto: [
        'La provincia romana de Asia ocupaba el oeste de la actual Turquía. Era una de las regiones más ricas del imperio, llena de ciudades griegas con teatros, templos, mercados y puertos. El evangelio había llegado allí con fuerza en los años de Pablo en Éfeso, cuando «todos los que habitaban en Asia, judíos y griegos, oyeron la palabra del Señor Jesús» (Hch 19:10).',
        'Las siete ciudades del Apocalipsis forman un círculo sobre los grandes caminos de la provincia. Un mensajero que desembarcara en Éfeso podía recorrerlas en el mismo orden en que aparecen las cartas: Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea (Ap 1:11). Había otras iglesias en la región, como Colosas y Hierápolis, pero siete representan a todas.',
        { h: 'Las presiones de cada día' },
        'Ser cristiano en Asia a fines del siglo I no era fácil. Las ciudades competían por construir templos al emperador, y las fiestas cívicas incluían sacrificios. Los artesanos y comerciantes pertenecían a gremios cuyos banquetes se celebraban en honor de algún dios, con carne sacrificada a los ídolos. Negarse significaba quedar fuera de la vida económica y social.',
        'Además, los judíos tenían permiso legal para no adorar al emperador, y mientras los cristianos fueron vistos como parte de la sinagoga gozaron de esa protección. Cuando la separación se hizo evidente, algunos judíos los acusaban ante las autoridades (Ap 2:9). Y dentro de las iglesias había maestros que enseñaban que se podía participar en todo eso sin problema (Ap 2:14, 20).',
        'Las cartas de los capítulos 2 y 3 responden a esa situación. El resto del libro muestra el fondo de la batalla: detrás de la presión de Roma está el dragón, y detrás de la victoria de los fieles está el Cordero que fue inmolado.'
      ],
      pensar: 'Los creyentes de Asia enfrentaban la presión de acomodarse para no perder su lugar en la sociedad (Ap 2:14, 20). ¿Qué presiones parecidas enfrentas tú, y qué te ayuda a mantenerte fiel?'
    },
    {
      id: 'genero', n: 'Un libro con tres géneros', ref: 'Apocalipsis 1:1, 3-4, 11; 22:7, 10, 18-19, 21', fecha: 95,
      visual: [
        tabla('Géneros', {
          titulo: 'Apocalipsis: tres géneros en un libro',
          cab: ['Género', 'Cómo lo dice el libro', 'Qué significa para leerlo'],
          filas: [
            ['Apocalíptico', '«La revelación de Jesucristo» (1:1)', 'Visiones, símbolos, ángeles y el choque entre el reino de Dios y los reinos del mundo, como en Daniel y Zacarías'],
            ['Profecía', '«Las palabras de esta profecía» (1:3; 22:7, 10, 18-19)', 'Palabra de Dios que anuncia lo que vendrá y llama al arrepentimiento y a la fidelidad'],
            ['Carta', '«Juan, a las siete iglesias…: Gracia y paz a vosotros» (1:4); «La gracia… sea con todos» (22:21)', 'Escrita a iglesias reales del siglo I; lo que significó para ellas guía la aplicación de hoy']
          ]
        }),
        img(IMG + 'apo-mensajero-patmos.webp', 'Al amanecer, un mensajero cristiano con un rollo envuelto en tela sube a un pequeño barco de vela en el puerto de piedra de la isla de Patmos, rumbo a Éfeso', 'El libro viajó como una carta a siete iglesias (Ap 1:11).')
      ],
      texto: [
        'Para entender bien un libro de la Biblia hay que saber qué tipo de libro es. Apocalipsis combina tres géneros, y el propio texto los nombra en sus primeros versículos.',
        { h: 'Apocalíptico' },
        'La primera palabra del libro es apokálypsis, revelación (Ap 1:1). En tiempos de Juan se escribían muchos libros judíos de este tipo, pero el modelo bíblico es Daniel, junto con partes de Ezequiel y Zacarías. Lo apocalíptico usa visiones, símbolos, números y ángeles que explican, y muestra el conflicto entre el reino de Dios y los imperios del mundo, con la victoria final de Dios. A diferencia de otros escritos de la época, Juan no escribe bajo el nombre de un personaje antiguo: firma con su propio nombre, como un profeta de su tiempo.',
        { h: 'Profecía' },
        'Juan llama a su libro «esta profecía» al comienzo y al final (Ap 1:3; 22:7, 10, 18-19). La profecía bíblica anuncia el futuro, pero siempre con un propósito moral: que el pueblo de Dios se arrepienta, se mantenga fiel y espere. Por eso el libro termina con advertencias solemnes a quien añada o quite de sus palabras (Ap 22:18-19).',
        { h: 'Carta' },
        'Después del prólogo, el libro se abre como una carta: «Juan, a las siete iglesias que están en Asia: Gracia y paz a vosotros» (Ap 1:4), y se cierra con una bendición, como las cartas de Pablo (Ap 22:21). Esto recuerda que el libro tenía sentido para sus primeros lectores. Aunque gran parte de lo que anuncia todavía es futuro, desde el primer día sirvió para consolar, corregir y animar a iglesias reales.',
        'Leer el Apocalipsis como los tres a la vez evita dos errores: tratarlo solo como un código para descifrar el futuro o solo como un mensaje del siglo I sin cumplimiento futuro.'
      ],
      pensar: 'El Apocalipsis fue a la vez revelación del futuro y carta para iglesias que sufrían. ¿Cómo cambia tu lectura del libro saber que fue escrito primero para animar a creyentes en dificultades?'
    },
    {
      id: 'simbolos', n: 'Cómo leer los símbolos', ref: 'Apocalipsis 1:20; 5:5-6; 12:9; 17:9, 12, 15, 18; 19:8; 21:9-10', fecha: 95,
      visual: [
        tabla('Símbolos', {
          titulo: 'El libro explica sus propios símbolos',
          cab: ['Símbolo', 'Explicación', 'Pasaje'],
          filas: [
            ['Siete estrellas', 'Los ángeles de las siete iglesias', 'Ap 1:20'],
            ['Siete candeleros', 'Las siete iglesias', 'Ap 1:20'],
            ['El incienso', 'Las oraciones de los santos', 'Ap 5:8'],
            ['El gran dragón', 'La serpiente antigua, el diablo y Satanás', 'Ap 12:9'],
            ['Siete cabezas', 'Siete montes y siete reyes', 'Ap 17:9-10'],
            ['Diez cuernos', 'Diez reyes', 'Ap 17:12'],
            ['Las aguas', 'Pueblos, muchedumbres, naciones y lenguas', 'Ap 17:15'],
            ['La mujer de Ap 17', 'La gran ciudad que reina sobre los reyes de la tierra', 'Ap 17:18'],
            ['El lino fino', 'Las acciones justas de los santos', 'Ap 19:8'],
            ['La esposa del Cordero', 'La santa ciudad, la nueva Jerusalén', 'Ap 21:9-10']
          ]
        })
      ],
      texto: [
        'El Apocalipsis está lleno de imágenes: candeleros, estrellas, bestias, una mujer vestida del sol, una ciudad de oro. ¿Cómo saber qué es literal y qué es simbólico? Algunos principios ayudan a no perderse.',
        { h: 'El libro explica sus símbolos' },
        'Muchas veces el propio texto da la clave. Las siete estrellas «son los ángeles de las siete iglesias», y los siete candeleros «son las siete iglesias» (Ap 1:20). El dragón es «la serpiente antigua, que se llama diablo y Satanás» (Ap 12:9). Las aguas son «pueblos, muchedumbres, naciones y lenguas» (Ap 17:15). Cuando el libro explica un símbolo, esa explicación manda.',
        { h: 'El Antiguo Testamento es el diccionario' },
        'Juan casi no cita el Antiguo Testamento con fórmulas como «está escrito», pero alude a él en casi cada página. El trono de Ezequiel 1, las bestias de Daniel 7, las plagas de Egipto, los candeleros de Zacarías 4 y la Babilonia de Jeremías 50 y 51 son el fondo de sus visiones. Antes de buscar el significado de un símbolo en los periódicos, hay que buscarlo en la Biblia.',
        { h: 'Símbolos que señalan realidades' },
        'Un símbolo no significa que lo descrito sea irreal. Cuando Juan ve «un Cordero como inmolado» (Ap 5:6), la imagen señala a una persona real, Jesucristo, y a un hecho real, su muerte en la cruz. Las visiones usan imágenes para describir personas y acontecimientos verdaderos. Por eso este estudio sigue un principio sencillo: se lee el texto en su sentido normal, salvo cuando el propio texto indica que se trata de un símbolo o cuando el sentido literal es imposible.',
        'Los números también tienen valor: el siete expresa plenitud, el doce al pueblo de Dios, y los tiempos de tres años y medio repiten los de Daniel. La ruta Los símbolos del Apocalipsis los presenta con más detalle.'
      ],
      pensar: 'El Apocalipsis se interpreta con el resto de la Biblia antes que con las noticias del día. ¿Qué lugar ocupa el Antiguo Testamento en tu manera de estudiar la profecía?'
    },
    {
      id: 'escuelas', n: 'Cuatro maneras de leer el libro', ref: 'Apocalipsis 1:1, 19; 4:1; 22:6', fecha: 95,
      visual: [
        tabla('Escuelas', {
          titulo: 'Las cuatro escuelas de interpretación',
          cab: ['Escuela', 'Qué enseña', 'Capítulos 4–22'],
          filas: [
            ['Preterista', 'La mayor parte del libro se cumplió en el siglo I, con la caída de Jerusalén (70 d.C.) o de Roma', 'Pasado'],
            ['Historicista', 'El libro describe la historia de la iglesia desde Juan hasta el fin, época por época', 'Toda la historia'],
            ['Idealista', 'El libro presenta principios del conflicto entre el bien y el mal, sin hechos concretos', 'Sin tiempo definido'],
            ['Futurista', 'Los capítulos 1 a 3 describen el tiempo de Juan; desde el 4, los hechos que rodean la venida de Cristo', 'Futuro: la semana setenta de Daniel']
          ],
          nota: 'Este estudio sigue la lectura futurista, la de la escatología premilenial y dispensacionalista.'
        })
      ],
      texto: [
        'A lo largo de la historia, los cristianos han leído el Apocalipsis de cuatro maneras principales. Conocerlas ayuda a entender por qué los comentarios dicen cosas tan distintas sobre los mismos capítulos.',
        { h: 'Preterista' },
        'Para esta escuela, la mayor parte del libro se cumplió poco después de escrito: en la destrucción de Jerusalén en el año 70 o en la caída de la Roma pagana. Tiene razón en tomar en serio a los primeros lectores, pero deja sin cumplir la segunda venida tal como el libro la describe, o la reduce a un símbolo.',
        { h: 'Historicista' },
        'Lee el libro como un mapa de la historia de la iglesia: cada sello o trompeta sería una época, como las invasiones bárbaras o el surgimiento del islam. Fue la lectura de muchos reformadores, pero sus intérpretes nunca se pusieron de acuerdo, y las fechas que propusieron fallaron una y otra vez.',
        { h: 'Idealista' },
        'Entiende el libro como un cuadro simbólico de la lucha entre el bien y el mal, válido para todas las épocas, sin acontecimientos concretos. Rescata la aplicación espiritual, pero pierde el carácter profético que el libro reclama para sí.',
        { h: 'Futurista' },
        'Toma la clave del propio libro: «Escribe las cosas que has visto, y las que son, y las que han de ser después de estas» (Ap 1:19). Los capítulos 2 y 3 son «las que son», la era de la iglesia; y en el capítulo 4 Juan oye: «Sube acá, y yo te mostraré las cosas que sucederán después de estas» (Ap 4:1). Desde ahí, el libro describe hechos futuros que coinciden con la semana setenta de Daniel, la venida de Cristo, el milenio y el estado eterno.',
        'Este estudio sigue la lectura futurista. Al mismo tiempo, recoge lo mejor de las otras: el mensaje para los primeros lectores, la mirada de Dios sobre la historia y los principios espirituales que valen para todo creyente.'
      ],
      pensar: 'La frase «después de estas» (Ap 1:19; 4:1) marca el paso de la era de la iglesia a lo que vendrá. ¿Por qué crees que es importante para tu esperanza que el libro hable de hechos reales y futuros, y no solo de principios?'
    },
    {
      id: 'tema', n: 'El propósito y el mensaje', ref: 'Apocalipsis 1:7-8; 5:5; 11:15; 17:14; 19:16; 22:20', fecha: 95,
      visual: [
        pasaje('He aquí que viene con las nubes, y todo ojo le verá, y los que le traspasaron; y todos los linajes de la tierra harán lamentación por él. Sí, amén. Yo soy el Alfa y la Omega, principio y fin, dice el Señor, el que es y que era y que ha de venir, el Todopoderoso.', 'Apocalipsis 1:7-8', 'Versículo clave'),
        img(ESC + 'esc-segunda-venida.webp', 'El cielo abierto y Cristo glorioso montado en un caballo blanco, con muchas coronas y un manto teñido en sangre', '«He aquí que viene con las nubes» (Ap 1:7).')
      ],
      texto: [
        'Si hubiera que resumir el Apocalipsis en una frase, podría ser esta: Jesucristo vuelve, vence y reina. El versículo clave lo anuncia al comienzo: «He aquí que viene con las nubes, y todo ojo le verá, y los que le traspasaron; y todos los linajes de la tierra harán lamentación por él» (Ap 1:7).',
        { h: 'Un libro sobre Cristo' },
        'La revelación es «de Jesucristo» en dos sentidos: viene de él y trata de él. Cristo aparece como el Hijo del Hombre glorificado entre los candeleros (cap. 1), el Señor que conoce a sus iglesias (caps. 2–3), el Cordero digno de abrir el libro (cap. 5), el Rey de reyes que viene a la tierra (cap. 19), el que reina mil años (cap. 20) y el Esposo de la nueva Jerusalén (caps. 21–22). Quien lee el Apocalipsis buscando solo fechas y bestias pierde su centro.',
        { h: 'Cinco propósitos' },
        'El libro fue escrito para revelar a Cristo en su gloria; para corregir a las iglesias que se enfriaban o se acomodaban al mundo; para consolar a los que sufrían, mostrándoles que su sangre no se pierde y que Dios hará justicia (Ap 6:10-11); para anunciar el plan de Dios sobre el futuro, desde la tribulación hasta la nueva creación; y para llamar a la adoración, porque el cielo entero se postra ante el trono y el Cordero.',
        { h: 'El final de la historia' },
        'El Apocalipsis cierra la Biblia mostrando el cumplimiento de todo lo que comenzó en Génesis. Lo que se perdió en el Edén, el árbol de la vida y la presencia de Dios, se recupera en la nueva Jerusalén. La serpiente que engañó al hombre es lanzada al lago de fuego. Y la última oración de la Biblia es la respuesta de la iglesia a la promesa de Cristo: «Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús» (Ap 22:20).'
      ],
      pensar: 'El libro termina con la oración «Amén; sí, ven, Señor Jesús» (Ap 22:20). ¿Puedes hacer tuya esa oración con alegría? ¿Qué tendría que cambiar en tu vida para hacerla con más anhelo?'
    }
  ];

  /* ---------------- Ruta II · Visión panorámica ---------------- */
  const panorama = [
    {
      id: 'vistazo', n: 'El libro de un vistazo', ref: 'Apocalipsis 1:19; 4:1',
      visual: [
        esq(IMG + 'apo-estructura.svg', 'Esquema de Apocalipsis en tres partes según 1:19, con una barra de los 22 capítulos coloreada por secciones', 'El bosquejo que el propio libro propone (Ap 1:19).'),
        pasaje('Escribe las cosas que has visto, y las que son, y las que han de ser después de estas.', 'Apocalipsis 1:19')
      ],
      texto: [
        'Apocalipsis tiene 22 capítulos y 404 versículos. A primera vista parece un torbellino de visiones, pero el propio libro ofrece su bosquejo. Cristo le dice a Juan: «Escribe las cosas que has visto, y las que son, y las que han de ser después de estas» (Ap 1:19).',
        { h: 'Las cosas que has visto (cap. 1)' },
        'Es la visión de Cristo glorificado en medio de siete candeleros de oro, que Juan acababa de ver. Todo el libro depende de ella: antes de mostrar el futuro, Dios muestra quién gobierna el futuro.',
        { h: 'Las que son (caps. 2–3)' },
        'Son las siete cartas a las iglesias de Asia. Describen la situación de iglesias reales en tiempos de Juan, y también la de la iglesia en todo el tiempo que va desde entonces hasta la venida del Señor. En estos capítulos la palabra «iglesia» aparece una y otra vez.',
        { h: 'Las que han de ser después de estas (caps. 4–22)' },
        'En 4:1 se repite la expresión: «Sube acá, y yo te mostraré las cosas que sucederán después de estas». Desde ahí el libro describe lo que viene después de la era de la iglesia: la escena del trono en el cielo (4–5), los juicios de la tribulación con sellos, trompetas y copas (6–16), la caída de Babilonia (17–18), la segunda venida de Cristo (19), el milenio y el juicio final (20), y los cielos nuevos y la tierra nueva (21–22).',
        'Así, el libro se mueve del presente al futuro, del cielo a la tierra y de la lucha a la victoria. Las rutas de este estudio siguen ese mismo orden.'
      ],
      pensar: 'El libro comienza con la visión de Cristo antes de mostrar el futuro. ¿Por qué es importante conocer primero a Cristo antes de tratar de entender los acontecimientos del fin?'
    },
    {
      id: 'bosquejo', n: 'El bosquejo', ref: 'Apocalipsis 1–22',
      visual: [
        tabla('Bosquejo', {
          titulo: 'Bosquejo de Apocalipsis',
          cab: ['Sección', 'Contenido', 'Capítulos'],
          filas: [
            ['Prólogo', 'Título, bendición, saludo y anuncio de la venida', '1:1-8'],
            ['I. Lo que has visto', 'Cristo glorificado entre los candeleros', '1:9-20'],
            ['II. Lo que es', 'Las cartas a las siete iglesias', '2–3'],
            ['III. Lo que será', 'El trono de Dios y el Cordero con el libro', '4–5'],
            ['', 'Los siete sellos; interludio: 144.000 y la gran multitud', '6–8:1'],
            ['', 'Las siete trompetas; interludio: el librito y los dos testigos', '8:2–11'],
            ['', 'La mujer, el dragón, las dos bestias y el Cordero en Sion', '12–14'],
            ['', 'Las siete copas de la ira', '15–16'],
            ['', 'La caída de Babilonia', '17–18'],
            ['', 'Las bodas del Cordero y la segunda venida', '19'],
            ['', 'El milenio y el gran trono blanco', '20'],
            ['', 'Cielos nuevos, tierra nueva y la nueva Jerusalén', '21–22:5'],
            ['Epílogo', 'Vengo pronto: últimas advertencias e invitación', '22:6-21']
          ]
        })
      ],
      texto: [
        'Este bosquejo sigue la estructura de 1:19 y la desarrolla en secciones más pequeñas. Conviene tenerlo a mano mientras se recorre el comentario.',
        { h: 'Un prólogo y un epílogo que se parecen' },
        'El libro comienza y termina con las mismas ideas: Dios reveló estas cosas a sus siervos por medio de su ángel (Ap 1:1; 22:6), el tiempo está cerca (Ap 1:3; 22:10), es bienaventurado el que guarda la profecía (Ap 1:3; 22:7) y Cristo viene (Ap 1:7; 22:20). Entre ese marco se ubica todo lo demás.',
        { h: 'Las series de siete' },
        'La parte central del libro avanza por series de siete juicios: sellos, trompetas y copas. Entre una serie y otra hay pausas, que muchos llaman interludios o paréntesis: el capítulo 7, el pasaje de 10:1 a 11:14 y los capítulos 12 a 14. En ellos el relato se detiene para mostrar qué pasa con el pueblo de Dios mientras caen los juicios, o para presentar a los protagonistas del conflicto.',
        { h: 'Dos ciudades al final' },
        'Hacia el final, el libro contrasta dos ciudades presentadas como dos mujeres: Babilonia, la gran ramera, que cae (caps. 17–18), y la nueva Jerusalén, la esposa del Cordero, que desciende del cielo (caps. 21–22). Incluso las frases con que el ángel invita a Juan a ver una y otra son casi iguales (Ap 17:1; 21:9). El mensaje es claro: hay que elegir a qué ciudad pertenecer.',
        'Cada sección del bosquejo corresponde a una o más estaciones del comentario capítulo por capítulo.'
      ],
      pensar: 'El libro contrasta a Babilonia, que cae, con la nueva Jerusalén, que permanece. ¿En qué aspectos de tu vida sientes la atracción de Babilonia, y cómo te ayuda esta visión a elegir la otra ciudad?'
    },
    {
      id: 'septenarios', n: 'Los septenarios', ref: 'Apocalipsis 1:4, 12, 16, 20; 5:1, 6; 6:1; 8:1-2; 11:15; 15:1, 7',
      visual: [
        esq(IMG + 'apo-septenarios.svg', 'Esquema de los siete sellos, siete trompetas y siete copas, con sus interludios y flechas que muestran que cada serie sale de la anterior', 'Sellos, trompetas y copas.'),
        tabla('Los sietes', {
          titulo: 'El número siete en Apocalipsis',
          cab: ['Serie', 'Pasaje'],
          filas: [
            ['Siete iglesias, candeleros y estrellas', 'Ap 1:11-20'],
            ['Siete espíritus delante del trono', 'Ap 1:4; 4:5; 5:6'],
            ['Siete lámparas de fuego', 'Ap 4:5'],
            ['Siete sellos', 'Ap 5:1; 6:1–8:1'],
            ['Siete cuernos y siete ojos del Cordero', 'Ap 5:6'],
            ['Siete trompetas', 'Ap 8:2–11:19'],
            ['Siete truenos', 'Ap 10:3-4'],
            ['Siete cabezas del dragón y de la bestia', 'Ap 12:3; 13:1; 17:9'],
            ['Siete ángeles con las siete plagas postreras', 'Ap 15:1'],
            ['Siete copas de la ira', 'Ap 16'],
            ['Siete bienaventuranzas', 'Ap 1:3; 14:13; 16:15; 19:9; 20:6; 22:7, 14']
          ]
        })
      ],
      texto: [
        'El siete es el número que más se repite en Apocalipsis: aparece más de cincuenta veces. En la Biblia, desde los siete días de la creación, expresa lo completo, lo terminado por Dios. Por eso hay siete iglesias, siete espíritus, siete sellos, siete trompetas y siete copas.',
        { h: 'Tres series que crecen' },
        'Los juicios de la tribulación llegan en tres series de siete. El esquema muestra cómo se relacionan: cuando se abre el séptimo sello, no ocurre un juicio aislado, sino que aparecen siete ángeles con siete trompetas (Ap 8:1-2). Y cuando suena la séptima trompeta, se anuncia que «los reinos del mundo han venido a ser de nuestro Señor y de su Cristo» (Ap 11:15), y más adelante salen los siete ángeles con «las siete plagas postreras» (Ap 15:1). Cada serie sale de la anterior.',
        'También crece la intensidad. Con el cuarto sello muere la cuarta parte de la tierra (Ap 6:8); las trompetas afectan la tercera parte (Ap 8:7-12); y las copas alcanzan a toda la tierra, al mar entero y a los ríos (Ap 16). Dios juzga paso a paso, dando oportunidad al arrepentimiento, aunque el libro registra con tristeza que los hombres «no se arrepintieron» (Ap 9:20-21; 16:9, 11).',
        { h: 'Sucesión y no repetición' },
        'Algunos intérpretes ven en las tres series el mismo período contado tres veces desde distintos ángulos. Este estudio, siguiendo la lectura futurista, las entiende como sucesivas, aunque con pausas que retroceden para explicar. Esa lectura respeta el orden que el texto marca con expresiones como «después de esto» y con la numeración de los juicios.',
        'Hay un último siete que no es de juicio: las siete bienaventuranzas que salpican el libro, desde «Bienaventurado el que lee» (Ap 1:3) hasta «Bienaventurados los que lavan sus ropas» (Ap 22:14).'
      ],
      pensar: 'Aun en medio de los juicios, el libro registra que los hombres «ni aun así se arrepintieron» (Ap 9:20). ¿Qué te dice esto sobre la paciencia de Dios y sobre el peligro de endurecer el corazón?'
    },
    {
      id: 'cronologia', n: 'Los capítulos 6 a 19 en la semana setenta', ref: 'Daniel 9:24-27; Apocalipsis 11:2-3; 12:6, 14; 13:5; Mateo 24:15-21',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: ESC + 'juicios-apocalipsis.svg', alt: 'Esquema de los sellos, trompetas y copas distribuidos en los siete años de la semana setenta, con la mitad marcada por la abominación', pie: 'Los juicios de Apocalipsis en la semana setenta de Daniel.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Plan completo', src: ESC + 'esquema-completo.svg', alt: 'Esquema del plan profético: la era de la iglesia, el arrebatamiento, la tribulación de siete años, la segunda venida, el milenio, el gran trono blanco y la eternidad', pie: 'El plan profético que sigue este estudio.', origen: 'esquema' }
      ],
      texto: [
        'Para ubicar en el tiempo los capítulos 6 a 19, el Apocalipsis remite al libro de Daniel. El ángel Gabriel anunció a Daniel setenta semanas de años para Israel; sesenta y nueve se cumplieron hasta el Mesías, y la última, una semana de siete años, quedó para el fin, cuando un príncipe hará un pacto con muchos y a la mitad de la semana hará cesar el sacrificio (Dn 9:26-27).',
        { h: 'Las medidas de tiempo' },
        'Apocalipsis usa las mismas medidas que Daniel para la mitad de esa semana: cuarenta y dos meses, mil doscientos sesenta días, y «un tiempo, y tiempos, y la mitad de un tiempo» (Ap 11:2-3; 12:6, 14; 13:5). Todas equivalen a tres años y medio. Jesús habló de la segunda mitad como la «gran tribulación, cual no la ha habido desde el principio del mundo hasta ahora» (Mt 24:21), que comienza cuando se pone en el lugar santo «la abominación desoladora de que habló el profeta Daniel» (Mt 24:15).',
        { h: 'Cómo se ordenan los juicios' },
        'Este estudio sigue el esquema del recurso Los últimos tiempos. Los sellos se abren al comienzo de la semana setenta; las trompetas se extienden hacia su mitad; los dos testigos profetizan mil doscientos sesenta días; la bestia recibe autoridad durante cuarenta y dos meses en la segunda mitad; y las copas caen al final, poco antes de la venida de Cristo en el capítulo 19. La ubicación exacta de algunos juicios es discutida aun entre quienes comparten esta lectura, y el esquema la presenta de forma aproximada.',
        { h: 'Antes y después' },
        'Antes de la semana setenta, la iglesia es arrebatada para estar con el Señor, como se ve en la ruta de teología. Después vienen la segunda venida, el milenio, el gran trono blanco y la eternidad. El segundo esquema muestra el plan completo.',
        { ir: { t: 'Abrir el recurso Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'Dios midió los tiempos del fin con exactitud, hasta los días (Ap 12:6). ¿Qué seguridad te da saber que aun los tiempos más difíciles tienen un límite puesto por Dios?'
    },
    {
      id: 'palabras', n: 'Palabras y versículos clave', ref: 'Apocalipsis 1:7, 19; 3:21; 5:9-10; 11:15; 12:11; 19:16; 21:5; 22:20',
      visual: [
        tabla('Palabras', {
          titulo: 'Palabras clave (Reina-Valera 1960)',
          cab: ['Palabra', 'Veces', 'Qué destaca'],
          filas: [
            ['Siete', 'Más de 50', 'La plenitud de la obra de Dios'],
            ['Trono', 'Más de 40', 'Dios gobierna; todo se ve desde su trono'],
            ['Bestia', 'Más de 30', 'El poder mundial opuesto a Dios'],
            ['Cordero (referido a Cristo)', '28', 'Cristo vence por su sacrificio'],
            ['Adorar', 'Unas 20', 'La pregunta del libro: a quién se adora'],
            ['El que venciere', '8', 'Siete promesas a las iglesias y una a todos los redimidos (21:7)'],
            ['Bienaventurado', '7', 'La bendición del que guarda la palabra']
          ],
          nota: 'Conteos aproximados en la RV 1960; incluyen las formas de cada palabra (tronos, adoraron, etc.).'
        }),
        tabla('Versículos', {
          titulo: 'Versículos para memorizar',
          cab: ['Pasaje', 'Tema'],
          filas: [
            ['Ap 1:7', 'La venida visible de Cristo'],
            ['Ap 1:19', 'El bosquejo del libro'],
            ['Ap 3:20', 'Cristo llama a la puerta'],
            ['Ap 5:9', 'El cántico del Cordero redentor'],
            ['Ap 11:15', 'El reino del mundo pasa a Cristo'],
            ['Ap 12:11', 'Vencer por la sangre y el testimonio'],
            ['Ap 19:16', 'Rey de reyes y Señor de señores'],
            ['Ap 21:4', 'Dios enjugará toda lágrima'],
            ['Ap 22:20', 'Ven, Señor Jesús']
          ]
        })
      ],
      texto: [
        'Las palabras que un autor repite muestran lo que quiere destacar. En Apocalipsis, algunas palabras sostienen todo el libro.',
        { h: 'El trono' },
        'La palabra trono aparece más de cuarenta veces; en el griego original, Apocalipsis reúne la gran mayoría de sus apariciones en el Nuevo Testamento. Desde el capítulo 4, todo lo que ocurre en la tierra se ve desde el trono del cielo, donde Dios está sentado. Los imperios suben y caen, pero el trono de Dios nunca está vacío ni en peligro.',
        { h: 'El Cordero' },
        'Cristo es llamado Cordero veintiocho veces. Es sorprendente: en un libro lleno de guerras, el título favorito de Cristo es el de un animal manso que fue sacrificado. Juan oye anunciar a «el León de la tribu de Judá», pero cuando mira ve «un Cordero como inmolado» (Ap 5:5-6). Cristo vence por su sacrificio, y por eso es digno.',
        { h: 'Vencer' },
        'Cada una de las siete cartas termina con una promesa «al que venciere» (Ap 2:7, 11, 17, 26; 3:5, 12, 21). Y la clave de esa victoria aparece en 12:11: «ellos le han vencido por medio de la sangre del Cordero y de la palabra del testimonio de ellos, y menospreciaron sus vidas hasta la muerte».',
        { h: 'Adorar' },
        'El libro pregunta, en el fondo, a quién se adora. En el cielo, todos adoran a Dios y al Cordero (Ap 4–5). En la tierra, los moradores adoran al dragón y a la bestia (Ap 13:4, 8). Por eso el evangelio eterno llama: «Temed a Dios, y dadle gloria… y adorad a aquel que hizo el cielo y la tierra» (Ap 14:7).',
        'La segunda tabla reúne versículos que vale la pena memorizar para tener presente el mensaje del libro.'
      ],
      pensar: 'El Apocalipsis contrasta la adoración del cielo con la adoración de la bestia en la tierra (Ap 5; 13). ¿Qué cosas compiten hoy por tu adoración, y cómo te ayuda este libro a adorar solo a Dios y al Cordero?'
    },
    {
      id: 'temas', n: 'Los temas principales', ref: 'Apocalipsis 4:11; 5:9-10; 6:10; 11:15; 12:10-11; 19:6-7; 21:3-5',
      visual: [
        tabla('Temas', {
          titulo: 'Temas principales de Apocalipsis',
          cab: ['Tema', 'En una frase', 'Pasajes'],
          filas: [
            ['La soberanía de Dios', 'Dios reina desde su trono sobre toda la historia', 'Ap 4; 11:15-17; 19:6'],
            ['Cristo, el Cordero', 'Vence por su sangre y es digno de toda adoración', 'Ap 5; 17:14; 19:11-16'],
            ['La iglesia fiel', 'Llamada a vencer, arrepentirse y perseverar', 'Ap 2–3; 12:11; 14:12'],
            ['El juicio de Dios', 'Dios es justo y hará justicia a los suyos', 'Ap 6:10; 16:5-7; 19:2'],
            ['La guerra espiritual', 'Detrás de los imperios está el dragón, ya derrotado', 'Ap 12–13; 20:1-3, 10'],
            ['Israel y las naciones', 'Dios cumple sus promesas a Israel y salva a gente de toda nación', 'Ap 7; 11:1-2; 12'],
            ['La adoración', 'El cielo canta, y el libro llama a adorar solo a Dios', 'Ap 4:11; 5:9-14; 15:3-4'],
            ['La nueva creación', 'Dios habitará con su pueblo en un mundo renovado', 'Ap 21–22']
          ]
        }),
        img(ESC + 'esc-libro-sellos.webp', 'En el salón del trono celestial, rodeado de un arco iris de esmeralda, veinticuatro ancianos con coronas de oro se postran ante el trono y ante el Cordero que tiene el libro sellado', 'La soberanía de Dios y la dignidad del Cordero (Ap 5).')
      ],
      texto: [
        'Detrás de la variedad de visiones, el Apocalipsis desarrolla unos pocos temas que atraviesan todo el libro.',
        { h: 'Dios reina' },
        'El tema principal es la soberanía de Dios. Los veinticuatro ancianos proclaman: «Señor, digno eres de recibir la gloria y la honra y el poder; porque tú creaste todas las cosas» (Ap 4:11). Al final, la gran multitud exclama: «¡Aleluya, porque el Señor nuestro Dios Todopoderoso reina!» (Ap 19:6). Ningún imperio, ni Roma ni la bestia, tiene la última palabra.',
        { h: 'El Cordero vence' },
        'La victoria de Dios se consigue por medio de Cristo, que murió y resucitó. El cántico nuevo lo celebra: «tú fuiste inmolado, y con tu sangre nos has redimido para Dios, de todo linaje y lengua y pueblo y nación» (Ap 5:9). El mismo Cordero que murió volverá como Rey de reyes.',
        { h: 'Dios hará justicia' },
        'Las almas de los mártires preguntan: «¿Hasta cuándo, Señor, santo y verdadero, no juzgas y vengas nuestra sangre en los que moran en la tierra?» (Ap 6:10). El libro responde que Dios juzgará con justicia. Los juicios no son arbitrarios: el ángel de las aguas declara que son justos y verdaderos (Ap 16:5-7).',
        { h: 'Fieles hasta el fin' },
        'A la iglesia le toca perseverar. La paciencia de los santos consiste en guardar «los mandamientos de Dios y la fe de Jesús» (Ap 14:12). Los vencedores no son los que evitan el sufrimiento, sino los que se mantienen fieles en él.',
        { h: 'Todo será hecho nuevo' },
        'El último tema es la esperanza: «He aquí, yo hago nuevas todas las cosas» (Ap 21:5). La historia no termina en destrucción, sino en una creación renovada, donde Dios mismo habitará con su pueblo.'
      ],
      pensar: '¿Cuál de estos temas necesitas más en este momento: la soberanía de Dios, la victoria del Cordero, la justicia de Dios, el llamado a perseverar o la esperanza de la nueva creación? ¿Por qué?'
    },
    {
      id: 'biblia', n: 'Apocalipsis en toda la Biblia', ref: 'Génesis 1–3; Apocalipsis 2:7; 12:9; 20:2, 10; 21:1-4, 23; 22:1-5',
      visual: [
        tabla('Génesis y Apocalipsis', {
          titulo: 'El principio y el fin de la Biblia',
          cab: ['Génesis', 'Apocalipsis'],
          filas: [
            ['«En el principio creó Dios los cielos y la tierra» (1:1)', '«Vi un cielo nuevo y una tierra nueva» (21:1)'],
            ['Dios creó las lumbreras para el día y la noche (1:16)', 'La ciudad no tiene necesidad de sol ni de luna (21:23)'],
            ['Un río salía del Edén (2:10)', 'Un río limpio de agua de vida sale del trono (22:1)'],
            ['El árbol de la vida en medio del huerto (2:9)', 'El árbol de la vida a uno y otro lado del río (22:2)'],
            ['La serpiente engaña al hombre (3:1-6)', 'La serpiente antigua es atada y lanzada al lago de fuego (20:2, 10)'],
            ['Entra la maldición (3:17)', '«No habrá más maldición» (22:3)'],
            ['Entran el dolor y la muerte (3:16, 19)', '«Ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor» (21:4)'],
            ['El hombre es echado de la presencia de Dios (3:23-24)', '«Verán su rostro» (22:4)']
          ]
        })
      ],
      texto: [
        'El Apocalipsis no es un libro aislado. Es el final de una historia que comienza en Génesis, y sin él la Biblia quedaría incompleta.',
        { h: 'El paraíso restaurado' },
        'La tabla muestra cómo los últimos capítulos responden a los primeros. En Génesis el hombre pierde el acceso al árbol de la vida y es echado de la presencia de Dios. En Apocalipsis, el árbol de la vida está otra vez al alcance de los redimidos, y «verán su rostro, y su nombre estará en sus frentes» (Ap 22:4). La serpiente que engañó a Eva es identificada como «la serpiente antigua, que es el diablo y Satanás» (Ap 20:2), y su fin queda escrito. Lo que el pecado destruyó, Cristo lo restaura y lo supera: no un huerto, sino una ciudad entera llena de la gloria de Dios.',
        { h: 'Los profetas cumplidos' },
        'Apocalipsis también recoge las promesas de los profetas. Isaías anunció cielos nuevos y tierra nueva (Is 65:17) y un tiempo en que Dios enjugará las lágrimas (Is 25:8). Ezequiel vio un río que sale del templo y árboles cuyas hojas sirven de medicina (Ez 47:1-12). Zacarías vio al Señor reinar sobre toda la tierra (Zac 14:9). Daniel vio al Hijo del Hombre recibir un reino eterno (Dn 7:13-14). Todas estas líneas se juntan en Apocalipsis.',
        { h: 'Los evangelios y las cartas' },
        'El libro desarrolla también lo que Jesús enseñó en el monte de los Olivos sobre la tribulación y su venida (Mt 24), y lo que Pablo escribió sobre el hombre de pecado (2 Ts 2) y la resurrección de los creyentes (1 Ts 4). Leer el Apocalipsis es, en cierto modo, repasar toda la Biblia.'
      ],
      pensar: 'Lo que se perdió en el Edén se recupera en la nueva Jerusalén (Ap 22:1-4). ¿Qué te dice esto sobre la fidelidad de Dios para terminar lo que empezó, también en tu propia vida (Fil 1:6)?'
    }
  ];

  /* ---------------- Ruta III · Comentario capítulo por capítulo (1–11) ---------------- */
  const carta = (ciudad, titulo, elogio, reproche, llamado, promesa) => tabla('La carta', {
    titulo: `La carta a ${ciudad}`,
    cab: ['Parte', 'Contenido'],
    filas: [['Cristo se presenta', titulo], ['Elogio', elogio], ['Reproche', reproche], ['Llamado', llamado], ['Promesa al vencedor', promesa]]
  });
  const comentario = [
    {
      id: 'cap-1', n: 'Capítulo 1: Cristo entre los candeleros', ref: 'Apocalipsis 1',
      visual: [
        img(IMG + 'apo-cristo-glorificado.webp', 'Juan, anciano, cae como muerto ante una figura resplandeciente vestida de una ropa que llega hasta los pies, con un cinto de oro, de pie en medio de siete candeleros de oro; el rostro de la figura queda oculto por una luz intensa', '«Vi siete candeleros de oro, y en medio… uno semejante al Hijo del Hombre» (Ap 1:12-13).'),
        tabla('La visión', {
          titulo: 'Cristo glorificado (Ap 1:13-16)',
          cab: ['Rasgo', 'Qué sugiere', 'Fondo bíblico'],
          filas: [
            ['Ropa hasta los pies y cinto de oro', 'Sacerdote y rey', 'Éx 28:4; Dn 10:5'],
            ['Cabellos blancos como la nieve', 'Eternidad y sabiduría; comparte rasgos del Anciano de días', 'Dn 7:9'],
            ['Ojos como llama de fuego', 'Todo lo ve y lo examina', 'Dn 10:6; Ap 2:18'],
            ['Pies semejantes al bronce bruñido', 'Firmeza y poder para juzgar', 'Ez 1:7; Dn 10:6'],
            ['Voz como estruendo de muchas aguas', 'Autoridad irresistible', 'Ez 43:2'],
            ['Siete estrellas en la diestra', 'Sostiene y gobierna a sus iglesias', 'Ap 1:20'],
            ['Espada aguda de dos filos en la boca', 'Su palabra juzga', 'Is 49:2; He 4:12'],
            ['Rostro como el sol en su fuerza', 'Gloria divina', 'Mt 17:2']
          ]
        })
      ],
      texto: [
        'El capítulo comienza con un prólogo (1:1-8) y sigue con la primera visión (1:9-20). En el saludo, la gracia viene del Dios eterno, «del que es y que era y que ha de venir», de «los siete espíritus que están delante de su trono», que representan al Espíritu Santo en su plenitud, y de Jesucristo, «el testigo fiel, el primogénito de los muertos, y el soberano de los reyes de la tierra» (Ap 1:4-5). Antes de cualquier juicio, el libro alaba al que «nos amó, y nos lavó de nuestros pecados con su sangre» (Ap 1:5).',
        { h: 'En el Espíritu, en el día del Señor' },
        'Juan estaba en Patmos y dice: «Yo estaba en el Espíritu en el día del Señor» (Ap 1:10). El día del Señor es probablemente el domingo, el día de la resurrección, en que los creyentes se reunían. Estar «en el Espíritu» describe un estado en que el Espíritu Santo toma control del profeta para mostrarle realidades que los ojos naturales no ven, como ocurrió con Ezequiel (Ez 3:12-14).',
        { h: 'Uno semejante al Hijo del Hombre' },
        'Al volverse, Juan ve siete candeleros de oro y, en medio, a Cristo glorificado. La tabla muestra cómo cada rasgo retoma imágenes de Daniel y Ezequiel. Llama la atención que tiene cabellos blancos como el Anciano de días de Daniel 7:9: el Hijo comparte la gloria del Padre. Juan, que se había recostado junto a Jesús en la última cena, cae a sus pies como muerto.',
        'Cristo pone su mano sobre él y le dice: «No temas; yo soy el primero y el último; y el que vivo, y estuve muerto; mas he aquí que vivo por los siglos de los siglos, amén. Y tengo las llaves de la muerte y del Hades» (Ap 1:17-18). El título «el primero y el último» es el que Dios usa para sí mismo en Isaías 44:6.',
        { h: 'En medio de las iglesias' },
        'La visión termina explicando que los candeleros son las iglesias y las estrellas sus ángeles, es decir, sus mensajeros o pastores, o bien ángeles que las representan (Ap 1:20). Cristo no está lejos de su pueblo: camina en medio de las iglesias y las sostiene en su mano.'
      ],
      pensar: 'Juan conocía a Jesús de cerca, y aun así cayó a sus pies al verlo glorificado (Ap 1:17). ¿Se parece tu visión de Cristo a la de este capítulo? ¿Qué rasgo de esta visión necesitas recordar hoy?'
    },
    {
      id: 'cap-2a', n: 'Capítulo 2: Éfeso y Esmirna', ref: 'Apocalipsis 2:1-11',
      visual: [
        carta('Éfeso', 'El que tiene las siete estrellas y anda en medio de los candeleros (2:1)', 'Obras, arduo trabajo, paciencia; no soporta a los malos y probó a los falsos apóstoles (2:2-3, 6)', 'Has dejado tu primer amor (2:4)', 'Recuerda, arrepiéntete y haz las primeras obras (2:5)', 'Comer del árbol de la vida en el paraíso de Dios (2:7)'),
        carta('Esmirna', 'El primero y el postrero, el que estuvo muerto y vivió (2:8)', 'Tribulación y pobreza, pero eres rico (2:9)', 'Ninguno', 'No temas; sé fiel hasta la muerte (2:10)', 'La corona de la vida; no sufrirá daño de la segunda muerte (2:10-11)'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso', 'esmirna'] })
      ],
      texto: [
        'Las siete cartas siguen un mismo molde: Cristo se presenta con un rasgo de la visión del capítulo 1, conoce las obras de la iglesia, elogia lo bueno, reprende lo malo, llama al arrepentimiento y promete algo al vencedor. Todas cierran con la misma frase: «El que tiene oído, oiga lo que el Espíritu dice a las iglesias». Cada carta tenía un destinatario concreto, pero el mensaje es para todas.',
        { h: 'Éfeso: la iglesia que perdió su primer amor (2:1-7)' },
        'Éfeso era la ciudad más importante de Asia, y su iglesia tenía una larga historia: Pablo estuvo allí tres años, luego Timoteo, y según la tradición también Juan. Era una iglesia trabajadora, paciente y firme en la doctrina: había probado a los que decían ser apóstoles y los había hallado mentirosos, y aborrecía las obras de los nicolaítas, igual que el Señor (Ap 2:2, 6).',
        'Pero Cristo le dice: «tengo contra ti, que has dejado tu primer amor» (Ap 2:4). Una iglesia puede tener doctrina correcta y mucha actividad, y haber perdido el amor ardiente por Cristo y por los hermanos. El remedio tiene tres pasos: recordar de dónde se ha caído, arrepentirse y volver a hacer las primeras obras. Si no, el Señor quitará su candelero, es decir, dejará de ser una iglesia que alumbra.',
        { h: 'Esmirna: la iglesia que sufre (2:8-11)' },
        'Esmirna recibe solo elogio. Era pobre y estaba perseguida, en parte por judíos que la calumniaban, a quienes Cristo llama «sinagoga de Satanás» porque su oposición servía a los fines del enemigo (Ap 2:9). Cristo no promete librarla del sufrimiento: anuncia que algunos irán a la cárcel y tendrán tribulación «por diez días», un tiempo limitado y medido por Dios.',
        'La promesa es fuerte: «Sé fiel hasta la muerte, y yo te daré la corona de la vida» (Ap 2:10). Quien así vence no sufrirá daño de la segunda muerte, que el libro identifica después con el lago de fuego (Ap 20:14). Hacia el año 155, el anciano Policarpo, obispo de Esmirna y discípulo de Juan, murió quemado por negarse a maldecir a Cristo.'
      ],
      pensar: 'Éfeso tenía buena doctrina pero había dejado su primer amor; Esmirna era pobre pero rica a los ojos de Cristo (Ap 2:4, 9). ¿A cuál de las dos se parece más tu vida espiritual hoy?'
    },
    {
      id: 'cap-2b', n: 'Capítulo 2: Pérgamo y Tiatira', ref: 'Apocalipsis 2:12-29',
      visual: [
        carta('Pérgamo', 'El que tiene la espada aguda de dos filos (2:12)', 'Retienes mi nombre y no has negado mi fe, aun donde está el trono de Satanás (2:13)', 'Tienes a los que retienen la doctrina de Balaam y la de los nicolaítas (2:14-15)', 'Arrepiéntete (2:16)', 'El maná escondido y una piedrecita blanca con un nombre nuevo (2:17)'),
        carta('Tiatira', 'El Hijo de Dios, con ojos como llama de fuego y pies semejantes al bronce bruñido (2:18)', 'Amor, fe, servicio y paciencia; tus obras postreras son más que las primeras (2:19)', 'Toleras a Jezabel, que enseña a fornicar y a comer cosas sacrificadas a los ídolos (2:20)', 'Retened lo que tenéis hasta que yo venga (2:25)', 'Autoridad sobre las naciones y la estrella de la mañana (2:26-28)'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['efeso', 'esmirna', 'pergamo', 'tiatira'] })
      ],
      texto: [
        { h: 'Pérgamo: la iglesia que se acomoda (2:12-17)' },
        'Pérgamo era la antigua capital de la región y un centro religioso, con el gran altar de Zeus, el santuario de Asclepio y el primer templo de Asia dedicado al emperador. Cristo dice que la iglesia mora «donde está el trono de Satanás» (Ap 2:13). Allí había muerto Antipas, «mi testigo fiel». La iglesia no había negado la fe ni siquiera entonces.',
        'Sin embargo, toleraba a quienes enseñaban la doctrina de Balaam. Balaam no pudo maldecir a Israel, pero aconsejó a Balac hacerlo caer con la idolatría y la inmoralidad de los banquetes de Moab (Nm 25:1-2; 31:16). En Pérgamo, algunos enseñaban que los creyentes podían participar de los banquetes de los templos y de sus costumbres. Cristo, que se presenta con la espada de dos filos, advierte que vendrá a pelear contra ellos con la espada de su boca, es decir, con su palabra de juicio.',
        'Al vencedor le promete el maná escondido, el alimento verdadero que contrasta con la carne de los banquetes idólatras, y una piedrecita blanca con un nombre nuevo, quizás como las piedras que servían de entrada a un banquete: el creyente tiene un lugar asegurado en la mesa del Señor.',
        { h: 'Tiatira: la iglesia que tolera (2:18-29)' },
        'Tiatira recibe elogios por su amor, fe, servicio y paciencia, y porque sus obras han crecido (Ap 2:19). Pero toleraba a una mujer a quien Cristo llama Jezabel, como la reina que llevó a Israel a la idolatría (1 R 16:31). Se decía profetisa y enseñaba a los siervos de Cristo a fornicar y a comer cosas sacrificadas a los ídolos. Algunos llamaban a sus enseñanzas «las profundidades de Satanás» (Ap 2:24).',
        'El Hijo de Dios, con ojos como llama de fuego, escudriña «la mente y el corazón» (Ap 2:23). Dio tiempo a esa mujer para arrepentirse, pero ella no quiso. A los demás no les impone otra carga: solo les pide retener lo que tienen hasta que él venga. Al vencedor le promete autoridad sobre las naciones, en cumplimiento del Salmo 2, y «la estrella de la mañana» (Ap 2:28), que es Cristo mismo (Ap 22:16).'
      ],
      pensar: 'Pérgamo y Tiatira toleraban enseñanzas que invitaban a acomodarse al pecado de su cultura (Ap 2:14, 20). ¿Qué enseñanzas parecidas circulan hoy, y cómo puedes discernirlas a la luz de la Palabra?'
    },
    {
      id: 'cap-3a', n: 'Capítulo 3: Sardis y Filadelfia', ref: 'Apocalipsis 3:1-13',
      visual: [
        carta('Sardis', 'El que tiene los siete espíritus de Dios y las siete estrellas (3:1)', 'Unas pocas personas no han manchado sus vestiduras (3:4)', 'Tienes nombre de que vives, y estás muerto (3:1)', 'Sé vigilante, afirma las otras cosas, acuérdate y arrepiéntete (3:2-3)', 'Vestiduras blancas; su nombre no será borrado del libro de la vida (3:5)'),
        carta('Filadelfia', 'El Santo, el Verdadero, el que tiene la llave de David (3:7)', 'Tienes poca fuerza, has guardado mi palabra y no has negado mi nombre (3:8)', 'Ninguno', 'Retén lo que tienes, para que ninguno tome tu corona (3:11)', 'Columna en el templo de Dios, con el nombre de Dios, de la nueva Jerusalén y el nombre nuevo de Cristo (3:12)'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['tiatira', 'sardis', 'filadelfia'] })
      ],
      texto: [
        { h: 'Sardis: la iglesia de apariencias (3:1-6)' },
        'Sardis había sido la capital del rico reino de Lidia y del rey Creso. Su ciudadela, sobre un monte de laderas casi verticales, parecía imposible de tomar, y sin embargo fue tomada por sorpresa dos veces, porque sus defensores no vigilaban. La iglesia se le parecía: «tienes nombre de que vives, y estás muerto» (Ap 3:1). Tenía fama de iglesia viva, pero sus obras no estaban completas delante de Dios.',
        'Cristo la llama a despertar: «Sé vigilante, y afirma las otras cosas que están para morir» (Ap 3:2). Si no vela, él vendrá como ladrón, en la hora que no espera. Aun así, había unas pocas personas que no habían manchado sus vestiduras, y andarán con Cristo «en vestiduras blancas, porque son dignas» (Ap 3:4).',
        'La promesa al vencedor incluye que su nombre no será borrado del libro de la vida. Es una advertencia seria a quienes viven de apariencias, y a la vez una seguridad para el que persevera: Cristo confesará su nombre delante del Padre y de sus ángeles (Ap 3:5; Mt 10:32).',
        { h: 'Filadelfia: la iglesia fiel con poca fuerza (3:7-13)' },
        'Filadelfia, la ciudad más joven de las siete, no recibe ningún reproche. Cristo se presenta como el que tiene «la llave de David», que abre y nadie cierra (Ap 3:7), como Eliaquim en Isaías 22:22. Ante una iglesia débil, rechazada por la sinagoga local, Cristo pone una puerta abierta: oportunidades que nadie puede cerrar.',
        'Luego viene una promesa clave para la escatología: «Por cuanto has guardado la palabra de mi paciencia, yo también te guardaré de la hora de la prueba que ha de venir sobre el mundo entero, para probar a los que moran sobre la tierra» (Ap 3:10). Esa hora de prueba es mundial y futura; la promesa no es ser guardados dentro de ella, sino «de» ella. Este estudio la entiende como un apoyo al arrebatamiento de la iglesia antes de la tribulación, tema que la ruta de teología desarrolla.',
        'Al vencedor, Cristo lo hará columna en el templo de Dios, algo firme y permanente, en una ciudad sacudida tantas veces por los terremotos, y escribirá sobre él el nombre de Dios, de la nueva Jerusalén y su propio nombre nuevo.'
      ],
      pensar: 'Sardis tenía fama sin vida; Filadelfia tenía poca fuerza pero era fiel (Ap 3:1, 8). ¿Qué te importa más: lo que otros piensan de tu vida espiritual o lo que Cristo ve en ella?'
    },
    {
      id: 'cap-3b', n: 'Capítulo 3: Laodicea', ref: 'Apocalipsis 3:14-22',
      visual: [
        carta('Laodicea', 'El Amén, el testigo fiel y verdadero, el principio de la creación de Dios (3:14)', 'Ninguno', 'Ni eres frío ni caliente; dices: soy rico y no tengo necesidad de nada (3:15-17)', 'Compra de mí oro, vestiduras blancas y colirio; sé celoso y arrepiéntete (3:18-19)', 'Sentarse con Cristo en su trono (3:21)'),
        pasaje('Yo reprendo y castigo a todos los que amo; sé, pues, celoso, y arrepiéntete. He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo. Al que venciere, le daré que se siente conmigo en mi trono, así como yo he vencido, y me he sentado con mi Padre en su trono.', 'Apocalipsis 3:19-21'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['filadelfia', 'laodicea', 'hierapolis', 'colosas'] })
      ],
      texto: [
        'La última carta es la más severa: no hay ningún elogio. Cristo se presenta como «el Amén, el testigo fiel y verdadero» (Ap 3:14), el que dice la verdad aunque duela, a una iglesia que se engañaba a sí misma.',
        { h: 'Ni frío ni caliente' },
        '«Yo conozco tus obras, que ni eres frío ni caliente. ¡Ojalá fueses frío o caliente! Pero por cuanto eres tibio, y no frío ni caliente, te vomitaré de mi boca» (Ap 3:15-16). Laodicea no tenía fuentes propias y traía el agua por un acueducto; llegaba tibia y cargada de minerales. Muy cerca, Hierápolis tenía aguas termales, útiles para sanar, y Colosas, agua fría y fresca. Lo caliente y lo frío servían; lo tibio solo producía náuseas. Una iglesia tibia no es de provecho para nadie.',
        { h: 'Rica, pero pobre' },
        'Laodicea era una ciudad de bancos, de lana negra de calidad y conocida por la medicina de los ojos. Cuando un terremoto la destruyó en el año 60, se reconstruyó sin pedir ayuda a Roma. La iglesia había adoptado el mismo orgullo: «Yo soy rico, y me he enriquecido, y de ninguna cosa tengo necesidad» (Ap 3:17). Cristo le responde que es «desventurada, miserable, pobre, ciega y desnuda», y le aconseja comprar de él oro refinado, vestiduras blancas y colirio, justo lo que la ciudad creía tener de sobra.',
        { h: 'Cristo a la puerta' },
        'La carta termina con una de las invitaciones más tiernas de la Biblia: «He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo» (Ap 3:20). Es una iglesia que dejó a Cristo afuera. Aun así, él la ama: «Yo reprendo y castigo a todos los que amo; sé, pues, celoso, y arrepiéntete» (Ap 3:19). La invitación es personal: «si alguno». Y la promesa al vencedor es la más alta: sentarse con Cristo en su trono.',
        { posturas: {
          titulo: '¿Las siete iglesias son también siete épocas?',
          a: { n: 'Solo iglesias del siglo I', t: 'Las cartas se escribieron a siete congregaciones reales, con problemas reales, y su mensaje se aplica a toda iglesia en cualquier época según su condición.' },
          b: { n: 'También un panorama de la era de la iglesia', t: 'Muchos dispensacionalistas ven además en su orden una anticipación de la historia de la iglesia: de la iglesia apostólica (Éfeso) a la iglesia tibia de los últimos días (Laodicea).' },
          c: 'Lo seguro es lo primero: eran iglesias reales y cada carta habla a todas. La lectura por épocas puede ser una aplicación secundaria, pero el texto no la enseña de forma directa, y este estudio no construye doctrina sobre ella.'
        } }
      ],
      pensar: 'Cristo está a la puerta de una iglesia que se creía rica y llama: «si alguno oye mi voz» (Ap 3:20). ¿Hay áreas de tu vida donde has dejado a Cristo afuera? ¿Qué significaría abrirle la puerta hoy?'
    },
    {
      id: 'cap-4', n: 'Capítulo 4: El trono en el cielo', ref: 'Apocalipsis 4',
      visual: [
        img(IMG + 'apo-trono.webp', 'Una sala celestial de luz con un trono resplandeciente rodeado por un arco iris de color esmeralda, un mar de vidrio semejante al cristal delante, siete lámparas de fuego y veinticuatro ancianos vestidos de blanco que echan sus coronas de oro ante el trono', '«He aquí, un trono establecido en el cielo» (Ap 4:2).'),
        tabla('El trono', {
          titulo: 'Lo que rodea el trono',
          cab: ['Elemento', 'Pasaje', 'Fondo bíblico'],
          filas: [
            ['El que está sentado, como jaspe y cornalina', '4:3', 'Ez 1:26-28'],
            ['Arco iris semejante a la esmeralda', '4:3', 'Gn 9:13; Ez 1:28'],
            ['Veinticuatro ancianos con coronas de oro', '4:4, 10', '1 Cr 24:3-19'],
            ['Relámpagos, truenos y voces', '4:5', 'Éx 19:16'],
            ['Siete lámparas: los siete espíritus de Dios', '4:5', 'Zac 4:2, 10'],
            ['Mar de vidrio semejante al cristal', '4:6', 'Éx 24:10; Ez 1:22'],
            ['Cuatro seres vivientes llenos de ojos', '4:6-8', 'Is 6:2-3; Ez 1:5-10']
          ]
        })
      ],
      texto: [
        'Con el capítulo 4 empieza la tercera parte del libro. Juan ve una puerta abierta en el cielo y oye la voz como de trompeta: «Sube acá, y yo te mostraré las cosas que sucederán después de estas» (Ap 4:1). La palabra iglesia, tan repetida en los capítulos 2 y 3, desaparece desde aquí hasta el final del capítulo 19.',
        'Muchos intérpretes dispensacionalistas ven en el llamado a Juan una ilustración del arrebatamiento: una puerta abierta, una voz como de trompeta y un «sube acá», como en 1 Tesalonicenses 4:16. El texto no dice que esto sea el arrebatamiento, pero coincide con el momento en que la iglesia deja de aparecer en la tierra.',
        { h: 'Un trono ocupado' },
        'Lo primero que Juan ve es «un trono establecido en el cielo, y en el trono, uno sentado» (Ap 4:2). Antes de que se desaten los juicios, el libro muestra quién gobierna. Juan no describe el rostro de Dios, sino su resplandor, como de jaspe y cornalina, y un arco iris de esmeralda, señal del pacto de Dios con la creación.',
        { h: 'Los ancianos y los seres vivientes' },
        'Alrededor hay veinticuatro tronos con veinticuatro ancianos vestidos de blanco y con coronas de oro. Muchos los entienden como representantes de los redimidos ya glorificados; el número recuerda los veinticuatro turnos de sacerdotes que David organizó (1 Cr 24). Cerca del trono hay cuatro seres vivientes, con rostros de león, becerro, hombre y águila, que se parecen a los querubines de Ezequiel y a los serafines de Isaías.',
        { h: 'Santo, santo, santo' },
        'Los seres vivientes no cesan de decir: «Santo, santo, santo es el Señor Dios Todopoderoso, el que era, el que es, y el que ha de venir» (Ap 4:8). Y cada vez que lo hacen, los ancianos se postran y echan sus coronas delante del trono, diciendo: «Señor, digno eres de recibir la gloria y la honra y el poder; porque tú creaste todas las cosas, y por tu voluntad existen y fueron creadas» (Ap 4:11).',
        'Todo el resto del libro debe leerse a la luz de esta escena: la historia se desarrolla bajo un trono que nadie puede mover.'
      ],
      pensar: 'Los ancianos echan sus coronas delante del trono (Ap 4:10). ¿Qué «coronas» de tu vida (logros, capacidades, honores) necesitas poner a los pies de Dios en adoración?'
    },
    {
      id: 'cap-5', n: 'Capítulo 5: El Cordero y el libro', ref: 'Apocalipsis 5',
      visual: [
        img(ESC + 'esc-libro-sellos.webp', 'En el salón del trono celestial, rodeado de un arco iris de esmeralda, veinticuatro ancianos con coronas de oro se postran ante el trono y ante el Cordero que tiene el libro sellado', '«Un libro escrito por dentro y por fuera, sellado con siete sellos» (Ap 5:1).'),
        pasaje('y cantaban un nuevo cántico, diciendo: Digno eres de tomar el libro y de abrir sus sellos; porque tú fuiste inmolado, y con tu sangre nos has redimido para Dios, de todo linaje y lengua y pueblo y nación; y nos has hecho para nuestro Dios reyes y sacerdotes, y reinaremos sobre la tierra.', 'Apocalipsis 5:9-10', 'El cántico nuevo')
      ],
      texto: [
        'En la mano derecha del que está sentado en el trono hay un libro, un rollo escrito por dentro y por fuera, sellado con siete sellos (Ap 5:1). Un ángel pregunta en alta voz: «¿Quién es digno de abrir el libro y desatar sus sellos?» Y nadie, ni en el cielo ni en la tierra ni debajo de la tierra, puede hacerlo. Juan llora mucho.',
        { h: 'Qué es el libro' },
        'El rollo contiene el plan de Dios para juzgar al mundo y recuperar la tierra para su Rey: cuando se abren sus sellos, comienzan los juicios del capítulo 6. Algunos lo comparan con un título de propiedad, que en Israel se escribía y sellaba y que solo el pariente con derecho podía abrir para redimir la tierra (Jer 32:6-15). Sea cual sea la imagen exacta, lo importante es que solo uno tiene derecho a ejecutar el plan de Dios sobre la tierra.',
        { h: 'El León que es Cordero' },
        'Uno de los ancianos consuela a Juan: «No llores. He aquí que el León de la tribu de Judá, la raíz de David, ha vencido para abrir el libro» (Ap 5:5). Juan mira esperando ver un león, y ve «un Cordero como inmolado», de pie en medio del trono (Ap 5:6). Es la imagen central de todo el libro: Cristo es el Rey prometido de Judá (Gn 49:9-10), pero ha vencido muriendo como cordero, y está de pie porque resucitó. Tiene siete cuernos, que expresan poder pleno, y siete ojos, que son los siete espíritus de Dios enviados por toda la tierra.',
        { h: 'Toda la creación adora' },
        'Cuando el Cordero toma el libro, comienza una adoración que crece en círculos. Primero los seres vivientes y los ancianos, con arpas y copas de incienso, «que son las oraciones de los santos», cantan un cántico nuevo: «Digno eres… porque tú fuiste inmolado, y con tu sangre nos has redimido para Dios, de todo linaje y lengua y pueblo y nación» (Ap 5:8-9). Luego millones de ángeles. Y al final toda criatura del cielo, de la tierra y del mar adora «al que está sentado en el trono, y al Cordero» (Ap 5:13). El Cordero recibe la misma adoración que Dios: es Dios.'
      ],
      pensar: 'Juan esperaba ver un León y vio un Cordero como inmolado (Ap 5:5-6). ¿Qué te enseña esto sobre la manera en que Dios obtiene la victoria, y sobre cómo nos llama a vencer a nosotros?'
    },
    {
      id: 'cap-6', n: 'Capítulo 6: Los seis primeros sellos', ref: 'Apocalipsis 6; Mateo 24:4-8',
      visual: [
        img(ESC + 'esc-jinetes-1-2.webp', 'Bajo un cielo dramático, un jinete coronado sobre un caballo blanco avanza con un arco en la mano, seguido de un jinete con una gran espada sobre un caballo bermejo', 'El caballo blanco y el caballo bermejo (Ap 6:2-4).'),
        img(ESC + 'esc-jinetes-3-4.webp', 'Sobre una tierra seca y devastada, un jinete en un caballo negro sostiene en alto una balanza, y junto a él avanza un caballo amarillo pálido', 'El caballo negro y el caballo amarillo (Ap 6:5-8).'),
        tabla('Paralelos', {
          titulo: 'Los sellos y el sermón del monte de los Olivos',
          cab: ['Sello', 'Apocalipsis 6', 'Mateo 24'],
          filas: [
            ['1.º Caballo blanco', 'Un conquistador con arco (6:2)', 'Falsos cristos que engañarán (24:5)'],
            ['2.º Caballo bermejo', 'Se quita la paz de la tierra (6:4)', 'Guerras y rumores de guerras (24:6-7)'],
            ['3.º Caballo negro', 'Escasez y precios altos (6:6)', 'Hambres (24:7)'],
            ['4.º Caballo amarillo', 'Muerte para la cuarta parte de la tierra (6:8)', 'Pestes (Lc 21:11)'],
            ['5.º Las almas bajo el altar', 'Mártires que claman (6:9-11)', 'Os entregarán y os matarán (24:9)'],
            ['6.º Señales cósmicas', 'Terremoto, sol negro, luna como sangre (6:12-14)', 'El sol se oscurecerá (24:29)']
          ]
        })
      ],
      texto: [
        'El Cordero abre los sellos uno por uno, y con cada uno se desata un juicio sobre la tierra. Es el comienzo de la tribulación, la semana setenta de Daniel. La tabla muestra que el orden coincide con lo que Jesús anunció en el monte de los Olivos como «principio de dolores» (Mt 24:8).',
        { h: 'Los cuatro jinetes (6:1-8)' },
        'El primer jinete monta un caballo blanco, tiene un arco y una corona, y sale «venciendo, y para vencer» (Ap 6:2). Aunque se parece al jinete del capítulo 19, que es Cristo, aquí no tiene nombre y abre una serie de calamidades. Muchos lo identifican con el anticristo en su ascenso, que conquista prometiendo paz, o con el espíritu de conquista que traen los falsos cristos. Los otros jinetes traen guerra, hambre y muerte: un denario, el salario de un día, alcanza apenas para «dos libras de trigo» (Ap 6:6), la ración de una persona, y el cuarto jinete, Muerte, seguido del Hades, recibe poder sobre la cuarta parte de la tierra.',
        { h: 'Las almas bajo el altar (6:9-11)' },
        'El quinto sello muestra a los que «habían sido muertos por causa de la palabra de Dios y por el testimonio que tenían» (Ap 6:9). Son creyentes que mueren durante la tribulación, después del arrebatamiento. Su clamor pide justicia, y reciben vestiduras blancas y la indicación de esperar un poco más.',
        { h: 'El gran día de su ira (6:12-17)' },
        'El sexto sello sacude el universo: un gran terremoto, el sol negro, la luna como sangre y las estrellas que caen. Reyes, poderosos, ricos y esclavos se esconden en las cuevas y dicen a los montes: «Caed sobre nosotros, y escondednos del rostro de aquel que está sentado sobre el trono, y de la ira del Cordero; porque el gran día de su ira ha llegado; ¿y quién podrá sostenerse en pie?» (Ap 6:16-17). La expresión «la ira del Cordero» es inquietante: el mismo que murió por los pecadores juzgará a quienes lo rechazaron.',
        'El recurso Los últimos tiempos desarrolla cada sello con más detalle.',
        { ir: { t: 'Abrir el recurso Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'Los hombres prefieren esconderse de Dios antes que arrepentirse (Ap 6:16). ¿Por qué crees que el ser humano huye de Dios en vez de buscarlo? ¿Cómo te invita el Cordero a acercarte hoy?'
    },
    {
      id: 'cap-7', n: 'Capítulo 7: Los 144.000 y la gran multitud', ref: 'Apocalipsis 7',
      visual: [
        img(ESC + 'esc-gran-multitud.webp', 'Ante un trono resplandeciente, una multitud incontable de personas de todas las naciones y razas, vestidas de ropas blancas y con palmas en las manos', '«Una gran multitud, la cual nadie podía contar» (Ap 7:9).'),
        tabla('Comparación', {
          titulo: 'Dos grupos en el mismo capítulo',
          cab: ['', 'Los 144.000 (7:1-8)', 'La gran multitud (7:9-17)'],
          filas: [
            ['Dónde están', 'En la tierra', 'Delante del trono, en el cielo'],
            ['Número', 'Contados: 12.000 de cada tribu', 'Nadie la podía contar'],
            ['Origen', 'Las tribus de los hijos de Israel', 'Todas las naciones, tribus, pueblos y lenguas'],
            ['Qué reciben', 'El sello de Dios en la frente', 'Ropas blancas y palmas'],
            ['De dónde vienen', 'Sellados antes del juicio', '«Han salido de la gran tribulación» (7:14)']
          ]
        })
      ],
      texto: [
        'Antes de abrirse el séptimo sello, el relato hace una pausa. El capítulo 6 terminó preguntando «¿quién podrá sostenerse en pie?», y el capítulo 7 responde mostrando dos grupos que Dios protege y salva.',
        { h: 'Los 144.000 sellados (7:1-8)' },
        'Cuatro ángeles detienen los vientos de la tierra hasta que sean sellados «los siervos de nuestro Dios» (Ap 7:3). Juan oye el número: ciento cuarenta y cuatro mil, de todas las tribus de los hijos de Israel, doce mil de cada una. Este estudio los entiende como israelitas reales, convertidos a Cristo durante la tribulación y protegidos por Dios para servirle en ese tiempo. El texto nombra las tribus una por una, lo que difícilmente tendría sentido si se tratara de la iglesia en sentido simbólico. La lista omite a Dan, quizás por su temprana idolatría (Jue 18), y nombra a José y a Manasés en lugar de Efraín.',
        { posturas: {
          titulo: '¿Quiénes son los 144.000?',
          a: { n: 'Israelitas de la tribulación', t: 'Son judíos creyentes de las doce tribus, sellados durante la tribulación. Dios cumple así sus promesas a Israel (Ro 11:25-26). Es la lectura futurista y dispensacionalista.' },
          b: { n: 'La iglesia en sentido simbólico', t: 'Otros ven en ellos a todo el pueblo de Dios, judíos y gentiles, descrito con el lenguaje de Israel, y entienden que la gran multitud es el mismo grupo visto desde el cielo.' },
          c: 'Este estudio sigue la primera postura: el texto distingue claramente a los sellados de Israel, contados y en la tierra, de una multitud de todas las naciones, incontable y en el cielo.'
        } },
        { h: 'La gran multitud (7:9-17)' },
        'Después Juan ve una multitud que nadie puede contar, de todas las naciones, vestida de ropas blancas y con palmas en las manos. Un anciano explica: «Estos son los que han salido de la gran tribulación, y han lavado sus ropas, y las han emblanquecido en la sangre del Cordero» (Ap 7:14). Son los que creen en Cristo durante la tribulación y mueren en ella. El pasaje termina con una de las promesas más hermosas: «el Cordero que está en medio del trono los pastoreará, y los guiará a fuentes de aguas de vida; y Dios enjugará toda lágrima de los ojos de ellos» (Ap 7:17).'
      ],
      pensar: 'Aun en el tiempo más oscuro de la historia, una multitud incontable será salvada por la sangre del Cordero (Ap 7:9, 14). ¿Qué te dice esto sobre el corazón de Dios para salvar, y sobre la urgencia de anunciar el evangelio hoy?'
    },
    {
      id: 'cap-8', n: 'Capítulo 8: El séptimo sello y las cuatro trompetas', ref: 'Apocalipsis 8',
      visual: [
        img(ESC + 'esc-trompetas.webp', 'Siete ángeles de pie ante el trono de Dios en el cielo, cada uno con una larga trompeta, mientras abajo, en la tierra, se ven tormentas de fuego y granizo', '«Y se les dieron siete trompetas» (Ap 8:2).'),
        tabla('Las trompetas', {
          titulo: 'Las cuatro primeras trompetas y las plagas de Egipto',
          cab: ['Trompeta', 'Juicio', 'Plaga de Egipto'],
          filas: [
            ['1.ª', 'Granizo y fuego mezclados con sangre; se quema la tercera parte de la tierra (8:7)', 'Granizo y fuego (Éx 9:23-25)'],
            ['2.ª', 'Una gran montaña ardiendo cae al mar; la tercera parte del mar se convierte en sangre (8:8-9)', 'El agua en sangre (Éx 7:20-21)'],
            ['3.ª', 'La estrella Ajenjo amarga la tercera parte de los ríos (8:10-11)', 'Las aguas imposibles de beber (Éx 7:24)'],
            ['4.ª', 'Se oscurece la tercera parte del sol, la luna y las estrellas (8:12)', 'Tinieblas (Éx 10:21-23)']
          ]
        })
      ],
      texto: [
        { h: 'Silencio en el cielo (8:1)' },
        'Cuando el Cordero abre el séptimo sello, «se hizo silencio en el cielo como por media hora» (Ap 8:1). Después de los cánticos y truenos de los capítulos anteriores, el silencio es solemne: el cielo entero contiene la respiración ante lo que viene. Del séptimo sello salen siete ángeles con siete trompetas.',
        { h: 'Las oraciones de los santos (8:3-5)' },
        'Antes de que suenen las trompetas, otro ángel ofrece mucho incienso con las oraciones de todos los santos sobre el altar de oro, y el humo sube delante de Dios. Luego llena el incensario con fuego del altar y lo arroja a la tierra, y hay truenos, voces, relámpagos y un terremoto. Las oraciones de los santos, incluido el clamor de los mártires (Ap 6:10), están conectadas con los juicios. Dios no olvida lo que su pueblo le pide.',
        { h: 'Las cuatro primeras trompetas (8:6-12)' },
        'En Israel, las trompetas convocaban al pueblo, anunciaban la guerra y marcaban las fiestas; en Jericó, siete sacerdotes con siete trompetas precedieron la caída de la ciudad (Jos 6). Aquí anuncian juicios que recuerdan las plagas de Egipto, como muestra la tabla. Las cuatro primeras afectan la naturaleza: la tierra, el mar, los ríos y los astros, siempre en la tercera parte.',
        'La tercera trompeta trae una estrella llamada Ajenjo, una planta muy amarga, que hace amargas las aguas y causa la muerte de muchos (Ap 8:11). No hace falta identificar cada juicio con un fenómeno moderno; el texto describe acontecimientos reales con el lenguaje de las visiones, y su sentido es claro: el mundo que rechazó a su Creador ve cómo la creación misma se vuelve contra él.',
        { h: 'Tres ayes (8:13)' },
        'El capítulo termina con un águila que vuela por en medio del cielo y clama: «¡Ay, ay, ay, de los que moran en la tierra, a causa de los otros toques de trompeta que están para sonar los tres ángeles!» (Ap 8:13). Lo que viene es peor: las tres últimas trompetas son los tres ayes.'
      ],
      pensar: 'Las oraciones de los santos suben como incienso delante de Dios y tienen parte en su obra (Ap 8:3-4). ¿Qué valor le das a tus oraciones? ¿Crees que Dios las guarda y las responde a su tiempo?'
    },
    {
      id: 'cap-9', n: 'Capítulo 9: La quinta y la sexta trompeta', ref: 'Apocalipsis 9',
      visual: [
        img(IMG + 'apo-abismo.webp', 'Desde una enorme grieta en un paisaje desértico de noche sube una columna de humo negro que oscurece el sol naciente, mientras una multitud de pequeñas siluetas oscuras como langostas sale volando del humo', '«Subió humo del pozo como humo de un gran horno» (Ap 9:2).'),
        mapa({ view: [[28.5, 30.0], [39.0, 50.0]], capas: [], lugares: ['babilonia', 'jerusalen', 'meguido'] }, 'El Éufrates')
      ],
      texto: [
        { h: 'La quinta trompeta: el primer ay (9:1-12)' },
        'Juan ve una estrella que había caído del cielo a la tierra, a la que se le da la llave del pozo del abismo. Es un ser personal, porque recibe una llave y abre, probablemente un ángel caído o el mismo Satanás (Lc 10:18). Del pozo sube humo como de un gran horno, y del humo salen langostas con poder como de escorpiones. No dañan la vegetación, sino solo a los hombres que no tienen el sello de Dios en la frente. Los 144.000 quedan protegidos (Ap 7:3).',
        'La descripción es impresionante: parecen caballos preparados para la guerra, con coronas, rostros humanos, cabellos de mujer, dientes de león y ruido de carros. Tienen por rey «al ángel del abismo, cuyo nombre en hebreo es Abadón, y en griego, Apolión» (Ap 9:11), nombres que significan destrucción y destructor. Todo indica que se trata de seres demoníacos liberados por Dios por un tiempo limitado, cinco meses, para atormentar sin matar. El dolor es tal que los hombres buscarán la muerte y no la hallarán (Ap 9:6).',
        { h: 'La sexta trompeta: el segundo ay (9:13-21)' },
        'Una voz manda desatar a los cuatro ángeles atados junto al gran río Éufrates (Ap 9:14). Estaban preparados para la hora, el día, el mes y el año exactos: nada ocurre fuera del tiempo de Dios. Se suelta un ejército de doscientos millones de jinetes, con caballos que echan fuego, humo y azufre, y muere la tercera parte de los hombres.',
        'El Éufrates era la frontera oriental del mundo romano y, en la Biblia, el límite de la tierra prometida (Gn 15:18). Del otro lado venían los enemigos de Israel: Asiria, Babilonia, Persia. El juicio llega desde allí. Algunos ven en este ejército una fuerza humana impulsada por poderes demoníacos; otros, un ejército del todo demoníaco. El texto subraya lo mismo en ambos casos: Dios controla su número y su tiempo.',
        { h: 'No se arrepintieron' },
        'El capítulo termina con una nota trágica. Los que sobrevivieron «ni aun así se arrepintieron de las obras de sus manos, ni dejaron de adorar a los demonios, y a las imágenes… y no se arrepintieron de sus homicidios, ni de sus hechicerías, ni de su fornicación, ni de sus hurtos» (Ap 9:20-21). El juicio no cambia por sí solo un corazón endurecido.'
      ],
      pensar: 'Ni siquiera juicios tan grandes llevaron a los hombres al arrepentimiento (Ap 9:20-21). ¿Qué te enseña esto sobre la importancia de responder a Dios hoy, mientras su gracia te llama?'
    },
    {
      id: 'cap-10', n: 'Capítulo 10: El ángel y el librito', ref: 'Apocalipsis 10; Ezequiel 2:8–3:3; Daniel 12:4-9',
      visual: [
        img(IMG + 'apo-angel-librito.webp', 'Un ángel gigantesco envuelto en una nube, con un arco iris sobre la cabeza y el rostro brillante como el sol, apoya un pie sobre el mar y otro sobre la tierra junto a la costa, con un pequeño rollo abierto en la mano', '«Puso su pie derecho sobre el mar, y el izquierdo sobre la tierra» (Ap 10:2).'),
        pasaje('Y el ángel que vi en pie sobre el mar y sobre la tierra, levantó su mano al cielo, y juró por el que vive por los siglos de los siglos, que creó el cielo y las cosas que están en él, y la tierra y las cosas que están en ella, y el mar y las cosas que están en él, que el tiempo no sería más, sino que en los días de la voz del séptimo ángel, cuando él comience a tocar la trompeta, el misterio de Dios se consumará, como él lo anunció a sus siervos los profetas.', 'Apocalipsis 10:5-7')
      ],
      texto: [
        'Entre la sexta y la séptima trompeta hay otra pausa, que va de 10:1 a 11:14. En ella Juan recibe una nueva comisión como profeta y conoce a los dos testigos.',
        { h: 'El ángel fuerte (10:1-4)' },
        'Desciende del cielo un ángel fuerte, envuelto en una nube, con el arco iris sobre la cabeza, el rostro como el sol y los pies como columnas de fuego. Algunos piensan que es Cristo, por la descripción gloriosa, pero el libro lo llama «otro ángel fuerte» (Ap 10:1) y lo distingue de Dios cuando el ángel jura por el que vive por los siglos. Es un ángel de gran autoridad. Pone un pie sobre el mar y otro sobre la tierra: su mensaje abarca el mundo entero.',
        'Cuando clama, siete truenos emiten sus voces. Juan va a escribir lo que dicen, pero se le ordena: «Sella las cosas que los siete truenos han dicho, y no las escribas» (Ap 10:4). Dios no lo reveló todo. Hay cosas que no sabemos, y eso nos llama a la humildad al estudiar la profecía.',
        { h: 'El tiempo no será más (10:5-7)' },
        'El ángel levanta la mano al cielo, como el varón vestido de lino en Daniel 12:7, y jura que «el tiempo no sería más» (Ap 10:6), es decir, que no habrá más demora. Cuando suene la séptima trompeta, «el misterio de Dios se consumará, como él lo anunció a sus siervos los profetas» (Ap 10:7). Lo que Daniel recibió sellado hasta el tiempo del fin (Dn 12:4) está por cumplirse.',
        { h: 'Dulce y amargo (10:8-11)' },
        'Juan recibe la orden de tomar el librito abierto y comérselo. Como le pasó a Ezequiel (Ez 3:1-3), es dulce en la boca, pero amarga el vientre. La palabra de Dios es dulce porque es suya y anuncia su victoria; pero su mensaje de juicio para un mundo que no se arrepiente produce dolor. Por último se le dice: «Es necesario que profetices otra vez sobre muchos pueblos, naciones, lenguas y reyes» (Ap 10:11). Lo que sigue en el libro es esa nueva profecía.'
      ],
      pensar: 'La Palabra fue dulce en la boca de Juan y amarga en su vientre (Ap 10:10). ¿Has experimentado esa mezcla al recibir y compartir la Palabra de Dios? ¿Cómo te ayuda a anunciarla con amor y seriedad?'
    },
    {
      id: 'cap-11a', n: 'Capítulo 11: El templo y los dos testigos', ref: 'Apocalipsis 11:1-14; Zacarías 4; Malaquías 4:5',
      visual: [
        img(ESC + 'esc-dos-testigos.webp', 'En una plaza de Jerusalén, frente a la ciudad antigua, dos profetas ancianos vestidos con túnicas ásperas de cilicio predican ante una multitud', '«Y daré a mis dos testigos que profeticen» (Ap 11:3).'),
        tabla('Los testigos', {
          titulo: 'Los dos testigos y los profetas del Antiguo Testamento',
          cab: ['Señal', 'Apocalipsis 11', 'Antiguo Testamento'],
          filas: [
            ['Dos olivos y dos candeleros', '11:4', 'Zac 4:3, 11-14: Zorobabel y Josué'],
            ['Fuego que devora a sus enemigos', '11:5', 'Elías (2 R 1:10-12)'],
            ['Cerrar el cielo para que no llueva', '11:6', 'Elías (1 R 17:1; Stg 5:17)'],
            ['Convertir las aguas en sangre y herir con plagas', '11:6', 'Moisés (Éx 7–11)'],
            ['Suben al cielo en una nube', '11:12', 'Elías (2 R 2:11)']
          ]
        })
      ],
      texto: [
        { h: 'Medir el templo (11:1-2)' },
        'Juan recibe una caña para medir «el templo de Dios, y el altar, y a los que adoran en él», pero no el patio de afuera, porque ha sido entregado a los gentiles, que hollarán la ciudad santa cuarenta y dos meses (Ap 11:1-2). Medir indica que Dios reconoce y protege lo que le pertenece. Como el libro se escribió hacia el año 95, cuando el templo de Herodes ya había sido destruido, este estudio entiende que habla de un templo que existirá en Jerusalén durante la tribulación, el mismo que Jesús y Pablo mencionan (Mt 24:15; 2 Ts 2:4).',
        { h: 'Los dos testigos (11:3-6)' },
        'Dios da poder a dos testigos para profetizar mil doscientos sesenta días, vestidos de cilicio, señal de luto y llamado al arrepentimiento. Son «los dos olivos, y los dos candeleros que están en pie delante del Dios de la tierra» (Ap 11:4), una referencia a Zacarías 4. Mientras dura su ministerio, nadie puede dañarlos. Sus señales recuerdan a Elías y a Moisés.',
        { posturas: {
          titulo: '¿Quiénes son los dos testigos?',
          a: { n: 'Moisés y Elías, o profetas con su ministerio', t: 'Sus señales son las de Moisés y Elías, los dos que aparecieron con Jesús en el monte de la transfiguración (Mt 17:3). Malaquías anunció que Elías vendría antes del día grande y terrible del Señor (Mal 4:5).' },
          b: { n: 'Enoc y Elías', t: 'Algunos escritores antiguos los identificaron con Enoc y Elías, los dos hombres que no murieron (Gn 5:24; 2 R 2:11), porque «está establecido para los hombres que mueran una sola vez» (He 9:27).' },
          c: 'El texto no da sus nombres. Lo seguro es que son dos profetas reales y futuros, que ministrarán en Jerusalén con el poder de Moisés y de Elías. Muchos maestros pentecostales y dispensacionalistas se inclinan por Moisés y Elías, o por dos profetas que vienen en su espíritu.'
        } },
        { h: 'Muerte y resurrección (11:7-14)' },
        'Cuando terminan su testimonio, la bestia que sube del abismo les hace guerra y los mata. Sus cuerpos quedan tres días y medio en la plaza de la gran ciudad, «que en sentido espiritual se llama Sodoma y Egipto, donde también nuestro Señor fue crucificado» (Ap 11:8): es Jerusalén, que en ese tiempo se habrá apartado de Dios. Los moradores de la tierra lo celebran y se envían regalos. Pero después de tres días y medio el espíritu de vida entra en ellos, se levantan y suben al cielo en una nube a la vista de sus enemigos. Un terremoto sacude la ciudad, y los demás, aterrorizados, dan gloria a Dios.'
      ],
      pensar: 'Los dos testigos fueron invencibles hasta que terminaron su testimonio (Ap 11:5-7). ¿Qué confianza te da saber que tu vida está en manos de Dios hasta que cumplas lo que él te ha encomendado?'
    },
    {
      id: 'cap-11b', n: 'Capítulo 11: La séptima trompeta', ref: 'Apocalipsis 11:15-19; Daniel 2:44; 7:14, 27',
      visual: [
        pasaje('El séptimo ángel tocó la trompeta, y hubo grandes voces en el cielo, que decían: Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo; y él reinará por los siglos de los siglos. Y los veinticuatro ancianos que estaban sentados delante de Dios en sus tronos, se postraron sobre sus rostros, y adoraron a Dios, diciendo: Te damos gracias, Señor Dios Todopoderoso, el que eres y que eras y que has de venir, porque has tomado tu gran poder, y has reinado.', 'Apocalipsis 11:15-17'),
        img(IMG + 'apo-arca-cielo.webp', 'El templo celestial abierto, lleno de una luz dorada, deja ver en su interior el arca del pacto entre relámpagos y nubes de tormenta', '«El templo de Dios fue abierto en el cielo, y el arca de su pacto se veía en el templo» (Ap 11:19).')
      ],
      texto: [
        'Con la séptima trompeta, el tercer ay, el libro llega a un punto culminante. Aunque las copas todavía no se han derramado, el cielo celebra el resultado final como si ya se hubiera cumplido.',
        { h: 'El reino de nuestro Señor (11:15)' },
        'Hay grandes voces en el cielo que dicen: «Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo; y él reinará por los siglos de los siglos» (Ap 11:15). Es el cumplimiento de Daniel: la piedra cortada no con mano destruye la estatua de los imperios y llena toda la tierra (Dn 2:44), y el Hijo del Hombre recibe un dominio eterno (Dn 7:14). Lo que la séptima trompeta anuncia se desarrolla en los capítulos que siguen, hasta la venida de Cristo y su reino.',
        { h: 'La adoración de los ancianos (11:16-18)' },
        'Los veinticuatro ancianos se postran y dan gracias al Señor Dios Todopoderoso, «porque has tomado tu gran poder, y has reinado» (Ap 11:17). Hablan en pasado de algo que todavía no ocurre en la tierra, porque en el plan de Dios ya es seguro. Su cántico resume lo que queda del libro: las naciones se airaron, vino la ira de Dios, llegó el tiempo de juzgar a los muertos, de dar galardón a los siervos de Dios, profetas y santos, pequeños y grandes, y de «destruir a los que destruyen la tierra» (Ap 11:18).',
        { h: 'El arca en el cielo (11:19)' },
        'El capítulo cierra con el templo de Dios abierto en el cielo y el arca de su pacto a la vista, entre relámpagos, voces, truenos, un terremoto y granizo. El arca era la señal de la presencia de Dios en medio de Israel y de su pacto con el pueblo; desapareció en la destrucción de Jerusalén por Babilonia y nunca se recuperó. Que aparezca en el cielo, justo antes de los capítulos que tratan de Israel en la tribulación, es una señal de que Dios no ha olvidado su pacto. El tabernáculo y el templo de la tierra eran copia de las realidades celestiales (He 8:5).',
        'Con esta escena termina la primera gran mitad del libro. Desde el capítulo 12, Juan retrocede para mostrar a los protagonistas del conflicto.'
      ],
      pensar: '«Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo» (Ap 11:15). ¿Cómo cambia tu manera de ver las noticias y los gobiernos de hoy saber que el reino final es de Cristo?'
    },

    {
      id: 'cap-12', n: 'Capítulo 12: La mujer y el dragón', ref: 'Apocalipsis 12; Génesis 37:9-10; Isaías 66:7-8',
      visual: [
        img(IMG + 'apo-mujer-dragon.webp', 'En un cielo nocturno inmenso, una mujer vestida de luz como el sol, con la luna bajo sus pies y una corona de doce estrellas, contempla a lo lejos un gran dragón rojo de siete cabezas entre nubes de tormenta', '«Una mujer vestida del sol» y «un gran dragón escarlata» (Ap 12:1, 3).', '62% 50%'),
        tabla('Personajes', {
          titulo: 'Los personajes del capítulo 12',
          cab: ['Personaje', 'Identificación', 'Clave bíblica'],
          filas: [
            ['La mujer vestida del sol, con doce estrellas', 'Israel', 'Gn 37:9-10; Is 66:7-8'],
            ['El hijo varón que regirá las naciones', 'Cristo', 'Sal 2:9; Ap 19:15'],
            ['El gran dragón escarlata', 'Satanás', 'Ap 12:9'],
            ['Miguel y sus ángeles', 'El arcángel protector de Israel', 'Dn 10:21; 12:1; Jud 9'],
            ['El resto de la descendencia de la mujer', 'Los creyentes perseguidos en la tribulación', 'Ap 12:17']
          ]
        })
      ],
      texto: [
        'Los capítulos 12 a 14 forman una pausa larga. Juan retrocede para mostrar a los actores del gran conflicto que hay detrás de los juicios. El capítulo 12 descubre el fondo espiritual de toda la historia: la guerra de Satanás contra Cristo y contra el pueblo del que nació.',
        { h: 'La mujer y el hijo (12:1-6)' },
        'Aparece en el cielo «una mujer vestida del sol, con la luna debajo de sus pies, y sobre su cabeza una corona de doce estrellas» (Ap 12:1). La imagen recuerda el sueño de José, donde el sol, la luna y once estrellas representaban a Jacob, a su esposa y a las tribus (Gn 37:9-10). La mujer es Israel, el pueblo del que vino el Mesías según la carne (Ro 9:5). Da a luz un hijo varón «que regirá con vara de hierro a todas las naciones» y es arrebatado para Dios y para su trono: es Cristo, en su nacimiento y su ascensión. Después la mujer huye al desierto, donde Dios la sustenta mil doscientos sesenta días.',
        { h: 'La guerra en el cielo (12:7-12)' },
        'El dragón escarlata, con siete cabezas y diez cuernos, es identificado sin rodeos: «la serpiente antigua, que se llama diablo y Satanás, el cual engaña al mundo entero» (Ap 12:9). Intentó devorar al niño, como lo intentó Herodes en Belén (Mt 2:16). Ahora hay guerra en el cielo: Miguel y sus ángeles luchan contra el dragón, y este es arrojado a la tierra. Se anuncia: «ha sido lanzado fuera el acusador de nuestros hermanos» (Ap 12:10).',
        'Y se revela cómo se vence al acusador: «ellos le han vencido por medio de la sangre del Cordero y de la palabra del testimonio de ellos, y menospreciaron sus vidas hasta la muerte» (Ap 12:11). La sangre de Cristo responde a toda acusación; el testimonio fiel y la entrega total completan la victoria.',
        { h: 'La persecución de Israel (12:13-17)' },
        'Lleno de ira, porque sabe que le queda poco tiempo, el dragón persigue a la mujer. Pero ella recibe dos alas de la gran águila para volar al desierto, donde es sustentada «por un tiempo, y tiempos, y la mitad de un tiempo» (Ap 12:14), la segunda mitad de la tribulación. Jesús había advertido a los de Judea que huyeran a los montes cuando vieran la abominación (Mt 24:16). Frustrado, el dragón se va a hacer guerra contra el resto de la descendencia de ella, «los que guardan los mandamientos de Dios y tienen el testimonio de Jesucristo» (Ap 12:17).'
      ],
      pensar: 'Los creyentes vencen al acusador por la sangre del Cordero, por su testimonio y por su entrega (Ap 12:11). ¿Cómo respondes cuando el enemigo te acusa? ¿Te apoyas en tus méritos o en la sangre de Cristo?'
    },
    {
      id: 'cap-13a', n: 'Capítulo 13: La bestia que sube del mar', ref: 'Apocalipsis 13:1-10; Daniel 7:2-8, 23-25; 2 Tesalonicenses 2:3-10',
      visual: [
        img(IMG + 'apo-bestia-mar.webp', 'De un mar oscuro y agitado bajo un cielo de tormenta emerge una gran bestia con siete cabezas y diez cuernos coronados, con cuerpo de leopardo, patas de oso y boca de león', '«Vi subir del mar una bestia que tenía siete cabezas y diez cuernos» (Ap 13:1).'),
        tabla('Daniel 7', {
          titulo: 'La bestia de Apocalipsis 13 y las bestias de Daniel 7',
          cab: ['Rasgo', 'Daniel 7', 'Apocalipsis 13'],
          filas: [
            ['Sube del mar', 'Cuatro bestias del mar (7:2-3)', 'Una bestia del mar (13:1)'],
            ['León, oso y leopardo', 'Babilonia, Medo-Persia y Grecia (7:4-6)', 'Reúne los tres rasgos (13:2)'],
            ['Diez cuernos', 'La cuarta bestia (7:7, 24)', 'Diez cuernos con diademas (13:1)'],
            ['Habla blasfemias', 'El cuerno pequeño (7:8, 25)', 'Una boca que habla blasfemias (13:5-6)'],
            ['Guerra contra los santos', '7:21, 25', '13:7'],
            ['Duración', 'Tiempo, tiempos y medio tiempo (7:25)', 'Cuarenta y dos meses (13:5)']
          ]
        }),
        img(IH + 'integrador-cuatro-bestias.webp', 'Cuatro bestias salen de un mar agitado: un león con alas de águila, un oso, un leopardo con cuatro alas y una bestia terrible con dientes de hierro y diez cuernos', 'Las cuatro bestias de Daniel 7.')
      ],
      texto: [
        'El dragón se pone de pie sobre la arena del mar, y del mar sube una bestia con siete cabezas y diez cuernos. Es el gran instrumento de Satanás en el tiempo del fin: un imperio mundial y su gobernante, el anticristo.',
        { h: 'Heredera de los imperios' },
        'La bestia es «semejante a un leopardo, y sus pies como de oso, y su boca como boca de león» (Ap 13:2). Reúne los rasgos de las tres primeras bestias de Daniel 7, en orden inverso, y tiene los diez cuernos de la cuarta. Es la forma final del cuarto reino de Daniel, el imperio romano en una versión futura, y resume el poder de todos los imperios que se opusieron a Dios. El dragón le da «su poder y su trono, y grande autoridad».',
        'El texto oscila entre el imperio y la persona, como Daniel 7 (Dn 7:17, 23). En Apocalipsis 13 la bestia habla, blasfema, recibe adoración y hace guerra: es un hombre. Pablo lo llama «el hombre de pecado, el hijo de perdición», que se opone y se levanta contra todo lo que se llama Dios (2 Ts 2:3-4), y Juan lo llama anticristo (1 Jn 2:18).',
        { h: 'Una herida mortal sanada (13:3-4)' },
        'Una de sus cabezas parece herida de muerte, pero la herida es sanada, «y se maravilló toda la tierra en pos de la bestia» (Ap 13:3). Es una falsificación de la resurrección de Cristo. El mundo, admirado, adora al dragón y a la bestia, diciendo: «¿Quién como la bestia, y quién podrá luchar contra ella?» (Ap 13:4). La pregunta imita, con burla, la alabanza de Israel: «¿Quién como tú, oh Jehová?» (Éx 15:11).',
        { h: 'Cuarenta y dos meses (13:5-10)' },
        'Se le da autoridad para actuar cuarenta y dos meses, la segunda mitad de la tribulación. Blasfema contra Dios, hace guerra contra los santos y los vence, y recibe autoridad sobre toda tribu, pueblo, lengua y nación. La adoran todos aquellos cuyos nombres no están escritos en el libro de la vida del Cordero. Juan termina con un llamado a la fidelidad: «Aquí está la paciencia y la fe de los santos» (Ap 13:10). Su poder es grande, pero tiene un tiempo y un límite: todo «se le dio».'
      ],
      pensar: 'El mundo se maravilla ante la bestia y pregunta «¿quién como la bestia?» (Ap 13:4). ¿Qué figuras o poderes despiertan hoy esa admiración? ¿Cómo te ayuda este capítulo a no dejarte deslumbrar?'
    },
    {
      id: 'cap-13b', n: 'Capítulo 13: La bestia de la tierra y la marca', ref: 'Apocalipsis 13:11-18; 14:9-11; 19:20; Mateo 24:24',
      visual: [
        img(IMG + 'apo-imagen-bestia.webp', 'En una gran plaza de una ciudad moderna, una multitud se inclina ante una estatua colosal iluminada por reflectores, mientras un hombre de aspecto religioso, con los brazos levantados, hace descender fuego del cielo', '«Hace descender fuego del cielo a la tierra delante de los hombres» (Ap 13:13).'),
        tabla('La trinidad falsa', {
          titulo: 'Una imitación de la Trinidad',
          cab: ['Imitador', 'Imita a', 'Cómo'],
          filas: [
            ['El dragón', 'Dios el Padre', 'Da su poder, su trono y su autoridad a la bestia (13:2)'],
            ['La bestia del mar', 'Cristo', 'Una herida de muerte sanada; recibe adoración (13:3-4)'],
            ['La bestia de la tierra (el falso profeta)', 'El Espíritu Santo', 'Hace señales y lleva a adorar a la primera bestia (13:12-14)']
          ]
        })
      ],
      texto: [
        { h: 'La bestia que sube de la tierra (13:11-15)' },
        'Juan ve otra bestia, que sube de la tierra. Tiene dos cuernos semejantes a los de un cordero, pero habla como dragón (Ap 13:11): parece inofensiva y hasta religiosa, pero su mensaje viene de Satanás. Más adelante el libro la llama «el falso profeta» (Ap 16:13; 19:20). Su función es religiosa: hace que la tierra adore a la primera bestia.',
        'Hace grandes señales, incluso que descienda fuego del cielo, como Elías, y engaña a los moradores de la tierra (Ap 13:13-14). Jesús había advertido que se levantarían falsos profetas que harían grandes señales y prodigios, de tal manera que engañarían, si fuere posible, aun a los escogidos (Mt 24:24). Los milagros, por sí solos, no prueban que algo venga de Dios; hay que examinar si exaltan a Cristo y concuerdan con su Palabra.',
        'El falso profeta manda hacer una imagen de la bestia, le da aliento para que hable y hace matar a quien no la adore. Recuerda la estatua de oro de Nabucodonosor y el horno de fuego (Dn 3), pero esta vez a escala mundial.',
        { h: 'La marca (13:16-17)' },
        'Además, hace que a todos, pequeños y grandes, ricos y pobres, libres y esclavos, se les ponga una marca en la mano derecha o en la frente, «y que ninguno pudiese comprar ni vender, sino el que tuviese la marca o el nombre de la bestia, o el número de su nombre» (Ap 13:17). La marca es una señal de lealtad y adoración a la bestia, no un accidente: quien la recibe ha elegido. Por eso el capítulo 14 advierte que quien adore a la bestia y reciba su marca beberá del vino de la ira de Dios (Ap 14:9-11). Es una decisión del tiempo de la tribulación; ningún creyente de hoy la recibe sin saberlo.',
        { h: 'Seiscientos sesenta y seis (13:18)' },
        '«Aquí hay sabiduría. El que tiene entendimiento, cuente el número de la bestia, pues es número de hombre. Y su número es seiscientos sesenta y seis» (Ap 13:18). En griego y en hebreo las letras tenían valor numérico, y se han propuesto muchos nombres. El seis, uno menos que el siete, puede expresar lo humano que nunca alcanza la perfección de Dios. Sobre todo, el texto dice que el número servirá para reconocerlo cuando aparezca, no para adivinarlo antes. La historia está llena de identificaciones equivocadas, y es prudente no sumarse a ellas.'
      ],
      pensar: 'El falso profeta hará grandes señales para engañar (Ap 13:13-14). ¿Qué criterios bíblicos usas para discernir si una enseñanza o un milagro viene de Dios (1 Jn 4:1-3)?'
    },
    {
      id: 'cap-14', n: 'Capítulo 14: El Cordero en el monte de Sion', ref: 'Apocalipsis 14',
      visual: [
        img(IMG + 'apo-cordero-sion.webp', 'Sobre la cima de un monte con vista a Jerusalén al amanecer, un cordero blanco de pie en el centro, rodeado de una gran multitud de hombres y mujeres vestidos de blanco que cantan', '«El Cordero estaba en pie sobre el monte de Sion, y con él ciento cuarenta y cuatro mil» (Ap 14:1).'),
        tabla('Seis visiones', {
          titulo: 'El capítulo 14 en seis escenas',
          cab: ['Escena', 'Pasaje'],
          filas: [
            ['El Cordero y los 144.000 en el monte de Sion', '14:1-5'],
            ['Primer ángel: el evangelio eterno', '14:6-7'],
            ['Segundo ángel: ha caído Babilonia', '14:8'],
            ['Tercer ángel: advertencia a los que adoran a la bestia', '14:9-12'],
            ['Bienaventurados los muertos que mueren en el Señor', '14:13'],
            ['Dos siegas: el grano y la vendimia', '14:14-20']
          ]
        })
      ],
      texto: [
        'Después de la oscuridad del capítulo 13, el capítulo 14 da la respuesta del cielo. Antes de las copas, Juan ve escenas de esperanza y de advertencia que anticipan el final.',
        { h: 'El Cordero y los suyos (14:1-5)' },
        'El Cordero está en pie sobre el monte de Sion, y con él los 144.000 que tienen el nombre del Padre escrito en la frente (Ap 14:1). Frente a la marca de la bestia, ellos llevan la marca de Dios. Cantan un cántico nuevo que nadie más puede aprender, son vírgenes en el sentido de que no se contaminaron con la idolatría, siguen al Cordero por dondequiera que va y en su boca no fue hallada mentira. Fueron sellados en el capítulo 7; aquí aparecen con el Cordero, y ninguno se ha perdido.',
        { h: 'Tres ángeles (14:6-12)' },
        'Un ángel vuela por en medio del cielo con «el evangelio eterno» para predicarlo a todo el mundo: «Temed a Dios, y dadle gloria, porque la hora de su juicio ha llegado; y adorad a aquel que hizo el cielo y la tierra, el mar y las fuentes de las aguas» (Ap 14:7). Aun en el último tiempo, Dios llama a los hombres al arrepentimiento. Un segundo ángel anuncia: «Ha caído, ha caído Babilonia», adelantando los capítulos 17 y 18. Un tercero advierte con la mayor seriedad que quien adore a la bestia y reciba su marca beberá del vino de la ira de Dios y será atormentado para siempre (Ap 14:9-11).',
        { h: 'Los que mueren en el Señor (14:13)' },
        'En medio de esas advertencias se oye una voz del cielo: «Bienaventurados de aquí en adelante los muertos que mueren en el Señor. Sí, dice el Espíritu, descansarán de sus trabajos, porque sus obras con ellos siguen» (Ap 14:13). Para los mártires de la tribulación, la muerte no es derrota sino descanso.',
        { h: 'Dos siegas (14:14-20)' },
        'Uno semejante al Hijo del Hombre, sentado sobre una nube y con una hoz, siega la tierra, porque la mies está madura. Después un ángel vendimia las uvas de la tierra y las echa en el gran lagar de la ira de Dios, y la sangre sale hasta los frenos de los caballos por mil seiscientos estadios, unos trescientos kilómetros, el largo aproximado de la tierra de Israel. Es una anticipación de Armagedón (Ap 16:16; 19:15). Joel había usado la misma imagen: «Echad la hoz, porque la mies está ya madura… porque el lagar está lleno» (Jl 3:13).'
      ],
      pensar: 'Aun en el último tiempo, Dios envía el evangelio eterno a toda nación (Ap 14:6-7). ¿Qué te enseña esto sobre la misericordia de Dios y sobre la misión que la iglesia tiene hoy?'
    },
    {
      id: 'cap-15', n: 'Capítulo 15: El cántico de Moisés y del Cordero', ref: 'Apocalipsis 15; Éxodo 15:1-18',
      visual: [
        img(IMG + 'apo-mar-vidrio.webp', 'Una multitud vestida de blanco, con arpas en las manos, de pie junto a un inmenso mar de vidrio transparente mezclado con fuego, bajo una luz celestial', '«Vi también como un mar de vidrio mezclado con fuego» (Ap 15:2).'),
        pasaje('Y cantan el cántico de Moisés siervo de Dios, y el cántico del Cordero, diciendo: Grandes y maravillosas son tus obras, Señor Dios Todopoderoso; justos y verdaderos son tus caminos, Rey de los santos. ¿Quién no te temerá, oh Señor, y glorificará tu nombre? pues sólo tú eres santo; por lo cual todas las naciones vendrán y te adorarán, porque tus juicios se han manifestado.', 'Apocalipsis 15:3-4', 'El cántico')
      ],
      texto: [
        'El capítulo 15 es el más corto del libro, pero prepara la última serie de juicios. Juan ve otra señal en el cielo: siete ángeles con «las siete plagas postreras; porque en ellas se consumaba la ira de Dios» (Ap 15:1). Con las copas, la ira de Dios sobre un mundo rebelde llega a su fin.',
        { h: 'Junto al mar de vidrio (15:2)' },
        'Antes de los juicios, Juan ve a los vencedores. Están en pie sobre el mar de vidrio mezclado con fuego que había visto delante del trono, con arpas de Dios. Son los que «habían alcanzado la victoria sobre la bestia y su imagen, y su marca y el número de su nombre». Para el mundo eran perdedores, porque no pudieron comprar ni vender y muchos murieron; en el cielo son los vencedores.',
        { h: 'Un nuevo éxodo (15:3-4)' },
        'Cantan «el cántico de Moisés siervo de Dios, y el cántico del Cordero» (Ap 15:3). La escena recuerda a Israel en la orilla del mar Rojo, cantando después de cruzarlo, mientras el ejército de Faraón quedaba bajo las aguas (Éx 15). Como entonces, Dios libra a su pueblo y juzga al opresor. Las plagas de las copas se parecen a las de Egipto; la bestia ocupa el lugar de Faraón; y los redimidos cantan al otro lado del mar.',
        'Lo notable es que el cántico no habla de los vencedores, sino de Dios: «Grandes y maravillosas son tus obras, Señor Dios Todopoderoso; justos y verdaderos son tus caminos, Rey de los santos. ¿Quién no te temerá, oh Señor, y glorificará tu nombre? pues sólo tú eres santo; por lo cual todas las naciones vendrán y te adorarán» (Ap 15:3-4).',
        { h: 'El templo lleno de humo (15:5-8)' },
        'Se abre el templo del tabernáculo del testimonio en el cielo, y salen los siete ángeles vestidos de lino limpio y resplandeciente, ceñidos con cintos de oro. Uno de los seres vivientes les da siete copas de oro llenas de la ira de Dios. El templo se llena de humo por la gloria y el poder de Dios, y nadie puede entrar hasta que se cumplan las plagas, como cuando la gloria llenó el tabernáculo y Moisés no podía entrar (Éx 40:34-35). Ya no hay intercesión que detenga el juicio.'
      ],
      pensar: 'El cántico de los vencedores no habla de ellos, sino de las obras y los caminos de Dios (Ap 15:3-4). ¿Se centra tu alabanza en lo que Dios es y hace, o en lo que tú recibes?'
    },
    {
      id: 'cap-16', n: 'Capítulo 16: Las siete copas', ref: 'Apocalipsis 16',
      visual: [
        img(IMG + 'apo-copas.webp', 'Siete ángeles vestidos de lino blanco resplandeciente, con cintos de oro, inclinan siete copas de oro desde las nubes hacia una tierra oscura y tormentosa', '«Id y derramad sobre la tierra las siete copas de la ira de Dios» (Ap 16:1).'),
        tabla('Las copas', {
          titulo: 'Las siete copas',
          cab: ['Copa', 'Sobre', 'Efecto'],
          filas: [
            ['1.ª', 'La tierra', 'Úlcera maligna sobre los que tienen la marca de la bestia (16:2)'],
            ['2.ª', 'El mar', 'Se convierte en sangre y muere todo ser vivo en él (16:3)'],
            ['3.ª', 'Ríos y fuentes', 'Se convierten en sangre (16:4-7)'],
            ['4.ª', 'El sol', 'Quema a los hombres con fuego (16:8-9)'],
            ['5.ª', 'El trono de la bestia', 'Su reino se cubre de tinieblas (16:10-11)'],
            ['6.ª', 'El río Éufrates', 'Se seca para dar paso a los reyes del oriente (16:12-16)'],
            ['7.ª', 'El aire', 'Hecho está: el mayor terremoto y la caída de Babilonia (16:17-21)']
          ]
        }),
        mapa({ view: [[29.0, 30.5], [38.5, 48.5]], capas: [], lugares: ['babilonia', 'jerusalen', 'meguido'] }, 'Armagedón')
      ],
      texto: [
        'Una gran voz desde el templo ordena a los siete ángeles: «Id y derramad sobre la tierra las siete copas de la ira de Dios» (Ap 16:1). A diferencia de los sellos y las trompetas, aquí no hay pausa entre la sexta y la séptima, y los juicios ya no afectan una parte, sino todo.',
        { h: 'Las cinco primeras (16:2-11)' },
        'Las copas golpean a quienes tienen la marca de la bestia, el mar, las aguas dulces, el sol y el trono de la bestia. Cuando las aguas se vuelven sangre, el ángel de las aguas declara: «Justo eres tú, oh Señor… Por cuanto derramaron la sangre de los santos y de los profetas, también tú les has dado a beber sangre; pues lo merecen» (Ap 16:5-6). Y del altar se responde: «Ciertamente, Señor Dios Todopoderoso, tus juicios son verdaderos y justos» (Ap 16:7).',
        'La reacción de los hombres es otra vez trágica: blasfemaron el nombre de Dios «y no se arrepintieron para darle gloria» (Ap 16:9), y se mordían la lengua de dolor, «y no se arrepintieron de sus obras» (Ap 16:11).',
        { h: 'Armagedón (16:12-16)' },
        'La sexta copa seca el Éufrates para preparar el camino a los reyes del oriente. De la boca del dragón, de la bestia y del falso profeta salen tres espíritus inmundos a manera de ranas, espíritus de demonios que hacen señales, y van a los reyes de toda la tierra para reunirlos «a la batalla de aquel gran día del Dios Todopoderoso» (Ap 16:14). Los reúnen «en el lugar que en hebreo se llama Armagedón» (Ap 16:16), es decir, el monte de Meguido, junto al valle de Jezreel, donde se libraron muchas batallas de la historia de Israel. La batalla misma se describe en 19:11-21.',
        'En medio de esta escena, Cristo interrumpe con una advertencia: «He aquí, yo vengo como ladrón. Bienaventurado el que vela, y guarda sus ropas» (Ap 16:15).',
        { h: 'Hecho está (16:17-21)' },
        'La séptima copa se derrama sobre el aire, y una voz desde el trono dice: «Hecho está» (Ap 16:17). Hay un terremoto como nunca hubo, la gran ciudad se divide en tres partes, caen las ciudades de las naciones, huyen las islas y cae granizo «como del peso de un talento» (Ap 16:21), unos treinta a cuarenta kilos. Y Dios se acuerda de la gran Babilonia, cuyo juicio se detalla en los dos capítulos siguientes.'
      ],
      pensar: 'En medio de los juicios, Cristo dice: «Bienaventurado el que vela» (Ap 16:15). ¿Qué significa para ti, en lo práctico, velar y guardar tus ropas mientras esperas su venida?'
    },
    {
      id: 'cap-17', n: 'Capítulo 17: La gran ramera', ref: 'Apocalipsis 17',
      visual: [
        img(IMG + 'apo-ramera-bestia.webp', 'En un desierto bajo un cielo rojizo, una mujer de porte altivo, vestida con ropas de púrpura y escarlata cubiertas de oro y perlas y con una copa de oro en la mano, va sentada sobre una bestia escarlata de siete cabezas y diez cuernos', '«Vi a una mujer sentada sobre una bestia escarlata» (Ap 17:3).'),
        tabla('Explicación', {
          titulo: 'El ángel explica la visión',
          cab: ['Símbolo', 'Explicación del ángel'],
          filas: [
            ['Las siete cabezas', 'Siete montes sobre los que se sienta la mujer, y también siete reyes (17:9-10)'],
            ['La bestia que era y no es', 'El octavo rey, que es de entre los siete y va a la perdición (17:11)'],
            ['Los diez cuernos', 'Diez reyes que reinarán una hora con la bestia (17:12)'],
            ['Las aguas', 'Pueblos, muchedumbres, naciones y lenguas (17:15)'],
            ['La mujer', 'La gran ciudad que reina sobre los reyes de la tierra (17:18)']
          ]
        }),
        mapa({ view: MUNDO, capas: ['roma-117'], lugares: ['roma', 'babilonia', 'jerusalen'] })
      ],
      texto: [
        'Uno de los ángeles de las copas invita a Juan: «Ven acá, y te mostraré la sentencia contra la gran ramera» (Ap 17:1). Juan es llevado en el Espíritu al desierto y ve a una mujer sentada sobre una bestia escarlata llena de nombres de blasfemia. Está vestida de púrpura y escarlata, adornada de oro y perlas, con un cáliz lleno de abominaciones, y en su frente un nombre: «Babilonia la grande, la madre de las rameras y de las abominaciones de la tierra» (Ap 17:5). Está ebria de la sangre de los santos y de los mártires de Jesús.',
        { h: 'Una ramera religiosa' },
        'En los profetas, la prostitución es imagen de la infidelidad espiritual y de la idolatría (Os 2; Ez 16). La ramera representa un sistema religioso falso y mundial, unido al poder político, que seduce a las naciones y persigue a los verdaderos creyentes. Su nombre, Babilonia, recuerda la ciudad de Babel, donde la humanidad se unió contra Dios (Gn 11), y la Babilonia de Nabucodonosor, que destruyó Jerusalén y fue cuna de la idolatría.',
        { h: 'Siete montes y siete reyes' },
        'El ángel explica que las siete cabezas son siete montes, y para los lectores de Asia la referencia a Roma, la ciudad de las siete colinas, era evidente. Pero también son siete reyes: «Cinco de ellos han caído; uno es, y el otro aún no ha venido» (Ap 17:10). Muchos dispensacionalistas los entienden como siete imperios sucesivos: Egipto, Asiria, Babilonia, Persia, Grecia, Roma, que «es» en tiempos de Juan, y un último imperio futuro. La bestia es el octavo, el anticristo, que procede de ellos.',
        { h: 'La bestia destruye a la ramera' },
        'Hay un giro sorprendente: los diez cuernos y la bestia «aborrecerán a la ramera, y la dejarán desolada y desnuda» y la quemarán con fuego (Ap 17:16). El sistema político, que se sirvió de la religión falsa, termina destruyéndola para quedarse con toda la adoración. Dios usa aun eso para cumplir su propósito. Y aunque harán guerra contra el Cordero, «el Cordero los vencerá, porque él es Señor de señores y Rey de reyes; y los que están con él son llamados y elegidos y fieles» (Ap 17:14).',
        { posturas: {
          titulo: '¿Qué es Babilonia en los capítulos 17 y 18?',
          a: { n: 'Un sistema religioso y comercial', t: 'Babilonia es el nombre del sistema mundial, religioso en el capítulo 17 y económico en el 18, que se opone a Dios. Roma, la ciudad de los siete montes, era su expresión en tiempos de Juan, y tendrá una forma final.' },
          b: { n: 'Una ciudad literal reconstruida', t: 'Otros intérpretes futuristas esperan que la Babilonia del Éufrates sea reconstruida como capital mundial, apoyándose en profecías como Isaías 13 y Jeremías 50 y 51.' },
          c: 'El texto la llama ciudad y la identifica con los siete montes (Ap 17:9, 18), pero también la describe con rasgos que exceden a cualquier ciudad. Este estudio la entiende como el sistema mundial de religión falsa y comercio sin Dios, centrado en una gran ciudad del tiempo del fin, sin afirmar cuál.'
        } }
      ],
      pensar: 'La ramera seduce a las naciones con su copa de oro llena de abominaciones (Ap 17:4). ¿De qué maneras la falsa religión o el atractivo del mundo pueden presentarse hoy como algo valioso y hermoso?'
    },
    {
      id: 'cap-18', n: 'Capítulo 18: La caída de Babilonia', ref: 'Apocalipsis 18; Jeremías 51:6-9, 45, 63-64; Isaías 47',
      visual: [
        img(IMG + 'apo-caida-babilonia.webp', 'Desde la cubierta de barcos mercantes en el mar, marineros y comerciantes con ropas de distintas épocas miran horrorizados una gran ciudad que arde en el horizonte, con una enorme columna de humo', '«Y viendo el humo de su incendio, dieron voces» (Ap 18:18).'),
        img(BA + 'babilonia-seraias-eufrates.webp', 'Un hombre arroja al río Éufrates un rollo atado a una piedra, frente a las murallas de Babilonia', 'Así será hundida Babilonia (Jer 51:63-64; Ap 18:21).'),
        tabla('Lamentos', {
          titulo: 'Tres lamentos por Babilonia',
          cab: ['Quiénes', 'Por qué lloran', 'Pasaje'],
          filas: [
            ['Los reyes de la tierra', 'Perdieron su poder y sus placeres', '18:9-10'],
            ['Los mercaderes', 'Nadie compra más sus mercaderías', '18:11-17'],
            ['Los marineros y pilotos', 'Se acabó la riqueza que los enriquecía', '18:17-19']
          ]
        })
      ],
      texto: [
        'Si el capítulo 17 mostró a Babilonia como sistema religioso, el 18 la muestra como centro del comercio y del lujo del mundo. Un ángel con gran autoridad, que ilumina la tierra con su gloria, anuncia: «Ha caído, ha caído la gran Babilonia» (Ap 18:2).',
        { h: 'Salid de ella, pueblo mío (18:4-8)' },
        'Antes del juicio se oye otra voz: «Salid de ella, pueblo mío, para que no seáis partícipes de sus pecados, ni recibáis parte de sus plagas» (Ap 18:4). Es el mismo llamado que Jeremías hizo a los judíos de Babilonia (Jer 51:6, 45). El pecado de Babilonia era el orgullo y el lujo sin Dios: decía en su corazón: «Yo estoy sentada como reina, y no soy viuda, y no veré llanto» (Ap 18:7). Isaías había dicho lo mismo de la Babilonia antigua (Is 47:7-8). Su juicio llega en un solo día.',
        { h: 'Los lamentos (18:9-19)' },
        'Tres grupos lloran a Babilonia desde lejos: los reyes, los mercaderes y los marineros. La lista de mercaderías es larga y detallada: oro, plata, piedras preciosas, perlas, lino fino, púrpura, seda, maderas olorosas, marfil, especias, vino, aceite, trigo, ganado, caballos, carros, y termina con algo terrible: «esclavos, almas de hombres» (Ap 18:13). El comercio de Babilonia trataba a las personas como mercancía. Ninguno de los que lloran lo hace por los pecados de la ciudad; lloran por lo que han perdido. Y todos repiten: «en una hora» vino tu juicio.',
        { h: 'Una gran piedra de molino (18:21-24)' },
        'Un ángel poderoso toma una piedra como una gran piedra de molino y la arroja al mar, diciendo: «Con el mismo ímpetu será derribada Babilonia, la gran ciudad, y nunca más será hallada» (Ap 18:21). Es la acción que Jeremías encargó a Seraías: atar el libro de la profecía a una piedra y arrojarlo al Éufrates, diciendo: «Así se hundirá Babilonia» (Jer 51:63-64). Desaparecen la música, los oficios, la luz de la lámpara y la voz del esposo y de la esposa. El cielo, en cambio, es invitado a alegrarse, porque Dios ha hecho justicia.',
        'El capítulo es una advertencia para todos los tiempos: el amor al dinero y al lujo puede convertirse en un sistema que esclaviza, y el creyente está llamado a no ser parte de él.'
      ],
      pensar: '«Salid de ella, pueblo mío» (Ap 18:4). ¿En qué áreas de tu vida (consumo, ambiciones, entretenimiento) necesitas salir de Babilonia para no participar de sus pecados?'
    },
    {
      id: 'cap-19a', n: 'Capítulo 19: Aleluya y las bodas del Cordero', ref: 'Apocalipsis 19:1-10',
      visual: [
        img(IMG + 'apo-bodas-cordero.webp', 'Un inmenso salón celestial bañado en luz dorada, con una multitud vestida de lino fino blanco y resplandeciente que celebra con las manos levantadas alrededor de largas mesas preparadas para un banquete', '«Bienaventurados los que son llamados a la cena de las bodas del Cordero» (Ap 19:9).'),
        pasaje('Y oí como la voz de una gran multitud, como el estruendo de muchas aguas, y como la voz de grandes truenos, que decía: ¡Aleluya, porque el Señor nuestro Dios Todopoderoso reina! Gocémonos y alegrémonos y démosle gloria; porque han llegado las bodas del Cordero, y su esposa se ha preparado. Y a ella se le ha concedido que se vista de lino fino, limpio y resplandeciente; porque el lino fino es las acciones justas de los santos. Y el ángel me dijo: Escribe: Bienaventurados los que son llamados a la cena de las bodas del Cordero. Y me dijo: Estas son palabras verdaderas de Dios.', 'Apocalipsis 19:6-9')
      ],
      texto: [
        'Después de la caída de Babilonia, el cielo estalla en alabanza. La palabra aleluya, que significa “alabad a Jah”, es decir, al Señor, aparece en todo el Nuevo Testamento solo aquí, cuatro veces (Ap 19:1, 3, 4, 6).',
        { h: 'Los aleluyas (19:1-6)' },
        'Una gran multitud dice: «¡Aleluya! Salvación y honra y gloria y poder son del Señor Dios nuestro; porque sus juicios son verdaderos y justos» (Ap 19:1-2). El cielo no celebra el sufrimiento, sino la justicia de Dios, que vengó la sangre de sus siervos. Los ancianos y los seres vivientes se unen, y finalmente una voz como de grandes aguas y fuertes truenos proclama: «¡Aleluya, porque el Señor nuestro Dios Todopoderoso reina!» (Ap 19:6).',
        { h: 'Las bodas del Cordero (19:7-9)' },
        '«Gocémonos y alegrémonos y démosle gloria; porque han llegado las bodas del Cordero, y su esposa se ha preparado» (Ap 19:7). La esposa del Cordero es la iglesia, a la que Pablo compara con una esposa desposada con Cristo (2 Co 11:2; Ef 5:25-27). Las bodas se celebran en el cielo, después del arrebatamiento y del tribunal de Cristo, y antes de que él vuelva a la tierra con los suyos.',
        'A la esposa se le concede vestirse de lino fino, limpio y resplandeciente, y el texto explica: «el lino fino es las acciones justas de los santos» (Ap 19:8). La salvación es por gracia, y aun el vestido «se le ha concedido» (Ap 19:8); pero la vida de obediencia de los creyentes, evaluada en el tribunal de Cristo (2 Co 5:10), se ve en la boda. Luego el ángel dice: «Bienaventurados los que son llamados a la cena de las bodas del Cordero» (Ap 19:9). Muchos entienden que la cena incluye a los invitados, los santos del Antiguo Testamento y de la tribulación, y que se celebra en la tierra al comienzo del milenio.',
        { h: 'Adora a Dios (19:10)' },
        'Abrumado, Juan se postra a los pies del ángel para adorarlo. El ángel lo detiene: «Mira, no lo hagas; yo soy consiervo tuyo, y de tus hermanos que retienen el testimonio de Jesús. Adora a Dios; porque el testimonio de Jesús es el espíritu de la profecía» (Ap 19:10). Ni siquiera el más glorioso de los ángeles puede recibir adoración. Y toda profecía verdadera da testimonio de Jesús.'
      ],
      pensar: 'La esposa del Cordero «se ha preparado» para las bodas (Ap 19:7). ¿Cómo te estás preparando tú para el encuentro con Cristo? ¿Qué «acciones justas» quiere él ver en tu vida?'
    },
    {
      id: 'cap-19b', n: 'Capítulo 19: La venida del Rey', ref: 'Apocalipsis 19:11-21; Zacarías 14:3-4; Mateo 24:29-30; 2 Tesalonicenses 2:8',
      visual: [
        img(ESC + 'esc-segunda-venida.webp', 'El cielo abierto y Cristo glorioso montado en un caballo blanco, con muchas coronas y un manto teñido en sangre, seguido de ejércitos celestiales vestidos de lino blanco', '«Vi el cielo abierto; y he aquí un caballo blanco» (Ap 19:11).'),
        tabla('Nombres', {
          titulo: 'Los nombres del jinete',
          cab: ['Nombre', 'Pasaje', 'Qué expresa'],
          filas: [
            ['Fiel y Verdadero', '19:11', 'Cumple lo que promete; juzga con justicia'],
            ['Un nombre que ninguno conocía sino él mismo', '19:12', 'Hay en Cristo una gloria que no podemos abarcar'],
            ['El Verbo de Dios', '19:13', 'Es la Palabra eterna hecha carne (Jn 1:1, 14)'],
            ['Rey de reyes y Señor de señores', '19:16', 'Su autoridad está sobre todo poder']
          ]
        })
      ],
      texto: [
        'Este es el momento que todo el libro espera, y que Jesús anunció: verán al Hijo del Hombre viniendo sobre las nubes del cielo, con poder y gran gloria (Mt 24:30). Juan ve el cielo abierto y un caballo blanco. Su jinete se llama Fiel y Verdadero, y con justicia juzga y pelea (Ap 19:11).',
        { h: 'El Rey que viene' },
        'Sus ojos son como llama de fuego, como en el capítulo 1, y sobre su cabeza hay muchas diademas, porque es el Rey legítimo de todas las naciones. Viste una ropa teñida en sangre, que recuerda a Isaías 63:1-3, y su nombre es «EL VERBO DE DIOS» (Ap 19:13). De su boca sale una espada aguda para herir a las naciones, y las regirá con vara de hierro. En su vestidura y en su muslo tiene escrito: «REY DE REYES Y SEÑOR DE SEÑORES» (Ap 19:16).',
        { h: 'Los ejércitos del cielo' },
        'Lo siguen los ejércitos que están en el cielo, «vestidos de lino finísimo, blanco y limpio» (Ap 19:14). Es la misma vestidura de la esposa en el versículo 8: la iglesia, arrebatada antes de la tribulación, regresa ahora con su Señor, junto con los ángeles (Mt 25:31). Pablo lo había anunciado: cuando Cristo se manifieste, vosotros también seréis manifestados con él en gloria (Col 3:4). Los ejércitos no pelean; la victoria es solo del Rey.',
        { h: 'La gran cena de Dios' },
        'Un ángel convoca a las aves para «la gran cena de Dios», un contraste terrible con la cena de las bodas del Cordero. La bestia y los reyes de la tierra se reúnen para guerrear contra el jinete y su ejército, pero la batalla termina antes de empezar. La bestia y el falso profeta son apresados y lanzados vivos al lago de fuego que arde con azufre. Los demás mueren por la espada que sale de la boca del Rey (Ap 19:20-21). Pablo lo dijo así: el Señor matará al inicuo con el espíritu de su boca y lo destruirá con el resplandor de su venida (2 Ts 2:8).',
        'Zacarías añade que en aquel día sus pies se afirmarán sobre el monte de los Olivos (Zac 14:4), desde donde había ascendido (Hch 1:11). Comienza el reino.'
      ],
      pensar: 'El que murió como Cordero vuelve como Rey de reyes, y la batalla se gana con una palabra de su boca (Ap 19:15, 21). ¿Qué te dice esto sobre el poder de su palabra hoy en tu vida y en tus luchas?'
    },
    {
      id: 'cap-20a', n: 'Capítulo 20: Mil años', ref: 'Apocalipsis 20:1-6; Isaías 11:1-10; Daniel 7:27; 1 Corintios 6:2',
      visual: [
        img(ESC + 'esc-milenio.webp', 'Un paisaje fértil y en paz junto a Jerusalén reconstruida: un lobo y un cordero descansan juntos, un león come paja, y familias trabajan los campos', '«Morará el lobo con el cordero» (Is 11:6).'),
        tabla('Posturas', {
          titulo: 'Tres maneras de entender los mil años',
          cab: ['Postura', 'Qué son los mil años', 'Cuándo viene Cristo'],
          filas: [
            ['Premilenarismo', 'Un reinado literal de Cristo en la tierra', 'Antes del milenio'],
            ['Amilenarismo', 'El reinado espiritual de Cristo durante la era de la iglesia', 'Al final de la era presente; no hay milenio terrenal'],
            ['Postmilenarismo', 'Una época de triunfo del evangelio antes de la venida', 'Después del milenio']
          ],
          nota: 'Este estudio sigue el premilenarismo, la lectura más natural de la secuencia de los capítulos 19 y 20.'
        })
      ],
      texto: [
        'Después de la venida de Cristo, Juan ve un ángel que desciende del cielo con la llave del abismo y una gran cadena. Prende al dragón, la serpiente antigua, y lo ata por mil años; lo arroja al abismo y pone su sello sobre él, «para que no engañase más a las naciones, hasta que fuesen cumplidos mil años» (Ap 20:3).',
        { h: 'Satanás atado' },
        'La expresión mil años aparece seis veces en estos siete versículos. Satanás no queda solo limitado, sino encerrado y sellado, sin poder engañar a las naciones. Eso no describe la era presente, en la que el diablo anda «como león rugiente, anda alrededor buscando a quien devorar» (1 P 5:8). Por eso este estudio entiende el milenio como un período futuro, después de la segunda venida, tal como lo presenta el orden de los capítulos 19 y 20.',
        { h: 'Los que reinan con Cristo' },
        'Juan ve tronos, y a los que se sientan en ellos se les da facultad de juzgar. Ve también las almas de los decapitados por el testimonio de Jesús, que no adoraron a la bestia ni recibieron su marca, «y vivieron y reinaron con Cristo mil años» (Ap 20:4). Reinan con él los santos de todas las épocas, como Pablo había dicho a los corintios: «¿No sabéis que los santos han de juzgar al mundo?» (1 Co 6:2).',
        { h: 'La primera resurrección' },
        '«Esta es la primera resurrección. Bienaventurado y santo el que tiene parte en la primera resurrección; la segunda muerte no tiene potestad sobre éstos» (Ap 20:5-6). La primera resurrección no es un solo momento, sino la resurrección de los justos en etapas: Cristo, las primicias; los creyentes en el arrebatamiento; y los santos de la tribulación y del Antiguo Testamento al comienzo del milenio (1 Co 15:23). Los demás muertos no vuelven a vivir hasta después de los mil años.',
        { h: 'El reino prometido' },
        'El milenio cumple lo que los profetas anunciaron: un Rey de la casa de David que gobierna con justicia, paz entre las naciones, Jerusalén como centro de adoración y una creación renovada (Is 2:2-4; 11:1-10; Zac 14:9, 16). Cristo reinará en la misma tierra donde fue rechazado.'
      ],
      pensar: 'Los que fueron fieles hasta la muerte reinarán con Cristo mil años (Ap 20:4). ¿Cómo te anima en tus pruebas de hoy saber que la fidelidad tiene una recompensa real en el reino de Cristo?'
    },
    {
      id: 'cap-20b', n: 'Capítulo 20: El último juicio', ref: 'Apocalipsis 20:7-15; Ezequiel 38–39; Juan 5:22, 28-29',
      visual: [
        img(ESC + 'esc-trono-blanco.webp', 'Un inmenso trono blanco y resplandeciente en el espacio, del que huyen la tierra y el cielo, ante el cual está una multitud de muertos de pie frente a libros abiertos', '«Vi un gran trono blanco» (Ap 20:11).'),
        pasaje('Y vi un gran trono blanco y al que estaba sentado en él, de delante del cual huyeron la tierra y el cielo, y ningún lugar se encontró para ellos. Y vi a los muertos, grandes y pequeños, de pie ante Dios; y los libros fueron abiertos, y otro libro fue abierto, el cual es el libro de la vida; y fueron juzgados los muertos por las cosas que estaban escritas en los libros, según sus obras.', 'Apocalipsis 20:11-12')
      ],
      texto: [
        { h: 'La última rebelión (20:7-10)' },
        'Cuando se cumplen los mil años, Satanás es suelto de su prisión y sale a engañar a las naciones de los cuatro ángulos de la tierra, «a Gog y a Magog», para reunirlas para la batalla (Ap 20:8). Los nombres vienen de Ezequiel 38 y 39, pero aquí se usan para todas las naciones rebeldes del mundo. Rodean el campamento de los santos y la ciudad amada, Jerusalén, y fuego del cielo los consume.',
        'Esta rebelión muestra algo profundo: después de mil años de gobierno perfecto, de paz y de justicia, muchos que nacieron durante el milenio siguen teniendo un corazón rebelde. El problema del hombre no es solo su ambiente; es su corazón. Solo el nuevo nacimiento lo cambia. El diablo es lanzado al lago de fuego, donde estaban la bestia y el falso profeta, «y serán atormentados día y noche por los siglos de los siglos» (Ap 20:10).',
        { h: 'El gran trono blanco (20:11-15)' },
        'Juan ve «un gran trono blanco y al que estaba sentado en él, de delante del cual huyeron la tierra y el cielo» (Ap 20:11). El que juzga es Cristo, porque el Padre «todo el juicio dio al Hijo» (Jn 5:22). Ante el trono están los muertos, grandes y pequeños: los que no tuvieron parte en la primera resurrección. El mar, la muerte y el Hades entregan sus muertos.',
        'Se abren libros, y otro libro, el de la vida. Los muertos son juzgados «por las cosas que estaban escritas en los libros, según sus obras» (Ap 20:12). Las obras determinan el grado del castigo, pero el destino lo decide el libro de la vida: «el que no se halló inscrito en el libro de la vida fue lanzado al lago de fuego» (Ap 20:15). Nadie se salva por sus obras; la única esperanza es tener el nombre escrito en el libro del Cordero (Ap 21:27).',
        { h: 'La segunda muerte' },
        'La muerte y el Hades también son lanzados al lago de fuego: «Esta es la muerte segunda» (Ap 20:14). La primera muerte separa el alma del cuerpo; la segunda es la separación eterna de Dios. Para el creyente, esto no es motivo de temor, sino de gratitud y de urgencia: gratitud porque Cristo lo libró de ese juicio (Jn 5:24), y urgencia por los que todavía no le conocen.'
      ],
      pensar: 'Ante el gran trono blanco, lo decisivo es si el nombre está escrito en el libro de la vida (Ap 20:15). ¿Tienes la seguridad de que tu nombre está escrito allí? ¿Por quién de tu entorno sientes la urgencia de orar y de hablarle de Cristo?'
    },
    {
      id: 'cap-21a', n: 'Capítulo 21: Todas las cosas nuevas', ref: 'Apocalipsis 21:1-8; Isaías 65:17; 2 Pedro 3:10-13',
      visual: [
        img(ESC + 'esc-nueva-jerusalen.webp', 'La nueva Jerusalén desciende del cielo, una ciudad resplandeciente como piedra de jaspe, con muros de piedras preciosas y puertas de perla, sobre una tierra nueva', '«Vi la santa ciudad, la nueva Jerusalén, descender del cielo» (Ap 21:2).'),
        tabla('Lo que no habrá', {
          titulo: 'Lo que ya no existirá',
          cab: ['Ya no habrá', 'Pasaje'],
          filas: [
            ['Mar', '21:1'],
            ['Lágrimas', '21:4'],
            ['Muerte', '21:4'],
            ['Llanto, clamor ni dolor', '21:4'],
            ['Templo, porque Dios y el Cordero son su templo', '21:22'],
            ['Necesidad de sol ni de luna', '21:23'],
            ['Noche', '21:25; 22:5'],
            ['Nada inmundo', '21:27'],
            ['Maldición', '22:3']
          ]
        })
      ],
      texto: [
        '«Vi un cielo nuevo y una tierra nueva; porque el primer cielo y la primera tierra pasaron, y el mar ya no existía más» (Ap 21:1). Después del juicio final, Dios no se limita a reparar lo dañado: crea todo de nuevo. Isaías lo había anunciado (Is 65:17; 66:22), y Pedro también: los cielos y la tierra de ahora serán deshechos, pero nosotros esperamos, según sus promesas, cielos nuevos y tierra nueva, en los cuales mora la justicia (2 P 3:10-13).',
        { h: 'El tabernáculo de Dios con los hombres' },
        'Juan ve la nueva Jerusalén descender del cielo, «dispuesta como una esposa ataviada para su marido» (Ap 21:2), y oye la promesa que resume toda la Biblia: «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios» (Ap 21:3). Lo que Dios quiso desde el Edén, lo que anticiparon el tabernáculo y el templo, y lo que comenzó cuando el Verbo «habitó entre nosotros» (Jn 1:14), llega a su plenitud.',
        { h: 'Sin lágrimas' },
        '«Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron» (Ap 21:4). La tabla reúne lo que no existirá en la nueva creación. Son las consecuencias del pecado, que desaparecen para siempre. Y el que está sentado en el trono declara: «He aquí, yo hago nuevas todas las cosas… Escribe; porque estas palabras son fieles y verdaderas» (Ap 21:5).',
        { h: 'Una invitación y una advertencia (21:6-8)' },
        'Dios dice: «Hecho está. Yo soy el Alfa y la Omega… Al que tuviere sed, yo le daré gratuitamente de la fuente del agua de la vida» (Ap 21:6). La entrada es gratuita: por gracia. Y el vencedor heredará todas las cosas, y Dios será su Dios y él será su hijo. Pero junto a la invitación hay una advertencia: los cobardes, incrédulos, homicidas, hechiceros, idólatras y todos los mentirosos tendrán su parte en el lago de fuego (Ap 21:8). Quien no acepta el agua de la vida se excluye a sí mismo de la ciudad.'
      ],
      pensar: '«Enjugará Dios toda lágrima» (Ap 21:4). ¿Qué dolor o pérdida en tu vida encuentra consuelo en esta promesa? ¿Cómo cambia tu manera de enfrentar el sufrimiento de hoy?'
    },
    {
      id: 'cap-21b', n: 'Capítulo 21: La nueva Jerusalén', ref: 'Apocalipsis 21:9-27; Ezequiel 48:30-35; Hebreos 11:10',
      visual: [
        img(IMG + 'apo-ciudad-puertas.webp', 'Vista cercana del muro de jaspe resplandeciente de la nueva Jerusalén, con cimientos adornados de piedras preciosas de muchos colores y una enorme puerta hecha de una sola perla, abierta, con una calle de oro transparente como vidrio que se ve al otro lado', '«Las doce puertas eran doce perlas» (Ap 21:21).'),
        tabla('La ciudad', {
          titulo: 'La ciudad en números',
          cab: ['Elemento', 'Descripción', 'Pasaje'],
          filas: [
            ['Puertas', 'Doce, de perla, con los nombres de las doce tribus de Israel', '21:12, 21'],
            ['Cimientos', 'Doce, con los nombres de los doce apóstoles del Cordero, adornados de piedras preciosas', '21:14, 19-20'],
            ['Medida', '12.000 estadios de largo, ancho y alto (unos 2.200 km)', '21:16'],
            ['Muro', '144 codos (unos 65 metros), de jaspe', '21:17-18'],
            ['La ciudad', 'Oro puro, semejante al vidrio limpio', '21:18, 21'],
            ['La luz', 'La gloria de Dios, y el Cordero es su lumbrera', '21:23']
          ]
        })
      ],
      texto: [
        'Uno de los ángeles de las copas invita a Juan: «Ven acá, yo te mostraré la desposada, la esposa del Cordero» (Ap 21:9). Son casi las mismas palabras con que otro ángel le mostró a la gran ramera (Ap 17:1). Babilonia, que fue juzgada, y la nueva Jerusalén, que desciende de Dios, son las dos ciudades del libro. Juan es llevado en el Espíritu a un monte grande y alto, y ve la santa ciudad, que tiene la gloria de Dios.',
        { h: 'Israel y la iglesia en la ciudad' },
        'La ciudad tiene un muro con doce puertas, y en ellas están los nombres de las doce tribus de Israel, como en la Jerusalén que vio Ezequiel (Ez 48:31-34). Sus doce cimientos llevan los nombres de los doce apóstoles del Cordero. Los redimidos del Antiguo y del Nuevo Testamento comparten la misma ciudad. Es la ciudad que esperaba Abraham, «la ciudad que tiene fundamentos, cuyo arquitecto y constructor es Dios» (He 11:10).',
        { h: 'Un cubo perfecto' },
        'El ángel mide la ciudad con una caña de oro: doce mil estadios de largo, de ancho y de alto (Ap 21:16). Es un cubo, como el lugar santísimo del tabernáculo y del templo (1 R 6:20). Toda la ciudad es el lugar santísimo: allí se vive en la presencia directa de Dios. Por eso Juan dice: «no vi en ella templo; porque el Señor Dios Todopoderoso es el templo de ella, y el Cordero» (Ap 21:22). Algunos entienden las medidas de forma literal, como una ciudad inmensa; otros, como expresión de perfección. En ambos casos, el mensaje es que hay lugar de sobra para todos los redimidos.',
        { h: 'Una ciudad de luz' },
        'Las piedras de los cimientos recuerdan las del pectoral del sumo sacerdote (Éx 28:17-20). Cada puerta es una perla, y la calle es oro puro, transparente como vidrio. La ciudad no necesita sol ni luna, porque la gloria de Dios la ilumina y el Cordero es su lumbrera. Sus puertas no se cierran nunca, porque allí no hay noche y no hay enemigos. Las naciones andan a su luz y llevan a ella su gloria y su honra. Pero no entrará en ella ninguna cosa inmunda, «sino solamente los que están inscritos en el libro de la vida del Cordero» (Ap 21:27).'
      ],
      pensar: 'La nueva Jerusalén no tiene templo porque Dios y el Cordero son su templo (Ap 21:22). ¿Qué te dice esto sobre el centro de la esperanza cristiana: es un lugar, o es estar con Dios?'
    },
    {
      id: 'cap-22a', n: 'Capítulo 22: El río y el árbol de la vida', ref: 'Apocalipsis 22:1-5; Génesis 2:9-10; 3:22-24; Ezequiel 47:1-12',
      visual: [
        img(IMG + 'apo-rio-vida.webp', 'Un río de agua cristalina y resplandeciente fluye por el centro de una ancha calle de oro en una ciudad luminosa, con grandes árboles cargados de frutos a ambos lados del río', '«Un río limpio de agua de vida, resplandeciente como cristal» (Ap 22:1).'),
        pasaje('Después me mostró un río limpio de agua de vida, resplandeciente como cristal, que salía del trono de Dios y del Cordero. En medio de la calle de la ciudad, y a uno y otro lado del río, estaba el árbol de la vida, que produce doce frutos, dando cada mes su fruto; y las hojas del árbol eran para la sanidad de las naciones. Y no habrá más maldición; y el trono de Dios y del Cordero estará en ella, y sus siervos le servirán, y verán su rostro, y su nombre estará en sus frentes. No habrá allí más noche; y no tienen necesidad de luz de lámpara, ni de luz del sol, porque Dios el Señor los iluminará; y reinarán por los siglos de los siglos.', 'Apocalipsis 22:1-5')
      ],
      texto: [
        'Los primeros versículos del capítulo 22 completan la descripción de la ciudad, y al hacerlo cierran el círculo que se abrió en Génesis.',
        { h: 'El río de la vida (22:1)' },
        'El ángel muestra a Juan «un río limpio de agua de vida, resplandeciente como cristal, que salía del trono de Dios y del Cordero» (Ap 22:1). En el Edén salía un río para regar el huerto (Gn 2:10). Ezequiel vio un río que salía del templo y daba vida a todo lo que tocaba (Ez 47:9). Jesús prometió que de su interior correrían ríos de agua viva, y Juan explicó que hablaba del Espíritu (Jn 7:38-39). La fuente de la vida eterna es el trono de Dios y del Cordero.',
        { h: 'El árbol de la vida (22:2)' },
        'A uno y otro lado del río está el árbol de la vida, que produce doce frutos, uno cada mes, y sus hojas son para la sanidad de las naciones. Después del pecado, Dios puso querubines para guardar el camino del árbol de la vida (Gn 3:24); ahora el acceso está abierto. Las hojas para la sanidad no indican que haya enfermedad, porque ya no hay dolor (Ap 21:4), sino que la vida plena de Dios sostiene continuamente a los redimidos.',
        { h: 'Verán su rostro (22:3-5)' },
        '«Y no habrá más maldición; y el trono de Dios y del Cordero estará en ella, y sus siervos le servirán, y verán su rostro, y su nombre estará en sus frentes» (Ap 22:3-4). Es la cumbre de la esperanza bíblica. Moisés pidió ver la gloria de Dios y se le dijo que no podía ver su rostro y vivir (Éx 33:20). Jesús prometió que los de limpio corazón verían a Dios (Mt 5:8). En la nueva Jerusalén, el deseo más profundo del alma humana queda satisfecho.',
        'La eternidad no será una inactividad aburrida. Los siervos de Dios le servirán, y «reinarán por los siglos de los siglos» (Ap 22:5). Habrá adoración, servicio, comunión y una vida que nunca se acaba, a la luz de Dios, sin necesidad de lámpara ni de sol.'
      ],
      pensar: '«Verán su rostro» (Ap 22:4). Si ver el rostro de Dios es la meta final de la vida cristiana, ¿cómo debería influir esa esperanza en tus prioridades de hoy (1 Jn 3:2-3)?'
    },
    {
      id: 'cap-22b', n: 'Capítulo 22: Vengo pronto', ref: 'Apocalipsis 22:6-21',
      visual: [
        img(IMG + 'apo-juan-angel.webp', 'En la cueva de Patmos iluminada por una luz celestial, Juan, anciano, comienza a arrodillarse ante un ángel resplandeciente que lo detiene extendiendo la mano, con un rollo terminado sobre una piedra', '«Mira, no lo hagas; porque yo soy consiervo tuyo… Adora a Dios» (Ap 22:9).'),
        tabla('Vengo pronto', {
          titulo: 'Tres veces «vengo pronto»',
          cab: ['Pasaje', 'Lo que acompaña la promesa'],
          filas: [
            ['22:7', 'Bienaventurado el que guarda las palabras de la profecía'],
            ['22:12', 'Mi galardón conmigo, para recompensar a cada uno según sea su obra'],
            ['22:20', 'Amén; sí, ven, Señor Jesús']
          ]
        })
      ],
      texto: [
        'El epílogo del libro retoma los temas del prólogo: estas palabras son fieles y verdaderas, Dios envió a su ángel para mostrar lo que debe suceder pronto, y es bienaventurado el que guarda la profecía. Tres veces Cristo dice: «vengo pronto» (Ap 22:7, 12, 20).',
        { h: 'No selles el libro (22:6-11)' },
        'Otra vez Juan cae para adorar al ángel, y otra vez es detenido: «Adora a Dios» (Ap 22:9). Luego recibe una orden contraria a la que recibió Daniel: «No selles las palabras de la profecía de este libro, porque el tiempo está cerca» (Ap 22:10). Lo que a Daniel se le mandó sellar hasta el tiempo del fin (Dn 12:4), a Juan se le manda dejarlo abierto. El libro debe leerse, enseñarse y obedecerse ahora.',
        { h: 'El Alfa y la Omega (22:12-17)' },
        'Cristo se presenta con títulos que solo Dios puede llevar: «Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último» (Ap 22:13). Es también «la raíz y el linaje de David, la estrella resplandeciente de la mañana» (Ap 22:16): el Rey prometido a Israel y la luz que anuncia el nuevo día. Bienaventurados los que lavan sus ropas, para tener derecho al árbol de la vida y entrar por las puertas en la ciudad.',
        'Y entonces llega la gran invitación: «Y el Espíritu y la Esposa dicen: Ven. Y el que oye, diga: Ven. Y el que tiene sed, venga; y el que quiera, tome del agua de la vida gratuitamente» (Ap 22:17). El Espíritu Santo y la iglesia llaman juntos: a Cristo, para que venga, y al mundo, para que venga a Cristo mientras hay tiempo.',
        { h: 'Advertencia y bendición (22:18-21)' },
        'Juan advierte que nadie añada ni quite de las palabras de esta profecía (Ap 22:18-19). La Palabra de Dios no se adapta a nuestro gusto. Y el libro, y la Biblia entera, terminan con la promesa de Cristo y la respuesta de la iglesia: «Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús. La gracia de nuestro Señor Jesucristo sea con todos vosotros. Amén» (Ap 22:20-21). La última palabra de la Biblia es gracia.'
      ],
      pensar: '«El Espíritu y la Esposa dicen: Ven» (Ap 22:17). ¿Cómo participas tú en esa doble invitación: pedir a Cristo que venga y llamar a otros a venir a él?'
    }
  ];

  /* ---------------- Ruta IV · Teología del Apocalipsis ---------------- */
  const teologia = [
    {
      id: 't-dios', n: 'Dios en su trono', ref: 'Apocalipsis 1:4-5, 8; 4:8-11; 11:17; 15:3-4; 19:6; 21:5-6',
      visual: [
        img(IMG + 'apo-trono.webp', 'Una sala celestial de luz con un trono resplandeciente rodeado por un arco iris de color esmeralda, un mar de vidrio y veinticuatro ancianos que echan sus coronas', 'El trono de Dios, centro del libro (Ap 4).'),
        tabla('Títulos', {
          titulo: 'Cómo llama el libro a Dios',
          cab: ['Título', 'Pasaje', 'Qué afirma'],
          filas: [
            ['El que es y que era y que ha de venir', '1:4, 8; 4:8', 'Eternidad y fidelidad en el tiempo'],
            ['El Todopoderoso', '1:8; 4:8; 19:6', 'Poder sin límites'],
            ['El que está sentado en el trono', '4:9; 5:13; 21:5', 'Gobierno soberano'],
            ['Santo, santo, santo', '4:8', 'Santidad absoluta'],
            ['Rey de los santos (o de las naciones)', '15:3', 'Rey de su pueblo y del mundo'],
            ['El Alfa y la Omega', '1:8; 21:6', 'Principio y fin de todo']
          ]
        })
      ],
      texto: [
        'La primera verdad del Apocalipsis es que Dios reina. En un tiempo en que el emperador se hacía llamar señor y dios, el libro muestra quién es el verdadero Señor de la historia.',
        { h: 'El Dios eterno' },
        'Dios se presenta como «el que es y que era y que ha de venir, el Todopoderoso» (Ap 1:8). La fórmula recuerda el nombre revelado a Moisés, «YO SOY EL QUE SOY» (Éx 3:14). No está atado al tiempo, pero actúa en el tiempo; no solo existe, sino que viene a cumplir sus propósitos.',
        { h: 'Soberano sobre el mal' },
        'Una manera de hablar se repite en los capítulos de juicio: algo «le fue dado» al que actúa. Al primer jinete «le fue dada una corona» (Ap 6:2); a la bestia «se le dio autoridad para actuar cuarenta y dos meses» (Ap 13:5). Aun el mal actúa dentro de límites que Dios fija. Satanás es fuerte, pero no es el rival igual de Dios: es una criatura, y su fin ya está escrito (Ap 20:10).',
        { h: 'Un solo Dios en tres personas' },
        'El saludo del libro presenta la gracia que viene del Padre, «del que es y que era y que ha de venir», del Espíritu, «los siete espíritus que están delante de su trono», y de Jesucristo (Ap 1:4-5). El Apocalipsis no usa la palabra Trinidad, pero muestra que la adoración que se da al Padre se da también al Cordero (Ap 5:13), y que el Espíritu habla a las iglesias con la autoridad de Cristo.',
        { h: 'Santo y justo' },
        'Los juicios del libro brotan de la santidad de Dios. El cielo los celebra no porque sea cruel, sino porque Dios es justo: «tus juicios son verdaderos y justos» (Ap 16:7; 19:2). Un Dios que no juzgara el mal no sería bueno. Y al mismo tiempo, el mismo Dios ofrece gratuitamente el agua de la vida al que tiene sed (Ap 21:6).',
        'Por eso el Apocalipsis es un libro de adoración. Desde el capítulo 4, la reacción ante Dios es siempre la misma: postrarse y adorar.'
      ],
      pensar: 'El emperador exigía ser llamado señor y dios, pero el Apocalipsis muestra que solo uno está en el trono. ¿Quién o qué ocupa el trono de tu vida en la práctica, en tus decisiones de cada día?'
    },
    {
      id: 't-cristo', n: 'Cristo en el Apocalipsis', ref: 'Apocalipsis 1:5, 8, 13-18; 2:18; 3:7, 14; 5:5-6; 19:11-16; 22:13, 16',
      visual: [
        tabla('Títulos de Cristo', {
          titulo: 'Los títulos de Cristo en Apocalipsis',
          cab: ['Título', 'Pasaje', 'Qué revela'],
          filas: [
            ['El testigo fiel', '1:5; 3:14', 'Su vida y su muerte dicen la verdad de Dios'],
            ['El primogénito de los muertos', '1:5', 'Primero en resucitar para no morir más'],
            ['El soberano de los reyes de la tierra', '1:5', 'Su autoridad sobre los gobiernos'],
            ['Uno semejante al Hijo del Hombre', '1:13; 14:14', 'El de Daniel 7:13'],
            ['El primero y el último', '1:17; 2:8; 22:13', 'Su deidad (Is 44:6)'],
            ['El Hijo de Dios', '2:18', 'Su relación única con el Padre'],
            ['El que tiene la llave de David', '3:7', 'El Mesías, heredero del trono'],
            ['El Amén', '3:14', 'El sí de todas las promesas (2 Co 1:20)'],
            ['El León de la tribu de Judá', '5:5', 'El Rey prometido (Gn 49:9-10)'],
            ['El Cordero', '5:6 y 27 veces más', 'Su sacrificio'],
            ['Fiel y Verdadero; el Verbo de Dios', '19:11, 13', 'Su fidelidad; la Palabra eterna'],
            ['Rey de reyes y Señor de señores', '17:14; 19:16', 'Su reinado universal'],
            ['La estrella resplandeciente de la mañana', '22:16', 'El que anuncia el nuevo día']
          ]
        }),
        img(IMG + 'apo-cristo-glorificado.webp', 'Juan cae ante Cristo glorificado entre siete candeleros de oro', 'Cristo glorificado (Ap 1:13-17).')
      ],
      texto: [
        'El Apocalipsis es «la revelación de Jesucristo» (Ap 1:1), y ningún libro del Nuevo Testamento le da tantos títulos. La tabla reúne los principales.',
        { h: 'Plenamente Dios' },
        'El libro aplica a Cristo lo que el Antiguo Testamento dice solo de Dios. Se llama «el primero y el último» (Ap 1:17), como el Señor en Isaías 44:6. Dice: «Yo soy el Alfa y la Omega» (Ap 22:13), el mismo título que usa Dios en 1:8 y 21:6. Recibe la misma adoración que el que está sentado en el trono (Ap 5:13), cuando el libro prohíbe dos veces adorar a un ángel (Ap 19:10; 22:9). Y comparte el trono de Dios (Ap 3:21; 22:1). Un simple ser creado no podría recibir nada de esto.',
        { h: 'El Cordero inmolado' },
        'Al mismo tiempo, Cristo es verdadero hombre, que murió y resucitó: «el que vivo, y estuve muerto; mas he aquí que vivo por los siglos de los siglos» (Ap 1:18). Su título favorito en el libro es Cordero, y aparece «como inmolado» (Ap 5:6), con las señales de su muerte aún visibles en la gloria. Toda su autoridad para abrir el libro y juzgar al mundo viene de la cruz: «porque tú fuiste inmolado» (Ap 5:9).',
        { h: 'Señor de la iglesia' },
        'En los capítulos 2 y 3, Cristo camina entre los candeleros, conoce las obras de cada iglesia, la elogia, la corrige y la llama al arrepentimiento. No es un Señor lejano: dice siete veces «Yo conozco» (Ap 2:2, 9, 13, 19; 3:1, 8, 15) y está a la puerta llamando (Ap 3:20).',
        { h: 'El Rey que vuelve' },
        'Finalmente, Cristo es el Rey que viene. Volverá visiblemente, «y todo ojo le verá» (Ap 1:7), juzgará a las naciones, reinará mil años y será, con el Padre, la luz y el templo de la nueva Jerusalén (Ap 21:22-23). El Cordero que fue rechazado tendrá la última palabra.'
      ],
      pensar: 'Cristo conserva en la gloria las señales de su muerte, «como inmolado» (Ap 5:6). ¿Qué te dice esto sobre el valor eterno de la cruz y sobre el amor con que fuiste comprado?'
    },
    {
      id: 't-espiritu', n: 'El Espíritu Santo en el Apocalipsis', ref: 'Apocalipsis 1:4, 10; 2:7; 4:2, 5; 5:6; 14:13; 17:3; 19:10; 21:10; 22:17',
      visual: [
        tabla('El Espíritu', {
          titulo: 'El Espíritu Santo en Apocalipsis',
          cab: ['Expresión', 'Pasaje', 'Qué enseña'],
          filas: [
            ['Los siete espíritus delante del trono', '1:4; 3:1; 4:5; 5:6', 'La plenitud del Espíritu Santo (Is 11:2; Zac 4:2-10)'],
            ['Estaba en el Espíritu', '1:10; 4:2; 17:3; 21:10', 'El Espíritu conduce al profeta y le revela las visiones'],
            ['Lo que el Espíritu dice a las iglesias', '2:7, 11, 17, 29; 3:6, 13, 22', 'El Espíritu habla hoy con la voz de Cristo'],
            ['Sí, dice el Espíritu', '14:13', 'El Espíritu consuela a los que mueren en el Señor'],
            ['El espíritu de la profecía', '19:10', 'Toda profecía verdadera da testimonio de Jesús'],
            ['El Espíritu y la Esposa dicen: Ven', '22:17', 'El Espíritu y la iglesia invitan juntos']
          ]
        }),
        pasaje('Y el Espíritu y la Esposa dicen: Ven. Y el que oye, diga: Ven. Y el que tiene sed, venga; y el que quiera, tome del agua de la vida gratuitamente.', 'Apocalipsis 22:17')
      ],
      texto: [
        'A veces se piensa que el Espíritu Santo está ausente del Apocalipsis, pero en realidad está presente desde el saludo hasta la última invitación, aunque de un modo menos visible que el Padre y el Hijo.',
        { h: 'Los siete espíritus' },
        'El saludo del libro menciona a «los siete espíritus que están delante de su trono» entre el Padre y Jesucristo (Ap 1:4). No se trata de siete ángeles, porque la gracia y la paz solo pueden venir de Dios. Es una manera de nombrar al Espíritu Santo en su plenitud, con el número siete, que recuerda los siete candeleros de Zacarías 4 y la descripción del Espíritu en Isaías 11:2. El Cordero tiene «siete ojos, los cuales son los siete espíritus de Dios enviados por toda la tierra» (Ap 5:6): el Espíritu es enviado por Cristo y actúa en todo el mundo.',
        { h: 'En el Espíritu' },
        'Cuatro veces Juan dice que estaba «en el Espíritu» (Ap 1:10; 4:2; 17:3; 21:10), y cada vez comienza una gran sección del libro. El Apocalipsis es fruto de una experiencia profunda con el Espíritu Santo, como la de los profetas del Antiguo Testamento. Es una lección para los creyentes pentecostales: el Espíritu no solo da dones para el servicio, sino que abre los ojos para ver a Cristo y entender el plan de Dios, siempre de acuerdo con la Escritura.',
        { h: 'Lo que el Espíritu dice' },
        'Las siete cartas son palabras de Cristo, pero cada una termina diciendo: «El que tiene oído, oiga lo que el Espíritu dice a las iglesias». La voz de Cristo glorificado llega a las iglesias por medio del Espíritu. Y lo que el Espíritu dice a una iglesia, lo dice a todas, hoy también. Escuchar al Espíritu no es buscar mensajes ajenos a la Escritura, sino oír lo que Cristo ya dijo y obedecerlo.',
        { h: 'El Espíritu de la profecía' },
        '«El testimonio de Jesús es el espíritu de la profecía» (Ap 19:10). El don de profecía, que la iglesia pentecostal valora, tiene un centro: dar testimonio de Jesús. Una palabra que no exalta a Cristo no viene del Espíritu. Y al final del libro, el Espíritu se une a la Esposa para decir «Ven» (Ap 22:17): el mismo Espíritu que llena a la iglesia la impulsa a anhelar la venida de Cristo y a invitar al mundo a la salvación.'
      ],
      pensar: 'Siete veces el libro dice: «El que tiene oído, oiga lo que el Espíritu dice a las iglesias». ¿Cómo cultivas un oído atento a la voz del Espíritu por medio de la Palabra? ¿Qué te está diciendo hoy?'
    },
    {
      id: 't-satanas', n: 'Satanás y la guerra espiritual', ref: 'Apocalipsis 2:9-10, 13; 12:7-12; 13:2; 16:13-14; 20:1-3, 7-10',
      visual: [
        img(IMG + 'apo-mujer-dragon.webp', 'Una mujer vestida de luz como el sol y un gran dragón rojo de siete cabezas entre nubes de tormenta', 'El dragón contra la mujer y su hijo (Ap 12).', '62% 50%'),
        tabla('La derrota', {
          titulo: 'Las etapas de la derrota de Satanás',
          cab: ['Etapa', 'Pasaje'],
          filas: [
            ['Vencido en la cruz', 'Jn 12:31; Col 2:15; Ap 12:5, 11'],
            ['Arrojado del cielo a la tierra en la tribulación', 'Ap 12:7-9, 12'],
            ['Atado en el abismo durante el milenio', 'Ap 20:1-3'],
            ['Suelto por poco tiempo y derrotado otra vez', 'Ap 20:7-9'],
            ['Lanzado al lago de fuego para siempre', 'Ap 20:10']
          ]
        })
      ],
      texto: [
        'El Apocalipsis quita el velo de la historia y muestra que detrás de la persecución de las iglesias hay un enemigo personal. El libro le da muchos nombres: el dragón, la serpiente antigua, el diablo, Satanás, el acusador de nuestros hermanos y el que engaña al mundo entero (Ap 12:9-10).',
        { h: 'Detrás de los poderes' },
        'En Esmirna, Satanás actúa por medio de la sinagoga que acusa (Ap 2:9) y del diablo que echa a algunos en la cárcel (Ap 2:10). En Pérgamo, su trono está en una ciudad de idolatría (Ap 2:13). En los capítulos 12 y 13, el dragón da su poder y su trono a la bestia. La persecución, la falsa religión y el poder político opuesto a Dios tienen detrás una mente espiritual. Pablo enseñó lo mismo: no tenemos lucha contra sangre y carne, sino contra huestes espirituales de maldad (Ef 6:12).',
        { h: 'Un enemigo vencido' },
        'Pero el Apocalipsis nunca presenta a Satanás como un rival igual a Dios. El dragón quiso devorar al hijo y no pudo; perdió la guerra en el cielo; sabe que «tiene poco tiempo» (Ap 12:12). La tabla muestra las etapas de su derrota, que comenzó en la cruz y termina en el lago de fuego. Para el creyente, la victoria no está en el futuro solamente: ya se puede vencer hoy.',
        { h: 'Cómo se vence' },
        'El libro da la fórmula: «ellos le han vencido por medio de la sangre del Cordero y de la palabra del testimonio de ellos, y menospreciaron sus vidas hasta la muerte» (Ap 12:11). La sangre de Cristo quita toda base a las acusaciones del diablo. La palabra del testimonio, la confesión fiel de Cristo, lo enfrenta con la verdad. Y la entrega sin reservas le quita su arma más fuerte, el temor a la muerte (He 2:14-15).',
        'La guerra espiritual, según el Apocalipsis, no se gana con fórmulas ni con temor, sino con fidelidad a Cristo. El creyente lleno del Espíritu resiste con la autoridad del nombre de Jesús, sabiendo que «mayor es el que está en vosotros, que el que está en el mundo» (1 Jn 4:4).'
      ],
      pensar: 'Los santos vencieron «por medio de la sangre del Cordero y de la palabra del testimonio de ellos» (Ap 12:11). ¿Cuál de estas armas necesitas usar con más confianza en tus luchas espirituales de hoy?'
    },
    {
      id: 't-iglesia', n: 'La iglesia y el arrebatamiento', ref: 'Apocalipsis 3:10; 4:1; 19:7-8, 14; 1 Tesalonicenses 1:10; 4:16-17; 5:9',
      visual: [
        img(ESC + 'esc-arrebatamiento.webp', 'Al amanecer, sobre una ciudad y sus campos, creyentes de todas las edades ascienden hacia nubes luminosas', '«Seremos arrebatados juntamente con ellos en las nubes» (1 Ts 4:17).'),
        tabla('Iglesia', {
          titulo: 'La palabra «iglesia» en Apocalipsis',
          cab: ['Capítulos', 'Dónde está la iglesia'],
          filas: [
            ['1–3', 'En la tierra: «iglesia» o «iglesias», muchas veces'],
            ['4–18', 'La palabra no aparece; en la tierra hay santos de la tribulación'],
            ['19', 'En el cielo como esposa (19:7-8) y volviendo con Cristo (19:14)'],
            ['22:16', 'Cristo envía su testimonio «para las iglesias»']
          ]
        })
      ],
      texto: [
        'El Apocalipsis habla mucho de la iglesia en los capítulos 1 a 3, y luego guarda silencio sobre ella en la tierra hasta que reaparece en el cielo en el capítulo 19. Este hecho, junto con otras enseñanzas del Nuevo Testamento, es la base de la esperanza de un arrebatamiento antes de la tribulación.',
        { h: 'Guardados de la hora de la prueba' },
        'La promesa a Filadelfia es clave: «yo también te guardaré de la hora de la prueba que ha de venir sobre el mundo entero, para probar a los que moran sobre la tierra» (Ap 3:10). La prueba es mundial, no local, y la promesa no es guardar a la iglesia durante esa hora, sino de ella. Pablo enseña lo mismo: Jesús «nos libra de la ira venidera» (1 Ts 1:10), y «no nos ha puesto Dios para ira, sino para alcanzar salvación» (1 Ts 5:9).',
        { h: 'Sube acá' },
        'En 4:1, Juan oye una voz como de trompeta que le dice: «Sube acá». Ese llamado no es en sí el arrebatamiento, pero lo ilustra, y llega justo cuando el libro pasa de «las que son» a «las que han de ser después de estas». Durante la tribulación hay creyentes en la tierra, pero el libro los llama santos o siervos, y son los que se convierten en ese tiempo.',
        { h: 'La esposa en el cielo' },
        'En el capítulo 19, antes de que Cristo descienda, la esposa ya está en el cielo y se ha preparado para las bodas (Ap 19:7-8). Luego los ejércitos del cielo, vestidos con el mismo lino fino, vienen con él (Ap 19:14). Para volver con Cristo, la iglesia tuvo que ir antes a su encuentro.',
        { posturas: {
          titulo: '¿Cuándo es el arrebatamiento?',
          a: { n: 'Antes de la tribulación', t: 'La iglesia es arrebatada antes de la semana setenta (1 Ts 4:16-17; Ap 3:10). La venida de Cristo tiene dos fases: por sus santos, en el aire, y con sus santos, a la tierra (Ap 19:14). Es la postura de las iglesias pentecostales clásicas y de la escatología dispensacionalista.' },
          b: { n: 'A la mitad o al final', t: 'Otros enseñan que la iglesia pasa por parte de la tribulación o por toda ella, y es arrebatada a la mitad o al final, en un solo acontecimiento junto con la segunda venida.' },
          c: 'Este estudio sigue la primera postura, que preserva la inminencia: el Señor puede venir en cualquier momento, sin que deban cumplirse antes las señales de la tribulación. Por eso la iglesia vive velando y en santidad (1 Jn 3:2-3).'
        } }
      ],
      pensar: 'Si Cristo puede venir en cualquier momento para llevar a su iglesia, ¿cómo influye esa esperanza en tu manera de vivir, de servir y de usar tu tiempo (Tit 2:11-14)?'
    },
    {
      id: 't-israel', n: 'Israel en el Apocalipsis', ref: 'Apocalipsis 7:1-8; 11:1-2, 8; 12:1-6, 13-17; 14:1; 21:12; Romanos 11:25-29; Zacarías 12:10',
      visual: [
        img(IH + 'integrador-jerusalen-caminos.webp', 'Vista de Jerusalén antigua sobre sus colinas al amanecer, con caminos que parten hacia el mar, el desierto y el norte', 'Jerusalén, centro de la profecía.'),
        tabla('Israel', {
          titulo: 'Israel en los capítulos 7 a 21',
          cab: ['Pasaje', 'Qué muestra'],
          filas: [
            ['7:1-8; 14:1-5', '144.000 de las doce tribus sellados por Dios'],
            ['11:1-2', 'El templo y Jerusalén en la tribulación'],
            ['11:3-13', 'Dos testigos en Jerusalén; un remanente da gloria a Dios'],
            ['12', 'La mujer perseguida y protegida en el desierto'],
            ['16:16; 20:9', 'La tierra de Israel en Armagedón y la ciudad amada'],
            ['21:12', 'Los nombres de las doce tribus en las puertas de la nueva Jerusalén']
          ]
        })
      ],
      texto: [
        'Una de las diferencias más importantes entre las maneras de leer el Apocalipsis es el lugar que se le da a Israel. La lectura dispensacionalista distingue entre Israel y la iglesia, y sostiene que Dios cumplirá literalmente sus promesas al pueblo judío.',
        { h: 'Las promesas no fueron anuladas' },
        'Pablo enseña que el endurecimiento de Israel es parcial y temporal, «hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo», porque «irrevocables son los dones y el llamamiento de Dios» (Ro 11:25-26, 29). Zacarías anunció que en el día del Señor la casa de David y los moradores de Jerusalén mirarían «a mí, a quien traspasaron» (Zac 12:10), y Apocalipsis 1:7 recoge esa profecía.',
        { h: 'Israel durante la tribulación' },
        'La semana setenta de Daniel es un tiempo determinado «sobre tu pueblo y sobre tu santa ciudad» (Dn 9:24). Por eso, cuando la iglesia ya no está en la tierra, el Apocalipsis vuelve a hablar de las tribus de Israel, del templo, de Jerusalén y de la mujer que dio a luz al Mesías. Los 144.000 son sellados para servir a Dios, los dos testigos profetizan en Jerusalén, y la mujer es protegida en el desierto mientras el dragón la persigue. Jeremías llamó a ese tiempo «tiempo de angustia para Jacob; pero de ella será librado» (Jer 30:7).',
        { h: 'Israel en el reino y en la eternidad' },
        'Cuando Cristo vuelva, reinará desde Jerusalén sobre un Israel restaurado y sobre las naciones (Zac 14:9, 16). Y en la nueva Jerusalén, los nombres de las doce tribus estarán en las puertas, junto a los nombres de los doce apóstoles en los cimientos (Ap 21:12-14). Israel y la iglesia, distintos en el plan de Dios, comparten la misma ciudad eterna y la misma salvación por la sangre del Cordero.',
        'El Apocalipsis invita a los creyentes a amar a Israel, a orar por la paz de Jerusalén (Sal 122:6) y a ver en la fidelidad de Dios a su pueblo una garantía de su fidelidad hacia la iglesia.'
      ],
      pensar: 'Dios no olvida las promesas que hizo a Israel hace miles de años (Ro 11:29). ¿Qué te enseña esto sobre la seguridad de las promesas que él te ha hecho a ti?'
    },
    {
      id: 't-reino', n: 'El reino y la eternidad', ref: 'Apocalipsis 11:15; 19:11–22:5; Isaías 2:2-4; 11:6-9; 65:17-25; 1 Corintios 15:24-28',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: ESC + 'esquema-milenio.svg', alt: 'Esquema del milenio entre la segunda venida y el gran trono blanco', pie: 'El milenio en el plan profético.', origen: 'esquema' },
        img(ESC + 'esc-nueva-jerusalen.webp', 'La nueva Jerusalén desciende del cielo, una ciudad resplandeciente con muros de piedras preciosas y puertas de perla', 'El estado eterno (Ap 21–22).')
      ],
      texto: [
        'El Apocalipsis termina donde terminan todas las promesas de Dios: en su reino. Pero ese reino tiene dos etapas, que el libro distingue con claridad.',
        { h: 'El reino milenial' },
        'La primera etapa es el reinado de Cristo en la tierra durante mil años (Ap 20:4-6). Es el cumplimiento de las promesas a David de un rey de su descendencia que reinaría para siempre (2 S 7:12-16), y de las profecías de Isaías sobre un tiempo en que las naciones irán a Jerusalén a aprender los caminos de Dios, no se adiestrarán más para la guerra y el lobo morará con el cordero (Is 2:2-4; 11:6-9). Satanás estará atado, y la tierra conocerá un gobierno justo y perfecto.',
        'El milenio muestra que Dios cumple sus promesas en la misma historia y en la misma tierra donde su Hijo fue rechazado. También demuestra, con la rebelión final, que aun en las mejores condiciones el corazón humano necesita ser regenerado.',
        { h: 'El estado eterno' },
        'La segunda etapa comienza después del juicio del gran trono blanco: cielos nuevos y tierra nueva, y la nueva Jerusalén (Ap 21–22). Pablo lo describe así: cuando Cristo haya suprimido todo dominio, entregará el reino al Dios y Padre, «para que Dios sea todo en todos» (1 Co 15:24-28). Ya no habrá muerte, ni maldición, ni noche, y los redimidos verán el rostro de Dios.',
        { h: 'Una esperanza que transforma' },
        'La escatología bíblica no es solo un mapa del futuro. Juan escribe en otra carta: «todo aquel que tiene esta esperanza en él, se purifica a sí mismo, así como él es puro» (1 Jn 3:3). Quien sabe que reinará con Cristo vive hoy como ciudadano de ese reino: con santidad, con paciencia en la prueba, con generosidad y con urgencia para anunciar el evangelio.',
        { ir: { t: 'Ver los eventos del fin en Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'Juan escribió que quien tiene esta esperanza «se purifica a sí mismo» (1 Jn 3:3). ¿Qué área de tu vida necesita ser purificada a la luz de la esperanza del reino de Cristo?'
    },
    {
      id: 't-vencer', n: 'Adorar y vencer', ref: 'Apocalipsis 2:7, 10-11, 17, 26-28; 3:5, 12, 21; 4:10-11; 5:11-14; 14:12; 21:7',
      visual: [
        tabla('Promesas', {
          titulo: 'Las promesas al que venciere',
          cab: ['Iglesia', 'Promesa', 'Se cumple en'],
          filas: [
            ['Éfeso', 'Comer del árbol de la vida (2:7)', '22:2, 14'],
            ['Esmirna', 'La corona de la vida; no sufrir la segunda muerte (2:10-11)', '20:6, 14'],
            ['Pérgamo', 'El maná escondido y un nombre nuevo (2:17)', '22:4'],
            ['Tiatira', 'Autoridad sobre las naciones y la estrella de la mañana (2:26-28)', '20:4; 22:16'],
            ['Sardis', 'Vestiduras blancas; el nombre en el libro de la vida (3:5)', '19:8; 21:27'],
            ['Filadelfia', 'Columna en el templo y el nombre de la nueva Jerusalén (3:12)', '21:2, 22'],
            ['Laodicea', 'Sentarse con Cristo en su trono (3:21)', '22:5'],
            ['Todos', 'Heredar todas las cosas; ser hijo de Dios (21:7)', '21–22']
          ]
        }),
        img(ESC + 'esc-gran-multitud.webp', 'Una multitud incontable de todas las naciones, vestida de blanco y con palmas, ante el trono', 'Los vencedores ante el trono (Ap 7:9).')
      ],
      texto: [
        'El Apocalipsis no se escribió para satisfacer la curiosidad sobre el futuro, sino para formar creyentes que adoran a Dios y vencen en medio de la presión del mundo. Esas dos palabras, adorar y vencer, resumen la respuesta práctica que el libro espera.',
        { h: 'Un libro de adoración' },
        'El cielo del Apocalipsis está lleno de cánticos. Los seres vivientes, los ancianos, los ángeles, los mártires y toda la creación adoran a Dios y al Cordero. Esa adoración no es un adorno: es la respuesta correcta ante quién es Dios. En la tierra, en cambio, los hombres adoran a la bestia. La primera pregunta del libro para cada lector es a quién adora.',
        { h: 'El que venciere' },
        'Cada carta termina con una promesa «al que venciere», y la tabla muestra que todas se cumplen en los últimos capítulos del libro. Lo que Cristo promete en la lucha de hoy, lo entrega en la gloria. Vencer no significa no sufrir, ni tener una vida sin problemas. En el Apocalipsis, los vencedores muchas veces son los que perdieron todo en la tierra, incluso la vida, pero no negaron el nombre de Cristo.',
        { h: 'Cómo se vence' },
        'El libro señala varias actitudes. Volver al primer amor (Ap 2:4-5). Ser fiel hasta la muerte (Ap 2:10). Retener lo que se tiene hasta que él venga (Ap 2:25; 3:11). Velar y arrepentirse (Ap 3:2-3, 19). Guardar «los mandamientos de Dios y la fe de Jesús» (Ap 14:12). Y, sobre todo, confiar en la sangre del Cordero y dar testimonio de él (Ap 12:11).',
        'El último versículo sobre el vencedor es para todos los redimidos: «El que venciere heredará todas las cosas, y yo seré su Dios, y él será mi hijo» (Ap 21:7). El premio más grande no es una cosa, sino una relación: Dios mismo.'
      ],
      pensar: 'Cada promesa al vencedor se cumple en la nueva Jerusalén. ¿Cuál de estas promesas te anima más a perseverar en la etapa que estás viviendo? ¿Por qué?'
    }
  ];

  /* ---------------- Mapas · Las siete iglesias de Asia ---------------- */
  const iglesias = [
    {
      id: 'circuito', n: 'El recorrido de las siete cartas', ref: 'Apocalipsis 1:9-11', fecha: 95,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Patmos: Juan recibe la revelación (Ap 1:9)', fecha: 95, estado: { view: ASIA, capas: ['roma-14'], lugares: ['patmos'] } },
          { t: 'Éfeso, el puerto de entrada a la provincia', estado: { view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso'] } },
          { t: 'Esmirna, al norte por la costa', estado: { view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso', 'esmirna'] } },
          { t: 'Pérgamo, la antigua capital', estado: { view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo'] } },
          { t: 'Tiatira, tierra adentro hacia el sureste', estado: { view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira'] } },
          { t: 'Sardis, bajo su ciudadela', estado: { view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis'] } },
          { t: 'Filadelfia, puerta hacia el interior', estado: { view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia'] } },
          { t: 'Laodicea: el recorrido completo, en el orden de las cartas', estado: { view: ASIA, capas: ['roma-14'], lugares: [...IGLESIAS, 'hierapolis', 'colosas'], trazos: ['siete-iglesias'] } }
        ] },
        img(IMG + 'apo-mensajero-patmos.webp', 'Un mensajero con un rollo envuelto sube a un pequeño barco de vela en el puerto de Patmos', 'El libro salió de Patmos hacia Asia.')
      ],
      texto: [
        'Juan recibe la orden: «Escribe en un libro lo que ves, y envíalo a las siete iglesias que están en Asia» (Ap 1:11): a Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea. El orden no es casual. Toca los puntos del mapa para ver el recorrido paso a paso.',
        { h: 'Un circuito de caminos' },
        'Las siete ciudades estaban unidas por las calzadas romanas de la provincia de Asia. Un mensajero que saliera de Patmos desembarcaría en Éfeso, el gran puerto; seguiría al norte por la costa hasta Esmirna y Pérgamo; luego giraría hacia el sureste, tierra adentro, a Tiatira, Sardis y Filadelfia, y terminaría en Laodicea, en el valle del Lico. En línea recta son más de 350 km entre Éfeso y Laodicea pasando por todas; por los caminos, bastante más. Cada iglesia recibiría y copiaría el libro, y podría hacerlo llegar a las congregaciones vecinas.',
        { h: 'Ciudades con historia' },
        'Las siete eran ciudades importantes, cada una con su propia historia, su orgullo cívico y sus templos. Muchos detalles de las cartas se entienden mejor conociendo esa historia: el agua tibia de Laodicea, la ciudadela de Sardis tomada por sorpresa, los terremotos de Filadelfia, el trono de Satanás en Pérgamo. Cristo conocía cada ciudad y le habló en su propio lenguaje.',
        { h: 'Siete iglesias, una iglesia' },
        'Había otras iglesias en Asia, como Colosas, Hierápolis y Troas. Que se elijan siete, el número de la plenitud, sugiere que representan a la iglesia completa. Por eso cada carta termina hablando en plural: «lo que el Espíritu dice a las iglesias».',
        'Las estaciones que siguen visitan cada ciudad: su historia, lo que queda de ella hoy y cómo ilumina la carta que recibió.'
      ],
      pensar: 'Cristo conocía la historia y el carácter de cada ciudad, y habló a cada iglesia en su propio lenguaje. ¿Qué crees que diría Cristo a la iglesia de tu ciudad, conociendo su historia y sus tentaciones?'
    },
    {
      id: 'efeso', n: 'Éfeso', ref: 'Apocalipsis 2:1-7; Hechos 18:19–20:38; Efesios 1:1; 1 Timoteo 1:3', fecha: 95,
      visual: [
        img(IMG + 'apo-efeso.webp', 'Una amplia calle de mármol de la antigua Éfeso en el siglo I, con columnas, estatuas y fachadas, llena de gente con ropas romanas, y al fondo el puerto con barcos', 'Éfeso, la ciudad más importante de Asia.'),
        mapa({ view: [[37.6, 26.9], [38.3, 27.8]], capas: ['roma-14'], lugares: ['efeso', 'mileto', 'patmos'] }),
        tabla('Datos', {
          titulo: 'Éfeso',
          cab: ['', ''],
          filas: [
            ['Hoy', 'Ruinas junto a Selçuk, provincia de Esmirna (Turquía)'],
            ['Población estimada', 'Entre las mayores del Oriente romano; las cifras propuestas varían mucho'],
            ['Conocida por', 'El templo de Artemisa, una de las siete maravillas del mundo antiguo; el gran teatro; el puerto'],
            ['En la Biblia', 'Pablo, Aquila y Priscila, Apolos, Timoteo; carta a los Efesios'],
            ['La carta', 'Elogio por su trabajo y su doctrina; reproche por dejar el primer amor']
          ]
        })
      ],
      texto: [
        'Éfeso era la ciudad más importante de la provincia de Asia y sede del gobernador romano. Tenía un gran puerto, un teatro para unas veinticinco mil personas y el famoso templo de Artemisa, la diosa que los efesios llamaban la grande (Hch 19:27-28). El templo era uno de los centros religiosos y financieros del mundo antiguo.',
        { h: 'Una iglesia con historia' },
        'Ninguna de las siete iglesias tenía una historia tan rica. Pablo pasó por Éfeso en su segundo viaje, dejó allí a Aquila y Priscila, y volvió en el tercero para quedarse unos tres años (Hch 20:31). Su predicación fue tan poderosa que muchos que practicaban la magia quemaron sus libros (Hch 19:19). Después Timoteo quedó a cargo de la iglesia (1 Ti 1:3), y según la tradición el apóstol Juan vivió allí sus últimos años. Pablo había advertido a los ancianos de Éfeso que entrarían lobos rapaces y que de entre ellos mismos se levantarían hombres que hablarían cosas perversas (Hch 20:29-30).',
        { h: 'Luz de la historia sobre la carta' },
        'La iglesia aprendió la lección: probó a los falsos apóstoles y no soportó a los malos (Ap 2:2). Pero tres o cuatro décadas después del avivamiento, se había enfriado. Cristo la amenaza con quitar su candelero de su lugar (Ap 2:5). El puerto de Éfeso, que daba vida a la ciudad, se fue llenando de sedimentos del río Caístro, y hoy las ruinas están a varios kilómetros del mar. La ciudad que no cuidó lo que le daba vida terminó perdiendo su lugar.',
        'La promesa al vencedor, comer del árbol de la vida «en medio del paraíso de Dios» (Ap 2:7), contrasta con el famoso santuario de la diosa. Lo que la ciudad buscaba en Artemisa solo se encuentra en Cristo.'
      ],
      pensar: 'Éfeso mantuvo la doctrina correcta pero perdió su primer amor (Ap 2:4). ¿Cómo puedes cuidar el amor por Cristo para que no se enfríe con los años y la rutina?'
    },
    {
      id: 'esmirna', n: 'Esmirna', ref: 'Apocalipsis 2:8-11', fecha: 95,
      visual: [
        img(IMG + 'apo-esmirna.webp', 'La ciudad de Esmirna en el siglo I vista desde su puerto, con edificios de piedra que suben por la ladera de un monte coronado por murallas, a la luz dorada de la tarde', 'Esmirna, «la corona de Jonia».'),
        tabla('Datos', {
          titulo: 'Esmirna',
          cab: ['', ''],
          filas: [
            ['Hoy', 'İzmir, la tercera ciudad de Turquía'],
            ['Conocida por', 'Su puerto, su belleza y su lealtad a Roma; templo a Tiberio (26 d.C.)'],
            ['Historia', 'Destruida por los lidios c. 600 a.C. y refundada siglos después'],
            ['Mártir', 'Policarpo, obispo de Esmirna y discípulo de Juan (c. 155 d.C.)'],
            ['La carta', 'Solo elogio: tribulación y pobreza, pero rica; fiel hasta la muerte']
          ]
        })
      ],
      texto: [
        'Esmirna estaba a unos 55 km al norte de Éfeso, en una bahía protegida, y competía con ella por ser la primera ciudad de Asia. Era hermosa y próspera, con calles bien trazadas y edificios que subían por la ladera del monte Pago, cuya cima amurallada parecía una corona.',
        { h: 'Leal a Roma' },
        'Esmirna fue aliada de Roma desde muy temprano, y en el año 26 ganó el privilegio de construir un templo al emperador Tiberio, compitiendo con otras ciudades de Asia, según cuenta el historiador Tácito. Para sus habitantes, la lealtad a Roma era motivo de orgullo, y negarse al culto imperial era sospechoso. Además, había una comunidad judía influyente, y algunos de sus miembros acusaban a los cristianos ante las autoridades (Ap 2:9).',
        { h: 'Luz de la historia sobre la carta' },
        'Cristo se presenta como «el primero y el postrero, el que estuvo muerto y vivió» (Ap 2:8). La ciudad misma había sido destruida y luego refundada, y sus habitantes conocían la idea de una ciudad que «murió y volvió a vivir». Pero Cristo ofrece algo mucho mayor: una resurrección verdadera. La «corona de la vida» (Ap 2:10) también tenía eco local: Esmirna era llamada la corona de Asia, y las coronas se daban en los juegos y a los ciudadanos honrados. La corona que Cristo da no se marchita.',
        { h: 'Fiel hasta la muerte' },
        'Unos sesenta años después de la carta, hacia el año 155, el obispo Policarpo fue llevado al estadio de Esmirna. El relato de su martirio cuenta que, cuando el gobernador le pidió que maldijera a Cristo para salvar su vida, respondió que había servido a Cristo ochenta y seis años y que nunca le había hecho mal, y que no podía blasfemar contra su Rey. Fue quemado. Esmirna había recibido la orden de ser fiel hasta la muerte, y la cumplió.'
      ],
      pensar: 'Esmirna era pobre, pero Cristo le dijo «tú eres rico» (Ap 2:9). ¿Cómo mide Cristo la riqueza de una persona o de una iglesia, y cómo cambia eso tu manera de evaluar tu propia vida?'
    },
    {
      id: 'pergamo', n: 'Pérgamo', ref: 'Apocalipsis 2:12-17', fecha: 95,
      visual: [
        img(IMG + 'apo-pergamo.webp', 'La acrópolis de Pérgamo sobre una colina muy empinada en el siglo I, con templos de mármol en terrazas, un teatro excavado en la ladera y un gran altar monumental, bajo un cielo despejado', 'Pérgamo, «donde está el trono de Satanás» (Ap 2:13).'),
        tabla('Datos', {
          titulo: 'Pérgamo',
          cab: ['', ''],
          filas: [
            ['Hoy', 'Ruinas sobre Bergama, provincia de Esmirna (Turquía)'],
            ['Conocida por', 'Su biblioteca, el pergamino, el altar de Zeus, el santuario de Asclepio'],
            ['Culto imperial', 'Primer templo de Asia a Augusto y a la diosa Roma (29 a.C.)'],
            ['Autoridad', 'Sede antigua del gobierno de la región'],
            ['La carta', 'Fiel aun donde está el trono de Satanás; reproche por tolerar la doctrina de Balaam']
          ]
        })
      ],
      texto: [
        'Pérgamo se levantaba sobre una colina de más de 300 metros, visible desde lejos en el valle. Había sido la capital del reino de los atálidas, que lo legaron a Roma en el año 133 a.C., y siguió siendo una ciudad de gran prestigio.',
        { h: 'Una ciudad religiosa y culta' },
        'Su biblioteca rivalizaba con la de Alejandría. Según una tradición antigua, cuando Egipto dejó de venderle papiro, en Pérgamo se perfeccionó el uso de pieles preparadas para escribir: el pergamino, que lleva su nombre. En la acrópolis estaba un enorme altar dedicado a Zeus, cuyos restos se exhiben hoy en un museo de Berlín. Abajo, el santuario de Asclepio, el dios de la medicina, cuyo símbolo era una serpiente, atraía a enfermos de todo el mundo.',
        { h: 'El trono de Satanás' },
        'Lo más grave para los cristianos era que Pérgamo fue la primera ciudad de Asia en dedicar un templo al emperador Augusto y a la diosa Roma, en el año 29 a.C. El culto imperial tenía allí uno de sus centros. Cuando Cristo dice que la iglesia mora «donde está el trono de Satanás» (Ap 2:13), puede referirse al altar de Zeus, al santuario de la serpiente o, más probablemente, al culto al emperador, donde negarse a ofrecer incienso podía costar la vida, como le costó a Antipas.',
        { h: 'Luz de la historia sobre la carta' },
        'El gobernador romano tenía el derecho de la espada, el poder de condenar a muerte. Cristo se presenta como «el que tiene la espada aguda de dos filos» (Ap 2:12): la autoridad final no la tiene Roma, sino él. Y en una ciudad de banquetes rituales, donde muchos cedían para no perder su lugar, Cristo promete al vencedor el maná escondido y una piedrecita blanca con un nombre nuevo (Ap 2:17), el alimento y la identidad que el mundo no puede dar.'
      ],
      pensar: 'La iglesia de Pérgamo resistió la persecución, pero empezó a ceder ante la presión de acomodarse (Ap 2:13-14). ¿Qué te resulta más difícil resistir: la oposición abierta o la tentación sutil de adaptarte?'
    },
    {
      id: 'tiatira', n: 'Tiatira', ref: 'Apocalipsis 2:18-29; Hechos 16:14-15', fecha: 95,
      visual: [
        img(IMG + 'apo-tiatira.webp', 'Talleres de artesanos en una calle de Tiatira en el siglo I: tintoreros con telas de color púrpura colgadas a secar y un herrero que trabaja el bronce bruñido junto a un horno', 'Tiatira, ciudad de gremios y artesanos.'),
        tabla('Datos', {
          titulo: 'Tiatira',
          cab: ['', ''],
          filas: [
            ['Hoy', 'Akhisar, provincia de Manisa (Turquía)'],
            ['Conocida por', 'Sus gremios: tintoreros, bronceros, curtidores, alfareros, tejedores'],
            ['En la Biblia', 'Lidia, vendedora de púrpura de Tiatira, convertida en Filipos (Hch 16:14)'],
            ['La carta', 'La más larga: elogio por su amor y servicio; reproche por tolerar a Jezabel']
          ]
        })
      ],
      texto: [
        'Tiatira era la menos importante de las siete ciudades, pero recibe la carta más larga. Estaba en un valle abierto, sin defensas naturales, y había nacido como guarnición militar. En tiempos de Juan era una ciudad de comercio y de artesanos.',
        { h: 'La ciudad de los gremios' },
        'Las inscripciones encontradas en Tiatira mencionan más gremios que en casi cualquier otra ciudad de Asia: tintoreros, curtidores, alfareros, panaderos, tejedores, comerciantes de esclavos y trabajadores del bronce. Lidia, la primera convertida de Europa, era «vendedora de púrpura, de la ciudad de Tiatira» (Hch 16:14), y su oficio se relaciona con los tintoreros de la ciudad.',
        'Cada gremio tenía un dios patrono y celebraba banquetes en su honor, con carne sacrificada y, muchas veces, con inmoralidad. Para un cristiano artesano, quedar fuera del gremio podía significar perder el trabajo. En ese contexto, la falsa profetisa a quien Cristo llama Jezabel enseñaba que se podía participar sin problema (Ap 2:20). Era una enseñanza cómoda y práctica, pero significaba compartir la mesa de los ídolos.',
        { h: 'Luz de la historia sobre la carta' },
        'Cristo se presenta como «el Hijo de Dios, el que tiene ojos como llama de fuego, y pies semejantes al bronce bruñido» (Ap 2:18). En una ciudad de broncistas, la imagen era fácil de entender: el metal refinado en el fuego, firme y resplandeciente. Además, el dios protector de Tiatira se identificaba con Apolo, hijo de Zeus, y el emperador era venerado como hijo de un dios. Cristo afirma que él es el verdadero Hijo de Dios, que escudriña la mente y el corazón (Ap 2:23).',
        'A los que no siguieron esa enseñanza, Cristo no les impone otra carga: solo les pide retener lo que tienen hasta que él venga (Ap 2:24-25). La fidelidad, a veces, consiste en no ceder un paso más.'
      ],
      pensar: 'Los creyentes de Tiatira enfrentaban la tentación de comprometer su fe para no perder su trabajo (Ap 2:20). ¿Has enfrentado presiones parecidas en tu trabajo o estudios? ¿Cómo puedes ser fiel sin dejar de ser un buen trabajador?'
    },
    {
      id: 'sardis', n: 'Sardis', ref: 'Apocalipsis 3:1-6', fecha: 95,
      visual: [
        img(IMG + 'apo-sardis.webp', 'La ciudad de Sardis en el siglo I al pie de una alta acrópolis de laderas casi verticales, con un gran templo de columnas jónicas junto a un río en primer plano', 'Sardis y su ciudadela «inexpugnable».'),
        mapa({ view: [[38.0, 27.2], [39.2, 29.4]], capas: ['roma-14'], lugares: ['tiatira', 'sardis', 'filadelfia', 'esmirna'] }),
        tabla('Datos', {
          titulo: 'Sardis',
          cab: ['', ''],
          filas: [
            ['Hoy', 'Ruinas junto a Sart, provincia de Manisa (Turquía)'],
            ['Historia', 'Capital de Lidia y del rey Creso; luego sede persa en Asia Menor'],
            ['Tomada por sorpresa', 'Por Ciro (547 a.C.) y por Antíoco III (214 a.C.)'],
            ['Terremoto', 'Destruida en el año 17 d.C.; Tiberio ayudó a reconstruirla'],
            ['La carta', 'Tiene nombre de que vive, y está muerta; sé vigilante']
          ]
        })
      ],
      texto: [
        'Sardis tenía un pasado glorioso. Fue la capital del reino de Lidia, y su rey Creso fue tan rico que su nombre se volvió proverbial. En el río Pactolo, que pasaba por la ciudad, se encontraba oro, y allí se acuñaron algunas de las primeras monedas del mundo. Después fue el centro del gobierno persa en la región; Sardis aparece en la lista de lugares a donde fueron llevados cautivos de Jerusalén según Abdías 20, si Sefarad es Sardis, como piensan muchos.',
        { h: 'Una ciudadela que no vigilaba' },
        'La ciudadela estaba sobre un monte de laderas casi verticales y parecía imposible de tomar. Por eso sus defensores se descuidaban. En el año 547 a.C., los soldados de Ciro subieron de noche por una grieta del acantilado y la tomaron sin resistencia. Más de tres siglos después, en el 214 a.C., el ejército de Antíoco III hizo lo mismo. La ciudad confiada cayó dos veces por no velar.',
        'En el año 17 d.C., un gran terremoto destruyó Sardis y otras ciudades de Asia, y el emperador Tiberio ayudó a reconstruirla. En tiempos de Juan seguía siendo una ciudad importante, pero vivía en gran parte de su fama pasada.',
        { h: 'Luz de la historia sobre la carta' },
        'La carta toca justo esos puntos: «tienes nombre de que vives, y estás muerto» (Ap 3:1), como la ciudad, que vivía de su gloria antigua. «Sé vigilante» (Ap 3:2) y «si no velas, vendré sobre ti como ladrón, y no sabrás a qué hora vendré sobre ti» (Ap 3:3): exactamente lo que le había pasado a la ciudadela. Y las «vestiduras blancas» (Ap 3:4-5) hablaban a una ciudad conocida por la industria textil y el teñido de lanas.',
        'En las ruinas de Sardis se ha encontrado una de las sinagogas antiguas más grandes del mundo, y junto al templo de Artemisa, una pequeña iglesia posterior. La ciudad que Cristo llamó a despertar tuvo luego, por siglos, una comunidad cristiana.'
      ],
      pensar: 'Sardis cayó dos veces por confiarse y no vigilar. ¿En qué áreas de tu vida espiritual te sientes tan seguro que podrías estar descuidándote (1 Co 10:12)?'
    },
    {
      id: 'filadelfia', n: 'Filadelfia', ref: 'Apocalipsis 3:7-13; Isaías 22:22', fecha: 95,
      visual: [
        img(IMG + 'apo-filadelfia.webp', 'Una pequeña ciudad griega del siglo I junto a un valle fértil con viñedos, con algunas columnas y muros agrietados por un terremoto que se están reparando, y un camino que sale hacia las montañas del interior', 'Filadelfia, la ciudad de los terremotos y la puerta abierta.'),
        tabla('Datos', {
          titulo: 'Filadelfia',
          cab: ['', ''],
          filas: [
            ['Hoy', 'Alaşehir, provincia de Manisa (Turquía)'],
            ['Fundación', 'Siglo II a.C.; su nombre honra el amor de Átalo II por su hermano'],
            ['Ubicación', 'En el camino hacia el interior de Anatolia, rodeada de viñedos'],
            ['Terremotos', 'Muy dañada en el 17 d.C. y sacudida por réplicas durante años; tomó el nombre Neocesarea'],
            ['La carta', 'Solo elogio: poca fuerza, pero fiel; una puerta abierta']
          ]
        })
      ],
      texto: [
        'Filadelfia era la más joven de las siete ciudades. Fue fundada en el siglo II a.C. por el rey de Pérgamo, y su nombre, «amor fraternal», recordaba el amor de Átalo II por su hermano Eumenes. Estaba en el camino que llevaba de la costa hacia el interior de Anatolia, y por eso se la ha llamado la puerta hacia el oriente.',
        { h: 'Una ciudad que temblaba' },
        'La región era volcánica y fértil, famosa por sus viñedos. Pero también era tierra de terremotos. El del año 17 d.C. la dañó gravemente, y el geógrafo Estrabón, que escribió por esos años, cuenta que las réplicas eran tan frecuentes que muchos habitantes preferían vivir en el campo, fuera de los muros, y que los que se quedaban vivían reparando paredes. En agradecimiento por la ayuda del emperador, la ciudad cambió su nombre por Neocesarea, la nueva ciudad de César, aunque después volvió a su nombre antiguo.',
        { h: 'Luz de la historia sobre la carta' },
        'A una iglesia con poca fuerza, Cristo le dice: «he puesto delante de ti una puerta abierta, la cual nadie puede cerrar» (Ap 3:8). En una ciudad que era la puerta al interior, la imagen hablaba de oportunidades para el evangelio. Al vencedor le promete: «Yo lo haré columna en el templo de mi Dios, y nunca más saldrá de allí» (Ap 3:12). Para gente que había tenido que huir de sus casas una y otra vez por los terremotos, ser columna firme y no salir nunca más era una promesa preciosa.',
        'Y la promesa de escribir sobre él «el nombre de mi Dios, y el nombre de la ciudad de mi Dios… y mi nombre nuevo» (Ap 3:12) contrasta con una ciudad que había cambiado de nombre para honrar al emperador.',
        'Filadelfia resistió como ciudad cristiana hasta 1390, mucho después de que cayeran las demás ciudades de la región. Hoy se conservan en Alaşehir los restos de los grandes pilares de una iglesia bizantina.'
      ],
      pensar: 'Cristo puso una puerta abierta delante de una iglesia con poca fuerza (Ap 3:8). ¿Qué puertas abiertas ha puesto Dios delante de ti, aunque te sientas débil? ¿Cómo puedes aprovecharlas?'
    },
    {
      id: 'laodicea', n: 'Laodicea', ref: 'Apocalipsis 3:14-22; Colosenses 2:1; 4:13-16', fecha: 95,
      visual: [
        img(IMG + 'apo-laodicea.webp', 'Un acueducto romano de piedra llega a la próspera ciudad de Laodicea en el siglo I; en primer plano, una fuente pública con tuberías incrustadas de depósitos minerales blancos, y al fondo, en una colina lejana, las terrazas blancas de Hierápolis', 'Laodicea y su agua tibia.'),
        mapa({ view: [[37.55, 28.75], [38.15, 29.55]], capas: ['roma-14'], lugares: ['laodicea', 'hierapolis', 'colosas'] }),
        tabla('Datos', {
          titulo: 'Laodicea',
          cab: ['', ''],
          filas: [
            ['Hoy', 'Ruinas junto a Denizli (Turquía)'],
            ['Conocida por', 'Sus bancos, su lana negra y una escuela de medicina'],
            ['Agua', 'Traída por acueducto; llegaba tibia y cargada de cal'],
            ['Vecinas', 'Hierápolis, con aguas termales; Colosas, con agua fría'],
            ['Terremoto', 'Destruida en el año 60 d.C.; se reconstruyó sin ayuda de Roma'],
            ['La carta', 'Ningún elogio: ni fría ni caliente; Cristo a la puerta']
          ]
        })
      ],
      texto: [
        'Laodicea estaba en el valle del río Lico, en un cruce de caminos importantes. Era la más rica de las siete ciudades, y muy cerca estaban Hierápolis y Colosas. Pablo nunca la visitó, pero conocía a su iglesia y le envió una carta que se ha perdido (Col 4:16). Su colaborador Epafras trabajaba por los creyentes de las tres ciudades (Col 4:13).',
        { h: 'Rica y autosuficiente' },
        'Laodicea era un centro bancario, producía una lana negra y brillante muy apreciada y tenía una escuela de medicina. Se ha relacionado con ella un polvo para los ojos, llamado polvo frigio, aunque no se sabe con seguridad si se fabricaba allí. Cuando un terremoto la destruyó en el año 60, según el historiador Tácito, se reconstruyó con sus propios recursos, sin pedir ayuda a Roma. El orgullo de la ciudad se resumía en la frase que Cristo pone en boca de la iglesia: «Yo soy rico, y me he enriquecido, y de ninguna cosa tengo necesidad» (Ap 3:17).',
        { h: 'Luz de la historia sobre la carta' },
        'Cristo le aconseja comprar de él tres cosas: «oro refinado en fuego», a la ciudad de los bancos; «vestiduras blancas», a la ciudad de la lana negra; y «colirio», a la ciudad de la medicina para los ojos (Ap 3:18). Lo que creían tener de sobra era justo lo que les faltaba espiritualmente.',
        'Y el agua: Laodicea no tenía fuentes propias y la traía por un acueducto de varios kilómetros. Las tuberías que se conservan muestran gruesos depósitos de cal. El agua llegaba tibia y con un sabor desagradable. Hierápolis, a la vista, tenía fuentes termales calientes, y Colosas, agua fría de las montañas. Según la explicación más difundida, lo caliente y lo frío representan lo útil, y lo tibio lo que no sirve para nada. Por eso Cristo no reprocha a Laodicea por ser fría en el sentido de hostil, sino por ser inútil: una iglesia que no sana ni refresca a nadie.',
        'Las excavaciones de las últimas décadas han sacado a la luz calles con columnas, teatros, templos y una iglesia de los primeros siglos. La ciudad rica quedó en ruinas; la invitación de Cristo sigue abierta: «He aquí, yo estoy a la puerta y llamo» (Ap 3:20).'
      ],
      pensar: 'Laodicea creía no necesitar nada, y le faltaba lo esencial (Ap 3:17). ¿Hay áreas de tu vida en las que la comodidad o la autosuficiencia te han hecho perder la conciencia de tu necesidad de Cristo?'
    }
  ];

  /* ---------------- Temas ---------------- */
  const simbolos = [
    {
      id: 's-numeros', n: 'Los números', ref: 'Apocalipsis 1:4; 4:4; 7:4; 11:2-3; 12:6, 14; 13:5, 18; 20:2-7; 21:12-17',
      visual: [
        tabla('Números', {
          titulo: 'Los números en Apocalipsis',
          cab: ['Número', 'Significado bíblico', 'Ejemplos'],
          filas: [
            ['3', 'Lo divino; también el triple ay', 'Santo, santo, santo (4:8); tres ayes (8:13)'],
            ['3½ (42 meses, 1.260 días)', 'Un tiempo de crisis limitado por Dios; la mitad de la semana setenta', '11:2-3; 12:6, 14; 13:5'],
            ['4', 'La tierra entera: cuatro ángulos, cuatro vientos', '7:1; 20:8'],
            ['6 y 666', 'Lo humano que no llega a la plenitud de Dios', '13:18'],
            ['7', 'Plenitud, lo completo', 'Iglesias, sellos, trompetas, copas'],
            ['10', 'Totalidad de un poder terrenal', 'Diez cuernos (12:3; 17:12)'],
            ['12', 'El pueblo de Dios: tribus y apóstoles', '12:1; 21:12-14'],
            ['24', 'Doce más doce: los dos pueblos de Dios, o los turnos sacerdotales', '4:4'],
            ['144.000', '12 × 12 × 1.000: Israel completo', '7:4; 14:1'],
            ['1.000', 'Una gran cantidad; los mil años del reino', '20:2-7']
          ]
        })
      ],
      texto: [
        'Los números son una parte importante del lenguaje del Apocalipsis. Para los lectores de la Biblia, muchos de ellos tenían un significado conocido, que viene del Antiguo Testamento.',
        { h: 'Números con significado' },
        'El siete expresa plenitud, desde los siete días de la creación. El doce es el número del pueblo de Dios, por las doce tribus y los doce apóstoles; por eso aparece tanto en la nueva Jerusalén. El cuatro es el número de la tierra, con sus cuatro puntos cardinales. El tres y medio, la mitad de siete, describe un tiempo de crisis que no llega a completarse porque Dios lo interrumpe.',
        { h: '¿Literales o simbólicos?' },
        'Que un número tenga significado no quiere decir que no sea literal. Los siete días de la creación fueron siete días, y además expresan plenitud. Las siete iglesias eran siete congregaciones reales, y también representan a toda la iglesia. Por eso este estudio toma los números en sentido literal cuando el texto los presenta como medidas de tiempo o de cantidad, y reconoce a la vez su valor simbólico.',
        'Las medidas de tiempo de la tribulación son un buen ejemplo. El libro las da de tres maneras distintas, en meses, en días y en tiempos, y todas coinciden en tres años y medio (Ap 11:2-3; 12:6, 14; 13:5). La precisión de los días sugiere un período real, conectado con la semana setenta de Daniel.',
        'En el caso de los mil años, el texto repite la cifra seis veces y la usa para separar dos resurrecciones (Ap 20:4-6). Este estudio la entiende como un período real.',
        { h: 'Un cuidado necesario' },
        'La numerología, que busca mensajes ocultos en sumas y combinaciones de números, ha llevado a muchos a errores y a fijar fechas que nunca se cumplieron. Jesús advirtió que nadie sabe el día ni la hora (Mt 24:36). Los números del Apocalipsis sirven para mostrar el orden del plan de Dios, no para calcular la fecha de su venida.'
      ],
      pensar: 'Dios mide con exactitud los tiempos de la prueba de su pueblo (Ap 12:6). ¿Cómo te ayuda en tus propias pruebas saber que Dios les pone un límite (1 Co 10:13)?'
    },
    {
      id: 's-imagenes', n: 'Colores, objetos y animales', ref: 'Apocalipsis 1:12-16; 3:5, 18; 5:6; 6:2-8; 12:3; 17:3-4; 19:8, 11',
      visual: [
        tabla('Símbolos', {
          titulo: 'Imágenes que se repiten',
          cab: ['Imagen', 'Sentido en el libro', 'Pasajes'],
          filas: [
            ['Blanco', 'Pureza, justicia y victoria', '3:5; 6:11; 7:9; 19:8, 11, 14'],
            ['Escarlata y púrpura', 'Lujo, poder y pecado', '12:3; 17:3-4'],
            ['Oro', 'Lo precioso; en la nueva Jerusalén, lo glorioso', '1:12; 21:18'],
            ['Candelero', 'La iglesia que alumbra', '1:20'],
            ['Estrella', 'Mensajero, ángel o gobernante', '1:20; 9:1; 22:16'],
            ['Trompeta', 'Anuncio y juicio', '1:10; 8:2'],
            ['Copa', 'La ira de Dios que se derrama', '14:10; 16:1'],
            ['Libro, rollo', 'El plan y el registro de Dios', '5:1; 10:2; 20:12'],
            ['Cordero', 'Cristo en su sacrificio', '5:6'],
            ['León', 'Cristo como Rey de Judá', '5:5'],
            ['Dragón y serpiente', 'Satanás', '12:9; 20:2'],
            ['Bestia', 'Un imperio y su gobernante opuestos a Dios', '13:1; 17:3']
          ]
        }),
        img(IMG + 'apo-cristo-glorificado.webp', 'Cristo glorificado entre siete candeleros de oro', 'Candeleros, estrellas y una espada de dos filos (Ap 1:12-16).')
      ],
      texto: [
        'Además de los números, el Apocalipsis usa colores, objetos y animales con un significado constante. La tabla reúne los más importantes.',
        { h: 'Los colores' },
        'El blanco es el color de los vencedores y de los redimidos: vestiduras blancas, piedrecita blanca, caballo blanco del Rey, gran trono blanco. Expresa pureza y victoria. La escarlata y la púrpura, colores caros de los tintes antiguos, visten al dragón, a la bestia y a la ramera: lujo y poder unidos al pecado. Isaías ya había dicho: «si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos» (Is 1:18).',
        { h: 'Los objetos del templo' },
        'Muchos objetos vienen del tabernáculo y del templo: candeleros, altar, incienso, copas, arca del pacto, vestiduras sacerdotales. El cielo del Apocalipsis es un santuario, y lo que Moisés construyó era su copia (He 8:5). Por eso el recurso del tabernáculo ayuda mucho a entender este libro.',
        { h: 'Los animales' },
        'Los animales del libro describen personajes. Cristo es León y Cordero a la vez: Rey poderoso y sacrificio manso. Satanás es dragón y serpiente: violento y engañador. Los imperios son bestias, como en Daniel 7, porque cuando el poder humano se rebela contra Dios pierde su humanidad. En contraste, el Hijo del Hombre trae un reino verdaderamente humano, como Dios quiso desde el principio (Dn 7:13-14).',
        { h: 'La regla de oro' },
        'Para interpretar una imagen, primero se busca si el propio libro la explica; luego, cómo la usa el Antiguo Testamento; y finalmente, cómo encaja en el contexto del pasaje. Así se evita leer en el texto ideas que no están en él.',
        { ir: { t: 'Abrir el recurso El tabernáculo', a: '../../tabernaculo/' } }
      ],
      pensar: 'Cristo es a la vez León y Cordero (Ap 5:5-6). ¿Cuál de los dos rasgos te cuesta más ver en él? ¿Por qué necesitas a un Salvador que sea las dos cosas?'
    },
    {
      id: 's-dos-ciudades', n: 'Dos ciudades: Babilonia y Jerusalén', ref: 'Apocalipsis 17:1-5; 18:2-4; 21:2, 9-11, 24-27; Hebreos 13:14',
      visual: [
        tabla('Contraste', {
          titulo: 'Babilonia y la nueva Jerusalén',
          cab: ['', 'Babilonia (17–18)', 'Nueva Jerusalén (21–22)'],
          filas: [
            ['Invitación', '«Ven acá, y te mostraré la sentencia contra la gran ramera» (17:1)', '«Ven acá, yo te mostraré la desposada» (21:9)'],
            ['Lugar de la visión', 'En el Espíritu, al desierto (17:3)', 'En el Espíritu, a un monte grande y alto (21:10)'],
            ['La mujer', 'Una ramera', 'Una esposa'],
            ['Su vestido', 'Púrpura, escarlata, oro y perlas (17:4)', 'Lino fino; oro y perlas como gloria de Dios (19:8; 21:18-21)'],
            ['Su origen', 'Sube con la bestia', 'Desciende del cielo, de Dios (21:2)'],
            ['Los reyes', 'Fornican con ella (17:2)', 'Traen su gloria a ella (21:24)'],
            ['Su fin', 'Cae en una hora (18:10)', 'Permanece para siempre (22:5)'],
            ['El llamado', '«Salid de ella, pueblo mío» (18:4)', '«El que tiene sed, venga» (22:17)']
          ]
        }),
        img(IMG + 'apo-caida-babilonia.webp', 'Marineros y comerciantes miran desde los barcos una gran ciudad que arde en el horizonte', 'La caída de Babilonia (Ap 18).')
      ],
      texto: [
        'El final del Apocalipsis presenta dos ciudades como dos mujeres. La tabla muestra que el contraste es deliberado: hasta las palabras con que los ángeles invitan a Juan a verlas son casi idénticas.',
        { h: 'Dos ciudades en toda la Biblia' },
        'Las dos ciudades atraviesan la Biblia. Babel fue la ciudad que los hombres construyeron para hacerse un nombre sin Dios (Gn 11:4). Jerusalén fue la ciudad que Dios eligió para poner allí su nombre (1 R 11:36). Babilonia destruyó Jerusalén y llevó cautivo a su pueblo, pero los profetas anunciaron que Babilonia caería y Jerusalén sería restaurada. Apocalipsis completa la historia: Babilonia cae para siempre, y la Jerusalén celestial desciende de Dios.',
        { h: 'Dos maneras de vivir' },
        'Babilonia representa la vida organizada sin Dios: religión falsa, poder político que exige adoración, y comercio que convierte todo, incluso a las personas, en mercancía (Ap 18:13). Es atractiva, rica y aparentemente segura: «Yo estoy sentada como reina» (Ap 18:7). La nueva Jerusalén representa la vida con Dios en el centro: sin templo, porque toda ella es presencia de Dios; sin noche, porque él la ilumina; abierta a todas las naciones, pero cerrada a lo inmundo.',
        { h: 'Ciudadanos de otra ciudad' },
        'El creyente vive hoy en medio de Babilonia, pero no le pertenece. «No tenemos aquí ciudad permanente, sino que buscamos la por venir» (He 13:14). Por eso el libro llama a salir de Babilonia, no necesariamente de un lugar físico, sino de su manera de pensar, de sus valores y de sus pecados (Ap 18:4). Y llama a entrar en la otra ciudad por la única puerta: el Cordero, en cuyo libro de la vida están escritos sus ciudadanos.',
        'Agustín de Hipona, en el siglo V, escribió La ciudad de Dios sobre este mismo contraste: dos amores hicieron dos ciudades, el amor a uno mismo hasta el desprecio de Dios, y el amor a Dios hasta el desprecio de uno mismo.'
      ],
      pensar: '¿Qué valores de Babilonia (orgullo, consumo, búsqueda de seguridad sin Dios) reconoces en tu entorno y en tu propio corazón? ¿Cómo puedes vivir hoy como ciudadano de la nueva Jerusalén?'
    }
  ];
  const vida = [
    {
      id: 'v-bienaventuranzas', n: 'Las siete bienaventuranzas', ref: 'Apocalipsis 1:3; 14:13; 16:15; 19:9; 20:6; 22:7, 14',
      visual: [
        tabla('Bienaventuranzas', {
          titulo: 'Las siete bienaventuranzas de Apocalipsis',
          cab: ['Pasaje', 'Bienaventurado…'],
          filas: [
            ['1:3', 'el que lee, y los que oyen las palabras de esta profecía, y guardan las cosas en ella escritas'],
            ['14:13', 'los muertos que mueren en el Señor'],
            ['16:15', 'el que vela, y guarda sus ropas'],
            ['19:9', 'los que son llamados a la cena de las bodas del Cordero'],
            ['20:6', 'y santo el que tiene parte en la primera resurrección'],
            ['22:7', 'el que guarda las palabras de la profecía de este libro'],
            ['22:14', 'los que lavan sus ropas, para tener derecho al árbol de la vida']
          ]
        })
      ],
      texto: [
        'En medio de visiones de juicio, el Apocalipsis contiene siete bienaventuranzas. Como las del sermón del monte (Mt 5:3-12), describen a quienes Dios considera verdaderamente dichosos, y forman entre todas un retrato del creyente que espera a su Señor.',
        { h: 'Leer y guardar (1:3; 22:7)' },
        'La primera y la sexta enmarcan el libro: bienaventurado el que lee, oye y guarda. El Apocalipsis no promete bendición a quien sabe mucho sobre el futuro, sino a quien obedece lo que lee. La profecía se guarda viviendo en fidelidad, arrepentimiento y esperanza.',
        { h: 'Morir en el Señor (14:13)' },
        'Para los mártires de la tribulación, y para todo creyente que muere, la muerte no es una derrota. Descansan de sus trabajos, y sus obras los siguen. Nada de lo hecho para Cristo se pierde.',
        { h: 'Velar (16:15)' },
        'En medio del capítulo de las copas, Cristo dice: «He aquí, yo vengo como ladrón. Bienaventurado el que vela, y guarda sus ropas, para que no ande desnudo, y vean su vergüenza». Velar es vivir despierto espiritualmente, preparado para su venida en cualquier momento.',
        { h: 'Invitados a la boda (19:9)' },
        'Ser llamado a la cena de las bodas del Cordero es un privilegio inmerecido. La invitación se recibe por gracia, y se responde con gratitud y preparación.',
        { h: 'La primera resurrección (20:6)' },
        'Los que tienen parte en la primera resurrección, la de los justos, están a salvo de la segunda muerte y reinarán con Cristo. Es la bienaventuranza de la seguridad eterna del creyente.',
        { h: 'Lavar las ropas (22:14)' },
        'La última bienaventuranza de la Biblia resume el evangelio: los que lavan sus ropas en la sangre del Cordero (Ap 7:14) tienen derecho al árbol de la vida y entran por las puertas de la ciudad. No por sus méritos, sino por la limpieza que Cristo da.'
      ],
      pensar: '¿Cuál de las siete bienaventuranzas describe mejor tu vida hoy? ¿Cuál quisieras que se hiciera más real en ti?'
    },
    {
      id: 'v-canticos', n: 'Los cánticos del cielo', ref: 'Apocalipsis 4:8, 11; 5:9-14; 7:10-12; 11:15-18; 12:10-12; 15:3-4; 19:1-8',
      visual: [
        tabla('Cánticos', {
          titulo: 'Los cánticos de Apocalipsis',
          cab: ['Pasaje', 'Quiénes cantan', 'Tema'],
          filas: [
            ['4:8', 'Los cuatro seres vivientes', 'La santidad y eternidad de Dios'],
            ['4:11', 'Los veinticuatro ancianos', 'Dios, digno por la creación'],
            ['5:9-10', 'Seres vivientes y ancianos', 'El Cordero, digno por la redención'],
            ['5:12', 'Millones de ángeles', 'Siete atributos al Cordero inmolado'],
            ['5:13', 'Toda criatura', 'Al que está en el trono y al Cordero'],
            ['7:10, 12', 'La gran multitud y los ángeles', 'La salvación pertenece a Dios'],
            ['11:15-18', 'Voces en el cielo y ancianos', 'El reino de Cristo'],
            ['12:10-12', 'Una gran voz en el cielo', 'La derrota del acusador'],
            ['15:3-4', 'Los vencedores de la bestia', 'El cántico de Moisés y del Cordero'],
            ['19:1-8', 'La multitud, ancianos y seres vivientes', 'Aleluya: el juicio y las bodas']
          ]
        }),
        img(IMG + 'apo-mar-vidrio.webp', 'Una multitud vestida de blanco con arpas junto a un mar de vidrio mezclado con fuego', 'Los vencedores cantan (Ap 15:2-3).')
      ],
      texto: [
        'Ningún libro del Nuevo Testamento tiene tantos cánticos como el Apocalipsis. Cada vez que la tierra parece hundirse en el caos, el libro levanta la mirada hacia el cielo, donde se canta. Muchos de estos cánticos han inspirado himnos y coros de la iglesia en todas las épocas.',
        { h: 'Por qué Dios es digno' },
        'Los cánticos dan razones de la adoración. Dios es digno «porque tú creaste todas las cosas» (Ap 4:11). El Cordero es digno «porque tú fuiste inmolado, y con tu sangre nos has redimido» (Ap 5:9). La adoración bíblica no es solo emoción: es la respuesta del corazón a lo que Dios es y a lo que ha hecho.',
        { h: 'Una adoración que crece' },
        'En el capítulo 5, la adoración se extiende en círculos: primero los seres vivientes y los ancianos, luego millones de ángeles, y al final toda criatura del cielo, la tierra y el mar (Ap 5:8-14). Es una anticipación del día en que «se doble toda rodilla… y toda lengua confiese que Jesucristo es el Señor» (Fil 2:10-11).',
        { h: 'Cantar en la prueba' },
        'Los que cantan el cántico de Moisés y del Cordero no lo hacen después de una vida fácil: han vencido a la bestia, muchos de ellos con su sangre (Ap 15:2). Pablo y Silas cantaban himnos a Dios a medianoche en la cárcel de Filipos (Hch 16:25). La alabanza no depende de las circunstancias, sino de la certeza de que Dios reina.',
        { h: 'Adoración centrada en Dios' },
        'Ninguno de los cánticos del Apocalipsis habla de los sentimientos de quien canta; todos hablan de Dios y del Cordero. Es una lección para la adoración de la iglesia de hoy: la alabanza que agrada a Dios lo pone a él en el centro. La iglesia pentecostal, que valora la adoración llena del Espíritu, encuentra aquí su modelo: fervor, sí, pero lleno de verdad sobre Dios (Jn 4:24).'
      ],
      pensar: 'Los cánticos del cielo hablan de Dios y del Cordero, no de quien canta. ¿Cómo puedes hacer que tu adoración, personal y en la iglesia, se centre más en quién es Dios y en lo que Cristo hizo?'
    },
    {
      id: 'v-ven', n: 'Vivir esperando: «Ven, Señor Jesús»', ref: 'Apocalipsis 1:3, 7; 2:10; 3:11; 16:15; 22:7, 12, 17, 20; 1 Juan 3:2-3; Tito 2:11-14',
      visual: [
        img(IMG + 'apo-amanecer-patmos.webp', 'Un amanecer sobre el mar Egeo visto desde las colinas de Patmos, con la estrella de la mañana todavía brillante sobre el horizonte y la luz dorada que comienza a extenderse', '«Yo soy… la estrella resplandeciente de la mañana» (Ap 22:16).'),
        pasaje('He aquí yo vengo pronto, y mi galardón conmigo, para recompensar a cada uno según sea su obra. Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último.', 'Apocalipsis 22:12-13')
      ],
      texto: [
        'El Apocalipsis termina con la oración más breve y más antigua de la esperanza cristiana: «Amén; sí, ven, Señor Jesús» (Ap 22:20). Pablo usa una forma aramea de la misma oración, maranata, “el Señor viene” o “Señor nuestro, ven” (1 Co 16:22). Los primeros cristianos vivían con esa expectativa.',
        { h: 'Una espera activa' },
        'Esperar la venida de Cristo no es quedarse mirando el cielo (Hch 1:11). El libro describe una espera llena de acción: guardar la Palabra (Ap 22:7), ser fiel en la prueba (Ap 2:10), retener lo que se tiene (Ap 3:11), velar (Ap 16:15), predicar el evangelio a toda nación (Ap 14:6) e invitar al sediento a venir (Ap 22:17). Cristo viene con su galardón, «para recompensar a cada uno según sea su obra» (Ap 22:12).',
        { h: 'Una espera que purifica' },
        'Juan, el mismo autor, escribió en otra carta: «sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es. Y todo aquel que tiene esta esperanza en él, se purifica a sí mismo, así como él es puro» (1 Jn 3:2-3). Pablo dice que la gracia nos enseña a vivir «sobria, justa y piadosamente», aguardando «la esperanza bienaventurada y la manifestación gloriosa de nuestro gran Dios y Salvador Jesucristo» (Tit 2:12-13).',
        { h: 'Una espera sin temor' },
        'Para quien conoce a Cristo, el Apocalipsis no es un libro de terror, sino de consuelo. El mismo Cristo que dijo a Juan «No temas» (Ap 1:17) dice hoy lo mismo a su iglesia. Los juicios del libro caen sobre un mundo que rechaza a Dios, pero el creyente espera a su Señor como la esposa espera al esposo.',
        { h: 'Una espera con gracia' },
        'La última palabra de la Biblia no es juicio, sino gracia: «La gracia de nuestro Señor Jesucristo sea con todos vosotros. Amén» (Ap 22:21). Toda la historia, desde Génesis hasta Apocalipsis, es la historia de la gracia de Dios que busca, salva y restaura. Y esa historia todavía está abierta para quien quiera tomar gratuitamente del agua de la vida.'
      ],
      pensar: 'Al terminar este estudio, ¿puedes decir con alegría: «Amén; sí, ven, Señor Jesús»? ¿Qué cambiará en tu vida esta semana a la luz de lo que has aprendido del Apocalipsis?'
    }
  ];

  const LINEA = { desde: 20, hasta: 165, hitos: [
    { a: 30, t: 'Pentecostés' }, { a: 54, t: 'Pablo en Éfeso' }, { a: 70, t: 'Cae Jerusalén' },
    { a: 95, t: 'Patmos, bajo Domiciano' }, { a: 155, t: 'Martirio de Policarpo' }
  ] };

  window.RUTA_DATA = {
    titulo: 'Apocalipsis',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Ubicaciones de los mapas aproximadas.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'introduccion', grupo: 'Estudio del libro', n: 'Introducción y trasfondo', info: 'Autor, Patmos y la fecha, las iglesias de Asia, el género, los símbolos, las escuelas de interpretación y el mensaje', linea: LINEA, estaciones: introduccion },
      { id: 'panorama', grupo: 'Estudio del libro', n: 'Visión panorámica', info: 'Estructura, bosquejo, septenarios, cronología, palabras y temas, y Apocalipsis en toda la Biblia', estaciones: panorama },
      { id: 'comentario', grupo: 'Estudio del libro', n: 'Comentario capítulo por capítulo', info: 'Los 22 capítulos de Apocalipsis', estaciones: comentario },
      { id: 'teologia', grupo: 'Estudio del libro', n: 'Teología del Apocalipsis', info: 'Dios, Cristo, el Espíritu Santo, Satanás, la iglesia, Israel, el reino y la vida del vencedor', estaciones: teologia },
      { id: 'iglesias', grupo: 'Mapas', n: 'Las siete iglesias de Asia', info: 'El recorrido de las cartas y la historia de cada ciudad', linea: LINEA, estaciones: iglesias },
      { id: 'simbolos', grupo: 'Temas', n: 'Los símbolos del Apocalipsis', info: 'Los números, las imágenes y las dos ciudades', estaciones: simbolos },
      { id: 'vida', grupo: 'Temas', n: 'Apocalipsis para la vida', info: 'Las siete bienaventuranzas, los cánticos del cielo y vivir esperando', estaciones: vida }
    ]
  };
})();
