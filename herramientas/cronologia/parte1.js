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
        cita('Lucas 3:1-2', '@@lc/3/1-2'),
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
        cita('Lucas 1:5-9', '@@lc/1/5-9'),
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
        cita('Lucas 2:1-5', '@@lc/2/1-5')
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
        cita('Mateo 2:16', '@@mt/2/16')
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
        cita('Mateo 2:19-23', '@@mt/2/19-23')
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
        cita('Lucas 2:46-52', '@@lc/2/46-52'),
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
