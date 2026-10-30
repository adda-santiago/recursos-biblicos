/* Entre los Testamentos · ruta VII. Lo que nació en estos siglos (ver encabezado en parte1.js)
   Cada grupo o institución se estudia en su origen; su actuación en los evangelios va en El mundo judío
   en tiempos de Jesús (nº 91), enlazado con un botón ir al final de cada estación. */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const nacio = [
    {
      id: 'sinagoga', n: 'La sinagoga', ref: 'Lucas 4:16-21; Hechos 13:14-15; Hechos 15:21; Hechos 16:13', fecha: [-250, 70],
      visual: [
        img('../imperio-griego/img/grecia-sinagoga.webp', 'Una sinagoga del siglo I con hombres judíos sentados en bancos de piedra escuchando la lectura de un rollo', 'Una sinagoga del siglo I. Recreación.'),
        foto('inscripcion-teodoto.webp', 'Placa de piedra caliza con diez líneas de texto griego tallado, la inscripción de Teodoto', 'Réplica de la inscripción de Teodoto, de una sinagoga de Jerusalén anterior al año 70: dice que fue construida «para la lectura de la ley y la enseñanza de los mandamientos».', 'CC BY-SA 3.0 · Sodabottle, vía Wikimedia Commons (réplica en el Museo ANU, Tel Aviv)', 'Foto de la réplica'),
        cita('Hechos 15:21', '@@hch/15/21'),
        tabla({
          titulo: 'Una reunión en la sinagoga',
          cab: ['Momento', 'Qué se hacía', 'En el Nuevo Testamento'],
          filas: [
            ['Confesión de fe', 'Se recitaba el «Oye, Israel» (Dt 6:4-9)', 'Marcos 12:29'],
            ['Oraciones', 'Bendiciones y peticiones dirigidas por un miembro', 'Mateo 6:5'],
            ['Lectura de la ley', 'Se leía una porción de los libros de Moisés', 'Hechos 13:15'],
            ['Lectura de los profetas', 'Se leía un pasaje de los profetas', 'Lucas 4:17'],
            ['Explicación', 'Uno de los presentes explicaba lo leído', 'Lucas 4:20-21; Hechos 13:15-16'],
            ['Bendición', 'Si había un sacerdote, daba la bendición', 'Números 6:24-26']
          ]
        })
      ],
      texto: [
        'Sinagoga es una palabra griega que significa reunión. Designaba tanto al grupo de judíos que se reunían como al edificio donde lo hacían. El Antiguo Testamento no la menciona; en los evangelios aparece en cada aldea. Jesús «entró en la sinagoga, conforme a su costumbre, y se levantó a leer» (Lc 4:16), y Pablo comenzaba siempre su predicación en la sinagoga de cada ciudad.',
        { h: 'Un origen que no se conoce con certeza' },
        'Muchos piensan que la costumbre de reunirse para leer la ley y orar nació en el exilio, cuando los judíos no tenían templo, o en los días de Esdras, cuando el pueblo se juntó a escuchar la ley (Neh 8). Las primeras pruebas seguras vienen de Egipto: inscripciones del siglo III a.C., en tiempos de Ptolomeo III, que dedican lugares de oración judíos, con la misma palabra griega que Lucas usa en Filipos, donde «solía hacerse la oración» (Hch 16:13). En la tierra de Israel, los edificios más antiguos que se han excavado, en Gamla, Masada, el Herodión y Magdala, son del siglo I a.C. y del siglo I d.C.',
        { h: 'Lo que se hacía' },
        'La sinagoga no era un templo: allí no se ofrecían sacrificios, que solo se ofrecían en Jerusalén. Era una casa de oración y de estudio. Cada sábado se leía una porción de la ley de Moisés y otra de los profetas, y alguien la explicaba. Un jefe de la sinagoga organizaba el culto e invitaba a los que hablarían, como hicieron con Pablo en Antioquía de Pisidia: «Varones hermanos, si tenéis alguna palabra de exhortación para el pueblo, hablad» (Hch 13:15). Durante la semana servía de escuela, de tribunal local y de lugar de reunión de la comunidad.',
        'Una inscripción hallada en Jerusalén, anterior al año 70, cuenta que un sacerdote llamado Teodoto construyó una sinagoga «para la lectura de la ley y la enseñanza de los mandamientos», con un albergue para los peregrinos que venían del extranjero.',
        { h: 'Un instrumento de Dios' },
        'La sinagoga mantuvo viva la Palabra de Dios en cada pueblo judío del imperio. Jacobo lo dijo en el concilio de Jerusalén: «Moisés desde tiempos antiguos tiene en cada ciudad quien lo predique en las sinagogas, donde es leído cada día de reposo» (Hch 15:21). Y las primeras iglesias, que se reunían para leer la Escritura, orar y enseñar, heredaron mucho de su forma.',
        'La sinagoga de Magdala, contemporánea de Jesús, se estudiará en su propio recurso (en preparación).',
        ir('Ver en El mundo judío en tiempos de Jesús: la sinagoga en tiempos de Jesús', R.mundo + '#fe/3')
      ],
      pensar: 'Jesús iba a la sinagoga «conforme a su costumbre». ¿Tienes tú la costumbre de reunirte con la iglesia para oír la Palabra, aun cuando no tienes ganas?'
    },
    {
      id: 'escribas', n: 'Los escribas y la tradición oral', ref: 'Esdras 7:6, 10; Marcos 7:1-13; Mateo 23:2-3; Hechos 22:3', fecha: [-450, 70],
      visual: [
        img('../de-la-biblia-a-nosotros/img/escriba-copia.webp', 'Un escriba judío anciano copia con cálamo un rollo de la ley sobre pergamino, a la luz de una lámpara de aceite, con el rollo modelo abierto a su lado', 'Un escriba copia la ley. Recreación.'),
        cita('Marcos 7:6-8', '@@mr/7/6-8'),
        tabla({
          titulo: 'Maestros de la ley en tiempos de Jesús',
          cab: ['Maestro', 'Época', 'Lo que se sabe'],
          filas: [
            ['Hillel', 'Fines del siglo I a.C.', 'Venido de Babilonia; escuela flexible; resumió la ley en no hacer al prójimo lo que uno aborrece'],
            ['Samai', 'Fines del siglo I a.C.', 'Escuela más estricta, por ejemplo sobre el divorcio'],
            ['Gamaliel', 'Siglo I d.C.', 'Nieto de Hillel; maestro de Pablo; aconsejó prudencia al Sanedrín (Hch 5:34-39; 22:3)']
          ],
          nota: 'Las discusiones entre las escuelas de Hillel y Samai sobre el divorcio ayudan a entender la pregunta de Mateo 19:3.'
        })
      ],
      texto: [
        'Esdras era «escriba diligente en la ley de Moisés» (Esd 7:6). En el Antiguo Testamento, un escriba era un secretario o copista. Después del exilio, la palabra pasó a designar a los estudiosos de la ley: hombres que la copiaban, la interpretaban y la enseñaban. En los evangelios se los llama también intérpretes de la ley o doctores de la ley, y sus discípulos los llamaban «rabí», mi maestro.',
        { h: 'Un oficio honrado' },
        'Hacia el 180 a.C., Ben Sira describió al escriba como el sabio que estudia la ley del Altísimo, busca la sabiduría de los antiguos y se ocupa de las profecías, en contraste con el campesino o el artesano, que no tienen tiempo para el estudio. Los escribas no eran necesariamente sacerdotes; venían de todas las clases sociales. Muchos de ellos eran fariseos, y por eso los evangelios los nombran juntos.',
        { h: 'La tradición de los ancianos' },
        'Para aplicar la ley a la vida diaria, los escribas formularon una enorme cantidad de reglas: qué trabajos estaban prohibidos en el día de reposo, cómo lavar las manos antes de comer, cómo dar el diezmo de cada hierba del huerto. Esas explicaciones se transmitían de maestro a discípulo, de memoria, y se llamaban «la tradición de los ancianos» (Mr 7:3). Los fariseos enseñaban que tenía casi la misma autoridad que la ley escrita, porque venía, decían, de Moisés. Esa tradición se puso por escrito alrededor del año 200 d.C., en la Misná.',
        'En el tiempo de Herodes se destacaron dos grandes maestros, Hillel y Samai, con escuelas que discutían sobre casi todo. Gamaliel, nieto de Hillel, fue el maestro de Pablo: «instruido a los pies de Gamaliel, estrictamente conforme a la ley de nuestros padres» (Hch 22:3).',
        { h: 'Lo que Jesús reconoció y lo que reprendió' },
        'Jesús reconoció la autoridad de los escribas como maestros de la ley: «En la cátedra de Moisés se sientan los escribas y los fariseos. Así que, todo lo que os digan que guardéis, guardadlo y hacedlo; mas no hagáis conforme a sus obras» (Mt 23:2-3). Pero reprendió con dureza que la tradición ocupara el lugar de la Palabra: «Porque dejando el mandamiento de Dios, os aferráis a la tradición de los hombres» (Mr 7:8). La tradición de los ancianos les permitía, por ejemplo, dejar sin ayuda a los padres con el pretexto de una ofrenda (Mr 7:10-13).',
        ir('Ver en El mundo judío en tiempos de Jesús: los escribas, intérpretes de la ley', R.mundo + '#grupos/3')
      ],
      pensar: 'Jesús no rechazó a los maestros, sino la tradición que anulaba la Palabra. ¿Hay costumbres en tu vida cristiana que pesan más que lo que Dios dice en la Escritura?'
    },
    {
      id: 'fariseos', n: 'Los fariseos', ref: 'Hechos 23:6-9; Filipenses 3:5; Hechos 26:5; Mateo 23:23; Juan 3:1-2', fecha: [-145, 70],
      visual: [
        img('debate-templo.webp', 'En un pórtico de columnas del templo de Jerusalén, un grupo de fariseos con mantos sencillos y flecos azules en las esquinas, uno de ellos con una cajita de cuero atada en la frente, discute con firmeza frente a un grupo de sacerdotes saduceos de vestimenta lujosa y aspecto aristocrático; algunos peregrinos observan', 'Fariseos y saduceos discuten en los atrios del templo. Recreación.'),
        cita('Hechos 23:6-8', '@@hch/23/6-8')
      ],
      texto: [
        'La palabra fariseo viene probablemente del hebreo perushim, «separados». No se sabe con certeza de qué se separaban: de la impureza, de los paganos o de la gente que no guardaba la ley. Muchos historiadores piensan que nacieron de los asideos, los piadosos que resistieron la helenización en tiempos de Antíoco IV (ruta IV). Josefo los menciona por primera vez en tiempos de Jonatán, hacia el 145 a.C.',
        { h: 'Un movimiento del pueblo' },
        'Los fariseos no eran sacerdotes, aunque algunos lo fueran. Eran, en su mayoría, hombres del pueblo que se proponían vivir toda la ley en la vida diaria, también las reglas de pureza que la ley daba para los sacerdotes del templo. Se reunían en grupos, comían juntos cuidando la pureza de los alimentos y daban el diezmo de todo, hasta de la menta y el comino (Mt 23:23). El pueblo los respetaba como los más fieles.',
        'Su historia estuvo ligada a la de los asmoneos. Rompieron con Juan Hircano (V.6), encabezaron la guerra civil contra Alejandro Janeo, que hizo crucificar a ochocientos de ellos (V.7), y alcanzaron gran influencia con la reina Salomé Alejandra. Josefo dice que en tiempos de Herodes eran unos seis mil, y que se negaron a jurarle lealtad.',
        { h: 'Lo que creían' },
        'Los fariseos creían en la resurrección de los muertos, en los ángeles y los espíritus, en el juicio futuro, y en que Dios gobierna la historia sin quitar la responsabilidad humana. Esperaban un Mesías, hijo de David. Y daban gran autoridad a la tradición oral (VII.2). En muchas doctrinas estaban más cerca del evangelio que cualquier otro grupo. Pablo pudo decir ante el Sanedrín: «Yo soy fariseo, hijo de fariseo; acerca de la esperanza y de la resurrección de los muertos se me juzga» (Hch 23:6).',
        { h: 'Lo bueno y lo peligroso' },
        'En los evangelios, Jesús enfrenta muchas veces a los fariseos, sobre todo por la hipocresía de algunos, que cuidaban los detalles de la ley y descuidaban «lo más importante de la ley: la justicia, la misericordia y la fe» (Mt 23:23), y por poner su tradición por encima de la Palabra. Pero no todos eran iguales. Nicodemo, fariseo y principal de los judíos, buscó a Jesús de noche (Jn 3:1-2); Gamaliel aconsejó no oponerse a los apóstoles (Hch 5:34-39); y Pablo, «conforme a la más rigurosa secta de nuestra religión», vivió fariseo hasta que Cristo lo alcanzó (Hch 26:5).',
        { ejercicio: {
          pregunta: '¿Por qué los fariseos defendieron a Pablo en Hechos 23?',
          opciones: [
            { t: 'Porque se habían convertido a Cristo.', ok: false, por_que: 'Algunos fariseos creyeron (Hch 15:5), pero en Hechos 23 lo defienden por otra razón.' },
            { t: 'Porque Pablo dijo que lo juzgaban por la resurrección, que los fariseos creían y los saduceos negaban.', ok: true, por_que: 'La resurrección era una diferencia central entre los dos grupos, nacida en estos siglos (Hch 23:8).' },
            { t: 'Porque Pablo era sacerdote del templo.', ok: false, por_que: 'Pablo era de la tribu de Benjamín (Fil 3:5), no sacerdote.' }
          ],
          explicacion: 'Conocer el origen de los grupos ayuda a entender escenas como esta.'
        } },
        ir('Ver en El mundo judío en tiempos de Jesús: los fariseos en tiempos de Jesús', R.mundo + '#grupos/1')
      ],
      pensar: 'Los fariseos sabían mucho de la ley, pero algunos descuidaron la misericordia. ¿Puede tu conocimiento de la Biblia volverse orgullo si no lleva a la misericordia?'
    },
    {
      id: 'saduceos', n: 'Los saduceos', ref: 'Mateo 22:23-33; Hechos 4:1-2; Hechos 5:17; Éxodo 3:6', fecha: [-130, 70],
      visual: [
        cita('Mateo 22:31-32', '@@mt/22/31-32'),
        tabla({
          titulo: 'Los grupos judíos en tiempos de Jesús',
          cab: ['', 'Fariseos', 'Saduceos', 'Esenios'],
          filas: [
            ['Origen probable', 'Los asideos de la crisis macabea', 'La aristocracia sacerdotal de Jerusalén', 'Los asideos; sacerdotes que rechazaron a los asmoneos'],
            ['Quiénes eran', 'Laicos y escribas, respetados por el pueblo', 'Sacerdotes principales y familias ricas', 'Comunidades apartadas'],
            ['Autoridad', 'La ley escrita y la tradición oral', 'Solo la ley escrita', 'La ley y las enseñanzas de su Maestro'],
            ['Resurrección y ángeles', 'Creían', 'Negaban', 'Creían'],
            ['Relación con el templo', 'Participaban, pero su centro era la ley', 'Lo controlaban', 'Lo consideraban contaminado'],
            ['Relación con Roma', 'Tolerancia con distancia', 'Colaboración', 'Rechazo'],
            ['En el Nuevo Testamento', 'Muchas veces', 'Varias veces, junto al sumo sacerdote', 'No se nombran']
          ],
          nota: 'Josefo menciona además la «cuarta filosofía», que dio origen a los zelotes en el siglo I d.C.'
        })
      ],
      texto: [
        'Los saduceos eran el otro gran partido judío. Su nombre viene probablemente de Sadoc, el sumo sacerdote de Salomón, cuya familia había ejercido el sacerdocio durante siglos. No eran un movimiento popular, sino el grupo de las familias sacerdotales principales y de los ricos de Jerusalén. Controlaban el templo, sus tesoros y el sumo sacerdocio.',
        { h: 'Cerca del poder' },
        'Los saduceos aparecen en la historia junto a los asmoneos, que eran a la vez reyes y sumos sacerdotes. Cuando Juan Hircano rompió con los fariseos, se apoyó en ellos (V.6), y lo mismo hizo Alejandro Janeo. Más tarde, bajo Herodes y los romanos, siguieron ocupando los cargos del templo. Eran prácticos: preferían colaborar con quien tuviera el poder, con tal de mantener el orden y el culto del templo. Caifás, sumo sacerdote cuando murió Jesús, expresó esa manera de pensar: «os conviene que un hombre muera por el pueblo, y no que toda la nación perezca» (Jn 11:50).',
        { h: 'Lo que creían' },
        'Los saduceos solo reconocían como norma la ley escrita, y rechazaban la tradición oral de los fariseos. Negaban la resurrección de los muertos, el juicio futuro, los ángeles y los espíritus: «los saduceos dicen que no hay resurrección, ni ángel, ni espíritu» (Hch 23:8). Para ellos, la recompensa de Dios se recibía en esta vida.',
        { h: 'Jesús les responde con la ley' },
        'Un día, unos saduceos le presentaron a Jesús el caso de una mujer que se casó con siete hermanos, uno tras otro, para burlarse de la resurrección. Jesús les respondió: «Erráis, ignorando las Escrituras y el poder de Dios» (Mt 22:29), y les citó precisamente la ley de Moisés, que ellos aceptaban: «Yo soy el Dios de Abraham, el Dios de Isaac y el Dios de Jacob. Dios no es Dios de muertos, sino de vivos» (Mt 22:32; Éx 3:6).',
        'Después de Pentecostés, fueron los saduceos los que más se opusieron a los apóstoles, «resentidos de que enseñasen al pueblo, y anunciasen en Jesús la resurrección de entre los muertos» (Hch 4:2). Cuando los romanos destruyeron el templo en el año 70, los saduceos desaparecieron con él; el judaísmo que sobrevivió fue el de los fariseos.',
        ir('Ver en El mundo judío en tiempos de Jesús: los saduceos y la aristocracia del templo', R.mundo + '#grupos/2')
      ],
      pensar: 'Los saduceos conocían la ley de memoria, pero no creían en el poder de Dios para resucitar. ¿Lees la Biblia esperando que Dios actúe, o solo como un libro que conoces?'
    },
    {
      id: 'esenios', n: 'Los esenios y Qumrán', ref: 'Isaías 40:3; Mateo 3:1-3; Juan 1:23; Malaquías 3:1', fecha: [-150, 68],
      visual: [
        img('qumran-esenios.webp', 'Al amanecer, en un edificio de piedra junto a los acantilados del desierto frente al mar Muerto, varios hombres vestidos de lino blanco copian rollos sentados ante largas mesas de yeso, mientras otro baja por las escaleras de un baño ritual excavado en la roca; al fondo, el mar Muerto refleja la luz', 'Una comunidad judía del desierto copia las Escrituras junto al mar Muerto. Recreación.'),
        mapa({ view: V.judea, lugares: ['qumran', 'jerusalen', 'jerico', 'en-gadi', 'masada'] }),
        cita('Isaías 40:3', '@@is/40/3'),
        tabla({
          titulo: 'Los rollos del mar Muerto',
          cab: ['', ''],
          filas: [
            ['Hallazgo', 'Entre 1947 y 1956, en once cuevas cerca de Qumrán'],
            ['Cantidad', 'Unos novecientos manuscritos, la mayoría en fragmentos'],
            ['Manuscritos bíblicos', 'Unos doscientos treinta, de todos los libros del Antiguo Testamento menos Ester'],
            ['Fechas', 'Del siglo III a.C. al siglo I d.C.'],
            ['Escritos de la comunidad', 'La Regla de la comunidad, el Documento de Damasco, el Rollo de la guerra, comentarios de los profetas']
          ]
        })
      ],
      texto: [
        'Josefo, Filón de Alejandría y el escritor romano Plinio describen un tercer grupo judío, los esenios, que el Nuevo Testamento no nombra. Eran unos cuatro mil, vivían en comunidades en las aldeas de Judea y en el desierto junto al mar Muerto, compartían sus bienes, se bañaban ritualmente cada día, vestían de blanco, guardaban el día de reposo con un rigor extremo y estudiaban la ley en común. Algunos no se casaban.',
        { h: 'Los rollos del mar Muerto' },
        'En 1947, un pastor beduino encontró en una cueva cerca de Qumrán, en la costa noroeste del mar Muerto, unas tinajas con rollos antiguos. En los años siguientes aparecieron en once cuevas unos novecientos manuscritos, y junto a ellas se excavó un asentamiento habitado desde el siglo I a.C. hasta que los romanos lo destruyeron en el 68 d.C. La mayoría de los estudiosos piensa que allí vivió una comunidad de esenios, que copió y guardó esos rollos.',
        'Entre ellos están las copias más antiguas de la Biblia hebrea, mil años más antiguas que las que se conocían, como el gran rollo de Isaías, que mostraron con qué fidelidad se había copiado el texto.',
        ir('Ver en De la Biblia a nosotros: el gran rollo de Isaías', R.biblia),
        { h: 'Una comunidad que se apartó' },
        'Los escritos propios de la comunidad cuentan su origen. Un grupo de sacerdotes, guiado por un hombre al que llaman «el Maestro de justicia», rompió con el templo de Jerusalén porque lo consideraba contaminado por un «sacerdote impío», probablemente uno de los primeros asmoneos (V.4), y por un calendario equivocado. Se retiraron al desierto para preparar el camino del Señor, citando Isaías: «Voz que clama en el desierto: Preparad camino a Jehová» (Is 40:3). Esperaban una guerra final entre los hijos de la luz y los hijos de las tinieblas, y la llegada de dos mesías, uno sacerdotal y otro real.',
        { h: 'Juan el Bautista y Qumrán' },
        'Ese mismo versículo de Isaías es el que los evangelios aplican a Juan el Bautista, que predicaba en el desierto de Judea, no lejos de Qumrán (Mt 3:1-3). Algunos han pensado que Juan tuvo contacto con los esenios. Lo que la Escritura deja claro es la diferencia: los esenios se apartaron para formar una comunidad pura y esperar; Juan clamó en el desierto para llamar a todo el pueblo al arrepentimiento y señalar al que ya venía: «He aquí el Cordero de Dios» (Jn 1:29).',
        ir('Ver en El mundo judío en tiempos de Jesús: los esenios en tiempos de Jesús', R.mundo + '#grupos/4')
      ],
      pensar: 'Los esenios se apartaron del mundo para preparar el camino del Señor; Juan lo preparó llamando a todos al arrepentimiento. ¿Tu fe te aparta de la gente o te lleva a ella con el mensaje de Cristo?'
    },
    {
      id: 'sanedrin', n: 'El Sanedrín', ref: 'Números 11:16-17; Marcos 14:55; Hechos 5:21, 34; Juan 18:31; Lucas 23:50-51', fecha: [-200, 70],
      visual: [
        img('../hechos/img/hechos-pedro-sanedrin.webp', 'Pedro y Juan, de pie y serenos, ante el sanedrín reunido en semicírculo, con el sumo sacerdote y ancianos vestidos con mantos', 'Pedro y Juan ante el Sanedrín (Hechos 4). Recreación.'),
        cita('Juan 18:31', '@@jn/18/31'),
        tabla({
          titulo: 'El Sanedrín en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombre', 'Del griego synédrion, «consejo», «los que se sientan juntos»'],
            ['Antecedente', 'El consejo de los ancianos (gerousía) que menciona Antíoco III hacia el 200 a.C.'],
            ['Miembros', 'Setenta y uno, según la tradición judía: los principales sacerdotes, los escribas y los ancianos'],
            ['Presidente', 'El sumo sacerdote (Mt 26:57; Hch 5:27)'],
            ['Miembros nombrados en el Nuevo Testamento', 'Nicodemo (Jn 7:50), José de Arimatea (Lc 23:50-51), Gamaliel (Hch 5:34)'],
            ['Límite bajo Roma', 'No podía ejecutar sin permiso del gobernador (Jn 18:31)']
          ]
        })
      ],
      texto: [
        'El Sanedrín era el consejo supremo de los judíos en Jerusalén. En los evangelios y en Hechos aparece como el tribunal que juzga a Jesús, a Pedro y Juan, a Esteban y a Pablo. El Antiguo Testamento no lo menciona con ese nombre, que es griego.',
        { h: 'Un consejo de ancianos' },
        'La tradición judía posterior vinculó el Sanedrín con los setenta ancianos que Dios dio a Moisés para ayudarlo a llevar la carga del pueblo (Nm 11:16-17). Históricamente, su antecedente es el consejo de los ancianos de Jerusalén, que gobernaba junto al sumo sacerdote. La carta de Antíoco III a los judíos, hacia el 200 a.C., ya lo nombra. Bajo los asmoneos siguió existiendo, y los fariseos ganaron un lugar en él con Salomé Alejandra.',
        'La primera vez que Josefo usa la palabra sanedrín para un tribunal judío es en el juicio a Herodes, en el 47 a.C. (VI.2). Cuando Herodes llegó al poder, hizo ejecutar a muchos de sus miembros, y desde entonces el consejo quedó sometido al rey y, después, a los gobernadores romanos.',
        { h: 'Cómo funcionaba' },
        'Según la tradición judía, tenía setenta y un miembros y lo presidía el sumo sacerdote. Lo formaban los principales sacerdotes, en su mayoría saduceos; los escribas, muchos de ellos fariseos; y los ancianos, jefes de las familias importantes. Se ocupaba de los asuntos de la ley, del templo y de la vida de la comunidad judía. Bajo los romanos podía juzgar, pero no ejecutar una sentencia de muerte sin permiso del gobernador. Por eso le dijeron a Pilato: «A nosotros no nos está permitido dar muerte a nadie» (Jn 18:31).',
        { h: 'Un tribunal dividido' },
        'El Sanedrín no era un bloque. Cuando Pablo compareció ante él, bastó mencionar la resurrección para que fariseos y saduceos se dividieran (Hch 23:6-10). Algunos de sus miembros fueron discípulos de Jesús, aunque en secreto: Nicodemo, que lo defendió (Jn 7:50-51), y José de Arimatea, «miembro del concilio, varón bueno y justo», que «no había consentido en el acuerdo ni en los hechos de ellos» (Lc 23:50-51) y pidió el cuerpo de Jesús para sepultarlo.',
        ir('Ver en El mundo judío en tiempos de Jesús: el Sanedrín y el juicio de Jesús', R.mundo + '#poder/4')
      ],
      pensar: 'José de Arimatea no se dejó arrastrar por la decisión de la mayoría del concilio. ¿Te atreves a no consentir cuando un grupo decide algo contra la justicia?'
    },
    {
      id: 'libros', n: 'Los libros de este período', ref: 'Romanos 3:2; Lucas 24:44; Judas 14-15', fecha: [-300, 100],
      visual: [
        img('../libros-apocrifos/img/mesa-rollos.webp', 'Sobre una mesa de madera antigua, a la luz de una lámpara de aceite, hay rollos de pergamino abiertos con escritura hebrea y griega, un códice encuadernado en cuero y un tintero con cálamo', 'Los judíos de estos siglos escribieron muchos libros, además de copiar la Escritura. Recreación.'),
        tabla({
          titulo: 'Libros escritos entre los testamentos',
          cab: ['Tipo', 'Ejemplos', 'Qué aportan'],
          filas: [
            ['Historia', '1 y 2 Macabeos', 'La crisis de Antíoco IV y los asmoneos'],
            ['Relatos', 'Tobías, Judit, adiciones a Ester y a Daniel', 'La piedad judía en el exilio y en la persecución'],
            ['Sabiduría', 'Eclesiástico (Ben Sira), Sabiduría de Salomón', 'Cómo pensaban los maestros de la ley'],
            ['Apocalipsis', '1 Enoc, 4 Esdras', 'Las esperanzas sobre el fin y el juicio'],
            ['Salmos y oraciones', 'Salmos de Salomón, Oración de Manasés', 'La espera del Mesías hijo de David'],
            ['Reescrituras de la Biblia', 'Jubileos, Testamentos de los doce patriarcas', 'Cómo se leía el Génesis'],
            ['Escritos de Qumrán', 'Regla de la comunidad, comentarios de los profetas', 'La vida y las creencias de los esenios']
          ]
        })
      ],
      texto: [
        'Aunque no hubo profetas, los judíos de estos siglos escribieron mucho. Contaron su historia, escribieron oraciones, proverbios y novelas con enseñanza, imaginaron el fin de los tiempos y volvieron a contar los relatos del Génesis. Muchos de esos libros se conservaron en la Septuaginta, en los rollos del mar Muerto o en traducciones antiguas.',
        { h: 'Libros útiles, pero no Escritura' },
        'Algunos de estos libros forman parte de las Biblias católicas y ortodoxas, que los llaman deuterocanónicos. Las iglesias evangélicas, siguiendo el canon que Israel recibió y que Jesús confirmó (Lc 24:44), no los reciben como Escritura, pero los valoran como fuentes para conocer la historia y el pensamiento del judaísmo antes de Jesús. A Israel le fue confiada la palabra de Dios (Ro 3:2), y estos libros no estaban entre ella.',
        'Para estudiar este período son indispensables. El primer libro de los Macabeos es la fuente principal sobre la rebelión; el Eclesiástico muestra cómo pensaba un maestro de la ley en Jerusalén poco antes de la crisis; los Salmos de Salomón revelan qué esperaban los judíos piadosos del Mesías; y 1 Enoc, que Judas cita (Jud 14-15), muestra cómo se imaginaban los ángeles y el juicio.',
        'Leerlos también ayuda a valorar la Escritura. Al lado de los relatos de Judit o de Tobías, con sus errores de historia y sus enseñanzas mezcladas, se nota la sobriedad y la verdad de la Biblia. Y al lado de las especulaciones de los apocalipsis judíos sobre el fin, se aprecia la claridad de lo que Dios reveló por medio de Daniel y de Juan.',
        { h: 'Un recurso propio' },
        'Estos libros se estudian uno por uno en Los libros apócrifos y pseudoepígrafos, con lo que cuentan, cuándo se escribieron, lo que aportan y en qué se apartan de la Escritura.',
        ir('Abrir Los libros apócrifos y pseudoepígrafos', R.apocrifos),
        ir('Ver los libros históricos: 1, 2, 3 y 4 Macabeos', R.apocrifos + '#historicos/1'),
        ir('Ver los pseudoepígrafos: 1 Enoc y los Salmos de Salomón', R.apocrifos + '#pseudo/1')
      ],
      pensar: 'Hay muchos libros que ayudan a entender la Biblia, pero solo uno es Palabra de Dios. ¿Dedicas más tiempo a leer sobre la Biblia que a leer la Biblia?'
    },
    {
      id: 'esperanza', n: 'La esperanza del Mesías', ref: 'Juan 1:19-25; Juan 7:40-42; Lucas 2:25-38; Daniel 7:13-14; 1 Corintios 1:23', fecha: [-63, 30],
      visual: [
        cita('Juan 1:19-21', '@@jn/1/19-21'),
        tabla({
          titulo: 'Lo que esperaban y cómo se cumplió en Jesús',
          cab: ['Esperanza', 'Dónde se apoyaba', 'Cómo se cumplió en Jesús'],
          filas: [
            ['Un rey hijo de David', '2 Samuel 7:12-16; Salmos de Salomón', 'Hijo de David, nacido en Belén (Mt 1:1; Jn 7:42)'],
            ['El profeta como Moisés', 'Deuteronomio 18:15', 'El profeta que había de venir al mundo (Jn 6:14; Hch 3:22)'],
            ['El regreso de Elías', 'Malaquías 4:5', 'Cumplido en Juan el Bautista (Mt 11:14)'],
            ['Un mesías sacerdote', 'Salmo 110:4; escritos de Qumrán', 'Sumo sacerdote según el orden de Melquisedec (He 7)'],
            ['El Hijo del Hombre que viene del cielo', 'Daniel 7:13-14; 1 Enoc', 'El título que Jesús usó para sí mismo (Mr 14:62)'],
            ['Un libertador de los romanos', 'La memoria de los macabeos', 'Jesús lo rechazó: su reino no es de este mundo (Jn 6:15; 18:36)']
          ]
        })
      ],
      texto: [
        'Cuando Juan el Bautista empezó a predicar, los sacerdotes y levitas de Jerusalén fueron a preguntarle: «¿Tú, quién eres?». Juan confesó: «Yo no soy el Cristo». Le preguntaron: «¿Eres tú Elías?». Dijo: «No soy». «¿Eres tú el profeta?». Y respondió: «No» (Jn 1:19-21). Esas tres preguntas resumen lo que el pueblo esperaba al final de estos siglos.',
        { h: 'Una esperanza avivada' },
        'La experiencia de estos siglos hizo crecer la esperanza. Los judíos habían vivido bajo reyes extranjeros, habían sufrido la persecución de Antíoco IV, habían visto a sus propios reyes asmoneos volverse tiranos, y finalmente habían caído bajo Roma y bajo un rey idumeo. Muchos volvieron a leer las promesas de los profetas y esperaron que Dios enviara pronto a su Ungido.',
        'Pero no todos esperaban lo mismo. Los Salmos de Salomón piden un rey hijo de David que expulse a los gentiles y reine con justicia. Los escritos de Qumrán esperan dos mesías, uno sacerdote y otro rey, y un profeta. Algunos libros, como 1 Enoc, hablan de un Hijo del Hombre celestial que juzgará a los reyes, tomando la imagen de Daniel 7:13. Otros esperaban a Elías, como prometió Malaquías, o al profeta como Moisés.',
        { h: 'Los que esperaban en silencio' },
        'Lucas presenta a algunos de ellos en el templo, cuando José y María llevaron al niño Jesús: Simeón, que era «justo y piadoso, esperaba la consolación de Israel», y Ana, la profetisa, que hablaba del niño «a todos los que esperaban la redención en Jerusalén» (Lc 2:25, 38). No eran poderosos ni famosos. Esperaban orando, y vieron el cumplimiento.',
        { h: 'Un Mesías inesperado' },
        'Jesús cumplió todas esas esperanzas, pero de una manera que nadie imaginaba. Era el Hijo de David, el Profeta, el Sacerdote y el Hijo del Hombre; pero vino primero a sufrir y morir. Por eso, para muchos fue tropezadero: «nosotros predicamos a Cristo crucificado, para los judíos ciertamente tropezadero» (1 Co 1:23). El mismo Jesús resucitado tuvo que explicar a dos discípulos que el Cristo debía padecer antes de entrar en su gloria (Lc 24:25-27). Su reino vendrá en gloria cuando vuelva.',
        ir('Ver en El mundo judío en tiempos de Jesús: qué Mesías esperaban', R.mundo + '#fe/8')
      ],
      pensar: 'Muchos esperaban un Mesías a su medida y no reconocieron al que vino. ¿Esperas tú que Jesús cumpla tus expectativas, o te dejas sorprender por lo que él quiere hacer?'
    }
  ];

  window.__ET.nacio = nacio;
})();
