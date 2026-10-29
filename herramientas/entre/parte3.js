/* Entre los Testamentos · ruta IV. Los seléucidas y la crisis (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const crisis = [
    {
      id: 'panion', n: 'La batalla de Panión: Judea cambia de dueño', ref: 'Daniel 11:10-20', fecha: [-217, -175],
      visual: [
        pasos([
          { t: '217 a.C.: en Rafia, Ptolomeo IV detiene a Antíoco III', fecha: -217, estado: { view: V.levante, capas: ['ptolomeos-250', 'seleucidas-200'], lugares: ['rafia', 'jerusalen', 'antioquia', 'alejandria'] } },
          { t: '200 a.C.: Antíoco III vence en Panión, junto a las fuentes del Jordán', fecha: -200, estado: { view: V.palestina, lugares: ['panion', 'jerusalen', 'gaza', 'sidon'] } },
          { t: '198 a.C.: Judea es seléucida; Jerusalén recibe bien al nuevo rey', fecha: -198, estado: { view: V.levante, capas: ['seleucidas-200'], lugares: ['jerusalen', 'antioquia'] } },
          { t: '190 a.C.: Roma derrota a Antíoco III en Magnesia y le impone una deuda enorme', fecha: -190, estado: { view: V.mediterraneo, capas: ['seleucidas-200', 'roma-133'], lugares: ['magnesia', 'roma', 'antioquia', 'jerusalen'] } }
        ]),
        cita('Daniel 11:16', '@@dn/11/16'),
        tabla({
          titulo: 'Daniel 11:10-20 y la historia',
          cab: ['Daniel', 'Lo que anuncia', 'Lo que ocurrió'],
          filas: [
            ['11:11-12', 'El rey del sur vence a una gran multitud', 'Ptolomeo IV vence a Antíoco III en Rafia (217 a.C.)'],
            ['11:15-16', 'El rey del norte toma una ciudad fuerte y está en la tierra gloriosa', 'Antíoco III vence en Panión y toma Sidón (200–198 a.C.)'],
            ['11:17', 'Le da su hija por mujer', 'Cleopatra I, hija de Antíoco III, se casa con Ptolomeo V (193 a.C.)'],
            ['11:18', 'Vuelve el rostro a las costas; un príncipe hace cesar su afrenta', 'Invade Grecia y Asia Menor; el romano Lucio Escipión lo vence en Magnesia (190 a.C.)'],
            ['11:20', 'Uno hace pasar un cobrador de tributos por la gloria del reino', 'Seleuco IV envía a Heliodoro a tomar el tesoro del templo (c. 178 a.C.)']
          ]
        })
      ],
      texto: [
        'Durante el siglo III a.C., los Ptolomeos de Egipto y los seléucidas de Siria pelearon cinco guerras por la franja de tierra que los separaba, la que hoy llamamos el Levante: Fenicia, Judea y el sur de Siria. Daniel las había anunciado como las luchas entre «el rey del sur» y «el rey del norte» (Dn 11:5-20), con tantos detalles que el capítulo se puede seguir como una crónica.',
        { h: 'Antíoco III, el Grande' },
        'El rey seléucida Antíoco III (223–187 a.C.) quiso recuperar el imperio de sus antepasados. En el 217 a.C. invadió Palestina, pero fue derrotado por Ptolomeo IV en Rafia, al sur de Gaza. Diecisiete años después volvió y, en el 200 a.C., venció al general egipcio Escopas en Panión, junto a las fuentes del Jordán. Es el mismo lugar que siglos después se llamaría Cesarea de Filipo, donde Pedro confesó que Jesús es el Cristo (Mt 16:13-16). Daniel lo había dicho: el rey del norte «estará en la tierra gloriosa» (Dn 11:16).',
        'Muchos en Jerusalén recibieron bien al nuevo rey, cansados de los impuestos egipcios. Josefo conserva la carta en que Antíoco III recompensó a los judíos: ayudas para el templo, rebaja de impuestos y el derecho a vivir «según las leyes de sus padres». Por un tiempo, la vida siguió en paz bajo el sumo sacerdote Simón, a quien Ben Sira elogia como el hombre que reparó la casa de Dios.',
        { h: 'Roma entra en escena' },
        'Antíoco III cometió un error: avanzó sobre Grecia y Asia Menor, donde chocó con Roma. En el 190 a.C. fue derrotado en Magnesia y, por el tratado de Apamea, tuvo que pagar una indemnización enorme y entregar rehenes, entre ellos a su hijo menor, el futuro Antíoco IV, que vivió catorce años en Roma. Desde entonces, los reyes seléucidas vivieron buscando dinero. Antíoco III murió saqueando un templo en Elimaida. Su hijo Seleuco IV envió a su ministro Heliodoro a apoderarse del tesoro del templo de Jerusalén; según el segundo libro de los Macabeos, no lo logró. Daniel había hablado de «uno que hará pasar un cobrador de tributos por la gloria del reino» (Dn 11:20).',
        'La necesidad de dinero de los seléucidas y la ambición de algunas familias de Jerusalén iban a encontrarse muy pronto.'
      ],
      pensar: 'Daniel describió siglos antes las guerras de reyes que aún no habían nacido. ¿Qué te dice eso de la fidelidad de la palabra de Dios en lo que aún no se ha cumplido?'
    },
    {
      id: 'sumo-sacerdocio', n: 'Jasón, Menelao y el sumo sacerdocio comprado', ref: 'Daniel 11:21-22; Números 25:11-13; Malaquías 2:7-8; Hebreos 5:4', fecha: [-175, -162],
      visual: [
        img('gimnasio-jerusalen.webp', 'En un patio de ejercicios rodeado de columnas, al pie de una colina de Jerusalén, jóvenes judíos de buena familia con sombreros griegos de ala ancha practican el lanzamiento de disco y la lucha, mientras dos sacerdotes jóvenes con túnicas de lino blanco se apresuran a unirse a ellos; al fondo, sobre la colina, se ve el templo', 'El gimnasio griego de Jerusalén, construido bajo el sumo sacerdote Jasón (hacia 175 a.C.). Recreación.'),
        tabla({
          titulo: 'Los sumos sacerdotes de la crisis',
          cab: ['Sumo sacerdote', 'Años', 'Cómo llegó', 'Qué hizo'],
          filas: [
            ['Onías III', 'Hasta 175 a.C.', 'Por herencia, de la familia de Sadoc', 'Fiel a la ley; depuesto y asesinado en Dafne (c. 171 a.C.)'],
            ['Jasón (Josué)', '175–172 a.C.', 'Compró el cargo a Antíoco IV', 'Construyó el gimnasio y convirtió Jerusalén en ciudad griega'],
            ['Menelao', '172–162 a.C.', 'Ofreció más dinero que Jasón; no era de la familia de Sadoc', 'Robó vasos del templo y apoyó a Antíoco IV'],
            ['Alcimo', '162–159 a.C.', 'Nombrado por Demetrio I', 'Persiguió a los fieles'],
            ['Jonatán Macabeo', '152–143 a.C.', 'Nombrado por un rey seléucida', 'Primer sumo sacerdote de la familia asmonea (ruta V)']
          ]
        })
      ],
      texto: [
        'Durante siglos, el sumo sacerdocio había pasado de padre a hijo en la familia de Sadoc, el sacerdote de David y Salomón. Era un cargo santo, ligado al pacto que Dios hizo con Finees (Nm 25:12-13). En el 175 a.C., con la llegada de Antíoco IV al trono, se convirtió en algo que se compraba.',
        { h: 'Jasón compra el cargo' },
        'El sumo sacerdote era Onías III, un hombre piadoso. Su hermano Josué, que usaba el nombre griego Jasón, viajó a Antioquía y ofreció a Antíoco IV trescientos sesenta talentos de plata, y otros ciento cincuenta más por el permiso para construir un gimnasio y registrar a los habitantes de Jerusalén como ciudadanos de Antioquía. El rey, necesitado de dinero, aceptó. Onías fue depuesto, y Jasón empezó a transformar Jerusalén en una ciudad griega.',
        'El segundo libro de los Macabeos describe la escena con dolor: el gimnasio se levantó junto al monte del templo, los jóvenes más nobles se pusieron el sombrero griego, y los mismos sacerdotes descuidaban los sacrificios para correr a los juegos apenas sonaba la señal. El primer libro añade que algunos se avergonzaban de la circuncisión y procuraban disimularla, para no ser objeto de burla en el gimnasio. Nadie los obligó: fue una helenización voluntaria, promovida por el propio sumo sacerdote.',
        { h: 'Menelao compra más caro' },
        'Tres años después, en el 172 a.C., Jasón envió a Antioquía a un tal Menelao para entregar el dinero. Menelao aprovechó la audiencia y ofreció trescientos talentos más que Jasón. Antíoco le dio el cargo. Menelao ni siquiera pertenecía a la familia de Sadoc. Para pagar lo prometido, sacó vasos de oro del templo, y cuando Onías III lo denunció, hizo que lo asesinaran cerca de Antioquía. Muchos intérpretes ven en «el príncipe del pacto» quebrantado de Daniel 11:22 una alusión a ese crimen.',
        { h: 'Un oficio santo en manos de hombres sin temor' },
        'Malaquías había dicho que «los labios del sacerdote han de guardar la sabiduría», pero que los sacerdotes de su tiempo se habían apartado del camino (Mal 2:7-8). En el siglo II a.C., la corrupción del sacerdocio llegó a su punto más bajo. Hebreos lo recuerda por contraste: «nadie toma para sí esta honra, sino el que es llamado por Dios, como lo fue Aarón» (He 5:4). Cristo no compró su sacerdocio: lo recibió del Padre y lo ejerce para siempre.',
        ir('Ver El sacerdocio en Israel: la línea de Sadoc', R.sacerdocio)
      ],
      pensar: 'Jasón y Menelao compraron el cargo más santo de Israel para su propio beneficio. ¿Buscas tú posiciones en la iglesia por servir a Dios o por lo que te dan?'
    },
    {
      id: 'antioco', n: 'Antíoco IV Epífanes', ref: 'Daniel 11:21-30; Daniel 8:23-25', fecha: [-175, -164],
      visual: [
        pasos([
          { t: '169 a.C.: Antíoco IV invade Egipto y, al volver, saquea el templo de Jerusalén', fecha: -169, estado: { view: V.campana, capas: ['seleucidas-200'], lugares: ['antioquia', 'pelusio', 'alejandria', 'jerusalen'], trazos: ['et-antioco-168'] } },
          { t: '168 a.C.: frente a Alejandría, un enviado de Roma le ordena retirarse', fecha: -168, estado: { view: V.campana, lugares: ['alejandria', 'pelusio', 'antioquia'], trazos: ['et-antioco-168'] } },
          { t: '168–167 a.C.: humillado, vuelve por Jerusalén y la castiga', fecha: -167, estado: { view: V.palestina, lugares: ['gaza', 'jerusalen', 'modin'], trazos: ['et-antioco-regreso'] } }
        ]),
        cita('Daniel 11:29-30', '@@dn/11/29-30'),
        tabla({
          titulo: 'Antíoco IV en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Reinado', '175–164 a.C.'],
            ['Su título', 'Epífanes, «dios manifestado»; sus enemigos lo apodaban Epímanes, «el loco»'],
            ['Antes de reinar', 'Rehén en Roma durante catorce años'],
            ['En Daniel', 'El «hombre despreciable» (Dn 11:21) y el «rey altivo de rostro» (Dn 8:23)'],
            ['Su muerte', 'En Persia, en el 164 a.C., durante una campaña para saquear templos']
          ]
        })
      ],
      texto: [
        'Antíoco IV subió al trono en el 175 a.C., aprovechando que el heredero legítimo, su sobrino Demetrio, estaba como rehén en Roma. Daniel lo describe como un «hombre despreciable, al cual no darán la honra del reino; pero vendrá sin aviso y tomará el reino con halagos» (Dn 11:21). Se hacía llamar Epífanes, «dios manifestado», y en sus monedas aparecía con los rasgos de Zeus. El historiador griego Polibio cuenta que sus contemporáneos lo apodaban Epímanes, «el loco», por su conducta extravagante.',
        { h: 'Las campañas contra Egipto' },
        'En el 169 a.C., Antíoco IV invadió Egipto y llegó cerca de Alejandría. Al volver, pasó por Jerusalén y, con la complicidad del sumo sacerdote Menelao, entró en el santuario y se llevó el altar de oro, el candelero, la mesa de los panes y los tesoros. Al año siguiente volvió a Egipto, pero esta vez lo esperaba un enviado del Senado romano, Popilio Lenas. Cuenta Polibio que le entregó la orden de retirarse y, cuando el rey pidió tiempo para pensarlo, trazó con su bastón un círculo en la arena alrededor de él y le exigió responder antes de salir de él. Antíoco obedeció.',
        'Daniel lo había anunciado: «vendrán contra él naves de Quitim, y él se contristará, y volverá, y se enojará contra el pacto santo» (Dn 11:30). Quitim era el nombre de Chipre y, por extensión, de los pueblos del occidente. La humillación ante Roma desató la furia de Antíoco contra Jerusalén.',
        { h: 'Castigo a Jerusalén' },
        'Mientras tanto, el depuesto Jasón, al oír el rumor de que Antíoco había muerto, atacó Jerusalén para recuperar el sumo sacerdocio. El rey lo tomó como una rebelión. Envió a su general Apolonio, que entró en la ciudad un día de reposo, mató a muchos, derribó parte de los muros y construyó una fortaleza, el Acra, con una guarnición griega junto al templo. Durante veinticinco años, esa fortaleza sería un símbolo de la opresión extranjera.',
        'Pero lo peor estaba por venir. Antíoco decidió que la manera de asegurar la frontera con Egipto era terminar con la religión que hacía distintos a los judíos.'
      ],
      pensar: 'Antíoco, el que se hacía llamar «dios manifestado», tuvo que obedecer a un mensajero romano con un bastón. ¿Qué te enseña eso sobre el poder de los hombres frente al poder de Dios?'
    },
    {
      id: 'abominacion', n: 'La abominación desoladora del 167 a.C.', ref: 'Daniel 11:31; Daniel 8:11-14; Daniel 12:11; Mateo 24:15', fecha: -167,
      visual: [
        img('../imperio-griego/img/grecia-profanacion.webp', 'Soldados seléucidas levantan un altar pagano en el atrio del templo de Jerusalén mientras sacerdotes judíos observan con dolor', 'La profanación del templo, diciembre del 167 a.C. Recreación.'),
        cita('Daniel 11:31-32', '@@dn/11/31-32'),
        tabla({
          titulo: 'Lo que prohibió el decreto de Antíoco IV',
          cab: ['Prohibición', 'Lo que significaba'],
          filas: [
            ['Los sacrificios en el templo', 'Fin del culto que Dios había ordenado'],
            ['El día de reposo y las fiestas', 'Fin de la señal del pacto (Éx 31:13)'],
            ['La circuncisión', 'Fin de la señal de Abraham (Gn 17:10)'],
            ['La ley de los alimentos', 'Obligación de comer carne de cerdo'],
            ['Los rollos de la ley', 'Los ejemplares se rompían y quemaban'],
            ['El templo de Jerusalén', 'Dedicado a Zeus Olímpico, con un altar pagano sobre el altar']
          ]
        })
      ],
      texto: [
        'En el 167 a.C., Antíoco IV publicó un decreto que no tenía antecedentes en el mundo antiguo. Los imperios solían respetar los dioses de los pueblos conquistados; esta vez un rey prohibió una religión entera. El primer libro de los Macabeos describe las medidas: se suspendieron los sacrificios, se prohibió guardar el día de reposo y las fiestas, se castigó con la muerte la circuncisión, se obligó a ofrecer y comer cerdo en altares levantados en cada aldea, y se quemaron los rollos de la ley que se encontraban.',
        { h: 'La abominación en el templo' },
        'El día quince del mes de Quisleu, en diciembre del 167 a.C., se levantó sobre el altar de los holocaustos un altar pagano, y diez días después se ofreció en él el primer sacrificio. El templo fue dedicado a Zeus Olímpico; el del monte Gerizim, a Zeus protector de los forasteros. Los judíos lo llamaron con las palabras de Daniel: la abominación desoladora, el ídolo que deja desolado el santuario.',
        'Daniel lo había anunciado casi cuatro siglos antes: «se levantarán de su parte tropas que profanarán el santuario y la fortaleza, y quitarán el continuo sacrificio, y pondrán la abominación desoladora» (Dn 11:31). En el capítulo 8 había visto al cuerno pequeño que quitaba el continuo sacrificio y echaba por tierra el lugar del santuario, y había oído cuánto duraría (Dn 8:11-14).',
        { h: 'Una profecía con dos cumplimientos' },
        'Dos siglos después, Jesús volvió a hablar de la abominación desoladora como algo futuro: «cuando veáis en el lugar santo la abominación desoladora de que habló el profeta Daniel (el que lee, entienda)» (Mt 24:15). Antíoco IV fue un cumplimiento real de la profecía y, al mismo tiempo, un anticipo del cumplimiento final: el hombre de pecado que se sentará en el templo de Dios haciéndose pasar por Dios (2 Ts 2:3-4). Ese tema se estudia en Daniel y en Los últimos tiempos.',
        ir('Estudiar la abominación desoladora en Daniel', R.daniel),
        { ejercicio: {
          pregunta: '¿Cómo se relacionan Daniel 11:31 y Mateo 24:15?',
          opciones: [
            { t: 'Daniel habla solo de Antíoco IV, y Jesús se equivocó al aplicarlo al futuro.', ok: false, por_que: 'Jesús es el Señor de la profecía; si él la aplica al futuro, la profecía tiene un cumplimiento todavía por venir.' },
            { t: 'Antíoco IV cumplió la profecía en el 167 a.C., y Jesús anunció un cumplimiento final del que ese fue un anticipo.', ok: true, por_que: 'Es la lectura del Nuevo Testamento: Antíoco es un tipo del hombre de pecado de 2 Tesalonicenses 2.' },
            { t: 'Ninguno de los dos se refiere a un hecho histórico.', ok: false, por_que: 'La profanación del 167 a.C. es uno de los hechos mejor documentados del período.' }
          ],
          explicacion: 'Una profecía puede tener un cumplimiento cercano que anticipa otro final.'
        } }
      ],
      pensar: 'Antíoco quiso borrar la ley de Dios quemando sus rollos, y no lo logró. ¿Qué lugar tiene en tu vida una Palabra que tantos intentaron destruir?'
    },
    {
      id: 'martires', n: 'Los mártires y los fieles', ref: 'Daniel 11:32-35; Hebreos 11:35-38; Daniel 12:2-3; Apocalipsis 2:10', fecha: [-167, -164],
      visual: [
        img('../libros-apocrifos/img/madre-siete-hijos.webp', 'En un salón de piedra con columnas, ante el rey seléucida Antíoco IV sentado en su trono, una madre judía de unos cincuenta años, de pie y serena, toma del hombro a su hijo menor', 'La madre anima a su hijo menor a permanecer fiel, según el segundo libro de los Macabeos. Recreación.'),
        cita('Hebreos 11:35-38', '@@he/11/35-38')
      ],
      texto: [
        'El decreto de Antíoco IV obligó a cada judío a elegir. Muchos obedecieron por miedo o por convicción, porque ya admiraban la cultura griega. Pero muchos otros prefirieron morir antes que comer cerdo, abandonar el día de reposo o entregar sus rollos de la ley. Daniel lo había visto: «el pueblo que conoce a su Dios se esforzará y actuará. Y los sabios del pueblo instruirán a muchos; y por algunos días caerán a espada y a fuego, en cautividad y despojo» (Dn 11:32-33).',
        { h: 'Los que murieron' },
        'Los libros de los Macabeos conservan algunos nombres e historias. Madres que circuncidaron a sus hijos fueron ejecutadas con sus bebés. Eleazar, un escriba de noventa años, se negó a comer cerdo, y también a fingir que lo comía, para no dar un mal ejemplo a los jóvenes. Una madre vio morir a sus siete hijos uno por uno, animándolos a ser fieles con la esperanza de la resurrección. Un grupo de mil personas, hombres, mujeres y niños, se escondió en cuevas del desierto; cuando los soldados los atacaron en día de reposo, no se defendieron para no quebrantar el sábado, y murieron todos.',
        { h: 'Los piadosos' },
        'En esos años aparece un grupo llamado los asideos, de la palabra hebrea hasidim, «piadosos». Eran judíos dedicados a guardar la ley con todo rigor, que se unieron a la rebelión de los macabeos para defender la fe. De ellos saldrían, según muchos historiadores, los fariseos y los esenios (ruta VII).',
        { h: 'Recordados en la Escritura' },
        'La carta a los Hebreos, al recorrer la galería de los héroes de la fe, menciona a los que «fueron atormentados, no aceptando el rescate, a fin de obtener mejor resurrección», y a otros que «anduvieron de acá para allá cubiertos de pieles de ovejas y de cabras, pobres, angustiados, maltratados», que vivieron errantes «por los desiertos, por los montes, por las cuevas y por las cavernas de la tierra» (He 11:35-38). Muchos ven aquí un recuerdo de los mártires y fugitivos de la persecución de Antíoco.',
        'Los mártires murieron con una esperanza que Daniel había anunciado: «muchos de los que duermen en el polvo de la tierra serán despertados, unos para vida eterna» (Dn 12:2). Su testimonio preparó a los creyentes de todas las épocas para la palabra de Cristo: «Sé fiel hasta la muerte, y yo te daré la corona de la vida» (Ap 2:10).',
        ir('Ver en Los libros apócrifos: 2 Macabeos, mártires y resurrección', R.apocrifos + '#historicos/2')
      ],
      pensar: 'Eleazar no quiso ni siquiera fingir que comía lo prohibido, para no hacer tropezar a los jóvenes. ¿Qué ejemplo das con tus decisiones a los que vienen detrás de ti?'
    },
    {
      id: 'importa', n: 'Por qué esta crisis importa al leer el Nuevo Testamento', ref: 'Juan 10:22-23; Hechos 10:14; Hechos 10:28; Mateo 24:15; 2 Tesalonicenses 2:3-4', fecha: -167,
      visual: [
        tabla({
          titulo: 'Huellas de la crisis en el Nuevo Testamento',
          cab: ['Tema', 'Origen en la crisis', 'En el Nuevo Testamento'],
          filas: [
            ['La fiesta de la Dedicación', 'Purificación del templo en el 164 a.C.', 'Jesús en el templo en invierno (Jn 10:22-23)'],
            ['La abominación desoladora', 'El altar de Zeus sobre el altar del templo', 'Mateo 24:15; Marcos 13:14'],
            ['El hombre de pecado', 'Antíoco IV se proclama dios', '2 Tesalonicenses 2:3-4'],
            ['Las leyes de los alimentos', 'Los mártires mueren por no comer cerdo', 'Pedro: «ninguna cosa común o inmunda he comido jamás» (Hch 10:14)'],
            ['Separación de los gentiles', 'Rechazo de las costumbres griegas', '«abominable es para un varón judío juntarse o acercarse a un extranjero» (Hch 10:28)'],
            ['La fe en la resurrección', 'La esperanza de los mártires', 'Los fariseos creen; los saduceos niegan (Hch 23:8)'],
            ['Un Mesías libertador', 'La victoria de los macabeos', 'Quieren hacer rey a Jesús por la fuerza (Jn 6:15)']
          ]
        }),
        cita('Hechos 10:13-14', '@@hch/10/13-14')
      ],
      texto: [
        'La persecución de Antíoco IV duró apenas tres años, pero marcó al pueblo judío durante siglos. Muchas actitudes que encontramos en los evangelios y en Hechos se entienden mejor recordando lo que vivieron los abuelos de los abuelos de los apóstoles.',
        { h: 'Una identidad defendida con sangre' },
        'Para un judío del siglo I, guardar el día de reposo, circuncidar a sus hijos y no comer alimentos impuros no eran costumbres sin importancia: eran las señales por las que sus antepasados habían muerto. Por eso, cuando en la visión de Hechos 10 una voz le dijo a Pedro que matara y comiera animales impuros, él respondió: «Señor, no; porque ninguna cosa común o inmunda he comido jamás» (Hch 10:14). Y por eso la entrada de los gentiles en la iglesia sin circuncidarse provocó la crisis que se resolvió en el concilio de Jerusalén (Hch 15).',
        'Esa historia ayuda a leer con más compasión a los judíos que se opusieron a Pablo. No defendían simples tradiciones, sino lo que consideraban la fidelidad a Dios por la que tantos habían dado la vida. Pablo lo sabía bien: él mismo había sido «en cuanto a la ley, fariseo; en cuanto a celo, perseguidor de la iglesia» (Fil 3:5-6).',
        { h: 'Una esperanza con forma de espada' },
        'La victoria de los macabeos, contra todo pronóstico, quedó grabada como modelo de liberación. Muchos esperaban que el Mesías hiciera lo mismo con los romanos: levantar al pueblo, purificar el templo y expulsar a los extranjeros. Cuando Jesús entró en Jerusalén, la multitud agitaba ramas de palmera, como se hacía en las celebraciones de los macabeos. Pero Jesús no vino a tomar el poder por la espada, sino a dar su vida en rescate por muchos (Mr 10:45).',
        { h: 'Un anticipo de lo que vendrá' },
        'Finalmente, Antíoco IV quedó en la Escritura como figura del último enemigo de Dios. Jesús y Pablo hablaron de una abominación futura y de un hombre de pecado que «se opone y se levanta contra todo lo que se llama Dios» (2 Ts 2:4). La crisis del siglo II a.C. enseña a la iglesia que la persecución tiene un límite fijado por Dios y que el pueblo que conoce a su Dios puede permanecer firme.',
        ir('Ver en Los últimos tiempos: el anticristo', '../../escatologia/')
      ],
      pensar: 'Pedro tuvo que aprender que Dios recibía también a los gentiles, aunque eso chocaba con lo que su pueblo había defendido con sangre. ¿Hay convicciones tuyas que son más tradición que mandamiento de Dios?'
    }
  ];

  window.__ET.crisis = crisis;
})();
