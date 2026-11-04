/* Introducción al Nuevo Testamento · parte 4: V. Hebreos y las cartas generales, VI. Apocalipsis */
(() => {
  const ORIENTE = [[30.5, 11], [43.5, 39]];
  const LEVANTE = [[29.5, 31.5], [37.8, 38.8]];
  const ASIA = [[36.6, 25.5], [39.8, 30.2]];
  const ficha = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Ficha', tabla: { titulo, cab: ['', ''], filas, nota } });
  const bosquejo = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Bosquejo', tabla: { titulo, cab: ['Capítulos', 'Contenido'], filas, nota } });
  const ESTUDIO = 'Esta carta tendrá su propio estudio de libro en el sitio, hoy en preparación.';

  /* ---------------- V. Hebreos y las cartas generales ---------------- */
  const generales = [
    {
      id: 'hebreos', n: 'Hebreos: Cristo, mejor', ref: 'Hebreos 1:1-4; 4:14-16; 8:6-13; 10:32-39; 11:1; 12:1-2; 13:22-24', fecha: [64, 68],
      visual: [
        ficha('La carta a los Hebreos', [
          ['Autor', 'Desconocido; un maestro del círculo de los apóstoles, amigo de Timoteo (He 2:3; 13:23)'],
          ['Destinatarios', 'Creyentes judíos tentados a volver al sistema del templo'],
          ['Fecha', 'Hacia el 64–68 d.C., antes de la destrucción del templo'],
          ['Lugar', 'No se sabe; saludan «los de Italia» (He 13:24)'],
          ['Ocasión', 'Persecución, cansancio y la tentación de abandonar la fe en Cristo'],
          ['Tema', 'Cristo es superior a todo lo anterior: mejor revelación, mejor sacerdote, mejor pacto, mejor sacrificio'],
          ['Versículo clave', 'Hebreos 4:14; también 12:1-2']
        ], 'El autor llama a su obra «palabra de exhortación» (He 13:22): es un sermón escrito con final de carta.'),
        bosquejo('Bosquejo de Hebreos', [
          ['1–2', 'Cristo, superior a los ángeles; primera advertencia'],
          ['3–4', 'Superior a Moisés y a Josué; el reposo de Dios'],
          ['5–7', 'Sumo sacerdote según el orden de Melquisedec'],
          ['8–10', 'Un mejor pacto, un mejor santuario y un sacrificio una vez para siempre'],
          ['11', 'La fe: la gran nube de testigos'],
          ['12–13', 'Corramos con paciencia; exhortaciones finales']
        ], 'Cinco advertencias recorren la carta: 2:1-4; 3:7–4:13; 5:11–6:12; 10:26-39; 12:25-29.'),
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/4/14-16', ref: 'Hebreos 4:14-16' }
      ],
      texto: [
        'Hebreos comienza como un sermón y termina como una carta. No tiene saludo inicial ni nombre de autor. Su primera frase anuncia el tema: Dios habló antes por los profetas, «en estos postreros días nos ha hablado por el Hijo» (He 1:2). Desde allí, la palabra clave es mejor: Cristo es mejor que los ángeles, que Moisés y que el sacerdocio de Aarón, y trae un mejor pacto, con mejores promesas y un mejor sacrificio.',
        { h: 'Los destinatarios' },
        'Los lectores eran creyentes judíos que habían soportado persecución, cárcel y despojo de sus bienes (He 10:32-34). Ahora estaban cansados, y algunos dejaban de congregarse (He 10:25). Tenían la tentación de volver al sistema del templo, con su sacerdocio y sus sacrificios visibles. El autor les muestra que eso sería volver a la sombra después de haber conocido la realidad. Los sacrificios de animales no podían quitar el pecado; Cristo se ofreció una vez para siempre y vive siempre para interceder (He 7:25; 10:10-14).',
        { h: 'Una fecha antes del 70' },
        'La carta habla del sacerdocio y de los sacrificios como algo que todavía ocurre, y dice que el primer pacto «está próximo a desaparecer» (He 8:13). Si el templo ya hubiera sido destruido, el argumento más fuerte habría sido mencionarlo. Por eso este recurso la fecha antes del año 70.',
        { posturas: {
          titulo: '¿Quién escribió Hebreos?',
          a: { n: 'Pablo', t: 'Las iglesias de Oriente la recibieron como carta de Pablo, y así aparece en muchas Biblias antiguas. Se apoyan en la mención de Timoteo (He 13:23) y en temas comunes con Pablo, como el nuevo pacto y la fe de Abraham.' },
          b: { n: 'Otro maestro del círculo apostólico', t: 'El griego y el estilo son muy distintos de los de Pablo, y el autor dice que recibió el evangelio de los que oyeron al Señor (He 2:3), mientras Pablo insiste en que lo recibió directamente de Cristo (Ga 1:12). Se han propuesto Apolos, varón elocuente y poderoso en las Escrituras (Hch 18:24), como sugirió Lutero; Bernabé, levita, como dijo Tertuliano; Lucas o Priscila.' },
          c: 'Este recurso considera al autor desconocido. Ya en el siglo III, Orígenes dijo que solo Dios sabe quién la escribió. Lo seguro es que pertenecía al círculo de los apóstoles, y que la iglesia reconoció la carta como Escritura inspirada. Su autoridad no depende de conocer el nombre del autor.'
        } },
        { ir: { t: 'Ver «Cristo, nuestro sumo sacerdote» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/1' } },
        ESTUDIO
      ],
      pensar: 'Hebreos anima a correr «puestos los ojos en Jesús, el autor y consumador de la fe» (He 12:2). ¿Qué peso necesitas dejar para seguir corriendo?'
    },
    {
      id: 'santiago', n: 'Santiago: una fe que obra', ref: 'Santiago 1:1-5, 22; 2:14-26; 3:1-12; 5:14-16; Gálatas 1:19; Hechos 15:13-21', fecha: [45, 49],
      visual: [
        ficha('La carta de Santiago', [
          ['Autor', 'Jacobo (Santiago), hermano del Señor y líder de la iglesia de Jerusalén (Stg 1:1; Ga 1:19)'],
          ['Destinatarios', '«Las doce tribus que están en la dispersión»: creyentes judíos fuera de Judea (Stg 1:1)'],
          ['Fecha', 'Hacia el 45–49 d.C.; quizá el libro más antiguo del Nuevo Testamento'],
          ['Lugar', 'Jerusalén'],
          ['Ocasión', 'Creyentes pobres y probados, con favoritismos, divisiones y una fe solo de palabras'],
          ['Tema', 'La fe verdadera se muestra en las obras'],
          ['Versículo clave', 'Santiago 1:22; también 2:17']
        ]),
        bosquejo('Bosquejo de Santiago', [
          ['1', 'Las pruebas, la sabiduría y ser hacedores de la palabra'],
          ['2', 'Sin favoritismo; la fe sin obras está muerta'],
          ['3', 'La lengua y la sabiduría de lo alto'],
          ['4', 'Conflictos, humildad y planes'],
          ['5', 'Los ricos opresores, la paciencia y la oración de fe']
        ], 'En 108 versículos hay unos 54 mandatos: es la carta más práctica del Nuevo Testamento.'),
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-santiago-carta.webp', alt: 'En una casa sencilla de Jerusalén, Jacobo, hermano del Señor, anciano de barba gris con manto de oración, dicta una carta a un joven escriba mientras otros ancianos escuchan', pie: '«Santiago, siervo de Dios y del Señor Jesucristo, a las doce tribus que están en la dispersión» (Stg 1:1).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pablo y Santiago',
          cab: ['', 'Pablo (Ro 3:28)', 'Santiago (Stg 2:24)'],
          filas: [
            ['Pregunta', '¿Cómo es aceptado el pecador por Dios?', '¿Cómo se reconoce una fe verdadera?'],
            ['«Obras»', 'Obras de la ley para ganar la salvación', 'Obras de amor que nacen de la fe'],
            ['«Justificar»', 'Declarar justo ante Dios', 'Mostrar justo ante los hombres'],
            ['Abraham', 'Creyó y le fue contado por justicia (Gn 15:6)', 'Su fe se mostró al ofrecer a Isaac (Gn 22)']
          ],
          nota: 'Pablo combate el legalismo; Santiago, una fe muerta. Los dos enseñan una fe viva que produce obras (Ga 5:6; Ef 2:8-10).'
        } }
      ],
      texto: [
        'La carta se abre con un nombre: Santiago, que es la forma española de Jacobo. En el Nuevo Testamento hay varios Jacobos, pero el autor de esta carta es casi con seguridad Jacobo, el hermano del Señor. No creyó en Jesús durante su ministerio (Jn 7:5), pero el Señor resucitado se le apareció (1 Co 15:7), y llegó a ser el líder de la iglesia de Jerusalén. Presidió el concilio de Hechos 15. El historiador Josefo cuenta que fue apedreado en el año 62. Por su vida de oración, lo llamaban Jacobo el justo.',
        { h: 'Una carta muy temprana' },
        'Santiago no menciona la cuestión de los gentiles ni el concilio de Jerusalén, y describe a sus lectores reunidos en la sinagoga (Stg 2:2, en griego). Por eso muchos la fechan antes del año 50, lo que la haría el libro más antiguo del Nuevo Testamento. Su estilo recuerda a los Proverbios y, sobre todo, al Sermón del monte: hay más ecos de las palabras de Jesús en Santiago que en ninguna otra carta.',
        { h: 'Hacedores de la palabra' },
        'El tema es la fe que se ve en la vida: «sed hacedores de la palabra, y no tan solamente oidores» (Stg 1:22). Santiago habla de las pruebas, de no hacer acepción de personas, de dominar la lengua, de la humildad y de la paciencia. Y enseña a la iglesia a orar por los enfermos: que llamen a los ancianos, que oren por él ungiéndole con aceite en el nombre del Señor, «y la oración de fe salvará al enfermo, y el Señor lo levantará» (Stg 5:14-15).',
        { h: '¿Contradice a Pablo?' },
        'Santiago dice que el hombre es justificado por las obras, y no solamente por la fe (Stg 2:24). Pablo dice que es justificado por la fe sin las obras de la ley (Ro 3:28). Lutero llegó a llamar a Santiago «epístola de paja», aunque nunca la quitó de su Biblia. Pero los dos no se contradicen, como muestra la tabla: responden preguntas distintas y usan las palabras en sentidos distintos. Pablo ataca la idea de ganar la salvación con obras; Santiago, la idea de una fe que no cambia nada. Los dos dirían que somos salvos solo por la fe, pero la fe que salva nunca está sola.',
        ESTUDIO
      ],
      pensar: 'Santiago dice que la fe sin obras está muerta (Stg 2:17). ¿Qué obra concreta podría mostrar hoy que tu fe está viva?'
    },
    {
      id: '1pedro', n: '1 Pedro: esperanza en el sufrimiento', ref: '1 Pedro 1:1-9; 2:9-12, 21-25; 3:15; 4:12-16; 5:1-13', fecha: [63, 64],
      visual: [
        ficha('La primera carta de Pedro', [
          ['Autor', 'El apóstol Pedro, por medio de Silvano (1 P 1:1; 5:12)'],
          ['Destinatarios', 'Los expatriados de la dispersión en Ponto, Galacia, Capadocia, Asia y Bitinia, en su mayoría gentiles convertidos (1 P 1:1, 14; 4:3)'],
          ['Fecha', 'Hacia el 63–64 d.C., poco antes de la persecución de Nerón o al comenzar'],
          ['Lugar', '«Babilonia», nombre que muchos cristianos daban a Roma (1 P 5:13)'],
          ['Ocasión', 'Los creyentes sufrían insultos y hostilidad por su fe'],
          ['Tema', 'La esperanza viva y la gracia de Dios sostienen al creyente en el sufrimiento'],
          ['Versículo clave', '1 Pedro 1:3; también 4:12-13']
        ]),
        bosquejo('Bosquejo de 1 Pedro', [
          ['1:1–2:10', 'Una salvación gloriosa: nacidos de nuevo, santos y pueblo de Dios'],
          ['2:11–4:11', 'Peregrinos en el mundo: buena conducta ante autoridades, amos y familia; el ejemplo de Cristo'],
          ['4:12–5:14', 'El fuego de prueba: sufrir como cristianos; ancianos y jóvenes']
        ]),
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'De Roma, llamada «Babilonia», a Asia Menor.', fecha: 63, estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'r-ponto', 'r-galacia', 'r-capadocia', 'r-asia', 'r-bitinia'], trazos: ['nt-1pedro'] } },
          { t: 'El orden de 1 Pedro 1:1, quizá el recorrido del mensajero.', fecha: 63, estado: { view: [[36.3, 26], [42.6, 39.5]], capas: ['roma-14', 'iglesia-62'], lugares: ['r-ponto', 'r-galacia', 'r-capadocia', 'r-asia', 'r-bitinia'], trazos: ['nt-1pedro-circuito'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-pedro-silvano.webp', alt: 'En una casa de Roma, Pedro, de cabello y barba canosos, dicta una carta a Silvano, que escribe en un papiro; Marcos, joven, prepara otra hoja junto a la ventana', pie: '«Por conducto de Silvano… os he escrito brevemente» (1 P 5:12).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1p/1/3-7', ref: '1 Pedro 1:3-7' }
      ],
      texto: [
        'Pedro, el pescador de Galilea, el que negó a Jesús tres veces y fue restaurado, escribe ya anciano a creyentes que sufren. Se presenta como «anciano también con ellos, y testigo de los padecimientos de Cristo» (1 P 5:1). Su carta es una de las más cálidas del Nuevo Testamento.',
        { h: 'Peregrinos' },
        'Los destinatarios vivían en cinco regiones del norte y el centro de Asia Menor. Pedro los llama expatriados y peregrinos, no porque hubieran salido de su tierra, sino porque su verdadera patria estaba en el cielo. Eran gentiles que habían dejado su vida anterior (1 P 4:3-4), y sus vecinos los insultaban por no participar en las fiestas y costumbres paganas. Pedro les recuerda quiénes son: «linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios» (1 P 2:9), los mismos títulos que Dios dio a Israel en el Sinaí.',
        { h: 'Esperanza viva' },
        'La carta comienza con una alabanza: Dios «nos hizo renacer para una esperanza viva, por la resurrección de Jesucristo de los muertos» (1 P 1:3). Esa esperanza sostiene en las pruebas, que purifican la fe como el fuego al oro. Pedro anima a no sorprenderse del fuego de prueba (1 P 4:12), a sufrir haciendo el bien siguiendo las pisadas de Cristo, que «llevó él mismo nuestros pecados en su cuerpo sobre el madero» (1 P 2:24), y a estar siempre preparados para presentar defensa de la esperanza que hay en nosotros (1 P 3:15).',
        { h: 'Babilonia y Silvano' },
        'Pedro manda saludos de «la iglesia que está en Babilonia» y de «Marcos mi hijo» (1 P 5:13). Babilonia era, para los judíos y los cristianos, el símbolo de la capital que oprime al pueblo de Dios, y Apocalipsis llama así a Roma. La tradición antigua dice que Pedro estuvo en Roma al final de su vida y murió allí, crucificado, en la persecución de Nerón. Silvano, el mismo Silas que acompañó a Pablo, le sirvió de secretario o de mensajero (1 P 5:12), lo que puede explicar el buen griego de la carta.',
        ESTUDIO
      ],
      pensar: 'Pedro escribió a creyentes insultados por su fe: «estad siempre preparados para presentar defensa… de la esperanza que hay en vosotros» (1 P 3:15). ¿Cómo explicarías tu esperanza a alguien que no cree?'
    },
    {
      id: '2pedro-judas', n: '2 Pedro y Judas: contra los falsos maestros', ref: '2 Pedro 1:12-21; 2:1-3; 3:1-18; Judas 1-4, 14-25', fecha: [64, 70],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Dos cartas hermanas',
          cab: ['', '2 Pedro', 'Judas'],
          filas: [
            ['Autor', 'El apóstol Pedro (2 P 1:1, 16-18)', 'Judas, hermano de Jacobo, hermano del Señor (Jud 1; Mt 13:55)'],
            ['Destinatarios', 'Los mismos de la primera carta (2 P 3:1)', 'Creyentes amenazados por infiltrados'],
            ['Fecha', 'Hacia el 64–67 d.C., poco antes de su muerte (2 P 1:14)', 'Hacia el 65–70 d.C.'],
            ['Lugar', 'Roma, probablemente', 'No se sabe'],
            ['Ocasión', 'Falsos maestros que negaban la venida de Cristo y vivían en libertinaje', 'Hombres impíos que convertían la gracia en libertinaje'],
            ['Tema', 'Crecer en el conocimiento de Cristo y esperar su venida', 'Contender por la fe dada una vez a los santos'],
            ['Versículo clave', '2 Pedro 1:21; 3:18', 'Judas 3, 24-25']
          ],
          nota: 'Gran parte de Judas tiene paralelo en 2 Pedro 2.'
        } },
        bosquejo('Bosquejo de las dos cartas', [
          ['2 P 1', 'Crecer en virtud; la palabra profética más segura'],
          ['2 P 2', 'Los falsos maestros y su juicio'],
          ['2 P 3', 'El día del Señor: la paciencia de Dios y los cielos nuevos'],
          ['Jud 1-16', 'Ejemplos de juicio y retrato de los infiltrados'],
          ['Jud 17-25', 'Conservaos en el amor de Dios; doxología final']
        ]),
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2p/1/19-21', ref: '2 Pedro 1:19-21' }
      ],
      texto: [
        'Estas dos cartas breves tratan el mismo peligro: maestros que se habían infiltrado en las iglesias, negaban al Señor con su conducta, se burlaban de su venida y convertían la gracia en excusa para pecar. Las dos responden con firmeza y con esperanza.',
        { h: 'El testamento de Pedro' },
        'Pedro sabe que pronto dejará el cuerpo, como el Señor se lo había anunciado (2 P 1:14; Jn 21:18-19), y quiere dejar a los creyentes algo que recuerden. Les recuerda que no siguieron fábulas: él fue testigo de la majestad de Cristo en el monte de la transfiguración. Y tienen algo todavía más firme, la palabra profética, porque «los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21).',
        'A los que preguntaban dónde estaba la promesa de su venida, Pedro responde que para el Señor un día es como mil años, y que no retarda su promesa, sino que es paciente, «no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento» (2 P 3:9). Al final, menciona las cartas de Pablo junto a «las otras Escrituras» (2 P 3:16).',
        { h: 'Judas, el hermano del Señor' },
        'Judas, como Jacobo, era hermano de Jesús y no creyó en Él hasta después de la resurrección. Quería escribir sobre la salvación común, pero tuvo que escribir para exhortar a contender ardientemente «por la fe que ha sido una vez dada a los santos» (Jud 3). Cita una profecía de Enoc que también aparece en el libro de 1 Enoc (Jud 14-15). Citar una frase verdadera de un libro no lo convierte en Escritura, como Pablo citó a poetas griegos (Hch 17:28). La carta termina con una de las doxologías más hermosas: a aquel que es poderoso para guardaros sin caída… sea gloria (Jud 24-25).',
        { posturas: {
          titulo: '¿Escribió Pedro la segunda carta?',
          a: { n: 'La escribió otro, después de Pedro', t: 'Muchos críticos piensan que 2 Pedro fue escrita a comienzos del siglo II por alguien que usó el nombre del apóstol. Señalan que su griego es distinto del de 1 Pedro, que usa material de Judas y que tardó en ser aceptada en algunas regiones.' },
          b: { n: 'La escribió Pedro', t: 'La carta dice ser de Pedro, testigo de la transfiguración, y la iglesia la reconoció en el canon. La diferencia de estilo se explica si Pedro usó un secretario distinto o escribió él mismo, sin Silvano. Que tardara en aceptarse muestra el cuidado de las iglesias, no que fuera falsa.' },
          c: 'Este recurso sigue la segunda postura, por las mismas razones dadas para las cartas pastorales: una carta que engañara sobre su autor no sería coherente con su enseñanza sobre la verdad.'
        } },
        { ir: { t: 'Ver «1 Enoc y la carta de Judas» en Los libros apócrifos', a: '../../libros-apocrifos/#pseudo/1' } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Judas termina confiando en aquel que es poderoso para guardarnos sin caída (Jud 24). ¿Cómo te ayuda esa confianza frente a las enseñanzas falsas de hoy?'
    },
    {
      id: '1juan', n: '1 Juan: para que sepáis', ref: '1 Juan 1:1-7; 2:1-2, 18-19; 4:1-3, 7-10; 5:11-13', fecha: [85, 95],
      visual: [
        ficha('La primera carta de Juan', [
          ['Autor', 'El apóstol Juan, testigo de la vida de Jesús (1 Jn 1:1-3)'],
          ['Destinatarios', 'Las iglesias de Asia, a las que llama «hijitos»'],
          ['Fecha', 'Hacia el 85–95 d.C.'],
          ['Lugar', 'Éfeso, según la tradición'],
          ['Ocasión', 'Falsos maestros que habían salido de la iglesia negaban que Jesucristo hubiera venido en carne (1 Jn 2:19; 4:2-3)'],
          ['Tema', 'La seguridad de la vida eterna: Dios es luz y Dios es amor'],
          ['Versículo clave', '1 Juan 5:13']
        ]),
        bosquejo('Bosquejo de 1 Juan', [
          ['1:1-4', 'Lo que hemos visto y oído: el Verbo de vida'],
          ['1:5–2:29', 'Dios es luz: andar en la luz, obedecer y no amar al mundo'],
          ['3:1–4:21', 'Dios es amor: hijos de Dios que se aman; probad los espíritus'],
          ['5:1-21', 'La fe que vence al mundo y la seguridad de la vida eterna']
        ], 'Juan vuelve una y otra vez a tres pruebas: creer en Jesús, obedecer sus mandamientos y amar a los hermanos.'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../apocalipsis/img/apo-lectura-iglesia.webp', alt: 'En una casa de una ciudad de Asia del siglo I, un lector de pie lee en voz alta un rollo a un grupo de creyentes sentados, a la luz de lámparas de aceite', pie: '«Estas cosas os he escrito… para que sepáis que tenéis vida eterna» (1 Jn 5:13).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1jn/1/1-4', ref: '1 Juan 1:1-4' }
      ],
      texto: [
        'Primera de Juan no tiene saludo ni despedida, ni nombra a su autor. Pero su estilo y su vocabulario son los del evangelio de Juan: luz, vida, verdad, amor, permanecer, creer. Comienza como el evangelio, hablando de lo que era desde el principio, y con la fuerza de un testigo: «lo que hemos oído, lo que hemos visto con nuestros ojos, lo que hemos contemplado, y palparon nuestras manos tocante al Verbo de vida» (1 Jn 1:1).',
        { h: 'La ocasión' },
        'Un grupo había salido de las iglesias: «Salieron de nosotros, pero no eran de nosotros» (1 Jn 2:19). Enseñaban que Jesús no había venido realmente en carne, que el pecado no importaba y que ellos tenían un conocimiento superior. Eran precursores del gnosticismo. Ireneo cuenta que en Éfeso Juan se enfrentó a Cerinto, un maestro que separaba al hombre Jesús del Cristo divino. Los que quedaban estaban confundidos y se preguntaban si de verdad eran salvos.',
        { h: 'Tres pruebas' },
        'Juan les da pruebas para reconocer la verdad. La prueba doctrinal: «Todo espíritu que confiesa que Jesucristo ha venido en carne, es de Dios» (1 Jn 4:2). La prueba moral: el que dice que conoce a Dios y no guarda sus mandamientos es mentiroso. La prueba del amor: «El que no ama, no ha conocido a Dios; porque Dios es amor» (1 Jn 4:8). Quien cree en el Hijo, anda en la luz y ama a sus hermanos puede tener seguridad.',
        { h: 'Para que sepáis' },
        'Juan escribió su evangelio para que sus lectores creyeran; escribió esta carta para que los que ya creen sepan que tienen vida eterna (1 Jn 5:13). No es una seguridad para pecar sin cuidado: «estas cosas os escribo para que no pequéis; y si alguno hubiere pecado, abogado tenemos para con el Padre, a Jesucristo el justo» (1 Jn 2:1).',
        ESTUDIO
      ],
      pensar: 'Juan escribió para que los creyentes supieran que tienen vida eterna (1 Jn 5:13). ¿En qué se apoya tu seguridad: en tus sentimientos o en lo que Dios ha dicho de su Hijo?'
    },
    {
      id: '2-3juan', n: '2 y 3 Juan: verdad y hospitalidad', ref: '2 Juan 1-13; 3 Juan 1-15', fecha: [85, 95],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Las dos cartas más breves',
          cab: ['', '2 Juan', '3 Juan'],
          filas: [
            ['Autor', '«El anciano» (2 Jn 1)', '«El anciano» (3 Jn 1)'],
            ['Destinatario', '«La señora elegida y sus hijos»: una iglesia o una mujer y su familia', 'Gayo, un creyente amado y hospitalario'],
            ['Fecha y lugar', 'Hacia el 85–95, desde Éfeso', 'Hacia el 85–95, desde Éfeso'],
            ['Ocasión', 'Maestros itinerantes que negaban la encarnación', 'Diótrefes rechazaba a los misioneros enviados por Juan'],
            ['Tema', 'Andar en la verdad y en el amor; no dar apoyo al error', 'Apoyar a los que salen por el Nombre; imitar lo bueno'],
            ['Versículo clave', '2 Juan 6', '3 Juan 4']
          ],
          nota: 'Cada una cabía en una sola hoja de papiro: unos 13 y 15 versículos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@3jn/1/2-8', ref: '3 Juan 2-8' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA, capas: ['roma-14', 'iglesia-62'], lugares: ['efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia', 'laodicea'] } }
      ],
      texto: [
        'Segunda y Tercera de Juan son los libros más breves de la Biblia. Cada una cabía en una hoja de papiro. El autor se presenta solo como «el anciano», un título que muestra a la vez su edad y su autoridad sobre las iglesias de Asia. Juan terminó sus días en Éfeso, cuidando como un padre a las congregaciones de la región.',
        { h: 'Los maestros que viajaban' },
        'En el siglo I, los predicadores y misioneros iban de ciudad en ciudad, y las iglesias los recibían en sus casas. Era una gran ayuda para el evangelio, pero también una puerta abierta para los falsos maestros. Las dos cartas tratan esa situación desde lados opuestos.',
        { h: '2 Juan: cuidado con el error' },
        'La segunda carta se dirige a «la señora elegida y a sus hijos». Puede ser una iglesia, descrita como una madre con sus hijos, o una mujer cristiana y su familia. Juan se alegra porque algunos andan en la verdad y les recuerda el mandamiento del amor. Pero les advierte: muchos engañadores no confiesan que Jesucristo ha venido en carne. A quien llega con esa doctrina, no deben recibirlo en casa ni darle la bienvenida (2 Jn 7-10). No se trata de negar el saludo a un vecino, sino de no dar alojamiento y apoyo a un maestro que difunde el error.',
        { h: '3 Juan: abrir la puerta a los fieles' },
        'La tercera carta va dirigida a Gayo, que recibía con generosidad a los hermanos que viajaban por la obra del Señor. Juan lo felicita: «No tengo yo mayor gozo que este, el oír que mis hijos andan en la verdad» (3 Jn 4). En cambio, un tal Diótrefes, «al cual le gusta tener el primer lugar», no recibía a los enviados de Juan y expulsaba de la iglesia a quienes lo hacían (3 Jn 9-10). Juan pone como ejemplo a Demetrio, de quien todos dan buen testimonio.',
        'Juntas, las dos cartas muestran un equilibrio: la verdad sin amor se vuelve dura, y el amor sin verdad se vuelve ingenuo. Hay que apoyar a los que sirven fielmente y no prestar la casa a quienes niegan a Cristo.',
        'Las cartas de Juan tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Gayo acogía a los misioneros, «para que cooperemos con la verdad» (3 Jn 8). ¿Cómo puedes apoyar tú a quienes sirven en la obra del Señor?'
    }
  ];

  /* ---------------- VI. Apocalipsis ---------------- */
  const apocalipsis = [
    {
      id: 'apocalipsis', n: 'Apocalipsis: el que viene', ref: 'Apocalipsis 1:1-3, 9-19; 22:12-21', fecha: 95,
      visual: [
        ficha('Apocalipsis', [
          ['Autor', 'El apóstol Juan, desterrado en Patmos (Ap 1:1, 9)'],
          ['Destinatarios', 'Las siete iglesias de Asia, y por medio de ellas toda la iglesia (Ap 1:4, 11)'],
          ['Fecha', 'Hacia el 95 d.C., en tiempos del emperador Domiciano'],
          ['Lugar', 'La isla de Patmos, en el mar Egeo'],
          ['Ocasión', 'Persecución, presión del culto al emperador y tibieza en algunas iglesias'],
          ['Tema', 'Jesucristo vencerá, volverá y hará nuevas todas las cosas'],
          ['Versículo clave', 'Apocalipsis 1:19; también 22:20']
        ]),
        bosquejo('Bosquejo según Apocalipsis 1:19', [
          ['1', '«Las cosas que has visto»: Cristo glorificado entre los candeleros'],
          ['2–3', '«Las que son»: las cartas a las siete iglesias'],
          ['4–22', '«Las que han de ser después de estas»: el trono, los sellos, las trompetas, las copas, la venida de Cristo, el milenio y la nueva creación']
        ], 'El estudio de Apocalipsis del sitio sigue la lectura futurista de los capítulos 4 a 22.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA, capas: ['roma-14', 'iglesia-62'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia', 'laodicea'], trazos: ['nt-apocalipsis', 'siete-iglesias'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../apocalipsis/img/apo-mensajero-patmos.webp', alt: 'Al amanecer, un mensajero cristiano con un rollo envuelto en tela sube a un pequeño barco de vela en el puerto de piedra de la isla de Patmos, rumbo a Éfeso', pie: 'El libro viajó como una carta a las siete iglesias (Ap 1:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ap/1/1-3', ref: 'Apocalipsis 1:1-3' }
      ],
      texto: [
        'El último libro de la Biblia se llama, en griego, apocalipsis, que significa revelación: quitar el velo. Su primera frase dice de quién es: «La revelación de Jesucristo, que Dios le dio, para manifestar a sus siervos las cosas que deben suceder pronto» (Ap 1:1). Es un libro sobre Cristo y sobre el futuro.',
        { h: 'Patmos' },
        'Juan, ya anciano, estaba desterrado en Patmos, una pequeña isla rocosa frente a la costa de Asia, «por causa de la palabra de Dios y el testimonio de Jesucristo» (Ap 1:9). Un día del Señor fue arrebatado en el Espíritu y vio a Cristo glorificado en medio de siete candeleros. Recibió la orden de escribir lo que veía y enviarlo a siete iglesias de Asia, que el mapa muestra en el orden en que un mensajero las recorrería desde Éfeso.',
        { h: 'Tres géneros en un libro' },
        'Apocalipsis es una revelación en visiones y símbolos, como Daniel y Ezequiel. Es también profecía: el único libro del Nuevo Testamento que se presenta así de principio a fin (Ap 1:3; 22:18-19). Y es una carta, con saludo y despedida. Es el único libro de la Biblia que promete una bendición a quien lo lee y lo escucha (Ap 1:3).',
        { h: 'El fin de la historia' },
        'Después de las cartas a las iglesias, Juan sube en visión al trono de Dios y ve al Cordero que fue inmolado tomar el libro sellado. Siguen los juicios de los sellos, las trompetas y las copas, la caída de Babilonia, la venida de Cristo como Rey de reyes, el milenio, el juicio final y la nueva Jerusalén. Así termina la historia que comenzó en Génesis: el árbol de la vida vuelve a estar al alcance del hombre, y Dios habita con su pueblo. La Biblia cierra con una promesa y una oración: «Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús» (Ap 22:20).',
        { posturas: {
          titulo: '¿Cuándo se escribió Apocalipsis?',
          a: { n: 'Hacia el 95, bajo Domiciano', t: 'Ireneo, discípulo de Policarpo, dice que la visión se vio a fines del reinado de Domiciano. La situación de las iglesias, con Laodicea rica después del terremoto del año 60 y Éfeso ya sin su primer amor, encaja mejor con una fecha tardía.' },
          b: { n: 'Hacia el 68, bajo Nerón', t: 'Algunos lo fechan antes de la destrucción del templo, porque Apocalipsis 11 menciona el templo y la ciudad, y porque identifican a la bestia con Nerón. Esta fecha suele ir unida a la lectura preterista, que ve cumplida la mayor parte del libro en el siglo I.' },
          c: 'Este recurso sigue la fecha tardía, como el estudio de Apocalipsis del sitio, y la lectura futurista de los capítulos 4 a 22.'
        } },
        { ir: { t: 'Abrir el estudio de Apocalipsis', a: '../../apocalipsis/' } }
      ],
      pensar: 'La Biblia termina con una oración: «Amén; sí, ven, Señor Jesús» (Ap 22:20). ¿Puedes hacer tuya esa oración hoy?'
    }
  ];

  window.__NT.generales = generales;
  window.__NT.apocalipsis = apocalipsis;
})();
