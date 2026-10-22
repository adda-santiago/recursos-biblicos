  // ================== RUTA II. Las regiones ==================
  const TODAS = ['r-filistea', 'r-saron', 'r-aco', 'r-sefela', 'r-juda', 'r-desierto', 'r-neguev', 'r-efrain', 'r-carmelo', 'r-jezreel', 'r-galilea-baja', 'r-galilea-alta', 'r-jordan', 'r-basan', 'r-galaad', 'r-amon', 'r-moab', 'r-edom'];
  const region = (capas, view, lugares, trazos) => mapa({ view, capas, vecinos: TODAS.filter(c => !capas.includes(c)), lugares, trazos });

  const regiones = [
    {
      id: 'costa', n: 'La llanura costera', ref: 'Josué 13:2-3; Cantares 2:1; Jonás 1:3; Hechos 9:32–10:48',
      visual: [
        region(['r-filistea', 'r-saron', 'r-aco'], V.costa, ['gaza', 'ascalon', 'asdod', 'ecron', 'gat', 'jope', 'afec', 'cesarea', 'dor', 'tolemaida']),
        img('costa.webp', 'La costa rocosa del antiguo puerto de Jope al amanecer, con pequeñas barcas de madera amarradas junto a las rocas y casas de piedra sobre la colina', 'Jope, el único puerto natural de la costa sur de Israel.')
      ],
      texto: [
        'La costa de la tierra de Israel es casi recta: no tiene grandes bahías ni puertos naturales, salvo unos pocos lugares como Jope, Dor y la bahía de Aco. Detrás de la playa hay una franja de dunas y, más adentro, una llanura fértil que se ensancha hacia el sur. La llanura tiene tres partes.',
        { h: 'Filistea' },
        'Al sur, entre Jope y Gaza, vivían los filisteos, uno de los «pueblos del mar» que llegaron desde el Egeo hacia el siglo XII a.C. Tenían cinco ciudades principales, cada una con su príncipe: Gaza, Asdod, Ascalón, Gat y Ecrón (Jos 13:3). Sabían trabajar el hierro, y durante un tiempo Israel dependía de ellos hasta para afilar sus herramientas (1 S 13:19-20). Desde esta llanura subían hacia los montes por los valles de la Sefela, como se ve en la estación siguiente.',
        { h: 'Sarón' },
        'Más al norte, entre el río Yarcón y el monte Carmelo, estaba la llanura de Sarón. En tiempos bíblicos tenía bosques de robles, pantanos y pastos, y era famosa por sus flores: «Yo soy la rosa de Sarón, y el lirio de los valles» (Cnt 2:1). Isaías la pone como imagen de la gloria que Dios dará al desierto (Is 35:2). Herodes el Grande construyó aquí Cesarea, con un puerto artificial de piedra y cemento que asombró al mundo antiguo.',
        { h: 'La llanura de Aco' },
        'Al norte del Carmelo, la bahía de Aco (la Tolemaida del Nuevo Testamento) era la salida de Galilea al mar. Pertenecía a la tribu de Aser, que no logró expulsar a sus habitantes (Jue 1:31).',
        { h: 'Un pueblo de los montes frente al mar' },
        'Israel casi nunca dominó la costa. Era tierra de filisteos y fenicios, y por ella pasaba el camino del mar de los ejércitos y las caravanas. El mar mismo era para los israelitas un lugar de peligro: Jonás bajó a Jope para huir de Dios en un barco (Jon 1:3), y los salmos describen el mar embravecido como imagen del caos que solo Dios domina (Sal 93:3-4).',
        'Sin embargo, en esta costa comenzó una nueva etapa de la historia de la salvación. En Jope, Pedro tuvo la visión del lienzo con animales (Hch 10:9-16), y en Cesarea entró en casa del centurión Cornelio, donde el Espíritu Santo descendió sobre los gentiles (Hch 10:44-46). Desde el puerto de Cesarea, Pablo partió hacia Roma (Hch 27:1). La costa que Israel miraba con temor se volvió la puerta del evangelio hacia las naciones.',
        ir('Estudiar el libro de Hechos', '../../hechos/')
      ],
      pensar: 'Pedro tuvo que salir de lo conocido para entrar en casa de un gentil, y allí vio al Espíritu Santo descender sobre ellos (Hch 10:44-48). ¿Hay «costas» que miras con temor y a las que Dios podría estar enviándote?'
    },
    {
      id: 'sefela', n: 'La Sefela, tierra de frontera', ref: '1 Samuel 17:1-3; Jueces 14:1-5; 1 Reyes 10:27; Jeremías 34:7',
      visual: [
        region(['r-sefela'], V.sefela, ['laquis', 'azeca', 'soco', 'valle-ela', 'bet-semes', 'timnat', 'gat', 'ecron', 'gezer', 'ajalon'], ['c-ela']),
        img('sefela.webp', 'Colinas bajas y redondeadas de la Sefela en primavera, con un valle de trigo verde, sicómoros dispersos y un pastor anónimo con algunas ovejas', 'La Sefela: colinas bajas entre la llanura de los filisteos y los montes de Judá.')
      ],
      texto: [
        'Entre la llanura costera y los montes de Judá hay una franja de colinas bajas, de 150 a 450 metros de altura, que la Biblia llama la Sefela, palabra hebrea que significa tierra baja; la RV 1960 a veces la traduce «los llanos» (Jos 10:40). Tiene unos 15 kilómetros de ancho y está cortada por valles que corren de este a oeste. Esos valles eran los caminos naturales para subir desde la costa hacia Jerusalén y Hebrón, y por eso la Sefela fue durante siglos la frontera disputada entre Israel y los filisteos.',
        { h: 'Los valles de la Sefela' },
        'Cada valle tiene su historia. En el valle de Ajalón, Josué persiguió a los reyes amorreos y pidió: «Sol, detente en Gabaón; y tú, luna, en el valle de Ajalón» (Jos 10:12). En el valle de Sorec vivía Dalila, y en Timnat Sansón mató al león y se casó con una filistea (Jue 14:1-5; 16:4). Por el valle que pasa por Bet-semes volvió el arca de Dios desde Ecrón, en una carreta tirada por dos vacas (1 S 6:12).',
        'El más conocido es el valle de Ela. Allí los filisteos acamparon entre Soco y Azeca, «y los filisteos estaban sobre un monte a un lado, e Israel estaba sobre otro monte al otro lado, y el valle entre ellos» (1 S 17:3). Si los filisteos ganaban, tenían abierto el camino hacia Belén y los montes de Judá. Por eso la victoria de David sobre Goliat no fue solo un duelo: defendió el corazón del país.',
        { h: 'Sicómoros y ciudades fortificadas' },
        'La Sefela era tierra de olivos, viñas y sicómoros, una higuera silvestre de madera resistente. Para decir cuán rico fue el reinado de Salomón, la Biblia dice que hizo los cedros tan abundantes «como cabrahigos de la Sefela» (1 R 10:27). Amós, antes de ser profeta, dijo de sí mismo: «soy boyero, y recojo higos silvestres» (Am 7:14).',
        'Los reyes de Judá fortificaron la Sefela para proteger el reino. La más importante de sus ciudades era Laquis, la segunda de Judá. Senaquerib de Asiria la sitió en 701 a.C. y mandó grabar la victoria en los muros de su palacio en Nínive. Más de un siglo después, cuando Babilonia avanzaba, Laquis y Azeca eran las últimas ciudades fortificadas que quedaban en pie (Jer 34:7). Unas cartas escritas en trozos de cerámica halladas en Laquis, del mismo tiempo, mencionan que ya no se veían las señales de fuego de Azeca.',
        ir('Estudiar el imperio asirio', '../../imperio-asirio/')
      ],
      pensar: 'La batalla de David se libró en la frontera, antes de que el enemigo llegara al corazón del país. ¿Qué fronteras de tu vida espiritual necesitas defender a tiempo, confiando en el nombre del Señor (1 S 17:45)?'
    },
    {
      id: 'juda', n: 'La serranía de Judá', ref: 'Salmo 125:2; Génesis 23:17-20; Isaías 5:1-2; Miqueas 5:2',
      visual: [
        region(['r-juda'], V.juda, ['jerusalen', 'belen', 'hebron', 'gabaon', 'rama', 'quiriat-jearim', 'betar']),
        img('terrazas.webp', 'Laderas de los montes de Judea con terrazas de piedra, viñas, olivos y una pequeña torre de vigilancia de piedra, al atardecer, con un pueblo de casas de piedra a lo lejos', 'Viñas en terrazas en los montes de Judea, como la viña de Isaías 5.')
      ],
      texto: [
        'Al sur de Jerusalén, la serranía central se ensancha en una meseta alta de piedra caliza: los montes de Judá. Aquí están las alturas mayores de la serranía del sur, con más de 1.000 metros cerca de Hebrón. Es una tierra de piedra, con poca tierra cultivable en las laderas, que los campesinos convirtieron en terrazas con muros de piedra seca para retener el suelo y la lluvia. En ellas plantaban viñas, olivos e higueras.',
        { h: 'La viña en el monte' },
        'Isaías describe exactamente ese trabajo: «Tenía mi amado una viña en una ladera fértil. La había cercado y despedregado y plantado de vides escogidas; había edificado en medio de ella una torre, y hecho también en ella un lagar» (Is 5:1-2). Despedregar una ladera, levantar muros y construir una torre de vigilancia era la tarea de años. Por eso la decepción del dueño, que esperaba uvas y recibió uvas silvestres, es tan fuerte.',
        { h: 'Ciudades de la serranía' },
        'Hebrón es una de las ciudades más antiguas. Allí vivieron Abraham, Isaac y Jacob, y allí Abraham compró la cueva de Macpela para sepultar a Sara, el primer pedazo de la tierra prometida que fue suyo (Gn 23:17-20). David reinó siete años en Hebrón antes de tomar Jerusalén (2 S 5:5). Belén, a unos 9 kilómetros de Jerusalén, era la aldea de Rut, de Booz y de David, y el lugar donde había de nacer el Mesías: «Pero tú, Belén Efrata, pequeña para estar entre las familias de Judá, de ti me saldrá el que será Señor en Israel» (Mi 5:2).',
        { h: 'Jerusalén entre montes' },
        'Jerusalén está en el borde norte de los montes de Judá, sobre dos colinas rodeadas de valles profundos: el Cedrón al este y el Hinom al sur y al oeste. Más allá, otros montes más altos la rodean, como el monte de los Olivos. El salmista ve en ese paisaje una imagen de la protección de Dios: «Como Jerusalén tiene montes alrededor de ella, así Jehová está alrededor de su pueblo desde ahora y para siempre» (Sal 125:2). La ciudad era fácil de defender y estaba en el límite entre Judá y Benjamín, lo que la hacía neutral entre las tribus. David la escogió como capital (2 S 5:6-9).',
        'Desde la serranía de Judá, el terreno cae bruscamente hacia el este, al desierto de Judea, que se estudia más adelante en esta ruta.',
        ir('Recorrer el templo de Herodes en 3D', '../../templo-herodes/')
      ],
      pensar: 'Dios hizo todo para su viña y esperaba fruto (Is 5:4). Jesús retoma esta imagen en Juan 15:1-8. ¿Qué fruto busca hoy el Señor en tu vida?'
    },
    {
      id: 'samaria', n: 'Samaria y la serranía de Efraín', ref: 'Génesis 12:6-7; Josué 8:30-35; 1 Samuel 1:3; 1 Reyes 16:24; Juan 4:4-26',
      visual: [
        region(['r-efrain'], V.centro, ['siquem', 'betel', 'silo', 'samaria', 'hai']),
        img('pozo-jacob.webp', 'Jesús, de espaldas, sentado junto a un pozo de piedra a mediodía, conversando con una mujer samaritana que sostiene un cántaro; detrás se levanta el monte Gerizim', 'Junto al pozo de Jacob, al pie del monte Gerizim (Jn 4).')
      ],
      texto: [
        'Al norte de Jerusalén, los montes se vuelven más abiertos y fértiles. Esta es la serranía de Efraín, el territorio de las tribus de Efraín y Manasés, los hijos de José. Sus valles anchos permiten cultivar trigo, y sus colinas, olivos. Por la cresta de los montes corría el camino principal de norte a sur, y en él se encontraban algunos de los lugares más importantes del Antiguo Testamento.',
        { h: 'Siquem, Betel y Silo' },
        'Siquem fue la primera parada de Abraham en Canaán. Allí Dios le dijo: «A tu descendencia daré esta tierra», y Abraham edificó un altar (Gn 12:6-7). La ciudad está en el paso entre dos montes, el Ebal y el Gerizim. Josué reunió allí a todo Israel para leer la ley: la mitad del pueblo frente a un monte y la otra mitad frente al otro, para escuchar las bendiciones y las maldiciones (Jos 8:33-35). Al final de su vida, Josué renovó el pacto en Siquem: «yo y mi casa serviremos a Jehová» (Jos 24:15).',
        'Betel, «casa de Dios», es el lugar donde Jacob vio la escalera que llegaba al cielo (Gn 28:10-19). Silo fue durante siglos el lugar del tabernáculo, donde Ana oró por un hijo y Samuel creció sirviendo a Dios (1 S 1–3).',
        { h: 'Samaria, la capital del norte' },
        'Cuando el reino se dividió, la serranía de Efraín fue el corazón del reino de Israel. El rey Omri compró un monte y edificó en él la ciudad de Samaria (1 R 16:24), que fue la capital hasta su caída ante Asiria en 722 a.C. Los asirios trajeron otros pueblos a la región, que se mezclaron con los israelitas que quedaron (2 R 17:24-41). De ahí salieron los samaritanos, que en tiempos de Jesús adoraban en el monte Gerizim y no se trataban con los judíos.',
        { h: 'Le era necesario pasar por Samaria' },
        'Muchos judíos de Galilea evitaban Samaria y bajaban por el valle del Jordán para ir a Jerusalén. Pero de Jesús dice Juan: «Y le era necesario pasar por Samaria» (Jn 4:4). Junto al pozo de Jacob, al pie del Gerizim, habló con una mujer samaritana que le dijo: «Nuestros padres adoraron en este monte, y vosotros decís que en Jerusalén es el lugar donde se debe adorar» (Jn 4:20). Jesús respondió que llegaba la hora en que los verdaderos adoradores adorarían al Padre en espíritu y en verdad (Jn 4:23). Después de Pentecostés, Felipe predicó en Samaria y muchos creyeron y recibieron el Espíritu Santo (Hch 8:5-17).',
        ir('Ver la armonía de los evangelios', '../../evangelios/')
      ],
      pensar: 'Jesús no evitó Samaria; fue a buscar a quien otros evitaban. ¿Quién es la «samaritana» que Dios pone en tu camino esta semana?'
    },
    {
      id: 'carmelo', n: 'El Carmelo y el valle de Jezreel', ref: '1 Reyes 18:19-46; Jueces 4–7; 1 Samuel 31:1-8; Apocalipsis 16:16',
      visual: [
        region(['r-carmelo', 'r-jezreel'], V.norte, ['carmelo', 'meguido', 'jezreel', 'sunem', 'tabor', 'gilboa', 'bet-sean', 'nazaret']),
        img('carmelo.webp', 'Vista desde la cumbre del monte Carmelo sobre el ancho valle de Jezreel con campos verdes y amarillos; a lo lejos, sobre el mar, sube una pequeña nube oscura en un cielo despejado y seco', '«Una pequeña nube como la palma de la mano de un hombre, que sube del mar» (1 R 18:44).')
      ],
      texto: [
        'La serranía central se interrumpe al norte de Samaria por una gran llanura en forma de triángulo: el valle de Jezreel, también llamado Esdrelón. Es la tierra más fértil del país y el único paso fácil entre la costa y el valle del Jordán. Por eso es también el mayor campo de batalla de la historia bíblica. En su borde occidental se levanta el monte Carmelo, una cadena boscosa de unos 25 kilómetros que entra en el mar como una proa.',
        { h: 'Elías en el Carmelo' },
        'El Carmelo, verde todo el año, era un lugar sagrado para los adoradores de Baal, el dios cananeo de la lluvia y la tormenta. Por eso Elías desafió allí a los profetas de Baal después de tres años de sequía (1 R 18:19-40). La prueba era quién enviaba fuego del cielo. Cuando el fuego de Jehová consumió el sacrificio, el pueblo exclamó: «¡Jehová es el Dios, Jehová es el Dios!» (1 R 18:39). Después Elías oró siete veces, hasta que su criado vio «una pequeña nube como la palma de la mano de un hombre, que sube del mar» (1 R 18:44). Elías corrió delante del carro de Acab hasta Jezreel, a unos 25 kilómetros, y llegó la lluvia.',
        { h: 'Un valle de batallas' },
        'En el valle de Jezreel, Débora y Barac vencieron a Sísara cuando el torrente Cisón se desbordó: «Los barrió el torrente de Cisón, el antiguo torrente, el torrente de Cisón» (Jue 5:21). Al pie del monte Moré, Gedeón venció a los madianitas con trescientos hombres (Jue 7). En el monte Gilboa, al borde del valle, murieron Saúl y Jonatán (1 S 31). En Meguido, que custodiaba el paso hacia la costa, el rey Josías murió enfrentando al faraón Necao (2 R 23:29). En Jezreel, Acab tenía su palacio y codició la viña de Nabot (1 R 21).',
        { h: 'Armagedón' },
        'El nombre «Armagedón» (Ap 16:16) significa probablemente «monte de Meguido». Juan ve allí reunidos a los reyes de la tierra para la batalla del gran día de Dios. Así como el valle de Jezreel fue el lugar de tantas batallas decisivas, la profecía lo presenta como el escenario donde las naciones se reunirán contra Dios al final, antes de la venida de Cristo en gloria (Ap 19:11-21).',
        'En medio de estas batallas, el valle también tiene escenas de paz: desde Nazaret, en la colina del norte, Jesús creció mirando esta llanura, y en la aldea de Naín, al pie del monte Moré, resucitó al hijo de una viuda (Lc 7:11-15).',
        ir('Estudiar Los últimos tiempos', '../../escatologia/')
      ],
      pensar: 'Elías oró siete veces antes de ver la nube pequeña. ¿Qué te enseña su perseverancia en la oración (Stg 5:17-18)?'
    },
    {
      id: 'galilea', n: 'Galilea y su mar', ref: 'Isaías 9:1-2; Mateo 4:12-25; Lucas 5:1-11; Juan 1:46',
      visual: [
        region(['r-galilea-baja', 'r-galilea-alta'], V.norte, ['nazaret', 'cana', 'capernaum', 'magdala', 'betsaida', 'tiberias', 'hazor', 'tabor', 'cesarea-filipo']),
        img('galilea.webp', 'Una barca de pesca de madera del siglo I en el mar de Galilea al amanecer, con pescadores anónimos recogiendo una red; detrás, las colinas verdes de la orilla y la niebla sobre el agua', 'El mar de Galilea al amanecer.')
      ],
      texto: [
        'Al norte del valle de Jezreel se extiende Galilea, la región más verde y lluviosa de la tierra de Israel. Tiene dos partes: la Baja Galilea, con colinas suaves y valles anchos, y la Alta Galilea, más montañosa, con el monte Merón de 1.208 metros. Al este, Galilea baja hacia un lago de agua dulce de unos 21 kilómetros de largo y 12 de ancho: el mar de Galilea, a unos 210 metros bajo el nivel del mar. En la Biblia tiene varios nombres: mar de Cineret (Nm 34:11), lago de Genesaret (Lc 5:1) y mar de Tiberias (Jn 21:1).',
        { h: 'Galilea de los gentiles' },
        'Galilea estaba lejos de Jerusalén y abierta a los caminos internacionales. Fue la primera región de Israel que cayó ante Asiria, en 732 a.C. (2 R 15:29), y por eso Isaías la llamó «Galilea de los gentiles». Pero a esa tierra humillada le prometió una luz: «El pueblo que andaba en tinieblas vio gran luz» (Is 9:2). En tiempos de Jesús, Galilea tenía muchos judíos, pero también ciudades griegas cercanas, y los de Jerusalén la miraban con desconfianza: «¿De Nazaret puede salir algo de bueno?» (Jn 1:46).',
        { h: 'El escenario del ministerio de Jesús' },
        'Jesús creció en Nazaret, una aldea pequeña en las colinas que miran al valle de Jezreel. Al comenzar su ministerio se trasladó a Capernaum, junto al lago, y Mateo ve en ello el cumplimiento de la profecía de Isaías (Mt 4:13-16). La mayor parte de su enseñanza y sus milagros ocurrió en un círculo de pocos kilómetros alrededor del lago: Capernaum, Betsaida, Corazín, Magdala y Caná. Llamó a pescadores del lago (Lc 5:1-11), calmó una tempestad (Mr 4:35-41), multiplicó los panes (Jn 6:1-14) y caminó sobre el agua (Mt 14:22-33).',
        'El lago está rodeado de montes y recibe vientos fríos que bajan de golpe desde las alturas, sobre todo por las tardes. Por eso se levantan tempestades repentinas, como la que asustó a los discípulos, que eran pescadores experimentados.',
        { h: 'Una tierra que da fruto' },
        'Josefo, historiador judío del siglo I, describe la orilla del lago como una tierra tan fértil que daba frutos de distintos climas a la vez. Había industria de pescado salado en Magdala, cuyo nombre griego, Tariquea, viene de la palabra griega para el pescado en salazón. Cerca de este lago llamó Jesús a sus primeros discípulos a ser pescadores de hombres (Mr 1:17), y aquí, después de resucitar, restauró a Pedro (Jn 21).',
        ir('Recorrer los pasajes en la armonía de los evangelios', '../../evangelios/')
      ],
      pensar: 'Jesús comenzó su ministerio en la región despreciada, no en el centro religioso. ¿Qué te dice eso sobre los lugares y las personas que Dios escoge para mostrar su luz?'
    },
    {
      id: 'jordan', n: 'El valle del Jordán y el mar Muerto', ref: 'Génesis 13:10; Josué 3:14-17; 2 Reyes 5:14; Mateo 3:13-17; Ezequiel 47:8-10',
      visual: [
        region(['r-jordan'], V.rift, ['dan', 'hula', 'bet-sean', 'jerico', 'gilgal', 'betabara', 'qumran', 'en-gadi', 'masada', 'ezion-geber']),
        esq('esquema-jordan.svg', 'Perfil del valle del Jordán de norte a sur: las fuentes en Dan al pie del Hermón, el lago Hula, el mar de Galilea a unos 210 m bajo el nivel del mar, el río Jordán que serpentea hasta el mar Muerto a unos 435 m bajo el nivel del mar, y el Arabá que sube a unos 200 m y baja al golfo de Áqaba', 'El valle del Jordán y el Arabá, de norte a sur.', 'Perfil'),
        img('jordan.webp', 'El río Jordán, de agua barrosa y verde, serpenteando entre una espesura de tamariscos, cañas y sauces, con las colinas áridas del valle al fondo bajo el sol de la mañana', 'La «espesura del Jordán» (Jer 12:5).')
      ],
      texto: [
        'El Jordán es el río de la Biblia. Nace al pie del monte Hermón, en tres fuentes principales (una de ellas en Dan y otra en Cesarea de Filipo), pasa por el lago Hula y entra en el mar de Galilea. Desde ahí baja hacia el sur, serpenteando por el fondo de la fosa, hasta el mar Muerto. En línea recta son unos 105 kilómetros, pero el río da tantas vueltas que su curso es mucho más largo. Su nombre significa probablemente «el que desciende», y con razón: en todo su recorrido baja casi 700 metros.',
        { h: 'Un río pequeño en un valle profundo' },
        'Quien espera un gran río se sorprende: en muchos lugares el Jordán tiene apenas unos metros de ancho. Lo importante no es su tamaño sino su posición. Corre por el fondo de la fosa del Jordán, entre dos paredes de montes, y las orillas tienen una espesura de tamariscos y cañas donde vivían leones (Jer 49:19). Jeremías usa esa imagen para hablar de una prueba difícil: «¿cómo harás en la espesura del Jordán?» (Jer 12:5). En primavera, con las lluvias y el deshielo del Hermón, el río se desbordaba: «el Jordán suele desbordarse por todas sus orillas todo el tiempo de la siega» (Jos 3:15). Justo en esa época Dios detuvo sus aguas para que Israel entrara a la tierra.',
        { h: 'Escenas en el Jordán' },
        'Lot miró «toda la llanura del Jordán, que toda ella era de riego, como el huerto de Jehová» (Gn 13:10), y escogió esa tierra rica junto a Sodoma. Elías y Eliseo cruzaron el río en seco (2 R 2:8, 14). Naamán el sirio se sumergió siete veces y quedó limpio (2 R 5:14). Juan el Bautista bautizaba en el Jordán, y allí fue bautizado Jesús, cuando el Espíritu descendió sobre Él y el Padre habló desde el cielo (Mt 3:13-17).',
        { h: 'El mar Salado' },
        'El Jordán termina en el mar Muerto, que la Biblia llama mar Salado (Gn 14:3) o mar del Arabá. No tiene salida: el agua solo se evapora, y por eso su salinidad es casi diez veces la del océano. No hay peces ni plantas. Junto a sus orillas estaban En-gadi, Qumrán, donde se hallaron los rollos del mar Muerto, y la fortaleza de Masada.',
        'Ezequiel vio en visión un río que salía del templo y bajaba hasta este mar, y sus aguas quedaban sanas: «y vivirá todo lo que entrare en este río» (Ez 47:9). Junto al mar muerto habría pescadores tendiendo redes (Ez 47:10). Es una imagen poderosa de la vida que Dios puede traer donde todo parece muerto.',
        ir('Leer sobre los manuscritos del mar Muerto', '../../de-la-biblia-a-nosotros/')
      ],
      pensar: 'El río de Ezequiel trae vida al mar donde nada vive. ¿Qué parte de tu vida necesita el río de Dios, y qué te enseña Juan 7:37-39 sobre ese río?'
    },
    {
      id: 'desierto', n: 'El desierto de Judea y el Neguev', ref: '1 Samuel 23:29–24:22; Mateo 3:1; 4:1-11; Génesis 21:31-33; Salmo 126:4',
      visual: [
        region(['r-desierto', 'r-neguev'], V.sur, ['jerusalen', 'belen', 'hebron', 'en-gadi', 'qumran', 'masada', 'arad', 'beerseba', 'cades-barnea']),
        img('engadi.webp', 'Una cascada que cae por una garganta de roca en el oasis de En-gadi, rodeada de vegetación verde en medio del desierto pardo; dos íbices junto al agua y, al fondo, el mar Muerto azul', 'En-gadi: agua en medio del desierto de Judea.')
      ],
      texto: [
        'Al este de los montes de Judá, el terreno cae en pocos kilómetros desde unos 800 metros hasta el mar Muerto. Ese declive es el desierto de Judea. No es un desierto de dunas, sino una tierra de colinas peladas, barrancos profundos y acantilados, porque los montes de Judá le quitan la lluvia: las nubes que vienen del Mediterráneo descargan su agua en las alturas y pasan secas hacia el este. Jerusalén recibe unos 550 milímetros de lluvia al año; Jericó, a 22 kilómetros, menos de 200.',
        { h: 'Un lugar de refugio y de prueba' },
        'El desierto de Judea fue refugio de perseguidos. David huyó de Saúl a sus cuevas y fortalezas, y en las de En-gadi perdonó la vida a Saúl (1 S 24). En-gadi es un oasis con fuentes y cascadas al pie de los acantilados, frente al mar Muerto. El título del Salmo 63 lo sitúa «en el desierto de Judá»: «Mi alma tiene sed de ti, mi carne te anhela, en tierra seca y árida donde no hay aguas» (Sal 63:1).',
        'También fue lugar de preparación. Juan el Bautista vino «predicando en el desierto de Judea» (Mt 3:1), y Jesús fue llevado por el Espíritu al desierto para ser tentado durante cuarenta días (Mt 4:1-11). En Qumrán, junto al mar Muerto, un grupo judío vivió apartado y copió los rollos que hoy son los manuscritos bíblicos más antiguos. Siglos después, monjes cristianos construyeron monasterios en estos barrancos.',
        { h: 'El Neguev' },
        'Al sur de Hebrón comienza el Neguev, que en hebreo significa «seco» y también «el sur». En la Biblia, el Neguev es sobre todo la región de Beerseba y Arad, una estepa con lluvias escasas donde se podía pastorear y, en años buenos, sembrar cebada. Abraham, Isaac y Jacob vivieron largos períodos aquí. En Beerseba, Abraham cavó un pozo, plantó un tamarisco e invocó allí el nombre de Jehová Dios eterno (Gn 21:33). Más al sur, el desierto se vuelve más duro, hasta Cades-barnea, donde Israel acampó durante los años del desierto (Nm 20:1).',
        { h: 'Los arroyos del Neguev' },
        'En el Neguev, los cauces pasan casi todo el año secos. Pero cuando llueve en los montes, el agua baja de golpe y los llena en minutos. Los que volvían del exilio usaron esa imagen para pedir a Dios una restauración repentina: «Haz volver nuestra cautividad, oh Jehová, como los arroyos del Neguev» (Sal 126:4). Y los profetas anunciaron un tiempo en que el desierto florecería: «Se alegrarán el desierto y la soledad; el yermo se gozará y florecerá como la rosa» (Is 35:1).',
        { ejercicio: {
          pregunta: '¿Por qué el desierto de Judea es tan seco, si está a pocos kilómetros de Jerusalén?',
          opciones: [
            { t: 'Porque está bajo el nivel del mar y el calor evapora toda la lluvia.', ok: false, por_que: 'Solo su extremo oriental está bajo el nivel del mar. La causa principal es otra: la lluvia casi no llega.' },
            { t: 'Porque los montes de Judá retienen la lluvia de las nubes que vienen del Mediterráneo.', ok: true, por_que: 'Las nubes descargan en las alturas del oeste y llegan secas al lado oriental: se llama «sombra de lluvia».' },
            { t: 'Porque los vientos del norte se llevan las nubes hacia Siria.', ok: false, por_que: 'Las lluvias vienen del oeste, del mar. El viento del norte trae tiempo seco y frío (Pr 25:23), pero no explica el desierto.' }
          ],
          explicacion: 'Las nubes del Mediterráneo suben por los montes de Judá, se enfrían y dejan allí su lluvia. Al bajar hacia el este, el aire queda seco. Por eso Jerusalén recibe unos 550 mm al año y Jericó menos de 200.'
        } }
      ],
      pensar: 'David, Juan el Bautista y Jesús pasaron por el desierto antes de cumplir su misión. ¿Qué te enseña el desierto sobre la manera en que Dios prepara a sus siervos (Os 2:14)?'
    },
    {
      id: 'transjordania', n: 'Al otro lado del Jordán', ref: 'Números 32:1-33; Deuteronomio 34:1-4; Amós 4:1; Jeremías 8:22; Marcos 5:1-20',
      visual: [
        pasos([
          { t: 'En el Antiguo Testamento: Basán, Galaad, Amón, Moab y Edom.', estado: { view: V.trans, capas: ['r-basan', 'r-galaad', 'r-amon', 'r-moab', 'r-edom'], lugares: ['edrei', 'ramot-galaad', 'jabes', 'rabat-amon', 'hesbon', 'monte-nebo', 'dibon', 'kir-hareset', 'bosra', 'petra'] } },
          { t: 'En el Nuevo Testamento: la tetrarquía de Felipe, la Decápolis y Perea.', estado: { view: V.jesus, capas: ['nt-felipe', 'nt-decapolis', 'nt-perea'], lugares: ['cesarea-filipo', 'gadara', 'betabara', 'maqueronte'] } }
        ]),
        img('nebo.webp', 'Moisés, anciano, de pie en la cumbre del monte Nebo, apoyado en su cayado, mirando hacia el valle del Jordán y la tierra prometida en la distancia brumosa', 'Moisés mira la tierra desde el monte Nebo (Dt 34:1-4).')
      ],
      texto: [
        'Al este del Jordán se levanta la meseta de Transjordania, más alta y más lluviosa en su borde occidental que el valle, y que hacia el este se convierte en el desierto de Arabia. La Biblia la llama «al otro lado del Jordán». La cruzan varios ríos de este a oeste que la dividen en regiones: el Yarmuc, el Jaboc, el Arnón y el Zered.',
        { h: 'Las regiones' },
        'Al norte, Basán era una meseta volcánica de tierras fértiles y pastos famosos. Amós llama «vacas de Basán» a las mujeres ricas de Samaria que oprimían a los pobres (Am 4:1). Más al sur, Galaad tenía bosques y era famosa por su bálsamo medicinal: «¿No hay bálsamo en Galaad? ¿No hay allí médico?» (Jer 8:22). A Galaad huyó Jacob de Labán (Gn 31:21), y en el Jaboc luchó con el ángel (Gn 32:22-30). Amón, con su capital Rabá (la actual Amán), estaba al borde del desierto. Moab ocupaba la meseta al este del mar Muerto, una tierra buena para trigo y ovejas: el rey Mesa de Moab pagaba a Israel un tributo de cien mil corderos (2 R 3:4). Y al sur, Edom ocupaba los montes rojizos de Seir.',
        { h: 'Rubén, Gad y Manasés' },
        'Cuando Israel venció a los reyes Sehón y Og, las tribus de Rubén y Gad, que tenían mucho ganado, pidieron quedarse al este del Jordán, junto con la mitad de Manasés (Nm 32). Moisés aceptó con la condición de que cruzaran a pelear con sus hermanos. Por estar separadas por el valle, estas tribus fueron las primeras en ser llevadas cautivas por Asiria (1 Cr 5:26).',
        { h: 'Moisés en el Nebo' },
        'Desde la cumbre del monte Nebo, frente a Jericó, Dios mostró a Moisés toda la tierra, desde Galaad hasta Dan y hasta el mar occidental, y le dijo: «Esta es la tierra de que juré a Abraham, a Isaac y a Jacob, diciendo: A tu descendencia la daré. Te he permitido verla con tus ojos, mas no pasarás allá» (Dt 34:4).',
        { h: 'En tiempos de Jesús' },
        'En el Nuevo Testamento, la Transjordania se dividía en otras regiones. Al norte, la tetrarquía de Felipe, con Cesarea de Filipo, donde Pedro confesó que Jesús era el Cristo (Mt 16:13-16). En el centro, la Decápolis, diez ciudades de cultura griega, donde Jesús liberó al endemoniado gadareno, que luego «comenzó a publicar en Decápolis cuán grandes cosas había hecho Jesús con él» (Mr 5:20). Y al sur, Perea, por donde pasaban los peregrinos de Galilea, y donde Jesús enseñó en sus últimos meses (Mr 10:1). En la fortaleza de Maqueronte, en Perea, Herodes Antipas mandó decapitar a Juan el Bautista, según Josefo.'
      ],
      pensar: 'Moisés vio la tierra pero no entró en ella; siglos después estuvo en ella con Jesús en el monte de la transfiguración (Mt 17:3). ¿Qué te enseña esto sobre la fidelidad de Dios más allá de nuestros errores?'
    }
  ];
