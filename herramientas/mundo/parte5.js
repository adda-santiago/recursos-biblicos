/* El mundo judío en tiempos de Jesús · ruta V. La vida diaria (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA V. La vida diaria ==================
  const vida = [
    {
      id: 'casa', n: 'La familia y la casa', ref: 'Marcos 2:1-4; Lucas 11:5-7; Mateo 5:15; Lucas 15:8; Mateo 24:17; Hechos 10:9', fecha: [-6, 70],
      visual: [
        img('mj-casa-galilea.webp', 'El patio de piedra basáltica de una casa de Capernaúm en el siglo I, rodeado de habitaciones bajas con techos de ramas, barro y paja; una escalera de piedra sube a la azotea; una mujer hornea pan en un horno de barro, un anciano repara redes, niños juegan y una cabra está atada en un rincón', 'Varias familias emparentadas compartían el patio de una casa de Capernaúm. Recreación con personas anónimas.'),
        tabla({
          titulo: 'Las partes de una casa de aldea',
          cab: ['Parte', 'Para qué servía', 'En los evangelios'],
          filas: [
            ['El patio', 'Cocinar, trabajar, comer y recibir visitas; varias familias lo compartían', 'Pedro se calienta en el patio del sumo sacerdote (Marcos 14:66)'],
            ['Las habitaciones', 'Pequeñas y oscuras; servían sobre todo para dormir y guardar', '«Mis niños están conmigo en cama» (Lucas 11:7)'],
            ['La azotea', 'De ramas y barro sobre vigas; para secar, dormir en verano y orar', 'Abren el techo para bajar al paralítico (Marcos 2:4)'],
            ['La lámpara', 'De barro, con aceite de oliva; se ponía en un nicho o en un candelero', '«Alumbra a todos los que están en casa» (Mateo 5:15)'],
            ['El horno y el molino', 'Cada día se molía el grano y se horneaba el pan', '«Dos mujeres estarán moliendo» (Mateo 24:41)']
          ]
        }),
        cita('Marcos 2:1-5', '@@mr/2/1-5')
      ],
      texto: [
        'La familia judía del siglo I no era solo el padre, la madre y los hijos. Era una familia extendida: los abuelos, los hijos casados con sus esposas y niños, y a veces otros parientes, vivían juntos alrededor de un mismo patio, bajo la autoridad del padre de familia, al que los evangelios llaman «padre de familia» o «dueño de casa».',
        { h: 'Una casa de aldea' },
        'En Capernaúm se han excavado manzanas enteras de casas del tiempo de Jesús, construidas con piedras negras de basalto, sin cemento. Cada casa tenía varias habitaciones pequeñas alrededor de un patio, donde transcurría la mayor parte de la vida: allí se cocinaba en un horno de barro, se molía el grano, se trabajaba, se comía y se recibía a los vecinos. Las habitaciones eran oscuras, con pequeñas ventanas, y servían sobre todo para dormir y guardar las provisiones. En la noche se cerraba la puerta y toda la familia dormía junta, como dice el vecino de la parábola: «la puerta ya está cerrada, y mis niños están conmigo en cama» (Lc 11:7).',
        'El techo era plano, hecho de vigas de madera cubiertas de ramas, paja y barro apisonado. Por eso cuatro hombres pudieron abrir el techo de la casa donde estaba Jesús y bajar a un paralítico en su camilla (Mr 2:4). La azotea se usaba para secar los frutos, para dormir en las noches de calor y para orar, como hizo Pedro en Jope (Hch 10:9).',
        { h: 'Luz, pan y trabajo' },
        'La luz venía de pequeñas lámparas de barro con aceite de oliva, que se ponían en un nicho de la pared o sobre un candelero. Para buscar una moneda perdida había que encender la lámpara y barrer con cuidado el suelo de tierra o de piedra (Lc 15:8). Cada día las mujeres molían el grano en un molino de mano y horneaban el pan; por eso la petición «El pan nuestro de cada día, dánoslo hoy» (Mt 6:11) se entendía literalmente.',
        { h: 'Casas en la ciudad' },
        'En Jerusalén, las familias ricas vivían en casas grandes de piedra labrada, con varios pisos, mosaicos, frescos y baños rituales propios, como las que se excavaron en la parte alta de la ciudad. El «aposento alto» donde Jesús comió la Pascua con sus discípulos (Mr 14:15) era una sala grande en el piso superior de una casa así. También la iglesia primitiva se reunió en casas: en la de María, la madre de Juan Marcos, había muchos reunidos orando cuando Pedro salió de la cárcel (Hch 12:12).'
      ],
      pensar: 'Jesús enseñó, sanó y perdonó pecados en una casa sencilla de Capernaúm, y la iglesia primitiva se reunía en casas. ¿Cómo puede tu casa ser un lugar donde otros encuentren a Jesús?'
    },
    {
      id: 'boda', n: 'El compromiso y la boda', ref: 'Mateo 1:18-25; Lucas 1:26-27; Juan 2:1-11; Mateo 25:1-13; Mateo 22:1-14; Juan 3:29; Apocalipsis 19:7-9', fecha: [-6, 70],
      visual: [
        img('mj-boda-procesion.webp', 'De noche, en una calle de tierra de una aldea de Galilea, una procesión de boda avanza a la luz de lámparas de aceite: un joven novio con manto bordado y corona de flores camina rodeado de sus amigos que cantan y tocan panderos, mientras un grupo de jóvenes muchachas con lámparas encendidas sale a recibirlo desde la puerta de una casa', '«¡Aquí viene el esposo; salid a recibirle!» (Mateo 25:6). Recreación con personas anónimas.'),
        tabla({
          titulo: 'Del compromiso a la boda',
          cab: ['Etapa', 'Qué ocurría', 'En la Biblia'],
          filas: [
            ['El acuerdo', 'Las familias acordaban el matrimonio y la dote que pagaba el novio', 'Génesis 24; 34:12'],
            ['El desposorio', 'Compromiso formal ante testigos; la pareja ya era marido y mujer ante la ley, pero no vivían juntos', 'María «desposada» con José (Mateo 1:18; Lucas 1:27)'],
            ['La espera', 'Muchas veces un año; el novio preparaba la casa', '«Voy, pues, a preparar lugar para vosotros» (Juan 14:2)'],
            ['La procesión', 'De noche, el novio iba con sus amigos a buscar a la novia y la llevaba a su casa', 'Las diez vírgenes (Mateo 25:1-13)'],
            ['El banquete', 'Fiesta de varios días, hasta una semana, con comida y vino', 'Las bodas de Caná (Juan 2:1-11)']
          ]
        }),
        cita('Mateo 25:1-6', '@@mt/25/1-6')
      ],
      texto: [
        'Mateo cuenta que María estaba «desposada» con José cuando se halló que había concebido del Espíritu Santo, y que José, «como era justo, y no quería infamarla, quiso dejarla secretamente» (Mt 1:18-19). Para entender esa escena hay que conocer cómo se casaban los judíos en tiempos de Jesús.',
        { h: 'El desposorio' },
        'Los matrimonios los arreglaban las familias. Las muchachas solían comprometerse muy jóvenes, poco después de los doce años, y los varones algo mayores. El compromiso, o desposorio, se hacía ante testigos y era un vínculo legal: desde ese momento la pareja ya era considerada marido y mujer, aunque todavía no vivían juntos. Por eso Mateo llama a José «su marido» y dice que, para terminar el compromiso, tenía que «dejarla», es decir, darle carta de divorcio. José pensaba hacerlo en privado para no exponer a María a la vergüenza o a un castigo, hasta que el ángel le habló en sueños.',
        { h: 'La espera y la procesión' },
        'Entre el desposorio y la boda solía pasar un tiempo, a veces un año, mientras el novio preparaba la casa, a menudo una habitación nueva junto a la de su padre. Jesús usó esa imagen para hablar de su regreso: «voy, pues, a preparar lugar para vosotros. Y si me fuere y os preparare lugar, vendré otra vez» (Jn 14:2-3).',
        'El día de la boda, al caer la tarde, el novio salía con sus amigos a buscar a la novia a la casa de su padre, y la llevaba en procesión, con lámparas, música y cantos, a su propia casa. Las jóvenes amigas de la novia salían a recibirlo con lámparas. En la parábola de las diez vírgenes, el novio tarda, todas se duermen, y a medianoche se oye el grito: «¡Aquí viene el esposo; salid a recibirle!» (Mt 25:6). Solo las que tenían aceite entraron a la fiesta.',
        { h: 'El banquete' },
        'La boda se celebraba con un banquete que podía durar hasta siete días. Que faltara el vino era una vergüenza para la familia del novio. En Caná, Jesús hizo su primera señal para evitarla, y el encargado del banquete se sorprendió de que el mejor vino se sirviera al final (Jn 2:10).',
        { h: 'La boda del Cordero' },
        'Toda la Biblia usa la imagen del matrimonio para hablar de Dios y su pueblo. Juan el Bautista se llamó a sí mismo «el amigo del esposo» (Jn 3:29), y Jesús se presentó como el Esposo. La historia termina con una boda: «Bienaventurados los que son llamados a la cena de las bodas del Cordero» (Ap 19:9).',
        ir('Ver Los últimos tiempos: el arrebatamiento de la iglesia', R.escatologia + '#eventos/2')
      ],
      pensar: 'Las vírgenes prudentes estaban preparadas aunque el esposo tardó. Si Jesús viniera hoy, ¿te encontraría con la lámpara encendida y con aceite? ¿Qué significa para ti estar preparado?'
    },
    {
      id: 'ninos', n: 'Los niños y la enseñanza de la ley', ref: 'Deuteronomio 6:6-7; Lucas 2:21-24, 40-52; Marcos 10:13-16; 2 Timoteo 3:15; Mateo 18:2-6', fecha: [-6, 70],
      visual: [
        img('mj-ninos-bendicion.webp', 'En el patio de una casa de Judea, madres y padres anónimos traen a sus niños pequeños a Jesús, que, visto de espaldas, está sentado y tiene en brazos a un niño mientras pone la mano sobre la cabeza de otro; Pedro y Juan, a un lado, se miran sorprendidos', '«Dejad a los niños venir a mí, y no se lo impidáis» (Marcos 10:14). Recreación.'),
        tabla({
          titulo: 'La niñez de un varón judío',
          cab: ['Edad', 'Lo que ocurría', 'En la vida de Jesús'],
          filas: [
            ['8 días', 'Circuncisión y nombre', 'Lucas 2:21'],
            ['40 días', 'Purificación de la madre y presentación del primogénito en el templo', 'Lucas 2:22-24'],
            ['Primeros años', 'La madre enseña las oraciones y las historias de Israel', 'Lucas 2:40'],
            ['Desde los 5 o 6 años', 'El padre enseña la ley y un oficio; en algunas aldeas, la sinagoga enseña a leer', '«Hijo del carpintero» (Mateo 13:55)'],
            ['12 a 13 años', 'Empieza a cumplir la ley como un adulto', 'En el templo con los doctores (Lucas 2:42-47)']
          ],
          nota: 'La ceremonia del bar mitzvá, con ese nombre, se formó varios siglos después.'
        }),
        cita('Marcos 10:13-16', '@@mr/10/13-16')
      ],
      texto: [
        'Para los judíos, los hijos eran una bendición de Dios, y enseñarles la ley era un mandamiento: «estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos» (Dt 6:6-7). Josefo dice con orgullo que los judíos se preocupaban más que nadie por educar a sus hijos en las leyes de sus padres.',
        { h: 'De la casa a la sinagoga' },
        'Los primeros maestros eran los padres. La madre enseñaba a los niños pequeños las oraciones, los salmos y las historias de Israel; Timoteo aprendió así las Escrituras «desde la niñez», con su abuela y su madre (2 Ti 3:15). El padre enseñaba a su hijo la ley y le transmitía su oficio: por eso a Jesús lo llamaban «el hijo del carpintero» y también «el carpintero» (Mr 6:3).',
        'Fuentes judías posteriores hablan de escuelas junto a las sinagogas, donde los niños aprendían a leer la Escritura desde los cinco o seis años, y de un sumo sacerdote del siglo I que habría ordenado tener maestros en cada ciudad. No se sabe con certeza cuán extendidas estaban en las aldeas de Galilea. Lo que muestra el evangelio es que Jesús sabía leer el rollo de Isaías en la sinagoga (Lc 4:16-17) y que conocía la Escritura de memoria.',
        { h: 'Jesús a los doce años' },
        'Lucas cuenta que, a los doce años, Jesús se quedó en el templo «sentado en medio de los doctores de la ley, oyéndoles y preguntándoles», y que todos se maravillaban «de su inteligencia y de sus respuestas» (Lc 2:46-47). Era la edad en que un muchacho comenzaba a cumplir la ley como adulto. Después volvió a Nazaret, «y estaba sujeto a ellos», y crecía «en sabiduría y en estatura, y en gracia para con Dios y los hombres» (Lc 2:51-52).',
        { h: '«Dejad a los niños venir a mí»' },
        'En el mundo antiguo los niños no tenían importancia social. Cuando unos padres trajeron a sus hijos para que Jesús los tocara, los discípulos los reprendieron, pensando que el Maestro tenía cosas más importantes que hacer. Jesús se indignó: «Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de Dios». Y tomándolos en brazos, los bendecía (Mr 10:14-16). En otra ocasión puso a un niño en medio de los discípulos como ejemplo de humildad, y advirtió con severidad contra quien hiciera tropezar a uno de esos pequeños (Mt 18:2-6).'
      ],
      pensar: 'Jesús se indignó cuando apartaron a los niños de Él. ¿Qué estás haciendo, en tu casa o en tu iglesia, para que los niños conozcan la Palabra de Dios y vengan a Jesús?'
    },
    {
      id: 'mujeres', n: 'Las mujeres en tiempos de Jesús', ref: 'Lucas 8:1-3; Lucas 10:38-42; Juan 4:27; Lucas 7:36-50; Marcos 15:40-41; Lucas 24:1-11; Hechos 1:14', fecha: [-6, 70],
      visual: [
        img('mj-marta-maria.webp', 'En la casa de Betania, al atardecer, María, una joven de unos veinte años con velo claro, está sentada en el suelo escuchando con atención a Jesús, que está sentado y se ve de espaldas, mientras su hermana Marta, de unos treinta años, con delantal y un cántaro, se acerca desde la cocina con gesto preocupado', '«María ha escogido la buena parte, la cual no le será quitada» (Lucas 10:42). Recreación.'),
        tabla({
          titulo: 'Mujeres en el ministerio de Jesús',
          cab: ['Mujer', 'Lo que hizo', 'Pasaje'],
          filas: [
            ['María Magdalena, Juana, Susana y otras', 'Seguían a Jesús y lo sostenían con sus bienes', 'Lucas 8:1-3'],
            ['María de Betania', 'Se sentó a sus pies como discípula', 'Lucas 10:39'],
            ['La samaritana', 'Anunció a Jesús a todo su pueblo', 'Juan 4:28-30, 39'],
            ['La mujer pecadora', 'Ungió sus pies con perfume y lágrimas', 'Lucas 7:36-50'],
            ['Las mujeres de Galilea', 'Estuvieron junto a la cruz cuando los discípulos huyeron', 'Marcos 15:40-41'],
            ['María Magdalena y las otras', 'Fueron las primeras testigos de la resurrección', 'Lucas 24:1-10; Juan 20:11-18']
          ]
        }),
        cita('Lucas 8:1-3', '@@lc/8/1-3')
      ],
      texto: [
        'En el mundo judío del siglo I, como en todo el mundo antiguo, la vida de la mujer giraba en torno a la casa. Pasaba de la autoridad de su padre a la de su esposo, se ocupaba del hogar y de los hijos, y en público tenía un lugar secundario. En el templo había un atrio de las mujeres, más allá del cual no podían pasar. Algunos maestros desaconsejaban hablar mucho con mujeres o enseñarles la ley, y el testimonio de una mujer tenía poco valor ante un tribunal.',
        'Al mismo tiempo, la ley de Moisés protegía a la viuda y al huérfano, el libro de los Proverbios alababa a la mujer virtuosa, y las mujeres judías iban a la sinagoga, participaban en las fiestas y oraban. Ana, la profetisa, servía de noche y de día en el templo (Lc 2:36-38).',
        { h: 'Discípulas de Jesús' },
        'Jesús se comportó de un modo que sorprendió a todos. Habló a solas con una mujer samaritana, y sus discípulos «se maravillaron de que hablaba con una mujer» (Jn 4:27). Permitió que María de Betania se sentara a sus pies, la postura del discípulo ante su maestro, y cuando Marta se quejó, le dijo que María había escogido «la buena parte, la cual no le será quitada» (Lc 10:42). Recibió con gratitud a una mujer pecadora que ungió sus pies, y la perdonó delante de un fariseo que la despreciaba (Lc 7:44-48).',
        'Lucas cuenta que un grupo de mujeres acompañaba a Jesús y a los doce en sus viajes, y que «le servían de sus bienes» (Lc 8:3). Entre ellas estaban María Magdalena, de la que Jesús había echado siete demonios, y Juana, la esposa de un alto funcionario de Herodes Antipas.',
        { h: 'Testigos de la cruz y de la resurrección' },
        'Cuando los discípulos huyeron, las mujeres de Galilea siguieron mirando la cruz desde lejos (Mr 15:40-41), vieron dónde ponían el cuerpo y volvieron al sepulcro el primer día de la semana. Ellas fueron las primeras testigos de la resurrección. Que los cuatro evangelios lo cuenten así, en una cultura que no valoraba el testimonio de una mujer, es una señal de su veracidad: nadie que inventara la historia habría elegido esas testigos. De hecho, a los apóstoles «les parecían locura las palabras de ellas» (Lc 24:11).',
        'En el aposento alto, antes de Pentecostés, las mujeres oraban junto con los apóstoles (Hch 1:14), y cuando vino el Espíritu se cumplió la profecía de Joel: «vuestros hijos y vuestras hijas profetizarán» (Hch 2:17).'
      ],
      pensar: 'Jesús recibió a las mujeres como discípulas y las eligió como primeras testigos de su resurrección. ¿Qué te enseña esto sobre el valor que Dios da a cada persona, y sobre el lugar de las mujeres en la obra de Dios?'
    },
    {
      id: 'trabajo', n: 'Campesinos, pescadores y artesanos', ref: 'Mateo 4:18-22; Lucas 5:1-11; Marcos 6:3; Mateo 13:3-8; Juan 10:11-13; Mateo 20:1-2; Hechos 18:3', fecha: [-6, 70],
      visual: [
        img('../tierra-de-israel/img/galilea.webp', 'Una barca de pesca de madera del siglo I en el mar de Galilea al amanecer, con pescadores anónimos recogiendo una red; detrás, las colinas verdes de la orilla y la niebla sobre el agua', 'Pescadores en el mar de Galilea al amanecer. Recreación.'),
        foto('foto-barca-galilea.jpg', 'Restos de madera oscura de una barca antigua, larga y ancha, sostenidos por una estructura de metal en un museo', 'La «barca de Galilea», una barca de pesca del siglo I hallada en 1986 en el barro de la orilla, cerca de Magdala. Mide unos 8 metros de largo; en ella cabían unas trece personas. Museo Yigal Allon, Ginosar.', 'CC BY-SA 4.0 · Warfieldian, vía Wikimedia Commons'),
        tabla({
          titulo: 'Oficios en los evangelios',
          cab: ['Oficio', 'Quiénes', 'Enseñanzas de Jesús'],
          filas: [
            ['Campesino', 'La mayoría del pueblo', 'El sembrador, la semilla de mostaza, el trigo y la cizaña'],
            ['Pescador', 'Pedro, Andrés, Jacobo y Juan', '«Os haré pescadores de hombres» (Mateo 4:19); la red (Mateo 13:47)'],
            ['Artesano', 'José y Jesús; Pablo, fabricante de tiendas', 'Edificar sobre la roca (Mateo 7:24); el yugo fácil (Mateo 11:30)'],
            ['Pastor', 'Los pastores de Belén', 'El buen pastor (Juan 10:11); la oveja perdida (Lucas 15:4)'],
            ['Jornalero', 'Los que no tenían tierra', 'Los obreros de la viña (Mateo 20:1-16)']
          ]
        }),
        cita('Lucas 5:4-11', '@@lc/5/4-11')
      ],
      texto: [
        'La gran mayoría de los judíos de Galilea y Judea vivía del campo. Las familias cultivaban trigo y cebada, viñas, olivos e higueras, y criaban ovejas y cabras. Dependían de la lluvia, de la cosecha y de que los impuestos y las deudas no les quitaran la tierra. Por eso tantas parábolas de Jesús hablan de sembradores, semillas, viñas, cosechas, graneros y pastores: eran el mundo de sus oyentes.',
        { h: 'Los pescadores del lago' },
        'Alrededor del mar de Galilea, la pesca era un negocio importante. El pescado se salaba en Magdala, cuyo nombre griego significaba «pescado salado», y se vendía en toda la región. Pedro y Andrés, Jacobo y Juan eran pescadores; Zebedeo, el padre de Jacobo y Juan, tenía jornaleros (Mr 1:20), y Pedro y sus socios tenían más de una barca (Lc 5:7). No eran mendigos, sino pequeños empresarios que trabajaban duro de noche.',
        'En 1986, durante una sequía, unos pescadores encontraron en el barro de la orilla, cerca de Magdala, una barca de madera del siglo I. Mide unos ocho metros de largo y dos y medio de ancho; en ella cabían unas trece personas. Es la clase de barca en la que Jesús cruzó el lago con sus discípulos.',
        { h: 'El carpintero de Nazaret' },
        'La gente de Nazaret llamaba a Jesús «el carpintero» (Mr 6:3). La palabra griega designa a un artesano que trabajaba con madera y a veces con piedra: hacía puertas, vigas, yugos, arados y muebles, y participaba en la construcción de casas. Jesús trabajó con sus manos durante la mayor parte de su vida antes de comenzar su ministerio, y así santificó el trabajo diario.',
        { h: 'El trabajo, un llamado' },
        'Los maestros judíos decían que un padre que no enseñaba un oficio a su hijo le enseñaba a robar, y muchos escribas tenían un oficio además de estudiar la ley. Pablo, educado a los pies de Gamaliel, fabricaba tiendas y trabajaba con sus manos para no ser una carga a las iglesias (Hch 18:3; 2 Ts 3:8). Cuando Jesús llamó a los pescadores, no despreció su oficio: lo usó como imagen de su nueva misión: «Desde ahora serás pescador de hombres» (Lc 5:10).'
      ],
      pensar: 'Jesús llamó a pescadores mientras estaban trabajando, y usó su oficio para describir su nueva misión. ¿Cómo puede Dios usar tu trabajo, tus habilidades y tu experiencia para servirle?'
    },
    {
      id: 'ricos-pobres', n: 'Ricos y pobres: deudas, jornaleros y terratenientes', ref: 'Mateo 20:1-16; Lucas 16:19-31; Mateo 18:23-35; Lucas 12:16-21; Marcos 12:1-9; Lucas 6:20-24; Santiago 5:1-4', fecha: [-6, 70],
      visual: [
        img('../medidas-biblicas/img/obreros-vina.webp', 'Al atardecer, junto a una viña de Judea, un mayordomo entrega un denario de plata a cada uno de los jornaleros cansados que hacen fila', '«Recibieron cada uno un denario» (Mateo 20:9). Recreación.'),
        tabla({
          titulo: 'Las parábolas y la economía de su tiempo',
          cab: ['Parábola', 'La realidad que refleja'],
          filas: [
            ['Los obreros de la viña (Mateo 20:1-16)', 'Jornaleros sin tierra que esperaban en la plaza que alguien los contratara por un denario al día'],
            ['Los labradores malvados (Marcos 12:1-9)', 'Grandes propietarios que vivían lejos y arrendaban sus tierras a campesinos'],
            ['Los dos deudores y el siervo que no perdonó (Mateo 18:23-35)', 'Deudas que podían terminar en la cárcel o en la venta de la familia como esclavos'],
            ['El mayordomo infiel (Lucas 16:1-8)', 'Administradores que manejaban las deudas de aceite y trigo de su señor'],
            ['El rico necio (Lucas 12:16-21)', 'Un terrateniente que acumula cosechas mientras otros pasan hambre'],
            ['El rico y Lázaro (Lucas 16:19-31)', 'Mendigos enfermos a la puerta de casas lujosas']
          ]
        }),
        cita('Lucas 16:19-21', '@@lc/16/19-21')
      ],
      texto: [
        'La sociedad del tiempo de Jesús estaba muy dividida. En la cima había unas pocas familias muy ricas: la familia de Herodes, las familias de los sumos sacerdotes y los grandes terratenientes, que vivían en Jerusalén o en las ciudades y vestían «de púrpura y de lino fino» (Lc 16:19). Debajo estaban los artesanos, los comerciantes y los campesinos con algo de tierra. Y al fondo, una gran cantidad de jornaleros sin tierra, siervos, esclavos, viudas, huérfanos, enfermos y mendigos.',
        { h: 'Las deudas' },
        'Un campesino que tenía una mala cosecha debía pedir prestado para comer y para sembrar. Si no podía pagar, perdía su tierra y pasaba a trabajarla como arrendatario o como jornalero. En casos extremos, podía ir a la cárcel o ser vendido con su familia, como el siervo de la parábola (Mt 18:25). Por eso la deuda era una imagen tan fuerte del pecado: «perdónanos nuestras deudas, como también nosotros perdonamos a nuestros deudores» (Mt 6:12). Cuando comenzó la rebelión del año 66, los rebeldes quemaron el archivo de Jerusalén donde se guardaban los contratos de deuda.',
        { h: 'Un denario al día' },
        'Un jornalero ganaba un denario por un día de trabajo (Mt 20:2), lo justo para alimentar a su familia ese día. Si no lo contrataban, no comían. Por eso la ley mandaba pagar al jornalero antes de la puesta del sol (Dt 24:15), y Santiago denunció a los ricos que retenían el jornal de los obreros (Stg 5:4). En la parábola, el dueño de la viña paga un denario también a los que trabajaron una sola hora: es la generosidad de Dios, que da por gracia lo que nadie puede ganar.',
        ir('Calcular en Pesos, medidas, monedas y horas bíblicas: el denario en tu moneda', R.medidas + 'calculadora/'),
        { h: 'Lo que enseñó Jesús' },
        'Jesús anunció buenas nuevas a los pobres (Lc 4:18) y advirtió a los ricos: «¡ay de vosotros, ricos! porque ya tenéis vuestro consuelo» (Lc 6:24). No condenó la riqueza en sí: entre sus discípulos había personas con recursos, como José de Arimatea o Juana. Pero enseñó que la vida no consiste en la abundancia de bienes (Lc 12:15), que no se puede servir a Dios y a las riquezas (Mt 6:24), y que quien tiene debe compartir con el que no tiene. El rico de la parábola no fue condenado por ser rico, sino por haber vivido sin ver a Lázaro, que estaba echado a su puerta.'
      ],
      pensar: 'El rico de la parábola tenía a un pobre a su puerta todos los días y nunca lo vio. ¿Quiénes son los necesitados que están cerca de ti, y qué te pide Dios que hagas por ellos?'
    },
    {
      id: 'mesa', n: 'La mesa: con quién se comía y cómo', ref: 'Lucas 5:29-32; Lucas 7:36-50; Lucas 14:7-14; Juan 13:1-5, 23-26; Mateo 11:19; Hechos 2:46', fecha: [-6, 70],
      visual: [
        img('mj-banquete-levi.webp', 'En el patio de la casa de Mateo en Capernaúm, de noche, un banquete con publicanos y gente sencilla reclinados sobre almohadones alrededor de mesas bajas con pan, pescado, aceitunas y vino; Jesús, visto de espaldas, está reclinado entre ellos, y desde la puerta abierta del patio unos fariseos observan con desaprobación', '«Leví le hizo gran banquete en su casa; y había mucha compañía de publicanos» (Lucas 5:29). Recreación.'),
        tabla({
          titulo: 'Costumbres de la mesa',
          cab: ['Costumbre', 'Cómo era', 'En los evangelios'],
          filas: [
            ['Reclinarse', 'En los banquetes se comía recostado sobre el codo izquierdo, con los pies hacia afuera', 'Juan, recostado al lado de Jesús (Juan 13:23); la mujer a sus pies (Lucas 7:38)'],
            ['Los lugares', 'Los de más honor, cerca del anfitrión', 'Escoger el último lugar (Lucas 14:7-11)'],
            ['La hospitalidad', 'Agua para los pies, beso de saludo, aceite para la cabeza', 'Lo que el fariseo no hizo (Lucas 7:44-46)'],
            ['El pan', 'Se partía con las manos y se bendecía a Dios', 'La multiplicación de los panes; la última cena'],
            ['Comer juntos', 'Señal de amistad y aceptación', '«Este a los pecadores recibe, y con ellos come» (Lucas 15:2)']
          ]
        }),
        cita('Lucas 14:7-11', '@@lc/14/7-11')
      ],
      texto: [
        'La gente sencilla comía dos veces al día, en la mañana y al caer la tarde, sentada en el suelo o en esteras: pan, aceite, aceitunas, legumbres, frutas, algo de queso y, junto al lago, pescado. La carne era para las fiestas. En los banquetes, en cambio, se seguía la costumbre griega y romana de comer reclinados sobre almohadones o divanes, apoyados en el codo izquierdo, alrededor de mesas bajas, con los pies hacia afuera.',
        { h: 'Escenas que se entienden mejor' },
        'Esa postura explica varias escenas. En la última cena, Juan estaba «recostado al lado de Jesús» y pudo inclinarse sobre su pecho para preguntarle en voz baja (Jn 13:23-25). En casa de Simón el fariseo, una mujer pecadora pudo ponerse «detrás de él a sus pies» y ungirlos sin interrumpir la comida (Lc 7:38). Y Jesús pudo levantarse de la cena y lavar los pies de los discípulos, que estaban hacia afuera (Jn 13:4-5).',
        'La hospitalidad tenía sus gestos: dar agua para lavar los pies polvorientos, saludar con un beso y ungir la cabeza con aceite. Jesús le reprochó a Simón que no le había dado nada de eso, mientras la mujer había hecho mucho más (Lc 7:44-46).',
        { h: 'Los primeros lugares' },
        'Los lugares de la mesa reflejaban el honor de cada invitado: los más importantes, cerca del anfitrión. Jesús observó cómo los invitados escogían los primeros asientos y enseñó a sentarse en el último lugar, «porque cualquiera que se enaltece, será humillado; y el que se humilla, será enaltecido» (Lc 14:11). Y al anfitrión le dijo que invitara a los pobres, los mancos, los cojos y los ciegos, que no podían devolverle la invitación (Lc 14:12-14).',
        { h: 'Comer con pecadores' },
        'Compartir la mesa era señal de aceptación y amistad. Por eso escandalizó tanto que Jesús comiera en casa de Leví con «mucha compañía de publicanos» (Lc 5:29), y que aceptara la invitación de Zaqueo. Para Jesús, la mesa era un lugar para recibir a los pecadores y llamarlos al arrepentimiento. En la última cena le dio un sentido nuevo, con el pan y la copa del nuevo pacto, y la iglesia primitiva siguió partiendo el pan en las casas «con alegría y sencillez de corazón» (Hch 2:46).'
      ],
      pensar: 'Jesús enseñó a invitar a quienes no pueden devolver la invitación, y comió con los que otros despreciaban. ¿A quién podrías invitar a tu mesa como una forma de mostrar el amor de Cristo?'
    },
    {
      id: 'enfermedad', n: 'La enfermedad, la lepra y la exclusión', ref: 'Levítico 13:45-46; Marcos 1:40-45; Marcos 5:25-34; Lucas 17:11-19; Juan 5:2-9; Juan 9:1-3; Mateo 4:23-24', fecha: [-6, 70],
      visual: [
        img('mj-leproso.webp', 'En un camino de tierra a las afueras de una aldea de Galilea, un hombre leproso con la ropa rasgada, el cabello descubierto y llagas en las manos se arrodilla suplicante ante Jesús, que, visto de espaldas, extiende la mano y le toca el hombro; a distancia, unos aldeanos anónimos miran asustados', '«Jesús, teniendo misericordia de él, extendió la mano y le tocó» (Marcos 1:41). Recreación.'),
        cita('Levítico 13:45-46', '@@lv/13/45-46', 'La ley'),
        cita('Marcos 1:40-42', '@@mr/1/40-42')
      ],
      texto: [
        'En el siglo I no había hospitales ni medicinas eficaces. Había médicos, que usaban hierbas, aceites y vino, pero eran caros y muchas veces no podían hacer nada: la mujer con flujo de sangre «había gastado en médicos todo cuanto tenía, y por ninguno había podido ser curada» (Lc 8:43). La mayoría de los enfermos dependía de su familia. Los que no tenían quién los cuidara terminaban mendigando a la entrada de las ciudades o del templo, como el ciego Bartimeo o el cojo de la puerta la Hermosa.',
        { h: '«¿Quién pecó?»' },
        'Muchos pensaban que la enfermedad era siempre un castigo por un pecado. Los discípulos preguntaron por un ciego de nacimiento: «¿quién pecó, éste o sus padres, para que haya nacido ciego?». Jesús respondió: «No es que pecó éste, ni sus padres, sino para que las obras de Dios se manifiesten en él» (Jn 9:2-3). La enfermedad es parte de un mundo caído, pero no siempre es consecuencia de un pecado personal.',
        { h: 'La lepra' },
        'La palabra lepra en la Biblia abarca varias enfermedades de la piel, no solo la que hoy se llama así. La ley mandaba que el leproso viviera fuera de la ciudad, con la ropa rasgada y la cabeza descubierta, y que gritara «¡Inmundo! ¡inmundo!» para que nadie se le acercara (Lv 13:45-46). Era una muerte en vida: el leproso perdía su familia, su trabajo y su lugar en la sinagoga y en el templo. Si sanaba, debía presentarse al sacerdote para ser declarado limpio y ofrecer un sacrificio (Lv 14).',
        { h: 'Jesús tocó al intocable' },
        'Un leproso se arrodilló ante Jesús y le dijo: «Si quieres, puedes limpiarme». Jesús podía sanarlo con una palabra, como hizo otras veces. Pero «teniendo misericordia de él, extendió la mano y le tocó, y le dijo: Quiero, sé limpio» (Mr 1:41). Tal vez hacía años que nadie lo tocaba. Después lo envió al sacerdote, para que fuera devuelto a su comunidad. Del mismo modo, la mujer con flujo de sangre, que no podía tocar a nadie sin contaminarlo, oyó que Jesús la llamaba «hija» delante de todos (Mr 5:34).',
        'Mateo resume el ministerio de Jesús diciendo que recorría Galilea enseñando, predicando el evangelio del reino «y sanando toda enfermedad y toda dolencia en el pueblo» (Mt 4:23). Las sanidades eran señales de que el reino de Dios había llegado, y Jesús envió a sus discípulos a hacer lo mismo (Mt 10:8). La iglesia sigue orando por los enfermos con fe, ungiéndolos con aceite en el nombre del Señor (Stg 5:14-15).'
      ],
      pensar: 'Jesús no solo sanó al leproso, sino que lo tocó y lo devolvió a su comunidad. ¿Quiénes viven excluidos a tu alrededor por su enfermedad o su condición, y cómo puedes llevarles el toque de Cristo y orar por ellos con fe?'
    },
    {
      id: 'muerte', n: 'La muerte y la sepultura', ref: 'Lucas 7:11-17; Mateo 9:23-25; Juan 11:17-44; Juan 19:38-42; Marcos 15:46; Mateo 23:27; Mateo 28:1-6', fecha: [-6, 70],
      visual: [
        img('mj-nain-cortejo.webp', 'A la puerta de la aldea de Naín, un cortejo fúnebre con flautistas y mujeres que lloran lleva en unas andas de madera a un joven muerto envuelto en lienzos; su madre viuda camina deshecha en llanto; Jesús, visto de espaldas, ha tocado las andas y los que las llevan se han detenido', '«Joven, a ti te digo, levántate» (Lucas 7:14). Recreación.'),
        foto('foto-tumba-piedra.jpg', 'Entrada de una tumba excavada en la roca, con una gran piedra redonda en forma de rueda colocada en un canal frente a la abertura', 'Tumba del siglo I excavada en la roca, con una piedra redonda que rodaba por un canal para cerrar la entrada, como la del sepulcro de Jesús (Marcos 15:46).', 'Licencia por verificar'),
        cita('Juan 19:38-42', '@@jn/19/38-42')
      ],
      texto: [
        'En el clima cálido de Israel, y por las leyes de pureza, los muertos se sepultaban el mismo día en que morían. La familia cerraba los ojos del difunto, lavaba el cuerpo, lo ungía con aceites y especias y lo envolvía en lienzos, «según es costumbre sepultar entre los judíos» (Jn 19:40). Luego se lo llevaba en unas andas, en procesión, hasta la tumba.',
        { h: 'El luto' },
        'El duelo era ruidoso y público. Aun una familia pobre contrataba flautistas y mujeres que lloraban a gritos. Cuando Jesús llegó a la casa de Jairo, encontró a «los que tocaban flautas, y la gente que hacía alboroto» (Mt 9:23). El luto más intenso duraba siete días, en los que vecinos y amigos visitaban a la familia para consolarla, como los muchos judíos que habían venido a consolar a Marta y María por su hermano Lázaro (Jn 11:19).',
        { h: 'Las tumbas' },
        'Las familias que podían tenían una tumba excavada en la roca, fuera de la ciudad, con una o varias cámaras con nichos o bancos de piedra. La entrada se cerraba con una piedra. Las tumbas de los más ricos tenían una gran piedra redonda que rodaba por un canal, como la de José de Arimatea, donde pusieron a Jesús (Mr 15:46). Alrededor de un año después, cuando el cuerpo se había deshecho, se recogían los huesos y se ponían en un osario, una caja de piedra, para dejar lugar a otros miembros de la familia. Los pobres eran sepultados en fosas sencillas.',
        'Como tocar una tumba hacía impuro, las tumbas se blanqueaban con cal para que nadie las tocara sin darse cuenta, sobre todo antes de las fiestas. Jesús usó esa imagen contra la hipocresía: «sois semejantes a sepulcros blanqueados, que por fuera, a la verdad, se muestran hermosos, mas por dentro están llenos de huesos de muertos» (Mt 23:27).',
        { h: 'El Señor de la vida' },
        'En la aldea de Naín, Jesús se encontró con un cortejo fúnebre: llevaban a enterrar al hijo único de una viuda, que se quedaba sin nadie que la sostuviera. «Cuando el Señor la vio, se compadeció de ella, y le dijo: No llores». Tocó las andas, aunque tocar a un muerto hacía impuro, y dijo: «Joven, a ti te digo, levántate» (Lc 7:13-14). Resucitó también a la hija de Jairo y a Lázaro, que llevaba cuatro días en la tumba.',
        'Pero la señal mayor fue su propia tumba. José de Arimatea y Nicodemo sepultaron a Jesús con cien libras de mirra y áloe, como a un rey, e hicieron rodar la piedra. El primer día de la semana, las mujeres encontraron la piedra removida y oyeron al ángel: «No está aquí, pues ha resucitado, como dijo» (Mt 28:6).'
      ],
      pensar: 'Jesús se compadeció de una viuda que lloraba y le devolvió a su hijo, y Él mismo venció la muerte. ¿Cómo cambia la resurrección de Jesús tu manera de enfrentar la muerte de quienes amas y tu propia muerte?'
    }
  ];

  window.__MJ.vida = vida;
})();
