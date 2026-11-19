/* ==========================================================
   Recursos Bíblicos — Interlineal griego–español (NT) · contenido de las rutas (parte 2: III, IV y taller)
   Ver el encabezado de parte1.js.
   ========================================================== */
(() => {
  const { V, R, queEs, leer } = window.__INTG;

  const errores = [
    {
      id: 'glosa', n: 'La glosa no es «el verdadero significado»', ref: 'Juan 3:8',
      visual: [ V(R('jn', 3, 8, 'Juan 3:8')) ],
      texto: [
        'El error más común al usar un interlineal es tomar la glosa como si fuera el sentido escondido que la traducción no se atrevió a decir. La glosa es solo el sentido básico de la palabra de diccionario.',
        { h: 'Una palabra, dos sentidos' },
        'En Juan 3:8, la primera palabra es τὸ πνεῦμα, glosada «el espíritu». La Reina-Valera traduce «el viento». ¿Se equivocó? No: πνεῦμα significa «viento», «aliento» y «espíritu», y aquí Jesús habla de algo que sopla y cuyo sonido se oye. Al final del mismo versículo vuelve la palabra, ἐκ τοῦ Πνεύματος, y ahí la Reina-Valera dice «del Espíritu». Jesús juega con los dos sentidos: el Espíritu obra como el viento, que no se ve pero se nota.',
        'Si alguien dijera «en el griego dice “el espíritu sopla de donde quiere”, así que la Reina-Valera está mal», estaría usando la glosa en lugar del contexto. El interlineal pone una sola glosa por palabra para que la línea sea coherente, no para corregir a la traducción.',
        { h: 'Cómo usar bien la glosa' },
        'Usa la glosa para reconocer la palabra. Después pregunta: ¿qué sentidos tiene esta palabra en el Nuevo Testamento?, ¿cuál pide este contexto?, ¿cómo la tradujo la Reina-Valera aquí y en otros lugares? Las respuestas están en un buen diccionario, en la concordancia y en el propio texto, no en la glosa.',
        { ejercicio: {
          pregunta: 'Debajo de πνεῦμα en Juan 3:8 dice «espíritu», pero la Reina-Valera dice «viento». ¿Qué concluyes?',
          opciones: [
            { t: 'Que πνεῦμα tiene varios sentidos, y el contexto (algo que sopla y se oye) pide «viento».', ok: true, por_que: 'La glosa da un sentido básico; la traducción elige el que pide el contexto.' },
            { t: 'Que la Reina-Valera tradujo mal.', ok: false, por_que: 'Eligió bien: el versículo habla de algo que sopla.' },
            { t: 'Que el griego dice «espíritu» y hay que corregir la Biblia.', ok: false, por_que: 'La glosa no es más autorizada que la traducción.' }
          ],
          explicacion: 'La glosa ayuda a reconocer; el contexto decide el sentido.'
        } },
        { ir: { t: 'Abrir Juan 3 en el interlineal', a: 'interlineal/#jn/3/8', marco: true } }
      ],
      pensar: '«Así es todo aquel que es nacido del Espíritu» (Jn 3:8). No ves el viento, pero ves lo que hace. ¿Qué evidencias del obrar del Espíritu ves en tu vida?'
    },
    {
      id: 'etimologia', n: 'La falacia etimológica', ref: 'Romanos 1:16',
      visual: [
        V(R('ro', 1, 16, 'Romanos 1:16')),
        { tipo: 'tabla', titulo: 'Etimologías que engañan', tabla: {
          titulo: 'Lo que se oye en algunas prédicas y lo que dice el uso',
          cab: ['Palabra', 'Lo que se dice', 'Lo que dice el uso'],
          filas: [
            ['δύναμις', '«Dinamita»: el evangelio es explosivo', '«Poder», «fuerza», «milagro». La dinamita se inventó en 1867'],
            ['ἐκκλησία', '«Los llamados fuera» del mundo', 'Asamblea, reunión de un pueblo; Hechos 19:32 la usa para una multitud pagana'],
            ['ὑπηρέτης', '«Remero de abajo» en una galera', '«Servidor», «ayudante», «alguacil»'],
            ['μετάνοια', 'Solo «cambio de mente»', '«Arrepentimiento»: volverse de corazón, con frutos (Lc 3:8)']
          ],
          nota: 'La historia de una palabra puede ser interesante, pero su sentido lo da el uso en la época del autor.'
        } }
      ],
      texto: [
        'La falacia etimológica es creer que el sentido «verdadero» de una palabra es el de sus raíces o el de una palabra moderna que viene de ella. Es uno de los errores más comunes al predicar con el griego.',
        { h: 'Δύναμις no es dinamita' },
        'Seguramente has oído que en Romanos 1:16 el evangelio es «la dinamita de Dios». Es cierto que la palabra «dinamita» viene del griego δύναμις: Alfred Nobel la tomó de ahí en el siglo XIX. Pero Pablo no podía pensar en algo que no existía. Para él, δύναμις era «poder», la fuerza de Dios que salva. La palabra nueva salió de la vieja, no al revés. Además, la dinamita destruye; el poder de Dios en el evangelio da vida.',
        { h: 'Las raíces no mandan' },
        'Muchas palabras griegas son compuestas, y es tentador desarmarlas. Ἐκκλησία viene de ἐκ, «de, fuera», y καλέω, «llamar», pero en tiempos del Nuevo Testamento significaba simplemente asamblea, y Lucas la usa para la reunión alborotada del teatro de Éfeso (Hch 19:32). La iglesia sí es un pueblo llamado por Dios, pero eso lo enseñan otros pasajes, no la etimología de la palabra.',
        { h: 'Qué hacer' },
        'Para saber qué significa una palabra, mira cómo la usa el Nuevo Testamento: la ficha del interlineal te dice cuántas veces aparece; un buen diccionario te muestra sus usos; y el contexto decide. La etimología puede ilustrar, pero no puede decidir el sentido de un versículo.',
        { ejercicio: {
          pregunta: '¿Por qué no se puede decir que en Romanos 1:16 el evangelio es «la dinamita de Dios»?',
          opciones: [
            { t: 'Porque la dinamita se inventó siglos después; Pablo usaba δύναμις con el sentido de «poder».', ok: true, por_que: 'El sentido de una palabra se busca en su época, no en las palabras modernas que salieron de ella.' },
            { t: 'Porque δύναμις no tiene relación con «dinamita».', ok: false, por_que: 'Sí la tiene: «dinamita» viene de δύναμις. Pero la relación va del griego al español, no al revés.' },
            { t: 'Porque δύναμις significa «debilidad».', ok: false, por_que: 'Significa «poder», «fuerza».' }
          ],
          explicacion: 'La historia de una palabra no reemplaza su uso. Este error lo describe D. A. Carson en Exegetical Fallacies.'
        } }
      ],
      pensar: 'El evangelio es «poder de Dios para salvación a todo aquel que cree» (Ro 1:16). Ese poder no necesita adornos para impresionar. ¿Confías en el poder del mensaje mismo cuando hablas de Cristo?'
    },
    {
      id: 'todos', n: 'Todos los sentidos a la vez', ref: 'Juan 3:3',
      visual: [ V(R('jn', 3, 3, 'Juan 3:3')) ],
      texto: [
        'El tercer error es el contrario del primero: en lugar de quedarse con un solo sentido, cargar a la palabra con todos los sentidos que tiene en el diccionario, como si el autor los quisiera decir todos en cada versículo.',
        { h: 'Una palabra en un versículo' },
        'Una palabra puede tener muchos sentidos posibles, pero en una frase normalmente quiere decir uno. Si en Lucas 1:3 ἄνωθεν es «desde el principio», no hay que agregarle «de arriba» y «de nuevo». Leer todos los sentidos a la vez convierte una frase clara en un acertijo que el autor no escribió.',
        { h: 'Cuando el autor juega con la palabra' },
        'Hay excepciones, y Juan 3:3 es una de ellas. Jesús dice que hay que nacer ἄνωθεν, glosado «de arriba». La palabra significa «de arriba» y también «de nuevo». La Reina-Valera traduce «de nuevo», que es como lo entendió Nicodemo, porque pregunta cómo puede un hombre volver a nacer siendo viejo (Jn 3:4). Pero en el mismo capítulo, Juan usa ἄνωθεν para decir «de arriba» (Jn 3:31). Muchos comentaristas creen que Juan juega con los dos sentidos: el nuevo nacimiento es un nacer otra vez que viene de arriba, de Dios.',
        'La diferencia está en que aquí el contexto da pistas de los dos sentidos: la pregunta de Nicodemo y el uso del mismo capítulo. Un doble sentido se demuestra con el texto, no se supone en cada palabra.',
        { h: 'Una regla sencilla' },
        'Pregunta siempre: ¿qué sentido pide este contexto? Si el contexto da pistas claras de dos sentidos, puedes señalarlos. Si no, quédate con uno y deja los demás para otros versículos.',
        { ejercicio: {
          pregunta: 'Alguien explica que en cada versículo una palabra griega dice «todo lo que significa». ¿Qué le responderías?',
          opciones: [
            { t: 'Que en una frase la palabra suele tener un sentido, y que un doble sentido hay que mostrarlo con el contexto.', ok: true, por_que: 'Así se respeta lo que el autor quiso decir.' },
            { t: 'Que tiene razón, porque el griego es más rico que el español.', ok: false, por_que: 'La riqueza de una lengua no hace que cada palabra diga todo a la vez.' },
            { t: 'Que las palabras griegas no tienen más de un sentido.', ok: false, por_que: 'Muchas tienen varios; el contexto elige.' }
          ],
          explicacion: 'Elegir el sentido que pide el contexto es la regla; el juego de palabras es una excepción que el texto deja ver.'
        } },
        { ir: { t: 'Abrir Juan 3 en el interlineal', a: 'interlineal/#jn/3/3', marco: true } }
      ],
      pensar: 'Jesús dijo: «el que no naciere de nuevo, no puede ver el reino de Dios» (Jn 3:3). El nuevo nacimiento es obra de Dios. ¿Puedes contar cuándo y cómo naciste de nuevo?'
    },
    {
      id: 'aoristo', n: 'El aoristo no significa «una vez y para siempre»', ref: 'Juan 2:20',
      visual: [ V(R('jn', 2, 20, 'Juan 2:20')), V(R('ro', 3, 23, 'Romanos 3:23')) ],
      texto: [
        'Es frecuente oír que un verbo «está en aoristo, y eso significa que ocurrió una vez y para siempre». La frase suena erudita, pero no es lo que dice el aoristo.',
        { h: 'Lo que dice el aoristo' },
        'El aoristo mira la acción como un todo, sin detenerse en su duración ni en su repetición. Es como ver una película entera desde lejos, en lugar de mirar un fotograma. Puede referirse a algo instantáneo, a algo que duró años o a algo que se repitió muchas veces. Lo que fue en la realidad lo dicen el contexto y el sentido del verbo, no el aoristo solo.',
        { h: 'Cuarenta y seis años en aoristo' },
        'Mira Juan 2:20. Los judíos dicen que el templo οἰκοδομήθη, «fue edificado», en cuarenta y seis años. El verbo está en aoristo, y la obra duró casi medio siglo. El aoristo resume toda esa construcción como un hecho, sin hablar de su duración: la duración la dice la frase «en cuarenta y seis años».',
        'En Romanos 3:23, ἥμαρτον, «pecaron», también es aoristo. No quiere decir que cada persona pecó una sola vez, sino que resume la historia de pecado de toda la humanidad: todos pecaron. Y el verbo siguiente, ὑστεροῦνται, «están destituidos», está en presente: la consecuencia sigue.',
        { h: 'Cuidado al predicar' },
        'Hay acciones que sí ocurrieron una vez para siempre, como el sacrificio de Cristo (He 10:10 lo dice con la palabra ἐφάπαξ, «una vez para siempre»). Pero eso lo dice el texto con palabras, no el tiempo del verbo. Frank Stagg escribió un artículo famoso sobre este error, titulado «El aoristo maltratado» (1972).',
        { ejercicio: {
          pregunta: 'En Juan 2:20, οἰκοδομήθη está en aoristo y la construcción duró cuarenta y seis años. ¿Qué enseña eso?',
          opciones: [
            { t: 'Que el aoristo no dice cuánto duró una acción: la resume como un todo.', ok: true, por_que: 'La duración la da el contexto («en cuarenta y seis años»).' },
            { t: 'Que el templo se construyó en un instante.', ok: false, por_que: 'El mismo versículo dice que tomó cuarenta y seis años.' },
            { t: 'Que Juan usó mal el aoristo.', ok: false, por_que: 'Lo usó como se usaba: para mirar la obra completa.' }
          ],
          explicacion: 'El aoristo es el tiempo «normal» para narrar. No convierte una acción en única ni en definitiva por sí mismo.'
        } }
      ],
      pensar: '«Todos pecaron, y están destituidos de la gloria de Dios» (Ro 3:23). Y el versículo siguiente dice que somos justificados gratuitamente por su gracia (Ro 3:24). ¿Vives cada día descansando en esa gracia?'
    },
    {
      id: 'en-el-griego', n: '«En el griego dice…»', ref: 'Efesios 5:18',
      visual: [ V(R('ef', 5, 18, 'Efesios 5:18')) ],
      texto: [
        'La frase «en el griego dice…» puede abrir una buena explicación o puede cerrar una discusión con una autoridad falsa. El interlineal ayuda a usarla bien, siempre que se respeten dos reglas: decir lo que el griego realmente dice, y no decir más de lo que dice.',
        { h: 'Un buen uso: Efesios 5:18' },
        'Mira el verbo πληροῦσθε, glosado «llenar». La morfología dice «pres. pas. imper. 2p»: presente, pasiva, imperativo, segunda persona plural. Las tres cosas importan. Es un mandato: «sed llenos»; es pasivo: no nos llenamos solos, nos deja llenar el Espíritu; y está en presente, que en imperativo suele mirar una acción que continúa. Por eso muchos maestros lo explican como «sean llenos continuamente». Esa explicación tiene base en la forma, y concuerda con lo que muestra Hechos: los mismos discípulos llenos en Pentecostés (Hch 2:4) fueron llenos otra vez (Hch 4:31).',
        { h: 'Un mal uso' },
        'El problema aparece cuando se le pide a la forma más de lo que da. Si alguien dijera «el presente griego prueba que hay que ser lleno exactamente cada día a cierta hora», estaría inventando. El presente da un matiz de continuidad; el resto, si es verdad, tiene que venir de otros textos.',
        { h: 'Antes de decir «en el griego dice…»' },
        'Pregúntate: ¿lo que voy a decir está en la glosa, en la morfología o en el diccionario?, ¿lo confirma el contexto?, ¿lo explicaría igual un comentario serio?, ¿la traducción lo deja ver de alguna forma? Si las respuestas son sí, puedes decirlo con sencillez. Si no, es mejor no decirlo.',
        { ejercicio: {
          pregunta: '¿Qué puedes afirmar con base en la forma de πληροῦσθε en Efesios 5:18?',
          opciones: [
            { t: 'Que es un mandato, que lo realiza otro (pasiva) y que mira una acción continua (presente).', ok: true, por_que: 'Todo eso está en la morfología: «pres. pas. imper. 2p».' },
            { t: 'Que hay que ser lleno una sola vez en la vida.', ok: false, por_que: 'El presente apunta más bien a lo continuo, y Hechos muestra llenuras repetidas.' },
            { t: 'Que el griego dice «llenar» y por eso no es un mandato.', ok: false, por_que: '«Llenar» es solo la glosa del lema; la forma es imperativa.' }
          ],
          explicacion: 'La morfología permite afirmar con seguridad lo que la forma dice, y obliga a no afirmar lo que no dice.'
        } },
        { ir: { t: 'Abrir Efesios 5 en el interlineal', a: 'interlineal/#ef/5/18', marco: true } }
      ],
      pensar: '«No os embriaguéis con vino, en lo cual hay disolución; antes bien sed llenos del Espíritu» (Ef 5:18). ¿Buscas cada día la plenitud del Espíritu, o te conformas con una experiencia del pasado?'
    },
    {
      id: 'un-dios', n: 'Juan 1:1 y el «un dios»', ref: 'Juan 1:1',
      visual: [ V(R('jn', 1, 1, 'Juan 1:1')), V(R('jn', 1, 18, 'Juan 1:18')) ],
      texto: [
        'Algunos grupos usan el griego para negar la divinidad de Cristo. El caso más conocido es el de la Traducción del Nuevo Mundo, la versión de los Testigos de Jehová, que en Juan 1:1 dice «la Palabra era un dios». El argumento es que Θεός, al final del versículo, no lleva artículo. El interlineal te deja ver el texto y responder con respeto y con datos.',
        { h: 'Por qué Θεός no lleva artículo' },
        'En la ruta II viste que en καὶ Θεὸς ἦν ὁ Λόγος el sujeto es el que lleva el artículo, ὁ Λόγος. Si Juan hubiera escrito también ὁ Θεός, los dos serían intercambiables, y la frase diría que el Verbo es toda la persona de Dios que acaba de nombrar, es decir, el Padre: «el Verbo era con Dios» y a la vez «era el mismo Dios con quien estaba». Juan evita eso. Sin el artículo, Θεός dice qué es el Verbo, su naturaleza: el Verbo era Dios, distinto del Padre y de la misma naturaleza.',
        { h: 'El mismo capítulo responde' },
        'En Juan 1, Θεός aparece sin artículo varias veces más: en el versículo 6, παρὰ Θεοῦ, «de parte de Dios»; en el 12, τέκνα Θεοῦ, «hijos de Dios»; en el 13, ἐκ Θεοῦ, «de Dios»; y en el 18, Θεὸν οὐδεὶς ἑώρακεν, «a Dios nadie le vio». En ninguno de esos versículos alguien traduce «un dios». Traducir así solo en el versículo 1 es una decisión doctrinal, no gramatical. Y el mismo Juan termina su evangelio con Tomás diciendo a Jesús ὁ Κύριός μου καὶ ὁ Θεός μου, «¡Señor mío, y Dios mío!» (Jn 20:28).',
        { posturas: {
          titulo: 'Dos lecturas de καὶ Θεὸς ἦν ὁ Λόγος',
          a: { n: 'El Verbo era Dios', t: 'La lectura de la iglesia desde el principio y de casi todas las traducciones: Θεός sin artículo describe la naturaleza del Verbo. Juan lo distingue del Padre («era con Dios») y lo identifica con Dios en su ser. Así lo leen también quienes estudian la gramática griega con independencia de cualquier iglesia.' },
          b: { n: 'El Verbo era «un dios»', t: 'La lectura de los Testigos de Jehová en su Traducción del Nuevo Mundo: sin artículo, Θεός sería indefinido, y Cristo sería un ser divino creado, inferior al Padre. Su enseñanza oficial lo identifica con el arcángel Miguel antes de nacer.' },
          c: 'La gramática no apoya la segunda lectura: el mismo capítulo usa Θεός sin artículo para el único Dios, y el griego no tiene artículo indefinido. Los miembros de ese grupo merecen respeto; su enseñanza sobre Cristo contradice el testimonio de Juan.'
        } },
        { ir: { t: 'Ver «Dios y hombre en una persona» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/' } }
      ],
      pensar: 'Juan escribió su evangelio «para que creáis que Jesús es el Cristo, el Hijo de Dios» (Jn 20:31). ¿Cómo responderías, con mansedumbre y con la Escritura, a alguien que te dice que Jesús no es Dios?'
    }
  ];

  const traduccion = [
    {
      id: 'comparar', n: 'Comparar con la Reina-Valera', ref: 'Romanos 12:1',
      visual: [ V(R('ro', 12, 1, 'Romanos 12:1')) ],
      texto: [
        'El interlineal da su mejor fruto cuando se lee junto a la traducción. Comparar es preguntar, palabra por palabra: ¿dónde está esto en la Reina-Valera?, ¿por qué lo tradujo así?, ¿qué otra traducción sería posible?',
        { h: 'Romanos 12:1' },
        'Recorre la línea con la Reina-Valera al lado. Παρακαλῶ es «exhortar»; la Reina-Valera dice «os ruego». El verbo tiene los dos matices: exhortar, animar y rogar. διὰ τῶν οἰκτιρμῶν τοῦ Θεοῦ es «por medio de las compasiones del Dios»: la Reina-Valera dice «por las misericordias de Dios», y el plural griego se mantiene. θυσίαν ζῶσαν ἁγίαν es «sacrificio, vivir, santo»: ζῶσαν es un participio, «viviente», y la Reina-Valera dice «en sacrificio vivo».',
        { h: 'Una palabra con dos traducciones posibles' },
        'Al final, τὴν λογικὴν λατρείαν: «el racional culto». Λογικός viene de λόγος y puede significar «racional», «razonable» o «espiritual», en el sentido de un culto con la mente y no solo con ritos. La Reina-Valera dice «vuestro culto racional»; otras traducciones dicen «culto espiritual». Las dos captan algo verdadero: Pablo pide una entrega total, consciente y del corazón, en lugar de los sacrificios de animales.',
        { h: 'Lo que la comparación enseña' },
        'Al comparar descubres tres cosas: que la traducción es fiel; que a veces el griego tiene matices que una sola palabra española no puede cubrir; y que las diferencias entre traducciones suelen ser elecciones legítimas, no errores. Esto te da confianza en tu Biblia y te ayuda a explicarla mejor.',
        { ejercicio: {
          pregunta: 'Una traducción dice «culto racional» y otra «culto espiritual» en Romanos 12:1. ¿Qué concluyes con el interlineal?',
          opciones: [
            { t: 'Que λογικός tiene más de un matiz, y las dos traducciones eligen uno legítimo.', ok: true, por_que: 'La palabra significa «racional» y se usaba para un culto interior, no solo de ritos.' },
            { t: 'Que una de las dos cambió el texto.', ok: false, por_que: 'Las dos traducen la misma palabra griega.' },
            { t: 'Que el griego no dice nada sobre el culto.', ok: false, por_que: 'Dice λατρείαν, «culto», con su adjetivo.' }
          ],
          explicacion: 'Comparar traducciones con el interlineal muestra las decisiones del traductor y la riqueza de la palabra.'
        } },
        { ir: { t: 'Abrir Romanos 12 en el interlineal', a: 'interlineal/#ro/12/1', marco: true } }
      ],
      pensar: '«Que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios» (Ro 12:1). ¿Qué parte de tu vida todavía no has puesto sobre el altar?'
    },
    {
      id: 'semitismos', n: 'El griego con acento hebreo', ref: 'Lucas 2:1',
      visual: [
        V(R('lc', 2, 1, 'Lucas 2:1')),
        { tipo: 'tabla', titulo: 'Semitismos frecuentes', tabla: {
          titulo: 'Giros hebreos en el griego del Nuevo Testamento',
          cab: ['Griego', 'Glosas', 'Qué significa'],
          filas: [
            ['ἐγένετο δέ…', 'llegar a ser · pero', '«Aconteció que…»: comienzo de un relato, como el hebreo וַיְהִי'],
            ['ἀποκριθεὶς εἶπεν', 'responder · decir', '«Respondiendo, dijo»: dos verbos para un solo hecho'],
            ['υἱοὶ τοῦ φωτός', 'hijos · de la · luz', 'Los que pertenecen a la luz; ver Lucas 16:8'],
            ['ἀμὴν ἀμὴν λέγω', 'amén · amén · decir', '«De cierto, de cierto os digo»: la palabra hebrea amén'],
            ['πρὸ προσώπου', 'antes de · rostro', '«Delante de», literalmente «ante el rostro»']
          ],
          nota: 'Los semitismos son más comunes en los evangelios y en Apocalipsis, y menos en Lucas, Hechos y Hebreos.'
        } }
      ],
      texto: [
        'El Nuevo Testamento se escribió en griego común, el que se hablaba en todo el imperio, pero lo escribieron judíos (salvo, probablemente, Lucas) que conocían el Antiguo Testamento de memoria y pensaban también en hebreo y arameo. Por eso su griego tiene giros que vienen de esas lenguas: los semitismos.',
        { h: 'Lucas 2:1' },
        'El relato de la Navidad empieza con Ἐγένετο δέ, glosado «llegar a ser · pero». Un griego no empezaba así sus relatos; un lector del Antiguo Testamento, sí: es el «Y aconteció» de tantos relatos hebreos, que en la traducción griega del Antiguo Testamento se decía con estas mismas palabras. La Reina-Valera lo traduce como siempre: «Aconteció en aquellos días». Lucas, que escribía un griego cuidado, usa este giro a propósito para que su relato suene como las historias de la Escritura.',
        { h: 'Por qué importa' },
        'Si lees las glosas sin conocer estos giros, algunas líneas parecen extrañas: «respondiendo, dijo», cuando nadie había preguntado; «hijos de la luz», cuando no se habla de familia. No son errores ni sentidos ocultos: son maneras de hablar. El buen intérprete los reconoce y los lee como un judío del siglo I.',
        'También pasa al revés: el Nuevo Testamento cita el Antiguo muchas veces, a veces de la traducción griega que usaban los judíos de habla griega (la Septuaginta) y a veces traduciendo directamente del hebreo. Cuando una cita no es idéntica a tu Antiguo Testamento, la razón suele estar ahí.',
        { ejercicio: {
          pregunta: 'En el interlineal lees ἀποκριθεὶς εἶπεν, «responder · decir», en un pasaje donde nadie ha hecho una pregunta. ¿Qué pasa?',
          opciones: [
            { t: 'Es un giro semítico para introducir lo que alguien dice; no supone una pregunta previa.', ok: true, por_que: 'Muchas veces significa simplemente «tomó la palabra y dijo».' },
            { t: 'Es un error del texto griego.', ok: false, por_que: 'Es una manera normal de hablar en el griego de los evangelios.' },
            { t: 'Significa que hubo una pregunta que se perdió.', ok: false, por_que: 'No hay que suponer textos perdidos: es un giro.' }
          ],
          explicacion: 'Reconocer los semitismos evita leer en las glosas cosas que el autor no quiso decir.'
        } },
        { ir: { t: 'Abrir Lucas 2 en el interlineal', a: 'interlineal/#lc/2/1', marco: true } }
      ],
      pensar: 'Lucas cuenta el nacimiento de Jesús con el lenguaje de las historias del Antiguo Testamento. ¿Qué te enseña eso sobre la unidad de toda la Escritura?'
    },
    {
      id: 'variantes', n: 'Cuando la Reina-Valera traduce otro texto griego', ref: '1 Juan 5:7-8',
      visual: [
        V(R('1jn', 5, 7, '1 Juan 5:7')),
        V(R('1jn', 5, 8, '1 Juan 5:8')),
        { tipo: 'tabla', titulo: 'Versículos que faltan', tabla: {
          titulo: 'Versículos de la Reina-Valera que no están en Nestle 1904',
          cab: ['Libro', 'Versículos'],
          filas: [
            ['Mateo', '17:21; 18:11; 23:14'],
            ['Marcos', '7:16; 9:44; 9:46; 11:26; 15:28'],
            ['Lucas', '17:36; 23:17'],
            ['Hechos', '8:37; 15:34; 24:7; 28:29'],
            ['Romanos', '16:24']
          ],
          nota: 'Hechos 19:41 y 2 Corintios 13:14 sí están: Nestle los numera dentro del versículo anterior.'
        } }
      ],
      texto: [
        'El interlineal usa el griego de Nestle 1904, y la Reina-Valera se tradujo del Textus Receptus, el texto griego que se imprimió desde 1516 con los manuscritos que había a mano. Los dos coinciden en la inmensa mayoría de las palabras, pero no en todas. Este recurso no esconde las diferencias: las muestra y las explica.',
        { h: 'Lo que vas a encontrar' },
        'En quince lugares, la Reina-Valera tiene un versículo que Nestle 1904 no trae: la página lo muestra con una nota en lugar del griego. En algunos pasajes famosos, el versículo existe pero dice algo distinto, y la página pone una nota debajo: el final del Padre Nuestro (Mt 6:13), el ángel del estanque (Jn 5:3-4), 1 Timoteo 3:16 y 1 Juan 5:7-8, entre otros. Y hay dos pasajes largos que Nestle imprime entre corchetes o paréntesis: el final de Marcos (Mr 16:9-20) y la mujer adúltera (Jn 7:53–8:11).',
        { h: '1 Juan 5:7-8' },
        'Mira el panel. En Nestle 1904, el versículo 7 dice solo ὅτι τρεῖς εἰσιν οἱ μαρτυροῦντες, «porque tres son los que dan testimonio», y el 8 sigue: el Espíritu, el agua y la sangre. La Reina-Valera agrega las palabras sobre el Padre, el Verbo y el Espíritu Santo en el cielo. Esas palabras no aparecen en ningún manuscrito griego anterior al siglo X, y entraron al texto impreso en el siglo XVI. La doctrina de la Trinidad no depende de ellas: se enseña en muchos otros pasajes, como Mateo 28:19.',
        { posturas: {
          titulo: '¿Qué texto griego seguir?',
          a: { n: 'El texto crítico', t: 'Compara todos los manuscritos y da más peso a los más antiguos (papiros del siglo II y III, grandes códices del siglo IV). Es la base de Nestle 1904 y de la mayoría de las traducciones modernas.' },
          b: { n: 'El Textus Receptus o el texto mayoritario', t: 'Sigue el texto que la iglesia leyó durante siglos, o el que traen la mayoría de los manuscritos, casi todos medievales. Es la base de la Reina-Valera y de otras traducciones clásicas.' },
          c: 'Las dos posturas las sostienen cristianos que creen en la inspiración de la Escritura. Las diferencias afectan a una pequeña parte del texto, y ninguna doctrina de la fe depende de un pasaje discutido.'
        } },
        { ir: { t: 'Ver «Pasajes discutidos» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/7' } }
      ],
      pensar: 'Dios preservó su Palabra en miles de manuscritos, y la abundancia de copias permite saber lo que escribieron los apóstoles. ¿Cómo fortalece eso tu confianza al leer tu Biblia?'
    },
    {
      id: 'kyrios', n: '«Señor»: κύριος y el nombre de Dios', ref: 'Romanos 10:13',
      visual: [ V(R('ro', 10, 13, 'Romanos 10:13')) ],
      texto: [
        'En el Antiguo Testamento, la Reina-Valera escribe «Jehová» donde el hebreo tiene el nombre de cuatro letras. En el Nuevo Testamento ese nombre no aparece: en su lugar está κύριος, «Señor». El interlineal permite ver qué hicieron los apóstoles con el nombre de Dios.',
        { h: 'De Joel a Romanos' },
        'Pablo cita en Romanos 10:13 la promesa de Joel, «todo aquel que invocare el nombre de Jehová será salvo» (Jl 2:32). En el griego de Romanos dice τὸ ὄνομα Κυρίου, «el nombre de Señor». Los judíos de habla griega ya leían κύριος donde estaba el nombre de Dios, y los apóstoles siguieron esa costumbre.',
        { ir: { t: 'Ver Joel 2:32 en el Interlineal hebreo', a: '../../interlineal-hebreo/#jl/3/5' } },
        { h: 'Lo que hace Pablo' },
        'Lee el contexto. En Romanos 10:9, Pablo dice que hay que confesar «que Jesús es el Señor», κύριον Ἰησοῦν. Cuatro versículos después, el «Señor» cuyo nombre se invoca para ser salvo es el mismo. Pablo aplica a Jesús un texto que en Joel habla de Jehová. Esto ocurre muchas veces en el Nuevo Testamento: los apóstoles reconocían en Jesús al Señor del Antiguo Testamento.',
        { h: 'Cuidado con «Señor»' },
        'No todo κύριος en el Nuevo Testamento se refiere a Dios. La misma palabra se usa para un amo, un dueño o como trato respetuoso, «señor». En Juan 4:11, la samaritana le dice a Jesús κύριε, «Señor», sin saber todavía quién es. Como siempre, el contexto decide.',
        { ejercicio: {
          pregunta: 'En Romanos 10:13 Pablo cita a Joel. ¿Qué palabra griega ocupa el lugar del nombre de Dios del hebreo?',
          opciones: [
            { t: 'κύριος, «Señor», que en este contexto se refiere a Jesús.', ok: true, por_que: 'El versículo 9 llama «Señor» a Jesús; Pablo le aplica la promesa de Joel.' },
            { t: 'Θεός, «Dios».', ok: false, por_que: 'En la cita aparece Κυρίου, no Θεοῦ.' },
            { t: 'Una transliteración del nombre hebreo.', ok: false, por_que: 'El Nuevo Testamento no transcribe el nombre; usa κύριος.' }
          ],
          explicacion: 'Seguir el nombre de Dios del Antiguo al Nuevo Testamento muestra cómo los apóstoles confesaban a Jesús como Señor.'
        } },
        { ir: { t: 'Abrir Romanos 10 en el interlineal', a: 'interlineal/#ro/10/13', marco: true } }
      ],
      pensar: '«Si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo» (Ro 10:9). ¿Qué significa en tu vida diaria que Jesús sea tu Señor?'
    },
    {
      id: 'metodo', n: 'Un método en cinco pasos', ref: '2 Timoteo 2:15',
      visual: [
        V(R('2ti', 2, 15, '2 Timoteo 2:15')),
        { tipo: 'tabla', titulo: 'Los cinco pasos', tabla: {
          titulo: 'Cómo usar el interlineal al estudiar un pasaje',
          cab: ['Paso', 'Qué hacer'],
          filas: [
            ['1. Leer', 'Lee el pasaje completo en la Reina-Valera, con su contexto'],
            ['2. Ubicar', 'Abre el interlineal y busca dónde está cada palabra española en la línea griega'],
            ['3. Analizar', 'Toca las palabras importantes: su forma, su lema, cuántas veces aparece'],
            ['4. Comparar', 'Mira cómo se traduce la misma palabra en otros pasajes y en otras traducciones'],
            ['5. Volver', 'Vuelve a la traducción y resume lo que entendiste, sin decir más de lo que dice el texto']
          ],
          nota: 'Los pasos 3 y 4 se apoyan en Vocabulario y gramática básica del griego del NT.'
        } }
      ],
      texto: [
        'Pablo le pide a Timoteo que sea un obrero que no tiene de qué avergonzarse, ὀρθοτομοῦντα τὸν λόγον τῆς ἀληθείας, glosado «trazar rectamente · la · palabra · de la · verdad». La imagen es la de un camino o un surco bien trazado: manejar la Palabra con rectitud. El interlineal es una herramienta para eso, si se usa con método.',
        { h: 'Los cinco pasos' },
        'Primero, lee el pasaje en la Reina-Valera, completo y con su contexto: el interlineal no se abre en frío. Segundo, abre el interlineal y ubica cada palabra española en la línea griega. Tercero, toca las palabras importantes y mira su forma, su palabra de diccionario y su frecuencia. Cuarto, compara: cómo se traduce esa palabra en otros versículos, qué dicen otras traducciones, qué explica un buen diccionario. Quinto, vuelve a la traducción y resume lo que entendiste.',
        { h: 'Un ejemplo breve' },
        'En 2 Timoteo 2:15, el paso 3 muestra que σπούδασον, «procurar con diligencia», es un imperativo aoristo: una orden directa. El paso 4 muestra que el verbo aparece once veces en el Nuevo Testamento con el sentido de «esforzarse», «apresurarse». El paso 5 te devuelve a la Reina-Valera, «procura con diligencia», ahora con más peso: Pablo no sugiere, ordena esforzarse.',
        { h: 'Lo que el método protege' },
        'El método te protege de los errores de la ruta III: no tomarás la glosa por el «verdadero sentido», no desarmarás palabras en sus raíces, no cargarás un versículo con todos los sentidos del diccionario ni le pedirás al aoristo lo que no dice. Y te deja algo mejor: un conocimiento más profundo de tu Biblia en español.',
        { ejercicio: {
          pregunta: '¿Por qué el método empieza leyendo la Reina-Valera y no el interlineal?',
          opciones: [
            { t: 'Porque el sentido de las palabras lo da el contexto, y el contexto se ve mejor en una traducción completa.', ok: true, por_que: 'El interlineal mira de cerca; la traducción da la visión de conjunto.' },
            { t: 'Porque el interlineal es menos fiel que la traducción.', ok: false, por_que: 'No es menos fiel; es otra clase de herramienta.' },
            { t: 'Porque el orden no importa.', ok: false, por_que: 'Importa: empezar por las palabras sueltas lleva a perder el contexto.' }
          ],
          explicacion: 'Del conjunto a la palabra, y de la palabra otra vez al conjunto.'
        } },
        { ir: { t: 'Ver Cómo interpretar la Biblia', a: '../../interpretar-biblia/' } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad» (2 Ti 2:15). ¿Qué tiempo le das cada semana al estudio cuidadoso de la Escritura?'
    }
  ];

  const taller = [
    {
      id: 'padre-nuestro', n: 'El Padre Nuestro', ref: 'Mateo 6:9-13',
      visual: [ V(R('mt', 6, 9, 'Mateo 6:9')), V(R('mt', 6, 11, 'Mateo 6:11')), V(R('mt', 6, 13, 'Mateo 6:13')) ],
      texto: [
        'El Padre Nuestro es la oración más conocida del mundo. Leerla en el interlineal la vuelve a hacer nueva.',
        { ir: { t: 'Abrir Mateo 6:9 en el interlineal', a: 'interlineal/#mt/6/9', marco: true } },
        { h: 'Mateo 6:9' },
        'La oración empieza con Πάτερ ἡμῶν, «Padre · de nosotros». Πάτερ está en vocativo, el caso con que se habla a alguien; y ἡμῶν, «de nosotros», es plural: aun quien ora solo, ora como parte de una familia. Después vienen tres imperativos en aoristo de tercera persona: Ἁγιασθήτω, «santificar» (sea santificado), ἐλθάτω, «venga», y γενηθήτω, «hágase». En español no tenemos imperativos de tercera persona; por eso la traducción dice «santificado sea», «venga».',
        { h: 'Mateo 6:11' },
        'El pan es τὸν ἐπιούσιον, glosado «de cada día». La palabra ἐπιούσιος aparece solo aquí y en Lucas 11:3, y casi en ningún otro texto griego. Por eso se discute su sentido exacto: «de cada día», «necesario» o «del día que viene». Todas las opciones apuntan a lo mismo: depender de Dios para lo de hoy. Es un buen ejemplo de humildad ante el texto: cuando una palabra es rara, no hay que afirmar más de lo que se sabe.',
        { h: 'Mateo 6:13' },
        'Mira el último panel y la nota de la página: en Nestle 1904 la oración termina con ἀπὸ τοῦ πονηροῦ, «del malo» o «del mal». La doxología «porque tuyo es el reino, y el poder, y la gloria» no está en los manuscritos más antiguos; la traen muchos manuscritos posteriores y la Reina-Valera. Sus palabras se parecen a la alabanza de David en 1 Crónicas 29:11, y la iglesia las usó desde muy temprano para cerrar la oración.',
        { ejercicio: {
          pregunta: '¿Qué indica que ἡμῶν, en Πάτερ ἡμῶν, sea plural?',
          opciones: [
            { t: 'Que se ora como parte de la familia de Dios, aunque se ore a solas.', ok: true, por_que: 'Jesús enseña a decir «nuestro», no «mío».' },
            { t: 'Que hay varios padres.', ok: false, por_que: 'Πάτερ es singular; el plural es «de nosotros».' },
            { t: 'Que la oración solo se puede decir en grupo.', ok: false, por_que: 'Jesús enseñó también a orar en lo secreto (Mt 6:6).' }
          ],
          explicacion: 'El número del pronombre, que la glosa muestra con «de nosotros», dice mucho de la oración cristiana.'
        } }
      ],
      pensar: 'La oración empieza con el nombre de Dios, su reino y su voluntad, y solo después pide el pan (Mt 6:9-11). ¿Qué ocupa el primer lugar en tus oraciones?'
    },
    {
      id: 'ro8', n: 'Romanos 8:1', ref: 'Romanos 8:1',
      visual: [ V(R('ro', 8, 1, 'Romanos 8:1')) ],
      texto: [
        'Romanos 8 empieza con una de las frases más consoladoras de la Biblia. El interlineal deja ver su fuerza y, de paso, una diferencia de texto.',
        { ir: { t: 'Abrir Romanos 8:1 en el interlineal', a: 'interlineal/#ro/8/1', marco: true } },
        { h: 'Palabra por palabra' },
        'Οὐδὲν ἄρα νῦν κατάκριμα: «ninguna · así que · ahora · condenación». El griego pone primero Οὐδέν, «ninguna», para darle todo el peso: ¡ninguna! Ἄρα saca la conclusión de lo que Pablo venía diciendo en los capítulos 5 a 7. Νῦν, «ahora», marca el cambio: lo que antes era condena, ahora no lo es. Κατάκριμα, «condenación», es la sentencia del juez. Y el griego no tiene el verbo «hay»: la frase es más tajante sin él.',
        'Después, τοῖς ἐν Χριστῷ Ἰησοῦ, «a los · en · Cristo · Jesús». El artículo τοῖς convierte la frase en un grupo de personas: «los que están en Cristo Jesús». No dice «los que se portan bien», sino los que están unidos a Cristo.',
        { h: 'La diferencia de texto' },
        'La nota de la página avisa que la Reina-Valera agrega aquí «los que no andan conforme a la carne, sino conforme al Espíritu». Esas palabras están en el versículo 4 en todos los manuscritos, y en el versículo 1 solo en manuscritos posteriores. La enseñanza no cambia: Romanos 8:4 dice lo mismo. Pero en el versículo 1 Pablo deja la promesa limpia: ninguna condenación para los que están en Cristo, y después explica cómo viven.',
        { ejercicio: {
          pregunta: '¿Por qué Οὐδέν va al principio de Romanos 8:1?',
          opciones: [
            { t: 'Para darle énfasis: lo primero que Pablo quiere que oigas es «ninguna».', ok: true, por_que: 'En griego, lo que va primero suele llevar el peso de la frase.' },
            { t: 'Porque en griego la negación siempre va primero.', ok: false, por_que: 'No siempre; aquí es una elección del autor.' },
            { t: 'Porque es el sujeto del verbo «hay».', ok: false, por_que: 'El griego ni siquiera tiene el verbo; Οὐδέν acompaña a κατάκριμα.' }
          ],
          explicacion: 'El orden de las palabras en griego da énfasis. Leerlo así hace sentir la fuerza del versículo.'
        } }
      ],
      pensar: '«Ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). ¿Hay alguna culpa que sigues cargando aunque Cristo ya la llevó?'
    },
    {
      id: 'fil2', n: 'Filipenses 2:6-7', ref: 'Filipenses 2:6-7',
      visual: [ V(R('fil', 2, 6, 'Filipenses 2:6')), V(R('fil', 2, 7, 'Filipenses 2:7')) ],
      texto: [
        'Filipenses 2:6-11 es uno de los textos más profundos sobre Cristo. Muchos lo consideran un himno de la iglesia primitiva. Aquí miramos sus dos primeros versículos.',
        { ir: { t: 'Abrir Filipenses 2:6 en el interlineal', a: 'interlineal/#fil/2/6', marco: true } },
        { h: 'En forma de Dios' },
        'ἐν μορφῇ Θεοῦ ὑπάρχων: «en · forma · de Dios · ser». Μορφή no es una apariencia exterior, sino la forma que expresa lo que algo es. Ὑπάρχων es un participio presente: Cristo existía, y sigue existiendo, en forma de Dios. Después, τὸ εἶναι ἴσα Θεῷ, «el ser iguales a Dios»: el artículo con el infinitivo, como en Filipenses 1:21. Cristo no consideró ese ser igual a Dios como algo a qué aferrarse.',
        { h: 'Se despojó a sí mismo' },
        'En el versículo 7, ἑαυτὸν ἐκένωσεν: «sí mismo · vaciar». De este verbo viene la palabra kénosis. ¿De qué se vació? El mismo versículo responde con dos participios: μορφὴν δούλου λαβών, «forma · de siervo · tomar», y ἐν ὁμοιώματι ἀνθρώπων γενόμενος, «en · semejanza · de seres humanos · llegar a ser». Cristo no se vació restando su divinidad, sino sumando la humanidad y la condición de siervo: dejó su gloria y sus privilegios, no lo que él es.',
        { posturas: {
          titulo: '¿De qué se despojó Cristo?',
          a: { n: 'De su gloria y del uso independiente de sus atributos', t: 'Cristo siguió siendo plenamente Dios, pero renunció a la gloria que tenía con el Padre (Jn 17:5) y vivió como hombre dependiente del Padre y del Espíritu. Es la lectura de la iglesia desde los concilios y de las Asambleas de Dios.' },
          b: { n: 'De algunos atributos divinos', t: 'Algunos teólogos del siglo XIX enseñaron que Cristo dejó de lado atributos como la omnisciencia o la omnipresencia mientras estuvo en la tierra.' },
          c: 'El texto no dice que perdió nada de su ser: lo explica con lo que tomó, la forma de siervo. Un Dios que dejara de tener sus atributos dejaría de ser Dios.'
        } },
        { ir: { t: 'Ver «Dios y hombre en una persona» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/' } }
      ],
      pensar: 'Pablo presenta la humildad de Cristo como ejemplo: «Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús» (Fil 2:5). ¿En qué relación concreta te está pidiendo Dios que tomes forma de siervo?'
    },
    {
      id: 'he11', n: 'Hebreos 11:1', ref: 'Hebreos 11:1',
      visual: [ V(R('he', 11, 1, 'Hebreos 11:1')) ],
      texto: [
        'Hebreos 11:1 es lo más parecido a una definición de la fe que tiene la Biblia. En griego es una frase corta y densa, y el interlineal permite verla pieza por pieza.',
        { ir: { t: 'Abrir Hebreos 11:1 en el interlineal', a: 'interlineal/#he/11/1', marco: true } },
        { h: 'Pieza por pieza' },
        'Ἔστιν δὲ πίστις: «ser · pero · fe». Después, dos frases paralelas. ἐλπιζομένων ὑπόστασις: «de esperar · sustancia». Ἐλπιζομένων es un participio pasivo en genitivo plural, «de las cosas que se esperan». Ὑπόστασις significa literalmente «lo que está debajo», el fundamento, la sustancia que da realidad a algo; en los documentos comerciales de la época se usaba también para un título de propiedad. La Reina-Valera dice «la certeza de lo que se espera».',
        'πραγμάτων ἔλεγχος οὐ βλεπομένων: «de asuntos · convicción · no · de ver». Ἔλεγχος es una prueba que convence, como en un juicio; βλεπομένων es otro participio pasivo: «de las cosas que no se ven». La Reina-Valera dice «la convicción de lo que no se ve».',
        { h: 'Lo que dice la forma' },
        'Fíjate en que los dos participios son pasivos y presentes: las cosas que se esperan y las que no se ven son realidades que están ahí, aunque todavía no las tenemos ni las vemos. La fe no las inventa: las recibe como seguras. El resto del capítulo lo muestra en la vida de Abel, Noé, Abraham, Moisés y muchos otros.',
        { ejercicio: {
          pregunta: 'La glosa de ὑπόστασις es «sustancia». ¿Qué aporta esa palabra a la definición de la fe?',
          opciones: [
            { t: 'Que la fe da un fundamento firme a lo que se espera, como algo que ya es real.', ok: true, por_que: 'Ὑπόστασις es lo que sostiene y da realidad; de ahí «certeza».' },
            { t: 'Que la fe es un sentimiento sin base.', ok: false, por_que: 'Es lo contrario: un fundamento.' },
            { t: 'Que la fe es una sustancia material.', ok: false, por_que: 'La glosa «sustancia» no habla de materia; el contexto la explica.' }
          ],
          explicacion: 'La glosa ayuda a reconocer la palabra; su uso y el contexto explican por qué la Reina-Valera dice «certeza».'
        } }
      ],
      pensar: '«Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve» (He 11:1). ¿Qué promesa de Dios, que todavía no ves, estás llamado a sostener con fe?'
    },
    {
      id: '1jn1', n: '1 Juan 1:9', ref: '1 Juan 1:9',
      visual: [ V(R('1jn', 1, 9, '1 Juan 1:9')) ],
      texto: [
        '1 Juan 1:9 es la promesa a la que vuelve el creyente cada vez que peca. El interlineal muestra cómo está armada.',
        { ir: { t: 'Abrir 1 Juan 1:9 en el interlineal', a: 'interlineal/#1jn/1/9', marco: true } },
        { h: 'Si confesamos' },
        'ἐὰν ὁμολογῶμεν τὰς ἁμαρτίας ἡμῶν: «si · confesar · los · pecados · de nosotros». Ὁμολογῶμεν es presente de subjuntivo: el subjuntivo va con ἐάν, «si», y el presente mira una confesión que se repite cada vez que hace falta. El verbo viene de ὁμός, «mismo», y λέγω, «decir»; pero, como viste en la ruta III, el sentido lo da el uso: «confesar», reconocer abiertamente. Y el objeto es plural, τὰς ἁμαρτίας: no una confesión general, sino de los pecados concretos.',
        { h: 'Él es fiel y justo' },
        'πιστός ἐστιν καὶ δίκαιος: «fiel · ser · y · justo». Dios perdona porque es fiel a su promesa y justo, porque el pecado ya fue pagado por Cristo (1 Jn 2:2). Después, ἵνα ἀφῇ ἡμῖν τὰς ἁμαρτίας: «para que · perdonar · a nosotros · los · pecados». Ἀφῇ es aoristo de subjuntivo de ἀφίημι, «dejar, soltar, perdonar»: el perdón suelta la deuda. Y καθαρίσῃ ἡμᾶς ἀπὸ πάσης ἀδικίας, «limpiar · nos · de · toda · injusticia»: no solo de los pecados confesados, sino de toda.',
        { h: 'Una frase completa' },
        'Fíjate en el dativo ἡμῖν, «a nosotros»: el perdón se da a personas. La glosa lo muestra con «a»; la Reina-Valera lo integra en «perdonar nuestros pecados». Comparar las dos líneas permite ver qué hace cada palabra.',
        { ejercicio: {
          pregunta: '¿Qué sugiere que ὁμολογῶμεν esté en presente?',
          opciones: [
            { t: 'Que la confesión es una práctica que se repite en la vida del creyente.', ok: true, por_que: 'El presente mira una acción continua o habitual.' },
            { t: 'Que basta confesar una vez en la vida.', ok: false, por_que: 'Eso no lo dice el presente; el contexto habla de andar en luz cada día.' },
            { t: 'Que Dios perdona solo si se confiesa en voz alta.', ok: false, por_que: 'El tiempo del verbo no dice nada sobre la voz alta.' }
          ],
          explicacion: 'La forma del verbo acompaña lo que dice todo el pasaje: andar en luz y confesar cuando pecamos.'
        } },
        { h: 'Cómo seguir' },
        'Con este recurso tienes las herramientas para leer el Nuevo Testamento de cerca: el alfabeto, el vocabulario, la gramática y el interlineal. Usa el interlineal cada vez que estudies un pasaje: una palabra por día, en voz alta, comparando siempre con la traducción.',
        { ir: { t: 'Abrir el interlineal', a: 'interlineal/', marco: true } }
      ],
      pensar: '«Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9). ¿Hay algo que necesitas confesar hoy para vivir en esa limpieza?'
    }
  ];

  delete window.__INTG;
  window.RUTA_DATA = {
    titulo: 'Interlineal griego–español (NT)',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto griego: Nuevo Testamento de Eberhard Nestle (1904), dominio público, según la edición de biblicalhumanities.org, con su morfología, lemas y números de Strong (CC0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    volver: { t: 'Volver al interlineal', a: 'interlineal/' },
    rutas: [
      { id: 'que-es', grupo: 'Interlineal', n: 'I. Qué es un interlineal', info: 'Cómo está hecho, qué puede y qué no puede hacer, y cómo usar la página', estaciones: queEs },
      { id: 'leer', grupo: 'Interlineal', n: 'II. Cómo leer una línea', info: 'Orden, artículo, casos, verbo, participio, partículas y morfología', estaciones: leer },
      { id: 'errores', grupo: 'Interlineal', n: 'III. Errores comunes', info: 'Glosa y sentido, etimología, todos los sentidos, el aoristo, «en el griego dice» y Juan 1:1', estaciones: errores },
      { id: 'traduccion', grupo: 'Interlineal', n: 'IV. Del interlineal a la traducción', info: 'Comparar, semitismos, variantes del texto, κύριος y un método en cinco pasos', estaciones: traduccion },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes con el interlineal', estaciones: taller }
    ]
  };
})();
