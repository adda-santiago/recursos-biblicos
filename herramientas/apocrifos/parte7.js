/* Los libros apócrifos y pseudoepígrafos · ruta VII. Cómo leerlos hoy, y datos del recurso (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, PALABRA } = window.__APO;

  const hoy = [
    {
      id: 'contradicen', n: 'Enseñanzas que contradicen la Escritura', ref: 'Efesios 2:8-9; 1 Juan 1:7; Hebreos 9:27; 1 Timoteo 2:5; Marcos 16:17; Colosenses 3:9',
      visual: [
        tabla({
          titulo: 'Lo que enseñan algunos apócrifos y lo que enseña la Biblia',
          cab: ['Enseñanza', 'Dónde aparece', 'Lo que enseña la Escritura'],
          filas: [
            ['La limosna borra los pecados', 'Tobías 12:9; Eclesiástico 3:30', 'Somos salvos por gracia, por medio de la fe (Ef 2:8-9); la sangre de Cristo limpia de todo pecado (1 Jn 1:7)'],
            ['Orar y ofrecer sacrificios por los muertos para librarlos del pecado', '2 Macabeos 12:43-45', 'Después de la muerte viene el juicio (He 9:27); no hay paso de un destino a otro (Lc 16:26)'],
            ['Los difuntos y los ángeles interceden y presentan nuestras oraciones', '2 Macabeos 15:12-14; Tobías 12:12-15', 'Hay un solo mediador entre Dios y los hombres, Jesucristo (1 Ti 2:5)'],
            ['El humo de un pez ahuyenta al demonio', 'Tobías 6:7-8; 8:2-3', 'Los demonios se echan fuera en el nombre de Jesús (Mr 16:17; Hch 16:18)'],
            ['El alma existe antes del cuerpo', 'Sabiduría 8:19-20', 'Dios formó al hombre del polvo y sopló en él aliento de vida (Gn 2:7)'],
            ['Dios aprueba el engaño por una buena causa', 'Judit 9:10-13; Tobías 5:13', '«No mintáis los unos a los otros» (Col 3:9)']
          ],
          nota: 'Las referencias a los apócrifos siguen la numeración de las Biblias católicas.'
        }),
        cita('1 Juan 1:7', '@@1jn/1/7')
      ],
      texto: [
        'La razón más seria para no recibir estos libros como Escritura es que, en algunos puntos, enseñan lo contrario de lo que enseña el resto de la Biblia. Dios no se contradice: si un libro dice algo opuesto a lo que Dios ya reveló, ese libro no viene de Dios. Los de Berea examinaban cada día las Escrituras para ver si lo que oían era así (Hch 17:11).',
        { h: 'La salvación por obras' },
        'Tobías y Eclesiástico afirman que la limosna limpia los pecados. Dar a los pobres es un mandamiento de Dios y una muestra de la fe verdadera, pero no compra el perdón. La Biblia enseña: «por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios» (Ef 2:8). Solo la sangre de Cristo quita el pecado.',
        { h: 'Los muertos y los intercesores' },
        '2 Macabeos 12 es el texto principal que la Iglesia católica usa para enseñar la oración por los difuntos y la purificación después de la muerte, y 2 Macabeos 15, junto con Tobías 12, se usa para apoyar la intercesión de los santos y los ángeles. La Escritura, en cambio, enseña que el creyente que muere va a estar con el Señor (Fil 1:23) y que Cristo es el único mediador: «hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5). Él vive siempre para interceder por los suyos (He 7:25).',
        'Los católicos sinceros que creen en estas doctrinas lo hacen porque su iglesia recibe estos libros como Escritura. Al conversar con ellos, conviene hacerlo con respeto, con la Biblia abierta y sabiendo que la diferencia empieza por la pregunta de cuáles libros son Palabra de Dios.',
        { h: 'Magia, mentira y filosofía' },
        'Tobías presenta una receta para ahuyentar un demonio con el humo del corazón y el hígado de un pez. El Nuevo Testamento muestra otra cosa: Jesús echaba fuera los demonios con su palabra, y la iglesia recibió autoridad para hacerlo en su nombre, con el poder del Espíritu Santo (Mr 16:17; Hch 16:18). Judit y Tobías aprueban engaños, y Sabiduría toma de la filosofía griega la idea de un alma que existe antes del cuerpo.',
        { ejercicio: {
          pregunta: 'Alguien te dice que dar limosna borra los pecados, porque así lo dice Tobías. ¿Qué responderías desde la Biblia?',
          opciones: [
            { t: 'Que tiene razón, porque dar a los pobres es bueno.', ok: false, por_que: 'Dar es bueno y es un mandamiento, pero la Biblia nunca dice que compre el perdón.' },
            { t: 'Que la generosidad es fruto de la fe, pero que solo la sangre de Cristo limpia del pecado.', ok: true, por_que: 'Efesios 2:8-10 enseña que somos salvos por gracia para hacer buenas obras, no por ellas; 1 Juan 1:7 dice que la sangre de Cristo nos limpia de todo pecado.' },
            { t: 'Que no hay que dar limosna, porque eso es religión de obras.', ok: false, por_que: 'La Biblia manda ser generosos con los pobres (Gá 2:10; Stg 2:15-16); el error está en pensar que eso salva.' }
          ],
          explicacion: 'Las buenas obras son el fruto de la salvación, no su precio.'
        } }
      ],
      pensar: 'Pablo dijo que si alguien anuncia otro evangelio, aunque sea un ángel del cielo, no se le debe creer (Gá 1:8). ¿Conoces el evangelio lo suficiente para reconocer cuando se le agrega algo?'
    },
    {
      id: 'aportes', n: 'Lo que aportan al estudio de la Biblia', ref: 'Juan 10:22-23; Hechos 23:6-8; Mateo 22:23-32; Hechos 17:11', fecha: [-250, 100],
      visual: [
        img('lector-biblias.webp', 'En la mesa de una cocina sencilla de una casa latinoamericana, una mujer de unos cuarenta años compara dos Biblias abiertas, una más gruesa que la otra, con un cuaderno de notas y una taza de café; luz de la mañana por la ventana', 'Comparar Biblias y aprender de dónde vienen sus diferencias. Recreación.'),
        cita('Juan 10:22-23', '@@jn/10/22-23'),
        tabla({
          titulo: 'Lo que estos libros ayudan a entender',
          cab: ['Tema', 'Libro que ayuda', 'En el Nuevo Testamento'],
          filas: [
            ['La fiesta de la Dedicación', '1 Macabeos 4', 'Juan 10:22'],
            ['La fe en la resurrección', '2 Macabeos 7', 'Hechos 23:6-8; Mateo 22:23-32'],
            ['La espera de un Mesías rey', 'Salmos de Salomón 17', 'Juan 6:15; Hechos 1:6'],
            ['Los ángeles y los demonios', '1 Enoc; Tobías', 'Judas 6, 9; Lucas 1:19'],
            ['La vida judía en una ciudad griega', 'Sabiduría; 3 Macabeos', 'Hechos 6:1; 17:16-34'],
            ['El hebreo detrás del griego', 'Eclesiástico; la Septuaginta', 'El vocabulario del Nuevo Testamento']
          ]
        })
      ],
      texto: [
        'Que estos libros no sean Escritura no significa que no sirvan. Los reformadores lo dijeron con claridad: Lutero los llamó útiles y buenos de leer, y la iglesia anglicana enseñó que se leen como ejemplo de vida e instrucción de costumbres, pero no para establecer doctrina. Son ventanas al mundo en que vivieron Jesús y los apóstoles.',
        { h: 'La historia' },
        'Sin 1 Macabeos sabríamos muy poco de los años entre los testamentos: la crisis bajo Antíoco IV, la rebelión, la purificación del templo y la independencia de Judea. Esos hechos explican por qué Jesús estaba en el templo en invierno, durante la fiesta de la Dedicación (Jn 10:22), y por qué el templo era tan importante para los judíos de su tiempo.',
        { h: 'Las creencias' },
        'Estos libros muestran cómo creció la fe de Israel en la resurrección, en los ángeles y en el juicio final. Cuando Pablo, ante el concilio, dijo que lo juzgaban por la esperanza de la resurrección, los fariseos lo defendieron, porque ellos la creían y los saduceos no (Hch 23:6-8). La madre de 2 Macabeos 7 y los Salmos de Salomón representan la fe de esos fariseos.',
        { h: 'Las esperanzas' },
        'Los Salmos de Salomón, 1 Enoc y 4 Esdras muestran qué esperaban del Mesías. Con ellos se entiende mejor por qué tantos se escandalizaron de un Mesías crucificado (1 Co 1:23), y también qué novedad trajo el evangelio: el Hijo del Hombre vino a dar su vida en rescate por muchos (Mr 10:45).',
        { h: 'La lengua' },
        'Los apóstoles escribieron en el griego que habían usado los judíos de la Septuaginta y de estos libros. Palabras como «justicia», «gracia», «salvación» o «Señor» ya tenían un uso judío antes del Nuevo Testamento. Estudiar estos escritos ayuda a los traductores y a los estudiosos a entender el vocabulario bíblico.',
        { h: 'Cómo leerlos' },
        'Se pueden leer como se lee un buen libro de historia o de piedad antigua: con interés, con discernimiento y siempre comparando con la Escritura, como los de Berea (Hch 17:11). Lo que concuerda con la Biblia se aprovecha; lo que la contradice se deja.'
      ],
      pensar: 'Los de Berea recibieron la palabra con solicitud y escudriñaban las Escrituras (Hch 17:11). ¿Lees otros libros cristianos con esa misma actitud, comparándolos con la Biblia?'
    },
    {
      id: 'ecos', n: 'Ecos en el Nuevo Testamento', ref: 'Judas 9; Judas 14-15; Hebreos 11:35; Hebreos 1:3; Romanos 1:20; Santiago 1:19; Hechos 17:28; Tito 1:12',
      visual: [
        tabla({
          titulo: 'Ecos de los apócrifos y pseudoepígrafos',
          cab: ['Nuevo Testamento', 'Texto que recuerda', 'Tipo de relación'],
          filas: [
            ['Judas 14-15', '1 Enoc 1:9', 'Cita de una frase'],
            ['Judas 9', 'La Asunción de Moisés (final perdido)', 'Mención de una tradición'],
            ['Hebreos 11:35', '2 Macabeos 6–7', 'Alusión a los mártires'],
            ['Hebreos 1:3', 'Sabiduría 7:26', 'Lenguaje parecido'],
            ['Romanos 1:20-32', 'Sabiduría 13–14', 'Ideas parecidas sobre la idolatría'],
            ['Santiago 1:19', 'Eclesiástico 5:11', 'Consejo parecido'],
            ['Mateo 27:43', 'Sabiduría 2:18', 'Escena parecida']
          ],
          nota: 'Ninguno se introduce con «escrito está» ni «dice la Escritura».'
        }),
        cita('Hechos 17:28', '@@hch/17/28')
      ],
      texto: [
        'Los escritores del Nuevo Testamento eran judíos del siglo I, o como Lucas, conocían bien el mundo judío. Habían escuchado las historias, los dichos y las esperanzas de su pueblo, y a veces su lenguaje recuerda a estos libros. La tabla reúne los casos más conocidos.',
        { h: 'Tres clases de relación' },
        'Hay un caso de cita directa: Judas cita una frase de 1 Enoc como profecía de Enoc. Hay menciones de tradiciones: la disputa de Miguel por el cuerpo de Moisés o los nombres de Janes y Jambres. Y hay muchos más casos de lenguaje o ideas parecidas, como Hebreos 1:3 y Sabiduría 7:26, que no prueban que el autor estuviera leyendo ese libro: muestran que ambos compartían un mismo ambiente.',
        { h: 'Citar no es canonizar' },
        'El Nuevo Testamento cita también a autores paganos. En Atenas, Pablo dijo: «Porque en él vivimos, y nos movemos, y somos; como algunos de vuestros propios poetas también han dicho: Porque linaje suyo somos» (Hch 17:28). En Tito cita a un poeta de Creta (Tit 1:12), y en 1 Corintios 15:33 usa un refrán griego. Nadie piensa por eso que esos poetas sean Escritura. Lo mismo vale para los apócrifos.',
        'La diferencia se ve en la manera de citar. Cuando los apóstoles citan el Antiguo Testamento, dicen «escrito está», «dice la Escritura», «el Espíritu Santo dice» o nombran al profeta. Nunca usan esas fórmulas para un apócrifo.',
        { h: 'Lo que esto enseña' },
        'Dios inspiró a los autores de la Biblia sin borrar su cultura, su lengua ni sus lecturas. El Espíritu Santo los guio para que lo que afirmaran fuera verdad y para que escogieran bien sus palabras. Así como un predicador de hoy puede usar un dicho popular para ilustrar una verdad bíblica, los apóstoles usaron lo que su pueblo conocía para anunciar a Cristo.',
        { ejercicio: {
          pregunta: '¿Qué diferencia hay entre la manera en que el Nuevo Testamento usa el Antiguo y la manera en que usa los apócrifos?',
          opciones: [
            { t: 'Ninguna: los cita a los dos de la misma manera.', ok: false, por_que: 'Al Antiguo Testamento lo cita con «escrito está» o «dice la Escritura»; a los apócrifos, nunca.' },
            { t: 'Al Antiguo Testamento lo cita como Escritura; de los apócrifos solo toma frases, tradiciones o lenguaje, como de otros autores de su tiempo.', ok: true, por_que: 'Es la misma manera en que Pablo cita a poetas griegos en Hechos 17:28 y Tito 1:12.' },
            { t: 'Cita los apócrifos más veces que el Antiguo Testamento.', ok: false, por_que: 'El Nuevo Testamento cita o alude cientos de veces al Antiguo; los ecos de los apócrifos son pocos y casi todos indirectos.' }
          ],
          explicacion: 'Las fórmulas de cita muestran qué libros consideraban Escritura los apóstoles.'
        } }
      ],
      pensar: 'Pablo usó un poema griego para anunciar al Dios verdadero en Atenas. ¿Cómo puedes usar lo que la gente de tu entorno conoce para hablarle de Cristo, sin mezclar el mensaje?'
    },
    {
      id: 'taller', n: 'Taller: ¿lo dice la Biblia o un apócrifo?', ref: 'Hechos 17:11; 2 Timoteo 3:14-17; Habacuc 2:4; Mateo 7:12; Salmo 31:5',
      visual: [
        cita('2 Timoteo 3:16-17', '@@2ti/3/16-17'),
        tabla({
          titulo: 'Cuatro preguntas para comprobar una frase',
          cab: ['Pregunta', 'Para qué sirve'],
          filas: [
            ['¿Dónde está escrita?', 'Buscarla en una concordancia o en la Biblia del sitio'],
            ['¿Quién lo dice y a quién?', 'Ver su contexto, aunque esté en la Biblia'],
            ['¿Concuerda con el resto de la Escritura?', 'La Biblia no se contradice'],
            ['¿Lleva a Cristo?', 'Toda la Escritura da testimonio de Él (Jn 5:39)']
          ]
        })
      ],
      texto: [
        'Muchas frases circulan como si fueran bíblicas. Algunas lo son; otras vienen de los apócrifos, y otras son refranes populares. Este taller propone reconocerlas. En cada ejercicio, la frase está resumida con palabras propias; las que vienen de los apócrifos no se citan entre comillas porque no forman parte de la Biblia del sitio.',
        { ejercicio: {
          pregunta: 'Frase 1: La limosna libra de la muerte y limpia de todo pecado. ¿De dónde viene?',
          opciones: [
            { t: 'Del libro de Proverbios.', ok: false, por_que: 'Proverbios elogia la generosidad, pero nunca dice que limpie el pecado.' },
            { t: 'De Tobías, un libro apócrifo.', ok: true, por_que: 'Lo dice el ángel Rafael en Tobías 12:9; Eclesiástico 3:30 dice algo parecido.' },
            { t: 'De la carta de Santiago.', ok: false, por_que: 'Santiago enseña que la fe se muestra con obras (Stg 2:14-17), no que las obras quiten el pecado.' }
          ],
          explicacion: 'La frase suena piadosa, pero contradice la salvación por gracia (Ef 2:8-9).'
        } },
        { ejercicio: {
          pregunta: 'Frase 2: El justo vivirá por su fe. ¿De dónde viene?',
          opciones: [
            { t: 'De Habacuc, y los apóstoles la repiten.', ok: true, por_que: 'Está en Habacuc 2:4 y Pablo la cita en Romanos 1:17 y Gálatas 3:11; también Hebreos 10:38.' },
            { t: 'De 2 Macabeos.', ok: false, por_que: '2 Macabeos habla de la fidelidad de los mártires, pero esta frase es de Habacuc.' },
            { t: 'De Lutero.', ok: false, por_que: 'Lutero la redescubrió en Romanos, pero viene de la Biblia.' }
          ],
          explicacion: 'Es una frase central de la Biblia: el justo vive por confiar en Dios.'
        } },
        { ejercicio: {
          pregunta: 'Frase 3: Dios ayuda a quien se ayuda. ¿De dónde viene?',
          opciones: [
            { t: 'De Proverbios.', ok: false, por_que: 'No está en Proverbios ni en ningún libro de la Biblia.' },
            { t: 'De Eclesiástico.', ok: false, por_que: 'Tampoco está en los apócrifos.' },
            { t: 'De ninguno de los dos: es un refrán popular.', ok: true, por_que: 'Es un dicho antiguo de origen griego. La Biblia enseña lo contrario: Dios ayuda al que no puede salvarse a sí mismo (Ro 5:6).' }
          ],
          explicacion: 'Que una frase sea conocida no la hace bíblica.'
        } },
        { ejercicio: {
          pregunta: 'Frase 4: No hagas a nadie lo que tú aborreces. ¿De dónde viene?',
          opciones: [
            { t: 'Es exactamente lo que dijo Jesús en el Sermón del monte.', ok: false, por_que: 'Jesús lo dijo en positivo: haced a los demás todo lo que queréis que hagan con vosotros (Mt 7:12).' },
            { t: 'De Tobías; Jesús enseñó la misma regla en positivo y llegó más lejos.', ok: true, por_que: 'Tobit lo aconseja a su hijo (Tobías 4:15). No hacer daño es poco; Jesús manda hacer el bien activamente.' },
            { t: 'De la ley de Moisés.', ok: false, por_que: 'La ley manda amar al prójimo como a uno mismo (Lv 19:18), pero esta frase no está allí.' }
          ],
          explicacion: 'Algunas enseñanzas de los apócrifos son buenas, pero la palabra de Jesús va más lejos.'
        } },
        { ejercicio: {
          pregunta: 'Frase 5: Las almas de los justos están en la mano de Dios. ¿De dónde viene?',
          opciones: [
            { t: 'Del libro de Sabiduría, aunque la Biblia enseña algo parecido.', ok: true, por_que: 'Es Sabiduría 3:1. La Biblia dice que el creyente que muere está con el Señor (Fil 1:23) y Jesús encomendó su espíritu en las manos del Padre (Lc 23:46; Sal 31:5).' },
            { t: 'Del Salmo 23.', ok: false, por_que: 'El Salmo 23 habla del Señor como pastor, pero no tiene esta frase.' },
            { t: 'De Apocalipsis.', ok: false, por_que: 'Apocalipsis habla de las almas bajo el altar (Ap 6:9), pero no con estas palabras.' }
          ],
          explicacion: 'Cuando un apócrifo dice algo verdadero, la Biblia ya lo dice con autoridad.'
        } },
        { ejercicio: {
          pregunta: 'Frase 6: Es santo y piadoso orar por los muertos para que sean librados de sus pecados. ¿De dónde viene?',
          opciones: [
            { t: 'De 1 Corintios 15.', ok: false, por_que: 'En 1 Corintios 15 Pablo habla de la resurrección, no de orar para librar a los muertos de sus pecados.' },
            { t: 'De 2 Macabeos.', ok: true, por_que: 'Es el comentario del autor en 2 Macabeos 12:45, sobre la ofrenda de Judas por sus soldados muertos.' },
            { t: 'De Hebreos.', ok: false, por_que: 'Hebreos enseña que después de la muerte viene el juicio (He 9:27).' }
          ],
          explicacion: 'De este texto se tomó la base de la oración por los difuntos; la Biblia no la enseña.'
        } },
        { ejercicio: {
          pregunta: 'Frase 7: Los padres de María se llamaban Joaquín y Ana. ¿De dónde viene?',
          opciones: [
            { t: 'Del evangelio de Lucas.', ok: false, por_que: 'Lucas cuenta el anuncio a María, pero no nombra a sus padres.' },
            { t: 'Del Protoevangelio de Santiago, un apócrifo del siglo II.', ok: true, por_que: 'De allí vienen esos nombres y otras tradiciones sobre María.' },
            { t: 'De la genealogía de Mateo.', ok: false, por_que: 'Mateo traza la genealogía de José, no la de los padres de María.' }
          ],
          explicacion: 'Muchas tradiciones conocidas no vienen de la Biblia, sino de los apócrifos del Nuevo Testamento.'
        } }
      ],
      pensar: 'Toda la Escritura es inspirada por Dios y útil para enseñar (2 Ti 3:16). ¿Qué hábito te ayudaría a conocerla tan bien que distingas su voz de cualquier otra?'
    }
  ];

  const A = window.__APO;
  delete window.__APO;
  const LINEA_LIBROS = { desde: -330, hasta: 130, hitos: [
    { a: -250, t: 'Septuaginta' }, { a: -180, t: 'Ben Sira' }, { a: -164, t: 'Dedicación del templo' },
    { a: -63, t: 'Pompeyo en Jerusalén' }, { a: 70, t: 'Caída de Jerusalén' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Los libros apócrifos y pseudoepígrafos',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'que', grupo: 'Los apócrifos', n: 'I. Qué son estos libros', info: 'Tres nombres, qué trae cada Biblia, cuándo y dónde se escribieron, cómo llegaron a las Biblias y por qué no son Escritura', estaciones: A.que,
        linea: { desde: -350, hasta: 1650, hitos: [
          { a: -250, t: 'Septuaginta' }, { a: 405, t: 'Vulgata' }, { a: 1546, t: 'Trento' }
        ] } },
      { id: 'historicos', grupo: 'Los apócrifos', n: 'II. Los libros históricos', info: '1, 2, 3 y 4 Macabeos, 1 Esdras y Judit', estaciones: A.historicos, linea: LINEA_LIBROS },
      { id: 'relatos', grupo: 'Los apócrifos', n: 'III. Relatos y adiciones', info: 'Tobías, las adiciones a Ester y Daniel, Baruc y la Oración de Manasés', estaciones: A.relatos, linea: LINEA_LIBROS },
      { id: 'sabiduria', grupo: 'Los apócrifos', n: 'IV. Los libros de sabiduría', info: 'Eclesiástico, Sabiduría y el salmo adicional de David', estaciones: A.sabiduria, linea: LINEA_LIBROS },
      { id: 'pseudo', grupo: 'Los pseudoepígrafos', n: 'V. Los pseudoepígrafos', info: '1 Enoc, la Asunción de Moisés, Jubileos, los Salmos de Salomón y 4 Esdras', estaciones: A.pseudo, linea: LINEA_LIBROS },
      { id: 'nt', grupo: 'Los apócrifos del Nuevo Testamento', n: 'VI. Los apócrifos del Nuevo Testamento', info: 'Evangelios de la infancia y gnósticos, Hechos, cartas y apocalipsis atribuidos a los apóstoles', estaciones: A.nt,
        linea: { desde: 30, hasta: 450, hitos: [
          { a: 95, t: 'Apocalipsis de Juan' }, { a: 180, t: 'Ireneo' }, { a: 325, t: 'Eusebio' }, { a: 388, t: 'Apocalipsis de Pablo' }
        ] } },
      { id: 'hoy', grupo: 'Para leerlos hoy', n: 'VII. Cómo leerlos hoy', info: 'Lo que contradicen, lo que aportan, sus ecos en el Nuevo Testamento y un taller', estaciones: hoy }
    ]
  };
})();
