/* El alfabeto hebreo y la lectura · Taller práctico y armado de RUTA_DATA (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;

  const taller = [
    {
      id: 'genesis', n: 'Génesis 1:1, palabra por palabra', ref: 'Génesis 1:1; Juan 1:1-3',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:1', ref: 'Génesis 1:1', he: '@@wlc:gn/1/1', tr: 'Bereshit bará Elohim et hashamáyim veet haárets.',
          palabras: P('@@wlcp:gn/1/1', [['bereshit', 'en el principio'], ['bará', 'creó'], ['Elohim', 'Dios'], ['et', '(marca del objeto)'], ['hashamáyim', 'los cielos'], ['veet', 'y (marca del objeto)'], ['haárets', 'la tierra']]),
          rv: '@@gn/1/1' },
        { tipo: 'tabla', titulo: 'Paso a paso', tabla: {
          titulo: 'Cómo leer cada palabra',
          cab: ['Palabra', 'Letras y vocales', 'Sílabas'],
          filas: [
            ['בְּרֵאשִׁית', 'bet con dagesh y shevá · resh con tsere · álef muda · shin con jireq · yod (ayuda) · tav', 'be-re-SHIT'],
            ['בָּרָא', 'bet con qamets · resh con qamets · álef muda', 'ba-RÁ'],
            ['אֱלֹהִים', 'álef con jatef segol · lámed con jolem · he con jireq · yod (ayuda) · mem final', 'e-lo-HIM'],
            ['אֵת', 'álef con tsere · tav', 'ET'],
            ['הַשָּׁמַיִם', 'artículo ha · shin con dagesh y qamets · mem con pataj · yod con jireq · mem final', 'ha-sha-MÁ-yim'],
            ['וְאֵת', 'vav «y» con shevá · álef con tsere · tav', 've-ET'],
            ['הָאָרֶץ', 'artículo ha · álef con qamets · resh con segol · tsade final', 'ha-Á-rets'],
          ],
          nota: 'Delante de la álef, que no puede duplicarse, el artículo lleva qamets en lugar de pataj: הָאָרֶץ.'
        } }
      ],
      texto: [
        'Ha llegado el momento de leer un versículo entero. Empezamos por el primero de la Biblia, el que viste en la primera estación de este recurso. Sigue estos cinco pasos, y repítelos en cada versículo del taller.',
        { h: 'Cinco pasos para leer' },
        'Primero, ubica el comienzo: la palabra de la derecha. Segundo, identifica las consonantes de la palabra, una por una. Tercero, mira las vocales y los puntos de cada consonante. Cuarto, arma las sílabas y busca el acento, que casi siempre está al final. Quinto, lee la palabra entera en voz alta, y solo entonces pasa a la siguiente.',
        'La tabla del segundo panel hace este trabajo con las siete palabras de Génesis 1:1. Léela con calma, y después vuelve al primer panel e intenta leer el versículo completo. Cuando te salga, toca «Ocultar ayudas» y léelo de nuevo, solo con el hebreo.',
        { h: 'Lo que se ve en hebreo' },
        'El versículo tiene siete palabras, y muchos lectores han notado que el número siete marca todo el relato de la creación, que termina en el séptimo día. Pero hay algo más sencillo y más importante. El verbo בָּרָא, «crear», en la forma que usa este versículo tiene siempre a Dios como sujeto en toda la Biblia: solo Dios crea en este sentido. Y la palabra אֵת, que no se traduce, señala el complemento: los cielos y la tierra, es decir, todo lo que existe.',
        'Juan empezó su evangelio con las mismas palabras: «En el principio era el Verbo… Todas las cosas por él fueron hechas» (Jn 1:1-3). El Hijo de Dios estaba allí, en el principio, como Creador.',
        { ejercicio: {
          pregunta: '¿Cuál de estas palabras del versículo lleva el artículo «el», «la» o «los»?',
          opciones: [
            { t: 'בָּרָא', ok: false, por_que: 'Bará, «creó», es un verbo. No lleva artículo.' },
            { t: 'הַשָּׁמַיִם', ok: true, por_que: 'Empieza con הַ, el artículo, y por eso la shin lleva dagesh: hashamáyim, «los cielos».' },
            { t: 'אֱלֹהִים', ok: false, por_que: 'Elohim empieza con álef y jatef segol. Es un nombre sin artículo.' }
          ],
          explicacion: 'הַ + שָּׁמַיִם: «los cielos». Lo mismo en הָאָרֶץ, «la tierra», con qamets delante de la álef.'
        } },
        { ejercicio: {
          pregunta: '¿Cómo se lee la primera palabra, בְּרֵאשִׁית?',
          opciones: [
            { t: 'bereshit', ok: true, por_que: 'Bet con dagesh (b) y shevá que suena (e), resh con tsere (re), álef muda, shin con jireq (shi) y tav (t).' },
            { t: 'vreshit', ok: false, por_que: 'La bet tiene un punto dentro: suena b, no v. Y el shevá al comienzo de la palabra suena.' },
            { t: 'barashit', ok: false, por_que: 'Los dos puntos verticales bajo la bet son un shevá (e breve), y los dos horizontales bajo la resh, un tsere (e).' }
          ],
          explicacion: 'Be-re-SHIT: «en el principio».'
        } }
      ],
      pensar: 'La Biblia empieza con Dios, no con el ser humano: «En el principio creó Dios». ¿Qué cambia en tu manera de ver el mundo, y de verte a ti mismo, cuando empiezas por Dios?'
    },
    {
      id: 'shema', n: 'El Shemá: Deuteronomio 6:4-5', ref: 'Deuteronomio 6:4-5; Marcos 12:29-30',
      visual: [
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:4', ref: 'Deuteronomio 6:4', he: '@@wlc:dt/6/4', tr: 'Shemá Yisrael, Adonái Eloheinu, Adonái ejad.',
          palabras: P('@@wlcp:dt/6/4', [['shemá', 'oye'], ['Yisrael', 'Israel'], ['Adonái', 'Jehová'], ['Eloheinu', 'nuestro Dios'], ['Adonái', 'Jehová'], ['ejad', 'uno']]),
          rv: '@@dt/6/4' },
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:5', ref: 'Deuteronomio 6:5', he: '@@wlc:dt/6/5', tr: 'Veahavtá et Adonái Eloheja bejol-levavjá uvjol-nafshejá uvjol-meodeja.',
          palabras: P('@@wlcp:dt/6/5', [['veahavtá', 'y amarás'], ['et', '(marca del objeto)'], ['Adonái', 'a Jehová'], ['Eloheja', 'tu Dios'], ['bejol-levavjá', 'con todo tu corazón'], ['uvjol-nafshejá', 'y con toda tu alma'], ['uvjol-meodeja', 'y con todas tus fuerzas']]),
          rv: '@@dt/6/5' }
      ],
      texto: [
        'El Shemá es la confesión de fe de Israel. Recibe su nombre de su primera palabra, שְׁמַע, «oye». Los israelitas piadosos lo recitaban por la mañana y por la noche, y cuando un escriba preguntó a Jesús cuál era el primer mandamiento, Él respondió citándolo: «Oye, Israel; el Señor nuestro Dios, el Señor uno es» (Mr 12:29).',
        { h: 'Lee el versículo 4' },
        'Son seis palabras. La primera, שְׁמַע, empieza con shevá, que suena, y la mem lleva pataj; la áyin final es muda: she-MÁ. La segunda es יִשְׂרָאֵל, con sin (punto a la izquierda): Yis-ra-EL. Después viene dos veces el nombre de Dios, que se lee Adonái, y entre ellos אֱלֹהֵינוּ, Eloheinu, «nuestro Dios»: la terminación -nu significa «nuestro». La última palabra es אֶחָד, ejad, «uno».',
        'Una curiosidad: en los rollos de la ley y en muchas Biblias hebreas impresas, la áyin de שְׁמַע y la dálet de אֶחָד se escriben más grandes que las demás. Juntas forman la palabra עֵד, «testigo». Además, una dálet grande evita confundirla con una resh, que convertiría «uno» en «otro» (אַחֵר).',
        { h: 'Un Dios uno' },
        'La palabra אֶחָד afirma que solo Jehová es Dios, frente a los muchos dioses de las naciones. La misma palabra se usa para el hombre y la mujer que llegan a ser «una sola carne» (Gn 2:24), una unidad que no excluye que sean dos personas. Por eso el Shemá no contradice lo que el Nuevo Testamento revela del Padre, el Hijo y el Espíritu Santo: un solo Dios.',
        { ir: { t: 'Ver «Dios es uno» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#conocer/4' } },
        { h: 'Lee el versículo 5' },
        'En la segunda pestaña está el mandamiento que sigue: amar a Dios con todo el corazón, el alma y las fuerzas. Fíjate en la repetición de כָל, «todo», unida con maqaf, y en los prefijos: וּ («y») y בְ («con»). La terminación -já de las tres palabras significa «tu».',
        { ejercicio: {
          pregunta: '¿Qué significa la terminación -nu en אֱלֹהֵינוּ, Eloheinu?',
          opciones: [
            { t: 'Nuestro: «nuestro Dios».', ok: true, por_que: 'Elohim + -nu = Eloheinu, «nuestro Dios». Israel confiesa a Dios como el Dios de su pacto.' },
            { t: 'Uno: «Dios uno».', ok: false, por_que: '«Uno» es la última palabra del versículo, אֶחָד, ejad.' },
            { t: 'Tu: «tu Dios».', ok: false, por_que: '«Tu Dios» es אֱלֹהֶיךָ, Eloheja, con la terminación -já, que aparece en el versículo 5.' }
          ],
          explicacion: '-nu: nuestro. -já: tu. Las terminaciones se estudian en el recurso de gramática.'
        } }
      ],
      pensar: 'Jesús llamó al Shemá el primer mandamiento. ¿Qué significa amar a Dios «con todo» tu corazón, tu alma y tus fuerzas en tu vida de esta semana?'
    },
    {
      id: 'bendicion', n: 'La bendición sacerdotal: Números 6:24-26', ref: 'Números 6:22-27',
      visual: [
        { tipo: 'hebreo', titulo: 'Versículo 24', ref: 'Números 6:24', he: '@@wlc:nm/6/24', tr: 'Yevarejejá Adonái veyishmereja.',
          palabras: P('@@wlcp:nm/6/24', [['yevarejejá', 'te bendiga'], ['Adonái', 'Jehová'], ['veyishmereja', 'y te guarde']]),
          rv: '@@nm/6/24' },
        { tipo: 'hebreo', titulo: 'Versículo 25', ref: 'Números 6:25', he: '@@wlc:nm/6/25', tr: 'Yaer Adonái panav eleja vijuneka.',
          palabras: P('@@wlcp:nm/6/25', [['yaer', 'haga resplandecer'], ['Adonái', 'Jehová'], ['panav', 'su rostro'], ['eleja', 'sobre ti'], ['vijuneka', 'y tenga de ti misericordia']]),
          rv: '@@nm/6/25' },
        { tipo: 'hebreo', titulo: 'Versículo 26', ref: 'Números 6:26', he: '@@wlc:nm/6/26', tr: 'Yisá Adonái panav eleja veyasem lejá shalom.',
          palabras: P('@@wlcp:nm/6/26', [['yisá', 'alce'], ['Adonái', 'Jehová'], ['panav', 'su rostro'], ['eleja', 'sobre ti'], ['veyasem', 'y ponga'], ['lejá', 'en ti'], ['shalom', 'paz']]),
          rv: '@@nm/6/26' },
        { tipo: 'imagen', titulo: 'Ketef Hinom', src: 'img/ketef-hinom.jpg', alt: 'Los dos pequeños amuletos de plata de Ketef Hinom, con letras hebreas antiguas grabadas, en su vitrina del Museo de Israel', pie: 'Amuletos de plata de Ketef Hinom (hacia el 600 a.C., Museo de Israel) con la bendición sacerdotal: el texto bíblico más antiguo que se conoce.', origen: 'foto', licencia: 'Bachrach44, CC BY-SA 3.0, Wikimedia Commons', completa: true }
      ],
      texto: [
        'Dios mismo dio a Aarón y a sus hijos las palabras con que debían bendecir a Israel, y añadió: «Y pondrán mi nombre sobre los hijos de Israel, y yo los bendeciré» (Nm 6:27). Es una de las oraciones más antiguas que se siguen pronunciando hoy, en sinagogas e iglesias de todo el mundo.',
        { h: 'Una bendición que crece' },
        'En hebreo, la bendición tiene tres líneas, una por pestaña, y cada una es más larga que la anterior: tres palabras, cinco y siete. Las tres nombran a Jehová, y en las tres Él es el que actúa. La bendición se abre como una flor: Dios bendice y guarda, Dios hace brillar su rostro y tiene misericordia, Dios vuelve su rostro hacia su pueblo y le da paz.',
        { h: 'Lee cada línea' },
        'En la primera línea ya practicaste el shevá. En יְבָרֶכְךָ (yevarejejá), el primero suena y el del medio calla. En la segunda, fíjate en פָּנָיו, panav, «su rostro»: la yod antes de la vav final no suena, y la terminación -av significa «su». La última palabra, וִיחֻנֶּךָּ, vijuneka, tiene una nun doble y una kaf con dagesh: «y tenga de ti misericordia». En la tercera, distingue la sin de יִשָּׂא (yisá, «alce») de la shin de שָׁלוֹם.',
        { h: 'La bendición en plata' },
        'En 1979, en unas tumbas excavadas en la roca en Ketef Hinom, frente a las murallas de Jerusalén, los arqueólogos encontraron dos pequeños amuletos de plata enrollados, de alrededor del año 600 a.C. Al desenrollarlos, se leyó en ellos esta bendición, en escritura paleohebrea. Son el texto bíblico más antiguo que se conoce, varios siglos anteriores a los rollos del mar Muerto.',
        'Lee las tres líneas seguidas, primero con ayudas y después sin ellas. Luego léelas en voz alta como una oración por alguien de tu familia o de tu iglesia.',
        { ejercicio: {
          pregunta: '¿Qué significa la terminación -av en פָּנָיו (panav)?',
          opciones: [
            { t: 'Su: «su rostro».', ok: true, por_que: 'Panim, «rostro», con la terminación -av: «su rostro». La yod no suena.' },
            { t: 'Tu: «tu rostro».', ok: false, por_que: 'La terminación de «tu» es -já, como en lejá y eleja.' },
            { t: 'Es parte de la palabra y no significa nada aparte.', ok: false, por_que: 'La palabra para «rostro» es פָּנִים, panim. La terminación cambia el sentido.' }
          ],
          explicacion: 'Panav: «su rostro». Dios vuelve su rostro hacia su pueblo.'
        } }
      ],
      pensar: 'Dios mandó a los sacerdotes poner su nombre sobre el pueblo con una bendición. En Cristo, todos los creyentes son real sacerdocio (1 P 2:9). ¿A quién podrías bendecir esta semana con estas mismas palabras?'
    },
    {
      id: 'salmo-23', n: 'El buen pastor: Salmo 23:1-2', ref: 'Salmo 23:1-2; Juan 10:11',
      visual: [
        { tipo: 'hebreo', titulo: 'Versículo 1', ref: 'Salmo 23:1', he: '@@wlc:sal/23/1', tr: 'Mizmor ledavid. Adonái roí, lo ejsar.',
          palabras: P('@@wlcp:sal/23/1', [['mizmor', 'salmo'], ['ledavid', 'de David'], ['Adonái', 'Jehová'], ['roí', 'mi pastor'], ['lo', 'no'], ['ejsar', 'me faltará']]),
          rv: '@@sal/23/1' },
        { tipo: 'hebreo', titulo: 'Versículo 2', ref: 'Salmo 23:2', he: '@@wlc:sal/23/2', tr: 'Binot déshe yarbitseni, al-mé menujot yenahaleni.',
          palabras: P('@@wlcp:sal/23/2', [['binot', 'en praderas de'], ['déshe', 'hierba tierna'], ['yarbitseni', 'me hace descansar'], ['al-mé', 'junto a aguas de'], ['menujot', 'reposo'], ['yenahaleni', 'me pastoreará']]),
          rv: '@@sal/23/2' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../tierra-de-israel/img/pastor.webp', alt: 'Un pastor guía su rebaño por una ladera de Judea', pie: 'El pastor guía a sus ovejas hacia el pasto y el agua.', origen: 'ia' }
      ],
      texto: [
        'Ya leíste el primer versículo del Salmo 23 en la estación de las vocales i, o, u. Ahora léelo sin ayudas, de corrido, y después avanza al versículo 2, que es nuevo.',
        { h: 'El versículo 1' },
        'En hebreo, el título forma parte del primer versículo: מִזְמוֹר לְדָוִד, «Salmo de David». La Reina-Valera lo pone como encabezado, por eso tu Biblia empieza el versículo con «Jehová es mi pastor». Después vienen cuatro palabras: el nombre de Dios, רֹעִי (roí, «mi pastor»), לֹא (lo, «no») y אֶחְסָר (ejsar, «me faltará»). La terminación -í de roí significa «mi».',
        { h: 'El versículo 2' },
        'El segundo versículo tiene palabras más largas, ideales para practicar las sílabas. יַרְבִּיצֵנִי se lee yar-bi-TSE-ni: la terminación -ni significa «me». La misma terminación aparece en la última palabra, יְנַהֲלֵנִי, ye-na-ha-LE-ni, con un jatef pataj bajo la he. Y fíjate en עַל־מֵי, al-mé, dos palabras unidas por maqaf que se leen como una sola.',
        'La palabra מְנֻחוֹת, menujot, significa «reposo» o «descanso». Las «aguas de reposo» no son aguas quietas por casualidad: el pastor busca para sus ovejas un lugar donde puedan beber tranquilas.',
        'Lee ahora los dos versículos seguidos, primero con ayudas y luego sin ellas. Si te trabas en una palabra, divídela en sílabas, léela despacio y vuelve a empezar la línea completa.',
        { h: 'El pastor del salmo' },
        'Jesús tomó esta imagen para sí: «Yo soy el buen pastor; el buen pastor su vida da por las ovejas» (Jn 10:11). Al leer el salmo en hebreo, recuerda que el que lo pronuncia es David, el pastor que llegó a ser rey, y que el Pastor de David vino a buscarnos en persona.',
        { ejercicio: {
          pregunta: 'En רֹעִי (roí, «mi pastor») e יַרְבִּיצֵנִי (yarbitseni, «me hace descansar»), ¿qué indican las terminaciones -í y -ni?',
          opciones: [
            { t: 'Que las palabras están en plural.', ok: false, por_que: 'El plural masculino termina en -im. Estas terminaciones se refieren a la persona que habla.' },
            { t: 'La primera persona: «mi» y «me».', ok: true, por_que: '-í se une a los nombres («mi pastor») y -ni a los verbos («me hace descansar»). El salmo es una confesión personal.' },
            { t: 'Que son nombres propios.', ok: false, por_que: 'Roí y yarbitseni no son nombres: son un sustantivo y un verbo con terminaciones de persona.' }
          ],
          explicacion: 'El Salmo 23 está lleno de «mi» y «me»: David no habla del pastor de otros, sino del suyo.'
        } }
      ],
      pensar: 'David no dice «Jehová es un pastor», sino «mi pastor». ¿Puedes decirlo tú con la misma confianza personal? ¿En qué área de tu vida necesitas dejarte guiar a «aguas de reposo»?'
    },
    {
      id: 'emanuel', n: 'Emanuel: Isaías 7:14', ref: 'Isaías 7:14; Mateo 1:22-23',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 7:14', ref: 'Isaías 7:14', he: '@@wlc:is/7/14', tr: 'Lajén yitén Adonái hu lajem ot: hiné haalmá hará veyolédet ben, vekarat shemó Imanu El.',
          palabras: P('@@wlcp:is/7/14', [['lajén', 'por tanto'], ['yitén', 'dará'], ['Adonái', 'el Señor'], ['hu', 'él mismo'], ['lajem', 'os'], ['ot', 'señal'], ['hiné', 'he aquí'], ['haalmá', 'la virgen'], ['hará', 'concebirá'], ['veyolédet', 'y dará a luz'], ['ben', 'un hijo'], ['vekarat', 'y llamará'], ['shemó', 'su nombre'], ['imanu', 'con nosotros'], ['El', 'Dios']]),
          rv: '@@is/7/14' },
        { tipo: 'cita', titulo: 'Mateo 1:23', texto: '@@mt/1/23', ref: 'Mateo 1:23' }
      ],
      texto: [
        'Este versículo es más largo: quince palabras. Es un buen ejercicio final, porque reúne casi todo lo que aprendiste. Tómalo con calma: lee primero cada palabra por separado, en la lista del panel, y después el versículo completo.',
        { h: 'Dos palabras para «Señor»' },
        'Fíjate en la tercera palabra: אֲדֹנָי. Aquí no está el nombre de cuatro letras, sino la palabra Adonái, «Señor», escrita con sus propias consonantes. Por eso la Reina-Valera dice «el Señor» y no «Jehová». Al leer en voz alta suenan igual, pero en el texto son distintas, y ahora puedes verlo.',
        { h: 'Palabras para practicar' },
        'הָעַלְמָה, haalmá, lleva el artículo ha y una áyin muda con pataj: ha-al-MÁ. וְיֹלֶדֶת, veyolédet, tiene dos segol seguidos y se acentúa en la penúltima sílaba: ve-yo-LÉ-det. Y וְקָרָאת, vekarat, «y llamará», tiene una álef que no suena antes de la tav final.',
        'Las dos últimas palabras ya las conoces: עִמָּנוּ אֵל, imanu El. La mem de imanu lleva dagesh fuerte: en la pronunciación antigua era una m doble, im-ma-nu. La terminación -nu es «nosotros», como en Eloheinu.',
        'Cuando puedas leer el versículo completo con ayudas, ocúltalas y léelo de nuevo. Es el más largo del taller: si lo logras, ya puedes enfrentar casi cualquier versículo del Antiguo Testamento.',
        { h: 'La virgen y el Hijo' },
        'La palabra עַלְמָה, almá, designa a una joven en edad de casarse, que en la sociedad de Israel se entendía soltera y virgen. Los traductores judíos de la Septuaginta, siglos antes de Cristo, la tradujeron con la palabra griega que significa «virgen», y Mateo, guiado por el Espíritu Santo, enseña que la señal se cumplió plenamente en el nacimiento virginal de Jesús (Mt 1:22-23). La Reina-Valera traduce «virgen», siguiendo esa interpretación del propio Nuevo Testamento.',
        { ejercicio: {
          pregunta: '¿Por qué la Reina-Valera traduce «el Señor» y no «Jehová» al comienzo de Isaías 7:14?',
          opciones: [
            { t: 'Porque el texto hebreo dice אֲדֹנָי, Adonái, y no el nombre de cuatro letras.', ok: true, por_que: 'Son palabras distintas en el texto, aunque se lean igual en voz alta. La Reina-Valera reserva «Jehová» para יהוה.' },
            { t: 'Porque en Isaías el nombre de Dios no aparece nunca.', ok: false, por_que: 'El nombre de Dios aparece cientos de veces en Isaías. En este versículo, la palabra es Adonái.' },
            { t: 'Por un error de los traductores.', ok: false, por_que: 'No es un error: la traducción sigue con precisión la palabra que está en el texto hebreo.' }
          ],
          explicacion: 'יהוה → Jehová; אֲדֹנָי → Señor. Saber leer hebreo permite ver la diferencia.'
        } }
      ],
      pensar: 'Emanuel significa «Dios con nosotros». ¿En qué situación de tu vida necesitas recordar hoy que Dios está contigo en Cristo?'
    },
    {
      id: 'seguir', n: 'Cómo seguir aprendiendo', ref: 'Salmo 119:18; 2 Timoteo 2:15',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 119:18', ref: 'Salmo 119:18', he: '@@wlc:sal/119/18', tr: 'Gal-enái veabita niflaot mitorateja.',
          palabras: P('@@wlcp:sal/119/18', [['gal-enái', 'abre mis ojos'], ['veabita', 'y miraré'], ['niflaot', 'maravillas'], ['mitorateja', 'de tu ley']]),
          rv: '@@sal/119/18' },
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Herramientas para seguir',
          cab: ['Herramienta', 'Para qué sirve'],
          filas: [
            ['La tabla del alfabeto de este recurso', 'Repasar las letras y las vocales, y practicar el reconocimiento'],
            ['Vocabulario y gramática básica del hebreo bíblico', 'Recurso siguiente del sitio, en preparación'],
            ['Interlineal hebreo–español', 'Recurso del sitio, en preparación: cada palabra hebrea con su traducción'],
            ['Concordancia con números de Strong', 'Encontrar todas las veces que aparece una palabra hebrea'],
            ['Una Biblia hebrea impresa o digital', 'Leer cualquier pasaje en el texto masorético'],
          ],
          nota: 'El orden importa: primero leer con soltura, después vocabulario y gramática, y luego el interlineal.'
        } }
      ],
      texto: [
        'Si llegaste hasta aquí, ya puedes leer hebreo bíblico. Despacio, con ayudas y equivocándote, pero puedes. Lo que sigue es práctica.',
        { h: 'Un hábito de diez minutos' },
        'La lectura se afianza con repetición breve y frecuente. Te sugerimos tres ejercicios. Repasa el alfabeto en el modo de práctica de la tabla hasta reconocer cada letra sin dudar. Vuelve a leer en voz alta los versículos del taller, sin ayudas, hasta que salgan de corrido. Y lee cada día un versículo nuevo de un pasaje que conozcas bien en español: el Salmo 23 completo, los primeros versículos de Génesis o el Salmo 119, estrofa por estrofa.',
        { ir: { t: 'Abrir la tabla del alfabeto hebreo', a: 'alfabeto/' } },
        { h: 'Lo que viene' },
        'Saber leer es el primer paso. El recurso Vocabulario y gramática básica del hebreo bíblico, en preparación, te enseñará las palabras más frecuentes, cómo se forman los verbos y qué significan las terminaciones que viste en el taller. Después, el Interlineal hebreo–español, también en preparación, te permitirá leer cualquier pasaje con la traducción de cada palabra.',
        'Mientras tanto, una concordancia con los números de Strong es muy útil: a cada palabra hebrea le asigna un número, y con él puedes encontrar todos los pasajes donde aparece, aunque la traducción la vierta de maneras distintas.',
        { h: 'Con humildad y con oración' },
        'Conocer algo de hebreo es una herramienta valiosa, pero no te convierte en experto. Desconfía de las enseñanzas que dicen que «en el hebreo original» la Biblia dice algo muy distinto de lo que dicen todas las traducciones. Usa lo que aprendiste para leer con más atención, para comparar traducciones con respeto y para escuchar mejor a quienes estudiaron más.',
        'Sobre todo, recuerda para qué estudias. El salmista no pidió aprender hebreo, que era su lengua, sino que Dios le abriera los ojos: «Abre mis ojos, y miraré las maravillas de tu ley» (Sal 119:18). Es la última lectura de este recurso: léela en hebreo, y hazla tu oración.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad» (2 Ti 2:15). ¿Qué paso concreto vas a dar este mes para seguir creciendo en el estudio de la Palabra?'
    }
  ];

  const A = window.__ALEF;
  delete window.__ALEF;
  window.RUTA_DATA = {
    titulo: 'El alfabeto hebreo y la lectura',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'El alfabeto hebreo', n: 'I. Panorama', info: 'La lengua del Antiguo Testamento, su escritura y cómo se lee', estaciones: A.panorama },
      { id: 'letras', grupo: 'El alfabeto hebreo', n: 'II. Las 22 letras', info: 'Forma, nombre, sonido y valor de cada letra, las finales y los acrósticos', estaciones: A.letras },
      { id: 'vocales', grupo: 'El alfabeto hebreo', n: 'III. Las vocales', info: 'Los puntos de los masoretas, el shevá y el dagesh', estaciones: A.vocales },
      { id: 'leer', grupo: 'El alfabeto hebreo', n: 'IV. A leer', info: 'Sílabas, nombres, palabras conocidas, el nombre de Dios, signos y prefijos', estaciones: A.leer },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes famosos, palabra por palabra', estaciones: taller }
    ]
  };
})();
