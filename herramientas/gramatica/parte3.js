/* Vocabulario y gramática básica del hebreo bíblico · ruta III. El verbo (ver encabezado de parte1.js) */
(() => {
  const P = window.__GRAM.P;
  const ESQ = 'Esquema del recurso.';

  const verbo = [
    {
      id: 'aspecto', n: 'Raíz, binyán y aspecto', ref: 'Salmo 23:1; Isaías 9:2',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-aspecto.svg', alt: 'Dos maneras de mirar una acción: el perfecto la ve completa, como un círculo cerrado; el imperfecto la ve en desarrollo o por suceder, como una flecha abierta; debajo, ejemplos con שָׁמַר y יִשְׁמֹר', pie: 'El hebreo no marca sobre todo el tiempo, sino cómo se mira la acción.', origen: 'esquema' },
        { tipo: 'hebreo', titulo: 'Salmo 23:1', ref: 'Salmo 23:1', he: '@@wlc:sal/23/1', tr: 'Mizmor leDavid. Adonái roí, lo ejsar.',
          palabras: P('@@wlcp:sal/23/1', [['mizmor', 'salmo'], ['leDavid', 'de David'], ['Adonái', 'Jehová'], ['roí', 'mi pastor'], ['lo', 'no'], ['ejsar', 'me faltará (imperfecto)']]),
          rv: '@@sal/23/1' }
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
        { tipo: 'hebreo', titulo: 'Salmo 119:11', ref: 'Salmo 119:11', he: '@@wlc:sal/119/11', tr: 'Belibí tsafanti imrateja, lemáan lo ejetá-laj.',
          palabras: P('@@wlcp:sal/119/11', [['belibí', 'en mi corazón'], ['tsafanti', 'he guardado (atesoré)'], ['imrateja', 'tu dicho'], ['lemáan', 'para que'], ['lo', 'no'], ['ejetá-laj', 'peque contra ti']]),
          rv: '@@sal/119/11' }
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
        { tipo: 'hebreo', titulo: 'Salmo 121:7', ref: 'Salmo 121:7', he: '@@wlc:sal/121/7', tr: 'Adonái yishmorjá mikol-ra, yishmor et-nafsheja.',
          palabras: P('@@wlcp:sal/121/7', [['Adonái', 'Jehová'], ['yishmorjá', 'te guardará'], ['mikol-ra', 'de todo mal'], ['yishmor', 'guardará'], ['et-nafsheja', '(objeto) tu alma']]),
          rv: '@@sal/121/7' }
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
        { tipo: 'hebreo', titulo: 'Génesis 12:4', ref: 'Génesis 12:4', he: '@@wlc:gn/12/4', tr: 'Vayélej Avram kaasher dibér elav Adonái, vayélej itó Lot, veAvram ben-jamesh shanim veshivim shaná betsetó meJarán.',
          palabras: P('@@wlcp:gn/12/4', [['vayélej', 'y se fue'], ['Avram', 'Abram'], ['kaasher', 'como'], ['dibér', 'había dicho (habló)'], ['elav', 'a él'], ['Adonái', 'Jehová'], ['vayélej', 'y fue'], ['itó', 'con él'], ['Lot', 'Lot'], ['veAvram', 'y Abram (era)'], ['ben-jamesh', 'hijo de cinco'], ['shanim', 'años'], ['veshivim', 'y setenta'], ['shaná', 'año'], ['betsetó', 'en su salir (cuando salió)'], ['meJarán', 'de Harán']]),
          rv: '@@gn/12/4' },
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
        { tipo: 'hebreo', titulo: 'Salmo 95:6', ref: 'Salmo 95:6', he: '@@wlc:sal/95/6', tr: 'Bou nishtajavé venijraá, nivrejá lifné-Adonái osenu.',
          palabras: P('@@wlcp:sal/95/6', [['bou', 'venid (imperativo)'], ['nishtajavé', 'adoremos'], ['venijraá', 'y postrémonos (cohortativo)'], ['nivrejá', 'arrodillémonos (cohortativo)'], ['lifné-Adonái', 'delante de Jehová'], ['osenu', 'nuestro Hacedor']]),
          rv: '@@sal/95/6' },
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
        { tipo: 'hebreo', titulo: 'Salmo 121:4', ref: 'Salmo 121:4', he: '@@wlc:sal/121/4', tr: 'Hiné lo-yanum velo yishán shomer Yisrael.',
          palabras: P('@@wlcp:sal/121/4', [['hiné', 'he aquí'], ['lo-yanum', 'no se adormecerá'], ['velo', 'y no'], ['yishán', 'dormirá'], ['shomer', 'el que guarda (participio)'], ['Yisrael', 'a Israel']]),
          rv: '@@sal/121/4' },
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
        { tipo: 'hebreo', titulo: 'Génesis 2:17', ref: 'Génesis 2:17', he: '@@wlc:gn/2/17', tr: 'Umeets hadáat tov vará lo tojal mimenu, ki beyom ajoljá mimenu mot tamut.',
          palabras: P('@@wlcp:gn/2/17', [['umeets', 'y del árbol de'], ['hadáat', 'el conocimiento (de)'], ['tov', 'bien'], ['vará', 'y mal'], ['lo', 'no'], ['tojal', 'comerás'], ['mimenu', 'de él'], ['ki', 'porque'], ['beyom', 'en el día de'], ['ajoljá', 'tu comer (que comieres)'], ['mimenu', 'de él'], ['mot', 'morir (infinitivo absoluto)'], ['tamut', 'morirás']]),
          rv: '@@gn/2/17' },
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
        { tipo: 'hebreo', titulo: 'Levítico 11:44', ref: 'Levítico 11:44', he: '@@wlc:lv/11/44', tr: 'Ki aní Adonái Elohejem, vehitkadishtem viheyitem kedoshim ki kadosh aní, velo tetamú et-nafshotejem bejol-hashérets haromés al-haárets.',
          palabras: P('@@wlcp:lv/11/44', [['ki', 'porque'], ['aní', 'yo (soy)'], ['Adonái', 'Jehová'], ['Elohejem', 'vuestro Dios'], ['vehitkadishtem', 'y os santificaréis (hitpael)'], ['viheyitem', 'y seréis'], ['kedoshim', 'santos'], ['ki', 'porque'], ['kadosh', 'santo'], ['aní', 'yo (soy)'], ['velo', 'y no'], ['tetamú', 'contaminaréis (piel)'], ['et-nafshotejem', 'vuestras personas'], ['bejol-hashérets', 'con todo reptil'], ['haromés', 'que se arrastra'], ['al-haárets', 'sobre la tierra']]),
          rv: '@@lv/11/44' },
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
        { tipo: 'hebreo', titulo: 'Isaías 9:6', ref: 'Isaías 9:6', he: '@@wlc:is/9/5', tr: 'Ki-yéled yulad-lanu, ben nitán-lanu, vatehí hamisrá al-shijmó, vayikrá shmó Pele Yoets El Guibor Aví-ad Sar-shalom.',
          palabras: P('@@wlcp:is/9/5', [['ki-yéled', 'porque un niño'], ['yulad-lanu', 'nos es nacido (pual)'], ['ben', 'un hijo'], ['nitán-lanu', 'nos es dado (nifal)'], ['vatehí', 'y será'], ['hamisrá', 'el principado'], ['al-shijmó', 'sobre su hombro'], ['vayikrá', 'y llamará'], ['shmó', 'su nombre'], ['Pele', 'Admirable'], ['Yoets', 'Consejero'], ['El', 'Dios'], ['Guibor', 'Fuerte'], ['aví', 'Padre de'], ['ad', 'eternidad'], ['sar-shalom', 'Príncipe de paz']]),
          rv: '@@is/9/6' },
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
        { tipo: 'hebreo', titulo: 'Génesis 5:24', ref: 'Génesis 5:24', he: '@@wlc:gn/5/24', tr: 'Vayithalej Janoj et-haElohim, veenenu, ki-lakaj otó Elohim.',
          palabras: P('@@wlcp:gn/5/24', [['vayithalej', 'y caminó (hitpael)'], ['Janoj', 'Enoc'], ['et-haElohim', 'con Dios'], ['veenenu', 'y no estaba más'], ['ki-lakaj', 'porque tomó'], ['otó', 'a él'], ['Elohim', 'Dios']]),
          rv: '@@gn/5/24' },
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
        { tipo: 'hebreo', titulo: 'Isaías 40:31', ref: 'Isaías 40:31', he: '@@wlc:is/40/31', tr: 'Vekové Adonái yajalifu jóaj, yaalú éver kanesharim, yarutsú velo yigaú, yeljú velo yiafú.',
          palabras: P('@@wlcp:is/40/31', [['vekové', 'pero los que esperan'], ['Adonái', 'a Jehová'], ['yajalifu', 'renovarán'], ['jóaj', 'fuerza'], ['yaalú', 'subirán (con)'], ['éver', 'alas'], ['kanesharim', 'como las águilas'], ['yarutsú', 'correrán'], ['velo', 'y no'], ['yigaú', 'se cansarán'], ['yeljú', 'caminarán'], ['velo', 'y no'], ['yiafú', 'se fatigarán']]),
          rv: '@@is/40/31' },
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
        { tipo: 'hebreo', titulo: '1 Samuel 3:10', ref: '1 Samuel 3:10', he: '@@wlc:1s/3/10', tr: 'Vayavó Adonái vayityatsev vayikrá jefáam-befáam: Shmuel, Shmuel! Vayómer Shmuel: dabér, ki shoméa avdeja.',
          palabras: P('@@wlcp:1s/3/10', [['vayavó', 'y vino'], ['Adonái', 'Jehová'], ['vayityatsev', 'y se paró'], ['vayikrá', 'y llamó'], ['jefáam-befáam', 'como las otras veces'], ['Shmuel', 'Samuel'], ['Shmuel', 'Samuel'], ['vayómer', 'y dijo'], ['Shmuel', 'Samuel'], ['dabér', 'habla'], ['ki', 'porque'], ['shoméa', 'oye'], ['avdeja', 'tu siervo']]),
          rv: '@@1s/3/10' },
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
