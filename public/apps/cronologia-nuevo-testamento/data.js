/* ==========================================================
   Recursos Bíblicos — Cronología del Nuevo Testamento · contenido de las rutas
   FUENTE de public/apps/cronologia-nuevo-testamento/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/cronologia_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica, sin nombrarla.
   CRONOLOGÍA DEL SITIO (v2.44): nacimiento de Jesús hacia el 6–5 a.C.; muerte de Herodes en el 4 a.C.;
   año quince de Tiberio = 28/29; bautismo en el 29; cuatro Pascuas (30, 31, 32 y 33); crucifixión el viernes
   3 de abril del 33 (14 de nisán); resurrección el 5 de abril; Pentecostés el 24 de mayo del 33. Las otras
   posturas (año 30, miércoles o jueves, 1 a.C.) van en bloques `posturas`. Fechas de Pablo como en
   Los viajes de Pablo y Hechos: conversión hacia el 34–35, concilio en el 49, Galión 51–52, Festo 59.
   Flavio Josefo, Tácito, Suetonio, Dion Casio, Orosio, Ireneo, Eusebio y Hegesipo se usan como fuentes
   históricas, parafraseados, sin comillas ni burbuja.
   La línea de tiempo completa (página auxiliar) vive en linea/ y lee linea/hechos.js.
   ========================================================== */
(() => {
  const V = {
    palestina: [[30.9, 34.2], [33.45, 36.5]],
    galilea: [[32.45, 34.95], [33.35, 35.95]],
    judea: [[31.2, 34.55], [32.25, 35.65]],
    sur: [[29.0, 30.5], [33.6, 36.4]],
    levante: [[29.5, 32.5], [37.6, 38.6]],
    egipto: [[28.6, 29.0], [33.6, 36.4]],
    asia: [[35.2, 21.5], [41.6, 37.5]],
    egeo: [[35.6, 19.0], [42.2, 30.5]],
    mediterraneo: [[29.0, 8.0], [46.5, 38.5]],
    oriente: [[28.5, 26.0], [43.0, 38.5]]
  };
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/cronologia_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(["cr-anclas.svg", "cr-anio-cruz.svg", "cr-calendario.svg", "cr-dia-cruz.svg", "cr-dionisio.webp", "cr-huida-pela.webp", "cr-incendio-roma.webp", "cr-jacobo-justo.webp", "cr-jesus-doce.webp", "cr-juan-efeso.webp", "cr-libros.svg", "cr-nacimiento.svg", "cr-pablo-cartas.svg", "cr-pablo-galatas.svg", "cr-panorama.svg", "cr-pascua-corderos.webp", "cr-pascuas.svg", "cr-setenta-semanas.svg", "cr-tiberio.svg", "cr-zacarias-incienso.webp", "foto-delfos-galion.jpg"]);
  // Imágenes de otros recursos (../otro/img/…) que ya existen; una que todavía no se ha generado queda sin src.
  const EXT = new Set(["../apocalipsis/img/apo-lectura-iglesia.webp", "../de-la-biblia-a-nosotros/img/papiro-p52.webp", "../dinastia-herodes/img/hd-agripa-cesarea.webp", "../dinastia-herodes/img/hd-magos-herodes.webp", "../hechos/img/hechos-agabo.webp", "../hechos/img/hechos-ascension.webp", "../hechos/img/hechos-concilio.webp", "../hechos/img/hechos-esteban.webp", "../hechos/img/hechos-listra.webp", "../hechos/img/hechos-lucas-escribe.webp", "../hechos/img/hechos-pablo-galion.webp", "../hechos/img/hechos-pedro-carcel.webp", "../imperio-romano/img/roma-censo-belen.webp", "../imperio-romano/img/roma-juan-patmos.webp", "../imperio-romano/img/roma-pablo-festo.webp", "../imperio-romano/img/roma-templo-herodes.webp", "../imperio-romano/img/roma-triunfo-tito.webp", "../medidas-biblicas/img/esquema-calendario.svg", "../medidas-biblicas/img/esquema-pentecostes.svg", "../medidas-biblicas/img/esquema-tres-dias.svg", "../mundo-judio/img/esquema-semana.svg", "../mundo-judio/img/foto-piedra-pilato.jpg", "../persona-y-obra-de-cristo/img/belen-nacimiento.webp", "../persona-y-obra-de-cristo/img/tentacion-desierto.webp", "../viajes-pablo/img/vp-canasta.webp", "../viajes-pablo/img/vp-efeso.webp", "../viajes-pablo/img/vp-segunda-prision.webp", "../viajes-pablo/img/vp-tiendas.webp"]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (f.startsWith('../') ? (EXT.has(f) ? { src: EMB[f] || f } : {}) : HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  // La línea de tiempo completa: linea/#hecho abre ese hecho
  const linea = (t, hecho) => ir(t, 'linea/' + (hecho ? '#' + hecho : ''));
  const R = {
    herodes: '../../dinastia-herodes/', romano: '../../imperio-romano/', mundo: '../../mundo-judio/', armonia: '../../evangelios/',
    hechos: '../../hechos/', pablo: '../../viajes-pablo/', medidas: '../../medidas-biblicas/', daniel: '../../daniel/',
    escatologia: '../../escatologia/', apocalipsis: '../../apocalipsis/', templo: '../../templo-herodes/', entre: '../../entre-los-testamentos/',
    cristo: '../../persona-y-obra-de-cristo/', manuscritos: '../../de-la-biblia-a-nosotros/', palabra: '../../palabra-de-dios/',
    interpretar: '../../interpretar-biblia/'
  };
  window.__CR = { V, mapa, pasos, img, esq, foto, cita, tabla, ir, linea, R };

  // ================== RUTA I. Cómo se fecha el Nuevo Testamento ==================
  const fechar = [
    {
      id: 'sin-calendario', n: 'Fechas en un libro sin calendario', ref: 'Lucas 1:1-4; Lucas 3:1-2; Hechos 26:26', fecha: [-6, 100],
      visual: [
        cita('Lucas 3:1-2', 'En el año decimoquinto del imperio de Tiberio César, siendo gobernador de Judea Poncio Pilato, y Herodes tetrarca de Galilea, y su hermano Felipe tetrarca de Iturea y de la provincia de Traconite, y Lisanias tetrarca de Abilinia, y siendo sumos sacerdotes Anás y Caifás, vino palabra de Dios a Juan, hijo de Zacarías, en el desierto.'),
        tabla({
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Qué estudia'],
          filas: [
            ['I. Cómo se fecha', 'El calendario, cómo se contaba el tiempo y las fechas que sirven de ancla'],
            ['II. Nacimiento e infancia', 'De Zacarías en el templo a Jesús a los doce años'],
            ['III. El ministerio', 'El año quince de Tiberio, las Pascuas de Juan y el orden del ministerio'],
            ['IV. La última semana', 'El día y el año de la cruz, Daniel 9 y Pentecostés'],
            ['V. La iglesia de Jerusalén', 'De Esteban a la ofrenda de Antioquía'],
            ['VI. Pablo y sus cartas', 'Del primer viaje a los dos años en Roma'],
            ['VII. Los últimos años', 'De la muerte de Jacobo a Juan en Patmos'],
            ['VIII. Los libros', 'Cuándo se escribió cada uno de los 27 libros']
          ]
        })
      ],
      texto: [
        'El Nuevo Testamento no trae fechas como las nuestras. Ningún evangelio dice que Jesús nació «en el año 5 antes de Cristo» ni que murió «en el 33». Esa forma de contar los años se inventó quinientos años después. Los escritores bíblicos ubicaban los hechos de otra manera: por los gobernantes de turno, por las fiestas del calendario judío y por el tiempo que pasaba entre un hecho y otro.',
        'Lucas es el mejor ejemplo. Antes de contar la predicación de Juan el Bautista, la sitúa con seis datos a la vez: el año quince del emperador Tiberio, el gobierno de Poncio Pilato en Judea, los de Herodes Antipas, Felipe y Lisanias como tetrarcas, y el sumo sacerdocio de Anás y Caifás (Lc 3:1-2). Para un lector del siglo I, eso equivalía a una fecha exacta. Lucas dice que escribió después de haber investigado con diligencia todas las cosas desde su origen, para que Teófilo conociera bien la verdad (Lc 1:3-4).',
        { h: 'Una fe con fecha' },
        'Que la Biblia se preocupe por estos datos no es un detalle menor. El evangelio no es un mito que ocurrió «en un tiempo lejano», sino el anuncio de lo que Dios hizo en la historia, en lugares que se pueden visitar y bajo gobernantes que se pueden fechar. Pablo le dijo al rey Agripa que estas cosas no se habían hecho «en algún rincón» (Hch 26:26), y al escribir a los corintios recordó que la mayoría de los testigos de la resurrección todavía vivían (1 Co 15:6).',
        { h: 'Qué puede hacer una cronología' },
        'Armar una cronología es como resolver un rompecabezas: se juntan los datos de la Biblia, los de los historiadores antiguos, las inscripciones, las monedas y la astronomía, y se busca la secuencia que mejor los explica a todos. Algunas fechas son muy firmes; otras se discuten en uno, dos o tres años. Este recurso indica siempre cuál es cuál, y cuando hay posturas distintas, las muestra con lo que defiende cada una.',
        'El sitio sigue una cronología que hoy comparten muchos estudiosos que confían en el texto bíblico: Jesús nació hacia el año 5 antes de Cristo, comenzó su ministerio en el 29 y murió en la Pascua del año 33. La línea de tiempo al pie de cada estación marca el momento del que se habla, y la página de la línea de tiempo completa reúne todos los hechos para consultarlos de un vistazo.',
        linea('Abrir la línea de tiempo completa del Nuevo Testamento')
      ],
      pensar: 'Dios entró en la historia en un año, en un lugar y bajo gobernantes con nombre. ¿Qué cambia en tu fe saber que el evangelio no es una idea, sino algo que realmente ocurrió?'
    },
    {
      id: 'dionisio', n: 'Dionisio el Exiguo y el año 1', ref: 'Gálatas 4:4; Daniel 2:21', fecha: [-6, 1],
      visual: [
        img('cr-dionisio.webp', 'Un monje de mediana edad, con hábito sencillo de lana, escribe columnas de números a la luz de una ventana en una biblioteca romana del siglo VI, rodeado de rollos y códices', 'Dionisio el Exiguo, en Roma, calcula las fechas de la Pascua (hacia el año 525).'),
        esq('cr-calendario.svg', 'Esquema con dos escalas de años: la romana, contada desde la fundación de Roma, y la cristiana, con el año 754 de Roma igual al año 1 d.C.; se marca que no existe el año cero y que Herodes murió en el 750 de Roma, es decir, en el 4 a.C.', 'Cómo pasaron los años de Roma a ser años del Señor, y por qué Jesús nació «antes de Cristo».', 'El calendario')
      ],
      texto: [
        'En el siglo I nadie contaba los años «después de Cristo». Los romanos fechaban por los cónsules de cada año o por los años desde la fundación de Roma (en latín, ab urbe condita). En las provincias se usaban también los años del emperador o del rey local. Los judíos contaban por los años del gobernante o por eras propias.',
        { h: 'Un monje y la fecha de la Pascua' },
        'El sistema que usamos nació hacia el año 525, en Roma. Un monje llamado Dionisio, que se llamaba a sí mismo «el Exiguo» (es decir, el pequeño) por humildad, preparó unas tablas para calcular en qué domingo debía celebrarse la Pascua de resurrección en los años siguientes. Las tablas que se usaban hasta entonces contaban los años desde el emperador Diocleciano, que había perseguido con crueldad a la iglesia. Dionisio no quiso honrar a un perseguidor y propuso contar los años «desde la encarnación de nuestro Señor Jesucristo».',
        'Para eso calculó en qué año había nacido Jesús, y lo fijó a fines del año 753 de Roma. El año siguiente, el 754, pasó a ser el año 1 del Señor (anno Domini). Siglos después, el monje inglés Beda el Venerable popularizó el sistema en sus libros de historia, y así se extendió por Europa. La cuenta de los años «antes de Cristo» se generalizó todavía más tarde.',
        { h: 'Un error de algunos años' },
        'Dionisio no tenía las herramientas que hoy tenemos y se equivocó por unos pocos años. Mateo dice que Jesús nació «en días del rey Herodes» (Mt 2:1), y Herodes, según el historiador Josefo y la astronomía, murió en la primavera del año 750 de Roma, que corresponde al 4 a.C. Por eso Jesús nació, paradójicamente, unos años «antes de Cristo»: probablemente hacia el 6 o el 5 a.C. El error no está en la Biblia, sino en el cálculo de un monje del siglo VI.',
        'Hay otro detalle que conviene recordar: no existe el año cero. Del año 1 a.C. se pasa directamente al año 1 d.C. Por eso, para calcular cuántos años hay entre una fecha antes de Cristo y una después, hay que restar uno. De la primavera del 4 a.C. a la primavera del 29 d.C. no hay 33 años, sino 32.',
        'Lo que importa no es el número que le pusieron al año, sino lo que ocurrió en él: «cuando vino el cumplimiento del tiempo, Dios envió a su Hijo» (Gá 4:4). Hoy media humanidad cuenta los años a partir del nacimiento de Jesús, muchas veces sin saberlo.'
      ],
      pensar: 'Cada vez que escribes la fecha de hoy, cuentas los años desde la venida de Jesús. ¿Ocupa él también el centro de tu propio calendario?'
    },
    {
      id: 'contar', n: 'Cómo se contaba el tiempo', ref: 'Génesis 1:5; Mateo 17:1; Lucas 9:28; 1 Reyes 15:9; Lucas 2:41', fecha: [-6, 100],
      visual: [
        esq('../medidas-biblicas/img/esquema-calendario.svg', 'Esquema circular del año judío con los doce meses, las fiestas y las estaciones de lluvia y cosecha', 'El año judío: meses lunares que empiezan en primavera con nisán, el mes de la Pascua.', 'El calendario judío'),
        tabla({
          titulo: 'Tres maneras de contar que no son las nuestras',
          cab: ['Cómo se contaba', 'Qué significa', 'Ejemplo bíblico'],
          filas: [
            ['El día empieza al atardecer', 'El día de reposo iba de la puesta del sol del viernes a la del sábado', 'Gn 1:5; Mr 15:42; Lc 23:54'],
            ['Cuenta inclusiva', 'Se cuentan el primer y el último día, aunque sean partes de día', '«Seis días después» (Mt 17:1) y «como ocho días después» (Lc 9:28) para el mismo hecho'],
            ['Años de reinado', 'Un año incompleto del rey podía contar como año entero', 'Los años de los reyes en 1 y 2 Reyes; «el año decimoquinto» de Tiberio (Lc 3:1)'],
            ['Meses lunares', 'Cada mes empieza con la luna nueva; la Pascua es el 14 de nisán, con luna llena', 'Éx 12:2-6; Lc 2:41']
          ],
          nota: 'El calendario judío se ajustaba al sol agregando un mes cada dos o tres años, para que la Pascua cayera siempre en primavera.'
        })
      ],
      texto: [
        'Para leer bien las fechas de la Biblia hay que saber cómo se contaba el tiempo en ella. Muchas aparentes contradicciones desaparecen cuando se entienden tres costumbres.',
        { h: 'El día empieza al atardecer' },
        'Desde Génesis, el día bíblico empieza con la tarde: «fue la tarde y la mañana un día» (Gn 1:5). Para los judíos del siglo I, el viernes terminaba con la puesta del sol, y en ese momento empezaba el día de reposo. Por eso los evangelios insisten en que Jesús fue sepultado de prisa, antes del atardecer del viernes (Mr 15:42; Lc 23:54). Y por eso la cena del jueves por la noche y la cruz del viernes por la tarde, para un judío, ocurrieron el mismo día.',
        { h: 'La cuenta inclusiva' },
        'En la Biblia, una parte del día se contaba como un día entero, y se incluían el primero y el último. Mateo dice que la transfiguración ocurrió «seis días después» (Mt 17:1), y Lucas, «como ocho días después» (Lc 9:28): Mateo cuenta solo los días intermedios, y Lucas incluye también el día de partida y el de llegada. No se contradicen; cuentan de distinta manera. Esta costumbre es clave para entender los «tres días» entre la cruz y la resurrección (estación IV.2).',
        { h: 'Los años de los gobernantes' },
        'Los años se contaban por los reinados. Pero había dos sistemas: en uno, el tiempo entre la subida al trono y el comienzo del año siguiente se contaba como «año uno»; en el otro, el año uno empezaba recién con el año nuevo. Además, no todos empezaban el año el mismo día: los romanos, en enero; los judíos, en primavera (nisán) para las fiestas y en otoño (tishri) para otros asuntos. Por eso un mismo dato, como «el año quince de Tiberio», puede corresponder a dos años nuestros (estación III.1).',
        { h: 'Un calendario que se ajustaba' },
        'El año judío era lunar: cada mes empezaba con la luna nueva, y la Pascua se celebraba el 14 de nisán, con luna llena. Como doce meses lunares suman unos once días menos que el año solar, cada dos o tres años se agregaba un mes. Gracias a ese dato, los astrónomos pueden calcular en qué día de la semana cayó la Pascua en cada año (estación IV.4).',
        ir('Ver en Pesos, medidas, monedas y horas: el tiempo en la Biblia', R.medidas + '#tiempo/1'),
        { ejercicio: {
          pregunta: 'Un hecho ocurre un viernes por la tarde y otro el domingo de madrugada. Con la cuenta inclusiva de la Biblia, ¿cuántos días hay entre uno y otro?',
          opciones: [
            { t: 'Uno: solo el sábado está completo.', ok: false, por_que: 'Esa es nuestra manera de contar los días completos; la Biblia también contaba las partes de día.' },
            { t: 'Tres: el viernes, el sábado y el domingo.', ok: true, por_que: 'Se cuentan el primer día, aunque sea solo su final, y el último, aunque sea solo su comienzo.' },
            { t: 'Dos: de viernes a domingo hay cuarenta y ocho horas.', ok: false, por_que: 'La cuenta bíblica no se hacía por horas, sino por días del calendario.' }
          ],
          explicacion: 'Así, los discípulos de Emaús pudieron decir el domingo que era «ya el tercer día» desde la crucifixión del viernes (Lc 24:21).'
        } }
      ],
      pensar: 'Dios llamó «día» a la tarde y la mañana, y comenzó el tiempo de su pueblo con el descanso y la noche. ¿Qué te enseña que el día bíblico empiece cuando nosotros terminamos de trabajar?'
    },
    {
      id: 'anclas', n: 'Las fechas que sirven de ancla', ref: 'Mateo 2:19; Lucas 3:1; Hechos 12:23; Hechos 18:12; Hechos 24:27', fecha: [-4, 70],
      visual: [
        esq('cr-anclas.svg', 'Escala de tiempo del 10 a.C. al 75 d.C. con las fechas firmes que dan otras fuentes: la muerte de Herodes, el comienzo del reinado de Tiberio, el gobierno de Pilato, la muerte de Agripa I, el edicto de Claudio, Galión en Corinto, la llegada de Festo, la muerte de Jacobo, el incendio de Roma y la caída del templo', 'Las anclas externas: fechas que la Biblia menciona y que otras fuentes permiten fijar.', 'Las anclas'),
        tabla({
          titulo: 'Las principales anclas',
          cab: ['Hecho bíblico', 'Fecha', 'Cómo se conoce'],
          filas: [
            ['Muerte de Herodes el Grande (Mt 2:19)', '4 a.C.', 'Josefo, con un eclipse de luna antes de la Pascua'],
            ['Año quince de Tiberio (Lc 3:1)', '28/29 d.C.', 'Historiadores romanos: Augusto murió en agosto del 14'],
            ['Pilato gobernador (Lc 3:1)', '26–36 d.C.', 'Josefo; la inscripción de Cesarea'],
            ['Caifás sumo sacerdote (Jn 18:13)', '18–36 d.C.', 'Josefo'],
            ['Muerte de Agripa I (Hch 12:23)', '44 d.C.', 'Josefo'],
            ['Claudio expulsa a los judíos de Roma (Hch 18:2)', '49 d.C.', 'Suetonio y Orosio'],
            ['Galión, procónsul de Acaya (Hch 18:12)', '51–52 d.C.', 'La inscripción de Delfos'],
            ['Festo sucede a Félix (Hch 24:27)', '59 d.C.', 'Josefo y las monedas de Judea'],
            ['Caída de Jerusalén (Lc 21:20)', '70 d.C.', 'Josefo, Tácito, el arco de Tito']
          ]
        }),
        foto('../mundo-judio/img/foto-piedra-pilato.jpg', 'Bloque de piedra caliza con una inscripción latina incompleta en la que se leen las letras del nombre de Poncio Pilato y su título de prefecto de Judea', 'Réplica de la inscripción de Pilato hallada en Cesarea (1961): una de las anclas del Nuevo Testamento.', 'CC BY-SA 2.0, vía Wikimedia Commons')
      ],
      texto: [
        'Si la Biblia no da años, ¿cómo sabemos cuándo pasaron las cosas? Porque el Nuevo Testamento menciona a muchas personas y hechos que aparecen también en otras fuentes: historiadores como el judío Flavio Josefo y los romanos Tácito, Suetonio y Dion Casio; inscripciones en piedra; monedas fechadas; y cálculos astronómicos. Cuando un dato bíblico coincide con un dato fechado de afuera, se convierte en un ancla, un punto fijo desde el cual se mide todo lo demás.',
        { h: 'Las anclas de los evangelios' },
        'La primera es la muerte de Herodes el Grande. Josefo cuenta que murió poco después de un eclipse de luna y antes de una Pascua, y la astronomía permite ubicar ese eclipse en marzo del 4 a.C. Como Jesús nació antes (Mt 2:19), su nacimiento queda en los años anteriores. La segunda es el año quince de Tiberio (Lc 3:1), que se calcula desde la muerte de Augusto en el año 14. La tercera son los gobernantes del juicio de Jesús: Pilato gobernó Judea entre el 26 y el 36, y Caifás fue sumo sacerdote entre el 18 y el 36. La cruz tiene que estar dentro de esos años.',
        { h: 'Las anclas de Hechos' },
        'Hechos tiene todavía más. Herodes Agripa I, el rey que mató a Jacobo, murió en el año 44 (Hch 12:23). El emperador Claudio expulsó a los judíos de Roma hacia el 49 (Hch 18:2). Galión fue procónsul en Corinto entre el 51 y el 52, según una inscripción encontrada en Delfos (Hch 18:12). Y Festo llegó como gobernador hacia el 59 (Hch 24:27). Con estas fechas y con los intervalos que da el propio Lucas («un año y seis meses», «dos años»), se reconstruye la vida de Pablo con un margen de uno o dos años.',
        { h: 'Lo que confirman' },
        'Ninguna de estas fuentes es Escritura, y algunas tienen sus propios errores. Pero todas muestran lo mismo: los escritores del Nuevo Testamento conocían bien su mundo. Lucas llama a cada autoridad con el título exacto que tenía en ese lugar y en ese momento, aunque los títulos cambiaban de una provincia a otra y de un año a otro. Un escritor que inventara su historia décadas después difícilmente lo habría logrado.',
        ir('Ver en Hechos: Galión, un ancla en la historia', R.hechos + '#introduccion/9')
      ],
      pensar: 'Personas que nunca creyeron en Jesús, como Josefo o Tácito, dejaron escritos que confirman los nombres y las fechas del Nuevo Testamento. ¿Por qué crees que Dios permitió que la historia del evangelio quedara tan bien anclada en la historia del mundo?'
    },
    {
      id: 'mirada', n: 'El Nuevo Testamento en una mirada', ref: 'Gálatas 4:4; Marcos 1:15; Hechos 1:8; Apocalipsis 1:9', fecha: [-6, 100],
      visual: [
        esq('cr-panorama.svg', 'Gran línea de tiempo del 10 a.C. al 100 d.C. con franjas para los emperadores, los gobernantes de Judea, la vida de Jesús, la iglesia, los viajes de Pablo y los libros del Nuevo Testamento', 'Unos cien años de historia: del nacimiento de Jesús a la muerte del último apóstol.', 'El panorama'),
        tabla({
          titulo: 'Seis períodos',
          cab: ['Período', 'Años', 'Dónde se lee'],
          filas: [
            ['Nacimiento e infancia de Jesús', 'c. 7 a.C.–8 d.C.', 'Mt 1–2; Lc 1–2'],
            ['Los años en Nazaret', 'c. 8–29', 'Lc 2:51-52'],
            ['El ministerio de Jesús', '29–33', 'Los cuatro evangelios'],
            ['La iglesia de Jerusalén y la expansión', '33–46', 'Hch 1–12'],
            ['Los viajes y las cartas de Pablo', '46–62', 'Hch 13–28; las cartas de Pablo'],
            ['Los últimos años de los apóstoles', '62–100', 'Las cartas pastorales, las generales, los escritos de Juan']
          ]
        })
      ],
      texto: [
        'Antes de entrar en los detalles, conviene ver el conjunto. Toda la historia del Nuevo Testamento ocurre en poco más de cien años: desde el anuncio del ángel a Zacarías, hacia el 7 a.C., hasta la muerte del apóstol Juan, hacia el año 100. En ese tiempo gobernaron Roma once emperadores, de Augusto a Trajano.',
        { h: 'Los años de Jesús' },
        'Jesús nació hacia el 6 o el 5 a.C., en los últimos años de Herodes el Grande. Creció en Nazaret durante casi treinta años, de los que la Biblia cuenta un solo episodio. Su ministerio público duró unos tres años y medio, desde su bautismo en el año 29 hasta su muerte y resurrección en la Pascua del 33. Es poco tiempo, pero los evangelios le dedican casi todas sus páginas, y de ellas, cerca de un tercio a la última semana.',
        { h: 'Los años de la iglesia' },
        'El libro de Hechos cubre unos treinta años, del 33 al 62. En los primeros quince, la iglesia nace en Jerusalén, se extiende por Judea y Samaria, recibe a los primeros gentiles y forma su primera gran iglesia fuera de Israel, en Antioquía. En los quince siguientes, Pablo y sus compañeros llevan el evangelio por las provincias de Asia Menor, Macedonia y Grecia hasta llegar a Roma. Durante esos años se escriben la mayoría de las cartas.',
        'Después de Hechos vienen años difíciles: la muerte de Jacobo en Jerusalén, la persecución de Nerón en Roma, la muerte de Pedro y de Pablo, la guerra judía y la destrucción del templo en el 70. El último apóstol, Juan, vive en Éfeso hasta fines del siglo, y desde la isla de Patmos recibe la revelación que cierra la Biblia.',
        { h: 'El tiempo señalado' },
        'Jesús comenzó su predicación diciendo: «El tiempo se ha cumplido, y el reino de Dios se ha acercado» (Mr 1:15). Pablo lo explicó así: «cuando vino el cumplimiento del tiempo, Dios envió a su Hijo» (Gá 4:4). La cronología no es solo una lista de fechas: muestra cómo Dios guió la historia hasta el momento preciso, y cómo en una sola generación el evangelio llegó de un pesebre en Belén al centro del imperio.',
        linea('Abrir la línea de tiempo completa, con filtros por tema')
      ],
      pensar: 'En poco más de cien años, Dios cumplió sus promesas, formó su iglesia y nos dejó su Palabra escrita. ¿Qué te dice eso de cómo obra Dios con el tiempo, también en tu propia vida?'
    }
  ];

  // ================== RUTA II. Nacimiento e infancia de Jesús ==================
  const nacimiento = [
    {
      id: 'zacarias', n: 'Zacarías y el turno de Abías', ref: 'Lucas 1:5-25; Lucas 1:26, 36; 1 Crónicas 24:10', fecha: [-7, -6],
      visual: [
        img('cr-zacarias-incienso.webp', 'Un sacerdote anciano de barba blanca, con túnica de lino blanco y turbante, ofrece incienso ante el altar de oro en la penumbra del santuario, iluminado por el candelero', 'Zacarías ofrece el incienso en el santuario (Lc 1:8-11).'),
        cita('Lucas 1:5-9', 'Hubo en los días de Herodes, rey de Judea, un sacerdote llamado Zacarías, de la clase de Abías; su mujer era de las hijas de Aarón, y se llamaba Elisabet. Ambos eran justos delante de Dios, y andaban irreprensibles en todos los mandamientos y ordenanzas del Señor. Pero no tenían hijo, porque Elisabet era estéril, y ambos eran ya de edad avanzada. Aconteció que ejerciendo Zacarías el sacerdocio delante de Dios según el orden de su clase, conforme a la costumbre del sacerdocio, le tocó en suerte ofrecer el incienso, entrando en el santuario del Señor.'),
        tabla({
          titulo: 'Las clases de sacerdotes',
          cab: ['Dato', 'Qué se sabe'],
          filas: [
            ['Cuántas clases', 'Veinticuatro, desde los días de David (1 Cr 24:7-18)'],
            ['La de Abías', 'La octava (1 Cr 24:10)'],
            ['Cuánto servía cada una', 'Una semana, de sábado a sábado, dos veces al año, además de las tres grandes fiestas'],
            ['El incienso', 'Se echaba a suertes; a muchos sacerdotes no les tocaba nunca en la vida'],
            ['Juan y Jesús', 'Juan nació unos seis meses antes que Jesús (Lc 1:26, 36)']
          ],
          nota: 'No se sabe con certeza en qué semana del año servía la clase de Abías en el año de Zacarías; por eso no se puede fijar el mes del nacimiento de Juan ni el de Jesús.'
        })
      ],
      texto: [
        'Lucas comienza su evangelio con una fecha: «Hubo en los días de Herodes, rey de Judea, un sacerdote llamado Zacarías, de la clase de Abías» (Lc 1:5). Herodes el Grande murió en el 4 a.C.; por lo tanto, el anuncio a Zacarías ocurrió antes, probablemente hacia el 7 o el 6 a.C.',
        { h: 'Una semana de servicio' },
        'Los sacerdotes estaban organizados en veinticuatro clases o turnos, que se remontaban a los días de David (1 Cr 24:7-18). La de Abías era la octava. Cada clase servía en el templo una semana completa, de sábado a sábado, dos veces al año, y todas juntas en las grandes fiestas. Durante su semana, los sacerdotes echaban suertes para repartir las tareas. Ofrecer el incienso en el santuario era un privilegio tan grande que, según la tradición judía, un sacerdote podía hacerlo una sola vez en su vida. A Zacarías, ya anciano, le tocó en suerte ese día (Lc 1:9).',
        { h: '¿Se puede calcular el mes?' },
        'Desde hace siglos, algunos han intentado calcular en qué mes sirvió la clase de Abías, para deducir cuándo nació Juan y, seis meses después, Jesús (Lc 1:26, 36). El método es contar los turnos hacia atrás desde una fecha conocida; por ejemplo, desde la destrucción del templo en el 70, cuando, según una tradición judía, servía la primera clase. Pero hay demasiadas incógnitas: no se sabe si el ciclo empezaba cada año o seguía de corrido, ni cómo se contaban las fiestas, y una tradición escrita siglos después no es un dato seguro. Los resultados van desde la primavera hasta el otoño. Lo honesto es reconocer que Lucas nos da el orden de los hechos, no el mes.',
        { h: 'Dios recuerda' },
        'Zacarías significa «Jehová se acuerda». El silencio profético había durado unos cuatrocientos años desde Malaquías, y el último libro del Antiguo Testamento terminaba con la promesa de un mensajero que prepararía el camino del Señor (Mal 3:1; 4:5-6). Ahora el ángel anunciaba que el hijo de Zacarías iría delante del Señor «con el espíritu y el poder de Elías» (Lc 1:17). El tiempo de la espera había terminado, y la nueva etapa comenzó en el lugar más santo de Israel, a la hora de la oración.',
        ir('Ver en El sacerdocio en Israel: las veinticuatro clases', '../../sacerdocio/#ordenes/6')
      ],
      pensar: 'Zacarías y Elisabet siguieron sirviendo a Dios con fidelidad, año tras año, sin ver cumplida su oración. ¿Qué te enseña que Dios respondiera justo cuando a Zacarías le tocó estar en su lugar de servicio?'
    },
    {
      id: 'censo', n: 'El censo de Cirenio', ref: 'Lucas 2:1-7; Hechos 5:37', fecha: [-6, -5],
      visual: [
        img('../imperio-romano/img/roma-censo-belen.webp', 'Familias judías hacen fila ante funcionarios romanos que anotan nombres en tablillas, en la entrada de una aldea de piedra en Judea', 'El empadronamiento: cada uno a su ciudad (Lc 2:3).'),
        pasos([
          { t: 'Nazaret, en Galilea: José y María reciben la noticia del empadronamiento', fecha: -6, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'] } },
          { t: 'Unos 150 kilómetros hasta Belén, la ciudad de David (Lc 2:4)', fecha: -5, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'], trazos: ['jesus-belen'] } }
        ]),
        cita('Lucas 2:1-5', 'Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado. Este primer censo se hizo siendo Cirenio gobernador de Siria. E iban todos para ser empadronados, cada uno a su ciudad. Y José subió de Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por cuanto era de la casa y familia de David; para ser empadronado con María su mujer, desposada con él, la cual estaba encinta.')
      ],
      texto: [
        'Lucas une el nacimiento de Jesús a un acto del poder romano: el emperador Augusto ordenó que «todo el mundo fuese empadronado», y agrega que «este primer censo se hizo siendo Cirenio gobernador de Siria» (Lc 2:1-2). José, que era de la familia de David, tuvo que ir de Nazaret a Belén. Así, un decreto de Roma llevó a María al lugar donde Miqueas había anunciado que nacería el Mesías (Mi 5:2).',
        { h: 'Una dificultad conocida' },
        'El dato plantea una pregunta. Según Josefo, Publio Sulpicio Quirino (Cirenio) fue gobernador de Siria desde el año 6 d.C., y ese año hizo un censo en Judea, cuando la región pasó a ser provincia romana. Ese censo provocó la rebelión de Judas el galileo, que el mismo Lucas menciona en Hechos 5:37. Pero Jesús nació antes del 4 a.C. ¿Cómo encaja?',
        { posturas: {
          titulo: '¿Qué censo es el de Lucas 2?',
          a: { n: 'Un censo anterior, con Cirenio en un cargo previo', t: 'Cirenio tuvo una larga carrera en Oriente antes del año 6: dirigió campañas militares en la región y pudo tener autoridad especial en Siria años antes. Augusto hizo censos en distintas provincias, y hacia el 3–2 a.C. todo el imperio prestó un juramento de lealtad al emperador que exigía registrarse. Lucas habla de un «primer» censo para distinguirlo del famoso del año 6.' },
          b: { n: 'Un censo «antes» del de Cirenio', t: 'La palabra griega que se traduce «primer» puede significar también «anterior». Así, la frase diría que este censo se hizo antes de que Cirenio fuera gobernador. Lucas aclararía que no habla del censo del año 6, que sus lectores conocían, sino de uno anterior, ordenado por Augusto y realizado en el reino de Herodes.' },
          c: 'Ambas lecturas respetan el texto. Lucas conocía el censo del año 6 (Hch 5:37) y lo distingue de este con cuidado. Un historiador tan preciso con los títulos y los nombres no se habría equivocado en un hecho que todos sus lectores recordaban.'
        } },
        { h: 'El emperador y el Rey' },
        'Augusto se presentaba como salvador del mundo y portador de la paz. Sus inscripciones llamaban «buenas nuevas» a su nacimiento. Lucas cuenta que, por orden de ese emperador, nació en un pesebre el verdadero Salvador, y que los ángeles anunciaron «nuevas de gran gozo» y «paz» a unos pastores (Lc 2:10-14). Dios usó la orden del hombre más poderoso del mundo para cumplir su palabra.',
        ir('Ver en El imperio romano: Jesús nace bajo Augusto', R.romano + '#biblia/2')
      ],
      pensar: 'José y María tuvieron que hacer un viaje difícil por la orden de un emperador lejano, y así se cumplió la profecía. ¿Qué situación incómoda de tu vida podría estar en las manos de Dios para cumplir su propósito?'
    },
    {
      id: 'magos', n: 'Los magos y la muerte de Herodes', ref: 'Mateo 2:1-23', fecha: [-6, -4],
      visual: [
        img('../dinastia-herodes/img/hd-magos-herodes.webp', 'El anciano rey Herodes, con manto púrpura, recibe en su palacio a unos sabios orientales de vestiduras ricas', 'Herodes recibe a los magos (Mt 2:7).'),
        esq('cr-nacimiento.svg', 'Secuencia del 7 al 4 a.C.: anuncio a Zacarías, anuncio a María, nacimiento de Juan, nacimiento de Jesús, presentación en el templo a los cuarenta días, visita de los magos, huida a Egipto, eclipse de luna y muerte de Herodes, y regreso a Nazaret', 'De Zacarías al regreso a Nazaret: el orden de los hechos (fechas aproximadas).', 'La secuencia'),
        cita('Mateo 2:16', 'Herodes entonces, cuando se vio burlado por los magos, se enojó mucho, y mandó matar a todos los niños menores de dos años que había en Belén y en todos sus alrededores, conforme al tiempo que había inquirido de los magos.')
      ],
      texto: [
        'Mateo dice que los magos llegaron a Jerusalén «cuando Jesús nació en Belén de Judea en días del rey Herodes» (Mt 2:1). El relato da varias pistas para el tiempo. Los magos encontraron al niño en una «casa» (Mt 2:11), no en el pesebre. Y Herodes, después de averiguar con ellos cuándo había aparecido la estrella, mandó matar a los niños de Belén «menores de dos años» (Mt 2:16). Eso sugiere que habían pasado varios meses, quizás más de un año, desde el nacimiento.',
        { h: 'La muerte de Herodes' },
        'Herodes murió poco después. Josefo cuenta que murió en Jericó, gravemente enfermo, después de un eclipse de luna y antes de una Pascua, y que reinó treinta y siete años desde que el Senado romano lo nombró rey, y treinta y cuatro desde que tomó Jerusalén. Esos datos llevan a la primavera del 4 a.C., y esa es la fecha que siguen la mayoría de los historiadores y este sitio. Algunos estudiosos proponen el 1 a.C., con otro eclipse; si fuera así, el nacimiento de Jesús podría ubicarse hacia el 3 o el 2 a.C.',
        ir('Ver en La dinastía de Herodes: la muerte de Herodes y las dos fechas', R.herodes + '#grande/7'),
        { h: 'Entonces, ¿cuándo nació Jesús?' },
        'Si Herodes murió en marzo del 4 a.C., y antes de eso pasaron la presentación en el templo a los cuarenta días (Lc 2:22), la visita de los magos y la huida a Egipto, el nacimiento de Jesús tuvo que ocurrir hacia el 6 o el 5 a.C. Con la cuenta del 1 a.C., el margen se corre unos años. En ningún caso la diferencia cambia lo que Mateo y Lucas afirman: Jesús nació en Belén, en los últimos años de Herodes.',
        { h: 'La estrella' },
        'Se han propuesto varias explicaciones para la estrella: una conjunción de Júpiter y Saturno en el 7 a.C., un cometa, o una señal especial. Mateo dice que la estrella «iba delante de ellos» y «se detuvo» sobre el lugar donde estaba el niño (Mt 2:9), algo que ningún astro natural hace. Sea cual fuere el medio, el texto presenta la estrella como una guía de Dios. No hay que buscar en ella una fecha exacta.',
        { ejercicio: {
          pregunta: 'Según Mateo, ¿dónde encontraron los magos al niño Jesús?',
          opciones: [
            { t: 'En el pesebre, la misma noche del nacimiento, junto a los pastores.', ok: false, por_que: 'Esa imagen viene de los pesebres navideños, que juntan a los pastores de Lucas 2 y a los magos de Mateo 2.' },
            { t: 'En una casa de Belén, probablemente meses después del nacimiento.', ok: true, por_que: 'Mateo dice que entraron en la casa (Mt 2:11), y la orden de Herodes sobre los menores de dos años sugiere que había pasado tiempo.' },
            { t: 'En el templo de Jerusalén, el día de la presentación.', ok: false, por_que: 'En el templo lo encontraron Simeón y Ana (Lc 2:25-38); los magos fueron enviados a Belén (Mt 2:8).' }
          ],
          explicacion: 'Los evangelios cuentan hechos distintos de un período de uno o dos años: el nacimiento, los pastores, la presentación y, después, los magos.'
        } }
      ],
      pensar: 'Unos extranjeros recorrieron cientos de kilómetros para adorar al niño, mientras los sacerdotes que sabían dónde nacería el Mesías no caminaron los ocho kilómetros que separan Jerusalén de Belén. ¿De qué te sirve conocer la Biblia si no te lleva a buscar a Cristo?'
    },
    {
      id: 'cuando-nacio', n: '¿Cuándo nació Jesús?', ref: 'Lucas 2:8-14; Gálatas 4:4; Romanos 14:5-6', fecha: [-6, -5],
      visual: [
        img('../persona-y-obra-de-cristo/img/belen-nacimiento.webp', 'Una joven madre envuelve en pañales a un recién nacido junto a un pesebre de piedra, en el interior pobre de una casa de Belén', 'El nacimiento en Belén (Lc 2:7).'),
        tabla({
          titulo: 'Lo que sabemos y lo que no',
          cab: ['Pregunta', 'Respuesta'],
          filas: [
            ['El año', 'Hacia el 6–5 a.C., antes de la muerte de Herodes (4 a.C.)'],
            ['El lugar', 'Belén de Judea (Mt 2:1; Lc 2:4-7; Mi 5:2)'],
            ['La estación', 'No se sabe: los pastores en el campo de noche (Lc 2:8) son posibles en casi cualquier época en Belén'],
            ['El 25 de diciembre', 'Fecha que celebra la iglesia de Roma desde el siglo IV; no aparece en la Biblia'],
            ['El 6 de enero', 'Fecha que celebraban muchas iglesias de Oriente; tampoco es bíblica']
          ]
        })
      ],
      texto: [
        'Con lo visto, el año del nacimiento de Jesús puede fijarse con bastante seguridad: hacia el 6 o el 5 a.C. Lo que no puede fijarse es el día ni el mes. La Biblia no los da, y los primeros cristianos no celebraban el nacimiento de Jesús; celebraban su resurrección cada domingo y, cada año, en la Pascua.',
        { h: 'Los pastores en el campo' },
        'A veces se dice que Jesús no pudo nacer en invierno porque los pastores estaban en el campo de noche (Lc 2:8). Pero en las colinas de Belén, junto al desierto, había rebaños afuera en distintas épocas del año, y una fuente judía posterior habla de ovejas que se criaban todo el año cerca de Jerusalén para los sacrificios del templo. El dato no basta para fijar la estación.',
        { h: 'De dónde viene el 25 de diciembre' },
        'La primera mención segura del 25 de diciembre como fiesta del nacimiento está en un calendario de la iglesia de Roma del año 336. Las iglesias de Oriente celebraban el 6 de enero, y con el tiempo muchas adoptaron las dos fechas. ¿Por qué esa fecha?',
        { posturas: {
          titulo: '¿Por qué el 25 de diciembre?',
          a: { n: 'Una fiesta pagana cristianizada', t: 'En Roma se celebraba al dios Sol Invicto alrededor del solsticio de invierno, y en esos días caían también las fiestas de Saturno. Según esta explicación, la iglesia del siglo IV eligió el 25 de diciembre para reemplazar esas fiestas con la celebración de Cristo, «el sol de justicia» (Mal 4:2).' },
          b: { n: 'Una fecha calculada por los cristianos', t: 'Algunos escritores cristianos de los siglos II y III creían que Jesús había sido concebido el mismo día del año en que murió, que fijaban el 25 de marzo. Nueve meses después cae el 25 de diciembre. Según esta explicación, la fecha se calculó antes de que existiera la fiesta del Sol Invicto, que el emperador Aureliano oficializó en el 274.' },
          c: 'Las dos explicaciones tienen defensores y quizás ambas influyeron. Lo seguro es que el 25 de diciembre no es una fecha bíblica. Celebrar ese día el nacimiento de Jesús no es una obligación ni un pecado: es una de esas cosas en las que cada uno debe estar plenamente convencido y hacerlo para el Señor (Ro 14:5-6).'
        } },
        { h: 'Lo que la Biblia sí dice' },
        'A la Biblia no le interesa el día del calendario, sino el sentido del momento: «cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley» (Gá 4:4). Lo que se anunció a los pastores no fue una fecha, sino una persona: «os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor» (Lc 2:11).',
        ir('Ver en La persona y obra de Cristo: el Verbo se hizo carne', R.cristo)
      ],
      pensar: 'Discutimos mucho sobre la fecha de la Navidad, pero el ángel dijo «hoy» a unos pastores que no tenían calendario. ¿Has recibido tú al Salvador que nació ese día?'
    },
    {
      id: 'egipto-nazaret', n: 'De Belén a Nazaret', ref: 'Lucas 2:21-39; Mateo 2:13-23', fecha: [-5, -4],
      visual: [
        pasos([
          { t: 'Belén: la circuncisión al octavo día (Lc 2:21)', fecha: -5, estado: { view: V.judea, capas: ['nt-judea'], lugares: ['belen', 'jerusalen'] } },
          { t: 'Jerusalén: la presentación en el templo, a los cuarenta días (Lc 2:22-38)', fecha: -5, estado: { view: V.judea, capas: ['nt-judea'], lugares: ['belen', 'jerusalen'] } },
          { t: 'Belén: los magos encuentran al niño en una casa (Mt 2:11)', fecha: -5, estado: { view: V.judea, capas: ['nt-judea'], lugares: ['belen', 'jerusalen'] } },
          { t: 'Huida a Egipto (Mt 2:13-15)', fecha: -5, estado: { view: V.egipto, capas: ['roma-14'], lugares: ['belen', 'jerusalen', 'alejandria', 'menfis'], trazos: ['huida-egipto'] } },
          { t: 'Muere Herodes (4 a.C.); Arquelao reina en Judea y Antipas en Galilea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao', 'hd-antipas', 'hd-felipe'], lugares: ['jerusalen', 'nazaret', 'jerico'] } },
          { t: 'Regreso y llegada a Nazaret, en Galilea (Mt 2:19-23)', fecha: -4, estado: { view: V.sur, capas: ['hd-arquelao', 'hd-antipas'], lugares: ['nazaret', 'jerusalen', 'alejandria'], trazos: ['jesus-egipto', 'jesus-nazaret'] } }
        ]),
        cita('Mateo 2:19-23', 'Pero después de muerto Herodes, he aquí un ángel del Señor apareció en sueños a José en Egipto, diciendo: Levántate, toma al niño y a su madre, y vete a tierra de Israel, porque han muerto los que procuraban la muerte del niño. Entonces él se levantó, y tomó al niño y a su madre, y vino a tierra de Israel. Pero oyendo que Arquelao reinaba en Judea en lugar de Herodes su padre, tuvo temor de ir allá; pero avisado por revelación en sueños, se fue a la región de Galilea, y vino y habitó en la ciudad que se llama Nazaret, para que se cumpliese lo que fue dicho por los profetas, que habría de ser llamado nazareno.')
      ],
      texto: [
        'Mateo y Lucas cuentan los primeros meses de Jesús desde ángulos distintos. Lucas narra la circuncisión, la presentación en el templo y el regreso a Nazaret (Lc 2:21-39). Mateo narra la visita de los magos, la huida a Egipto y el regreso desde allí (Mt 2). Juntos permiten reconstruir el orden más probable.',
        { h: 'El orden de los hechos' },
        'Jesús nació en Belén y fue circuncidado al octavo día. A los cuarenta días, como mandaba la ley para el primer hijo varón (Lv 12:2-4; Éx 13:2), José y María lo presentaron en el templo de Jerusalén, a solo ocho kilómetros, y ofrecieron dos tórtolas, la ofrenda de los pobres (Lc 2:24). Allí los recibieron Simeón y Ana. Todo indica que la familia se quedó en Belén, donde los magos la encontraron en una casa. Después del aviso del ángel, huyeron a Egipto. Lucas, que no cuenta este episodio, resume todo ese tiempo y pasa directamente al regreso a Nazaret (Lc 2:39).',
        { h: 'Egipto y el regreso' },
        'No se sabe cuánto tiempo estuvieron en Egipto; probablemente unos meses. Había allí grandes comunidades judías, sobre todo en Alejandría, donde una familia podía encontrar trabajo y refugio. Cuando Herodes murió, en la primavera del 4 a.C., el ángel avisó a José que podía volver. Pero el reino se había dividido: en Judea gobernaba Arquelao, conocido por su crueldad, que había comenzado su reinado matando a unos tres mil judíos en el templo durante la Pascua. José tuvo temor de ir allá y se estableció en Nazaret, en Galilea, que gobernaba Antipas (Mt 2:22-23).',
        { h: 'Las fechas confirman el relato' },
        'El detalle de Arquelao es un ancla más. Arquelao gobernó Judea solo del 4 a.C. al 6 d.C., cuando Augusto lo destituyó. Un relato inventado después difícilmente habría ubicado a la familia de Jesús en ese breve momento en que Judea y Galilea tenían gobernantes distintos y uno de ellos era temido.',
        'Mateo ve en cada paso el cumplimiento de la Escritura: el Hijo es llamado de Egipto como Israel (Os 11:1), y vive en Nazaret, despreciado como el Siervo del Señor (Mt 2:23). Lo que parecía huida y desvío era el camino trazado por Dios.',
        ir('Ver en La dinastía de Herodes: el reino dividido entre tres hijos', R.herodes + '#grande/8'),
        ir('Ver la infancia de Jesús en la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'José obedeció cada aviso de Dios de inmediato, aunque significara levantarse de noche y empezar de nuevo en otro país. ¿Cómo respondes cuando Dios te pide cambiar de rumbo?'
    },
    {
      id: 'doce-anios', n: 'Jesús a los doce años y los años en Nazaret', ref: 'Lucas 2:40-52; Marcos 6:3; Mateo 13:55', fecha: [6, 29],
      visual: [
        img('cr-jesus-doce.webp', 'Un muchacho de unos doce años, visto de espaldas, sentado entre maestros de barba gris bajo un pórtico de columnas del templo, que lo escuchan con asombro', 'Jesús, a los doce años, entre los maestros del templo (Lc 2:46-47).'),
        cita('Lucas 2:46-52', 'Y aconteció que tres días después le hallaron en el templo, sentado en medio de los doctores de la ley, oyéndoles y preguntándoles. Y todos los que le oían, se maravillaban de su inteligencia y de sus respuestas. Cuando le vieron, se sorprendieron; y le dijo su madre: Hijo, ¿por qué nos has hecho así? He aquí, tu padre y yo te hemos buscado con angustia. Entonces él les dijo: ¿Por qué me buscabais? ¿No sabíais que en los negocios de mi Padre me es necesario estar? Mas ellos no entendieron las palabras que les habló. Y descendió con ellos, y volvió a Nazaret, y estaba sujeto a ellos. Y su madre guardaba todas estas cosas en su corazón. Y Jesús crecía en sabiduría y en estatura, y en gracia para con Dios y los hombres.'),
        tabla({
          titulo: 'Mientras Jesús crecía en Nazaret',
          cab: ['Año', 'Qué pasaba'],
          filas: [
            ['6 d.C.', 'Augusto destituye a Arquelao; Judea pasa a ser provincia romana con un prefecto. Censo de Cirenio y rebelión de Judas el galileo'],
            ['6–15 d.C.', 'Anás es sumo sacerdote'],
            ['c. 8 d.C.', 'Jesús, a los doce años, en el templo'],
            ['14 d.C.', 'Muere Augusto; Tiberio es emperador'],
            ['18 d.C.', 'Caifás, yerno de Anás, sumo sacerdote'],
            ['c. 19–20 d.C.', 'Antipas funda Tiberíades a orillas del lago de Galilea'],
            ['26 d.C.', 'Poncio Pilato llega como prefecto de Judea']
          ]
        })
      ],
      texto: [
        'De los casi treinta años que Jesús vivió en Nazaret, los evangelios cuentan un solo episodio. Lucas dice que sus padres iban cada año a Jerusalén para la Pascua, y que cuando Jesús tuvo doce años subieron «conforme a la costumbre de la fiesta» (Lc 2:41-42). Si nació hacia el 6 o el 5 a.C., eso ocurrió hacia el año 7 u 8 d.C.',
        { h: 'Los doce años' },
        'A los doce años un muchacho judío se preparaba para asumir los mandamientos como adulto. La ceremonia del bar mitzvá, a los trece, es de siglos posteriores, pero ya entonces los doce años marcaban el paso a la madurez religiosa. Jesús se quedó en el templo escuchando y preguntando a los maestros, y cuando sus padres lo encontraron después de tres días, les dijo que debía estar «en los negocios de mi Padre» (Lc 2:49). Son las primeras palabras de Jesús que registra la Biblia, y ya muestran que sabía quién era su Padre.',
        { h: 'Los años del silencio' },
        'Después, Lucas resume casi dos décadas en una frase: Jesús «crecía en sabiduría y en estatura, y en gracia para con Dios y los hombres» (Lc 2:52). En Nazaret lo conocían como «el carpintero, hijo de María», y sabían los nombres de sus hermanos: Jacobo, José, Judas y Simón, y de sus hermanas (Mr 6:3). José no vuelve a aparecer en los relatos del ministerio, y en la cruz Jesús encargó a su madre al discípulo amado (Jn 19:26-27); por eso se piensa que José murió en esos años.',
        'Mientras tanto, el mundo cambiaba. En el año 6 Judea pasó a ser provincia romana; en el 14 murió Augusto y comenzó a reinar Tiberio; en el 26 llegó Poncio Pilato. Ninguno de esos gobernantes sabía que en un pueblo pequeño de Galilea crecía el Rey de reyes.',
        { h: 'Los evangelios apócrifos' },
        'Siglos después, algunos escritos llamados evangelios de la infancia llenaron estos años con milagros fantásticos de un Jesús niño. La iglesia no los recibió como Escritura: contradicen el carácter de Jesús y el dato de Juan, que dice que el milagro de Caná fue el principio de sus señales (Jn 2:11).',
        ir('Ver en Los libros apócrifos: los evangelios de la infancia', '../../libros-apocrifos/#nt/2')
      ],
      pensar: 'Jesús pasó treinta años en una vida sencilla de familia y trabajo antes de tres años y medio de ministerio público. ¿Qué valor tienen para Dios los años de preparación y de trabajo común que nadie ve?'
    }
  ];

  Object.assign(window.__CR, { fechar, nacimiento });
})();
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, linea, R } = window.__CR;

  // ================== RUTA III. El ministerio de Jesús ==================
  const ministerio = [
    {
      id: 'tiberio', n: 'El año quince de Tiberio', ref: 'Lucas 3:1-3', fecha: [28, 29],
      visual: [
        esq('cr-tiberio.svg', 'Dos escalas paralelas de los años 12 a 30 d.C.: en una, el reinado de Tiberio se cuenta desde la muerte de Augusto en el 14 y el año quince cae en el 28–29; en la otra, se cuenta desde el 12, cuando Tiberio gobernaba junto con Augusto, y el año quince cae en el 26–27', 'Dos maneras de contar «el año decimoquinto del imperio de Tiberio César» (Lc 3:1).', 'Tiberio'),
        tabla({
          titulo: 'Los seis datos de Lucas 3:1-2',
          cab: ['Dato', 'Años de gobierno', 'Qué indica'],
          filas: [
            ['Año 15 de Tiberio', '14–37 como emperador', '28–29 (o 26–27 con la otra cuenta)'],
            ['Poncio Pilato, gobernador de Judea', '26–36', 'Después del 26'],
            ['Herodes Antipas, tetrarca de Galilea', '4 a.C.–39 d.C.', 'Antes del 39'],
            ['Felipe, tetrarca de Iturea y Traconite', '4 a.C.–34 d.C.', 'Antes del 34'],
            ['Lisanias, tetrarca de Abilinia', 'Conocido por una inscripción de tiempos de Tiberio', 'Coincide'],
            ['Anás y Caifás, sumos sacerdotes', 'Caifás, 18–36; Anás seguía siendo influyente', 'Entre el 18 y el 36']
          ]
        }),
        cita('Lucas 3:1-3', 'En el año decimoquinto del imperio de Tiberio César, siendo gobernador de Judea Poncio Pilato, y Herodes tetrarca de Galilea, y su hermano Felipe tetrarca de Iturea y de la provincia de Traconite, y Lisanias tetrarca de Abilinia, y siendo sumos sacerdotes Anás y Caifás, vino palabra de Dios a Juan, hijo de Zacarías, en el desierto. Y él fue por toda la región contigua al Jordán, predicando el bautismo del arrepentimiento para perdón de pecados,')
      ],
      texto: [
        'Lucas fija el comienzo de la predicación de Juan el Bautista con el dato más preciso de todo el Nuevo Testamento: «En el año decimoquinto del imperio de Tiberio César» (Lc 3:1). A eso suma otros cinco gobernantes. Todos encajan entre los años 26 y 34, y el primero permite ir más lejos.',
        { h: 'Contar los años de Tiberio' },
        'Augusto murió el 19 de agosto del año 14, y desde ese día Tiberio fue emperador. Contando así, como lo hacían los historiadores romanos, su año quince va de agosto del 28 a agosto del 29. Si se usaba la cuenta de las provincias orientales, que hacían empezar el año en otoño o en primavera, el resultado se mueve unos meses, pero sigue dentro del 28 o el 29. Esa es la cuenta que siguen este sitio y muchos estudiosos.',
        { posturas: {
          titulo: '¿Desde cuándo se cuentan los años de Tiberio?',
          a: { n: 'Desde la muerte de Augusto (año 14)', t: 'Es la forma en que los historiadores romanos Tácito, Suetonio y Dion Casio contaban los años de Tiberio, y la que habría entendido cualquier lector de Lucas. El año quince sería el 28–29. Juan comenzó a predicar ese año, y Jesús fue bautizado poco después, hacia el 29.' },
          b: { n: 'Desde que gobernó junto con Augusto (año 12)', t: 'Hacia el año 12, Augusto le dio a Tiberio autoridad sobre las provincias junto con él. Si Lucas contara desde entonces, el año quince sería el 26–27, y el ministerio de Jesús podría empezar en el 27 y terminar en el 30. Pero no hay monedas ni documentos que cuenten los años de Tiberio desde el 12.' },
          c: 'La primera cuenta es la más natural y la que mejor encaja con los demás datos (estación IV.4). Por eso el sitio fecha el comienzo del ministerio de Juan en el 28–29 y el bautismo de Jesús en el 29.'
        } },
        { h: 'La palabra de Dios en el desierto' },
        'Después de nombrar a todos los poderosos del mundo, Lucas dice dónde llegó la palabra de Dios: no al palacio del emperador, ni al del tetrarca, ni a la casa del sumo sacerdote, sino «a Juan, hijo de Zacarías, en el desierto» (Lc 3:2). La lista de nombres importantes sirve de marco para lo verdaderamente importante: Dios volvía a hablar a su pueblo después de siglos de silencio profético.',
        ir('Ver en La dinastía de Herodes: Antipas y Felipe', R.herodes + '#hijos/2')
      ],
      pensar: 'Lucas nombra a siete gobernantes poderosos, pero la palabra de Dios vino a un hombre en el desierto. ¿Dónde esperas tú que Dios hable: en los lugares importantes o en los lugares de soledad y oración?'
    },
    {
      id: 'treinta', n: '«Como de treinta años»', ref: 'Lucas 3:21-23; Números 4:3; Génesis 41:46; 2 Samuel 5:4', fecha: 29,
      visual: [
        img('../persona-y-obra-de-cristo/img/tentacion-desierto.webp', 'Un hombre visto de espaldas, con túnica clara y manto pardo, se detiene sobre las rocas del desierto de Judea al atardecer', 'Después del bautismo, cuarenta días en el desierto (Lc 4:1-2).'),
        tabla({
          titulo: 'Treinta años en la Biblia',
          cab: ['Quién', 'Qué comenzó', 'Pasaje'],
          filas: [
            ['Los levitas', 'El servicio en el tabernáculo', 'Nm 4:3'],
            ['José', 'Su servicio ante Faraón', 'Gn 41:46'],
            ['David', 'Su reinado', '2 S 5:4'],
            ['Ezequiel', 'Probablemente su ministerio profético («el año treinta»)', 'Ez 1:1'],
            ['Jesús', 'Su ministerio público', 'Lc 3:23']
          ]
        })
      ],
      texto: [
        'Lucas dice que Jesús, «al comenzar su ministerio era como de treinta años» (Lc 3:23). El dato encaja con lo anterior: si Jesús nació hacia el 6 o el 5 a.C. y fue bautizado hacia el 29, tenía unos treinta y dos años.',
        { h: '«Como de»' },
        'La expresión de Lucas no pretende ser exacta. Él mismo usa «como» para cifras aproximadas: «como tres mil personas» (Hch 2:41), «como cinco mil» (Lc 9:14). Treinta y dos años está bien dentro de lo que un lector entendía por «como de treinta». Algunos han querido leer «exactamente treinta» para fijar el nacimiento, pero el texto no lo permite.',
        { h: 'La edad del servicio' },
        'Treinta años era, en Israel, la edad de la madurez para servir. Los levitas comenzaban su trabajo en el tabernáculo «de edad de treinta años arriba» (Nm 4:3). José tenía treinta años cuando se presentó delante de Faraón (Gn 41:46), y David, cuando comenzó a reinar (2 S 5:4). Lucas, que acaba de narrar cómo el Espíritu descendió sobre Jesús en el bautismo y cómo la voz del Padre lo declaró su Hijo amado (Lc 3:21-22), presenta a Jesús entrando en su servicio en la plenitud de su vida.',
        { h: 'Del Jordán al desierto' },
        'El bautismo de Jesús ocurrió, por lo tanto, hacia el año 29, probablemente en el verano o el otoño, cuando la predicación de Juan ya atraía multitudes. Después, «lleno del Espíritu Santo», Jesús fue llevado al desierto, donde ayunó cuarenta días y venció la tentación con la Palabra de Dios (Lc 4:1-13). Luego volvió al Jordán, donde Juan lo señaló como «el Cordero de Dios» y lo siguieron sus primeros discípulos (Jn 1:29-42). Su ministerio público comenzaba con poder: «Jesús volvió en el poder del Espíritu a Galilea» (Lc 4:14).',
        { ejercicio: {
          pregunta: 'Si Jesús nació hacia el 5 a.C. y fue bautizado hacia el 29 d.C., ¿qué edad tenía, aproximadamente?',
          opciones: [
            { t: 'Treinta y cuatro años: 5 más 29.', ok: false, por_que: 'Esa suma olvida que no existe el año cero: del 1 a.C. se pasa al 1 d.C.' },
            { t: 'Treinta y tres años, como dice la tradición.', ok: false, por_que: 'La tradición de los treinta y tres años se refiere a la edad de Jesús al morir, no al ser bautizado.' },
            { t: 'Unos treinta y dos años, «como de treinta».', ok: true, por_que: 'Como no hay año cero, se resta uno: 5 + 29 − 1 = 33 años de calendario, que según el mes dan unos 32 de edad.' }
          ],
          explicacion: 'Lucas da una edad aproximada (Lc 3:23), y treinta y dos años encaja bien con su «como de treinta».'
        } }
      ],
      pensar: 'Jesús esperó treinta años en Nazaret antes de comenzar su ministerio, y lo comenzó lleno del Espíritu Santo. ¿Qué te enseña sobre la paciencia en la preparación y sobre la dependencia del Espíritu para servir?'
    },
    {
      id: 'templo-46', n: 'Los cuarenta y seis años del templo', ref: 'Juan 2:13-22', fecha: 30,
      visual: [
        img('../imperio-romano/img/roma-templo-herodes.webp', 'El templo de Herodes en Jerusalén, de piedra blanca y oro, sobre su gran explanada rodeada de pórticos', 'El templo que Herodes comenzó a reconstruir hacia el 20 a.C.'),
        cita('Juan 2:13-21', 'Estaba cerca la pascua de los judíos; y subió Jesús a Jerusalén, y halló en el templo a los que vendían bueyes, ovejas y palomas, y a los cambistas allí sentados. Y haciendo un azote de cuerdas, echó fuera del templo a todos, y las ovejas y los bueyes; y esparció las monedas de los cambistas, y volcó las mesas; y dijo a los que vendían palomas: Quitad de aquí esto, y no hagáis de la casa de mi Padre casa de mercado. Entonces se acordaron sus discípulos que está escrito: El celo de tu casa me consume. Y los judíos respondieron y le dijeron: ¿Qué señal nos muestras, ya que haces esto? Respondió Jesús y les dijo: Destruid este templo, y en tres días lo levantaré. Dijeron luego los judíos: En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás? Mas él hablaba del templo de su cuerpo.'),
        tabla({
          titulo: 'Del comienzo de la obra a la primera Pascua',
          cab: ['Año', 'Qué pasó'],
          filas: [
            ['20/19 a.C.', 'Año dieciocho de Herodes: comienza la reconstrucción del templo (Josefo)'],
            ['c. 18/17 a.C.', 'El santuario queda terminado, en un año y medio'],
            ['c. 30 d.C.', '«En cuarenta y seis años fue edificado este templo» (Jn 2:20)'],
            ['c. 63 d.C.', 'Se terminan las obras de toda la explanada'],
            ['70 d.C.', 'Los romanos destruyen el templo']
          ]
        })
      ],
      texto: [
        'En su primera Pascua de ministerio, Jesús echó del templo a los vendedores y cambistas. Cuando las autoridades le pidieron una señal, respondió: «Destruid este templo, y en tres días lo levantaré». Ellos le contestaron: «En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás?» (Jn 2:19-20). Ese comentario, dicho casi de pasada, es un dato cronológico.',
        { h: 'Contar desde Herodes' },
        'Josefo dice que Herodes comenzó la reconstrucción del templo en el año dieciocho de su reinado, es decir, hacia el 20 o el 19 a.C. El santuario propiamente dicho, la casa con el Lugar Santo y el Lugar Santísimo, se terminó en un año y medio, aunque las obras de los atrios y pórticos siguieron hasta pocos años antes de la guerra contra Roma. Contando cuarenta y seis años desde el comienzo de la obra, o desde que se terminó el santuario, se llega al año 29 o 30 d.C.',
        'La palabra que usan aquí los judíos es la que designaba el santuario mismo. Por eso muchos entienden que querían decir: «este santuario ha estado en pie durante cuarenta y seis años». En cualquier caso, la primera Pascua del ministerio de Jesús cae en el año 30, poco después de su bautismo en el 29. Es un dato independiente del de Lucas 3:1, y los dos coinciden.',
        { h: 'El verdadero templo' },
        'Juan aclara que Jesús «hablaba del templo de su cuerpo», y que sus discípulos lo entendieron recién después de la resurrección (Jn 2:21-22). Las autoridades estaban orgullosas de un edificio que llevaba casi medio siglo en obra. Jesús hablaba de algo más grande: Dios habitaría entre los hombres en la persona de su Hijo, y él resucitaría al tercer día. Cuarenta años después, el edificio de Herodes fue destruido; el templo de su cuerpo vive para siempre.',
        ir('Ver El templo de Herodes en 3D', R.templo),
        ir('Ver la purificación del templo en la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'Las autoridades miraban un edificio construido durante cuarenta y seis años; Jesús les hablaba de sí mismo. ¿Pones tu confianza en lo que se ve y se construye con manos, o en Cristo resucitado?'
    },
    {
      id: 'pascuas', n: 'Las Pascuas de Juan: ¿cuánto duró el ministerio?', ref: 'Juan 2:13; 5:1; 6:4; 7:2; 10:22; 11:55', fecha: [29, 33],
      visual: [
        esq('cr-pascuas.svg', 'Escala de tiempo del otoño del 29 a la primavera del 33 con las fiestas que menciona Juan: la Pascua del 30, una fiesta en el 31, la Pascua del 32, los Tabernáculos y la Dedicación del 32, y la Pascua del 33, junto con las etapas del ministerio', 'El ministerio de Jesús en las fiestas que menciona Juan: unos tres años y medio.', 'Las fiestas'),
        tabla({
          titulo: 'Las fiestas del Evangelio de Juan',
          cab: ['Pasaje', 'Fiesta', 'Año'],
          filas: [
            ['Jn 2:13', 'Pascua: la purificación del templo', 'Primavera del 30'],
            ['Jn 4:35', '«Aún faltan cuatro meses para que llegue la siega»', 'Fines del 30'],
            ['Jn 5:1', '«Una fiesta de los judíos»: quizás la Pascua o los Tabernáculos', '31'],
            ['Jn 6:4', 'Pascua: la multiplicación de los panes', 'Primavera del 32'],
            ['Jn 7:2', 'Los Tabernáculos', 'Otoño del 32'],
            ['Jn 10:22', 'La Dedicación, en invierno', 'Diciembre del 32'],
            ['Jn 11:55; 12:1', 'Pascua: la cruz y la resurrección', 'Primavera del 33']
          ]
        })
      ],
      texto: [
        'Si solo tuviéramos los evangelios de Mateo, Marcos y Lucas, podríamos pensar que el ministerio de Jesús duró un año, porque los tres mencionan una sola Pascua: la de la cruz. Juan, en cambio, menciona al menos tres Pascuas, y entre ellas otras fiestas. Su evangelio da el esqueleto del ministerio.',
        { h: 'Las Pascuas de Juan' },
        'La primera Pascua es la de la purificación del templo (Jn 2:13), en el año 30. Después Juan menciona una «fiesta de los judíos» sin nombre (Jn 5:1). Luego, la Pascua cercana a la multiplicación de los panes (Jn 6:4), el año en que Jesús enseñó que él es el pan de vida. Siguen la fiesta de los Tabernáculos (Jn 7:2) y la de la Dedicación, que se celebraba en invierno (Jn 10:22). Por último, la Pascua en la que Jesús murió (Jn 11:55; 12:1).',
        'Entre la primera Pascua (Jn 2:13) y la de la multiplicación de los panes (Jn 6:4) pasó más de un año. Jesús dijo a sus discípulos en Samaria que faltaban cuatro meses para la siega (Jn 4:35), lo que lleva al invierno siguiente, y antes de la Pascua de Juan 6 hay toda una etapa en Galilea. Por eso la mayoría de los estudiosos cuenta cuatro Pascuas: 30, 31, 32 y 33. Si el bautismo fue en el otoño del 29, el ministerio duró unos tres años y medio.',
        { posturas: {
          titulo: '¿Cuánto duró el ministerio de Jesús?',
          a: { n: 'Unos tres años y medio', t: 'Juan menciona expresamente tres Pascuas y la secuencia de su relato exige una más entre Juan 2 y Juan 6. Con el bautismo en el 29, el ministerio llega a la Pascua del 33. Es la cuenta tradicional y la que mejor reúne los datos de Lucas 3:1 y Juan 2:20.' },
          b: { n: 'Unos dos años y medio', t: 'Otros cuentan solo las tres Pascuas que Juan nombra (30, 31 y 32, o 31, 32 y 33), y entienden que la «fiesta» de Juan 5:1 no es una Pascua. Con el bautismo en el 29, la cruz quedaría en el 32, año en que la Pascua no cayó en viernes; por eso esta cuenta suele ir con un comienzo más temprano y la cruz en el 30.' },
          c: 'Las dos lecturas aceptan que el ministerio duró más de dos años. La de tres años y medio encaja con todos los datos del calendario y es la que sigue el sitio, como la Armonía de los evangelios. La duración exacta no cambia nada de lo que Jesús hizo y enseñó.'
        } },
        'En una parábola de su último viaje, el dueño de la higuera dice que lleva «tres años» buscando fruto sin hallarlo (Lc 13:7). No es una fecha, pero refleja bien un ministerio largo entre un pueblo que no daba el fruto esperado.'
      ],
      pensar: 'Durante tres años y medio Jesús subió a Jerusalén en cada fiesta, enseñó y sanó, y la mayoría de su pueblo no lo recibió. ¿Cuánto tiempo lleva Dios buscando fruto en tu vida, y qué encuentra?'
    },
    {
      id: 'orden', n: 'El orden del ministerio', ref: 'Juan 1:43; 3:22; 4:3-4; Marcos 1:14-15; Lucas 9:51', fecha: [29, 33],
      visual: [
        pasos([
          { t: 'Otoño del 29: bautismo en el Jordán y primeros discípulos (Jn 1:28-51)', fecha: 29, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-judea', 'nt-perea'], lugares: ['betabara', 'nazaret', 'cana', 'jerusalen'] } },
          { t: '30: primera Pascua y ministerio en Judea; vuelta a Galilea por Samaria (Jn 2–4)', fecha: 30, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['jerusalen', 'sicar', 'cana', 'nazaret'], trazos: ['jesus-samaria'] } },
          { t: '30–32: el gran ministerio en Galilea, con Capernaúm como centro (Mr 1:14–9:50)', fecha: [30, 32], estado: { view: V.galilea, capas: ['nt-galilea'], lugares: ['capernaum', 'betsaida', 'corazin', 'magdala', 'nain', 'nazaret', 'cana'] } },
          { t: '32: viajes al norte: Tiro y Sidón, Cesarea de Filipo y la transfiguración (Mr 7:24; 8:27)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-felipe'], lugares: ['tiro-sidon', 'cesarea-filipo', 'capernaum', 'hermon'] } },
          { t: 'Fines del 32 a la Pascua del 33: el último viaje hacia Jerusalén, por Perea y Judea (Lc 9:51–19:28)', fecha: [32, 33], estado: { view: V.palestina, capas: ['nt-galilea', 'nt-perea', 'nt-judea'], lugares: ['capernaum', 'jerico', 'betania', 'jerusalen', 'efrain'], trazos: ['jesus-jerusalen'] } }
        ]),
        tabla({
          titulo: 'Las etapas del ministerio',
          cab: ['Etapa', 'Fechas', 'Dónde se lee'],
          filas: [
            ['Preparación y primeros discípulos', 'Otoño del 29 a la Pascua del 30', 'Mt 3–4; Lc 3–4; Jn 1'],
            ['Primer año: Judea, Samaria y Caná', '30', 'Jn 2–4'],
            ['Ministerio en Galilea', '30–32', 'Mt 4–18; Mr 1–9; Lc 4–9'],
            ['Retiros al norte y anuncio de la cruz', '32', 'Mt 15–17; Mr 7–9'],
            ['Último viaje a Jerusalén', 'Otoño del 32 a la primavera del 33', 'Lc 9:51–19:27; Jn 7–11'],
            ['La última semana', 'Marzo y abril del 33', 'Mt 21–28; Mr 11–16; Lc 19–24; Jn 12–21']
          ]
        })
      ],
      texto: [
        'Los evangelios no son diarios de viaje, y no siempre cuentan las cosas en orden cronológico. Mateo, por ejemplo, agrupa muchas enseñanzas de Jesús en grandes discursos. Pero, comparando los cuatro, se ve un movimiento general que permite seguir el ministerio de Jesús año por año.',
        { h: 'Un primer año poco conocido' },
        'Después del bautismo, en el otoño del 29, Jesús llamó a sus primeros discípulos junto al Jordán y fue con ellos a una boda en Caná (Jn 1–2). En la Pascua del 30 estuvo en Jerusalén; allí habló con Nicodemo y luego bautizó en Judea mientras Juan el Bautista seguía predicando (Jn 3:22-24). Solo Juan cuenta esta etapa. Cuando Juan el Bautista fue encarcelado, Jesús volvió a Galilea pasando por Samaria (Jn 4:3-4; Mr 1:14).',
        { h: 'Galilea' },
        'Siguió la etapa más larga: unos dos años en Galilea, con Capernaúm como base. Es el tiempo del llamado de los doce, del Sermón del monte, de las parábolas junto al lago y de la mayoría de los milagros. En la Pascua del 32 alimentó a los cinco mil, y muchos quisieron hacerlo rey por la fuerza (Jn 6:15). Desde entonces Jesús se retiró más a menudo hacia el norte, a las regiones de Tiro y Sidón y de Cesarea de Filipo. Allí Pedro lo confesó como el Cristo, y Jesús comenzó a anunciar abiertamente su muerte y su resurrección (Mr 8:27-31).',
        { h: 'Hacia Jerusalén' },
        'Lucas marca el giro con una frase solemne: «cuando se cumplió el tiempo en que él había de ser recibido arriba, afirmó su rostro para ir a Jerusalén» (Lc 9:51). Desde el otoño del 32 hasta la Pascua del 33, Jesús viajó por Perea y Judea, subió a Jerusalén para los Tabernáculos y la Dedicación (Jn 7; 10), resucitó a Lázaro en Betania (Jn 11) y se retiró a Efraín, junto al desierto (Jn 11:54), hasta la última semana.',
        ir('Ver todo el ministerio, pasaje por pasaje, en la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'Jesús «afirmó su rostro para ir a Jerusalén» sabiendo lo que lo esperaba allí. ¿Qué te enseña su determinación cuando el camino de la obediencia se vuelve difícil?'
    }
  ];

  // ================== RUTA IV. La última semana y el año de la cruz ==================
  const semana = [
    {
      id: 'dia-por-dia', n: 'La última semana, día por día', ref: 'Juan 12:1, 12; Marcos 11:1–16:8', fecha: 33,
      visual: [
        esq('../mundo-judio/img/esquema-semana.svg', 'Esquema de la última semana de Jesús, de domingo a domingo, y del viernes hora por hora, del Sanedrín al amanecer hasta la sepultura antes de la puesta del sol', 'La última semana de Jesús, de domingo a domingo.', 'La semana'),
        tabla({
          titulo: 'Marzo y abril del año 33',
          cab: ['Día', 'Fecha', 'Qué pasó', 'Pasajes'],
          filas: [
            ['Viernes o sábado', '27–28 de marzo (8 de nisán)', 'Llegada a Betania, «seis días antes de la pascua»; cena en casa de Lázaro', 'Jn 12:1-11'],
            ['Domingo', '29 de marzo', 'Entrada triunfal en Jerusalén', 'Mr 11:1-11; Jn 12:12-19'],
            ['Lunes', '30 de marzo', 'La higuera sin fruto; purificación del templo', 'Mr 11:12-19'],
            ['Martes', '31 de marzo', 'Preguntas en el templo; la ofrenda de la viuda; discurso del monte de los Olivos', 'Mr 11:20–13:37'],
            ['Miércoles', '1 de abril', 'Complot de los principales sacerdotes y traición de Judas', 'Mr 14:1-2, 10-11'],
            ['Jueves', '2 de abril (al anochecer comienza el 14 de nisán)', 'Última cena, Getsemaní y arresto', 'Mr 14:12-52; Jn 13–18'],
            ['Viernes', '3 de abril (14 de nisán)', 'Juicios, crucifixión y sepultura antes del atardecer', 'Mr 14:53–15:47; Jn 18–19'],
            ['Sábado', '4 de abril', 'En el sepulcro; las mujeres reposan', 'Lc 23:56; Mt 27:62-66'],
            ['Domingo', '5 de abril', 'Resurrección al amanecer', 'Mt 28; Mr 16; Lc 24; Jn 20']
          ],
          nota: 'Fechas del calendario juliano para el año 33. El orden de los días es el tradicional; algunos ubican la entrada triunfal el lunes.'
        })
      ],
      texto: [
        'Ninguna parte de la vida de Jesús está contada con tanto detalle como su última semana. Los cuatro evangelios le dedican cerca de un tercio de sus páginas, y Marcos va marcando los días uno por uno: «al día siguiente» (Mr 11:12), «por la mañana» (Mr 11:20), «dos días después era la pascua» (Mr 14:1), «el primer día de la fiesta de los panes sin levadura» (Mr 14:12).',
        { h: 'De Betania a Jerusalén' },
        'Juan da el punto de partida: «Seis días antes de la pascua, vino Jesús a Betania» (Jn 12:1). Allí María lo ungió con un perfume de nardo. «El siguiente día» entró en Jerusalén montado en un asno, mientras la multitud que había venido a la fiesta lo recibía con ramas de palmera (Jn 12:12-13). Según el orden tradicional, fue un domingo. Era también el tiempo en que cada familia apartaba el cordero de la Pascua, el 10 de nisán (Éx 12:3).',
        { h: 'Los días en el templo' },
        'El lunes Jesús volvió a purificar el templo. El martes fue un día largo de enseñanza: las autoridades le hicieron preguntas sobre su autoridad, el tributo al César y la resurrección, y Jesús terminó el día en el monte de los Olivos anunciando la destrucción del templo y su venida en gloria (Mr 13). El miércoles los principales sacerdotes buscaban cómo prenderlo, y Judas se ofreció a entregarlo (Mr 14:1-2, 10-11).',
        { h: 'Del jueves al domingo' },
        'El jueves por la tarde Jesús preparó la Pascua con sus discípulos. Para el calendario judío, al ponerse el sol comenzaba el 14 de nisán. Esa noche lavó los pies de los discípulos, instituyó la Cena del Señor, oró en Getsemaní y fue arrestado. Antes del amanecer del viernes compareció ante Anás, Caifás y el Sanedrín; por la mañana, ante Pilato y Herodes Antipas. A la hora tercera fue crucificado, a la hora novena murió, y antes de la puesta del sol fue sepultado (Mr 15:25, 34, 42-46). El domingo, al amanecer del primer día de la semana, la tumba estaba vacía (Mt 28:1).',
        ir('Ver la Semana Santa, día por día, en la Armonía de los evangelios', R.armonia),
        ir('Ver en El mundo judío: la última semana', R.mundo + '#jesus/6')
      ],
      pensar: 'Los evangelistas dedicaron a una sola semana casi un tercio de sus libros. ¿Qué te dice eso sobre lo que Dios quiere que entiendas por encima de todo?'
    },
    {
      id: 'que-dia', n: '¿Miércoles, jueves o viernes?', ref: 'Mateo 12:40; Marcos 15:42; Lucas 24:21; 1 Corintios 15:4; Ester 4:16; 5:1', fecha: 33,
      visual: [
        esq('cr-dia-cruz.svg', 'Tres filas comparan las propuestas de crucifixión el miércoles, el jueves y el viernes, con los días y las noches contados hasta la resurrección del domingo al amanecer', 'Tres propuestas para el día de la cruz, y cómo cuenta cada una los «tres días».', 'Tres propuestas'),
        esq('../medidas-biblicas/img/esquema-tres-dias.svg', 'Cuenta inclusiva de los tres días: viernes (muerte y sepultura antes del atardecer), sábado (en el sepulcro) y domingo (resurrección al amanecer): primer, segundo y tercer día', 'La cuenta inclusiva: viernes, sábado y domingo son tres días.', 'La cuenta inclusiva'),
        cita('Mateo 12:40', 'Porque como estuvo Jonás en el vientre del gran pez tres días y tres noches, así estará el Hijo del Hombre en el corazón de la tierra tres días y tres noches.')
      ],
      texto: [
        'La iglesia ha recordado siempre la crucifixión en viernes. Pero Jesús dijo que estaría «en el corazón de la tierra tres días y tres noches» (Mt 12:40), y entre el viernes por la tarde y el domingo de madrugada no hay setenta y dos horas. Por eso algunos proponen que Jesús murió un miércoles o un jueves.',
        { h: 'Lo que dicen los evangelios' },
        'Los cuatro evangelios dicen que Jesús murió el día de «la preparación», y Marcos lo explica: «es decir, la víspera del día de reposo» (Mr 15:42). En griego, «preparación» era, y sigue siendo, el nombre del viernes. Las mujeres vieron dónde lo sepultaban, volvieron a preparar especias y «descansaron el día de reposo, conforme al mandamiento» (Lc 23:56), y fueron al sepulcro al amanecer del primer día de la semana. Todo encaja con un solo sábado en medio.',
        'Además, el Nuevo Testamento dice muchas más veces que Jesús resucitó «al tercer día» (Mt 16:21; Lc 24:7; 1 Co 15:4) que «después de tres días». Los discípulos de Emaús, el domingo por la tarde, dijeron: «hoy es ya el tercer día que esto ha acontecido» (Lc 24:21). Con la cruz el miércoles, el domingo sería el quinto día.',
        { h: '«Tres días y tres noches»' },
        'Para un judío del siglo I, «tres días y tres noches» era una manera de decir «tres días», contando cualquier parte del día como un día completo. El libro de Ester lo muestra: Ester pidió que ayunaran por ella «tres días, noche y día», y entró a ver al rey «al tercer día» (Est 4:16; 5:1). Un maestro judío de alrededor del año 100 lo dijo así: un día y una noche forman una unidad, y una parte de ella cuenta como el todo.',
        { posturas: {
          titulo: '¿Qué día murió Jesús?',
          a: { n: 'El viernes', t: 'Los evangelios llaman a ese día «la preparación», la víspera del sábado (Mr 15:42; Lc 23:54). Hay un solo día de reposo entre la sepultura y la resurrección, y el domingo es «el tercer día» (Lc 24:21). La expresión de Mateo 12:40 se entiende con la cuenta inclusiva, como en Ester 4:16 y 5:1. Es la postura de la iglesia desde sus comienzos y la que sigue el sitio.' },
          b: { n: 'El miércoles o el jueves', t: 'Quienes leen «tres días y tres noches» como setenta y dos horas exactas ubican la cruz el miércoles, con la resurrección el sábado por la tarde, o el jueves, con dos días de reposo seguidos: el de la Pascua y el sábado. Señalan que Juan llama a ese sábado «de gran solemnidad» (Jn 19:31), porque coincidía con la fiesta.' },
          c: 'La segunda postura toma en serio las palabras de Jesús, pero obliga a leer «al tercer día» de manera forzada y a suponer dos sábados que los evangelios no mencionan. Lo esencial es lo que todos comparten: Jesús murió de verdad, fue sepultado y resucitó corporalmente el primer día de la semana.'
        } },
        ir('Ver en Pesos, medidas, monedas y horas: la semana y el tercer día', R.medidas + '#tiempo/4')
      ],
      pensar: 'Jonás pasó tres días en el vientre del gran pez y salió con vida; Jesús pasó tres días en el sepulcro y resucitó. ¿Qué significa para ti que la señal que Jesús ofreció fue su resurrección?'
    },
    {
      id: 'pascua-juan', n: 'La Pascua en Juan y en los otros evangelios', ref: 'Marcos 14:12; Lucas 22:15; Juan 13:1; 18:28; 19:14, 31; 1 Corintios 5:7', fecha: 33,
      visual: [
        img('cr-pascua-corderos.webp', 'Sacerdotes con túnicas de lino blanco, en fila, pasan de mano en mano cuencos de oro y plata en el atrio del templo de Jerusalén, entre una multitud de hombres con sus corderos, a la luz dorada de la tarde', 'La tarde del 14 de nisán: los corderos de la Pascua en el templo.'),
        tabla({
          titulo: 'Dos maneras de nombrar los mismos días',
          cab: ['Mateo, Marcos y Lucas', 'Juan'],
          filas: [
            ['La cena del jueves es la Pascua: «el primer día de la fiesta de los panes sin levadura, cuando sacrificaban el cordero de la pascua» (Mr 14:12)', '«Antes de la fiesta de la pascua» (Jn 13:1)'],
            ['«¡Cuánto he deseado comer con vosotros esta pascua antes que padezca!» (Lc 22:15)', 'El viernes por la mañana, las autoridades no entran al pretorio «para no contaminarse, y así poder comer la pascua» (Jn 18:28)'],
            ['Jesús muere en «la preparación», la víspera del sábado (Mr 15:42)', 'Jesús muere en «la preparación de la pascua» (Jn 19:14, 31)']
          ]
        }),
        cita('1 Corintios 5:7', 'Limpiaos, pues, de la vieja levadura, para que seáis nueva masa, sin levadura como sois; porque nuestra pascua, que es Cristo, ya fue sacrificada por nosotros.')
      ],
      texto: [
        'Hay una pregunta clásica sobre la última semana. Mateo, Marcos y Lucas presentan la última cena del jueves como la cena de la Pascua (Mr 14:12; Lc 22:15). Juan, en cambio, dice que el viernes por la mañana las autoridades todavía no habían comido la Pascua (Jn 18:28), y que Jesús murió el día de «la preparación de la pascua» (Jn 19:14), cuando en el templo se sacrificaban los corderos. ¿Cuándo fue la Pascua?',
        { posturas: {
          titulo: '¿Cómo se armonizan los evangelios?',
          a: { n: 'Dos maneras de contar el día', t: 'En tiempos de Jesús no todos los judíos contaban el día de la misma forma. Los galileos y muchos fariseos lo contaban de amanecer a amanecer, y celebraron la Pascua el jueves por la noche; los de Judea y los saduceos del templo lo contaban de atardecer a atardecer, y sacrificaron sus corderos el viernes por la tarde. Así, Jesús comió la Pascua con sus discípulos el jueves, y murió a la hora en que se sacrificaban los corderos de la mayoría.' },
          b: { n: '«Comer la pascua» es la fiesta completa', t: 'La Pascua duraba siete días junto con los panes sin levadura, y se ofrecían otros sacrificios y comidas festivas durante la semana. Según esta lectura, la cena del jueves fue la Pascua, como dicen los otros tres evangelios; Juan 18:28 se refiere a la comida festiva del día siguiente, y «la preparación de la pascua» significa «el viernes de la semana de Pascua».' },
          c: 'Las dos explicaciones son razonables y conservan la fecha del viernes. Lo que ninguna discute es lo que Juan quiere destacar: Jesús murió como el verdadero cordero de la Pascua. Pablo lo dijo así: «nuestra pascua, que es Cristo, ya fue sacrificada por nosotros» (1 Co 5:7).'
        } },
        { h: 'El cordero sin hueso quebrado' },
        'Juan subraya este sentido. Juan el Bautista había presentado a Jesús como «el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29). En la cruz, los soldados no le quebraron las piernas, y Juan ve allí el cumplimiento de la ley de la Pascua: «No será quebrado hueso suyo» (Jn 19:36; Éx 12:46). En la cena, Jesús tomó el pan y la copa de la Pascua y les dio un sentido nuevo: su cuerpo entregado y su sangre del nuevo pacto (Lc 22:19-20).',
        'La Pascua recordaba la noche en que la sangre del cordero protegió a Israel y Dios lo sacó de la esclavitud de Egipto. Jesús eligió ese día para morir, y con su sangre libró de la esclavitud del pecado a todos los que creen en él.',
        ir('Ver en El mundo judío: las fiestas de peregrinación', R.mundo + '#fe/2')
      ],
      pensar: 'El cordero de la Pascua se elegía sin defecto y su sangre se ponía en las puertas. ¿Estás tú cubierto por la sangre de Cristo, nuestra pascua?'
    },
    {
      id: 'anio-cruz', n: 'El año de la cruz: ¿30 o 33?', ref: 'Lucas 3:1; Juan 2:20; Juan 19:12; Hechos 2:1', fecha: 33,
      visual: [
        esq('cr-anio-cruz.svg', 'Escala del 26 al 36 d.C. con el gobierno de Pilato y el sumo sacerdocio de Caifás, los años en que el 14 de nisán cayó en viernes (30 y 33), el año quince de Tiberio y la caída de Sejano en el 31', 'Por qué la cruz solo puede estar en el año 30 o en el 33.', 'El año'),
        tabla({
          titulo: 'Los datos que deciden',
          cab: ['Dato', 'Año 30', 'Año 33'],
          filas: [
            ['Pilato (26–36) y Caifás (18–36)', 'Encaja', 'Encaja'],
            ['14 de nisán en viernes', '7 de abril', '3 de abril'],
            ['Año quince de Tiberio (Lc 3:1)', 'Solo si se cuenta desde el año 12', 'Encaja contando desde el 14'],
            ['Cuarenta y seis años del templo (Jn 2:20)', 'Pascua del 30 sería la última, no la primera', 'Pascua del 30 es la primera'],
            ['Duración del ministerio', 'Poco más de dos años, con comienzo en el 27–28', 'Unos tres años y medio, desde el 29'],
            ['«No eres amigo de César» (Jn 19:12)', 'Pilato aún tenía el respaldo de Sejano', 'Después de la caída de Sejano (31), Pilato estaba vulnerable']
          ]
        })
      ],
      texto: [
        'Juntando los datos, el año de la crucifixión queda entre dos candidatos: el 30 y el 33. Los dos tienen defensores serios. El sitio sigue el 33, como la Armonía de los evangelios.',
        { h: 'Lo que reduce las opciones' },
        'Jesús murió bajo Poncio Pilato y siendo Caifás sumo sacerdote. Los dos dejaron sus cargos en el 36. Murió un viernes, el día de la Pascua o en la semana de la Pascua. Como el calendario judío seguía la luna, los astrónomos pueden calcular en qué día de la semana cayó el 14 de nisán en cada año. Entre el 26 y el 36, los años en que pudo caer en viernes son el 30 (7 de abril) y el 33 (3 de abril); el 27 es dudoso y demasiado temprano para los demás datos.',
        { h: 'A favor del 33' },
        'El año quince de Tiberio, contado desde la muerte de Augusto, es el 28–29 (Lc 3:1). Con un ministerio que incluye al menos tres o cuatro Pascuas, la cruz no puede estar antes del 32, y la Pascua cae en viernes en el 33. El dato de los cuarenta y seis años del templo ubica la primera Pascua del ministerio en el 30 (Jn 2:20). Hay también un detalle político: en el año 31 cayó en Roma Sejano, el poderoso protector de Pilato, y Tiberio persiguió a sus allegados. Eso explica por qué en el juicio de Jesús un gobernador que antes había desafiado a los judíos cedió ante la amenaza: «Si a éste sueltas, no eres amigo de César» (Jn 19:12).',
        { posturas: {
          titulo: '¿En qué año murió Jesús?',
          a: { n: 'Año 33', t: 'Encaja con la cuenta normal de los años de Tiberio, con los cuarenta y seis años del templo, con un ministerio de tres años y medio y con la situación de Pilato después de la caída de Sejano. Es la fecha que sostienen muchos estudiosos que defienden la fiabilidad de los evangelios, y la que da el cálculo de las setenta semanas de Daniel (estación IV.5).' },
          b: { n: 'Año 30', t: 'Es la fecha que prefieren muchos historiadores. Supone que Lucas contó los años de Tiberio desde el 12, o que el ministerio de Jesús duró poco más de dos años. Algunos señalan que deja más tiempo para los hechos de Hechos antes de la conversión de Pablo.' },
          c: 'La diferencia es de tres años y no cambia nada del relato ni de la fe. Este recurso usa el 33, y el sitio ajustó a esa fecha los recursos que usaban el 30.'
        } },
        'Así, la crucifixión ocurrió con mucha probabilidad el viernes 3 de abril del año 33, a la hora novena, unas tres de la tarde, a la hora en que se ofrecía el sacrificio de la tarde en el templo.',
        ir('Ver en El mundo judío: Pilato, de Coponio a Pilato', R.mundo + '#poder/1')
      ],
      pensar: 'Pilato soltó a Barrabás y entregó a Jesús por miedo a perder el favor del emperador. ¿En qué momentos el temor a lo que piensen otros te lleva a callar lo que sabes que es justo?'
    },
    {
      id: 'setenta-semanas', n: 'Las setenta semanas y el Mesías', ref: 'Daniel 9:24-27; Nehemías 2:1-8; Lucas 19:41-44', fecha: [-444, 33],
      visual: [
        esq('cr-setenta-semanas.svg', 'Línea desde la orden de Artajerjes a Nehemías en el mes de nisán del 444 a.C. hasta el año 33 d.C.: siete semanas y sesenta y dos semanas, 483 años proféticos de 360 días o 173 880 días; después, un paréntesis, y la semana setenta en el futuro', 'Sesenta y nueve semanas: de la orden de Artajerjes al Mesías Príncipe.', 'Daniel 9'),
        cita('Daniel 9:24-27', 'Setenta semanas están determinadas sobre tu pueblo y sobre tu santa ciudad, para terminar la prevaricación, y poner fin al pecado, y expiar la iniquidad, para traer la justicia perdurable, y sellar la visión y la profecía, y ungir al Santo de los santos. Sabe, pues, y entiende, que desde la salida de la orden para restaurar y edificar a Jerusalén hasta el Mesías Príncipe, habrá siete semanas, y sesenta y dos semanas; se volverá a edificar la plaza y el muro en tiempos angustiosos. Y después de las sesenta y dos semanas se quitará la vida al Mesías, mas no por sí; y el pueblo de un príncipe que ha de venir destruirá la ciudad y el santuario; y su fin será con inundación, y hasta el fin de la guerra durarán las devastaciones. Y por otra semana confirmará el pacto con muchos; a la mitad de la semana hará cesar el sacrificio y la ofrenda. Después con la muchedumbre de las abominaciones vendrá el desolador, hasta que venga la consumación, y lo que está determinado se derrame sobre el desolador.'),
        cita('Nehemías 2:1', 'Sucedió en el mes de Nisán, en el año veinte del rey Artajerjes, que estando ya el vino delante de él, tomé el vino y lo serví al rey. Y como yo no había estado antes triste en su presencia,', 'La orden')
      ],
      texto: [
        'Quinientos años antes de Jesús, el ángel Gabriel le dio a Daniel una profecía con números: setenta semanas fueron determinadas sobre su pueblo y su ciudad. Desde la orden para restaurar y edificar Jerusalén «hasta el Mesías Príncipe, habrá siete semanas, y sesenta y dos semanas», y después de las sesenta y dos semanas «se quitará la vida al Mesías, mas no por sí» (Dn 9:25-26).',
        { h: 'Semanas de años' },
        'Las «semanas» de Daniel son períodos de siete años, como los años sabáticos de la ley (Lv 25:8). Sesenta y nueve semanas son 483 años. Muchos intérpretes cuentan esos años como años proféticos de 360 días, como los que usan el mismo Daniel y Apocalipsis, donde «tiempo, y tiempos, y medio tiempo» equivalen a 1.260 días (Dn 7:25; Ap 12:6, 14). Así, 483 años proféticos son 173.880 días.',
        { h: 'Desde Artajerjes' },
        'La orden «para restaurar y edificar a Jerusalén», con sus muros, fue la que el rey Artajerjes dio a Nehemías «en el mes de Nisán, en el año veinte» de su reinado (Neh 2:1-8), es decir, en la primavera del 444 a.C. Contando 173.880 días desde allí, el estudioso Harold Hoehner llegó al 30 de marzo del año 33, en los días de la entrada triunfal de Jesús en Jerusalén. Ese día Jesús lloró sobre la ciudad y dijo que no había conocido «el tiempo de tu visitación» (Lc 19:44). Pocos días después, como dijo Gabriel, se quitó la vida al Mesías, «mas no por sí».',
        { posturas: {
          titulo: '¿Desde dónde se cuentan las sesenta y nueve semanas?',
          a: { n: 'Desde la orden a Nehemías (444 a.C.)', t: 'Es la única orden que menciona expresamente la reconstrucción de la ciudad y sus muros. Con años proféticos de 360 días, las sesenta y nueve semanas llegan a la última semana de Jesús en el año 33, y su muerte ocurre «después» de ellas.' },
          b: { n: 'Desde la orden a Esdras (458 a.C.)', t: 'Otros cuentan desde el decreto de Artajerjes a Esdras (Esd 7), con años solares. 483 años después se llega al 26–27 d.C., que según ellos sería el comienzo del ministerio de Jesús, cuando fue ungido por el Espíritu.' },
          c: 'Las dos lecturas ven en Jesús al Mesías Príncipe y en su muerte el cumplimiento de Daniel 9:26. Ambas son defendidas por intérpretes que confían en la exactitud de la profecía.'
        } },
        { h: 'La semana que falta' },
        'La profecía menciona setenta semanas, pero solo se han cumplido sesenta y nueve. Entre la muerte del Mesías y la semana setenta, Daniel anuncia la destrucción de la ciudad y del santuario (Dn 9:26), que ocurrió en el año 70. La semana setenta, con el pacto del príncipe que ha de venir, está todavía en el futuro: es el tiempo de la gran tribulación, antes de la venida de Cristo en gloria. Dios no ha olvidado su calendario.',
        ir('Ver en Daniel: las setenta semanas', R.daniel + '#comentario/12'),
        ir('Ver Los últimos tiempos: la semana setenta', R.escatologia)
      ],
      pensar: 'Dios anunció con siglos de anticipación el tiempo de la venida y la muerte del Mesías, y lo cumplió. ¿Qué confianza te da eso respecto a las promesas que todavía faltan por cumplirse?'
    },
    {
      id: 'pentecostes', n: 'La resurrección, los cuarenta días y Pentecostés', ref: 'Mateo 28:1-6; Hechos 1:3-12; 2:1-4; Levítico 23:10-16; 1 Corintios 15:20', fecha: 33,
      visual: [
        esq('../medidas-biblicas/img/esquema-pentecostes.svg', 'Línea de cincuenta días: la Pascua y la muerte de Jesús, la resurrección el día de las primicias, cuarenta días de apariciones, la ascensión, diez días de espera en oración y el día de Pentecostés', 'De las primicias a Pentecostés: cincuenta días.', 'Cincuenta días'),
        img('../hechos/img/hechos-ascension.webp', 'Un grupo de discípulos mira hacia el cielo en la cima del monte de los Olivos, con Jerusalén al fondo', 'La ascensión, cuarenta días después de la resurrección (Hch 1:9-11).'),
        tabla({
          titulo: 'Del 3 de abril al 24 de mayo del 33',
          cab: ['Fecha', 'Día', 'Qué pasó'],
          filas: [
            ['3 de abril', 'Viernes, 14 de nisán', 'Crucifixión y sepultura'],
            ['5 de abril', 'Domingo, 16 de nisán: las primicias', 'Resurrección; apariciones a las mujeres, a Pedro, a los de Emaús y a los diez'],
            ['12 de abril', 'Domingo', 'Aparición a los once, con Tomás (Jn 20:26)'],
            ['Abril y mayo', '', 'Apariciones en Galilea y a más de quinientos hermanos (Jn 21; 1 Co 15:6)'],
            ['14 de mayo', 'Jueves, cuarenta días después', 'Ascensión en el monte de los Olivos'],
            ['24 de mayo', 'Domingo, cincuenta días después de las primicias', 'Pentecostés: el Espíritu Santo es derramado']
          ]
        })
      ],
      texto: [
        'El calendario de las fiestas de Israel le da a la resurrección y a Pentecostés su sentido. La ley mandaba que, el día siguiente al sábado de la semana de la Pascua, el sacerdote presentara ante Dios la primera gavilla de la cosecha, las primicias (Lv 23:10-11). Ese día, el domingo 5 de abril del 33, Jesús resucitó. Pablo lo dice así: «Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho» (1 Co 15:20). Su resurrección es la primera gavilla de una gran cosecha.',
        { h: 'Cuarenta días' },
        'Lucas dice que Jesús se presentó vivo a sus discípulos «con muchas pruebas indubitables, apareciéndoseles durante cuarenta días y hablándoles acerca del reino de Dios» (Hch 1:3). Contando desde el domingo de la resurrección, el día cuarenta cae el jueves 14 de mayo. Ese día Jesús llevó a sus discípulos al monte de los Olivos, les mandó esperar la promesa del Padre y fue alzado al cielo, y los ángeles anunciaron que volvería de la misma manera (Hch 1:4-11).',
        { h: 'Cincuenta días' },
        'Desde el día de las primicias, la ley mandaba contar siete semanas, cincuenta días, hasta la fiesta de las Semanas, en la que se ofrecía el pan nuevo de la cosecha (Lv 23:15-16). En griego, «cincuentena» se dice Pentecostés. En el año 33, ese día fue el domingo 24 de mayo. Los ciento veinte discípulos llevaban diez días orando juntos (Hch 1:14-15), y «cuando llegó el día de Pentecostés» fueron todos llenos del Espíritu Santo y comenzaron a hablar en otras lenguas (Hch 2:1-4). Ese día se convirtieron unas tres mil personas: las primicias de la iglesia.',
        { h: 'Un calendario cumplido' },
        'La Pascua, las primicias y Pentecostés, las tres primeras fiestas del año judío, se cumplieron en Cristo y en su iglesia en el orden exacto y en sus días: la muerte del Cordero, la resurrección de las primicias y la cosecha del Espíritu. Las fiestas del otoño, las trompetas, la expiación y los tabernáculos, señalan hacia lo que Dios todavía hará.',
        ir('Ver en Hechos: el día de Pentecostés', R.hechos + '#comentario/2'),
        ir('Ver en Pesos, medidas, monedas y horas: cincuenta días y la hora tercera', R.medidas + '#taller/6')
      ],
      pensar: 'La misma promesa del Padre que los discípulos esperaron diez días en oración está disponible hoy (Hch 2:39). ¿Has buscado ser lleno del Espíritu Santo, como ellos?'
    }
  ];

  Object.assign(window.__CR, { ministerio, semana });
})();
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, linea, R } = window.__CR;

  // ================== RUTA V. La iglesia de Jerusalén y la expansión ==================
  const jerusalen = [
    {
      id: 'pentecostes-esteban', n: 'De Pentecostés a Esteban', ref: 'Hechos 2:41-47; 4:4-6; 6:1-7; 7:54–8:4', fecha: [33, 34],
      visual: [
        img('../hechos/img/hechos-esteban.webp', 'Esteban, de rodillas fuera de los muros de Jerusalén, mira al cielo mientras una multitud lo apedrea; a un lado, un joven fariseo cuida los mantos', 'La muerte de Esteban; los testigos dejan sus ropas a los pies de Saulo (Hch 7:58).'),
        pasos([
          { t: 'Pentecostés del 33: nace la iglesia en Jerusalén (Hch 2)', fecha: 33, estado: { view: V.judea, capas: ['iglesia-30'], lugares: ['jerusalen'] } },
          { t: 'La persecución tras la muerte de Esteban dispersa a los creyentes por Judea y Samaria (Hch 8:1-4)', fecha: 34, estado: { view: V.palestina, capas: ['iglesia-34'], lugares: ['jerusalen', 'samaria', 'gaza', 'asdod', 'cesarea'], trazos: ['hch-samaria', 'hch-felipe'] } }
        ]),
        tabla({
          titulo: 'Los primeros capítulos de Hechos',
          cab: ['Capítulos', 'Qué pasó', 'Años'],
          filas: [
            ['Hch 2', 'Pentecostés: unos tres mil convertidos', 'Mayo del 33'],
            ['Hch 3–4', 'El cojo de la puerta la Hermosa; Pedro y Juan ante Anás y Caifás', '33'],
            ['Hch 5', 'Ananías y Safira; los apóstoles azotados; el consejo de Gamaliel', '33–34'],
            ['Hch 6', 'Los siete; muchos sacerdotes obedecen a la fe', '34'],
            ['Hch 7–8', 'Muerte de Esteban; persecución; Felipe en Samaria', '34']
          ],
          nota: 'Fechas aproximadas: Hechos no da años para estos capítulos, solo el orden de los hechos.'
        })
      ],
      texto: [
        'Hechos no dice cuánto tiempo pasó entre Pentecostés y la muerte de Esteban. Lucas cuenta en pocos capítulos un período de crecimiento rápido: la iglesia pasa de ciento veinte personas a tres mil, luego a cinco mil varones (Hch 4:4), y «el número de los discípulos se multiplicaba grandemente en Jerusalén; también muchos de los sacerdotes obedecían a la fe» (Hch 6:7).',
        { h: 'Un período breve' },
        'Varios datos sugieren que todo esto ocurrió en poco tiempo, uno o dos años. Las autoridades que juzgan a los apóstoles son las mismas que condenaron a Jesús: «el sumo sacerdote Anás, y Caifás y Juan y Alejandro» (Hch 4:6). Gamaliel recuerda a dos agitadores de los años anteriores, Teudas y Judas el galileo, pero no a otros más recientes (Hch 5:36-37). Y la conversión de Saulo, que ocurrió poco después de la muerte de Esteban, tiene que ubicarse hacia el 34 o el 35 para que encajen los años que Pablo cuenta en Gálatas (estación V.2). Con la cruz en el 33, la muerte de Esteban queda hacia el 34.',
        { h: '¿Podía el Sanedrín ejecutar a Esteban?' },
        'En el juicio de Jesús, los judíos dijeron a Pilato que no les estaba permitido dar muerte a nadie (Jn 18:31). ¿Cómo pudieron apedrear a Esteban? El relato de Hechos muestra un linchamiento más que una sentencia: la multitud se enfureció, cerró los oídos, lo arrastró fuera de la ciudad y lo apedreó (Hch 7:57-58). Las autoridades romanas, que estaban en Cesarea, no siempre intervenían a tiempo. Treinta años después, Josefo cuenta un caso parecido con Jacobo, el hermano del Señor (estación VII.1).',
        { h: 'La dispersión' },
        'La muerte de Esteban desató «una gran persecución contra la iglesia que estaba en Jerusalén; y todos fueron esparcidos por las tierras de Judea y de Samaria, salvo los apóstoles» (Hch 8:1). Lo que parecía una derrota fue el comienzo del segundo círculo de Hechos 1:8. Felipe predicó en Samaria y al etíope en el camino de Gaza, y los esparcidos «iban por todas partes anunciando el evangelio» (Hch 8:4).',
        ir('Ver en Hechos: la iglesia madre de Jerusalén', R.hechos + '#expansion/2')
      ],
      pensar: 'La persecución esparció a los creyentes, y ellos llevaron el evangelio a cada lugar donde llegaron. ¿Cómo podría Dios usar las dificultades que te han movido de lugar para extender su reino?'
    },
    {
      id: 'saulo', n: 'La conversión de Pablo y los años de Gálatas', ref: 'Hechos 9:1-30; Gálatas 1:13–2:1; 2 Corintios 11:32-33', fecha: [34, 37],
      visual: [
        esq('cr-pablo-galatas.svg', 'Dos columnas paralelas, Hechos y Gálatas, con los años 34 a 50: conversión, Arabia y Damasco, la huida en el canasto y la primera visita a Jerusalén tres años después, los años en Siria y Cilicia, Antioquía, la visita con la ofrenda, el primer viaje y el concilio, catorce años después', 'Los «tres años» y los «catorce años» de Gálatas, al lado del relato de Hechos.', 'Gálatas y Hechos'),
        img('../viajes-pablo/img/vp-canasta.webp', 'De noche, unos hombres bajan un canasto con un hombre adentro por una ventana de la muralla de Damasco', 'La huida de Damasco en un canasto (2 Co 11:33).'),
        cita('Gálatas 1:15-24', 'Pero cuando agradó a Dios, que me apartó desde el vientre de mi madre, y me llamó por su gracia, revelar a su Hijo en mí, para que yo le predicase entre los gentiles, no consulté en seguida con carne y sangre, ni subí a Jerusalén a los que eran apóstoles antes que yo; sino que fui a Arabia, y volví de nuevo a Damasco. Después, pasados tres años, subí a Jerusalén para ver a Pedro, y permanecí con él quince días; pero no vi a ningún otro de los apóstoles, sino a Jacobo el hermano del Señor. En esto que os escribo, he aquí delante de Dios que no miento. Después fui a las regiones de Siria y de Cilicia, y no era conocido de vista a las iglesias de Judea, que eran en Cristo; solamente oían decir: Aquel que en otro tiempo nos perseguía, ahora predica la fe que en otro tiempo asolaba. Y glorificaban a Dios en mí.')
      ],
      texto: [
        'Para los primeros años de Pablo, tenemos una ayuda especial: él mismo contó su historia en la carta a los Gálatas, con cifras. Lo hizo para mostrar que no había recibido su evangelio de los apóstoles de Jerusalén, sino de Cristo (Gá 1:11-12), y por eso detalla cuándo y por cuánto tiempo los vio.',
        { h: 'Tres años' },
        'Después de su conversión en el camino a Damasco, Pablo no subió a Jerusalén, sino que fue «a Arabia, y volví de nuevo a Damasco. Después, pasados tres años, subí a Jerusalén para ver a Pedro, y permanecí con él quince días» (Gá 1:17-18). Con la cuenta inclusiva, «pasados tres años» puede significar dos años y algo. Si la conversión fue hacia el 34 o el 35, la primera visita a Jerusalén fue hacia el 36 o el 37.',
        'Hay un ancla que confirma el dato. Pablo cuenta que en Damasco «el gobernador de la provincia del rey Aretas guardaba la ciudad» para prenderlo, y que escapó por el muro en un canasto (2 Co 11:32-33). Aretas IV fue rey de los nabateos hasta el 40, y todo indica que tuvo influencia sobre Damasco en los últimos años de Tiberio o en los de Calígula, entre el 37 y el 40. La huida de Pablo cae, por lo tanto, dentro de esos años.',
        { h: 'Catorce años' },
        'Después Pablo fue «a las regiones de Siria y de Cilicia» (Gá 1:21); Hechos dice que los hermanos lo enviaron a Tarso (Hch 9:30). Allí pasó varios años de los que casi nada sabemos, hasta que Bernabé fue a buscarlo para que lo ayudara en Antioquía (Hch 11:25-26). Luego escribe: «Después, pasados catorce años, subí otra vez a Jerusalén con Bernabé» (Gá 2:1). Los catorce años se cuentan probablemente desde la conversión, y llevan a los años 47 o 48: la visita con la ofrenda para el hambre (Hch 11:30) o la del concilio (Hch 15), según cómo se lean (estación VI.2).',
        { ejercicio: {
          pregunta: '¿Para qué da Pablo tantas cifras en Gálatas 1 y 2?',
          opciones: [
            { t: 'Para que sus lectores pudieran armar una cronología de su vida.', ok: false, por_que: 'Las cifras sirven hoy para eso, pero no era su propósito.' },
            { t: 'Para mostrar que su evangelio no lo recibió de los apóstoles de Jerusalén, sino por revelación de Jesucristo.', ok: true, por_que: 'Pablo insiste en que pasó años sin ver a los apóstoles, y que cuando los vio fue por poco tiempo (Gá 1:11-12, 17-19).' },
            { t: 'Para explicar por qué tardó tanto en comenzar a predicar.', ok: false, por_que: 'Pablo predicó desde el principio en Damasco (Hch 9:20) y en las regiones de Siria y Cilicia (Gá 1:23).' }
          ],
          explicacion: 'Al leer los datos cronológicos de la Biblia, conviene preguntar primero para qué los da el autor: así se evita sacarles más de lo que dicen.'
        } },
        ir('Ver en Los viajes de Pablo: Damasco, Arabia y los años de silencio', R.pablo + '#recorrido/2')
      ],
      pensar: 'Pablo pasó varios años en Arabia, Damasco y Tarso antes de que Bernabé lo llamara a Antioquía. ¿Qué te enseña ese tiempo escondido sobre cómo prepara Dios a sus siervos?'
    },
    {
      id: 'cornelio-antioquia', n: 'Cornelio y Antioquía', ref: 'Hechos 9:31-43; 10:1-48; 11:19-26', fecha: [37, 45],
      visual: [
        pasos([
          { t: 'Las iglesias tienen paz por toda Judea, Galilea y Samaria (Hch 9:31)', fecha: 37, estado: { view: V.palestina, capas: ['iglesia-37'], lugares: ['jerusalen', 'samaria', 'damasco', 'cesarea'] } },
          { t: 'Pedro recorre Lida y Jope y llega a la casa de Cornelio en Cesarea (Hch 9:32–10:48)', fecha: 40, estado: { view: V.palestina, capas: ['iglesia-40'], lugares: ['jerusalen', 'lida', 'jope', 'cesarea'], trazos: ['hch-pedro'] } },
          { t: 'Los esparcidos llegan a Fenicia, Chipre y Antioquía; Bernabé busca a Saulo en Tarso (Hch 11:19-26)', fecha: [42, 45], estado: { view: V.levante, capas: ['iglesia-44'], lugares: ['jerusalen', 'tiro', 'sidon', 'antioquia', 'tarso', 'salamina-chipre'], trazos: ['hch-antioquia', 'pablo-antioquia'] } }
        ]),
        tabla({
          titulo: 'Mientras tanto, en Roma y en Judea',
          cab: ['Año', 'Qué pasó'],
          filas: [
            ['36', 'Pilato es destituido; Caifás deja el sumo sacerdocio'],
            ['37', 'Muere Tiberio; Calígula, emperador; Agripa I recibe el norte del país'],
            ['39–40', 'Calígula ordena poner su estatua en el templo de Jerusalén; la orden no se cumple'],
            ['41', 'Asesinato de Calígula; Claudio, emperador; Agripa I, rey de toda Judea'],
            ['c. 44–45', 'Bernabé y Saulo enseñan un año en Antioquía; los discípulos son llamados cristianos']
          ]
        })
      ],
      texto: [
        'Después de la conversión de Saulo, Lucas resume: «Entonces las iglesias tenían paz por toda Judea, Galilea y Samaria; y eran edificadas, andando en el temor del Señor, y se acrecentaban fortalecidas por el Espíritu Santo» (Hch 9:31). Es un tiempo del que no da fechas, pero que puede ubicarse entre el 36 y el 40.',
        { h: 'Un tiempo de tensión' },
        'Fueron años agitados para los judíos. Pilato fue destituido en el 36 y Caifás perdió el sumo sacerdocio. En el 37 murió Tiberio y subió al trono Calígula, que pronto exigió ser adorado como dios. Hacia el 39 o el 40 ordenó poner su estatua en el templo de Jerusalén, y toda la nación se movilizó para impedirlo. Solo la demora del gobernador de Siria y la muerte de Calígula, en enero del 41, evitaron una guerra. Algunos piensan que esa crisis, que ocupó a todo el pueblo, explica en parte la paz de la que gozó la iglesia.',
        { h: 'Pedro en casa de Cornelio' },
        'En esos años Pedro recorrió las ciudades de la costa: Lida, Jope y finalmente Cesarea, donde predicó en la casa de Cornelio, un centurión romano (Hch 10). Mientras Pedro hablaba, el Espíritu Santo cayó sobre los gentiles que lo oían y los judíos creyentes se asombraron al oírlos hablar en lenguas (Hch 10:44-46). La fecha no se sabe con exactitud; la mayoría la ubica hacia el 38–40, antes de que Agripa I gobernara Judea en el 41, porque en Cesarea Lucas muestra todavía una guarnición romana.',
        { h: 'Antioquía' },
        'Al mismo tiempo, algunos de los esparcidos por la persecución de Esteban llegaron hasta Antioquía de Siria, la tercera ciudad del imperio, y comenzaron a predicar también a los griegos (Hch 11:19-21). La iglesia de Jerusalén envió a Bernabé, quien fue a Tarso a buscar a Saulo. Durante todo un año enseñaron allí, y «a los discípulos se les llamó cristianos por primera vez en Antioquía» (Hch 11:26). Eso ocurrió hacia el 44 o el 45, y desde Antioquía saldrían después los viajes misioneros.',
        ir('Ver en Hechos: Antioquía, la primera iglesia gentil', R.hechos + '#expansion/7')
      ],
      pensar: 'Mientras el mundo se agitaba por un emperador que quería ser adorado, la iglesia crecía en paz y el evangelio llegaba a los gentiles. ¿Dónde pones tu atención cuando las noticias del mundo te inquietan?'
    },
    {
      id: 'agripa', n: 'Agripa I y la Pascua del 44', ref: 'Hechos 12:1-24', fecha: 44,
      visual: [
        img('../hechos/img/hechos-pedro-carcel.webp', 'De noche, en una celda de piedra, un ángel despierta al apóstol Pedro, que duerme encadenado entre dos soldados', 'Pedro librado de la cárcel en los días de los panes sin levadura (Hch 12:6-10).'),
        img('../dinastia-herodes/img/hd-agripa-cesarea.webp', 'El rey Agripa, con vestiduras de plata que brillan al sol, habla desde una tribuna en el teatro de Cesarea ante una multitud', 'Agripa I en el teatro de Cesarea, en el año 44 (Hch 12:21-23).'),
        cita('Hechos 12:1-4', 'En aquel mismo tiempo el rey Herodes echó mano a algunos de la iglesia para maltratarles. Y mató a espada a Jacobo, hermano de Juan. Y viendo que esto había agradado a los judíos, procedió a prender también a Pedro. Eran entonces los días de los panes sin levadura. Y habiéndole tomado preso, le puso en la cárcel, entregándole a cuatro grupos de cuatro soldados cada uno, para que le custodiasen; y se proponía sacarle al pueblo después de la pascua.')
      ],
      texto: [
        'Hechos 12 es el capítulo mejor fechado de la primera mitad del libro. El «rey Herodes» que mata a Jacobo y encarcela a Pedro es Herodes Agripa I, nieto de Herodes el Grande, que reinó sobre toda la tierra de Israel entre el 41 y el 44. Fue el único rey judío de la región después de su abuelo, y el único momento, entre el nacimiento de Jesús y el año 70, en que Judea no tuvo un gobernador romano.',
        { h: 'Los panes sin levadura' },
        'Lucas da dos datos más. Agripa mató a espada a Jacobo, el hermano de Juan, el primer apóstol mártir, y al ver que esto agradaba a los judíos, prendió a Pedro. «Eran entonces los días de los panes sin levadura» (Hch 12:3), es decir, la semana de la Pascua. Agripa quería presentarlo al pueblo después de la fiesta. Pero la iglesia oraba sin cesar, y un ángel sacó a Pedro de la cárcel (Hch 12:5-11).',
        { h: 'Una muerte con fecha' },
        'Después de la Pascua, Agripa bajó a Cesarea. Allí, vestido con ropas reales, habló al pueblo, y la multitud gritó: «¡Voz de Dios, y no de hombre!» (Hch 12:22). «Al momento un ángel del Señor le hirió, por cuanto no dio la gloria a Dios; y expiró comido de gusanos» (Hch 12:23). Josefo cuenta el mismo hecho: Agripa asistía en Cesarea a unos juegos en honor del emperador, se presentó con una vestidura de plata que brillaba al sol, aceptó que lo llamaran dios, sintió un dolor terrible y murió cinco días después. Josefo dice que había reinado tres años sobre toda Judea; por eso su muerte se fecha en el 44.',
        'Así, la muerte de Jacobo y la liberación de Pedro ocurrieron en la Pascua del 44, poco antes de la muerte del rey. Es una de las fechas más firmes de Hechos.',
        { h: 'La palabra crecía' },
        'El capítulo empieza con un rey que mata a un apóstol y termina con ese rey comido de gusanos. Lucas lo cierra así: «Pero la palabra del Señor crecía y se multiplicaba» (Hch 12:24). Quince años después, el hijo de este rey, Agripa II, escucharía a Pablo en ese mismo palacio de Cesarea (Hch 26).',
        ir('Ver en La dinastía de Herodes: Agripa I persigue a la iglesia', R.herodes + '#agripas/2')
      ],
      pensar: 'Agripa I aceptó que lo llamaran dios y murió ese mismo día; la iglesia oró y Pedro fue librado. ¿A quién le das la gloria cuando las cosas te salen bien?'
    },
    {
      id: 'hambre', n: 'El hambre bajo Claudio y la ofrenda de Antioquía', ref: 'Hechos 11:27-30; 12:25; Gálatas 2:10', fecha: [45, 47],
      visual: [
        img('../hechos/img/hechos-agabo.webp', 'En una reunión de la iglesia de Antioquía, un profeta de Jerusalén se pone de pie y habla con autoridad ante creyentes judíos y griegos', 'Agabo anuncia una gran hambre (Hch 11:28).'),
        tabla({
          titulo: 'Los emperadores del Nuevo Testamento',
          cab: ['Emperador', 'Años', 'En la Biblia'],
          filas: [
            ['Augusto', '27 a.C.–14 d.C.', 'El censo del nacimiento de Jesús (Lc 2:1)'],
            ['Tiberio', '14–37', 'El ministerio y la muerte de Jesús (Lc 3:1); «César» en Mt 22:17-21'],
            ['Calígula', '37–41', 'No se nombra'],
            ['Claudio', '41–54', 'El hambre (Hch 11:28) y la expulsión de los judíos de Roma (Hch 18:2)'],
            ['Nerón', '54–68', 'El «César» al que Pablo apeló (Hch 25:11); la persecución en Roma'],
            ['Vespasiano y Tito', '69–81', 'La guerra judía y la destrucción del templo (Lc 21:20-24)'],
            ['Domiciano', '81–96', 'El destierro de Juan a Patmos (Ap 1:9)']
          ]
        })
      ],
      texto: [
        'Mientras Bernabé y Saulo enseñaban en Antioquía, llegaron profetas de Jerusalén. Uno de ellos, Agabo, «daba a entender por el Espíritu, que vendría una gran hambre en toda la tierra habitada; la cual sucedió en tiempo de Claudio» (Hch 11:28). Los discípulos decidieron enviar ayuda a los hermanos de Judea, cada uno según lo que tenía, «por mano de Bernabé y de Saulo» (Hch 11:29-30).',
        { h: 'Lo que dicen los historiadores' },
        'El reinado de Claudio, del 41 al 54, estuvo marcado por malas cosechas. Suetonio y Tácito mencionan escasez de grano en Roma, y otros escritores hablan de hambre en Grecia y en Egipto, donde una crecida irregular del Nilo hizo subir el precio del trigo. Josefo cuenta que en Judea hubo una gran hambre en tiempos de los gobernadores Fado y Tiberio Alejandro, entre el 44 y el 48, y que la reina Helena de Adiabene, convertida al judaísmo, compró grano en Egipto e higos en Chipre para los habitantes de Jerusalén.',
        'El año 47 fue, además, un año sabático, en el que la ley mandaba no sembrar (Lv 25:3-4). Eso habría agravado la escasez en Judea. Por eso la ofrenda de Antioquía se fecha hacia el 46 o el 47.',
        { h: 'La primera ofrenda misionera' },
        'Lucas cuenta el episodio entre los capítulos 11 y 12, pero no indica si Bernabé y Saulo llegaron a Jerusalén antes o después de la muerte de Agripa. Al final del capítulo 12 dice que volvieron «cumplido su servicio», llevando consigo a Juan Marcos (Hch 12:25). Muchos piensan que esta es la visita de Gálatas 2:1-10, en la que Pablo expuso su evangelio a los apóstoles «en privado» y ellos le pidieron que se acordara de los pobres, «lo cual también procuré con diligencia hacer» (Gá 2:10).',
        'La iglesia de Antioquía, formada en gran parte por gentiles, ayudó a la iglesia judía de Jerusalén. Fue el primer gesto de una comunión que Pablo cultivaría toda su vida, y que culminaría con la gran ofrenda de las iglesias de Macedonia y Acaya en el 57 (Ro 15:25-27).',
        ir('Ver en Hechos: capítulo 11, Jerusalén y Antioquía', R.hechos + '#comentario/12')
      ],
      pensar: 'Una iglesia joven, en su mayoría de gentiles, ayudó con generosidad a los hermanos judíos que pasaban hambre. ¿Qué te enseña sobre la unidad de la iglesia por encima de las diferencias de origen?'
    }
  ];

  // ================== RUTA VI. Los viajes de Pablo y sus cartas ==================
  const pablo = [
    {
      id: 'primer-viaje', n: 'El primer viaje y la carta a los Gálatas', ref: 'Hechos 13:1–14:28; Gálatas 1:6-9; Santiago 1:1', fecha: [46, 49],
      visual: [
        mapa({ view: V.asia, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'seleucia', 'salamina-chipre', 'pafos', 'perge', 'antioquia-pisidia', 'iconio', 'listra', 'derbe', 'atalia'], trazos: ['viaje-1'] }),
        tabla({
          titulo: 'Los primeros libros del Nuevo Testamento',
          cab: ['Libro', 'Fecha probable', 'Desde dónde'],
          filas: [
            ['Santiago', 'c. 45–49', 'Jerusalén'],
            ['Gálatas', 'c. 48–49 (o c. 55)', 'Antioquía (o Éfeso)'],
            ['1 y 2 Tesalonicenses', 'c. 50–51', 'Corinto']
          ]
        }),
        img('../hechos/img/hechos-listra.webp', 'En la plaza de Listra, una multitud con guirnaldas y un toro para el sacrificio rodea a Pablo y Bernabé, que rasgan sus ropas', 'En Listra quisieron ofrecer sacrificios a Pablo y Bernabé (Hch 14:11-18).')
      ],
      texto: [
        'Desde Antioquía, el Espíritu Santo apartó a Bernabé y a Saulo para la obra a la que los había llamado (Hch 13:2). El primer viaje los llevó a Chipre y a las ciudades del sur de Galacia, en el centro de la actual Turquía: Antioquía de Pisidia, Iconio, Listra y Derbe. Es el viaje más corto de los tres y se fecha hacia el 46–48.',
        { h: 'Un procónsul con inscripción' },
        'En Pafos, la capital de Chipre, creyó el procónsul Sergio Paulo (Hch 13:7-12). Lucas le da el título exacto: Chipre era entonces una provincia del Senado, gobernada por un procónsul. En Roma y en Chipre se han encontrado inscripciones con nombres de la familia de Sergio Paulo, aunque no se puede asegurar que alguna se refiera a él. El detalle muestra, una vez más, la exactitud de Lucas.',
        { h: 'La primera carta de Pablo' },
        'Al volver a Antioquía, Pablo y Bernabé se encontraron con un problema: algunos venidos de Judea enseñaban que los gentiles debían circuncidarse para ser salvos (Hch 15:1). El mismo problema había llegado a las iglesias que acababan de fundar en Galacia. Muchos piensan que Pablo escribió entonces la carta a los Gálatas, hacia el 48 o el 49, antes del concilio de Jerusalén. Si es así, sería su primera carta y uno de los primeros libros del Nuevo Testamento.',
        { posturas: {
          titulo: '¿Cuándo se escribió Gálatas?',
          a: { n: 'Antes del concilio (c. 48–49)', t: 'Las iglesias de Galacia serían las del primer viaje, en el sur de la provincia. Pablo no menciona la decisión del concilio, que habría sido su mejor argumento, y cuenta solo dos visitas a Jerusalén. Por eso la carta sería anterior a Hechos 15.' },
          b: { n: 'En el tercer viaje (c. 55)', t: 'Otros entienden que «Galacia» se refiere a la región del norte, habitada por los gálatas de origen celta, que Pablo habría visitado en el segundo y el tercer viaje (Hch 16:6; 18:23). La carta sería de los años en Éfeso, cerca de Romanos, con la que comparte muchos temas.' },
          c: 'La fecha no cambia el mensaje de la carta: la salvación es por la fe en Cristo, no por las obras de la ley. Pero si Gálatas es anterior al concilio, se ve que la verdad del evangelio se defendió desde el comienzo de la misión a los gentiles.'
        } },
        { h: 'Santiago' },
        'Probablemente aún antes que Gálatas se escribió la carta de Santiago, el hermano del Señor y líder de la iglesia de Jerusalén. Va dirigida «a las doce tribus que están en la dispersión» (Stg 1:1), habla de una iglesia todavía formada por judíos y no menciona la discusión sobre los gentiles. Muchos la fechan entre el 45 y el 49.',
        ir('Ver en Los viajes de Pablo: Gálatas, libres por la gracia', R.pablo + '#cartas/2')
      ],
      pensar: 'Pablo escribió a los gálatas con urgencia porque estaba en juego la verdad del evangelio. ¿Qué tan claro tienes tú que eres salvo solo por la fe en Cristo, sin agregar nada?'
    },
    {
      id: 'concilio', n: 'El concilio de Jerusalén', ref: 'Hechos 15:1-35; Gálatas 2:1-10', fecha: 49,
      visual: [
        img('../hechos/img/hechos-concilio.webp', 'Los apóstoles y los ancianos reunidos en una sala de Jerusalén escuchan a Jacobo, de pie, mientras Pedro, Pablo y Bernabé esperan', 'El concilio de Jerusalén (Hch 15:6-21).'),
        tabla({
          titulo: 'Las visitas de Pablo a Jerusalén',
          cab: ['Hechos', 'Gálatas', 'Año'],
          filas: [
            ['Hch 9:26-29', 'Gá 1:18-19: quince días con Pedro', 'c. 36–37'],
            ['Hch 11:30; 12:25: la ofrenda', '¿Gá 2:1-10?', 'c. 46–47'],
            ['Hch 15: el concilio', '¿Gá 2:1-10?', 'c. 49'],
            ['Hch 18:22: un saludo breve', '', 'c. 52'],
            ['Hch 21:17: la gran ofrenda y el arresto', '', '57']
          ]
        })
      ],
      texto: [
        'La pregunta sobre la circuncisión de los gentiles llegó a Jerusalén, y los apóstoles y los ancianos se reunieron para considerarla (Hch 15:6). Pedro recordó la casa de Cornelio, Pablo y Bernabé contaron las señales que Dios había hecho entre los gentiles, y Jacobo, el hermano del Señor, mostró con los profetas que Dios había planeado incluir a las naciones (Hch 15:7-18). La iglesia decidió no imponer la ley de Moisés a los gentiles y les pidió solo cuatro cosas para facilitar la comunión con los creyentes judíos (Hch 15:19-29).',
        { h: 'La fecha' },
        'El concilio se ubica hacia el año 49. Ocurrió después del primer viaje y antes del segundo, y el segundo viaje llevó a Pablo a Corinto cuando Galión era procónsul, en el 51 (estación VI.4). Pablo estuvo un año y medio en Corinto antes de comparecer ante Galión (Hch 18:11-12), y antes de eso recorrió Galacia, Macedonia y Atenas. Todo eso exige que el concilio sea del 49, o a lo sumo de comienzos del 50.',
        { posturas: {
          titulo: '¿Qué visita es la de Gálatas 2?',
          a: { n: 'La visita con la ofrenda (Hch 11:30)', t: 'Pablo cuenta sus visitas a Jerusalén para mostrar que no dependía de los apóstoles; no podía omitir ninguna. La de Gálatas 2 sería entonces la segunda, la de la ofrenda, cuando habló «en privado» con los líderes (Gá 2:2). Así se explica que no mencione la decisión del concilio, que todavía no había ocurrido.' },
          b: { n: 'El concilio (Hch 15)', t: 'Los temas coinciden: Pablo, Bernabé, la circuncisión de los gentiles, Pedro y Jacobo. Para estos intérpretes, Gálatas 2 cuenta el lado privado del concilio, y Hechos 15, la reunión pública.' },
          c: 'Las dos lecturas tienen buenos argumentos. La primera permite que Gálatas sea anterior al concilio; la segunda la ubica después. En ambos casos, los apóstoles reconocieron que el evangelio de Pablo era el mismo que ellos predicaban (Gá 2:9).'
        } },
        { h: 'Una decisión para toda la iglesia' },
        'La carta del concilio comienza con una frase notable: «Porque ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28). La iglesia resolvió su primera gran controversia escuchando la Escritura, el testimonio de lo que Dios estaba haciendo y la dirección del Espíritu. Desde entonces, el evangelio quedó libre para llegar a todas las naciones sin que nadie tuviera que hacerse judío primero.',
        ir('Ver en Los viajes de Pablo: el concilio de Jerusalén', R.pablo + '#recorrido/5')
      ],
      pensar: 'La iglesia de Jerusalén pudo haber cerrado la puerta a los gentiles, pero escuchó al Espíritu y a la Escritura. ¿Qué barreras pones tú, sin darte cuenta, para que otros lleguen a Cristo?'
    },
    {
      id: 'claudio', n: 'Claudio expulsa a los judíos de Roma', ref: 'Hechos 18:1-3; Romanos 16:3-5; 1 Tesalonicenses 1:1', fecha: [49, 50],
      visual: [
        img('../viajes-pablo/img/vp-tiendas.webp', 'En un taller de Corinto, Pablo, Aquila y Priscila cosen lonas de cuero y tela para tiendas', 'Pablo trabaja con Aquila y Priscila, recién llegados de Italia (Hch 18:2-3).'),
        pasos([
          { t: 'Hacia el 49: Claudio expulsa a los judíos de Roma; Aquila y Priscila van a Corinto', fecha: 49, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'corinto', 'puteoli'] } },
          { t: 'Segundo viaje: de Antioquía por Galacia a Troas, Filipos, Tesalónica, Berea y Atenas (Hch 15:36–17:34)', fecha: [49, 50], estado: { view: V.egeo, capas: ['roma-14', 'iglesia-52'], lugares: ['antioquia', 'derbe', 'listra', 'troas', 'filipos', 'tesalonica', 'berea', 'atenas', 'corinto'], trazos: ['viaje-2'] } }
        ]),
        cita('Hechos 18:1-3', 'Después de estas cosas, Pablo salió de Atenas y fue a Corinto. Y halló a un judío llamado Aquila, natural del Ponto, recién venido de Italia con Priscila su mujer, por cuanto Claudio había mandado que todos los judíos saliesen de Roma. Fue a ellos, y como era del mismo oficio, se quedó con ellos, y trabajaban juntos, pues el oficio de ellos era hacer tiendas.')
      ],
      texto: [
        'Cuando Pablo llegó a Corinto en su segundo viaje, encontró a «un judío llamado Aquila, natural del Ponto, recién venido de Italia con Priscila su mujer, por cuanto Claudio había mandado que todos los judíos saliesen de Roma» (Hch 18:2). Ese decreto es otra ancla.',
        { h: '«Por instigación de Cresto»' },
        'El historiador Suetonio, al escribir la vida de Claudio, dice que el emperador expulsó de Roma a los judíos porque provocaban continuos disturbios «por instigación de Cresto». Muchos estudiosos piensan que Suetonio, que escribió setenta años después, confundió el nombre de Cristo con el de Cresto, un nombre de esclavo muy común. Si es así, los disturbios se produjeron en las sinagogas de Roma por la predicación del evangelio, como ocurría en las ciudades que visitaba Pablo. Un escritor cristiano del siglo V, Orosio, fecha el decreto en el año noveno de Claudio, es decir, el 49.',
        'Con esa fecha, Aquila y Priscila llegaron a Corinto hacia el 49 o el 50, poco antes que Pablo. Lucas dice que acababan de llegar de Italia, y Pablo se quedó con ellos porque tenían el mismo oficio: hacían tiendas (Hch 18:3).',
        { h: 'El segundo viaje' },
        'El concilio se celebró hacia el 49, y poco después Pablo salió con Silas en su segundo viaje. Recorrieron las iglesias de Galacia, donde se les unió Timoteo, y el Espíritu los llevó hasta Troas, desde donde pasaron a Europa. Fundaron iglesias en Filipos, Tesalónica y Berea, Pablo predicó en Atenas y llegó a Corinto hacia comienzos del 50. Desde allí escribió las dos cartas a los Tesalonicenses, poco después de haberlos dejado (1 Ts 3:1-6).',
        { h: 'De regreso a Roma' },
        'El decreto de Claudio no duró para siempre. Claudio murió en el 54, y muchos judíos volvieron a Roma. Cuando Pablo escribió a los romanos, hacia el 57, Priscila y Aquila estaban otra vez allí, y la iglesia se reunía en su casa (Ro 16:3-5). Un decreto del emperador los había echado de su ciudad; Dios usó ese destierro para que conocieran a Pablo y se convirtieran en sus colaboradores en Corinto, Éfeso y Roma.',
        ir('Ver en Los viajes de Pablo: segundo viaje', R.pablo + '#recorrido/6')
      ],
      pensar: 'Aquila y Priscila perdieron su casa en Roma por una orden injusta y encontraron en Corinto a Pablo. ¿Has visto a Dios abrir una puerta nueva a partir de algo que parecía una pérdida?'
    },
    {
      id: 'galion', n: 'Galión y la inscripción de Delfos', ref: 'Hechos 18:11-17', fecha: [51, 52],
      visual: [
        foto('foto-delfos-galion.jpg', 'Fragmento de piedra con letras griegas grabadas, entre las que se lee el nombre de Galión', 'Fragmento de la inscripción de Delfos, de una carta del emperador Claudio; el recuadro azul marca el nombre de Galión (Museo de Delfos).', 'CC BY-SA 4.0 · Gérard, vía Wikimedia Commons'),
        img('../hechos/img/hechos-pablo-galion.webp', 'En el tribunal de piedra del foro de Corinto, el procónsul Galión, con toga romana, despide con un gesto a un grupo de judíos que acusan a Pablo', 'Pablo ante Galión en Corinto (Hch 18:12-17).'),
        cita('Hechos 18:11-17', 'Y se detuvo allí un año y seis meses, enseñándoles la palabra de Dios. Pero siendo Galión procónsul de Acaya, los judíos se levantaron de común acuerdo contra Pablo, y le llevaron al tribunal, diciendo: Este persuade a los hombres a honrar a Dios contra la ley. Y al comenzar Pablo a hablar, Galión dijo a los judíos: Si fuera algún agravio o algún crimen enorme, oh judíos, conforme a derecho yo os toleraría. Pero si son cuestiones de palabras, y de nombres, y de vuestra ley, vedlo vosotros; porque yo no quiero ser juez de estas cosas. Y los echó del tribunal. Entonces todos los griegos, apoderándose de Sóstenes, principal de la sinagoga, le golpeaban delante del tribunal; pero a Galión nada se le daba de ello.')
      ],
      texto: [
        'Si hubiera que elegir una sola fecha para armar la vida de Pablo, sería esta. Lucas cuenta que, después de un año y seis meses en Corinto, «siendo Galión procónsul de Acaya, los judíos se levantaron de común acuerdo contra Pablo, y le llevaron al tribunal» (Hch 18:11-12). Galión no quiso juzgar asuntos de la ley judía y los echó del tribunal.',
        { h: 'Una carta del emperador' },
        'Galión era hermano mayor del filósofo Séneca, el maestro de Nerón. A comienzos del siglo XX se publicaron unos fragmentos de una inscripción encontrada en Delfos, en Grecia: una carta del emperador Claudio a la ciudad que menciona a «Junio Galión, mi amigo y procónsul». La carta está fechada por los títulos de Claudio: había sido aclamado emperador veintiséis veces, un dato que se conoce por otras inscripciones y que corresponde a la primera mitad del año 52.',
        'Los procónsules de las provincias del Senado gobernaban un año, de verano a verano. Por lo tanto, Galión gobernó Acaya desde mediados del 51 hasta mediados del 52. Séneca cuenta que su hermano tuvo fiebre en Acaya y dejó el cargo; quizás no completó su año. Los judíos de Corinto probablemente aprovecharon la llegada del nuevo procónsul para acusar a Pablo, en el verano o el otoño del 51.',
        { h: 'Lo que se deduce' },
        'Con esa fecha fija, todo lo demás se ordena. Pablo llegó a Corinto un año y medio antes, a comienzos del 50; por eso el concilio fue hacia el 49 y el primer viaje, antes. Después de Galión, Pablo se quedó «muchos días» (Hch 18:18), viajó a Jerusalén y Antioquía, y comenzó el tercer viaje hacia el 52 o el 53. Hacia atrás y hacia adelante, la inscripción de Delfos sostiene toda la cronología de Pablo.',
        { h: 'Una protección de Dios' },
        'La decisión de Galión fue importante para la iglesia. Al negarse a juzgar a Pablo, reconoció en la práctica que la fe cristiana era un asunto interno del judaísmo, una religión permitida por Roma. Durante más de diez años, esa decisión ayudó a que el evangelio se predicara con libertad. Antes de la acusación, el Señor le había dicho a Pablo en visión: «No temas, sino habla, y no calles; porque yo estoy contigo, y ninguno pondrá sobre ti la mano para hacerte mal» (Hch 18:9-10).',
        ir('Ver en Hechos: Galión, un ancla en la historia', R.hechos + '#introduccion/9')
      ],
      pensar: 'Dios le prometió a Pablo que nadie le haría daño en Corinto, y usó a un procónsul indiferente para cumplirlo. ¿Qué promesa de Dios necesitas recordar hoy para no callar?'
    },
    {
      id: 'efeso', n: 'Éfeso, Corinto y la carta a los Romanos', ref: 'Hechos 19:1–20:16; 1 Corintios 16:8; 2 Corintios 2:12-13; Romanos 15:25-26; 16:1, 23', fecha: [52, 57],
      visual: [
        esq('cr-pablo-cartas.svg', 'Línea de tiempo de los años 46 a 67 con los viajes de Pablo en franjas de color y sus trece cartas marcadas en el lugar y el año en que las escribió', 'Los viajes de Pablo y sus cartas (fechas aproximadas).', 'Viajes y cartas'),
        mapa({ view: V.egeo, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'efeso', 'troas', 'filipos', 'tesalonica', 'corinto', 'cencrea', 'mileto', 'jerusalen'], trazos: ['viaje-3'] }),
        img('../viajes-pablo/img/vp-efeso.webp', 'Pablo enseña a un grupo de discípulos en una sala de columnas en Éfeso, con la ciudad y su gran teatro al fondo', 'Dos años en la escuela de Tirano (Hch 19:9-10).')
      ],
      texto: [
        'El tercer viaje de Pablo, hacia el 52 o el 53, tuvo un centro: Éfeso, la capital de la provincia de Asia. Allí enseñó tres meses en la sinagoga y luego dos años en la escuela de Tirano, «de manera que todos los que habitaban en Asia, judíos y griegos, oyeron la palabra del Señor Jesús» (Hch 19:8-10). En total, Pablo dijo a los ancianos de Éfeso que había estado con ellos «tres años» (Hch 20:31), probablemente del 53 al 56.',
        { h: 'Las cartas a los Corintios' },
        'Desde Éfeso, Pablo escribió la primera carta a los Corintios, preocupado por las divisiones y los problemas de esa iglesia. La escribió cerca de la primavera, porque dice que se quedaría en Éfeso hasta Pentecostés (1 Co 16:8). Se fecha hacia el 55 o el 56. Después de salir de Éfeso, tras el alboroto de los plateros (Hch 19:23-41), pasó por Troas y Macedonia, ansioso por saber cómo había recibido Corinto sus palabras, y desde Macedonia escribió la segunda carta, hacia el 56 (2 Co 2:12-13; 7:5-7).',
        { h: 'Romanos, desde Corinto' },
        'Luego Pablo pasó tres meses en Grecia (Hch 20:2-3), seguramente en Corinto, durante el invierno del 56 al 57. Allí escribió su carta más extensa, la que dirigió a los Romanos. Varios detalles lo indican: recomienda a Febe, diaconisa de Cencrea, el puerto de Corinto (Ro 16:1); envía saludos de Gayo, en cuya casa se hospedaba, y de Erasto, tesorero de la ciudad (Ro 16:23). En Corinto se encontró una inscripción en el pavimento de una plaza con el nombre de un Erasto que la pavimentó a su costa. Pablo dice que va a Jerusalén con la ofrenda de Macedonia y Acaya, y que después piensa ir a Roma y a España (Ro 15:24-26).',
        { h: 'Para Pentecostés en Jerusalén' },
        'En la primavera del 57 Pablo emprendió el viaje a Jerusalén. Celebró la Pascua en Filipos, navegó a Troas y bordeó la costa de Asia, sin detenerse en Éfeso, «pues se apresuraba por estar el día de Pentecostés, si le fuese posible, en Jerusalén» (Hch 20:6, 16). Allí, pocos días después, sería arrestado en el templo.',
        ir('Ver en Los viajes de Pablo: las cartas en su contexto', R.pablo + '#cartas/1')
      ],
      pensar: 'Pablo escribió algunas de sus cartas más profundas en medio de viajes, peligros y preocupaciones por las iglesias. ¿Qué te enseña que Dios inspirara su Palabra en medio de una vida tan agitada?'
    },
    {
      id: 'festo', n: 'De Félix a Festo y el viaje a Roma', ref: 'Hechos 24:27; 25:1-12; 27:1-9; 28:11-16, 30-31', fecha: [57, 62],
      visual: [
        img('../imperio-romano/img/roma-pablo-festo.webp', 'El gobernador Festo, sentado en su tribunal en Cesarea, escucha a Pablo encadenado que habla de pie ante soldados y acusadores', 'Pablo ante Festo: «A César apelo» (Hch 25:11).'),
        mapa({ view: V.mediterraneo, capas: ['roma-14', 'iglesia-62'], lugares: ['cesarea', 'sidon', 'mira', 'creta-isla', 'malta', 'siracusa', 'puteoli', 'roma'], trazos: ['viaje-roma'] }),
        tabla({
          titulo: 'Del arresto a Roma',
          cab: ['Fecha', 'Qué pasó', 'Pasaje'],
          filas: [
            ['Pentecostés del 57', 'Arresto en el templo de Jerusalén', 'Hch 21:27-36'],
            ['57–59', 'Dos años preso en Cesarea, bajo el gobernador Félix', 'Hch 24:27'],
            ['Verano del 59', 'Llega Festo; Pablo apela a César y habla ante Agripa II', 'Hch 25–26'],
            ['Octubre del 59', 'Pasado el ayuno del día de la Expiación, la navegación es peligrosa', 'Hch 27:9'],
            ['Invierno del 59–60', 'Naufragio y tres meses en Malta', 'Hch 27:39–28:11'],
            ['Primavera del 60', 'Llegada a Roma', 'Hch 28:14-16'],
            ['60–62', 'Dos años en una casa alquilada; cartas de la prisión', 'Hch 28:30-31']
          ]
        })
      ],
      texto: [
        'Los últimos capítulos de Hechos están fechados por los gobernadores romanos de Judea. Cuando Pablo fue arrestado, gobernaba Antonio Félix, que estaba en el cargo desde el 52. Félix tuvo a Pablo preso en Cesarea esperando un soborno, y «al cabo de dos años recibió Félix por sucesor a Porcio Festo» (Hch 24:27).',
        { h: '¿Cuándo llegó Festo?' },
        'Josefo cuenta que Félix fue llamado a Roma por sus abusos, y que se salvó del castigo gracias a la influencia de su hermano Palas en la corte de Nerón. Hay además un dato concreto: las monedas de Judea cambiaron de diseño en el quinto año de Nerón, que corresponde al 58–59, y muchos estudiosos lo atribuyen al cambio de gobernador. Por eso la llegada de Festo se fecha hacia el 59. Festo murió en el cargo hacia el 62, y su muerte será importante en la estación VII.1.',
        { h: '«Habiendo pasado ya el ayuno»' },
        'Pablo apeló a César y fue enviado a Roma con otros presos. Lucas da un detalle del calendario: el viaje se volvió peligroso «por haber pasado ya el ayuno» (Hch 27:9), es decir, el día de la Expiación, que cae a fines de septiembre o en octubre. En el año 59, ese día fue el 5 de octubre. En el Mediterráneo se navegaba con peligro desde mediados de septiembre y no se navegaba en absoluto en invierno. Así se explica la tempestad, el naufragio y los tres meses de espera en Malta, hasta que la nave alejandrina reanudó el viaje en la primavera del 60 (Hch 28:11).',
        { h: 'Dos años enteros' },
        'Hechos termina con Pablo en Roma, en una casa alquilada, vigilado por un soldado, recibiendo a todos y predicando el reino de Dios «abiertamente y sin impedimento» (Hch 28:31). Fueron dos años, del 60 al 62. En ese tiempo Pablo escribió, probablemente, las cartas a los Efesios, a los Colosenses, a Filemón y a los Filipenses, que se conocen como las cartas de la prisión. Lucas no dice qué pasó después; muchos piensan que terminó de escribir Hechos precisamente entonces, hacia el 62.',
        ir('Ver en Los viajes de Pablo: el viaje a Roma', R.pablo + '#recorrido/9'),
        ir('Ver en La dinastía de Herodes: Pablo ante Agripa y Berenice', R.herodes + '#agripas/5')
      ],
      pensar: 'Pablo había deseado durante años ir a Roma (Ro 1:10-13), y llegó encadenado, después de un naufragio. ¿Cómo te ayuda su historia a confiar en Dios cuando sus respuestas llegan de una manera que no esperabas?'
    }
  ];

  Object.assign(window.__CR, { jerusalen, pablo });
})();
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, linea, R } = window.__CR;

  // ================== RUTA VII. Los últimos años de los apóstoles ==================
  const apostoles = [
    {
      id: 'jacobo', n: 'La muerte de Jacobo, el hermano del Señor', ref: 'Gálatas 1:19; 2:9; Hechos 15:13-21; 21:18; Santiago 1:1; 5:7-8', fecha: 62,
      visual: [
        img('cr-jacobo-justo.webp', 'Un hombre de unos sesenta años, de barba gris y túnica de lino blanco, ora de rodillas sobre las losas de un pórtico del templo de Jerusalén, al amanecer', 'Jacobo, el hermano del Señor, llamado «el Justo» por los primeros cristianos.'),
        tabla({
          titulo: 'Jacobo en el Nuevo Testamento',
          cab: ['Momento', 'Pasaje'],
          filas: [
            ['Hermano de Jesús que no creía en él durante el ministerio', 'Mr 6:3; Jn 7:5'],
            ['Testigo del Señor resucitado', '1 Co 15:7'],
            ['Con los apóstoles y María, en el aposento alto', 'Hch 1:14'],
            ['Pablo lo visita en Jerusalén', 'Gá 1:19'],
            ['Una de las «columnas» de la iglesia', 'Gá 2:9'],
            ['Habla en el concilio de Jerusalén', 'Hch 15:13-21'],
            ['Recibe a Pablo y la ofrenda en el 57', 'Hch 21:18'],
            ['Escribe la carta de Santiago', 'Stg 1:1']
          ]
        })
      ],
      texto: [
        'Después de que Hechos termina, en el 62, la historia sigue con fuentes fuera de la Biblia. El primer hecho fechado ocurrió ese mismo año en Jerusalén: la muerte de Jacobo, el hermano del Señor, el líder de la iglesia de Jerusalén y autor de la carta de Santiago.',
        { h: 'De incrédulo a columna' },
        'Durante el ministerio de Jesús, «ni aun sus hermanos creían en él» (Jn 7:5). Pero Jesús resucitado se le apareció a Jacobo (1 Co 15:7), y desde entonces aparece entre los discípulos que oraban en el aposento alto (Hch 1:14). Con los años llegó a ser una de las «columnas» de la iglesia (Gá 2:9). Fue él quien propuso la decisión del concilio (Hch 15:13-21) y quien recibió a Pablo cuando llevó la ofrenda a Jerusalén en el 57 (Hch 21:18).',
        { h: 'Lo que cuenta Josefo' },
        'Josefo cuenta su muerte con detalle. Cuando murió el gobernador Festo, hacia el 62, y su sucesor Albino todavía estaba en camino, el sumo sacerdote Anás, hijo del Anás de los evangelios, aprovechó la falta de autoridad romana. Reunió al Sanedrín y presentó a «Jacobo, hermano de Jesús, llamado el Cristo», con algunos otros, acusándolos de violar la ley, y los hizo apedrear. Según Josefo, los judíos más justos y cumplidores de la ley se indignaron y pidieron al rey Agripa II y a Albino que lo destituyeran. Anás perdió el cargo después de solo tres meses.',
        'El dato es valioso por dos razones. Fija la muerte de Jacobo en el 62, y es un testimonio de un historiador judío que no era cristiano y que nombra a Jesús «llamado el Cristo» y a su hermano Jacobo. Escritores cristianos posteriores, como Hegesipo en el siglo II, recordaban a Jacobo como «el Justo», un hombre de oración que pasaba tanto tiempo de rodillas en el templo que tenía las rodillas endurecidas como las de un camello.',
        { h: 'Una fecha para la carta de Santiago' },
        'Si Jacobo murió en el 62, su carta tiene que ser anterior. Muchos la fechan entre el 45 y el 49, antes del concilio, por su tono judío y porque no menciona la controversia sobre los gentiles. Es probablemente uno de los primeros libros del Nuevo Testamento. Jacobo exhortó a sus lectores: «Tened también vosotros paciencia, y afirmad vuestros corazones; porque la venida del Señor se acerca» (Stg 5:8). Él mismo fue fiel hasta el fin.',
        ir('Ver en El mundo judío: Santiago y los fariseos que creyeron', R.mundo + '#despues/2')
      ],
      pensar: 'Jacobo no creía en su propio hermano hasta que lo vio resucitado, y terminó dando su vida por él. ¿Qué te dice su historia sobre el poder de la resurrección para transformar a alguien que estaba cerca de Jesús, pero no lo conocía?'
    },
    {
      id: 'neron', n: 'Nerón y el incendio de Roma', ref: '1 Pedro 4:12-16; 5:13; Romanos 13:1-7; Hebreos 10:32-34', fecha: [64, 68],
      visual: [
        img('cr-incendio-roma.webp', 'De noche, un barrio de Roma arde entre edificios de varios pisos, mientras gente con antorchas y bultos huye por una calle estrecha bajo un cielo rojo de humo', 'El incendio de Roma, en julio del 64.'),
        tabla({
          titulo: 'Los años de Nerón',
          cab: ['Año', 'Qué pasó'],
          filas: [
            ['54', 'Nerón, emperador a los dieciséis años; los primeros años son de buen gobierno'],
            ['57', 'Pablo escribe a los romanos: las autoridades son servidoras de Dios (Ro 13:1-7)'],
            ['59–60', 'Pablo apela a César, es decir, a Nerón (Hch 25:11)'],
            ['Julio del 64', 'Gran incendio de Roma; Nerón culpa a los cristianos'],
            ['64–68', 'Persecución en Roma; muerte de Pedro y de Pablo según la tradición'],
            ['66', 'Comienza la guerra judía'],
            ['Junio del 68', 'Nerón se suicida; año de los cuatro emperadores (68–69)']
          ]
        })
      ],
      texto: [
        'En la noche del 18 al 19 de julio del año 64 se desató en Roma un incendio que duró seis días. De los catorce barrios de la ciudad, tres quedaron completamente destruidos y siete muy dañados. Corrió el rumor de que el propio Nerón lo había provocado para reconstruir la ciudad a su gusto.',
        { h: 'El testimonio de Tácito' },
        'El historiador romano Tácito, que escribió unos cincuenta años después y despreciaba a los cristianos, cuenta lo que siguió. Para acallar el rumor, Nerón culpó a los que el pueblo llamaba cristianos. Tácito explica que el nombre venía de Cristo, quien había sido ejecutado en tiempos de Tiberio por el procurador Poncio Pilato. Dice que muchos fueron arrestados y condenados, no tanto por el incendio como por su supuesto odio al género humano, y describe crueldades terribles: algunos fueron cubiertos con pieles de animales y despedazados por perros, otros crucificados, y otros quemados como antorchas para iluminar los jardines del emperador.',
        'Es la primera persecución de cristianos ordenada por un emperador, y el testimonio de Tácito, un enemigo de la fe, confirma tres datos del Nuevo Testamento: que Jesús fue ejecutado bajo Pilato, en tiempos de Tiberio; que el movimiento comenzó en Judea; y que en el 64 ya había en Roma «una gran multitud» de cristianos.',
        { h: 'Las cartas de esos años' },
        'La primera carta de Pedro, escrita desde Roma, a la que llama «Babilonia» (1 P 5:13), habla a creyentes que sufren por el nombre de Cristo: «Amados, no os sorprendáis del fuego de prueba que os ha sobrevenido» (1 P 4:12). Muchos la fechan hacia el 63 o el 64, justo antes o al comienzo de la persecución. Pedro exhorta a sufrir como cristianos, sin avergonzarse, y a glorificar a Dios por ello (1 P 4:16).',
        'Pocos años antes, Pablo había escrito a los romanos que las autoridades están puestas por Dios (Ro 13:1). Lo escribió durante los primeros años de Nerón, cuando el gobierno era todavía moderado. La persecución no cambió esa enseñanza, pero mostró sus límites: cuando la autoridad exige negar a Cristo, «es necesario obedecer a Dios antes que a los hombres» (Hch 5:29).',
        ir('Ver en El imperio romano: de los mártires a la caída del imperio', R.romano + '#historia/6')
      ],
      pensar: 'Los cristianos de Roma fueron acusados injustamente de un crimen que no cometieron, y aun así siguieron confesando a Cristo. ¿Cómo reaccionas cuando te acusan injustamente por causa de tu fe?'
    },
    {
      id: 'pedro-pablo', n: 'La muerte de Pedro y de Pablo', ref: 'Juan 21:18-19; 2 Pedro 1:13-15; 2 Timoteo 4:6-8, 16-18', fecha: [64, 68],
      visual: [
        img('../viajes-pablo/img/vp-segunda-prision.webp', 'Pablo, anciano y encadenado, escribe en un pergamino a la luz de una pequeña lámpara en una celda de piedra', 'La segunda prisión de Pablo en Roma, de donde escribió 2 Timoteo.'),
        cita('2 Timoteo 4:6-8', 'Porque yo ya estoy para ser sacrificado, y el tiempo de mi partida está cercano. He peleado la buena batalla, he acabado la carrera, he guardado la fe. Por lo demás, me está guardada la corona de justicia, la cual me dará el Señor, juez justo, en aquel día; y no sólo a mí, sino también a todos los que aman su venida.'),
        tabla({
          titulo: 'Después de Hechos',
          cab: ['Fecha probable', 'Pablo', 'Pedro'],
          filas: [
            ['62', 'Liberado tras dos años en Roma', ''],
            ['62–66', 'Nuevos viajes: Creta, Éfeso, Macedonia, Nicópolis; escribe 1 Timoteo y Tito', 'En Roma con Marcos; escribe 1 Pedro (c. 63–64)'],
            ['64–67', '', 'Escribe 2 Pedro; muere crucificado en Roma'],
            ['66–67', 'Segunda prisión en Roma; escribe 2 Timoteo', ''],
            ['c. 67', 'Muere decapitado en Roma', '']
          ],
          nota: 'Fechas según Clemente de Roma (hacia el 95), Ireneo y Eusebio; no las da la Biblia.'
        })
      ],
      texto: [
        'Ni Hechos ni las cartas cuentan la muerte de Pedro y de Pablo. Pero las cartas escritas en sus últimos años muestran que ambos la esperaban pronto, y los escritores cristianos más antiguos dicen que los dos murieron en Roma durante la persecución de Nerón.',
        { h: 'Pablo: «he acabado la carrera»' },
        'Las cartas a Timoteo y a Tito hablan de viajes que no aparecen en Hechos: Pablo dejó a Tito en Creta (Tit 1:5), pensaba pasar el invierno en Nicópolis (Tit 3:12) y encargó a Timoteo cuidar la iglesia de Éfeso (1 Ti 1:3). Por eso muchos entienden que Pablo fue liberado hacia el 62 y viajó varios años más. Clemente de Roma, hacia el 95, dice que Pablo llegó «hasta el límite de occidente», quizás España. Luego volvió a ser arrestado. En su última carta, la segunda a Timoteo, escribe desde una prisión más dura, abandonado por muchos: «yo ya estoy para ser sacrificado, y el tiempo de mi partida está cercano. He peleado la buena batalla, he acabado la carrera, he guardado la fe» (2 Ti 4:6-7). Según la tradición, como ciudadano romano fue decapitado, hacia el 67.',
        { h: 'Pedro: «como nuestro Señor me ha declarado»' },
        'Jesús le había anunciado a Pedro cómo moriría: «cuando ya seas viejo, extenderás tus manos, y te ceñirá otro, y te llevará a donde no quieras. Esto dijo, dando a entender con qué muerte había de glorificar a Dios» (Jn 21:18-19). Treinta años después, Pedro escribió en su segunda carta que pronto debía «abandonar el cuerpo, como nuestro Señor Jesucristo me ha declarado» (2 P 1:14). La tradición cuenta que fue crucificado en Roma durante la persecución de Nerón, entre el 64 y el 67; según una tradición posterior, pidió ser crucificado cabeza abajo por no considerarse digno de morir como su Señor.',
        { h: 'Lo que importa' },
        'Clemente de Roma, que conoció a la generación de los apóstoles, recordó a los dos como ejemplos de perseverancia: sufrieron por envidia de otros, dieron testimonio ante los gobernantes y alcanzaron el premio. Los dos habían anunciado que el que sirve a Cristo debe estar dispuesto a sufrir con él. Ninguno de los dos huyó, y ninguno negó a su Señor.',
        ir('Ver en Los viajes de Pablo: después de Hechos', R.pablo + '#despues/1')
      ],
      pensar: 'Pedro, que una vez negó a Jesús por miedo, murió por él; Pablo, que lo persiguió, terminó su carrera guardando la fe. ¿Qué te enseña su final sobre lo que Dios puede hacer con nuestros comienzos?'
    },
    {
      id: 'guerra', n: 'La guerra judía y la caída de Jerusalén', ref: 'Lucas 19:41-44; 21:20-24; Mateo 24:1-2; Daniel 9:26', fecha: [66, 73],
      visual: [
        pasos([
          { t: '66: rebelión en Jerusalén; el gobernador de Siria se retira (Josefo)', fecha: 66, estado: { view: V.palestina, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea', 'pela', 'gamla', 'jotapata'] } },
          { t: '67–68: Vespasiano somete Galilea, la costa y Perea; los cristianos huyen a Pela', fecha: [67, 68], estado: { view: V.palestina, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea', 'pela', 'gamla', 'jotapata', 'seforis'], trazos: ['mj-vespasiano-67', 'mj-vespasiano-68'] } },
          { t: '70: Tito sitia Jerusalén; en agosto, el templo es incendiado', fecha: 70, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea'], trazos: ['mj-tito-70'] } },
          { t: '73–74: caída de Masada', fecha: 73, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['jerusalen', 'masada', 'herodion', 'maqueronte'], trazos: ['mj-silva-73'] } }
        ]),
        img('cr-huida-pela.webp', 'Un grupo de familias judías con burros cargados cruza el río Jordán por un vado, hacia las colinas de Galaad, mientras a lo lejos se ven columnas de humo', 'Los cristianos de Jerusalén huyen a Pela, al otro lado del Jordán (hacia el 66–68).'),
        img('../imperio-romano/img/roma-triunfo-tito.webp', 'Soldados romanos llevan en procesión triunfal el candelero de oro y las trompetas del templo de Jerusalén por las calles de Roma', 'El triunfo de Tito en Roma, en el 71, con los objetos del templo.'),
        cita('Lucas 21:20-24', 'Pero cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado. Entonces los que estén en Judea, huyan a los montes; y los que en medio de ella, váyanse; y los que estén en los campos, no entren en ella. Porque estos son días de retribución, para que se cumplan todas las cosas que están escritas. Mas ¡ay de las que estén encintas, y de las que críen en aquellos días! porque habrá gran calamidad en la tierra, e ira sobre este pueblo. Y caerán a filo de espada, y serán llevados cautivos a todas las naciones; y Jerusalén será hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan.')
      ],
      texto: [
        'Cuarenta años antes, Jesús había llorado sobre Jerusalén y anunciado que sus enemigos la rodearían y no dejarían en ella «piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación» (Lc 19:44). Al salir del templo, dijo a sus discípulos que de aquellos edificios no quedaría piedra sobre piedra (Mt 24:2). La profecía se cumplió en el año 70, dentro de la misma generación que la escuchó.',
        { h: 'La guerra' },
        'En el 66, los abusos del gobernador Floro y el clima de tensión hicieron estallar una rebelión en Jerusalén. El gobernador de Siria, Cestio Galo, llegó con un ejército, sitió la ciudad y, de manera inesperada, se retiró. Nerón envió entonces a Vespasiano, que en el 67 y el 68 sometió Galilea, la costa y Perea. Cuando Nerón murió, en el 68, la guerra se detuvo un tiempo, y en el 69 Vespasiano fue proclamado emperador. Su hijo Tito continuó la campaña y en la primavera del 70 sitió Jerusalén. Después de meses de hambre y luchas internas, la ciudad cayó. En agosto, el templo fue incendiado. Masada, la última fortaleza, cayó en el 73 o el 74.',
        { h: 'La huida a Pela' },
        'Jesús había dado a sus discípulos una instrucción clara: «cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado. Entonces los que estén en Judea, huyan a los montes» (Lc 21:20-21). El historiador Eusebio, en el siglo IV, cuenta que antes de la guerra los cristianos de Jerusalén, advertidos por una revelación, salieron de la ciudad y se establecieron en Pela, una ciudad de la Decápolis al otro lado del Jordán. Muchos piensan que aprovecharon la retirada de Cestio Galo en el 66. Así, la iglesia se salvó de la catástrofe.',
        { h: 'El fin de una época' },
        'Con el templo terminaron los sacrificios, el sacerdocio y el Sanedrín. Daniel lo había anunciado: después de que se quitara la vida al Mesías, «el pueblo de un príncipe que ha de venir destruirá la ciudad y el santuario» (Dn 9:26). El pueblo era el romano; el príncipe que ha de venir, según la lectura futurista, es el que hará un pacto en la semana setenta, todavía en el futuro. Para la iglesia, la caída del templo confirmó lo que enseñaba la carta a los Hebreos: Cristo, con una sola ofrenda, había hecho perfectos para siempre a los santificados (He 10:14), y ya no era necesario otro sacrificio.',
        ir('Ver en El mundo judío: la gran rebelión y la caída del templo', R.mundo + '#despues/4'),
        ir('Ver en El imperio romano: la destrucción de Jerusalén', R.romano + '#historia/5')
      ],
      pensar: 'Los cristianos de Jerusalén se salvaron porque creyeron y obedecieron una palabra de Jesús dicha casi cuarenta años antes. ¿Qué palabras de Jesús estás tomando en serio para tu vida y tu futuro?'
    },
    {
      id: 'juan-efeso', n: 'Juan en Éfeso', ref: 'Juan 21:20-25; 1 Juan 1:1-4; 2:18; 2 Juan 1; 3 Juan 1', fecha: [70, 98],
      visual: [
        img('cr-juan-efeso.webp', 'El apóstol Juan, anciano de barba blanca larga, enseña sentado en una casa de Éfeso a hombres, mujeres y niños que lo escuchan con atención', 'Juan, el último de los apóstoles, en Éfeso.'),
        tabla({
          titulo: 'Los escritos de Juan',
          cab: ['Libro', 'Fecha probable', 'Desde dónde'],
          filas: [
            ['Evangelio de Juan', 'c. 85–90', 'Éfeso'],
            ['1 Juan', 'c. 85–95', 'Éfeso'],
            ['2 y 3 Juan', 'c. 85–95', 'Éfeso'],
            ['Apocalipsis', 'c. 95', 'La isla de Patmos']
          ],
          nota: 'Algunos fechan el Evangelio de Juan antes del 70; ver la estación VIII.2.'
        }),
        cita('Juan 21:20-24', 'Volviéndose Pedro, vio que les seguía el discípulo a quien amaba Jesús, el mismo que en la cena se había recostado al lado de él, y le había dicho: Señor, ¿quién es el que te ha de entregar? Cuando Pedro le vio, dijo a Jesús: Señor, ¿y qué de éste? Jesús le dijo: Si quiero que él quede hasta que yo venga, ¿qué a ti? Sígueme tú. Este dicho se extendió entonces entre los hermanos, que aquel discípulo no moriría. Pero Jesús no le dijo que no moriría, sino: Si quiero que él quede hasta que yo venga, ¿qué a ti? Este es el discípulo que da testimonio de estas cosas, y escribió estas cosas; y sabemos que su testimonio es verdadero.')
      ],
      texto: [
        'De los doce apóstoles, Juan fue el que vivió más tiempo. Era probablemente el más joven, y los escritores cristianos del siglo II coinciden en que pasó sus últimos años en Éfeso, la gran ciudad de Asia donde Pablo había trabajado tres años. Ireneo de Lyon, que de joven escuchó a Policarpo, discípulo de Juan, dice que Juan vivió en Éfeso hasta los tiempos del emperador Trajano, que reinó desde el 98.',
        { h: 'Un rumor que Juan corrigió' },
        'El final del Evangelio de Juan cuenta un detalle curioso. Jesús le había dicho a Pedro sobre Juan: «Si quiero que él quede hasta que yo venga, ¿qué a ti?». Y «este dicho se extendió entonces entre los hermanos, que aquel discípulo no moriría». Juan aclara que Jesús no dijo eso (Jn 21:22-23). La aclaración tiene sentido si Juan era ya muy anciano y algunos esperaban que el Señor volviera antes de su muerte; o si ya había muerto, y sus discípulos, que añadieron que «su testimonio es verdadero» (Jn 21:24), quisieron explicar que la promesa no había fallado.',
        { h: 'El último evangelio' },
        'La mayoría ubica el Evangelio de Juan hacia el 85 o el 90. Juan conocía los otros evangelios y escogió contar otras cosas: el ministerio en Judea, las fiestas, las largas conversaciones de Jesús y sus siete señales, para que sus lectores creyeran que Jesús es el Cristo, el Hijo de Dios, y tuvieran vida en su nombre (Jn 20:30-31). Sus tres cartas, de los mismos años, enfrentan a maestros que negaban que Jesucristo hubiera venido en carne (1 Jn 4:2-3; 2 Jn 7).',
        { h: 'Un testigo hasta el fin' },
        'Juan comenzó su primera carta con las palabras de un testigo: «Lo que era desde el principio, lo que hemos oído, lo que hemos visto con nuestros ojos, lo que hemos contemplado, y palparon nuestras manos tocante al Verbo de vida» (1 Jn 1:1). Sesenta años después de la cruz, el último apóstol seguía dando el mismo testimonio. Una tradición antigua cuenta que, ya muy anciano, lo llevaban en brazos a la reunión de la iglesia y solo repetía: «Hijitos, amaos los unos a los otros».'
      ],
      pensar: 'Juan dio testimonio de Jesús durante casi setenta años, desde el Jordán hasta Éfeso. ¿Qué testimonio quieres que dejen tus palabras y tu vida cuando seas anciano?'
    },
    {
      id: 'patmos', n: 'Domiciano y Patmos', ref: 'Apocalipsis 1:1-3, 9-11; 2:1–3:22', fecha: [95, 100],
      visual: [
        img('../imperio-romano/img/roma-juan-patmos.webp', 'Un anciano de barba blanca, de pie sobre una roca de la isla de Patmos, contempla el mar Egeo al amanecer', 'Juan en Patmos, «por causa de la palabra de Dios» (Ap 1:9).'),
        mapa({ view: V.egeo, capas: ['roma-117'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia', 'laodicea', 'roma'], trazos: ['siete-iglesias'] }),
        cita('Apocalipsis 1:9-11', 'Yo Juan, vuestro hermano, y copartícipe vuestro en la tribulación, en el reino y en la paciencia de Jesucristo, estaba en la isla llamada Patmos, por causa de la palabra de Dios y el testimonio de Jesucristo. Yo estaba en el Espíritu en el día del Señor, y oí detrás de mí una gran voz como de trompeta, que decía: Yo soy el Alfa y la Omega, el primero y el último. Escribe en un libro lo que ves, y envíalo a las siete iglesias que están en Asia: a Efeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea.')
      ],
      texto: [
        'El último libro de la Biblia se escribió en la isla de Patmos, en el mar Egeo, a unos cien kilómetros de Éfeso. Juan dice que estaba allí «por causa de la palabra de Dios y el testimonio de Jesucristo» (Ap 1:9): había sido desterrado por su fe.',
        { h: 'Bajo Domiciano' },
        'Ireneo de Lyon, a fines del siglo II, escribió que la visión fue vista «casi en nuestra generación, hacia el final del reinado de Domiciano». Domiciano, hijo de Vespasiano, gobernó del 81 al 96 y exigió que lo llamaran «señor y dios». En sus últimos años persiguió a quienes se negaban a darle culto, incluso a parientes suyos acusados de seguir costumbres judías. Por eso la mayoría de los estudiosos fecha el Apocalipsis hacia el 95. Cuando Domiciano fue asesinado, en el 96, su sucesor Nerva liberó a los desterrados, y según la tradición Juan volvió a Éfeso.',
        { posturas: {
          titulo: '¿Cuándo se escribió el Apocalipsis?',
          a: { n: 'Hacia el 95, bajo Domiciano', t: 'Es el testimonio de Ireneo, que conoció a discípulos de Juan, y el de otros escritores antiguos. Encaja con la situación de las siete iglesias: Laodicea, rica y autosuficiente (Ap 3:17), se había reconstruido sola después de un terremoto en el 60; la iglesia de Éfeso había dejado su primer amor (Ap 2:4), algo que requiere tiempo desde su fundación; y el culto al emperador presionaba a los cristianos de Asia.' },
          b: { n: 'Hacia el 68, bajo Nerón', t: 'Otros lo ubican después de la persecución de Nerón y antes de la caída de Jerusalén, porque Apocalipsis 11:1-2 manda medir el templo, y piensan que todavía estaba en pie. Esta fecha suele ir con la lectura que ve cumplida la mayor parte del libro en la destrucción de Jerusalén en el 70.' },
          c: 'El testimonio más antiguo y los detalles de las cartas a las iglesias favorecen el 95. El templo de Apocalipsis 11 es parte de la visión de los tiempos del fin y no exige que el templo de Herodes siguiera en pie. La lectura futurista del libro no depende de la fecha, pero la del 95 encaja mejor con ella: el Apocalipsis no anuncia la caída de Jerusalén, ya ocurrida, sino los acontecimientos que precederán a la venida de Cristo.'
        } },
        { h: 'El fin de la era apostólica' },
        'Juan murió en Éfeso hacia el año 100, en tiempos de Trajano. Con él terminó la generación de los testigos que habían visto al Señor, y terminó también la revelación que Dios dio a la iglesia por medio de los apóstoles. El último libro de la Biblia cierra con una promesa que sigue en pie: «Ciertamente vengo en breve» (Ap 22:20).',
        ir('Ver en Apocalipsis: Patmos y la fecha', R.apocalipsis + '#introduccion/3')
      ],
      pensar: 'Juan, desterrado y anciano, recibió en una isla solitaria la revelación de la victoria final de Cristo. ¿Qué perspectiva te da el Apocalipsis cuando te sientes aislado o en tiempos difíciles?'
    }
  ];

  // ================== RUTA VIII. Cuándo se escribió cada libro ==================
  const libros = [
    {
      id: 'veintisiete', n: 'Los 27 libros en orden', ref: 'Lucas 1:1-4; 2 Pedro 3:15-16; Apocalipsis 22:18-19', fecha: [45, 95],
      visual: [
        esq('cr-libros.svg', 'Línea de tiempo del 40 al 100 d.C. con los 27 libros del Nuevo Testamento ubicados en el año probable en que se escribieron, agrupados en evangelios y Hechos, cartas de Pablo, cartas generales y escritos de Juan, con una línea vertical en el año 70', 'Los 27 libros en el orden en que se escribieron (fechas probables).', 'Los 27 libros'),
        tabla({
          titulo: 'Fechas probables de los 27 libros',
          cab: ['Libro', 'Fecha probable', 'Desde dónde'],
          filas: [
            ['Santiago', 'c. 45–49', 'Jerusalén'],
            ['Gálatas', 'c. 48–49', 'Antioquía'],
            ['1 y 2 Tesalonicenses', 'c. 50–51', 'Corinto'],
            ['Mateo', 'c. 50–60', 'Judea o Antioquía'],
            ['1 Corintios', 'c. 55–56', 'Éfeso'],
            ['2 Corintios', 'c. 56', 'Macedonia'],
            ['Romanos', 'c. 57', 'Corinto'],
            ['Marcos', 'c. 55–65', 'Roma'],
            ['Lucas', 'c. 60–61', 'Cesarea o Roma'],
            ['Efesios, Colosenses, Filemón', 'c. 60–61', 'Roma'],
            ['Filipenses', 'c. 61–62', 'Roma'],
            ['Hechos', 'c. 62', 'Roma'],
            ['1 Timoteo, Tito', 'c. 62–64', 'Macedonia'],
            ['1 Pedro', 'c. 63–64', 'Roma'],
            ['2 Pedro', 'c. 64–67', 'Roma'],
            ['Judas', 'c. 65–70', 'Desconocido'],
            ['Hebreos', 'c. 64–68', 'Desconocido (¿Italia?)'],
            ['2 Timoteo', 'c. 66–67', 'Roma'],
            ['Juan', 'c. 85–90', 'Éfeso'],
            ['1, 2 y 3 Juan', 'c. 85–95', 'Éfeso'],
            ['Apocalipsis', 'c. 95', 'Patmos']
          ],
          nota: 'Fechas aproximadas según estudiosos que aceptan la autoría tradicional. Varias se discuten; las estaciones siguientes explican por qué.'
        })
      ],
      texto: [
        'El Nuevo Testamento no está ordenado según el momento en que se escribió cada libro. Primero vienen los evangelios y Hechos, que cuentan la historia; después, las cartas de Pablo, ordenadas más o menos de la más larga a la más corta; luego, las cartas generales, y al final, el Apocalipsis. Si se ordenan por fecha, el panorama cambia.',
        { h: 'Primero las cartas' },
        'Los primeros libros que se escribieron no fueron los evangelios, sino cartas. La de Santiago y la de Pablo a los Gálatas son probablemente de fines de los años 40, y las dos a los Tesalonicenses, del 50 o el 51. Esas cartas ya dan por sabido lo esencial de la historia de Jesús: Pablo recuerda que Cristo murió por nuestros pecados, fue sepultado, resucitó al tercer día y apareció a muchos testigos, y dice que eso es lo que él mismo había recibido (1 Co 15:3-8). La fe en Jesús resucitado como Señor se proclamaba desde el principio.',
        { h: 'Después los evangelios' },
        'Los evangelios se pusieron por escrito cuando los apóstoles empezaban a envejecer y el evangelio llegaba a lugares lejanos. Antes, la historia de Jesús se enseñaba de memoria, con cuidado, en las iglesias, como lo hacían los maestros judíos con la enseñanza de sus rabinos. Lucas dice que ya «muchos» habían escrito relatos ordenados antes que él (Lc 1:1). Mateo, Marcos y Lucas se escribieron probablemente entre el 50 y el 65; Juan, más tarde.',
        { h: 'Una generación' },
        'Con las fechas que siguen muchos estudiosos conservadores, todo el Nuevo Testamento se escribió en unos cincuenta años, entre el 45 y el 95, y casi todo antes del 70. Fueron escritos por apóstoles o por sus colaboradores cercanos, cuando todavía vivían muchos testigos de los hechos. Ya en vida de los apóstoles, las cartas de Pablo se leían junto con «las otras Escrituras» (2 P 3:15-16).',
        'El autor, la ocasión y el mensaje de cada libro se estudian en el recurso Introducción al Nuevo Testamento.',
        { ir: { t: 'Abrir Introducción al Nuevo Testamento', a: '../../introduccion-nuevo-testamento/' } },
        ir('Ver en La Palabra de Dios: cómo se formó el canon', R.palabra)
      ],
      pensar: 'Antes de que existiera un evangelio escrito, la iglesia ya proclamaba que Jesús murió por nuestros pecados y resucitó. ¿Es ese mensaje también el centro de tu fe?'
    },
    {
      id: 'evangelios-hechos', n: 'Los evangelios y Hechos', ref: 'Lucas 1:1-4; Hechos 1:1-2; 28:30-31; Lucas 21:20-24', fecha: [50, 90],
      visual: [
        img('../hechos/img/hechos-lucas-escribe.webp', 'Lucas, médico de barba corta, escribe en un rollo junto a una mesa con otros rollos y tablillas, en una habitación iluminada por una ventana', 'Lucas escribe su obra en dos tomos.'),
        tabla({
          titulo: 'Por qué Hechos fija la fecha de Lucas',
          cab: ['Hecho', 'Fecha', '¿Lo menciona Hechos?'],
          filas: [
            ['Pablo llega a Roma y pasa dos años en una casa alquilada', '60–62', 'Sí: así termina el libro'],
            ['Muerte de Jacobo, el hermano del Señor', '62', 'No'],
            ['Persecución de Nerón', '64', 'No'],
            ['Muerte de Pedro y de Pablo', 'c. 64–67', 'No'],
            ['Destrucción de Jerusalén', '70', 'No']
          ]
        })
      ],
      texto: [
        'Ningún evangelio dice cuándo se escribió, pero hay un punto de partida firme: Hechos.',
        { h: 'Hechos y Lucas' },
        'Hechos termina con Pablo en Roma, esperando su juicio, predicando «abiertamente y sin impedimento» durante dos años (Hch 28:30-31). Lucas no cuenta el resultado del juicio, ni la muerte de Jacobo en el 62, ni la persecución de Nerón, ni la muerte de Pedro y Pablo, ni la destrucción de Jerusalén, que habría confirmado de manera impresionante las palabras de Jesús que el mismo Lucas registra (Lc 21:20-24). La explicación más sencilla es que escribió Hechos hacia el 62, antes de esos hechos. Y como Hechos es la segunda parte de una obra cuya primera parte es el Evangelio de Lucas (Hch 1:1), el evangelio es anterior: hacia el 60 o el 61, quizás preparado durante los dos años en que Pablo estuvo preso en Cesarea, cuando Lucas pudo entrevistar a testigos en Judea.',
        { h: 'Marcos y Mateo' },
        'Lucas dice que otros habían escrito antes que él (Lc 1:1), y la mayoría piensa que usó el Evangelio de Marcos. Los escritores del siglo II cuentan que Marcos escribió en Roma lo que predicaba Pedro. Si Lucas usó a Marcos, Marcos es de los años 50 o comienzos de los 60. Sobre Mateo, la tradición más antigua dice que fue el primero en escribir, para los creyentes judíos. Muchos lo fechan en los años 50 o 60.',
        { posturas: {
          titulo: '¿Antes o después del año 70?',
          a: { n: 'Antes del 70', t: 'Ninguno de los tres primeros evangelios presenta la destrucción del templo como algo ya ocurrido. Hechos termina hacia el 62 y Lucas es anterior. Las profecías de Jesús sobre Jerusalén se presentan como anuncios, con detalles que no corresponden a una descripción hecha después de los hechos. Esta postura sigue el testimonio de la iglesia antigua.' },
          b: { n: 'Después del 70', t: 'Muchos estudiosos ubican Marcos hacia el 70 y Mateo y Lucas entre el 80 y el 90. Su argumento principal es que Jesús no pudo anunciar con tanta precisión la caída de Jerusalén, y que por eso esos textos se escribieron después de la destrucción del templo.' },
          c: 'El argumento de la segunda postura parte de suponer que la profecía predictiva no es posible. Quien cree que Jesús es el Hijo de Dios no tiene razón para negar que anunció lo que iba a ocurrir. Los datos del propio Nuevo Testamento favorecen las fechas tempranas.'
        } },
        { h: 'Juan' },
        'El Evangelio de Juan se escribió probablemente en Éfeso, hacia el 85 o el 90. Algunos lo fechan antes del 70, porque dice que en Jerusalén «hay» un estanque con cinco pórticos (Jn 5:2). En todo caso, el autor conocía Jerusalén como un testigo: la arqueología encontró ese estanque junto a la iglesia de Santa Ana.',
        ir('Ver en Hechos: cuándo se escribió', R.hechos + '#introduccion/7')
      ],
      pensar: 'Lucas investigó con cuidado y habló con testigos para que Teófilo conociera bien la verdad de lo que había aprendido. ¿Cuánto esfuerzo pones tú en conocer bien lo que crees?'
    },
    {
      id: 'cartas-pablo', n: 'Las trece cartas de Pablo', ref: '1 Tesalonicenses 1:1; 1 Corintios 16:8; Romanos 15:25; Efesios 3:1; Filipenses 1:13; 2 Timoteo 4:6', fecha: [48, 67],
      visual: [
        esq('cr-pablo-cartas.svg', 'Línea de tiempo de los años 46 a 67 con los viajes de Pablo en franjas de color y sus trece cartas marcadas en el lugar y el año en que las escribió', 'Las cartas de Pablo en el orden en que las escribió.', 'Viajes y cartas'),
        tabla({
          titulo: 'Las cartas de Pablo en orden',
          cab: ['Grupo', 'Cartas', 'Años', 'Momento'],
          filas: [
            ['Primeras', 'Gálatas; 1 y 2 Tesalonicenses', '48–51', 'Después del primer viaje; segundo viaje, en Corinto'],
            ['Grandes cartas', '1 y 2 Corintios; Romanos', '55–57', 'Tercer viaje: Éfeso, Macedonia y Corinto'],
            ['De la prisión', 'Efesios, Colosenses, Filemón; Filipenses', '60–62', 'Primera prisión en Roma'],
            ['Pastorales', '1 Timoteo, Tito; 2 Timoteo', '62–67', 'Después de la liberación y segunda prisión']
          ]
        })
      ],
      texto: [
        'Las cartas de Pablo son los libros mejor fechados del Nuevo Testamento, porque casi todas dan pistas sobre dónde estaba Pablo y qué estaba haciendo. Unidas a Hechos, permiten ubicarlas con un margen de uno o dos años.',
        { h: 'Las primeras cartas' },
        'Gálatas, si fue escrita a las iglesias del primer viaje, es de hacia el 48 o el 49 (estación VI.1). Las dos cartas a los Tesalonicenses son seguras: Pablo las escribió desde Corinto, poco después de fundar la iglesia de Tesalónica, cuando Timoteo volvió con noticias (1 Ts 3:6; Hch 18:5). Eso las ubica en el 50 o el 51, en tiempos de Galión. Hablan mucho de la venida del Señor, porque los nuevos creyentes tenían preguntas sobre los que morían antes de ella (1 Ts 4:13-18).',
        { h: 'Las grandes cartas' },
        'Durante el tercer viaje, Pablo escribió las cartas más extensas. 1 Corintios, desde Éfeso, hacia el 55 o el 56 (1 Co 16:8); 2 Corintios, desde Macedonia, hacia el 56; y Romanos, desde Corinto, en el invierno del 56 al 57, antes de llevar la ofrenda a Jerusalén (Ro 15:25-26). En ellas Pablo expone con más detalle el evangelio de la gracia, los dones del Espíritu y la resurrección.',
        { h: 'Las cartas de la prisión' },
        'Efesios, Colosenses, Filemón y Filipenses se escribieron desde la cárcel (Ef 3:1; Col 4:18; Flm 1; Fil 1:13). La mayoría piensa que Pablo estaba en Roma, entre el 60 y el 62; algunos proponen Cesarea o una prisión en Éfeso. Efesios, Colosenses y Filemón fueron juntas, llevadas por Tíquico y Onésimo (Col 4:7-9). Filipenses, que menciona «la casa de César» y el pretorio (Fil 1:13; 4:22), parece la última del grupo, cuando Pablo esperaba la sentencia.',
        { h: 'Las cartas pastorales' },
        '1 Timoteo y Tito suponen viajes posteriores a Hechos, y 2 Timoteo, una segunda prisión que Pablo sabe definitiva (2 Ti 4:6). Por eso se fechan entre el 62 y el 67. Algunos estudiosos piensan que fueron escritas por discípulos de Pablo después de su muerte, pero las tres llevan su nombre, contienen detalles personales difíciles de inventar, como el capote que dejó en Troas (2 Ti 4:13), y la iglesia antigua las recibió como suyas.',
        ir('Ver en Los viajes de Pablo: trece cartas, un mapa', R.pablo + '#cartas/1')
      ],
      pensar: 'Pablo escribió cartas a iglesias reales, con problemas reales, y Dios las usó para enseñar a la iglesia de todos los tiempos. ¿Qué problema de tu vida o de tu iglesia podría encontrar respuesta en una de esas cartas?'
    },
    {
      id: 'generales', n: 'Las cartas generales y los escritos de Juan', ref: 'Hebreos 8:4; 10:1-2; 13:23-24; 1 Pedro 5:12-13; 2 Pedro 1:14; Judas 17-18', fecha: [45, 95],
      visual: [
        tabla({
          titulo: 'Las cartas generales',
          cab: ['Carta', 'Fecha probable', 'Pistas'],
          filas: [
            ['Santiago', 'c. 45–49', 'Tono judío; no menciona la cuestión de los gentiles; Jacobo murió en el 62'],
            ['1 Pedro', 'c. 63–64', 'Desde «Babilonia», es decir, Roma (5:13); sufrimientos por el nombre de Cristo'],
            ['2 Pedro', 'c. 64–67', 'Pedro sabe que morirá pronto (1:14); conoce cartas de Pablo (3:15-16)'],
            ['Judas', 'c. 65–70', 'Combate a los mismos falsos maestros que 2 Pedro'],
            ['Hebreos', 'c. 64–68', 'Los sacrificios del templo todavía se ofrecen (8:4; 10:1-2); Timoteo liberado (13:23)'],
            ['1, 2 y 3 Juan', 'c. 85–95', 'Escritas por el anciano Juan en Éfeso; falsos maestros que niegan la encarnación'],
            ['Apocalipsis', 'c. 95', 'Bajo Domiciano, en Patmos (1:9)']
          ]
        }),
        img('../apocalipsis/img/apo-lectura-iglesia.webp', 'En una casa del siglo I, un hombre lee en voz alta un rollo ante una iglesia reunida, a la luz de lámparas de aceite', 'Las cartas se leían en voz alta en las reuniones de la iglesia (Ap 1:3; Col 4:16).')
      ],
      texto: [
        'Las siete cartas que no son de Pablo se llaman «generales» porque, salvo 2 y 3 Juan, no van dirigidas a una iglesia o a una persona, sino a creyentes de varias regiones. Sus fechas se calculan por las pistas que contienen.',
        { h: 'Pedro y Judas' },
        'La primera carta de Pedro se escribió desde Roma, con la ayuda de Silvano, y menciona a Marcos (1 P 5:12-13). Habla de un «fuego de prueba» que ya ha llegado (1 P 4:12), por lo que muchos la fechan hacia el 63 o el 64, en los comienzos de la persecución de Nerón. La segunda carta es un testamento: Pedro sabe que pronto dejará el cuerpo (2 P 1:14) y advierte contra falsos maestros. Judas, hermano de Jacobo (Jud 1), combate a maestros muy parecidos, y por eso las dos cartas suelen fecharse en los mismos años, a mediados de los 60.',
        { h: 'Hebreos' },
        'La carta a los Hebreos no dice quién la escribió, pero da una pista importante sobre su fecha. Habla del sacerdocio y los sacrificios del templo en tiempo presente: hay «aún sacerdotes que presentan las ofrendas según la ley» (He 8:4), y los sacrificios se ofrecen «continuamente cada año» (He 10:1). Toda la carta argumenta que el antiguo pacto está «próximo a desaparecer» (He 8:13). Si el templo ya hubiera sido destruido, el autor difícilmente habría dejado de mencionarlo como prueba de su argumento. Por eso se fecha antes del 70, probablemente entre el 64 y el 68. La carta menciona que Timoteo había sido puesto en libertad (He 13:23).',
        { h: 'Los escritos de Juan' },
        'Las tres cartas de Juan y el Apocalipsis son los últimos libros del Nuevo Testamento. Las cartas se escribieron en Éfeso, entre el 85 y el 95, cuando ya habían salido de la iglesia algunos que negaban que Jesucristo hubiera venido en carne (1 Jn 2:18-19; 4:2-3). El Apocalipsis, hacia el 95, desde Patmos (estación VII.6). Con él se cerró el canon: la revelación que Dios dio por medio de los apóstoles quedó completa.',
        ir('Ver en De la Biblia a nosotros: cómo se copió el Nuevo Testamento', R.manuscritos)
      ],
      pensar: 'Estas cartas se escribieron para iglesias que sufrían, enfrentaban falsas enseñanzas o se cansaban de esperar. ¿Cuál de esas situaciones se parece más a la tuya hoy?'
    },
    {
      id: 'antes-del-70', n: '¿Por qué casi todo es anterior al 70?', ref: '1 Corintios 15:3-8; Hebreos 10:11-14; Juan 5:2; Lucas 1:2; 2 Pedro 1:16', fecha: [45, 100],
      visual: [
        foto('../de-la-biblia-a-nosotros/img/papiro-p52.webp', 'Fragmento de papiro con forma aproximadamente triangular, del tamaño de una tarjeta, con letras griegas en tinta oscura', 'Papiro 52 (Biblioteca John Rylands, Mánchester): Juan 18:31-33, copiado en Egipto en la primera mitad del siglo II.', 'Dominio público, vía Wikimedia Commons'),
        tabla({
          titulo: 'El gran silencio',
          cab: ['Si el libro fuera posterior al 70, esperaríamos…', 'Pero…'],
          filas: [
            ['Que Hebreos usara la caída del templo como prueba de que los sacrificios terminaron', 'Habla de sacerdotes que todavía ofrecen (He 8:4; 10:11)'],
            ['Que Hechos contara la muerte de Pablo, de Pedro y de Jacobo', 'Termina con Pablo vivo en Roma, hacia el 62'],
            ['Que los evangelios destacaran el cumplimiento de las palabras de Jesús sobre el templo', 'Las presentan solo como anuncio (Mt 24:2; Lc 21:20)'],
            ['Que las cartas de Pablo reflejaran la persecución de Nerón', 'Romanos habla bien de las autoridades (Ro 13:1-7)']
          ]
        })
      ],
      texto: [
        'Al ordenar los libros por fecha, aparece un hecho llamativo: con la excepción de los escritos de Juan, todos los libros del Nuevo Testamento son probablemente anteriores al año 70. Ninguno habla de la destrucción de Jerusalén y del templo como de algo ya ocurrido, aunque fue el hecho más traumático de la historia judía de ese siglo y habría confirmado las palabras de Jesús.',
        { h: 'Un silencio que habla' },
        'El silencio es especialmente notable en Hebreos, cuyo argumento central es que los sacrificios del templo ya no son necesarios porque Cristo ofreció «una vez para siempre un solo sacrificio» (He 10:12). Si el templo ya hubiera sido destruido, ¿qué mejor prueba? Y en Hechos, que termina sin contar la muerte de Pablo, aunque el libro entero conduce a su juicio ante el César. La explicación más sencilla es que esos hechos todavía no habían ocurrido.',
        { h: 'Escritos por testigos' },
        'Si los libros se escribieron entre el 45 y el 70, sus autores escribieron cuando todavía vivían muchas personas que habían visto y oído a Jesús. Pablo podía decir que el Señor resucitado se había aparecido a más de quinientos hermanos a la vez, «de los cuales muchos viven aún» (1 Co 15:6). Era una invitación a preguntarles. Pedro escribió: «no os hemos dado a conocer el poder y la venida de nuestro Señor Jesucristo siguiendo fábulas artificiosas, sino como habiendo visto con nuestros propios ojos su majestad» (2 P 1:16).',
        { h: 'Las copias más antiguas' },
        'Hay además evidencia material. El fragmento de papiro más antiguo que se conoce del Nuevo Testamento, el Papiro 52, contiene unos versículos de Juan 18 y fue copiado en Egipto en la primera mitad del siglo II. Si el último evangelio ya se copiaba y circulaba en Egipto pocos años después del 100, no puede haberse escrito mucho después de la fecha que da la tradición. Y hacia el 95, Clemente de Roma ya citaba o aludía a Hebreos y a varias cartas de Pablo.',
        { h: 'La plenitud de los tiempos' },
        'Esta cronología termina donde empezó: en el tiempo de Dios. En un siglo, Dios envió a su Hijo, lo levantó de los muertos, derramó su Espíritu, formó su iglesia entre judíos y gentiles y dejó su Palabra escrita por testigos. Ahora el reloj de la historia avanza hacia el último acontecimiento anunciado: el regreso de Cristo, cuyo día y hora nadie sabe (Mt 24:36), pero que es tan seguro como todo lo que ya se cumplió.',
        linea('Volver a la línea de tiempo completa')
      ],
      pensar: 'El Nuevo Testamento fue escrito por testigos que dieron su vida por lo que vieron. ¿Qué responsabilidad tienes tú, que has recibido su testimonio, de seguir anunciándolo?'
    }
  ];

  const E = window.__CR;
  // Línea de tiempo por ruta: la general y las de cada período
  const hitos = [
    { a: -4, t: 'Muere Herodes' }, { a: 29, t: 'Bautismo' }, { a: 33, t: 'Cruz y Pentecostés' },
    { a: 49, t: 'Concilio' }, { a: 64, t: 'Incendio de Roma' }, { a: 70, t: 'Cae el templo' }, { a: 95, t: 'Patmos' }
  ];
  const L = {
    general: { desde: -8, hasta: 100, hitos },
    nacimiento: { desde: -8, hasta: 30, hitos: [{ a: -5, t: 'Nace Jesús' }, { a: -4, t: 'Muere Herodes' }, { a: 6, t: 'Judea, provincia' }, { a: 8, t: 'Jesús a los doce' }, { a: 14, t: 'Tiberio' }, { a: 26, t: 'Pilato' }] },
    ministerio: { desde: 26, hasta: 34, hitos: [{ a: 26, t: 'Pilato' }, { a: [28, 29], t: 'Año 15 de Tiberio' }, { a: 29, t: 'Bautismo' }, { a: 30, t: 'Pascua' }, { a: 31, t: 'Fiesta' }, { a: 32, t: 'Pascua' }, { a: 33, t: 'Pascua: la cruz' }] },
    semana: { desde: 26, hasta: 36, hitos: [{ a: 26, t: 'Pilato' }, { a: 29, t: 'Bautismo' }, { a: 30, t: 'Viernes 7 de abril' }, { a: 31, t: 'Cae Sejano' }, { a: 33, t: 'Viernes 3 de abril' }, { a: 36, t: 'Pilato y Caifás, depuestos' }] },
    jerusalen: { desde: 32, hasta: 50, hitos: [{ a: 33, t: 'Pentecostés' }, { a: 34, t: 'Esteban; Saulo' }, { a: 37, t: 'Calígula' }, { a: 41, t: 'Claudio' }, { a: 44, t: 'Muere Agripa I' }, { a: [46, 47], t: 'Hambre' }] },
    pablo: { desde: 44, hasta: 64, hitos: [{ a: [46, 48], t: 'Primer viaje' }, { a: 49, t: 'Concilio' }, { a: [51, 52], t: 'Galión' }, { a: 54, t: 'Nerón' }, { a: 57, t: 'Arresto' }, { a: 59, t: 'Festo' }, { a: [60, 62], t: 'Roma' }] },
    apostoles: { desde: 60, hasta: 100, hitos: [{ a: 62, t: 'Muere Jacobo' }, { a: 64, t: 'Incendio de Roma' }, { a: 67, t: 'Pedro y Pablo' }, { a: 70, t: 'Cae el templo' }, { a: 81, t: 'Domiciano' }, { a: 95, t: 'Patmos' }, { a: 98, t: 'Trajano' }] },
    libros: { desde: 40, hasta: 100, hitos: [{ a: 49, t: 'Santiago y Gálatas' }, { a: 57, t: 'Romanos' }, { a: 62, t: 'Hechos' }, { a: 67, t: '2 Timoteo' }, { a: 70, t: 'Cae el templo' }, { a: 90, t: 'Juan' }, { a: 95, t: 'Apocalipsis' }] }
  };
  window.RUTA_DATA = {
    titulo: 'Cronología del Nuevo Testamento',
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
      { id: 'fechar', grupo: 'Las bases', n: 'I. Cómo se fecha el Nuevo Testamento', info: 'Fechas sin calendario, Dionisio el Exiguo, cómo se contaba el tiempo, las anclas y el panorama', estaciones: E.fechar, linea: L.general },
      { id: 'nacimiento', grupo: 'La vida de Jesús', n: 'II. Nacimiento e infancia de Jesús', info: 'Zacarías, el censo de Cirenio, los magos, la fecha del nacimiento, Egipto y Nazaret', estaciones: E.nacimiento, linea: L.nacimiento },
      { id: 'ministerio', grupo: 'La vida de Jesús', n: 'III. El ministerio de Jesús', info: 'El año quince de Tiberio, «como de treinta años», el templo, las Pascuas de Juan y el orden', estaciones: E.ministerio, linea: L.ministerio },
      { id: 'semana', grupo: 'La vida de Jesús', n: 'IV. La última semana y el año de la cruz', info: 'Día por día, el día y el año de la cruz, Daniel 9 y Pentecostés', estaciones: E.semana, linea: L.semana },
      { id: 'jerusalen', grupo: 'La iglesia', n: 'V. La iglesia de Jerusalén y la expansión', info: 'Esteban, la conversión de Pablo, Cornelio y Antioquía, Agripa I y el hambre', estaciones: E.jerusalen, linea: L.jerusalen },
      { id: 'pablo', grupo: 'La iglesia', n: 'VI. Los viajes de Pablo y sus cartas', info: 'Gálatas, el concilio, Claudio, Galión, Éfeso y Romanos, Festo y Roma', estaciones: E.pablo, linea: L.pablo },
      { id: 'apostoles', grupo: 'La iglesia', n: 'VII. Los últimos años de los apóstoles', info: 'Jacobo, Nerón, Pedro y Pablo, la caída de Jerusalén, Juan en Éfeso y Patmos', estaciones: apostoles, linea: L.apostoles },
      { id: 'libros', grupo: 'Los libros', n: 'VIII. Cuándo se escribió cada libro', info: 'Los 27 libros en orden, los evangelios, las cartas y por qué casi todo es anterior al 70', estaciones: libros, linea: L.libros }
    ]
  };
})();
