
  /* ---------------- Ruta III · Comentario capítulo por capítulo (1–11) ---------------- */
  const carta = (ciudad, titulo, elogio, reproche, llamado, promesa) => tabla('La carta', {
    titulo: `La carta a ${ciudad}`,
    cab: ['Parte', 'Contenido'],
    filas: [['Cristo se presenta', titulo], ['Elogio', elogio], ['Reproche', reproche], ['Llamado', llamado], ['Promesa al vencedor', promesa]]
  });
  const comentario = [
    {
      id: 'cap-1', n: 'Capítulo 1: Cristo entre los candeleros', ref: 'Apocalipsis 1',
      visual: [
        img(IMG + 'apo-cristo-glorificado.webp', 'Juan, anciano, cae como muerto ante una figura resplandeciente vestida de una ropa que llega hasta los pies, con un cinto de oro, de pie en medio de siete candeleros de oro; el rostro de la figura queda oculto por una luz intensa', '«Vi siete candeleros de oro, y en medio… uno semejante al Hijo del Hombre» (Ap 1:12-13).'),
        tabla('La visión', {
          titulo: 'Cristo glorificado (Ap 1:13-16)',
          cab: ['Rasgo', 'Qué sugiere', 'Fondo bíblico'],
          filas: [
            ['Ropa hasta los pies y cinto de oro', 'Sacerdote y rey', 'Éx 28:4; Dn 10:5'],
            ['Cabellos blancos como la nieve', 'Eternidad y sabiduría; comparte rasgos del Anciano de días', 'Dn 7:9'],
            ['Ojos como llama de fuego', 'Todo lo ve y lo examina', 'Dn 10:6; Ap 2:18'],
            ['Pies semejantes al bronce bruñido', 'Firmeza y poder para juzgar', 'Ez 1:7; Dn 10:6'],
            ['Voz como estruendo de muchas aguas', 'Autoridad irresistible', 'Ez 43:2'],
            ['Siete estrellas en la diestra', 'Sostiene y gobierna a sus iglesias', 'Ap 1:20'],
            ['Espada aguda de dos filos en la boca', 'Su palabra juzga', 'Is 49:2; He 4:12'],
            ['Rostro como el sol en su fuerza', 'Gloria divina', 'Mt 17:2']
          ]
        })
      ],
      texto: [
        'El capítulo comienza con un prólogo (1:1-8) y sigue con la primera visión (1:9-20). En el saludo, la gracia viene del Dios eterno, «del que es y que era y que ha de venir», de «los siete espíritus que están delante de su trono», que representan al Espíritu Santo en su plenitud, y de Jesucristo, «el testigo fiel, el primogénito de los muertos, y el soberano de los reyes de la tierra» (Ap 1:4-5). Antes de cualquier juicio, el libro alaba al que «nos amó, y nos lavó de nuestros pecados con su sangre» (Ap 1:5).',
        { h: 'En el Espíritu, en el día del Señor' },
        'Juan estaba en Patmos y dice: «Yo estaba en el Espíritu en el día del Señor» (Ap 1:10). El día del Señor es probablemente el domingo, el día de la resurrección, en que los creyentes se reunían. Estar «en el Espíritu» describe un estado en que el Espíritu Santo toma control del profeta para mostrarle realidades que los ojos naturales no ven, como ocurrió con Ezequiel (Ez 3:12-14).',
        { h: 'Uno semejante al Hijo del Hombre' },
        'Al volverse, Juan ve siete candeleros de oro y, en medio, a Cristo glorificado. La tabla muestra cómo cada rasgo retoma imágenes de Daniel y Ezequiel. Llama la atención que tiene cabellos blancos como el Anciano de días de Daniel 7:9: el Hijo comparte la gloria del Padre. Juan, que se había recostado junto a Jesús en la última cena, cae a sus pies como muerto.',
        'Cristo pone su mano sobre él y le dice: «No temas; yo soy el primero y el último; y el que vivo, y estuve muerto; mas he aquí que vivo por los siglos de los siglos, amén. Y tengo las llaves de la muerte y del Hades» (Ap 1:17-18). El título «el primero y el último» es el que Dios usa para sí mismo en Isaías 44:6.',
        { h: 'En medio de las iglesias' },
        'La visión termina explicando que los candeleros son las iglesias y las estrellas sus ángeles, es decir, sus mensajeros o pastores, o bien ángeles que las representan (Ap 1:20). Cristo no está lejos de su pueblo: camina en medio de las iglesias y las sostiene en su mano.'
      ],
      pensar: 'Juan conocía a Jesús de cerca, y aun así cayó a sus pies al verlo glorificado (Ap 1:17). ¿Se parece tu visión de Cristo a la de este capítulo? ¿Qué rasgo de esta visión necesitas recordar hoy?'
    },
    {
      id: 'cap-2a', n: 'Capítulo 2: Éfeso y Esmirna', ref: 'Apocalipsis 2:1-11',
      visual: [
        carta('Éfeso', 'El que tiene las siete estrellas y anda en medio de los candeleros (2:1)', 'Obras, arduo trabajo, paciencia; no soporta a los malos y probó a los falsos apóstoles (2:2-3, 6)', 'Has dejado tu primer amor (2:4)', 'Recuerda, arrepiéntete y haz las primeras obras (2:5)', 'Comer del árbol de la vida en el paraíso de Dios (2:7)'),
        carta('Esmirna', 'El primero y el postrero, el que estuvo muerto y vivió (2:8)', 'Tribulación y pobreza, pero eres rico (2:9)', 'Ninguno', 'No temas; sé fiel hasta la muerte (2:10)', 'La corona de la vida; no sufrirá daño de la segunda muerte (2:10-11)'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['patmos', 'efeso', 'esmirna'] })
      ],
      texto: [
        'Las siete cartas siguen un mismo molde: Cristo se presenta con un rasgo de la visión del capítulo 1, conoce las obras de la iglesia, elogia lo bueno, reprende lo malo, llama al arrepentimiento y promete algo al vencedor. Todas cierran con la misma frase: «El que tiene oído, oiga lo que el Espíritu dice a las iglesias». Cada carta tenía un destinatario concreto, pero el mensaje es para todas.',
        { h: 'Éfeso: la iglesia que perdió su primer amor (2:1-7)' },
        'Éfeso era la ciudad más importante de Asia, y su iglesia tenía una larga historia: Pablo estuvo allí tres años, luego Timoteo, y según la tradición también Juan. Era una iglesia trabajadora, paciente y firme en la doctrina: había probado a los que decían ser apóstoles y los había hallado mentirosos, y aborrecía las obras de los nicolaítas, igual que el Señor (Ap 2:2, 6).',
        'Pero Cristo le dice: «tengo contra ti, que has dejado tu primer amor» (Ap 2:4). Una iglesia puede tener doctrina correcta y mucha actividad, y haber perdido el amor ardiente por Cristo y por los hermanos. El remedio tiene tres pasos: recordar de dónde se ha caído, arrepentirse y volver a hacer las primeras obras. Si no, el Señor quitará su candelero, es decir, dejará de ser una iglesia que alumbra.',
        { h: 'Esmirna: la iglesia que sufre (2:8-11)' },
        'Esmirna recibe solo elogio. Era pobre y estaba perseguida, en parte por judíos que la calumniaban, a quienes Cristo llama «sinagoga de Satanás» porque su oposición servía a los fines del enemigo (Ap 2:9). Cristo no promete librarla del sufrimiento: anuncia que algunos irán a la cárcel y tendrán tribulación «por diez días», un tiempo limitado y medido por Dios.',
        'La promesa es fuerte: «Sé fiel hasta la muerte, y yo te daré la corona de la vida» (Ap 2:10). Quien así vence no sufrirá daño de la segunda muerte, que el libro identifica después con el lago de fuego (Ap 20:14). Hacia el año 155, el anciano Policarpo, obispo de Esmirna y discípulo de Juan, murió quemado por negarse a maldecir a Cristo.'
      ],
      pensar: 'Éfeso tenía buena doctrina pero había dejado su primer amor; Esmirna era pobre pero rica a los ojos de Cristo (Ap 2:4, 9). ¿A cuál de las dos se parece más tu vida espiritual hoy?'
    },
    {
      id: 'cap-2b', n: 'Capítulo 2: Pérgamo y Tiatira', ref: 'Apocalipsis 2:12-29',
      visual: [
        carta('Pérgamo', 'El que tiene la espada aguda de dos filos (2:12)', 'Retienes mi nombre y no has negado mi fe, aun donde está el trono de Satanás (2:13)', 'Tienes a los que retienen la doctrina de Balaam y la de los nicolaítas (2:14-15)', 'Arrepiéntete (2:16)', 'El maná escondido y una piedrecita blanca con un nombre nuevo (2:17)'),
        carta('Tiatira', 'El Hijo de Dios, con ojos como llama de fuego y pies semejantes al bronce bruñido (2:18)', 'Amor, fe, servicio y paciencia; tus obras postreras son más que las primeras (2:19)', 'Toleras a Jezabel, que enseña a fornicar y a comer cosas sacrificadas a los ídolos (2:20)', 'Retened lo que tenéis hasta que yo venga (2:25)', 'Autoridad sobre las naciones y la estrella de la mañana (2:26-28)'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['efeso', 'esmirna', 'pergamo', 'tiatira'] })
      ],
      texto: [
        { h: 'Pérgamo: la iglesia que se acomoda (2:12-17)' },
        'Pérgamo era la antigua capital de la región y un centro religioso, con el gran altar de Zeus, el santuario de Asclepio y el primer templo de Asia dedicado al emperador. Cristo dice que la iglesia mora «donde está el trono de Satanás» (Ap 2:13). Allí había muerto Antipas, «mi testigo fiel». La iglesia no había negado la fe ni siquiera entonces.',
        'Sin embargo, toleraba a quienes enseñaban la doctrina de Balaam. Balaam no pudo maldecir a Israel, pero aconsejó a Balac hacerlo caer con la idolatría y la inmoralidad de los banquetes de Moab (Nm 25:1-2; 31:16). En Pérgamo, algunos enseñaban que los creyentes podían participar de los banquetes de los templos y de sus costumbres. Cristo, que se presenta con la espada de dos filos, advierte que vendrá a pelear contra ellos con la espada de su boca, es decir, con su palabra de juicio.',
        'Al vencedor le promete el maná escondido, el alimento verdadero que contrasta con la carne de los banquetes idólatras, y una piedrecita blanca con un nombre nuevo, quizás como las piedras que servían de entrada a un banquete: el creyente tiene un lugar asegurado en la mesa del Señor.',
        { h: 'Tiatira: la iglesia que tolera (2:18-29)' },
        'Tiatira recibe elogios por su amor, fe, servicio y paciencia, y porque sus obras han crecido (Ap 2:19). Pero toleraba a una mujer a quien Cristo llama Jezabel, como la reina que llevó a Israel a la idolatría (1 R 16:31). Se decía profetisa y enseñaba a los siervos de Cristo a fornicar y a comer cosas sacrificadas a los ídolos. Algunos llamaban a sus enseñanzas «las profundidades de Satanás» (Ap 2:24).',
        'El Hijo de Dios, con ojos como llama de fuego, escudriña «la mente y el corazón» (Ap 2:23). Dio tiempo a esa mujer para arrepentirse, pero ella no quiso. A los demás no les impone otra carga: solo les pide retener lo que tienen hasta que él venga. Al vencedor le promete autoridad sobre las naciones, en cumplimiento del Salmo 2, y «la estrella de la mañana» (Ap 2:28), que es Cristo mismo (Ap 22:16).'
      ],
      pensar: 'Pérgamo y Tiatira toleraban enseñanzas que invitaban a acomodarse al pecado de su cultura (Ap 2:14, 20). ¿Qué enseñanzas parecidas circulan hoy, y cómo puedes discernirlas a la luz de la Palabra?'
    },
    {
      id: 'cap-3a', n: 'Capítulo 3: Sardis y Filadelfia', ref: 'Apocalipsis 3:1-13',
      visual: [
        carta('Sardis', 'El que tiene los siete espíritus de Dios y las siete estrellas (3:1)', 'Unas pocas personas no han manchado sus vestiduras (3:4)', 'Tienes nombre de que vives, y estás muerto (3:1)', 'Sé vigilante, afirma las otras cosas, acuérdate y arrepiéntete (3:2-3)', 'Vestiduras blancas; su nombre no será borrado del libro de la vida (3:5)'),
        carta('Filadelfia', 'El Santo, el Verdadero, el que tiene la llave de David (3:7)', 'Tienes poca fuerza, has guardado mi palabra y no has negado mi nombre (3:8)', 'Ninguno', 'Retén lo que tienes, para que ninguno tome tu corona (3:11)', 'Columna en el templo de Dios, con el nombre de Dios, de la nueva Jerusalén y el nombre nuevo de Cristo (3:12)'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['tiatira', 'sardis', 'filadelfia'] })
      ],
      texto: [
        { h: 'Sardis: la iglesia de apariencias (3:1-6)' },
        'Sardis había sido la capital del rico reino de Lidia y del rey Creso. Su ciudadela, sobre un monte de laderas casi verticales, parecía imposible de tomar, y sin embargo fue tomada por sorpresa dos veces, porque sus defensores no vigilaban. La iglesia se le parecía: «tienes nombre de que vives, y estás muerto» (Ap 3:1). Tenía fama de iglesia viva, pero sus obras no estaban completas delante de Dios.',
        'Cristo la llama a despertar: «Sé vigilante, y afirma las otras cosas que están para morir» (Ap 3:2). Si no vela, él vendrá como ladrón, en la hora que no espera. Aun así, había unas pocas personas que no habían manchado sus vestiduras, y andarán con Cristo «en vestiduras blancas, porque son dignas» (Ap 3:4).',
        'La promesa al vencedor incluye que su nombre no será borrado del libro de la vida. Es una advertencia seria a quienes viven de apariencias, y a la vez una seguridad para el que persevera: Cristo confesará su nombre delante del Padre y de sus ángeles (Ap 3:5; Mt 10:32).',
        { h: 'Filadelfia: la iglesia fiel con poca fuerza (3:7-13)' },
        'Filadelfia, la ciudad más joven de las siete, no recibe ningún reproche. Cristo se presenta como el que tiene «la llave de David», que abre y nadie cierra (Ap 3:7), como Eliaquim en Isaías 22:22. Ante una iglesia débil, rechazada por la sinagoga local, Cristo pone una puerta abierta: oportunidades que nadie puede cerrar.',
        'Luego viene una promesa clave para la escatología: «Por cuanto has guardado la palabra de mi paciencia, yo también te guardaré de la hora de la prueba que ha de venir sobre el mundo entero, para probar a los que moran sobre la tierra» (Ap 3:10). Esa hora de prueba es mundial y futura; la promesa no es ser guardados dentro de ella, sino «de» ella. Este estudio la entiende como un apoyo al arrebatamiento de la iglesia antes de la tribulación, tema que la ruta de teología desarrolla.',
        'Al vencedor, Cristo lo hará columna en el templo de Dios, algo firme y permanente, en una ciudad sacudida tantas veces por los terremotos, y escribirá sobre él el nombre de Dios, de la nueva Jerusalén y su propio nombre nuevo.'
      ],
      pensar: 'Sardis tenía fama sin vida; Filadelfia tenía poca fuerza pero era fiel (Ap 3:1, 8). ¿Qué te importa más: lo que otros piensan de tu vida espiritual o lo que Cristo ve en ella?'
    },
    {
      id: 'cap-3b', n: 'Capítulo 3: Laodicea', ref: 'Apocalipsis 3:14-22',
      visual: [
        carta('Laodicea', 'El Amén, el testigo fiel y verdadero, el principio de la creación de Dios (3:14)', 'Ninguno', 'Ni eres frío ni caliente; dices: soy rico y no tengo necesidad de nada (3:15-17)', 'Compra de mí oro, vestiduras blancas y colirio; sé celoso y arrepiéntete (3:18-19)', 'Sentarse con Cristo en su trono (3:21)'),
        pasaje('@@ap/3/19-21', 'Apocalipsis 3:19-21'),
        mapa({ view: ASIA, capas: ['roma-14'], lugares: ['filadelfia', 'laodicea', 'hierapolis', 'colosas'] })
      ],
      texto: [
        'La última carta es la más severa: no hay ningún elogio. Cristo se presenta como «el Amén, el testigo fiel y verdadero» (Ap 3:14), el que dice la verdad aunque duela, a una iglesia que se engañaba a sí misma.',
        { h: 'Ni frío ni caliente' },
        '«Yo conozco tus obras, que ni eres frío ni caliente. ¡Ojalá fueses frío o caliente! Pero por cuanto eres tibio, y no frío ni caliente, te vomitaré de mi boca» (Ap 3:15-16). Laodicea no tenía fuentes propias y traía el agua por un acueducto; llegaba tibia y cargada de minerales. Muy cerca, Hierápolis tenía aguas termales, útiles para sanar, y Colosas, agua fría y fresca. Lo caliente y lo frío servían; lo tibio solo producía náuseas. Una iglesia tibia no es de provecho para nadie.',
        { h: 'Rica, pero pobre' },
        'Laodicea era una ciudad de bancos, de lana negra de calidad y conocida por la medicina de los ojos. Cuando un terremoto la destruyó en el año 60, se reconstruyó sin pedir ayuda a Roma. La iglesia había adoptado el mismo orgullo: «Yo soy rico, y me he enriquecido, y de ninguna cosa tengo necesidad» (Ap 3:17). Cristo le responde que es «desventurada, miserable, pobre, ciega y desnuda», y le aconseja comprar de él oro refinado, vestiduras blancas y colirio, justo lo que la ciudad creía tener de sobra.',
        { h: 'Cristo a la puerta' },
        'La carta termina con una de las invitaciones más tiernas de la Biblia: «He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo» (Ap 3:20). Es una iglesia que dejó a Cristo afuera. Aun así, él la ama: «Yo reprendo y castigo a todos los que amo; sé, pues, celoso, y arrepiéntete» (Ap 3:19). La invitación es personal: «si alguno». Y la promesa al vencedor es la más alta: sentarse con Cristo en su trono.',
        { posturas: {
          titulo: '¿Las siete iglesias son también siete épocas?',
          a: { n: 'Solo iglesias del siglo I', t: 'Las cartas se escribieron a siete congregaciones reales, con problemas reales, y su mensaje se aplica a toda iglesia en cualquier época según su condición.' },
          b: { n: 'También un panorama de la era de la iglesia', t: 'Muchos dispensacionalistas ven además en su orden una anticipación de la historia de la iglesia: de la iglesia apostólica (Éfeso) a la iglesia tibia de los últimos días (Laodicea).' },
          c: 'Lo seguro es lo primero: eran iglesias reales y cada carta habla a todas. La lectura por épocas puede ser una aplicación secundaria, pero el texto no la enseña de forma directa, y este estudio no construye doctrina sobre ella.'
        } }
      ],
      pensar: 'Cristo está a la puerta de una iglesia que se creía rica y llama: «si alguno oye mi voz» (Ap 3:20). ¿Hay áreas de tu vida donde has dejado a Cristo afuera? ¿Qué significaría abrirle la puerta hoy?'
    },
    {
      id: 'cap-4', n: 'Capítulo 4: El trono en el cielo', ref: 'Apocalipsis 4',
      visual: [
        img(IMG + 'apo-trono.webp', 'Una sala celestial de luz con un trono resplandeciente rodeado por un arco iris de color esmeralda, un mar de vidrio semejante al cristal delante, siete lámparas de fuego y veinticuatro ancianos vestidos de blanco que echan sus coronas de oro ante el trono', '«He aquí, un trono establecido en el cielo» (Ap 4:2).'),
        tabla('El trono', {
          titulo: 'Lo que rodea el trono',
          cab: ['Elemento', 'Pasaje', 'Fondo bíblico'],
          filas: [
            ['El que está sentado, como jaspe y cornalina', '4:3', 'Ez 1:26-28'],
            ['Arco iris semejante a la esmeralda', '4:3', 'Gn 9:13; Ez 1:28'],
            ['Veinticuatro ancianos con coronas de oro', '4:4, 10', '1 Cr 24:3-19'],
            ['Relámpagos, truenos y voces', '4:5', 'Éx 19:16'],
            ['Siete lámparas: los siete espíritus de Dios', '4:5', 'Zac 4:2, 10'],
            ['Mar de vidrio semejante al cristal', '4:6', 'Éx 24:10; Ez 1:22'],
            ['Cuatro seres vivientes llenos de ojos', '4:6-8', 'Is 6:2-3; Ez 1:5-10']
          ]
        })
      ],
      texto: [
        'Con el capítulo 4 empieza la tercera parte del libro. Juan ve una puerta abierta en el cielo y oye la voz como de trompeta: «Sube acá, y yo te mostraré las cosas que sucederán después de estas» (Ap 4:1). La palabra iglesia, tan repetida en los capítulos 2 y 3, desaparece desde aquí hasta el final del capítulo 19.',
        'Muchos intérpretes dispensacionalistas ven en el llamado a Juan una ilustración del arrebatamiento: una puerta abierta, una voz como de trompeta y un «sube acá», como en 1 Tesalonicenses 4:16. El texto no dice que esto sea el arrebatamiento, pero coincide con el momento en que la iglesia deja de aparecer en la tierra.',
        { h: 'Un trono ocupado' },
        'Lo primero que Juan ve es «un trono establecido en el cielo, y en el trono, uno sentado» (Ap 4:2). Antes de que se desaten los juicios, el libro muestra quién gobierna. Juan no describe el rostro de Dios, sino su resplandor, como de jaspe y cornalina, y un arco iris de esmeralda, señal del pacto de Dios con la creación.',
        { h: 'Los ancianos y los seres vivientes' },
        'Alrededor hay veinticuatro tronos con veinticuatro ancianos vestidos de blanco y con coronas de oro. Muchos los entienden como representantes de los redimidos ya glorificados; el número recuerda los veinticuatro turnos de sacerdotes que David organizó (1 Cr 24). Cerca del trono hay cuatro seres vivientes, con rostros de león, becerro, hombre y águila, que se parecen a los querubines de Ezequiel y a los serafines de Isaías.',
        { h: 'Santo, santo, santo' },
        'Los seres vivientes no cesan de decir: «Santo, santo, santo es el Señor Dios Todopoderoso, el que era, el que es, y el que ha de venir» (Ap 4:8). Y cada vez que lo hacen, los ancianos se postran y echan sus coronas delante del trono, diciendo: «Señor, digno eres de recibir la gloria y la honra y el poder; porque tú creaste todas las cosas, y por tu voluntad existen y fueron creadas» (Ap 4:11).',
        'Todo el resto del libro debe leerse a la luz de esta escena: la historia se desarrolla bajo un trono que nadie puede mover.'
      ],
      pensar: 'Los ancianos echan sus coronas delante del trono (Ap 4:10). ¿Qué «coronas» de tu vida (logros, capacidades, honores) necesitas poner a los pies de Dios en adoración?'
    },
    {
      id: 'cap-5', n: 'Capítulo 5: El Cordero y el libro', ref: 'Apocalipsis 5',
      visual: [
        img(ESC + 'esc-libro-sellos.webp', 'En el salón del trono celestial, rodeado de un arco iris de esmeralda, veinticuatro ancianos con coronas de oro se postran ante el trono y ante el Cordero que tiene el libro sellado', '«Un libro escrito por dentro y por fuera, sellado con siete sellos» (Ap 5:1).'),
        pasaje('@@ap/5/9-10', 'Apocalipsis 5:9-10', 'El cántico nuevo')
      ],
      texto: [
        'En la mano derecha del que está sentado en el trono hay un libro, un rollo escrito por dentro y por fuera, sellado con siete sellos (Ap 5:1). Un ángel pregunta en alta voz: «¿Quién es digno de abrir el libro y desatar sus sellos?» Y nadie, ni en el cielo ni en la tierra ni debajo de la tierra, puede hacerlo. Juan llora mucho.',
        { h: 'Qué es el libro' },
        'El rollo contiene el plan de Dios para juzgar al mundo y recuperar la tierra para su Rey: cuando se abren sus sellos, comienzan los juicios del capítulo 6. Algunos lo comparan con un título de propiedad, que en Israel se escribía y sellaba y que solo el pariente con derecho podía abrir para redimir la tierra (Jer 32:6-15). Sea cual sea la imagen exacta, lo importante es que solo uno tiene derecho a ejecutar el plan de Dios sobre la tierra.',
        { h: 'El León que es Cordero' },
        'Uno de los ancianos consuela a Juan: «No llores. He aquí que el León de la tribu de Judá, la raíz de David, ha vencido para abrir el libro» (Ap 5:5). Juan mira esperando ver un león, y ve «un Cordero como inmolado», de pie en medio del trono (Ap 5:6). Es la imagen central de todo el libro: Cristo es el Rey prometido de Judá (Gn 49:9-10), pero ha vencido muriendo como cordero, y está de pie porque resucitó. Tiene siete cuernos, que expresan poder pleno, y siete ojos, que son los siete espíritus de Dios enviados por toda la tierra.',
        { h: 'Toda la creación adora' },
        'Cuando el Cordero toma el libro, comienza una adoración que crece en círculos. Primero los seres vivientes y los ancianos, con arpas y copas de incienso, «que son las oraciones de los santos», cantan un cántico nuevo: «Digno eres… porque tú fuiste inmolado, y con tu sangre nos has redimido para Dios, de todo linaje y lengua y pueblo y nación» (Ap 5:8-9). Luego millones de ángeles. Y al final toda criatura del cielo, de la tierra y del mar adora «al que está sentado en el trono, y al Cordero» (Ap 5:13). El Cordero recibe la misma adoración que Dios: es Dios.'
      ],
      pensar: 'Juan esperaba ver un León y vio un Cordero como inmolado (Ap 5:5-6). ¿Qué te enseña esto sobre la manera en que Dios obtiene la victoria, y sobre cómo nos llama a vencer a nosotros?'
    },
    {
      id: 'cap-6', n: 'Capítulo 6: Los seis primeros sellos', ref: 'Apocalipsis 6; Mateo 24:4-8',
      visual: [
        img(ESC + 'esc-jinetes-1-2.webp', 'Bajo un cielo dramático, un jinete coronado sobre un caballo blanco avanza con un arco en la mano, seguido de un jinete con una gran espada sobre un caballo bermejo', 'El caballo blanco y el caballo bermejo (Ap 6:2-4).'),
        img(ESC + 'esc-jinetes-3-4.webp', 'Sobre una tierra seca y devastada, un jinete en un caballo negro sostiene en alto una balanza, y junto a él avanza un caballo amarillo pálido', 'El caballo negro y el caballo amarillo (Ap 6:5-8).'),
        tabla('Paralelos', {
          titulo: 'Los sellos y el sermón del monte de los Olivos',
          cab: ['Sello', 'Apocalipsis 6', 'Mateo 24'],
          filas: [
            ['1.º Caballo blanco', 'Un conquistador con arco (6:2)', 'Falsos cristos que engañarán (24:5)'],
            ['2.º Caballo bermejo', 'Se quita la paz de la tierra (6:4)', 'Guerras y rumores de guerras (24:6-7)'],
            ['3.º Caballo negro', 'Escasez y precios altos (6:6)', 'Hambres (24:7)'],
            ['4.º Caballo amarillo', 'Muerte para la cuarta parte de la tierra (6:8)', 'Pestes (Lc 21:11)'],
            ['5.º Las almas bajo el altar', 'Mártires que claman (6:9-11)', 'Os entregarán y os matarán (24:9)'],
            ['6.º Señales cósmicas', 'Terremoto, sol negro, luna como sangre (6:12-14)', 'El sol se oscurecerá (24:29)']
          ]
        })
      ],
      texto: [
        'El Cordero abre los sellos uno por uno, y con cada uno se desata un juicio sobre la tierra. Es el comienzo de la tribulación, la semana setenta de Daniel. La tabla muestra que el orden coincide con lo que Jesús anunció en el monte de los Olivos como «principio de dolores» (Mt 24:8).',
        { h: 'Los cuatro jinetes (6:1-8)' },
        'El primer jinete monta un caballo blanco, tiene un arco y una corona, y sale «venciendo, y para vencer» (Ap 6:2). Aunque se parece al jinete del capítulo 19, que es Cristo, aquí no tiene nombre y abre una serie de calamidades. Muchos lo identifican con el anticristo en su ascenso, que conquista prometiendo paz, o con el espíritu de conquista que traen los falsos cristos. Los otros jinetes traen guerra, hambre y muerte: un denario, el salario de un día, alcanza apenas para «dos libras de trigo» (Ap 6:6), la ración de una persona, y el cuarto jinete, Muerte, seguido del Hades, recibe poder sobre la cuarta parte de la tierra.',
        { h: 'Las almas bajo el altar (6:9-11)' },
        'El quinto sello muestra a los que «habían sido muertos por causa de la palabra de Dios y por el testimonio que tenían» (Ap 6:9). Son creyentes que mueren durante la tribulación, después del arrebatamiento. Su clamor pide justicia, y reciben vestiduras blancas y la indicación de esperar un poco más.',
        { h: 'El gran día de su ira (6:12-17)' },
        'El sexto sello sacude el universo: un gran terremoto, el sol negro, la luna como sangre y las estrellas que caen. Reyes, poderosos, ricos y esclavos se esconden en las cuevas y dicen a los montes: «Caed sobre nosotros, y escondednos del rostro de aquel que está sentado sobre el trono, y de la ira del Cordero; porque el gran día de su ira ha llegado; ¿y quién podrá sostenerse en pie?» (Ap 6:16-17). La expresión «la ira del Cordero» es inquietante: el mismo que murió por los pecadores juzgará a quienes lo rechazaron.',
        'El recurso Los últimos tiempos desarrolla cada sello con más detalle.',
        { ir: { t: 'Abrir el recurso Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'Los hombres prefieren esconderse de Dios antes que arrepentirse (Ap 6:16). ¿Por qué crees que el ser humano huye de Dios en vez de buscarlo? ¿Cómo te invita el Cordero a acercarte hoy?'
    },
    {
      id: 'cap-7', n: 'Capítulo 7: Los 144.000 y la gran multitud', ref: 'Apocalipsis 7',
      visual: [
        img(ESC + 'esc-gran-multitud.webp', 'Ante un trono resplandeciente, una multitud incontable de personas de todas las naciones y razas, vestidas de ropas blancas y con palmas en las manos', '«Una gran multitud, la cual nadie podía contar» (Ap 7:9).'),
        tabla('Comparación', {
          titulo: 'Dos grupos en el mismo capítulo',
          cab: ['', 'Los 144.000 (7:1-8)', 'La gran multitud (7:9-17)'],
          filas: [
            ['Dónde están', 'En la tierra', 'Delante del trono, en el cielo'],
            ['Número', 'Contados: 12.000 de cada tribu', 'Nadie la podía contar'],
            ['Origen', 'Las tribus de los hijos de Israel', 'Todas las naciones, tribus, pueblos y lenguas'],
            ['Qué reciben', 'El sello de Dios en la frente', 'Ropas blancas y palmas'],
            ['De dónde vienen', 'Sellados antes del juicio', '«Han salido de la gran tribulación» (7:14)']
          ]
        })
      ],
      texto: [
        'Antes de abrirse el séptimo sello, el relato hace una pausa. El capítulo 6 terminó preguntando «¿quién podrá sostenerse en pie?», y el capítulo 7 responde mostrando dos grupos que Dios protege y salva.',
        { h: 'Los 144.000 sellados (7:1-8)' },
        'Cuatro ángeles detienen los vientos de la tierra hasta que sean sellados «los siervos de nuestro Dios» (Ap 7:3). Juan oye el número: ciento cuarenta y cuatro mil, de todas las tribus de los hijos de Israel, doce mil de cada una. Este estudio los entiende como israelitas reales, convertidos a Cristo durante la tribulación y protegidos por Dios para servirle en ese tiempo. El texto nombra las tribus una por una, lo que difícilmente tendría sentido si se tratara de la iglesia en sentido simbólico. La lista omite a Dan, quizás por su temprana idolatría (Jue 18), y nombra a José y a Manasés en lugar de Efraín.',
        { posturas: {
          titulo: '¿Quiénes son los 144.000?',
          a: { n: 'Israelitas de la tribulación', t: 'Son judíos creyentes de las doce tribus, sellados durante la tribulación. Dios cumple así sus promesas a Israel (Ro 11:25-26). Es la lectura futurista y dispensacionalista.' },
          b: { n: 'La iglesia en sentido simbólico', t: 'Otros ven en ellos a todo el pueblo de Dios, judíos y gentiles, descrito con el lenguaje de Israel, y entienden que la gran multitud es el mismo grupo visto desde el cielo.' },
          c: 'Este estudio sigue la primera postura: el texto distingue claramente a los sellados de Israel, contados y en la tierra, de una multitud de todas las naciones, incontable y en el cielo.'
        } },
        { h: 'La gran multitud (7:9-17)' },
        'Después Juan ve una multitud que nadie puede contar, de todas las naciones, vestida de ropas blancas y con palmas en las manos. Un anciano explica: «Estos son los que han salido de la gran tribulación, y han lavado sus ropas, y las han emblanquecido en la sangre del Cordero» (Ap 7:14). Son los que creen en Cristo durante la tribulación y mueren en ella. El pasaje termina con una de las promesas más hermosas: «el Cordero que está en medio del trono los pastoreará, y los guiará a fuentes de aguas de vida; y Dios enjugará toda lágrima de los ojos de ellos» (Ap 7:17).'
      ],
      pensar: 'Aun en el tiempo más oscuro de la historia, una multitud incontable será salvada por la sangre del Cordero (Ap 7:9, 14). ¿Qué te dice esto sobre el corazón de Dios para salvar, y sobre la urgencia de anunciar el evangelio hoy?'
    },
    {
      id: 'cap-8', n: 'Capítulo 8: El séptimo sello y las cuatro trompetas', ref: 'Apocalipsis 8',
      visual: [
        img(ESC + 'esc-trompetas.webp', 'Siete ángeles de pie ante el trono de Dios en el cielo, cada uno con una larga trompeta, mientras abajo, en la tierra, se ven tormentas de fuego y granizo', '«Y se les dieron siete trompetas» (Ap 8:2).'),
        tabla('Las trompetas', {
          titulo: 'Las cuatro primeras trompetas y las plagas de Egipto',
          cab: ['Trompeta', 'Juicio', 'Plaga de Egipto'],
          filas: [
            ['1.ª', 'Granizo y fuego mezclados con sangre; se quema la tercera parte de la tierra (8:7)', 'Granizo y fuego (Éx 9:23-25)'],
            ['2.ª', 'Una gran montaña ardiendo cae al mar; la tercera parte del mar se convierte en sangre (8:8-9)', 'El agua en sangre (Éx 7:20-21)'],
            ['3.ª', 'La estrella Ajenjo amarga la tercera parte de los ríos (8:10-11)', 'Las aguas imposibles de beber (Éx 7:24)'],
            ['4.ª', 'Se oscurece la tercera parte del sol, la luna y las estrellas (8:12)', 'Tinieblas (Éx 10:21-23)']
          ]
        })
      ],
      texto: [
        { h: 'Silencio en el cielo (8:1)' },
        'Cuando el Cordero abre el séptimo sello, «se hizo silencio en el cielo como por media hora» (Ap 8:1). Después de los cánticos y truenos de los capítulos anteriores, el silencio es solemne: el cielo entero contiene la respiración ante lo que viene. Del séptimo sello salen siete ángeles con siete trompetas.',
        { h: 'Las oraciones de los santos (8:3-5)' },
        'Antes de que suenen las trompetas, otro ángel ofrece mucho incienso con las oraciones de todos los santos sobre el altar de oro, y el humo sube delante de Dios. Luego llena el incensario con fuego del altar y lo arroja a la tierra, y hay truenos, voces, relámpagos y un terremoto. Las oraciones de los santos, incluido el clamor de los mártires (Ap 6:10), están conectadas con los juicios. Dios no olvida lo que su pueblo le pide.',
        { h: 'Las cuatro primeras trompetas (8:6-12)' },
        'En Israel, las trompetas convocaban al pueblo, anunciaban la guerra y marcaban las fiestas; en Jericó, siete sacerdotes con siete trompetas precedieron la caída de la ciudad (Jos 6). Aquí anuncian juicios que recuerdan las plagas de Egipto, como muestra la tabla. Las cuatro primeras afectan la naturaleza: la tierra, el mar, los ríos y los astros, siempre en la tercera parte.',
        'La tercera trompeta trae una estrella llamada Ajenjo, una planta muy amarga, que hace amargas las aguas y causa la muerte de muchos (Ap 8:11). No hace falta identificar cada juicio con un fenómeno moderno; el texto describe acontecimientos reales con el lenguaje de las visiones, y su sentido es claro: el mundo que rechazó a su Creador ve cómo la creación misma se vuelve contra él.',
        { h: 'Tres ayes (8:13)' },
        'El capítulo termina con un águila que vuela por en medio del cielo y clama: «¡Ay, ay, ay, de los que moran en la tierra, a causa de los otros toques de trompeta que están para sonar los tres ángeles!» (Ap 8:13). Lo que viene es peor: las tres últimas trompetas son los tres ayes.'
      ],
      pensar: 'Las oraciones de los santos suben como incienso delante de Dios y tienen parte en su obra (Ap 8:3-4). ¿Qué valor le das a tus oraciones? ¿Crees que Dios las guarda y las responde a su tiempo?'
    },
    {
      id: 'cap-9', n: 'Capítulo 9: La quinta y la sexta trompeta', ref: 'Apocalipsis 9',
      visual: [
        img(IMG + 'apo-abismo.webp', 'Desde una enorme grieta en un paisaje desértico de noche sube una columna de humo negro que oscurece el sol naciente, mientras una multitud de pequeñas siluetas oscuras como langostas sale volando del humo', '«Subió humo del pozo como humo de un gran horno» (Ap 9:2).'),
        mapa({ view: [[28.5, 30.0], [39.0, 50.0]], capas: [], lugares: ['babilonia', 'jerusalen', 'meguido'] }, 'El Éufrates')
      ],
      texto: [
        { h: 'La quinta trompeta: el primer ay (9:1-12)' },
        'Juan ve una estrella que había caído del cielo a la tierra, a la que se le da la llave del pozo del abismo. Es un ser personal, porque recibe una llave y abre, probablemente un ángel caído o el mismo Satanás (Lc 10:18). Del pozo sube humo como de un gran horno, y del humo salen langostas con poder como de escorpiones. No dañan la vegetación, sino solo a los hombres que no tienen el sello de Dios en la frente. Los 144.000 quedan protegidos (Ap 7:3).',
        'La descripción es impresionante: parecen caballos preparados para la guerra, con coronas, rostros humanos, cabellos de mujer, dientes de león y ruido de carros. Tienen por rey «al ángel del abismo, cuyo nombre en hebreo es Abadón, y en griego, Apolión» (Ap 9:11), nombres que significan destrucción y destructor. Todo indica que se trata de seres demoníacos liberados por Dios por un tiempo limitado, cinco meses, para atormentar sin matar. El dolor es tal que los hombres buscarán la muerte y no la hallarán (Ap 9:6).',
        { h: 'La sexta trompeta: el segundo ay (9:13-21)' },
        'Una voz manda desatar a los cuatro ángeles atados junto al gran río Éufrates (Ap 9:14). Estaban preparados para la hora, el día, el mes y el año exactos: nada ocurre fuera del tiempo de Dios. Se suelta un ejército de doscientos millones de jinetes, con caballos que echan fuego, humo y azufre, y muere la tercera parte de los hombres.',
        'El Éufrates era la frontera oriental del mundo romano y, en la Biblia, el límite de la tierra prometida (Gn 15:18). Del otro lado venían los enemigos de Israel: Asiria, Babilonia, Persia. El juicio llega desde allí. Algunos ven en este ejército una fuerza humana impulsada por poderes demoníacos; otros, un ejército del todo demoníaco. El texto subraya lo mismo en ambos casos: Dios controla su número y su tiempo.',
        { h: 'No se arrepintieron' },
        'El capítulo termina con una nota trágica. Los que sobrevivieron «ni aun así se arrepintieron de las obras de sus manos, ni dejaron de adorar a los demonios, y a las imágenes… y no se arrepintieron de sus homicidios, ni de sus hechicerías, ni de su fornicación, ni de sus hurtos» (Ap 9:20-21). El juicio no cambia por sí solo un corazón endurecido.'
      ],
      pensar: 'Ni siquiera juicios tan grandes llevaron a los hombres al arrepentimiento (Ap 9:20-21). ¿Qué te enseña esto sobre la importancia de responder a Dios hoy, mientras su gracia te llama?'
    },
    {
      id: 'cap-10', n: 'Capítulo 10: El ángel y el librito', ref: 'Apocalipsis 10; Ezequiel 2:8–3:3; Daniel 12:4-9',
      visual: [
        img(IMG + 'apo-angel-librito.webp', 'Un ángel gigantesco envuelto en una nube, con un arco iris sobre la cabeza y el rostro brillante como el sol, apoya un pie sobre el mar y otro sobre la tierra junto a la costa, con un pequeño rollo abierto en la mano', '«Puso su pie derecho sobre el mar, y el izquierdo sobre la tierra» (Ap 10:2).'),
        pasaje('@@ap/10/5-7', 'Apocalipsis 10:5-7')
      ],
      texto: [
        'Entre la sexta y la séptima trompeta hay otra pausa, que va de 10:1 a 11:14. En ella Juan recibe una nueva comisión como profeta y conoce a los dos testigos.',
        { h: 'El ángel fuerte (10:1-4)' },
        'Desciende del cielo un ángel fuerte, envuelto en una nube, con el arco iris sobre la cabeza, el rostro como el sol y los pies como columnas de fuego. Algunos piensan que es Cristo, por la descripción gloriosa, pero el libro lo llama «otro ángel fuerte» (Ap 10:1) y lo distingue de Dios cuando el ángel jura por el que vive por los siglos. Es un ángel de gran autoridad. Pone un pie sobre el mar y otro sobre la tierra: su mensaje abarca el mundo entero.',
        'Cuando clama, siete truenos emiten sus voces. Juan va a escribir lo que dicen, pero se le ordena: «Sella las cosas que los siete truenos han dicho, y no las escribas» (Ap 10:4). Dios no lo reveló todo. Hay cosas que no sabemos, y eso nos llama a la humildad al estudiar la profecía.',
        { h: 'El tiempo no será más (10:5-7)' },
        'El ángel levanta la mano al cielo, como el varón vestido de lino en Daniel 12:7, y jura que «el tiempo no sería más» (Ap 10:6), es decir, que no habrá más demora. Cuando suene la séptima trompeta, «el misterio de Dios se consumará, como él lo anunció a sus siervos los profetas» (Ap 10:7). Lo que Daniel recibió sellado hasta el tiempo del fin (Dn 12:4) está por cumplirse.',
        { h: 'Dulce y amargo (10:8-11)' },
        'Juan recibe la orden de tomar el librito abierto y comérselo. Como le pasó a Ezequiel (Ez 3:1-3), es dulce en la boca, pero amarga el vientre. La palabra de Dios es dulce porque es suya y anuncia su victoria; pero su mensaje de juicio para un mundo que no se arrepiente produce dolor. Por último se le dice: «Es necesario que profetices otra vez sobre muchos pueblos, naciones, lenguas y reyes» (Ap 10:11). Lo que sigue en el libro es esa nueva profecía.'
      ],
      pensar: 'La Palabra fue dulce en la boca de Juan y amarga en su vientre (Ap 10:10). ¿Has experimentado esa mezcla al recibir y compartir la Palabra de Dios? ¿Cómo te ayuda a anunciarla con amor y seriedad?'
    },
    {
      id: 'cap-11a', n: 'Capítulo 11: El templo y los dos testigos', ref: 'Apocalipsis 11:1-14; Zacarías 4; Malaquías 4:5',
      visual: [
        img(ESC + 'esc-dos-testigos.webp', 'En una plaza de Jerusalén, frente a la ciudad antigua, dos profetas ancianos vestidos con túnicas ásperas de cilicio predican ante una multitud', '«Y daré a mis dos testigos que profeticen» (Ap 11:3).'),
        tabla('Los testigos', {
          titulo: 'Los dos testigos y los profetas del Antiguo Testamento',
          cab: ['Señal', 'Apocalipsis 11', 'Antiguo Testamento'],
          filas: [
            ['Dos olivos y dos candeleros', '11:4', 'Zac 4:3, 11-14: Zorobabel y Josué'],
            ['Fuego que devora a sus enemigos', '11:5', 'Elías (2 R 1:10-12)'],
            ['Cerrar el cielo para que no llueva', '11:6', 'Elías (1 R 17:1; Stg 5:17)'],
            ['Convertir las aguas en sangre y herir con plagas', '11:6', 'Moisés (Éx 7–11)'],
            ['Suben al cielo en una nube', '11:12', 'Elías (2 R 2:11)']
          ]
        })
      ],
      texto: [
        { h: 'Medir el templo (11:1-2)' },
        'Juan recibe una caña para medir «el templo de Dios, y el altar, y a los que adoran en él», pero no el patio de afuera, porque ha sido entregado a los gentiles, que hollarán la ciudad santa cuarenta y dos meses (Ap 11:1-2). Medir indica que Dios reconoce y protege lo que le pertenece. Como el libro se escribió hacia el año 95, cuando el templo de Herodes ya había sido destruido, este estudio entiende que habla de un templo que existirá en Jerusalén durante la tribulación, el mismo que Jesús y Pablo mencionan (Mt 24:15; 2 Ts 2:4).',
        { h: 'Los dos testigos (11:3-6)' },
        'Dios da poder a dos testigos para profetizar mil doscientos sesenta días, vestidos de cilicio, señal de luto y llamado al arrepentimiento. Son «los dos olivos, y los dos candeleros que están en pie delante del Dios de la tierra» (Ap 11:4), una referencia a Zacarías 4. Mientras dura su ministerio, nadie puede dañarlos. Sus señales recuerdan a Elías y a Moisés.',
        { posturas: {
          titulo: '¿Quiénes son los dos testigos?',
          a: { n: 'Moisés y Elías, o profetas con su ministerio', t: 'Sus señales son las de Moisés y Elías, los dos que aparecieron con Jesús en el monte de la transfiguración (Mt 17:3). Malaquías anunció que Elías vendría antes del día grande y terrible del Señor (Mal 4:5).' },
          b: { n: 'Enoc y Elías', t: 'Algunos escritores antiguos los identificaron con Enoc y Elías, los dos hombres que no murieron (Gn 5:24; 2 R 2:11), porque «está establecido para los hombres que mueran una sola vez» (He 9:27).' },
          c: 'El texto no da sus nombres. Lo seguro es que son dos profetas reales y futuros, que ministrarán en Jerusalén con el poder de Moisés y de Elías. Muchos maestros pentecostales y dispensacionalistas se inclinan por Moisés y Elías, o por dos profetas que vienen en su espíritu.'
        } },
        { h: 'Muerte y resurrección (11:7-14)' },
        'Cuando terminan su testimonio, la bestia que sube del abismo les hace guerra y los mata. Sus cuerpos quedan tres días y medio en la plaza de la gran ciudad, «que en sentido espiritual se llama Sodoma y Egipto, donde también nuestro Señor fue crucificado» (Ap 11:8): es Jerusalén, que en ese tiempo se habrá apartado de Dios. Los moradores de la tierra lo celebran y se envían regalos. Pero después de tres días y medio el espíritu de vida entra en ellos, se levantan y suben al cielo en una nube a la vista de sus enemigos. Un terremoto sacude la ciudad, y los demás, aterrorizados, dan gloria a Dios.'
      ],
      pensar: 'Los dos testigos fueron invencibles hasta que terminaron su testimonio (Ap 11:5-7). ¿Qué confianza te da saber que tu vida está en manos de Dios hasta que cumplas lo que él te ha encomendado?'
    },
    {
      id: 'cap-11b', n: 'Capítulo 11: La séptima trompeta', ref: 'Apocalipsis 11:15-19; Daniel 2:44; 7:14, 27',
      visual: [
        pasaje('@@ap/11/15-17', 'Apocalipsis 11:15-17'),
        img(IMG + 'apo-arca-cielo.webp', 'El templo celestial abierto, lleno de una luz dorada, deja ver en su interior el arca del pacto entre relámpagos y nubes de tormenta', '«El templo de Dios fue abierto en el cielo, y el arca de su pacto se veía en el templo» (Ap 11:19).')
      ],
      texto: [
        'Con la séptima trompeta, el tercer ay, el libro llega a un punto culminante. Aunque las copas todavía no se han derramado, el cielo celebra el resultado final como si ya se hubiera cumplido.',
        { h: 'El reino de nuestro Señor (11:15)' },
        'Hay grandes voces en el cielo que dicen: «Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo; y él reinará por los siglos de los siglos» (Ap 11:15). Es el cumplimiento de Daniel: la piedra cortada no con mano destruye la estatua de los imperios y llena toda la tierra (Dn 2:44), y el Hijo del Hombre recibe un dominio eterno (Dn 7:14). Lo que la séptima trompeta anuncia se desarrolla en los capítulos que siguen, hasta la venida de Cristo y su reino.',
        { h: 'La adoración de los ancianos (11:16-18)' },
        'Los veinticuatro ancianos se postran y dan gracias al Señor Dios Todopoderoso, «porque has tomado tu gran poder, y has reinado» (Ap 11:17). Hablan en pasado de algo que todavía no ocurre en la tierra, porque en el plan de Dios ya es seguro. Su cántico resume lo que queda del libro: las naciones se airaron, vino la ira de Dios, llegó el tiempo de juzgar a los muertos, de dar galardón a los siervos de Dios, profetas y santos, pequeños y grandes, y de «destruir a los que destruyen la tierra» (Ap 11:18).',
        { h: 'El arca en el cielo (11:19)' },
        'El capítulo cierra con el templo de Dios abierto en el cielo y el arca de su pacto a la vista, entre relámpagos, voces, truenos, un terremoto y granizo. El arca era la señal de la presencia de Dios en medio de Israel y de su pacto con el pueblo; desapareció en la destrucción de Jerusalén por Babilonia y nunca se recuperó. Que aparezca en el cielo, justo antes de los capítulos que tratan de Israel en la tribulación, es una señal de que Dios no ha olvidado su pacto. El tabernáculo y el templo de la tierra eran copia de las realidades celestiales (He 8:5).',
        'Con esta escena termina la primera gran mitad del libro. Desde el capítulo 12, Juan retrocede para mostrar a los protagonistas del conflicto.'
      ],
      pensar: '«Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo» (Ap 11:15). ¿Cómo cambia tu manera de ver las noticias y los gobiernos de hoy saber que el reino final es de Cristo?'
    },
