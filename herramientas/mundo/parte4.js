/* El mundo judío en tiempos de Jesús · ruta IV. La fe vivida (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA IV. La fe vivida ==================
  const fe = [
    {
      id: 'templo', n: 'El templo en el centro de la vida', ref: 'Lucas 1:8-10; Lucas 2:22-24; Hechos 3:1; Juan 2:13-21; Marcos 11:15-17; Efesios 2:14', fecha: [-20, 70],
      visual: [
        img('../imperio-romano/img/roma-templo-herodes.webp', 'El templo de Jerusalén ampliado por Herodes, con sus grandes atrios y pórticos, visto desde el monte de los Olivos', 'El templo de Herodes desde el monte de los Olivos. Recreación.'),
        foto('foto-inscripcion-templo.jpg', 'Bloque de piedra caliza con siete líneas de letras griegas mayúsculas talladas, la inscripción que prohibía a los gentiles pasar al interior del templo', 'Inscripción del templo de Jerusalén hallada en 1871: advierte en griego que ningún extranjero pase la balaustrada que rodeaba el santuario, y que quien lo haga será culpable de su propia muerte. Museo Arqueológico de Estambul.', 'CC BY-SA 3.0 · Onceinawhile, vía Wikimedia Commons'),
        img('../medidas-biblicas/img/cambistas.webp', 'Cambistas sentados detrás de mesas de madera en el atrio del templo de Jerusalén, con balanzas y montones de monedas de plata, mientras peregrinos esperan para cambiar dinero', 'Los cambistas cambiaban monedas romanas y griegas por siclos de Tiro para el impuesto del templo. Recreación.'),
        cita('Marcos 11:15-17', '@@mr/11/15-17')
      ],
      texto: [
        'Para un judío del siglo I, el centro del mundo era el templo de Jerusalén. Allí estaba la presencia de Dios, allí se ofrecían los sacrificios por el pecado y allí subía el pueblo en las fiestas. Herodes el Grande lo había reconstruido y ampliado desde el año 20 a.C., y las obras seguían en tiempos de Jesús: «En cuarenta y seis años fue edificado este templo», le dijeron (Jn 2:20). Se terminó recién en el año 63, siete años antes de ser destruido.',
        ir('Recorrer en 3D El templo de Herodes', R.templo),
        { h: 'Un día en el templo' },
        'Cada día, al amanecer y a media tarde, los sacerdotes ofrecían un cordero en holocausto y quemaban incienso en el altar de oro. A la hora de la ofrenda de la tarde, la hora novena, el pueblo se reunía a orar: así lo hicieron Pedro y Juan cuando sanaron al cojo de la puerta la Hermosa (Hch 3:1). Los sacerdotes servían por turnos, y Zacarías estaba de turno cuando «le tocó en suerte ofrecer el incienso» y el ángel le anunció el nacimiento de Juan (Lc 1:9). Además, cada familia traía ofrendas por sus pecados y sus purificaciones, como José y María, que ofrecieron el sacrificio de los pobres: «un par de tórtolas, o dos palominos» (Lc 2:24).',
        { h: 'Una pared de separación' },
        'El monte del templo tenía un gran atrio exterior, abierto a todos, incluso a los gentiles. Más adentro, una balaustrada de piedra marcaba el límite que ningún extranjero podía cruzar. Josefo cuenta que había avisos en griego y en latín, y se han hallado dos de ellos: quien los cruzara sería culpable de su propia muerte. Por eso casi matan a Pablo cuando lo acusaron de haber metido a griegos en el templo (Hch 21:28). Pablo usó esa imagen para hablar de la obra de Cristo, que «de ambos pueblos hizo uno, derribando la pared intermedia de separación» (Ef 2:14).',
        { h: 'Un mercado en la casa de oración' },
        'Los peregrinos que llegaban de lejos necesitaban comprar animales sin defecto para sus sacrificios y cambiar su dinero por siclos de Tiro, la única moneda aceptada para el impuesto del templo. Ese comercio se había instalado en el atrio exterior, el único lugar donde podían orar los gentiles. Jesús volcó las mesas de los cambistas y dijo: «¿No está escrito: Mi casa será llamada casa de oración para todas las naciones? Mas vosotros la habéis hecho cueva de ladrones» (Mr 11:17).',
        { h: 'Un templo mayor' },
        'Jesús amó el templo: lo llamó «casa de mi Padre» (Jn 2:16) y enseñó cada día en sus pórticos. Pero anunció que sería destruido y que Él era algo mayor: «Destruid este templo, y en tres días lo levantaré». Hablaba «del templo de su cuerpo» (Jn 2:19-21). En Él, Dios habita con los hombres.'
      ],
      pensar: 'Jesús se indignó porque el único lugar donde los gentiles podían orar se había convertido en un mercado. ¿Qué cosas pueden ocupar en la iglesia, o en tu vida, el lugar que corresponde a la oración y al encuentro con Dios?'
    },
    {
      id: 'fiestas', n: 'Las fiestas de peregrinación', ref: 'Deuteronomio 16:16; Lucas 2:41-42; Juan 7:2, 37-38; Juan 10:22-23; Hechos 2:1-11; Juan 2:13', fecha: [-6, 70],
      visual: [
        esq('esquema-calendario.svg', 'Esquema circular del año judío con los doce meses, las fiestas de Pascua, Pentecostés, Trompetas, Expiación, Tabernáculos, Dedicación y Purim, y las estaciones de lluvia y cosecha', 'El año judío: en rojo, las tres fiestas de peregrinación.'),
        tabla({
          titulo: 'Jesús en las fiestas según el evangelio de Juan',
          cab: ['Fiesta', 'Pasaje', 'Lo que hizo o enseñó Jesús'],
          filas: [
            ['Primera Pascua', 'Juan 2:13-22', 'Purifica el templo'],
            ['Una fiesta de los judíos', 'Juan 5:1-18', 'Sana al paralítico de Betesda en sábado'],
            ['Segunda Pascua', 'Juan 6:4', 'Alimenta a cinco mil en Galilea: «Yo soy el pan de vida»'],
            ['Tabernáculos', 'Juan 7–8', '«Si alguno tiene sed, venga a mí y beba»; «Yo soy la luz del mundo»'],
            ['Dedicación', 'Juan 10:22-39', '«Yo y el Padre uno somos»'],
            ['Última Pascua', 'Juan 11:55–19:42', 'Muere como el Cordero de Dios']
          ]
        }),
        cita('Juan 7:37-39', '@@jn/7/37-39')
      ],
      texto: [
        'La ley mandaba que todo varón israelita se presentara ante Dios tres veces al año, en las fiestas de los panes sin levadura, de las semanas y de los tabernáculos (Dt 16:16). En el siglo I, muchos judíos de Galilea y de la diáspora no podían ir las tres veces, pero miles y miles llegaban a Jerusalén, sobre todo para la Pascua. La familia de Jesús subía «todos los años» (Lc 2:41). El sentido de cada fiesta y su cumplimiento en Cristo se estudian en Las fiestas de Israel (en preparación); aquí basta con ver cómo se vivían.',
        { h: 'La Pascua' },
        'En la tarde del 14 de nisán, los jefes de familia llevaban sus corderos al templo, donde los sacerdotes recogían la sangre y la derramaban al pie del altar. Esa noche, cada familia o grupo comía el cordero en Jerusalén, con pan sin levadura, hierbas amargas y vino, recordando la salida de Egipto. La ciudad se llenaba tanto que los peregrinos acampaban en los alrededores, en lugares como Betania o el monte de los Olivos. El gobernador romano subía con más soldados, porque la fiesta de la liberación encendía la esperanza de una nueva libertad.',
        { h: 'Pentecostés' },
        'Cincuenta días después se celebraba la fiesta de las semanas, o Pentecostés, en la que se ofrecían a Dios los primeros panes de la cosecha de trigo. Por eso, en el Pentecostés después de la resurrección, había en Jerusalén «judíos, varones piadosos, de todas las naciones bajo el cielo» (Hch 2:5), que oyeron a los discípulos hablar en sus propias lenguas cuando fueron llenos del Espíritu Santo.',
        { h: 'Los tabernáculos' },
        'En otoño, después de la cosecha de la uva y la aceituna, el pueblo vivía siete días en cabañas de ramas, recordando el desierto. Según la Mishná, cada mañana un sacerdote traía agua del estanque de Siloé y la derramaba junto al altar, y por las noches se encendían grandes candeleros en el atrio de las mujeres. Si esas ceremonias se hacían ya en tiempos de Jesús, como es probable, dan un fondo impresionante a sus palabras en esa fiesta: «Si alguno tiene sed, venga a mí y beba» (Jn 7:37) y «Yo soy la luz del mundo» (Jn 8:12).',
        { h: 'La Dedicación' },
        'En invierno se recordaba la purificación del templo por Judas Macabeo en el 164 a.C., con ocho días de lámparas encendidas: es la fiesta que hoy se llama Janucá. Juan cuenta que Jesús estaba en el templo, en el pórtico de Salomón, durante esa fiesta (Jn 10:22-23).',
        ir('Ver Entre los Testamentos: la purificación del templo y la fiesta de la Dedicación', R.entre + '#asmoneos/3')
      ],
      pensar: 'En la fiesta del agua, Jesús invitó a todo el que tuviera sed a venir a Él, y Juan explica que hablaba del Espíritu Santo (Juan 7:39). ¿De qué tienes sed hoy, y qué significa para ti venir a Jesús y beber?'
    },
    {
      id: 'sinagoga', n: 'La sinagoga en tiempos de Jesús', ref: 'Lucas 4:16-30; Marcos 1:21-28; Marcos 5:22; Lucas 13:10-17; Mateo 10:17; Juan 9:22; Hechos 13:14-15', fecha: [-6, 70],
      visual: [
        img('../palabra-de-dios/img/jesus-nazaret.webp', 'En la sinagoga de Nazaret, un hombre de pie, visto de espaldas, sostiene abierto el rollo de Isaías ante los asistentes sentados que lo miran atentos', 'Jesús lee el libro del profeta Isaías en la sinagoga de Nazaret (Lucas 4:16-21). Recreación.'),
        foto('foto-piedra-magdala.jpg', 'Bloque de piedra tallado con un candelero de siete brazos sobre una base, flanqueado por dos ánforas y columnas, en una vitrina al aire libre', 'La piedra de Magdala, hallada en 2009 en una sinagoga del siglo I junto al mar de Galilea, fotografiada en el sitio arqueológico en 2012. Es la representación más antigua del candelero del templo hallada en una sinagoga. La sinagoga se estudiará en su propio recurso.', 'CC BY-SA 3.0 · Hanay, vía Wikimedia Commons'),
        tabla({
          titulo: 'Un sábado en la sinagoga',
          cab: ['Momento', 'Qué se hacía', 'En el Nuevo Testamento'],
          filas: [
            ['Recitación', 'El Shemá: «Oye, Israel: Jehová nuestro Dios, Jehová uno es»', 'Marcos 12:29'],
            ['Oraciones', 'Bendiciones y oraciones de la comunidad', 'Mateo 6:5'],
            ['Lectura de la ley', 'Una porción de los libros de Moisés, en hebreo, traducida al arameo donde hacía falta', 'Hechos 15:21'],
            ['Lectura de los profetas', 'Un pasaje de los profetas', 'Lucas 4:17; Hechos 13:15'],
            ['Explicación', 'Un hombre, a veces un visitante, explica lo leído, sentado', 'Lucas 4:20-21; Hechos 13:15-16'],
            ['Bendición', 'Si había un sacerdote, daba la bendición final', 'Números 6:24-26']
          ],
          nota: 'El orden exacto y algunas oraciones se conocen por fuentes judías posteriores; el Nuevo Testamento muestra las lecturas y la explicación.'
        }),
        cita('Lucas 4:16-21', '@@lc/4/16-21')
      ],
      texto: [
        'El origen de la sinagoga y la inscripción de Teodoto se estudian en Entre los Testamentos. En tiempos de Jesús había una sinagoga en cada aldea judía de Galilea y de Judea, y muchas en Jerusalén y en las ciudades de la diáspora. La arqueología ha encontrado varias anteriores al año 70: en Magdala, Gamla, Masada y el Herodión, entre otras. Eran salas sencillas, con bancos de piedra alrededor de las paredes, mirando hacia el centro donde se leía la Escritura.',
        ir('Ver Entre los Testamentos: la sinagoga', R.entre + '#nacio/1'),
        { h: 'Quiénes la dirigían' },
        'No tenía sacerdotes ni sacrificios. La dirigía el principal de la sinagoga, un hombre respetado de la comunidad que organizaba las reuniones y elegía quién leería y explicaría la Escritura. Jairo, cuya hija resucitó Jesús, era «uno de los principales de la sinagoga» (Mr 5:22). Un servidor guardaba los rollos y se los entregaba al lector: a él le devolvió Jesús el libro de Isaías (Lc 4:20). Los visitantes con conocimiento podían ser invitados a hablar, y así Jesús y después Pablo pudieron enseñar en tantas sinagogas (Hch 13:15).',
        { h: 'Jesús en la sinagoga' },
        'Jesús iba a la sinagoga el día de reposo «conforme a su costumbre» (Lc 4:16), y la usó como lugar principal de su enseñanza en Galilea (Mr 1:39). En Nazaret leyó Isaías 61 y dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21). En Capernaúm liberó a un endemoniado en medio de la reunión, y la gente se maravilló de su autoridad (Mr 1:21-27). En otra sinagoga sanó a una mujer encorvada, y el principal de la sinagoga se enojó porque lo hizo en sábado (Lc 13:14).',
        { h: 'Un lugar de disciplina' },
        'La sinagoga era también un tribunal local. Allí se castigaba con azotes a quien quebrantaba la ley, y Jesús advirtió a sus discípulos: «en sus sinagogas os azotarán» (Mt 10:17). Pablo recibió ese castigo cinco veces (2 Co 11:24). La pena más dura era la expulsión de la comunidad, y Juan cuenta que algunos ya habían acordado expulsar a quien confesara a Jesús como el Mesías (Jn 9:22).',
        { ejercicio: {
          pregunta: '¿Por qué Pablo podía predicar en las sinagogas de las ciudades que visitaba?',
          opciones: [
            { t: 'Porque era sacerdote y tenía derecho a dirigir el culto.', ok: false, por_que: 'Pablo era de la tribu de Benjamín, no sacerdote; además, la sinagoga no la dirigían sacerdotes.' },
            { t: 'Porque en la sinagoga se podía invitar a un visitante con conocimiento a explicar la Escritura.', ok: true, por_que: 'Así ocurrió en Antioquía de Pisidia, donde los principales de la sinagoga lo invitaron a hablar después de la lectura (Hechos 13:15).' },
            { t: 'Porque los romanos obligaban a las sinagogas a recibir a los predicadores.', ok: false, por_que: 'Roma no intervenía en el culto de las sinagogas; la invitación dependía de sus dirigentes.' }
          ],
          explicacion: 'La costumbre de la sinagoga abrió la puerta para que el evangelio se predicara primero a los judíos en cada ciudad del imperio.'
        } }
      ],
      pensar: 'Jesús tenía la costumbre de ir a la sinagoga cada día de reposo, aunque conocía las fallas de sus dirigentes. ¿Qué lugar ocupa en tu vida la reunión con el pueblo de Dios para escuchar su Palabra?'
    },
    {
      id: 'sabado', n: 'El día de reposo y sus disputas', ref: 'Marcos 2:23-28; Marcos 3:1-6; Lucas 13:10-17; Juan 5:8-18; Juan 9:13-16; Mateo 12:5-8; Hechos 1:12', fecha: [27, 30],
      visual: [
        img('mj-espigas-sabado.webp', 'Un sábado de primavera, en un campo de trigo maduro de Galilea, Pedro y Juan, junto a otros discípulos, arrancan espigas, las frotan entre las manos y comen los granos mientras caminan; Jesús camina adelante, visto de espaldas, y en el borde del campo dos fariseos con flecos azules en sus mantos los señalan con desaprobación', '«Mira, ¿por qué hacen en el día de reposo lo que no es lícito?» (Marcos 2:24). Recreación.'),
        tabla({
          titulo: 'Disputas sobre el día de reposo en los evangelios',
          cab: ['Pasaje', 'Lo que pasó', 'La respuesta de Jesús'],
          filas: [
            ['Marcos 2:23-28', 'Los discípulos arrancan espigas', 'David comió los panes; «el día de reposo fue hecho por causa del hombre»'],
            ['Marcos 3:1-6', 'Sana a un hombre con la mano seca', '«¿Es lícito en los días de reposo hacer bien, o hacer mal?»'],
            ['Lucas 13:10-17', 'Sana a una mujer encorvada', 'Desatan al buey para darle agua; ¿no desatar a esta hija de Abraham?'],
            ['Juan 5:1-18', 'El paralítico sanado lleva su lecho', '«Mi Padre hasta ahora trabaja, y yo trabajo»'],
            ['Juan 9:1-16', 'Hace lodo y sana a un ciego de nacimiento', '«Mientras estoy en el mundo, luz soy del mundo»']
          ]
        }),
        cita('Marcos 2:23-28', '@@mr/2/23-28')
      ],
      texto: [
        'El día de reposo, el sábado, era una de las señales que distinguían a los judíos en todo el imperio. Los romanos se burlaban de ellos por descansar un día de cada siete, pero los judíos lo guardaban con fidelidad desde la puesta del sol del viernes hasta la del sábado. El viernes era «la preparación, es decir, la víspera del día de reposo» (Mr 15:42): había que cocinar, encender las lámparas y terminar el trabajo antes del atardecer.',
        { h: 'Un cerco alrededor del mandamiento' },
        'La ley prohibía trabajar en el día de reposo, pero no decía en detalle qué era trabajo. Los maestros lo definieron con mucho cuidado para no quebrantarlo ni por error. La Mishná, escrita más tarde, enumera treinta y nueve tipos de trabajo prohibidos, entre ellos segar, trillar, encender fuego o llevar una carga de un lugar a otro. También se fijó cuánto se podía caminar: «camino de un día de reposo» (Hch 1:12), unos dos mil codos, menos de un kilómetro. Los esenios eran todavía más estrictos que los fariseos.',
        'Dentro de ese sistema, arrancar espigas y frotarlas en las manos era segar y trillar; llevar una camilla era cargar; hacer lodo con saliva era amasar; y curar a un enfermo que no estaba en peligro de muerte era practicar la medicina, que podía esperar al día siguiente. Por eso el principal de la sinagoga dijo: «Seis días hay en que se debe trabajar; en éstos, pues, venid y sed sanados, y no en día de reposo» (Lc 13:14).',
        { h: 'El Señor del día de reposo' },
        'Jesús no despreció el día de reposo: iba a la sinagoga y lo guardó. Pero rechazó las reglas que lo convertían en una carga. Recordó que la misma ley permitía hacer el bien en sábado: los sacerdotes trabajaban en el templo, se circuncidaba a un niño si el octavo día caía en sábado (Jn 7:22-23), y cualquiera sacaba a su animal de un pozo. Y concluyó: «El día de reposo fue hecho por causa del hombre, y no el hombre por causa del día de reposo. Por tanto, el Hijo del Hombre es Señor aun del día de reposo» (Mr 2:27-28).',
        'Esa última frase era lo que más escandalizaba: Jesús reclamaba autoridad sobre un mandamiento que Dios había dado en el Sinaí. Juan dice que por eso «los judíos aun más procuraban matarle, porque no sólo quebrantaba el día de reposo, sino que también decía que Dios era su propio Padre, haciéndose igual a Dios» (Jn 5:18).',
        ir('Ver Pactos y dispensaciones: el día de reposo (Éxodo 20:8)', R.pactos + '#taller/3')
      ],
      pensar: 'Jesús enseñó que el día de reposo fue hecho para el bien del hombre. ¿Cómo vives el descanso y el tiempo dedicado a Dios: como una carga de reglas o como un regalo de su gracia?'
    },
    {
      id: 'pureza', n: 'Pureza: lavamientos, baños rituales y tinajas de piedra', ref: 'Levítico 11:44; Marcos 1:40-42; Marcos 5:25-34, 41-42; Marcos 7:1-4, 14-23; Juan 2:6; Hechos 10:14-15', fecha: [-6, 70],
      visual: [
        img('../medidas-biblicas/img/tinajas.webp', 'Seis grandes tinajas de piedra caliza alineadas junto a un muro en el patio de una casa de Galilea durante una boda, mientras dos sirvientes vierten agua en ellas con cántaros', '«Seis tinajas de piedra para agua, conforme al rito de la purificación de los judíos» (Juan 2:6). Recreación.'),
        foto('foto-mikve.jpg', 'Pileta rectangular excavada en la roca con una escalinata de piedra que baja hasta el fondo, un baño ritual antiguo', 'Baño ritual (mikve) del período del segundo templo junto al monte del templo, en Jerusalén, con su escalinata para descender al agua. Se han hallado cientos en Jerusalén, Qumrán, Magdala y otras aldeas.', 'CC BY-SA 3.0 · Rdusatko, vía Wikimedia Commons'),
        cita('Marcos 7:14-15', '@@mr/7/14-15')
      ],
      texto: [
        'La ley de Moisés distinguía entre lo puro y lo impuro. Algunas cosas hacían a una persona ritualmente impura: tocar un cadáver, tener lepra, ciertos flujos del cuerpo, el parto o comer animales prohibidos. La impureza no era lo mismo que el pecado: era una condición que impedía acercarse al santuario y que se quitaba con baños, el paso del tiempo y, a veces, un sacrificio. Así Dios enseñaba a su pueblo que Él es santo: «seréis santos, porque yo soy santo» (Lv 11:44).',
        { h: 'Una preocupación de todos los días' },
        'En tiempos de Jesús, la pureza era una preocupación muy viva. Los sacerdotes debían estar puros para servir en el templo, y los peregrinos para entrar en sus atrios. Los fariseos se proponían vivir con la pureza de los sacerdotes en sus propias casas y en sus comidas. La arqueología lo confirma: en Jerusalén, en Qumrán, en Magdala y en muchas aldeas de Judea y Galilea se han hallado cientos de baños rituales, piletas excavadas en la roca con una escalinata para descender al agua.',
        'También se han encontrado talleres de vasijas de piedra caliza. Según las reglas de los maestros, la piedra no se contaminaba como el barro, y por eso se usaba para guardar el agua de las purificaciones. En la boda de Caná había «seis tinajas de piedra para agua, conforme al rito de la purificación de los judíos» (Jn 2:6). Jesús convirtió en vino el agua de esas tinajas: el agua de la purificación se volvió el vino de la fiesta del Mesías.',
        { h: 'Jesús y lo impuro' },
        'Una persona pura que tocaba a una impura quedaba impura. Con Jesús ocurrió lo contrario. Tocó a un leproso, y el leproso quedó limpio (Mr 1:41-42). Una mujer con flujo de sangre, impura desde hacía doce años, tocó su manto y quedó sana (Mr 5:29). Tomó de la mano a la hija muerta de Jairo, y la niña se levantó (Mr 5:41-42). En lugar de contaminarse, Jesús comunicaba su santidad y su vida.',
        { h: 'Lo que sale del corazón' },
        'Cuando los fariseos se quejaron de que sus discípulos comían sin lavarse las manos según la tradición, Jesús llamó a la multitud y enseñó: «Nada hay fuera del hombre que entre en él, que le pueda contaminar; pero lo que sale de él, eso es lo que contamina al hombre» (Mr 7:15). Y explicó que del corazón salen los malos pensamientos, los adulterios, los robos y la soberbia (Mr 7:21-23). Marcos agrega que con esto Jesús declaraba limpios todos los alimentos (Mr 7:19), algo que Pedro entendió después en la visión de Jope (Hch 10:15).',
        { ejercicio: {
          pregunta: 'Según la ley de Moisés, ¿era pecado quedar ritualmente impuro?',
          opciones: [
            { t: 'Sí, toda impureza era un pecado que requería arrepentimiento.', ok: false, por_que: 'Muchas impurezas venían de cosas buenas o inevitables, como sepultar a un familiar o dar a luz.' },
            { t: 'No necesariamente; era una condición que impedía acercarse al santuario hasta purificarse.', ok: true, por_que: 'La ley daba la manera de quitarla con baños, tiempo y, a veces, un sacrificio; era pecado acercarse a lo santo estando impuro.' },
            { t: 'No, porque la impureza solo afectaba a los sacerdotes.', ok: false, por_que: 'Las leyes de pureza se aplicaban a todo el pueblo, aunque los sacerdotes tenían reglas más estrictas.' }
          ],
          explicacion: 'Las leyes de pureza enseñaban la santidad de Dios; Jesús mostró que la impureza que más importa es la del corazón, y que solo Él puede limpiarla.'
        } }
      ],
      pensar: 'Jesús enseñó que lo que contamina al hombre sale de su corazón. ¿Qué cosas cuidas mucho por fuera mientras descuidas lo que hay en tu corazón?'
    },
    {
      id: 'tradicion', n: 'La tradición de los ancianos y el corbán', ref: 'Marcos 7:1-13; Mateo 15:1-9; Mateo 23:16-22; Gálatas 1:14; Colosenses 2:8', fecha: [-6, 70],
      visual: [
        img('mj-lavamiento-manos.webp', 'En el patio de una casa judía de Galilea en el siglo I, antes de comer, un padre de familia fariseo vierte agua de un jarro de piedra sobre las manos de su hijo adolescente, mientras la familia espera junto a una mesa baja con pan y aceitunas; sobre un estante se ven vasijas de piedra caliza', 'Antes de comer, los fariseos se lavaban las manos según la tradición de los ancianos (Marcos 7:3). Recreación con personas anónimas.'),
        tabla({
          titulo: 'Mandamiento de Dios y tradición de hombres',
          cab: ['', 'El mandamiento', 'La tradición', 'Lo que dijo Jesús'],
          filas: [
            ['Los padres', '«Honra a tu padre y a tu madre» (Éxodo 20:12)', 'Declarar los bienes «corbán» libera de ayudar a los padres', 'Invalidan la palabra de Dios (Marcos 7:13)'],
            ['Las manos', 'La ley manda lavamientos a los sacerdotes al servir', 'Todos deben lavarse las manos antes de comer', 'Lo que contamina sale del corazón (Marcos 7:15)'],
            ['Los juramentos', 'Cumplir lo que se jura (Números 30:2)', 'Jurar por el templo no obliga; por el oro del templo, sí', 'Todo juramento es ante Dios (Mateo 23:16-22)']
          ]
        }),
        cita('Marcos 7:9-13', '@@mr/7/9-13')
      ],
      texto: [
        'Los fariseos tenían en gran estima la tradición de los ancianos: las enseñanzas de los maestros anteriores que explicaban cómo cumplir la ley en cada detalle de la vida. Se transmitía de memoria, de maestro a discípulo, y con el tiempo se puso por escrito en la Mishná. Los fariseos la consideraban casi tan obligatoria como la ley de Moisés; los saduceos, en cambio, la rechazaban.',
        { h: 'Un cerco para la ley' },
        'Un dicho antiguo que conserva la Mishná pedía a los maestros hacer un cerco alrededor de la ley. La idea era buena: si se pone una cerca alrededor de un pozo, nadie cae en él. Si se evita hasta lo que se parece a quebrantar el día de reposo, nunca se lo quebrantará. Pero con el tiempo, las cercas se multiplicaron, y algunas terminaron ocupando el lugar del mandamiento mismo.',
        { h: 'El caso del corbán' },
        'Jesús dio un ejemplo. La ley manda: «Honra a tu padre y a tu madre». Pero la tradición permitía que un hijo declarara sus bienes «corbán», es decir, «mi ofrenda a Dios», y desde ese momento ya no estaba obligado a usarlos para ayudar a sus padres ancianos, aunque él mismo podía seguir disfrutándolos. Jesús dijo que así invalidaban «la palabra de Dios con vuestra tradición» (Mr 7:13). En Jerusalén se ha encontrado una vasija de piedra con la palabra corbán grabada, señal de que esa fórmula se usaba para consagrar objetos.',
        { h: 'Lo que Jesús no rechazó' },
        'Jesús no rechazó toda costumbre. Participó en la sinagoga, en las fiestas y en la cena de la Pascua, con sus oraciones y sus copas, que no estaban mandadas en la ley sino que venían de la tradición. Lo que rechazó fue poner la tradición por encima de la palabra de Dios, y obedecer las reglas exteriores con un corazón lejos de Dios: «Este pueblo de labios me honra, mas su corazón está lejos de mí» (Mr 7:6).',
        { h: 'Una advertencia para la iglesia' },
        'También las iglesias tienen tradiciones: formas de culto, costumbres, maneras de vestir o de servir. Muchas son buenas y ayudan. Pero toda tradición debe someterse a la Escritura, y nunca puede usarse para dejar de cumplir lo que Dios manda. Pablo, que había sido celoso de «las tradiciones de mis padres» (Gá 1:14), advirtió a los colosenses contra las enseñanzas «según las tradiciones de los hombres» y no según Cristo (Col 2:8).'
      ],
      pensar: '¿Hay costumbres o reglas en tu vida o en tu iglesia que se han vuelto más importantes que obedecer lo que Dios manda, por ejemplo, en el amor y el cuidado de tu familia?'
    },
    {
      id: 'piedad', n: 'Oración, ayuno y limosna', ref: 'Deuteronomio 6:4-9; Mateo 6:1-18; Lucas 18:12; Hechos 3:1; Hechos 10:2, 9, 30; Marcos 12:41-44', fecha: [-6, 70],
      visual: [
        img('../medidas-biblicas/img/viuda.webp', 'Una viuda pobre, vestida con un manto oscuro gastado, deja caer dos pequeñas monedas de bronce en un cofre de ofrendas con forma de trompeta en el atrio del templo; a lo lejos, Jesús sentado la observa de espaldas', '«Esta viuda pobre echó más que todos» (Marcos 12:43). Recreación.'),
        img('../dios-y-la-trinidad/img/shema-familia.webp', 'En la entrada de una casa de piedra israelita, al atardecer, un padre enseña a sus dos hijos pequeños señalando un pequeño estuche de cuero fijado en el poste de la puerta', '«Y las repetirás a tus hijos… y las escribirás en los postes de tu casa» (Deuteronomio 6:7, 9). Recreación.'),
        tabla({
          titulo: 'La piedad diaria de un judío del siglo I',
          cab: ['Práctica', 'Cómo se vivía', 'En el Nuevo Testamento'],
          filas: [
            ['El Shemá', 'Se recitaba al levantarse y al acostarse (Deuteronomio 6:4-9)', 'Jesús lo cita como el primer mandamiento (Marcos 12:29-30)'],
            ['Filacterias y mezuzá', 'Pequeños estuches con pasajes de la ley, en la frente, el brazo y los postes de la casa', 'Mateo 23:5'],
            ['Horas de oración', 'En la mañana, a la hora sexta (mediodía) y a la novena (tarde)', 'Hechos 3:1; 10:9, 30'],
            ['Ayuno', 'Obligatorio en el Día de la Expiación; los piadosos ayunaban dos días por semana', 'Lucas 18:12; Hechos 27:9'],
            ['Limosna', 'Ayuda a los pobres, considerada una obra de justicia', 'Mateo 6:2-4; Hechos 10:2']
          ]
        }),
        cita('Mateo 6:1-6', '@@mt/6/1-6')
      ],
      texto: [
        'En el Sermón del monte, Jesús habló de tres prácticas que todo judío piadoso conocía: la limosna, la oración y el ayuno (Mt 6:1-18). No las inventó ni las prohibió: supuso que sus discípulos las practicarían, y les enseñó a hacerlo con el corazón correcto.',
        { h: 'La oración' },
        'Cada día, al levantarse y al acostarse, el judío piadoso recitaba el Shemá: «Oye, Israel: Jehová nuestro Dios, Jehová uno es» (Dt 6:4), con los pasajes que lo acompañan. Muchos llevaban filacterias, pequeños estuches de cuero con esos pasajes, atados a la frente y al brazo en la oración, y ponían otro en los postes de la puerta, la mezuzá. Se han encontrado filacterias del siglo I en las cuevas de Qumrán. Además se oraba a horas fijas, coincidiendo con los sacrificios del templo: Pedro subió a orar a la azotea «cerca de la hora sexta» (Hch 10:9), y Cornelio oraba a la hora novena (Hch 10:30).',
        'Jesús advirtió contra orar «en las esquinas de las calles, para ser vistos de los hombres», y enseñó a orar en lo secreto (Mt 6:5-6). Les dio a sus discípulos una oración breve, el Padre nuestro, que empieza llamando a Dios Padre con la confianza de un hijo.',
        { h: 'El ayuno' },
        'La ley solo mandaba ayunar en el Día de la Expiación, al que los judíos llamaban simplemente «el ayuno» (Hch 27:9). Pero los fariseos y otros judíos piadosos ayunaban dos días por semana; el fariseo de la parábola decía: «ayuno dos veces a la semana» (Lc 18:12). Jesús enseñó a ayunar sin poner cara triste para mostrar a los demás, sino ungiendo la cabeza y lavando el rostro, para que solo el Padre lo viera (Mt 6:16-18).',
        { h: 'La limosna' },
        'Dar a los pobres era una obligación muy seria; en hebreo se llamaba con la misma palabra que la justicia. Jesús enseñó que no había que hacer «tocar trompeta» delante de uno (Mt 6:2), sino dar de modo que «no sepa tu izquierda lo que hace tu derecha». En el templo, las ofrendas se depositaban en cofres con forma de trompeta. Allí vio Jesús a los ricos echar mucho y a una viuda pobre echar dos blancas, y dijo que ella había dado más que todos, porque dio todo lo que tenía (Mr 12:41-44).'
      ],
      pensar: 'Jesús dio por hecho que sus discípulos darían, orarían y ayunarían, y les enseñó a hacerlo para el Padre que ve en lo secreto. ¿Qué lugar tienen estas tres prácticas en tu vida, y para quién las haces?'
    },
    {
      id: 'mesias', n: 'Qué Mesías esperaban', ref: 'Lucas 3:15; Juan 1:19-21; Juan 6:14-15; Mateo 11:2-6; Marcos 8:27-33; Mateo 21:4-9; Lucas 24:21; Hechos 1:6-8', fecha: [27, 33],
      visual: [
        img('mj-multitud-rey.webp', 'Al atardecer, en una ladera verde junto al mar de Galilea, una multitud entusiasta de hombres galileos con cestas llenas de pedazos de pan levanta los brazos y señala hacia Jesús, que, visto de espaldas, se aleja solo subiendo hacia lo alto del monte', 'Después de la multiplicación de los panes, la multitud quiso hacer rey a Jesús (Juan 6:14-15). Recreación.'),
        tabla({
          titulo: 'Lo que esperaban y lo que Jesús hizo',
          cab: ['Lo que muchos esperaban', 'Lo que hizo Jesús'],
          filas: [
            ['Un rey que expulsara a los romanos', 'Se retiró cuando quisieron hacerlo rey (Juan 6:15)'],
            ['Un Mesías que no podía morir', 'Anunció que «le era necesario» padecer y morir (Marcos 8:31)'],
            ['Señales que lo probaran todo', 'Hizo señales, pero no las daba a quien solo quería verlas (Mateo 12:39)'],
            ['La restauración inmediata del reino a Israel', 'No la negó, pero dijo que los tiempos son del Padre, y prometió el Espíritu Santo (Hechos 1:6-8)'],
            ['Un rey en un caballo de guerra', 'Entró en Jerusalén humilde, en un asno (Mateo 21:5; Zacarías 9:9)']
          ]
        }),
        cita('Juan 6:14-15', '@@jn/6/14-15')
      ],
      texto: [
        'Entre los Testamentos muestra cómo creció la esperanza del Mesías durante los siglos anteriores, y que no todos esperaban lo mismo. En tiempos de Jesús esa esperanza estaba encendida. Cuando Juan el Bautista empezó a predicar, «el pueblo estaba en expectativa, preguntándose todos en sus corazones si acaso Juan sería el Cristo» (Lc 3:15).',
        ir('Ver Entre los Testamentos: la esperanza del Mesías', R.entre + '#nacio/8'),
        { h: 'Un rey que liberara a Israel' },
        'Para la mayoría, el Mesías sería un rey hijo de David que, con el poder de Dios, expulsaría a los romanos, castigaría a los impíos, reuniría a los dispersos y reinaría con justicia desde Jerusalén. Por eso, después de la multiplicación de los panes, la multitud dijo: «Este verdaderamente es el profeta que había de venir al mundo», y quiso tomarlo por la fuerza para hacerlo rey (Jn 6:14-15). Jesús se retiró solo al monte.',
        { h: 'Un Mesías que no se anunciaba' },
        'Jesús evitó durante su ministerio que lo proclamaran públicamente como Mesías. Cuando Pedro confesó en Cesarea de Filipo: «Tú eres el Cristo», Jesús «les mandó que no dijesen esto de él a ninguno», y comenzó a enseñarles que era necesario que padeciera, muriera y resucitara (Mr 8:29-31). Pedro lo reprendió, porque un Mesías que muere no cabía en su esperanza. Jesús prefería llamarse el Hijo del Hombre, el título de Daniel 7, que no tenía la carga política de la palabra Mesías.',
        'Incluso Juan el Bautista, desde la cárcel, mandó a preguntar: «¿Eres tú aquel que había de venir, o esperaremos a otro?». Jesús le respondió con las señales que Isaías había anunciado: los ciegos ven, los cojos andan y a los pobres se anuncia el evangelio (Mt 11:3-5).',
        { h: '«Nosotros esperábamos»' },
        'Después de la cruz, los discípulos de Emaús dijeron con tristeza: «nosotros esperábamos que él era el que había de redimir a Israel» (Lc 24:21). Jesús resucitado les mostró en las Escrituras que el Cristo debía padecer antes de entrar en su gloria. Aun así, antes de la ascensión le preguntaron: «Señor, ¿restaurarás el reino a Israel en este tiempo?» Jesús no les dijo que esa esperanza fuera falsa, sino que no les tocaba saber los tiempos, y les prometió: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos» (Hch 1:7-8). El reino que Israel esperaba vendrá cuando Cristo vuelva; mientras tanto, la iglesia lleva el evangelio a todas las naciones con el poder del Espíritu.',
        ir('Ver Los últimos tiempos: Israel y los pactos de Dios', R.escatologia + '#temas/1')
      ],
      pensar: 'Muchos esperaban un Mesías que resolviera sus problemas políticos, y no reconocieron al que vino a salvarlos del pecado. ¿Qué esperas tú de Jesús? ¿Lo buscas por lo que puede darte o por quien Él es?'
    }
  ];

  window.__MJ.fe = fe;
})();
