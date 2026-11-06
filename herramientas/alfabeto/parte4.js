/* El alfabeto hebreo y la lectura · ruta IV. A leer (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;

  const leer = [
    {
      id: 'silabas', n: 'Sílabas y acento', ref: 'Génesis 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'Sílabas', tabla: {
          titulo: 'Palabras divididas en sílabas',
          cab: ['Palabra', 'Sílabas', 'Se lee', 'Acento'],
          filas: [
            ['בָּרָא', 'בָּ · רָא', 'ba-rá', 'Última sílaba'],
            ['אֱלֹהִים', 'אֱ · לֹ · הִים', 'E-lo-him', 'Última sílaba'],
            ['שָׁלוֹם', 'שָׁ · לוֹם', 'sha-lom', 'Última sílaba'],
            ['מִזְמוֹר', 'מִז · מוֹר', 'miz-mor', 'Última sílaba'],
            ['מֶלֶךְ', 'מֶ · לֶךְ', 'mé-lej', 'Penúltima sílaba'],
            ['הַשָּׁמַיִם', 'הַ · שָּׁ · מַ · יִם', 'ha-sha-má-yim', 'Penúltima sílaba'],
          ],
          nota: 'Toda sílaba hebrea empieza con una consonante. La única excepción es la vav que significa «y» cuando suena u (וּ).'
        } },
        { tipo: 'hebreo', titulo: 'Con acentos', ref: 'Génesis 1:1', he: '@@wlca:gn/1/1', tr: 'Los acentos masoréticos marcan, entre otras cosas, la sílaba acentuada de cada palabra.', rv: '@@gn/1/1' }
      ],
      texto: [
        'Ya conoces las letras y las vocales. Para leer con soltura falta un paso: agruparlas en sílabas. El hebreo tiene reglas sencillas que ayudan mucho.',
        { h: 'Toda sílaba empieza con consonante' },
        'En hebreo, cada sílaba empieza con una consonante, y cada consonante con vocal abre una sílaba. Por eso אֱלֹהִים se divide E-lo-him: la álef con su vocal, la lámed con la suya y la he con la suya, más la mem final que cierra. Aunque la álef no suene, cuenta como la consonante que abre la primera sílaba.',
        'Una sílaba puede terminar en vocal (abierta), como בָּ en בָּרָא, o en consonante (cerrada), como מִז en מִזְמוֹר. Una consonante sin vocal, con shevá que calla o al final de la palabra, cierra la sílaba anterior.',
        { h: '¿Dónde va el acento?' },
        'La mayoría de las palabras hebreas se acentúan en la última sílaba: ba-RÁ, sha-LOM, E-lo-HIM. Es lo contrario de lo que pasa con muchas palabras del español, así que conviene practicarlo.',
        'Hay un grupo importante que se acentúa en la penúltima sílaba: las palabras de dos sílabas con segol, como מֶלֶךְ (MÉ-lej), אֶרֶץ (É-rets) y לֶחֶם (LÉ-jem). También las palabras en dual o con la terminación -áyim, como שָׁמַיִם (sha-MÁ-yim) y מַיִם (MÁ-yim). En la transliteración de este recurso, la tilde te avisa cuando el acento no cae donde el español lo pondría.',
        { h: 'Los acentos del texto' },
        'En el segundo panel tienes Génesis 1:1 con todos los signos de los masoretas. Las pequeñas marcas que aparecen encima y debajo de las palabras, además de las vocales, son los acentos. Casi todos se escriben sobre la sílaba acentuada, así que también sirven para saber dónde cargar la voz. Los verás de nuevo en la estación «Signos que ayudan a leer».',
        { ejercicio: {
          pregunta: '¿Cómo se divide en sílabas y se acentúa שָׁלוֹם?',
          opciones: [
            { t: 'SHA-lom', ok: false, por_que: 'La división es correcta, pero el acento cae en la última sílaba, como en la mayoría de las palabras hebreas.' },
            { t: 'sha-LOM', ok: true, por_que: 'Dos sílabas: shin con qamets (sha) y lámed con jolem vav y mem final (lom). El acento va al final.' },
            { t: 'shal-om', ok: false, por_que: 'Toda sílaba hebrea empieza con consonante: la lámed abre la segunda sílaba, no cierra la primera.' }
          ],
          explicacion: 'Sha-LOM: dos sílabas, acento en la última.'
        } }
      ],
      pensar: 'Leer despacio, sílaba por sílaba, obliga a prestar atención a cada palabra. ¿Cómo podrías leer la Biblia en español con esa misma atención, sin apurarte?'
    },
    {
      id: 'nombres', n: 'Nombres que ya conoces', ref: 'Génesis 17:5; 21:6; 32:28; Mateo 1:21',
      visual: [
        { tipo: 'tabla', titulo: 'Nombres', tabla: {
          titulo: 'Nombres bíblicos en hebreo',
          cab: ['Hebreo', 'Se lee', 'En español', 'Relacionado con'],
          filas: [
            ['אָדָם', 'Adam', 'Adán', 'adamá, «tierra» (Gn 2:7)'],
            ['חַוָּה', 'Javá', 'Eva', 'jay, «viviente» (Gn 3:20)'],
            ['אַבְרָהָם', 'Avraham', 'Abraham', '«padre de muchedumbre» (Gn 17:5)'],
            ['יִצְחָק', 'Yitsjak', 'Isaac', '«reirá» (Gn 21:6)'],
            ['יַעֲקֹב', 'Yaakov', 'Jacob', 'akev, «talón» (Gn 25:26)'],
            ['יִשְׂרָאֵל', 'Yisrael', 'Israel', 'ha luchado con Dios (Gn 32:28)'],
            ['מֹשֶׁה', 'Moshé', 'Moisés', '«sacar» de las aguas (Éx 2:10)'],
            ['דָּוִד', 'David', 'David', 'probablemente «amado»'],
            ['שְׁלֹמֹה', 'Shelomó', 'Salomón', 'shalom, «paz»'],
            ['יְהוֹשֻׁעַ', 'Yehoshúa', 'Josué y Jesús', 'Jehová salva (Mt 1:21)'],
          ],
          nota: 'Toca «Ocultar ayudas» en la estación siguiente del taller para practicar sin la columna «Se lee».'
        } }
      ],
      texto: [
        'La mejor manera de ganar confianza es leer palabras que ya conoces. Los nombres bíblicos son ideales: sabes cómo deberían sonar, y puedes comprobar si los leíste bien. Tapa con la mano las columnas de la derecha e intenta leer cada nombre antes de mirar.',
        { h: 'Nombres con significado' },
        'En la Biblia, los nombres no son etiquetas: dicen algo de la persona o de lo que Dios hizo en su vida. Adán, אָדָם, se relaciona con אֲדָמָה, adamá, la tierra de la que fue formado. Eva, חַוָּה, Javá, fue llamada así «por cuanto ella era madre de todos los vivientes» (Gn 3:20). Isaac, יִצְחָק, significa «reirá», porque Sara dijo: «Dios me ha hecho reir» (Gn 21:6).',
        'A veces Dios mismo cambia un nombre para marcar una nueva etapa. Abram pasa a llamarse Abraham, «padre de muchedumbre de gentes» (Gn 17:5). Jacob, el que tomó el talón de su hermano, pasa a llamarse Israel después de luchar con Dios en Peniel (Gn 32:28).',
        { h: 'Por qué suenan distinto en español' },
        'Muchos nombres llegaron al español a través del griego y del latín, y en el camino cambiaron. Yitsjak se volvió Isaac, Moshé se volvió Moisés y Shelomó se volvió Salomón. El griego no tenía el sonido sh ni la jota, y agregaba terminaciones propias. Cuando leas en hebreo, no te sorprendas: la Biblia en español conserva la forma que nos llegó por la tradición, y el hebreo te muestra el sonido original.',
        { h: 'El nombre de Jesús' },
        'El último nombre de la tabla merece atención. יְהוֹשֻׁעַ, Yehoshúa, es el nombre de Josué, y significa «Jehová salva». En tiempos de Jesús se usaba mucho su forma breve, Yeshúa. Pasó al griego como Iesús y al español como Jesús. Por eso el ángel le dijo a José: «llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados» (Mt 1:21). El nombre ya anunciaba su misión.',
        { ejercicio: {
          pregunta: 'Lee esta palabra: מֹשֶׁה. ¿Qué nombre es?',
          opciones: [
            { t: 'Moshé, Moisés', ok: true, por_que: 'Mem con jolem (mo), shin con segol (she) y he final muda. Se lee Moshé.' },
            { t: 'Shalom, paz', ok: false, por_que: 'Shalom empieza con shin (שׁ). Esta palabra empieza con mem (מ).' },
            { t: 'Melej, rey', ok: false, por_que: 'Mélej termina en jaf final (ך). Esta palabra termina en he (ה).' }
          ],
          explicacion: 'מֹשֶׁה: mo-SHÉ. La he final no suena.'
        } }
      ],
      pensar: 'El nombre de Jesús significa Jehová salva, y en ningún otro nombre hay salvación (Hch 4:12). ¿Qué te dice tu propia vida sobre el nombre de Jesús?'
    },
    {
      id: 'espanol', n: 'Palabras hebreas en español', ref: 'Salmo 118:25; Isaías 7:14; Éxodo 16:31',
      visual: [
        { tipo: 'tabla', titulo: 'Palabras', tabla: {
          titulo: 'Del hebreo bíblico al español',
          cab: ['Hebreo', 'Se lee', 'En español', 'Significa'],
          filas: [
            ['אָמֵן', 'amén', 'amén', 'firme, cierto, así sea'],
            ['הַלְלוּ־יָהּ', 'halelu-Yah', 'aleluya', 'alabad a Jah'],
            ['הוֹשִׁיעָה נָּא', 'hoshía na', 'hosanna', 'salva ahora, te ruego'],
            ['עִמָּנוּ אֵל', 'imanu El', 'Emanuel', 'Dios con nosotros'],
            ['מָשִׁיחַ', 'mashíaj', 'Mesías', 'ungido'],
            ['שַׁבָּת', 'shabat', 'sábado', 'cese, reposo'],
            ['מָן', 'man', 'maná', '¿qué es esto?'],
            ['כְּרוּב', 'kerúv', 'querubín', 'querubín'],
            ['שְׂרָפִים', 'serafim', 'serafines', 'los que arden'],
            ['שָׂטָן', 'satán', 'Satanás', 'adversario'],
            ['עֵדֶן', 'éden', 'Edén', 'delicia'],
            ['יוֹבֵל', 'yovel', 'jubileo', 'año de liberación; cuerno de carnero'],
          ],
          nota: 'Varias de estas palabras llegaron al español a través del griego del Nuevo Testamento y del latín, por eso cambiaron un poco su forma.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 118:25', ref: 'Salmo 118:25', he: '@@wlc:sal/118/25', rv: '@@sal/118/25' }
      ],
      texto: [
        'Sin saberlo, ya usas palabras hebreas. Cada vez que dices amén o aleluya en la iglesia, hablas en la lengua del Antiguo Testamento. Leerlas ahora en su escritura original es una forma muy agradable de practicar.',
        { h: 'Palabras de la adoración' },
        'אָמֵן, amén, viene de una raíz que significa ser firme o seguro, la misma de la que salen «fe» y «verdad». Decir amén es decir «es cierto, así sea». En el Nuevo Testamento, Jesús empieza muchas de sus enseñanzas con un doble amén, que la Reina-Valera traduce «de cierto, de cierto». Y Pablo dice que todas las promesas de Dios son en Cristo «Amén» (2 Co 1:20).',
        'הַלְלוּ־יָהּ, halelu-Yah, une el verbo «alabad» con Yah, la forma breve del nombre de Dios. Aparece en los Salmos, sobre todo al final del libro, y pasó al Nuevo Testamento en el gran canto de Apocalipsis 19.',
        'Hosanna viene de הוֹשִׁיעָה נָּא, hoshía na, «salva ahora», del Salmo 118:25, que tienes en el panel. Las multitudes lo gritaron cuando Jesús entró en Jerusalén (Mt 21:9). Era un ruego que se había vuelto un grito de alabanza.',
        { h: 'Palabras de la historia de la salvación' },
        'מָשִׁיחַ, mashíaj, «ungido», pasó al español como Mesías; su traducción griega es Cristo. Emanuel, עִמָּנוּ אֵל, son dos palabras: imanu, «con nosotros», y El, «Dios» (Is 7:14; Mt 1:23). El maná, מָן, recibió su nombre de la pregunta de los israelitas cuando lo vieron por primera vez: «¿Qué es esto?» (Éx 16:15).',
        'Otras palabras describen el mundo espiritual: querubín y serafín son plurales hebreos en -im, y Satanás viene de שָׂטָן, satán, que significa adversario. Jubileo viene de יוֹבֵל, yovel, palabra relacionada con el cuerno de carnero (Jos 6:4) y que da nombre al año de liberación (Lv 25:10).',
        { ejercicio: {
          pregunta: '¿Qué significa la palabra hebrea detrás de «hosanna»?',
          opciones: [
            { t: 'Gloria a Dios en las alturas.', ok: false, por_que: 'Esa es otra alabanza, la de los ángeles en Belén.' },
            { t: 'Salva ahora, te ruego.', ok: true, por_que: 'Hoshía na, del Salmo 118:25: un ruego de salvación que el pueblo dirigió a Jesús.' },
            { t: 'Así sea.', ok: false, por_que: 'Ese es el sentido de amén.' }
          ],
          explicacion: 'Al gritar «hosanna», la multitud pedía al Hijo de David que trajera la salvación prometida.'
        } }
      ],
      pensar: 'Cada vez que dices amén, afirmas que lo que Dios dice es firme y verdadero. ¿Hay alguna promesa de Dios a la que te cuesta decir amén de corazón?'
    },
    {
      id: 'nombre-de-dios', n: 'El nombre de Dios: יהוה', ref: 'Éxodo 3:14-15; Génesis 15:2',
      visual: [
        { tipo: 'hebreo', titulo: 'Éxodo 3:15', ref: 'Éxodo 3:15', he: '@@wlc:ex/3/15', rv: '@@ex/3/15' },
        { tipo: 'tabla', titulo: 'Cómo se lee', tabla: {
          titulo: 'Cómo se lee el nombre de Dios en la Biblia hebrea',
          cab: ['Se escribe', 'Se lee', 'La Reina-Valera dice', 'Ejemplo'],
          filas: [
            ['יְהוָה', 'Adonái', 'Jehová', 'Éxodo 3:15'],
            ['אֲדֹנָי יֱהוִה', 'Adonái Elohim', 'Señor Jehová', 'Génesis 15:2'],
            ['יָהּ', 'Yah', 'JAH', 'Salmo 150:6'],
            ['אֲדֹנָי', 'Adonái', 'Señor', 'Isaías 6:1'],
          ],
          nota: 'Las vocales de יְהוָה no son las del nombre, sino una señal para leer «Adonái». Cuando el texto ya dice אֲדֹנָי al lado, el nombre lleva las vocales de Elohim.'
        } }
      ],
      texto: [
        'El nombre propio de Dios se escribe con cuatro consonantes: יהוה, yod, he, vav, he. Por eso se le llama tetragrámaton, «las cuatro letras». Aparece casi siete mil veces en el Antiguo Testamento. Dios lo reveló a Moisés junto a la zarza: «Este es mi nombre para siempre» (Éx 3:15), y está relacionado con el verbo «ser»: «YO SOY EL QUE SOY» (Éx 3:14).',
        { h: 'Un nombre que no se pronunciaba' },
        'Con el tiempo, por reverencia y para no tomar el nombre de Dios en vano (Éx 20:7), los judíos dejaron de pronunciarlo. Al leer en voz alta decían אֲדֹנָי, Adonái, «mi Señor». Cuando los masoretas pusieron las vocales, no escribieron las del nombre, que ya no se pronunciaba, sino las de la palabra que había que leer. Por eso en el texto aparece יְהוָה: las cuatro consonantes del nombre con las vocales de Adonái, como una nota que dice «lee Señor».',
        'La regla tiene un detalle curioso. Cuando el texto ya dice אֲדֹנָי junto al nombre, como en «Señor Jehová» (Gn 15:2), habría que decir «Adonái Adonái». Entonces los masoretas escribieron el nombre con las vocales de אֱלֹהִים, para que se leyera «Adonái Elohim»: יֱהוִה.',
        { h: '¿De dónde viene «Jehová»?' },
        'Algunos lectores cristianos de la Edad Media leyeron juntas las consonantes del nombre y las vocales de Adonái, y de esa combinación salió la forma Jehová. Casiodoro de Reina la usó en su traducción de 1569, y la Reina-Valera 1960 la conserva. Muchos estudiosos piensan que la pronunciación original se acercaba a Yahvé, aunque nadie puede asegurarlo. Este recurso, al transliterar el texto hebreo, escribe Adonái, que es como se lee en voz alta, y en la traducción mantiene Jehová, como la Reina-Valera.',
        { posturas: {
          titulo: '¿Jehová o Yahvé?',
          a: { n: 'Jehová', t: 'Es la forma de la Reina-Valera desde 1569 y la que reconocen los lectores hispanos. Combina las consonantes del nombre con las vocales que el texto hebreo trae escritas.' },
          b: { n: 'Yahvé', t: 'Es una reconstrucción académica de la pronunciación antigua, basada en la forma breve Yah y en testimonios de los primeros siglos. Varias traducciones modernas la usan.' },
          c: 'Las dos formas nombran al mismo Dios; la diferencia es de transcripción, no de doctrina. El Nuevo Testamento, al citar el Antiguo, traduce el nombre como «Señor» (Kyrios), y llama así también a Jesucristo (Fil 2:11).'
        } },
        { ir: { t: 'Ver «Jehová, Yo soy el que soy» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#nombres/2' } },
        { ejercicio: {
          pregunta: '¿Por qué el nombre יְהוָה lleva en la Biblia hebrea las vocales de Adonái?',
          opciones: [
            { t: 'Porque así se pronunciaba el nombre en tiempos de Moisés.', ok: false, por_que: 'Las vocales no son las del nombre: son una señal para leer «Adonái» en su lugar.' },
            { t: 'Para indicar al lector que, en lugar del nombre, debía leer «Adonái», Señor.', ok: true, por_que: 'Los masoretas escribieron las vocales de la palabra que se leía en voz alta, por reverencia al nombre.' },
            { t: 'Porque Adonái y el nombre de Dios son la misma palabra.', ok: false, por_que: 'Son palabras distintas: Adonái significa «mi Señor», y el nombre se relaciona con el verbo «ser».' }
          ],
          explicacion: 'Consonantes del nombre, vocales de Adonái: el texto conserva el nombre y, a la vez, indica cómo leerlo con reverencia.'
        } }
      ],
      pensar: 'Israel temía tanto usar en vano el nombre de Dios que dejó de pronunciarlo. ¿Cómo honras tú el nombre de Dios en tu manera de hablar, de orar y de vivir?'
    },
    {
      id: 'signos', n: 'Signos que ayudan a leer', ref: 'Génesis 1:1; Deuteronomio 6:4; Isaías 6:3',
      visual: [
        { tipo: 'tabla', titulo: 'Signos', tabla: {
          titulo: 'Signos que conviene reconocer',
          cab: ['Signo', 'Nombre', 'Para qué sirve'],
          filas: [
            ['׃', 'Sof pasuq', 'Marca el final del versículo, como un punto final'],
            ['־', 'Maqaf', 'Une dos palabras que se leen como una sola, como un guion'],
            ['אֱלֹהִ֑ים', 'Atnaj', 'Divide el versículo en dos mitades, como un punto y coma (aquí, bajo la he de Elohim)'],
            ['הָאָֽרֶץ', 'Silúq', 'Va en la última palabra del versículo, en la sílaba acentuada (aquí, bajo la álef)'],
            ['פ ס', 'Petujá y setumá', 'Marcan el fin de un párrafo en algunas Biblias hebreas'],
          ],
          nota: 'El texto de este recurso conserva el sof pasuq y el maqaf, y omite los acentos salvo en esta estación y en la de las sílabas.'
        } },
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:4', ref: 'Deuteronomio 6:4', he: '@@wlca:dt/6/4', tr: 'Shemá Yisrael, Adonái Eloheinu, Adonái ejad.', rv: '@@dt/6/4' },
        { tipo: 'hebreo', titulo: 'Isaías 6:3', ref: 'Isaías 6:3', he: '@@wlca:is/6/3', rv: '@@is/6/3' }
      ],
      texto: [
        'Además de las vocales, los masoretas pusieron en el texto un sistema completo de acentos. Son unos treinta signos distintos que cumplen tres funciones: marcan la sílaba acentuada, indican la melodía con que se canta el texto en la sinagoga y señalan las pausas, como hacen nuestras comas y puntos. Para empezar a leer no necesitas aprenderlos todos, pero sí reconocer algunos.',
        { h: 'Fin del versículo y unión de palabras' },
        'El sof pasuq (׃), dos puntos uno sobre otro, cierra cada versículo. Lo has visto al final de todos los textos de este recurso. El maqaf (־) es una rayita alta que une dos palabras que se pronuncian juntas, con un solo acento, como en אֶת־הָאָדָם o en הַלְלוּ־יָהּ.',
        { h: 'Las dos mitades del versículo' },
        'El acento más útil para el lector es el atnaj (ב֑), que parece una pequeña ve invertida bajo una sílaba. Divide el versículo en dos mitades, y la división casi siempre coincide con el sentido. En Génesis 1:1 está bajo אֱלֹהִים: «En el principio creó Dios» | «los cielos y la tierra». En el panel lo tienes en Deuteronomio 6:4, bajo יִשְׂרָאֵל: «Oye, Israel» | «Jehová nuestro Dios, Jehová uno es». La última palabra del versículo lleva el silúq, una rayita vertical bajo la sílaba acentuada.',
        { h: 'Una ayuda para interpretar' },
        'Los acentos son la interpretación más antigua que conservamos de cómo se leía cada versículo. No son inspirados como el texto, pero muestran cómo la comunidad que lo transmitía entendía sus pausas. Los traductores los tienen en cuenta, aunque a veces deciden puntuar de otra manera. Los verás mencionados en comentarios sobre pasajes como Isaías 40:3, donde la pausa decide si «en el desierto» va con la voz que clama o con el camino que se prepara.',
        { h: 'Cuando el texto se canta' },
        'En las sinagogas, la Escritura no se recita en tono plano: se canta siguiendo la melodía que indican los acentos. Es probable que la lectura pública ya se entonara así, de algún modo, en las reuniones donde se leían la ley y los profetas, como la de Nazaret en Lucas 4:16-17.',
        { ejercicio: {
          pregunta: '¿Qué indica el signo ׃ al final de una línea hebrea?',
          opciones: [
            { t: 'Que la palabra se lee dos veces.', ok: false, por_que: 'No hay un signo de repetición: ׃ es el sof pasuq.' },
            { t: 'El final del versículo.', ok: true, por_que: 'Sof pasuq significa «fin del versículo». Funciona como nuestro punto final.' },
            { t: 'Que falta una vocal.', ok: false, por_que: 'Las vocales son puntos debajo, encima o dentro de las letras. El sof pasuq va después de la última palabra.' }
          ],
          explicacion: 'Sof pasuq (׃): fin del versículo. Atnaj (ב֑): mitad del versículo. Maqaf (־): une palabras.'
        } }
      ],
      pensar: 'El atnaj divide el Shemá en dos partes: «Oye, Israel» y lo que Israel debe oír. ¿Qué tan dispuesto está tu corazón a oír antes de hablar cuando lees la Palabra?'
    },
    {
      id: 'prefijos', n: 'Letras que se pegan al comienzo', ref: 'Salmo 119:9; Génesis 1:1; Éxodo 20:2',
      visual: [
        { tipo: 'tabla', titulo: 'Prefijos', tabla: {
          titulo: 'Seis prefijos frecuentes',
          cab: ['Prefijo', 'Significa', 'Ejemplo', 'Se lee'],
          filas: [
            ['וְ', 'y', 'וְאֵת', 've-et'],
            ['בְּ', 'en, con', 'בְּרֵאשִׁית', 'be-reshit, en el principio'],
            ['כְּ', 'como, conforme a', 'כִּדְבָרֶךָ', 'ki-dvareja, conforme a tu palabra'],
            ['לְ', 'a, para, de', 'לְדָוִד', 'le-david, de David'],
            ['הַ', 'el, la, los, las', 'הַשָּׁמַיִם', 'ha-shamáyim, los cielos'],
            ['מִ / מֵ', 'de, desde', 'מֵאֶרֶץ', 'me-érets, de la tierra'],
          ],
          nota: 'Las terminaciones de las palabras (mi, tu, su, nuestro) y la gramática se estudian en el recurso siguiente, Vocabulario y gramática básica del hebreo bíblico.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 119:9', ref: 'Salmo 119:9', he: '@@wlc:sal/119/9', tr: 'Bamé yezaké-náar et-orjó? Lishmor kidvareja.',
          palabras: P('@@wlcp:sal/119/9', [['bamé', '¿con qué?'], ['yezaké-náar', 'limpiará el joven'], ['et-orjó', 'su camino'], ['lishmor', 'guardando'], ['kidvareja', 'conforme a tu palabra']]),
          rv: '@@sal/119/9' }
      ],
      texto: [
        'Si buscas en un diccionario la palabra בְּרֵאשִׁית, no la vas a encontrar así. Está formada por dos partes: בְּ, «en», y רֵאשִׁית, «principio». En hebreo, varias palabras pequeñas no se escriben aparte, sino pegadas al comienzo de la palabra siguiente. Reconocerlas es el primer paso para usar un diccionario o un interlineal.',
        { h: 'Las seis más frecuentes' },
        'En el panel tienes las seis. Cuatro llevan normalmente shevá: וְ («y»), בְּ («en»), כְּ («como») y לְ («a», «para»). El artículo הַ («el», «la») lleva pataj y, casi siempre, duplica la letra siguiente con un dagesh: por eso הַשָּׁמַיִם tiene un punto dentro de la shin. La preposición מִ («de», «desde») también suele duplicar la letra siguiente o, ante una gutural, se vuelve מֵ, como en מֵאֶרֶץ, «de la tierra» (Éx 20:2).',
        'A veces cambia la vocal del prefijo para facilitar la pronunciación. Delante de otra letra con shevá, el shevá del prefijo se vuelve jireq: כִּדְבָרֶךָ (kidvareja) y לִשְׁמֹר (lishmor). Y la vav «y» se lee u delante de algunas letras: וּבְכָל, uvjol, «y con todo».',
        { h: 'Pueden juntarse' },
        'Una palabra puede llevar más de un prefijo. וּבְכָל son tres partes: וּ («y»), בְ («con») y כָל («todo»). Al leer, sepáralas mentalmente de derecha a izquierda: primero el prefijo, después la palabra.',
        { h: 'Practica con el Salmo 119:9' },
        'El panel trae la primera línea de la estrofa de la bet: «¿Con qué limpiará el joven su camino? Con guardar tu palabra». Busca en la última palabra el prefijo כִּ, «conforme a», y en לִשְׁמֹר el prefijo לִ, «para». Después oculta las ayudas y léela sin mirar.',
        { ejercicio: {
          pregunta: 'En la palabra לְדָוִד, que aparece en el título de muchos salmos, ¿qué significa la primera letra?',
          opciones: [
            { t: 'Es parte del nombre: el rey se llamaba Ledavid.', ok: false, por_que: 'El nombre es דָּוִד, David. La lámed del comienzo es un prefijo.' },
            { t: '«De» o «para»: el salmo es de David o dedicado a él.', ok: true, por_que: 'La lámed pegada al comienzo significa «a», «para» o «de». La Reina-Valera traduce «Salmo de David».' },
            { t: '«Y»: el salmo es de David y de otro autor.', ok: false, por_que: 'El prefijo «y» es la vav (וְ), no la lámed (לְ).' }
          ],
          explicacion: 'לְ + דָוִד: «de David». Separar el prefijo te permite encontrar la palabra en un diccionario.'
        } }
      ],
      pensar: '«¿Con qué limpiará el joven su camino? Con guardar tu palabra» (Sal 119:9). ¿Qué palabra de Dios necesitas guardar hoy para mantener limpio tu camino?'
    },
    {
      id: 'pronunciacion', n: 'La pronunciación antigua y la de hoy', ref: 'Jueces 12:6; Nehemías 13:24',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres tradiciones de lectura',
          cab: ['Palabra', 'Israelí (este recurso)', 'Asquenazí', 'Qué cambia'],
          filas: [
            ['שַׁבָּת', 'shabat', 'shabos', 'La tav sin punto suena s'],
            ['אֱמֶת', 'emet', 'emes', 'La tav sin punto suena s'],
            ['בְּרֵאשִׁית', 'bereshit', 'bereishis', 'El tsere suena ei'],
          ],
          nota: 'La pronunciación asquenazí es la de los judíos de Europa central y oriental. La israelí se basa en la sefardí, de los judíos de España y del Mediterráneo.'
        } },
        { tipo: 'tabla', titulo: 'Antes y hoy', tabla: {
          titulo: 'Sonidos del hebreo antiguo que hoy se pronuncian igual',
          cab: ['Letras', 'Hoy', 'En la antigüedad'],
          filas: [
            ['ח / כ', 'Las dos suenan j', 'La jet era una h fuerte de la garganta, distinta de la jaf'],
            ['ע / א', 'Las dos son mudas', 'La áyin era un sonido de garganta propio'],
            ['ט / ת', 'Las dos suenan t', 'La tet era una t enfática, pronunciada más atrás'],
            ['ק / כּ', 'Las dos suenan k', 'La qof era una k enfática, más profunda'],
            ['ו', 'v', 'Probablemente w, como en «huevo»'],
            ['גּ ג / דּ ד / תּ ת', 'Sin diferencia', 'Con y sin punto tenían sonidos distintos'],
          ],
          nota: 'La pronunciación antigua se reconstruye por las transcripciones griegas, los sonidos de las lenguas hermanas y las reglas de la gramática. No es segura en todos los detalles.'
        } }
      ],
      texto: [
        'Si alguna vez escuchas leer hebreo bíblico, puede que no suene igual que en este recurso. Hay varias tradiciones de pronunciación, y ninguna es más espiritual que otra. Todas leen las mismas letras con las mismas vocales; cambian algunos sonidos.',
        { h: 'Tres tradiciones' },
        'La pronunciación israelí, la que usa este recurso, se basa en la sefardí, la de los judíos que vivieron en España hasta 1492 y después se dispersaron por el Mediterráneo. Es la que se habla hoy en Israel y la que enseñan la mayoría de los institutos bíblicos y seminarios.',
        'La pronunciación asquenazí, de los judíos de Europa central y oriental, pronuncia la tav sin punto como s y cambia algunas vocales: por eso a veces oirás «shabos» en lugar de shabat. La tradición de los judíos de Yemen conserva varios sonidos antiguos de garganta que las otras perdieron.',
        { h: 'Cómo sonaba en tiempos bíblicos' },
        'El hebreo que hablaban David o Isaías tenía sonidos que hoy se confunden: la jet y la jaf eran distintas, la áyin tenía un sonido propio, y la tet y la qof se pronunciaban de manera enfática. El segundo panel resume esas diferencias. Los estudiosos las reconstruyen comparando el hebreo con las lenguas hermanas y con la forma en que los traductores griegos escribieron los nombres propios.',
        { h: 'Las diferencias ya estaban en la Biblia' },
        'La Biblia misma muestra que no todos los israelitas pronunciaban igual. Los efrateos decían sibólet en lugar de shibólet (Jue 12:6). Siglos después, Nehemías se lamentó porque los hijos de los matrimonios con mujeres de Asdod «no sabían hablar judaico» (Neh 13:24): la lengua del pueblo de Dios se estaba perdiendo en sus propias casas.',
        { h: 'Para qué sirve saberlo' },
        'Para leer y estudiar, basta con elegir una pronunciación y ser constante. Lo que importa no es sonar como un antiguo israelita, sino leer bien las letras y entender las palabras. Conocer las otras tradiciones te ayudará a no confundirte cuando las encuentres en un libro, una canción o un video.',
        { ejercicio: {
          pregunta: 'Si escuchas a alguien leer שַׁבָּת como «shabos», ¿qué está pasando?',
          opciones: [
            { t: 'Está leyendo mal: confunde la tav con la sámej.', ok: false, por_que: 'No es un error de lectura: es la tradición asquenazí, que pronuncia la tav sin punto como s.' },
            { t: 'Usa la pronunciación asquenazí, que pronuncia como s la tav sin punto.', ok: true, por_que: 'Es una tradición de lectura antigua y respetable, distinta de la israelí que usa este recurso.' },
            { t: 'Está leyendo otra palabra con otro significado.', ok: false, por_que: 'Es la misma palabra, sábado, con otra pronunciación.' }
          ],
          explicacion: 'Las tradiciones de lectura difieren en algunos sonidos, no en el texto.'
        } }
      ],
      pensar: 'Nehemías se dolió de que los niños no supieran hablar la lengua de su pueblo, en la que oían la ley de Dios. ¿Qué estás haciendo para que la Palabra de Dios sea la «lengua materna» de los niños de tu casa y de tu iglesia?'
    }
  ];

  window.__ALEF.leer = leer;
})();
