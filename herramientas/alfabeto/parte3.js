/* El alfabeto hebreo y la lectura · ruta III. Las vocales (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;

  const vocales = [
    {
      id: 'masoretas', n: 'Los masoretas y sus puntos', ref: 'Romanos 3:2; Nehemías 8:8',
      fecha: 930,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/masoreta.webp', alt: 'Un escriba masoreta de Tiberíades, en el siglo X, agrega con una pluma fina pequeños puntos debajo de las letras hebreas de un códice de pergamino, junto a una ventana que da al mar de Galilea', pie: 'Los masoretas agregaron las vocales sin cambiar ni una consonante del texto recibido.', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Códice de Alepo', src: '../de-la-biblia-a-nosotros/img/codice-alepo.webp', alt: 'Página del Códice de Alepo con el comienzo del libro de Josué en tres columnas de texto hebreo con puntos vocálicos y notas en los márgenes', pie: 'Códice de Alepo, hacia el año 930: comienzo de Josué. Los puntos de las vocales se ven debajo y encima de las letras.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Códice de Leningrado', src: 'img/codice-leningrado.jpg', alt: 'Una página del Códice de Leningrado, del año 1008, con columnas de texto hebreo con vocales y acentos y notas masoréticas en los márgenes', pie: 'Códice de Leningrado (1008), folio 371b: Salmos 32:10–34:23. Es la Biblia hebrea completa más antigua que se conserva entera, y su texto es el que muestra este recurso.', origen: 'foto', licencia: 'Dominio público; escaneo de USC Dornsife, vía Wikimedia Commons', completa: true },
        { tipo: 'hebreo', titulo: 'Con y sin vocales', ref: 'Génesis 1:1', he: 'בראשית ברא אלהים את השמים ואת הארץ', tr: 'Así se escribe en un rollo de la ley: solo consonantes. Compáralo con el texto con puntos de la primera estación.', rv: '@@gn/1/1' }
      ],
      texto: [
        'Durante siglos, el texto hebreo se copió solo con consonantes. Cuando el hebreo dejó de hablarse en la vida diaria, la pronunciación tradicional corría el riesgo de perderse. Entre los siglos VII y X después de Cristo, unos escribas judíos llamados masoretas, de la palabra masorá, «tradición», idearon un sistema de puntos y rayitas para ponerla por escrito.',
        { h: 'Vocales alrededor de las letras' },
        'El sistema tenía una condición: no se podía tocar el texto recibido. Por eso las vocales no son letras nuevas, sino signos que se escriben debajo, encima o dentro de las consonantes. Se agregaron alrededor de las letras, como quien anota la música de un himno sin cambiar ninguna palabra.',
        'Hubo varios sistemas, en Babilonia y en la tierra de Israel, pero el que se impuso fue el de los masoretas de Tiberíades, a orillas del mar de Galilea. La familia más conocida fue la de Ben Asher. El Códice de Alepo, vocalizado hacia el año 930, y el Códice de Leningrado, copiado en 1008, siguen esa tradición. El texto hebreo de este recurso viene del Códice de Leningrado.',
        { h: 'Tres clases de signos' },
        'Los masoretas pusieron tres clases de signos. Los puntos vocálicos indican las vocales. Los acentos indican la sílaba que se acentúa, la melodía con que se cantaba el texto en la sinagoga y las pausas dentro del versículo (los verás en la ruta IV). Y en los márgenes escribieron notas que cuentan palabras y advierten formas raras, para que nadie cambiara el texto al copiarlo.',
        'Este recurso muestra el texto con las vocales y sin los acentos, que son muchos y distraen al principio. Es como se imprimen muchos libros para aprender hebreo.',
        { h: 'Lo que se aprende en esta ruta' },
        'En la pronunciación israelí, que usa este recurso, el hebreo tiene cinco sonidos de vocal, igual que el español: a, e, i, o, u. La buena noticia es que no necesitas aprender cinco vocales nuevas, sino reconocer los signos que las representan. Hay más signos que sonidos, porque los masoretas también marcaban diferencias de duración que hoy no se pronuncian.',
        { ir: { t: 'Ver «El Texto Masorético» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#antiguo/2' } },
        { ejercicio: {
          pregunta: '¿Qué hicieron los masoretas con el texto consonántico que habían recibido?',
          opciones: [
            { t: 'Lo reescribieron con un alfabeto nuevo que incluía vocales.', ok: false, por_que: 'El alfabeto siguió siendo el mismo. Las vocales se agregaron como signos aparte.' },
            { t: 'Lo dejaron intacto y agregaron puntos y signos alrededor de las letras.', ok: true, por_que: 'Por eso las vocales hebreas son puntos y rayitas, no letras: no querían alterar las consonantes.' },
            { t: 'Corrigieron las palabras que les parecían equivocadas.', ok: false, por_que: 'Cuando algo les parecía extraño, lo dejaban como estaba y anotaban en el margen cómo debía leerse.' }
          ],
          explicacion: 'Las consonantes son el texto recibido; los puntos son la lectura tradicional escrita alrededor de ellas.'
        } }
      ],
      pensar: 'Los masoretas dedicaron su vida a que el texto no perdiera ni una letra ni su lectura. ¿Qué te dice su ejemplo sobre el valor que tú le das a la Palabra de Dios?'
    },
    {
      id: 'a-e', n: 'Los sonidos a y e', ref: 'Génesis 1:1; Juan 3:8',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Vocales que suenan a y e (con la letra bet)',
          cab: ['Signo', 'Nombre', 'Suena', 'Ejemplo'],
          filas: [
            ['בַ', 'Pataj: una raya bajo la letra', 'a', 'בַּיִת (báyit), casa'],
            ['בָ', 'Qamets: una pequeña te bajo la letra', 'a (a veces o)', 'דָּבָר (davar), palabra'],
            ['בֵ', 'Tsere: dos puntos lado a lado', 'e', 'בֵּן (ben), hijo'],
            ['בֶ', 'Segol: tres puntos en triángulo', 'e', 'מֶלֶךְ (mélej), rey'],
            ['בֵי', 'Tsere con yod', 'e', 'בֵּית (beit), casa de'],
          ],
          nota: 'La vocal se pronuncia después de la consonante que la lleva: בַ es «ba», no «ab».'
        } },
        { tipo: 'hebreo', titulo: 'Leer', ref: 'Génesis 1:1', he: 'בָּרָא · מֶלֶךְ · אֶרֶץ · הָאָרֶץ · שָׁמַיִם', tr: 'bará · mélej · érets · haárets · shamáyim', rv: 'creó · rey · tierra · la tierra · cielos' }
      ],
      texto: [
        'Empecemos con los signos que suenan a y e. En el panel están escritos debajo de la letra bet, para que veas dónde se ubican. Una regla vale para todas las vocales: la vocal se pronuncia después de la consonante que la lleva. בָ es «ba», בֵ es «be».',
        { h: 'Para el sonido a: pataj y qamets' },
        'El pataj es una rayita horizontal bajo la letra (בַ). El qamets es una rayita con una patita hacia abajo, como una te pequeña (בָ). En la pronunciación israelí, los dos suenan a. La palabra בָּרָא, bará, «creó», tiene dos qamets; שָׁמַיִם, shamáyim, «cielos», tiene un qamets y un pataj.',
        'El qamets tiene una excepción que verás en la estación de las vocales i, o, u: en algunas sílabas suena o. Por ahora, léelo como a.',
        { h: 'Para el sonido e: tsere y segol' },
        'El tsere son dos puntos uno al lado del otro (בֵ). El segol son tres puntos en triángulo, con la punta hacia abajo (בֶ). Los dos suenan e. Muchas palabras hebreas de dos sílabas llevan dos segol seguidos y se acentúan en la primera sílaba: מֶלֶךְ, mélej, «rey»; אֶרֶץ, érets, «tierra»; לֶחֶם, léjem, «pan».',
        'Cuando el tsere va seguido de una yod, la yod no suena: solo ayuda a leer la vocal. Así se escribe בֵּית, «casa de», que verás en nombres como Betel (casa de Dios) o Belén (casa del pan). En el hebreo israelí, esta combinación suena a veces como «ei».',
        { h: 'Una a que se adelanta' },
        'Al final de algunas palabras que terminan en jet (ח) o áyin (ע), el pataj se pronuncia antes de la consonante, no después: רוּחַ se lee rúaj, no ruja. Es una pequeña a que se desliza para facilitar la pronunciación de la gutural. Lo mismo ocurre en מָשִׁיחַ, mashíaj, «Mesías», y en יְהוֹשֻׁעַ, Yehoshúa, Josué. Los gramáticos lo llaman pataj furtivo.',
        { ejercicio: {
          pregunta: '¿Cómo se lee מֶלֶךְ?',
          opciones: [
            { t: 'mélej', ok: true, por_que: 'Mem con segol (me), lámed con segol (le) y jaf final (j). Se acentúa en la primera sílaba.' },
            { t: 'malaj', ok: false, por_que: 'Los tres puntos en triángulo son segol, que suena e, no a.' },
            { t: 'emlej', ok: false, por_que: 'La vocal se lee después de la consonante que la lleva: me, no em.' }
          ],
          explicacion: 'Mélej, «rey». Dos segol seguidos: una palabra acentuada en la primera sílaba.'
        } }
      ],
      pensar: 'La palabra rúaj significa viento, aliento y espíritu. Jesús comparó al Espíritu con el viento (Jn 3:8). ¿Qué evidencias de la obra del Espíritu Santo has visto en tu vida, aunque no puedas verlo a Él?'
    },
    {
      id: 'i-o-u', n: 'Los sonidos i, o y u', ref: 'Deuteronomio 6:4; Salmo 23:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Vocales que suenan i, o y u (con la letra bet)',
          cab: ['Signo', 'Nombre', 'Suena', 'Ejemplo'],
          filas: [
            ['בִ', 'Jireq: un punto bajo la letra', 'i', 'אֱלֹהִים (Elohim), Dios'],
            ['בִי', 'Jireq con yod', 'i', 'נָבִיא (naví), profeta'],
            ['בֹ', 'Jolem: un punto arriba, a la izquierda', 'o', 'אֱלֹהִים (Elohim), Dios'],
            ['בוֹ', 'Jolem con vav', 'o', 'שָׁלוֹם (shalom), paz'],
            ['בֻ', 'Qibuts: tres puntos en diagonal', 'u', 'שֻׁלְחָן (shuljan), mesa'],
            ['בוּ', 'Shuruq: vav con un punto en el medio', 'u', 'רוּחַ (rúaj), espíritu'],
            ['בָ', 'Qamets que suena o (qamets jatuf)', 'o', 'כָּל (kol), todo'],
          ],
          nota: 'Cuando la vav lleva un punto encima o dentro (וֹ, וּ), es una vocal y no suena v.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 23:1', ref: 'Salmo 23:1', he: '@@wlc:sal/23/1', tr: 'Mizmor ledavid. Adonái roí, lo ejsar.',
          palabras: P('@@wlcp:sal/23/1', [['mizmor', 'salmo'], ['ledavid', 'de David'], ['Adonái', 'Jehová'], ['roí', 'mi pastor'], ['lo', 'no'], ['ejsar', 'me faltará']]),
          rv: '@@sal/23/1' }
      ],
      texto: [
        { h: 'El sonido i: jireq' },
        'El jireq es un solo punto debajo de la letra (בִ) y suena i. A menudo va seguido de una yod que no suena, solo refuerza la vocal: נָבִיא, naví, «profeta». La palabra אֱלֹהִים, Elohim, termina con jireq, yod y mem final: «-im».',
        { h: 'El sonido o: jolem' },
        'El jolem es un punto arriba, en la esquina izquierda de la letra (בֹ), y suena o. Muchas veces se escribe sobre una vav (וֹ), que entonces deja de ser consonante y se vuelve vocal: שָׁלוֹם, shalom. En אֱלֹהִים, el punto sobre la lámed es un jolem: E-lo-him.',
        { h: 'El sonido u: qibuts y shuruq' },
        'El qibuts son tres puntos en diagonal debajo de la letra (בֻ). El shuruq es una vav con un punto en el medio (וּ). Los dos suenan u: שֻׁלְחָן, shuljan, «mesa», y רוּחַ, rúaj, «espíritu».',
        { h: 'La vav: ¿consonante o vocal?' },
        'La vav tiene tres usos, y el punto te dice cuál es. Sin punto, o con una vocal debajo, es la consonante v: דָּוִד, David. Con un punto encima, es la vocal o: וֹ. Con un punto dentro, es la vocal u: וּ. Mira bien dónde está el punto antes de leer.',
        { h: 'Cuando el qamets suena o' },
        'El qamets (בָ) suena a casi siempre, pero en una sílaba cerrada que no lleva el acento suena o. Se llama entonces qamets jatuf, «qamets breve». El caso más frecuente es la palabra כָּל, kol, «todo», y también חָכְמָה, jojmá, «sabiduría». Las Biblias para estudiantes a veces lo marcan con un signo especial; si dudas, el diccionario te dirá cómo se lee.',
        'En el panel tienes el Salmo 23:1, que en hebreo incluye el título: «Salmo de David». Busca el jireq de מִזְמוֹר (mizmor) y el jolem con vav de la misma palabra; el jolem de רֹעִי (roí), y el de לֹא (lo).',
        { ejercicio: {
          pregunta: '¿Cómo suena la vav en la palabra רוּחַ?',
          opciones: [
            { t: 'Como v: «rvaj».', ok: false, por_que: 'La vav tiene un punto en el medio. Así no es consonante, sino la vocal u.' },
            { t: 'Como u: «rúaj».', ok: true, por_que: 'Vav con punto en el medio es shuruq, la vocal u. La palabra se lee rúaj.' },
            { t: 'Como o: «róaj».', ok: false, por_que: 'Para sonar o, el punto debería estar encima de la vav (וֹ), no en el medio.' }
          ],
          explicacion: 'Vav con punto encima: o. Vav con punto en medio: u. Vav sin punto: v.'
        } }
      ],
      pensar: '«Jehová es mi pastor; nada me faltará» (Sal 23:1). En hebreo son apenas cuatro palabras después del título. ¿Qué parte de tu vida necesita hoy descansar en el cuidado del Pastor?'
    },
    {
      id: 'sheva', n: 'El shevá: una e muy breve, o silencio', ref: 'Deuteronomio 6:4; Números 6:24',
      visual: [
        { tipo: 'tabla', titulo: 'Reglas', tabla: {
          titulo: 'Cuándo suena el shevá (בְ)',
          cab: ['Dónde está', 'Cómo se lee', 'Ejemplo'],
          filas: [
            ['Bajo la primera letra de la palabra', 'Suena: e muy breve', 'בְּרֵאשִׁית (bereshit), שְׁמַע (shemá)'],
            ['Dos shevá seguidos en medio de la palabra', 'El primero calla, el segundo suena', 'וְיִשְׁמְרֶךָ (ve-yish-me-re-ja)'],
            ['En medio de la palabra, después de una vocal breve', 'Calla: cierra la sílaba', 'מִזְמוֹר (miz-mor), יִשְׂרָאֵל (Yis-ra-el)'],
            ['Al final de la palabra', 'Calla', 'מֶלֶךְ (mélej)'],
          ],
          nota: 'Las gramáticas dan reglas más precisas. Para empezar a leer, estas cuatro bastan en la gran mayoría de los casos.'
        } },
        { tipo: 'hebreo', titulo: 'Números 6:24', ref: 'Números 6:24', he: '@@wlc:nm/6/24', tr: 'Yevarejejá Adonái veyishmereja.',
          palabras: P('@@wlcp:nm/6/24', [['yevarejejá', 'te bendiga'], ['Adonái', 'Jehová'], ['veyishmereja', 'y te guarde']]),
          rv: '@@nm/6/24' }
      ],
      texto: [
        'El shevá son dos puntos uno sobre otro, debajo de la letra (בְ). Es el signo más frecuente del texto hebreo, y el único que a veces suena y a veces no. Cuando suena, es una e muy breve, casi un suspiro. Cuando calla, indica que la consonante no tiene vocal y se une a la sílaba anterior.',
        { h: 'Al comienzo de la palabra, suena' },
        'Si el shevá está bajo la primera letra de la palabra, siempre suena: בְּרֵאשִׁית, bereshit; שְׁמַע, shemá («oye»); דְּבַר, devar («palabra de»). En el habla rápida de Israel, a veces esa e casi desaparece, pero al leer la Biblia conviene pronunciarla.',
        'Lo mismo ocurre con las palabras pequeñas que se pegan al comienzo: וְ (ve, «y»), בְּ (be, «en»), לְ (le, «a», «para»), כְּ (ke, «como»). Todas llevan shevá y todas suenan con e breve.',
        { h: 'En medio y al final, casi siempre calla' },
        'En medio de la palabra, el shevá suele cerrar la sílaba: מִזְמוֹר se lee miz-mor, no mi-ze-mor. Al final de la palabra siempre calla; por eso la jaf final de מֶלֶךְ lleva shevá y se lee solo j.',
        'Cuando hay dos shevá seguidos en medio de la palabra, el primero cierra la sílaba anterior y el segundo abre la siguiente, así que suena. Míralo en el panel, en וְיִשְׁמְרֶךָ: ve-yish-me-re-ja, «y te guarde». El shevá de la vav inicial suena (ve), el de la shin calla (yish) y el de la mem suena (me).',
        { h: 'Practica despacio' },
        'Lee en el panel la primera línea de la bendición sacerdotal. Primero, con las ayudas; después, tócalas para ocultarlas y léela de nuevo. Fíjate en el shevá de יְבָרֶכְךָ: el de la yod inicial suena (ye) y el de la jaf del medio calla (rej). Se lee ye-va-rej-já.',
        { ejercicio: {
          pregunta: 'En שְׁמַע (oye), ¿cómo se pronuncia el shevá de la shin?',
          opciones: [
            { t: 'Calla: se lee «shma».', ok: false, por_que: 'En hebreo moderno a veces se oye así, pero la regla es que el shevá de la primera letra suena.' },
            { t: 'Suena como una e breve: se lee «shemá».', ok: true, por_que: 'Está bajo la primera letra de la palabra, así que suena. Es la primera palabra del Shemá, la confesión de fe de Israel.' },
            { t: 'Suena como una a larga: «shamá».', ok: false, por_que: 'El shevá nunca suena a. Cuando suena, es una e muy breve.' }
          ],
          explicacion: 'Shevá al comienzo de la palabra: suena. Shevá al final de la sílaba: calla.'
        } }
      ],
      pensar: '«Jehová te bendiga, y te guarde» (Nm 6:24). Dios mismo puso estas palabras en boca de los sacerdotes para bendecir a su pueblo. ¿A quién podrías bendecir hoy con la Palabra de Dios?'
    },
    {
      id: 'jatef', n: 'Las vocales breves de las guturales', ref: 'Génesis 1:1; Éxodo 20:2',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Las tres vocales reducidas (jatef)',
          cab: ['Signo', 'Nombre', 'Suena', 'Ejemplo'],
          filas: [
            ['אֲ', 'Jatef pataj: shevá + pataj', 'a breve', 'אֲנִי (aní), yo'],
            ['אֱ', 'Jatef segol: shevá + segol', 'e breve', 'אֱלֹהִים (Elohim), Dios'],
            ['אֳ', 'Jatef qamets: shevá + qamets', 'o breve', 'חֳדָשִׁים (jodashim), meses'],
          ],
          nota: 'Las cuatro letras guturales son א ה ח ע. A veces la resh (ר) se comporta como ellas.'
        } },
        { tipo: 'hebreo', titulo: 'Éxodo 20:2', ref: 'Éxodo 20:2', he: '@@wlc:ex/20/2', rv: '@@ex/20/2' }
      ],
      texto: [
        'Cuatro letras se pronunciaban en la garganta: álef (א), he (ה), jet (ח) y áyin (ע). Se llaman guturales. Estas letras no se llevan bien con el shevá simple. Cuando les tocaría un shevá que suena, llevan en su lugar un shevá combinado con otra vocal, y la vocal se pronuncia breve.',
        { h: 'Tres vocales compuestas' },
        'Estas vocales se llaman jatef, «apresurada». Son tres, y cada una se forma poniendo el shevá a la derecha de una vocal que ya conoces. El jatef pataj (בֲ) suena a breve: אֲנִי, aní, «yo». El jatef segol (בֱ) suena e breve: אֱלֹהִים, Elohim, «Dios». El jatef qamets (בֳ) suena o breve: חֳדָשִׁים, jodashim, «meses».',
        'Para leer basta saber que se pronuncian como la vocal que acompaña al shevá. La diferencia de duración no se nota en la pronunciación de hoy.',
        { h: 'Palabras muy frecuentes' },
        'Algunas de las palabras más frecuentes de la Biblia empiezan con jatef: אֱלֹהִים (Elohim, «Dios»), אֲשֶׁר (asher, «que», «el cual»), אֲדֹנָי (Adonái, «Señor»), אֲנִי (aní, «yo»). Si las reconoces, leerás muchísimos versículos con más soltura.',
        'En el panel tienes Éxodo 20:2, el comienzo de los diez mandamientos: «Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto». Busca el jatef pataj de אֲשֶׁר y el de עֲבָדִים (avadim, «siervos»), bajo la áyin. Y fíjate en אֱלֹהֶיךָ, Eloheja, «tu Dios», con jatef segol bajo la álef.',
        { h: 'Las guturales y la pronunciación de hoy' },
        'En el hebreo israelí, la álef y la áyin son mudas, y la he suena suave. Solo la jet conserva un sonido fuerte, como nuestra jota. Por eso, al leer, las guturales se notan menos por su sonido que por las vocales que las acompañan.',
        { ejercicio: {
          pregunta: '¿Cómo se lee אֲנִי (yo)?',
          opciones: [
            { t: 'aní', ok: true, por_que: 'La álef es muda y lleva jatef pataj (a breve); la nun lleva jireq con yod (i). Se lee aní.' },
            { t: 'ení', ok: false, por_que: 'El signo bajo la álef tiene una raya junto al shevá: es jatef pataj, que suena a.' },
            { t: 'ni, porque la álef no suena', ok: false, por_que: 'La álef no tiene sonido propio, pero su vocal sí se pronuncia: a.' }
          ],
          explicacion: 'Álef muda + jatef pataj = a. Nun + jireq + yod = ni. Aní.'
        } }
      ],
      pensar: '«Yo soy Jehová tu Dios, que te saqué» (Éx 20:2). Los mandamientos empiezan recordando lo que Dios ya hizo por su pueblo. ¿Cómo cambia tu obediencia cuando la ves como respuesta a la salvación que Dios te dio?'
    },
    {
      id: 'ayudan', n: 'Letras que ayudan a leer', ref: '1 Samuel 16:13; 1 Crónicas 11:1; Jeremías 26:18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres consonantes que marcan vocales',
          cab: ['Letra', 'Marca la vocal', 'Ejemplo'],
          filas: [
            ['ה', 'a o e al final de la palabra', 'תּוֹרָה (Torá), שָׂדֶה (sadé), campo'],
            ['ו', 'o (וֹ) o u (וּ)', 'שָׁלוֹם (shalom), רוּחַ (rúaj)'],
            ['י', 'i (ִי) o e (ֵי)', 'נָבִיא (naví), בֵּית (beit)'],
          ],
          nota: 'Estas letras ya se usaban antes de que existieran los puntos. Se las llama madres de lectura (en latín, matres lectionis).'
        } },
        { tipo: 'tabla', titulo: 'David', tabla: {
          titulo: 'Dos maneras de escribir el nombre de David',
          cab: ['Grafía', 'Dónde aparece', 'Se lee'],
          filas: [
            ['דָּוִד', 'Samuel, Reyes, Salmos y la mayoría de los libros', 'David'],
            ['דָּוִיד', 'Sobre todo en Crónicas; también en Esdras, Nehemías, Zacarías y unos pocos pasajes más', 'David'],
          ],
          nota: 'La segunda grafía agrega una yod que marca la i. Es una costumbre de escritura más tardía, no un error.'
        } }
      ],
      texto: [
        'Antes de los puntos de los masoretas, los escribas ya tenían una ayuda para la lectura. Usaban tres consonantes, ה, ו y י, para indicar algunas vocales, sobre todo las largas y las del final de palabra. Se llaman madres de lectura: letras que se escriben, pero que en esa posición no suenan como consonante, sino que señalan una vocal.',
        { h: 'Cómo reconocerlas' },
        'La he al final de la palabra casi siempre marca una a o una e: תּוֹרָה, Torá; שָׂדֶה, sadé, «campo». La vav con un punto encima o dentro marca o o u. La yod después de un jireq o de un tsere marca i o e: נָבִיא, naví; בֵּית, beit. En esos casos, la letra no se pronuncia aparte: lees solo la vocal.',
        { h: 'Escritura plena y escritura breve' },
        'Con el tiempo, los escribas fueron usando cada vez más estas letras. Por eso la Biblia hebrea escribe algunas palabras de dos maneras: con la madre de lectura (escritura plena) o sin ella (escritura breve). El ejemplo más claro es el nombre de David, que en el panel aparece con sus dos grafías. En los libros más antiguos se escribe דָּוִד, y en los libros escritos después del exilio, como Crónicas, suele escribirse דָּוִיד, con una yod que marca la i.',
        'El nombre de Jerusalén muestra lo mismo. En casi toda la Biblia se escribe sin la yod de la última sílaba, יְרוּשָׁלִַם, y los masoretas agregaron una vocal para que se lea Yerushaláyim. Solo en cuatro pasajes aparece con la yod, como en Jeremías 26:18: וִירוּשָׁלַיִם, «y Jerusalén».',
        'Estas diferencias son una huella de la historia de la lengua y de los copistas, que respetaron la forma en que cada libro se había escrito. No cambian ni la lectura ni el sentido.',
        { h: 'Una ayuda para ti también' },
        'Si algún día lees hebreo sin vocales, como en un rollo de la ley o en el hebreo moderno impreso, las madres de lectura serán tu principal ayuda. Por eso conviene acostumbrarse a verlas desde ahora.',
        { ejercicio: {
          pregunta: 'En שָׁלוֹם (shalom), ¿suena la vav como consonante?',
          opciones: [
            { t: 'Sí: se lee «shalvom».', ok: false, por_que: 'La vav tiene un punto encima: es la vocal o, no la consonante v.' },
            { t: 'No: con el punto encima marca la vocal o, y se lee shalom.', ok: true, por_que: 'Es una madre de lectura: la vav sostiene el jolem y no suena como v.' },
            { t: 'No suena nada: se lee «shalm».', ok: false, por_que: 'La vav no suena como v, pero marca la vocal o, que sí se pronuncia.' }
          ],
          explicacion: 'Las madres de lectura (ה, ו, י) marcan vocales: no se pronuncian como consonantes en esa posición.'
        } }
      ],
      pensar: 'Los copistas respetaron incluso la forma en que cada libro escribía el nombre de David. ¿Qué te enseña ese respeto por el texto sobre la manera en que debemos acercarnos a la Biblia, sin quitarle ni agregarle (Dt 4:2)?'
    },
    {
      id: 'dagesh', n: 'El punto dentro de la letra', ref: 'Génesis 1:1; Salmo 150:6; Éxodo 20:8',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El punto dentro de la letra',
          cab: ['Signo', 'Nombre', 'Qué hace', 'Ejemplo'],
          filas: [
            ['בּ כּ פּ', 'Dagesh suave', 'Cambia el sonido: b, k, p (sin punto: v, j, f)', 'בַּיִת (báyit), כֹּהֵן (kohén), פֶּה (pe)'],
            ['גּ דּ תּ', 'Dagesh suave', 'En la pronunciación de hoy no cambia el sonido', 'דָּוִד (David), תּוֹרָה (Torá)'],
            ['שּׁ מּ', 'Dagesh fuerte', 'Duplica la consonante; hoy casi no se oye', 'הַשָּׁמַיִם (hashamáyim), שַׁבָּת (shabat)'],
            ['הּ', 'Mapiq', 'La he final suena', 'יָהּ (Yah)'],
            ['וּ', 'Shuruq', 'No es dagesh: es la vocal u', 'רוּחַ (rúaj)'],
          ],
          nota: 'Las seis letras que pueden cambiar de sonido se recuerdan con la palabra begadkefat: ב ג ד כ פ ת.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 150:6', ref: 'Salmo 150:6', he: '@@wlc:sal/150/6', tr: 'Kol haneshamá tehalel Yah. Haleluyá.',
          palabras: P('@@wlcp:sal/150/6', [['kol', 'todo'], ['haneshamá', 'lo que respira'], ['tehalel', 'alabe'], ['Yah', 'a Jah'], ['halelu-Yah', 'alabad a Jah']]),
          rv: '@@sal/150/6' }
      ],
      texto: [
        'A veces verás un punto dentro de una letra. Se llama dagesh, y puede hacer dos cosas distintas. No te preocupes por distinguirlas a la perfección: para leer en voz alta, lo importante es saber en qué letras cambia el sonido.',
        { h: 'El dagesh suave: tres letras cambian' },
        'Seis letras podían tener dos sonidos: ב ג ד כ פ ת. Los gramáticos las recuerdan con la palabra begadkefat. Con el punto dentro tenían un sonido duro, y sin el punto, uno suave. En el hebreo israelí solo se nota la diferencia en tres de ellas, que ya conoces: בּ b y ב v; כּ k y כ j; פּ p y פ f. En las otras tres, guímel, dálet y tav, el punto no cambia nada: suenan g, d y t de todas formas.',
        'Ese punto aparece sobre todo al comienzo de una palabra o de una sílaba que sigue a una consonante sin vocal. Por eso בְּרֵאשִׁית empieza con b, y por eso בַּיִת, «casa», empieza con b, pero לְבָבְךָ («tu corazón») tiene v.',
        { h: 'El dagesh fuerte: una letra doble' },
        'Cuando el punto aparece después de una vocal, en cualquier letra que no sea gutural, indica que la consonante se duplica. En הַשָּׁמַיִם, «los cielos», la shin lleva dagesh porque el artículo duplica la letra siguiente: en la pronunciación antigua sonaba hash-shamáyim. En שַׁבָּת, «sábado», la bet doble era shab-bat. Hoy esa duplicación casi no se oye, pero a veces queda en la transliteración, como en las dos enes de «hosanna».',
        { h: 'El mapiq: una he que suena' },
        'La he final suele ser muda. Si lleva un punto dentro (הּ), se pronuncia. El caso más conocido es יָהּ, Yah, la forma breve del nombre de Dios. En el panel la tienes dos veces en el último versículo del libro de los Salmos. La segunda está en הַלְלוּ־יָהּ, «alabad a Jah», de donde viene nuestro «aleluya».',
        { h: 'No confundir' },
        'La vav con un punto en el medio (וּ) no es una vav con dagesh, sino la vocal u. Si la letra anterior no tiene vocal, lee u.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la letra פ sin punto dentro, como en סֵפֶר (libro)?',
          opciones: [
            { t: 'p', ok: false, por_que: 'La p necesita el punto dentro (פּ).' },
            { t: 'f', ok: true, por_que: 'Sin dagesh, la pe suena f. Por eso se lee séfer.' },
            { t: 'Igual con o sin punto, como la dálet.', ok: false, por_que: 'En el hebreo de hoy, solo bet, kaf y pe cambian de sonido con el punto. Dálet, guímel y tav no cambian.' }
          ],
          explicacion: 'Con punto: b, k, p. Sin punto: v, j, f.'
        } }
      ],
      pensar: '«Todo lo que respira alabe a JAH. Aleluya» (Sal 150:6). El libro de los Salmos termina en alabanza. ¿Qué lugar ocupa la alabanza, no solo la petición, en tu oración diaria?'
    }
  ];

  window.__ALEF.vocales = vocales;
})();
