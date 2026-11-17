/* El alfabeto griego y la lectura · II. Las 24 letras */
(() => {
  const { P } = window.__ALFA;
  const CAB = ['Mayúscula', 'Minúscula', 'Nombre', 'Sonido', 'Ejemplo'];

  const letras = [
    {
      id: 'alfa-dseta', n: 'Primer grupo: de alfa a dseta', ref: '1 Juan 4:8; Mateo 6:10; Mateo 5:18; Juan 1:14; Mateo 16:18; Juan 14:6',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Α Β Γ Δ Ε Ζ',
          cab: CAB,
          filas: [
            ['Α', 'α', 'alfa', 'a', 'ἀγάπη, agápē, «amor» (1 Jn 4:8)'],
            ['Β', 'β', 'beta', 'b', 'βασιλεία, basileía, «reino» (Mt 6:10)'],
            ['Γ', 'γ', 'gamma', 'g, siempre como en «gato»', 'γῆ, gē, «tierra» (Mt 5:18)'],
            ['Δ', 'δ', 'delta', 'd', 'δόξα, dóxa, «gloria» (Jn 1:14)'],
            ['Ε', 'ε', 'épsilon', 'e breve', 'ἐκκλησία, ekklēsía, «iglesia» (Mt 16:18)'],
            ['Ζ', 'ζ', 'dseta', 'ds, como en «adsorber»', 'ζωή, zōḗ, «vida» (Jn 14:6)'],
          ],
          nota: 'Las palabras de ejemplo aparecen en el versículo indicado, a veces con otra terminación.'
        } },
        { tipo: 'griego', titulo: '1 Juan 4:8', ref: '1 Juan 4:8', gr: '@@n1904:1jn/4/8', tr: 'Ho mē agapṓn uk égnō ton Theón, hoti ho Theós agápē estín.',
          palabras: P('@@n1904p:1jn/4/8', [['ho', 'el (que)'], ['mē', 'no'], ['agapṓn', 'ama'], ['uk', 'no'], ['égnō', 'ha conocido'], ['ton', 'a'], ['Theón', 'Dios'], ['hoti', 'porque'], ['ho', 'el'], ['Theós', 'Dios'], ['agápē', 'amor'], ['estín', 'es']]),
          rv: '@@1jn/4/8' }
      ],
      texto: [
        'El alfabeto griego tiene 24 letras. Las aprenderás en cuatro grupos de seis, en su orden, que es el que usan los diccionarios. Cada letra tiene una forma mayúscula y una minúscula. Al leer el Nuevo Testamento vas a ver casi siempre minúsculas, así que concéntrate primero en ellas.',
        { h: 'Las seis primeras' },
        'La alfa (α) suena a, como en español. Se escribe como una a redonda, sin el palito de arriba. Es la primera letra de ἀγάπη, la palabra que Juan usa para decir que «Dios es amor» (1 Jn 4:8).',
        'La beta (β) suena b. Tiene una cola que baja bajo la línea, a diferencia de nuestra b. La gamma (γ) suena siempre g, como en «gato» o «guitarra», nunca como en «gente»: γῆ se lee «gē», no «je». Su minúscula parece una y con la cola abierta.',
        'La delta (δ) suena d. Su mayúscula es un triángulo (Δ), y por eso llamamos «delta» a la desembocadura triangular de un río. La épsilon (ε) es una e breve, como la e de «mesa». La dseta (ζ) suena ds, como la unión de las letras d y s en «adsorber». Es la primera letra de ζωή, «vida».',
        { h: 'Fíjate en las diferencias' },
        'Tres de estas letras se parecen a las nuestras y suenan igual: alfa, beta y épsilon. La gamma y la delta tienen mayúsculas distintas de las nuestras (Γ y Δ). Y la dseta no tiene equivalente en español: la transliteramos con z, como hacen casi todos los diccionarios, pero la pronunciamos ds.',
        'Un consejo para memorizar: escribe cada letra cinco veces mientras dices su nombre en voz alta. Después lee las palabras de la tabla tapando la transliteración.',
        'En el panel tienes 1 Juan 4:8. Busca las letras que ya conoces: la alfa y la gamma de ἀγάπη, la épsilon de ἔγνω y de ἐστίν. Las demás las conocerás en las estaciones que siguen.',
        { ejercicio: {
          pregunta: '¿Cómo se pronuncia la gamma en la palabra γῆ, «tierra»?',
          opciones: [
            { t: 'Como la j de «jarro»: «je».', ok: false, por_que: 'La gamma nunca suena j. Ese sonido es el de otra letra, la ji (χ).' },
            { t: 'Como la g de «gato»: «gē».', ok: true, por_que: 'La gamma suena siempre g, como en «gato» o «guitarra», también delante de e y de i.' },
            { t: 'Como una y: «ye».', ok: false, por_que: 'La minúscula γ se parece a una y, pero suena g.' }
          ],
          explicacion: 'La gamma es siempre g suave. Solo cambia delante de otra gamma o de κ, ξ o χ, donde suena n; lo verás en la ruta III.'
        } }
      ],
      pensar: 'Juan resume a Dios en tres palabras: ὁ Θεὸς ἀγάπη, «Dios es amor». ¿Cómo se nota ese amor de Dios en tu manera de tratar a los demás esta semana?'
    },
    {
      id: 'eta-my', n: 'Segundo grupo: de eta a my', ref: 'Mateo 6:34; Juan 1:1; Mateo 1:21; Juan 3:16; Lucas 8:11; Juan 13:35',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Η Θ Ι Κ Λ Μ',
          cab: CAB,
          filas: [
            ['Η', 'η', 'eta', 'e larga', 'ἡμέρα, hēméra, «día» (Mt 6:34)'],
            ['Θ', 'θ', 'theta', 'th, como la z de España', 'Θεός, Theós, «Dios» (Jn 1:1)'],
            ['Ι', 'ι', 'iota', 'i', 'Ἰησοῦς, Iēsús, «Jesús» (Mt 1:21)'],
            ['Κ', 'κ', 'kappa', 'k', 'κόσμος, kósmos, «mundo» (Jn 3:16)'],
            ['Λ', 'λ', 'lambda', 'l', 'λόγος, lógos, «palabra» (Lc 8:11)'],
            ['Μ', 'μ', 'my', 'm', 'μαθητής, mathētḗs, «discípulo» (Jn 13:35)'],
          ],
          nota: 'La eta mayúscula (Η) parece una H, pero es una vocal: e larga.'
        } },
        { tipo: 'griego', titulo: 'Juan 13:35', ref: 'Juan 13:35', gr: '@@n1904:jn/13/35', tr: 'En tútō gnṓsontai pántes hoti emoí mathētaí este, ean agápēn éjēte en allḗlois.',
          palabras: P('@@n1904p:jn/13/35', [['en', 'en'], ['tútō', 'esto'], ['gnṓsontai', 'conocerán'], ['pántes', 'todos'], ['hoti', 'que'], ['emoí', 'mis'], ['mathētaí', 'discípulos'], ['este', 'sois'], ['ean', 'si'], ['agápēn', 'amor'], ['éjēte', 'tenéis'], ['en', 'entre'], ['allḗlois', 'unos y otros']]),
          rv: '@@jn/13/35' }
      ],
      texto: [
        'El segundo grupo trae dos letras que no existen en español, la eta y la theta, y cuatro que te resultarán fáciles.',
        { h: 'La eta, una e larga' },
        'La eta (η) es una de las letras que más confunden al principio. Su minúscula parece una n con la pata derecha larga, y su mayúscula (Η) parece una H. Pero es una vocal: una e larga, como si dijeras «ee». En la transliteración la escribimos ē, con una raya encima. En la pronunciación erasmiana, la eta y la épsilon suenan casi igual; la diferencia está en la duración, y es importante al escribir: ἡμέρα, «día», se escribe con eta.',
        { h: 'La theta, th' },
        'La theta (θ) es un círculo con una raya en el medio. Suena como la z de España en «zapato», o como la th del inglés «think». En América Latina muchos estudiantes la pronuncian como una t suave; está bien al comenzar, pero conviene distinguirla de la tau (τ). Es la primera letra de Θεός, «Dios», y por eso de palabras como «teología».',
        { h: 'Cuatro letras conocidas' },
        'La iota (ι) suena i y no tiene punto. Es la letra más pequeña del alfabeto griego, y en Mateo 5:18 traduce la yod hebrea: «ni una jota ni una tilde pasará de la ley». La kappa (κ) suena k, como en «casa». La lambda (λ) suena l; su minúscula parece una y invertida. La my (μ) suena m; su minúscula tiene una cola hacia abajo, como en la letra que se usa para «micro».',
        'El versículo del panel es Juan 13:35. Busca en él las letras de este grupo: la my, la theta y la eta de μαθηταί, la iota de ἐμοί y la lambda de ἀλλήλοις. Lee despacio, sílaba por sílaba.',
        { ejercicio: {
          pregunta: 'En la palabra ἡμέρα, «día», ¿qué es la primera letra (η)?',
          opciones: [
            { t: 'Una consonante, la n.', ok: false, por_que: 'La η se parece a una n, pero es una vocal. La n griega es la ny (ν).' },
            { t: 'Una vocal, la e larga (eta).', ok: true, por_que: 'La eta es una e larga. ἡμέρα se lee hēméra.' },
            { t: 'Una h, como la mayúscula Η.', ok: false, por_que: 'La mayúscula Η parece una H, pero es una vocal. La h del comienzo la marca el espíritu áspero, el pequeño signo que lleva encima.' }
          ],
          explicacion: 'La eta parece una n en minúscula y una H en mayúscula, pero siempre es una vocal: e larga.'
        } }
      ],
      pensar: 'Jesús dijo que el mundo reconocería a sus discípulos por el amor entre ellos (Jn 13:35). ¿Qué vería hoy un vecino al observar cómo se tratan los creyentes de tu iglesia?'
    },
    {
      id: 'ny-sigma', n: 'Tercer grupo: de ny a sigma', ref: 'Mateo 5:18; 1 Pedro 2:24; Juan 14:6; 1 Corintios 13:13; Romanos 10:17; Romanos 1:16',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Ν Ξ Ο Π Ρ Σ',
          cab: CAB,
          filas: [
            ['Ν', 'ν', 'ny', 'n', 'νόμος, nómos, «ley» (Mt 5:18)'],
            ['Ξ', 'ξ', 'xi', 'ks, como la x de «taxi»', 'ξύλον, xýlon, «madero» (1 P 2:24)'],
            ['Ο', 'ο', 'ómicron', 'o breve', 'ὁδός, hodós, «camino» (Jn 14:6)'],
            ['Π', 'π', 'pi', 'p', 'πίστις, pístis, «fe» (1 Co 13:13)'],
            ['Ρ', 'ρ', 'rho', 'r', 'ῥῆμα, rhḗma, «palabra» (Ro 10:17)'],
            ['Σ', 'σ ς', 'sigma', 's', 'σωτηρία, sōtēría, «salvación» (Ro 1:16)'],
          ],
          nota: 'La ny minúscula (ν) parece una v, pero suena n. La rho (ρ) parece una p, pero suena r.'
        } },
        { tipo: 'griego', titulo: '1 Corintios 13:13', ref: '1 Corintios 13:13', gr: '@@n1904:1co/13/13', tr: 'Nyní de ménei pístis, elpís, agápē, ta tría táuta; méizōn de tútōn hē agápē.',
          palabras: P('@@n1904p:1co/13/13', [['nyní', 'ahora'], ['de', 'y'], ['ménei', 'permanecen'], ['pístis', 'fe'], ['elpís', 'esperanza'], ['agápē', 'amor'], ['ta', 'las'], ['tría', 'tres'], ['táuta', 'estas'], ['méizōn', 'mayor'], ['de', 'pero'], ['tútōn', 'de estas'], ['hē', 'el'], ['agápē', 'amor']]),
          rv: '@@1co/13/13' }
      ],
      texto: [
        'El tercer grupo trae dos trampas visuales, la ny y la rho, y una letra que en griego suena doble, la xi.',
        { h: 'La ny y la xi' },
        'La ny (ν) suena n, aunque su minúscula parece una v. Es la trampa más frecuente de los principiantes: νόμος, «ley», se lee nómos, no vómos. Para no confundirla con la ýpsilon (υ), que verás en el próximo grupo, fíjate en la punta: la ny termina en punta abajo; la ýpsilon es redonda.',
        'La xi (ξ) es una sola letra que suena ks, como la x de «taxi». Su minúscula parece un tres con cola. Es la primera letra de ξύλον, «madero», la palabra que Pedro usa para la cruz: Cristo «llevó él mismo nuestros pecados en su cuerpo sobre el madero» (1 P 2:24).',
        { h: 'La ómicron y la pi' },
        'La ómicron (ο) es una o breve: su nombre significa «o pequeña». La pi (π) suena p; es la letra que se usa en matemáticas para el número 3,1416. Juntas aparecen en πίστις, «fe», y en ὁδός, «camino».',
        { h: 'La rho y la sigma' },
        'La rho (ρ) suena r, aunque se parece a nuestra p. Al comienzo de palabra lleva siempre un signo que indica una r aspirada (ῥ), y por eso la transliteramos rh: ῥῆμα, rhḗma. De ahí vienen palabras como «reuma» o «retórica».',
        'La sigma suena s y tiene tres formas: la mayúscula Σ, la minúscula σ al comienzo o en medio de la palabra, y la ς al final. La verás en detalle en la estación de las mayúsculas.',
        'El panel muestra 1 Corintios 13:13. Encuentra la pi y la sigma final de πίστις, y la rho de τρία.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra νόμος, «ley»?',
          opciones: [
            { t: 'vómop', ok: false, por_que: 'La ν es ny (n), y la ς es la sigma final (s).' },
            { t: 'nómos', ok: true, por_que: 'ν = n, ό = o acentuada, μ = m, ο = o, ς = s.' },
            { t: 'nómop', ok: false, por_que: 'La última letra es la sigma final (ς), que suena s.' }
          ],
          explicacion: 'Dos trampas en una palabra: la ν que parece v y la ς final. νόμος se lee nómos.'
        } }
      ],
      pensar: 'Pablo dice que la fe, la esperanza y el amor permanecen, y que el mayor es el amor (1 Co 13:13). ¿Cuál de las tres necesitas pedirle hoy a Dios que crezca en ti?'
    },
    {
      id: 'tau-omega', n: 'Cuarto grupo: de tau a omega', ref: 'Apocalipsis 22:13; Juan 3:16; Juan 8:12; Efesios 2:8; Mateo 16:26; Juan 4:23',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Τ Υ Φ Χ Ψ Ω',
          cab: CAB,
          filas: [
            ['Τ', 'τ', 'tau', 't', 'τέλος, télos, «fin» (Ap 22:13)'],
            ['Υ', 'υ', 'ýpsilon', 'ü, como la u francesa', 'υἱός, hyiós, «hijo» (Jn 3:16)'],
            ['Φ', 'φ', 'phi', 'f', 'φῶς, fōs, «luz» (Jn 8:12)'],
            ['Χ', 'χ', 'ji', 'j, como en «jardín»', 'χάρις, járis, «gracia» (Ef 2:8)'],
            ['Ψ', 'ψ', 'psi', 'ps', 'ψυχή, psyjḗ, «alma» (Mt 16:26)'],
            ['Ω', 'ω', 'omega', 'o larga', 'ὥρα, hṓra, «hora» (Jn 4:23)'],
          ],
          nota: 'La ji (χ) parece una x, pero suena j. La omega (ω) parece una w, pero es una vocal: o larga.'
        } },
        { tipo: 'griego', titulo: 'Juan 8:12', ref: 'Juan 8:12', gr: '@@n1904:jn/8/12', tr: 'Pálin un autóis elálēsen ho Iēsús légōn: Egṓ eimi to fōs tu kósmu; ho akoluthṓn moi u mē peripatḗsē en tē skotía, all’ héxei to fōs tēs zōḗs.',
          palabras: P('@@n1904p:jn/8/12', [['pálin', 'otra vez'], ['un', 'pues'], ['autóis', 'a ellos'], ['elálēsen', 'habló'], ['ho', 'el'], ['Iēsús', 'Jesús'], ['légōn', 'diciendo'], ['egṓ', 'yo'], ['eimi', 'soy'], ['to', 'la'], ['fōs', 'luz'], ['tu', 'del'], ['kósmu', 'mundo'], ['ho', 'el (que)'], ['akoluthṓn', 'sigue'], ['moi', 'me'], ['u', 'no'], ['mē', 'no'], ['peripatḗsē', 'andará'], ['en', 'en'], ['tē', 'las'], ['skotía', 'tinieblas'], ['all’', 'sino que'], ['héxei', 'tendrá'], ['to', 'la'], ['fōs', 'luz'], ['tēs', 'de la'], ['zōḗs', 'vida']]),
          rv: '@@jn/8/12' }
      ],
      texto: [
        'El último grupo tiene la mayor cantidad de letras que no existen en español. Con ellas completas el alfabeto.',
        { h: 'La tau y la ýpsilon' },
        'La tau (τ) suena t; su minúscula parece una t sin la parte de abajo. La ýpsilon (υ) es una vocal. En la pronunciación erasmiana suena como la u francesa o la ü alemana: pon los labios para decir u y di i. Muchos estudiantes de habla hispana la pronuncian simplemente i, y se entiende. En la transliteración la escribimos y: υἱός, hyiós, «hijo». Cuando va después de otra vocal forma un diptongo y suena u, como verás en la ruta III.',
        { h: 'Tres letras de dos sonidos' },
        'La phi (φ) suena f; es un círculo atravesado por una raya vertical. De ella vienen las palabras escritas con ph en otros idiomas: «filosofía», en inglés philosophy. La ji (χ) suena como la j del español, y aquí está la trampa: parece una x. Es la primera letra de Χριστός, «Cristo», y de χάρις, «gracia». La psi (ψ) suena ps, como en «psicología», que viene de ψυχή, «alma».',
        { h: 'La omega, la o grande' },
        'La omega (ω) es la última letra. Su nombre significa «o grande», y es una o larga, así como la ómicron es una o breve. Su minúscula parece una w, y su mayúscula (Ω) es un arco con dos pies. El Señor la usa en Apocalipsis: «Yo soy el Alfa y la Omega, el principio y el fin» (Ap 22:13).',
        'Con esto ya conoces las 24 letras. En el panel tienes Juan 8:12, una de las declaraciones «Yo soy» de Jesús. Busca la phi de φῶς y la omega de ἐγώ y de ζωῆς. Si puedes leer este versículo, aunque sea muy despacio, ya leíste griego.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra χάρις, «gracia»?',
          opciones: [
            { t: 'járis', ok: true, por_que: 'χ = j, ά = a acentuada, ρ = r, ι = i, ς = s.' },
            { t: 'xáris', ok: false, por_que: 'La χ parece una x, pero es la ji: suena j.' },
            { t: 'jápis', ok: false, por_que: 'La ρ parece una p, pero es la rho: suena r.' }
          ],
          explicacion: 'χάρις se lee járis. En español la escribimos con ch por la tradición latina, como en «carisma», pero la ji suena como nuestra j.'
        } }
      ],
      pensar: 'Jesús dijo «Yo soy la luz del mundo», y prometió que quien lo sigue no andará en tinieblas (Jn 8:12). ¿Qué área de tu vida necesita hoy esa luz?'
    },
    {
      id: 'enganosas', n: 'Las letras que engañan', ref: 'Mateo 16:16; Juan 1:17',
      visual: [
        { tipo: 'tabla', titulo: 'Parecen, pero no son', tabla: {
          titulo: 'Letras que parecen nuestras y suenan distinto',
          cab: ['Letra', 'Parece', 'Es', 'Ejemplo'],
          filas: [
            ['η', 'una n', 'e larga (eta)', 'ἡμέρα, hēméra'],
            ['Η', 'una H', 'e larga (eta)', 'ΗΝ, «era»'],
            ['ν', 'una v', 'n (ny)', 'νόμος, nómos'],
            ['ρ', 'una p', 'r (rho)', 'πρός, pros'],
            ['Ρ', 'una P', 'r (rho)', 'ΡΗΜΑ, «palabra»'],
            ['χ', 'una x', 'j (ji)', 'Χριστός, Jristós'],
            ['γ', 'una y', 'g (gamma)', 'γῆ, gē'],
            ['ω', 'una w', 'o larga (omega)', 'ὥρα, hṓra'],
            ['υ', 'una u', 'ü (ýpsilon)', 'υἱός, hyiós'],
            ['ς', 'una c', 's final (sigma)', 'λόγος, lógos'],
          ],
          nota: 'Si una palabra te «suena rara», revisa primero estas diez.'
        } },
        { tipo: 'tabla', titulo: 'Parecidas entre sí', tabla: {
          titulo: 'Letras griegas que se confunden entre sí',
          cab: ['Par', 'Cómo distinguirlas'],
          filas: [
            ['ν / υ', 'La ny termina en punta abajo; la ýpsilon es redonda'],
            ['ζ / ξ', 'La dseta tiene un solo trazo curvo; la xi tiene tres ondas'],
            ['ο / σ', 'La sigma tiene una colita arriba a la derecha'],
            ['κ / χ', 'La kappa no baja de la línea; la ji cruza la línea'],
            ['ε / ς', 'La épsilon va en cualquier lugar; la sigma final, solo al final'],
            ['θ / φ', 'La raya de la theta es horizontal; la de la phi, vertical'],
          ],
          nota: 'Copiar a mano estas parejas, una al lado de la otra, ayuda mucho a fijarlas.'
        } }
      ],
      texto: [
        'Leer griego siendo hispanohablante tiene una ventaja: muchas letras ya las conoces. Pero también una trampa: algunas letras se ven como las nuestras y suenan distinto. Esta estación las reúne para que las mires con calma.',
        { h: 'Diez letras con disfraz' },
        'La primera tabla del panel muestra diez letras que parecen latinas y no lo son. Las más traicioneras son tres: la η, que parece una n y es una e larga; la ν, que parece una v y es una n; y la ρ, que parece una p y es una r. Con esas tres, una palabra tan sencilla como πρός, «hacia», se puede leer mal de dos maneras.',
        'La χ merece una mención aparte. Parece una x, y por la tradición latina la escribimos ch en palabras como «Cristo» o «carisma». Pero suena como nuestra j: Χριστός se lee Jristós. Muchos maestros de habla hispana la pronuncian k, como en «Cristo»; si te enseñaron así, no te preocupes, se entiende. Lo importante es no leerla como x.',
        { h: 'Letras griegas entre sí' },
        'La segunda tabla reúne letras griegas que se confunden entre ellas. La pareja ν y υ es la más difícil: la ny termina en punta, y la ýpsilon es redonda abajo, como una u. Las demás parejas se distinguen con un poco de práctica.',
        { h: 'Un ejercicio' },
        'Lee estos nombres en voz alta antes de mirar la respuesta: Πέτρος, Ἰωάνης, Χριστός, Μωϋσῆς. Son Pedro (Pétros), Juan (Iōánēs), Cristo (Jristós) y Moisés (Mōysḗs). Juan escribe: «la ley por medio de Moisés fue dada, pero la gracia y la verdad vinieron por medio de Jesucristo» (Jn 1:17). En ese versículo están casi todas las letras que engañan.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra πρός, «hacia», «con»?',
          opciones: [
            { t: 'ppós', ok: false, por_que: 'La segunda letra es la rho (ρ), que suena r aunque parece una p.' },
            { t: 'pros', ok: true, por_que: 'π = p, ρ = r, ό = o, ς = s.' },
            { t: 'npos', ok: false, por_que: 'La primera letra es la pi (π), no la eta (η).' }
          ],
          explicacion: 'πρός se lee pros. Aparece en Juan 1:1: el Verbo era «con» Dios, πρὸς τὸν Θεόν.'
        } },
        { ejercicio: {
          pregunta: '¿Cuál de estas letras es una vocal?',
          opciones: [
            { t: 'ν', ok: false, por_que: 'Es la ny, una consonante: n.' },
            { t: 'η', ok: true, por_que: 'Es la eta, una vocal: e larga.' },
            { t: 'ρ', ok: false, por_que: 'Es la rho, una consonante: r.' }
          ],
          explicacion: 'Las vocales griegas son siete: α, ε, η, ι, ο, υ, ω. La eta es la que más engaña.'
        } }
      ],
      pensar: 'Algunas letras parecen lo que no son. También hay enseñanzas que parecen bíblicas y no lo son. ¿Cómo te ayuda leer con atención la Escritura a distinguir la verdad de lo que solo se le parece?'
    },
    {
      id: 'mayusculas', n: 'Mayúsculas, minúsculas y la sigma final', ref: 'Mateo 6:9; Filipenses 2:11',
      visual: [
        { tipo: 'griego', titulo: 'Mateo 6:9', ref: 'Mateo 6:9', gr: '@@n1904:mt/6/9', tr: 'Hútōs un proséujesthe hymeís: Páter hēmṓn ho en tois uranóis, hagiasthḗtō to ónomá su;',
          palabras: P('@@n1904p:mt/6/9', [['hútōs', 'así'], ['un', 'pues'], ['proséujesthe', 'orad'], ['hymeís', 'vosotros'], ['Páter', 'Padre'], ['hēmṓn', 'nuestro'], ['ho', 'que (estás)'], ['en', 'en'], ['tois', 'los'], ['uranóis', 'cielos'], ['hagiasthḗtō', 'sea santificado'], ['to', 'el'], ['ónomá', 'nombre'], ['su', 'tuyo']]),
          rv: '@@mt/6/9' },
        { tipo: 'tabla', titulo: 'La sigma', tabla: {
          titulo: 'Las formas de la sigma',
          cab: ['Forma', 'Dónde va', 'Ejemplo'],
          filas: [
            ['Σ', 'Mayúscula', 'Σωτήρ, «Salvador» (Lc 2:11)'],
            ['σ', 'Al comienzo o en medio de la palabra', 'σωτηρία, «salvación»'],
            ['ς', 'Al final de la palabra', 'λόγος, «palabra»'],
            ['Ϲ', 'Sigma lunar: así la escriben muchos manuscritos', 'ΘϹ, «Dios», en el Códice Sinaítico'],
          ],
          nota: 'Ἰησοῦς tiene las dos sigmas: σ en el medio y ς al final.'
        } }
      ],
      texto: [
        'Los manuscritos antiguos usaban solo mayúsculas. Las ediciones impresas usan minúsculas, y reservan las mayúsculas para unos pocos casos. Saber cuáles te ayuda a orientarte en la página.',
        { h: 'Dónde aparecen las mayúsculas' },
        'En una edición como la de Nestle, la mayúscula aparece al comienzo de un párrafo, en los nombres propios (Ἰησοῦς, Πέτρος, Ἰερουσαλήμ) y al comienzo de una cita en estilo directo. A diferencia del español, no se usa mayúscula después de cada punto. Fíjate en el panel: Mateo 6:9 empieza con minúscula, porque continúa un párrafo, y Πάτερ, «Padre», lleva mayúscula porque comienza la oración que Jesús enseña.',
        'Nestle escribe además con mayúscula algunas palabras que se refieren a Dios: Θεός, Κύριος, Λόγος, Πνεῦμα. Es una decisión del editor, no de los manuscritos, que no distinguían mayúsculas y minúsculas. Otras ediciones escriben θεός con minúscula.',
        'En algunas ediciones verás frases enteras en mayúsculas. Es la manera de marcar una inscripción o una cita: en Hechos 17:23, el altar de Atenas dice ΑΓΝΩΣΤΩ ΘΕΩ, «al Dios no conocido», y en Filipenses 2:11 se confiesa ΚΥΡΙΟΣ ΙΗΣΟΥΣ ΧΡΙΣΤΟΣ, «Jesucristo es el Señor».',
        { h: 'La sigma final' },
        'La sigma es la única letra con una forma especial para el final de la palabra. Al comienzo y en el medio se escribe σ; al final, ς. Es muy útil: cuando ves una ς, sabes que ahí termina una palabra. En Ἰησοῦς tienes las dos.',
        'En los manuscritos verás además una sigma redonda, como una C (Ϲ), llamada sigma lunar. Algunas ediciones modernas también la usan. Es la misma letra.',
        { h: 'Consejo para leer mayúsculas' },
        'Las mayúsculas griegas son más fáciles de confundir con las latinas que las minúsculas. Cuando veas un texto en mayúsculas, recuerda: Η es e, Ρ es r, Χ es j, y Σ y Ϲ son s. Lee en voz alta: ΚΥΡΙΟΣ, kyrios; ΙΗΣΟΥΣ, Iēsus; ΧΡΙΣΤΟΣ, Jristos.',
        { ejercicio: {
          pregunta: '¿Por qué la palabra Πάτερ lleva mayúscula en Mateo 6:9?',
          opciones: [
            { t: 'Porque todas las palabras que siguen a un punto llevan mayúscula.', ok: false, por_que: 'En el griego impreso no se usa mayúscula después de cada punto, como en español.' },
            { t: 'Porque comienza las palabras de la oración que Jesús enseña.', ok: true, por_que: 'Las ediciones marcan con mayúscula el comienzo de una cita en estilo directo.' },
            { t: 'Porque los manuscritos antiguos la escribían con mayúscula y el resto con minúscula.', ok: false, por_que: 'Los manuscritos antiguos escribían todo en mayúsculas.' }
          ],
          explicacion: 'Las mayúsculas del texto impreso son decisiones de los editores para ayudar a leer: nombres propios, comienzo de párrafo y comienzo de una cita.'
        } }
      ],
      pensar: 'Jesús enseñó a sus discípulos a comenzar la oración llamando a Dios «Padre nuestro». ¿Qué cambia en tu manera de orar cuando recuerdas que hablas con tu Padre?'
    },
    {
      id: 'numeros', n: 'Las letras como números', ref: 'Apocalipsis 13:18; Juan 21:11',
      visual: [
        { tipo: 'tabla', titulo: 'Valores', tabla: {
          titulo: 'El valor numérico de las letras',
          cab: ['Unidades', 'Decenas', 'Centenas'],
          filas: [
            ['α 1', 'ι 10', 'ρ 100'],
            ['β 2', 'κ 20', 'σ 200'],
            ['γ 3', 'λ 30', 'τ 300'],
            ['δ 4', 'μ 40', 'υ 400'],
            ['ε 5', 'ν 50', 'φ 500'],
            ['ϛ 6 (stigma)', 'ξ 60', 'χ 600'],
            ['ζ 7', 'ο 70', 'ψ 700'],
            ['η 8', 'π 80', 'ω 800'],
            ['θ 9', 'ϙ 90 (koppa)', 'ϡ 900 (sampi)'],
          ],
          nota: 'Tres signos antiguos (stigma, koppa y sampi) ya no eran letras en tiempos del Nuevo Testamento, pero se seguían usando como números.'
        } },
        { tipo: 'griego', titulo: 'Apocalipsis 13:18', ref: 'Apocalipsis 13:18', gr: '@@n1904:ap/13/18', tr: 'Hṓde hē sofía estín. Ho éjōn nun psēfisátō ton arithmón tu thēríu; arithmós gar anthrṓpu estín. Kai ho arithmós autú hexakósioi hexḗkonta hex.',
          rv: '@@ap/13/18' }
      ],
      texto: [
        'Los griegos, como los hebreos, no tenían cifras como las nuestras. Usaban las letras del alfabeto con un valor numérico: de alfa a theta las unidades, de iota a koppa las decenas, y de rho a sampi las centenas. Para que no se confundiera un número con una palabra, se marcaba con una rayita: ιβʹ era 12.',
        'Para completar los 27 valores hacían falta tres signos más que las 24 letras. Se usaban tres letras antiguas que ya no se pronunciaban: la stigma (ϛ) para el 6, la koppa (ϙ) para el 90 y la sampi (ϡ) para el 900.',
        { h: 'El número de la bestia' },
        'Por eso Apocalipsis puede decir que el nombre de la bestia tiene un número: «Aquí hay sabiduría. El que tiene entendimiento, cuente el número de la bestia, pues es número de hombre. Y su número es seiscientos sesenta y seis» (Ap 13:18). En el texto que leemos, el número está escrito con palabras, ἑξακόσιοι ἑξήκοντα ἕξ. Pero muchos manuscritos lo escriben con letras: χξϛ, es decir, 600 + 60 + 6.',
        'A lo largo de la historia se ha sumado el valor de las letras de muchísimos nombres para encontrar el 666: emperadores, papas, reformadores y políticos modernos. Todos esos cálculos han fallado, y se pueden fabricar con casi cualquier nombre si se elige el idioma y la forma de escribirlo. Este recurso no identifica a nadie. Juan anuncia que, cuando la bestia aparezca, quienes tengan entendimiento podrán reconocerla. Mientras tanto, la Escritura nos llama a velar y a no seguir especulaciones.',
        'Un dato de los manuscritos: Ireneo, en el siglo II, sabía que algunas copias decían 616, y defendió el 666 como la lectura de los manuscritos más antiguos y fieles. Un papiro hallado en Oxirrinco (el papiro 115) dice 616. Casi todos los manuscritos, y todas las ediciones, dicen 666.',
        { ir: { t: 'Ver la bestia y su número en Apocalipsis', a: '../../apocalipsis/' } },
        { h: 'Otros números' },
        'El Nuevo Testamento escribe casi siempre los números con palabras: los ciento cincuenta y tres peces de Juan 21:11 o los cinco mil de la multiplicación. El valor numérico de las letras aparece sobre todo en los manuscritos, para numerar páginas, capítulos y salmos.',
        { ejercicio: {
          pregunta: '¿Qué número escriben las letras χξϛ?',
          opciones: [
            { t: '666', ok: true, por_que: 'χ = 600, ξ = 60 y ϛ (stigma) = 6.' },
            { t: '616', ok: false, por_que: '616 se escribe χιϛ: 600 + 10 + 6.' },
            { t: '777', ok: false, por_que: '777 se escribiría ψοζ: 700 + 70 + 7.' }
          ],
          explicacion: 'Con la tabla del panel puedes leer cualquier número escrito con letras griegas.'
        } }
      ],
      pensar: 'Jesús dijo que nadie sabe el día ni la hora, y nos mandó velar (Mt 24:36, 42). ¿Qué diferencia hay entre velar y especular sobre fechas y nombres?'
    },
    {
      id: 'sagradas', n: 'Alfa y Omega, y las abreviaturas sagradas', ref: 'Apocalipsis 1:8; 21:6; 22:13; Isaías 44:6',
      visual: [
        { tipo: 'griego', titulo: 'Apocalipsis 22:13', ref: 'Apocalipsis 22:13', gr: '@@n1904:ap/22/13', tr: 'Egṓ to Álfa kai to Ō, ho prṓtos kai ho ésjatos, hē arjḗ kai to télos.',
          palabras: P('@@n1904p:ap/22/13', [['egṓ', 'yo (soy)'], ['to', 'el'], ['Álfa', 'Alfa'], ['kai', 'y'], ['to', 'la'], ['Ō', 'Omega'], ['ho', 'el'], ['prṓtos', 'primero'], ['kai', 'y'], ['ho', 'el'], ['ésjatos', 'último'], ['hē', 'el'], ['arjḗ', 'principio'], ['kai', 'y'], ['to', 'el'], ['télos', 'fin']]),
          rv: '@@ap/22/13' },
        { tipo: 'tabla', titulo: 'Abreviaturas', tabla: {
          titulo: 'Las abreviaturas sagradas de los manuscritos',
          cab: ['Abreviatura', 'Palabra completa', 'Significa'],
          filas: [
            ['ΘΣ', 'ΘΕΟΣ', 'Dios'],
            ['ΚΣ', 'ΚΥΡΙΟΣ', 'Señor'],
            ['ΙΣ', 'ΙΗΣΟΥΣ', 'Jesús'],
            ['ΧΣ', 'ΧΡΙΣΤΟΣ', 'Cristo'],
            ['ΠΝΑ', 'ΠΝΕΥΜΑ', 'Espíritu'],
            ['ΥΣ', 'ΥΙΟΣ', 'Hijo'],
            ['ΙΧΘΥΣ', 'Ἰησοῦς Χριστὸς Θεοῦ Υἱὸς Σωτήρ', 'Jesucristo, Hijo de Dios, Salvador'],
          ],
          nota: 'En los manuscritos, las abreviaturas llevan una raya encima, para que el lector supiera que no eran palabras comunes.'
        } }
      ],
      texto: [
        'Tres veces en Apocalipsis el Señor se presenta con las letras del alfabeto: «Yo soy el Alfa y la Omega» (Ap 1:8; 21:6; 22:13). Alfa es la primera letra y omega la última. Es como decir «de la A a la Z»: Dios es el principio y el fin de todas las cosas, el que estaba antes de todo y el que tendrá la última palabra.',
        'Detrás de esta expresión está el Antiguo Testamento: «Yo soy el primero, y yo soy el postrero, y fuera de mí no hay Dios» (Is 44:6). En Apocalipsis 1:8 la dice el Señor, el Todopoderoso, y en 22:13 la dice Jesús, el que viene pronto (Ap 22:12, 16). Así el Nuevo Testamento atribuye a Cristo el mismo título del Dios único.',
        'Un detalle de escritura: en el texto griego de Apocalipsis la alfa se escribe con su nombre, Ἄλφα, pero la omega se escribe solo con la letra, Ὦ. La palabra «omega» se formó después.',
        { ir: { t: 'Ver «El Alfa y la Omega» en Apocalipsis', a: '../../apocalipsis/' } },
        { h: 'Las abreviaturas sagradas' },
        'Los primeros cristianos tenían una costumbre especial al copiar la Escritura: ciertas palabras, casi siempre los nombres de Dios y de Cristo, se escribían abreviadas, con la primera y la última letra y una raya encima. Los estudiosos las llaman nomina sacra, «nombres sagrados». Aparecen ya en los papiros más antiguos, como el papiro 46, y en los grandes códices.',
        'No era para ahorrar espacio, porque solo se abreviaban esas palabras. Era una forma de honrar el nombre de Dios. Y es significativo que, desde el principio, los cristianos trataron el nombre de Jesús igual que el de Dios.',
        { h: 'El pez' },
        'La palabra ΙΧΘΥΣ, ijthýs, significa «pez». Sus letras forman las iniciales de una confesión de fe: Ἰησοῦς Χριστὸς Θεοῦ Υἱὸς Σωτήρ, «Jesucristo, Hijo de Dios, Salvador». Por eso el pez fue uno de los primeros símbolos cristianos, dibujado en lámparas y en las catacumbas. Otro símbolo antiguo es la unión de las dos primeras letras de Χριστός, la ji y la rho: ☧.',
        { ejercicio: {
          pregunta: 'En un manuscrito ves ΙΣ ΧΣ con una raya encima. ¿Qué dice?',
          opciones: [
            { t: '«Jesucristo», en abreviaturas sagradas.', ok: true, por_que: 'ΙΣ es Ἰησοῦς y ΧΣ es Χριστός: primera y última letra con una raya encima.' },
            { t: '«Iglesia de Cristo».', ok: false, por_que: 'Iglesia es ἐκκλησία y no se abreviaba como nombre sagrado.' },
            { t: 'Un número: 10 y 600.', ok: false, por_que: 'La raya encima de dos letras en un manuscrito del Nuevo Testamento marca casi siempre un nombre sagrado, no un número.' }
          ],
          explicacion: 'Los cristianos abreviaban así los nombres de Dios, del Señor, de Jesús, de Cristo y del Espíritu, como señal de reverencia.'
        } }
      ],
      pensar: 'Cristo es el Alfa y la Omega: el principio y el fin. ¿Qué significa para ti que el mismo que comenzó la historia es el que la va a terminar?'
    }
  ];

  window.__ALFA.letras = letras;
})();
