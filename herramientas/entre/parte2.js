/* Entre los Testamentos · rutas II. El final del período persa y III. Alejandro y los Ptolomeos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  // ================== RUTA II. El final del período persa ==================
  const persa = [
    {
      id: 'yehud', n: 'Yehud, una provincia gobernada por sacerdotes', ref: 'Nehemías 12:10-11; Nehemías 12:22; Nehemías 5:14-15; Hageo 1:1', fecha: [-430, -332],
      visual: [
        mapa({ view: V.judea, capas: ['h-yehud'], lugares: ['jerusalen', 'mizpa', 'jerico', 'belen', 'gezer'] }),
        cita('Nehemías 12:10-11', '@@neh/12/10-11'),
        tabla({
          titulo: 'Los sumos sacerdotes después del exilio',
          cab: ['Sumo sacerdote', 'Época aproximada', 'Dónde aparece'],
          filas: [
            ['Jesúa (Josué)', '538–510 a.C.', 'Esdras 3:2; Hageo 1:1; Zacarías 3'],
            ['Joiacim', 'c. 500 a.C.', 'Nehemías 12:10, 12'],
            ['Eliasib', 'c. 445 a.C.', 'Nehemías 3:1; 13:4, 28'],
            ['Joiada', 'c. 430 a.C.', 'Nehemías 12:10; 13:28'],
            ['Jonatán o Johanán', 'c. 410 a.C.', 'Nehemías 12:11, 22; papiros de Elefantina (407 a.C.)'],
            ['Jadúa', 'c. 332 a.C.', 'Nehemías 12:11, 22; Josefo lo pone ante Alejandro']
          ],
          nota: 'Nehemías 12 lleva la lista de los sumos sacerdotes hasta Jadúa, en el final del período persa.'
        })
      ],
      texto: [
        'Después de Nehemías, la provincia persa de Judá, llamada en arameo Yehud, siguió existiendo durante un siglo más, hasta la llegada de Alejandro Magno en el 332 a.C. Era un territorio muy pequeño: de Mizpa y Bet-el, al norte, hasta Bet-sur, al sur, apenas unos cuarenta kilómetros, con Jerusalén en el centro. Sus habitantes no eran muchos más que los de una ciudad mediana de hoy.',
        { h: 'Un gobernador y un sumo sacerdote' },
        'Yehud tenía un gobernador nombrado por el rey persa, como lo había sido Nehemías (Neh 5:14). Se conocen algunos por los papiros y las monedas, como Bagohi, gobernador hacia el 407 a.C., y Yehezquías, cuyo nombre aparece en pequeñas monedas de plata del siglo IV. Pero la autoridad que más pesaba en la vida del pueblo era el sumo sacerdote. Él presidía el templo, representaba a la comunidad ante los persas y era el guardián de la ley.',
        'Nehemías conserva la lista de los sumos sacerdotes desde el regreso del exilio: «Jesúa engendró a Joiacim, y Joiacim engendró a Eliasib, y Eliasib engendró a Joiada; Joiada engendró a Jonatán, y Jonatán engendró a Jadúa» (Neh 12:10-11). Esa lista llega hasta Jadúa, que según Josefo era sumo sacerdote cuando llegó Alejandro. Es el último dato histórico del Antiguo Testamento.',
        { h: 'Una provincia que acuñaba monedas' },
        'Los arqueólogos han encontrado decenas de pequeñas monedas de plata con la inscripción YHD, «Yehud», en letras hebreas antiguas. Algunas copian el búho de las monedas de Atenas, que circulaban por todo el oriente. Son la prueba de que la provincia tenía cierta autonomía y de que la cultura griega ya llegaba a Judea antes de Alejandro, por el comercio.',
        { h: 'Un tiempo de espera' },
        'Del siglo IV a.C. la Biblia no cuenta nada y las demás fuentes dicen muy poco. Fue un tiempo tranquilo, sin grandes acontecimientos, en que la pequeña comunidad de Jerusalén vivía alrededor del templo reconstruido y de la ley. Hageo y Zacarías habían prometido que la gloria de esa casa sería mayor que la de la primera (Hag 2:9). Esa promesa seguía esperando su cumplimiento.'
      ],
      pensar: 'Yehud era una provincia pequeña y sin poder, pero en ella Dios preservó la línea de la promesa. ¿Desprecias los comienzos pequeños, o confías en que Dios obra también en ellos (Zac 4:10)?'
    },
    {
      id: 'elefantina', n: 'Los papiros de Elefantina', ref: 'Jeremías 44:1; Nehemías 2:10; Nehemías 12:22; Deuteronomio 12:5-6', fecha: [-419, -407],
      visual: [
        img('elefantina-carta.webp', 'En una casa de adobe de la isla de Elefantina, junto al Nilo, un escriba judío de unos cincuenta años, sentado en el suelo con las piernas cruzadas, escribe en arameo sobre una hoja de papiro con un cálamo; a su lado, un sacerdote judío de barba gris dicta, y por la puerta abierta se ven palmeras, el río y barcas de vela', 'Los judíos de Elefantina escriben al gobernador de Judá pidiendo ayuda para reconstruir su templo (407 a.C.). Recreación.'),
        mapa({ view: V.egipto, capas: ['persia-336'], lugares: ['elefantina', 'menfis', 'jerusalen', 'samaria'] }),
        foto('elefantina-papiro.webp', 'Papiro escrito en arameo con diecisiete líneas de tinta negra, de la colonia judía de Elefantina', 'La petición al gobernador Bagohi para reconstruir el templo de Elefantina (407 a.C.).', 'Dominio público · reproducción de Sachau (1907), vía Wikimedia Commons', 'Foto del papiro'),
        tabla({
          titulo: 'Personas de la Biblia nombradas en los papiros',
          cab: ['Persona', 'En la Biblia', 'En los papiros'],
          filas: [
            ['Sanbalat', 'Gobernador de Samaria, enemigo de Nehemías (Neh 2:10)', 'Sus hijos Delaías y Selemías gobiernan Samaria en el 407 a.C.'],
            ['Johanán', 'Sumo sacerdote, hijo de Eliasib (Neh 12:22-23)', 'Sumo sacerdote en Jerusalén; no respondió una carta anterior']
          ]
        })
      ],
      texto: [
        'Elefantina es una isla del río Nilo, en el extremo sur de Egipto, frente a la actual Asuán. Allí había, en el siglo V a.C., una guarnición de soldados judíos al servicio de los persas, con sus familias. A comienzos del siglo XX se encontraron en la isla cientos de papiros en arameo con sus contratos, cartas y listas. Son la mejor ventana que tenemos a la vida judía en los años de Esdras, Nehemías y Malaquías.',
        { h: 'Un templo fuera de Jerusalén' },
        'Los judíos de Elefantina tenían un templo propio dedicado a Yahu, como escribían el nombre de Dios, con altar para sacrificios. Decían que existía desde antes de que los persas conquistaran Egipto, en el 525 a.C. En el 410 a.C., aprovechando la ausencia del gobernador persa, los sacerdotes del dios egipcio Jnum lo destruyeron.',
        'Tres años después, los jefes de la colonia escribieron a Bagohi, el gobernador persa de Judá. Le recordaban que ya habían escrito al sumo sacerdote Johanán y a los nobles de Jerusalén, sin recibir respuesta, y le pedían permiso para reconstruir el templo. Enviaron la misma petición a Delaías y Selemías, hijos de Sanbalat, gobernador de Samaria, el mismo Sanbalat que se había opuesto a Nehemías (Neh 2:10). La respuesta autorizó a reconstruir el altar para ofrendas de cereal e incienso, pero no mencionó los sacrificios de animales.',
        { h: 'Lo que muestran' },
        'Los papiros confirman nombres y personas del libro de Nehemías, y muestran que la comunicación entre Jerusalén, Samaria y Egipto era fluida. Uno de ellos, del 419 a.C., da instrucciones para celebrar la fiesta de los panes sin levadura. Pero también revelan una fe mezclada: algunos documentos nombran a otras divinidades junto a Yahu. Un siglo y medio antes, Jeremías había reprendido a los judíos que vivían en Egipto, «en Migdol, en Tafnes, en Menfis y en tierra de Patros» (Jer 44:1), por adorar a la reina del cielo.',
        'El silencio del sumo sacerdote Johanán probablemente no fue casual. La ley mandaba ofrecer los sacrificios solo en el lugar que Dios escogiera (Dt 12:5-6). Mientras en Jerusalén la ley pasaba al centro de la vida del pueblo, en la lejana Elefantina la fe se había mezclado con las costumbres de los vecinos.'
      ],
      pensar: 'Los judíos de Elefantina conservaron el nombre de Dios, pero lo mezclaron con otros dioses. ¿Qué influencias de tu entorno pueden ir mezclándose, sin que lo notes, con tu fe en el único Dios?'
    },
    {
      id: 'samaritanos', n: 'Los samaritanos y el templo del monte Gerizim', ref: '2 Reyes 17:24-41; Esdras 4:1-5; Nehemías 13:28; Juan 4:19-22', fecha: [-450, -111],
      visual: [
        img('../tierra-de-israel/img/pozo-jacob.webp', 'Jesús, de espaldas, sentado junto a un pozo de piedra a mediodía, conversando con una mujer samaritana que sostiene un cántaro; detrás se levanta el monte Gerizim', 'Jesús y la mujer samaritana junto al pozo de Jacob, frente al monte Gerizim (Juan 4). Recreación.'),
        cita('Juan 4:19-22', '@@jn/4/19-22'),
        mapa({ view: V.judea, lugares: ['monte-gerizim', 'samaria', 'sicar', 'jerusalen'] }),
        foto('pascua-samaritana.webp', 'Un samaritano vestido de blanco, con gorro rojo y blanco, sentado sobre unas piedras afila el cuchillo para el sacrificio de la Pascua', 'Un samaritano prepara el cuchillo para el sacrificio de la Pascua en el monte Gerizim (2011). La comunidad samaritana celebra allí la Pascua hasta hoy.', 'CC BY 2.0 · Flavio~, vía Wikimedia Commons', 'Foto 2011')
      ],
      texto: [
        'Cuando la mujer de Sicar le dijo a Jesús: «Nuestros padres adoraron en este monte, y vosotros decís que en Jerusalén es el lugar donde se debe adorar» (Jn 4:20), se refería al monte Gerizim, que se levantaba frente al pozo de Jacob. La división entre judíos y samaritanos, tan visible en los evangelios, se consolidó en el período entre los testamentos.',
        { h: 'El origen de la división' },
        'Después de que los asirios deportaron a Israel en el 722 a.C., trajeron a Samaria gente de otras naciones, que mezcló el culto a Jehová con el de sus dioses (2 R 17:24-41). Cuando los judíos volvieron de Babilonia y reconstruyeron el templo, los habitantes de la región quisieron participar, pero Zorobabel los rechazó, y desde entonces se opusieron a la obra (Esd 4:1-5). Sanbalat, gobernador de Samaria, fue el gran enemigo de Nehemías.',
        'Nehemías cuenta que uno de los nietos del sumo sacerdote Eliasib se había casado con una hija de Sanbalat, y que él lo expulsó (Neh 13:28). Josefo cuenta una historia parecida, aunque la ubica un siglo después: un hermano del sumo sacerdote Jadúa, casado con la hija de otro Sanbalat, fue expulsado de Jerusalén y se convirtió en el sacerdote del nuevo templo que su suegro construyó en el monte Gerizim.',
        { h: 'Un templo rival' },
        'Las excavaciones en la cumbre del Gerizim descubrieron un gran recinto sagrado, construido probablemente a mediados del siglo V a.C. y ampliado en tiempos griegos. Los samaritanos tenían su propia versión del Pentateuco, que solo reconocía los cinco libros de Moisés, y en ella el monte escogido por Dios era el Gerizim. El templo funcionó hasta que el rey asmoneo Juan Hircano lo destruyó, hacia el año 111 a.C. (ruta V). Esa destrucción dejó una herida que explica el odio que encontramos en los evangelios: «judíos y samaritanos no se tratan entre sí» (Jn 4:9).',
        { h: 'La respuesta de Jesús' },
        'Jesús no esquivó la pregunta. Afirmó que «la salvación viene de los judíos» (Jn 4:22), porque las promesas fueron dadas a Israel, pero anunció que llegaba la hora en que los verdaderos adoradores adorarían al Padre en espíritu y en verdad, ni en el Gerizim ni en Jerusalén. Y luego fue a Sicar y muchos samaritanos creyeron en él (Jn 4:39-42). Hasta hoy, una pequeña comunidad samaritana, de menos de mil personas, celebra la Pascua en la cumbre del Gerizim.'
      ],
      pensar: 'Una enemistad de siglos separaba a judíos y samaritanos, y Jesús la cruzó para dar el evangelio a una mujer. ¿Hay alguna barrera de enemistad o prejuicio que Cristo te está llamando a cruzar?'
    },
    {
      id: 'ley-centro', n: 'Lo que dejó Esdras: la ley en el centro', ref: 'Esdras 7:10; Nehemías 8:1-8; Nehemías 13:15-22; Malaquías 4:4', fecha: [-458, -332],
      visual: [
        img('../exilio/img/exi-esdras-ley.webp', 'En la plaza frente a la puerta de las Aguas de Jerusalén, el escriba Esdras, de pie sobre un púlpito de madera, abre un gran rollo de la ley ante una multitud de hombres, mujeres y niños', 'Esdras lee la ley ante el pueblo (Nehemías 8). Recreación.'),
        cita('Nehemías 8:8', '@@neh/8/8'),
        tabla({
          titulo: 'Cambios que comenzaron con Esdras',
          cab: ['Antes del exilio', 'Después del exilio'],
          filas: [
            ['La idolatría era el gran pecado de Israel', 'Israel no vuelve a adorar ídolos'],
            ['Los profetas llaman al pueblo a volver a la ley', 'La ley se lee, se copia y se enseña en público'],
            ['El hebreo es la lengua del pueblo', 'El pueblo habla arameo; la ley se explica en su lengua'],
            ['El templo es el centro del culto', 'El templo sigue siendo el centro, pero la ley llega a cada casa y aldea'],
            ['El día de reposo se descuida', 'Se guarda con cuidado (Neh 13:15-22)']
          ]
        })
      ],
      texto: [
        'Esdras «había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos» (Esd 7:10). Su obra marcó el período que siguió más que la de cualquier rey. El último profeta, Malaquías, cerró su libro con el mismo llamado: «Acordaos de la ley de Moisés mi siervo» (Mal 4:4).',
        { h: 'Un pueblo del libro' },
        'El exilio había enseñado una lección dura. Los profetas habían anunciado que Israel perdería su tierra por adorar a otros dioses, y así había ocurrido. Los que volvieron no repitieron ese pecado. En los siglos siguientes, el pueblo judío se distinguió en todo el mundo antiguo por adorar a un solo Dios, sin imágenes, y por estar dispuesto a morir antes que inclinarse ante un ídolo.',
        'Esa fidelidad se apoyaba en la ley escrita. Cuando Esdras leyó el libro de la ley desde el alba hasta el mediodía, los levitas «leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Muchos ven aquí el comienzo de la costumbre de explicar la Escritura en arameo, la lengua del pueblo, que más tarde dio origen a los targumes, traducciones arameas que se leían en las sinagogas.',
        { h: 'Las bases de lo que vendría' },
        'De este período vienen tres realidades que encontraremos en los evangelios. La primera, los escribas, maestros dedicados a copiar, estudiar y explicar la ley, siguiendo el modelo de Esdras, «escriba diligente en la ley de Moisés» (Esd 7:6). La segunda, la reunión del pueblo para leer y oír la ley, que con el tiempo daría origen a la sinagoga (ruta VII). La tercera, el cuidado minucioso por cumplir cada mandamiento, como el día de reposo, que Nehemías defendió cerrando las puertas de Jerusalén a los comerciantes (Neh 13:15-22).',
        'La tradición judía posterior atribuyó a Esdras y a una «gran asamblea» de sabios la tarea de ordenar las Escrituras. Lo cierto es que, al terminar el período persa, Israel tenía la Ley, los Profetas y los demás Escritos que Jesús nombraría al hablar de lo escrito de él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44).',
        { h: 'Un riesgo' },
        'El amor por la ley era bueno. Pero con el tiempo, a la ley escrita se le fue sumando una larga tradición de explicaciones, que algunos llegaron a poner a su misma altura. Jesús reprendería a los fariseos por eso: «Porque dejando el mandamiento de Dios, os aferráis a la tradición de los hombres» (Mr 7:8).'
      ],
      pensar: 'Los levitas leían la ley «y ponían el sentido» para que el pueblo entendiera. ¿Lees la Biblia buscando entenderla, o solo cumpliendo con leerla?'
    }
  ];

  // ================== RUTA III. Alejandro y los Ptolomeos ==================
  const ptolomeos = [
    {
      id: 'alejandro-jerusalen', n: 'Alejandro Magno y Jerusalén', ref: 'Daniel 8:5-8; Daniel 11:3-4; Zacarías 9:1-8', fecha: [-334, -323],
      visual: [
        img('../imperio-griego/img/grecia-alejandro.webp', 'Alejandro Magno, joven y sin barba, a caballo al frente de su caballería macedonia', 'Alejandro Magno conquistó el imperio persa en apenas tres años. Recreación.'),
        pasos([
          { t: '334 a.C.: Alejandro cruza a Asia y vence en el río Gránico', fecha: -334, estado: { view: V.oriente, capas: ['persia-336'], lugares: ['granico'], trazos: ['alejandro'] } },
          { t: '333–332 a.C.: Issos, el sitio de Tiro (siete meses) y el de Gaza (dos meses)', fecha: -332, estado: { view: V.levante, capas: ['persia-336'], lugares: ['issos', 'tiro', 'gaza', 'jerusalen'] } },
          { t: '331 a.C.: funda Alejandría y vence a Darío III en Gaugamela', fecha: -331, estado: { view: V.oriente, lugares: ['alejandria', 'gaugamela', 'babilonia'], trazos: ['alejandro'] } },
          { t: '323 a.C.: muere en Babilonia, con 32 años, dueño de un imperio de Grecia a la India', fecha: -323, estado: { view: V.oriente, capas: ['alejandro-323'], lugares: ['babilonia', 'jerusalen'] } }
        ]),
        cita('Zacarías 9:8', '@@zac/9/8')
      ],
      texto: [
        'Alejandro, hijo de Filipo de Macedonia, llegó al trono en el 336 a.C. con veinte años. Dos años después cruzó a Asia con unos cuarenta mil soldados. En tres grandes batallas, el río Gránico (334), Issos (333) y Gaugamela (331), destruyó el imperio persa. Tiro, la ciudad fenicia en una isla, resistió siete meses; Gaza, dos. Jerusalén se rindió sin pelear.',
        'Daniel lo había visto como un macho cabrío que venía del occidente «sobre la faz de toda la tierra, sin tocar tierra», y que derribaba al carnero de dos cuernos (Dn 8:5-7). Y había visto también su final: el cuerno grande se quebró en su mayor fuerza, y en su lugar salieron cuatro (Dn 8:8). Alejandro murió en Babilonia en el 323 a.C., con 32 años, sin un heredero capaz.',
        { h: 'Alejandro en Jerusalén, según Josefo' },
        'Josefo cuenta una historia famosa. Mientras Alejandro sitiaba Tiro, pidió ayuda a los judíos y el sumo sacerdote Jadúa se negó, por fidelidad a Darío. Después de tomar Gaza, Alejandro subió contra Jerusalén. Jadúa salió a recibirlo vestido con sus ropas sacerdotales, con los sacerdotes de lino y el pueblo de blanco. Alejandro se inclinó ante el nombre de Dios grabado en la mitra del sumo sacerdote, dijo que había visto a ese hombre en un sueño, ofreció sacrificios en el templo y le mostraron el libro de Daniel, donde se anunciaba que un griego destruiría a los persas. Al final, concedió a los judíos vivir según sus leyes.',
        { posturas: {
          titulo: '¿Visitó Alejandro Jerusalén?',
          a: { n: 'Un hecho, quizá adornado', t: 'Josefo se basa en tradiciones judías antiguas. Alejandro solía respetar a los dioses y sacerdotes de los pueblos que conquistaba, y es seguro que confirmó a los judíos el derecho a vivir según su ley, que luego respetaron sus sucesores.' },
          b: { n: 'Una leyenda posterior', t: 'Los historiadores griegos de Alejandro no mencionan la visita, y su ruta de Tiro a Gaza seguía la costa. Muchos estudiosos piensan que el relato se escribió para mostrar que Dios protegió a su templo y que el conquistador reconoció las profecías.' },
          c: 'Lo que la Escritura afirma es que Dios anunció de antemano el ascenso y la caída de Alejandro (Dn 8; 11:3-4). Muchos ven también en Zacarías 9:1-8 un anuncio de su campaña por Siria, Tiro y Gaza, con una promesa para Jerusalén: «acamparé alrededor de mi casa como un guarda» (Zac 9:8).'
        } }
      ],
      pensar: 'El hombre más poderoso de su tiempo murió joven y su imperio se dividió, tal como Daniel lo había anunciado. ¿Qué te dice eso sobre dónde poner tu confianza?'
    },
    {
      id: 'helenismo', n: 'Qué era el helenismo', ref: 'Zacarías 9:13; Hechos 17:18-21; 1 Corintios 1:22-24; Colosenses 2:8', fecha: [-332, -167],
      visual: [
        img('../imperio-griego/img/grecia-agora.webp', 'El ágora de una ciudad griega, con ciudadanos conversando entre columnas, comerciantes y un templo al fondo', 'El ágora, la plaza de la ciudad griega. Recreación.'),
        tabla({
          titulo: 'Lo que trajo el helenismo y cómo lo vivieron los judíos',
          cab: ['Elemento', 'Qué era', 'Lo que significó para los judíos'],
          filas: [
            ['La lengua griega (koiné)', 'Griego común, hablado de Egipto a la India', 'Una lengua para comerciar, leer la Biblia en la diáspora y, más tarde, escribir el Nuevo Testamento'],
            ['La ciudad (polis)', 'Ciudad con ciudadanos, asamblea, templos y edificios públicos', 'Ciudades griegas rodean Judea: la Decápolis, Ptolemaida, Gaza'],
            ['El gimnasio', 'Escuela y club de los jóvenes, donde se ejercitaban desnudos', 'Una tentación para los jóvenes de buena familia (ruta IV)'],
            ['El teatro y los juegos', 'Espectáculos dedicados a los dioses', 'Incompatibles con la ley para los fieles'],
            ['La filosofía', 'Platón, Aristóteles, los estoicos, los epicúreos', 'Algunos judíos la usaron para explicar su fe; otros la rechazaron'],
            ['Los nombres griegos', 'Alejandro, Jasón, Felipe, Andrés', 'Muchos judíos los adoptaron; dos apóstoles los llevan']
          ]
        }),
        cita('Zacarías 9:13', '@@zac/9/13')
      ],
      texto: [
        'Alejandro no solo conquistó territorios: quiso unir oriente y occidente bajo una misma cultura. Sus soldados se establecieron en decenas de ciudades nuevas, y con ellos llegaron la lengua, las costumbres y los dioses de Grecia. Los historiadores llaman helenismo, de Hélade, el nombre griego de Grecia, a esa cultura mezclada que dominó el oriente durante tres siglos.',
        { h: 'Una cultura atractiva' },
        'El helenismo era seductor. Ofrecía una lengua común que abría puertas en todo el mundo conocido, ciudades con agua corriente, teatros y baños, una educación admirada, filosofía, ciencia y deporte. Para un joven ambicioso de Jerusalén, hablar griego, vestirse a la griega y frecuentar el gimnasio era la forma de progresar. Muchas familias judías empezaron a dar nombres griegos a sus hijos. Siglos después, dos de los doce apóstoles se llamarían Andrés y Felipe.',
        { h: 'Una cultura con dioses' },
        'Pero el helenismo no era neutral. Las ciudades griegas giraban alrededor de sus templos, los juegos se dedicaban a los dioses, el gimnasio exigía ejercitarse desnudo y la filosofía ponía la razón humana por encima de toda revelación. Para un judío fiel, aceptarlo todo significaba abandonar la ley. La pregunta que dividió al pueblo durante estos siglos fue hasta dónde se podía adoptar la cultura griega sin traicionar al Dios de Israel.',
        'Zacarías había anunciado ese enfrentamiento: «despertaré a tus hijos, oh Sion, contra tus hijos, oh Grecia» (Zac 9:13). En el siglo II a.C. la tensión estallaría en la crisis de Antíoco IV y la rebelión de los macabeos (rutas IV y V).',
        { h: 'Lo que Dios usó' },
        'Al mismo tiempo, Dios usó el helenismo para preparar la extensión del evangelio. La lengua griega permitió que el Antiguo Testamento se tradujera y que el Nuevo se escribiera en una lengua que se entendía de Roma a Persia. Pablo pudo predicar en el Areópago de Atenas (Hch 17) y escribir a iglesias de Galacia, Macedonia y Roma en el mismo idioma. Pero también advirtió: «Mirad que nadie os engañe por medio de filosofías y huecas sutilezas» (Col 2:8).',
        ir('Ver en El imperio griego: lo que dejó el mundo griego', R.griego)
      ],
      pensar: 'Los jóvenes de Jerusalén tuvieron que decidir qué tomar y qué rechazar de la cultura griega. ¿Cómo decides tú qué aceptar de la cultura de tu tiempo sin traicionar tu fe?'
    },
    {
      id: 'alejandria', n: 'Alejandría y la diáspora', ref: 'Hechos 2:5-11; Hechos 6:9; Hechos 18:24; Juan 7:35; Santiago 1:1', fecha: [-331, 40],
      visual: [
        pasos([
          { t: 'A la muerte de Alejandro, sus generales se reparten el imperio', fecha: -301, estado: { view: V.oriente, capas: ['ptolomeos-301', 'seleucidas-301', 'lisimaco-301', 'casandro-301'], lugares: ['ipso', 'alejandria', 'antioquia', 'jerusalen'] } },
          { t: 'Hacia 250 a.C.: el reino de los Ptolomeos, con Judea y su capital en Alejandría', fecha: -250, estado: { view: V.levante, capas: ['ptolomeos-250'], lugares: ['alejandria', 'jerusalen', 'gaza', 'tiro'] } },
          { t: 'La diáspora judía en el siglo I: de Babilonia a Roma', fecha: 30, estado: { view: V.mediterraneo, lugares: ['jerusalen', 'alejandria', 'babilonia', 'antioquia', 'roma', 'efeso', 'cirene', 'tarso'] } }
        ]),
        cita('Hechos 2:9-11', '@@hch/2/9-11'),
        tabla({
          titulo: 'Las grandes comunidades de la diáspora',
          cab: ['Región', 'Origen', 'En el Nuevo Testamento'],
          filas: [
            ['Babilonia y Persia', 'Los que no volvieron del exilio', 'Partos, medos y elamitas en Pentecostés (Hch 2:9)'],
            ['Egipto (Alejandría)', 'Soldados, comerciantes y colonos desde el siglo VI a.C.', 'Apolos, «natural de Alejandría» (Hch 18:24)'],
            ['Siria (Antioquía)', 'Colonos de los seléucidas', 'La iglesia de Antioquía (Hch 11:19-26)'],
            ['Asia Menor', 'Familias trasladadas por Antíoco III hacia el 210 a.C.', 'Las sinagogas que visitó Pablo'],
            ['Cirene y Libia', 'Colonos de los Ptolomeos', 'Simón de Cirene (Mr 15:21); la sinagoga de los cireneos (Hch 6:9)'],
            ['Roma', 'Cautivos de Pompeyo (63 a.C.) y comerciantes', 'Los judíos expulsados por Claudio (Hch 18:2)']
          ]
        })
      ],
      texto: [
        'Después de la muerte de Alejandro, sus generales pelearon durante veinte años por su herencia. En el 301 a.C., tras la batalla de Ipso, el imperio quedó repartido en cuatro reinos, como lo había anunciado Daniel (Dn 8:22). Dos de ellos importan para Judea: el de Ptolomeo, en Egipto, y el de Seleuco, en Siria y Mesopotamia. Durante un siglo, hasta el 198 a.C., Judea fue parte del reino de los Ptolomeos.',
        { h: 'Alejandría' },
        'Alejandro fundó Alejandría en el 331 a.C., en la costa de Egipto. Bajo los Ptolomeos se convirtió en la ciudad más grande y culta del mundo griego, con su faro, uno de los siete grandes monumentos del mundo antiguo, su puerto y su biblioteca, que reunía cientos de miles de rollos. Desde el principio hubo allí judíos, y llegaron a ser tantos que, en el siglo I, dos de los cinco barrios de la ciudad eran judíos. Allí vivió Filón, un filósofo judío contemporáneo de Jesús, y de allí era Apolos, «varón elocuente, poderoso en las Escrituras» (Hch 18:24).',
        { h: 'La diáspora' },
        'Diáspora es una palabra griega que significa dispersión. Desde el exilio, la mayoría de los judíos vivía fuera de la tierra de Israel. En el período helenístico la dispersión creció: soldados, comerciantes, esclavos liberados y colonos se establecieron en Egipto, Siria, Asia Menor, Grecia, Cirene y, más tarde, Roma. Santiago dirigió su carta «a las doce tribus que están en la dispersión» (Stg 1:1).',
        'Los judíos de la diáspora hablaban griego, vivían en ciudades paganas y se reunían en sus sinagogas, que en Egipto ya aparecen en inscripciones del siglo III a.C. Guardaban el día de reposo, se negaban a adorar a los dioses de la ciudad y enviaban cada año una ofrenda al templo de Jerusalén, adonde peregrinaban en las fiestas. Por eso, en Pentecostés había en Jerusalén «judíos, varones piadosos, de todas las naciones bajo el cielo» (Hch 2:5).',
        { h: 'Un puente para el evangelio' },
        'Esas comunidades fueron el primer puente del evangelio hacia el mundo. Pablo comenzaba su predicación en cada ciudad en la sinagoga, donde encontraba judíos que conocían las Escrituras y gentiles que temían a Dios. Los mismos líderes de Jerusalén se preguntaron si Jesús iría «a los dispersos entre los griegos» a enseñar a los griegos (Jn 7:35), sin imaginar que eso era precisamente lo que iba a pasar.'
      ],
      pensar: 'Dios usó la dispersión de su pueblo para preparar el camino del evangelio. ¿Puede Dios usar también los cambios de lugar y las mudanzas de tu vida para extender su reino?'
    },
    {
      id: 'septuaginta', n: 'La Septuaginta: la Biblia en griego', ref: 'Hebreos 10:5-7; Salmo 40:6-8; Hechos 8:30-35; Romanos 3:2', fecha: [-260, -130],
      visual: [
        img('../imperio-griego/img/grecia-septuaginta.webp', 'Ancianos judíos traducen las Escrituras hebreas al griego en una sala de Alejandría, con rollos sobre las mesas', 'La traducción de la ley al griego en Alejandría. Recreación.'),
        tabla({
          titulo: 'La Septuaginta en el Nuevo Testamento',
          cab: ['Pasaje del NT', 'Cita', 'Qué muestra'],
          filas: [
            ['Hebreos 10:5', 'Salmo 40:6', '«Me preparaste cuerpo» sigue el griego; el hebreo dice «has abierto mis oídos»'],
            ['Hechos 8:32-33', 'Isaías 53:7-8', 'El etíope lee Isaías en griego'],
            ['Mateo 1:23', 'Isaías 7:14', 'El griego traduce «virgen» (parthénos)'],
            ['Hechos 15:16-17', 'Amós 9:11-12', 'Jacobo cita la forma griega, que habla de «los hombres» que buscan al Señor']
          ],
          nota: 'Los apóstoles citan unas veces la Septuaginta y otras el texto hebreo; el Espíritu Santo los guio en cada caso.'
        })
      ],
      texto: [
        'Los judíos de Alejandría hablaban griego y muchos ya no entendían el hebreo. Necesitaban la Escritura en su lengua. Así nació la primera traducción de la Biblia, la Septuaginta, que se hizo en Alejandría a partir del siglo III a.C.',
        { h: 'La leyenda de los setenta' },
        'Un escrito judío del siglo II a.C., la Carta de Aristeas, cuenta que el rey Ptolomeo II (285–246 a.C.) quiso tener la ley de los judíos en su biblioteca y pidió al sumo sacerdote de Jerusalén traductores. Llegaron setenta y dos ancianos, seis por tribu, que tradujeron la ley en setenta y dos días en la isla de Faros. De ese número viene el nombre Septuaginta, «setenta», que se abrevia con el número romano LXX. La historia tiene rasgos de leyenda, pero es probable que la ley se tradujera en Alejandría en el siglo III a.C., y que los demás libros se tradujeran poco a poco durante el siglo siguiente. Hacia el 132 a.C., el nieto de Ben Sira ya conocía la traducción de la Ley, los Profetas y los demás libros.',
        { h: 'La Biblia de la iglesia primitiva' },
        'La Septuaginta fue la Biblia de los judíos de la diáspora y, después, la de los primeros cristianos de habla griega. Cuando Felipe encontró al funcionario etíope, este iba leyendo Isaías, muy probablemente en griego (Hch 8:30). Muchas citas del Antiguo Testamento en el Nuevo siguen la Septuaginta. Por ejemplo, Hebreos pone en boca de Cristo las palabras «me preparaste cuerpo» (He 10:5), que es la forma griega del Salmo 40:6.',
        'Sin la Septuaginta, la predicación de los apóstoles a los gentiles habría sido mucho más difícil. Cuando Pablo llegaba a una sinagoga de Asia o Grecia, los judíos y los gentiles temerosos de Dios ya conocían las promesas de Dios en su propia lengua.',
        { h: 'Una traducción, no un nuevo canon' },
        'Las copias de la Septuaginta que conocemos, hechas por cristianos siglos después, incluyen además algunos libros escritos en griego o traducidos más tarde, los que hoy se llaman apócrifos. Pero eso no significa que los judíos de Alejandría tuvieran una Biblia distinta. A Israel le fue confiada la palabra de Dios (Ro 3:2), y esa palabra es la que la Septuaginta tradujo.',
        ir('Ver en De la Biblia a nosotros: las versiones antiguas', R.biblia),
        ir('Ver en Los libros apócrifos: cómo llegaron a las Biblias', R.apocrifos + '#que/4')
      ],
      pensar: 'Dios hizo que su palabra se tradujera a la lengua que hablaba el mundo de entonces. ¿Qué haces tú para que la Palabra llegue en un lenguaje que entiendan quienes te rodean?'
    },
    {
      id: 'tobiadas', n: 'Los Tobíadas y el dinero griego en Judea', ref: 'Nehemías 2:10; Nehemías 13:4-9; Mateo 9:9-11; Lucas 16:13', fecha: [-260, -175],
      visual: [
        mapa({ view: V.palestina, capas: ['ptolomeos-250'], lugares: ['iraq-el-emir', 'jerusalen', 'rabat-amon', 'gaza'] }),
        cita('Nehemías 13:4-5', '@@neh/13/4-5'),
        tabla({
          titulo: 'Una familia en tres siglos',
          cab: ['Persona', 'Época', 'Qué se sabe'],
          filas: [
            ['Tobías el amonita', 'c. 445 a.C.', 'Enemigo de Nehemías; tenía un aposento en el templo (Neh 2:10; 13:4-9)'],
            ['Tobías', '259 a.C.', 'Jefe militar en Amón; escribe al ministro de Ptolomeo II (papiros de Zenón)'],
            ['José hijo de Tobías', 'c. 240–200 a.C.', 'Sobrino del sumo sacerdote; cobra los impuestos de toda Siria y Fenicia para los Ptolomeos (Josefo)'],
            ['Hircano el Tobíada', 'c. 200–175 a.C.', 'Construye un palacio fortificado en Araq el-Emir; se suicida bajo Antíoco IV']
          ]
        })
      ],
      texto: [
        'Nehemías tuvo un adversario tenaz llamado Tobías, «el siervo amonita» (Neh 2:10), que estaba emparentado con familias importantes de Jerusalén. Cuando Nehemías viajó a Persia, el sacerdote Eliasib le preparó a Tobías una cámara en los atrios del templo, y Nehemías, al volver, arrojó todos sus muebles fuera (Neh 13:4-8). Dos siglos después, sus descendientes, los Tobíadas, eran una de las familias más ricas e influyentes de Judea.',
        { h: 'Una familia en los papiros' },
        'Los papiros de Zenón, el secretario de un ministro de Ptolomeo II, conservan cartas del año 259 a.C. escritas por un Tobías, jefe de una colonia militar en la región de Amón, al otro lado del Jordán, que enviaba regalos al rey. La familia controlaba esa región desde hacía generaciones.',
        { h: 'José, el cobrador de impuestos' },
        'Josefo cuenta la historia de José, hijo de Tobías y sobrino del sumo sacerdote Onías II. Cuando su tío se negó a pagar el tributo a Egipto, José viajó a Alejandría, se ganó al rey con regalos y su habilidad, y obtuvo el derecho a cobrar los impuestos de toda Siria y Fenicia. Lo hizo durante veintidós años, con mano dura, y se volvió inmensamente rico. Su hijo Hircano construyó un palacio fortificado en Araq el-Emir, en Transjordania, cuyas ruinas, con leones esculpidos y una inscripción con el nombre Tobías, se visitan hasta hoy.',
        { h: 'Una aristocracia helenizada' },
        'Los Tobíadas representan a un sector de la sociedad judía que se enriqueció colaborando con los reyes griegos y que adoptó su estilo de vida. Para ellos, la ley de Moisés era importante, pero no debía impedir los negocios ni el progreso. Cuando Judea pasó a los seléucidas, sus divisiones con otras familias sacerdotales abrieron la puerta a la crisis del sumo sacerdocio que se estudia en la ruta IV.',
        'El sistema de arrendar los impuestos a quien ofreciera más, que los Ptolomeos aplicaron en Judea, se mantuvo con los romanos. De allí vienen los publicanos de los evangelios, como Mateo y Zaqueo, despreciados por su pueblo porque cobraban para un poder extranjero y solían enriquecerse con ello. Jesús llamó a uno de ellos a seguirlo y comió en su casa (Mt 9:9-11).',
        { ejercicio: {
          pregunta: '¿Qué relación hay entre los Tobíadas y los publicanos de los evangelios?',
          opciones: [
            { t: 'Ninguna: los publicanos aparecen recién con los romanos.', ok: false, por_que: 'El sistema de arrendar los impuestos a particulares ya lo usaban los Ptolomeos, y José el Tobíada fue uno de esos arrendatarios.' },
            { t: 'Ambos cobraban impuestos para un poder extranjero y se enriquecían con ello.', ok: true, por_que: 'José el Tobíada cobraba para Egipto; los publicanos, para Roma. Por eso el pueblo los veía como colaboradores.' },
            { t: 'Los publicanos eran descendientes directos de los Tobíadas.', ok: false, por_que: 'No hay relación de familia; lo que se mantuvo fue el sistema de cobro.' }
          ],
          explicacion: 'Las costumbres de los evangelios tienen raíces en estos siglos.'
        } }
      ],
      pensar: 'Los Tobíadas prosperaron, pero su amor por la riqueza los alejó de la fidelidad a Dios. Jesús dijo: «No podéis servir a Dios y a las riquezas» (Lc 16:13). ¿Qué lugar ocupa el dinero en tus decisiones?'
    }
  ];

  window.__ET.persa = persa;
  window.__ET.ptolomeos = ptolomeos;
})();
