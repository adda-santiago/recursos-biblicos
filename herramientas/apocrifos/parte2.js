/* Los libros apócrifos y pseudoepígrafos · ruta II. Los libros históricos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const historicos = [
    {
      id: '1-macabeos', n: '1 Macabeos: la historia de una rebelión', ref: 'Daniel 11:31-35; Juan 10:22-23; Hebreos 11:33-34', fecha: [-175, -134],
      visual: [
        img('../imperio-griego/img/grecia-purificacion-templo.webp', 'Judas Macabeo y sus hombres purifican el templo de Jerusalén y vuelven a encender el candelero', 'La purificación del templo, 164 a.C. Recreación.'),
        pasos([
          { t: 'Antíoco IV profana el templo de Jerusalén (167 a.C.)', fecha: -167, estado: { view: V.judea, lugares: ['jerusalen', 'modin'] } },
          { t: 'Matatías se levanta en Modín y huye a los montes con sus hijos', fecha: -167, estado: { view: V.judea, lugares: ['modin', 'jerusalen', 'desierto-judea'] } },
          { t: 'Judas Macabeo vence a los generales seléucidas y purifica el templo (164 a.C.)', fecha: -164, estado: { view: V.judea, lugares: ['jerusalen', 'modin', 'jope', 'samaria'] } },
          { t: 'Simón logra la independencia de Judea (142 a.C.)', fecha: -142, estado: { view: V.oriente, capas: ['seleucidas-200'], lugares: ['jerusalen', 'antioquia', 'roma'] } }
        ]),
        tabla({
          titulo: 'Bosquejo de 1 Macabeos (16 capítulos)',
          cab: ['Capítulos', 'Contenido', 'Años'],
          filas: [
            ['1', 'Alejandro y sus sucesores; Antíoco IV prohíbe la ley y profana el templo', '175–167 a.C.'],
            ['2', 'Matatías en Modín: la rebelión comienza', '167–166 a.C.'],
            ['3–9', 'Judas Macabeo: victorias, purificación del templo y muerte', '166–160 a.C.'],
            ['9–12', 'Jonatán, sumo sacerdote y jefe del pueblo', '160–143 a.C.'],
            ['13–16', 'Simón: independencia, alianza con Roma y muerte', '143–134 a.C.']
          ]
        })
      ],
      texto: [
        'En el año 167 a.C., el rey seléucida Antíoco IV Epífanes prohibió en Judea la circuncisión, el día de reposo y la lectura de la ley, y levantó un altar pagano sobre el altar del templo de Jerusalén. Daniel lo había anunciado siglos antes: «el pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32). 1 Macabeos cuenta cómo ocurrió.',
        { h: 'Lo que cuenta' },
        'En la aldea de Modín, un sacerdote llamado Matatías se negó a ofrecer el sacrificio pagano que exigían los oficiales del rey y huyó a los montes con sus cinco hijos. Al morir, su hijo Judas, apodado Macabeo, tomó el mando. Con un ejército pequeño venció a generales mucho más poderosos y, en diciembre del 164 a.C., recuperó el templo, lo purificó, construyó un altar nuevo y lo dedicó con ocho días de fiesta. Después de Judas gobernaron sus hermanos Jonatán y Simón. Bajo Simón, en el 142 a.C., Judea logró su independencia, que duró hasta que Roma llegó en el 63 a.C.',
        { h: 'Por qué es valioso' },
        '1 Macabeos se escribió en hebreo hacia el año 100 a.C. y se conservó en griego. Es la fuente principal sobre estos años y la mayoría de los historiadores lo considera bastante confiable: es sobrio, da fechas y nombres, y coincide en lo esencial con otras fuentes. Sin él no sabríamos casi nada del origen de la fiesta de la Dedicación, que los judíos llaman Janucá. El evangelio de Juan dice que Jesús estaba en el templo durante esa fiesta: «Celebrábase en Jerusalén la fiesta de la dedicación. Era invierno» (Jn 10:22).',
        'También ayuda a entender a los judíos del tiempo de Jesús. Muchos esperaban un Mesías que hiciera lo mismo que los macabeos: expulsar a los extranjeros y restaurar el reino. Por eso algunos quisieron hacer rey a Jesús por la fuerza (Jn 6:15), y los discípulos preguntaron si restauraría el reino a Israel (Hch 1:6).',
        { h: 'Lo que el libro no pretende' },
        'El autor escribe como historiador, no como profeta. Casi nunca nombra a Dios directamente; prefiere decir «el Cielo». Y reconoce, como se vio en la ruta anterior, que en su tiempo no había profeta en Israel. Leído así, como un buen libro de historia, 1 Macabeos es un gran aporte para el estudio de la Biblia.',
        ir('Ver la rebelión de los macabeos en Entre los Testamentos', '../../entre-los-testamentos/#asmoneos/1'),
        { ejercicio: {
          pregunta: '¿Qué fiesta del evangelio de Juan se explica gracias a 1 Macabeos?',
          opciones: [
            { t: 'La fiesta de los tabernáculos.', ok: false, por_que: 'Esa fiesta está en la ley de Moisés (Lv 23:34) y Juan la menciona en el capítulo 7.' },
            { t: 'La fiesta de la dedicación del templo, en invierno.', ok: true, por_que: 'Recordaba la purificación del templo por Judas Macabeo en el 164 a.C. (Jn 10:22).' },
            { t: 'La Pascua.', ok: false, por_que: 'La Pascua se instituyó en Egipto (Éx 12), siglos antes de los macabeos.' }
          ],
          explicacion: 'La fiesta de la Dedicación no está en la ley de Moisés; nació en el período entre los testamentos, y 1 Macabeos cuenta su origen.'
        } }
      ],
      pensar: 'Los macabeos estuvieron dispuestos a morir antes que abandonar la ley de Dios. ¿Qué cosas de tu fe no estarías dispuesto a negociar, aunque te costara?'
    },
    {
      id: '2-macabeos', n: '2 Macabeos: mártires y resurrección', ref: 'Hebreos 11:35; Hebreos 9:27; Lucas 16:26; 2 Corintios 5:8', fecha: [-180, -161],
      visual: [
        img('madre-siete-hijos.webp', 'En un salón de piedra con columnas, ante el rey seléucida Antíoco IV sentado en su trono, una madre judía de unos cincuenta años, de pie y serena, toma del hombro a su hijo menor, un muchacho de unos catorce años, y le habla en voz baja; detrás, soldados con lanzas', 'La madre anima a su hijo menor a permanecer fiel (2 Macabeos 7). Recreación.'),
        cita('Hebreos 11:35', '@@he/11/35'),
        tabla({
          titulo: '1 y 2 Macabeos comparados',
          cab: ['', '1 Macabeos', '2 Macabeos'],
          filas: [
            ['Lengua original', 'Hebreo', 'Griego'],
            ['Años que cubre', '175–134 a.C.', '180–161 a.C.'],
            ['Estilo', 'Historia sobria', 'Historia con relatos de milagros y discursos'],
            ['Origen', 'Un autor judío de Judea', 'Resumen de una obra de cinco libros de Jasón de Cirene'],
            ['Temas propios', 'La guerra y la independencia', 'El templo, los mártires, la resurrección y la oración por los muertos']
          ]
        })
      ],
      texto: [
        '2 Macabeos no es la continuación del primero. Cuenta en parte los mismos hechos, pero desde otro ángulo. El autor dice que resume en un solo libro una obra de cinco tomos escrita por un tal Jasón de Cirene. Lo escribió en griego, probablemente en Egipto, para animar a los judíos de allí a celebrar la fiesta de la Dedicación y a amar el templo de Jerusalén.',
        { h: 'Los mártires' },
        'Los capítulos más conocidos son el 6 y el 7. Eleazar, un escriba anciano, prefiere morir antes que comer carne de cerdo o fingir que la come. Después, una madre ve morir a sus siete hijos, uno tras otro, porque se niegan a quebrantar la ley ante el rey. Ella anima al menor recordándole que Dios hizo el cielo y la tierra de la nada, y que le devolverá la vida en la resurrección. Hebreos parece aludir a estos relatos cuando dice que «otros fueron atormentados, no aceptando el rescate, a fin de obtener mejor resurrección» (He 11:35).',
        'Estos capítulos muestran que, en el siglo II a.C., muchos judíos creían firmemente en la resurrección de los muertos. Es la fe que los fariseos defendían en tiempos de Jesús y que los saduceos negaban (Hch 23:8).',
        { h: 'La oración por los muertos' },
        'En el capítulo 12, después de una batalla, Judas encuentra bajo las túnicas de sus soldados muertos amuletos dedicados a los ídolos. Hace una colecta y envía dinero a Jerusalén para que se ofrezca un sacrificio por el pecado de ellos, pensando en la resurrección. El autor elogia la acción y dice que es santo orar por los muertos para que sean librados del pecado.',
        { posturas: {
          titulo: '¿Enseña 2 Macabeos 12 que se puede ayudar a los muertos?',
          a: { n: 'Lectura católica', t: 'La Iglesia católica cita este pasaje (Catecismo, 1032) como base para orar y ofrecer sacrificios por los difuntos, para que sean purificados. El Concilio de Trento (1563) enseñó la doctrina del purgatorio.' },
          b: { n: 'Lectura evangélica', t: 'El libro no es Escritura y aquí contradice a la Escritura. La Biblia enseña que está establecido a los hombres «que mueran una sola vez, y después de esto el juicio» (He 9:27), que después de la muerte no se puede pasar de un destino al otro (Lc 16:26) y que el creyente que muere va a estar con el Señor (2 Co 5:8; Fil 1:23).' },
          c: 'El pasaje muestra lo que pensaban algunos judíos del siglo II a.C., no lo que Dios enseña. Los que mueren en Cristo no necesitan ninguna purificación más, porque «la sangre de Jesucristo su Hijo nos limpia de todo pecado» (1 Jn 1:7).'
        } }
      ],
      pensar: 'La madre de los siete hijos esperaba la resurrección sin haber conocido a Cristo. ¿Cómo cambia tu manera de enfrentar el sufrimiento saber que Jesús ya resucitó?'
    },
    {
      id: '3-4-macabeos', n: '3 y 4 Macabeos', ref: 'Daniel 3:16-18; 1 Pedro 4:12-13', fecha: [-217, 50],
      visual: [
        mapa({ view: V.egipto, capas: ['ptolomeos-250'], lugares: ['rafia', 'jerusalen', 'alejandria'] }),
        tabla({
          titulo: 'Dos libros con el mismo nombre y otro tema',
          cab: ['', '3 Macabeos', '4 Macabeos'],
          filas: [
            ['De qué trata', 'La persecución de los judíos de Egipto bajo Ptolomeo IV (hacia 217 a.C.)', 'Un discurso filosófico sobre la razón y las pasiones'],
            ['Escrito', 'Siglo I a.C., en Alejandría', 'Siglo I d.C.'],
            ['¿Habla de los macabeos?', 'No', 'Usa como ejemplo a los mártires de 2 Macabeos 6–7'],
            ['Quién lo lee', 'Las iglesias ortodoxas lo reciben', 'Las Biblias ortodoxas griegas lo ponen en un apéndice']
          ]
        })
      ],
      texto: [
        'Los nombres 3 y 4 Macabeos confunden, porque ninguno de los dos cuenta la historia de Judas Macabeo y sus hermanos. Se llaman así porque se copiaron junto a los otros dos y comparten su tema: la fidelidad de los judíos ante reyes que los persiguen.',
        { h: '3 Macabeos' },
        'El relato ocurre unos cincuenta años antes de la rebelión macabea. Después de vencer a los seléucidas en la batalla de Rafia (217 a.C.), el rey Ptolomeo IV de Egipto visita Jerusalén y quiere entrar al Lugar Santísimo. El sumo sacerdote ora, y el rey cae al suelo paralizado. De vuelta en Egipto, se venga de los judíos: los obliga a registrarse, los encierra en el hipódromo de Alejandría y ordena que los pisoteen elefantes embriagados. Pero dos ángeles aparecen, los elefantes se vuelven contra los soldados, y el rey cambia de actitud y protege a los judíos.',
        'La batalla de Rafia ocurrió de verdad, pero el resto del relato no se puede confirmar con otras fuentes y tiene mucho de novela. Se escribió para animar a los judíos de Egipto a mantenerse fieles a la ley en una ciudad griega que los miraba con desconfianza.',
        { h: '4 Macabeos' },
        '4 Macabeos es un discurso, casi un sermón filosófico. Su tesis es que la razón guiada por la piedad puede dominar las pasiones, incluso el dolor y el miedo. Para probarlo, vuelve a contar la muerte de Eleazar, de los siete hermanos y de su madre, con largos discursos. Usa el lenguaje de la filosofía griega para mostrar que la ley de Moisés forma personas más virtuosas que cualquier escuela de filósofos.',
        'El libro influyó en la manera en que la iglesia antigua habló de sus propios mártires. Los cristianos perseguidos por Roma se vieron reflejados en esos judíos que preferían morir antes que negar a Dios.',
        { h: 'Una fidelidad que la Biblia ya enseñaba' },
        'La Escritura tiene sus propios ejemplos de fidelidad ante reyes que persiguen. Sadrac, Mesac y Abed-nego respondieron a Nabucodonosor: «He aquí nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo» (Dn 3:17), y añadieron que, aunque no los librara, no servirían a sus dioses. La firmeza del creyente no se apoya en la fuerza de su razón, sino en la gracia de Dios y en la esperanza de la gloria (1 P 4:13).'
      ],
      pensar: '4 Macabeos dice que la razón domina las pasiones. La Biblia dice que el fruto del Espíritu incluye el dominio propio (Gá 5:22-23). ¿En qué te apoyas tú para resistir la tentación?'
    },
    {
      id: '1-esdras', n: '1 Esdras y el certamen de los tres guardias', ref: '2 Crónicas 35–36; Esdras 1–10; Nehemías 8:1-12; Hageo 1:1', fecha: [-622, -444],
      visual: [
        img('zorobabel-dario.webp', 'En una sala del palacio persa, con columnas altas y tapices, un joven guardia judío, Zorobabel, habla de pie ante el rey Darío sentado en su trono; a su lado esperan otros dos guardias con lanzas y algunos nobles escuchan', 'Zorobabel ante el rey Darío, según 1 Esdras 3–4. Recreación.'),
        tabla({
          titulo: 'De dónde viene cada parte de 1 Esdras',
          cab: ['1 Esdras', 'Contenido', 'Paralelo en la Biblia'],
          filas: [
            ['Capítulo 1', 'La Pascua de Josías y la caída de Jerusalén', '2 Crónicas 35–36'],
            ['Capítulo 2', 'El decreto de Ciro; cartas contra la reconstrucción', 'Esdras 1; 4:7-24'],
            ['Capítulos 3–4', 'El certamen de los tres guardias', 'Sin paralelo'],
            ['Capítulos 5–7', 'El regreso con Zorobabel y el templo terminado', 'Esdras 2–6'],
            ['Capítulos 8–9', 'Esdras, los matrimonios mixtos y la lectura de la ley', 'Esdras 7–10; Nehemías 8']
          ]
        })
      ],
      texto: [
        '1 Esdras es una versión griega distinta de la historia que cuentan 2 Crónicas, Esdras y Nehemías: va desde la gran Pascua del rey Josías hasta la lectura de la ley por Esdras. En la Biblia griega se llamaba Esdras A, y en la Vulgata, 3 Esdras. Las iglesias ortodoxas lo reciben; la Iglesia católica lo dejó en un apéndice; las iglesias evangélicas no lo incluyen.',
        { h: 'El certamen de los tres guardias' },
        'Lo único que 1 Esdras tiene de propio es un relato famoso. Tres jóvenes de la guardia de Darío compiten para ver quién dice la frase más sabia. El primero afirma que lo más fuerte es el vino, que trastorna a todos los hombres. El segundo dice que es el rey, a quien todos obedecen. El tercero, Zorobabel, dice que las mujeres son más fuertes que el vino y que el rey, pero que por encima de todo está la verdad, que permanece para siempre. La sentencia final, grande es la verdad y prevalece, se hizo proverbial en latín.',
        'Darío declara vencedor a Zorobabel y le ofrece lo que pida. Zorobabel le recuerda el voto de reconstruir Jerusalén y su templo, y el rey lo envía con cartas y ayuda.',
        { h: 'Un problema de orden' },
        'El relato tiene un problema que los lectores notaron desde la antigüedad. Pone a Zorobabel en la corte de Darío antes del primer regreso, que según Esdras ocurrió bajo Ciro, años antes de Darío (Esd 1–2). Además, cuenta las cartas contra la reconstrucción, que Esdras ubica bajo Artajerjes, antes del decreto de Darío. El historiador judío Josefo usó 1 Esdras y tuvo que reordenar los hechos para que encajaran.',
        'Los libros de Esdras y Hageo dan el orden correcto: Zorobabel guió el regreso bajo Ciro, y en el segundo año de Darío Dios levantó a los profetas Hageo y Zacarías para animar a terminar el templo (Hag 1:1; Esd 5:1-2). No hizo falta un concurso de sabiduría: Dios cumplió su palabra «para que se cumpliese la palabra de Jehová por boca de Jeremías» (Esd 1:1).',
        { ejercicio: {
          pregunta: '¿Qué tiene 1 Esdras que no está en la Biblia?',
          opciones: [
            { t: 'El decreto de Ciro que permitió volver a Jerusalén.', ok: false, por_que: 'El decreto está en Esdras 1:1-4 y en 2 Crónicas 36:22-23.' },
            { t: 'El certamen de los tres guardias ante Darío.', ok: true, por_que: 'Es el relato propio del libro; el resto repite, con variantes, a Crónicas, Esdras y Nehemías.' },
            { t: 'La lectura de la ley por Esdras.', ok: false, por_que: 'Está en Nehemías 8, que 1 Esdras repite.' }
          ],
          explicacion: '1 Esdras reúne historias que ya están en la Biblia y les agrega un relato de sabiduría que no encaja con su orden.'
        } }
      ],
      pensar: 'El tercer guardia dijo que la verdad permanece para siempre; Jesús dijo «tu palabra es verdad» (Jn 17:17). ¿Buscas la verdad en la Palabra de Dios antes que en las opiniones de los hombres?'
    },
    {
      id: 'judit', n: 'Judit, una heroína en una historia imposible', ref: 'Jueces 4:17-22; Colosenses 3:9; Daniel 1:8', fecha: [-150, -100],
      visual: [
        img('judit-betulia.webp', 'De noche, a la puerta de una ciudad amurallada en los montes, una mujer judía de unos treinta y cinco años, Judit, vestida con elegancia y un velo fino, sale hacia el campamento enemigo junto a su criada, que lleva una bolsa con comida; a lo lejos brillan las fogatas del ejército', 'Judit sale de Betulia hacia el campamento de Holofernes (Judit 10). Recreación.'),
        tabla({
          titulo: 'Datos que no encajan con la historia',
          cab: ['Lo que dice Judit', 'Lo que dice la historia'],
          filas: [
            ['Nabucodonosor es rey de los asirios y reina en Nínive', 'Nabucodonosor fue rey de Babilonia; Nínive ya había sido destruida en el 612 a.C., antes de su reinado'],
            ['Los judíos acaban de volver del exilio y han purificado el templo', 'El regreso ocurrió en tiempos de Ciro, después de la muerte de Nabucodonosor'],
            ['Holofernes y Bagoas dirigen el ejército', 'Son nombres persas del siglo IV a.C.'],
            ['La ciudad de Betulia, junto a la llanura de Esdrelón', 'No se conoce ninguna ciudad con ese nombre']
          ]
        })
      ],
      texto: [
        'El libro de Judit cuenta que Nabucodonosor envió a su general Holofernes con un ejército enorme a castigar a los pueblos del occidente. Los judíos se preparan para resistir, y Holofernes sitia la pequeña ciudad de Betulia, que domina el paso hacia Jerusalén. Cuando falta el agua, los jefes de la ciudad prometen rendirse en cinco días si Dios no los socorre.',
        { h: 'La heroína' },
        'Entonces aparece Judit, una viuda rica, piadosa y muy hermosa. Reprende a los jefes por poner plazo a Dios, ora, se arregla con sus mejores vestidos y va con su criada al campamento enemigo. Allí engaña a Holofernes diciéndole que le mostrará cómo vencer a los judíos. Durante varios días come solo la comida que lleva consigo, para no contaminarse. La cuarta noche, cuando Holofernes queda borracho en su tienda, Judit le corta la cabeza con su propia espada y vuelve a Betulia. El ejército huye, e Israel se salva.',
        { h: 'Una historia que no ocurrió así' },
        'Desde los primeros versículos, el libro mezcla épocas que no pueden ir juntas, como muestra la tabla. Por eso, incluso muchos estudiosos católicos piensan que Judit no es un relato histórico, sino una novela con mensaje, escrita hacia el 150–100 a.C., quizás en el ambiente de la rebelión macabea. El autor quiso mostrar que Dios salva a su pueblo por medio de una persona débil que confía en Él, como en los días de Débora y Jael (Jue 4).',
        { h: 'Lo bueno y lo dudoso' },
        'El libro muestra una piedad sincera: oración, ayuno, cuidado de la ley de los alimentos y confianza en que Dios no se deja presionar. Pero también presenta como virtud el engaño. En su oración, Judit pide a Dios que haga eficaces sus palabras engañosas, y el libro aprueba sus mentiras sin ninguna reserva.',
        'La Escritura cuenta las mentiras de algunos personajes, como Abraham o Rahab, pero no pone en boca de Dios su aprobación, y el Nuevo Testamento enseña con claridad: «No mintáis los unos a los otros» (Col 3:9). En la Biblia, la fidelidad de Daniel ante la comida del rey se mostró con la verdad: propuso abiertamente una prueba de diez días (Dn 1:8-14).',
        { ejercicio: {
          pregunta: '¿Por qué muchos estudiosos, incluso católicos, piensan que Judit no es un relato histórico?',
          opciones: [
            { t: 'Porque una mujer no podía vencer a un general.', ok: false, por_que: 'La Biblia cuenta hechos así, como el de Jael (Jue 4). El problema no es ese.' },
            { t: 'Porque mezcla épocas imposibles, como a Nabucodonosor reinando en Nínive después del exilio.', ok: true, por_que: 'Los datos del libro no encajan con ninguna época conocida: parece una novela con enseñanza.' },
            { t: 'Porque no se conoce ningún manuscrito antiguo del libro.', ok: false, por_que: 'Hay muchos manuscritos griegos; lo que falta es una copia en hebreo, como las de otros libros en Qumrán.' }
          ],
          explicacion: 'Judit es valiosa para conocer la piedad judía de su época, no como historia.'
        } }
      ],
      pensar: 'Judit pidió a Dios que bendijera sus engaños. ¿Hay situaciones en que te sientes tentado a usar medios incorrectos para lograr algo que crees bueno?'
    }
  ];

  window.__APO.historicos = historicos;
})();
