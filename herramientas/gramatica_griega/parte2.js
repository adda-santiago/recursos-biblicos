/* Ruta II. El sustantivo y sus compañeros (ver el encabezado de parte1.js) */
(() => {
  const { G } = window.__GG;
  const sustantivo = [
    {
      id: 'casos', n: 'Los cinco casos: quién hace qué', ref: 'Marcos 1:11',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-casos.svg', alt: 'Cinco tarjetas, una por caso: nominativo (el sujeto, ὁ λόγος), genitivo (de quién, τοῦ λόγου), dativo (a quién o con qué, τῷ λόγῳ), acusativo (el complemento directo, τὸν λόγον) y vocativo (a quien se llama, Κύριε), con la pregunta que responde cada uno', pie: 'Cada caso responde una pregunta.', origen: 'esquema' },
        G('Marcos 1:11', 'Marcos 1:11', '@@n1904:mr/1/11', '@@n1904tr:mr/1/11', '@@n1904t:mr/1/11',
          ['y', 'una voz', 'vino', 'de', 'los', 'cielos', 'tú', 'eres', 'el', 'Hijo', 'de mí', 'el', 'amado', 'en', 'ti', 'me complací'],
          '@@mr/1/11')
      ],
      texto: [
        'El caso es la forma que toma un sustantivo según su función en la frase. El griego del Nuevo Testamento tiene cinco casos. Cada uno responde a una pregunta.',
        { h: 'Los cinco' },
        'El nominativo responde «¿quién?» o «¿qué?»: es el sujeto. En Marcos 1:11, φωνή, «una voz», es el sujeto de «vino», y ὁ υἱός es lo que se dice del sujeto «tú». El genitivo responde «¿de quién?» o «¿de qué?»: ἐκ τῶν οὐρανῶν, «de los cielos», y μου, «de mí», es decir, «mi». El dativo responde «¿a quién?», «¿para quién?» o «¿con qué?»: ἐν σοί, «en ti». El acusativo responde «¿qué?» o «¿a quién?» después del verbo: es el complemento directo. Y el vocativo se usa para llamar a alguien: Κύριε, «¡Señor!».',
        'En todo el Nuevo Testamento, sumando sustantivos, adjetivos y artículos, el acusativo aparece 16.836 veces, el nominativo 16.804, el genitivo 13.521, el dativo 8.193 y el vocativo solo 596.',
        { h: 'Cómo se reconocen' },
        'Cada caso tiene sus terminaciones, que varían según el grupo al que pertenece la palabra, llamado declinación. Lo verás en las estaciones siguientes. Por ahora fíjate en el artículo, que es el mejor ayudante: ὁ en nominativo, τοῦ en genitivo, τῷ en dativo y τόν en acusativo, para el masculino singular. Si una palabra te confunde, mira el artículo que la acompaña.',
        { h: 'Los casos y las preposiciones' },
        'Las preposiciones griegas siempre van con un caso determinado. ἐν va con dativo, εἰς con acusativo, ἐκ con genitivo. Por eso en ἐν σοί el pronombre está en dativo y en ἐκ τῶν οὐρανῶν el sustantivo está en genitivo. Algunas preposiciones cambian de sentido según el caso, como verás en la estación de las preposiciones.',
        'En Marcos 1:11 el Padre habla desde el cielo en el bautismo de Jesús. Con pocas palabras, los casos ordenan todo: la voz viene de los cielos, el Hijo es amado, y en él el Padre se complace.',
        { ejercicio: {
          pregunta: '¿Qué pregunta responde el genitivo?',
          opciones: [
            { t: '¿Quién hace la acción?', ok: false, por_que: 'Esa pregunta la responde el nominativo, el caso del sujeto.' },
            { t: '¿De quién o de qué?', ok: true, por_que: 'El genitivo indica posesión, origen o relación: τοῦ θεοῦ, «de Dios».' },
            { t: '¿A quién se llama?', ok: false, por_que: 'Para llamar a alguien se usa el vocativo: Κύριε, «¡Señor!».' }
          ],
          explicacion: 'Nominativo: quién; genitivo: de quién; dativo: a quién o con qué; acusativo: qué o a quién recibe la acción; vocativo: a quien se llama.'
        } }
      ],
      pensar: '«Tú eres mi Hijo amado; en ti tengo complacencia» (Mr 1:11). Por la fe en Cristo, también tú eres hijo amado de Dios (Gá 3:26). ¿Vives como alguien que es amado por su Padre?'
    },
    {
      id: 'nominativo', n: 'Nominativo y vocativo', ref: 'Mateo 6:9; Juan 20:28',
      visual: [
        G('Mateo 6:9', 'Mateo 6:9', '@@n1904:mt/6/9', '@@n1904tr:mt/6/9', '@@n1904t:mt/6/9',
          ['así', 'pues', 'orad', 'vosotros', '¡Padre!', 'de nosotros', 'el (que estás)', 'en', 'los', 'cielos', 'sea santificado', 'el', 'nombre', 'de ti'],
          '@@mt/6/9'),
        { tipo: 'tabla', titulo: 'Formas', tabla: {
          titulo: 'Nominativo y vocativo de algunas palabras',
          cab: ['Nominativo', 'Vocativo', 'Ejemplo'],
          filas: [
            ['πατήρ, padre', 'πάτερ', 'Πάτερ ἡμῶν, «Padre nuestro» (Mt 6:9)'],
            ['κύριος, señor', 'κύριε', 'Κύριε, σὺ οἶδας, «Señor, tú sabes» (Jn 21:15)'],
            ['θυγάτηρ, hija', 'θύγατερ o θυγάτηρ', 'Θυγάτηρ, ἡ πίστις σου… (Mr 5:34)'],
            ['Ἰησοῦς, Jesús', 'Ἰησοῦ', 'Υἱὲ Δαυεὶδ Ἰησοῦ, «Jesús, Hijo de David» (Mr 10:47)'],
            ['θεός, Dios', 'θεός o θεέ', 'Ὁ κύριός μου καὶ ὁ θεός μου (Jn 20:28)'],
          ],
          nota: 'En plural, el vocativo es siempre igual al nominativo.'
        } }
      ],
      texto: [
        'El nominativo es la forma del diccionario: cuando buscas una palabra, la encuentras en nominativo singular. Es el caso del sujeto y también de lo que se dice del sujeto con el verbo «ser».',
        { h: 'Sujeto y predicado' },
        'En Mateo 6:9, τὸ ὄνομα, «el nombre», está en nominativo: es el sujeto de ἁγιασθήτω, «sea santificado». En una frase como ὁ θεὸς ἀγάπη ἐστίν, «Dios es amor», los dos sustantivos están en nominativo: uno es el sujeto y el otro el predicado. Como viste en la ruta I, el artículo ayuda a saber cuál es cuál.',
        'El nominativo también aparece en títulos y saludos, sin verbo: Παῦλος δοῦλος Χριστοῦ Ἰησοῦ, «Pablo, siervo de Jesucristo» (Ro 1:1).',
        { h: 'El vocativo: hablarle a alguien' },
        'El vocativo es el caso de la persona a quien se habla. En el Padrenuestro, Jesús enseña a decir Πάτερ, no πατήρ: «¡Padre!». La diferencia es pequeña, solo una vocal y el acento, pero indica que no hablamos de Dios sino con él. La oración es diálogo.',
        'En muchas palabras el vocativo se distingue del nominativo solo en el singular de la segunda declinación: κύριος se vuelve κύριε. Los ciegos, los leprosos y la mujer sirofenicia se dirigen a Jesús con Κύριε. En otras palabras el vocativo es igual al nominativo, y el contexto decide. En Juan 20:28, Tomás dice Ὁ κύριός μου καὶ ὁ θεός μου, con nominativos y artículo, pero se dirige a Jesús: «¡Señor mío, y Dios mío!». El griego del Nuevo Testamento usa así el nominativo como vocativo con frecuencia.',
        { h: 'La confesión de Tomás' },
        'Algunos han dicho que Tomás no hablaba a Jesús, sino que exclamaba por la sorpresa, como quien dice «¡Dios mío!». Pero Juan escribe que Tomás «respondió» y «le dijo» (εἶπεν αὐτῷ): las palabras van dirigidas a Jesús. Y Jesús no lo corrige, sino que le dice que ha creído (Jn 20:29). Es la confesión más alta del Evangelio de Juan, que había comenzado diciendo que el Verbo era Dios (Jn 1:1).',
        { ejercicio: {
          pregunta: '¿Por qué en Mateo 6:9 se usa Πάτερ y no πατήρ?',
          opciones: [
            { t: 'Porque Πάτερ es el plural de πατήρ.', ok: false, por_que: 'Es singular. El plural es πατέρες.' },
            { t: 'Porque es vocativo: se usa para hablarle directamente al Padre.', ok: true, por_que: 'El vocativo es el caso de la persona a quien se habla. La oración se dirige a Dios.' },
            { t: 'Porque es genitivo: «del Padre».', ok: false, por_que: 'El genitivo de πατήρ es πατρός. Πάτερ es vocativo.' }
          ],
          explicacion: 'El vocativo marca a quién se dirige quien habla. En el Padrenuestro, a Dios como Padre.'
        } }
      ],
      pensar: 'Jesús te enseñó a llamar a Dios Πάτερ, hablándole directamente como hijo. ¿Tu oración es más un hablar acerca de Dios o un hablar con él?'
    },
    {
      id: 'genitivo', n: 'El genitivo: «de»', ref: 'Romanos 1:16; Gálatas 2:16; 2 Corintios 5:14',
      visual: [
        G('Romanos 1:16', 'Romanos 1:16', '@@n1904:ro/1/16', '@@n1904tr:ro/1/16', '@@n1904t:ro/1/16',
          ['no', 'porque', 'me avergüenzo de', 'el', 'evangelio', 'poder', 'porque', 'de Dios', 'es', 'para', 'salvación', 'a todo', 'el', 'que cree', 'al judío', 'tanto', 'primeramente', 'como', 'al griego'],
          '@@ro/1/16'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Algunos usos del genitivo',
          cab: ['Uso', 'Ejemplo', 'Sentido'],
          filas: [
            ['Posesión', 'τὸν οἶκον τοῦ πατρός μου (Jn 2:16)', 'la casa que es de mi Padre'],
            ['Origen o fuente', 'δύναμις θεοῦ (Ro 1:16)', 'poder que viene de Dios y es suyo'],
            ['Contenido o materia', 'τὸ εὐαγγέλιον τῆς βασιλείας (Mt 4:23)', 'el evangelio que anuncia el reino'],
            ['Descripción', 'σῶμα τῆς ἁμαρτίας (Ro 6:6)', 'el cuerpo dominado por el pecado'],
            ['Con preposición', 'ἐκ πίστεως (Ro 5:1)', 'a partir de la fe, por la fe'],
            ['De comparación', 'μείζων τούτων (1 Co 13:13)', 'mayor que estas'],
          ],
          nota: 'El genitivo es el caso más flexible: el contexto decide qué relación expresa.'
        } }
      ],
      texto: [
        'El genitivo se traduce casi siempre con «de». Pero el «de» español es tan amplio como el genitivo griego: «la casa de Pedro», «un vaso de agua», «el amor de Dios». Cada una de esas frases expresa una relación distinta.',
        { h: 'Poder de Dios' },
        'En Romanos 1:16, Pablo dice que el evangelio es δύναμις θεοῦ, «poder de Dios». θεοῦ está en genitivo. ¿Qué relación expresa? El poder pertenece a Dios y viene de él. No es un poder humano de convencer, sino la fuerza de Dios que obra salvación en todo el que cree.',
        'Fíjate también en las formas: εὐαγγέλιον es acusativo, porque es el complemento de «no me avergüenzo»; δύναμις es nominativo; σωτηρίαν es acusativo después de εἰς, y παντὶ τῷ πιστεύοντι, «a todo el que cree», es dativo. En un solo versículo trabajan cuatro casos.',
        { h: 'Cuando el genitivo admite dos lecturas' },
        'A veces el genitivo deja abiertas dos posibilidades. En «el amor de Cristo nos constriñe» (2 Co 5:14), ¿se trata del amor que Cristo nos tiene o del amor que nosotros le tenemos a él? La mayoría de los comentaristas lo entiende como el amor de Cristo por nosotros, porque Pablo sigue hablando de su muerte por todos. El contexto decide.',
        { posturas: {
          titulo: '«La fe de Jesucristo» (Gálatas 2:16)',
          a: { n: 'Fe en Cristo', t: 'La lectura tradicional entiende πίστις Ἰησοῦ Χριστοῦ como genitivo de objeto: la fe que tiene a Cristo por objeto, la fe que el creyente pone en él. Así traducen muchas versiones: «por la fe en Jesucristo».' },
          b: { n: 'Fe o fidelidad de Cristo', t: 'Otros estudiosos lo entienden como genitivo de sujeto: la fidelidad que Cristo mismo mostró al obedecer al Padre hasta la cruz. La Reina-Valera deja la ambigüedad del griego: «por la fe de Jesucristo».' },
          c: 'Las dos lecturas afirman la justificación por la fe y no por las obras de la ley. Además, el mismo versículo dice sin ambigüedad: «nosotros también hemos creído en Jesucristo». La doctrina no depende de cómo se lea un genitivo.'
        } },
        { ejercicio: {
          pregunta: 'En δύναμις θεοῦ, ¿qué indica el genitivo θεοῦ?',
          opciones: [
            { t: 'Que Dios recibe el poder.', ok: false, por_que: 'Para indicar a quién se da algo se usaría el dativo, θεῷ.' },
            { t: 'Que el poder pertenece a Dios y procede de él.', ok: true, por_que: 'Es un genitivo de posesión y origen: el poder es de Dios.' },
            { t: 'Que el poder es más grande que Dios.', ok: false, por_que: 'El genitivo de comparación se usa con adjetivos como «mayor», y aquí no hay comparación.' }
          ],
          explicacion: 'El genitivo expresa relaciones muy variadas. Hay que preguntarse qué relación tiene sentido en el contexto.'
        } }
      ],
      pensar: 'Pablo no se avergonzaba del evangelio porque es «poder de Dios para salvación». ¿Hay situaciones en que te cuesta hablar de Cristo? ¿Qué cambia si recuerdas de quién es el poder?'
    },
    {
      id: 'dativo', n: 'El dativo: a quién y con qué', ref: 'Gálatas 5:16; Efesios 2:8',
      visual: [
        G('Gálatas 5:16', 'Gálatas 5:16', '@@n1904:ga/5/16', '@@n1904tr:ga/5/16', '@@n1904t:ga/5/16',
          ['digo', 'pues', 'por el Espíritu', 'andad', 'y', 'el deseo', 'de la carne', 'no', 'no (de ningún modo)', 'satisfaréis'],
          '@@ga/5/16'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Algunos usos del dativo',
          cab: ['Uso', 'Ejemplo', 'Sentido'],
          filas: [
            ['Complemento indirecto', 'δίδωμι ὑμῖν (Jn 13:34)', 'os doy, a vosotros'],
            ['Interés', 'ἐμοὶ τὸ ζῆν Χριστός (Fil 1:21)', 'para mí, el vivir es Cristo'],
            ['Medio o instrumento', 'τῇ χάριτι ἐστε σεσῳσμένοι (Ef 2:8)', 'por la gracia sois salvos'],
            ['Esfera', 'πνεύματι περιπατεῖτε (Gá 5:16)', 'andad en el Espíritu, por el Espíritu'],
            ['Con preposición', 'ἐν Χριστῷ (2 Co 5:17)', 'en Cristo, unido a Cristo'],
            ['Tiempo', 'τῇ τρίτῃ ἡμέρᾳ (Mt 16:21)', 'al tercer día'],
          ],
          nota: 'Algunos verbos llevan su complemento en dativo: πιστεύω τῷ θεῷ, «creo a Dios»; ἀκολουθέω αὐτῷ, «le sigo».'
        } }
      ],
      texto: [
        'El dativo responde a las preguntas «¿a quién?», «¿para quién?», «¿con qué?», «¿dónde?» y «¿cuándo?». Es menos frecuente que los otros casos, pero aparece en frases muy importantes del Nuevo Testamento.',
        { h: 'A quién: el complemento indirecto' },
        'El uso más sencillo es el de la persona que recibe algo: δίδωμι ὑμῖν, «os doy». ὑμῖν, «a vosotros», está en dativo. Lo mismo después de verbos como «decir», «mostrar» o «escribir».',
        { h: 'Con qué: el medio' },
        'En Efesios 2:8 Pablo dice τῇ γὰρ χάριτι ἐστε σεσῳσμένοι, «porque por gracia sois salvos». La palabra χάριτι está en dativo: la gracia es el medio por el cual Dios salva. No hay preposición; el caso solo lo dice. Lo estudiarás con más detalle en el taller.',
        { h: 'Andar en el Espíritu' },
        'En Gálatas 5:16, πνεύματι está en dativo sin preposición. La Reina-Valera traduce «Andad en el Espíritu». El dativo puede entenderse como esfera, «en el ámbito del Espíritu», o como medio, «por el Espíritu», guiados y fortalecidos por él. Las dos ideas se complementan: el creyente vive en la esfera del Espíritu y por su poder. Más adelante, Pablo dice: «Si vivimos por el Espíritu, andemos también por el Espíritu» (Gá 5:25), donde la Reina-Valera usa «por» con el mismo dativo.',
        'El versículo termina con una promesa fuerte: οὐ μὴ τελέσητε, «no satisfaréis». La doble negación οὐ μή es la forma más enfática de negar en griego: «de ningún modo». Quien anda en el Espíritu no está condenado a obedecer los deseos de la carne.',
        { h: 'En Cristo' },
        'La preposición ἐν con dativo produce una de las expresiones favoritas de Pablo: ἐν Χριστῷ, «en Cristo», que aparece decenas de veces en sus cartas. Indica la unión del creyente con Cristo: «si alguno está en Cristo, nueva criatura es» (2 Co 5:17).',
        { ejercicio: {
          pregunta: 'En τῇ χάριτι ἐστε σεσῳσμένοι (Efesios 2:8), ¿qué indica el dativo?',
          opciones: [
            { t: 'A quién se da la gracia.', ok: false, por_que: 'Aquí la gracia no es quien recibe, sino el medio de la salvación.' },
            { t: 'El medio: la gracia es aquello por lo cual somos salvos.', ok: true, por_que: 'Es un dativo de medio o instrumento: «por gracia».' },
            { t: 'El momento en que fuimos salvos.', ok: false, por_que: 'El dativo de tiempo se usa con palabras como «día» u «hora». Aquí no hay tiempo.' }
          ],
          explicacion: 'El dativo sin preposición puede indicar el medio o instrumento: lo que hace posible la acción.'
        } }
      ],
      pensar: 'Pablo promete que quien anda en el Espíritu de ningún modo satisfará los deseos de la carne. ¿En qué área de tu vida necesitas depender más del Espíritu que de tu propia fuerza?'
    },
    {
      id: 'acusativo', n: 'El acusativo: el complemento directo', ref: 'Juan 13:34',
      visual: [
        G('Juan 13:34', 'Juan 13:34', '@@n1904:jn/13/34', '@@n1904tr:jn/13/34', '@@n1904t:jn/13/34',
          ['un mandamiento', 'nuevo', 'doy', 'a vosotros', 'que', 'améis', 'unos a otros', 'como', 'amé', 'a vosotros', 'que', 'también', 'vosotros', 'améis', 'unos a otros'],
          '@@jn/13/34'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Algunos usos del acusativo',
          cab: ['Uso', 'Ejemplo', 'Sentido'],
          filas: [
            ['Complemento directo', 'ἐντολὴν καινὴν δίδωμι (Jn 13:34)', 'doy un mandamiento nuevo'],
            ['Dos acusativos', 'ὑμᾶς διδάξει πάντα (Jn 14:26)', 'os enseñará todas las cosas'],
            ['Con preposición', 'εἰς τὸν κόσμον (Jn 3:17)', 'al mundo, hacia el mundo'],
            ['Extensión de tiempo', 'ἔμειναν οὐ πολλὰς ἡμέρας (Jn 2:12)', 'estuvieron no muchos días'],
            ['Sujeto de un infinitivo', 'πρὸ τοῦ τὸν κόσμον εἶναι (Jn 17:5)', 'antes que el mundo fuese'],
          ],
          nota: 'En los neutros, el acusativo es igual al nominativo: τὸ ἔργον puede ser sujeto o complemento.'
        } }
      ],
      texto: [
        'El acusativo es el caso del complemento directo: la persona o cosa que recibe la acción del verbo. Es el caso más frecuente del Nuevo Testamento, con 16.836 apariciones entre sustantivos, adjetivos y artículos.',
        { h: 'El mandamiento nuevo' },
        'En Juan 13:34, ἐντολὴν καινήν, «un mandamiento nuevo», está en acusativo: es lo que Jesús da. Fíjate que va al comienzo de la frase, antes del verbo. Como el caso ya dice su función, Jesús puede ponerlo primero para destacarlo: lo nuevo es este mandamiento.',
        'Después vienen dos acusativos de persona: ἀλλήλους, «unos a otros», y ὑμᾶς, «a vosotros». ἀλλήλους es un pronombre recíproco: solo existe en plural y en los casos que no son el nominativo, porque siempre es complemento. En «como yo os he amado», ὑμᾶς es el acusativo de ὑμεῖς, «vosotros».',
        { h: 'Las terminaciones más comunes' },
        'El acusativo singular termina casi siempre en -ν: λόγον, ἡμέραν, γραφήν, προφήτην, πόλιν. En la tercera declinación termina a menudo en -α: πατέρα, σάρκα. El acusativo plural termina en -ους en la segunda declinación (λόγους), en -ας en la primera (ἡμέρας, γραφάς) y en -ας o -εις en la tercera (πατέρας, πόλεις). Y el artículo lo confirma: τόν, τήν, τό; τούς, τάς, τά.',
        { h: 'Un detalle que confunde' },
        'En los sustantivos neutros, el nominativo y el acusativo son iguales: τὸ ἔργον, τὰ ἔργα; τὸ πνεῦμα, τὰ πνεύματα. Cuando veas un neutro, el contexto dirá si es sujeto o complemento. Y una regla curiosa: un sujeto neutro plural suele llevar el verbo en singular. En Mateo 6:33, ταῦτα πάντα προστεθήσεται dice literalmente «todas estas cosas será añadido».',
        { ejercicio: {
          pregunta: 'En ἐντολὴν καινὴν δίδωμι ὑμῖν, ¿en qué caso está ἐντολήν y por qué?',
          opciones: [
            { t: 'En nominativo, porque es el sujeto.', ok: false, por_que: 'El sujeto es «yo», incluido en el verbo δίδωμι. El nominativo sería ἐντολή.' },
            { t: 'En acusativo, porque es lo que Jesús da: el complemento directo.', ok: true, por_que: 'La -ν final y la función lo confirman: Jesús da un mandamiento.' },
            { t: 'En dativo, porque es a quien se da algo.', ok: false, por_que: 'A quienes se da es a «vosotros», ὑμῖν, que sí está en dativo.' }
          ],
          explicacion: 'Dar algo a alguien: lo que se da va en acusativo y quien lo recibe en dativo.'
        } }
      ],
      pensar: 'El mandamiento es nuevo por su medida: «como yo os he amado». ¿A quién de tu iglesia o de tu familia te cuesta amar así? ¿Qué paso concreto puedes dar esta semana?'
    },
    {
      id: 'primera-segunda', n: 'Primera y segunda declinación', ref: '2 Timoteo 3:16',
      visual: [
        { tipo: 'tabla', titulo: 'Segunda', tabla: {
          titulo: 'Segunda declinación: masculinos en -ος y neutros en -ον',
          cab: ['Caso', 'λόγος, palabra (sing.)', 'Plural', 'ἔργον, obra (sing.)', 'Plural'],
          filas: [
            ['Nominativo', 'ὁ λόγος', 'οἱ λόγοι', 'τὸ ἔργον', 'τὰ ἔργα'],
            ['Genitivo', 'τοῦ λόγου', 'τῶν λόγων', 'τοῦ ἔργου', 'τῶν ἔργων'],
            ['Dativo', 'τῷ λόγῳ', 'τοῖς λόγοις', 'τῷ ἔργῳ', 'τοῖς ἔργοις'],
            ['Acusativo', 'τὸν λόγον', 'τοὺς λόγους', 'τὸ ἔργον', 'τὰ ἔργα'],
            ['Vocativo', 'λόγε', 'λόγοι', 'ἔργον', 'ἔργα'],
          ],
          nota: 'Igual que λόγος: ἄνθρωπος, θεός, κύριος, κόσμος, νόμος, οὐρανός. Algunas palabras en -ος son femeninas, como ἡ ὁδός, «el camino».'
        } },
        { tipo: 'tabla', titulo: 'Primera', tabla: {
          titulo: 'Primera declinación: femeninos en -α y en -η, y masculinos en -ης',
          cab: ['Caso', 'ἡμέρα, día', 'γραφή, escritura', 'δόξα, gloria', 'προφήτης, profeta'],
          filas: [
            ['Nom. sing.', 'ἡ ἡμέρα', 'ἡ γραφή', 'ἡ δόξα', 'ὁ προφήτης'],
            ['Gen. sing.', 'τῆς ἡμέρας', 'τῆς γραφῆς', 'τῆς δόξης', 'τοῦ προφήτου'],
            ['Dat. sing.', 'τῇ ἡμέρᾳ', 'τῇ γραφῇ', 'τῇ δόξῃ', 'τῷ προφήτῃ'],
            ['Ac. sing.', 'τὴν ἡμέραν', 'τὴν γραφήν', 'τὴν δόξαν', 'τὸν προφήτην'],
            ['Nom. pl.', 'αἱ ἡμέραι', 'αἱ γραφαί', 'αἱ δόξαι', 'οἱ προφῆται'],
            ['Gen. pl.', 'τῶν ἡμερῶν', 'τῶν γραφῶν', 'τῶν δοξῶν', 'τῶν προφητῶν'],
            ['Dat. pl.', 'ταῖς ἡμέραις', 'ταῖς γραφαῖς', 'ταῖς δόξαις', 'τοῖς προφήταις'],
            ['Ac. pl.', 'τὰς ἡμέρας', 'τὰς γραφάς', 'τὰς δόξας', 'τοὺς προφήτας'],
          ],
          nota: 'El plural es igual en los cuatro modelos. Como προφήτης se declinan μαθητής, «discípulo», y ἐργάτης, «obrero».'
        } },
        G('2 Timoteo 3:16', '2 Timoteo 3:16', '@@n1904:2ti/3/16', '@@n1904tr:2ti/3/16', '@@n1904t:2ti/3/16',
          ['toda', 'Escritura', 'inspirada por Dios', 'y', 'útil', 'para', 'enseñanza', 'para', 'reprensión', 'para', 'corrección', 'para', 'instrucción', 'la', 'en', 'justicia'],
          '@@2ti/3/16')
      ],
      texto: [
        'Los sustantivos griegos se agrupan en tres declinaciones, es decir, tres juegos de terminaciones. Las dos primeras son muy regulares y reúnen la mayoría de los sustantivos del Nuevo Testamento.',
        { h: 'La segunda declinación' },
        'Conviene empezar por la segunda, la más fácil. Sus masculinos terminan en -ος, como λόγος, y sus neutros en -ον, como ἔργον. Mira la primera tabla del panel: las terminaciones -ος, -ου, -ῳ, -ον en singular y -οι, -ων, -οις, -ους en plural se repiten en cientos de palabras. Si aprendes λόγος, ya sabes declinar ἄνθρωπος, θεός, κύριος y κόσμος.',
        'Los neutros difieren solo en el nominativo y el acusativo: -ον en singular y -α en plural. Fíjate en la pequeña iota debajo de la omega en el dativo, λόγῳ: es la iota suscrita, que no se pronuncia pero marca el dativo.',
        { h: 'La primera declinación' },
        'La primera declinación reúne sobre todo femeninos terminados en -α o en -η, y algunos masculinos en -ης. Las terminaciones del singular cambian un poco según la vocal: ἡμέρα conserva la α en todo el singular, γραφή conserva la η, y δόξα alterna: -α en nominativo y acusativo, -ης y -ῃ en genitivo y dativo. El plural es igual para todos: -αι, -ων, -αις, -ας.',
        'Los masculinos como προφήτης y μαθητής usan la primera declinación con el artículo masculino. Su genitivo, προφήτου, se parece al de λόγου.',
        { h: 'En 2 Timoteo 3:16' },
        'El versículo del panel está lleno de primera declinación: γραφή, «Escritura»; διδασκαλίαν, «enseñanza»; παιδείαν, «instrucción»; δικαιοσύνῃ, «justicia». Hay también una palabra que solo aparece aquí en el Nuevo Testamento: θεόπνευστος, «inspirada por Dios», literalmente «soplada por Dios». Es un adjetivo compuesto de θεός, «Dios», y πνέω, «soplar», la misma raíz de πνεῦμα. Toda la Escritura procede del aliento de Dios.',
        { ejercicio: {
          pregunta: '¿Qué forma de λόγος corresponde al acusativo plural, «a las palabras»?',
          opciones: [
            { t: 'λόγοι', ok: false, por_que: 'λόγοι es el nominativo plural, «las palabras» como sujeto.' },
            { t: 'λόγους', ok: true, por_que: 'La terminación -ους es la del acusativo plural de la segunda declinación, con el artículo τούς.' },
            { t: 'λόγων', ok: false, por_que: 'λόγων es el genitivo plural, «de las palabras».' }
          ],
          explicacion: 'Segunda declinación masculina, plural: -οι, -ων, -οις, -ους.'
        } }
      ],
      pensar: 'Toda Escritura es «soplada por Dios» y útil para enseñar, redargüir, corregir e instruir. ¿Cuál de estas cuatro funciones de la Palabra necesitas más en este tiempo?'
    },
    {
      id: 'tercera', n: 'La tercera declinación', ref: 'Juan 3:6',
      visual: [
        { tipo: 'tabla', titulo: 'Tercera', tabla: {
          titulo: 'Tercera declinación: cuatro modelos',
          cab: ['Caso', 'σάρξ, carne', 'πνεῦμα, espíritu', 'πόλις, ciudad', 'πατήρ, padre'],
          filas: [
            ['Nom. sing.', 'ἡ σάρξ', 'τὸ πνεῦμα', 'ἡ πόλις', 'ὁ πατήρ'],
            ['Gen. sing.', 'τῆς σαρκός', 'τοῦ πνεύματος', 'τῆς πόλεως', 'τοῦ πατρός'],
            ['Dat. sing.', 'τῇ σαρκί', 'τῷ πνεύματι', 'τῇ πόλει', 'τῷ πατρί'],
            ['Ac. sing.', 'τὴν σάρκα', 'τὸ πνεῦμα', 'τὴν πόλιν', 'τὸν πατέρα'],
            ['Nom. pl.', 'αἱ σάρκες', 'τὰ πνεύματα', 'αἱ πόλεις', 'οἱ πατέρες'],
            ['Gen. pl.', 'τῶν σαρκῶν', 'τῶν πνευμάτων', 'τῶν πόλεων', 'τῶν πατέρων'],
            ['Dat. pl.', 'ταῖς σαρξί(ν)', 'τοῖς πνεύμασι(ν)', 'ταῖς πόλεσι(ν)', 'τοῖς πατράσι(ν)'],
            ['Ac. pl.', 'τὰς σάρκας', 'τὰ πνεύματα', 'τὰς πόλεις', 'τοὺς πατέρας'],
          ],
          nota: 'La raíz se ve en el genitivo: σαρκ-ός, πνευματ-ος. Por eso el diccionario da siempre el nominativo y el genitivo: σάρξ, σαρκός.'
        } },
        G('Juan 3:6', 'Juan 3:6', '@@n1904:jn/3/6', '@@n1904tr:jn/3/6', '@@n1904t:jn/3/6',
          ['lo', 'nacido', 'de', 'la', 'carne', 'carne', 'es', 'y', 'lo', 'nacido', 'de', 'el', 'Espíritu', 'espíritu', 'es'],
          '@@jn/3/6')
      ],
      texto: [
        'La tercera declinación es la más variada. Reúne palabras de los tres géneros con nominativos muy distintos: σάρξ, πνεῦμα, πόλις, πατήρ, χάρις, ἀνήρ, γυνή. Pero tiene un truco: su verdadera raíz aparece en el genitivo.',
        { h: 'El genitivo revela la raíz' },
        'En el nominativo σάρξ la raíz σαρκ- está escondida, porque κ más ς se escriben juntas como ξ. En el genitivo σαρκός aparece entera. Lo mismo pasa con πνεῦμα: el genitivo πνεύματος muestra la raíz πνευματ-. Por eso los diccionarios dan siempre dos formas: σάρξ, σαρκός; πνεῦμα, πνεύματος; χάρις, χάριτος.',
        'Una vez que conoces la raíz, las terminaciones son bastante regulares: -ος en el genitivo singular, -ι en el dativo, -α o -ν en el acusativo; -ες, -ων, -σι(ν), -ας en plural. Los neutros, como πνεῦμα, tienen el nominativo y el acusativo iguales: πνεῦμα en singular, πνεύματα en plural.',
        { h: 'Modelos con cambios' },
        'Algunas palabras cambian la vocal de la raíz. πόλις hace πόλεως y πόλει; igual se declinan πίστις, δύναμις y ἀνάστασις (pero no χάρις, que hace χάριτος). πατήρ pierde la ε en algunos casos: πατρός, πατρί, pero πατέρα. Lo mismo hacen μήτηρ y θυγάτηρ. No necesitas memorizar todas las variantes: con el nominativo y el genitivo del diccionario y las terminaciones generales, reconocerás casi todas las formas.',
        { h: 'Carne y espíritu' },
        'Juan 3:6 pone frente a frente dos palabras de la tercera declinación. Primero en genitivo, después de ἐκ: ἐκ τῆς σαρκός, «de la carne»; ἐκ τοῦ πνεύματος, «del Espíritu». Luego en nominativo, como predicado: σάρξ ἐστιν, «carne es»; πνεῦμά ἐστιν, «espíritu es». Jesús le explica a Nicodemo que cada origen produce algo de su misma naturaleza. El nacimiento natural produce vida natural; solo el Espíritu produce vida espiritual. Por eso hay que nacer de nuevo.',
        'Fíjate también en el artículo: en los dos casos es neutro, τό, porque se refiere a «lo nacido», y en ἐκ τοῦ πνεύματος el artículo τοῦ es neutro porque πνεῦμα es neutro.',
        { ejercicio: {
          pregunta: '¿Por qué los diccionarios dan dos formas, como σάρξ, σαρκός?',
          opciones: [
            { t: 'Porque son dos palabras distintas con el mismo sentido.', ok: false, por_que: 'Es una sola palabra: nominativo y genitivo.' },
            { t: 'Porque el genitivo muestra la raíz sobre la que se forman los demás casos.', ok: true, por_que: 'En la tercera declinación la raíz se ve en el genitivo: σαρκ-ός, σαρκ-ί, σάρκ-α.' },
            { t: 'Porque σαρκός es la forma del plural.', ok: false, por_que: 'σαρκός es genitivo singular. El nominativo plural es σάρκες.' }
          ],
          explicacion: 'Aprende los sustantivos de la tercera declinación con su genitivo: así conoces su raíz.'
        } }
      ],
      pensar: '«Lo que es nacido del Espíritu, espíritu es.» ¿Qué señales de la vida nueva que da el Espíritu puedes reconocer hoy en tu vida?'
    },
    {
      id: 'articulo', n: 'El artículo y su ausencia', ref: 'Juan 1:4; Juan 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'El artículo', tabla: {
          titulo: 'El artículo ὁ, ἡ, τό',
          cab: ['Caso', 'Masculino', 'Femenino', 'Neutro'],
          filas: [
            ['Nom. sing.', 'ὁ', 'ἡ', 'τό'],
            ['Gen. sing.', 'τοῦ', 'τῆς', 'τοῦ'],
            ['Dat. sing.', 'τῷ', 'τῇ', 'τῷ'],
            ['Ac. sing.', 'τόν', 'τήν', 'τό'],
            ['Nom. pl.', 'οἱ', 'αἱ', 'τά'],
            ['Gen. pl.', 'τῶν', 'τῶν', 'τῶν'],
            ['Dat. pl.', 'τοῖς', 'ταῖς', 'τοῖς'],
            ['Ac. pl.', 'τούς', 'τάς', 'τά'],
          ],
          nota: 'Es la palabra más frecuente del Nuevo Testamento: 19.783 veces. El griego no tiene artículo indefinido («un, una»).'
        } },
        G('Juan 1:4', 'Juan 1:4', '@@n1904:jn/1/4', '@@n1904tr:jn/1/4', '@@n1904t:jn/1/4',
          ['en', 'él', 'vida', 'había', 'y', 'la', 'vida', 'era', 'la', 'luz', 'de los', 'hombres'],
          '@@jn/1/4')
      ],
      texto: [
        'El artículo griego, ὁ, ἡ, τό, se parece a nuestro «el, la, lo», pero no funciona exactamente igual. Aprenderlo bien es una de las inversiones que más rinden: aparece una de cada siete palabras.',
        { h: 'Sin «un»' },
        'El griego no tiene artículo indefinido. Cuando un sustantivo no lleva artículo, el español a veces pone «un»: φωνὴ ἐγένετο, «vino una voz» (Mr 1:11). Otras veces no pone nada, o pone «el» igual. La traducción depende del contexto, no de una regla mecánica.',
        { h: 'La vida y la vida' },
        'Juan 1:4 muestra un uso precioso. Primero dice ἐν αὐτῷ ζωὴ ἦν, «en él había vida», sin artículo: vida, sin más. Luego dice καὶ ἡ ζωὴ ἦν τὸ φῶς, «y la vida era la luz», con artículo: esa vida que acaba de mencionar. El artículo señala algo ya conocido o ya nombrado. Es como cuando en español decimos «un hombre entró; el hombre llevaba una carta».',
        'El artículo también marca lo que es único o conocido por todos: ὁ θεός, «Dios»; ὁ κόσμος, «el mundo». Por eso con nombres propios el griego usa a menudo el artículo, ὁ Ἰησοῦς, que el español no traduce.',
        { h: 'Lo que hace el artículo' },
        'Además de determinar, el artículo convierte en sustantivo casi cualquier cosa. Con un adjetivo: οἱ ἅγιοι, «los santos». Con un participio: ὁ πιστεύων, «el que cree». Con un infinitivo: τὸ ζῆν, «el vivir». Con una frase entera: τὰ ἄνω, «las cosas de arriba» (Col 3:1). Y, como viste en la ruta I, ayuda a distinguir el sujeto del predicado.',
        { h: 'La ausencia del artículo no es «un»' },
        'En Juan 1:1, la última frase dice θεὸς ἦν ὁ λόγος, sin artículo delante de θεός. ¿Significa «un dios»? No. La ausencia del artículo aquí marca que θεός es el predicado, no el sujeto, y que describe la naturaleza del Verbo. Lo estudiarás paso a paso en el taller.',
        { ir: { t: 'Ir al taller: Juan 1:1', a: '#taller/1' } },
        { ejercicio: {
          pregunta: 'En Juan 1:4, ¿por qué la segunda mención de ζωή lleva artículo?',
          opciones: [
            { t: 'Porque se refiere a la vida que acaba de mencionar.', ok: true, por_que: 'El artículo señala lo ya conocido o ya nombrado: «esa vida».' },
            { t: 'Porque en griego el artículo es obligatorio después de καί.', ok: false, por_que: 'No existe esa regla. El artículo aparece por razones de sentido.' },
            { t: 'Porque está en plural.', ok: false, por_que: 'ζωή está en singular, igual que ἡ.' }
          ],
          explicacion: 'Un uso básico del artículo es volver a señalar algo ya mencionado.'
        } }
      ],
      pensar: '«En él estaba la vida, y la vida era la luz de los hombres.» ¿Qué áreas de tu vida necesitan hoy la luz que solo viene de Cristo?'
    },
    {
      id: 'adjetivo', n: 'El adjetivo: atributivo y predicativo', ref: 'Juan 10:11; Romanos 7:12',
      visual: [
        G('Juan 10:11', 'Juan 10:11', '@@n1904:jn/10/11', '@@n1904tr:jn/10/11', '@@n1904t:jn/10/11',
          ['yo', 'soy', 'el', 'pastor', 'el', 'bueno', 'el', 'pastor', 'el', 'bueno', 'la', 'vida', 'de él', 'pone', 'por', 'las', 'ovejas'],
          '@@jn/10/11'),
        { tipo: 'tabla', titulo: 'Posiciones', tabla: {
          titulo: 'Dónde se pone el adjetivo y qué cambia',
          cab: ['Posición', 'Ejemplo', 'Se traduce'],
          filas: [
            ['Atributiva: artículo + adjetivo + sustantivo', 'ὁ καλὸς ποιμήν', 'el buen pastor'],
            ['Atributiva: artículo + sustantivo + artículo + adjetivo', 'ὁ ποιμὴν ὁ καλός (Jn 10:11)', 'el pastor, el bueno'],
            ['Predicativa: el adjetivo fuera del artículo', 'ὁ μὲν νόμος ἅγιος (Ro 7:12)', 'la ley es santa'],
            ['Sustantivada: artículo + adjetivo', 'ἀπὸ τοῦ πονηροῦ (Mt 6:13)', 'del mal, del maligno'],
          ],
          nota: 'El adjetivo concuerda con su sustantivo en caso, número y género: ἐντολὴν καινήν, «un mandamiento nuevo», los dos en acusativo singular femenino.'
        } }
      ],
      texto: [
        'Los adjetivos griegos se declinan como los sustantivos y concuerdan con ellos en caso, número y género. Un adjetivo masculino como ἀγαθός, «bueno», tiene forma femenina ἀγαθή y neutra ἀγαθόν, con las terminaciones de la primera y segunda declinación que ya conoces.',
        { h: 'Lo que dice la posición' },
        'En griego, la posición del adjetivo respecto del artículo cambia el sentido. Si el adjetivo está «dentro» del artículo, es decir, precedido por él, describe al sustantivo: es atributivo. ὁ καλὸς ποιμήν significa «el buen pastor». Si el adjetivo está «fuera» del artículo, afirma algo: es predicativo, y se suple el verbo «ser». ὁ μὲν νόμος ἅγιος significa «la ley a la verdad es santa» (Ro 7:12).',
        { h: 'El pastor, el bueno' },
        'En Juan 10:11 Jesús usa la segunda forma atributiva: ὁ ποιμὴν ὁ καλός, con el artículo repetido. Es como si dijera «el pastor, el bueno». Esa construcción da peso al adjetivo: no es un pastor más, sino el pastor que es verdaderamente bueno. Y lo repite dos veces en el mismo versículo.',
        'La palabra καλός significa «bueno», pero también «hermoso» y «noble». No describe solo la bondad moral, sino una excelencia que se ve. El buen pastor se reconoce por lo que hace: τὴν ψυχὴν αὐτοῦ τίθησιν ὑπὲρ τῶν προβάτων, «su vida da por las ovejas». Fíjate en ὑπέρ con genitivo, «en favor de»: el pastor muere por el bien de sus ovejas.',
        { h: 'Adjetivos que se vuelven sustantivos' },
        'Con el artículo, un adjetivo funciona como sustantivo. ὁ πονηρός es «el malo»; en Mateo 6:13, ἀπὸ τοῦ πονηροῦ puede entenderse «del mal» o «del maligno». οἱ ἅγιοι, «los santos», es el nombre que Pablo da a todos los creyentes de una iglesia (Fil 1:1). τὰ πάντα, «todas las cosas», aparece en textos sobre la creación y la obra de Cristo (Ro 11:36; Col 1:16).',
        { ejercicio: {
          pregunta: '¿Qué significa ὁ νόμος ἅγιος, con el adjetivo fuera del artículo?',
          opciones: [
            { t: 'La ley santa.', ok: false, por_que: 'Para decir «la ley santa» el adjetivo tendría que ir precedido por el artículo: ὁ ἅγιος νόμος.' },
            { t: 'La ley es santa.', ok: true, por_que: 'Fuera del artículo, el adjetivo es predicativo: afirma algo del sustantivo.' },
            { t: 'El santo de la ley.', ok: false, por_que: 'No hay genitivo ni adjetivo sustantivado: ὁ va con νόμος.' }
          ],
          explicacion: 'Dentro del artículo: atributivo («la ley santa»). Fuera del artículo: predicativo («la ley es santa»).'
        } }
      ],
      pensar: 'El buen pastor no solo guía: da su vida por las ovejas. ¿Cómo te mueve a confiar en él saber que ya dio su vida por ti?'
    },
    {
      id: 'preposiciones', n: 'Las preposiciones', ref: 'Romanos 11:36',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-preposiciones.svg', alt: 'Un círculo en el centro y flechas a su alrededor que muestran el sentido espacial de las preposiciones: εἰς entra, ἐκ sale de dentro, ἀπό se aleja, ἐν está dentro, πρός se dirige hacia el borde, παρά está al lado, ἐπί encima, ὑπό debajo, διά atraviesa, περί rodea y μετά acompaña', pie: 'El sentido básico de las preposiciones es espacial.', origen: 'esquema' },
        G('Romanos 11:36', 'Romanos 11:36', '@@n1904:ro/11/36', '@@n1904tr:ro/11/36', '@@n1904t:ro/11/36',
          ['porque', 'de', 'él', 'y', 'por medio de', 'él', 'y', 'para', 'él', 'las', 'cosas todas', 'a él', 'la', 'gloria', 'por', 'los', 'siglos', 'amén'],
          '@@ro/11/36'),
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las preposiciones más frecuentes y sus casos',
          cab: ['Preposición', 'Con genitivo', 'Con dativo', 'Con acusativo'],
          filas: [
            ['ἐν (2.743)', '—', 'en, dentro de; con', '—'],
            ['εἰς (1.766)', '—', '—', 'a, hacia, dentro de; para'],
            ['ἐκ (913)', 'de, desde dentro de', '—', '—'],
            ['ἐπί (886)', 'sobre, en', 'sobre, junto a; por', 'sobre, hacia, contra'],
            ['πρός (700)', '—', '—', 'a, hacia, junto a'],
            ['διά (667)', 'por medio de', '—', 'por causa de'],
            ['ἀπό (647)', 'de, desde, lejos de', '—', '—'],
            ['κατά (472)', 'contra; por', '—', 'según; por'],
            ['μετά (470)', 'con', '—', 'después de'],
            ['περί (333)', 'acerca de', '—', 'alrededor de'],
            ['ὑπό (219)', 'por (el agente)', '—', 'debajo de'],
            ['παρά (192)', 'de parte de', 'junto a', 'al lado de; contra'],
          ],
          nota: 'Delante de vocal pierden su última vocal o cambian: δι’ αὐτοῦ, ἐξ αὐτοῦ, μεθ’ ὑμῶν.'
        } }
      ],
      texto: [
        'Las preposiciones son pocas, no cambian de forma y aparecen en todas partes. Las diez más frecuentes suman más de diez mil apariciones. Aprenderlas bien es aprender a ver las relaciones de una frase.',
        { h: 'Del espacio al sentido' },
        'El sentido básico de casi todas las preposiciones es espacial, como muestra el esquema. εἰς es entrar, ἐκ es salir de dentro, ἐν es estar dentro. Desde ese sentido se extienden a otros: εἰς σωτηρίαν, «para salvación», es moverse hacia una meta; ἐκ πίστεως, «por la fe», es lo que sale de la fe como de su fuente.',
        'Cada preposición va con un caso, y algunas con dos o tres. Entonces el caso cambia el sentido. διά con genitivo significa «por medio de»: δι’ αὐτοῦ, «por medio de él». Con acusativo significa «por causa de»: διὰ τοῦτο, «por esto». μετά con genitivo es «con», μεθ’ ὑμῶν; con acusativo es «después de», μετὰ τρεῖς ἡμέρας.',
        { h: 'De él, por él y para él' },
        'Romanos 11:36 cierra el gran capítulo de Pablo sobre el plan de Dios con tres preposiciones. ἐξ αὐτοῦ: todas las cosas vienen de Dios como de su origen. δι’ αὐτοῦ: subsisten y se realizan por medio de él. εἰς αὐτόν: van hacia él como a su meta. Fíjate en los casos: ἐξ y διά con genitivo, αὐτοῦ; εἰς con acusativo, αὐτόν. Tres preposiciones resumen toda la historia: Dios es el principio, el camino y el fin. Por eso termina con una doxología: «a él sea la gloria por los siglos».',
        { h: 'Preposiciones dentro de los verbos' },
        'Muchas preposiciones se unen a los verbos para formar verbos compuestos. ἔρχομαι, «venir», da εἰσέρχομαι, «entrar»; ἐξέρχομαι, «salir»; ἀπέρχομαι, «irse»; προσέρχομαι, «acercarse». Si conoces las preposiciones, entiendes cientos de verbos. Pero cuidado: no siempre el compuesto suma los dos sentidos. ἐπιγινώσκω no siempre significa «conocer más» que γινώσκω; a veces son casi sinónimos.',
        { ejercicio: {
          pregunta: '¿Qué significa διά en διὰ τοῦτο, con acusativo?',
          opciones: [
            { t: 'Por medio de esto.', ok: false, por_que: '«Por medio de» es el sentido de διά con genitivo.' },
            { t: 'Por esto, por causa de esto.', ok: true, por_que: 'Con acusativo, διά indica la causa: διὰ τοῦτο, «por esto».' },
            { t: 'A través de esto.', ok: false, por_que: 'Es el sentido espacial con genitivo, no con acusativo.' }
          ],
          explicacion: 'Las preposiciones que van con más de un caso cambian de sentido según el caso. Por eso hay que mirar la terminación de la palabra que sigue.'
        } }
      ],
      pensar: '«Porque de él, y por él, y para él, son todas las cosas.» Si tu vida viene de Dios, se sostiene por él y va hacia él, ¿qué decisiones de esta semana necesitas ordenar «para él»?'
    },
    {
      id: 'pronombres', n: 'Pronombres personales y αὐτός', ref: 'Mateo 11:28',
      visual: [
        G('Mateo 11:28', 'Mateo 11:28', '@@n1904:mt/11/28', '@@n1904tr:mt/11/28', '@@n1904t:mt/11/28',
          ['venid', 'a', 'mí', 'todos', 'los', 'que trabajan', 'y', 'están cargados', 'y yo', 'haré descansar', 'a vosotros'],
          '@@mt/11/28'),
        { tipo: 'tabla', titulo: 'Pronombres', tabla: {
          titulo: 'Los pronombres personales',
          cab: ['Caso', 'yo', 'nosotros', 'tú', 'vosotros', 'él (masc.)', 'ellos (masc.)'],
          filas: [
            ['Nominativo', 'ἐγώ', 'ἡμεῖς', 'σύ', 'ὑμεῖς', 'αὐτός', 'αὐτοί'],
            ['Genitivo', 'μου, ἐμοῦ', 'ἡμῶν', 'σου, σοῦ', 'ὑμῶν', 'αὐτοῦ', 'αὐτῶν'],
            ['Dativo', 'μοι, ἐμοί', 'ἡμῖν', 'σοι, σοί', 'ὑμῖν', 'αὐτῷ', 'αὐτοῖς'],
            ['Acusativo', 'με, ἐμέ', 'ἡμᾶς', 'σε, σέ', 'ὑμᾶς', 'αὐτόν', 'αὐτούς'],
          ],
          nota: 'Femenino de αὐτός: αὐτή, αὐτῆς, αὐτῇ, αὐτήν; neutro: αὐτό. Las formas cortas (μου, σε) son átonas; las largas (ἐμοῦ, σέ) dan énfasis o van después de preposición.'
        } }
      ],
      texto: [
        'Los pronombres personales se declinan como los sustantivos. Ya los viste en varios versículos; aquí se ordenan.',
        { h: 'Primera y segunda persona' },
        'ἐγώ, «yo», y σύ, «tú», tienen formas muy distintas en el plural: ἡμεῖς, «nosotros», y ὑμεῖς, «vosotros». Ten cuidado con ellas, porque se parecen mucho: solo cambia la primera vocal, ἡ o ὑ. ἡμῶν es «de nosotros, nuestro»; ὑμῶν es «de vosotros, vuestro». Los copistas antiguos también las confundían, y por eso algunos manuscritos difieren en estas palabras.',
        'En Mateo 11:28 hay tres pronombres. με, «a mí», está en acusativo después de πρός. κἀγώ es la unión de καί y ἐγώ: «y yo». Y ὑμᾶς, «a vosotros», es el complemento de ἀναπαύσω, «haré descansar». La invitación es personal: venid a mí, y yo os haré descansar.',
        { h: 'Las formas átonas' },
        'El genitivo, el dativo y el acusativo de «yo» y «tú» tienen dos formas. Las cortas, μου, μοι, με y σου, σοι, σε, son átonas: se apoyan en la palabra anterior, como ὁ πατήρ μου, «mi padre». Las largas, ἐμοῦ, ἐμοί, ἐμέ, se usan para dar énfasis o después de preposición, como en Juan 14:6: δι’ ἐμοῦ, «por medio de mí».',
        { h: 'αὐτός, la palabra de las tres caras' },
        'αὐτός es la tercera palabra más frecuente del Nuevo Testamento, con 5.550 apariciones, y tiene tres usos. El más común es de pronombre de tercera persona en los casos oblicuos: αὐτοῦ, «de él, su»; αὐτῷ, «a él, le»; αὐτόν, «a él, lo». En nominativo puede ser enfático: αὐτὸς γὰρ σώσει, «porque él salvará» (Mt 1:21), él y no otro. Y con artículo significa «el mismo»: en 1 Corintios 12:5, ὁ αὐτὸς κύριος es «el Señor es el mismo».',
        'Como el verbo ya incluye la persona, el griego usa el nominativo ἐγώ, σύ o αὐτός solo cuando quiere destacar. Recuerda esa regla: un pronombre de sujeto expreso casi siempre está ahí por alguna razón.',
        { ejercicio: {
          pregunta: '¿Qué diferencia hay entre ἡμῶν y ὑμῶν?',
          opciones: [
            { t: 'Ninguna: son dos maneras de escribir la misma palabra.', ok: false, por_que: 'Son palabras distintas, aunque se parezcan.' },
            { t: 'ἡμῶν significa «de nosotros» y ὑμῶν «de vosotros».', ok: true, por_que: 'La primera vocal distingue la persona: ἡ- para «nosotros», ὑ- para «vosotros».' },
            { t: 'ἡμῶν es singular y ὑμῶν es plural.', ok: false, por_que: 'Las dos son plurales y genitivas.' }
          ],
          explicacion: 'ἡμεῖς, ἡμῶν, ἡμῖν, ἡμᾶς: nosotros. ὑμεῖς, ὑμῶν, ὑμῖν, ὑμᾶς: vosotros.'
        } }
      ],
      pensar: '«Venid a mí… y yo os haré descansar.» ¿Qué carga estás llevando hoy que necesitas traer personalmente a Jesús?'
    },
    {
      id: 'demostrativos', n: 'Demostrativos, relativos e interrogativos', ref: 'Marcos 4:41; Juan 17:3',
      visual: [
        G('Marcos 4:41', 'Marcos 4:41', '@@n1904:mr/4/41', '@@n1904tr:mr/4/41', '@@n1904t:mr/4/41',
          ['y', 'temieron', 'temor', 'grande', 'y', 'decían', 'a', 'unos a otros', '¿quién', 'pues', 'este', 'es', 'que', 'aun', 'el', 'viento', 'y', 'el', 'mar', 'obedece', 'a él?'],
          '@@mr/4/41'),
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pronombres que señalan, unen y preguntan',
          cab: ['Pronombre', 'Clase', 'Formas frecuentes', 'Ejemplo'],
          filas: [
            ['οὗτος, este', 'Demostrativo cercano', 'οὗτος, αὕτη, τοῦτο; ταῦτα', 'οὗτός ἐστιν ὁ υἱός μου (Mt 3:17)'],
            ['ἐκεῖνος, aquel', 'Demostrativo lejano', 'ἐκεῖνος, ἐκείνη, ἐκεῖνο', 'ἐν ἐκείνῃ τῇ ἡμέρᾳ (Jn 14:20)'],
            ['ὅς, que, el cual', 'Relativo', 'ὅς, ἥ, ὅ; ὅν, ἥν; οἵ', 'ὃν ἀπέστειλας (Jn 17:3)'],
            ['τίς, ¿quién?', 'Interrogativo (con acento)', 'τίς, τί; τίνα', 'τίς ἄρα οὗτός ἐστιν; (Mr 4:41)'],
            ['τις, alguien', 'Indefinido (sin acento propio)', 'τις, τι; τινα', 'ἐάν τις διψᾷ (Jn 7:37)'],
          ],
          nota: 'El relativo ὅς se distingue del artículo ὁ por el acento y, en varias formas, por el espíritu y la letra inicial: ὅν (relativo) frente a τόν (artículo).'
        } }
      ],
      texto: [
        'Además de los personales, el griego tiene pronombres para señalar, para unir frases y para preguntar. Todos se declinan.',
        { h: 'Este y aquel' },
        'οὗτος, «este», señala lo cercano o lo que se acaba de decir. Su forma cambia bastante: masculino οὗτος, femenino αὕτη, neutro τοῦτο, y en plural ταῦτα, «estas cosas». ἐκεῖνος, «aquel», señala lo lejano: ἐν ἐκείνῃ τῇ ἡμέρᾳ, «en aquel día». Cuando un demostrativo acompaña a un sustantivo, el sustantivo lleva artículo y el demostrativo queda fuera de él: οὗτος ὁ ἄνθρωπος, «este hombre».',
        { h: '¿Quién es este?' },
        'En Marcos 4:41, después de que Jesús calma la tempestad, los discípulos se preguntan: τίς ἄρα οὗτός ἐστιν; «¿Quién es este?». En una sola frase hay un interrogativo, τίς, y un demostrativo, οὗτος. Y la respuesta implícita está en el final: hasta el viento y el mar le obedecen, αὐτῷ, en dativo, porque ὑπακούω lleva su complemento en ese caso. Solo Dios manda sobre el mar (Sal 89:9). Marcos quiere que el lector se haga la misma pregunta.',
        'Fíjate también en φόβον μέγαν ἐφοβήθησαν: «temieron un temor grande». El griego repite la raíz en el verbo y en el complemento para intensificar: tuvieron muchísimo miedo. El temor que sienten después del milagro es mayor que el que sentían durante la tormenta.',
        { h: 'El relativo' },
        'El pronombre relativo ὅς, ἥ, ὅ une una frase con otra, como «que» o «el cual». Concuerda en género y número con la palabra a la que se refiere, pero su caso depende de su función en su propia frase. En Juan 17:3, ὃν ἀπέστειλας, «a quien has enviado», ὅν es masculino porque se refiere a Jesucristo, y acusativo porque es el complemento de «enviaste».',
        { h: 'Con acento o sin él' },
        'τίς con acento agudo es interrogativo: «¿quién?». τις sin acento propio es indefinido: «alguien, alguno». El acento distingue «¿quién tiene sed?» de «si alguno tiene sed» (Jn 7:37). La pregunta se marca además con el signo griego de interrogación, que parece un punto y coma: τί;',
        { ejercicio: {
          pregunta: 'En Marcos 4:41, ¿por qué αὐτῷ está en dativo?',
          opciones: [
            { t: 'Porque el verbo ὑπακούω, «obedecer», lleva su complemento en dativo.', ok: true, por_que: 'Algunos verbos rigen dativo: se obedece «a» alguien.' },
            { t: 'Porque es el sujeto de la frase.', ok: false, por_que: 'El sujeto es «el viento y el mar», en nominativo.' },
            { t: 'Porque va después de una preposición.', ok: false, por_que: 'En esta frase αὐτῷ no tiene preposición delante.' }
          ],
          explicacion: 'Verbos como ὑπακούω, πιστεύω o ἀκολουθέω llevan su complemento en dativo.'
        } }
      ],
      pensar: 'Los discípulos se preguntaron: «¿Quién es este, que aun el viento y el mar le obedecen?». ¿Qué tormenta de tu vida necesita escuchar hoy la voz de Jesús?'
    }
  ];
  window.__GG.sustantivo = sustantivo;
})();
