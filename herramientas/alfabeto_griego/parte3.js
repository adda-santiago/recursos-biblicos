/* El alfabeto griego y la lectura · III. Vocales, diptongos y signos */
(() => {
  const { P } = window.__ALFA;

  const signos = [
    {
      id: 'vocales', n: 'Las siete vocales', ref: 'Juan 14:6; Mateo 5:18',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Las siete vocales griegas',
          cab: ['Vocal', 'Nombre', 'Suena', 'Duración'],
          filas: [
            ['α', 'alfa', 'a', 'breve o larga'],
            ['ε', 'épsilon', 'e', 'siempre breve'],
            ['η', 'eta', 'e', 'siempre larga'],
            ['ι', 'iota', 'i', 'breve o larga'],
            ['ο', 'ómicron', 'o', 'siempre breve'],
            ['ω', 'omega', 'o', 'siempre larga'],
            ['υ', 'ýpsilon', 'ü', 'breve o larga'],
          ],
          nota: 'En español hay cinco vocales; en griego, siete letras vocales. La e y la o tienen dos letras cada una: una breve y una larga.'
        } },
        { tipo: 'griego', titulo: 'Juan 14:6', ref: 'Juan 14:6', gr: '@@n1904:jn/14/6', tr: 'Légei autṓ Iēsús: Egṓ eimi hē hodós kai hē alḗtheia kai hē zōḗ; udeís érjetai pros ton Patéra ei mē di’ emú.',
          palabras: P('@@n1904p:jn/14/6', [['légei', 'dice'], ['autṓ', 'le'], ['Iēsús', 'Jesús'], ['egṓ', 'yo'], ['eimi', 'soy'], ['hē', 'el'], ['hodós', 'camino'], ['kai', 'y'], ['hē', 'la'], ['alḗtheia', 'verdad'], ['kai', 'y'], ['hē', 'la'], ['zōḗ', 'vida'], ['udeís', 'nadie'], ['érjetai', 'viene'], ['pros', 'a'], ['ton', 'el'], ['Patéra', 'Padre'], ['ei', 'si'], ['mē', 'no'], ['di’', 'por'], ['emú', 'mí']]),
          rv: '@@jn/14/6' }
      ],
      texto: [
        'Ya conoces todas las letras. En esta ruta vas a aprender a juntarlas para leer palabras completas, empezando por las vocales.',
        { h: 'Siete letras vocales' },
        'El griego tiene siete letras vocales: α, ε, η, ι, ο, ω y υ. Todas las demás son consonantes. A diferencia del hebreo, aquí no hay puntos ni signos debajo de las letras: la vocal es una letra más, escrita en la línea.',
        'Dos sonidos del español tienen dos letras en griego. La e puede ser breve (ε, épsilon) o larga (η, eta), y la o puede ser breve (ο, ómicron) o larga (ω, omega). Las otras tres vocales (α, ι, υ) pueden ser breves o largas, pero se escriben igual en los dos casos.',
        { h: '¿Se nota al hablar?' },
        'En el griego antiguo la duración de las vocales era importante: una vocal larga duraba más, como en la música una blanca dura más que una negra. En la pronunciación erasmiana se intenta sostener un poco más la η y la ω, pero en la práctica muchos estudiantes las pronuncian igual que la ε y la ο. Lo importante es reconocerlas al leer y escribirlas bien, porque cambiar una vocal breve por una larga puede cambiar la palabra.',
        'Por ejemplo, la terminación -ομεν indica «nosotros» en un verbo, y la terminación -ωμεν también, pero con otro matiz. Lo aprenderás en el recurso de gramática; por ahora basta con ver que ο y ω no son intercambiables.',
        { h: 'Practica con Juan 14:6' },
        'En el panel tienes las palabras de Jesús: «Yo soy el camino, y la verdad, y la vida» (Jn 14:6). Busca las vocales largas: la ω de ἐγώ y de ζωή, la η de ἡ y de ἀλήθεια. Lee el versículo en voz alta alargando un poco esas vocales.',
        { ejercicio: {
          pregunta: '¿Cuál de estas palabras tiene una o larga?',
          opciones: [
            { t: 'λόγος, «palabra»', ok: false, por_que: 'Las dos o de λόγος son ómicron (ο), breves.' },
            { t: 'ζωή, «vida»', ok: true, por_que: 'La ω de ζωή es omega, una o larga.' },
            { t: 'ὁδός, «camino»', ok: false, por_que: 'Las dos o de ὁδός son ómicron (ο), breves.' }
          ],
          explicacion: 'La omega (ω) es siempre larga, y la ómicron (ο), siempre breve.'
        } }
      ],
      pensar: 'Jesús no dijo «yo enseño un camino», sino «yo soy el camino». ¿Qué diferencia hay entre seguir unas reglas y seguir a una persona?'
    },
    {
      id: 'diptongos', n: 'Los diptongos', ref: 'Mateo 5:3; Marcos 1:1; Juan 3:16',
      visual: [
        { tipo: 'tabla', titulo: 'Los diptongos', tabla: {
          titulo: 'Los diptongos griegos',
          cab: ['Diptongo', 'Suena', 'Ejemplo'],
          filas: [
            ['αι', 'ai, como en «aire»', 'καί, kai, «y»'],
            ['ει', 'ei, como en «rey»', 'εἰμί, eimí, «soy»'],
            ['οι', 'oi, como en «hoy»', 'οἱ, hoi, «los»'],
            ['υι', 'üi', 'υἱός, hyiós, «hijo»'],
            ['αυ', 'au, como en «auto»', 'αὐτός, autós, «él»'],
            ['ευ', 'eu, como en «Europa»', 'εὐαγγέλιον, euangélion, «evangelio»'],
            ['ου', 'u, como en «luz»', 'οὐρανός, uranós, «cielo»'],
            ['ηυ', 'eu (poco frecuente)', 'ηὔξανεν, ēúxanen, «crecía» (Hch 12:24)'],
          ],
          nota: 'ου no suena «ou», sino u. Es el diptongo más frecuente del Nuevo Testamento.'
        } },
        { tipo: 'griego', titulo: 'Marcos 1:1', ref: 'Marcos 1:1', gr: '@@n1904:mr/1/1', tr: 'Arjḗ tu euangelíu Iēsú Jristú (Hyiú Theú).',
          palabras: P('@@n1904p:mr/1/1', [['arjḗ', 'principio'], ['tu', 'del'], ['euangelíu', 'evangelio'], ['Iēsú', 'de Jesús'], ['Jristú', 'Cristo'], ['Hyiú', 'Hijo'], ['Theú', 'de Dios']]),
          rv: '@@mr/1/1' }
      ],
      texto: [
        'Un diptongo es la unión de dos vocales que se pronuncian en una sola sílaba, como «ai» en «aire» o «au» en «auto». En griego hay ocho diptongos. Casi todos suenan como esperarías, salvo uno.',
        { h: 'Los diptongos con iota' },
        'Cuatro diptongos terminan en iota: αι (ai), ει (ei), οι (oi) y υι (üi). Se leen como en español: καί, «y», se lee kai; εἰμί, «soy», se lee eimí. La palabra καί es la más frecuente del Nuevo Testamento después del artículo: la vas a leer miles de veces.',
        { h: 'Los diptongos con ýpsilon' },
        'Cuando la ýpsilon va detrás de otra vocal, deja de sonar ü y suena u. Así, αυ es au y ευ es eu: αὐτός se lee autós, y εὐαγγέλιον se lee euangélion. De ahí vienen palabras españolas como «autógrafo» y «evangelio», donde la u griega se volvió v.',
        { h: 'El diptongo ου' },
        'El diptongo ου es la excepción, y también el más frecuente. No suena «ou»: suena simplemente u. Por eso οὐρανός, «cielo», se lee uranós, y Ἰησοῦ, «de Jesús», se lee Iēsú. Muchas terminaciones griegas llevan ου, como -ου y -ους, así que aprenderlo bien ahorra muchos tropiezos.',
        'En el panel tienes el primer versículo de Marcos. Tiene cinco veces el diptongo ου: τοῦ, εὐαγγελίου, Ἰησοῦ, Χριστοῦ, Υἱοῦ y Θεοῦ. Léelo en voz alta y verás cómo se repite el sonido u al final de las palabras: es la terminación del genitivo, que se traduce con «de».',
        { h: 'Cuando no es diptongo' },
        'A veces dos vocales que podrían formar un diptongo se pronuncian por separado. Las ediciones lo indican con dos puntos sobre la segunda vocal, la diéresis: Μωϋσῆς se lee Mō-y-sḗs, en tres sílabas, y no «Mui-sés».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra οὐρανός, «cielo»?',
          opciones: [
            { t: 'ouranós', ok: false, por_que: 'El diptongo ου no suena «ou», sino u.' },
            { t: 'uranós', ok: true, por_que: 'ου suena u. De esta palabra viene el nombre del planeta Urano.' },
            { t: 'yranós', ok: false, por_que: 'La ýpsilon, detrás de la ómicron, forma el diptongo ου y suena u.' }
          ],
          explicacion: 'Recuerda la excepción: ου = u.'
        } }
      ],
      pensar: 'Marcos empieza su libro llamándolo «el evangelio», la buena noticia de Jesucristo. ¿A quién podrías contarle esta semana esa buena noticia?'
    },
    {
      id: 'gamma-nasal', n: 'La gamma nasal y las consonantes dobles', ref: 'Lucas 2:10; Marcos 1:1; Hechos 2:4',
      visual: [
        { tipo: 'griego', titulo: 'Lucas 2:10', ref: 'Lucas 2:10', gr: '@@n1904:lc/2/10', tr: 'Kai éipen autóis ho ángelos: Mē fobéisthe; idú gar euangelízomai hymín jarán megálēn, hḗtis éstai pantí tō laṓ.',
          palabras: P('@@n1904p:lc/2/10', [['kai', 'y'], ['éipen', 'dijo'], ['autóis', 'les'], ['ho', 'el'], ['ángelos', 'ángel'], ['mē', 'no'], ['fobéisthe', 'temáis'], ['idú', 'he aquí'], ['gar', 'porque'], ['euangelízomai', 'os anuncio buenas nuevas'], ['hymín', 'a vosotros'], ['jarán', 'gozo'], ['megálēn', 'grande'], ['hḗtis', 'que'], ['éstai', 'será'], ['pantí', 'para todo'], ['tō', 'el'], ['laṓ', 'pueblo']]),
          rv: '@@lc/2/10' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La gamma ante consonantes de garganta',
          cab: ['Grupo', 'Suena', 'Ejemplo'],
          filas: [
            ['γγ', 'ng', 'ἄγγελος, ángelos, «ángel»'],
            ['γκ', 'nk', 'ἀνάγκη, anánkē, «necesidad»'],
            ['γξ', 'nx', 'σάλπιγξ, sálpinx, «trompeta»'],
            ['γχ', 'nj', 'ἐλέγχω, elénjō, «reprender»'],
          ],
          nota: 'Las consonantes dobles son ζ (ds), ξ (ks) y ψ (ps): una sola letra para dos sonidos.'
        } }
      ],
      texto: [
        'Hay una regla de lectura que tropieza a casi todos los principiantes, y conviene aprenderla temprano: la gamma delante de ciertas consonantes no suena g, sino n.',
        { h: 'La gamma nasal' },
        'Cuando una gamma va delante de otra gamma (γγ), o delante de κ, ξ o χ, se pronuncia como una n. Por eso ἄγγελος se lee ángelos, no «ággelos». De ahí viene nuestra palabra «ángel». Y εὐαγγέλιον se lee euangélion, de donde viene «evangelio».',
        'Esas cuatro letras (γ, κ, ξ, χ) tienen algo en común: se pronuncian en la garganta. La gamma se adapta a ellas, igual que en español la n de «banco» suena distinta de la n de «bando».',
        'El panel muestra el anuncio del ángel a los pastores, que tiene dos ejemplos: ἄγγελος, «ángel», y εὐαγγελίζομαι, «os doy buenas nuevas», del mismo verbo que «evangelizar». Las dos se leen con n.',
        { h: 'Las consonantes dobles' },
        'Tres letras griegas representan dos sonidos a la vez: la dseta (ζ = ds), la xi (ξ = ks) y la psi (ψ = ps). Al leer, pronuncia los dos sonidos. Al escribir, recuerda que el griego no escribe κσ ni πσ: usa ξ y ψ. Por eso, cuando un verbo terminado en κ recibe una σ, aparece una ξ: lo verás en la gramática.',
        { h: 'Consonantes dobles de verdad' },
        'Cuando una consonante aparece dos veces seguidas (λλ, σσ, ττ, ρρ), se pronuncian las dos, o al menos se alarga un poco el sonido: ἐκκλησία se lee ek-klē-sía, y γλῶσσα, «lengua», se lee glṓs-sa. En Hechos 2:4 los discípulos hablaron ἑτέραις γλώσσαις, «en otras lenguas».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra ἄγγελος?',
          opciones: [
            { t: 'ággelos', ok: false, por_que: 'La primera gamma, delante de otra gamma, suena n.' },
            { t: 'ángelos', ok: true, por_que: 'γγ suena ng. Por eso decimos «ángel».' },
            { t: 'ájjelos', ok: false, por_que: 'La gamma nunca suena j.' }
          ],
          explicacion: 'La gamma delante de γ, κ, ξ o χ suena n.'
        } }
      ],
      pensar: 'El ángel anunció «nuevas de gran gozo, que será para todo el pueblo» (Lc 2:10). ¿Vives el evangelio como una noticia de gozo o como una carga?'
    },
    {
      id: 'espiritus', n: 'Los espíritus: suave y áspero', ref: 'Juan 1:29; Mateo 28:19; Romanos 3:23',
      visual: [
        { tipo: 'tabla', titulo: 'Los espíritus', tabla: {
          titulo: 'Los dos espíritus',
          cab: ['Signo', 'Nombre', 'Se lee', 'Ejemplo'],
          filas: [
            ['ἀ', 'espíritu suave', 'nada: la vocal sola', 'ἀγάπη, agápē, «amor»'],
            ['ἁ', 'espíritu áspero', 'h aspirada antes de la vocal', 'ἁμαρτία, hamartía, «pecado»'],
            ['ἐ / ἑ', 'suave / áspero', 'e / he', 'ἐν, en, «en»; ἕν, hen, «uno»'],
            ['ὁ', 'espíritu áspero', 'ho', 'ὁ, ho, «el»'],
            ['ῥ', 'espíritu áspero sobre rho', 'rh', 'ῥῆμα, rhḗma, «palabra»'],
            ['υἱ', 'la ýpsilon inicial lleva siempre áspero', 'hy', 'υἱός, hyiós, «hijo»'],
          ],
          nota: 'En un diptongo, el espíritu va sobre la segunda vocal: εὐαγγέλιον, αἰών, οὐρανός.'
        } },
        { tipo: 'griego', titulo: 'Juan 1:29', ref: 'Juan 1:29', gr: '@@n1904:jn/1/29', tr: 'Tē epáurion blépei ton Iēsún erjómenon pros autón, kai légei: Íde ho Amnós tu Theú ho áirōn tēn hamartían tu kósmu.',
          palabras: P('@@n1904p:jn/1/29', [['tē', 'el'], ['epáurion', 'día siguiente'], ['blépei', 've'], ['ton', 'a'], ['Iēsún', 'Jesús'], ['erjómenon', 'que venía'], ['pros', 'a'], ['autón', 'él'], ['kai', 'y'], ['légei', 'dice'], ['íde', 'he aquí'], ['ho', 'el'], ['Amnós', 'Cordero'], ['tu', 'de'], ['Theú', 'Dios'], ['ho', 'que'], ['áirōn', 'quita'], ['tēn', 'el'], ['hamartían', 'pecado'], ['tu', 'del'], ['kósmu', 'mundo']]),
          rv: '@@jn/1/29' }
      ],
      texto: [
        'El griego no tiene una letra para la h. En su lugar, toda palabra que empieza con vocal lleva encima de ella un pequeño signo llamado espíritu, que indica si hay o no una h antes de esa vocal.',
        { h: 'Suave y áspero' },
        'El espíritu suave (ἀ) parece una pequeña coma o un apóstrofo vuelto hacia la izquierda. Indica que no hay h: la vocal se lee sola. ἀγάπη se lee agápē.',
        'El espíritu áspero (ἁ) parece una coma al revés, abierta hacia la derecha. Indica una h aspirada antes de la vocal, como una j muy suave. ἁμαρτία, «pecado», se lee hamartía. De la palabra ἅγιος, «santo», viene la h de «hagiografía», y de αἷμα, «sangre», la h de «hemorragia».',
        'Un truco para recordarlos: el áspero (ἁ) se abre hacia la derecha, como una c; el suave (ἀ) se abre hacia la izquierda.',
        { h: 'Dónde va el espíritu' },
        'El espíritu va sobre la vocal inicial. Si la palabra empieza con mayúscula, va a la izquierda de la letra: Ἰησοῦς, Ἁγίου. Si empieza con un diptongo, va sobre la segunda vocal del diptongo: αὐτός, οὐρανός, εὐαγγέλιον. Y si va junto a un acento, los dos se escriben juntos: ἕν, ὥρα.',
        'Dos casos especiales. Toda palabra que comienza con rho lleva espíritu áspero (ῥ), y por eso escribimos rh en palabras como «rétor» o en nombres como Rhode (Hch 12:13). Y toda palabra que comienza con ýpsilon lleva espíritu áspero: υἱός se lee hyiós, ὑμεῖς se lee hymeís.',
        { h: 'Una diferencia que importa' },
        'El espíritu puede distinguir dos palabras que se escriben igual. ἐν (en) significa «en»; ἕν (hen) significa «uno». ὁ (ho) es el artículo «el»; ὅ (ho, con acento) es el pronombre «el cual». El panel muestra Juan 1:29: la frase ὁ Ἀμνὸς τοῦ Θεοῦ ὁ αἴρων τὴν ἁμαρτίαν tiene los dos espíritus. Distingue cada uno antes de leer.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra ἁμαρτία, «pecado»?',
          opciones: [
            { t: 'amartía', ok: false, por_que: 'El signo sobre la alfa es el espíritu áspero: indica una h.' },
            { t: 'hamartía', ok: true, por_que: 'El espíritu áspero (ἁ) agrega una h aspirada antes de la vocal.' },
            { t: 'jamartía, con una j fuerte', ok: false, por_que: 'La h del espíritu áspero es muy suave, no una j fuerte como la de la ji (χ).' }
          ],
          explicacion: 'Espíritu suave: sin h. Espíritu áspero: con h.'
        } }
      ],
      pensar: 'Juan el Bautista señaló a Jesús como «el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29). ¿Hay algún pecado que necesitas entregarle hoy, confiando en que él lo quita?'
    },
    {
      id: 'acentos', n: 'Los tres acentos', ref: 'Juan 3:16; Romanos 1:16',
      visual: [
        { tipo: 'tabla', titulo: 'Los acentos', tabla: {
          titulo: 'Los tres acentos griegos',
          cab: ['Signo', 'Nombre', 'Ejemplo', 'Se lee'],
          filas: [
            ['ά', 'agudo', 'λόγος', 'lógos'],
            ['ὰ', 'grave', 'καὶ ὁ λόγος', 'kai ho lógos'],
            ['ᾶ', 'circunflejo', 'φῶς', 'fōs'],
            ['ἄ ἅ', 'con espíritu', 'ἄγγελος, ἅγιος', 'ángelos, hágios'],
            ['ἆ ἇ', 'circunflejo con espíritu', 'οὖν, αἷμα', 'un, háima'],
          ],
          nota: 'Para leer en voz alta, los tres acentos indican lo mismo: la sílaba que se pronuncia con más fuerza.'
        } },
        { tipo: 'griego', titulo: 'Juan 3:16', ref: 'Juan 3:16', gr: '@@n1904:jn/3/16', tr: 'Hútōs gar ēgápēsen ho Theós ton kósmon, hṓste ton Hyión ton monogenḗ édōken, hína pas ho pistéuōn eis autón mē apólētai all’ éjē zōḗn aiṓnion.' }
      ],
      texto: [
        'Casi todas las palabras griegas de una edición impresa llevan un acento. Hay tres: el agudo (ά), el grave (ὰ) y el circunflejo (ᾶ). Al principio pueden parecer muchos signos, pero para leer en voz alta la regla es sencilla: el acento marca la sílaba que se pronuncia con más fuerza, como la tilde del español.',
        { h: 'Para qué servían' },
        'En el griego antiguo los acentos indicaban tonos: la voz subía (agudo), bajaba (grave) o subía y bajaba en la misma sílaba (circunflejo). Por eso el circunflejo solo aparece sobre vocales largas y diptongos, donde hay tiempo para subir y bajar la voz. Con los siglos, el tono se volvió intensidad, y hoy todos los acentos se leen igual.',
        { h: 'El grave' },
        'El acento grave tiene una regla curiosa: aparece solo en la última sílaba, cuando una palabra que debería llevar acento agudo al final va seguida de otra palabra sin puntuación en medio. Por eso καί aparece casi siempre como καὶ, y Θεός como Θεὸς dentro de la frase. Cuando hay una coma o un punto después, vuelve el agudo. Para leer, no importa: es la misma sílaba fuerte.',
        { h: 'Palabras sin acento' },
        'Algunas palabras muy breves no llevan acento propio y se apoyan en la palabra que va antes o después: ἐν, «en»; εἰς, «a, hacia»; ὁ, «el»; οὐ, «no». Al leerlas, júntalas con la palabra vecina: ἐν ἀρχῇ suena casi como una sola palabra, en arjḗ.',
        'Hay incluso palabras que pasan su acento a la palabra anterior. En Romanos 1:16 lo verás (Θεοῦ ἐστιν): ἐστίν, «es», a veces aparece sin acento. No te preocupes por las reglas: lee la sílaba que tenga el acento.',
        { h: 'Practica con Juan 3:16' },
        'El panel muestra Juan 3:16 sin las palabras separadas. Lee primero en voz alta marcando cada acento con un pequeño golpe de voz. Después compara con la transliteración, que pone tilde en la sílaba fuerte. Cuando llegues al taller lo leerás palabra por palabra.',
        { ejercicio: {
          pregunta: 'En la frase καὶ ὁ Λόγος, ¿qué indica el acento grave de καὶ?',
          opciones: [
            { t: 'Que la palabra se pronuncia sin ninguna fuerza.', ok: false, por_que: 'La sílaba con acento grave también es la sílaba fuerte.' },
            { t: 'Que es la sílaba fuerte, y que la palabra va seguida de otra sin puntuación.', ok: true, por_que: 'El grave reemplaza al agudo final cuando sigue otra palabra sin pausa.' },
            { t: 'Que es otra palabra distinta de καί.', ok: false, por_que: 'Es la misma palabra, «y». Solo cambia el acento por su posición en la frase.' }
          ],
          explicacion: 'Para leer en voz alta, los tres acentos marcan la sílaba fuerte.'
        } }
      ],
      pensar: 'Juan 3:16 comienza con la palabra οὕτως, «de tal manera». ¿Cómo describirías tú la manera en que Dios te ha amado?'
    },
    {
      id: 'iota', n: 'La iota suscrita y otros signos pequeños', ref: 'Juan 1:1; Efesios 2:8; Juan 14:6',
      visual: [
        { tipo: 'tabla', titulo: 'Signos', tabla: {
          titulo: 'Signos pequeños que conviene reconocer',
          cab: ['Signo', 'Nombre', 'Qué indica', 'Ejemplo'],
          filas: [
            ['ᾳ ῃ ῳ', 'iota suscrita', 'Una iota que ya no se pronunciaba, escrita debajo', 'ἐν ἀρχῇ, en arjḗ'],
            ['ᾼ ῌ ῼ', 'iota adscrita', 'La misma iota junto a la mayúscula', 'ΤΗΙ ΑΡΧΗΙ en mayúsculas'],
            ['ϋ ϊ', 'diéresis', 'Las dos vocales se leen separadas', 'Μωϋσῆς, Mō-y-sḗs'],
            ['’', 'apóstrofo', 'Se perdió la vocal final ante otra vocal', 'δι’ ἐμοῦ (en vez de διὰ ἐμοῦ)'],
            ['ν final', 'ny móvil', 'Una n que se agrega al final ante vocal o pausa', 'ἐστίν, ἐστι'],
          ],
          nota: 'Ninguno de estos signos cambia la pronunciación erasmiana más allá de lo indicado.'
        } },
        { tipo: 'griego', titulo: 'Efesios 2:8', ref: 'Efesios 2:8', gr: '@@n1904:ef/2/8', tr: 'Tē gar járití este sesōsménoi dia písteōs; kai túto uk ex hymṓn, Theú to dṓron;',
          palabras: P('@@n1904p:ef/2/8', [['tē', 'por la'], ['gar', 'porque'], ['járití', 'gracia'], ['este', 'sois'], ['sesōsménoi', 'salvos'], ['dia', 'por medio de'], ['písteōs', 'la fe'], ['kai', 'y'], ['túto', 'esto'], ['uk', 'no'], ['ex', 'de'], ['hymṓn', 'vosotros'], ['Theú', 'de Dios'], ['to', 'el'], ['dṓron', 'don']]),
          rv: '@@ef/2/8' }
      ],
      texto: [
        'Esta estación reúne unos signos pequeños que aparecen menos, pero que vas a encontrar desde el primer versículo de Juan.',
        { h: 'La iota suscrita' },
        'En el griego antiguo existían diptongos largos con iota: ᾱι, ηι, ωι. Con el tiempo esa iota dejó de pronunciarse, pero los escritores no quisieron perderla, porque cambia el sentido gramatical. Los copistas bizantinos la escribieron pequeña, debajo de la vocal: ᾳ, ῃ, ῳ. Se llama iota suscrita, y no se pronuncia.',
        'La verás muchísimo, porque marca una terminación muy común, la del dativo, que suele traducirse con «a», «en», «con» o «por». En Juan 1:1, ἐν ἀρχῇ, «en el principio», lleva una iota suscrita. En Efesios 2:8, en el panel, la tienes en τῇ, «por la», y en σεσῳσμένοι, «salvos». Lee esas palabras sin la iota: tē, sesōsménoi.',
        'Cuando el texto está en mayúsculas, la iota no va debajo sino al lado, y se llama adscrita: ΤΗΙ.',
        { h: 'La diéresis' },
        'Dos puntos sobre una ι o una υ indican que esa vocal no forma diptongo con la anterior: se lee aparte. Μωϋσῆς, «Moisés», se lee Mō-y-sḗs, y Ἠσαΐας, «Isaías», se lee Ē-sa-í-as. Es lo mismo que hace la diéresis española en «pingüino».',
        { h: 'El apóstrofo' },
        'Cuando una palabra que termina en vocal va seguida de otra que empieza con vocal, a veces la primera pierde su última vocal, y se marca con un apóstrofo. En Juan 14:6, δι’ ἐμοῦ es διὰ ἐμοῦ, «por medio de mí». En Juan 3:16, ἀλλ’ ἔχῃ es ἀλλὰ ἔχῃ, «sino que tenga».',
        { h: 'La ny móvil' },
        'Algunas palabras agregan una ν al final cuando la siguiente empieza con vocal o cuando hay una pausa: ἐστι o ἐστιν, «es». Es la misma palabra. Sucede algo parecido en inglés con «a» y «an».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra ἀρχῇ, con iota suscrita?',
          opciones: [
            { t: 'arjḗi, pronunciando la iota.', ok: false, por_que: 'La iota suscrita no se pronuncia.' },
            { t: 'arjḗ, sin pronunciar la iota.', ok: true, por_que: 'La iota suscrita se escribe pero no se lee. Indica una terminación gramatical.' },
            { t: 'arkḗ, con k.', ok: false, por_que: 'La χ suena j, no k.' }
          ],
          explicacion: 'La iota suscrita es un recuerdo de una pronunciación antigua. Se ve, pero no se oye.'
        } }
      ],
      pensar: '«Por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios» (Ef 2:8). ¿Qué cambia en tu vida cuando entiendes que la salvación es un regalo y no un premio?'
    },
    {
      id: 'puntuacion', n: 'La puntuación: el punto alto y el punto y coma', ref: 'Juan 18:33; Mateo 6:9; Mateo 16:15',
      visual: [
        { tipo: 'tabla', titulo: 'Puntuación', tabla: {
          titulo: 'Los signos de puntuación griegos',
          cab: ['Signo', 'Nombre', 'Equivale a', 'Ejemplo'],
          filas: [
            ['.', 'punto', 'punto', 'ἐστίν.'],
            [',', 'coma', 'coma', 'ὁ Λόγος,'],
            ['·', 'punto alto', 'punto y coma o dos puntos', 'οὐρανοῖς·'],
            [';', 'signo de interrogación', '¿…?', 'Ἰουδαίων;'],
          ],
          nota: 'El punto y coma griego (;) es una pregunta. El punto alto (·) hace de nuestro punto y coma.'
        } },
        { tipo: 'griego', titulo: 'Juan 18:33', ref: 'Juan 18:33', gr: '@@n1904:jn/18/33', tr: 'Eisḗlthen un pálin eis to praitṓrion ho Peilátos kai efṓnēsen ton Iēsún kai éipen autṓ: Sy ei ho Basiléus tōn Iudáiōn?',
          palabras: P('@@n1904p:jn/18/33', [['eisḗlthen', 'entró'], ['un', 'pues'], ['pálin', 'otra vez'], ['eis', 'en'], ['to', 'el'], ['praitṓrion', 'pretorio'], ['ho', '(el)'], ['Peilátos', 'Pilato'], ['kai', 'y'], ['efṓnēsen', 'llamó'], ['ton', 'a'], ['Iēsún', 'Jesús'], ['kai', 'y'], ['éipen', 'dijo'], ['autṓ', 'le'], ['sy', 'tú'], ['ei', 'eres'], ['ho', 'el'], ['Basiléus', 'Rey'], ['tōn', 'de los'], ['Iudáiōn', 'judíos']]),
          rv: '@@jn/18/33' }
      ],
      texto: [
        'La última estación de esta ruta es breve, pero evita una confusión muy común. La edición griega usa cuatro signos de puntuación, y dos de ellos no significan lo mismo que en español.',
        { h: 'El punto y coma es una pregunta' },
        'El signo que parece nuestro punto y coma (;) es, en griego, el signo de interrogación. Solo va al final de la pregunta, no al comienzo. En Juan 18:33, Pilato pregunta a Jesús: Σὺ εἶ ὁ Βασιλεὺς τῶν Ἰουδαίων; «¿Eres tú el Rey de los judíos?». Si lo lees como una afirmación, pierdes la pregunta.',
        'Esto importa en algunos pasajes donde los editores dudan si una frase es pregunta o afirmación. Los manuscritos antiguos casi no tenían puntuación, así que es una decisión del editor, y por eso las traducciones a veces difieren. En esos casos, el contexto decide.',
        { h: 'El punto alto' },
        'El punto que va arriba de la línea (·) se llama punto alto. Marca una pausa mayor que la coma y menor que el punto: hace las veces de nuestro punto y coma o de nuestros dos puntos. En Mateo 6:9 lo verás después de οὐρανοῖς, «cielos», y después de σου, «tu (nombre)», separando las peticiones del Padre Nuestro.',
        { h: 'Las comillas' },
        'El griego del Nuevo Testamento no tiene comillas. Para indicar que alguien empieza a hablar, la edición de Nestle usa una mayúscula, como viste en la ruta II. A veces aparece antes la palabra ὅτι, que entonces equivale a nuestros dos puntos: «dijo: …».',
        { h: 'Cierre de la ruta' },
        'Ya conoces todos los signos de una edición griega: letras, vocales, diptongos, espíritus, acentos, iota suscrita y puntuación. En la ruta IV vas a juntarlo todo para leer sílabas, nombres y palabras, y para leer un manuscrito antiguo.',
        { ejercicio: {
          pregunta: 'Lees en griego: Τί ἐστιν ἀλήθεια; ¿Qué tipo de frase es?',
          opciones: [
            { t: 'Una afirmación, porque termina en punto y coma.', ok: false, por_que: 'En griego, el punto y coma (;) es el signo de interrogación.' },
            { t: 'Una pregunta: «¿Qué es la verdad?».', ok: true, por_que: 'Es la pregunta de Pilato en Juan 18:38. El signo final (;) marca la interrogación.' },
            { t: 'Una frase incompleta que sigue en el versículo siguiente.', ok: false, por_que: 'El signo final no indica continuación, sino pregunta.' }
          ],
          explicacion: 'Recuerda: ; en griego es ¿…?, y · es nuestro punto y coma.'
        } }
      ],
      pensar: 'Pilato preguntó a Jesús si era rey, y Jesús le respondió que su reino no es de este mundo (Jn 18:36). ¿Qué significa para ti vivir bajo el reinado de Cristo hoy?'
    }
  ];

  window.__ALFA.signos = signos;
})();
