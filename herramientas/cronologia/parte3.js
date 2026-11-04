(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, linea, R } = window.__CR;

  // ================== RUTA V. La iglesia de Jerusalén y la expansión ==================
  const jerusalen = [
    {
      id: 'pentecostes-esteban', n: 'De Pentecostés a Esteban', ref: 'Hechos 2:41-47; 4:4-6; 6:1-7; 7:54–8:4', fecha: [33, 34],
      visual: [
        img('../hechos/img/hechos-esteban.webp', 'Esteban, de rodillas fuera de los muros de Jerusalén, mira al cielo mientras una multitud lo apedrea; a un lado, un joven fariseo cuida los mantos', 'La muerte de Esteban; los testigos dejan sus ropas a los pies de Saulo (Hch 7:58).'),
        pasos([
          { t: 'Pentecostés del 33: nace la iglesia en Jerusalén (Hch 2)', fecha: 33, estado: { view: V.judea, capas: ['iglesia-30'], lugares: ['jerusalen'] } },
          { t: 'La persecución tras la muerte de Esteban dispersa a los creyentes por Judea y Samaria (Hch 8:1-4)', fecha: 34, estado: { view: V.palestina, capas: ['iglesia-34'], lugares: ['jerusalen', 'samaria', 'gaza', 'asdod', 'cesarea'], trazos: ['hch-samaria', 'hch-felipe'] } }
        ]),
        tabla({
          titulo: 'Los primeros capítulos de Hechos',
          cab: ['Capítulos', 'Qué pasó', 'Años'],
          filas: [
            ['Hch 2', 'Pentecostés: unos tres mil convertidos', 'Mayo del 33'],
            ['Hch 3–4', 'El cojo de la puerta la Hermosa; Pedro y Juan ante Anás y Caifás', '33'],
            ['Hch 5', 'Ananías y Safira; los apóstoles azotados; el consejo de Gamaliel', '33–34'],
            ['Hch 6', 'Los siete; muchos sacerdotes obedecen a la fe', '34'],
            ['Hch 7–8', 'Muerte de Esteban; persecución; Felipe en Samaria', '34']
          ],
          nota: 'Fechas aproximadas: Hechos no da años para estos capítulos, solo el orden de los hechos.'
        })
      ],
      texto: [
        'Hechos no dice cuánto tiempo pasó entre Pentecostés y la muerte de Esteban. Lucas cuenta en pocos capítulos un período de crecimiento rápido: la iglesia pasa de ciento veinte personas a tres mil, luego a cinco mil varones (Hch 4:4), y «el número de los discípulos se multiplicaba grandemente en Jerusalén; también muchos de los sacerdotes obedecían a la fe» (Hch 6:7).',
        { h: 'Un período breve' },
        'Varios datos sugieren que todo esto ocurrió en poco tiempo, uno o dos años. Las autoridades que juzgan a los apóstoles son las mismas que condenaron a Jesús: «el sumo sacerdote Anás, y Caifás y Juan y Alejandro» (Hch 4:6). Gamaliel recuerda a dos agitadores de los años anteriores, Teudas y Judas el galileo, pero no a otros más recientes (Hch 5:36-37). Y la conversión de Saulo, que ocurrió poco después de la muerte de Esteban, tiene que ubicarse hacia el 34 o el 35 para que encajen los años que Pablo cuenta en Gálatas (estación V.2). Con la cruz en el 33, la muerte de Esteban queda hacia el 34.',
        { h: '¿Podía el Sanedrín ejecutar a Esteban?' },
        'En el juicio de Jesús, los judíos dijeron a Pilato que no les estaba permitido dar muerte a nadie (Jn 18:31). ¿Cómo pudieron apedrear a Esteban? El relato de Hechos muestra un linchamiento más que una sentencia: la multitud se enfureció, cerró los oídos, lo arrastró fuera de la ciudad y lo apedreó (Hch 7:57-58). Las autoridades romanas, que estaban en Cesarea, no siempre intervenían a tiempo. Treinta años después, Josefo cuenta un caso parecido con Jacobo, el hermano del Señor (estación VII.1).',
        { h: 'La dispersión' },
        'La muerte de Esteban desató «una gran persecución contra la iglesia que estaba en Jerusalén; y todos fueron esparcidos por las tierras de Judea y de Samaria, salvo los apóstoles» (Hch 8:1). Lo que parecía una derrota fue el comienzo del segundo círculo de Hechos 1:8. Felipe predicó en Samaria y al etíope en el camino de Gaza, y los esparcidos «iban por todas partes anunciando el evangelio» (Hch 8:4).',
        ir('Ver en Hechos: la iglesia madre de Jerusalén', R.hechos + '#expansion/2')
      ],
      pensar: 'La persecución esparció a los creyentes, y ellos llevaron el evangelio a cada lugar donde llegaron. ¿Cómo podría Dios usar las dificultades que te han movido de lugar para extender su reino?'
    },
    {
      id: 'saulo', n: 'La conversión de Pablo y los años de Gálatas', ref: 'Hechos 9:1-30; Gálatas 1:13–2:1; 2 Corintios 11:32-33', fecha: [34, 37],
      visual: [
        esq('cr-pablo-galatas.svg', 'Dos columnas paralelas, Hechos y Gálatas, con los años 34 a 50: conversión, Arabia y Damasco, la huida en el canasto y la primera visita a Jerusalén tres años después, los años en Siria y Cilicia, Antioquía, la visita con la ofrenda, el primer viaje y el concilio, catorce años después', 'Los «tres años» y los «catorce años» de Gálatas, al lado del relato de Hechos.', 'Gálatas y Hechos'),
        img('../viajes-pablo/img/vp-canasta.webp', 'De noche, unos hombres bajan un canasto con un hombre adentro por una ventana de la muralla de Damasco', 'La huida de Damasco en un canasto (2 Co 11:33).'),
        cita('Gálatas 1:15-24', '@@ga/1/15-24')
      ],
      texto: [
        'Para los primeros años de Pablo, tenemos una ayuda especial: él mismo contó su historia en la carta a los Gálatas, con cifras. Lo hizo para mostrar que no había recibido su evangelio de los apóstoles de Jerusalén, sino de Cristo (Gá 1:11-12), y por eso detalla cuándo y por cuánto tiempo los vio.',
        { h: 'Tres años' },
        'Después de su conversión en el camino a Damasco, Pablo no subió a Jerusalén, sino que fue «a Arabia, y volví de nuevo a Damasco. Después, pasados tres años, subí a Jerusalén para ver a Pedro, y permanecí con él quince días» (Gá 1:17-18). Con la cuenta inclusiva, «pasados tres años» puede significar dos años y algo. Si la conversión fue hacia el 34 o el 35, la primera visita a Jerusalén fue hacia el 36 o el 37.',
        'Hay un ancla que confirma el dato. Pablo cuenta que en Damasco «el gobernador de la provincia del rey Aretas guardaba la ciudad» para prenderlo, y que escapó por el muro en un canasto (2 Co 11:32-33). Aretas IV fue rey de los nabateos hasta el 40, y todo indica que tuvo influencia sobre Damasco en los últimos años de Tiberio o en los de Calígula, entre el 37 y el 40. La huida de Pablo cae, por lo tanto, dentro de esos años.',
        { h: 'Catorce años' },
        'Después Pablo fue «a las regiones de Siria y de Cilicia» (Gá 1:21); Hechos dice que los hermanos lo enviaron a Tarso (Hch 9:30). Allí pasó varios años de los que casi nada sabemos, hasta que Bernabé fue a buscarlo para que lo ayudara en Antioquía (Hch 11:25-26). Luego escribe: «Después, pasados catorce años, subí otra vez a Jerusalén con Bernabé» (Gá 2:1). Los catorce años se cuentan probablemente desde la conversión, y llevan a los años 47 o 48: la visita con la ofrenda para el hambre (Hch 11:30) o la del concilio (Hch 15), según cómo se lean (estación VI.2).',
        { ejercicio: {
          pregunta: '¿Para qué da Pablo tantas cifras en Gálatas 1 y 2?',
          opciones: [
            { t: 'Para que sus lectores pudieran armar una cronología de su vida.', ok: false, por_que: 'Las cifras sirven hoy para eso, pero no era su propósito.' },
            { t: 'Para mostrar que su evangelio no lo recibió de los apóstoles de Jerusalén, sino por revelación de Jesucristo.', ok: true, por_que: 'Pablo insiste en que pasó años sin ver a los apóstoles, y que cuando los vio fue por poco tiempo (Gá 1:11-12, 17-19).' },
            { t: 'Para explicar por qué tardó tanto en comenzar a predicar.', ok: false, por_que: 'Pablo predicó desde el principio en Damasco (Hch 9:20) y en las regiones de Siria y Cilicia (Gá 1:23).' }
          ],
          explicacion: 'Al leer los datos cronológicos de la Biblia, conviene preguntar primero para qué los da el autor: así se evita sacarles más de lo que dicen.'
        } },
        ir('Ver en Los viajes de Pablo: Damasco, Arabia y los años de silencio', R.pablo + '#recorrido/2')
      ],
      pensar: 'Pablo pasó varios años en Arabia, Damasco y Tarso antes de que Bernabé lo llamara a Antioquía. ¿Qué te enseña ese tiempo escondido sobre cómo prepara Dios a sus siervos?'
    },
    {
      id: 'cornelio-antioquia', n: 'Cornelio y Antioquía', ref: 'Hechos 9:31-43; 10:1-48; 11:19-26', fecha: [37, 45],
      visual: [
        pasos([
          { t: 'Las iglesias tienen paz por toda Judea, Galilea y Samaria (Hch 9:31)', fecha: 37, estado: { view: V.palestina, capas: ['iglesia-37'], lugares: ['jerusalen', 'samaria', 'damasco', 'cesarea'] } },
          { t: 'Pedro recorre Lida y Jope y llega a la casa de Cornelio en Cesarea (Hch 9:32–10:48)', fecha: 40, estado: { view: V.palestina, capas: ['iglesia-40'], lugares: ['jerusalen', 'lida', 'jope', 'cesarea'], trazos: ['hch-pedro'] } },
          { t: 'Los esparcidos llegan a Fenicia, Chipre y Antioquía; Bernabé busca a Saulo en Tarso (Hch 11:19-26)', fecha: [42, 45], estado: { view: V.levante, capas: ['iglesia-44'], lugares: ['jerusalen', 'tiro', 'sidon', 'antioquia', 'tarso', 'salamina-chipre'], trazos: ['hch-antioquia', 'pablo-antioquia'] } }
        ]),
        tabla({
          titulo: 'Mientras tanto, en Roma y en Judea',
          cab: ['Año', 'Qué pasó'],
          filas: [
            ['36', 'Pilato es destituido; Caifás deja el sumo sacerdocio'],
            ['37', 'Muere Tiberio; Calígula, emperador; Agripa I recibe el norte del país'],
            ['39–40', 'Calígula ordena poner su estatua en el templo de Jerusalén; la orden no se cumple'],
            ['41', 'Asesinato de Calígula; Claudio, emperador; Agripa I, rey de toda Judea'],
            ['c. 44–45', 'Bernabé y Saulo enseñan un año en Antioquía; los discípulos son llamados cristianos']
          ]
        })
      ],
      texto: [
        'Después de la conversión de Saulo, Lucas resume: «Entonces las iglesias tenían paz por toda Judea, Galilea y Samaria; y eran edificadas, andando en el temor del Señor, y se acrecentaban fortalecidas por el Espíritu Santo» (Hch 9:31). Es un tiempo del que no da fechas, pero que puede ubicarse entre el 36 y el 40.',
        { h: 'Un tiempo de tensión' },
        'Fueron años agitados para los judíos. Pilato fue destituido en el 36 y Caifás perdió el sumo sacerdocio. En el 37 murió Tiberio y subió al trono Calígula, que pronto exigió ser adorado como dios. Hacia el 39 o el 40 ordenó poner su estatua en el templo de Jerusalén, y toda la nación se movilizó para impedirlo. Solo la demora del gobernador de Siria y la muerte de Calígula, en enero del 41, evitaron una guerra. Algunos piensan que esa crisis, que ocupó a todo el pueblo, explica en parte la paz de la que gozó la iglesia.',
        { h: 'Pedro en casa de Cornelio' },
        'En esos años Pedro recorrió las ciudades de la costa: Lida, Jope y finalmente Cesarea, donde predicó en la casa de Cornelio, un centurión romano (Hch 10). Mientras Pedro hablaba, el Espíritu Santo cayó sobre los gentiles que lo oían y los judíos creyentes se asombraron al oírlos hablar en lenguas (Hch 10:44-46). La fecha no se sabe con exactitud; la mayoría la ubica hacia el 38–40, antes de que Agripa I gobernara Judea en el 41, porque en Cesarea Lucas muestra todavía una guarnición romana.',
        { h: 'Antioquía' },
        'Al mismo tiempo, algunos de los esparcidos por la persecución de Esteban llegaron hasta Antioquía de Siria, la tercera ciudad del imperio, y comenzaron a predicar también a los griegos (Hch 11:19-21). La iglesia de Jerusalén envió a Bernabé, quien fue a Tarso a buscar a Saulo. Durante todo un año enseñaron allí, y «a los discípulos se les llamó cristianos por primera vez en Antioquía» (Hch 11:26). Eso ocurrió hacia el 44 o el 45, y desde Antioquía saldrían después los viajes misioneros.',
        ir('Ver en Hechos: Antioquía, la primera iglesia gentil', R.hechos + '#expansion/7')
      ],
      pensar: 'Mientras el mundo se agitaba por un emperador que quería ser adorado, la iglesia crecía en paz y el evangelio llegaba a los gentiles. ¿Dónde pones tu atención cuando las noticias del mundo te inquietan?'
    },
    {
      id: 'agripa', n: 'Agripa I y la Pascua del 44', ref: 'Hechos 12:1-24', fecha: 44,
      visual: [
        img('../hechos/img/hechos-pedro-carcel.webp', 'De noche, en una celda de piedra, un ángel despierta al apóstol Pedro, que duerme encadenado entre dos soldados', 'Pedro librado de la cárcel en los días de los panes sin levadura (Hch 12:6-10).'),
        img('../dinastia-herodes/img/hd-agripa-cesarea.webp', 'El rey Agripa, con vestiduras de plata que brillan al sol, habla desde una tribuna en el teatro de Cesarea ante una multitud', 'Agripa I en el teatro de Cesarea, en el año 44 (Hch 12:21-23).'),
        cita('Hechos 12:1-4', '@@hch/12/1-4')
      ],
      texto: [
        'Hechos 12 es el capítulo mejor fechado de la primera mitad del libro. El «rey Herodes» que mata a Jacobo y encarcela a Pedro es Herodes Agripa I, nieto de Herodes el Grande, que reinó sobre toda la tierra de Israel entre el 41 y el 44. Fue el único rey judío de la región después de su abuelo, y el único momento, entre el nacimiento de Jesús y el año 70, en que Judea no tuvo un gobernador romano.',
        { h: 'Los panes sin levadura' },
        'Lucas da dos datos más. Agripa mató a espada a Jacobo, el hermano de Juan, el primer apóstol mártir, y al ver que esto agradaba a los judíos, prendió a Pedro. «Eran entonces los días de los panes sin levadura» (Hch 12:3), es decir, la semana de la Pascua. Agripa quería presentarlo al pueblo después de la fiesta. Pero la iglesia oraba sin cesar, y un ángel sacó a Pedro de la cárcel (Hch 12:5-11).',
        { h: 'Una muerte con fecha' },
        'Después de la Pascua, Agripa bajó a Cesarea. Allí, vestido con ropas reales, habló al pueblo, y la multitud gritó: «¡Voz de Dios, y no de hombre!» (Hch 12:22). «Al momento un ángel del Señor le hirió, por cuanto no dio la gloria a Dios; y expiró comido de gusanos» (Hch 12:23). Josefo cuenta el mismo hecho: Agripa asistía en Cesarea a unos juegos en honor del emperador, se presentó con una vestidura de plata que brillaba al sol, aceptó que lo llamaran dios, sintió un dolor terrible y murió cinco días después. Josefo dice que había reinado tres años sobre toda Judea; por eso su muerte se fecha en el 44.',
        'Así, la muerte de Jacobo y la liberación de Pedro ocurrieron en la Pascua del 44, poco antes de la muerte del rey. Es una de las fechas más firmes de Hechos.',
        { h: 'La palabra crecía' },
        'El capítulo empieza con un rey que mata a un apóstol y termina con ese rey comido de gusanos. Lucas lo cierra así: «Pero la palabra del Señor crecía y se multiplicaba» (Hch 12:24). Quince años después, el hijo de este rey, Agripa II, escucharía a Pablo en ese mismo palacio de Cesarea (Hch 26).',
        ir('Ver en La dinastía de Herodes: Agripa I persigue a la iglesia', R.herodes + '#agripas/2')
      ],
      pensar: 'Agripa I aceptó que lo llamaran dios y murió ese mismo día; la iglesia oró y Pedro fue librado. ¿A quién le das la gloria cuando las cosas te salen bien?'
    },
    {
      id: 'hambre', n: 'El hambre bajo Claudio y la ofrenda de Antioquía', ref: 'Hechos 11:27-30; 12:25; Gálatas 2:10', fecha: [45, 47],
      visual: [
        img('../hechos/img/hechos-agabo.webp', 'En una reunión de la iglesia de Antioquía, un profeta de Jerusalén se pone de pie y habla con autoridad ante creyentes judíos y griegos', 'Agabo anuncia una gran hambre (Hch 11:28).'),
        tabla({
          titulo: 'Los emperadores del Nuevo Testamento',
          cab: ['Emperador', 'Años', 'En la Biblia'],
          filas: [
            ['Augusto', '27 a.C.–14 d.C.', 'El censo del nacimiento de Jesús (Lc 2:1)'],
            ['Tiberio', '14–37', 'El ministerio y la muerte de Jesús (Lc 3:1); «César» en Mt 22:17-21'],
            ['Calígula', '37–41', 'No se nombra'],
            ['Claudio', '41–54', 'El hambre (Hch 11:28) y la expulsión de los judíos de Roma (Hch 18:2)'],
            ['Nerón', '54–68', 'El «César» al que Pablo apeló (Hch 25:11); la persecución en Roma'],
            ['Vespasiano y Tito', '69–81', 'La guerra judía y la destrucción del templo (Lc 21:20-24)'],
            ['Domiciano', '81–96', 'El destierro de Juan a Patmos (Ap 1:9)']
          ]
        })
      ],
      texto: [
        'Mientras Bernabé y Saulo enseñaban en Antioquía, llegaron profetas de Jerusalén. Uno de ellos, Agabo, «daba a entender por el Espíritu, que vendría una gran hambre en toda la tierra habitada; la cual sucedió en tiempo de Claudio» (Hch 11:28). Los discípulos decidieron enviar ayuda a los hermanos de Judea, cada uno según lo que tenía, «por mano de Bernabé y de Saulo» (Hch 11:29-30).',
        { h: 'Lo que dicen los historiadores' },
        'El reinado de Claudio, del 41 al 54, estuvo marcado por malas cosechas. Suetonio y Tácito mencionan escasez de grano en Roma, y otros escritores hablan de hambre en Grecia y en Egipto, donde una crecida irregular del Nilo hizo subir el precio del trigo. Josefo cuenta que en Judea hubo una gran hambre en tiempos de los gobernadores Fado y Tiberio Alejandro, entre el 44 y el 48, y que la reina Helena de Adiabene, convertida al judaísmo, compró grano en Egipto e higos en Chipre para los habitantes de Jerusalén.',
        'El año 47 fue, además, un año sabático, en el que la ley mandaba no sembrar (Lv 25:3-4). Eso habría agravado la escasez en Judea. Por eso la ofrenda de Antioquía se fecha hacia el 46 o el 47.',
        { h: 'La primera ofrenda misionera' },
        'Lucas cuenta el episodio entre los capítulos 11 y 12, pero no indica si Bernabé y Saulo llegaron a Jerusalén antes o después de la muerte de Agripa. Al final del capítulo 12 dice que volvieron «cumplido su servicio», llevando consigo a Juan Marcos (Hch 12:25). Muchos piensan que esta es la visita de Gálatas 2:1-10, en la que Pablo expuso su evangelio a los apóstoles «en privado» y ellos le pidieron que se acordara de los pobres, «lo cual también procuré con diligencia hacer» (Gá 2:10).',
        'La iglesia de Antioquía, formada en gran parte por gentiles, ayudó a la iglesia judía de Jerusalén. Fue el primer gesto de una comunión que Pablo cultivaría toda su vida, y que culminaría con la gran ofrenda de las iglesias de Macedonia y Acaya en el 57 (Ro 15:25-27).',
        ir('Ver en Hechos: capítulo 11, Jerusalén y Antioquía', R.hechos + '#comentario/12')
      ],
      pensar: 'Una iglesia joven, en su mayoría de gentiles, ayudó con generosidad a los hermanos judíos que pasaban hambre. ¿Qué te enseña sobre la unidad de la iglesia por encima de las diferencias de origen?'
    }
  ];

  // ================== RUTA VI. Los viajes de Pablo y sus cartas ==================
  const pablo = [
    {
      id: 'primer-viaje', n: 'El primer viaje y la carta a los Gálatas', ref: 'Hechos 13:1–14:28; Gálatas 1:6-9; Santiago 1:1', fecha: [46, 49],
      visual: [
        mapa({ view: V.asia, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'seleucia', 'salamina-chipre', 'pafos', 'perge', 'antioquia-pisidia', 'iconio', 'listra', 'derbe', 'atalia'], trazos: ['viaje-1'] }),
        tabla({
          titulo: 'Los primeros libros del Nuevo Testamento',
          cab: ['Libro', 'Fecha probable', 'Desde dónde'],
          filas: [
            ['Santiago', 'c. 45–49', 'Jerusalén'],
            ['Gálatas', 'c. 48–49 (o c. 55)', 'Antioquía (o Éfeso)'],
            ['1 y 2 Tesalonicenses', 'c. 50–51', 'Corinto']
          ]
        }),
        img('../hechos/img/hechos-listra.webp', 'En la plaza de Listra, una multitud con guirnaldas y un toro para el sacrificio rodea a Pablo y Bernabé, que rasgan sus ropas', 'En Listra quisieron ofrecer sacrificios a Pablo y Bernabé (Hch 14:11-18).')
      ],
      texto: [
        'Desde Antioquía, el Espíritu Santo apartó a Bernabé y a Saulo para la obra a la que los había llamado (Hch 13:2). El primer viaje los llevó a Chipre y a las ciudades del sur de Galacia, en el centro de la actual Turquía: Antioquía de Pisidia, Iconio, Listra y Derbe. Es el viaje más corto de los tres y se fecha hacia el 46–48.',
        { h: 'Un procónsul con inscripción' },
        'En Pafos, la capital de Chipre, creyó el procónsul Sergio Paulo (Hch 13:7-12). Lucas le da el título exacto: Chipre era entonces una provincia del Senado, gobernada por un procónsul. En Roma y en Chipre se han encontrado inscripciones con nombres de la familia de Sergio Paulo, aunque no se puede asegurar que alguna se refiera a él. El detalle muestra, una vez más, la exactitud de Lucas.',
        { h: 'La primera carta de Pablo' },
        'Al volver a Antioquía, Pablo y Bernabé se encontraron con un problema: algunos venidos de Judea enseñaban que los gentiles debían circuncidarse para ser salvos (Hch 15:1). El mismo problema había llegado a las iglesias que acababan de fundar en Galacia. Muchos piensan que Pablo escribió entonces la carta a los Gálatas, hacia el 48 o el 49, antes del concilio de Jerusalén. Si es así, sería su primera carta y uno de los primeros libros del Nuevo Testamento.',
        { posturas: {
          titulo: '¿Cuándo se escribió Gálatas?',
          a: { n: 'Antes del concilio (c. 48–49)', t: 'Las iglesias de Galacia serían las del primer viaje, en el sur de la provincia. Pablo no menciona la decisión del concilio, que habría sido su mejor argumento, y cuenta solo dos visitas a Jerusalén. Por eso la carta sería anterior a Hechos 15.' },
          b: { n: 'En el tercer viaje (c. 55)', t: 'Otros entienden que «Galacia» se refiere a la región del norte, habitada por los gálatas de origen celta, que Pablo habría visitado en el segundo y el tercer viaje (Hch 16:6; 18:23). La carta sería de los años en Éfeso, cerca de Romanos, con la que comparte muchos temas.' },
          c: 'La fecha no cambia el mensaje de la carta: la salvación es por la fe en Cristo, no por las obras de la ley. Pero si Gálatas es anterior al concilio, se ve que la verdad del evangelio se defendió desde el comienzo de la misión a los gentiles.'
        } },
        { h: 'Santiago' },
        'Probablemente aún antes que Gálatas se escribió la carta de Santiago, el hermano del Señor y líder de la iglesia de Jerusalén. Va dirigida «a las doce tribus que están en la dispersión» (Stg 1:1), habla de una iglesia todavía formada por judíos y no menciona la discusión sobre los gentiles. Muchos la fechan entre el 45 y el 49.',
        ir('Ver en Los viajes de Pablo: Gálatas, libres por la gracia', R.pablo + '#cartas/2')
      ],
      pensar: 'Pablo escribió a los gálatas con urgencia porque estaba en juego la verdad del evangelio. ¿Qué tan claro tienes tú que eres salvo solo por la fe en Cristo, sin agregar nada?'
    },
    {
      id: 'concilio', n: 'El concilio de Jerusalén', ref: 'Hechos 15:1-35; Gálatas 2:1-10', fecha: 49,
      visual: [
        img('../hechos/img/hechos-concilio.webp', 'Los apóstoles y los ancianos reunidos en una sala de Jerusalén escuchan a Jacobo, de pie, mientras Pedro, Pablo y Bernabé esperan', 'El concilio de Jerusalén (Hch 15:6-21).'),
        tabla({
          titulo: 'Las visitas de Pablo a Jerusalén',
          cab: ['Hechos', 'Gálatas', 'Año'],
          filas: [
            ['Hch 9:26-29', 'Gá 1:18-19: quince días con Pedro', 'c. 36–37'],
            ['Hch 11:30; 12:25: la ofrenda', '¿Gá 2:1-10?', 'c. 46–47'],
            ['Hch 15: el concilio', '¿Gá 2:1-10?', 'c. 49'],
            ['Hch 18:22: un saludo breve', '', 'c. 52'],
            ['Hch 21:17: la gran ofrenda y el arresto', '', '57']
          ]
        })
      ],
      texto: [
        'La pregunta sobre la circuncisión de los gentiles llegó a Jerusalén, y los apóstoles y los ancianos se reunieron para considerarla (Hch 15:6). Pedro recordó la casa de Cornelio, Pablo y Bernabé contaron las señales que Dios había hecho entre los gentiles, y Jacobo, el hermano del Señor, mostró con los profetas que Dios había planeado incluir a las naciones (Hch 15:7-18). La iglesia decidió no imponer la ley de Moisés a los gentiles y les pidió solo cuatro cosas para facilitar la comunión con los creyentes judíos (Hch 15:19-29).',
        { h: 'La fecha' },
        'El concilio se ubica hacia el año 49. Ocurrió después del primer viaje y antes del segundo, y el segundo viaje llevó a Pablo a Corinto cuando Galión era procónsul, en el 51 (estación VI.4). Pablo estuvo un año y medio en Corinto antes de comparecer ante Galión (Hch 18:11-12), y antes de eso recorrió Galacia, Macedonia y Atenas. Todo eso exige que el concilio sea del 49, o a lo sumo de comienzos del 50.',
        { posturas: {
          titulo: '¿Qué visita es la de Gálatas 2?',
          a: { n: 'La visita con la ofrenda (Hch 11:30)', t: 'Pablo cuenta sus visitas a Jerusalén para mostrar que no dependía de los apóstoles; no podía omitir ninguna. La de Gálatas 2 sería entonces la segunda, la de la ofrenda, cuando habló «en privado» con los líderes (Gá 2:2). Así se explica que no mencione la decisión del concilio, que todavía no había ocurrido.' },
          b: { n: 'El concilio (Hch 15)', t: 'Los temas coinciden: Pablo, Bernabé, la circuncisión de los gentiles, Pedro y Jacobo. Para estos intérpretes, Gálatas 2 cuenta el lado privado del concilio, y Hechos 15, la reunión pública.' },
          c: 'Las dos lecturas tienen buenos argumentos. La primera permite que Gálatas sea anterior al concilio; la segunda la ubica después. En ambos casos, los apóstoles reconocieron que el evangelio de Pablo era el mismo que ellos predicaban (Gá 2:9).'
        } },
        { h: 'Una decisión para toda la iglesia' },
        'La carta del concilio comienza con una frase notable: «Porque ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28). La iglesia resolvió su primera gran controversia escuchando la Escritura, el testimonio de lo que Dios estaba haciendo y la dirección del Espíritu. Desde entonces, el evangelio quedó libre para llegar a todas las naciones sin que nadie tuviera que hacerse judío primero.',
        ir('Ver en Los viajes de Pablo: el concilio de Jerusalén', R.pablo + '#recorrido/5')
      ],
      pensar: 'La iglesia de Jerusalén pudo haber cerrado la puerta a los gentiles, pero escuchó al Espíritu y a la Escritura. ¿Qué barreras pones tú, sin darte cuenta, para que otros lleguen a Cristo?'
    },
    {
      id: 'claudio', n: 'Claudio expulsa a los judíos de Roma', ref: 'Hechos 18:1-3; Romanos 16:3-5; 1 Tesalonicenses 1:1', fecha: [49, 50],
      visual: [
        img('../viajes-pablo/img/vp-tiendas.webp', 'En un taller de Corinto, Pablo, Aquila y Priscila cosen lonas de cuero y tela para tiendas', 'Pablo trabaja con Aquila y Priscila, recién llegados de Italia (Hch 18:2-3).'),
        pasos([
          { t: 'Hacia el 49: Claudio expulsa a los judíos de Roma; Aquila y Priscila van a Corinto', fecha: 49, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'corinto', 'puteoli'] } },
          { t: 'Segundo viaje: de Antioquía por Galacia a Troas, Filipos, Tesalónica, Berea y Atenas (Hch 15:36–17:34)', fecha: [49, 50], estado: { view: V.egeo, capas: ['roma-14', 'iglesia-52'], lugares: ['antioquia', 'derbe', 'listra', 'troas', 'filipos', 'tesalonica', 'berea', 'atenas', 'corinto'], trazos: ['viaje-2'] } }
        ]),
        cita('Hechos 18:1-3', '@@hch/18/1-3')
      ],
      texto: [
        'Cuando Pablo llegó a Corinto en su segundo viaje, encontró a «un judío llamado Aquila, natural del Ponto, recién venido de Italia con Priscila su mujer, por cuanto Claudio había mandado que todos los judíos saliesen de Roma» (Hch 18:2). Ese decreto es otra ancla.',
        { h: '«Por instigación de Cresto»' },
        'El historiador Suetonio, al escribir la vida de Claudio, dice que el emperador expulsó de Roma a los judíos porque provocaban continuos disturbios «por instigación de Cresto». Muchos estudiosos piensan que Suetonio, que escribió setenta años después, confundió el nombre de Cristo con el de Cresto, un nombre de esclavo muy común. Si es así, los disturbios se produjeron en las sinagogas de Roma por la predicación del evangelio, como ocurría en las ciudades que visitaba Pablo. Un escritor cristiano del siglo V, Orosio, fecha el decreto en el año noveno de Claudio, es decir, el 49.',
        'Con esa fecha, Aquila y Priscila llegaron a Corinto hacia el 49 o el 50, poco antes que Pablo. Lucas dice que acababan de llegar de Italia, y Pablo se quedó con ellos porque tenían el mismo oficio: hacían tiendas (Hch 18:3).',
        { h: 'El segundo viaje' },
        'El concilio se celebró hacia el 49, y poco después Pablo salió con Silas en su segundo viaje. Recorrieron las iglesias de Galacia, donde se les unió Timoteo, y el Espíritu los llevó hasta Troas, desde donde pasaron a Europa. Fundaron iglesias en Filipos, Tesalónica y Berea, Pablo predicó en Atenas y llegó a Corinto hacia comienzos del 50. Desde allí escribió las dos cartas a los Tesalonicenses, poco después de haberlos dejado (1 Ts 3:1-6).',
        { h: 'De regreso a Roma' },
        'El decreto de Claudio no duró para siempre. Claudio murió en el 54, y muchos judíos volvieron a Roma. Cuando Pablo escribió a los romanos, hacia el 57, Priscila y Aquila estaban otra vez allí, y la iglesia se reunía en su casa (Ro 16:3-5). Un decreto del emperador los había echado de su ciudad; Dios usó ese destierro para que conocieran a Pablo y se convirtieran en sus colaboradores en Corinto, Éfeso y Roma.',
        ir('Ver en Los viajes de Pablo: segundo viaje', R.pablo + '#recorrido/6')
      ],
      pensar: 'Aquila y Priscila perdieron su casa en Roma por una orden injusta y encontraron en Corinto a Pablo. ¿Has visto a Dios abrir una puerta nueva a partir de algo que parecía una pérdida?'
    },
    {
      id: 'galion', n: 'Galión y la inscripción de Delfos', ref: 'Hechos 18:11-17', fecha: [51, 52],
      visual: [
        foto('foto-delfos-galion.jpg', 'Fragmento de piedra con letras griegas grabadas, entre las que se lee el nombre de Galión', 'Fragmento de la inscripción de Delfos, de una carta del emperador Claudio; el recuadro azul marca el nombre de Galión (Museo de Delfos).', 'CC BY-SA 4.0 · Gérard, vía Wikimedia Commons'),
        img('../hechos/img/hechos-pablo-galion.webp', 'En el tribunal de piedra del foro de Corinto, el procónsul Galión, con toga romana, despide con un gesto a un grupo de judíos que acusan a Pablo', 'Pablo ante Galión en Corinto (Hch 18:12-17).'),
        cita('Hechos 18:11-17', '@@hch/18/11-17')
      ],
      texto: [
        'Si hubiera que elegir una sola fecha para armar la vida de Pablo, sería esta. Lucas cuenta que, después de un año y seis meses en Corinto, «siendo Galión procónsul de Acaya, los judíos se levantaron de común acuerdo contra Pablo, y le llevaron al tribunal» (Hch 18:11-12). Galión no quiso juzgar asuntos de la ley judía y los echó del tribunal.',
        { h: 'Una carta del emperador' },
        'Galión era hermano mayor del filósofo Séneca, el maestro de Nerón. A comienzos del siglo XX se publicaron unos fragmentos de una inscripción encontrada en Delfos, en Grecia: una carta del emperador Claudio a la ciudad que menciona a «Junio Galión, mi amigo y procónsul». La carta está fechada por los títulos de Claudio: había sido aclamado emperador veintiséis veces, un dato que se conoce por otras inscripciones y que corresponde a la primera mitad del año 52.',
        'Los procónsules de las provincias del Senado gobernaban un año, de verano a verano. Por lo tanto, Galión gobernó Acaya desde mediados del 51 hasta mediados del 52. Séneca cuenta que su hermano tuvo fiebre en Acaya y dejó el cargo; quizás no completó su año. Los judíos de Corinto probablemente aprovecharon la llegada del nuevo procónsul para acusar a Pablo, en el verano o el otoño del 51.',
        { h: 'Lo que se deduce' },
        'Con esa fecha fija, todo lo demás se ordena. Pablo llegó a Corinto un año y medio antes, a comienzos del 50; por eso el concilio fue hacia el 49 y el primer viaje, antes. Después de Galión, Pablo se quedó «muchos días» (Hch 18:18), viajó a Jerusalén y Antioquía, y comenzó el tercer viaje hacia el 52 o el 53. Hacia atrás y hacia adelante, la inscripción de Delfos sostiene toda la cronología de Pablo.',
        { h: 'Una protección de Dios' },
        'La decisión de Galión fue importante para la iglesia. Al negarse a juzgar a Pablo, reconoció en la práctica que la fe cristiana era un asunto interno del judaísmo, una religión permitida por Roma. Durante más de diez años, esa decisión ayudó a que el evangelio se predicara con libertad. Antes de la acusación, el Señor le había dicho a Pablo en visión: «No temas, sino habla, y no calles; porque yo estoy contigo, y ninguno pondrá sobre ti la mano para hacerte mal» (Hch 18:9-10).',
        ir('Ver en Hechos: Galión, un ancla en la historia', R.hechos + '#introduccion/9')
      ],
      pensar: 'Dios le prometió a Pablo que nadie le haría daño en Corinto, y usó a un procónsul indiferente para cumplirlo. ¿Qué promesa de Dios necesitas recordar hoy para no callar?'
    },
    {
      id: 'efeso', n: 'Éfeso, Corinto y la carta a los Romanos', ref: 'Hechos 19:1–20:16; 1 Corintios 16:8; 2 Corintios 2:12-13; Romanos 15:25-26; 16:1, 23', fecha: [52, 57],
      visual: [
        esq('cr-pablo-cartas.svg', 'Línea de tiempo de los años 46 a 67 con los viajes de Pablo en franjas de color y sus trece cartas marcadas en el lugar y el año en que las escribió', 'Los viajes de Pablo y sus cartas (fechas aproximadas).', 'Viajes y cartas'),
        mapa({ view: V.egeo, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'efeso', 'troas', 'filipos', 'tesalonica', 'corinto', 'cencrea', 'mileto', 'jerusalen'], trazos: ['viaje-3'] }),
        img('../viajes-pablo/img/vp-efeso.webp', 'Pablo enseña a un grupo de discípulos en una sala de columnas en Éfeso, con la ciudad y su gran teatro al fondo', 'Dos años en la escuela de Tirano (Hch 19:9-10).')
      ],
      texto: [
        'El tercer viaje de Pablo, hacia el 52 o el 53, tuvo un centro: Éfeso, la capital de la provincia de Asia. Allí enseñó tres meses en la sinagoga y luego dos años en la escuela de Tirano, «de manera que todos los que habitaban en Asia, judíos y griegos, oyeron la palabra del Señor Jesús» (Hch 19:8-10). En total, Pablo dijo a los ancianos de Éfeso que había estado con ellos «tres años» (Hch 20:31), probablemente del 53 al 56.',
        { h: 'Las cartas a los Corintios' },
        'Desde Éfeso, Pablo escribió la primera carta a los Corintios, preocupado por las divisiones y los problemas de esa iglesia. La escribió cerca de la primavera, porque dice que se quedaría en Éfeso hasta Pentecostés (1 Co 16:8). Se fecha hacia el 55 o el 56. Después de salir de Éfeso, tras el alboroto de los plateros (Hch 19:23-41), pasó por Troas y Macedonia, ansioso por saber cómo había recibido Corinto sus palabras, y desde Macedonia escribió la segunda carta, hacia el 56 (2 Co 2:12-13; 7:5-7).',
        { h: 'Romanos, desde Corinto' },
        'Luego Pablo pasó tres meses en Grecia (Hch 20:2-3), seguramente en Corinto, durante el invierno del 56 al 57. Allí escribió su carta más extensa, la que dirigió a los Romanos. Varios detalles lo indican: recomienda a Febe, diaconisa de Cencrea, el puerto de Corinto (Ro 16:1); envía saludos de Gayo, en cuya casa se hospedaba, y de Erasto, tesorero de la ciudad (Ro 16:23). En Corinto se encontró una inscripción en el pavimento de una plaza con el nombre de un Erasto que la pavimentó a su costa. Pablo dice que va a Jerusalén con la ofrenda de Macedonia y Acaya, y que después piensa ir a Roma y a España (Ro 15:24-26).',
        { h: 'Para Pentecostés en Jerusalén' },
        'En la primavera del 57 Pablo emprendió el viaje a Jerusalén. Celebró la Pascua en Filipos, navegó a Troas y bordeó la costa de Asia, sin detenerse en Éfeso, «pues se apresuraba por estar el día de Pentecostés, si le fuese posible, en Jerusalén» (Hch 20:6, 16). Allí, pocos días después, sería arrestado en el templo.',
        ir('Ver en Los viajes de Pablo: las cartas en su contexto', R.pablo + '#cartas/1')
      ],
      pensar: 'Pablo escribió algunas de sus cartas más profundas en medio de viajes, peligros y preocupaciones por las iglesias. ¿Qué te enseña que Dios inspirara su Palabra en medio de una vida tan agitada?'
    },
    {
      id: 'festo', n: 'De Félix a Festo y el viaje a Roma', ref: 'Hechos 24:27; 25:1-12; 27:1-9; 28:11-16, 30-31', fecha: [57, 62],
      visual: [
        img('../imperio-romano/img/roma-pablo-festo.webp', 'El gobernador Festo, sentado en su tribunal en Cesarea, escucha a Pablo encadenado que habla de pie ante soldados y acusadores', 'Pablo ante Festo: «A César apelo» (Hch 25:11).'),
        mapa({ view: V.mediterraneo, capas: ['roma-14', 'iglesia-62'], lugares: ['cesarea', 'sidon', 'mira', 'creta-isla', 'malta', 'siracusa', 'puteoli', 'roma'], trazos: ['viaje-roma'] }),
        tabla({
          titulo: 'Del arresto a Roma',
          cab: ['Fecha', 'Qué pasó', 'Pasaje'],
          filas: [
            ['Pentecostés del 57', 'Arresto en el templo de Jerusalén', 'Hch 21:27-36'],
            ['57–59', 'Dos años preso en Cesarea, bajo el gobernador Félix', 'Hch 24:27'],
            ['Verano del 59', 'Llega Festo; Pablo apela a César y habla ante Agripa II', 'Hch 25–26'],
            ['Octubre del 59', 'Pasado el ayuno del día de la Expiación, la navegación es peligrosa', 'Hch 27:9'],
            ['Invierno del 59–60', 'Naufragio y tres meses en Malta', 'Hch 27:39–28:11'],
            ['Primavera del 60', 'Llegada a Roma', 'Hch 28:14-16'],
            ['60–62', 'Dos años en una casa alquilada; cartas de la prisión', 'Hch 28:30-31']
          ]
        })
      ],
      texto: [
        'Los últimos capítulos de Hechos están fechados por los gobernadores romanos de Judea. Cuando Pablo fue arrestado, gobernaba Antonio Félix, que estaba en el cargo desde el 52. Félix tuvo a Pablo preso en Cesarea esperando un soborno, y «al cabo de dos años recibió Félix por sucesor a Porcio Festo» (Hch 24:27).',
        { h: '¿Cuándo llegó Festo?' },
        'Josefo cuenta que Félix fue llamado a Roma por sus abusos, y que se salvó del castigo gracias a la influencia de su hermano Palas en la corte de Nerón. Hay además un dato concreto: las monedas de Judea cambiaron de diseño en el quinto año de Nerón, que corresponde al 58–59, y muchos estudiosos lo atribuyen al cambio de gobernador. Por eso la llegada de Festo se fecha hacia el 59. Festo murió en el cargo hacia el 62, y su muerte será importante en la estación VII.1.',
        { h: '«Habiendo pasado ya el ayuno»' },
        'Pablo apeló a César y fue enviado a Roma con otros presos. Lucas da un detalle del calendario: el viaje se volvió peligroso «por haber pasado ya el ayuno» (Hch 27:9), es decir, el día de la Expiación, que cae a fines de septiembre o en octubre. En el año 59, ese día fue el 5 de octubre. En el Mediterráneo se navegaba con peligro desde mediados de septiembre y no se navegaba en absoluto en invierno. Así se explica la tempestad, el naufragio y los tres meses de espera en Malta, hasta que la nave alejandrina reanudó el viaje en la primavera del 60 (Hch 28:11).',
        { h: 'Dos años enteros' },
        'Hechos termina con Pablo en Roma, en una casa alquilada, vigilado por un soldado, recibiendo a todos y predicando el reino de Dios «abiertamente y sin impedimento» (Hch 28:31). Fueron dos años, del 60 al 62. En ese tiempo Pablo escribió, probablemente, las cartas a los Efesios, a los Colosenses, a Filemón y a los Filipenses, que se conocen como las cartas de la prisión. Lucas no dice qué pasó después; muchos piensan que terminó de escribir Hechos precisamente entonces, hacia el 62.',
        ir('Ver en Los viajes de Pablo: el viaje a Roma', R.pablo + '#recorrido/9'),
        ir('Ver en La dinastía de Herodes: Pablo ante Agripa y Berenice', R.herodes + '#agripas/5')
      ],
      pensar: 'Pablo había deseado durante años ir a Roma (Ro 1:10-13), y llegó encadenado, después de un naufragio. ¿Cómo te ayuda su historia a confiar en Dios cuando sus respuestas llegan de una manera que no esperabas?'
    }
  ];

  Object.assign(window.__CR, { jerusalen, pablo });
})();
