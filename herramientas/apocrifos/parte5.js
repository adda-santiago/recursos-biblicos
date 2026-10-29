/* Los libros apócrifos y pseudoepígrafos · ruta V. Los pseudoepígrafos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const pseudo = [
    {
      id: 'enoc', n: '1 Enoc y la carta de Judas', ref: 'Judas 14-15; Génesis 5:21-24; Génesis 6:1-4; 2 Pedro 2:4; Judas 6; Hechos 17:28', fecha: [-300, 50],
      visual: [
        cita('Judas 14-15', '@@jud/1/14-15'),
        tabla({
          titulo: 'Las cinco partes de 1 Enoc',
          cab: ['Capítulos', 'Nombre', 'Contenido', 'Fecha aproximada'],
          filas: [
            ['1–36', 'Libro de los Vigilantes', 'Ángeles que se unen a mujeres (Génesis 6) y el juicio de Dios', '300–200 a.C.'],
            ['37–71', 'Libro de las Parábolas', 'El Hijo del Hombre, el Elegido, juzga a los reyes', 'Siglo I a.C. o I d.C.'],
            ['72–82', 'Libro astronómico', 'El sol, la luna y un año de 364 días', '300–200 a.C.'],
            ['83–90', 'Libro de los Sueños', 'La historia de Israel contada con animales', 'Hacia 165 a.C.'],
            ['91–108', 'Carta de Enoc', 'Advertencias a los pecadores y consuelo a los justos', '200–100 a.C.']
          ]
        })
      ],
      texto: [
        'Génesis dice muy poco de Enoc: «Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios» (Gn 5:24). Ese misterio inspiró, siglos después, un libro enorme atribuido a él. 1 Enoc reúne cinco obras distintas, escritas entre el 300 a.C. y el siglo I d.C., en las que Enoc recibe visiones del cielo, de los ángeles, del juicio final y del curso de la historia.',
        { h: 'Los vigilantes' },
        'La primera parte desarrolla el breve relato de Génesis 6:1-4. Cuenta que doscientos ángeles, llamados vigilantes, bajaron al monte Hermón, se unieron a mujeres y enseñaron a los hombres la fabricación de armas, la magia y los adornos. De esas uniones nacieron gigantes que llenaron la tierra de violencia, y Dios mandó el diluvio y encerró a los ángeles en prisiones oscuras hasta el día del juicio.',
        { h: 'La cita de Judas' },
        'Judas, el hermano de Jacobo, cita casi palabra por palabra una frase del primer capítulo del libro: «De éstos también profetizó Enoc, séptimo desde Adán» (Jud 14). También 2 Pedro 2:4 y Judas 6 hablan de ángeles que pecaron y fueron encerrados en prisiones de oscuridad, una idea que el libro desarrolla con detalle.',
        'Que Judas cite una frase verdadera de un libro no convierte ese libro en Escritura. Pablo citó a poetas griegos (Hch 17:28; Tit 1:12) sin que nadie piense que sus obras sean inspiradas. Judas, guiado por el Espíritu, afirma que esa profecía de Enoc es verdadera; no dice nada del resto del libro.',
        { h: 'Un libro que llegó de Etiopía' },
        'La iglesia antigua leyó 1 Enoc con interés, y Tertuliano lo defendió, pero la mayoría lo rechazó y se perdió en Occidente. Solo la iglesia de Etiopía lo conservó completo y lo incluye hasta hoy en su Biblia. En 1773 el viajero escocés James Bruce llevó a Europa tres copias en ge’ez, y en 1821 se publicó la primera traducción al inglés. En Qumrán aparecieron después fragmentos en arameo de unas once copias de casi todas sus partes, menos las Parábolas.',
        { posturas: {
          titulo: '¿Quiénes son los «hijos de Dios» de Génesis 6?',
          a: { n: 'Ángeles caídos', t: 'Es la lectura de 1 Enoc y de muchos autores judíos y cristianos antiguos. Se apoya en que «hijos de Dios» designa a los ángeles en Job 1:6 y 38:7, y en lo que dicen 2 Pedro 2:4 y Judas 6.' },
          b: { n: 'Descendientes de Set', t: 'Desde Agustín, muchos entienden que los hijos de Dios son la línea piadosa de Set, que se mezcló con la descendencia de Caín. Señalan que Jesús dijo que los ángeles no se casan (Mt 22:30).' },
          c: 'La Biblia no da más detalles. Lo que enseña con claridad es que la maldad de los hombres llegó a ser grande en la tierra y que Dios la juzgó con el diluvio (Gn 6:5-8).'
        } }
      ],
      pensar: 'Enoc «caminó con Dios» en una generación corrompida. ¿Qué significa para ti caminar con Dios en medio de tu propia generación?'
    },
    {
      id: 'moises-tradiciones', n: 'La Asunción de Moisés y otras tradiciones', ref: 'Judas 9; 2 Timoteo 3:8; Hebreos 11:37; Deuteronomio 34:5-6; Zacarías 3:2', fecha: [-4, 30],
      visual: [
        cita('Judas 9', '@@jud/1/9'),
        tabla({
          titulo: 'Tradiciones judías que menciona el Nuevo Testamento',
          cab: ['Pasaje', 'Lo que dice', 'De dónde viene'],
          filas: [
            ['Judas 9', 'Miguel disputa con el diablo por el cuerpo de Moisés', 'Según Orígenes, de la Asunción de Moisés, cuyo final se perdió'],
            ['2 Timoteo 3:8', 'Janes y Jambres resistieron a Moisés', 'Nombres que la tradición judía daba a los magos de Egipto (Éx 7:11)'],
            ['Hebreos 11:37', 'Algunos fieles fueron aserrados', 'La tradición de la muerte de Isaías bajo Manasés, contada en la Ascensión de Isaías'],
            ['1 Corintios 10:4', 'La roca que los seguía', 'Una tradición judía sobre el agua de la roca en el desierto']
          ],
          nota: 'Los autores bíblicos afirman lo que dicen de estas tradiciones; no hacen Escritura a los libros que las contienen.'
        })
      ],
      texto: [
        'Deuteronomio cuenta que Moisés murió en Moab y que Dios mismo lo enterró, «y ninguno conoce el lugar de su sepultura hasta hoy» (Dt 34:6). Ese silencio despertó la imaginación de los judíos. Un libro escrito a comienzos del siglo I d.C., llamado la Asunción o el Testamento de Moisés, presenta las últimas palabras de Moisés a Josué, en las que anuncia la historia de Israel hasta los días de Herodes y sus hijos.',
        { h: 'Un libro que conocemos a medias' },
        'Del libro solo queda una traducción latina incompleta, encontrada en una biblioteca de Milán y publicada en 1861. El final se perdió. Varios padres de la iglesia, como Orígenes, cuentan que en ese final el arcángel Miguel disputaba con el diablo por el cuerpo de Moisés. Judas menciona esa disputa para enseñar humildad: ni siquiera Miguel se atrevió a maldecir al diablo, sino que dijo: «El Señor te reprenda» (Jud 9), las mismas palabras del ángel en Zacarías 3:2.',
        { h: 'Otras tradiciones en el Nuevo Testamento' },
        'Judas no es el único. Pablo nombra a Janes y Jambres, los magos que resistieron a Moisés (2 Ti 3:8), cuyos nombres no están en Éxodo pero sí en la tradición judía. Hebreos dice que algunos creyentes fueron «aserrados» (He 11:37), probablemente pensando en Isaías, que según una antigua tradición murió así en tiempos de Manasés. Los autores del Nuevo Testamento conocían estas historias, como cualquier judío de su época.',
        { h: 'Cómo entenderlo' },
        'El Espíritu Santo guió a los escritores de la Biblia de modo que todo lo que afirman es verdad. Cuando un autor inspirado menciona un hecho conservado por la tradición, ese hecho queda confirmado. Pero eso no da autoridad a todo lo demás que dice la tradición o el libro que la guardó. Es la misma forma en que Pablo aprovechó a un poeta griego en Atenas sin aprobar su religión.',
        { ejercicio: {
          pregunta: 'Judas cita a 1 Enoc y menciona la disputa por el cuerpo de Moisés. ¿Qué se concluye de eso?',
          opciones: [
            { t: 'Que 1 Enoc y la Asunción de Moisés deberían estar en la Biblia.', ok: false, por_que: 'Citar o mencionar algo no es reconocer un libro como Escritura; Pablo citó a poetas paganos.' },
            { t: 'Que los hechos que Judas afirma son verdaderos, aunque los libros que los conservaron no sean Escritura.', ok: true, por_que: 'La inspiración garantiza lo que dice el autor bíblico, no todo el contenido de sus fuentes.' },
            { t: 'Que Judas se equivocó al usar libros no inspirados.', ok: false, por_que: 'Judas es Escritura inspirada; lo que afirma es verdad.' }
          ],
          explicacion: 'Un autor inspirado puede usar material de su tiempo; lo que él afirma tiene la autoridad de Dios.'
        } }
      ],
      pensar: 'Miguel no maldijo al diablo, sino que dejó el juicio en manos del Señor. ¿Cómo enfrentas tú el mal: con tus propias palabras o con la autoridad de Dios?'
    },
    {
      id: 'jubileos', n: 'Jubileos y los Testamentos de los doce patriarcas', ref: 'Deuteronomio 4:2; Apocalipsis 22:18-19; Génesis 49; Colosenses 2:16-17', fecha: [-160, 150],
      visual: [
        img('../de-la-biblia-a-nosotros/img/pastor-qumran.webp', 'Un joven pastor beduino se asoma a la entrada de una cueva en un acantilado del desierto de Judea y descubre en la penumbra unas tinajas de barro', 'En las cuevas de Qumrán se hallaron unas quince copias de Jubileos. Recreación.'),
        cita('Deuteronomio 4:2', '@@dt/4/2'),
        tabla({
          titulo: 'Dos libros que vuelven a contar el Génesis',
          cab: ['', 'Jubileos', 'Testamentos de los doce patriarcas'],
          filas: [
            ['Qué es', 'Génesis y el comienzo de Éxodo contados de nuevo, por períodos de 49 años', 'Las últimas palabras de cada uno de los doce hijos de Jacob a sus hijos'],
            ['Quién habla', 'Un ángel que dicta a Moisés en el Sinaí', 'Rubén, Simeón, Leví, Judá y los demás'],
            ['Fecha', 'Hacia 160–150 a.C.', 'Base judía; forma final cristiana, siglo II d.C.'],
            ['Tema principal', 'Un calendario solar de 364 días y la ley guardada desde el principio', 'Las virtudes y los vicios; esperanza en un ungido de Leví y de Judá'],
            ['Quién lo lee', 'La iglesia de Etiopía lo tiene en su Biblia', 'Ninguna iglesia lo recibe como Escritura']
          ]
        })
      ],
      texto: [
        'Algunos escritores judíos no se limitaron a explicar la Escritura: la volvieron a escribir, agregando detalles, discursos y fechas. Jubileos y los Testamentos de los doce patriarcas son dos ejemplos de esa manera de leer la Biblia.',
        { h: 'Jubileos: el «pequeño Génesis»' },
        'Jubileos dice ser la revelación que un ángel dictó a Moisés en el monte Sinaí. Cuenta la historia desde la creación hasta el éxodo y la ordena en jubileos, períodos de 49 años. Su autor, que escribió hacia el 160–150 a.C., defendía un calendario solar de 364 días y quería mostrar que los patriarcas ya guardaban las fiestas, el día de reposo y las leyes de pureza antes de Moisés. Por eso hace que Abraham celebre la fiesta de los tabernáculos y que Noé observe Pentecostés.',
        'El libro fue muy apreciado en Qumrán, donde se hallaron unas quince copias en hebreo, porque aquella comunidad usaba el mismo calendario y criticaba al templo de Jerusalén por seguir otro. La iglesia de Etiopía lo incluye en su Biblia.',
        { h: 'Los Testamentos de los doce patriarcas' },
        'Siguiendo el modelo de Génesis 49, donde Jacob bendice a sus hijos antes de morir, este libro pone en boca de cada uno de los doce un discurso de despedida. Rubén advierte contra la inmoralidad, Simeón contra la envidia, José habla del dominio propio. El texto que conocemos lo terminaron de redactar cristianos del siglo II, que le agregaron referencias a Cristo, pero en Qumrán y en la genizá de El Cairo aparecieron textos judíos más antiguos sobre Leví.',
        { h: 'No añadir a la Palabra' },
        'Estos libros enseñan mucho sobre cómo pensaban algunos grupos judíos antes de Jesús. Pero también muestran un peligro: atribuir a Dios o a un ángel lo que en realidad son ideas propias, para dar autoridad a un calendario o a una práctica. Moisés advirtió: «No añadiréis a la palabra que yo os mando, ni disminuiréis de ella» (Dt 4:2), y Apocalipsis cierra la Biblia con la misma advertencia (Ap 22:18-19).',
        'Pablo enseñó que los días de fiesta, las lunas nuevas y los días de reposo eran «sombra de lo que ha de venir; pero el cuerpo es de Cristo» (Col 2:17). Ningún calendario, por antiguo que parezca, puede ocupar el lugar de Cristo en la vida del creyente.'
      ],
      pensar: 'Jubileos atribuyó sus propias ideas a un ángel para darles autoridad. ¿Cómo puedes distinguir hoy entre lo que Dios dice en su Palabra y lo que alguien afirma que Dios le dijo?'
    },
    {
      id: 'salmos-salomon', n: 'Los Salmos de Salomón y la espera del Mesías', ref: 'Lucas 2:11; Lucas 1:32-33; Juan 6:15; Hechos 1:6-8; Juan 18:36', fecha: [-63, -40],
      visual: [
        mapa({ view: V.mediterraneo, lugares: ['jerusalen', 'roma', 'alejandria'] }),
        cita('Lucas 2:11', '@@lc/2/11'),
        tabla({
          titulo: 'El Mesías que esperaban y el Mesías que vino',
          cab: ['Salmos de Salomón 17', 'Jesús, el Cristo'],
          filas: [
            ['Hijo de David', 'Hijo de David (Lc 1:32)'],
            ['Expulsa a los gentiles de Jerusalén', 'Muere por judíos y gentiles y los une en un solo pueblo (Ef 2:14)'],
            ['Rompe a los pecadores como vasija de barro', 'Vino a buscar y a salvar lo que se había perdido (Lc 19:10)'],
            ['Reina en un reino de este mundo', '«Mi reino no es de este mundo» (Jn 18:36), y volverá a reinar sobre la tierra'],
            ['Es llamado Cristo Señor', '«Un Salvador, que es CRISTO el Señor» (Lc 2:11)']
          ]
        })
      ],
      texto: [
        'En el año 63 a.C., el general romano Pompeyo tomó Jerusalén después de un asedio de tres meses, entró al templo y llegó hasta el Lugar Santísimo, donde solo podía entrar el sumo sacerdote una vez al año. Para los judíos piadosos fue una profanación terrible. Poco después, un grupo de ellos, probablemente fariseos, escribió dieciocho salmos para lamentar lo ocurrido y pedir a Dios que cumpliera sus promesas. Se atribuyeron a Salomón, aunque se escribieron casi mil años después de él.',
        { h: 'La esperanza del Hijo de David' },
        'Los salmos 17 y 18 de la colección son la descripción más completa que tenemos de lo que muchos judíos esperaban del Mesías en el siglo antes de Jesús. Piden a Dios que levante al hijo de David como rey, que expulse a los gentiles de Jerusalén, que destruya a los gobernantes injustos, que reúna a las tribus de Israel y que reine con justicia y sabiduría. Al final lo llaman con un título que sorprende al lector cristiano: el Cristo Señor.',
        'Es el mismo título que el ángel usó para anunciar el nacimiento de Jesús a los pastores: «un Salvador, que es CRISTO el Señor» (Lc 2:11). Los pastores entendieron que había llegado el que Israel esperaba.',
        { h: 'Un Mesías distinto' },
        'Esta esperanza ayuda a entender muchas escenas de los evangelios. Cuando Jesús alimentó a la multitud, querían hacerlo rey por la fuerza (Jn 6:15). Después de la resurrección, los discípulos todavía preguntaban: «Señor, ¿restaurarás el reino a Israel en este tiempo?» (Hch 1:6). Jesús no negó que el reino vendría, pero les dijo que primero recibirían el poder del Espíritu Santo para ser sus testigos hasta lo último de la tierra (Hch 1:8).',
        'Jesús es el Hijo de David y el Rey, pero vino primero a morir por los pecadores, judíos y gentiles. El reino que esperaban los Salmos de Salomón no fue cancelado: el Mesías volverá a reinar sobre la tierra desde Jerusalén, como anunciaron los profetas. Pero antes había que resolver el problema más profundo, el pecado, y eso solo podía hacerlo el Cordero de Dios.',
        ir('Ver en Entre los Testamentos: Pompeyo en el Lugar Santísimo', '../../entre-los-testamentos/#roma/1')
      ],
      pensar: 'Muchos esperaban un Mesías que resolviera sus problemas políticos. ¿Qué esperas tú de Jesús: que cambie tus circunstancias o que reine en tu corazón?'
    },
    {
      id: '4-esdras', n: '4 Esdras: preguntas después de la destrucción', ref: 'Romanos 8:18-23; Apocalipsis 21:1-4; Habacuc 1:13; Lucas 24:44', fecha: [70, 120],
      visual: [
        tabla({
          titulo: 'Los nombres de los libros de Esdras',
          cab: ['Biblia hebrea y evangélica', 'Biblia griega', 'Vulgata latina'],
          filas: [
            ['Esdras', 'Esdras B (con Nehemías)', '1 Esdras'],
            ['Nehemías', 'Esdras B (con Esdras)', '2 Esdras'],
            ['—', 'Esdras A (1 Esdras)', '3 Esdras (apéndice)'],
            ['—', '—', '4 Esdras (apéndice): este libro']
          ],
          nota: 'En las Biblias en inglés, 4 Esdras se llama 2 Esdras. Sus capítulos 1–2 y 15–16 son añadidos cristianos.'
        }),
        cita('Romanos 8:18', '@@ro/8/18')
      ],
      texto: [
        'En el año 70 d.C., los romanos destruyeron Jerusalén y su templo. Unos treinta años después, un judío que había vivido esa catástrofe escribió un libro en el que Esdras, desde Babilonia, después de la primera destrucción, hace a Dios las preguntas que él mismo se hacía: ¿por qué Dios permite que una nación pecadora destruya a su pueblo? ¿Por qué son tan pocos los que se salvan? ¿Cuándo llegará el fin?',
        { h: 'Siete visiones' },
        'El libro tiene siete visiones. En las tres primeras, Esdras discute con el ángel Uriel, que le responde que los caminos de Dios no se pueden comprender del todo y que el fin está cerca. Después Esdras ve a una mujer que llora por su hijo muerto y se transforma en una ciudad gloriosa, la nueva Sion. Ve un águila con muchas alas, que representa a Roma, reprendida por un león, que es el Mesías. Y ve a un hombre que sube del mar, vence a las naciones y reúne a las tribus perdidas.',
        'El libro dice que el Mesías reinará cuatrocientos años, luego morirá, y el mundo volverá a un silencio de siete días antes de la resurrección y el juicio. Es una muestra de cómo algunos judíos imaginaban el fin, muy distinta de la enseñanza de los apóstoles sobre el Cristo que murió, resucitó para siempre y volverá.',
        { h: 'Los noventa y cuatro libros' },
        'En la última visión, Esdras dicta durante cuarenta días noventa y cuatro libros. Dios le manda publicar veinticuatro, para que los lean dignos e indignos, y guardar setenta en secreto para los sabios. Los veinticuatro son la Biblia hebrea, el mismo contenido de nuestro Antiguo Testamento. Así, hacia el año 100, un libro apócrifo da testimonio del canon que Israel reconocía.',
        { h: 'Un libro con añadidos cristianos' },
        'Los cristianos le agregaron dos capítulos al principio y dos al final. De uno de esos añadidos viene la oración por los difuntos que pide para ellos el descanso eterno y la luz perpetua, que la liturgia católica usa en las misas de difuntos. La Iglesia católica no lo considera Escritura; la Vulgata lo imprimió en un apéndice.',
        { h: 'La respuesta del Nuevo Testamento' },
        'Las preguntas de 4 Esdras son las mismas de Habacuc: «¿por qué ves a los menospreciadores, y callas cuando destruye el impío al más justo que él?» (Hab 1:13). El Nuevo Testamento no responde con cálculos sobre el fin, sino con la cruz y la resurrección de Cristo, y con una esperanza segura: «tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse» (Ro 8:18).'
      ],
      pensar: 'El autor de 4 Esdras escribió con el dolor de ver su ciudad destruida. ¿Qué preguntas le haces tú a Dios en medio del sufrimiento, y dónde buscas la respuesta?'
    }
  ];

  window.__APO.pseudo = pseudo;
})();
