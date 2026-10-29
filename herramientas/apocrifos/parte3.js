/* Los libros apócrifos y pseudoepígrafos · ruta III. Relatos y adiciones (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const relatos = [
    {
      id: 'tobias', n: 'Tobías, el ángel y el pez', ref: 'Mateo 7:12; Marcos 16:17; Hechos 19:13-16; Efesios 2:8-9', fecha: [-250, -175],
      visual: [
        img('tobias-rafael.webp', 'Por un camino polvoriento entre colinas secas, un joven judío de unos dieciocho años, Tobías, camina con su bastón y un pequeño hato al hombro junto a un compañero de viaje de aspecto sereno, Rafael, vestido como un viajero común; un perro los sigue de cerca', 'Tobías camina hacia Media con su compañero de viaje y su perro (Tobías 5–6). Recreación.'),
        mapa({ view: V.oriente, lugares: ['ninive', 'ecbatana', 'ragues'], trazos: ['apo-tobias'] }),
        cita('Mateo 7:12', '@@mt/7/12')
      ],
      texto: [
        'El libro de Tobías es una historia familiar llena de detalles amables. Tobit, un israelita de la tribu de Neftalí deportado a Nínive por los asirios, es un hombre justo: da limosna, ayuda a los pobres y entierra a los compatriotas que el rey manda matar. Un día queda ciego por un accidente y, desanimado, pide a Dios la muerte. Ese mismo día, en Ecbatana de Media, una joven llamada Sara pide lo mismo, porque un demonio llamado Asmodeo ha matado a sus siete maridos la noche de bodas. Dios escucha a los dos y envía al ángel Rafael.',
        { h: 'El viaje' },
        'Tobit envía a su hijo Tobías a Media a cobrar un dinero que había dejado en depósito. Rafael lo acompaña disfrazado de pariente, con el nombre de Azarías, y el perro de la casa va con ellos. En el río Tigris, un gran pez salta sobre Tobías; el ángel le dice que lo saque y guarde su corazón, su hígado y su hiel. En Ecbatana, Tobías se casa con Sara, quema el corazón y el hígado del pez, y el humo hace huir al demonio, que Rafael ata en Egipto. Al volver a casa, la hiel del pez sana los ojos de Tobit. Entonces Rafael revela quién es: uno de los siete ángeles que presentan ante Dios las oraciones de los santos.',
        { h: 'Lo que tiene de bueno' },
        'El libro, del que se hallaron cinco copias en Qumrán, muestra la vida de los judíos fieles en el exilio: la oración, el respeto a los padres, la generosidad y la confianza en que Dios cuida a los suyos. Tobit aconseja a su hijo no hacer a nadie lo que él aborrece. Es la llamada regla de oro en forma negativa; Jesús la dijo en positivo y fue más lejos: hacer a los demás todo lo que queremos que hagan con nosotros (Mt 7:12).',
        { h: 'Lo que no encaja' },
        'Tobit dice que era joven cuando las tribus del norte se separaron de Jerusalén, hacia el 930 a.C., pero vive la deportación de Neftalí, que ocurrió unos doscientos años después (2 R 15:29). El ángel miente sobre su identidad. Rafael afirma que la limosna libra de la muerte y limpia de todo pecado, algo que la Escritura nunca dice: somos salvos por gracia, por medio de la fe, «no por obras, para que nadie se gloríe» (Ef 2:9).',
        'El humo del hígado del pez para expulsar un demonio se parece más a una receta de magia que a la Biblia. En el Nuevo Testamento, los demonios no huyen por un ritual, sino por la autoridad del nombre de Jesús (Mr 16:17). Cuando unos exorcistas judíos intentaron usar ese nombre como fórmula, sin conocer a Cristo, fracasaron (Hch 19:13-16).'
      ],
      pensar: 'Tobías aprendió a confiar en Dios en medio de la ceguera, el exilio y la pérdida. ¿Qué te enseña la Biblia sobre cómo enfrenta el creyente las fuerzas del mal: con fórmulas o con la autoridad de Cristo?'
    },
    {
      id: 'ester', n: 'Las adiciones a Ester', ref: 'Ester 4:14-16; Ester 2:21-23; Ester 6:1-3; Ester 3:1',
      visual: [
        esq('esquema-adiciones.svg', 'Dos columnas: a la izquierda, los capítulos de Ester con las seis adiciones griegas (A a F) intercaladas; a la derecha, los capítulos de Daniel con la oración de Azarías y el cántico de los tres jóvenes dentro del capítulo 3, y Susana y Bel y el dragón al final', 'Dónde van las adiciones a Ester y Daniel en las Biblias católicas.'),
        cita('Ester 4:14', '@@est/4/14'),
        tabla({
          titulo: 'Las seis adiciones a Ester',
          cab: ['Adición', 'Contenido', 'Dónde va'],
          filas: [
            ['A', 'El sueño de Mardoqueo y la conspiración de los eunucos', 'Antes de 1:1'],
            ['B', 'El texto del edicto de Amán contra los judíos', 'Después de 3:13'],
            ['C', 'Las oraciones de Mardoqueo y de Ester', 'Después de 4:17'],
            ['D', 'Ester se presenta ante el rey y se desmaya', 'En lugar de 5:1-2'],
            ['E', 'El edicto del rey a favor de los judíos', 'Después de 8:12'],
            ['F', 'La explicación del sueño y una nota sobre la traducción', 'Después de 10:3']
          ],
          nota: 'Jerónimo las reunió al final del libro; por eso en algunas Biblias católicas aparecen como capítulos 11 a 16.'
        })
      ],
      texto: [
        'El libro de Ester tiene una particularidad única: el texto hebreo nunca menciona a Dios. No hay oraciones explícitas, ni milagros, ni el nombre de Jehová. Y sin embargo, toda la historia muestra a Dios obrando detrás de cada «casualidad»: la elección de Ester, la conspiración que descubre Mardoqueo, el insomnio del rey en la noche decisiva. Mardoqueo lo intuye cuando dice: «¿Y quién sabe si para esta hora has llegado al reino?» (Est 4:14).',
        { h: 'Lo que agregó la versión griega' },
        'La traducción griega de Ester agregó 107 versículos en seis secciones. Abren y cierran el libro con un sueño simbólico de Mardoqueo, copian el texto de los dos edictos del rey, ponen en boca de Mardoqueo y de Ester largas oraciones y hacen más dramática la escena en que Ester se presenta ante el rey. En estas adiciones el nombre de Dios aparece más de cincuenta veces. Una nota al final dice que la traducción la hizo en Jerusalén un tal Lisímaco y que se llevó a Egipto en tiempos de un rey Ptolomeo, en el siglo II o I a.C.',
        { h: 'Por qué se agregaron' },
        'Parece que a los traductores les incomodaba un libro bíblico sin el nombre de Dios y quisieron hacer explícita su presencia. Las oraciones son hermosas y muestran la piedad judía de la época. Pero también introducen contradicciones. En la adición A, Mardoqueo descubre la conspiración y es recompensado de inmediato; en el texto hebreo, el hecho queda olvidado hasta la noche en que el rey no puede dormir (Est 2:21-23; 6:1-3), detalle que es clave en la trama. En la adición E, Amán aparece como macedonio, mientras que el libro lo llama agagueo (Est 3:1).',
        { h: 'Una lección sobre la providencia' },
        'Las adiciones quieren mostrar a Dios, pero el libro hebreo enseña algo más profundo: Dios gobierna la historia aun cuando su nombre no se pronuncia. Muchas veces el creyente vive así, sin señales visibles, en medio de decisiones comunes, y descubre después que Dios estaba obrando. Ester ayunó y pidió a su pueblo que ayunara con ella (Est 4:16); la oración está ahí, aunque el texto no la escriba.',
        { ejercicio: {
          pregunta: '¿Qué caracteriza al libro de Ester en el texto hebreo?',
          opciones: [
            { t: 'Tiene largas oraciones de Ester y Mardoqueo.', ok: false, por_que: 'Esas oraciones son parte de las adiciones griegas (C).' },
            { t: 'Nunca menciona a Dios, aunque muestra su obra detrás de cada hecho.', ok: true, por_que: 'Es la única obra del Antiguo Testamento, junto con Cantares, donde no aparece el nombre de Dios.' },
            { t: 'Explica un sueño simbólico de Mardoqueo.', ok: false, por_que: 'El sueño está en las adiciones A y F.' }
          ],
          explicacion: 'El silencio de Ester sobre Dios es parte de su mensaje: la providencia actúa aunque no se vea.'
        } }
      ],
      pensar: 'Dios guió la historia de Ester sin que su nombre apareciera. ¿Puedes reconocer momentos de tu vida en que Dios obró aunque en ese momento no lo notaste?'
    },
    {
      id: 'daniel', n: 'Las adiciones a Daniel: Azarías, Susana y Bel', ref: 'Daniel 3:23-25; Daniel 6:16-23; Daniel 1:17', fecha: [-150, -100],
      visual: [
        img('susana-daniel.webp', 'En una plaza de Babilonia con columnas y gente reunida, el joven Daniel, de unos dieciocho años, interroga con firmeza a un anciano de barba gris vestido con ropas de juez, mientras otro anciano espera custodiado aparte; al fondo, una mujer joven con velo, Susana, observa con las manos juntas', 'Daniel interroga por separado a los dos ancianos que acusaron a Susana. Recreación.'),
        esq('esquema-adiciones.svg', 'Dos columnas: a la izquierda, los capítulos de Ester con las seis adiciones griegas (A a F) intercaladas; a la derecha, los capítulos de Daniel con la oración de Azarías y el cántico de los tres jóvenes dentro del capítulo 3, y Susana y Bel y el dragón al final', 'Dónde van las adiciones a Ester y Daniel en las Biblias católicas.'),
        cita('Daniel 6:22', '@@dn/6/22')
      ],
      texto: [
        'La Biblia griega también agregó tres textos al libro de Daniel. Las Biblias católicas los incluyen: los dos primeros dentro del capítulo 3 y los otros dos como capítulos 13 y 14, que no existen en el texto hebreo.',
        { h: 'La oración de Azarías y el cántico de los tres jóvenes' },
        'En Daniel 3, los tres amigos de Daniel son echados al horno. El texto griego agrega allí unos sesenta versículos. Azarías, es decir Abed-nego, confiesa los pecados de Israel y pide misericordia. Después los tres alaban a Dios con un largo himno que invita a toda la creación, el sol, la lluvia, los montes y los animales, a bendecir al Señor. La iglesia antigua lo cantó en su liturgia. Es un texto devoto que se apoya en los salmos, pero interrumpe el relato justo cuando el rey se levanta asombrado (Dn 3:24).',
        { h: 'Susana' },
        'Susana es una mujer judía hermosa y fiel. Dos ancianos que son jueces del pueblo la desean y, cuando ella los rechaza, la acusan falsamente de adulterio. Cuando la llevan a morir, el joven Daniel interrumpe el juicio y pide interrogar a los dos por separado. Uno dice que la vio bajo un lentisco y el otro bajo una encina, y así queda probada su mentira. En griego, Daniel responde a cada uno con un juego de palabras con el nombre del árbol. Hacia el año 240, el cristiano Julio Africano escribió a Orígenes que ese juego de palabras solo funciona en griego, prueba de que el relato no se escribió en hebreo con el resto de Daniel.',
        { h: 'Bel y el dragón' },
        'En el último relato, Daniel demuestra al rey de Babilonia que el ídolo Bel no come las ofrendas: esparce ceniza en el piso del templo y al día siguiente aparecen las huellas de los sacerdotes y sus familias, que entraban por una puerta secreta. Después mata a un dragón venerado haciéndole comer pasteles de brea, grasa y pelo. Es echado otra vez al foso de los leones, ahora por seis días, y un ángel lleva al profeta Habacuc desde Judea, tomado del cabello, para que le dé de comer.',
        { h: 'Un contraste con el Daniel bíblico' },
        'En el libro canónico, la fidelidad de Daniel se muestra con oración y con palabras de Dios. Daniel no se libra del foso con astucia, sino porque «Mi Dios envió su ángel, el cual cerró la boca de los leones» (Dn 6:22). Los relatos añadidos tienen gracia y enseñan contra la idolatría, pero convierten al profeta en un detective ingenioso. La sabiduría que Dios dio a Daniel (Dn 1:17) es mucho más que ingenio.'
      ],
      pensar: 'Daniel defendió a Susana de un juicio injusto. ¿Cómo puede un creyente defender hoy al que es acusado falsamente, con verdad y con justicia?'
    },
    {
      id: 'baruc', n: 'Baruc y la Carta de Jeremías', ref: 'Jeremías 36:4; Jeremías 43:5-7; Jeremías 10:3-5; Jeremías 29:1', fecha: [-200, -50],
      visual: [
        img('../exilio/img/exi-carta-jeremias.webp', 'En una habitación sencilla de Jerusalén, el profeta Jeremías dicta una carta a su secretario Baruc, que escribe en un rollo, mientras dos mensajeros esperan para llevarla a Babilonia', 'Jeremías escribe a los cautivos en Babilonia (Jer 29:1). Su carta verdadera está en la Biblia. Recreación.'),
        cita('Jeremías 10:3-5', '@@jer/10/3-5'),
        tabla({
          titulo: 'Las partes de Baruc',
          cab: ['Capítulos', 'Contenido', 'Se parece a'],
          filas: [
            ['1:1-14', 'Baruc lee su libro a los cautivos en Babilonia', 'Jeremías 36'],
            ['1:15–3:8', 'Confesión de los pecados de Israel', 'Daniel 9:4-19'],
            ['3:9–4:4', 'Poema de la sabiduría, que se identifica con la ley', 'Job 28; Proverbios 8'],
            ['4:5–5:9', 'Consuelo para Jerusalén', 'Isaías 40–66'],
            ['6 (Carta de Jeremías)', 'Burla de los ídolos de Babilonia', 'Jeremías 10:1-16']
          ]
        })
      ],
      texto: [
        'Baruc, hijo de Nerías, fue el secretario fiel de Jeremías. Escribió en un rollo las profecías que Jeremías le dictaba (Jer 36:4) y lo acompañó en los días más difíciles. Siglos después, alguien escribió un libro con su nombre. Es breve, de cinco capítulos, y en las Biblias católicas lleva añadida como capítulo 6 una supuesta carta de Jeremías.',
        { h: 'Un libro hecho de ecos' },
        'El libro presenta a Baruc en Babilonia, leyendo su obra a los cautivos y a su rey Jeconías. Siguen una confesión de pecados muy parecida a la oración de Daniel 9, un poema que alaba la sabiduría de Dios y la identifica con la ley dada a Israel, y una consolación para Jerusalén que recuerda a los últimos capítulos de Isaías. Uno de sus versículos dice que la sabiduría apareció en la tierra y vivió entre los hombres; algunos padres de la iglesia lo leyeron como una profecía de la encarnación, aunque el autor hablaba de la ley.',
        'Por su lenguaje y sus fuentes, los estudiosos piensan que se escribió entre el 200 y el 50 a.C., mucho después de Baruc. Hay además un problema con su escenario: según el libro de Jeremías, Baruc no fue llevado a Babilonia, sino que lo llevaron a Egipto junto con Jeremías (Jer 43:5-7).',
        { h: 'La Carta de Jeremías' },
        'Jeremías sí escribió una carta a los cautivos, y está en la Biblia (Jer 29). La que se agregó a Baruc es otra: una sátira contra los ídolos de Babilonia, que tienen ojos y no ven, a los que hay que sostener para que no se caigan, que no pueden defenderse del óxido ni de los ladrones. Repite con muchas variaciones lo que Jeremías ya había escrito: «porque leño del bosque cortaron, obra de manos de artífice con buril» (Jer 10:3). En una cueva de Qumrán apareció un pequeño fragmento griego de esta carta, de hacia el año 100 a.C.',
        { h: 'Lo que enseña' },
        'Baruc y la carta enseñan cosas verdaderas: el exilio fue consecuencia del pecado, Dios perdona al que se arrepiente y los ídolos son nada. Pero lo hacen repitiendo lo que los profetas ya habían dicho con autoridad, con un nombre que no es el de su autor. El lector de la Biblia encuentra todo eso, y mejor dicho, en Jeremías, Isaías y Daniel.',
        { ejercicio: {
          pregunta: '¿Qué dato del libro de Jeremías no encaja con el escenario del libro de Baruc?',
          opciones: [
            { t: 'Que Baruc nunca escribió para Jeremías.', ok: false, por_que: 'Baruc sí fue su secretario (Jer 36:4).' },
            { t: 'Que Baruc fue llevado a Egipto con Jeremías, no a Babilonia.', ok: true, por_que: 'Jeremías 43:5-7 cuenta que Johanán llevó a Egipto a Jeremías y a Baruc.' },
            { t: 'Que Jeremías nunca escribió a los cautivos.', ok: false, por_que: 'Sí lo hizo: su carta está en Jeremías 29.' }
          ],
          explicacion: 'El libro usa el nombre de un personaje bíblico, pero su escenario no coincide con lo que la Biblia cuenta de él.'
        } }
      ],
      pensar: 'Los ídolos de Babilonia tenían ojos y no veían. ¿Qué «ídolos» modernos reclaman la confianza que solo Dios merece?'
    },
    {
      id: 'manases', n: 'La Oración de Manasés', ref: '2 Crónicas 33:1-20; 1 Juan 1:9; Lucas 15:18-21',
      visual: [
        cita('2 Crónicas 33:12-13', '@@2cr/33/12-13'),
        tabla({
          titulo: 'Manasés en la Biblia y en la oración',
          cab: ['', 'La Biblia', 'La Oración de Manasés'],
          filas: [
            ['Qué dice', 'Manasés oró en su angustia, se humilló y Dios lo restauró', 'Pone por escrito esa oración, en 15 versículos'],
            ['Dónde estaba la oración', 'En las actas de los reyes y en las palabras de los videntes (2 Cr 33:18-19)', 'Se presenta como si fuera esa oración'],
            ['Más antiguas copias', 'Texto hebreo de Crónicas', 'Siglo III d.C. (Didascalia) y siglo V (Códice Alejandrino)'],
            ['Quién la recibe', 'Todas las iglesias', 'Las ortodoxas; la Vulgata la imprimió en un apéndice']
          ]
        })
      ],
      texto: [
        'Manasés fue el rey más malvado de Judá. Reconstruyó los altares paganos, quemó a su propio hijo en sacrificio, practicó la adivinación y llenó Jerusalén de sangre inocente (2 R 21:1-16). Sin embargo, 2 Crónicas cuenta algo que Reyes no dice: cuando los asirios lo llevaron preso a Babilonia con grillos, «oró a Jehová su Dios, humillado grandemente en la presencia del Dios de sus padres» (2 Cr 33:12). Dios lo escuchó y lo devolvió a su reino.',
        { h: 'Una oración que faltaba' },
        'Crónicas dice que esa oración estaba escrita en otros libros, las actas de los reyes de Israel y las palabras de los videntes, que no se conservaron (2 Cr 33:18-19). Un autor judío, probablemente entre el siglo II a.C. y el I d.C., quiso llenar ese hueco y escribió la oración que Manasés pudo haber dicho. Es un texto breve y muy hermoso. Alaba a Dios como creador, reconoce que su misericordia no tiene medida, confiesa que los pecados del rey son más que la arena del mar y pide perdón con humildad.',
        'La oración se copió en algunos manuscritos de la Biblia griega, en una colección de cánticos llamada las Odas, y la iglesia ortodoxa la usa en su liturgia. La Vulgata la imprimió en un apéndice. En Qumrán apareció otra oración atribuida a Manasés, con un texto completamente distinto, señal de que varias personas intentaron imaginar esas palabras.',
        { h: 'El arrepentimiento verdadero' },
        'El valor de la oración está en que expresa bien lo que la Biblia enseña sobre el arrepentimiento. Ningún pecado es demasiado grande para la misericordia de Dios cuando el pecador se humilla y confía en Él. Manasés mostró su arrepentimiento con hechos: quitó los ídolos del templo, restauró el altar de Jehová y mandó a Judá que sirviera a Dios (2 Cr 33:15-16).',
        'Jesús contó la historia del hijo que volvió a su padre diciendo: «Padre, he pecado contra el cielo y contra ti» (Lc 15:21). El Nuevo Testamento promete: «Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9). No necesitamos conocer las palabras exactas de Manasés; necesitamos su corazón humillado.'
      ],
      pensar: 'Si Dios perdonó a Manasés, el peor rey de Judá, ¿hay algo en tu pasado que sigas creyendo que Dios no puede perdonar?'
    }
  ];

  window.__APO.relatos = relatos;
})();
