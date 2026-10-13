/* ==========================================================
   Recursos Bíblicos — Los últimos tiempos (esquema escatológico) · contenido de las rutas
   Motor: ../assets/js/ruta-estudio.js. Geografía: ../assets/js/imperios-geo.js.
   Esquemas propios en img/*.svg (origen: 'esquema'), generados con el script de esquemas.
   Línea doctrinal: premilenial y pretribulacional (dispensacionalista), como enseñan las
   Asambleas de Dios, sin mencionarlas. Las demás posturas se presentan con el bloque { posturas }.
   Citas textuales: Reina-Valera 1960.
   ========================================================== */
(() => {
  const OTRA = '../';
  const E = (n, pie, alt) => ({ tipo: 'imagen', titulo: 'Esquema', src: `img/${n}.svg`, alt, pie, origen: 'esquema' });
  const ESQ = 'Esquema de los eventos futuros: la era de la iglesia, el arrebatamiento, la tribulación de siete años, la segunda venida, el milenio, el juicio del gran trono blanco y los cielos nuevos y la tierra nueva';
  const MEDIO_ORIENTE = [[12, 10], [48, 58]];
  const LEVANTE = [[29.5, 31.5], [35.5, 38.5]];
  const ISRAEL = [[30.9, 33.9], [33.0, 36.4]];

  /* ---------------- Ruta 1 · Panorama ---------------- */
  const panorama = [
    {
      id: 'que-es', n: 'La esperanza bienaventurada', ref: 'Tito 2:11-13; 2 Pedro 1:19-21; Hechos 1:11', fecha: 2026,
      visual: [ E('esquema-completo', 'El plan de Dios para el futuro, en un esquema.', ESQ) ],
      texto: [
        'La Biblia no solo habla del pasado y del presente: también revela el futuro. Una parte importante de la Escritura es profecía, y una buena parte de esa profecía todavía espera su cumplimiento. La escatología, palabra que viene del griego éschatos, «último», es el estudio de lo que la Biblia enseña sobre los últimos tiempos.',
        'Este recurso presenta el plan de Dios para el futuro de manera ordenada, desde la era de la iglesia hasta los cielos nuevos y la tierra nueva. Tiene cuatro rutas: un panorama, los eventos del fin en orden, algunos temas que atraviesan toda la profecía y la geografía de la profecía.',
        { h: 'Una esperanza, no un miedo' },
        'Pablo llama al regreso de Cristo «la esperanza bienaventurada»: los creyentes vivimos «aguardando la esperanza bienaventurada y la manifestación gloriosa de nuestro gran Dios y Salvador Jesucristo» (Tit 2:13). El estudio de la profecía no busca alimentar la curiosidad ni el temor, sino la esperanza, la santidad y la urgencia de anunciar el evangelio.',
        'Pedro compara la palabra profética con «una antorcha que alumbra en lugar oscuro» (2 P 1:19). No responde todas las preguntas, pero ilumina el camino: Dios gobierna la historia, Cristo volverá, el mal será juzgado y Dios hará nuevas todas las cosas.',
        { h: 'La línea que sigue este estudio' },
        'Los cristianos que creen en la autoridad de la Biblia no siempre coinciden en cómo ordenar los eventos del fin. Este estudio sigue la interpretación premilenial y pretribulacional: Cristo arrebatará a su iglesia antes de la gran tribulación, y al final de ella volverá visiblemente a la tierra para reinar mil años. Donde hay otras posturas, el recurso las presenta y explica por qué sigue esta.',
        'El esquema de esta estación resume todo el recorrido. Cada etapa tiene su estación en la ruta Los eventos del fin, en orden.'
      ],
      pensar: 'Pablo llama al regreso de Cristo «la esperanza bienaventurada» (Tit 2:13). ¿Piensas en la venida del Señor con esperanza o con temor? ¿Qué te ayudaría a esperarla con gozo?'
    },
    {
      id: 'interpretar', n: 'Cómo interpretar la profecía', ref: 'Miqueas 5:2; Isaías 7:14; Zacarías 9:9; Salmo 22:16-18; Lucas 24:25-27, 44', fecha: 30,
      visual: [
        { tipo: 'tabla', titulo: 'Cumplidas', tabla: {
          titulo: 'Profecías de la primera venida, cumplidas al pie de la letra',
          cab: ['Profecía', 'Anuncio', 'Cumplimiento'],
          filas: [
            ['Mi 5:2', 'Nacerá en Belén de Judá', 'Mt 2:1-6'],
            ['Is 7:14', 'Nacerá de una virgen', 'Mt 1:22-23'],
            ['Zac 9:9', 'Entrará a Jerusalén montado en un asno', 'Mt 21:4-5'],
            ['Zac 11:12-13', 'Treinta piezas de plata', 'Mt 26:15; 27:9-10'],
            ['Sal 22:18', 'Repartirán sus vestidos y echarán suertes', 'Jn 19:23-24'],
            ['Is 53:9', 'Con los ricos fue en su muerte', 'Mt 27:57-60'],
            ['Sal 16:10', 'No verá corrupción: resucitará', 'Hch 2:31']
          ],
          nota: 'Las profecías de la primera venida se cumplieron de manera literal; por eso se espera lo mismo de las de la segunda.'
        } }
      ],
      texto: [
        'La profecía bíblica usa visiones, símbolos y lenguaje poético. Por eso la manera de interpretarla determina en gran parte las conclusiones. Este estudio sigue algunos principios sencillos.',
        { h: 'Sentido literal, gramatical e histórico' },
        'Se lee el texto en su sentido normal, según su gramática, su contexto histórico y su género. Cuando el texto usa un símbolo, como una bestia o una estatua, el símbolo representa algo real, y muchas veces la misma Escritura lo explica: las bestias de Daniel 7 son reinos (Dn 7:17), y las estrellas y los candeleros de Apocalipsis 1 son los ángeles y las iglesias (Ap 1:20). Pero lo que no se presenta como símbolo, como un período de mil años, una ciudad o un pueblo, se entiende en su sentido literal.',
        { h: 'La primera venida como modelo' },
        'El argumento más fuerte a favor de la lectura literal es la historia. Las profecías sobre la primera venida de Cristo se cumplieron al pie de la letra: nació en Belén, de una virgen, entró a Jerusalén en un asno, fue vendido por treinta piezas de plata, sus vestidos fueron sorteados, fue sepultado con un rico y resucitó. Jesús mismo explicó a sus discípulos que era necesario que se cumpliera todo lo que estaba escrito de él en la ley, los profetas y los salmos (Lc 24:44). Si las profecías de la primera venida se cumplieron literalmente, es razonable esperar lo mismo de las de la segunda.',
        { h: 'Israel y la iglesia' },
        'Cuando la Biblia promete algo a Israel, se entiende que habla de Israel, el pueblo descendiente de Abraham, Isaac y Jacob. La iglesia recibe bendiciones espirituales en Cristo, pero no reemplaza a Israel en las promesas que Dios le hizo. Pablo lo afirma: «no ha desechado Dios a su pueblo» (Ro 11:2), y anuncia que «todo Israel será salvo» (Ro 11:26).',
        { h: 'Sin fijar fechas' },
        'Finalmente, la profecía no se usa para calcular la fecha de la venida del Señor. «Del día y la hora nadie sabe, ni aun los ángeles de los cielos, sino sólo mi Padre» (Mt 24:36). La profecía se estudia para conocer el plan de Dios y vivir preparados, no para adivinar el calendario.'
      ],
      pensar: 'Las profecías de la primera venida de Jesús se cumplieron al pie de la letra. ¿Cómo fortalece tu confianza en las promesas de su segunda venida saber esto?'
    },
    {
      id: 'milenio-posturas', n: 'Cuatro maneras de entender el milenio', ref: 'Apocalipsis 20:1-6', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Posturas', tabla: {
          titulo: 'Las principales posturas sobre el milenio',
          cab: ['Postura', 'El milenio es…', 'Cristo vuelve…', 'Israel'],
          filas: [
            ['Amilenialismo', 'Simbólico: el reinado actual de Cristo desde el cielo, en la era de la iglesia', 'Una sola vez, al final, para el juicio final', 'La iglesia recibe las promesas de Israel'],
            ['Postmilenialismo', 'Una era de paz que el evangelio traerá gradualmente al mundo', 'Después del milenio', 'Generalmente, la iglesia recibe las promesas'],
            ['Premilenialismo histórico', 'Un reinado literal de Cristo en la tierra', 'Antes del milenio, después de la tribulación', 'Se espera una conversión de Israel'],
            ['Premilenialismo dispensacional', 'Un reinado literal de Cristo en la tierra, con Israel restaurado', 'Por su iglesia antes de la tribulación; con ella a la tierra después', 'Dios cumplirá a Israel sus promesas']
          ],
          nota: 'Este estudio sigue el premilenialismo dispensacional, también llamado pretribulacional.'
        } }
      ],
      texto: [
        'Apocalipsis 20 menciona seis veces un período de mil años en el que Satanás está atado y los santos reinan con Cristo. Cómo se entiende ese período, el milenio, divide a los cristianos en cuatro grandes posturas.',
        { h: 'Las cuatro posturas' },
        'El amilenialismo, que significa «sin milenio» literal, entiende los mil años como un símbolo del reinado actual de Cristo desde el cielo durante la era de la iglesia. Satanás estaría atado desde la cruz en el sentido de que ya no puede impedir que el evangelio llegue a las naciones. Cristo volvería una sola vez, al final, para la resurrección y el juicio de todos.',
        'El postmilenialismo enseña que el evangelio irá transformando el mundo hasta producir una larga era de paz y justicia, y que Cristo volverá después de ese milenio.',
        'El premilenialismo enseña que Cristo volverá antes del milenio para reinar literalmente sobre la tierra durante mil años. El premilenialismo histórico, sostenido por varios escritores cristianos de los primeros siglos, ubica el regreso de Cristo después de la tribulación. El premilenialismo dispensacional distingue el arrebatamiento de la iglesia, antes de la tribulación, de la venida gloriosa de Cristo a la tierra, al final de ella.',
        { h: 'Por qué este estudio sigue el premilenialismo' },
        'Apocalipsis 19 describe la venida de Cristo, y el capítulo 20 continúa con lo que sucede después: Satanás atado, la primera resurrección y el reinado de mil años. El orden del texto pone la venida antes del milenio. Además, los santos que reinan con Cristo son los que «vivieron» en una primera resurrección, que el texto distingue de la de «los otros muertos», mil años después (Ap 20:4-5). Si una resurrección es corporal, la otra también.',
        'Los profetas del Antiguo Testamento anuncian un reino en la tierra donde las naciones no se adiestrarán más para la guerra (Is 2:4), donde el lobo morará con el cordero (Is 11:6) y donde Jerusalén será el centro de la adoración (Zac 14:16). Nada de eso describe el mundo actual. El premilenialismo espera su cumplimiento literal.',
        'Los creyentes de las cuatro posturas confiesan juntos lo esencial: Cristo volverá, los muertos resucitarán y Dios juzgará al mundo.'
      ],
      pensar: 'Aunque los cristianos difieren en cómo entender el milenio, todos confiesan que Cristo volverá y que los muertos resucitarán. ¿Cómo puedes estudiar estos temas con convicción y, a la vez, con amor hacia quienes piensan distinto?'
    },
    {
      id: 'dispensaciones', n: 'Las dispensaciones', ref: 'Efesios 1:9-10; 3:2-6; Gálatas 3:23-25; Juan 1:17', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Dispensaciones', tabla: {
          titulo: 'Las siete dispensaciones, según la enseñanza dispensacional clásica',
          cab: ['Dispensación', 'Desde', 'Hasta', 'Pasajes'],
          filas: [
            ['Inocencia', 'La creación', 'La caída', 'Gn 1–3'],
            ['Conciencia', 'La caída', 'El diluvio', 'Gn 4–8'],
            ['Gobierno humano', 'Noé', 'Babel', 'Gn 9–11'],
            ['Promesa', 'Abraham', 'El Sinaí', 'Gn 12 – Éx 19'],
            ['Ley', 'El Sinaí', 'La cruz', 'Éx 20 – Hch 1'],
            ['Gracia (la iglesia)', 'Pentecostés', 'El arrebatamiento', 'Hch 2 – Ap 3'],
            ['Reino (el milenio)', 'La segunda venida', 'El juicio final', 'Ap 20']
          ],
          nota: 'Una herramienta para ordenar la historia bíblica. Los nombres y el número varían según los maestros.'
        } }
      ],
      texto: [
        'El premilenialismo pretribulacional se suele llamar también dispensacionalismo, porque organiza la historia bíblica en dispensaciones. La palabra viene del griego oikonomía, que la RV 1960 traduce como «dispensación» y que significa administración o manera de gobernar una casa (Ef 1:10; 3:2).',
        { h: 'Un mismo Dios, distintas administraciones' },
        'La idea es sencilla: Dios es siempre el mismo, y la salvación ha sido siempre por gracia mediante la fe, pero la manera en que Dios se relaciona con la humanidad y lo que pide de ella cambia en distintas etapas de la historia. Antes de Moisés no existía la ley; bajo la ley, Israel ofrecía sacrificios en el tabernáculo y en el templo; desde la cruz, esos sacrificios terminaron, porque Cristo cumplió la ley. «Pues la ley por medio de Moisés fue dada, pero la gracia y la verdad vinieron por medio de Jesucristo» (Jn 1:17).',
        'Pablo habla de un misterio que no se dio a conocer a otras generaciones: que los gentiles son coherederos y miembros del mismo cuerpo, la iglesia (Ef 3:5-6). La iglesia es algo nuevo en el plan de Dios, nacido en Pentecostés, distinto de Israel aunque unido a sus raíces.',
        { h: 'Las siete dispensaciones' },
        'Muchos maestros distinguen siete dispensaciones, que aparecen en la tabla. No todos usan los mismos nombres ni el mismo número, y no se trata de un dogma, sino de una herramienta para ordenar la lectura de la Biblia. Lo importante de esta manera de leer la Escritura está en tres convicciones: la interpretación literal de la profecía, la distinción entre Israel y la iglesia, y el propósito de Dios de glorificarse en toda la historia.',
        { h: 'Por qué importa para la profecía' },
        'Si la iglesia es distinta de Israel, las promesas que Dios hizo a Israel sobre su tierra, su rey y su reino no se cumplen en la iglesia, sino que esperan un cumplimiento futuro. Y si la iglesia comenzó en un momento preciso, Pentecostés, también puede terminar su etapa en la tierra en un momento preciso, el arrebatamiento. Después, Dios volverá a tratar con Israel en la última semana de Daniel.'
      ],
      pensar: 'Pablo dice que Dios reveló un misterio: que judíos y gentiles forman un solo cuerpo en Cristo (Ef 3:6). ¿Qué privilegio y qué responsabilidad implica para ti formar parte de la iglesia en esta etapa del plan de Dios?'
    },
    {
      id: 'setenta-semanas', n: 'Las setenta semanas de Daniel', ref: 'Daniel 9:24-27; Nehemías 2:1-8; Mateo 24:15', fecha: 33,
      visual: [ E('setenta-semanas', 'Las setenta semanas de Daniel 9.', 'Esquema de las setenta semanas de Daniel: siete semanas, sesenta y dos semanas hasta el Mesías, un paréntesis que corresponde a la era de la iglesia, y la semana setenta dividida en dos mitades de tres años y medio') ],
      texto: [
        'Daniel 9 contiene la profecía que da el marco cronológico de los últimos tiempos. Mientras Daniel oraba por su pueblo al final del exilio en Babilonia, el ángel Gabriel le dijo: «Setenta semanas están determinadas sobre tu pueblo y sobre tu santa ciudad» (Dn 9:24).',
        { h: 'Semanas de años' },
        'La palabra hebrea traducida «semanas» significa «sietes». Por el contexto, se trata de sietes de años: setenta por siete, 490 años. La profecía es sobre el pueblo de Daniel, Israel, y su ciudad santa, Jerusalén. En ese tiempo Dios terminará con la prevaricación, traerá la justicia perdurable y ungirá al Santo de los santos.',
        { h: 'Sesenta y nueve semanas hasta el Mesías' },
        'El punto de partida es «la salida de la orden para restaurar y edificar a Jerusalén» (Dn 9:25). Muchos lo identifican con la orden del rey Artajerjes a Nehemías, hacia el año 444 a.C. (Neh 2:1-8). Desde allí hasta «el Mesías Príncipe» habría siete semanas y sesenta y dos semanas: 69 semanas, 483 años. Contando años proféticos de 360 días, algunos calculan que se cumplen en el año 33 d.C., cuando Jesús entró a Jerusalén como rey. Otros cálculos llegan a fechas cercanas. «Y después de las sesenta y dos semanas se quitará la vida al Mesías, mas no por sí» (Dn 9:26): Jesús murió por los pecados de otros.',
        'El mismo versículo anuncia que el pueblo de un príncipe que ha de venir destruiría la ciudad y el santuario. Así ocurrió en el año 70, cuando Roma destruyó Jerusalén y el templo.',
        { h: 'La semana que falta' },
        'Falta una semana, la setenta. El versículo 27 dice que el príncipe que ha de venir confirmará un pacto con muchos por una semana, y a la mitad de la semana hará cesar el sacrificio y la ofrenda, y pondrá la abominación desoladora. Jesús ubicó esa abominación en el futuro: «cuando veáis en el lugar santo la abominación desoladora de que habló el profeta Daniel…» (Mt 24:15).',
        'Por eso se entiende que entre la semana 69 y la 70 hay un paréntesis: la era de la iglesia, que no se cuenta en el reloj profético de Israel. Cuando la iglesia sea arrebatada, comenzará la semana setenta: siete años de tribulación, divididos en dos mitades de tres años y medio, que Daniel y Apocalipsis describen como «tiempo, y tiempos, y medio tiempo» (Dn 7:25), 42 meses o 1.260 días.'
      ],
      pensar: 'La profecía de las setenta semanas anunció con siglos de anticipación la venida y la muerte del Mesías (Dn 9:25-26). ¿Qué te dice esto sobre la confiabilidad de la Palabra de Dios para lo que todavía falta?'
    },
    {
      id: 'tiempos-gentiles', n: 'Los tiempos de los gentiles', ref: 'Daniel 2:31-45; 7:1-27; Lucas 21:24', fecha: [-605, 2026],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Cabeza de oro: Babilonia (Dn 2:37-38).', fecha: -570,
            estado: { view: MEDIO_ORIENTE, capas: ['babilonia-570'], lugares: ['babilonia', 'jerusalen'] } },
          { t: 'Pecho y brazos de plata: Media y Persia (Dn 2:39; 8:20).', fecha: -500,
            estado: { view: MEDIO_ORIENTE, capas: ['persia-500'], lugares: ['susa', 'jerusalen'] } },
          { t: 'Vientre y muslos de bronce: Grecia (Dn 2:39; 8:21).', fecha: -323,
            estado: { view: MEDIO_ORIENTE, capas: ['alejandro-323'], lugares: ['babilonia', 'jerusalen'] } },
          { t: 'Piernas de hierro: Roma (Dn 2:40).', fecha: 117,
            estado: { view: MEDIO_ORIENTE, capas: ['roma-117'], lugares: ['roma', 'jerusalen'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-estatua-daniel.webp', alt: 'La gran estatua del sueño de Nabucodonosor, con cabeza de oro, pecho de plata, vientre de bronce, piernas de hierro y pies de hierro y barro, golpeada por una piedra', pie: 'La estatua de Daniel 2.', origen: 'ia' }
      ],
      texto: [
        'Jesús anunció la destrucción de Jerusalén y dijo que la ciudad sería «hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan» (Lc 21:24). Los tiempos de los gentiles son el largo período en que Jerusalén y el pueblo de Israel están bajo el dominio de imperios gentiles. Comenzaron cuando Nabucodonosor conquistó Jerusalén, y terminarán cuando Cristo vuelva a reinar.',
        { h: 'La estatua y las bestias' },
        'Daniel recibió el panorama de esos tiempos en dos visiones paralelas. En Daniel 2, Nabucodonosor soñó con una gran estatua: cabeza de oro, pecho y brazos de plata, vientre y muslos de bronce, piernas de hierro y pies en parte de hierro y en parte de barro cocido. En Daniel 7, Daniel vio cuatro bestias que subían del mar: un león, un oso, un leopardo y una cuarta bestia espantosa con diez cuernos. Ambas visiones describen cuatro imperios sucesivos, que la misma Escritura y la historia identifican: Babilonia, Media y Persia, Grecia y Roma (Dn 2:38; 8:20-21).',
        { h: 'La forma final del cuarto reino' },
        'El cuarto reino tiene una forma final que todavía no se ha visto: los pies y los diez dedos de la estatua, y los diez cuernos de la cuarta bestia. De entre esos diez reyes surge «otro cuerno pequeño» que habla grandes cosas contra el Altísimo y persigue a los santos (Dn 7:8, 24-25). La interpretación premilenial entiende que se trata de una confederación futura de naciones, en el territorio o la herencia del antiguo imperio romano, de la que surgirá el anticristo.',
        { h: 'La piedra' },
        'Ambas visiones terminan igual. En Daniel 2, una piedra cortada no con mano golpea la estatua en los pies, la desmenuza y se convierte en un gran monte que llena toda la tierra. «Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido» (Dn 2:44). En Daniel 7, uno como un hijo de hombre recibe dominio, gloria y reino eterno (Dn 7:13-14). Es el reino de Cristo, que reemplazará a todos los reinos de los hombres.',
        'Los recursos de los imperios recorren la historia de cada uno de estos reinos.'
      ],
      pensar: 'Los imperios más poderosos de la historia fueron en la visión de Daniel solo partes de una estatua que la piedra desmenuzó (Dn 2:34-35). ¿Cómo te ayuda esta visión a mirar los poderes de tu tiempo?'
    },
    {
      id: 'resumen', n: 'El esquema completo', ref: '1 Tesalonicenses 4:16-17; Apocalipsis 19–22', fecha: 2026,
      visual: [
        E('esquema-completo', 'El esquema completo de los eventos futuros.', ESQ),
        { tipo: 'tabla', titulo: 'En orden', tabla: {
          titulo: 'Los eventos futuros en orden',
          cab: ['#', 'Evento', 'Pasajes principales'],
          filas: [
            ['1', 'El arrebatamiento de la iglesia', '1 Ts 4:13-18; 1 Co 15:51-53'],
            ['2', 'El tribunal de Cristo y las bodas del Cordero', '2 Co 5:10; Ap 19:7-9'],
            ['3', 'La tribulación: la semana setenta', 'Dn 9:27; Mt 24; Ap 6–18'],
            ['4', 'El anticristo y la gran tribulación', '2 Ts 2:3-10; Ap 13'],
            ['5', 'Armagedón y la segunda venida de Cristo', 'Ap 16:16; 19:11-21; Zac 14:3-4'],
            ['6', 'El juicio de las naciones; Satanás atado', 'Mt 25:31-46; Ap 20:1-3'],
            ['7', 'El milenio', 'Ap 20:4-6; Is 11; Zac 14:9-21'],
            ['8', 'La última rebelión y el gran trono blanco', 'Ap 20:7-15'],
            ['9', 'Cielos nuevos y tierra nueva', 'Ap 21–22']
          ]
        } }
      ],
      texto: [
        'Con los principios de interpretación, las setenta semanas y los tiempos de los gentiles, ya se puede ver el esquema completo. Esta estación lo resume, y la ruta siguiente lo recorre paso a paso.',
        { h: 'El presente: la era de la iglesia' },
        'Vivimos en la era de la iglesia, el paréntesis entre la semana 69 y la 70 de Daniel. Dios está tomando de entre las naciones un pueblo para su nombre (Hch 15:14), y el evangelio debe ser predicado a todas las naciones (Mt 24:14). Es un tiempo de gracia, de misión y de espera.',
        { h: 'El arrebatamiento y la tribulación' },
        'El próximo evento del plan de Dios es el arrebatamiento: el Señor descenderá del cielo, los muertos en Cristo resucitarán, y los creyentes que vivan serán transformados y arrebatados para recibirlo en el aire (1 Ts 4:16-17). Mientras la iglesia está con Cristo, en el cielo, ante su tribunal y en las bodas del Cordero, en la tierra se desarrollará la semana setenta: siete años de tribulación, con el surgimiento del anticristo y los juicios de Dios descritos en Apocalipsis.',
        { h: 'La segunda venida y el reino' },
        'Al final de la tribulación, cuando las naciones se reúnan contra Jerusalén en Armagedón, Cristo volverá con poder y gran gloria, acompañado de sus santos. Sus pies se afirmarán sobre el monte de los Olivos, vencerá a la bestia y al falso profeta, juzgará a las naciones, Satanás será atado, e Israel lo reconocerá como su Mesías. Comenzará el milenio, mil años de reinado de Cristo sobre la tierra.',
        { h: 'El estado eterno' },
        'Al final del milenio, Satanás será suelto por un poco de tiempo y encabezará una última rebelión, que Dios destruirá. Los muertos que no tuvieron parte en la primera resurrección serán juzgados ante el gran trono blanco. Y Dios creará cielos nuevos y tierra nueva, donde morará con su pueblo para siempre.',
        'Cada uno de estos eventos tiene su estación en la ruta Los eventos del fin, en orden.'
      ],
      pensar: 'Según este esquema, el próximo evento del plan de Dios es el arrebatamiento de la iglesia, que puede ocurrir en cualquier momento. ¿Estás preparado para ese momento? ¿Lo están los que amas?'
    }
  ];

  /* ---------------- Ruta 2 · Los eventos del fin, en orden ---------------- */
  const eventos = [
    {
      id: 'era-iglesia', n: 'La era de la iglesia y las señales', ref: 'Mateo 24:4-14; 2 Timoteo 3:1-5; 1 Timoteo 4:1; Hechos 1:7-8', fecha: 2026,
      visual: [
        E('esquema-iglesia', 'Vivimos en la era de la iglesia.', ESQ),
        { tipo: 'tabla', titulo: 'Señales', tabla: {
          titulo: 'Lo que Jesús y los apóstoles anunciaron para los postreros días',
          cab: ['Señal', 'Pasaje'],
          filas: [
            ['Engañadores y falsos cristos', 'Mt 24:4-5, 11, 24'],
            ['Guerras y rumores de guerras', 'Mt 24:6-7'],
            ['Hambres, pestes y terremotos', 'Mt 24:7; Lc 21:11'],
            ['Persecución de los creyentes', 'Mt 24:9'],
            ['Multiplicación de la maldad; el amor de muchos se enfría', 'Mt 24:12'],
            ['Apostasía y doctrinas de demonios', '1 Ti 4:1; 2 Ts 2:3'],
            ['Personas amadoras de sí mismas y de los deleites', '2 Ti 3:1-5'],
            ['Burladores que niegan la venida del Señor', '2 P 3:3-4'],
            ['El evangelio predicado en todo el mundo', 'Mt 24:14']
          ]
        } }
      ],
      texto: [
        'El tiempo presente es la era de la iglesia, que comenzó en Pentecostés y terminará con el arrebatamiento. El Nuevo Testamento llama a todo este período «los postreros días» (Hch 2:17; He 1:2). No sabemos cuánto durará, pero sabemos qué caracteriza a la iglesia en este tiempo y qué señales lo acompañan.',
        { h: 'La tarea de la iglesia' },
        'Cuando los discípulos preguntaron por los tiempos del reino, Jesús respondió que no les tocaba saberlos, y les encargó: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos» (Hch 1:7-8). La era de la iglesia es el tiempo de la misión. Jesús dijo que el evangelio del reino sería predicado «en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin» (Mt 24:14).',
        { h: 'Las señales' },
        'En el sermón del monte de los Olivos, Jesús anunció engañadores, guerras, hambres, terremotos y persecución, y aclaró: «todo esto será principio de dolores» (Mt 24:8). Pablo advirtió que en los postreros días vendrían tiempos peligrosos, con personas amadoras de sí mismas, del dinero y de los deleites más que de Dios, que tendrían apariencia de piedad pero negarían su eficacia (2 Ti 3:1-5). Y anunció una apostasía, un abandono de la fe (1 Ti 4:1; 2 Ts 2:3).',
        'Muchas de estas señales han existido a lo largo de la historia, y no son en sí mismas el fin. Pero Jesús comparó su aumento con los dolores de parto, que se vuelven más intensos a medida que se acerca el momento. Muchos de los acontecimientos que Jesús describe en Mateo 24 se cumplirán plenamente en la tribulación.',
        { h: 'Vivir preparados' },
        'La respuesta que Jesús pidió ante las señales no fue calcular fechas, sino velar: «Velad, pues, porque no sabéis a qué hora ha de venir vuestro Señor» (Mt 24:42). El creyente que vive en los postreros días está llamado a perseverar en la fe, a predicar el evangelio y a vivir en santidad, esperando la venida del Señor.'
      ],
      pensar: 'Jesús anunció que en los últimos tiempos el amor de muchos se enfriaría (Mt 24:12). ¿Qué puedes hacer para mantener encendido tu amor por Dios y por los demás?'
    },
    {
      id: 'arrebatamiento', n: 'El arrebatamiento de la iglesia', ref: '1 Tesalonicenses 4:13-18; 1 Corintios 15:51-53; Juan 14:1-3; Filipenses 3:20-21', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-arrebatamiento.webp', alt: 'Al amanecer, sobre una ciudad y sus campos, creyentes de todas las edades ascienden hacia nubes luminosas, con los rostros llenos de gozo, mientras una luz dorada desciende del cielo', pie: '«Seremos arrebatados juntamente con ellos en las nubes» (1 Ts 4:17).', origen: 'ia' },
        E('esquema-arrebatamiento', 'El arrebatamiento y la primera resurrección.', ESQ)
      ],
      texto: [
        'El arrebatamiento es el momento en que Cristo vendrá por su iglesia. Los creyentes que han muerto resucitarán, y los que estén vivos serán transformados y llevados al encuentro del Señor.',
        { h: 'La promesa de Jesús' },
        'La noche antes de morir, Jesús prometió a sus discípulos: «voy, pues, a preparar lugar para vosotros. Y si me fuere y os preparare lugar, vendré otra vez, y os tomaré a mí mismo, para que donde yo estoy, vosotros también estéis» (Jn 14:2-3). No habló de venir a reinar en la tierra, sino de venir a tomar a los suyos para llevarlos a la casa del Padre.',
        { h: 'Lo que enseña Pablo' },
        'Pablo lo explicó a los tesalonicenses, que estaban preocupados por los creyentes que habían muerto: «el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor» (1 Ts 4:16-17).',
        'La palabra «arrebatados», en griego harpázo, en latín rapiemur, significa ser tomados de golpe, con fuerza. De ella viene el nombre que se da a este evento.',
        'A los corintios les reveló un misterio: «No todos dormiremos; pero todos seremos transformados, en un momento, en un abrir y cerrar de ojos, a la final trompeta» (1 Co 15:51-52). Los creyentes vivos recibirán un cuerpo glorificado, incorruptible e inmortal, semejante al cuerpo glorioso de Cristo (Fil 3:21).',
        { h: 'Inminente' },
        'El Nuevo Testamento presenta el arrebatamiento como algo que puede ocurrir en cualquier momento, sin que deba cumplirse antes ninguna señal. Por eso los creyentes viven «aguardando la esperanza bienaventurada» (Tit 2:13) y esperan «de los cielos a su Hijo» (1 Ts 1:10). La iglesia no espera al anticristo: espera a Cristo.',
        'Pablo concluye: «Por tanto, alentaos los unos a los otros con estas palabras» (1 Ts 4:18). El arrebatamiento es un consuelo para los que lloran a sus muertos en Cristo, y un llamado a vivir preparados.'
      ],
      pensar: 'Pablo dice que los creyentes deben alentarse unos a otros con la esperanza del arrebatamiento (1 Ts 4:18). ¿A quién podrías alentar hoy con esta esperanza?'
    },
    {
      id: 'antes-tribulacion', n: '¿Antes de la tribulación?', ref: '1 Tesalonicenses 1:10; 5:9; Apocalipsis 3:10; 2 Tesalonicenses 2:6-8', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Dos venidas', tabla: {
          titulo: 'El arrebatamiento y la segunda venida, comparados',
          cab: ['', 'Arrebatamiento', 'Segunda venida'],
          filas: [
            ['Cristo viene', 'Por sus santos, en el aire (1 Ts 4:17)', 'Con sus santos, a la tierra (Zac 14:5; Ap 19:14)'],
            ['Quiénes lo ven', 'Los creyentes', 'Todo ojo lo verá (Ap 1:7)'],
            ['Señales previas', 'Ninguna: es inminente', 'La tribulación y sus señales (Mt 24:29-30)'],
            ['Propósito', 'Llevar a la iglesia a la casa del Padre (Jn 14:3)', 'Juzgar y establecer su reino (Mt 25:31)'],
            ['Satanás', 'No se menciona', 'Es atado (Ap 20:1-3)'],
            ['Tono', 'Consuelo (1 Ts 4:18)', 'Juicio y lamento de las naciones (Mt 24:30)']
          ]
        } }
      ],
      texto: [
        'Los cristianos que creen en un arrebatamiento no coinciden en cuándo ocurrirá en relación con la tribulación. Hay tres posturas principales.',
        { posturas: {
          titulo: '¿Cuándo será el arrebatamiento?',
          a: { n: 'Antes de la tribulación', t: 'Cristo arrebatará a su iglesia antes de que comience la semana setenta de Daniel. La iglesia no pasará por la ira de Dios que se derrama en la tribulación. Es la postura pretribulacional.' },
          b: { n: 'A mitad o al final', t: 'Algunos enseñan que la iglesia será arrebatada a mitad de la tribulación, antes de la gran tribulación. Otros, que pasará por toda la tribulación y será arrebatada al final, en el mismo momento de la segunda venida (postura postribulacional).' },
          c: 'Este estudio sigue la postura pretribulacional, por las razones que se explican a continuación. Es una cuestión en la que creyentes fieles a la Biblia difieren; todos esperan al mismo Señor.'
        } },
        { h: 'Las razones' },
        'Primero, la promesa de ser librados de la ira. Jesús es el que «nos libra de la ira venidera» (1 Ts 1:10), y «no nos ha puesto Dios para ira, sino para alcanzar salvación» (1 Ts 5:9). La tribulación es el tiempo de la ira de Dios sobre el mundo (Ap 6:16-17). Al creyente fiel de Filadelfia, Jesús le promete: «yo también te guardaré de la hora de la prueba que ha de venir sobre el mundo entero» (Ap 3:10); no de la prueba, sino de la hora.',
        'Segundo, la inminencia. Si la iglesia tuviera que pasar por la tribulación, los creyentes estarían esperando al anticristo y contando los días desde un pacto. Pero el Nuevo Testamento los llama a esperar en todo momento al Señor.',
        'Tercero, el propósito de la semana setenta. Las setenta semanas están determinadas sobre el pueblo de Daniel, Israel, y su ciudad (Dn 9:24). Jeremías la llama «tiempo de angustia para Jacob» (Jer 30:7).',
        'Cuarto, la iglesia está ausente de la tierra en la descripción de la tribulación. En Apocalipsis 1 a 3, la palabra iglesia aparece una y otra vez; desde el capítulo 4, cuando Juan es llamado a subir al cielo, no vuelve a mencionarse en la tierra hasta el final del libro.',
        'Quinto, el que detiene. Pablo dice que el inicuo no se manifestará hasta que sea quitado de en medio el que lo detiene (2 Ts 2:6-7). Muchos entienden que se trata del Espíritu Santo obrando por medio de la iglesia.'
      ],
      pensar: 'Si el arrebatamiento puede ocurrir en cualquier momento, el creyente no espera señales sino al Señor mismo. ¿Cómo cambia tu manera de vivir hoy saber que Cristo puede venir hoy?'
    },
    {
      id: 'tribunal-bodas', n: 'El tribunal de Cristo y las bodas del Cordero', ref: '2 Corintios 5:10; 1 Corintios 3:11-15; Romanos 14:10-12; Apocalipsis 19:6-9', fecha: 2026,
      visual: [
        E('esquema-cielo', 'En el cielo, mientras en la tierra transcurre la tribulación.', ESQ),
        { tipo: 'tabla', titulo: 'Coronas', tabla: {
          titulo: 'Las coronas que menciona el Nuevo Testamento',
          cab: ['Corona', 'Para quién', 'Pasaje'],
          filas: [
            ['Incorruptible', 'El que se disciplina para servir', '1 Co 9:25'],
            ['De gozo', 'El que gana almas', '1 Ts 2:19-20'],
            ['De justicia', 'Los que aman su venida', '2 Ti 4:8'],
            ['De vida', 'El fiel hasta la muerte, en la prueba', 'Stg 1:12; Ap 2:10'],
            ['De gloria', 'Los pastores fieles', '1 P 5:2-4']
          ]
        } }
      ],
      texto: [
        'Mientras en la tierra transcurre la tribulación, la iglesia arrebatada estará con Cristo. El Nuevo Testamento menciona dos acontecimientos que la involucran: el tribunal de Cristo y las bodas del Cordero.',
        { h: 'El tribunal de Cristo' },
        '«Porque es necesario que todos nosotros comparezcamos ante el tribunal de Cristo, para que cada uno reciba según lo que haya hecho mientras estaba en el cuerpo, sea bueno o sea malo» (2 Co 5:10). La palabra que Pablo usa para tribunal es bema, la plataforma desde donde se juzgaba en las ciudades griegas, como la de Corinto, donde Pablo compareció ante Galión, y desde donde se premiaba a los vencedores de los juegos.',
        'No es un juicio para decidir la salvación. Los que están en Cristo ya han sido justificados, y «ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). Es una evaluación de la obra de cada creyente, para recompensa. Pablo lo explica con la imagen de un edificio: sobre el fundamento, que es Cristo, cada uno edifica con oro, plata y piedras preciosas, o con madera, heno y hojarasca. El fuego probará la obra de cada uno. «Si permaneciere la obra de alguno que sobreedificó, recibirá recompensa. Si la obra de alguno se quemare, él sufrirá pérdida, si bien él mismo será salvo, aunque así como por fuego» (1 Co 3:14-15).',
        'El Nuevo Testamento habla de coronas como recompensa, que aparecen en la tabla. En Apocalipsis, los veinticuatro ancianos echan sus coronas delante del trono (Ap 4:10): toda recompensa termina siendo un motivo de adoración.',
        { h: 'Las bodas del Cordero' },
        'La Biblia presenta a la iglesia como la esposa de Cristo (Ef 5:25-27; 2 Co 11:2). En Apocalipsis 19, antes de la venida de Cristo a la tierra, se oye en el cielo: «Gocémonos y alegrémonos y démosle gloria; porque han llegado las bodas del Cordero, y su esposa se ha preparado» (Ap 19:7). A la esposa se le concede vestirse de lino fino, limpio y resplandeciente, «porque el lino fino es las acciones justas de los santos» (Ap 19:8). Después, la esposa acompañará al Esposo en su venida gloriosa.'
      ],
      pensar: 'Todos los creyentes compareceremos ante el tribunal de Cristo para que se evalúe nuestra obra (2 Co 5:10). ¿Con qué materiales, según 1 Corintios 3, estás edificando tu vida?'
    },
    {
      id: 'tribulacion', n: 'La tribulación', ref: 'Daniel 9:27; 12:1; Mateo 24:15-22; Jeremías 30:7; Apocalipsis 6–18', fecha: 2026,
      visual: [
        E('esquema-tribulacion', 'La tribulación: la semana setenta de Daniel.', ESQ),
        { tipo: 'tabla', titulo: 'Juicios', tabla: {
          titulo: 'Los juicios de Apocalipsis',
          cab: ['Serie', 'Pasaje', 'Contenido'],
          filas: [
            ['Siete sellos', 'Ap 6:1–8:1', 'Conquistador, guerra, hambre, muerte, mártires, gran terremoto y señales en el cielo'],
            ['Siete trompetas', 'Ap 8:2–11:19', 'Juicios sobre la tierra, el mar, las aguas y los astros; langostas del abismo; ejército del Éufrates'],
            ['Siete copas', 'Ap 15–16', 'Úlceras, mar y ríos en sangre, calor del sol, tinieblas, el Éufrates seco, gran terremoto']
          ],
          nota: 'Las tres series son sucesivas y cada vez más intensas: el séptimo sello contiene las trompetas, y la séptima trompeta, las copas. Las estaciones siguientes las recorren una por una.'
        } }
      ],
      texto: [
        'Después del arrebatamiento comenzará la semana setenta de Daniel: siete años que la Biblia describe como un tiempo de angustia sin igual en la historia. Daniel anunció un «tiempo de angustia, cual nunca fue desde que hubo gente hasta entonces» (Dn 12:1), y Jesús dijo: «habrá entonces gran tribulación, cual no la ha habido desde el principio del mundo hasta ahora, ni la habrá» (Mt 24:21).',
        { h: 'El comienzo' },
        'La semana comienza cuando el príncipe que ha de venir confirma un pacto con muchos, en Israel, por siete años (Dn 9:27). Es posible que el mundo lo reciba como un tiempo de paz y seguridad. Pero Pablo advirtió: «cuando digan: Paz y seguridad, entonces vendrá sobre ellos destrucción repentina» (1 Ts 5:3).',
        { h: 'Dos mitades' },
        'A la mitad de la semana, después de tres años y medio, el príncipe rompe el pacto, hace cesar el sacrificio y pone la abominación desoladora en el lugar santo (Dn 9:27; Mt 24:15). Desde entonces comienza la segunda mitad, que Jesús llamó gran tribulación. Apocalipsis la mide en 42 meses o 1.260 días (Ap 11:2-3; 12:6; 13:5).',
        { h: 'Los juicios de Dios' },
        'Apocalipsis 6 al 18 describe la tribulación como el tiempo en que Dios derrama su ira sobre un mundo que lo rechaza, en tres series de siete juicios: sellos, trompetas y copas. Los hombres esconderán su rostro «de la ira del Cordero; porque el gran día de su ira ha llegado» (Ap 6:16-17).',
        { h: 'Misericordia en medio del juicio' },
        'Aun en la tribulación, Dios sigue llamando al arrepentimiento. Ciento cuarenta y cuatro mil israelitas son sellados como siervos de Dios (Ap 7:1-8). Dos testigos profetizan en Jerusalén (Ap 11). Un ángel proclama el evangelio eterno a toda nación, tribu, lengua y pueblo (Ap 14:6). Y Juan ve una gran multitud de todas las naciones, vestida de ropas blancas, que «han salido de la gran tribulación» (Ap 7:14). Muchos creerán en esos días, aunque a costa de su vida.',
        'Sin embargo, la mayoría endurecerá su corazón: «ni aun así se arrepintieron de las obras de sus manos» (Ap 9:20).'
      ],
      pensar: 'En medio de los juicios de la tribulación, muchos «ni aun así se arrepintieron» (Ap 9:20-21). ¿Por qué es tan importante responder hoy al llamado de Dios, y no dejarlo para después?'
    },
    {
      id: 'libro-sellos', n: 'El libro de los siete sellos', ref: 'Apocalipsis 4–5; Daniel 7:9-14; 12:4; Jeremías 32:9-15', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-libro-sellos.webp', alt: 'En el salón del trono celestial, rodeado de un arco iris de esmeralda, veinticuatro ancianos con coronas de oro y cuatro seres vivientes, se ve en la mano del que está sentado en el trono un rollo escrito por dentro y por fuera, sellado con siete sellos de cera', pie: '«Un libro escrito por dentro y por fuera, sellado con siete sellos» (Ap 5:1).', origen: 'ia' },
        E('juicios-apocalipsis', 'Los juicios de Apocalipsis en los siete años.', 'Esquema de los siete sellos, las siete trompetas y las siete copas ubicados sobre los siete años de la tribulación: el séptimo sello abre las trompetas, y la séptima trompeta abre las copas')
      ],
      texto: [
        'Para entender a los cuatro jinetes y los demás juicios hay que comenzar un capítulo antes, en el cielo. Esta estación y las siguientes recorren con detalle los juicios de Apocalipsis 6 al 16, según la lectura premilenial y pretribulacional.',
        { h: 'La escena del trono (Ap 4)' },
        'Después de las cartas a las siete iglesias, Juan oye una voz: «Sube acá, y yo te mostraré las cosas que sucederán después de estas» (Ap 4:1). Muchos maestros pretribulacionales ven en ese llamado una imagen del arrebatamiento: desde aquí, la iglesia no vuelve a aparecer en la tierra hasta el capítulo 19. Juan ve el trono de Dios, rodeado de veinticuatro ancianos con coronas de oro, que representan a los redimidos ya en el cielo, y de cuatro seres vivientes que adoran sin cesar.',
        { h: 'El libro sellado (Ap 5)' },
        'En la mano derecha del que está sentado en el trono hay un libro, en realidad un rollo, «escrito por dentro y por fuera, sellado con siete sellos» (Ap 5:1). Un ángel pregunta quién es digno de abrirlo, y no se halla a nadie, ni en el cielo ni en la tierra. Juan llora mucho.',
        'Entonces uno de los ancianos le dice: «No llores. He aquí que el León de la tribu de Judá, la raíz de David, ha vencido para abrir el libro y desatar sus siete sellos» (Ap 5:5). Juan mira y ve, no a un león, sino a un Cordero «como inmolado», que toma el libro. Los seres vivientes y los ancianos caen ante él y cantan un cántico nuevo: «Digno eres de tomar el libro y de abrir sus sellos; porque tú fuiste inmolado, y con tu sangre nos has redimido para Dios» (Ap 5:9).',
        { h: '¿Qué es el libro?' },
        'El libro contiene el plan de Dios para recuperar la tierra y establecer el reino de su Hijo. Muchos lo comparan con un título de propiedad, como el que Jeremías compró y selló en Anatot (Jer 32:9-15): el que tiene derecho a abrirlo es el legítimo heredero. Solo Cristo, que pagó el precio con su sangre, tiene derecho a reclamar la tierra y juzgarla.',
        'Cada sello que el Cordero abre desata un juicio. Los juicios de la tribulación no son un descontrol del mal, sino decisiones del Cordero, que gobierna la historia desde el trono.',
        'El esquema de esta estación muestra cómo se ordenan las tres series: el séptimo sello contiene las siete trompetas, y la séptima trompeta contiene las siete copas.'
      ],
      pensar: 'Solo el Cordero inmolado fue digno de abrir el libro y dirigir el curso de la historia (Ap 5:5-9). ¿Qué paz te da saber que los acontecimientos del mundo están en las manos de Cristo?'
    },
    {
      id: 'jinetes-1-2', n: 'Los jinetes del caballo blanco y del caballo bermejo', ref: 'Apocalipsis 6:1-4; 19:11-16; Mateo 24:5-7; Daniel 9:26-27; 1 Tesalonicenses 5:3', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-jinetes-1-2.webp', alt: 'Bajo un cielo dramático, un jinete coronado sobre un caballo blanco avanza con un arco en la mano y gesto de triunfo, y detrás de él irrumpe un jinete sobre un caballo rojo encendido que levanta una gran espada', pie: 'El caballo blanco y el caballo bermejo (Ap 6:2-4).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Dos jinetes blancos', tabla: {
          titulo: 'El jinete de Apocalipsis 6 y el de Apocalipsis 19',
          cab: ['', 'Apocalipsis 6:2', 'Apocalipsis 19:11-16'],
          filas: [
            ['Momento', 'Al comienzo de la tribulación', 'Al final de la tribulación'],
            ['Quién abre el juicio', 'El Cordero abre el sello: el jinete es enviado', 'Él mismo es el que juzga y pelea'],
            ['Arma', 'Un arco (no se mencionan flechas)', 'Una espada aguda que sale de su boca'],
            ['Corona', 'Una corona que le es dada (stéfanos, corona de vencedor)', 'Muchas diademas (diádema, corona real)'],
            ['Nombre', 'Ninguno', 'Fiel y Verdadero; el Verbo de Dios; Rey de reyes'],
            ['Lo que sigue', 'Guerra, hambre y muerte', 'La derrota de la bestia y el reino']
          ]
        } }
      ],
      texto: [
        'Cuando el Cordero abre los primeros cuatro sellos, cada uno de los cuatro seres vivientes dice: «Ven y mira» (Ap 6:1), y sale un jinete. Los colores de los caballos recuerdan los carros de Zacarías 6, enviados a recorrer la tierra. Los cuatro forman una secuencia: un conquistador, la guerra, el hambre y la muerte.',
        { h: 'Primer sello: el caballo blanco' },
        '«Y miré, y he aquí un caballo blanco; y el que lo montaba tenía un arco; y le fue dada una corona, y salió venciendo, y para vencer» (Ap 6:2). Es un conquistador que se impone sobre las naciones. Llama la atención que tiene un arco, pero no se mencionan flechas, y que la guerra solo llega con el segundo jinete. Por eso muchos entienden que su conquista comienza sin batallas: por la diplomacia, la promesa de paz y el engaño.',
        { posturas: {
          titulo: '¿Quién es el jinete del caballo blanco?',
          a: { n: 'El anticristo', t: 'Es el príncipe que ha de venir, que al comienzo de la semana setenta confirma un pacto con muchos (Dn 9:27) y se impone como pacificador. Su caballo blanco imita al de Cristo: es el que viene en lugar de Cristo. Jesús comenzó la lista de señales con los engañadores que vendrían en su nombre (Mt 24:5).' },
          b: { n: 'Cristo o el evangelio', t: 'Algunos intérpretes ven en el jinete a Cristo, o el avance victorioso del evangelio, por el color blanco y la semejanza con Apocalipsis 19:11.' },
          c: 'La lectura premilenial y pretribulacional entiende que es el anticristo. El Cordero es el que abre el sello, y no puede ser a la vez el jinete que sale; además, los otros tres jinetes son juicios, y el jinete de Apocalipsis 19 viene al final, con otras armas, otras coronas y otro propósito, como muestra la tabla.'
        } },
        'Es el momento que Pablo anunció: «cuando digan: Paz y seguridad, entonces vendrá sobre ellos destrucción repentina» (1 Ts 5:3).',
        { h: 'Segundo sello: el caballo bermejo' },
        '«Y salió otro caballo, bermejo; y al que lo montaba le fue dado poder de quitar de la tierra la paz, y que se matasen unos a otros; y se le dio una gran espada» (Ap 6:4). La paz que prometía el primer jinete dura poco. El color rojo es el de la sangre. Jesús lo anunció en el mismo orden: después de los engañadores, «oiréis de guerras y rumores de guerras… se levantará nación contra nación» (Mt 24:6-7). No es solo una guerra entre naciones: la expresión «que se matasen unos a otros» sugiere también violencia civil y anarquía.'
      ],
      pensar: 'El primer jinete promete paz, pero detrás de él llega la guerra (Ap 6:2-4). ¿Por qué es peligroso buscar la paz en líderes o sistemas humanos en lugar de en Cristo, el Príncipe de paz?'
    },
    {
      id: 'jinetes-3-4', n: 'Los jinetes del caballo negro y del caballo amarillo', ref: 'Apocalipsis 6:5-8; Mateo 24:7-8; 20:2; Lucas 21:11; Ezequiel 14:21', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-jinetes-3-4.webp', alt: 'Sobre una tierra seca y devastada, un jinete en un caballo negro sostiene en alto una balanza, y junto a él avanza un caballo de color verde pálido montado por una figura sombría encapuchada, seguida por una sombra oscura', pie: 'El caballo negro y el caballo amarillo (Ap 6:5-8).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Mateo 24', tabla: {
          titulo: 'Los sellos y el sermón de Jesús en el monte de los Olivos',
          cab: ['Sello', 'Apocalipsis 6', 'Mateo 24 y Lucas 21'],
          filas: [
            ['1.º', 'Un conquistador que engaña', 'Vendrán muchos en mi nombre (Mt 24:5)'],
            ['2.º', 'Se quita la paz: guerra', 'Guerras y rumores de guerras (Mt 24:6-7)'],
            ['3.º', 'Hambre y carestía', 'Habrá hambres (Mt 24:7)'],
            ['4.º', 'Muerte por espada, hambre, peste y fieras', 'Pestes y pestilencias (Mt 24:7; Lc 21:11)'],
            ['5.º', 'Los mártires bajo el altar', 'Os matarán por causa de mi nombre (Mt 24:9)'],
            ['6.º', 'El sol negro, la luna como sangre, las estrellas caen', 'El sol se oscurecerá… las estrellas caerán (Mt 24:29)']
          ],
          nota: 'Jesús llamó a estos males «principio de dolores» (Mt 24:8).'
        } }
      ],
      texto: [
        'Los dos últimos jinetes muestran las consecuencias de la guerra: el hambre y la muerte.',
        { h: 'Tercer sello: el caballo negro' },
        '«Y miré, y he aquí un caballo negro; y el que lo montaba tenía una balanza en la mano. Y oí una voz de en medio de los cuatro seres vivientes, que decía: Dos libras de trigo por un denario, y seis libras de cebada por un denario; pero no dañes el aceite ni el vino» (Ap 6:5-6).',
        'La balanza era el instrumento para pesar el alimento cuando escaseaba y se racionaba. Un denario era el salario de un día de trabajo (Mt 20:2). La ración de trigo que anuncia la voz alcanzaba apenas para alimentar a una persona un día. Es decir, un trabajador gastaría todo su sueldo para comer él solo; con la cebada, un grano más barato, apenas alcanzaría para una familia pequeña. Son precios de hambruna, muchas veces mayores que los normales.',
        'La frase «no dañes el aceite ni el vino» se ha entendido de dos maneras: que el juicio todavía es limitado y no destruye todo, o que los productos de los ricos siguen disponibles mientras los pobres no pueden comprar lo básico. En ambos casos, el hambre llega como consecuencia de la guerra, y Jesús la anunció: «habrá… hambres» (Mt 24:7).',
        { h: 'Cuarto sello: el caballo amarillo' },
        '«Miré, y he aquí un caballo amarillo, y el que lo montaba tenía por nombre Muerte, y el Hades le seguía; y le fue dada potestad sobre la cuarta parte de la tierra, para matar con espada, con hambre, con mortandad, y con las fieras de la tierra» (Ap 6:8).',
        'La palabra griega para el color del caballo es chlorós, un verde amarillento, pálido, el color de un cadáver. Es el único jinete que tiene nombre: Muerte. Detrás de él viene el Hades, la morada de los muertos, como quien recoge lo que la muerte deja. Las cuatro formas de muerte, espada, hambre, peste y fieras, son los «cuatro juicios terribles» que Dios anunció por medio de Ezequiel (Ez 14:21).',
        'Muere la cuarta parte de la humanidad. Con la población actual, serían unos dos mil millones de personas. Y es solo el comienzo de los juicios.',
        { h: 'Principio de dolores' },
        'La tabla muestra que los sellos siguen el mismo orden del sermón de Jesús en el monte de los Olivos. Jesús llamó a estos males «principio de dolores» (Mt 24:8): como los dolores de parto, vendrán cada vez más fuertes hasta su venida.'
      ],
      pensar: 'Los cuatro jinetes muestran lo que ocurre en un mundo que rechaza a Dios: engaño, guerra, hambre y muerte (Ap 6:1-8). ¿Qué te mueve a hacer hoy saber que la gracia de Dios todavía ofrece salvación antes de esos días?'
    },
    {
      id: 'sellos-5-7', n: 'Los sellos quinto, sexto y séptimo', ref: 'Apocalipsis 6:9-17; 8:1-5; Joel 2:30-31; Mateo 24:29', fecha: 2026,
      visual: [
        E('juicios-apocalipsis', 'El séptimo sello abre las siete trompetas.', 'Esquema de los siete sellos, las siete trompetas y las siete copas ubicados sobre los siete años de la tribulación'),
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y decían a los montes y a las peñas: Caed sobre nosotros, y escondednos del rostro de aquel que está sentado sobre el trono, y de la ira del Cordero; porque el gran día de su ira ha llegado; ¿y quién podrá sostenerse en pie?', ref: 'Apocalipsis 6:16-17' }
      ],
      texto: [
        'Los tres últimos sellos ya no tienen jinetes. Muestran a los que mueren por su fe, la reacción del cosmos y un silencio que prepara juicios mayores.',
        { h: 'Quinto sello: los mártires' },
        '«Cuando abrió el quinto sello, vi bajo el altar las almas de los que habían sido muertos por causa de la palabra de Dios y por el testimonio que tenían» (Ap 6:9). No son creyentes de la iglesia, que ya fue arrebatada, sino personas que creerán durante la tribulación y morirán por su fe. Claman: «¿Hasta cuándo, Señor, santo y verdadero, no juzgas y vengas nuestra sangre en los que moran en la tierra?» (Ap 6:10).',
        'Reciben vestiduras blancas y se les dice que descansen un poco de tiempo, «hasta que se completara el número de sus consiervos y sus hermanos, que también habían de ser muertos como ellos» (Ap 6:11). La tribulación será también un tiempo de martirio. Jesús lo anunció: «os matarán, y seréis aborrecidos de todas las gentes por causa de mi nombre» (Mt 24:9).',
        { h: 'Sexto sello: el cosmos sacudido' },
        'Al abrirse el sexto sello hay un gran terremoto; el sol se pone negro como tela de cilicio, la luna se vuelve como sangre, las estrellas caen sobre la tierra como higos que caen de la higuera sacudida por el viento, el cielo se enrolla como un pergamino, y todo monte y toda isla se remueven de su lugar (Ap 6:12-14). Es lo que Joel anunció: «El sol se convertirá en tinieblas, y la luna en sangre, antes que venga el día grande y espantoso de Jehová» (Jl 2:31).',
        'La reacción de la humanidad es reveladora. Reyes, grandes, ricos, capitanes, esclavos y libres se esconden en las cuevas y dicen a los montes: «Caed sobre nosotros, y escondednos del rostro de aquel que está sentado sobre el trono, y de la ira del Cordero» (Ap 6:16). Reconocen que estos juicios vienen de Dios, pero no se arrepienten: prefieren esconderse.',
        { h: 'Séptimo sello: silencio' },
        'Entre el sexto y el séptimo sello hay un paréntesis, el capítulo 7, que se estudia en la estación siguiente. Luego, «cuando abrió el séptimo sello, se hizo silencio en el cielo como por media hora» (Ap 8:1). El cielo, que estaba lleno de alabanza, calla ante la gravedad de lo que viene. Un ángel ofrece incienso con las oraciones de los santos, llena el incensario con fuego del altar y lo arroja a la tierra (Ap 8:3-5). Las oraciones de los mártires que preguntaban «¿hasta cuándo?» reciben respuesta.',
        'El séptimo sello no es un juicio aislado: contiene las siete trompetas.'
      ],
      pensar: 'En el sexto sello, los hombres reconocen la ira del Cordero, pero en lugar de arrepentirse buscan esconderse (Ap 6:16). ¿Qué diferencia hay entre el temor que lleva a esconderse de Dios y el que lleva a buscarlo?'
    },
    {
      id: 'sellados-multitud', n: 'Los 144.000 y la gran multitud', ref: 'Apocalipsis 7:1-17; 14:1-5; Mateo 24:13-14', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-gran-multitud.webp', alt: 'Ante un trono resplandeciente, una multitud incontable de personas de todas las naciones y razas, vestidas de ropas blancas y con palmas en las manos, alaba con los rostros levantados', pie: '«Una gran multitud, la cual nadie podía contar» (Ap 7:9).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Las tribus', tabla: {
          titulo: 'Las doce tribus de Apocalipsis 7:5-8',
          cab: ['Tribu', 'Sellados'],
          filas: [
            ['Judá, Rubén, Gad, Aser', '12.000 cada una'],
            ['Neftalí, Manasés, Simeón, Leví', '12.000 cada una'],
            ['Isacar, Zabulón, José, Benjamín', '12.000 cada una'],
            ['Total', '144.000']
          ],
          nota: 'Dan y Efraín no aparecen; Leví y José sí. La Biblia no explica por qué.'
        } }
      ],
      texto: [
        'Entre el sexto y el séptimo sello, Apocalipsis 7 hace una pausa para mostrar que, en medio del juicio, Dios protege y salva. Presenta dos grupos distintos.',
        { h: 'Los 144.000 sellados' },
        'Cuatro ángeles detienen los vientos de la tierra hasta que otro ángel sella en sus frentes a los siervos de Dios. «Y oí el número de los sellados: ciento cuarenta y cuatro mil sellados de todas las tribus de los hijos de Israel» (Ap 7:4). El texto enumera las tribus una por una, doce mil de cada una.',
        'La interpretación premilenial entiende que son exactamente lo que el texto dice: israelitas, de las doce tribus, sellados al comienzo de la tribulación. No son la iglesia, que ya fue arrebatada, ni un número simbólico de todos los salvos. El sello los protege de ciertos juicios: las langostas de la quinta trompeta solo pueden dañar «a los hombres que no tuviesen el sello de Dios en sus frentes» (Ap 9:4).',
        'En Apocalipsis 14, Juan los ve de nuevo, de pie con el Cordero sobre el monte de Sion. Tienen el nombre del Padre en la frente, siguen al Cordero por dondequiera que va y son «primicias para Dios y para el Cordero» (Ap 14:4). Muchos entienden que serán evangelistas judíos durante la tribulación, que anunciarán el evangelio del reino en todo el mundo antes del fin (Mt 24:14).',
        { h: 'La gran multitud' },
        '«Después de esto miré, y he aquí una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas, que estaban delante del trono y en la presencia del Cordero, vestidos de ropas blancas, y con palmas en las manos» (Ap 7:9).',
        'Uno de los ancianos explica quiénes son: «Estos son los que han salido de la gran tribulación, y han lavado sus ropas, y las han emblanquecido en la sangre del Cordero» (Ap 7:14). Son personas de todas las naciones que creerán en Cristo durante la tribulación, muchas de ellas por medio del testimonio de los 144.000, y que morirán por su fe o saldrán de ella hacia la presencia de Dios. Ya no tendrán hambre ni sed, «y Dios enjugará toda lágrima de los ojos de ellos» (Ap 7:17).',
        'Este capítulo muestra la misericordia de Dios. Aun en el tiempo de su ira, una multitud incontable será salva. Pero lo será a un precio altísimo. Hoy, en la era de la gracia, la salvación se ofrece sin pasar por esos días.'
      ],
      pensar: 'Aun en la tribulación, una multitud incontable será salva por la sangre del Cordero (Ap 7:14). ¿Qué te dice esto sobre el deseo de Dios de salvar, y sobre la urgencia de creer hoy?'
    },
    {
      id: 'trompetas-1-4', n: 'Las trompetas primera a cuarta', ref: 'Apocalipsis 8:2-13; Éxodo 9:23-25; 7:20; 10:21-23', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-trompetas.webp', alt: 'Siete ángeles de pie ante el trono de Dios en el cielo, cada uno con una larga trompeta, mientras abajo, en la tierra, cae granizo y fuego y una gran montaña ardiente se precipita en el mar', pie: '«Y se les dieron siete trompetas» (Ap 8:2).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Trompetas', tabla: {
          titulo: 'Las primeras cuatro trompetas',
          cab: ['Trompeta', 'Juicio', 'Alcance', 'Recuerda a'],
          filas: [
            ['1.ª (Ap 8:7)', 'Granizo y fuego mezclados con sangre', 'Un tercio de los árboles y toda la hierba verde', 'La séptima plaga de Egipto (Éx 9:23-25)'],
            ['2.ª (Ap 8:8-9)', 'Algo como una gran montaña ardiendo cae al mar', 'Un tercio del mar en sangre, de la vida marina y de las naves', 'La primera plaga (Éx 7:20)'],
            ['3.ª (Ap 8:10-11)', 'Una gran estrella, Ajenjo, cae sobre ríos y fuentes', 'Un tercio de las aguas amargas; muchos mueren', 'Las aguas amargas de Mara (Éx 15:23)'],
            ['4.ª (Ap 8:12)', 'Se oscurece un tercio del sol, la luna y las estrellas', 'Un tercio del día y de la noche sin luz', 'La novena plaga (Éx 10:21-23)']
          ]
        } }
      ],
      texto: [
        'El séptimo sello da paso a siete ángeles con siete trompetas. En la Biblia, las trompetas anunciaban la guerra, convocaban al pueblo y proclamaban el juicio, como en Jericó. Aquí anuncian una nueva serie de juicios, más severos que los sellos.',
        { h: 'Un tercio' },
        'Los cuatro primeros sellos afectaban a la cuarta parte de la tierra; las trompetas afectan a un tercio. La expresión «la tercera parte» se repite doce veces en Apocalipsis 8 y 9. Son juicios parciales: todavía no destruyen todo, porque todavía hay tiempo para el arrepentimiento. Las copas, al final, ya no tendrán límite.',
        { h: 'Juicios sobre la naturaleza' },
        'Las cuatro primeras trompetas golpean la naturaleza de la que depende la vida humana.',
        'Con la primera trompeta, cae sobre la tierra granizo y fuego mezclados con sangre, y se quema la tercera parte de los árboles y toda la hierba verde (Ap 8:7). Con la segunda, «como una gran montaña ardiendo en fuego fue precipitada en el mar», y la tercera parte del mar se convierte en sangre, muere la tercera parte de los seres del mar y se destruye la tercera parte de las naves (Ap 8:8-9). Juan no dice que sea una montaña, sino algo «como» una montaña; muchos piensan en un meteorito o una erupción volcánica, pero el texto no lo precisa.',
        'Con la tercera, cae del cielo una gran estrella ardiendo como una antorcha sobre la tercera parte de los ríos y las fuentes. «Y el nombre de la estrella es Ajenjo» (Ap 8:11), una planta muy amarga, y muchos mueren por las aguas envenenadas. Con la cuarta, se oscurece la tercera parte del sol, de la luna y de las estrellas.',
        { h: 'Como en Egipto' },
        'Estos juicios recuerdan las plagas de Egipto, como muestra la tabla. Así como Dios juzgó a Faraón y a sus dioses para liberar a Israel, juzgará al mundo rebelde en la tribulación para liberar a su pueblo y establecer su reino. La interpretación premilenial entiende estos juicios de manera literal: Dios, que hizo caer granizo y fuego sobre Egipto, puede hacerlo otra vez.',
        { h: 'Ay, ay, ay' },
        'Antes de las tres últimas trompetas, Juan oye a un ángel que vuela en medio del cielo y dice a gran voz: «¡Ay, ay, ay, de los que moran en la tierra, a causa de los otros toques de trompeta que están para sonar los tres ángeles!» (Ap 8:13). Lo que sigue será peor.'
      ],
      pensar: 'Los juicios de las trompetas afectan solo a un tercio de la tierra, porque Dios todavía da tiempo para el arrepentimiento (Ap 8:7-12). ¿Cómo ves la paciencia de Dios con el mundo de hoy, y con tu propia vida?'
    },
    {
      id: 'trompetas-5-7', n: 'Las trompetas quinta a séptima: los tres ayes', ref: 'Apocalipsis 9:1-21; 10:1-11; 11:15-19; Joel 2:1-11', fecha: 2026,
      visual: [
        E('juicios-apocalipsis', 'La séptima trompeta contiene las siete copas.', 'Esquema de los siete sellos, las siete trompetas y las siete copas ubicados sobre los siete años de la tribulación'),
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y los otros hombres que no fueron muertos con estas plagas, ni aun así se arrepintieron de las obras de sus manos, ni dejaron de adorar a los demonios, y a las imágenes de oro, de plata, de bronce, de piedra y de madera, las cuales no pueden ver, ni oír, ni andar; y no se arrepintieron de sus homicidios, ni de sus hechicerías, ni de su fornicación, ni de sus hurtos.', ref: 'Apocalipsis 9:20-21' }
      ],
      texto: [
        'Las tres últimas trompetas se llaman los tres ayes. Ya no golpean solo la naturaleza, sino directamente a los seres humanos, y en ellas intervienen fuerzas demoníacas.',
        { h: 'Quinta trompeta: el abismo se abre (primer ay)' },
        'Una estrella cae del cielo a la tierra, y se le da la llave del pozo del abismo. Como en el resto de Apocalipsis, la estrella es un ser personal, un ángel. Al abrir el abismo, sube humo como de un gran horno y oscurece el sol, y del humo salen langostas con poder como de escorpiones (Ap 9:1-3).',
        'No son langostas comunes: no dañan la hierba, sino solo a los hombres que no tienen el sello de Dios, y no los matan, sino que los atormentan durante cinco meses. «Y en aquellos días los hombres buscarán la muerte, pero no la hallarán» (Ap 9:6). Su aspecto es aterrador: como caballos preparados para la guerra, con coronas de oro, caras humanas, cabello de mujer, dientes de león, corazas de hierro y colas de escorpión. Tienen por rey «al ángel del abismo, cuyo nombre en hebreo es Abadón, y en griego, Apolión» (Ap 9:11): ambos nombres significan destructor. La interpretación premilenial entiende que son demonios liberados del abismo.',
        { h: 'Sexta trompeta: el Éufrates (segundo ay)' },
        'Una voz manda desatar a cuatro ángeles atados junto al gran río Éufrates, preparados «para la hora, día, mes y año» (Ap 9:15), para matar a la tercera parte de los hombres. Juan oye el número de un ejército de jinetes: doscientos millones. Los caballos tienen cabezas como de leones, y de sus bocas salen fuego, humo y azufre. Sumada al cuarto sello, que mató a la cuarta parte, esta trompeta deja muerta a la mitad de la humanidad que había al comienzo de la tribulación.',
        'Y sin embargo, los sobrevivientes «ni aun así se arrepintieron» de sus idolatrías, homicidios, hechicerías, fornicación y hurtos (Ap 9:20-21).',
        { h: 'El librito y la séptima trompeta (tercer ay)' },
        'Antes de la séptima trompeta hay otro paréntesis. Un ángel fuerte, con un librito abierto, anuncia que no habrá más demora, «sino que en los días de la voz del séptimo ángel, cuando él comience a tocar la trompeta, el misterio de Dios se consumará» (Ap 10:7). Juan come el librito: dulce en la boca y amargo en el vientre, como la palabra profética que anuncia la victoria de Dios y el juicio.',
        'Cuando suena la séptima trompeta, hay grandes voces en el cielo: «Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo; y él reinará por los siglos de los siglos» (Ap 11:15). La séptima trompeta anuncia el reino, y contiene las siete copas que lo preparan.'
      ],
      pensar: 'Después de juicios terribles, los hombres «ni aun así se arrepintieron» (Ap 9:20). ¿Qué te enseña esto sobre el endurecimiento del corazón que rechaza a Dios una y otra vez?'
    },
    {
      id: 'dos-testigos', n: 'Los dos testigos', ref: 'Apocalipsis 11:1-14; Zacarías 4:1-14; Malaquías 4:5-6; 1 Reyes 17:1; Éxodo 7:20', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-dos-testigos.webp', alt: 'En una plaza de la Jerusalén moderna, frente a la ciudad antigua, dos profetas ancianos vestidos con túnicas ásperas de cilicio predican con autoridad ante una multitud dividida entre el asombro y la hostilidad', pie: '«Y daré a mis dos testigos que profeticen» (Ap 11:3).', origen: 'ia' }
      ],
      texto: [
        'En el paréntesis entre la sexta y la séptima trompeta, Apocalipsis 11 presenta a dos personajes que Dios enviará a Jerusalén durante la tribulación: sus dos testigos.',
        { h: 'Su ministerio' },
        '«Y daré a mis dos testigos que profeticen por mil doscientos sesenta días, vestidos de cilicio» (Ap 11:3). Son tres años y medio. El cilicio era la ropa áspera del luto y del arrepentimiento: su mensaje es un llamado a volverse a Dios. Se les llama «los dos olivos, y los dos candeleros que están en pie delante del Dios de la tierra» (Ap 11:4), con palabras tomadas de Zacarías 4, donde los dos olivos eran los dos ungidos de su tiempo, Zorobabel y el sumo sacerdote Josué.',
        'Tienen un poder sobrenatural que los protege: si alguno quiere dañarlos, sale fuego de su boca y lo devora. Tienen poder para cerrar el cielo y que no llueva durante su profecía, como Elías (1 R 17:1), y para convertir las aguas en sangre y herir la tierra con plagas, como Moisés (Éx 7:20).',
        { posturas: {
          titulo: '¿Quiénes son los dos testigos?',
          a: { n: 'Moisés y Elías', t: 'Sus milagros son los de Moisés y Elías; ambos aparecieron con Jesús en el monte de la transfiguración (Mt 17:3); y Malaquías anuncia que Dios enviará al profeta Elías antes del día de Jehová (Mal 4:5). Es la identificación más común entre los premileniales.' },
          b: { n: 'Enoc y Elías, u otros', t: 'Otros proponen a Enoc y Elías, los dos hombres que no murieron (Gn 5:24; 2 R 2:11), porque «está establecido para los hombres que mueran una sola vez» (He 9:27). Otros piensan en dos profetas futuros que vendrán con el espíritu y el poder de Moisés y de Elías.' },
          c: 'El texto no da sus nombres. Lo seguro es que Dios dará un testimonio poderoso en Jerusalén en medio de la tribulación, con señales semejantes a las de Moisés y Elías. La mayoría de los premileniales ubica su ministerio en la primera mitad de la semana.'
        } },
        { h: 'Su muerte y su resurrección' },
        'Cuando terminen su testimonio, la bestia que sube del abismo les hará guerra y los matará. Sus cadáveres quedarán tres días y medio en la plaza de la gran ciudad, «donde también nuestro Señor fue crucificado» (Ap 11:8), y gente de todos los pueblos, tribus, lenguas y naciones los verá. Los moradores de la tierra celebrarán y se enviarán regalos.',
        'Pero después de tres días y medio, el espíritu de vida enviado por Dios entra en ellos, se levantan, y oyen una voz del cielo: «Subid acá». Suben al cielo en una nube, a la vista de sus enemigos. En aquella hora un gran terremoto derrumba la décima parte de la ciudad y mueren siete mil personas, «y los demás se aterrorizaron, y dieron gloria al Dios del cielo» (Ap 11:13).'
      ],
      pensar: 'Los dos testigos fueron fieles hasta terminar su testimonio, y Dios los levantó (Ap 11:7-12). ¿Qué te enseña su ejemplo sobre la fidelidad a la misión que Dios te ha dado, aunque cueste?'
    },
    {
      id: 'copas', n: 'Las siete copas de la ira', ref: 'Apocalipsis 15–16; Éxodo 7–10', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Las copas', tabla: {
          titulo: 'Las siete copas de la ira de Dios',
          cab: ['Copa', 'Sobre', 'Juicio', 'Recuerda a'],
          filas: [
            ['1.ª (Ap 16:2)', 'La tierra', 'Úlcera maligna sobre los que tienen la marca de la bestia', 'La sexta plaga (Éx 9:10)'],
            ['2.ª (Ap 16:3)', 'El mar', 'Se convierte en sangre como de muerto; muere todo ser vivo del mar', 'La primera plaga (Éx 7:20)'],
            ['3.ª (Ap 16:4-7)', 'Ríos y fuentes', 'Se convierten en sangre', 'La primera plaga'],
            ['4.ª (Ap 16:8-9)', 'El sol', 'Quema a los hombres con gran calor', '—'],
            ['5.ª (Ap 16:10-11)', 'El trono de la bestia', 'Su reino se cubre de tinieblas', 'La novena plaga (Éx 10:22)'],
            ['6.ª (Ap 16:12-16)', 'El Éufrates', 'Se seca; espíritus de demonios reúnen a los reyes en Armagedón', 'El mar Rojo abierto, al revés'],
            ['7.ª (Ap 16:17-21)', 'El aire', '«Hecho está»: el mayor terremoto de la historia y granizo de un talento', 'La séptima plaga (Éx 9:23-24)']
          ],
          nota: 'Un talento pesaba unos 30 a 40 kilos.'
        } },
        E('juicios-apocalipsis', 'Las copas, al final de la gran tribulación.', 'Esquema de los siete sellos, las siete trompetas y las siete copas ubicados sobre los siete años de la tribulación')
      ],
      texto: [
        'Las siete copas son la última serie de juicios, contenida en la séptima trompeta. Juan las llama «las siete plagas postreras; porque en ellas se consumaba la ira de Dios» (Ap 15:1). La interpretación premilenial las ubica al final de la gran tribulación, en rápida sucesión, inmediatamente antes de la segunda venida.',
        { h: 'Sin límite' },
        'Antes, los juicios afectaban a una cuarta parte o a un tercio. Las copas ya no tienen límite. En la segunda copa no muere un tercio de los seres del mar, sino «todo ser vivo que había en el mar» (Ap 16:3). Se acabó el tiempo de los juicios parciales que llamaban al arrepentimiento.',
        { h: 'Las primeras cinco' },
        'La primera copa trae úlceras malignas sobre los que tienen la marca de la bestia y adoran su imagen. La segunda y la tercera convierten en sangre el mar, los ríos y las fuentes. El ángel de las aguas declara que es justo: «Por cuanto derramaron la sangre de los santos y de los profetas, también tú les has dado a beber sangre; pues lo merecen» (Ap 16:6). La cuarta da al sol poder para quemar a los hombres con fuego. La quinta cae sobre el trono de la bestia, y su reino se cubre de tinieblas; los hombres muerden de dolor sus lenguas.',
        'Tres veces dice el texto que los hombres, en vez de arrepentirse, blasfemaron el nombre de Dios (Ap 16:9, 11, 21).',
        { h: 'La sexta: camino a Armagedón' },
        'La sexta copa seca el río Éufrates para preparar el camino a los reyes del oriente, y tres espíritus inmundos a manera de ranas salen de la boca del dragón, de la bestia y del falso profeta para reunir a los reyes de la tierra en Armagedón (Ap 16:12-16). En medio de esta escena, Jesús interrumpe con una advertencia: «He aquí, yo vengo como ladrón. Bienaventurado el que vela» (Ap 16:15).',
        { h: 'La séptima: «Hecho está»' },
        'La séptima copa se derrama sobre el aire, y sale una gran voz del templo, desde el trono: «Hecho está» (Ap 16:17). Hay el mayor terremoto desde que hay hombres sobre la tierra; la gran ciudad se divide en tres partes, las ciudades de las naciones caen, las islas huyen y los montes desaparecen, y cae del cielo un enorme granizo de casi un talento cada uno. Babilonia la grande recibe el cáliz del vino del ardor de la ira de Dios.',
        'Inmediatamente después, en Apocalipsis 19, el cielo se abre y Cristo viene. La ira de Dios se ha consumado, y comienza el reino.'
      ],
      pensar: 'En la cruz, Jesús dijo «Consumado es» (Jn 19:30), y al final de los juicios se oye «Hecho está» (Ap 16:17). ¿Qué significa para ti que Cristo cargó en la cruz la ira que merecías?'
    },
    {
      id: 'anticristo', n: 'El anticristo y el falso profeta', ref: 'Daniel 7:8, 24-25; 9:27; 11:36-37; 2 Tesalonicenses 2:3-12; Apocalipsis 13; 1 Juan 2:18', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Nombres', tabla: {
          titulo: 'El anticristo en la Biblia',
          cab: ['Nombre', 'Pasaje'],
          filas: [
            ['El cuerno pequeño', 'Dn 7:8, 24-25'],
            ['El príncipe que ha de venir', 'Dn 9:26-27'],
            ['El rey que hará su voluntad', 'Dn 11:36-39'],
            ['El hombre de pecado, el hijo de perdición', '2 Ts 2:3'],
            ['El inicuo', '2 Ts 2:8'],
            ['La bestia que sube del mar', 'Ap 13:1-10'],
            ['El anticristo', '1 Jn 2:18']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y hacía que a todos, pequeños y grandes, ricos y pobres, libres y esclavos, se les pusiese una marca en la mano derecha, o en la frente; y que ninguno pudiese comprar ni vender, sino el que tuviese la marca o el nombre de la bestia, o el número de su nombre.', ref: 'Apocalipsis 13:16-17' }
      ],
      texto: [
        'La figura central de la tribulación es un líder mundial que la Biblia llama con muchos nombres: el cuerno pequeño, el príncipe que ha de venir, el hombre de pecado, la bestia. Juan usa el nombre que se ha hecho más conocido: el anticristo, que significa tanto contra Cristo como en lugar de Cristo (1 Jn 2:18).',
        { h: 'Su carácter' },
        'Daniel lo vio como un cuerno pequeño con ojos de hombre y una boca que hablaba grandes cosas (Dn 7:8). Hablará palabras contra el Altísimo, perseguirá a los santos y pensará en cambiar los tiempos y la ley (Dn 7:25). Pablo lo describe como el que «se opone y se levanta contra todo lo que se llama Dios o es objeto de culto; tanto que se sienta en el templo de Dios como Dios, haciéndose pasar por Dios» (2 Ts 2:4). Su venida será «por obra de Satanás, con gran poder y señales y prodigios mentirosos» (2 Ts 2:9).',
        { h: 'Su obra' },
        'Confirmará un pacto con Israel por siete años, y a la mitad lo romperá (Dn 9:27). Se le dará autoridad sobre toda tribu, pueblo, lengua y nación, y lo adorarán todos los moradores de la tierra cuyos nombres no están escritos en el libro de la vida (Ap 13:7-8).',
        { h: 'El falso profeta' },
        'Junto a él aparece otra bestia, que sube de la tierra, a la que Apocalipsis llama el falso profeta (Ap 13:11-17; 19:20). Hace grandes señales, engaña a los moradores de la tierra y los hace adorar a la primera bestia y a su imagen. Además, impone una marca en la mano derecha o en la frente, sin la cual nadie puede comprar ni vender. El número de la bestia es seiscientos sesenta y seis (Ap 13:18).',
        'A lo largo de la historia se ha intentado muchas veces identificar al anticristo con personajes concretos, y siempre se ha fallado. La Biblia no pide adivinar su identidad. Juan advirtió que ya en su tiempo había muchos anticristos (1 Jn 2:18): el espíritu del anticristo, que niega que Jesús es el Cristo, ya está en el mundo.',
        { h: 'Su fin' },
        'El reinado del anticristo será breve. El Señor Jesús lo matará «con el espíritu de su boca» y lo destruirá «con el resplandor de su venida» (2 Ts 2:8). La bestia y el falso profeta serán lanzados vivos dentro del lago de fuego (Ap 19:20).'
      ],
      pensar: 'Juan dijo que ya en su tiempo había «muchos anticristos» (1 Jn 2:18), y que el espíritu del anticristo niega que Jesús es el Cristo. ¿Cómo puedes discernir y resistir hoy las ideas que niegan a Cristo?'
    },
    {
      id: 'israel-tribulacion', n: 'Israel en la tribulación', ref: 'Jeremías 30:7; Zacarías 12:10; 13:8-9; Mateo 24:15-21; Apocalipsis 7:1-8; 11:1-2; 12:6, 13-17; Romanos 11:25-27', fecha: 2026,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ISRAEL, capas: [], lugares: ['jerusalen', 'bosra', 'petra', 'meguido', 'r-edom'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-templo-herodes.webp', alt: 'El templo de Herodes en Jerusalén, con su atrio y sus pórticos', pie: 'El templo: la abominación será puesta en el lugar santo (Mt 24:15).', origen: 'ia' }
      ],
      texto: [
        'La tribulación tiene un propósito especial para Israel. Jeremías la llama «tiempo de angustia para Jacob», y añade: «pero de ella será librado» (Jer 30:7). Por medio de la angustia, Dios llevará a su pueblo a reconocer a su Mesías.',
        { h: 'El templo y la abominación' },
        'La profecía supone que en la tribulación habrá en Jerusalén un templo con sacrificios, porque a la mitad de la semana el príncipe hará cesar el sacrificio y la ofrenda (Dn 9:27), y el hombre de pecado se sentará en el templo de Dios (2 Ts 2:4). A Juan se le manda medir el templo de Dios y el altar (Ap 11:1). Por eso la interpretación premilenial espera la reconstrucción de un templo en Jerusalén antes o durante la tribulación. Cuando se ponga allí la abominación desoladora, Jesús advirtió: «entonces los que estén en Judea, huyan a los montes» (Mt 24:16).',
        { h: 'Persecución y refugio' },
        'Apocalipsis 12 presenta a una mujer, que representa a Israel, perseguida por el dragón. Ella huye al desierto, a un lugar preparado por Dios, donde es sustentada mil doscientos sesenta días (Ap 12:6, 14). Algunos ubican ese refugio en la región de Edom, en Bosra o Petra, apoyándose en textos como Isaías 63:1, pero la Biblia no lo dice con certeza. Zacarías anuncia que dos terceras partes del pueblo perecerán, y que la tercera parte será refinada como la plata y el oro: «El invocará mi nombre, y yo le oiré, y diré: Pueblo mío; y él dirá: Jehová es mi Dios» (Zac 13:9).',
        { h: 'Los 144.000 y los dos testigos' },
        'Dios sellará a ciento cuarenta y cuatro mil siervos, doce mil de cada tribu de Israel (Ap 7:4-8), y enviará a Jerusalén dos testigos que profetizarán con poder durante 1.260 días (Ap 11:3). Israel no estará solo.',
        { h: 'Mirarán al que traspasaron' },
        'Al final de la tribulación, cuando las naciones se reúnan contra Jerusalén, Dios derramará sobre la casa de David y sobre los moradores de Jerusalén «espíritu de gracia y de oración; y mirarán a mí, a quien traspasaron, y llorarán como se llora por hijo unigénito» (Zac 12:10). Israel reconocerá en Jesús a su Mesías. Así se cumplirá lo que anunció Pablo: «y luego todo Israel será salvo» (Ro 11:26).'
      ],
      pensar: 'Dios usará la angustia para que Israel lo invoque y diga: «Jehová es mi Dios» (Zac 13:9). ¿Cómo ha usado Dios los tiempos difíciles en tu vida para acercarte más a él?'
    },
    {
      id: 'armagedon', n: 'Armagedón', ref: 'Apocalipsis 16:12-16; 19:17-21; Joel 3:2, 9-16; Zacarías 12:2-9; 14:1-3', fecha: 2026,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Los reyes del oriente: el Éufrates se seca (Ap 16:12).', fecha: 2026,
            estado: { view: MEDIO_ORIENTE, capas: [], lugares: ['babilonia', 'jerusalen', 'meguido'] } },
          { t: 'Las naciones se reúnen en el lugar llamado Armagedón, junto a Meguido (Ap 16:16).', fecha: 2026,
            estado: { view: ISRAEL, capas: [], lugares: ['meguido', 'jerusalen', 'samaria'] } },
          { t: 'La batalla se extiende hasta Jerusalén (Zac 14:2) y Edom (Is 63:1).', fecha: 2026,
            estado: { view: ISRAEL, capas: [], lugares: ['meguido', 'jerusalen', 'bosra'] } }
        ] }
      ],
      texto: [
        'Al final de la tribulación, las naciones del mundo se reunirán contra Israel en un último ataque. La Biblia llama al lugar de esa reunión Armagedón.',
        { h: 'El lugar' },
        '«Y los reunió en el lugar que en hebreo se llama Armagedón» (Ap 16:16). El nombre significa probablemente «monte de Meguido». Meguido era una ciudad fortificada que dominaba el valle de Jezreel, también llamado llanura de Esdraelón, en el norte de Israel. Por ese valle pasaban los ejércitos que cruzaban entre Egipto y Mesopotamia, y allí se libraron muchas batallas: Débora y Barac vencieron a Sísara junto a las aguas de Meguido (Jue 5:19), y allí murió el rey Josías (2 R 23:29).',
        'El valle será el lugar de reunión, pero la campaña abarcará más. Joel habla del valle de Josafat, cerca de Jerusalén, donde Dios entrará en juicio con las naciones (Jl 3:2, 12). Zacarías dice que todas las naciones se reunirán en batalla contra Jerusalén (Zac 14:2). Isaías describe al Señor viniendo de Edom, de Bosra, con vestidos rojos (Is 63:1).',
        { h: 'Por qué se reúnen' },
        'Apocalipsis revela lo que está detrás. Cuando el sexto ángel derrama su copa, el río Éufrates se seca «para que estuviese preparado el camino a los reyes del oriente» (Ap 16:12), y tres espíritus de demonios salen de la boca del dragón, de la bestia y del falso profeta para reunir a los reyes de toda la tierra «a la batalla de aquel gran día del Dios Todopoderoso» (Ap 16:14). Las naciones creen que vienen a destruir a Israel, pero en realidad Dios las reúne para juzgarlas.',
        { h: 'El final de la batalla' },
        'No será una batalla larga ni de resultado incierto. Cuando parezca que Jerusalén está perdida, «saldrá Jehová y peleará con aquellas naciones» (Zac 14:3). Cristo vendrá del cielo, y la bestia, los reyes de la tierra y sus ejércitos serán vencidos por la espada que sale de su boca, es decir, por su palabra (Ap 19:19-21).',
        'Armagedón muestra el final de la rebelión humana contra Dios: las naciones unidas contra el Señor y contra su Ungido (Sal 2:2), y el Señor que se ríe de ellos y establece a su Rey sobre Sion.'
      ],
      pensar: 'En Armagedón, las naciones creen que van contra Israel, pero Dios las reúne para juzgarlas (Ap 16:14-16). ¿Qué te enseña esto sobre quién gobierna realmente la historia?'
    },
    {
      id: 'segunda-venida', n: 'La segunda venida de Cristo', ref: 'Apocalipsis 19:11-21; Zacarías 14:3-5; Mateo 24:29-31; Hechos 1:11; Daniel 7:13-14', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-segunda-venida.webp', alt: 'El cielo abierto y Cristo glorioso montado en un caballo blanco, con muchas coronas y un manto teñido en sangre, seguido por los ejércitos celestiales vestidos de lino blanco sobre caballos blancos, descendiendo sobre el monte de los Olivos frente a Jerusalén', pie: '«Vi el cielo abierto; y he aquí un caballo blanco» (Ap 19:11).', origen: 'ia' },
        E('esquema-venida', 'La segunda venida, al final de la tribulación.', ESQ)
      ],
      texto: [
        'La segunda venida de Cristo es el evento hacia el que apunta toda la profecía. A diferencia del arrebatamiento, en el que Cristo viene por los suyos en el aire, en la segunda venida vuelve visiblemente a la tierra, con sus santos, para juzgar y reinar.',
        { h: 'Visible y gloriosa' },
        'Jesús la describió: «Entonces aparecerá la señal del Hijo del Hombre en el cielo; y entonces lamentarán todas las tribus de la tierra, y verán al Hijo del Hombre viniendo sobre las nubes del cielo, con poder y gran gloria» (Mt 24:30). Juan escribió: «He aquí que viene con las nubes, y todo ojo le verá, y los que le traspasaron» (Ap 1:7). No será un evento secreto ni simbólico.',
        { h: 'El Rey de reyes' },
        'En Apocalipsis 19, Juan ve el cielo abierto y a Cristo montado en un caballo blanco. Se llama «Fiel y Verdadero», «EL VERBO DE DIOS», y en su vestidura y en su muslo tiene escrito «REY DE REYES Y SEÑOR DE SEÑORES» (Ap 19:11-16). Lo siguen los ejércitos celestiales, vestidos de lino finísimo, blanco y limpio, como la esposa de las bodas del Cordero: la iglesia vuelve con su Señor (Zac 14:5; Jud 14).',
        { h: 'Sobre el monte de los Olivos' },
        'Zacarías precisa dónde ocurrirá: «se afirmarán sus pies en aquel día sobre el monte de los Olivos, que está en frente de Jerusalén al oriente; y el monte de los Olivos se partirá por en medio» (Zac 14:4). Es el mismo monte desde donde Jesús ascendió, y los ángeles anunciaron que «así vendrá como le habéis visto ir al cielo» (Hch 1:11).',
        { h: 'Lo que hará' },
        'Cristo vencerá a la bestia y al falso profeta, y los lanzará al lago de fuego. Destruirá a los ejércitos de las naciones. Salvará al remanente de Israel, que lo reconocerá como su Mesías. Reunirá a sus escogidos de los cuatro vientos (Mt 24:31). Juzgará a las naciones y establecerá su reino. Se cumplirá lo que Daniel vio: «le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran» (Dn 7:14).',
        'El que vino la primera vez montado en un asno, humilde, para morir por los pecadores, vendrá la segunda vez en un caballo blanco, como Rey, para juzgar y reinar.'
      ],
      pensar: 'Jesús vino la primera vez con humildad, y volverá como Rey de reyes y Señor de señores (Ap 19:16). ¿Qué lugar ocupa hoy Cristo como Rey en tu vida?'
    },
    {
      id: 'juicio-naciones', n: 'El juicio de las naciones y Satanás atado', ref: 'Mateo 25:31-46; Joel 3:1-2; Apocalipsis 20:1-3', fecha: 2026,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cuando el Hijo del Hombre venga en su gloria, y todos los santos ángeles con él, entonces se sentará en su trono de gloria, y serán reunidas delante de él todas las naciones; y apartará los unos de los otros, como aparta el pastor las ovejas de los cabritos.', ref: 'Mateo 25:31-32' }
      ],
      texto: [
        'Después de su venida gloriosa, y antes de que comience el milenio, Cristo realizará dos acciones decisivas: juzgará a las naciones que sobrevivan a la tribulación, y atará a Satanás.',
        { h: 'El juicio de las naciones' },
        'Jesús describió este juicio en Mateo 25. Cuando el Hijo del Hombre venga en su gloria, se sentará en su trono y reunirá delante de él a todas las naciones, y las separará como el pastor separa las ovejas de los cabritos. A los de su derecha les dirá: «Venid, benditos de mi Padre, heredad el reino preparado para vosotros desde la fundación del mundo» (Mt 25:34). A los de su izquierda los enviará al castigo eterno.',
        'La interpretación premilenial entiende que este juicio se refiere a las personas que estén vivas en la tierra al final de la tribulación. Los justos entrarán con sus cuerpos naturales en el reino milenial y poblarán la tierra; los injustos serán quitados. Joel lo anuncia también: Dios reunirá a todas las naciones en el valle de Josafat y entrará en juicio con ellas «a causa de mi pueblo, y de Israel mi heredad» (Jl 3:2).',
        'El criterio del juicio es cómo trataron a los que Jesús llama «mis hermanos más pequeños» (Mt 25:40). Muchos entienden que se refiere a los creyentes y al pueblo judío perseguidos durante la tribulación. Ayudarlos en esos días, arriesgando la vida, mostrará una fe verdadera. No se salvan por sus obras, sino que sus obras revelan su fe.',
        { h: 'Satanás atado' },
        'Juan vio un ángel que descendía del cielo con la llave del abismo y una gran cadena. «Y prendió al dragón, la serpiente antigua, que es el diablo y Satanás, y lo ató por mil años; y lo arrojó al abismo, y lo encerró, y puso su sello sobre él, para que no engañase más a las naciones, hasta que fuesen cumplidos mil años» (Ap 20:2-3).',
        'Durante el milenio, el gran engañador no tendrá acceso a la tierra. Por primera vez desde el Edén, la humanidad vivirá sin la influencia de Satanás, bajo el gobierno directo de Cristo. Aun así, como mostrará el final del milenio, el corazón humano seguirá necesitando la gracia de Dios.'
      ],
      pensar: 'En el juicio de las naciones, Jesús dice que lo que se hizo a uno de sus hermanos más pequeños, a él se le hizo (Mt 25:40). ¿Cómo se ve tu fe en la manera en que tratas a los más necesitados?'
    },
    {
      id: 'milenio', n: 'El milenio', ref: 'Apocalipsis 20:4-6; Isaías 2:2-4; 11:1-10; 65:20-25; Zacarías 14:9, 16; Miqueas 4:1-4', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-milenio.webp', alt: 'Un paisaje fértil y en paz junto a Jerusalén reconstruida: un lobo y un cordero descansan juntos, un león come paja junto a un buey, y un niño pequeño los guía, mientras pueblos de todas las naciones suben por los caminos hacia la ciudad', pie: '«Morará el lobo con el cordero» (Is 11:6).', origen: 'ia' },
        E('esquema-milenio', 'El milenio: mil años de reinado de Cristo.', ESQ)
      ],
      texto: [
        'El milenio es el reinado de Cristo sobre la tierra durante mil años, después de su segunda venida. La palabra viene del latín mille anni, «mil años», expresión que aparece seis veces en Apocalipsis 20:1-7.',
        { h: 'Los que reinan con Cristo' },
        'Juan vio tronos, y a los que se sentaron sobre ellos se les dio facultad de juzgar; y vio también las almas de los mártires de la tribulación, que «vivieron y reinaron con Cristo mil años» (Ap 20:4). Esta es la primera resurrección, que incluye a todos los justos: la iglesia, arrebatada antes de la tribulación, los santos del Antiguo Testamento (Dn 12:2) y los mártires de la tribulación. «Bienaventurado y santo el que tiene parte en la primera resurrección… serán sacerdotes de Dios y de Cristo, y reinarán con él mil años» (Ap 20:6).',
        { h: 'Un mundo transformado' },
        'Los profetas describen el reino con imágenes asombrosas. Habrá paz entre las naciones: «volverán sus espadas en rejas de arado, y sus lanzas en hoces; no alzará espada nación contra nación, ni se adiestrarán más para la guerra» (Is 2:4). La creación será renovada: «Morará el lobo con el cordero, y el leopardo con el cabrito se acostará» (Is 11:6). La vida humana se alargará: el que muera de cien años será considerado joven (Is 65:20). Y «la tierra será llena del conocimiento de Jehová, como las aguas cubren el mar» (Is 11:9).',
        { h: 'Jerusalén, capital del mundo' },
        'Cristo reinará desde Jerusalén, en el trono de David, como prometió el ángel a María (Lc 1:32-33). «Y Jehová será rey sobre toda la tierra» (Zac 14:9). Las naciones subirán año tras año a Jerusalén a adorar al Rey (Zac 14:16), y de Sion saldrá la ley (Is 2:3). Israel, restaurado en su tierra y convertido, será cabeza de las naciones, y se cumplirán las promesas hechas a Abraham y a David.',
        { h: 'Por qué un milenio' },
        'El milenio mostrará que Dios cumple todas sus promesas, también las hechas a Israel sobre la tierra y el reino. Mostrará cómo es el mundo bajo el gobierno justo de Cristo. Y mostrará también que, aun en condiciones perfectas y sin Satanás, el corazón humano necesita ser regenerado por la gracia de Dios.'
      ],
      pensar: 'En el milenio, la tierra estará llena del conocimiento de Dios «como las aguas cubren el mar» (Is 11:9). ¿Qué anticipo de ese reino de paz y justicia puede mostrar hoy la iglesia en el mundo?'
    },
    {
      id: 'gran-trono', n: 'La última rebelión y el gran trono blanco', ref: 'Apocalipsis 20:7-15; Juan 5:28-29; Daniel 12:2', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-trono-blanco.webp', alt: 'Un inmenso trono blanco y resplandeciente en el espacio, del que huyen la tierra y el cielo, ante el cual está de pie una multitud incontable de personas, mientras unos libros enormes están abiertos', pie: '«Vi un gran trono blanco» (Ap 20:11).', origen: 'ia' },
        E('esquema-juicio', 'El juicio del gran trono blanco, al final del milenio.', ESQ)
      ],
      texto: [
        'Al final de los mil años, la historia de este mundo llega a su conclusión con dos acontecimientos: una última rebelión y el juicio final.',
        { h: 'Satanás suelto' },
        '«Cuando los mil años se cumplan, Satanás será suelto de su prisión, y saldrá a engañar a las naciones que están en los cuatro ángulos de la tierra, a Gog y a Magog, a fin de reunirlos para la batalla» (Ap 20:7-8). Es sorprendente: después de mil años de paz bajo el reinado perfecto de Cristo, multitudes nacidas durante el milenio seguirán a Satanás. Rodearán el campamento de los santos y la ciudad amada, pero descenderá fuego del cielo y los consumirá. El diablo será lanzado al lago de fuego, donde están la bestia y el falso profeta, para siempre.',
        'Esta rebelión final demuestra que el problema del ser humano no es solo su ambiente ni la influencia de Satanás, sino su propio corazón. Solo el nuevo nacimiento cambia el corazón.',
        { h: 'El gran trono blanco' },
        'Juan vio un gran trono blanco, y al que estaba sentado en él, de delante del cual huyeron la tierra y el cielo. Vio a los muertos, grandes y pequeños, de pie ante Dios. Los libros fueron abiertos, y también el libro de la vida, y los muertos fueron juzgados según sus obras (Ap 20:11-12).',
        'Es la segunda resurrección, la de los que no tuvieron parte en la primera. Jesús había dicho que todos los que están en los sepulcros oirán su voz, «y los que hicieron lo bueno, saldrán a resurrección de vida; mas los que hicieron lo malo, a resurrección de condenación» (Jn 5:29). Entre ambas resurrecciones hay mil años. El juez es Cristo, a quien el Padre dio todo el juicio (Jn 5:22).',
        'No hay creyentes en este juicio, porque los que creyeron resucitaron en la primera resurrección. Los que comparecen son juzgados según sus obras, y las obras no pueden salvar. «Y el que no se halló inscrito en el libro de la vida fue lanzado al lago de fuego» (Ap 20:15). La Biblia lo llama la muerte segunda (Ap 20:14). Es la separación eterna de Dios.',
        'Esta verdad solemne es la razón de la urgencia del evangelio. Hoy es el tiempo en que Dios llama a todos al arrepentimiento, porque ha establecido un día en el cual juzgará al mundo con justicia (Hch 17:30-31).'
      ],
      pensar: 'En el gran trono blanco, lo único que importará es si el nombre de cada persona está escrito en el libro de la vida (Ap 20:15). ¿Está escrito el tuyo? ¿Por quién necesitas orar y a quién necesitas hablarle de Cristo?'
    },
    {
      id: 'cielos-nuevos', n: 'Cielos nuevos y tierra nueva', ref: 'Apocalipsis 21–22; 2 Pedro 3:10-13; Isaías 65:17', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esc-nueva-jerusalen.webp', alt: 'La nueva Jerusalén desciende del cielo, una ciudad resplandeciente como piedra de jaspe, con muros de piedras preciosas, doce puertas de perla y calles de oro transparente como vidrio, sobre una tierra nueva llena de luz', pie: '«Vi la santa ciudad, la nueva Jerusalén, descender del cielo» (Ap 21:2).', origen: 'ia' },
        E('esquema-eternidad', 'El estado eterno.', ESQ)
      ],
      texto: [
        'La Biblia comienza con la creación de los cielos y la tierra, y termina con la creación de cielos nuevos y tierra nueva. Entre ambos extremos está la historia de la redención.',
        { h: 'Todo nuevo' },
        '«Vi un cielo nuevo y una tierra nueva; porque el primer cielo y la primera tierra pasaron, y el mar ya no existía más» (Ap 21:1). Pedro dice que los cielos y la tierra actuales serán deshechos por el fuego, y que «nosotros esperamos, según sus promesas, cielos nuevos y tierra nueva, en los cuales mora la justicia» (2 P 3:13). Isaías ya lo había anunciado (Is 65:17).',
        { h: 'La nueva Jerusalén' },
        'Juan vio «la santa ciudad, la nueva Jerusalén, descender del cielo, de Dios, dispuesta como una esposa ataviada para su marido» (Ap 21:2). La describe con imágenes de gloria: un muro de jaspe, doce puertas de perla con los nombres de las doce tribus de Israel, doce cimientos con los nombres de los doce apóstoles, calles de oro puro como vidrio transparente. No hay templo, «porque el Señor Dios Todopoderoso es el templo de ella, y el Cordero» (Ap 21:22). No necesita sol ni luna, porque la gloria de Dios la ilumina.',
        { h: 'Dios con los hombres' },
        'El centro de la eternidad no es la ciudad, sino Dios. «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios. Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron» (Ap 21:3-4).',
        'Lo que se perdió en el Edén se recupera y se supera. Vuelve el árbol de la vida, junto al río de agua de vida que sale del trono de Dios y del Cordero (Ap 22:1-2). «Y no habrá más maldición» (Ap 22:3). Y lo más grande: «verán su rostro, y su nombre estará en sus frentes» (Ap 22:4).',
        { h: 'Ven, Señor Jesús' },
        'La Biblia termina con una promesa y una oración. Jesús dice: «Ciertamente vengo en breve». Y la iglesia responde: «Amén; sí, ven, Señor Jesús» (Ap 22:20). Esa es la oración que resume toda la escatología bíblica.'
      ],
      pensar: 'La Biblia termina con la oración «Amén; sí, ven, Señor Jesús» (Ap 22:20). ¿Puedes orar hoy esas palabras con todo el corazón? ¿Qué te impide desear su venida?'
    }
  ];

  /* ---------------- Ruta 3 · Temas de la profecía ---------------- */
  const temas = [
    {
      id: 'israel-pactos', n: 'Israel y los pactos de Dios', ref: 'Génesis 12:1-3; 15:18; 2 Samuel 7:12-16; Jeremías 31:31-37; Ezequiel 37:21-28; Romanos 9–11', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Pactos', tabla: {
          titulo: 'Los pactos de Dios con Israel y su cumplimiento',
          cab: ['Pacto', 'Promesas', 'Cumplimiento pleno'],
          filas: [
            ['Abrahámico (Gn 12; 15; 17)', 'Una nación, una tierra, bendición a todas las familias de la tierra', 'Israel en su tierra en el milenio; las naciones bendecidas en Cristo'],
            ['Davídico (2 S 7:12-16)', 'Un descendiente de David en un trono y un reino eternos', 'Cristo reina en el trono de David (Lc 1:32-33)'],
            ['Nuevo pacto (Jer 31:31-34)', 'La ley escrita en el corazón y el perdón de los pecados', 'Comenzó con la sangre de Cristo (Lc 22:20); Israel lo recibirá como nación (Ro 11:26-27)'],
            ['La tierra (Dt 30:1-10; Ez 37)', 'Israel recogido de las naciones y plantado en su tierra para siempre', 'La restauración final de Israel (Am 9:15)']
          ]
        } }
      ],
      texto: [
        'Para entender la profecía bíblica es necesario entender el lugar de Israel en el plan de Dios. Dios hizo promesas a Israel por medio de pactos, y esas promesas determinan en gran parte cómo terminará la historia.',
        { h: 'Los pactos' },
        'Dios hizo un pacto con Abraham: haría de él una gran nación, le daría la tierra de Canaán a su descendencia, y en él serían benditas todas las familias de la tierra (Gn 12:1-3; 15:18). Con David hizo otro pacto: un descendiente suyo reinaría para siempre, y su trono sería estable eternamente (2 S 7:16). Por medio de Jeremías anunció un nuevo pacto con la casa de Israel y la casa de Judá, en el que escribiría su ley en el corazón y perdonaría su pecado (Jer 31:31-34).',
        'Son pactos incondicionales: su cumplimiento depende de la fidelidad de Dios, no de la de Israel. Dios mismo lo dice por medio de Jeremías: si se pudieran medir los cielos y explorar los cimientos de la tierra, entonces él desecharía a toda la descendencia de Israel (Jer 31:37). Es decir, nunca.',
        { h: 'Israel y la iglesia' },
        'La iglesia participa de las bendiciones espirituales de esos pactos por medio de Cristo, la simiente de Abraham (Gá 3:14, 29). Pablo usa la imagen de un olivo: los gentiles son ramas de olivo silvestre injertadas en el olivo natural, y las ramas naturales, Israel, fueron desgajadas por su incredulidad, pero pueden ser injertadas otra vez (Ro 11:17-24). La iglesia no reemplaza a Israel: recibe una bendición que tiene raíces judías.',
        { h: 'No ha desechado Dios a su pueblo' },
        'En Romanos 9 a 11, Pablo enfrenta la pregunta: si Israel rechazó a su Mesías, ¿Dios lo ha desechado? Su respuesta es categórica: «En ninguna manera» (Ro 11:1). El endurecimiento de Israel es parcial, porque siempre hay un remanente de judíos creyentes, y temporal, «hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo» (Ro 11:25-26). «Porque irrevocables son los dones y el llamamiento de Dios» (Ro 11:29).',
        'Por eso la profecía bíblica espera la restauración de Israel: recogido de las naciones, convertido a su Mesías en la segunda venida, y establecido en su tierra en el reino de Cristo (Ez 37:21-28).'
      ],
      pensar: 'Pablo dice que «irrevocables son los dones y el llamamiento de Dios» (Ro 11:29). ¿Cómo te da seguridad saber que Dios cumple siempre sus promesas, aun cuando su pueblo le ha fallado?'
    },
    {
      id: 'resurrecciones', n: 'Las resurrecciones', ref: '1 Corintios 15:20-24, 42-44, 51-57; Juan 5:28-29; Daniel 12:2; Apocalipsis 20:4-6, 11-13', fecha: 2026,
      visual: [
        E('esquema-resurrecciones', 'La primera y la segunda resurrección.', ESQ),
        { tipo: 'tabla', titulo: 'Orden', tabla: {
          titulo: 'Las resurrecciones, en orden',
          cab: ['Resurrección', 'Quiénes', 'Cuándo', 'Pasaje'],
          filas: [
            ['Cristo, las primicias', 'Jesús', 'Al tercer día', '1 Co 15:20, 23'],
            ['Primera resurrección', 'Los muertos en Cristo', 'En el arrebatamiento', '1 Ts 4:16'],
            ['Primera resurrección', 'Los santos del Antiguo Testamento y los mártires de la tribulación', 'En la segunda venida', 'Dn 12:2; Ap 20:4'],
            ['Segunda resurrección', 'Los injustos de todos los tiempos', 'Al final del milenio', 'Ap 20:5, 12-13']
          ],
          nota: 'La primera resurrección ocurre en etapas; la Biblia la llama «primera» por su naturaleza, la resurrección de vida.'
        } }
      ],
      texto: [
        'La esperanza cristiana no es solo que el alma va con el Señor al morir, sino la resurrección del cuerpo. Pablo dedicó un capítulo entero a defenderla: si Cristo no resucitó, nuestra fe es vana; pero «ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho» (1 Co 15:20).',
        { h: 'Dos resurrecciones' },
        'La Biblia enseña que todos los muertos resucitarán, pero no al mismo tiempo ni con el mismo destino. Daniel anunció que muchos de los que duermen en el polvo serán despertados, «unos para vida eterna, y otros para vergüenza y confusión perpetua» (Dn 12:2). Jesús distinguió la «resurrección de vida» de la «resurrección de condenación» (Jn 5:29).',
        'Apocalipsis 20 muestra que entre ambas hay mil años. Los justos tienen parte en la primera resurrección y reinan con Cristo mil años, «pero los otros muertos no volvieron a vivir hasta que se cumplieron mil años» (Ap 20:5). Al final del milenio, comparecen ante el gran trono blanco.',
        { h: 'Cada uno en su debido orden' },
        'Pablo explica que la resurrección sigue un orden: «Cristo, las primicias; luego los que son de Cristo, en su venida. Luego el fin» (1 Co 15:23-24). La imagen viene de la cosecha: primero se ofrecían las primicias, luego se recogía la cosecha principal, y al final se espigaba lo que quedaba. Por eso se entiende que la primera resurrección ocurre en etapas: Cristo, la iglesia en el arrebatamiento, y los santos del Antiguo Testamento y los mártires de la tribulación en la segunda venida.',
        { h: 'El cuerpo de resurrección' },
        'El cuerpo resucitado será real, pero transformado: «Se siembra en corrupción, resucitará en incorrupción. Se siembra en deshonra, resucitará en gloria; se siembra en debilidad, resucitará en poder» (1 Co 15:42-43). Será semejante al cuerpo glorioso de Cristo resucitado, que podía ser tocado y comía, pero no estaba sujeto a la muerte (Fil 3:21; Lc 24:39-43).',
        'Por eso el creyente puede mirar la muerte sin terror: «¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?» (1 Co 15:55).'
      ],
      pensar: 'Pablo pudo desafiar a la muerte: «¿Dónde está, oh muerte, tu aguijón?» (1 Co 15:55). ¿Cómo cambia la esperanza de la resurrección tu manera de enfrentar la muerte de los seres queridos y la tuya propia?'
    },
    {
      id: 'juicios', n: 'Los juicios de Dios', ref: 'Juan 5:22-24; Romanos 8:1; 2 Corintios 5:10; Mateo 25:31-46; 1 Corintios 6:3; Apocalipsis 20:11-15', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Los juicios', tabla: {
          titulo: 'Los juicios que enseña la Biblia',
          cab: ['Juicio', 'Quiénes', 'Cuándo', 'Resultado', 'Pasaje'],
          filas: [
            ['La cruz', 'El pecado del creyente, juzgado en Cristo', 'En el Calvario', 'Justificación: ninguna condenación', 'Jn 5:24; Ro 8:1'],
            ['El tribunal de Cristo', 'Los creyentes', 'Después del arrebatamiento', 'Recompensa o pérdida, no salvación', '2 Co 5:10; 1 Co 3:11-15'],
            ['Israel', 'El pueblo de Israel', 'En la tribulación y la segunda venida', 'Un remanente purificado entra al reino', 'Ez 20:33-38; Zac 13:8-9'],
            ['Las naciones', 'Los vivos al final de la tribulación', 'En la segunda venida', 'Entrada al reino o castigo', 'Mt 25:31-46'],
            ['Los ángeles caídos', 'Satanás y sus ángeles', 'Al final', 'El lago de fuego', '1 Co 6:3; Jud 6; Ap 20:10'],
            ['El gran trono blanco', 'Los muertos no salvos', 'Después del milenio', 'El lago de fuego', 'Ap 20:11-15']
          ]
        } }
      ],
      texto: [
        'La Biblia no habla de un solo juicio final para todos al mismo tiempo, sino de varios juicios, distintos en sus participantes, su momento y su propósito. Distinguirlos ayuda a entender el plan de Dios y da seguridad al creyente.',
        { h: 'El juicio que ya ocurrió' },
        'El juicio más importante para el creyente ya ocurrió: en la cruz, Cristo cargó el castigo de nuestro pecado. Jesús lo dijo: «El que oye mi palabra, y cree al que me envió, tiene vida eterna; y no vendrá a condenación, mas ha pasado de muerte a vida» (Jn 5:24). Por eso Pablo pudo escribir: «Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). El creyente nunca será juzgado por sus pecados para condenación.',
        { h: 'El juicio de las obras del creyente' },
        'Sin embargo, el creyente sí comparecerá ante el tribunal de Cristo, no para ser condenado, sino para que se evalúe su servicio y reciba recompensa (2 Co 5:10). Este juicio llama a vivir con responsabilidad: la salvación es gratuita, pero la manera en que vivimos como salvos tiene consecuencias eternas.',
        { h: 'Los juicios de la segunda venida' },
        'Cuando Cristo vuelva, juzgará a Israel y a las naciones. De Israel saldrá un remanente purificado que entrará al reino (Ez 20:37-38). Las naciones que sobrevivan a la tribulación serán separadas como ovejas y cabritos (Mt 25:31-46).',
        { h: 'El juicio final' },
        'Al final del milenio, Satanás será lanzado al lago de fuego, y los ángeles que lo siguieron serán juzgados (Jud 6). Pablo dice que los santos tomarán parte en ese juicio (1 Co 6:3). Y los muertos que no aceptaron a Cristo comparecerán ante el gran trono blanco, para ser juzgados según sus obras.',
        { h: 'El juez' },
        'En todos estos juicios, el juez es el mismo: «el Padre a nadie juzga, sino que todo el juicio dio al Hijo» (Jn 5:22). El que murió por los pecadores es el que juzgará a los que rechazaron su sacrificio. Hoy se le puede conocer como Salvador; ese día, todos lo verán como Juez.'
      ],
      pensar: 'Para el que está en Cristo «ninguna condenación hay» (Ro 8:1), pero sí habrá un tribunal para evaluar su servicio (2 Co 5:10). ¿Cómo equilibras en tu vida la seguridad de la salvación y la responsabilidad de servir fielmente?'
    },
    {
      id: 'senales-fechas', n: 'Señales de los tiempos sin fijar fechas', ref: 'Mateo 24:32-44; Hechos 1:6-7; Lucas 21:28; 1 Tesalonicenses 5:1-6', fecha: 2026,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero del día y la hora nadie sabe, ni aun los ángeles de los cielos, sino sólo mi Padre.', ref: 'Mateo 24:36' }
      ],
      texto: [
        'Jesús enseñó a observar las señales de los tiempos, y al mismo tiempo prohibió fijar fechas. Entender ese equilibrio protege de dos errores: la indiferencia y el sensacionalismo.',
        { h: 'Observar las señales' },
        'Jesús usó la parábola de la higuera: «Cuando ya su rama está tierna, y brotan las hojas, sabéis que el verano está cerca. Así también vosotros, cuando veáis todas estas cosas, conoced que está cerca, a las puertas» (Mt 24:32-33). Reprendió a los fariseos porque sabían interpretar el aspecto del cielo, pero no las señales de los tiempos (Mt 16:3). Y dijo a sus discípulos que, cuando comenzaran a suceder estas cosas, levantaran la cabeza, «porque vuestra redención está cerca» (Lc 21:28).',
        { posturas: {
          titulo: 'La higuera y el Israel moderno',
          a: { n: 'Una señal del fin', t: 'Muchos maestros premileniales ven en la higuera una imagen de Israel (Os 9:10; Jl 1:7), y en el regreso del pueblo judío a su tierra y la formación del Estado de Israel en 1948 un paso hacia el cumplimiento de las profecías de su restauración (Ez 37), que prepara el escenario de los últimos tiempos.' },
          b: { n: 'Una lección general', t: 'Otros intérpretes, también premileniales, entienden la higuera como una ilustración general tomada de la naturaleza: así como las hojas anuncian el verano, las señales anuncian la cercanía del fin. Advierten contra calcular fechas a partir de 1948.' },
          c: 'La Biblia anuncia que Israel será recogido en su tierra antes de los eventos del fin (Ez 38:8), y el regreso de los judíos a ella es un hecho notable de la historia. Pero ningún acontecimiento permite calcular el día de la venida del Señor. Las predicciones con fecha han fallado siempre.'
        } },
        { h: 'No fijar fechas' },
        'Jesús fue claro: «del día y la hora nadie sabe» (Mt 24:36). A los discípulos que preguntaban por el reino les dijo: «No os toca a vosotros saber los tiempos o las sazones, que el Padre puso en su sola potestad» (Hch 1:7). La historia de la iglesia está llena de predicciones con fecha que no se cumplieron y que dañaron la fe de muchos y el testimonio de la iglesia. Quien fija una fecha contradice las palabras de Jesús.',
        { h: 'Velar' },
        'La enseñanza de Jesús sobre las señales termina con una exhortación práctica: «velad, pues, porque no sabéis a qué hora ha de venir vuestro Señor… Por tanto, también vosotros estad preparados; porque el Hijo del Hombre vendrá a la hora que no pensáis» (Mt 24:42, 44). Pablo agrega que los creyentes no están en tinieblas, para que aquel día los sorprenda como ladrón; por eso no deben dormir, sino velar y ser sobrios (1 Ts 5:4-6).'
      ],
      pensar: 'Jesús dijo que vendrá «a la hora que no pensáis» (Mt 24:44). ¿Qué significa para ti, en lo práctico, estar preparado?'
    },
    {
      id: 'vivir-esperando', n: 'Vivir esperando su venida', ref: '1 Juan 3:2-3; 2 Pedro 3:9-14; Tito 2:11-14; Mateo 24:45-51; 1 Corintios 15:58', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Efectos', tabla: {
          titulo: 'Lo que produce la esperanza de su venida',
          cab: ['Efecto', 'Pasaje'],
          filas: [
            ['Santidad', '1 Jn 3:2-3; 2 P 3:11, 14'],
            ['Consuelo ante la muerte', '1 Ts 4:13-18'],
            ['Urgencia en la evangelización', '2 P 3:9; Mt 24:14'],
            ['Fidelidad en el servicio', 'Mt 24:45-46; 1 Co 15:58'],
            ['Paciencia en el sufrimiento', 'Stg 5:7-8; Ro 8:18'],
            ['Desprendimiento de lo terrenal', 'Fil 3:20; Col 3:1-4'],
            ['Amor por su venida', '2 Ti 4:8; Ap 22:20']
          ]
        } }
      ],
      texto: [
        'La profecía bíblica no se escribió para satisfacer la curiosidad, sino para transformar la vida. Casi siempre que el Nuevo Testamento habla de la venida del Señor, termina con una exhortación práctica.',
        { h: 'Santidad' },
        '«Amados, ahora somos hijos de Dios, y aún no se ha manifestado lo que hemos de ser; pero sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es. Y todo aquel que tiene esta esperanza en él, se purifica a sí mismo, así como él es puro» (1 Jn 3:2-3). Quien espera al Esposo se prepara para él. Pedro pregunta: si todas estas cosas han de ser deshechas, «¡cómo no debéis vosotros andar en santa y piadosa manera de vivir…!» (2 P 3:11).',
        { h: 'Urgencia' },
        'Si el Señor tarda, no es por descuido. «El Señor no retarda su promesa, según algunos la tienen por tardanza, sino que es paciente para con nosotros, no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento» (2 P 3:9). Cada día que pasa es un día más de gracia para los que no conocen a Cristo, y una oportunidad para anunciarles el evangelio.',
        { h: 'Fidelidad' },
        'Jesús contó la parábola del siervo fiel y prudente, al que su señor puso sobre su casa: «Bienaventurado aquel siervo al cual, cuando su señor venga, le halle haciendo así» (Mt 24:46). Esperar la venida del Señor no significa dejar de trabajar, sino trabajar con más fidelidad. Pablo termina su gran capítulo sobre la resurrección diciendo: «estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano» (1 Co 15:58).',
        { h: 'Esperanza' },
        'En un mundo que muchas veces parece sin rumbo, el creyente sabe cómo termina la historia. El mal no tendrá la última palabra. Cristo reinará, Dios enjugará toda lágrima y morará con su pueblo. Esa esperanza sostiene en el sufrimiento, consuela ante la muerte y llena de sentido el servicio.',
        'La última oración de la Biblia puede ser también la nuestra: «Amén; sí, ven, Señor Jesús» (Ap 22:20).'
      ],
      pensar: 'Juan dice que todo el que tiene la esperanza de ver a Cristo «se purifica a sí mismo» (1 Jn 3:3). ¿Qué área de tu vida necesita purificarse hoy a la luz de su venida?'
    }
  ];

  /* ---------------- Ruta 4 · La geografía de la profecía ---------------- */
  const geografia = [
    {
      id: 'jerusalen', n: 'Jerusalén, centro de la profecía', ref: 'Zacarías 12:2-3; 14:1-11, 16; Isaías 2:2-3; Lucas 21:24; Apocalipsis 11:8', fecha: 2026,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[31.3, 34.6], [32.2, 35.8]], capas: [], lugares: ['jerusalen', 'belen'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperios-historia/img/integrador-jerusalen-caminos.webp', alt: 'Vista de Jerusalén antigua sobre sus colinas al amanecer, con caminos que parten hacia el mar, el desierto y el norte', pie: 'Jerusalén, la ciudad del gran Rey (Mt 5:35).', origen: 'ia' }
      ],
      texto: [
        'Esta ruta ubica en el mapa los lugares que menciona la profecía de los últimos tiempos. El primero y más importante es Jerusalén. Casi todos los eventos del fin tienen relación con esta ciudad.',
        { h: 'Una piedra pesada para las naciones' },
        'Zacarías anunció: «He aquí yo pongo a Jerusalén por copa que hará temblar a todos los pueblos de alrededor… yo pondré a Jerusalén por piedra pesada a todos los pueblos; todos los que se la cargaren serán despedazados» (Zac 12:2-3). Una pequeña ciudad en las montañas de Judea, sin grandes recursos naturales ni un río importante, se convertirá en el centro de los conflictos de las naciones.',
        { h: 'Los eventos del fin en Jerusalén' },
        'En Jerusalén se ubica el templo de la tribulación, donde se pondrá la abominación desoladora (Mt 24:15). Allí profetizarán los dos testigos, en «la grande ciudad que en sentido espiritual se llama Sodoma y Egipto, donde también nuestro Señor fue crucificado» (Ap 11:8). Contra Jerusalén se reunirán las naciones al final de la tribulación (Zac 14:2). Sobre el monte de los Olivos, frente a la ciudad, se afirmarán los pies del Señor en su venida (Zac 14:4).',
        { h: 'El monte de los Olivos se partirá' },
        'Zacarías describe un cambio geográfico: el monte de los Olivos se partirá por en medio, de oriente a occidente, haciendo un gran valle, y saldrán de Jerusalén aguas vivas, la mitad hacia el mar oriental, el mar Muerto, y la otra mitad hacia el mar occidental, el Mediterráneo (Zac 14:4, 8). Ezequiel vio también un río que salía del templo y sanaba las aguas del mar Muerto (Ez 47:1-12).',
        { h: 'La capital del reino' },
        'En el milenio, Jerusalén será la capital del mundo. «Acontecerá en lo postrero de los tiempos, que será confirmado el monte de la casa de Jehová como cabeza de los montes… y correrán a él todas las naciones… porque de Sion saldrá la ley, y de Jerusalén la palabra de Jehová» (Is 2:2-3). Las naciones subirán cada año a adorar al Rey (Zac 14:16).',
        'Jesús lloró sobre Jerusalén porque no conoció el tiempo de su visitación (Lc 19:41-44). La profecía anuncia que un día la ciudad que lo rechazó lo recibirá como su Rey, y que en la eternidad, la nueva Jerusalén será la morada de Dios con los hombres.'
      ],
      pensar: 'Jesús lloró sobre Jerusalén, y un día reinará desde ella (Lc 19:41; Zac 14:9). ¿Qué te enseña el amor persistente de Dios por esta ciudad sobre su fidelidad hacia los que se alejan de él?'
    },
    {
      id: 'gog-magog', n: 'Gog y Magog', ref: 'Ezequiel 38–39; Apocalipsis 20:7-9', fecha: 2026,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[10, 12], [48, 58]], capas: [], lugares: ['jerusalen', 'r-magog', 'r-mesec', 'r-tubal', 'r-gomer', 'r-togarma', 'r-persia', 'r-cus', 'r-fut'] } },
        { tipo: 'tabla', titulo: 'Los pueblos', tabla: {
          titulo: 'Los pueblos de Ezequiel 38 en el mundo antiguo',
          cab: ['Nombre', 'Ubicación antigua aproximada', 'Hoy'],
          filas: [
            ['Magog', 'El norte lejano; ubicación discutida', 'Discutido'],
            ['Mesec y Tubal', 'Centro y este de Asia Menor', 'Turquía'],
            ['Gomer', 'Norte de Asia Menor', 'Turquía'],
            ['Togarma', 'Este de Asia Menor', 'Turquía, Armenia'],
            ['Persia', 'Meseta de Irán', 'Irán'],
            ['Cus (Etiopía)', 'Al sur de Egipto', 'Sudán'],
            ['Fut (Libia)', 'Al oeste de Egipto', 'Libia']
          ],
          nota: 'Identificaciones aproximadas, basadas en fuentes antiguas; varias se discuten.'
        } }
      ],
      texto: [
        'Ezequiel 38 y 39 describe una invasión contra Israel en los últimos tiempos, encabezada por Gog, de la tierra de Magog, junto con una coalición de pueblos del norte, del oriente y del sur.',
        { h: 'La profecía' },
        'Dios dice a Gog, «príncipe soberano de Mesec y Tubal» (Ez 38:2): «De aquí a muchos días serás visitado; al cabo de años vendrás a la tierra salvada de la espada, recogida de muchos pueblos, a los montes de Israel» (Ez 38:8). Lo acompañan Persia, Cus, Fut, Gomer y Togarma. Vendrán contra un pueblo que habita confiadamente, para tomar despojos. Pero Dios mismo intervendrá con un gran terremoto, confusión entre los invasores, pestilencia, lluvia torrencial, granizo, fuego y azufre. «Y seré engrandecido y santificado, y seré conocido ante los ojos de muchas naciones» (Ez 38:23). Israel tardará siete meses en enterrar a los muertos (Ez 39:12).',
        { posturas: {
          titulo: '¿Quién es Gog y cuándo vendrá?',
          a: { n: 'Rusia y una invasión futura', t: 'Muchos maestros dispensacionalistas identificaron Magog con los pueblos del norte de Asia y entendieron la palabra hebrea rosh de Ezequiel 38:2 como un nombre propio, «Ros», asociado con Rusia. Ubican la invasión en la tribulación o poco antes de ella.' },
          b: { n: 'Una coalición del norte', t: 'Otros señalan que rosh significa «cabeza» o «jefe», como traduce la RV 1960 («príncipe soberano»), y que Mesec, Tubal, Gomer y Togarma estaban en la actual Turquía. Ven aquí una coalición futura del norte, sin identificarla con una nación moderna concreta.' },
          c: 'La Biblia no da el nombre moderno de estos pueblos, y las identificaciones deben hacerse con cautela. Lo seguro es que habrá una invasión contra Israel restaurado en su tierra, y que Dios intervendrá para salvar a su pueblo y darse a conocer a las naciones. En cuanto al momento, la mayoría de los premileniales la ubica antes de la segunda venida, distinta de la rebelión de Gog y Magog al final del milenio (Ap 20:7-9).'
        } },
        { h: 'Gog y Magog en Apocalipsis' },
        'Apocalipsis 20 usa los mismos nombres para la rebelión final, después del milenio, cuando Satanás sea suelto y reúna a las naciones de los cuatro ángulos de la tierra (Ap 20:8). Muchos entienden que Juan toma los nombres de Ezequiel como símbolo de las naciones rebeldes contra Dios, y que se trata de dos acontecimientos distintos.'
      ],
      pensar: 'En Ezequiel 38, Dios interviene para que las naciones lo conozcan (Ez 38:23). ¿De qué maneras ha mostrado Dios su poder en tu vida para que otros lo conozcan?'
    },
    {
      id: 'babilonia', n: 'Babilonia la grande', ref: 'Apocalipsis 17–18; Jeremías 50–51; Isaías 13:19-22; Génesis 11:1-9', fecha: 2026,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[27, 28], [40, 52]], capas: [], lugares: ['babilonia', 'jerusalen', 'roma', 'susa'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'y en su frente un nombre escrito, un misterio: BABILONIA LA GRANDE, LA MADRE DE LAS RAMERAS Y DE LAS ABOMINACIONES DE LA TIERRA.', ref: 'Apocalipsis 17:5' }
      ],
      texto: [
        'Babilonia aparece en la Biblia desde Génesis hasta Apocalipsis como símbolo del orgullo humano contra Dios. Comenzó con la torre de Babel, fue la potencia que destruyó Jerusalén y el templo en el 586 a.C., y reaparece en Apocalipsis 17 y 18 como «Babilonia la grande».',
        { h: 'La ramera y la ciudad' },
        'Apocalipsis 17 presenta a una mujer vestida de púrpura y escarlata, adornada de oro y piedras preciosas, sentada sobre una bestia escarlata con siete cabezas y diez cuernos, ebria de la sangre de los santos y de los mártires de Jesús. En su frente tiene escrito: «BABILONIA LA GRANDE, LA MADRE DE LAS RAMERAS Y DE LAS ABOMINACIONES DE LA TIERRA» (Ap 17:5). Apocalipsis 18 describe la caída de una gran ciudad comercial, con la que se enriquecieron los reyes y los mercaderes de la tierra, que lloran al ver el humo de su incendio: «Ha caído, ha caído la gran Babilonia» (Ap 18:2).',
        { posturas: {
          titulo: '¿Qué es Babilonia la grande?',
          a: { n: 'Un sistema religioso y comercial', t: 'Muchos intérpretes premileniales ven en Apocalipsis 17 un sistema religioso falso y mundial, aliado al anticristo, que luego será destruido por la misma bestia (Ap 17:16); y en el capítulo 18, el sistema económico y comercial mundial que caerá al final de la tribulación. Algunos asocian el capítulo 17 con Roma, la ciudad de las siete colinas (Ap 17:9).' },
          b: { n: 'Una ciudad reconstruida', t: 'Otros esperan la reconstrucción literal de Babilonia, junto al Éufrates, en el actual Irak, porque las profecías de Isaías 13 y Jeremías 50 y 51 sobre su destrucción total y repentina no se habrían cumplido plenamente: la Babilonia antigua decayó poco a poco, sin una destrucción súbita.' },
          c: 'Las dos lecturas coinciden en lo esencial: Babilonia representa la unión de la religión falsa, el poder político y la riqueza al servicio del orgullo humano contra Dios, y su caída será completa y definitiva.'
        } },
        { h: 'Salid de ella' },
        'En medio del anuncio de su caída, una voz del cielo dice: «Salid de ella, pueblo mío, para que no seáis partícipes de sus pecados, ni recibáis parte de sus plagas» (Ap 18:4). Es un llamado que el pueblo de Dios escucha en todas las épocas: no dejarse seducir por el sistema del mundo que se opone a Dios.'
      ],
      pensar: 'Dios llama a su pueblo: «Salid de ella, pueblo mío, para que no seáis partícipes de sus pecados» (Ap 18:4). ¿Qué valores de la «Babilonia» de tu tiempo intentan seducirte?'
    },
    {
      id: 'eufrates-edom', n: 'El Éufrates, Edom y Meguido', ref: 'Apocalipsis 9:13-16; 16:12-16; Isaías 34:5-6; 63:1-6; Zacarías 14:4', fecha: 2026,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'El gran río Éufrates (Ap 9:14; 16:12).', fecha: 2026,
            estado: { view: [[28, 33], [40, 50]], capas: [], lugares: ['babilonia', 'jerusalen'] } },
          { t: 'Meguido y el valle de Jezreel: Armagedón (Ap 16:16).', fecha: 2026,
            estado: { view: ISRAEL, capas: [], lugares: ['meguido', 'jerusalen'] } },
          { t: 'Edom y Bosra (Is 63:1).', fecha: 2026,
            estado: { view: LEVANTE, capas: [], lugares: ['jerusalen', 'bosra', 'petra', 'r-edom'] } }
        ] }
      ],
      texto: [
        'Tres lugares más aparecen en la profecía de los últimos tiempos: el río Éufrates, Meguido y Edom. Usa los botones bajo el mapa para ubicarlos.',
        { h: 'El Éufrates' },
        'El Éufrates es el río más largo del Medio Oriente. Nace en las montañas de Turquía y atraviesa Siria e Irak hasta el golfo Pérsico. En la Biblia era el límite oriental de la tierra prometida a Abraham (Gn 15:18), y junto a él se levantó Babilonia. En Apocalipsis aparece dos veces. En la sexta trompeta, cuatro ángeles atados junto al gran río son desatados, y un ejército de doscientos millones causa gran mortandad (Ap 9:14-16). En la sexta copa, sus aguas se secan «para que estuviese preparado el camino a los reyes del oriente» (Ap 16:12), que marchan hacia Armagedón.',
        { h: 'Meguido' },
        'Meguido dominaba el paso principal entre la costa y el valle de Jezreel, en el norte de Israel. Fue escenario de batallas desde la antigüedad, y su nombre se conserva en «Armagedón», el lugar donde se reunirán los ejércitos de las naciones (Ap 16:16). Desde el valle, la campaña final se extenderá hasta Jerusalén.',
        { h: 'Edom y Bosra' },
        'Edom, al sureste del mar Muerto, era el territorio de los descendientes de Esaú, enemigos históricos de Israel. Su ciudad principal era Bosra, y en su región se encuentra Petra. Isaías presenta una escena de la venida del Señor como guerrero: «¿Quién es éste que viene de Edom, de Bosra, con vestidos rojos? … Yo, el que hablo en justicia, grande para salvar» (Is 63:1). Sus vestidos están teñidos por el juicio sobre sus enemigos, como el manto de Cristo en Apocalipsis 19:13.',
        'Algunos maestros entienden, a partir de este pasaje y de Apocalipsis 12:6, que el remanente de Israel encontrará refugio en esa región durante la gran tribulación, y que el Señor irá primero allí a librarlo antes de su llegada al monte de los Olivos. Es una interpretación posible, no una enseñanza explícita de la Escritura.',
        'Estos nombres recuerdan que la profecía no habla de un mundo imaginario, sino de lugares reales donde Dios cumplirá su palabra.'
      ],
      pensar: 'Isaías presenta al Señor como el que viene «grande para salvar» (Is 63:1). ¿En qué situación de tu vida necesitas hoy recordar que el Señor es poderoso para salvar?'
    }
  ];

  window.RUTA_DATA = {
    titulo: 'Los últimos tiempos',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Ubicaciones de los mapas aproximadas.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'El plan de Dios', n: 'Panorama', info: 'Cómo interpretar la profecía, las posturas sobre el milenio, las dispensaciones, las setenta semanas y los tiempos de los gentiles', estaciones: panorama },
      { id: 'eventos', grupo: 'El plan de Dios', n: 'Los eventos del fin, en orden', info: 'Del arrebatamiento a los cielos nuevos y la tierra nueva', estaciones: eventos },
      { id: 'temas', grupo: 'Temas', n: 'Temas de la profecía', info: 'Israel y los pactos, las resurrecciones, los juicios, las señales y la vida en espera', estaciones: temas },
      { id: 'geografia', grupo: 'Temas', n: 'La geografía de la profecía', info: 'Jerusalén, Gog y Magog, Babilonia, el Éufrates, Meguido y Edom', estaciones: geografia }
    ]
  };
})();
