(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, linea, R } = window.__CR;

  // ================== RUTA VII. Los últimos años de los apóstoles ==================
  const apostoles = [
    {
      id: 'jacobo', n: 'La muerte de Jacobo, el hermano del Señor', ref: 'Gálatas 1:19; 2:9; Hechos 15:13-21; 21:18; Santiago 1:1; 5:7-8', fecha: 62,
      visual: [
        img('cr-jacobo-justo.webp', 'Un hombre de unos sesenta años, de barba gris y túnica de lino blanco, ora de rodillas sobre las losas de un pórtico del templo de Jerusalén, al amanecer', 'Jacobo, el hermano del Señor, llamado «el Justo» por los primeros cristianos.'),
        tabla({
          titulo: 'Jacobo en el Nuevo Testamento',
          cab: ['Momento', 'Pasaje'],
          filas: [
            ['Hermano de Jesús que no creía en él durante el ministerio', 'Mr 6:3; Jn 7:5'],
            ['Testigo del Señor resucitado', '1 Co 15:7'],
            ['Con los apóstoles y María, en el aposento alto', 'Hch 1:14'],
            ['Pablo lo visita en Jerusalén', 'Gá 1:19'],
            ['Una de las «columnas» de la iglesia', 'Gá 2:9'],
            ['Habla en el concilio de Jerusalén', 'Hch 15:13-21'],
            ['Recibe a Pablo y la ofrenda en el 57', 'Hch 21:18'],
            ['Escribe la carta de Santiago', 'Stg 1:1']
          ]
        })
      ],
      texto: [
        'Después de que Hechos termina, en el 62, la historia sigue con fuentes fuera de la Biblia. El primer hecho fechado ocurrió ese mismo año en Jerusalén: la muerte de Jacobo, el hermano del Señor, el líder de la iglesia de Jerusalén y autor de la carta de Santiago.',
        { h: 'De incrédulo a columna' },
        'Durante el ministerio de Jesús, «ni aun sus hermanos creían en él» (Jn 7:5). Pero Jesús resucitado se le apareció a Jacobo (1 Co 15:7), y desde entonces aparece entre los discípulos que oraban en el aposento alto (Hch 1:14). Con los años llegó a ser una de las «columnas» de la iglesia (Gá 2:9). Fue él quien propuso la decisión del concilio (Hch 15:13-21) y quien recibió a Pablo cuando llevó la ofrenda a Jerusalén en el 57 (Hch 21:18).',
        { h: 'Lo que cuenta Josefo' },
        'Josefo cuenta su muerte con detalle. Cuando murió el gobernador Festo, hacia el 62, y su sucesor Albino todavía estaba en camino, el sumo sacerdote Anás, hijo del Anás de los evangelios, aprovechó la falta de autoridad romana. Reunió al Sanedrín y presentó a «Jacobo, hermano de Jesús, llamado el Cristo», con algunos otros, acusándolos de violar la ley, y los hizo apedrear. Según Josefo, los judíos más justos y cumplidores de la ley se indignaron y pidieron al rey Agripa II y a Albino que lo destituyeran. Anás perdió el cargo después de solo tres meses.',
        'El dato es valioso por dos razones. Fija la muerte de Jacobo en el 62, y es un testimonio de un historiador judío que no era cristiano y que nombra a Jesús «llamado el Cristo» y a su hermano Jacobo. Escritores cristianos posteriores, como Hegesipo en el siglo II, recordaban a Jacobo como «el Justo», un hombre de oración que pasaba tanto tiempo de rodillas en el templo que tenía las rodillas endurecidas como las de un camello.',
        { h: 'Una fecha para la carta de Santiago' },
        'Si Jacobo murió en el 62, su carta tiene que ser anterior. Muchos la fechan entre el 45 y el 49, antes del concilio, por su tono judío y porque no menciona la controversia sobre los gentiles. Es probablemente uno de los primeros libros del Nuevo Testamento. Jacobo exhortó a sus lectores: «Tened también vosotros paciencia, y afirmad vuestros corazones; porque la venida del Señor se acerca» (Stg 5:8). Él mismo fue fiel hasta el fin.',
        ir('Ver en El mundo judío: Santiago y los fariseos que creyeron', R.mundo + '#despues/2')
      ],
      pensar: 'Jacobo no creía en su propio hermano hasta que lo vio resucitado, y terminó dando su vida por él. ¿Qué te dice su historia sobre el poder de la resurrección para transformar a alguien que estaba cerca de Jesús, pero no lo conocía?'
    },
    {
      id: 'neron', n: 'Nerón y el incendio de Roma', ref: '1 Pedro 4:12-16; 5:13; Romanos 13:1-7; Hebreos 10:32-34', fecha: [64, 68],
      visual: [
        img('cr-incendio-roma.webp', 'De noche, un barrio de Roma arde entre edificios de varios pisos, mientras gente con antorchas y bultos huye por una calle estrecha bajo un cielo rojo de humo', 'El incendio de Roma, en julio del 64.'),
        tabla({
          titulo: 'Los años de Nerón',
          cab: ['Año', 'Qué pasó'],
          filas: [
            ['54', 'Nerón, emperador a los dieciséis años; los primeros años son de buen gobierno'],
            ['57', 'Pablo escribe a los romanos: las autoridades son servidoras de Dios (Ro 13:1-7)'],
            ['59–60', 'Pablo apela a César, es decir, a Nerón (Hch 25:11)'],
            ['Julio del 64', 'Gran incendio de Roma; Nerón culpa a los cristianos'],
            ['64–68', 'Persecución en Roma; muerte de Pedro y de Pablo según la tradición'],
            ['66', 'Comienza la guerra judía'],
            ['Junio del 68', 'Nerón se suicida; año de los cuatro emperadores (68–69)']
          ]
        })
      ],
      texto: [
        'En la noche del 18 al 19 de julio del año 64 se desató en Roma un incendio que duró seis días. De los catorce barrios de la ciudad, tres quedaron completamente destruidos y siete muy dañados. Corrió el rumor de que el propio Nerón lo había provocado para reconstruir la ciudad a su gusto.',
        { h: 'El testimonio de Tácito' },
        'El historiador romano Tácito, que escribió unos cincuenta años después y despreciaba a los cristianos, cuenta lo que siguió. Para acallar el rumor, Nerón culpó a los que el pueblo llamaba cristianos. Tácito explica que el nombre venía de Cristo, quien había sido ejecutado en tiempos de Tiberio por el procurador Poncio Pilato. Dice que muchos fueron arrestados y condenados, no tanto por el incendio como por su supuesto odio al género humano, y describe crueldades terribles: algunos fueron cubiertos con pieles de animales y despedazados por perros, otros crucificados, y otros quemados como antorchas para iluminar los jardines del emperador.',
        'Es la primera persecución de cristianos ordenada por un emperador, y el testimonio de Tácito, un enemigo de la fe, confirma tres datos del Nuevo Testamento: que Jesús fue ejecutado bajo Pilato, en tiempos de Tiberio; que el movimiento comenzó en Judea; y que en el 64 ya había en Roma «una gran multitud» de cristianos.',
        { h: 'Las cartas de esos años' },
        'La primera carta de Pedro, escrita desde Roma, a la que llama «Babilonia» (1 P 5:13), habla a creyentes que sufren por el nombre de Cristo: «Amados, no os sorprendáis del fuego de prueba que os ha sobrevenido» (1 P 4:12). Muchos la fechan hacia el 63 o el 64, justo antes o al comienzo de la persecución. Pedro exhorta a sufrir como cristianos, sin avergonzarse, y a glorificar a Dios por ello (1 P 4:16).',
        'Pocos años antes, Pablo había escrito a los romanos que las autoridades están puestas por Dios (Ro 13:1). Lo escribió durante los primeros años de Nerón, cuando el gobierno era todavía moderado. La persecución no cambió esa enseñanza, pero mostró sus límites: cuando la autoridad exige negar a Cristo, «es necesario obedecer a Dios antes que a los hombres» (Hch 5:29).',
        ir('Ver en El imperio romano: de los mártires a la caída del imperio', R.romano + '#historia/6')
      ],
      pensar: 'Los cristianos de Roma fueron acusados injustamente de un crimen que no cometieron, y aun así siguieron confesando a Cristo. ¿Cómo reaccionas cuando te acusan injustamente por causa de tu fe?'
    },
    {
      id: 'pedro-pablo', n: 'La muerte de Pedro y de Pablo', ref: 'Juan 21:18-19; 2 Pedro 1:13-15; 2 Timoteo 4:6-8, 16-18', fecha: [64, 68],
      visual: [
        img('../viajes-pablo/img/vp-segunda-prision.webp', 'Pablo, anciano y encadenado, escribe en un pergamino a la luz de una pequeña lámpara en una celda de piedra', 'La segunda prisión de Pablo en Roma, de donde escribió 2 Timoteo.'),
        cita('2 Timoteo 4:6-8', '@@2ti/4/6-8'),
        tabla({
          titulo: 'Después de Hechos',
          cab: ['Fecha probable', 'Pablo', 'Pedro'],
          filas: [
            ['62', 'Liberado tras dos años en Roma', ''],
            ['62–66', 'Nuevos viajes: Creta, Éfeso, Macedonia, Nicópolis; escribe 1 Timoteo y Tito', 'En Roma con Marcos; escribe 1 Pedro (c. 63–64)'],
            ['64–67', '', 'Escribe 2 Pedro; muere crucificado en Roma'],
            ['66–67', 'Segunda prisión en Roma; escribe 2 Timoteo', ''],
            ['c. 67', 'Muere decapitado en Roma', '']
          ],
          nota: 'Fechas según Clemente de Roma (hacia el 95), Ireneo y Eusebio; no las da la Biblia.'
        })
      ],
      texto: [
        'Ni Hechos ni las cartas cuentan la muerte de Pedro y de Pablo. Pero las cartas escritas en sus últimos años muestran que ambos la esperaban pronto, y los escritores cristianos más antiguos dicen que los dos murieron en Roma durante la persecución de Nerón.',
        { h: 'Pablo: «he acabado la carrera»' },
        'Las cartas a Timoteo y a Tito hablan de viajes que no aparecen en Hechos: Pablo dejó a Tito en Creta (Tit 1:5), pensaba pasar el invierno en Nicópolis (Tit 3:12) y encargó a Timoteo cuidar la iglesia de Éfeso (1 Ti 1:3). Por eso muchos entienden que Pablo fue liberado hacia el 62 y viajó varios años más. Clemente de Roma, hacia el 95, dice que Pablo llegó «hasta el límite de occidente», quizás España. Luego volvió a ser arrestado. En su última carta, la segunda a Timoteo, escribe desde una prisión más dura, abandonado por muchos: «yo ya estoy para ser sacrificado, y el tiempo de mi partida está cercano. He peleado la buena batalla, he acabado la carrera, he guardado la fe» (2 Ti 4:6-7). Según la tradición, como ciudadano romano fue decapitado, hacia el 67.',
        { h: 'Pedro: «como nuestro Señor me ha declarado»' },
        'Jesús le había anunciado a Pedro cómo moriría: «cuando ya seas viejo, extenderás tus manos, y te ceñirá otro, y te llevará a donde no quieras. Esto dijo, dando a entender con qué muerte había de glorificar a Dios» (Jn 21:18-19). Treinta años después, Pedro escribió en su segunda carta que pronto debía «abandonar el cuerpo, como nuestro Señor Jesucristo me ha declarado» (2 P 1:14). La tradición cuenta que fue crucificado en Roma durante la persecución de Nerón, entre el 64 y el 67; según una tradición posterior, pidió ser crucificado cabeza abajo por no considerarse digno de morir como su Señor.',
        { h: 'Lo que importa' },
        'Clemente de Roma, que conoció a la generación de los apóstoles, recordó a los dos como ejemplos de perseverancia: sufrieron por envidia de otros, dieron testimonio ante los gobernantes y alcanzaron el premio. Los dos habían anunciado que el que sirve a Cristo debe estar dispuesto a sufrir con él. Ninguno de los dos huyó, y ninguno negó a su Señor.',
        ir('Ver en Los viajes de Pablo: después de Hechos', R.pablo + '#despues/1')
      ],
      pensar: 'Pedro, que una vez negó a Jesús por miedo, murió por él; Pablo, que lo persiguió, terminó su carrera guardando la fe. ¿Qué te enseña su final sobre lo que Dios puede hacer con nuestros comienzos?'
    },
    {
      id: 'guerra', n: 'La guerra judía y la caída de Jerusalén', ref: 'Lucas 19:41-44; 21:20-24; Mateo 24:1-2; Daniel 9:26', fecha: [66, 73],
      visual: [
        pasos([
          { t: '66: rebelión en Jerusalén; el gobernador de Siria se retira (Josefo)', fecha: 66, estado: { view: V.palestina, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea', 'pela', 'gamla', 'jotapata'] } },
          { t: '67–68: Vespasiano somete Galilea, la costa y Perea; los cristianos huyen a Pela', fecha: [67, 68], estado: { view: V.palestina, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea', 'pela', 'gamla', 'jotapata', 'seforis'], trazos: ['mj-vespasiano-67', 'mj-vespasiano-68'] } },
          { t: '70: Tito sitia Jerusalén; en agosto, el templo es incendiado', fecha: 70, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea'], trazos: ['mj-tito-70'] } },
          { t: '73–74: caída de Masada', fecha: 73, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['jerusalen', 'masada', 'herodion', 'maqueronte'], trazos: ['mj-silva-73'] } }
        ]),
        img('cr-huida-pela.webp', 'Un grupo de familias judías con burros cargados cruza el río Jordán por un vado, hacia las colinas de Galaad, mientras a lo lejos se ven columnas de humo', 'Los cristianos de Jerusalén huyen a Pela, al otro lado del Jordán (hacia el 66–68).'),
        img('../imperio-romano/img/roma-triunfo-tito.webp', 'Soldados romanos llevan en procesión triunfal el candelero de oro y las trompetas del templo de Jerusalén por las calles de Roma', 'El triunfo de Tito en Roma, en el 71, con los objetos del templo.'),
        cita('Lucas 21:20-24', '@@lc/21/20-24')
      ],
      texto: [
        'Cuarenta años antes, Jesús había llorado sobre Jerusalén y anunciado que sus enemigos la rodearían y no dejarían en ella «piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación» (Lc 19:44). Al salir del templo, dijo a sus discípulos que de aquellos edificios no quedaría piedra sobre piedra (Mt 24:2). La profecía se cumplió en el año 70, dentro de la misma generación que la escuchó.',
        { h: 'La guerra' },
        'En el 66, los abusos del gobernador Floro y el clima de tensión hicieron estallar una rebelión en Jerusalén. El gobernador de Siria, Cestio Galo, llegó con un ejército, sitió la ciudad y, de manera inesperada, se retiró. Nerón envió entonces a Vespasiano, que en el 67 y el 68 sometió Galilea, la costa y Perea. Cuando Nerón murió, en el 68, la guerra se detuvo un tiempo, y en el 69 Vespasiano fue proclamado emperador. Su hijo Tito continuó la campaña y en la primavera del 70 sitió Jerusalén. Después de meses de hambre y luchas internas, la ciudad cayó. En agosto, el templo fue incendiado. Masada, la última fortaleza, cayó en el 73 o el 74.',
        { h: 'La huida a Pela' },
        'Jesús había dado a sus discípulos una instrucción clara: «cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado. Entonces los que estén en Judea, huyan a los montes» (Lc 21:20-21). El historiador Eusebio, en el siglo IV, cuenta que antes de la guerra los cristianos de Jerusalén, advertidos por una revelación, salieron de la ciudad y se establecieron en Pela, una ciudad de la Decápolis al otro lado del Jordán. Muchos piensan que aprovecharon la retirada de Cestio Galo en el 66. Así, la iglesia se salvó de la catástrofe.',
        { h: 'El fin de una época' },
        'Con el templo terminaron los sacrificios, el sacerdocio y el Sanedrín. Daniel lo había anunciado: después de que se quitara la vida al Mesías, «el pueblo de un príncipe que ha de venir destruirá la ciudad y el santuario» (Dn 9:26). El pueblo era el romano; el príncipe que ha de venir, según la lectura futurista, es el que hará un pacto en la semana setenta, todavía en el futuro. Para la iglesia, la caída del templo confirmó lo que enseñaba la carta a los Hebreos: Cristo, con una sola ofrenda, había hecho perfectos para siempre a los santificados (He 10:14), y ya no era necesario otro sacrificio.',
        ir('Ver en El mundo judío: la gran rebelión y la caída del templo', R.mundo + '#despues/4'),
        ir('Ver en El imperio romano: la destrucción de Jerusalén', R.romano + '#historia/5')
      ],
      pensar: 'Los cristianos de Jerusalén se salvaron porque creyeron y obedecieron una palabra de Jesús dicha casi cuarenta años antes. ¿Qué palabras de Jesús estás tomando en serio para tu vida y tu futuro?'
    },
    {
      id: 'juan-efeso', n: 'Juan en Éfeso', ref: 'Juan 21:20-25; 1 Juan 1:1-4; 2:18; 2 Juan 1; 3 Juan 1', fecha: [70, 98],
      visual: [
        img('cr-juan-efeso.webp', 'El apóstol Juan, anciano de barba blanca larga, enseña sentado en una casa de Éfeso a hombres, mujeres y niños que lo escuchan con atención', 'Juan, el último de los apóstoles, en Éfeso.'),
        tabla({
          titulo: 'Los escritos de Juan',
          cab: ['Libro', 'Fecha probable', 'Desde dónde'],
          filas: [
            ['Evangelio de Juan', 'c. 85–90', 'Éfeso'],
            ['1 Juan', 'c. 85–95', 'Éfeso'],
            ['2 y 3 Juan', 'c. 85–95', 'Éfeso'],
            ['Apocalipsis', 'c. 95', 'La isla de Patmos']
          ],
          nota: 'Algunos fechan el Evangelio de Juan antes del 70; ver la estación VIII.2.'
        }),
        cita('Juan 21:20-24', '@@jn/21/20-24')
      ],
      texto: [
        'De los doce apóstoles, Juan fue el que vivió más tiempo. Era probablemente el más joven, y los escritores cristianos del siglo II coinciden en que pasó sus últimos años en Éfeso, la gran ciudad de Asia donde Pablo había trabajado tres años. Ireneo de Lyon, que de joven escuchó a Policarpo, discípulo de Juan, dice que Juan vivió en Éfeso hasta los tiempos del emperador Trajano, que reinó desde el 98.',
        { h: 'Un rumor que Juan corrigió' },
        'El final del Evangelio de Juan cuenta un detalle curioso. Jesús le había dicho a Pedro sobre Juan: «Si quiero que él quede hasta que yo venga, ¿qué a ti?». Y «este dicho se extendió entonces entre los hermanos, que aquel discípulo no moriría». Juan aclara que Jesús no dijo eso (Jn 21:22-23). La aclaración tiene sentido si Juan era ya muy anciano y algunos esperaban que el Señor volviera antes de su muerte; o si ya había muerto, y sus discípulos, que añadieron que «su testimonio es verdadero» (Jn 21:24), quisieron explicar que la promesa no había fallado.',
        { h: 'El último evangelio' },
        'La mayoría ubica el Evangelio de Juan hacia el 85 o el 90. Juan conocía los otros evangelios y escogió contar otras cosas: el ministerio en Judea, las fiestas, las largas conversaciones de Jesús y sus siete señales, para que sus lectores creyeran que Jesús es el Cristo, el Hijo de Dios, y tuvieran vida en su nombre (Jn 20:30-31). Sus tres cartas, de los mismos años, enfrentan a maestros que negaban que Jesucristo hubiera venido en carne (1 Jn 4:2-3; 2 Jn 7).',
        { h: 'Un testigo hasta el fin' },
        'Juan comenzó su primera carta con las palabras de un testigo: «Lo que era desde el principio, lo que hemos oído, lo que hemos visto con nuestros ojos, lo que hemos contemplado, y palparon nuestras manos tocante al Verbo de vida» (1 Jn 1:1). Sesenta años después de la cruz, el último apóstol seguía dando el mismo testimonio. Una tradición antigua cuenta que, ya muy anciano, lo llevaban en brazos a la reunión de la iglesia y solo repetía: «Hijitos, amaos los unos a los otros».'
      ],
      pensar: 'Juan dio testimonio de Jesús durante casi setenta años, desde el Jordán hasta Éfeso. ¿Qué testimonio quieres que dejen tus palabras y tu vida cuando seas anciano?'
    },
    {
      id: 'patmos', n: 'Domiciano y Patmos', ref: 'Apocalipsis 1:1-3, 9-11; 2:1–3:22', fecha: [95, 100],
      visual: [
        img('../imperio-romano/img/roma-juan-patmos.webp', 'Un anciano de barba blanca, de pie sobre una roca de la isla de Patmos, contempla el mar Egeo al amanecer', 'Juan en Patmos, «por causa de la palabra de Dios» (Ap 1:9).'),
        mapa({ view: V.egeo, capas: ['roma-117'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia', 'laodicea', 'roma'], trazos: ['siete-iglesias'] }),
        cita('Apocalipsis 1:9-11', '@@ap/1/9-11')
      ],
      texto: [
        'El último libro de la Biblia se escribió en la isla de Patmos, en el mar Egeo, a unos cien kilómetros de Éfeso. Juan dice que estaba allí «por causa de la palabra de Dios y el testimonio de Jesucristo» (Ap 1:9): había sido desterrado por su fe.',
        { h: 'Bajo Domiciano' },
        'Ireneo de Lyon, a fines del siglo II, escribió que la visión fue vista «casi en nuestra generación, hacia el final del reinado de Domiciano». Domiciano, hijo de Vespasiano, gobernó del 81 al 96 y exigió que lo llamaran «señor y dios». En sus últimos años persiguió a quienes se negaban a darle culto, incluso a parientes suyos acusados de seguir costumbres judías. Por eso la mayoría de los estudiosos fecha el Apocalipsis hacia el 95. Cuando Domiciano fue asesinado, en el 96, su sucesor Nerva liberó a los desterrados, y según la tradición Juan volvió a Éfeso.',
        { posturas: {
          titulo: '¿Cuándo se escribió el Apocalipsis?',
          a: { n: 'Hacia el 95, bajo Domiciano', t: 'Es el testimonio de Ireneo, que conoció a discípulos de Juan, y el de otros escritores antiguos. Encaja con la situación de las siete iglesias: Laodicea, rica y autosuficiente (Ap 3:17), se había reconstruido sola después de un terremoto en el 60; la iglesia de Éfeso había dejado su primer amor (Ap 2:4), algo que requiere tiempo desde su fundación; y el culto al emperador presionaba a los cristianos de Asia.' },
          b: { n: 'Hacia el 68, bajo Nerón', t: 'Otros lo ubican después de la persecución de Nerón y antes de la caída de Jerusalén, porque Apocalipsis 11:1-2 manda medir el templo, y piensan que todavía estaba en pie. Esta fecha suele ir con la lectura que ve cumplida la mayor parte del libro en la destrucción de Jerusalén en el 70.' },
          c: 'El testimonio más antiguo y los detalles de las cartas a las iglesias favorecen el 95. El templo de Apocalipsis 11 es parte de la visión de los tiempos del fin y no exige que el templo de Herodes siguiera en pie. La lectura futurista del libro no depende de la fecha, pero la del 95 encaja mejor con ella: el Apocalipsis no anuncia la caída de Jerusalén, ya ocurrida, sino los acontecimientos que precederán a la venida de Cristo.'
        } },
        { h: 'El fin de la era apostólica' },
        'Juan murió en Éfeso hacia el año 100, en tiempos de Trajano. Con él terminó la generación de los testigos que habían visto al Señor, y terminó también la revelación que Dios dio a la iglesia por medio de los apóstoles. El último libro de la Biblia cierra con una promesa que sigue en pie: «Ciertamente vengo en breve» (Ap 22:20).',
        ir('Ver en Apocalipsis: Patmos y la fecha', R.apocalipsis + '#introduccion/3')
      ],
      pensar: 'Juan, desterrado y anciano, recibió en una isla solitaria la revelación de la victoria final de Cristo. ¿Qué perspectiva te da el Apocalipsis cuando te sientes aislado o en tiempos difíciles?'
    }
  ];

  // ================== RUTA VIII. Cuándo se escribió cada libro ==================
  const libros = [
    {
      id: 'veintisiete', n: 'Los 27 libros en orden', ref: 'Lucas 1:1-4; 2 Pedro 3:15-16; Apocalipsis 22:18-19', fecha: [45, 95],
      visual: [
        esq('cr-libros.svg', 'Línea de tiempo del 40 al 100 d.C. con los 27 libros del Nuevo Testamento ubicados en el año probable en que se escribieron, agrupados en evangelios y Hechos, cartas de Pablo, cartas generales y escritos de Juan, con una línea vertical en el año 70', 'Los 27 libros en el orden en que se escribieron (fechas probables).', 'Los 27 libros'),
        tabla({
          titulo: 'Fechas probables de los 27 libros',
          cab: ['Libro', 'Fecha probable', 'Desde dónde'],
          filas: [
            ['Santiago', 'c. 45–49', 'Jerusalén'],
            ['Gálatas', 'c. 48–49', 'Antioquía'],
            ['1 y 2 Tesalonicenses', 'c. 50–51', 'Corinto'],
            ['Mateo', 'c. 50–60', 'Judea o Antioquía'],
            ['1 Corintios', 'c. 55–56', 'Éfeso'],
            ['2 Corintios', 'c. 56', 'Macedonia'],
            ['Romanos', 'c. 57', 'Corinto'],
            ['Marcos', 'c. 55–65', 'Roma'],
            ['Lucas', 'c. 60–61', 'Cesarea o Roma'],
            ['Efesios, Colosenses, Filemón', 'c. 60–61', 'Roma'],
            ['Filipenses', 'c. 61–62', 'Roma'],
            ['Hechos', 'c. 62', 'Roma'],
            ['1 Timoteo, Tito', 'c. 62–64', 'Macedonia'],
            ['1 Pedro', 'c. 63–64', 'Roma'],
            ['2 Pedro', 'c. 64–67', 'Roma'],
            ['Judas', 'c. 65–70', 'Desconocido'],
            ['Hebreos', 'c. 64–68', 'Desconocido (¿Italia?)'],
            ['2 Timoteo', 'c. 66–67', 'Roma'],
            ['Juan', 'c. 85–90', 'Éfeso'],
            ['1, 2 y 3 Juan', 'c. 85–95', 'Éfeso'],
            ['Apocalipsis', 'c. 95', 'Patmos']
          ],
          nota: 'Fechas aproximadas según estudiosos que aceptan la autoría tradicional. Varias se discuten; las estaciones siguientes explican por qué.'
        })
      ],
      texto: [
        'El Nuevo Testamento no está ordenado según el momento en que se escribió cada libro. Primero vienen los evangelios y Hechos, que cuentan la historia; después, las cartas de Pablo, ordenadas más o menos de la más larga a la más corta; luego, las cartas generales, y al final, el Apocalipsis. Si se ordenan por fecha, el panorama cambia.',
        { h: 'Primero las cartas' },
        'Los primeros libros que se escribieron no fueron los evangelios, sino cartas. La de Santiago y la de Pablo a los Gálatas son probablemente de fines de los años 40, y las dos a los Tesalonicenses, del 50 o el 51. Esas cartas ya dan por sabido lo esencial de la historia de Jesús: Pablo recuerda que Cristo murió por nuestros pecados, fue sepultado, resucitó al tercer día y apareció a muchos testigos, y dice que eso es lo que él mismo había recibido (1 Co 15:3-8). La fe en Jesús resucitado como Señor se proclamaba desde el principio.',
        { h: 'Después los evangelios' },
        'Los evangelios se pusieron por escrito cuando los apóstoles empezaban a envejecer y el evangelio llegaba a lugares lejanos. Antes, la historia de Jesús se enseñaba de memoria, con cuidado, en las iglesias, como lo hacían los maestros judíos con la enseñanza de sus rabinos. Lucas dice que ya «muchos» habían escrito relatos ordenados antes que él (Lc 1:1). Mateo, Marcos y Lucas se escribieron probablemente entre el 50 y el 65; Juan, más tarde.',
        { h: 'Una generación' },
        'Con las fechas que siguen muchos estudiosos conservadores, todo el Nuevo Testamento se escribió en unos cincuenta años, entre el 45 y el 95, y casi todo antes del 70. Fueron escritos por apóstoles o por sus colaboradores cercanos, cuando todavía vivían muchos testigos de los hechos. Ya en vida de los apóstoles, las cartas de Pablo se leían junto con «las otras Escrituras» (2 P 3:15-16).',
        'El autor, la ocasión y el mensaje de cada libro se estudian en el recurso Introducción al Nuevo Testamento.',
        { ir: { t: 'Abrir Introducción al Nuevo Testamento', a: '../../introduccion-nuevo-testamento/' } },
        ir('Ver en La Palabra de Dios: cómo se formó el canon', R.palabra)
      ],
      pensar: 'Antes de que existiera un evangelio escrito, la iglesia ya proclamaba que Jesús murió por nuestros pecados y resucitó. ¿Es ese mensaje también el centro de tu fe?'
    },
    {
      id: 'evangelios-hechos', n: 'Los evangelios y Hechos', ref: 'Lucas 1:1-4; Hechos 1:1-2; 28:30-31; Lucas 21:20-24', fecha: [50, 90],
      visual: [
        img('../hechos/img/hechos-lucas-escribe.webp', 'Lucas, médico de barba corta, escribe en un rollo junto a una mesa con otros rollos y tablillas, en una habitación iluminada por una ventana', 'Lucas escribe su obra en dos tomos.'),
        tabla({
          titulo: 'Por qué Hechos fija la fecha de Lucas',
          cab: ['Hecho', 'Fecha', '¿Lo menciona Hechos?'],
          filas: [
            ['Pablo llega a Roma y pasa dos años en una casa alquilada', '60–62', 'Sí: así termina el libro'],
            ['Muerte de Jacobo, el hermano del Señor', '62', 'No'],
            ['Persecución de Nerón', '64', 'No'],
            ['Muerte de Pedro y de Pablo', 'c. 64–67', 'No'],
            ['Destrucción de Jerusalén', '70', 'No']
          ]
        })
      ],
      texto: [
        'Ningún evangelio dice cuándo se escribió, pero hay un punto de partida firme: Hechos.',
        { h: 'Hechos y Lucas' },
        'Hechos termina con Pablo en Roma, esperando su juicio, predicando «abiertamente y sin impedimento» durante dos años (Hch 28:30-31). Lucas no cuenta el resultado del juicio, ni la muerte de Jacobo en el 62, ni la persecución de Nerón, ni la muerte de Pedro y Pablo, ni la destrucción de Jerusalén, que habría confirmado de manera impresionante las palabras de Jesús que el mismo Lucas registra (Lc 21:20-24). La explicación más sencilla es que escribió Hechos hacia el 62, antes de esos hechos. Y como Hechos es la segunda parte de una obra cuya primera parte es el Evangelio de Lucas (Hch 1:1), el evangelio es anterior: hacia el 60 o el 61, quizás preparado durante los dos años en que Pablo estuvo preso en Cesarea, cuando Lucas pudo entrevistar a testigos en Judea.',
        { h: 'Marcos y Mateo' },
        'Lucas dice que otros habían escrito antes que él (Lc 1:1), y la mayoría piensa que usó el Evangelio de Marcos. Los escritores del siglo II cuentan que Marcos escribió en Roma lo que predicaba Pedro. Si Lucas usó a Marcos, Marcos es de los años 50 o comienzos de los 60. Sobre Mateo, la tradición más antigua dice que fue el primero en escribir, para los creyentes judíos. Muchos lo fechan en los años 50 o 60.',
        { posturas: {
          titulo: '¿Antes o después del año 70?',
          a: { n: 'Antes del 70', t: 'Ninguno de los tres primeros evangelios presenta la destrucción del templo como algo ya ocurrido. Hechos termina hacia el 62 y Lucas es anterior. Las profecías de Jesús sobre Jerusalén se presentan como anuncios, con detalles que no corresponden a una descripción hecha después de los hechos. Esta postura sigue el testimonio de la iglesia antigua.' },
          b: { n: 'Después del 70', t: 'Muchos estudiosos ubican Marcos hacia el 70 y Mateo y Lucas entre el 80 y el 90. Su argumento principal es que Jesús no pudo anunciar con tanta precisión la caída de Jerusalén, y que por eso esos textos se escribieron después de la destrucción del templo.' },
          c: 'El argumento de la segunda postura parte de suponer que la profecía predictiva no es posible. Quien cree que Jesús es el Hijo de Dios no tiene razón para negar que anunció lo que iba a ocurrir. Los datos del propio Nuevo Testamento favorecen las fechas tempranas.'
        } },
        { h: 'Juan' },
        'El Evangelio de Juan se escribió probablemente en Éfeso, hacia el 85 o el 90. Algunos lo fechan antes del 70, porque dice que en Jerusalén «hay» un estanque con cinco pórticos (Jn 5:2). En todo caso, el autor conocía Jerusalén como un testigo: la arqueología encontró ese estanque junto a la iglesia de Santa Ana.',
        ir('Ver en Hechos: cuándo se escribió', R.hechos + '#introduccion/7'),
        ir('Ver en el estudio de Lucas: cuándo y dónde se escribió', '../../lucas/#introduccion/5')
      ],
      pensar: 'Lucas investigó con cuidado y habló con testigos para que Teófilo conociera bien la verdad de lo que había aprendido. ¿Cuánto esfuerzo pones tú en conocer bien lo que crees?'
    },
    {
      id: 'cartas-pablo', n: 'Las trece cartas de Pablo', ref: '1 Tesalonicenses 1:1; 1 Corintios 16:8; Romanos 15:25; Efesios 3:1; Filipenses 1:13; 2 Timoteo 4:6', fecha: [48, 67],
      visual: [
        esq('cr-pablo-cartas.svg', 'Línea de tiempo de los años 46 a 67 con los viajes de Pablo en franjas de color y sus trece cartas marcadas en el lugar y el año en que las escribió', 'Las cartas de Pablo en el orden en que las escribió.', 'Viajes y cartas'),
        tabla({
          titulo: 'Las cartas de Pablo en orden',
          cab: ['Grupo', 'Cartas', 'Años', 'Momento'],
          filas: [
            ['Primeras', 'Gálatas; 1 y 2 Tesalonicenses', '48–51', 'Después del primer viaje; segundo viaje, en Corinto'],
            ['Grandes cartas', '1 y 2 Corintios; Romanos', '55–57', 'Tercer viaje: Éfeso, Macedonia y Corinto'],
            ['De la prisión', 'Efesios, Colosenses, Filemón; Filipenses', '60–62', 'Primera prisión en Roma'],
            ['Pastorales', '1 Timoteo, Tito; 2 Timoteo', '62–67', 'Después de la liberación y segunda prisión']
          ]
        })
      ],
      texto: [
        'Las cartas de Pablo son los libros mejor fechados del Nuevo Testamento, porque casi todas dan pistas sobre dónde estaba Pablo y qué estaba haciendo. Unidas a Hechos, permiten ubicarlas con un margen de uno o dos años.',
        { h: 'Las primeras cartas' },
        'Gálatas, si fue escrita a las iglesias del primer viaje, es de hacia el 48 o el 49 (estación VI.1). Las dos cartas a los Tesalonicenses son seguras: Pablo las escribió desde Corinto, poco después de fundar la iglesia de Tesalónica, cuando Timoteo volvió con noticias (1 Ts 3:6; Hch 18:5). Eso las ubica en el 50 o el 51, en tiempos de Galión. Hablan mucho de la venida del Señor, porque los nuevos creyentes tenían preguntas sobre los que morían antes de ella (1 Ts 4:13-18).',
        { h: 'Las grandes cartas' },
        'Durante el tercer viaje, Pablo escribió las cartas más extensas. 1 Corintios, desde Éfeso, hacia el 55 o el 56 (1 Co 16:8); 2 Corintios, desde Macedonia, hacia el 56; y Romanos, desde Corinto, en el invierno del 56 al 57, antes de llevar la ofrenda a Jerusalén (Ro 15:25-26). En ellas Pablo expone con más detalle el evangelio de la gracia, los dones del Espíritu y la resurrección.',
        { h: 'Las cartas de la prisión' },
        'Efesios, Colosenses, Filemón y Filipenses se escribieron desde la cárcel (Ef 3:1; Col 4:18; Flm 1; Fil 1:13). La mayoría piensa que Pablo estaba en Roma, entre el 60 y el 62; algunos proponen Cesarea o una prisión en Éfeso. Efesios, Colosenses y Filemón fueron juntas, llevadas por Tíquico y Onésimo (Col 4:7-9). Filipenses, que menciona «la casa de César» y el pretorio (Fil 1:13; 4:22), parece la última del grupo, cuando Pablo esperaba la sentencia.',
        { h: 'Las cartas pastorales' },
        '1 Timoteo y Tito suponen viajes posteriores a Hechos, y 2 Timoteo, una segunda prisión que Pablo sabe definitiva (2 Ti 4:6). Por eso se fechan entre el 62 y el 67. Algunos estudiosos piensan que fueron escritas por discípulos de Pablo después de su muerte, pero las tres llevan su nombre, contienen detalles personales difíciles de inventar, como el capote que dejó en Troas (2 Ti 4:13), y la iglesia antigua las recibió como suyas.',
        ir('Ver en Los viajes de Pablo: trece cartas, un mapa', R.pablo + '#cartas/1')
      ],
      pensar: 'Pablo escribió cartas a iglesias reales, con problemas reales, y Dios las usó para enseñar a la iglesia de todos los tiempos. ¿Qué problema de tu vida o de tu iglesia podría encontrar respuesta en una de esas cartas?'
    },
    {
      id: 'generales', n: 'Las cartas generales y los escritos de Juan', ref: 'Hebreos 8:4; 10:1-2; 13:23-24; 1 Pedro 5:12-13; 2 Pedro 1:14; Judas 17-18', fecha: [45, 95],
      visual: [
        tabla({
          titulo: 'Las cartas generales',
          cab: ['Carta', 'Fecha probable', 'Pistas'],
          filas: [
            ['Santiago', 'c. 45–49', 'Tono judío; no menciona la cuestión de los gentiles; Jacobo murió en el 62'],
            ['1 Pedro', 'c. 63–64', 'Desde «Babilonia», es decir, Roma (5:13); sufrimientos por el nombre de Cristo'],
            ['2 Pedro', 'c. 64–67', 'Pedro sabe que morirá pronto (1:14); conoce cartas de Pablo (3:15-16)'],
            ['Judas', 'c. 65–70', 'Combate a los mismos falsos maestros que 2 Pedro'],
            ['Hebreos', 'c. 64–68', 'Los sacrificios del templo todavía se ofrecen (8:4; 10:1-2); Timoteo liberado (13:23)'],
            ['1, 2 y 3 Juan', 'c. 85–95', 'Escritas por el anciano Juan en Éfeso; falsos maestros que niegan la encarnación'],
            ['Apocalipsis', 'c. 95', 'Bajo Domiciano, en Patmos (1:9)']
          ]
        }),
        img('../apocalipsis/img/apo-lectura-iglesia.webp', 'En una casa del siglo I, un hombre lee en voz alta un rollo ante una iglesia reunida, a la luz de lámparas de aceite', 'Las cartas se leían en voz alta en las reuniones de la iglesia (Ap 1:3; Col 4:16).')
      ],
      texto: [
        'Las siete cartas que no son de Pablo se llaman «generales» porque, salvo 2 y 3 Juan, no van dirigidas a una iglesia o a una persona, sino a creyentes de varias regiones. Sus fechas se calculan por las pistas que contienen.',
        { h: 'Pedro y Judas' },
        'La primera carta de Pedro se escribió desde Roma, con la ayuda de Silvano, y menciona a Marcos (1 P 5:12-13). Habla de un «fuego de prueba» que ya ha llegado (1 P 4:12), por lo que muchos la fechan hacia el 63 o el 64, en los comienzos de la persecución de Nerón. La segunda carta es un testamento: Pedro sabe que pronto dejará el cuerpo (2 P 1:14) y advierte contra falsos maestros. Judas, hermano de Jacobo (Jud 1), combate a maestros muy parecidos, y por eso las dos cartas suelen fecharse en los mismos años, a mediados de los 60.',
        { h: 'Hebreos' },
        'La carta a los Hebreos no dice quién la escribió, pero da una pista importante sobre su fecha. Habla del sacerdocio y los sacrificios del templo en tiempo presente: hay «aún sacerdotes que presentan las ofrendas según la ley» (He 8:4), y los sacrificios se ofrecen «continuamente cada año» (He 10:1). Toda la carta argumenta que el antiguo pacto está «próximo a desaparecer» (He 8:13). Si el templo ya hubiera sido destruido, el autor difícilmente habría dejado de mencionarlo como prueba de su argumento. Por eso se fecha antes del 70, probablemente entre el 64 y el 68. La carta menciona que Timoteo había sido puesto en libertad (He 13:23).',
        { h: 'Los escritos de Juan' },
        'Las tres cartas de Juan y el Apocalipsis son los últimos libros del Nuevo Testamento. Las cartas se escribieron en Éfeso, entre el 85 y el 95, cuando ya habían salido de la iglesia algunos que negaban que Jesucristo hubiera venido en carne (1 Jn 2:18-19; 4:2-3). El Apocalipsis, hacia el 95, desde Patmos (estación VII.6). Con él se cerró el canon: la revelación que Dios dio por medio de los apóstoles quedó completa.',
        ir('Ver en De la Biblia a nosotros: cómo se copió el Nuevo Testamento', R.manuscritos)
      ],
      pensar: 'Estas cartas se escribieron para iglesias que sufrían, enfrentaban falsas enseñanzas o se cansaban de esperar. ¿Cuál de esas situaciones se parece más a la tuya hoy?'
    },
    {
      id: 'antes-del-70', n: '¿Por qué casi todo es anterior al 70?', ref: '1 Corintios 15:3-8; Hebreos 10:11-14; Juan 5:2; Lucas 1:2; 2 Pedro 1:16', fecha: [45, 100],
      visual: [
        foto('../de-la-biblia-a-nosotros/img/papiro-p52.webp', 'Fragmento de papiro con forma aproximadamente triangular, del tamaño de una tarjeta, con letras griegas en tinta oscura', 'Papiro 52 (Biblioteca John Rylands, Mánchester): Juan 18:31-33, copiado en Egipto en la primera mitad del siglo II.', 'Dominio público, vía Wikimedia Commons'),
        tabla({
          titulo: 'El gran silencio',
          cab: ['Si el libro fuera posterior al 70, esperaríamos…', 'Pero…'],
          filas: [
            ['Que Hebreos usara la caída del templo como prueba de que los sacrificios terminaron', 'Habla de sacerdotes que todavía ofrecen (He 8:4; 10:11)'],
            ['Que Hechos contara la muerte de Pablo, de Pedro y de Jacobo', 'Termina con Pablo vivo en Roma, hacia el 62'],
            ['Que los evangelios destacaran el cumplimiento de las palabras de Jesús sobre el templo', 'Las presentan solo como anuncio (Mt 24:2; Lc 21:20)'],
            ['Que las cartas de Pablo reflejaran la persecución de Nerón', 'Romanos habla bien de las autoridades (Ro 13:1-7)']
          ]
        })
      ],
      texto: [
        'Al ordenar los libros por fecha, aparece un hecho llamativo: con la excepción de los escritos de Juan, todos los libros del Nuevo Testamento son probablemente anteriores al año 70. Ninguno habla de la destrucción de Jerusalén y del templo como de algo ya ocurrido, aunque fue el hecho más traumático de la historia judía de ese siglo y habría confirmado las palabras de Jesús.',
        { h: 'Un silencio que habla' },
        'El silencio es especialmente notable en Hebreos, cuyo argumento central es que los sacrificios del templo ya no son necesarios porque Cristo ofreció «una vez para siempre un solo sacrificio» (He 10:12). Si el templo ya hubiera sido destruido, ¿qué mejor prueba? Y en Hechos, que termina sin contar la muerte de Pablo, aunque el libro entero conduce a su juicio ante el César. La explicación más sencilla es que esos hechos todavía no habían ocurrido.',
        { h: 'Escritos por testigos' },
        'Si los libros se escribieron entre el 45 y el 70, sus autores escribieron cuando todavía vivían muchas personas que habían visto y oído a Jesús. Pablo podía decir que el Señor resucitado se había aparecido a más de quinientos hermanos a la vez, «de los cuales muchos viven aún» (1 Co 15:6). Era una invitación a preguntarles. Pedro escribió: «no os hemos dado a conocer el poder y la venida de nuestro Señor Jesucristo siguiendo fábulas artificiosas, sino como habiendo visto con nuestros propios ojos su majestad» (2 P 1:16).',
        { h: 'Las copias más antiguas' },
        'Hay además evidencia material. El fragmento de papiro más antiguo que se conoce del Nuevo Testamento, el Papiro 52, contiene unos versículos de Juan 18 y fue copiado en Egipto en la primera mitad del siglo II. Si el último evangelio ya se copiaba y circulaba en Egipto pocos años después del 100, no puede haberse escrito mucho después de la fecha que da la tradición. Y hacia el 95, Clemente de Roma ya citaba o aludía a Hebreos y a varias cartas de Pablo.',
        { h: 'La plenitud de los tiempos' },
        'Esta cronología termina donde empezó: en el tiempo de Dios. En un siglo, Dios envió a su Hijo, lo levantó de los muertos, derramó su Espíritu, formó su iglesia entre judíos y gentiles y dejó su Palabra escrita por testigos. Ahora el reloj de la historia avanza hacia el último acontecimiento anunciado: el regreso de Cristo, cuyo día y hora nadie sabe (Mt 24:36), pero que es tan seguro como todo lo que ya se cumplió.',
        linea('Volver a la línea de tiempo completa')
      ],
      pensar: 'El Nuevo Testamento fue escrito por testigos que dieron su vida por lo que vieron. ¿Qué responsabilidad tienes tú, que has recibido su testimonio, de seguir anunciándolo?'
    }
  ];

  const E = window.__CR;
  // Línea de tiempo por ruta: la general y las de cada período
  const hitos = [
    { a: -4, t: 'Muere Herodes' }, { a: 29, t: 'Bautismo' }, { a: 33, t: 'Cruz y Pentecostés' },
    { a: 49, t: 'Concilio' }, { a: 64, t: 'Incendio de Roma' }, { a: 70, t: 'Cae el templo' }, { a: 95, t: 'Patmos' }
  ];
  const L = {
    general: { desde: -8, hasta: 100, hitos },
    nacimiento: { desde: -8, hasta: 30, hitos: [{ a: -5, t: 'Nace Jesús' }, { a: -4, t: 'Muere Herodes' }, { a: 6, t: 'Judea, provincia' }, { a: 8, t: 'Jesús a los doce' }, { a: 14, t: 'Tiberio' }, { a: 26, t: 'Pilato' }] },
    ministerio: { desde: 26, hasta: 34, hitos: [{ a: 26, t: 'Pilato' }, { a: [28, 29], t: 'Año 15 de Tiberio' }, { a: 29, t: 'Bautismo' }, { a: 30, t: 'Pascua' }, { a: 31, t: 'Fiesta' }, { a: 32, t: 'Pascua' }, { a: 33, t: 'Pascua: la cruz' }] },
    semana: { desde: 26, hasta: 36, hitos: [{ a: 26, t: 'Pilato' }, { a: 29, t: 'Bautismo' }, { a: 30, t: 'Viernes 7 de abril' }, { a: 31, t: 'Cae Sejano' }, { a: 33, t: 'Viernes 3 de abril' }, { a: 36, t: 'Pilato y Caifás, depuestos' }] },
    jerusalen: { desde: 32, hasta: 50, hitos: [{ a: 33, t: 'Pentecostés' }, { a: 34, t: 'Esteban; Saulo' }, { a: 37, t: 'Calígula' }, { a: 41, t: 'Claudio' }, { a: 44, t: 'Muere Agripa I' }, { a: [46, 47], t: 'Hambre' }] },
    pablo: { desde: 44, hasta: 64, hitos: [{ a: [46, 48], t: 'Primer viaje' }, { a: 49, t: 'Concilio' }, { a: [51, 52], t: 'Galión' }, { a: 54, t: 'Nerón' }, { a: 57, t: 'Arresto' }, { a: 59, t: 'Festo' }, { a: [60, 62], t: 'Roma' }] },
    apostoles: { desde: 60, hasta: 100, hitos: [{ a: 62, t: 'Muere Jacobo' }, { a: 64, t: 'Incendio de Roma' }, { a: 67, t: 'Pedro y Pablo' }, { a: 70, t: 'Cae el templo' }, { a: 81, t: 'Domiciano' }, { a: 95, t: 'Patmos' }, { a: 98, t: 'Trajano' }] },
    libros: { desde: 40, hasta: 100, hitos: [{ a: 49, t: 'Santiago y Gálatas' }, { a: 57, t: 'Romanos' }, { a: 62, t: 'Hechos' }, { a: 67, t: '2 Timoteo' }, { a: 70, t: 'Cae el templo' }, { a: 90, t: 'Juan' }, { a: 95, t: 'Apocalipsis' }] }
  };
  window.RUTA_DATA = {
    titulo: 'Cronología del Nuevo Testamento',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio (como La tierra de Israel)
      minZoom: 3.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.MUNDO_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'fechar', grupo: 'Las bases', n: 'I. Cómo se fecha el Nuevo Testamento', info: 'Fechas sin calendario, Dionisio el Exiguo, cómo se contaba el tiempo, las anclas y el panorama', estaciones: E.fechar, linea: L.general },
      { id: 'nacimiento', grupo: 'La vida de Jesús', n: 'II. Nacimiento e infancia de Jesús', info: 'Zacarías, el censo de Cirenio, los magos, la fecha del nacimiento, Egipto y Nazaret', estaciones: E.nacimiento, linea: L.nacimiento },
      { id: 'ministerio', grupo: 'La vida de Jesús', n: 'III. El ministerio de Jesús', info: 'El año quince de Tiberio, «como de treinta años», el templo, las Pascuas de Juan y el orden', estaciones: E.ministerio, linea: L.ministerio },
      { id: 'semana', grupo: 'La vida de Jesús', n: 'IV. La última semana y el año de la cruz', info: 'Día por día, el día y el año de la cruz, Daniel 9 y Pentecostés', estaciones: E.semana, linea: L.semana },
      { id: 'jerusalen', grupo: 'La iglesia', n: 'V. La iglesia de Jerusalén y la expansión', info: 'Esteban, la conversión de Pablo, Cornelio y Antioquía, Agripa I y el hambre', estaciones: E.jerusalen, linea: L.jerusalen },
      { id: 'pablo', grupo: 'La iglesia', n: 'VI. Los viajes de Pablo y sus cartas', info: 'Gálatas, el concilio, Claudio, Galión, Éfeso y Romanos, Festo y Roma', estaciones: E.pablo, linea: L.pablo },
      { id: 'apostoles', grupo: 'La iglesia', n: 'VII. Los últimos años de los apóstoles', info: 'Jacobo, Nerón, Pedro y Pablo, la caída de Jerusalén, Juan en Éfeso y Patmos', estaciones: apostoles, linea: L.apostoles },
      { id: 'libros', grupo: 'Los libros', n: 'VIII. Cuándo se escribió cada libro', info: 'Los 27 libros en orden, los evangelios, las cartas y por qué casi todo es anterior al 70', estaciones: libros, linea: L.libros }
    ]
  };
})();
