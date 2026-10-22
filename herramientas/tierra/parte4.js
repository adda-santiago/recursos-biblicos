  // ================== RUTA IV. Caminos, ciudades y distancias ==================
  const caminos = [
    {
      id: 'internacionales', n: 'Los caminos internacionales', ref: 'Isaías 9:1; Números 20:17; 21:21-23; Génesis 37:25; 1 Reyes 9:15',
      visual: [
        mapa({ view: [[29.3, 32.4], [33.8, 36.8]], lugares: ['gaza', 'meguido', 'hazor', 'damasco', 'rabat-amon', 'bosra', 'ezion-geber', 'kir-hareset', 'hesbon'], trazos: ['c-mar', 'c-real'] }),
        img('caravana.webp', 'Una caravana de camellos cargados con fardos de especias y telas avanza por un camino de tierra junto a la costa del Mediterráneo, con mercaderes anónimos con turbantes y mantos, y una colina con una ciudad amurallada al fondo', 'Una caravana por el camino de la costa.')
      ],
      texto: [
        'Dos grandes caminos internacionales cruzaban la región de norte a sur. No eran carreteras pavimentadas como las romanas, que llegaron mucho después, sino rutas usadas durante siglos, que seguían los pasos más fáciles, las fuentes de agua y las ciudades donde se podía descansar.',
        { h: 'El camino del mar' },
        'El primero salía de Egipto, cruzaba el norte del Sinaí por la costa y subía por la llanura de los filisteos pasando por Gaza, Ascalón y Asdod. Al llegar al monte Carmelo cruzaba la serranía por el paso de Meguido, atravesaba el valle de Jezreel, bordeaba el mar de Galilea, pasaba por Hazor y seguía hacia Damasco y Mesopotamia. Isaías lo llama «el camino del mar» (Is 9:1), y los romanos, más tarde, Vía Maris. Por eso las ciudades que lo controlaban, como Hazor, Meguido y Gezer, fueron fortificadas por Salomón (1 R 9:15).',
        'Dios no llevó a Israel por este camino cuando salió de Egipto, aunque era el más corto: «para que no se arrepienta el pueblo cuando vea la guerra, y se vuelva a Egipto» (Éx 13:17). Las fortalezas egipcias y las ciudades filisteas lo vigilaban.',
        { h: 'El camino real' },
        'El segundo corría por la meseta de Transjordania: desde el golfo de Áqaba, por Edom, Moab, Hesbón y Rabá de Amón, hasta Damasco. La Biblia lo llama «el camino real». Moisés pidió permiso al rey de Edom para pasar por él: «por el camino real iremos, sin apartarnos a diestra ni a siniestra, hasta que hayamos pasado tu territorio» (Nm 20:17). Edom se negó, y lo mismo hizo después Sehón, rey de Hesbón, a quien Israel venció (Nm 21:21-24). Por este camino subían las caravanas de incienso y especias de Arabia.',
        { h: 'Comerciantes y ejércitos' },
        'Por estos caminos pasaban las caravanas de camellos con especias, metales, tejidos y esclavos. A José lo vendieron sus hermanos a una de ellas: «una compañía de ismaelitas que venía de Galaad, y sus camellos traían aromas, bálsamo y mirra, e iban a llevarlo a Egipto» (Gn 37:25). Por ellos pasaban también los ejércitos de los faraones y de los reyes de Asiria y Babilonia.',
        'Controlar estos caminos daba riqueza y poder, y en tiempos de Salomón, Israel cobraba a los mercaderes que pasaban (1 R 10:15). Pero también hacía de la tierra un lugar disputado: quien quería dominar el mundo antiguo necesitaba pasar por aquí.'
      ],
      pensar: 'Dios no llevó a Israel por el camino más corto, sino por el que podía soportar (Éx 13:17-18). ¿Hay algún «rodeo» en tu vida que hoy puedas ver como cuidado de Dios?'
    },
    {
      id: 'interiores', n: 'Los caminos interiores', ref: 'Génesis 12:6-9; Lucas 2:41-45; 9:51-53; 10:30-35; Juan 4:3-4; Lucas 24:13',
      visual: [
        pasos([
          { t: 'El camino de la cresta une Beerseba, Hebrón, Belén, Jerusalén, Betel, Silo y Siquem.', estado: { view: [[31.1, 34.5], [32.75, 35.75]], lugares: ['beerseba', 'hebron', 'belen', 'jerusalen', 'betel', 'silo', 'siquem', 'jezreel'], trazos: ['c-cresta'] } },
          { t: 'De Galilea a Jerusalén: por Samaria (unos tres días) o por el valle del Jordán.', estado: { view: [[31.6, 34.9], [32.85, 35.8]], lugares: ['nazaret', 'jezreel', 'siquem', 'betel', 'jerusalen', 'bet-sean', 'jerico'], trazos: ['c-samaria', 'c-jordan'] } },
          { t: 'La subida de Jericó a Jerusalén: 22 km y más de 1.000 m de desnivel.', estado: { view: [[31.68, 35.12], [31.95, 35.52]], lugares: ['jerusalen', 'betania', 'jerico'], trazos: ['c-jerico'] } },
          { t: 'El camino a Emaús, a unos sesenta estadios de Jerusalén.', estado: { view: [[31.7, 35.05], [31.9, 35.3]], lugares: ['jerusalen', 'emaus'], trazos: ['c-emaus'] } }
        ])
      ],
      texto: [
        'Además de los grandes caminos internacionales, la tierra tenía una red de caminos interiores que unían las aldeas y las ciudades. Por ellos caminaban los patriarcas con sus rebaños, los peregrinos que subían a las fiestas, los profetas y, más tarde, Jesús y sus discípulos.',
        { h: 'El camino de la cresta' },
        'El más importante corría de norte a sur por lo alto de la serranía central, siguiendo la línea de las cumbres para evitar los valles profundos. Unía Beerseba, Hebrón, Belén, Jerusalén, Betel, Silo y Siquem. Es el camino de los patriarcas: Abraham llegó a Siquem, siguió a Betel y continuó hacia el Neguev (Gn 12:6-9). Casi todas las ciudades de la historia de Israel en los montes están junto a este camino.',
        { h: 'De Galilea a Jerusalén' },
        'Los judíos de Galilea subían a Jerusalén tres veces al año para las fiestas. Tenían dos caminos. El más directo pasaba por Samaria y tomaba unos tres días. Muchos preferían bajar al valle del Jordán, seguir hacia el sur hasta Jericó y subir desde allí a Jerusalén, para no pasar por tierra samaritana. Lucas cuenta que en una ocasión los samaritanos no quisieron recibir a Jesús «porque su aspecto era como de ir a Jerusalén» (Lc 9:53). Sin embargo, Juan dice que a Jesús «le era necesario pasar por Samaria» (Jn 4:4).',
        'Los peregrinos viajaban en grupos grandes de familias y vecinos, cantando los salmos de las subidas. Por eso María y José pudieron caminar un día entero sin darse cuenta de que Jesús, con doce años, se había quedado en Jerusalén: «pensando que estaba entre la compañía, anduvieron camino de un día» (Lc 2:44).',
        { h: 'La subida de Jericó' },
        'De Jericó a Jerusalén hay solo 22 kilómetros en línea recta, pero el camino sube más de 1.000 metros por el desierto de Judea, entre barrancos donde se escondían ladrones. Es el escenario de la parábola del buen samaritano (Lc 10:30-35). Por ese camino subió Jesús en su último viaje a Jerusalén, pasando por Jericó, donde sanó a Bartimeo y entró en casa de Zaqueo (Lc 18:35–19:10).',
        { h: 'El camino a Emaús' },
        'El domingo de la resurrección, dos discípulos caminaban hacia Emaús, «que estaba a sesenta estadios de Jerusalén» (Lc 24:13), unos 11 kilómetros. Jesús caminó con ellos y les explicó las Escrituras, y lo reconocieron al partir el pan. Esa misma noche volvieron a Jerusalén.',
        ir('Ver el recorrido de Jesús en la armonía de los evangelios', '../../evangelios/')
      ],
      pensar: 'Los discípulos de Emaús caminaban tristes sin saber que Jesús iba con ellos (Lc 24:15-16). ¿En qué camino de tu vida necesitas reconocer que el Señor camina a tu lado?'
    },
    {
      id: 'pasos', n: 'Pasos que decidieron batallas', ref: 'Josué 10:6-14; 1 Samuel 17:1-3; 2 Reyes 23:29-30; Apocalipsis 16:16',
      visual: [
        pasos([
          { t: 'La subida de Bet-horón: Josué persigue a los amorreos desde Gabaón hacia el valle de Ajalón.', estado: { view: [[31.75, 34.88], [31.95, 35.28]], lugares: ['gabaon', 'bet-horon', 'ajalon', 'gezer'], trazos: ['c-bethoron'] } },
          { t: 'El valle de Ela: el camino de los filisteos desde Gat hacia Belén.', estado: { view: [[31.6, 34.78], [31.78, 35.25]], lugares: ['gat', 'azeca', 'soco', 'valle-ela', 'belen'], trazos: ['c-ela'] } },
          { t: 'El paso de Aruna, junto a Meguido: la puerta entre la costa y el valle de Jezreel.', estado: { view: [[32.3, 34.8], [32.7, 35.4]], lugares: ['meguido', 'aruna', 'jezreel'], trazos: ['c-aruna'] } }
        ]),
        tabla({
          titulo: 'Batallas en los pasos de la tierra',
          cab: ['Paso', 'Batalla', 'Referencia'],
          filas: [
            ['Bet-horón', 'Josué vence a los cinco reyes amorreos', 'Jos 10:10-14'],
            ['Bet-horón', 'Los filisteos atacan a Saúl por este camino', '1 S 13:17-18'],
            ['Valle de Ela', 'David vence a Goliat', '1 S 17'],
            ['Valle de Sorec', 'Los filisteos y Sansón', 'Jue 16'],
            ['Meguido', 'Débora y Barac junto a «las aguas de Meguido»', 'Jue 5:19'],
            ['Meguido', 'Muere el rey Josías frente al faraón Necao', '2 R 23:29-30'],
            ['Meguido', 'Armagedón, la batalla final', 'Ap 16:16']
          ],
          nota: 'Fuera de la Biblia, el faraón Tutmosis III venció en Meguido a una coalición cananea hacia 1457 a.C., y el general británico Allenby, que venció allí a los otomanos en 1918, recibió después el título de vizconde de Meguido.'
        })
      ],
      texto: [
        'En una tierra de montes, quien controla los pasos controla el país. Los ejércitos que venían de la costa no podían subir a los montes por cualquier lado: tenían que usar los pocos valles y subidas por donde pasaban los carros y los bagajes. Por eso las mismas batallas se repiten una y otra vez en los mismos lugares.',
        { h: 'La subida de Bet-horón' },
        'Al noroeste de Jerusalén, un camino sube desde el valle de Ajalón por una cresta estrecha, pasando por dos aldeas llamadas Bet-horón de abajo y Bet-horón de arriba. Es el acceso más directo desde la costa hacia Gabaón y Jerusalén. Por aquí persiguió Josué a los cinco reyes amorreos que habían atacado Gabaón. Mientras huían por la bajada de Bet-horón, Dios hizo caer granizo sobre ellos, y Josué pidió: «Sol, detente en Gabaón; y tú, luna, en el valle de Ajalón» (Jos 10:12). Siglos después, por el mismo camino, subieron los filisteos contra Saúl (1 S 13:17-18).',
        { h: 'El valle de Ela' },
        'Más al sur, el valle de Ela sube desde la tierra de los filisteos, cerca de Gat, hacia los montes de Belén. Los filisteos acamparon allí para abrirse camino hacia el corazón de Judá. David, un joven pastor de Belén, defendió ese paso con una honda y cinco piedras, con la convicción de que «de Jehová es la batalla» (1 S 17:47).',
        { h: 'El paso de Meguido' },
        'En el norte, el camino del mar debía cruzar la cadena del Carmelo para pasar de la llanura de Sarón al valle de Jezreel. El paso más usado salía junto a la ciudad de Meguido, que lo custodiaba. Por eso Meguido fue una de las ciudades más fortificadas de la región y escenario de muchas batallas. Allí murió el rey Josías, que quiso detener al faraón Necao cuando subía a ayudar a los asirios (2 R 23:29-30), y su muerte fue llorada por todo Judá (2 Cr 35:24-25).',
        'El libro de Apocalipsis toma este nombre para el lugar donde se reunirán los ejércitos al final: «Armagedón», el monte de Meguido (Ap 16:16). El paso de tantas batallas humanas será el escenario de la última, que no ganarán los ejércitos sino el Rey de reyes (Ap 19:11-16).',
        { ejercicio: {
          pregunta: '¿Por qué tantas batallas ocurrieron en Bet-horón, el valle de Ela y Meguido?',
          opciones: [
            { t: 'Porque eran lugares sagrados para los cananeos.', ok: false, por_que: 'La razón no es religiosa sino geográfica: eran los pasos por donde se podía cruzar.' },
            { t: 'Porque eran pasos obligados entre la costa y los montes.', ok: true, por_que: 'Los ejércitos con carros solo podían subir por ciertos valles; quien los controlaba defendía o abría el país.' },
            { t: 'Porque tenían las fuentes de agua más grandes de la tierra.', ok: false, por_que: 'Había agua, pero no es lo que los hacía decisivos. Lo importante era que unían la costa con el interior.' }
          ],
          explicacion: 'La geografía explica la historia: en una tierra de montes, los valles que suben desde la costa son las puertas del país. Por eso se luchó tantas veces en los mismos lugares.'
        } }
      ],
      pensar: 'David venció en el valle de Ela porque sabía que «de Jehová es la batalla» (1 S 17:47). ¿Qué batalla estás enfrentando hoy con tus propias fuerzas en lugar de confiar en el Señor?'
    },
    {
      id: 'ciudades', n: 'Ciudades, tells y puertas', ref: 'Rut 4:1-11; Deuteronomio 21:19; Proverbios 31:23; Josué 8:28; Mateo 16:18',
      visual: [
        esq('esquema-tell.svg', 'Corte de un tell: una colina artificial formada por capas de ciudades construidas una sobre otra, con la roca natural abajo, una ciudad cananea, una ciudad israelita con su muralla y su puerta, una capa de ceniza por una destrucción, una ciudad persa y una ciudad romana arriba', 'Un tell: siglos de ciudades, una encima de otra.', 'Tell'),
        img('puerta.webp', 'Ancianos de una ciudad israelita, anónimos, sentados en los bancos de piedra junto a la puerta de la ciudad, escuchando un caso; una puerta de cuatro cámaras con muros gruesos y gente que entra con burros cargados', 'En la puerta de la ciudad se reunían los ancianos y se hacía justicia.')
      ],
      texto: [
        'Las ciudades de la tierra de Israel eran pequeñas para nuestros ojos. Muchas tenían apenas unas hectáreas y unos cientos o pocos miles de habitantes. Se construían en una colina, cerca de una fuente y de un camino, y se rodeaban de una muralla. Afuera estaban los campos, las viñas y las aldeas dependientes.',
        { h: 'El tell' },
        'Cuando una ciudad era destruida por la guerra, un terremoto o un incendio, no se buscaba otro lugar: se reconstruía encima de las ruinas, que se nivelaban. Con los siglos, las capas de una ciudad sobre otra formaban una colina artificial de lados empinados y cima plana. En árabe se llama «tell», y en hebreo «tel». La Biblia usa la palabra: Josué quemó Hai «y la redujo a un montón de escombros» (Jos 8:28), en hebreo un «tel». Hoy muchas ciudades israelíes llevan ese nombre, como Tel Aviv.',
        'Los arqueólogos excavan los tells capa por capa. Cada estrato es una época, con sus casas, su cerámica y a veces una capa de ceniza que marca una destrucción. En tells como Meguido, Hazor o Laquis se han encontrado más de veinte niveles de ocupación, desde mucho antes de Abraham hasta la época romana.',
        { h: 'La puerta de la ciudad' },
        'La parte más importante de una ciudad era su puerta. No era una simple abertura en la muralla, sino un edificio con varias cámaras a cada lado y bancos de piedra. Allí se reunían los ancianos, se hacían los negocios, se resolvían los juicios y se proclamaban las noticias. Booz «subió a la puerta y se sentó allí» para arreglar ante diez ancianos el derecho de redimir la heredad de Elimelec y casarse con Rut (Rt 4:1-11). La mujer virtuosa de Proverbios tiene un marido «conocido en las puertas, cuando se sienta con los ancianos de la tierra» (Pr 31:23).',
        'Por eso «la puerta» llegó a significar el poder de una ciudad. Dios promete a Abraham que su descendencia «poseerá las puertas de sus enemigos» (Gn 22:17), y Jesús dice de su iglesia que «las puertas del Hades no prevalecerán contra ella» (Mt 16:18). En la nueva Jerusalén, las doce puertas nunca se cerrarán (Ap 21:25).',
        { h: 'Los lugares altos' },
        'Junto a muchas ciudades había un «lugar alto», un santuario en una colina con un altar y piedras sagradas. Israel los heredó de los cananeos y los usó para adorar a otros dioses. Reyes fieles como Ezequías y Josías los quitaron, porque Dios había mandado adorarle en el lugar que Él escogiera (Dt 12:2-5; 2 R 18:4).'
      ],
      pensar: 'En la puerta se hacía justicia a la viuda y al extranjero (Am 5:15). ¿Cómo puedes ser tú alguien que defiende al débil en los lugares donde se toman decisiones?'
    },
    {
      id: 'refugio', n: 'Ciudades de refugio y ciudades levitas', ref: 'Números 35:1-34; Deuteronomio 19:1-13; Josué 20–21; Hebreos 6:18',
      visual: [
        mapa({ view: V.tierra, capas: ['t-tierra', 't-trans'], lugares: ['cedes', 'siquem', 'hebron', 'beser', 'ramot-galaad', 'golan-ciudad'] }),
        tabla({
          titulo: 'Las seis ciudades de refugio (Josué 20:7-8)',
          cab: ['Ciudad', 'Región', 'Lado del Jordán', 'Sentido que suele darse al nombre'],
          filas: [
            ['Cedes', 'Galilea, Neftalí', 'Oeste', 'Santuario, lugar santo'],
            ['Siquem', 'Monte de Efraín', 'Oeste', 'Hombro'],
            ['Hebrón (Quiriat-arba)', 'Montes de Judá', 'Oeste', 'Comunión, unión'],
            ['Beser', 'Desierto de la llanura, Rubén', 'Este', 'Fortaleza'],
            ['Ramot de Galaad', 'Galaad, Gad', 'Este', 'Alturas'],
            ['Golán', 'Basán, Manasés', 'Este', 'Incierto (tal vez «circuito»)']
          ],
          nota: 'El significado de los nombres es tradicional y en algunos casos discutido; sirve como ilustración, no como base de doctrina.'
        })
      ],
      texto: [
        'Antes de entrar en la tierra, Dios mandó apartar seis ciudades de refugio, tres a cada lado del Jordán, repartidas de norte a sur (Nm 35:9-15). En la ley antigua, cuando alguien moría a manos de otro, un pariente cercano, el «vengador de la sangre», tenía la responsabilidad de hacer justicia. Pero si la muerte había sido accidental, el que la causó podía huir a una ciudad de refugio y estar seguro allí hasta que fuera juzgado ante la congregación (Nm 35:24-25). Las ciudades no protegían al asesino culpable (Dt 19:11-13), sino al que había matado sin intención.',
        { h: 'Al alcance de todos' },
        'La ubicación de estas ciudades muestra el cuidado de Dios. Están repartidas de modo que ninguna parte de la tierra quedara demasiado lejos de una de ellas: al oeste del Jordán, Cedes en Galilea, Siquem en el centro y Hebrón en el sur; al este, Golán en Basán, Ramot en Galaad y Beser en la meseta de Moab (Jos 20:7-8). Además, Dios mandó cuidar el acceso: «Arreglarás los caminos, y dividirás en tres partes la tierra que Jehová tu Dios te dará en heredad, y será para que todo homicida huya allí» (Dt 19:3). La tradición judía cuenta que los caminos hacia estas ciudades tenían señales que decían «refugio».',
        'El refugiado debía quedarse en la ciudad hasta la muerte del sumo sacerdote. Entonces podía volver a su casa libre (Nm 35:25-28). La muerte del sumo sacerdote marcaba el fin de su condena.',
        { h: 'Las ciudades levitas' },
        'Las ciudades de refugio formaban parte de las cuarenta y ocho ciudades que las demás tribus dieron a los levitas, la tribu de los sacerdotes, que no recibió un territorio propio (Jos 21:41). Así, los levitas quedaron repartidos por toda la tierra para enseñar la ley al pueblo (Dt 33:10).',
        { h: 'Cristo, nuestro refugio' },
        'La carta a los Hebreos usa esta imagen para hablar de la seguridad del creyente en Cristo: «tengamos un fortísimo consuelo los que hemos acudido para asirnos de la esperanza puesta delante de nosotros» (He 6:18). La palabra «acudido» describe a alguien que corre a refugiarse. A diferencia del refugiado de la ley, que esperaba la muerte del sumo sacerdote, el creyente tiene un Sumo Sacerdote que murió por él y vive para siempre para interceder (He 7:24-25).',
        ir('Estudiar El sacerdocio en Israel', '../../sacerdocio/')
      ],
      pensar: 'Dios quiso que el refugio estuviera cerca y que el camino estuviera despejado. ¿Cómo puedes ayudar a que otros encuentren el camino hacia Cristo, su refugio?'
    },
    {
      id: 'distancias', n: 'Distancias y viajes a pie', ref: 'Lucas 2:41-45; 24:13; Juan 11:18; Hechos 1:12; 23:23-33',
      visual: [
        tabla({
          titulo: 'Algunas distancias de la Biblia',
          cab: ['De… a…', 'Línea recta', 'A pie, aprox.', 'Pasaje'],
          filas: [
            ['Dan – Beerseba', '236 km', '8 a 10 días', 'Jue 20:1'],
            ['Nazaret – Jerusalén', '103 km', '3 a 4 días', 'Lc 2:4, 41-44'],
            ['Capernaum – Nazaret', '40 km', '1 día y medio', 'Mt 4:13'],
            ['Jerusalén – Siquem (Sicar)', '49 km', '2 días', 'Jn 4:3-5'],
            ['Jerusalén – Jope', '55 km', '2 días', 'Hch 9:36–10:23'],
            ['Jerusalén – Cesarea', '87 km', '2 a 3 días', 'Hch 23:23-33'],
            ['Jerusalén – Gaza', '79 km', '3 días', 'Hch 8:26'],
            ['Jerusalén – Hebrón', '30 km', '1 día', '2 S 2:1-4'],
            ['Jerusalén – Jericó', '22 km', '1 día de subida', 'Lc 10:30'],
            ['Jerusalén – Emaús', '11 km (60 estadios)', '3 horas', 'Lc 24:13'],
            ['Jerusalén – Belén', '9 km', '2 horas', 'Lc 2:15'],
            ['Jerusalén – Betania', '3 km (15 estadios)', '45 minutos', 'Jn 11:18'],
            ['Camino de un día de reposo', 'unos 890 m (2.000 codos)', 'Algo más de 10 minutos', 'Hch 1:12']
          ],
          nota: 'Distancias en línea recta calculadas con las coordenadas del recurso. Los caminos de montaña son más largos; se calcula una jornada de 25 a 35 km.'
        }),
        img('peregrinos.webp', 'Un grupo grande de peregrinos judíos del siglo I, familias anónimas con niños, ancianos y burros cargados, camina por un camino de piedra entre colinas hacia Jerusalén, que se ve a lo lejos sobre un monte', 'Peregrinos que suben a Jerusalén para la fiesta.')
      ],
      texto: [
        'En tiempos bíblicos casi todos viajaban a pie. Los ricos podían ir en burro o en mula, y los oficiales en carro o a caballo, pero la mayoría caminaba. Un caminante podía hacer entre 25 y 35 kilómetros al día por terreno plano, menos en los montes. Por eso la Biblia mide muchas veces las distancias en días de camino: Labán persiguió a Jacob «camino de siete días» (Gn 31:23), y María y José anduvieron «camino de un día» antes de notar que Jesús no estaba con ellos (Lc 2:44).',
        { h: 'Las distancias de los evangelios' },
        'La tabla muestra algunas distancias en línea recta, calculadas con los mapas de este recurso, y el tiempo aproximado a pie. Al leerlas, muchos pasajes se vuelven más concretos. De Nazaret a Jerusalén hay unos 103 kilómetros en línea recta, pero el camino real era más largo: María, embarazada, hizo ese viaje hacia Belén en varios días. Betania, donde vivían Lázaro y sus hermanas, estaba «como a quince estadios» de Jerusalén (Jn 11:18), menos de una hora a pie: por eso Jesús podía alojarse allí durante la semana de la pasión y subir cada día al templo.',
        'Los discípulos de Emaús caminaron unos 11 kilómetros de ida y, esa misma noche, volvieron a Jerusalén para contar que habían visto al Señor (Lc 24:13, 33). Cuando Pablo fue llevado preso a Cesarea, los soldados lo sacaron de noche y lo llevaron hasta Antípatris, a unos 60 kilómetros por el camino, y al día siguiente siguieron hasta Cesarea (Hch 23:31-33).',
        { h: 'El camino de un día de reposo' },
        'Hechos dice que el monte de los Olivos estaba cerca de Jerusalén, «camino de un día de reposo» (Hch 1:12). Era la distancia que la tradición judía permitía caminar en sábado, 2.000 codos, unos 890 metros según los valores de este sitio. No es una ley de Moisés sino una interpretación de los maestros, basada en la distancia entre el arca y el pueblo en Josué 3:4.',
        { h: 'Haz tus propias cuentas' },
        'La calculadora del recurso Pesos, medidas, monedas y horas bíblicas convierte estadios, millas y codos a kilómetros y metros. Puedes usarla junto con esta tabla para entender cualquier distancia que aparezca en tu lectura.',
        ir('Abrir la calculadora de medidas bíblicas', '../../medidas-biblicas/'),
        { ejercicio: {
          pregunta: 'Según Juan 11:18, Betania estaba a unos quince estadios de Jerusalén. ¿Cuánto es eso aproximadamente?',
          opciones: [
            { t: 'Unos 3 kilómetros, menos de una hora a pie.', ok: true, por_que: 'Un estadio mide unos 185 m: quince estadios son casi 2,8 km.' },
            { t: 'Unos 15 kilómetros, medio día de camino.', ok: false, por_que: 'Un estadio no es un kilómetro, sino unos 185 metros.' },
            { t: 'Unos 300 metros, una caminata de cinco minutos.', ok: false, por_que: 'Eso sería un estadio y medio. Quince estadios son casi diez veces más.' }
          ],
          explicacion: 'Con el estadio de 185 m que usa el sitio, 15 estadios son unos 2,8 km. Por eso Jesús podía pasar la noche en Betania y subir cada día al templo durante su última semana.'
        } }
      ],
      pensar: 'Los discípulos de Emaús caminaron de noche 11 kilómetros de vuelta para contar que Jesús vivía. ¿Qué distancia estás dispuesto a recorrer para compartir esa noticia?'
    }
  ];
