/* El alfabeto hebreo y la lectura · ruta II. Las 22 letras (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;
  const CAB = ['Letra', 'Nombre', 'Sonido', 'Valor', 'Ejemplo'];
  const NOTA = 'Pronunciación del hebreo israelí moderno. El valor es el número que la letra representa (estación «Las letras como números»).';

  const letras = [
    {
      id: 'alef-dalet', n: 'Álef, bet, guímel y dálet', ref: 'Génesis 1:1; Juan 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Las cuatro primeras letras',
          cab: CAB,
          filas: [
            ['א', 'Álef', 'Muda: solo sostiene la vocal', '1', 'אֱלֹהִים (Elohim), Dios'],
            ['בּ', 'Bet', 'b, como en «boca»', '2', 'בַּיִת (báyit), casa'],
            ['ב', 'Vet', 'v, como b suave', '2', 'אָב (av), padre'],
            ['ג', 'Guímel', 'g, siempre como en «gato»', '3', 'גָּדוֹל (gadol), grande'],
            ['ד', 'Dálet', 'd, como en «dedo»', '4', 'דָּוִד (David)'],
          ],
          nota: NOTA
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/letras-maestro.webp', alt: 'En una sala de la sinagoga del siglo I, un maestro anciano señala con el dedo las letras hebreas escritas en una tablilla mientras un grupo de niños las repite en voz alta', pie: 'Los niños judíos aprendían las letras repitiéndolas en voz alta con un maestro.', origen: 'ia' }
      ],
      texto: [
        'Empezamos por el principio: las cuatro primeras letras. Míralas en el panel, pronuncia su nombre en voz alta y cópialas en un cuaderno, empezando por la derecha.',
        { h: 'Álef (א)' },
        'La primera letra no tiene sonido propio. Es una consonante muda que sostiene la vocal que la acompaña: אָ se lee «a», אֵ se lee «e». Por eso el nombre de Dios, אֱלֹהִים, empieza con álef y se lee Elohim. Su nombre significa «buey»; en la escritura antigua la letra parecía la cabeza de un buey con sus cuernos.',
        { h: 'Bet (בּ) y vet (ב)' },
        'La segunda letra es una casa abierta hacia la izquierda, y su nombre significa justamente «casa». Tiene dos sonidos. Con un punto en el centro (בּ) suena b; sin el punto (ב) suena v. Es la primera letra de la Biblia: בְּרֵאשִׁית, bereshit, «en el principio» (Gn 1:1). Observa la pequeña base que sobresale a la derecha, abajo: es lo que la distingue de la kaf (כ), que es redondeada.',
        { h: 'Guímel (ג)' },
        'La tercera letra suena siempre g, como en «gato» o «guerra», nunca como en «gente». Tiene un pie que se abre hacia la izquierda. Su nombre se suele relacionar con el camello (gamal).',
        { h: 'Dálet (ד)' },
        'La cuarta letra suena d. Su nombre se parece a la palabra «puerta» (délet). Tiene un techo horizontal que sobresale un poco a la derecha, en la esquina. Fíjate bien en esa esquina, porque la resh (ר), que verás más adelante, es igual pero redondeada.',
        { h: 'Un orden muy antiguo' },
        'Álef, bet, guímel, dálet… El griego aprendió el alfabeto de los fenicios y dio a sus letras nombres parecidos: alfa, beta, gamma, delta. De alfa y beta viene nuestra palabra «alfabeto». Cuando Jesús dice «Yo soy el Alfa y la Omega» (Ap 22:13), usa la primera y la última letra del alfabeto griego, el equivalente de álef y tav.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la letra ב, sin punto en el centro?',
          opciones: [
            { t: 'b, como en «boca».', ok: false, por_que: 'Ese es el sonido de la letra con el punto en el centro (בּ), que se llama bet.' },
            { t: 'v, como una b suave.', ok: true, por_que: 'Sin el punto, la letra se llama vet y suena v.' },
            { t: 'Es muda, como la álef.', ok: false, por_que: 'La única letra muda de este grupo es la álef (א).' }
          ],
          explicacion: 'Bet y vet son la misma letra. El punto en el centro, que se llama dagesh, cambia su sonido (ruta III).'
        } }
      ],
      pensar: 'La Biblia hebrea empieza con bet, la letra de la «casa», y el primer versículo nos presenta a Dios como Creador. ¿Qué significa para ti que tu vida esté edificada sobre el Dios que creó todas las cosas?'
    },
    {
      id: 'he-jet', n: 'He, vav, zayin y jet', ref: 'Éxodo 26:32; Salmo 136:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la quinta a la octava letra',
          cab: CAB,
          filas: [
            ['ה', 'He', 'h suave, como al soplar; muda al final de palabra', '5', 'הַר (har), monte'],
            ['ו', 'Vav', 'v; a veces es vocal o o u', '6', 'וְ (ve), y'],
            ['ז', 'Zayin', 'z sonora, como un zumbido', '7', 'זָהָב (zahav), oro'],
            ['ח', 'Jet', 'j, como en «jardín»', '8', 'חֶסֶד (jésed), misericordia'],
          ],
          nota: NOTA
        } },
        { tipo: 'tabla', titulo: 'He o jet', tabla: {
          titulo: 'Cómo distinguir la he de la jet',
          cab: ['Letra', 'Qué mirar', 'Ejemplo'],
          filas: [
            ['ה', 'La pata izquierda no toca el techo: queda un espacio arriba', 'הַר, monte'],
            ['ח', 'Las dos patas tocan el techo: no hay espacio', 'חַיִּים, vida'],
          ],
          nota: 'La tav (ת), que verás al final, se parece a ambas, pero tiene un pie hacia la izquierda.'
        } }
      ],
      texto: [
        { h: 'He (ה)' },
        'La he suena como una h suave, un soplo, parecida a la «j» aspirada de algunos países del Caribe. Al final de una palabra casi siempre es muda y solo indica que la palabra termina en vocal: תּוֹרָה se lee Torá. Muchos nombres femeninos terminan así: שָׂרָה, Sara. Como artículo, delante de una palabra, significa «el» o «la»: הַר es «monte» y הָהָר, «el monte».',
        { h: 'Vav (ו)' },
        'La vav es un trazo vertical con una pequeña cabeza. Su nombre significa «gancho» o «clavo», y así se llaman los ganchos de oro del tabernáculo (Éx 26:32). Suena v, pero también sirve para escribir dos vocales: con un punto encima (וֹ) se lee o, y con un punto a su izquierda (וּ) se lee u. Lo verás en la ruta III.',
        'Es una de las letras más frecuentes de la Biblia, porque pegada al comienzo de una palabra significa «y». Los relatos hebreos encadenan una acción tras otra con esa vav: «y dijo Dios… y fue… y vio Dios…». Por eso la Reina-Valera empieza tantos versículos con «y».',
        { h: 'Zayin (ז)' },
        'La zayin suena como una z sonora, la de la palabra inglesa «zoo», con vibración, como el zumbido de una abeja. En la práctica, muchos hispanohablantes la pronuncian como una s, y se entiende. Parece una vav con un sombrero más ancho.',
        { h: 'Jet (ח)' },
        'La jet suena como nuestra jota: חַיִּים, jayim, «vida». Es la letra de palabras muy importantes, como חֶסֶד, jésed, la misericordia fiel de Dios hacia su pueblo, que el Salmo 136 repite veintiséis veces: «porque para siempre es su misericordia».',
        'En el segundo panel tienes el truco para no confundir la he con la jet: la he tiene un espacio en la esquina superior izquierda, como una ventana abierta; la jet está cerrada arriba.',
        { ejercicio: {
          pregunta: 'En la palabra תּוֹרָה (Torá), ¿cómo suena la ה del final?',
          opciones: [
            { t: 'Como una j fuerte: «Toraj».', ok: false, por_que: 'La j fuerte es la jet (ח), que tiene las dos patas unidas al techo.' },
            { t: 'No suena: solo indica que la palabra termina en vocal.', ok: true, por_que: 'Al final de la palabra, la he casi siempre es muda. Se lee Torá.' },
            { t: 'Como una h aspirada fuerte: «Torah», con soplo al final.', ok: false, por_que: 'Al final de palabra la he no se pronuncia, aunque muchas transliteraciones escriban «Torah».' }
          ],
          explicacion: 'La he final es una de las letras que ayudan a leer: marca una vocal al final de la palabra.'
        } }
      ],
      pensar: 'La palabra חֶסֶד (jésed) describe un amor fiel que no abandona el pacto. ¿En qué momento de tu vida has visto que «para siempre es su misericordia»?'
    },
    {
      id: 'tet-kaf', n: 'Tet, yod y kaf', ref: 'Mateo 5:18; Génesis 1:4; Éxodo 28:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la novena a la undécima letra',
          cab: CAB,
          filas: [
            ['ט', 'Tet', 't', '9', 'טוֹב (tov), bueno'],
            ['י', 'Yod', 'y, como en «yo»', '10', 'יָד (yad), mano'],
            ['כּ', 'Kaf', 'k, como en «casa»', '20', 'כֹּהֵן (kohén), sacerdote'],
            ['כ', 'Jaf', 'j, como en «jardín»', '20', 'לְךָ (lejá), a ti'],
            ['ך', 'Jaf final', 'j, al final de palabra', '20', 'מֶלֶךְ (mélej), rey'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Génesis 1:4', ref: 'Génesis 1:4', he: '@@wlc:gn/1/4', rv: '@@gn/1/4' }
      ],
      texto: [
        { h: 'Tet (ט)' },
        'La tet suena t, igual que la tav (ת). En la pronunciación antigua eran sonidos distintos, pero hoy se pronuncian igual. Su forma es redonda, como un recipiente con el borde superior derecho doblado hacia adentro. Aparece en una palabra que se repite siete veces en el primer capítulo de la Biblia: טוֹב, tov, «bueno». En el panel puedes buscarla en Génesis 1:4: «Y vio Dios que la luz era buena».',
        { h: 'Yod (י)' },
        'La yod es la letra más pequeña del alfabeto: una pequeña coma suspendida en la parte superior de la línea. Es la «jota» de Mateo 5:18, y por eso decimos que algo no cambió «ni una jota». Suena y, como en «yo» o en «ya»: יָד, yad, «mano».',
        'La yod abre muchísimos nombres bíblicos: יִשְׂרָאֵל (Israel), יְהוּדָה (Judá), יִצְחָק (Isaac), יַעֲקֹב (Jacob), יוֹסֵף (José). En español, esos nombres pasaron por el griego y el latín y perdieron el sonido y inicial, pero en hebreo todos empiezan igual. También empieza con yod el nombre de Josué, יְהוֹשֻׁעַ, Yehoshúa, que en su forma abreviada, Yeshúa, es el nombre de Jesús.',
        { h: 'Kaf (כּ) y jaf (כ)' },
        'Como la bet, la kaf tiene dos sonidos: con un punto en el centro (כּ) suena k, y sin el punto (כ) suena j, como la jet. Es redondeada, sin la base que sobresale de la bet. Su nombre significa «palma de la mano», y su forma recuerda una mano ahuecada.',
        'Al final de una palabra, la jaf cambia de forma: se estira hacia abajo, debajo de la línea (ך), como en מֶלֶךְ, mélej, «rey». Es la primera de las cinco letras finales que verás en esta ruta.',
        { ejercicio: {
          pregunta: '¿Por qué Jesús habló de «una jota» para decir que ni el detalle más pequeño de la ley pasaría?',
          opciones: [
            { t: 'Porque la yod es la letra más pequeña del alfabeto hebreo.', ok: true, por_que: 'En la escritura cuadrada que se leía en las sinagogas, la yod es apenas un trazo pequeño en lo alto de la línea.' },
            { t: 'Porque la yod es la primera letra del alfabeto.', ok: false, por_que: 'La primera letra es la álef (א). La yod es la décima.' },
            { t: 'Porque la jota española es una letra que casi no se usa.', ok: false, por_que: 'Jesús no hablaba de la jota española, sino de la yod hebrea; «jota» es como la traducción la nombra.' }
          ],
          explicacion: 'La yod es la letra más pequeña. Ni siquiera ella, dice Jesús, pasará de la ley hasta que todo se cumpla.'
        } }
      ],
      pensar: 'El nombre de Jesús empieza con yod, la letra más pequeña, y significa Jehová salva. El Hijo de Dios se despojó a sí mismo y se humilló para salvarnos (Fil 2:7-8). ¿Qué te dice esa humildad sobre el amor de Dios por ti?'
    },
    {
      id: 'lamed-nun', n: 'Lámed, mem y nun', ref: 'Deuteronomio 6:5; Génesis 1:2; Deuteronomio 18:18',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la duodécima a la decimocuarta letra',
          cab: CAB,
          filas: [
            ['ל', 'Lámed', 'l', '30', 'לֵב (lev), corazón'],
            ['מ', 'Mem', 'm', '40', 'מַיִם (máyim), aguas'],
            ['ם', 'Mem final', 'm, al final de palabra', '40', 'שָׁלוֹם (shalom), paz'],
            ['נ', 'Nun', 'n', '50', 'נָבִיא (naví), profeta'],
            ['ן', 'Nun final', 'n, al final de palabra', '50', 'בֵּן (ben), hijo'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:5', ref: 'Deuteronomio 6:5', he: '@@wlc:dt/6/5', rv: '@@dt/6/5' }
      ],
      texto: [
        { h: 'Lámed (ל)' },
        'La lámed es la única letra que sube por encima de la línea, como un bastón o una vara de pastor. Su nombre se relaciona con la aguijada con que se guiaba a los bueyes, y comparte raíz con el verbo «aprender» (lamad). Suena l. Es fácil de reconocer: לֵב, lev, «corazón».',
        'Pegada al comienzo de una palabra, la lámed significa «a», «para» o «de»: לְדָוִד, ledavid, «de David» o «para David», como en el título de muchos salmos.',
        { h: 'Mem (מ, ם)' },
        'La mem suena m. Tiene dos formas: en medio de la palabra es abierta abajo (מ), y al final es un cuadrado cerrado (ם). Su nombre se parece a la palabra «aguas», מַיִם, máyim, que tiene las dos formas: empieza con la abierta y termina con la cerrada. «Y el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2).',
        'La mem cerrada aparece al final de muchas palabras en plural, porque la terminación masculina plural es -im: אֱלֹהִים (Elohim), כְּרֻבִים (querubines), שְׂרָפִים (serafines). De ahí vienen los plurales «querubín» y «serafín» que usa el español.',
        { h: 'Nun (נ, ן)' },
        'La nun suena n. En medio de la palabra es una letra corta con base (נ); al final se convierte en un trazo largo que baja debajo de la línea (ן). Así se escribe בֵּן, ben, «hijo», que aparece en tantos nombres: Benjamín es «hijo de la mano derecha».',
        'Con nun empieza נָבִיא, naví, «profeta». Dios anunció a Moisés que levantaría un profeta como él (Dt 18:18), y Pedro enseñó que esa promesa se cumplió en Jesús (Hch 3:22).',
        'En el panel tienes Deuteronomio 6:5. Busca la palabra que empieza con lámed y tiene bet: לְבָבְךָ, levavjá, «tu corazón».',
        { ejercicio: {
          pregunta: '¿Qué diferencia hay entre מ y ם?',
          opciones: [
            { t: 'Son dos letras distintas, con sonidos distintos.', ok: false, por_que: 'Las dos suenan m y tienen el mismo valor, 40. Son la misma letra.' },
            { t: 'Son la misma letra: מ se usa al comienzo o en medio de la palabra, y ם al final.', ok: true, por_que: 'La mem tiene una forma final cerrada. Lo mismo pasa con la nun, la kaf, la pe y la tsade.' },
            { t: 'ם es la forma mayúscula de מ.', ok: false, por_que: 'El hebreo no tiene mayúsculas. La forma depende solo del lugar de la letra en la palabra.' }
          ],
          explicacion: 'Cinco letras tienen forma final. La mem es la única cuya forma final es cerrada; las otras cuatro se estiran hacia abajo.'
        } }
      ],
      pensar: '«Amarás a Jehová tu Dios de todo tu corazón» (Dt 6:5). La palabra «corazón» (lev) en hebreo incluye la mente, la voluntad y los afectos. ¿Qué parte de tu corazón le cuesta más rendir a Dios?'
    },
    {
      id: 'samej-tsade', n: 'Sámej, áyin, pe y tsade', ref: 'Josué 1:8; Números 6:25; Génesis 6:9',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la decimoquinta a la decimoctava letra',
          cab: CAB,
          filas: [
            ['ס', 'Sámej', 's', '60', 'סֵפֶר (séfer), libro'],
            ['ע', 'Áyin', 'Muda (antiguamente, un sonido de garganta)', '70', 'עַם (am), pueblo'],
            ['פּ', 'Pe', 'p', '80', 'פָּנִים (panim), rostro'],
            ['פ', 'Fe', 'f', '80', 'סֵפֶר (séfer), libro'],
            ['ף', 'Fe final', 'f, al final de palabra', '80', 'יוֹסֵף (Yosef), José'],
            ['צ', 'Tsade', 'ts, como en «tsunami»', '90', 'צַדִּיק (tsadik), justo'],
            ['ץ', 'Tsade final', 'ts, al final de palabra', '90', 'אֶרֶץ (érets), tierra'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Números 6:25', ref: 'Números 6:25', he: '@@wlc:nm/6/25', rv: '@@nm/6/25' }
      ],
      texto: [
        { h: 'Sámej (ס)' },
        'La sámej es un círculo casi cerrado y suena s. Aparece en סֵפֶר, séfer, «libro»: «Nunca se apartará de tu boca este libro de la ley» (Jos 1:8). No la confundas con la mem final (ם), que es cuadrada.',
        { h: 'Áyin (ע)' },
        'La áyin se parece a una y griega con la cola hacia la izquierda. En la pronunciación israelí moderna es muda, como la álef, y solo sostiene su vocal: עַם se lee am, «pueblo». En la antigüedad era un sonido de garganta que el español no tiene. Su nombre significa «ojo», y así se dice ojo en hebreo: עַיִן, áyin. Muchos nombres bíblicos tienen áyin: יַעֲקֹב, Yaakov (Jacob), o עֵדֶן, Edén.',
        { h: 'Pe (פּ) y fe (פ, ף)' },
        'La pe es la tercera letra de dos sonidos: con punto en el centro (פּ) suena p, y sin punto (פ) suena f. Al final de la palabra se estira hacia abajo (ף), como en יוֹסֵף, Yosef, José. Su nombre significa «boca», y פֶּה, pe, es la palabra hebrea para boca.',
        'De la misma raíz viene פָּנִים, panim, «rostro», que está en plural: en hebreo, la cara se nombra como algo de muchos lados. Es la palabra de la bendición sacerdotal que tienes en el panel: «Jehová haga resplandecer su rostro sobre ti» (Nm 6:25).',
        { h: 'Tsade (צ, ץ)' },
        'La tsade suena ts, como en «tsunami» o en la palabra italiana «pizza». Al final de la palabra se estira hacia abajo (ץ), como en אֶרֶץ, érets, «tierra». Con tsade empieza צַדִּיק, tsadik, «justo», palabra con que se describe a Noé (Gn 6:9), y צִיּוֹן, Tsiyón, Sion.',
        'En las Biblias en español, la tsade suele pasar como una s, como en «Sion» o «Sadoc». El sacerdote Sadoc, צָדוֹק, es Tsadok en hebreo: su nombre viene de la misma raíz que «justo».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra סֵפֶר (libro)?',
          opciones: [
            { t: 'séper, porque la segunda letra es una pe.', ok: false, por_que: 'La pe de סֵפֶר no tiene punto en el centro, así que suena f.' },
            { t: 'séfer: sámej (s), fe sin punto (f) y resh (r).', ok: true, por_que: 'Sin el punto en el centro, la letra suena f.' },
            { t: 'Es muda, porque la letra del medio es una áyin.', ok: false, por_que: 'La letra del medio es una fe (פ). La áyin (ע) tiene forma de y griega.' }
          ],
          explicacion: 'Bet/vet, kaf/jaf y pe/fe: tres letras que cambian de sonido según tengan o no el punto en el centro.'
        } }
      ],
      pensar: 'La bendición sacerdotal pide que Dios haga resplandecer su rostro (panim) sobre su pueblo. ¿Qué significa para ti vivir bajo la mirada favorable de Dios por medio de Cristo?'
    },
    {
      id: 'qof-tav', n: 'Qof, resh, shin y tav', ref: 'Isaías 6:3; Génesis 1:2; Salmo 23:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Las últimas cuatro letras',
          cab: CAB,
          filas: [
            ['ק', 'Qof', 'k, como en «casa»', '100', 'קָדוֹשׁ (kadosh), santo'],
            ['ר', 'Resh', 'r (en Israel, de garganta)', '200', 'רוּחַ (rúaj), espíritu'],
            ['שׁ', 'Shin', 'sh, como en «show»', '300', 'שָׁלוֹם (shalom), paz'],
            ['שׂ', 'Sin', 's', '300', 'יִשְׂרָאֵל (Yisrael), Israel'],
            ['ת', 'Tav', 't', '400', 'תּוֹרָה (Torá), ley, enseñanza'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Isaías 6:3', ref: 'Isaías 6:3', he: '@@wlc:is/6/3', rv: '@@is/6/3' }
      ],
      texto: [
        { h: 'Qof (ק)' },
        'La qof suena k, igual que la kaf con punto. Es la única letra, además de las finales, que baja por debajo de la línea en medio de una palabra: su pata izquierda cuelga hacia abajo. Con qof empieza קָדוֹשׁ, kadosh, «santo», la palabra que los serafines repiten tres veces delante del trono (Is 6:3). Búscala en el panel.',
        { h: 'Resh (ר)' },
        'La resh suena r. En Israel se pronuncia en la garganta, como la r francesa, pero una r española se entiende perfectamente. Su forma es como la dálet (ד), pero redondeada, sin la esquina que sobresale. Su nombre significa «cabeza», como en רֹאשׁ, rosh. Con resh empieza רוּחַ, rúaj, que significa viento, aliento y espíritu: «el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2).',
        { h: 'Shin (שׁ) y sin (שׂ)' },
        'Esta letra tiene tres brazos, como una corona o un tridente, y dos sonidos que dependen de un punto encima. Con el punto sobre el brazo derecho (שׁ) se llama shin y suena sh: שָׁלוֹם, shalom. Con el punto sobre el brazo izquierdo (שׂ) se llama sin y suena s: יִשְׂרָאֵל, Yisrael. Para recordarlo: «shin, a la derecha; sin, a la izquierda».',
        { h: 'Tav (ת)' },
        'La última letra suena t. Se parece a la jet, pero tiene un pie hacia la izquierda en la pata izquierda. En la escritura antigua tenía forma de cruz o de equis, y su nombre significa «señal» o «marca» (Ez 9:4). Con tav empieza תּוֹרָה, Torá, palabra que la Reina-Valera traduce «ley», pero que significa también «instrucción» o «enseñanza»: la Torá es la enseñanza de Dios para su pueblo.',
        { h: 'Ya conoces el alfabeto' },
        'Con estas cuatro letras completas las 22 consonantes. Antes de seguir, abre la tabla del alfabeto y recórrela entera, de álef a tav, diciendo cada nombre en voz alta.',
        { ir: { t: 'Abrir la tabla del alfabeto hebreo', a: 'alfabeto/' } },
        { ejercicio: {
          pregunta: '¿Cómo se lee la letra שׂ, con el punto sobre el brazo izquierdo?',
          opciones: [
            { t: 'sh, como en «show».', ok: false, por_que: 'Ese es el sonido de la shin, con el punto sobre el brazo derecho (שׁ).' },
            { t: 's, como en «sol».', ok: true, por_que: 'Con el punto a la izquierda la letra se llama sin y suena s, como en Yisrael.' },
            { t: 't, como la tav.', ok: false, por_que: 'La tav (ת) es otra letra, sin brazos.' }
          ],
          explicacion: 'Shin y sin son la misma letra: el punto de arriba, a la derecha o a la izquierda, indica el sonido.'
        } }
      ],
      pensar: '«Santo, santo, santo, Jehová de los ejércitos» (Is 6:3). Ante la santidad de Dios, Isaías reconoció su propio pecado y fue purificado. ¿Cómo influye la santidad de Dios en tu manera de adorarle?'
    },
    {
      id: 'finales', n: 'Las cinco letras finales', ref: 'Génesis 1:1; Números 6:26',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las cinco letras que cambian al final de la palabra',
          cab: ['Normal', 'Final', 'Nombre', 'Sonido', 'Ejemplo con forma final'],
          filas: [
            ['כ', 'ך', 'Jaf', 'j', 'מֶלֶךְ (mélej), rey'],
            ['מ', 'ם', 'Mem', 'm', 'שָׁלוֹם (shalom), paz'],
            ['נ', 'ן', 'Nun', 'n', 'בֵּן (ben), hijo'],
            ['פ', 'ף', 'Fe', 'f', 'יוֹסֵף (Yosef), José'],
            ['צ', 'ץ', 'Tsade', 'ts', 'אֶרֶץ (érets), tierra'],
          ],
          nota: 'Las letras finales tienen el mismo sonido y el mismo valor numérico que la forma normal. Solo cambia el dibujo.'
        } },
        { tipo: 'hebreo', titulo: 'Números 6:26', ref: 'Números 6:26', he: '@@wlc:nm/6/26', tr: 'Yisá Adonái panav eleja veyasem lejá shalom.',
          palabras: P('@@wlcp:nm/6/26', [['yisá', 'alce'], ['Adonái', 'Jehová'], ['panav', 'su rostro'], ['eleja', 'hacia ti'], ['veyasem', 'y ponga'], ['lejá', 'en ti'], ['shalom', 'paz']]),
          rv: '@@nm/6/26' }
      ],
      texto: [
        'Cinco letras tienen una forma especial cuando están al final de una palabra: kaf, mem, nun, pe y tsade. La regla es sencilla: el sonido no cambia, solo la forma. Es como si la letra, al llegar al final, se soltara y dejara caer su trazo.',
        { h: 'Cuatro bajan y una se cierra' },
        'Cuatro de ellas se estiran hacia abajo, por debajo de la línea: ך, ן, ף y ץ. La quinta, la mem, hace lo contrario: se cierra en un cuadrado (ם). Si ves un trazo que baja debajo de la línea al final de una palabra, es casi seguro una letra final; la única letra normal que también baja es la qof (ק), y esa puede estar en cualquier lugar.',
        'En el panel tienes la última línea de la bendición sacerdotal. Termina con שָׁלוֹם, shalom, y su mem final cerrada. Busca también la jaf final en אֵלֶיךָ, eleja, «hacia ti», y en לְךָ, lejá, «en ti».',
        { h: 'Una forma de recordarlas' },
        'Los maestros judíos enseñaban las cinco letras finales con una palabra inventada que las junta en orden: kamnatspáj (כמנפץ). Si la repites algunas veces, no las olvidarás: kaf, mem, nun, pe, tsade.',
        { h: 'Para qué sirven' },
        'En un texto antiguo sin espacios ni puntos, las formas finales ayudaban a ver dónde terminaba una palabra. Hoy hay espacios, pero siguen siendo una ayuda para la vista: marcan el borde de las palabras y evitan confundir una letra con la siguiente.',
        'Ojo con dos confusiones frecuentes. La nun final (ן) se parece a la vav (ו), pero es más larga y baja debajo de la línea. Y la mem final (ם) se parece a la sámej (ס), pero la mem es cuadrada y la sámej redonda.',
        { ejercicio: {
          pregunta: 'En la palabra אֶרֶץ (érets, tierra), ¿qué letra es la última?',
          opciones: [
            { t: 'Una áyin, porque tiene forma de y griega.', ok: false, por_que: 'La áyin (ע) no baja tanto debajo de la línea. Esta letra es la tsade final, con un trazo recto que baja.' },
            { t: 'Una tsade final, que suena ts.', ok: true, por_que: 'La tsade final (ץ) se estira hacia abajo. La palabra se lee érets.' },
            { t: 'Una nun final, que suena n.', ok: false, por_que: 'La nun final (ן) es un trazo simple. La letra de érets tiene un brazo extra a la derecha.' }
          ],
          explicacion: 'Kaf, mem, nun, pe y tsade: kamnatspáj. Sus formas finales tienen el mismo sonido y el mismo valor.'
        } }
      ],
      pensar: 'La bendición de Números 6 termina con la palabra shalom: paz, bienestar, plenitud. ¿Qué significa para ti la paz que Cristo da, distinta de la que da el mundo (Jn 14:27)?'
    },
    {
      id: 'confunden', n: 'Las letras que se confunden', ref: 'Jueces 12:6',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Parejas y tríos que se parecen',
          cab: ['Letras', 'Cómo distinguirlas'],
          filas: [
            ['ב כ', 'Bet tiene una base que sobresale abajo a la derecha; kaf es redonda'],
            ['ד ר ך', 'Dálet tiene esquina; resh es redonda; jaf final baja debajo de la línea'],
            ['ה ח ת', 'He tiene un espacio arriba; jet está cerrada; tav tiene un pie a la izquierda'],
            ['ו ז ן י', 'Vav es una línea; zayin lleva sombrero ancho; nun final baja; yod es pequeña'],
            ['ג נ', 'Guímel abre un pie a la izquierda; nun tiene una base plana'],
            ['ס ם', 'Sámej es redonda; mem final es cuadrada'],
            ['ע צ', 'Áyin tiene la cola inclinada hacia la izquierda; tsade, un brazo arriba a la derecha y una base plana'],
            ['ט מ', 'Tet es redonda y abierta arriba; mem tiene una esquina abierta abajo a la izquierda'],
            ['שׁ שׂ', 'El punto a la derecha es sh; a la izquierda, s'],
          ],
          nota: 'Cuando dudes, compara las dos letras en la tabla del alfabeto y escríbelas una junto a la otra.'
        } }
      ],
      texto: [
        'Al principio, algunas letras parecen gemelas. Es normal: el ojo todavía no sabe qué detalle mirar. La tabla del panel reúne las confusiones más frecuentes con la pista que las distingue. Léela con calma, letra por letra, y vuelve a ella cada vez que dudes.',
        { h: 'Mirar las esquinas y los pies' },
        'Casi todas las diferencias están en tres lugares: las esquinas (dálet tiene esquina, resh no), los pies (bet tiene base, kaf no; tav tiene un pie, jet no) y el largo de la letra (vav llega a la línea, nun final baja de ella). Si te acostumbras a mirar esos tres lugares, la mayoría de las dudas desaparece.',
        { h: 'Un ejercicio que funciona' },
        'Escribe cada pareja en tu cuaderno, una letra junto a la otra, y nombra en voz alta el detalle que las distingue mientras la trazas. Después, abre la tabla del alfabeto, entra al modo de práctica y fíjate en qué letras te equivocas: esas son las que conviene repasar al día siguiente.',
        { h: 'Un detalle que importa' },
        'Algunas de estas diferencias son mínimas en el papel, pero cambian el sentido. La dálet y la resh distinguen אֶחָד, ejad, «uno», de אַחֵר, ajer, «otro». Por eso los escribas que copiaban la Escritura cuidaban esos trazos con tanto esmero, y por eso Jesús pudo hablar de la «tilde» que no pasaría de la ley (Mt 5:18).',
        { h: 'Una diferencia de pronunciación en la Biblia' },
        'La misma Biblia cuenta un caso en que una sola letra salvó o costó la vida. Después de una guerra entre Galaad y Efraín, los galaaditas tomaron los vados del Jordán, y a cada fugitivo le pedían que dijera שִׁבֹּלֶת, shibólet. Los efrateos no pronunciaban bien la shin y decían סִבֹּלֶת, sibólet, y así eran descubiertos (Jue 12:6). Desde entonces, en varias lenguas, «shibolet» significa una contraseña.',
        { ejercicio: {
          pregunta: '¿Qué letra es esta: ד?',
          opciones: [
            { t: 'Resh, que suena r.', ok: false, por_que: 'La resh (ר) es redondeada. Esta letra tiene una esquina que sobresale a la derecha.' },
            { t: 'Dálet, que suena d.', ok: true, por_que: 'La esquina recta que sobresale arriba a la derecha es la marca de la dálet.' },
            { t: 'Jaf final, que suena j.', ok: false, por_que: 'La jaf final (ך) baja debajo de la línea. Esta letra se queda en la línea.' }
          ],
          explicacion: 'Dálet tiene esquina, resh es redonda y jaf final baja.'
        } },
        { ejercicio: {
          pregunta: '¿Qué letra es esta: ח?',
          opciones: [
            { t: 'He, que suena h suave.', ok: false, por_que: 'La he (ה) tiene un espacio entre la pata izquierda y el techo. Esta letra está cerrada.' },
            { t: 'Tav, que suena t.', ok: false, por_que: 'La tav (ת) tiene un pie hacia la izquierda en la pata izquierda.' },
            { t: 'Jet, que suena j.', ok: true, por_que: 'Las dos patas tocan el techo y no hay pie: es la jet.' }
          ],
          explicacion: 'He abierta, jet cerrada, tav con pie.'
        } }
      ],
      pensar: 'Una sola letra separaba shibólet de sibólet. En la vida cristiana también hay detalles que parecen pequeños, pero que revelan de qué lado estamos. ¿Qué «detalles» de tu obediencia diaria muestran a quién perteneces?'
    },
    {
      id: 'numeros', n: 'Las letras como números', ref: 'Salmo 119; Apocalipsis 13:18; Deuteronomio 29:29',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El valor numérico de las letras',
          cab: ['Letra', 'Unidades', 'Letra', 'Decenas', 'Letra', 'Centenas'],
          filas: [
            ['א', '1', 'י', '10', 'ק', '100'],
            ['ב', '2', 'כ', '20', 'ר', '200'],
            ['ג', '3', 'ל', '30', 'ש', '300'],
            ['ד', '4', 'מ', '40', 'ת', '400'],
            ['ה', '5', 'נ', '50', '', ''],
            ['ו', '6', 'ס', '60', '', ''],
            ['ז', '7', 'ע', '70', '', ''],
            ['ח', '8', 'פ', '80', '', ''],
            ['ט', '9', 'צ', '90', '', ''],
          ],
          nota: 'Para escribir un número se suman las letras: יא = 11, כג = 23, קיט = 119. Para 15 y 16 se escribe טו (9 + 6) y טז (9 + 7), y no יה ni יו, porque esas letras inician el nombre de Dios.'
        } }
      ],
      texto: [
        'El hebreo antiguo no tenía cifras como las nuestras. Para escribir números usaba las mismas letras del alfabeto, cada una con un valor fijo: las nueve primeras son las unidades, las nueve siguientes las decenas y las cuatro últimas las centenas. Para formar un número se ponen las letras una al lado de la otra y se suman, empezando por la de mayor valor.',
        { h: 'Dónde lo verás' },
        'En una Biblia hebrea impresa, los capítulos y los versículos se numeran con letras. El Salmo 23 aparece como כג (20 + 3), y el Salmo 119 como קיט (100 + 10 + 9). Los calendarios judíos también fechan los días del mes y los años con letras. Si algún día abres una Biblia hebrea, esta tabla te servirá para encontrar el pasaje.',
        'Hay un detalle de reverencia: 15 no se escribe יה (10 + 5), ni 16 יו (10 + 6), porque esas combinaciones son el comienzo del nombre de Dios. Se escriben טו y טז.',
        { h: 'Los números no esconden un código' },
        'Desde la Edad Media, algunos maestros judíos, y después algunos autores cristianos, buscaron significados ocultos sumando el valor de las letras de las palabras. Esa práctica se llama gematría. Con suficiente imaginación, cualquier palabra puede sumar el número que uno quiere encontrar, y por eso estas cuentas no sirven para fundar una doctrina.',
        'La Biblia enseña con palabras claras, no con códigos que solo descubren unos pocos: «Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos» (Dt 29:29). El único lugar donde la Escritura invita a contar el número de un nombre es Apocalipsis 13:18, y aun allí no da la respuesta. Cuando un predicador o un video promete un mensaje secreto en los números de la Biblia, conviene recordar que el sentido de un texto se encuentra leyéndolo en su contexto.',
        { ir: { t: 'Ver «Leer lo que uno quiere» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#errores/2' } },
        { ejercicio: {
          pregunta: '¿Qué número representa כג?',
          opciones: [
            { t: '23, porque כ vale 20 y ג vale 3.', ok: true, por_que: 'Se suman los valores: 20 + 3 = 23. Así se numera el Salmo 23 en una Biblia hebrea.' },
            { t: '5, porque son la kaf (11.ª letra) menos la guímel (3.ª).', ok: false, por_que: 'Los valores no se restan ni se toman por la posición, sino por la tabla: kaf vale 20.' },
            { t: '203, porque la kaf vale 200.', ok: false, por_que: 'La kaf vale 20. La letra que vale 200 es la resh (ר).' }
          ],
          explicacion: 'Unidades, decenas y centenas: se suman las letras de mayor a menor.'
        } }
      ],
      pensar: 'Dios no esconde su voluntad en códigos: la reveló con claridad en su Palabra (Dt 29:29). ¿Hay algo que Dios ya te mostró claramente en la Escritura y que estás esperando confirmar por otro camino?'
    },
    {
      id: 'acrosticos', n: 'Los acrósticos: el Salmo 119', ref: 'Salmo 119; Proverbios 31:10-31; Lamentaciones 1:1',
      visual: [
        { tipo: 'hebreo', titulo: 'Álef', ref: 'Salmo 119:1', he: '@@wlc:sal/119/1', tr: 'Ashré temimé-dárej haholjim betorat Adonái.',
          palabras: P('@@wlcp:sal/119/1', [['ashré', 'dichosos'], ['temimé-dárej', 'los perfectos de camino'], ['haholjim', 'los que andan'], ['betorat', 'en la ley de'], ['Adonái', 'Jehová']]),
          rv: '@@sal/119/1' },
        { tipo: 'hebreo', titulo: 'Bet', ref: 'Salmo 119:9', he: '@@wlc:sal/119/9', rv: '@@sal/119/9' },
        { tipo: 'tabla', titulo: 'Acrósticos', tabla: {
          titulo: 'Los poemas alfabéticos de la Biblia',
          cab: ['Pasaje', 'Cómo está armado'],
          filas: [
            ['Salmo 119', '22 estrofas de 8 versículos; los 8 empiezan con la misma letra'],
            ['Salmos 111 y 112', 'Cada media línea empieza con la letra siguiente'],
            ['Salmos 25, 34 y 145', 'Un versículo por letra, con pequeñas irregularidades'],
            ['Salmo 37', 'Una letra cada dos versículos'],
            ['Proverbios 31:10-31', 'La mujer virtuosa: un versículo por letra'],
            ['Lamentaciones 1, 2 y 4', 'Un versículo por letra'],
            ['Lamentaciones 3', 'Tres versículos seguidos por cada letra (66 versículos)'],
          ],
          nota: 'La traducción no puede conservar el orden alfabético, por eso la Reina-Valera pone el nombre de cada letra como título de las estrofas del Salmo 119.'
        } }
      ],
      texto: [
        'Algunos poemas de la Biblia siguen el orden del alfabeto: el primer verso empieza con álef, el segundo con bet, y así hasta la tav. Se llaman acrósticos alfabéticos. En español es imposible conservarlos, pero en hebreo se ven con solo mirar la primera letra de cada línea.',
        { h: 'El Salmo 119' },
        'El más famoso es el Salmo 119, el capítulo más largo de la Biblia. Tiene 22 estrofas, una por cada letra, y cada estrofa tiene 8 versículos que empiezan con la misma letra: 176 versículos en total. Por eso en tu Reina-Valera cada estrofa lleva como título el nombre de una letra.',
        'En el panel tienes el comienzo de las dos primeras estrofas. El versículo 1 empieza con álef: אַשְׁרֵי, ashré, «bienaventurados». El versículo 9 empieza con bet: בַּמֶּה, bamé, «¿con qué?». Toca «Ocultar ayudas» e intenta reconocer la primera letra sin mirar la transliteración.',
        { h: '¿Por qué escribir así?' },
        'El orden alfabético ayudaba a memorizar: quien sabía el alfabeto tenía una guía para recitar el poema completo. Además expresa plenitud. El Salmo 119 alaba la Palabra de Dios «de la A a la Z», con todas las letras, como diciendo que no hay nada que la Palabra no abarque.',
        'En Lamentaciones, el recurso tiene otra fuerza. Jeremías llora la destrucción de Jerusalén con un dolor ordenado, letra por letra, como si quisiera expresar el sufrimiento entero, de principio a fin. En el capítulo 3, el centro del libro, cada letra se repite tres veces, y en medio de ese capítulo está la confesión más luminosa: «Por la misericordia de Jehová no hemos sido consumidos» (Lm 3:22).',
        'Proverbios termina con otro acróstico, el retrato de la mujer virtuosa (Pr 31:10-31): la sabiduría de todo el libro, encarnada en una vida, de álef a tav.',
        { ejercicio: {
          pregunta: '¿Por qué cada estrofa del Salmo 119 lleva en la Reina-Valera un título como «Alef» o «Bet»?',
          opciones: [
            { t: 'Porque son los nombres de los autores de cada estrofa.', ok: false, por_que: 'Álef, bet, guímel… son nombres de letras, no de personas.' },
            { t: 'Porque en hebreo los ocho versículos de cada estrofa empiezan con esa letra.', ok: true, por_que: 'El título conserva en la traducción la estructura alfabética que el español no puede reproducir.' },
            { t: 'Porque indican la melodía con que se cantaba cada estrofa.', ok: false, por_que: 'Las indicaciones musicales de los salmos son otras. Estos títulos marcan el orden alfabético.' }
          ],
          explicacion: 'El Salmo 119 recorre las 22 letras, ocho versículos por letra.'
        } }
      ],
      pensar: 'El Salmo 119 alaba la Palabra con todas las letras del alfabeto. Si escribieras tu propio acróstico de gratitud a Dios, de la A a la Z, ¿qué pondrías en las primeras letras?'
    }
  ];

  window.__ALEF.letras = letras;
})();
