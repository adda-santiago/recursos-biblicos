/* Los libros apócrifos y pseudoepígrafos · ruta VI. Los apócrifos del Nuevo Testamento (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, PALABRA } = window.__APO;

  const nt = [
    {
      id: 'que-son-nt', n: 'Evangelios, hechos, cartas y apocalipsis que no son de los apóstoles', ref: '2 Tesalonicenses 2:2; 2 Tesalonicenses 3:17; Lucas 1:1-4; Gálatas 1:8-9', fecha: [120, 600],
      visual: [
        img('nag-hammadi.webp', 'Al pie de un acantilado rocoso en el valle del Nilo, un campesino egipcio de mediana edad, con galabiya y turbante, se arrodilla junto a una gran tinaja de barro rota y saca de ella unos libros antiguos encuadernados en cuero; a su lado, un hombre más joven sostiene una azada', 'El hallazgo de los códices de Nag Hammadi, en Egipto, en 1945. Recreación.'),
        tabla({
          titulo: 'Los apócrifos del Nuevo Testamento',
          cab: ['Tipo', 'Ejemplos', 'Siglos'],
          filas: [
            ['Evangelios de la infancia', 'Protoevangelio de Santiago; Evangelio de la infancia de Tomás', 'II'],
            ['Evangelios gnósticos', 'Evangelio de Tomás, de Judas, de María y de Felipe', 'II–III'],
            ['Hechos', 'Hechos de Pablo (con Tecla), de Pedro, de Juan, de Andrés y de Tomás', 'II–III'],
            ['Cartas', 'Carta a los Laodicenses; 3 Corintios; cartas de Pablo y Séneca', 'II–IV'],
            ['Apocalipsis', 'Apocalipsis de Pedro; Apocalipsis de Pablo', 'II–IV']
          ],
          nota: 'Se llaman «apócrifos del Nuevo Testamento» porque imitan sus géneros, no porque alguna iglesia los tenga en su Biblia.'
        }),
        pasos([
          { t: 'Egipto conservó muchos de estos textos: Oxirrinco (papiros griegos), Ajmim y Nag Hammadi (1945)', fecha: 1945, estado: { view: V.egipto, lugares: ['h-oxirrinco', 'h-akhmim', 'h-nag-hammadi', 'alejandria'] } },
          { t: 'Lyon (hacia 180) y Cesarea (hacia 325): Ireneo y Eusebio los describen y los rechazan', fecha: 325, estado: { view: V.europa, lugares: ['h-lyon', 'cesarea', 'roma', 'alejandria'] } }
        ])
      ],
      texto: [
        'Así como hubo escritos judíos que imitaron los libros del Antiguo Testamento, después de los apóstoles aparecieron escritos cristianos que imitaron los del Nuevo: evangelios, hechos, cartas y apocalipsis, casi siempre con el nombre de un apóstol o de alguien cercano a Jesús. Se escribieron entre el siglo II y el VI. Ninguna iglesia, ni católica, ni ortodoxa, ni evangélica, los tiene en su Biblia.',
        { h: 'Por qué se escribieron' },
        'Unos nacieron de la curiosidad. Los evangelios dicen poco de la niñez de Jesús, de la vida de María o del destino de los apóstoles, y la gente quería saber más. Otros nacieron de la devoción: relatos de milagros y de mártires para animar a los creyentes. Y otros se escribieron para difundir doctrinas distintas de la de los apóstoles, poniéndolas en boca de Jesús o de un apóstol para darles autoridad.',
        'El problema no era nuevo. Pablo advirtió a los tesalonicenses que no se dejaran perturbar «ni por carta como si fuera nuestra» (2 Ts 2:2), y por eso firmaba sus cartas con su propia mano como señal (2 Ts 3:17). Ya en vida de los apóstoles circulaban escritos falsos con su nombre.',
        { h: 'La iglesia no los escondió' },
        'Se suele decir que la iglesia escondió estos libros. Es al revés: la iglesia los conoció, los leyó y explicó públicamente por qué no eran apostólicos. Ireneo, obispo de Lyon, refutó hacia el año 180 los evangelios gnósticos. Eusebio de Cesarea, hacia el 325, clasificó los escritos que circulaban en reconocidos, discutidos, falsos y heréticos. Las preguntas eran sencillas: ¿viene de un apóstol o de alguien cercano a ellos? ¿Concuerda con el evangelio que las iglesias recibieron desde el principio? ¿Lo leían las iglesias de todas partes?',
        { h: 'Los hallazgos de Egipto' },
        'El clima seco de Egipto conservó muchos de estos textos. En Oxirrinco aparecieron miles de papiros griegos, entre ellos fragmentos del Evangelio de Tomás. En Ajmim se halló parte del Evangelio de Pedro y del Apocalipsis de Pedro. Y en 1945, cerca de Nag Hammadi, unos campesinos encontraron en una tinaja trece códices en copto con más de cincuenta escritos, muchos de ellos gnósticos.',
        'La pregunta de por qué estos escritos no entraron en el canon se estudia en La Palabra de Dios. Esta ruta recorre los más conocidos.',
        ir('Ver en La Palabra de Dios: los escritos que quedaron fuera', PALABRA + '#canon/7')
      ],
      pensar: 'Pablo firmaba sus cartas para que nadie fuera engañado por escritos falsos. ¿Cómo te ayuda conocer la Biblia a reconocer enseñanzas que usan el nombre de Jesús sin venir de Él?'
    },
    {
      id: 'infancia', n: 'Los evangelios de la infancia', ref: 'Mateo 1:18-25; Marcos 6:3; Lucas 2:41-52; Juan 2:11; Isaías 1:3', fecha: [150, 650],
      visual: [
        cita('Lucas 2:51-52', '@@lc/2/51-52'),
        tabla({
          titulo: 'Tradiciones que vienen de los evangelios de la infancia',
          cab: ['Tradición', 'De dónde viene', 'Qué dicen los evangelios'],
          filas: [
            ['Los padres de María se llamaban Joaquín y Ana', 'Protoevangelio de Santiago (siglo II)', 'No dan los nombres'],
            ['María vivió en el templo desde los tres años', 'Protoevangelio de Santiago', 'No lo mencionan'],
            ['José era un viudo anciano con hijos de otro matrimonio', 'Protoevangelio de Santiago', 'Hablan de hermanos y hermanas de Jesús (Mr 6:3)'],
            ['Jesús nació en una cueva', 'Protoevangelio de Santiago', 'Mencionan el pesebre (Lc 2:7)'],
            ['El buey y el asno junto al pesebre', 'Evangelio del Pseudo-Mateo (siglo VII), a partir de Isaías 1:3', 'No los mencionan'],
            ['Jesús niño hacía milagros', 'Evangelio de la infancia de Tomás (siglo II)', 'Su primera señal fue en Caná (Jn 2:11)']
          ]
        })
      ],
      texto: [
        'Mateo y Lucas cuentan el nacimiento de Jesús, y Lucas agrega una sola escena de su niñez: Jesús a los doce años en el templo (Lc 2:41-52). Del resto de su infancia y de la vida de María, los evangelios guardan silencio. Ese silencio despertó la imaginación de muchos cristianos.',
        { h: 'El Protoevangelio de Santiago' },
        'Escrito hacia el año 150, se presenta como obra de Jacobo, el hermano del Señor. Cuenta la historia de María desde antes de su nacimiento. Sus padres, Joaquín y Ana, son ricos y no tienen hijos; un ángel les anuncia una hija. A los tres años, María es llevada a vivir al templo, donde la alimenta un ángel. A los doce, los sacerdotes buscan a un viudo que la cuide y eligen a José, un anciano con hijos. Jesús nace en una cueva cerca de Belén, y una partera comprueba que María sigue siendo virgen.',
        'El libro tuvo una influencia enorme. De él vienen los nombres de los padres de María, la fiesta de su presentación en el templo y la imagen de José como un anciano. También apoyó la creencia de que María permaneció virgen toda su vida y de que los hermanos de Jesús eran hijos de José.',
        { posturas: {
          titulo: '¿Quiénes eran los hermanos de Jesús?',
          a: { n: 'Lectura católica y ortodoxa', t: 'Enseñan que María permaneció virgen toda su vida. Los hermanos serían hijos de un matrimonio anterior de José, como dice el Protoevangelio, o primos de Jesús, como propuso Jerónimo.' },
          b: { n: 'Lectura evangélica', t: 'Mateo dice que José no conoció a María «hasta que dio a luz a su hijo primogénito» (Mt 1:25), y los evangelios nombran a cuatro hermanos de Jesús y mencionan hermanas (Mr 6:3). Lo más natural es entender que eran hijos de José y María, nacidos después de Jesús.' },
          c: 'Las dos lecturas confiesan que Jesús nació de una virgen por obra del Espíritu Santo (Mt 1:20; Lc 1:35). La diferencia está en lo que pasó después, y allí el Protoevangelio no tiene la autoridad de la Escritura.'
        } },
        { h: 'El Evangelio de la infancia de Tomás' },
        'Otro escrito del siglo II cuenta los milagros de Jesús niño: da vida a pájaros de barro, alarga una tabla que su padre cortó mal y castiga con la muerte a un niño que lo empuja. Es un Jesús caprichoso, muy distinto del que pinta Lucas: obediente a sus padres y que «crecía en sabiduría y en estatura» (Lc 2:52). Juan dice además que la primera señal de Jesús fue en Caná (Jn 2:11).'
      ],
      pensar: 'Dios no nos contó todo lo que quisiéramos saber, sino lo que necesitamos para creer (Jn 20:31). ¿Te conformas con lo que la Biblia dice o buscas completar sus silencios con otras fuentes?'
    },
    {
      id: 'gnosticos', n: 'Los evangelios gnósticos: Tomás, Judas y María', ref: 'Juan 1:14; 1 Juan 4:1-3; Colosenses 2:8-9; 1 Timoteo 6:20', fecha: [130, 350],
      visual: [
        cita('1 Juan 4:2-3', '@@1jn/4/2-3'),
        tabla({
          titulo: 'Lo que enseñaban los gnósticos y lo que enseña el evangelio',
          cab: ['Gnosticismo', 'El evangelio de los apóstoles'],
          filas: [
            ['La materia y el cuerpo son malos', 'Dios creó todo bueno (Gn 1:31) y el Verbo se hizo carne (Jn 1:14)'],
            ['El Dios del Antiguo Testamento es un dios inferior', 'El Padre de Jesús es el Dios de Abraham, Isaac y Jacob (Hch 3:13)'],
            ['La salvación es un conocimiento secreto para unos pocos', 'La salvación es por la fe en Cristo y se anuncia a todos (Ro 10:12-13)'],
            ['Cristo no tuvo cuerpo real o no sufrió', 'Cristo murió en la cruz y resucitó con su cuerpo (Lc 24:39)']
          ]
        })
      ],
      texto: [
        'En el siglo II se extendió entre algunos grupos cristianos una manera de pensar llamada gnosticismo, de la palabra griega gnosis, «conocimiento». Los gnósticos enseñaban que el mundo material es malo, que el ser humano tiene una chispa divina atrapada en el cuerpo y que se salva por un conocimiento secreto que Jesús habría revelado solo a algunos. Muchos de sus libros se presentan como enseñanzas reservadas de Jesús a un discípulo.',
        { h: 'El Evangelio de Tomás' },
        'Es una colección de 114 dichos atribuidos a Jesús, sin relato de su muerte ni de su resurrección. Algunos dichos se parecen a los de los evangelios; otros son extraños. El último dice que María debe hacerse varón para entrar en el reino. Se escribió en el siglo II; se conocen fragmentos griegos de Oxirrinco y el texto completo en copto de Nag Hammadi.',
        { h: 'El Evangelio de Judas' },
        'Ireneo ya lo mencionaba hacia el 180, pero solo se conoció su texto cuando se publicó en 2006 una copia en copto. Presenta a Judas como el único discípulo que entendió a Jesús, y su traición como un favor: ayudar a Jesús a liberarse de su cuerpo. Es justamente lo contrario del evangelio, en el que la cruz es la entrega voluntaria del Hijo por nuestros pecados.',
        { h: 'El Evangelio de María y el de Felipe' },
        'El Evangelio de María, conservado en fragmentos, presenta a María Magdalena recibiendo revelaciones secretas que los apóstoles no conocían. El de Felipe es una colección de reflexiones gnósticas. Novelas y documentales recientes los usaron para afirmar que Jesús se casó con María Magdalena, algo que esos textos fragmentarios no dicen con claridad y que ninguna fuente antigua confiable sostiene.',
        { h: 'Cómo reconocer otro evangelio' },
        'Juan ya combatía ideas parecidas a fines del siglo I: «todo espíritu que no confiesa que Jesucristo ha venido en carne, no es de Dios» (1 Jn 4:3). Pablo advirtió a Timoteo que evitara «los argumentos de la falsamente llamada ciencia» (1 Ti 6:20), con la palabra gnosis. El evangelio no es un secreto para iniciados: «Aquel Verbo fue hecho carne, y habitó entre nosotros» (Jn 1:14).',
        { ejercicio: {
          pregunta: 'Un documental dice que el Evangelio de Judas revela la verdad oculta sobre Jesús. ¿Qué es lo más exacto?',
          opciones: [
            { t: 'Que es un escrito gnóstico del siglo II, conocido y rechazado por la iglesia antigua, que enseña lo contrario del evangelio.', ok: true, por_que: 'Ireneo lo mencionó hacia el 180; es muy posterior a los testigos de Jesús y presenta la cruz como una liberación del cuerpo.' },
            { t: 'Que es un evangelio tan antiguo como Marcos que la iglesia quiso destruir.', ok: false, por_que: 'Es del siglo II, un siglo después de Marcos, y la iglesia lo conocía y lo refutó públicamente.' },
            { t: 'Que es un invento moderno sin ningún manuscrito antiguo.', ok: false, por_que: 'Existe una copia antigua en copto; lo que se discute es su valor, no su existencia.' }
          ],
          explicacion: 'Responder con datos verdaderos y sin exagerar es la mejor defensa de la fe.'
        } }
      ],
      pensar: 'El evangelio se anuncia abiertamente a todos (Mt 28:19). ¿Desconfías de las enseñanzas que prometen un conocimiento secreto reservado para unos pocos?'
    },
    {
      id: 'hechos-apocrifos', n: 'Los hechos apócrifos: Pablo y Tecla, Pedro y el «Quo vadis»', ref: 'Hechos 1:1-3; Lucas 1:1-4; 1 Timoteo 4:1-3; Hebreos 13:4; Juan 21:18-19; Hechos 8:9-24', fecha: [160, 250],
      visual: [
        cita('1 Timoteo 4:1-3', '@@1ti/4/1-3'),
        tabla({
          titulo: 'Los principales hechos apócrifos',
          cab: ['Libro', 'Qué cuenta', 'Fecha'],
          filas: [
            ['Hechos de Pablo', 'Viajes de Pablo, la historia de Tecla, una supuesta tercera carta a los Corintios y su martirio en Roma', 'Hacia 160–190'],
            ['Hechos de Pedro', 'Pedro vence a Simón el mago en Roma; el «Quo vadis»; Pedro crucificado cabeza abajo', 'Hacia 180–200'],
            ['Hechos de Juan', 'Milagros de Juan en Éfeso; un Jesús que no tiene cuerpo real', 'Siglo II'],
            ['Hechos de Andrés', 'Predicación y martirio de Andrés en Grecia', 'Siglo II–III'],
            ['Hechos de Tomás', 'Tomás predica en la India', 'Siglo III']
          ]
        })
      ],
      texto: [
        'Lucas escribió el libro de los Hechos después de investigar con diligencia, para que Teófilo conociera «bien la verdad» (Lc 1:3-4). Su relato termina con Pablo preso en Roma, predicando con libertad. ¿Qué pasó después con los apóstoles? En los siglos II y III aparecieron varios libros que respondían esa pregunta con relatos llenos de milagros, viajes y martirios.',
        { h: 'Pablo y Tecla' },
        'Los Hechos de Pablo cuentan cómo una joven de Iconio llamada Tecla escucha a Pablo predicar sobre la pureza, rompe su compromiso de matrimonio y lo sigue. Es condenada a la hoguera y a las fieras, y se salva milagrosamente. El libro incluye una descripción física de Pablo: bajo, calvo, de piernas arqueadas, con cejas juntas y nariz algo grande. Tertuliano, hacia el 200, cuenta que un presbítero de Asia lo escribió por amor a Pablo y fue destituido por haberlo inventado.',
        { h: 'Pedro y el «Quo vadis»' },
        'Los Hechos de Pedro cuentan un duelo en Roma entre Pedro y Simón el mago, el de Hechos 8, que intenta volar y cae. Cuando Pedro huye de la persecución, se encuentra con Jesús en el camino y le pregunta: Señor, ¿adónde vas? Jesús responde que va a Roma a ser crucificado otra vez. Pedro entiende, vuelve y muere crucificado cabeza abajo. La escena es hermosa, pero no es histórica. Lo que la Biblia dice es que Jesús anunció a Pedro con qué muerte glorificaría a Dios (Jn 21:18-19).',
        { h: 'Un mensaje contra el matrimonio' },
        'Muchos de estos libros presentan la vida cristiana perfecta como renuncia al matrimonio. En ellos, los apóstoles convencen a esposas de dejar a sus maridos y a novias de romper sus compromisos. Pablo advirtió que vendrían quienes prohibirían casarse (1 Ti 4:3), y Hebreos enseña: «Honroso sea en todos el matrimonio» (He 13:4).',
        'Algunas tradiciones de estos libros pudieron conservar recuerdos verdaderos, como que Pedro y Pablo murieron en Roma, cosa que también afirman Clemente de Roma y otros autores antiguos. Pero los relatos, en conjunto, son novelas devotas, muy distintas de la sobriedad de Lucas.'
      ],
      pensar: 'Lucas escribió para que conozcamos «bien la verdad» (Lc 1:4). ¿Prefieres los relatos llamativos sobre la fe o la verdad sencilla que Dios dejó escrita?'
    },
    {
      id: 'cartas-falsas', n: 'Cartas con el nombre de Pablo', ref: 'Colosenses 4:16; 2 Tesalonicenses 2:2; 2 Tesalonicenses 3:17; Gálatas 6:11', fecha: [150, 400],
      visual: [
        cita('Colosenses 4:16', '@@col/4/16'),
        tabla({
          titulo: 'Tres cartas atribuidas a Pablo',
          cab: ['Carta', 'Qué contiene', 'Origen probable'],
          filas: [
            ['A los Laodicenses', 'Veinte versículos en latín armados con frases de Filipenses y Gálatas', 'Siglos II–IV; aparece en muchas Biblias latinas medievales'],
            ['3 Corintios', 'Respuesta de Pablo contra quienes niegan la resurrección del cuerpo', 'Siglo II, dentro de los Hechos de Pablo'],
            ['Correspondencia con Séneca', 'Catorce cartas breves entre Pablo y el filósofo romano', 'Siglo IV']
          ]
        })
      ],
      texto: [
        'Pablo escribió cartas que no se conservaron. Pidió a los colosenses que leyeran también «la de Laodicea» (Col 4:16), y en 1 Corintios 5:9 menciona una carta anterior. Con el tiempo, algunos intentaron llenar esos vacíos.',
        { h: 'La Carta a los Laodicenses' },
        'Es un texto breve, en latín, hecho con frases tomadas de Filipenses y Gálatas, sin ninguna enseñanza propia. Su único fin parece haber sido que existiera la carta de Laodicea. Aun así, se copió en muchas Biblias latinas de la Edad Media, y aparece en algunas de las primeras Biblias impresas en lenguas europeas. La iglesia antigua ya la había rechazado: el fragmento de Muratori, de fines del siglo II, menciona una carta a los laodicenses falsificada.',
        'La carta de Laodicea que pide Colosenses 4:16 probablemente se perdió, o era una carta que circulaba entre varias iglesias, como Efesios. Dios no consideró necesario conservarla para nosotros.',
        { h: '3 Corintios' },
        'Dentro de los Hechos de Pablo hay un intercambio de cartas entre los corintios y Pablo sobre la resurrección del cuerpo. La iglesia armenia la tuvo durante siglos en su Biblia. Defiende una verdad bíblica, pero lo que Pablo enseñó realmente sobre la resurrección ya está en 1 Corintios 15.',
        { h: 'Pablo y Séneca' },
        'En el siglo IV circularon catorce cartas breves entre Pablo y Séneca, el filósofo maestro de Nerón. Jerónimo y Agustín las conocieron. Su estilo latino y sus errores muestran que son una invención, quizá para mostrar que el cristianismo podía estar a la altura de los grandes pensadores romanos.',
        { h: 'La firma de Pablo' },
        'Pablo sabía que podían circular cartas falsas con su nombre. Por eso cerraba sus cartas de su puño y letra: «La salutación es de mi propia mano, de Pablo, que es el signo en toda carta mía» (2 Ts 3:17; Gá 6:11). Las iglesias del siglo II, que guardaron y copiaron sus cartas verdaderas, supieron distinguirlas.',
        { ejercicio: {
          pregunta: 'Colosenses 4:16 menciona una carta «de Laodicea». ¿Qué se puede decir de ella?',
          opciones: [
            { t: 'Es la Carta a los Laodicenses que trae la Biblia latina medieval.', ok: false, por_que: 'Esa carta es una composición tardía armada con frases de Filipenses y Gálatas; la iglesia antigua ya la rechazaba.' },
            { t: 'No se conservó, o era una carta que circulaba entre varias iglesias, quizá Efesios.', ok: true, por_que: 'Son las dos explicaciones más probables. Dios conservó lo que la iglesia necesita.' },
            { t: 'Es la primera carta a los Corintios.', ok: false, por_que: 'Corinto está en Grecia, lejos de Laodicea, en Asia.' }
          ],
          explicacion: 'Que una carta se haya perdido no significa que haya que inventarla.'
        } }
      ],
      pensar: 'Pablo cuidaba que nadie usara su nombre para enseñar otra cosa. ¿Con qué cuidado repites tú lo que dices que «dice la Biblia»?'
    },
    {
      id: 'apocalipsis-pedro-pablo', n: 'Los apocalipsis de Pedro y de Pablo', ref: '2 Corintios 12:1-4; Lucas 16:19-31; Hebreos 9:27; Apocalipsis 22:18-19', fecha: [130, 400],
      visual: [
        cita('2 Corintios 12:2-4', '@@2co/12/2-4'),
        mapa({ view: V.mediterraneo, lugares: ['tarso', 'roma', 'h-akhmim', 'alejandria'] }),
        tabla({
          titulo: 'Dos visiones del más allá',
          cab: ['', 'Apocalipsis de Pedro', 'Apocalipsis de Pablo'],
          filas: [
            ['Fecha', 'Hacia 135', 'Siglos III–IV (dice haber sido hallado en 388)'],
            ['Contenido', 'Jesús muestra a Pedro los castigos del infierno, uno por cada pecado, y la gloria de los justos', 'Pablo visita el cielo y el infierno, guiado por un ángel'],
            ['Cómo se conserva', 'Completo en etíope; un fragmento griego de Ajmim', 'En latín, griego y otras lenguas'],
            ['Qué dijo la iglesia antigua', 'Algunos lo leían; el fragmento de Muratori dice que otros no lo admitían', 'Agustín se burló de él; un decreto del siglo VI lo rechaza'],
            ['Influencia', 'Las imágenes medievales del infierno', 'El infierno de Dante y la idea de un descanso para los condenados']
          ]
        })
      ],
      texto: [
        'Pablo contó que fue arrebatado al tercer cielo, al paraíso, y que allí «oyó palabras inefables que no le es dado al hombre expresar» (2 Co 12:4). No describió lo que vio. Justamente lo que Pablo calló es lo que otros quisieron contar.',
        { h: 'El Apocalipsis de Pedro' },
        'Escrito hacia el año 135, presenta a Jesús mostrando a Pedro el destino de los muertos. Describe castigos que corresponden a cada pecado: los blasfemos colgados de la lengua, los asesinos arrojados a un lugar lleno de serpientes, y así para muchos pecados. Fue bastante leído en el siglo II; el fragmento de Muratori dice que algunos lo aceptaban y otros no permitían leerlo en la iglesia. Con el tiempo quedó fuera, pero sus imágenes alimentaron durante siglos la manera de imaginar el infierno.',
        { h: 'El Apocalipsis de Pablo' },
        'Su prólogo dice que se encontró en el año 388, en tiempos del emperador Teodosio, en una caja de mármol enterrada bajo la casa de Pablo en Tarso. Es la forma típica de dar autoridad a un libro nuevo. Un ángel guía a Pablo: ve salir las almas de justos e injustos al morir, recorre el paraíso y desciende a los lugares de castigo. Al final, por los ruegos de Pablo y del arcángel Miguel, Cristo concede a los condenados un día de descanso cada domingo.',
        'El libro fue muy popular en la Edad Media, en muchas lenguas. Dante lo conocía cuando escribió su viaje por el infierno. Pero Agustín, ya a comienzos del siglo V, se burló de él: si Pablo dijo que no le era dado expresar lo que oyó, ¿cómo iba a contarlo un libro descubierto siglos después?',
        { h: 'Lo que la Biblia sí dice' },
        'La Escritura enseña con seriedad que hay un juicio después de la muerte (He 9:27) y que el destino eterno se decide en esta vida: entre el rico y Lázaro había «una gran sima» que nadie podía cruzar (Lc 16:26). No promete descansos para los condenados ni da mapas detallados del más allá. Apocalipsis termina advirtiendo que nadie añada a sus palabras (Ap 22:18). Lo que necesitamos saber está escrito: «el que cree en el Hijo tiene vida eterna» (Jn 3:36).'
      ],
      pensar: 'Pablo vio el paraíso y guardó silencio sobre lo que oyó. ¿Te basta lo que Dios reveló sobre la vida eterna, o buscas en visiones y relatos lo que la Biblia no dice?'
    }
  ];

  window.__APO.nt = nt;
})();
