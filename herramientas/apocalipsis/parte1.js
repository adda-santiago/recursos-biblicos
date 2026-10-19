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
        pasaje('@@ap/1/1-3', 'Apocalipsis 1:1-3')
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
        pasaje('@@ap/1/7-8', 'Apocalipsis 1:7-8', 'Versículo clave'),
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
        pasaje('@@ap/1/19', 'Apocalipsis 1:19')
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
