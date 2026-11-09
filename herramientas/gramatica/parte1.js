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
        { tipo: 'hebreo', titulo: 'Salmo 119:18', ref: 'Salmo 119:18', he: '@@wlc:sal/119/18', tr: 'Gal-enái veabíta niflaot mitorateja.',
          palabras: P('@@wlcp:sal/119/18', [['gal-enái', 'descubre mis ojos'], ['veabíta', 'y miraré'], ['niflaot', 'maravillas'], ['mitorateja', 'de tu ley']]),
          rv: '@@sal/119/18' },
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
        { tipo: 'hebreo', titulo: 'Salmo 27:1', ref: 'Salmo 27:1', he: '@@wlc:sal/27/1', tr: 'LeDavid. Adonái orí veyishí, mimí irá? Adonái maoz-jayái, mimí efjad?',
          palabras: P('@@wlcp:sal/27/1', [['leDavid', 'de David'], ['Adonái', 'Jehová'], ['orí', 'mi luz'], ['veyishí', 'y mi salvación'], ['mimí', '¿de quién?'], ['irá', 'temeré'], ['Adonái', 'Jehová'], ['maoz-jayái', 'la fortaleza de mi vida'], ['mimí', '¿de quién?'], ['efjad', 'me atemorizaré']]),
          rv: '@@sal/27/1' },
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
        { tipo: 'hebreo', titulo: 'Génesis 1:27', ref: 'Génesis 1:27', he: '@@wlc:gn/1/27', tr: 'Vayivrá Elohim et-haadam betsalmó, betsélem Elohim bará otó, zajar unekevá bará otam.',
          palabras: P('@@wlcp:gn/1/27', [['vayivrá', 'y creó'], ['Elohim', 'Dios'], ['et-haadam', '(objeto) al hombre'], ['betsalmó', 'a su imagen'], ['betsélem', 'a imagen'], ['Elohim', 'de Dios'], ['bará', 'creó'], ['otó', 'a él (lo)'], ['zajar', 'varón'], ['unekevá', 'y hembra'], ['bará', 'creó'], ['otam', 'a ellos (los)']]),
          rv: '@@gn/1/27' },
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
