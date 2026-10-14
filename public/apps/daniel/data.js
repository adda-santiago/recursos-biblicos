/* ==========================================================
   Recursos Bíblicos — Daniel · contenido de las rutas
   Estudio de libro: rutas I a IV fijas, más mapas y temas (misma estructura que Hechos).
   Motor: ../assets/js/ruta-estudio.js. Geografía: ../assets/js/imperios-geo.js.
   Línea: autoría de Daniel en el siglo VI a.C.; premilenial y pretribulacional; cuarto reino = Roma;
   Dn 11:36-45 = el anticristo. Las posturas distintas van en bloques { posturas }.
   Se apoya en los recursos de imperios, El exilio y los retornos y Los últimos tiempos.
   Citas textuales: Reina-Valera 1960.
   ========================================================== */
(() => {
  const OTRA = '../';
  const BA = OTRA + 'imperio-babilonico/img/', PE = OTRA + 'imperio-persa/img/', GR = OTRA + 'imperio-griego/img/', RO = OTRA + 'imperio-romano/img/', EX = OTRA + 'exilio/img/';
  const ORIENTE = [[24.0, 18.0], [42.0, 62.0]];
  const MEDIO = [[27.5, 29.0], [39.5, 50.5]];
  const LEVANTE_EGIPTO = [[23.5, 26.0], [39.5, 40.0]];

  /* ---------------- Ruta I · Introducción y trasfondo ---------------- */
  const introduccion = [
    {
      id: 'portada', n: 'Daniel', ref: 'Daniel 1:1-2; 2:20-22; 4:34-35', fecha: [-605, -536],
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: EX + 'exi-daniel-ventana.webp', alt: 'Daniel, ya anciano, de rodillas junto a una ventana abierta de su casa en Babilonia, ora con las manos levantadas', pie: 'Daniel, fiel a Dios en Babilonia (Dn 6:10).', origen: 'ia' } ],
      texto: [
        'El libro de Daniel tiene dos caras. La primera mitad cuenta historias que aprendemos desde niños: Daniel y sus amigos que rechazan la comida del rey, el horno de fuego, la escritura en la pared, el foso de los leones. La segunda mitad contiene algunas de las visiones proféticas más importantes de la Biblia: cuatro bestias, un carnero y un macho cabrío, setenta semanas, los reyes del norte y del sur y la resurrección de los muertos.',
        'Las dos mitades comparten un mensaje: el Dios de Israel gobierna la historia. Lo dice el propio libro una y otra vez: «el Altísimo gobierna el reino de los hombres, y que a quien él quiere lo da» (Dn 4:17). Babilonia, Persia, Grecia y Roma se levantan y caen, pero el reino de Dios «no será jamás destruido» (Dn 2:44).',
        { h: 'Un libro para tiempos difíciles' },
        'Daniel fue escrito para un pueblo que había perdido su tierra, su templo y su rey. Parecía que los dioses de Babilonia habían vencido al Dios de Israel. El libro responde que no: Dios entregó a Judá en manos de Nabucodonosor (Dn 1:2), y es Dios quien decide cuándo termina cada imperio. Por eso Daniel ha sido el libro de los creyentes perseguidos en todas las épocas.',
        { h: 'Cómo recorrer este estudio' },
        'El estudio tiene la misma estructura que el de Hechos. Las cuatro primeras rutas recorren el libro: esta introducción, una visión panorámica, un comentario capítulo por capítulo y la teología de Daniel. Dos rutas de mapas ubican los imperios y los reyes de Daniel 11. Y tres rutas temáticas presentan la vida de Daniel, las profecías cumplidas y Daniel en el Nuevo Testamento.',
        'El estudio se apoya en otros recursos del sitio: los seis imperios, El exilio y los retornos, y Los últimos tiempos, que desarrolla las setenta semanas y los eventos del fin. Toda cita bíblica del texto se puede tocar para leerla.'
      ],
      pensar: 'Daniel vivió casi setenta años en el centro del poder de dos imperios paganos sin dejar de ser fiel a Dios. ¿Qué te enseña su vida sobre ser creyente en un ambiente que no honra a Dios?'
    },
    {
      id: 'autor', n: 'El autor: Daniel', ref: 'Daniel 7:1-2, 15, 28; 8:1, 15; 9:2; 10:2; 12:4-5; Mateo 24:15; Ezequiel 14:14, 20; 28:3', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Testimonios', tabla: {
        titulo: 'Quién escribió Daniel, según la Biblia',
        cab: ['Testimonio', 'Pasaje'],
        filas: [
          ['Daniel escribe en primera persona: «yo Daniel»', 'Dn 7:2, 15, 28; 8:1, 15, 27; 9:2; 10:2; 12:5'],
          ['Daniel escribe el sueño que tuvo', 'Dn 7:1'],
          ['Se le manda sellar el libro', 'Dn 12:4'],
          ['Jesús lo llama «el profeta Daniel»', 'Mt 24:15'],
          ['Ezequiel, su contemporáneo, lo nombra como varón justo y sabio', 'Ez 14:14, 20; 28:3']
        ]
      } } ],
      texto: [
        'El libro lleva el nombre de su protagonista, y la tradición judía y cristiana lo atribuye a él. Daniel, cuyo nombre significa «Dios es mi juez», fue un joven de Judá llevado a Babilonia en el 605 a.C.',
        { h: 'Lo que dice el libro' },
        'Los capítulos 1 al 6 están narrados en tercera persona, como historias sobre Daniel y sus amigos. Pero desde el capítulo 7 el narrador habla en primera persona: «yo Daniel» (Dn 8:15), «en mi visión de noche» (Dn 7:2), «yo Daniel miré atentamente en los libros» (Dn 9:2). Y el texto dice expresamente que Daniel puso por escrito su sueño (Dn 7:1) y que recibió la orden de cerrar y sellar el libro (Dn 12:4). El propio libro se presenta como obra de Daniel.',
        { h: 'Lo que dice Jesús' },
        'El testimonio más importante es el de Jesús. Hablando de los últimos tiempos, dijo: «cuando veáis en el lugar santo la abominación desoladora de que habló el profeta Daniel (el que lee, entienda)…» (Mt 24:15). Jesús trató a Daniel como un profeta real que habló de cosas futuras.',
        { h: 'Lo que dice Ezequiel' },
        'Ezequiel, que fue llevado a Babilonia en el 597 a.C., mencionó a Daniel dos veces. Lo puso junto a Noé y Job como ejemplos de justicia (Ez 14:14, 20), y se burló del rey de Tiro diciendo: «He aquí que tú eres más sabio que Daniel» (Ez 28:3). Que un contemporáneo lo nombre como modelo de justicia y sabiduría encaja con lo que el libro cuenta de él: un joven que ya en sus primeros años en Babilonia era conocido por ambas cosas.',
        { h: 'Profeta, aunque no entre los Profetas' },
        'En la Biblia hebrea, Daniel no está entre los libros proféticos, sino entre los Escritos, junto a los Salmos, Esdras y Crónicas. Probablemente porque Daniel no ejerció el oficio de profeta ante el pueblo, como Isaías o Jeremías, sino que fue un funcionario de la corte que recibió revelaciones. Pero el don profético estaba en él, y así lo reconoció Jesús.'
      ],
      pensar: 'Jesús llamó a Daniel «el profeta» y tomó en serio sus profecías sobre el futuro (Mt 24:15). ¿Qué importancia tiene para tu fe que Jesús mismo confirme la autoridad de las Escrituras?'
    },
    {
      id: 'fecha', n: '¿Cuándo se escribió?', ref: 'Daniel 1:21; 10:1; 12:4; Mateo 24:15', fecha: -536,
      visual: [ { tipo: 'tabla', titulo: 'Argumentos', tabla: {
        titulo: 'Argumentos para la fecha del siglo VI a.C.',
        cab: ['Argumento', 'Detalle'],
        filas: [
          ['El testimonio del libro y de Jesús', 'Daniel escribe en primera persona; Jesús lo llama profeta (Mt 24:15)'],
          ['Los manuscritos del mar Muerto', 'Ocho copias de Daniel en Qumrán; algunas de fines del siglo II a.C., ya consideradas Escritura'],
          ['La Septuaginta', 'Daniel ya estaba traducido al griego en el siglo II a.C.'],
          ['Datos históricos precisos', 'Belsasar, desconocido para los historiadores griegos, aparece correctamente como gobernante de Babilonia'],
          ['Profecías posteriores al siglo II', 'El cuarto reino (Roma) y la destrucción de Jerusalén en el año 70 (Dn 9:26) son posteriores a cualquier fecha propuesta']
        ]
      } } ],
      texto: [
        'La fecha de Daniel es una de las cuestiones más discutidas sobre el libro, porque está unida a la pregunta de si Dios puede revelar el futuro.',
        { posturas: {
          titulo: '¿Siglo VI o siglo II a.C.?',
          a: { n: 'Siglo VI a.C.', t: 'Daniel escribió el libro hacia el 536 a.C., al final de su vida, en el reinado de Ciro (Dn 1:21; 10:1). Sus visiones anuncian siglos de historia antes de que ocurrieran.' },
          b: { n: 'Siglo II a.C.', t: 'Muchos estudiosos críticos sostienen que el libro fue escrito hacia el 165 a.C., durante la persecución de Antíoco IV, porque Daniel 11 describe ese período con tanto detalle que lo consideran historia escrita como si fuera profecía.' },
          c: 'Este estudio sigue la fecha del siglo VI. La postura del siglo II nace en gran parte de no aceptar que Dios revele el futuro. Pero el libro anuncia también hechos posteriores al 165 a.C.: el cuarto reino, Roma, y la destrucción de Jerusalén y del santuario en el año 70 (Dn 9:26).'
        } },
        { h: 'Los manuscritos de Qumrán' },
        'En las cuevas de Qumrán, junto al mar Muerto, se encontraron fragmentos de ocho copias de Daniel. Las más antiguas son de fines del siglo II a.C., pocas décadas después de la fecha que proponen los críticos. Para entonces el libro ya se copiaba y se citaba como Escritura. Además, Daniel había sido traducido al griego en la Septuaginta. Es difícil que un libro escrito en el 165 a.C. fuera aceptado como Escritura antigua y traducido en tan poco tiempo.',
        { h: 'La cuestión de fondo' },
        'El argumento principal para la fecha tardía es que Daniel 11 describe con demasiada exactitud la historia de los reyes de Siria y Egipto hasta Antíoco IV. Pero si Dios conoce el futuro, esa exactitud no es un problema, sino una prueba. Dios mismo dice: «Yo soy Dios, y no hay otro… que anuncio lo por venir desde el principio» (Is 46:9-10). Jesús confirmó la autoridad de Daniel, y la fe cristiana acepta que la profecía es posible.'
      ],
      pensar: 'Dios dice que él anuncia «lo por venir desde el principio» (Is 46:10). ¿Cómo fortalece tu fe saber que la Biblia contiene profecías cumplidas con exactitud?'
    },
    {
      id: 'daniel-hombre', n: 'Daniel, el hombre', ref: 'Daniel 1:3-7, 17-21; 2:48-49; 5:11-12; 6:1-4; 9:23; 10:11', fecha: [-605, -536],
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-escuela-escribas.webp', alt: 'Jóvenes judíos aprenden a escribir en tablillas de arcilla en la corte de Babilonia', pie: 'Daniel y sus amigos, formados en la corte de Babilonia (Dn 1:4-5).', origen: 'ia' } ],
      texto: [
        'Daniel es uno de los pocos personajes de la Biblia de quien no se registra ningún pecado. No era perfecto, y él mismo confesó su pecado junto al de su pueblo (Dn 9:20). Pero su vida fue de una integridad excepcional durante casi setenta años.',
        { h: 'Un joven noble' },
        'Daniel era de linaje real o noble de Judá (Dn 1:3). Fue llevado a Babilonia siendo un muchacho, probablemente de unos quince años, en el 605 a.C. Allí fue seleccionado con otros jóvenes de buen parecer y sabiduría para servir en la corte. Recibió un nombre babilonio, Beltsasar, que invocaba a un dios pagano, y estudió durante tres años la lengua y la literatura de los caldeos.',
        { h: 'Al servicio de reyes' },
        'Daniel sirvió a lo largo de todo el exilio: bajo Nabucodonosor, que lo hizo gobernador de la provincia de Babilonia y jefe de los sabios (Dn 2:48); en tiempos de Belsasar, cuando ya era un anciano casi olvidado al que la reina madre recordó (Dn 5:11); bajo Darío de Media, que lo puso entre los tres gobernadores del reino (Dn 6:2); y hasta el tercer año de Ciro (Dn 10:1). Vio caer a Babilonia y nacer el imperio persa.',
        { h: 'Un hombre íntegro' },
        'Cuando sus enemigos quisieron acusarlo, no encontraron nada: «no podían hallar ocasión alguna o falta, porque él era fiel, y ningún vicio ni falta fue hallado en él» (Dn 6:4). Su única «culpa» posible era su fe. Tres veces un ángel lo llama «muy amado» (Dn 9:23; 10:11, 19).',
        { h: 'Un hombre de oración' },
        'El secreto de Daniel era su vida de oración. Oró con sus amigos para que Dios le revelara el sueño del rey (Dn 2:17-18). Oraba tres veces al día con las ventanas abiertas hacia Jerusalén (Dn 6:10). Confesó el pecado de su pueblo con ayuno, cilicio y ceniza (Dn 9:3). Y ayunó tres semanas buscando entender una visión (Dn 10:2-3). La ruta temática La vida de Daniel desarrolla estos aspectos.'
      ],
      pensar: 'Los enemigos de Daniel no encontraron en él ninguna falta, salvo su fidelidad a Dios (Dn 6:4-5). ¿Qué dirían de ti quienes observan tu trabajo y tu conducta?'
    },
    {
      id: 'trasfondo', n: 'El trasfondo: de Babilonia a Persia', ref: 'Daniel 1:1-2; 5:30-31; 6:28; 10:1', fecha: [-605, -536],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'El imperio babilónico de Nabucodonosor (Dn 1–4).', fecha: -570, estado: { view: MEDIO, capas: ['babilonia-570'], lugares: ['babilonia', 'jerusalen', 'susa'] } },
          { t: 'El imperio persa de Ciro (Dn 6; 9–12).', fecha: -539, estado: { view: ORIENTE, capas: ['persia-539'], lugares: ['babilonia', 'susa', 'ecbatana', 'jerusalen'], trazos: ['caida-539'] } }
        ] },
        { tipo: 'tabla', titulo: 'Reyes', tabla: {
          titulo: 'Los reyes del libro de Daniel',
          cab: ['Rey', 'Reinado', 'En Daniel'],
          filas: [
            ['Nabucodonosor II', '605–562 a.C.', 'Caps. 1–4'],
            ['Evil-merodac', '562–560 a.C.', 'No aparece; libera a Joaquín (2 R 25:27)'],
            ['Nabonido (y su hijo Belsasar como corregente)', '556–539 a.C.', 'Belsasar: caps. 5, 7, 8'],
            ['Darío de Media', '539 a.C.', 'Caps. 5:31; 6; 9'],
            ['Ciro el Grande', '539–530 a.C.', 'Caps. 1:21; 6:28; 10']
          ],
          nota: 'Fechas aproximadas.'
        } }
      ],
      texto: [
        'Daniel vivió en el centro de dos de los imperios que él mismo vio en sus visiones: Babilonia y Persia.',
        { h: 'Babilonia' },
        'Nabucodonosor II heredó de su padre el imperio neobabilónico y lo llevó a su máximo esplendor. Venció a Egipto en Carquemis en el 605 a.C., sometió a Judá y reconstruyó Babilonia con la Puerta de Ishtar, los grandes muros y los famosos jardines colgantes. Reinó cuarenta y tres años. «¿No es ésta la gran Babilonia que yo edifiqué…?», dijo con orgullo antes de ser humillado (Dn 4:30).',
        'Después de su muerte, Babilonia decayó rápidamente. Tres reyes se sucedieron en seis años, hasta que Nabonido tomó el trono. Nabonido pasó diez años en el oasis de Tema, en Arabia, y dejó el gobierno de Babilonia en manos de su hijo Belsasar.',
        { h: 'Persia' },
        'Mientras Babilonia decaía, Ciro, rey de un pequeño reino persa, unió a medos y persas, conquistó Lidia y formó el imperio más grande conocido hasta entonces. En el 539 a.C., su ejército entró en Babilonia prácticamente sin batalla. Esa noche murió Belsasar (Dn 5:30). Ciro permitió a los judíos volver a Jerusalén, y Daniel vivió por lo menos hasta el tercer año de su reinado (Dn 10:1).',
        'Daniel no volvió a Jerusalén; era ya muy anciano. Pero oró por el regreso y recibió las visiones más extensas sobre el futuro de su pueblo. Vio con sus propios ojos lo que había anunciado en el capítulo 2 y en el 7: la cabeza de oro dio paso al pecho de plata, y el león, al oso.',
        'Los recursos El imperio babilónico y El imperio persa recorren estos imperios en detalle.'
      ],
      pensar: 'Nabucodonosor dijo: «¿No es ésta la gran Babilonia que yo edifiqué?» y fue humillado (Dn 4:30-31). ¿Qué te enseña esto sobre el orgullo por lo que uno logra?'
    },
    {
      id: 'belsasar', n: 'Belsasar, el rey que la historia olvidó', ref: 'Daniel 5:1-7, 16, 29-30; 7:1; 8:1', fecha: -539,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-banquete-belsasar.webp', alt: 'El banquete de Belsasar: una mano escribe en la pared del palacio', pie: 'El banquete de Belsasar (Dn 5:5).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Hallazgo', tabla: {
          titulo: 'Belsasar en los textos de Babilonia',
          cab: ['Texto', 'Lo que dice'],
          filas: [
            ['Cilindro de Nabonido (Ur)', 'Nabonido ora por su hijo primogénito Belsasar'],
            ['Crónica de Nabonido', 'Mientras Nabonido estaba en Tema, el príncipe heredero estaba en Babilonia con el ejército'],
            ['Relato poético de Nabonido', 'Nabonido confió el reino a su hijo mayor']
          ],
          nota: 'Por eso Belsasar ofrece a Daniel ser «el tercer señor en el reino» (Dn 5:16): el primero era Nabonido, el segundo, Belsasar.'
        } }
      ],
      texto: [
        'Durante mucho tiempo, Belsasar fue el ejemplo favorito de quienes decían que el libro de Daniel tenía errores históricos.',
        { h: 'Un rey desconocido' },
        'Los historiadores griegos que escribieron sobre Babilonia, como Heródoto y Jenofonte, y la lista de reyes del sacerdote babilonio Beroso, no mencionaban a ningún Belsasar. Según ellos, el último rey de Babilonia fue Nabonido. Por eso se dijo que Belsasar era un personaje inventado, prueba de que el autor de Daniel no conocía la historia de Babilonia y escribió siglos después.',
        { h: 'Lo que encontró la arqueología' },
        'En el siglo XIX se encontraron en Babilonia y en Ur textos cuneiformes que mencionan a Belsasar, en acadio Bel-shar-usur, como hijo mayor de Nabonido. Un cilindro de Ur contiene una oración de Nabonido por su hijo Belsasar. La Crónica de Nabonido explica que el rey pasó diez años en el oasis de Tema, en Arabia, mientras el príncipe heredero gobernaba en Babilonia. Otro texto dice que Nabonido le confió el reino.',
        'El autor de Daniel conocía un dato que los historiadores griegos habían perdido: en los últimos años de Babilonia, quien gobernaba en la capital era Belsasar.',
        { h: 'El tercer señor del reino' },
        'Hay un detalle todavía más preciso. Cuando Belsasar promete recompensar a quien interprete la escritura en la pared, ofrece hacerlo «el tercer señor en el reino» (Dn 5:7, 16, 29). ¿Por qué no el segundo? Porque el segundo era él mismo, y el primero, su padre Nabonido, ausente. Un autor que escribiera siglos después, sin conocer esa situación, difícilmente habría elegido ese detalle.',
        'La historia de Belsasar enseña prudencia: lo que un día parece un error de la Biblia puede ser solo un hueco en nuestro conocimiento.'
      ],
      pensar: 'Durante siglos se dijo que Belsasar no había existido, hasta que la arqueología lo encontró. ¿Cómo responder con paciencia y confianza cuando algo de la Biblia es cuestionado?'
    },
    {
      id: 'dario', n: '¿Quién era Darío de Media?', ref: 'Daniel 5:31; 6:1, 28; 9:1; 11:1', fecha: -539,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: PE + 'persia-daniel-foso.webp', alt: 'El profeta Daniel, anciano, de pie en calma dentro del foso de los leones', pie: 'Daniel en el foso, en tiempos de Darío (Dn 6:22).', origen: 'ia' } ],
      texto: [
        'Según Daniel, después de la caída de Babilonia, «Darío de Media tomó el reino, siendo de sesenta y dos años» (Dn 5:31). Fue él quien organizó el reino en ciento veinte sátrapas y quien echó a Daniel al foso de los leones (Dn 6). Daniel recibió en su primer año la profecía de las setenta semanas (Dn 9:1).',
        'El problema es que ningún documento fuera de la Biblia menciona a un rey llamado Darío de Media en ese momento. Después de Ciro, el primer Darío conocido es Darío I, que reinó desde el 522 a.C. ¿Quién era, entonces, el Darío de Daniel?',
        { posturas: {
          titulo: 'Tres identificaciones propuestas',
          a: { n: 'Un gobernador: Gubaru', t: 'Darío sería Gubaru (o Ugbaru), el general que según la Crónica de Nabonido tomó Babilonia y fue nombrado gobernador de la región. Daniel lo llamaría rey porque gobernaba Babilonia bajo la autoridad de Ciro; el texto dice que «tomó el reino» (Dn 5:31) y que «vino a ser rey» sobre el reino de los caldeos (Dn 9:1).' },
          b: { n: 'Ciro mismo', t: 'Darío sería otro nombre o título de Ciro. Daniel 6:28 podría traducirse «en el reinado de Darío, es decir, en el reinado de Ciro el persa». Ciro tenía ascendencia meda por parte de su madre, según algunas fuentes, y tenía unos sesenta y dos años en el 539.' },
          c: 'Ambas identificaciones son posibles y respetan el texto. La falta de documentos no prueba que Darío no existiera: el caso de Belsasar muestra que la historia de esos años tiene vacíos. Este estudio presenta ambas sin decidir entre ellas.'
        } },
        { h: 'Lo importante del relato' },
        'Más allá de su identidad, Darío de Media aparece como un rey que estimaba a Daniel, que fue engañado por sus consejeros para firmar un decreto que no podía revocarse, y que pasó la noche sin dormir esperando que el Dios de Daniel lo librara. Al amanecer, corrió al foso. Su decreto final reconoce al Dios de Daniel como «el Dios viviente», cuyo «reino no será jamás destruido» (Dn 6:26).'
      ],
      pensar: 'El rey Darío, aunque pagano, terminó proclamando que el Dios de Daniel es «el Dios viviente» (Dn 6:26). ¿Cómo puede la fidelidad de un creyente llevar a otros a reconocer a Dios?'
    },
    {
      id: 'dos-lenguas', n: 'Un libro en dos lenguas', ref: 'Daniel 1:1–2:4; 2:4–7:28; 8:1–12:13', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Estructura', tabla: {
        titulo: 'Las dos lenguas de Daniel',
        cab: ['Pasaje', 'Lengua', 'Contenido', 'Destinatario principal'],
        filas: [
          ['Dn 1:1–2:4a', 'Hebreo', 'Introducción: Daniel en la corte', 'Israel'],
          ['Dn 2:4b–7:28', 'Arameo', 'Los reinos de este mundo y el reino de Dios', 'Las naciones'],
          ['Dn 8:1–12:13', 'Hebreo', 'El futuro de Israel bajo los imperios', 'Israel']
        ],
        nota: 'El cambio al arameo ocurre en medio de una frase: «Entonces hablaron los caldeos al rey en lengua aramea» (Dn 2:4).'
      } } ],
      texto: [
        'Daniel es uno de los dos libros de la Biblia escritos en parte en arameo, junto con Esdras. Es una característica única que ayuda a entender su estructura.',
        { h: 'El cambio de lengua' },
        'El libro comienza en hebreo. En el capítulo 2, cuando los sabios de Babilonia responden al rey, el texto dice: «Entonces hablaron los caldeos al rey en lengua aramea» (Dn 2:4), y desde allí, en medio del versículo, el libro sigue en arameo hasta el final del capítulo 7. En el capítulo 8 vuelve al hebreo hasta el final.',
        'El arameo era la lengua internacional de la época, usada en la administración de Babilonia y de Persia, y los judíos la aprendieron en el exilio. El hebreo era la lengua de Israel y de sus Escrituras.',
        { h: 'Por qué dos lenguas' },
        'La división no parece casual. Los capítulos en arameo, del 2 al 7, tratan de los reinos de este mundo y su relación con el reino de Dios: la estatua de los cuatro imperios, el orgullo de Nabucodonosor, la caída de Belsasar, el decreto de Darío y las cuatro bestias. Están escritos en la lengua de las naciones, porque su mensaje es para ellas: Dios gobierna sobre todos los reinos.',
        'Los capítulos en hebreo, del 8 al 12, tratan del futuro de Israel: el santuario, Jerusalén, las setenta semanas, la persecución y la liberación del pueblo de Daniel. Están escritos en la lengua del pueblo de Dios.',
        { h: 'Una estructura cuidada' },
        'Además, los capítulos en arameo forman un quiasmo, una estructura en espejo, que se estudia en la ruta Visión panorámica. Lejos de ser una recopilación desordenada, Daniel es un libro construido con gran cuidado.',
        'Que el autor dominara el hebreo y el arameo encaja con lo que el libro cuenta de Daniel: un judío formado en la corte de Babilonia.'
      ],
      pensar: 'Daniel escribió en la lengua de las naciones el mensaje de que Dios gobierna sobre todos los reinos. ¿Cómo puedes comunicar la verdad de Dios en el lenguaje de quienes te rodean?'
    },
    {
      id: 'interpretar', n: 'Cómo interpretar Daniel', ref: 'Daniel 2:36-45; 7:15-27; 8:15-26; 9:22-27; 12:8-10', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Principios', tabla: {
        titulo: 'Principios para leer las visiones de Daniel',
        cab: ['Principio', 'Ejemplo'],
        filas: [
          ['La Biblia interpreta sus propios símbolos', 'Las bestias son reyes o reinos (Dn 7:17); el carnero es Media y Persia (Dn 8:20)'],
          ['Lo que no es símbolo se lee literalmente', 'Babilonia, Persia y Grecia son reinos reales; las semanas son de años'],
          ['Las visiones se repiten y amplían', 'Dn 2, 7 y 8 describen la misma historia con más detalle cada vez'],
          ['Un cumplimiento cercano puede anticipar uno final', 'Antíoco IV (Dn 8; 11:21-35) anticipa al anticristo (Dn 7:24-25; 11:36-45)'],
          ['El libro se entiende mejor al acercarse el fin', '«Muchos correrán de aquí para allá, y la ciencia se aumentará» (Dn 12:4)']
        ]
      } } ],
      texto: [
        'La segunda mitad de Daniel pertenece a un género que se llama apocalíptico, de la palabra griega apokálypsis, revelación. Es el mismo género del Apocalipsis de Juan y de partes de Ezequiel y Zacarías. Usa visiones, sueños, símbolos, animales, números y ángeles que explican lo que el profeta ve.',
        { h: 'El texto explica sus símbolos' },
        'La gran ventaja de Daniel es que el propio texto interpreta la mayoría de sus símbolos. Daniel explica a Nabucodonosor que la cabeza de oro es él (Dn 2:38). Un ángel explica a Daniel que las cuatro bestias son cuatro reyes (Dn 7:17), que el carnero de dos cuernos es Media y Persia, y que el macho cabrío es Grecia (Dn 8:20-21). Gabriel explica las setenta semanas (Dn 9:24-27). Antes de buscar interpretaciones propias, hay que escuchar las que da la Escritura.',
        { h: 'Lectura literal' },
        'Cuando el texto habla de reinos, reyes y acontecimientos históricos, este estudio los entiende como reales. Las profecías sobre Persia y Grecia se cumplieron con precisión literal, como se ve en la ruta Profecías cumplidas, y eso permite esperar lo mismo de las que faltan.',
        { h: 'Visiones paralelas' },
        'Daniel presenta la historia varias veces, cada vez con más detalle. La estatua de Daniel 2 muestra cuatro reinos; las bestias de Daniel 7 vuelven sobre los mismos cuatro, agregando el cuerno pequeño; Daniel 8 se detiene en el segundo y el tercero; y Daniel 11 recorre siglos de historia casi reinado por reinado.',
        { h: 'Un tipo y su cumplimiento' },
        'Antíoco IV Epífanes, el rey sirio que profanó el templo en el 167 a.C., es descrito en Daniel 8 y 11:21-35. Pero muchos rasgos de esos pasajes van más allá de Antíoco y se cumplirán en el anticristo de los últimos tiempos (Dn 7:24-25; 11:36-45). Antíoco es un anticipo, un tipo, del que vendrá. Jesús confirmó que la abominación desoladora de Daniel todavía era futura en su tiempo (Mt 24:15).'
      ],
      pensar: 'Daniel recibió visiones que él mismo no entendía del todo, y se le dijo que muchos las entenderían al acercarse el tiempo del fin (Dn 12:8-9). ¿Con qué actitud debemos estudiar las profecías que todavía no comprendemos del todo?'
    },
    {
      id: 'tema', n: 'Tema y propósito: el Altísimo gobierna', ref: 'Daniel 2:20-21, 44; 4:17, 25, 32, 34-35; 7:27', fecha: [-605, -536],
      visual: [ { tipo: 'cita', titulo: 'Versículo clave', texto: 'Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre,', ref: 'Daniel 2:44' } ],
      texto: [
        'Si hubiera que resumir Daniel en una frase, sería la que el propio libro repite tres veces en el capítulo 4: «el Altísimo gobierna el reino de los hombres, y que a quien él quiere lo da» (Dn 4:17; ver también 4:25, 32).',
        { h: 'La soberanía de Dios sobre la historia' },
        'Desde el primer versículo, Daniel muestra que los acontecimientos que parecían una victoria de Babilonia eran decisión de Dios: «el Señor entregó en sus manos a Joacim rey de Judá» (Dn 1:2). Dios da reinos y los quita: «El muda los tiempos y las edades; quita reyes, y pone reyes» (Dn 2:21). Los imperios más poderosos son, en la visión de Daniel, una estatua que una piedra desmenuza, o bestias cuyo dominio Dios quita.',
        { h: 'El reino que no tendrá fin' },
        'El tema central es el reino de Dios, que vencerá y reemplazará a todos los reinos de los hombres. «Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido» (Dn 2:44). En Daniel 7, ese reino es dado a uno como un hijo de hombre y a los santos del Altísimo (Dn 7:14, 27). Jesús comenzó su predicación anunciando ese reino (Mr 1:15) y se identificó con el Hijo del Hombre de Daniel.',
        { h: 'Los propósitos del libro' },
        'Daniel se escribió, primero, para consolar a un pueblo derrotado: Dios no había sido vencido por los dioses de Babilonia, y tenía un plan para su pueblo. Segundo, para enseñar a vivir fielmente en un ambiente pagano, como Daniel y sus amigos. Tercero, para revelar el futuro de Israel bajo los imperios gentiles, hasta la venida del Mesías y el establecimiento de su reino. Y cuarto, para preparar a los creyentes de los últimos tiempos, cuando el libro sería entendido con más claridad (Dn 12:4, 9-10).',
        { h: 'Para todo creyente' },
        'Para el creyente de hoy, Daniel sigue siendo un libro de esperanza. Los gobiernos cambian, los imperios se levantan y caen, pero Dios sigue en su trono, y su reino vendrá. Por eso Daniel pudo bendecir a Dios: «Sea bendito el nombre de Dios de siglos en siglos, porque suyos son el poder y la sabiduría» (Dn 2:20).'
      ],
      pensar: 'Daniel afirma que Dios «quita reyes, y pone reyes» (Dn 2:21). ¿Cómo te ayuda esta verdad a mirar con paz los cambios políticos y las crisis de tu tiempo?'
    }
  ];

  /* ---------------- Ruta II · Visión panorámica ---------------- */
  const panorama = [
    {
      id: 'vistazo', n: 'Daniel de un vistazo', ref: 'Daniel 1–12', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Ficha', tabla: {
        titulo: 'Daniel en cifras',
        cab: ['Dato', 'Daniel'],
        filas: [
          ['Extensión', '12 capítulos y 357 versículos (RV 1960)'],
          ['Período', 'Del 605 a.C. (Dn 1:1) al 536 a.C. (Dn 10:1)'],
          ['Lugar', 'Babilonia y Susa'],
          ['Lenguas', 'Hebreo (1:1–2:4a; 8–12) y arameo (2:4b–7:28)'],
          ['Dos mitades', 'Historias (1–6) y visiones (7–12)'],
          ['Palabras más repetidas', '«Rey» (181 veces) y «reino» (62)'],
          ['Versículo clave', 'Daniel 2:44; 4:17'],
          ['Cristo en Daniel', 'La piedra, el cuarto en el horno, el Hijo del Hombre, el Mesías Príncipe']
        ],
        nota: 'Conteos sobre el texto de la RV 1960 de este sitio.'
      } } ],
      texto: [
        'La ruta de introducción presentó al autor, la fecha y el trasfondo. Esta ruta mira el libro completo desde arriba: su estructura, sus visiones paralelas, sus palabras clave y sus grandes temas.',
        { h: 'Un libro sobre reyes y reinos' },
        'Daniel tiene 357 versículos en la RV 1960. La palabra «rey» aparece 181 veces y «reino» 62: es un libro sobre el poder. Pero el título que más importa es otro, que aparece 14 veces: «el Altísimo». Los reyes de la tierra se suceden; el Altísimo gobierna sobre todos ellos.',
        { h: 'Cerca de setenta años' },
        'El libro cubre el exilio completo. Comienza en el 605 a.C., cuando Daniel es llevado a Babilonia, y su última visión es del tercer año de Ciro, hacia el 536 a.C. En ese tiempo, el pueblo de Dios perdió su tierra, su templo y su rey, y comenzó a volver.',
        { h: 'Dos mitades' },
        'El libro se divide claramente en dos. Los capítulos 1 al 6 son relatos sobre Daniel y sus amigos en la corte, contados en tercera persona y en orden cronológico. Los capítulos 7 al 12 son visiones que Daniel recibe, contadas en primera persona, también en orden cronológico entre sí. Pero las dos series se superponen en el tiempo: las visiones de los capítulos 7 y 8 ocurrieron durante el reinado de Belsasar, antes de la escena del banquete del capítulo 5.',
        { h: 'Profecía y vida' },
        'Las dos mitades se iluminan mutuamente. Las historias muestran cómo vivir fielmente bajo los reinos de este mundo; las visiones muestran que esos reinos tienen los días contados y que el reino de Dios vendrá. La fidelidad de Daniel en la primera mitad se sostiene en la esperanza que recibe en la segunda.',
        'Las estaciones siguientes presentan el bosquejo, la estructura en espejo de los capítulos en arameo, las visiones comparadas, la cronología, las palabras y versículos clave y los grandes temas.'
      ],
      pensar: 'Daniel es un libro lleno de reyes, pero el título más importante es el del Altísimo. ¿Qué lugar ocupa Dios frente a las autoridades y poderes que influyen en tu vida?'
    },
    {
      id: 'bosquejo', n: 'Bosquejo del libro', ref: 'Daniel 1–12', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Bosquejo', tabla: {
        titulo: 'Bosquejo de Daniel',
        cab: ['Parte', 'Capítulos', 'Contenido'],
        filas: [
          ['Introducción', '1', 'Daniel y sus amigos fieles en la corte de Babilonia'],
          ['I. Historias de los reinos (en arameo)', '2–6', 'La estatua; el horno de fuego; la locura de Nabucodonosor; el banquete de Belsasar; el foso de los leones'],
          ['II. Visiones de los reinos', '7–8', 'Las cuatro bestias y el Hijo del Hombre; el carnero y el macho cabrío'],
          ['III. El futuro de Israel', '9', 'La oración de Daniel y las setenta semanas'],
          ['IV. La última visión', '10–12', 'La guerra espiritual; los reyes del norte y del sur; el anticristo; la resurrección']
        ]
      } } ],
      texto: [
        'El libro de Daniel se puede bosquejar de varias maneras. La tabla presenta una sencilla, que sigue el contenido.',
        { h: 'Introducción (capítulo 1)' },
        'El primer capítulo presenta el escenario y a los protagonistas. Daniel, Ananías, Misael y Azarías son llevados a Babilonia, reciben nombres paganos y educación caldea, pero se proponen no contaminarse. Dios les da sabiduría superior a la de todos los sabios del reino. El capítulo termina diciendo que Daniel continuó hasta el primer año de Ciro (Dn 1:21): todo el exilio.',
        { h: 'Historias de los reinos (capítulos 2 al 6)' },
        'Cinco relatos muestran a Dios actuando ante reyes paganos. En el capítulo 2, Dios revela a Nabucodonosor la historia de los imperios. En el 3, libra a los amigos de Daniel del horno de fuego. En el 4, humilla a Nabucodonosor y lo restaura. En el 5, juzga a Belsasar. En el 6, libra a Daniel de los leones. En todos, un rey pagano termina reconociendo al Dios de Israel.',
        { h: 'Visiones de los reinos (capítulos 7 y 8)' },
        'Daniel ve cuatro bestias que suben del mar y al Anciano de días que entrega el reino eterno a uno como un hijo de hombre (cap. 7). Luego ve un carnero y un macho cabrío, que representan a Persia y Grecia, y un cuerno pequeño que profana el santuario (cap. 8).',
        { h: 'El futuro de Israel (capítulo 9)' },
        'Al leer a Jeremías, Daniel ora por su pueblo y recibe la profecía de las setenta semanas, que anuncia la venida y la muerte del Mesías y los acontecimientos del fin.',
        { h: 'La última visión (capítulos 10 al 12)' },
        'La visión final ocupa tres capítulos. Comienza mostrando la guerra espiritual detrás de los reinos (cap. 10), recorre la historia de Persia, Grecia y los reyes del norte y del sur hasta Antíoco IV, salta al rey de los últimos tiempos (cap. 11) y termina con la gran tribulación, la liberación del pueblo de Daniel y la resurrección de los muertos (cap. 12).'
      ],
      pensar: 'En todos los relatos de Daniel 2 al 6, un rey pagano termina reconociendo al Dios de Israel. ¿Qué te enseña esto sobre el poder del testimonio de los creyentes ante los que tienen autoridad?'
    },
    {
      id: 'quiasmo', n: 'Una estructura en espejo', ref: 'Daniel 2–7', fecha: [-603, -539],
      visual: [ { tipo: 'tabla', titulo: 'El quiasmo', tabla: {
        titulo: 'Los capítulos en arameo forman un espejo',
        cab: ['', 'Capítulo', 'Tema', 'Capítulo', ''],
        filas: [
          ['A', '2', 'Cuatro reinos y el reino de Dios (sueño de la estatua)', '7', 'A′ (cuatro bestias)'],
          ['B', '3', 'Fieles librados de la muerte (el horno)', '6', 'B′ (el foso)'],
          ['C', '4', 'Un rey soberbio juzgado: Nabucodonosor se humilla', '5', 'C′ Belsasar no se humilla']
        ],
        nota: 'Los pares se corresponden de afuera hacia adentro: 2 con 7, 3 con 6, 4 con 5.'
      } } ],
      texto: [
        'Los capítulos escritos en arameo, del 2 al 7, no solo tienen la misma lengua: forman una estructura en espejo que los estudiosos llaman quiasmo, por la letra griega ji, que tiene forma de X. Los capítulos se corresponden de a pares, del exterior hacia el centro.',
        { h: 'A: cuatro reinos (capítulos 2 y 7)' },
        'Los capítulos 2 y 7 presentan la misma historia de cuatro reinos sucesivos, seguidos del reino eterno de Dios. En el capítulo 2, la ve un rey pagano como una estatua de metales; en el 7, la ve Daniel como cuatro bestias. Lo que para Nabucodonosor era una estatua brillante y valiosa, para Dios son bestias que devoran.',
        { h: 'B: fieles librados (capítulos 3 y 6)' },
        'Los capítulos 3 y 6 cuentan cómo creyentes fieles se negaron a obedecer un decreto que los obligaba a adorar a otro que no fuera Dios, y fueron condenados a muerte: los amigos de Daniel al horno de fuego, y Daniel al foso de los leones. En ambos casos, Dios los libró, y el rey pagano terminó alabando al Dios de Israel.',
        { h: 'C: reyes soberbios (capítulos 4 y 5)' },
        'En el centro están dos reyes de Babilonia ante el juicio de Dios. Nabucodonosor se ensoberbeció, fue humillado, vivió como una bestia, y al reconocer al Altísimo recuperó su reino. Belsasar, que sabía todo esto, no se humilló, profanó los vasos del templo y perdió el reino y la vida esa misma noche. Daniel se lo recordó: «Y tú, su hijo Belsasar, no has humillado tu corazón, sabiendo todo esto» (Dn 5:22).',
        { h: 'El mensaje del espejo' },
        'El centro de un quiasmo suele contener el mensaje principal. Aquí el centro es la soberanía de Dios sobre los reyes orgullosos: el Altísimo gobierna, humilla al soberbio y exalta al humilde. Alrededor de ese centro, los fieles son librados, y los reinos de este mundo dan paso al reino de Dios.'
      ],
      pensar: 'Nabucodonosor se humilló y fue restaurado; Belsasar no se humilló, aunque sabía lo ocurrido, y lo perdió todo (Dn 5:22). ¿Qué lecciones de la experiencia de otros estás dispuesto a aprender?'
    },
    {
      id: 'visiones', n: 'Las visiones comparadas', ref: 'Daniel 2:31-45; 7:1-28; 8:1-27; 11:2-45', fecha: [-605, -536],
      visual: [
        { tipo: 'tabla', titulo: 'Comparación', tabla: {
          titulo: 'Las visiones paralelas de Daniel',
          cab: ['Reino', 'Daniel 2', 'Daniel 7', 'Daniel 8', 'Daniel 11'],
          filas: [
            ['Babilonia', 'Cabeza de oro', 'León con alas de águila', '—', '—'],
            ['Media y Persia', 'Pecho y brazos de plata', 'Oso con tres costillas', 'Carnero de dos cuernos', 'Tres reyes y un cuarto rico (v. 2)'],
            ['Grecia', 'Vientre y muslos de bronce', 'Leopardo con cuatro alas y cuatro cabezas', 'Macho cabrío; el cuerno se quiebra y salen cuatro', 'Rey valiente; reino repartido (v. 3-4); reyes del norte y del sur (v. 5-35)'],
            ['Roma', 'Piernas de hierro', 'Bestia espantosa con dientes de hierro', '—', '—'],
            ['Forma final', 'Pies de hierro y barro; diez dedos', 'Diez cuernos y el cuerno pequeño', '(Cuerno pequeño: Antíoco IV, tipo)', 'El rey que hará su voluntad (v. 36-45)'],
            ['Reino de Dios', 'La piedra que llena la tierra', 'El Hijo del Hombre y los santos', 'El Príncipe de los príncipes', 'Liberación y resurrección (12:1-3)']
          ]
        } },
        { tipo: 'imagen', titulo: 'La estatua', src: RO + 'roma-estatua-daniel.webp', alt: 'Una estatua colosal con cabeza de oro, pecho de plata, vientre de bronce, piernas de hierro y pies de hierro y barro, golpeada por una piedra', pie: 'La estatua de Daniel 2.', origen: 'ia' }
      ],
      texto: [
        'Una de las claves para entender Daniel es ver que sus visiones son paralelas: describen la misma historia una y otra vez, desde ángulos distintos y con detalle creciente. La tabla las compara.',
        { h: 'Cuatro reinos' },
        'Daniel 2 y Daniel 7 presentan cuatro reinos sucesivos. La Escritura misma identifica los dos primeros: la cabeza de oro es Nabucodonosor, es decir, Babilonia (Dn 2:38), y el carnero de Daniel 8, que corresponde al segundo reino, es Media y Persia (Dn 8:20). El macho cabrío es Grecia (Dn 8:21). El cuarto reino, más fuerte que todos, que desmenuza como el hierro, es Roma, que sucedió a Grecia como poder mundial.',
        { posturas: {
          titulo: '¿Cuál es el cuarto reino?',
          a: { n: 'Roma', t: 'El cuarto reino es Roma. Siguió a Grecia, fue más fuerte y extenso, y dominaba el mundo cuando vino el Mesías, la piedra cortada no con mano. Su forma final, los diez cuernos, es futura. Es la interpretación de Jesús y de la iglesia antigua (Mt 24:15; Lc 21:20-24).' },
          b: { n: 'Grecia', t: 'Los que fechan Daniel en el siglo II a.C. dividen Media y Persia en dos reinos y hacen de Grecia el cuarto, para que todas las profecías terminen en Antíoco IV.' },
          c: 'Este estudio sigue la primera postura. El propio Daniel presenta a Media y Persia como un solo reino, el carnero de dos cuernos (Dn 8:20), y el reino de Dios no llegó en tiempos de Antíoco.'
        } },
        { h: 'Detalle creciente' },
        'Daniel 8 se detiene en el segundo y el tercer reino, y en un cuerno pequeño que salió de uno de los cuatro reinos griegos: Antíoco IV. Daniel 11 recorre con asombroso detalle la historia de los reyes del norte, Siria, y del sur, Egipto, hasta Antíoco IV, y luego salta al rey de los últimos tiempos. La ruta Los reyes del norte y del sur lo recorre en el mapa.',
        'Todas las visiones terminan del mismo modo: con el reino de Dios que reemplaza a los reinos humanos.'
      ],
      pensar: 'Lo que para Nabucodonosor era una estatua de metales preciosos, Dios lo mostró a Daniel como bestias que devoran (Dn 2; 7). ¿Cómo cambia tu manera de ver el poder humano cuando lo miras desde la perspectiva de Dios?'
    },
    {
      id: 'cronologia', n: 'La cronología de Daniel', ref: 'Daniel 1:1; 2:1; 5:30; 7:1; 8:1; 9:1; 10:1', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Cronología', tabla: {
        titulo: 'Los capítulos de Daniel en orden cronológico',
        cab: ['Año aprox. (a.C.)', 'Capítulo', 'Rey', 'Acontecimiento'],
        filas: [
          ['605', '1', 'Nabucodonosor', 'Daniel llevado a Babilonia'],
          ['603', '2', 'Nabucodonosor', 'El sueño de la estatua'],
          ['¿580?', '3', 'Nabucodonosor', 'La estatua de oro y el horno'],
          ['¿570?', '4', 'Nabucodonosor', 'El árbol y los siete tiempos'],
          ['553', '7', 'Belsasar, año 1', 'Las cuatro bestias'],
          ['551', '8', 'Belsasar, año 3', 'El carnero y el macho cabrío'],
          ['539', '5', 'Belsasar', 'El banquete; cae Babilonia'],
          ['539', '9', 'Darío, año 1', 'Las setenta semanas'],
          ['¿538?', '6', 'Darío', 'El foso de los leones'],
          ['536', '10–12', 'Ciro, año 3', 'La última visión']
        ],
        nota: 'Las fechas de los capítulos 3, 4 y 6 son estimaciones; el texto no da el año.'
      } } ],
      texto: [
        'Daniel tiene dos series cronológicas que se superponen. Ordenar los capítulos en el tiempo ayuda a entender el libro.',
        { h: 'Los relatos' },
        'Los capítulos 1 al 6 avanzan desde el 605 hasta el 538 a.C. aproximadamente. Daniel fue llevado a Babilonia en el tercer año de Joacim (Dn 1:1). El sueño de la estatua ocurrió en el segundo año de Nabucodonosor (Dn 2:1), hacia el 603 a.C., cuando Daniel todavía era muy joven. Los capítulos 3 y 4 no dan fecha. El banquete de Belsasar ocurrió la noche de la caída de Babilonia, en el 539 a.C., y el foso de los leones poco después, bajo Darío de Media.',
        { h: 'Las visiones' },
        'Los capítulos 7 al 12 están fechados con precisión. La visión de las cuatro bestias fue en el primer año de Belsasar (Dn 7:1), hacia el 553 a.C., y la del carnero y el macho cabrío, en su tercer año (Dn 8:1). La profecía de las setenta semanas, en el primer año de Darío (Dn 9:1), el 539 a.C. Y la última gran visión, en el tercer año de Ciro (Dn 10:1), hacia el 536 a.C.',
        { h: 'Lo que muestra el orden' },
        'El orden cronológico revela algo interesante. Las visiones de los capítulos 7 y 8, con el anuncio de la caída de Babilonia y de Persia, las recibió Daniel durante el reinado de Belsasar, años antes de la noche del banquete. Cuando Daniel entró en la sala y leyó la escritura en la pared, ya sabía por revelación que el reino de Babilonia sería dado a los medos y a los persas.',
        'También muestra que la oración del capítulo 9, al leer a Jeremías, y la escena del foso de los leones, cuando Daniel oraba hacia Jerusalén tres veces al día, ocurrieron en los mismos meses. Daniel oraba por el regreso de su pueblo mientras arriesgaba su vida por orar.'
      ],
      pensar: 'Cuando Daniel leyó la escritura en la pared, ya conocía por las visiones lo que Dios haría con Babilonia. ¿Cómo te prepara la Palabra de Dios para enfrentar los acontecimientos de tu vida con serenidad?'
    },
    {
      id: 'palabras-clave', n: 'Palabras y versículos clave', ref: 'Daniel 2:20-22, 44; 4:17, 34-35; 7:13-14; 9:24-27; 12:2-3', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Palabras', tabla: {
        titulo: 'Palabras que Daniel repite (RV 1960)',
        cab: ['Palabra', 'Veces', 'Ejemplo'],
        filas: [
          ['Rey, reyes', '181', '«Quita reyes, y pone reyes» (Dn 2:21)'],
          ['Reino, reinos', '62', '«Un reino que no será jamás destruido» (Dn 2:44)'],
          ['Visión, visiones', '31', 'Dn 7:1; 8:1; 10:1'],
          ['Sueño, sueños', '30', 'Dn 2:1; 4:5'],
          ['Entender, entendimiento', '17', '«Los entendidos comprenderán» (Dn 12:10)'],
          ['Santos', '15', '«Los santos del Altísimo» (Dn 7:18)'],
          ['Altísimo', '14', '«El Altísimo gobierna el reino de los hombres» (Dn 4:17)']
        ],
        nota: 'Conteo automático sobre la RV 1960 de este sitio; incluye plurales y formas verbales.'
      } } ],
      texto: [
        'Las palabras que un autor repite revelan sus temas. En Daniel, las más frecuentes giran alrededor del poder, de la revelación y del reino de Dios.',
        { h: 'Reyes y reinos' },
        'La palabra «rey» aparece 181 veces, y «reino», 62. Daniel es el libro de los reinos de este mundo y del reino de Dios. Sus reyes son los más poderosos de la tierra, pero el libro muestra que su poder les fue dado por Dios y que se les quitará.',
        { h: 'Sueños, visiones y entendimiento' },
        'Las palabras «sueño» y «visión» aparecen más de treinta veces cada una. Dios revela su plan por medio de sueños a un rey pagano y de visiones a su profeta. Pero recibir una revelación no basta: hay que entenderla. Las palabras «entender» y «entendimiento» se repiten, y el libro termina diciendo que «los entendidos comprenderán» (Dn 12:10).',
        { h: 'El Altísimo y los santos' },
        'El título «el Altísimo» aparece catorce veces, sobre todo en los capítulos 4 y 7. Expresa la supremacía de Dios sobre todos los dioses y reyes. Y en el capítulo 7 aparece la expresión «los santos del Altísimo», el pueblo de Dios que recibirá el reino eterno (Dn 7:18, 22, 27).',
        { h: 'Versículos para recordar' },
        'Algunos versículos resumen el libro. La alabanza de Daniel: «Sea bendito el nombre de Dios de siglos en siglos, porque suyos son el poder y la sabiduría. El muda los tiempos y las edades; quita reyes, y pone reyes» (Dn 2:20-21). El reino de Dios: «el Dios del cielo levantará un reino que no será jamás destruido» (Dn 2:44). El Hijo del Hombre: «le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran» (Dn 7:14). Y la esperanza final: «Los entendidos resplandecerán como el resplandor del firmamento; y los que enseñan la justicia a la multitud, como las estrellas a perpetua eternidad» (Dn 12:3).'
      ],
      pensar: 'Daniel termina con la promesa de que «los que enseñan la justicia a la multitud» resplandecerán como las estrellas (Dn 12:3). ¿A quién podrías enseñar hoy el camino de Dios?'
    },
    {
      id: 'temas', n: 'Los grandes temas de Daniel', ref: 'Daniel 1:8; 2:44; 3:17-18; 6:10; 7:13-14; 9:24-27; 10:12-13; 12:1-3', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Temas', tabla: {
        titulo: 'Seis temas que atraviesan Daniel',
        cab: ['Tema', 'Pasajes'],
        filas: [
          ['La soberanía de Dios sobre la historia', 'Dn 1:2; 2:21; 4:17, 34-35; 5:21'],
          ['La fidelidad en un mundo pagano', 'Dn 1:8; 3:16-18; 6:10'],
          ['La oración', 'Dn 2:17-18; 6:10; 9:3-19; 10:12'],
          ['El reino de Dios y el Mesías', 'Dn 2:44-45; 7:13-14; 9:25-26'],
          ['El mundo espiritual', 'Dn 3:28; 6:22; 8:16; 10:13, 20-21; 12:1'],
          ['El futuro de Israel y el tiempo del fin', 'Dn 9:24-27; 11:36–12:13']
        ]
      } } ],
      texto: [
        'Seis grandes temas atraviesan el libro de Daniel. La ruta Teología de Daniel los desarrolla; aquí se presentan en conjunto.',
        'El primero es la soberanía de Dios sobre la historia. Dios entrega reinos, los quita, humilla a los soberbios y sostiene a los suyos. Nada ocurre fuera de su control.',
        'El segundo es la fidelidad en un mundo pagano. Daniel y sus amigos sirven con excelencia en Babilonia, pero se niegan a contaminarse con la comida del rey, a adorar la estatua de oro y a dejar de orar a su Dios. Saben cuándo colaborar y cuándo resistir. Su respuesta en el horno es un modelo de fe: Dios puede librarnos, «Y si no… no serviremos a tus dioses» (Dn 3:18).',
        'El tercero es la oración. Daniel ora en las crisis, ora tres veces al día, confiesa el pecado de su pueblo y ayuna para entender la voluntad de Dios. Las grandes revelaciones del libro llegan como respuesta a la oración.',
        'El cuarto es el reino de Dios y su Mesías: la piedra que llena la tierra, el Hijo del Hombre que recibe el reino eterno y el Mesías Príncipe al que se le quitará la vida.',
        'El quinto es el mundo espiritual. Hay ángeles que protegen, que interpretan y que luchan. El capítulo 10 revela que detrás de los reinos de Persia y Grecia hay príncipes espirituales en conflicto, y que la oración de Daniel está relacionada con esa batalla. El arcángel Miguel protege al pueblo de Daniel.',
        'El sexto es el futuro de Israel y el tiempo del fin: las setenta semanas, el anticristo, la gran tribulación, la liberación del pueblo de Dios y la resurrección de los muertos. Daniel es uno de los pilares de la escatología bíblica, junto al Apocalipsis.'
      ],
      pensar: 'La respuesta de los amigos de Daniel fue: Dios puede librarnos, «Y si no… no serviremos a tus dioses» (Dn 3:17-18). ¿Tu fidelidad a Dios depende de que él haga lo que esperas?'
    },
    {
      id: 'en-la-biblia', n: 'Daniel en toda la Biblia', ref: 'Mateo 24:15; 26:64; Hebreos 11:33-34; Apocalipsis 1:13-15; 13:1-2; 20:4', fecha: [-605, 95],
      visual: [ { tipo: 'tabla', titulo: 'Conexiones', tabla: {
        titulo: 'Daniel en el resto de la Biblia',
        cab: ['Daniel', 'Otro pasaje', 'Conexión'],
        filas: [
          ['Dn 7:13-14: el Hijo del Hombre', 'Mt 26:64; Mr 14:62', 'Jesús se identifica con él ante el sanedrín'],
          ['Dn 9:27; 11:31; 12:11: la abominación', 'Mt 24:15', 'Jesús la ubica en el futuro'],
          ['Dn 7:8, 25: el cuerno que habla blasfemias', '2 Ts 2:3-4; Ap 13:5-6', 'El hombre de pecado; la bestia'],
          ['Dn 7: las cuatro bestias', 'Ap 13:1-2', 'La bestia reúne rasgos de las cuatro'],
          ['Dn 10:5-6: el varón vestido de lino', 'Ap 1:13-15', 'La visión de Cristo glorificado'],
          ['Dn 12:1-2: la resurrección', 'Jn 5:28-29; Ap 20:4-6, 12', 'Resurrección de vida y de condenación'],
          ['Dn 3; 6: el horno y los leones', 'He 11:33-34', 'Ejemplos de fe']
        ]
      } } ],
      texto: [
        'Daniel es uno de los libros del Antiguo Testamento más citados y aludidos en el Nuevo. Sus visiones sirven de base a la enseñanza de Jesús sobre el fin y al libro de Apocalipsis.',
        { h: 'Jesús y Daniel' },
        'El título que Jesús usó con más frecuencia para sí mismo fue «el Hijo del Hombre», tomado de Daniel 7. Ante el sumo sacerdote, que le preguntó si era el Cristo, respondió: «Tú lo has dicho; y además os digo, que desde ahora veréis al Hijo del Hombre sentado a la diestra del poder de Dios, y viniendo en las nubes del cielo» (Mt 26:64). El sumo sacerdote entendió que Jesús se identificaba con la figura divina de Daniel, y lo acusó de blasfemia. En su sermón sobre el fin, Jesús citó la abominación desoladora «de que habló el profeta Daniel» (Mt 24:15).',
        { h: 'Pablo y Daniel' },
        'Pablo describe al hombre de pecado que se opone y se levanta contra todo lo que se llama Dios (2 Ts 2:3-4) con palabras que recuerdan al rey de Daniel 11:36.',
        { h: 'Apocalipsis y Daniel' },
        'Apocalipsis está lleno de imágenes de Daniel. La visión de Cristo glorificado del capítulo 1 recuerda al Anciano de días y al varón vestido de lino. La bestia que sube del mar en Apocalipsis 13 tiene rasgos de las cuatro bestias de Daniel 7: semejante a un leopardo, con pies de oso y boca de león, y diez cuernos. Los cuarenta y dos meses y los mil doscientos sesenta días corresponden al «tiempo, y tiempos, y medio tiempo» de Daniel. Y el libro que Daniel debía sellar «hasta el tiempo del fin» (Dn 12:4) contrasta con el que Juan no debe sellar, «porque el tiempo está cerca» (Ap 22:10).',
        'Por eso, para entender Apocalipsis hay que conocer Daniel, y para entender Daniel ayuda leer Apocalipsis. La ruta temática Daniel en el Nuevo Testamento desarrolla estas conexiones.'
      ],
      pensar: 'Jesús se identificó ante sus jueces con el Hijo del Hombre de Daniel, que recibe un reino eterno (Mt 26:64; Dn 7:14). ¿Qué significa para ti que Jesús sea ese Rey que vendrá en las nubes?'
    }
  ];

  /* ---------------- Ruta III · Comentario capítulo por capítulo ---------------- */
  const comentario = [
    {
      id: 'cap-1', n: 'Capítulo 1: fieles en la corte', ref: 'Daniel 1', fecha: -605,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-comida.webp', alt: 'En un salón de la corte de Babilonia, cuatro jóvenes judíos sentados ante una mesa sencilla con legumbres, verduras y agua, mientras un mayordomo babilonio los observa con duda junto a otra mesa llena de carnes y vino', pie: '«Nos den legumbres a comer, y agua a beber» (Dn 1:12).', origen: 'ia' } ],
      texto: [
        'El primer capítulo presenta a los protagonistas y el conflicto que recorre todo el libro: ¿cómo ser fiel a Dios en Babilonia?',
        { h: 'Dios entregó (1:1-2)' },
        'Nabucodonosor sitió Jerusalén «y el Señor entregó en sus manos a Joacim rey de Judá, y parte de los utensilios de la casa de Dios» (Dn 1:2). Desde el primer versículo, el libro deja claro quién gobierna: no fue la fuerza de Babilonia, sino la decisión de Dios. Los utensilios del templo fueron llevados al templo del dios de Nabucodonosor, como trofeo. En el capítulo 5 volverán a aparecer.',
        { h: 'Una nueva identidad (1:3-7)' },
        'Nabucodonosor seleccionó a jóvenes nobles de Judá, sin defecto, inteligentes y bien parecidos, para formarlos tres años en la lengua y las letras de los caldeos y ponerlos a su servicio. Les cambió los nombres. Daniel, «Dios es mi juez», pasó a llamarse Beltsasar, que invoca a Bel; Ananías, «Jehová ha sido misericordioso», pasó a llamarse Sadrac; Misael, Mesac; y Azarías, «Jehová ha ayudado», Abed-nego, «siervo de Nebo». Babilonia quería borrar su identidad y hacerlos babilonios.',
        { h: 'Propuso en su corazón (1:8-16)' },
        'Daniel aceptó el idioma, la educación y aun el nombre, pero trazó una línea: «propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía» (Dn 1:8). Probablemente porque esos alimentos no cumplían la ley de Moisés o habían sido ofrecidos a los ídolos, y aceptarlos era participar de la mesa del rey como de su dios.',
        'Daniel no se rebeló ni ofendió a nadie. Pidió con respeto, y propuso una prueba de diez días con legumbres y agua. «Y puso Dios a Daniel en gracia y en buena voluntad con el jefe de los eunucos» (Dn 1:9). Al final de la prueba, se veían mejor que los demás.',
        { h: 'Diez veces mejores (1:17-21)' },
        '«A estos cuatro muchachos Dios les dio conocimiento e inteligencia en todas las letras y ciencias; y Daniel tuvo entendimiento en toda visión y sueños» (Dn 1:17). Cuando el rey los examinó, los halló diez veces mejores que todos los magos y astrólogos de su reino. Y el capítulo cierra: «continuó Daniel hasta el año primero del rey Ciro» (Dn 1:21). Sobrevivió a todos los reyes de Babilonia.'
      ],
      pensar: 'Daniel aceptó muchas cosas de Babilonia, pero trazó una línea donde estaba en juego su fidelidad a Dios (Dn 1:8). ¿Dónde están tus líneas, y cómo las defiendes con respeto?'
    },
    {
      id: 'cap-2a', n: 'Capítulo 2 (I): el sueño olvidado', ref: 'Daniel 2:1-30', fecha: -603,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-sueno.webp', alt: 'En el salón del trono de Babilonia, Daniel joven, de pie con serenidad, habla al rey Nabucodonosor, sentado en su trono y atento, mientras los sabios caldeos observan sorprendidos', pie: '«Hay un Dios en los cielos, el cual revela los misterios» (Dn 2:28).', origen: 'ia' } ],
      texto: [
        'En el segundo año de su reinado, Nabucodonosor tuvo un sueño que lo perturbó tanto que se le fue el sueño.',
        { h: 'Una exigencia imposible (2:1-13)' },
        'El rey llamó a los magos, astrólogos, encantadores y caldeos, y les exigió algo que nunca se había pedido: no solo interpretar el sueño, sino decirle cuál había sido. Si no podían, serían despedazados. Quizá el rey desconfiaba de sus sabios y quería probar si de verdad tenían contacto con los dioses. Ellos respondieron: «No hay hombre sobre la tierra que pueda declarar el asunto del rey… salvo los dioses cuya morada no es con la carne» (Dn 2:10-11). Sin saberlo, tenían razón. El rey ordenó matar a todos los sabios de Babilonia, y entre ellos estaban Daniel y sus amigos.',
        { h: 'Una reunión de oración (2:14-23)' },
        'Daniel pidió tiempo al rey, y se fue a su casa a contar el asunto a sus tres compañeros, «para que pidiesen misericordias del Dios del cielo sobre este misterio» (Dn 2:18). Es la primera reunión de oración del libro: cuatro jóvenes en peligro de muerte, pidiendo juntos. Esa noche, el secreto le fue revelado a Daniel en visión.',
        'Lo primero que hizo Daniel no fue correr al rey, sino adorar: «Sea bendito el nombre de Dios de siglos en siglos, porque suyos son el poder y la sabiduría. El muda los tiempos y las edades; quita reyes, y pone reyes; da la sabiduría a los sabios, y la ciencia a los entendidos. El revela lo profundo y lo escondido» (Dn 2:20-22).',
        { h: 'Hay un Dios en los cielos (2:24-30)' },
        'Daniel pidió que no mataran a los sabios, y se presentó ante el rey. Nabucodonosor le preguntó si podía revelarle el sueño. La respuesta de Daniel es un modelo de humildad: los sabios no pueden, «Pero hay un Dios en los cielos, el cual revela los misterios, y él ha hecho saber al rey Nabucodonosor lo que ha de acontecer en los postreros días» (Dn 2:28). Y añadió que no se le había revelado por tener más sabiduría que los demás, sino para que el rey entendiera (Dn 2:30). Daniel no tomó la gloria para sí.'
      ],
      pensar: 'Ante una amenaza de muerte, Daniel reunió a sus amigos para orar, y cuando Dios respondió, lo primero que hizo fue adorar (Dn 2:17-23). ¿Qué lugar tienen la oración compartida y la gratitud en tus crisis?'
    },
    {
      id: 'cap-2b', n: 'Capítulo 2 (II): la estatua y la piedra', ref: 'Daniel 2:31-49', fecha: -603,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: RO + 'roma-estatua-daniel.webp', alt: 'Una estatua colosal con cabeza de oro, pecho de plata, vientre de bronce, piernas de hierro y pies de hierro y barro, golpeada por una piedra', pie: 'La estatua y la piedra (Dn 2:34-35).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'La estatua', tabla: {
          titulo: 'La estatua de Daniel 2',
          cab: ['Parte', 'Material', 'Reino', 'Pasaje'],
          filas: [
            ['Cabeza', 'Oro', 'Babilonia (Nabucodonosor)', 'Dn 2:37-38'],
            ['Pecho y brazos', 'Plata', 'Media y Persia', 'Dn 2:39; 8:20'],
            ['Vientre y muslos', 'Bronce', 'Grecia', 'Dn 2:39; 8:21'],
            ['Piernas', 'Hierro', 'Roma', 'Dn 2:40'],
            ['Pies y dedos', 'Hierro y barro cocido', 'Forma final dividida del cuarto reino', 'Dn 2:41-43'],
            ['La piedra', 'Cortada no con mano', 'El reino de Cristo', 'Dn 2:44-45']
          ]
        } }
      ],
      texto: [
        'Daniel describió el sueño: una gran imagen de esplendor extraordinario y aspecto terrible. Su cabeza era de oro fino; su pecho y sus brazos, de plata; su vientre y sus muslos, de bronce; sus piernas, de hierro; y sus pies, en parte de hierro y en parte de barro cocido.',
        { h: 'La piedra (2:34-35)' },
        '«Estabas mirando, hasta que una piedra fue cortada, no con mano, e hirió a la imagen en sus pies de hierro y de barro cocido, y los desmenuzó» (Dn 2:34). Toda la estatua se desmenuzó y se la llevó el viento como el tamo, «Mas la piedra que hirió a la imagen fue hecha un gran monte que llenó toda la tierra» (Dn 2:35).',
        { h: 'La interpretación (2:36-45)' },
        'Daniel explicó que la cabeza de oro era Nabucodonosor, a quien el Dios del cielo había dado el reino. Después vendría otro reino inferior, de plata; luego un tercero, de bronce, que dominaría toda la tierra; y un cuarto, fuerte como el hierro, que desmenuzaría y quebrantaría todo. Los pies de hierro y barro indicaban un reino dividido, en parte fuerte y en parte frágil, cuyos elementos no se unirían, como el hierro no se mezcla con el barro.',
        'Los metales van perdiendo valor de la cabeza a los pies, pero ganando dureza. Los reinos serán cada vez menos gloriosos y cada vez más duros.',
        '«Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre» (Dn 2:44).',
        { h: 'Cuándo cae la piedra' },
        'La piedra no transforma gradualmente la estatua, sino que la golpea y la destruye de golpe, en los pies, en la forma final del cuarto reino. Por eso la interpretación premilenial entiende que la piedra representa la segunda venida de Cristo, que destruirá los reinos de este mundo en su forma final y establecerá su reino sobre toda la tierra. La piedra «cortada, no con mano» (Dn 2:34) es de origen divino: Cristo, la piedra que los edificadores desecharon (Sal 118:22; Lc 20:17-18).',
        { h: 'La respuesta del rey (2:46-49)' },
        'Nabucodonosor se postró ante Daniel y dijo: «Ciertamente el Dios vuestro es Dios de dioses, y Señor de los reyes» (Dn 2:47). Hizo a Daniel gobernador de la provincia de Babilonia y jefe de los sabios, y a petición suya puso a sus tres amigos sobre los negocios de la provincia.'
      ],
      pensar: 'La piedra cortada no con mano destruye la estatua y llena toda la tierra (Dn 2:34-35). ¿Qué te dice esta imagen sobre el destino de los reinos humanos y el del reino de Cristo?'
    },
    {
      id: 'cap-3', n: 'Capítulo 3: el horno de fuego', ref: 'Daniel 3', fecha: -580,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-horno.webp', alt: 'Dentro de un horno de fuego ardiente, tres jóvenes judíos caminan sueltos y tranquilos entre las llamas junto a una cuarta figura resplandeciente, mientras afuera el rey Nabucodonosor mira asombrado', pie: '«El aspecto del cuarto es semejante a hijo de los dioses» (Dn 3:25).', origen: 'ia' } ],
      texto: [
        'Después del sueño de la estatua, Nabucodonosor hizo una estatua propia, toda de oro, de sesenta codos de altura y seis de anchura, unos 27 metros, y la levantó en el campo de Dura, en la provincia de Babilonia. Quizá quería decir con ella que su reino, la cabeza de oro, no sería reemplazado.',
        { h: 'Adorar o morir (3:1-12)' },
        'El rey reunió a todos los funcionarios del reino para la dedicación. Un pregonero anunció que, al sonar la música, todos debían postrarse y adorar la estatua; el que no lo hiciera sería echado en un horno de fuego ardiendo. Todos se postraron, salvo tres jóvenes judíos. Unos caldeos los acusaron ante el rey. Daniel no aparece en el relato; probablemente estaba en otra parte del reino.',
        { h: 'Y si no (3:13-18)' },
        'Nabucodonosor, con ira, les dio una segunda oportunidad, y desafió: «¿y qué dios será aquel que os libre de mis manos?» (Dn 3:15). La respuesta de Sadrac, Mesac y Abed-nego es una de las confesiones de fe más grandes de la Biblia: «He aquí nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo; y de tu mano, oh rey, nos librará. Y si no, sepas, oh rey, que no serviremos a tus dioses, ni tampoco adoraremos la estatua que has levantado» (Dn 3:17-18).',
        'Tenían fe en que Dios podía librarlos, pero su obediencia no dependía de que lo hiciera.',
        { h: 'Cuatro en el fuego (3:19-27)' },
        'El rey mandó calentar el horno siete veces más de lo acostumbrado. Las llamas mataron a los soldados que los arrojaron. Pero Nabucodonosor, espantado, preguntó: «¿No echaron a tres varones atados dentro del fuego?… He aquí yo veo cuatro varones sueltos, que se pasean en medio del fuego sin sufrir ningún daño; y el aspecto del cuarto es semejante a hijo de los dioses» (Dn 3:24-25).',
        'El fuego solo quemó sus ataduras. Al salir, ni un cabello se había quemado, ni sus ropas olían a humo.',
        { posturas: {
          titulo: '¿Quién era el cuarto en el horno?',
          a: { n: 'El Hijo de Dios', t: 'Muchos intérpretes ven aquí una aparición de Cristo antes de su encarnación, una teofanía, como el ángel de Jehová del Antiguo Testamento. Él cumple su promesa: «Cuando pases por el fuego, no te quemarás» (Is 43:2).' },
          b: { n: 'Un ángel', t: 'El rey mismo dice después que Dios «envió su ángel y libró a sus siervos» (Dn 3:28).' },
          c: 'Las dos lecturas coinciden en lo esencial: Dios estuvo con sus siervos en medio del fuego. Muchos ven en ese ángel al ángel de Jehová, que en otros pasajes habla como Dios mismo.'
        } },
        'El rey bendijo al Dios de Sadrac, Mesac y Abed-nego, decretó que nadie hablara contra él y los engrandeció.'
      ],
      pensar: 'Dios no libró a los tres amigos del horno, sino en medio del horno, y estuvo con ellos en el fuego (Dn 3:25). ¿Qué fuego estás atravesando, y cómo puedes reconocer allí la presencia de Dios?'
    },
    {
      id: 'cap-4', n: 'Capítulo 4: el rey que vivió como bestia', ref: 'Daniel 4', fecha: -570,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-rey-campo.webp', alt: 'En un campo abierto bajo el rocío del amanecer, el rey Nabucodonosor, con el pelo largo y enmarañado y las uñas crecidas, vestido con ropas reales rotas, come hierba como un buey, mientras a lo lejos se ven las murallas de Babilonia', pie: '«Comía hierba como los bueyes» (Dn 4:33).', origen: 'ia' } ],
      texto: [
        'El capítulo 4 es único en la Biblia: es un decreto escrito por el propio Nabucodonosor, en primera persona, para todos los pueblos de su reino. Comienza y termina con la alabanza del Dios Altísimo. El rey cuenta lo que Dios le hizo.',
        { h: 'El árbol (4:1-18)' },
        'Nabucodonosor soñó con un árbol enorme en medio de la tierra, cuya copa llegaba al cielo; daba fruto y sombra a todos los animales y aves. Un vigilante santo descendió del cielo y mandó cortarlo, dejando la cepa de sus raíces en la tierra, atada con hierro y bronce. Su corazón de hombre sería cambiado por un corazón de bestia, y pasarían sobre él siete tiempos, «para que conozcan los vivientes que el Altísimo gobierna el reino de los hombres» (Dn 4:17).',
        { h: 'La advertencia (4:19-27)' },
        'Daniel quedó atónito, porque entendió que el árbol era el rey. Le explicó el sueño con dolor, y le dio un consejo: «tus pecados redime con justicia, y tus iniquidades haciendo misericordias para con los oprimidos, pues tal vez será eso una prolongación de tu tranquilidad» (Dn 4:27). El juicio todavía podía postergarse con arrepentimiento.',
        { h: 'La gran Babilonia (4:28-33)' },
        'Doce meses después, paseando por su palacio, el rey dijo: «¿No es ésta la gran Babilonia que yo edifiqué para casa real con la fuerza de mi poder, y para gloria de mi majestad?» (Dn 4:30). Aún estaba la palabra en su boca cuando vino una voz del cielo. En la misma hora, fue echado de entre los hombres y comía hierba como los bueyes; su cuerpo se mojaba con el rocío, su pelo creció como plumas de águila y sus uñas como las de las aves.',
        { h: 'Alcé mis ojos al cielo (4:34-37)' },
        '«Mas al fin del tiempo yo Nabucodonosor alcé mis ojos al cielo, y mi razón me fue devuelta; y bendije al Altísimo, y alabé y glorifiqué al que vive para siempre» (Dn 4:34). Le fue devuelto su reino. Su testimonio final resume la lección: «Ahora yo Nabucodonosor alabo, engrandezco y glorifico al Rey del cielo, porque todas sus obras son verdaderas, y sus caminos justos; y él puede humillar a los que andan con soberbia» (Dn 4:37).',
        'Muchos ven en este testimonio la conversión de Nabucodonosor. Al menos, el rey más poderoso de su tiempo reconoció públicamente que el Dios de Israel es el Rey del cielo.'
      ],
      pensar: 'Nabucodonosor recuperó la razón cuando alzó sus ojos al cielo (Dn 4:34). ¿Qué te enseña esto sobre la relación entre la humildad ante Dios y la cordura?'
    },
    {
      id: 'cap-5', n: 'Capítulo 5: la escritura en la pared', ref: 'Daniel 5', fecha: -539,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-banquete-belsasar.webp', alt: 'El banquete de Belsasar: una mano escribe en la pared del palacio', pie: '«Aparecieron los dedos de una mano de hombre, que escribía» (Dn 5:5).', origen: 'ia' } ],
      texto: [
        'Han pasado más de veinte años desde la muerte de Nabucodonosor. Es el 539 a.C., y el ejército de Ciro rodea Babilonia.',
        { h: 'El banquete (5:1-4)' },
        'Belsasar, el hijo de Nabonido que gobernaba la ciudad, ofreció un gran banquete a mil de sus príncipes. Con el vino, mandó traer los vasos de oro y de plata que Nabucodonosor había sacado del templo de Jerusalén, y bebieron en ellos mientras alababan a los dioses de oro, plata, bronce, hierro, madera y piedra. Era una burla deliberada contra el Dios de Israel. Quizá también una demostración de confianza: la ciudad parecía inexpugnable.',
        { h: 'Los dedos de una mano (5:5-12)' },
        'En aquella misma hora aparecieron los dedos de una mano de hombre que escribía en el yeso de la pared, frente al candelero. El rey palideció, sus rodillas daban una contra otra. Ninguno de los sabios pudo leer la escritura. Entonces la reina, probablemente la reina madre, recordó a Daniel, un anciano que había sido jefe de los sabios en tiempos de Nabucodonosor y que Belsasar parecía haber olvidado.',
        { h: 'Pesado has sido en balanza (5:13-28)' },
        'Daniel rechazó los regalos del rey, pero leyó la escritura. Antes le recordó lo que le pasó a Nabucodonosor cuando se ensoberbeció: «Y tú, su hijo Belsasar, no has humillado tu corazón, sabiendo todo esto» (Dn 5:22). Luego leyó: «MENE, MENE, TEKEL, UPARSIN» (Dn 5:25). Eran nombres de medidas de peso, pero Daniel las interpretó como verbos: «MENE: Contó Dios tu reino, y le ha puesto fin. TEKEL: Pesado has sido en balanza, y fuiste hallado falto. PERES: Tu reino ha sido roto, y dado a los medos y a los persas» (Dn 5:26-28). La palabra peres suena como «persa».',
        { h: 'Aquella misma noche (5:29-31)' },
        'Belsasar cumplió su promesa y vistió a Daniel de púrpura como tercer señor del reino. Pero el reino solo duraría unas horas. «La misma noche fue muerto Belsasar rey de los caldeos. Y Darío de Media tomó el reino» (Dn 5:30-31). Los historiadores griegos Heródoto y Jenofonte cuentan que los persas desviaron el Éufrates y entraron en la ciudad por el lecho del río mientras los babilonios celebraban una fiesta. La Crónica de Nabonido dice que el ejército de Ciro entró en Babilonia sin batalla.'
      ],
      pensar: '«Pesado has sido en balanza, y fuiste hallado falto» (Dn 5:27). Si Dios pesara hoy tu vida, ¿qué encontraría? ¿Qué te da esperanza ante esa pregunta?'
    },
    {
      id: 'cap-6', n: 'Capítulo 6: el foso de los leones', ref: 'Daniel 6', fecha: -538,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: PE + 'persia-daniel-foso.webp', alt: 'El profeta Daniel, anciano, de pie en calma dentro del foso de los leones, iluminado por la luz que entra desde arriba', pie: '«Mi Dios envió su ángel, el cual cerró la boca de los leones» (Dn 6:22).', origen: 'ia' } ],
      texto: [
        'Con el nuevo gobierno persa, Daniel, ya de más de ochenta años, volvió a ocupar un puesto importante. Darío organizó el reino en ciento veinte sátrapas, bajo tres gobernadores, de los cuales Daniel era uno. Y como Daniel se distinguía por su espíritu superior, el rey pensaba ponerlo sobre todo el reino.',
        { h: 'Una trampa (6:4-9)' },
        'Los otros gobernadores y sátrapas buscaron ocasión para acusar a Daniel, «mas no podían hallar ocasión alguna o falta, porque él era fiel, y ningún vicio ni falta fue hallado en él» (Dn 6:4). Concluyeron que solo podían atacarlo en relación con la ley de su Dios. Convencieron al rey de firmar un decreto: durante treinta días, nadie podría pedir nada a ningún dios ni hombre, sino solo al rey; quien lo hiciera sería echado al foso de los leones. Según la ley de Media y de Persia, un decreto firmado por el rey no podía ser revocado.',
        { h: 'Como lo solía hacer antes (6:10-17)' },
        '«Cuando Daniel supo que el edicto había sido firmado, entró en su casa, y abiertas las ventanas de su cámara que daban hacia Jerusalén, se arrodillaba tres veces al día, y oraba y daba gracias delante de su Dios, como lo solía hacer antes» (Dn 6:10). No cambió su costumbre: ni la escondió ni la exhibió. Sus enemigos lo encontraron orando y lo acusaron.',
        'El rey se dio cuenta de la trampa y trató hasta la puesta del sol de librarlo, pero no pudo revocar el decreto. Echaron a Daniel al foso, y el rey le dijo: «El Dios tuyo, a quien tú continuamente sirves, él te libre» (Dn 6:16). Pusieron una piedra sobre la boca del foso, sellada con el anillo del rey.',
        { h: 'Mi Dios envió su ángel (6:18-28)' },
        'El rey pasó la noche sin comer y sin dormir. Al amanecer fue con prisa al foso y llamó con voz triste. Daniel respondió: «Mi Dios envió su ángel, el cual cerró la boca de los leones, para que no me hiciesen daño, porque ante él fui hallado inocente» (Dn 6:22). No se halló en él ninguna lesión, «porque había confiado en su Dios» (Dn 6:23). Los acusadores fueron echados al foso.',
        'Darío escribió a todos los pueblos que temieran al Dios de Daniel, «porque él es el Dios viviente y permanece por todos los siglos, y su reino no será jamás destruido» (Dn 6:26).'
      ],
      pensar: 'Daniel siguió orando «como lo solía hacer antes» (Dn 6:10): su fidelidad en la crisis fue el fruto de una costumbre de años. ¿Qué hábitos espirituales estás construyendo hoy para los días difíciles?'
    },
    {
      id: 'cap-7a', n: 'Capítulo 7 (I): las cuatro bestias', ref: 'Daniel 7:1-8, 15-24', fecha: -553,
      visual: [ { tipo: 'tabla', titulo: 'Las bestias', tabla: {
        titulo: 'Las cuatro bestias de Daniel 7',
        cab: ['Bestia', 'Rasgos', 'Reino'],
        filas: [
          ['León con alas de águila', 'Le arrancan las alas; se le da corazón de hombre', 'Babilonia'],
          ['Oso', 'Más alto de un costado; tres costillas en la boca', 'Media y Persia (Persia predomina; conquista Lidia, Babilonia y Egipto)'],
          ['Leopardo', 'Cuatro alas y cuatro cabezas', 'Grecia: rapidez de Alejandro; división en cuatro reinos'],
          ['Bestia espantosa', 'Dientes de hierro; diez cuernos; un cuerno pequeño', 'Roma, y su forma final con diez reyes y el anticristo']
        ]
      } } ],
      texto: [
        'En el primer año de Belsasar, Daniel tuvo un sueño y lo escribió. Es la primera visión de la segunda mitad del libro, y repite desde la perspectiva de Dios la historia de la estatua de Daniel 2.',
        { h: 'Cuatro bestias del mar (7:1-8)' },
        '«Miraba yo en mi visión de noche, y he aquí que los cuatro vientos del cielo combatían en el gran mar. Y cuatro bestias grandes, diferentes la una de la otra, subían del mar» (Dn 7:2-3). En la Biblia, el mar agitado es imagen de las naciones (Is 17:12; Ap 17:15).',
        'La primera era como un león con alas de águila, al que le arrancaron las alas y le dieron corazón de hombre: Babilonia, y quizá una alusión a la humillación de Nabucodonosor. La segunda, semejante a un oso, se alzaba más de un costado y tenía tres costillas en la boca: Media y Persia, con Persia como el lado más fuerte. La tercera, semejante a un leopardo, con cuatro alas y cuatro cabezas: Grecia, con la rapidez de las conquistas de Alejandro y su división en cuatro reinos.',
        'La cuarta bestia era «espantosa y terrible y en gran manera fuerte, la cual tenía unos dientes grandes de hierro; devoraba y desmenuzaba, y las sobras hollaba con sus pies» (Dn 7:7). Era diferente de todas, y tenía diez cuernos. Corresponde a las piernas de hierro de la estatua: Roma.',
        { h: 'El cuerno pequeño (7:8, 19-25)' },
        'Mientras Daniel contemplaba los cuernos, salió entre ellos otro cuerno pequeño, delante del cual fueron arrancados tres. Tenía ojos como de hombre y una boca que hablaba grandes cosas. El ángel le explicó que los diez cuernos son diez reyes que se levantarán de ese reino, y que tras ellos se levantará otro, diferente, que derribará a tres reyes. «Y hablará palabras contra el Altísimo, y a los santos del Altísimo quebrantará, y pensará en cambiar los tiempos y la ley; y serán entregados en su mano hasta tiempo, y tiempos, y medio tiempo» (Dn 7:25).',
        'La interpretación premilenial entiende que los diez cuernos son una confederación futura de reyes surgida de la herencia del imperio romano, y que el cuerno pequeño es el anticristo. Los tres tiempos y medio son la segunda mitad de la tribulación: tres años y medio, 42 meses (Ap 13:5).'
      ],
      pensar: 'Lo que para Nabucodonosor era una estatua de metales preciosos, para Dios son bestias que devoran (Dn 2; 7). ¿Cómo ve Dios los poderes que el mundo admira?'
    },
    {
      id: 'cap-7b', n: 'Capítulo 7 (II): el Anciano de días y el Hijo del Hombre', ref: 'Daniel 7:9-14, 26-28; Mateo 26:64; Apocalipsis 1:13-14', fecha: -553,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-anciano-dias.webp', alt: 'En el cielo, sobre un trono de llamas de fuego con ruedas ardientes, se sienta el Anciano de días, de vestido blanco como la nieve, rodeado de millares de ángeles, mientras uno como un hijo de hombre viene con las nubes del cielo y se acerca a él', pie: '«Con las nubes del cielo venía uno como un hijo de hombre» (Dn 7:13).', origen: 'ia' } ],
      texto: [
        'En medio de la visión de las bestias, la escena cambia de golpe de la tierra al cielo. Es uno de los pasajes más gloriosos del Antiguo Testamento.',
        { h: 'El Anciano de días (7:9-10)' },
        '«Estuve mirando hasta que fueron puestos tronos, y se sentó un Anciano de días, cuyo vestido era blanco como la nieve, y el pelo de su cabeza como lana limpia; su trono llama de fuego, y las ruedas del mismo, fuego ardiente» (Dn 7:9). Un río de fuego salía de delante de él; millares de millares le servían. «El Juez se sentó, y los libros fueron abiertos» (Dn 7:10).',
        'Mientras en la tierra el cuerno pequeño habla grandes cosas, en el cielo se instala el tribunal de Dios. La bestia es muerta y su cuerpo destruido y entregado para ser quemado en el fuego (Dn 7:11). Las bestias pueden hacer ruido, pero el Juez eterno tiene la última palabra.',
        { h: 'Uno como un hijo de hombre (7:13-14)' },
        '«Miraba yo en la visión de la noche, y he aquí con las nubes del cielo venía uno como un hijo de hombre, que vino hasta el Anciano de días, y le hicieron acercarse delante de él. Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran; su dominio es dominio eterno, que nunca pasará, y su reino uno que no será destruido» (Dn 7:13-14).',
        'Después de cuatro bestias aparece alguien con apariencia humana: el reino de Dios es humano en el mejor sentido, frente a la brutalidad de los imperios. Pero este hijo de hombre viene con las nubes del cielo, algo que en el Antiguo Testamento solo se dice de Dios, y recibe un reino eterno y el servicio de todos los pueblos. Es humano y divino.',
        { h: 'Jesús, el Hijo del Hombre' },
        'Jesús tomó este título para sí más que ningún otro. Ante el sumo sacerdote, citó Daniel 7:13: «veréis al Hijo del Hombre sentado a la diestra del poder de Dios, y viniendo en las nubes del cielo» (Mt 26:64). En Apocalipsis, Juan ve a uno semejante al Hijo del Hombre, cuya cabeza y cabellos eran blancos como la lana, como la nieve (Ap 1:13-14): Cristo comparte los rasgos del Anciano de días.',
        { h: 'Los santos reciben el reino (7:18, 27)' },
        'El reino se da también «al pueblo de los santos del Altísimo» (Dn 7:27). Los que pertenecen a Cristo reinarán con él (Ap 20:4-6). Daniel quedó turbado y guardó el asunto en su corazón (Dn 7:28).'
      ],
      pensar: 'Mientras las bestias hacen ruido en la tierra, en el cielo el Juez se sienta y entrega el reino al Hijo del Hombre (Dn 7:9-14). ¿Cómo te ayuda esta visión a mirar las noticias y los poderes de tu tiempo?'
    },
    {
      id: 'cap-8', n: 'Capítulo 8: el carnero y el macho cabrío', ref: 'Daniel 8', fecha: -551,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: GR + 'grecia-carnero-macho-cabrio.webp', alt: 'Un macho cabrío embiste a un carnero de dos cuernos junto a un río, en una visión dramática', pie: 'El carnero y el macho cabrío (Dn 8:5-7).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Interpretación', tabla: {
          titulo: 'La visión de Daniel 8 y su cumplimiento',
          cab: ['Símbolo', 'Interpretación', 'Cumplimiento'],
          filas: [
            ['Carnero de dos cuernos, uno más alto', 'Los reyes de Media y de Persia (8:20)', 'Persia superó a Media; el imperio de Ciro'],
            ['Macho cabrío que viene del occidente sin tocar tierra', 'El rey de Grecia (8:21)', 'Alejandro Magno conquista Persia en pocos años (334–331 a.C.)'],
            ['El cuerno grande se quiebra', 'El primer rey', 'Alejandro muere a los 32 años (323 a.C.)'],
            ['Cuatro cuernos notables', 'Cuatro reinos (8:22)', 'El imperio se divide entre sus generales'],
            ['Un cuerno pequeño que crece hacia el sur, el oriente y la tierra gloriosa', 'Un rey altivo de rostro (8:23)', 'Antíoco IV Epífanes, tipo del anticristo']
          ]
        } }
      ],
      texto: [
        'En el tercer año de Belsasar, Daniel tuvo otra visión. Desde aquí el libro vuelve al hebreo. Daniel se vio en Susa, la futura capital persa, junto al río Ulai.',
        { h: 'El carnero (8:3-4)' },
        'Vio un carnero con dos cuernos altos, uno más alto que el otro, que había crecido después. Hería al poniente, al norte y al sur, y ninguna bestia podía hacerle frente. Gabriel explicó: «En cuanto al carnero que viste, que tenía dos cuernos, éstos son los reyes de Media y de Persia» (Dn 8:20). El cuerno que creció después y llegó más alto es Persia, que superó a Media.',
        { h: 'El macho cabrío (8:5-8)' },
        'Un macho cabrío venía del occidente sobre toda la tierra, sin tocar tierra, con un cuerno notable entre los ojos. Embistió al carnero con furia, le quebró los dos cuernos y lo pisoteó. «El macho cabrío es el rey de Grecia, y el cuerno grande que tenía entre sus ojos es el rey primero» (Dn 8:21). Es Alejandro Magno, que entre el 334 y el 331 a.C. destruyó el imperio persa con una velocidad asombrosa. Pero en la cumbre de su poder, el cuerno se quebró: Alejandro murió en el 323 a.C., a los 32 años, y en su lugar salieron cuatro cuernos, cuatro reinos.',
        { h: 'El cuerno pequeño (8:9-14, 23-25)' },
        'De uno de ellos salió un cuerno pequeño que creció hacia el sur, el oriente y la tierra gloriosa, quitó el continuo sacrificio y echó por tierra el santuario. Se trata de Antíoco IV Epífanes, rey seléucida que entre el 167 y el 164 a.C. profanó el templo de Jerusalén, prohibió los sacrificios y persiguió a los judíos fieles. La visión anuncia que el santuario sería purificado después de «dos mil trescientas tardes y mañanas» (Dn 8:14); muchos lo entienden como 1.150 días de sacrificios suspendidos, contando tardes y mañanas por separado, cerca de los tres años que duró la profanación, hasta que Judas Macabeo purificó el templo en el 164 a.C.',
        'Pero Gabriel dice también que la visión es «para el tiempo del fin» (Dn 8:17, 19), y que ese rey «se levantará contra el Príncipe de los príncipes, pero será quebrantado, aunque no por mano humana» (Dn 8:25). Antíoco es un anticipo del anticristo.',
        'Daniel quedó quebrantado y enfermo algunos días, y espantado a causa de la visión (Dn 8:27).'
      ],
      pensar: 'Daniel recibió con dos siglos de anticipación el detalle de la caída de Persia ante Alejandro (Dn 8:5-8, 20-21). ¿Cómo fortalece tu confianza en las promesas futuras de Dios ver que estas se cumplieron?'
    },
    {
      id: 'cap-9a', n: 'Capítulo 9 (I): la oración de Daniel', ref: 'Daniel 9:1-19; Jeremías 25:11-12; 29:10', fecha: -539,
      visual: [ { tipo: 'cita', titulo: 'Pasaje', texto: 'Oye, Señor; oh Señor, perdona; presta oído, Señor, y hazlo; no tardes, por amor de ti mismo, Dios mío; porque tu nombre es invocado sobre tu ciudad y sobre tu pueblo.', ref: 'Daniel 9:19' } ],
      texto: [
        'En el primer año de Darío, Babilonia acababa de caer. Daniel, que había vivido casi setenta años en el exilio, estaba leyendo las Escrituras.',
        { h: 'Leyó en los libros (9:1-2)' },
        '«Yo Daniel miré atentamente en los libros el número de los años de que habló Jehová al profeta Jeremías, que habían de cumplirse las desolaciones de Jerusalén en setenta años» (Dn 9:2). Daniel tenía una copia de Jeremías y la estudiaba con atención. Comprendió que el tiempo del regreso había llegado.',
        { h: 'Una promesa que mueve a orar (9:3)' },
        'La reacción de Daniel es notable. No pensó: «Dios lo prometió, así que ocurrirá de todos modos». Volvió su rostro a Dios «buscándole en oración y ruego, en ayuno, cilicio y ceniza» (Dn 9:3). Las promesas de Dios no hacen innecesaria la oración: la impulsan.',
        { h: 'Hemos pecado (9:4-15)' },
        'La oración de Daniel comienza con la grandeza y la fidelidad de Dios: «Señor, Dios grande, digno de ser temido, que guardas el pacto y la misericordia con los que te aman» (Dn 9:4). Y sigue con una confesión. Daniel no habla del pecado de los otros, sino en primera persona plural: «hemos pecado, hemos cometido iniquidad, hemos hecho impíamente, y hemos sido rebeldes» (Dn 9:5). Él, que era uno de los hombres más fieles de su generación, se incluye en el pecado de su pueblo.',
        'Reconoce que el exilio fue justo, que se cumplió lo que estaba escrito en la ley de Moisés, y que el pueblo no buscó a Dios aun después del castigo.',
        { h: 'Por amor de ti mismo (9:16-19)' },
        'Luego pide. No apela a los méritos del pueblo, sino a la misericordia y a la gloria de Dios: «no elevamos nuestros ruegos ante ti confiados en nuestras justicias, sino en tus muchas misericordias» (Dn 9:18). Y termina con una súplica intensa: «Oye, Señor; oh Señor, perdona; presta oído, Señor, y hazlo; no tardes, por amor de ti mismo, Dios mío; porque tu nombre es invocado sobre tu ciudad y sobre tu pueblo» (Dn 9:19).',
        'La oración de Daniel es un modelo de intercesión: basada en la Palabra, humilde, con confesión del pecado propio, apoyada en la misericordia de Dios y movida por el deseo de su gloria.'
      ],
      pensar: 'Daniel no dijo «ellos pecaron», sino «hemos pecado» (Dn 9:5). ¿Cómo puedes interceder por tu familia, tu iglesia o tu nación identificándote con ellos, en vez de señalarlos?'
    },
    {
      id: 'cap-9b', n: 'Capítulo 9 (II): las setenta semanas', ref: 'Daniel 9:20-27; Mateo 24:15', fecha: -539,
      visual: [ { tipo: 'imagen', titulo: 'Esquema', src: OTRA + 'escatologia/img/setenta-semanas.svg', alt: 'Esquema de las setenta semanas de Daniel: siete semanas, sesenta y dos semanas hasta el Mesías, un paréntesis que corresponde a la era de la iglesia y la semana setenta dividida en dos mitades', pie: 'Las setenta semanas de Daniel 9.', origen: 'esquema' } ],
      texto: [
        'Mientras Daniel todavía oraba, a la hora del sacrificio de la tarde, llegó el ángel Gabriel. «Al principio de tus ruegos fue dada la orden, y yo he venido para enseñártela, porque tú eres muy amado» (Dn 9:23). La respuesta salió del cielo apenas Daniel comenzó a orar.',
        { h: 'Setenta semanas (9:24)' },
        'Daniel oraba por los setenta años del exilio. Gabriel le habló de setenta semanas, setenta sietes de años, 490 años, determinadas sobre su pueblo y su ciudad «para terminar la prevaricación, y poner fin al pecado, y expiar la iniquidad, para traer la justicia perdurable, y sellar la visión y la profecía, y ungir al Santo de los santos» (Dn 9:24). Daniel pensaba en el regreso a Jerusalén; Dios le mostró el plan completo hasta la redención final.',
        { h: 'Hasta el Mesías (9:25-26)' },
        'Desde la orden para restaurar y edificar Jerusalén hasta el Mesías Príncipe habría siete semanas y sesenta y dos semanas: 483 años. Muchos cuentan desde la orden de Artajerjes a Nehemías, en el 445 o 444 a.C., y llegan a la entrada de Jesús en Jerusalén. «Y después de las sesenta y dos semanas se quitará la vida al Mesías, mas no por sí» (Dn 9:26). Después, el pueblo de un príncipe que ha de venir destruiría la ciudad y el santuario, como ocurrió en el año 70.',
        { h: 'La semana setenta (9:27)' },
        'Queda una semana. El príncipe que ha de venir confirmará un pacto con muchos por una semana, y a la mitad hará cesar el sacrificio y la ofrenda, y pondrá la abominación desoladora. Jesús ubicó esta abominación en el futuro (Mt 24:15). Por eso la interpretación premilenial entiende que entre la semana 69 y la 70 hay un paréntesis, la era de la iglesia, y que la semana setenta son los siete años de la tribulación.',
        'El recurso Los últimos tiempos desarrolla esta profecía en detalle.',
        { ir: { t: 'Abrir el recurso Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'La respuesta a la oración de Daniel salió del cielo «al principio de tus ruegos» (Dn 9:23). ¿Qué te enseña esto sobre la atención de Dios a la oración de sus hijos?'
    },
    {
      id: 'cap-10', n: 'Capítulo 10: la guerra en los lugares celestiales', ref: 'Daniel 10; Efesios 6:12; Apocalipsis 1:13-17', fecha: -536,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-hidekel.webp', alt: 'A la orilla del gran río Tigris, Daniel anciano cae de rodillas ante un varón resplandeciente vestido de lino con un cinto de oro, de rostro como relámpago y ojos como antorchas de fuego, mientras sus acompañantes huyen asustados', pie: 'El varón vestido de lino junto al río Hidekel (Dn 10:5-6).', origen: 'ia' } ],
      texto: [
        'En el tercer año de Ciro, hacia el 536 a.C., Daniel recibió su última y más extensa visión, que ocupa los capítulos 10 al 12. El capítulo 10 es la introducción, y levanta el velo sobre el mundo espiritual.',
        { h: 'Tres semanas de ayuno (10:1-3)' },
        'Daniel, ya de unos ochenta y cinco años, estuvo afligido tres semanas: no comió manjar delicado, ni entró en su boca carne ni vino. Un grupo de judíos había vuelto a Jerusalén, pero la reconstrucción del templo enfrentaba oposición. Daniel buscaba entender.',
        { h: 'El varón vestido de lino (10:4-9)' },
        'Junto al gran río Hidekel, el Tigris, Daniel vio a un varón vestido de lino, ceñido con oro, cuyo cuerpo era como de berilo, su rostro como un relámpago, sus ojos como antorchas de fuego y su voz como el estruendo de una multitud. Los que estaban con él no vieron la visión, pero huyeron aterrados. Daniel quedó sin fuerzas y cayó sobre su rostro. La descripción se parece mucho a la de Cristo glorificado en Apocalipsis 1:13-15.',
        { h: 'Veintiún días (10:10-14)' },
        'Una mano lo tocó y lo levantó. «Daniel, no temas; porque desde el primer día que dispusiste tu corazón a entender y a humillarte en la presencia de tu Dios, fueron oídas tus palabras; y a causa de tus palabras yo he venido. Mas el príncipe del reino de Persia se me opuso durante veintiún días; pero he aquí Miguel, uno de los principales príncipes, vino para ayudarme» (Dn 10:12-13).',
        'La oración de Daniel fue oída el primer día, pero la respuesta tardó tres semanas, porque hubo una batalla espiritual. El «príncipe del reino de Persia» no era el rey Ciro, sino un ser espiritual, un poder demoníaco que influía sobre ese reino. Y anuncia que después vendrá «el príncipe de Grecia» (Dn 10:20).',
        { h: 'La guerra espiritual' },
        'El capítulo 10 enseña algo que el Nuevo Testamento confirma: «no tenemos lucha contra sangre y carne, sino contra principados, contra potestades, contra los gobernadores de las tinieblas de este siglo, contra huestes espirituales de maldad en las regiones celestes» (Ef 6:12). Detrás de los acontecimientos políticos hay un conflicto espiritual. La oración de los creyentes no es un ritual vacío: está relacionada con esa batalla. Por eso Pablo, después de describir la armadura de Dios, manda orar «en todo tiempo con toda oración y súplica en el Espíritu» (Ef 6:18).',
        'Tres veces el mensajero fortaleció a Daniel: «Muy amado, no temas; la paz sea contigo; esfuérzate y aliéntate» (Dn 10:19).'
      ],
      pensar: 'La oración de Daniel fue oída el primer día, pero la respuesta llegó después de una batalla espiritual de veintiún días (Dn 10:12-13). ¿Qué te enseña esto sobre perseverar en la oración cuando la respuesta tarda?'
    },
    {
      id: 'cap-11a', n: 'Capítulo 11 (I): de Persia a Antíoco IV', ref: 'Daniel 11:1-35', fecha: [-530, -164],
      visual: [ { tipo: 'tabla', titulo: 'Daniel 11', tabla: {
        titulo: 'Daniel 11:2-35 y la historia',
        cab: ['Versículos', 'Profecía', 'Cumplimiento'],
        filas: [
          ['2', 'Tres reyes más en Persia; el cuarto, muy rico, contra Grecia', 'Cambises, Esmerdis y Darío I; Jerjes invade Grecia (480 a.C.)'],
          ['3-4', 'Un rey valiente; su reino repartido en cuatro, no a sus descendientes', 'Alejandro Magno; el imperio dividido entre sus generales'],
          ['5-20', 'Guerras entre el rey del norte y el rey del sur', 'Seléucidas (Siria) contra Ptolomeos (Egipto), 323–175 a.C.'],
          ['21-35', 'Un hombre despreciable que toma el reino con halagos y profana el santuario', 'Antíoco IV Epífanes (175–164 a.C.)']
        ],
        nota: 'La ruta Los reyes del norte y del sur recorre cada versículo en el mapa.'
      } } ],
      texto: [
        'El capítulo 11 es la profecía más detallada de toda la Biblia. El mensajero anuncia a Daniel, en el 536 a.C., los acontecimientos de los cuatro siglos siguientes, con tanta precisión que los críticos del libro piensan que se escribió después de los hechos.',
        { h: 'Persia y Grecia (11:2-4)' },
        '«Aún habrá tres reyes en Persia, y el cuarto se hará de grandes riquezas más que todos ellos; y al hacerse fuerte con sus riquezas, levantará a todos contra el reino de Grecia» (Dn 11:2). Después de Ciro reinaron Cambises, el usurpador Esmerdis y Darío I; el cuarto fue Jerjes, el rey de Ester, famoso por sus riquezas, que invadió Grecia en el 480 a.C.',
        'Luego se levantaría un rey valiente, Alejandro Magno, «Pero cuando se haya levantado, su reino será quebrantado y repartido hacia los cuatro vientos del cielo; no a sus descendientes» (Dn 11:4). Alejandro murió joven, sus hijos fueron asesinados, y su imperio se repartió entre sus generales.',
        { h: 'El norte y el sur (11:5-20)' },
        'Desde el versículo 5, la profecía se concentra en dos de esos reinos, porque estaban a ambos lados de la tierra de Israel: el rey del sur, la dinastía de los Ptolomeos en Egipto, y el rey del norte, la dinastía de los Seléucidas en Siria. Durante siglo y medio pelearon entre sí, y Judea fue su campo de batalla. La profecía anuncia alianzas matrimoniales, invasiones, batallas como la de Rafia y la de Paneas, y la intervención de Roma, con detalles que se cumplieron con exactitud.',
        { h: 'Antíoco IV (11:21-35)' },
        'Desde el versículo 21, el texto se detiene en un rey del norte, «un hombre despreciable», que tomaría el reino con halagos: Antíoco IV Epífanes. Invadió Egipto, fue detenido por las naves de Quitim, es decir, por Roma, y descargó su furia contra Jerusalén. «Y se levantarán de su parte tropas que profanarán el santuario y la fortaleza, y quitarán el continuo sacrificio, y pondrán la abominación desoladora» (Dn 11:31). En el 167 a.C., Antíoco levantó un altar a Zeus en el templo.',
        'Pero el texto anuncia también la resistencia: «mas el pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32). Los macabeos se levantaron, y en el 164 a.C. purificaron el templo, lo que los judíos recuerdan cada año en la fiesta de Janucá, la fiesta de la dedicación (Jn 10:22).'
      ],
      pensar: '«El pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32). ¿Cómo te da fuerza y valor conocer a Dios en tiempos de presión contra tu fe?'
    },
    {
      id: 'cap-11b', n: 'Capítulo 11 (II): el rey de los últimos tiempos', ref: 'Daniel 11:36-45; 2 Tesalonicenses 2:3-4; Apocalipsis 13:5-8', fecha: 2026,
      visual: [ { tipo: 'mapa', titulo: 'Mapa', estado: { view: LEVANTE_EGIPTO, capas: [], lugares: ['jerusalen', 'r-edom', 'r-moab', 'r-amon', 'r-egipto', 'r-libia', 'r-cus'] } } ],
      texto: [
        'Hasta el versículo 35, Daniel 11 se cumplió con exactitud en la historia de los reyes del norte y del sur hasta Antíoco IV. Pero desde el versículo 36, algo cambia.',
        { h: 'Un salto en el tiempo' },
        'El versículo 35 termina hablando del «tiempo determinado», y el 40 dice expresamente «al cabo del tiempo», en el tiempo del fin. Lo que se describe en los versículos 36 al 45 no corresponde a la vida de Antíoco IV: los historiadores no conocen una última campaña de Antíoco en Egipto ni su muerte entre los mares y el monte santo; murió en Persia. La interpretación premilenial entiende que el texto da un salto, de Antíoco, el tipo, al anticristo, el cumplimiento final, igual que el cuerno pequeño de Daniel 8 anticipa al de Daniel 7.',
        { h: 'El rey que hará su voluntad (11:36-39)' },
        '«Y el rey hará su voluntad, y se ensoberbecerá, y se engrandecerá sobre todo dios; y contra el Dios de los dioses hablará maravillas, y prosperará, hasta que sea consumada la ira» (Dn 11:36). No hará caso del Dios de sus padres, ni respetará a ningún dios, porque se engrandecerá sobre todos; honrará a un dios de las fortalezas, el poder militar. Es el mismo personaje que Pablo llama el hombre de pecado, que «se opone y se levanta contra todo lo que se llama Dios» (2 Ts 2:4), y la bestia de Apocalipsis 13.',
        { h: 'Su última campaña (11:40-45)' },
        'Al tiempo del fin, el rey del sur y el rey del norte lo atacarán, pero él entrará en muchas tierras, también en la tierra gloriosa, Israel. Edom, Moab y Amón escaparán de su mano; dominará Egipto, y lo seguirán Libia y Etiopía. Noticias del oriente y del norte lo atemorizarán. «Y plantará las tiendas de su palacio entre los mares y el monte glorioso y santo; mas llegará a su fin, y no tendrá quien le ayude» (Dn 11:45).',
        'La identidad exacta de los reyes del norte y del sur en el tiempo del fin se discute. Lo seguro es el final: el anticristo establecerá su cuartel junto a Jerusalén, y allí será destruido por el Señor en su venida (2 Ts 2:8; Ap 19:20). El capítulo 12 continúa la misma escena.'
      ],
      pensar: 'El rey de los últimos tiempos parecerá invencible, pero «llegará a su fin, y no tendrá quien le ayude» (Dn 11:45). ¿Qué te dice esto sobre el destino de todo poder que se levanta contra Dios?'
    },
    {
      id: 'cap-12', n: 'Capítulo 12: el tiempo del fin', ref: 'Daniel 12; Mateo 24:21; Juan 5:28-29; Apocalipsis 12:7; 22:10', fecha: 2026,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-entendidos.webp', alt: 'Bajo un cielo nocturno lleno de estrellas brillantes, una multitud de personas resucitadas sale a la luz con los rostros resplandecientes como las estrellas, mientras amanece un gran resplandor en el horizonte', pie: '«Los entendidos resplandecerán como el resplandor del firmamento» (Dn 12:3).', origen: 'ia' } ],
      texto: [
        'El último capítulo continúa la visión del capítulo 11 y la lleva hasta el final de la historia.',
        { h: 'Miguel y el tiempo de angustia (12:1)' },
        '«En aquel tiempo se levantará Miguel, el gran príncipe que está de parte de los hijos de tu pueblo; y será tiempo de angustia, cual nunca fue desde que hubo gente hasta entonces; pero en aquel tiempo será libertado tu pueblo, todos los que se hallen escritos en el libro» (Dn 12:1). Es la gran tribulación. Jesús usó casi las mismas palabras (Mt 24:21). Miguel, el arcángel protector de Israel, aparece también luchando contra el dragón en Apocalipsis 12:7.',
        { h: 'La resurrección (12:2-3)' },
        '«Y muchos de los que duermen en el polvo de la tierra serán despertados, unos para vida eterna, y otros para vergüenza y confusión perpetua» (Dn 12:2). Es la enseñanza más clara del Antiguo Testamento sobre la resurrección de los muertos, justos e injustos, y su destino eterno. Jesús la retomó (Jn 5:28-29), y Apocalipsis 20 muestra que las dos resurrecciones están separadas por mil años.',
        '«Los entendidos resplandecerán como el resplandor del firmamento; y los que enseñan la justicia a la multitud, como las estrellas a perpetua eternidad» (Dn 12:3).',
        { h: 'Sella el libro (12:4-9)' },
        'Daniel recibió la orden de cerrar las palabras y sellar el libro hasta el tiempo del fin. «Muchos correrán de aquí para allá, y la ciencia se aumentará» (Dn 12:4). Daniel preguntó: «Señor mío, ¿cuál será el fin de estas cosas?», y se le respondió: «Anda, Daniel, pues estas palabras están cerradas y selladas hasta el tiempo del fin» (Dn 12:8-9). Siglos después, a Juan se le dijo lo contrario: «No selles las palabras de la profecía de este libro, porque el tiempo está cerca» (Ap 22:10).',
        { h: '1.290 y 1.335 días (12:11-12)' },
        'Desde que se quite el continuo sacrificio y se ponga la abominación desoladora habrá 1.290 días, y es bienaventurado el que llegue a 1.335. La segunda mitad de la tribulación tiene 1.260 días; los treinta días adicionales podrían corresponder a los juicios que siguen a la segunda venida, y los cuarenta y cinco siguientes, al comienzo del reino. La Biblia no lo explica, y es mejor no ser dogmáticos.',
        { h: 'Tú irás hasta el fin (12:13)' },
        'El libro termina con una promesa personal para Daniel, que ya tenía más de ochenta años: «Y tú irás hasta el fin, y reposarás, y te levantarás para recibir tu heredad al fin de los días» (Dn 12:13). Daniel moriría sin ver el cumplimiento de sus visiones, pero resucitaría para recibir su parte en el reino.'
      ],
      pensar: 'Dios prometió a Daniel: «te levantarás para recibir tu heredad al fin de los días» (Dn 12:13). ¿Cómo cambia tu vida tener la seguridad de la resurrección y de una herencia en el reino de Dios?'
    }
  ];

  /* ---------------- Ruta IV · Teología de Daniel ---------------- */
  const teologia = [
    {
      id: 'soberania', n: 'Dios soberano sobre la historia', ref: 'Daniel 1:2; 2:21, 37-38; 4:17, 34-35; 5:18-21; Romanos 13:1; Proverbios 21:1', fecha: [-605, -536],
      visual: [ { tipo: 'cita', titulo: 'Pasaje', texto: 'Todos los habitantes de la tierra son considerados como nada; y él hace según su voluntad en el ejército del cielo, y en los habitantes de la tierra, y no hay quien detenga su mano, y le diga: ¿Qué haces?', ref: 'Daniel 4:35' } ],
      texto: [
        'La doctrina que domina el libro de Daniel es la soberanía de Dios: Dios gobierna sobre todas las cosas, incluida la historia de las naciones, y cumple sus propósitos sin que nadie pueda impedirlo.',
        { h: 'Dios da y quita reinos' },
        'Daniel lo afirma una y otra vez. Dios entregó Judá a Nabucodonosor (Dn 1:2). Dios le dio a Nabucodonosor «reino, poder, fuerza y majestad» (Dn 2:37). Dios «quita reyes, y pone reyes» (Dn 2:21). Dios humilló a Nabucodonosor y le devolvió el reino. Dios contó los días de Belsasar y le puso fin (Dn 5:26). Ningún rey llega al poder ni lo pierde fuera de la voluntad de Dios. Pablo lo enseña también: «no hay autoridad sino de parte de Dios» (Ro 13:1).',
        { h: 'Dios conoce el futuro' },
        'La soberanía de Dios incluye su conocimiento del futuro. Daniel revela con siglos de anticipación la sucesión de los imperios y aun detalles de las guerras entre Siria y Egipto. Dios no está esperando a ver qué pasa: «hay un Dios en los cielos, el cual revela los misterios, y él ha hecho saber… lo que ha de acontecer en los postreros días» (Dn 2:28).',
        { h: 'Soberanía y responsabilidad' },
        'La soberanía de Dios no anula la responsabilidad humana. Nabucodonosor fue juzgado por su orgullo, y Belsasar por su sacrilegio. Daniel aconsejó al rey que se arrepintiera (Dn 4:27). Y la oración de Daniel fue parte del medio por el que Dios cumplió su plan (Dn 9:3, 23; 10:12). Dios gobierna, y los seres humanos son responsables de sus decisiones.',
        { h: 'Un consuelo para el creyente' },
        'Para los exiliados, esta doctrina era un consuelo inmenso. Babilonia no había vencido a Dios: Dios la había usado, y la juzgaría a su tiempo. Para el creyente de hoy, significa que ningún gobierno, crisis o persecución está fuera del control de Dios. Nabucodonosor, después de su humillación, lo dijo mejor que nadie: Dios «hace según su voluntad en el ejército del cielo, y en los habitantes de la tierra, y no hay quien detenga su mano» (Dn 4:35).'
      ],
      pensar: 'Nabucodonosor aprendió que nadie puede detener la mano de Dios (Dn 4:35). ¿En qué situación de tu vida necesitas descansar en la soberanía de Dios?'
    },
    {
      id: 'cristo', n: 'Cristo en Daniel', ref: 'Daniel 2:34-35, 44-45; 3:25; 7:13-14; 9:25-26; 10:5-6; Mateo 21:42-44; 26:64', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Cristo', tabla: {
        titulo: 'Cristo en el libro de Daniel',
        cab: ['Pasaje', 'Imagen', 'En el Nuevo Testamento'],
        filas: [
          ['Dn 2:34-35, 44-45', 'La piedra cortada no con mano', 'Cristo, la piedra angular que desmenuza (Mt 21:42-44)'],
          ['Dn 3:25', 'El cuarto en el horno', 'Dios con su pueblo en la prueba (Is 43:2)'],
          ['Dn 7:13-14', 'Uno como un hijo de hombre', 'Jesús, el Hijo del Hombre (Mt 26:64)'],
          ['Dn 9:25-26', 'El Mesías Príncipe al que se le quita la vida', 'La muerte de Cristo por otros'],
          ['Dn 10:5-6', 'El varón vestido de lino', 'Cristo glorificado (Ap 1:13-15)']
        ]
      } } ],
      texto: [
        'Jesús dijo que las Escrituras dan testimonio de él (Jn 5:39). Daniel contiene algunas de las revelaciones más claras del Mesías en el Antiguo Testamento.',
        { h: 'La piedra' },
        'En Daniel 2, una piedra cortada no con mano destruye los reinos del mundo y llena la tierra. Jesús aplicó a sí mismo la imagen de la piedra: «¿Nunca leísteis en las Escrituras: La piedra que desecharon los edificadores, ha venido a ser cabeza del ángulo?… Y el que cayere sobre esta piedra será quebrantado; y sobre quien ella cayere, le desmenuzará» (Mt 21:42, 44). La última frase recuerda a Daniel 2. Cristo es la piedra de origen divino que establecerá el reino eterno.',
        { h: 'El Hijo del Hombre' },
        'En Daniel 7, uno como un hijo de hombre viene con las nubes y recibe un reino eterno. Es el título que Jesús usó con más frecuencia para sí mismo, y el que provocó su condena ante el sanedrín (Mt 26:64-66). Expresa a la vez su humanidad, «hijo de hombre», y su divinidad: viene en las nubes, como solo Dios, y recibe la adoración de todos los pueblos.',
        { h: 'El Mesías Príncipe' },
        'Daniel 9 es el único lugar del Antiguo Testamento donde aparece la palabra Mesías como título, «el Mesías Príncipe» (Dn 9:25). La profecía anuncia el tiempo de su venida y su muerte: «se quitará la vida al Mesías, mas no por sí» (Dn 9:26). Murió no por sus pecados, sino por los de otros.',
        { h: 'El Señor presente' },
        'Muchos ven también a Cristo, antes de su encarnación, en el cuarto varón del horno de fuego (Dn 3:25), y en el varón vestido de lino de Daniel 10, cuya descripción coincide con la de Cristo glorificado en Apocalipsis 1. Sea así o no, Daniel muestra a un Dios que está con su pueblo en el horno y en el foso, y que se revela a sus siervos.'
      ],
      pensar: 'Jesús se presentó como la piedra que los edificadores desecharon y que un día desmenuzará los reinos (Mt 21:42-44). ¿Has edificado tu vida sobre esa piedra?'
    },
    {
      id: 'angeles', n: 'Ángeles y guerra espiritual', ref: 'Daniel 3:28; 6:22; 7:10; 8:16; 9:21; 10:12-21; 12:1; Lucas 1:19, 26; Efesios 6:10-18; Apocalipsis 12:7', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Ángeles', tabla: {
        titulo: 'Los ángeles en Daniel',
        cab: ['Quién', 'Qué hace', 'Pasaje'],
        filas: [
          ['El ángel enviado al horno', 'Libra a los tres amigos', 'Dn 3:28'],
          ['El ángel del foso', 'Cierra la boca de los leones', 'Dn 6:22'],
          ['Millares de millares', 'Sirven ante el trono de Dios', 'Dn 7:10'],
          ['Los vigilantes santos', 'Anuncian el decreto sobre Nabucodonosor', 'Dn 4:13, 17'],
          ['Gabriel', 'Interpreta las visiones y trae la profecía de las setenta semanas', 'Dn 8:16; 9:21; Lc 1:19, 26'],
          ['Miguel', 'El gran príncipe que protege a Israel', 'Dn 10:13, 21; 12:1; Jud 9; Ap 12:7'],
          ['Los príncipes de Persia y de Grecia', 'Poderes espirituales opuestos a Dios', 'Dn 10:13, 20']
        ]
      } } ],
      texto: [
        'Daniel es el libro del Antiguo Testamento que más revela sobre el mundo de los ángeles, y es el primero en dar el nombre de dos de ellos: Gabriel y Miguel.',
        { h: 'Ángeles que sirven' },
        'Dios envió su ángel para librar a los amigos de Daniel del horno y a Daniel de los leones. Ante el trono de Dios, millares de millares le sirven (Dn 7:10). Hebreos los describe como «espíritus ministradores, enviados para servicio a favor de los que serán herederos de la salvación» (He 1:14).',
        { h: 'Gabriel y Miguel' },
        'Gabriel es el mensajero que interpreta las visiones a Daniel y le trae la profecía de las setenta semanas (Dn 8:16; 9:21). Siglos después, el mismo Gabriel anunció a Zacarías el nacimiento de Juan el Bautista, y a María el nacimiento de Jesús (Lc 1:19, 26). El ángel que reveló el tiempo de la venida del Mesías fue el que anunció su llegada.',
        'Miguel es llamado «uno de los principales príncipes» (Dn 10:13) y «el gran príncipe que está de parte de los hijos de tu pueblo» (Dn 12:1). Judas lo llama arcángel (Jud 9), y Apocalipsis lo muestra al frente de los ángeles en la guerra contra el dragón (Ap 12:7).',
        { h: 'La guerra espiritual' },
        'Daniel 10 revela que hay poderes espirituales malignos relacionados con las naciones: el príncipe de Persia y el príncipe de Grecia, que se opusieron al mensajero de Dios. Detrás de los imperios hay una batalla invisible. El Nuevo Testamento lo confirma: la lucha del creyente es «contra principados, contra potestades… contra huestes espirituales de maldad en las regiones celestes» (Ef 6:12).',
        'La respuesta del creyente no es el miedo, sino la oración y la armadura de Dios. La oración de Daniel fue oída desde el primer día y movilizó la respuesta del cielo. Jesús, por su muerte y resurrección, despojó a los principados y potestades (Col 2:15), y el creyente lleno del Espíritu ora con la autoridad de su nombre. Pero la guerra espiritual no es una técnica: es una vida de oración, santidad y fe, como la de Daniel.'
      ],
      pensar: 'La oración de Daniel estaba relacionada con una batalla en el mundo espiritual (Dn 10:12-13). ¿Cómo cambia tu manera de orar saber que tus oraciones tienen efecto en esa batalla?'
    },
    {
      id: 'reino', n: 'El reino de Dios y los últimos tiempos', ref: 'Daniel 2:44; 7:13-14, 18, 22, 27; 9:24-27; 11:36–12:3', fecha: 2026,
      visual: [ { tipo: 'imagen', titulo: 'Esquema', src: OTRA + 'escatologia/img/esquema-completo.svg', alt: 'Esquema de los eventos futuros: la era de la iglesia, el arrebatamiento, la tribulación, la segunda venida, el milenio, el juicio y los cielos nuevos', pie: 'Daniel en el esquema de los últimos tiempos.', origen: 'esquema' } ],
      texto: [
        'Daniel es uno de los pilares de la escatología bíblica. Sus profecías, leídas junto con el resto de la Escritura, dan el marco de los eventos del fin. Este estudio sigue la interpretación premilenial y pretribulacional.',
        { h: 'Los tiempos de los gentiles' },
        'Daniel 2 y 7 describen el período en que Israel y Jerusalén están bajo el dominio de imperios gentiles, desde Babilonia hasta la forma final del cuarto reino. Jesús lo llamó «los tiempos de los gentiles» (Lc 21:24). Terminarán cuando la piedra golpee los pies de la estatua: en la segunda venida de Cristo.',
        { h: 'La semana setenta' },
        'Las setenta semanas de Daniel 9 dan la cronología. Sesenta y nueve semanas se cumplieron hasta el Mesías. Entre ellas y la última hay un paréntesis, la era de la iglesia, que Daniel no vio. La semana setenta es la tribulación de siete años, que comenzará con un pacto del príncipe que ha de venir y tendrá en su mitad la abominación desoladora.',
        { h: 'El anticristo' },
        'Daniel lo describe en tres pasajes: el cuerno pequeño que surge de los diez cuernos y habla contra el Altísimo (Dn 7:8, 24-25); el príncipe que ha de venir, que rompe el pacto (Dn 9:26-27); y el rey que hará su voluntad y se engrandecerá sobre todo dios (Dn 11:36-45). Antíoco IV, el cuerno pequeño de Daniel 8, es su anticipo histórico.',
        { h: 'La tribulación y la liberación' },
        'Daniel anuncia un tiempo de angustia sin igual y la liberación del pueblo de Dios, todos los que se hallen escritos en el libro (Dn 12:1). Israel será salvo en ese tiempo, como enseña también Pablo (Ro 11:26).',
        { h: 'El reino eterno' },
        'Todo culmina en el reino de Dios: el Hijo del Hombre recibe dominio eterno (Dn 7:14), y el reino se da a los santos del Altísimo (Dn 7:27). La interpretación premilenial entiende que este reino comenzará en la tierra con el reinado de mil años de Cristo y continuará por la eternidad.',
        { ir: { t: 'Abrir el recurso Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'Todas las visiones de Daniel terminan con el reino eterno de Dios. ¿Cómo influye esa certeza en tu manera de vivir hoy en un mundo de reinos que pasan?'
    },
    {
      id: 'resurreccion', n: 'La resurrección y el juicio', ref: 'Daniel 7:9-10; 12:1-3, 13; Juan 5:28-29; Apocalipsis 20:4-6, 11-15', fecha: 2026,
      visual: [ { tipo: 'cita', titulo: 'Pasaje', texto: 'Y muchos de los que duermen en el polvo de la tierra serán despertados, unos para vida eterna, y otros para vergüenza y confusión perpetua.', ref: 'Daniel 12:2' } ],
      texto: [
        'Daniel contiene la declaración más clara del Antiguo Testamento sobre la resurrección de los muertos y el juicio final.',
        { h: 'Despertarán del polvo' },
        '«Y muchos de los que duermen en el polvo de la tierra serán despertados, unos para vida eterna, y otros para vergüenza y confusión perpetua» (Dn 12:2). La muerte es presentada como un sueño, del que habrá un despertar. Y no todos despertarán para lo mismo: unos para vida eterna, otros para vergüenza perpetua. Es la base de lo que Jesús enseñó: «vendrá hora cuando todos los que están en los sepulcros oirán su voz; y los que hicieron lo bueno, saldrán a resurrección de vida; mas los que hicieron lo malo, a resurrección de condenación» (Jn 5:28-29).',
        'La palabra «muchos» no significa que algunos no resucitarán, sino que se refiere a la multitud de los muertos. Apocalipsis muestra que las dos resurrecciones están separadas por el milenio: la primera, de los justos, antes del reino; la segunda, de los injustos, ante el gran trono blanco (Ap 20:5-6, 11-15).',
        { h: 'El juicio' },
        'Daniel 7 presenta el tribunal de Dios: el Anciano de días se sienta, millares le sirven, «el Juez se sentó, y los libros fueron abiertos» (Dn 7:10). Y Daniel 12:1 habla de los que «se hallen escritos en el libro», el libro de la vida. El destino eterno se decide por la relación con Dios, por estar inscrito en ese libro, como confirma Apocalipsis 20:15.',
        { h: 'Resplandecerán' },
        'Para los justos, la resurrección será gloriosa: «Los entendidos resplandecerán como el resplandor del firmamento; y los que enseñan la justicia a la multitud, como las estrellas a perpetua eternidad» (Dn 12:3). Jesús usó una imagen parecida: «los justos resplandecerán como el sol en el reino de su Padre» (Mt 13:43).',
        { h: 'Tu heredad' },
        'El libro termina con una promesa personal a Daniel: «te levantarás para recibir tu heredad al fin de los días» (Dn 12:13). Daniel murió sin ver el cumplimiento de lo que anunció, pero murió con esperanza. Lo mismo puede decir todo creyente: la muerte no es el final, sino un descanso hasta el día de la resurrección.'
      ],
      pensar: 'Daniel dice que los que enseñan la justicia a la multitud resplandecerán como las estrellas (Dn 12:3). ¿Qué recompensa eterna puede tener tu esfuerzo por llevar a otros a Dios?'
    },
    {
      id: 'vida-fiel', n: 'Fe, oración y fidelidad', ref: 'Daniel 1:8; 2:17-18; 3:16-18; 6:10; 9:3-19; 10:12; Hebreos 11:33-34', fecha: [-605, -536],
      visual: [ { tipo: 'tabla', titulo: 'Fidelidad', tabla: {
        titulo: 'Principios de la vida fiel en Daniel',
        cab: ['Principio', 'Ejemplo'],
        filas: [
          ['Decidir de antemano', 'Daniel «propuso en su corazón» (Dn 1:8)'],
          ['Respeto sin transigir', 'Pidió una alternativa en vez de rebelarse (Dn 1:8-14)'],
          ['Orar en comunidad', 'Daniel y sus amigos oran juntos (Dn 2:17-18)'],
          ['Fe sin condiciones', '«Y si no…» (Dn 3:18)'],
          ['Hábitos constantes', 'Oraba tres veces al día «como lo solía hacer antes» (Dn 6:10)'],
          ['Excelencia en el trabajo', 'Ninguna falta fue hallada en él (Dn 6:4)'],
          ['Humildad', 'Daniel no se atribuyó la sabiduría (Dn 2:30)'],
          ['Intercesión', 'Confesó el pecado de su pueblo como propio (Dn 9:5)']
        ]
      } } ],
      texto: [
        'Daniel no solo enseña doctrina: muestra cómo se vive la fe. Hebreos 11 menciona a Daniel y a sus amigos entre los héroes de la fe, que «taparon bocas de leones, apagaron fuegos impetuosos» (He 11:33-34).',
        { h: 'Una fe que decide' },
        'La fidelidad de Daniel comenzó con una decisión: «propuso en su corazón no contaminarse» (Dn 1:8). Las grandes pruebas de los capítulos 3 y 6 fueron enfrentadas por hombres que habían decidido mucho antes a quién servirían. La fidelidad en lo pequeño prepara para lo grande.',
        { h: 'Una fe sin condiciones' },
        'La respuesta de los amigos de Daniel muestra una fe madura. Creían que Dios podía librarlos, y esperaban que lo hiciera. Pero su obediencia no dependía de eso: «Y si no… no serviremos a tus dioses» (Dn 3:18). Es la fe que confía en Dios aunque la respuesta no sea la esperada.',
        { h: 'Una vida de oración' },
        'La oración atraviesa todo el libro. Daniel ora con sus amigos en la crisis (Dn 2:17-18), ora tres veces al día con constancia (Dn 6:10), intercede por su pueblo con ayuno y confesión (Dn 9:3-19), y busca a Dios tres semanas para entender su voluntad (Dn 10:2-3, 12). Daniel no oraba solo en las emergencias: la oración era su manera de vivir. Por eso, cuando llegó la prueba, no tuvo que cambiar nada.',
        { h: 'Fiel en un mundo pagano' },
        'Daniel muestra que se puede servir con excelencia en un ambiente que no conoce a Dios. Aprendió la lengua y la cultura de Babilonia, trabajó con integridad para reyes paganos, buscó el bien de la ciudad, como había aconsejado Jeremías (Jer 29:7), y fue de bendición para ellos. Pero nunca negoció su fidelidad a Dios. Es un modelo para los creyentes que trabajan en el mundo: ni aislados, ni contaminados.',
        'La ruta temática La vida de Daniel desarrolla estos aspectos.'
      ],
      pensar: 'Daniel y sus amigos decidieron su fidelidad mucho antes de que llegara la prueba (Dn 1:8). ¿Qué decisiones necesitas tomar hoy para estar firme cuando lleguen los días difíciles?'
    }
  ];

  /* ---------------- Ruta V · Los imperios de Daniel en el mapa ---------------- */
  const imperios = [
    {
      id: 'm-babilonia', n: 'La cabeza de oro: Babilonia', ref: 'Daniel 2:37-38; 7:4', fecha: -570,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDIO, capas: ['babilonia-570'], lugares: ['babilonia', 'jerusalen', 'carquemis', 'susa', 'ninive'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-puerta-ishtar.webp', alt: 'La Puerta de Ishtar de Babilonia al atardecer', pie: 'La Puerta de Ishtar, de la Babilonia de Nabucodonosor.', origen: 'ia' }
      ],
      texto: [
        'Esta ruta ubica en el mapa los cuatro reinos de las visiones de Daniel. El primero es Babilonia, la cabeza de oro y el león con alas de águila.',
        { h: 'La cabeza de oro' },
        'Daniel le dijo a Nabucodonosor: «Tú, oh rey, eres rey de reyes; porque el Dios del cielo te ha dado reino, poder, fuerza y majestad… tú eres aquella cabeza de oro» (Dn 2:37-38). El oro representa la riqueza y el esplendor de Babilonia, y también el poder absoluto de Nabucodonosor, que no compartía el gobierno con nadie.',
        { h: 'El león con alas de águila' },
        'En Daniel 7, Babilonia es un león con alas de águila. El león y el águila eran símbolos reales en Babilonia: la vía procesional estaba decorada con leones de ladrillo vidriado. Jeremías también comparó a Nabucodonosor con un león y un águila (Jer 4:7; 49:22). A este león le arrancaron las alas, se puso en pie como hombre y le fue dado corazón de hombre (Dn 7:4), quizá en alusión a la humillación y restauración de Nabucodonosor.',
        { h: 'El imperio' },
        'El mapa muestra el imperio neobabilónico en tiempos de Nabucodonosor. Se extendía desde el golfo Pérsico hasta el mar Mediterráneo y las fronteras de Egipto, incluyendo Mesopotamia, Siria y la tierra de Judá. Fue el imperio más breve de los cuatro: desde la victoria de Carquemis, en el 605 a.C., hasta la caída de Babilonia, en el 539 a.C., pasaron apenas sesenta y seis años.',
        'Dios usó a Babilonia como instrumento de juicio sobre Judá, como anunció Jeremías, pero también la juzgó por su orgullo y su crueldad. El oro más fino no la libró de caer en una noche.',
        'El recurso El imperio babilónico recorre su historia.'
      ],
      pensar: 'El imperio de la cabeza de oro duró apenas sesenta y seis años (Dn 2:38-39). ¿Qué te enseña la brevedad de los imperios humanos sobre lo que vale la pena construir?'
    },
    {
      id: 'm-persia', n: 'El pecho de plata: Media y Persia', ref: 'Daniel 2:39; 7:5; 8:3-4, 20', fecha: -500,
      visual: [ { tipo: 'mapa', titulo: 'Mapa', pasos: [
        { t: 'Ciro toma Babilonia (539 a.C.).', fecha: -539, estado: { view: ORIENTE, capas: ['persia-539'], lugares: ['babilonia', 'susa', 'ecbatana', 'pasargada'], trazos: ['caida-539'] } },
        { t: 'El imperio persa en su máxima extensión, bajo Darío I.', fecha: -500, estado: { view: ORIENTE, capas: ['persia-500'], lugares: ['susa', 'persepolis', 'babilonia', 'sardis', 'jerusalen'] } }
      ] } ],
      texto: [
        'El segundo reino es Media y Persia: el pecho y los brazos de plata, el oso y el carnero.',
        { h: 'Plata: inferior y más grande' },
        'Daniel dijo que después de Nabucodonosor se levantaría «otro reino inferior al tuyo» (Dn 2:39). La plata es menos valiosa que el oro, pero el imperio persa fue mucho más extenso que el babilónico. Era inferior en otro sentido: el rey persa no tenía el poder absoluto de Nabucodonosor, sino que gobernaba con nobles y leyes que ni él podía cambiar, como lo muestra la historia de Daniel en el foso (Dn 6:8, 15).',
        { h: 'El oso y el carnero' },
        'En Daniel 7, el segundo reino es un oso que se alzaba más de un costado y tenía tres costillas en la boca (Dn 7:5). El lado más alto representa a Persia, que dominó sobre Media. Las tres costillas se suelen relacionar con las tres grandes conquistas de Ciro y su hijo: Lidia, Babilonia y Egipto.',
        'En Daniel 8, el mismo reino es un carnero con dos cuernos, uno más alto que había crecido después, que hería al poniente, al norte y al sur. Gabriel lo identifica: «éstos son los reyes de Media y de Persia» (Dn 8:20). Persia, el cuerno que creció después, superó a Media. Y el carnero se expandió hacia el occidente, el norte y el sur, como muestra el mapa.',
        { h: 'Un imperio que favoreció a Israel' },
        'El imperio persa duró unos doscientos años, del 539 al 331 a.C. Fue el imperio que permitió a los judíos volver a su tierra, reconstruir el templo y los muros de Jerusalén. En él vivieron Ester, Esdras y Nehemías. Usa los botones bajo el mapa para ver su crecimiento.',
        'El recurso El imperio persa recorre su historia.'
      ],
      pensar: 'Dios usó al imperio persa para hacer volver a su pueblo y reconstruir Jerusalén. ¿Cómo puede Dios usar a gobiernos y autoridades para el bien de su pueblo?'
    },
    {
      id: 'm-grecia', n: 'El vientre de bronce: Grecia', ref: 'Daniel 2:39; 7:6; 8:5-8, 21-22; 11:3-4', fecha: -323,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'El imperio de Alejandro Magno (323 a.C.).', fecha: -323, estado: { view: ORIENTE, capas: ['alejandro-323'], lugares: ['babilonia', 'alejandria', 'jerusalen', 'susa'], trazos: ['alejandro'] } },
          { t: 'El imperio repartido en cuatro reinos (301 a.C.).', fecha: -301, estado: { view: ORIENTE, capas: ['casandro-301', 'lisimaco-301', 'seleucidas-301', 'ptolomeos-301'], lugares: ['alejandria', 'antioquia', 'babilonia', 'jerusalen'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: GR + 'grecia-alejandro.webp', alt: 'Alejandro Magno, joven y sin barba, a caballo al frente de su caballería macedonia', pie: 'Alejandro Magno, el cuerno notable (Dn 8:5).', origen: 'ia' }
      ],
      texto: [
        'El tercer reino es Grecia: el vientre y los muslos de bronce, el leopardo de cuatro alas y el macho cabrío.',
        { h: 'Rapidez' },
        'El leopardo es un animal veloz, y este tenía además cuatro alas (Dn 7:6). El macho cabrío venía del occidente «sobre la faz de toda la tierra, sin tocar tierra» (Dn 8:5). Ambas imágenes describen la velocidad de las conquistas de Alejandro Magno. En solo once años, entre el 334 y el 323 a.C., partiendo de Macedonia, conquistó Asia Menor, Siria, Egipto, Mesopotamia y Persia, y llegó hasta la India.',
        { h: 'El cuerno quebrado' },
        '«Y el macho cabrío se engrandeció sobremanera; pero estando en su mayor fuerza, aquel gran cuerno fue quebrado, y en su lugar salieron otros cuatro cuernos notables hacia los cuatro vientos del cielo» (Dn 8:8). Alejandro murió en Babilonia en el 323 a.C., a los 32 años, en la cumbre de su poder. Daniel 11:4 precisa que su reino sería repartido «no a sus descendientes»: su hermano y sus hijos fueron asesinados en las luchas por el poder.',
        { h: 'Cuatro reinos' },
        'Después de dos décadas de guerras entre sus generales, el imperio quedó dividido en cuatro reinos hacia el 301 a.C.: Casandro en Macedonia y Grecia, Lisímaco en Tracia y Asia Menor, Seleuco en Siria y Mesopotamia, y Ptolomeo en Egipto. Son las cuatro cabezas del leopardo y los cuatro cuernos del macho cabrío. Usa los botones bajo el mapa para ver la división.',
        'Dos de esos reinos, los Seléucidas y los Ptolomeos, son los reyes del norte y del sur de Daniel 11. La ruta siguiente los recorre.'
      ],
      pensar: 'Alejandro conquistó el mundo en once años y murió a los 32, sin que su imperio pasara a sus hijos (Dn 8:8; 11:4). ¿Qué dice esto sobre la fragilidad de la grandeza humana?'
    },
    {
      id: 'm-roma', n: 'Las piernas de hierro: Roma', ref: 'Daniel 2:40-43; 7:7-8, 19-25; 9:26', fecha: 117,
      visual: [ { tipo: 'mapa', titulo: 'Mapa', pasos: [
        { t: 'La república romana hacia el 133 a.C.', fecha: -133, estado: { view: [[22, -12], [52, 50]], capas: ['roma-133'], lugares: ['roma', 'jerusalen', 'alejandria'] } },
        { t: 'El imperio romano en su máxima extensión, bajo Trajano (117 d.C.).', fecha: 117, estado: { view: [[22, -12], [52, 50]], capas: ['roma-117'], lugares: ['roma', 'jerusalen', 'alejandria', 'babilonia'] } }
      ] } ],
      texto: [
        'El cuarto reino es el más fuerte y el más misterioso: las piernas de hierro y los pies de hierro y barro de la estatua, y la bestia espantosa con diez cuernos.',
        { h: 'Fuerte como el hierro' },
        '«Y el cuarto reino será fuerte como hierro; y como el hierro desmenuza y rompe todas las cosas, desmenuzará y quebrantará todo» (Dn 2:40). La cuarta bestia de Daniel 7 tenía dientes de hierro, devoraba y desmenuzaba, y era diferente de todas las anteriores. Roma sucedió a Grecia como poder dominante: conquistó Macedonia en el 168 a.C., Grecia en el 146, Siria en el 64 y Egipto en el 30 a.C. Su dominio fue más extenso y duradero que el de todos los imperios anteriores.',
        'Roma era el poder del mundo cuando nació el Mesías, en tiempos de Augusto; fue un gobernador romano quien lo condenó, y fue Roma la que destruyó Jerusalén y el templo en el año 70, como anunció Daniel 9:26.',
        { h: 'Dos piernas' },
        'Las dos piernas de la estatua se suelen relacionar con la división del imperio en oriente y occidente, que se hizo definitiva en el 395 d.C.',
        { h: 'Pies de hierro y barro' },
        'Los pies y los diez dedos, de hierro mezclado con barro, representan una forma final del cuarto reino: un reino dividido, en parte fuerte y en parte frágil, cuyos elementos no se mezclarán (Dn 2:41-43). En Daniel 7, la cuarta bestia tiene diez cuernos, diez reyes, de entre los cuales surge el cuerno pequeño.',
        'La interpretación premilenial entiende que esa forma final todavía es futura: una confederación de naciones vinculadas a la herencia del imperio romano, en los últimos tiempos, de la que surgirá el anticristo. En los días de esos reyes, la piedra golpeará la estatua y el Dios del cielo levantará su reino (Dn 2:44). Usa los botones bajo el mapa para ver la expansión de Roma.'
      ],
      pensar: 'El reino más fuerte de la estatua tenía pies de barro, y una piedra lo derribó (Dn 2:34). ¿En qué te apoyas tú: en lo que parece fuerte o en la Roca que permanece?'
    }
  ];

  /* ---------------- Ruta VI · Los reyes del norte y del sur ---------------- */
  const NORTE_SUR = [[22.0, 24.0], [40.0, 50.0]];
  const reyes = [
    {
      id: 'r-persia-alejandro', n: 'Cuatro reyes persas y un rey valiente (11:2-4)', ref: 'Daniel 11:2-4; Ester 1:1-4', fecha: [-530, -301],
      visual: [ { tipo: 'mapa', titulo: 'Mapa', pasos: [
        { t: 'Jerjes, el cuarto rey rico, invade Grecia (480 a.C.).', fecha: -480, estado: { view: ORIENTE, capas: ['persia-500'], lugares: ['susa', 'persepolis', 'sardis', 'atenas'], trazos: ['invasion-480'] } },
        { t: 'Alejandro, el rey valiente (334–323 a.C.).', fecha: -323, estado: { view: ORIENTE, capas: ['alejandro-323'], lugares: ['babilonia', 'alejandria', 'susa'], trazos: ['alejandro'] } },
        { t: 'Su reino repartido hacia los cuatro vientos (301 a.C.).', fecha: -301, estado: { view: ORIENTE, capas: ['casandro-301', 'lisimaco-301', 'seleucidas-301', 'ptolomeos-301'], lugares: ['alejandria', 'antioquia', 'jerusalen'] } }
      ] } ],
      texto: [
        'Esta ruta recorre Daniel 11 en el mapa, versículo por versículo. Es la profecía más detallada de la Biblia, entregada a Daniel hacia el 536 a.C.',
        { h: 'Tres reyes y un cuarto (11:2)' },
        '«He aquí que aún habrá tres reyes en Persia, y el cuarto se hará de grandes riquezas más que todos ellos; y al hacerse fuerte con sus riquezas, levantará a todos contra el reino de Grecia» (Dn 11:2). Después de Ciro reinaron Cambises (530–522 a.C.), el usurpador conocido como el falso Esmerdis (522 a.C.) y Darío I (522–486 a.C.). El cuarto fue Jerjes I (486–465 a.C.), el Asuero del libro de Ester, famoso por su riqueza: Ester describe un banquete de ciento ochenta días para mostrar «las riquezas de la gloria de su reino» (Est 1:4). En el 480 a.C. lanzó una enorme invasión contra Grecia, que terminó en derrota en Salamina.',
        { h: 'El rey valiente (11:3-4)' },
        '«Se levantará luego un rey valiente, el cual dominará con gran poder y hará su voluntad» (Dn 11:3). Un siglo y medio después, Alejandro Magno conquistó el imperio persa. «Pero cuando se haya levantado, su reino será quebrantado y repartido hacia los cuatro vientos del cielo; no a sus descendientes, ni según el dominio con que él dominó» (Dn 11:4). Alejandro murió en el 323 a.C.; su hermano y sus dos hijos fueron asesinados, y su imperio se dividió entre sus generales.',
        { h: 'Del cuarto a los dos' },
        'Desde el versículo 5, la profecía deja de lado los otros reinos y se concentra en los dos que rodeaban la tierra de Israel: el del sur, Egipto, gobernado por los Ptolomeos, y el del norte, Siria, gobernado por los Seléucidas. Norte y sur se cuentan desde Jerusalén. Durante siglo y medio, Judea fue el campo de batalla entre ambos. Usa los botones bajo el mapa para seguir la historia.'
      ],
      pensar: 'Daniel recibió, dos siglos antes, la noticia de que el imperio de Alejandro no pasaría a sus descendientes (Dn 11:4). ¿Qué te enseña esta precisión sobre la confiabilidad de la Palabra de Dios?'
    },
    {
      id: 'r-guerras', n: 'Las guerras del norte y del sur (11:5-20)', ref: 'Daniel 11:5-20', fecha: [-301, -175],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Los dos reinos: Ptolomeos (sur) y Seléucidas (norte).', fecha: -250, estado: { view: NORTE_SUR, capas: ['ptolomeos-250', 'seleucidas-301'], lugares: ['alejandria', 'antioquia', 'jerusalen'] } },
          { t: 'Rafia (217 a.C.): vence el rey del sur (11:11).', fecha: -217, estado: { view: NORTE_SUR, capas: ['ptolomeos-250', 'seleucidas-301'], lugares: ['rafia', 'antioquia', 'alejandria', 'jerusalen'] } },
          { t: 'Paneas (200 a.C.): el rey del norte toma la tierra gloriosa (11:15-16).', fecha: -200, estado: { view: NORTE_SUR, capas: ['seleucidas-200'], lugares: ['paneas', 'jerusalen', 'antioquia', 'alejandria'] } },
          { t: 'Magnesia (190 a.C.): un príncipe pone fin a su afrenta (11:18).', fecha: -190, estado: { view: NORTE_SUR, capas: ['seleucidas-200'], lugares: ['magnesia', 'antioquia', 'roma'] } }
        ] },
        { tipo: 'tabla', titulo: 'Versículos', tabla: {
          titulo: 'Daniel 11:5-20 y su cumplimiento',
          cab: ['Vers.', 'Profecía', 'Cumplimiento'],
          filas: [
            ['5', 'El rey del sur y uno de sus príncipes, más fuerte', 'Ptolomeo I; Seleuco I, que fue su general y llegó a ser más poderoso'],
            ['6', 'La hija del rey del sur va al rey del norte; no retendrá su fuerza', 'Berenice, hija de Ptolomeo II, se casa con Antíoco II (c. 252 a.C.); es asesinada'],
            ['7-9', 'Un renuevo de sus raíces invade el norte y lleva sus dioses a Egipto', 'Ptolomeo III, hermano de Berenice, invade Siria (246 a.C.)'],
            ['10-12', 'Los hijos del rey del norte; el rey del sur vence', 'Antíoco III ataca; Ptolomeo IV vence en Rafia (217 a.C.)'],
            ['13-16', 'El rey del norte vuelve y se detiene en la tierra gloriosa', 'Antíoco III vence en Paneas (200 a.C.) y toma Judea'],
            ['17', 'Le dará su hija para destruirlo', 'Cleopatra I se casa con Ptolomeo V (193 a.C.), pero apoya a Egipto'],
            ['18-19', 'Se vuelve a las costas; un príncipe hará cesar su afrenta; tropezará y caerá', 'Roma lo derrota en Magnesia (190 a.C.); muere en 187 a.C.'],
            ['20', 'Uno que hará pasar un cobrador de tributos; morirá', 'Seleuco IV envía a Heliodoro al templo; es asesinado (175 a.C.)']
          ],
          nota: 'Fechas aproximadas, a.C.'
        } }
      ],
      texto: [
        'Los versículos 5 al 20 de Daniel 11 recorren unos ciento cincuenta años de guerras entre los Ptolomeos de Egipto y los Seléucidas de Siria. La tabla muestra cada versículo con su cumplimiento, y el mapa por pasos ubica las batallas.',
        { h: 'Alianzas que fracasan' },
        'La profecía anuncia dos alianzas matrimoniales que no lograrían la paz. Hacia el 252 a.C., Ptolomeo II casó a su hija Berenice con el rey del norte, Antíoco II, que repudió a su esposa Laodice; pero cuando Antíoco murió, Laodice hizo matar a Berenice y a su hijo: «ella no podrá retener la fuerza de su brazo» (Dn 11:6). Medio siglo después, Antíoco III casó a su hija Cleopatra con el joven Ptolomeo V para controlar Egipto, pero ella se puso de parte de su esposo: «pero no permanecerá, ni tendrá éxito» (Dn 11:17).',
        { h: 'Batallas por la tierra gloriosa' },
        'Ptolomeo III, hermano de Berenice, invadió el reino del norte y llevó a Egipto los dioses y los tesoros de Siria (Dn 11:7-9). Antíoco III, el Grande, atacó Egipto, pero fue derrotado en Rafia, cerca de Gaza, en el 217 a.C. (Dn 11:11). Volvió con un ejército mayor y venció en Paneas, junto a las fuentes del Jordán, en el 200 a.C. Desde entonces, Judea pasó al dominio de los Seléucidas: «estará en la tierra gloriosa» (Dn 11:16).',
        { h: 'Roma entra en escena' },
        'Antíoco III se volvió hacia las costas de Asia Menor y Grecia, pero «un príncipe hará cesar su afrenta» (Dn 11:18): el general romano Lucio Escipión lo derrotó en Magnesia en el 190 a.C. Roma le impuso una enorme indemnización. Antíoco murió en el 187 a.C., saqueando un templo en Elam. Su hijo Seleuco IV, agobiado por los tributos a Roma, envió a su ministro Heliodoro a tomar el tesoro del templo de Jerusalén (Dn 11:20), y murió asesinado. El trono quedó para su hermano, Antíoco IV.'
      ],
      pensar: 'Durante siglo y medio, Judea fue el campo de batalla entre dos imperios, pero cada movimiento estaba anunciado por Dios. ¿Cómo te ayuda esto a confiar en Dios cuando te sientes en medio de fuerzas que no controlas?'
    },
    {
      id: 'r-antioco', n: 'Antíoco IV Epífanes (11:21-35)', ref: 'Daniel 8:9-14, 23-25; 11:21-35; Juan 10:22', fecha: [-175, -164],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: NORTE_SUR, capas: ['seleucidas-200'], lugares: ['antioquia', 'alejandria', 'jerusalen', 'modin'] } },
        { tipo: 'imagen', titulo: 'La profanación', src: GR + 'grecia-profanacion.webp', alt: 'Soldados seléucidas levantan un altar pagano en el atrio del templo de Jerusalén mientras sacerdotes judíos observan con dolor', pie: 'La abominación desoladora de Antíoco IV (Dn 11:31).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'La purificación', src: GR + 'grecia-purificacion-templo.webp', alt: 'Judas Macabeo y sus hombres purifican el templo de Jerusalén y vuelven a encender el candelero', pie: 'El templo purificado (164 a.C.).', origen: 'ia' }
      ],
      texto: [
        'Los versículos 21 al 35 se concentran en un solo rey del norte: Antíoco IV, que se hizo llamar Epífanes, «dios manifestado». Sus enemigos lo apodaban Epímanes, «el loco».',
        { h: 'Un hombre despreciable (11:21-24)' },
        '«Y le sucederá en su lugar un hombre despreciable, al cual no darán la honra del reino; pero vendrá sin aviso y tomará el reino con halagos» (Dn 11:21). Antíoco no era el heredero: el trono correspondía a su sobrino, que estaba de rehén en Roma. Antíoco lo tomó con intrigas en el 175 a.C. También quitó al «príncipe del pacto», el sumo sacerdote Onías III (Dn 11:22).',
        { h: 'Las campañas contra Egipto (11:25-30)' },
        'Antíoco invadió Egipto en el 170–169 a.C. con éxito. Pero en su segunda campaña, en el 168 a.C., «vendrán contra él naves de Quitim» (Dn 11:30). Un embajador romano, Popilio Lenas, lo encontró cerca de Alejandría, trazó un círculo en la arena alrededor del rey y le exigió una respuesta antes de salir de él: retirarse de Egipto o enfrentar a Roma. Humillado, Antíoco se retiró, «y se enojará contra el pacto santo» (Dn 11:30).',
        { h: 'La abominación (11:31)' },
        'En el 167 a.C., Antíoco descargó su furia contra Jerusalén. Prohibió los sacrificios, la circuncisión y el día de reposo, mandó quemar los libros de la ley y levantó un altar a Zeus en el templo, donde se sacrificaron cerdos. «Y quitarán el continuo sacrificio, y pondrán la abominación desoladora» (Dn 11:31).',
        { h: 'El pueblo que conoce a su Dios (11:32-35)' },
        '«Con lisonjas seducirá a los violadores del pacto; mas el pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32). Muchos judíos murieron antes que renegar de su fe. En Modín, el sacerdote Matatías y sus hijos iniciaron la rebelión; su hijo Judas, llamado Macabeo, derrotó a los ejércitos sirios, y en diciembre del 164 a.C. purificó el templo. Los judíos lo recuerdan cada año en Janucá, la fiesta de la dedicación, a la que Jesús asistió (Jn 10:22).',
        'Antíoco murió en Persia ese mismo año. Su persecución es el anticipo histórico de la que realizará el anticristo.'
      ],
      pensar: 'Bajo la persecución de Antíoco, el pueblo que conocía a su Dios se esforzó y actuó (Dn 11:32). ¿Cómo te prepara conocer a Dios para resistir las presiones contra tu fe?'
    },
    {
      id: 'r-fin', n: 'El rey del tiempo del fin (11:36-45)', ref: 'Daniel 11:36-45; 12:1; 2 Tesalonicenses 2:3-8; Apocalipsis 16:12-16; 19:19-20', fecha: 2026,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: LEVANTE_EGIPTO, capas: [], lugares: ['jerusalen', 'r-edom', 'r-moab', 'r-amon', 'r-egipto', 'r-libia', 'r-cus', 'meguido'] } },
        { tipo: 'tabla', titulo: 'Antíoco y el anticristo', tabla: {
          titulo: 'Antíoco IV, tipo del anticristo',
          cab: ['Rasgo', 'Antíoco IV (Dn 8; 11:21-35)', 'El anticristo (Dn 7; 11:36-45)'],
          filas: [
            ['Origen', 'Del reino seléucida', 'De la forma final del cuarto reino'],
            ['Pretensión', 'Se llama «dios manifestado»', 'Se engrandece sobre todo dios (11:36)'],
            ['Templo', 'Abominación en el 167 a.C.', 'Abominación en la mitad de la semana (Dn 9:27; Mt 24:15)'],
            ['Persecución', 'Unos tres años', 'Tiempo, tiempos y medio tiempo (7:25)'],
            ['Fin', 'Muere en Persia (164 a.C.)', 'Destruido por Cristo en su venida (2 Ts 2:8)']
          ]
        } }
      ],
      texto: [
        'Desde el versículo 36, la profecía deja de corresponder a la historia de Antíoco IV y salta al tiempo del fin. La interpretación premilenial entiende que aquí se describe al anticristo.',
        { h: '¿Por qué un salto?' },
        'Varias razones lo indican. El texto habla del «tiempo determinado» (Dn 11:35) y de lo que ocurrirá «al cabo del tiempo» (Dn 11:40). Lo que se dice de este rey, que se engrandecerá sobre todo dios y no hará caso de ningún dios, va más allá de Antíoco, que honró a Zeus. Antíoco no realizó la campaña final que se describe, ni murió entre los mares y el monte santo. Y el capítulo 12, que continúa la misma escena, habla de la gran tribulación y de la resurrección.',
        { h: 'La última campaña' },
        'Al tiempo del fin, el rey del sur y el rey del norte atacarán a este rey, pero él entrará en muchas tierras como una inundación, también en la tierra gloriosa. Escaparán de su mano Edom, Moab y Amón, en la actual Jordania; dominará Egipto, y lo seguirán Libia y Etiopía (Dn 11:40-43). El mapa ubica esas regiones.',
        'Pero noticias del oriente y del norte lo atemorizarán, y saldrá con gran ira. «Y plantará las tiendas de su palacio entre los mares y el monte glorioso y santo; mas llegará a su fin, y no tendrá quien le ayude» (Dn 11:45). Entre el mar Mediterráneo y el mar Muerto, junto al monte de Sion.',
        { h: 'El mismo final' },
        'Apocalipsis describe el mismo momento: los reyes del oriente cruzan el Éufrates, y las naciones se reúnen en Armagedón (Ap 16:12-16). El anticristo será destruido por Cristo en su venida: «a quien el Señor matará con el espíritu de su boca, y destruirá con el resplandor de su venida» (2 Ts 2:8).',
        'La identidad de los reyes del norte y del sur en el tiempo del fin se discute, y conviene no ser dogmático. Lo seguro es el desenlace: el último enemigo del pueblo de Dios llegará a su fin, y Miguel se levantará a favor de Israel (Dn 12:1).'
      ],
      pensar: 'El rey que parecía invencible «llegará a su fin, y no tendrá quien le ayude» (Dn 11:45). ¿Qué consuelo te da saber cómo termina la historia?'
    }
  ];

  /* ---------------- Ruta VII · La vida de Daniel y sus amigos ---------------- */
  const vida = [
    {
      id: 'v-trayectoria', n: 'Una vida completa en Babilonia', ref: 'Daniel 1:6, 21; 2:48; 5:11-13; 6:3, 28; 10:1; 12:13', fecha: [-620, -536],
      visual: [ { tipo: 'tabla', titulo: 'Etapas', tabla: {
        titulo: 'La vida de Daniel',
        cab: ['Edad aprox.', 'Año a.C.', 'Etapa', 'Pasaje'],
        filas: [
          ['15', '605', 'Llevado a Babilonia; tres años de formación', 'Dn 1'],
          ['17', '603', 'Interpreta el sueño; gobernador de la provincia de Babilonia', 'Dn 2:48'],
          ['30–60', '590–560', 'Al servicio de Nabucodonosor', 'Dn 4'],
          ['65–80', '553–539', 'Casi olvidado bajo Nabonido; recibe visiones', 'Dn 5:11-13; 7–8'],
          ['81', '539', 'Lee la escritura en la pared; ora por el regreso', 'Dn 5; 9'],
          ['82', '538', 'Uno de los tres gobernadores; el foso de los leones', 'Dn 6'],
          ['84', '536', 'Última visión, junto al Tigris', 'Dn 10–12']
        ],
        nota: 'Edades estimadas, suponiendo que Daniel tenía unos quince años en el 605 a.C.'
      } } ],
      texto: [
        'Esta ruta recorre la vida de Daniel y de sus amigos como modelo de fe. Daniel vivió casi setenta años en Babilonia, de muchacho a anciano. Pocos personajes de la Biblia muestran una fidelidad tan constante a lo largo de una vida tan larga.',
        { h: 'Joven' },
        'Daniel llegó a Babilonia siendo un adolescente, arrancado de su familia y de su tierra, y probablemente convertido en eunuco al servicio del rey, como había anunciado Isaías a Ezequías (Is 39:7). En ese momento de máxima vulnerabilidad, tomó la decisión que marcó su vida: no contaminarse. Dios le dio favor, sabiendo y entendimiento.',
        { h: 'Adulto' },
        'A los diecisiete o dieciocho años ya era gobernador de una provincia y jefe de los sabios. Sirvió a Nabucodonosor durante décadas. Fue testigo de su orgullo, de su caída y de su restauración, y tuvo el valor de aconsejarle que se arrepintiera.',
        { h: 'Anciano' },
        'Después de Nabucodonosor, Daniel parece haber quedado en segundo plano. Cuando Belsasar necesitó un intérprete, no sabía quién era Daniel, y fue la reina madre quien lo recordó. Pero en esos años de olvido, Daniel recibió las visiones de los capítulos 7 y 8. El olvido de los hombres no significó el olvido de Dios.',
        'Con más de ochenta años, cuando muchos se retiran, Daniel volvió al gobierno bajo los persas, fue echado a los leones por su fe, intercedió por su pueblo y recibió la visión más extensa del libro.',
        { h: 'Hasta el fin' },
        'Dios le dio una última palabra personal: «Y tú irás hasta el fin, y reposarás, y te levantarás para recibir tu heredad al fin de los días» (Dn 12:13). Daniel terminó bien.'
      ],
      pensar: 'Daniel fue fiel como joven, como adulto y como anciano, y aun en los años en que los hombres lo olvidaron. ¿Qué necesitas para ser fiel a Dios en todas las etapas de tu vida?'
    },
    {
      id: 'v-amigos', n: 'Ananías, Misael y Azarías', ref: 'Daniel 1:6-7, 11-20; 2:17-18, 49; 3', fecha: [-605, -580],
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-horno.webp', alt: 'Dentro de un horno de fuego ardiente, tres jóvenes judíos caminan sueltos y tranquilos entre las llamas junto a una cuarta figura resplandeciente', pie: 'Los tres amigos en el horno (Dn 3:25).', origen: 'ia' } ],
      texto: [
        'Daniel no estuvo solo. Junto a él fueron llevados a Babilonia tres jóvenes de Judá que se conocen más por sus nombres babilonios que por los hebreos: Sadrac, Mesac y Abed-nego.',
        { h: 'Sus nombres' },
        'Sus nombres hebreos confesaban al Dios de Israel. Ananías significa «Jehová ha sido misericordioso»; Misael, «¿quién es como Dios?»; Azarías, «Jehová ha ayudado». Babilonia les impuso nombres relacionados con sus dioses: Abed-nego significa «siervo de Nebo». Les cambiaron el nombre, pero no pudieron cambiar su lealtad.',
        { h: 'Juntos' },
        'Los cuatro jóvenes se apoyaron mutuamente. Juntos pidieron la alternativa de la comida (Dn 1:11-16). Juntos oraron cuando el rey amenazó con matar a los sabios (Dn 2:17-18). Daniel no se olvidó de ellos cuando fue exaltado: pidió al rey que los pusiera sobre los negocios de la provincia (Dn 2:49). La fe se vive mejor en comunidad, y los amigos fieles se sostienen en la prueba.',
        { h: 'Solos ante el rey' },
        'En el capítulo 3, sin Daniel, los tres amigos tuvieron que enfrentar la prueba más dura: postrarse ante la estatua o morir. Toda la multitud se postró; ellos se quedaron de pie. Su respuesta al rey sigue siendo un modelo: «nuestro Dios a quien servimos puede librarnos… Y si no, sepas, oh rey, que no serviremos a tus dioses» (Dn 3:17-18).',
        'Dios estuvo con ellos en el horno. Salieron sin olor a humo, y el rey que quiso obligarlos a adorar su estatua terminó bendiciendo a su Dios: «no hay dios que pueda librar como éste» (Dn 3:29). Hebreos los recuerda entre los que por la fe «apagaron fuegos impetuosos» (He 11:34).'
      ],
      pensar: 'Daniel y sus amigos se sostuvieron mutuamente en la fe y en la oración (Dn 2:17-18). ¿Quiénes son tus compañeros de fe, y cómo pueden fortalecerse unos a otros?'
    },
    {
      id: 'v-oracion', n: 'Un hombre de oración', ref: 'Daniel 2:17-23; 6:10-11; 9:3-23; 10:2-3, 12; Santiago 5:16', fecha: [-603, -536],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: EX + 'exi-daniel-ventana.webp', alt: 'Daniel, ya anciano, de rodillas junto a una ventana abierta, ora con las manos levantadas', pie: '«Se arrodillaba tres veces al día, y oraba» (Dn 6:10).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Oraciones', tabla: {
          titulo: 'Las oraciones de Daniel',
          cab: ['Pasaje', 'Ocasión', 'Tipo de oración'],
          filas: [
            ['Dn 2:17-18', 'Amenaza de muerte', 'Petición en comunidad'],
            ['Dn 2:20-23', 'Dios revela el sueño', 'Alabanza y gratitud'],
            ['Dn 6:10', 'El decreto de Darío', 'Oración constante, tres veces al día'],
            ['Dn 9:3-19', 'Al leer a Jeremías', 'Confesión e intercesión, con ayuno'],
            ['Dn 10:2-3, 12', 'Para entender la visión', 'Búsqueda con ayuno de tres semanas']
          ]
        } }
      ],
      texto: [
        'Si hay un rasgo que explica la vida de Daniel, es la oración. El libro muestra a Daniel orando en muchas formas y circunstancias.',
        { h: 'En la crisis' },
        'Cuando el rey amenazó con matar a todos los sabios, lo primero que hizo Daniel fue reunir a sus amigos para pedir misericordia al Dios del cielo (Dn 2:17-18). Y cuando Dios respondió, lo primero que hizo fue alabarlo, antes de ir al rey (Dn 2:20-23).',
        { h: 'Con constancia' },
        'Daniel oraba tres veces al día, de rodillas, con las ventanas abiertas hacia Jerusalén, «como lo solía hacer antes» (Dn 6:10). Era su costumbre, no una reacción de emergencia. Por eso, cuando la oración se volvió peligrosa, Daniel no tuvo que decidir nada nuevo: siguió haciendo lo que siempre había hecho. Su oración incluía la gratitud: «oraba y daba gracias delante de su Dios».',
        { h: 'Con la Palabra' },
        'La gran oración del capítulo 9 nació de la lectura de las Escrituras. Daniel leyó la promesa de Jeremías y oró por su cumplimiento, usando el lenguaje de la ley de Moisés y apelando a la fidelidad de Dios a su pacto. La Palabra alimentaba su oración.',
        { h: 'Con humildad y ayuno' },
        'Daniel oró con ayuno, cilicio y ceniza (Dn 9:3), y en otra ocasión ayunó tres semanas (Dn 10:2-3). Confesó el pecado de su pueblo como propio. El mensajero le dijo: «desde el primer día que dispusiste tu corazón a entender y a humillarte en la presencia de tu Dios, fueron oídas tus palabras» (Dn 10:12).',
        { h: 'Con efecto' },
        'Las oraciones de Daniel tuvieron respuesta: el sueño revelado, la profecía de las setenta semanas, la visión final. Y el capítulo 10 muestra que su oración estaba relacionada con una batalla en el mundo espiritual. «La oración eficaz del justo puede mucho» (Stg 5:16).'
      ],
      pensar: 'Daniel no tuvo que cambiar nada cuando la oración se volvió peligrosa, porque ya era su costumbre (Dn 6:10). ¿Cómo es tu vida de oración en los días tranquilos?'
    },
    {
      id: 'v-trabajo', n: 'Integridad en el trabajo', ref: 'Daniel 1:19-20; 2:48; 4:19, 27; 5:17; 6:3-5; Colosenses 3:23-24', fecha: [-603, -538],
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-sueno.webp', alt: 'En el salón del trono de Babilonia, Daniel joven habla con serenidad al rey Nabucodonosor', pie: 'Daniel ante el rey (Dn 2:27-28).', origen: 'ia' } ],
      texto: [
        'Daniel pasó casi toda su vida trabajando en el gobierno de imperios paganos. Su ejemplo es especialmente valioso para los creyentes que trabajan en ambientes que no comparten su fe.',
        { h: 'Excelencia' },
        'Daniel y sus amigos fueron «diez veces mejores que todos los magos y astrólogos» del reino (Dn 1:20). Bajo Darío, Daniel «era superior a estos sátrapas y gobernadores, porque había en él un espíritu superior» (Dn 6:3). Su excelencia no era solo capacidad natural: Dios les había dado conocimiento e inteligencia (Dn 1:17). Pero ellos trabajaron con esos dones.',
        { h: 'Honestidad' },
        'Cuando sus enemigos quisieron acusarlo, investigaron su administración y no encontraron nada: «no podían hallar ocasión alguna o falta, porque él era fiel, y ningún vicio ni falta fue hallado en él» (Dn 6:4). En una corte donde la corrupción y la intriga eran comunes, Daniel era intachable.',
        { h: 'Lealtad sin servilismo' },
        'Daniel servía lealmente a sus reyes, pero no les decía solo lo que querían oír. Le anunció a Nabucodonosor su humillación, con dolor, y le aconsejó dejar sus pecados (Dn 4:19, 27). Rechazó los regalos de Belsasar y le habló con franqueza (Dn 5:17, 22). Su lealtad final era para Dios.',
        { h: 'Humildad' },
        'Cuando el rey le preguntó si podía revelar el sueño, Daniel respondió que no por su propia sabiduría, sino porque hay un Dios en los cielos que revela los misterios (Dn 2:27-30). Daniel nunca se atribuyó lo que Dios hacía por medio de él.',
        { h: 'Para el Señor' },
        'Pablo escribió siglos después: «Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia» (Col 3:23-24). Daniel vivió así. Su trabajo fue su testimonio, y los reyes a quienes sirvió terminaron reconociendo a su Dios.'
      ],
      pensar: 'Los enemigos de Daniel revisaron su trabajo y no encontraron ninguna falta (Dn 6:4). ¿Qué testimonio da tu trabajo de tu fe en Cristo?'
    }
  ];

  /* ---------------- Ruta VIII · Profecías cumplidas ---------------- */
  const profecias = [
    {
      id: 'p-tabla', n: 'Lo que Daniel anunció y la historia confirmó', ref: 'Daniel 2:36-45; 5:28; 8:3-8, 20-25; 9:25-26; 11:2-35', fecha: [-539, 70],
      visual: [ { tipo: 'tabla', titulo: 'Cumplidas', tabla: {
        titulo: 'Profecías de Daniel ya cumplidas',
        cab: ['Profecía', 'Pasaje', 'Cumplimiento', 'Año'],
        filas: [
          ['Babilonia, dada a medos y persas', 'Dn 5:28', 'Ciro toma Babilonia', '539 a.C.'],
          ['Persia supera a Media', 'Dn 8:3, 20', 'Ciro, persa, domina a los medos', '550 a.C.'],
          ['Un cuarto rey persa rico invade Grecia', 'Dn 11:2', 'Jerjes I', '480 a.C.'],
          ['Grecia vence a Persia con rapidez', 'Dn 8:5-7, 21', 'Alejandro Magno', '334–331 a.C.'],
          ['El gran cuerno se quiebra; el reino no pasa a sus hijos', 'Dn 8:8; 11:4', 'Muerte de Alejandro; sus herederos asesinados', '323–309 a.C.'],
          ['Cuatro reinos', 'Dn 7:6; 8:8, 22', 'División entre los generales', '301 a.C.'],
          ['Guerras del norte y del sur', 'Dn 11:5-20', 'Seléucidas y Ptolomeos', '301–175 a.C.'],
          ['El cuerno pequeño profana el santuario', 'Dn 8:9-14; 11:31', 'Antíoco IV', '167 a.C.'],
          ['El santuario purificado', 'Dn 8:14', 'Judas Macabeo', '164 a.C.'],
          ['Un cuarto reino de hierro', 'Dn 2:40; 7:7', 'Roma', '146 a.C.–'],
          ['La muerte del Mesías', 'Dn 9:26', 'La crucifixión de Jesús', 'c. 30–33 d.C.'],
          ['La ciudad y el santuario destruidos', 'Dn 9:26', 'Roma destruye Jerusalén', '70 d.C.']
        ]
      } } ],
      texto: [
        'Esta ruta reúne las profecías de Daniel que ya se cumplieron, y las que todavía esperan su cumplimiento. La tabla muestra las principales profecías cumplidas.',
        { h: 'Más de seis siglos de historia' },
        'Las profecías de Daniel abarcan desde la caída de Babilonia, en el 539 a.C., hasta la destrucción de Jerusalén, en el año 70 d.C. Daniel anunció la sucesión de los imperios, la rapidez de Alejandro, su muerte prematura, la división de su reino en cuatro, las guerras de sus sucesores, la profanación del templo, la venida y la muerte del Mesías, y la destrucción de la ciudad.',
        { h: 'Precisión' },
        'Muchas de estas profecías tienen un nivel de detalle asombroso. Daniel 8 nombra a Media y Persia y a Grecia, siglos antes de que Grecia fuera un imperio. Daniel 11 describe alianzas matrimoniales, batallas y la intervención de Roma, cuyos protagonistas aún no habían nacido. Daniel 9 anuncia el tiempo de la venida del Mesías y que se le quitaría la vida antes de la destrucción del santuario.',
        { h: 'Un testimonio para hoy' },
        'Para el creyente, las profecías cumplidas son una confirmación de que la Biblia es la Palabra de Dios. Dios mismo lo presenta como prueba de su divinidad: «Yo soy Dios, y no hay otro… que anuncio lo por venir desde el principio, y desde la antigüedad lo que aún no era hecho» (Is 46:9-10). Ningún ser humano puede anunciar con siglos de anticipación el curso de la historia.',
        'La estación siguiente explica cómo esta precisión llevó a algunos a negar que Daniel fuera escrito en el siglo VI a.C.'
      ],
      pensar: 'Dios anunció en Daniel siglos de historia antes de que ocurrieran. ¿Cómo fortalece tu fe saber que el mismo Dios conoce tu futuro?'
    },
    {
      id: 'p-objecion', n: 'Demasiado exacto para ser profecía', ref: 'Daniel 9:26; 11:2-35; Isaías 46:9-10; Mateo 24:15', fecha: 270,
      visual: [ { tipo: 'tabla', titulo: 'Debate', tabla: {
        titulo: 'Una objeción antigua y su respuesta',
        cab: ['', 'Detalle'],
        filas: [
          ['La objeción', 'Daniel 11 es tan exacto hasta Antíoco IV que debió escribirse después de los hechos, hacia el 165 a.C.'],
          ['Primero en plantearla', 'Porfirio, filósofo neoplatónico enemigo del cristianismo, siglo III d.C.'],
          ['Respuesta antigua', 'Jerónimo, en su Comentario a Daniel (407 d.C.), respondió que la exactitud prueba la inspiración'],
          ['Supuesto de fondo', 'Que la profecía predictiva no es posible'],
          ['Profecías posteriores al 165 a.C.', 'El cuarto reino, Roma; la muerte del Mesías; la destrucción del año 70']
        ]
      } } ],
      texto: [
        'La precisión de Daniel 11 ha sido usada como argumento contra el propio libro. La objeción es antigua.',
        { h: 'Porfirio' },
        'En el siglo III d.C., el filósofo Porfirio, que escribió quince libros contra los cristianos, sostuvo que Daniel no había sido escrito por Daniel en el siglo VI a.C., sino por un judío en tiempos de Antíoco IV. Su argumento era sencillo: Daniel 11 describe la historia hasta Antíoco con tanta exactitud que no puede ser profecía; tiene que ser historia escrita después. Jerónimo, el traductor de la Biblia latina, le respondió en su comentario a Daniel que esa misma exactitud era la prueba de que el libro venía de Dios.',
        { h: 'El supuesto de fondo' },
        'La objeción descansa en un supuesto: que Dios no puede revelar el futuro con detalle. Si se parte de esa idea, cualquier profecía exacta será declarada falsa por definición. Pero ese supuesto no es una conclusión de la historia, sino una premisa filosófica. La Biblia afirma lo contrario: Dios anuncia lo por venir desde el principio (Is 46:10).',
        { h: 'Lo que la fecha tardía no explica' },
        'Aun aceptando la fecha del 165 a.C., Daniel anuncia hechos posteriores. El cuarto reino, más fuerte que Grecia, es Roma, que en el 165 a.C. todavía no dominaba Oriente. Daniel 9 anuncia que, después de que se quitara la vida al Mesías, el pueblo de un príncipe destruiría la ciudad y el santuario, lo que ocurrió en el año 70 d.C., dos siglos después. Y Jesús, en el siglo I, habló de la abominación de Daniel como algo todavía futuro (Mt 24:15).',
        'Además, como se vio en la introducción, Daniel ya era copiado como Escritura en Qumrán y había sido traducido al griego pocas décadas después de la fecha propuesta por los críticos.',
        'Para quien cree que Dios habla, la precisión de Daniel no es un problema: es una invitación a confiar en sus promesas que todavía faltan.'
      ],
      pensar: 'Algunos niegan la profecía porque es demasiado exacta. ¿Qué papel juegan nuestros supuestos previos en la manera de leer la Biblia?'
    },
    {
      id: 'p-futuro', n: 'Lo que todavía falta', ref: 'Daniel 2:44; 7:13-14, 24-27; 9:27; 11:36–12:3; 12:13', fecha: 2026,
      visual: [ { tipo: 'tabla', titulo: 'Por cumplirse', tabla: {
        titulo: 'Profecías de Daniel por cumplirse',
        cab: ['Profecía', 'Pasaje'],
        filas: [
          ['La forma final del cuarto reino: diez reyes', 'Dn 2:41-43; 7:7, 24'],
          ['El cuerno pequeño, el anticristo', 'Dn 7:8, 24-25; 11:36-39'],
          ['El pacto de siete años y la abominación', 'Dn 9:27; 12:11; Mt 24:15'],
          ['La gran tribulación', 'Dn 12:1; Mt 24:21'],
          ['La última campaña del rey del fin', 'Dn 11:40-45'],
          ['La piedra que destruye la estatua: la segunda venida', 'Dn 2:34-35, 44-45'],
          ['El Hijo del Hombre recibe el reino', 'Dn 7:13-14'],
          ['La resurrección de justos e injustos', 'Dn 12:2-3'],
          ['Daniel recibe su heredad', 'Dn 12:13']
        ]
      } } ],
      texto: [
        'No todas las profecías de Daniel se han cumplido. Algunas de las más importantes esperan todavía su momento.',
        { h: 'La forma final del cuarto reino' },
        'La estatua de Daniel 2 termina en pies de hierro y barro con diez dedos, y la cuarta bestia de Daniel 7 tiene diez cuernos. La piedra golpea la estatua en los pies, y el reino de Dios se levanta «en los días de estos reyes» (Dn 2:44). Esto no ocurrió en la primera venida de Cristo, cuando Roma estaba en su apogeo y no dividida en diez reyes. La interpretación premilenial lo espera en los últimos tiempos.',
        { h: 'La semana setenta' },
        'Sesenta y nueve semanas de Daniel 9 se cumplieron hasta el Mesías. La semana setenta, con el pacto del príncipe que ha de venir y la abominación desoladora, es futura: Jesús la anunció como un hecho por venir (Mt 24:15).',
        { h: 'El anticristo, la tribulación y la resurrección' },
        'El cuerno pequeño de Daniel 7, el rey de Daniel 11:36-45, el tiempo de angustia sin igual de Daniel 12:1 y la resurrección de Daniel 12:2 son acontecimientos del fin.',
        { h: 'El reino' },
        'Sobre todo, falta el cumplimiento pleno de la gran promesa del libro: el Hijo del Hombre recibiendo «dominio, gloria y reino», y su reino que «no será jamás destruido» (Dn 7:14; 2:44).',
        { h: 'La razón para esperar' },
        'Lo que da confianza para esperar es lo que ya se cumplió. El mismo Dios que anunció con exactitud la caída de Babilonia, las conquistas de Alejandro, las guerras de sus sucesores y la muerte del Mesías cumplirá también lo que falta. La historia de Daniel termina con una promesa: «Y tú irás hasta el fin, y reposarás, y te levantarás para recibir tu heredad al fin de los días» (Dn 12:13). Esa promesa es también para todo el que espera al Señor.'
      ],
      pensar: 'Las profecías de Daniel ya cumplidas son una garantía de las que faltan. ¿Qué promesa de Dios estás esperando con confianza?'
    }
  ];

  /* ---------------- Ruta IX · Daniel en el Nuevo Testamento ---------------- */
  const nt = [
    {
      id: 'n-hijo-hombre', n: 'Jesús, el Hijo del Hombre', ref: 'Daniel 7:13-14; Mateo 16:27-28; 24:30; 26:63-66; Hechos 7:56; Apocalipsis 1:7, 13', fecha: 30,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/dan-anciano-dias.webp', alt: 'El Anciano de días en su trono de fuego, y uno como un hijo de hombre que viene con las nubes del cielo', pie: 'El Hijo del Hombre ante el Anciano de días (Dn 7:13).', origen: 'ia' } ],
      texto: [
        'Esta ruta muestra cómo Daniel se cumple y se retoma en el Nuevo Testamento. El primer y más importante punto de contacto es el título que Jesús usó para sí mismo.',
        { h: 'El título favorito de Jesús' },
        'En los Evangelios, Jesús se llama a sí mismo «el Hijo del Hombre» más de ochenta veces. Los demás no lo llaman así; es su propia manera de presentarse. El título viene de Daniel 7:13, donde uno como un hijo de hombre viene con las nubes del cielo y recibe del Anciano de días un reino eterno.',
        'Jesús lo usó en tres sentidos. Para hablar de su vida humilde: «el Hijo del Hombre no tiene dónde recostar su cabeza» (Mt 8:20). Para anunciar su sufrimiento: «el Hijo del Hombre será entregado» (Mt 17:22). Y para su gloria futura: «verán al Hijo del Hombre viniendo sobre las nubes del cielo, con poder y gran gloria» (Mt 24:30). El mismo que vino en humildad vendrá en gloria.',
        { h: 'Ante el sanedrín' },
        'El momento decisivo fue el juicio. El sumo sacerdote le exigió bajo juramento que dijera si era el Cristo, el Hijo de Dios. Jesús respondió: «Tú lo has dicho; y además os digo, que desde ahora veréis al Hijo del Hombre sentado a la diestra del poder de Dios, y viniendo en las nubes del cielo» (Mt 26:64). Unió el Salmo 110 con Daniel 7. El sumo sacerdote rasgó sus vestiduras y lo acusó de blasfemia: entendió que Jesús afirmaba ser el personaje divino de Daniel, que comparte el trono de Dios y recibirá la adoración de todos los pueblos.',
        { h: 'Esteban y Juan' },
        'Al morir, Esteban vio «al Hijo del Hombre que está a la diestra de Dios» (Hch 7:56). Y Juan, en Patmos, vio a uno semejante al Hijo del Hombre con los rasgos del Anciano de días: cabellos blancos como la lana, ojos como llama de fuego (Ap 1:13-14). El Hijo del Hombre de Daniel es Jesús, el Hijo de Dios.'
      ],
      pensar: 'Jesús se presentó como el Hijo del Hombre que recibirá un reino eterno, y por eso fue condenado (Mt 26:64-66). ¿Reconoces a Jesús como el Rey al que todos los pueblos servirán?'
    },
    {
      id: 'n-abominacion', n: 'La abominación desoladora', ref: 'Daniel 9:27; 11:31; 12:11; Mateo 24:15-21; Marcos 13:14; Lucas 21:20-24; 2 Tesalonicenses 2:3-4', fecha: 30,
      visual: [ { tipo: 'tabla', titulo: 'Tres momentos', tabla: {
        titulo: 'La abominación desoladora en la historia y en la profecía',
        cab: ['Momento', 'Pasaje', 'Qué ocurre'],
        filas: [
          ['Antíoco IV (167 a.C.)', 'Dn 11:31; 1 Macabeos 1:54', 'Altar a Zeus en el templo: el anticipo'],
          ['Jesús la anuncia (c. 30 d.C.)', 'Mt 24:15', 'Todavía futura, después de Antíoco'],
          ['Roma destruye el templo (70 d.C.)', 'Lc 21:20-24', 'Cumplimiento cercano: Jerusalén rodeada de ejércitos'],
          ['El anticristo (futuro)', 'Dn 9:27; 12:11; 2 Ts 2:4', 'Cumplimiento final en la mitad de la semana setenta']
        ]
      } } ],
      texto: [
        'La segunda gran conexión entre Daniel y el Nuevo Testamento está en el sermón de Jesús en el monte de los Olivos.',
        { h: 'Jesús cita a Daniel' },
        'Hablando de los últimos tiempos, Jesús dijo: «Por tanto, cuando veáis en el lugar santo la abominación desoladora de que habló el profeta Daniel (el que lee, entienda), entonces los que estén en Judea, huyan a los montes» (Mt 24:15-16). Y añadió que entonces habrá «gran tribulación, cual no la ha habido desde el principio del mundo hasta ahora, ni la habrá» (Mt 24:21), con palabras casi idénticas a las de Daniel 12:1.',
        'Hay dos datos importantes en esta cita. Jesús llamó a Daniel «profeta», confirmando su autoridad. Y Jesús habló de la abominación como algo futuro, aunque Antíoco IV ya había profanado el templo dos siglos antes. Para Jesús, la profanación de Antíoco no agotaba la profecía.',
        { h: 'El año 70' },
        'En Lucas, Jesús dice: «cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado» (Lc 21:20). Muchos creyentes de Jerusalén recordaron esta advertencia cuando los ejércitos romanos se acercaron, y huyeron de la ciudad antes de su destrucción en el año 70. Fue un cumplimiento cercano.',
        { h: 'El cumplimiento final' },
        'Pero Jesús relaciona la abominación con la gran tribulación sin igual y con su segunda venida, inmediatamente después (Mt 24:29-30). Y Pablo, escribiendo antes del año 70, describe al hombre de pecado que «se sienta en el templo de Dios como Dios» (2 Ts 2:4). La interpretación premilenial entiende que el cumplimiento final ocurrirá en la mitad de la semana setenta, cuando el anticristo rompa su pacto y profane el templo, como anticipó Antíoco.',
        'La profecía de Daniel tiene así un anticipo, un cumplimiento cercano y un cumplimiento final.'
      ],
      pensar: 'Jesús dijo: «el que lee, entienda» (Mt 24:15), invitando a leer Daniel con atención. ¿Qué lugar ocupa en tu vida el estudio atento de la profecía bíblica?'
    },
    {
      id: 'n-apocalipsis', n: 'Daniel y Apocalipsis', ref: 'Daniel 7; 10:5-6; 12:4, 9; Apocalipsis 1:13-15; 11:2-3; 12:6, 14; 13:1-8; 20:4, 12; 22:10', fecha: 95,
      visual: [ { tipo: 'tabla', titulo: 'Paralelos', tabla: {
        titulo: 'Daniel y Apocalipsis',
        cab: ['Daniel', 'Apocalipsis', 'Tema'],
        filas: [
          ['Cuatro bestias del mar (7:3-7)', 'Una bestia del mar con rasgos de leopardo, oso y león (13:1-2)', 'Los reinos del mundo y el último imperio'],
          ['Diez cuernos (7:7, 24)', 'Diez cuernos, diez reyes (13:1; 17:12)', 'La confederación final'],
          ['El cuerno que habla blasfemias y vence a los santos (7:8, 21, 25)', 'La bestia blasfema y hace guerra a los santos (13:5-7)', 'El anticristo'],
          ['Tiempo, tiempos y medio tiempo (7:25; 12:7)', '42 meses; 1.260 días; tiempo, tiempos y medio tiempo (11:2-3; 12:6, 14; 13:5)', 'La gran tribulación'],
          ['El Anciano de días; los libros abiertos (7:9-10)', 'El trono; los libros abiertos (4–5; 20:12)', 'El juicio'],
          ['El varón vestido de lino (10:5-6)', 'Uno semejante al Hijo del Hombre (1:13-15)', 'Cristo glorificado'],
          ['Miguel se levanta (12:1)', 'Miguel lucha contra el dragón (12:7)', 'La guerra espiritual'],
          ['Sella el libro hasta el tiempo del fin (12:4)', 'No selles el libro; el tiempo está cerca (22:10)', 'La revelación del plan de Dios']
        ]
      } } ],
      texto: [
        'Daniel y Apocalipsis son los dos grandes libros proféticos de la Biblia, y están profundamente unidos. Apocalipsis retoma, desarrolla y completa las visiones de Daniel. La tabla muestra los principales paralelos.',
        { h: 'Las bestias' },
        'Juan vio subir del mar una bestia con siete cabezas y diez cuernos, «semejante a un leopardo, y sus pies como de oso, y su boca como boca de león» (Ap 13:2). Reúne los rasgos de las tres primeras bestias de Daniel 7, en orden inverso, y los diez cuernos de la cuarta. Es el último imperio mundial, heredero de todos los anteriores, y su gobernante, el anticristo, que blasfema contra Dios y hace guerra a los santos durante cuarenta y dos meses, como el cuerno pequeño de Daniel.',
        { h: 'Los tiempos' },
        'El «tiempo, y tiempos, y medio tiempo» de Daniel (Dn 7:25; 12:7) reaparece en Apocalipsis con el mismo nombre y también como cuarenta y dos meses y mil doscientos sesenta días (Ap 11:2-3; 12:6, 14; 13:5). Es la segunda mitad de la semana setenta: tres años y medio de gran tribulación.',
        { h: 'Sellado y abierto' },
        'A Daniel se le dijo: «cierra las palabras y sella el libro hasta el tiempo del fin» (Dn 12:4). A Juan se le dijo lo contrario: «No selles las palabras de la profecía de este libro, porque el tiempo está cerca» (Ap 22:10). Lo que Daniel vio de lejos, Juan lo vio más cerca. Y en Apocalipsis 5, solo el Cordero es digno de abrir el libro sellado.',
        { h: 'Leerlos juntos' },
        'Daniel explica el fondo histórico y la estructura de los tiempos; Apocalipsis muestra los juicios, la victoria de Cristo y el estado eterno. Para entender bien uno, hay que leer el otro. El recurso Los últimos tiempos integra ambos libros en un solo esquema.',
        { ir: { t: 'Abrir el recurso Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'Lo que Daniel debía sellar, Juan recibió la orden de no sellarlo, porque el tiempo está cerca (Dn 12:4; Ap 22:10). ¿Qué significa para ti vivir en ese tiempo cercano?'
    }
  ];

  const LINEA = { desde: -620, hasta: -100, hitos: [
    { a: -605, t: 'Daniel llevado' }, { a: -539, t: 'Cae Babilonia' }, { a: -480, t: 'Jerjes' },
    { a: -331, t: 'Alejandro vence a Persia' }, { a: -301, t: 'Cuatro reinos' }, { a: -200, t: 'Paneas' }, { a: -167, t: 'Abominación' }
  ] };

  window.RUTA_DATA = {
    titulo: 'Daniel',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Fronteras de los mapas aproximadas.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'introduccion', grupo: 'Estudio del libro', n: 'Introducción y trasfondo', info: 'Autor, fecha, Daniel el hombre, de Babilonia a Persia, Belsasar, Darío de Media, las dos lenguas, cómo interpretar y el tema', linea: LINEA, estaciones: introduccion },
      { id: 'panorama', grupo: 'Estudio del libro', n: 'Visión panorámica', info: 'Bosquejo, estructura en espejo, visiones comparadas, cronología, palabras y temas', linea: LINEA, estaciones: panorama },
      { id: 'comentario', grupo: 'Estudio del libro', n: 'Comentario capítulo por capítulo', info: 'Los 12 capítulos de Daniel', linea: LINEA, estaciones: comentario },
      { id: 'teologia', grupo: 'Estudio del libro', n: 'Teología de Daniel', info: 'Soberanía de Dios, Cristo, ángeles y guerra espiritual, el reino y los últimos tiempos, la resurrección y la vida fiel', linea: LINEA, estaciones: teologia },
      { id: 'imperios', grupo: 'Mapas', n: 'Los imperios de Daniel', info: 'Babilonia, Media y Persia, Grecia y Roma en el mapa', linea: LINEA, estaciones: imperios },
      { id: 'reyes', grupo: 'Mapas', n: 'Los reyes del norte y del sur', info: 'Daniel 11 versículo por versículo en el mapa', linea: LINEA, estaciones: reyes },
      { id: 'vida', grupo: 'Temas', n: 'La vida de Daniel y sus amigos', info: 'Una vida completa, los tres amigos, la oración y la integridad en el trabajo', linea: LINEA, estaciones: vida },
      { id: 'profecias', grupo: 'Temas', n: 'Profecías cumplidas', info: 'Lo que la historia confirmó, la objeción de Porfirio y lo que falta', linea: LINEA, estaciones: profecias },
      { id: 'nt', grupo: 'Temas', n: 'Daniel en el Nuevo Testamento', info: 'El Hijo del Hombre, la abominación desoladora y Daniel y Apocalipsis', linea: LINEA, estaciones: nt }
    ]
  };
})();
