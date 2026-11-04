/* Introducción al Nuevo Testamento · parte 2: II. Los evangelios y III. Hechos */
(() => {
  const MEDIT = [[29, 9], [44.5, 40]];
  const LEVANTE = [[29.5, 31.5], [37.8, 38.8]];
  // Ficha de un libro: filas [etiqueta, valor]
  const ficha = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Ficha', tabla: { titulo, cab: ['', ''], filas, nota } });
  const bosquejo = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Bosquejo', tabla: { titulo, cab: ['Capítulos', 'Contenido'], filas, nota } });

  /* ---------------- II. Los evangelios ---------------- */
  const evangelios = [
    {
      id: 'evangelio', n: '¿Qué es un evangelio?', ref: 'Marcos 1:1, 14-15; Isaías 52:7; 1 Corintios 15:1-4; Lucas 1:1-4', fecha: [33, 90],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los cuatro evangelios de un vistazo',
          cab: ['', 'Mateo', 'Marcos', 'Lucas', 'Juan'],
          filas: [
            ['Autor', 'El apóstol Mateo', 'Juan Marcos', 'Lucas, el médico', 'El apóstol Juan'],
            ['Primeros lectores', 'Creyentes judíos', 'Creyentes de Roma', 'Teófilo y los gentiles', 'Creyentes de Asia'],
            ['Fecha aprox.', '50–60', '55–65', '60–61', '85–90'],
            ['Jesús es…', 'El Mesías Rey prometido', 'El Siervo, Hijo de Dios', 'El Salvador de todos', 'El Hijo eterno de Dios'],
            ['Rasgo propio', 'Cinco grandes discursos', 'Acción: «en seguida»', 'Oración, Espíritu, pobres', 'Señales y «Yo soy»'],
            ['Capítulos', '28', '16', '24', '21']
          ],
          nota: 'Fechas aproximadas. Mateo, Marcos y Lucas se llaman sinópticos (ruta II, estación 7).'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-sermon-ladera.webp', alt: 'Jesús, de espaldas, enseña sentado en la ladera de un monte junto al mar de Galilea a una multitud', pie: 'Durante años, el evangelio se contó de viva voz antes de ponerse por escrito.', origen: 'ia' }
      ],
      texto: [
        'Marcos comienza así: «Principio del evangelio de Jesucristo, Hijo de Dios» (Mr 1:1). La palabra evangelio significa buena noticia. Isaías había anunciado la llegada de un mensajero que trae alegres nuevas y dice a Sion: «¡Tu Dios reina!» (Is 52:7). En el imperio romano se usaba la misma palabra para anunciar el nacimiento o la victoria de un emperador. Los cristianos la usaron para la mejor noticia de todas: Dios cumplió sus promesas en Jesús.',
        { h: 'Primero se predicó' },
        'Antes de ser un libro, el evangelio fue un mensaje. Jesús vino a Galilea «predicando el evangelio del reino de Dios» (Mr 1:14). Después de Pentecostés, los apóstoles predicaron su muerte y su resurrección, y Pablo resume ese mensaje: Cristo murió por nuestros pecados, conforme a las Escrituras, fue sepultado y resucitó al tercer día (1 Co 15:1-4). Los relatos de lo que Jesús dijo e hizo se repetían en las iglesias, se enseñaban a los nuevos creyentes y se memorizaban, como era costumbre en Israel.',
        { h: 'Después se escribió' },
        'Con los años, los testigos comenzaron a morir y el evangelio llegó a lugares lejanos. Entonces se pusieron por escrito los relatos. Lucas cuenta que muchos lo habían intentado antes que él, y que él investigó «con diligencia todas las cosas desde su origen» para escribirlas por orden (Lc 1:3). Así nacieron los cuatro evangelios, el mismo mensaje contado por cuatro testigos con sus propios énfasis.',
        { h: 'Cuatro, no uno' },
        'Desde el siglo II, la iglesia recibió cuatro evangelios, ni más ni menos. Ireneo de Lyon, hacia el 180, defendía que eran cuatro como cuatro son los vientos, y rechazaba tanto a quienes usaban solo uno como a quienes agregaban evangelios falsos. La tabla los compara. Las estaciones que siguen presentan cada uno.',
        { ejercicio: {
          pregunta: '¿Qué significa la palabra «evangelio»?',
          opciones: [
            { t: 'Buena noticia: el anuncio de lo que Dios hizo en Jesucristo.', ok: true, por_que: 'Es el sentido de la palabra griega y de Isaías 52:7, que habla de alegres nuevas de salvación.' },
            { t: 'Biografía completa de una persona.', ok: false, por_que: 'Los evangelios no pretenden contar toda la vida de Jesús; seleccionan lo necesario para creer.' },
            { t: 'Libro de leyes para los cristianos.', ok: false, por_que: 'Los evangelios contienen enseñanzas de Jesús, pero su centro es una noticia: su muerte y resurrección.' }
          ],
          explicacion: 'Antes de ser un libro, el evangelio fue una noticia proclamada; los evangelios son esa noticia puesta por escrito.'
        } }
      ],
      pensar: 'El evangelio se predicó de boca en boca antes de escribirse. ¿A quién le has contado tú la buena noticia de Jesús?'
    },
    {
      id: 'mateo', n: 'Mateo: el Rey prometido', ref: 'Mateo 1:1; 5:17; 9:9; 16:16-18; 28:18-20', fecha: [50, 60],
      visual: [
        ficha('El evangelio según Mateo', [
          ['Autor', 'Mateo, llamado también Leví, publicano y apóstol (Mt 9:9; 10:3)'],
          ['Primeros lectores', 'Creyentes judíos, probablemente de Judea o de Siria'],
          ['Fecha', 'Entre el 50 y el 60 d.C. (antes de la destrucción del templo en el año 70)'],
          ['Lugar', 'Judea o Antioquía de Siria (se discute)'],
          ['Tema', 'Jesús es el Mesías, hijo de David, que cumple la ley y los profetas'],
          ['Palabras clave', '«Para que se cumpliese», «reino de los cielos», «hijo de David»'],
          ['Versículo clave', 'Mateo 5:17; también 28:18-20']
        ]),
        bosquejo('Bosquejo de Mateo', [
          ['1–4', 'El Rey nace y se presenta: genealogía, nacimiento, Juan el Bautista, tentación'],
          ['5–7', 'Primer discurso: el Sermón del monte'],
          ['8–10', 'Milagros y segundo discurso: el envío de los doce'],
          ['11–13', 'Rechazo creciente y tercer discurso: las parábolas del reino'],
          ['14–18', 'Formación de los discípulos y cuarto discurso: la vida en la comunidad'],
          ['19–25', 'Camino a Jerusalén y quinto discurso: el monte de los Olivos'],
          ['26–28', 'Pasión, resurrección y gran comisión']
        ], 'Cada discurso termina con una frase parecida: «Cuando terminó Jesús estas palabras» (Mt 7:28; 11:1; 13:53; 19:1; 26:1).'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-mateo-banco.webp', alt: 'Junto a un camino a la entrada de Capernaúm, Mateo está sentado tras una mesa con monedas, una balanza y tablillas de cuentas; Jesús, de espaldas, se ha detenido frente a él', pie: '«Vio a un hombre llamado Mateo, que estaba sentado al banco de los tributos públicos, y le dijo: Sígueme» (Mt 9:9).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/28/18-20', ref: 'Mateo 28:18-20' }
      ],
      texto: [
        'El primer libro del Nuevo Testamento empieza con una genealogía: «Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham» (Mt 1:1). Para un lector judío no había mejor comienzo. Jesús es el descendiente de Abraham por quien serían benditas las naciones, y el hijo de David a quien Dios prometió un trono eterno.',
        { h: 'El autor' },
        'El libro no lleva firma, pero los escritores cristianos del siglo II lo atribuyen de manera unánime al apóstol Mateo. Papías, obispo de Hierápolis hacia el año 120, cuenta que Mateo reunió las palabras del Señor en lengua hebrea. Mateo era un cobrador de impuestos de Capernaúm, un oficio despreciado, a quien Jesús llamó con una sola palabra: «Sígueme» (Mt 9:9). Acostumbrado a llevar cuentas, escribió un evangelio ordenado, con listas y cinco grandes discursos.',
        { h: 'Para lectores judíos' },
        'Mateo cita el Antiguo Testamento más que ningún otro evangelista y repite la fórmula «para que se cumpliese lo dicho por el profeta». No explica las costumbres judías y habla del «reino de los cielos», como hacían los judíos piadosos para no pronunciar el nombre de Dios. Presenta a Jesús como el Mesías prometido, que no vino a abrogar la ley, sino a cumplirla (Mt 5:17), y como un nuevo Moisés que enseña desde un monte.',
        { h: 'Para todas las naciones' },
        'Al mismo tiempo, Mateo abre la puerta a los gentiles. En la genealogía hay mujeres extranjeras, como Rut y Rahab; los primeros en adorar al Niño son magos de Oriente, y el libro termina con el envío a «todas las naciones» (Mt 28:19). Es también el único evangelio que usa la palabra iglesia (Mt 16:18; 18:17).',
        { h: 'Su fecha' },
        'Jesús anuncia la destrucción del templo (Mt 24:2), pero el libro no la narra como un hecho ocurrido. Por eso este recurso, como Cronología del Nuevo Testamento, lo fecha hacia el 50–60. Otros estudiosos lo ubican en los años 60; la tradición antigua lo consideraba el primero de los evangelios. La relación entre Mateo, Marcos y Lucas se resume en la estación 7.',
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } }
      ],
      pensar: 'Jesús llamó a un publicano despreciado y lo convirtió en autor del primer libro del Nuevo Testamento. ¿Qué te dice eso sobre lo que Dios puede hacer con tu historia?'
    },
    {
      id: 'marcos', n: 'Marcos: el Siervo en acción', ref: 'Marcos 1:1; 10:45; 15:39; Hechos 12:12; 15:37-39; 1 Pedro 5:13', fecha: [55, 65],
      visual: [
        ficha('El evangelio según Marcos', [
          ['Autor', 'Juan Marcos, compañero de Pablo y de Pedro (Hch 12:12; 1 P 5:13)'],
          ['Primeros lectores', 'Creyentes gentiles, probablemente de Roma'],
          ['Fecha', 'Entre el 55 y el 65 d.C.'],
          ['Lugar', 'Roma, según la tradición antigua'],
          ['Tema', 'Jesús, el Hijo de Dios, vino a servir y a dar su vida en rescate'],
          ['Palabras clave', '«En seguida» (más de cuarenta veces), «evangelio», «Hijo de Dios»'],
          ['Versículo clave', 'Marcos 10:45']
        ]),
        bosquejo('Bosquejo de Marcos', [
          ['1:1-13', 'El comienzo: Juan el Bautista, el bautismo y la tentación'],
          ['1:14–8:26', 'El ministerio en Galilea: autoridad sobre la enfermedad, los demonios, la naturaleza y el pecado'],
          ['8:27–10:52', 'Camino a Jerusalén: tres anuncios de la cruz'],
          ['11–13', 'En Jerusalén: entrada, templo y enseñanza en el monte de los Olivos'],
          ['14–16', 'Pasión, muerte y resurrección']
        ], 'La confesión de Pedro en Cesarea de Filipo (Mr 8:29) divide el libro en dos mitades.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDIT, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'jerusalen', 'antioquia', 'pafos'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-marcos-pedro.webp', alt: 'En una casa de Roma, de noche, Juan Marcos escribe en un papiro mientras Pedro, anciano, recuerda en voz alta, sentado junto a una lámpara', pie: 'Según la tradición antigua, Marcos puso por escrito la predicación de Pedro.', origen: 'ia' }
      ],
      texto: [
        'Marcos es el evangelio más breve y el más rápido. No tiene genealogía ni relatos del nacimiento: comienza con Juan el Bautista y, en pocos versículos, Jesús ya está sanando y echando fuera demonios. La palabra «en seguida» aparece una y otra vez. Es un evangelio de acción.',
        { h: 'El autor' },
        'Juan Marcos era hijo de una María en cuya casa se reunía la iglesia de Jerusalén (Hch 12:12). Acompañó a Pablo y a Bernabé en el primer viaje, pero los dejó a mitad del camino, y Pablo no quiso llevarlo en el segundo (Hch 15:37-39). Años después, Pablo pidió que lo trajeran, porque le era útil para el ministerio (2 Ti 4:11). Pedro lo llamaba «Marcos mi hijo» (1 P 5:13). Su vida muestra que un fracaso no tiene la última palabra.',
        'Papías, hacia el año 120, cuenta que Marcos fue intérprete de Pedro y escribió con exactitud lo que recordaba de la predicación del apóstol. Eso explica los detalles vivos del libro y el lugar que tienen en él los errores de Pedro, contados sin disimulo.',
        { h: 'Para lectores romanos' },
        'Marcos explica las costumbres judías, como el lavamiento de manos (Mr 7:3-4), y traduce las palabras arameas, como Talita cumi o Efata. Usa varias palabras latinas. Todo indica lectores gentiles, y la tradición los ubica en Roma, donde los cristianos pronto sufrirían la persecución de Nerón.',
        { h: 'El Siervo que da su vida' },
        'El versículo clave resume el libro: «el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos» (Mr 10:45). La primera mitad muestra la autoridad de Jesús; la segunda, su camino a la cruz. El clímax llega cuando un centurión romano, al verlo morir, dice: «Verdaderamente este hombre era Hijo de Dios» (Mr 15:39). El libro comenzó con ese título (Mr 1:1) y lo pone al final en boca de un gentil.',
        { posturas: {
          titulo: '¿Dónde termina Marcos?',
          a: { n: 'En el versículo 16:8', t: 'Los dos manuscritos griegos completos más antiguos, el Sinaítico y el Vaticano, terminan en Marcos 16:8. Muchos estudiosos piensan que el final largo (16:9-20) se agregó después, para completar el relato con las apariciones del resucitado.' },
          b: { n: 'En el versículo 16:20', t: 'La gran mayoría de los manuscritos, las versiones antiguas y citas de autores del siglo II, como Ireneo, incluyen los versículos 9 a 20. La Reina-Valera los conserva, y muchos los consideran parte del texto original.' },
          c: 'Este recurso conserva los versículos 9 a 20 como los trae la Reina-Valera, y nota que su autenticidad se discute. Ninguna doctrina depende solo de ellos: las señales que acompañan a los creyentes (Mr 16:17-18) se enseñan también en Hechos y en 1 Corintios 12 a 14. El recurso De la Biblia a nosotros estudia este pasaje.'
        } },
        { ir: { t: 'Ver «Pasajes discutidos» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/7' } }
      ],
      pensar: 'Marcos, el que abandonó el viaje misionero, terminó escribiendo un evangelio. ¿Hay alguien a quien hayas dejado de lado y a quien Dios todavía pueda usar?'
    },
    {
      id: 'lucas', n: 'Lucas: el Salvador de todos', ref: 'Lucas 1:1-4; 4:18-19; 9:51; 19:10; Colosenses 4:14', fecha: [60, 61],
      visual: [
        ficha('El evangelio según Lucas', [
          ['Autor', 'Lucas, «el médico amado», compañero de Pablo (Col 4:14; 2 Ti 4:11)'],
          ['Destinatario', 'Teófilo, y con él los creyentes gentiles (Lc 1:3)'],
          ['Fecha', 'Hacia el 60–61 d.C., antes de Hechos'],
          ['Lugar', 'Cesarea o Roma (se discute)'],
          ['Tema', 'Jesús, el Hijo del Hombre lleno del Espíritu, vino a salvar a todos'],
          ['Palabras clave', '«Salvador», «hoy», «Espíritu Santo», «oración», «gozo»'],
          ['Versículo clave', 'Lucas 19:10']
        ]),
        bosquejo('Bosquejo de Lucas', [
          ['1:1-4', 'Prólogo: por qué y cómo escribe'],
          ['1:5–2:52', 'Nacimiento e infancia de Juan y de Jesús'],
          ['3:1–4:13', 'Preparación: Juan, bautismo, genealogía y tentación'],
          ['4:14–9:50', 'Ministerio en Galilea, desde la sinagoga de Nazaret'],
          ['9:51–19:27', 'El viaje a Jerusalén: parábolas propias de Lucas'],
          ['19:28–24:53', 'Jerusalén: pasión, resurrección y ascensión']
        ], 'Casi la mitad del contenido de Lucas no aparece en los otros evangelios.'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-lucas-escribe.webp', alt: 'Lucas escribe sobre un rollo de papiro a la luz de una lámpara de aceite, con otros rollos y tablillas a su alrededor', pie: 'Lucas investigó «con diligencia todas las cosas desde su origen» (Lc 1:3).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/1/1-4', ref: 'Lucas 1:1-4' }
      ],
      texto: [
        'Lucas es el único evangelista que explica cómo trabajó. En su prólogo dice que investigó con cuidado desde el origen, consultando a los testigos, y que escribió por orden para que Teófilo conociera «bien la verdad» de lo que le habían enseñado (Lc 1:1-4). Es el evangelio del historiador.',
        { h: 'El autor' },
        'Lucas escribió también Hechos, y los dos libros forman una obra en dos tomos dedicada al mismo Teófilo. En algunas partes de Hechos, el autor pasa a hablar en primera persona plural, «nosotros», porque acompañó a Pablo en sus viajes. Pablo lo llama «el médico amado» (Col 4:14), y fue el único que lo acompañaba en su última prisión (2 Ti 4:11). Probablemente era gentil, el único autor no judío de la Biblia. Durante los dos años que Pablo estuvo preso en Cesarea, Lucas tuvo ocasión de recorrer Judea y Galilea y de hablar con los testigos.',
        { h: 'Para todos' },
        'Lucas presenta a Jesús como el Salvador de todos los hombres. Su genealogía no se detiene en Abraham, sino que llega hasta Adán (Lc 3:38). Da un lugar especial a los que la sociedad dejaba de lado: los pobres, las mujeres, los samaritanos, los publicanos y los pecadores. Solo Lucas cuenta las parábolas del buen samaritano, del hijo pródigo y del fariseo y el publicano, y la historia de Zaqueo, que termina con el versículo clave: «el Hijo del Hombre vino a buscar y a salvar lo que se había perdido» (Lc 19:10).',
        { h: 'El evangelio del Espíritu y de la oración' },
        'Lucas habla del Espíritu Santo más que Mateo y Marcos juntos. Juan es lleno del Espíritu desde el vientre; María concibe por el Espíritu; Jesús vuelve del Jordán «lleno del Espíritu Santo» y comienza su ministerio en Nazaret leyendo Isaías: «El Espíritu del Señor está sobre mí» (Lc 4:18). Lucas muestra también a Jesús orando en cada momento decisivo. Y el libro termina con la promesa del Padre: los discípulos deben quedarse en Jerusalén hasta ser investidos de poder desde lo alto (Lc 24:49). Hechos contará cómo se cumplió.',
        { ir: { t: 'Ver «Lucas-Hechos, una obra en dos tomos» en Hechos', a: '../../hechos/#introduccion/3' } }
      ],
      pensar: 'Lucas muestra a Jesús orando antes de cada decisión importante. ¿Qué lugar ocupa la oración en tus decisiones?'
    },
    {
      id: 'juan', n: 'Juan: para que creáis', ref: 'Juan 1:1-18; 20:30-31; 21:20-24', fecha: [85, 90],
      visual: [
        ficha('El evangelio según Juan', [
          ['Autor', 'El apóstol Juan, «el discípulo a quien amaba Jesús» (Jn 21:20-24)'],
          ['Primeros lectores', 'Creyentes de Asia, judíos y gentiles'],
          ['Fecha', 'Hacia el 85–90 d.C.'],
          ['Lugar', 'Éfeso, según la tradición antigua'],
          ['Tema', 'Jesús es el Cristo, el Hijo eterno de Dios; quien cree en Él tiene vida'],
          ['Palabras clave', '«Creer» (casi cien veces), «vida», «luz», «verdad», «permanecer», «señal»'],
          ['Versículo clave', 'Juan 20:31']
        ]),
        bosquejo('Bosquejo de Juan', [
          ['1:1-18', 'Prólogo: el Verbo eterno hecho carne'],
          ['1:19–12:50', 'El libro de las señales: siete señales y el rechazo creciente'],
          ['13–17', 'El aposento alto: lavamiento de pies, discurso de despedida y oración'],
          ['18–20', 'Pasión y resurrección: la hora de su gloria'],
          ['21', 'Epílogo: Pedro restaurado y el testimonio del discípulo amado']
        ], 'Siete señales y siete «Yo soy» con imagen ordenan el libro.'),
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-juan-efeso.webp', alt: 'En una casa de Éfeso, Juan, anciano de barba blanca, dicta a un discípulo joven que escribe en un papiro, mientras algunos ancianos de la iglesia escuchan', pie: 'Según Ireneo, Juan escribió su evangelio cuando vivía en Éfeso.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/20/30-31', ref: 'Juan 20:30-31' }
      ],
      texto: [
        'El cuarto evangelio es distinto de los otros tres. No comienza en Belén ni en el Jordán, sino en la eternidad: «En el principio era el Verbo» (Jn 1:1). Cerca del noventa por ciento de su contenido no aparece en los sinópticos. No hay parábolas como las de Mateo, Marcos y Lucas, ni exorcismos, pero sí largos diálogos y discursos, y siete milagros escogidos que Juan llama señales.',
        { h: 'El autor' },
        'El libro dice que lo escribió «el discípulo a quien amaba Jesús», el que se recostó a su lado en la última cena, y añade: «sabemos que su testimonio es verdadero» (Jn 21:20-24). Ese discípulo nunca se nombra, pero aparece junto a Pedro una y otra vez. Ireneo, discípulo de Policarpo, que a su vez había conocido a Juan, dice que el apóstol Juan publicó el evangelio mientras vivía en Éfeso. Los detalles del libro, como las fiestas, la geografía de Jerusalén y la hora de los hechos, son los de un testigo ocular judío.',
        { h: 'El propósito' },
        'Juan es el único evangelista que dice abiertamente para qué escribió: «para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:31). Todo el libro sirve a ese propósito. Las señales, desde el agua convertida en vino hasta la resurrección de Lázaro, revelan quién es Jesús. Los siete «Yo soy», como el pan de vida y la luz del mundo, unen su persona al nombre de Dios revelado a Moisés.',
        { h: 'Un evangelio que completa' },
        'Escrito cuando los otros tres ya circulaban, Juan los completa. Narra el ministerio en Judea y las visitas de Jesús a Jerusalén en las fiestas, que muestran que su ministerio duró unos tres años. Insiste en la divinidad de Cristo y también en su humanidad: Jesús se cansa, tiene sed y llora. Es el evangelio que más enseña sobre el Espíritu Santo como el Consolador que el Padre enviaría (Jn 14–16).',
        { ir: { t: 'Ver «Los siete Yo soy de Juan» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#persona/2' } }
      ],
      pensar: 'Juan escribió «para que creáis… y para que creyendo, tengáis vida» (Jn 20:31). ¿Cuál de las señales de Juan ha fortalecido más tu fe?'
    },
    {
      id: 'cuatro', n: 'Cuatro retratos de un mismo Cristo', ref: 'Deuteronomio 19:15; Ezequiel 1:10; Apocalipsis 4:7; Juan 21:25', fecha: [50, 90],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cuatro.svg', alt: 'Cuatro columnas con los cuatro evangelios: Mateo presenta al Rey, Marcos al Siervo, Lucas al Hombre perfecto y Juan al Hijo de Dios, con sus versículos clave y sus primeros lectores', pie: 'Cuatro retratos de Jesús: el mismo Señor visto desde cuatro ángulos.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Un mismo hecho, cuatro testigos',
          cab: ['Evangelio', 'La inscripción sobre la cruz'],
          filas: [
            ['Mateo 27:37', 'ESTE ES JESÚS, EL REY DE LOS JUDÍOS'],
            ['Marcos 15:26', 'EL REY DE LOS JUDÍOS'],
            ['Lucas 23:38', 'ESTE ES EL REY DE LOS JUDÍOS'],
            ['Juan 19:19', 'JESÚS NAZARENO, REY DE LOS JUDÍOS']
          ],
          nota: 'La inscripción estaba en hebreo, griego y latín (Jn 19:20). Cada evangelista resume; ninguno contradice a los otros.'
        } }
      ],
      texto: [
        '¿Por qué hay cuatro evangelios y no uno solo? La ley de Moisés pedía dos o tres testigos para establecer un hecho (Dt 19:15). Dios nos dio cuatro testigos independientes de la vida de su Hijo. Cada uno lo vio desde un ángulo y escribió para lectores distintos, como cuatro fotografías de un mismo edificio tomadas desde sus cuatro costados.',
        { h: 'Cuatro énfasis' },
        'El esquema resume una manera tradicional de presentarlos. Mateo muestra a Jesús como el Rey, hijo de David, que cumple las profecías. Marcos lo muestra como el Siervo que obra con poder y da su vida. Lucas, como el Hombre perfecto, lleno del Espíritu, amigo de pecadores, que vino a salvar a todos. Juan, como el Hijo eterno de Dios hecho carne. Desde antiguo, los cristianos relacionaron los cuatro evangelios con los cuatro rostros de los seres vivientes de Ezequiel y Apocalipsis: león, buey, hombre y águila (Ez 1:10; Ap 4:7). Los autores antiguos no se pusieron de acuerdo en qué rostro corresponde a cada evangelio, y la Biblia no lo dice; es una ayuda para recordar, no una enseñanza.',
        { h: 'Diferencias que no son contradicciones' },
        'Al comparar los evangelios aparecen diferencias de orden, de detalle o de palabras. Es lo que se espera de testigos honestos: si cuatro relatos fueran idénticos palabra por palabra, se sospecharía que fueron copiados. La tabla muestra un ejemplo. La inscripción sobre la cruz aparece con palabras distintas en cada evangelio, pero los cuatro dicen lo mismo: Jesús, el Rey de los judíos. Además, estaba escrita en tres lenguas, y cada evangelista pudo traducir o resumir una de ellas.',
        'Juan termina su evangelio diciendo que, si se escribieran una por una todas las cosas que hizo Jesús, ni aun en el mundo cabrían los libros (Jn 21:25). Cada evangelista eligió. Leídos juntos, dan un retrato más completo que cualquiera por separado.',
        'La Armonía de los evangelios del sitio pone los cuatro textos en columnas paralelas, en orden cronológico, para leerlos juntos.',
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } },
        { ejercicio: {
          pregunta: 'Al comparar los evangelios, ¿cómo conviene entender las diferencias de detalle entre ellos?',
          opciones: [
            { t: 'Como el testimonio de testigos distintos, que eligen, resumen y ordenan sin contradecirse.', ok: true, por_que: 'Cada evangelista escribió con su propósito; las diferencias completan el cuadro.' },
            { t: 'Como errores que muestran que los evangelios no son confiables.', ok: false, por_que: 'Las diferencias de detalle son normales entre testigos honestos y, examinadas, se armonizan.' },
            { t: 'Como prueba de que los cuatro copiaron de un mismo libro.', ok: false, por_que: 'Si hubieran copiado sin más, no habría diferencias; Juan, además, es casi del todo independiente.' }
          ],
          explicacion: 'Cuatro testigos con sus propios énfasis dan un retrato más rico y más creíble de Jesús.'
        } }
      ],
      pensar: 'Cada evangelio muestra un aspecto de Jesús: Rey, Siervo, Hombre y Dios. ¿Cuál de esos aspectos necesitas contemplar más en esta etapa de tu vida?'
    },
    {
      id: 'sinoptico', n: 'Los sinópticos y Juan', ref: 'Lucas 1:1-4; Juan 14:26; 2 Pedro 1:21', fecha: [50, 90],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Material compartido y propio (aproximado)',
          cab: ['Evangelio', 'Compartido con otros sinópticos', 'Propio'],
          filas: [
            ['Marcos', 'Casi todo su contenido aparece también en Mateo o en Lucas', 'Muy poco (por ejemplo, Mr 4:26-29; 7:31-37; 8:22-26)'],
            ['Mateo', 'Buena parte, con Marcos y con Lucas', 'Los magos, varias parábolas, la gran comisión'],
            ['Lucas', 'Cerca de la mitad', 'El buen samaritano, el hijo pródigo, Zaqueo, Emaús'],
            ['Juan', 'Muy poco', 'Casi todo: Caná, Nicodemo, la samaritana, Lázaro, Juan 13–17']
          ],
          nota: 'Proporciones aproximadas, que varían según cómo se cuenten los pasajes.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/14/26', ref: 'Juan 14:26' }
      ],
      texto: [
        'Mateo, Marcos y Lucas se parecen tanto que pueden leerse en columnas paralelas. Por eso se llaman sinópticos, que significa «vistos juntos». Cuentan muchos de los mismos hechos, a veces en el mismo orden y con las mismas palabras. Juan, en cambio, sigue un camino propio. La pregunta de cómo se relacionan los tres primeros se llama el problema sinóptico.',
        { h: 'Por qué se parecen' },
        'Los tres se basan en el mismo testimonio apostólico, que se predicaba y se enseñaba en las iglesias. Pero los parecidos en el orden y en las palabras exactas, en griego, hacen pensar que unos conocieron el escrito de otros. Lucas mismo dice que muchos habían escrito antes que él y que investigó con diligencia (Lc 1:1-3). Usar fuentes no está reñido con la inspiración: el Espíritu Santo guió a los autores en su investigación, en su memoria y en su escritura. Jesús había prometido que el Espíritu les recordaría todo lo que Él les había dicho (Jn 14:26).',
        { posturas: {
          titulo: '¿Cuál se escribió primero?',
          a: { n: 'Marcos primero', t: 'La postura más extendida hoy, también entre muchos estudiosos evangélicos, sostiene que Marcos se escribió primero y que Mateo y Lucas lo usaron, junto con una colección de dichos de Jesús que ambos comparten (a la que se suele llamar Q, por la palabra alemana que significa fuente). Se apoya en que casi todo Marcos está en los otros dos, y en que Mateo y Lucas casi nunca coinciden entre sí contra Marcos.' },
          b: { n: 'Mateo primero', t: 'Los escritores cristianos de los primeros siglos, como Papías, Ireneo y Agustín, dicen que Mateo escribió primero, y así está ordenado en la Biblia. Algunos estudiosos actuales defienden esta tradición y piensan que Marcos resumió a Mateo y a Lucas, o que los tres dependen del testimonio oral de los apóstoles más que de un documento.' },
          c: 'Este recurso no toma partido: las dos posturas son defendibles y ninguna doctrina depende de ellas. Las dos aceptan que los evangelios transmiten fielmente lo que Jesús hizo y enseñó, contado por testigos y por quienes los escucharon. Las teorías que niegan esa fidelidad no se siguen. La ruta sobre el problema sinóptico de la Armonía, en preparación, estudiará el tema con ejemplos.'
        } },
        { h: 'Juan, el que completa' },
        'Juan conoce a los sinópticos y no repite lo que ellos ya contaron. Su independencia es un testimonio más: un cuarto testigo que confirma lo esencial (la muerte y resurrección de Jesús, la multiplicación de los panes, la entrada en Jerusalén) y agrega lo que los otros no dijeron.',
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } }
      ],
      pensar: 'El Espíritu prometió recordar a los apóstoles todo lo que Jesús les dijo (Jn 14:26). ¿Qué confianza te da saber que el mismo Espíritu que los guió te ayuda hoy a entender lo que escribieron?'
    }
  ];

  /* ---------------- III. Hechos ---------------- */
  const hechos = [
    {
      id: 'hechos', n: 'Hechos: hasta lo último de la tierra', ref: 'Hechos 1:1-8; 2:1-4; 28:30-31', fecha: 62,
      visual: [
        ficha('Hechos de los Apóstoles', [
          ['Autor', 'Lucas, el mismo del tercer evangelio (Hch 1:1)'],
          ['Destinatario', 'Teófilo, y con él toda la iglesia'],
          ['Fecha', 'Hacia el 62 d.C., cuando termina la narración'],
          ['Lugar', 'Roma, probablemente'],
          ['Tema', 'El Espíritu Santo lleva el evangelio de Jerusalén a Roma por medio de la iglesia'],
          ['Período', 'Del año 33 (ascensión y Pentecostés) al 62 (Pablo preso en Roma)'],
          ['Versículo clave', 'Hechos 1:8']
        ]),
        bosquejo('Bosquejo de Hechos', [
          ['1–7', 'Jerusalén: Pentecostés, la primera iglesia, Esteban'],
          ['8–12', 'Judea y Samaria: Felipe, Saulo, Cornelio, Antioquía'],
          ['13–28', 'Hasta lo último de la tierra: los viajes de Pablo y su llegada a Roma']
        ], 'El bosquejo sigue el plan de Hechos 1:8.'),
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Jerusalén: Pentecostés y la primera iglesia (Hch 1–7).', fecha: 33, estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-30'], lugares: ['jerusalen'] } },
          { t: 'Judea, Samaria y Antioquía (Hch 8–12).', fecha: 44, estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-44'], lugares: ['jerusalen', 'samaria', 'cesarea', 'damasco', 'antioquia'] } },
          { t: 'Los tres viajes de Pablo (Hch 13–21).', fecha: 57, estado: { view: MEDIT, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'efeso', 'corinto', 'filipos', 'jerusalen'], trazos: ['viaje-1', 'viaje-2', 'viaje-3'] } },
          { t: 'Preso hasta Roma (Hch 27–28).', fecha: 62, estado: { view: MEDIT, capas: ['roma-14', 'iglesia-62'], lugares: ['cesarea', 'roma'], trazos: ['viaje-roma'] } }
        ] },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@hch/1/8', ref: 'Hechos 1:8' }
      ],
      texto: [
        'Hechos es el puente del Nuevo Testamento. Une los evangelios con las cartas: sin él no sabríamos quién era Pablo, cómo nacieron las iglesias a las que escribió ni cómo el evangelio pasó de un pequeño grupo de judíos en Jerusalén a ciudades de todo el imperio.',
        { h: 'El segundo tomo' },
        'Lucas comienza recordando a Teófilo su «primer tratado», el evangelio, donde habló de lo que Jesús «comenzó a hacer y a enseñar» (Hch 1:1). Hechos cuenta lo que Jesús siguió haciendo, ya ascendido, por medio de su Espíritu y de su iglesia. Por eso algunos lo llaman los hechos del Espíritu Santo.',
        { h: 'Un plan en un versículo' },
        'Antes de ascender, Jesús dijo a sus discípulos: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Ese versículo es el índice del libro, como muestran el bosquejo y el mapa. En el día de Pentecostés, los discípulos fueron llenos del Espíritu y hablaron en otras lenguas (Hch 2:4). Desde allí, el testimonio avanza por círculos cada vez más amplios, hasta llegar a Roma, la capital del mundo.',
        { h: 'Pedro y Pablo' },
        'La primera mitad del libro sigue sobre todo a Pedro; la segunda, a Pablo. Lucas acompañó a Pablo en parte de sus viajes, y en esas secciones escribe «nosotros». Su precisión en nombres de autoridades, títulos y lugares ha sido confirmada una y otra vez por la arqueología.',
        { h: 'Un final abierto' },
        'Hechos termina con Pablo preso en Roma, en una casa alquilada, predicando el reino de Dios «abiertamente y sin impedimento» (Hch 28:31). No cuenta el resultado de su juicio, ni la persecución de Nerón, ni la muerte de Pablo y de Pedro. Lo más probable es que Lucas escribiera en ese momento, hacia el año 62. El final abierto también invita al lector: la historia del testimonio sigue.',
        'El sitio tiene un estudio completo de Hechos, con sus rutas de introducción, panorama, comentario y teología, y un recurso con los viajes de Pablo.',
        { ir: { t: 'Abrir el estudio de Hechos de los Apóstoles', a: '../../hechos/' } },
        { ir: { t: 'Abrir Los viajes de Pablo', a: '../../viajes-pablo/' } }
      ],
      pensar: 'Hechos termina sin un final cerrado: la historia del testimonio sigue. ¿Qué capítulo de esa historia está escribiendo el Espíritu Santo en tu vida y en tu iglesia?'
    }
  ];

  window.__NT.evangelios = evangelios;
  window.__NT.hechos = hechos;
})();
