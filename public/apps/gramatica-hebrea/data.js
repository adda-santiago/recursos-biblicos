/* ==========================================================
   Recursos Bíblicos — Vocabulario y gramática básica del hebreo bíblico · contenido de las rutas
   FUENTE de public/apps/gramatica-hebrea/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/gramatica_citas.py
   Marcas que el script reemplaza (dos arrobas y luego):
     libro/capítulo/versículos       → texto de la RV 1960 del sitio (public/biblia/rv1960)
     wlc:libro/capítulo/versículos   → hebreo del Códice de Leningrado, con vocales y sin acentos
     wlca:libro/capítulo/versículo   → el mismo hebreo con los acentos de cantilación
     wlcp:libro/capítulo/versículo   → lista de las palabras hebreas del versículo
   Las marcas wlc siguen la numeración hebrea (Salmo 19:8 en hebreo = Salmo 19:7 en la RV 1960);
   las marcas de la RV y el campo ref, la numeración de la RV 1960.
   Pronunciación: hebreo israelí moderno. Transliteración sencilla para hispanohablantes, la misma
   de El alfabeto hebreo: j = ח y כ sin punto, sh = שׁ, ts = צ, v = ב sin punto y ו; la tilde marca
   el acento cuando no sigue la regla del español. Motor: ../assets/js/ruta-estudio.js.
   Formas verbales: «perfecto (qatal)» e «imperfecto (yiqtol)», con los dos nombres (decisión del
   responsable, 06-11-2026). Qal completo; los otros seis binyanim, para reconocerlos.
   ========================================================== */
(() => {
  // Palabras de un versículo con su transliteración y su sentido, en orden de lectura
  const P = (lista, glosas) => {
    if (lista.length !== glosas.length) throw new Error('Palabras y glosas no coinciden: ' + lista.join(' '));
    return lista.map((he, i) => ({ he, tr: glosas[i][0], es: glosas[i][1] }));
  };
  window.__GRAM = { P };

  const panorama = [
    {
      id: 'entender', n: 'De leer a entender', ref: 'Salmo 119:18; Nehemías 8:8',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 119:18', ref: 'Salmo 119:18', he: 'גַּל־עֵינַי וְאַבִּיטָה נִפְלָאוֹת מִתּוֹרָתֶךָ׃', tr: 'Gal-enái veabíta niflaot mitorateja.',
          palabras: P(['גַּל־עֵינַי', 'וְאַבִּיטָה', 'נִפְלָאוֹת', 'מִתּוֹרָתֶךָ'], [['gal-enái', 'descubre mis ojos'], ['veabíta', 'y miraré'], ['niflaot', 'maravillas'], ['mitorateja', 'de tu ley']]),
          rv: 'Abre mis ojos, y miraré Las maravillas de tu ley.' },
        { tipo: 'tabla', titulo: 'Lo que aprenderás', tabla: {
          titulo: 'Lo que hay dentro de cuatro palabras',
          cab: ['Palabra', 'Se lee', 'Qué tiene dentro', 'Ruta'],
          filas: [
            ['גַּל', 'gal', 'Un imperativo: «¡descubre!», «¡quita el velo!»', 'III. El verbo'],
            ['עֵינַי', 'enái', 'Un dual con sufijo: «mis (dos) ojos»', 'II. El sustantivo'],
            ['וְאַבִּיטָה', 'veabíta', 'Una vav y un cohortativo: «y que yo mire»', 'III. El verbo'],
            ['נִפְלָאוֹת', 'niflaot', 'Un participio nifal femenino plural: «cosas maravillosas»', 'III. El verbo'],
            ['מִתּוֹרָתֶךָ', 'mitorateja', 'Preposición, sustantivo y sufijo: «de tu ley»', 'II y IV'],
          ],
          nota: 'Cuatro palabras hebreas necesitan nueve en español. Al final del recurso podrás explicar cada pieza.'
        } }
      ],
      texto: [
        'En El alfabeto hebreo y la lectura aprendiste a leer: las letras, las vocales, las sílabas y los prefijos de una letra. Ya puedes pronunciar un versículo en voz alta. Este recurso da el paso siguiente: entender lo que lees. No vas a dominar el hebreo, pero vas a reconocer cómo está armada cada palabra y por qué la Reina-Valera la tradujo como la tradujo.',
        { ir: { t: 'Repasar El alfabeto hebreo y la lectura', a: '../../alfabeto-hebreo/' } },
        { h: 'Lo que aprenderás' },
        'El recurso tiene cuatro rutas y un taller. La ruta I explica cómo funciona el hebreo: las raíces de tres consonantes, las clases de palabras, el orden de la oración y por qué conviene aprender el vocabulario por frecuencia. La ruta II enseña el sustantivo y lo que lo acompaña: género y número, el artículo, las preposiciones, el adjetivo, el estado constructo, los pronombres y los sufijos. La ruta III enseña el verbo: el perfecto (qatal) y el imperfecto (yiqtol), la vav consecutiva, los mandatos, el participio, el infinitivo y los siete binyanim. La ruta IV estudia diez palabras clave de la fe. El taller aplica todo a seis pasajes muy conocidos.',
        'Junto al recurso tienes el vocabulario: las 751 palabras más frecuentes del Antiguo Testamento, en 30 lecciones, con un modo de práctica y el verbo modelo completo.',
        { h: 'Un ejemplo para empezar' },
        'Mira el Salmo 119:18 en el panel. Son solo cuatro palabras hebreas, pero la Reina-Valera necesita nueve: «Abre mis ojos, y miraré las maravillas de tu ley». La diferencia no es un capricho de los traductores. El hebreo junta en una sola palabra lo que el español dice con varias: la preposición «de», el sustantivo «ley» y el posesivo «tu» van juntos en מִתּוֹרָתֶךָ. Cuando aprendas a separar esas piezas, el texto se abrirá delante de ti.',
        { h: 'Lo que este recurso no promete' },
        'Al terminar no podrás traducir sola o solo cualquier pasaje, ni corregir a la Reina-Valera. Lo que sí podrás es seguir un comentario que cita el hebreo, usar un interlineal y una concordancia con criterio, y darte cuenta cuando alguien dice que «en el hebreo original» la Biblia dice algo que ninguna traducción dice. En tiempos de Esdras, los levitas «leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Ese es el propósito: entender.',
        { ejercicio: {
          pregunta: '¿Qué podrás hacer al terminar este recurso?',
          opciones: [
            { t: 'Traducir cualquier pasaje del Antiguo Testamento sin ayuda.', ok: false, por_que: 'Eso requiere años de estudio de la lengua. Este recurso es una introducción.' },
            { t: 'Reconocer cómo está formada una palabra y usar con criterio un interlineal, una concordancia o un comentario.', ok: true, por_que: 'Ese es el objetivo: entender las piezas del hebreo lo suficiente para usar bien las herramientas de estudio.' },
            { t: 'Descubrir significados ocultos que las traducciones no muestran.', ok: false, por_que: 'Las buenas traducciones ya muestran el sentido del texto. Desconfía de quien promete significados ocultos.' }
          ],
          explicacion: 'El recurso enseña lo básico para leer con más atención y usar bien las herramientas, no para reemplazar a los traductores.'
        } }
      ],
      pensar: 'El salmista pide a Dios que le descubra los ojos para ver las maravillas de su ley. ¿Con qué actitud vas a estudiar este recurso: como quien junta datos o como quien pide ver?'
    },
    {
      id: 'raiz', n: 'La raíz de tres consonantes', ref: '1 Samuel 8:7; Salmo 145:13',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-raiz.svg', alt: 'En el centro, las tres consonantes de la raíz מלך; alrededor, cinco palabras que salen de ella: rey, reinar, reina, reino y reinado', pie: 'Una raíz, una familia de palabras.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Familias', tabla: {
          titulo: 'Tres raíces y sus familias',
          cab: ['Raíz', 'Palabra', 'Se lee', 'Significa'],
          filas: [
            ['מלך', 'מֶלֶךְ', 'mélej', 'rey'],
            ['', 'מָלַךְ', 'malaj', 'reinó'],
            ['', 'מַלְכָּה', 'malká', 'reina'],
            ['', 'מַמְלָכָה', 'mamlajá', 'reino'],
            ['שׁפט', 'שָׁפַט', 'shafat', 'juzgó'],
            ['', 'שֹׁפֵט', 'shofet', 'juez'],
            ['', 'מִשְׁפָּט', 'mishpat', 'juicio, derecho'],
            ['קדשׁ', 'קָדוֹשׁ', 'kadosh', 'santo'],
            ['', 'קֹדֶשׁ', 'kódesh', 'santidad, lo santo'],
            ['', 'מִקְדָּשׁ', 'mikdash', 'santuario'],
          ],
          nota: 'Las raíces se escriben sin vocales. Las vocales, los prefijos y las terminaciones forman las palabras.'
        } }
      ],
      texto: [
        'La primera idea que hay que entender del hebreo es la raíz. Casi todas las palabras hebreas se forman a partir de tres consonantes que llevan una idea básica. Las vocales, los prefijos y las terminaciones que se agregan dicen qué clase de palabra es y qué función cumple.',
        { h: 'Una familia de palabras' },
        'Toma las consonantes מ־ל־ך, m-l-j. Llevan la idea de reinar. Con vocales distintas forman מֶלֶךְ, mélej, «rey», y מָלַךְ, malaj, «reinó». Con la terminación femenina ־ָה forman מַלְכָּה, malká, «reina». Con el prefijo מ y otra terminación forman מַמְלָכָה, mamlajá, «reino». Cuando Dios le dice a Samuel que el pueblo «a mí me han desechado, para que no reine sobre ellos» (1 S 8:7), el verbo es de esa misma raíz: el pueblo pide un מֶלֶךְ porque no quiere que Dios sea quien מָלַךְ.',
        'En español también hay familias: «rey, reinar, reina, reino, reinado». La diferencia es que en hebreo la familia se reconoce siempre por las mismas tres consonantes, aunque cambie todo lo demás.',
        { h: 'Para qué sirve saberlo' },
        'Saber buscar la raíz es la llave de todo el recurso. Los diccionarios hebreos se ordenan por raíces, las concordancias agrupan las palabras de una misma raíz y los comentarios hablan de «la raíz שׁפט» o «la raíz קדשׁ». Cuando veas una palabra desconocida, la primera pregunta será: ¿cuáles son sus tres consonantes?',
        'Para encontrarlas, quita lo que se agrega: los prefijos de una letra que viste en El alfabeto hebreo (ב, ל, כ, ו, ה, מ), las terminaciones del plural y del femenino, y las letras de los sufijos que verás en la ruta II. Lo que queda, casi siempre, son tres consonantes.',
        { ir: { t: 'Repasar «Letras que se pegan al comienzo» en El alfabeto hebreo', a: '../../alfabeto-hebreo/#leer/6' } },
        { h: 'Una advertencia' },
        'Que dos palabras compartan raíz no significa que signifiquen lo mismo. El significado de una palabra lo da su uso en los textos, no su raíz. Lo verás con más detalle en la ruta IV.',
        { ejercicio: {
          pregunta: '¿Cuál es la raíz de מִשְׁפָּט, «juicio»?',
          opciones: [
            { t: 'משׁפ', ok: false, por_que: 'La mem del comienzo es un prefijo que forma sustantivos. No pertenece a la raíz.' },
            { t: 'שׁפט', ok: true, por_que: 'Sin la mem del prefijo quedan שׁ־פ־ט, la raíz de «juzgar», la misma de שֹׁפֵט, «juez».' },
            { t: 'פטם', ok: false, por_que: 'La raíz no se lee salteando letras. Quita el prefijo y mira las tres que quedan en orden.' }
          ],
          explicacion: 'מִ es un prefijo; la raíz es שׁפט, «juzgar». Un מִשְׁפָּט es lo que resulta de juzgar.'
        } }
      ],
      pensar: 'El pueblo pidió un rey porque no quería que Dios reinara sobre ellos (1 S 8:7). «Tu reino es reino de todos los siglos» (Sal 145:13). ¿Hay alguna parte de tu vida donde todavía no dejas que Dios reine?'
    },
    {
      id: 'clases', n: 'Sustantivos, verbos y partículas', ref: 'Salmo 27:1',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 27:1', ref: 'Salmo 27:1', he: 'לְדָוִד יְהוָה אוֹרִי וְיִשְׁעִי מִמִּי אִירָא יְהוָה מָעוֹז־חַיַּי מִמִּי אֶפְחָד׃', tr: 'LeDavid. Adonái orí veyishí, mimí irá? Adonái maoz-jayái, mimí efjad?',
          palabras: P(['לְדָוִד', 'יְהוָה', 'אוֹרִי', 'וְיִשְׁעִי', 'מִמִּי', 'אִירָא', 'יְהוָה', 'מָעוֹז־חַיַּי', 'מִמִּי', 'אֶפְחָד'], [['leDavid', 'de David'], ['Adonái', 'Jehová'], ['orí', 'mi luz'], ['veyishí', 'y mi salvación'], ['mimí', '¿de quién?'], ['irá', 'temeré'], ['Adonái', 'Jehová'], ['maoz-jayái', 'la fortaleza de mi vida'], ['mimí', '¿de quién?'], ['efjad', 'me atemorizaré']]),
          rv: 'Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?' },
        { tipo: 'tabla', titulo: 'Clases', tabla: {
          titulo: 'Las tres clases de palabras',
          cab: ['Clase', 'Qué incluye', 'Ejemplos'],
          filas: [
            ['Sustantivo', 'Sustantivos, adjetivos, números y nombres propios. Cambian por género y número', 'אוֹר (luz), טוֹב (bueno), שֶׁבַע (siete)'],
            ['Verbo', 'Las acciones y los estados. Cambian por persona, aspecto y binyán', 'אָמַר (dijo), יָרֵא (temió)'],
            ['Partícula', 'Preposiciones, conjunciones, adverbios, negaciones. Casi no cambian', 'לֹא (no), כִּי (porque), עַל (sobre)'],
          ],
          nota: 'Los gramáticos hebreos medievales usaban esta misma división en tres.'
        } }
      ],
      texto: [
        'El español tiene nueve clases de palabras. Para empezar a leer hebreo bastan tres: sustantivos, verbos y partículas. Esa división sencilla ya la usaban los gramáticos judíos de la Edad Media.',
        { h: 'Sustantivos y verbos' },
        'En la clase de los sustantivos entran también los adjetivos, los números y los nombres propios, porque se comportan de manera parecida: tienen género y número y pueden llevar artículo y sufijos. Los verbos son las palabras que más cambian: una sola raíz verbal puede aparecer en decenas de formas distintas. Las partículas son las palabras pequeñas que unen y matizan: «no», «porque», «sobre», «hasta». Son pocas, pero aparecen en casi todos los versículos.',
        { h: 'Oraciones sin verbo' },
        'Mira el Salmo 27:1. La Reina-Valera dice «Jehová es mi luz y mi salvación», pero en hebreo no hay ningún «es»: dice solo יְהוָה אוֹרִי, «Jehová, mi luz». El hebreo no necesita el verbo «ser» en presente. Pone el sujeto y lo que se dice de él uno al lado del otro, y el lector entiende el «es». Los gramáticos la llaman oración nominal, porque está hecha de sustantivos.',
        'Por eso los traductores agregan «es» o «está». No están agregando nada al texto: están diciendo en español lo que el hebreo dice a su manera. La oración nominal es muy común en los Salmos y en los Proverbios, y da a las afirmaciones sobre Dios una fuerza especial. El Salmo 23:1 dice, literalmente, «Jehová, mi pastor», y este salmo, «Jehová, mi luz».',
        { h: 'Las preguntas también son breves' },
        'En el mismo versículo, מִמִּי, mimí, es una sola palabra: la preposición מִן, «de», unida a מִי, «¿quién?». David pregunta dos veces «¿de quién?», y la respuesta está en la primera mitad de cada línea: si Jehová es mi luz y mi fortaleza, no hay nadie de quién temer.',
        { ejercicio: {
          pregunta: 'En יְהוָה אוֹרִי, «Jehová es mi luz», ¿dónde está el verbo «es»?',
          opciones: [
            { t: 'En la yod final de אוֹרִי.', ok: false, por_que: 'Esa yod es el sufijo «mi»: אוֹר es «luz» y אוֹרִי, «mi luz».' },
            { t: 'No está escrito: el hebreo pone el sujeto y lo que se dice de él uno junto al otro.', ok: true, por_que: 'Es una oración nominal. El verbo «ser» en presente se sobrentiende.' },
            { t: 'Dentro del nombre יְהוָה, que significa «el que es».', ok: false, por_que: 'El nombre de Dios se relaciona con el verbo «ser» (Éx 3:14), pero aquí funciona como sujeto, no como verbo de la oración.' }
          ],
          explicacion: 'El hebreo no escribe el verbo «ser» en presente. La traducción lo agrega porque el español lo necesita.'
        } }
      ],
      pensar: '«Jehová es mi luz y mi salvación; ¿de quién temeré?» (Sal 27:1). ¿A qué o a quién le temes hoy? ¿Qué cambia si pones a Jehová delante de ese temor, como lo hizo David?'
    },
    {
      id: 'orden', n: 'El orden de las palabras', ref: 'Génesis 1:27',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:27', ref: 'Génesis 1:27', he: 'וַיִּבְרָא אֱלֹהִים אֶת־הָאָדָם בְּצַלְמוֹ בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ זָכָר וּנְקֵבָה בָּרָא אֹתָם׃', tr: 'Vayivrá Elohim et-haadam betsalmó, betsélem Elohim bará otó, zajar unekevá bará otam.',
          palabras: P(['וַיִּבְרָא', 'אֱלֹהִים', 'אֶת־הָאָדָם', 'בְּצַלְמוֹ', 'בְּצֶלֶם', 'אֱלֹהִים', 'בָּרָא', 'אֹתוֹ', 'זָכָר', 'וּנְקֵבָה', 'בָּרָא', 'אֹתָם'], [['vayivrá', 'y creó'], ['Elohim', 'Dios'], ['et-haadam', '(objeto) al hombre'], ['betsalmó', 'a su imagen'], ['betsélem', 'a imagen'], ['Elohim', 'de Dios'], ['bará', 'creó'], ['otó', 'a él (lo)'], ['zajar', 'varón'], ['unekevá', 'y hembra'], ['bará', 'creó'], ['otam', 'a ellos (los)']]),
          rv: 'Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.' },
        { tipo: 'tabla', titulo: 'Orden', tabla: {
          titulo: 'Verbo, sujeto y complemento',
          cab: ['Orden', 'Hebreo', 'Literal', 'Para qué'],
          filas: [
            ['Verbo – sujeto – objeto', 'וַיִּבְרָא אֱלֹהִים אֶת־הָאָדָם', 'y creó Dios al hombre', 'El orden normal de la narración'],
            ['Complemento – verbo', 'בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ', 'a imagen de Dios lo creó', 'Destaca el complemento'],
            ['Objeto – verbo', 'זָכָר וּנְקֵבָה בָּרָא אֹתָם', 'varón y hembra los creó', 'Destaca el objeto'],
          ],
          nota: 'Cuando algo va antes del verbo, el autor lo está destacando.'
        } }
      ],
      texto: [
        'En español decimos casi siempre «Dios creó al hombre»: primero el sujeto, después el verbo y después el complemento. En la narración hebrea, el orden normal es otro: primero el verbo, después el sujeto y después el complemento. «Y creó Dios al hombre», וַיִּבְרָא אֱלֹהִים אֶת־הָאָדָם.',
        { h: 'El verbo primero' },
        'La Reina-Valera conserva muchas veces ese orden hebreo: «Y dijo Dios», «Y vio Dios», «Y creó Dios». Por eso el español de la Biblia suena distinto del español de la calle. No es un error de traducción: es la huella del hebreo en la Reina-Valera. Cuando leas una narración hebrea, busca primero el verbo. Casi siempre es la primera palabra, y casi siempre empieza con la vav que verás en la ruta III.',
        { h: 'Lo que va primero se destaca' },
        'El orden no es una regla fija. Cuando el autor quiere destacar algo, lo pone antes del verbo. Génesis 1:27 lo hace dos veces. La primera línea va en orden normal: «y creó Dios al hombre a su imagen». En la segunda, el complemento pasa adelante: בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ, «a imagen de Dios lo creó». En la tercera pasa adelante el objeto: זָכָר וּנְקֵבָה בָּרָא אֹתָם, «varón y hembra los creó».',
        'El resultado es un pequeño poema de tres líneas en el que el verbo בָּרָא, «crear», se repite tres veces, y lo que se destaca es la imagen de Dios y que el ser humano fue creado varón y mujer. El orden de las palabras forma parte del mensaje.',
        { h: 'La marca del objeto' },
        'En la tabla verás la palabrita אֶת antes de הָאָדָם. No se traduce: indica cuál es el objeto directo. Con sufijos se convierte en אֹתוֹ, «a él» (lo), y אֹתָם, «a ellos» (los). La estudiarás en la ruta II.',
        { ejercicio: {
          pregunta: 'En בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ, «a imagen de Dios lo creó», ¿qué se destaca y por qué?',
          opciones: [
            { t: 'El verbo «creó», porque está al comienzo.', ok: false, por_que: 'En esta línea el verbo no está al comienzo: está en tercer lugar.' },
            { t: '«A imagen de Dios», porque va antes del verbo.', ok: true, por_que: 'En la narración lo normal es que el verbo vaya primero. Si algo se adelanta, el autor lo destaca.' },
            { t: 'Nada: en hebreo el orden de las palabras es libre y no significa nada.', ok: false, por_que: 'El orden es flexible, pero no es indiferente. Lo que se adelanta al verbo recibe énfasis.' }
          ],
          explicacion: 'El complemento «a imagen de Dios» pasa antes del verbo para destacarlo.'
        } }
      ],
      pensar: 'Génesis 1:27 repite que fuimos creados «a imagen de Dios», varón y mujer. ¿Cómo cambia tu manera de tratar a las demás personas, hombres y mujeres, recordar que cada una lleva esa imagen?'
    },
    {
      id: 'frecuencia', n: 'Aprender por frecuencia', ref: 'Deuteronomio 6:6-7',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-frecuencia.svg', alt: 'Curva que sube rápido: las primeras 100 palabras cubren algo más de la mitad del texto hebreo, 421 palabras cubren tres cuartos y 751 palabras más del ochenta por ciento', pie: 'Pocas palabras cubren gran parte del texto.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Las 12 primeras', tabla: {
          titulo: 'Las doce palabras más frecuentes',
          cab: ['N.º', 'Palabra', 'Se lee', 'Significa', 'Veces'],
          filas: [
            ['1', 'אֵת', 'et', 'marca del objeto', '10.979'],
            ['2', 'יְהוָה', 'YHVH', 'Jehová', '6.521'],
            ['3', 'עַל', 'al', 'sobre, contra', '5.779'],
            ['4', 'אֶל', 'el', 'a, hacia', '5.516'],
            ['5', 'אֲשֶׁר', 'asher', 'que, el cual', '5.503'],
            ['6', 'כֹּל', 'kol', 'todo', '5.415'],
            ['7', 'אָמַר', 'amar', 'decir', '5.318'],
            ['8', 'לֹא', 'lo', 'no', '5.191'],
            ['9', 'בֵּן', 'ben', 'hijo', '4.942'],
            ['10', 'כִּי', 'ki', 'porque, que', '4.488'],
            ['11', 'הָיָה', 'hayá', 'ser, estar', '3.575'],
            ['12', 'עָשָׂה', 'asá', 'hacer', '2.640'],
          ],
          nota: 'Sin contar los prefijos de una letra (ו, ה, ב, ל, כ, מ), que son aún más frecuentes.'
        } }
      ],
      texto: [
        'El Antiguo Testamento hebreo tiene unas 300.000 palabras escritas, sin contar los prefijos de una letra, pero usa unas 8.000 palabras distintas. Muchas de ellas aparecen una sola vez. Otras aparecen miles de veces. Esa diferencia permite aprender con un plan.',
        { h: 'Las cuentas' },
        'Contamos las palabras del Códice de Leningrado, el manuscrito completo más antiguo de la Biblia hebrea, con la morfología de Open Scriptures. Estos son los resultados. Las 101 palabras más frecuentes, las que aparecen 500 veces o más, forman algo más de la mitad del texto. Con 421 palabras, las que aparecen cien veces o más, se llega a tres cuartos. Con las 751 del vocabulario de este recurso, a más del 82 %. Dicho de otra manera: si aprendes las palabras del vocabulario, de cada cinco palabras de un versículo cualquiera reconocerás, en promedio, cuatro.',
        'La curva del panel muestra lo que eso significa. Al principio, cada palabra nueva cubre mucho texto: solo אֵת, la marca del objeto, aparece casi once mil veces. Después la curva se aplana y cada palabra cubre menos. Por eso conviene empezar por las más frecuentes y no por las más interesantes.',
        { h: 'Qué palabras son' },
        'Mira las doce primeras en la tabla. Son palabras pequeñas y comunes: «sobre», «a», «que», «todo», «no», «porque». En medio de ellas aparece el nombre de Dios, יְהוָה, que es la segunda palabra más frecuente de la Biblia hebrea. Y entre los verbos, el primero es אָמַר, «decir»: el Antiguo Testamento es, sobre todo, un libro donde Dios y los hombres hablan.',
        { h: 'Un consejo práctico' },
        'Aprende una lección de 25 palabras por semana. Repásala cada día unos minutos, en voz alta, y practica con el modo de práctica del vocabulario. En treinta semanas habrás aprendido las 751. No hace falta memorizar todos los sentidos de cada palabra: basta con el principal. Los demás los irás aprendiendo al encontrarlas en los textos.',
        { ejercicio: {
          pregunta: 'Si aprendes las 751 palabras del vocabulario, ¿qué parte del texto hebreo reconocerás, en promedio?',
          opciones: [
            { t: 'Todo, porque son las palabras de la Biblia.', ok: false, por_que: 'El Antiguo Testamento usa unas 8.000 palabras distintas. Las 751 más frecuentes cubren mucho, pero no todo.' },
            { t: 'Más del 80 %: cuatro de cada cinco palabras.', ok: true, por_que: 'Las 751 palabras más frecuentes forman cerca del 83 % de las palabras del texto, sin contar los prefijos.' },
            { t: 'Menos del 10 %, porque son pocas palabras.', ok: false, por_que: 'Son pocas palabras distintas, pero se repiten miles de veces. Por eso cubren mucho texto.' }
          ],
          explicacion: 'Pocas palabras muy frecuentes cubren la mayor parte del texto. Por eso se aprende por frecuencia.'
        } }
      ],
      pensar: 'Dios mandó que sus palabras estuvieran en el corazón y se repitieran cada día, en casa y en el camino (Dt 6:6-7). ¿Qué momento de tu día podrías dedicar a repasar la Palabra?'
    },
    {
      id: 'como-usar', n: 'Cómo usar el recurso y el vocabulario', ref: 'Proverbios 2:3-5',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tarjetas.webp', alt: 'Una persona adulta repasa en la mesa de su casa unas tarjetas de cartulina con palabras hebreas, junto a una Biblia abierta y un cuaderno', pie: 'Un poco cada día rinde más que mucho de una vez.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Plan', tabla: {
          titulo: 'Un plan de diez semanas',
          cab: ['Semana', 'Recurso', 'Vocabulario'],
          filas: [
            ['1', 'Ruta I. Panorama', 'Lección 1'],
            ['2', 'Ruta II, estaciones 1 a 4', 'Lección 2'],
            ['3', 'Ruta II, estaciones 5 a 8', 'Lección 3'],
            ['4', 'Ruta II, estaciones 9 a 11', 'Lección 4'],
            ['5', 'Ruta III, estaciones 1 a 4', 'Lección 5'],
            ['6', 'Ruta III, estaciones 5 a 8', 'Lección 6'],
            ['7', 'Ruta III, estaciones 9 a 12', 'Lección 7'],
            ['8', 'Ruta IV, estaciones 1 a 5', 'Lección 8'],
            ['9', 'Ruta IV, estaciones 6 a 10', 'Lección 9'],
            ['10', 'Taller práctico', 'Lección 10'],
          ],
          nota: 'Después de la décima semana, sigue con una lección del vocabulario por semana hasta la 30.'
        } }
      ],
      texto: [
        'Este recurso está pensado para estudiar en orden, una ruta tras otra, porque cada estación usa lo que aprendiste en las anteriores. Si ya sabes algo de hebreo, puedes saltar a la ruta que necesites desde el botón «Rutas».',
        { h: 'Las estaciones' },
        'Cada estación tiene un panel con un versículo en hebreo o una tabla, y un texto que lo explica. En los versículos, el botón «Ocultar ayudas» esconde la transliteración y el sentido de cada palabra para que practiques la lectura. Cada estación termina con uno o dos ejercicios: elige una respuesta y verás de inmediato si acertaste y por qué. Nada se guarda ni se califica. Y cada estación cierra con una pregunta «Para pensar», para que lo que aprendes llegue también a tu vida.',
        { h: 'El vocabulario' },
        'El botón de abajo abre el vocabulario. Tiene tres pestañas. En «Lista» están las 751 palabras más frecuentes, de la que más aparece a la que menos, con su transliteración, su sentido, su número de Strong y un versículo de ejemplo (casi siempre el primero donde aparecen), con la palabra marcada. Puedes filtrarlas por lección, por clase de palabra o por tema, y buscar por una palabra en español, por la transliteración o por el número de Strong.',
        'En «Práctica», el vocabulario te muestra una palabra y tú eliges su sentido entre cuatro opciones, o al revés. Las opciones incorrectas salen de la misma lección, para que aprendas a distinguir las palabras que estudias juntas. En «Verbo modelo» está el verbo שָׁמַר, «guardar», en todas sus formas, que usarás en la ruta III.',
        { ir: { t: 'Abrir el vocabulario', a: 'vocabulario/' } },
        { h: 'El número de Strong' },
        'A cada palabra hebrea, la concordancia de James Strong le asignó un número, que muchas Biblias de estudio, interlineales y programas siguen usando. El vocabulario muestra ese número (por ejemplo, H8104 para שָׁמַר) para que puedas buscar la palabra en otras herramientas.',
        { ejercicio: {
          pregunta: '¿Cuál es la mejor manera de aprender el vocabulario?',
          opciones: [
            { t: 'Leer las 751 palabras de una vez, varias veces.', ok: false, por_que: 'Es demasiado de una vez. La memoria retiene mejor lo que se repasa en porciones pequeñas.' },
            { t: 'Una lección por semana, repasada unos minutos cada día, en voz alta y con la práctica.', ok: true, por_que: 'La repetición breve y frecuente es la forma más eficaz de aprender vocabulario.' },
            { t: 'Empezar por las palabras más raras, que son las más interesantes.', ok: false, por_que: 'Las palabras raras aparecen poco. Las frecuentes te ayudarán en casi todos los versículos.' }
          ],
          explicacion: 'Poco, cada día y en orden de frecuencia.'
        } }
      ],
      pensar: 'Proverbios compara la búsqueda de la sabiduría con la búsqueda de un tesoro escondido (Pr 2:3-5). ¿Qué estás dispuesto a dejar de lado para buscar la Palabra con esa constancia?'
    }
  ];

  window.__GRAM.panorama = panorama;
})();
/* Vocabulario y gramática básica del hebreo bíblico · ruta II. El sustantivo y sus compañeros (ver encabezado de parte1.js) */
(() => {
  const P = window.__GRAM.P;

  const sustantivo = [
    {
      id: 'genero', n: 'Género y número', ref: 'Génesis 1:10',
      visual: [
        { tipo: 'tabla', titulo: 'Terminaciones', tabla: {
          titulo: 'Masculino y femenino, singular y plural',
          cab: ['', 'Singular', 'Plural'],
          filas: [
            ['Masculino', 'סוּס · sus · caballo (sin terminación)', 'סוּסִים · susim · caballos (־ִים)'],
            ['Femenino', 'סוּסָה · susá · yegua (־ָה)', 'סוּסוֹת · susot · yeguas (־וֹת)'],
            ['Femenino en ־ֶת', 'בַּת · bat · hija; בְּרִית · berit · pacto', 'בָּנוֹת · banot · hijas'],
            ['Irregulares', 'אִשָּׁה · ishá · mujer', 'נָשִׁים · nashim · mujeres'],
            ['', 'אָב · av · padre', 'אָבוֹת · avot · padres'],
            ['', 'עִיר · ir · ciudad (femenino)', 'עָרִים · arim · ciudades'],
          ],
          nota: 'El género de un sustantivo no siempre se ve en su terminación: עִיר, «ciudad», y אֶרֶץ, «tierra», son femeninos sin terminar en ־ָה.'
        } },
        { tipo: 'hebreo', titulo: 'Génesis 1:10', ref: 'Génesis 1:10', he: 'וַיִּקְרָא אֱלֹהִים לַיַּבָּשָׁה אֶרֶץ וּלְמִקְוֵה הַמַּיִם קָרָא יַמִּים וַיַּרְא אֱלֹהִים כִּי־טוֹב׃', tr: 'Vayikrá Elohim layabashá érets ulemikvé hamáyim kará yamim, vayar Elohim ki-tov.',
          palabras: P(['וַיִּקְרָא', 'אֱלֹהִים', 'לַיַּבָּשָׁה', 'אֶרֶץ', 'וּלְמִקְוֵה', 'הַמַּיִם', 'קָרָא', 'יַמִּים', 'וַיַּרְא', 'אֱלֹהִים', 'כִּי־טוֹב'], [['vayikrá', 'y llamó'], ['Elohim', 'Dios'], ['layabashá', 'a lo seco'], ['érets', 'tierra'], ['ulemikvé', 'y a la reunión de'], ['hamáyim', 'las aguas'], ['kará', 'llamó'], ['yamim', 'mares'], ['vayar', 'y vio'], ['Elohim', 'Dios'], ['ki-tov', 'que era bueno']]),
          rv: 'Y llamó Dios a lo seco Tierra, y a la reunión de las aguas llamó Mares. Y vio Dios que era bueno.' }
      ],
      texto: [
        'Todo sustantivo hebreo es masculino o femenino, como en español. No hay neutro. Y tiene número: singular, plural o, en algunas palabras, dual, que verás en la estación siguiente.',
        { h: 'Las terminaciones' },
        'El masculino singular no lleva terminación: סוּס, sus, «caballo». El masculino plural agrega ־ִים, -im: סוּסִים, susim. El femenino singular suele terminar en ־ָה, -á: סוּסָה, susá, «yegua»; a veces en ־ֶת o ־ת, como בְּרִית, berit, «pacto». El femenino plural termina en ־וֹת, -ot: סוּסוֹת, susot. Con estas cuatro terminaciones reconocerás la mayoría de los sustantivos.',
        'En Génesis 1:10 aparece יַמִּים, yamim, «mares», el plural de יָם, yam. Y aparece una terminación que ya conoces de los nombres de seres celestiales: כְּרוּבִים, kerubim, «querubines», y שְׂרָפִים, serafim, son plurales masculinos. Por eso decimos «querubín» y «serafín» para uno solo.',
        { h: 'Las excepciones' },
        'Algunas palabras muy frecuentes son irregulares. אִשָּׁה, ishá, «mujer», hace su plural נָשִׁים, nashim. אָב, av, «padre», es masculino pero forma su plural con ־וֹת: אָבוֹת, avot, «padres». עִיר, ir, «ciudad», es femenino aunque no lo parezca, y su plural es עָרִים, arim. Estas formas se aprenden de memoria; el vocabulario te indica el género de cada sustantivo.',
        { h: 'Un plural con verbo singular' },
        'Mira el comienzo del versículo: וַיִּקְרָא אֱלֹהִים, «y llamó Dios». אֱלֹהִים, Elohim, tiene forma de plural masculino, pero cuando se refiere al Dios verdadero va con verbos en singular: וַיִּקְרָא es «llamó», no «llamaron». Cuando se refiere a los dioses de las naciones, va con verbos en plural. La forma plural del nombre de Dios se ha explicado como un plural de majestad o de plenitud, y muchos cristianos han visto en ella un indicio, no una prueba, de que en el único Dios hay pluralidad de personas.',
        { ir: { t: 'Ver «Elohim y El» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#nombres/1' } },
        { ejercicio: {
          pregunta: '¿Qué es נְבִיאִים, neviím?',
          opciones: [
            { t: 'Un sustantivo femenino plural, «profetisas».', ok: false, por_que: 'El femenino plural termina en ־וֹת. Esta palabra termina en ־ִים.' },
            { t: 'Un sustantivo masculino plural, «profetas», de נָבִיא.', ok: true, por_que: 'La terminación ־ִים marca el masculino plural: נָבִיא, naví, «profeta»; נְבִיאִים, neviím, «profetas».' },
            { t: 'Un sustantivo masculino singular, «profeta».', ok: false, por_que: 'El singular es נָבִיא, sin terminación.' }
          ],
          explicacion: '־ִים es masculino plural. נְבִיאִים son «los profetas».'
        } }
      ],
      pensar: 'Dios llamó a lo seco «tierra» y a las aguas «mares», y vio que era bueno (Gn 1:10). Dar nombre es ejercer autoridad. ¿Qué significa para ti que el mundo tenga un dueño que lo nombró?'
    },
    {
      id: 'dual', n: 'El dual: de a dos', ref: 'Salmo 121:1-2',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 121:1', ref: 'Salmo 121:1', he: 'שִׁיר לַמַּעֲלוֹת אֶשָּׂא עֵינַי אֶל־הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי׃', tr: 'Shir lamaalot. Esá enái el-heharim, meáyin yavó ezrí?',
          palabras: P(['שִׁיר', 'לַמַּעֲלוֹת', 'אֶשָּׂא', 'עֵינַי', 'אֶל־הֶהָרִים', 'מֵאַיִן', 'יָבֹא', 'עֶזְרִי'], [['shir', 'cántico'], ['lamaalot', 'de las subidas (gradual)'], ['esá', 'alzaré'], ['enái', 'mis ojos'], ['el-heharim', 'a los montes'], ['meáyin', '¿de dónde?'], ['yavó', 'vendrá'], ['ezrí', 'mi socorro']]),
          rv: 'Alzaré mis ojos a los montes; ¿De dónde vendrá mi socorro?' },
        { tipo: 'tabla', titulo: 'Duales', tabla: {
          titulo: 'Palabras en dual (־ַיִם, -áyim)',
          cab: ['Singular', 'Dual', 'Se lee', 'Significa'],
          filas: [
            ['יָד', 'יָדַיִם', 'yadáyim', 'las (dos) manos'],
            ['עַיִן', 'עֵינַיִם', 'enáyim', 'los (dos) ojos'],
            ['אֹזֶן', 'אָזְנַיִם', 'oznáyim', 'los (dos) oídos'],
            ['רֶגֶל', 'רַגְלַיִם', 'ragláyim', 'los (dos) pies'],
            ['שָׁנָה', 'שְׁנָתַיִם', 'shenatáyim', 'dos años'],
            ['מֵאָה', 'מָאתַיִם', 'matáyim', 'doscientos'],
            ['—', 'שָׁמַיִם', 'shamáyim', 'cielos'],
            ['—', 'מַיִם', 'máyim', 'aguas, agua'],
          ],
          nota: 'שָׁמַיִם y מַיִם tienen forma de dual, pero no significan «dos»: así se dicen «cielo» y «agua».'
        } }
      ],
      texto: [
        'Además del singular y el plural, el hebreo tiene un tercer número, el dual, para las cosas que van de a dos. Su terminación es ־ַיִם, -áyim, con el acento en la penúltima sílaba.',
        { h: 'Los pares del cuerpo' },
        'El dual se usa sobre todo para las partes del cuerpo que son pares: יָדַיִם, yadáyim, «las manos»; עֵינַיִם, enáyim, «los ojos»; אָזְנַיִם, oznáyim, «los oídos»; רַגְלַיִם, ragláyim, «los pies». También para algunas medidas de tiempo y cantidades: שְׁנָתַיִם, «dos años»; מָאתַיִם, matáyim, «doscientos», es decir, dos veces cien.',
        'Cuando un dual lleva sufijo, su terminación cambia. En el Salmo 121:1, עֵינַי, enái, es «mis (dos) ojos»: la terminación del dual se acorta y se une al sufijo «mi». Lo verás con más detalle en la estación de los sufijos.',
        { h: 'Duales que no son dos' },
        'Dos palabras muy frecuentes tienen forma de dual y no significan «dos»: שָׁמַיִם, shamáyim, «cielos», y מַיִם, máyim, «agua». Así se dicen esas palabras en hebreo. Por eso la Reina-Valera traduce unas veces «el cielo» y otras «los cielos»: el hebreo no distingue. También hay nombres de lugar con esta terminación, como מִצְרַיִם, Mitsráyim, «Egipto», y יְרוּשָׁלַיִם, Yerushaláyim, «Jerusalén», que el texto masorético casi siempre escribe sin la yod, יְרוּשָׁלִַם, pero lee igual.',
        { h: 'Alzaré mis ojos' },
        'El Salmo 121 es un «cántico gradual», שִׁיר לַמַּעֲלוֹת, uno de los salmos que cantaban los peregrinos al subir a Jerusalén para las fiestas. El peregrino alza sus ojos a los montes y pregunta: «¿De dónde vendrá mi socorro?». La respuesta llega en el versículo siguiente: «Mi socorro viene de Jehová, que hizo los cielos y la tierra» (Sal 121:2). Los cielos, שָׁמַיִם, son la obra de quien lo cuida.',
        { ejercicio: {
          pregunta: '¿Qué significa רַגְלַיִם, ragláyim?',
          opciones: [
            { t: '«Pies», los dos pies de una persona.', ok: true, por_que: 'Es el dual de רֶגֶל, réguel, «pie». La terminación ־ַיִם indica un par.' },
            { t: '«Muchos pies», porque es un plural.', ok: false, por_que: 'El plural masculino termina en ־ִים, con jireq. Aquí hay ־ַיִם, con pataj y yod: es dual.' },
            { t: '«Un pie».', ok: false, por_que: 'El singular es רֶגֶל, sin terminación.' }
          ],
          explicacion: '־ַיִם es la terminación del dual. רַגְלַיִם son los dos pies.'
        } }
      ],
      pensar: '«Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro?» (Sal 121:1). ¿Hacia dónde miras primero cuando necesitas ayuda?'
    },
    {
      id: 'articulo', n: 'El artículo', ref: 'Génesis 1:5',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:5', ref: 'Génesis 1:5', he: 'וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם אֶחָד׃', tr: 'Vayikrá Elohim laor yom velajóshej kará láyla, vayehí-érev vayehí-vóker yom ejad.',
          palabras: P(['וַיִּקְרָא', 'אֱלֹהִים', 'לָאוֹר', 'יוֹם', 'וְלַחֹשֶׁךְ', 'קָרָא', 'לָיְלָה', 'וַיְהִי־עֶרֶב', 'וַיְהִי־בֹקֶר', 'יוֹם', 'אֶחָד'], [['vayikrá', 'y llamó'], ['Elohim', 'Dios'], ['laor', 'a la luz'], ['yom', 'día'], ['velajóshej', 'y a las tinieblas'], ['kará', 'llamó'], ['láyla', 'noche'], ['vayehí-érev', 'y fue la tarde'], ['vayehí-vóker', 'y fue la mañana'], ['yom', 'día'], ['ejad', 'uno']]),
          rv: 'Y llamó Dios a la luz Día, y a las tinieblas llamó Noche. Y fue la tarde y la mañana un día.' },
        { tipo: 'tabla', titulo: 'Artículo', tabla: {
          titulo: 'Las formas del artículo',
          cab: ['Delante de', 'Forma', 'Ejemplo', 'Se lee'],
          filas: [
            ['La mayoría de las letras', 'הַ + dagesh en la letra siguiente', 'הַשָּׁמַיִם', 'hashamáyim, los cielos'],
            ['א, ע, ר', 'הָ (sin dagesh)', 'הָאָרֶץ · הָעִיר', 'haárets, la tierra · hair, la ciudad'],
            ['ה, ח', 'הַ (sin dagesh)', 'הַחֹשֶׁךְ', 'hajóshej, las tinieblas'],
            ['הָ, עָ sin acento', 'הֶ', 'הֶהָרִים', 'heharim, los montes'],
            ['Después de ב, ל, כ', 'La he desaparece; queda su vocal', 'לָאוֹר · בַּבַּיִת', 'laor, a la luz · babáyit, en la casa'],
          ],
          nota: 'El hebreo no tiene artículo indefinido: יוֹם es «día» o «un día», según el contexto.'
        } }
      ],
      texto: [
        'El hebreo tiene un solo artículo, igual para masculino y femenino, singular y plural. No es una palabra aparte: es un prefijo, la letra he con una vocal, pegado al comienzo de la palabra.',
        { h: 'La forma normal' },
        'Lo normal es הַ, ha, con pataj, y un dagesh, el punto, dentro de la letra siguiente: שָׁמַיִם, «cielos»; הַשָּׁמַיִם, hashamáyim, «los cielos». El dagesh duplica la letra, aunque en la pronunciación de hoy casi no se nota.',
        { h: 'Delante de las guturales' },
        'Las letras guturales (א, ה, ח, ע) y la resh no aceptan dagesh. Delante de ellas el artículo cambia su vocal para compensar. Ante א, ע y ר se alarga a הָ: הָאָרֶץ, haárets, «la tierra»; הָעִיר, hair, «la ciudad». Ante ה y ח queda הַ sin dagesh: הַחֹשֶׁךְ, hajóshej, «las tinieblas». Y ante הָ o עָ sin acento se vuelve הֶ: הֶהָרִים, heharim, «los montes», como en el Salmo 121:1.',
        { h: 'El artículo escondido' },
        'Cuando una de las preposiciones de una letra (ב, ל, כ) se pone delante del artículo, la he desaparece y la preposición se queda con su vocal. En Génesis 1:5, לָאוֹר, laor, es לְ + הָ + אוֹר: «a la luz». Y en la misma frase, וְלַחֹשֶׁךְ, velajóshej, es «y a las tinieblas». Si ves una preposición de una letra con pataj o qamets en vez de shevá, sospecha que ahí hay un artículo escondido.',
        { h: 'Sin «un»' },
        'El hebreo no tiene artículo indefinido. Una palabra sin artículo puede traducirse con «un» o sin artículo, según lo pida el español. Por eso el versículo termina יוֹם אֶחָד, yom ejad, que la Reina-Valera traduce «un día», y que literalmente es «día uno».',
        { ejercicio: {
          pregunta: '¿Qué significa בַּבַּיִת, babáyit?',
          opciones: [
            { t: '«En una casa».', ok: false, por_que: 'Sin artículo sería בְּבַיִת, con shevá bajo la primera bet. El pataj indica que hay un artículo escondido.' },
            { t: '«En la casa».', ok: true, por_que: 'Es בְּ + הַ + בַּיִת: la he del artículo desaparece y la preposición toma su pataj. El dagesh de la segunda bet es el del artículo.' },
            { t: '«La casa de la casa».', ok: false, por_que: 'La primera bet no es otra palabra: es la preposición «en».' }
          ],
          explicacion: 'Preposición con pataj y dagesh en la letra siguiente: artículo escondido. בַּבַּיִת es «en la casa».'
        } }
      ],
      pensar: 'Dios llamó a la luz «día» y a las tinieblas «noche»: les puso nombre y límite (Gn 1:5). ¿Qué tinieblas de tu vida necesitas poner en manos de quien manda sobre la luz y la oscuridad?'
    },
    {
      id: 'preposiciones', n: 'Las preposiciones', ref: 'Salmo 121:2',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 121:2', ref: 'Salmo 121:2', he: 'עֶזְרִי מֵעִם יְהוָה עֹשֵׂה שָׁמַיִם וָאָרֶץ׃', tr: 'Ezrí meim Adonái, osé shamáyim vaárets.',
          palabras: P(['עֶזְרִי', 'מֵעִם', 'יְהוָה', 'עֹשֵׂה', 'שָׁמַיִם', 'וָאָרֶץ'], [['ezrí', 'mi socorro'], ['meim', 'de junto a'], ['Adonái', 'Jehová'], ['osé', 'que hace (hacedor de)'], ['shamáyim', 'cielos'], ['vaárets', 'y tierra']]),
          rv: 'Mi socorro viene de Jehová, Que hizo los cielos y la tierra.' },
        { tipo: 'tabla', titulo: 'Preposiciones', tabla: {
          titulo: 'Las preposiciones más frecuentes',
          cab: ['Hebreo', 'Se lee', 'Significa'],
          filas: [
            ['בְּ', 'be', 'en, con, por (prefijo)'],
            ['לְ', 'le', 'a, para, de (prefijo)'],
            ['כְּ', 'ke', 'como (prefijo)'],
            ['מִן · מִ', 'min · mi', 'de, desde; más que'],
            ['עַל', 'al', 'sobre; contra; acerca de'],
            ['אֶל', 'el', 'a, hacia'],
            ['עִם', 'im', 'con'],
            ['עַד', 'ad', 'hasta'],
            ['תַּחַת', 'tájat', 'debajo de; en lugar de'],
            ['בֵּין', 'bein', 'entre'],
            ['לִפְנֵי', 'lifné', 'delante de (literalmente, «a la cara de»)'],
            ['אַחֲרֵי', 'ajaré', 'detrás de, después de'],
          ],
          nota: 'Las preposiciones de una letra se pegan a la palabra. Las demás van separadas o unidas con maqaf (־).'
        } }
      ],
      texto: [
        'Las preposiciones están entre las palabras más frecuentes de la Biblia hebrea: עַל y אֶל ocupan el tercer y el cuarto lugar del vocabulario. Conocerlas te permite entender la relación entre las palabras de casi cualquier versículo.',
        { h: 'Las que se pegan' },
        'En El alfabeto hebreo aprendiste tres preposiciones de una sola letra que se pegan al comienzo de la palabra: בְּ, be, «en»; לְ, le, «a, para», y כְּ, ke, «como». Recuerda que delante del artículo toman su vocal (לָאוֹר, «a la luz»).',
        'מִן, min, «de, desde», puede ir separada o pegada. Cuando se pega, su nun desaparece y deja un dagesh en la letra siguiente: מִבֵּית, mibet, «de la casa de». Delante de una gutural, que no acepta dagesh, la vocal se alarga: מֵאֶרֶץ, meérets, «de la tierra de». En el Salmo 121:2, מֵעִם, meim, es מִן + עִם: «de con», es decir, «de junto a». El socorro no viene de los montes, sino de estar junto a Jehová.',
        'מִן también sirve para comparar, porque el hebreo no tiene una palabra para «más». «Mejor es confiar en Jehová que confiar en el hombre» (Sal 118:8) dice, literalmente: bueno es confiar en Jehová, más que (מִן) confiar en el hombre.',
        { h: 'Delante de… a la cara de…' },
        'Muchas preposiciones hebreas nacieron de sustantivos. לִפְנֵי, lifné, «delante de», es לְ + פְּנֵי, «a la cara de»: viene de פָּנִים, panim, «rostro». Por eso el hebreo dice que alguien está «delante de Jehová» con una imagen muy concreta: está ante su rostro.',
        { h: 'Las preposiciones también llevan sufijos' },
        'Como verás en la estación de los sufijos, las preposiciones pueden llevar pronombres pegados: לִי, li, «a mí»; עִמָּנוּ, imanu, «con nosotros», la palabra que está en el nombre Emanuel, en Isaías 7:14.',
        { ejercicio: {
          pregunta: '¿Qué significa מֵאֶרֶץ מִצְרַיִם, meérets Mitsráyim?',
          opciones: [
            { t: '«En la tierra de Egipto».', ok: false, por_que: '«En» sería בְּ. La מֵ del comienzo es la preposición מִן.' },
            { t: '«De la tierra de Egipto».', ok: true, por_que: 'מֵ es מִן pegada a אֶרֶץ. Como la álef no acepta dagesh, la vocal se alarga de jireq a tsere.' },
            { t: '«Hacia la tierra de Egipto».', ok: false, por_que: '«Hacia» sería אֶל. Esta preposición indica origen, no destino.' }
          ],
          explicacion: 'מִן pegada a una gutural se escribe מֵ. מֵאֶרֶץ מִצְרַיִם es «de la tierra de Egipto» (Éx 20:2).'
        } }
      ],
      pensar: '«Mi socorro viene de Jehová» (Sal 121:2). El hebreo dice «de junto a Jehová». ¿Cuánto tiempo pasas junto a él, en oración y en su Palabra, antes de pedirle ayuda?'
    },
    {
      id: 'et-vav', n: 'La partícula אֵת y la conjunción ו', ref: 'Génesis 2:15',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 2:15', ref: 'Génesis 2:15', he: 'וַיִּקַּח יְהוָה אֱלֹהִים אֶת־הָאָדָם וַיַּנִּחֵהוּ בְגַן־עֵדֶן לְעָבְדָהּ וּלְשָׁמְרָהּ׃', tr: 'Vayikaj Adonái Elohim et-haadam vayaníjehu veGan-Éden leovdá uleshomrá.',
          palabras: P(['וַיִּקַּח', 'יְהוָה', 'אֱלֹהִים', 'אֶת־הָאָדָם', 'וַיַּנִּחֵהוּ', 'בְגַן־עֵדֶן', 'לְעָבְדָהּ', 'וּלְשָׁמְרָהּ'], [['vayikaj', 'y tomó'], ['Adonái', 'Jehová'], ['Elohim', 'Dios'], ['et-haadam', '(objeto) al hombre'], ['vayaníjehu', 'y lo puso'], ['veGan-Éden', 'en el huerto de Edén'], ['leovdá', 'para labrarlo'], ['uleshomrá', 'y para guardarlo']]),
          rv: 'Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase.' },
        { tipo: 'tabla', titulo: 'Vav', tabla: {
          titulo: 'Las formas de la conjunción ו',
          cab: ['Forma', 'Cuándo', 'Ejemplo'],
          filas: [
            ['וְ · ve', 'Lo normal', 'וְאֵת · veet'],
            ['וּ · u', 'Delante de ב, מ, פ y de una letra con shevá', 'וּבֵין · uvein; וּלְשָׁמְרָהּ · uleshomrá'],
            ['וַ · va', 'Delante de una letra con jatef pataj', 'וַאֲנִי · vaaní, y yo'],
            ['וָ · va', 'En parejas, delante de la sílaba acentuada', 'וָאָרֶץ · vaárets; טוֹב וָרָע · tov vará'],
            ['וֵ · ve', 'Delante de אֱ (la álef queda muda)', 'וֵאלֹהַיִךְ · veloháyij, y tu Dios'],
          ],
          nota: 'No confundas esta vav con la vav consecutiva de los verbos (וַיִּ־), que verás en la ruta III.'
        } }
      ],
      texto: [
        'Dos palabritas aparecen en casi todos los versículos: la partícula אֵת, et, y la conjunción ו, «y». La primera es la palabra más frecuente del Antiguo Testamento; la segunda es todavía más frecuente, pero no se cuenta como palabra porque se pega a la siguiente.',
        { h: 'אֵת: la marca del objeto' },
        'אֵת no se traduce. Su función es señalar el objeto directo de un verbo cuando ese objeto es definido: un nombre propio, una palabra con artículo o con sufijo. En Génesis 2:15, «tomó Jehová Dios אֶת־הָאָדָם»: al hombre. Gracias a אֵת el lector sabe quién tomó a quién, aunque el orden de las palabras cambie. Con un objeto indefinido no se usa.',
        'Muchas veces se une a la palabra siguiente con un maqaf y su vocal se acorta: אֶת־. Con sufijos se vuelve אֹת: אֹתוֹ, otó, «a él, lo»; אֹתָם, otam, «a ellos, los». Ojo: existe otra palabra אֵת, homógrafa, que significa «con», y que con sufijos se escribe אִתּ: אִתּוֹ, itó, «con él» (Gn 12:4). El contexto y la forma con sufijos las distinguen.',
        { h: 'ו: «y», y mucho más' },
        'La conjunción ו se pega al comienzo de la palabra y cambia de vocal según lo que viene después, como muestra la tabla. Lo normal es וְ, ve; delante de las labiales ב, מ, פ y de una letra con shevá se vuelve וּ, u, la única vez que una sílaba hebrea empieza con vocal.',
        'Aunque su sentido básico es «y», el hebreo la usa para unir casi todo, y el español necesita traducirla de muchas maneras: «pero», «entonces», «pues», «así que». La Reina-Valera comienza Génesis 2:15 con «Tomó, pues…»: ese «pues» es la vav de וַיִּקַּח. Un buen traductor no pone «y» cada vez; busca qué relación expresa la vav en cada lugar.',
        { h: 'Para labrarlo y guardarlo' },
        'El versículo termina con dos infinitivos con la preposición לְ: לְעָבְדָהּ וּלְשָׁמְרָהּ, «para labrarlo y para guardarlo». El segundo es de la raíz שׁמר, el verbo modelo de la ruta III. Antes de la caída, el ser humano ya tenía una tarea: trabajar y cuidar lo que Dios le confió.',
        { ejercicio: {
          pregunta: 'En «tomó Jehová Dios אֶת־הָאָדָם», ¿para qué sirve אֶת?',
          opciones: [
            { t: 'Significa «con»: Jehová Dios tomó con el hombre.', ok: false, por_que: 'Existe un אֵת que significa «con», pero aquí está ante el objeto definido del verbo «tomó».' },
            { t: 'Señala que «el hombre» es el objeto directo del verbo; no se traduce.', ok: true, por_que: 'אֵת marca el objeto directo definido. Por eso la Reina-Valera dice «al hombre», sin traducir la partícula.' },
            { t: 'Es el artículo «el».', ok: false, por_que: 'El artículo es la ה de הָאָדָם. אֶת es una palabra aparte.' }
          ],
          explicacion: 'אֵת es la marca del objeto directo definido. Ayuda a saber quién hace qué, pero no se traduce.'
        } }
      ],
      pensar: 'Dios puso al hombre en el huerto «para que lo labrara y lo guardase» (Gn 2:15). ¿Qué te ha confiado Dios para que lo trabajes y lo cuides: tu familia, tu trabajo, tu iglesia, la creación?'
    },
    {
      id: 'adjetivo', n: 'El adjetivo', ref: 'Génesis 1:4; Salmo 118:8',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:4', ref: 'Génesis 1:4', he: 'וַיַּרְא אֱלֹהִים אֶת־הָאוֹר כִּי־טוֹב וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ׃', tr: 'Vayar Elohim et-haor ki-tov, vayavdel Elohim bein haor uvein hajóshej.',
          palabras: P(['וַיַּרְא', 'אֱלֹהִים', 'אֶת־הָאוֹר', 'כִּי־טוֹב', 'וַיַּבְדֵּל', 'אֱלֹהִים', 'בֵּין', 'הָאוֹר', 'וּבֵין', 'הַחֹשֶׁךְ'], [['vayar', 'y vio'], ['Elohim', 'Dios'], ['et-haor', '(objeto) la luz'], ['ki-tov', 'que (era) buena'], ['vayavdel', 'y separó'], ['Elohim', 'Dios'], ['bein', 'entre'], ['haor', 'la luz'], ['uvein', 'y entre'], ['hajóshej', 'las tinieblas']]),
          rv: 'Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas.' },
        { tipo: 'tabla', titulo: 'Adjetivo', tabla: {
          titulo: 'Dos maneras de usar el adjetivo',
          cab: ['Uso', 'Hebreo', 'Se lee', 'Significa'],
          filas: [
            ['Atributivo', 'אִישׁ טוֹב', 'ish tov', 'un hombre bueno'],
            ['', 'הָאִישׁ הַטּוֹב', 'haish hatov', 'el hombre bueno'],
            ['Predicativo', 'טוֹב הָאִישׁ', 'tov haish', 'el hombre es bueno'],
            ['', 'הָאִישׁ טוֹב', 'haish tov', 'el hombre es bueno'],
            ['Concordancia', 'גָּדוֹל · גְּדוֹלָה · גְּדוֹלִים · גְּדוֹלוֹת', 'gadol · guedolá · guedolim · guedolot', 'grande (m., f., m. pl., f. pl.)'],
            ['Comparativo', 'טוֹב … מִן', 'tov … min', 'mejor que'],
            ['Superlativo', 'קֹדֶשׁ הַקֳּדָשִׁים', 'kódesh hakodashim', 'el lugar santísimo'],
          ],
          nota: 'La clave es el artículo: si el adjetivo lo tiene igual que el sustantivo, lo describe; si no, dice algo de él.'
        } }
      ],
      texto: [
        'El adjetivo hebreo funciona como en español: describe a un sustantivo y concuerda con él en género y número. גָּדוֹל, gadol, «grande», es גְּדוֹלָה con un sustantivo femenino, גְּדוֹלִים con uno masculino plural y גְּדוֹלוֹת con uno femenino plural: las mismas terminaciones de los sustantivos.',
        { h: '¿Describe o afirma?' },
        'Hay una diferencia que el español marca con el verbo «ser» y el hebreo marca con el artículo. Si el adjetivo va después del sustantivo y lleva el mismo artículo que él, lo describe: הָאִישׁ הַטּוֹב, «el hombre bueno». Es el uso atributivo. Si el adjetivo no lleva artículo, aunque el sustantivo lo tenga, afirma algo de él: הָאִישׁ טוֹב o טוֹב הָאִישׁ, «el hombre es bueno». Es el uso predicativo, y es otra oración nominal sin verbo, como las de la ruta I.',
        'En Génesis 1:4, Dios vio la luz כִּי־טוֹב, «que (era) buena». El adjetivo afirma algo de la luz, y el verbo «era» lo pone el traductor. Este estribillo, «y vio Dios que era bueno», se repite en el relato de la creación hasta llegar a טוֹב מְאֹד, «bueno en gran manera» (Gn 1:31).',
        { h: 'Mejor que, el mejor de todos' },
        'El hebreo no tiene formas especiales para comparar. Usa el adjetivo con la preposición מִן: «Mejor es confiar en Jehová que confiar en el hombre» (Sal 118:8): «mejor» es טוֹב, y «que» es מִן.',
        'Para el superlativo usa otros recursos. Uno es la cadena de un sustantivo con su propio plural: קֹדֶשׁ הַקֳּדָשִׁים, «santo de los santos», es «el lugar santísimo», y שִׁיר הַשִּׁירִים, «cantar de los cantares», el cantar más hermoso. Otro es la repetición: los serafines no dicen «santísimo», sino «santo, santo, santo» (Is 6:3). En la ruta IV verás que lo mismo pasa con «paz, paz» en Isaías 26:3.',
        { ejercicio: {
          pregunta: '¿Qué significa הַמֶּלֶךְ הַגָּדוֹל, hamélej hagadol?',
          opciones: [
            { t: '«El rey es grande».', ok: false, por_que: 'Para afirmar «es grande», el adjetivo no llevaría artículo: הַמֶּלֶךְ גָּדוֹל.' },
            { t: '«El gran rey».', ok: true, por_que: 'El adjetivo va después y lleva el mismo artículo que el sustantivo: lo describe. Es el uso atributivo (2 R 18:19).' },
            { t: '«El rey más grande de todos».', ok: false, por_que: 'El hebreo no forma así el superlativo. Aquí solo hay sustantivo y adjetivo con artículo.' }
          ],
          explicacion: 'Mismo artículo en los dos: el adjetivo describe. הַמֶּלֶךְ הַגָּדוֹל es «el gran rey».'
        } }
      ],
      pensar: 'Dios vio todo lo que había hecho «y he aquí que era bueno en gran manera» (Gn 1:31). ¿Cómo cambia tu forma de mirar la creación, y tu propio cuerpo, saber que Dios la declaró buena?'
    },
    {
      id: 'constructo', n: 'El estado constructo: «palabra de Jehová»', ref: 'Salmo 19:7',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 19:7', ref: 'Salmo 19:7', he: 'תּוֹרַת יְהוָה תְּמִימָה מְשִׁיבַת נָפֶשׁ עֵדוּת יְהוָה נֶאֱמָנָה מַחְכִּימַת פֶּתִי׃', tr: 'Torat Adonái temimá meshivat náfesh, edut Adonái neemaná majkimat péti.',
          palabras: P(['תּוֹרַת', 'יְהוָה', 'תְּמִימָה', 'מְשִׁיבַת', 'נָפֶשׁ', 'עֵדוּת', 'יְהוָה', 'נֶאֱמָנָה', 'מַחְכִּימַת', 'פֶּתִי'], [['torat', 'la ley de'], ['Adonái', 'Jehová'], ['temimá', '(es) perfecta'], ['meshivat', 'que hace volver'], ['náfesh', 'el alma'], ['edut', 'el testimonio de'], ['Adonái', 'Jehová'], ['neemaná', '(es) fiel'], ['majkimat', 'que hace sabio'], ['péti', 'al sencillo']]),
          rv: 'La ley de Jehová es perfecta, que convierte el alma; El testimonio de Jehová es fiel, que hace sabio al sencillo.' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-constructo.svg', alt: 'Dos palabras unidas: תּוֹרַת, en estado constructo, y יְהוָה, en estado absoluto; una flecha indica que el artículo o el nombre propio de la segunda palabra hace definida a toda la cadena', pie: 'La cadena constructa: la primera palabra «de» la segunda.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Formas', tabla: {
          titulo: 'Estado absoluto y estado constructo',
          cab: ['Absoluto', 'Constructo', 'Ejemplo', 'Significa'],
          filas: [
            ['דָּבָר · davar', 'דְּבַר · devar', 'דְּבַר־יְהוָה', 'la palabra de Jehová'],
            ['תּוֹרָה · torá', 'תּוֹרַת · torat', 'תּוֹרַת יְהוָה', 'la ley de Jehová'],
            ['בַּיִת · báyit', 'בֵּית · bet', 'בֵּית־אֵל', 'Betel, casa de Dios'],
            ['בָּנִים · banim', 'בְּנֵי · bené', 'בְּנֵי יִשְׂרָאֵל', 'los hijos de Israel'],
            ['עֵינַיִם · enáyim', 'עֵינֵי · ené', 'עֵינֵי יְהוָה', 'los ojos de Jehová'],
            ['מֶלֶךְ · mélej', 'מֶלֶךְ · mélej', 'מֶלֶךְ הַכָּבוֹד', 'el Rey de gloria'],
          ],
          nota: 'Femenino ־ָה → ־ַת; plural ־ִים y dual ־ַיִם → ־ֵי. Muchas palabras acortan sus vocales.'
        } }
      ],
      texto: [
        'El español une dos sustantivos con «de»: «la palabra de Jehová». El hebreo no tiene una preposición «de» para eso. En su lugar pone las dos palabras juntas y cambia la forma de la primera. La primera queda en estado constructo; la segunda, en estado absoluto, que es la forma normal de la palabra.',
        { h: 'Cómo se reconoce' },
        'La palabra en estado constructo suele acortarse, porque se pronuncia unida a la siguiente, sin acento propio. Muchas veces se une con un maqaf (־). Tres cambios aparecen una y otra vez: el femenino ־ָה se vuelve ־ַת (תּוֹרָה, «ley»; תּוֹרַת, «ley de»); el plural ־ִים y el dual ־ַיִם se vuelven ־ֵי (בָּנִים, «hijos»; בְּנֵי, «hijos de»); y las vocales largas se acortan (דָּבָר, davar; דְּבַר, devar). Algunas palabras, como מֶלֶךְ, no cambian: ahí el contexto lo dice todo.',
        { h: 'El artículo va al final' },
        'Una cadena constructa es definida o indefinida en bloque, y lo decide la última palabra. Si la última tiene artículo, sufijo o es un nombre propio, toda la cadena es definida: בֵּית הַמֶּלֶךְ, «la casa del rey». La primera palabra nunca lleva artículo. Por eso no verás הַתּוֹרַת: תּוֹרַת יְהוָה ya es «la ley de Jehová», porque יְהוָה es un nombre propio.',
        { h: 'La ley de Jehová es perfecta' },
        'El Salmo 19:7 (19:8 en la Biblia hebrea, que cuenta el título como primer versículo) está lleno de cadenas constructas. תּוֹרַת יְהוָה, «la ley de Jehová»; עֵדוּת יְהוָה, «el testimonio de Jehová». Y hay otras dos más difíciles: מְשִׁיבַת נָפֶשׁ, literalmente «la que hace volver del alma», es decir, «que convierte el alma», y מַחְכִּימַת פֶּתִי, «la que hace sabio del sencillo». Son participios en estado constructo con su complemento.',
        'El constructo expresa mucho más que posesión. Puede indicar el material (כְּלֵי זָהָב, «utensilios de oro»), la cualidad (הַר קָדְשִׁי, «el monte de mi santidad», que la Reina-Valera traduce «mi santo monte») o el superlativo, como viste en la estación anterior.',
        { ejercicio: {
          pregunta: '¿Cómo se dice «los hijos del rey»?',
          opciones: [
            { t: 'הַבָּנִים הַמֶּלֶךְ', ok: false, por_que: 'La primera palabra de una cadena constructa no lleva artículo y debe estar en estado constructo (בְּנֵי, no בָּנִים).' },
            { t: 'בְּנֵי הַמֶּלֶךְ', ok: true, por_que: 'בְּנֵי es «hijos de», en estado constructo, y el artículo de הַמֶּלֶךְ hace definida a toda la cadena (2 S 9:11).' },
            { t: 'בָּנִים מֶלֶךְ', ok: false, por_que: 'Sin el cambio a estado constructo, las dos palabras no forman una cadena; y sin artículo serían «hijos de un rey».' }
          ],
          explicacion: 'Constructo + absoluto con artículo: בְּנֵי הַמֶּלֶךְ, «los hijos del rey».'
        } }
      ],
      pensar: '«La ley de Jehová es perfecta, que convierte el alma» (Sal 19:7). ¿Qué pasaje de la Escritura ha hecho volver tu alma a Dios en un momento difícil?'
    },
    {
      id: 'pronombres', n: 'Los pronombres personales', ref: 'Éxodo 20:2',
      visual: [
        { tipo: 'hebreo', titulo: 'Éxodo 20:2', ref: 'Éxodo 20:2', he: 'אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים׃', tr: 'Anojí Adonái Eloheja, asher hotsetija meérets Mitsráyim mibet avadim.',
          palabras: P(['אָנֹכִי', 'יְהוָה', 'אֱלֹהֶיךָ', 'אֲשֶׁר', 'הוֹצֵאתִיךָ', 'מֵאֶרֶץ', 'מִצְרַיִם', 'מִבֵּית', 'עֲבָדִים'], [['anojí', 'yo'], ['Adonái', 'Jehová'], ['Eloheja', 'tu Dios'], ['asher', 'que'], ['hotsetija', 'te saqué'], ['meérets', 'de la tierra de'], ['Mitsráyim', 'Egipto'], ['mibet', 'de la casa de'], ['avadim', 'esclavos']]),
          rv: 'Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre.' },
        { tipo: 'tabla', titulo: 'Pronombres', tabla: {
          titulo: 'Los pronombres independientes',
          cab: ['Persona', 'Singular', 'Plural'],
          filas: [
            ['1.ª', 'אֲנִי · aní; אָנֹכִי · anojí · yo', 'אֲנַחְנוּ · anájnu · nosotros'],
            ['2.ª masculino', 'אַתָּה · atá · tú', 'אַתֶּם · atem · vosotros'],
            ['2.ª femenino', 'אַתְּ · at · tú (mujer)', 'אַתֵּן · aten · vosotras'],
            ['3.ª masculino', 'הוּא · hu · él', 'הֵם · hem; הֵמָּה · hema · ellos'],
            ['3.ª femenino', 'הִיא · hi · ella', 'הֵנָּה · hena · ellas'],
          ],
          nota: 'En el Pentateuco, «ella» casi siempre se escribe הוא con las vocales de הִיא: una particularidad de la tradición de los copistas.'
        } }
      ],
      texto: [
        'Los pronombres personales hebreos distinguen el género no solo en la tercera persona, como el español («él», «ella»), sino también en la segunda: אַתָּה, atá, es «tú» dicho a un hombre, y אַתְּ, at, «tú» dicho a una mujer.',
        { h: 'Dos formas de «yo»' },
        'Para «yo» hay dos palabras: אֲנִי, aní, y אָנֹכִי, anojí. Significan lo mismo. אָנֹכִי es la forma más antigua y solemne, y aparece en momentos importantes, como el comienzo de los Diez Mandamientos: אָנֹכִי יְהוָה אֱלֹהֶיךָ, «Yo soy Jehová tu Dios» (Éx 20:2). Es una oración nominal, sin verbo «ser»: «Yo, Jehová, tu Dios».',
        { h: 'Cuándo se usan' },
        'El verbo hebreo lleva la persona dentro de su forma: הוֹצֵאתִיךָ ya significa «yo te saqué», sin necesidad de «yo». Por eso el pronombre independiente se usa sobre todo en dos casos. Primero, como sujeto de una oración nominal: «Yo (soy) Jehová». Segundo, para dar énfasis, cuando el autor quiere destacar quién hace algo: וַאֲנִי יָדַעְתִּי, literalmente «y yo sé», dice Job en medio de su dolor, en Job 19:25. En ese «yo» está toda la fuerza de su confesión.',
        { h: 'Un pronombre que hace de verbo' },
        'El pronombre de tercera persona a veces une las dos partes de una oración nominal, como si fuera el verbo «ser». Moisés le recuerda a Israel lo que vio en el desierto, «para que supieses que Jehová es Dios, y no hay otro fuera de él» (Dt 4:35). En hebreo dice כִּי יְהוָה הוּא הָאֱלֹהִים, literalmente «que Jehová, él, el Dios». Aquí הוּא no se traduce «él»: hace el papel del «es» español, y le da énfasis a la frase. Jehová, y ningún otro, es el Dios verdadero.',
        { h: 'Antes del mandamiento, la redención' },
        'Fíjate en el orden de Éxodo 20:2. Antes de dar un solo mandamiento, Dios dice quién es y qué hizo: «Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre». La ley no fue dada para que Israel se ganara la salvación: fue dada a un pueblo que ya había sido rescatado. מִבֵּית עֲבָדִים es literalmente «de la casa de esclavos»: otra cadena constructa.',
        { ejercicio: {
          pregunta: '¿Por qué Éxodo 20:2 usa el pronombre אָנֹכִי, si el verbo הוֹצֵאתִיךָ ya indica «yo»?',
          opciones: [
            { t: 'Porque en hebreo el pronombre es obligatorio con todo verbo.', ok: false, por_que: 'No lo es: el verbo ya incluye la persona. El pronombre se agrega por otras razones.' },
            { t: 'Porque אָנֹכִי es el sujeto de una oración nominal solemne: «Yo, Jehová, tu Dios».', ok: true, por_que: 'La primera parte del versículo no tiene verbo. El pronombre es su sujeto, y su forma solemne destaca quién habla.' },
            { t: 'Porque אָנֹכִי significa «Señor».', ok: false, por_que: 'אָנֹכִי significa «yo». «Señor» es אֲדֹנָי.' }
          ],
          explicacion: 'El pronombre independiente se usa como sujeto de la oración nominal y para dar énfasis.'
        } }
      ],
      pensar: 'Dios se presenta como el que te sacó de la esclavitud antes de darte su ley (Éx 20:2). ¿Obedeces a Dios para que te acepte, o porque ya te rescató?'
    },
    {
      id: 'sufijos', n: 'Los sufijos: mi, tu, su', ref: 'Rut 1:16',
      visual: [
        { tipo: 'hebreo', titulo: 'Rut 1:16', ref: 'Rut 1:16', he: 'וַתֹּאמֶר רוּת אַל־תִּפְגְּעִי־בִי לְעָזְבֵךְ לָשׁוּב מֵאַחֲרָיִךְ כִּי אֶל־אֲשֶׁר תֵּלְכִי אֵלֵךְ וּבַאֲשֶׁר תָּלִינִי אָלִין עַמֵּךְ עַמִּי וֵאלֹהַיִךְ אֱלֹהָי׃', tr: 'Vatómer Rut: al-tifgueí-vi leozvej lashuv meajaráyij, ki el-asher teljí elej, uvaasher taliní alin, amej amí, veloháyij Elohái.',
          palabras: P(['וַתֹּאמֶר', 'רוּת', 'אַל־תִּפְגְּעִי־בִי', 'לְעָזְבֵךְ', 'לָשׁוּב', 'מֵאַחֲרָיִךְ', 'כִּי', 'אֶל־אֲשֶׁר', 'תֵּלְכִי', 'אֵלֵךְ', 'וּבַאֲשֶׁר', 'תָּלִינִי', 'אָלִין', 'עַמֵּךְ', 'עַמִּי', 'וֵאלֹהַיִךְ', 'אֱלֹהָי'], [['vatómer', 'y dijo'], ['Rut', 'Rut'], ['al-tifgueí-vi', 'no me ruegues'], ['leozvej', 'que te deje'], ['lashuv', 'que vuelva'], ['meajaráyij', 'de detrás de ti'], ['ki', 'porque'], ['el-asher', 'adonde'], ['teljí', 'tú vayas'], ['elej', 'iré'], ['uvaasher', 'y donde'], ['taliní', 'tú pases la noche'], ['alin', 'pasaré la noche'], ['amej', 'tu pueblo'], ['amí', 'mi pueblo'], ['veloháyij', 'y tu Dios'], ['Elohái', 'mi Dios']]),
          rv: 'Respondió Rut: No me ruegues que te deje, y me aparte de ti; porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios.' },
        { tipo: 'tabla', titulo: 'Sufijos', tabla: {
          titulo: 'Los sufijos en un sustantivo singular',
          cab: ['Sufijo', 'Modelo: סוּס, caballo', 'Ejemplo bíblico'],
          filas: [
            ['־ִי · mi', 'סוּסִי · susí', 'עַמִּי · amí, mi pueblo'],
            ['־ְךָ · tu (de hombre)', 'סוּסְךָ · susjá', 'עַמְּךָ · amejá, tu pueblo'],
            ['־ֵךְ · tu (de mujer)', 'סוּסֵךְ · susej', 'עַמֵּךְ · amej, tu pueblo'],
            ['־וֹ · su (de él)', 'סוּסוֹ · susó', 'יָדוֹ · yadó, su mano'],
            ['־ָהּ · su (de ella)', 'סוּסָהּ · susá', 'עַמָּהּ · amá, su pueblo'],
            ['־ֵנוּ · nuestro', 'סוּסֵנוּ · susenu', 'אֱלֹהֵינוּ · Elohenu, nuestro Dios'],
            ['־ְכֶם · vuestro', 'סוּסְכֶם · susjem', 'אֱלֹהֵיכֶם · Elohejem, vuestro Dios'],
            ['־ָם · su (de ellos)', 'סוּסָם · susam', 'עַמָּם · amam, su pueblo'],
          ],
          nota: 'Con un sustantivo plural, delante del sufijo aparece una yod: אֱלֹהַי, «mi Dios»; אֱלֹהֶיךָ, «tu Dios».'
        } }
      ],
      texto: [
        'Donde el español usa posesivos («mi», «tu», «su»), el hebreo pega una terminación al final del sustantivo. Se llaman sufijos pronominales. Son pocos, se repiten en todo el Antiguo Testamento y forman parte de muchísimas palabras.',
        { h: 'Los sufijos de los sustantivos' },
        'La tabla los muestra con un modelo, סוּס, «caballo», y con ejemplos de la Biblia. Hay que fijarse en la última letra: ־ִי es «mi»; ־ְךָ, «tu» dicho a un hombre; ־ֵךְ, «tu» dicho a una mujer; ־וֹ, «su» de él; ־ָהּ, con un punto en la he, «su» de ella; ־ֵנוּ, «nuestro»; ־ְכֶם, «vuestro»; ־ָם o ־הֶם, «su» de ellos.',
        'Cuando el sustantivo está en plural o en dual, entre la palabra y el sufijo aparece una yod. Por eso «mi Dios» es אֱלֹהַי, Elohái, y no אֱלֹהִימִי: el plural אֱלֹהִים pierde su terminación, y la yod del plural se une al sufijo. Y también por eso עֵינַי, enái, es «mis ojos».',
        { h: 'Las preposiciones también' },
        'Los mismos sufijos se pegan a las preposiciones: לִי, li, «a mí»; לְךָ, lejá, «a ti»; לוֹ, lo, «a él»; לָנוּ, lanu, «a nosotros». Y עִם, «con», con el sufijo «nosotros» da עִמָּנוּ, imanu. Por eso עִמָּנוּ אֵל, Imanu El, es «Dios con nosotros» (Mt 1:23; Is 7:14).',
        { h: 'Tu pueblo será mi pueblo' },
        'Rut 1:16 es un buen ejercicio de sufijos. Rut habla a Noemí, una mujer, así que todos los «tu» terminan en ־ֵךְ o ־ִךְ: לְעָזְבֵךְ, «dejarte»; מֵאַחֲרָיִךְ, «de detrás de ti»; עַמֵּךְ, «tu pueblo»; וֵאלֹהַיִךְ, «y tu Dios». Y sus «mi» terminan en ־ִי o ־ָי: עַמִּי, «mi pueblo»; אֱלֹהָי, «mi Dios». Las últimas cuatro palabras son dos oraciones nominales, sin verbo: «tu pueblo, mi pueblo; tu Dios, mi Dios». La Reina-Valera agrega «será» porque el español lo necesita, pero en hebreo la decisión de Rut suena todavía más rotunda.',
        { ejercicio: {
          pregunta: '¿Qué significa יָדוֹ, yadó?',
          opciones: [
            { t: '«Mi mano».', ok: false, por_que: '«Mi mano» sería יָדִי, con el sufijo ־ִי.' },
            { t: '«Su mano», la mano de él.', ok: true, por_que: 'יָד, «mano», con el sufijo ־וֹ, «su» de él.' },
            { t: '«Las manos».', ok: false, por_que: '«Las manos» sería el dual יָדַיִם.' }
          ],
          explicacion: '־וֹ al final de un sustantivo es «su», de un hombre o de algo masculino.'
        } },
        { ejercicio: {
          pregunta: 'En עַמֵּךְ עַמִּי, ¿por qué el primer sufijo es ־ֵךְ y no ־ְךָ?',
          opciones: [
            { t: 'Porque Rut le habla a una mujer, Noemí.', ok: true, por_que: '־ֵךְ es «tu» dicho a una mujer. Con un hombre sería עַמְּךָ.' },
            { t: 'Porque «pueblo» es femenino.', ok: false, por_que: 'עַם es masculino. El sufijo concuerda con la persona a quien se habla, no con el sustantivo.' },
            { t: 'Porque es plural: «tus pueblos».', ok: false, por_que: 'Con un sustantivo plural aparecería una yod antes del sufijo.' }
          ],
          explicacion: 'Los sufijos de segunda persona distinguen si se habla a un hombre o a una mujer.'
        } }
      ],
      pensar: 'Rut eligió el Dios de Noemí como su propio Dios: «tu Dios, mi Dios» (Rt 1:16). ¿Hay alguien en tu vida que haya llegado a conocer a Dios por tu ejemplo?'
    },
    {
      id: 'preguntas', n: 'Este, ¿quién?, que', ref: 'Génesis 4:9',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 4:9', ref: 'Génesis 4:9', he: 'וַיֹּאמֶר יְהוָה אֶל־קַיִן אֵי הֶבֶל אָחִיךָ וַיֹּאמֶר לֹא יָדַעְתִּי הֲשֹׁמֵר אָחִי אָנֹכִי׃', tr: 'Vayómer Adonái el-Káyin: ei Hével ajija? Vayómer: lo yadati; hashomer ají anojí?',
          palabras: P(['וַיֹּאמֶר', 'יְהוָה', 'אֶל־קַיִן', 'אֵי', 'הֶבֶל', 'אָחִיךָ', 'וַיֹּאמֶר', 'לֹא', 'יָדַעְתִּי', 'הֲשֹׁמֵר', 'אָחִי', 'אָנֹכִי'], [['vayómer', 'y dijo'], ['Adonái', 'Jehová'], ['el-Káyin', 'a Caín'], ['ei', '¿dónde?'], ['Hével', 'Abel'], ['ajija', 'tu hermano'], ['vayómer', 'y dijo'], ['lo', 'no'], ['yadati', 'sé'], ['hashomer', '¿(soy) guarda?'], ['ají', 'de mi hermano'], ['anojí', 'yo']]),
          rv: 'Y Jehová dijo a Caín: ¿Dónde está Abel tu hermano? Y él respondió: No sé. ¿Soy yo acaso guarda de mi hermano?' },
        { tipo: 'tabla', titulo: 'Palabras', tabla: {
          titulo: 'Demostrativos, interrogativos y el relativo',
          cab: ['Clase', 'Hebreo', 'Se lee', 'Significa'],
          filas: [
            ['Demostrativos', 'זֶה · זֹאת · אֵלֶּה', 'ze · zot · éle', 'este · esta · estos, estas'],
            ['', 'הַהוּא · הַהִיא · הָהֵם', 'hahu · hahí · hahem', 'aquel · aquella · aquellos'],
            ['Interrogativos', 'מִי · מָה', 'mi · ma', '¿quién? · ¿qué?'],
            ['', 'אֵי · אַיֵּה', 'ei · ayé', '¿dónde?'],
            ['', 'אֵיךְ', 'ej', '¿cómo?'],
            ['', 'לָמָּה · מַדּוּעַ', 'láma · madúa', '¿por qué?'],
            ['', 'הֲ (prefijo)', 'ha', '¿acaso…? (pregunta de sí o no)'],
            ['Relativo', 'אֲשֶׁר · שֶׁ', 'asher · she', 'que, el cual, quien, donde'],
          ],
          nota: 'הַיּוֹם הַזֶּה es «este día» (como un adjetivo, con artículo); זֶה הַיּוֹם es «este es el día» (oración nominal).'
        } }
      ],
      texto: [
        'Esta estación reúne tres grupos de palabras pequeñas y muy frecuentes: las que señalan («este», «aquel»), las que preguntan («¿quién?», «¿qué?», «¿dónde?») y la que une oraciones («que»).',
        { h: 'Este y aquel' },
        'זֶה, ze, «este», זֹאת, zot, «esta», y אֵלֶּה, éle, «estos», funcionan como adjetivos: van después del sustantivo y llevan artículo si el sustantivo lo lleva. הַיּוֹם הַזֶּה es «este día». Sin artículo y delante, forman una oración nominal: «Este es el día que hizo Jehová» (Sal 118:24) comienza en hebreo זֶה־הַיּוֹם. Para «aquel», el hebreo usa los pronombres de tercera persona con artículo: הַהוּא, «aquel»; בַּיּוֹם הַהוּא, «en aquel día», una expresión que los profetas repiten muchas veces.',
        { h: 'Las preguntas' },
        'Los interrogativos de la tabla abren preguntas como en español. מִי, «¿quién?», y מָה, «¿qué?», están entre las palabras más frecuentes. Las preguntas de sí o no se forman de otra manera: con el prefijo הֲ, ha, pegado a la primera palabra. Se parece al artículo, pero su vocal es un jatef pataj y no lleva dagesh en la letra siguiente.',
        'En Génesis 4:9 aparecen los dos tipos. Dios pregunta: אֵי הֶבֶל אָחִיךָ, «¿Dónde está Abel tu hermano?». Y Caín responde con otra pregunta: הֲשֹׁמֵר אָחִי אָנֹכִי, «¿Soy yo acaso guarda de mi hermano?». La הֲ inicial convierte la oración en pregunta. שֹׁמֵר, shomer, es el participio de שָׁמַר, «guardar»: Caín pregunta si él es el «guardador» de su hermano, usando el mismo verbo que describía la tarea de Adán en el huerto.',
        { h: 'אֲשֶׁר: que, el cual, donde' },
        'אֲשֶׁר, asher, es la quinta palabra más frecuente del Antiguo Testamento. Une una oración a un sustantivo, como «que» o «el cual» en español: «la tierra אֲשֶׁר te mostraré», «la tierra que te mostraré» (Gn 12:1). No cambia por género ni por número. En algunos libros tardíos y en la poesía aparece su forma breve, שֶׁ, pegada a la palabra siguiente.',
        { ejercicio: {
          pregunta: '¿Qué indica la הֲ al comienzo de הֲשֹׁמֵר?',
          opciones: [
            { t: 'Es el artículo: «el guarda».', ok: false, por_que: 'El artículo lleva pataj o qamets y dagesh en la letra siguiente. Aquí hay jatef pataj y no hay dagesh.' },
            { t: 'Convierte la oración en una pregunta de sí o no: «¿acaso soy…?».', ok: true, por_que: 'Es la he interrogativa. Caín responde a Dios con una pregunta: «¿Soy yo acaso guarda de mi hermano?».' },
            { t: 'Es parte de la raíz del verbo.', ok: false, por_que: 'La raíz es שׁמר. La הֲ es un prefijo.' }
          ],
          explicacion: 'הֲ con jatef pataj, sin dagesh en la letra siguiente, es la partícula interrogativa.'
        } }
      ],
      pensar: 'Caín preguntó: «¿Soy yo acaso guarda de mi hermano?» (Gn 4:9). La Biblia entera responde que sí. ¿De quién te ha hecho Dios responsable, aunque a veces quisieras desentenderte?'
    },
    {
      id: 'numeros', n: 'Los números', ref: 'Génesis 5:5',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 5:5', ref: 'Génesis 5:5', he: 'וַיִּהְיוּ כָּל־יְמֵי אָדָם אֲשֶׁר־חַי תְּשַׁע מֵאוֹת שָׁנָה וּשְׁלֹשִׁים שָׁנָה וַיָּמֹת׃', tr: 'Vayihyú kol-yemé Adam asher-jay tsha meot shaná ushloshim shaná, vayamot.',
          palabras: P(['וַיִּהְיוּ', 'כָּל־יְמֵי', 'אָדָם', 'אֲשֶׁר־חַי', 'תְּשַׁע', 'מֵאוֹת', 'שָׁנָה', 'וּשְׁלֹשִׁים', 'שָׁנָה', 'וַיָּמֹת'], [['vayihyú', 'y fueron'], ['kol-yemé', 'todos los días de'], ['Adam', 'Adán'], ['asher-jay', 'que vivió'], ['tsha', 'nueve'], ['meot', 'cientos'], ['shaná', 'año'], ['ushloshim', 'y treinta'], ['shaná', 'año'], ['vayamot', 'y murió']]),
          rv: 'Y fueron todos los días que vivió Adán novecientos treinta años; y murió.' },
        { tipo: 'tabla', titulo: 'Del 1 al 10', tabla: {
          titulo: 'Los números del 1 al 10',
          cab: ['N.º', 'Con sustantivo masculino', 'Con sustantivo femenino', 'Ordinal'],
          filas: [
            ['1', 'אֶחָד · ejad', 'אַחַת · ajat', 'רִאשׁוֹן · rishón'],
            ['2', 'שְׁנַיִם · shenáyim', 'שְׁתַּיִם · shtáyim', 'שֵׁנִי · shení'],
            ['3', 'שְׁלֹשָׁה · shloshá', 'שָׁלֹשׁ · shalosh', 'שְׁלִישִׁי · shlishí'],
            ['4', 'אַרְבָּעָה · arbaá', 'אַרְבַּע · arbá', 'רְבִיעִי · revií'],
            ['5', 'חֲמִשָּׁה · jamishá', 'חָמֵשׁ · jamesh', 'חֲמִישִׁי · jamishí'],
            ['6', 'שִׁשָּׁה · shishá', 'שֵׁשׁ · shesh', 'שִׁשִּׁי · shishí'],
            ['7', 'שִׁבְעָה · shivá', 'שֶׁבַע · shéva', 'שְׁבִיעִי · shevií'],
            ['8', 'שְׁמֹנָה · shmoná', 'שְׁמֹנֶה · shmoné', 'שְׁמִינִי · shminí'],
            ['9', 'תִּשְׁעָה · tishá', 'תֵּשַׁע · tesha', 'תְּשִׁיעִי · tshií'],
            ['10', 'עֲשָׂרָה · asará', 'עֶשֶׂר · éser', 'עֲשִׂירִי · asirí'],
          ],
          nota: 'Decenas: עֶשְׂרִים 20, שְׁלֹשִׁים 30, אַרְבָּעִים 40… Centenas: מֵאָה 100, מָאתַיִם 200, שְׁלֹשׁ מֵאוֹת 300. Mil: אֶלֶף.'
        } }
      ],
      texto: [
        'Los números aparecen mucho en la Biblia: edades, años de reinado, genealogías, censos, medidas del tabernáculo. Saber leerlos ayuda a entender esos pasajes y a seguir las tablas de los comentarios.',
        { h: 'Al revés de lo esperado' },
        'Los números del 3 al 10 tienen una particularidad que sorprende a todos los que estudian hebreo: con un sustantivo masculino usan la forma que termina en ־ָה, que parece femenina, y con un sustantivo femenino usan la forma corta, que parece masculina. Así, Job tuvo שִׁבְעָה בָנִים, «siete hijos», con la forma larga, y שָׁלוֹשׁ בָּנוֹת, «tres hijas», con la forma corta (Job 1:2). Los gramáticos lo llaman polaridad. No hace falta dominarla: basta saber que las dos formas son el mismo número.',
        'El 1 y el 2 se comportan como adjetivos normales y concuerdan con el sustantivo. El 2, שְׁנַיִם, tiene forma de dual, como es natural.',
        { h: 'Números grandes' },
        'Las decenas se forman con la terminación ־ִים: עֶשְׂרִים, 20; שְׁלֹשִׁים, 30; אַרְבָּעִים, 40. Para 100 se usa מֵאָה; para 200, el dual מָאתַיִם; para 300 en adelante, el plural מֵאוֹת con el número delante. En Génesis 5:5, la edad de Adán se dice así: תְּשַׁע מֵאוֹת שָׁנָה וּשְׁלֹשִׁים שָׁנָה, «nueve cientos año y treinta año», es decir, novecientos treinta años. Fíjate en que «año» va en singular: con números grandes, el hebreo usa muchas veces el sustantivo en singular.',
        { h: 'Primero, segundo' },
        'Los ordinales terminan casi todos en ־ִי: שֵׁנִי, «segundo»; שְׁלִישִׁי, «tercero». La excepción es רִאשׁוֹן, «primero», que viene de רֹאשׁ, «cabeza». En Génesis 1, el primer día se llama יוֹם אֶחָד, «día uno», y los siguientes, יוֹם שֵׁנִי, «día segundo», יוֹם שְׁלִישִׁי, «día tercero».',
        'Antes de que se usaran estas palabras, y también después, las letras sirvieron como números, como aprendiste en El alfabeto hebreo.',
        { ir: { t: 'Ver «Las letras como números» en El alfabeto hebreo', a: '../../alfabeto-hebreo/#letras/9' } },
        { ejercicio: {
          pregunta: '¿Cuántos años son שְׁלֹשִׁים שָׁנָה?',
          opciones: [
            { t: 'Tres años.', ok: false, por_que: 'Tres sería שָׁלֹשׁ o שְׁלֹשָׁה. La terminación ־ִים forma la decena.' },
            { t: 'Treinta años.', ok: true, por_que: 'שְׁלֹשִׁים es 30: el número tres con la terminación ־ִים de las decenas.' },
            { t: 'Trescientos años.', ok: false, por_que: 'Trescientos sería שְׁלֹשׁ מֵאוֹת.' }
          ],
          explicacion: 'Las decenas terminan en ־ִים. שְׁלֹשִׁים es 30.'
        } }
      ],
      pensar: 'Adán vivió novecientos treinta años, «y murió» (Gn 5:5). El capítulo repite «y murió» una y otra vez, hasta Enoc. «Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría» (Sal 90:12). ¿Cómo estás usando tus días?'
    }
  ];

  window.__GRAM.sustantivo = sustantivo;
})();
/* Vocabulario y gramática básica del hebreo bíblico · ruta III. El verbo (ver encabezado de parte1.js) */
(() => {
  const P = window.__GRAM.P;
  const ESQ = 'Esquema del recurso.';

  const verbo = [
    {
      id: 'aspecto', n: 'Raíz, binyán y aspecto', ref: 'Salmo 23:1; Isaías 9:2',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-aspecto.svg', alt: 'Dos maneras de mirar una acción: el perfecto la ve completa, como un círculo cerrado; el imperfecto la ve en desarrollo o por suceder, como una flecha abierta; debajo, ejemplos con שָׁמַר y יִשְׁמֹר', pie: 'El hebreo no marca sobre todo el tiempo, sino cómo se mira la acción.', origen: 'esquema' },
        { tipo: 'hebreo', titulo: 'Salmo 23:1', ref: 'Salmo 23:1', he: 'מִזְמוֹר לְדָוִד יְהוָה רֹעִי לֹא אֶחְסָר׃', tr: 'Mizmor leDavid. Adonái roí, lo ejsar.',
          palabras: P(['מִזְמוֹר', 'לְדָוִד', 'יְהוָה', 'רֹעִי', 'לֹא', 'אֶחְסָר'], [['mizmor', 'salmo'], ['leDavid', 'de David'], ['Adonái', 'Jehová'], ['roí', 'mi pastor'], ['lo', 'no'], ['ejsar', 'me faltará (imperfecto)']]),
          rv: 'Jehová es mi pastor; nada me faltará.' }
      ],
      texto: [
        'El verbo es la parte más rica de la gramática hebrea. Una sola raíz puede aparecer en cientos de formas. Pero todas responden a cuatro preguntas, y si aprendes a hacerlas, ningún verbo te resultará un misterio.',
        { h: 'Las cuatro preguntas' },
        'Primera: ¿cuál es la raíz? Dice de qué acción se trata: שׁמר, «guardar». Segunda: ¿en qué binyán está? Los binyanim, palabra que significa «construcciones», son siete formas de la raíz que indican el tipo de acción: simple, intensiva, causativa, pasiva o reflexiva. Los verás en las estaciones 8 a 10. Tercera: ¿en qué conjugación está? Perfecto, imperfecto, imperativo, participio, infinitivo. Cuarta: ¿qué persona, género y número? «Yo», «tú (hombre)», «ellas».',
        { h: 'Aspecto, más que tiempo' },
        'El español organiza sus verbos por tiempo: pasado, presente, futuro. El hebreo bíblico organiza los suyos, sobre todo, por aspecto, es decir, por la manera de mirar la acción. El perfecto, que los gramáticos llaman también qatal, mira la acción como un hecho completo, terminado o seguro. El imperfecto, o yiqtol, la mira como algo en desarrollo, repetido o todavía por suceder. Por eso el perfecto suele traducirse en pasado y el imperfecto en futuro o presente, pero no siempre: el contexto decide.',
        'En el Salmo 23:1, לֹא אֶחְסָר es un imperfecto: «nada me faltará». Es una certeza que abarca todo el futuro del salmista. Y en Isaías 9:2, «el pueblo que andaba en tinieblas vio gran luz», el verbo רָאוּ, «vieron», es un perfecto, aunque Isaías habla de algo que todavía no había ocurrido. Los gramáticos lo llaman perfecto profético: el profeta habla de lo que Dios hará como si ya estuviera hecho, porque es seguro. Mateo lo vio cumplido en el ministerio de Jesús en Galilea (Mt 4:14-16).',
        { h: 'Los dos nombres' },
        'En este recurso usamos los dos nombres que encontrarás en los libros: «perfecto (qatal)» e «imperfecto (yiqtol)». Los nombres «perfecto» e «imperfecto» son los tradicionales; qatal y yiqtol imitan cómo suena cada forma con la raíz modelo קטל, y no prejuzgan si la acción es pasada o futura.',
        { ejercicio: {
          pregunta: '¿Por qué Isaías 9:2 usa un perfecto, «vio gran luz», para algo que todavía no había ocurrido?',
          opciones: [
            { t: 'Porque Isaías se equivocó de tiempo verbal.', ok: false, por_que: 'No es un error: es un uso conocido del perfecto en la profecía.' },
            { t: 'Porque el perfecto presenta la acción como completa y segura: lo que Dios promete es tan cierto como si ya hubiera ocurrido.', ok: true, por_que: 'Es el perfecto profético. El aspecto completo del perfecto expresa la certeza del cumplimiento.' },
            { t: 'Porque en hebreo el perfecto siempre es futuro.', ok: false, por_que: 'El perfecto suele traducirse en pasado. El contexto profético es lo que lo vuelve futuro.' }
          ],
          explicacion: 'El perfecto mira la acción como completa. En la profecía, eso expresa certeza.'
        } }
      ],
      pensar: 'El perfecto profético habla del futuro como de un hecho cumplido. ¿Qué promesa de Dios necesitas hoy mirar con esa certeza, como si ya estuviera hecha?'
    },
    {
      id: 'perfecto', n: 'El perfecto (qatal)', ref: 'Salmo 119:11',
      visual: [
        { tipo: 'tabla', titulo: 'Perfecto', tabla: {
          titulo: 'Qal perfecto de שָׁמַר, «guardar»',
          cab: ['Persona', 'Singular', 'Plural'],
          filas: [
            ['3.ª masculino', 'שָׁמַר · shamar · él guardó', 'שָׁמְרוּ · shamerú · ellos (y ellas) guardaron'],
            ['3.ª femenino', 'שָׁמְרָה · shamerá · ella guardó', ''],
            ['2.ª masculino', 'שָׁמַרְתָּ · shamárta · tú guardaste', 'שְׁמַרְתֶּם · shemartem · vosotros guardasteis'],
            ['2.ª femenino', 'שָׁמַרְתְּ · shamart · tú (mujer) guardaste', 'שְׁמַרְתֶּן · shemarten · vosotras guardasteis'],
            ['1.ª común', 'שָׁמַרְתִּי · shamárti · yo guardé', 'שָׁמַרְנוּ · shamárnu · nosotros guardamos'],
          ],
          nota: 'Fíjate en las terminaciones: ־תִּי yo, ־תָּ tú, ־ָה ella, ־וּ ellos, ־נוּ nosotros.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 119:11', ref: 'Salmo 119:11', he: 'בְּלִבִּי צָפַנְתִּי אִמְרָתֶךָ לְמַעַן לֹא אֶחֱטָא־לָךְ׃', tr: 'Belibí tsafanti imrateja, lemáan lo ejetá-laj.',
          palabras: P(['בְּלִבִּי', 'צָפַנְתִּי', 'אִמְרָתֶךָ', 'לְמַעַן', 'לֹא', 'אֶחֱטָא־לָךְ'], [['belibí', 'en mi corazón'], ['tsafanti', 'he guardado (atesoré)'], ['imrateja', 'tu dicho'], ['lemáan', 'para que'], ['lo', 'no'], ['ejetá-laj', 'peque contra ti']]),
          rv: 'En mi corazón he guardado tus dichos, Para no pecar contra ti.' }
      ],
      texto: [
        'El perfecto se forma agregando terminaciones al final de la raíz. La forma más simple, sin terminación, es la tercera persona masculina singular: שָׁמַר, shamar, «él guardó». Es la forma con que los diccionarios citan los verbos, y por eso en el vocabulario verás los verbos así.',
        { h: 'Las terminaciones' },
        'Mira la tabla. Las terminaciones que llevan tav (ת) son de primera y segunda persona: ־תִּי, -ti, «yo»; ־תָּ, -ta, «tú». ־נוּ, -nu, es «nosotros», el mismo sonido del sufijo «nuestro». ־ָה, -á, es «ella», y ־וּ, -u, «ellos» o «ellas». Con estas cinco señales reconocerás casi cualquier perfecto.',
        'Cuando la terminación empieza con consonante (־תִּי, ־נוּ), las vocales de la raíz se mantienen; cuando empieza con vocal (־ָה, ־וּ), la segunda vocal de la raíz se reduce a shevá: שָׁמְרוּ, shamerú. Y en «vosotros», שְׁמַרְתֶּם, es la primera la que se reduce. No necesitas memorizar estas reglas: basta con reconocer las terminaciones.',
        { h: 'Cómo se traduce' },
        'El perfecto presenta la acción como un hecho completo. Casi siempre se traduce en pasado («guardé») o en pretérito perfecto («he guardado»). Con verbos de estado o de conocimiento puede traducirse en presente: יָדַעְתִּי, yadati, es «sé», porque el conocimiento ya está completo en quien lo tiene (Gn 4:9; Job 19:25).',
        { h: 'En mi corazón he guardado tus dichos' },
        'El Salmo 119:11 tiene un perfecto de primera persona: צָפַנְתִּי, tsafanti, de la raíz צפן, que significa «esconder, atesorar». Es la palabra que se usa para guardar un tesoro en un lugar seguro. El salmista no dice solo que leyó la Palabra: dice que la atesoró en su corazón, y explica para qué: לְמַעַן לֹא אֶחֱטָא־לָךְ, «para no pecar contra ti». El segundo verbo, אֶחֱטָא, es un imperfecto, el tema de la estación siguiente.',
        { ejercicio: {
          pregunta: '¿Qué significa שָׁמַרְנוּ, shamárnu?',
          opciones: [
            { t: '«Guardaron».', ok: false, por_que: '«Guardaron» sería שָׁמְרוּ, con la terminación ־וּ.' },
            { t: '«Guardamos».', ok: true, por_que: 'La terminación ־נוּ es la primera persona plural: «nosotros guardamos».' },
            { t: '«Nuestro guardián».', ok: false, por_que: 'El sufijo ־ֵנוּ también significa «nuestro» en los sustantivos, pero שָׁמַרְנוּ tiene la forma de un perfecto, con las vocales qamets y pataj de la raíz.' }
          ],
          explicacion: 'Perfecto con ־נוּ: «nosotros» hicimos la acción. שָׁמַרְנוּ, «guardamos».'
        } }
      ],
      pensar: 'El salmista atesoró la Palabra «para no pecar» (Sal 119:11). ¿Qué versículo podrías aprender de memoria esta semana para tenerlo guardado cuando llegue la tentación?'
    },
    {
      id: 'imperfecto', n: 'El imperfecto (yiqtol)', ref: 'Salmo 121:7',
      visual: [
        { tipo: 'tabla', titulo: 'Imperfecto', tabla: {
          titulo: 'Qal imperfecto de שָׁמַר, «guardar»',
          cab: ['Persona', 'Singular', 'Plural'],
          filas: [
            ['3.ª masculino', 'יִשְׁמֹר · yishmor · él guardará', 'יִשְׁמְרוּ · yishmerú · ellos guardarán'],
            ['3.ª femenino', 'תִּשְׁמֹר · tishmor · ella guardará', 'תִּשְׁמֹרְנָה · tishmórna · ellas guardarán'],
            ['2.ª masculino', 'תִּשְׁמֹר · tishmor · tú guardarás', 'תִּשְׁמְרוּ · tishmerú · vosotros guardaréis'],
            ['2.ª femenino', 'תִּשְׁמְרִי · tishmerí · tú (mujer) guardarás', 'תִּשְׁמֹרְנָה · tishmórna · vosotras guardaréis'],
            ['1.ª común', 'אֶשְׁמֹר · eshmor · yo guardaré', 'נִשְׁמֹר · nishmor · nosotros guardaremos'],
          ],
          nota: 'Prefijos: א yo, ת tú y ella, י él y ellos, נ nosotros. Juntos forman la palabra אֵיתָן.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 121:7', ref: 'Salmo 121:7', he: 'יְהוָה יִשְׁמָרְךָ מִכָּל־רָע יִשְׁמֹר אֶת־נַפְשֶׁךָ׃', tr: 'Adonái yishmorjá mikol-ra, yishmor et-nafsheja.',
          palabras: P(['יְהוָה', 'יִשְׁמָרְךָ', 'מִכָּל־רָע', 'יִשְׁמֹר', 'אֶת־נַפְשֶׁךָ'], [['Adonái', 'Jehová'], ['yishmorjá', 'te guardará'], ['mikol-ra', 'de todo mal'], ['yishmor', 'guardará'], ['et-nafsheja', '(objeto) tu alma']]),
          rv: 'Jehová te guardará de todo mal; El guardará tu alma.' }
      ],
      texto: [
        'El imperfecto se forma sobre todo con prefijos: una letra delante de la raíz que indica la persona. Algunas personas suman además una terminación. Si el perfecto se reconoce por el final, el imperfecto se reconoce por el comienzo.',
        { h: 'Los cuatro prefijos' },
        'Hay cuatro letras: א para «yo» (אֶשְׁמֹר); ת para «tú» y para «ella» (תִּשְׁמֹר); י para «él» y «ellos» (יִשְׁמֹר); y נ para «nosotros» (נִשְׁמֹר). Una forma fácil de recordarlas es la palabra אֵיתָן, eitán, «firme», que contiene las cuatro. Las terminaciones completan la información: ־וּ indica plural (יִשְׁמְרוּ, «ellos guardarán»), ־ִי, una mujer (תִּשְׁמְרִי) y ־נָה, varias mujeres.',
        'Como תִּשְׁמֹר sirve para «tú guardarás» y para «ella guardará», el contexto dice cuál es. En la práctica casi nunca hay dudas.',
        { h: 'Cómo se traduce' },
        'El imperfecto mira la acción como no terminada. Por eso se traduce muchas veces en futuro: «guardará». Pero también puede expresar lo que se hace habitualmente («así hacía Job todos los días», Job 1:5), lo que se puede o se debe hacer, y los mandatos negativos, que verás en la estación 5.',
        { h: 'Jehová te guardará' },
        'El Salmo 121 usa el verbo שָׁמַר seis veces en ocho versículos. En el versículo 7 aparece dos veces en imperfecto. La primera, יִשְׁמָרְךָ, yishmorjá, es un imperfecto con un sufijo: «él guardará» más «a ti». Los verbos también llevan sufijos pronominales, como los sustantivos, para indicar el objeto. La segunda, יִשְׁמֹר אֶת־נַפְשֶׁךָ, es «guardará tu alma», con el objeto marcado por אֶת.',
        'El imperfecto da al salmo su tono de promesa: no dice que Jehová guardó al peregrino una vez, sino que lo guardará siempre, en cada salida y en cada regreso, «desde ahora y para siempre» (Sal 121:8).',
        { ejercicio: {
          pregunta: '¿Qué significa נִשְׁמֹר, nishmor?',
          opciones: [
            { t: '«Guardaremos».', ok: true, por_que: 'El prefijo נ es «nosotros» en el imperfecto: «nosotros guardaremos».' },
            { t: '«Fue guardado».', ok: false, por_que: 'El perfecto nifal נִשְׁמַר también empieza con nun, pero lleva pataj en la segunda sílaba. נִשְׁמֹר, con jolem, es un imperfecto qal.' },
            { t: '«Guardaré».', ok: false, por_que: '«Guardaré» sería אֶשְׁמֹר, con álef.' }
          ],
          explicacion: 'Prefijo נ + raíz + jolem: imperfecto qal de primera persona plural. Fíjate en las vocales para no confundirlo con el nifal.'
        } }
      ],
      pensar: '«Jehová te guardará de todo mal; El guardará tu alma» (Sal 121:7). ¿Qué temor necesitas poner hoy bajo esa promesa?'
    },
    {
      id: 'vav-consecutiva', n: 'La vav consecutiva: el verbo de la narración', ref: 'Génesis 12:4; Deuteronomio 6:5',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 12:4', ref: 'Génesis 12:4', he: 'וַיֵּלֶךְ אַבְרָם כַּאֲשֶׁר דִּבֶּר אֵלָיו יְהוָה וַיֵּלֶךְ אִתּוֹ לוֹט וְאַבְרָם בֶּן־חָמֵשׁ שָׁנִים וְשִׁבְעִים שָׁנָה בְּצֵאתוֹ מֵחָרָן׃', tr: 'Vayélej Avram kaasher dibér elav Adonái, vayélej itó Lot, veAvram ben-jamesh shanim veshivim shaná betsetó meJarán.',
          palabras: P(['וַיֵּלֶךְ', 'אַבְרָם', 'כַּאֲשֶׁר', 'דִּבֶּר', 'אֵלָיו', 'יְהוָה', 'וַיֵּלֶךְ', 'אִתּוֹ', 'לוֹט', 'וְאַבְרָם', 'בֶּן־חָמֵשׁ', 'שָׁנִים', 'וְשִׁבְעִים', 'שָׁנָה', 'בְּצֵאתוֹ', 'מֵחָרָן'], [['vayélej', 'y se fue'], ['Avram', 'Abram'], ['kaasher', 'como'], ['dibér', 'había dicho (habló)'], ['elav', 'a él'], ['Adonái', 'Jehová'], ['vayélej', 'y fue'], ['itó', 'con él'], ['Lot', 'Lot'], ['veAvram', 'y Abram (era)'], ['ben-jamesh', 'hijo de cinco'], ['shanim', 'años'], ['veshivim', 'y setenta'], ['shaná', 'año'], ['betsetó', 'en su salir (cuando salió)'], ['meJarán', 'de Harán']]),
          rv: 'Y se fue Abram, como Jehová le dijo; y Lot fue con él. Y era Abram de edad de setenta y cinco años cuando salió de Harán.' },
        { tipo: 'tabla', titulo: 'Las dos formas', tabla: {
          titulo: 'Las dos formas con vav consecutiva',
          cab: ['Forma', 'Cómo se forma', 'Ejemplos', 'Se traduce'],
          filas: [
            ['Imperfecto con vav (wayyiqtol)', 'וַ + dagesh + imperfecto', 'וַיֹּאמֶר · vayómer; וַיְהִי · vayehí; וַיַּרְא · vayar', 'Pasado: «y dijo», «y aconteció», «y vio»'],
            ['Perfecto con vav (weqatal)', 'וְ + perfecto', 'וְאָהַבְתָּ · veahavtá; וְהָיָה · vehayá', 'Futuro o mandato: «y amarás», «y acontecerá»'],
          ],
          nota: 'La vav consecutiva no cambia solo el sentido: a veces acorta la forma (וַיַּרְא en vez de יִרְאֶה) o mueve el acento.'
        } }
      ],
      texto: [
        'Si abres cualquier narración del Antiguo Testamento, verás una forma que se repite al comienzo de casi cada oración: וַיֹּאמֶר, «y dijo»; וַיְהִי, «y aconteció»; וַיֵּלֶךְ, «y se fue». Es el verbo de la narración hebrea, y es la forma verbal más frecuente de toda la Biblia.',
        { h: 'Un imperfecto que cuenta el pasado' },
        'Se forma con la conjunción ו con pataj, un dagesh en la letra siguiente y un imperfecto: וַ + יֵּלֶךְ. Pero, a diferencia del imperfecto solo, se traduce en pasado: «y se fue». Los gramáticos lo llaman imperfecto con vav consecutiva, o wayyiqtol. La vav no se llama «consecutiva» porque cambie el tiempo por arte de magia, sino porque encadena: cada וַיִּ־ presenta el paso siguiente de la historia.',
        'Mira Génesis 12:4. La narración avanza con dos wayyiqtol: וַיֵּלֶךְ אַבְרָם, «y se fue Abram», y וַיֵּלֶךְ אִתּוֹ לוֹט, «y fue con él Lot». En medio aparece un perfecto, דִּבֶּר, «había hablado», que no hace avanzar la historia: mira hacia atrás, a la orden de Dios del versículo 1. Y al final, וְאַבְרָם בֶּן־חָמֵשׁ שָׁנִים, «y Abram (era) hijo de setenta y cinco años», es una oración nominal que se detiene a dar un dato. Así, el narrador hebreo distingue con las formas verbales lo que avanza de lo que explica.',
        { h: '«Y aconteció»' },
        'וַיְהִי, vayehí, es el wayyiqtol del verbo הָיָה, «ser, suceder». La Reina-Valera lo traduce muchas veces «Y aconteció», y esa expresión, tan propia del español bíblico, es la huella de esta forma hebrea. En Génesis 1 se repite como estribillo: וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר, «y fue la tarde y fue la mañana».',
        { h: 'Un perfecto que mira al futuro' },
        'Existe también la forma contraria: la vav simple con un perfecto, que se traduce en futuro o como mandato. Los gramáticos la llaman perfecto con vav consecutiva, o weqatal. Es la forma de muchos mandamientos: וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ, «y amarás a Jehová tu Dios» (Dt 6:5). Y de muchas promesas: וְהָיָה, literalmente «y acontecerá», es la primera palabra de la profecía de Joel sobre el Espíritu, en Joel 2:28.',
        { ejercicio: {
          pregunta: '¿Cómo se traduce normalmente וַיַּרְא אֱלֹהִים, vayar Elohim?',
          opciones: [
            { t: '«Y verá Dios».', ok: false, por_que: 'Un imperfecto solo podría traducirse así, pero con vav consecutiva (וַ + dagesh) se traduce en pasado.' },
            { t: '«Y vio Dios».', ok: true, por_que: 'Es un wayyiqtol: la vav con pataj y dagesh más un imperfecto acortado. Se traduce en pasado (Gn 1:4).' },
            { t: '«Que Dios vea».', ok: false, por_que: 'El deseo se expresa con el yusivo, sin vav consecutiva. Aquí la vav con pataj indica narración.' }
          ],
          explicacion: 'וַ + dagesh + imperfecto = narración en pasado. וַיַּרְא, «y vio».'
        } }
      ],
      pensar: '«Y se fue Abram, como Jehová le dijo» (Gn 12:4). El narrador no cuenta lo que Abram pensó ni lo que sintió: cuenta que obedeció. ¿Qué te ha pedido Dios que todavía no has empezado a hacer?'
    },
    {
      id: 'mandatos', n: 'Mandatos y deseos', ref: 'Salmo 95:6; Éxodo 20:13; Génesis 15:1',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 95:6', ref: 'Salmo 95:6', he: 'בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי־יְהוָה עֹשֵׂנוּ׃', tr: 'Bou nishtajavé venijraá, nivrejá lifné-Adonái osenu.',
          palabras: P(['בֹּאוּ', 'נִשְׁתַּחֲוֶה', 'וְנִכְרָעָה', 'נִבְרְכָה', 'לִפְנֵי־יְהוָה', 'עֹשֵׂנוּ'], [['bou', 'venid (imperativo)'], ['nishtajavé', 'adoremos'], ['venijraá', 'y postrémonos (cohortativo)'], ['nivrejá', 'arrodillémonos (cohortativo)'], ['lifné-Adonái', 'delante de Jehová'], ['osenu', 'nuestro Hacedor']]),
          rv: 'Venid, adoremos y postrémonos; Arrodillémonos delante de Jehová nuestro Hacedor.' },
        { tipo: 'tabla', titulo: 'Formas', tabla: {
          titulo: 'Cómo se manda y cómo se desea',
          cab: ['Forma', 'Persona', 'Ejemplo', 'Significa'],
          filas: [
            ['Imperativo', '2.ª', 'שְׁמַע · shemá; לֵךְ · lej; בֹּאוּ · bou', '¡oye!; ¡vete!; ¡venid!'],
            ['Cohortativo', '1.ª', 'נִבְרְכָה · nivrejá; אֶשְׁמְרָה · eshmerá', 'arrodillémonos; atenderé (guardaré)'],
            ['Yusivo', '3.ª', 'יְהִי · yehí; יָאֵר · yaer', 'sea; haga resplandecer'],
            ['Prohibición permanente', '', 'לֹא תִּרְצָח · lo tirtsaj', 'no matarás (nunca)'],
            ['Prohibición inmediata', '', 'אַל־תִּירָא · al-tirá', 'no temas (ahora)'],
          ],
          nota: 'El cohortativo suele terminar en ־ָה; el yusivo, muchas veces, es un imperfecto acortado.'
        } }
      ],
      texto: [
        'El hebreo tiene tres formas para expresar la voluntad, según a quién se dirija: el imperativo para la segunda persona, el cohortativo para la primera y el yusivo para la tercera. Juntas se llaman formas volitivas.',
        { h: 'El imperativo' },
        'El imperativo es la forma de dar órdenes a alguien: «¡oye!», «¡vete!», «¡venid!». Se parece al imperfecto sin su prefijo. שְׁמַע, shemá, «¡oye!», es la primera palabra de la gran confesión de Israel (Dt 6:4); לֶךְ־לְךָ, «¡vete!», la primera orden de Dios a Abram (Gn 12:1). En el Salmo 95:6, בֹּאוּ, bou, «¡venid!», es un imperativo plural de בּוֹא.',
        { h: 'El cohortativo: «hagamos»' },
        'El cohortativo es la primera persona de la voluntad: «que yo haga», «hagamos». Se forma con el imperfecto de primera persona y una terminación ־ָה. En el Salmo 95:6, וְנִכְרָעָה, «y postrémonos», y נִבְרְכָה, «arrodillémonos», son cohortativos: el salmista se anima a sí mismo y a la congregación. Lo mismo hace David en el Salmo 39:1: אֶשְׁמְרָה דְרָכַי, «atenderé a mis caminos», literalmente «guardaré», con el verbo שָׁמַר.',
        { h: 'El yusivo: «sea»' },
        'El yusivo es la tercera persona de la voluntad: «que él haga», «sea». Muchas veces es un imperfecto acortado. Cuando Dios dijo יְהִי אוֹר, «Sea la luz» (Gn 1:3), usó un yusivo de הָיָה. La bendición sacerdotal está hecha de yusivos: יְבָרֶכְךָ יְהוָה, «Jehová te bendiga»; יָאֵר, «haga resplandecer» (Nm 6:24-25).',
        { h: '«No matarás» y «no temas»' },
        'El hebreo no usa el imperativo para prohibir. Tiene dos maneras. לֹא con el imperfecto expresa una prohibición permanente, una ley que vale siempre: לֹא תִּרְצָח, «No matarás» (Éx 20:13). אַל con el yusivo expresa una prohibición inmediata, para una situación concreta: אַל־תִּירָא, «No temas», le dice Dios a Abram en una noche de incertidumbre (Gn 15:1). La diferencia no siempre se ve en la Reina-Valera, pero está en el hebreo.',
        { ejercicio: {
          pregunta: 'En יְהִי אוֹר, «Sea la luz», ¿qué forma es יְהִי?',
          opciones: [
            { t: 'Un imperativo: Dios le da una orden a la luz.', ok: false, por_que: 'El imperativo es de segunda persona («¡sé!»). יְהִי es de tercera persona: «que sea».' },
            { t: 'Un yusivo: la voluntad de Dios en tercera persona, «que haya luz».', ok: true, por_que: 'יְהִי es el yusivo acortado de הָיָה. Expresa lo que Dios quiere que suceda, y sucede.' },
            { t: 'Un perfecto: «la luz fue».', ok: false, por_que: 'El perfecto de tercera persona sería הָיָה. El texto lo dice enseguida con otra forma: וַיְהִי־אוֹר, «y fue la luz».' }
          ],
          explicacion: 'Yusivo: tercera persona de la voluntad. יְהִי, «sea».'
        } }
      ],
      pensar: '«Venid, adoremos y postrémonos; arrodillémonos delante de Jehová nuestro Hacedor» (Sal 95:6). El salmista no adora solo: invita a otros. ¿A quién podrías invitar esta semana a adorar contigo?'
    },
    {
      id: 'participio', n: 'El participio: el que guarda', ref: 'Salmo 121:4',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 121:4', ref: 'Salmo 121:4', he: 'הִנֵּה לֹא־יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל׃', tr: 'Hiné lo-yanum velo yishán shomer Yisrael.',
          palabras: P(['הִנֵּה', 'לֹא־יָנוּם', 'וְלֹא', 'יִישָׁן', 'שׁוֹמֵר', 'יִשְׂרָאֵל'], [['hiné', 'he aquí'], ['lo-yanum', 'no se adormecerá'], ['velo', 'y no'], ['yishán', 'dormirá'], ['shomer', 'el que guarda (participio)'], ['Yisrael', 'a Israel']]),
          rv: 'He aquí, no se adormecerá ni dormirá El que guarda a Israel.' },
        { tipo: 'tabla', titulo: 'Participios', tabla: {
          titulo: 'Participios del qal',
          cab: ['Participio', 'Se lee', 'Como verbo', 'Como sustantivo'],
          filas: [
            ['שֹׁמֵר', 'shomer', 'que guarda', 'guarda, guardián'],
            ['רֹעֶה', 'roé', 'que apacienta', 'pastor (Sal 23:1, רֹעִי, mi pastor)'],
            ['שֹׁפֵט', 'shofet', 'que juzga', 'juez'],
            ['יוֹצֵר', 'yotser', 'que forma', 'alfarero (Jer 18:6)'],
            ['אֹיֵב', 'oyev', 'que odia', 'enemigo'],
            ['בָּרוּךְ (pasivo)', 'barúj', 'bendecido', 'bendito (Sal 118:26)'],
          ],
          nota: 'En los otros binyanim, el participio suele empezar con מְ: מְדַבֵּר, «que habla»; מְבֹרָךְ, «bendecido».'
        } }
      ],
      texto: [
        'El participio es mitad verbo y mitad sustantivo. Como verbo, expresa una acción en curso: «que guarda», «guardando». Como sustantivo, nombra a quien la hace: «el guarda». Por eso tiene género y número, como los sustantivos (שֹׁמֵר, שֹׁמֶרֶת, שֹׁמְרִים, שֹׁמְרוֹת), y no persona, como los verbos.',
        { h: 'Cómo se reconoce' },
        'El participio activo del qal tiene un jolem después de la primera letra y un tsere después de la segunda: שֹׁמֵר, shomer. A veces el jolem se escribe con vav, שׁוֹמֵר, como en el Salmo 121:4. El participio pasivo tiene un shuruq entre la segunda y la tercera letra: שָׁמוּר, shamur, «guardado»; בָּרוּךְ, barúj, «bendito». En los otros binyanim, el participio suele llevar un prefijo מְ: מְדַבֵּר, «que habla»; מְהֻלָּל, «alabado».',
        { h: 'Palabras que son participios' },
        'Muchos sustantivos frecuentes son en realidad participios: רֹעֶה, «pastor», es «el que apacienta»; שֹׁפֵט, «juez», es «el que juzga»; יוֹצֵר, «alfarero», es «el que forma», el mismo verbo de Génesis 2:7, donde Dios «formó» al hombre del polvo. אֹיֵב, «enemigo», es «el que odia». Cuando David dice יְהוָה רֹעִי, está usando un participio con sufijo: «Jehová, el que me apacienta».',
        { h: 'El que guarda a Israel' },
        'El Salmo 121:4 empieza con dos imperfectos negados: לֹא יָנוּם וְלֹא יִישָׁן, «no se adormecerá ni dormirá». Y termina con un participio: שׁוֹמֵר יִשְׂרָאֵל, «el que guarda a Israel». Es otra cadena constructa: el participio en estado constructo y su objeto, «el guardador de Israel». El participio subraya que el cuidado de Dios no es un acto aislado: es lo que Dios está haciendo, sin pausa. Los dioses de las naciones necesitaban dormir, como se burló Elías de Baal (1 R 18:27). El Dios de Israel, no.',
        { ejercicio: {
          pregunta: '¿Qué es שֹׁפֵט, shofet?',
          opciones: [
            { t: 'Un perfecto: «juzgó».', ok: false, por_que: 'El perfecto sería שָׁפַט, con qamets y pataj.' },
            { t: 'Un participio activo: «el que juzga», es decir, «juez».', ok: true, por_que: 'Jolem después de la primera letra y tsere después de la segunda: participio activo del qal. Se usa también como sustantivo.' },
            { t: 'Un imperativo: «¡juzga!».', ok: false, por_que: 'El imperativo sería שְׁפֹט, con shevá en la primera letra.' }
          ],
          explicacion: 'Patrón o–e (שֹׁמֵר, שֹׁפֵט): participio activo del qal.'
        } }
      ],
      pensar: '«No se adormecerá ni dormirá el que guarda a Israel» (Sal 121:4). ¿Qué te quita el sueño? ¿Cómo cambia saber que el que te guarda nunca duerme?'
    },
    {
      id: 'infinitivo', n: 'El infinitivo', ref: 'Génesis 2:17; 3:4',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 2:17', ref: 'Génesis 2:17', he: 'וּמֵעֵץ הַדַּעַת טוֹב וָרָע לֹא תֹאכַל מִמֶּנּוּ כִּי בְּיוֹם אֲכָלְךָ מִמֶּנּוּ מוֹת תָּמוּת׃', tr: 'Umeets hadáat tov vará lo tojal mimenu, ki beyom ajoljá mimenu mot tamut.',
          palabras: P(['וּמֵעֵץ', 'הַדַּעַת', 'טוֹב', 'וָרָע', 'לֹא', 'תֹאכַל', 'מִמֶּנּוּ', 'כִּי', 'בְּיוֹם', 'אֲכָלְךָ', 'מִמֶּנּוּ', 'מוֹת', 'תָּמוּת'], [['umeets', 'y del árbol de'], ['hadáat', 'el conocimiento (de)'], ['tov', 'bien'], ['vará', 'y mal'], ['lo', 'no'], ['tojal', 'comerás'], ['mimenu', 'de él'], ['ki', 'porque'], ['beyom', 'en el día de'], ['ajoljá', 'tu comer (que comieres)'], ['mimenu', 'de él'], ['mot', 'morir (infinitivo absoluto)'], ['tamut', 'morirás']]),
          rv: 'mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás.' },
        { tipo: 'tabla', titulo: 'Infinitivos', tabla: {
          titulo: 'Los dos infinitivos',
          cab: ['Infinitivo', 'Ejemplo', 'Literal', 'Se traduce'],
          filas: [
            ['Constructo con לְ', 'לִשְׁמֹר · lishmor', 'para guardar', 'para guardar'],
            ['', 'לֵאמֹר · lemor', 'para decir', 'diciendo; (dos puntos)'],
            ['Constructo con בְּ o כְּ', 'בְּיוֹם אֲכָלְךָ', 'en el día de tu comer', 'el día que comieres'],
            ['', 'בְּצֵאתוֹ', 'en su salir', 'cuando salió (Gn 12:4)'],
            ['Absoluto + verbo', 'מוֹת תָּמוּת · mot tamut', 'morir morirás', 'ciertamente morirás'],
            ['', 'לֹא־מוֹת תְּמֻתוּן', 'no morir moriréis', 'no moriréis (Gn 3:4)'],
          ],
          nota: 'El infinitivo constructo funciona como un sustantivo: lleva preposiciones y sufijos.'
        } }
      ],
      texto: [
        'El hebreo tiene dos infinitivos. Los dos se traducen muchas veces con un infinitivo español, pero funcionan de manera muy distinta.',
        { h: 'El infinitivo constructo' },
        'El infinitivo constructo se comporta como un sustantivo: lleva preposiciones y sufijos. Con לְ indica propósito: לִשְׁמֹר, «para guardar»; לְעָבְדָהּ וּלְשָׁמְרָהּ, «para que lo labrara y lo guardase» (Gn 2:15). Con בְּ o כְּ indica tiempo: בְּיוֹם אֲכָלְךָ, literalmente «en el día de tu comer», es decir, «el día que comieres». Y בְּצֵאתוֹ, «en su salir», es «cuando salió» (Gn 12:4).',
        'Una forma aparece casi mil veces: לֵאמֹר, lemor, el infinitivo de אָמַר con לְ, «para decir». Introduce las palabras de alguien, como nuestros dos puntos o comillas. La Reina-Valera suele traducirlo «diciendo»: «Y mandó Jehová Dios al hombre, diciendo…» (Gn 2:16).',
        { h: 'El infinitivo absoluto' },
        'El infinitivo absoluto no lleva preposiciones ni sufijos. Su uso más característico es reforzar otro verbo de la misma raíz. מוֹת תָּמוּת, mot tamut, es «morir morirás»: la Reina-Valera lo traduce «ciertamente morirás» (Gn 2:17). Esta construcción expresa certeza o intensidad: הָלוֹךְ הָלַךְ, «ciertamente fue»; בָּרֵךְ אֲבָרֶכְךָ, «de cierto te bendeciré» (Gn 22:17).',
        'El infinitivo absoluto también puede funcionar como una orden enfática. El cuarto mandamiento empieza así: זָכוֹר אֶת־יוֹם הַשַּׁבָּת לְקַדְּשׁוֹ, «Acuérdate del día de reposo para santificarlo» (Éx 20:8). זָכוֹר es un infinitivo absoluto, «¡acordarse!», y לְקַדְּשׁוֹ es un infinitivo constructo de piel con לְ y el sufijo «lo», «para santificarlo». Los dos infinitivos, en un solo versículo.',
        { h: 'La serpiente y el infinitivo' },
        'Compara el mandato de Dios con las palabras de la serpiente. Dios dijo: מוֹת תָּמוּת, «ciertamente morirás». La serpiente respondió: לֹא־מוֹת תְּמֻתוּן, «no moriréis» (Gn 3:4), con la misma construcción y un לֹא delante. No solo negó la advertencia de Dios: la citó palabra por palabra y le puso un «no». La primera mentira de la Biblia es una contradicción exacta de la Palabra de Dios.',
        { ejercicio: {
          pregunta: '¿Qué indica la repetición en מוֹת תָּמוּת, «morir morirás»?',
          opciones: [
            { t: 'Que la persona morirá dos veces.', ok: false, por_que: 'La repetición no cuenta muertes: refuerza la certeza del verbo.' },
            { t: 'Certeza: el infinitivo absoluto refuerza al verbo, «ciertamente morirás».', ok: true, por_que: 'El infinitivo absoluto delante de un verbo de la misma raíz expresa certeza o intensidad.' },
            { t: 'Que es una pregunta: «¿morirás?».', ok: false, por_que: 'Las preguntas de sí o no se marcan con הֲ. Aquí no hay pregunta.' }
          ],
          explicacion: 'Infinitivo absoluto + verbo de la misma raíz = certeza o intensidad.'
        } }
      ],
      pensar: 'La serpiente tomó la Palabra de Dios y le agregó un «no» (Gn 3:4). ¿Qué voces a tu alrededor hacen lo mismo hoy con lo que Dios ha dicho?'
    },
    {
      id: 'binyanim', n: 'Los siete binyanim', ref: 'Levítico 11:44',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-binyanim.svg', alt: 'Cuadro de los siete binyanim en tres columnas, simple, intensivo y causativo, y tres filas, activo, pasivo y reflexivo: qal, nifal, piel, pual, hifil, hofal e hitpael, con su perfecto de שָׁמַר', pie: 'Siete construcciones de una misma raíz.', origen: 'esquema' },
        { tipo: 'hebreo', titulo: 'Levítico 11:44', ref: 'Levítico 11:44', he: 'כִּי אֲנִי יְהוָה אֱלֹהֵיכֶם וְהִתְקַדִּשְׁתֶּם וִהְיִיתֶם קְדֹשִׁים כִּי קָדוֹשׁ אָנִי וְלֹא תְטַמְּאוּ אֶת־נַפְשֹׁתֵיכֶם בְּכָל־הַשֶּׁרֶץ הָרֹמֵשׂ עַל־הָאָרֶץ׃', tr: 'Ki aní Adonái Elohejem, vehitkadishtem viheyitem kedoshim ki kadosh aní, velo tetamú et-nafshotejem bejol-hashérets haromés al-haárets.',
          palabras: P(['כִּי', 'אֲנִי', 'יְהוָה', 'אֱלֹהֵיכֶם', 'וְהִתְקַדִּשְׁתֶּם', 'וִהְיִיתֶם', 'קְדֹשִׁים', 'כִּי', 'קָדוֹשׁ', 'אָנִי', 'וְלֹא', 'תְטַמְּאוּ', 'אֶת־נַפְשֹׁתֵיכֶם', 'בְּכָל־הַשֶּׁרֶץ', 'הָרֹמֵשׂ', 'עַל־הָאָרֶץ'], [['ki', 'porque'], ['aní', 'yo (soy)'], ['Adonái', 'Jehová'], ['Elohejem', 'vuestro Dios'], ['vehitkadishtem', 'y os santificaréis (hitpael)'], ['viheyitem', 'y seréis'], ['kedoshim', 'santos'], ['ki', 'porque'], ['kadosh', 'santo'], ['aní', 'yo (soy)'], ['velo', 'y no'], ['tetamú', 'contaminaréis (piel)'], ['et-nafshotejem', 'vuestras personas'], ['bejol-hashérets', 'con todo reptil'], ['haromés', 'que se arrastra'], ['al-haárets', 'sobre la tierra']]),
          rv: 'Porque yo soy Jehová vuestro Dios; vosotros por tanto os santificaréis, y seréis santos, porque yo soy santo; así que no contaminéis vuestras personas con ningún animal que se arrastre sobre la tierra.' },
        { tipo: 'tabla', titulo: 'La raíz קדשׁ', tabla: {
          titulo: 'Una raíz en varios binyanim: קדשׁ',
          cab: ['Binyán', 'Forma', 'Se lee', 'Significa'],
          filas: [
            ['Qal', 'קָדַשׁ', 'kadash', 'ser santo, quedar consagrado'],
            ['Nifal', 'נִקְדַּשׁ', 'nikdash', 'mostrarse santo, ser santificado'],
            ['Piel', 'וַיְקַדֵּשׁ', 'vayekadesh', 'y santificó (Gn 2:3)'],
            ['Pual', 'מְקֻדָּשׁ', 'mekudash', 'consagrado'],
            ['Hifil', 'הִקְדִּישׁ', 'hikdish', 'dedicó, consagró (2 S 8:11)'],
            ['Hitpael', 'וְהִתְקַדִּשְׁתֶּם', 'vehitkadishtem', 'y os santificaréis'],
          ],
          nota: 'El sentido básico se mantiene; cambia el tipo de acción.'
        } }
      ],
      texto: [
        'Hasta aquí estudiaste el qal, la forma simple del verbo. Pero una raíz hebrea puede aparecer en siete construcciones distintas, llamadas binyanim, cada una con su propio patrón de prefijos y vocales. Cada binyán modifica el sentido de la raíz de una manera previsible.',
        { h: 'Tres tipos de acción, tres voces' },
        'El esquema del panel los ordena en un cuadro. Hay tres tipos de acción: simple, intensiva y causativa. Y hay tres voces: activa, pasiva y reflexiva. El qal es el simple activo («guardar») y el nifal, el simple pasivo o reflexivo («ser guardado», «guardarse»). El piel es el intensivo activo y el pual, su pasivo. El hifil es el causativo activo («hacer guardar») y el hofal, su pasivo. El hitpael es el reflexivo de la forma intensiva («santificarse», «pasearse»).',
        'Los nombres de los binyanim vienen de la raíz que usaban los gramáticos judíos como modelo, פעל, «hacer»: נִפְעַל, nifal; פִּעֵל, piel; הִפְעִיל, hifil. Cada nombre es la forma de esa raíz en ese binyán. Qal, en cambio, significa «liviano»: es la forma sin agregados.',
        { h: 'Una advertencia' },
        'Lo de «intensivo» y «causativo» es una orientación, no una regla matemática. Muchos verbos se usan en un solo binyán, y el sentido de cada forma lo da el diccionario. דִּבֶּר, «habló», está en piel, pero no significa «habló intensamente». Lo útil de conocer los binyanim es reconocer la forma: una vez que sabes que וַיְקַדֵּשׁ es un piel de קדשׁ, puedes buscarlo en el diccionario y entender por qué significa «santificó».',
        { h: 'Santos, porque yo soy santo' },
        'Levítico 11:44 tiene tres binyanim de dos raíces. וְהִתְקַדִּשְׁתֶּם es un hitpael de קדשׁ con vav consecutiva: «y os santificaréis». קָדוֹשׁ es el adjetivo «santo». Y תְטַמְּאוּ, «contaminaréis», es un piel de טמא. Dios llama a su pueblo a apartarse para él, y el fundamento es su propio carácter: כִּי קָדוֹשׁ אָנִי, «porque yo soy santo». Pedro cita este mandato para la iglesia (1 P 1:16).',
        { ir: { t: 'Ver los siete binyanim de שָׁמַר en el vocabulario', a: 'vocabulario/#verbo' } },
        { ejercicio: {
          pregunta: 'Si קָדַשׁ (qal) significa «ser santo», ¿qué significará probablemente su hifil, הִקְדִּישׁ?',
          opciones: [
            { t: '«Ser santificado por otro».', ok: false, por_que: 'Ese sentido pasivo corresponde más bien al nifal o al pual.' },
            { t: '«Hacer santo», es decir, consagrar o dedicar algo.', ok: true, por_que: 'El hifil suele ser causativo: hace que algo sea lo que dice la raíz. David «dedicó» a Jehová la plata y el oro (2 S 8:11).' },
            { t: '«Santificarse a sí mismo».', ok: false, por_que: 'El sentido reflexivo es propio del hitpael, como en וְהִתְקַדִּשְׁתֶּם.' }
          ],
          explicacion: 'Hifil = causativo, por lo general. הִקְדִּישׁ, «consagró, dedicó».'
        } }
      ],
      pensar: '«Os santificaréis, y seréis santos, porque yo soy santo» (Lv 11:44). ¿Qué hábito, palabra o costumbre necesitas apartar de tu vida para vivir apartado para Dios?'
    },
    {
      id: 'nifal-piel', n: 'Nifal, piel y pual', ref: 'Isaías 9:6',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 9:6', ref: 'Isaías 9:6', he: 'כִּי־יֶלֶד יֻלַּד־לָנוּ בֵּן נִתַּן־לָנוּ וַתְּהִי הַמִּשְׂרָה עַל־שִׁכְמוֹ וַיִּקְרָא שְׁמוֹ פֶּלֶא יוֹעֵץ אֵל גִּבּוֹר אֲבִי עַד שַׂר־שָׁלוֹם׃', tr: 'Ki-yéled yulad-lanu, ben nitán-lanu, vatehí hamisrá al-shijmó, vayikrá shmó Pele Yoets El Guibor Aví-ad Sar-shalom.',
          palabras: P(['כִּי־יֶלֶד', 'יֻלַּד־לָנוּ', 'בֵּן', 'נִתַּן־לָנוּ', 'וַתְּהִי', 'הַמִּשְׂרָה', 'עַל־שִׁכְמוֹ', 'וַיִּקְרָא', 'שְׁמוֹ', 'פֶּלֶא', 'יוֹעֵץ', 'אֵל', 'גִּבּוֹר', 'אֲבִי', 'עַד', 'שַׂר־שָׁלוֹם'], [['ki-yéled', 'porque un niño'], ['yulad-lanu', 'nos es nacido (pual)'], ['ben', 'un hijo'], ['nitán-lanu', 'nos es dado (nifal)'], ['vatehí', 'y será'], ['hamisrá', 'el principado'], ['al-shijmó', 'sobre su hombro'], ['vayikrá', 'y llamará'], ['shmó', 'su nombre'], ['Pele', 'Admirable'], ['Yoets', 'Consejero'], ['El', 'Dios'], ['Guibor', 'Fuerte'], ['aví', 'Padre de'], ['ad', 'eternidad'], ['sar-shalom', 'Príncipe de paz']]),
          rv: 'Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz.' },
        { tipo: 'tabla', titulo: 'Ejemplos', tabla: {
          titulo: 'Cómo se reconocen',
          cab: ['Binyán', 'Señal', 'Ejemplos'],
          filas: [
            ['Nifal', 'נִ־ delante de la raíz (perfecto); dagesh en la primera letra (imperfecto)', 'נִשְׁבַּע · juró; נִלְחַם · peleó; נִתַּן · fue dado'],
            ['Piel', 'Dagesh en la segunda letra; jireq o shevá en la primera', 'דִּבֶּר · habló; בֵּרַךְ · bendijo; בִּקֵּשׁ · buscó'],
            ['Pual', 'Dagesh en la segunda letra; kibuts (u) en la primera', 'יֻלַּד · fue nacido; מְהֻלָּל · alabado (Sal 145:3)'],
          ],
          nota: 'Delante de una gutural o de resh, que no aceptan dagesh, el piel alarga la vocal anterior: בֵּרַךְ, no בִּרֵּךְ.'
        } }
      ],
      texto: [
        'De los seis binyanim que acompañan al qal, tres son muy frecuentes: el nifal, el piel y el hifil. Esta estación presenta los dos primeros y el pual, el pasivo del piel. No hace falta conjugarlos: basta con reconocerlos.',
        { h: 'El nifal' },
        'El nifal se reconoce por una nun antes de la raíz: נִשְׁמַר, nishmar. En el imperfecto, esa nun desaparece y deja un dagesh en la primera letra de la raíz: יִשָּׁמֵר, yishamer. Su sentido suele ser pasivo («fue dado», «fue guardado») o reflexivo («se guardó»). Algunos verbos se usan casi solo en nifal con sentido activo: נִשְׁבַּע, «juró»; נִלְחַם, «peleó».',
        { h: 'El piel' },
        'El piel se reconoce por un dagesh en la segunda letra de la raíz, que la duplica: דִּבֶּר, dibér, «habló». A veces intensifica la acción: שָׁבַר es «quebrar» y שִׁבֵּר, «hacer pedazos». A veces la vuelve causativa: לָמַד es «aprender» y לִמֵּד, «enseñar», es decir, «hacer aprender». Y muchos verbos frecuentes se usan sobre todo en piel: דִּבֶּר, «hablar»; בֵּרַךְ, «bendecir»; בִּקֵּשׁ, «buscar»; כִּפֶּר, «hacer expiación».',
        { h: 'El pual' },
        'El pual tiene el mismo dagesh que el piel, pero con un kibuts (u) en la primera letra: יֻלַּד, yulad, «fue nacido». Es el pasivo del piel. Su participio, con מְ, es muy común en los Salmos: מְהֻלָּל, «alabado», digno de alabanza, como en el Salmo 145:3.',
        { h: 'Un niño nos es nacido' },
        'Isaías 9:6 (9:5 en la Biblia hebrea) tiene un pual y un nifal en sus primeras palabras. יֻלַּד־לָנוּ, «nos es nacido», es un pual de יָלַד; נִתַּן־לָנוּ, «nos es dado», es un nifal de נָתַן, en el que la nun de la raíz se asimiló y dejó un dagesh. Los dos son perfectos: el profeta ve el nacimiento como un hecho cumplido. Los dos son pasivos: el niño no se hace a sí mismo, es dado por Dios. Y después vienen los cuatro títulos, cadenas de sustantivos sin verbo: פֶּלֶא יוֹעֵץ, «Admirable, Consejero»; אֵל גִּבּוֹר, «Dios Fuerte», el mismo título que Isaías da a Jehová en 10:21; אֲבִי עַד, «Padre de eternidad»; שַׂר־שָׁלוֹם, «Príncipe de paz». La iglesia ha leído siempre este versículo como una profecía de Jesucristo.',
        { ejercicio: {
          pregunta: '¿Qué binyán es בִּקֵּשׁ, bikesh, «buscó»?',
          opciones: [
            { t: 'Qal.', ok: false, por_que: 'El perfecto qal tendría qamets y pataj y no tendría dagesh en la segunda letra.' },
            { t: 'Piel.', ok: true, por_que: 'Jireq en la primera letra y dagesh en la segunda (la qof): el patrón del piel, como en דִּבֶּר.' },
            { t: 'Nifal.', ok: false, por_que: 'El nifal llevaría una nun antes de la raíz.' }
          ],
          explicacion: 'Dagesh en la segunda letra de la raíz: piel (o pual, si la primera tiene u).'
        } }
      ],
      pensar: '«Un niño nos es nacido, hijo nos es dado» (Is 9:6). Los dos verbos son pasivos: Jesús es un regalo que Dios da. ¿Lo recibes como un regalo o como algo que tienes que ganar?'
    },
    {
      id: 'hifil-hitpael', n: 'Hifil, hofal e hitpael', ref: 'Génesis 5:24; Éxodo 20:2',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 5:24', ref: 'Génesis 5:24', he: 'וַיִּתְהַלֵּךְ חֲנוֹךְ אֶת־הָאֱלֹהִים וְאֵינֶנּוּ כִּי־לָקַח אֹתוֹ אֱלֹהִים׃', tr: 'Vayithalej Janoj et-haElohim, veenenu, ki-lakaj otó Elohim.',
          palabras: P(['וַיִּתְהַלֵּךְ', 'חֲנוֹךְ', 'אֶת־הָאֱלֹהִים', 'וְאֵינֶנּוּ', 'כִּי־לָקַח', 'אֹתוֹ', 'אֱלֹהִים'], [['vayithalej', 'y caminó (hitpael)'], ['Janoj', 'Enoc'], ['et-haElohim', 'con Dios'], ['veenenu', 'y no estaba más'], ['ki-lakaj', 'porque tomó'], ['otó', 'a él'], ['Elohim', 'Dios']]),
          rv: 'Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios.' },
        { tipo: 'tabla', titulo: 'Hifil', tabla: {
          titulo: 'El hifil: hacer que algo suceda',
          cab: ['Qal', 'Significa', 'Hifil', 'Significa'],
          filas: [
            ['יָצָא · yatsá', 'salió', 'הוֹצִיא · hotsí', 'sacó, hizo salir'],
            ['בּוֹא · bo', 'vino, entró', 'הֵבִיא · hevi', 'trajo, hizo entrar'],
            ['עָלָה · alá', 'subió', 'הֶעֱלָה · heelá', 'hizo subir, ofreció'],
            ['מוּת · mut', 'murió', 'הֵמִית · hemit', 'mató, hizo morir'],
            ['שׁוּב · shuv', 'volvió', 'הֵשִׁיב · heshiv', 'hizo volver, devolvió'],
            ['קוּם · kum', 'se levantó', 'הֵקִים · hekim', 'levantó, estableció'],
          ],
          nota: 'Señales del hifil: הִ o הֵ antes de la raíz en el perfecto, y muchas veces una yod antes de la última letra.'
        } }
      ],
      texto: [
        'Esta estación presenta los tres binyanim que faltan: el hifil, muy frecuente; el hofal, su pasivo, poco frecuente, y el hitpael, el reflexivo.',
        { h: 'El hifil: hacer hacer' },
        'El hifil es el causativo: hace que alguien haga o sea lo que dice la raíz. יָצָא es «salir»; הוֹצִיא, «hacer salir, sacar». Se reconoce por una he antes de la raíz en el perfecto (הִשְׁמִיד, «destruyó») y, muchas veces, por una yod antes de la última letra. En el imperfecto, la he desaparece y el prefijo lleva pataj: יַשְׁמִיד.',
        'En Éxodo 20:2, que leíste en la ruta II, Dios dice הוֹצֵאתִיךָ, «te saqué»: un perfecto hifil de יָצָא con el sufijo «te». Israel salió de Egipto, sí, pero no por sí mismo: Dios lo hizo salir. La salvación es obra de Dios.',
        { h: 'El hofal' },
        'El hofal es el pasivo del hifil: «ser hecho salir», «ser traído». Se reconoce por una he con qamets jatuf (o) o kibuts (u) antes de la raíz: הוּבָא, «fue traído»; הֻגַּד, «fue contado». Aparece pocas veces; si lo encuentras, pensarás en el hifil de la misma raíz.',
        { h: 'El hitpael: caminar con Dios' },
        'El hitpael se reconoce por el prefijo הִתְ־ y un dagesh en la segunda letra: הִתְפַּלֵּל, hitpalel, «oró»; הִתְקַדֵּשׁ, «se santificó». Su sentido suele ser reflexivo («santificarse») o de acción repetida. En Génesis 5:24, וַיִּתְהַלֵּךְ, vayithalej, es el hitpael de הָלַךְ, «andar», con vav consecutiva. No es simplemente «fue»: es andar de un lado a otro, pasearse. Enoc no hizo un viaje con Dios: vivió con él, día tras día. Lo mismo se dice de Noé (Gn 6:9).',
        'El versículo termina con dos frases breves. וְאֵינֶנּוּ, «y no estaba más», es אַיִן, «no hay», con un sufijo: «y no lo hay». Y כִּי־לָקַח אֹתוֹ אֱלֹהִים, «porque lo tomó Dios». Hebreos 11:5 lo explica: «Por la fe Enoc fue traspuesto para no ver muerte».',
        { ejercicio: {
          pregunta: 'Si יָצָא significa «salir», ¿qué significa הוֹצִיא?',
          opciones: [
            { t: '«Salió de nuevo».', ok: false, por_que: 'La repetición no se expresa con el hifil.' },
            { t: '«Hizo salir, sacó».', ok: true, por_que: 'El hifil es causativo: hace que otro salga. Por eso «te saqué de la tierra de Egipto» (Éx 20:2).' },
            { t: '«Fue sacado».', ok: false, por_que: 'El sentido pasivo corresponde al hofal: הוּצָא.' }
          ],
          explicacion: 'Hifil: causativo. הוֹצִיא, «sacó».'
        } }
      ],
      pensar: '«Caminó, pues, Enoc con Dios» (Gn 5:24). El verbo habla de un andar constante, no de un paseo ocasional. ¿Cómo sería tu semana si caminaras con Dios de esa manera?'
    },
    {
      id: 'debiles', n: 'Los verbos débiles', ref: 'Isaías 40:31',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 40:31', ref: 'Isaías 40:31', he: 'וְקוֹיֵ יְהוָה יַחֲלִיפוּ כֹחַ יַעֲלוּ אֵבֶר כַּנְּשָׁרִים יָרוּצוּ וְלֹא יִיגָעוּ יֵלְכוּ וְלֹא יִיעָפוּ׃', tr: 'Vekové Adonái yajalifu jóaj, yaalú éver kanesharim, yarutsú velo yigaú, yeljú velo yiafú.',
          palabras: P(['וְקוֹיֵ', 'יְהוָה', 'יַחֲלִיפוּ', 'כֹחַ', 'יַעֲלוּ', 'אֵבֶר', 'כַּנְּשָׁרִים', 'יָרוּצוּ', 'וְלֹא', 'יִיגָעוּ', 'יֵלְכוּ', 'וְלֹא', 'יִיעָפוּ'], [['vekové', 'pero los que esperan'], ['Adonái', 'a Jehová'], ['yajalifu', 'renovarán'], ['jóaj', 'fuerza'], ['yaalú', 'subirán (con)'], ['éver', 'alas'], ['kanesharim', 'como las águilas'], ['yarutsú', 'correrán'], ['velo', 'y no'], ['yigaú', 'se cansarán'], ['yeljú', 'caminarán'], ['velo', 'y no'], ['yiafú', 'se fatigarán']]),
          rv: 'pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.' },
        { tipo: 'tabla', titulo: 'Tipos', tabla: {
          titulo: 'Los verbos débiles más comunes',
          cab: ['Tipo', 'Qué pasa', 'Ejemplo', 'Imperfecto'],
          filas: [
            ['Primera nun', 'La nun se asimila: deja un dagesh', 'נָתַן · dar', 'יִתֵּן · yitén'],
            ['Primera yod', 'La yod desaparece; el prefijo lleva tsere', 'יָשַׁב · habitar', 'יֵשֵׁב · yeshev'],
            ['', 'הָלַךְ se comporta igual', 'הָלַךְ · ir', 'יֵלֵךְ · yelej'],
            ['Hueco (vav o yod en medio)', 'La letra del medio se vuelve vocal', 'קוּם · levantarse', 'יָקוּם · yakum'],
            ['Final he', 'La he se vuelve vocal o desaparece', 'בָּנָה · edificar', 'יִבְנֶה · yivné; וַיִּבֶן · vayíven'],
            ['Con gutural', 'Las vocales cambian junto a א, ה, ח, ע', 'עָמַד · estar de pie', 'יַעֲמֹד · yaamod'],
            ['Doble', 'Las dos letras iguales se juntan', 'סָבַב · rodear', 'יָסֹב · yasov'],
          ],
          nota: 'Si en una forma ves solo dos letras de la raíz, pregúntate cuál de estas cayó.'
        } }
      ],
      texto: [
        'El verbo modelo שָׁמַר se conjuga sin sorpresas porque sus tres letras son fuertes. Pero muchos de los verbos más frecuentes tienen una letra débil: una nun, una yod, una vav o una he que se asimila, se vuelve vocal o desaparece. Se llaman verbos débiles. No hace falta estudiar sus tablas completas: basta con saber qué puede pasar para reconocer la raíz.',
        { h: 'Cuando falta una letra' },
        'La tabla muestra los tipos más comunes. En los verbos de primera nun, como נָתַן, «dar», la nun se asimila a la letra siguiente y deja un dagesh: יִתֵּן, «dará». Si ves un dagesh después del prefijo, sospecha una nun escondida. En los de primera yod, como יָשַׁב, «habitar», la yod desaparece y el prefijo toma un tsere: יֵשֵׁב. El verbo הָלַךְ, «ir», muy frecuente, se comporta igual: יֵלֵךְ.',
        'En los verbos huecos, la letra del medio es una vav o una yod que se vuelve vocal: קוּם, «levantarse»; יָקוּם, «se levantará»; קָם, «se levantó». El diccionario los cita con la vav: קוּם, שׁוּב, בּוֹא. En los de final he, como בָּנָה, «edificar», la he se vuelve vocal (יִבְנֶה) o desaparece en las formas acortadas: וַיִּבֶן, «y edificó». A este grupo pertenecen הָיָה, עָשָׂה y רָאָה, tres de los verbos más frecuentes. Por eso וַיְהִי, וַיַּעַשׂ y וַיַּרְא son tan cortos.',
        { h: 'Los que esperan a Jehová' },
        'Isaías 40:31 es un muestrario de verbos débiles. יַעֲלוּ, «subirán», es de עָלָה, de final he y con gutural. יָרוּצוּ, «correrán», es de רוּץ, hueco. יִיגָעוּ y יִיעָפוּ, «se cansarán» y «se fatigarán», son de primera yod. יֵלְכוּ, «caminarán», es de הָלַךְ. Y la primera palabra, וְקוֹיֵ, es un participio plural en estado constructo de קָוָה, también de final he: «los que esperan a Jehová».',
        'יַחֲלִיפוּ, que la Reina-Valera traduce «tendrán nuevas fuerzas», es un hifil de חָלַף, «cambiar, renovar»: literalmente, «cambiarán fuerza», recibirán fuerza nueva en lugar de la que se agotó. El orden de los verbos es sorprendente: volar, correr, caminar. Del vuelo más alto al paso más humilde, la fuerza de Dios alcanza para todo, incluso para seguir caminando cuando ya no hay emoción.',
        { ejercicio: {
          pregunta: 'En יִתֵּן, yitén, «dará», solo se ven dos letras de la raíz (ת y נ). ¿Cuál es la raíz?',
          opciones: [
            { t: 'יתן', ok: false, por_que: 'La yod es el prefijo del imperfecto («él»), no parte de la raíz.' },
            { t: 'נתן', ok: true, por_que: 'El dagesh en la tav delata una nun asimilada: נָתַן, «dar». Es un verbo de primera nun.' },
            { t: 'תנה', ok: false, por_que: 'Sin el prefijo quedan ת y נ, y el dagesh indica que antes de la tav había otra letra.' }
          ],
          explicacion: 'Dagesh después del prefijo: busca una nun asimilada. יִתֵּן viene de נָתַן.'
        } }
      ],
      pensar: '«Caminarán, y no se fatigarán» (Is 40:31). A veces lo más difícil no es volar ni correr, sino seguir caminando. ¿En qué área de tu vida necesitas fuerzas para perseverar?'
    },
    {
      id: 'analizar', n: 'Cómo analizar un verbo', ref: '1 Samuel 3:10',
      visual: [
        { tipo: 'hebreo', titulo: '1 Samuel 3:10', ref: '1 Samuel 3:10', he: 'וַיָּבֹא יְהוָה וַיִּתְיַצַּב וַיִּקְרָא כְפַעַם־בְּפַעַם שְׁמוּאֵל שְׁמוּאֵל וַיֹּאמֶר שְׁמוּאֵל דַּבֵּר כִּי שֹׁמֵעַ עַבְדֶּךָ׃', tr: 'Vayavó Adonái vayityatsev vayikrá jefáam-befáam: Shmuel, Shmuel! Vayómer Shmuel: dabér, ki shoméa avdeja.',
          palabras: P(['וַיָּבֹא', 'יְהוָה', 'וַיִּתְיַצַּב', 'וַיִּקְרָא', 'כְפַעַם־בְּפַעַם', 'שְׁמוּאֵל', 'שְׁמוּאֵל', 'וַיֹּאמֶר', 'שְׁמוּאֵל', 'דַּבֵּר', 'כִּי', 'שֹׁמֵעַ', 'עַבְדֶּךָ'], [['vayavó', 'y vino'], ['Adonái', 'Jehová'], ['vayityatsev', 'y se paró'], ['vayikrá', 'y llamó'], ['jefáam-befáam', 'como las otras veces'], ['Shmuel', 'Samuel'], ['Shmuel', 'Samuel'], ['vayómer', 'y dijo'], ['Shmuel', 'Samuel'], ['dabér', 'habla'], ['ki', 'porque'], ['shoméa', 'oye'], ['avdeja', 'tu siervo']]),
          rv: 'Y vino Jehová y se paró, y llamó como las otras veces: ¡Samuel, Samuel! Entonces Samuel dijo: Habla, porque tu siervo oye.' },
        { tipo: 'tabla', titulo: 'Método', tabla: {
          titulo: 'Seis preguntas para analizar un verbo',
          cab: ['Pregunta', 'Qué buscar'],
          filas: [
            ['1. ¿Hay prefijos de una letra?', 'ו (y la vav consecutiva), ה interrogativa, ב, ל, כ, מ'],
            ['2. ¿Hay prefijo o terminación de persona?', 'א, ת, י, נ: imperfecto. ־תִּי, ־תָּ, ־ָה, ־וּ, ־נוּ: perfecto'],
            ['3. ¿Es participio o infinitivo?', 'o–e (שֹׁמֵר) o מְ: participio. לְ + forma breve: infinitivo'],
            ['4. ¿Qué binyán?', 'נִ: nifal. Dagesh en la 2.ª: piel o pual. הִ, יַ־ִי: hifil. הִתְ: hitpael'],
            ['5. ¿Cuál es la raíz?', 'Tres letras. Si faltan, piensa en nun, yod, vav o he'],
            ['6. ¿Hay sufijo de objeto?', '־נִי me, ־ְךָ te, ־הוּ o ־וֹ lo, ־ָהּ la, ־נוּ nos, ־ֵם los'],
          ],
          nota: 'Después de analizar, busca la raíz en el vocabulario o en un diccionario.'
        } }
      ],
      texto: [
        'Ya tienes todas las piezas. Esta estación las reúne en un método de seis preguntas para analizar cualquier verbo que encuentres. Con práctica, las harás en segundos y casi sin pensar.',
        { h: 'Un ejemplo: וַיִּתְיַצַּב' },
        'Toma la tercera palabra de 1 Samuel 3:10, וַיִּתְיַצַּב. Primera pregunta: ¿hay prefijos? Sí, וַ con dagesh en la yod siguiente: es una vav consecutiva, así que el verbo se traducirá en pasado. Segunda: ¿hay prefijo de persona? Sí, יִ: imperfecto de tercera persona masculina singular, «él». Cuarta: ¿qué binyán? Después de la yod viene תְ, y la segunda letra de la raíz lleva dagesh: es un hitpael. Quinta: ¿cuál es la raíz? Quitando todo lo anterior quedan י־צ־ב, «estar de pie, presentarse». Sexta: no hay sufijo. Resultado: «y él se presentó», «y se paró». Es la forma reflexiva de «estar de pie»: Jehová vino y se puso de pie allí.',
        { h: 'Habla, que tu siervo oye' },
        'Analiza ahora la respuesta de Samuel. דַּבֵּר, dabér, tiene dagesh en la bet, la segunda letra de la raíz דבר, y no tiene prefijos ni terminaciones: es un imperativo piel, «¡habla!». שֹׁמֵעַ, shoméa, tiene el patrón o–e de la raíz שׁמע: es un participio activo del qal, «oyente, el que oye». El pataj debajo de la áyin final es un pataj furtivo, que se pronuncia antes de la letra: shoméa. Y עַבְדֶּךָ es el sustantivo עֶבֶד, «siervo», con el sufijo ־ְךָ, «tu».',
        'La oración de Samuel tiene apenas tres palabras en hebreo. El participio presenta su escucha como una actitud continua: «tu siervo está oyendo». Es la oración de alguien que aprendió a reconocer la voz de Dios.',
        { h: 'Cuando no sale' },
        'No te desanimes si al principio un verbo se resiste. Algunas formas combinan dos debilidades y desconciertan incluso a quienes llevan años estudiando. Para eso existen los interlineales, los léxicos analíticos y las herramientas que indican la forma de cada palabra. El objetivo no es prescindir de ellos, sino entender lo que te dicen.',
        { ejercicio: {
          pregunta: '¿Qué es וַיֹּאמֶר, vayómer?',
          opciones: [
            { t: 'Perfecto qal de אָמַר con vav: «y dirá».', ok: false, por_que: 'No tiene terminación de perfecto, y la vav con pataj y dagesh indica wayyiqtol.' },
            { t: 'Imperfecto qal de אָמַר con vav consecutiva, tercera persona masculina singular: «y dijo».', ok: true, por_que: 'וַ + dagesh en la yod, prefijo י de «él», raíz אמר (la álef queda muda). Es la forma más frecuente de la narración.' },
            { t: 'Participio de אָמַר: «el que dice».', ok: false, por_que: 'El participio sería אֹמֵר, sin vav consecutiva ni prefijo.' }
          ],
          explicacion: 'וַיִּ־ + raíz = wayyiqtol de tercera persona: «y dijo».'
        } },
        { ejercicio: {
          pregunta: '¿Qué es שָׁמַרְתִּי, shamárti?',
          opciones: [
            { t: 'Perfecto qal, primera persona singular: «guardé».', ok: true, por_que: 'La terminación ־תִּי es «yo» en el perfecto. Raíz שׁמר, sin prefijos ni dagesh: qal.' },
            { t: 'Imperfecto qal: «guardaré».', ok: false, por_que: 'El imperfecto tendría prefijo: אֶשְׁמֹר.' },
            { t: 'Sustantivo con sufijo: «mi guardia».', ok: false, por_que: 'El sufijo ־ִי es «mi», pero aquí la terminación es ־תִּי, con tav: es la persona del perfecto.' }
          ],
          explicacion: '־תִּי al final = perfecto de primera persona.'
        } }
      ],
      pensar: '«Habla, porque tu siervo oye» (1 S 3:10). ¿Cuándo fue la última vez que te acercaste a la Biblia con esa oración, dispuesto a escuchar y a obedecer?'
    }
  ];

  window.__GRAM.verbo = verbo;
})();
/* Vocabulario y gramática básica del hebreo bíblico · ruta IV. Palabras clave de la fe (ver encabezado de parte1.js)
   Las cifras de traducción se calcularon cruzando cada aparición en el Códice de Leningrado (OSHB, por número
   de Strong) con su versículo en la RV 1960 del sitio y buscando la palabra española (06-11-2026). Son aproximadas:
   un versículo puede tener la palabra hebrea y no la española, o al revés. */
(() => {
  const P = window.__GRAM.P;

  const palabras = [
    {
      id: 'errores', n: 'Estudiar una palabra sin caer en errores', ref: '2 Timoteo 2:15; Nehemías 8:8',
      visual: [
        { tipo: 'tabla', titulo: 'Errores', tabla: {
          titulo: 'Cinco errores comunes al estudiar una palabra',
          cab: ['Error', 'Ejemplo', 'Por qué falla'],
          filas: [
            ['La raíz manda', '«Como Jerusalén contiene shalom, cada vez que se nombra Jerusalén se habla de paz»', 'El sentido lo da el uso, no el origen. Además, el origen del nombre se discute'],
            ['Todos los sentidos a la vez', '«En Génesis 1:2, רוּחַ es a la vez viento, aliento y Espíritu»', 'Una palabra tiene un sentido en cada lugar. El contexto lo elige'],
            ['El sentido de otra época', '«El Seol es el infierno de fuego»', 'Se carga una palabra con lo que se enseñó después, sin mirar cómo la usaba el autor'],
            ['Dibujos en las letras', '«אָב, padre, es buey + casa: la fuerza de la casa»', 'Las letras ya no eran dibujos cuando se escribió la Biblia. Es una fantasía moderna'],
            ['El hebreo secreto', '«En el original dice algo que ninguna traducción muestra»', 'Si fuera cierto, alguna buena traducción lo mostraría. Pide la fuente'],
          ],
          nota: 'Una regla de oro: nunca construyas una doctrina sobre una sola palabra.'
        } },
        { tipo: 'tabla', titulo: 'Pasos', tabla: {
          titulo: 'Cómo hacer un buen estudio de palabra',
          cab: ['Paso', 'Qué hacer'],
          filas: [
            ['1', 'Identifica la palabra hebrea y su número de Strong (el vocabulario o un interlineal te lo dan)'],
            ['2', 'Lee el versículo completo y su contexto: el párrafo, el capítulo, el libro'],
            ['3', 'Busca la palabra en una concordancia y lee otros pasajes donde aparece, empezando por el mismo libro'],
            ['4', 'Mira cómo la traducen la Reina-Valera y otras versiones en esos lugares'],
            ['5', 'Resume el sentido que tiene en tu pasaje y compáralo con un buen comentario'],
          ],
          nota: 'Las estaciones siguientes aplican estos pasos a nueve palabras clave.'
        } }
      ],
      texto: [
        'Esta ruta estudia diez palabras hebreas que están en el centro de la fe bíblica: misericordia, paz, pacto, ley, espíritu y alma, santo, justicia, fe y redención. Antes de empezar conviene una advertencia, porque los estudios de palabras son a la vez una de las herramientas más útiles y una de las más mal usadas en la predicación.',
        { h: 'Por qué hace falta cuidado' },
        'Cuando alguien dice desde el púlpito «en el hebreo, esta palabra significa…», la congregación escucha con atención, porque suena a conocimiento profundo. Pero muchas de esas afirmaciones son errores. La tabla del panel resume los cinco más comunes. El primero es creer que la raíz o el origen de una palabra deciden su sentido. Ya lo advertimos en la ruta I: las palabras significan lo que sus hablantes quieren decir con ellas, no lo que significaban sus partes hace siglos. El segundo es cargar en un versículo todos los sentidos posibles de una palabra, como si el autor hubiera querido decirlos todos a la vez.',
        'El tercero es leer una palabra con el sentido que tomó en una época posterior. El cuarto, muy difundido en internet, es la idea de que cada letra hebrea es un dibujo con un significado escondido: que la álef es un buey y significa «fuerza», y que por eso אָב, «padre», sería «la fuerza de la casa». Las letras hebreas nacieron, es cierto, de dibujos muy antiguos, pero cuando se escribió la Biblia hacía siglos que eran solo letras, y ningún autor bíblico las usó así. El quinto es apelar a un «hebreo original» que dice algo que ninguna traducción seria muestra.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } },
        { h: 'Un buen estudio' },
        'Un buen estudio de palabra sigue los pasos de la segunda tabla. Empieza por el texto y su contexto, recorre los otros lugares donde aparece la palabra, mira cómo la tradujeron quienes sabían hebreo y llega a una conclusión prudente. En las estaciones de esta ruta verás, para cada palabra, cuántas veces la Reina-Valera la tradujo de una u otra manera. Esa variedad no es un defecto de la traducción: muestra que una palabra hebrea tiene un abanico de sentidos, y que el traductor eligió en cada lugar el que pedía el contexto.',
        { ejercicio: {
          pregunta: 'Alguien enseña que אָב, «padre», significa «la fuerza de la casa», porque la álef era un dibujo de buey y la bet, de una casa. ¿Qué responderías?',
          opciones: [
            { t: 'Que es correcto: el hebreo esconde mensajes en los dibujos de sus letras.', ok: false, por_que: 'Cuando se escribió la Biblia, las letras ya no se leían como dibujos. Ningún autor bíblico las usó así.' },
            { t: 'Que el sentido de אָב se aprende de su uso en la Biblia, no de supuestos dibujos en sus letras.', ok: true, por_que: 'El sentido de una palabra lo da su uso. La interpretación por dibujos es una idea moderna sin fundamento en el texto.' },
            { t: 'Que en realidad significa «la casa del buey».', ok: false, por_que: 'El problema no es qué dibujo se elige, sino el método mismo de buscar dibujos en las letras.' }
          ],
          explicacion: 'Las palabras se entienden por su uso en el contexto, no por la forma antigua de sus letras.'
        } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado… que usa bien la palabra de verdad» (2 Ti 2:15). ¿Has repetido alguna vez una explicación de una palabra hebrea o griega sin comprobarla? ¿Qué harás la próxima vez?'
    },
    {
      id: 'jesed', n: 'Misericordia: חֶסֶד', ref: 'Lamentaciones 3:22; Salmo 136:1; Éxodo 34:6',
      visual: [
        { tipo: 'hebreo', titulo: 'Lamentaciones 3:22', ref: 'Lamentaciones 3:22', he: 'חַסְדֵי יְהוָה כִּי לֹא־תָמְנוּ כִּי לֹא־כָלוּ רַחֲמָיו׃', tr: 'Jasdé Adonái ki lo-tamnu, ki lo-jalu rajamav.',
          palabras: P(['חַסְדֵי', 'יְהוָה', 'כִּי', 'לֹא־תָמְנוּ', 'כִּי', 'לֹא־כָלוּ', 'רַחֲמָיו'], [['jasdé', 'las misericordias de'], ['Adonái', 'Jehová'], ['ki', 'que'], ['lo-tamnu', 'no hemos sido consumidos'], ['ki', 'porque'], ['lo-jalu', 'no se acabaron'], ['rajamav', 'sus compasiones']]),
          rv: 'Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias.' },
        { tipo: 'tabla', titulo: 'Traducciones', tabla: {
          titulo: 'Cómo traduce la Reina-Valera חֶסֶד',
          cab: ['Traducción', 'Veces (aprox.)'],
          filas: [
            ['misericordia, misericordias', '227'],
            ['bondad', '3'],
            ['gracia', '3'],
            ['amor', '2'],
            ['favor, piedad', '2'],
            ['otras', '14'],
          ],
          nota: 'De 251 apariciones. Palabras vecinas: רַחֲמִים, rajamim, «compasiones»; אֱמֶת, emet, «verdad, fidelidad»; חֵן, jen, «gracia».'
        } }
      ],
      texto: [
        'חֶסֶד, jésed, aparece unas 250 veces en el Antiguo Testamento, más de la mitad en los Salmos. La Reina-Valera la traduce casi siempre «misericordia», pero ninguna palabra española la abarca del todo. Otras versiones dicen «amor», «amor leal», «bondad» o «gran amor».',
        { h: 'Amor que cumple' },
        'Al recorrer sus usos se ve un rasgo constante: חֶסֶד es el amor que se mantiene fiel a una relación, sobre todo a un pacto, y que hace más de lo que se debe. Booz alaba la חֶסֶד de Rut, que se quedó con su suegra cuando podía haberla dejado (Rt 3:10). David muestra חֶסֶד a Mefi-boset por el pacto que había hecho con Jonatán (2 S 9:1). Y Dios, al revelar su nombre a Moisés, se presenta como וְרַב־חֶסֶד וֶאֱמֶת, «grande en misericordia y verdad» (Éx 34:6): un Dios cuyo amor no se cansa y cuya palabra no falla.',
        'Por eso חֶסֶד aparece muchas veces junto a אֱמֶת, «verdad, fidelidad», y junto a רַחֲמִים, rajamim, «compasiones», una palabra de la misma familia que רֶחֶם, réjem, «seno materno». Son las dos palabras de Lamentaciones 3:22.',
        { h: 'Para siempre es su misericordia' },
        'El Salmo 136 repite 26 veces el mismo estribillo: כִּי לְעוֹלָם חַסְדּוֹ, ki leolam jasdó, «porque para siempre es su misericordia». חַסְדּוֹ es חֶסֶד con el sufijo «su». Después de cada obra de Dios, de la creación al éxodo y a la conquista, la congregación respondía con esa frase. Era una lección de historia convertida en adoración.',
        { h: 'En medio de las ruinas' },
        'Lamentaciones 3:22 se escribió después de la destrucción de Jerusalén. El poeta ha visto el templo quemado y el pueblo llevado al exilio. Y en el centro del libro dice: חַסְדֵי יְהוָה כִּי לֹא־תָמְנוּ, «las misericordias de Jehová (son la razón por la) que no hemos sido consumidos». חַסְדֵי es el plural constructo, «las misericordias de». El juicio fue real, pero la חֶסֶד de Dios fue mayor.',
        'Cuando Jesús citó a Oseas, «Misericordia quiero, y no sacrificio» (Mt 9:13; Os 6:6), la palabra hebrea detrás de «misericordia» era חֶסֶד: Dios espera de su pueblo el mismo amor fiel que él le muestra.',
        { ir: { t: 'Ver «Misericordioso, fiel y sabio» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#atributos/8' } },
        { ejercicio: {
          pregunta: '¿Qué rasgo de חֶסֶד aparece en casi todos sus usos?',
          opciones: [
            { t: 'Es un sentimiento pasajero de lástima.', ok: false, por_que: 'חֶסֶד no es un sentimiento momentáneo: es una conducta fiel que se mantiene en el tiempo.' },
            { t: 'Es amor fiel a una relación o a un pacto, que hace más de lo que se debe.', ok: true, por_que: 'Así aparece en Rut, en David con Mefi-boset y en la revelación de Dios a Moisés.' },
            { t: 'Es el perdón que Dios da solo en el Nuevo Testamento.', ok: false, por_que: 'חֶסֶד es una palabra del Antiguo Testamento, y describe a Dios desde Éxodo.' }
          ],
          explicacion: 'חֶסֶד es amor leal, ligado al pacto y generoso.'
        } }
      ],
      pensar: '«Nuevas son cada mañana; grande es tu fidelidad» (Lm 3:23). ¿Qué misericordia de Dios puedes reconocer hoy, aunque estés pasando por un tiempo de ruinas?'
    },
    {
      id: 'shalom', n: 'Paz: שָׁלוֹם', ref: 'Isaías 26:3; Números 6:26',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 26:3', ref: 'Isaías 26:3', he: 'יֵצֶר סָמוּךְ תִּצֹּר שָׁלוֹם שָׁלוֹם כִּי בְךָ בָּטוּחַ׃', tr: 'Yetser samuj titsor shalom shalom, ki veja batúaj.',
          palabras: P(['יֵצֶר', 'סָמוּךְ', 'תִּצֹּר', 'שָׁלוֹם', 'שָׁלוֹם', 'כִּי', 'בְךָ', 'בָּטוּחַ'], [['yetser', 'el pensamiento'], ['samuj', 'firme (apoyado)'], ['titsor', 'guardarás'], ['shalom', 'paz'], ['shalom', 'paz'], ['ki', 'porque'], ['veja', 'en ti'], ['batúaj', 'confía']]),
          rv: 'Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.' },
        { tipo: 'tabla', titulo: 'Traducciones', tabla: {
          titulo: 'Cómo traduce la Reina-Valera שָׁלוֹם',
          cab: ['Traducción', 'Veces (aprox.)', 'Ejemplo'],
          filas: [
            ['paz', '190', '«y ponga en ti paz» (Nm 6:26)'],
            ['bien, estar bien', '18', '«¿Vuestro padre… lo pasa bien?» (Gn 43:27)'],
            ['salud', '8', 'el bienestar de una persona'],
            ['otras', '21', 'prosperidad, a salvo, amigos'],
          ],
          nota: 'De 237 apariciones. La raíz שׁלם también da שָׁלֵם, «completo, entero», y שִׁלֵּם, «pagar, restituir».'
        } }
      ],
      texto: [
        'שָׁלוֹם, shalom, es quizás la palabra hebrea más conocida en el mundo. Todavía hoy es el saludo de Israel. La Reina-Valera la traduce «paz» en la gran mayoría de los casos, pero su sentido es más amplio que la ausencia de guerra.',
        { h: 'Estar entero' },
        'En sus usos, שָׁלוֹם describe la situación de quien está bien en todos los sentidos: sano, a salvo, en armonía con los demás y con Dios. Cuando José pregunta a sus hermanos por su padre, dice literalmente «¿Hay שָׁלוֹם a vuestro padre?», y la Reina-Valera traduce «¿lo pasa bien?» (Gn 43:27). La misma raíz forma שָׁלֵם, «completo, entero», y el verbo שִׁלֵּם, «restituir, pagar» lo que falta. La palabra apunta a algo completo, sin nada roto ni pendiente.',
        'Por eso la bendición sacerdotal termina pidiendo שָׁלוֹם como resumen de todo lo anterior: «Jehová alce sobre ti su rostro, y ponga en ti paz» (Nm 6:26). Y por eso el Mesías es שַׂר־שָׁלוֹם, «Príncipe de paz» (Is 9:6): el que trae ese bienestar completo.',
        { h: 'Paz, paz' },
        'En Isaías 26:3, la Reina-Valera dice «Tú guardarás en completa paz». El hebreo dice שָׁלוֹם שָׁלוֹם, «paz, paz». Es el recurso de la repetición que viste en la ruta II, el mismo de «santo, santo, santo»: la palabra repetida expresa plenitud. Los traductores lo dijeron en español con «completa paz».',
        'El versículo dice también a quién se le da esa paz. יֵצֶר סָמוּךְ es «el pensamiento apoyado», la mente que se recarga en Dios. Y la razón es כִּי בְךָ בָּטוּחַ, «porque en ti confía». La paz completa no depende de que las circunstancias estén resueltas: depende de dónde se apoya el pensamiento.',
        { h: 'La paz que costó' },
        'Isaías vuelve a usar la palabra en el capítulo del Siervo sufriente: מוּסַר שְׁלוֹמֵנוּ עָלָיו, «el castigo de nuestra paz fue sobre él» (Is 53:5). La paz con Dios, la reconciliación completa, tuvo un precio, y lo pagó otro. Lo estudiarás en el taller.',
        { ejercicio: {
          pregunta: '¿Por qué la Reina-Valera traduce שָׁלוֹם שָׁלוֹם como «completa paz»?',
          opciones: [
            { t: 'Porque el copista escribió la palabra dos veces por error.', ok: false, por_que: 'No es un error: la repetición es un recurso hebreo intencional.' },
            { t: 'Porque en hebreo la repetición expresa plenitud, como «santo, santo, santo».', ok: true, por_que: 'El hebreo no tiene superlativo; repite la palabra. El español lo dice con «completa».' },
            { t: 'Porque son dos clases de paz distintas: con Dios y con los hombres.', ok: false, por_que: 'El texto no distingue dos paces. La repetición intensifica una sola idea.' }
          ],
          explicacion: 'La repetición hebrea intensifica: «paz, paz» es «paz completa».'
        } }
      ],
      pensar: '«Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera» (Is 26:3). ¿En qué se está apoyando hoy tu pensamiento?'
    },
    {
      id: 'berit', n: 'Pacto: בְּרִית', ref: 'Jeremías 31:31; Génesis 15:18',
      visual: [
        { tipo: 'hebreo', titulo: 'Jeremías 31:31', ref: 'Jeremías 31:31', he: 'הִנֵּה יָמִים בָּאִים נְאֻם־יְהוָה וְכָרַתִּי אֶת־בֵּית יִשְׂרָאֵל וְאֶת־בֵּית יְהוּדָה בְּרִית חֲדָשָׁה׃', tr: 'Hiné yamim baim neum-Adonái, vejarati et-bet Yisrael veet-bet Yehudá berit jadashá.',
          palabras: P(['הִנֵּה', 'יָמִים', 'בָּאִים', 'נְאֻם־יְהוָה', 'וְכָרַתִּי', 'אֶת־בֵּית', 'יִשְׂרָאֵל', 'וְאֶת־בֵּית', 'יְהוּדָה', 'בְּרִית', 'חֲדָשָׁה'], [['hiné', 'he aquí'], ['yamim', 'días'], ['baim', 'vienen'], ['neum-Adonái', 'dice Jehová'], ['vejarati', 'y cortaré (haré)'], ['et-bet', 'con la casa de'], ['Yisrael', 'Israel'], ['veet-bet', 'y con la casa de'], ['Yehudá', 'Judá'], ['berit', 'un pacto'], ['jadashá', 'nuevo']]),
          rv: 'He aquí que vienen días, dice Jehová, en los cuales haré nuevo pacto con la casa de Israel y con la casa de Judá.' },
        { tipo: 'tabla', titulo: 'Expresiones', tabla: {
          titulo: 'El pacto en el hebreo',
          cab: ['Expresión', 'Se lee', 'Literal', 'Se traduce'],
          filas: [
            ['כָּרַת בְּרִית', 'karat berit', 'cortar un pacto', 'hacer un pacto (Gn 15:18)'],
            ['הֵקִים בְּרִית', 'hekim berit', 'levantar un pacto', 'establecer un pacto (Gn 6:18)'],
            ['זָכַר בְּרִית', 'zajar berit', 'recordar un pacto', 'acordarse del pacto (Éx 2:24)'],
            ['שָׁמַר בְּרִית', 'shamar berit', 'guardar un pacto', 'guardar el pacto (Éx 19:5)'],
            ['אֲרוֹן הַבְּרִית', 'arón habrit', 'el arca del pacto', 'el arca del pacto (Jos 3:6)'],
          ],
          nota: 'La Reina-Valera traduce בְּרִית «pacto» unas 265 veces y «alianza» unas 15, de 284.'
        } }
      ],
      texto: [
        'בְּרִית, berit, «pacto», es una de las palabras que organizan toda la Biblia. Dios hace pacto con Noé, con Abraham, con Israel en el Sinaí, con David, y promete un pacto nuevo. Un pacto es un compromiso solemne que crea una relación con obligaciones y promesas, garantizado por un juramento.',
        { h: 'Cortar un pacto' },
        'El hebreo no dice «hacer un pacto», sino כָּרַת בְּרִית, karat berit, «cortar un pacto». La expresión recuerda la ceremonia en que se partían animales por la mitad y las partes pasaban entre los pedazos, como diciendo «que me pase lo mismo si no cumplo». En Génesis 15, Dios mismo, como una antorcha de fuego, pasó entre los animales partidos, y el texto concluye: «En aquel día hizo Jehová un pacto con Abram» (Gn 15:18), y el verbo es כָּרַת. Solo Dios pasó: la promesa dependía de él.',
        { ir: { t: 'Ver «Abraham: la ceremonia de Génesis 15» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/4' } },
        'Los otros verbos de la tabla muestran que el pacto se establece, se recuerda y se guarda. Cuando Israel sufría en Egipto, Dios «se acordó de su pacto con Abraham» (Éx 2:24), וַיִּזְכֹּר en hebreo. La palabra שָׁמַר, el verbo modelo de la ruta III, se usa también para «guardar el pacto».',
        { h: 'Un pacto nuevo' },
        'Jeremías 31:31 usa casi todo lo que aprendiste. הִנֵּה יָמִים בָּאִים: «he aquí, días que vienen», con el participio plural בָּאִים. וְכָרַתִּי es un perfecto con vav consecutiva, weqatal, que mira al futuro: «y cortaré». אֶת aquí es la preposición «con», no la marca del objeto. Y בְּרִית חֲדָשָׁה es «un pacto nuevo», con el adjetivo femenino después del sustantivo femenino, sin artículo.',
        'La promesa está dirigida a «la casa de Israel y la casa de Judá». Jesús anunció su cumplimiento en la última cena: «Esta copa es el nuevo pacto en mi sangre» (Lc 22:20), y la carta a los Hebreos cita el pasaje completo (He 8:8-12). Por la fe en Cristo, los creyentes de todas las naciones participan de sus bendiciones: el perdón de los pecados y la ley escrita en el corazón por el Espíritu. Y Pablo espera todavía el día en que Israel como pueblo reciba lo prometido (Ro 11:26-27).',
        { ir: { t: 'Ver «El nuevo pacto prometido» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/10' } },
        { ejercicio: {
          pregunta: '¿Por qué el hebreo dice «cortar un pacto»?',
          opciones: [
            { t: 'Porque un pacto termina o «corta» una relación anterior.', ok: false, por_que: 'El pacto crea una relación; no la corta.' },
            { t: 'Por la ceremonia en que se partían animales y las partes pasaban entre ellos (Gn 15; Jer 34:18).', ok: true, por_que: 'El gesto expresaba un juramento solemne: lo que se hizo con los animales caería sobre quien no cumpliera.' },
            { t: 'Porque los pactos se escribían cortando piedra.', ok: false, por_que: 'Algunos pactos se escribieron, pero la expresión viene del rito con los animales.' }
          ],
          explicacion: 'כָּרַת בְּרִית recuerda el rito de los animales partidos: un juramento con la vida.'
        } }
      ],
      pensar: 'En Génesis 15 solo Dios pasó entre los animales partidos: él se comprometió a cumplir. ¿Qué te dice eso sobre la seguridad de las promesas que Dios te ha hecho en Cristo?'
    },
    {
      id: 'tora', n: 'Ley e instrucción: תּוֹרָה', ref: 'Salmo 1:2; Josué 1:8',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 1:2', ref: 'Salmo 1:2', he: 'כִּי אִם בְּתוֹרַת יְהוָה חֶפְצוֹ וּבְתוֹרָתוֹ יֶהְגֶּה יוֹמָם וָלָיְלָה׃', tr: 'Ki im betorat Adonái jeftsó, uvetorató yehgué yomam valáyla.',
          palabras: P(['כִּי', 'אִם', 'בְּתוֹרַת', 'יְהוָה', 'חֶפְצוֹ', 'וּבְתוֹרָתוֹ', 'יֶהְגֶּה', 'יוֹמָם', 'וָלָיְלָה'], [['ki', 'sino'], ['im', 'que'], ['betorat', 'en la ley de'], ['Adonái', 'Jehová'], ['jeftsó', 'su delicia'], ['uvetorató', 'y en su ley'], ['yehgué', 'medita'], ['yomam', 'de día'], ['valáyla', 'y de noche']]),
          rv: 'Sino que en la ley de Jehová está su delicia, Y en su ley medita de día y de noche.' },
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Qué es «la ley» en el Antiguo Testamento',
          cab: ['Uso', 'Ejemplo'],
          filas: [
            ['La instrucción de un padre o una madre', '«No te olvides de mi ley» (Pr 3:1); «la dirección de tu madre» (Pr 1:8)'],
            ['Una instrucción concreta', '«Esta es la ley del holocausto» (Lv 6:9)'],
            ['La ley dada a Moisés', '«la ley de Moisés» (Jos 8:31)'],
            ['El libro de la ley', '«Nunca se apartará de tu boca este libro de la ley» (Jos 1:8)'],
            ['Toda la enseñanza de Dios', '«La ley de Jehová es perfecta» (Sal 19:7)'],
          ],
          nota: 'La Reina-Valera traduce תּוֹרָה «ley» en unas 218 de sus 222 apariciones.'
        } }
      ],
      texto: [
        'תּוֹרָה, torá, se traduce casi siempre «ley», y así debe ser: en muchos pasajes se refiere a los mandamientos que Dios dio a Israel por medio de Moisés. Pero sus usos muestran que la palabra es más amplia que nuestro «ley», que suena a código penal.',
        { h: 'Instrucción' },
        'En Proverbios, la תּוֹרָה es la enseñanza que un padre o una madre dan a su hijo: «Oye, hijo mío, la instrucción de tu padre, y no desprecies la dirección de tu madre» (Pr 1:8), donde «dirección» es תּוֹרַת. En Levítico es una instrucción concreta: «la ley del holocausto», es decir, las indicaciones para ofrecerlo (Lv 6:9). Y en los Salmos es toda la enseñanza que Dios ha revelado. Los judíos llaman Torá a los cinco libros de Moisés, y también, en sentido amplio, a toda la enseñanza de Dios.',
        'La palabra suele relacionarse con el verbo יָרָה, que en hifil significa «enseñar». Esa relación ayuda a recordarla, pero, como viste en la estación 1, el sentido de תּוֹרָה lo dan sus usos, y sus usos confirman que es, ante todo, instrucción de Dios para vivir.',
        { h: 'Medita de día y de noche' },
        'El Salmo 1:2 describe al hombre bienaventurado: «en la ley de Jehová está su delicia, y en su ley medita de día y de noche». En hebreo, la primera mitad es una oración nominal sin verbo: בְּתוֹרַת יְהוָה חֶפְצוֹ, «en la ley de Jehová, su delicia». Y el verbo de la segunda mitad, יֶהְגֶּה, yehgué, es un imperfecto de הָגָה, que se usa también para el gruñido del león o el arrullo de la paloma (Is 31:4; 38:14). «Meditar», en la Biblia, es repetir la Palabra en voz baja, una y otra vez, hasta que se vuelve parte de uno. Es el mismo verbo de Josué 1:8.',
        { h: 'La ley y la gracia' },
        'El Antiguo Testamento nunca presenta la תּוֹרָה como un camino para ganar la salvación: fue dada a un pueblo ya rescatado de Egipto (Éx 20:2). Jesús no vino a abolirla, sino a cumplirla (Mt 5:17), y en el nuevo pacto Dios la escribe en el corazón (Jer 31:33). El creyente no está bajo la ley de Moisés como pacto, pero la sigue amando como Palabra de Dios que instruye.',
        { ir: { t: 'Ver «¿Qué pasa con el pacto del Sinaí?» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/4' } },
        { ejercicio: {
          pregunta: 'En Proverbios 1:8, ¿qué significa תּוֹרַת אִמֶּךָ, «la torá de tu madre»?',
          opciones: [
            { t: 'Las leyes de Moisés que tu madre conoce.', ok: false, por_que: 'En Proverbios la palabra se usa para la enseñanza de los padres, no para el código del Sinaí.' },
            { t: 'La enseñanza o instrucción que da tu madre.', ok: true, por_que: 'תּוֹרָה es, ante todo, instrucción. La Reina-Valera lo traduce «la dirección de tu madre».' },
            { t: 'Un castigo que impone tu madre.', ok: false, por_que: 'La palabra no tiene sentido de castigo. Es enseñanza.' }
          ],
          explicacion: 'תּוֹרָה es instrucción: de los padres, de los sacerdotes y, sobre todo, de Dios.'
        } }
      ],
      pensar: 'El bienaventurado medita en la ley de Jehová «de día y de noche», repitiéndola en voz baja (Sal 1:2). ¿Qué versículo podrías repetir hoy mientras caminas, trabajas o viajas?'
    },
    {
      id: 'ruaj-nefesh', n: 'Espíritu y alma: רוּחַ y נֶפֶשׁ', ref: 'Génesis 2:7; Ezequiel 37:9',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 2:7', ref: 'Génesis 2:7', he: 'וַיִּיצֶר יְהוָה אֱלֹהִים אֶת־הָאָדָם עָפָר מִן־הָאֲדָמָה וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה׃', tr: 'Vayitser Adonái Elohim et-haadam afar min-haadamá, vayipaj beapav nishmat jayim, vayehí haadam lenéfesh jayá.',
          palabras: P(['וַיִּיצֶר', 'יְהוָה', 'אֱלֹהִים', 'אֶת־הָאָדָם', 'עָפָר', 'מִן־הָאֲדָמָה', 'וַיִּפַּח', 'בְּאַפָּיו', 'נִשְׁמַת', 'חַיִּים', 'וַיְהִי', 'הָאָדָם', 'לְנֶפֶשׁ', 'חַיָּה'], [['vayitser', 'y formó'], ['Adonái', 'Jehová'], ['Elohim', 'Dios'], ['et-haadam', '(objeto) al hombre'], ['afar', 'polvo'], ['min-haadamá', 'de la tierra'], ['vayipaj', 'y sopló'], ['beapav', 'en su nariz'], ['nishmat', 'aliento de'], ['jayim', 'vida'], ['vayehí', 'y fue'], ['haadam', 'el hombre'], ['lenéfesh', 'un ser (alma)'], ['jayá', 'viviente']]),
          rv: 'Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente.' },
        { tipo: 'tabla', titulo: 'Traducciones', tabla: {
          titulo: 'Cómo traduce la Reina-Valera רוּחַ y נֶפֶשׁ',
          cab: ['Palabra', 'Traducción', 'Veces (aprox.)'],
          filas: [
            ['רוּחַ (378)', 'espíritu', '241'],
            ['', 'viento', '94'],
            ['', 'aliento, soplo, ánimo', '20'],
            ['נֶפֶשׁ (757)', 'alma', '377'],
            ['', 'vida', '169'],
            ['', 'persona', '86'],
            ['', 'ser (viviente), otras', '125'],
          ],
          nota: 'Con artículo y sin artículo, רוּחַ puede ser el viento, el aliento, el espíritu humano o el Espíritu de Dios. El contexto decide.'
        } }
      ],
      texto: [
        'Dos palabras hebreas describen la vida interior del ser humano: רוּחַ, rúaj, y נֶפֶשׁ, néfesh. La Reina-Valera las traduce muchas veces «espíritu» y «alma», pero cada una tiene un abanico de sentidos que conviene conocer.',
        { h: 'רוּחַ: viento, aliento, espíritu' },
        'רוּחַ es aire en movimiento. Según el contexto, es el viento que sopla, el aliento de una persona, el espíritu humano o el Espíritu de Dios. En Ezequiel 37, el profeta juega con esa amplitud: Dios le manda profetizar al רוּחַ, «al espíritu» o «al viento», que venga de los cuatro vientos (רוּחוֹת) y sople sobre los muertos, «y entró espíritu en ellos, y vivieron» (Ez 37:9-10). Una sola palabra une el viento, el aliento y el Espíritu que da vida.',
        'En Génesis 1:2, רוּחַ אֱלֹהִים, «el Espíritu de Dios», se movía sobre las aguas. Y en el Salmo 51:11, David ruega: «no quites de mí tu santo Espíritu», literalmente וְרוּחַ קָדְשְׁךָ, «el espíritu de tu santidad», una cadena constructa como las de la ruta II.',
        { ir: { t: 'Ver «El Espíritu en la creación» en El Espíritu Santo', a: '../../espiritu-santo/#at/1' } },
        { h: 'נֶפֶשׁ: el ser viviente' },
        'נֶפֶשׁ aparece más de 750 veces. En Génesis 2:7, Dios formó al hombre del polvo, sopló en su nariz aliento de vida, וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה, «y fue el hombre un ser viviente». La misma expresión, נֶפֶשׁ חַיָּה, se usa para los animales en Génesis 1:24, donde la Reina-Valera dice «seres vivientes». Por eso נֶפֶשׁ se traduce «alma», pero también «vida» y «persona»: muchas veces designa a la persona entera en cuanto ser vivo, con sus deseos y emociones. «Mi alma» es muchas veces, simplemente, «yo».',
        'Fíjate también en el juego de palabras del versículo: הָאָדָם, «el hombre», fue formado del polvo de הָאֲדָמָה, «la tierra». Su nombre recuerda su origen.',
        { posturas: {
          titulo: '¿Cuántas partes tiene el ser humano?',
          a: { n: 'Tres: espíritu, alma y cuerpo', t: 'Muchos maestros pentecostales y evangélicos distinguen tres dimensiones, apoyándose en textos como 1 Tesalonicenses 5:23 y Hebreos 4:12: el espíritu, que se relaciona con Dios; el alma, sede de la mente y las emociones, y el cuerpo.' },
          b: { n: 'Dos: lo material y lo inmaterial', t: 'Otros entienden que «alma» y «espíritu» son dos nombres para la misma parte inmaterial del ser humano, vista desde ángulos distintos, y que la Biblia los usa muchas veces como sinónimos (Lc 1:46-47).' },
          c: 'Ambas posturas afirman lo que enseña toda la Escritura: el ser humano no se reduce a su cuerpo, y su parte inmaterial sigue consciente después de la muerte (Ec 12:7; Mt 10:28; Fil 1:23). Algunos grupos, como los Testigos de Jehová y los adventistas, se apoyan en el sentido de נֶפֶשׁ como «ser viviente» para negar esa existencia consciente. Pero una sola palabra no decide una doctrina: la decide el conjunto de la Biblia.'
        } },
        { ejercicio: {
          pregunta: 'En Ezequiel 37:9-10, ¿por qué la Reina-Valera traduce רוּחַ unas veces «espíritu» y otras «vientos»?',
          opciones: [
            { t: 'Porque son palabras hebreas distintas.', ok: false, por_que: 'Es la misma palabra, רוּחַ, en singular y en plural.' },
            { t: 'Porque רוּחַ significa viento, aliento y espíritu, y el contexto de cada frase elige el sentido.', ok: true, por_que: 'El profeta aprovecha la amplitud de la palabra: el viento de los cuatro vientos se convierte en el aliento que da vida.' },
            { t: 'Porque en Ezequiel רוּחַ significa siempre «viento».', ok: false, por_que: 'El versículo 10 dice que «entró espíritu en ellos, y vivieron»: no es solo viento.' }
          ],
          explicacion: 'Una palabra puede tener varios sentidos; en cada lugar el contexto elige uno, y a veces el autor juega con ellos.'
        } }
      ],
      pensar: 'El ser humano es polvo con aliento de Dios (Gn 2:7). ¿Qué te recuerda tu origen del polvo, y qué te recuerda el aliento que Dios sopló en ti?'
    },
    {
      id: 'kadosh', n: 'Santo: קָדוֹשׁ', ref: 'Levítico 19:2; Éxodo 3:5',
      visual: [
        { tipo: 'hebreo', titulo: 'Levítico 19:2', ref: 'Levítico 19:2', he: 'דַּבֵּר אֶל־כָּל־עֲדַת בְּנֵי־יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם קְדֹשִׁים תִּהְיוּ כִּי קָדוֹשׁ אֲנִי יְהוָה אֱלֹהֵיכֶם׃', tr: 'Dabér el-kol-adat bené-Yisrael veamartá alehem: kedoshim tihyú, ki kadosh aní Adonái Elohejem.',
          palabras: P(['דַּבֵּר', 'אֶל־כָּל־עֲדַת', 'בְּנֵי־יִשְׂרָאֵל', 'וְאָמַרְתָּ', 'אֲלֵהֶם', 'קְדֹשִׁים', 'תִּהְיוּ', 'כִּי', 'קָדוֹשׁ', 'אֲנִי', 'יְהוָה', 'אֱלֹהֵיכֶם'], [['dabér', 'habla'], ['el-kol-adat', 'a toda la congregación de'], ['bené-Yisrael', 'los hijos de Israel'], ['veamartá', 'y dirás'], ['alehem', 'a ellos'], ['kedoshim', 'santos'], ['tihyú', 'seréis'], ['ki', 'porque'], ['kadosh', 'santo'], ['aní', 'yo (soy)'], ['Adonái', 'Jehová'], ['Elohejem', 'vuestro Dios']]),
          rv: 'Habla a toda la congregación de los hijos de Israel, y diles: Santos seréis, porque santo soy yo Jehová vuestro Dios.' },
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de קדשׁ',
          cab: ['Palabra', 'Se lee', 'Significa', 'Ejemplo'],
          filas: [
            ['קָדוֹשׁ', 'kadosh', 'santo (adjetivo)', '«Santo, santo, santo» (Is 6:3)'],
            ['קֹדֶשׁ', 'kódesh', 'santidad; lo santo', '«tierra santa es» (Éx 3:5)'],
            ['קִדֵּשׁ', 'kidesh', 'santificar, consagrar (piel)', '«y lo santificó» (Gn 2:3)'],
            ['מִקְדָּשׁ', 'mikdash', 'santuario', '«y harán un santuario para mí» (Éx 25:8)'],
            ['קֹדֶשׁ הַקֳּדָשִׁים', 'kódesh hakodashim', 'el lugar santísimo', '(Éx 26:33)'],
          ],
          nota: 'La palabra קֹדֶשׁ aparece unas 470 veces. La Reina-Valera la traduce «santo», «santa», «santuario», «santidad», «sagrado» o «consagrado».'
        } }
      ],
      texto: [
        'La raíz קדשׁ forma una de las familias de palabras más importantes de la Biblia: santo, santidad, santificar, santuario. Su idea central, según sus usos, es la de algo apartado para Dios, separado del uso común.',
        { h: 'Cosas, tiempos y lugares santos' },
        'En el Antiguo Testamento son santas muchas cosas que no tienen moral propia: el día de reposo, que Dios bendijo «y lo santificó» (Gn 2:3); los utensilios del tabernáculo; las vestiduras del sumo sacerdote; la tierra donde estaba Moisés ante la zarza: «el lugar en que tú estás, tierra santa es» (Éx 3:5), literalmente אַדְמַת־קֹדֶשׁ, «tierra de santidad». Son santas porque pertenecen a Dios y están reservadas para él.',
        { h: 'Dios, el Santo' },
        'Pero la fuente de toda santidad es Dios mismo. Isaías lo llama una y otra vez קְדוֹשׁ יִשְׂרָאֵל, «Santo de Israel» (Is 1:4), y los serafines lo proclaman con la triple repetición קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ (Is 6:3), la forma más intensa que tiene el hebreo de decir que Dios es absolutamente santo: distinto, puro, majestuoso, por encima de todo lo creado.',
        { ir: { t: 'Ver «Santo, santo, santo» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#atributos/6' } },
        { h: 'Seréis santos' },
        'Levítico 19:2 dice: קְדֹשִׁים תִּהְיוּ, «santos seréis», con el adjetivo plural delante del verbo para destacarlo, como viste en la ruta I. Y el fundamento es una oración nominal: כִּי קָדוֹשׁ אֲנִי, «porque santo (soy) yo». Lo sorprendente es lo que sigue en el capítulo: dejar las espigas para el pobre y el extranjero, no robar, no mentir, pagar el salario a tiempo, no maldecir al sordo, juzgar con justicia, «amarás a tu prójimo como a ti mismo» (Lv 19:9-18). La santidad bíblica no es solo una separación ritual: es una vida apartada para Dios que se nota en el trato con los demás.',
        'Pedro aplica el mismo mandato a la iglesia: «Sed santos, porque yo soy santo» (1 P 1:16). Y el Espíritu que Dios da a los creyentes se llama, precisamente, Espíritu Santo, el que produce esa santidad en la vida diaria.',
        { ejercicio: {
          pregunta: 'Según sus usos en el Antiguo Testamento, ¿qué idea central tiene la raíz קדשׁ?',
          opciones: [
            { t: 'Algo apartado para Dios, separado del uso común.', ok: true, por_que: 'Por eso pueden ser santos un día, un lugar o un utensilio: pertenecen a Dios. Y Dios es santo en grado absoluto.' },
            { t: 'Solamente una persona sin pecado.', ok: false, por_que: 'La palabra se aplica también a objetos y a tiempos, que no tienen moral propia.' },
            { t: 'Algo antiguo y tradicional.', ok: false, por_que: 'La antigüedad no hace santo a nada. Lo santo es lo que pertenece a Dios.' }
          ],
          explicacion: 'Lo santo es lo apartado para Dios. Dios es el Santo por excelencia, y llama a su pueblo a ser santo.'
        } }
      ],
      pensar: 'Levítico 19 une la santidad con dejar espigas para el pobre y pagar a tiempo al trabajador. ¿En qué trato concreto con otras personas necesitas que se note que perteneces a Dios?'
    },
    {
      id: 'tsedaka', n: 'Justicia: צְדָקָה', ref: 'Génesis 15:6; Romanos 4:3',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 15:6', ref: 'Génesis 15:6', he: 'וְהֶאֱמִן בַּיהוָה וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה׃', tr: 'Vehemín badonái, vayajshevéha lo tsedaká.',
          palabras: P(['וְהֶאֱמִן', 'בַּיהוָה', 'וַיַּחְשְׁבֶהָ', 'לּוֹ', 'צְדָקָה'], [['vehemín', 'y creyó'], ['badonái', 'en Jehová'], ['vayajshevéha', 'y se lo contó'], ['lo', 'a él'], ['tsedaká', 'por justicia']]),
          rv: 'Y creyó a Jehová, y le fue contado por justicia.' },
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de צדק',
          cab: ['Palabra', 'Se lee', 'Significa', 'Ejemplo'],
          filas: [
            ['צֶדֶק', 'tsédek', 'justicia, rectitud', '«Balanzas justas» (Lv 19:36)'],
            ['צְדָקָה', 'tsedaká', 'justicia; acto justo', '«le fue contado por justicia» (Gn 15:6)'],
            ['צַדִּיק', 'tsadik', 'justo', '«el justo por su fe vivirá» (Hab 2:4)'],
            ['הִצְדִּיק', 'hitsdik', 'justificar, declarar justo (hifil)', '«justificará mi siervo justo a muchos» (Is 53:11)'],
          ],
          nota: 'La Reina-Valera traduce צְדָקָה «justicia» en unas 149 de sus 159 apariciones.'
        } }
      ],
      texto: [
        'La familia de צדק, tsedek, nombra la justicia. Su idea básica, en sus usos, es la conformidad con una norma: lo que está como debe estar. Una balanza justa, מֹאזְנֵי צֶדֶק, es la que pesa lo que debe pesar (Lv 19:36). Un juez justo es el que juzga según el derecho. Un hombre justo, צַדִּיק, vive de acuerdo con la voluntad de Dios.',
        { h: 'Justicia que salva' },
        'Cuando se habla de Dios, su צְדָקָה es su fidelidad a lo que él es y a lo que prometió. Por eso, en los profetas y en los Salmos, la justicia de Dios aparece muchas veces junto a su salvación: «Haré que se acerque mi justicia; no se alejará, y mi salvación no se detendrá» (Is 46:13). La justicia de Dios no es solo su derecho a castigar: es también su compromiso de rescatar a los suyos.',
        { h: 'Le fue contado por justicia' },
        'Génesis 15:6 es uno de los versículos más importantes de la Biblia, y en hebreo tiene solo cinco palabras. וְהֶאֱמִן בַּיהוָה, «y creyó en Jehová»: הֶאֱמִן es un hifil de la raíz אמן, que estudiarás en la estación siguiente. וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה: «y se la contó a él por justicia». וַיַּחְשְׁבֶהָ es un wayyiqtol de חָשַׁב, «contar, considerar», con un sufijo femenino, ־ֶהָ, «la», que se refiere a la fe de Abram. Es lenguaje de contabilidad: Dios anotó la fe de Abram en la columna de la justicia.',
        'Abram todavía no estaba circuncidado ni había recibido la ley. Pablo lo usa como prueba de que Dios justifica al que cree, no al que obra para ganarlo: «Creyó Abraham a Dios, y le fue contado por justicia» (Ro 4:3; Gá 3:6). Y Isaías anuncia cómo será posible: «por su conocimiento justificará mi siervo justo a muchos, y llevará las iniquidades de ellos» (Is 53:11). «Justo» es צַדִּיק, y «justificará» es יַצְדִּיק, un hifil: hará justos, declarará justos.',
        { ir: { t: 'Ver «Justificados por la fe» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/5' } },
        { ejercicio: {
          pregunta: 'En Génesis 15:6, ¿qué le «contó» Dios a Abram por justicia?',
          opciones: [
            { t: 'Su obediencia a la ley de Moisés.', ok: false, por_que: 'La ley se dio siglos después de Abram.' },
            { t: 'Su fe: el sufijo femenino de וַיַּחְשְׁבֶהָ se refiere a que creyó en Jehová.', ok: true, por_que: 'El verbo de contar lleva un sufijo «la», que remite al acto de creer de la primera mitad del versículo.' },
            { t: 'Su circuncisión.', ok: false, por_que: 'La circuncisión llega en Génesis 17, después. Pablo destaca este orden en Romanos 4:10.' }
          ],
          explicacion: 'Dios contó la fe de Abram como justicia. Es la base bíblica de la justificación por la fe.'
        } }
      ],
      pensar: 'Dios anotó la fe de Abram en la columna de la justicia (Gn 15:6). ¿Confías en lo que Cristo hizo, o todavía intentas llenar esa columna con tus propias obras?'
    },
    {
      id: 'emuna', n: 'Creer y fidelidad: אָמַן y אֱמוּנָה', ref: 'Habacuc 2:4; Isaías 7:9',
      visual: [
        { tipo: 'hebreo', titulo: 'Habacuc 2:4', ref: 'Habacuc 2:4', he: 'הִנֵּה עֻפְּלָה לֹא־יָשְׁרָה נַפְשׁוֹ בּוֹ וְצַדִּיק בֶּאֱמוּנָתוֹ יִחְיֶה׃', tr: 'Hiné ufelá lo-yashrá nafshó bo, vetsadik beemunató yijyé.',
          palabras: P(['הִנֵּה', 'עֻפְּלָה', 'לֹא־יָשְׁרָה', 'נַפְשׁוֹ', 'בּוֹ', 'וְצַדִּיק', 'בֶּאֱמוּנָתוֹ', 'יִחְיֶה'], [['hiné', 'he aquí'], ['ufelá', 'se enorgullece'], ['lo-yashrá', 'no es recta'], ['nafshó', 'su alma'], ['bo', 'en él'], ['vetsadik', 'pero el justo'], ['beemunató', 'por su fe'], ['yijyé', 'vivirá']]),
          rv: 'He aquí que aquel cuya alma no es recta, se enorgullece; mas el justo por su fe vivirá.' },
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de אמן',
          cab: ['Palabra', 'Se lee', 'Significa', 'Ejemplo'],
          filas: [
            ['אָמֵן', 'amén', 'así es, así sea', '«Y todo el pueblo responderá y dirá: Amén» (Dt 27:15)'],
            ['נֶאֱמָן', 'neemán', 'fiel, firme (nifal)', '«el testimonio de Jehová es fiel» (Sal 19:7)'],
            ['הֶאֱמִין', 'heemín', 'creer, confiar (hifil)', '«y creyó a Jehová» (Gn 15:6)'],
            ['אֱמֶת', 'emet', 'verdad, fidelidad', '«grande en misericordia y verdad» (Éx 34:6)'],
            ['אֱמוּנָה', 'emuná', 'fidelidad, firmeza; fe', '«hubo en sus manos firmeza» (Éx 17:12)'],
          ],
          nota: 'La Reina-Valera traduce אֱמוּנָה «verdad» unas 24 veces y «fidelidad» unas 14, de 49. «Fe», solo en Habacuc 2:4.'
        } }
      ],
      texto: [
        'Cada vez que dices «amén», usas una palabra hebrea. אָמֵן viene de la raíz אמן, que expresa firmeza, estabilidad, algo en lo que uno puede apoyarse. Al decir «amén», el pueblo afirmaba: «esto es firme, así es».',
        { h: 'Una familia firme' },
        'La tabla muestra la familia. En nifal, נֶאֱמָן es lo que es firme y digno de confianza: «fiel». En hifil, הֶאֱמִין es «considerar firme, apoyarse en», es decir, «creer, confiar». אֱמֶת es la verdad, lo que no falla. Y אֱמוּנָה es la firmeza: cuando Moisés levantaba los brazos durante la batalla contra Amalec, Aarón y Hur se los sostuvieron: «así hubo en sus manos firmeza hasta que se puso el sol» (Éx 17:12). La palabra «firmeza» es אֱמוּנָה.',
        { h: 'Si no creyereis, no permaneceréis' },
        'Isaías juega con la raíz en una frase famosa: אִם לֹא תַאֲמִינוּ כִּי לֹא תֵאָמֵנוּ, «Si vosotros no creyereis, de cierto no permaneceréis» (Is 7:9). El primer verbo es un hifil, «creer»; el segundo, un nifal de la misma raíz, «ser firmes». Si no os apoyáis en Dios, no os mantendréis en pie. En español se pierde el juego de palabras; en hebreo suena como un refrán.',
        { h: 'El justo por su fe vivirá' },
        'Habacuc 2:4 es el único lugar donde la Reina-Valera traduce אֱמוּנָה como «fe»: וְצַדִּיק בֶּאֱמוּנָתוֹ יִחְיֶה, «mas el justo por su fe vivirá». בֶּאֱמוּנָתוֹ es בְּ + אֱמוּנָה + el sufijo «su». Pablo cita este versículo dos veces para enseñar que el ser humano es justificado por la fe (Ro 1:17; Gá 3:11), y Hebreos lo cita para animar a perseverar (He 10:38).',
        { posturas: {
          titulo: '¿Fe o fidelidad en Habacuc 2:4?',
          a: { n: 'Fe: confianza en Dios', t: 'La Reina-Valera, siguiendo la cita de Pablo, traduce «fe»: el justo vive por confiar en Dios y en su promesa, no en sus propias fuerzas.' },
          b: { n: 'Fidelidad: firmeza que persevera', t: 'Otras versiones traducen «fidelidad», porque es el sentido más común de אֱמוּנָה: el justo vive manteniéndose firme y leal mientras espera el cumplimiento de la visión (Hab 2:3).' },
          c: 'Las dos lecturas no se oponen. La fe bíblica es confianza que se apoya en Dios, y por eso persevera y se mantiene fiel. Pablo destaca la confianza que justifica; Hebreos, la firmeza que persevera. Las dos están en la raíz אמן.'
        } },
        { ejercicio: {
          pregunta: '¿Qué significa «amén» según su raíz y sus usos?',
          opciones: [
            { t: '«Fin», como el final de una oración.', ok: false, por_que: 'El amén se dice al final, pero no significa «fin».' },
            { t: '«Así es, así sea»: se afirma que algo es firme y verdadero.', ok: true, por_que: 'La raíz אמן expresa firmeza. Con «amén», el pueblo hacía suyo lo que se había dicho (Dt 27:15-26).' },
            { t: '«Te amo», porque viene del verbo «amar».', ok: false, por_que: 'El parecido con «amar» es casual. «Amar» en hebreo es אָהַב.' }
          ],
          explicacion: 'Amén: «es firme, así es». Comparte raíz con creer, verdad y fidelidad.'
        } }
      ],
      pensar: '«Si vosotros no creyereis, de cierto no permaneceréis» (Is 7:9). ¿En qué te estás apoyando para mantenerte en pie en este tiempo?'
    },
    {
      id: 'redencion', n: 'Redención y salvación: גָּאַל y יְשׁוּעָה', ref: 'Job 19:25; Rut 4:14',
      visual: [
        { tipo: 'hebreo', titulo: 'Job 19:25', ref: 'Job 19:25', he: 'וַאֲנִי יָדַעְתִּי גֹּאֲלִי חָי וְאַחֲרוֹן עַל־עָפָר יָקוּם׃', tr: 'Vaaní yadati goalí jay, veajarón al-afar yakum.',
          palabras: P(['וַאֲנִי', 'יָדַעְתִּי', 'גֹּאֲלִי', 'חָי', 'וְאַחֲרוֹן', 'עַל־עָפָר', 'יָקוּם'], [['vaaní', 'y yo'], ['yadati', 'sé'], ['goalí', 'mi redentor'], ['jay', 'vive'], ['veajarón', 'y al fin (el último)'], ['al-afar', 'sobre el polvo'], ['yakum', 'se levantará']]),
          rv: 'Yo sé que mi Redentor vive, Y al fin se levantará sobre el polvo;' },
        { tipo: 'tabla', titulo: 'El goel', tabla: {
          titulo: 'Qué hacía el גֹּאֵל, el pariente redentor',
          cab: ['Tarea', 'Pasaje'],
          filas: [
            ['Rescatar la tierra que un pariente pobre había vendido', 'Levítico 25:25'],
            ['Rescatar a un pariente vendido como esclavo', 'Levítico 25:47-49'],
            ['Vengar la sangre de un pariente asesinado («el vengador de la sangre»)', 'Números 35:19'],
            ['Casarse con la viuda para dar descendencia al pariente muerto', 'Rut 3:9-13; 4:5-10'],
            ['Dios es el Redentor de Israel', 'Éxodo 6:6; Isaías 41:14'],
          ],
          nota: 'La Reina-Valera traduce גָּאַל «redimir», «rescatar», «redentor», «vengador» y «pariente». יְשׁוּעָה, casi siempre «salvación».'
        } }
      ],
      texto: [
        'La Biblia hebrea tiene varias palabras para el rescate. Esta estación estudia dos familias: la de גָּאַל, «redimir», y la de יָשַׁע, «salvar».',
        { h: 'El pariente que rescata' },
        'גָּאַל, gaal, es un verbo de la vida familiar. En Israel, si una persona empobrecía y tenía que vender su tierra o venderse como esclava, su pariente más cercano tenía el derecho y el deber de rescatarla pagando el precio. Ese pariente era el גֹּאֵל, goel, participio de גָּאַל: «el que rescata». La tabla muestra sus tareas. El libro de Rut gira en torno a esta figura: Booz es el גֹּאֵל que rescata la heredad de Elimelec y toma a Rut por esposa, y al final las mujeres de Belén bendicen a Dios, «que hizo que no te faltase hoy pariente» (Rt 4:14): la palabra «pariente» es גֹּאֵל.',
        'Dios mismo se presenta así: «os redimiré con brazo extendido» (Éx 6:6), y el verbo es וְגָאַלְתִּי. Isaías lo repite muchas veces: «el Santo de Israel es tu Redentor» (Is 41:14). Llamar a Dios גֹּאֵל es decir que se hizo pariente de su pueblo, que asumió como propia su deuda y su esclavitud.',
        { h: 'Yo sé que mi Redentor vive' },
        'En Job 19:25, en medio de su sufrimiento, Job dice: וַאֲנִי יָדַעְתִּי גֹּאֲלִי חָי, «y yo sé (que) mi redentor vive». El pronombre אֲנִי da énfasis, como viste en la ruta II; יָדַעְתִּי es un perfecto que se traduce en presente, «sé»; y גֹּאֲלִי es el participio con el sufijo «mi». Job no sabe cómo, pero sabe que alguien saldrá en su defensa y que al fin se levantará sobre el polvo. La iglesia ha visto en estas palabras la esperanza en Cristo, el Redentor que vive.',
        'El Nuevo Testamento explica por qué Cristo pudo ser nuestro redentor: como los hijos participaron de carne y sangre, el Hijo de Dios «también participó de lo mismo»: se hizo nuestro pariente para librar a los que estaban en esclavitud (He 2:14-15).',
        { ir: { t: 'Ver «Propiciación, redención, reconciliación» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/4' } },
        { h: 'Salvación: Jesús' },
        'La otra familia es la de יָשַׁע, yashá, «salvar, librar», que se usa casi siempre en hifil: הוֹשִׁיעַ, hoshía, «salvó». De ella vienen יְשׁוּעָה, yeshuá, «salvación», que la Reina-Valera traduce así en casi todas sus apariciones, y el nombre יְהוֹשֻׁעַ, Yehoshúa, «Jehová es salvación», que en griego se dijo Iēsous: Jesús. Por eso el ángel dijo a José: «llamarás su nombre Jesús, porque él salvará a su pueblo de sus pecados» (Mt 1:21).',
        { ejercicio: {
          pregunta: '¿Quién podía ser el גֹּאֵל de una persona en Israel?',
          opciones: [
            { t: 'Cualquier persona rica de la ciudad.', ok: false, por_que: 'El derecho de rescate correspondía a la familia, no a cualquier persona con dinero.' },
            { t: 'Su pariente cercano, que tenía el derecho y el deber de rescatarla.', ok: true, por_que: 'Por eso Booz pudo rescatar a Rut, y por eso el Hijo de Dios se hizo hombre para ser nuestro pariente (He 2:14).' },
            { t: 'Solo el sacerdote.', ok: false, por_que: 'El rescate era una obligación familiar. Los sacerdotes tenían otras funciones.' }
          ],
          explicacion: 'El goel era el pariente que rescataba. Cristo se hizo nuestro pariente para redimirnos.'
        } }
      ],
      pensar: '«Yo sé que mi Redentor vive» (Job 19:25). Job lo dijo cuando lo había perdido todo. ¿Qué cambiaría en tu manera de enfrentar tu dificultad actual si lo dijeras con la misma certeza?'
    }
  ];

  window.__GRAM.palabras = palabras;
})();
/* Vocabulario y gramática básica del hebreo bíblico · Taller práctico y RUTA_DATA (ver encabezado de parte1.js) */
(() => {
  const P = window.__GRAM.P;

  const taller = [
    {
      id: 'sea-la-luz', n: 'Génesis 1:3: «Sea la luz»', ref: 'Génesis 1:3; 2 Corintios 4:6',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:3', ref: 'Génesis 1:3', he: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר׃', tr: 'Vayómer Elohim: yehí or! Vayehí-or.',
          palabras: P(['וַיֹּאמֶר', 'אֱלֹהִים', 'יְהִי', 'אוֹר', 'וַיְהִי־אוֹר'], [['vayómer', 'y dijo'], ['Elohim', 'Dios'], ['yehí', 'sea'], ['or', 'luz'], ['vayehí-or', 'y fue la luz']]),
          rv: 'Y dijo Dios: Sea la luz; y fue la luz.' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Palabra por palabra',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['וַיֹּאמֶר', 'Qal imperfecto con vav consecutiva, 3.ª m. sg., de אָמַר: «y dijo»', 'III.4'],
            ['אֱלֹהִים', 'Sustantivo masculino plural, con verbo en singular: «Dios»', 'II.1'],
            ['יְהִי', 'Qal yusivo, 3.ª m. sg., de הָיָה (final he, acortado): «sea»', 'III.5 y III.11'],
            ['אוֹר', 'Sustantivo masculino singular, sin artículo: «luz»', 'II.3'],
            ['וַיְהִי־אוֹר', 'Qal imperfecto con vav consecutiva de הָיָה + sustantivo: «y fue la luz»', 'III.4'],
          ],
          nota: 'Cinco palabras, tres formas del verbo «ser».'
        } }
      ],
      texto: [
        'El taller aplica lo que aprendiste a seis pasajes muy conocidos. En cada uno, primero intenta analizar las palabras tú mismo con el método de la ruta III y el vocabulario; después compara con la tabla del panel.',
        { h: 'Cinco palabras' },
        'Génesis 1:3 tiene cinco palabras en hebreo y doce en la Reina-Valera. Empieza con el verbo de la narración, וַיֹּאמֶר, «y dijo», un wayyiqtol que hace avanzar el relato. El sujeto, אֱלֹהִים, tiene forma plural, pero el verbo está en singular: es el único Dios verdadero, como viste en la ruta II.',
        'Después viene lo que Dios dijo, en dos palabras: יְהִי אוֹר, «sea luz». יְהִי es el yusivo de הָיָה, «ser», la forma de la voluntad en tercera persona. Como הָיָה es un verbo de final he, su yusivo se acorta: no יִהְיֶה, sino יְהִי. Y אוֹר va sin artículo: todavía no existía ninguna luz a la que referirse.',
        { h: 'Dicho y hecho' },
        'La última palabra repite la orden con otra forma del mismo verbo: וַיְהִי־אוֹר, «y fue luz». Del yusivo al wayyiqtol: lo que Dios quiere, sucede. La gramática muestra la teología del pasaje. Dios no lucha contra la oscuridad ni necesita materiales: habla, y su palabra se cumple. Por eso el salmista dice: «Porque él dijo, y fue hecho; El mandó, y existió» (Sal 33:9).',
        'Pablo vio en este versículo una imagen de la conversión: «Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones» (2 Co 4:6). La misma palabra que creó la luz en el principio la hace brillar hoy en quien cree.',
        { ejercicio: {
          pregunta: '¿Por qué en Génesis 1:3 se escribe יְהִי y no יִהְיֶה?',
          opciones: [
            { t: 'Porque יְהִי es un yusivo acortado: «que sea», y no un simple futuro.', ok: true, por_que: 'En los verbos de final he, el yusivo pierde la terminación. La forma corta expresa la voluntad de Dios.' },
            { t: 'Porque es un error de copia.', ok: false, por_que: 'Es una forma gramatical normal, que se repite en todo el capítulo.' },
            { t: 'Porque יְהִי es un sustantivo que significa «luz».', ok: false, por_que: '«Luz» es אוֹר, la palabra siguiente.' }
          ],
          explicacion: 'Yusivo acortado de un verbo de final he: יְהִי, «sea».'
        } }
      ],
      pensar: '«Dijo Dios: Sea la luz; y fue la luz» (Gn 1:3). ¿Qué área oscura de tu vida necesita hoy que Dios hable su palabra?'
    },
    {
      id: 'abram', n: 'Génesis 12:1-2: el llamado de Abram', ref: 'Génesis 12:1-2; Hechos 7:2-4',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 12:1', ref: 'Génesis 12:1', he: 'וַיֹּאמֶר יְהוָה אֶל־אַבְרָם לֶךְ־לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ וּמִבֵּית אָבִיךָ אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ׃', tr: 'Vayómer Adonái el-Avram: lej-lejá mearetsjá umimoladtejá umibet avija el-haárets asher arejá.',
          palabras: P(['וַיֹּאמֶר', 'יְהוָה', 'אֶל־אַבְרָם', 'לֶךְ־לְךָ', 'מֵאַרְצְךָ', 'וּמִמּוֹלַדְתְּךָ', 'וּמִבֵּית', 'אָבִיךָ', 'אֶל־הָאָרֶץ', 'אֲשֶׁר', 'אַרְאֶךָּ'], [['vayómer', 'y dijo'], ['Adonái', 'Jehová'], ['el-Avram', 'a Abram'], ['lej-lejá', 'vete'], ['mearetsjá', 'de tu tierra'], ['umimoladtejá', 'y de tu parentela'], ['umibet', 'y de la casa de'], ['avija', 'tu padre'], ['el-haárets', 'a la tierra'], ['asher', 'que'], ['arejá', 'te mostraré']]),
          rv: 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré.' },
        { tipo: 'hebreo', titulo: 'Génesis 12:2', ref: 'Génesis 12:2', he: 'וְאֶעֶשְׂךָ לְגוֹי גָּדוֹל וַאֲבָרֶכְךָ וַאֲגַדְּלָה שְׁמֶךָ וֶהְיֵה בְּרָכָה׃', tr: 'Veeesjá legoy gadol vaavarejejá vaagadlá shmeja, veheyé berajá.',
          palabras: P(['וְאֶעֶשְׂךָ', 'לְגוֹי', 'גָּדוֹל', 'וַאֲבָרֶכְךָ', 'וַאֲגַדְּלָה', 'שְׁמֶךָ', 'וֶהְיֵה', 'בְּרָכָה'], [['veeesjá', 'y te haré'], ['legoy', 'una nación'], ['gadol', 'grande'], ['vaavarejejá', 'y te bendeciré'], ['vaagadlá', 'y engrandeceré'], ['shmeja', 'tu nombre'], ['veheyé', 'y sé'], ['berajá', 'bendición']]),
          rv: 'Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición.' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas clave',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['לֶךְ־לְךָ', 'Qal imperativo m. sg. de הָלַךְ + לְ con sufijo «ti»: «vete (tú)»', 'III.5'],
            ['מֵאַרְצְךָ', 'מִן + אֶרֶץ + sufijo «tu»: «de tu tierra»', 'II.4 y II.9'],
            ['וּמִבֵּית אָבִיךָ', 'ו + מִן + constructo de בַּיִת + אָב con sufijo: «y de la casa de tu padre»', 'II.7'],
            ['אַרְאֶךָּ', 'Hifil imperfecto 1.ª sg. de רָאָה + sufijo: «te haré ver, te mostraré»', 'III.10'],
            ['וַאֲבָרֶכְךָ', 'Piel imperfecto 1.ª sg. de בָּרַךְ + sufijo, con vav: «y te bendeciré»', 'III.9'],
            ['וַאֲגַדְּלָה', 'Piel cohortativo 1.ª sg. de גָּדַל: «y engrandeceré»', 'III.5 y III.9'],
            ['וֶהְיֵה', 'Qal imperativo m. sg. de הָיָה, con vav: «y sé»', 'III.5'],
          ],
          nota: 'Una orden en el versículo 1, cinco promesas y otra orden en el versículo 2.'
        } }
      ],
      texto: [
        'El llamado de Abram es el comienzo de la historia de Israel y, por medio de ella, de la promesa para todas las naciones (Gn 12:3). La gramática de estos dos versículos muestra cómo se combinan la orden de Dios y sus promesas.',
        { h: 'La orden' },
        'El versículo 1 empieza con un wayyiqtol, וַיֹּאמֶר, que la Reina-Valera traduce «había dicho». Normalmente se traduciría «y dijo». Pero Esteban cuenta, en Hechos 7:2-4, que Dios llamó a Abraham estando en Mesopotamia, antes de Harán, y por eso los traductores entendieron que el llamado ya había ocurrido. El contexto de toda la Escritura ayuda a traducir.',
        'La orden es לֶךְ־לְךָ, lej-lejá: un imperativo de הָלַךְ, «ir», con la preposición לְ y el sufijo «ti», literalmente «vete para ti». Después vienen tres complementos con מִן, cada vez más cercanos y más difíciles de dejar: «de tu tierra», «de tu parentela», «de la casa de tu padre». Y el destino no tiene nombre: אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ, «a la tierra que te mostraré». אַרְאֶךָּ es un hifil de רָאָה, «ver»: «te haré ver». Abram tenía que salir sin conocer el destino, como recuerda Hebreos 11:8.',
        { h: 'Las promesas' },
        'El versículo 2 encadena promesas con la vav: «te haré», «te bendeciré», «engrandeceré tu nombre». וַאֲגַדְּלָה es un cohortativo de piel, con la terminación ־ָה: expresa la determinación de Dios. Los constructores de Babel habían dicho «hagámonos un nombre» (Gn 11:4); aquí es Dios quien promete engrandecer el nombre de Abram.',
        'Y la última palabra sorprende: וֶהְיֵה בְּרָכָה es un imperativo, «¡y sé bendición!». La Reina-Valera lo traduce «y serás bendición», porque en este contexto el imperativo expresa la consecuencia segura de las promesas. Abram es bendecido para que sea bendición.',
        { ejercicio: {
          pregunta: '¿Qué forma es אַרְאֶךָּ, «te mostraré»?',
          opciones: [
            { t: 'Qal perfecto: «vi».', ok: false, por_que: 'El perfecto tendría terminación (רָאִיתִי, «vi»). Aquí hay un prefijo א de primera persona.' },
            { t: 'Hifil imperfecto de primera persona de רָאָה, con sufijo «te»: «te haré ver».', ok: true, por_que: 'El hifil de «ver» es causativo: «hacer ver, mostrar». La א es «yo» y ־ךָּ, «te».' },
            { t: 'Sustantivo: «tu tierra».', ok: false, por_que: '«Tu tierra» es אַרְצְךָ, que aparece antes en el mismo versículo.' }
          ],
          explicacion: 'Prefijo א + raíz רָאָה (final he) + sufijo: hifil imperfecto, «te mostraré».'
        } }
      ],
      pensar: 'Abram tuvo que salir hacia «la tierra que te mostraré», sin conocerla (Gn 12:1). ¿Qué paso de obediencia te está pidiendo Dios aunque todavía no veas el resultado?'
    },
    {
      id: 'yo-soy', n: 'Éxodo 3:14: «Yo soy el que soy»', ref: 'Éxodo 3:12-15; Juan 8:58',
      visual: [
        { tipo: 'hebreo', titulo: 'Éxodo 3:14', ref: 'Éxodo 3:14', he: 'וַיֹּאמֶר אֱלֹהִים אֶל־מֹשֶׁה אֶהְיֶה אֲשֶׁר אֶהְיֶה וַיֹּאמֶר כֹּה תֹאמַר לִבְנֵי יִשְׂרָאֵל אֶהְיֶה שְׁלָחַנִי אֲלֵיכֶם׃', tr: 'Vayómer Elohim el-Moshé: Ehyé asher ehyé. Vayómer: ko tomar livné Yisrael: Ehyé shlajani alejem.',
          palabras: P(['וַיֹּאמֶר', 'אֱלֹהִים', 'אֶל־מֹשֶׁה', 'אֶהְיֶה', 'אֲשֶׁר', 'אֶהְיֶה', 'וַיֹּאמֶר', 'כֹּה', 'תֹאמַר', 'לִבְנֵי', 'יִשְׂרָאֵל', 'אֶהְיֶה', 'שְׁלָחַנִי', 'אֲלֵיכֶם'], [['vayómer', 'y dijo'], ['Elohim', 'Dios'], ['el-Moshé', 'a Moisés'], ['ehyé', 'YO SOY (seré)'], ['asher', 'el que'], ['ehyé', 'soy (seré)'], ['vayómer', 'y dijo'], ['ko', 'así'], ['tomar', 'dirás'], ['livné', 'a los hijos de'], ['Yisrael', 'Israel'], ['ehyé', 'YO SOY'], ['shlajani', 'me envió'], ['alejem', 'a vosotros']]),
          rv: 'Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas clave',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['אֶהְיֶה', 'Qal imperfecto 1.ª sg. de הָיָה: «soy, seré, estaré»', 'III.3'],
            ['אֲשֶׁר', 'Relativo: «el que»', 'II.10'],
            ['כֹּה תֹאמַר', 'Adverbio + qal imperfecto 2.ª m. sg. de אָמַר, con valor de mandato: «así dirás»', 'III.3'],
            ['לִבְנֵי יִשְׂרָאֵל', 'לְ + constructo plural de בֵּן + nombre propio: «a los hijos de Israel»', 'II.7'],
            ['שְׁלָחַנִי', 'Qal perfecto 3.ª m. sg. de שָׁלַח + sufijo ־נִי, «me»: «me envió»', 'III.2 y III.12'],
            ['אֲלֵיכֶם', 'אֶל + sufijo ־כֶם, «vosotros»: «a vosotros»', 'II.9'],
          ],
          nota: 'En el versículo siguiente, Dios se nombra יְהוָה, en tercera persona (Éx 3:15).'
        } }
      ],
      texto: [
        'Cuando Moisés preguntó a Dios por su nombre, recibió una de las respuestas más profundas de la Escritura: אֶהְיֶה אֲשֶׁר אֶהְיֶה, ehyé asher ehyé, «YO SOY EL QUE SOY».',
        { h: 'Un imperfecto de הָיָה' },
        'אֶהְיֶה es una forma que ya conoces: el imperfecto de primera persona de הָיָה, «ser, estar». La א es «yo»; la terminación ־ֶה es la del verbo de final he. Como el imperfecto mira la acción como no terminada, puede traducirse «soy», «seré» o «estaré». Unos versículos antes, Dios le había dicho a Moisés con la misma forma: כִּי־אֶהְיֶה עִמָּךְ, «yo estaré contigo» (Éx 3:12).',
        'En el versículo siguiente, Dios se presenta con su nombre, יְהוָה, «Jehová, el Dios de vuestros padres» (Éx 3:15). Muchos ven en ese nombre la tercera persona de la misma idea: si Dios dice de sí mismo «Yo soy», su pueblo dice de él «Él es». Las palabras son distintas, pero el versículo 14 explica el versículo 15.',
        { ir: { t: 'Ver «Jehová, Yo soy el que soy» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#nombres/2' } },
        { posturas: {
          titulo: '¿«Soy» o «seré»?',
          a: { n: 'Yo soy: el Dios que existe por sí mismo', t: 'La traducción griega antigua del Antiguo Testamento dijo «Yo soy el que es», y así lo entendió la mayoría de la tradición cristiana: Dios existe por sí mismo, no depende de nada y no cambia. Jesús dijo «Antes que Abraham fuese, yo soy» (Jn 8:58), y sus oyentes entendieron que se atribuía el nombre de Dios.' },
          b: { n: 'Seré: el Dios que estará presente', t: 'Otros destacan el sentido de futuro y de presencia del imperfecto: «Seré el que seré», «estaré como el que estaré», en relación con «yo estaré contigo» del versículo 12. Dios se dará a conocer en lo que hará por su pueblo.' },
          c: 'Las dos lecturas se complementan. El Dios que existe por sí mismo y no cambia es precisamente el que puede prometer estar presente con su pueblo en todo lo que venga. El imperfecto hebreo deja abiertas las dos cosas.'
        } },
        { ejercicio: {
          pregunta: '¿Qué significa שְׁלָחַנִי, shlajani?',
          opciones: [
            { t: '«Me envió».', ok: true, por_que: 'Perfecto qal de שָׁלַח, «enviar», con el sufijo de objeto ־נִי, «me».' },
            { t: '«Envié».', ok: false, por_que: '«Envié» sería שָׁלַחְתִּי, con la terminación ־תִּי.' },
            { t: '«Envíame».', ok: false, por_que: 'El imperativo con sufijo sería שְׁלָחֵנִי, con otras vocales. El contexto también pide un hecho cumplido: «YO SOY me envió».' }
          ],
          explicacion: 'Perfecto + ־נִי = «me» hizo la acción. שְׁלָחַנִי, «me envió».'
        } }
      ],
      pensar: 'Dios le dijo a Moisés «yo estaré contigo» antes de decirle «Yo soy el que soy» (Éx 3:12-14). ¿Qué tarea te ha confiado Dios en la que necesitas recordar que él estará contigo?'
    },
    {
      id: 'pastor', n: 'Salmo 23:1-3: el Pastor', ref: 'Salmo 23:1-3; Juan 10:11',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 23:2', ref: 'Salmo 23:2', he: 'בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי׃', tr: 'Binot déshe yarbitseni, al-mé menujot yenahaleni.',
          palabras: P(['בִּנְאוֹת', 'דֶּשֶׁא', 'יַרְבִּיצֵנִי', 'עַל־מֵי', 'מְנֻחוֹת', 'יְנַהֲלֵנִי'], [['binot', 'en praderas de'], ['déshe', 'hierba tierna'], ['yarbitseni', 'me hace recostar'], ['al-mé', 'junto a aguas de'], ['menujot', 'reposo'], ['yenahaleni', 'me conduce']]),
          rv: 'En lugares de delicados pastos me hará descansar; Junto a aguas de reposo me pastoreará.' },
        { tipo: 'hebreo', titulo: 'Salmo 23:3', ref: 'Salmo 23:3', he: 'נַפְשִׁי יְשׁוֹבֵב יַנְחֵנִי בְמַעְגְּלֵי־צֶדֶק לְמַעַן שְׁמוֹ׃', tr: 'Nafshí yeshovev, yanjeni vemaaguelé-tsédek lemáan shmó.',
          palabras: P(['נַפְשִׁי', 'יְשׁוֹבֵב', 'יַנְחֵנִי', 'בְמַעְגְּלֵי־צֶדֶק', 'לְמַעַן', 'שְׁמוֹ'], [['nafshí', 'mi alma'], ['yeshovev', 'hace volver'], ['yanjeni', 'me guía'], ['vemaaguelé-tsédek', 'por sendas de justicia'], ['lemáan', 'por causa de'], ['shmó', 'su nombre']]),
          rv: 'Confortará mi alma; Me guiará por sendas de justicia por amor de su nombre.' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas de los versículos 1 a 3',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['רֹעִי', 'Qal participio de רָעָה + sufijo «mi»: «el que me apacienta, mi pastor»', 'III.6'],
            ['לֹא אֶחְסָר', 'Negación + qal imperfecto 1.ª sg. de חָסֵר: «no me faltará»', 'III.3'],
            ['יַרְבִּיצֵנִי', 'Hifil imperfecto 3.ª m. sg. de רָבַץ + ־נִי: «me hace recostar»', 'III.10'],
            ['עַל־מֵי מְנֻחוֹת', 'עַל + constructo de מַיִם + plural femenino: «junto a aguas de reposo»', 'II.4 y II.7'],
            ['יְנַהֲלֵנִי', 'Piel imperfecto de נָהַל + ־נִי: «me conduce»', 'III.9'],
            ['נַפְשִׁי יְשׁוֹבֵב', 'Sustantivo + «mi»; forma intensiva de שׁוּב: «hace volver mi alma»', 'II.9 y III.11'],
            ['לְמַעַן שְׁמוֹ', 'Preposición + שֵׁם + «su»: «por amor de su nombre»', 'II.9'],
          ],
          nota: 'Todos los verbos son imperfectos: el cuidado del pastor no es un hecho aislado, es lo que hace siempre.'
        } }
      ],
      texto: [
        'En El alfabeto hebreo leíste en voz alta los primeros versículos del Salmo 23. Ahora puedes entender cada una de sus formas.',
        { h: 'El pastor y la oveja' },
        'El salmo empieza con una oración nominal: יְהוָה רֹעִי, «Jehová, mi pastor». רֹעִי es un participio, «el que me apacienta», con el sufijo «mi». Y la consecuencia, לֹא אֶחְסָר, es un imperfecto de primera persona: «no me faltará», ni hoy ni mañana.',
        'En los versículos 2 y 3, todos los verbos tienen a Jehová como sujeto y a David como objeto, con el sufijo ־נִי, «me»: יַרְבִּיצֵנִי, «me hace recostar»; יְנַהֲלֵנִי, «me conduce»; יַנְחֵנִי, «me guía». La oveja no hace nada por sí misma: todo lo hace el pastor. יַרְבִּיצֵנִי es un hifil, causativo: una oveja solo se recuesta cuando está saciada y sin temor, y el pastor es quien crea esas condiciones.',
        { h: 'Aguas de reposo' },
        'עַל־מֵי מְנֻחוֹת, «junto a aguas de reposo», combina dos cosas que estudiaste: מֵי es el estado constructo de מַיִם, «aguas de», y מְנֻחוֹת es un sustantivo femenino plural de la raíz נוח, «reposar», con la que se relaciona el nombre de Noé, נֹחַ. No son aguas turbulentas, sino tranquilas, donde la oveja puede beber sin peligro.',
        { h: 'Hace volver mi alma' },
        'נַפְשִׁי יְשׁוֹבֵב, «confortará mi alma», es literalmente «mi alma hace volver». יְשׁוֹבֵב es una forma intensiva del verbo hueco שׁוּב, «volver», el mismo verbo del arrepentimiento. El pastor no solo da descanso: trae de vuelta a la oveja que se desvió. Y lo hace לְמַעַן שְׁמוֹ, «por amor de su nombre»: su reputación de buen pastor está en juego. Jesús dijo: «Yo soy el buen pastor; el buen pastor su vida da por las ovejas» (Jn 10:11).',
        { ejercicio: {
          pregunta: '¿Qué indica el sufijo ־נִי en יַרְבִּיצֵנִי, יְנַהֲלֵנִי y יַנְחֵנִי?',
          opciones: [
            { t: 'Que el sujeto es «yo».', ok: false, por_que: 'El sujeto es Jehová: los tres verbos tienen el prefijo י de tercera persona.' },
            { t: 'Que el objeto es «me»: el pastor hace algo con la oveja.', ok: true, por_que: '־נִי es el sufijo de objeto de primera persona: «me hace recostar», «me conduce», «me guía».' },
            { t: 'Que son verbos en plural.', ok: false, por_que: 'El plural del imperfecto lleva la terminación ־וּ. ־נִי es un sufijo pronominal.' }
          ],
          explicacion: 'En un verbo, ־נִי es «me». En el Salmo 23, Jehová es el que actúa y David el que recibe.'
        } }
      ],
      pensar: 'En el Salmo 23, todos los verbos tienen a Jehová como sujeto: la oveja recibe. ¿Te cuesta dejarte guiar? ¿En qué necesitas dejar que el Pastor haga lo que tú no puedes?'
    },
    {
      id: 'herido', n: 'Isaías 53:5: herido por nuestras rebeliones', ref: 'Isaías 53:4-6; 1 Pedro 2:24',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 53:5', ref: 'Isaías 53:5', he: 'וְהוּא מְחֹלָל מִפְּשָׁעֵנוּ מְדֻכָּא מֵעֲוֺנֹתֵינוּ מוּסַר שְׁלוֹמֵנוּ עָלָיו וּבַחֲבֻרָתוֹ נִרְפָּא־לָנוּ׃', tr: 'Vehú mejolal mipeshaenu, medukká meavonotenu, musar shlomenu alav, uvajavurató nirpá-lanu.',
          palabras: P(['וְהוּא', 'מְחֹלָל', 'מִפְּשָׁעֵנוּ', 'מְדֻכָּא', 'מֵעֲוֺנֹתֵינוּ', 'מוּסַר', 'שְׁלוֹמֵנוּ', 'עָלָיו', 'וּבַחֲבֻרָתוֹ', 'נִרְפָּא־לָנוּ'], [['vehú', 'mas él'], ['mejolal', 'fue herido (traspasado)'], ['mipeshaenu', 'por nuestras rebeliones'], ['medukká', 'molido'], ['meavonotenu', 'por nuestras iniquidades'], ['musar', 'el castigo de'], ['shlomenu', 'nuestra paz'], ['alav', 'sobre él'], ['uvajavurató', 'y por su llaga'], ['nirpá-lanu', 'fuimos curados']]),
          rv: 'Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Palabra por palabra',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['וְהוּא', 'ו + pronombre «él», con énfasis: «mas él»', 'II.8'],
            ['מְחֹלָל', 'Participio pasivo intensivo de חָלַל: «traspasado, herido»', 'III.6 y III.9'],
            ['מִפְּשָׁעֵנוּ', 'מִן («por causa de») + פֶּשַׁע en plural, escrito sin yod, + «nuestras»', 'II.4 y II.9'],
            ['מְדֻכָּא', 'Pual participio de דָּכָא: «molido, quebrantado»', 'III.9'],
            ['מוּסַר שְׁלוֹמֵנוּ', 'Constructo de מוּסָר + שָׁלוֹם con «nuestra»: «el castigo de nuestra paz»', 'II.7 y IV.3'],
            ['עָלָיו', 'עַל + sufijo «él»: «sobre él»', 'II.9'],
            ['נִרְפָּא־לָנוּ', 'Nifal perfecto 3.ª m. sg. de רָפָא + «a nosotros»: «hubo curación para nosotros»', 'III.9'],
          ],
          nota: 'Cuatro veces «nuestro» o «nosotros» (־ֵנוּ, ־נוּ); tres veces «él» (הוּא, ־ָיו, ־וֹ).'
        } }
      ],
      texto: [
        'Isaías 53 es el cuarto cántico del Siervo de Jehová, y el pasaje del Antiguo Testamento que más claramente anuncia la muerte sustitutiva de Cristo. El Nuevo Testamento lo cita una y otra vez (Hch 8:32-35; 1 P 2:22-25). El versículo 5 tiene diez palabras hebreas, y su gramática enseña la sustitución.',
        { h: 'Él y nosotros' },
        'Fíjate en los sufijos. Cuatro veces aparece ־ֵנוּ o ־נוּ, «nuestro» o «nosotros»: מִפְּשָׁעֵנוּ, «por nuestras rebeliones»; מֵעֲוֺנֹתֵינוּ, «por nuestras iniquidades»; שְׁלוֹמֵנוּ, «nuestra paz»; לָנוּ, «para nosotros». Y tres veces aparece «él»: וְהוּא, עָלָיו, וּבַחֲבֻרָתוֹ. El versículo alterna entre lo nuestro y lo suyo: lo que era nuestro, la rebelión y la iniquidad, cayó sobre él; lo que era suyo, la paz y la sanidad, llegó a nosotros.',
        'El pronombre independiente וְהוּא, al comienzo, es enfático, como viste en la ruta II. El versículo anterior había dicho: «nosotros le tuvimos por azotado, por herido de Dios» (Is 53:4). Ahora el profeta corrige: «Mas él…». No sufría por sus pecados, sino por los nuestros. La preposición מִן aquí tiene sentido de causa: «a causa de».',
        { h: 'Formas pasivas' },
        'Los dos primeros verbos son participios pasivos de formas intensivas: מְחֹלָל, «traspasado», y מְדֻכָּא, «molido», un pual. El Siervo no es el que hiere: es el que recibe los golpes. Y el castigo, מוּסָר, el mismo sustantivo que en Proverbios significa «disciplina», está en estado constructo con שָׁלוֹם: «el castigo de nuestra paz», el castigo que produjo nuestra paz.',
        { h: 'Por su llaga' },
        'La última palabra es un nifal perfecto: נִרְפָּא־לָנוּ, literalmente «hubo curación para nosotros». Pedro la aplica al perdón del pecado: «por cuya herida fuisteis sanados» (1 P 2:24). Mateo aplica el versículo anterior a las sanidades del ministerio de Jesús: «El mismo tomó nuestras enfermedades, y llevó nuestras dolencias» (Mt 8:17). La obra de Cristo en la cruz alcanza al ser humano completo.',
        { ir: { t: 'Ver «Sanidad en la expiación» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/8' } },
        { ejercicio: {
          pregunta: '¿Qué recurso gramatical usa Isaías 53:5 para enseñar la sustitución?',
          opciones: [
            { t: 'Alterna los sufijos de «nosotros» con los de «él»: lo nuestro cae sobre él y lo suyo llega a nosotros.', ok: true, por_que: 'Los sufijos ־ֵנוּ y ־וֹ, ־ָיו, y el pronombre enfático הוּא, construyen el intercambio.' },
            { t: 'Usa solo verbos en imperativo.', ok: false, por_que: 'No hay imperativos: hay participios pasivos y un nifal perfecto.' },
            { t: 'Repite tres veces la palabra «santo».', ok: false, por_que: 'Esa repetición está en Isaías 6:3, no aquí.' }
          ],
          explicacion: 'Los sufijos pronominales muestran el intercambio: nuestras rebeliones sobre él, su paz para nosotros.'
        } }
      ],
      pensar: '«Mas él herido fue por nuestras rebeliones» (Is 53:5). Lee el versículo poniendo tu nombre en cada «nuestro». ¿Qué te dice?'
    },
    {
      id: 'derramare', n: 'Joel 2:28: «Derramaré mi Espíritu»', ref: 'Joel 2:28-29; Hechos 2:16-18',
      visual: [
        { tipo: 'hebreo', titulo: 'Joel 2:28', ref: 'Joel 2:28', he: 'וְהָיָה אַחֲרֵי־כֵן אֶשְׁפּוֹךְ אֶת־רוּחִי עַל־כָּל־בָּשָׂר וְנִבְּאוּ בְּנֵיכֶם וּבְנוֹתֵיכֶם זִקְנֵיכֶם חֲלֹמוֹת יַחֲלֹמוּן בַּחוּרֵיכֶם חֶזְיֹנוֹת יִרְאוּ׃', tr: 'Vehayá ajaré-jen eshpoj et-rují al-kol-basar, venibeú bnejem uvnotejem, ziknejem jalomot yajalomun, bajurejem jezyonot yiru.',
          palabras: P(['וְהָיָה', 'אַחֲרֵי־כֵן', 'אֶשְׁפּוֹךְ', 'אֶת־רוּחִי', 'עַל־כָּל־בָּשָׂר', 'וְנִבְּאוּ', 'בְּנֵיכֶם', 'וּבְנוֹתֵיכֶם', 'זִקְנֵיכֶם', 'חֲלֹמוֹת', 'יַחֲלֹמוּן', 'בַּחוּרֵיכֶם', 'חֶזְיֹנוֹת', 'יִרְאוּ'], [['vehayá', 'y será (acontecerá)'], ['ajaré-jen', 'después de esto'], ['eshpoj', 'derramaré'], ['et-rují', '(objeto) mi Espíritu'], ['al-kol-basar', 'sobre toda carne'], ['venibeú', 'y profetizarán'], ['bnejem', 'vuestros hijos'], ['uvnotejem', 'y vuestras hijas'], ['ziknejem', 'vuestros ancianos'], ['jalomot', 'sueños'], ['yajalomun', 'soñarán'], ['bajurejem', 'vuestros jóvenes'], ['jezyonot', 'visiones'], ['yiru', 'verán']]),
          rv: 'Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones.' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas clave',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['וְהָיָה', 'Qal perfecto de הָיָה con vav consecutiva (weqatal): «y acontecerá»', 'III.4'],
            ['אֶשְׁפּוֹךְ', 'Qal imperfecto 1.ª sg. de שָׁפַךְ: «derramaré»', 'III.3'],
            ['אֶת־רוּחִי', 'Marca del objeto + רוּחַ con «mi»: «mi Espíritu»', 'II.5 y IV.6'],
            ['עַל־כָּל־בָּשָׂר', 'עַל + constructo de כֹּל + בָּשָׂר: «sobre toda carne», sobre todo ser humano', 'II.7'],
            ['וְנִבְּאוּ', 'Nifal perfecto 3.ª pl. de נָבָא con vav consecutiva: «y profetizarán»', 'III.4 y III.9'],
            ['בְּנֵיכֶם וּבְנוֹתֵיכֶם', 'Plurales con «vuestros, vuestras»: «vuestros hijos y vuestras hijas»', 'II.1 y II.9'],
            ['חֲלֹמוֹת יַחֲלֹמוּן', 'Sustantivo + verbo de la misma raíz: «soñarán sueños»', 'III.7'],
          ],
          nota: 'En la Biblia hebrea este versículo es el primero del capítulo 3 de Joel: el hebreo divide Joel en cuatro capítulos y la Reina-Valera en tres.'
        } }
      ],
      texto: [
        'El último pasaje del taller es la promesa que Pedro citó el día de Pentecostés: «Esto es lo dicho por el profeta Joel» (Hch 2:16). Para la iglesia pentecostal es un texto fundamental, y su gramática ayuda a leerlo con precisión.',
        { h: 'Una numeración distinta' },
        'Antes de empezar, fíjate en la referencia. En la Reina-Valera, este versículo es Joel 2:28. En la Biblia hebrea es el primer versículo del capítulo 3, porque el hebreo divide el libro en cuatro capítulos y nuestras Biblias en tres. No es un error de nadie: es una división distinta, que se hizo siglos después de que el libro se escribió. Si buscas este versículo en una Biblia hebrea, en un interlineal o en un comentario técnico, lo encontrarás como el capítulo 3, versículo 1. (Por eso aquí no lo escribimos con la forma de una referencia: la burbuja te mostraría otro versículo de la Reina-Valera.) Lo mismo pasa con varios salmos y con otros pasajes, como viste con el Salmo 19 e Isaías 9.',
        { h: 'Promesa del futuro' },
        'La promesa empieza con וְהָיָה, un weqatal: «y acontecerá». El verbo principal, אֶשְׁפּוֹךְ, es un imperfecto de primera persona de שָׁפַךְ, «derramar», el verbo que se usa para el agua o la sangre que se vierten en abundancia. Dios no promete unas gotas, sino un derramamiento. Su objeto, marcado con אֶת, es רוּחִי, «mi Espíritu», con el sufijo «mi».',
        'עַל־כָּל־בָּשָׂר, «sobre toda carne», es una cadena constructa que en el Antiguo Testamento designa a todos los seres humanos. Los sufijos ־כֶם, «vuestros», enumeran a quiénes alcanza: hijos e hijas, ancianos y jóvenes, y en el versículo siguiente, siervos y siervas (Jl 2:29). Ni el sexo, ni la edad, ni la condición social quedan fuera.',
        { h: 'Profetizarán' },
        'וְנִבְּאוּ, «y profetizarán», es un nifal de נָבָא con vav consecutiva, la raíz de נָבִיא, «profeta». En el Antiguo Testamento, el Espíritu venía sobre algunos: profetas, jueces, reyes. Moisés había deseado: «Ojalá todo el pueblo de Jehová fuese profeta» (Nm 11:29). Joel anuncia que ese deseo se cumplirá.',
        'Pedro lo vio cumplido en Pentecostés y dijo que la promesa es «para vosotros… y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). El derramamiento que comenzó en Jerusalén sigue alcanzando hoy a quienes lo piden.',
        { ir: { t: 'Ver «La promesa del derramamiento» en El Espíritu Santo', a: '../../espiritu-santo/#at/5' } },
        { ejercicio: {
          pregunta: '¿Por qué una Biblia hebrea pone este versículo en el capítulo 3 de Joel, y no en el 2?',
          opciones: [
            { t: 'Porque la Reina-Valera agregó versículos.', ok: false, por_que: 'El texto es el mismo. Solo cambia dónde empieza cada capítulo.' },
            { t: 'Porque la división en capítulos es distinta: el hebreo divide Joel en cuatro capítulos y la Reina-Valera en tres.', ok: true, por_que: 'Las divisiones en capítulos se hicieron mucho después y no siempre coinciden entre las tradiciones.' },
            { t: 'Porque en la Biblia hebrea es otra profecía distinta.', ok: false, por_que: 'Es el mismo versículo, con otra numeración.' }
          ],
          explicacion: 'Joel 2:28 en la Reina-Valera es el capítulo 3, versículo 1, en la Biblia hebrea. El texto no cambia; cambia la división.'
        } }
      ],
      pensar: 'Dios prometió derramar su Espíritu sobre hijos e hijas, ancianos y jóvenes (Jl 2:28). ¿Has pedido tú esa promesa para tu vida? ¿Por quién de tu familia podrías orar para que la reciba?'
    },
    {
      id: 'seguir', n: 'Cómo seguir', ref: 'Salmo 119:97; 2 Timoteo 3:16-17',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 119:97', ref: 'Salmo 119:97', he: 'מָה־אָהַבְתִּי תוֹרָתֶךָ כָּל־הַיּוֹם הִיא שִׂיחָתִי׃', tr: 'Ma-ahavti torateja! Kol-hayom hi sijatí.',
          palabras: P(['מָה־אָהַבְתִּי', 'תוֹרָתֶךָ', 'כָּל־הַיּוֹם', 'הִיא', 'שִׂיחָתִי'], [['ma-ahavti', '¡cuánto amo!'], ['torateja', 'tu ley'], ['kol-hayom', 'todo el día'], ['hi', 'ella (es)'], ['sijatí', 'mi meditación']]),
          rv: '¡Oh, cuánto amo yo tu ley! Todo el día es ella mi meditación.' },
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Herramientas para seguir',
          cab: ['Herramienta', 'Para qué sirve'],
          filas: [
            ['El vocabulario de este recurso', 'Una lección de 25 palabras por semana, hasta las 751'],
            ['Interlineal hebreo–español', 'Recurso siguiente del sitio: cada palabra hebrea con su análisis y su glosa en español'],
            ['Concordancia con números de Strong', 'Encontrar todas las veces que aparece una palabra hebrea'],
            ['Un diccionario de hebreo bíblico', 'Ver todos los sentidos de una palabra; en español, el de Luis Alonso Schökel'],
            ['Una Biblia hebrea', 'Leer el texto masorético; la edición de estudio más usada es la Biblia Hebraica Stuttgartensia'],
          ],
          nota: 'Repasa cada semana una estación de este recurso mientras avanzas en el vocabulario.'
        } }
      ],
      texto: [
        'Has llegado al final del recurso. Empezaste con cuatro palabras del Salmo 119:18 que no podías explicar, y ahora puedes analizar un versículo como el Salmo 119:97 casi por tu cuenta.',
        { h: 'Un último análisis' },
        'Inténtalo. מָה־אָהַבְתִּי: el interrogativo מָה, que en las exclamaciones significa «¡cuánto!», y un perfecto qal de primera persona de אָהַב, «amar», que con verbos de sentimiento se traduce en presente: «¡cuánto amo!». תוֹרָתֶךָ: תּוֹרָה con el sufijo «tu». כָּל־הַיּוֹם: constructo de כֹּל con el artículo, «todo el día». הִיא: el pronombre «ella», sujeto de una oración nominal. Y שִׂיחָתִי: un sustantivo femenino con el sufijo «mi», «mi meditación». «¡Oh, cuánto amo yo tu ley! Todo el día es ella mi meditación».',
        { h: 'Lo que viene' },
        'El paso siguiente en el sitio es el Interlineal hebreo–español, que pone cada palabra del texto hebreo junto a su análisis y su glosa. Con lo que aprendiste aquí puedes entender lo que el interlineal te muestra y usarlo con criterio. Y sigue con el vocabulario: una lección por semana, en voz alta, con la práctica.',
        { ir: { t: 'Abrir el Interlineal hebreo–español', a: '../../interlineal-hebreo/' } },
        { ir: { t: 'Abrir el vocabulario', a: 'vocabulario/' } },
        { h: 'El propósito' },
        'Recuerda por qué empezaste. El hebreo no es un fin en sí mismo ni un adorno para la predicación. Es una ayuda para escuchar con más atención lo que Dios dijo. «Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra» (2 Ti 3:16-17). Que el estudio te lleve a amar la Palabra, como el salmista, y a vivirla.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } },
        { ejercicio: {
          pregunta: 'En מָה־אָהַבְתִּי, ¿por qué el perfecto אָהַבְתִּי se traduce en presente, «amo»?',
          opciones: [
            { t: 'Porque con verbos de sentimiento o de conocimiento el perfecto expresa un estado presente.', ok: true, por_que: 'Como יָדַעְתִּי, «sé», el perfecto de אָהַב presenta un amor ya establecido que sigue vigente.' },
            { t: 'Porque el perfecto siempre es presente.', ok: false, por_que: 'El perfecto suele traducirse en pasado. Con algunos verbos de estado se traduce en presente.' },
            { t: 'Porque la מָה lo convierte en futuro.', ok: false, por_que: 'מָה es «¡cuánto!» en la exclamación; no cambia el aspecto del verbo.' }
          ],
          explicacion: 'Perfecto de un verbo de estado: el estado ya existe y sigue. «¡Cuánto amo!».'
        } }
      ],
      pensar: '«¡Oh, cuánto amo yo tu ley! Todo el día es ella mi meditación» (Sal 119:97). ¿Qué paso concreto vas a dar este mes para que la Palabra sea tu meditación de cada día?'
    }
  ];

  const G = window.__GRAM;
  delete window.__GRAM;
  window.RUTA_DATA = {
    titulo: 'Vocabulario y gramática básica del hebreo bíblico',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0); frecuencias y números de Strong de la morfología y el léxico de Open Scriptures.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Vocabulario y gramática', n: 'I. Panorama', info: 'Cómo funciona el hebreo: raíces, clases de palabras, orden y frecuencia', estaciones: G.panorama },
      { id: 'sustantivo', grupo: 'Vocabulario y gramática', n: 'II. El sustantivo y sus compañeros', info: 'Género y número, artículo, preposiciones, adjetivo, constructo, pronombres, sufijos y números', estaciones: G.sustantivo },
      { id: 'verbo', grupo: 'Vocabulario y gramática', n: 'III. El verbo', info: 'Perfecto (qatal), imperfecto (yiqtol), vav consecutiva, mandatos, participio, infinitivo y los siete binyanim', estaciones: G.verbo },
      { id: 'palabras', grupo: 'Vocabulario y gramática', n: 'IV. Palabras clave de la fe', info: 'Diez palabras hebreas estudiadas sin caer en los errores comunes', estaciones: G.palabras },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Seis pasajes famosos, forma por forma', estaciones: taller }
    ]
  };
})();
