/* Entre los Testamentos · ruta V. Los macabeos y los asmoneos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const asmoneos = [
    {
      id: 'matatias', n: 'Matatías en Modín', ref: 'Números 25:7-13; Daniel 11:32; 1 Reyes 19:10', fecha: [-167, -166],
      visual: [
        img('matatias-modin.webp', 'En la plaza de la aldea de Modín, junto a un altar pagano recién levantado, un anciano sacerdote judío de barba blanca, Matatías, de pie y con el brazo extendido en señal de rechazo, se niega ante un oficial seléucida con casco de bronce y capa roja que le ofrece una bolsa de monedas; detrás del anciano, sus cinco hijos adultos lo respaldan, y los aldeanos observan en silencio', 'Matatías rechaza el sacrificio pagano en Modín (167 a.C.). Recreación.'),
        mapa({ view: V.judea, lugares: ['modin', 'jerusalen', 'desierto-judea', 'jerico'] }),
        cita('Números 25:11', '@@nm/25/11')
      ],
      texto: [
        'Modín era una aldea en las colinas al noroeste de Jerusalén, a unos treinta kilómetros. Allí se había retirado Matatías, un sacerdote anciano de la familia de Joarib, con sus cinco hijos: Juan, Simón, Judas, Eleazar y Jonatán. Su familia sería conocida como los asmoneos, por un antepasado llamado Asmón, y sus hijos como los macabeos, por el sobrenombre de Judas.',
        { h: 'El día del sacrificio' },
        'En el 167 a.C. llegaron a Modín los oficiales del rey para obligar al pueblo a ofrecer sacrificios a los dioses. Según el primer libro de los Macabeos, se dirigieron primero a Matatías, como hombre principal de la aldea, y le prometieron que él y sus hijos serían contados entre los amigos del rey y recibirían oro y plata si daban el ejemplo. Matatías respondió en voz alta que, aunque todas las naciones obedecieran al rey, él, sus hijos y sus hermanos seguirían en el pacto de sus padres.',
        'Apenas terminó de hablar, un judío se adelantó para ofrecer el sacrificio en el altar pagano. Matatías, encendido de celo, lo mató sobre el altar, junto con el oficial del rey, y derribó el altar. El autor del libro lo compara con Finees, el nieto de Aarón que había actuado con celo por Dios en el desierto (Nm 25:7-13). Luego Matatías recorrió la aldea llamando a todos los que tuvieran celo por la ley a seguirlo, y huyó con sus hijos a los montes, dejando todo lo que tenían.',
        { h: 'Pelear en día de reposo' },
        'Muchos fieles se unieron a ellos. Cuando supieron que mil personas habían muerto en las cuevas por no defenderse en día de reposo (ruta IV), Matatías y sus amigos tomaron una decisión difícil: si todos hacían lo mismo, los paganos terminarían con Israel en poco tiempo. Resolvieron defenderse si los atacaban en sábado, aunque no atacarían ellos ese día. Recorrieron las aldeas derribando altares paganos, circuncidando a los niños y persiguiendo a los apóstatas.',
        'Matatías murió al año siguiente, en el 166 a.C. Antes de morir, según el libro, recordó a sus hijos la fidelidad de Abraham, José, Finees, Josué, Caleb, David, Elías y Daniel, y puso a Judas al frente de la lucha.',
        { h: 'Celo según la Escritura' },
        'La rebelión comenzó como una defensa de la fe, y en eso cumplió lo anunciado: «el pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32). Pero el celo humano, sin la guía de Dios, puede terminar en violencia y ambición, como se verá en la historia de los descendientes de Matatías. Pablo, que conocía bien ese celo, escribió de sus hermanos judíos que tenían «celo de Dios, pero no conforme a ciencia» (Ro 10:2).'
      ],
      pensar: 'Matatías dijo que, aunque todos obedecieran al rey, él seguiría en el pacto de sus padres. ¿Estarías dispuesto a quedarte solo por ser fiel a Dios?'
    },
    {
      id: 'judas', n: 'Judas Macabeo', ref: '1 Samuel 14:6; 2 Crónicas 14:11; Daniel 11:34; Hebreos 11:33-34', fecha: [-166, -160],
      visual: [
        pasos([
          { t: '166 a.C.: Judas vence a Apolonio y a Serón en la subida de Bet-horón', fecha: -166, estado: { view: V.judea, lugares: ['bet-horon', 'jerusalen', 'modin', 'samaria'] } },
          { t: '165 a.C.: sorprende al ejército de Gorgias en Emaús', fecha: -165, estado: { view: V.judea, lugares: ['emaus', 'mizpa', 'jerusalen', 'modin'] } },
          { t: '164 a.C.: vence a Lisias en Bet-sur y entra en Jerusalén', fecha: -164, estado: { view: V.judea, capas: ['a-judas'], lugares: ['bet-sur', 'jerusalen', 'hebron'] } },
          { t: '160 a.C.: muere en la batalla de Elasa', fecha: -160, estado: { view: V.judea, lugares: ['bet-horon', 'jerusalen', 'modin'] } }
        ]),
        cita('1 Samuel 14:6', '@@1s/14/6'),
        tabla({
          titulo: 'Las batallas de Judas Macabeo',
          cab: ['Año', 'Lugar', 'Enemigo', 'Resultado'],
          filas: [
            ['166 a.C.', 'Samaria', 'Apolonio', 'Victoria; Judas toma su espada'],
            ['166 a.C.', 'Bet-horón', 'Serón', 'Victoria en la subida, como Josué (Jos 10:10)'],
            ['165 a.C.', 'Emaús', 'Gorgias y Nicanor', 'Victoria por sorpresa'],
            ['164 a.C.', 'Bet-sur', 'Lisias', 'Victoria; Judas recupera Jerusalén'],
            ['161 a.C.', 'Adasa', 'Nicanor', 'Victoria; se celebra cada año el día de Nicanor'],
            ['160 a.C.', 'Elasa', 'Báquides', 'Derrota; Judas muere']
          ]
        })
      ],
      texto: [
        'Judas, el tercer hijo de Matatías, recibió el sobrenombre de Macabeo, que probablemente significa «el martillo», por la fuerza de sus golpes contra el enemigo. Con él, la resistencia de unos fugitivos en los montes se convirtió en un ejército. El primer libro de los Macabeos lo compara con un león que ruge sobre su presa.',
        { h: 'Pocos contra muchos' },
        'Judas peleaba con pocos hombres, mal armados, contra ejércitos profesionales, y aprovechaba el conocimiento del terreno: los pasos estrechos de las montañas de Judea, donde la caballería y los elefantes de los seléucidas no podían desplegarse. En la subida de Bet-horón, el mismo lugar donde Josué había perseguido a los amorreos (Jos 10:10), derrotó al general Serón. Según el libro, cuando sus hombres temieron por ser pocos, Judas les recordó que la victoria no depende del número de los soldados, sino de la fuerza que viene del cielo.',
        'Era la misma fe de Jonatán, el hijo de Saúl: «no es difícil para Jehová salvar con muchos o con pocos» (1 S 14:6), y la del rey Asa: «para ti no hay diferencia alguna en dar ayuda al poderoso o al que no tiene fuerzas» (2 Cr 14:11).',
        { h: 'De Emaús a Jerusalén' },
        'En el 165 a.C., el regente Lisias envió un gran ejército al mando de Gorgias y Nicanor, acompañado de comerciantes que venían a comprar a los judíos como esclavos. Judas reunió a su gente en Mizpa para ayunar y orar, y luego, de noche, sorprendió el campamento de Emaús mientras Gorgias lo buscaba en los montes. Al año siguiente derrotó a Lisias en Bet-sur, al sur de Jerusalén. El camino a la ciudad santa estaba abierto (V.3).',
        { h: 'Un final en batalla' },
        'Después de purificar el templo, Judas siguió luchando para proteger a los judíos de Galaad y Galilea, y en el 161 a.C. hizo una alianza con Roma. En el 160 a.C., frente a un ejército mucho mayor, la mayoría de sus hombres lo abandonó. Se negó a huir y murió peleando en Elasa. Sus hermanos lo sepultaron en Modín.',
        'Daniel había anunciado que, en la persecución, los fieles «serán ayudados de pequeño socorro» (Dn 11:34). Hebreos recuerda a los que «por fe conquistaron reinos… se hicieron fuertes en batallas, pusieron en fuga ejércitos extranjeros» (He 11:33-34). Judas Macabeo fue uno de ellos.'
      ],
      pensar: 'Judas enfrentó ejércitos enormes con pocos hombres, confiando en que la victoria viene de Dios. ¿Qué batalla estás evitando porque te sientes demasiado débil?'
    },
    {
      id: 'dedicacion', n: 'La purificación del templo y la fiesta de la Dedicación', ref: 'Juan 10:22-36; 1 Reyes 8:63; Esdras 6:16-17; Malaquías 3:1', fecha: -164,
      visual: [
        img('../imperio-griego/img/grecia-purificacion-templo.webp', 'Judas Macabeo y sus hombres purifican el templo de Jerusalén y vuelven a encender el candelero', 'La purificación del templo, diciembre del 164 a.C. Recreación.'),
        cita('Juan 10:22-23', '@@jn/10/22-23'),
        tabla({
          titulo: 'Tres dedicaciones del templo',
          cab: ['Templo', 'Año', 'Pasaje'],
          filas: [
            ['El templo de Salomón', 'c. 959 a.C.', '1 Reyes 8; «así dedicaron el rey y todos los hijos de Israel la casa de Jehová» (1 R 8:63)'],
            ['El templo de Zorobabel', '515 a.C.', 'Esdras 6:16-17'],
            ['El templo purificado por Judas', '164 a.C.', 'Primer libro de los Macabeos; Juan 10:22']
          ],
          nota: 'Dedicación se dice en hebreo janucá: de allí el nombre de la fiesta judía.'
        })
      ],
      texto: [
        'Cuando Judas y sus hombres subieron a Jerusalén en el 164 a.C., encontraron el santuario desolado, las puertas quemadas y la hierba creciendo en los atrios como en un bosque. Rasgaron sus vestidos, se echaron ceniza sobre la cabeza y clamaron al cielo. Mientras unos vigilaban la fortaleza del Acra, todavía en manos de los griegos, otros se pusieron a trabajar.',
        { h: 'La purificación' },
        'Judas escogió sacerdotes sin tacha, fieles a la ley, que limpiaron el santuario y sacaron las piedras contaminadas. El altar de los holocaustos, que había sido profanado, lo desarmaron, y guardaron sus piedras en el monte del templo hasta que viniera un profeta que dijera qué hacer con ellas. Construyeron un altar nuevo de piedras sin labrar, como mandaba la ley, hicieron nuevos utensilios, el candelero, el altar del incienso y la mesa, y colgaron los velos.',
        'El día veinticinco del mes de Quisleu, en diciembre del 164 a.C., exactamente tres años después de la profanación, ofrecieron el primer sacrificio en el nuevo altar, con cantos, cítaras y címbalos. Celebraron durante ocho días, y Judas estableció que la fiesta se celebrara cada año. Josefo la llama la fiesta de las Luces. La historia de una vasija de aceite que alcanzó milagrosamente para ocho días aparece en escritos judíos siglos posteriores; los libros de los Macabeos no la cuentan.',
        { h: 'Jesús en la fiesta de la Dedicación' },
        'Dos siglos después, Juan cuenta: «Celebrábase en Jerusalén la fiesta de la dedicación. Era invierno, y Jesús andaba en el templo por el pórtico de Salomón» (Jn 10:22-23). Los judíos lo rodearon y le preguntaron si era el Cristo. En medio de la fiesta que recordaba la consagración del templo, Jesús se presentó como aquel «al que el Padre santificó y envió al mundo» (Jn 10:36). El verdadero templo consagrado estaba delante de ellos.',
        'Malaquías había anunciado que «vendrá súbitamente a su templo el Señor a quien vosotros buscáis» (Mal 3:1). El templo que Judas purificó, ampliado después por Herodes, fue el que recibió al Señor.',
        { ejercicio: {
          pregunta: '¿Qué fiesta celebraban los judíos cuando Jesús enseñaba en el pórtico de Salomón en Juan 10?',
          opciones: [
            { t: 'La fiesta de los tabernáculos, mandada en la ley de Moisés.', ok: false, por_que: 'Esa fiesta se menciona en Juan 7; la de Juan 10 ocurre en invierno.' },
            { t: 'La fiesta de la Dedicación, que recordaba la purificación del templo por Judas Macabeo.', ok: true, por_que: 'Se celebraba desde el 164 a.C., en diciembre; Juan la nombra en 10:22.' },
            { t: 'La fiesta de Purim, que recordaba a Ester.', ok: false, por_que: 'Purim se celebra a fines del invierno, en el mes de Adar, y recuerda la liberación de Ester 9.' }
          ],
          explicacion: 'La Dedicación es la única fiesta del Nuevo Testamento que nació entre los testamentos.'
        } }
      ],
      pensar: 'Los macabeos limpiaron el templo de todo lo que lo contaminaba. Pablo dice que el creyente es templo del Espíritu Santo (1 Co 6:19). ¿Qué necesita ser quitado de tu vida para que Dios sea honrado en ella?'
    },
    {
      id: 'jonatan-simon', n: 'Jonatán y Simón', ref: 'Números 3:10; Ezequiel 44:15-16; Hebreos 7:11-14', fecha: [-160, -134],
      visual: [
        esq('esquema-asmoneos.svg', 'Árbol de la familia asmonea: Matatías y sus cinco hijos Juan, Simón, Judas, Eleazar y Jonatán; de Simón, Juan Hircano; de él, Aristóbulo I y Alejandro Janeo, casado con Salomé Alejandra; de ellos, Hircano II y Aristóbulo II; de Aristóbulo II, Antígono y Alejandro, padre de Mariamne, que se casa con Herodes', 'Los asmoneos, de Matatías a Mariamne, la esposa de Herodes.'),
        tabla({
          titulo: 'Los gobernantes asmoneos',
          cab: ['Gobernante', 'Años', 'Título'],
          filas: [
            ['Judas Macabeo', '166–160 a.C.', 'Jefe militar'],
            ['Jonatán', '160–143 a.C.', 'Sumo sacerdote desde el 152 a.C.'],
            ['Simón', '142–134 a.C.', 'Sumo sacerdote, jefe y etnarca'],
            ['Juan Hircano I', '134–104 a.C.', 'Sumo sacerdote y etnarca'],
            ['Aristóbulo I', '104–103 a.C.', 'Sumo sacerdote y rey'],
            ['Alejandro Janeo', '103–76 a.C.', 'Sumo sacerdote y rey'],
            ['Salomé Alejandra', '76–67 a.C.', 'Reina (su hijo Hircano II, sumo sacerdote)'],
            ['Aristóbulo II', '67–63 a.C.', 'Sumo sacerdote y rey'],
            ['Hircano II', '63–40 a.C.', 'Sumo sacerdote y etnarca bajo Roma'],
            ['Antígono', '40–37 a.C.', 'Sumo sacerdote y rey, con apoyo de los partos']
          ]
        })
      ],
      texto: [
        'Después de la muerte de Judas, en el 160 a.C., los fieles eligieron como jefe a su hermano menor, Jonatán. Al principio tuvo que esconderse en el desierto de Tecoa, como David cuando huía de Saúl. Pero pronto encontró una oportunidad en las luchas internas del reino seléucida.',
        { h: 'Jonatán, sumo sacerdote por decreto de un rey griego' },
        'Dos pretendientes se disputaban el trono de Siria, Demetrio I y Alejandro Balas, y ambos buscaron el apoyo de Jonatán. Alejandro Balas ofreció más: en el 152 a.C. lo nombró sumo sacerdote y le envió una vestidura de púrpura y una corona de oro. En la fiesta de los tabernáculos de ese año, Jonatán se vistió con las ropas sagradas y ofició en el templo.',
        'Era un paso enorme. Jonatán era sacerdote, pero no de la familia de Sadoc, la que había ejercido el sumo sacerdocio desde Salomón y que Ezequiel señalaba como la línea de los sacerdotes fieles (Ez 44:15). Además, recibió el cargo de manos de un rey pagano. Muchos judíos piadosos nunca lo aceptaron. Una mayoría de los estudiosos piensa que el «sacerdote impío» del que hablan los rollos del mar Muerto, enemigo del fundador de la comunidad de Qumrán, fue Jonatán o su hermano Simón (ruta VII).',
        'Jonatán supo moverse entre los reyes sirios y amplió su poder, hasta que el general Trifón lo atrajo con engaños a Tolemaida, lo tomó prisionero y lo mató en el 143 a.C.',
        { h: 'Simón' },
        'El último hermano vivo, Simón, tomó el mando. Con él llegaría la independencia (V.5). Pero el modelo ya estaba establecido: el jefe de la nación sería también el sumo sacerdote, y el cargo quedaría en su familia. Lo que había empezado como una defensa de la ley terminó concentrando en una sola familia el poder político, militar y religioso.',
        { h: 'Un sacerdocio distinto' },
        'La ley separaba al rey, de la tribu de Judá, del sacerdote, de la tribu de Leví. Hebreos explica que Jesús es sacerdote, aunque vino de Judá, porque lo es «según el orden de Melquisedec» (He 7:11-17), el rey y sacerdote de Salem. Lo que los asmoneos tomaron por la fuerza, Cristo lo recibió por juramento de Dios: es Rey y Sacerdote para siempre.'
      ],
      pensar: 'Los asmoneos juntaron en sus manos el trono y el altar, y eso terminó corrompiéndolos. ¿Por qué es una buena noticia que ese doble oficio lo tenga solo Cristo?'
    },
    {
      id: 'independencia', n: 'La independencia de Judea', ref: 'Deuteronomio 18:15-18; Malaquías 4:5; Juan 1:21; Juan 6:14', fecha: [-142, -134],
      visual: [
        pasos([
          { t: '164 a.C.: Judas controla Judea, pero no el Acra de Jerusalén', fecha: -164, estado: { view: V.judea, capas: ['a-judas'], lugares: ['jerusalen', 'bet-sur', 'modin'] } },
          { t: '142 a.C.: Simón logra la independencia; toma Gezer y el puerto de Jope', fecha: -142, estado: { view: V.judea, capas: ['a-simon'], lugares: ['jerusalen', 'gezer', 'jope', 'bet-sur'] } },
          { t: '134 a.C.: Simón es asesinado en la fortaleza de Doc, cerca de Jericó', fecha: -134, estado: { view: V.judea, capas: ['a-simon'], lugares: ['jerico', 'jerusalen'] } }
        ]),
        cita('Deuteronomio 18:15', '@@dt/18/15')
      ],
      texto: [
        'En el 142 a.C., el rey seléucida Demetrio II, debilitado por una guerra civil, eximió a Judea del tributo. El primer libro de los Macabeos celebra ese momento diciendo que en ese año fue quitado de Israel el yugo de las naciones, y que el pueblo empezó a fechar sus documentos «en el año primero de Simón». Por primera vez desde la caída de Jerusalén en el 586 a.C., hacía más de cuatrocientos años, los judíos tenían un estado independiente.',
        { h: 'El Acra, Gezer y Jope' },
        'Simón completó la obra de sus hermanos. Tomó Gezer, una ciudad fuerte en el camino a la costa, y el puerto de Jope, que daba a Judea salida al mar. En el 141 a.C. obligó a rendirse a la guarnición griega del Acra, la fortaleza de Jerusalén que desde hacía veinticinco años dominaba el templo. Los judíos entraron en ella con alabanzas, ramas de palmera, arpas y címbalos. El libro describe esos años como una edad de oro: cada uno se sentaba bajo su vid y su higuera, como en los días de Salomón (1 R 4:25; Mi 4:4).',
        { h: '«Hasta que se levante un profeta fiel»' },
        'En el 140 a.C., una gran asamblea de sacerdotes, jefes y ancianos del pueblo confirmó a Simón como sumo sacerdote, jefe militar y gobernante de los judíos. El decreto, grabado en tablas de bronce en el monte Sion, decía que el cargo sería para siempre, hasta que se levantara un profeta digno de confianza.',
        'Esa frase muestra que el pueblo sabía dos cosas. La primera, que no tenía profeta, y que lo que estaba haciendo era provisorio. La segunda, que esperaba uno: el profeta como Moisés que Dios había prometido (Dt 18:15). Por eso, cuando apareció Juan el Bautista, le preguntaron: «¿Eres tú el profeta?» (Jn 1:21), y cuando Jesús multiplicó los panes, la gente dijo: «Este verdaderamente es el profeta que había de venir al mundo» (Jn 6:14).',
        { h: 'El fin de Simón' },
        'Simón renovó la alianza con Roma, que reconoció la independencia de Judea. Pero en el 134 a.C., su yerno Tolomeo, gobernador de Jericó, lo invitó a un banquete en la fortaleza de Doc y lo asesinó, junto con dos de sus hijos, para quedarse con el poder. El tercer hijo, Juan, que estaba en Gezer, escapó y tomó el gobierno. Todos los hijos de Matatías murieron de forma violenta.',
        { ejercicio: {
          pregunta: '¿Qué muestra la frase del decreto de Simón «hasta que se levante un profeta digno de confianza»?',
          opciones: [
            { t: 'Que Simón se consideraba a sí mismo el profeta prometido.', ok: false, por_que: 'El decreto dice lo contrario: su cargo valía mientras no viniera un profeta.' },
            { t: 'Que el pueblo reconocía que no tenía profeta y esperaba al que Dios había prometido.', ok: true, por_que: 'Es la esperanza del profeta como Moisés (Dt 18:15), que se cumple en Jesús (Hch 3:22-23).' },
            { t: 'Que los judíos ya no creían en los profetas.', ok: false, por_que: 'Al contrario: esperaban uno, y por eso preguntaron a Juan el Bautista si lo era.' }
          ],
          explicacion: 'La independencia no apagó la esperanza: el pueblo seguía esperando la palabra de Dios.'
        } }
      ],
      pensar: 'Después de cuatro siglos, Israel tuvo su propio estado, pero seguía esperando un profeta. ¿Puede algún logro humano llenar el lugar que solo la palabra de Dios puede ocupar?'
    },
    {
      id: 'hircano', n: 'Juan Hircano: Idumea y el monte Gerizim', ref: 'Juan 4:9; Juan 4:20; Malaquías 1:2-4; Mateo 2:1', fecha: [-134, -104],
      visual: [
        mapa({ view: V.palestina, capas: ['a-hircano'], lugares: ['jerusalen', 'monte-gerizim', 'samaria', 'maresa', 'madaba', 'jope'] }),
        tabla({
          titulo: 'Las conquistas de Juan Hircano',
          cab: ['Región', 'Qué hizo', 'Consecuencia en el Nuevo Testamento'],
          filas: [
            ['Transjordania', 'Tomó Medeba y otras ciudades', 'Perea, la región del otro lado del Jordán, se vuelve judía'],
            ['Samaria', 'Destruyó el templo del Gerizim (c. 111 a.C.) y la ciudad de Samaria', 'El odio entre judíos y samaritanos (Jn 4:9)'],
            ['Idumea', 'Obligó a los idumeos a circuncidarse y guardar la ley', 'Herodes, de familia idumea, será rey de los judíos (Mt 2:1)']
          ]
        })
      ],
      texto: [
        'Juan Hircano, hijo de Simón, gobernó treinta años, del 134 al 104 a.C. Comenzó con dificultades: el rey seléucida Antíoco VII sitió Jerusalén y lo obligó a pagar tributo. Pero en el 129 a.C. Antíoco VII murió peleando contra los partos, y el reino seléucida entró en una decadencia de la que no se recuperó. Hircano quedó libre para extender su territorio.',
        { h: 'El fin del templo del Gerizim' },
        'Hircano conquistó Siquem y destruyó el templo samaritano del monte Gerizim. Josefo ubica ese hecho en el 128 a.C.; las monedas encontradas en las excavaciones sugieren una fecha cercana al 111 a.C. Años después sitió y arrasó la ciudad de Samaria. Para los samaritanos fue una herida que nunca se cerró. Cuando Jesús pasó por Sicar, el santuario del Gerizim llevaba más de un siglo en ruinas, pero la mujer seguía diciendo: «Nuestros padres adoraron en este monte» (Jn 4:20).',
        { h: 'Los idumeos se vuelven judíos' },
        'Al sur, Hircano conquistó Idumea, la tierra de los descendientes de Esaú, que se habían establecido en el sur de Judá después del exilio. Según Josefo, les permitió quedarse con la condición de que se circuncidaran y guardaran la ley de los judíos. Así, los edomitas, enemigos de Israel desde los días de Jacob y Esaú (Mal 1:2-4), pasaron a ser parte del pueblo judío. Una generación después, una familia idumea, la de Antípatro, entraría al servicio de los asmoneos; y de ella saldría Herodes, el rey que gobernaba cuando nació Jesús (Mt 2:1).',
        { h: 'El sumo sacerdote y los fariseos' },
        'Hircano empezó como amigo de los fariseos, que ya eran un grupo influyente. Josefo cuenta que, en un banquete, un fariseo le pidió que dejara el sumo sacerdocio y se conformara con gobernar, insinuando que su madre había sido cautiva y que por eso él no podía ser sumo sacerdote. Hircano, ofendido, rompió con los fariseos y se pasó al partido de los saduceos (ruta VII). Desde entonces, la tensión entre la casa real y los fariseos marcaría la política judía.',
        'Hircano fue el primer asmoneo en acuñar sus propias monedas, con la inscripción «Juan el sumo sacerdote y el consejo de los judíos». El pequeño territorio de Judas Macabeo se había convertido en un estado que ocupaba casi toda la tierra de Israel.'
      ],
      pensar: 'Hircano obligó a los idumeos a aceptar la ley, pero no podía cambiar su corazón. ¿Por qué la fe verdadera nunca puede imponerse por la fuerza?'
    },
    {
      id: 'janeo', n: 'Alejandro Janeo y Salomé Alejandra', ref: 'Deuteronomio 17:14-20; Marcos 12:41-44; Proverbios 29:2', fecha: [-104, -67],
      visual: [
        mapa({ view: V.palestina, capas: ['h-asmoneo'], lugares: ['jerusalen', 'gaza', 'gadara', 'samaria', 'maqueronte', 'masada'] }),
        foto('moneda-janeo.webp', 'Las dos caras de una pequeña moneda de bronce: en una, dos cuernos de la abundancia con una granada entre ellos; en la otra, letras hebreas antiguas dentro de una corona', 'Moneda de bronce de Alejandro Janeo, con la inscripción en hebreo antiguo «Jonatán el sumo sacerdote y el consejo de los judíos». Las blancas que la viuda echó en el arca del templo eran monedas pequeñas de bronce como esta.', 'CC BY-SA 4.0 · Atzmonit (colección Itamar Atzmon), vía Wikimedia Commons', 'Foto de la moneda'),
        cita('Deuteronomio 17:18-19', '@@dt/17/18-19')
      ],
      texto: [
        'A la muerte de Juan Hircano, en el 104 a.C., su hijo Aristóbulo I encarceló a su madre y a tres de sus hermanos, hizo matar a otro, y fue el primero en llamarse rey. Murió al año siguiente. Su viuda, Salomé Alejandra, liberó a los hermanos presos y se casó con uno de ellos, Alejandro Janeo, que reinó del 103 al 76 a.C.',
        { h: 'Un rey guerrero' },
        'Janeo pasó casi todo su reinado en guerra. Conquistó las ciudades de la costa, desde el Carmelo hasta Gaza, que destruyó; tomó ciudades griegas al otro lado del Jordán y extendió el reino hasta un tamaño parecido al de David y Salomón. Construyó fortalezas como Maqueronte, donde más tarde sería encarcelado Juan el Bautista, y comenzó la de Masada. En sus monedas se llamaba en hebreo «Jonatán el rey», y en griego, «del rey Alejandro». Sus pequeñas monedas de bronce circularon durante más de un siglo; muchos estudiosos piensan que las dos blancas que echó la viuda en el arca del templo (Mr 12:42) eran monedas como esas.',
        { h: 'Un rey contra su pueblo' },
        'Pero Janeo fue también un sumo sacerdote violento, que el pueblo despreciaba. Josefo cuenta que, en una fiesta de los tabernáculos, mientras oficiaba en el altar, la multitud le arrojó los frutos de cidra que llevaba en las manos. Janeo respondió matando a seis mil personas. Siguió una guerra civil de seis años contra sus propios súbditos, encabezados por los fariseos, en la que murieron unos cincuenta mil judíos. Al final, según Josefo, hizo crucificar a ochocientos de sus enemigos en Jerusalén mientras banqueteaba con sus concubinas, y antes hizo degollar ante sus ojos a sus mujeres e hijos.',
        'La ley había dicho que el rey de Israel debía tener consigo una copia de la ley y leerla todos los días, «para que aprenda a temer a Jehová su Dios» y «para que no se eleve su corazón sobre sus hermanos» (Dt 17:19-20). Un siglo después de Judas Macabeo, sus descendientes se comportaban como los reyes paganos contra los que él había peleado.',
        { h: 'Salomé Alejandra, una reina en paz' },
        'Antes de morir, Janeo aconsejó a su esposa reconciliarse con los fariseos. Salomé Alejandra reinó nueve años, del 76 al 67 a.C. Fue un tiempo de paz que la memoria judía recordó con cariño. Puso como sumo sacerdote a su hijo mayor, Hircano II, y el ejército en manos del menor, Aristóbulo II. Los fariseos ganaron influencia en el gobierno y en el consejo de los ancianos. Pero la paz terminó con su muerte: sus dos hijos se disputarían el trono.'
      ],
      pensar: '«Cuando los justos dominan, el pueblo se alegra; mas cuando domina el impío, el pueblo gime» (Pr 29:2). ¿Oras por los que gobiernan, para que lo hagan con justicia?'
    },
    {
      id: 'hermanos', n: 'La guerra entre hermanos', ref: 'Marcos 3:24-25; Mateo 12:25; Santiago 4:1-2', fecha: [-67, -63],
      visual: [
        pasos([
          { t: '67 a.C.: Aristóbulo II vence a su hermano Hircano II cerca de Jericó', fecha: -67, estado: { view: V.judea, capas: ['h-asmoneo'], lugares: ['jerico', 'jerusalen'] } },
          { t: '65 a.C.: Hircano, aconsejado por Antípatro, se refugia con los nabateos y sitia Jerusalén', fecha: -65, estado: { view: V.palestina, lugares: ['petra', 'jerusalen', 'damasco'] } },
          { t: '63 a.C.: los dos hermanos piden a Pompeyo, en Damasco, que decida', fecha: -63, estado: { view: V.palestina, capas: ['roma-133'], lugares: ['damasco', 'jerusalen', 'jerico'], trazos: ['et-pompeyo'] } }
        ]),
        cita('Marcos 3:24-25', '@@mr/3/24-25'),
        tabla({
          titulo: 'Los bandos de la guerra',
          cab: ['', 'Hircano II', 'Aristóbulo II'],
          filas: [
            ['Carácter', 'Tranquilo, sin ambición', 'Enérgico y ambicioso'],
            ['Apoyo judío', 'Los fariseos', 'Los saduceos y el ejército'],
            ['Aliados', 'Antípatro el idumeo y el rey nabateo Aretas III', 'Al principio, el legado romano Escauro'],
            ['Final', 'Sumo sacerdote bajo Roma; ejecutado por Herodes (30 a.C.)', 'Llevado preso a Roma; envenenado (49 a.C.)']
          ]
        })
      ],
      texto: [
        'Cuando murió Salomé Alejandra, en el 67 a.C., su hijo menor, Aristóbulo II, se levantó contra su hermano mayor, Hircano II. Lo venció cerca de Jericó y lo obligó a renunciar al trono y al sumo sacerdocio. Hircano, de carácter tranquilo, parecía conforme. Pero a su lado había un hombre que no lo estaba.',
        { h: 'Antípatro entra en escena' },
        'Antípatro era un idumeo, hijo de un gobernador de Idumea nombrado por Alejandro Janeo, rico e inteligente. Convenció a Hircano de que su vida corría peligro y de que debía recuperar lo que le correspondía. Lo llevó de noche a Petra, la capital de los nabateos, y consiguió que el rey Aretas III lo apoyara con un ejército a cambio de ciudades. Juntos sitiaron a Aristóbulo en el monte del templo.',
        'Josefo cuenta un episodio de ese sitio. Los partidarios de Hircano llevaron al campamento a un hombre justo llamado Onías, famoso porque Dios había respondido sus oraciones pidiendo lluvia, para que maldijera a Aristóbulo. Onías se negó: oró pidiendo que Dios no escuchara a ninguno de los dos bandos, porque los dos eran su pueblo y los dos eran sacerdotes. Lo mataron a pedradas.',
        { h: 'Roma decide' },
        'En ese momento, Roma estaba reorganizando el oriente. El general Pompeyo acababa de convertir a Siria en provincia romana, en el 64 a.C. Los dos hermanos enviaron regalos y embajadores a sus legados. En la primavera del 63 a.C., en Damasco, se presentaron ante Pompeyo Hircano, Aristóbulo y una tercera delegación del pueblo, que pedía terminar con la monarquía y volver al gobierno de los sacerdotes. Pompeyo postergó su decisión, pero Aristóbulo se impacientó, y Pompeyo marchó contra Jerusalén (ruta VI).',
        { h: 'Un reino dividido' },
        'Ochenta años después de la independencia, la ambición de dos hermanos entregó Judea a un imperio extranjero. Jesús lo diría como un principio: «Si un reino está dividido contra sí mismo, tal reino no puede permanecer» (Mr 3:24). Santiago preguntaría a las iglesias de dónde vienen las guerras y los pleitos: «¿No es de vuestras pasiones, las cuales combaten en vuestros miembros?» (Stg 4:1).'
      ],
      pensar: 'La pelea entre dos hermanos terminó con la libertad de toda una nación. ¿Hay alguna división en tu familia o en tu iglesia que estés alimentando en lugar de buscar la paz?'
    }
  ];

  window.__ET.asmoneos = asmoneos;
})();
