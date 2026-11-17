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
        { tipo: 'griego', titulo: 'Juan 1:1', ref: 'Juan 1:1', gr: '@@n1904:jn/1/1', tr: 'En arjḗ ēn ho Lógos, kai ho Lógos ēn pros ton Theón, kai Theós ēn ho Lógos.',
          palabras: P('@@n1904p:jn/1/1', [['en', 'en'], ['arjḗ', 'principio'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo, Palabra'], ['kai', 'y'], ['ho', 'el'], ['Lógos', 'Verbo'], ['ēn', 'era'], ['pros', 'con, junto a'], ['ton', 'el'], ['Theón', 'Dios'], ['kai', 'y'], ['Theós', 'Dios'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo']]),
          rv: '@@jn/1/1' },
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
        { tipo: 'griego', titulo: 'Juan 11:35', ref: 'Juan 11:35', gr: '@@n1904:jn/11/35', tr: 'Edákrysen ho Iēsús.',
          palabras: P('@@n1904p:jn/11/35', [['edákrysen', 'lloró'], ['ho', 'el'], ['Iēsús', 'Jesús']]),
          rv: '@@jn/11/35' },
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
