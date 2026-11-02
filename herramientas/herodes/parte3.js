/* La dinastía de Herodes · ruta III. Los hijos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA III. Los hijos: Arquelao, Felipe y Antipas ==================
  const hijos = [
    {
      id: 'arquelao', n: 'Arquelao, etnarca de Judea', ref: 'Mateo 2:22-23; Hechos 5:37; Lucas 2:2', fecha: [-4, 6],
      visual: [
        img('hd-arquelao-pascua.webp', 'En los atrios del templo de Jerusalén, llenos de peregrinos en la Pascua, el joven Arquelao, de unos veinte años, con manto púrpura y diadema de tela blanca, rodeado de su guardia, habla desde una plataforma elevada a una multitud agitada que levanta los brazos; al fondo, el santuario de piedra blanca y oro', 'Arquelao en el templo durante la Pascua del 4 a.C., poco antes de reprimir la revuelta con el ejército. Recreación.'),
        pasos([
          { t: '4 a.C.: Arquelao recibe Judea, Samaria e Idumea, con Jerusalén y Cesarea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao'], lugares: ['jerusalen', 'cesarea', 'samaria', 'jerico', 'hebron'] } },
          { t: '6 d.C.: Augusto lo destierra a Viena, en la Galia; su territorio pasa a ser provincia romana, con un prefecto en Cesarea', fecha: 6, estado: { view: V.palestina, capas: ['hd-provincia'], lugares: ['jerusalen', 'cesarea', 'samaria'] } }
        ]),
        cita('Mateo 2:19-23', '@@mt/2/19-23')
      ],
      texto: [
        'Arquelao era hijo de Herodes y de Maltace, una samaritana. Tenía unos dieciocho años cuando murió su padre, y heredó la parte más importante del reino: Judea con Jerusalén y el templo, Samaria e Idumea. Su gobierno comenzó con sangre. En la primera Pascua, la multitud del templo le pidió castigar a los consejeros de su padre que habían quemado a los jóvenes del águila, y bajar los impuestos. Arquelao respondió enviando al ejército: murieron unos tres mil peregrinos, y se suspendió la fiesta.',
        { h: 'Diez años de mal gobierno' },
        'Augusto le dio el título de etnarca, con la promesa de hacerlo rey si gobernaba bien. No lo logró. Josefo dice que trató con brutalidad a judíos y samaritanos. Cambió tres veces de sumo sacerdote. Y causó escándalo al casarse con Glafira, que había sido esposa de su medio hermano Alejandro y tenía hijos de él: la ley prohibía tomar a la mujer del hermano (Lv 18:16). Construyó palacios en Jericó y fundó una aldea con su propio nombre, Arquelaida.',
        'Por eso José, al volver de Egipto, «oyendo que Arquelao reinaba en Judea en lugar de Herodes su padre, tuvo temor de ir allá» (Mt 2:22). Avisado por Dios en sueños, se fue a Galilea, donde gobernaba su hermano Antipas, y se estableció en Nazaret.',
        { h: 'El destierro y el censo' },
        'En el año 6 d.C., una delegación de judíos y samaritanos —que rara vez se ponían de acuerdo en algo— viajó a Roma a acusarlo. Augusto lo llamó, lo escuchó y lo desterró a Viena, en la Galia, donde murió. Judea, Samaria e Idumea pasaron a ser una provincia romana gobernada por un prefecto que vivía en Cesarea. El primero fue Coponio; el quinto, veinte años después, Poncio Pilato.',
        'Para fijar los impuestos de la nueva provincia, Quirinio, el gobernador de Siria, hizo un censo. Contra ese censo se levantó Judas el galileo, que enseñaba que pagar tributo a Roma era aceptar a otro señor en lugar de Dios (Hch 5:37). De esa idea nacieron los zelotes. La pregunta que años después los fariseos y los herodianos le hicieron a Jesús —«¿Es lícito dar tributo a César, o no?»— venía de aquí.',
        ir('Ver en El mundo judío: el prefecto romano, de Coponio a Pilato', R.mundo + '#poder/1')
      ],
      pensar: 'José obedeció la voz de Dios y por eso Jesús creció en Nazaret. ¿Cómo te ayuda esta historia a confiar en que Dios guía tus pasos aun a través de las malas decisiones de los gobernantes?'
    },
    {
      id: 'felipe', n: 'Felipe, el tetrarca del noreste', ref: 'Lucas 3:1; Mateo 16:13-16; Juan 1:44; Lucas 9:10', fecha: [-4, 34],
      visual: [
        img('hd-felipe-paneas.webp', 'Junto a la gran gruta de Paneas, al pie del monte Hermón, de donde brota una de las fuentes del Jordán, el tetrarca Felipe, un hombre sereno de unos cuarenta años con manto azul oscuro, recorre las obras de la nueva ciudad de Cesarea; frente a la roca se ve un templo de mármol blanco y obreros con piedras', 'Felipe el tetrarca en Paneas, la ciudad que reconstruyó con el nombre de Cesarea. Recreación.'),
        mapa({ view: V.norte, capas: ['hd-felipe', 'hd-antipas'], lugares: ['paneas', 'cesarea-filipo', 'betsaida', 'capernaum', 'hermon', 'gamla', 'tiberias'] }),
        cita('Mateo 16:13-16', '@@mt/16/13-16')
      ],
      texto: [
        'Felipe era hijo de Herodes y de Cleopatra de Jerusalén. Heredó las tierras del noreste, al este y al norte del mar de Galilea, que Lucas llama «Iturea» y «la provincia de Traconite» (Lc 3:1): una región de mesetas volcánicas, aldeas de pastores y gente en su mayoría siria, árabe y griega. Gobernó treinta y siete años, del 4 a.C. al 34 d.C., y fue el más tranquilo de los hijos de Herodes.',
        { h: 'Un príncipe que juzgaba en el camino' },
        'Josefo dice que Felipe gobernó con moderación y que viajaba por su territorio con unos pocos acompañantes, llevando consigo su silla de juez: si alguien necesitaba justicia, la armaban allí mismo y él oía la causa. Como sus súbditos eran mayormente gentiles, fue el primer gobernante judío que acuñó monedas con la imagen del emperador y con la suya propia, algo que su padre y su hermano Antipas nunca hicieron.',
        { h: 'Dos ciudades del evangelio' },
        'Felipe reconstruyó dos ciudades que aparecen en los evangelios. Junto a la gruta de Paneas, en una de las fuentes del Jordán, donde se adoraba al dios griego Pan, levantó una ciudad que llamó Cesarea en honor del emperador; para distinguirla de la del mar, se la conocía como Cesarea de Filipo. Allí, rodeado de templos paganos, Jesús preguntó a sus discípulos quién decían ellos que era él, y Pedro respondió: «Tú eres el Cristo, el Hijo del Dios viviente» (Mt 16:16).',
        'También engrandeció Betsaida, a la orilla norte del lago, y la llamó Julias en honor de la familia del emperador. Betsaida era la ciudad de Andrés, Pedro y Felipe el apóstol (Jn 1:44). Cuando Antipas mató a Juan el Bautista, Jesús cruzó el lago y se retiró a un lugar desierto cerca de Betsaida (Mt 14:13; Lc 9:10): dejaba el territorio de Antipas por el de Felipe. Allí alimentó a los cinco mil.',
        'Felipe se casó con Salomé, la hija de Herodías. Murió sin hijos, y su territorio pasó por unos años a la provincia de Siria, hasta que Calígula se lo dio en el 37 d.C. a su sobrino Agripa I.',
        arbol('Ver a Felipe en el árbol', 'felipe')
      ],
      pensar: 'En Cesarea de Filipo, una ciudad dedicada a César y al dios Pan, Pedro confesó que Jesús es el Cristo. ¿Dónde te toca a ti confesar tu fe en Jesús en medio de otros señores y otros dioses?'
    },
    {
      id: 'antipas', n: 'Antipas, el constructor de Galilea', ref: 'Lucas 3:1; Lucas 8:3; Hechos 13:1; Juan 6:23; Lucas 7:24-25', fecha: [-4, 39],
      visual: [
        img('../mundo-judio/img/mj-antipas-banquete.webp', 'En un salón de un palacio herodiano de Galilea, decorado con mosaicos y columnas, Herodes Antipas reclinado en un diván preside un banquete con nobles galileos, oficiales y tribunos', 'Herodes Antipas da una cena a «sus príncipes y tribunos y a los principales de Galilea» (Marcos 6:21). Recreación.'),
        mapa({ view: V.galilea, capas: ['hd-antipas'], lugares: ['seforis', 'nazaret', 'tiberias', 'magdala', 'capernaum', 'cana', 'nain'] }),
        tabla({
          titulo: 'Herodes Antipas en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Padres', 'Herodes el Grande y Maltace, samaritana; hermano de Arquelao'],
            ['Gobernó', 'Galilea y Perea, del 4 a.C. al 39 d.C. (43 años)'],
            ['Título', 'Tetrarca; la gente lo llamaba rey (Mr 6:14)'],
            ['Capitales', 'Séforis y, desde hacia el 20 d.C., Tiberíades'],
            ['Esposas', 'Una hija de Aretas IV, rey nabateo; después, Herodías'],
            ['En su corte', 'Chuza, su intendente, esposo de Juana (Lc 8:3); Manaén, criado con él (Hch 13:1)'],
            ['Monedas', 'Sin imágenes humanas, con palmas y cañas, para no ofender a los judíos']
          ]
        })
      ],
      texto: [
        'Herodes Antipas, hermano de Arquelao, gobernó Galilea y Perea durante cuarenta y tres años. Es el «Herodes» de los evangelios durante toda la vida adulta de Jesús: Jesús creció en su territorio, predicó en sus aldeas y murió después de pasar por su presencia.',
        { h: 'Séforis, a una hora de Nazaret' },
        'En el 4 a.C., durante las revueltas que siguieron a la muerte de Herodes, los romanos de Varo quemaron Séforis, la ciudad principal de Galilea. Antipas la reconstruyó y la hizo su capital, «el adorno de toda Galilea», según Josefo. Séforis estaba a unos seis kilómetros de Nazaret. Algunos piensan que José y Jesús, como artesanos, pudieron trabajar en su reconstrucción; los evangelios no lo dicen, y nunca mencionan que Jesús entrara en Séforis.',
        { h: 'Tiberíades, una ciudad sobre tumbas' },
        'Hacia el año 20 d.C., Antipas fundó a orillas del lago una nueva capital y la llamó Tiberíades, en honor del emperador Tiberio. La construyó sobre un antiguo cementerio, y por eso los judíos que guardaban las leyes de pureza no querían vivir allí; Antipas tuvo que poblarla con gente pobre, libertos y extranjeros. Juan menciona barcas que venían de Tiberias (Jn 6:23), pero los evangelios tampoco cuentan que Jesús entrara en ella. Jesús enseñó en las aldeas y en Capernaúm, no en las ciudades del tetrarca.',
        { h: 'Un príncipe hábil y cuidadoso' },
        'Antipas fue más prudente que su padre y que Arquelao. Sus monedas no llevaban imágenes humanas. Subía a Jerusalén para las fiestas, como en la Pascua en que Pilato le envió a Jesús (Lc 23:7). Su corte llegó a tocar al evangelio: Juana, esposa de Chuza, el intendente de Herodes, ayudaba a Jesús con sus bienes (Lc 8:3), y Manaén, que se había criado con Herodes el tetrarca, llegó a ser profeta y maestro en la iglesia de Antioquía (Hch 13:1).',
        'Cuando Jesús preguntó a la gente qué había salido a ver al desierto —«¿Una caña sacudida por el viento?… ¿A un hombre cubierto de vestiduras delicadas?» (Lc 7:24-25)—, el contraste era claro: Juan no era como los que «viven en deleites, en los palacios de los reyes». Algunos estudiosos piensan que la caña alude a las monedas de Antipas, que llevaban una caña; es una sugerencia, no algo seguro.'
      ],
      pensar: 'Juana venía de la casa de Herodes y Manaén se crió con él; los dos siguieron a Cristo. ¿Qué te enseña esto sobre el alcance del evangelio en los lugares de poder y sobre las personas que tú darías por perdidas?'
    },
    {
      id: 'juan', n: 'Antipas, Herodías y Juan el Bautista', ref: 'Marcos 6:17-29; Lucas 3:19-20; Mateo 14:3-12; Levítico 18:16', fecha: [28, 36],
      visual: [
        img('hd-juan-antipas.webp', 'En un patio de piedra de la fortaleza de Maqueronte, sobre los montes de Moab, Juan el Bautista, flaco y tostado, con vestido de pelo de camello, encadenado entre dos soldados, habla con firmeza al tetrarca Herodes Antipas, que lo escucha perplejo; detrás de Antipas, Herodías, con un velo fino y joyas de oro, mira a Juan con odio', '«No te es lícito tener la mujer de tu hermano» (Marcos 6:18). Juan el Bautista ante Herodes Antipas y Herodías. Recreación.'),
        mapa({ view: V.palestina, capas: ['hd-antipas'], lugares: ['maqueronte', 'tiberias', 'betabara', 'enon', 'petra', 'jerusalen'] }),
        foto('foto-maqueronte.jpg', 'Ruinas de piedra excavadas en la cima de la colina de Maqueronte, con una gran cisterna abierta y, al fondo, los montes áridos de Moab', 'Restos de la fortaleza de Maqueronte, en Perea, donde según Josefo Juan el Bautista estuvo preso y fue ejecutado.', 'CC BY-SA 2.0 · Carole Raddato, vía Wikimedia Commons'),
        cita('Marcos 6:17-20', '@@mr/6/17-20')
      ],
      texto: [
        'Antipas estuvo casado muchos años con una hija de Aretas IV, el rey nabateo de Petra, un matrimonio que aseguraba la paz en la frontera sur de Perea. En un viaje a Roma se hospedó en casa de su medio hermano Herodes II y se enamoró de su esposa, Herodías, que era además sobrina de ambos. Acordaron casarse: ella dejaría a su marido y él a su esposa. La hija de Aretas se enteró, pidió ir a Maqueronte, en la frontera, y desde allí huyó con su padre.',
        { h: '«No te es lícito»' },
        'Juan el Bautista no calló. Le decía a Antipas: «No te es lícito tener la mujer de tu hermano» (Mr 6:18). La ley de Moisés lo prohibía (Lv 18:16; 20:21). Lucas agrega que Juan lo reprendía también por «todas las maldades que Herodes había hecho» (Lc 3:19). Antipas lo hizo encarcelar. Josefo, que no menciona la reprensión, dice que lo hizo por temor a que la influencia de Juan sobre el pueblo terminara en una rebelión, y que lo llevó a Maqueronte.',
        { h: 'Un hombre dividido' },
        'Marcos muestra a un Antipas dividido. Herodías quería matar a Juan, «y no podía; porque Herodes temía a Juan, sabiendo que era varón justo y santo, y le guardaba a salvo; y oyéndole, se quedaba muy perplejo, pero le escuchaba de buena gana» (Mr 6:19-20). Le gustaba oírlo, pero no estaba dispuesto a dejar su pecado.',
        'En la fiesta de su cumpleaños, ante los principales de Galilea, Antipas hizo un juramento imprudente a la hija de Herodías, y ella, aconsejada por su madre, pidió la cabeza de Juan. «El rey se entristeció mucho; pero a causa del juramento, y de los que estaban con él a la mesa, no quiso desecharla» (Mr 6:26). Pesó más su orgullo ante los invitados que su conciencia.',
        { h: 'El juicio de la historia' },
        'Pocos años después, hacia el 36 d.C., Aretas atacó a Antipas y destruyó su ejército. Josefo cuenta que muchos judíos vieron en esa derrota el castigo de Dios por la muerte de Juan, «llamado el Bautista», un hombre bueno que exhortaba a los judíos a practicar la justicia. Es una de las pocas menciones de Juan fuera de la Biblia, y confirma lo que dicen los evangelios.',
        arbol('Ver a Herodías en el árbol', 'herodias')
      ],
      pensar: 'Antipas escuchaba a Juan con gusto, pero no se arrepintió, y terminó cediendo ante la presión de los demás. ¿Hay algo que Dios te ha mostrado y que todavía postergas por lo que dirán los que te rodean?'
    },
    {
      id: 'jesus', n: 'Antipas y Jesús: «aquella zorra»', ref: 'Lucas 9:7-9; Lucas 13:31-33; Marcos 8:15; Lucas 23:6-12; Hechos 4:27', fecha: [29, 30],
      visual: [
        img('../mundo-judio/img/mj-antipas-jesus.webp', 'En una sala del palacio asmoneo de Jerusalén, Herodes Antipas, sentado, observa con curiosidad burlona a Jesús, que está de pie en silencio, visto de espaldas, mientras soldados de Antipas lo rodean y sacerdotes lo acusan', 'Jesús ante Herodes Antipas en Jerusalén (Lucas 23:8-11). Recreación.'),
        cita('Lucas 23:6-12', '@@lc/23/6-12'),
        cita('Lucas 13:31-33', '@@lc/13/31-33', 'Lucas 13')
      ],
      texto: [
        'Antipas oyó hablar de Jesús cuando su fama se extendió por Galilea. Lucas dice que «estaba perplejo», porque unos decían que Juan había resucitado, y que Antipas dijo: «A Juan yo le hice decapitar; ¿quién, pues, es éste, de quien oigo tales cosas? Y procuraba verle» (Lc 9:7-9). Marcos y Mateo cuentan que su conciencia lo atormentaba: pensaba que Jesús era Juan vuelto de los muertos (Mr 6:16).',
        { h: '«Id, y decid a aquella zorra»' },
        'Más tarde, mientras Jesús enseñaba camino a Jerusalén, unos fariseos le dijeron: «Sal, y vete de aquí, porque Herodes te quiere matar» (Lc 13:31). Jesús respondió: «Id, y decid a aquella zorra: He aquí, echo fuera demonios y hago curaciones hoy y mañana, y al tercer día termino mi obra» (Lc 13:32). La zorra era, para los judíos, un animal astuto y destructivo, pero pequeño al lado del león. Jesús no le temía: su vida no estaba en manos de Antipas, sino que seguiría el camino que el Padre le había trazado hasta Jerusalén.',
        'Jesús advirtió también a sus discípulos: «guardaos de la levadura de los fariseos, y de la levadura de Herodes» (Mr 8:15). La levadura de Herodes era la de quienes ponen el poder y la conveniencia política por encima de Dios.',
        { h: 'Jesús ante Herodes' },
        'En la última Pascua, Antipas estaba en Jerusalén. Cuando Pilato supo que Jesús era galileo, se lo envió, quizás como cortesía o para librarse del caso. «Herodes, viendo a Jesús, se alegró mucho», porque esperaba verle hacer alguna señal (Lc 23:8). Le hizo muchas preguntas, «pero él nada le respondió» (Lc 23:9). Jesús, que había hablado con Pilato, guardó silencio ante el hombre que había matado a Juan y que solo buscaba un espectáculo.',
        'Entonces Antipas y sus soldados se burlaron de él, lo vistieron con una ropa espléndida y lo devolvieron a Pilato. «Y se hicieron amigos Pilato y Herodes aquel día» (Lc 23:12). Pilato reconoció después que ni él ni Herodes habían hallado en Jesús nada digno de muerte (Lc 23:15).',
        'La iglesia de Jerusalén vio en esta escena el cumplimiento del Salmo 2: «se unieron en esta ciudad contra tu santo Hijo Jesús, a quien ungiste, Herodes y Poncio Pilato» (Hch 4:27), para hacer lo que Dios había determinado.',
        ir('Ver en El mundo judío: Herodes Antipas y Felipe', R.mundo + '#poder/2')
      ],
      pensar: 'Antipas quería ver a Jesús para ver una señal, no para creer, y Jesús no le habló. ¿Con qué actitud te acercas tú a Jesús: buscando algo que te asombre, o dispuesto a obedecer lo que te diga?'
    },
    {
      id: 'fin', n: 'El fin de Antipas', ref: 'Lucas 1:52; Salmo 146:3-4; Proverbios 16:18', fecha: [36, 39],
      visual: [
        pasos([
          { t: '36 d.C.: Aretas IV, el padre de la primera esposa de Antipas, lo ataca desde Petra y destruye su ejército', fecha: 36, estado: { view: V.sur, capas: ['hd-antipas'], lugares: ['petra', 'maqueronte', 'tiberias'] } },
          { t: '37 d.C.: Calígula nombra rey a Agripa I, hermano de Herodías, sobre la antigua tetrarquía de Felipe', fecha: 37, estado: { view: V.palestina, capas: ['hd-antipas', 'hd-agripa1-37'], lugares: ['tiberias', 'paneas', 'jerusalen'] } },
          { t: '39 d.C.: Antipas va a Roma a pedir el título de rey; Calígula lo destierra a Lugdunum, en la Galia', fecha: 39, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['tiberias', 'puteoli', 'roma', 'h-lugdunum'], trazos: ['hd-antipas-39'] } },
          { t: '40 d.C.: sus tierras, Galilea y Perea, pasan a Agripa I', fecha: 40, estado: { view: V.palestina, capas: ['hd-agripa1-40'], lugares: ['tiberias', 'paneas', 'maqueronte', 'jerusalen'] } }
        ]),
        cita('Salmo 146:3-4', '@@sal/146/3-4')
      ],
      texto: [
        'Antipas gobernó más tiempo que nadie de su familia, salvo su padre. Pero su final fue humillante, y lo provocó su propia ambición.',
        { h: 'La derrota' },
        'Aretas IV, el rey nabateo, nunca le perdonó que hubiera repudiado a su hija para casarse con Herodías. Hacia el 36 d.C., una disputa de límites le dio la excusa, y su ejército destruyó al de Antipas. Antipas pidió ayuda al emperador Tiberio, que ordenó al gobernador de Siria castigar a Aretas; pero Tiberio murió en el 37, y la campaña se suspendió.',
        { h: 'Los celos de Herodías' },
        'Ese mismo año, el nuevo emperador, Calígula, dio la antigua tetrarquía de Felipe y el título de rey a su amigo Agripa, hermano de Herodías. Agripa había vivido años antes de la caridad de Antipas, que le había dado un cargo menor en Tiberíades. Ahora el pobre de la familia era rey, y el tetrarca seguía siendo tetrarca. Herodías no lo soportó, y presionó a su esposo para que fuera a Roma a pedir también el título de rey.',
        'Antipas viajó en el 39 d.C. y encontró a Calígula en Bayas, cerca de Puteoli. Pero Agripa había enviado antes una carta acusándolo de haber conspirado contra Roma y de tener armas guardadas para setenta mil soldados. Antipas no pudo negar lo de las armas. Calígula le quitó su tetrarquía y sus bienes, se los dio a Agripa, y lo desterró a Lugdunum, la actual Lyon, en la Galia.',
        'Calígula ofreció a Herodías quedarse con sus bienes, por ser hermana de Agripa. Josefo cuenta que ella se negó y prefirió acompañar a su marido en el destierro. Allí desaparecen los dos de la historia.',
        { h: 'El que quita de los tronos' },
        'Antipas había matado a Juan para no quedar mal ante sus invitados, y se había burlado de Jesús. Terminó sus días lejos de su tierra, sin título y sin reino, por pedir más de lo que tenía. María había cantado que Dios «quitó de los tronos a los poderosos, y exaltó a los humildes» (Lc 1:52). Y el salmista advierte: «No confiéis en los príncipes, ni en hijo de hombre» (Sal 146:3).',
        arbol('Ver a Antipas en el árbol', 'antipas')
      ],
      pensar: 'Antipas lo perdió todo por desear un título más. ¿Qué ambición, aunque parezca pequeña, podría llevarte a perder lo que Dios ya te ha dado?'
    }
  ];

  window.__HD.hijos = hijos;
})();
