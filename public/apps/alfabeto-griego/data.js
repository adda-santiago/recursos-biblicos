/* ==========================================================
   Recursos Bíblicos — El alfabeto griego y la lectura · contenido de las rutas
   FUENTE de public/apps/alfabeto-griego/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/alfabeto_griego_citas.py
   Marcas que el script reemplaza (dos arrobas y luego):
     libro/capítulo/versículos      → texto de la RV 1960 del sitio (public/biblia/rv1960)
     n1904:libro/capítulo/versículos → griego del Nuevo Testamento de Nestle 1904 (herramientas/n1904.py)
     n1904p:libro/capítulo/versículo → lista de las palabras griegas del versículo
   Pronunciación: erasmiana, la que enseñan casi todos los seminarios e institutos.
   Transliteración sencilla para hispanohablantes: j = χ, th = θ, f = φ, ps = ψ, x = ξ,
   ē = η, ō = ω, y = υ (u en los diptongos αυ, ευ, ου), h = espíritu áspero, ng = γ ante γ κ ξ χ;
   la tilde marca la sílaba acentuada cuando no sigue la regla del español (ḗ y ṓ si es η u ω).
   La académica, solo en la tabla del alfabeto. Motor: ../assets/js/ruta-estudio.js.
   ========================================================== */
(() => {
  // Palabras de un versículo con su transliteración y su sentido, en orden de lectura
  const P = (lista, glosas) => {
    if (lista.length !== glosas.length) throw new Error(`P: ${lista.length} palabras y ${glosas.length} glosas (${lista.join(' ')})`);
    return lista.map((gr, i) => ({ gr, tr: glosas[i][0], es: glosas[i][1] }));
  };
  window.__ALFA = { P };

  const panorama = [
    {
      id: 'por-que', n: '¿Por qué leer griego si tengo la Reina-Valera?', ref: 'Juan 1:1; Mateo 5:18; Hechos 17:11',
      visual: [
        { tipo: 'griego', titulo: 'Juan 1:1', ref: 'Juan 1:1', gr: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.', tr: 'En arjḗ ēn ho Lógos, kai ho Lógos ēn pros ton Theón, kai Theós ēn ho Lógos.',
          palabras: P(['Ἐν', 'ἀρχῇ', 'ἦν', 'ὁ', 'Λόγος', 'καὶ', 'ὁ', 'Λόγος', 'ἦν', 'πρὸς', 'τὸν', 'Θεόν', 'καὶ', 'Θεὸς', 'ἦν', 'ὁ', 'Λόγος'], [['en', 'en'], ['arjḗ', 'principio'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo, Palabra'], ['kai', 'y'], ['ho', 'el'], ['Lógos', 'Verbo'], ['ēn', 'era'], ['pros', 'con, junto a'], ['ton', 'el'], ['Theón', 'Dios'], ['kai', 'y'], ['Theós', 'Dios'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo']]),
          rv: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' },
        { tipo: 'tabla', titulo: 'Lo que aprenderás', tabla: {
          titulo: 'Lo que vas a aprender en este recurso',
          cab: ['Ruta', 'Qué aprendes', 'Al terminar podrás'],
          filas: [
            ['I. Panorama', 'La lengua del Nuevo Testamento y cómo se escribía', 'Abrir un Nuevo Testamento griego sin perderte'],
            ['II. Las 24 letras', 'Forma, nombre, sonido y valor de cada letra', 'Reconocer todas las letras, mayúsculas y minúsculas'],
            ['III. Vocales, diptongos y signos', 'Vocales largas y breves, espíritus, acentos y puntuación', 'Pronunciar una palabra completa'],
            ['IV. A leer', 'Sílabas, nombres, palabras conocidas y manuscritos', 'Leer palabras y frases del Nuevo Testamento'],
            ['Taller práctico', 'Cinco versículos famosos, palabra por palabra', 'Leer en voz alta un versículo entero']
          ],
          nota: 'Este recurso enseña a leer, no a traducir. El vocabulario y la gramática vienen en el recurso siguiente.'
        } }
      ],
      texto: [
        'Si ya recorriste El alfabeto hebreo y la lectura, conoces la respuesta de fondo: una traducción fiel como la Reina-Valera comunica la Palabra de Dios, y quien la lee con oración recibe todo lo que necesita para la fe y la vida. El griego no la reemplaza. Lo aprendemos para acercarnos con más atención a la lengua en que el Espíritu Santo inspiró a los apóstoles a escribir el Nuevo Testamento.',
        'Los veintisiete libros del Nuevo Testamento se escribieron en griego: los evangelios, Hechos, las cartas de Pablo, las cartas generales y Apocalipsis. Cuando Juan escribe «En el principio era el Verbo» (Jn 1:1), en el panel lo ves con las letras en que lo escribió. Al terminar este recurso podrás leerlo en voz alta, palabra por palabra.',
        { h: 'Tres beneficios concretos' },
        'Primero, podrás usar las herramientas de estudio. Los diccionarios, las concordancias, los interlineales y los comentarios citan palabras griegas: ἀγάπη, χάρις, ἐκκλησία. Si sabes leerlas, aunque sea despacio, ya no dependes de la transliteración de cada autor, que muchas veces cambia de un libro a otro.',
        'Segundo, verás lo que la traducción no puede mostrar: la misma palabra repetida en un pasaje, el orden enfático de una frase, los juegos de palabras. En Juan 1:1 la palabra «Verbo» se repite tres veces, y la frase termina con ella, como un sello.',
        'Tercero, leerás con humildad. Cuando ves en griego lo que hay detrás de una palabra, entiendes por qué las traducciones a veces eligen caminos distintos, y aprecias el trabajo de quienes nos dieron la Biblia en español. Los de Berea «recibieron la palabra con toda solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11). Leer el griego es una forma más de escudriñar.',
        { h: 'Una advertencia' },
        'Saber leer el alfabeto no es saber griego. Este recurso te enseña a pronunciar y reconocer las letras, que es el primer paso. Desconfía de quien dice que «en el griego original» la Biblia enseña algo que ninguna traducción seria muestra: casi siempre detrás hay un error de lectura, no un descubrimiento.',
        { ejercicio: {
          pregunta: '¿Cuál es el propósito principal de aprender el alfabeto griego en este recurso?',
          opciones: [
            { t: 'Dejar de usar la Biblia en español, porque solo el griego es Palabra de Dios.', ok: false, por_que: 'Una traducción fiel comunica la Palabra de Dios. El griego no reemplaza la Biblia en español, sino que ayuda a estudiarla.' },
            { t: 'Poder leer las palabras griegas que citan las herramientas de estudio y ver detalles del texto original.', ok: true, por_que: 'Ese es el objetivo: leer con más atención y usar mejor los diccionarios, concordancias e interlineales.' },
            { t: 'Descubrir doctrinas escondidas que las traducciones no muestran.', ok: false, por_que: 'Las traducciones serias no esconden doctrinas. El griego ayuda a ver matices, no a fabricar enseñanzas nuevas.' }
          ],
          explicacion: 'Leer el alfabeto es la puerta de entrada al estudio de las palabras del Nuevo Testamento. No reemplaza la traducción, la acompaña.'
        } }
      ],
      pensar: 'Dios quiso que el evangelio se escribiera en la lengua que entendía casi todo el mundo de entonces. ¿Qué te dice eso sobre su deseo de que tú también lo entiendas?'
    },
    {
      id: 'koine', n: 'El griego koiné, la lengua común', ref: 'Gálatas 4:4; Juan 19:20; Hechos 21:37; Hechos 17:28',
      fecha: [-330, 100],
      visual: [
        { tipo: 'imagen', titulo: 'El ágora', src: '../imperio-griego/img/grecia-agora.webp', alt: 'El ágora de una ciudad griega, con ciudadanos conversando entre columnas, comerciantes y un templo al fondo', pie: 'En las plazas del Mediterráneo oriental se compraba, se vendía y se conversaba en griego.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las lenguas de Palestina en el siglo I',
          cab: ['Lengua', 'Quién la hablaba', 'En el Nuevo Testamento'],
          filas: [
            ['Arameo', 'Los judíos de Palestina, en la casa y en el campo', 'Talita cumi (Mr 5:41), Abba (Mr 14:36), Eloi, Eloi (Mr 15:34)'],
            ['Hebreo', 'La lengua de la Escritura y de la oración en la sinagoga', 'Jesús lee a Isaías en Nazaret (Lc 4:16-17)'],
            ['Griego koiné', 'Todo el Mediterráneo oriental: comercio, gobierno y cartas', 'Los 27 libros del Nuevo Testamento'],
            ['Latín', 'El ejército y la administración romana', 'Palabras como «centurión», «legión» y «pretorio»'],
          ],
          nota: 'El título de la cruz se escribió en hebreo, en griego y en latín (Jn 19:20): las tres lenguas del mundo de Jesús.'
        } }
      ],
      texto: [
        'El griego del Nuevo Testamento no es el de los grandes filósofos de Atenas, como Platón, que escribieron cuatro siglos antes. Es el griego koiné, palabra que significa «común». Después de las conquistas de Alejandro Magno, hacia el 330 a.C., el griego se extendió desde Egipto hasta la India y se volvió la lengua que todos usaban para comerciar, gobernar y escribirse cartas. Al extenderse se simplificó, y así nació el koiné.',
        { h: 'La lengua de todos' },
        'Cuando llegó Jesús, el imperio era romano, pero la lengua común del oriente seguía siendo el griego. Pablo, judío de Tarso, hablaba arameo con los de Jerusalén y griego con el tribuno romano, que se sorprende: «¿Sabes griego?» (Hch 21:37). En Atenas cita a poetas griegos (Hch 17:28). Y aunque escribe a los cristianos de Roma, no les escribe en latín, sino en griego, porque era la lengua que todos compartían.',
        'Pablo dice que Dios envió a su Hijo «cuando vino el cumplimiento del tiempo» (Gá 4:4). Muchos cristianos han visto en la lengua común uno de los preparativos de Dios: un mensaje escrito en griego podía leerse en Antioquía, en Corinto, en Éfeso y en Roma sin traducirse.',
        { h: 'Una lengua con huellas del hebreo' },
        'El griego del Nuevo Testamento tiene acento judío. Sus autores leían las Escrituras en hebreo y también en la Septuaginta, la traducción griega del Antiguo Testamento hecha en Alejandría. Por eso usan palabras griegas con el sentido que tenían en la Biblia hebrea: «gloria», «pacto», «justicia», «carne». Y a veces conservan palabras arameas tal como Jesús las dijo, como «Talita cumi» o «Abba».',
        'Durante siglos algunos pensaron que el griego del Nuevo Testamento era una lengua especial, «del Espíritu Santo», distinta de cualquier otra. A fines del siglo XIX se encontraron en Egipto miles de papiros con cartas, recibos y contratos de gente común, escritos en el mismo griego. Fue una lección valiosa: Dios habló en la lengua de la calle, para que la gente común la entendiera.',
        { ir: { t: 'Ver «La lengua griega» en El imperio griego', a: '../../imperio-griego/' } },
        { ejercicio: {
          pregunta: '¿Qué significa que el Nuevo Testamento esté escrito en griego koiné?',
          opciones: [
            { t: 'Que está escrito en el griego clásico de los filósofos de Atenas.', ok: false, por_que: 'El griego clásico es varios siglos anterior. El koiné es la forma más sencilla que se extendió después de Alejandro.' },
            { t: 'Que está escrito en la lengua común que se hablaba en todo el Mediterráneo oriental.', ok: true, por_que: 'Koiné significa «común»: era la lengua del comercio, del gobierno y de las cartas.' },
            { t: 'Que es una lengua sagrada que solo se usó para escribir la Biblia.', ok: false, por_que: 'Los papiros de Egipto mostraron que la gente común escribía en el mismo griego sus cartas y recibos.' }
          ],
          explicacion: 'El Nuevo Testamento se escribió en la lengua que entendía la mayoría, no en una lengua de eruditos.'
        } }
      ],
      pensar: 'El evangelio se escribió en la lengua de la calle, no en la de los eruditos. ¿Cómo puedes tú anunciar a Cristo con palabras que tus vecinos entiendan?'
    },
    {
      id: 'origen', n: 'Del alfabeto fenicio al griego', ref: 'Apocalipsis 1:8; Mateo 5:18',
      fecha: -800,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Letras emparentadas: hebreo y griego',
          cab: ['Hebreo', 'Nombre', 'Griego', 'Nombre', 'Lugar'],
          filas: [
            ['א', 'álef', 'Α α', 'alfa', '1.ª'],
            ['ב', 'bet', 'Β β', 'beta', '2.ª'],
            ['ג', 'guímel', 'Γ γ', 'gamma', '3.ª'],
            ['ד', 'dálet', 'Δ δ', 'delta', '4.ª'],
            ['ה', 'he', 'Ε ε', 'épsilon', '5.ª'],
            ['י', 'yod', 'Ι ι', 'iota', '10.ª en hebreo, 9.ª en griego'],
            ['ע', 'áyin', 'Ο ο', 'ómicron', 'la consonante muda se volvió vocal'],
            ['ת', 'tav', 'Τ τ', 'tau', 'la última letra hebrea'],
          ],
          nota: 'Los nombres griegos alfa, beta, gamma y delta no significan nada en griego: son los nombres semíticos álef, bet, guímel y dálet.'
        } },
        { tipo: 'imagen', titulo: 'El aprendiz', src: 'img/aprender-letras-griegas.webp', alt: 'Un niño en una ciudad griega antigua copia letras sobre una tablilla de cera mientras su maestro señala un modelo escrito', pie: 'Recreación: un niño aprende el alfabeto con su maestro, en una tablilla de cera.', origen: 'ia' }
      ],
      texto: [
        'El alfabeto griego no nació de la nada. Hacia el siglo VIII a.C., los griegos tomaron las letras de los fenicios, los comerciantes de Tiro y Sidón, vecinos de Israel. Los fenicios escribían con el mismo alfabeto de 22 consonantes que los israelitas usaron en la época de los reyes. Por eso el griego y el hebreo son primos: tienen el mismo antepasado.',
        { h: 'La gran novedad: las vocales' },
        'Los alfabetos semíticos solo escribían consonantes; las vocales las ponía el lector. Los griegos hicieron un cambio decisivo: algunas letras fenicias que representaban sonidos que el griego no tenía se usaron para las vocales. La álef, que en hebreo es muda, se convirtió en la alfa (a). La he se convirtió en la épsilon (e). La áyin, una consonante de garganta, se convirtió en la ómicron (o). Así nació el primer alfabeto que escribía todas las vocales.',
        'Esto tiene una consecuencia práctica para ti: en griego no hay que adivinar las vocales ni aprender puntos debajo de las letras. Todo lo que se pronuncia está escrito.',
        { h: 'El abuelo de nuestro alfabeto' },
        'Del griego salió el alfabeto latino, que los romanos aprendieron de los griegos del sur de Italia, y del latino salió el que usamos en español. Por eso muchas letras griegas te resultarán conocidas: A, B, E, K, M, N, O, T. Y la misma palabra «alfabeto» viene de las dos primeras letras griegas, alfa y beta, igual que «abecedario» viene de las nuestras.',
        'También del griego, siglos después, salió el alfabeto cirílico del ruso y otras lenguas eslavas. Lo crearon misioneros cristianos para traducir la Biblia a esos pueblos.',
        'Cuando el Señor dice en Apocalipsis «Yo soy el Alfa y la Omega» (Ap 1:8), usa la primera y la última letra del alfabeto griego, así como un judío habría dicho «de álef a tav». Lo verás en detalle en la ruta de las letras.',
        { ir: { t: 'Comparar con «De la escritura fenicia a la escritura cuadrada» en El alfabeto hebreo', a: '../../alfabeto-hebreo/#panorama/3' } },
        { ejercicio: {
          pregunta: '¿Qué hicieron los griegos con algunas letras fenicias que nombraban sonidos que su lengua no tenía?',
          opciones: [
            { t: 'Las eliminaron del alfabeto.', ok: false, por_que: 'No las eliminaron: les dieron un uso nuevo.' },
            { t: 'Las usaron para escribir las vocales.', ok: true, por_que: 'La álef pasó a ser alfa, la he pasó a ser épsilon y la áyin pasó a ser ómicron.' },
            { t: 'Las convirtieron en signos de puntuación.', ok: false, por_que: 'Los signos de puntuación griegos llegaron mucho después y no vienen de esas letras.' }
          ],
          explicacion: 'El alfabeto griego fue el primero en escribir todas las vocales, y por eso en griego todo lo que se pronuncia está escrito.'
        } }
      ],
      pensar: 'Los alfabetos pasaron de un pueblo a otro, y con ellos, siglos después, la Escritura llegó a muchas lenguas. ¿Cómo ves la mano de Dios preparando los caminos para que su Palabra llegue hasta ti?'
    },
    {
      id: 'unciales', n: 'Cómo se escribía: mayúsculas y sin espacios', ref: 'Juan 18:31-33; Gálatas 6:11; 2 Tesalonicenses 3:17',
      fecha: [125, 350],
      visual: [
        { tipo: 'imagen', titulo: 'Papiro 52', src: '../de-la-biblia-a-nosotros/img/papiro-p52.webp', alt: 'Fragmento de papiro con forma aproximadamente triangular, del tamaño de una tarjeta, con letras griegas en tinta oscura', pie: 'Papiro 52 (Biblioteca John Rylands, Mánchester), hacia el 125–150: Juan 18:31-33, en letras mayúsculas y sin espacios.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Códice Sinaítico', src: '../de-la-biblia-a-nosotros/img/codice-sinaitico.webp', alt: 'Página del Códice Sinaítico con cuatro columnas de texto griego en letras mayúsculas sobre pergamino', pie: 'Códice Sinaítico, siglo IV: una página de Mateo 6, en cuatro columnas de mayúsculas.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Sin espacios', tabla: {
          titulo: 'Juan 1:1 como lo escribían los copistas',
          cab: ['Forma', 'Texto'],
          filas: [
            ['Manuscrito antiguo', 'ΕΝΑΡΧΗΗΝΟΛΟΓΟΣ ΚΑΙΟΛΟΓΟΣΗΝΠΡΟΣΤΟΝΘΝ'],
            ['Con espacios', 'ΕΝ ΑΡΧΗ ΗΝ Ο ΛΟΓΟΣ ΚΑΙ Ο ΛΟΓΟΣ ΗΝ ΠΡΟΣ ΤΟΝ ΘΝ'],
            ['Edición impresa', 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν'],
          ],
          nota: 'ΘΝ es la abreviatura sagrada de ΘΕΟΝ, «Dios». La verás en la ruta de las letras.'
        } }
      ],
      texto: [
        'Si abrieras un manuscrito del Nuevo Testamento del siglo II o del siglo IV, no encontrarías nada de lo que ves en una edición impresa: ni minúsculas, ni espacios entre las palabras, ni acentos, ni comas. Solo letras mayúsculas, una tras otra, en líneas parejas. Esta escritura se llama uncial, y los manuscritos que la usan, unciales.',
        { h: 'Por qué sin espacios' },
        'El papiro y el pergamino eran caros, y se aprovechaba cada centímetro. Pero había otra razón: en la antigüedad casi siempre se leía en voz alta. El lector iba pronunciando las sílabas, y al oírlas reconocía las palabras. Por eso Felipe pudo oír que el etíope leía a Isaías (Hch 8:30). Y por eso Pablo pide que sus cartas se lean en las iglesias (Col 4:16): se leían en voz alta a toda la congregación.',
        'Para nosotros es difícil, pero se aprende. En el panel tienes el comienzo de Juan como lo habría escrito un copista. Fíjate en el último grupo: ΘΝ, con una raya encima, es la forma abreviada en que los cristianos escribían la palabra «Dios».',
        { h: 'Letras grandes, letras de mano' },
        'No todos escribían igual. Los copistas profesionales hacían letras parejas y cuidadas. Las cartas de cada día se escribían con letra corrida, más rápida. Pablo dictaba sus cartas a un ayudante y al final escribía unas líneas de su mano: «Mirad con cuán grandes letras os escribo de mi propia mano» (Gá 6:11). Era su firma, para que se reconociera que la carta era suya (2 Ts 3:17).',
        'El fragmento del panel es el papiro 52, el manuscrito más antiguo que conocemos del Nuevo Testamento. Es del tamaño de una tarjeta y tiene unos versículos de Juan 18. Se copió pocas décadas después de que Juan escribiera su evangelio.',
        { ir: { t: 'Ver «Los manuscritos del Nuevo Testamento» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/' } },
        { ejercicio: {
          pregunta: '¿Cómo se escribían los manuscritos más antiguos del Nuevo Testamento?',
          opciones: [
            { t: 'Con minúsculas, acentos y espacios entre las palabras, como hoy.', ok: false, por_que: 'Las minúsculas, los acentos y los espacios se generalizaron siglos después.' },
            { t: 'Con letras mayúsculas seguidas, sin espacios ni acentos.', ok: true, por_que: 'Es la escritura uncial, la de los papiros y de los grandes códices de los siglos IV y V.' },
            { t: 'Con letras hebreas, porque los apóstoles eran judíos.', ok: false, por_que: 'Los apóstoles eran judíos, pero escribieron en griego y con letras griegas.' }
          ],
          explicacion: 'Los primeros copistas escribían todo en mayúsculas y sin separar las palabras. Los signos que hoy facilitan la lectura se agregaron después.'
        } }
      ],
      pensar: 'Las cartas de los apóstoles se leían en voz alta a toda la iglesia reunida. ¿Qué lugar tiene la lectura pública de la Escritura en tu congregación y en tu casa?'
    },
    {
      id: 'signos', n: 'Las minúsculas y los signos que se agregaron después', ref: 'Hechos 8:30; Nehemías 8:8',
      fecha: [800, 1516],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que tiene una edición impresa y no tenían los apóstoles',
          cab: ['Signo', 'Ejemplo', 'Desde cuándo'],
          filas: [
            ['Minúsculas', 'ἀγάπη', 'Desde el siglo IX se copian así casi todos los manuscritos'],
            ['Espacios entre palabras', 'ὁ Λόγος', 'Poco a poco, en los manuscritos minúsculos'],
            ['Espíritus (suave y áspero)', 'ἀ ἁ', 'Eruditos de Alejandría, siglo II a.C.; generales con las minúsculas'],
            ['Acentos', 'ά ὰ ᾶ', 'Los mismos eruditos; generales con las minúsculas'],
            ['Puntuación', '. , · ;', 'Muy escasa en los unciales; la actual, en las ediciones impresas'],
            ['Capítulos y versículos', 'Juan 3:16', 'Capítulos en el siglo XIII; versículos en 1551 (Robert Estienne)'],
          ],
          nota: 'Ninguno de estos signos cambia el texto: ayudan a leerlo. Por eso las ediciones pueden puntuar un mismo versículo de forma distinta.'
        } },
        { tipo: 'imagen', titulo: 'El copista', src: 'img/copista-minusculas.webp', alt: 'Un monje copista bizantino escribe en un pergamino con letra minúscula griega, sentado junto a una ventana de un monasterio', pie: 'Recreación: un copista bizantino del siglo IX escribe con la nueva letra minúscula.', origen: 'ia' }
      ],
      texto: [
        'La edición griega que vas a leer en este recurso tiene minúsculas, espacios, acentos, comas y puntos. Todo eso se agregó con los siglos, para que leer fuera más fácil. Conviene saberlo, para no atribuir a los apóstoles algo que ellos no escribieron.',
        { h: 'De las mayúsculas a las minúsculas' },
        'Hacia el siglo IX, los copistas de Constantinopla empezaron a usar una letra minúscula, más pequeña y rápida. Cabía más texto en cada hoja y se copiaba más rápido. Desde entonces casi todos los manuscritos del Nuevo Testamento se escribieron así; los estudiosos los llaman minúsculos, y son la gran mayoría de los más de cinco mil manuscritos griegos que conocemos.',
        { h: 'Los acentos y los espíritus' },
        'Los acentos y los espíritus (las pequeñas comas sobre las vocales iniciales) los inventaron los eruditos de Alejandría unos dos siglos antes de Cristo, para ayudar a pronunciar bien los poemas de Homero. Los copistas cristianos los adoptaron de a poco, y con las minúsculas se volvieron normales. Los aprenderás en la ruta III.',
        { h: 'Capítulos, versículos y puntuación' },
        'Los capítulos que usamos hoy los fijó Esteban Langton, en París, en el siglo XIII. Los versículos del Nuevo Testamento los numeró el impresor Robert Estienne en su edición griega de 1551. Son ayudas muy útiles para encontrar un pasaje, pero no son parte de la inspiración: a veces un versículo corta una frase por la mitad.',
        'Lo mismo pasa con la puntuación. Los editores modernos deciden dónde va una coma o un punto, y a veces lo deciden de manera distinta. Por eso, al estudiar un pasaje, conviene leer el párrafo completo y no solo el versículo.',
        'Nada de esto debilita la confianza en la Escritura. Los signos ayudan a leer el mismo texto que se copió con cuidado durante siglos. Es lo mismo que hacían los levitas en tiempos de Esdras, que leían la ley «claramente, y ponían el sentido» (Neh 8:8).',
        { ejercicio: {
          pregunta: 'Un predicador dice que una doctrina depende de dónde está la coma en un versículo griego. ¿Qué deberías recordar?',
          opciones: [
            { t: 'Que la coma fue puesta por el apóstol y por eso es inspirada.', ok: false, por_que: 'Los manuscritos antiguos casi no tenían puntuación. Las comas actuales las ponen los editores.' },
            { t: 'Que la puntuación la agregaron los editores, así que hay que leer el contexto completo.', ok: true, por_que: 'Una doctrina se apoya en el sentido del pasaje y de toda la Escritura, no en una coma.' },
            { t: 'Que hay que buscar el manuscrito con más comas.', ok: false, por_que: 'El número de comas no dice nada sobre la fidelidad de un manuscrito.' }
          ],
          explicacion: 'Las comas, los versículos y los acentos son ayudas para leer. El sentido se decide por el contexto.'
        } }
      ],
      pensar: 'Durante siglos, muchos cristianos trabajaron para que la Escritura fuera más fácil de leer. ¿Qué puedes hacer tú para ayudar a otros a leer y entender la Biblia?'
    },
    {
      id: 'usar', n: 'Cómo usar este recurso', ref: '2 Timoteo 2:15; Hechos 17:11',
      visual: [
        { tipo: 'griego', titulo: 'Juan 11:35', ref: 'Juan 11:35', gr: 'ἐδάκρυσεν ὁ Ἰησοῦς.', tr: 'Edákrysen ho Iēsús.',
          palabras: P(['ἐδάκρυσεν', 'ὁ', 'Ἰησοῦς'], [['edákrysen', 'lloró'], ['ho', 'el'], ['Iēsús', 'Jesús']]),
          rv: 'Jesús lloró.' },
        { tipo: 'tabla', titulo: 'La transliteración', tabla: {
          titulo: 'Cómo leer la transliteración de este recurso',
          cab: ['Ves', 'Se lee', 'Ejemplo'],
          filas: [
            ['j', 'Como la j del español: χ', 'Jristós, «Cristo»'],
            ['th', 'Como la z de España o la th del inglés «think»: θ', 'Theós, «Dios»'],
            ['ē, ō', 'e y o, un poco más largas: η, ω', 'agápē, «amor»; dṓron, «don»'],
            ['h', 'Una h aspirada, como una j suave: espíritu áspero', 'ho, «el»; hamartía, «pecado»'],
            ['y', 'La vocal υ: entre u e i, como la ü alemana', 'hyiós, «hijo»'],
            ['á, ḗ, ṓ', 'La sílaba acentuada, cuando no sigue la regla del español', 'Lógos, Iēsús'],
          ],
          nota: 'La transliteración es una ayuda para empezar. El objetivo es que leas el griego sin ella.'
        } }
      ],
      texto: [
        'Este recurso tiene cuatro rutas y un taller. Están pensadas para recorrerse en orden, porque cada una supone lo aprendido en la anterior. Puedes cambiar de ruta o saltar a una estación con el botón de rutas, en la esquina.',
        { h: 'El panel de los pasajes' },
        'Muchas estaciones muestran un pasaje del Nuevo Testamento en griego. Debajo aparecen la transliteración, las palabras una por una con su sentido y el mismo pasaje en la Reina-Valera 1960. Lee primero con las ayudas. Después toca «Ocultar ayudas» e intenta leer solo el griego, en voz alta. Si te equivocas, vuelve a mostrarlas.',
        'El texto griego es el de la edición de Eberhard Nestle de 1904, que es de dominio público. Es una edición crítica, muy cercana a las que usan hoy las traducciones modernas. En unos pocos pasajes difiere del texto que tradujo la Reina-Valera; cuando importe, lo verás señalado.',
        { h: 'La pronunciación' },
        'Usamos la pronunciación erasmiana, que es la que enseñan casi todos los seminarios e institutos bíblicos de América Latina. Distingue cada letra con un sonido propio, y eso ayuda a escribir correctamente lo que oyes. En la ruta IV verás cómo se pronuncia el griego hoy en Grecia y cómo se pronunciaba, probablemente, en tiempos de Pablo.',
        { h: 'La transliteración' },
        'La transliteración de este recurso está pensada para hispanohablantes: se lee casi como el español. En el panel tienes las pocas reglas que hay que saber. Los diccionarios y comentarios usan una transliteración académica, con otros signos; la encontrarás en la tabla del alfabeto, junto a cada letra.',
        { ir: { t: 'Abrir la tabla del alfabeto griego', a: 'alfabeto/' } },
        { h: 'Un consejo' },
        'Copia las letras a mano en un cuaderno, lee en voz alta y repasa unos minutos cada día. Es mejor estudiar diez minutos diarios que dos horas una vez al mes. En un grupo de estudio, una ruta por semana da para practicar juntos la lectura en voz alta.',
        'El versículo del panel es el más corto de la Biblia en español. En griego tiene tres palabras. Al terminar la ruta II podrás leerlo solo.'
      ],
      pensar: 'Pablo pidió a Timoteo que procurara con diligencia presentarse a Dios como obrero aprobado (2 Ti 2:15). ¿Qué tiempo concreto de tu semana vas a dedicar a este estudio?'
    }
  ];

  window.__ALFA.panorama = panorama;
})();
/* El alfabeto griego y la lectura · II. Las 24 letras */
(() => {
  const { P } = window.__ALFA;
  const CAB = ['Mayúscula', 'Minúscula', 'Nombre', 'Sonido', 'Ejemplo'];

  const letras = [
    {
      id: 'alfa-dseta', n: 'Primer grupo: de alfa a dseta', ref: '1 Juan 4:8; Mateo 6:10; Mateo 5:18; Juan 1:14; Mateo 16:18; Juan 14:6',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Α Β Γ Δ Ε Ζ',
          cab: CAB,
          filas: [
            ['Α', 'α', 'alfa', 'a', 'ἀγάπη, agápē, «amor» (1 Jn 4:8)'],
            ['Β', 'β', 'beta', 'b', 'βασιλεία, basileía, «reino» (Mt 6:10)'],
            ['Γ', 'γ', 'gamma', 'g, siempre como en «gato»', 'γῆ, gē, «tierra» (Mt 5:18)'],
            ['Δ', 'δ', 'delta', 'd', 'δόξα, dóxa, «gloria» (Jn 1:14)'],
            ['Ε', 'ε', 'épsilon', 'e breve', 'ἐκκλησία, ekklēsía, «iglesia» (Mt 16:18)'],
            ['Ζ', 'ζ', 'dseta', 'ds, como en «adsorber»', 'ζωή, zōḗ, «vida» (Jn 14:6)'],
          ],
          nota: 'Las palabras de ejemplo aparecen en el versículo indicado, a veces con otra terminación.'
        } },
        { tipo: 'griego', titulo: '1 Juan 4:8', ref: '1 Juan 4:8', gr: 'ὁ μὴ ἀγαπῶν οὐκ ἔγνω τὸν Θεόν, ὅτι ὁ Θεὸς ἀγάπη ἐστίν.', tr: 'Ho mē agapṓn uk égnō ton Theón, hoti ho Theós agápē estín.',
          palabras: P(['ὁ', 'μὴ', 'ἀγαπῶν', 'οὐκ', 'ἔγνω', 'τὸν', 'Θεόν', 'ὅτι', 'ὁ', 'Θεὸς', 'ἀγάπη', 'ἐστίν'], [['ho', 'el (que)'], ['mē', 'no'], ['agapṓn', 'ama'], ['uk', 'no'], ['égnō', 'ha conocido'], ['ton', 'a'], ['Theón', 'Dios'], ['hoti', 'porque'], ['ho', 'el'], ['Theós', 'Dios'], ['agápē', 'amor'], ['estín', 'es']]),
          rv: 'El que no ama, no ha conocido a Dios; porque Dios es amor.' }
      ],
      texto: [
        'El alfabeto griego tiene 24 letras. Las aprenderás en cuatro grupos de seis, en su orden, que es el que usan los diccionarios. Cada letra tiene una forma mayúscula y una minúscula. Al leer el Nuevo Testamento vas a ver casi siempre minúsculas, así que concéntrate primero en ellas.',
        { h: 'Las seis primeras' },
        'La alfa (α) suena a, como en español. Se escribe como una a redonda, sin el palito de arriba. Es la primera letra de ἀγάπη, la palabra que Juan usa para decir que «Dios es amor» (1 Jn 4:8).',
        'La beta (β) suena b. Tiene una cola que baja bajo la línea, a diferencia de nuestra b. La gamma (γ) suena siempre g, como en «gato» o «guitarra», nunca como en «gente»: γῆ se lee «gē», no «je». Su minúscula parece una y con la cola abierta.',
        'La delta (δ) suena d. Su mayúscula es un triángulo (Δ), y por eso llamamos «delta» a la desembocadura triangular de un río. La épsilon (ε) es una e breve, como la e de «mesa». La dseta (ζ) suena ds, como la unión de las letras d y s en «adsorber». Es la primera letra de ζωή, «vida».',
        { h: 'Fíjate en las diferencias' },
        'Tres de estas letras se parecen a las nuestras y suenan igual: alfa, beta y épsilon. La gamma y la delta tienen mayúsculas distintas de las nuestras (Γ y Δ). Y la dseta no tiene equivalente en español: la transliteramos con z, como hacen casi todos los diccionarios, pero la pronunciamos ds.',
        'Un consejo para memorizar: escribe cada letra cinco veces mientras dices su nombre en voz alta. Después lee las palabras de la tabla tapando la transliteración.',
        'En el panel tienes 1 Juan 4:8. Busca las letras que ya conoces: la alfa y la gamma de ἀγάπη, la épsilon de ἔγνω y de ἐστίν. Las demás las conocerás en las estaciones que siguen.',
        { ejercicio: {
          pregunta: '¿Cómo se pronuncia la gamma en la palabra γῆ, «tierra»?',
          opciones: [
            { t: 'Como la j de «jarro»: «je».', ok: false, por_que: 'La gamma nunca suena j. Ese sonido es el de otra letra, la ji (χ).' },
            { t: 'Como la g de «gato»: «gē».', ok: true, por_que: 'La gamma suena siempre g, como en «gato» o «guitarra», también delante de e y de i.' },
            { t: 'Como una y: «ye».', ok: false, por_que: 'La minúscula γ se parece a una y, pero suena g.' }
          ],
          explicacion: 'La gamma es siempre g suave. Solo cambia delante de otra gamma o de κ, ξ o χ, donde suena n; lo verás en la ruta III.'
        } }
      ],
      pensar: 'Juan resume a Dios en tres palabras: ὁ Θεὸς ἀγάπη, «Dios es amor». ¿Cómo se nota ese amor de Dios en tu manera de tratar a los demás esta semana?'
    },
    {
      id: 'eta-my', n: 'Segundo grupo: de eta a my', ref: 'Mateo 6:34; Juan 1:1; Mateo 1:21; Juan 3:16; Lucas 8:11; Juan 13:35',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Η Θ Ι Κ Λ Μ',
          cab: CAB,
          filas: [
            ['Η', 'η', 'eta', 'e larga', 'ἡμέρα, hēméra, «día» (Mt 6:34)'],
            ['Θ', 'θ', 'theta', 'th, como la z de España', 'Θεός, Theós, «Dios» (Jn 1:1)'],
            ['Ι', 'ι', 'iota', 'i', 'Ἰησοῦς, Iēsús, «Jesús» (Mt 1:21)'],
            ['Κ', 'κ', 'kappa', 'k', 'κόσμος, kósmos, «mundo» (Jn 3:16)'],
            ['Λ', 'λ', 'lambda', 'l', 'λόγος, lógos, «palabra» (Lc 8:11)'],
            ['Μ', 'μ', 'my', 'm', 'μαθητής, mathētḗs, «discípulo» (Jn 13:35)'],
          ],
          nota: 'La eta mayúscula (Η) parece una H, pero es una vocal: e larga.'
        } },
        { tipo: 'griego', titulo: 'Juan 13:35', ref: 'Juan 13:35', gr: 'ἐν τούτῳ γνώσονται πάντες ὅτι ἐμοὶ μαθηταί ἐστε, ἐὰν ἀγάπην ἔχητε ἐν ἀλλήλοις.', tr: 'En tútō gnṓsontai pántes hoti emoí mathētaí este, ean agápēn éjēte en allḗlois.',
          palabras: P(['ἐν', 'τούτῳ', 'γνώσονται', 'πάντες', 'ὅτι', 'ἐμοὶ', 'μαθηταί', 'ἐστε', 'ἐὰν', 'ἀγάπην', 'ἔχητε', 'ἐν', 'ἀλλήλοις'], [['en', 'en'], ['tútō', 'esto'], ['gnṓsontai', 'conocerán'], ['pántes', 'todos'], ['hoti', 'que'], ['emoí', 'mis'], ['mathētaí', 'discípulos'], ['este', 'sois'], ['ean', 'si'], ['agápēn', 'amor'], ['éjēte', 'tenéis'], ['en', 'entre'], ['allḗlois', 'unos y otros']]),
          rv: 'En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros.' }
      ],
      texto: [
        'El segundo grupo trae dos letras que no existen en español, la eta y la theta, y cuatro que te resultarán fáciles.',
        { h: 'La eta, una e larga' },
        'La eta (η) es una de las letras que más confunden al principio. Su minúscula parece una n con la pata derecha larga, y su mayúscula (Η) parece una H. Pero es una vocal: una e larga, como si dijeras «ee». En la transliteración la escribimos ē, con una raya encima. En la pronunciación erasmiana, la eta y la épsilon suenan casi igual; la diferencia está en la duración, y es importante al escribir: ἡμέρα, «día», se escribe con eta.',
        { h: 'La theta, th' },
        'La theta (θ) es un círculo con una raya en el medio. Suena como la z de España en «zapato», o como la th del inglés «think». En América Latina muchos estudiantes la pronuncian como una t suave; está bien al comenzar, pero conviene distinguirla de la tau (τ). Es la primera letra de Θεός, «Dios», y por eso de palabras como «teología».',
        { h: 'Cuatro letras conocidas' },
        'La iota (ι) suena i y no tiene punto. Es la letra más pequeña del alfabeto griego, y en Mateo 5:18 traduce la yod hebrea: «ni una jota ni una tilde pasará de la ley». La kappa (κ) suena k, como en «casa». La lambda (λ) suena l; su minúscula parece una y invertida. La my (μ) suena m; su minúscula tiene una cola hacia abajo, como en la letra que se usa para «micro».',
        'El versículo del panel es Juan 13:35. Busca en él las letras de este grupo: la my, la theta y la eta de μαθηταί, la iota de ἐμοί y la lambda de ἀλλήλοις. Lee despacio, sílaba por sílaba.',
        { ejercicio: {
          pregunta: 'En la palabra ἡμέρα, «día», ¿qué es la primera letra (η)?',
          opciones: [
            { t: 'Una consonante, la n.', ok: false, por_que: 'La η se parece a una n, pero es una vocal. La n griega es la ny (ν).' },
            { t: 'Una vocal, la e larga (eta).', ok: true, por_que: 'La eta es una e larga. ἡμέρα se lee hēméra.' },
            { t: 'Una h, como la mayúscula Η.', ok: false, por_que: 'La mayúscula Η parece una H, pero es una vocal. La h del comienzo la marca el espíritu áspero, el pequeño signo que lleva encima.' }
          ],
          explicacion: 'La eta parece una n en minúscula y una H en mayúscula, pero siempre es una vocal: e larga.'
        } }
      ],
      pensar: 'Jesús dijo que el mundo reconocería a sus discípulos por el amor entre ellos (Jn 13:35). ¿Qué vería hoy un vecino al observar cómo se tratan los creyentes de tu iglesia?'
    },
    {
      id: 'ny-sigma', n: 'Tercer grupo: de ny a sigma', ref: 'Mateo 5:18; 1 Pedro 2:24; Juan 14:6; 1 Corintios 13:13; Romanos 10:17; Romanos 1:16',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Ν Ξ Ο Π Ρ Σ',
          cab: CAB,
          filas: [
            ['Ν', 'ν', 'ny', 'n', 'νόμος, nómos, «ley» (Mt 5:18)'],
            ['Ξ', 'ξ', 'xi', 'ks, como la x de «taxi»', 'ξύλον, xýlon, «madero» (1 P 2:24)'],
            ['Ο', 'ο', 'ómicron', 'o breve', 'ὁδός, hodós, «camino» (Jn 14:6)'],
            ['Π', 'π', 'pi', 'p', 'πίστις, pístis, «fe» (1 Co 13:13)'],
            ['Ρ', 'ρ', 'rho', 'r', 'ῥῆμα, rhḗma, «palabra» (Ro 10:17)'],
            ['Σ', 'σ ς', 'sigma', 's', 'σωτηρία, sōtēría, «salvación» (Ro 1:16)'],
          ],
          nota: 'La ny minúscula (ν) parece una v, pero suena n. La rho (ρ) parece una p, pero suena r.'
        } },
        { tipo: 'griego', titulo: '1 Corintios 13:13', ref: '1 Corintios 13:13', gr: 'νυνὶ δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα· μείζων δὲ τούτων ἡ ἀγάπη.', tr: 'Nyní de ménei pístis, elpís, agápē, ta tría táuta; méizōn de tútōn hē agápē.',
          palabras: P(['νυνὶ', 'δὲ', 'μένει', 'πίστις', 'ἐλπίς', 'ἀγάπη', 'τὰ', 'τρία', 'ταῦτα', 'μείζων', 'δὲ', 'τούτων', 'ἡ', 'ἀγάπη'], [['nyní', 'ahora'], ['de', 'y'], ['ménei', 'permanecen'], ['pístis', 'fe'], ['elpís', 'esperanza'], ['agápē', 'amor'], ['ta', 'las'], ['tría', 'tres'], ['táuta', 'estas'], ['méizōn', 'mayor'], ['de', 'pero'], ['tútōn', 'de estas'], ['hē', 'el'], ['agápē', 'amor']]),
          rv: 'Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor.' }
      ],
      texto: [
        'El tercer grupo trae dos trampas visuales, la ny y la rho, y una letra que en griego suena doble, la xi.',
        { h: 'La ny y la xi' },
        'La ny (ν) suena n, aunque su minúscula parece una v. Es la trampa más frecuente de los principiantes: νόμος, «ley», se lee nómos, no vómos. Para no confundirla con la ýpsilon (υ), que verás en el próximo grupo, fíjate en la punta: la ny termina en punta abajo; la ýpsilon es redonda.',
        'La xi (ξ) es una sola letra que suena ks, como la x de «taxi». Su minúscula parece un tres con cola. Es la primera letra de ξύλον, «madero», la palabra que Pedro usa para la cruz: Cristo «llevó él mismo nuestros pecados en su cuerpo sobre el madero» (1 P 2:24).',
        { h: 'La ómicron y la pi' },
        'La ómicron (ο) es una o breve: su nombre significa «o pequeña». La pi (π) suena p; es la letra que se usa en matemáticas para el número 3,1416. Juntas aparecen en πίστις, «fe», y en ὁδός, «camino».',
        { h: 'La rho y la sigma' },
        'La rho (ρ) suena r, aunque se parece a nuestra p. Al comienzo de palabra lleva siempre un signo que indica una r aspirada (ῥ), y por eso la transliteramos rh: ῥῆμα, rhḗma. De ahí vienen palabras como «reuma» o «retórica».',
        'La sigma suena s y tiene tres formas: la mayúscula Σ, la minúscula σ al comienzo o en medio de la palabra, y la ς al final. La verás en detalle en la estación de las mayúsculas.',
        'El panel muestra 1 Corintios 13:13. Encuentra la pi y la sigma final de πίστις, y la rho de τρία.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra νόμος, «ley»?',
          opciones: [
            { t: 'vómop', ok: false, por_que: 'La ν es ny (n), y la ς es la sigma final (s).' },
            { t: 'nómos', ok: true, por_que: 'ν = n, ό = o acentuada, μ = m, ο = o, ς = s.' },
            { t: 'nómop', ok: false, por_que: 'La última letra es la sigma final (ς), que suena s.' }
          ],
          explicacion: 'Dos trampas en una palabra: la ν que parece v y la ς final. νόμος se lee nómos.'
        } }
      ],
      pensar: 'Pablo dice que la fe, la esperanza y el amor permanecen, y que el mayor es el amor (1 Co 13:13). ¿Cuál de las tres necesitas pedirle hoy a Dios que crezca en ti?'
    },
    {
      id: 'tau-omega', n: 'Cuarto grupo: de tau a omega', ref: 'Apocalipsis 22:13; Juan 3:16; Juan 8:12; Efesios 2:8; Mateo 16:26; Juan 4:23',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Τ Υ Φ Χ Ψ Ω',
          cab: CAB,
          filas: [
            ['Τ', 'τ', 'tau', 't', 'τέλος, télos, «fin» (Ap 22:13)'],
            ['Υ', 'υ', 'ýpsilon', 'ü, como la u francesa', 'υἱός, hyiós, «hijo» (Jn 3:16)'],
            ['Φ', 'φ', 'phi', 'f', 'φῶς, fōs, «luz» (Jn 8:12)'],
            ['Χ', 'χ', 'ji', 'j, como en «jardín»', 'χάρις, járis, «gracia» (Ef 2:8)'],
            ['Ψ', 'ψ', 'psi', 'ps', 'ψυχή, psyjḗ, «alma» (Mt 16:26)'],
            ['Ω', 'ω', 'omega', 'o larga', 'ὥρα, hṓra, «hora» (Jn 4:23)'],
          ],
          nota: 'La ji (χ) parece una x, pero suena j. La omega (ω) parece una w, pero es una vocal: o larga.'
        } },
        { tipo: 'griego', titulo: 'Juan 8:12', ref: 'Juan 8:12', gr: 'Πάλιν οὖν αὐτοῖς ἐλάλησεν ὁ Ἰησοῦς λέγων Ἐγώ εἰμι τὸ φῶς τοῦ κόσμου· ὁ ἀκολουθῶν μοι οὐ μὴ περιπατήσῃ ἐν τῇ σκοτίᾳ, ἀλλ’ ἕξει τὸ φῶς τῆς ζωῆς.', tr: 'Pálin un autóis elálēsen ho Iēsús légōn: Egṓ eimi to fōs tu kósmu; ho akoluthṓn moi u mē peripatḗsē en tē skotía, all’ héxei to fōs tēs zōḗs.',
          palabras: P(['Πάλιν', 'οὖν', 'αὐτοῖς', 'ἐλάλησεν', 'ὁ', 'Ἰησοῦς', 'λέγων', 'Ἐγώ', 'εἰμι', 'τὸ', 'φῶς', 'τοῦ', 'κόσμου', 'ὁ', 'ἀκολουθῶν', 'μοι', 'οὐ', 'μὴ', 'περιπατήσῃ', 'ἐν', 'τῇ', 'σκοτίᾳ', 'ἀλλ’', 'ἕξει', 'τὸ', 'φῶς', 'τῆς', 'ζωῆς'], [['pálin', 'otra vez'], ['un', 'pues'], ['autóis', 'a ellos'], ['elálēsen', 'habló'], ['ho', 'el'], ['Iēsús', 'Jesús'], ['légōn', 'diciendo'], ['egṓ', 'yo'], ['eimi', 'soy'], ['to', 'la'], ['fōs', 'luz'], ['tu', 'del'], ['kósmu', 'mundo'], ['ho', 'el (que)'], ['akoluthṓn', 'sigue'], ['moi', 'me'], ['u', 'no'], ['mē', 'no'], ['peripatḗsē', 'andará'], ['en', 'en'], ['tē', 'las'], ['skotía', 'tinieblas'], ['all’', 'sino que'], ['héxei', 'tendrá'], ['to', 'la'], ['fōs', 'luz'], ['tēs', 'de la'], ['zōḗs', 'vida']]),
          rv: 'Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida.' }
      ],
      texto: [
        'El último grupo tiene la mayor cantidad de letras que no existen en español. Con ellas completas el alfabeto.',
        { h: 'La tau y la ýpsilon' },
        'La tau (τ) suena t; su minúscula parece una t sin la parte de abajo. La ýpsilon (υ) es una vocal. En la pronunciación erasmiana suena como la u francesa o la ü alemana: pon los labios para decir u y di i. Muchos estudiantes de habla hispana la pronuncian simplemente i, y se entiende. En la transliteración la escribimos y: υἱός, hyiós, «hijo». Cuando va después de otra vocal forma un diptongo y suena u, como verás en la ruta III.',
        { h: 'Tres letras de dos sonidos' },
        'La phi (φ) suena f; es un círculo atravesado por una raya vertical. De ella vienen las palabras escritas con ph en otros idiomas: «filosofía», en inglés philosophy. La ji (χ) suena como la j del español, y aquí está la trampa: parece una x. Es la primera letra de Χριστός, «Cristo», y de χάρις, «gracia». La psi (ψ) suena ps, como en «psicología», que viene de ψυχή, «alma».',
        { h: 'La omega, la o grande' },
        'La omega (ω) es la última letra. Su nombre significa «o grande», y es una o larga, así como la ómicron es una o breve. Su minúscula parece una w, y su mayúscula (Ω) es un arco con dos pies. El Señor la usa en Apocalipsis: «Yo soy el Alfa y la Omega, el principio y el fin» (Ap 22:13).',
        'Con esto ya conoces las 24 letras. En el panel tienes Juan 8:12, una de las declaraciones «Yo soy» de Jesús. Busca la phi de φῶς y la omega de ἐγώ y de ζωῆς. Si puedes leer este versículo, aunque sea muy despacio, ya leíste griego.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra χάρις, «gracia»?',
          opciones: [
            { t: 'járis', ok: true, por_que: 'χ = j, ά = a acentuada, ρ = r, ι = i, ς = s.' },
            { t: 'xáris', ok: false, por_que: 'La χ parece una x, pero es la ji: suena j.' },
            { t: 'jápis', ok: false, por_que: 'La ρ parece una p, pero es la rho: suena r.' }
          ],
          explicacion: 'χάρις se lee járis. En español la escribimos con ch por la tradición latina, como en «carisma», pero la ji suena como nuestra j.'
        } }
      ],
      pensar: 'Jesús dijo «Yo soy la luz del mundo», y prometió que quien lo sigue no andará en tinieblas (Jn 8:12). ¿Qué área de tu vida necesita hoy esa luz?'
    },
    {
      id: 'enganosas', n: 'Las letras que engañan', ref: 'Mateo 16:16; Juan 1:17',
      visual: [
        { tipo: 'tabla', titulo: 'Parecen, pero no son', tabla: {
          titulo: 'Letras que parecen nuestras y suenan distinto',
          cab: ['Letra', 'Parece', 'Es', 'Ejemplo'],
          filas: [
            ['η', 'una n', 'e larga (eta)', 'ἡμέρα, hēméra'],
            ['Η', 'una H', 'e larga (eta)', 'ΗΝ, «era»'],
            ['ν', 'una v', 'n (ny)', 'νόμος, nómos'],
            ['ρ', 'una p', 'r (rho)', 'πρός, pros'],
            ['Ρ', 'una P', 'r (rho)', 'ΡΗΜΑ, «palabra»'],
            ['χ', 'una x', 'j (ji)', 'Χριστός, Jristós'],
            ['γ', 'una y', 'g (gamma)', 'γῆ, gē'],
            ['ω', 'una w', 'o larga (omega)', 'ὥρα, hṓra'],
            ['υ', 'una u', 'ü (ýpsilon)', 'υἱός, hyiós'],
            ['ς', 'una c', 's final (sigma)', 'λόγος, lógos'],
          ],
          nota: 'Si una palabra te «suena rara», revisa primero estas diez.'
        } },
        { tipo: 'tabla', titulo: 'Parecidas entre sí', tabla: {
          titulo: 'Letras griegas que se confunden entre sí',
          cab: ['Par', 'Cómo distinguirlas'],
          filas: [
            ['ν / υ', 'La ny termina en punta abajo; la ýpsilon es redonda'],
            ['ζ / ξ', 'La dseta tiene un solo trazo curvo; la xi tiene tres ondas'],
            ['ο / σ', 'La sigma tiene una colita arriba a la derecha'],
            ['κ / χ', 'La kappa no baja de la línea; la ji cruza la línea'],
            ['ε / ς', 'La épsilon va en cualquier lugar; la sigma final, solo al final'],
            ['θ / φ', 'La raya de la theta es horizontal; la de la phi, vertical'],
          ],
          nota: 'Copiar a mano estas parejas, una al lado de la otra, ayuda mucho a fijarlas.'
        } }
      ],
      texto: [
        'Leer griego siendo hispanohablante tiene una ventaja: muchas letras ya las conoces. Pero también una trampa: algunas letras se ven como las nuestras y suenan distinto. Esta estación las reúne para que las mires con calma.',
        { h: 'Diez letras con disfraz' },
        'La primera tabla del panel muestra diez letras que parecen latinas y no lo son. Las más traicioneras son tres: la η, que parece una n y es una e larga; la ν, que parece una v y es una n; y la ρ, que parece una p y es una r. Con esas tres, una palabra tan sencilla como πρός, «hacia», se puede leer mal de dos maneras.',
        'La χ merece una mención aparte. Parece una x, y por la tradición latina la escribimos ch en palabras como «Cristo» o «carisma». Pero suena como nuestra j: Χριστός se lee Jristós. Muchos maestros de habla hispana la pronuncian k, como en «Cristo»; si te enseñaron así, no te preocupes, se entiende. Lo importante es no leerla como x.',
        { h: 'Letras griegas entre sí' },
        'La segunda tabla reúne letras griegas que se confunden entre ellas. La pareja ν y υ es la más difícil: la ny termina en punta, y la ýpsilon es redonda abajo, como una u. Las demás parejas se distinguen con un poco de práctica.',
        { h: 'Un ejercicio' },
        'Lee estos nombres en voz alta antes de mirar la respuesta: Πέτρος, Ἰωάνης, Χριστός, Μωϋσῆς. Son Pedro (Pétros), Juan (Iōánēs), Cristo (Jristós) y Moisés (Mōysḗs). Juan escribe: «la ley por medio de Moisés fue dada, pero la gracia y la verdad vinieron por medio de Jesucristo» (Jn 1:17). En ese versículo están casi todas las letras que engañan.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra πρός, «hacia», «con»?',
          opciones: [
            { t: 'ppós', ok: false, por_que: 'La segunda letra es la rho (ρ), que suena r aunque parece una p.' },
            { t: 'pros', ok: true, por_que: 'π = p, ρ = r, ό = o, ς = s.' },
            { t: 'npos', ok: false, por_que: 'La primera letra es la pi (π), no la eta (η).' }
          ],
          explicacion: 'πρός se lee pros. Aparece en Juan 1:1: el Verbo era «con» Dios, πρὸς τὸν Θεόν.'
        } },
        { ejercicio: {
          pregunta: '¿Cuál de estas letras es una vocal?',
          opciones: [
            { t: 'ν', ok: false, por_que: 'Es la ny, una consonante: n.' },
            { t: 'η', ok: true, por_que: 'Es la eta, una vocal: e larga.' },
            { t: 'ρ', ok: false, por_que: 'Es la rho, una consonante: r.' }
          ],
          explicacion: 'Las vocales griegas son siete: α, ε, η, ι, ο, υ, ω. La eta es la que más engaña.'
        } }
      ],
      pensar: 'Algunas letras parecen lo que no son. También hay enseñanzas que parecen bíblicas y no lo son. ¿Cómo te ayuda leer con atención la Escritura a distinguir la verdad de lo que solo se le parece?'
    },
    {
      id: 'mayusculas', n: 'Mayúsculas, minúsculas y la sigma final', ref: 'Mateo 6:9; Filipenses 2:11',
      visual: [
        { tipo: 'griego', titulo: 'Mateo 6:9', ref: 'Mateo 6:9', gr: 'οὕτως οὖν προσεύχεσθε ὑμεῖς Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς· Ἁγιασθήτω τὸ ὄνομά σου·', tr: 'Hútōs un proséujesthe hymeís: Páter hēmṓn ho en tois uranóis, hagiasthḗtō to ónomá su;',
          palabras: P(['οὕτως', 'οὖν', 'προσεύχεσθε', 'ὑμεῖς', 'Πάτερ', 'ἡμῶν', 'ὁ', 'ἐν', 'τοῖς', 'οὐρανοῖς', 'Ἁγιασθήτω', 'τὸ', 'ὄνομά', 'σου'], [['hútōs', 'así'], ['un', 'pues'], ['proséujesthe', 'orad'], ['hymeís', 'vosotros'], ['Páter', 'Padre'], ['hēmṓn', 'nuestro'], ['ho', 'que (estás)'], ['en', 'en'], ['tois', 'los'], ['uranóis', 'cielos'], ['hagiasthḗtō', 'sea santificado'], ['to', 'el'], ['ónomá', 'nombre'], ['su', 'tuyo']]),
          rv: 'Vosotros, pues, oraréis así: Padre nuestro que estás en los cielos, santificado sea tu nombre.' },
        { tipo: 'tabla', titulo: 'La sigma', tabla: {
          titulo: 'Las formas de la sigma',
          cab: ['Forma', 'Dónde va', 'Ejemplo'],
          filas: [
            ['Σ', 'Mayúscula', 'Σωτήρ, «Salvador» (Lc 2:11)'],
            ['σ', 'Al comienzo o en medio de la palabra', 'σωτηρία, «salvación»'],
            ['ς', 'Al final de la palabra', 'λόγος, «palabra»'],
            ['Ϲ', 'Sigma lunar: así la escriben muchos manuscritos', 'ΘϹ, «Dios», en el Códice Sinaítico'],
          ],
          nota: 'Ἰησοῦς tiene las dos sigmas: σ en el medio y ς al final.'
        } }
      ],
      texto: [
        'Los manuscritos antiguos usaban solo mayúsculas. Las ediciones impresas usan minúsculas, y reservan las mayúsculas para unos pocos casos. Saber cuáles te ayuda a orientarte en la página.',
        { h: 'Dónde aparecen las mayúsculas' },
        'En una edición como la de Nestle, la mayúscula aparece al comienzo de un párrafo, en los nombres propios (Ἰησοῦς, Πέτρος, Ἰερουσαλήμ) y al comienzo de una cita en estilo directo. A diferencia del español, no se usa mayúscula después de cada punto. Fíjate en el panel: Mateo 6:9 empieza con minúscula, porque continúa un párrafo, y Πάτερ, «Padre», lleva mayúscula porque comienza la oración que Jesús enseña.',
        'Nestle escribe además con mayúscula algunas palabras que se refieren a Dios: Θεός, Κύριος, Λόγος, Πνεῦμα. Es una decisión del editor, no de los manuscritos, que no distinguían mayúsculas y minúsculas. Otras ediciones escriben θεός con minúscula.',
        'En algunas ediciones verás frases enteras en mayúsculas. Es la manera de marcar una inscripción o una cita: en Hechos 17:23, el altar de Atenas dice ΑΓΝΩΣΤΩ ΘΕΩ, «al Dios no conocido», y en Filipenses 2:11 se confiesa ΚΥΡΙΟΣ ΙΗΣΟΥΣ ΧΡΙΣΤΟΣ, «Jesucristo es el Señor».',
        { h: 'La sigma final' },
        'La sigma es la única letra con una forma especial para el final de la palabra. Al comienzo y en el medio se escribe σ; al final, ς. Es muy útil: cuando ves una ς, sabes que ahí termina una palabra. En Ἰησοῦς tienes las dos.',
        'En los manuscritos verás además una sigma redonda, como una C (Ϲ), llamada sigma lunar. Algunas ediciones modernas también la usan. Es la misma letra.',
        { h: 'Consejo para leer mayúsculas' },
        'Las mayúsculas griegas son más fáciles de confundir con las latinas que las minúsculas. Cuando veas un texto en mayúsculas, recuerda: Η es e, Ρ es r, Χ es j, y Σ y Ϲ son s. Lee en voz alta: ΚΥΡΙΟΣ, kyrios; ΙΗΣΟΥΣ, Iēsus; ΧΡΙΣΤΟΣ, Jristos.',
        { ejercicio: {
          pregunta: '¿Por qué la palabra Πάτερ lleva mayúscula en Mateo 6:9?',
          opciones: [
            { t: 'Porque todas las palabras que siguen a un punto llevan mayúscula.', ok: false, por_que: 'En el griego impreso no se usa mayúscula después de cada punto, como en español.' },
            { t: 'Porque comienza las palabras de la oración que Jesús enseña.', ok: true, por_que: 'Las ediciones marcan con mayúscula el comienzo de una cita en estilo directo.' },
            { t: 'Porque los manuscritos antiguos la escribían con mayúscula y el resto con minúscula.', ok: false, por_que: 'Los manuscritos antiguos escribían todo en mayúsculas.' }
          ],
          explicacion: 'Las mayúsculas del texto impreso son decisiones de los editores para ayudar a leer: nombres propios, comienzo de párrafo y comienzo de una cita.'
        } }
      ],
      pensar: 'Jesús enseñó a sus discípulos a comenzar la oración llamando a Dios «Padre nuestro». ¿Qué cambia en tu manera de orar cuando recuerdas que hablas con tu Padre?'
    },
    {
      id: 'numeros', n: 'Las letras como números', ref: 'Apocalipsis 13:18; Juan 21:11',
      visual: [
        { tipo: 'tabla', titulo: 'Valores', tabla: {
          titulo: 'El valor numérico de las letras',
          cab: ['Unidades', 'Decenas', 'Centenas'],
          filas: [
            ['α 1', 'ι 10', 'ρ 100'],
            ['β 2', 'κ 20', 'σ 200'],
            ['γ 3', 'λ 30', 'τ 300'],
            ['δ 4', 'μ 40', 'υ 400'],
            ['ε 5', 'ν 50', 'φ 500'],
            ['ϛ 6 (stigma)', 'ξ 60', 'χ 600'],
            ['ζ 7', 'ο 70', 'ψ 700'],
            ['η 8', 'π 80', 'ω 800'],
            ['θ 9', 'ϙ 90 (koppa)', 'ϡ 900 (sampi)'],
          ],
          nota: 'Tres signos antiguos (stigma, koppa y sampi) ya no eran letras en tiempos del Nuevo Testamento, pero se seguían usando como números.'
        } },
        { tipo: 'griego', titulo: 'Apocalipsis 13:18', ref: 'Apocalipsis 13:18', gr: 'Ὧδε ἡ σοφία ἐστίν. ὁ ἔχων νοῦν ψηφισάτω τὸν ἀριθμὸν τοῦ θηρίου· ἀριθμὸς γὰρ ἀνθρώπου ἐστίν. καὶ ὁ ἀριθμὸς αὐτοῦ ἑξακόσιοι ἑξήκοντα ἕξ.', tr: 'Hṓde hē sofía estín. Ho éjōn nun psēfisátō ton arithmón tu thēríu; arithmós gar anthrṓpu estín. Kai ho arithmós autú hexakósioi hexḗkonta hex.',
          rv: 'Aquí hay sabiduría. El que tiene entendimiento, cuente el número de la bestia, pues es número de hombre. Y su número es seiscientos sesenta y seis.' }
      ],
      texto: [
        'Los griegos, como los hebreos, no tenían cifras como las nuestras. Usaban las letras del alfabeto con un valor numérico: de alfa a theta las unidades, de iota a koppa las decenas, y de rho a sampi las centenas. Para que no se confundiera un número con una palabra, se marcaba con una rayita: ιβʹ era 12.',
        'Para completar los 27 valores hacían falta tres signos más que las 24 letras. Se usaban tres letras antiguas que ya no se pronunciaban: la stigma (ϛ) para el 6, la koppa (ϙ) para el 90 y la sampi (ϡ) para el 900.',
        { h: 'El número de la bestia' },
        'Por eso Apocalipsis puede decir que el nombre de la bestia tiene un número: «Aquí hay sabiduría. El que tiene entendimiento, cuente el número de la bestia, pues es número de hombre. Y su número es seiscientos sesenta y seis» (Ap 13:18). En el texto que leemos, el número está escrito con palabras, ἑξακόσιοι ἑξήκοντα ἕξ. Pero muchos manuscritos lo escriben con letras: χξϛ, es decir, 600 + 60 + 6.',
        'A lo largo de la historia se ha sumado el valor de las letras de muchísimos nombres para encontrar el 666: emperadores, papas, reformadores y políticos modernos. Todos esos cálculos han fallado, y se pueden fabricar con casi cualquier nombre si se elige el idioma y la forma de escribirlo. Este recurso no identifica a nadie. Juan anuncia que, cuando la bestia aparezca, quienes tengan entendimiento podrán reconocerla. Mientras tanto, la Escritura nos llama a velar y a no seguir especulaciones.',
        'Un dato de los manuscritos: Ireneo, en el siglo II, sabía que algunas copias decían 616, y defendió el 666 como la lectura de los manuscritos más antiguos y fieles. Un papiro hallado en Oxirrinco (el papiro 115) dice 616. Casi todos los manuscritos, y todas las ediciones, dicen 666.',
        { ir: { t: 'Ver la bestia y su número en Apocalipsis', a: '../../apocalipsis/' } },
        { h: 'Otros números' },
        'El Nuevo Testamento escribe casi siempre los números con palabras: los ciento cincuenta y tres peces de Juan 21:11 o los cinco mil de la multiplicación. El valor numérico de las letras aparece sobre todo en los manuscritos, para numerar páginas, capítulos y salmos.',
        { ejercicio: {
          pregunta: '¿Qué número escriben las letras χξϛ?',
          opciones: [
            { t: '666', ok: true, por_que: 'χ = 600, ξ = 60 y ϛ (stigma) = 6.' },
            { t: '616', ok: false, por_que: '616 se escribe χιϛ: 600 + 10 + 6.' },
            { t: '777', ok: false, por_que: '777 se escribiría ψοζ: 700 + 70 + 7.' }
          ],
          explicacion: 'Con la tabla del panel puedes leer cualquier número escrito con letras griegas.'
        } }
      ],
      pensar: 'Jesús dijo que nadie sabe el día ni la hora, y nos mandó velar (Mt 24:36, 42). ¿Qué diferencia hay entre velar y especular sobre fechas y nombres?'
    },
    {
      id: 'sagradas', n: 'Alfa y Omega, y las abreviaturas sagradas', ref: 'Apocalipsis 1:8; 21:6; 22:13; Isaías 44:6',
      visual: [
        { tipo: 'griego', titulo: 'Apocalipsis 22:13', ref: 'Apocalipsis 22:13', gr: 'ἐγὼ τὸ Ἄλφα καὶ τὸ Ὦ, ὁ πρῶτος καὶ ὁ ἔσχατος, ἡ ἀρχὴ καὶ τὸ τέλος.', tr: 'Egṓ to Álfa kai to Ō, ho prṓtos kai ho ésjatos, hē arjḗ kai to télos.',
          palabras: P(['ἐγὼ', 'τὸ', 'Ἄλφα', 'καὶ', 'τὸ', 'Ὦ', 'ὁ', 'πρῶτος', 'καὶ', 'ὁ', 'ἔσχατος', 'ἡ', 'ἀρχὴ', 'καὶ', 'τὸ', 'τέλος'], [['egṓ', 'yo (soy)'], ['to', 'el'], ['Álfa', 'Alfa'], ['kai', 'y'], ['to', 'la'], ['Ō', 'Omega'], ['ho', 'el'], ['prṓtos', 'primero'], ['kai', 'y'], ['ho', 'el'], ['ésjatos', 'último'], ['hē', 'el'], ['arjḗ', 'principio'], ['kai', 'y'], ['to', 'el'], ['télos', 'fin']]),
          rv: 'Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último.' },
        { tipo: 'tabla', titulo: 'Abreviaturas', tabla: {
          titulo: 'Las abreviaturas sagradas de los manuscritos',
          cab: ['Abreviatura', 'Palabra completa', 'Significa'],
          filas: [
            ['ΘΣ', 'ΘΕΟΣ', 'Dios'],
            ['ΚΣ', 'ΚΥΡΙΟΣ', 'Señor'],
            ['ΙΣ', 'ΙΗΣΟΥΣ', 'Jesús'],
            ['ΧΣ', 'ΧΡΙΣΤΟΣ', 'Cristo'],
            ['ΠΝΑ', 'ΠΝΕΥΜΑ', 'Espíritu'],
            ['ΥΣ', 'ΥΙΟΣ', 'Hijo'],
            ['ΙΧΘΥΣ', 'Ἰησοῦς Χριστὸς Θεοῦ Υἱὸς Σωτήρ', 'Jesucristo, Hijo de Dios, Salvador'],
          ],
          nota: 'En los manuscritos, las abreviaturas llevan una raya encima, para que el lector supiera que no eran palabras comunes.'
        } }
      ],
      texto: [
        'Tres veces en Apocalipsis el Señor se presenta con las letras del alfabeto: «Yo soy el Alfa y la Omega» (Ap 1:8; 21:6; 22:13). Alfa es la primera letra y omega la última. Es como decir «de la A a la Z»: Dios es el principio y el fin de todas las cosas, el que estaba antes de todo y el que tendrá la última palabra.',
        'Detrás de esta expresión está el Antiguo Testamento: «Yo soy el primero, y yo soy el postrero, y fuera de mí no hay Dios» (Is 44:6). En Apocalipsis 1:8 la dice el Señor, el Todopoderoso, y en 22:13 la dice Jesús, el que viene pronto (Ap 22:12, 16). Así el Nuevo Testamento atribuye a Cristo el mismo título del Dios único.',
        'Un detalle de escritura: en el texto griego de Apocalipsis la alfa se escribe con su nombre, Ἄλφα, pero la omega se escribe solo con la letra, Ὦ. La palabra «omega» se formó después.',
        { ir: { t: 'Ver «El Alfa y la Omega» en Apocalipsis', a: '../../apocalipsis/' } },
        { h: 'Las abreviaturas sagradas' },
        'Los primeros cristianos tenían una costumbre especial al copiar la Escritura: ciertas palabras, casi siempre los nombres de Dios y de Cristo, se escribían abreviadas, con la primera y la última letra y una raya encima. Los estudiosos las llaman nomina sacra, «nombres sagrados». Aparecen ya en los papiros más antiguos, como el papiro 46, y en los grandes códices.',
        'No era para ahorrar espacio, porque solo se abreviaban esas palabras. Era una forma de honrar el nombre de Dios. Y es significativo que, desde el principio, los cristianos trataron el nombre de Jesús igual que el de Dios.',
        { h: 'El pez' },
        'La palabra ΙΧΘΥΣ, ijthýs, significa «pez». Sus letras forman las iniciales de una confesión de fe: Ἰησοῦς Χριστὸς Θεοῦ Υἱὸς Σωτήρ, «Jesucristo, Hijo de Dios, Salvador». Por eso el pez fue uno de los primeros símbolos cristianos, dibujado en lámparas y en las catacumbas. Otro símbolo antiguo es la unión de las dos primeras letras de Χριστός, la ji y la rho: ☧.',
        { ejercicio: {
          pregunta: 'En un manuscrito ves ΙΣ ΧΣ con una raya encima. ¿Qué dice?',
          opciones: [
            { t: '«Jesucristo», en abreviaturas sagradas.', ok: true, por_que: 'ΙΣ es Ἰησοῦς y ΧΣ es Χριστός: primera y última letra con una raya encima.' },
            { t: '«Iglesia de Cristo».', ok: false, por_que: 'Iglesia es ἐκκλησία y no se abreviaba como nombre sagrado.' },
            { t: 'Un número: 10 y 600.', ok: false, por_que: 'La raya encima de dos letras en un manuscrito del Nuevo Testamento marca casi siempre un nombre sagrado, no un número.' }
          ],
          explicacion: 'Los cristianos abreviaban así los nombres de Dios, del Señor, de Jesús, de Cristo y del Espíritu, como señal de reverencia.'
        } }
      ],
      pensar: 'Cristo es el Alfa y la Omega: el principio y el fin. ¿Qué significa para ti que el mismo que comenzó la historia es el que la va a terminar?'
    }
  ];

  window.__ALFA.letras = letras;
})();
/* El alfabeto griego y la lectura · III. Vocales, diptongos y signos */
(() => {
  const { P } = window.__ALFA;

  const signos = [
    {
      id: 'vocales', n: 'Las siete vocales', ref: 'Juan 14:6; Mateo 5:18',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Las siete vocales griegas',
          cab: ['Vocal', 'Nombre', 'Suena', 'Duración'],
          filas: [
            ['α', 'alfa', 'a', 'breve o larga'],
            ['ε', 'épsilon', 'e', 'siempre breve'],
            ['η', 'eta', 'e', 'siempre larga'],
            ['ι', 'iota', 'i', 'breve o larga'],
            ['ο', 'ómicron', 'o', 'siempre breve'],
            ['ω', 'omega', 'o', 'siempre larga'],
            ['υ', 'ýpsilon', 'ü', 'breve o larga'],
          ],
          nota: 'En español hay cinco vocales; en griego, siete letras vocales. La e y la o tienen dos letras cada una: una breve y una larga.'
        } },
        { tipo: 'griego', titulo: 'Juan 14:6', ref: 'Juan 14:6', gr: 'λέγει αὐτῷ Ἰησοῦς Ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή· οὐδεὶς ἔρχεται πρὸς τὸν Πατέρα εἰ μὴ δι’ ἐμοῦ.', tr: 'Légei autṓ Iēsús: Egṓ eimi hē hodós kai hē alḗtheia kai hē zōḗ; udeís érjetai pros ton Patéra ei mē di’ emú.',
          palabras: P(['λέγει', 'αὐτῷ', 'Ἰησοῦς', 'Ἐγώ', 'εἰμι', 'ἡ', 'ὁδὸς', 'καὶ', 'ἡ', 'ἀλήθεια', 'καὶ', 'ἡ', 'ζωή', 'οὐδεὶς', 'ἔρχεται', 'πρὸς', 'τὸν', 'Πατέρα', 'εἰ', 'μὴ', 'δι’', 'ἐμοῦ'], [['légei', 'dice'], ['autṓ', 'le'], ['Iēsús', 'Jesús'], ['egṓ', 'yo'], ['eimi', 'soy'], ['hē', 'el'], ['hodós', 'camino'], ['kai', 'y'], ['hē', 'la'], ['alḗtheia', 'verdad'], ['kai', 'y'], ['hē', 'la'], ['zōḗ', 'vida'], ['udeís', 'nadie'], ['érjetai', 'viene'], ['pros', 'a'], ['ton', 'el'], ['Patéra', 'Padre'], ['ei', 'si'], ['mē', 'no'], ['di’', 'por'], ['emú', 'mí']]),
          rv: 'Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.' }
      ],
      texto: [
        'Ya conoces todas las letras. En esta ruta vas a aprender a juntarlas para leer palabras completas, empezando por las vocales.',
        { h: 'Siete letras vocales' },
        'El griego tiene siete letras vocales: α, ε, η, ι, ο, ω y υ. Todas las demás son consonantes. A diferencia del hebreo, aquí no hay puntos ni signos debajo de las letras: la vocal es una letra más, escrita en la línea.',
        'Dos sonidos del español tienen dos letras en griego. La e puede ser breve (ε, épsilon) o larga (η, eta), y la o puede ser breve (ο, ómicron) o larga (ω, omega). Las otras tres vocales (α, ι, υ) pueden ser breves o largas, pero se escriben igual en los dos casos.',
        { h: '¿Se nota al hablar?' },
        'En el griego antiguo la duración de las vocales era importante: una vocal larga duraba más, como en la música una blanca dura más que una negra. En la pronunciación erasmiana se intenta sostener un poco más la η y la ω, pero en la práctica muchos estudiantes las pronuncian igual que la ε y la ο. Lo importante es reconocerlas al leer y escribirlas bien, porque cambiar una vocal breve por una larga puede cambiar la palabra.',
        'Por ejemplo, la terminación -ομεν indica «nosotros» en un verbo, y la terminación -ωμεν también, pero con otro matiz. Lo aprenderás en el recurso de gramática; por ahora basta con ver que ο y ω no son intercambiables.',
        { h: 'Practica con Juan 14:6' },
        'En el panel tienes las palabras de Jesús: «Yo soy el camino, y la verdad, y la vida» (Jn 14:6). Busca las vocales largas: la ω de ἐγώ y de ζωή, la η de ἡ y de ἀλήθεια. Lee el versículo en voz alta alargando un poco esas vocales.',
        { ejercicio: {
          pregunta: '¿Cuál de estas palabras tiene una o larga?',
          opciones: [
            { t: 'λόγος, «palabra»', ok: false, por_que: 'Las dos o de λόγος son ómicron (ο), breves.' },
            { t: 'ζωή, «vida»', ok: true, por_que: 'La ω de ζωή es omega, una o larga.' },
            { t: 'ὁδός, «camino»', ok: false, por_que: 'Las dos o de ὁδός son ómicron (ο), breves.' }
          ],
          explicacion: 'La omega (ω) es siempre larga, y la ómicron (ο), siempre breve.'
        } }
      ],
      pensar: 'Jesús no dijo «yo enseño un camino», sino «yo soy el camino». ¿Qué diferencia hay entre seguir unas reglas y seguir a una persona?'
    },
    {
      id: 'diptongos', n: 'Los diptongos', ref: 'Mateo 5:3; Marcos 1:1; Juan 3:16',
      visual: [
        { tipo: 'tabla', titulo: 'Los diptongos', tabla: {
          titulo: 'Los diptongos griegos',
          cab: ['Diptongo', 'Suena', 'Ejemplo'],
          filas: [
            ['αι', 'ai, como en «aire»', 'καί, kai, «y»'],
            ['ει', 'ei, como en «rey»', 'εἰμί, eimí, «soy»'],
            ['οι', 'oi, como en «hoy»', 'οἱ, hoi, «los»'],
            ['υι', 'üi', 'υἱός, hyiós, «hijo»'],
            ['αυ', 'au, como en «auto»', 'αὐτός, autós, «él»'],
            ['ευ', 'eu, como en «Europa»', 'εὐαγγέλιον, euangélion, «evangelio»'],
            ['ου', 'u, como en «luz»', 'οὐρανός, uranós, «cielo»'],
            ['ηυ', 'eu (poco frecuente)', 'ηὔξανεν, ēúxanen, «crecía» (Hch 12:24)'],
          ],
          nota: 'ου no suena «ou», sino u. Es el diptongo más frecuente del Nuevo Testamento.'
        } },
        { tipo: 'griego', titulo: 'Marcos 1:1', ref: 'Marcos 1:1', gr: 'Ἀρχὴ τοῦ εὐαγγελίου Ἰησοῦ Χριστοῦ (Υἱοῦ Θεοῦ).', tr: 'Arjḗ tu euangelíu Iēsú Jristú (Hyiú Theú).',
          palabras: P(['Ἀρχὴ', 'τοῦ', 'εὐαγγελίου', 'Ἰησοῦ', 'Χριστοῦ', 'Υἱοῦ', 'Θεοῦ'], [['arjḗ', 'principio'], ['tu', 'del'], ['euangelíu', 'evangelio'], ['Iēsú', 'de Jesús'], ['Jristú', 'Cristo'], ['Hyiú', 'Hijo'], ['Theú', 'de Dios']]),
          rv: 'Principio del evangelio de Jesucristo, Hijo de Dios.' }
      ],
      texto: [
        'Un diptongo es la unión de dos vocales que se pronuncian en una sola sílaba, como «ai» en «aire» o «au» en «auto». En griego hay ocho diptongos. Casi todos suenan como esperarías, salvo uno.',
        { h: 'Los diptongos con iota' },
        'Cuatro diptongos terminan en iota: αι (ai), ει (ei), οι (oi) y υι (üi). Se leen como en español: καί, «y», se lee kai; εἰμί, «soy», se lee eimí. La palabra καί es la más frecuente del Nuevo Testamento después del artículo: la vas a leer miles de veces.',
        { h: 'Los diptongos con ýpsilon' },
        'Cuando la ýpsilon va detrás de otra vocal, deja de sonar ü y suena u. Así, αυ es au y ευ es eu: αὐτός se lee autós, y εὐαγγέλιον se lee euangélion. De ahí vienen palabras españolas como «autógrafo» y «evangelio», donde la u griega se volvió v.',
        { h: 'El diptongo ου' },
        'El diptongo ου es la excepción, y también el más frecuente. No suena «ou»: suena simplemente u. Por eso οὐρανός, «cielo», se lee uranós, y Ἰησοῦ, «de Jesús», se lee Iēsú. Muchas terminaciones griegas llevan ου, como -ου y -ους, así que aprenderlo bien ahorra muchos tropiezos.',
        'En el panel tienes el primer versículo de Marcos. Tiene cinco veces el diptongo ου: τοῦ, εὐαγγελίου, Ἰησοῦ, Χριστοῦ, Υἱοῦ y Θεοῦ. Léelo en voz alta y verás cómo se repite el sonido u al final de las palabras: es la terminación del genitivo, que se traduce con «de».',
        { h: 'Cuando no es diptongo' },
        'A veces dos vocales que podrían formar un diptongo se pronuncian por separado. Las ediciones lo indican con dos puntos sobre la segunda vocal, la diéresis: Μωϋσῆς se lee Mō-y-sḗs, en tres sílabas, y no «Mui-sés».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra οὐρανός, «cielo»?',
          opciones: [
            { t: 'ouranós', ok: false, por_que: 'El diptongo ου no suena «ou», sino u.' },
            { t: 'uranós', ok: true, por_que: 'ου suena u. De esta palabra viene el nombre del planeta Urano.' },
            { t: 'yranós', ok: false, por_que: 'La ýpsilon, detrás de la ómicron, forma el diptongo ου y suena u.' }
          ],
          explicacion: 'Recuerda la excepción: ου = u.'
        } }
      ],
      pensar: 'Marcos empieza su libro llamándolo «el evangelio», la buena noticia de Jesucristo. ¿A quién podrías contarle esta semana esa buena noticia?'
    },
    {
      id: 'gamma-nasal', n: 'La gamma nasal y las consonantes dobles', ref: 'Lucas 2:10; Marcos 1:1; Hechos 2:4',
      visual: [
        { tipo: 'griego', titulo: 'Lucas 2:10', ref: 'Lucas 2:10', gr: 'καὶ εἶπεν αὐτοῖς ὁ ἄγγελος Μὴ φοβεῖσθε· ἰδοὺ γὰρ εὐαγγελίζομαι ὑμῖν χαρὰν μεγάλην, ἥτις ἔσται παντὶ τῷ λαῷ,', tr: 'Kai éipen autóis ho ángelos: Mē fobéisthe; idú gar euangelízomai hymín jarán megálēn, hḗtis éstai pantí tō laṓ.',
          palabras: P(['καὶ', 'εἶπεν', 'αὐτοῖς', 'ὁ', 'ἄγγελος', 'Μὴ', 'φοβεῖσθε', 'ἰδοὺ', 'γὰρ', 'εὐαγγελίζομαι', 'ὑμῖν', 'χαρὰν', 'μεγάλην', 'ἥτις', 'ἔσται', 'παντὶ', 'τῷ', 'λαῷ'], [['kai', 'y'], ['éipen', 'dijo'], ['autóis', 'les'], ['ho', 'el'], ['ángelos', 'ángel'], ['mē', 'no'], ['fobéisthe', 'temáis'], ['idú', 'he aquí'], ['gar', 'porque'], ['euangelízomai', 'os anuncio buenas nuevas'], ['hymín', 'a vosotros'], ['jarán', 'gozo'], ['megálēn', 'grande'], ['hḗtis', 'que'], ['éstai', 'será'], ['pantí', 'para todo'], ['tō', 'el'], ['laṓ', 'pueblo']]),
          rv: 'Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo:' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La gamma ante consonantes de garganta',
          cab: ['Grupo', 'Suena', 'Ejemplo'],
          filas: [
            ['γγ', 'ng', 'ἄγγελος, ángelos, «ángel»'],
            ['γκ', 'nk', 'ἀνάγκη, anánkē, «necesidad»'],
            ['γξ', 'nx', 'σάλπιγξ, sálpinx, «trompeta»'],
            ['γχ', 'nj', 'ἐλέγχω, elénjō, «reprender»'],
          ],
          nota: 'Las consonantes dobles son ζ (ds), ξ (ks) y ψ (ps): una sola letra para dos sonidos.'
        } }
      ],
      texto: [
        'Hay una regla de lectura que tropieza a casi todos los principiantes, y conviene aprenderla temprano: la gamma delante de ciertas consonantes no suena g, sino n.',
        { h: 'La gamma nasal' },
        'Cuando una gamma va delante de otra gamma (γγ), o delante de κ, ξ o χ, se pronuncia como una n. Por eso ἄγγελος se lee ángelos, no «ággelos». De ahí viene nuestra palabra «ángel». Y εὐαγγέλιον se lee euangélion, de donde viene «evangelio».',
        'Esas cuatro letras (γ, κ, ξ, χ) tienen algo en común: se pronuncian en la garganta. La gamma se adapta a ellas, igual que en español la n de «banco» suena distinta de la n de «bando».',
        'El panel muestra el anuncio del ángel a los pastores, que tiene dos ejemplos: ἄγγελος, «ángel», y εὐαγγελίζομαι, «os doy buenas nuevas», del mismo verbo que «evangelizar». Las dos se leen con n.',
        { h: 'Las consonantes dobles' },
        'Tres letras griegas representan dos sonidos a la vez: la dseta (ζ = ds), la xi (ξ = ks) y la psi (ψ = ps). Al leer, pronuncia los dos sonidos. Al escribir, recuerda que el griego no escribe κσ ni πσ: usa ξ y ψ. Por eso, cuando un verbo terminado en κ recibe una σ, aparece una ξ: lo verás en la gramática.',
        { h: 'Consonantes dobles de verdad' },
        'Cuando una consonante aparece dos veces seguidas (λλ, σσ, ττ, ρρ), se pronuncian las dos, o al menos se alarga un poco el sonido: ἐκκλησία se lee ek-klē-sía, y γλῶσσα, «lengua», se lee glṓs-sa. En Hechos 2:4 los discípulos hablaron ἑτέραις γλώσσαις, «en otras lenguas».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra ἄγγελος?',
          opciones: [
            { t: 'ággelos', ok: false, por_que: 'La primera gamma, delante de otra gamma, suena n.' },
            { t: 'ángelos', ok: true, por_que: 'γγ suena ng. Por eso decimos «ángel».' },
            { t: 'ájjelos', ok: false, por_que: 'La gamma nunca suena j.' }
          ],
          explicacion: 'La gamma delante de γ, κ, ξ o χ suena n.'
        } }
      ],
      pensar: 'El ángel anunció «nuevas de gran gozo, que será para todo el pueblo» (Lc 2:10). ¿Vives el evangelio como una noticia de gozo o como una carga?'
    },
    {
      id: 'espiritus', n: 'Los espíritus: suave y áspero', ref: 'Juan 1:29; Mateo 28:19; Romanos 3:23',
      visual: [
        { tipo: 'tabla', titulo: 'Los espíritus', tabla: {
          titulo: 'Los dos espíritus',
          cab: ['Signo', 'Nombre', 'Se lee', 'Ejemplo'],
          filas: [
            ['ἀ', 'espíritu suave', 'nada: la vocal sola', 'ἀγάπη, agápē, «amor»'],
            ['ἁ', 'espíritu áspero', 'h aspirada antes de la vocal', 'ἁμαρτία, hamartía, «pecado»'],
            ['ἐ / ἑ', 'suave / áspero', 'e / he', 'ἐν, en, «en»; ἕν, hen, «uno»'],
            ['ὁ', 'espíritu áspero', 'ho', 'ὁ, ho, «el»'],
            ['ῥ', 'espíritu áspero sobre rho', 'rh', 'ῥῆμα, rhḗma, «palabra»'],
            ['υἱ', 'la ýpsilon inicial lleva siempre áspero', 'hy', 'υἱός, hyiós, «hijo»'],
          ],
          nota: 'En un diptongo, el espíritu va sobre la segunda vocal: εὐαγγέλιον, αἰών, οὐρανός.'
        } },
        { tipo: 'griego', titulo: 'Juan 1:29', ref: 'Juan 1:29', gr: 'Τῇ ἐπαύριον βλέπει τὸν Ἰησοῦν ἐρχόμενον πρὸς αὐτόν, καὶ λέγει Ἴδε ὁ Ἀμνὸς τοῦ Θεοῦ ὁ αἴρων τὴν ἁμαρτίαν τοῦ κόσμου.', tr: 'Tē epáurion blépei ton Iēsún erjómenon pros autón, kai légei: Íde ho Amnós tu Theú ho áirōn tēn hamartían tu kósmu.',
          palabras: P(['Τῇ', 'ἐπαύριον', 'βλέπει', 'τὸν', 'Ἰησοῦν', 'ἐρχόμενον', 'πρὸς', 'αὐτόν', 'καὶ', 'λέγει', 'Ἴδε', 'ὁ', 'Ἀμνὸς', 'τοῦ', 'Θεοῦ', 'ὁ', 'αἴρων', 'τὴν', 'ἁμαρτίαν', 'τοῦ', 'κόσμου'], [['tē', 'el'], ['epáurion', 'día siguiente'], ['blépei', 've'], ['ton', 'a'], ['Iēsún', 'Jesús'], ['erjómenon', 'que venía'], ['pros', 'a'], ['autón', 'él'], ['kai', 'y'], ['légei', 'dice'], ['íde', 'he aquí'], ['ho', 'el'], ['Amnós', 'Cordero'], ['tu', 'de'], ['Theú', 'Dios'], ['ho', 'que'], ['áirōn', 'quita'], ['tēn', 'el'], ['hamartían', 'pecado'], ['tu', 'del'], ['kósmu', 'mundo']]),
          rv: 'El siguiente día vio Juan a Jesús que venía a él, y dijo: He aquí el Cordero de Dios, que quita el pecado del mundo.' }
      ],
      texto: [
        'El griego no tiene una letra para la h. En su lugar, toda palabra que empieza con vocal lleva encima de ella un pequeño signo llamado espíritu, que indica si hay o no una h antes de esa vocal.',
        { h: 'Suave y áspero' },
        'El espíritu suave (ἀ) parece una pequeña coma o un apóstrofo vuelto hacia la izquierda. Indica que no hay h: la vocal se lee sola. ἀγάπη se lee agápē.',
        'El espíritu áspero (ἁ) parece una coma al revés, abierta hacia la derecha. Indica una h aspirada antes de la vocal, como una j muy suave. ἁμαρτία, «pecado», se lee hamartía. De la palabra ἅγιος, «santo», viene la h de «hagiografía», y de αἷμα, «sangre», la h de «hemorragia».',
        'Un truco para recordarlos: el áspero (ἁ) se abre hacia la derecha, como una c; el suave (ἀ) se abre hacia la izquierda.',
        { h: 'Dónde va el espíritu' },
        'El espíritu va sobre la vocal inicial. Si la palabra empieza con mayúscula, va a la izquierda de la letra: Ἰησοῦς, Ἁγίου. Si empieza con un diptongo, va sobre la segunda vocal del diptongo: αὐτός, οὐρανός, εὐαγγέλιον. Y si va junto a un acento, los dos se escriben juntos: ἕν, ὥρα.',
        'Dos casos especiales. Toda palabra que comienza con rho lleva espíritu áspero (ῥ), y por eso escribimos rh en palabras como «rétor» o en nombres como Rhode (Hch 12:13). Y toda palabra que comienza con ýpsilon lleva espíritu áspero: υἱός se lee hyiós, ὑμεῖς se lee hymeís.',
        { h: 'Una diferencia que importa' },
        'El espíritu puede distinguir dos palabras que se escriben igual. ἐν (en) significa «en»; ἕν (hen) significa «uno». ὁ (ho) es el artículo «el»; ὅ (ho, con acento) es el pronombre «el cual». El panel muestra Juan 1:29: la frase ὁ Ἀμνὸς τοῦ Θεοῦ ὁ αἴρων τὴν ἁμαρτίαν tiene los dos espíritus. Distingue cada uno antes de leer.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra ἁμαρτία, «pecado»?',
          opciones: [
            { t: 'amartía', ok: false, por_que: 'El signo sobre la alfa es el espíritu áspero: indica una h.' },
            { t: 'hamartía', ok: true, por_que: 'El espíritu áspero (ἁ) agrega una h aspirada antes de la vocal.' },
            { t: 'jamartía, con una j fuerte', ok: false, por_que: 'La h del espíritu áspero es muy suave, no una j fuerte como la de la ji (χ).' }
          ],
          explicacion: 'Espíritu suave: sin h. Espíritu áspero: con h.'
        } }
      ],
      pensar: 'Juan el Bautista señaló a Jesús como «el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29). ¿Hay algún pecado que necesitas entregarle hoy, confiando en que él lo quita?'
    },
    {
      id: 'acentos', n: 'Los tres acentos', ref: 'Juan 3:16; Romanos 1:16',
      visual: [
        { tipo: 'tabla', titulo: 'Los acentos', tabla: {
          titulo: 'Los tres acentos griegos',
          cab: ['Signo', 'Nombre', 'Ejemplo', 'Se lee'],
          filas: [
            ['ά', 'agudo', 'λόγος', 'lógos'],
            ['ὰ', 'grave', 'καὶ ὁ λόγος', 'kai ho lógos'],
            ['ᾶ', 'circunflejo', 'φῶς', 'fōs'],
            ['ἄ ἅ', 'con espíritu', 'ἄγγελος, ἅγιος', 'ángelos, hágios'],
            ['ἆ ἇ', 'circunflejo con espíritu', 'οὖν, αἷμα', 'un, háima'],
          ],
          nota: 'Para leer en voz alta, los tres acentos indican lo mismo: la sílaba que se pronuncia con más fuerza.'
        } },
        { tipo: 'griego', titulo: 'Juan 3:16', ref: 'Juan 3:16', gr: 'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον.', tr: 'Hútōs gar ēgápēsen ho Theós ton kósmon, hṓste ton Hyión ton monogenḗ édōken, hína pas ho pistéuōn eis autón mē apólētai all’ éjē zōḗn aiṓnion.' }
      ],
      texto: [
        'Casi todas las palabras griegas de una edición impresa llevan un acento. Hay tres: el agudo (ά), el grave (ὰ) y el circunflejo (ᾶ). Al principio pueden parecer muchos signos, pero para leer en voz alta la regla es sencilla: el acento marca la sílaba que se pronuncia con más fuerza, como la tilde del español.',
        { h: 'Para qué servían' },
        'En el griego antiguo los acentos indicaban tonos: la voz subía (agudo), bajaba (grave) o subía y bajaba en la misma sílaba (circunflejo). Por eso el circunflejo solo aparece sobre vocales largas y diptongos, donde hay tiempo para subir y bajar la voz. Con los siglos, el tono se volvió intensidad, y hoy todos los acentos se leen igual.',
        { h: 'El grave' },
        'El acento grave tiene una regla curiosa: aparece solo en la última sílaba, cuando una palabra que debería llevar acento agudo al final va seguida de otra palabra sin puntuación en medio. Por eso καί aparece casi siempre como καὶ, y Θεός como Θεὸς dentro de la frase. Cuando hay una coma o un punto después, vuelve el agudo. Para leer, no importa: es la misma sílaba fuerte.',
        { h: 'Palabras sin acento' },
        'Algunas palabras muy breves no llevan acento propio y se apoyan en la palabra que va antes o después: ἐν, «en»; εἰς, «a, hacia»; ὁ, «el»; οὐ, «no». Al leerlas, júntalas con la palabra vecina: ἐν ἀρχῇ suena casi como una sola palabra, en arjḗ.',
        'Hay incluso palabras que pasan su acento a la palabra anterior. En Romanos 1:16 lo verás (Θεοῦ ἐστιν): ἐστίν, «es», a veces aparece sin acento. No te preocupes por las reglas: lee la sílaba que tenga el acento.',
        { h: 'Practica con Juan 3:16' },
        'El panel muestra Juan 3:16 sin las palabras separadas. Lee primero en voz alta marcando cada acento con un pequeño golpe de voz. Después compara con la transliteración, que pone tilde en la sílaba fuerte. Cuando llegues al taller lo leerás palabra por palabra.',
        { ejercicio: {
          pregunta: 'En la frase καὶ ὁ Λόγος, ¿qué indica el acento grave de καὶ?',
          opciones: [
            { t: 'Que la palabra se pronuncia sin ninguna fuerza.', ok: false, por_que: 'La sílaba con acento grave también es la sílaba fuerte.' },
            { t: 'Que es la sílaba fuerte, y que la palabra va seguida de otra sin puntuación.', ok: true, por_que: 'El grave reemplaza al agudo final cuando sigue otra palabra sin pausa.' },
            { t: 'Que es otra palabra distinta de καί.', ok: false, por_que: 'Es la misma palabra, «y». Solo cambia el acento por su posición en la frase.' }
          ],
          explicacion: 'Para leer en voz alta, los tres acentos marcan la sílaba fuerte.'
        } }
      ],
      pensar: 'Juan 3:16 comienza con la palabra οὕτως, «de tal manera». ¿Cómo describirías tú la manera en que Dios te ha amado?'
    },
    {
      id: 'iota', n: 'La iota suscrita y otros signos pequeños', ref: 'Juan 1:1; Efesios 2:8; Juan 14:6',
      visual: [
        { tipo: 'tabla', titulo: 'Signos', tabla: {
          titulo: 'Signos pequeños que conviene reconocer',
          cab: ['Signo', 'Nombre', 'Qué indica', 'Ejemplo'],
          filas: [
            ['ᾳ ῃ ῳ', 'iota suscrita', 'Una iota que ya no se pronunciaba, escrita debajo', 'ἐν ἀρχῇ, en arjḗ'],
            ['ᾼ ῌ ῼ', 'iota adscrita', 'La misma iota junto a la mayúscula', 'ΤΗΙ ΑΡΧΗΙ en mayúsculas'],
            ['ϋ ϊ', 'diéresis', 'Las dos vocales se leen separadas', 'Μωϋσῆς, Mō-y-sḗs'],
            ['’', 'apóstrofo', 'Se perdió la vocal final ante otra vocal', 'δι’ ἐμοῦ (en vez de διὰ ἐμοῦ)'],
            ['ν final', 'ny móvil', 'Una n que se agrega al final ante vocal o pausa', 'ἐστίν, ἐστι'],
          ],
          nota: 'Ninguno de estos signos cambia la pronunciación erasmiana más allá de lo indicado.'
        } },
        { tipo: 'griego', titulo: 'Efesios 2:8', ref: 'Efesios 2:8', gr: 'τῇ γὰρ χάριτί ἐστε σεσῳσμένοι διὰ πίστεως· καὶ τοῦτο οὐκ ἐξ ὑμῶν, Θεοῦ τὸ δῶρον·', tr: 'Tē gar járití este sesōsménoi dia písteōs; kai túto uk ex hymṓn, Theú to dṓron;',
          palabras: P(['τῇ', 'γὰρ', 'χάριτί', 'ἐστε', 'σεσῳσμένοι', 'διὰ', 'πίστεως', 'καὶ', 'τοῦτο', 'οὐκ', 'ἐξ', 'ὑμῶν', 'Θεοῦ', 'τὸ', 'δῶρον'], [['tē', 'por la'], ['gar', 'porque'], ['járití', 'gracia'], ['este', 'sois'], ['sesōsménoi', 'salvos'], ['dia', 'por medio de'], ['písteōs', 'la fe'], ['kai', 'y'], ['túto', 'esto'], ['uk', 'no'], ['ex', 'de'], ['hymṓn', 'vosotros'], ['Theú', 'de Dios'], ['to', 'el'], ['dṓron', 'don']]),
          rv: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios;' }
      ],
      texto: [
        'Esta estación reúne unos signos pequeños que aparecen menos, pero que vas a encontrar desde el primer versículo de Juan.',
        { h: 'La iota suscrita' },
        'En el griego antiguo existían diptongos largos con iota: ᾱι, ηι, ωι. Con el tiempo esa iota dejó de pronunciarse, pero los escritores no quisieron perderla, porque cambia el sentido gramatical. Los copistas bizantinos la escribieron pequeña, debajo de la vocal: ᾳ, ῃ, ῳ. Se llama iota suscrita, y no se pronuncia.',
        'La verás muchísimo, porque marca una terminación muy común, la del dativo, que suele traducirse con «a», «en», «con» o «por». En Juan 1:1, ἐν ἀρχῇ, «en el principio», lleva una iota suscrita. En Efesios 2:8, en el panel, la tienes en τῇ, «por la», y en σεσῳσμένοι, «salvos». Lee esas palabras sin la iota: tē, sesōsménoi.',
        'Cuando el texto está en mayúsculas, la iota no va debajo sino al lado, y se llama adscrita: ΤΗΙ.',
        { h: 'La diéresis' },
        'Dos puntos sobre una ι o una υ indican que esa vocal no forma diptongo con la anterior: se lee aparte. Μωϋσῆς, «Moisés», se lee Mō-y-sḗs, y Ἠσαΐας, «Isaías», se lee Ē-sa-í-as. Es lo mismo que hace la diéresis española en «pingüino».',
        { h: 'El apóstrofo' },
        'Cuando una palabra que termina en vocal va seguida de otra que empieza con vocal, a veces la primera pierde su última vocal, y se marca con un apóstrofo. En Juan 14:6, δι’ ἐμοῦ es διὰ ἐμοῦ, «por medio de mí». En Juan 3:16, ἀλλ’ ἔχῃ es ἀλλὰ ἔχῃ, «sino que tenga».',
        { h: 'La ny móvil' },
        'Algunas palabras agregan una ν al final cuando la siguiente empieza con vocal o cuando hay una pausa: ἐστι o ἐστιν, «es». Es la misma palabra. Sucede algo parecido en inglés con «a» y «an».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra ἀρχῇ, con iota suscrita?',
          opciones: [
            { t: 'arjḗi, pronunciando la iota.', ok: false, por_que: 'La iota suscrita no se pronuncia.' },
            { t: 'arjḗ, sin pronunciar la iota.', ok: true, por_que: 'La iota suscrita se escribe pero no se lee. Indica una terminación gramatical.' },
            { t: 'arkḗ, con k.', ok: false, por_que: 'La χ suena j, no k.' }
          ],
          explicacion: 'La iota suscrita es un recuerdo de una pronunciación antigua. Se ve, pero no se oye.'
        } }
      ],
      pensar: '«Por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios» (Ef 2:8). ¿Qué cambia en tu vida cuando entiendes que la salvación es un regalo y no un premio?'
    },
    {
      id: 'puntuacion', n: 'La puntuación: el punto alto y el punto y coma', ref: 'Juan 18:33; Mateo 6:9; Mateo 16:15',
      visual: [
        { tipo: 'tabla', titulo: 'Puntuación', tabla: {
          titulo: 'Los signos de puntuación griegos',
          cab: ['Signo', 'Nombre', 'Equivale a', 'Ejemplo'],
          filas: [
            ['.', 'punto', 'punto', 'ἐστίν.'],
            [',', 'coma', 'coma', 'ὁ Λόγος,'],
            ['·', 'punto alto', 'punto y coma o dos puntos', 'οὐρανοῖς·'],
            [';', 'signo de interrogación', '¿…?', 'Ἰουδαίων;'],
          ],
          nota: 'El punto y coma griego (;) es una pregunta. El punto alto (·) hace de nuestro punto y coma.'
        } },
        { tipo: 'griego', titulo: 'Juan 18:33', ref: 'Juan 18:33', gr: 'Εἰσῆλθεν οὖν πάλιν εἰς τὸ πραιτώριον ὁ Πειλᾶτος καὶ ἐφώνησεν τὸν Ἰησοῦν καὶ εἶπεν αὐτῷ Σὺ εἶ ὁ Βασιλεὺς τῶν Ἰουδαίων;', tr: 'Eisḗlthen un pálin eis to praitṓrion ho Peilátos kai efṓnēsen ton Iēsún kai éipen autṓ: Sy ei ho Basiléus tōn Iudáiōn?',
          palabras: P(['Εἰσῆλθεν', 'οὖν', 'πάλιν', 'εἰς', 'τὸ', 'πραιτώριον', 'ὁ', 'Πειλᾶτος', 'καὶ', 'ἐφώνησεν', 'τὸν', 'Ἰησοῦν', 'καὶ', 'εἶπεν', 'αὐτῷ', 'Σὺ', 'εἶ', 'ὁ', 'Βασιλεὺς', 'τῶν', 'Ἰουδαίων'], [['eisḗlthen', 'entró'], ['un', 'pues'], ['pálin', 'otra vez'], ['eis', 'en'], ['to', 'el'], ['praitṓrion', 'pretorio'], ['ho', '(el)'], ['Peilátos', 'Pilato'], ['kai', 'y'], ['efṓnēsen', 'llamó'], ['ton', 'a'], ['Iēsún', 'Jesús'], ['kai', 'y'], ['éipen', 'dijo'], ['autṓ', 'le'], ['sy', 'tú'], ['ei', 'eres'], ['ho', 'el'], ['Basiléus', 'Rey'], ['tōn', 'de los'], ['Iudáiōn', 'judíos']]),
          rv: 'Entonces Pilato volvió a entrar en el pretorio, y llamó a Jesús y le dijo: ¿Eres tú el Rey de los judíos?' }
      ],
      texto: [
        'La última estación de esta ruta es breve, pero evita una confusión muy común. La edición griega usa cuatro signos de puntuación, y dos de ellos no significan lo mismo que en español.',
        { h: 'El punto y coma es una pregunta' },
        'El signo que parece nuestro punto y coma (;) es, en griego, el signo de interrogación. Solo va al final de la pregunta, no al comienzo. En Juan 18:33, Pilato pregunta a Jesús: Σὺ εἶ ὁ Βασιλεὺς τῶν Ἰουδαίων; «¿Eres tú el Rey de los judíos?». Si lo lees como una afirmación, pierdes la pregunta.',
        'Esto importa en algunos pasajes donde los editores dudan si una frase es pregunta o afirmación. Los manuscritos antiguos casi no tenían puntuación, así que es una decisión del editor, y por eso las traducciones a veces difieren. En esos casos, el contexto decide.',
        { h: 'El punto alto' },
        'El punto que va arriba de la línea (·) se llama punto alto. Marca una pausa mayor que la coma y menor que el punto: hace las veces de nuestro punto y coma o de nuestros dos puntos. En Mateo 6:9 lo verás después de οὐρανοῖς, «cielos», y después de σου, «tu (nombre)», separando las peticiones del Padre Nuestro.',
        { h: 'Las comillas' },
        'El griego del Nuevo Testamento no tiene comillas. Para indicar que alguien empieza a hablar, la edición de Nestle usa una mayúscula, como viste en la ruta II. A veces aparece antes la palabra ὅτι, que entonces equivale a nuestros dos puntos: «dijo: …».',
        { h: 'Cierre de la ruta' },
        'Ya conoces todos los signos de una edición griega: letras, vocales, diptongos, espíritus, acentos, iota suscrita y puntuación. En la ruta IV vas a juntarlo todo para leer sílabas, nombres y palabras, y para leer un manuscrito antiguo.',
        { ejercicio: {
          pregunta: 'Lees en griego: Τί ἐστιν ἀλήθεια; ¿Qué tipo de frase es?',
          opciones: [
            { t: 'Una afirmación, porque termina en punto y coma.', ok: false, por_que: 'En griego, el punto y coma (;) es el signo de interrogación.' },
            { t: 'Una pregunta: «¿Qué es la verdad?».', ok: true, por_que: 'Es la pregunta de Pilato en Juan 18:38. El signo final (;) marca la interrogación.' },
            { t: 'Una frase incompleta que sigue en el versículo siguiente.', ok: false, por_que: 'El signo final no indica continuación, sino pregunta.' }
          ],
          explicacion: 'Recuerda: ; en griego es ¿…?, y · es nuestro punto y coma.'
        } }
      ],
      pensar: 'Pilato preguntó a Jesús si era rey, y Jesús le respondió que su reino no es de este mundo (Jn 18:36). ¿Qué significa para ti vivir bajo el reinado de Cristo hoy?'
    }
  ];

  window.__ALFA.signos = signos;
})();
/* El alfabeto griego y la lectura · IV. A leer */
(() => {
  const { P } = window.__ALFA;

  const leer = [
    {
      id: 'silabas', n: 'Sílabas y acento', ref: 'Juan 20:31',
      visual: [
        { tipo: 'tabla', titulo: 'Sílabas', tabla: {
          titulo: 'Palabras divididas en sílabas',
          cab: ['Palabra', 'Sílabas', 'Se lee'],
          filas: [
            ['Ἰησοῦς', 'Ἰ-η-σοῦς', 'Iē-sús'],
            ['ἐκκλησία', 'ἐκ-κλη-σί-α', 'ek-klē-sí-a'],
            ['ἀπόστολος', 'ἀ-πό-στο-λος', 'a-pós-to-los'],
            ['εὐαγγέλιον', 'εὐ-αγ-γέ-λι-ον', 'eu-an-gé-li-on'],
            ['βασιλεία', 'βα-σι-λεί-α', 'ba-si-léi-a'],
            ['ἀλήθεια', 'ἀ-λή-θει-α', 'a-lḗ-thei-a'],
            ['μονογενής', 'μο-νο-γε-νής', 'mo-no-ge-nḗs'],
          ],
          nota: 'Cada vocal o diptongo forma una sílaba. La sílaba con acento se pronuncia con más fuerza.'
        } },
        { tipo: 'griego', titulo: 'Juan 20:31', ref: 'Juan 20:31', gr: 'ταῦτα δὲ γέγραπται ἵνα πιστεύητε ὅτι Ἰησοῦς ἐστιν ὁ Χριστὸς ὁ Υἱὸς τοῦ Θεοῦ, καὶ ἵνα πιστεύοντες ζωὴν ἔχητε ἐν τῷ ὀνόματι αὐτοῦ.', tr: 'Táuta de gégraptai hína pistéuēte hoti Iēsús estin ho Jristós ho Hyiós tu Theú, kai hína pistéuontes zōḗn éjēte en tō onómati autú.',
          palabras: P(['ταῦτα', 'δὲ', 'γέγραπται', 'ἵνα', 'πιστεύητε', 'ὅτι', 'Ἰησοῦς', 'ἐστιν', 'ὁ', 'Χριστὸς', 'ὁ', 'Υἱὸς', 'τοῦ', 'Θεοῦ', 'καὶ', 'ἵνα', 'πιστεύοντες', 'ζωὴν', 'ἔχητε', 'ἐν', 'τῷ', 'ὀνόματι', 'αὐτοῦ'], [['táuta', 'estas cosas'], ['de', 'pero'], ['gégraptai', 'se han escrito'], ['hína', 'para que'], ['pistéuēte', 'creáis'], ['hoti', 'que'], ['Iēsús', 'Jesús'], ['estin', 'es'], ['ho', 'el'], ['Jristós', 'Cristo'], ['ho', 'el'], ['Hyiós', 'Hijo'], ['tu', 'del'], ['Theú', 'Dios'], ['kai', 'y'], ['hína', 'para que'], ['pistéuontes', 'creyendo'], ['zōḗn', 'vida'], ['éjēte', 'tengáis'], ['en', 'en'], ['tō', 'el'], ['onómati', 'nombre'], ['autú', 'suyo']]),
          rv: 'Pero éstas se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre.' }
      ],
      texto: [
        'Leer una palabra larga en griego es más fácil si la divides en sílabas. Las reglas son muy parecidas a las del español, así que vas a poder aplicarlas casi sin pensar.',
        { h: 'Cuatro reglas sencillas' },
        'Primera: hay tantas sílabas como vocales o diptongos. ἀλήθεια tiene cuatro: ἀ-λή-θει-α, porque ει es un diptongo.',
        'Segunda: una consonante sola entre dos vocales va con la vocal que sigue: ἀ-πό, βα-σι.',
        'Tercera: dos consonantes iguales se separan: ἐκ-κλη-σί-α, γλῶσ-σα. La gamma nasal también se separa de su compañera: εὐ-αγ-γέ-λι-ον.',
        'Cuarta: los grupos de consonantes que pueden empezar una palabra griega (como πρ, τρ, κλ, στ, γν) quedan juntos con la vocal siguiente: ἀ-πό-στο-λος, Χρι-στός.',
        { h: 'Dónde cargar la voz' },
        'En griego casi todas las palabras llevan el acento escrito, así que no hay que adivinar la sílaba fuerte: está marcada. El acento solo puede ir en una de las tres últimas sílabas. En la transliteración de este recurso, la tilde aparece cuando la sílaba fuerte no coincide con la que esperaría un hispanohablante: Lógos, Iēsús.',
        { h: 'Practica con Juan 20:31' },
        'En el panel tienes el versículo en que Juan explica por qué escribió su evangelio. Divide en sílabas las palabras largas antes de leerlas: πι-στεύ-η-τε, πι-στεύ-ον-τες, ὀ-νό-μα-τι. Después léelo de corrido. Fíjate cómo se repite el verbo «creer»: Juan escribe para que creamos, y creyendo tengamos vida.',
        { ejercicio: {
          pregunta: '¿Cuántas sílabas tiene ἐκκλησία, «iglesia»?',
          opciones: [
            { t: 'Tres: ἐκ-κλη-σία', ok: false, por_que: 'La ι y la α finales no forman diptongo: son dos sílabas, σί-α.' },
            { t: 'Cuatro: ἐκ-κλη-σί-α', ok: true, por_que: 'Cuatro vocales, ninguna forma diptongo con la siguiente: cuatro sílabas.' },
            { t: 'Cinco: ἐ-κ-κλη-σί-α', ok: false, por_que: 'Una consonante sola no forma sílaba: siempre necesita una vocal.' }
          ],
          explicacion: 'ἐκκλησία se lee ek-klē-sí-a, con la fuerza en la tercera sílaba.'
        } }
      ],
      pensar: 'Juan escribió «para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:31). ¿Qué parte de esa frase necesitas creer con más firmeza hoy?'
    },
    {
      id: 'nombres', n: 'Nombres del Nuevo Testamento', ref: 'Mateo 16:16-18; Hechos 13:9; Juan 1:40-43',
      visual: [
        { tipo: 'tabla', titulo: 'Personas', tabla: {
          titulo: 'Personas',
          cab: ['Griego', 'Se lee', 'Español'],
          filas: [
            ['Ἰησοῦς', 'Iēsús', 'Jesús'],
            ['Πέτρος', 'Pétros', 'Pedro'],
            ['Παῦλος', 'Páulos', 'Pablo'],
            ['Σαῦλος', 'Sáulos', 'Saulo'],
            ['Ἰωάνης', 'Iōánēs', 'Juan'],
            ['Ἰάκωβος', 'Iákōbos', 'Jacobo'],
            ['Ἀνδρέας', 'Andréas', 'Andrés'],
            ['Θωμᾶς', 'Thōmás', 'Tomás'],
            ['Μαρία', 'María', 'María'],
            ['Νικόδημος', 'Nikódēmos', 'Nicodemo'],
            ['Ζακχαῖος', 'Zakjáios', 'Zaqueo'],
            ['Τιμόθεος', 'Timótheos', 'Timoteo'],
          ],
          nota: 'Los nombres siguen la ortografía de la edición de Nestle 1904: Ἰωάνης con una sola ny, como en muchos manuscritos antiguos.'
        } },
        { tipo: 'tabla', titulo: 'Lugares', tabla: {
          titulo: 'Lugares',
          cab: ['Griego', 'Se lee', 'Español'],
          filas: [
            ['Ἰσραήλ', 'Israḗl', 'Israel'],
            ['Ἰερουσαλήμ', 'Ierusalḗm', 'Jerusalén'],
            ['Βηθλεέμ', 'Bēthleém', 'Belén'],
            ['Ναζαρέτ', 'Nazarét', 'Nazaret'],
            ['Καφαρναούμ', 'Kafarnaúm', 'Capernaum'],
            ['Γαλιλαία', 'Galiláia', 'Galilea'],
          ],
          nota: 'Los nombres hebreos de lugares suelen ir sin terminación griega y sin cambiar de forma.'
        } }
      ],
      texto: [
        'Los nombres propios son la mejor práctica para un principiante: ya sabes cómo deben sonar, así que puedes comprobar si leíste bien. Lee cada nombre del panel en voz alta antes de mirar la columna «Se lee».',
        { h: 'Nombres griegos y nombres hebreos' },
        'En el Nuevo Testamento hay dos clases de nombres. Algunos son griegos o latinos: Πέτρος, Ἀνδρέας, Φίλιππος, Τιμόθεος. Otros son hebreos o arameos, escritos con letras griegas: Ἰησοῦς es Yeshúa, Ἰωάνης es Yojanán, Μαρία es Miriam, Ἰάκωβος es Yaakov, el mismo nombre que Jacob.',
        'Los nombres hebreos sufren algunos cambios al pasar al griego. El griego no tenía letras para los sonidos sh ni j, y casi nunca termina una palabra masculina en vocal, así que les agrega una terminación: Yeshúa se convierte en Ἰησοῦς, con una -ς final. Por eso, en el Nuevo Testamento, Josué también se llama Ἰησοῦς (Hch 7:45; He 4:8): es el mismo nombre que el de Jesús, que significa «Jehová salva».',
        { h: 'Pedro, la piedra' },
        'Cuando Pedro confiesa «Tú eres el Cristo, el Hijo del Dios viviente», Jesús le responde: «tú eres Pedro, y sobre esta roca edificaré mi iglesia» (Mt 16:16, 18). En griego se oye el juego de palabras: Πέτρος, Pétros, y πέτρα, pétra, «roca». En arameo, la lengua de Jesús, su nombre era Cefas (Jn 1:42), que también significa piedra.',
        { h: 'Saulo y Pablo' },
        'Hechos 13:9 dice «Saulo, que también es Pablo». Σαῦλος es la forma griega del nombre hebreo Saúl, el rey de su tribu, Benjamín. Παῦλος es un nombre romano que significa «pequeño». Pablo no cambió de nombre al convertirse: usaba los dos, y desde que comienza su misión entre los gentiles, Lucas lo llama por su nombre romano.',
        { h: 'Las terminaciones cambian' },
        'Los nombres griegos cambian de terminación según su función en la frase, como verás en la estación del artículo. Ἰησοῦς es el que hace la acción; Ἰησοῦ, «de Jesús»; Ἰησοῦν, «a Jesús». No te preocupes: la raíz se reconoce igual.',
        { ejercicio: {
          pregunta: 'Lees en Juan 1:40 el nombre Ἀνδρέας. ¿Cómo se lee y quién es?',
          opciones: [
            { t: 'Andréas, Andrés, el hermano de Pedro.', ok: true, por_que: 'Ἀ-νδρέ-ας: a, n, d, r, e, a, s. Es Andrés, que llevó a su hermano a Jesús.' },
            { t: 'Andrēas, un nombre hebreo.', ok: false, por_que: 'La vocal es épsilon (ε), breve, no eta (η). Y Andrés es un nombre griego, «varonil».' },
            { t: 'Anvréas, con v.', ok: false, por_que: 'La letra después de la alfa es la ny (ν), que suena n.' }
          ],
          explicacion: 'Ἀνδρέας es un nombre griego. Andrés y Felipe, de Betsaida, tenían nombres griegos (Jn 12:20-22).'
        } }
      ],
      pensar: 'Jesús le dio a Simón un nombre nuevo: Pedro, «piedra». ¿Qué te dice eso sobre lo que Cristo ve en ti y lo que quiere hacer contigo?'
    },
    {
      id: 'espanol', n: 'Palabras griegas que pasaron al español', ref: 'Mateo 28:19; Romanos 1:1; Filipenses 1:1; Romanos 12:6',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Palabras del Nuevo Testamento que usamos en español',
          cab: ['Griego', 'Se lee', 'Significaba', 'En español'],
          filas: [
            ['ἄγγελος', 'ángelos', 'mensajero', 'ángel'],
            ['ἀπόστολος', 'apóstolos', 'enviado', 'apóstol'],
            ['βαπτίζω', 'baptízō', 'sumergir', 'bautizar'],
            ['ἐκκλησία', 'ekklēsía', 'asamblea', 'iglesia, eclesiástico'],
            ['εὐαγγέλιον', 'euangélion', 'buena noticia', 'evangelio'],
            ['προφήτης', 'profḗtēs', 'el que habla de parte de Dios', 'profeta'],
            ['Χριστός', 'Jristós', 'ungido', 'Cristo'],
            ['ἐπίσκοπος', 'epískopos', 'supervisor', 'obispo, episcopal'],
            ['πρεσβύτερος', 'presbýteros', 'anciano', 'presbítero'],
            ['διάκονος', 'diákonos', 'servidor', 'diácono'],
            ['μάρτυς', 'mártys', 'testigo', 'mártir'],
            ['χάρισμα', 'járisma', 'don de gracia', 'carisma'],
            ['βίβλος', 'bíblos', 'libro', 'Biblia'],
          ],
          nota: 'Algunas palabras vienen del hebreo y pasaron por el griego: ἀμήν (amén), ἀλληλουϊά (aleluya), ὡσαννά (hosanna).'
        } },
        { tipo: 'griego', titulo: 'Mateo 28:19', ref: 'Mateo 28:19', gr: 'πορευθέντες οὖν μαθητεύσατε πάντα τὰ ἔθνη, βαπτίζοντες αὐτοὺς εἰς τὸ ὄνομα τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος,', tr: 'Poreuthéntes un mathētéusate pánta ta éthnē, baptízontes autús eis to ónoma tu Patrós kai tu Hyiú kai tu Hagíu Pnéumatos,',
          palabras: P(['πορευθέντες', 'οὖν', 'μαθητεύσατε', 'πάντα', 'τὰ', 'ἔθνη', 'βαπτίζοντες', 'αὐτοὺς', 'εἰς', 'τὸ', 'ὄνομα', 'τοῦ', 'Πατρὸς', 'καὶ', 'τοῦ', 'Υἱοῦ', 'καὶ', 'τοῦ', 'Ἁγίου', 'Πνεύματος'], [['poreuthéntes', 'yendo'], ['un', 'pues'], ['mathētéusate', 'haced discípulos'], ['pánta', 'a todas'], ['ta', 'las'], ['éthnē', 'naciones'], ['baptízontes', 'bautizando'], ['autús', 'los'], ['eis', 'en'], ['to', 'el'], ['ónoma', 'nombre'], ['tu', 'del'], ['Patrós', 'Padre'], ['kai', 'y'], ['tu', 'del'], ['Hyiú', 'Hijo'], ['kai', 'y'], ['tu', 'del'], ['Hagíu', 'Santo'], ['Pnéumatos', 'Espíritu']]),
          rv: 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;' }
      ],
      texto: [
        'Sin saberlo, ya hablas algo de griego. Muchas palabras de la fe cristiana son griegas que pasaron al latín y después al español. Reconocerlas te da una primera llave para el vocabulario del Nuevo Testamento.',
        { h: 'Las palabras de la iglesia' },
        'La palabra ἐκκλησία significaba «asamblea»: la reunión de los ciudadanos convocados en una ciudad griega. Se usa así en Hechos 19:32, para la asamblea alborotada de Éfeso. Los cristianos la tomaron para su propia reunión: la asamblea del pueblo de Dios. De ahí vienen «iglesia» y «eclesiástico».',
        'De la misma manera, ἀπόστολος es «enviado», ἐπίσκοπος es «supervisor» (de ahí «obispo»), πρεσβύτερος es «anciano» y διάκονος es «servidor». Pablo saluda a los creyentes de Filipos «con los obispos y diáconos» (Fil 1:1). Saber lo que significaban estas palabras en su tiempo ayuda a entender que los ministerios de la iglesia son, ante todo, servicio.',
        { h: 'Bautizar' },
        'El verbo βαπτίζω significa «sumergir», «zambullir». Se usaba para un objeto hundido en un líquido, y también para un barco que se hunde. En la Gran Comisión, del panel, Jesús manda hacer discípulos «bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo» (Mt 28:19). El sentido de la palabra es una de las razones por las que muchas iglesias, entre ellas las pentecostales, bautizan por inmersión.',
        { h: 'Mártir y carisma' },
        'Μάρτυς significa «testigo». Jesús dijo a sus discípulos: «me seréis testigos» (Hch 1:8). Con el tiempo, como tantos testigos de Cristo dieron su vida, la palabra pasó a significar «el que muere por su fe». Χάρισμα significa «don de gracia», y viene de χάρις, «gracia». Pablo la usa para los dones del Espíritu en Romanos 12:6 y 1 Corintios 12. En español, «carisma» suele significar simpatía o atractivo personal, pero en la Biblia es un regalo de Dios para servir a la iglesia.',
        'Una advertencia: el origen de una palabra no siempre explica lo que significa en un pasaje. Lo verás en el recurso de vocabulario. Pero estas palabras sí conservan en español buena parte de su sentido bíblico.',
        { ejercicio: {
          pregunta: '¿Qué significaba la palabra ἐκκλησία antes de usarse para la iglesia?',
          opciones: [
            { t: 'Un edificio religioso.', ok: false, por_que: 'En el Nuevo Testamento, la ἐκκλησία nunca es un edificio, sino las personas reunidas.' },
            { t: 'Una asamblea de personas convocadas.', ok: true, por_que: 'Era la asamblea de los ciudadanos. Los cristianos la usaron para el pueblo de Dios reunido.' },
            { t: 'Un sacerdote.', ok: false, por_que: 'Sacerdote se dice ἱερεύς. La ἐκκλησία es la comunidad.' }
          ],
          explicacion: 'La iglesia, en el Nuevo Testamento, es el pueblo de Dios reunido, no el lugar donde se reúne.'
        } }
      ],
      pensar: 'Μάρτυς, «testigo», terminó significando «el que da la vida por su fe». ¿Qué te cuesta hoy ser testigo de Cristo, y qué te anima a seguir siéndolo?'
    },
    {
      id: 'articulo', n: 'El artículo y las terminaciones que se repiten', ref: 'Mateo 28:19; Juan 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'El artículo', tabla: {
          titulo: 'Las formas del artículo «el, la, lo»',
          cab: ['Función', 'Masculino', 'Femenino', 'Neutro'],
          filas: [
            ['Sujeto, singular', 'ὁ', 'ἡ', 'τό'],
            ['«de», singular', 'τοῦ', 'τῆς', 'τοῦ'],
            ['«a, en», singular', 'τῷ', 'τῇ', 'τῷ'],
            ['Objeto, singular', 'τόν', 'τήν', 'τό'],
            ['Sujeto, plural', 'οἱ', 'αἱ', 'τά'],
            ['«de», plural', 'τῶν', 'τῶν', 'τῶν'],
            ['«a, en», plural', 'τοῖς', 'ταῖς', 'τοῖς'],
            ['Objeto, plural', 'τούς', 'τάς', 'τά'],
          ],
          nota: 'No hace falta memorizarlo ahora: basta con reconocer que todas estas palabras son el artículo.'
        } },
        { tipo: 'tabla', titulo: 'Terminaciones', tabla: {
          titulo: 'Terminaciones que verás muchísimas veces',
          cab: ['Terminación', 'Suele indicar', 'Ejemplo'],
          filas: [
            ['-ος', 'sujeto (masculino)', 'ὁ λόγος, «la palabra»'],
            ['-ου', '«de»', 'τοῦ λόγου, «de la palabra»'],
            ['-ῳ', '«a, en, con»', 'τῷ λόγῳ, «con la palabra»'],
            ['-ον', 'objeto', 'τὸν λόγον, «la palabra» (objeto)'],
            ['-οι, -ων, -οις, -ους', 'las mismas funciones en plural', 'οἱ λόγοι, τῶν λόγων'],
          ],
          nota: 'La terminación cambia y la raíz se mantiene: λογ- es «palabra» en todas las formas.'
        } }
      ],
      texto: [
        'Este recurso no enseña gramática, pero hay dos cosas que vas a ver tantas veces que conviene reconocerlas desde ahora: el artículo y las terminaciones de las palabras.',
        { h: 'El artículo, la palabra más frecuente' },
        'La palabra más frecuente del Nuevo Testamento es el artículo, equivalente a nuestro «el, la, lo». Aparece casi veinte mil veces. A diferencia del español, el artículo griego cambia de forma según la función de la palabra en la frase: ὁ, τοῦ, τῷ, τόν. En la tabla del panel tienes todas sus formas.',
        'Una ayuda: casi todas las formas empiezan con τ, salvo cuatro, que empiezan con vocal y espíritu áspero: ὁ, ἡ, οἱ, αἱ. Si ves una palabra corta que empieza con τ y termina en vocal o en -ς, -ν, probablemente es el artículo.',
        { h: 'Las terminaciones dicen la función' },
        'En español, el orden de las palabras dice quién hace qué: «el perro muerde al hombre» no es lo mismo que «el hombre muerde al perro». En griego, lo dicen las terminaciones. Por eso el orden es más libre, y se usa para dar énfasis.',
        'Mira Juan 1:1. Al final dice καὶ Θεὸς ἦν ὁ Λόγος. Palabra por palabra sería «y Dios era el Verbo», pero el artículo ὁ va con Λόγος y no con Θεός: eso indica que el sujeto es «el Verbo». Por eso la traducción correcta es «y el Verbo era Dios». Juan pone «Dios» al comienzo para darle énfasis: el Verbo es plenamente Dios.',
        'Algunos grupos, como los Testigos de Jehová, traducen «el Verbo era un dios», porque Θεός no lleva artículo. Pero en griego un sustantivo sin artículo antes del verbo no significa «un dios»: en el mismo capítulo, Θεός aparece sin artículo (Jn 1:6, 12, 13, 18) y nadie lo traduce «un dios». Esta es una de las razones por las que vale la pena aprender a leer el griego.',
        { ir: { t: 'Ver «El Verbo era Dios» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/' } },
        { h: 'Tres veces τοῦ' },
        'En Mateo 28:19, en la estación anterior, la Trinidad aparece con el artículo repetido: εἰς τὸ ὄνομα τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος. Tres personas, cada una con su artículo, y un solo «nombre» (ὄνομα, en singular).',
        { ejercicio: {
          pregunta: 'En la frase καὶ Θεὸς ἦν ὁ Λόγος, ¿cómo se sabe cuál es el sujeto?',
          opciones: [
            { t: 'Por el orden: la primera palabra después de καί es el sujeto.', ok: false, por_que: 'En griego el orden es libre. El sujeto no se reconoce por el lugar.' },
            { t: 'Por el artículo: ὁ va con Λόγος, que es el sujeto.', ok: true, por_que: 'El sustantivo con artículo es el sujeto. Por eso se traduce «el Verbo era Dios».' },
            { t: 'No se puede saber: hay que elegir la traducción que uno prefiera.', ok: false, por_que: 'La gramática griega permite reconocer el sujeto con claridad.' }
          ],
          explicacion: 'El artículo y las terminaciones dicen la función de cada palabra. El orden sirve para el énfasis.'
        } }
      ],
      pensar: 'Juan escribió «y el Verbo era Dios» poniendo la palabra «Dios» en el lugar de mayor énfasis. ¿Qué significa para tu fe que Jesús, el que se hizo hombre, sea plenamente Dios?'
    },
    {
      id: 'parecidas', n: 'Palabras que cambian por un signo', ref: 'Juan 3:3; Juan 14:6; Juan 18:33',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Palabras que se distinguen por un espíritu o un acento',
          cab: ['Palabra', 'Se lee', 'Significa', 'Palabra', 'Se lee', 'Significa'],
          filas: [
            ['ἐν', 'en', 'en', 'ἕν', 'hen', 'uno'],
            ['ὁ', 'ho', 'el', 'ὅ', 'ho', 'el cual, lo que'],
            ['ἡ', 'hē', 'la', 'ἤ', 'ē', 'o'],
            ['εἰ', 'ei', 'si', 'εἶ', 'ei', 'eres'],
            ['οὐ', 'u', 'no', 'οὗ', 'hu', 'donde'],
            ['τίς', 'tis', '¿quién?', 'τις', 'tis', 'alguien'],
            ['ἄρα', 'ára', 'entonces', 'ἆρα', 'ára', '¿acaso?'],
          ],
          nota: 'Los manuscritos antiguos no tenían estos signos: el lector distinguía por el contexto, y los editores los agregaron.'
        } },
        { tipo: 'griego', titulo: 'Juan 3:3', ref: 'Juan 3:3', gr: 'ἀπεκρίθη Ἰησοῦς καὶ εἶπεν αὐτῷ Ἀμὴν ἀμὴν λέγω σοι, ἐὰν μή τις γεννηθῇ ἄνωθεν, οὐ δύναται ἰδεῖν τὴν βασιλείαν τοῦ Θεοῦ.', tr: 'Apekríthē Iēsús kai éipen autṓ: Amḗn amḗn légō soi, ean mḗ tis gennēthḗ ánōthen, u dýnatai idéin tēn basiléian tu Theú.',
          palabras: P(['ἀπεκρίθη', 'Ἰησοῦς', 'καὶ', 'εἶπεν', 'αὐτῷ', 'Ἀμὴν', 'ἀμὴν', 'λέγω', 'σοι', 'ἐὰν', 'μή', 'τις', 'γεννηθῇ', 'ἄνωθεν', 'οὐ', 'δύναται', 'ἰδεῖν', 'τὴν', 'βασιλείαν', 'τοῦ', 'Θεοῦ'], [['apekríthē', 'respondió'], ['Iēsús', 'Jesús'], ['kai', 'y'], ['éipen', 'dijo'], ['autṓ', 'le'], ['amḗn', 'de cierto'], ['amḗn', 'de cierto'], ['légō', 'digo'], ['soi', 'te'], ['ean', 'si'], ['mḗ', 'no'], ['tis', 'alguien'], ['gennēthḗ', 'naciere'], ['ánōthen', 'de nuevo, de arriba'], ['u', 'no'], ['dýnatai', 'puede'], ['idéin', 'ver'], ['tēn', 'el'], ['basiléian', 'reino'], ['tu', 'del'], ['Theú', 'Dios']]),
          rv: 'Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios.' }
      ],
      texto: [
        'Ahora que conoces los espíritus y los acentos, vale la pena ver cómo un signo pequeño puede distinguir dos palabras. El panel reúne los casos más frecuentes.',
        { h: 'Un espíritu de diferencia' },
        'Ἐν y ἕν se escriben con las mismas letras. La primera, con espíritu suave, es la preposición «en»: ἐν ἀρχῇ, «en el principio». La segunda, con espíritu áspero, es el número «uno»: Jesús dice ἐγὼ καὶ ὁ Πατὴρ ἕν ἐσμεν, «Yo y el Padre uno somos» (Jn 10:30). Ahí, ἕν está en neutro: no dice «una persona», sino «una cosa», una unidad de ser.',
        { h: 'Un acento de diferencia' },
        'Εἰ, sin acento, es «si»: ἐὰν μή, εἰ μή. Εἶ, con circunflejo, es «eres»: Pilato pregunta Σὺ εἶ ὁ Βασιλεύς; «¿Eres tú el Rey?» (Jn 18:33), y Jesús dice que nadie viene al Padre εἰ μὴ δι’ ἐμοῦ, «sino por mí» (Jn 14:6).',
        'Τίς, con acento, es la pregunta «¿quién?»; τις, sin acento, es «alguien». En Juan 3:3, en el panel, Jesús dice ἐὰν μή τις γεννηθῇ ἄνωθεν, «el que no naciere de nuevo», literalmente «si alguien no nace de nuevo». Ahí τις no lleva acento (el acento que ves en μή se lo presta τις), así que no es una pregunta.',
        { h: 'Una palabra con dos sentidos' },
        'En el mismo versículo hay otra lección. La palabra ἄνωθεν puede significar «de nuevo» y también «de arriba». Nicodemo entiende que se trata de volver a nacer, y pregunta cómo puede hacerlo un hombre siendo viejo (Jn 3:4). Jesús le explica que se trata de nacer del Espíritu, es decir, de arriba. La Reina-Valera traduce «de nuevo», y una nota en muchas Biblias recuerda el otro sentido. Las dos ideas son verdaderas: el nuevo nacimiento es una obra de Dios, que viene de arriba.',
        { ejercicio: {
          pregunta: 'En Juan 10:30, ἐγὼ καὶ ὁ Πατὴρ ἕν ἐσμεν, ¿qué significa ἕν?',
          opciones: [
            { t: '«en», la preposición.', ok: false, por_que: 'La preposición «en» se escribe ἐν, con espíritu suave. ἕν lleva espíritu áspero.' },
            { t: '«uno», el número.', ok: true, por_que: 'Con espíritu áspero, ἕν es el número uno: «Yo y el Padre uno somos».' },
            { t: '«él», un pronombre.', ok: false, por_que: '«Él» es αὐτός. ἕν es el número uno, en neutro.' }
          ],
          explicacion: 'Un espíritu distingue «en» (ἐν) de «uno» (ἕν).'
        } }
      ],
      pensar: 'Jesús le dijo a Nicodemo que necesitaba nacer de nuevo, de arriba. ¿Recuerdas cuándo comenzó en ti esa vida nueva que viene de Dios?'
    },
    {
      id: 'pronunciacion', n: 'La pronunciación de entonces y la de hoy', ref: 'Hechos 2:4-11; 1 Corintios 14:9',
      visual: [
        { tipo: 'tabla', titulo: 'Tres pronunciaciones', tabla: {
          titulo: 'Tres maneras de pronunciar el griego del Nuevo Testamento',
          cab: ['Letra', 'Erasmiana (este recurso)', 'Griego moderno', 'Koiné del siglo I (probable)'],
          filas: [
            ['β', 'b', 'v', 'b, pasando a v'],
            ['γ', 'g', 'g suave; y ante e, i', 'g suave'],
            ['δ', 'd', 'como la d de «cada»', 'd, pasando a la de «cada»'],
            ['η', 'e larga', 'i', 'e cerrada, pasando a i'],
            ['υ', 'ü', 'i', 'ü'],
            ['φ, θ, χ', 'f, th, j', 'f, th, j', 'p, t, k con aire (ph, th, kh)'],
            ['αι', 'ai', 'e', 'e'],
            ['ει', 'ei', 'i', 'i'],
            ['οι', 'oi', 'i', 'ü'],
            ['ευ', 'eu', 'ev o ef', 'eu, pasando a ev'],
            ['espíritu áspero', 'h', 'no se pronuncia', 'h, debilitándose'],
          ],
          nota: 'La pronunciación del siglo I se reconstruye por los errores de ortografía de los papiros; no es segura en todos sus detalles.'
        } },
        { tipo: 'imagen', titulo: 'Erasmo', src: 'img/erasmo-estudio.webp', alt: 'Erasmo de Róterdam, con gorro negro y abrigo forrado de piel, escribe en su escritorio de Basilea rodeado de libros impresos y manuscritos griegos', pie: 'Recreación: Erasmo de Róterdam trabaja en Basilea con manuscritos griegos del Nuevo Testamento.', origen: 'ia' }
      ],
      texto: [
        'Nadie sabe con total seguridad cómo sonaba la voz de Pablo leyendo griego. No tenemos grabaciones, y las lenguas cambian con los siglos. Por eso hoy se usan tres maneras de pronunciar el griego del Nuevo Testamento.',
        { h: 'La pronunciación erasmiana' },
        'En 1528, el humanista holandés Erasmo de Róterdam, el mismo que publicó en 1516 la primera edición impresa del Nuevo Testamento griego, propuso una pronunciación para estudiar el griego antiguo. Su idea era sencilla: cada letra con un sonido propio, para que lo que se oye se pueda escribir sin error. Esa pronunciación, con variantes en cada país, es la que enseñan casi todos los seminarios e institutos del mundo, y la que usa este recurso.',
        'Su ventaja es pedagógica: distingue la η de la ι, la ει de la οι, y así ayuda a escribir y a reconocer las formas. Su desventaja es que nadie habló nunca así: es una pronunciación de estudio.',
        { h: 'El griego moderno' },
        'Los griegos de hoy, y las iglesias ortodoxas, leen el Nuevo Testamento con la pronunciación moderna. En ella, varias letras y diptongos suenan igual: η, ι, υ, ει y οι suenan todas i. Es una pronunciación viva y hermosa, y en algunos puntos está más cerca del siglo I que la erasmiana. Pero hace más difícil distinguir formas al escribir.',
        { h: 'La koiné del siglo I' },
        'Algunos estudiosos proponen reconstruir la pronunciación del tiempo de los apóstoles. La reconstruyen, sobre todo, por los errores de ortografía de los papiros: cuando la gente común escribe ι en lugar de ει, sabemos que ya sonaban igual. Esa pronunciación estaba a medio camino entre la erasmiana y la moderna. Es interesante, pero todavía se discuten sus detalles, y se enseña poco.',
        { h: 'Lo que importa' },
        'Las tres pronunciaciones leen el mismo texto, y ninguna cambia lo que dice. Si después estudias con un maestro que usa otra, te adaptarás en pocos días. Pablo escribió que en la iglesia hay que hablar «palabra bien comprensible» (1 Co 14:9): la pronunciación es un medio para entender, no un fin.',
        { ejercicio: {
          pregunta: '¿Por qué este recurso usa la pronunciación erasmiana?',
          opciones: [
            { t: 'Porque es exactamente como hablaba el apóstol Pablo.', ok: false, por_que: 'La erasmiana es una pronunciación de estudio. Nadie habló nunca exactamente así.' },
            { t: 'Porque es la más enseñada y da a cada letra un sonido propio.', ok: true, por_que: 'Es la de casi todos los seminarios e institutos, y ayuda a reconocer y escribir las formas.' },
            { t: 'Porque las otras pronunciaciones cambian el significado del texto.', ok: false, por_que: 'Las tres pronunciaciones leen el mismo texto con el mismo sentido.' }
          ],
          explicacion: 'La erasmiana es una herramienta de estudio. La moderna y la del siglo I son otras formas válidas de leer el mismo texto.'
        } }
      ],
      pensar: 'En Pentecostés, personas de muchas naciones oyeron hablar las maravillas de Dios cada una en su propia lengua (Hch 2:8-11). ¿Qué te enseña eso sobre el deseo de Dios de hablar a cada pueblo de manera que entienda?'
    },
    {
      id: 'manuscrito', n: 'Leer un manuscrito', ref: '2 Corintios 12:9; Juan 1:14',
      fecha: 200,
      visual: [
        { tipo: 'imagen', titulo: 'Papiro 46', src: '../introduccion-nuevo-testamento/img/foto-p46.jpg', alt: 'Una hoja de papiro con una columna de letras griegas mayúsculas en tinta oscura; el borde inferior está roto', pie: 'Una hoja del papiro 46, hacia el año 200, con 2 Corintios 11:33–12:9, la huida en el canasto y «Bástate mi gracia».', origen: 'foto', licencia: 'Biblioteca Chester Beatty, Dublín. Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Paso a paso', tabla: {
          titulo: 'Juan 1:14 como en un manuscrito',
          cab: ['Paso', 'Texto'],
          filas: [
            ['Así lo copiaría un copista', 'ΚΑΙΟΛΟΓΟϹϹΑΡΞΕΓΕΝΕΤΟΚΑΙΕϹΚΗΝΩϹΕΝΕΝΗΜΙΝ'],
            ['1. Cambia la sigma lunar (Ϲ) por Σ', 'ΚΑΙΟΛΟΓΟΣΣΑΡΞΕΓΕΝΕΤΟΚΑΙΕΣΚΗΝΩΣΕΝΕΝΗΜΙΝ'],
            ['2. Busca palabras conocidas', 'ΚΑΙ · Ο · ΛΟΓΟΣ · ΣΑΡΞ · ΕΓΕΝΕΤΟ · ΚΑΙ · ΕΣΚΗΝΩΣΕΝ · ΕΝ · ΗΜΙΝ'],
            ['3. En minúsculas', 'καὶ ὁ Λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν'],
            ['4. En español', '«Y aquel Verbo fue hecho carne, y habitó entre nosotros»'],
          ],
          nota: 'ἐσκήνωσεν viene de σκηνή, «tienda»: el Verbo «puso su tienda» entre nosotros, como el tabernáculo en el desierto.'
        } }
      ],
      texto: [
        'Para terminar esta ruta, vas a intentar algo que hace unos días te habría parecido imposible: leer el griego como lo escribían los copistas antiguos.',
        { h: 'Cómo enfrentar una línea sin espacios' },
        'Primero, identifica las letras, sobre todo las que engañan: Η es e, Ρ es r, Χ es j, y la sigma lunar (Ϲ) es s. Segundo, busca palabras cortas y frecuentes que ya conoces: ΚΑΙ, «y»; Ο, «el»; ΕΝ, «en»; ΤΟΥ, «del». Tercero, busca las abreviaturas sagradas con una raya encima: ΘΣ, ΚΣ, ΙΣ, ΧΣ. Cuarto, lee en voz alta, sílaba por sílaba, y deja que el oído encuentre las palabras, como hacían los lectores antiguos.',
        'En el panel tienes Juan 1:14 escrito como en un manuscrito, y los pasos para leerlo. Inténtalo antes de mirar las filas de abajo.',
        { h: 'El papiro 46' },
        'La foto del panel es una hoja del papiro 46, copiado hacia el año 200. Contiene las cartas de Pablo, y esta hoja tiene 2 Corintios 11:33 a 12:9, donde el Señor dice a Pablo: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Co 12:9). Si amplías la foto, verás las letras mayúsculas, sin espacios, en una columna. Intenta encontrar una ΚΑΙ o una abreviatura sagrada.',
        'No esperes leer el manuscrito completo: la tinta está gastada, el papiro está roto y la letra de cada copista tiene sus rasgos. Los especialistas pasan años aprendiendo a leerlos. Pero reconocer algunas palabras en una copia de hace casi dos mil años es una experiencia que fortalece la fe: el texto que lees en tu Biblia es el mismo que leían los cristianos del siglo II.',
        { ir: { t: 'Ver «El texto del Nuevo Testamento» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/' } },
        { ejercicio: {
          pregunta: 'En un manuscrito lees ΚΑΙΟΛΟΓΟϹ. ¿Cómo se separa en palabras?',
          opciones: [
            { t: 'ΚΑΙ Ο ΛΟΓΟΣ: «y el Verbo».', ok: true, por_que: 'ΚΑΙ (y), Ο (el), ΛΟΓΟΣ (Verbo). La Ϲ es la sigma lunar.' },
            { t: 'ΚΑΙΟ ΛΟΓΟΣ: «quemó la palabra».', ok: false, por_que: 'No existe ΚΑΙΟ en el contexto. Las palabras cortas frecuentes (ΚΑΙ, Ο) ayudan a separar.' },
            { t: 'ΚΑ ΙΟΛΟ ΓΟΣ.', ok: false, por_que: 'Así se divide en sílabas sin sentido. Busca primero las palabras conocidas.' }
          ],
          explicacion: 'Para leer una línea sin espacios, busca primero las palabras cortas y frecuentes: ΚΑΙ, Ο, ΕΝ, ΤΟΥ.'
        } }
      ],
      pensar: '«Y aquel Verbo fue hecho carne, y habitó entre nosotros» (Jn 1:14). ¿Qué significa para ti que Dios haya puesto su tienda en medio de nuestra vida?'
    }
  ];

  window.__ALFA.leer = leer;
})();
/* El alfabeto griego y la lectura · Taller práctico y datos del recurso */
(() => {
  const { P } = window.__ALFA;

  const taller = [
    {
      id: 'juan-1-1', n: 'Juan 1:1: En el principio era el Verbo', ref: 'Juan 1:1-3; Génesis 1:1',
      visual: [
        { tipo: 'griego', titulo: 'Juan 1:1', ref: 'Juan 1:1', gr: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.', tr: 'En arjḗ ēn ho Lógos, kai ho Lógos ēn pros ton Theón, kai Theós ēn ho Lógos.',
          palabras: P(['Ἐν', 'ἀρχῇ', 'ἦν', 'ὁ', 'Λόγος', 'καὶ', 'ὁ', 'Λόγος', 'ἦν', 'πρὸς', 'τὸν', 'Θεόν', 'καὶ', 'Θεὸς', 'ἦν', 'ὁ', 'Λόγος'], [['en', 'en'], ['arjḗ', 'principio'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo'], ['kai', 'y'], ['ho', 'el'], ['Lógos', 'Verbo'], ['ēn', 'era'], ['pros', 'con'], ['ton', 'el'], ['Theón', 'Dios'], ['kai', 'y'], ['Theós', 'Dios'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo']]),
          rv: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' },
        { tipo: 'tabla', titulo: 'Letra por letra', tabla: {
          titulo: 'Las letras de Juan 1:1',
          cab: ['Palabra', 'Letras', 'Lo que ya sabes'],
          filas: [
            ['Ἐν', 'Ε + ν', 'Espíritu suave: sin h. La ν suena n'],
            ['ἀρχῇ', 'α ρ χ η', 'ρ = r, χ = j, iota suscrita que no se lee'],
            ['ἦν', 'η ν', 'Eta (e larga) con espíritu suave y circunflejo'],
            ['ὁ', 'ο', 'Espíritu áspero: ho'],
            ['Λόγος', 'Λ ο γ ο ς', 'Sigma final; la sílaba fuerte es Λό'],
            ['πρὸς', 'π ρ ο ς', 'La ρ parece p y es r; acento grave'],
            ['Θεόν', 'Θ ε ο ν', 'Theta: th'],
          ],
          nota: 'Si puedes explicar cada fila, ya sabes leer este versículo.'
        } }
      ],
      texto: [
        'El taller junta todo lo que aprendiste. En cada estación vas a leer un versículo completo, palabra por palabra. Primero léelo con las ayudas. Después ocúltalas y léelo en voz alta tres veces, cada vez un poco más rápido.',
        { h: 'Las primeras palabras de Juan' },
        'Juan empieza su evangelio igual que empieza la Biblia: «En el principio» (Gn 1:1). En la Septuaginta, Génesis 1:1 comienza con las mismas dos palabras: ἐν ἀρχῇ. Juan quiere que el lector piense en la creación, y le anuncia que antes de que existiera algo, ya existía el Verbo.',
        'El versículo tiene tres frases, unidas por καί. Cada una dice algo del Verbo. La primera: ἐν ἀρχῇ ἦν ὁ Λόγος, «en el principio era el Verbo»: ya existía cuando todo comenzó. La segunda: ὁ Λόγος ἦν πρὸς τὸν Θεόν, «el Verbo era con Dios»: la preposición πρός indica cercanía y relación, como alguien que está cara a cara con otro. La tercera: Θεὸς ἦν ὁ Λόγος, «el Verbo era Dios».',
        { h: 'Lo que notas al leer en griego' },
        'Al leer en griego, notas cosas que la traducción no puede mostrar del todo. El verbo ἦν, «era», se repite tres veces: no dice que el Verbo «comenzó a ser», sino que «era», continuamente. Y la palabra Λόγος cierra el versículo, después de Θεός, que va primero para recibir el énfasis, como viste en la estación del artículo.',
        '¿Por qué «Verbo»? Λόγος significa «palabra». La Reina-Valera usa «Verbo», del latín verbum, que también significa «palabra». Jesús es la Palabra de Dios: la expresión perfecta de quién es Dios. Lo dice el mismo capítulo: «A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer» (Jn 1:18).',
        { h: 'Para practicar' },
        'Lee la tabla del segundo panel, fila por fila. Si puedes explicar cada letra y cada signo, oculta las ayudas en el primer panel y lee el versículo completo. Es una buena idea aprenderlo de memoria en griego: es corto, es rítmico y es uno de los más importantes de la Biblia.',
        { ejercicio: {
          pregunta: '¿Qué indica la preposición πρός en la frase ὁ Λόγος ἦν πρὸς τὸν Θεόν?',
          opciones: [
            { t: 'Que el Verbo estaba lejos de Dios.', ok: false, por_que: 'πρός indica dirección y cercanía, no distancia.' },
            { t: 'Que el Verbo estaba junto a Dios, en relación con él.', ok: true, por_que: 'πρός indica cercanía y relación: el Verbo estaba cara a cara con Dios.' },
            { t: 'Que el Verbo fue creado por Dios.', ok: false, por_que: 'El versículo dice que el Verbo «era» en el principio. El versículo 3 dice que todas las cosas fueron hechas por él.' }
          ],
          explicacion: 'Juan 1:1 enseña tres verdades: el Verbo es eterno, está en relación con Dios y es Dios.'
        } }
      ],
      pensar: 'El Verbo que estaba con Dios desde el principio se hizo carne para darse a conocer. ¿Qué has conocido de Dios mirando a Jesús en los evangelios?'
    },
    {
      id: 'juan-3-16', n: 'Juan 3:16: De tal manera amó Dios al mundo', ref: 'Juan 3:16-17',
      visual: [
        { tipo: 'griego', titulo: 'Juan 3:16', ref: 'Juan 3:16', gr: 'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον.', tr: 'Hútōs gar ēgápēsen ho Theós ton kósmon, hṓste ton Hyión ton monogenḗ édōken, hína pas ho pistéuōn eis autón mē apólētai all’ éjē zōḗn aiṓnion.',
          palabras: P(['Οὕτως', 'γὰρ', 'ἠγάπησεν', 'ὁ', 'Θεὸς', 'τὸν', 'κόσμον', 'ὥστε', 'τὸν', 'Υἱὸν', 'τὸν', 'μονογενῆ', 'ἔδωκεν', 'ἵνα', 'πᾶς', 'ὁ', 'πιστεύων', 'εἰς', 'αὐτὸν', 'μὴ', 'ἀπόληται', 'ἀλλ’', 'ἔχῃ', 'ζωὴν', 'αἰώνιον'], [['hútōs', 'de tal manera'], ['gar', 'porque'], ['ēgápēsen', 'amó'], ['ho', '(el)'], ['Theós', 'Dios'], ['ton', 'al'], ['kósmon', 'mundo'], ['hṓste', 'que'], ['ton', 'al'], ['Hyión', 'Hijo'], ['ton', 'el'], ['monogenḗ', 'unigénito'], ['édōken', 'dio'], ['hína', 'para que'], ['pas', 'todo'], ['ho', 'el (que)'], ['pistéuōn', 'cree'], ['eis', 'en'], ['autón', 'él'], ['mē', 'no'], ['apólētai', 'se pierda'], ['all’', 'sino que'], ['éjē', 'tenga'], ['zōḗn', 'vida'], ['aiṓnion', 'eterna']]),
          rv: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.' },
        { tipo: 'imagen', titulo: 'Nicodemo', src: 'img/nicodemo-noche.webp', alt: 'Dos hombres conversan de noche en una azotea de Jerusalén a la luz de una lámpara de aceite; uno, mayor y con manto de maestro, escucha con atención', pie: 'Recreación: Nicodemo conversa de noche con Jesús (Jn 3:1-21).', origen: 'ia' }
      ],
      texto: [
        'Juan 3:16 es probablemente el versículo más conocido de la Biblia. Forma parte de la conversación de Jesús con Nicodemo, de noche, en Jerusalén. Leerlo en griego, despacio, te permite ver cómo está construido.',
        { h: 'Cuatro partes' },
        'El versículo tiene cuatro partes. La primera dice quién ama y a quién: οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, «porque de tal manera amó Dios al mundo». La palabra οὕτως, «así, de tal manera», va al comienzo para recibir el énfasis: no solo dice que Dios amó, sino cómo amó.',
        'La segunda dice qué hizo el amor: ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, «que ha dado a su Hijo unigénito». Μονογενής significa «único en su clase»: no hay otro Hijo como él.',
        'La tercera dice para quién: ἵνα πᾶς ὁ πιστεύων εἰς αὐτόν, «para que todo aquel que en él cree». La palabra πᾶς, «todo», abre la puerta a cualquier persona. Y el verbo πιστεύων está en una forma que indica una acción continua: el que «está creyendo».',
        'La cuarta dice el resultado: μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον, «no se pierda, mas tenga vida eterna». Dos destinos opuestos, unidos por ἀλλά, «sino».',
        { h: 'Detalles de lectura' },
        'En este versículo encuentras casi todo lo que aprendiste: el diptongo ου de οὕτως, la eta de ἠγάπησεν, la gamma de μονογενῆ, el espíritu áspero de ὁ y de ἵνα, la ýpsilon con espíritu áspero de Υἱόν, el apóstrofo de ἀλλ’ y la iota suscrita de ἔχῃ.',
        'Una curiosidad: el verbo ἀγαπάω, «amar», es el de la palabra ἀγάπη. En el Nuevo Testamento describe el amor que da, el amor que busca el bien del otro aunque cueste. Juan 3:16 muestra su medida: Dios dio a su Hijo.',
        { ejercicio: {
          pregunta: '¿Por qué la palabra οὕτως va al comienzo del versículo?',
          opciones: [
            { t: 'Porque en griego el adverbio siempre va primero.', ok: false, por_que: 'El orden griego es libre. El adverbio no tiene un lugar fijo.' },
            { t: 'Para darle énfasis: la manera en que Dios amó.', ok: true, por_que: 'Al ir primero, οὕτως subraya el modo del amor de Dios, que se explica después: dio a su Hijo.' },
            { t: 'Porque es la palabra más larga.', ok: false, por_que: 'La longitud no determina el orden.' }
          ],
          explicacion: 'En griego, lo que va al comienzo suele llevar el énfasis.'
        } }
      ],
      pensar: 'Dios no solo dijo que nos amaba: dio a su Hijo. ¿Cómo puedes mostrar con hechos, y no solo con palabras, el amor que has recibido?'
    },
    {
      id: 'padre-nuestro', n: 'El Padre Nuestro: Mateo 6:10-11', ref: 'Mateo 6:9-13',
      visual: [
        { tipo: 'griego', titulo: 'Mateo 6:10', ref: 'Mateo 6:10', gr: 'ἐλθάτω ἡ βασιλεία σου· γενηθήτω τὸ θέλημά σου, ὡς ἐν οὐρανῷ καὶ ἐπὶ γῆς·', tr: 'Elthátō hē basiléia su; genēthḗtō to thélēmá su, hōs en uranṓ kai epí gēs;',
          palabras: P(['ἐλθάτω', 'ἡ', 'βασιλεία', 'σου', 'γενηθήτω', 'τὸ', 'θέλημά', 'σου', 'ὡς', 'ἐν', 'οὐρανῷ', 'καὶ', 'ἐπὶ', 'γῆς'], [['elthátō', 'venga'], ['hē', 'el'], ['basiléia', 'reino'], ['su', 'tuyo'], ['genēthḗtō', 'hágase'], ['to', 'la'], ['thélēmá', 'voluntad'], ['su', 'tuya'], ['hōs', 'como'], ['en', 'en'], ['uranṓ', 'cielo'], ['kai', 'también'], ['epí', 'sobre'], ['gēs', 'tierra']]),
          rv: 'Venga tu reino. Hágase tu voluntad, como en el cielo, así también en la tierra.' },
        { tipo: 'griego', titulo: 'Mateo 6:11', ref: 'Mateo 6:11', gr: 'Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον·', tr: 'Ton árton hēmṓn ton epiúsion dos hēmín sḗmeron;',
          palabras: P(['Τὸν', 'ἄρτον', 'ἡμῶν', 'τὸν', 'ἐπιούσιον', 'δὸς', 'ἡμῖν', 'σήμερον'], [['ton', 'el'], ['árton', 'pan'], ['hēmṓn', 'nuestro'], ['ton', 'el'], ['epiúsion', 'de cada día'], ['dos', 'da'], ['hēmín', 'nos'], ['sḗmeron', 'hoy']]),
          rv: 'El pan nuestro de cada día, dánoslo hoy.' }
      ],
      texto: [
        'En la ruta II leíste el comienzo del Padre Nuestro (Mt 6:9). Ahora vas a leer dos de sus peticiones. Son frases cortas, con palabras que se repiten, ideales para practicar.',
        { h: 'Tres peticiones con la misma forma' },
        'Las tres primeras peticiones tienen la misma forma: un verbo al comienzo y algo de Dios después. Ἁγιασθήτω τὸ ὄνομά σου, «santificado sea tu nombre». Ἐλθάτω ἡ βασιλεία σου, «venga tu reino». Γενηθήτω τὸ θέλημά σου, «hágase tu voluntad». Los tres verbos terminan en -τω, una terminación que expresa un deseo o un mandato: «que sea», «que venga», «que se haga». Y las tres frases terminan con σου, «tuyo». Antes de pedir por nosotros, oramos por el nombre, el reino y la voluntad de Dios.',
        'Lee en voz alta el primer panel. Fíjate en la iota suscrita de οὐρανῷ, que no se pronuncia, y en el punto alto (·) que separa las peticiones.',
        { h: 'El pan de cada día' },
        'El segundo panel tiene la cuarta petición. La palabra ἐπιούσιος es una de las más curiosas del Nuevo Testamento: aparece solo aquí y en el pasaje paralelo de Lucas, y casi en ningún otro escrito griego. Por eso los estudiosos discuten su sentido exacto: «de cada día», «necesario» o «de mañana». La Reina-Valera traduce «de cada día», que es la interpretación más antigua y extendida. En cualquier caso, la petición enseña a depender de Dios día a día, como Israel con el maná.',
        { h: 'Una diferencia entre las ediciones' },
        'Si sigues leyendo hasta el versículo 13, verás que la edición de Nestle termina con ἀπὸ τοῦ πονηροῦ, «del mal», sin la frase «porque tuyo es el reino, y el poder, y la gloria, por todos los siglos. Amén», que sí está en la Reina-Valera. Esa frase falta en los manuscritos más antiguos de Mateo y está en la mayoría de los posteriores. Es una alabanza fiel a toda la Escritura (1 Cr 29:11), y las iglesias la siguen orando. Este tipo de diferencias se estudia en De la Biblia a nosotros.',
        { ir: { t: 'Ver los pasajes discutidos en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/' } },
        { ejercicio: {
          pregunta: '¿Qué tienen en común ἁγιασθήτω, ἐλθάτω y γενηθήτω?',
          opciones: [
            { t: 'Son sustantivos femeninos.', ok: false, por_que: 'Son verbos: santificar, venir, hacerse.' },
            { t: 'Son verbos que terminan en -τω y expresan un deseo: «sea», «venga», «hágase».', ok: true, por_que: 'La terminación -τω expresa un mandato o deseo en tercera persona.' },
            { t: 'Son nombres de ángeles.', ok: false, por_que: 'Son las tres primeras peticiones de la oración.' }
          ],
          explicacion: 'Las tres primeras peticiones tienen la misma forma: un verbo en -τω y algo de Dios, con σου, «tuyo».'
        } }
      ],
      pensar: 'Jesús enseñó a pedir primero por el nombre, el reino y la voluntad de Dios, y después por el pan. ¿Cómo sería tu oración de hoy si siguieras ese orden?'
    },
    {
      id: 'romanos-1-16', n: 'Romanos 1:16: No me avergüenzo del evangelio', ref: 'Romanos 1:16-17',
      visual: [
        { tipo: 'griego', titulo: 'Romanos 1:16', ref: 'Romanos 1:16', gr: 'οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον· δύναμις γὰρ Θεοῦ ἐστιν εἰς σωτηρίαν παντὶ τῷ πιστεύοντι, Ἰουδαίῳ τε πρῶτον καὶ Ἕλληνι.', tr: 'U gar epaisjýnomai to euangélion; dýnamis gar Theú estin eis sōtērían pantí tō pistéuonti, Iudáiō te prṓton kai Héllēni.',
          palabras: P(['οὐ', 'γὰρ', 'ἐπαισχύνομαι', 'τὸ', 'εὐαγγέλιον', 'δύναμις', 'γὰρ', 'Θεοῦ', 'ἐστιν', 'εἰς', 'σωτηρίαν', 'παντὶ', 'τῷ', 'πιστεύοντι', 'Ἰουδαίῳ', 'τε', 'πρῶτον', 'καὶ', 'Ἕλληνι'], [['u', 'no'], ['gar', 'porque'], ['epaisjýnomai', 'me avergüenzo'], ['to', 'del'], ['euangélion', 'evangelio'], ['dýnamis', 'poder'], ['gar', 'porque'], ['Theú', 'de Dios'], ['estin', 'es'], ['eis', 'para'], ['sōtērían', 'salvación'], ['pantí', 'a todo'], ['tō', 'el (que)'], ['pistéuonti', 'cree'], ['Iudáiō', 'al judío'], ['te', 'tanto'], ['prṓton', 'primeramente'], ['kai', 'y'], ['Héllēni', 'al griego']]),
          rv: 'Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.' },
        { tipo: 'imagen', titulo: 'La carta', src: '../introduccion-nuevo-testamento/img/int-romanos-tercio.webp', alt: 'Pablo dicta una carta a un escriba que escribe sobre un papiro en una casa de Corinto', pie: 'Recreación: Pablo dicta la carta a los Romanos a Tercio (Ro 16:22).', origen: 'ia' }
      ],
      texto: [
        'Pablo escribió a los Romanos desde Corinto, en el invierno del 56 al 57, a una iglesia que no conocía personalmente. En los versículos 16 y 17 del primer capítulo resume el tema de toda la carta. Leerlo en griego es leer el corazón del evangelio de Pablo.',
        { h: 'Palabra por palabra' },
        'Οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον: «porque no me avergüenzo del evangelio». El verbo ἐπαισχύνομαι es largo; divídelo en sílabas: ἐ-παι-σχύ-νο-μαι. Tiene el diptongo αι dos veces y la ji, que suena j.',
        'Δύναμις γὰρ Θεοῦ ἐστιν: «porque es poder de Dios». La palabra δύναμις, «poder», dio origen a «dinamita» y «dinámico». Pero cuidado: el evangelio no es poder de Dios porque explote como dinamita, sino porque Dios mismo obra en él para salvar. Es la misma palabra que Jesús usa en Hechos 1:8: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo».',
        'Εἰς σωτηρίαν παντὶ τῷ πιστεύοντι: «para salvación a todo aquel que cree». Otra vez πᾶς, «todo», y otra vez el verbo πιστεύω, «creer», como en Juan 3:16. Fíjate en la iota suscrita de τῷ.',
        'Ἰουδαίῳ τε πρῶτον καὶ Ἕλληνι: «al judío primeramente, y también al griego». Ἕλλην, «griego», es como los griegos se llamaban a sí mismos. De ahí viene «helenismo».',
        { h: 'Lo que se ve en griego' },
        'La palabra γάρ, «porque», aparece dos veces. Pablo encadena razones: no me avergüenzo, porque el evangelio es poder de Dios, y en el versículo siguiente, porque en él se revela la justicia de Dios. Leer despacio en griego ayuda a seguir el hilo de su argumento.',
        { ejercicio: {
          pregunta: '¿Cómo se divide en sílabas ἐπαισχύνομαι?',
          opciones: [
            { t: 'ἐ-πα-ισ-χύ-νο-μα-ι', ok: false, por_que: 'αι es un diptongo: forma una sola sílaba.' },
            { t: 'ἐ-παι-σχύ-νο-μαι', ok: true, por_que: 'Cinco sílabas: e-pai-sjý-no-mai.' },
            { t: 'ἐπαι-σχύνο-μαι', ok: false, por_que: 'Cada sílaba tiene una sola vocal o diptongo.' }
          ],
          explicacion: 'Divide las palabras largas en sílabas, respetando los diptongos.'
        } }
      ],
      pensar: 'Pablo no se avergonzaba del evangelio, aunque en Roma muchos lo despreciaban. ¿En qué situación te cuesta hablar de Cristo, y cómo te anima saber que el evangelio es poder de Dios?'
    },
    {
      id: 'hechos-2-4', n: 'Hechos 2:4: Fueron todos llenos del Espíritu Santo', ref: 'Hechos 2:1-11; Hechos 1:8',
      fecha: 33,
      visual: [
        { tipo: 'griego', titulo: 'Hechos 2:4', ref: 'Hechos 2:4', gr: 'καὶ ἐπλήσθησαν πάντες Πνεύματος Ἁγίου, καὶ ἤρξαντο λαλεῖν ἑτέραις γλώσσαις καθὼς τὸ Πνεῦμα ἐδίδου ἀποφθέγγεσθαι αὐτοῖς.', tr: 'Kai eplḗsthēsan pántes Pnéumatos Hagíu, kai ḗrxanto laléin hetérais glṓssais kathṓs to Pnéuma edídu apofthéngesthai autóis.',
          palabras: P(['καὶ', 'ἐπλήσθησαν', 'πάντες', 'Πνεύματος', 'Ἁγίου', 'καὶ', 'ἤρξαντο', 'λαλεῖν', 'ἑτέραις', 'γλώσσαις', 'καθὼς', 'τὸ', 'Πνεῦμα', 'ἐδίδου', 'ἀποφθέγγεσθαι', 'αὐτοῖς'], [['kai', 'y'], ['eplḗsthēsan', 'fueron llenos'], ['pántes', 'todos'], ['Pnéumatos', 'del Espíritu'], ['Hagíu', 'Santo'], ['kai', 'y'], ['ḗrxanto', 'comenzaron'], ['laléin', 'a hablar'], ['hetérais', 'en otras'], ['glṓssais', 'lenguas'], ['kathṓs', 'según'], ['to', 'el'], ['Pnéuma', 'Espíritu'], ['edídu', 'daba'], ['apofthéngesthai', 'que hablasen'], ['autóis', 'les']]),
          rv: 'Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.' },
        { tipo: 'imagen', titulo: 'Pentecostés', src: '../movimiento-pentecostal/img/pentecostes.webp', alt: 'En una sala alta de Jerusalén, unos ciento veinte discípulos, hombres y mujeres, oran juntos; sobre la cabeza de cada uno se posa una pequeña llama', pie: 'Recreación: el día de Pentecostés en Jerusalén (Hch 2:1-4).', origen: 'ia' }
      ],
      texto: [
        'El día de Pentecostés, cincuenta días después de la resurrección, el Espíritu Santo vino sobre los discípulos reunidos en Jerusalén. Hechos 2:4 describe lo que pasó en una sola frase. Leerla en griego te permite ver con precisión cada palabra.',
        { h: 'Palabra por palabra' },
        'Καὶ ἐπλήσθησαν πάντες Πνεύματος Ἁγίου: «y fueron todos llenos del Espíritu Santo». El verbo πίμπλημι, llenar, es el que Lucas usa una y otra vez para hablar de la llenura del Espíritu (Lc 1:15, 41, 67; Hch 4:8, 31; 9:17; 13:9). Y πάντες, «todos»: no solo los apóstoles, sino los ciento veinte.',
        'Καὶ ἤρξαντο λαλεῖν ἑτέραις γλώσσαις: «y comenzaron a hablar en otras lenguas». Γλῶσσα significa «lengua», tanto el órgano como el idioma. Ἕτερος, «otro», «distinto»: eran lenguas distintas de la suya, como muestran los visitantes que oyeron cada uno en su propio idioma (Hch 2:6-11).',
        'Καθὼς τὸ Πνεῦμα ἐδίδου ἀποφθέγγεσθαι αὐτοῖς: «según el Espíritu les daba que hablasen». El verbo ἐδίδου, «daba», está en una forma que indica acción continua: el Espíritu les iba dando las palabras. Y ἀποφθέγγεσθαι es un verbo poco común, que se usa para hablar con claridad y solemnidad, a veces bajo inspiración (Hch 2:14; 26:25). Ellos hablaban, y el Espíritu les daba qué hablar.',
        { h: 'Detalles de lectura' },
        'El versículo es un buen repaso. Tiene dos gammas nasales (ἀποφθέγγεσθαι), dos espíritus ásperos (Ἁγίου, ἑτέραις), una doble sigma (γλώσσαις), el diptongo ευ de Πνεύματος y el diptongo ου de Ἁγίου. Léelo primero con las ayudas y después sin ellas.',
        'Lo que pasó en Pentecostés no quedó en el pasado. Pedro anunció ese mismo día: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39).',
        { ir: { t: 'Ver «El bautismo en el Espíritu Santo» en El Espíritu Santo', a: '../../espiritu-santo/#bautismo/1' } },
        { ir: { t: 'Ver Pentecostés en Hechos de los Apóstoles', a: '../../hechos/' } },
        { ejercicio: {
          pregunta: '¿Qué indica la palabra ἑτέραις en ἑτέραις γλώσσαις?',
          opciones: [
            { t: 'Que hablaban en su propia lengua, pero más fuerte.', ok: false, por_que: 'Ἕτερος significa «otro», «distinto». Eran lenguas distintas de la propia.' },
            { t: 'Que hablaban en lenguas distintas de la suya.', ok: true, por_que: 'Ἕτερος significa otro, distinto. Los visitantes oían a los galileos hablar en sus propios idiomas (Hch 2:7-8).' },
            { t: 'Que hablaban solo en hebreo.', ok: false, por_que: 'El texto dice «otras lenguas», y luego enumera muchas naciones que las oyeron.' }
          ],
          explicacion: 'ἑτέραις γλώσσαις: «en otras lenguas», distintas de la propia, según el Espíritu les daba que hablasen.'
        } }
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es «para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). ¿Estás buscando ser lleno del Espíritu Santo para ser testigo de Cristo?'
    },
    {
      id: 'seguir', n: 'Cómo seguir aprendiendo', ref: 'Hechos 17:11; 2 Timoteo 2:15; Juan 5:39',
      visual: [
        { tipo: 'griego', titulo: 'Juan 8:32', ref: 'Juan 8:32', gr: 'καὶ γνώσεσθε τὴν ἀλήθειαν, καὶ ἡ ἀλήθεια ἐλευθερώσει ὑμᾶς.', tr: 'Kai gnṓsesthe tēn alḗtheian, kai hē alḗtheia eleutherṓsei hymás.',
          palabras: P(['καὶ', 'γνώσεσθε', 'τὴν', 'ἀλήθειαν', 'καὶ', 'ἡ', 'ἀλήθεια', 'ἐλευθερώσει', 'ὑμᾶς'], [['kai', 'y'], ['gnṓsesthe', 'conoceréis'], ['tēn', 'la'], ['alḗtheian', 'verdad'], ['kai', 'y'], ['hē', 'la'], ['alḗtheia', 'verdad'], ['eleutherṓsei', 'hará libres'], ['hymás', 'os']]),
          rv: 'y conoceréis la verdad, y la verdad os hará libres.' },
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Herramientas para seguir',
          cab: ['Herramienta', 'Para qué sirve'],
          filas: [
            ['La tabla del alfabeto de este recurso', 'Repasar las letras, los diptongos y los signos, y practicar la lectura'],
            ['Vocabulario y gramática básica del griego del NT', 'Recurso siguiente del sitio: las 1.124 palabras más frecuentes, el sustantivo y el verbo'],
            ['Interlineal griego–español (NT)', 'Recurso del sitio: el Nuevo Testamento palabra por palabra'],
            ['Concordancia con números de Strong', 'Encontrar todas las veces que aparece una palabra griega'],
            ['Un Nuevo Testamento griego impreso o digital', 'Leer cualquier pasaje en griego'],
          ],
          nota: 'El orden importa: primero leer con soltura, después vocabulario y gramática, y luego el interlineal.'
        } }
      ],
      texto: [
        'Si llegaste hasta aquí, ya puedes leer griego del Nuevo Testamento. Despacio, con ayudas y equivocándote, pero puedes. Lo que sigue es práctica.',
        { h: 'Un hábito de diez minutos' },
        'La lectura se afianza con repetición breve y frecuente. Te sugerimos tres ejercicios. Repasa el alfabeto en el modo de práctica de la tabla hasta reconocer cada letra sin dudar. Vuelve a leer en voz alta los versículos del taller, sin ayudas, hasta que salgan de corrido. Y lee cada día un versículo nuevo de un pasaje que conozcas bien en español: el prólogo de Juan (Jn 1:1-14), las bienaventuranzas (Mt 5:3-12) o 1 Corintios 13.',
        { ir: { t: 'Abrir la tabla del alfabeto griego', a: 'alfabeto/' } },
        { h: 'Lo que viene' },
        'Saber leer es el primer paso. El recurso Vocabulario y gramática básica del griego del NT te enseña las palabras más frecuentes, cómo funcionan los sustantivos y los verbos, y qué significan las terminaciones que viste en el taller. Después, el Interlineal griego–español te permite leer cualquier pasaje del Nuevo Testamento con la glosa de cada palabra.',
        { ir: { t: 'Seguir con Vocabulario y gramática básica del griego del NT', a: '../../gramatica-griega/' } },
        { ir: { t: 'Abrir el Interlineal griego–español (NT)', a: '../../interlineal-griego/' } },
        'Mientras tanto, una concordancia con los números de Strong es muy útil: a cada palabra griega le asigna un número, y con él puedes encontrar todos los pasajes donde aparece, aunque la traducción la vierta de maneras distintas. Si ya recorriste El alfabeto hebreo, te será fácil: es el mismo método.',
        { ir: { t: 'Repasar El alfabeto hebreo y la lectura', a: '../../alfabeto-hebreo/' } },
        { h: 'Con humildad y con oración' },
        'Conocer algo de griego es una herramienta valiosa, pero no te convierte en experto. Desconfía de las enseñanzas que dicen que «en el griego original» la Biblia dice algo muy distinto de lo que dicen todas las traducciones serias. Usa lo que aprendiste para leer con más atención, para comparar traducciones con respeto y para escuchar mejor a quienes estudiaron más.',
        'Sobre todo, recuerda para qué estudias. Jesús dijo a los que escudriñaban las Escrituras que ellas «dan testimonio de mí» (Jn 5:39). El fin del estudio es conocer mejor a Cristo. En el panel tienes su promesa: «conoceréis la verdad, y la verdad os hará libres» (Jn 8:32). Léela en griego, y hazla tu oración.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad» (2 Ti 2:15). ¿Qué paso concreto vas a dar este mes para seguir creciendo en el estudio de la Palabra?'
    }
  ];

  const A = window.__ALFA;
  delete window.__ALFA;
  window.RUTA_DATA = {
    titulo: 'El alfabeto griego y la lectura',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto griego: Nuevo Testamento de Eberhard Nestle (1904), dominio público, según la edición de biblicalhumanities.org (morfología CC0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'El alfabeto griego', n: 'I. Panorama', info: 'La lengua del Nuevo Testamento, su origen y cómo se escribía', estaciones: A.panorama },
      { id: 'letras', grupo: 'El alfabeto griego', n: 'II. Las 24 letras', info: 'Forma, nombre, sonido y valor de cada letra, y las abreviaturas sagradas', estaciones: A.letras },
      { id: 'signos', grupo: 'El alfabeto griego', n: 'III. Vocales, diptongos y signos', info: 'Vocales largas y breves, diptongos, espíritus, acentos y puntuación', estaciones: A.signos },
      { id: 'leer', grupo: 'El alfabeto griego', n: 'IV. A leer', info: 'Sílabas, nombres, palabras conocidas, el artículo, la pronunciación y los manuscritos', estaciones: A.leer },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes famosos, palabra por palabra', estaciones: taller }
    ]
  };
})();
