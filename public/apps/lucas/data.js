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
   - El Espíritu Santo (nº 11) está «en preparación».
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
  const HAY = new Set(["lc-buen-samaritano.webp", "lc-diez-leprosos.webp", "lc-discurso.svg", "lc-dos-tomos.svg", "lc-elisabet-maria.webp", "lc-emaus.webp", "lc-estructura.svg", "lc-fariseo-publicano.webp", "lc-genealogias.svg", "lc-hijo-prodigo.webp", "lc-jesus-ora.webp", "lc-mujeres-galilea.webp", "lc-pastores.webp", "lc-pecadora-simon.webp", "lc-pesca-milagrosa.webp", "lc-rico-insensato.webp", "lc-rico-lazaro.webp", "lc-ultima-cena.webp", "lc-viaje.svg", "lc-viuda-juez.webp"]);
  // Imágenes de otros recursos (../otro/img/…) que ya existen; una que todavía no se ha generado queda sin src.
  const EXT = new Set(["../cronologia-nuevo-testamento/img/cr-jesus-doce.webp", "../cronologia-nuevo-testamento/img/cr-pascua-corderos.webp", "../cronologia-nuevo-testamento/img/cr-zacarias-incienso.webp", "../dinastia-herodes/img/hd-juan-antipas.webp", "../dios-y-la-trinidad/img/bautismo-jesus.webp", "../entre-los-testamentos/img/simeon-templo.webp", "../evangelios/sinoptico/img/esquema-tres-circulos.svg", "../evangelios/sinoptico/img/sin-lucas-testigos.webp", "../hechos/img/hechos-ascension.webp", "../hechos/img/hechos-cojo-hermosa.webp", "../hechos/img/hechos-lucas-escribe.webp", "../hechos/img/hechos-teofilo.webp", "../imperio-romano/img/roma-censo-belen.webp", "../mundo-judio/img/foto-barca-galilea.jpg", "../mundo-judio/img/foto-piedra-pilato.jpg", "../mundo-judio/img/mj-banquete-levi.webp", "../mundo-judio/img/mj-boda-procesion.webp", "../mundo-judio/img/mj-espigas-sabado.webp", "../mundo-judio/img/mj-leproso.webp", "../mundo-judio/img/mj-marta-maria.webp", "../mundo-judio/img/mj-multitud-rey.webp", "../mundo-judio/img/mj-nain-cortejo.webp", "../mundo-judio/img/mj-sermon-ladera.webp", "../mundo-judio/img/mj-zaqueo.webp", "../palabra-de-dios/img/jesus-nazaret.webp", "../persona-y-obra-de-cristo/img/belen-nacimiento.webp", "../persona-y-obra-de-cristo/img/esquema-reino.svg", "../persona-y-obra-de-cristo/img/getsemani.webp", "../persona-y-obra-de-cristo/img/golgota.webp", "../persona-y-obra-de-cristo/img/transfiguracion.webp", "../persona-y-obra-de-cristo/img/tumba-vacia.webp", "../tierra-de-israel/img/engadi.webp", "../tierra-de-israel/img/esquema-perfil.svg", "../tierra-de-israel/img/galilea.webp", "../tierra-de-israel/img/peregrinos.webp"]);
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
        cita('Colosenses 4:14', 'Os saluda Lucas el médico amado, y Demas.')
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
        cita('Lucas 1:1-4', 'Puesto que ya muchos han tratado de poner en orden la historia de las cosas que entre nosotros han sido ciertísimas, tal como nos lo enseñaron los que desde el principio lo vieron con sus ojos, y fueron ministros de la palabra, me ha parecido también a mí, después de haber investigado con diligencia todas las cosas desde su origen, escribírtelas por orden, oh excelentísimo Teófilo, para que conozcas bien la verdad de las cosas en las cuales has sido instruido.'),
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
        cita('Lucas 3:1-2', 'En el año decimoquinto del imperio de Tiberio César, siendo gobernador de Judea Poncio Pilato, y Herodes tetrarca de Galilea, y su hermano Felipe tetrarca de Iturea y de la provincia de Traconite, y Lisanias tetrarca de Abilinia, y siendo sumos sacerdotes Anás y Caifás, vino palabra de Dios a Juan, hijo de Zacarías, en el desierto.'),
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
        cita('Lucas 2:30-32', 'Porque han visto mis ojos tu salvación, La cual has preparado en presencia de todos los pueblos; Luz para revelación a los gentiles, Y gloria de tu pueblo Israel.')
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
        cita('Lucas 2:10-11', 'Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor.')
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
        cita('Lucas 2:1-3', 'Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado. Este primer censo se hizo siendo Cirenio gobernador de Siria. E iban todos para ser empadronados, cada uno a su ciudad.'),
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
        cita('Lucas 19:10', 'Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.'),
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
        cita('Lucas 23:43', 'Entonces Jesús le dijo: De cierto te digo que hoy estarás conmigo en el paraíso.')
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
        cita('Lucas 19:1-10', 'Habiendo entrado Jesús en Jericó, iba pasando por la ciudad. Y sucedió que un varón llamado Zaqueo, que era jefe de los publicanos, y rico, procuraba ver quién era Jesús; pero no podía a causa de la multitud, pues era pequeño de estatura. Y corriendo delante, subió a un árbol sicómoro para verle; porque había de pasar por allí. Cuando Jesús llegó a aquel lugar, mirando hacia arriba, le vio, y le dijo: Zaqueo, date prisa, desciende, porque hoy es necesario que pose yo en tu casa. Entonces él descendió aprisa, y le recibió gozoso. Al ver esto, todos murmuraban, diciendo que había entrado a posar con un hombre pecador. Entonces Zaqueo, puesto en pie, dijo al Señor: He aquí, Señor, la mitad de mis bienes doy a los pobres; y si en algo he defraudado a alguno, se lo devuelvo cuadruplicado. Jesús le dijo: Hoy ha venido la salvación a esta casa; por cuanto él también es hijo de Abraham. Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.'),
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
        cita('Lucas 2:30-32', 'Porque han visto mis ojos tu salvación, La cual has preparado en presencia de todos los pueblos; Luz para revelación a los gentiles, Y gloria de tu pueblo Israel.')
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
        cita('Lucas 1:51-53', 'Hizo proezas con su brazo; Esparció a los soberbios en el pensamiento de sus corazones. Quitó de los tronos a los poderosos, Y exaltó a los humildes. A los hambrientos colmó de bienes, Y a los ricos envió vacíos.'),
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
        'La ruta IV estudia esta enseñanza con más detalle. El recurso El Espíritu Santo, en preparación, la desarrollará en toda la Biblia.',
        ir('Ver «Ungido por el Espíritu» en La persona y obra de Cristo', R.cristo + '#encarnacion/6'),
        ir('Ver «La promesa del Espíritu» en Hechos', R.hechos + '#espiritu/1')
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
        cita('Lucas 24:50-53', 'Y los sacó fuera hasta Betania, y alzando sus manos, los bendijo. Y aconteció que bendiciéndolos, se separó de ellos, y fue llevado arriba al cielo. Ellos, después de haberle adorado, volvieron a Jerusalén con gran gozo; y estaban siempre en el templo, alabando y bendiciendo a Dios. Amén.')
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
        cita('Lucas 12:15', 'Y les dijo: Mirad, y guardaos de toda avaricia; porque la vida del hombre no consiste en la abundancia de los bienes que posee.')
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
/* Lucas · parte 2: ruta III, Comentario (Lucas 1–9:50) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  L.comentario = [
    {
      id: 'c1a', n: 'Capítulo 1 (I): el anuncio a Zacarías', ref: 'Lucas 1:1-25; Malaquías 4:5-6', fecha: -7,
      visual: [
        img('../cronologia-nuevo-testamento/img/cr-zacarias-incienso.webp', 'Un sacerdote anciano con vestiduras blancas de lino ofrece incienso en el altar de oro del santuario, iluminado por el candelero', 'Zacarías ofrece el incienso en el Lugar Santo (Lc 1:9).'),
        cita('Lucas 1:13-17', 'Pero el ángel le dijo: Zacarías, no temas; porque tu oración ha sido oída, y tu mujer Elisabet te dará a luz un hijo, y llamarás su nombre Juan. Y tendrás gozo y alegría, y muchos se regocijarán de su nacimiento; porque será grande delante de Dios. No beberá vino ni sidra, y será lleno del Espíritu Santo, aun desde el vientre de su madre. Y hará que muchos de los hijos de Israel se conviertan al Señor Dios de ellos. E irá delante de él con el espíritu y el poder de Elías, para hacer volver los corazones de los padres a los hijos, y de los rebeldes a la prudencia de los justos, para preparar al Señor un pueblo bien dispuesto.'),
        tabla({
          titulo: 'Juan, el que prepara el camino',
          cab: ['Lo que dice el ángel', 'Lo que anunciaba el Antiguo Testamento'],
          filas: [
            ['«Irá delante de él con el espíritu y el poder de Elías» (1:17)', '«Yo os envío el profeta Elías» (Mal 4:5)'],
            ['«Hacer volver los corazones de los padres a los hijos» (1:17)', '«El hará volver el corazón de los padres hacia los hijos» (Mal 4:6)'],
            ['No beberá vino ni sidra (1:15)', 'Como un nazareo consagrado a Dios (Nm 6:3)'],
            ['Nace de padres ancianos y una madre estéril (1:7)', 'Como Isaac (Gn 18:11) y Samuel (1 S 1:2)']
          ]
        })
      ],
      texto: [
        'Después del prólogo, Lucas abre su relato en el lugar más santo de Israel. Zacarías, sacerdote del turno de Abías, y su esposa Elisabet eran «justos delante de Dios», pero no tenían hijos, «porque Elisabet era estéril, y ambos eran ya de edad avanzada» (Lc 1:6-7).',
        { h: 'En el santuario' },
        'Había tantos sacerdotes que ofrecer el incienso en el Lugar Santo era un honor que muchos recibían una sola vez en la vida, por sorteo. Ese día le tocó a Zacarías. Mientras el pueblo oraba afuera, se le apareció un ángel junto al altar. Era Gabriel, el mismo que había hablado a Daniel sobre el tiempo del Mesías (Dn 9:21-25).',
        { h: 'Un hijo con una misión' },
        'El ángel le dijo: «tu oración ha sido oída, y tu mujer Elisabet te dará a luz un hijo, y llamarás su nombre Juan» (Lc 1:13). Juan significa «Dios es misericordioso». Sería lleno del Espíritu Santo desde el vientre de su madre e iría delante del Señor «con el espíritu y el poder de Elías» (Lc 1:17). El último libro del Antiguo Testamento terminaba con esa promesa (Mal 4:5-6). Después de siglos sin profetas, Dios volvía a hablar.',
        { h: 'La duda y el silencio' },
        'Zacarías preguntó: «¿En qué conoceré esto?» (Lc 1:18). Pedía una señal porque le parecía imposible. Gabriel le dio una: quedaría mudo hasta que se cumpliera lo anunciado. Al salir, no pudo dar al pueblo la bendición sacerdotal. Elisabet concibió, y dijo: «Así ha hecho conmigo el Señor en los días en que se dignó quitar mi afrenta entre los hombres» (Lc 1:25).',
        'El evangelio comienza con una pareja fiel, una oración que parecía olvidada y un Dios que responde a su tiempo.',
        ir('Ver «Zacarías y el turno de Abías» en Cronología del Nuevo Testamento', R.crono + '#nacimiento/1'),
        ir('Ver el pasaje en la Armonía', R.armonia + '#anuncio-zacarias')
      ],
      pensar: 'Zacarías y Elisabet siguieron sirviendo a Dios aunque su oración más profunda parecía sin respuesta. ¿Hay alguna oración que hayas dejado de hacer? ¿Qué te enseña este relato?'
    },
    {
      id: 'c1b', n: 'Capítulo 1 (II): el anuncio a María y el Magníficat', ref: 'Lucas 1:26-56; Isaías 7:14; 2 Samuel 7:12-16', fecha: [-7, -6],
      visual: [
        img('lc-elisabet-maria.webp', 'Una joven de velo gris azulado abraza en la puerta de una casa de piedra de las montañas de Judea a una mujer anciana embarazada, que la recibe con alegría', 'María visita a Elisabet (Lc 1:39-45).'),
        cita('Lucas 1:30-35', 'Entonces el ángel le dijo: María, no temas, porque has hallado gracia delante de Dios. Y ahora, concebirás en tu vientre, y darás a luz un hijo, y llamarás su nombre JESÚS. Este será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin. Entonces María dijo al ángel: ¿Cómo será esto? pues no conozco varón. Respondiendo el ángel, le dijo: El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios.'),
        tabla({
          titulo: 'Dos anuncios',
          cab: ['', 'A Zacarías (1:5-25)', 'A María (1:26-38)'],
          filas: [
            ['Lugar', 'El templo de Jerusalén', 'Nazaret, una aldea de Galilea'],
            ['Persona', 'Un sacerdote anciano', 'Una joven desposada'],
            ['Imposible humano', 'Una mujer estéril y anciana', 'Una virgen'],
            ['Pregunta', '«¿En qué conoceré esto?» (pide una señal)', '«¿Cómo será esto?» (pregunta el modo)'],
            ['Respuesta', 'Queda mudo', '«Hágase conmigo conforme a tu palabra»']
          ]
        })
      ],
      texto: [
        'Seis meses después, Gabriel fue enviado a Nazaret, a una virgen desposada con José, de la casa de David. El contraste con el anuncio anterior es intencional: ya no el templo, sino una aldea sin importancia; ya no un sacerdote, sino una joven sencilla.',
        { h: 'El Hijo del Altísimo' },
        'El ángel anunció que María concebiría y daría a luz un hijo, que llamaría Jesús. Sería «grande», llamado «Hijo del Altísimo», recibiría «el trono de David su padre» y reinaría sobre la casa de Jacob para siempre (Lc 1:32-33). Son las palabras de la promesa a David (2 S 7:12-16). Ese reino eterno incluye el gobierno futuro de Cristo sobre Israel y las naciones, que todavía espera su cumplimiento pleno.',
        'María preguntó cómo sería, puesto que no conocía varón. El ángel respondió: «El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios» (Lc 1:35). Jesús fue concebido sin padre humano, como había anunciado Isaías (Is 7:14). «Porque nada hay imposible para Dios» (Lc 1:37).',
        { h: '«Hágase conmigo»' },
        'María no pidió señales. Respondió: «He aquí la sierva del Señor; hágase conmigo conforme a tu palabra» (Lc 1:38). Su fe es un modelo para todo creyente.',
        { h: 'La visita y el cántico' },
        'María fue a las montañas de Judea a visitar a Elisabet. Al oír su saludo, la criatura saltó en el vientre de Elisabet, y ella, llena del Espíritu Santo, la llamó «la madre de mi Señor» (Lc 1:43). Entonces María cantó el Magníficat (Lc 1:46-55): «Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador». María misma llama a Dios su Salvador: es una creyente que necesita la salvación, bienaventurada porque creyó (Lc 1:45). El cántico celebra al Dios que exalta a los humildes y cumple su promesa a Abraham.',
        ir('Ver «Nacido de una virgen» en La persona y obra de Cristo', R.cristo + '#encarnacion/2'),
        ir('Ir a la ruta Los cánticos de la Navidad', '#canticos/2')
      ],
      pensar: 'María dijo «hágase conmigo conforme a tu palabra» sin saber todo lo que eso le costaría. ¿Qué palabra de Dios necesitas recibir hoy con esa misma disposición?'
    },
    {
      id: 'c1c', n: 'Capítulo 1 (III): el nacimiento de Juan y el Benedictus', ref: 'Lucas 1:57-80; Génesis 17:12; Isaías 9:2; Malaquías 4:2', fecha: -6,
      visual: [
        cita('Lucas 1:68-75', 'Bendito el Señor Dios de Israel, Que ha visitado y redimido a su pueblo, Y nos levantó un poderoso Salvador En la casa de David su siervo, Como habló por boca de sus santos profetas que fueron desde el principio; Salvación de nuestros enemigos, y de la mano de todos los que nos aborrecieron; Para hacer misericordia con nuestros padres, Y acordarse de su santo pacto; Del juramento que hizo a Abraham nuestro padre, Que nos había de conceder Que, librados de nuestros enemigos, Sin temor le serviríamos En santidad y en justicia delante de él, todos nuestros días.'),
        mapa({ view: V.judea, capas: ['nt-judea'], lugares: ['jerusalen', 'belen', 'montana-judea', 'desierto-judea', 'hebron'] }),
        tabla({
          titulo: 'El cántico de Zacarías en dos partes',
          cab: ['Versículos', 'Tema'],
          filas: [
            ['1:68-75', 'Bendito Dios, que cumple su pacto con David y con Abraham'],
            ['1:76-79', 'Tú, niño, serás profeta del Altísimo: preparar el camino del Señor'],
            ['1:80', 'El niño crece y se fortalece en espíritu, en los desiertos']
          ]
        })
      ],
      texto: [
        'Se cumplió el tiempo y Elisabet dio a luz un hijo. Sus vecinos y parientes se alegraron con ella, porque «Dios había engrandecido para con ella su misericordia» (Lc 1:58).',
        { h: '«Juan es su nombre»' },
        'Al octavo día, según la ley (Gn 17:12), vinieron a circuncidar al niño. Querían llamarlo Zacarías, como su padre, pero Elisabet dijo: «No; se llamará Juan» (Lc 1:60). Nadie en la familia se llamaba así. Le preguntaron por señas al padre, y él pidió una tablilla y escribió: «Juan es su nombre» (Lc 1:63). En ese momento se le soltó la lengua y comenzó a bendecir a Dios. La obediencia abrió la boca que la duda había cerrado.',
        'El temor se extendió por toda la montaña de Judea, y todos se preguntaban: «¿Quién, pues, será este niño?» (Lc 1:66).',
        { h: 'El Benedictus' },
        'Lleno del Espíritu Santo, Zacarías profetizó. Su cántico, llamado Benedictus por su primera palabra en latín, tiene dos partes. La primera alaba a Dios porque «ha visitado y redimido a su pueblo» y ha levantado «un poderoso Salvador en la casa de David» (Lc 1:68-69). Llama a recordar «su santo pacto; del juramento que hizo a Abraham» (Lc 1:72-73). Lo que Dios prometió siglos atrás está a punto de cumplirse.',
        'La segunda parte se dirige al niño: «Y tú, niño, profeta del Altísimo serás llamado; porque irás delante de la presencia del Señor, para preparar sus caminos» (Lc 1:76). Juan anunciaría el perdón de los pecados, y después «nos visitó desde lo alto la aurora», para dar luz a los que habitan en tinieblas (Lc 1:78-79; véase Is 9:2; Mal 4:2).',
        { h: 'En el desierto' },
        'El capítulo termina con una nota breve: el niño crecía, se fortalecía en espíritu y estuvo en lugares desiertos hasta el día de su manifestación a Israel (Lc 1:80). Dios lo preparó en lo escondido.',
        ir('Ver el pasaje en la Armonía', R.armonia + '#profecia-zacarias'),
        ir('Ir al cántico de Zacarías en Los cánticos de la Navidad', '#canticos/3')
      ],
      pensar: 'Zacarías recuperó la voz cuando obedeció y escribió el nombre que Dios había dado. ¿Hay alguna obediencia pendiente en tu vida que pueda estar «cerrando tu boca» para la alabanza?'
    },
    {
      id: 'c2a', n: 'Capítulo 2 (I): el nacimiento de Jesús y los pastores', ref: 'Lucas 2:1-20; Miqueas 5:2', fecha: [-6, -5],
      visual: [
        img('lc-pastores.webp', 'De noche, en un campo de pastoreo de las colinas de Belén, unos pastores con mantos de lana se cubren los ojos ante una luz intensa que baja del cielo sobre su rebaño', 'Los pastores en el campo de Belén (Lc 2:8-9).'),
        img('../persona-y-obra-de-cristo/img/belen-nacimiento.webp', 'En un establo excavado en la roca, una joven madre contempla a un recién nacido envuelto en pañales en un pesebre de piedra, junto a José', 'Lo envolvió en pañales y lo acostó en un pesebre (Lc 2:7).'),
        cita('Lucas 2:8-14', 'Había pastores en la misma región, que velaban y guardaban las vigilias de la noche sobre su rebaño. Y he aquí, se les presentó un ángel del Señor, y la gloria del Señor los rodeó de resplandor; y tuvieron gran temor. Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor. Esto os servirá de señal: Hallaréis al niño envuelto en pañales, acostado en un pesebre. Y repentinamente apareció con el ángel una multitud de las huestes celestiales, que alababan a Dios, y decían: ¡Gloria a Dios en las alturas, Y en la tierra paz, buena voluntad para con los hombres!'),
        pasos([
          { t: 'De Nazaret a Belén: unos 150 kilómetros (Lc 2:4)', fecha: -5, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'], trazos: ['jesus-belen'] } }
        ])
      ],
      texto: [
        'Lucas une el nacimiento de Jesús a la historia del imperio: un edicto de Augusto ordenó empadronar a todo el mundo, y José subió de Nazaret a Belén con María, que estaba encinta (Lc 2:1-5). Un decreto del hombre más poderoso de la tierra llevó a María al lugar que Miqueas había señalado para el nacimiento del Mesías (Mi 5:2).',
        { h: 'En un pesebre' },
        'Mientras estaban allí, María dio a luz a su hijo primogénito, «y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en el mesón» (Lc 2:7). La palabra traducida «mesón» puede referirse a la habitación de huéspedes de una casa. Muchas casas de Belén tenían un espacio para los animales, a veces en una cueva. El Hijo del Altísimo nació en el lugar más humilde.',
        { h: 'Buenas noticias para unos pastores' },
        'Esa noche había pastores velando sus rebaños. Los pastores eran gente pobre y poco considerada, pero a ellos les anunció el ángel: «He aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor» (Lc 2:10-11). Tres títulos en una frase: Salvador, Cristo (el Mesías) y Señor.',
        'Augusto se hacía llamar salvador y portador de la paz. Pero la verdadera paz la anuncia el ejército celestial: «¡Gloria a Dios en las alturas, y en la tierra paz, buena voluntad para con los hombres!» (Lc 2:14).',
        { h: 'Testigos y adoradores' },
        'Los pastores fueron aprisa, hallaron al niño y contaron lo que les habían dicho. Volvieron «glorificando y alabando a Dios» (Lc 2:20). Fueron los primeros evangelistas. María, en cambio, «guardaba todas estas cosas, meditándolas en su corazón» (Lc 2:19).',
        ir('Ver «¿Cuándo nació Jesús?» en Cronología del Nuevo Testamento', R.crono + '#nacimiento/4'),
        ir('Ver «Jesús nace bajo Augusto» en El imperio romano', R.romano + '#biblia/2'),
        ir('Ver el pasaje en la Armonía', R.armonia + '#pastores')
      ],
      pensar: 'Dios anunció el nacimiento de su Hijo primero a unos pastores. ¿Qué te dice eso sobre a quiénes quiere alcanzar Dios, y sobre cómo te ve a ti?'
    },
    {
      id: 'c2b', n: 'Capítulo 2 (II): Simeón, Ana y Jesús a los doce años', ref: 'Lucas 2:21-52; Levítico 12:2-8; Éxodo 13:2', fecha: [-5, 8],
      visual: [
        img('../entre-los-testamentos/img/simeon-templo.webp', 'En un atrio del templo, un anciano de barba blanca sostiene en brazos a un recién nacido y levanta la mirada al cielo, junto a una joven madre', 'Simeón toma al niño en sus brazos (Lc 2:28).'),
        img('../cronologia-nuevo-testamento/img/cr-jesus-doce.webp', 'Un muchacho de unos doce años, visto de espaldas, sentado entre maestros de la ley que lo escuchan en un pórtico del templo', 'Jesús entre los doctores (Lc 2:46).'),
        cita('Lucas 2:46-52', 'Y aconteció que tres días después le hallaron en el templo, sentado en medio de los doctores de la ley, oyéndoles y preguntándoles. Y todos los que le oían, se maravillaban de su inteligencia y de sus respuestas. Cuando le vieron, se sorprendieron; y le dijo su madre: Hijo, ¿por qué nos has hecho así? He aquí, tu padre y yo te hemos buscado con angustia. Entonces él les dijo: ¿Por qué me buscabais? ¿No sabíais que en los negocios de mi Padre me es necesario estar? Mas ellos no entendieron las palabras que les habló. Y descendió con ellos, y volvió a Nazaret, y estaba sujeto a ellos. Y su madre guardaba todas estas cosas en su corazón. Y Jesús crecía en sabiduría y en estatura, y en gracia para con Dios y los hombres.')
      ],
      texto: [
        'José y María cumplieron la ley con su hijo. Al octavo día lo circuncidaron y le pusieron el nombre de Jesús. A los cuarenta días subieron al templo para la purificación de María y para presentar al primogénito al Señor (Lv 12:2-8; Éx 13:2). Ofrecieron «un par de tórtolas, o dos palominos» (Lc 2:24), la ofrenda que la ley permitía a los pobres.',
        { h: 'Simeón' },
        'En Jerusalén vivía Simeón, un hombre justo y piadoso que esperaba «la consolación de Israel». El Espíritu Santo estaba sobre él y le había revelado que no moriría sin ver al Ungido del Señor. Movido por el Espíritu, vino al templo, tomó al niño en brazos y bendijo a Dios: «Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación» (Lc 2:29-30).',
        'Luego dijo a María una palabra seria: el niño sería señal de contradicción, para caída y levantamiento de muchos en Israel, «y una espada traspasará tu misma alma» (Lc 2:35). La alegría del nacimiento ya anuncia la cruz.',
        { h: 'Ana' },
        'Llegó también Ana, una profetisa muy anciana, viuda, que «no se apartaba del templo, sirviendo de noche y de día con ayunos y oraciones» (Lc 2:37). Dio gracias a Dios y hablaba del niño a todos los que esperaban la redención en Jerusalén. Un hombre y una mujer, los dos movidos por Dios, dan testimonio de Jesús.',
        { h: 'Jesús a los doce años' },
        'Es el único relato de la niñez de Jesús en los evangelios. En una Pascua, Jesús se quedó en Jerusalén sin que sus padres lo supieran. Lo hallaron después de tres días en el templo, sentado entre los doctores, oyéndoles y preguntándoles. A su madre le respondió: «¿No sabíais que en los negocios de mi Padre me es necesario estar?» (Lc 2:49). Son sus primeras palabras en el evangelio, y en ellas llama a Dios «mi Padre».',
        'Después volvió a Nazaret y estaba sujeto a ellos. «Y Jesús crecía en sabiduría y en estatura, y en gracia para con Dios y los hombres» (Lc 2:52).',
        ir('Ver «Jesús a los doce años y los años en Nazaret» en Cronología', R.crono + '#nacimiento/6'),
        ir('Ver «Crecía en sabiduría» en La persona y obra de Cristo', R.cristo + '#textos/4')
      ],
      pensar: 'Simeón y Ana esperaron muchos años en oración hasta ver la promesa cumplida. ¿Qué promesa de Dios estás esperando, y cómo puedes seguir esperando con fe?'
    },
    {
      id: 'c3', n: 'Capítulo 3: Juan el Bautista, el bautismo y la genealogía', ref: 'Lucas 3:1-38; Isaías 40:3-5; Mateo 1:1-16', fecha: [28, 29],
      visual: [
        img('../dinastia-herodes/img/hd-juan-antipas.webp', 'Juan el Bautista, delgado y vestido con pelo de camello, señala con firmeza a Herodes Antipas, que lo escucha con gesto incómodo en un salón de su palacio', 'Juan reprende a Herodes (Lc 3:19).'),
        esq('lc-genealogias.svg', 'Dos columnas de nombres: la genealogía de Mateo desciende de Abraham por David y Salomón hasta José; la de Lucas sube desde Jesús por Natán, David y Abraham hasta Adán y Dios', 'Las genealogías de Mateo y Lucas: dos caminos desde David.'),
        cita('Lucas 3:21-23', 'Aconteció que cuando todo el pueblo se bautizaba, también Jesús fue bautizado; y orando, el cielo se abrió, y descendió el Espíritu Santo sobre él en forma corporal, como paloma, y vino una voz del cielo que decía: Tú eres mi Hijo amado; en ti tengo complacencia. Jesús mismo al comenzar su ministerio era como de treinta años, hijo, según se creía, de José, hijo de Elí,')
      ],
      texto: [
        'En el año quince de Tiberio, la palabra de Dios vino a Juan en el desierto. Juan predicaba «el bautismo del arrepentimiento para perdón de pecados» (Lc 3:3), y Lucas cita a Isaías hasta llegar a «verá toda carne la salvación de Dios» (Lc 3:6).',
        { h: 'Frutos de arrepentimiento' },
        'Juan no hablaba de un arrepentimiento solo de palabras. A la multitud le dijo que el que tenía dos túnicas diera al que no tenía; a los publicanos, que no cobraran más de lo ordenado; a los soldados, que no extorsionaran a nadie (Lc 3:11-14). Solo Lucas registra estos consejos concretos. Cuando pensaban que él era el Cristo, Juan anunció a uno más poderoso: «él os bautizará en Espíritu Santo y fuego» (Lc 3:16). Por reprender a Herodes Antipas, terminó en la cárcel (Lc 3:19-20).',
        { h: 'El bautismo de Jesús' },
        'Lucas cuenta el bautismo en pocas palabras y agrega un detalle: Jesús estaba orando cuando el cielo se abrió, el Espíritu Santo descendió sobre Él y vino una voz: «Tú eres mi Hijo amado; en ti tengo complacencia» (Lc 3:22). El Padre habla, el Hijo ora y el Espíritu desciende.',
        { h: 'La genealogía' },
        'Jesús tenía «como de treinta años» (Lc 3:23). Lucas da entonces su genealogía, en orden inverso a la de Mateo, subiendo hasta «Adán, hijo de Dios» (Lc 3:38). Desde David, las dos listas siguen caminos distintos: Mateo pasa por Salomón; Lucas, por Natán, otro hijo de David. ¿Cómo se entiende?',
        { posturas: {
          titulo: '¿Por qué son distintas las dos genealogías?',
          a: { n: 'Lucas da la línea de María', t: 'Mateo, que cuenta el nacimiento desde José, da la línea legal de José por Salomón. Lucas, que lo cuenta desde María, da la línea de ella: Elí sería el padre de María, y José es llamado «hijo de Elí» como yerno. Lucas lo indica al decir que Jesús era «hijo, según se creía, de José» (Lc 3:23). Así Jesús es hijo de David por la sangre, por María, y heredero legal del trono, por José, sin descender físicamente de Jeconías, cuya descendencia no se sentaría en el trono (Jer 22:30).' },
          b: { n: 'Las dos son de José', t: 'Según una explicación antigua (Julio Africano, citado por Eusebio), Jacob y Elí eran medio hermanos. Uno murió sin hijos y el otro tomó a su viuda según la ley del levirato (Dt 25:5-6); así José era hijo natural de uno e hijo legal del otro. Mateo daría la línea natural y Lucas la legal, o al revés.' },
          c: 'Las dos explicaciones afirman lo esencial: Jesús es descendiente de David y heredero legítimo de su trono. La primera es la más difundida en la enseñanza evangélica y pentecostal, y explica mejor por qué Lucas, que narra desde María, da otra lista.'
        } },
        ir('Ver el bautismo en la Armonía', R.armonia + '#bautismo'),
        ir('Ver el Árbol genealógico', R.genealogias)
      ],
      pensar: 'Juan pidió frutos concretos de arrepentimiento: compartir, no robar, no abusar. ¿Qué fruto concreto debería mostrar tu arrepentimiento en tu trabajo o en tu casa?'
    },
    {
      id: 'c4a', n: 'Capítulo 4: la tentación y el sermón de Nazaret', ref: 'Lucas 4:1-30; Isaías 61:1-2; Deuteronomio 8:3; 6:13, 16', fecha: 29,
      visual: [
        img('../palabra-de-dios/img/jesus-nazaret.webp', 'En una sinagoga de piedra de Nazaret, Jesús, visto de espaldas, de pie ante la congregación, sostiene un rollo abierto', 'Jesús lee el rollo de Isaías en Nazaret (Lc 4:17).'),
        cita('Lucas 4:16-21', 'Vino a Nazaret, donde se había criado; y en el día de reposo entró en la sinagoga, conforme a su costumbre, y se levantó a leer. Y se le dio el libro del profeta Isaías; y habiendo abierto el libro, halló el lugar donde estaba escrito: El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres; Me ha enviado a sanar a los quebrantados de corazón; A pregonar libertad a los cautivos, Y vista a los ciegos; A poner en libertad a los oprimidos; A predicar el año agradable del Señor. Y enrollando el libro, lo dio al ministro, y se sentó; y los ojos de todos en la sinagoga estaban fijos en él. Y comenzó a decirles: Hoy se ha cumplido esta Escritura delante de vosotros.'),
        tabla({
          titulo: 'Las tres tentaciones en Lucas',
          cab: ['Tentación', 'Respuesta de Jesús'],
          filas: [
            ['Convertir la piedra en pan', '«No sólo de pan vivirá el hombre» (Lc 4:4; Dt 8:3)'],
            ['Los reinos del mundo a cambio de adoración', '«Al Señor tu Dios adorarás» (Lc 4:8; Dt 6:13)'],
            ['Lanzarse del pináculo del templo', '«No tentarás al Señor tu Dios» (Lc 4:12; Dt 6:16)']
          ],
          nota: 'Lucas pone la tentación del templo al final: el camino de Jesús termina en Jerusalén.'
        })
      ],
      texto: [
        'Jesús, «lleno del Espíritu Santo», fue llevado por el Espíritu al desierto, donde fue tentado por el diablo cuarenta días (Lc 4:1-2). Israel había sido probado cuarenta años en el desierto y había caído. Jesús, el verdadero Hijo, venció.',
        { h: 'Escrito está' },
        'Las tres tentaciones atacan su identidad: «Si eres Hijo de Dios…». El diablo le ofrece usar su poder para sí, obtener los reinos sin la cruz y forzar a Dios con una demostración espectacular. Jesús responde las tres veces con Deuteronomio. No discute ni usa su poder divino: vence como hombre lleno del Espíritu y de la Palabra. El diablo se apartó «por un tiempo» (Lc 4:13); volverá en la pasión (Lc 22:3, 53).',
        { h: 'El programa de Jesús' },
        'Jesús volvió a Galilea «en el poder del Espíritu» (Lc 4:14) y llegó a Nazaret. En la sinagoga le dieron el libro de Isaías y leyó: «El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres» (Lc 4:18). El pasaje anuncia sanidad, libertad y vista, y «el año agradable del Señor», que recuerda el año del jubileo. Jesús enrolló el libro, se sentó y dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21).',
        'Jesús se detuvo antes de la frase siguiente de Isaías, «el día de venganza del Dios nuestro» (Is 61:2). Su primera venida trajo la gracia; el juicio queda para su segunda venida.',
        { h: 'Rechazado en su tierra' },
        'Al principio todos se admiraban, pero preguntaban: «¿No es éste el hijo de José?» (Lc 4:22). Jesús les recordó que Elías fue enviado a una viuda de Sidón y Eliseo limpió a Naamán el sirio. La idea de que Dios bendijera a gentiles los enfureció, y quisieron despeñarlo, pero «él pasó por en medio de ellos, y se fue» (Lc 4:30). El rechazo de Nazaret anuncia el rechazo final, y la gracia a los gentiles anuncia Hechos.',
        ir('Ver la tentación en la Armonía', R.armonia + '#tentacion'),
        ir('Ver «Tentado, pero sin pecado» en La persona y obra de Cristo', R.cristo + '#encarnacion/5')
      ],
      pensar: 'Jesús venció la tentación con la Palabra que conocía de memoria. ¿Qué pasajes de la Escritura tienes guardados en tu corazón para el día de la prueba?'
    },
    {
      id: 'c4b', n: 'Capítulos 4–5: Capernaúm, la pesca y el leproso', ref: 'Lucas 4:31–5:16', fecha: 30,
      visual: [
        img('lc-pesca-milagrosa.webp', 'En el mar de Galilea, al amanecer, un pescador fornido de barba canosa cae de rodillas en una barca repleta de peces, ante un hombre visto de espaldas', 'Pedro cae de rodillas: «Apártate de mí, Señor, porque soy hombre pecador» (Lc 5:8).'),
        foto('../mundo-judio/img/foto-barca-galilea.jpg', 'Restos de un casco de madera de una barca antigua, conservados en un museo', 'La barca de Galilea: una embarcación de pesca del siglo I hallada en 1986 junto al lago.', 'CC BY-SA 4.0, vía Wikimedia Commons'),
        mapa({ view: V.lago, capas: ['nt-galilea'], lugares: ['capernaum', 'magdala', 'betsaida', 'mar-galilea', 'corazin'] })
      ],
      texto: [
        'Rechazado en Nazaret, Jesús se estableció en Capernaúm, junto al mar de Galilea. Allí enseñaba en la sinagoga los sábados, «y se admiraban de su doctrina, porque su palabra era con autoridad» (Lc 4:32).',
        { h: 'Autoridad sobre demonios y enfermedades' },
        'En la sinagoga, un hombre con un espíritu inmundo gritó: «Yo te conozco quién eres, el Santo de Dios» (Lc 4:34). Jesús lo reprendió y el demonio salió. En casa de Simón sanó a su suegra de una gran fiebre, y al ponerse el sol le trajeron enfermos, y Él «poniendo las manos sobre cada uno de ellos, los sanaba» (Lc 4:40). Al día siguiente salió a un lugar desierto, y cuando la gente quiso retenerlo dijo: «Es necesario que también a otras ciudades anuncie el evangelio del reino de Dios» (Lc 4:43).',
        { h: 'La pesca milagrosa' },
        'Solo Lucas cuenta este llamado. Jesús enseñó desde la barca de Simón y luego le dijo que echara las redes. Simón había trabajado toda la noche sin pescar nada, pero respondió: «en tu palabra echaré la red» (Lc 5:5). Las redes se rompían y las barcas casi se hundían. Simón Pedro cayó de rodillas: «Apártate de mí, Señor, porque soy hombre pecador» (Lc 5:8). Ante la santidad de Jesús, el primer efecto es ver el propio pecado. Jesús le contestó: «No temas; desde ahora serás pescador de hombres» (Lc 5:10). Ellos «dejándolo todo, le siguieron» (Lc 5:11).',
        { h: 'El leproso' },
        'Un hombre «lleno de lepra» se postró ante Jesús: «Señor, si quieres, puedes limpiarme» (Lc 5:12). Nadie tocaba a un leproso, pero Jesús extendió la mano, lo tocó y dijo: «Quiero; sé limpio». Lo envió al sacerdote, como mandaba la ley, para que tuviera testimonio de su sanidad y volviera a la comunidad.',
        'La fama crecía y las multitudes venían a oírle y a ser sanadas, «mas él se apartaba a lugares desiertos, y oraba» (Lc 5:16).',
        ir('Ver la pesca en la Armonía', R.armonia + '#pescadores'),
        ir('Ver «Un judío de Galilea: Nazaret y Capernaúm» en El mundo judío', R.mundo + '#jesus/1')
      ],
      pensar: 'Pedro obedeció «en tu palabra» aunque su experiencia le decía que no valía la pena. ¿En qué área de tu vida Jesús te está pidiendo volver a echar la red?'
    },
    {
      id: 'c5', n: 'Capítulo 5: el paralítico, Leví y el vino nuevo', ref: 'Lucas 5:17-39', fecha: 30,
      visual: [
        img('../mundo-judio/img/mj-banquete-levi.webp', 'En el patio de una casa de Capernaúm, publicanos y gente sencilla comen recostados en una gran mesa, mientras unos fariseos miran desde la entrada', 'El banquete en casa de Leví (Lc 5:29-30).'),
        cita('Lucas 5:20-26', 'Al ver él la fe de ellos, le dijo: Hombre, tus pecados te son perdonados. Entonces los escribas y los fariseos comenzaron a cavilar, diciendo: ¿Quién es éste que habla blasfemias? ¿Quién puede perdonar pecados sino sólo Dios? Jesús entonces, conociendo los pensamientos de ellos, respondiendo les dijo: ¿Qué caviláis en vuestros corazones? ¿Qué es más fácil, decir: Tus pecados te son perdonados, o decir: Levántate y anda? Pues para que sepáis que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados (dijo al paralítico): A ti te digo: Levántate, toma tu lecho, y vete a tu casa. Al instante, levantándose en presencia de ellos, y tomando el lecho en que estaba acostado, se fue a su casa, glorificando a Dios. Y todos, sobrecogidos de asombro, glorificaban a Dios; y llenos de temor, decían: Hoy hemos visto maravillas.')
      ],
      texto: [
        'Esta sección reúne cinco controversias en las que Jesús choca con los fariseos y los escribas. Comienzan aquí y siguen en el capítulo 6.',
        { h: '¿Quién puede perdonar pecados?' },
        'Jesús enseñaba en una casa llena, con fariseos y doctores de la ley venidos de todas partes, «y el poder del Señor estaba con él para sanar» (Lc 5:17). Unos hombres trajeron a un paralítico en una camilla y, como no podían entrar, subieron al techo, quitaron las tejas y lo bajaron delante de Jesús. «Al ver él la fe de ellos», le dijo: «Hombre, tus pecados te son perdonados» (Lc 5:20).',
        'Los escribas pensaron: «¿Quién puede perdonar pecados sino sólo Dios?» (Lc 5:21). Tenían razón en la premisa. Jesús respondió con una prueba visible: para que supieran que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados, mandó al paralítico levantarse. El hombre se levantó, tomó su lecho y se fue glorificando a Dios. Jesús reclamó para sí lo que solo Dios puede hacer.',
        { h: 'Leví, el publicano' },
        'Jesús vio a Leví, un publicano, sentado al banco de los tributos, y le dijo: «Sígueme». Lucas agrega: «Y dejándolo todo, se levantó y le siguió» (Lc 5:28). Leví, también llamado Mateo, hizo un gran banquete con muchos publicanos. Los fariseos murmuraban: «¿Por qué coméis y bebéis con publicanos y pecadores?». Jesús respondió: «Los que están sanos no tienen necesidad de médico, sino los enfermos. No he venido a llamar a justos, sino a pecadores al arrepentimiento» (Lc 5:31-32).',
        { h: 'Vino nuevo en odres nuevos' },
        'Luego le preguntaron por qué sus discípulos no ayunaban. Jesús dijo que los invitados no ayunan mientras el esposo está con ellos; ayunarían cuando les fuera quitado. Y con dos imágenes, el remiendo y el vino, mostró que lo que Él traía no cabía en los moldes viejos. Solo Lucas agrega una frase que retrata a los que se aferran a lo conocido: «ninguno que beba del añejo, quiere luego el nuevo» (Lc 5:39).',
        ir('Ver el paralítico en la Armonía', R.armonia + '#paralitico'),
        ir('Ver «Impuestos, publicanos y el tributo al César» en El mundo judío', R.mundo + '#poder/5')
      ],
      pensar: 'Los amigos del paralítico no se detuvieron ante una casa llena: abrieron el techo. ¿A quién podrías llevar tú hasta Jesús, aunque cueste?'
    },
    {
      id: 'c6a', n: 'Capítulo 6 (I): el Señor del sábado y los doce', ref: 'Lucas 6:1-19; 1 Samuel 21:1-6', fecha: 31,
      visual: [
        img('../mundo-judio/img/mj-espigas-sabado.webp', 'Unos discípulos arrancan espigas maduras al pasar por un sembrado de trigo, mientras unos fariseos los observan con desaprobación', 'Las espigas en el día de reposo (Lc 6:1-2).'),
        tabla({
          titulo: 'Los doce apóstoles en Lucas 6:14-16',
          cab: ['Nombre', 'Nota'],
          filas: [
            ['Simón, a quien llamó Pedro', 'Pescador de Capernaúm'],
            ['Andrés, su hermano', 'Discípulo de Juan antes (Jn 1:40)'],
            ['Jacobo y Juan', 'Hijos de Zebedeo, pescadores'],
            ['Felipe y Bartolomé', 'De Betsaida (Jn 1:44)'],
            ['Mateo', 'El publicano Leví'],
            ['Tomás', 'Llamado Dídimo (Jn 11:16)'],
            ['Jacobo hijo de Alfeo', ''],
            ['Simón llamado Zelote', 'Antes, de los nacionalistas'],
            ['Judas hermano de Jacobo', 'Llamado también Tadeo (Mr 3:18)'],
            ['Judas Iscariote', '«que llegó a ser el traidor»']
          ]
        })
      ],
      texto: [
        'Las controversias siguen con dos episodios sobre el día de reposo, el tema que más enfrentó a Jesús con los fariseos.',
        { h: 'Las espigas' },
        'Un sábado, los discípulos arrancaban espigas al pasar por un sembrado, las restregaban con las manos y comían. La ley permitía comer del campo ajeno con la mano (Dt 23:25), pero los fariseos consideraban que restregar espigas era trabajar. Jesús les recordó que David comió los panes de la proposición cuando tuvo hambre (1 S 21:1-6), y declaró: «El Hijo del Hombre es Señor aun del día de reposo» (Lc 6:5). El día que Dios dio al hombre no puede ponerse contra el hombre, y Jesús tiene autoridad sobre él.',
        { h: 'La mano seca' },
        'Otro sábado, en la sinagoga, había un hombre con la mano derecha seca. Los escribas y fariseos lo acechaban para acusarlo. Jesús, que conocía sus pensamientos, preguntó: «¿Es lícito en día de reposo hacer bien, o hacer mal? ¿salvar la vida, o quitarla?» (Lc 6:9). Mandó al hombre extender la mano, y quedó sana. Ellos se llenaron de furor y comenzaron a hablar de qué podrían hacerle a Jesús.',
        { h: 'Una noche de oración' },
        'Antes de elegir a los apóstoles, Jesús «fue al monte a orar, y pasó la noche orando a Dios» (Lc 6:12). Solo Lucas registra esta noche. De madrugada llamó a sus discípulos y escogió a doce, «a los cuales también llamó apóstoles», es decir, enviados. El número doce recuerda a las doce tribus: Jesús está formando el núcleo del pueblo renovado de Dios.',
        'La lista incluye a un publicano, que había servido a Roma, y a un zelote, que había querido expulsarla. Solo Jesús podía unirlos. También incluye al que lo traicionaría.',
        'Al bajar, se detuvo en un lugar llano con una gran multitud de toda Judea y de la costa de Tiro y Sidón, y «poder salía de él y sanaba a todos» (Lc 6:19).',
        ir('Ver «El día de reposo y sus disputas» en El mundo judío', R.mundo + '#fe/4'),
        ir('Ver los doce en la Armonía', R.armonia + '#los-doce')
      ],
      pensar: 'Jesús oró toda una noche antes de elegir a los doce. ¿Oras así antes de las decisiones que afectan a otros?'
    },
    {
      id: 'c6b', n: 'Capítulo 6 (II): el sermón del llano', ref: 'Lucas 6:20-49; Mateo 5–7', fecha: 31,
      visual: [
        img('../mundo-judio/img/mj-sermon-ladera.webp', 'Una gran multitud de campesinos y pescadores escucha sentada en una ladera verde junto al mar de Galilea', 'La multitud escucha a Jesús.'),
        cita('Lucas 6:27-36', 'Pero a vosotros los que oís, os digo: Amad a vuestros enemigos, haced bien a los que os aborrecen; bendecid a los que os maldicen, y orad por los que os calumnian. Al que te hiera en una mejilla, preséntale también la otra; y al que te quite la capa, ni aun la túnica le niegues. A cualquiera que te pida, dale; y al que tome lo que es tuyo, no pidas que te lo devuelva. Y como queréis que hagan los hombres con vosotros, así también haced vosotros con ellos. Porque si amáis a los que os aman, ¿qué mérito tenéis? Porque también los pecadores aman a los que los aman. Y si hacéis bien a los que os hacen bien, ¿qué mérito tenéis? Porque también los pecadores hacen lo mismo. Y si prestáis a aquellos de quienes esperáis recibir, ¿qué mérito tenéis? Porque también los pecadores prestan a los pecadores, para recibir otro tanto. Amad, pues, a vuestros enemigos, y haced bien, y prestad, no esperando de ello nada; y será vuestro galardón grande, y seréis hijos del Altísimo; porque él es benigno para con los ingratos y malos. Sed, pues, misericordiosos, como también vuestro Padre es misericordioso.'),
        tabla({
          titulo: 'Bienaventuranzas y ayes (6:20-26)',
          cab: ['Bienaventurados', '¡Ay de vosotros!'],
          filas: [
            ['Los pobres: vuestro es el reino', 'Los ricos: ya tenéis vuestro consuelo'],
            ['Los que ahora tenéis hambre: seréis saciados', 'Los que ahora estáis saciados: tendréis hambre'],
            ['Los que ahora lloráis: reiréis', 'Los que ahora reís: lamentaréis y lloraréis'],
            ['Cuando os aborrezcan por causa del Hijo del Hombre', 'Cuando todos los hombres hablen bien de vosotros']
          ]
        })
      ],
      texto: [
        'Lucas resume en este sermón la enseñanza de Jesús a sus discípulos. Tiene mucho en común con el sermón del monte de Mateo 5–7, aunque es más breve y Lucas lo sitúa en «un lugar llano» (Lc 6:17). Jesús enseñó estas verdades muchas veces y en muchos lugares; cada evangelista recogió lo que convenía a su libro.',
        { h: 'Bienaventuranzas y ayes' },
        'Lucas registra cuatro bienaventuranzas y cuatro ayes que se corresponden. Jesús habla directamente: «Bienaventurados vosotros los pobres, porque vuestro es el reino de Dios» (Lc 6:20). Los pobres, hambrientos y afligidos que siguen a Jesús son dichosos, porque Dios va a invertir su situación. Los ricos y satisfechos que no necesitan a Dios ya recibieron todo su consuelo.',
        { h: 'Amar a los enemigos' },
        'El centro del sermón es el amor: «Amad a vuestros enemigos, haced bien a los que os aborrecen; bendecid a los que os maldicen, y orad por los que os calumnian» (Lc 6:27-28). Jesús resume la vida del discípulo en la regla de oro: «como queréis que hagan los hombres con vosotros, así también haced vosotros con ellos» (Lc 6:31). Y la funda en el carácter de Dios: «Sed, pues, misericordiosos, como también vuestro Padre es misericordioso» (Lc 6:36). Amar solo a quien nos ama no tiene mérito; el amor del discípulo imita al del Padre, que es benigno «para con los ingratos y malos» (Lc 6:35).',
        { h: 'No juzgar, dar frutos' },
        'Jesús advierte contra el juicio duro que ve la paja en el ojo ajeno y no la viga en el propio (Lc 6:41-42). Y enseña que el árbol se conoce por su fruto: «de la abundancia del corazón habla la boca» (Lc 6:45).',
        { h: 'Sobre la roca' },
        'El sermón termina con una pregunta: «¿Por qué me llamáis, Señor, Señor, y no hacéis lo que yo digo?» (Lc 6:46). El que oye y obedece es como quien cavó hondo y edificó sobre la roca; el que oye y no obedece, como quien edificó sin fundamento.',
        ir('Ver las bienaventuranzas en la Armonía', R.armonia + '#bienaventuranzas')
      ],
      pensar: '«Sed misericordiosos, como también vuestro Padre es misericordioso.» ¿Quién es el «enemigo» al que Jesús te está pidiendo amar y bendecir esta semana?'
    },
    {
      id: 'c7a', n: 'Capítulo 7: el centurión, Naín y Juan', ref: 'Lucas 7:1-35; 1 Reyes 17:17-24; Isaías 35:5-6; 61:1', fecha: 31,
      visual: [
        img('../mundo-judio/img/mj-nain-cortejo.webp', 'Un cortejo fúnebre sale por la puerta de una aldea de Galilea: cuatro hombres llevan un féretro abierto y una viuda llora detrás', 'El cortejo de Naín (Lc 7:12).'),
        mapa({ view: V.galilea, capas: ['nt-galilea'], lugares: ['capernaum', 'nain', 'nazaret', 'tabor', 'mar-galilea', 'maqueronte'] }, 'Mapa'),
        cita('Lucas 7:11-17', 'Aconteció después, que él iba a la ciudad que se llama Naín, e iban con él muchos de sus discípulos, y una gran multitud. Cuando llegó cerca de la puerta de la ciudad, he aquí que llevaban a enterrar a un difunto, hijo único de su madre, la cual era viuda; y había con ella mucha gente de la ciudad. Y cuando el Señor la vio, se compadeció de ella, y le dijo: No llores. Y acercándose, tocó el féretro; y los que lo llevaban se detuvieron. Y dijo: Joven, a ti te digo, levántate. Entonces se incorporó el que había muerto, y comenzó a hablar. Y lo dio a su madre. Y todos tuvieron miedo, y glorificaban a Dios, diciendo: Un gran profeta se ha levantado entre nosotros; y: Dios ha visitado a su pueblo. Y se extendió la fama de él por toda Judea, y por toda la región de alrededor.')
      ],
      texto: [
        'El capítulo 7 responde a una pregunta: ¿quién es Jesús? Lo muestra con poder sobre la enfermedad a distancia y sobre la muerte, y con la pregunta de Juan el Bautista.',
        { h: 'La fe de un gentil' },
        'Un centurión romano de Capernaúm tenía un siervo muy enfermo. Los ancianos de los judíos intercedieron por él: «ama a nuestra nación, y nos edificó una sinagoga» (Lc 7:5). Pero el centurión mandó decir a Jesús que no era digno de que entrara en su casa: «di la palabra, y mi siervo será sano» (Lc 7:7). Como hombre bajo autoridad, entendía que una orden de Jesús bastaba. Jesús se maravilló: «ni aun en Israel he hallado tanta fe» (Lc 7:9). Un gentil es modelo de fe.',
        { h: 'El hijo de la viuda' },
        'Solo Lucas cuenta este milagro. Cerca de la puerta de Naín, Jesús se encontró con un cortejo fúnebre: llevaban al «hijo único de su madre, la cual era viuda» (Lc 7:12). Sin esposo ni hijo, esa mujer quedaba sin sustento ni protección. Lucas dice: «Y cuando el Señor la vio, se compadeció de ella, y le dijo: No llores» (Lc 7:13). Tocó el féretro y dijo: «Joven, a ti te digo, levántate». El muerto se incorporó, y Jesús «lo dio a su madre». La escena recuerda a Elías con el hijo de la viuda de Sarepta (1 R 17:23), y la gente exclamó: «Un gran profeta se ha levantado entre nosotros; y: Dios ha visitado a su pueblo» (Lc 7:16).',
        { h: '¿Eres tú el que había de venir?' },
        'Juan, preso en la fortaleza de Maqueronte, envió a dos discípulos a preguntar si Jesús era el Mesías o si debían esperar a otro. Jesús sanó a muchos delante de ellos y respondió con las palabras de Isaías: los ciegos ven, los cojos andan, los muertos resucitan y «a los pobres es anunciado el evangelio» (Lc 7:22). Luego alabó a Juan: entre los nacidos de mujer no había mayor profeta, pero el más pequeño en el reino de Dios es mayor que él (Lc 7:28). Y lamentó a una generación que no aceptaba ni a Juan ni a Él: «la sabiduría es justificada por todos sus hijos» (Lc 7:35).',
        ir('Ver Naín en la Armonía', R.armonia + '#nain')
      ],
      pensar: 'Jesús «se compadeció» de la viuda antes de que ella le pidiera nada. ¿Qué te dice eso del corazón de Jesús frente a tu propio dolor?'
    },
    {
      id: 'c7b', n: 'Capítulos 7–8: la mujer pecadora y las mujeres que servían', ref: 'Lucas 7:36–8:3', fecha: 31,
      visual: [
        img('lc-pecadora-simon.webp', 'En el patio de la casa de un fariseo, una mujer de velo oscuro llora arrodillada junto a los pies de un invitado reclinado a la mesa, visto de espaldas, mientras el anfitrión la mira con desprecio', 'La mujer pecadora en casa de Simón (Lc 7:37-38).'),
        cita('Lucas 7:44-50', 'Y vuelto a la mujer, dijo a Simón: ¿Ves esta mujer? Entré en tu casa, y no me diste agua para mis pies; mas ésta ha regado mis pies con lágrimas, y los ha enjugado con sus cabellos. No me diste beso; mas ésta, desde que entré, no ha cesado de besar mis pies. No ungiste mi cabeza con aceite; mas ésta ha ungido con perfume mis pies. Por lo cual te digo que sus muchos pecados le son perdonados, porque amó mucho; mas aquel a quien se le perdona poco, poco ama. Y a ella le dijo: Tus pecados te son perdonados. Y los que estaban juntamente sentados a la mesa, comenzaron a decir entre sí: ¿Quién es éste, que también perdona pecados? Pero él dijo a la mujer: Tu fe te ha salvado, vé en paz.'),
        tabla({
          titulo: 'Dos maneras de recibir a Jesús',
          cab: ['Simón el fariseo', 'La mujer pecadora'],
          filas: [
            ['No le dio agua para los pies', 'Regó sus pies con lágrimas y los secó con sus cabellos'],
            ['No le dio beso', 'No cesó de besar sus pies'],
            ['No ungió su cabeza con aceite', 'Ungió sus pies con perfume'],
            ['Se creía con poca deuda', 'Sabía que debía mucho'],
            ['Amó poco', 'Amó mucho']
          ]
        })
      ],
      texto: [
        'Un fariseo llamado Simón invitó a Jesús a comer. Mientras estaban reclinados a la mesa, entró una mujer «que era pecadora» en la ciudad, con un frasco de perfume. Llorando, comenzó a regar los pies de Jesús con sus lágrimas, los secó con sus cabellos, los besaba y los ungía (Lc 7:37-38).',
        { h: 'El juicio de Simón' },
        'Simón pensó: si este fuera profeta, sabría qué clase de mujer lo está tocando. Jesús, que sí sabía, le contó una parábola. Un acreedor tenía dos deudores: uno le debía quinientos denarios y otro cincuenta. Como ninguno podía pagar, perdonó a ambos. «¿Cuál de ellos le amará más?» Simón respondió bien: «Pienso que aquel a quien perdonó más» (Lc 7:43).',
        'Entonces Jesús se volvió a la mujer y comparó la recepción de Simón con la de ella. Simón no le había dado ni el agua, ni el beso, ni el aceite que se ofrecían a un invitado de honor. Ella lo había dado todo. «Sus muchos pecados le son perdonados, porque amó mucho; mas aquel a quien se le perdona poco, poco ama» (Lc 7:47).',
        { h: 'El amor nace del perdón' },
        'Jesús no dice que ella ganó el perdón con su amor; la parábola enseña lo contrario: el amor es la respuesta al perdón recibido. Por eso termina diciéndole: «Tu fe te ha salvado, vé en paz» (Lc 7:50). Fue salva por la fe, y su amor lo demostró. El verdadero problema de Simón no era tener pocos pecados, sino no ver los suyos.',
        { h: 'Mujeres que seguían a Jesús' },
        'Lucas continúa con una nota única: Jesús recorría ciudades y aldeas con los doce y con algunas mujeres que había sanado: María Magdalena, de la que habían salido siete demonios; Juana, mujer de Chuza, intendente de Herodes; Susana «y otras muchas que le servían de sus bienes» (Lc 8:2-3). Mujeres de distinta condición, desde una liberada de demonios hasta la esposa de un funcionario de la corte, sostenían el ministerio de Jesús.',
        ir('Ver el pasaje en la Armonía', R.armonia + '#pecadora'),
        ir('Ir a la ruta Las mujeres en Lucas', '#mujeres/3')
      ],
      pensar: 'Simón no amó mucho porque no se sentía muy perdonado. ¿Cuánto te ha sido perdonado a ti? ¿Cómo se nota eso en tu amor por Jesús?'
    },
    {
      id: 'c8', n: 'Capítulo 8: la palabra que da fruto y el poder de Jesús', ref: 'Lucas 8:4-56', fecha: 31,
      visual: [
        pasos([
          { t: 'Jesús calma la tempestad en el lago (8:22-25)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis'], lugares: ['capernaum', 'mar-galilea', 'gadara', 'magdala'] } },
          { t: 'En la tierra de los gadarenos, frente a Galilea (8:26-39)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis'], lugares: ['gadara', 'decapolis', 'mar-galilea'] } },
          { t: 'De vuelta: Jairo y la mujer enferma (8:40-56)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea'], lugares: ['capernaum', 'mar-galilea'] } }
        ]),
        cita('Lucas 8:11-15', 'Esta es, pues, la parábola: La semilla es la palabra de Dios. Y los de junto al camino son los que oyen, y luego viene el diablo y quita de su corazón la palabra, para que no crean y se salven. Los de sobre la piedra son los que habiendo oído, reciben la palabra con gozo; pero éstos no tienen raíces; creen por algún tiempo, y en el tiempo de la prueba se apartan. La que cayó entre espinos, éstos son los que oyen, pero yéndose, son ahogados por los afanes y las riquezas y los placeres de la vida, y no llevan fruto. Mas la que cayó en buena tierra, éstos son los que con corazón bueno y recto retienen la palabra oída, y dan fruto con perseverancia.'),
        tabla({
          titulo: 'Cuatro clases de tierra (8:11-15)',
          cab: ['Tierra', 'Quiénes son'],
          filas: [
            ['Junto al camino', 'Oyen, pero viene el diablo y quita la palabra'],
            ['Sobre la piedra', 'Reciben con gozo, pero en la prueba se apartan'],
            ['Entre espinos', 'Los ahogan los afanes, las riquezas y los placeres'],
            ['Buena tierra', 'Con corazón bueno y recto retienen la palabra y dan fruto con perseverancia']
          ]
        })
      ],
      texto: [
        'Este capítulo une la enseñanza sobre cómo oír la palabra con cuatro milagros que muestran el poder de Jesús sobre la naturaleza, los demonios, la enfermedad y la muerte.',
        { h: 'Cómo oír' },
        'En la parábola del sembrador, la semilla es la palabra de Dios, y el resultado depende de la tierra que la recibe. La buena tierra son los que «con corazón bueno y recto retienen la palabra oída, y dan fruto con perseverancia» (Lc 8:15). Jesús agrega: «Mirad, pues, cómo oís» (Lc 8:18). Y cuando le dicen que su madre y sus hermanos lo buscan, responde: «Mi madre y mis hermanos son los que oyen la palabra de Dios, y la hacen» (Lc 8:21).',
        { h: 'Señor del viento y del mar' },
        'Cruzando el lago, se levantó una tempestad y Jesús dormía. Los discípulos lo despertaron: «¡Maestro, Maestro, que perecemos!» (Lc 8:24). Jesús reprendió al viento y a las olas, y les preguntó: «¿Dónde está vuestra fe?». Ellos se preguntaban: «¿Quién es éste, que aun a los vientos y a las aguas manda, y le obedecen?» (Lc 8:25).',
        { h: 'Señor sobre los demonios' },
        'Al otro lado, en tierra de gentiles, salió a su encuentro un hombre poseído por muchos demonios, que vivía en los sepulcros. Su nombre era Legión. Jesús los expulsó, y los demonios entraron en un hato de cerdos que se precipitó al lago. Luego encontraron al hombre «sentado a los pies de Jesús, vestido, y en su cabal juicio» (Lc 8:35). Jesús lo envió a contar en su casa cuán grandes cosas había hecho Dios con él: el primer misionero a la Decápolis.',
        { h: 'Señor sobre la enfermedad y la muerte' },
        'Jairo, principal de la sinagoga, rogó por su única hija, de doce años, que se moría. En el camino, una mujer enferma de flujo de sangre desde hacía doce años tocó el borde del manto de Jesús y fue sanada. Jesús no la dejó irse escondida: la llamó «Hija» y le dijo que su fe la había salvado (Lc 8:48). Entonces llegó la noticia de que la niña había muerto. Jesús dijo a Jairo: «No temas; cree solamente, y será salva» (Lc 8:50). Tomó la mano de la niña y le dijo: «Muchacha, levántate». Y su espíritu volvió.',
        ir('Ver Jairo en la Armonía', R.armonia + '#jairo')
      ],
      pensar: '«Mirad, pues, cómo oís.» ¿Qué clase de tierra ha sido tu corazón para la palabra de Dios en este último tiempo?'
    },
    {
      id: 'c9a', n: 'Capítulo 9: ¿quién es Jesús?', ref: 'Lucas 9:1-50', fecha: 32,
      visual: [
        img('../persona-y-obra-de-cristo/img/transfiguracion.webp', 'En la cima de un monte, una figura luminosa vestida de blanco resplandeciente, vista de espaldas, se encuentra con dos hombres, mientras tres discípulos se cubren los ojos', 'La transfiguración (Lc 9:28-36).'),
        cita('Lucas 9:18-24', 'Aconteció que mientras Jesús oraba aparte, estaban con él los discípulos; y les preguntó, diciendo: ¿Quién dice la gente que soy yo? Ellos respondieron: Unos, Juan el Bautista; otros, Elías; y otros, que algún profeta de los antiguos ha resucitado. El les dijo: ¿Y vosotros, quién decís que soy? Entonces respondiendo Pedro, dijo: El Cristo de Dios. Pero él les mandó que a nadie dijesen esto, encargándoselo rigurosamente, y diciendo: Es necesario que el Hijo del Hombre padezca muchas cosas, y sea desechado por los ancianos, por los principales sacerdotes y por los escribas, y que sea muerto, y resucite al tercer día. Y decía a todos: Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame. Porque todo el que quiera salvar su vida, la perderá; y todo el que pierda su vida por causa de mí, éste la salvará.'),
        tabla({
          titulo: 'Una pregunta que recorre el capítulo',
          cab: ['Quién pregunta', 'Respuesta'],
          filas: [
            ['Herodes: «¿Quién, pues, es éste?» (9:9)', 'Lo oye, pero no lo conoce'],
            ['Jesús: «¿Quién dice la gente que soy yo?» (9:18)', 'Juan el Bautista, Elías, un profeta'],
            ['Jesús: «¿Y vosotros, quién decís que soy?» (9:20)', 'Pedro: «El Cristo de Dios»'],
            ['La voz del cielo (9:35)', '«Este es mi Hijo amado; a él oíd»']
          ]
        })
      ],
      texto: [
        'El capítulo 9 cierra el ministerio en Galilea con una sola pregunta: ¿quién es Jesús? Herodes, la gente, los discípulos y el Padre dan sus respuestas.',
        { h: 'Los doce enviados y los cinco mil' },
        'Jesús dio a los doce «poder y autoridad sobre todos los demonios, y para sanar enfermedades», y los envió a predicar el reino (Lc 9:1-2). Herodes Antipas oyó hablar de Jesús y se preguntaba quién era, porque él había decapitado a Juan. Al volver los apóstoles, Jesús alimentó a cinco mil hombres con cinco panes y dos pescados, y sobraron doce cestas. El que da pan en el desierto es más que un profeta.',
        { h: 'La confesión de Pedro' },
        'Después de orar a solas, Jesús preguntó a sus discípulos quién decían que era. Pedro respondió: «El Cristo de Dios» (Lc 9:20). Jesús anunció entonces por primera vez que era necesario que el Hijo del Hombre padeciera, fuera desechado, muerto y resucitara al tercer día. Y llamó a seguirlo: «Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame» (Lc 9:23). Solo Lucas dice «cada día»: seguir a Jesús es una entrega diaria.',
        { h: 'La transfiguración' },
        'Unos ocho días después, Jesús subió a orar con Pedro, Juan y Jacobo, y mientras oraba su rostro cambió y su vestido se volvió blanco y resplandeciente. Moisés y Elías aparecieron en gloria y hablaban «de su partida, que iba Jesús a cumplir en Jerusalén» (Lc 9:31). La palabra griega para «partida» es éxodo: la muerte y resurrección de Jesús serían el gran éxodo de su pueblo. La voz del Padre dijo: «Este es mi Hijo amado; a él oíd» (Lc 9:35).',
        { h: 'Discípulos que aún no entendían' },
        'Al bajar, Jesús liberó a un muchacho endemoniado que los discípulos no pudieron sanar. Anunció de nuevo su entrega, pero ellos no lo entendieron, y discutían quién sería el mayor. Jesús puso a un niño junto a sí: «el que es más pequeño entre todos vosotros, ése es el más grande» (Lc 9:48).',
        ir('Ver la confesión de Pedro en la Armonía', R.armonia + '#confesion-pedro'),
        ir('Ver «La transfiguración» en La persona y obra de Cristo', R.cristo + '#oficios/6')
      ],
      pensar: 'Jesús pide tomar la cruz «cada día». ¿Qué significa para ti hoy, concretamente, negarte a ti mismo para seguirle?'
    },
    {
      id: 'c9b', n: 'Capítulos 9–10: rumbo a Jerusalén y los setenta', ref: 'Lucas 9:51–10:24; 2 Reyes 1:10-12', fecha: 32,
      visual: [
        pasos([
          { t: '«Afirmó su rostro para ir a Jerusalén» (9:51)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'capernaum', 'samaria', 'jerusalen'] } },
          { t: 'Una aldea de samaritanos no lo recibe (9:52-56)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['samaria', 'sicar', 'jerusalen'], trazos: ['jesus-samaria'] } },
          { t: 'Los setenta, enviados de dos en dos delante de Él (10:1)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['corazin', 'betsaida', 'capernaum', 'tiro', 'sidon', 'jerusalen'] } }
        ]),
        cita('Lucas 10:17-20', 'Volvieron los setenta con gozo, diciendo: Señor, aun los demonios se nos sujetan en tu nombre. Y les dijo: Yo veía a Satanás caer del cielo como un rayo. He aquí os doy potestad de hollar serpientes y escorpiones, y sobre toda fuerza del enemigo, y nada os dañará. Pero no os regocijéis de que los espíritus se os sujetan, sino regocijaos de que vuestros nombres están escritos en los cielos.'),
        esq('lc-viaje.svg', 'Una línea que va de Galilea a Jerusalén con seis marcas: Lucas 9:51, 13:22, 17:11, 18:31, 19:11 y 19:28, cada una con la frase en que Lucas recuerda que Jesús va a Jerusalén', 'El viaje a Jerusalén: Lucas lo recuerda seis veces.')
      ],
      texto: [
        'Aquí comienza la parte central de Lucas. «Cuando se cumplió el tiempo en que él había de ser recibido arriba, afirmó su rostro para ir a Jerusalén» (Lc 9:51). «Ser recibido arriba» incluye la cruz, la resurrección y la ascensión. Jesús va decidido.',
        { h: 'Samaritanos y fuego del cielo' },
        'Una aldea de samaritanos no quiso recibirlo porque iba a Jerusalén. Jacobo y Juan preguntaron: «Señor, ¿quieres que mandemos que descienda fuego del cielo, como hizo Elías, y los consuma?» (Lc 9:54). Jesús los reprendió. Su misión no era destruir, sino salvar.',
        { h: 'El precio de seguirle' },
        'En el camino, tres hombres hablaron de seguir a Jesús. Al primero le advirtió que el Hijo del Hombre no tenía dónde recostar la cabeza. Al segundo, que quería enterrar primero a su padre, le dijo: «Deja que los muertos entierren a sus muertos; y tú ve, y anuncia el reino de Dios» (Lc 9:60). Al tercero, que quería despedirse de los suyos: «Ninguno que poniendo su mano en el arado mira hacia atrás, es apto para el reino de Dios» (Lc 9:62). Seguir a Jesús es la prioridad.',
        { h: 'Los setenta' },
        'Solo Lucas cuenta que Jesús envió a otros setenta discípulos (algunos manuscritos dicen setenta y dos), de dos en dos, a las ciudades adonde Él había de ir. «La mies a la verdad es mucha, mas los obreros pocos; por tanto, rogad al Señor de la mies que envíe obreros a su mies» (Lc 10:2). Los doce recuerdan a las tribus de Israel; los setenta, a las naciones de Génesis 10. La misión ya no es solo de los apóstoles.',
        'Volvieron con gozo: «Señor, aun los demonios se nos sujetan en tu nombre». Jesús vio a Satanás caer del cielo como un rayo y les dio autoridad, pero les dijo que su mayor gozo debía ser otro: «regocijaos de que vuestros nombres están escritos en los cielos» (Lc 10:20). Y Jesús mismo «se regocijó en el Espíritu» (Lc 10:21), porque el Padre revelaba estas cosas a los niños.',
        ir('Ver el viaje en la ruta de mapas', '#mapas/4'),
        ir('Ver «Los samaritanos en tiempos de Jesús» en El mundo judío', R.mundo + '#grupos/7')
      ],
      pensar: 'Los setenta se alegraron del poder; Jesús les recordó que el mayor gozo es tener el nombre escrito en el cielo. ¿Dónde pones tú tu alegría en el servicio a Dios?'
    }
  ];
})();
/* Lucas · parte 3: ruta III, Comentario (Lucas 10:25–24:53) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  L.comentario.push(
    {
      id: 'c10', n: 'Capítulo 10: el buen samaritano y Marta y María', ref: 'Lucas 10:25-42; Deuteronomio 6:5; Levítico 19:18', fecha: 32,
      visual: [
        img('lc-buen-samaritano.webp', 'En un camino pedregoso del desierto de Judea, un viajero samaritano con turbante se arrodilla junto a un hombre herido y le venda las heridas, con su asno al lado', 'El samaritano se detiene (Lc 10:33-34).'),
        img('../mundo-judio/img/mj-marta-maria.webp', 'En una casa de Betania, una joven se sienta a escuchar en el suelo mientras su hermana, con delantal, trae un cántaro con gesto de reproche', 'Marta y María (Lc 10:39-40).'),
        mapa({ view: V.judea, capas: ['nt-judea'], lugares: ['jerusalen', 'jerico', 'betania', 'desierto-judea'], trazos: ['c-jerico'] }, 'Mapa')
      ],
      texto: [
        'Un intérprete de la ley preguntó a Jesús: «Maestro, ¿haciendo qué cosa heredaré la vida eterna?» (Lc 10:25). Jesús le devolvió la pregunta, y el hombre respondió bien: amar a Dios con todo el corazón y al prójimo como a sí mismo (Dt 6:5; Lv 19:18). «Haz esto, y vivirás.» Pero él, «queriendo justificarse a sí mismo», preguntó: «¿Y quién es mi prójimo?» (Lc 10:29).',
        { h: 'Un camino peligroso' },
        'El camino de Jerusalén a Jericó baja unos mil metros en treinta kilómetros por el desierto de Judea, y era conocido por los asaltantes. Un hombre cayó en manos de ladrones, que lo dejaron medio muerto. Pasó un sacerdote, y luego un levita; los dos lo vieron y pasaron de largo. Quizás temían contaminarse con un muerto o ser asaltados ellos mismos.',
        { h: 'El samaritano' },
        'Entonces viene la sorpresa. El que se detuvo fue un samaritano, alguien a quien el intérprete de la ley despreciaba. «Viéndole, fue movido a misericordia» (Lc 10:33): le vendó las heridas con aceite y vino, lo puso en su cabalgadura, lo llevó a un mesón, pagó dos denarios y prometió pagar lo que faltara. Dio su tiempo, su dinero y su seguridad.',
        'Jesús cambió la pregunta. El intérprete quería saber a quién estaba obligado a amar; Jesús le preguntó quién «fue el prójimo» del herido. Él no pudo decir «el samaritano» y respondió: «El que usó de misericordia con él». «Ve, y haz tú lo mismo» (Lc 10:37). El prójimo no es una categoría que se define para limitar el amor; es cualquiera que necesita misericordia.',
        { h: 'Marta y María' },
        'Inmediatamente después, Lucas cuenta la visita a Betania. Marta servía, afanada; María estaba sentada a los pies de Jesús, oyendo su palabra, como un discípulo ante su maestro. Marta se quejó, y Jesús le respondió con cariño: «Marta, Marta, afanada y turbada estás con muchas cosas. Pero sólo una cosa es necesaria; y María ha escogido la buena parte, la cual no le será quitada» (Lc 10:41-42).',
        'Los dos relatos van juntos: el samaritano enseña a servir; María, a escuchar. El discípulo necesita ambas cosas, pero el servicio nace de estar a los pies de Jesús.',
        ir('Ir a la parábola del buen samaritano', '#parabolas/2'),
        ir('Ver Marta y María en la Armonía', R.armonia + '#marta-maria')
      ],
      pensar: '¿Te pareces más a Marta, afanada en servir, o a María, sentada a escuchar? ¿Qué te diría Jesús hoy con ese «Marta, Marta»?'
    },
    {
      id: 'c11', n: 'Capítulo 11: enséñanos a orar', ref: 'Lucas 11:1-54', fecha: 32,
      visual: [
        img('lc-jesus-ora.webp', 'Antes del amanecer, en una ladera rocosa de Galilea, una figura vista de espaldas ora de rodillas con las manos abiertas, mientras unos discípulos esperan a cierta distancia', 'Jesús orando en un lugar apartado (Lc 11:1).'),
        cita('Lucas 11:1-4', 'Aconteció que estaba Jesús orando en un lugar, y cuando terminó, uno de sus discípulos le dijo: Señor, enséñanos a orar, como también Juan enseñó a sus discípulos. Y les dijo: Cuando oréis, decid: Padre nuestro que estás en los cielos, santificado sea tu nombre. Venga tu reino. Hágase tu voluntad, como en el cielo, así también en la tierra. El pan nuestro de cada día, dánoslo hoy. Y perdónanos nuestros pecados, porque también nosotros perdonamos a todos los que nos deben. Y no nos metas en tentación, mas líbranos del mal.'),
        cita('Lucas 11:9-13', 'Y yo os digo: Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama, se le abrirá. ¿Qué padre de vosotros, si su hijo le pide pan, le dará una piedra? ¿o si pescado, en lugar de pescado, le dará una serpiente? ¿O si le pide un huevo, le dará un escorpión? Pues si vosotros, siendo malos, sabéis dar buenas dádivas a vuestros hijos, ¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?', 'Pedid')
      ],
      texto: [
        'Jesús estaba orando, y cuando terminó, uno de sus discípulos le pidió: «Señor, enséñanos a orar» (Lc 11:1). Los discípulos habían visto que la oración era la fuente de la vida de Jesús.',
        { h: 'El Padre nuestro' },
        'Jesús les dio un modelo breve. Comienza con «Padre», la palabra con que Él mismo se dirigía a Dios, y la comparte con sus discípulos. Pide primero por Dios: que su nombre sea santificado y venga su reino. Luego por nuestras necesidades: el pan de cada día, el perdón «porque también nosotros perdonamos a todos los que nos deben», y que no nos meta en tentación. La versión de Lucas es más corta que la de Mateo 6:9-13; Jesús la enseñó en más de una ocasión.',
        { h: 'Pedir con insistencia' },
        'Luego contó la parábola de un hombre que, a medianoche, va a pedir tres panes a su amigo para un viajero que llegó. El amigo no quiere levantarse, pero lo hace «por su importunidad» (Lc 11:8). Si un amigo cansado responde, ¡cuánto más Dios! «Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá» (Lc 11:9).',
        'Jesús termina con una comparación entre padres: ningún padre da una serpiente al hijo que pide un pescado. «Pues si vosotros, siendo malos, sabéis dar buenas dádivas a vuestros hijos, ¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?» (Lc 11:13). Donde Mateo dice «buenas cosas» (Mt 7:11), Lucas dice «el Espíritu Santo». El mejor regalo del Padre es su Espíritu, y Él lo da a sus hijos que lo piden.',
        { h: 'Más fuerte que el fuerte' },
        'Cuando Jesús expulsó un demonio, algunos dijeron que lo hacía por Beelzebú. Jesús respondió que un reino dividido no permanece, y que si echaba los demonios «por el dedo de Dios», el reino de Dios había llegado a ellos (Lc 11:20). Él es el más fuerte que vence al fuerte armado y reparte su botín.',
        { h: 'Ayes contra la religión vacía' },
        'En casa de un fariseo, Jesús denunció una religión que limpia lo de fuera y deja el interior lleno de rapacidad, que diezma la menta y pasa por alto «la justicia y el amor de Dios» (Lc 11:42). Desde entonces, los escribas y fariseos comenzaron a acecharle.',
        ir('Ir a la ruta Jesús que ora', '#oracion/3'),
        ir('Ver «Oración, ayuno y limosna» en El mundo judío', R.mundo + '#fe/7')
      ],
      pensar: 'Jesús promete que el Padre dará el Espíritu Santo a los que se lo pidan. ¿Has pedido con insistencia, como el amigo de medianoche, la llenura del Espíritu en tu vida?'
    },
    {
      id: 'c12', n: 'Capítulo 12: tesoros, temores y la venida del Señor', ref: 'Lucas 12:1-59', fecha: 32,
      visual: [
        cita('Lucas 12:16-21', 'También les refirió una parábola, diciendo: La heredad de un hombre rico había producido mucho. Y él pensaba dentro de sí, diciendo: ¿Qué haré, porque no tengo dónde guardar mis frutos? Y dijo: Esto haré: derribaré mis graneros, y los edificaré mayores, y allí guardaré todos mis frutos y mis bienes; y diré a mi alma: Alma, muchos bienes tienes guardados para muchos años; repósate, come, bebe, regocíjate. Pero Dios le dijo: Necio, esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será? Así es el que hace para sí tesoro, y no es rico para con Dios.'),
        tabla({
          titulo: 'De qué cuidarse y qué buscar',
          cab: ['Cuidaos de…', 'En cambio…'],
          filas: [
            ['La levadura de los fariseos, que es la hipocresía (12:1)', 'Nada oculto deja de descubrirse (12:2)'],
            ['Temer a los hombres (12:4)', 'Temer a Dios, que cuida aun a los pajarillos (12:5-7)'],
            ['Toda avaricia (12:15)', 'Ser rico para con Dios (12:21)'],
            ['El afán por la comida y el vestido (12:22)', 'Buscar el reino de Dios (12:31)'],
            ['Dormirse en la espera (12:45)', 'Estar preparados, como siervos que esperan a su señor (12:35-40)']
          ]
        }),
        img('lc-rico-insensato.webp', 'De noche, un terrateniente rico contempla satisfecho sus graneros nuevos llenos de trigo a la luz de una lámpara, sin advertir las nubes oscuras que se acercan', 'El rico insensato (Lc 12:19-20).')
      ],
      texto: [
        'Mientras se juntaban miles de personas, Jesús habló primero a sus discípulos. El capítulo trata del temor, del dinero y de la espera de su venida.',
        { h: 'No temáis' },
        'Jesús advierte contra la hipocresía y contra el miedo a los hombres, que solo pueden matar el cuerpo. Hay que temer a Dios. Pero ese temor viene con consuelo: Dios no olvida ni un pajarillo, «aun los cabellos de vuestra cabeza están todos contados» (Lc 12:7). Cuando los lleven ante las autoridades, «el Espíritu Santo os enseñará en la misma hora lo que debáis decir» (Lc 12:12).',
        { h: 'El rico insensato' },
        'Uno de la multitud pidió a Jesús que ordenara a su hermano repartir la herencia. Jesús se negó a ser juez en el asunto y advirtió contra la avaricia. Contó de un hombre rico cuya tierra produjo tanto que pensó derribar sus graneros y edificar otros mayores, y decirse a sí mismo: «Alma, muchos bienes tienes guardados para muchos años; repósate, come, bebe, regocíjate» (Lc 12:19). Pero Dios le dijo: «Necio, esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será?» (Lc 12:20). Su error no fue trabajar ni prosperar, sino vivir como si Dios y la muerte no existieran.',
        { h: 'Buscad el reino' },
        'Jesús llama a no afanarse: Dios alimenta a los cuervos y viste los lirios. «Mas buscad el reino de Dios, y todas estas cosas os serán añadidas. No temáis, manada pequeña, porque a vuestro Padre le ha placido daros el reino» (Lc 12:31-32). Por eso pueden vender, dar limosna y hacerse un tesoro en los cielos.',
        { h: 'Siervos que esperan' },
        'La última parte habla de la venida del Señor. Los discípulos deben estar como siervos con los lomos ceñidos y las lámparas encendidas, esperando a su señor que vuelve de las bodas, «porque a la hora que no penséis, el Hijo del Hombre vendrá» (Lc 12:40). El mayordomo fiel será puesto sobre todos los bienes; el que piensa que su señor tarda y maltrata a los demás será castigado. «A todo aquel a quien se haya dado mucho, mucho se le demandará» (Lc 12:48).',
        ir('Ir a la parábola del rico insensato', '#parabolas/3'),
        ir('Ver «Vivir esperando su venida» en Los últimos tiempos', R.escatologia + '#temas/5')
      ],
      pensar: 'El rico insensato hizo planes para muchos años sin contar con Dios. ¿En qué planes tuyos necesitas preguntarte si eres «rico para con Dios»?'
    },
    {
      id: 'c13', n: 'Capítulo 13: arrepentimiento, la puerta angosta y Jerusalén', ref: 'Lucas 13:1-35; Salmo 118:26', fecha: 32,
      visual: [
        cita('Lucas 13:31-35', 'Aquel mismo día llegaron unos fariseos, diciéndole: Sal, y vete de aquí, porque Herodes te quiere matar. Y les dijo: Id, y decid a aquella zorra: He aquí, echo fuera demonios y hago curaciones hoy y mañana, y al tercer día termino mi obra. Sin embargo, es necesario que hoy y mañana y pasado mañana siga mi camino; porque no es posible que un profeta muera fuera de Jerusalén. ¡Jerusalén, Jerusalén, que matas a los profetas, y apedreas a los que te son enviados! ¡Cuántas veces quise juntar a tus hijos, como la gallina a sus polluelos debajo de sus alas, y no quisiste! He aquí, vuestra casa os es dejada desierta; y os digo que no me veréis, hasta que llegue el tiempo en que digáis: Bendito el que viene en nombre del Señor.'),
        tabla({
          titulo: 'El capítulo en cinco escenas',
          cab: ['Pasaje', 'Escena', 'Enseñanza'],
          filas: [
            ['13:1-5', 'Los galileos y la torre de Siloé', 'Si no os arrepentís, todos pereceréis'],
            ['13:6-9', 'La higuera estéril', 'Dios da tiempo, pero no para siempre'],
            ['13:10-17', 'La mujer encorvada', 'Hija de Abraham, libre en el día de reposo'],
            ['13:18-30', 'Mostaza, levadura y la puerta angosta', 'El reino crece; esforzaos por entrar'],
            ['13:31-35', 'Herodes y el lamento', '«¡Jerusalén, Jerusalén!»']
          ]
        })
      ],
      texto: [
        'Unos le contaron a Jesús que Pilato había mezclado la sangre de unos galileos con la de sus sacrificios. Jesús preguntó si pensaban que eran más pecadores que los demás. «Os digo: No; antes si no os arrepentís, todos pereceréis igualmente» (Lc 13:3). Lo mismo dijo de los dieciocho que murieron al caer la torre de Siloé. Las tragedias no son siempre un castigo por pecados particulares, pero recuerdan a todos que necesitan arrepentirse.',
        { h: 'La higuera estéril' },
        'Un hombre buscó fruto en su higuera durante tres años sin hallarlo y mandó cortarla. El viñador le pidió un año más para cavar y abonar. Es una imagen de Israel y de cada persona: Dios es paciente, pero su paciencia tiene un fin.',
        { h: 'Una hija de Abraham' },
        'En una sinagoga, en sábado, había una mujer que llevaba dieciocho años encorvada, sin poder enderezarse. Jesús la llamó, le dijo «Mujer, eres libre de tu enfermedad», puso las manos sobre ella, y al momento se enderezó y glorificaba a Dios (Lc 13:12-13). El principal de la sinagoga se indignó. Jesús le respondió que ellos desataban su buey en sábado para darle de beber; ¿no debía ser desatada esta «hija de Abraham, que Satanás había atado dieciocho años»? (Lc 13:16).',
        { h: 'La puerta angosta' },
        'Alguien preguntó si eran pocos los que se salvan. Jesús no respondió con un número, sino con un llamado: «Esforzaos a entrar por la puerta angosta» (Lc 13:24). Algunos dirán que comieron y bebieron con Él, y oirán: «No sé de dónde sois». En cambio, «vendrán del oriente y del occidente, del norte y del sur, y se sentarán a la mesa en el reino de Dios» (Lc 13:29).',
        { h: '¡Jerusalén, Jerusalén!' },
        'Unos fariseos le advirtieron que Herodes quería matarlo. Jesús respondió: «Id, y decid a aquella zorra» que Él seguiría su obra hasta terminarla, porque no es posible que un profeta muera fuera de Jerusalén (Lc 13:32-33). Y lloró sobre la ciudad: como la gallina junta a sus polluelos, quiso juntar a sus hijos, «y no quisiste» (Lc 13:34). Pero añadió una esperanza: no lo verían hasta que dijeran «Bendito el que viene en nombre del Señor» (Lc 13:35; Sal 118:26). Israel lo recibirá cuando vuelva.',
        ir('Ver «Antipas y Jesús: aquella zorra» en La dinastía de Herodes', R.herodes + '#hijos/5'),
        ir('Ver «Israel y los pactos de Dios» en Los últimos tiempos', R.escatologia + '#temas/1')
      ],
      pensar: 'Jesús llamó a la mujer encorvada «hija de Abraham» y la soltó. ¿Hay algo que te ha tenido «encorvado» por años y que necesitas traer a Jesús?'
    },
    {
      id: 'c14', n: 'Capítulo 14: el banquete del reino y el costo del discipulado', ref: 'Lucas 14:1-35; Proverbios 25:6-7', fecha: 32,
      visual: [
        img('../mundo-judio/img/mj-boda-procesion.webp', 'Una procesión nocturna de boda avanza con antorchas y lámparas por una calle de una aldea, con invitados vestidos de fiesta', 'Una fiesta en una aldea de Galilea.'),
        cita('Lucas 14:12-14', 'Dijo también al que le había convidado: Cuando hagas comida o cena, no llames a tus amigos, ni a tus hermanos, ni a tus parientes, ni a vecinos ricos; no sea que ellos a su vez te vuelvan a convidar, y seas recompensado. Mas cuando hagas banquete, llama a los pobres, los mancos, los cojos y los ciegos; y serás bienaventurado; porque ellos no te pueden recompensar, pero te será recompensado en la resurrección de los justos.'),
        tabla({
          titulo: 'Cuatro enseñanzas en una comida',
          cab: ['Pasaje', 'Enseñanza'],
          filas: [
            ['14:1-6', 'Sanar al hidrópico en sábado'],
            ['14:7-11', 'El último lugar: el que se humilla será enaltecido'],
            ['14:12-14', 'Invitar a los que no pueden pagar'],
            ['14:15-24', 'La gran cena: los invitados se excusan y entran los pobres'],
            ['14:25-35', 'Calcular el costo: la torre, la guerra y la sal']
          ]
        })
      ],
      texto: [
        'El capítulo transcurre casi entero en una comida, en casa de un principal de los fariseos, en día de reposo. Lucas muestra muchas veces a Jesús a la mesa: allí enseña sobre el reino.',
        { h: 'El último lugar' },
        'Después de sanar a un hombre hidrópico, Jesús observó cómo los invitados escogían los primeros asientos. Les aconsejó sentarse en el último lugar, para que el anfitrión los hiciera subir, como enseña Proverbios 25:6-7. Pero no da solo un consejo de buenos modales: «cualquiera que se enaltece, será humillado; y el que se humilla, será enaltecido» (Lc 14:11). Así funciona el reino de Dios.',
        { h: 'Los invitados de Dios' },
        'Al anfitrión le dijo que no invitara a quienes pudieran devolverle la invitación, sino a «los pobres, los mancos, los cojos y los ciegos», y sería recompensado «en la resurrección de los justos» (Lc 14:13-14). Jesús no da una regla para toda fiesta, sino un principio: el amor que no espera nada a cambio imita a Dios.',
        { h: 'La gran cena' },
        'Un invitado exclamó: «Bienaventurado el que coma pan en el reino de Dios» (Lc 14:15). Jesús respondió con una parábola. Un hombre preparó una gran cena y envió a decir a los invitados que ya estaba lista. Todos comenzaron a excusarse: una hacienda, cinco yuntas de bueyes, un matrimonio. El señor, enojado, mandó traer de las calles a los pobres, mancos, cojos y ciegos, y luego de los caminos y vallados, «para que se llene mi casa» (Lc 14:23). Los que se creían seguros del banquete se quedan fuera por sus excusas; los despreciados entran.',
        { h: 'Calcular el costo' },
        'Grandes multitudes iban con Él, y Jesús se volvió para advertirles. Seguirle exige amarlo más que a la propia familia y que a la propia vida, y llevar la cruz (Lc 14:26-27). La palabra «aborrecer» es una forma semítica de decir «amar menos». Con dos ejemplos, el que edifica una torre y el rey que va a la guerra, Jesús pide calcular el costo: «cualquiera de vosotros que no renuncia a todo lo que posee, no puede ser mi discípulo» (Lc 14:33).',
        ir('Ir a la parábola de la gran cena', '#parabolas/4'),
        ir('Ver «La mesa: con quién se comía y cómo» en El mundo judío', R.mundo + '#vida/7')
      ],
      pensar: 'Los invitados no rechazaron la cena con odio, sino con excusas razonables. ¿Qué «excusas razonables» te están alejando del banquete de Dios?'
    },
    {
      id: 'c15', n: 'Capítulo 15: perdidos y encontrados', ref: 'Lucas 15:1-32', fecha: 32,
      visual: [
        img('lc-hijo-prodigo.webp', 'Un padre anciano corre por un camino polvoriento y abraza a su hijo joven, delgado y harapiento, ante una casa de campo de piedra', 'El padre corre a recibir a su hijo (Lc 15:20).'),
        cita('Lucas 15:1-7', 'Se acercaban a Jesús todos los publicanos y pecadores para oírle, y los fariseos y los escribas murmuraban, diciendo: Este a los pecadores recibe, y con ellos come. Entonces él les refirió esta parábola, diciendo: ¿Qué hombre de vosotros, teniendo cien ovejas, si pierde una de ellas, no deja las noventa y nueve en el desierto, y va tras la que se perdió, hasta encontrarla? Y cuando la encuentra, la pone sobre sus hombros gozoso; y al llegar a casa, reúne a sus amigos y vecinos, diciéndoles: Gozaos conmigo, porque he encontrado mi oveja que se había perdido. Os digo que así habrá más gozo en el cielo por un pecador que se arrepiente, que por noventa y nueve justos que no necesitan de arrepentimiento.'),
        tabla({
          titulo: 'Tres parábolas, un mismo mensaje',
          cab: ['', 'La oveja', 'La moneda', 'El hijo'],
          filas: [
            ['Proporción perdida', '1 de 100', '1 de 10', '1 de 2'],
            ['Quién busca', 'El pastor', 'La mujer', 'El padre espera y corre'],
            ['Cómo se perdió', 'Por descuido', 'Sin culpa propia', 'Por rebeldía'],
            ['Final', 'Gozo con amigos y vecinos', 'Gozo con amigas y vecinas', 'Fiesta… y un hermano afuera']
          ]
        })
      ],
      texto: [
        'Este es el corazón del evangelio de Lucas. Todos los publicanos y pecadores se acercaban a Jesús para oírle, y los fariseos y escribas murmuraban: «Este a los pecadores recibe, y con ellos come» (Lc 15:2). Jesús respondió con tres parábolas.',
        { h: 'La oveja y la moneda' },
        'Un pastor que pierde una oveja deja las noventa y nueve y la busca hasta encontrarla; luego la pone sobre sus hombros gozoso y llama a sus vecinos a celebrar. «Os digo que así habrá más gozo en el cielo por un pecador que se arrepiente, que por noventa y nueve justos que no necesitan de arrepentimiento» (Lc 15:7). Una mujer que pierde una de sus diez monedas enciende la lámpara, barre la casa y busca con diligencia; al hallarla, también hace fiesta. Dios busca a los perdidos y se alegra al encontrarlos.',
        { h: 'Los dos hijos' },
        'La tercera parábola es la más larga. El hijo menor pidió su parte de la herencia, como si su padre ya estuviera muerto, y la malgastó lejos, viviendo perdidamente. Cuando vino el hambre, terminó cuidando cerdos, el oficio más bajo para un judío. «Y volviendo en sí» (Lc 15:17), decidió regresar y pedir ser tratado como jornalero.',
        'El centro de la historia es el padre. «Cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó» (Lc 15:20). Un hombre mayor de aquel tiempo no corría en público, pero este padre corrió. No dejó que el hijo terminara su discurso: mandó traer el mejor vestido, el anillo y el calzado, y hacer fiesta, «porque este mi hijo muerto era, y ha revivido; se había perdido, y es hallado» (Lc 15:24).',
        { h: 'El hermano mayor' },
        'La parábola no termina ahí. El hijo mayor volvió del campo, oyó la música y se enojó. No quiso entrar. Se quejó de que nunca había recibido ni un cabrito, aunque había servido tantos años. El padre salió también a buscarlo: «Hijo, tú siempre estás conmigo, y todas mis cosas son tuyas» (Lc 15:31). La historia termina sin decir si entró. Era una invitación a los fariseos que murmuraban, y lo es a todo creyente que se cree más merecedor que los demás.',
        ir('Ir a la parábola del hijo pródigo', '#parabolas/5'),
        ir('Ver el pasaje en la Armonía', R.armonia + '#hijo-prodigo')
      ],
      pensar: '¿Te pareces más al hijo menor que vuelve o al hermano mayor que no quiere entrar? ¿Cómo responde el Padre a cada uno?'
    },
    {
      id: 'c16', n: 'Capítulo 16: el mayordomo infiel y el rico y Lázaro', ref: 'Lucas 16:1-31', fecha: 32,
      visual: [
        img('lc-rico-lazaro.webp', 'Ante la puerta de piedra de una casa lujosa, un mendigo flaco y cubierto de llagas yace en el suelo, mientras se ve el banquete adentro y unos perros se le acercan', 'Lázaro a la puerta del rico (Lc 16:20-21).'),
        cita('Lucas 16:19-26', 'Había un hombre rico, que se vestía de púrpura y de lino fino, y hacía cada día banquete con esplendidez. Había también un mendigo llamado Lázaro, que estaba echado a la puerta de aquél, lleno de llagas, y ansiaba saciarse de las migajas que caían de la mesa del rico; y aun los perros venían y le lamían las llagas. Aconteció que murió el mendigo, y fue llevado por los ángeles al seno de Abraham; y murió también el rico, y fue sepultado. Y en el Hades alzó sus ojos, estando en tormentos, y vio de lejos a Abraham, y a Lázaro en su seno. Entonces él, dando voces, dijo: Padre Abraham, ten misericordia de mí, y envía a Lázaro para que moje la punta de su dedo en agua, y refresque mi lengua; porque estoy atormentado en esta llama. Pero Abraham le dijo: Hijo, acuérdate que recibiste tus bienes en tu vida, y Lázaro también males; pero ahora éste es consolado aquí, y tú atormentado. Además de todo esto, una gran sima está puesta entre nosotros y vosotros, de manera que los que quisieren pasar de aquí a vosotros, no pueden, ni de allá pasar acá.')
      ],
      texto: [
        'El capítulo 16 trata del dinero, con dos parábolas que comienzan igual: «Había un hombre rico».',
        { h: 'Un administrador astuto' },
        'Un mayordomo fue acusado de malgastar los bienes de su amo y supo que lo despedirían. Antes de irse, llamó a los deudores de su amo y les rebajó las deudas, para que lo recibieran en sus casas después. «Alabó el amo al mayordomo malo por haber hecho sagazmente» (Lc 16:8). Jesús no aprueba su deshonestidad; destaca su astucia para preparar el futuro. «Los hijos de este siglo son más sagaces en el trato con sus semejantes que los hijos de luz.»',
        'La aplicación es clara: usar el dinero, que es pasajero, para fines eternos, ganando amigos que nos reciban «en las moradas eternas» (Lc 16:9). El que es fiel en lo muy poco, también en lo más es fiel. Y una advertencia final: «Ningún siervo puede servir a dos señores… No podéis servir a Dios y a las riquezas» (Lc 16:13). Los fariseos, que eran avaros, se burlaban de Él.',
        { h: 'El rico y Lázaro' },
        'Había un hombre rico que se vestía de púrpura y lino fino y hacía banquete cada día. A su puerta yacía un mendigo llamado Lázaro, lleno de llagas, que deseaba comer las migajas de su mesa, y hasta los perros le lamían las llagas. Es el único personaje de una parábola de Jesús que tiene nombre, y significa «Dios ayuda».',
        'Los dos murieron. Lázaro fue llevado por los ángeles al seno de Abraham; el rico estaba en el Hades, en tormentos. Pidió que Lázaro mojara su dedo para refrescar su lengua, pero Abraham respondió que en vida él había recibido sus bienes, y que «una gran sima está puesta entre nosotros y vosotros» (Lc 16:26). Después de la muerte no se puede cambiar de lugar.',
        'Entonces el rico pidió que Lázaro fuera a advertir a sus cinco hermanos. «A Moisés y a los profetas tienen; óiganlos.» Y si alguno se levantara de los muertos, tampoco se persuadirían (Lc 16:29-31). Poco después, Jesús resucitó, y muchos no creyeron.',
        'La parábola no describe todos los detalles del más allá, pero enseña con seriedad que existe una vida consciente después de la muerte, que el destino se decide en esta vida y que la Escritura basta para conocer el camino.',
        ir('Ir a la parábola del rico y Lázaro', '#parabolas/6')
      ],
      pensar: 'El rico no maltrató a Lázaro; simplemente no lo vio. ¿Quién está «a tu puerta» y no lo estás viendo?'
    },
    {
      id: 'c17', n: 'Capítulos 17–18: fe, gratitud y la venida del reino', ref: 'Lucas 17:1–18:14; Génesis 7; 19', fecha: 33,
      visual: [
        img('lc-diez-leprosos.webp', 'En un camino entre Samaria y Galilea, un hombre con ropas raídas se postra rostro en tierra a los pies de una figura vista de espaldas, mientras otros nueve se alejan por el camino', 'El samaritano vuelve a dar gracias (Lc 17:15-16).'),
        cita('Lucas 17:11-19', 'Yendo Jesús a Jerusalén, pasaba entre Samaria y Galilea. Y al entrar en una aldea, le salieron al encuentro diez hombres leprosos, los cuales se pararon de lejos y alzaron la voz, diciendo: ¡Jesús, Maestro, ten misericordia de nosotros! Cuando él los vio, les dijo: Id, mostraos a los sacerdotes. Y aconteció que mientras iban, fueron limpiados. Entonces uno de ellos, viendo que había sido sanado, volvió, glorificando a Dios a gran voz, y se postró rostro en tierra a sus pies, dándole gracias; y éste era samaritano. Respondiendo Jesús, dijo: ¿No son diez los que fueron limpiados? Y los nueve, ¿dónde están? ¿No hubo quien volviese y diese gloria a Dios sino este extranjero? Y le dijo: Levántate, vete; tu fe te ha salvado.'),
        img('lc-fariseo-publicano.webp', 'En un atrio del templo, un fariseo bien vestido ora de pie con las manos en alto mientras, al fondo, un publicano con la cabeza baja se golpea el pecho', 'El fariseo y el publicano (Lc 18:10-13).')
      ],
      texto: [
        'En este tramo del viaje se reúnen enseñanzas sobre la fe, la gratitud, la venida del reino y la oración.',
        { h: 'Perdón, fe y servicio' },
        'Jesús enseña a perdonar al hermano que se arrepiente, aunque peque siete veces al día. Los apóstoles pidieron: «Auméntanos la fe». Jesús respondió que una fe como un grano de mostaza bastaría para arrancar un sicómoro (Lc 17:5-6). No se necesita una fe grande, sino fe en un Dios grande. Y con la imagen del siervo que hace lo que se le manda, enseñó a servir sin buscar recompensa: «Siervos inútiles somos, pues lo que debíamos hacer, hicimos» (Lc 17:10).',
        { h: 'Diez leprosos' },
        'Yendo a Jerusalén, entre Samaria y Galilea, diez leprosos le gritaron de lejos pidiendo misericordia. Jesús los envió a mostrarse a los sacerdotes, y mientras iban, quedaron limpios. Solo uno volvió glorificando a Dios a gran voz y se postró a sus pies dándole gracias, «y éste era samaritano» (Lc 17:16). Jesús preguntó: «¿No son diez los que fueron limpiados? Y los nueve, ¿dónde están?». Y le dijo: «Levántate, vete; tu fe te ha salvado» (Lc 17:19). Los diez fueron sanados; solo uno recibió además la salvación.',
        { h: 'Cuándo vendrá el reino' },
        'Los fariseos preguntaron cuándo vendría el reino. Jesús respondió que no vendría con señales visibles para calcularlo, porque «el reino de Dios está entre vosotros» (Lc 17:21): estaba presente en Él. Pero a sus discípulos les habló de su venida futura: será como el relámpago, visible para todos, y sorprenderá a la gente como el diluvio en los días de Noé y el fuego en los de Lot. «Acordaos de la mujer de Lot» (Lc 17:32). La gente estará comiendo, comprando y edificando, sin prepararse.',
        { h: 'Dos parábolas de oración' },
        'Para enseñar «la necesidad de orar siempre, y no desmayar», Jesús contó de una viuda que insistió hasta que un juez injusto le hizo justicia (Lc 18:1-8). Dios, que no es injusto, hará justicia a sus escogidos. Y a algunos que confiaban en sí mismos les contó del fariseo que oraba dando gracias por no ser como los demás, y del publicano que no alzaba los ojos y decía: «Dios, sé propicio a mí, pecador» (Lc 18:13). Este volvió a su casa justificado.',
        ir('Ir a la parábola del fariseo y el publicano', '#parabolas/7'),
        ir('Ver «Señales de los tiempos sin fijar fechas» en Los últimos tiempos', R.escatologia + '#temas/4')
      ],
      pensar: 'Nueve leprosos fueron sanados y siguieron su camino; uno volvió a dar gracias. ¿Por qué cosas que Dios ha hecho en tu vida todavía no has vuelto a darle gracias?'
    },
    {
      id: 'c18', n: 'Capítulos 18–19: niños, un rico, un ciego y Zaqueo', ref: 'Lucas 18:15–19:27', fecha: 33,
      visual: [
        img('../mundo-judio/img/mj-zaqueo.webp', 'Un hombre muy bajo, con manto verde bordado, baja de un sicómoro en una calle de Jericó mientras la gente murmura', 'Zaqueo baja del sicómoro (Lc 19:5-6).'),
        mapa({ view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'jerusalen', 'betania', 'desierto-judea'], trazos: ['c-jerico'] }, 'Mapa'),
        tabla({
          titulo: 'Dos ricos frente a Jesús',
          cab: ['', 'El joven rico (18:18-30)', 'Zaqueo (19:1-10)'],
          filas: [
            ['Reputación', 'Principal, cumplidor de la ley', 'Jefe de publicanos, pecador público'],
            ['Pregunta o deseo', '«¿Qué haré para heredar la vida eterna?»', 'Quería ver quién era Jesús'],
            ['Respuesta', 'Se puso muy triste', 'Lo recibió gozoso'],
            ['Sus bienes', 'No pudo dejarlos', 'Dio la mitad y devolvió cuatro veces lo robado'],
            ['Final', '«¡Cuán difícilmente entrarán en el reino!»', '«Hoy ha venido la salvación a esta casa»']
          ]
        })
      ],
      texto: [
        'Al acercarse a Jericó, el viaje llega a su última etapa. Cuatro encuentros muestran quiénes entran en el reino.',
        { h: 'Los niños' },
        'Traían niños a Jesús para que los tocara, y los discípulos los reprendían. Jesús los llamó: «Dejad a los niños venir a mí… porque de los tales es el reino de Dios» (Lc 18:16). El reino se recibe como un niño: con confianza y sin méritos.',
        { h: 'Un hombre muy rico' },
        'Un principal preguntó qué debía hacer para heredar la vida eterna. Decía haber guardado los mandamientos desde su juventud. Jesús le dijo que le faltaba una cosa: vender todo, darlo a los pobres y seguirlo. «Entonces él, oyendo esto, se puso muy triste, porque era muy rico» (Lc 18:23). Jesús dijo que es más fácil que un camello pase por el ojo de una aguja que un rico entre en el reino. Los discípulos se preguntaron quién podría salvarse. «Lo que es imposible para los hombres, es posible para Dios» (Lc 18:27).',
        { h: 'Tercer anuncio y un ciego' },
        'Jesús anunció de nuevo que en Jerusalén se cumpliría todo lo escrito por los profetas: sería entregado, escarnecido, azotado, muerto, y resucitaría al tercer día. Los doce no entendieron nada. Al llegar a Jericó, en cambio, un ciego que mendigaba gritó: «¡Jesús, Hijo de David, ten misericordia de mí!» (Lc 18:38). El ciego veía mejor que los discípulos quién era Jesús. Recibió la vista y le seguía glorificando a Dios.',
        { h: 'Zaqueo' },
        'En Jericó vivía Zaqueo, jefe de los publicanos y rico. Quería ver a Jesús, pero era pequeño de estatura, y subió a un sicómoro. Jesús se detuvo, lo miró y le dijo: «Zaqueo, date prisa, desciende, porque hoy es necesario que pose yo en tu casa» (Lc 19:5). Todos murmuraban. Zaqueo, en cambio, prometió dar la mitad de sus bienes a los pobres y devolver cuatro veces lo defraudado. Jesús declaró: «Hoy ha venido la salvación a esta casa… Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido» (Lc 19:9-10). Lo imposible para el joven rico fue posible para Zaqueo por la gracia.',
        { h: 'Las minas' },
        'Como algunos pensaban que el reino aparecería en seguida, Jesús contó de un noble que se fue a un país lejano a recibir un reino y volver. Antes dio una mina a cada siervo para negociar. A su regreso premió a los fieles y quitó al que la escondió. El reino vendrá cuando el Rey vuelva; mientras tanto, sus siervos deben trabajar con lo que recibieron.',
        ir('Ver Zaqueo en la Armonía', R.armonia + '#zaqueo')
      ],
      pensar: 'El joven rico se fue triste; Zaqueo recibió a Jesús con gozo. ¿Qué te impide recibir a Jesús con la alegría de Zaqueo?'
    },
    {
      id: 'c19', n: 'Capítulos 19–20: el Rey llega a Jerusalén', ref: 'Lucas 19:28–20:47; Zacarías 9:9; Salmo 118:22-26', fecha: 33,
      visual: [
        img('../mundo-judio/img/mj-multitud-rey.webp', 'Una multitud de peregrinos tiende mantos en el camino que baja del monte de los Olivos hacia Jerusalén, con las murallas y el templo al fondo', 'La entrada en Jerusalén desde el monte de los Olivos (Lc 19:36-37).'),
        cita('Lucas 19:41-44', 'Y cuando llegó cerca de la ciudad, al verla, lloró sobre ella, diciendo: ¡Oh, si también tú conocieses, a lo menos en este tu día, lo que es para tu paz! Mas ahora está encubierto de tus ojos. Porque vendrán días sobre ti, cuando tus enemigos te rodearán con vallado, y te sitiarán, y por todas partes te estrecharán, y te derribarán a tierra, y a tus hijos dentro de ti, y no dejarán en ti piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación.'),
        pasos([
          { t: 'De Jericó a Betfagé y Betania, junto al monte de los Olivos (19:28-29)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['betania', 'monte-olivos', 'jerusalen'] } },
          { t: 'Al bajar del monte, Jesús llora sobre la ciudad (19:41)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['monte-olivos', 'jerusalen', 'getsemani'] } }
        ])
      ],
      texto: [
        'Después de casi diez capítulos de viaje, Jesús llega a Jerusalén. Mandó traer un pollino en el que nadie había montado y entró sobre él, como había anunciado Zacarías: el rey viene «humilde, y cabalgando sobre un asno» (Zac 9:9).',
        { h: 'Bendito el Rey' },
        'Al bajar del monte de los Olivos, la multitud de los discípulos comenzó a alabar a Dios a gran voz: «¡Bendito el rey que viene en el nombre del Señor; paz en el cielo, y gloria en las alturas!» (Lc 19:38). El canto recuerda el de los ángeles en Belén. Algunos fariseos le pidieron que reprendiera a sus discípulos. Jesús respondió: «si éstos callaran, las piedras clamarían» (Lc 19:40).',
        { h: 'Jesús llora' },
        'Solo Lucas cuenta que, al ver la ciudad, Jesús lloró sobre ella. Jerusalén no conoció lo que era para su paz. Vendrían días en que sus enemigos la rodearían con vallado y no dejarían piedra sobre piedra, «por cuanto no conociste el tiempo de tu visitación» (Lc 19:44). Cuarenta años después, en el año 70, los romanos la destruyeron. El Rey llora por la ciudad que lo rechaza.',
        { h: 'En el templo' },
        'Jesús entró en el templo y echó a los que vendían: «Mi casa es casa de oración; mas vosotros la habéis hecho cueva de ladrones» (Lc 19:46). Desde entonces enseñaba cada día en el templo. Los principales sacerdotes, los escribas y los ancianos buscaban matarlo, pero no hallaban cómo, «porque todo el pueblo estaba suspenso oyéndole» (Lc 19:48).',
        { h: 'Preguntas y trampas' },
        'El capítulo 20 reúne las controversias de Jerusalén. Le preguntaron con qué autoridad hacía esto, y Él respondió con otra pregunta sobre Juan. Contó la parábola de los labradores malvados que mataron al hijo del dueño de la viña, y citó el Salmo 118: la piedra que desecharon los edificadores vino a ser cabeza del ángulo. Le tendieron trampas: sobre el tributo a César («Dad a César lo que es de César, y a Dios lo que es de Dios», Lc 20:25) y sobre la resurrección, que los saduceos negaban. Jesús respondió que Dios «no es Dios de muertos, sino de vivos, pues para él todos viven» (Lc 20:38). Y les preguntó cómo el Cristo puede ser hijo de David si David lo llama Señor (Sal 110:1).',
        ir('Ver la entrada en la Armonía', R.armonia + '#entrada-triunfal'),
        ir('Ver «La última semana, día por día» en Cronología', R.crono + '#semana/1')
      ],
      pensar: 'Jesús lloró por una ciudad que no conoció el tiempo de su visitación. ¿Estás reconociendo los momentos en que Dios te visita?'
    },
    {
      id: 'c21', n: 'Capítulo 21: la ofrenda de la viuda y el discurso del fin', ref: 'Lucas 21:1-38; Daniel 9:26-27; Romanos 11:25', fecha: 33,
      visual: [
        cita('Lucas 21:20-28', 'Pero cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado. Entonces los que estén en Judea, huyan a los montes; y los que en medio de ella, váyanse; y los que estén en los campos, no entren en ella. Porque estos son días de retribución, para que se cumplan todas las cosas que están escritas. Mas ¡ay de las que estén encintas, y de las que críen en aquellos días! porque habrá gran calamidad en la tierra, e ira sobre este pueblo. Y caerán a filo de espada, y serán llevados cautivos a todas las naciones; y Jerusalén será hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan. Entonces habrá señales en el sol, en la luna y en las estrellas, y en la tierra angustia de las gentes, confundidas a causa del bramido del mar y de las olas; desfalleciendo los hombres por el temor y la expectación de las cosas que sobrevendrán en la tierra; porque las potencias de los cielos serán conmovidas. Entonces verán al Hijo del Hombre, que vendrá en una nube con poder y gran gloria. Cuando estas cosas comiencen a suceder, erguíos y levantad vuestra cabeza, porque vuestra redención está cerca.'),
        esq('lc-discurso.svg', 'Línea de tiempo: la destrucción de Jerusalén en el año 70, una flecha larga marcada «los tiempos de los gentiles», y al final las señales en el cielo y la venida del Hijo del Hombre', 'Lucas 21: del año 70 a la venida del Hijo del Hombre.'),
        tabla({
          titulo: 'Dos horizontes en el discurso',
          cab: ['Pasaje', 'Acontecimiento', 'Cumplimiento'],
          filas: [
            ['21:5-6', 'No quedará piedra sobre piedra', 'Año 70'],
            ['21:8-19', 'Engaños, guerras y persecución', 'Toda la era de la iglesia'],
            ['21:20-24', 'Jerusalén rodeada de ejércitos; el pueblo llevado cautivo', 'Año 70 y la dispersión'],
            ['21:24', '«Hasta que los tiempos de los gentiles se cumplan»', 'Desde el 70 hasta el fin'],
            ['21:25-28', 'Señales en el cielo; el Hijo del Hombre viene en una nube', 'Venida de Cristo en gloria']
          ]
        })
      ],
      texto: [
        'Antes del discurso, Lucas cuenta una escena breve. Jesús vio a los ricos echar sus ofrendas en el arca, y a una viuda pobre que echó dos blancas. «En verdad os digo, que esta viuda pobre echó más que todos» (Lc 21:3), porque dio todo su sustento. Dios mide la ofrenda por lo que queda, no por lo que se da.',
        { h: 'Piedra sobre piedra' },
        'Algunos admiraban las piedras hermosas del templo. Jesús anunció que no quedaría piedra sobre piedra. Le preguntaron cuándo sería y qué señal habría. Su respuesta tiene dos horizontes que se entrelazan: la destrucción de Jerusalén y su venida al final de los tiempos.',
        { h: 'Lo que vendría antes' },
        'Habría engañadores que dirían «Yo soy el Cristo», guerras, terremotos, hambres y pestilencias. Pero antes de todo eso, los discípulos serían perseguidos, llevados ante reyes y gobernadores. Jesús promete: «yo os daré palabra y sabiduría, la cual no podrán resistir» (Lc 21:15), y «con vuestra paciencia ganaréis vuestras almas» (Lc 21:19). Hechos muestra cómo se cumplió.',
        { h: 'Jerusalén rodeada de ejércitos' },
        'Lucas registra con claridad la parte que se cumplió en el año 70: «cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado» (Lc 21:20). Los de Judea debían huir a los montes; según una antigua tradición, los creyentes de Jerusalén escaparon a Pela antes del asedio. El pueblo sería llevado cautivo a todas las naciones, y Jerusalén sería «hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan» (Lc 21:24).',
        { h: 'Los tiempos de los gentiles y la venida' },
        'Esa frase abre un período que dura hasta hoy. Al final vendrán señales en el sol, la luna y las estrellas, angustia de las naciones, «Entonces verán al Hijo del Hombre, que vendrá en una nube con poder y gran gloria» (Lc 21:27). Los creyentes no deben temer: «erguíos y levantad vuestra cabeza, porque vuestra redención está cerca» (Lc 21:28).',
        { posturas: {
          titulo: '¿Todo se cumplió en el año 70?',
          a: { n: 'Dos horizontes: el año 70 y la venida futura', t: 'La destrucción de Jerusalén cumplió una parte del discurso, pero «los tiempos de los gentiles» abren un período largo, y la venida del Hijo del Hombre en gloria es todavía futura. Esa venida estará precedida por la gran tribulación (Mt 24:21), y antes la iglesia será arrebatada (1 Ts 4:16-17). Es la lectura de este sitio.' },
          b: { n: 'Todo se cumplió en el año 70', t: 'La lectura llamada preterista entiende que todo el discurso, incluida la «venida» del Hijo del Hombre, describe en lenguaje simbólico el juicio de Dios sobre Jerusalén en el año 70.' },
          c: 'Lucas mismo separa los dos horizontes con los tiempos de los gentiles, y Hechos 1:11 anuncia que Jesús volverá «así como le habéis visto ir al cielo», de manera visible. Por eso la venida de Lucas 21:27 sigue siendo la esperanza de la iglesia.'
        } },
        'El capítulo termina con un llamado: «Velad, pues, en todo tiempo orando» (Lc 21:36).',
        ir('Ver «Los tiempos de los gentiles» en Los últimos tiempos', R.escatologia + '#panorama/6'),
        ir('Ver «La guerra judía y la caída de Jerusalén» en Cronología', R.crono + '#apostoles/4')
      ],
      pensar: 'Jesús dice que, cuando vengan las señales, levantemos la cabeza, porque la redención está cerca. ¿Vives con temor del futuro o con esa esperanza?'
    },
    {
      id: 'c22a', n: 'Capítulo 22 (I): la última cena', ref: 'Lucas 22:1-38; Éxodo 12; Jeremías 31:31-34; Isaías 53:12', fecha: 33,
      visual: [
        img('lc-ultima-cena.webp', 'En un aposento alto iluminado por lámparas de aceite, un grupo de hombres reclinados en torno a una mesa baja observa a una figura vista de espaldas que levanta una copa', 'La copa del nuevo pacto (Lc 22:20).'),
        cita('Lucas 22:14-20', 'Cuando era la hora, se sentó a la mesa, y con él los apóstoles. Y les dijo: ¡Cuánto he deseado comer con vosotros esta pascua antes que padezca! Porque os digo que no la comeré más, hasta que se cumpla en el reino de Dios. Y habiendo tomado la copa, dio gracias, y dijo: Tomad esto, y repartidlo entre vosotros; porque os digo que no beberé más del fruto de la vid, hasta que el reino de Dios venga. Y tomó el pan y dio gracias, y lo partió y les dio, diciendo: Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí. De igual manera, después que hubo cenado, tomó la copa, diciendo: Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama.'),
        img('../cronologia-nuevo-testamento/img/cr-pascua-corderos.webp', 'Sacerdotes y peregrinos con corderos en los atrios del templo de Jerusalén, en la víspera de la Pascua', 'La Pascua en el templo (Lc 22:7).')
      ],
      texto: [
        'Se acercaba la fiesta de los panes sin levadura, «que se llama la pascua» (Lc 22:1). Los principales sacerdotes buscaban cómo matar a Jesús sin provocar al pueblo. Entonces «entró Satanás en Judas» (Lc 22:3), que fue a negociar la entrega y recibió dinero.',
        { h: 'La Pascua nueva' },
        'Jesús envió a Pedro y Juan a preparar la Pascua en un aposento alto. Al sentarse a la mesa dijo: «¡Cuánto he deseado comer con vosotros esta pascua antes que padezca!» (Lc 22:15). La Pascua recordaba la liberación de Egipto por la sangre del cordero. Ahora Jesús le dio un nuevo sentido.',
        'Tomó el pan, dio gracias, lo partió y dijo: «Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí» (Lc 22:19). Después tomó la copa: «Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama» (Lc 22:20). Su muerte sería el sacrificio que inaugura el nuevo pacto prometido por Jeremías (Jer 31:31-34), en el que Dios perdona el pecado y escribe su ley en el corazón. La iglesia celebra la Cena del Señor en memoria de Él, «hasta que él venga» (1 Co 11:26).',
        { h: '¿Quién es el mayor?' },
        'En esa misma mesa, los discípulos discutían cuál de ellos sería el mayor. Jesús les dijo que entre los gentiles los reyes se enseñorean, pero entre ellos no debía ser así: «yo estoy entre vosotros como el que sirve» (Lc 22:27). Y les prometió que comerían y beberían a su mesa en su reino y se sentarían en tronos juzgando a las doce tribus de Israel (Lc 22:30).',
        { h: 'Pedro y la oración de Jesús' },
        'Jesús advirtió a Pedro: «Simón, Simón, he aquí Satanás os ha pedido para zarandearos como a trigo; pero yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos» (Lc 22:31-32). Pedro caería, pero no para siempre, porque Jesús oraba por él. Esa misma noche lo negaría tres veces.',
        'Al final, Jesús citó Isaías 53: «Y fue contado con los inicuos» (Lc 22:37). Iba a morir como un malhechor, en lugar de los malhechores.',
        ir('Ver la santa cena en la Armonía', R.armonia + '#santa-cena'),
        ir('Ver «La Pascua en Juan y en los otros evangelios» en Cronología', R.crono + '#semana/3')
      ],
      pensar: 'Jesús oró por Pedro antes de que cayera, para que su fe no faltara. ¿Qué consuelo te da saber que Cristo intercede por ti (He 7:25)?'
    },
    {
      id: 'c22b', n: 'Capítulo 22 (II): Getsemaní, el arresto y el Sanedrín', ref: 'Lucas 22:39-71; Salmo 110:1; Daniel 7:13', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/getsemani.webp', 'De noche, entre olivos antiguos, una figura vista de espaldas ora postrada junto a una roca, mientras tres discípulos duermen a cierta distancia', 'Getsemaní (Lc 22:41-45).'),
        cita('Lucas 22:41-46', 'Y él se apartó de ellos a distancia como de un tiro de piedra; y puesto de rodillas oró, diciendo: Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya. Y se le apareció un ángel del cielo para fortalecerle. Y estando en agonía, oraba más intensamente; y era su sudor como grandes gotas de sangre que caían hasta la tierra. Cuando se levantó de la oración, y vino a sus discípulos, los halló durmiendo a causa de la tristeza; y les dijo: ¿Por qué dormís? Levantaos, y orad para que no entréis en tentación.'),
        tabla({
          titulo: 'Lo que solo cuenta Lucas en esta noche',
          cab: ['Detalle', 'Pasaje'],
          filas: [
            ['Un ángel lo fortalece; su sudor como gotas de sangre', '22:43-44'],
            ['Los discípulos dormían «a causa de la tristeza»', '22:45'],
            ['Jesús sana la oreja del siervo', '22:51'],
            ['«Esta es vuestra hora, y la potestad de las tinieblas»', '22:53'],
            ['«Vuelto el Señor, miró a Pedro»', '22:61']
          ]
        })
      ],
      texto: [
        'Jesús salió al monte de los Olivos, como solía, y dijo a sus discípulos: «Orad que no entréis en tentación» (Lc 22:40). Se apartó a un tiro de piedra, se puso de rodillas y oró: «Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya» (Lc 22:42).',
        { h: 'La agonía' },
        'La copa era la ira de Dios contra el pecado, que Jesús iba a beber en lugar nuestro. Su verdadera humanidad sintió todo el peso de esa hora, y su obediencia fue completa. Lucas agrega que se le apareció un ángel para fortalecerlo, y que, en agonía, oraba más intensamente, y su sudor era como grandes gotas de sangre (Lc 22:43-44).',
        { posturas: {
          titulo: 'Lucas 22:43-44 en los manuscritos',
          a: { n: 'Parte original del evangelio', t: 'Estos versículos están en muchos manuscritos antiguos y en la gran mayoría de los posteriores, y los citan escritores del siglo II como Justino e Ireneo. Algunos copistas pudieron omitirlos porque les parecía que mostraban a Jesús demasiado débil.' },
          b: { n: 'Una adición antigua', t: 'Faltan en varios de los manuscritos más antiguos, como el papiro 75 y el códice Vaticano, y otros los marcan con signos de duda. Muchos editores del texto griego los ponen entre corchetes.' },
          c: 'La Reina-Valera 1960 los incluye. Lo que enseñan, la angustia real de Jesús, se afirma también en pasajes seguros (Mt 26:37-38; He 5:7). Ninguna doctrina depende de ellos.'
        } },
        { h: 'El arresto' },
        'Llegó Judas con una turba y se acercó para besarlo. «Judas, ¿con un beso entregas al Hijo del Hombre?» (Lc 22:48). Uno de los discípulos hirió con la espada al siervo del sumo sacerdote y le cortó la oreja derecha. Jesús dijo «Basta ya» y, tocando su oreja, le sanó (Lc 22:51): su último milagro antes de la cruz fue para un enemigo. Y dijo a los que venían a prenderlo: «esta es vuestra hora, y la potestad de las tinieblas» (Lc 22:53).',
        { h: 'Pedro niega' },
        'En el patio del sumo sacerdote, Pedro negó tres veces conocer a Jesús. Al cantar el gallo, «vuelto el Señor, miró a Pedro» (Lc 22:61). Pedro recordó la palabra del Señor, salió y lloró amargamente. Esa mirada no fue de condena, sino de amor que llama al arrepentimiento.',
        { h: 'Ante el Sanedrín' },
        'Al amanecer, el concilio le preguntó si era el Cristo. Jesús respondió: «Desde ahora el Hijo del Hombre se sentará a la diestra del poder de Dios» (Lc 22:69), uniendo el Salmo 110:1 y Daniel 7:13. «¿Luego eres tú el Hijo de Dios?» «Vosotros decís que lo soy.» Para ellos, ya no necesitaban más testimonio.',
        ir('Ver Getsemaní en la Armonía', R.armonia + '#getsemani'),
        ir('Ver «El Sanedrín en tiempos de Jesús» en El mundo judío', R.mundo + '#poder/4')
      ],
      pensar: 'Jesús miró a Pedro justo después de su tercera negación. Si hoy Jesús te mirara así después de una caída, ¿qué crees que encontrarías en su mirada?'
    },
    {
      id: 'c23', n: 'Capítulo 23: Pilato, Herodes y la cruz', ref: 'Lucas 23:1-56; Isaías 53:12; Salmo 31:5', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/golgota.webp', 'Bajo un cielo oscurecido, tres cruces sobre una colina rocosa fuera de las murallas de Jerusalén, con un grupo de mujeres mirando de lejos', 'El Calvario (Lc 23:33, 49).'),
        cita('Lucas 23:39-46', 'Y uno de los malhechores que estaban colgados le injuriaba, diciendo: Si tú eres el Cristo, sálvate a ti mismo y a nosotros. Respondiendo el otro, le reprendió, diciendo: ¿Ni aun temes tú a Dios, estando en la misma condenación? Nosotros, a la verdad, justamente padecemos, porque recibimos lo que merecieron nuestros hechos; mas éste ningún mal hizo. Y dijo a Jesús: Acuérdate de mí cuando vengas en tu reino. Entonces Jesús le dijo: De cierto te digo que hoy estarás conmigo en el paraíso. Cuando era como la hora sexta, hubo tinieblas sobre toda la tierra hasta la hora novena. Y el sol se oscureció, y el velo del templo se rasgó por la mitad. Entonces Jesús, clamando a gran voz, dijo: Padre, en tus manos encomiendo mi espíritu. Y habiendo dicho esto, expiró.'),
        tabla({
          titulo: 'Inocente: siete testimonios en Lucas 23',
          cab: ['Testigo', 'Pasaje'],
          filas: [
            ['Pilato: «Ningún delito hallo en este hombre»', '23:4'],
            ['Pilato otra vez, después de examinarlo', '23:14'],
            ['Herodes: nada digno de muerte', '23:15'],
            ['Pilato por tercera vez', '23:22'],
            ['El ladrón: «éste ningún mal hizo»', '23:41'],
            ['El centurión: «Verdaderamente este hombre era justo»', '23:47'],
            ['La multitud se vuelve golpeándose el pecho', '23:48']
          ]
        })
      ],
      texto: [
        'Los líderes llevaron a Jesús ante Pilato con acusaciones políticas: que pervertía a la nación, prohibía dar tributo a César y decía ser rey (Lc 23:2). Pilato lo interrogó y dijo: «Ningún delito hallo en este hombre» (Lc 23:4).',
        { h: 'Ante Herodes' },
        'Al oír que era galileo, Pilato lo envió a Herodes Antipas, que estaba en Jerusalén por la fiesta. Solo Lucas lo cuenta. Herodes se alegró, porque hacía tiempo que deseaba verle hacer alguna señal. Le hizo muchas preguntas, pero Jesús no le respondió nada. Herodes y sus soldados lo menospreciaron, lo vistieron con una ropa espléndida y lo devolvieron a Pilato. Ese día Pilato y Herodes se hicieron amigos (Lc 23:12). Hechos 4:27 recuerda que Herodes, Pilato, los gentiles y el pueblo de Israel se juntaron contra Jesús.',
        { h: 'Barrabás' },
        'Pilato declaró tres veces la inocencia de Jesús y quiso soltarlo después de castigarlo, pero la multitud gritaba: «¡Crucifícale, crucifícale!» (Lc 23:21). Al fin soltó a Barrabás, un homicida, y entregó a Jesús a la voluntad de ellos. El culpable quedó libre y el inocente murió en su lugar.',
        { h: 'Camino al Calvario' },
        'Obligaron a Simón de Cirene a llevar la cruz detrás de Jesús. Unas mujeres lloraban por Él, y Jesús les dijo: «no lloréis por mí, sino llorad por vosotras mismas y por vuestros hijos» (Lc 23:28), anunciando de nuevo el juicio que vendría sobre la ciudad.',
        { h: 'Las palabras desde la cruz' },
        'Lucas registra tres palabras de Jesús en la cruz que los otros no cuentan. Primero: «Padre, perdónalos, porque no saben lo que hacen» (Lc 23:34). Luego, al ladrón que le pidió «acuérdate de mí cuando vengas en tu reino», le respondió: «De cierto te digo que hoy estarás conmigo en el paraíso» (Lc 23:43). El último que se convierte en el evangelio es un criminal, y es salvo sin obras, solo por la fe. Por último, después de tres horas de tinieblas y el velo del templo rasgado, Jesús clamó a gran voz: «Padre, en tus manos encomiendo mi espíritu» (Lc 23:46; Sal 31:5).',
        'El centurión glorificó a Dios. José de Arimatea, un miembro del concilio que no había consentido en la decisión, pidió el cuerpo y lo puso en un sepulcro nuevo. Las mujeres de Galilea miraron dónde lo ponían, y descansaron el día de reposo.',
        ir('Ver «La última semana: Pascua, Sanedrín y Pilato» en El mundo judío', R.mundo + '#jesus/6'),
        ir('Ver «¿Por qué tenía que morir Cristo?» en La persona y obra de Cristo', R.cristo + '#cruz/1')
      ],
      pensar: 'El ladrón no tenía nada que ofrecer, y Jesús le prometió el paraíso «hoy». ¿Qué te dice eso sobre la gracia de Dios y sobre tu propia salvación?'
    },
    {
      id: 'c24a', n: 'Capítulo 24 (I): la tumba vacía y el camino a Emaús', ref: 'Lucas 24:1-35', fecha: 33,
      visual: [
        img('lc-emaus.webp', 'Al atardecer, en un camino entre colinas de Judea, dos discípulos conversan con un tercer caminante, visto de espaldas, que les explica algo con la mano', 'El camino a Emaús (Lc 24:15).'),
        img('../persona-y-obra-de-cristo/img/tumba-vacia.webp', 'A la luz del amanecer, la entrada de una tumba excavada en la roca, con la piedra redonda corrida a un lado', 'La piedra removida (Lc 24:2).'),
        cita('Lucas 24:25-32', 'Entonces él les dijo: ¡Oh insensatos, y tardos de corazón para creer todo lo que los profetas han dicho! ¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria? Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían. Llegaron a la aldea adonde iban, y él hizo como que iba más lejos. Mas ellos le obligaron a quedarse, diciendo: Quédate con nosotros, porque se hace tarde, y el día ya ha declinado. Entró, pues, a quedarse con ellos. Y aconteció que estando sentado con ellos a la mesa, tomó el pan y lo bendijo, lo partió, y les dio. Entonces les fueron abiertos los ojos, y le reconocieron; mas él se desapareció de su vista. Y se decían el uno al otro: ¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el camino, y cuando nos abría las Escrituras?'),
        pasos([
          { t: 'Emaús, a sesenta estadios de Jerusalén: unos 11 kilómetros (24:13)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'emaus'], trazos: ['c-emaus'] } }
        ])
      ],
      texto: [
        'El primer día de la semana, muy de mañana, las mujeres fueron al sepulcro con las especias que habían preparado. Hallaron removida la piedra y no hallaron el cuerpo del Señor Jesús. Dos varones con vestiduras resplandecientes les dijeron: «¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado» (Lc 24:5-6).',
        { h: 'Las primeras testigos' },
        'Eran María Magdalena, Juana, María madre de Jacobo y las demás. Contaron todo a los once, pero a ellos «les parecían locura las palabras de ellas, y no las creían» (Lc 24:11). Pedro corrió al sepulcro, vio los lienzos solos y se fue maravillado. Si alguien hubiera inventado la resurrección, no habría puesto a mujeres como primeras testigos ni a los apóstoles como incrédulos.',
        { h: 'Dos discípulos tristes' },
        'Ese mismo día, dos discípulos iban a Emaús, a sesenta estadios de Jerusalén. Uno se llamaba Cleofas. Jesús mismo se acercó y caminaba con ellos, «mas los ojos de ellos estaban velados, para que no le conociesen» (Lc 24:16). Le contaron, con el rostro triste, lo que había pasado con Jesús de Nazaret, «varón profeta, poderoso en obra y en palabra», y le confesaron: «nosotros esperábamos que él era el que había de redimir a Israel» (Lc 24:19-21).',
        { h: 'Toda la Escritura habla de Él' },
        'Jesús les respondió: «¡Oh insensatos, y tardos de corazón para creer todo lo que los profetas han dicho! ¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria?» (Lc 24:25-26). Y comenzando desde Moisés y siguiendo por todos los profetas, les explicó lo que de Él decían todas las Escrituras. El Antiguo Testamento entero apunta a Cristo.',
        { h: 'Al partir el pan' },
        'Al llegar a la aldea, le rogaron: «Quédate con nosotros, porque se hace tarde». Estando a la mesa, Jesús tomó el pan, lo bendijo, lo partió y se lo dio. «Entonces les fueron abiertos los ojos, y le reconocieron; mas él se desapareció de su vista» (Lc 24:31). Se dijeron el uno al otro: «¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el camino, y cuando nos abría las Escrituras?» (Lc 24:32). Esa misma hora volvieron a Jerusalén. El cansancio y la noche ya no importaban.',
        ir('Ver Emaús en la Armonía', R.armonia + '#emaus'),
        ir('Ver «La tumba vacía y las apariciones» en La persona y obra de Cristo', R.cristo + '#exaltado/2')
      ],
      pensar: '«¿No ardía nuestro corazón… cuando nos abría las Escrituras?» ¿Cuándo fue la última vez que tu corazón ardió al leer la Biblia? Pide a Jesús que te la vuelva a abrir.'
    },
    {
      id: 'c24b', n: 'Capítulo 24 (II): la comisión y la ascensión', ref: 'Lucas 24:36-53; Hechos 1:4-11', fecha: 33,
      visual: [
        img('../hechos/img/hechos-ascension.webp', 'En la cumbre del monte de los Olivos, los discípulos miran hacia el cielo mientras una figura luminosa asciende entre las nubes', 'La ascensión (Lc 24:51).'),
        cita('Lucas 24:44-49', 'Y les dijo: Estas son las palabras que os hablé, estando aún con vosotros: que era necesario que se cumpliese todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos. Entonces les abrió el entendimiento, para que comprendiesen las Escrituras; y les dijo: Así está escrito, y así fue necesario que el Cristo padeciese, y resucitase de los muertos al tercer día; y que se predicase en su nombre el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén. Y vosotros sois testigos de estas cosas. He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto.'),
        pasos([
          { t: 'Jerusalén: Jesús aparece a los once (24:36)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'emaus', 'betania'] } },
          { t: '«Los sacó fuera hasta Betania» (24:50)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'monte-olivos', 'betania'] } }
        ])
      ],
      texto: [
        'Mientras los de Emaús contaban lo sucedido, Jesús se puso en medio de ellos y les dijo: «Paz a vosotros» (Lc 24:36). Ellos, espantados, pensaban que veían un espíritu.',
        { h: 'Un cuerpo verdadero' },
        'Jesús les mostró sus manos y sus pies: «palpad, y ved; porque un espíritu no tiene carne ni huesos, como veis que yo tengo» (Lc 24:39). Como todavía no lo creían de gozo, pidió algo de comer y comió delante de ellos pescado asado. La resurrección no fue una visión ni la supervivencia de un espíritu, sino la victoria del mismo cuerpo, ahora glorificado, sobre la muerte.',
        { h: 'Las Escrituras abiertas' },
        'Jesús les recordó que era necesario que se cumpliera todo lo escrito de Él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44), las tres partes del Antiguo Testamento hebreo. «Entonces les abrió el entendimiento, para que comprendiesen las Escrituras» (Lc 24:45). Lo que hizo en el camino con dos, ahora lo hace con todos.',
        { h: 'La comisión' },
        'El mensaje de las Escrituras tiene tres partes: el Cristo debía padecer, resucitar al tercer día, y en su nombre se debía predicar «el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén» (Lc 24:47). Los discípulos serían testigos.',
        { h: 'La promesa del Padre' },
        'Pero no debían salir todavía: «He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49). Para ser testigos necesitaban el poder del Espíritu Santo. Diez días después de la ascensión, en Pentecostés, la promesa se cumplió (Hch 2:1-4).',
        { h: 'La ascensión' },
        'Jesús los llevó hasta Betania, alzó sus manos y los bendijo, y mientras los bendecía fue llevado arriba al cielo (Lc 24:50-51). El último gesto de Jesús en la tierra fue bendecir. Ellos, después de haberle adorado, volvieron a Jerusalén con gran gozo, y estaban siempre en el templo alabando y bendiciendo a Dios. El evangelio que comenzó en el templo con un sacerdote que no pudo bendecir termina en el templo con un pueblo que bendice.',
        ir('Ir a la ruta De Lucas a Hechos', '#puente/1'),
        ir('Ver «La ascensión» en La persona y obra de Cristo', R.cristo + '#exaltado/5')
      ],
      pensar: 'Los discípulos tenían el mensaje, pero Jesús les pidió esperar el poder del Espíritu antes de salir. ¿Estás intentando servir a Dios con tus propias fuerzas, o has buscado ser investido de poder desde lo alto?'
    }
  );
})();
/* Lucas · parte 4: ruta IV, Teología, y ruta de mapas */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  // ================== RUTA IV. Teología del libro ==================
  L.teologia = [
    {
      id: 't-cristo', n: 'Cristo en Lucas: Salvador, Señor e Hijo del Hombre', ref: 'Lucas 1:32-35; 2:11; 5:24; 7:16; 9:20; 19:10; 22:69-70; 24:19, 26', fecha: [-5, 33],
      visual: [
        tabla({
          titulo: 'Los títulos de Jesús en Lucas',
          cab: ['Título', 'Pasajes', 'Qué destaca'],
          filas: [
            ['Hijo del Altísimo, Hijo de Dios', '1:32, 35; 3:22; 9:35; 22:70', 'Su relación única con el Padre'],
            ['Salvador', '2:11', 'Su misión: salvar a los perdidos'],
            ['Cristo (Mesías)', '2:11, 26; 9:20; 24:26, 46', 'El Ungido prometido a Israel'],
            ['Señor', '2:11; 7:13; 10:1; 24:3, 34', 'Su autoridad divina'],
            ['Hijo del Hombre', '5:24; 9:22; 19:10; 21:27; 22:69', 'El que sufre, salva y vendrá en gloria'],
            ['Profeta', '4:24; 7:16; 13:33; 24:19', 'El profeta como Moisés (Hch 3:22)'],
            ['Hijo de David, Rey', '1:32; 18:38; 19:38; 23:3', 'El heredero del trono eterno']
          ]
        }),
        cita('Lucas 2:10-11', 'Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor.')
      ],
      texto: [
        'Lucas presenta a Jesús con muchos títulos, y cada uno muestra una faceta de su persona y su obra.',
        { h: 'Verdadero Dios' },
        'Desde el anuncio a María, Jesús es «Hijo del Altísimo» e «Hijo de Dios», concebido por el Espíritu Santo (Lc 1:32, 35). El Padre lo declara su Hijo amado en el bautismo y en la transfiguración. Lucas usa a menudo para Jesús el título «Señor», el mismo con que la Biblia griega traducía el nombre de Dios. Jesús perdona pecados, algo que solo Dios puede hacer (Lc 5:21-24), y recibe adoración después de su ascensión (Lc 24:52).',
        { h: 'Verdadero hombre' },
        'Lucas destaca también su humanidad: nace en un pesebre, crece en sabiduría y en estatura (Lc 2:52), ora, se compadece, llora sobre Jerusalén y agoniza en Getsemaní. Es el segundo Adán: la genealogía lo une a toda la humanidad (Lc 3:38), y en el desierto vence donde Adán cayó.',
        { h: 'El Salvador' },
        'El ángel lo anuncia como «un Salvador, que es CRISTO el Señor» (Lc 2:11). Vino «a buscar y a salvar lo que se había perdido» (Lc 19:10). Su salvación incluye el perdón de los pecados, la sanidad y la liberación, y alcanza a todos los que creen.',
        { h: 'El Hijo del Hombre' },
        'Es el título que Jesús prefería para sí. Lo une a su autoridad presente (perdona pecados, es Señor del sábado), a su sufrimiento («es necesario que el Hijo del Hombre padezca», Lc 9:22) y a su gloria futura, cuando venga «en una nube con poder y gran gloria» (Lc 21:27; véase Dn 7:13-14).',
        { h: 'Profeta, sacerdote y rey' },
        'La gente lo reconoce como «un gran profeta» (Lc 7:16), y Él mismo dice que debe morir en Jerusalén como los profetas. Es el Rey que entra en la ciudad y el que reinará sobre la casa de Jacob para siempre. Y es el que intercede, bendice con las manos alzadas como un sacerdote y entrega su vida como sacrificio del nuevo pacto.',
        ir('Ver «Los títulos de Jesús» en La persona y obra de Cristo', R.cristo + '#persona/4'),
        ir('Ver «Los tres oficios del Mesías» en La persona y obra de Cristo', R.cristo + '#oficios/1')
      ],
      pensar: 'De todos los títulos de Jesús en Lucas, ¿cuál describe mejor lo que Él ha sido para ti? ¿Cuál necesitas conocer más?'
    },
    {
      id: 't-espiritu', n: 'El Espíritu Santo: el Ungido y la promesa del Padre', ref: 'Lucas 1:35; 3:16, 21-22; 4:1, 14, 18; 10:21; 11:13; 24:49; Hechos 1:4-8; 2:4, 38-39', fecha: [-7, 33],
      visual: [
        tabla({
          titulo: 'Del Espíritu en Jesús al Espíritu en la iglesia',
          cab: ['En Jesús (Lucas)', 'En los discípulos (Hechos)'],
          filas: [
            ['Concebido por el Espíritu (1:35)', 'Nacidos del Espíritu (Jn 3:5)'],
            ['El Espíritu desciende mientras ora (3:21-22)', 'El Espíritu desciende mientras oran (Hch 1:14; 2:1-4)'],
            ['Lleno del Espíritu (4:1)', 'Fueron todos llenos del Espíritu Santo (Hch 2:4)'],
            ['En el poder del Espíritu (4:14)', 'Recibiréis poder (Hch 1:8)'],
            ['Ungido para predicar y sanar (4:18)', 'Predican con señales y prodigios (Hch 4:30-31)']
          ]
        }),
        cita('Lucas 24:49', 'He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto.')
      ],
      texto: [
        'Lucas une su evangelio y Hechos con el hilo del Espíritu Santo. Lo que el Espíritu hizo en Jesús, lo hace después en sus discípulos.',
        { h: 'Jesús, ungido por el Espíritu' },
        'El Hijo eterno no necesitaba llegar a ser Dios, pero como hombre vivió en dependencia del Espíritu. Fue concebido por el Espíritu; en el bautismo, el Espíritu descendió sobre Él; fue lleno del Espíritu en el desierto y volvió a Galilea en su poder. En Nazaret explicó su ministerio con Isaías 61: «El Espíritu del Señor está sobre mí, por cuanto me ha ungido» (Lc 4:18). Pedro lo resume en casa de Cornelio: «Dios ungió con el Espíritu Santo y con poder a Jesús de Nazaret… porque Dios estaba con él» (Hch 10:38).',
        { h: 'Jesús, el que bautiza en el Espíritu' },
        'Juan anunció que el que vendría «os bautizará en Espíritu Santo y fuego» (Lc 3:16). Jesús prometió que el Padre daría el Espíritu Santo a los que se lo pidieran (Lc 11:13). Y antes de ascender llamó a esa experiencia «la promesa de mi Padre» y la describió como ser «investidos de poder desde lo alto» (Lc 24:49). En Hechos, Jesús la identifica con el bautismo en el Espíritu Santo (Hch 1:5, 8).',
        { h: 'Poder para testificar' },
        'Para Lucas, el bautismo en el Espíritu tiene un propósito: dar poder para ser testigos. Los discípulos ya creían en el Cristo resucitado y habían recibido la comisión, pero debían esperar en Jerusalén. Cuando llegó Pentecostés, «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas» (Hch 2:4), y Pedro anunció que la promesa es «para todos los que están lejos» (Hch 2:39).',
        { posturas: {
          titulo: '¿El bautismo en el Espíritu ocurre en la conversión?',
          a: { n: 'Una experiencia de poder posterior a la conversión', t: 'En Lucas y Hechos, el bautismo en el Espíritu es una investidura de poder para el servicio, distinta de la regeneración y posterior a ella: los discípulos creían antes de Pentecostés, los samaritanos creyeron y después lo recibieron (Hch 8:12-17), y los de Éfeso también (Hch 19:1-6). Su señal inicial son las otras lenguas. Es la enseñanza que sigue este sitio.' },
          b: { n: 'Parte de la conversión', t: 'Otros entienden que todo creyente es bautizado en el Espíritu al convertirse (1 Co 12:13), y que Pentecostés fue un momento único de la historia; después solo hay llenuras sucesivas.' },
          c: 'Las dos posturas reconocen que todo creyente tiene al Espíritu (Ro 8:9) y que debe ser lleno de Él (Ef 5:18). La primera explica mejor el modelo de Lucas, que es narrador pero también maestro: muestra la experiencia que la iglesia debe esperar.'
        } },
        ir('Ver «El bautismo en el Espíritu Santo» en Hechos', R.hechos + '#teologia/2'),
        ir('Ver «El bautismo en el Espíritu Santo» en El movimiento pentecostal', R.pentecostal + '#doctrina/2')
      ],
      pensar: 'Jesús dijo a discípulos que ya creían en Él que esperaran el poder de lo alto. ¿Has recibido esa investidura de poder? Si no, ¿qué te impide pedirla al Padre?'
    },
    {
      id: 't-salvacion', n: 'La salvación: hoy, por la fe, para los perdidos', ref: 'Lucas 1:77; 3:3; 5:20, 32; 7:50; 15:7; 18:13-14; 19:9-10; 23:43; 24:47', fecha: [28, 33],
      visual: [
        tabla({
          titulo: 'Cómo se recibe la salvación en Lucas',
          cab: ['Elemento', 'Ejemplo'],
          filas: [
            ['Arrepentimiento', '«Si no os arrepentís, todos pereceréis» (13:3); el hijo pródigo «volvió en sí» (15:17)'],
            ['Fe', '«Tu fe te ha salvado, vé en paz» (7:50; 8:48; 17:19; 18:42)'],
            ['Humildad', '«Dios, sé propicio a mí, pecador» (18:13)'],
            ['Perdón de pecados', '«Tus pecados te son perdonados» (5:20; 7:48)'],
            ['Vida transformada', 'Zaqueo devuelve lo robado (19:8)'],
            ['Gozo', 'Hay gozo en el cielo por un pecador que se arrepiente (15:7, 10)']
          ]
        }),
        img('lc-fariseo-publicano.webp', 'En un atrio del templo, un fariseo bien vestido ora de pie con las manos en alto mientras, al fondo, un publicano con la cabeza baja se golpea el pecho', 'El publicano volvió a su casa justificado (Lc 18:14).')
      ],
      texto: [
        'La salvación es el tema central de Lucas. Zacarías canta que Juan daría «conocimiento de salvación a su pueblo, para perdón de sus pecados» (Lc 1:77). Y Jesús termina enviando a predicar «el arrepentimiento y el perdón de pecados» a todas las naciones (Lc 24:47).',
        { h: 'Una obra de Dios' },
        'En Lucas la salvación siempre parte de Dios. Es Dios el que «ha visitado y redimido a su pueblo» (Lc 1:68). Jesús es el pastor que busca la oveja, la mujer que barre la casa, el padre que corre. Nadie se salva a sí mismo; el perdido es encontrado.',
        { h: 'Por la fe' },
        'La respuesta humana es el arrepentimiento y la fe. Cuatro veces Jesús dice: «tu fe te ha salvado» (Lc 7:50; 8:48; 17:19; 18:42). El publicano no tenía nada que presentar y solo pidió misericordia, y «descendió a su casa justificado» (Lc 18:14). El ladrón en la cruz no pudo hacer ninguna obra ni bautizarse, y Jesús le prometió el paraíso. La salvación es por gracia, por medio de la fe.',
        { h: 'Hoy' },
        'La salvación tiene un tiempo: «hoy». Llega cuando Jesús llega. «Hoy ha venido la salvación a esta casa» (Lc 19:9). No hay que esperar a ser mejores; hay que recibir al que viene.',
        { h: 'Sanidad y liberación' },
        'La palabra griega que se traduce «salvar» significa también sanar. Jesús dice «tu fe te ha salvado» tanto a la pecadora perdonada como a la mujer sanada del flujo de sangre y al ciego que recupera la vista. En Lucas, la salvación alcanza a toda la persona: perdona el pecado, libera de los demonios y sana el cuerpo. La sanidad divina es parte de la obra de Cristo, aunque la redención completa del cuerpo espera la resurrección.',
        { h: 'Una vida nueva' },
        'La salvación verdadera se nota. Zaqueo no fue salvo por devolver lo robado, sino que devolvió lo robado porque había sido salvo. El perdón produce amor (Lc 7:47) y alegría.',
        ir('Ver «Justificados por la fe» en La persona y obra de Cristo', R.cristo + '#cruz/5'),
        ir('Ver «Sanidad en la expiación» en La persona y obra de Cristo', R.cristo + '#cruz/8')
      ],
      pensar: 'El publicano y el ladrón no tenían nada que ofrecer y fueron salvos por la fe. ¿Confías en la misericordia de Dios o todavía en lo que tú puedes presentarle?'
    },
    {
      id: 't-reino', n: 'El reino de Dios: ya y todavía no', ref: 'Lucas 1:32-33; 4:43; 10:9; 11:20; 17:20-21; 19:11-27; 22:16-18, 29-30; Hechos 1:6-7', fecha: [29, 33],
      visual: [
        esq('../persona-y-obra-de-cristo/img/esquema-reino.svg', 'Esquema del reino de Dios: presente en la primera venida de Cristo y en la iglesia, y manifestado en plenitud en su segunda venida y el milenio', 'El reino que vino y que vendrá.'),
        tabla({
          titulo: 'El reino en Lucas',
          cab: ['El reino ya presente', 'El reino todavía futuro'],
          filas: [
            ['«El reino de Dios ha llegado a vosotros» (11:20)', '«Venga tu reino» (11:2)'],
            ['«El reino de Dios está entre vosotros» (17:21)', 'El noble vuelve con el reino (19:12-15)'],
            ['Sanidades y liberaciones (10:9; 11:20)', 'Los doce juzgarán a las tribus de Israel (22:30)'],
            ['Se predica y se entra en él (16:16)', 'Comer y beber en el reino (22:16-18)'],
            ['Los pobres lo reciben (6:20)', 'Recibirá el trono de David para siempre (1:32-33)']
          ]
        })
      ],
      texto: [
        'Jesús dijo que su misión era anunciar «el evangelio del reino de Dios» (Lc 4:43). El reino es el gobierno de Dios, su poder que salva, sana y vence al mal. En Lucas, ese reino ya llegó con Jesús, pero todavía espera su manifestación plena.',
        { h: 'Ya presente' },
        'Cuando Jesús expulsa demonios, el reino «ha llegado» (Lc 11:20). A los fariseos que pedían señales para calcular su llegada, les dijo que el reino de Dios estaba entre ellos (Lc 17:21): estaba presente en la persona del Rey. Los discípulos lo anuncian y sanan a los enfermos (Lc 10:9), y quien lo recibe como un niño entra en él.',
        { h: 'Todavía futuro' },
        'Pero el reino no se manifestó en toda su plenitud en la primera venida. Por eso Jesús enseña a orar «venga tu reino». La parábola de las minas responde a quienes pensaban «que el reino de Dios se manifestaría inmediatamente» (Lc 19:11): el noble debe ir lejos y volver. En la última cena, Jesús dice que no beberá del fruto de la vid hasta que el reino venga, y promete a los doce que se sentarán en tronos juzgando a las doce tribus de Israel (Lc 22:30).',
        { h: 'Las promesas a Israel' },
        'El ángel prometió que Jesús recibiría «el trono de David su padre» y reinaría sobre la casa de Jacob para siempre (Lc 1:32-33). Esa promesa no se espiritualiza ni se transfiere: se cumplirá cuando Cristo vuelva. Por eso, después de la resurrección, los discípulos preguntaron: «¿restaurarás el reino a Israel en este tiempo?», y Jesús no negó la restauración, sino que dijo que los tiempos los fija el Padre (Hch 1:6-7). Mientras tanto, la iglesia vive la era del Espíritu y de la misión a las naciones, y espera el reino milenial de Cristo.',
        { posturas: {
          titulo: '¿El trono de David es el reinado actual de Cristo?',
          a: { n: 'Un reino futuro sobre la tierra', t: 'Cristo reina ya a la diestra del Padre, pero el trono de David, prometido a Israel, se establecerá en su segunda venida, en el reino milenial (Ap 20:4-6). Así se cumplen literalmente las promesas a David y a Israel.' },
          b: { n: 'Cumplido en la exaltación de Cristo', t: 'Muchos entienden que Jesús ya se sentó en el trono de David al ascender (Hch 2:30-36), y que las promesas del reino se cumplen espiritualmente en la iglesia y finalmente en la nueva creación.' },
          c: 'Hechos 2:30-36 enseña que Cristo ya fue exaltado como Señor, y Hechos 1:6-7 y 3:21 dejan abierta la restauración futura de todas las cosas. Este sitio sigue la primera postura.'
        } },
        ir('Ver «Rey: el reino que vino y que vendrá» en La persona y obra de Cristo', R.cristo + '#oficios/4'),
        ir('Ver «Israel y los pactos de Dios» en Los últimos tiempos', R.escatologia + '#temas/1')
      ],
      pensar: 'Vivimos entre el reino que ya llegó y el que todavía vendrá. ¿Qué señales del reino presente ves en tu vida, y cómo te ayuda a esperar el futuro?'
    },
    {
      id: 't-fin', n: 'Los últimos tiempos en Lucas', ref: 'Lucas 12:35-48; 17:20-37; 18:8; 21:5-36; Hechos 1:11', fecha: [33, 70],
      visual: [
        esq('lc-discurso.svg', 'Línea de tiempo: la destrucción de Jerusalén en el año 70, una flecha larga marcada «los tiempos de los gentiles», y al final las señales en el cielo y la venida del Hijo del Hombre', 'Lucas 21: del año 70 a la venida del Hijo del Hombre.'),
        cita('Lucas 21:34-36', 'Mirad también por vosotros mismos, que vuestros corazones no se carguen de glotonería y embriaguez y de los afanes de esta vida, y venga de repente sobre vosotros aquel día. Porque como un lazo vendrá sobre todos los que habitan sobre la faz de toda la tierra. Velad, pues, en todo tiempo orando que seáis tenidos por dignos de escapar de todas estas cosas que vendrán, y de estar en pie delante del Hijo del Hombre.')
      ],
      texto: [
        'Lucas registra tres grandes enseñanzas de Jesús sobre el futuro: los siervos que esperan (Lc 12:35-48), los días del Hijo del Hombre (Lc 17:20-37) y el discurso en el templo (Lc 21:5-36). Las tres llaman a estar preparados.',
        { h: 'La venida es segura y visible' },
        'Jesús volverá personalmente. Su venida será como el relámpago que resplandece de un extremo a otro del cielo (Lc 17:24), y lo verán venir «en una nube con poder y gran gloria» (Lc 21:27). Los ángeles lo confirman en la ascensión: «este mismo Jesús… así vendrá como le habéis visto ir al cielo» (Hch 1:11).',
        { h: 'La fecha no se conoce' },
        'El Hijo del Hombre vendrá «a la hora que no penséis» (Lc 12:40). Jesús no dio fechas; dio señales para estar alerta y advirtió contra los que dicen «el tiempo está cerca» para arrastrar a otros (Lc 21:8). Toda predicción con fecha ha fallado.',
        { h: 'Israel y los tiempos de los gentiles' },
        'Lucas distingue con claridad la destrucción de Jerusalén del año 70 y la venida del Hijo del Hombre. Entre ambas se extienden «los tiempos de los gentiles» (Lc 21:24). Pablo enseña algo semejante: el endurecimiento de Israel durará «hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo» (Ro 11:25-26). Jesús anunció que Jerusalén lo vería otra vez cuando dijera «Bendito el que viene en nombre del Señor» (Lc 13:35).',
        { h: 'Arrebatamiento y venida' },
        'Lucas no describe el arrebatamiento de la iglesia con detalle, como Pablo en 1 Tesalonicenses 4:16-17. Pero Jesús promete a sus discípulos que podrán «escapar de todas estas cosas que vendrán, y de estar en pie delante del Hijo del Hombre» (Lc 21:36). La enseñanza del sitio, en línea con el Nuevo Testamento completo, es que la iglesia será arrebatada antes de la gran tribulación, y que después Cristo vendrá en gloria con sus santos para establecer su reino.',
        { h: 'Vivir preparados' },
        'Las enseñanzas sobre el futuro siempre terminan en la vida práctica: no cargar el corazón de glotonería, embriaguez y afanes (Lc 21:34), ser mayordomos fieles, orar en todo tiempo. Jesús pregunta: «cuando venga el Hijo del Hombre, ¿hallará fe en la tierra?» (Lc 18:8).',
        ir('Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', R.escatologia + '#eventos/2'),
        ir('Ver «Los tiempos de los gentiles» en Los últimos tiempos', R.escatologia + '#panorama/6')
      ],
      pensar: '«Cuando venga el Hijo del Hombre, ¿hallará fe en la tierra?» Si Jesús volviera hoy, ¿te encontraría velando y orando?'
    },
    {
      id: 't-oracion', n: 'El Padre que escucha', ref: 'Lucas 10:21-22; 11:1-13; 18:1-8; 22:42; 23:34, 46', fecha: [29, 33],
      visual: [
        cita('Lucas 10:21-22', 'En aquella misma hora Jesús se regocijó en el Espíritu, y dijo: Yo te alabo, oh Padre, Señor del cielo y de la tierra, porque escondiste estas cosas de los sabios y entendidos, y las has revelado a los niños. Sí, Padre, porque así te agradó. Todas las cosas me fueron entregadas por mi Padre; y nadie conoce quién es el Hijo sino el Padre; ni quién es el Padre, sino el Hijo, y aquel a quien el Hijo lo quiera revelar.'),
        tabla({
          titulo: 'Lo que Lucas enseña sobre la oración',
          cab: ['Enseñanza', 'Pasaje'],
          filas: [
            ['Dios es Padre y quiere dar', '11:11-13'],
            ['La oración insiste y no desmaya', '11:5-8; 18:1-8'],
            ['La oración nace de la humildad', '18:9-14'],
            ['La oración busca la voluntad del Padre', '22:42'],
            ['La oración vence la tentación', '22:40, 46'],
            ['La oración intercede por otros y aun por los enemigos', '22:32; 23:34'],
            ['La oración prepara la llegada del Espíritu', '3:21-22; 11:13; Hch 1:14']
          ]
        })
      ],
      texto: [
        'Lucas no solo muestra que Jesús oraba; enseña quién es el Dios al que oramos. Jesús lo llama «Padre» en todas sus oraciones, desde la de los doce años en el templo hasta la de la cruz.',
        { h: 'Un Padre que se revela' },
        'Cuando volvieron los setenta, Jesús se regocijó en el Espíritu y dijo: «Yo te alabo, oh Padre, Señor del cielo y de la tierra, porque escondiste estas cosas de los sabios y entendidos, y las has revelado a los niños» (Lc 10:21). Nadie conoce al Padre sino el Hijo, «y aquel a quien el Hijo lo quiera revelar» (Lc 10:22). Por medio de Jesús, sus discípulos pueden conocer a Dios como Padre y hablarle con confianza.',
        { h: 'Un Padre que da' },
        'Las parábolas del amigo a medianoche y de la viuda insistente no presentan a Dios como alguien que hay que convencer. Son comparaciones de contraste: si un amigo cansado o un juez injusto terminan respondiendo, «¿cuánto más» el Padre celestial? (Lc 11:13). Dios no es tacaño ni lejano. La insistencia no lo cambia a Él; nos forma a nosotros en la fe.',
        { h: 'La voluntad del Padre' },
        'En Getsemaní, Jesús mostró el corazón de la oración: «no se haga mi voluntad, sino la tuya» (Lc 22:42). La oración no es un medio para que Dios haga lo que queremos, sino el lugar donde aprendemos a querer lo que Él quiere. Por eso Jesús repitió a sus discípulos: «Orad que no entréis en tentación» (Lc 22:40, 46). Ellos durmieron, y cayeron.',
        { h: 'Oración y Espíritu' },
        'En Lucas, el Espíritu desciende cuando se ora. Jesús estaba orando en el bautismo (Lc 3:21). El Padre da el Espíritu a los que se lo piden (Lc 11:13). Y los discípulos perseveraron en oración diez días antes de Pentecostés (Hch 1:14). La oración y la llenura del Espíritu van juntas.',
        ir('Ir a la ruta Jesús que ora', '#oracion/1'),
        ir('Ver «Una iglesia que ora» en Hechos', R.hechos + '#iglesia/3')
      ],
      pensar: 'Jesús enseña que Dios es un Padre que da buenas cosas, y la mejor es su Espíritu. ¿Cambia tu manera de orar saber que hablas con un Padre así?'
    },
    {
      id: 't-pobres', n: 'Pobres y ricos: la gran inversión', ref: 'Lucas 1:51-53; 6:20-26; 12:13-34; 14:12-24; 16:19-31; 18:18-30; 19:1-10', fecha: [-5, 33],
      visual: [
        img('lc-rico-lazaro.webp', 'Ante la puerta de piedra de una casa lujosa, un mendigo flaco y cubierto de llagas yace en el suelo, mientras se ve el banquete adentro y unos perros se le acercan', 'El rico y Lázaro (Lc 16:19-21).'),
        tabla({
          titulo: 'La gran inversión del reino',
          cab: ['Los de arriba bajan', 'Los de abajo suben'],
          filas: [
            ['«Quitó de los tronos a los poderosos» (1:52)', '«Exaltó a los humildes» (1:52)'],
            ['«A los ricos envió vacíos» (1:53)', '«A los hambrientos colmó de bienes» (1:53)'],
            ['«¡Ay de vosotros, ricos!» (6:24)', '«Bienaventurados vosotros los pobres» (6:20)'],
            ['El que se enaltece será humillado (14:11)', 'El que se humilla será enaltecido (14:11)'],
            ['El rico, en tormentos (16:23)', 'Lázaro, en el seno de Abraham (16:22)'],
            ['El fariseo vuelve sin justificar (18:14)', 'El publicano vuelve justificado (18:14)']
          ]
        })
      ],
      texto: [
        'Una de las enseñanzas más fuertes de Lucas es lo que algunos llaman la gran inversión: en el reino de Dios, los que están arriba bajan y los que están abajo suben. María lo canta antes del nacimiento de Jesús (Lc 1:51-53), y Jesús lo repite en el sermón del llano, en sus parábolas y en sus encuentros.',
        { h: 'No una ideología, sino el carácter de Dios' },
        'Esta enseñanza no divide a las personas en buenos y malos según su dinero. La pobreza no salva, y hubo ricos que recibieron a Jesús, como Zaqueo, José de Arimatea y las mujeres que lo sostenían con sus bienes. Lo que Lucas muestra es que Dios se pone del lado de los humildes, de los que no tienen a quién acudir, y que las riquezas son un peligro porque hacen al hombre sentirse autosuficiente.',
        { h: 'El peligro de las riquezas' },
        'El rico insensato pensó que tenía su vida asegurada (Lc 12:19). El rico de la parábola vivió para sí sin ver a Lázaro (Lc 16:19-21). El joven rico no pudo dejar sus bienes para seguir a Jesús (Lc 18:23). Jesús dice: «¡Cuán difícilmente entrarán en el reino de Dios los que tienen riquezas!» (Lc 18:24). No es imposible, porque lo que es imposible para los hombres es posible para Dios, pero es una advertencia seria.',
        { h: 'La respuesta del discípulo' },
        'El discípulo usa sus bienes con libertad y generosidad: da sin esperar nada (Lc 6:35), invita a los que no pueden devolver (Lc 14:13-14), se hace tesoros en el cielo (Lc 12:33) y administra con fidelidad lo que Dios le confió (Lc 16:10-12). Cuando la iglesia de Jerusalén lo vivió, «no había entre ellos ningún necesitado» (Hch 4:34).',
        { h: 'Contra el evangelio de la prosperidad' },
        'Esta enseñanza contradice a quienes presentan la riqueza como prueba de fe y la pobreza como falta de fe. En Lucas, Dios bendice a sus hijos y suple sus necesidades (Lc 12:30-31), pero el que mide su relación con Dios por sus bienes está más cerca del rico insensato que del publicano.',
        ir('Ver «Ricos y pobres» en El mundo judío', R.mundo + '#vida/6'),
        ir('Ver «Comunión y generosidad» en Hechos', R.hechos + '#iglesia/2')
      ],
      pensar: 'En el reino, el que se humilla es enaltecido. ¿Dónde te está llamando Dios a bajar, para que Él te levante?'
    },
    {
      id: 't-discipulado', n: 'El discipulado: seguir a Jesús en el camino', ref: 'Lucas 5:11, 27-28; 9:23-26, 57-62; 14:25-33; 18:28-30; 24:13-35', fecha: [30, 33],
      visual: [
        tabla({
          titulo: 'Seguir a Jesús en Lucas',
          cab: ['Rasgo', 'Pasaje'],
          filas: [
            ['Dejarlo todo', '5:11, 28; 18:28'],
            ['Negarse a sí mismo y tomar la cruz cada día', '9:23'],
            ['No mirar atrás', '9:62'],
            ['Amar a Jesús más que a la familia y a la propia vida', '14:26'],
            ['Calcular el costo', '14:28-33'],
            ['Escuchar a sus pies', '10:39'],
            ['Servir como Él sirvió', '22:26-27'],
            ['Ser testigos con el poder del Espíritu', '24:48-49']
          ]
        }),
        cita('Lucas 9:57-62', 'Yendo ellos, uno le dijo en el camino: Señor, te seguiré adondequiera que vayas. Y le dijo Jesús: Las zorras tienen guaridas, y las aves de los cielos nidos; mas el Hijo del Hombre no tiene dónde recostar la cabeza. Y dijo a otro: Sígueme. El le dijo: Señor, déjame que primero vaya y entierre a mi padre. Jesús le dijo: Deja que los muertos entierren a sus muertos; y tú ve, y anuncia el reino de Dios. Entonces también dijo otro: Te seguiré, Señor; pero déjame que me despida primero de los que están en mi casa. Y Jesús le dijo: Ninguno que poniendo su mano en el arado mira hacia atrás, es apto para el reino de Dios.')
      ],
      texto: [
        'Lucas es un evangelio en camino. Jesús va a Jerusalén y llama a otros a ir con Él. Seguirle no es solo creer en Él, sino caminar detrás de Él.',
        { h: 'Un llamado radical' },
        'Los primeros discípulos, «dejándolo todo, le siguieron» (Lc 5:11). Leví dejó su banco de tributos. Jesús pide negarse a sí mismo y tomar la cruz «cada día» (Lc 9:23), y advierte a los que quieren seguirle con condiciones: el que pone la mano en el arado y mira atrás no es apto para el reino (Lc 9:62). Ante las multitudes que lo seguían con entusiasmo, les pidió calcular el costo (Lc 14:28).',
        'Estas palabras no son solo para algunos creyentes especiales. Jesús no ofrece un discipulado barato, pero tampoco pide algo que Él no dé primero: Él mismo dejó su gloria, se hizo siervo y fue a la cruz.',
        { h: 'Escuchar y servir' },
        'El discípulo es alguien que se sienta a los pies de Jesús, como María (Lc 10:39), y que oye la palabra y la hace (Lc 8:21). Y es alguien que sirve, porque su Maestro estuvo entre ellos «como el que sirve» (Lc 22:27). En el reino, la grandeza se mide por el servicio.',
        { h: 'Discípulos que fallan' },
        'Lucas no oculta las debilidades de los discípulos: no entienden los anuncios de la pasión, discuten quién es el mayor, se duermen en Getsemaní, Pedro niega a Jesús y los de Emaús pierden la esperanza. Pero Jesús ora por ellos, los restaura y les abre las Escrituras. El discipulado no es para perfectos, sino para los que vuelven y siguen caminando.',
        { h: 'Testigos llenos del Espíritu' },
        'Al final, Jesús llama a los discípulos «testigos» (Lc 24:48). El camino que comenzó en Galilea sigue en Hechos, donde el «Camino» llega a ser el nombre de la fe cristiana (Hch 9:2). Los seguidores de Jesús continúan su obra con el mismo Espíritu que lo ungió a Él.',
        ir('Ver «El costo del discípulo» en la Armonía', R.armonia + '#costo-discipulo'),
        ir('Ir a la ruta De Lucas a Hechos', '#puente/1')
      ],
      pensar: 'Jesús dice que el que pone la mano en el arado no debe mirar atrás. ¿Qué cosas del pasado te están haciendo mirar atrás en tu camino con Él?'
    }
  ];

  // ================== Mapas ==================
  L.mapas = [
    {
      id: 'm-mundo', n: 'El mundo de Lucas', ref: 'Lucas 2:1-2; 3:1-2; 24:47; Hechos 1:8', fecha: [-5, 62],
      visual: [
        pasos([
          { t: 'El imperio de Augusto: «que todo el mundo fuese empadronado» (2:1)', fecha: -5, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'antioquia', 'alejandria', 'jerusalen', 'belen'] } },
          { t: 'Judea en el imperio: Tiberio, Pilato, Herodes y Felipe (3:1)', fecha: 29, estado: { view: V.oriente, capas: ['roma-14', 'hd-antipas', 'hd-felipe', 'hd-provincia'], lugares: ['jerusalen', 'cesarea', 'damasco', 'antioquia', 'alejandria'] } },
          { t: '«En todas las naciones, comenzando desde Jerusalén» (24:47)', fecha: 33, estado: { view: V.mediterraneo, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'samaria', 'antioquia', 'roma'] } },
          { t: 'Cuando Lucas escribe: la iglesia de Jerusalén a Roma, hacia el 60', fecha: 60, estado: { view: V.mediterraneo, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'efeso', 'filipos', 'corinto', 'roma', 'cesarea'] } }
        ]),
        tabla({
          titulo: 'Los gobernantes que nombra Lucas',
          cab: ['Gobernante', 'Cargo', 'Años'],
          filas: [
            ['Augusto', 'Emperador', '27 a.C.–14 d.C.'],
            ['Cirenio (Quirino)', 'Gobernador de Siria', 'Desde el 6 d.C.; antes, otros cargos en Oriente'],
            ['Herodes el Grande', 'Rey de Judea', '37–4 a.C.'],
            ['Tiberio', 'Emperador', '14–37 d.C.'],
            ['Poncio Pilato', 'Prefecto de Judea', '26–36 d.C.'],
            ['Herodes Antipas', 'Tetrarca de Galilea y Perea', '4 a.C.–39 d.C.'],
            ['Felipe', 'Tetrarca de Iturea y Traconite', '4 a.C.–34 d.C.']
          ]
        })
      ],
      texto: [
        'Esta ruta recorre en el mapa los lugares del evangelio de Lucas. Comienza por el cuadro más grande: el imperio romano en que nació Jesús y en que se escribió el libro.',
        { h: 'Un evangelio en el imperio' },
        'Lucas abre la historia de Jesús con un decreto de Augusto que alcanza a «todo el mundo» (Lc 2:1), es decir, a todo el imperio. El emperador gobernaba desde Roma un territorio que iba de Hispania a Siria. Judea era una región pequeña en el extremo oriental, primero bajo el rey Herodes y después dividida entre sus hijos y un gobernador romano.',
        { h: 'Judea, Galilea y el noreste' },
        'Cuando Juan comenzó a predicar, Pilato gobernaba Judea, Samaria e Idumea desde Cesarea; Herodes Antipas, Galilea y Perea; y Felipe, las tierras al norte y al este del mar de Galilea (Lc 3:1). El mapa muestra esa división. Jesús creció en Galilea, bajo Antipas, y murió en Jerusalén, bajo Pilato. Los dos se encontraron en el juicio (Lc 23:6-12).',
        { h: 'Hacia todas las naciones' },
        'El evangelio termina con una mirada al mundo: el perdón de pecados debe predicarse «en todas las naciones, comenzando desde Jerusalén» (Lc 24:47). Cuando Lucas escribió, hacia el 60, ya había iglesias en Siria, Asia Menor, Grecia y Roma, y él mismo había viajado con Pablo por esos caminos. El último paso del mapa muestra la iglesia en ese tiempo.',
        'Las estaciones que siguen bajan a la tierra de Israel: Nazaret y Belén, Galilea, el gran viaje, el camino de Jericó a Jerusalén y Emaús. En cada mapa se puede activar el relieve, que ayuda a entender por qué Lucas dice que se «sube» a Jerusalén y se «desciende» a Jericó o a Capernaúm.',
        ir('Ver «Roma en Judea» en El imperio romano', R.romano + '#historia/3'),
        ir('Ver «El reino dividido entre tres hijos» en La dinastía de Herodes', R.herodes + '#grande/8')
      ],
      pensar: 'El evangelio nació en una provincia pequeña de un imperio enorme, y hoy ha llegado a todo el mundo. ¿Qué te dice eso sobre el poder de la palabra de Dios frente a los poderes humanos?'
    },
    {
      id: 'm-nazaret', n: 'De Nazaret a Belén y al templo', ref: 'Lucas 1:26, 39; 2:1-7, 22, 39-52', fecha: [-6, 8],
      visual: [
        pasos([
          { t: 'Nazaret, «ciudad de Galilea»: el anuncio a María (1:26)', fecha: -6, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen'] } },
          { t: 'María va a «una ciudad de Judá» en la montaña (1:39)', fecha: -6, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'montana-judea', 'jerusalen'] } },
          { t: 'José sube con María a Belén para el censo (2:4)', fecha: -5, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'], trazos: ['jesus-belen'] } },
          { t: 'A los cuarenta días, la presentación en el templo (2:22)', fecha: -5, estado: { view: V.judea, capas: ['nt-judea'], lugares: ['belen', 'jerusalen'] } },
          { t: 'Vuelven a Nazaret (2:39)', fecha: -4, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'], trazos: ['jesus-nazaret'] } },
          { t: 'Cada año, a la Pascua: Jesús a los doce años (2:41-42)', fecha: 8, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'jerusalen'] } }
        ]),
        img('../tierra-de-israel/img/peregrinos.webp', 'Una caravana de familias peregrinas con asnos camina por un camino de montaña hacia Jerusalén', 'Peregrinos camino a la fiesta.')
      ],
      texto: [
        'Los dos primeros capítulos de Lucas se mueven entre Galilea y Judea. El mapa sigue sus pasos.',
        { h: 'Nazaret y la montaña de Judea' },
        'Nazaret era una aldea pequeña de las colinas de la Baja Galilea, que el Antiguo Testamento nunca menciona. Por eso Lucas la explica: «una ciudad de Galilea, llamada Nazaret» (Lc 1:26). Desde allí María fue «a la montaña, a una ciudad de Judá» (Lc 1:39), donde vivían Zacarías y Elisabet. Lucas no da el nombre; una tradición antigua lo ubica en Ein Karem, al oeste de Jerusalén. Era un viaje de unos cuatro o cinco días a pie.',
        { h: 'A Belén' },
        'Por el censo, José subió de Nazaret a Belén, «por cuanto era de la casa y familia de David» (Lc 2:4). Belén está unos ocho kilómetros al sur de Jerusalén, en la serranía de Judá; era la ciudad de David y el lugar anunciado por Miqueas. El camino más directo cruzaba Samaria; muchos galileos preferían bajar por el valle del Jordán y subir por Jericó. En cualquier caso, eran unos 150 kilómetros.',
        { h: 'Al templo y de vuelta' },
        'Belén estaba tan cerca de Jerusalén que la familia pudo subir al templo para la presentación a los cuarenta días. Lucas dice luego que, cumplido todo, volvieron a Nazaret (Lc 2:39). Mateo cuenta además la visita de los magos y la huida a Egipto (Mt 2), que ocurrieron en ese tiempo; Lucas no la narra.',
        { h: 'Peregrinos a la Pascua' },
        'Cada año, la familia subía a Jerusalén para la Pascua (Lc 2:41). Viajaban en caravana, con parientes y vecinos, por eso José y María caminaron un día entero sin notar que Jesús no estaba con ellos. La distancia y la costumbre de los peregrinos explican el relato.',
        ir('Ver «De Belén a Nazaret» en Cronología del Nuevo Testamento', R.crono + '#nacimiento/5'),
        ir('Ver «Las fiestas de peregrinación» en El mundo judío', R.mundo + '#fe/2')
      ],
      pensar: 'José y María subían cada año a Jerusalén con su hijo. ¿Qué costumbres de fe estás formando en tu familia o en quienes te rodean?'
    },
    {
      id: 'm-galilea', n: 'Galilea: Capernaúm y el lago', ref: 'Lucas 4:14-44; 5:1-11; 7:11-17; 8:22-39; 9:10-17', fecha: [29, 32],
      visual: [
        pasos([
          { t: 'Nazaret: rechazado en su tierra (4:16-30)', fecha: 29, estado: { view: V.galilea, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['nazaret', 'capernaum', 'mar-galilea'] } },
          { t: 'Capernaúm: la sinagoga y la casa de Simón (4:31-41)', fecha: 30, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['capernaum', 'magdala', 'betsaida', 'mar-galilea'] } },
          { t: 'Naín: el hijo de la viuda (7:11-17)', fecha: 31, estado: { view: V.galilea, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['nain', 'tabor', 'nazaret', 'capernaum'] } },
          { t: 'El lago y la tierra de los gadarenos (8:22-39)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['capernaum', 'gadara', 'mar-galilea', 'magdala'] } },
          { t: 'Betsaida: los cinco mil (9:10-17)', fecha: 32, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['betsaida', 'capernaum', 'mar-galilea', 'corazin'] } }
        ]),
        img('../tierra-de-israel/img/galilea.webp', 'Colinas verdes con campos de cultivo descienden hacia el mar de Galilea, con barcas de pesca en la orilla', 'El mar de Galilea y sus colinas.')
      ],
      texto: [
        'El ministerio en Galilea ocupa de Lucas 4:14 a 9:50. Casi todo ocurre alrededor del lago, en un territorio pequeño gobernado por Herodes Antipas.',
        { h: 'Nazaret y Capernaúm' },
        'Después del rechazo de Nazaret, Jesús bajó a Capernaúm (Lc 4:31). Nazaret está en las colinas, a unos 350 metros sobre el nivel del mar; Capernaúm, junto al lago, unos 200 metros bajo el nivel del mar. Lucas dice literalmente que Jesús «descendió». Capernaúm era un pueblo de pescadores y agricultores sobre el camino que iba de la costa a Damasco, con una sinagoga y una aduana. Allí vivían Pedro y Andrés, y allí estaba el banco de Leví.',
        { h: 'El lago' },
        'Lucas, que conocía el Mediterráneo, llama al mar de Galilea «lago» (Lc 5:1; 8:22). Tiene unos 21 kilómetros de largo y 13 de ancho. Por su ubicación, rodeado de colinas, los vientos bajan de pronto y levantan tormentas. Al otro lado, en la orilla oriental, estaba la Decápolis, una región de ciudades griegas con población mayormente gentil; por eso había allí un hato de cerdos (Lc 8:32).',
        { h: 'Naín y Betsaida' },
        'Naín está unos 40 kilómetros al suroeste de Capernaúm, al pie del monte Moré, frente al Tabor. Muy cerca estaba Sunem, donde Eliseo resucitó al hijo de una mujer (2 R 4:32-37). La multiplicación de los panes ocurrió cerca de Betsaida (Lc 9:10), al norte del lago, en el territorio de Felipe.',
        { h: 'Un ministerio itinerante' },
        'Lucas muestra a Jesús recorriendo «todas las ciudades y aldeas» (Lc 8:1), con los doce y las mujeres que lo servían. El mapa ayuda a ver que eran distancias que se recorrían a pie en uno o dos días.',
        ir('Ver «Galilea y su mar» en La tierra de Israel', R.tierra + '#regiones/6'),
        ir('Ver «Antipas, el constructor de Galilea» en La dinastía de Herodes', R.herodes + '#hijos/3')
      ],
      pensar: 'Jesús eligió como centro de su ministerio un pueblo de pescadores, no la capital. ¿Qué te dice eso sobre los lugares donde Dios quiere obrar hoy?'
    },
    {
      id: 'm-viaje', n: 'El gran viaje a Jerusalén', ref: 'Lucas 9:51-56; 10:38; 13:22; 17:11; 18:31, 35; 19:1, 11, 28', fecha: [32, 33],
      visual: [
        esq('lc-viaje.svg', 'Una línea que va de Galilea a Jerusalén con seis marcas: Lucas 9:51, 13:22, 17:11, 18:31, 19:11 y 19:28, cada una con la frase en que Lucas recuerda que Jesús va a Jerusalén', 'El viaje a Jerusalén: Lucas lo recuerda seis veces.'),
        pasos([
          { t: 'Salida de Galilea: «afirmó su rostro» (9:51)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['capernaum', 'nazaret', 'jerusalen'] } },
          { t: 'Una aldea de samaritanos lo rechaza (9:52-56)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['samaria', 'sicar', 'jerusalen'], trazos: ['jesus-samaria'] } },
          { t: '«Pasaba entre Samaria y Galilea» (17:11)', fecha: 33, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'samaria', 'jerico'] } },
          { t: 'Por el valle del Jordán hasta Jericó (18:35; 19:1)', fecha: 33, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['jerico', 'jerusalen', 'betania'], trazos: ['jesus-jerusalen'] } },
          { t: 'De Jericó a Jerusalén (19:28)', fecha: 33, estado: { view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'betania', 'jerusalen'], trazos: ['c-jerico'] } }
        ])
      ],
      texto: [
        'La sección central de Lucas, de 9:51 a 19:27, es un viaje. Pero no es un itinerario detallado: Lucas da pocos nombres de lugares y no sigue una ruta en línea recta.',
        { h: 'Un viaje con propósito' },
        'Lucas recuerda seis veces que Jesús va hacia Jerusalén, como muestra el esquema. Lo que le importa no es la geografía exacta, sino la dirección: cada parábola y cada encuentro ocurren «en el camino» hacia la cruz. Por eso algunos llaman a esta sección «el camino del discípulo»: Jesús enseña a seguirlo mientras va a morir.',
        { h: 'Por Samaria' },
        'Al salir, Jesús envió mensajeros a una aldea de samaritanos, que no lo recibieron porque iba a Jerusalén (Lc 9:53). Los samaritanos tenían su propio templo en el monte Gerizim y se negaban a ayudar a los peregrinos que iban a Jerusalén. Más adelante, Lucas dice que pasaba «entre Samaria y Galilea» (Lc 17:11), en la frontera entre las dos regiones.',
        { h: 'Por Perea y el Jordán' },
        'Muchos peregrinos galileos evitaban Samaria cruzando el Jordán y bajando por Perea, el territorio de Antipas al este del río. Mateo y Marcos dicen que Jesús pasó por allí (Mt 19:1; Mr 10:1). Los fariseos le advirtieron que Herodes quería matarlo (Lc 13:31), lo que encaja con estar en tierras de Antipas. Juan agrega que Jesús visitó Jerusalén en otras fiestas durante este tiempo (Jn 7:10; 10:22). Lucas resume todo en un solo viaje.',
        { h: 'Jericó' },
        'El viaje termina en Jericó, la ciudad de las palmeras, a unos 250 metros bajo el nivel del mar, junto al Jordán. Allí Jesús sanó al ciego y llamó a Zaqueo. Desde Jericó quedaba la subida final.',
        { posturas: {
          titulo: '¿Un viaje o varios?',
          a: { n: 'Lucas reúne varios viajes en uno', t: 'Juan muestra que Jesús subió a Jerusalén en distintas fiestas durante sus últimos meses. Lucas habría reunido material de ese período en una sola sección, ordenada por temas y orientada hacia la cruz, sin pretender un diario de viaje.' },
          b: { n: 'Un solo viaje largo', t: 'Otros entienden que la sección describe un último recorrido de varios meses por Galilea, Samaria y Perea antes de la Pascua final, con las visitas de Juan intercaladas.' },
          c: 'Las dos lecturas respetan el texto. Lucas dice que escribe «por orden» (Lc 1:3), pero el orden de un historiador antiguo podía ser temático además de cronológico.'
        } },
        ir('Ver «El orden del ministerio» en Cronología', R.crono + '#ministerio/5')
      ],
      pensar: 'Durante todo el viaje, Jesús sabía que iba hacia la cruz, y aun así se detuvo a buscar a un ciego y a un publicano. ¿Qué te enseña eso sobre su amor?'
    },
    {
      id: 'm-jericho', n: 'De Jericó a Jerusalén', ref: 'Lucas 10:30; 18:35–19:46', fecha: 33,
      visual: [
        pasos([
          { t: 'Jericó, unos 250 metros bajo el nivel del mar', fecha: 33, estado: { view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'desierto-judea', 'jerusalen'] } },
          { t: 'La subida por el desierto de Judea: unos 30 kilómetros', fecha: 33, estado: { view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'desierto-judea', 'betania', 'jerusalen'], trazos: ['c-jerico'] } },
          { t: 'Betania y el monte de los Olivos, unos 800 metros sobre el mar', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['betania', 'monte-olivos', 'jerusalen', 'getsemani'] } }
        ]),
        esq('../tierra-de-israel/img/esquema-perfil.svg', 'Perfil del terreno de oeste a este a la altura de Jerusalén: la costa, la serranía de Judá, el desierto que baja abruptamente y el valle del Jordán bajo el nivel del mar', 'El perfil de la tierra de Israel: de Jerusalén a Jericó se bajan más de mil metros.'),
        img('../tierra-de-israel/img/engadi.webp', 'Colinas desnudas y quebradas del desierto de Judea, de color ocre, con un sendero que baja entre las rocas', 'El desierto de Judea.')
      ],
      texto: [
        'El tramo final del viaje es uno de los caminos más impresionantes de la tierra de Israel. En unos 30 kilómetros, se sube desde Jericó, en el valle del Jordán, hasta el monte de los Olivos, frente a Jerusalén: más de mil metros de desnivel.',
        { h: 'Un camino por el desierto' },
        'El camino cruza el desierto de Judea, una zona seca, de colinas peladas y quebradas profundas, donde casi no llueve porque las nubes del Mediterráneo descargan antes en la serranía. Era un lugar ideal para los asaltantes. Por eso la parábola del buen samaritano, que Jesús contó durante el viaje, ocurre aquí: «Un hombre descendía de Jerusalén a Jericó, y cayó en manos de ladrones» (Lc 10:30). Cualquier oyente conocía ese peligro.',
        { h: 'La subida de los peregrinos' },
        'En la Pascua, el camino se llenaba de peregrinos de Galilea y Perea. Subían cantando los salmos de ascenso (Sal 120–134). Jesús hizo ese recorrido con una multitud, después de sanar al ciego y de comer en casa de Zaqueo. Lucas dice: «Dicho esto, iba delante subiendo a Jerusalén» (Lc 19:28). Iba al frente, decidido.',
        { h: 'Betania y el monte de los Olivos' },
        'Al final de la subida, en la ladera oriental del monte de los Olivos, estaban las aldeas de Betfagé y Betania, a unos tres kilómetros de la ciudad. En Betania vivían Marta y María. Desde la cumbre del monte se ve de golpe toda Jerusalén y, en tiempos de Jesús, el templo resplandeciente. Allí lloró Jesús sobre la ciudad (Lc 19:41).',
        'Desde el mismo monte, Jesús ascendería al cielo cuarenta días después (Lc 24:50; Hch 1:12), y la profecía anuncia que sus pies se afirmarán de nuevo sobre él cuando venga (Zac 14:4).',
        ir('Ver «El desierto de Judea y el Neguev» en La tierra de Israel', R.tierra + '#regiones/8'),
        ir('Ver «Distancias y viajes a pie» en La tierra de Israel', R.tierra + '#caminos/6')
      ],
      pensar: 'Jesús «iba delante subiendo a Jerusalén», sabiendo lo que le esperaba allí. ¿Qué paso difícil de obediencia necesitas dar siguiendo su ejemplo?'
    },
    {
      id: 'm-emaus', n: 'El camino a Emaús y la ascensión', ref: 'Lucas 24:13-35, 50-53; Hechos 1:12', fecha: 33,
      visual: [
        pasos([
          { t: 'Jerusalén: la tumba vacía, el domingo de mañana (24:1-12)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'golgota'] } },
          { t: 'A Emaús, a sesenta estadios: unos 11 kilómetros (24:13)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'emaus'], trazos: ['c-emaus'] } },
          { t: 'Esa misma hora, de vuelta a Jerusalén (24:33)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['emaus', 'jerusalen'], trazos: ['c-emaus'] } },
          { t: '«Los sacó fuera hasta Betania»: la ascensión (24:50-51)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'monte-olivos', 'betania'] } }
        ]),
        img('lc-emaus.webp', 'Al atardecer, en un camino entre colinas de Judea, dos discípulos conversan con un tercer caminante, visto de espaldas, que les explica algo con la mano', 'El camino a Emaús (Lc 24:15).')
      ],
      texto: [
        'El último capítulo de Lucas ocurre en un solo día y en un espacio pequeño: Jerusalén, el camino a Emaús y el monte de los Olivos.',
        { h: '¿Dónde estaba Emaús?' },
        'Lucas dice que Emaús estaba «a sesenta estadios de Jerusalén» (Lc 24:13). Un estadio medía unos 185 metros, así que la distancia era de unos 11 kilómetros: unas dos horas y media a pie. No se sabe con certeza cuál era la aldea. Se han propuesto varios lugares; este sitio la ubica en el-Qubeibeh, al noroeste de Jerusalén, que coincide con la distancia que da Lucas. Otra candidata, Emaús Nicópolis, está a unos 160 estadios, demasiado lejos para ir y volver el mismo día, aunque algunos manuscritos traen esa cifra.',
        { h: 'Ida y vuelta en un día' },
        'Los dos discípulos salieron de Jerusalén y caminaron conversando hasta el atardecer, cuando le pidieron al desconocido que se quedara «porque se hace tarde» (Lc 24:29). Después de reconocerlo al partir el pan, «levantándose en la misma hora, volvieron a Jerusalén» (Lc 24:33), de noche, otros 11 kilómetros. La alegría les dio fuerzas para desandar el camino.',
        { h: 'Betania' },
        'Lucas termina su evangelio contando que Jesús llevó a los discípulos «fuera hasta Betania» y allí, bendiciéndolos, fue llevado al cielo (Lc 24:50-51). En Hechos agrega que la ascensión ocurrió cuarenta días después de la resurrección y en el monte de los Olivos, «el cual está cerca de Jerusalén, camino de un día de reposo» (Hch 1:3, 12). Betania estaba en la ladera de ese monte. Lucas resume en el evangelio lo que en Hechos cuenta con más detalle.',
        'El mapa termina donde empieza Hechos: en Jerusalén, con los discípulos esperando la promesa del Padre.',
        ir('Ver «Distancias y viajes a pie» en La tierra de Israel', R.tierra + '#caminos/6'),
        ir('Ver «La resurrección, los cuarenta días y Pentecostés» en Cronología', R.crono + '#semana/6')
      ],
      pensar: 'Los de Emaús caminaron 11 kilómetros de noche para contar que Jesús vivía. ¿Qué estarías dispuesto a hacer para compartir esa noticia?'
    }
  ];
})();
/* Lucas · parte 5: temas (parábolas, mujeres, oración, cánticos), puente a Hechos y RUTA_DATA */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  // ================== Temas: Las parábolas de Lucas ==================
  L.parabolas = [
    {
      id: 'p-leer', n: 'Cómo leer las parábolas de Lucas', ref: 'Lucas 8:9-10; 10:29; 15:1-3; 18:1, 9; 19:11', fecha: [30, 33],
      visual: [
        tabla({
          titulo: 'Lucas dice para qué cuenta cada parábola',
          cab: ['Ocasión o propósito', 'Parábola'],
          filas: [
            ['«¿Y quién es mi prójimo?» (10:29)', 'El buen samaritano'],
            ['Uno pide repartir una herencia (12:13)', 'El rico insensato'],
            ['«Este a los pecadores recibe» (15:2)', 'La oveja, la moneda y el hijo'],
            ['«La necesidad de orar siempre» (18:1)', 'La viuda y el juez'],
            ['A unos que confiaban en sí mismos (18:9)', 'El fariseo y el publicano'],
            ['Pensaban que el reino se manifestaría inmediatamente (19:11)', 'Las minas']
          ]
        }),
        cita('Lucas 8:9-10', 'Y sus discípulos le preguntaron, diciendo: ¿Qué significa esta parábola? Y él dijo: A vosotros os es dado conocer los misterios del reino de Dios; pero a los otros por parábolas, para que viendo no vean, y oyendo no entiendan.')
      ],
      texto: [
        'Una parábola es una historia breve, tomada de la vida diaria, que enseña una verdad del reino de Dios. Jesús las usaba para iluminar a los que querían entender y para confrontar a los que se resistían (Lc 8:10). Lucas registra muchas que no están en los otros evangelios.',
        { h: 'Lucas da la clave' },
        'Una ventaja de Lucas es que muchas veces dice por qué Jesús contó la parábola. El buen samaritano responde a un intérprete que quería justificarse; las tres parábolas de lo perdido, a los fariseos que murmuraban; la viuda y el juez enseñan a orar siempre. Leer esa introducción es el primer paso para entender la historia.',
        { h: 'Un punto central' },
        'Las parábolas no son alegorías en las que cada detalle significa algo. Casi siempre tienen un punto principal, a veces dos o tres, uno por cada personaje importante. El aceite y el vino del samaritano no representan los sacramentos ni el mesón a la iglesia; muestran cuánto se esforzó por ayudar. Buscar significados escondidos en cada detalle puede hacer decir a Jesús lo que Él no dijo.',
        { h: 'Personajes que sorprenden' },
        'Las parábolas de Lucas suelen invertir lo esperado: el samaritano es el bueno, el publicano sale justificado, el hijo rebelde es recibido con fiesta y el religioso queda afuera. Los primeros oyentes se sorprendían, y esa sorpresa es parte del mensaje. Para sentirla hay que conocer el mundo de entonces: quiénes eran los samaritanos, qué pensaban de los publicanos, qué significaba que un padre corriera.',
        { h: 'Una respuesta' },
        'Muchas parábolas terminan con una pregunta o con un final abierto: «¿Quién, pues, de estos tres te parece que fue el prójimo?» (Lc 10:36). Jesús no quería solo enseñar ideas; quería que sus oyentes decidieran. Esta ruta estudia seis parábolas propias de Lucas con esa mirada.',
        ir('Ver «Los evangelios y las parábolas» en Cómo interpretar la Biblia', R.interpretar + '#generos/6'),
        ir('Ver «Alegorizar y la tipología» en Cómo interpretar la Biblia', R.interpretar + '#errores/3')
      ],
      pensar: 'Las parábolas piden una respuesta. ¿Hay alguna parábola que hayas leído muchas veces sin dejar que te confronte?'
    },
    {
      id: 'p-samaritano', n: 'El buen samaritano', ref: 'Lucas 10:25-37', fecha: 32,
      visual: [
        img('lc-buen-samaritano.webp', 'En un camino pedregoso del desierto de Judea, un viajero samaritano con turbante se arrodilla junto a un hombre herido y le venda las heridas, con su asno al lado', 'El samaritano se detiene (Lc 10:33-34).'),
        cita('Lucas 10:30-37', 'Respondiendo Jesús, dijo: Un hombre descendía de Jerusalén a Jericó, y cayó en manos de ladrones, los cuales le despojaron; e hiriéndole, se fueron, dejándole medio muerto. Aconteció que descendió un sacerdote por aquel camino, y viéndole, pasó de largo. Asimismo un levita, llegando cerca de aquel lugar, y viéndole, pasó de largo. Pero un samaritano, que iba de camino, vino cerca de él, y viéndole, fue movido a misericordia; y acercándose, vendó sus heridas, echándoles aceite y vino; y poniéndole en su cabalgadura, lo llevó al mesón, y cuidó de él. Otro día al partir, sacó dos denarios, y los dio al mesonero, y le dijo: Cuídamele; y todo lo que gastes de más, yo te lo pagaré cuando regrese. ¿Quién, pues, de estos tres te parece que fue el prójimo del que cayó en manos de los ladrones? El dijo: El que usó de misericordia con él. Entonces Jesús le dijo: Ve, y haz tú lo mismo.')
      ],
      texto: [
        'Es una de las historias más conocidas del mundo. Hasta en lenguaje común se llama «buen samaritano» a quien ayuda a un desconocido. Pero para los primeros oyentes, la expresión era casi una contradicción.',
        { h: 'La pregunta detrás' },
        'Un intérprete de la ley sabía que debía amar a su prójimo como a sí mismo, pero quería saber hasta dónde. «¿Y quién es mi prójimo?» (Lc 10:29). En su tiempo se discutía si el prójimo era solo el israelita, o también el extranjero que vivía en la tierra. La pregunta buscaba un límite.',
        { h: 'Los que pasaron de largo' },
        'El sacerdote y el levita eran servidores del templo. Bajaban de Jerusalén, quizás después de cumplir su turno. Vieron al herido y pasaron por el otro lado. Jesús no explica sus razones; quizás temían tocar un cadáver, quizás temían a los ladrones. Lo importante es que su religión no los movió a la misericordia.',
        { h: 'El enemigo que se detuvo' },
        'El tercero era samaritano. Judíos y samaritanos se despreciaban desde hacía siglos; poco antes, una aldea samaritana había rechazado a Jesús (Lc 9:53). Pero este hombre «fue movido a misericordia» (Lc 10:33). Lucas usa ese verbo para Jesús ante la viuda de Naín (Lc 7:13) y para el padre del hijo pródigo (Lc 15:20). El samaritano actúa como actúa Dios. Arriesgó su seguridad, gastó su aceite y su vino, cedió su cabalgadura, pagó el mesón y se comprometió a volver.',
        { h: 'La pregunta cambiada' },
        'Jesús no respondió «tu prójimo es todo el mundo». Cambió la pregunta: no «¿quién es mi prójimo?», sino «¿quién se portó como prójimo?». El intérprete quería saber a quién estaba obligado a amar; Jesús le mostró que el amor no pregunta por la etnia ni por el mérito del necesitado. Y lo obligó a reconocer que un samaritano cumplió la ley mejor que los sacerdotes.',
        '«Ve, y haz tú lo mismo» (Lc 10:37). La parábola no se entiende solo con la mente; se obedece en el camino.',
        ir('Volver al comentario de Lucas 10', '#comentario/17'),
        ir('Ver «Los samaritanos en tiempos de Jesús» en El mundo judío', R.mundo + '#grupos/7')
      ],
      pensar: 'El samaritano ayudó a alguien que probablemente lo despreciaba. ¿A quién te cuesta ver como prójimo, y qué paso concreto puedes dar hacia esa persona?'
    },
    {
      id: 'p-insensato', n: 'El rico insensato', ref: 'Lucas 12:13-21; Eclesiastés 2:18-21; Santiago 4:13-15', fecha: 32,
      visual: [
        img('lc-rico-insensato.webp', 'De noche, un terrateniente rico contempla satisfecho sus graneros nuevos llenos de trigo a la luz de una lámpara, sin advertir las nubes oscuras que se acercan', 'El rico insensato (Lc 12:19-20).'),
        cita('Lucas 12:13-21', 'Le dijo uno de la multitud: Maestro, di a mi hermano que parta conmigo la herencia. Mas él le dijo: Hombre, ¿quién me ha puesto sobre vosotros como juez o partidor? Y les dijo: Mirad, y guardaos de toda avaricia; porque la vida del hombre no consiste en la abundancia de los bienes que posee. También les refirió una parábola, diciendo: La heredad de un hombre rico había producido mucho. Y él pensaba dentro de sí, diciendo: ¿Qué haré, porque no tengo dónde guardar mis frutos? Y dijo: Esto haré: derribaré mis graneros, y los edificaré mayores, y allí guardaré todos mis frutos y mis bienes; y diré a mi alma: Alma, muchos bienes tienes guardados para muchos años; repósate, come, bebe, regocíjate. Pero Dios le dijo: Necio, esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será? Así es el que hace para sí tesoro, y no es rico para con Dios.')
      ],
      texto: [
        'La parábola nace de una interrupción. Mientras Jesús enseñaba, alguien le gritó: «Maestro, di a mi hermano que parta conmigo la herencia» (Lc 12:13). Era común pedir a un maestro que resolviera pleitos. Jesús se negó a ser juez en ese caso, pero vio el problema de fondo: «Mirad, y guardaos de toda avaricia» (Lc 12:15).',
        { h: 'Un hombre con éxito' },
        'La heredad de un hombre rico había producido mucho. No se dice que la obtuvo con trampas. Su problema era otro: no tenía dónde guardar tanto. Su solución parece sensata: derribar los graneros y construir otros mayores. Y luego decirse a sí mismo: «Alma, muchos bienes tienes guardados para muchos años; repósate, come, bebe, regocíjate» (Lc 12:19).',
        { h: 'Un diálogo consigo mismo' },
        'En la parábola, el hombre habla solo. Dice «mis frutos», «mis graneros», «mis bienes», «mi alma». No menciona a Dios, ni a los pobres, ni a nadie más. Planea muchos años sin preguntarse si los tendrá. Santiago advierte lo mismo a los que dicen «iremos a tal ciudad, y estaremos allá un año»: no saben lo que será mañana (Stg 4:13-14).',
        { h: 'La voz de Dios' },
        'Entonces habla Dios, y es la única vez en una parábola de Jesús que Dios habla directamente: «Necio, esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será?» (Lc 12:20). La palabra «necio» en la Biblia describe al que vive como si Dios no existiera (Sal 14:1). El hombre había asegurado su comida, pero no su vida.',
        { h: 'Rico para con Dios' },
        'Jesús concluye: «Así es el que hace para sí tesoro, y no es rico para con Dios» (Lc 12:21). Inmediatamente después enseña a sus discípulos a no afanarse, a buscar el reino y a hacerse tesoros en el cielo dando a los necesitados (Lc 12:22-34). Ser rico para con Dios es usar lo que tenemos según sus prioridades, sabiendo que todo es suyo y que nuestra vida está en sus manos.',
        ir('Volver al comentario de Lucas 12', '#comentario/19')
      ],
      pensar: 'El rico hizo planes sin contar con Dios ni con los demás. Si hoy fuera tu última noche, ¿de qué te gustaría haber sido «rico»?'
    },
    {
      id: 'p-cena', n: 'La gran cena', ref: 'Lucas 14:15-24; Isaías 25:6-9; Mateo 22:1-14', fecha: 32,
      visual: [
        cita('Lucas 14:16-24', 'Entonces Jesús le dijo: Un hombre hizo una gran cena, y convidó a muchos. Y a la hora de la cena envió a su siervo a decir a los convidados: Venid, que ya todo está preparado. Y todos a una comenzaron a excusarse. El primero dijo: He comprado una hacienda, y necesito ir a verla; te ruego que me excuses. Otro dijo: He comprado cinco yuntas de bueyes, y voy a probarlos; te ruego que me excuses. Y otro dijo: Acabo de casarme, y por tanto no puedo ir. Vuelto el siervo, hizo saber estas cosas a su señor. Entonces enojado el padre de familia, dijo a su siervo: Ve pronto por las plazas y las calles de la ciudad, y trae acá a los pobres, los mancos, los cojos y los ciegos. Y dijo el siervo: Señor, se ha hecho como mandaste, y aún hay lugar. Dijo el señor al siervo: Ve por los caminos y por los vallados, y fuérzalos a entrar, para que se llene mi casa. Porque os digo que ninguno de aquellos hombres que fueron convidados, gustará mi cena.'),
        tabla({
          titulo: 'Tres excusas',
          cab: ['Excusa', 'Qué la hace extraña'],
          filas: [
            ['«He comprado una hacienda, y necesito ir a verla»', 'Nadie compra un campo sin haberlo visto antes'],
            ['«He comprado cinco yuntas de bueyes, y voy a probarlos»', 'Se prueban antes de comprarlos'],
            ['«Acabo de casarme, y por tanto no puedo ir»', 'La boda ya había ocurrido; la invitación se aceptó antes']
          ],
          nota: 'En aquel tiempo se invitaba dos veces: primero para anunciar la fiesta y después para avisar que todo estaba listo.'
        })
      ],
      texto: [
        'Durante una comida, un invitado exclamó: «Bienaventurado el que coma pan en el reino de Dios» (Lc 14:15). Todos esperaban el gran banquete del final, anunciado por Isaías, en el que Dios haría «banquete de manjares» para todos los pueblos (Is 25:6). Y cada uno se imaginaba sentado allí. Jesús respondió con una parábola que preguntaba quiénes estarían de verdad.',
        { h: 'Los invitados que no fueron' },
        'Un hombre hizo una gran cena y convidó a muchos. Ellos ya habían aceptado la primera invitación. Cuando el siervo fue a decirles que todo estaba preparado, todos comenzaron a excusarse. La tabla muestra que sus excusas eran pretextos. Ninguno dijo «no quiero ir», pero ninguno fue. Rechazar la invitación a última hora era una ofensa grave para el anfitrión.',
        { h: 'Los que entraron' },
        'El señor, enojado, mandó a su siervo a las plazas y calles de la ciudad a traer «a los pobres, los mancos, los cojos y los ciegos» (Lc 14:21), los mismos que Jesús acababa de mandar invitar (Lc 14:13). Y como todavía había lugar, lo envió fuera, «por los caminos y por los vallados», a obligar a otros a entrar, «para que se llene mi casa» (Lc 14:23).',
        { h: 'Israel y las naciones' },
        'Los primeros invitados representan a los que se creían seguros del reino, como los líderes religiosos que rechazaban a Jesús. Los pobres de la ciudad, a los marginados de Israel que lo recibían: publicanos, pecadores y enfermos. Los de los caminos, fuera de la ciudad, anuncian a los gentiles. Hechos muestra cómo se cumplió.',
        'La palabra «fuérzalos» no significa obligar a nadie a creer por la fuerza. En la cultura de entonces, un pobre invitado por un rico se negaba por cortesía; el siervo debía insistir con amor hasta convencerlo.',
        { h: 'Una invitación abierta' },
        'La parábola termina con una advertencia: ninguno de los primeros invitados gustará la cena (Lc 14:24). La invitación de Dios es generosa, pero se puede rechazar. Y todavía «hay lugar».',
        ir('Volver al comentario de Lucas 14', '#comentario/21'),
        ir('Ver la gran cena en la Armonía', R.armonia + '#gran-cena')
      ],
      pensar: 'Los invitados no dijeron «no», solo pusieron excusas. ¿Qué excusas sueles poner a la invitación de Dios, y qué excusas escuchas de los que todavía no han venido?'
    },
    {
      id: 'p-prodigo', n: 'El hijo pródigo y el hermano mayor', ref: 'Lucas 15:11-32', fecha: 32,
      visual: [
        img('lc-hijo-prodigo.webp', 'Un padre anciano corre por un camino polvoriento y abraza a su hijo joven, delgado y harapiento, ante una casa de campo de piedra', 'El padre corre a recibir a su hijo (Lc 15:20).'),
        cita('Lucas 15:20-24', 'Y levantándose, vino a su padre. Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó. Y el hijo le dijo: Padre, he pecado contra el cielo y contra ti, y ya no soy digno de ser llamado tu hijo. Pero el padre dijo a sus siervos: Sacad el mejor vestido, y vestidle; y poned un anillo en su mano, y calzado en sus pies. Y traed el becerro gordo y matadlo, y comamos y hagamos fiesta; porque este mi hijo muerto era, y ha revivido; se había perdido, y es hallado. Y comenzaron a regocijarse.'),
        tabla({
          titulo: 'Lo que el padre le da al hijo',
          cab: ['Regalo', 'Qué significa'],
          filas: [
            ['El mejor vestido', 'Honor: lo recibe como hijo de la casa'],
            ['Un anillo', 'Autoridad: el sello de la familia'],
            ['Calzado', 'Libertad: los esclavos andaban descalzos'],
            ['El becerro gordo', 'Fiesta para todo el pueblo']
          ]
        })
      ],
      texto: [
        'Muchos llaman a esta historia «la parábola del hijo pródigo», pero su verdadero protagonista es el padre. Podría llamarse también «la parábola de los dos hijos perdidos», porque los dos estaban lejos del corazón del padre.',
        { h: 'El hijo que se fue' },
        'El menor pidió su parte de la herencia en vida de su padre. Era como decirle que prefería su dinero a su presencia. Se fue lejos y lo desperdició todo. Cuando vino el hambre, terminó cuidando cerdos, animales impuros, y deseando comer las algarrobas que ellos comían. Allí, «volviendo en sí» (Lc 15:17), recordó la casa de su padre y preparó un discurso: «Padre, he pecado contra el cielo y contra ti. Ya no soy digno de ser llamado tu hijo; hazme como a uno de tus jornaleros» (Lc 15:18-19). Es el retrato del arrepentimiento: reconocer, volver y confesar.',
        { h: 'El padre que corrió' },
        'El padre lo vio «cuando aún estaba lejos»: lo esperaba. Corrió, lo abrazó y lo besó antes de que el hijo terminara de hablar. No le dejó decir la parte de «hazme como a uno de tus jornaleros». Le devolvió todo lo que la tabla muestra y mandó hacer fiesta. Así es Dios con el pecador que vuelve: no lo recibe a prueba, sino como hijo.',
        { h: 'El hijo que se quedó' },
        'El mayor nunca se fue de casa, pero tampoco estaba cerca. Al oír la fiesta se enojó y no quiso entrar. Le reprochó al padre: «he aquí, tantos años te sirvo… y nunca me has dado ni un cabrito» (Lc 15:29). Se veía a sí mismo como un siervo que merecía un pago, no como un hijo. Y no llamó «mi hermano» al menor, sino «este tu hijo».',
        'El padre también salió a buscarlo y le rogó que entrara. La parábola no dice qué hizo. Jesús la contó a los fariseos que murmuraban porque recibía a pecadores (Lc 15:2); el final abierto era su invitación. Hay dos maneras de estar perdido: lejos de casa en el pecado, o dentro de casa en el orgullo.',
        ir('Volver al comentario de Lucas 15', '#comentario/22')
      ],
      pensar: 'El hermano mayor servía a su padre, pero no compartía su alegría. ¿Te alegras cuando Dios recibe a alguien que tú considerabas indigno?'
    },
    {
      id: 'p-lazaro', n: 'El rico y Lázaro', ref: 'Lucas 16:19-31; Isaías 58:7', fecha: 32,
      visual: [
        img('lc-rico-lazaro.webp', 'Ante la puerta de piedra de una casa lujosa, un mendigo flaco y cubierto de llagas yace en el suelo, mientras se ve el banquete adentro y unos perros se le acercan', 'Lázaro a la puerta del rico (Lc 16:20-21).'),
        tabla({
          titulo: 'Dos vidas, dos destinos',
          cab: ['', 'El rico', 'Lázaro'],
          filas: [
            ['Nombre', 'No se dice', '«Dios ayuda»'],
            ['En vida', 'Púrpura, lino fino, banquete cada día', 'Llagas, hambre, perros'],
            ['Al morir', '«Fue sepultado»', '«Fue llevado por los ángeles»'],
            ['Después', 'Tormentos en el Hades', 'Consolado en el seno de Abraham'],
            ['Lo que no cambia', 'Una gran sima entre los dos', '']
          ]
        }),
        cita('Lucas 16:27-31', 'Entonces le dijo: Te ruego, pues, padre, que le envíes a la casa de mi padre, porque tengo cinco hermanos, para que les testifique, a fin de que no vengan ellos también a este lugar de tormento. Y Abraham le dijo: A Moisés y a los profetas tienen; óiganlos. El entonces dijo: No, padre Abraham; pero si alguno fuere a ellos de entre los muertos, se arrepentirán. Mas Abraham le dijo: Si no oyen a Moisés y a los profetas, tampoco se persuadirán aunque alguno se levantare de los muertos.')
      ],
      texto: [
        'Jesús contó esta parábola a los fariseos, que eran amigos del dinero y se burlaban de su enseñanza (Lc 16:14). Es la parábola que más habla de lo que hay después de la muerte.',
        { h: 'Dos hombres en una puerta' },
        'El rico se vestía de púrpura, el color de los reyes, y de lino fino, y hacía banquete «cada día» con esplendidez. En el mundo de entonces, la carne se comía en las fiestas; él vivía en fiesta permanente. A su puerta, cada día también, yacía Lázaro, «lleno de llagas», deseando las migajas. Los perros callejeros, animales impuros, le lamían las llagas. El rico pasaba por esa puerta todos los días.',
        { h: 'La muerte cambia todo' },
        'Murió el mendigo «y fue llevado por los ángeles al seno de Abraham». Murió también el rico, y Lucas solo dice que «fue sepultado» (Lc 16:22). En el Hades, en tormentos, el rico alzó los ojos y vio a Lázaro con Abraham. Pidió alivio, pero Abraham le recordó que en vida había recibido sus bienes, y que entre ellos había una gran sima que nadie puede cruzar (Lc 16:26).',
        'El rico no fue condenado por ser rico, ni Lázaro salvado por ser pobre. Abraham mismo había sido muy rico. El rico fue condenado porque vivió para sí y sin arrepentirse, con Moisés y los profetas a su alcance, que mandaban compartir el pan con el hambriento (Is 58:7). Lázaro, cuyo nombre significa «Dios ayuda», representa al pobre que espera en Dios.',
        { h: '«A Moisés y a los profetas tienen»' },
        'Entonces el rico pidió que Lázaro fuera a advertir a sus cinco hermanos. Abraham respondió que ya tenían las Escrituras. Si no las oían, «tampoco se persuadirán aunque alguno se levantare de los muertos» (Lc 16:31). La señal más espectacular no convence a quien ha cerrado su corazón a la Palabra.',
        { h: 'Lo que enseña y lo que no' },
        'La parábola usa imágenes que los oyentes conocían, como el seno de Abraham. No pretende describir todos los detalles del más allá. Pero enseña con claridad que la persona sigue consciente después de la muerte, que hay consuelo para unos y tormento para otros, que el destino se decide en esta vida y que la Escritura basta para conocer el camino de la salvación.',
        ir('Volver al comentario de Lucas 16', '#comentario/23')
      ],
      pensar: '«A Moisés y a los profetas tienen; óiganlos.» Tienes la Biblia completa en tus manos. ¿Qué te está diciendo que hagas hoy, y lo estás oyendo?'
    },
    {
      id: 'p-publicano', n: 'El fariseo y el publicano', ref: 'Lucas 18:9-14; Salmo 51:17', fecha: 33,
      visual: [
        img('lc-fariseo-publicano.webp', 'En un atrio del templo, un fariseo bien vestido ora de pie con las manos en alto mientras, al fondo, un publicano con la cabeza baja se golpea el pecho', 'El fariseo y el publicano (Lc 18:10-13).'),
        cita('Lucas 18:9-14', 'A unos que confiaban en sí mismos como justos, y menospreciaban a los otros, dijo también esta parábola: Dos hombres subieron al templo a orar: uno era fariseo, y el otro publicano. El fariseo, puesto en pie, oraba consigo mismo de esta manera: Dios, te doy gracias porque no soy como los otros hombres, ladrones, injustos, adúlteros, ni aun como este publicano; ayuno dos veces a la semana, doy diezmos de todo lo que gano. Mas el publicano, estando lejos, no quería ni aun alzar los ojos al cielo, sino que se golpeaba el pecho, diciendo: Dios, sé propicio a mí, pecador. Os digo que éste descendió a su casa justificado antes que el otro; porque cualquiera que se enaltece, será humillado; y el que se humilla será enaltecido.')
      ],
      texto: [
        'Lucas dice exactamente para quiénes contó Jesús esta parábola: «a unos que confiaban en sí mismos como justos, y menospreciaban a los otros» (Lc 18:9). Las dos actitudes van juntas: el que confía en su propia justicia termina despreciando a los demás.',
        { h: 'Dos hombres en el templo' },
        'Dos hombres subieron al templo a orar, probablemente a la hora del sacrificio de la mañana o de la tarde. Uno era fariseo, respetado por su piedad. El otro era publicano, despreciado como colaborador de Roma y ladrón.',
        { h: 'La oración del fariseo' },
        'El fariseo, «puesto en pie, oraba consigo mismo» (Lc 18:11). Comenzó bien, dando gracias, pero no por lo que Dios había hecho, sino por lo que él no era: ni ladrón, ni injusto, ni adúltero, «ni aun como este publicano». Luego enumeró sus méritos: ayunaba dos veces a la semana, más de lo que la ley exigía, y daba el diezmo de todo lo que ganaba. Usó «yo» cinco veces. No pidió nada, porque no creía necesitar nada.',
        { h: 'La oración del publicano' },
        'El publicano se quedó lejos, no quería ni alzar los ojos al cielo, y se golpeaba el pecho, un gesto de profundo dolor. Su oración tuvo pocas palabras: «Dios, sé propicio a mí, pecador» (Lc 18:13). La palabra «propicio» se relaciona con la expiación: pedía que Dios cubriera su pecado con un sacrificio. No tenía méritos que mostrar; solo pedía misericordia.',
        { h: 'Justificado' },
        'Jesús dio el veredicto que nadie esperaba: «Os digo que éste descendió a su casa justificado antes que el otro» (Lc 18:14). «Justificado» significa declarado justo por Dios. El publicano recibió de regalo lo que el fariseo creía haber ganado. Es la misma verdad que Pablo enseñará: el hombre es justificado por la fe, no por las obras de la ley (Ro 3:28).',
        'La parábola termina con un principio del reino que Lucas repite: «cualquiera que se enaltece, será humillado; y el que se humilla será enaltecido». Dios no desprecia «al corazón contrito y humillado» (Sal 51:17).',
        ir('Volver al comentario de Lucas 17–18', '#comentario/24'),
        ir('Ver «Justificados por la fe» en La persona y obra de Cristo', R.cristo + '#cruz/5')
      ],
      pensar: 'El fariseo se comparó con el publicano y se sintió bien. ¿Con quién te comparas tú? ¿Qué cambiaría si te compararas con la santidad de Dios?'
    }
  ];

  // ================== Temas: Las mujeres en Lucas ==================
  L.mujeres = [
    {
      id: 'w-maria', n: 'María, la sierva del Señor', ref: 'Lucas 1:26-56; 2:19, 34-35, 48-51; 8:19-21; 11:27-28; Hechos 1:14', fecha: [-6, 33],
      visual: [
        img('lc-elisabet-maria.webp', 'Una joven de velo gris azulado abraza en la puerta de una casa de piedra de las montañas de Judea a una mujer anciana embarazada, que la recibe con alegría', 'María y Elisabet (Lc 1:39-45).'),
        tabla({
          titulo: 'María en Lucas y Hechos',
          cab: ['Momento', 'Pasaje'],
          filas: [
            ['El anuncio: «Hágase conmigo conforme a tu palabra»', '1:38'],
            ['Bienaventurada porque creyó', '1:45'],
            ['El Magníficat: «mi Salvador»', '1:46-55'],
            ['Guardaba todo en su corazón', '2:19, 51'],
            ['Una espada traspasará su alma', '2:35'],
            ['Los que oyen la palabra y la hacen', '8:21; 11:28'],
            ['Orando con los discípulos antes de Pentecostés', 'Hch 1:14']
          ]
        })
      ],
      texto: [
        'Lucas es el evangelio que más nos dice de María, la madre de Jesús. La presenta con respeto y cariño, como la primera creyente del evangelio y modelo de fe para todos los discípulos.',
        { h: 'Una joven que creyó' },
        'María era una joven de una aldea sin importancia, desposada con un artesano. Dios la eligió por gracia: el ángel la llama «muy favorecida», es decir, objeto del favor de Dios (Lc 1:28). Ante un anuncio imposible, preguntó cómo sería y luego se entregó: «He aquí la sierva del Señor» (Lc 1:38). Elisabet la llamó bienaventurada «la que creyó» (Lc 1:45).',
        { h: 'Una adoradora que necesitaba un Salvador' },
        'En el Magníficat, María dice: «mi espíritu se regocija en Dios mi Salvador» (Lc 1:47). Se reconoce necesitada de salvación, como todos. Su cántico no la exalta a ella, sino a Dios, que «ha mirado la bajeza de su sierva». Todas las generaciones la llaman bienaventurada (Lc 1:48), porque Dios hizo con ella grandes cosas.',
        { h: 'Una mujer que meditaba' },
        'María no entendió todo de inmediato. Cuando Jesús se quedó en el templo, ella y José no comprendieron su respuesta (Lc 2:50). Pero «guardaba todas estas cosas en su corazón» (Lc 2:51). Simeón le había anunciado que una espada traspasaría su alma, y así fue al pie de la cruz.',
        { h: 'Bienaventurados los que oyen' },
        'Una mujer exclamó: «Bienaventurado el vientre que te trajo». Jesús respondió: «Antes bienaventurados los que oyen la palabra de Dios, y la guardan» (Lc 11:27-28). No despreció a su madre; señaló lo que la hacía grande: su fe obediente. Esa misma bienaventuranza está abierta a todos.',
        'La última vez que Lucas la menciona es en Hechos, orando con los discípulos en el aposento alto, esperando la promesa del Espíritu (Hch 1:14). La madre de Jesús llegó a ser también su discípula.',
        ir('Volver al comentario de Lucas 1:26-56', '#comentario/2')
      ],
      pensar: 'Lo que hizo grande a María fue que creyó y obedeció la palabra de Dios. ¿Qué palabra de Dios estás guardando y meditando en tu corazón?'
    },
    {
      id: 'w-elisabet-ana', n: 'Elisabet y Ana: mujeres del Espíritu', ref: 'Lucas 1:5-7, 24-25, 39-45, 57-60; 2:36-38; Joel 2:28', fecha: [-7, -5],
      visual: [
        cita('Lucas 2:36-38', 'Estaba también allí Ana, profetisa, hija de Fanuel, de la tribu de Aser, de edad muy avanzada, pues había vivido con su marido siete años desde su virginidad, y era viuda hacía ochenta y cuatro años; y no se apartaba del templo, sirviendo de noche y de día con ayunos y oraciones. Esta, presentándose en la misma hora, daba gracias a Dios, y hablaba del niño a todos los que esperaban la redención en Jerusalén.'),
        tabla({
          titulo: 'Dos ancianas fieles',
          cab: ['', 'Elisabet', 'Ana'],
          filas: [
            ['Familia', 'Descendiente de Aarón, esposa de un sacerdote', 'Hija de Fanuel, de la tribu de Aser'],
            ['Su dolor', 'Estéril, «afrenta» entre los hombres', 'Viuda después de siete años de matrimonio'],
            ['Su fe', 'Justa delante de Dios', 'No se apartaba del templo, ayunando y orando'],
            ['El Espíritu', 'Llena del Espíritu, bendice a María', 'Profetisa'],
            ['Su testimonio', 'Llama a María «la madre de mi Señor»', 'Habla del niño a los que esperaban la redención']
          ]
        })
      ],
      texto: [
        'En los primeros capítulos de Lucas, el Espíritu de Dios vuelve a hablar después de siglos, y lo hace por medio de hombres y de mujeres. Junto a María aparecen dos mujeres ancianas: Elisabet y Ana.',
        { h: 'Elisabet' },
        'Elisabet era de las hijas de Aarón, esposa del sacerdote Zacarías, con su esposo, «justos delante de Dios», pero estéril (Lc 1:5-7). En una cultura donde no tener hijos se vivía como una vergüenza, ella había cargado ese dolor por años. Cuando concibió, se escondió cinco meses y dijo que Dios había quitado su afrenta (Lc 1:25).',
        'Al recibir la visita de María, la criatura saltó en su vientre y ella «fue llena del Espíritu Santo» (Lc 1:41). Fue la primera persona en llamar «Señor» a Jesús antes de su nacimiento: «¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí?» (Lc 1:43). No hubo envidia en ella, aunque era mayor y esposa de sacerdote; se alegró de la bendición de la joven. Y fue firme: cuando quisieron llamar Zacarías al niño, dijo «No; se llamará Juan».',
        { h: 'Ana' },
        'Ana era profetisa, de la tribu de Aser, una de las tribus del norte que muchos daban por perdidas. Había enviudado joven, después de siete años de matrimonio, y tenía unos ochenta y cuatro años (o había vivido ochenta y cuatro años de viudez). No se apartaba del templo, «sirviendo de noche y de día con ayunos y oraciones» (Lc 2:37).',
        'Llegó en el momento en que Simeón sostenía al niño. Dio gracias a Dios «y hablaba del niño a todos los que esperaban la redención en Jerusalén» (Lc 2:38). Fue una de las primeras evangelistas: anunció a Jesús a los que esperaban.',
        { h: 'Hijos e hijas profetizarán' },
        'Joel había anunciado que Dios derramaría su Espíritu sobre toda carne, y que profetizarían «vuestros hijos y vuestras hijas» (Jl 2:28). Lucas muestra que ese derramamiento comienza a anticiparse en hombres y mujeres, jóvenes y ancianos. En Hechos, el Espíritu llena a todos, y las cuatro hijas de Felipe profetizan (Hch 21:9).',
        ir('Ir a los cánticos de la Navidad', '#canticos/1')
      ],
      pensar: 'Ana sirvió a Dios en oración durante décadas, y Dios le permitió ver al Mesías. ¿Qué te enseña su vida sobre la fidelidad en la espera?'
    },
    {
      id: 'w-galilea', n: 'La pecadora perdonada y las mujeres de Galilea', ref: 'Lucas 7:36–8:3; 23:49, 55-56', fecha: 31,
      visual: [
        img('lc-mujeres-galilea.webp', 'Por un camino de Galilea, un grupo de mujeres de distinta condición, una con vestido rojo granza, otra con ropa fina de la corte, camina detrás de un grupo de discípulos', 'Las mujeres que seguían a Jesús (Lc 8:1-3).'),
        cita('Lucas 8:1-3', 'Aconteció después, que Jesús iba por todas las ciudades y aldeas, predicando y anunciando el evangelio del reino de Dios, y los doce con él, y algunas mujeres que habían sido sanadas de espíritus malos y de enfermedades: María, que se llamaba Magdalena, de la que habían salido siete demonios, Juana, mujer de Chuza intendente de Herodes, y Susana, y otras muchas que le servían de sus bienes.'),
        img('lc-pecadora-simon.webp', 'En el patio de la casa de un fariseo, una mujer de velo oscuro llora arrodillada junto a los pies de un invitado reclinado a la mesa, visto de espaldas, mientras el anfitrión la mira con desprecio', 'La mujer pecadora (Lc 7:38).')
      ],
      texto: [
        'Lucas pone una al lado de la otra dos escenas que muestran cómo Jesús recibía a las mujeres: una pecadora que lloraba a sus pies y un grupo de mujeres que lo acompañaban en su ministerio.',
        { h: 'Una mujer sin nombre' },
        'Lucas no dice su nombre, solo que «era pecadora» en la ciudad (Lc 7:37). Todos lo sabían, y por eso Simón el fariseo se escandalizó de que Jesús la dejara tocarlo. Ella no dijo una palabra; sus lágrimas, sus besos y su perfume hablaron por ella. Jesús la defendió, le dijo que sus pecados le eran perdonados y la despidió con dignidad: «Tu fe te ha salvado, vé en paz» (Lc 7:50). Esta mujer no es María Magdalena; Lucas presenta a María Magdalena unos versículos después, como alguien que había sido liberada de demonios, no como una pecadora pública.',
        { h: 'Las que le servían de sus bienes' },
        'Lucas cuenta que Jesús recorría las ciudades y aldeas con los doce y con algunas mujeres. Nombra a tres. María Magdalena, de Magdala, junto al lago, de la que habían salido siete demonios. Juana, mujer de Chuza, intendente de Herodes Antipas: una mujer de la corte que seguía a un predicador itinerante, quizás con riesgo. Y Susana, de la que no sabemos nada más. Había «otras muchas que le servían de sus bienes» (Lc 8:3).',
        'Que unas mujeres acompañaran a un maestro de pueblo en pueblo era algo muy poco común. Jesús las aceptó como discípulas, y ellas sostuvieron con su dinero el ministerio. Mujeres sanadas y liberadas se convirtieron en colaboradoras.',
        { h: 'Fieles hasta el final' },
        'Las mismas mujeres de Galilea estaban mirando de lejos cuando Jesús murió (Lc 23:49), vieron dónde lo sepultaron, prepararon especias y fueron al sepulcro el primer día de la semana (Lc 23:55–24:1). Cuando los discípulos huyeron, ellas permanecieron.',
        ir('Volver al comentario de Lucas 7:36–8:3', '#comentario/13'),
        ir('Ver «Las mujeres en tiempos de Jesús» en El mundo judío', R.mundo + '#vida/4')
      ],
      pensar: 'Las mujeres de Galilea sirvieron a Jesús con sus bienes y lo siguieron hasta la cruz. ¿Cómo estás sirviendo a Jesús con lo que tienes, y hasta dónde estás dispuesto a seguirle?'
    },
    {
      id: 'w-betania', n: 'Marta y María: servir y escuchar', ref: 'Lucas 10:38-42; Juan 11:1-44; 12:1-8', fecha: 32,
      visual: [
        img('../mundo-judio/img/mj-marta-maria.webp', 'En una casa de Betania, una joven se sienta a escuchar en el suelo mientras su hermana, con delantal, trae un cántaro con gesto de reproche', 'Marta y María (Lc 10:39-40).'),
        cita('Lucas 10:38-42', 'Aconteció que yendo de camino, entró en una aldea; y una mujer llamada Marta le recibió en su casa. Esta tenía una hermana que se llamaba María, la cual, sentándose a los pies de Jesús, oía su palabra. Pero Marta se preocupaba con muchos quehaceres, y acercándose, dijo: Señor, ¿no te da cuidado que mi hermana me deje servir sola? Dile, pues, que me ayude. Respondiendo Jesús, le dijo: Marta, Marta, afanada y turbada estás con muchas cosas. Pero sólo una cosa es necesaria; y María ha escogido la buena parte, la cual no le será quitada.')
      ],
      texto: [
        'Lucas cuenta una sola escena de las hermanas de Betania, pero ha dejado una huella profunda en la iglesia. Juan las presenta en otros dos momentos: la resurrección de su hermano Lázaro y la cena antes de la última Pascua.',
        { h: 'Marta recibe a Jesús' },
        'Lucas dice que Marta «le recibió en su casa» (Lc 10:38). Era la dueña de casa, hospitalaria y activa. Recibir a Jesús y a sus discípulos significaba cocinar para muchas personas. Marta «se preocupaba con muchos quehaceres» (Lc 10:40). Lo que hacía era bueno y necesario.',
        { h: 'María a los pies de Jesús' },
        'María, en cambio, «sentándose a los pies de Jesús, oía su palabra» (Lc 10:39). Esa era la postura de un discípulo ante su maestro; Pablo dice que se formó «a los pies de Gamaliel» (Hch 22:3). En aquel tiempo, muy pocos maestros aceptaban mujeres como discípulas. Jesús no solo lo permitió, sino que lo defendió.',
        { h: 'La queja y la respuesta' },
        'Marta se acercó molesta: «Señor, ¿no te da cuidado que mi hermana me deje servir sola? Dile, pues, que me ayude» (Lc 10:40). Se quejaba de su hermana y, en el fondo, de Jesús. Jesús le respondió con ternura, repitiendo su nombre: «Marta, Marta, afanada y turbada estás con muchas cosas. Pero sólo una cosa es necesaria; y María ha escogido la buena parte, la cual no le será quitada» (Lc 10:41-42).',
        'Jesús no despreció el servicio de Marta. Lo que corrigió fue el afán, que la hacía sentirse sola y juzgar a su hermana. El servicio que no nace de estar con Jesús se vuelve carga y queja.',
        { h: 'Las dos hermanas en Juan' },
        'Juan muestra que Marta también aprendió. Cuando murió Lázaro, ella hizo una de las grandes confesiones del evangelio: «yo he creído que tú eres el Cristo, el Hijo de Dios» (Jn 11:27). Y en la cena de Betania, mientras Marta servía, María ungió los pies de Jesús con perfume (Jn 12:2-3). Cada una sirvió con lo que era, a los pies de Jesús.',
        ir('Volver al comentario de Lucas 10', '#comentario/17')
      ],
      pensar: '«Sólo una cosa es necesaria.» ¿Cuánto tiempo pasas a los pies de Jesús escuchando su palabra, antes de servirle?'
    },
    {
      id: 'w-viudas', n: 'Viudas e hijas de Abraham', ref: 'Lucas 4:25-26; 7:11-17; 8:40-56; 13:10-17; 18:1-8; 20:47; 21:1-4', fecha: [29, 33],
      visual: [
        img('lc-viuda-juez.webp', 'Ante la puerta de un tribunal, una viuda de velo oscuro y ropa gastada reclama con el brazo extendido a un juez sentado que la mira con fastidio', 'La viuda y el juez (Lc 18:3).'),
        tabla({
          titulo: 'Mujeres que Jesús sanó, defendió o alabó',
          cab: ['Mujer', 'Pasaje', 'Lo que hizo Jesús'],
          filas: [
            ['La viuda de Sarepta', '4:25-26', 'La puso como ejemplo de la gracia a los gentiles'],
            ['La viuda de Naín', '7:11-17', 'Se compadeció y le devolvió a su hijo'],
            ['La mujer del flujo de sangre', '8:43-48', 'La sanó y la llamó «Hija»'],
            ['La hija de Jairo', '8:49-56', 'La resucitó'],
            ['La mujer encorvada', '13:10-17', 'La liberó y la llamó «hija de Abraham»'],
            ['La viuda insistente', '18:1-8', 'La puso como modelo de oración'],
            ['La viuda pobre', '21:1-4', 'Alabó su ofrenda']
          ]
        })
      ],
      texto: [
        'Lucas menciona viudas más que ningún otro evangelio. En el mundo antiguo, una viuda sin hijos quedaba sin sustento y sin quién la defendiera. La ley de Moisés mandaba cuidarlas (Dt 24:17-21), y los profetas denunciaban a quienes las oprimían. Jesús hizo lo mismo.',
        { h: 'Viudas en el ministerio de Jesús' },
        'En Nazaret, Jesús recordó a la viuda de Sarepta. En Naín, se compadeció de una viuda que enterraba a su único hijo. En el templo, denunció a los escribas que «devoran las casas de las viudas» con largas oraciones (Lc 20:47), y en seguida alabó a una viuda pobre que echó dos blancas, todo lo que tenía. En una parábola, una viuda sin poder es el modelo de la oración perseverante: insiste ante un juez injusto hasta conseguir justicia (Lc 18:1-8). Las viudas de Lucas son débiles ante los hombres y fuertes ante Dios.',
        { h: 'Hijas' },
        'Jesús llamó «Hija» a la mujer que llevaba doce años con flujo de sangre (Lc 8:48). Su enfermedad la hacía impura según la ley y la excluía de la vida religiosa. Tocó el manto de Jesús en secreto, pero Él la hizo hablar delante de todos para que todos supieran que estaba sana y restaurada. A la mujer encorvada la llamó «hija de Abraham» (Lc 13:16), un título que casi no se usaba para mujeres. Las declaró miembros plenos del pueblo de la promesa.',
        { h: 'El corazón de Dios' },
        'El salmista llama a Dios «Padre de huérfanos y defensor de viudas» (Sal 68:5). Jesús mostró ese corazón. Y la iglesia de Hechos lo continuó: organizó la ayuda diaria a las viudas (Hch 6:1-6), y Dorcas hacía túnicas para ellas (Hch 9:39). Santiago resume: la religión pura es visitar a los huérfanos y a las viudas en sus tribulaciones (Stg 1:27).',
        ir('Ver «Las mujeres en tiempos de Jesús» en El mundo judío', R.mundo + '#vida/4')
      ],
      pensar: 'Jesús se detuvo ante viudas y mujeres que nadie veía. ¿Hay en tu iglesia o en tu barrio personas solas que necesitan que alguien se detenga?'
    },
    {
      id: 'w-testigos', n: 'Las primeras testigos de la resurrección', ref: 'Lucas 23:49, 55-56; 24:1-12, 22-24; Hechos 1:14', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/tumba-vacia.webp', 'A la luz del amanecer, la entrada de una tumba excavada en la roca, con la piedra redonda corrida a un lado', 'La piedra removida (Lc 24:2).'),
        cita('Lucas 24:1-10', 'El primer día de la semana, muy de mañana, vinieron al sepulcro, trayendo las especias aromáticas que habían preparado, y algunas otras mujeres con ellas. Y hallaron removida la piedra del sepulcro; y entrando, no hallaron el cuerpo del Señor Jesús. Aconteció que estando ellas perplejas por esto, he aquí se pararon junto a ellas dos varones con vestiduras resplandecientes; y como tuvieron temor, y bajaron el rostro a tierra, les dijeron: ¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado. Acordaos de lo que os habló, cuando aún estaba en Galilea, diciendo: Es necesario que el Hijo del Hombre sea entregado en manos de hombres pecadores, y que sea crucificado, y resucite al tercer día. Entonces ellas se acordaron de sus palabras, y volviendo del sepulcro, dieron nuevas de todas estas cosas a los once, y a todos los demás. Eran María Magdalena, y Juana, y María madre de Jacobo, y las demás con ellas, quienes dijeron estas cosas a los apóstoles.')
      ],
      texto: [
        'Lucas termina su evangelio con las mujeres en el centro. Las que habían seguido a Jesús desde Galilea estuvieron junto a la cruz, en la sepultura y en la tumba vacía.',
        { h: 'Al pie de la cruz' },
        'Cuando Jesús murió, «todos sus conocidos, y las mujeres que le habían seguido desde Galilea, estaban lejos mirando estas cosas» (Lc 23:49). Siguieron a José de Arimatea, vieron el sepulcro y cómo fue puesto el cuerpo, y volvieron a preparar especias y ungüentos. El sábado descansaron, «conforme al mandamiento» (Lc 23:56). Eran fieles a la ley y fieles a su Señor.',
        { h: 'Muy de mañana' },
        'El primer día de la semana, muy de mañana, fueron al sepulcro con las especias. Iban a cumplir un último acto de amor por un muerto. Hallaron removida la piedra y no hallaron el cuerpo. Dos varones con vestiduras resplandecientes les dijeron: «¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado» (Lc 24:5-6). Y les recordaron lo que Jesús les había dicho en Galilea.',
        '«Entonces ellas se acordaron de sus palabras» (Lc 24:8). Las mujeres habían sido discípulas: habían escuchado la enseñanza de Jesús sobre su muerte y resurrección.',
        { h: 'Un testimonio despreciado' },
        'Lucas da sus nombres: María Magdalena, Juana y María madre de Jacobo, y «las demás con ellas». Fueron y contaron todo a los once, «mas a ellos les parecían locura las palabras de ellas, y no las creían» (Lc 24:11). En aquel tiempo, el testimonio de una mujer tenía poco valor ante un tribunal. Si los discípulos hubieran inventado la resurrección, nunca habrían elegido a mujeres como primeras testigos. Dios sí las eligió.',
        { h: 'En el aposento alto' },
        'Cuarenta días después, cuando los discípulos esperaban en Jerusalén la promesa del Padre, Lucas cuenta que perseveraban unánimes en oración «con las mujeres, y con María la madre de Jesús» (Hch 1:14). Cuando vino el Espíritu en Pentecostés, cayó sobre todos, hombres y mujeres, y se cumplió lo dicho por Joel: «vuestros hijos y vuestras hijas profetizarán» (Hch 2:17).',
        ir('Volver al comentario de Lucas 24', '#comentario/31'),
        ir('Ver «Las mujeres de Hechos» en Hechos', R.hechos + '#personajes/6')
      ],
      pensar: 'Las primeras en anunciar la resurrección no fueron creídas. ¿Sigues contando lo que Dios ha hecho aunque otros no te crean?'
    }
  ];

  // ================== Temas: Jesús que ora ==================
  L.oracion = [
    {
      id: 'o-bautismo', n: 'Orando en el bautismo y en lugares desiertos', ref: 'Lucas 3:21-22; 4:42; 5:15-16', fecha: [29, 30],
      visual: [
        img('../dios-y-la-trinidad/img/bautismo-jesus.webp', 'Jesús, de espaldas, sale del agua del Jordán mientras desde el cielo abierto desciende una luz suave', 'Jesús ora en el bautismo (Lc 3:21).'),
        cita('Lucas 5:15-16', 'Pero su fama se extendía más y más; y se reunía mucha gente para oírle, y para que les sanase de sus enfermedades. Mas él se apartaba a lugares desiertos, y oraba.')
      ],
      texto: [
        'Esta ruta sigue a Jesús en los momentos en que Lucas lo muestra orando. Son más que en ningún otro evangelio, y casi siempre ocurren antes de un momento decisivo.',
        { h: 'El cielo se abrió mientras oraba' },
        'Mateo y Marcos cuentan que, al salir Jesús del agua, el cielo se abrió y el Espíritu descendió. Lucas agrega un detalle: «Jesús… orando, el cielo se abrió» (Lc 3:21). El comienzo del ministerio de Jesús, la venida del Espíritu sobre Él y la voz del Padre ocurren en un momento de oración. No es casual: en Hechos, el Espíritu también desciende sobre los discípulos mientras oran (Hch 1:14; 2:1-4; 4:31).',
        { h: 'Apartarse para orar' },
        'El ministerio en Galilea fue intenso. Después de un día entero sanando enfermos en Capernaúm, Jesús salió de madrugada a un lugar desierto (Lc 4:42). Cuando su fama se extendía y grandes multitudes venían a oírle y a ser sanadas, Lucas dice: «Mas él se apartaba a lugares desiertos, y oraba» (Lc 5:16). El verbo indica una costumbre, algo que hacía una y otra vez.',
        'Cuanto más crecía el ministerio, más se retiraba Jesús a orar. No lo hacía porque le sobrara tiempo, sino porque sabía de dónde venía su poder. El éxito y la presión de la gente podían alejarlo de su misión; la oración lo mantenía unido al Padre y a su voluntad.',
        { h: 'Un ejemplo para nosotros' },
        'Si el Hijo de Dios, lleno del Espíritu, necesitaba apartarse a solas con el Padre, cuánto más sus discípulos. La vida espiritual no se sostiene con la actividad, por buena que sea. Jesús enseñó después: «cuando ores, entra en tu aposento, y cerrada la puerta, ora a tu Padre que está en secreto» (Mt 6:6).',
        ir('Ver el bautismo en la Armonía', R.armonia + '#bautismo')
      ],
      pensar: 'Cuanto más ocupado estaba Jesús, más tiempo apartaba para orar. Cuando tu vida se llena de actividades, ¿qué pasa con tu tiempo a solas con Dios?'
    },
    {
      id: 'o-decisiones', n: 'Una noche antes de elegir y la cima del monte', ref: 'Lucas 6:12-13; 9:18-20, 28-31', fecha: [31, 32],
      visual: [
        img('lc-jesus-ora.webp', 'Antes del amanecer, en una ladera rocosa de Galilea, una figura vista de espaldas ora de rodillas con las manos abiertas, mientras unos discípulos esperan a cierta distancia', 'Jesús pasa la noche orando (Lc 6:12).'),
        cita('Lucas 6:12-13', 'En aquellos días él fue al monte a orar, y pasó la noche orando a Dios. Y cuando era de día, llamó a sus discípulos, y escogió a doce de ellos, a los cuales también llamó apóstoles:'),
        cita('Lucas 9:28-29', 'Aconteció como ocho días después de estas palabras, que tomó a Pedro, a Juan y a Jacobo, y subió al monte a orar. Y entre tanto que oraba, la apariencia de su rostro se hizo otra, y su vestido blanco y resplandeciente.', 'La transfiguración')
      ],
      texto: [
        'Tres momentos decisivos del ministerio de Jesús en Galilea están precedidos por la oración, y Lucas es el único que lo dice en los tres.',
        { h: 'Antes de elegir a los doce' },
        '«En aquellos días él fue al monte a orar, y pasó la noche orando a Dios. Y cuando era de día, llamó a sus discípulos, y escogió a doce de ellos» (Lc 6:12-13). Elegir a los apóstoles era una de las decisiones más importantes de su ministerio: ellos serían los testigos de su resurrección y el fundamento de la iglesia (Ef 2:20). Jesús no lo decidió solo; lo decidió con el Padre, en una noche entera de oración. Y aun así incluyó a Judas, que lo traicionaría, porque también eso estaba en el plan de Dios.',
        { h: 'Antes de la gran pregunta' },
        '«Aconteció que mientras Jesús oraba aparte, estaban con él los discípulos; y les preguntó, diciendo: ¿Quién dice la gente que soy yo?» (Lc 9:18). Después de orar, Jesús llevó a sus discípulos a confesar que era el Cristo de Dios, y les anunció por primera vez su muerte. La revelación de quién es Jesús nace en un ambiente de oración. Mateo agrega que Jesús le dijo a Pedro que eso no se lo había revelado carne ni sangre, sino el Padre (Mt 16:17).',
        { h: 'En la transfiguración' },
        'Lucas dice que Jesús subió al monte «a orar», «y entre tanto que oraba, la apariencia de su rostro se hizo otra» (Lc 9:28-29). Mateo y Marcos cuentan la transfiguración; solo Lucas dice que ocurrió mientras oraba. En la oración, la gloria del Hijo se hizo visible, y Moisés y Elías hablaron con Él de la partida que iba a cumplir en Jerusalén. Allí, en comunión con el Padre, Jesús enfrentó lo que le esperaba.',
        'Los discípulos, en cambio, «estaban rendidos de sueño» (Lc 9:32), como lo estarán después en Getsemaní. La oración de Jesús contrasta con el sueño de sus seguidores.',
        ir('Volver al comentario de Lucas 6:1-19', '#comentario/10')
      ],
      pensar: 'Jesús oró una noche entera antes de una decisión que afectaría a muchos. ¿Qué decisión importante estás por tomar, y cuánto la has orado?'
    },
    {
      id: 'o-ensenanos', n: '«Señor, enséñanos a orar»', ref: 'Lucas 11:1-13; Mateo 6:9-13', fecha: 32,
      visual: [
        cita('Lucas 11:1-4', 'Aconteció que estaba Jesús orando en un lugar, y cuando terminó, uno de sus discípulos le dijo: Señor, enséñanos a orar, como también Juan enseñó a sus discípulos. Y les dijo: Cuando oréis, decid: Padre nuestro que estás en los cielos, santificado sea tu nombre. Venga tu reino. Hágase tu voluntad, como en el cielo, así también en la tierra. El pan nuestro de cada día, dánoslo hoy. Y perdónanos nuestros pecados, porque también nosotros perdonamos a todos los que nos deben. Y no nos metas en tentación, mas líbranos del mal.'),
        tabla({
          titulo: 'El Padre nuestro en Lucas',
          cab: ['Petición', 'Qué pide'],
          filas: [
            ['«Padre nuestro que estás en los cielos»', 'Hablar con Dios como hijos'],
            ['«Santificado sea tu nombre»', 'Que Dios sea honrado como santo'],
            ['«Venga tu reino»', 'Que Dios reine plenamente'],
            ['«Hágase tu voluntad, como en el cielo, así también en la tierra»', 'Que se haga lo que Dios quiere'],
            ['«El pan nuestro de cada día, dánoslo hoy»', 'Lo necesario para vivir'],
            ['«Perdónanos nuestros pecados»', 'El perdón, y perdonar a otros'],
            ['«No nos metas en tentación, mas líbranos del mal»', 'Protección en la prueba']
          ],
          nota: 'Las frases de la tabla siguen el texto de la RV 1960 en Lucas 11:2-4, que incluye algunas palabras que faltan en varios manuscritos antiguos.'
        })
      ],
      texto: [
        'Los discípulos de Juan aprendían a orar con su maestro, y los de Jesús le pidieron lo mismo. El pedido surgió al verlo orar: «Aconteció que estaba Jesús orando en un lugar, y cuando terminó, uno de sus discípulos le dijo: Señor, enséñanos a orar» (Lc 11:1).',
        { h: 'Un modelo, no una fórmula' },
        'Jesús les dio una oración breve. Mateo la registra en el sermón del monte, con algunas diferencias, lo que muestra que Jesús la enseñó en más de una ocasión. La iglesia la ha repetido por siglos, y está bien hacerlo. Pero Jesús la dio sobre todo como modelo: enseña qué pedir y en qué orden.',
        { h: 'Primero Dios' },
        'La oración comienza con Dios: su nombre, su reino, su voluntad. Antes de presentar nuestras necesidades, ponemos nuestra vida bajo su gobierno. Orar «venga tu reino» es pedir que Cristo reine plenamente, ahora en nuestras vidas y un día en toda la tierra.',
        { h: 'Después nuestras necesidades' },
        'Luego viene el pan «de cada día», que recuerda el maná del desierto: Dios provee día a día. El perdón, unido al compromiso de perdonar «a todos los que nos deben». Y la protección frente a la tentación, porque somos débiles.',
        { h: 'Orar con insistencia y confianza' },
        'Jesús añadió dos enseñanzas. La parábola del amigo a medianoche enseña a pedir con insistencia, sin vergüenza. Y la comparación con los padres enseña a pedir con confianza: si un padre humano no da una piedra al hijo que pide pan, «¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?» (Lc 11:13). La oración culmina pidiendo lo más importante: la presencia y el poder del Espíritu de Dios.',
        ir('Volver al comentario de Lucas 11', '#comentario/18')
      ],
      pensar: 'Los discípulos pidieron aprender a orar porque vieron orar a Jesús. ¿Hay alguien que esté aprendiendo a orar al verte orar a ti?'
    },
    {
      id: 'o-siempre', n: 'Orar siempre, y no desmayar', ref: 'Lucas 18:1-14; 21:36', fecha: 33,
      visual: [
        img('lc-viuda-juez.webp', 'Ante la puerta de un tribunal, una viuda de velo oscuro y ropa gastada reclama con el brazo extendido a un juez sentado que la mira con fastidio', 'La viuda y el juez (Lc 18:3).'),
        cita('Lucas 18:1-8', 'También les refirió Jesús una parábola sobre la necesidad de orar siempre, y no desmayar, diciendo: Había en una ciudad un juez, que ni temía a Dios, ni respetaba a hombre. Había también en aquella ciudad una viuda, la cual venía a él, diciendo: Hazme justicia de mi adversario. Y él no quiso por algún tiempo; pero después de esto dijo dentro de sí: Aunque ni temo a Dios, ni tengo respeto a hombre, sin embargo, porque esta viuda me es molesta, le haré justicia, no sea que viniendo de continuo, me agote la paciencia. Y dijo el Señor: Oíd lo que dijo el juez injusto. ¿Y acaso Dios no hará justicia a sus escogidos, que claman a él día y noche? ¿Se tardará en responderles? Os digo que pronto les hará justicia. Pero cuando venga el Hijo del Hombre, ¿hallará fe en la tierra?')
      ],
      texto: [
        'Lucas presenta dos parábolas seguidas sobre la oración, y de las dos dice el propósito antes de contarlas.',
        { h: 'La viuda y el juez' },
        'La primera enseña «la necesidad de orar siempre, y no desmayar» (Lc 18:1). Un juez no temía a Dios ni respetaba a nadie. Una viuda, sin dinero ni influencias, le pedía justicia contra su adversario. Él no quiso por un tiempo, pero la insistencia de ella lo cansó: «le haré justicia, no sea que viniendo de continuo, me agote la paciencia» (Lc 18:5).',
        'La parábola no compara a Dios con el juez, sino que los contrasta. Si un juez injusto termina haciendo justicia, «¿acaso Dios no hará justicia a sus escogidos, que claman a él día y noche?» (Lc 18:7). Dios no es indiferente ni hay que cansarlo. Pero a veces parece tardar, y la tentación es desmayar. Jesús anima a seguir orando, porque Dios responderá «pronto», a su tiempo.',
        'La parábola termina con una pregunta: «cuando venga el Hijo del Hombre, ¿hallará fe en la tierra?» (Lc 18:8). La oración perseverante es una forma de fe que espera su venida.',
        { h: 'El fariseo y el publicano' },
        'La segunda parábola se dirige a los que confiaban en sí mismos. Muestra que no basta orar mucho; hay que orar con humildad. El fariseo oraba con frecuencia, pero su oración era una lista de méritos. El publicano solo pedía misericordia, y fue justificado. Dios escucha al humilde.',
        { h: 'Velad orando' },
        'En el discurso sobre el fin, Jesús vuelve a la oración: «Velad, pues, en todo tiempo orando que seáis tenidos por dignos de escapar de todas estas cosas que vendrán, y de estar en pie delante del Hijo del Hombre» (Lc 21:36). La oración mantiene despierto al creyente mientras espera a su Señor.',
        'Las dos parábolas juntas dan el retrato de la oración que agrada a Dios: perseverante como la viuda, humilde como el publicano.',
        ir('Volver al comentario de Lucas 17–18', '#comentario/24')
      ],
      pensar: '¿Hay alguna oración que hayas dejado de hacer porque la respuesta tardaba? ¿Qué te dice la viuda insistente?'
    },
    {
      id: 'o-getsemani', n: 'Por Pedro y en Getsemaní', ref: 'Lucas 22:31-32, 39-46; Hebreos 5:7; 7:25', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/getsemani.webp', 'De noche, entre olivos antiguos, una figura vista de espaldas ora postrada junto a una roca, mientras tres discípulos duermen a cierta distancia', 'Getsemaní (Lc 22:41).'),
        cita('Lucas 22:31-32', 'Dijo también el Señor: Simón, Simón, he aquí Satanás os ha pedido para zarandearos como a trigo; pero yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos.')
      ],
      texto: [
        'En la última noche, Lucas muestra a Jesús orando de dos maneras: por otro y por sí mismo.',
        { h: '«Yo he rogado por ti»' },
        'En la cena, Jesús le advirtió a Pedro que Satanás había pedido zarandearlos como a trigo. El verbo está en plural: el ataque era contra todos. Pero Jesús dijo a Pedro: «yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos» (Lc 22:32). Jesús sabía que Pedro lo negaría, y oró antes de la caída para que su fe sobreviviera. Pedro cayó, pero no se perdió. Volvió, y en Hechos fue el que confirmó a sus hermanos.',
        'Hebreos dice que Jesús puede salvar a los que por Él se acercan a Dios, «viviendo siempre para interceder por ellos» (He 7:25). Lo que hizo por Pedro esa noche, lo sigue haciendo por su pueblo.',
        { h: 'En Getsemaní' },
        'En el monte de los Olivos, Jesús dijo a los discípulos: «Orad que no entréis en tentación» (Lc 22:40), y se apartó a orar. Su oración fue de entrega: «Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya» (Lc 22:42). Jesús no fingió: pidió honestamente que la copa pasara, y al mismo tiempo se sometió por completo a la voluntad del Padre.',
        'Hebreos describe esos días: «ofreciendo ruegos y súplicas con gran clamor y lágrimas al que le podía librar de la muerte, fue oído a causa de su temor reverente» (He 5:7). Fue oído, no porque se le evitara la cruz, sino porque recibió fuerza para ir a ella y fue librado de la muerte por la resurrección.',
        { h: 'Discípulos dormidos' },
        'Al volver, halló a los discípulos «durmiendo a causa de la tristeza» (Lc 22:45). Jesús les dijo de nuevo: «Levantaos, y orad para que no entréis en tentación». Momentos después llegó Judas. Jesús, que había orado, enfrentó la prueba con serenidad. Los discípulos, que durmieron, huyeron y negaron.',
        ir('Volver al comentario de Lucas 22:39-71', '#comentario/29')
      ],
      pensar: 'Jesús oró por Pedro antes de su caída. Hoy intercede por ti. ¿Por quién podrías orar tú hoy, sabiendo que enfrenta una prueba?'
    },
    {
      id: 'o-cruz', n: 'Orando en la cruz y una iglesia que ora', ref: 'Lucas 23:34, 46; 24:50-53; Hechos 1:14; 7:59-60', fecha: 33,
      visual: [
        cita('Lucas 23:33-34', 'Y cuando llegaron al lugar llamado de la Calavera, le crucificaron allí, y a los malhechores, uno a la derecha y otro a la izquierda. Y Jesús decía: Padre, perdónalos, porque no saben lo que hacen. Y repartieron entre sí sus vestidos, echando suertes.'),
        tabla({
          titulo: 'Jesús en la cruz y Esteban al morir',
          cab: ['Jesús (Lucas 23)', 'Esteban (Hechos 7)'],
          filas: [
            ['«Padre, perdónalos, porque no saben lo que hacen» (23:34)', '«Señor, no les tomes en cuenta este pecado» (7:60)'],
            ['«Padre, en tus manos encomiendo mi espíritu» (23:46)', '«Señor Jesús, recibe mi espíritu» (7:59)']
          ]
        })
      ],
      texto: [
        'Las últimas oraciones de Jesús en Lucas se pronuncian en la cruz, y las dos comienzan con «Padre».',
        { h: '«Padre, perdónalos»' },
        'Mientras lo crucificaban, Jesús oró: «Padre, perdónalos, porque no saben lo que hacen» (Lc 23:34). Había enseñado a amar a los enemigos y a orar por los que nos calumnian (Lc 6:27-28), y lo cumplió en el momento de mayor dolor. Oró por los soldados que lo clavaban, por los líderes que lo habían entregado y por el pueblo que gritaba. Pedro diría después a ese pueblo que había actuado «por ignorancia», y le ofrecería el perdón si se arrepentía (Hch 3:17-19). La oración de Jesús fue respondida en miles que se convirtieron.',
        { h: '«En tus manos encomiendo mi espíritu»' },
        'Su última palabra fue una oración tomada del Salmo 31:5: «Padre, en tus manos encomiendo mi espíritu» (Lc 23:46). Era una oración que los niños judíos aprendían para decir antes de dormir. Jesús añadió «Padre». Murió como había vivido: en comunión confiada con el Padre. Nadie le quitó la vida; Él la entregó.',
        { h: 'Una iglesia que ora' },
        'El evangelio termina con los discípulos en el templo, «alabando y bendiciendo a Dios» (Lc 24:53). Hechos comienza con ellos perseverando unánimes en oración en el aposento alto (Hch 1:14). La iglesia nace orando, y el Espíritu desciende sobre una iglesia que ora.',
        'El primer mártir, Esteban, murió orando como su Señor, como muestra la tabla. Los discípulos no solo aprendieron las palabras de Jesús; aprendieron su manera de orar y de morir.',
        'La oración atraviesa Lucas y Hechos de principio a fin. Jesús oró en el bautismo, en las noches de Galilea, en el monte, en Getsemaní y en la cruz. Y sus discípulos, llenos de su Espíritu, siguieron orando.',
        ir('Ver «Una iglesia que ora» en Hechos', R.hechos + '#iglesia/3'),
        ir('Ir a la ruta De Lucas a Hechos', '#puente/1')
      ],
      pensar: 'Jesús oró por los que lo crucificaban. ¿Hay alguien que te haya herido por quien todavía no has podido orar? Pide al Espíritu que te ayude a hacerlo.'
    }
  ];

  // ================== Temas: Los cánticos de la Navidad ==================
  L.canticos = [
    {
      id: 'k-evangelio', n: 'Un evangelio que canta', ref: 'Lucas 1:46-55, 68-79; 2:14, 29-32; Éxodo 15:1-21; 1 Samuel 2:1-10', fecha: [-6, -5],
      visual: [
        tabla({
          titulo: 'Los cuatro cánticos',
          cab: ['Nombre', 'Quién lo canta', 'Pasaje', 'Tema'],
          filas: [
            ['Magníficat', 'María', '1:46-55', 'Dios exalta a los humildes'],
            ['Benedictus', 'Zacarías', '1:68-79', 'Dios cumple su pacto'],
            ['Gloria in excelsis', 'Los ángeles', '2:14', 'Gloria a Dios, paz en la tierra'],
            ['Nunc dimittis', 'Simeón', '2:29-32', 'Luz para las naciones']
          ],
          nota: 'Los nombres vienen de la primera palabra de cada cántico en la traducción latina.'
        }),
        img('lc-pastores.webp', 'De noche, en un campo de pastoreo de las colinas de Belén, unos pastores con mantos de lana se cubren los ojos ante una luz intensa que baja del cielo sobre su rebaño', 'El cántico de los ángeles (Lc 2:13-14).')
      ],
      texto: [
        'Los dos primeros capítulos de Lucas están llenos de música. Cuatro cánticos celebran la venida del Salvador. La iglesia los ha cantado en sus cultos desde los primeros siglos, y han inspirado una gran cantidad de música cristiana.',
        { h: 'Cantos al estilo del Antiguo Testamento' },
        'Estos cánticos se parecen mucho a los salmos y a otros cantos del Antiguo Testamento. Están llenos de frases de la Escritura. El Magníficat recuerda al cántico de Ana, la madre de Samuel (1 S 2:1-10), y el Benedictus a las promesas a David y a Abraham. Los que cantan son judíos piadosos que conocían bien la Biblia; cuando el Espíritu los llenó, alabaron a Dios con las palabras de las Escrituras.',
        { h: 'Cantos del cumplimiento' },
        'En el Antiguo Testamento, los grandes actos de salvación terminaban en cántico. Después de cruzar el mar Rojo, Moisés y Miriam cantaron (Éx 15). Ahora Dios está haciendo algo mayor: visitar a su pueblo y enviar al Salvador. Los cánticos de Lucas celebran que las promesas antiguas se están cumpliendo.',
        { h: 'Cantos del Espíritu' },
        'Lucas dice que Elisabet fue «llena del Espíritu Santo» al bendecir a María (Lc 1:41), que Zacarías «fue lleno del Espíritu Santo, y profetizó» (Lc 1:67), y que el Espíritu estaba sobre Simeón (Lc 2:25). Estos cánticos son alabanza inspirada, profecía hecha canto. Pablo enseñaría después a la iglesia a hablar «entre vosotros con salmos, con himnos y cánticos espirituales, cantando y alabando al Señor en vuestros corazones» (Ef 5:19), como fruto de ser llenos del Espíritu.',
        { h: 'Cantos de humildes' },
        'Ninguno de los que cantan es poderoso: una joven de Nazaret, un sacerdote anciano, unos ángeles ante unos pastores, y un anciano en el templo. Dios pone su alabanza en la boca de los humildes. Esta ruta recorre cada cántico.',
        ir('Volver al comentario de Lucas 1', '#comentario/1')
      ],
      pensar: 'Los primeros que recibieron la noticia del Salvador respondieron cantando. ¿Ocupa la alabanza un lugar central en tu respuesta a lo que Dios ha hecho por ti?'
    },
    {
      id: 'k-magnificat', n: 'El Magníficat: el cántico de María', ref: 'Lucas 1:46-55; 1 Samuel 2:1-10; Génesis 17:7; 22:17-18', fecha: -6,
      visual: [
        cita('Lucas 1:46-55', 'Entonces María dijo: Engrandece mi alma al Señor; Y mi espíritu se regocija en Dios mi Salvador. Porque ha mirado la bajeza de su sierva; Pues he aquí, desde ahora me dirán bienaventurada todas las generaciones. Porque me ha hecho grandes cosas el Poderoso; Santo es su nombre, Y su misericordia es de generación en generación A los que le temen. Hizo proezas con su brazo; Esparció a los soberbios en el pensamiento de sus corazones. Quitó de los tronos a los poderosos, Y exaltó a los humildes. A los hambrientos colmó de bienes, Y a los ricos envió vacíos. Socorrió a Israel su siervo, Acordándose de la misericordia De la cual habló a nuestros padres, Para con Abraham y su descendencia para siempre.'),
        tabla({
          titulo: 'Ecos del cántico de Ana',
          cab: ['Ana (1 Samuel 2)', 'María (Lucas 1)'],
          filas: [
            ['«Mi corazón se regocija en Jehová» (2:1)', '«Mi espíritu se regocija en Dios mi Salvador» (1:47)'],
            ['«No hay santo como Jehová» (2:2)', '«Santo es su nombre» (1:49)'],
            ['«Los que estaban saciados se alquilaron por pan» (2:5)', '«A los hambrientos colmó de bienes, y a los ricos envió vacíos» (1:53)'],
            ['«Abate, y enaltece» (2:7)', '«Quitó de los tronos a los poderosos, y exaltó a los humildes» (1:52)']
          ]
        })
      ],
      texto: [
        'María cantó en casa de Elisabet, después de oír que era bienaventurada porque creyó. Su cántico tiene dos partes: lo que Dios hizo con ella y lo que Dios hace con su pueblo.',
        { h: 'Lo que Dios hizo conmigo' },
        '«Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador» (Lc 1:46-47). «Engrandecer» es hacer grande: María quiere que todos vean lo grande que es Dios. Lo llama «mi Salvador»: se sabe una pecadora que necesita salvación. Y dice por qué alaba: Dios «ha mirado la bajeza de su sierva» (Lc 1:48). No la eligió por sus méritos, sino por su gracia.',
        'Por eso «todas las generaciones» la llamarán bienaventurada. No porque ella sea objeto de adoración, sino porque «me ha hecho grandes cosas el Poderoso; santo es su nombre» (Lc 1:49). Toda la gloria es para Dios.',
        { h: 'Lo que Dios hace con su pueblo' },
        'La segunda parte se amplía. La misericordia de Dios es «de generación en generación a los que le temen» (Lc 1:50). Dios esparce a los soberbios, quita de los tronos a los poderosos y exalta a los humildes; llena a los hambrientos y despide vacíos a los ricos. María canta los verbos en pasado, como si ya hubiera ocurrido. Con la concepción de Jesús, Dios ya puso en marcha la gran inversión del reino que Jesús anunciará en todo el evangelio.',
        { h: 'Fiel a sus promesas' },
        'El cántico termina con el pacto: Dios socorrió a Israel su siervo, acordándose de su misericordia, «de la cual habló a nuestros padres, para con Abraham y su descendencia para siempre» (Lc 1:54-55). Lo que nació en Nazaret era el cumplimiento de la promesa hecha dos mil años antes.',
        { h: 'Una joven que conocía la Biblia' },
        'El cántico está tejido con frases del Antiguo Testamento, como muestra la tabla con el cántico de Ana. María conocía las Escrituras, y el Espíritu las puso en su boca como alabanza. Su ejemplo enseña que la Palabra guardada en el corazón se vuelve canto.',
        ir('Volver al comentario de Lucas 1:26-56', '#comentario/2'),
        ir('Ver «La promesa a Abraham» en Pactos y dispensaciones', R.pactos + '#pactos/3')
      ],
      pensar: 'María se maravilló de que Dios mirara a alguien tan pequeño como ella. ¿Qué «grandes cosas» ha hecho Dios contigo por las que puedes engrandecerlo hoy?'
    },
    {
      id: 'k-benedictus', n: 'El Benedictus: el cántico de Zacarías', ref: 'Lucas 1:67-79; 2 Samuel 7:12-16; Génesis 22:16-18; Isaías 9:2; Malaquías 4:2', fecha: -6,
      visual: [
        cita('Lucas 1:76-79', 'Y tú, niño, profeta del Altísimo serás llamado; Porque irás delante de la presencia del Señor, para preparar sus caminos; Para dar conocimiento de salvación a su pueblo, Para perdón de sus pecados, Por la entrañable misericordia de nuestro Dios, Con que nos visitó desde lo alto la aurora, Para dar luz a los que habitan en tinieblas y en sombra de muerte; Para encaminar nuestros pies por camino de paz.'),
        tabla({
          titulo: 'Tres promesas cumplidas',
          cab: ['Promesa', 'En el Benedictus'],
          filas: [
            ['A David: un descendiente en su trono (2 S 7)', '«Nos levantó un poderoso Salvador en la casa de David» (1:69)'],
            ['A Abraham: bendición y victoria sobre los enemigos (Gn 22)', '«Del juramento que hizo a Abraham nuestro padre» (1:73)'],
            ['A los profetas: un mensajero y una luz', '«La aurora desde lo alto» (1:78; Is 9:2; Mal 4:2)']
          ]
        })
      ],
      texto: [
        'Zacarías había estado mudo nueve meses. Cuando escribió «Juan es su nombre», se le soltó la lengua, y sus primeras palabras fueron de alabanza. Lleno del Espíritu Santo, profetizó.',
        { h: 'Dios ha visitado a su pueblo' },
        '«Bendito el Señor Dios de Israel, que ha visitado y redimido a su pueblo» (Lc 1:68). La palabra «visitar» en la Biblia significa que Dios viene a intervenir en favor de su pueblo. Zacarías ve en el nacimiento de su hijo la señal de que Dios está por hacer algo mucho mayor: levantar «un poderoso Salvador en la casa de David» (Lc 1:69). Lo curioso es que Zacarías era de la tribu de Leví, no de la de David. No canta por su propio hijo, sino por el que vendría después de él, el hijo de María.',
        { h: 'El pacto de Abraham' },
        'Zacarías recuerda «su santo pacto; del juramento que hizo a Abraham nuestro padre» (Lc 1:72-73). Dios había jurado bendecir a Abraham y a su descendencia (Gn 22:16-18). Ahora cumple: libra a su pueblo de sus enemigos para que le sirvan sin temor, en santidad y en justicia delante de Él, todos sus días (Lc 1:74-75). La salvación tiene un propósito: una vida entregada a Dios.',
        { h: 'Tú, niño' },
        'En la segunda parte, Zacarías mira a su hijo recién nacido y profetiza su misión: «Y tú, niño, profeta del Altísimo serás llamado» (Lc 1:76). Juan prepararía el camino del Señor y daría «conocimiento de salvación a su pueblo, para perdón de sus pecados» (Lc 1:77). Los dos niños quedan en su lugar: Jesús es «Hijo del Altísimo» (Lc 1:32), Juan es «profeta del Altísimo».',
        { h: 'La aurora desde lo alto' },
        'El cántico termina con una imagen hermosa: por la entrañable misericordia de Dios, «nos visitó desde lo alto la aurora», para dar luz a los que habitan en tinieblas y en sombra de muerte, y encaminar nuestros pies por camino de paz (Lc 1:78-79). Isaías había anunciado que el pueblo que andaba en tinieblas vería gran luz (Is 9:2), y Malaquías, que nacería «el Sol de justicia» (Mal 4:2). Jesús es esa aurora.',
        ir('Volver al comentario de Lucas 1:57-80', '#comentario/3')
      ],
      pensar: 'Zacarías dice que Dios nos salva para que le sirvamos sin temor, en santidad y en justicia todos nuestros días. ¿Cómo se ve eso en tus días comunes?'
    },
    {
      id: 'k-gloria', n: 'Gloria in excelsis: el cántico de los ángeles', ref: 'Lucas 2:8-20; Isaías 9:6-7; Efesios 2:14-17', fecha: -5,
      visual: [
        img('lc-pastores.webp', 'De noche, en un campo de pastoreo de las colinas de Belén, unos pastores con mantos de lana se cubren los ojos ante una luz intensa que baja del cielo sobre su rebaño', 'Los pastores en el campo de Belén (Lc 2:8-9).'),
        cita('Lucas 2:13-14', 'Y repentinamente apareció con el ángel una multitud de las huestes celestiales, que alababan a Dios, y decían: ¡Gloria a Dios en las alturas, Y en la tierra paz, buena voluntad para con los hombres!'),
        tabla({
          titulo: 'Dos mensajes de paz',
          cab: ['La paz de Augusto', 'La paz de Cristo'],
          filas: [
            ['Impuesta por las legiones', 'Anunciada por los ángeles'],
            ['El emperador, llamado «salvador»', '«Os ha nacido… un Salvador»'],
            ['Sus «buenas nuevas»: su nacimiento y sus victorias', '«Nuevas de gran gozo»: un niño en un pesebre'],
            ['Paz entre naciones sometidas', 'Paz con Dios y entre los hombres (Ef 2:14-17)']
          ]
        })
      ],
      texto: [
        'Es el cántico más breve y quizás el más conocido. Lo cantaron los ángeles a unos pastores en los campos de Belén.',
        { h: 'Un anuncio a los humildes' },
        'Un ángel se presentó a los pastores, «y la gloria del Señor los rodeó de resplandor» (Lc 2:9). La gloria de Dios, que había llenado el tabernáculo y el templo, ahora brillaba en un campo de pastoreo. El ángel les anunció el nacimiento del Salvador y les dio una señal sencilla: un niño envuelto en pañales, acostado en un pesebre. «Y repentinamente apareció con el ángel una multitud de las huestes celestiales, que alababan a Dios» (Lc 2:13).',
        { h: 'Gloria a Dios' },
        '«¡Gloria a Dios en las alturas!» El nacimiento de Jesús es, antes que nada, una obra que muestra la gloria de Dios. En el cielo los ángeles lo entienden y adoran; en la tierra, unos pastores son los primeros en unirse.',
        { h: 'Paz en la tierra' },
        '«Y en la tierra paz, buena voluntad para con los hombres» (Lc 2:14). En ese tiempo, el emperador Augusto era celebrado como el que había traído la paz al mundo. Pero esa paz se sostenía con las legiones. La paz que anuncian los ángeles es otra: la reconciliación con Dios que trae el Príncipe de paz (Is 9:6), y que después hace posible la paz entre los hombres. Pablo dice que Cristo «es nuestra paz» y que vino a anunciar «las buenas nuevas de paz» a los de lejos y a los de cerca (Ef 2:14, 17).',
        'La frase final se entiende como la buena voluntad de Dios hacia los hombres: la paz viene porque Dios los mira con favor, no porque ellos lo merezcan.',
        { h: 'Los pastores responden' },
        'Cuando los ángeles se fueron, los pastores no se quedaron discutiendo: «Pasemos, pues, hasta Belén, y veamos esto que ha sucedido» (Lc 2:15). Fueron aprisa, encontraron al niño y contaron lo que les habían dicho. Volvieron «glorificando y alabando a Dios» (Lc 2:20). El cántico de los ángeles se convirtió en el cántico de los pastores.',
        ir('Volver al comentario de Lucas 2:1-20', '#comentario/4'),
        ir('Ver «Jesús nace bajo Augusto» en El imperio romano', R.romano + '#biblia/2')
      ],
      pensar: 'Los pastores fueron, vieron y contaron. ¿Has dejado que la noticia de Jesús te lleve a ir a verle y a contarla a otros?'
    },
    {
      id: 'k-nunc', n: 'Nunc dimittis: el cántico de Simeón', ref: 'Lucas 2:25-35; Isaías 40:1; 42:6; 49:6; 52:10', fecha: -5,
      visual: [
        img('../entre-los-testamentos/img/simeon-templo.webp', 'En un atrio del templo, un anciano de barba blanca sostiene en brazos a un recién nacido y levanta la mirada al cielo, junto a una joven madre', 'Simeón toma al niño en sus brazos (Lc 2:28).'),
        cita('Lucas 2:29-35', 'Ahora, Señor, despides a tu siervo en paz, Conforme a tu palabra; Porque han visto mis ojos tu salvación, La cual has preparado en presencia de todos los pueblos; Luz para revelación a los gentiles, Y gloria de tu pueblo Israel. Y José y su madre estaban maravillados de todo lo que se decía de él. Y los bendijo Simeón, y dijo a su madre María: He aquí, éste está puesto para caída y para levantamiento de muchos en Israel, y para señal que será contradicha (y una espada traspasará tu misma alma), para que sean revelados los pensamientos de muchos corazones.')
      ],
      texto: [
        'El último cántico de la Navidad lo canta un anciano en el templo, con el niño en sus brazos. Es una oración de despedida y de cumplimiento.',
        { h: 'Un hombre que esperaba' },
        'Simeón era «justo y piadoso», y esperaba «la consolación de Israel» (Lc 2:25), una expresión que viene de Isaías: «Consolaos, consolaos, pueblo mío» (Is 40:1). Era la esperanza en el Mesías. «El Espíritu Santo estaba sobre él», le había revelado que vería al Ungido antes de morir, y ese día lo movió a ir al templo (Lc 2:25-27). Tres veces se menciona al Espíritu en tres versículos.',
        { h: '«Ahora despides a tu siervo»' },
        'Simeón tomó al niño en brazos y bendijo a Dios: «Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación» (Lc 2:29-30). Habla como un siervo que ha terminado su guardia y puede retirarse. Dios cumplió su palabra; ya puede morir en paz. Lo que vio fue un niño de cuarenta días, pero con los ojos de la fe vio la salvación de Dios.',
        { h: 'Luz para los gentiles' },
        'El cántico dice que esa salvación fue preparada «en presencia de todos los pueblos; luz para revelación a los gentiles, y gloria de tu pueblo Israel» (Lc 2:31-32). Son ecos de Isaías, que anunció al Siervo de Jehová como «luz de las naciones» (Is 42:6; 49:6). En el corazón del templo de Jerusalén, un anciano judío anuncia que el Mesías es también para los gentiles. Es el tema de todo Lucas y Hechos.',
        { h: 'Una palabra para María' },
        'Después Simeón bendijo a José y a María, y habló a la madre de algo menos alegre. El niño sería «para caída y para levantamiento de muchos en Israel, y para señal que será contradicha», y «una espada traspasará tu misma alma» (Lc 2:34-35). Frente a Jesús, nadie queda neutral: unos caen y otros se levantan, y los pensamientos de muchos corazones quedan al descubierto. Y la madre sufriría al ver a su hijo rechazado y crucificado.',
        'Los cánticos de la Navidad terminan así, mirando ya hacia la cruz. La alegría del nacimiento y el dolor de la pasión van juntos en el plan de Dios.',
        ir('Volver al comentario de Lucas 2:21-52', '#comentario/5')
      ],
      pensar: 'Simeón pudo morir en paz porque había visto la salvación de Dios. ¿Tienes esa paz frente a la muerte? ¿Has visto en Jesús tu salvación?'
    }
  ];

  // ================== De Lucas a Hechos ==================
  L.puente = [
    {
      id: 'b-comenzo', n: 'Lo que Jesús comenzó', ref: 'Lucas 24:44-53; Hechos 1:1-3', fecha: 33,
      visual: [
        esq('lc-dos-tomos.svg', 'Dos columnas paralelas: Lucas va de Galilea a Jerusalén y termina con la ascensión; Hechos comienza con la ascensión y va de Jerusalén a Roma; en el centro, Jerusalén y la promesa del Espíritu', 'Lucas y Hechos: dos tomos que se encuentran en Jerusalén.'),
        cita('Hechos 1:1-3', 'En el primer tratado, oh Teófilo, hablé acerca de todas las cosas que Jesús comenzó a hacer y a enseñar, hasta el día en que fue recibido arriba, después de haber dado mandamientos por el Espíritu Santo a los apóstoles que había escogido; a quienes también, después de haber padecido, se presentó vivo con muchas pruebas indubitables, apareciéndoseles durante cuarenta días y hablándoles acerca del reino de Dios.')
      ],
      texto: [
        'Esta última ruta conecta el final de Lucas con el comienzo de Hechos. El autor los escribió como una sola obra, y los últimos versículos del evangelio y los primeros de Hechos se superponen.',
        { h: 'Un final que es un comienzo' },
        'El evangelio termina con la ascensión y con los discípulos volviendo a Jerusalén con gran gozo (Lc 24:50-53). Hechos comienza volviendo atrás: resume los cuarenta días en que Jesús se presentó vivo «con muchas pruebas indubitables», hablándoles del reino de Dios (Hch 1:3), y cuenta de nuevo la ascensión con más detalle (Hch 1:9-11). Lucas une los dos tomos con una costura visible.',
        { h: '«Comenzó a hacer y a enseñar»' },
        'Hechos describe el primer tomo como el relato de «todas las cosas que Jesús comenzó a hacer y a enseñar, hasta el día en que fue recibido arriba» (Hch 1:1-2). Si el evangelio cuenta lo que Jesús comenzó, Hechos cuenta lo que Jesús continuó haciendo y enseñando, ahora desde el cielo, por medio de su iglesia y por el Espíritu Santo.',
        'Por eso Hechos podría llamarse también «los hechos de Jesús por el Espíritu en sus apóstoles». El protagonista sigue siendo el mismo. Cuando Pedro sana al cojo, dice que lo hizo en el nombre de Jesús (Hch 3:6, 16). Cuando Saulo persigue a la iglesia, Jesús le pregunta: «¿por qué me persigues?» (Hch 9:4).',
        { h: 'Dos ascensiones, un mismo hecho' },
        'Algunos lectores notan que el evangelio parece situar la ascensión el mismo día de la resurrección, mientras Hechos habla de cuarenta días. En realidad, el evangelio resume sin indicar el tiempo transcurrido entre Lucas 24:43 y 24:44, y Hechos lo precisa. Es la manera en que los historiadores antiguos resumían en un tomo lo que desarrollaban en otro.',
        'Las estaciones siguientes recorren los tres hilos que pasan de un libro al otro: la promesa del Padre, los testigos a todas las naciones y la misma misión con el mismo Espíritu.',
        ir('Ver «Un segundo tomo» en Hechos', R.hechos + '#introduccion/2'),
        ir('Ver «La ascensión» en La persona y obra de Cristo', R.cristo + '#exaltado/5')
      ],
      pensar: 'Jesús sigue obrando hoy por medio de su iglesia. Si alguien escribiera los «hechos» de Jesús en tu iglesia en este año, ¿qué podría contar?'
    },
    {
      id: 'b-promesa', n: 'La promesa del Padre', ref: 'Lucas 3:16; 11:13; 24:49; Hechos 1:4-5, 8; 2:1-4, 16-18, 33, 38-39', fecha: 33,
      visual: [
        tabla({
          titulo: 'Una promesa en dos tomos',
          cab: ['Lucas', 'Hechos'],
          filas: [
            ['Juan: «él os bautizará en Espíritu Santo y fuego» (3:16)', 'Jesús: «vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días» (1:5)'],
            ['El Padre dará el Espíritu a los que se lo pidan (11:13)', 'Los discípulos perseveran unánimes en oración (1:14)'],
            ['«Yo enviaré la promesa de mi Padre» (24:49)', '«Que esperasen la promesa del Padre» (1:4)'],
            ['«Investidos de poder desde lo alto» (24:49)', '«Recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo» (1:8)'],
            ['«Quedaos vosotros en la ciudad de Jerusalén» (24:49)', '«Que no se fueran de Jerusalén» (1:4)'],
            ['', 'Pentecostés: «fueron todos llenos del Espíritu Santo» (2:4)']
          ]
        }),
        img('../hechos/img/hechos-ascension.webp', 'En la cumbre del monte de los Olivos, los discípulos miran hacia el cielo mientras una figura luminosa asciende entre las nubes', 'La ascensión (Hch 1:9).')
      ],
      texto: [
        'El hilo más importante entre Lucas y Hechos es la promesa del Espíritu Santo. Lucas la anuncia al comienzo del ministerio de Jesús, la repite al final y la cumple en Pentecostés.',
        { h: 'Anunciada' },
        'Juan el Bautista dijo que el que vendría después de él bautizaría «en Espíritu Santo y fuego» (Lc 3:16). Jesús enseñó que el Padre daría el Espíritu Santo a los que se lo pidieran (Lc 11:13). Y antes de ascender dijo: «He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49).',
        { h: 'Repetida' },
        'Hechos retoma la misma promesa con las mismas palabras. Jesús les mandó «que no se fueran de Jerusalén, sino que esperasen la promesa del Padre» y les dijo: «vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días» (Hch 1:4-5). La promesa del Padre, la investidura de poder y el bautismo en el Espíritu Santo son la misma experiencia.',
        { h: 'Cumplida' },
        'Diez días después de la ascensión, en el día de Pentecostés, mientras estaban todos unánimes juntos, vino un estruendo del cielo, aparecieron lenguas como de fuego, «y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). Pedro explicó que Jesús, exaltado a la diestra de Dios, «habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís» (Hch 2:33).',
        { h: 'Para todos' },
        'Pedro terminó su sermón diciendo que la promesa no era solo para los apóstoles: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). En Hechos, el Espíritu cae también sobre los samaritanos, sobre Cornelio y su casa, y sobre los discípulos de Éfeso. La promesa del Padre sigue vigente para cada creyente.',
        ir('Ver «La promesa del Espíritu» en Hechos', R.hechos + '#espiritu/1'),
        ir('Ver «La promesa y Pentecostés» en El movimiento pentecostal', R.pentecostal + '#raices/1')
      ],
      pensar: 'Jesús dijo que la promesa es «para todos los que están lejos». ¿Has recibido la promesa del Padre? ¿La estás buscando con la perseverancia de los discípulos en el aposento alto?'
    },
    {
      id: 'b-testigos', n: 'Testigos en todas las naciones', ref: 'Lucas 2:30-32; 24:46-48; Hechos 1:8; 13:47; 28:28', fecha: [33, 62],
      visual: [
        pasos([
          { t: '«Comenzando desde Jerusalén» (Lc 24:47; Hch 2)', fecha: 33, estado: { view: V.oriente, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'samaria', 'cesarea'] } },
          { t: 'En toda Judea y Samaria (Hch 8)', fecha: 35, estado: { view: V.oriente, capas: ['roma-14', 'iglesia-37'], lugares: ['jerusalen', 'samaria', 'cesarea', 'jope', 'damasco'] } },
          { t: '«Hasta lo último de la tierra»: Antioquía, Asia, Europa y Roma', fecha: 62, estado: { view: V.mediterraneo, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'efeso', 'filipos', 'corinto', 'roma'] } }
        ]),
        cita('Lucas 24:46-48', 'y les dijo: Así está escrito, y así fue necesario que el Cristo padeciese, y resucitase de los muertos al tercer día; y que se predicase en su nombre el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén. Y vosotros sois testigos de estas cosas.')
      ],
      texto: [
        'El segundo hilo es la misión. El evangelio termina con una comisión, y Hechos cuenta cómo se cumplió.',
        { h: 'La comisión en Lucas' },
        'Jesús resumió el mensaje de las Escrituras en tres partes: que el Cristo padeciera, que resucitara al tercer día, y que se predicara en su nombre «el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén». Y agregó: «Y vosotros sois testigos de estas cosas» (Lc 24:46-48).',
        { h: 'El plan de Hechos' },
        'Hechos repite la comisión y le da forma de mapa: «me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Ese versículo es el índice del libro. Los capítulos 1 a 7 transcurren en Jerusalén; los capítulos 8 a 12, en Judea y Samaria, con la conversión de Saulo y de Cornelio; y del 13 al 28, el evangelio llega a Asia Menor, Grecia y Roma.',
        { h: 'Lo que Simeón anunció' },
        'El tema estaba presente desde el comienzo del evangelio. Simeón había dicho que el niño sería «luz para revelación a los gentiles» (Lc 2:32). Pablo y Bernabé, en Antioquía de Pisidia, citaron las mismas palabras de Isaías para explicar por qué iban a los gentiles: «Te he puesto para luz de los gentiles, a fin de que seas para salvación hasta lo último de la tierra» (Hch 13:47). Y al final de Hechos, en Roma, Pablo declara: «a los gentiles es enviada esta salvación de Dios; y ellos oirán» (Hch 28:28).',
        { h: 'Testigos' },
        'En los dos tomos, la palabra clave es «testigos». Un testigo cuenta lo que vio y oyó. Los apóstoles habían estado con Jesús desde el bautismo hasta la ascensión (Hch 1:21-22), y su testimonio de la resurrección es el fundamento de la fe. Pero en Hechos también son testigos Esteban, Felipe y muchos creyentes anónimos que, esparcidos por la persecución, «iban por todas partes anunciando el evangelio» (Hch 8:4).',
        ir('Ver «El bosquejo de Hechos 1:8» en Hechos', R.hechos + '#panorama/2'),
        ir('Ver «Un mapa trazado por Jesús» en Hechos', R.hechos + '#expansion/1')
      ],
      pensar: 'Los primeros testigos comenzaron en su propia ciudad. ¿Quién es tu «Jerusalén»: las personas de tu casa, tu trabajo o tu barrio a quienes Dios te envía primero?'
    },
    {
      id: 'b-mision', n: 'El mismo Espíritu, la misma misión', ref: 'Lucas 4:18; 5:17-26; 7:11-17; 23:34, 46; Hechos 3:1-10; 7:59-60; 9:36-41; 10:38', fecha: [29, 62],
      visual: [
        tabla({
          titulo: 'Los discípulos hacen lo que hizo su Señor',
          cab: ['Jesús en Lucas', 'Los discípulos en Hechos'],
          filas: [
            ['Ungido por el Espíritu para predicar (4:18)', 'Llenos del Espíritu, predican con denuedo (Hch 4:31)'],
            ['Sana a un paralítico (5:17-26)', 'Pedro sana a un cojo (Hch 3:1-10) y a Eneas (Hch 9:33-35)'],
            ['Resucita al hijo de la viuda y a la hija de Jairo (7:11-17; 8:49-56)', 'Pedro resucita a Dorcas (Hch 9:36-41)'],
            ['Expulsa demonios (4:33-36; 8:26-39)', 'Pablo libera a la muchacha de Filipos (Hch 16:16-18)'],
            ['Juzgado ante el Sanedrín, Herodes y Pilato', 'Pablo, ante el Sanedrín, Félix, Festo y Agripa'],
            ['Perdona a sus verdugos (23:34)', 'Esteban perdona a los suyos (Hch 7:60)']
          ]
        }),
        img('../hechos/img/hechos-cojo-hermosa.webp', 'A la entrada del templo, Pedro toma de la mano a un hombre cojo sentado en el suelo y lo levanta, mientras Juan observa', 'Pedro sana al cojo en la puerta la Hermosa (Hch 3:7).')
      ],
      texto: [
        'El tercer hilo es la continuidad entre Jesús y su iglesia. Lucas organiza sus dos tomos con paralelos para que el lector vea que los discípulos continúan la misión de su Maestro con el mismo Espíritu.',
        { h: 'Lo que hizo Jesús, lo hacen ellos' },
        'La tabla muestra algunos de esos paralelos. Jesús fue ungido por el Espíritu y anduvo «haciendo bienes y sanando a todos los oprimidos por el diablo» (Hch 10:38). En Hechos, los discípulos llenos del mismo Espíritu predican, sanan, liberan y resucitan muertos. Jesús había dicho: «el que en mí cree, las obras que yo hago, él las hará también» (Jn 14:12).',
        'Los milagros no son un fin en sí mismos. En Lucas y en Hechos, las señales confirman la palabra y abren la puerta al evangelio. Cuando el cojo fue sanado, Pedro predicó a Cristo resucitado, y cinco mil creyeron (Hch 3:12-26; 4:4).',
        { h: 'Lo que sufrió Jesús, lo sufren ellos' },
        'Los paralelos incluyen también el sufrimiento. Jesús fue llevado ante el Sanedrín, ante Herodes y ante el gobernador romano; Pablo comparece ante el mismo Sanedrín, ante gobernadores romanos y ante el rey Agripa. Jesús anunció que sus discípulos serían llevados «ante reyes y ante gobernadores por causa de mi nombre» (Lc 21:12), y así fue. Esteban murió orando como su Señor.',
        { h: 'Una misión que sigue' },
        'Hechos no tiene un final cerrado: Pablo predica en Roma «abiertamente y sin impedimento» (Hch 28:31), y el relato se detiene. La historia continúa. Cada generación de creyentes es llamada a escribir su capítulo, con la misma promesa del Padre y la misma comisión.',
        'Aquí termina este estudio de Lucas. El estudio de Hechos sigue la historia desde el otro lado.',
        ir('Abrir el estudio de Hechos de los Apóstoles', R.hechos),
        ir('Ver «Para qué son las señales» en Hechos', R.hechos + '#senales/6')
      ],
      pensar: 'Jesús dijo que sus discípulos harían sus obras por el mismo Espíritu. ¿Qué parte de la misión de Jesús te está llamando el Espíritu a continuar en tu vida?'
    }
  ];

  // ================== Datos de la app ==================
  delete window.__LC;
  const LINEA = { desde: -8, hasta: 65, hitos: [
    { a: -5, t: 'Nace Jesús' }, { a: 8, t: 'Jesús a los doce' }, { a: 29, t: 'Bautismo' },
    { a: 33, t: 'Cruz y Pentecostés' }, { a: [57, 59], t: 'Lucas en Judea' }, { a: [60, 61], t: 'Lucas escribe' }
  ] };
  const LINEA_MIN = { desde: 26, hasta: 36, hitos: [
    { a: 26, t: 'Pilato' }, { a: [28, 29], t: 'Año 15 de Tiberio' }, { a: 29, t: 'Bautismo' },
    { a: 30, t: 'Pascua' }, { a: 32, t: 'Hacia Jerusalén' }, { a: 33, t: 'La cruz' }
  ] };
  const LINEA_VIDA = { desde: -8, hasta: 35, hitos: [
    { a: -5, t: 'Nace Jesús' }, { a: 8, t: 'Jesús a los doce' },
    { a: 29, t: 'Bautismo' }, { a: 33, t: 'Cruz y Pentecostés' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Lucas',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio (como La tierra de Israel)
      minZoom: 3.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.MUNDO_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'introduccion', grupo: 'Estudio del libro', n: 'I. Introducción y trasfondo', info: 'Lucas el médico, Teófilo, los testigos, la fecha, el mundo de Lucas 3:1 y el censo', estaciones: L.introduccion, linea: LINEA },
      { id: 'panorama', grupo: 'Estudio del libro', n: 'II. Visión panorámica', info: 'Estructura, bosquejo, palabras clave, Lucas 19:10 y los grandes temas', estaciones: L.panorama, linea: LINEA },
      { id: 'comentario', grupo: 'Estudio del libro', n: 'III. Comentario', info: 'Los 24 capítulos de Lucas en 32 estaciones', estaciones: L.comentario, linea: LINEA_VIDA },
      { id: 'teologia', grupo: 'Estudio del libro', n: 'IV. Teología de Lucas', info: 'Cristo, el Espíritu, la salvación, el reino, los últimos tiempos, la oración, los pobres y el discipulado', estaciones: L.teologia, linea: LINEA },
      { id: 'mapas', grupo: 'Mapas', n: 'Lucas en el mapa', info: 'El imperio, Nazaret y Belén, Galilea, el gran viaje, Jericó y Emaús', estaciones: L.mapas, linea: LINEA },
      { id: 'parabolas', grupo: 'Temas', n: 'Las parábolas de Lucas', info: 'El buen samaritano, el rico insensato, la gran cena, el hijo pródigo, el rico y Lázaro, el fariseo y el publicano', estaciones: L.parabolas, linea: LINEA_MIN },
      { id: 'mujeres', grupo: 'Temas', n: 'Las mujeres en Lucas', info: 'María, Elisabet y Ana, las mujeres de Galilea, Marta y María, las viudas y las testigos', estaciones: L.mujeres, linea: LINEA },
      { id: 'oracion', grupo: 'Temas', n: 'Jesús que ora', info: 'Del bautismo a la cruz: Jesús ora y enseña a orar', estaciones: L.oracion, linea: LINEA_MIN },
      { id: 'canticos', grupo: 'Temas', n: 'Los cánticos de la Navidad', info: 'Magníficat, Benedictus, Gloria y Nunc dimittis', estaciones: L.canticos, linea: LINEA },
      { id: 'puente', grupo: 'Temas', n: 'De Lucas a Hechos', info: 'Lo que Jesús comenzó, la promesa del Padre, los testigos y la misma misión', estaciones: L.puente, linea: LINEA }
    ]
  };
})();
