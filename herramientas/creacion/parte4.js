(() => {
  const MESOP = [[28.6, 37.5], [40.6, 50.5]];        // Mesopotamia y Armenia
  const NACIONES = [[12, 18], [46, 58]];             // el mundo de Génesis 10
  const HECHOS2 = [[22, 10], [44, 60]];              // las naciones de Hechos 2

  /* ---------------- VI. El diluvio ----------------
     Decisión del responsable: el diluvio universal como lectura natural del texto; el diluvio
     local, como postura. */
  const diluvio = [
    {
      id: 'arca', n: 'Hazte un arca', ref: 'Génesis 6:13-22; Hebreos 11:7; 1 Pedro 3:20',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-arca-construccion.webp', alt: 'Noé, anciano de barba blanca, de pie junto al enorme casco de madera del arca en construcción, en una llanura; a lo lejos, trabajadores anónimos suben vigas por andamios y el cielo está despejado', pie: '«Y lo hizo así Noé; hizo conforme a todo lo que Dios le mandó» (Génesis 6:22).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: '../medidas-biblicas/img/esquema-arca.svg', alt: 'Siluetas a la misma escala: el arca de Noé de 133 metros de largo, el templo de Salomón de 27 metros, el tabernáculo de 13 metros, una cancha de fútbol de 105 metros y una persona', pie: 'El arca, dibujada a la misma escala que el templo, el tabernáculo y una cancha de fútbol (codo de 44,5 cm).', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El arca en medidas actuales',
          cab: ['Dato', 'En la Biblia', 'Hoy'],
          filas: [
            ['Largo', '300 codos', 'unos 133,5 m (con el codo largo, unos 156 m)'],
            ['Ancho', '50 codos', 'unos 22 m'],
            ['Alto', '30 codos', 'unos 13 m, como un edificio de cuatro pisos'],
            ['Pisos', 'Tres (Gn 6:16)', 'Superficie total cercana a 9.000 m²'],
            ['Volumen', '—', 'Cerca de 40.000 m³'],
            ['Material', 'Madera de gofer, calafateada con brea', 'Madera resinosa, quizá ciprés; impermeabilizada'],
          ],
          nota: 'Equivalencias del sitio: codo común de 44,5 cm, codo largo de 52 cm.'
        } }
      ],
      texto: [
        'Dios anuncia a Noé el juicio y, en la misma frase, le da el medio de salvación: «Hazte un arca de madera de gofer» (Gn 6:14). El juicio y la gracia llegan juntos. Dios no solo advierte: provee una salida.',
        { h: 'Un barco sin timón' },
        'La palabra hebrea para arca, tevá, se usa solo otra vez en la Biblia: para la canasta de juncos donde fue puesto Moisés niño en el Nilo (Éx 2:3). En los dos casos, una pequeña caja calafateada con brea flota sobre las aguas de la muerte y lleva dentro la esperanza del pueblo de Dios. El arca no tenía velas ni timón: no necesitaba ir a ninguna parte, sino mantenerse a flote. Su rumbo estaba en manos de Dios.',
        { h: 'Las medidas' },
        'Dios da medidas precisas: trescientos codos de largo, cincuenta de ancho y treinta de alto (Gn 6:15). La tabla las convierte con las equivalencias del sitio: unos 133 metros de largo, 22 de ancho y 13 de alto, con tres pisos. Es más larga que una cancha de fútbol. Las proporciones, seis veces más larga que ancha, son parecidas a las de muchos barcos de carga modernos, y le daban estabilidad frente al oleaje. Su volumen, cercano a 40.000 metros cúbicos, equivale a varios cientos de vagones de tren.',
        { h: 'Por la fe' },
        'Hebreos dice que Noé, «cuando fue advertido por Dios acerca de cosas que aún no se veían, con temor preparó el arca en que su casa se salvase» (He 11:7). Noé construyó un barco enorme en tierra seca, por una lluvia que nadie había visto, durante muchos años. Su obediencia fue su predicación: cada viga clavada anunciaba que el juicio vendría. Pedro dice que Dios esperaba con paciencia «mientras se preparaba el arca» (1 P 3:20). Mientras hubo arca en construcción, hubo tiempo para arrepentirse.',
        'El relato insiste: «Y lo hizo así Noé; hizo conforme a todo lo que Dios le mandó» (Gn 6:22). Noé no discutió las medidas ni el material. La fe verdadera se muestra en una obediencia detallada.',
        { ir: { t: 'Ver «El arca, el tabernáculo y el templo en metros» en Pesos, medidas, monedas y horas bíblicas', a: '../../medidas-biblicas/#longitud/3' } }
      ],
      pensar: 'Noé obedeció durante años sin ver la lluvia. ¿Qué te ha pedido Dios que haces sin ver todavía el resultado? ¿Qué te ayuda a perseverar?'
    },
    {
      id: 'entrar', n: 'Y Jehová le cerró la puerta', ref: 'Génesis 7:1-16; Juan 10:9; Mateo 25:10; 2 Pedro 3:9',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/7/1-5', ref: 'Génesis 7:1-5' },
        { tipo: 'cita', titulo: 'Génesis 7:13-16', texto: '@@gn/7/13-16', ref: 'Génesis 7:13-16' }
      ],
      texto: [
        'Cuando el arca estuvo terminada, Dios dijo a Noé: «Entra tú y toda tu casa en el arca; porque a ti he visto justo delante de mí en esta generación» (Gn 7:1). La invitación es personal y familiar. Noé no se salvó solo: entraron con él su esposa, sus tres hijos y sus nueras, ocho personas en total (1 P 3:20).',
        { h: 'De dos en dos, y de siete en siete' },
        'Génesis 6:19 dice que entrarían dos de cada especie, macho y hembra. Génesis 7:2 precisa que de los animales limpios entrarían siete parejas, y de los no limpios, una. No es una contradicción: la primera instrucción es general y la segunda la detalla. Los animales limpios eran necesarios para los sacrificios que Noé ofrecería al salir (Gn 8:20) y para el alimento posterior. La distinción entre limpios e inmundos ya era conocida antes de la ley de Moisés.',
        '¿Cabían todos los animales? Quienes estudian el tema observan que Noé no necesitaba llevar todas las especies actuales, sino representantes de cada «especie» o clase (Gn 6:20), que después se diversificaron. Tampoco tenía que llevar peces ni animales marinos. Muchos animales pudieron entrar jóvenes, más pequeños y fáciles de alimentar. Con cerca de 40.000 metros cúbicos, el arca tenía espacio suficiente. Y el texto dice que los animales «vinieron» a Noé (Gn 7:9, 15): Dios mismo los trajo.',
        { h: 'Siete días de espera' },
        'Dios anunció: «pasados aún siete días, yo haré llover sobre la tierra» (Gn 7:4). Aun después de que el arca estuvo terminada, Dios dio una semana más. Pedro explica que el Señor «es paciente para con nosotros, no queriendo que ninguno perezca» (2 P 3:9). La paciencia de Dios tiene un propósito: dar tiempo para que todos entren.',
        { h: 'La puerta cerrada' },
        'El versículo 16 termina con una frase breve y solemne: «y Jehová le cerró la puerta». No la cerró Noé, sino Dios. Fue un acto de protección para los de adentro y de juicio para los de afuera. Había una sola puerta (Gn 6:16), como hay un solo camino de salvación. Jesús dijo: «Yo soy la puerta; el que por mí entrare, será salvo» (Jn 10:9). Y en la parábola de las diez vírgenes, cuando llegó el esposo, «se cerró la puerta» (Mt 25:10). Hay un día en que la invitación termina.',
        { ejercicio: {
          pregunta: '¿Por qué Génesis 7:2 habla de siete parejas de animales limpios, si Génesis 6:19 decía dos de cada especie?',
          opciones: [
            { t: 'Porque 6:19 da la instrucción general y 7:2 la precisa: hacían falta más animales limpios para los sacrificios y el alimento.', ok: true, por_que: 'Correcto: es una precisión, no una contradicción. Noé ofreció animales limpios al salir del arca (Gn 8:20).' },
            { t: 'Porque son dos relatos distintos que se contradicen.', ok: false, por_que: 'El segundo detalla al primero. La misma manera de escribir se ve en muchos relatos bíblicos: primero el resumen, luego el detalle.' },
            { t: 'Porque Noé desobedeció y llevó más animales de los que Dios dijo.', ok: false, por_que: 'El texto dice que Noé hizo todo conforme a lo que Dios le mandó (Gn 7:5).' }
          ],
          explicacion: 'Leer con atención resuelve muchas aparentes contradicciones: el texto pasa de lo general a lo particular.'
        } }
      ],
      pensar: 'Dios cerró la puerta del arca. Hoy la puerta de la salvación sigue abierta. ¿Hay alguien de tu casa o de tu entorno a quien necesitas invitar a entrar mientras hay tiempo?'
    },
    {
      id: 'aguas-diluvio', n: 'Las aguas sobre la tierra', ref: 'Génesis 7:11-24; 8:1-14; Salmos 29:10',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-diluvio.webp', alt: 'El arca de madera, pequeña frente a un océano gris sin orillas, avanza entre olas altas bajo una lluvia torrencial y un cielo oscuro; no se ve tierra ni montañas', pie: '«Y subieron las aguas y crecieron en gran manera sobre la tierra; y flotaba el arca sobre la superficie de las aguas» (Génesis 7:18).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cronologia-diluvio.svg', alt: 'Línea de tiempo del año del diluvio: 17 del mes 2 comienza la lluvia; 40 días de lluvia; las aguas prevalecen 150 días; 17 del mes 7 el arca reposa en Ararat; 1 del mes 10 se ven las cimas; 40 días después el cuervo y la paloma; 1 del mes 1 del año siguiente la superficie está seca; 27 del mes 2 la tierra está seca y salen del arca', pie: 'El año del diluvio según las fechas de Génesis 7 y 8: Noé estuvo en el arca un año y diez días.', origen: 'esquema' }
      ],
      texto: [
        'Génesis cuenta el diluvio como un diario de navegación, con fechas precisas: «El año seiscientos de la vida de Noé, en el mes segundo, a los diecisiete días del mes, aquel día fueron rotas todas las fuentes del grande abismo, y las cataratas de los cielos fueron abiertas» (Gn 7:11). El narrador quiere que el lector sepa que esto ocurrió en un día concreto de la historia.',
        { h: 'Las aguas de abajo y de arriba' },
        'El diluvio no fue solo una lluvia muy fuerte. Las aguas vinieron de dos lados: de abajo, las «fuentes del grande abismo», y de arriba, las «cataratas de los cielos». Es como si Dios deshiciera la separación de las aguas que había hecho en el segundo y el tercer día de la creación (Gn 1:6-10). La tierra vuelve a quedar cubierta por el abismo, como al principio. El diluvio es una des-creación, y lo que viene después será una nueva creación.',
        { h: 'Un año en el arca' },
        'El esquema reúne las fechas del relato. Llovió cuarenta días y cuarenta noches. Las aguas prevalecieron sobre la tierra ciento cincuenta días. El arca reposó sobre los montes de Ararat en el mes séptimo. En el mes décimo se vieron las cimas de los montes. Noé esperó, envió un cuervo y luego una paloma tres veces. Recién el día veintisiete del mes segundo del año siguiente la tierra estuvo seca, y Dios mandó salir. En total, Noé y su familia estuvieron en el arca un año y diez días.',
        'El texto dice que «todos los montes altos que había debajo de todos los cielos, fueron cubiertos» (Gn 7:19), y que las aguas subieron quince codos, unos siete metros, por encima de ellos. Murió «toda carne que se mueve sobre la tierra» (Gn 7:21), y «quedó solamente Noé, y los que con él estaban en el arca» (Gn 7:23).',
        { h: 'Dios se acordó de Noé' },
        'En el centro del relato está la frase: «Y se acordó Dios de Noé» (Gn 8:1). En la Biblia, que Dios se acuerde no significa que lo hubiera olvidado, sino que actúa a favor de alguien según su promesa. Dios hizo pasar un viento sobre la tierra, como el Espíritu que se movía sobre las aguas en Génesis 1:2, y las aguas comenzaron a bajar. Lo que el diluvio deshizo, Dios lo vuelve a ordenar.',
        'El Salmo 29 canta: «Jehová preside en el diluvio, Y se sienta Jehová como rey para siempre» (Sal 29:10). Aun en el peor juicio de la historia, Dios no perdió el control.'
      ],
      pensar: 'Noé pasó un año encerrado sin ver la tierra, pero «se acordó Dios de Noé». ¿En qué situación larga de tu vida necesitas recordar que Dios no se ha olvidado de ti?'
    },
    {
      id: 'universal', n: '¿Un diluvio universal o local?', ref: 'Génesis 7:19-23; 9:11-15; 2 Pedro 3:5-7; Mateo 24:39',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Universal o local: las dos lecturas',
          cab: ['Punto', 'Diluvio universal', 'Diluvio local'],
          filas: [
            ['Extensión', 'Cubrió toda la tierra', 'Cubrió la región habitada por los seres humanos (Mesopotamia)'],
            ['«Todos los montes altos»', 'Literalmente, todos los montes del planeta', 'Todos los montes que Noé podía ver en el horizonte'],
            ['Quiénes murieron', 'Toda la humanidad, salvo ocho', 'Toda la humanidad, salvo ocho (en las versiones más extendidas)'],
            ['Las capas de roca y los fósiles', 'En gran parte, efecto del diluvio', 'Formados a lo largo de largas edades'],
            ['Quiénes la sostienen', 'Respuestas en Génesis y la mayoría de los creyentes en la historia', 'Reasons to Believe y otros intérpretes de tierra antigua'],
          ],
          nota: 'Las dos lecturas creen que el diluvio ocurrió y que fue un juicio de Dios sobre la humanidad.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2p/3/5-7', ref: '2 Pedro 3:5-7' }
      ],
      texto: [
        'Todos los que creen la Biblia aceptan que el diluvio ocurrió de verdad. La pregunta que divide a los intérpretes es otra: ¿cubrió el agua todo el planeta, o una región muy extensa donde vivía la humanidad? Este recurso presenta el diluvio universal como la lectura más natural del texto, y el diluvio local como una postura que sostienen otros creyentes.',
        { h: 'Lo que dice el texto' },
        'El lenguaje de Génesis 7 es amplio e insistente: las aguas cubrieron «todos los montes altos que había debajo de todos los cielos» (Gn 7:19), murió «toda carne que se mueve sobre la tierra» (Gn 7:21), y fue destruido «todo ser que vivía sobre la faz de la tierra» (Gn 7:23). Las aguas tardaron meses en bajar y el arca se posó en las montañas de Ararat, a gran altura. Dios prometió después que no habría «más diluvio para destruir la tierra» (Gn 9:11); si el diluvio hubiera sido local, la promesa se habría quebrado muchas veces, porque ha habido muchas inundaciones regionales.',
        'El Nuevo Testamento usa el diluvio como modelo del juicio final, que alcanzará a todos. Jesús dice que vino el diluvio «y se los llevó a todos» (Mt 24:39), y Pedro compara «el mundo de entonces», que pereció anegado en agua, con los cielos y la tierra de ahora, guardados para el fuego (2 P 3:6-7). Un juicio universal futuro tiene como figura un juicio universal pasado.',
        { posturas: {
          titulo: '¿Cubrió el diluvio todo el planeta?',
          a: { n: 'Sí: un diluvio universal', t: 'Es la lectura natural de las expresiones «todos los montes altos… debajo de todos los cielos» y «toda carne». Si fuera local, no habría hecho falta un arca: Noé y los animales podrían haber migrado. La promesa de Génesis 9 y la comparación de 2 Pedro 3 suponen un juicio que alcanzó a todo el mundo. Esta ha sido la lectura de la gran mayoría de los creyentes en la historia.' },
          b: { n: 'Un diluvio local, pero universal para la humanidad', t: 'Otros intérpretes señalan que en la Biblia «toda la tierra» a veces se refiere a la región conocida: «toda la tierra» fue a Egipto a comprar grano (Gn 41:57), y en Pentecostés había judíos «de todas las naciones bajo el cielo» (Hch 2:5). Proponen que el diluvio cubrió la región donde vivía la humanidad, en Mesopotamia, y destruyó a todos los seres humanos salvo a Noé y su familia. La geología, dicen, no muestra una inundación global reciente.' },
          c: 'Las dos posturas aceptan la historicidad del diluvio, el juicio de Dios sobre toda la humanidad pecadora y la salvación de Noé por gracia. La diferencia está en la extensión geográfica de las aguas. El recurso sigue la lectura universal, por ser la más natural del texto, y respeta a quienes, por fidelidad a la Escritura, entienden la otra.'
        } }
      ],
      pensar: 'Pedro dice que el mundo de entonces pereció en agua y que el de ahora está guardado para el fuego. ¿Vives con la conciencia de que habrá un juicio, y de que hay un arca, Cristo, para escapar de él?'
    },
    {
      id: 'relatos-diluvio', n: 'El diluvio en los relatos de otros pueblos', ref: 'Génesis 6–9; Hebreos 11:7',
      visual: [
        { tipo: 'imagen', titulo: 'Foto', src: 'img/tablilla-diluvio.jpg', alt: 'Tablilla de arcilla con escritura cuneiforme, rota en la esquina superior derecha: la tablilla XI de la Epopeya de Gilgamesh, que cuenta el diluvio de Utnapishtim', pie: 'La «tablilla del diluvio» de la Epopeya de Gilgamesh (tablilla XI, siglo VII a.C.), de la biblioteca de Asurbanipal en Nínive. George Smith la tradujo en 1872.', origen: 'foto', licencia: 'Foto: BabelStone, CC0, vía Wikimedia Commons. Museo Británico, K.3375', completa: true },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Génesis y los relatos de Mesopotamia',
          cab: ['Tema', 'Gilgamesh (tablilla XI) y Atrahasis', 'Génesis 6–9'],
          filas: [
            ['Por qué viene el diluvio', 'En Atrahasis, el ruido de los hombres no deja dormir a los dioses; Gilgamesh no da un motivo moral', 'La maldad y la violencia de la humanidad'],
            ['Quién avisa', 'El dios Ea, en secreto, contra la decisión de los demás', 'Dios mismo, que juzga y salva'],
            ['El héroe', 'Utnapishtim, que recibe la inmortalidad', 'Noé, justo por gracia, que muere a los 950 años'],
            ['La barca', 'Un cubo de 120 codos por lado: no flotaría estable', 'Un arca alargada de 300 × 50 × 30 codos'],
            ['Las aves', 'Una paloma, una golondrina y un cuervo', 'Un cuervo y una paloma tres veces'],
            ['El sacrificio', 'Los dioses, hambrientos, se juntan «como moscas»', 'Dios percibe olor grato y hace un pacto'],
          ],
          nota: 'Las semejanzas muestran un recuerdo común; las diferencias muestran dos maneras de ver a Dios.'
        } }
      ],
      texto: [
        'En 1872, un joven empleado del Museo Británico, George Smith, traducía unas tablillas de arcilla encontradas en las ruinas de Nínive, en la biblioteca del rey asirio Asurbanipal. Al leer una de ellas, se dio cuenta de que contaba un diluvio, con una barca, un héroe salvado y aves enviadas para ver si la tierra estaba seca. Era la tablilla XI de la Epopeya de Gilgamesh. El hallazgo causó sensación en todo el mundo.',
        { h: 'Un recuerdo en muchos pueblos' },
        'Desde entonces se han conocido otros relatos mesopotámicos del diluvio: el de Ziusudra, en sumerio, y la Epopeya de Atrahasis, en acadio. Además, pueblos de casi todos los continentes, desde Grecia hasta los pueblos originarios de América, conservan historias de una gran inundación de la que se salvaron pocas personas. Muchos creyentes ven en esa coincidencia el eco de un hecho real, recordado por los descendientes de Noé cuando se dispersaron por la tierra.',
        { h: 'Las semejanzas' },
        'La tabla compara Génesis con Gilgamesh. Las semejanzas son claras: un diluvio enviado como castigo, un hombre avisado que construye una barca, animales a bordo, la barca que se posa en una montaña, aves enviadas para explorar y un sacrificio al salir. Algunos estudiosos concluyeron que Génesis había copiado el relato babilonio.',
        { h: 'Las diferencias' },
        'Pero las diferencias son más profundas que las semejanzas. En Atrahasis, los dioses envían el diluvio porque los seres humanos hacen demasiado ruido y no los dejan dormir, y Gilgamesh no da ningún motivo moral; uno de los dioses traiciona a los demás para avisar al héroe; durante la tormenta, los dioses se asustan y lloran; y al final, hambrientos porque nadie les ofrecía sacrificios, se juntan alrededor de la ofrenda. La barca de Utnapishtim era un cubo que habría girado sin control. En Génesis, el diluvio es un juicio moral de un Dios santo; el mismo Dios que juzga es el que salva; no hay pánico en el cielo, y el relato termina con un pacto de gracia para toda la tierra.',
        'Las semejanzas se explican bien si los dos relatos recuerdan un mismo hecho. Las diferencias muestran por qué Génesis no es un mito más: presenta al Dios verdadero, justo y misericordioso, mientras los otros relatos reflejan dioses caprichosos hechos a imagen del hombre.',
        { ir: { t: 'Ver «La evidencia arqueológica» en El imperio babilónico', a: '../../imperio-babilonico/#biblia/7' } }
      ],
      pensar: 'Los dioses de Gilgamesh castigaron al ser humano porque les molestaba. El Dios de Génesis juzgó el pecado, pero salvó y prometió. ¿Cómo cambia tu oración saber que Dios no es caprichoso, sino justo y lleno de gracia?'
    },
    {
      id: 'ararat', n: 'Sobre los montes de Ararat', ref: 'Génesis 8:1-19; 2 Reyes 19:37; Jeremías 51:27',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-paloma.webp', alt: 'Una paloma blanca vuela al atardecer hacia la ventana abierta del arca, con una hoja de olivo en el pico; la mano de un anciano se extiende desde la ventana para recibirla; abajo, las cimas de las montañas asoman sobre el agua', pie: '«Y la paloma volvió a él a la hora de la tarde; y he aquí que traía una hoja de olivo en el pico» (Génesis 8:11).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[30, 33], [42, 50]], capas: [], lugares: ['monte-ararat', 'r-urartu', 'ninive', 'haran', 'babilonia'] } }
      ],
      texto: [
        '«Y reposó el arca en el mes séptimo, a los diecisiete días del mes, sobre los montes de Ararat» (Gn 8:4). Fíjate en el plural: el texto no habla de una cumbre, sino de «los montes de Ararat», una región montañosa.',
        { h: 'La tierra de Ararat' },
        'Ararat es el nombre hebreo de la región que los asirios llamaban Urartu, un reino que existió entre los siglos IX y VI a.C. en las montañas de Armenia, entre el lago Van y el monte que hoy lleva ese nombre, en el extremo oriental de Turquía. La Biblia vuelve a mencionarla cuando los hijos del rey asirio Senaquerib, después de asesinarlo, huyeron «a tierra de Ararat» (2 R 19:37). El mapa muestra la región. El monte Ararat actual, de 5.137 metros, es el más alto de la zona, pero el texto no dice en qué cumbre se posó el arca.',
        { h: 'El cuervo y la paloma' },
        'Pasados cuarenta días desde que aparecieron las cimas, Noé abrió la ventana y envió un cuervo, que iba y volvía. Luego envió una paloma, que no encontró dónde posarse y regresó: «Entonces él extendió su mano, y tomándola, la hizo entrar consigo en el arca» (Gn 8:9). Siete días después, la paloma volvió por la tarde con una hoja de olivo en el pico: la vida había comenzado de nuevo. La tercera vez, no volvió. La paloma con la rama de olivo se convirtió, en muchas culturas, en un símbolo de paz.',
        { h: 'Esperar la orden de Dios' },
        'Noé vio la tierra seca el primer día del primer mes, pero no salió. Esperó casi dos meses más, hasta que Dios le habló: «Sal del arca tú, y tu mujer, y tus hijos» (Gn 8:16). Entró por orden de Dios y salió por orden de Dios. Es un ejemplo de paciencia y obediencia: no basta con ver que las condiciones parecen buenas; hay que esperar la palabra del Señor.',
        { h: '¿Se ha encontrado el arca?' },
        'Desde la Antigüedad se ha dicho que restos del arca se conservaban en las montañas de Armenia. En los siglos XX y XXI, varias expediciones han buscado el arca en el monte Ararat y en sus alrededores, y algunos han anunciado hallazgos que no se han confirmado. Hasta hoy no hay ninguna prueba aceptada de que se hayan encontrado sus restos. La fe en el relato no depende de esos hallazgos: depende de la Palabra de Dios.'
      ],
      pensar: 'Noé vio la tierra seca, pero esperó a que Dios le dijera «Sal». ¿Hay alguna decisión en la que te estás adelantando a Dios porque las circunstancias parecen favorables?'
    },
    {
      id: 'pacto-noe', n: 'El pacto con Noé y el arco iris', ref: 'Génesis 8:20–9:17; Isaías 54:9-10; 1 Pedro 3:20-21; Apocalipsis 4:3',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../pactos-y-dispensaciones/img/noe-arco.webp', alt: 'Noé, anciano, de pie junto a un altar de piedras humeante en la ladera de una montaña, levanta la vista hacia un arco iris; su familia y algunos animales lo rodean, y el arca de madera se ve más abajo', pie: '«Mi arco he puesto en las nubes, el cual será por señal del pacto» (Génesis 9:13).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/9/8-17', ref: 'Génesis 9:8-17' }
      ],
      texto: [
        'Lo primero que hace Noé al salir del arca es edificar un altar y ofrecer holocaustos (Gn 8:20). Antes de construir una casa o plantar una viña, adora. Dios recibe la ofrenda con agrado y promete en su corazón: «No volveré más a maldecir la tierra por causa del hombre» (Gn 8:21). Y garantiza el orden de la creación: «Mientras la tierra permanezca, no cesarán la sementera y la siega, el frío y el calor, el verano y el invierno, y el día y la noche» (Gn 8:22).',
        { h: 'Un nuevo comienzo' },
        'Génesis 9 presenta a Noé como un nuevo Adán. Dios repite la bendición de la creación: «Fructificad y multiplicaos, y llenad la tierra» (Gn 9:1). Pero el mundo ya no es el del Edén: los animales temerán al ser humano, y Dios permite comer carne, con una condición: no comer la sangre, que representa la vida (Gn 9:3-4).',
        'Dios agrega una ley que protege la vida humana: «El que derramare sangre de hombre, por el hombre su sangre será derramada; porque a imagen de Dios es hecho el hombre» (Gn 9:6). Después del diluvio, la imagen de Dios sigue en el ser humano, y por eso su vida es sagrada. Con esta norma comienza lo que muchos llaman la dispensación del gobierno humano: Dios encarga a la sociedad castigar el asesinato y frenar la violencia que había llenado la tierra.',
        { h: 'La señal del arco' },
        'Dios establece un pacto «con vosotros, y con vuestros descendientes después de vosotros; y con todo ser viviente» (Gn 9:9-10). Es un pacto universal e incondicional: Dios se compromete sin pedir nada a cambio. La señal es el arco en las nubes. En hebreo, la palabra es la misma que se usa para el arco de guerra. Dios cuelga su arco en el cielo, apuntando hacia arriba, lejos de la tierra: es un arco de paz. Y dice algo conmovedor: «lo veré, y me acordaré del pacto perpetuo» (Gn 9:16). Cada vez que aparece el arco iris, Dios mismo recuerda su promesa.',
        { h: 'Las aguas y la salvación' },
        'Pedro ve en el diluvio una figura del bautismo: ocho personas «fueron salvadas por agua», y el bautismo «que corresponde a esto ahora nos salva», no porque lave el cuerpo, sino como «la aspiración de una buena conciencia hacia Dios» por la resurrección de Cristo (1 P 3:20-21). Las aguas que fueron juicio para el mundo fueron el paso hacia una nueva vida para los que estaban en el arca. Y en el cielo, Juan vio un arco iris alrededor del trono de Dios (Ap 4:3): la promesa sigue rodeando el gobierno de Dios.',
        { ir: { t: 'Ver «Noé: la tierra preservada» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/2' } },
        { ir: { t: 'Ver «Gobierno humano y promesa» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#dispensaciones/4' } }
      ],
      pensar: 'Dios dijo que al ver el arco iris se acordaría de su pacto. ¿Qué promesa de Dios necesitas recordar hoy cuando veas un arco iris?'
    }
  ];

  /* ---------------- VII. Babel y las naciones ---------------- */
  const babel = [
    {
      id: 'tres-hijos', n: 'Sem, Cam y Jafet', ref: 'Génesis 9:18-29; Hechos 17:26; Gálatas 3:28',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/9/18-27', ref: 'Génesis 9:18-27' }
      ],
      texto: [
        '«Estos tres son los hijos de Noé, y de ellos fue llena toda la tierra» (Gn 9:19). Toda la humanidad después del diluvio desciende de una sola familia. El episodio que sigue es breve, incómodo y muy mal usado en la historia, y por eso conviene leerlo con cuidado.',
        { h: 'La caída de Noé' },
        'Noé, el justo que caminó con Dios, planta una viña, bebe vino, se embriaga y queda descubierto en su tienda (Gn 9:20-21). La Biblia no esconde los pecados de sus héroes. El hombre que resistió la corrupción de toda una generación cae en la intimidad de su casa. Ningún creyente está libre de caer, por mucha experiencia espiritual que tenga.',
        'Cam, el padre de Canaán, ve la desnudez de su padre y lo cuenta a sus hermanos, como quien difunde algo vergonzoso. Sem y Jafet, en cambio, toman una ropa, caminan hacia atrás para no mirar y cubren a su padre (Gn 9:22-23). Unos exponen la falta; otros la cubren con respeto. El amor «cubrirá multitud de pecados» (1 P 4:8).',
        { h: '¿La «maldición de Cam»?' },
        'Cuando Noé despierta, pronuncia una maldición, pero no sobre Cam, sino sobre Canaán, uno de sus hijos: «Maldito sea Canaán; Siervo de siervos será a sus hermanos» (Gn 9:25). Es una palabra profética que se cumplió siglos después, cuando los cananeos, conocidos por su corrupción moral (Lv 18:24-28), fueron sometidos por Israel en la conquista.',
        'Durante siglos, algunos usaron este pasaje para justificar la esclavitud de los pueblos africanos, hablando de una supuesta «maldición de Cam» que habría oscurecido su piel y los habría condenado a servir. El texto no dice nada de eso: Cam no fue maldecido, la maldición cayó sobre Canaán, los cananeos no eran africanos, y nada en el pasaje habla del color de la piel. Esa interpretación fue un grave pecado contra la Escritura y contra millones de personas hechas a imagen de Dios. La Biblia enseña que Dios «de una sangre ha hecho todo el linaje de los hombres» (Hch 17:26), y que en Cristo no hay distinción de pueblos (Ga 3:28).',
        { h: 'Sem y Jafet' },
        'Noé bendice a Dios por Sem: «Bendito por Jehová mi Dios sea Sem» (Gn 9:26). De Sem descenderán Abraham, Israel y el Mesías; de su nombre viene la palabra «semita». De Jafet dice: «Engrandezca Dios a Jafet, Y habite en las tiendas de Sem» (Gn 9:27). Los pueblos de Jafet se extendieron hacia el norte y el oeste. Muchos intérpretes ven aquí un anuncio de que los gentiles compartirían las bendiciones que vendrían por medio de Sem, como ocurrió cuando el evangelio llegó a las naciones.',
        { ejercicio: {
          pregunta: '¿Sobre quién cae la maldición de Génesis 9:25?',
          opciones: [
            { t: 'Sobre Canaán, el hijo de Cam, y se cumplió en los cananeos.', ok: true, por_que: 'Correcto: el texto dice «Maldito sea Canaán». Usarlo contra los pueblos africanos tergiversa la Escritura.' },
            { t: 'Sobre Cam y todos sus descendientes, incluidos los pueblos de África.', ok: false, por_que: 'Es la interpretación que sirvió para justificar la esclavitud. El texto no maldice a Cam ni habla de África ni del color de la piel.' },
            { t: 'Sobre Noé, por haberse embriagado.', ok: false, por_que: 'Noé pecó, pero el texto no lo maldice. La maldición es una palabra profética que él pronuncia sobre Canaán.' }
          ],
          explicacion: 'Leer con atención protege de usar la Biblia para justificar el pecado. Todos los pueblos son una sola familia humana.'
        } }
      ],
      pensar: 'Sem y Jafet cubrieron la falta de su padre sin exponerla. Cuando conoces el pecado de un hermano, ¿lo difundes o lo cubres con amor y lo ayudas a restaurarse?'
    },
    {
      id: 'naciones', n: 'La tabla de las naciones', ref: 'Génesis 10:1-32; Deuteronomio 32:8; Hechos 17:26',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Los hijos de Jafet (Gn 10:2-5): Gomer, Magog, Madai (los medos), Javán (los griegos de Jonia), Tubal, Mesec y Tiras. Se extienden hacia el norte y las costas del Mediterráneo.',
            estado: { view: NACIONES, capas: [], lugares: ['r-gomer', 'r-magog', 'r-media', 'javan', 'r-tubal', 'r-mesec', 'r-togarma', 'quitim', 'rodas'] } },
          { t: 'Los hijos de Cam (Gn 10:6-20): Cus, Mizraim (Egipto), Fut y Canaán. Se extienden hacia el sur: África, Arabia y la tierra de Canaán, y desde Sinar Nimrod funda ciudades en Mesopotamia.',
            estado: { view: NACIONES, capas: [], lugares: ['r-cus', 'r-egipto', 'r-fut', 'canaan', 'sidon', 'het', 'seba', 'babilonia', 'ninive'] } },
          { t: 'Los hijos de Sem (Gn 10:21-31): Elam, Asur, Arfaxad, Lud y Aram. Ocupan Mesopotamia, Siria y el oriente; de Arfaxad, por Heber, vendrá Abraham.',
            estado: { view: NACIONES, capas: [], lugares: ['r-elam', 'asur', 'lud', 'aram', 'ur', 'haran'] } }
        ] },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-naciones.svg', alt: 'Árbol que parte de Noé en tres ramas: Jafet hacia el norte y el oeste, con Gomer, Magog, Madai, Javán, Tubal, Mesec y Tiras; Cam hacia el sur, con Cus, Mizraim, Fut y Canaán; Sem hacia el oriente, con Elam, Asur, Arfaxad, Lud y Aram, y de Arfaxad a Heber, Peleg y Abraham', pie: 'Setenta nombres en total: toda la humanidad, en tres familias.', origen: 'esquema' }
      ],
      texto: [
        'Génesis 10 es un capítulo único en la literatura antigua. Ningún otro pueblo de su tiempo hizo un mapa de toda la humanidad conocida como una sola familia. Los egipcios, los babilonios y los griegos se veían a sí mismos como el centro del mundo y a los demás como bárbaros. Génesis, en cambio, presenta a todas las naciones como descendientes de Noé y, a través de él, de Adán.',
        { h: 'Setenta naciones' },
        'El capítulo nombra unas setenta naciones o pueblos, organizados en tres grupos: los hijos de Jafet, de Cam y de Sem. El mapa los recorre en tres pasos. La mayoría de los nombres son de pueblos o regiones, no solo de personas: Mizraim es Egipto, Madai son los medos, Javán son los griegos de Jonia, Asur es Asiria y Aram es Siria. Muchos de esos nombres vuelven a aparecer en los profetas.',
        'El número setenta tiene sentido en la Biblia. Setenta personas de la casa de Jacob bajaron a Egipto (Gn 46:27), y Moisés canta que Dios «estableció los límites de los pueblos Según el número de los hijos de Israel» (Dt 32:8). Jesús envió a setenta discípulos (Lc 10:1), quizá como una señal de que el evangelio era para todas las naciones.',
        { h: 'Cada uno según su lengua' },
        'El capítulo repite que las naciones se distribuyeron «según su lengua, conforme a sus familias en sus naciones» (Gn 10:5). Génesis 11 explicará cómo surgieron las distintas lenguas en Babel. El orden de los capítulos no es estrictamente cronológico: el capítulo 10 muestra el resultado, y el 11 cuenta la causa.',
        { h: 'Peleg y la repartición' },
        'En la línea de Sem aparece un detalle: Heber tuvo un hijo llamado Peleg, «porque en sus días fue repartida la tierra» (Gn 10:25). El nombre significa «división». La mayoría de los intérpretes entienden que se refiere a la división de los pueblos en Babel. De Heber viene probablemente la palabra «hebreo», y de su línea, Abraham.',
        { h: 'Un solo linaje' },
        'Pablo resume el mensaje del capítulo ante los filósofos de Atenas: Dios «de una sangre ha hecho todo el linaje de los hombres, para que habiten sobre toda la faz de la tierra; y les ha prefijado el orden de los tiempos, y los límites de su habitación» (Hch 17:26). Todas las naciones tienen el mismo origen, la misma dignidad y el mismo Dios que gobierna su historia. La identificación de algunos nombres, como Magog, es incierta, y el mapa la muestra como aproximada.'
      ],
      pensar: 'Génesis 10 ve a todas las naciones como una sola familia. ¿Hay algún pueblo o grupo de personas hacia el que tienes prejuicios? ¿Qué te enseña este capítulo?'
    },
    {
      id: 'nimrod', n: 'Nimrod y las primeras ciudades', ref: 'Génesis 10:8-12; Miqueas 5:6',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MESOP, capas: [], lugares: ['babilonia', 'uruk', 'acad', 'ninive', 'kalhu', 'asur', 'ur', 'eridu'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/10/8-12', ref: 'Génesis 10:8-12' }
      ],
      texto: [
        'En medio de la lista de las naciones, Génesis se detiene en un personaje: Nimrod, hijo de Cus, «quien llegó a ser el primer poderoso en la tierra» (Gn 10:8). Es el primer hombre de la Biblia descrito como un gobernante con un reino.',
        { h: 'Un vigoroso cazador' },
        'Nimrod era «vigoroso cazador delante de Jehová» (Gn 10:9), y su fama se volvió un dicho popular. En el mundo antiguo, los reyes se presentaban como grandes cazadores: los relieves asirios muestran a los reyes cazando leones, como prueba de su fuerza y de su derecho a gobernar. La expresión «delante de Jehová» puede entenderse de dos maneras. Algunos la leen como un elogio: era un cazador extraordinario, aun a los ojos de Dios. Otros, siguiendo a antiguos intérpretes judíos, la leen como desafío: un hombre que se levantó frente a Dios. Su nombre suena en hebreo como «nos rebelaremos».',
        { h: 'Las primeras ciudades del imperio' },
        'El comienzo de su reino fue «Babel, Erec, Acad y Calne, en la tierra de Sinar» (Gn 10:10). Sinar es el nombre bíblico de la llanura del sur de Mesopotamia. Babel es Babilonia; Erec es Uruk, una de las ciudades más antiguas del mundo, donde se encuentran algunos de los primeros textos escritos; Acad fue la capital del primer imperio conocido, el de Sargón, cuya ubicación exacta aún se busca. De allí, Nimrod salió hacia Asiria y edificó Nínive y Cala (Gn 10:11). El mapa muestra estas ciudades, que siglos después serían las capitales de Babilonia y Asiria, los imperios que conquistarían a Israel y a Judá.',
        'Miqueas llama a Asiria «la tierra de Nimrod» (Mi 5:6). Para los profetas, Nimrod era el fundador del poder imperial que oprime a los pueblos.',
        { h: 'El poder sin Dios' },
        'Nimrod representa algo que se repite en la historia: el ser humano que acumula poder, construye ciudades y funda imperios para engrandecer su propio nombre. Babilonia aparece aquí por primera vez en la Biblia, y la Escritura la seguirá hasta el final, cuando Apocalipsis anuncie: «Ha caído, ha caído la gran Babilonia» (Ap 18:2). Babel es el símbolo de la civilización humana organizada contra Dios.',
        { ir: { t: 'Ver «Babilonia en la Biblia» en El imperio babilónico', a: '../../imperio-babilonico/#historia/1' } }
      ],
      pensar: 'Nimrod se hizo un nombre con su poder. ¿Qué lugar ocupa en tu vida el deseo de ser reconocido, y qué lugar el deseo de que Dios sea conocido?'
    },
    {
      id: 'torre', n: 'La torre de Babel', ref: 'Génesis 11:1-9; Daniel 4:30; Isaías 14:13-14; Apocalipsis 18:2',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-babel.webp', alt: 'Una multitud anónima de obreros de la antigua Mesopotamia fabrica y cuece ladrillos de barro y los sube por rampas hacia una enorme torre escalonada en construcción, cuyos pisos superiores se pierden entre nubes de polvo al atardecer', pie: '«Vamos, edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo» (Génesis 11:4).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/zigurat-ur.jpg', alt: 'El gran zigurat de Ur, en el sur de Irak: una torre escalonada de ladrillo con una gran escalinata central, restaurada en parte', pie: 'El zigurat de Ur, construido hacia el 2100 a.C. por el rey Ur-Nammu y restaurado en parte en el siglo XX. Así eran las torres de los templos de Mesopotamia.', origen: 'foto', licencia: 'Foto: Hardnfast, CC BY 3.0, vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-zigurat.svg', alt: 'Perfil de un zigurat de siete pisos, con el santuario arriba y una escalinata, comparado a escala con el Etemenanki de Babilonia, de unos 91 metros de lado y de alto, una persona y un edificio de diez pisos', pie: 'El Etemenanki, el gran zigurat de Babilonia, medía según las fuentes unos 91 metros de lado. Su nombre significaba «casa del fundamento del cielo y de la tierra».', origen: 'esquema' }
      ],
      texto: [
        '«Tenía entonces toda la tierra una sola lengua y unas mismas palabras» (Gn 11:1). Los descendientes de Noé, moviéndose hacia el oriente, encuentran una llanura en Sinar y se establecen allí. Dios había mandado llenar la tierra (Gn 9:1); ellos deciden quedarse juntos.',
        { h: 'Ladrillo en lugar de piedra' },
        'El texto da un detalle técnico que muestra que el narrador conocía Mesopotamia: «les sirvió el ladrillo en lugar de piedra, y el asfalto en lugar de mezcla» (Gn 11:3). En la llanura del Tigris y el Éufrates no hay piedra, pero hay barro y betún. Los mesopotámicos inventaron el ladrillo cocido y construyeron con él ciudades enteras y grandes torres escalonadas, los zigurats, sobre las que ponían un santuario para sus dioses. Las fotos y el esquema muestran cómo eran.',
        { h: '«Hagámonos un nombre»' },
        'El propósito del proyecto está en sus palabras: «edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra» (Gn 11:4). Hay tres pecados en una frase: el orgullo de querer llegar al cielo por esfuerzo propio, el deseo de hacerse un nombre en lugar de honrar el de Dios, y la desobediencia de no querer llenar la tierra. Es el mismo orgullo que Isaías atribuye al rey de Babilonia: «Subiré al cielo… y seré semejante al Altísimo» (Is 14:13-14).',
        { h: 'Dios desciende' },
        'El relato tiene una ironía fina: los hombres quieren que su torre llegue al cielo, pero «descendió Jehová para ver la ciudad y la torre» (Gn 11:5). La obra que les parecía tan alta era tan pequeña que Dios tuvo que bajar para verla. Dios dice: «descendamos, y confundamos allí su lengua» (Gn 11:7), con un plural que recuerda al «Hagamos» de la creación. Confunde las lenguas, y el proyecto se detiene. Los pueblos se dispersan por la tierra, cumpliendo, a pesar de sí mismos, el mandato de Dios.',
        { h: 'Babel: puerta o confusión' },
        'Para los babilonios, el nombre de su ciudad, Bab-ilu, significaba «puerta de dios». Génesis juega con otra palabra hebrea parecida, balal, que significa «confundir»: «Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra» (Gn 11:9). Lo que ellos llamaban la puerta de dios, Dios lo llamó confusión. Siglos después, Nabucodonosor diría de la misma ciudad: «¿No es ésta la gran Babilonia que yo edifiqué…?» (Dn 4:30), y también sería humillado.',
        { ejercicio: {
          pregunta: '¿Cuál era el pecado principal de los constructores de Babel?',
          opciones: [
            { t: 'Querer hacerse un nombre y quedarse juntos, desobedeciendo el mandato de llenar la tierra.', ok: true, por_que: 'Correcto: el texto lo dice con sus propias palabras: «hagámonos un nombre, por si fuéremos esparcidos».' },
            { t: 'Construir con ladrillos, que era una técnica prohibida.', ok: false, por_que: 'Construir no es pecado; el texto solo describe la técnica. El problema estaba en el propósito.' },
            { t: 'Hablar una sola lengua.', ok: false, por_que: 'Tener una sola lengua no era malo; lo malo fue usar esa unidad para rebelarse contra Dios.' }
          ],
          explicacion: 'Babel no fue condenada por su tecnología, sino por su orgullo: una humanidad unida para engrandecerse sin Dios.'
        } }
      ],
      pensar: '«Hagámonos un nombre.» ¿En qué proyectos de tu vida buscas más tu propio nombre que el de Dios?'
    },
    {
      id: 'pentecostes', n: 'De Babel a Pentecostés', ref: 'Hechos 2:1-11; Sofonías 3:9; Apocalipsis 7:9-10',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../movimiento-pentecostal/img/pentecostes.webp', alt: 'Los discípulos reunidos en una casa de Jerusalén, con pequeñas llamas sobre sus cabezas, hablan con los rostros encendidos mientras una multitud se agolpa en la calle', pie: '«¿Cómo, pues, les oímos nosotros hablar cada uno en nuestra lengua en la que hemos nacido?» (Hechos 2:8).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: HECHOS2, capas: ['roma-14'], lugares: ['jerusalen', 'r-partia', 'r-media', 'r-elam', 'r-mesopotamia', 'r-capadocia', 'r-ponto', 'r-asia', 'r-frigia', 'r-panfilia', 'r-egipto', 'r-libia', 'r-roma', 'r-creta', 'r-arabia'] } },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Babel y Pentecostés',
          cab: ['Babel (Gn 11)', 'Pentecostés (Hch 2)'],
          filas: [
            ['Los hombres quieren subir al cielo', 'El Espíritu desciende del cielo'],
            ['«Hagámonos un nombre»', 'Se predica el nombre de Jesús (Hch 2:38)'],
            ['Una lengua se divide en muchas', 'Muchas lenguas anuncian un solo mensaje'],
            ['Nadie entiende a su compañero', 'Cada uno oye en su propia lengua'],
            ['La humanidad se dispersa', 'Las naciones se reúnen en una iglesia'],
          ],
          nota: 'Pentecostés no elimina las lenguas: las santifica para anunciar las maravillas de Dios.'
        } }
      ],
      texto: [
        'La historia de Babel no termina en Génesis 11. Siglos después, en Jerusalén, el día de Pentecostés, ocurre algo que la Biblia presenta como su respuesta. Mientras los discípulos estaban reunidos, «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4).',
        { h: 'Todas las naciones bajo el cielo' },
        'En Jerusalén había judíos piadosos «de todas las naciones bajo el cielo» (Hch 2:5). Lucas los nombra: partos, medos, elamitas, habitantes de Mesopotamia, Judea, Capadocia, el Ponto, Asia, Frigia, Panfilia, Egipto, Libia y Roma, cretenses y árabes. El mapa los muestra. La lista recuerda a la tabla de las naciones: los descendientes de los que se dispersaron en Babel vuelven a reunirse, y cada uno oye «en nuestras lenguas las maravillas de Dios» (Hch 2:11).',
        { h: 'Lo que Babel deshizo, el Espíritu lo restaura' },
        'La tabla compara los dos relatos. En Babel, los hombres querían subir al cielo; en Pentecostés, el Espíritu desciende del cielo. En Babel buscaban hacerse un nombre; en Pentecostés se anuncia el nombre de Jesús. En Babel, las lenguas dividieron a la humanidad; en Pentecostés, las lenguas se vuelven instrumento para unirla en Cristo. Muchos padres de la iglesia vieron esta relación, y el profeta Sofonías ya la había anunciado: Dios devolvería «a los pueblos pureza de labios, para que todos invoquen el nombre de Jehová» (Sof 3:9).',
        'Es importante notar lo que Dios hizo y lo que no hizo. En Pentecostés, Dios no anuló las lenguas para volver a una sola; habló en las lenguas de cada pueblo. El evangelio no borra las culturas, sino que llega a cada una en su propio idioma. Por eso la iglesia ha traducido la Biblia a miles de lenguas.',
        { h: 'Toda lengua delante del trono' },
        'El final de la historia está en Apocalipsis: Juan vio «una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas» delante del trono y del Cordero (Ap 7:9). La humanidad que se dispersó en Babel será reunida en adoración, sin perder su diversidad.',
        { ir: { t: 'Ver «El día de Pentecostés» en El Espíritu Santo', a: '../../espiritu-santo/#bautismo/2' } }
      ],
      pensar: 'En Pentecostés, el Espíritu habló a cada pueblo en su lengua. ¿A qué personas de otra cultura, idioma o generación podría Dios usarte para llevar el evangelio?'
    },
    {
      id: 'abraham', n: 'De Babel a Abraham', ref: 'Génesis 11:10–12:3; Gálatas 3:8; Hebreos 11:8-10',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[28.5, 33.5], [39, 48.5]], capas: [], lugares: ['ur', 'babilonia', 'haran', 'damasco', 'jerusalen'], trazos: ['cr-tare'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/12/1-3', ref: 'Génesis 12:1-3' }
      ],
      texto: [
        'Génesis 11 termina con una genealogía que lleva de Sem a Taré y sus hijos: Abram, Nacor y Harán (Gn 11:10-26). Después del juicio de Babel, la historia de toda la humanidad se angosta hasta un solo hombre. Es el fin de los orígenes y el comienzo de la historia de la salvación por medio de un pueblo.',
        { h: 'De Ur a Harán' },
        'Taré vivía en «Ur de los caldeos» (Gn 11:28), una gran ciudad del sur de Mesopotamia, con su propio zigurat dedicado al dios luna. Josué recordará que los antepasados de Israel «servían a dioses extraños» al otro lado del río (Jos 24:2). Taré salió de Ur con Abram, Sarai y Lot rumbo a Canaán, pero se quedó en Harán, al norte, otra ciudad dedicada al dios luna (Gn 11:31). El mapa muestra el recorrido. Abraham salió de una sociedad parecida a la de Babel.',
        { h: 'Un nombre que Dios engrandece' },
        'El contraste con Babel es deliberado. Los constructores de la torre dijeron «hagámonos un nombre» (Gn 11:4). A Abram, Dios le dice: «engrandeceré tu nombre» (Gn 12:2). Lo que ellos quisieron conseguir por orgullo, Dios lo da por gracia a quien confía en Él. Los de Babel querían quedarse en un lugar; Abram es llamado a salir hacia una tierra que no conoce. Babel buscó su propia seguridad; Abraham «esperaba la ciudad que tiene fundamentos, cuyo arquitecto y constructor es Dios» (He 11:10).',
        { h: 'Todas las familias de la tierra' },
        'La promesa de Génesis 12:3 responde a todo lo que se rompió en Génesis 1 a 11: «serán benditas en ti todas las familias de la tierra» (Gn 12:3). Después de la maldición sobre la tierra (Gn 3:17), sobre Caín (Gn 4:11) y sobre Canaán (Gn 9:25), llega por fin una bendición para todas las familias que se dispersaron en Babel. Pablo dice que en esta promesa Dios «dio de antemano la buena nueva a Abraham» (Ga 3:8): es el evangelio anunciado por adelantado. La bendición llegaría a todas las naciones por medio de Cristo, el descendiente de Abraham.',
        'Los primeros once capítulos de Génesis explican por qué el mundo necesita un Salvador. El resto de la Biblia cuenta cómo Dios lo envió. La historia de Abraham y los patriarcas tendrá su propio recurso, Los patriarcas, en preparación.',
        { ir: { t: 'Ver «La promesa a Abraham» en La tierra de Israel', a: '../../tierra-de-israel/#plan/1' } },
        { ir: { t: 'Ver «Abraham: las promesas» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/3' } }
      ],
      pensar: 'Dios llamó a Abram a salir de una ciudad que confiaba en sí misma. ¿De qué «Ur» o «Babel» te está llamando Dios a salir para seguirlo por fe?'
    }
  ];

  Object.assign(window.__CREACION, { diluvio, babel });
})();
