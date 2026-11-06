/* ==========================================================
   Recursos Bíblicos — Lucas (estudio de libro) · contenido de las rutas
   FUENTE de public/apps/lucas/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/lucas_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica, sin nombrarla.
   CRONOLOGÍA DEL SITIO (v2.44): nacimiento de Jesús hacia el 6–5 a.C.; año quince de Tiberio = 28/29;
   bautismo en el 29; crucifixión el viernes 3 de abril del 33; Pentecostés el 24 de mayo del 33.
   Lucas se escribió hacia el 60–61 (como en Introducción al Nuevo Testamento); Hechos, hacia el 62.
   Autoría tradicional: Lucas, el médico amado, compañero de Pablo.
   Genealogía de Lucas 3: dos posturas; prevalece que Lucas da la línea de María (decisión del 03-11-2026).
   Lucas 22:43-44 es un pasaje discutido en los manuscritos: se comenta con un bloque `posturas`
   y ninguna doctrina se apoya en él (§20, De la Biblia a nosotros).
   Coordinación con otros recursos:
   - Autor, Teófilo y Lucas-Hechos: el desarrollo está en Hechos (ruta I); aquí se resume y se enlaza.
   - El problema sinóptico: ruta de la Armonía (#sinoptico/n).
   - Fechas: Cronología del Nuevo Testamento. Grupos, fiestas y vida diaria: El mundo judío.
   - El Espíritu Santo (nº 11) está enlazado desde II.7 y IV.2.
   ========================================================== */
(() => {
  const V = {
    mediterraneo: [[29.0, 8.0], [46.5, 38.5]],
    oriente: [[28.5, 26.0], [43.0, 38.5]],
    palestina: [[30.9, 34.2], [33.45, 36.5]],
    galilea: [[32.45, 34.95], [33.35, 35.95]],
    lago: [[32.65, 35.35], [33.0, 35.75]],
    judea: [[31.4, 34.75], [32.15, 35.65]],
    jerusalen: [[31.68, 35.05], [31.92, 35.5]]
  };
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/lucas_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(/*@@IMAGENES*/[]);
  // Imágenes de otros recursos (../otro/img/…) que ya existen; una que todavía no se ha generado queda sin src.
  const EXT = new Set(/*@@EXTERNAS*/[]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (f.startsWith('../') ? (EXT.has(f) ? { src: EMB[f] || f } : {}) : HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  const R = {
    armonia: '../../evangelios/', sinoptico: '../../evangelios/#sinoptico/', crono: '../../cronologia-nuevo-testamento/',
    mundo: '../../mundo-judio/', herodes: '../../dinastia-herodes/', intro: '../../introduccion-nuevo-testamento/',
    hechos: '../../hechos/', cristo: '../../persona-y-obra-de-cristo/', templo: '../../templo-herodes/',
    escatologia: '../../escatologia/', romano: '../../imperio-romano/', medidas: '../../medidas-biblicas/',
    tierra: '../../tierra-de-israel/', pactos: '../../pactos-y-dispensaciones/', interpretar: '../../interpretar-biblia/',
    pentecostal: '../../movimiento-pentecostal/', manuscritos: '../../de-la-biblia-a-nosotros/', genealogias: '../../arbol-genealogico/',
    sacerdocio: '../../sacerdocio/', pablo: '../../viajes-pablo/', entre: '../../entre-los-testamentos/'
  };
  window.__LC = { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R };
  const L = window.__LC;

  // ================== RUTA I. Introducción y trasfondo ==================
  L.introduccion = [
    {
      id: 'lucas', n: 'Lucas, el médico amado', ref: 'Colosenses 4:10-14; Filemón 24; 2 Timoteo 4:11', fecha: [50, 67],
      visual: [
        img('../hechos/img/hechos-lucas-escribe.webp', 'Lucas, médico de barba corta, escribe en un rollo junto a una mesa con otros rollos y tablillas, en una habitación iluminada por una ventana', 'Lucas escribe su obra en dos tomos.'),
        tabla({
          titulo: 'Lo que sabemos de Lucas',
          cab: ['Dato', 'Fuente'],
          filas: [
            ['Médico, querido por Pablo', 'Colosenses 4:14'],
            ['Colaborador de Pablo', 'Filemón 24'],
            ['El único que siguió con Pablo en su última prisión', '2 Timoteo 4:11'],
            ['Viajó con Pablo: los pasajes «nosotros»', 'Hechos 16:10-17; 20:5–21:18; 27:1–28:16'],
            ['No era de los judíos de nacimiento (probablemente)', 'Colosenses 4:10-14'],
            ['Natural de Antioquía de Siria', 'Tradición del siglo II (prólogo antiguo, Eusebio)']
          ],
          nota: 'Lucas nunca dice su nombre en el evangelio ni en Hechos. La iglesia lo reconoció como autor desde el siglo II.'
        }),
        cita('Colosenses 4:14', '@@col/4/14')
      ],
      texto: [
        'El tercer evangelio no dice quién lo escribió. Su autor habla en primera persona en el prólogo, pero no da su nombre. Desde el siglo II, sin embargo, toda la iglesia lo atribuyó a Lucas, y no hay otra tradición antigua que lo discuta. Es notable: Lucas no fue apóstol ni testigo del ministerio de Jesús, y nadie habría inventado que un personaje tan secundario escribiera el evangelio más largo.',
        { h: 'Médico y compañero de viaje' },
        'Pablo lo nombra tres veces. A los colosenses les escribe: «Os saluda Lucas el médico amado» (Col 4:14). En Filemón lo llama su colaborador (Flm 24). Y en su última carta, solo y esperando la muerte, dice: «Sólo Lucas está conmigo» (2 Ti 4:11). Fue un amigo fiel hasta el final.',
        'En Hechos el narrador pasa de pronto a decir «nosotros» (Hch 16:10). Esos pasajes muestran que el autor viajó con Pablo de Troas a Filipos, después de Filipos a Jerusalén y, más tarde, en el naufragio camino a Roma. Allí pudo conocer a Jacobo, el hermano del Señor, y a los ancianos de Jerusalén (Hch 21:17-18), y pasó dos años cerca de Cesarea mientras Pablo estaba preso. Tuvo tiempo de sobra para investigar.',
        { h: 'Un gentil que escribe para todos' },
        'En Colosenses, Pablo separa a los que son «de la circuncisión» (Col 4:10-11) y nombra después a Epafras, Lucas y Demas. Por eso muchos piensan que Lucas era gentil, quizás el único autor del Nuevo Testamento que no era judío. La tradición lo hace natural de Antioquía de Siria, la primera iglesia con gentiles.',
        'Eso ayuda a entender su evangelio. Lucas escribe un griego cuidado, explica las costumbres judías y muestra con especial cariño a los que estaban fuera: samaritanos, publicanos, mujeres, pobres y extranjeros. Su vocabulario y su atención a las enfermedades encajan con un hombre culto, aunque no prueban por sí solos que fuera médico.',
        ir('Ver «Lucas, el médico amado» en Hechos', R.hechos + '#introduccion/5')
      ],
      pensar: 'Lucas no fue apóstol, pero Dios lo usó para escribir más de una cuarta parte del Nuevo Testamento. ¿Qué te enseña su vida sobre el servicio fiel que no busca el primer lugar?'
    },
    {
      id: 'prologo', n: 'El prólogo y Teófilo', ref: 'Lucas 1:1-4; Hechos 1:1-2', fecha: 60,
      visual: [
        cita('Lucas 1:1-4', '@@lc/1/1-4'),
        img('../hechos/img/hechos-teofilo.webp', 'Un hombre de buena posición, con túnica fina, lee un rollo en el patio de una casa romana', 'Teófilo recibe la obra de Lucas.'),
        tabla({
          titulo: 'Cuatro palabras del prólogo',
          cab: ['Palabra', 'Qué indica'],
          filas: [
            ['«Desde el principio»', 'Lucas se remonta hasta el origen de los hechos'],
            ['«Todas las cosas»', 'Investigación completa, no parcial'],
            ['«Con diligencia»', 'Cuidado, exactitud'],
            ['«Por orden»', 'Un relato ordenado y fácil de seguir'],
          ],
          nota: '«Para que conozcas bien la verdad» (Lc 1:4) es el propósito del libro.'
        })
      ],
      texto: [
        'Lucas es el único evangelista que comienza explicando cómo y por qué escribe. Sus primeros cuatro versículos son una sola frase larga, en el griego más elegante del Nuevo Testamento, al estilo de los historiadores de su época. Lucas quiere que se sepa que su libro es una obra seria.',
        { h: 'Lo que dice el prólogo' },
        'Primero reconoce que otros ya habían escrito: «muchos han tratado de poner en orden la historia de las cosas que entre nosotros han sido ciertísimas» (Lc 1:1). Luego nombra sus fuentes: lo que transmitieron los que «desde el principio lo vieron con sus ojos, y fueron ministros de la palabra» (Lc 1:2). Después describe su trabajo: haber «investigado con diligencia todas las cosas desde su origen» para escribirlas «por orden» (Lc 1:3). Y termina con el propósito: «para que conozcas bien la verdad de las cosas en las cuales has sido instruido» (Lc 1:4).',
        'La fe que Lucas presenta no se apoya en leyendas, sino en hechos comprobados por testigos. El evangelio tiene historia, y la historia se puede investigar.',
        { h: '¿Quién era Teófilo?' },
        'El nombre significa «amigo de Dios». El título «excelentísimo» se usaba para personas de alto rango, como los gobernadores Félix y Festo (Hch 24:3; 26:25). Lo más probable es que Teófilo fuera un hombre importante, ya instruido en la fe, que quizás costeó la copia del libro. Algunos piensan que el nombre representa a todo lector que ama a Dios, pero el título hace pensar en una persona real.',
        'Hechos comienza dirigiéndose otra vez a Teófilo y recordando «el primer tratado» (Hch 1:1). Los dos libros forman una sola obra.',
        ir('Ver el pasaje en la Armonía de los evangelios', R.armonia + '#proposito-lucas'),
        ir('Ver «¿Quién era Teófilo?» en Hechos', R.hechos + '#introduccion/6')
      ],
      pensar: 'Lucas escribió para que Teófilo tuviera certeza de lo que ya creía. ¿Sobre qué partes de tu fe te gustaría tener esa seguridad, y cómo podría ayudarte el estudio cuidadoso de la Escritura?'
    },
    {
      id: 'dos-tomos', n: 'Una obra en dos tomos', ref: 'Lucas 24:46-53; Hechos 1:1-11', fecha: [33, 62],
      visual: [
        esq('lc-dos-tomos.svg', 'Dos columnas paralelas: Lucas va de Galilea a Jerusalén y termina con la ascensión; Hechos comienza con la ascensión y va de Jerusalén a Roma; en el centro, Jerusalén y la promesa del Espíritu', 'Lucas y Hechos: dos tomos que se encuentran en Jerusalén.'),
        tabla({
          titulo: 'Paralelos entre los dos tomos',
          cab: ['Lucas', 'Hechos'],
          filas: [
            ['Dedicado a Teófilo (1:3)', 'Dedicado a Teófilo (1:1)'],
            ['El Espíritu desciende sobre Jesús en oración (3:21-22)', 'El Espíritu desciende sobre la iglesia que ora (1:14; 2:1-4)'],
            ['Primer sermón en Nazaret: Isaías 61 (4:16-21)', 'Primer sermón en Jerusalén: Joel 2 (2:14-21)'],
            ['Jesús sana a un paralítico (5:17-26)', 'Pedro sana a un cojo (3:1-10)'],
            ['Jesús resucita a un muerto (7:11-17; 8:49-56)', 'Pedro resucita a Dorcas (9:36-41)'],
            ['Jesús ora por sus verdugos (23:34)', 'Esteban ora por los suyos (7:60)'],
            ['Termina con la ascensión (24:50-53)', 'Comienza con la ascensión (1:9-11)']
          ]
        })
      ],
      texto: [
        'Lucas y Hechos son dos partes de una misma obra. Juntos ocupan más de una cuarta parte del Nuevo Testamento, más que todas las cartas de Pablo. Por eso muchos los llaman Lucas-Hechos. En nuestras Biblias, el evangelio de Juan quedó en medio, pero conviene leerlos como su autor los pensó: uno a continuación del otro.',
        { h: 'Lo que Jesús comenzó' },
        'Hechos comienza diciendo que el primer tomo habló «de todas las cosas que Jesús comenzó a hacer y a enseñar» (Hch 1:1). La palabra «comenzó» es la clave. El evangelio cuenta el comienzo; Hechos, la continuación. El mismo Jesús que obró en Galilea y Judea por el Espíritu sigue obrando, desde el cielo, por medio de su iglesia llena del Espíritu.',
        { h: 'Un movimiento en dos direcciones' },
        'El esquema muestra la forma de la obra. Lucas se mueve hacia Jerusalén: desde el templo, en el capítulo 1, pasa por Galilea y sube a la ciudad, donde Jesús muere, resucita y asciende. Hechos se mueve desde Jerusalén: Judea, Samaria y hasta lo último de la tierra, con Roma como meta. Jerusalén es el centro, y la promesa del Padre es el puente: «quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49).',
        'Los paralelos de la tabla no son casuales. Lucas quiere que el lector vea que los discípulos hacen lo mismo que hizo su Señor, por el mismo Espíritu. La iglesia continúa la misión de Jesús.',
        'Este recurso termina con una ruta puente hacia Hechos, y el estudio de Hechos desarrolla esta relación desde el otro lado.',
        ir('Ver «Lucas-Hechos, una obra en dos tomos» en Hechos', R.hechos + '#introduccion/3'),
        ir('Ir a la ruta De Lucas a Hechos', '#puente/1')
      ],
      pensar: 'Si el evangelio cuenta lo que Jesús «comenzó» a hacer, la historia sigue hoy. ¿Qué parte de la obra de Jesús está continuando el Espíritu a través de tu iglesia y de tu vida?'
    },
    {
      id: 'testigos', n: 'Testigos e investigación', ref: 'Lucas 1:2; 2:19, 51; 8:3; 24:10; Hechos 21:8-10, 17-18', fecha: [57, 59],
      visual: [
        img('../evangelios/sinoptico/img/sin-lucas-testigos.webp', 'Lucas conversa con testigos ancianos en una casa de Judea y toma notas en una tablilla', 'Lucas investiga todas las cosas desde su origen (Lc 1:3).'),
        tabla({
          titulo: 'Personas que Lucas pudo conocer',
          cab: ['Persona', 'Dónde aparece', 'Qué pudo contar'],
          filas: [
            ['María, la madre de Jesús', 'Lucas 2:19, 51; Hechos 1:14', 'El nacimiento y la infancia'],
            ['Juana, mujer de Chuza', 'Lucas 8:3; 24:10', 'La corte de Antipas y la tumba vacía'],
            ['Felipe y sus hijas profetisas', 'Hechos 21:8-9', 'Samaria y los primeros años'],
            ['Jacobo y los ancianos', 'Hechos 21:17-18', 'La iglesia de Jerusalén'],
            ['Mnasón, «discípulo antiguo»', 'Hechos 21:16', 'Los primeros discípulos'],
            ['Juan Marcos', 'Colosenses 4:10, 14', 'La predicación de Pedro']
          ],
          nota: 'Lucas no dice quiénes fueron sus fuentes; la tabla muestra a quiénes pudo conocer según el Nuevo Testamento.'
        })
      ],
      texto: [
        'Lucas no inventa: investiga. Dice que se informó de «todas las cosas desde su origen» y que recibió lo que contaron «los que desde el principio lo vieron con sus ojos» (Lc 1:2-3). ¿A quiénes pudo escuchar?',
        { h: 'Dos años en Judea' },
        'Hacia el año 57, Lucas llegó con Pablo a Jerusalén (Hch 21:17). Pablo fue arrestado y estuvo preso dos años en Cesarea (Hch 24:27). Hechos no dice qué hizo Lucas en ese tiempo, pero en el viaje a Roma vuelve a aparecer el «nosotros» (Hch 27:1). Lo más probable es que siguiera en la región. Tuvo dos años para recorrer Galilea y Judea y hablar con quienes habían conocido a Jesús.',
        { h: 'La voz de María' },
        'Los capítulos 1 y 2 tienen detalles que solo podía saber María: el anuncio del ángel, la visita a Elisabet, lo que dijo Simeón. Lucas repite dos veces que María «guardaba todas estas cosas, meditándolas en su corazón» (Lc 2:19; véase 2:51). Es casi una firma: está diciendo de dónde viene el relato. María vivía todavía, quizás en Jerusalén con los discípulos (Hch 1:14).',
        { h: 'Mujeres testigos' },
        'Lucas nombra a Juana, mujer de Chuza, intendente de Herodes, entre las mujeres que servían a Jesús (Lc 8:3) y entre las que hallaron la tumba vacía (Lc 24:10). Solo Lucas la menciona, y también solo él cuenta varios detalles de la corte de Herodes Antipas (Lc 13:31-33; 23:6-12). Es probable que Juana fuera una de sus fuentes.',
        { h: 'Documentos escritos' },
        'Lucas también conocía relatos escritos («muchos han tratado de poner en orden», Lc 1:1). Muchos estudiosos piensan que uno de ellos fue el evangelio de Marcos. La ruta El problema sinóptico de la Armonía estudia cómo se relacionan los tres primeros evangelios.',
        ir('Ver «Testigos y tradición oral» en El problema sinóptico', R.sinoptico + '6')
      ],
      pensar: 'Lucas preguntó, escuchó y comprobó antes de escribir. ¿Qué testimonio de la fe recibiste de alguien mayor que tú, y a quién se lo estás transmitiendo?'
    },
    {
      id: 'fecha', n: 'Cuándo y dónde se escribió', ref: 'Hechos 1:1; 28:30-31; Lucas 21:20-24', fecha: [60, 61],
      visual: [
        tabla({
          titulo: 'Por qué Lucas es anterior a Hechos y al año 70',
          cab: ['Dato', 'Qué indica'],
          filas: [
            ['Hechos llama a Lucas «el primer tratado» (Hch 1:1)', 'El evangelio se escribió antes que Hechos'],
            ['Hechos termina con Pablo preso en Roma, hacia el 62 (Hch 28:30-31)', 'Hechos se terminó hacia el 62'],
            ['Ninguno de los dos menciona la muerte de Pablo (hacia el 67)', 'Se escribieron antes de esa fecha'],
            ['Lucas registra la profecía sobre Jerusalén sin decir que se cumplió (Lc 21:20-24)', 'Se escribió antes del 70']
          ],
          nota: 'Fecha del sitio: Lucas hacia el 60–61, durante el viaje a Roma o los primeros meses allí; Hechos hacia el 62.'
        }),
        pasos([
          { t: '57–59: Lucas en Judea mientras Pablo está preso en Cesarea', fecha: 58, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['cesarea', 'jerusalen', 'nazaret', 'capernaum'] } },
          { t: '59–60: el viaje a Roma (Hch 27–28)', fecha: 60, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['cesarea', 'creta', 'malta', 'roma'], trazos: ['viaje-roma'] } },
          { t: '60–62: Roma, dos años en una casa alquilada', fecha: 61, estado: { view: V.mediterraneo, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'jerusalen', 'antioquia'] } }
        ])
      ],
      texto: [
        'Lucas no fecha su libro, pero hay buenas pistas. La más importante está en Hechos. Hechos se presenta como la segunda parte de una obra («el primer tratado», Hch 1:1), así que el evangelio se escribió antes. Y Hechos termina de manera abrupta: Pablo vive dos años en Roma, predicando «sin impedimento» (Hch 28:31). No cuenta su juicio, ni la persecución de Nerón del 64, ni la muerte de Pablo y de Pedro. Lo más sencillo es pensar que Hechos se terminó en ese momento, hacia el 62.',
        { h: 'Antes de la caída de Jerusalén' },
        'Lucas registra con detalle la profecía de Jesús: «cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado» (Lc 21:20). Si hubiera escrito después del año 70, cuando Tito destruyó la ciudad y el templo, era natural que mencionara el cumplimiento. No lo hace, ni en Lucas ni en Hechos.',
        { posturas: {
          titulo: '¿Antes o después del año 70?',
          a: { n: 'Hacia el 60–61', t: 'Hechos se escribió hacia el 62 y el evangelio poco antes, quizás durante la estadía en Judea o en Roma. El silencio sobre la muerte de Pablo y la caída de Jerusalén es la clave. Es la fecha que sigue este sitio.' },
          b: { n: 'Entre el 75 y el 90', t: 'Muchos estudiosos piensan que Lucas usó a Marcos y que Marcos es de fines de los años 60; además, entienden que la descripción del asedio de Jerusalén refleja hechos ya ocurridos. Por eso fechan Lucas después del 70.' },
          c: 'La segunda postura supone que Jesús no pudo anunciar con precisión la destrucción de la ciudad. Pero la profecía usa el lenguaje de los profetas del Antiguo Testamento sobre los asedios, y Marcos pudo escribirse a fines de los años 50. Ninguna de las dos fechas cambia el valor del libro.'
        } },
        'No sabemos dónde terminó de escribirlo. Pudo ser en Cesarea, durante la prisión de Pablo, o en Roma. La tradición antigua menciona también Acaya.',
        ir('Ver «Los evangelios y Hechos» en Cronología del Nuevo Testamento', R.crono + '#libros/2'),
        ir('Ver «Lucas: el Salvador de todos» en Introducción al Nuevo Testamento', R.intro + '#evangelios/4')
      ],
      pensar: 'Lucas escribió cuando muchos testigos de Jesús todavía vivían y podían confirmar o corregir lo que decía. ¿Por qué es importante para tu fe que el evangelio se haya escrito tan cerca de los hechos?'
    },
    {
      id: 'mundo', n: 'Siete nombres: el mundo de Lucas', ref: 'Lucas 2:1-2; 3:1-2; 13:1; 23:6-12', fecha: [28, 29],
      visual: [
        cita('Lucas 3:1-2', '@@lc/3/1-2'),
        mapa({ view: [[30.9, 34.2], [33.85, 36.6]], capas: ['hd-antipas', 'hd-felipe', 'hd-provincia'], lugares: ['jerusalen', 'nazaret', 'capernaum', 'tiberias', 'cesarea', 'paneas', 'abilinia', 'damasco'] }),
        foto('../mundo-judio/img/foto-piedra-pilato.jpg', 'Bloque de piedra caliza con una inscripción latina incompleta en la que se lee el nombre de Poncio Pilato', 'La inscripción de Pilato hallada en Cesarea (réplica): confirma su título de prefecto de Judea.', 'Réplica en Cesarea Marítima. CC BY-SA 2.0, vía Wikimedia Commons')
      ],
      texto: [
        'Ningún otro evangelista sitúa a Jesús en la historia como Lucas. Antes de contar la predicación de Juan el Bautista, da siete nombres: el emperador, el gobernador, tres gobernantes de la región y dos sumos sacerdotes (Lc 3:1-2). Es como poner la fecha en un documento oficial.',
        { h: 'Los gobernantes' },
        'Tiberio César sucedió a Augusto en el año 14; su año quince corresponde al 28–29. Poncio Pilato gobernó Judea del 26 al 36. Herodes Antipas, hijo de Herodes el Grande, era tetrarca de Galilea y Perea; Felipe, su medio hermano, gobernaba las tierras del noreste; y Lisanias, la pequeña región de Abilinia, cerca de Damasco. Por mucho tiempo se dijo que Lucas se había equivocado con este Lisanias, porque se conocía a uno muerto mucho antes. Una inscripción hallada en Abila mencionó después a un tetrarca Lisanias en tiempos de Tiberio.',
        { h: 'Dos sumos sacerdotes' },
        'Lucas habla de «los sumos sacerdotes Anás y Caifás». Caifás era el sumo sacerdote oficial (18–36), pero Anás, su suegro, depuesto por Roma años antes, seguía siendo la autoridad detrás del cargo. Por eso Jesús fue llevado primero ante Anás (Jn 18:13), y en Hechos los dos aparecen juntos (Hch 4:6).',
        { h: 'Por qué importa' },
        'Lucas no escribe un cuento que ocurrió «había una vez». El evangelio sucedió bajo gobernantes con nombre, que los lectores podían comprobar, y en un año que hoy podemos calcular: el año quince de Tiberio corresponde al 28–29, y Jesús fue bautizado poco después, en el 29. Y hay un contraste: todos esos poderosos están en la lista, pero la palabra de Dios no vino a ninguno de ellos, sino a Juan, «en el desierto» (Lc 3:2).',
        ir('Ver «El año quince de Tiberio» en Cronología del Nuevo Testamento', R.crono + '#ministerio/1'),
        ir('Ver «Cómo distinguir a cada Herodes» en La dinastía de Herodes', R.herodes + '#biblia/1'),
        ir('Ver «Quién gobernaba» en El mundo judío en tiempos de Jesús', R.mundo + '#panorama/2')
      ],
      pensar: 'La palabra de Dios pasó por encima del emperador, el gobernador y los sumos sacerdotes, y llegó a un hombre en el desierto. ¿Qué te dice eso sobre dónde y a quiénes habla Dios hoy?'
    },
    {
      id: 'destinatarios', n: 'Para quién escribió Lucas', ref: 'Lucas 1:3-4; 2:30-32; 3:6; 24:47', fecha: 60,
      visual: [
        tabla({
          titulo: 'Señales de un libro para lectores gentiles',
          cab: ['Lo que hace Lucas', 'Ejemplo'],
          filas: [
            ['Explica lugares de Palestina', '«Nazaret, ciudad de Galilea» (1:26); Emaús, «a sesenta estadios de Jerusalén» (24:13)'],
            ['Explica costumbres judías', '«la fiesta de los panes sin levadura, que se llama la pascua» (22:1)'],
            ['Usa pocas palabras hebreas o arameas', 'No dice «Rabí» ni «hosanna»; dice «Maestro» y «gloria»'],
            ['Lleva la genealogía hasta Adán', '«hijo de Adán, hijo de Dios» (3:38)'],
            ['Destaca a gentiles y samaritanos', 'El centurión (7:1-10), el buen samaritano (10:30-37), el leproso samaritano (17:16)']
          ]
        }),
        cita('Lucas 2:30-32', '@@lc/2/30-32')
      ],
      texto: [
        'Lucas escribió para Teófilo, pero no solo para él. El libro muestra que piensa en lectores que no eran judíos y que vivían lejos de Palestina.',
        { h: 'Un evangelio que explica' },
        'Mateo da por sentado que su lector conoce la ley y las costumbres judías. Lucas, en cambio, explica: dice que Nazaret es una ciudad de Galilea, que Capernaúm también lo es (Lc 4:31), a qué distancia queda Emaús de Jerusalén, y qué es la pascua. Casi no usa palabras hebreas o arameas: donde Marcos escribe «Rabí» o «Abba», Lucas suele traducir. Escribe para quien lee en griego y no conoce Judea.',
        { h: 'Hasta Adán' },
        'La genealogía de Mateo comienza en Abraham, padre de Israel. La de Lucas sube hasta Adán, padre de toda la humanidad (Lc 3:38). Jesús no es solo el Mesías de los judíos; es el Salvador de todos los hijos de Adán.',
        { h: 'Luz para las naciones' },
        'Desde el comienzo, Lucas anuncia que la salvación es para todos. El anciano Simeón toma al niño y dice que es «luz para revelación a los gentiles, y gloria de tu pueblo Israel» (Lc 2:32). Al presentar a Juan el Bautista, Lucas extiende la cita de Isaías más que los otros evangelios, hasta llegar a «y verá toda carne la salvación de Dios» (Lc 3:6). Y al final, Jesús manda predicar el arrepentimiento y el perdón «en todas las naciones, comenzando desde Jerusalén» (Lc 24:47).',
        'Lucas no deja de lado a Israel. Su evangelio comienza en el templo, con un sacerdote, y termina en el templo, con los discípulos alabando a Dios (Lc 24:53). La salvación viene de Israel y se extiende a todas las naciones.'
      ],
      pensar: 'Lucas escribió pensando en lectores que no conocían el mundo de Jesús. ¿Cómo puedes explicar el evangelio a alguien que nunca ha leído la Biblia, sin dar por sentado lo que no sabe?'
    },
    {
      id: 'genero', n: 'Historia, evangelio y buena noticia', ref: 'Lucas 1:1-4; 2:10-11; 4:18; Hechos 10:36-43', fecha: 60,
      visual: [
        tabla({
          titulo: 'Lucas entre los historiadores antiguos',
          cab: ['Rasgo', 'Historiadores griegos y romanos', 'Lucas'],
          filas: [
            ['Prólogo con dedicatoria', 'Josefo dedica su obra a Epafrodito', 'Dedica su obra a Teófilo'],
            ['Uso de testigos', 'Prefieren testigos presenciales', 'Se apoya en testigos «desde el principio»'],
            ['Fechas por gobernantes', 'Fechan por cónsules y reyes', 'Fecha por Tiberio, Pilato y Herodes'],
            ['Discursos', 'Resumen lo esencial de lo dicho', 'Recoge enseñanzas y discursos de Jesús'],
            ['Propósito', 'Instruir y conservar la memoria', 'Dar certeza de la fe (1:4)']
          ]
        }),
        cita('Lucas 2:10-11', '@@lc/2/10-11')
      ],
      texto: [
        '¿Qué clase de libro es Lucas? Su prólogo se parece al de los historiadores griegos y romanos, y el libro tiene rasgos de las biografías antiguas, que contaban la vida, las enseñanzas y la muerte de un personaje importante. Pero ninguno de esos nombres basta. Lucas escribe un evangelio.',
        { h: 'Una historia verdadera' },
        'Lucas trabaja como un historiador: reúne testigos, ordena los hechos y los fecha. Hechos lo confirma: allí acierta en títulos de autoridades, nombres de ciudades y detalles del viaje por mar que los arqueólogos e historiadores han podido comprobar. No es un libro de mitos ni una novela religiosa.',
        { h: 'Una buena noticia' },
        'Pero Lucas no escribe solo para informar. El ángel anuncia a los pastores «nuevas de gran gozo» (Lc 2:10), y Jesús dice en Nazaret que fue ungido «para dar buenas nuevas a los pobres» (Lc 4:18). Lucas usa a menudo el verbo griego que significa «anunciar buenas noticias», y de él viene nuestra palabra «evangelizar». Su historia es un anuncio que pide una respuesta: arrepentimiento, fe y alegría.',
        { h: 'Una historia con sentido' },
        'Lucas no solo cuenta qué pasó; muestra que Dios estaba cumpliendo su plan. Las palabras «es necesario» aparecen una y otra vez: era necesario que Jesús estuviera en la casa de su Padre (Lc 2:49), que predicara el reino en otras ciudades (Lc 4:43), que padeciera (Lc 9:22; 24:26) y que se cumpliera todo lo escrito de Él (Lc 24:44). La historia de Jesús es el cumplimiento de las Escrituras.',
        'Por eso Lucas se lee de dos maneras a la vez: como historia confiable y como buena noticia que llama a creer.',
        ir('Ver «¿Qué es un evangelio?» en Introducción al Nuevo Testamento', R.intro + '#evangelios/1'),
        ir('Ver «Los evangelios y las parábolas» en Cómo interpretar la Biblia', R.interpretar + '#generos/6')
      ],
      pensar: 'Lucas une historia y buena noticia: lo que pasó de verdad es también un llamado para hoy. ¿Lees los evangelios solo para saber qué pasó, o también para escuchar lo que Dios te dice?'
    },
    {
      id: 'sinopticos', n: 'Lucas entre los evangelios', ref: 'Lucas 1:1-3; 10:30-37; 15:11-32; 24:13-35', fecha: [50, 61],
      visual: [
        esq('../evangelios/sinoptico/img/esquema-tres-circulos.svg', 'Tres círculos superpuestos de Mateo, Marcos y Lucas; la zona propia de Lucas, cerca de 500 versículos, es la más grande', 'Lo que comparten y lo que es propio de cada evangelio.'),
        tabla({
          titulo: 'Algunos pasajes que solo cuenta Lucas',
          cab: ['Pasaje', 'Capítulo'],
          filas: [
            ['El anuncio a Zacarías y el nacimiento de Juan', '1'],
            ['Los pastores, Simeón y Ana; Jesús a los doce años', '2'],
            ['La pesca milagrosa y el llamado de Pedro', '5'],
            ['El hijo de la viuda de Naín; la mujer pecadora', '7'],
            ['El buen samaritano; Marta y María', '10'],
            ['La oveja, la moneda y el hijo perdidos', '15'],
            ['El rico y Lázaro', '16'],
            ['Los diez leprosos; el fariseo y el publicano', '17–18'],
            ['Zaqueo', '19'],
            ['Jesús ante Herodes; el ladrón arrepentido', '23'],
            ['El camino a Emaús', '24']
          ]
        })
      ],
      texto: [
        'Mateo, Marcos y Lucas se llaman evangelios sinópticos porque se pueden leer «con una sola mirada»: cuentan muchos de los mismos hechos, en un orden parecido y a veces con las mismas palabras. Juan sigue otro camino.',
        { h: 'Lo que Lucas comparte' },
        'Cerca de la mitad de Lucas tiene paralelos en Marcos, en Mateo o en ambos. La ruta El problema sinóptico de la Armonía estudia esas coincidencias y las explicaciones que se han dado. Muchos estudiosos piensan que Lucas usó el evangelio de Marcos, que conoció por medio de Juan Marcos, compañero suyo junto a Pablo (Col 4:10, 14). Otros dan prioridad a Mateo. Lucas mismo dice que conocía relatos anteriores (Lc 1:1).',
        { h: 'Lo que solo Lucas cuenta' },
        'La otra mitad es propia. Sin Lucas no tendríamos el Magníficat, la Navidad de los pastores, a Jesús a los doce años en el templo, el buen samaritano, el hijo pródigo, el rico y Lázaro, Zaqueo, el ladrón arrepentido ni el camino a Emaús. Buena parte de ese material está en la sección del viaje a Jerusalén (Lc 9:51–19:27).',
        'Lo propio de Lucas tiene un sabor común: la misericordia de Dios con los perdidos y los que estaban fuera. Casi todas sus parábolas propias tratan de pecadores que vuelven, pobres que son recibidos y gente religiosa que se queda afuera.',
        { h: 'Un retrato entre cuatro' },
        'Cada evangelio presenta al mismo Jesús desde un ángulo. Mateo muestra al Rey prometido; Marcos, al Siervo en acción; Juan, al Hijo eterno. Lucas presenta al Salvador de todos, el Hijo del Hombre que vino «a buscar y a salvar lo que se había perdido» (Lc 19:10).',
        ir('Ver El problema sinóptico (ruta de la Armonía)', R.sinoptico + '1'),
        ir('Ver «Cuatro retratos de un mismo Cristo» en Introducción al Nuevo Testamento', R.intro + '#evangelios/6')
      ],
      pensar: 'Casi la mitad de Lucas no está en los otros evangelios, y mucho de eso habla de perdidos que son encontrados. ¿Cuál de esos relatos propios de Lucas te ha mostrado mejor la misericordia de Dios?'
    },
    {
      id: 'exactitud', n: 'Un historiador confiable: el censo de Cirenio', ref: 'Lucas 2:1-5; Hechos 5:37', fecha: [-6, -5],
      visual: [
        img('../imperio-romano/img/roma-censo-belen.webp', 'Familias judías hacen fila ante funcionarios romanos que anotan nombres en tablillas, en la entrada de una aldea de piedra en Judea', 'El empadronamiento: cada uno a su ciudad (Lc 2:3).'),
        cita('Lucas 2:1-3', '@@lc/2/1-3'),
        tabla({
          titulo: 'Datos de Lucas confirmados fuera de la Biblia',
          cab: ['Dato de Lucas', 'Confirmación'],
          filas: [
            ['Lisanias, tetrarca de Abilinia (Lc 3:1)', 'Inscripción de Abila, de tiempos de Tiberio'],
            ['Pilato, gobernador de Judea (Lc 3:1)', 'Inscripción de Cesarea (hallada en 1961)'],
            ['Caifás, sumo sacerdote (Lc 3:2)', 'Osario de la familia de Caifás (1990)'],
            ['Los «politarcas» de Tesalónica (Hch 17:6)', 'Inscripciones de Tesalónica con ese título'],
            ['Galión, procónsul de Acaya (Hch 18:12)', 'Inscripción de Delfos (hacia el 52)']
          ]
        })
      ],
      texto: [
        'Lucas acierta una y otra vez en detalles que podían comprobarse. Usa el título exacto de cada autoridad, que cambiaba de provincia en provincia, y nombra a personas que la arqueología ha confirmado. Un historiador así merece confianza también donde no tenemos otras fuentes.',
        { h: 'La dificultad del censo' },
        'El caso más discutido es el censo de Lucas 2. Lucas dice que el «primer censo se hizo siendo Cirenio gobernador de Siria» (Lc 2:2). Según Josefo, Cirenio gobernó Siria desde el año 6 d.C. e hizo un censo ese año, que provocó la rebelión de Judas el galileo. Lucas conoce ese censo: lo menciona en Hechos 5:37. Pero Jesús nació en días de Herodes, que murió en el 4 a.C. ¿Cómo encaja?',
        { posturas: {
          titulo: '¿Qué censo es el de Lucas 2?',
          a: { n: 'Un censo anterior, con Cirenio en un cargo previo', t: 'Cirenio tuvo una larga carrera en Oriente antes del año 6 y pudo tener autoridad especial en Siria años antes. Augusto hizo censos en varias provincias, y hacia el 3–2 a.C. todo el imperio prestó un juramento de lealtad que exigía registrarse. Lucas habla de un «primer» censo para distinguirlo del famoso del año 6.' },
          b: { n: 'Un censo «antes» del de Cirenio', t: 'La palabra griega que se traduce «primer» puede significar también «anterior». La frase diría entonces que este censo se hizo antes de que Cirenio gobernara Siria. Lucas aclararía que no habla del censo del año 6, sino de uno anterior, ordenado por Augusto en el reino de Herodes.' },
          c: 'Ambas lecturas respetan el texto. Lucas conocía el censo del año 6 y lo distingue con cuidado de este. Un autor tan preciso no habría confundido un hecho que todos sus lectores recordaban.'
        } },
        'Cuando un dato de Lucas parecía equivocado, como el título de Lisanias, nuevos hallazgos terminaron dándole la razón. Por eso conviene esperar antes de declarar un error en el texto bíblico.',
        ir('Ver «El censo de Cirenio» en Cronología del Nuevo Testamento', R.crono + '#nacimiento/2'),
        ir('Ver «Un historiador preciso» en Hechos', R.hechos + '#introduccion/15')
      ],
      pensar: 'Cuando algo de la Biblia parece no encajar con la historia, ¿tu primera reacción es dudar del texto o investigar con paciencia? ¿Qué te enseña el caso de Lisanias?'
    },
    {
      id: 'hoy', n: 'Por qué estudiar Lucas hoy', ref: 'Lucas 4:18-19; 15:1-2; 19:10; 24:49', fecha: 60,
      visual: [
        cita('Lucas 19:10', '@@lc/19/10'),
        tabla({
          titulo: 'Cómo recorrer este estudio',
          cab: ['Ruta', 'Qué encontrarás'],
          filas: [
            ['I. Introducción y trasfondo', 'Autor, fecha, propósito y mundo de Lucas'],
            ['II. Visión panorámica', 'Estructura, bosquejo, palabras clave y grandes temas'],
            ['III. Comentario', 'Los 24 capítulos en 32 estaciones'],
            ['IV. Teología', 'Lo que Lucas enseña sobre Cristo, el Espíritu, la salvación y el reino'],
            ['Mapas', 'De Nazaret a Belén, Galilea, el viaje a Jerusalén y Emaús'],
            ['Temas', 'Parábolas, mujeres, oración, los cánticos y el puente a Hechos']
          ]
        })
      ],
      texto: [
        'Lucas es el evangelio más largo y uno de los más queridos. Es el que más se lee en Navidad, el que tiene las parábolas más conocidas y el que más habla del Espíritu Santo y de la oración. Hay muchas razones para estudiarlo con calma.',
        { h: 'Un Salvador para los que están fuera' },
        'Los fariseos murmuraban: «Este a los pecadores recibe, y con ellos come» (Lc 15:2). Lucas responde con tres parábolas de cosas perdidas que son encontradas. En su evangelio, el amor de Dios alcanza a samaritanos, publicanos, mujeres despreciadas, leprosos, pobres y un ladrón crucificado. Hoy, cuando tantos se sienten fuera, Lucas muestra que nadie está demasiado lejos.',
        { h: 'Un Cristo lleno del Espíritu' },
        'Lucas muestra a Jesús concebido por el Espíritu, ungido por el Espíritu en el bautismo, «lleno del Espíritu Santo» en el desierto y volviendo «en el poder del Espíritu» a Galilea (Lc 4:1, 14). Al final promete el mismo poder a sus discípulos (Lc 24:49). El evangelio prepara Pentecostés.',
        { h: 'Una vida de oración y de alegría' },
        'Jesús ora en los momentos decisivos, y Lucas lo cuenta más que nadie. Su evangelio comienza con cánticos y termina con los discípulos «alabando y bendiciendo a Dios» (Lc 24:53).',
        { h: 'Cómo usar este recurso' },
        'Las rutas I y II dan el marco. La ruta III recorre el libro capítulo por capítulo: conviene leer en la Biblia el pasaje de cada estación antes de leer el comentario. La ruta IV reúne la enseñanza del libro. Las rutas de mapas y de temas profundizan en lo propio de Lucas, y la última conduce a Hechos. Para ver cada pasaje junto a los otros evangelios, los botones llevan a la Armonía.',
        ir('Abrir la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'Jesús vino «a buscar y a salvar lo que se había perdido» (Lc 19:10). Mientras estudias Lucas, ¿a quién de tu entorno quieres tener presente en oración?'
    }
  ];

  // ================== RUTA II. Visión panorámica ==================
  L.panorama = [
    {
      id: 'estructura', n: 'El libro de un vistazo', ref: 'Lucas 4:14; 9:51; 19:28, 41', fecha: [-7, 33],
      visual: [
        esq('lc-estructura.svg', 'Barra de los 24 capítulos de Lucas dividida en cinco partes: prólogo, nacimiento e infancia, preparación, ministerio en Galilea, viaje a Jerusalén y Jerusalén, con los versículos que marcan cada cambio', 'La estructura de Lucas: de Galilea a Jerusalén.'),
        pasos([
          { t: 'Galilea (4:14–9:50): Nazaret, Capernaúm y el lago', fecha: 30, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'capernaum', 'nain', 'betsaida', 'magdala'] } },
          { t: 'El viaje (9:51–19:27): «afirmó su rostro para ir a Jerusalén»', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'samaria', 'jerico', 'jerusalen'], trazos: ['jesus-jerusalen'] } },
          { t: 'Jerusalén (19:28–24:53): la cruz, la tumba vacía y Emaús', fecha: 33, estado: { view: V.judea, capas: ['nt-judea'], lugares: ['jerusalen', 'betania', 'emaus', 'jerico'] } }
        ])
      ],
      texto: [
        'Lucas está construido como un viaje. Comienza en el templo de Jerusalén, con el sacerdote Zacarías, y termina en el mismo templo, con los discípulos alabando a Dios. Entre esos dos puntos, Jesús nace en Belén, crece en Nazaret, sirve en Galilea y sube a Jerusalén para morir y resucitar.',
        { h: 'Cinco partes' },
        'El esquema muestra el orden del libro. Después del prólogo (1:1-4) vienen el nacimiento y la infancia de Juan y de Jesús (1:5–2:52), la preparación del ministerio con Juan el Bautista, el bautismo, la genealogía y la tentación (3:1–4:13), y el ministerio en Galilea (4:14–9:50).',
        'Entonces llega el giro: «Cuando se cumplió el tiempo en que él había de ser recibido arriba, afirmó su rostro para ir a Jerusalén» (Lc 9:51). Comienza la sección más larga y más propia de Lucas, el viaje a Jerusalén (9:51–19:27), con buena parte de sus parábolas. La última parte transcurre en Jerusalén: la entrada, la enseñanza en el templo, la pasión, la resurrección y la ascensión (19:28–24:53).',
        { h: 'Un libro que camina hacia la cruz' },
        'Casi diez capítulos de Lucas transcurren «en el camino». Lucas recuerda una y otra vez que Jesús va hacia Jerusalén (Lc 13:22; 17:11; 18:31; 19:11, 28). No es un detalle de geografía: Jesús sabe que allí debe padecer, y va con decisión. «No es posible que un profeta muera fuera de Jerusalén» (Lc 13:33).',
        'Los mapas de la estación muestran las tres grandes etapas. Hechos sigue el mismo modelo en sentido contrario: comienza en Jerusalén y avanza hacia Roma. Así, la obra completa de Lucas tiene a Jerusalén en el centro, como el lugar donde se cumple la salvación y desde donde se anuncia a todas las naciones. La ruta de mapas de este recurso recorre las etapas del evangelio con más detalle.',
        ir('Ir a la ruta de mapas', '#mapas/1')
      ],
      pensar: 'Jesús «afirmó su rostro» para ir a Jerusalén, sabiendo lo que le esperaba. ¿Qué te enseña esa determinación sobre su amor por ti?'
    },
    {
      id: 'bosquejo', n: 'Bosquejo de Lucas', ref: 'Lucas 1:1–24:53', fecha: [-7, 33],
      visual: [
        tabla({
          titulo: 'Bosquejo del evangelio de Lucas',
          cab: ['Pasaje', 'Contenido'],
          filas: [
            ['1:1-4', 'Prólogo: por qué y cómo escribe'],
            ['1:5–2:52', 'Nacimiento e infancia de Juan y de Jesús'],
            ['1:5-80', 'Dos anuncios, dos nacimientos y dos cánticos'],
            ['2:1-52', 'Belén, el templo y Nazaret'],
            ['3:1–4:13', 'Preparación: Juan, el bautismo, la genealogía y la tentación'],
            ['4:14–9:50', 'El ministerio en Galilea'],
            ['4:14–6:49', 'Nazaret, Capernaúm, los doce y el sermón del llano'],
            ['7:1–9:50', 'Fe, perdón, poder y la confesión de Pedro'],
            ['9:51–19:27', 'El viaje a Jerusalén'],
            ['9:51–13:21', 'Discipulado, oración y advertencias'],
            ['13:22–17:10', 'El banquete del reino y los perdidos encontrados'],
            ['17:11–19:27', 'La venida del reino; Zaqueo y las minas'],
            ['19:28–21:38', 'Jerusalén: la entrada, el templo y el discurso del fin'],
            ['22:1–23:56', 'La pasión: la cena, el juicio, la cruz y la sepultura'],
            ['24:1-53', 'La resurrección, Emaús, la comisión y la ascensión']
          ]
        })
      ],
      texto: [
        'Un bosquejo ayuda a no perderse en un libro de 24 capítulos y 1.151 versículos. Este sigue la estructura geográfica que Lucas mismo marca, con subdivisiones para las partes largas.',
        { h: 'Los primeros capítulos' },
        'Los capítulos 1 y 2 están construidos en paralelo: dos anuncios del ángel Gabriel (a Zacarías y a María), dos nacimientos (Juan y Jesús), y cánticos de alabanza en cada uno. Juan es grande, pero Jesús es mayor: Juan será «profeta del Altísimo» (Lc 1:76); Jesús, «Hijo del Altísimo» (Lc 1:32).',
        { h: 'Galilea' },
        'El ministerio en Galilea se abre con el sermón de Nazaret (Lc 4:16-30), que funciona como programa de todo el evangelio. Luego Jesús enseña, sana, llama a sus discípulos y escoge a los doce. La sección culmina con la confesión de Pedro, «el Cristo de Dios» (Lc 9:20), el primer anuncio de la pasión y la transfiguración.',
        { h: 'El viaje' },
        'La sección central (9:51–19:27) es un camino hacia Jerusalén lleno de enseñanza: qué significa seguir a Jesús, cómo orar, cómo usar los bienes, cómo esperar el reino. Aquí están casi todas las parábolas propias de Lucas. Termina en Jericó, con Zaqueo, y con la parábola de las minas.',
        { h: 'Jerusalén' },
        'En Jerusalén, Jesús llora sobre la ciudad, purifica el templo, enseña allí cada día y anuncia su destrucción. Luego vienen la última cena, el arresto, los juicios ante el Sanedrín, Pilato y Herodes, la cruz y la sepultura. El capítulo 24 reúne la tumba vacía, el camino a Emaús, la aparición a los once, la comisión y la ascensión.',
        'Este bosquejo es la base de la ruta III, que recorre el libro en 32 estaciones.',
        ir('Ir al comentario: Lucas 1:1-25', '#comentario/1')
      ],
      pensar: 'Después de ver el bosquejo, ¿qué parte de Lucas conoces menos? Anímate a leerla completa esta semana.'
    },
    {
      id: 'palabras', n: 'Palabras clave', ref: 'Lucas 2:11; 4:21; 19:5, 9; 23:43', fecha: [-5, 33],
      visual: [
        tabla({
          titulo: 'Palabras que Lucas repite',
          cab: ['Palabra', 'Ejemplos', 'Qué destaca'],
          filas: [
            ['«Hoy»', '2:11; 4:21; 5:26; 19:5, 9; 23:43', 'La salvación llega ahora'],
            ['«Salvar», «Salvador», «salvación»', '1:47, 69; 2:11, 30; 7:50; 19:9-10', 'El propósito de la venida de Jesús'],
            ['«Gozo», «gozarse»', '1:14, 44; 2:10; 10:17, 21; 15:7, 10; 24:41, 52', 'La respuesta a la salvación'],
            ['«Glorificar a Dios»', '2:20; 5:25-26; 7:16; 13:13; 17:15; 18:43; 23:47', 'La alabanza de los que reciben a Jesús'],
            ['«Espíritu Santo»', '1:15, 35, 41, 67; 2:25-27; 3:22; 4:1, 14, 18; 11:13', 'El poder de Dios en Jesús'],
            ['«Orar», «oración»', '3:21; 5:16; 6:12; 9:18, 28-29; 11:1; 22:41', 'La comunión de Jesús con el Padre'],
            ['«Es necesario»', '2:49; 4:43; 9:22; 13:33; 22:37; 24:7, 26, 44', 'El plan de Dios que se cumple']
          ]
        }),
        cita('Lucas 23:43', '@@lc/23/43')
      ],
      texto: [
        'Una forma sencilla de descubrir lo que un autor quiere enseñar es fijarse en las palabras que repite. En Lucas hay varias que vuelven una y otra vez.',
        { h: '«Hoy»' },
        'Es una palabra pequeña con mucho peso. A los pastores: «os ha nacido hoy, en la ciudad de David, un Salvador» (Lc 2:11). En Nazaret: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21). A Zaqueo: «Hoy ha venido la salvación a esta casa» (Lc 19:9). Al ladrón en la cruz: «hoy estarás conmigo en el paraíso» (Lc 23:43). La salvación no es solo una promesa lejana; con Jesús llega ahora.',
        { h: 'Salvación' },
        'Lucas es el único de los sinópticos que llama a Jesús «Salvador» (Lc 2:11), y usa mucho el verbo «salvar». A la mujer pecadora, Jesús le dice: «Tu fe te ha salvado, vé en paz» (Lc 7:50).',
        { h: 'Gozo y alabanza' },
        'Donde llega la salvación, brota la alegría. Juan salta de gozo en el vientre de Elisabet, los ángeles anuncian «nuevas de gran gozo» (Lc 2:10), hay gozo en el cielo por un pecador que se arrepiente (Lc 15:7), y los discípulos vuelven a Jerusalén «con gran gozo» (Lc 24:52). Una y otra vez, los sanados «glorifican a Dios».',
        { h: 'Espíritu y oración' },
        'Lucas menciona al Espíritu Santo casi tanto como Mateo y Marcos juntos, y muestra a Jesús orando en momentos que los otros no registran. Son dos temas que se estudian en la ruta IV y en la ruta de la oración.',
        { h: '«Es necesario»' },
        'Esta expresión muestra que nada de lo que le pasa a Jesús es un accidente. Su sufrimiento y su gloria cumplen el plan de Dios anunciado en las Escrituras (Lc 24:26-27).'
      ],
      pensar: '«Hoy ha venido la salvación a esta casa.» ¿Qué significa para ti que la salvación no sea solo para el futuro, sino para hoy?'
    },
    {
      id: 'clave', n: 'El versículo clave', ref: 'Lucas 19:10; 4:18-19; 15:4-7; 5:31-32', fecha: [30, 33],
      visual: [
        cita('Lucas 19:1-10', '@@lc/19/1-10'),
        img('../mundo-judio/img/mj-zaqueo.webp', 'Un hombre muy bajo, con manto verde bordado, baja de un sicómoro en una calle de Jericó mientras la gente murmura', 'Zaqueo: «Hoy es necesario que pose yo en tu casa» (Lc 19:5).')
      ],
      texto: [
        'Si hubiera que resumir Lucas en un versículo, el mejor candidato está al final del encuentro con Zaqueo: «Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido» (Lc 19:10).',
        { h: 'Buscar' },
        'Jesús no espera que los perdidos lo encuentren: sale a buscarlos. En Jericó, mucha gente rodeaba a Jesús, pero Él se detuvo debajo de un árbol, levantó la mirada y llamó por su nombre al hombre más despreciado de la ciudad. Es lo que hace el pastor que deja las noventa y nueve ovejas y va «tras la que se perdió, hasta encontrarla» (Lc 15:4).',
        { h: 'Salvar' },
        'Zaqueo era rico, pero estaba perdido. Su encuentro con Jesús lo cambió por completo: repartió la mitad de sus bienes y devolvió cuatro veces lo que había robado. Jesús lo declaró «hijo de Abraham», parte del pueblo de la promesa. La salvación no es solo perdón; es una vida nueva.',
        { h: 'Lo perdido' },
        'La palabra «perdido» resume a muchos personajes de Lucas: la oveja, la moneda y el hijo de la parábola, el publicano en el templo, la mujer que lloraba a los pies de Jesús, el ladrón en la cruz. Los religiosos se escandalizaban de que Jesús anduviera con ellos. Jesús respondió: «No he venido a llamar a justos, sino a pecadores al arrepentimiento» (Lc 5:32).',
        { h: 'El programa de Nazaret' },
        'Este versículo va unido al anuncio de Nazaret, al comienzo del ministerio: Jesús fue ungido para dar buenas nuevas a los pobres, sanar a los quebrantados, pregonar libertad a los cautivos y vista a los ciegos (Lc 4:18). Lucas 4:18-19 dice qué vino a hacer Jesús; Lucas 19:10 dice por quiénes vino.',
        ir('Ver el pasaje de Zaqueo en la Armonía', R.armonia + '#zaqueo')
      ],
      pensar: 'Jesús vino a buscar lo perdido. ¿Te has visto alguna vez como Zaqueo, buscado por Jesús cuando nadie más te buscaba? ¿A quién podrías buscar tú en su nombre?'
    },
    {
      id: 'todos', n: 'Salvación para todos', ref: 'Lucas 2:10, 31-32; 3:6; 4:25-27; 13:29; 24:47', fecha: [-5, 33],
      visual: [
        tabla({
          titulo: 'Los que reciben la salvación en Lucas',
          cab: ['Grupo', 'Ejemplos'],
          filas: [
            ['Gentiles', 'La viuda de Sarepta y Naamán (4:25-27); el centurión (7:1-10); «vendrán del oriente y del occidente» (13:29)'],
            ['Samaritanos', 'El buen samaritano (10:30-37); el leproso agradecido (17:11-19)'],
            ['Publicanos y pecadores', 'Leví (5:27-32); la pecadora (7:36-50); Zaqueo (19:1-10)'],
            ['Pobres', 'Los pastores (2:8-20); «bienaventurados vosotros los pobres» (6:20); Lázaro (16:19-31)'],
            ['Mujeres', 'María, Elisabet, Ana, Marta y María, las mujeres de Galilea (8:1-3)'],
            ['Enfermos y excluidos', 'Leprosos, la mujer encorvada (13:10-17), los ciegos'],
            ['Criminales', 'El ladrón arrepentido (23:39-43)']
          ]
        }),
        cita('Lucas 2:30-32', '@@lc/2/30-32')
      ],
      texto: [
        'El gran tema de Lucas es que la salvación de Dios, anunciada a Israel, alcanza a todos los pueblos. El ángel anuncia «gran gozo, que será para todo el pueblo» (Lc 2:10), y Simeón ve en el niño la salvación preparada «en presencia de todos los pueblos» (Lc 2:31).',
        { h: 'Desde Nazaret' },
        'En su primer sermón, Jesús recordó que Elías fue enviado a una viuda de Sidón y que Eliseo limpió a Naamán, un sirio (Lc 4:25-27). Sus oyentes se llenaron de ira y quisieron despeñarlo. Desde el primer día, la apertura de Dios a los gentiles escandaliza a los que creían tener la salvación asegurada.',
        { h: 'Samaritanos' },
        'Judíos y samaritanos se despreciaban desde hacía siglos. Lucas cuenta que una aldea samaritana no quiso recibir a Jesús y que Jacobo y Juan quisieron hacer descender fuego; Jesús los reprendió (Lc 9:52-55). Poco después, el héroe de su parábola es un samaritano (Lc 10:33), y el único leproso que vuelve a dar gracias es «extranjero» (Lc 17:18).',
        { h: 'Hasta lo último de la tierra' },
        'La salvación no deja de lado a Israel: Jesús es «gloria de tu pueblo Israel» (Lc 2:32) y recibirá «el trono de David su padre» (Lc 1:32). Pero desde Israel se abre a todas las naciones. El evangelio termina con la orden de predicar «en todas las naciones, comenzando desde Jerusalén» (Lc 24:47), y Hechos cuenta cómo se cumplió.',
        'En Lucas, nadie queda fuera por su raza, su sexo, su pobreza o su pasado. Solo quedan fuera los que se creen justos y no quieren entrar, como el hermano mayor de la parábola (Lc 15:28).',
        ir('Ver «Barreras que Jesús cruzó» en El mundo judío', R.mundo + '#jesus/5')
      ],
      pensar: '¿Hay algún grupo de personas que, sin darte cuenta, consideras más lejos de Dios que otros? ¿Qué te dice Lucas sobre ellos?'
    },
    {
      id: 'marginados', n: 'Pobres, mujeres y excluidos', ref: 'Lucas 1:52-53; 4:18; 6:20-21; 7:22; 8:1-3; 14:13, 21', fecha: [-5, 33],
      visual: [
        cita('Lucas 1:51-53', '@@lc/1/51-53'),
        img('../mundo-judio/img/mj-leproso.webp', 'Un hombre con la piel marcada por la enfermedad, vestido con ropas rasgadas, se arrodilla en un camino de Galilea', 'Un leproso suplica a Jesús (Lc 5:12).')
      ],
      texto: [
        'Lucas presta una atención especial a las personas que la sociedad de su tiempo dejaba al margen. No lo hace por un interés social separado del evangelio, sino porque así es el corazón de Dios.',
        { h: 'Los pobres' },
        'María canta que Dios «quitó de los tronos a los poderosos, y exaltó a los humildes» (Lc 1:52). Jesús nace en un pesebre y los primeros en recibir la noticia son pastores. En Nazaret, Jesús anuncia que fue ungido «para dar buenas nuevas a los pobres» (Lc 4:18). En el sermón del llano dice: «Bienaventurados vosotros los pobres, porque vuestro es el reino de Dios» (Lc 6:20). Y manda invitar al banquete «a los pobres, los mancos, los cojos y los ciegos» (Lc 14:13).',
        'Los pobres de Lucas son los necesitados de verdad, pero también los humildes que dependen de Dios. La pobreza no salva a nadie, pero los pobres suelen estar más dispuestos a recibir al Salvador que los ricos satisfechos.',
        { h: 'Las mujeres' },
        'En el mundo antiguo, el testimonio de una mujer valía poco. Lucas, en cambio, comienza su evangelio con dos mujeres, María y Elisabet, y la profetisa Ana. Cuenta que varias mujeres acompañaban a Jesús y lo sostenían con sus bienes (Lc 8:1-3), que María de Betania se sentaba a sus pies como discípula (Lc 10:39), y que fueron mujeres las primeras testigos de la resurrección (Lc 24:1-10). La ruta Las mujeres en Lucas las estudia una por una.',
        { h: 'Los enfermos y los impuros' },
        'Jesús toca al leproso (Lc 5:13), deja que una mujer pecadora le lave los pies (Lc 7:38), llama «hija de Abraham» a una mujer encorvada (Lc 13:16) y sana a diez leprosos (Lc 17:11-19). Lo que los demás evitaban para no contaminarse, Jesús lo tocaba para sanar.',
        ir('Ir a la ruta Las mujeres en Lucas', '#mujeres/1'),
        ir('Ver «La enfermedad, la lepra y la exclusión» en El mundo judío', R.mundo + '#vida/8')
      ],
      pensar: 'Jesús se acercó a los que todos evitaban. ¿Quiénes son hoy los que tu comunidad tiende a dejar al margen, y cómo podría tu iglesia acercarse a ellos?'
    },
    {
      id: 'espiritu', n: 'El Espíritu Santo en Lucas', ref: 'Lucas 1:15, 35, 41, 67; 3:16, 22; 4:1, 14, 18; 11:13; 24:49', fecha: [-7, 33],
      visual: [
        tabla({
          titulo: 'El Espíritu Santo de principio a fin',
          cab: ['Pasaje', 'Qué hace el Espíritu'],
          filas: [
            ['1:15', 'Juan será lleno del Espíritu desde el vientre'],
            ['1:35', 'El Espíritu viene sobre María: concepción de Jesús'],
            ['1:41, 67', 'Elisabet y Zacarías, llenos del Espíritu, profetizan'],
            ['2:25-27', 'Simeón: el Espíritu estaba sobre él, le reveló y lo movió'],
            ['3:16', 'Jesús bautizará en Espíritu Santo y fuego'],
            ['3:22', 'El Espíritu desciende sobre Jesús en el bautismo'],
            ['4:1, 14', 'Lleno del Espíritu, en el poder del Espíritu'],
            ['4:18', '«El Espíritu del Señor está sobre mí»'],
            ['10:21', 'Jesús se regocija en el Espíritu'],
            ['11:13', 'El Padre da el Espíritu a los que se lo piden'],
            ['24:49', 'La promesa del Padre: poder desde lo alto']
          ]
        }),
        img('../dios-y-la-trinidad/img/bautismo-jesus.webp', 'Jesús, de espaldas, sale del agua del Jordán mientras desde el cielo abierto desciende una luz suave', 'El Espíritu desciende sobre Jesús en el bautismo (Lc 3:22).')
      ],
      texto: [
        'Lucas es el evangelio del Espíritu Santo. Lo menciona casi tanto como Mateo y Marcos juntos, y prepara así su segundo tomo, donde el Espíritu llena a la iglesia.',
        { h: 'Un despertar profético' },
        'Durante siglos no había surgido un profeta en Israel. En los primeros capítulos de Lucas, el Espíritu vuelve a moverse: Juan es lleno del Espíritu desde antes de nacer, Elisabet y Zacarías son llenos del Espíritu y profetizan, y el Espíritu revela a Simeón que verá al Mesías. Es el comienzo de una nueva era.',
        { h: 'Jesús, el Ungido' },
        'Jesús es concebido por el Espíritu (Lc 1:35). En el bautismo, mientras ora, el Espíritu desciende sobre Él «en forma corporal, como paloma» (Lc 3:22). Lucas lo describe «lleno del Espíritu Santo» en el desierto (Lc 4:1) y volviendo a Galilea «en el poder del Espíritu» (Lc 4:14). En Nazaret lee: «El Espíritu del Señor está sobre mí, por cuanto me ha ungido» (Lc 4:18). Jesús, siendo Dios, vivió su ministerio humano en dependencia del Espíritu.',
        { h: 'El que bautiza en el Espíritu' },
        'Juan anunció que Jesús «os bautizará en Espíritu Santo y fuego» (Lc 3:16). Jesús enseña que el Padre dará «el Espíritu Santo a los que se lo pidan» (Lc 11:13). Y antes de ascender manda a los discípulos esperar la promesa del Padre, hasta ser «investidos de poder desde lo alto» (Lc 24:49). Lo que el Espíritu hizo en Jesús, lo hará en sus discípulos. Esa promesa se cumple en Pentecostés (Hch 2:4), y sigue vigente: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hch 2:39).',
        'La ruta IV estudia esta enseñanza con más detalle. El recurso El Espíritu Santo la desarrolla en toda la Biblia.',
        ir('Ver «Ungido por el Espíritu» en La persona y obra de Cristo', R.cristo + '#encarnacion/6'),
        ir('Ver «La promesa del Espíritu» en Hechos', R.hechos + '#espiritu/1'),
        { ir: { t: 'Ver «Ungido en el Jordán» en El Espíritu Santo', a: '../../espiritu-santo/#jesus/2' } }
      ],
      pensar: 'Jesús mismo vivió su ministerio lleno del Espíritu y en su poder. Si Él dependió así del Espíritu, ¿cuánto más lo necesitamos nosotros? ¿Has pedido al Padre su Espíritu (Lc 11:13)?'
    },
    {
      id: 'oracion-gozo', n: 'Oración y alabanza', ref: 'Lucas 1:46-55; 3:21; 5:16; 6:12; 9:28-29; 11:1-13; 18:1; 24:52-53', fecha: [-7, 33],
      visual: [
        tabla({
          titulo: 'Jesús ora: momentos que solo cuenta Lucas',
          cab: ['Momento', 'Pasaje'],
          filas: [
            ['En el bautismo', '3:21'],
            ['Apartado, después de sanar', '5:16'],
            ['Toda la noche, antes de elegir a los doce', '6:12'],
            ['Antes de la confesión de Pedro', '9:18'],
            ['En la transfiguración', '9:28-29'],
            ['Antes de enseñar el Padre nuestro', '11:1'],
            ['Por Pedro, para que su fe no falte', '22:32'],
            ['Por los que lo crucificaban', '23:34'],
            ['Al morir: «en tus manos encomiendo mi espíritu»', '23:46']
          ]
        }),
        cita('Lucas 24:50-53', '@@lc/24/50-53')
      ],
      texto: [
        'Lucas es también el evangelio de la oración y de la alabanza. Comienza con un pueblo que ora en el templo a la hora del incienso (Lc 1:10) y termina con los discípulos que están «siempre en el templo, alabando y bendiciendo a Dios» (Lc 24:53).',
        { h: 'Jesús, hombre de oración' },
        'Los otros evangelios cuentan que Jesús oraba, pero Lucas lo muestra orando antes de cada momento decisivo: en el bautismo, antes de elegir a los doce, antes de preguntar quién decían que era, en el monte de la transfiguración y en Getsemaní. «Él se apartaba a lugares desiertos, y oraba» (Lc 5:16). La oración no era un adorno de su vida; era su fuente.',
        { h: 'Jesús enseña a orar' },
        'Al verlo orar, un discípulo le pidió: «Señor, enséñanos a orar» (Lc 11:1). Jesús les dio el Padre nuestro y dos parábolas que solo Lucas registra: el amigo que pide pan a medianoche (Lc 11:5-8) y la viuda que insiste ante el juez injusto, contada para enseñar «la necesidad de orar siempre, y no desmayar» (Lc 18:1). También la del fariseo y el publicano, sobre la humildad en la oración (Lc 18:9-14).',
        { h: 'Un evangelio que canta' },
        'En los dos primeros capítulos hay cuatro cánticos: el de María (el Magníficat), el de Zacarías (el Benedictus), el de los ángeles (el Gloria) y el de Simeón (el Nunc dimittis). La iglesia los ha cantado por siglos. A lo largo del libro, los que reciben la obra de Jesús «glorifican a Dios»: los pastores, el paralítico, la mujer encorvada, el leproso samaritano, el ciego de Jericó y hasta el centurión al pie de la cruz.',
        'Las rutas temáticas Jesús que ora y Los cánticos de la Navidad desarrollan estos dos temas.',
        ir('Ir a la ruta Jesús que ora', '#oracion/1'),
        ir('Ir a la ruta Los cánticos de la Navidad', '#canticos/1')
      ],
      pensar: 'Jesús oraba antes de cada decisión importante. ¿Qué decisión tienes por delante que necesita una noche de oración como la de Lucas 6:12?'
    },
    {
      id: 'riquezas', n: 'Riquezas y discipulado', ref: 'Lucas 6:24; 12:15-21; 14:33; 16:9-13, 19-31; 18:22-25; 19:8', fecha: [30, 33],
      visual: [
        tabla({
          titulo: 'Lo que Lucas enseña sobre el dinero',
          cab: ['Enseñanza', 'Pasaje'],
          filas: [
            ['«¡Ay de vosotros, ricos!»', '6:24'],
            ['«Guardaos de toda avaricia»: el rico insensato', '12:13-21'],
            ['«No os afanéis»: buscad el reino', '12:22-34'],
            ['El costo de seguir a Jesús', '14:25-33'],
            ['El mayordomo infiel: usar el dinero con sabiduría', '16:1-13'],
            ['«No podéis servir a Dios y a las riquezas»', '16:13'],
            ['El rico y Lázaro', '16:19-31'],
            ['El joven rico: «vende todo lo que tienes»', '18:18-30'],
            ['Zaqueo: la mitad de mis bienes a los pobres', '19:8'],
            ['La ofrenda de la viuda', '21:1-4']
          ]
        }),
        cita('Lucas 12:15', '@@lc/12/15')
      ],
      texto: [
        'Ningún evangelio habla tanto del dinero como Lucas. Jesús advierte a los ricos, llama a compartir con los pobres y muestra que la forma en que usamos nuestros bienes revela a quién servimos.',
        { h: 'Una advertencia seria' },
        'Jesús dice: «Mirad, y guardaos de toda avaricia; porque la vida del hombre no consiste en la abundancia de los bienes que posee» (Lc 12:15). Lo ilustra con el rico que construye graneros más grandes y muere esa misma noche (Lc 12:20). En la parábola del rico y Lázaro, el rico no es condenado por ser rico, sino por vivir para sí mientras un pobre moría a su puerta (Lc 16:19-31). «Ningún siervo puede servir a dos señores» (Lc 16:13).',
        { h: 'El dinero no es el problema; el corazón sí' },
        'Lucas no enseña que la pobreza salva ni que todo creyente deba vender todo. Al joven rico, Jesús le pidió venderlo todo porque las riquezas eran su ídolo (Lc 18:22-23). A Zaqueo no le exigió nada, y él mismo dio la mitad de sus bienes con alegría (Lc 19:8). Mujeres que tenían recursos sostenían a Jesús con sus bienes (Lc 8:3). Lo que importa es quién manda: Dios o el dinero.',
        { h: 'Generosidad' },
        'Lucas destaca la generosidad: dar sin esperar recibir (Lc 6:35), invitar a los que no pueden pagar (Lc 14:12-14), hacerse tesoros en el cielo (Lc 12:33). La viuda pobre que echó dos blancas dio más que todos, porque dio «todo el sustento que tenía» (Lc 21:4).',
        'Esta enseñanza es lo contrario del llamado evangelio de la prosperidad, que presenta la riqueza como señal segura de la bendición de Dios. En Lucas, el que se cree bendecido por sus bienes puede estar en el mayor peligro.',
        ir('Ver «Ricos y pobres» en El mundo judío', R.mundo + '#vida/6'),
        ir('Ver «El evangelio de la prosperidad» en El movimiento pentecostal', R.pentecostal + '#discernimiento/1')
      ],
      pensar: 'Jesús dijo que donde está nuestro tesoro, allí estará nuestro corazón (Lc 12:34). Si alguien revisara cómo usas tu dinero, ¿qué diría sobre a quién sirves?'
    },
    {
      id: 'propio', n: 'Lo que solo cuenta Lucas', ref: 'Lucas 1–2; 7:11-17; 10:25-42; 15; 16:19-31; 17:11-19; 19:1-10; 23:39-43; 24:13-35', fecha: [-7, 33],
      visual: [
        tabla({
          titulo: 'Las parábolas propias de Lucas',
          cab: ['Parábola', 'Pasaje', 'Tema'],
          filas: [
            ['Los dos deudores', '7:41-43', 'Amor y perdón'],
            ['El buen samaritano', '10:30-37', 'El prójimo'],
            ['El amigo a medianoche', '11:5-8', 'La oración'],
            ['El rico insensato', '12:16-21', 'La avaricia'],
            ['La higuera estéril', '13:6-9', 'El arrepentimiento'],
            ['La gran cena', '14:16-24', 'La invitación al reino'],
            ['La moneda perdida', '15:8-10', 'El gozo del cielo'],
            ['El hijo pródigo', '15:11-32', 'El amor del Padre'],
            ['El mayordomo infiel', '16:1-13', 'El uso del dinero'],
            ['El rico y Lázaro', '16:19-31', 'La eternidad'],
            ['La viuda y el juez', '18:1-8', 'La perseverancia'],
            ['El fariseo y el publicano', '18:9-14', 'La humildad']
          ],
          nota: 'La gran cena tiene semejanzas con la fiesta de bodas de Mateo 22, pero muchos la consideran una parábola distinta.'
        }),
        img('lc-hijo-prodigo.webp', 'Un padre anciano corre por un camino polvoriento y abraza a su hijo joven, delgado y harapiento, ante una casa de campo de piedra', 'El padre corre a recibir a su hijo (Lc 15:20).')
      ],
      texto: [
        'Hay tesoros del evangelio que solo conocemos gracias a Lucas. La tabla reúne las parábolas que no aparecen en los otros evangelios; a ellas se suman muchos relatos propios.',
        { h: 'Relatos inolvidables' },
        'Solo Lucas cuenta el anuncio a Zacarías, la visita de María a Elisabet, la Navidad de los pastores, la presentación en el templo y a Jesús a los doce años. Solo él narra la resurrección del hijo de la viuda de Naín, la mujer pecadora en casa de Simón, la visita a Marta y María, la sanidad de la mujer encorvada y de los diez leprosos, y el encuentro con Zaqueo.',
        'En la pasión, solo Lucas cuenta que Jesús sanó la oreja del siervo del sumo sacerdote (Lc 22:51), que fue enviado a Herodes (Lc 23:6-12), que habló a las mujeres que lloraban (Lc 23:27-31) y que perdonó a sus verdugos y prometió el paraíso al ladrón arrepentido (Lc 23:34, 43). Y al final, solo él narra el camino a Emaús.',
        { h: 'Las parábolas' },
        'Las parábolas propias de Lucas son de las más conocidas de la Biblia. Muchas tienen personajes con rostro y una historia que conmueve: un samaritano que se detiene, un padre que corre, un mendigo que tiene nombre. Varias terminan con una pregunta abierta, como la del hijo mayor que no quiere entrar a la fiesta, que obliga al lector a responder.',
        { h: 'Un hilo común' },
        'Casi todo este material comparte el mismo mensaje: Dios busca a los perdidos, recibe a los que se arrepienten y se alegra cuando vuelven. Al mismo tiempo, advierte a los que se creen justos y a los que confían en sus riquezas.',
        'La ruta Las parábolas de Lucas estudia siete de ellas con detalle.',
        ir('Ir a la ruta Las parábolas de Lucas', '#parabolas/1')
      ],
      pensar: 'De todo lo que solo cuenta Lucas, ¿qué relato o parábola ha marcado más tu vida? ¿Por qué crees que Dios quiso que quedara escrito?'
    }
  ];
})();
