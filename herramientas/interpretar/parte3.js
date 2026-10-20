
  const generos = [
    {
      id: 'biblioteca', n: 'La Biblia, una biblioteca', ref: 'Hebreos 1:1; 2 Timoteo 3:16',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-generos.svg', alt: 'Los 66 libros de la Biblia como lomos de una biblioteca, coloreados por género: narrativa, ley, poesía y sabiduría, profecía, evangelios, cartas y apocalíptica', pie: 'Los 66 libros agrupados por su género principal.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los géneros y cómo leerlos',
          cab: ['Género', 'Ejemplos', 'Pregunta clave'],
          filas: [
            ['Narrativa', 'Génesis, Josué, Samuel, Reyes, Hechos', '¿Qué enseña Dios con lo que sucedió?'],
            ['Ley', 'Éxodo 20–40, Levítico, Deuteronomio', '¿Qué revela de Dios y cómo se cumple en Cristo?'],
            ['Poesía', 'Salmos, Cantares, Lamentaciones', '¿Qué imágenes usa y qué sentimiento expresa?'],
            ['Sabiduría', 'Proverbios, Job, Eclesiastés', '¿Es un principio general o una promesa?'],
            ['Profecía', 'Isaías a Malaquías', '¿A quién habló y qué se cumplió ya o falta por cumplirse?'],
            ['Evangelios', 'Mateo, Marcos, Lucas, Juan', '¿Qué revela de Jesús cada relato?'],
            ['Cartas', 'Romanos a Judas', '¿Qué problema responde el autor?'],
            ['Apocalíptica', 'Daniel 7–12, Apocalipsis', '¿Qué representan los símbolos según el mismo texto?']
          ],
          nota: 'Muchos libros combinan géneros: Éxodo tiene narrativa y ley; Isaías, poesía y profecía; Daniel, narrativa y apocalíptica.'
        } }
      ],
      texto: [
        'La palabra «Biblia» viene del griego y significa «libros». No es un solo libro, sino una biblioteca de 66, escrita por unos cuarenta autores a lo largo de unos mil quinientos años. Dios habló «muchas veces y de muchas maneras» (He 1:1): por relatos, leyes, cantos, proverbios, oráculos, cartas y visiones. Cada forma tiene sus propias reglas de lectura.',
        'En la vida diaria todos distinguimos géneros sin pensarlo. Nadie lee una receta de cocina como un poema, ni una noticia como una carta de amor. Si alguien dice «me muero de hambre», entendemos que tiene mucha hambre, no que esté a punto de morir. Con la Biblia ocurre lo mismo: confundir el género lleva a errores serios. Un proverbio leído como promesa absoluta, una parábola leída como alegoría en cada detalle o una visión simbólica leída como descripción fotográfica producen interpretaciones que el autor nunca quiso dar.',
        { h: 'Una forma, un propósito' },
        'Dios no eligió la variedad por adorno. Cada género toca al lector de una manera distinta. La narrativa nos hace entrar en la historia y vernos en sus personajes. La ley muestra la santidad de Dios y nuestra necesidad de gracia. La poesía da palabras a la oración, al dolor y a la alabanza. La sabiduría enseña a vivir con prudencia en lo cotidiano. La profecía llama al arrepentimiento y sostiene la esperanza. Los evangelios nos ponen frente a Jesús. Las cartas aplican el evangelio a la vida de la iglesia. Y la apocalíptica levanta la mirada hacia el triunfo final de Dios.',
        'En las próximas estaciones veremos cada género con sus claves de lectura. La primera pregunta ante cualquier pasaje, entonces, es: ¿qué tipo de texto estoy leyendo?',
        { ejercicio: {
          pregunta: 'El libro de Daniel combina dos géneros principales. ¿Cuáles?',
          opciones: [
            { t: 'Ley y cartas.', ok: false, por_que: 'Daniel no contiene leyes ni cartas apostólicas.' },
            { t: 'Narrativa (capítulos 1–6) y apocalíptica (capítulos 7–12).', ok: true, por_que: 'La primera mitad narra la vida de Daniel en la corte; la segunda presenta visiones simbólicas sobre los imperios y el fin.' },
            { t: 'Sabiduría y evangelio.', ok: false, por_que: 'Aunque Daniel es un hombre sabio, el libro no pertenece a la literatura sapiencial ni es un evangelio.' }
          ],
          explicacion: 'Saber cuándo cambia el género dentro de un libro ayuda a cambiar también la forma de leer: los relatos se leen como historia; las visiones, buscando el sentido de sus símbolos.'
        } },
        { ir: { t: 'Abrir el estudio de Daniel', a: '../../daniel/' } }
      ],
      pensar: '¿Qué género de la Biblia lees con más frecuencia y cuál lees menos? ¿Qué te estás perdiendo de la manera en que Dios habla?'
    },
    {
      id: 'narrativa', n: 'La narrativa', ref: 'Lucas 1:1-4; 1 Corintios 10:6, 11; Hechos 2:4; 10:44-46; 19:6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/1/1-4', ref: 'Lucas 1:1-4' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Claves para leer un relato',
          cab: ['Clave', 'Qué preguntar'],
          filas: [
            ['El relato completo', '¿Dónde empieza y termina la historia? No cortarla a la mitad'],
            ['Dios es el protagonista', '¿Qué hace Dios? ¿Qué revela de sí mismo?'],
            ['El narrador evalúa', '¿Aprueba o reprueba lo que ocurre? ¿Cómo lo sabemos?'],
            ['Lo que se repite', '¿Hay un patrón a lo largo del libro?'],
            ['Lo que enseña el resto de la Escritura', '¿Hay pasajes que explican o confirman este hecho?']
          ]
        } }
      ],
      texto: [
        'Más de un tercio de la Biblia es narrativa: historias de la creación, los patriarcas, Israel, los reyes, Jesús y la iglesia primitiva. Son relatos de hechos reales, escritos con arte y con un propósito. Lucas dice que investigó «con diligencia todas las cosas desde su origen» y las escribió por orden, para que Teófilo conociera «bien la verdad» (Lc 1:3-4). El narrador bíblico no solo informa: elige qué contar y cómo contarlo para enseñar.',
        { h: 'Contar no siempre es aprobar' },
        'Los relatos registran también lo malo: la mentira de Abraham, el pecado de David, la idolatría de Salomón. Que la Biblia cuente algo no significa que lo apruebe. A veces el narrador lo dice expresamente; otras veces lo deja ver por las consecuencias. Pablo enseña a leer así la historia de Israel en el desierto: «estas cosas sucedieron como ejemplos para nosotros, para que no codiciemos cosas malas, como ellos codiciaron» (1 Co 10:6).',
        { h: 'Los relatos también enseñan doctrina' },
        'Algunos intérpretes sostienen que los relatos solo describen lo que pasó y nunca establecen enseñanza para la iglesia. Eso no hace justicia a autores como Lucas, que escribe historia con intención teológica. Cuando un hecho se repite de manera intencional en el relato y el resto de la Escritura lo confirma, el patrón enseña. En Hechos, el Espíritu Santo desciende sobre creyentes en Jerusalén, en casa de Cornelio y en Éfeso, y cada vez se registra que hablaron en lenguas (Hch 2:4; 10:46; 19:6). Lucas muestra así lo que Pedro llama «la promesa» para todos los que el Señor llame (Hch 2:39).',
        { posturas: {
          titulo: '¿Los relatos de Hechos enseñan doctrina?',
          a: { n: 'Solo describen', t: 'Algunos evangélicos sostienen que la narrativa solo informa lo ocurrido, y que la doctrina debe basarse únicamente en los textos de enseñanza directa, como las cartas.' },
          b: { n: 'Describen y enseñan', t: 'Otros entienden que Lucas es historiador y teólogo, y que los patrones repetidos e intencionales del relato enseñan a la iglesia, sobre todo cuando las cartas los confirman.' },
          c: 'Este recurso sigue la segunda lectura. La narrativa enseña cuando un patrón se repite con intención y concuerda con el resto de la Escritura; un detalle aislado, en cambio, no basta para fijar una norma. Por eso el bautismo en el Espíritu Santo, con la evidencia de hablar en otras lenguas, se enseña a partir del patrón de Hechos y de la promesa que abarca a todas las generaciones (Hch 2:39).'
        } },
        { ir: { t: 'Abrir el estudio de Hechos', a: '../../hechos/' } }
      ],
      pensar: '¿Con qué personaje de un relato bíblico te identificas más? ¿Qué te enseña Dios a través de su historia, en lo que hizo bien y en lo que hizo mal?'
    },
    {
      id: 'ley', n: 'La ley', ref: 'Mateo 5:17-18; Gálatas 3:24-25; Romanos 10:4; 13:10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/5/17-18', ref: 'Mateo 5:17-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres aspectos de la ley de Moisés',
          cab: ['Aspecto', 'Ejemplos', 'En Cristo'],
          filas: [
            ['Moral', '«No matarás» (Éx 20:13); amar al prójimo', 'Se reafirma en el Nuevo Testamento y se cumple por el amor (Ro 13:10)'],
            ['Ceremonial', 'Sacrificios, fiestas, purificaciones, alimentos', 'Era sombra de lo que había de venir; se cumple en Cristo (He 10:1)'],
            ['Civil', 'Leyes del gobierno de Israel como nación', 'No rige para la iglesia, pero revela principios de justicia (Dt 22:8)']
          ],
          nota: 'La división es una ayuda para estudiar; la ley se dio como un todo a Israel, y Cristo la cumplió entera.'
        } }
      ],
      texto: [
        'Muchos lectores se detienen en Levítico: sacrificios, enfermedades de la piel, prohibiciones de mezclar telas (Lv 19:19). ¿Qué hacer con esas leyes? La respuesta empieza con Jesús: «No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17). La ley no se descarta ni se lee como si nada hubiera pasado: se lee a la luz de Cristo, que la cumplió.',
        { h: 'La ley se dio a Israel en el pacto del Sinaí' },
        'La ley de Moisés fue el reglamento del pacto entre Dios e Israel, dado después de la liberación de Egipto. No era un camino para ganarse la salvación, sino la forma de vida de un pueblo ya redimido. Pablo explica que fue como un ayo, un tutor, «para llevarnos a Cristo, a fin de que fuésemos justificados por la fe. Pero venida la fe, ya no estamos bajo ayo» (Gá 3:24-25). El creyente no está bajo el pacto mosaico, sino bajo el nuevo pacto.',
        { h: 'Cómo leer una ley' },
        'Ayuda distinguir tres aspectos. Las leyes morales reflejan el carácter de Dios y se reafirman en el Nuevo Testamento: no matar, no adulterar, no robar, amar al prójimo. Las ceremoniales (sacrificios, fiestas, alimentos puros e impuros, purificaciones) eran figura de lo que había de venir y se cumplen en Cristo. Las civiles regían a Israel como nación y no se aplican tal cual a la iglesia, pero revelan principios permanentes. La ley que obligaba a poner una baranda en la azotea de la casa (Dt 22:8) enseña a cuidar la vida del prójimo; hoy se aplica, por ejemplo, en la seguridad de un hogar o de un lugar de trabajo.',
        'Leída así, la ley es un tesoro. Revela la santidad de Dios, muestra el pecado, anuncia a Cristo y enseña cómo amar al prójimo. «El cumplimiento de la ley es el amor» (Ro 13:10).',
        { ejercicio: {
          pregunta: '¿Por qué los creyentes de hoy no ofrecen los sacrificios de animales de Levítico?',
          opciones: [
            { t: 'Porque esas leyes fueron un error que Dios corrigió después.', ok: false, por_que: 'Dios mismo los mandó. No fueron un error, sino una figura con un propósito.' },
            { t: 'Porque eran sombra de lo que había de venir y se cumplieron en el sacrificio de Cristo.', ok: true, por_que: 'Hebreos 10:1 llama a la ley sombra de los bienes venideros; Cristo entró una vez para siempre con su propia sangre (Hebreos 9:12).' },
            { t: 'Porque ya no hay un templo en Jerusalén y no se pueden ofrecer.', ok: false, por_que: 'Es un dato histórico cierto, pero no es la razón bíblica: aunque hubiera templo, el sacrificio de Cristo es suficiente y definitivo.' }
          ],
          explicacion: 'La ley ceremonial no se anula: se cumple. Leerla bien es descubrir cómo cada sacrificio anunciaba la obra de Cristo.'
        } },
        { ir: { t: 'Abrir El sacerdocio en Israel', a: '../../sacerdocio/' } }
      ],
      pensar: 'Pablo dice que la ley fue un ayo que nos lleva a Cristo (Gá 3:24). ¿Qué te enseña la santidad de la ley sobre tu necesidad de la gracia?'
    },
    {
      id: 'poesia-sabiduria', n: 'La poesía y la sabiduría', ref: 'Salmo 19:1; 23:1; Proverbios 22:6; 26:4-5; Job 42:7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@pr/26/4-5', ref: 'Proverbios 26:4-5' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El paralelismo hebreo',
          cab: ['Tipo', 'Qué hace', 'Ejemplo'],
          filas: [
            ['Sinónimo', 'La segunda línea repite la idea con otras palabras', 'Los cielos cuentan la gloria de Dios / el firmamento anuncia la obra de sus manos (Sal 19:1)'],
            ['Antitético', 'La segunda línea dice lo contrario', 'El hijo sabio alegra al padre / el hijo necio es tristeza de su madre (Pr 10:1)'],
            ['Progresivo', 'La segunda línea completa o avanza la idea', 'Jehová es mi pastor / nada me faltará (Sal 23:1)']
          ]
        } }
      ],
      texto: [
        'Un tercio del Antiguo Testamento está escrito en poesía. La poesía hebrea no se basa en la rima, sino en el paralelismo: dos o más líneas que se responden. «Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos» (Sal 19:1). Reconocer el paralelismo evita errores: la segunda línea no suele agregar un hecho distinto, sino repetir, contrastar o completar la primera.',
        { h: 'Imágenes que se sienten' },
        'La poesía habla con imágenes: Dios como pastor, roca, escudo o águila que cubre con sus alas (Sal 91:4). Las imágenes comunican verdades reales sobre Dios, pero no se leen como descripciones técnicas. También expresan emociones intensas, incluso queja, angustia o deseo de justicia. Los Salmos enseñan a orar con honestidad: no todo lo que dice un salmista es un modelo de conducta, pero todo es inspirado y enseña cómo llevar el corazón a Dios.',
        { h: 'Proverbios: principios, no garantías' },
        'Los proverbios son frases breves que resumen cómo funciona normalmente la vida bajo el gobierno de Dios. Son verdaderos, pero generales. «Instruye al niño en su camino, Y aun cuando fuere viejo no se apartará de él» (Pr 22:6) enseña el valor de la formación temprana; no es una promesa que garantice que ningún hijo criado en el Señor se apartará jamás. Leerlo como garantía ha cargado de culpa injusta a muchos padres fieles.',
        'El mismo libro pone dos proverbios seguidos que parecen opuestos: «Nunca respondas al necio de acuerdo con su necedad» y «Responde al necio como merece su necedad» (Pr 26:4-5). No es una contradicción: la sabiduría consiste en discernir qué situación pide cada respuesta.',
        { h: 'Job y Eclesiastés: leer el libro completo' },
        'En Job, los amigos dicen cosas que suenan piadosas, pero al final Dios declara que no hablaron de él «lo recto, como mi siervo Job» (Job 42:7). Citar a Elifaz como si fuera la enseñanza de Dios es un error. Eclesiastés, a su vez, examina la vida «debajo del sol», y su conclusión llega al final del libro: «Teme a Dios, y guarda sus mandamientos» (Ec 12:13). En estos libros, el sentido se descubre leyendo el conjunto.',
        { ejercicio: {
          pregunta: 'Unos padres criaron a su hijo en el Señor, y hoy él está lejos de Dios. ¿Qué enseña correctamente Proverbios 22:6 en esa situación?',
          opciones: [
            { t: 'Que los padres fallaron, porque la promesa es segura para quien instruye bien.', ok: false, por_que: 'Esto lee el proverbio como una garantía absoluta. Los proverbios expresan principios generales, no promesas sin excepción.' },
            { t: 'Que la formación temprana deja una huella profunda, y los padres pueden seguir orando con esperanza.', ok: true, por_que: 'El proverbio afirma el valor duradero de la instrucción; no anula la responsabilidad personal del hijo ni la gracia de Dios que sigue obrando.' },
            { t: 'Que el proverbio no se aplica a nuestra época.', ok: false, por_que: 'El principio sigue vigente. El error no está en aplicarlo, sino en convertirlo en una garantía.' }
          ],
          explicacion: 'Reconocer el género sapiencial protege de conclusiones injustas: los proverbios enseñan cómo funciona la vida en general bajo Dios, y requieren sabiduría para aplicarse.'
        } }
      ],
      pensar: 'Los salmistas oraron con total honestidad, incluso en la angustia. ¿Qué salmo podría darte palabras para orar hoy por lo que estás viviendo?'
    },
    {
      id: 'profecia', n: 'La profecía', ref: 'Jeremías 18:7-8; Jonás 3:4, 10; Isaías 61:1-2; Lucas 4:16-21',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-montes.svg', alt: 'Un observador mira dos cumbres que parecen juntas a la distancia; de lado se ve el valle que las separa: la primera venida de Cristo y su venida en gloria, con la era de la iglesia en medio', pie: 'La perspectiva profética: dos cumbres que de lejos parecen una.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/4/18-21', ref: 'Lucas 4:18-21' }
      ],
      texto: [
        'Cuando pensamos en profecía, solemos pensar en anuncios del futuro. Pero la mayor parte de lo que dijeron los profetas fue un llamado a su propia generación: volver a Dios, abandonar la idolatría, practicar la justicia y cuidar al pobre. Profetizar era, ante todo, proclamar la palabra de Dios al pueblo; el anuncio del futuro servía a ese llamado. Por eso, al leer un profeta, la primera pregunta es a quién habló y en qué situación.',
        { h: 'Profecías cumplidas, por cumplirse y condicionales' },
        'Algunas profecías ya se cumplieron, como el regreso del exilio o el nacimiento de Jesús en Belén. Otras esperan su cumplimiento, como la venida de Cristo en gloria. Y algunos anuncios de juicio eran condicionales, aunque no lo dijeran expresamente. Jonás predicó: «De aquí a cuarenta días Nínive será destruida» (Jon 3:4). La ciudad se arrepintió, y Dios no la destruyó (Jon 3:10). Jeremías explica el principio: si un pueblo se convierte de su maldad, Dios se arrepiente del mal que había anunciado (Jer 18:7-8).',
        { h: 'Las dos cumbres' },
        'Los profetas a veces vieron en una sola visión acontecimientos que estaban separados por siglos, como quien mira dos montañas a lo lejos y las ve juntas, sin percibir el valle que hay entre ellas. Isaías anunció al Ungido que traería «el año de la buena voluntad de Jehová, y el día de venganza del Dios nuestro» (Is 61:2). En la sinagoga de Nazaret, Jesús leyó ese pasaje y se detuvo antes del día de venganza; luego dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21). La primera parte se cumplió en su primera venida; la segunda espera su regreso.',
        'Por eso la profecía se lee con humildad y con el resto de la Escritura. El Nuevo Testamento nos muestra cómo se cumplieron muchas profecías, y nos enseña a esperar las que faltan sin fijar fechas, porque «del día y la hora nadie sabe» (Mt 24:36).',
        { ejercicio: {
          pregunta: '¿Por qué Jesús se detuvo en Isaías 61:2 sin leer «el día de venganza del Dios nuestro»?',
          opciones: [
            { t: 'Porque esa parte de la profecía ya no tenía validez.', ok: false, por_que: 'La Escritura no pierde validez. El juicio anunciado se cumplirá en su tiempo.' },
            { t: 'Porque en su primera venida cumplía la parte de gracia, y el juicio corresponde a su segunda venida.', ok: true, por_que: 'Jesús dijo que «hoy» se cumplía lo que había leído. Lo demás pertenece a su venida en gloria: dos cumbres de una misma profecía.' },
            { t: 'Porque el rollo de Nazaret estaba incompleto.', ok: false, por_que: 'No hay indicio de eso en el texto. La pausa de Jesús es intencional y significativa.' }
          ],
          explicacion: 'La perspectiva profética ayuda a entender por qué algunas profecías se cumplen en partes, separadas por el tiempo de la iglesia.'
        } },
        { ir: { t: 'Abrir Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'La mayor parte de la profecía llamaba a la gente a volver a Dios en su propio presente. ¿Qué llamado de los profetas sigue siendo urgente para la iglesia de hoy?'
    },
    {
      id: 'evangelios-parabolas', n: 'Los evangelios y las parábolas', ref: 'Lucas 15:1-3; 18:1; Mateo 13:10-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/15/1-3', ref: 'Lucas 15:1-3' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Claves para una parábola',
          cab: ['Clave', 'Ejemplo'],
          filas: [
            ['Busca la ocasión', 'Lucas 15: los fariseos murmuran porque Jesús recibe a pecadores'],
            ['Busca la explicación del propio texto', 'Lucas 18:1: la viuda insistente enseña a orar siempre'],
            ['Identifica el punto central', 'Dios se alegra por un pecador que se arrepiente (Lc 15:7)'],
            ['No fuerces cada detalle', 'Las algarrobas del hijo pródigo no simbolizan una doctrina'],
            ['Mira la reacción esperada', '¿Con quién se identifica el oyente? Con el hermano mayor']
          ]
        } }
      ],
      texto: [
        'Los cuatro evangelios no son biografías modernas, sino cuatro retratos de Jesús escritos por inspiración, cada uno con su propósito y su público. Mateo escribe pensando en lectores judíos y muestra el cumplimiento de las profecías; Marcos presenta al Siervo en acción; Lucas, al Salvador de todos; Juan, al Hijo eterno, para que creamos y tengamos vida (Jn 20:31). Cuando un mismo hecho aparece en varios evangelios, comparar los relatos enriquece la comprensión, como cuatro testigos que miran desde ángulos distintos.',
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } },
        { h: 'Las parábolas' },
        'Jesús enseñó mucho por parábolas: relatos breves tomados de la vida diaria que comunican una verdad del reino. Revelaban el misterio del reino a los que tenían oídos para oír, y lo velaban a los que no querían creer (Mt 13:10-11). Para interpretarlas, lo primero es buscar la ocasión. Las tres parábolas de Lucas 15 (la oveja, la moneda y el hijo perdidos) responden a los fariseos que murmuraban porque Jesús recibía a los pecadores (Lc 15:2). El punto central es el gozo de Dios por el pecador que se arrepiente, y la parábola termina con el hermano mayor afuera, retratando a los mismos fariseos.',
        'A veces el propio evangelio da la clave: «les refirió Jesús una parábola sobre la necesidad de orar siempre, y no desmayar» (Lc 18:1). Y cuando Jesús explica una parábola, como la del sembrador (Mt 13:18-23), su explicación es la norma.',
        { h: 'No alegorizar cada detalle' },
        'Durante siglos se interpretó el buen samaritano como una alegoría: el hombre herido es Adán, Jerusalén el paraíso, los ladrones el diablo, el mesón la iglesia y las dos monedas los sacramentos. Puede sonar edificante, pero Jesús nunca dijo eso: la parábola responde a la pregunta «¿quién es mi prójimo?» y termina con un mandato claro: «Ve, y haz tú lo mismo» (Lc 10:37). Una parábola suele tener un punto central, a veces dos o tres ligados a sus personajes principales; los demás detalles dan vida al relato.',
        { ejercicio: {
          pregunta: 'En Lucas 15, ¿a quién representa principalmente el hijo mayor de la parábola?',
          opciones: [
            { t: 'A los ángeles, que nunca se apartaron de Dios.', ok: false, por_que: 'Nada en el contexto apunta a los ángeles. La parábola responde a personas concretas que estaban presentes.' },
            { t: 'A los fariseos y escribas que murmuraban porque Jesús recibía a los pecadores.', ok: true, por_que: 'La ocasión (Lucas 15:1-2) lo muestra: el hermano mayor se queja como ellos y se niega a entrar a la fiesta.' },
            { t: 'A los creyentes fieles, que merecen más que los recién convertidos.', ok: false, por_que: 'El hermano mayor no es presentado como modelo: su actitud es la que Jesús confronta.' }
          ],
          explicacion: 'La ocasión de una parábola es la mejor llave para entenderla. Jesús la contó a alguien, por algo.'
        } }
      ],
      pensar: 'En la parábola de Lucas 15, el hermano mayor se queda afuera de la fiesta. ¿Hay alguna persona cuyo regreso a Dios te ha costado celebrar?'
    },
    {
      id: 'cartas', n: 'Las cartas', ref: '1 Corintios 1:2; 1 Corintios 7:1; Romanos 16:16',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Claves para leer una carta',
          cab: ['Clave', 'Qué hacer'],
          filas: [
            ['Leerla entera', 'Una carta se lee de una sentada; así la oyeron las iglesias'],
            ['Reconstruir la ocasión', '¿Qué problema o pregunta motiva la carta? (1 Co 7:1: «En cuanto a las cosas de que me escribisteis»)'],
            ['Seguir el argumento', 'Doctrina y práctica suelen ir en ese orden (Ro 1–11 y 12–16; Ef 1–3 y 4–6)'],
            ['Separar principio y forma', 'El principio permanece; la forma cultural puede variar'],
            ['Notar el destinatario', '¿Una iglesia, una persona, varias iglesias?']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1co/1/2', ref: '1 Corintios 1:2' }
      ],
      texto: [
        'Veintiún libros del Nuevo Testamento son cartas. Pablo, Pedro, Santiago, Juan y Judas escribieron a iglesias y a personas para enseñar, corregir, animar y responder preguntas. Son cartas reales, con saludos, noticias, pedidos y despedidas. A la vez son Escritura inspirada, dirigidas «a la iglesia de Dios que está en Corinto… con todos los que en cualquier lugar invocan el nombre de nuestro Señor Jesucristo» (1 Co 1:2).',
        { h: 'Leer una conversación a medias' },
        'Leer una carta del Nuevo Testamento es como escuchar un lado de una conversación telefónica: oímos lo que dice el apóstol, pero tenemos que deducir lo que le habían preguntado o informado. En 1 Corintios, Pablo responde a cosas que le contaron los de Cloé (1 Co 1:11) y a preguntas que le escribieron: «En cuanto a las cosas de que me escribisteis» (1 Co 7:1). Reconstruir esa situación ayuda a entender por qué el apóstol insiste en ciertos temas y cómo aplicarlos hoy.',
        'También conviene leer la carta completa, de una sola vez, como la escucharon las iglesias cuando se leía en voz alta. Muchas cartas siguen un orden: primero la doctrina y luego la práctica. En Efesios, los capítulos 1 a 3 exponen lo que Dios hizo en Cristo, y los capítulos 4 a 6 explican cómo vivir en consecuencia.',
        { h: 'Principio permanente y forma cultural' },
        'Algunas instrucciones se expresan en formas propias de esa cultura. Pablo pide: «Saludaos los unos a los otros con ósculo santo» (Ro 16:16). El principio, el afecto fraternal sincero y puro entre los hermanos, es permanente; la forma (el beso como saludo) varía según los pueblos, y muchas iglesias lo expresan con un abrazo o un apretón de manos. Para distinguir principio y forma, hay que preguntarse si el autor basa la instrucción en la creación, en el carácter de Dios o en la obra de Cristo (lo que indica algo permanente), o en una costumbre de su tiempo. Ante la duda, la actitud sabia es la humildad: no descartar ligeramente un mandato como «cultural» ni imponer como mandato lo que es solo una forma.',
        { ejercicio: {
          pregunta: 'Pablo manda saludarse «con ósculo santo» (Romanos 16:16). ¿Cómo se aplica mejor hoy?',
          opciones: [
            { t: 'Es obligatorio que todos los creyentes se saluden con un beso en cada reunión.', ok: false, por_que: 'Esto confunde la forma con el principio. El texto no busca imponer un gesto de una cultura a todas las demás.' },
            { t: 'Ya no tiene aplicación porque era una costumbre antigua.', ok: false, por_que: 'La forma era cultural, pero el principio sigue vigente: todo el texto es útil para enseñar.' },
            { t: 'Los hermanos deben saludarse con afecto sincero y puro, con el gesto propio de su cultura.', ok: true, por_que: 'El principio permanente es el amor fraternal expresado con santidad; la forma puede variar.' }
          ],
          explicacion: 'Distinguir principio y forma permite obedecer de verdad el texto, sin convertir costumbres en mandamientos ni descartar mandamientos como costumbres.'
        } }
      ],
      pensar: 'Si escribieras una carta a tu congregación, ¿qué problema o pregunta la motivaría? Piensa en eso al leer la próxima carta del Nuevo Testamento.'
    },
    {
      id: 'apocaliptica', n: 'La literatura apocalíptica', ref: 'Daniel 7:17; Apocalipsis 1:1, 20; 5:5-6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ap/5/5-6', ref: 'Apocalipsis 5:5-6' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Símbolos que el mismo texto explica',
          cab: ['Símbolo', 'Explicación', 'Pasaje'],
          filas: [
            ['Cuatro grandes bestias', 'Cuatro reyes o reinos', 'Daniel 7:17'],
            ['Carnero de dos cuernos', 'Los reyes de Media y de Persia', 'Daniel 8:20'],
            ['Siete estrellas', 'Los ángeles de las siete iglesias', 'Apocalipsis 1:20'],
            ['Siete candeleros', 'Las siete iglesias', 'Apocalipsis 1:20'],
            ['El gran dragón', 'La serpiente antigua, el diablo y Satanás', 'Apocalipsis 12:9'],
            ['Las muchas aguas', 'Pueblos, muchedumbres, naciones y lenguas', 'Apocalipsis 17:15']
          ]
        } }
      ],
      texto: [
        'Daniel y Apocalipsis contienen un tipo de literatura llamado apocalíptico, de la palabra griega que significa «revelación». Se caracteriza por visiones, ángeles que explican, números simbólicos, animales con rasgos extraños y un mensaje central: Dios gobierna la historia y su reino triunfará sobre todos los poderes del mal. Juan dice que Dios declaró su revelación «enviándola por medio de su ángel» (Ap 1:1): son mensajes comunicados por señales.',
        { h: 'Símbolos de realidades reales' },
        'Que un texto use símbolos no significa que hable de cosas imaginarias. Los símbolos apuntan a personas, reinos y acontecimientos reales. La regla más importante es buscar primero la explicación en el mismo texto. Daniel ve cuatro bestias, y el ángel le dice: «Estas cuatro grandes bestias son cuatro reyes que se levantarán en la tierra» (Dn 7:17). Juan ve siete estrellas y siete candeleros, y se le explica que son los ángeles de las siete iglesias y las siete iglesias (Ap 1:20).',
        'La segunda regla es buscar el trasfondo en el Antiguo Testamento. Apocalipsis está lleno de imágenes tomadas de Éxodo, Ezequiel, Daniel y Zacarías. Las plagas de las trompetas recuerdan las de Egipto; la mujer y el dragón recuerdan la promesa de Génesis 3:15.',
        { h: 'El León que es Cordero' },
        'Un ejemplo muestra el poder de este lenguaje. En Apocalipsis 5, un anciano anuncia que el León de la tribu de Judá ha vencido; Juan mira y ve «un Cordero como inmolado» (Ap 5:5-6). Las dos imágenes describen a Cristo: el Rey vencedor que triunfó por medio de su muerte. Ninguna fotografía podría decir tanto en tan pocas palabras.',
        'Leer la apocalíptica con estas reglas protege de dos extremos: convertir todo en símbolos sin relación con hechos futuros, y leer cada detalle como si fuera una descripción literal de la televisión de mañana. El texto enseña acontecimientos reales con un lenguaje simbólico, y su propósito es dar esperanza y llamar a la fidelidad.',
        { ejercicio: {
          pregunta: 'Al encontrar un símbolo en Apocalipsis, ¿qué conviene hacer primero?',
          opciones: [
            { t: 'Buscar si el mismo texto o el contexto cercano explica el símbolo.', ok: true, por_que: 'Muchas veces el propio libro da la clave, como en Apocalipsis 1:20 o 17:15.' },
            { t: 'Relacionarlo con la noticia internacional más reciente.', ok: false, por_que: 'Este método ha producido muchas interpretaciones fallidas. El primer paso es dejar que la Biblia explique la Biblia.' },
            { t: 'Concluir que no tiene sentido real y pasarlo por alto.', ok: false, por_que: 'Los símbolos apocalípticos apuntan a realidades. Saltarlos es perder parte de la revelación.' }
          ],
          explicacion: 'El orden es: explicación del mismo texto, trasfondo del Antiguo Testamento, y enseñanza del resto de la Escritura. Las noticias pueden ilustrar, pero no interpretan.'
        } },
        { ir: { t: 'Abrir el estudio de Apocalipsis', a: '../../apocalipsis/' } }
      ],
      pensar: 'Apocalipsis muestra al León de Judá como un Cordero inmolado. ¿Qué te dice esa imagen sobre la manera en que Dios vence el mal?'
    }
  ];
