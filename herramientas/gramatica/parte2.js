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
        { tipo: 'hebreo', titulo: 'Génesis 1:10', ref: 'Génesis 1:10', he: '@@wlc:gn/1/10', tr: 'Vayikrá Elohim layabashá érets ulemikvé hamáyim kará yamim, vayar Elohim ki-tov.',
          palabras: P('@@wlcp:gn/1/10', [['vayikrá', 'y llamó'], ['Elohim', 'Dios'], ['layabashá', 'a lo seco'], ['érets', 'tierra'], ['ulemikvé', 'y a la reunión de'], ['hamáyim', 'las aguas'], ['kará', 'llamó'], ['yamim', 'mares'], ['vayar', 'y vio'], ['Elohim', 'Dios'], ['ki-tov', 'que era bueno']]),
          rv: '@@gn/1/10' }
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
        { tipo: 'hebreo', titulo: 'Salmo 121:1', ref: 'Salmo 121:1', he: '@@wlc:sal/121/1', tr: 'Shir lamaalot. Esá enái el-heharim, meáyin yavó ezrí?',
          palabras: P('@@wlcp:sal/121/1', [['shir', 'cántico'], ['lamaalot', 'de las subidas (gradual)'], ['esá', 'alzaré'], ['enái', 'mis ojos'], ['el-heharim', 'a los montes'], ['meáyin', '¿de dónde?'], ['yavó', 'vendrá'], ['ezrí', 'mi socorro']]),
          rv: '@@sal/121/1' },
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
        { tipo: 'hebreo', titulo: 'Génesis 1:5', ref: 'Génesis 1:5', he: '@@wlc:gn/1/5', tr: 'Vayikrá Elohim laor yom velajóshej kará láyla, vayehí-érev vayehí-vóker yom ejad.',
          palabras: P('@@wlcp:gn/1/5', [['vayikrá', 'y llamó'], ['Elohim', 'Dios'], ['laor', 'a la luz'], ['yom', 'día'], ['velajóshej', 'y a las tinieblas'], ['kará', 'llamó'], ['láyla', 'noche'], ['vayehí-érev', 'y fue la tarde'], ['vayehí-vóker', 'y fue la mañana'], ['yom', 'día'], ['ejad', 'uno']]),
          rv: '@@gn/1/5' },
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
        { tipo: 'hebreo', titulo: 'Salmo 121:2', ref: 'Salmo 121:2', he: '@@wlc:sal/121/2', tr: 'Ezrí meim Adonái, osé shamáyim vaárets.',
          palabras: P('@@wlcp:sal/121/2', [['ezrí', 'mi socorro'], ['meim', 'de junto a'], ['Adonái', 'Jehová'], ['osé', 'que hace (hacedor de)'], ['shamáyim', 'cielos'], ['vaárets', 'y tierra']]),
          rv: '@@sal/121/2' },
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
        { tipo: 'hebreo', titulo: 'Génesis 2:15', ref: 'Génesis 2:15', he: '@@wlc:gn/2/15', tr: 'Vayikaj Adonái Elohim et-haadam vayaníjehu veGan-Éden leovdá uleshomrá.',
          palabras: P('@@wlcp:gn/2/15', [['vayikaj', 'y tomó'], ['Adonái', 'Jehová'], ['Elohim', 'Dios'], ['et-haadam', '(objeto) al hombre'], ['vayaníjehu', 'y lo puso'], ['veGan-Éden', 'en el huerto de Edén'], ['leovdá', 'para labrarlo'], ['uleshomrá', 'y para guardarlo']]),
          rv: '@@gn/2/15' },
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
        { tipo: 'hebreo', titulo: 'Génesis 1:4', ref: 'Génesis 1:4', he: '@@wlc:gn/1/4', tr: 'Vayar Elohim et-haor ki-tov, vayavdel Elohim bein haor uvein hajóshej.',
          palabras: P('@@wlcp:gn/1/4', [['vayar', 'y vio'], ['Elohim', 'Dios'], ['et-haor', '(objeto) la luz'], ['ki-tov', 'que (era) buena'], ['vayavdel', 'y separó'], ['Elohim', 'Dios'], ['bein', 'entre'], ['haor', 'la luz'], ['uvein', 'y entre'], ['hajóshej', 'las tinieblas']]),
          rv: '@@gn/1/4' },
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
        { tipo: 'hebreo', titulo: 'Salmo 19:7', ref: 'Salmo 19:7', he: '@@wlc:sal/19/8', tr: 'Torat Adonái temimá meshivat náfesh, edut Adonái neemaná majkimat péti.',
          palabras: P('@@wlcp:sal/19/8', [['torat', 'la ley de'], ['Adonái', 'Jehová'], ['temimá', '(es) perfecta'], ['meshivat', 'que hace volver'], ['náfesh', 'el alma'], ['edut', 'el testimonio de'], ['Adonái', 'Jehová'], ['neemaná', '(es) fiel'], ['majkimat', 'que hace sabio'], ['péti', 'al sencillo']]),
          rv: '@@sal/19/7' },
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
        { tipo: 'hebreo', titulo: 'Éxodo 20:2', ref: 'Éxodo 20:2', he: '@@wlc:ex/20/2', tr: 'Anojí Adonái Eloheja, asher hotsetija meérets Mitsráyim mibet avadim.',
          palabras: P('@@wlcp:ex/20/2', [['anojí', 'yo'], ['Adonái', 'Jehová'], ['Eloheja', 'tu Dios'], ['asher', 'que'], ['hotsetija', 'te saqué'], ['meérets', 'de la tierra de'], ['Mitsráyim', 'Egipto'], ['mibet', 'de la casa de'], ['avadim', 'esclavos']]),
          rv: '@@ex/20/2' },
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
        { tipo: 'hebreo', titulo: 'Rut 1:16', ref: 'Rut 1:16', he: '@@wlc:rt/1/16', tr: 'Vatómer Rut: al-tifgueí-vi leozvej lashuv meajaráyij, ki el-asher teljí elej, uvaasher taliní alin, amej amí, veloháyij Elohái.',
          palabras: P('@@wlcp:rt/1/16', [['vatómer', 'y dijo'], ['Rut', 'Rut'], ['al-tifgueí-vi', 'no me ruegues'], ['leozvej', 'que te deje'], ['lashuv', 'que vuelva'], ['meajaráyij', 'de detrás de ti'], ['ki', 'porque'], ['el-asher', 'adonde'], ['teljí', 'tú vayas'], ['elej', 'iré'], ['uvaasher', 'y donde'], ['taliní', 'tú pases la noche'], ['alin', 'pasaré la noche'], ['amej', 'tu pueblo'], ['amí', 'mi pueblo'], ['veloháyij', 'y tu Dios'], ['Elohái', 'mi Dios']]),
          rv: '@@rt/1/16' },
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
        { tipo: 'hebreo', titulo: 'Génesis 4:9', ref: 'Génesis 4:9', he: '@@wlc:gn/4/9', tr: 'Vayómer Adonái el-Káyin: ei Hével ajija? Vayómer: lo yadati; hashomer ají anojí?',
          palabras: P('@@wlcp:gn/4/9', [['vayómer', 'y dijo'], ['Adonái', 'Jehová'], ['el-Káyin', 'a Caín'], ['ei', '¿dónde?'], ['Hével', 'Abel'], ['ajija', 'tu hermano'], ['vayómer', 'y dijo'], ['lo', 'no'], ['yadati', 'sé'], ['hashomer', '¿(soy) guarda?'], ['ají', 'de mi hermano'], ['anojí', 'yo']]),
          rv: '@@gn/4/9' },
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
        { tipo: 'hebreo', titulo: 'Génesis 5:5', ref: 'Génesis 5:5', he: '@@wlc:gn/5/5', tr: 'Vayihyú kol-yemé Adam asher-jay tsha meot shaná ushloshim shaná, vayamot.',
          palabras: P('@@wlcp:gn/5/5', [['vayihyú', 'y fueron'], ['kol-yemé', 'todos los días de'], ['Adam', 'Adán'], ['asher-jay', 'que vivió'], ['tsha', 'nueve'], ['meot', 'cientos'], ['shaná', 'año'], ['ushloshim', 'y treinta'], ['shaná', 'año'], ['vayamot', 'y murió']]),
          rv: '@@gn/5/5' },
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
