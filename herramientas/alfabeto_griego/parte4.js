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
        { tipo: 'griego', titulo: 'Juan 20:31', ref: 'Juan 20:31', gr: '@@n1904:jn/20/31', tr: 'Táuta de gégraptai hína pistéuēte hoti Iēsús estin ho Jristós ho Hyiós tu Theú, kai hína pistéuontes zōḗn éjēte en tō onómati autú.',
          palabras: P('@@n1904p:jn/20/31', [['táuta', 'estas cosas'], ['de', 'pero'], ['gégraptai', 'se han escrito'], ['hína', 'para que'], ['pistéuēte', 'creáis'], ['hoti', 'que'], ['Iēsús', 'Jesús'], ['estin', 'es'], ['ho', 'el'], ['Jristós', 'Cristo'], ['ho', 'el'], ['Hyiós', 'Hijo'], ['tu', 'del'], ['Theú', 'Dios'], ['kai', 'y'], ['hína', 'para que'], ['pistéuontes', 'creyendo'], ['zōḗn', 'vida'], ['éjēte', 'tengáis'], ['en', 'en'], ['tō', 'el'], ['onómati', 'nombre'], ['autú', 'suyo']]),
          rv: '@@jn/20/31' }
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
        { tipo: 'griego', titulo: 'Mateo 28:19', ref: 'Mateo 28:19', gr: '@@n1904:mt/28/19', tr: 'Poreuthéntes un mathētéusate pánta ta éthnē, baptízontes autús eis to ónoma tu Patrós kai tu Hyiú kai tu Hagíu Pnéumatos,',
          palabras: P('@@n1904p:mt/28/19', [['poreuthéntes', 'yendo'], ['un', 'pues'], ['mathētéusate', 'haced discípulos'], ['pánta', 'a todas'], ['ta', 'las'], ['éthnē', 'naciones'], ['baptízontes', 'bautizando'], ['autús', 'los'], ['eis', 'en'], ['to', 'el'], ['ónoma', 'nombre'], ['tu', 'del'], ['Patrós', 'Padre'], ['kai', 'y'], ['tu', 'del'], ['Hyiú', 'Hijo'], ['kai', 'y'], ['tu', 'del'], ['Hagíu', 'Santo'], ['Pnéumatos', 'Espíritu']]),
          rv: '@@mt/28/19' }
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
        { tipo: 'griego', titulo: 'Juan 3:3', ref: 'Juan 3:3', gr: '@@n1904:jn/3/3', tr: 'Apekríthē Iēsús kai éipen autṓ: Amḗn amḗn légō soi, ean mḗ tis gennēthḗ ánōthen, u dýnatai idéin tēn basiléian tu Theú.',
          palabras: P('@@n1904p:jn/3/3', [['apekríthē', 'respondió'], ['Iēsús', 'Jesús'], ['kai', 'y'], ['éipen', 'dijo'], ['autṓ', 'le'], ['amḗn', 'de cierto'], ['amḗn', 'de cierto'], ['légō', 'digo'], ['soi', 'te'], ['ean', 'si'], ['mḗ', 'no'], ['tis', 'alguien'], ['gennēthḗ', 'naciere'], ['ánōthen', 'de nuevo, de arriba'], ['u', 'no'], ['dýnatai', 'puede'], ['idéin', 'ver'], ['tēn', 'el'], ['basiléian', 'reino'], ['tu', 'del'], ['Theú', 'Dios']]),
          rv: '@@jn/3/3' }
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
