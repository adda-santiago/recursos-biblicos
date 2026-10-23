/* ==========================================================
   Recursos Bíblicos — El movimiento pentecostal · contenido de las rutas
   FUENTE de public/apps/movimiento-pentecostal/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/pentecostal_citas.py
   Las siete partes forman UNA sola función: parte1 la abre y parte7 la cierra.
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Mapas: mapa base del mundo (assets/js/mapa-mundo.js) y geografía propia pentecostal-geo.js
   (generada por geo/pentecostal.py) sobre imperios-geo.js.
   Cifras actuales: Status of Global Christianity 2026 (Gordon-Conwell), Fraternidad Mundial de las
   Asambleas de Dios (2025), Pew Research Center (2014), Latinobarómetro (2024), censos de Brasil (2022)
   y Chile (2024). Se revisan periódicamente (DIRECTRICES §20).
   ========================================================== */
(() => {
  // ---------- Ayudas ----------
  const V = {
    mundo: [[-48, -125], [68, 145]],
    eeuu: [[25, -125], [50, -68]],
    atlantico: [[10, -100], [64, 30]],
    europa: [[48, -10], [63, 25]],
    asia: [[-10, 65], [45, 135]],
    africa: [[-36, -20], [15, 45]],
    america: [[-56, -120], [34, -34]],
    sudamerica: [[-56, -85], [13, -34]],
    chile: [[-42, -78], [-30, -66]],
    andes: [[-25, -82], [2, -60]],
    centro: [[7, -110], [33, -60]]
  };
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/pentecostal_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(["africa-culto.webp", "altiplano.webp", "azusa-culto.webp", "barratt.jpg", "belem.webp", "berea.webp", "calle-chile.webp", "carpa-sanidad.webp", "esquema-arbol.svg", "esquema-brasil.svg", "esquema-discernir.svg", "esquema-evangelio.svg", "esquema-obras.svg", "esquema-olas.svg", "estadio-1954.webp", "fe-apostolica.jpg", "hoover.jpg", "hot-springs.webp", "iglesia-hoy.webp", "misioneros-barco.webp", "mukti.webp", "parham.jpg", "pentecostes.webp", "playa-bautismo.webp", "ramabai.jpg", "renovacion.webp", "seymour.jpg", "seymour.webp", "topeka.webp"]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (f.startsWith('../') ? { src: EMB[f] || f } : HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  const H2 = '../../historia-iglesia-2/';

  // ================== RUTA I. Las raíces ==================
  const raices = [
    {
      id: 'promesa', n: 'La promesa y Pentecostés', ref: 'Joel 2:28-29; Hechos 2:1-21; Hechos 1:8', fecha: 30,
      visual: [
        img('pentecostes.webp', 'En una sala alta de Jerusalén, unos ciento veinte discípulos, hombres y mujeres, oran juntos; sobre la cabeza de cada uno se posa una pequeña llama, y un viento recio agita los mantos y las lámparas; Pedro y Juan están entre ellos', '«Y se les aparecieron lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos» (Hechos 2:3). Recreación.'),
        cita('Hechos 2:1-4', 'Cuando llegó el día de Pentecostés, estaban todos unánimes juntos. Y de repente vino del cielo un estruendo como de un viento recio que soplaba, el cual llenó toda la casa donde estaban sentados; y se les aparecieron lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos. Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.'),
        tabla({
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Qué estudia'],
          filas: [
            ['I. Las raíces', 'Pentecostés en Hechos, los dones en la historia, Wesley, la santidad, Keswick y Topeka'],
            ['II. Azusa y la primera expansión', 'Seymour, la calle Azusa y el fuego que llega a todos los continentes (1906-1914)'],
            ['III. Organización y controversias', 'Las primeras iglesias, los debates de doctrina y el camino a la aceptación (1907-1960)'],
            ['IV. América Latina', 'Chile, Brasil, los latinos de Estados Unidos, México, Centroamérica, Argentina y los Andes'],
            ['V. Renovación y nuevas olas', 'Los carismáticos, la tercera ola, el neopentecostalismo, Asia y África'],
            ['VI. Lo que enseñan los pentecostales', 'El evangelio completo, el bautismo en el Espíritu, los dones, la santidad y la misión'],
            ['VII. Desafíos y discernimiento', 'La prosperidad, los nuevos apóstoles, las manifestaciones extrañas y cómo probar los espíritus']
          ],
          nota: 'Las cifras de hoy se tomaron de las fuentes más recientes disponibles en octubre de 2026 y se indican con su año.'
        }, 'Las rutas')
      ],
      texto: [
        'Este recurso cuenta la historia del movimiento pentecostal: cómo nació a comienzos del siglo XX, cómo se extendió por todo el mundo y cómo llegó a ser, junto con los carismáticos, una de las corrientes más numerosas del cristianismo. Pero esa historia no empieza en el siglo XX. Empieza con una promesa de Dios y con un día de fiesta en Jerusalén.',
        { h: 'La promesa' },
        'Unos ocho siglos antes de Cristo, el profeta Joel anunció un tiempo en que el Espíritu de Dios ya no vendría solo sobre algunos profetas, reyes o sacerdotes, sino sobre todo el pueblo: «derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones» (Jl 2:28). Juan el Bautista dijo que el que venía después de él bautizaría «en Espíritu Santo y fuego» (Mt 3:11), y Jesús, antes de subir al cielo, prometió a sus discípulos: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos» (Hch 1:8).',
        { h: 'El día de Pentecostés' },
        'Pentecostés era la fiesta de la cosecha, cincuenta días después de la Pascua. Los discípulos esperaban en Jerusalén, unos ciento veinte, orando juntos. Ese día vino del cielo un estruendo como de un viento recio, aparecieron lenguas como de fuego sobre cada uno, «y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). Los judíos que habían llegado de muchas naciones los oían hablar en sus propios idiomas las maravillas de Dios. Pedro, el mismo que había negado a Jesús, se levantó y explicó que eso era lo que había anunciado Joel. Ese día se convirtieron unas tres mil personas.',
        'Pedro terminó su sermón con una promesa que no se limitaba a ese día: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). El movimiento pentecostal tomó su nombre de este día, porque nació de la convicción de que esa promesa sigue vigente: que el mismo Espíritu que llenó a los discípulos llena hoy a los creyentes que lo buscan, para que sean testigos de Cristo con poder.',
        { h: 'Cómo usar este recurso' },
        'Las siete rutas siguen un orden aproximadamente cronológico. Las rutas I a III cuentan los orígenes y los primeros cincuenta años; la ruta IV reúne la historia de América Latina; la ruta V, las nuevas corrientes desde 1960; la ruta VI resume lo que enseñan los pentecostales, y la ruta VII estudia los desafíos y los desvíos de hoy. La historia general de la iglesia, de la Reforma a hoy, está en Historia de la Iglesia II, y la doctrina del Espíritu Santo tendrá su propio recurso (en preparación).',
        ir('Ver la historia de la iglesia de la Reforma a hoy', H2)
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es también «para todos los que están lejos» (Hch 2:39). ¿Crees que esa promesa es para ti? ¿Qué lugar ocupa en tu vida de oración?'
    },
    {
      id: 'hechos', n: 'El Espíritu en el libro de los Hechos', ref: 'Hechos 2:1-4; Hechos 8:14-17; Hechos 9:17; Hechos 10:44-46; Hechos 19:1-7', fecha: [30, 55],
      visual: [
        tabla({
          titulo: 'Cinco veces en que el Espíritu vino sobre creyentes en Hechos',
          cab: ['Pasaje', 'Quiénes', 'Qué ocurrió'],
          filas: [
            ['Hch 2:1-4', 'Los discípulos en Jerusalén', 'Viento, lenguas de fuego; hablaron en otras lenguas'],
            ['Hch 8:14-17', 'Los samaritanos', 'Ya habían creído y sido bautizados; recibieron el Espíritu cuando Pedro y Juan les impusieron las manos'],
            ['Hch 9:17-18', 'Saulo de Tarso', 'Ananías le impuso las manos para que fuera lleno del Espíritu (1 Co 14:18 dice que hablaba en lenguas)'],
            ['Hch 10:44-46', 'Cornelio y su casa', 'El Espíritu cayó mientras Pedro predicaba; hablaban en lenguas y magnificaban a Dios'],
            ['Hch 19:1-7', 'Doce discípulos en Éfeso', 'Pablo les impuso las manos; hablaban en lenguas y profetizaban']
          ],
          nota: 'En tres de los cinco relatos el texto menciona expresamente las lenguas; en los otros dos se dejan ver efectos visibles (Hch 8:18) o se mencionan después (1 Co 14:18).'
        }, 'Cinco relatos'),
        cita('Hechos 19:1-7', 'Aconteció que entre tanto que Apolos estaba en Corinto, Pablo, después de recorrer las regiones superiores, vino a Efeso, y hallando a ciertos discípulos, les dijo: ¿Recibisteis el Espíritu Santo cuando creísteis? Y ellos le dijeron: Ni siquiera hemos oído si hay Espíritu Santo. Entonces dijo: ¿En qué, pues, fuisteis bautizados? Ellos dijeron: En el bautismo de Juan. Dijo Pablo: Juan bautizó con bautismo de arrepentimiento, diciendo al pueblo que creyesen en aquel que vendría después de él, esto es, en Jesús el Cristo. Cuando oyeron esto, fueron bautizados en el nombre del Señor Jesús. Y habiéndoles impuesto Pablo las manos, vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban. Eran por todos unos doce hombres.')
      ],
      texto: [
        'El día de Pentecostés no fue un hecho aislado. El libro de los Hechos cuenta varias ocasiones en que el Espíritu Santo vino sobre creyentes, y los pentecostales han leído esos relatos con mucha atención, porque en ellos ven un modelo para la iglesia de todos los tiempos.',
        { h: 'Samaria, Saulo y Cornelio' },
        'Cuando Felipe predicó en Samaria, muchos creyeron y fueron bautizados. Pero Lucas dice que el Espíritu Santo «aún no había descendido sobre ninguno de ellos»; Pedro y Juan llegaron desde Jerusalén, oraron por ellos, «les imponían las manos, y recibían el Espíritu Santo» (Hch 8:17). Algo visible ocurrió, porque Simón el mago vio que se daba el Espíritu y quiso comprar ese poder con dinero. Saulo, después de encontrarse con Cristo en el camino a Damasco, recibió la visita de Ananías, que le impuso las manos para que recobrara la vista y fuera lleno del Espíritu Santo. Años después Pablo escribió que hablaba en lenguas más que todos los corintios (1 Co 14:18).',
        'En Cesarea, mientras Pedro predicaba en la casa de Cornelio, un centurión romano, el Espíritu cayó sobre todos los que oían. Los creyentes judíos que acompañaban a Pedro quedaron atónitos de que también sobre los gentiles se derramase el Espíritu, «porque los oían que hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46). Fue la señal que convenció a la iglesia de que Dios recibía a los gentiles (Hch 11:15-18).',
        { h: 'Éfeso' },
        'En Éfeso, Pablo encontró a unos doce discípulos y les preguntó: «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2). No sabían nada de él, porque solo conocían el bautismo de Juan. Pablo les explicó el evangelio, fueron bautizados en el nombre del Señor Jesús, y cuando les impuso las manos, «vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban» (Hch 19:6).',
        { h: 'Cómo leyeron estos relatos los pentecostales' },
        'A partir de estos textos, los pentecostales sacaron tres conclusiones que se estudiarán en la ruta VI. Primero, que el bautismo en el Espíritu Santo es una experiencia que puede ser distinta de la conversión y posterior a ella, como en Samaria y en Éfeso. Segundo, que su propósito principal es dar poder para ser testigos (Hch 1:8). Y tercero, que su señal inicial es hablar en otras lenguas, como en Jerusalén, en Cesarea y en Éfeso. Otros cristianos leen estos relatos de otra manera, como momentos únicos en la expansión del evangelio de los judíos a los samaritanos y a los gentiles. Ambas lecturas coinciden en algo: la iglesia de Hechos era una iglesia llena del Espíritu, que oraba, predicaba con valor y veía la mano de Dios obrar.',
        ir('Estudiar Hechos de los Apóstoles', '../../hechos/')
      ],
      pensar: 'Pablo preguntó a los discípulos de Éfeso: «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2). Si alguien te hiciera hoy esa pregunta, ¿qué le responderías?'
    },
    {
      id: 'dones-historia', n: 'Los dones a lo largo de la historia de la iglesia', ref: '1 Corintios 12:7-11; 1 Corintios 13:8-12; 1 Tesalonicenses 5:19-21', fecha: [100, 1831],
      visual: [
        tabla({
          titulo: 'Algunos testimonios entre los apóstoles y el siglo XX',
          cab: ['Época', 'Testimonio'],
          filas: [
            ['Hacia 150', 'Justino Mártir escribe que los dones proféticos siguen presentes en la iglesia'],
            ['Hacia 180', 'Ireneo de Lyon cuenta que oyó a hermanos que profetizaban y hablaban en lenguas'],
            ['Hacia 170-220', 'El montanismo, en Frigia, anuncia una «nueva profecía»; la iglesia lo rechaza'],
            ['Hacia 400-426', 'Agustín cree primero que las señales cesaron; en La ciudad de Dios registra milagros de su tiempo'],
            ['Edad Media', 'Relatos de sanidades y visiones entre monjes y místicos, mezclados con leyendas'],
            ['Hacia 1700', 'Profetas protestantes perseguidos en las Cevenas, en Francia'],
            ['1831', 'Lenguas y profecías en la iglesia de Eduardo Irving, en Londres']
          ],
          nota: 'Los testimonios son pocos y de valor desigual; muestran que la experiencia de los dones nunca desapareció del todo, no que haya sido común.'
        }, 'Testimonios'),
        mapa({ view: V.europa, lugares: ['h-frigia', 'h-londres'] }, 'Mapa')
      ],
      texto: [
        'Los críticos del movimiento pentecostal preguntaban: si los dones del Espíritu son para hoy, ¿por qué la iglesia no los conoció durante diecinueve siglos? La respuesta honesta es que la historia muestra un cuadro mixto: los dones no fueron comunes en la mayor parte de la historia, pero tampoco desaparecieron del todo.',
        { h: 'La iglesia antigua' },
        'En el siglo II, Justino Mártir escribió a un judío que los dones proféticos seguían presentes entre los cristianos, e Ireneo, obispo de Lyon, dijo que había oído a muchos hermanos que tenían dones proféticos y que hablaban en lenguas por el Espíritu. Con el tiempo, a medida que la iglesia se organizó en torno a los obispos y la liturgia, esas experiencias se fueron haciendo raras. Agustín, a comienzos del siglo V, pensó al principio que las señales habían sido dadas solo para el comienzo de la iglesia; pero al final de su vida, en La ciudad de Dios, registró varias sanidades que había visto en su propia región.',
        { posturas: {
          titulo: '¿Qué fue el montanismo?',
          a: { n: 'Un movimiento que se apartó de la fe', t: 'Hacia el año 170, en Frigia, Montano y dos profetisas, Priscila y Maximila, anunciaron una «nueva profecía». Según sus críticos, hablaban en éxtasis como si el Espíritu hablara en primera persona, se presentaban como la revelación final del Paráclito y añadían reglas a las de los apóstoles. La iglesia los rechazó.' },
          b: { n: 'Una reacción exagerada por sus enemigos', t: 'Otros historiadores señalan que casi todo lo que se sabe del montanismo viene de sus adversarios, que era ortodoxo en la doctrina de Dios y que nació como reacción contra una iglesia que se volvía tibia. Tertuliano, uno de los grandes maestros de la iglesia, se unió a él.' },
          c: 'Hay algo de verdad en ambas. Pero el problema central del montanismo no fue buscar los dones, sino poner una profecía nueva por encima de la enseñanza de los apóstoles. Esa lección sigue vigente: la profecía se juzga por la Escritura (1 Co 14:29; 1 Ts 5:20-21), nunca al revés.'
        } },
        { h: 'De la Reforma al siglo XIX' },
        'Los reformadores insistieron en la autoridad de la Escritura frente a los supuestos milagros que se usaban para respaldar las reliquias y las peregrinaciones, y muchos protestantes concluyeron que los milagros habían cesado con los apóstoles. Aun así, hubo momentos excepcionales: hacia 1700, entre los protestantes perseguidos de las Cevenas, en el sur de Francia, aparecieron profetas, y en 1831, en la iglesia del predicador escocés Eduardo Irving, en Londres, algunos hablaron en lenguas. Ese grupo terminó en excesos y en una iglesia que pretendía restaurar doce apóstoles, lo que sirvió de advertencia para el futuro.',
        'La lección de la historia es doble. Por un lado, la experiencia de los dones no fue un invento del siglo XX. Por otro, cada vez que se buscaron sin el ancla de la Escritura, terminaron en error. Pablo dijo ambas cosas en una sola frase: «No apaguéis al Espíritu. No menospreciéis las profecías. Examinadlo todo; retened lo bueno» (1 Ts 5:19-21).'
      ],
      pensar: 'El montanismo puso la profecía por encima de la Escritura; otros apagaron el Espíritu por miedo a los excesos. ¿Hacia cuál de los dos errores te inclinas tú más, y cómo puedes evitarlo?'
    },
    {
      id: 'wesley', n: 'Wesley y la «segunda bendición»', ref: '1 Tesalonicenses 5:23; Hebreos 12:14; Romanos 8:16', fecha: [1738, 1791],
      visual: [
        img('../historia-iglesia-2/img/wesley.webp', 'Juan Wesley, clérigo anglicano de unos treinta y seis años con toga negra y bandas blancas, predica al aire libre a una multitud de mineros y trabajadores en las afueras de Bristol, en 1739', 'Juan Wesley predica al aire libre (recreación).'),
        cita('1 Tesalonicenses 5:23', 'Y el mismo Dios de paz os santifique por completo; y todo vuestro ser, espíritu, alma y cuerpo, sea guardado irreprensible para la venida de nuestro Señor Jesucristo.')
      ],
      texto: [
        'El movimiento pentecostal tiene una raíz directa en el metodismo de Juan Wesley. En 1738, en una reunión en la calle Aldersgate de Londres, Wesley sintió que su corazón ardía de una manera extraña mientras se leía el prefacio de Lutero a la carta a los Romanos, y recibió la seguridad de que Cristo había quitado sus pecados. Desde entonces predicó por toda Inglaterra, muchas veces al aire libre, y organizó a los convertidos en pequeños grupos que se reunían cada semana para orar, confesar sus faltas y animarse en la vida cristiana. Su historia completa está en Historia de la Iglesia II.',
        { h: 'La perfección cristiana' },
        'Wesley enseñó que, después de la conversión, el creyente puede recibir por fe una obra más profunda de Dios, a la que llamó «perfección cristiana» o «amor perfecto»: un corazón entregado por completo a amar a Dios y al prójimo, libre del dominio del pecado voluntario. No pensaba en una perfección sin errores ni debilidades, sino en una consagración total. Se apoyaba en textos como la oración de Pablo: «el mismo Dios de paz os santifique por completo» (1 Ts 5:23). Sus seguidores la llamaron la «segunda bendición», porque venía después de la primera, la justificación.',
        'Juan Fletcher, el colaborador más cercano de Wesley, empezó a describir esa experiencia con el lenguaje de Pentecostés: hablaba de ser «bautizado con el Espíritu Santo» para recibir un corazón puro. Wesley no adoptó del todo esa forma de hablar, pero la expresión quedó sembrada.',
        { h: 'Un esquema que se repetirá' },
        'Así nació un esquema que marcó la historia posterior: primero la conversión, después una segunda experiencia de crisis con Dios. Los metodistas llevaron ese mensaje a Norteamérica, donde el metodismo creció más que ninguna otra iglesia en el siglo XIX gracias a sus predicadores itinerantes y a los grandes campamentos de avivamiento al aire libre. En esos campamentos, la gente lloraba por sus pecados, cantaba himnos populares y testificaba en voz alta.',
        'Muchos rasgos del culto pentecostal vienen de ahí: la predicación sencilla y directa, el testimonio de los laicos, el canto de toda la congregación, la reunión de oración y la expectativa de un encuentro personal con Dios. Y la idea de una experiencia posterior a la conversión fue el molde en que, un siglo y medio después, los pentecostales entendieron el bautismo en el Espíritu Santo. Pero esta vez, como se verá, el énfasis pasaría de la pureza del corazón al poder para testificar.',
        ir('Leer la estación sobre Juan Wesley en Historia de la Iglesia II', H2 + '#avivamientos/5')
      ],
      pensar: 'Wesley buscaba «amar a Dios con todo el corazón». ¿Qué lugar tiene la santidad del corazón en tu búsqueda de Dios, junto al deseo de su poder?'
    },
    {
      id: 'santidad', n: 'El movimiento de santidad y la sanidad divina', ref: 'Hebreos 12:14; Santiago 5:14-15; Isaías 53:4-5', fecha: [1835, 1900],
      visual: [
        img('../historia-iglesia-2/img/campamento.webp', 'Un campamento de avivamiento en Norteamérica en el siglo XIX: de noche, a la luz de antorchas, una multitud de familias escucha a un predicador sobre una plataforma de madera en un claro del bosque, junto a carpas', 'Un campamento de avivamiento en el siglo XIX (recreación).'),
        mapa({ view: V.eeuu, lugares: ['h-nueva-york', 'h-vineland', 'h-zion', 'h-chicago'] }, 'Mapa'),
        cita('Santiago 5:14-15', '¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.')
      ],
      texto: [
        'Desde fines de la década de 1830, en Nueva York, una mujer metodista llamada Febe Palmer dirigió reuniones semanales en su casa para promover la santidad. Enseñaba que cualquier creyente podía recibir la santificación completa en un momento, consagrándose por completo a Dios, poniendo todo «sobre el altar» y creyendo su promesa. Sus reuniones atrajeron a pastores y obispos de muchas denominaciones.',
        { h: 'El movimiento de santidad' },
        'Después de la guerra civil estadounidense, en 1867, se formó en Vineland, Nueva Jersey, una asociación para organizar campamentos de santidad. Durante los años siguientes, miles de personas asistieron a ellos cada verano. El movimiento cruzó el océano y llegó a Inglaterra, Alemania y otros países. Hacia fines del siglo, muchos de sus seguidores salieron de las iglesias metodistas, que les parecían frías, y formaron sus propias iglesias de santidad, como la Iglesia del Nazareno. Usaban cada vez más el lenguaje de Pentecostés: hablaban del «bautismo del Espíritu Santo y fuego» que limpia el corazón, cantaban himnos sobre el fuego y el poder, y oraban por un nuevo Pentecostés.',
        { h: 'La sanidad divina' },
        'Al mismo tiempo surgió un movimiento de sanidad divina. El médico Carlos Cullis, en Boston, empezó a orar por los enfermos en la década de 1870. Alberto Simpson, un pastor presbiteriano canadiense que había sido sanado de una enfermedad del corazón en 1881, fundó en Nueva York la obra que llegó a ser la Alianza Cristiana y Misionera, y predicó un «evangelio cuádruple»: Cristo Salvador, Santificador, Sanador y Rey que viene. Enseñaba que la sanidad está incluida en la obra de Cristo, porque «por su llaga fuimos nosotros curados» (Is 53:5), y que la iglesia debe obedecer la instrucción de Santiago: llamar a los ancianos, ungir al enfermo con aceite y orar con fe (Stg 5:14-15).',
        'El movimiento de sanidad también tuvo excesos. El más conocido fue Juan Alejandro Dowie, que fundó cerca de Chicago la ciudad de Zion, en 1900, para vivir sin médicos ni medicinas, y terminó proclamándose el profeta Elías. Su ciudad se derrumbó en pocos años. Pero de Zion salieron varios de los primeros predicadores pentecostales.',
        { h: 'Lo que heredaron los pentecostales' },
        'Los pentecostales recibieron del movimiento de santidad casi todo su vocabulario y su ambiente: los campamentos, los himnos, las reuniones de oración hasta tarde, la exigencia de una vida separada del pecado, la oración por los enfermos y la esperanza de la pronta venida de Cristo. Muchos de los primeros pentecostales eran, de hecho, creyentes de santidad que dieron un paso más.'
      ],
      pensar: 'El movimiento de santidad unió la oración por los enfermos con la exigencia de una vida limpia. ¿Por qué crees que es peligroso buscar el poder de Dios sin buscar también su santidad (He 12:14)?'
    },
    {
      id: 'keswick', n: 'Keswick y la espera de un nuevo Pentecostés', ref: 'Joel 2:23; Hechos 1:8; Lucas 24:49', fecha: [1875, 1905],
      visual: [
        cita('Joel 2:23', 'Vosotros también, hijos de Sion, alegraos y gozaos en Jehová vuestro Dios; porque os ha dado la primera lluvia a su tiempo, y hará descender sobre vosotros lluvia temprana y tardía como al principio.'),
        mapa({ view: V.atlantico, lugares: ['h-keswick', 'h-gales', 'h-chicago', 'h-nueva-york'] }, 'Mapa'),
        tabla({
          titulo: 'De la pureza al poder',
          cab: ['Movimiento', 'La «segunda bendición» es…', 'Para…'],
          filas: [
            ['Wesley y la santidad', 'La santificación completa', 'Un corazón puro, libre del pecado'],
            ['Keswick (desde 1875)', 'Una vida llena del Espíritu', 'Victoria sobre el pecado y servicio'],
            ['Torrey, Moody y otros', 'El bautismo con el Espíritu Santo', 'Poder para testificar y servir'],
            ['Pentecostales (desde 1901)', 'El bautismo en el Espíritu, con lenguas', 'Poder para ser testigos (Hch 1:8)']
          ]
        }, 'De la pureza al poder')
      ],
      texto: [
        'En 1875 comenzaron a reunirse cada verano, en el pueblo de Keswick, en el norte de Inglaterra, creyentes de varias denominaciones que buscaban una vida cristiana más profunda. Las convenciones de Keswick enseñaban que el creyente no tiene que vivir derrotado por el pecado: si se rinde por completo a Cristo, puede ser lleno del Espíritu Santo y vivir en victoria. A diferencia del metodismo, no hablaban de quitar de raíz la naturaleza pecaminosa, sino de una vida llena del Espíritu que la mantiene bajo control.',
        { h: 'Poder para servir' },
        'En Norteamérica, evangelistas como Dwight Moody y su colaborador Reuben Torrey dieron un paso importante. Torrey escribió en la década de 1890 un libro sobre el bautismo con el Espíritu Santo en el que enseñaba que se trata de una experiencia distinta de la conversión, cuyo propósito principal no es purificar, sino dar poder para testificar y servir. Citaba la promesa de Jesús: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo» (Hch 1:8). Ese cambio, de la pureza al poder, preparó directamente el camino al pentecostalismo.',
        { h: 'La lluvia tardía' },
        'Muchos creyentes de esa época estaban convencidos de que Cristo volvería pronto y de que, antes de su venida, Dios enviaría un gran derramamiento del Espíritu sobre la iglesia para evangelizar al mundo. Lo llamaban la «lluvia tardía», tomando la imagen de Joel: en Israel, la lluvia temprana caía al sembrar, en otoño, y la tardía, en primavera, antes de la cosecha. Joel prometió que Dios haría descender «lluvia temprana y tardía como al principio» (Jl 2:23). Si Pentecostés había sido la lluvia temprana, pensaban, al final de los tiempos vendría la tardía.',
        { h: 'Gales, 1904' },
        'En 1904, en Gales, un joven minero que estudiaba para el ministerio, Evan Roberts, comenzó a predicar en su pueblo, Loughor. Pronto el país entero vivió un avivamiento. Las reuniones duraban hasta la madrugada, sin programa, con oración, canto y confesión de pecados. Los bares se vaciaron, las deudas se pagaron y, según se calculó entonces, unas cien mil personas se convirtieron en pocos meses. La noticia llegó a todo el mundo y avivó la oración por un nuevo Pentecostés. Algunos de los que viajaron a Gales a ver el avivamiento fueron después líderes pentecostales.',
        'A comienzos del siglo XX, entonces, había miles de creyentes que oraban por un derramamiento del Espíritu, esperaban la pronta venida de Cristo y creían en la sanidad divina. Faltaba la chispa.'
      ],
      pensar: 'El avivamiento de Gales empezó con la oración de unos pocos. ¿Oras tú por un avivamiento en tu iglesia y en tu ciudad? ¿Qué cambiaría en tu vida si Dios respondiera?'
    },
    {
      id: 'topeka', n: 'Topeka, 1901: Parham y Agnes Ozman', ref: 'Hechos 2:4; Hechos 10:46; Hechos 19:6', fecha: 1901,
      visual: [
        img('topeka.webp', 'En la noche del 31 de diciembre de 1900, en una habitación de una gran casa de piedra en Topeka, Kansas, un grupo de alumnos de una escuela bíblica, hombres y mujeres con ropa de comienzos del siglo XX, ora de rodillas junto a sillas de madera a la luz de lámparas de aceite; algunos con la Biblia abierta', 'Alumnos de la escuela bíblica de Topeka oran en el cambio de siglo (recreación; personas anónimas).'),
        foto('parham.jpg', 'Retrato en sepia de Carlos Fox Parham, un hombre de mediana edad con el cabello peinado hacia atrás, bigote, cuello blanco alto y corbata', 'Carlos Fox Parham (1873-1929), en una fotografía publicada antes de 1910.', 'Dominio público, vía Wikimedia Commons'),
        pasos([
          { t: 'Topeka, Kansas: la escuela bíblica Betel (1900-1901)', fecha: 1901, estado: { view: V.eeuu, lugares: ['h-topeka'] } },
          { t: 'Parham abre una escuela en Houston, Texas (1905)', fecha: 1905, estado: { view: V.eeuu, lugares: ['h-topeka', 'h-houston'], trazos: ['h-p-topeka-houston'] } }
        ], 'Mapa')
      ],
      texto: [
        'Carlos Parham era un joven predicador de santidad de Kansas, que había sido metodista. Había visitado varios centros de sanidad y de santidad, entre ellos la ciudad de Zion, y estaba convencido de que la iglesia necesitaba recuperar el poder de Pentecostés para evangelizar el mundo antes de la venida de Cristo. En octubre de 1900 abrió en Topeka, en una gran casa de piedra, la escuela bíblica Betel, sin matrícula: los alumnos vivían por fe y estudiaban solo la Biblia.',
        { h: 'La pregunta de la escuela' },
        'A fines de diciembre, antes de salir de viaje, Parham dejó a sus alumnos una tarea: estudiar en el libro de los Hechos cuál era la señal de que alguien había recibido el bautismo en el Espíritu Santo. Según su relato, a su regreso todos habían llegado a la misma conclusión: en los relatos de Hechos, la señal que se repite es que hablaban en otras lenguas (Hch 2:4; 10:46; 19:6).',
        { h: 'El 1 de enero de 1901' },
        'En la noche de Año Nuevo, una alumna llamada Agnes Ozman pidió que le impusieran las manos para recibir el Espíritu Santo. Parham oró por ella, y Ozman comenzó a hablar en una lengua que no conocía. En los días siguientes, otros alumnos y el mismo Parham tuvieron la misma experiencia. Para Parham, la promesa de Pentecostés se había cumplido otra vez, y desde entonces enseñó que hablar en lenguas es la evidencia inicial del bautismo en el Espíritu Santo. Esa enseñanza llegó a ser el rasgo distintivo del movimiento.',
        { h: 'Las «lenguas misioneras»' },
        'Parham creía, además, que las lenguas eran idiomas humanos que Dios daba para que los misioneros pudieran predicar en otros países sin estudiar la lengua. Muchos de los primeros pentecostales partieron al extranjero con esa esperanza, y se llevaron una desilusión, como se verá en la ruta II. Con el tiempo, el movimiento entendió que el hablar en lenguas es, por lo general, una oración en el Espíritu que edifica al que la practica (1 Co 14:2, 4), aunque a veces Dios lo use en un idioma humano, como en Pentecostés.',
        'Al principio, la noticia de Topeka casi no tuvo eco. Parham predicó durante años en Kansas, Misuri y Texas, con sanidades y conversiones, y en 1905 abrió otra escuela en Houston. Allí, entre sus alumnos, estaba un predicador afroamericano que llevaría el mensaje a Los Ángeles. Parham, por su parte, terminó con su reputación dañada por acusaciones morales y por sus prejuicios raciales, y su influencia decayó muy pronto.',
        { ejercicio: {
          pregunta: '¿Qué conclusión sacaron Parham y sus alumnos de su estudio de Hechos en 1900 y 1901?',
          opciones: [
            { t: 'Que el bautismo en el Espíritu es lo mismo que el bautismo en agua.', ok: false, por_que: 'Distinguían claramente los dos bautismos; buscaban una experiencia con el Espíritu Santo.' },
            { t: 'Que la señal que se repite en Hechos cuando los creyentes reciben el Espíritu es que hablan en otras lenguas.', ok: true, por_que: 'Esa fue la conclusión, y Parham la enseñó desde entonces como la evidencia inicial del bautismo en el Espíritu.' },
            { t: 'Que los dones del Espíritu habían cesado con los apóstoles.', ok: false, por_que: 'Era justo lo contrario: buscaban recibir hoy la experiencia de Pentecostés.' }
          ],
          explicacion: 'La doctrina de las lenguas como evidencia inicial nació de una lectura de los relatos de Hechos. La ruta III muestra cómo se debatió y la ruta VI, cómo la entienden hoy los pentecostales.'
        } }
      ],
      pensar: 'Los alumnos de Topeka buscaron en la Biblia antes de buscar la experiencia. ¿Por qué es importante que nuestra búsqueda de Dios empiece y termine en su Palabra?'
    }
  ];

  // ================== RUTA II. Azusa y la primera expansión ==================
  const azusa = [
    {
      id: 'seymour', n: 'Guillermo Seymour', ref: '1 Corintios 1:26-29; Hechos 4:13; 2 Corintios 4:7', fecha: [1870, 1906],
      visual: [
        img('seymour.webp', 'En 1905, en Houston, Texas, Guillermo Seymour, un predicador afroamericano de unos treinta y cinco años con traje oscuro y la Biblia en la mano, está sentado en una silla en el pasillo, junto a la puerta abierta de un aula donde un maestro blanco enseña a alumnos blancos; Seymour escucha con atención', 'Guillermo Seymour escucha las clases desde el pasillo, en Houston (recreación).'),
        foto('seymour.jpg', 'Fotografía en blanco y negro de Guillermo J. Seymour, un hombre afroamericano de unos cuarenta años, con barba canosa, chaqueta oscura, chaleco claro y corbata de lazo, con el sombrero en la mano', 'Guillermo J. Seymour (1870-1922), en una fotografía de la década de 1910.', 'Dominio público, vía Wikimedia Commons'),
        pasos([
          { t: 'Seymour en la escuela de Parham, en Houston (1905)', fecha: 1905, estado: { view: V.eeuu, lugares: ['h-houston'] } },
          { t: 'Viaja a Los Ángeles (febrero de 1906)', fecha: 1906, estado: { view: V.eeuu, lugares: ['h-houston', 'h-los-angeles'], trazos: ['h-p-houston-la'] } }
        ], 'Mapa')
      ],
      texto: [
        'Guillermo José Seymour nació en 1870 en Centerville, Luisiana, hijo de padres que habían sido esclavos. Creció en la pobreza, en el sur de Estados Unidos, donde las leyes separaban a negros y blancos en las escuelas, los trenes y las iglesias. De joven se fue al norte y trabajó como mozo de comedor y camarero en varias ciudades. Se convirtió en una iglesia metodista de afroamericanos y después se unió a un grupo de santidad que enseñaba que la iglesia de Dios es una sola, sin divisiones de denominación ni de raza. Una viruela lo dejó ciego de un ojo.',
        { h: 'Sentado en el pasillo' },
        'En 1905, en Houston, Seymour supo que Carlos Parham enseñaba sobre el bautismo en el Espíritu Santo y las lenguas, y pidió asistir a su escuela. Las leyes de segregación de Texas no permitían que un afroamericano se sentara en la misma aula que los alumnos blancos, así que Parham le permitió escuchar las clases sentado en el pasillo, junto a la puerta. Seymour aceptó la enseñanza, aunque todavía no había recibido la experiencia.',
        { h: 'Rumbo a Los Ángeles' },
        'A comienzos de 1906, una pequeña iglesia de santidad de afroamericanos de Los Ángeles, dirigida por una mujer llamada Julia Hutchins, invitó a Seymour a ser su pastor. Llegó en febrero y predicó sobre Hechos 2:4: el bautismo en el Espíritu Santo con la señal de hablar en otras lenguas. La enseñanza no gustó a los dirigentes, que lo consideraron contraria a lo que creían, y cuando volvió a la iglesia encontró la puerta cerrada con candado.',
        'Una familia de la congregación, los Asberry, lo recibió en su casa de la calle Bonnie Brae. Allí comenzó a reunirse cada noche un pequeño grupo para orar, la mayoría afroamericanos, trabajadores y empleadas domésticas. Seymour les enseñaba la Escritura y oraban juntos, a veces con ayuno, esperando la promesa del Padre.',
        { h: 'Un instrumento sencillo' },
        'Los testigos describen a Seymour como un hombre humilde y de pocas palabras, sin educación formal, que hablaba despacio y que pasaba mucho tiempo orando. Nadie habría elegido a un predicador pobre, negro, tuerto y casi desconocido para iniciar un movimiento que llegaría a todos los continentes. Pero Pablo ya lo había dicho: «lo necio del mundo escogió Dios, para avergonzar a los sabios; y lo débil del mundo escogió Dios, para avergonzar a lo fuerte» (1 Co 1:27). La gloria no sería de un hombre, sino de Dios: «tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros» (2 Co 4:7).'
      ],
      pensar: 'Seymour aceptó escuchar desde el pasillo, sin amargura, para aprender de la Palabra. ¿Qué te enseña su humildad sobre cómo Dios elige a quienes usa?'
    },
    {
      id: 'azusa', n: 'La misión de la calle Azusa', ref: 'Hechos 2:1-4; Hechos 2:42-47; Joel 2:28-29', fecha: [1906, 1909],
      visual: [
        img('azusa-culto.webp', 'Interior de la Misión de la Fe Apostólica de la calle Azusa en 1906: un salón de madera rústica con piso de aserrín, bancas hechas con tablones sobre barriles y un púlpito de cajones de madera; Guillermo Seymour ora con la cabeza inclinada detrás del púlpito, mientras una congregación de hombres y mujeres negros, blancos, mexicanos y asiáticos, con ropa de 1906, ora con las manos levantadas, algunos de rodillas', 'Un culto en la calle Azusa en 1906 (recreación).'),
        foto('../historia-iglesia-2/img/azusa.jpg', 'El edificio de madera de dos pisos de la Misión de la Fe Apostólica, en la calle Azusa 312 de Los Ángeles, con el nombre pintado en la fachada y automóviles antiguos estacionados delante', 'La Misión de la Fe Apostólica de la calle Azusa, en una fotografía posterior al avivamiento (por los automóviles, de fines de la década de 1920).', 'Dominio público, vía Wikimedia Commons'),
        foto('fe-apostolica.jpg', 'Portada del primer número del periódico The Apostolic Faith (La fe apostólica), de septiembre de 1906, con el titular «Pentecost Has Come» y columnas de texto', 'Primer número de La fe apostólica (The Apostolic Faith), Los Ángeles, septiembre de 1906: «Ha llegado Pentecostés».', 'Dominio público, vía Wikimedia Commons', 'Periódico')
      ],
      texto: [
        'El 9 de abril de 1906, en la casa de la calle Bonnie Brae, un hombre del grupo, Eduardo Lee, comenzó a hablar en lenguas, y enseguida otros recibieron la misma experiencia; tres días después la recibió el propio Seymour. La noticia corrió por el barrio. La casa se llenó, la gente se agolpaba en el porche y en la calle, y el porche terminó por ceder bajo el peso.',
        { h: 'Un establo en la calle Azusa' },
        'El grupo arrendó un viejo edificio de madera en la calle Azusa 312, en una zona industrial cerca del centro de la ciudad. Había sido una iglesia metodista de afroamericanos y después se había usado como bodega y como establo. Lo limpiaron, echaron aserrín en el piso, hicieron bancas con tablones apoyados en barriles y un púlpito con cajones de madera. El 14 de abril de 1906 comenzaron las reuniones. Lo llamaron Misión de la Fe Apostólica.',
        'Durante unos tres años hubo reuniones casi todos los días, desde la mañana hasta pasada la medianoche. No había programa ni orden fijo: se cantaba sin instrumentos, se oraba, se leía la Biblia, se daban testimonios, se predicaba y se oraba por los enfermos y por los que buscaban el bautismo en el Espíritu. Seymour muchas veces se quedaba detrás del púlpito con la cabeza dentro de uno de los cajones, orando. Hubo conversiones, sanidades, personas que hablaban en lenguas y que cantaban en el Espíritu, y también momentos de silencio en que nadie se movía.',
        { h: 'La fe apostólica' },
        'En septiembre de 1906, la misión empezó a publicar un periódico gratuito, La fe apostólica. Contaba lo que ocurría en Azusa, publicaba testimonios y enseñanzas de Seymour y cartas de todo el mundo. En pocos meses se enviaban decenas de miles de ejemplares a muchos países. Por ese medio, y por los visitantes que llegaban de todas partes, el mensaje se extendió con una rapidez sorprendente. Pastores y misioneros de Norteamérica, Europa y Asia viajaron a Los Ángeles para ver con sus propios ojos lo que pasaba y volvieron a sus iglesias con la experiencia.',
        { h: 'La doctrina de Azusa' },
        'Seymour enseñaba lo que había aprendido de la santidad y de Parham: la salvación por la fe en Cristo, la santificación como segunda obra de gracia, el bautismo en el Espíritu Santo con la señal de las lenguas, la sanidad divina y la pronta venida de Cristo. Pero insistía también en otra cosa: que la señal más segura del Espíritu es el amor. Con el paso de los años, viendo que algunos hablaban en lenguas sin amor ni santidad, llegó a decir que las lenguas solas no prueban que alguien tenga el Espíritu.',
        'El avivamiento duró, con distinta intensidad, hasta alrededor de 1909. Después la misión quedó como una pequeña congregación de afroamericanos, que Seymour pastoreó hasta su muerte, en 1922. Pero lo que había comenzado en ese establo ya había dado la vuelta al mundo.'
      ],
      pensar: 'En Azusa no había edificio hermoso, ni programa, ni predicadores famosos, pero había oración y hambre de Dios. ¿Qué cosas, aunque buenas, pueden reemplazar en una iglesia la búsqueda sencilla de Dios?'
    },
    {
      id: 'unidad', n: 'Razas, mujeres y pobres en un mismo culto', ref: 'Gálatas 3:28; Hechos 2:17-18; Apocalipsis 7:9', fecha: [1906, 1914],
      visual: [
        cita('Hechos 2:17-18', 'Y en los postreros días, dice Dios, Derramaré de mi Espíritu sobre toda carne, Y vuestros hijos y vuestras hijas profetizarán; Vuestros jóvenes verán visiones, Y vuestros ancianos soñarán sueños; Y de cierto sobre mis siervos y sobre mis siervas en aquellos días Derramaré de mi Espíritu, y profetizarán.'),
        tabla({
          titulo: 'Algunos de los que estaban en Azusa',
          cab: ['Persona', 'Quién era'],
          filas: [
            ['Guillermo Seymour', 'Pastor afroamericano, hijo de esclavos'],
            ['Lucía Farrow', 'Predicadora afroamericana; había presentado a Seymour a Parham; después fue misionera en Liberia'],
            ['Jennie Evans Moore', 'Pianista y predicadora afroamericana; se casó con Seymour en 1908'],
            ['Florencia Crawford', 'Mujer blanca, secretaria de la misión; fundó después una iglesia en Portland'],
            ['Abundio y Rosa López', 'Matrimonio mexicano; sus testimonios en español aparecen en La fe apostólica de 1906'],
            ['Frank Bartleman', 'Predicador y periodista blanco; escribió una crónica del avivamiento']
          ]
        }, 'Quiénes estaban')
      ],
      texto: [
        'Lo que más impresionó a muchos de los que visitaron la calle Azusa no fueron las lenguas, sino la gente. En una ciudad y en un país donde la ley y la costumbre separaban a las razas, en Azusa oraban juntos negros, blancos, mexicanos, chinos, japoneses y europeos recién llegados, ricos y pobres, hombres y mujeres. El pastor era un afroamericano, hijo de esclavos, y había blancos que se arrodillaban para que él orara por ellos. Frank Bartleman, uno de los cronistas del avivamiento, escribió una frase que se hizo famosa: que en Azusa la línea del color había sido lavada en la sangre de Cristo.',
        { h: 'Toda carne' },
        'Para los creyentes de Azusa, eso era parte del mensaje de Pentecostés. Joel había anunciado que el Espíritu vendría sobre «toda carne», sobre hijos e hijas, jóvenes y ancianos, siervos y siervas (Hch 2:17-18). En Cristo «no hay judío ni griego; no hay esclavo ni libre; no hay varón ni mujer; porque todos vosotros sois uno en Cristo Jesús» (Gá 3:28). Una de las imágenes del cielo es la de una gran multitud «de todas naciones y tribus y pueblos y lenguas» delante del trono (Ap 7:9). En Azusa, muchos sintieron que veían un anticipo de esa escena.',
        { h: 'Mujeres en el ministerio' },
        'Las mujeres tuvieron un papel muy activo desde el principio: predicaban, oraban por los enfermos, escribían en el periódico, dirigían reuniones y salieron como misioneras. El movimiento entendía que el Espíritu reparte los dones como él quiere, y que la promesa de Joel incluía a «vuestras hijas». En las décadas siguientes, muchas mujeres pentecostales fueron evangelistas, pastoras, misioneras y fundadoras de iglesias en todo el mundo, aunque las iglesias pentecostales adoptaron normas distintas sobre los cargos de gobierno.',
        { h: 'La vieja división vuelve' },
        'Lamentablemente, la unidad no duró. Cuando Parham visitó Azusa en octubre de 1906, condenó lo que vio, en parte por los excesos y en parte, según sus propias palabras, por la mezcla de razas. En los años siguientes, varios líderes blancos se apartaron, y las nuevas denominaciones pentecostales se fueron organizando, en su mayoría, según la línea del color. Al final de su vida, Seymour escribió con tristeza sobre los que habían recibido de Dios en Azusa y después lo habían dejado de lado por ser negro. Pasarían ochenta y ocho años hasta que, en 1994, los pentecostales blancos y negros de Estados Unidos se pidieran perdón públicamente, como se verá en la ruta III.',
        { ejercicio: {
          pregunta: '¿Por qué los creyentes de Azusa veían en la unión de razas y de clases sociales una parte del mensaje de Pentecostés?',
          opciones: [
            { t: 'Porque querían apoyar a un partido político que luchaba contra la segregación.', ok: false, por_que: 'El movimiento no tenía un programa político; su motivación era espiritual.' },
            { t: 'Porque la promesa de Joel y de Pedro decía que el Espíritu vendría sobre toda carne, y en Cristo todos son uno.', ok: true, por_que: 'Leían Hechos 2:17-18 y Gálatas 3:28 como una promesa que borraba las barreras entre los creyentes.' },
            { t: 'Porque en Los Ángeles ya no existía la segregación racial.', ok: false, por_que: 'La segregación y los prejuicios eran fuertes; por eso la unidad de Azusa llamó tanto la atención.' }
          ],
          explicacion: 'Pentecostés reunió a judíos «de todas las naciones bajo el cielo» (Hch 2:5) y los hizo una sola iglesia. Azusa recordó que el Espíritu crea un pueblo nuevo, aunque los creyentes no siempre supieron conservarlo.'
        } }
      ],
      pensar: '¿Hay en tu iglesia barreras de clase social, origen, color o nacionalidad que el Espíritu quiere derribar? ¿Qué puedes hacer tú para que todos se sientan parte de la familia de Dios?'
    },
    {
      id: 'criticos', n: 'La prensa y los críticos', ref: '1 Corintios 14:39-40; 1 Tesalonicenses 5:19-21; Hechos 2:13', fecha: [1906, 1910],
      visual: [
        cita('1 Corintios 14:39-40', 'Así que, hermanos, procurad profetizar, y no impidáis el hablar lenguas; pero hágase todo decentemente y con orden.'),
        tabla({
          titulo: 'Lo que se dijo del movimiento',
          cab: ['Quiénes', 'Qué decían'],
          filas: [
            ['La prensa de Los Ángeles (abril de 1906)', 'Se burló de un «babel» de lenguas extrañas y de un culto ruidoso de gente sencilla'],
            ['Muchos líderes de santidad', 'Que las lenguas eran obra de demonios o de la emoción'],
            ['Muchos fundamentalistas', 'Que los dones habían cesado y que el movimiento era un engaño'],
            ['Un grupo de líderes evangélicos alemanes (Berlín, 1909)', 'Que el movimiento venía «de abajo», no de Dios'],
            ['Los mismos pentecostales', 'Que había excesos que corregir, según 1 Corintios 14']
          ]
        }, 'Las críticas')
      ],
      texto: [
        'El 18 de abril de 1906, cuatro días después de que comenzaran las reuniones de Azusa, el principal diario de Los Ángeles publicó un artículo burlón que describía un extraño babel de lenguas, gritos y gente que caía al suelo en un culto de negros y blancos pobres. Esa misma madrugada, un gran terremoto destruyó buena parte de San Francisco. Muchos predicadores lo vieron como una señal de que el fin estaba cerca, y el miedo llevó a más personas a las reuniones.',
        { h: '«Están llenos de mosto»' },
        'Las burlas no eran nuevas. El mismo día de Pentecostés, algunos de los que oían a los discípulos se burlaban y decían: «Están llenos de mosto» (Hch 2:13). Durante décadas, los pentecostales fueron objeto de burla en la prensa y en muchas iglesias. Los llamaban «aleluyas», «santos rodantes» o «canutos», y en algunos lugares fueron atacados por turbas, expulsados de sus trabajos o encarcelados.',
        { h: 'Las críticas de otros cristianos' },
        'Las críticas más duras vinieron de otros cristianos. Muchos líderes del movimiento de santidad, que habían orado por un nuevo Pentecostés, rechazaron las lenguas y las atribuyeron a la emoción o al diablo. Muchos fundamentalistas sostenían que los dones de señales habían cesado con los apóstoles y veían el movimiento como un fanatismo peligroso. En Alemania, después de reuniones muy desordenadas en la ciudad de Kassel en 1907, un grupo de líderes evangélicos firmó en 1909 la Declaración de Berlín, que afirmaba que el movimiento no venía de arriba, sino de abajo. Esa declaración frenó durante décadas el crecimiento pentecostal en Alemania.',
        { h: 'Lo que había que corregir' },
        'No todas las críticas eran injustas. En los primeros años hubo excesos reales: personas que buscaban manifestaciones raras, profecías que no se cumplieron, reuniones que terminaban en desorden, falsos maestros que se aprovecharon del entusiasmo y creyentes que se sentían superiores a los demás. El mismo Seymour y otros líderes escribieron en La fe apostólica advertencias contra el fanatismo y llamados a juzgar todo por la Escritura.',
        'El apóstol Pablo enfrentó los mismos problemas en Corinto, una iglesia llena de dones pero con desorden y orgullo. No les dijo que dejaran de usar los dones, sino que los usaran bien: «procurad profetizar, y no impidáis el hablar lenguas; pero hágase todo decentemente y con orden» (1 Co 14:39-40). Esa fue también la respuesta de los pentecostales más sabios: ni apagar el Espíritu por miedo al desorden, ni aceptar todo lo que se presenta como espiritual.'
      ],
      pensar: 'Pablo dijo a los corintios que no impidieran las lenguas y que todo se hiciera con orden. ¿Cómo se puede mantener el fervor del Espíritu y, al mismo tiempo, el orden y la sensatez en el culto?'
    },
    {
      id: 'misioneros', n: 'Misioneros con boleto de ida', ref: 'Hechos 1:8; Hechos 13:2-3; Romanos 10:14-15', fecha: [1906, 1910],
      visual: [
        img('misioneros-barco.webp', 'En 1907, en la cubierta de un barco de vapor en alta mar, un joven matrimonio de misioneros estadounidenses con ropa sencilla de la época y una pequeña maleta de cuero ora tomado de la mano junto a la baranda, mirando el horizonte; otros pasajeros al fondo', 'Misioneros pentecostales rumbo a Asia en 1907 (recreación; personas anónimas).'),
        pasos([
          { t: 'Desde Los Ángeles y Nueva York salen los primeros misioneros (1906-1907)', fecha: 1906, estado: { view: V.mundo, lugares: ['h-los-angeles', 'h-nueva-york'], trazos: ['h-p-azusa-ny'] } },
          { t: 'Los Garr llegan a Calcuta y luego a Hong Kong (1907)', fecha: 1907, estado: { view: V.mundo, lugares: ['h-los-angeles', 'h-nueva-york', 'h-calcuta', 'h-hong-kong'], trazos: ['h-p-azusa-ny', 'h-p-garr'] } },
          { t: 'Misioneros afroamericanos en Liberia (1907)', fecha: 1907, estado: { view: V.mundo, lugares: ['h-los-angeles', 'h-nueva-york', 'h-calcuta', 'h-hong-kong', 'h-liberia'], trazos: ['h-p-azusa-ny', 'h-p-garr', 'h-p-azusa-liberia'] } },
          { t: 'Juan Lake y otros llegan a Sudáfrica (1908)', fecha: 1908, estado: { view: V.mundo, lugares: ['h-los-angeles', 'h-nueva-york', 'h-calcuta', 'h-hong-kong', 'h-liberia', 'h-chicago', 'h-johannesburgo'], trazos: ['h-p-azusa-ny', 'h-p-garr', 'h-p-azusa-liberia', 'h-p-azusa-sudafrica'] } }
        ], 'Mapa')
      ],
      texto: [
        'Los primeros pentecostales estaban convencidos de dos cosas: que Cristo volvería muy pronto y que el bautismo en el Espíritu era poder para ser testigos «hasta lo último de la tierra» (Hch 1:8). La consecuencia era evidente: había que salir ya. En los meses siguientes a Azusa, decenas de creyentes partieron como misioneros, muchas veces sin el apoyo de ninguna organización, sin sueldo y sin saber cómo volverían. Compraban un pasaje de ida y confiaban en que Dios proveería.',
        { h: 'Los Garr en la India' },
        'Alfredo y Lilian Garr, un matrimonio que había sido pastor de santidad en Los Ángeles, recibieron el bautismo en el Espíritu en Azusa y creyeron que Dios les había dado la lengua de Bengala para predicar en la India. Llegaron a Calcuta a fines de 1906 y comenzaron a predicar, pero se dieron cuenta de que nadie entendía sus lenguas. Fue una dura desilusión, que vivieron muchos otros que pensaban como Parham. Los Garr no volvieron atrás: predicaron con intérpretes entre misioneros y creyentes de habla inglesa, y muchos de ellos recibieron el Espíritu. Después siguieron a Hong Kong. Allí murieron su hija pequeña y una colaboradora, pero dejaron una iglesia pentecostal establecida.',
        { h: 'El precio' },
        'Un grupo de misioneros afroamericanos de Azusa, entre ellos Lucía Farrow, viajó a Liberia, en África occidental. Varios murieron en pocos meses a causa de las fiebres tropicales. En Sudáfrica, Juan Lake y Tomás Hezmalhalch llegaron en 1908 desde la región de Chicago y en pocos años se formó la Misión de la Fe Apostólica, una de las primeras iglesias pentecostales de África. En China, en Japón, en Egipto y en muchas islas del Pacífico aparecieron también los primeros pentecostales en esos mismos años.',
        { h: 'Lo que aprendieron' },
        'Aquellos misioneros cometieron errores: algunos partieron sin preparación, sin conocer la cultura ni el idioma, y con expectativas que la Escritura no prometía. Con el tiempo, las iglesias pentecostales aprendieron a preparar a sus misioneros, a enseñarles los idiomas y a sostenerlos. Pero el impulso de esos primeros años nunca se perdió: el movimiento nació con una vocación misionera, y esa vocación explica en buena parte su crecimiento en el siglo XX. Pablo preguntaba: «¿cómo oirán sin haber quien les predique? ¿Y cómo predicarán si no fueren enviados?» (Ro 10:14-15).'
      ],
      pensar: 'Aquellos misioneros partían con un pasaje de ida, convencidos de que valía la pena. ¿Qué estás dispuesto a dejar tú para que otros conozcan a Cristo, cerca o lejos de tu casa?'
    },
    {
      id: 'europa', n: 'Europa: Barratt, Boddy y Pethrus', ref: 'Hechos 10:44-46; Hechos 11:15-18; Romanos 1:16', fecha: [1906, 1913],
      visual: [
        pasos([
          { t: 'Tomás Barratt recibe el Espíritu en Nueva York (noviembre de 1906)', fecha: 1906, estado: { view: V.atlantico, lugares: ['h-nueva-york', 'h-los-angeles'], trazos: ['h-p-azusa-ny'] } },
          { t: 'De regreso en Oslo, comienza el avivamiento (diciembre de 1906)', fecha: 1906, estado: { view: V.atlantico, lugares: ['h-nueva-york', 'h-oslo'], trazos: ['h-p-azusa-oslo'] } },
          { t: 'Boddy en Sunderland y Pethrus en Estocolmo (1907)', fecha: 1907, estado: { view: V.europa, lugares: ['h-oslo', 'h-sunderland', 'h-estocolmo'], trazos: ['h-p-oslo-sunderland', 'h-p-oslo-estocolmo'] } }
        ], 'Mapa'),
        foto('barratt.jpg', 'Fotografía en blanco y negro de Tomás Ball Barratt a los dieciséis años, sentado, con chaqueta oscura, pantalón claro y un pequeño bigote', 'Tomás Ball Barratt (1862-1940) en 1878, a los dieciséis años.', 'Dominio público, vía Wikimedia Commons')
      ],
      texto: [
        'Tomás Ball Barratt era un pastor metodista nacido en Inglaterra que vivía en Noruega desde niño. En 1906 viajó a Nueva York para reunir fondos para una misión en Oslo, que entonces se llamaba Cristianía. Allí leyó sobre lo que ocurría en Azusa, se escribió con los líderes de la misión y, en noviembre, después de semanas de oración, recibió el bautismo en el Espíritu y habló en lenguas. Volvió a Oslo en diciembre y comenzó a reunirse en un gimnasio. Las reuniones se llenaron de gente de toda clase social, y desde Oslo el fuego se extendió a Suecia, Dinamarca, Finlandia, Alemania, Suiza e Inglaterra. Barratt es considerado el padre del pentecostalismo europeo.',
        { h: 'Sunderland' },
        'Alejandro Boddy era el vicario anglicano de la iglesia de Todos los Santos en Sunderland, una ciudad industrial del norte de Inglaterra. Había visitado el avivamiento de Gales y en 1907 viajó a Oslo para conocer a Barratt. Lo invitó a Sunderland, y en septiembre de 1907 comenzaron allí reuniones en las que muchos recibieron el Espíritu, entre ellos un plomero de Bradford, Smith Wigglesworth, que llegaría a ser uno de los evangelistas de sanidad más conocidos del mundo. Desde 1908, Boddy organizó cada año una convención en Sunderland y publicó una revista que unió a los pentecostales de Gran Bretaña. Sin dejar la Iglesia de Inglaterra, insistía en el orden, en el estudio de la Escritura y en que nadie se considerara superior por haber recibido el Espíritu.',
        { h: 'Pethrus y el pentecostalismo sueco' },
        'También en 1907, un joven pastor bautista sueco, Lewi Pethrus, viajó a Oslo, conoció a Barratt y recibió el bautismo en el Espíritu. Poco después llegó a ser pastor de una iglesia bautista de Estocolmo, que tomaría el nombre de Filadelfia. En 1913, la convención bautista sueca expulsó a la congregación por su práctica pentecostal. Pethrus formó entonces un movimiento de iglesias locales autónomas, sin una organización nacional que las gobernara, unidas por la comunión y la misión. La iglesia Filadelfia llegó a ser durante décadas una de las congregaciones pentecostales más grandes del mundo.',
        'El pentecostalismo sueco envió más misioneros en proporción a sus miembros que casi cualquier otro país. Algunos llegaron a América del Sur desde la década de 1910, como se verá en la ruta IV: los fundadores de las Asambleas de Dios de Brasil eran suecos, y de la obra de misioneros suecos nacieron también, en Chile, las Asambleas de Dios Autónomas. Así como en Hechos el Espíritu pasó de los judíos a los samaritanos y a los gentiles, en pocos años el fuego de Pentecostés cruzó océanos y fronteras sin que ninguna organización lo dirigiera.'
      ],
      pensar: 'Barratt recibió el Espíritu lejos de su casa y volvió a compartirlo con su ciudad. ¿Qué has recibido tú de Dios que todavía no has compartido con los que te rodean?'
    },
    {
      id: 'asia', n: 'Mukti y el fuego en Asia', ref: 'Joel 2:28-29; Hechos 2:17-18; Santiago 1:27', fecha: [1905, 1910],
      visual: [
        img('mukti.webp', 'En 1905, en la misión de Mukti, cerca de Pune, en la India, decenas de jóvenes viudas y muchachas indias con saris blancos y de colores sencillos oran de rodillas en un gran salón con techo de tejas, algunas llorando con las manos levantadas; una mujer india mayor con sari blanco las acompaña', 'Un tiempo de oración en la misión de Mukti, en 1905 (recreación; personas anónimas).'),
        foto('ramabai.jpg', 'Retrato en blanco y negro de Pandita Ramabai, una mujer india joven con un manto blanco que le cubre la cabeza y los hombros, con su firma «Ramabai» debajo', 'Pandita Ramabai (1858-1922), en el frontispicio de su libro The High-Caste Hindu Woman (Filadelfia, 1887).', 'Dominio público, vía Wikimedia Commons'),
        mapa({ view: V.asia, lugares: ['h-mukti', 'h-calcuta', 'h-hong-kong', 'h-pyongyang'] }, 'Mapa')
      ],
      texto: [
        'Sería un error pensar que el movimiento pentecostal fue simplemente un producto exportado desde Estados Unidos. En varios lugares del mundo, el Espíritu se movió casi al mismo tiempo, sin que unos supieran de otros, y el caso más notable ocurrió en la India.',
        { h: 'Pandita Ramabai' },
        'Ramabai nació en 1858 en una familia de brahmanes, la casta más alta de la India. Su padre, contra la costumbre, le enseñó a leer los textos sagrados en sánscrito, y llegó a ser tan conocida por su erudición que los sabios de Calcuta le dieron el título de pandita, «sabia». Quedó viuda muy joven y vio de cerca el sufrimiento de las viudas niñas de su país, que no podían volver a casarse y eran tratadas como una maldición. En Inglaterra conoció el evangelio y en 1883 se bautizó. Años después, leyendo el Nuevo Testamento, comprendió que la salvación es un regalo de Cristo y no un premio a sus esfuerzos.',
        'Cerca de Pune fundó Mukti, que significa «salvación» o «liberación»: un hogar y una escuela para viudas y niñas abandonadas, donde vivían unas dos mil personas. Tradujo la Biblia al maratí desde el hebreo y el griego, y enseñaba a las jóvenes a leer la Escritura, a trabajar y a orar. Practicaba lo que dice Santiago: la religión pura es «visitar a los huérfanos y a las viudas en sus tribulaciones» (Stg 1:27).',
        { h: 'El avivamiento de 1905' },
        'Después de leer las noticias de Gales y de Australia, Ramabai pidió a las jóvenes de Mukti que se reunieran a orar por un avivamiento. En junio de 1905, antes de que nadie hubiera oído hablar de Azusa, comenzó un gran movimiento de oración. Las muchachas lloraban por sus pecados, confesaban sus faltas, oraban durante horas por la salvación de la India y algunas tenían visiones. Desde fines de 1906, varias hablaron en lenguas. Una misionera norteamericana que trabajaba con Ramabai, Minnie Abrams, escribió un folleto sobre el bautismo del Espíritu Santo y fuego. Ese folleto llegó a Valparaíso, como se verá en la ruta IV.',
        { h: 'Corea y el resto de Asia' },
        'En 1907, en Pionyang, en Corea, una reunión de iglesias presbiterianas terminó en un avivamiento de confesión y oración que marcó para siempre a la iglesia coreana. No fue pentecostal en el sentido de las lenguas, pero comparte con Mukti y con Gales la misma raíz: arrepentimiento, oración ferviente y hambre de Dios. Al mismo tiempo, en China, Japón, Indonesia y Filipinas aparecieron los primeros grupos pentecostales. En toda Asia, el movimiento creció sobre todo gracias a predicadores y creyentes del propio lugar.',
        { ejercicio: {
          pregunta: '¿Qué muestra el avivamiento de Mukti sobre los orígenes del movimiento pentecostal?',
          opciones: [
            { t: 'Que todo el movimiento nació en Estados Unidos y se exportó desde allí.', ok: false, por_que: 'Mukti vivió su avivamiento en 1905, antes de Azusa y sin depender de ella.' },
            { t: 'Que Dios obró casi al mismo tiempo en distintos lugares, con creyentes de cada país.', ok: true, por_que: 'Gales, Mukti, Corea y Azusa vivieron movimientos de oración y avivamiento en pocos años, en distintas culturas.' },
            { t: 'Que en la India las lenguas fueron aceptadas por todas las iglesias sin discusión.', ok: false, por_que: 'También allí hubo debates y críticas, como en todos los lugares.' }
          ],
          explicacion: 'El viento «sopla de donde quiere» (Jn 3:8). El movimiento pentecostal tuvo varios focos y creció gracias a creyentes de cada pueblo, lo que explica su arraigo en Asia, África y América Latina.'
        } }
      ],
      pensar: 'Ramabai unió la oración por el Espíritu con el cuidado de las viudas y las niñas abandonadas. ¿Cómo debería verse en el servicio a los necesitados el poder del Espíritu en tu iglesia?'
    }
  ];

  // ================== RUTA III. Organización y controversias ==================
  const organizacion = [
    {
      id: 'obras', n: '¿Dos o tres obras de gracia?', ref: 'Hebreos 10:10-14; 2 Corintios 3:18; 1 Tesalonicenses 5:23', fecha: [1906, 1912],
      visual: [
        esq('esquema-obras.svg', 'Esquema con dos columnas. Santidad pentecostal: conversión, santificación completa como segunda obra instantánea y bautismo en el Espíritu como tercera. Obra consumada: conversión, santificación progresiva durante toda la vida y bautismo en el Espíritu como segunda obra', 'Las dos maneras en que los primeros pentecostales ordenaron la vida cristiana.'),
        cita('Hebreos 10:10-14', 'En esa voluntad somos santificados mediante la ofrenda del cuerpo de Jesucristo hecha una vez para siempre. Y ciertamente todo sacerdote está día tras día ministrando y ofreciendo muchas veces los mismos sacrificios, que nunca pueden quitar los pecados; pero Cristo, habiendo ofrecido una vez para siempre un solo sacrificio por los pecados, se ha sentado a la diestra de Dios, de ahí en adelante esperando hasta que sus enemigos sean puestos por estrado de sus pies; porque con una sola ofrenda hizo perfectos para siempre a los santificados.')
      ],
      texto: [
        'Los primeros pentecostales venían casi todos del movimiento de santidad y conservaron su manera de entender la vida cristiana: primero la conversión, después la santificación completa como una segunda obra de gracia, y recién entonces, sobre un corazón limpio, el bautismo en el Espíritu Santo. Eran tres experiencias. Así enseñaban Parham y Seymour.',
        { h: 'La obra consumada' },
        'Pero muchos de los que llegaban al movimiento venían de iglesias bautistas o de otras tradiciones que no creían en una santificación instantánea. En 1910, Guillermo Durham, un pastor de Chicago que había recibido el Espíritu en Azusa, predicó un sermón sobre «la obra consumada del Calvario». Enseñaba que en la cruz Cristo hizo todo lo necesario para salvar y santificar al creyente. Al convertirse, el creyente es apartado para Dios de una vez y para siempre, y después crece en santidad durante toda su vida, por la fe en esa obra terminada. No hay, entonces, una segunda obra instantánea: el bautismo en el Espíritu es la segunda experiencia, no la tercera.',
        'La enseñanza de Durham se extendió muy rápido y provocó una división dolorosa. En 1911 intentó predicar en Azusa, y Seymour, que no estaba de acuerdo, le cerró la puerta. Durham murió en 1912, pero su postura quedó.',
        { posturas: {
          titulo: '¿La santificación es una segunda obra instantánea?',
          a: { n: 'Santidad pentecostal (tres obras)', t: 'Después de la conversión, Dios purifica el corazón en una segunda experiencia instantánea, recibida por fe, que se apoya en textos como 1 Tesalonicenses 5:23. Recién entonces el creyente está preparado para el bautismo en el Espíritu. La siguen hoy, por ejemplo, la Iglesia de Dios (Cleveland), la Iglesia de Dios en Cristo y la Iglesia Pentecostal de Santidad.' },
          b: { n: 'Obra consumada (dos obras)', t: 'Por la obra de Cristo, el creyente ya está santificado al creer: «somos santificados mediante la ofrenda del cuerpo de Jesucristo hecha una vez para siempre» (He 10:10). Al mismo tiempo, es transformado poco a poco «de gloria en gloria» por el Espíritu (2 Co 3:18). El bautismo en el Espíritu es una experiencia distinta de la conversión, para recibir poder.' },
          c: 'Este recurso sigue la segunda postura, que es la de la mayoría de los pentecostales de hoy. Ambas coinciden en lo esencial: sin santidad «nadie verá al Señor» (He 12:14), y el bautismo en el Espíritu no reemplaza la obediencia diaria ni hace perfecto a nadie de un momento a otro.'
        } },
        'Este debate parece lejano, pero dejó una lección. Los pentecostales descubrieron que podían compartir la misma experiencia del Espíritu y, sin embargo, explicar de manera distinta la vida cristiana. Aprender a discutir con la Biblia en la mano, sin dividir la iglesia por cada diferencia, fue uno de los grandes desafíos de las primeras décadas.'
      ],
      pensar: 'La santificación es a la vez un hecho («somos santificados», He 10:10) y un camino («de gloria en gloria», 2 Co 3:18). ¿En qué aspecto de tu vida necesitas hoy seguir creciendo en santidad?'
    },
    {
      id: 'denominaciones', n: 'Las primeras denominaciones', ref: 'Efesios 4:3-6; Hechos 15:6; 1 Corintios 14:40', fecha: [1907, 1927],
      visual: [
        img('hot-springs.webp', 'Abril de 1914, en Hot Springs, Arkansas: un teatro de ópera con palcos de madera y cortinas rojas, lleno de unos trescientos predicadores y delegados, la mayoría hombres con traje oscuro y algunas mujeres con sombrero, que escuchan sentados a un orador en el escenario; a la izquierda, una mesa con secretarios que toman notas', 'El concilio de Hot Springs, en 1914 (recreación; personas anónimas).'),
        tabla({
          titulo: 'Algunas de las primeras iglesias pentecostales',
          cab: ['Año', 'Iglesia', 'Origen'],
          filas: [
            ['1907', 'Iglesia de Dios en Cristo', 'Carlos Mason, afroamericano, recibe el Espíritu en Azusa; la iglesia, de Memphis, se vuelve pentecostal'],
            ['1907-1908', 'Iglesia de Dios (Cleveland, Tennessee)', 'Iglesia de santidad que adopta la experiencia pentecostal'],
            ['1907-1911', 'Iglesia Pentecostal de Santidad', 'Iglesias de santidad del sureste, después de la predicación de Gastón Cashwell'],
            ['1914', 'Asambleas de Dios', 'Concilio en Hot Springs, Arkansas'],
            ['1927', 'Iglesia Internacional del Evangelio Cuadrangular', 'Aimee Semple McPherson, en Los Ángeles']
          ]
        }, 'Las primeras iglesias'),
        mapa({ view: V.eeuu, lugares: ['h-memphis', 'h-cleveland-tn', 'h-hot-springs', 'h-los-angeles', 'h-springfield'] }, 'Mapa')
      ],
      texto: [
        'Al principio, muchos pentecostales no querían organizar una nueva iglesia. Pensaban que las denominaciones dividían el cuerpo de Cristo y que el Espíritu bastaba para guiarlos. Pero muy pronto aparecieron problemas que exigían alguna organización: había que reconocer a los predicadores para que pudieran celebrar matrimonios y viajar con descuento en los trenes, sostener a los misioneros, formar a los obreros, cuidar la doctrina y corregir a los falsos maestros.',
        { h: 'Las iglesias de santidad que se volvieron pentecostales' },
        'Algunas iglesias de santidad que ya existían adoptaron la experiencia pentecostal. Carlos Mason, un pastor afroamericano de Memphis, viajó a Azusa en 1907 y recibió el Espíritu. Su iglesia, la Iglesia de Dios en Cristo, se reorganizó como pentecostal y, como estaba inscrita legalmente, durante años ordenó también a predicadores blancos. Hoy es una de las mayores iglesias afroamericanas de Estados Unidos. En el sureste, Gastón Cashwell, que había viajado a Azusa, llevó el mensaje a la Iglesia Pentecostal de Santidad y a la Iglesia de Dios, con sede en Cleveland, Tennessee. Estas iglesias mantuvieron la doctrina de las tres obras de gracia.',
        { h: 'Hot Springs, 1914' },
        'En diciembre de 1913, un grupo de pastores publicó una invitación a un concilio general para «todos los santos pentecostales» que quisieran unirse. En abril de 1914 se reunieron unas trescientas personas en un teatro de Hot Springs, Arkansas. No querían escribir un credo, sino formar una comunión de iglesias que respetara la autonomía de cada congregación y cooperara en cinco cosas: la unidad de doctrina, la conservación de la obra, el envío de misioneros, la inscripción legal de las iglesias y la formación de obreros. Así nacieron las Asambleas de Dios, que siguieron la doctrina de la obra consumada. Su sede se instaló después en Springfield, Misuri. Hoy, sumando sus iglesias nacionales en unos 150 países, la Fraternidad Mundial de las Asambleas de Dios reúne a cerca de 89 millones de creyentes, según sus cifras de 2025.',
        { h: 'Aimee Semple McPherson' },
        'Aimee Semple McPherson, una evangelista canadiense, fue la predicadora más famosa de su tiempo en Estados Unidos. En 1923 inauguró en Los Ángeles el Templo Ángelus, con más de cinco mil asientos, desde donde predicaba lo que llamaba el «evangelio cuadrangular»: Cristo Salvador, Bautizador en el Espíritu, Sanador y Rey que viene. Fue pionera en el uso de la radio, organizó comedores para los pobres durante la gran depresión y formó a cientos de predicadores, hombres y mujeres. Su vida tuvo también episodios polémicos que la prensa explotó. En 1927 organizó la Iglesia Internacional del Evangelio Cuadrangular, que más tarde llegó a muchos países de América Latina.',
        'Organizarse no apagó el fuego, como muchos temían. Sin la organización, probablemente buena parte del movimiento se habría perdido en divisiones y errores. Pablo pide «guardar la unidad del Espíritu en el vínculo de la paz» (Ef 4:3), y eso requiere también estructuras sencillas, líderes reconocidos y acuerdos sobre lo esencial.'
      ],
      pensar: 'Los fundadores de Hot Springs temían que una organización apagara el Espíritu, y a la vez veían que sin ella el movimiento se dispersaba. ¿Cómo se puede tener orden en la iglesia sin perder la vida y la libertad del Espíritu?'
    },
    {
      id: 'unicitarios', n: 'La cuestión unicitaria (1913-1916)', ref: 'Mateo 28:19; Hechos 2:38; Juan 1:1-2; Juan 17:5', fecha: [1913, 1916],
      visual: [
        tabla({
          titulo: 'Dos maneras de entender a Dios',
          cab: ['Tema', 'La doctrina de la Trinidad', 'La doctrina unicitaria'],
          filas: [
            ['Dios', 'Un solo Dios en tres personas: Padre, Hijo y Espíritu Santo', 'Un solo Dios en una sola persona, que se manifiesta como Padre, Hijo y Espíritu'],
            ['Jesús', 'El Hijo eterno, distinto del Padre, que se hizo hombre', 'El nombre del único Dios; el Padre se manifestó en el Hijo'],
            ['El bautismo', 'En el nombre del Padre, del Hijo y del Espíritu Santo (Mt 28:19)', 'Solo «en el nombre de Jesús», y quien fue bautizado de otra forma debe rebautizarse'],
            ['Textos clave', 'Mt 3:16-17; 28:19; Jn 1:1; 17:5; 2 Co 13:14', 'Hch 2:38; Col 2:9; Is 9:6']
          ],
          nota: 'Las Asambleas de Dios rechazaron la doctrina unicitaria en 1916. Hoy la siguen, entre otras, la Iglesia Pentecostal Unida y, en América Latina, la Iglesia Apostólica de la Fe en Cristo Jesús, la Iglesia Pentecostal Unida de Colombia y otras.'
        }, 'Comparación'),
        cita('Mateo 28:19', 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;')
      ],
      texto: [
        'En abril de 1913 se celebró un gran campamento pentecostal en Arroyo Seco, cerca de Los Ángeles. Durante un servicio de bautismos, un predicador hizo notar que en el libro de los Hechos los apóstoles bautizaban «en el nombre de Jesucristo» (Hch 2:38) y no con la fórmula de Mateo 28:19. Algunos de los presentes concluyeron que el bautismo debía hacerse solo en el nombre de Jesús. En los meses siguientes, Frank Ewart y otros predicadores fueron más lejos: enseñaron que Padre, Hijo y Espíritu Santo no son tres personas, sino tres títulos o manifestaciones de una sola persona, Jesús, y que todos los que habían sido bautizados con la fórmula trinitaria debían rebautizarse.',
        { h: 'La «nueva cuestión»' },
        'La doctrina se extendió con rapidez entre los pentecostales, que tenían un gran amor por el nombre de Jesús y desconfiaban de los credos antiguos. Muchos pastores se rebautizaron, entre ellos algunos de los fundadores de las Asambleas de Dios. Durante tres años, la «nueva cuestión», como la llamaban, amenazó con dividir todo el movimiento.',
        { h: 'San Luis, 1916' },
        'En octubre de 1916, en San Luis, Misuri, el concilio general de las Asambleas de Dios aprobó una declaración de verdades fundamentales con un largo artículo sobre la Trinidad, que la defendía con palabras de la Escritura. Unos ciento cincuenta de los cerca de seiscientos ministros dejaron la organización. Los pentecostales unicitarios formaron sus propias iglesias, que hoy tienen varios millones de miembros en el mundo, y en América Latina son especialmente numerosos en México y Colombia.',
        'Los pentecostales unicitarios aman a Jesús, oran con fervor y predican con celo, y muchos de sus miembros son personas sinceras. Pero su doctrina de Dios repite, con otro lenguaje, un error que la iglesia antigua ya había rechazado: confundir al Padre y al Hijo como si fueran una misma persona. Las Escrituras muestran al Hijo que ora al Padre, que es enviado por él y que comparte su gloria «antes que el mundo fuese» (Jn 17:5); en el bautismo de Jesús se oye al Padre y desciende el Espíritu (Mt 3:16-17). Y la fórmula de Hechos, «en el nombre de Jesucristo», no reemplaza el mandato de Jesús, sino que indica en qué autoridad se bautiza, porque el mismo Señor ordenó bautizar «en el nombre del Padre, y del Hijo, y del Espíritu Santo» (Mt 28:19).',
        ir('Estudiar la doctrina de la Trinidad en Dios y la Trinidad', '../../dios-y-la-trinidad/'),
        { ejercicio: {
          pregunta: '¿Qué decidieron las Asambleas de Dios en el concilio de San Luis, en 1916?',
          opciones: [
            { t: 'Que todos debían rebautizarse solo en el nombre de Jesús.', ok: false, por_que: 'Fue al revés: rechazaron esa enseñanza.' },
            { t: 'Aprobar una declaración de verdades fundamentales que afirmaba la doctrina de la Trinidad.', ok: true, por_que: 'La declaración de 1916 incluyó un largo artículo sobre el único Dios verdadero, Padre, Hijo y Espíritu Santo.' },
            { t: 'Que la doctrina de Dios no era importante y cada iglesia podía creer lo que quisiera.', ok: false, por_que: 'Los delegados entendieron que la doctrina de Dios es esencial y que no se podía dejar abierta.' }
          ],
          explicacion: 'El debate obligó a un movimiento que desconfiaba de los credos a definir con claridad su fe. La experiencia del Espíritu no reemplaza la verdad sobre Dios que enseña la Escritura (Jn 16:13).'
        } }
      ],
      pensar: 'El Espíritu Santo «guiará a toda la verdad» (Jn 16:13) y glorifica al Hijo (Jn 16:14). ¿Por qué una experiencia espiritual intensa no basta, por sí sola, para saber si una doctrina es verdadera?'
    },
    {
      id: 'verdades', n: 'La declaración de verdades fundamentales (1916)', ref: 'Judas 1:3; 2 Timoteo 1:13-14; 1 Timoteo 4:16', fecha: 1916,
      visual: [
        tabla({
          titulo: 'Las dieciséis verdades fundamentales de las Asambleas de Dios',
          cab: ['N.º', 'Verdad', 'N.º', 'Verdad'],
          filas: [
            ['1', 'La inspiración de las Escrituras', '9', 'La santificación'],
            ['2', 'El único Dios verdadero', '10', 'La iglesia y su misión'],
            ['3', 'La deidad del Señor Jesucristo', '11', 'El ministerio'],
            ['4', 'La caída del hombre', '12', 'La sanidad divina'],
            ['5', 'La salvación del hombre', '13', 'La esperanza bienaventurada'],
            ['6', 'Las ordenanzas de la iglesia', '14', 'El reino milenial de Cristo'],
            ['7', 'El bautismo en el Espíritu Santo', '15', 'El juicio final'],
            ['8', 'La evidencia física inicial', '16', 'Los cielos nuevos y la tierra nueva']
          ],
          nota: 'Títulos según la versión actual. La declaración de 1916 tenía diecisiete artículos; con los años se reordenó y se precisó su redacción.'
        }, 'Las 16 verdades'),
        cita('Judas 1:3', 'Amados, por la gran solicitud que tenía de escribiros acerca de nuestra común salvación, me ha sido necesario escribiros exhortándoos que contendáis ardientemente por la fe que ha sido una vez dada a los santos.')
      ],
      texto: [
        'La declaración aprobada en San Luis en 1916 tuvo una importancia que superó la crisis que la originó. Era la primera vez que una gran iglesia pentecostal ponía por escrito, con orden, lo que creía. Su introducción aclaraba que no pretendía ser un credo perfecto ni el fundamento de la comunión de la iglesia, que es Cristo, sino un acuerdo sobre lo que se enseñaría, apoyado en la Escritura, que es «la regla suficiente de fe y práctica».',
        { h: 'Lo que comparten con todos los evangélicos' },
        'La mayoría de las verdades fundamentales son las mismas que creen todos los cristianos evangélicos: la inspiración de la Biblia, la Trinidad, la deidad de Cristo, la caída del ser humano, la salvación por gracia mediante la fe, el bautismo en agua y la Cena del Señor, la iglesia y su misión, el ministerio, el juicio final y la esperanza de la vida eterna. En la escatología, siguen la lectura premilenial: la venida de Cristo por su iglesia, que es «la esperanza bienaventurada», y después su reino de mil años sobre la tierra.',
        { h: 'Lo que distingue a los pentecostales' },
        'Tres artículos expresan lo propio del movimiento. El séptimo enseña que todos los creyentes tienen derecho a buscar y recibir el bautismo en el Espíritu Santo y fuego, como experiencia distinta y posterior al nuevo nacimiento, para recibir poder para la vida y el servicio. El octavo afirma que la evidencia física inicial de ese bautismo es hablar en otras lenguas como el Espíritu les da que hablen, y que eso es distinto del don de lenguas de 1 Corintios 12. Y el duodécimo afirma que la sanidad divina es parte de la obra de redención de Cristo y privilegio de todos los creyentes.',
        { h: 'Un modelo para muchas iglesias' },
        'Esta declaración, con distintas redacciones, fue adoptada o imitada por muchas otras iglesias pentecostales en todo el mundo, también en América Latina. Su gran aporte fue mostrar que se puede ser plenamente pentecostal y, al mismo tiempo, firmemente ortodoxo, unido en la doctrina a la iglesia de todos los siglos. El Espíritu no trae otra fe, sino que da poder para vivir y anunciar «la fe que ha sido una vez dada a los santos» (Jud 1:3).',
        'Pablo exhortó a Timoteo: «Ten cuidado de ti mismo y de la doctrina; persiste en ello, pues haciendo esto, te salvarás a ti mismo y a los que te oyeren» (1 Ti 4:16). La experiencia del Espíritu y la sana doctrina no son enemigas: se necesitan mutuamente.'
      ],
      pensar: '¿Podrías explicar con tus palabras, y con un texto bíblico, cada una de las verdades fundamentales de tu fe? ¿Cuál de ellas te gustaría estudiar mejor?'
    },
    {
      id: 'evidencia', n: 'Las lenguas como evidencia inicial', ref: 'Hechos 2:4; Hechos 10:45-46; Hechos 19:6; 1 Corintios 12:30; 1 Corintios 14:2-5', fecha: [1901, 1918],
      visual: [
        tabla({
          titulo: '¿Lenguas como señal o como don?',
          cab: ['', 'Señal inicial del bautismo', 'Don de lenguas'],
          filas: [
            ['Dónde se describe', 'Hechos 2, 10 y 19', '1 Corintios 12 y 14'],
            ['Quiénes', 'Los que reciben el bautismo en el Espíritu', 'Algunos, según el Espíritu reparte (1 Co 12:11)'],
            ['Para qué', 'Señal de que el Espíritu vino con poder', 'Edificación personal en la oración; con interpretación, edifica a la iglesia'],
            ['En el culto', 'Puede ocurrir en la oración', 'En público, con interpretación y con orden (1 Co 14:27-28)']
          ],
          nota: 'Esta distinción permite responder a la pregunta de Pablo: «¿hablan todos lenguas?» (1 Co 12:30).'
        }, 'Señal y don'),
        cita('Hechos 10:44-46', 'Mientras aún hablaba Pedro estas palabras, el Espíritu Santo cayó sobre todos los que oían el discurso. Y los fieles de la circuncisión que habían venido con Pedro se quedaron atónitos de que también sobre los gentiles se derramase el don del Espíritu Santo. Porque los oían que hablaban en lenguas, y que magnificaban a Dios.')
      ],
      texto: [
        'De todas las enseñanzas pentecostales, la que más discusión provocó fue la de las lenguas como evidencia inicial del bautismo en el Espíritu Santo. Parham la formuló en 1901 y la mayoría de los pentecostales la adoptó. Pero no todos estuvieron de acuerdo, ni siquiera dentro del movimiento.',
        { h: 'El argumento' },
        'Los que la defienden se apoyan en el libro de los Hechos. En Pentecostés «comenzaron a hablar en otras lenguas» (Hch 2:4). En casa de Cornelio, los creyentes judíos supieron que el Espíritu había caído sobre los gentiles «porque los oían que hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46). En Éfeso, al recibir el Espíritu, «hablaban en lenguas, y profetizaban» (Hch 19:6). Y en Samaria, aunque no se mencionan las lenguas, hubo algo visible que impresionó a Simón el mago. La señal que se repite, concluyen, es hablar en lenguas.',
        { h: 'La objeción' },
        'Los que no aceptan esta doctrina responden que Hechos es un libro de historia y que no todo lo que narra es un modelo obligatorio; que en Samaria no se mencionan las lenguas; y que Pablo pregunta: «¿hablan todos lenguas?» (1 Co 12:30), esperando la respuesta «no». En 1918, uno de los fundadores de las Asambleas de Dios, Fred Bosworth, dejó la organización porque creía que las lenguas son solo una de varias señales posibles. En Chile, el movimiento de Hoover tampoco hizo de las lenguas una condición obligatoria.',
        { posturas: {
          titulo: '¿Es hablar en lenguas la señal inicial del bautismo en el Espíritu?',
          a: { n: 'Evidencia inicial', t: 'Hablar en otras lenguas es la señal física inicial del bautismo en el Espíritu Santo, porque es la que se repite en los relatos de Hechos. Es distinta del don de lenguas de 1 Corintios 12, que no todos tienen: la pregunta «¿hablan todos lenguas?» se refiere al uso público de ese don en la congregación.' },
          b: { n: 'Una señal entre otras', t: 'El bautismo en el Espíritu puede manifestarse con lenguas, con profecía, con alabanza o con un nuevo poder para testificar. Las lenguas son un don valioso, pero no la única señal posible, ya que Hechos no la menciona en todos los casos y Pablo dice que no todos hablan en lenguas.' },
          c: 'Este recurso sigue la primera postura, que es la de la mayoría de las iglesias pentecostales clásicas. Al mismo tiempo recuerda que la evidencia más importante de la vida en el Espíritu es el fruto del Espíritu y el poder para ser testigos (Hch 1:8; Gá 5:22-23), y que quien habla en lenguas sin amor es «como metal que resuena» (1 Co 13:1).'
        } },
        { ejercicio: {
          pregunta: 'Según la postura de la evidencia inicial, ¿cómo se responde a la pregunta de Pablo «¿hablan todos lenguas?»?',
          opciones: [
            { t: 'Pablo se equivocó, porque todos los creyentes hablan en lenguas.', ok: false, por_que: 'Ningún pentecostal dice que Pablo se equivocara; su pregunta es Palabra de Dios.' },
            { t: 'Pablo habla del don de lenguas usado en público en la iglesia, que no todos tienen, y no de la señal del bautismo en el Espíritu.', ok: true, por_que: 'Esa es la distinción entre la señal inicial (Hechos) y el don de lenguas para la congregación (1 Corintios 12 y 14).' },
            { t: 'Las lenguas dejaron de existir después de Pablo.', ok: false, por_que: 'Esa es la postura cesacionista, que los pentecostales no comparten.' }
          ],
          explicacion: 'Pablo distingue entre hablar en lenguas en la oración personal, que edifica al que ora (1 Co 14:4), y el uso público del don, que necesita interpretación (1 Co 14:27-28). En el primer sentido deseaba que todos hablaran en lenguas (1 Co 14:5).'
        } }
      ],
      pensar: 'Pablo agradecía a Dios por hablar en lenguas más que todos, pero en la iglesia prefería cinco palabras con entendimiento (1 Co 14:18-19). ¿Cómo equilibras en tu vida la oración en el Espíritu y la enseñanza que edifica a otros?'
    },
    {
      id: 'sanidad', n: 'Los evangelistas de la sanidad (1947-1958)', ref: 'Santiago 5:14-16; Marcos 16:17-18; Mateo 7:21-23; Mateo 10:8', fecha: [1947, 1958],
      visual: [
        img('carpa-sanidad.webp', 'Hacia 1950, de noche, bajo una enorme carpa de lona iluminada con ampolletas colgantes, en una ciudad del sur de Estados Unidos: un evangelista anónimo con traje claro ora con la mano sobre la cabeza de un hombre con muletas, frente a una fila de enfermos que esperan; miles de personas sentadas en sillas plegables observan', 'Una campaña de sanidad bajo carpa hacia 1950 (recreación; personas anónimas).'),
        tabla({
          titulo: 'Lo que dejó el avivamiento de sanidad',
          cab: ['Aportes', 'Problemas'],
          filas: [
            ['Millones oyeron el evangelio en carpas, estadios y por radio y televisión', 'Exageraciones en el relato de los milagros'],
            ['Muchos enfermos sanados y familias transformadas', 'Presión para recibir dinero y ofrendas «de fe»'],
            ['Cruzadas en América Latina, África y Asia', 'Evangelistas sin rendir cuentas a ninguna iglesia'],
            ['Fe renovada en que Dios sigue obrando', 'Algunos terminaron en doctrinas extrañas o en escándalos']
          ]
        }, 'Aportes y problemas'),
        cita('Mateo 10:8', 'Sanad enfermos, limpiad leprosos, resucitad muertos, echad fuera demonios; de gracia recibisteis, dad de gracia.')
      ],
      texto: [
        'Después de la Segunda Guerra Mundial, entre 1947 y 1958 aproximadamente, Estados Unidos vivió un avivamiento de sanidad. Decenas de evangelistas recorrían el país con enormes carpas en las que cabían miles de personas. Predicaban la salvación y oraban por los enfermos, y la gente llegaba con muletas, en sillas de ruedas o en camillas. Una revista, La voz de la sanidad, fundada en 1948 por Gordon Lindsay, coordinaba sus campañas.',
        { h: 'Los evangelistas' },
        'Los más conocidos fueron Oral Roberts, que empezó a predicar con carpas en 1947 y desde 1955 llevó sus campañas a la televisión; Guillermo Branham, que atraía multitudes por su don de conocer las enfermedades de los presentes, y T. L. Osborn, que con su esposa Daisy realizó grandes campañas en América Latina, África y Asia, en las que siempre insistía en que los creyentes del lugar continuaran la obra. Muchas iglesias pentecostales de América Latina deben su crecimiento a campañas de este tipo.',
        { h: 'Las sombras' },
        'El avivamiento de sanidad tuvo también sombras serias. Algunos evangelistas exageraban los milagros, otros pedían ofrendas con promesas de bendición, y muchos no rendían cuentas a ninguna iglesia. Uno de los más populares, A. A. Allen, perdió sus credenciales de las Asambleas de Dios en 1955, después de ser arrestado conduciendo ebrio, y siguió como predicador independiente. Branham, en sus últimos años, enseñó doctrinas contrarias a la Escritura: negó la Trinidad, enseñó que la serpiente del Edén tuvo descendencia con Eva y dejó entender que él era el profeta Elías anunciado para el tiempo final. Después de su muerte, en 1965, algunos de sus seguidores formaron grupos que lo veneran como profeta y que existen también en América Latina, con el nombre de «el Mensaje».',
        'Las Asambleas de Dios y otras iglesias pentecostales tomaron distancia de muchos de estos evangelistas. Seguían creyendo en la sanidad divina y la predicaban, pero exigían orden, sobriedad, transparencia en el dinero y sujeción a la Escritura y a la iglesia.',
        { h: 'Lo que enseña la Escritura' },
        'Jesús envió a sus discípulos a sanar enfermos y les dijo: «de gracia recibisteis, dad de gracia» (Mt 10:8). La sanidad es un regalo de Dios, no un espectáculo ni un negocio. Santiago enseña que la oración por los enfermos es parte de la vida normal de la iglesia local, con sus ancianos (Stg 5:14-15). Y Jesús advirtió que en el día del juicio algunos dirán: «¿no profetizamos en tu nombre, y en tu nombre echamos fuera demonios, y en tu nombre hicimos muchos milagros?», y él les responderá: «Nunca os conocí» (Mt 7:22-23). Los milagros no prueban la santidad de quien ora, ni la verdad de lo que enseña.'
      ],
      pensar: 'Jesús dijo «de gracia recibisteis, dad de gracia». ¿Cómo puedes orar por los enfermos de tu familia y de tu iglesia con fe, sin convertirlo en un espectáculo y sin perder la confianza en Dios si la sanidad no llega como esperabas?'
    },
    {
      id: 'lluvia-tardia', n: 'La «lluvia tardía» de 1948 y su rechazo', ref: '1 Corintios 12:11; Efesios 2:20; 1 Juan 4:1; Hebreos 1:1-2', fecha: [1948, 1949],
      visual: [
        tabla({
          titulo: 'Lo que enseñaba la «nueva orden de la lluvia tardía» y lo que respondieron las Asambleas de Dios (1949)',
          cab: ['Enseñanza', 'Respuesta'],
          filas: [
            ['Los dones del Espíritu se reparten por la imposición de manos de ciertos líderes', 'El Espíritu reparte los dones «como él quiere» (1 Co 12:11)'],
            ['Dios restaura hoy el oficio de apóstoles y profetas con autoridad sobre las iglesias', 'La iglesia está edificada sobre el fundamento de los apóstoles y profetas del Nuevo Testamento (Ef 2:20)'],
            ['Las profecías personales pueden dirigir las decisiones de los creyentes', 'La profecía edifica y se juzga; no reemplaza la Escritura ni la dirección personal de Dios'],
            ['Se forma una élite de «hijos manifestados» que alcanzarán la perfección antes de Cristo', 'La perfección llega cuando Cristo venga (1 Jn 3:2)']
          ]
        }, 'Enseñanza y respuesta'),
        mapa({ view: V.eeuu, lugares: ['h-battleford', 'h-springfield'] }, 'Mapa')
      ],
      texto: [
        'En febrero de 1948, en un orfanato y escuela bíblica de North Battleford, en Saskatchewan, Canadá, un grupo de pastores y alumnos que venían de días de ayuno y oración vivió una serie de manifestaciones que interpretaron como el comienzo de la «lluvia tardía» de Joel 2:23. Los líderes del grupo enseñaron que Dios estaba restaurando todo lo que la iglesia había perdido, y que había llegado el tiempo de un último gran derramamiento antes de la venida de Cristo.',
        { h: 'Lo que enseñaban' },
        'El movimiento, llamado la «nueva orden de la lluvia tardía», se extendió rápidamente por Canadá y Estados Unidos. Enseñaba que los dones del Espíritu podían impartirse a voluntad por la imposición de manos de ciertos líderes; que Dios estaba levantando de nuevo apóstoles y profetas que tendrían autoridad sobre las iglesias; que por medio de profecías personales Dios indicaba a los creyentes con quién casarse, qué ministerio tener o adónde ir; y algunos hablaban de una generación de «hijos de Dios manifestados» que alcanzarían la perfección y la inmortalidad antes de que Cristo volviera.',
        { h: 'La respuesta' },
        'En 1949, el concilio general de las Asambleas de Dios aprobó una resolución que rechazaba estas enseñanzas como contrarias a la Escritura y a la experiencia de la iglesia. Recordaba que es el Espíritu quien reparte los dones «a cada uno en particular como él quiere» (1 Co 12:11); que la iglesia está edificada «sobre el fundamento de los apóstoles y profetas», con Cristo como piedra angular (Ef 2:20), un fundamento que se pone una sola vez; y que las profecías no deben reemplazar la Escritura ni la responsabilidad de cada creyente delante de Dios. Muchas otras iglesias pentecostales tomaron la misma posición.',
        { h: 'Ideas que vuelven' },
        'El movimiento se dividió y perdió fuerza en pocos años, pero sus ideas no desaparecieron. Reaparecieron en las décadas siguientes en algunos grupos carismáticos y, sobre todo, en la llamada «nueva reforma apostólica» de fines del siglo XX, que se estudiará en la ruta VII. Conocer esta historia ayuda a reconocer una enseñanza antigua cuando se presenta como una revelación nueva.',
        'El escritor de Hebreos dice que Dios, que habló muchas veces por los profetas, «en estos postreros días nos ha hablado por el Hijo» (He 1:2). La revelación de Dios en Cristo, registrada por los apóstoles, es completa. El Espíritu sigue hablando, guiando y dando dones, pero no añade un fundamento nuevo.',
        ir('Ver la estación sobre los nuevos apóstoles (ruta VII)', '#discernimiento/2')
      ],
      pensar: 'Una profecía personal puede animar, pero no reemplaza la Escritura ni tu responsabilidad ante Dios. ¿Has tomado alguna decisión importante solo porque alguien te dio una «palabra»? ¿Cómo la habrías probado a la luz de la Biblia?'
    },
    {
      id: 'aceptacion', n: 'De secta despreciada a la Fraternidad Pentecostal Mundial', ref: 'Juan 17:21; Salmo 133:1; Efesios 4:3-6', fecha: [1943, 1994],
      visual: [
        tabla({
          titulo: 'Del aislamiento a la comunión',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1943', 'Las Asambleas de Dios y otras iglesias pentecostales ayudan a fundar la Asociación Nacional de Evangélicos, en Estados Unidos'],
            ['1947', 'Primera Conferencia Pentecostal Mundial, en Zúrich; hoy, Fraternidad Pentecostal Mundial'],
            ['1948', 'Se forma la Fraternidad Pentecostal de Norteamérica, solo con iglesias de mayoría blanca'],
            ['Década de 1950', 'David du Plessis, «el señor Pentecostés», visita a líderes de otras iglesias'],
            ['1994', 'En Memphis, pentecostales blancos y negros se piden perdón y forman una nueva fraternidad']
          ]
        }, 'Del aislamiento a la comunión'),
        mapa({ view: V.atlantico, lugares: ['h-zurich', 'h-memphis', 'h-springfield'] }, 'Mapa')
      ],
      texto: [
        'Durante sus primeras décadas, los pentecostales vivieron aislados. Los otros evangélicos los consideraban fanáticos, las iglesias históricas los ignoraban, y muchos pentecostales, a su vez, creían que las demás iglesias estaban muertas. La mayoría eran personas pobres y con poca educación formal, que se reunían en locales sencillos en los barrios obreros.',
        { h: 'Comunión con otros evangélicos' },
        'Eso empezó a cambiar en la década de 1940. En 1943, las Asambleas de Dios y otras iglesias pentecostales estuvieron entre las fundadoras de la Asociación Nacional de Evangélicos de Estados Unidos, junto a bautistas, presbiterianos y otras iglesias conservadoras que compartían la fe en la autoridad de la Biblia y el evangelio. Muchos fundamentalistas no lo aceptaron, pero el paso abrió la puerta a la cooperación. En 1947, en Zúrich, Suiza, se celebró la primera Conferencia Pentecostal Mundial, que reunió a líderes de muchos países y que hoy, como Fraternidad Pentecostal Mundial, se reúne cada pocos años.',
        { h: 'El señor Pentecostés' },
        'David du Plessis, un pastor pentecostal sudafricano que había sido secretario de esa conferencia, comenzó en la década de 1950 a visitar a líderes de las iglesias protestantes históricas, y después también de la católica, para contarles su experiencia del Espíritu. Lo llamaron «el señor Pentecostés». Su labor fue polémica entre los pentecostales, pero preparó el terreno para la renovación carismática que se estudia en la ruta V.',
        { h: 'El milagro de Memphis' },
        'La herida racial seguía abierta. En 1948 se formó una fraternidad de iglesias pentecostales de Norteamérica que reunía solo a las de mayoría blanca, mientras las iglesias afroamericanas, como la Iglesia de Dios en Cristo, quedaban fuera. En octubre de 1994, en Memphis, los líderes de esas iglesias se reunieron para reconocer ese pecado. Un pastor blanco de las Asambleas de Dios se arrodilló y lavó los pies de un obispo de la Iglesia de Dios en Cristo, pidiendo perdón en nombre de su gente. La antigua fraternidad se disolvió y se formó una nueva, con iglesias negras y blancas. Los presentes lo llamaron «el milagro de Memphis». Ochenta y ocho años después de Azusa, se volvía a la unidad de los comienzos.',
        { ejercicio: {
          pregunta: '¿Qué ocurrió en el llamado «milagro de Memphis», en 1994?',
          opciones: [
            { t: 'Un evangelista sanó a miles de enfermos en un estadio.', ok: false, por_que: 'El «milagro» no fue una sanidad física, sino una reconciliación.' },
            { t: 'Los pentecostales blancos y negros de Norteamérica se pidieron perdón y formaron una fraternidad unida.', ok: true, por_que: 'Se disolvió la fraternidad que solo reunía a iglesias de mayoría blanca y se formó una nueva, con iglesias de ambos orígenes.' },
            { t: 'Las iglesias pentecostales se unieron a la Iglesia Católica.', ok: false, por_que: 'No tuvo nada que ver con la Iglesia Católica; fue un encuentro entre iglesias pentecostales.' }
          ],
          explicacion: 'Jesús oró para que sus discípulos fueran uno, «para que el mundo crea» (Jn 17:21). La reconciliación entre hermanos es también obra del Espíritu.'
        } }
      ],
      pensar: '«¡Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía!» (Sal 133:1). ¿Con qué hermano o con qué iglesia necesitas tú dar un paso de reconciliación?'
    }
  ];

  // ================== RUTA IV. América Latina ==================
  const america = [
    {
      id: 'valparaiso', n: 'Valparaíso, 1909: Hoover y el avivamiento', ref: 'Joel 2:28-29; Hechos 2:47; Hechos 5:38-39', fecha: [1907, 1910],
      visual: [
        img('../historia-iglesia-2/img/valparaiso.webp', 'Interior de una iglesia metodista de madera en Valparaíso en 1909, de noche: una congregación de obreros, empleadas y familias chilenas de la época, con ropa sencilla, ora en voz alta con las manos levantadas; algunos de rodillas junto a las bancas, una joven llora con el rostro alzado; lámparas de parafina iluminan el templo', 'Una reunión de oración en Valparaíso en 1909 (recreación; personas anónimas).'),
        foto('hoover.jpg', 'Retrato en blanco y negro de Guillermo C. Hoover en su vejez, con anteojos, barba blanca y cuello alto', 'Guillermo C. Hoover (1858-1936), hacia 1920.', 'Biblioteca Nacional de Chile (Memoria Chilena). Dominio público, vía Wikimedia Commons'),
        pasos([
          { t: 'Un folleto de Mukti llega a Valparaíso (1907)', fecha: 1907, estado: { view: V.mundo, lugares: ['h-mukti', 'h-valparaiso'], trazos: ['h-p-mukti-chile'] } },
          { t: 'El avivamiento se extiende a Santiago y a otras ciudades (1909-1910)', fecha: 1909, estado: { view: V.chile, lugares: ['h-valparaiso', 'h-santiago', 'h-concepcion'] } }
        ], 'Mapa')
      ],
      texto: [
        'Guillermo Hoover nació en 1858 en Freeport, Illinois, y estudió medicina. En 1889 llegó a Chile como profesor de un colegio metodista en Iquique, y desde 1902 era pastor de la Iglesia Metodista Episcopal de Valparaíso, una congregación de obreros, marinos, empleadas domésticas y familias sencillas. Historia de la Iglesia II cuenta el comienzo del avivamiento; aquí se sigue su historia con más detalle.',
        { h: 'De Mukti a Valparaíso' },
        'En 1907, María Hoover recibió de la India el folleto de su antigua compañera de estudios, Minnie Abrams, sobre el bautismo del Espíritu Santo y fuego, con la historia de Mukti. Los Hoover se escribieron con creyentes de otros países y comenzaron a orar con su congregación. Durante meses hubo reuniones de oración cada noche y vigilias que duraban hasta el amanecer. Hoover escribió años después que el deseo de los hermanos era ser llenos del Espíritu para vivir en santidad y ganar almas.',
        { h: '1909' },
        'Desde mediados de 1909, en las reuniones de Valparaíso muchos hablaron en otras lenguas, tuvieron visiones, cayeron al suelo bajo el poder de Dios, lloraron por sus pecados, cantaron y danzaron de gozo. Hubo conversiones de alcohólicos, de jugadores y de mujeres que vivían en la prostitución, y familias enteras fueron restauradas. Los creyentes salieron a predicar a las calles. El fuego llegó a las iglesias metodistas de Santiago, donde en septiembre unas reuniones con una mujer que profetizaba terminaron con la intervención de la policía y con grandes titulares en los diarios.',
        { h: 'La separación de 1910' },
        'Las autoridades metodistas, en su mayoría misioneros norteamericanos, se alarmaron. En la conferencia anual de 1910 acusaron a Hoover de enseñar doctrinas contrarias al metodismo y a la Biblia. Hoover renunció, y con él la congregación de Valparaíso y dos de Santiago formaron una iglesia independiente, que pronto se llamó Iglesia Metodista Pentecostal. Conservaron el nombre de metodistas, el gobierno con superintendente y muchas costumbres de su iglesia madre, pero sin ningún apoyo del extranjero. Gamaliel había dicho ante el concilio: «si es de Dios, no la podréis destruir» (Hch 5:39).',
        'Como muchos pentecostales de América Latina, Hoover no hizo de las lenguas una condición obligatoria del bautismo en el Espíritu, y el movimiento chileno, aunque practicaba las lenguas, puso más el acento en la santidad, la oración, la alabanza y la predicación. Hoover dirigió la Iglesia Metodista Pentecostal hasta 1932 y después la Iglesia Evangélica Pentecostal, hasta su muerte en Chile, en 1936.',
        ir('Leer la estación sobre Valparaíso en Historia de la Iglesia II', H2 + '#america/6')
      ],
      pensar: 'El avivamiento de Valparaíso empezó con un folleto que llegó de la India y con meses de oración perseverante. ¿Qué podría hacer Dios en tu iglesia si oraran con la misma constancia?'
    },
    {
      id: 'chile', n: 'Pentecostales chilenos: la calle, el canto y la iglesia del pueblo', ref: 'Romanos 10:14-15; Colosenses 3:16; Jeremías 29:7', fecha: [1910, 2024],
      visual: [
        img('calle-chile.webp', 'Hacia 1940, una tarde de domingo en una esquina de un barrio obrero de Santiago de Chile: un grupo de creyentes pentecostales chilenos, hombres con traje oscuro y mujeres con vestidos largos y velo, canta con guitarras y mandolinas mientras un hermano predica con la Biblia en alto; vecinos y niños observan desde las veredas', 'Una predicación al aire libre en un barrio de Santiago hacia 1940 (recreación; personas anónimas).'),
        tabla({
          titulo: 'Algunas fechas del pentecostalismo chileno',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1909-1910', 'Avivamiento de Valparaíso; nace la Iglesia Metodista Pentecostal'],
            ['1932-1933', 'Primera gran división: Hoover forma la Iglesia Evangélica Pentecostal'],
            ['1939', 'Misioneros pentecostales suecos fundan en Santiago una de las primeras Asambleas de Dios Autónomas'],
            ['1975', 'Primer Te Deum evangélico'],
            ['1999', 'Ley 19.638 de cultos: igualdad jurídica de las iglesias'],
            ['2008', 'El 31 de octubre pasa a ser el Día Nacional de las Iglesias Evangélicas y Protestantes'],
            ['2024', 'Censo: el 16,3 % de los mayores de 15 años se declara evangélico']
          ]
        }, 'Fechas'),
        mapa({ view: V.chile, lugares: ['h-valparaiso', 'h-santiago', 'h-concepcion', 'h-temuco'] }, 'Mapa')
      ],
      texto: [
        'El pentecostalismo chileno fue, desde el principio, un movimiento del pueblo. Sus pastores eran obreros, campesinos y artesanos que se habían convertido y se formaban en la práctica: primero predicaban en la calle, después dirigían un grupo, luego una congregación pequeña, y solo con los años llegaban a pastores. No había seminarios ni sueldos. La congregación entera se sentía responsable de evangelizar.',
        { h: 'La calle y el canto' },
        'La marca más visible del pentecostalismo chileno fue la predicación al aire libre. Cada domingo, y muchas veces durante la semana, grupos de hermanos salían a las esquinas de los barrios a cantar, testificar y predicar, con guitarras, mandolinas y otros instrumentos de cuerda. Después marchaban cantando hasta el templo, invitando a los vecinos. Los himnos y coros, muchos compuestos por los propios creyentes, se cantaban con melodías y ritmos populares. Los vecinos los llamaron «canutos», al principio como burla.',
        { h: 'Divisiones y crecimiento' },
        'El movimiento creció rápidamente, pero también se dividió muchas veces, por disputas de liderazgo, de propiedad o de doctrina. En 1932 y 1933, después de un conflicto entre Hoover y otros dirigentes, Hoover y sus seguidores formaron la Iglesia Evangélica Pentecostal. Con los años nacieron muchas otras iglesias, como la Iglesia Pentecostal de Chile, en 1942. Llegaron también misioneros de otros países. Desde fines de la década de 1930, misioneros del pentecostalismo sueco dieron origen a las Asambleas de Dios Autónomas, con congregaciones que se gobiernan a sí mismas; una de las primeras, en Santiago, fue fundada en 1939 por Albin y Fanny Gustafsson. Las divisiones dolieron, pero paradójicamente multiplicaron las congregaciones por todo el país.',
        { h: 'De la marginación al reconocimiento' },
        'Durante décadas, los pentecostales fueron una minoría pobre y despreciada. Poco a poco ganaron presencia pública. La Iglesia Metodista Pentecostal construyó en Santiago, en la calle Jotabeche, un gran templo conocido como la Catedral Evangélica. Desde 1975 se celebra cada año un Te Deum evangélico. En esos años del régimen militar, algunos dirigentes evangélicos apoyaron públicamente al gobierno y otros lo criticaron, y esa etapa sigue siendo discutida. En 1999, después de años de gestiones, la Ley 19.638 dio a las iglesias evangélicas la misma condición jurídica que a la Iglesia Católica, y desde 2008 el 31 de octubre es feriado nacional, el Día de las Iglesias Evangélicas y Protestantes.',
        'En el censo de 2024, el 16,3 % de los chilenos mayores de quince años se declaró evangélico, y la gran mayoría de ellos pertenece a iglesias pentecostales. Jeremías escribió a los desterrados: «procurad la paz de la ciudad» (Jer 29:7). Los pentecostales chilenos aprendieron a hacerlo desde las esquinas de sus barrios.',
        { ejercicio: {
          pregunta: '¿Cómo se formaban los pastores en los comienzos del pentecostalismo chileno?',
          opciones: [
            { t: 'En seminarios dirigidos por misioneros extranjeros.', ok: false, por_que: 'Después de 1910 no había misioneros ni seminarios; la formación era práctica.' },
            { t: 'En la práctica: predicando en la calle, dirigiendo grupos y congregaciones pequeñas antes de ser pastores.', ok: true, por_que: 'Era una escuela en el camino, en la que cada etapa probaba el llamado y el carácter del obrero.' },
            { t: 'En la universidad, estudiando teología.', ok: false, por_que: 'Casi ninguno tenía estudios superiores; eran obreros y campesinos.' }
          ],
          explicacion: 'Ese modelo explica en parte la rapidez del crecimiento: cada creyente era un testigo y cada congregación formaba a sus propios obreros. Su desafío es complementar el fervor con una formación bíblica sólida (2 Ti 2:2, 15).'
        } }
      ],
      pensar: '«¿Cómo oirán sin haber quien les predique?» (Ro 10:14). Los pentecostales chilenos salieron a la calle a predicar. ¿Dónde está tu «esquina», el lugar donde Dios te pide ser testigo?'
    },
    {
      id: 'brasil', n: 'Brasil: Belém, São Paulo y tres etapas', ref: 'Hechos 13:2-4; Hechos 16:6-10; Isaías 60:22', fecha: [1910, 1977],
      visual: [
        img('belem.webp', 'En 1911, en Belém do Pará, junto al río, en una casa sencilla de madera con techo de palma, un pequeño grupo de brasileños humildes, hombres, mujeres y niños, con ropa de algodón de la época, ora de rodillas con la Biblia abierta sobre una banca; afuera se ve la vegetación tropical y canoas en el río', 'Una de las primeras reuniones pentecostales en Belém, en 1911 (recreación; personas anónimas).'),
        esq('esquema-brasil.svg', 'Esquema de las tres etapas del pentecostalismo en Brasil: 1910-1911, con la Congregación Cristiana y las Asambleas de Dios; décadas de 1950 y 1960, con la Cuadrangular, Brasil para Cristo y Dios es Amor; y desde 1977, con la Iglesia Universal del Reino de Dios y la Internacional de la Gracia', 'Las tres etapas del pentecostalismo en Brasil.', 'Tres etapas'),
        pasos([
          { t: 'Berg y Vingren, de Chicago a Belém (1910)', fecha: 1910, estado: { view: V.america, lugares: ['h-chicago', 'h-belem'], trazos: ['h-p-chicago-belem'] } },
          { t: 'Francescon, de Chicago a São Paulo (1910)', fecha: 1910, estado: { view: V.america, lugares: ['h-chicago', 'h-belem', 'h-sao-paulo'], trazos: ['h-p-chicago-belem', 'h-p-chicago-sp'] } }
        ], 'Mapa')
      ],
      texto: [
        'Brasil es hoy el país con más pentecostales del mundo. Su historia comenzó casi al mismo tiempo que la de Chile, con dos llegadas desde Chicago en 1910.',
        { h: 'Los suecos de Belém' },
        'Daniel Berg y Gunnar Vingren eran dos jóvenes suecos de origen bautista que habían emigrado a Estados Unidos y habían recibido el bautismo en el Espíritu en Chicago. En una reunión de oración, un hermano profetizó que debían ir a un lugar llamado Pará. No sabían dónde quedaba; lo buscaron en un mapa de la biblioteca y descubrieron que era un estado del norte de Brasil, en la desembocadura del Amazonas. Llegaron a Belém en noviembre de 1910, casi sin dinero. Mientras Vingren estudiaba el portugués, Berg trabajaba en una fundición para sostenerlos a los dos.',
        'Se congregaron en una iglesia bautista y compartieron su experiencia. Algunos miembros recibieron el Espíritu, y en junio de 1911 la iglesia expulsó a unos dieciocho de ellos. Con ese grupo formaron la Misión de la Fe Apostólica, que en 1918 tomó el nombre de Asambleas de Dios. Desde Belém, los creyentes llevaron el mensaje por los ríos del Amazonas y después por la costa y hacia el sur. En pocas décadas las Asambleas de Dios llegaron a ser la mayor iglesia evangélica de Brasil, con millones de miembros.',
        { h: 'Los italianos de São Paulo' },
        'Ese mismo año, Luis Francescon, un italiano que había vivido en Chicago, llegó a São Paulo y predicó entre los inmigrantes italianos. Así nació la Congregación Cristiana en Brasil, una iglesia de culto muy sobrio, sin pastores asalariados, que también creció hasta tener millones de miembros.',
        { h: 'Las tres etapas' },
        'Los estudiosos distinguen tres etapas en el pentecostalismo brasileño. La primera, la de 1910 y 1911, fue la de las iglesias pioneras. La segunda, en las décadas de 1950 y 1960, llegó con campañas de sanidad en carpas, la radio y las grandes ciudades, y dio origen a iglesias como Brasil para Cristo y Dios es Amor. La tercera comenzó en 1977, en Río de Janeiro, con la Iglesia Universal del Reino de Dios, y se caracteriza por la televisión, los cultos de liberación y, en muchas de ellas, el evangelio de la prosperidad, que se estudia en la ruta VII.',
        'En el censo de 2022, el 26,9 % de los brasileños de diez años o más se declaró evangélico, más de 47 millones de personas, la mayoría pentecostales. Lo que había empezado con dos jóvenes sin dinero que buscaron Pará en un mapa recuerda la promesa: «El pequeño vendrá a ser mil, el menor, un pueblo fuerte» (Is 60:22).'
      ],
      pensar: 'Berg y Vingren obedecieron sin saber siquiera dónde quedaba el lugar al que iban. ¿Qué paso de obediencia te está pidiendo Dios, aunque no veas todavía el camino completo?'
    },
    {
      id: 'latinos', n: 'Los latinos de Azusa: Olazábal y Lugo', ref: 'Hechos 2:8-11; Hechos 8:4; Apocalipsis 7:9', fecha: [1906, 1937],
      visual: [
        tabla({
          titulo: 'Pioneros latinos',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1906', 'Abundio y Rosa López, mexicanos, dan testimonio en la calle Azusa'],
            ['1916', 'Francisco Olazábal, mexicano, recibe el Espíritu y comienza a predicar entre los mexicanos de Texas y California'],
            ['1916', 'Juan L. Lugo, puertorriqueño convertido en Hawái, llega a Ponce el 30 de agosto y predica el primer mensaje pentecostal conocido en Puerto Rico'],
            ['1923', 'Olazábal funda el Concilio Interamericano de Iglesias Cristianas, de dirigentes latinos'],
            ['1931', 'Lugo se traslada a Nueva York y funda iglesias entre los puertorriqueños']
          ]
        }, 'Pioneros'),
        pasos([
          { t: 'Juan L. Lugo, de Hawái a Ponce (1916)', fecha: 1916, estado: { view: V.mundo, lugares: ['h-honolulu', 'h-los-angeles', 'h-ponce'], trazos: ['h-p-lugo'] } },
          { t: 'Olazábal entre los mexicanos de la frontera (1916-1937)', fecha: 1923, estado: { view: V.centro, lugares: ['h-los-angeles', 'h-el-paso', 'h-san-antonio', 'h-mexico', 'h-ponce'] } }
        ], 'Mapa')
      ],
      texto: [
        'Desde el comienzo hubo latinos en el movimiento pentecostal. En 1906, el periódico de Azusa publicó en español el testimonio de un matrimonio mexicano, Abundio y Rosa López, que contaban cómo habían recibido el Espíritu y predicaban a los mexicanos de Los Ángeles. Pronto aparecieron pequeñas misiones pentecostales en los barrios mexicanos de California y Texas.',
        { h: 'Francisco Olazábal' },
        'Francisco Olazábal nació en 1886 en Sinaloa, México. Fue predicador metodista y estudió en un seminario de esa iglesia. En 1916, en California, conoció a un matrimonio pentecostal que oró por él, recibió el bautismo en el Espíritu y comenzó a predicar entre los mexicanos con un ministerio de sanidad. Se unió a las Asambleas de Dios, pero con el tiempo sintió que los dirigentes norteamericanos no daban a los latinos el lugar que les correspondía. En 1923 fundó una organización propia, el Concilio Interamericano de Iglesias Cristianas, dirigida por latinos. Sus campañas en Texas, California, Nueva York y Puerto Rico reunieron a miles de personas. Lo llamaban «el Billy Sunday mexicano». Murió en 1937, después de un accidente.',
        { h: 'Juan L. Lugo' },
        'Juan León Lugo era un puertorriqueño que trabajaba en los cañaverales de Hawái. Allí, un compañero analfabeto le pidió que le leyera la Biblia en los descansos, y la Palabra cambió su vida. Recibió el Espíritu en una pequeña iglesia pentecostal y sintió el llamado de llevar el mensaje a su isla. El 30 de agosto de 1916 llegó a Ponce y ese mismo día predicó en la calle el primer mensaje pentecostal conocido en Puerto Rico. En dos años fundó cuatro iglesias, que formaron la Iglesia de Dios Pentecostal. En 1931 se trasladó a Nueva York, donde fundó iglesias entre los puertorriqueños. Puerto Rico envió después evangelistas a muchos países de América Latina y a España.',
        { h: 'Un evangelio en su propia lengua' },
        'En Pentecostés, la gente de muchas naciones se preguntaba: «¿Cómo, pues, les oímos nosotros hablar cada uno en nuestra lengua en la que hemos nacido?» (Hch 2:8). Olazábal, Lugo y muchos otros mostraron que el evangelio no tenía que llegar a los latinos traducido desde otra cultura: podía predicarse en su idioma, con su música y por sus propios líderes. Esa convicción, que también vivieron los chilenos y los brasileños, fue una de las claves del crecimiento pentecostal en todo el continente.'
      ],
      pensar: 'Lugo se convirtió porque un compañero que no sabía leer le pidió que le leyera la Biblia. ¿A quién podrías invitar tú a leer la Biblia contigo esta semana?'
    },
    {
      id: 'mexico-centroamerica', n: 'México y Centroamérica', ref: 'Mateo 22:21; Juan 18:36; Hechos 8:4', fecha: [1914, 2024],
      visual: [
        mapa({ view: V.centro, lugares: ['h-mexico', 'h-guatemala', 'h-san-salvador', 'h-tegucigalpa', 'h-el-paso', 'h-san-antonio'] }, 'Mapa'),
        tabla({
          titulo: 'Rasgos del pentecostalismo en México y Centroamérica',
          cab: ['País', 'Algunos rasgos'],
          filas: [
            ['México', 'Pentecostales trinitarios y unicitarios desde la década de 1910; mucha influencia de los trabajadores que iban y volvían de Estados Unidos'],
            ['Guatemala', 'Uno de los países con mayor proporción de evangélicos del continente; crecimiento muy rápido desde la década de 1970'],
            ['El Salvador y Honduras', 'Las Asambleas de Dios y otras iglesias pentecostales entre las mayores denominaciones evangélicas'],
            ['Toda la región', 'Iglesias pequeñas de barrio y de aldea, junto a megaiglesias en las capitales']
          ],
          nota: 'En Guatemala, Honduras y El Salvador, las encuestas recientes indican que entre un tercio y más de dos quintos de la población es evangélica.'
        }, 'Rasgos')
      ],
      texto: [
        'El pentecostalismo llegó a México sobre todo con los trabajadores mexicanos que iban a Estados Unidos y volvían a sus pueblos. En 1914, en Chihuahua, una mujer mexicana llamada Romana Valenzuela, que había recibido el Espíritu en Los Ángeles, regresó a su tierra y compartió su fe con su familia y sus vecinos. De ese grupo nació la Iglesia Apostólica de la Fe en Cristo Jesús, que siguió la doctrina unicitaria. Al mismo tiempo se formaron iglesias pentecostales trinitarias, entre ellas las Asambleas de Dios, que en México se organizaron como iglesia nacional dirigida por mexicanos. Durante buena parte del siglo XX, en un país con leyes muy restrictivas para las iglesias, los pentecostales crecieron en los pueblos y en los barrios pobres de las ciudades.',
        { h: 'Centroamérica' },
        'En Centroamérica, el pentecostalismo llegó desde la década de 1910 y creció lentamente hasta la de 1960. Desde entonces el crecimiento fue explosivo. Guatemala, Honduras y El Salvador están entre los países de América Latina con mayor proporción de evangélicos. Los estudiosos señalan varias causas: la migración del campo a la ciudad, la pobreza y la violencia de las guerras civiles, el trabajo de las iglesias después de desastres como el terremoto de Guatemala de 1976, y sobre todo el celo evangelizador de los creyentes. Junto a las pequeñas iglesias de barrio y de aldea surgieron en las capitales grandes iglesias independientes, algunas con enseñanzas sanas y otras con desvíos que se estudian en la ruta VII.',
        { h: 'El evangelio y el poder político' },
        'El crecimiento trajo también una tentación: confundir el reino de Dios con el poder político. En Guatemala, el general Efraín Ríos Montt, miembro de una iglesia evangélica, gobernó tras un golpe de Estado entre 1982 y 1983, en años de violencia contra los pueblos mayas. En 2013 un tribunal lo condenó por genocidio, sentencia que la Corte de Constitucionalidad anuló poco después, y el caso sigue siendo objeto de debate. Para muchos guatemaltecos, el nombre de un presidente evangélico quedó asociado a la represión, y eso dañó el testimonio de las iglesias.',
        'Jesús dijo a Pilato: «Mi reino no es de este mundo» (Jn 18:36), y enseñó a dar «a César lo que es de César, y a Dios lo que es de Dios» (Mt 22:21). Los creyentes son ciudadanos que pueden servir en la vida pública con honestidad y justicia, pero ninguna autoridad política puede presentarse como la representante de Dios ni usar la fe para justificar el abuso. La fuerza de la iglesia está en el evangelio, no en el poder del Estado.'
      ],
      pensar: 'Los creyentes de Centroamérica crecieron en medio de guerras y pobreza, sirviendo a sus vecinos. ¿Cómo puede tu iglesia ser una bendición para su barrio sin confundir su misión con un proyecto político?'
    },
    {
      id: 'argentina', n: 'Argentina: Hicks (1954) y Annacondia', ref: 'Hechos 8:5-8; Efesios 6:10-18; Lucas 10:17-20', fecha: [1954, 1990],
      visual: [
        img('estadio-1954.webp', 'Buenos Aires, 1954: un estadio de fútbol de cemento con tribunas repletas de decenas de miles de argentinos con ropa de la época, hombres con sombrero y mujeres con vestidos, que levantan las manos mientras un predicador anónimo habla desde una plataforma de madera en medio de la cancha; algunos enfermos esperan cerca de la plataforma', 'Una campaña evangelística en un estadio de Buenos Aires en 1954 (recreación; personas anónimas).'),
        mapa({ view: V.sudamerica, lugares: ['h-buenos-aires', 'h-la-plata', 'h-asuncion'] }, 'Mapa'),
        cita('Hechos 8:5-8', 'Entonces Felipe, descendiendo a la ciudad de Samaria, les predicaba a Cristo. Y la gente, unánime, escuchaba atentamente las cosas que decía Felipe, oyendo y viendo las señales que hacía. Porque de muchos que tenían espíritus inmundos, salían éstos dando grandes voces; y muchos paralíticos y cojos eran sanados; así que había gran gozo en aquella ciudad.')
      ],
      texto: [
        'Hasta la década de 1950, los evangélicos argentinos eran una pequeña minoría, y los pentecostales, apenas unos grupos dispersos. En 1954 llegó a Buenos Aires un evangelista norteamericano de sanidad, Tomás Hicks, para reemplazar a otro predicador que no podía venir. Según su propio relato, obtuvo una entrevista con el presidente Juan Domingo Perón, oró por él y consiguió permiso para usar un estadio y la radio.',
        { h: 'Los estadios' },
        'Las reuniones comenzaron en el estadio del club Atlanta y, como no cabía la gente, se trasladaron al estadio del club Huracán. Durante unas semanas, cada noche, decenas de miles de personas escucharon el evangelio y se oró por los enfermos. Las cifras que difundió la campaña, de millones de asistentes, parecen exageradas, pero nadie discute que fue la mayor reunión evangélica que el país había visto. Las iglesias pentecostales y otras iglesias evangélicas recibieron a muchos nuevos creyentes y comenzaron a crecer.',
        { h: 'La década de 1980' },
        'El gran crecimiento llegó treinta años después. Tras la guerra de las Malvinas, en 1982, el país vivía una crisis profunda. Carlos Annacondia, un empresario de Quilmes que se había convertido en 1979, comenzó en 1984 a realizar campañas al aire libre en La Plata y luego en muchas ciudades del país. Predicaba un mensaje sencillo de salvación, oraba por los enfermos y por los oprimidos por el diablo, y las campañas se hacían en cooperación con las iglesias locales, que recibían a los convertidos. Otros evangelistas y pastores, de distintas denominaciones, vivieron en esos años un tiempo de avivamiento, y la proporción de evangélicos en Argentina se multiplicó.',
        { posturas: {
          titulo: '¿Cómo entender la «guerra espiritual»?',
          a: { n: 'Guerra contra espíritus territoriales', t: 'En la década de 1990, algunos maestros enseñaron que hay demonios que dominan ciudades y regiones, que hay que identificarlos por su nombre mediante un «mapeo espiritual» y atarlos en oración antes de evangelizar, apoyándose en textos como Daniel 10:13.' },
          b: { n: 'Firmes con la armadura de Dios', t: 'El Nuevo Testamento enseña que la lucha es contra fuerzas espirituales (Ef 6:12), pero las armas que nombra son la verdad, la justicia, el evangelio, la fe, la salvación, la Palabra y la oración (Ef 6:14-18). Jesús y los apóstoles echaron fuera demonios de personas, pero nunca mandaron identificar ni atar a los espíritus de una ciudad.' },
          c: 'Este recurso sigue la segunda postura. El creyente tiene autoridad en el nombre de Jesús sobre los demonios (Lc 10:17-19), pero su alegría está en que su nombre está escrito en los cielos (Lc 10:20), y la manera de liberar una ciudad es predicar el evangelio, orar y vivir en santidad.'
        } }
      ],
      pensar: 'Jesús dijo a los setenta que no se alegraran porque los espíritus se les sujetaban, sino porque sus nombres estaban escritos en los cielos (Lc 10:20). ¿Por qué crees que les dio esa advertencia?'
    },
    {
      id: 'andes', n: 'Los Andes y los pueblos originarios', ref: 'Apocalipsis 7:9-10; Hechos 2:11; Hechos 17:26-27', fecha: [1920, 2024],
      visual: [
        img('altiplano.webp', 'En el altiplano junto al lago Titicaca, una pequeña iglesia de adobe con techo de calamina; afuera, una congregación aymara, mujeres con polleras de colores, mantas y sombreros, hombres con chullos y ponchos, canta con las manos levantadas al aire libre; al fondo, el lago y montañas nevadas', 'Una congregación evangélica en el altiplano (recreación; personas anónimas).'),
        mapa({ view: V.andes, lugares: ['h-puno', 'h-la-paz', 'h-lima', 'h-quito', 'h-bogota', 'h-temuco'] }, 'Mapa')
      ],
      texto: [
        'Durante siglos, los pueblos originarios de los Andes recibieron un cristianismo impuesto en una lengua que no era la suya, mezclado muchas veces con sus antiguas creencias. En el siglo XX, el evangelio llegó a muchas de sus comunidades de una manera distinta: en su propio idioma y por medio de creyentes de su mismo pueblo.',
        { h: 'El altiplano' },
        'En el altiplano de Perú y Bolivia, alrededor del lago Titicaca, muchas comunidades aymaras y quechuas se hicieron evangélicas a lo largo del siglo XX, primero por la obra de misiones adventistas, metodistas y de otras iglesias, y después, sobre todo, por iglesias pentecostales nacidas entre los mismos campesinos. En la ciudad de El Alto, junto a La Paz, formada en gran parte por migrantes aymaras, hay cientos de iglesias pentecostales. En la sierra del Ecuador, en la provincia de Chimborazo, la iglesia evangélica quichua creció desde la década de 1960 hasta reunir a una parte importante de los campesinos indígenas, con sus propios pastores y su música.',
        'En el sur de Chile, muchos mapuches se unieron a iglesias pentecostales, en las que encontraron una comunidad cercana, la oración por los enfermos y una fe vivida con el cuerpo, el canto y la emoción. Algunas congregaciones cantan y oran en mapudungun.',
        { h: 'Lo que el evangelio cambió' },
        'En muchas de estas comunidades, la conversión significó dejar el alcohol que se consumía en las fiestas tradicionales, salir de las deudas que esas fiestas provocaban, enviar a los hijos a la escuela y vivir con más paz en las familias. Las mujeres encontraron un lugar en la oración y el servicio. La Biblia traducida a las lenguas originarias y los cantos en esas lenguas dieron dignidad a pueblos que habían sido despreciados.',
        { h: 'Los desafíos' },
        'El crecimiento trajo también desafíos: el riesgo de mezclar el evangelio con prácticas de las antiguas religiones, la falta de formación bíblica de muchos líderes, las divisiones y, a veces, el rechazo de las propias comunidades, que veían a los evangélicos como personas que abandonaban la tradición. Pablo enseñó en Atenas que Dios hizo de una sangre todo el linaje de los hombres, para que busquen a Dios (Hch 17:26-27). El evangelio no borra la lengua ni la cultura de un pueblo, pero transforma todo lo que en ella se opone a Cristo.',
        'Juan vio delante del trono una multitud de «todas naciones y tribus y pueblos y lenguas» (Ap 7:9). Entre ellos habrá aymaras, quechuas, quichuas, mapuches y creyentes de muchos otros pueblos de América que adoran en su propio idioma.'
      ],
      pensar: '¿Conoces a creyentes de pueblos originarios en tu país? ¿Qué puedes aprender de su fe, y cómo puede tu iglesia recibir y honrar a personas de otras culturas?'
    },
    {
      id: 'rasgos', n: 'Rasgos del pentecostalismo latinoamericano', ref: 'Hechos 2:42-47; 1 Corintios 14:26; Hechos 1:14', fecha: [1909, 2024],
      visual: [
        tabla({
          titulo: 'Lo que caracterizó al pentecostalismo latinoamericano',
          cab: ['Rasgo', 'Cómo se vivió'],
          filas: [
            ['Laicos y obreros', 'Cada creyente es testigo; los pastores salen de la congregación'],
            ['Liderazgo nacional', 'Iglesias dirigidas y sostenidas por latinoamericanos desde muy temprano'],
            ['Las mujeres', 'Oración, visitas, evangelización y servicio; en muchas iglesias, también predicación'],
            ['La música', 'Coros e himnos propios, guitarras y ritmos populares'],
            ['La comunidad', 'Iglesias pequeñas de barrio, donde todos se conocen y se ayudan'],
            ['La sanidad y la liberación', 'Oración por los enfermos y por los esclavos del alcohol y otros vicios'],
            ['La santidad', 'Normas estrictas de conducta, a veces también de vestimenta'],
            ['La esperanza', 'La pronta venida de Cristo y la fe en un Dios cercano']
          ]
        }, 'Rasgos')
      ],
      texto: [
        'En 1968, un sociólogo suizo, Cristián Lalive d’Epinay, publicó un estudio sobre los pentecostales chilenos con un título que se hizo famoso: El refugio de las masas. Sostenía que, en una sociedad que se urbanizaba rápidamente, millones de personas que llegaban del campo a la ciudad, pobres y solas, encontraban en las iglesias pentecostales una nueva familia, un lugar de dignidad y una esperanza. Su análisis ayuda a entender el contexto, pero los creyentes ven algo más: la obra del Espíritu en personas sencillas.',
        { h: 'Una iglesia de todos' },
        'El rasgo más notable del pentecostalismo latinoamericano es que fue una iglesia de laicos. No dependía de una clase de clérigos formados en universidades, sino de obreros, empleadas, campesinos y comerciantes que predicaban, oraban por los enfermos, enseñaban a los niños y visitaban a los nuevos. Era lo que Pablo describió en Corinto: «Cuando os reunís, cada uno de vosotros tiene salmo, tiene doctrina, tiene lengua, tiene revelación, tiene interpretación. Hágase todo para edificación» (1 Co 14:26).',
        { h: 'Mujeres, música y comunidad' },
        'Las mujeres fueron muchas veces la columna de las iglesias: las «hermanas» oraban, visitaban, ayunaban, evangelizaban a sus vecinas y sostenían la vida de la congregación, y en muchas iglesias también predicaban. La música fue otra marca: coros sencillos, compuestos por los mismos creyentes, cantados con guitarras y ritmos populares, que todo el mundo podía aprender. Y la iglesia era una comunidad pequeña y cercana, en la que nadie era un desconocido y los hermanos se ayudaban en la enfermedad, la cesantía o la muerte de un familiar, como en Jerusalén, donde «tenían en común todas las cosas» (Hch 2:44).',
        { h: 'Las debilidades' },
        'Esos mismos rasgos tuvieron su lado débil. La falta de formación hizo que muchas iglesias fueran vulnerables a enseñanzas extrañas. El celo por la santidad se volvió a veces un legalismo que juzgaba por la ropa o las costumbres más que por el corazón. El liderazgo fuerte de algunos pastores degeneró en autoritarismo, y las divisiones fueron frecuentes. Reconocerlo no quita valor a lo que Dios hizo, sino que ayuda a las nuevas generaciones a conservar lo bueno y corregir lo que no lo es.',
        { ejercicio: {
          pregunta: '¿Cuál de estos rasgos describe mejor al pentecostalismo latinoamericano en sus comienzos?',
          opciones: [
            { t: 'Un clero formado en universidades y una congregación que escuchaba en silencio.', ok: false, por_que: 'Era casi lo contrario: pocos pastores tenían estudios y la congregación participaba activamente.' },
            { t: 'Una iglesia de laicos, con pastores salidos del pueblo y participación de todos.', ok: true, por_que: 'Obreros, campesinos, mujeres y jóvenes predicaban, oraban y servían; los pastores se formaban en la práctica.' },
            { t: 'Iglesias grandes y ricas sostenidas por misiones extranjeras.', ok: false, por_que: 'Eran iglesias pobres, pequeñas y, en su mayoría, sostenidas por sus propios miembros.' }
          ],
          explicacion: 'Pentecostés hizo de todos los creyentes testigos (Hch 1:8; 8:4). Esa participación de todos es la gran fortaleza del movimiento; su desafío es acompañarla con una sólida enseñanza bíblica (Hch 2:42).'
        } }
      ],
      pensar: '«Cada uno de vosotros tiene salmo, tiene doctrina…» (1 Co 14:26). ¿Qué don o servicio aportas tú a tu congregación? ¿Hay algo que Dios te ha dado y todavía no has puesto al servicio de otros?'
    },
    {
      id: 'cifras', n: 'El crecimiento en cifras', ref: 'Isaías 60:22; Hechos 11:21; Mateo 13:31-33', fecha: [1900, 2026],
      visual: [
        esq('../historia-iglesia-2/img/esquema-latam.svg', 'Gráfico de barras de la religión en América Latina en 1995 y 2024 según Latinobarómetro: católicos 80 % y 54 %; evangélicos 6 % y 19 %; sin religión 4 % y 19 %', 'Religión en América Latina, 1995 y 2024 (Latinobarómetro).', 'América Latina'),
        tabla({
          titulo: 'Algunas cifras',
          cab: ['Dato', 'Cifra', 'Fuente'],
          filas: [
            ['Evangélicos en América Latina', 'Cerca de 19 %', 'Latinobarómetro, 2024'],
            ['Protestantes latinoamericanos que se identifican como pentecostales', 'Mediana de 65 % en 18 países', 'Pew Research Center, 2014'],
            ['Evangélicos en Brasil (10 años o más)', '26,9 %, más de 47 millones', 'IBGE, censo 2022'],
            ['Evangélicos en Chile (15 años o más)', '16,3 %', 'INE, censo 2024'],
            ['Sin religión en Chile (15 años o más)', '25,8 %', 'INE, censo 2024'],
            ['Pentecostales y carismáticos en el mundo', 'Unos 676 millones', 'Status of Global Christianity, 2026']
          ],
          nota: 'Cifras con su fecha; se revisan cuando salen nuevas ediciones (DIRECTRICES §20). Pentecostales, carismáticos y evangélicos se superponen en parte.'
        }, 'Cifras')
      ],
      texto: [
        'Hace cien años, los evangélicos eran menos del uno por ciento en casi todos los países de América Latina, y los pentecostales, apenas unos grupos pequeños en Chile, Brasil, México y algunos otros lugares. Hoy, según Latinobarómetro, cerca de uno de cada cinco latinoamericanos se declara evangélico. Es uno de los cambios religiosos más grandes y rápidos de la historia moderna.',
        { h: 'Un crecimiento pentecostal' },
        'La mayor parte de ese crecimiento corresponde a iglesias pentecostales. En una gran encuesta realizada en 2014 en dieciocho países y en Puerto Rico, el Pew Research Center encontró que, en la mediana de los países, el 65 % de los protestantes se identificaba como pentecostal. En Brasil, el censo de 2022 contó más de 47 millones de evangélicos, en su mayoría pentecostales. En Chile, donde los pentecostales son también la gran mayoría de los evangélicos, el censo de 2024 contó un 16,3 %.',
        { h: 'Lo que las cifras no dicen' },
        'Las cifras deben leerse con cuidado. No dicen cuántos de los que se declaran evangélicos asisten a una iglesia, ni cuántos conocen la Biblia y viven como discípulos. Tampoco muestran que una parte de los nuevos evangélicos pertenece a iglesias con enseñanzas desviadas. Y las mismas encuestas muestran otro fenómeno: crece con fuerza el número de personas sin religión, que en Chile ya son uno de cada cuatro mayores de quince años, y muchas de ellas se criaron en iglesias evangélicas. El crecimiento de una generación no garantiza la fe de la siguiente.',
        { h: 'La semilla de mostaza' },
        'Jesús comparó el reino de Dios con una semilla de mostaza, la más pequeña de todas, que crece hasta hacerse árbol, y con la levadura que leuda toda la masa (Mt 13:31-33). Las dos imágenes van juntas: el reino crece en extensión, pero también transforma desde dentro. El desafío del pentecostalismo latinoamericano en el siglo XXI no es solo seguir creciendo, sino ser levadura: formar discípulos maduros, familias firmes e iglesias que transformen su sociedad con el evangelio.',
        ir('Ver el crecimiento evangélico en Historia de la Iglesia II', H2 + '#america/9')
      ],
      pensar: 'El reino es como la semilla que crece y como la levadura que transforma (Mt 13:31-33). En tu vida y en tu iglesia, ¿se ve más el crecimiento en número o la transformación desde dentro? ¿Qué necesitas para que haya ambas cosas?'
    }
  ];

  // ================== RUTA V. Renovación y nuevas olas ==================
  const olas = [
    {
      id: 'bennett', n: 'El Espíritu en las iglesias históricas (1960)', ref: 'Hechos 10:44-48; Hechos 11:17; Juan 3:8', fecha: [1951, 1970],
      visual: [
        esq('esquema-olas.svg', 'Esquema con tres barras sobre una línea de tiempo de 1900 a 2030: pentecostales clásicos desde 1901, carismáticos desde 1960 y tercera ola desde 1980, cada una con su descripción', 'Las tres grandes corrientes del movimiento.', 'Tres corrientes'),
        mapa({ view: V.eeuu, lugares: ['h-van-nuys', 'h-los-angeles', 'h-pittsburgh'] }, 'Mapa')
      ],
      texto: [
        'Durante medio siglo, la experiencia pentecostal estuvo casi limitada a las iglesias pentecostales. Quien recibía el Espíritu y hablaba en lenguas en una iglesia bautista, metodista o presbiteriana, normalmente tenía que salir de ella. Eso cambió en la década de 1960.',
        { h: 'Van Nuys, 1960' },
        'Dennis Bennett era el rector de la iglesia episcopal de San Marcos, en Van Nuys, California, una congregación grande y de buena posición. En 1959, algunos miembros le contaron que habían recibido el bautismo en el Espíritu y hablaban en lenguas. Bennett buscó la misma experiencia y la recibió. El domingo 3 de abril de 1960 se lo contó a su congregación. Hubo un gran revuelo, Bennett renunció y la noticia apareció en revistas de todo el país. Lo enviaron a una pequeña iglesia de Seattle a punto de cerrar, que en pocos años se llenó y llegó a ser un centro de renovación para muchos.',
        { h: 'Los carismáticos' },
        'Desde entonces, miles de pastores y laicos de iglesias luteranas, presbiterianas, bautistas, metodistas y anglicanas recibieron el bautismo en el Espíritu sin dejar sus iglesias. Se los llamó carismáticos, por los carismas o dones del Espíritu. Ayudó mucho la Fraternidad de Hombres de Negocios del Evangelio Completo, fundada en 1951 por un empresario pentecostal, Demos Shakarian, que organizaba desayunos y cenas en hoteles donde hombres de negocios daban testimonio de su fe y oraban unos por otros.',
        'Los carismáticos tomaron de los pentecostales la experiencia del Espíritu, la oración por los enfermos, los dones y la alabanza espontánea, pero no siempre su doctrina. Muchos no enseñaban que las lenguas fueran la evidencia inicial, ni que el bautismo en el Espíritu fuera necesariamente una experiencia posterior a la conversión. Algunos lo entendían como la «liberación» o el despertar de un Espíritu que ya habían recibido en el bautismo o en la conversión.',
        { h: 'Cómo reaccionaron los pentecostales' },
        'Los pentecostales recibieron la renovación con alegría y con cierta sorpresa. Por un lado, veían que Dios derramaba su Espíritu en iglesias que antes los habían despreciado, y que muchos carismáticos los buscaban para aprender de ellos. Por otro, les preocupaba que algunos carismáticos permanecieran en iglesias con doctrinas liberales o contrarias a la Escritura. La experiencia del Espíritu, recordaban, debe ir unida a la verdad del evangelio.',
        'Cuando Pedro tuvo que explicar a la iglesia de Jerusalén por qué había bautizado a los gentiles de la casa de Cornelio, dijo: «Si Dios, pues, les concedió también el mismo don que a nosotros que hemos creído en el Señor Jesucristo, ¿quién era yo que pudiese estorbar a Dios?» (Hch 11:17). El Espíritu, como el viento, «sopla de donde quiere» (Jn 3:8).'
      ],
      pensar: 'Pedro se sorprendió de que Dios diera su Espíritu a los gentiles. ¿Te ha sorprendido alguna vez ver a Dios obrar en personas o iglesias de las que no lo esperabas? ¿Cómo reaccionaste?'
    },
    {
      id: 'catolica', n: 'La renovación carismática católica (1967)', ref: 'Juan 16:13-14; Gálatas 1:6-9; Efesios 2:8-9; 1 Timoteo 2:5', fecha: [1967, 2026],
      visual: [
        img('renovacion.webp', 'Febrero de 1967, en una casa de retiro de piedra cerca de Pittsburgh: unos veinticinco estudiantes universitarios, hombres y mujeres jóvenes con ropa de fines de los años sesenta, oran juntos en una capilla sencilla, algunos de rodillas y otros sentados en el suelo con las manos levantadas, con biblias abiertas', 'Estudiantes en un retiro de oración en 1967 (recreación; personas anónimas).'),
        tabla({
          titulo: 'Experiencia común, doctrinas distintas',
          cab: ['Tema', 'Fe evangélica', 'Doctrina católica'],
          filas: [
            ['La salvación', 'Por gracia, solo por medio de la fe en Cristo (Ef 2:8-9)', 'Por gracia, recibida y aumentada por los sacramentos y las obras'],
            ['La autoridad', 'La Escritura, regla suprema de fe', 'La Escritura y la Tradición, interpretadas por el magisterio'],
            ['La mediación', 'Un solo mediador, Jesucristo (1 Ti 2:5)', 'Cristo, con la intercesión de María y de los santos'],
            ['La Cena del Señor', 'Memorial y comunión con Cristo', 'Sacrificio de la misa y transubstanciación']
          ],
          nota: 'La renovación carismática no cambió la doctrina oficial de la Iglesia Católica.'
        }, 'Doctrinas')
      ],
      texto: [
        'En febrero de 1967, un grupo de estudiantes y profesores de la Universidad Duquesne, una universidad católica de Pittsburgh, hizo un retiro de fin de semana para orar y estudiar los primeros capítulos de Hechos. Varios de ellos habían leído libros de testimonios pentecostales. Durante el retiro, muchos recibieron una experiencia del Espíritu, con alabanza y lenguas. Poco después ocurrió lo mismo en la Universidad de Notre Dame, en Indiana. Así comenzó la renovación carismática católica.',
        { h: 'Un movimiento mundial' },
        'El movimiento creció con gran rapidez. Se formaron grupos de oración en parroquias de todo el mundo, y algunos obispos y cardenales lo apoyaron. Los papas lo reconocieron, aunque pidieron que se mantuviera unido a la doctrina y a la autoridad de la Iglesia Católica. En América Latina llegó a reunir a millones de personas, y en algunos países fue, en parte, una respuesta católica al crecimiento pentecostal. Desde 1972 hay un diálogo oficial entre representantes católicos y pentecostales.',
        { h: 'Cómo verlo' },
        'Para los evangélicos, este movimiento plantea una pregunta delicada. Muchos carismáticos católicos han vivido un encuentro real con Cristo, leen la Biblia, oran con fervor y aman a Jesús, y no hay razón para negarlo. Al mismo tiempo, la renovación no cambió la doctrina oficial de la Iglesia Católica sobre la salvación, la autoridad de la Tradición y del magisterio, el sacrificio de la misa, la intercesión de María y de los santos ni el papado. Muchos carismáticos católicos, de hecho, se volvieron más devotos de María.',
        'El Espíritu Santo es el «Espíritu de verdad» y glorifica a Cristo (Jn 16:13-14). Una experiencia espiritual, por intensa que sea, no reemplaza la verdad del evangelio: que somos salvos «por gracia… por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras» (Ef 2:8-9), y que hay «un solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5). Por eso los pentecostales, aunque se alegran de que muchos católicos busquen al Espíritu, no consideran que la experiencia carismática borre las diferencias de doctrina.',
        'Esto no se dice para despreciar a nadie. Muchos evangélicos latinoamericanos tienen familiares católicos que aman a Dios. La mejor actitud es la de Priscila y Aquila con Apolos, un hombre ferviente en espíritu que conocía solo el bautismo de Juan: lo tomaron aparte y «le expusieron más exactamente el camino de Dios» (Hch 18:26), con amor y con la Biblia abierta.'
      ],
      pensar: 'Priscila y Aquila no rechazaron a Apolos: lo tomaron aparte y le explicaron con más exactitud el camino de Dios (Hch 18:26). ¿Cómo puedes compartir el evangelio con familiares o amigos de otra tradición con amor y claridad a la vez?'
    },
    {
      id: 'jesus', n: 'El movimiento de Jesús y la nueva música de alabanza', ref: 'Colosenses 3:16; Efesios 5:18-19; Salmo 96:1-3', fecha: [1965, 2010],
      visual: [
        img('playa-bautismo.webp', 'A comienzos de la década de 1970, al atardecer, en una playa de California: decenas de jóvenes con el cabello largo, camisas de colores y jeans, descalzos, esperan en la orilla mientras un pastor de mediana edad, con camisa clara, bautiza a un joven en el mar; otros jóvenes cantan con guitarras sobre la arena', 'Bautismos en el mar en California, a comienzos de los años setenta (recreación; personas anónimas).'),
        cita('Colosenses 3:16', 'La palabra de Cristo more en abundancia en vosotros, enseñándoos y exhortándoos unos a otros en toda sabiduría, cantando con gracia en vuestros corazones al Señor con salmos e himnos y cánticos espirituales.'),
        mapa({ view: V.eeuu, lugares: ['h-costa-mesa', 'h-anaheim', 'h-los-angeles'] }, 'Mapa')
      ],
      texto: [
        'A fines de la década de 1960, miles de jóvenes de California que habían buscado la paz en las drogas, la música y la vida en comunidades hippies se convirtieron a Cristo. Los medios los llamaron «los jesusfreaks», o el movimiento de Jesús. Se bautizaban en el mar, se reunían en casas comunitarias y llevaban la Biblia a todas partes.',
        { h: 'Capilla del Calvario' },
        'Una iglesia pequeña de Costa Mesa, la Capilla del Calvario, pastoreada por Chuck Smith, abrió sus puertas a esos jóvenes, que llegaban descalzos y con el cabello largo. Smith enseñaba la Biblia versículo por versículo y recibía a todos. La iglesia creció hasta reunir a miles, y de ella salieron cientos de iglesias. Aunque no se presentaban como pentecostales, oraban por los enfermos, aceptaban los dones del Espíritu y practicaban una alabanza libre y sencilla.',
        { h: 'Una nueva música' },
        'Los jóvenes convertidos no cantaban los himnos tradicionales, sino canciones nuevas, con guitarras y con la música que conocían. En 1971 la Capilla del Calvario fundó una editorial de música, Maranatha!, que difundió esos cantos en todo el mundo. Así nació la música de alabanza contemporánea: coros breves, muchas veces tomados directamente de la Biblia, cantados de pie, con las manos levantadas. Desde Estados Unidos, Inglaterra y Australia se extendió a todas las iglesias, y en América Latina surgieron compositores y cantantes que escribieron en español para el pueblo latino.',
        'La nueva música unió a pentecostales, carismáticos y evangélicos en un mismo estilo de culto. Hoy, en muchas iglesias del mundo, se cantan los mismos cantos los domingos.',
        { h: 'Cantar la verdad' },
        'La música es un regalo de Dios para alabarle y para enseñar. Pablo pide: «La palabra de Cristo more en abundancia en vosotros, enseñándoos y exhortándoos unos a otros en toda sabiduría, cantando con gracia en vuestros corazones al Señor con salmos e himnos y cánticos espirituales» (Col 3:16). Por eso los cantos no son solo un momento emotivo del culto: enseñan doctrina. Lo que una iglesia canta cada semana termina siendo lo que cree. Un canto repetido muchas veces que dice poco de Dios, o que habla más de lo que sentimos que de lo que él es y ha hecho, no alimenta la fe. Las iglesias pentecostales, que siempre han cantado mucho, tienen la responsabilidad de cantar la verdad.'
      ],
      pensar: 'Elige un canto que cantas a menudo en tu iglesia. ¿Qué enseña sobre Dios? ¿Está de acuerdo con la Escritura? ¿Te ayuda a conocer y amar más a Cristo?'
    },
    {
      id: 'tercera-ola', n: 'La «tercera ola» (Wimber)', ref: 'Marcos 16:15-18; 1 Corintios 2:4-5; Romanos 15:18-19', fecha: [1977, 1995],
      visual: [
        tabla({
          titulo: 'Tres maneras de entender el bautismo en el Espíritu',
          cab: ['Corriente', '¿Cuándo?', '¿Con lenguas?'],
          filas: [
            ['Pentecostales clásicos', 'Experiencia distinta de la conversión, posterior a ella', 'Sí, como evidencia inicial'],
            ['Muchos carismáticos', 'Despertar del Espíritu ya recibido', 'Frecuentes, pero no obligatorias'],
            ['Tercera ola', 'En la conversión; después hay nuevas llenuras', 'Un don entre otros']
          ]
        }, 'Comparación'),
        cita('1 Corintios 2:4-5', 'y ni mi palabra ni mi predicación fue con palabras persuasivas de humana sabiduría, sino con demostración del Espíritu y de poder, para que vuestra fe no esté fundada en la sabiduría de los hombres, sino en el poder de Dios.')
      ],
      texto: [
        'En la década de 1980 apareció una tercera corriente, distinta de los pentecostales clásicos y de los carismáticos. La formaron evangélicos que no querían llamarse pentecostales ni carismáticos, pero que creían que Dios sigue sanando, liberando y obrando señales, y que la iglesia debe esperarlas como parte normal de la evangelización.',
        { h: 'John Wimber' },
        'John Wimber era un músico profesional que se convirtió en 1963 y fue pastor en una iglesia cuáquera. En 1977 comenzó un grupo en su casa que se convirtió en una iglesia en Anaheim, California, y que en 1982 se unió a una red de iglesias llamada la Viña. Wimber enseñaba que la predicación del evangelio debe ir acompañada de «poder»: oración por los enfermos, liberación y palabras de conocimiento, como en el ministerio de Jesús y los apóstoles. Lo llamaba evangelización con poder.',
        { h: 'Un curso en un seminario' },
        'En 1982, el profesor de misiones Pedro Wagner invitó a Wimber a dictar un curso sobre señales, prodigios y crecimiento de la iglesia en el Seminario Fuller, uno de los seminarios evangélicos más importantes de Estados Unidos. En las clases se oraba por los enfermos, y el curso se hizo famoso y polémico. Wagner llamó a este movimiento la «tercera ola» del Espíritu en el siglo XX: después de los pentecostales y los carismáticos, ahora llegaba a los evangélicos.',
        { h: 'En qué se diferencia' },
        'La tercera ola no enseña un bautismo en el Espíritu posterior a la conversión: sostiene que todo creyente lo recibe al convertirse, y que después hay muchas nuevas llenuras. Tampoco considera las lenguas como una evidencia necesaria. Pone el énfasis en las señales como apoyo de la evangelización y en un estilo de culto íntimo y sencillo, con mucha música. La Viña compuso muchos de los cantos de alabanza más difundidos en esos años.',
        'La tercera ola recordó a muchos evangélicos que Pablo no predicaba «con palabras persuasivas de humana sabiduría, sino con demostración del Espíritu y de poder» (1 Co 2:4). Pero también abrió la puerta a prácticas discutidas, como las manifestaciones de Toronto (ruta VII), y algunos de sus maestros terminaron en la «nueva reforma apostólica».',
        { ejercicio: {
          pregunta: '¿En qué se diferencia la «tercera ola» de los pentecostales clásicos?',
          opciones: [
            { t: 'En que niega que Dios siga sanando y haciendo milagros hoy.', ok: false, por_que: 'Es al revés: la tercera ola insiste en que Dios sigue obrando señales.' },
            { t: 'En que enseña que el bautismo en el Espíritu ocurre en la conversión y no exige las lenguas como evidencia.', ok: true, por_que: 'Esa es la diferencia principal: acepta los dones, pero no la doctrina de la subsecuencia ni la evidencia inicial.' },
            { t: 'En que solo acepta a creyentes de la Iglesia Católica.', ok: false, por_que: 'La tercera ola surgió entre evangélicos, sobre todo en iglesias que no eran pentecostales.' }
          ],
          explicacion: 'Las tres corrientes creen que los dones del Espíritu siguen vigentes; difieren en cómo entienden el bautismo en el Espíritu y las lenguas. La ruta VI explica la postura pentecostal clásica.'
        } }
      ],
      pensar: 'Pablo predicaba «con demostración del Espíritu y de poder, para que vuestra fe no esté fundada en la sabiduría de los hombres, sino en el poder de Dios» (1 Co 2:4-5). ¿En qué se apoya tu fe: en argumentos, en experiencias, o en Dios mismo que se revela en su Palabra y obra con poder?'
    },
    {
      id: 'neopentecostales', n: 'El neopentecostalismo', ref: 'Hechos 2:42; 1 Pedro 5:2-3; 2 Timoteo 4:2-4', fecha: [1975, 2026],
      visual: [
        tabla({
          titulo: 'Rasgos frecuentes de las iglesias neopentecostales',
          cab: ['Rasgo', 'Lo que puede ser bueno', 'Lo que puede desviarse'],
          filas: [
            ['Grandes auditorios y medios', 'Llegar a muchos con el evangelio', 'Espectáculo en lugar de culto; la fama del líder'],
            ['Alabanza moderna', 'Un culto vivo, con la música de hoy', 'Más emoción que contenido'],
            ['Células o grupos pequeños', 'Discipulado y comunión cercana', 'Control excesivo de la vida de los miembros'],
            ['Títulos de apóstol y profeta', 'Reconocer dones de liderazgo y de misión', 'Autoridad sin rendir cuentas (ruta VII)'],
            ['Liberación y prosperidad', 'Fe en un Dios que libera y provee', 'Prosperidad como negocio (ruta VII)']
          ],
          nota: 'No todas las iglesias llamadas neopentecostales tienen los mismos rasgos; cada una debe examinarse por lo que enseña y hace.'
        }, 'Rasgos')
      ],
      texto: [
        'En América Latina se llama neopentecostales, o a veces iglesias independientes o de la nueva generación, a muchas iglesias que surgieron desde la década de 1970 con un estilo distinto al de los pentecostales clásicos. No forman una denominación ni comparten una sola doctrina. Algunas son congregaciones sanas y fieles a la Escritura; otras siguen enseñanzas desviadas. El término se usa para describir un estilo más que un grupo definido.',
        { h: 'Un estilo nuevo' },
        'Estas iglesias suelen reunirse en grandes auditorios, cines o galpones, con escenarios, pantallas, bandas de alabanza y transmisiones por internet. Su lenguaje y su vestimenta son informales; muchas dejaron las normas estrictas de conducta de los pentecostales clásicos. Atraen a personas de clase media y a profesionales, además de los sectores populares. Muchas se organizan en células o grupos pequeños que se reúnen en las casas; uno de los modelos más difundidos, el de los grupos de doce, nació en Bogotá. Sus pastores principales suelen tener mucha visibilidad pública y algunos usan títulos como apóstol o profeta.',
        { h: 'Lo que han aportado' },
        'Muchas de estas iglesias han alcanzado con el evangelio a personas que nunca habrían entrado a un templo tradicional. Han renovado la música, han usado con creatividad los medios y han formado a miles de líderes jóvenes. Muchas sirven a los pobres, a los presos y a los adictos, y sus grupos pequeños han ayudado a que los creyentes se conozcan y se cuiden.',
        { h: 'Los riesgos' },
        'Pero algunos rasgos de este estilo también son terreno fértil para los desvíos. Cuando la iglesia depende del carisma de un solo líder, sin cuerpo de ancianos ni rendición de cuentas, el autoritarismo y los abusos se vuelven más probables. Cuando el culto se convierte en espectáculo, la predicación puede reemplazar la exposición de la Biblia por mensajes motivacionales. Y en muchas de estas iglesias se difundieron el evangelio de la prosperidad y la nueva reforma apostólica, que se estudian en la ruta VII.',
        'Pablo advirtió a Timoteo que vendría tiempo en que la gente, «teniendo comezón de oír, se amontonarán maestros conforme a sus propias concupiscencias» (2 Ti 4:3). El criterio para evaluar una iglesia no es su tamaño, su estilo ni su música, sino lo que tenía la primera iglesia: perseverar «en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones» (Hch 2:42).'
      ],
      pensar: 'El estilo de una iglesia puede cambiar con los tiempos, pero la doctrina de los apóstoles no. Si tuvieras que evaluar tu iglesia con Hechos 2:42, ¿en qué estaría fuerte y en qué necesitaría crecer?'
    },
    {
      id: 'asia-hoy', n: 'Corea, China y las megaiglesias', ref: 'Hechos 1:14; Hechos 12:5; Hebreos 13:3', fecha: [1958, 2026],
      visual: [
        img('../historia-iglesia-2/img/iglesia-casa.webp', 'Una iglesia en una casa bajo un régimen que persigue a los creyentes: un pequeño grupo de hombres y mujeres de distintas edades se reúne de noche en una habitación sencilla, con las cortinas cerradas, para leer la Biblia y orar en voz baja', 'Una iglesia en una casa (recreación; personas anónimas).'),
        mapa({ view: V.asia, lugares: ['h-seul', 'h-henan', 'h-pyongyang', 'h-hong-kong', 'h-calcuta'] }, 'Mapa')
      ],
      texto: [
        'En Asia, el movimiento pentecostal y carismático creció de manera impresionante en la segunda mitad del siglo XX, con rasgos muy distintos según cada país.',
        { h: 'Corea: la iglesia más grande del mundo' },
        'En 1958, en un barrio pobre de Seúl, un joven pastor llamado David Yonggi Cho, que se había convertido después de ser sanado de tuberculosis, comenzó una iglesia en una carpa junto con una mujer de oración, Choi Ja-shil. Su congregación, afiliada a las Asambleas de Dios, creció hasta convertirse en la Iglesia del Evangelio Completo de Yoido, considerada durante décadas la congregación más grande del mundo, con cientos de miles de miembros. Su crecimiento se apoyó en dos cosas: la oración, con vigilias, ayunos y un monte de oración al que acuden miles, y los grupos de células en las casas, dirigidos en su mayoría por mujeres. Muchas iglesias de América Latina imitaron ese modelo.',
        'Cho también enseñó ideas discutidas, como una «cuarta dimensión» en la que la fe visualiza y crea lo que pide, que muchos consideraron cercanas a la confesión positiva. Y en 2014 un tribunal de Seúl lo condenó, con pena remitida, por un delito financiero en el manejo de fondos de la iglesia. Su historia muestra a la vez lo que la oración puede hacer y los peligros del poder y del dinero en las grandes iglesias.',
        { h: 'China: la iglesia en las casas' },
        'Cuando el gobierno comunista expulsó a los misioneros en 1949 y 1950, había en China menos de un millón de protestantes. Durante la Revolución Cultural, entre 1966 y 1976, se cerraron todas las iglesias. Pero en las casas, en secreto, los creyentes siguieron orando. Desde la década de 1980 se supo que la iglesia había crecido enormemente, sobre todo en las zonas rurales, en provincias como Henan. Muchas de esas iglesias en las casas son de estilo pentecostal o carismático: oran por los enfermos, esperan milagros y viven una fe sencilla y valiente. Hoy los cristianos de China son decenas de millones, aunque las cifras son difíciles de medir y la persecución ha aumentado en los últimos años.',
        { h: 'El resto de Asia' },
        'En Indonesia, Filipinas, India, Singapur, Malasia, Nepal y otros países también hay millones de pentecostales y carismáticos. En India, muchos creyentes provienen de las castas más bajas y de los pueblos tribales, y sufren persecución. En todas partes, como en la iglesia de Jerusalén cuando Pedro estaba preso, la oración perseverante ha sido el motor: «la iglesia hacía sin cesar oración a Dios por él» (Hch 12:5).'
      ],
      pensar: 'La iglesia de Corea creció con oración y grupos pequeños, y la de China sobrevivió orando en las casas. ¿Qué lugar tiene la oración perseverante en tu vida? ¿Oras por los creyentes perseguidos (He 13:3)?'
    },
    {
      id: 'africa', n: 'África: el centro de gravedad se mueve al sur', ref: 'Hechos 8:26-39; Salmo 68:31; Apocalipsis 7:9-10', fecha: [1908, 2026],
      visual: [
        img('africa-culto.webp', 'Un domingo por la mañana en una ciudad de África occidental: una gran congregación africana con ropa de colores vivos, mujeres con pañuelos estampados y hombres con camisas largas, alaba al aire libre bajo un toldo, con tambores y un coro; un pastor africano con traje predica con la Biblia en la mano', 'Un culto pentecostal en África occidental (recreación; personas anónimas).'),
        esq('../historia-iglesia-2/img/esquema-pentecostales.svg', 'Gráfico de barras con el número de pentecostales y carismáticos en el mundo: unos 981 mil en 1900, 57,6 millones en 1970, 442,6 millones en 2000 y 676,1 millones en 2026', 'Pentecostales y carismáticos en el mundo (Status of Global Christianity 2026).', 'Crecimiento mundial'),
        mapa({ view: V.africa, lugares: ['h-johannesburgo', 'h-lagos', 'h-accra', 'h-nairobi', 'h-liberia'] }, 'Mapa')
      ],
      texto: [
        'Si en 1900 el cristianismo era una religión de europeos y norteamericanos, en el siglo XXI es, sobre todo, una fe del sur del mundo. África es hoy el continente con más cristianos, y una parte muy grande de ellos pertenece a iglesias pentecostales, carismáticas o independientes de estilo pentecostal.',
        { h: 'Los comienzos' },
        'En Sudáfrica, la Misión de la Fe Apostólica, fundada en 1908, creció con rapidez entre africanos y blancos, aunque las leyes de segregación terminaron por dividir sus congregaciones. En la década de 1930, un misionero irlandés, James McKeown, comenzó una obra en la Costa de Oro, hoy Ghana, que llegó a ser la Iglesia de Pentecostés, una de las mayores del país, dirigida por ghaneses y con misioneros en muchas naciones.',
        { h: 'Las iglesias africanas' },
        'Al mismo tiempo nacieron muchas iglesias independientes, fundadas por profetas africanos que predicaban, oraban por los enfermos y echaban fuera demonios. Algunas permanecieron fieles al evangelio; otras mezclaron la fe cristiana con prácticas de las religiones tradicionales, como el culto a los antepasados, o veneraron a su fundador como un mediador. En la segunda mitad del siglo XX, sobre todo desde la década de 1970, crecieron iglesias pentecostales y carismáticas en las grandes ciudades: en Nigeria, la Iglesia Cristiana Redimida de Dios, nacida en 1952, llegó a reunir multitudes de cientos de miles en sus encuentros de oración; en Kenia, Uganda, Zimbabue y muchos otros países se multiplicaron las iglesias.',
        { h: 'Un continente que envía' },
        'Hoy hay misioneros africanos en Europa, en Asia y en América. En Londres, algunas de las congregaciones más grandes son de inmigrantes africanos, y en muchas ciudades europeas donde las iglesias tradicionales se vacían, los pentecostales africanos llenan sus salones. El evangelio que los misioneros llevaron a África vuelve ahora a sus antiguos lugares de origen.',
        'África enfrenta también los desafíos que se estudian en la ruta VII: la teología de la prosperidad, los falsos profetas que se enriquecen con la pobreza de su gente y la mezcla con antiguas creencias. Pero la fe de millones de creyentes africanos, muchas veces en medio de la pobreza, la guerra y la persecución, es uno de los grandes testimonios de nuestro tiempo. El primer africano convertido que menciona el libro de los Hechos, el funcionario etíope, «siguió gozoso su camino» después de ser bautizado (Hch 8:39).',
        { ejercicio: {
          pregunta: '¿Dónde vive hoy la mayor parte de los pentecostales y carismáticos del mundo?',
          opciones: [
            { t: 'En Estados Unidos, donde nació el movimiento.', ok: false, por_que: 'Aunque Azusa estaba en Estados Unidos, hoy la gran mayoría vive en otros continentes.' },
            { t: 'En el sur del mundo: África, América Latina y Asia.', ok: true, por_que: 'El crecimiento del siglo XX ocurrió sobre todo en esas regiones; África es hoy el continente con más cristianos.' },
            { t: 'En Europa, donde están las iglesias más antiguas.', ok: false, por_que: 'Europa tiene relativamente pocos pentecostales; muchos de ellos son inmigrantes africanos o latinoamericanos.' }
          ],
          explicacion: 'De menos de un millón en 1900, los pentecostales y carismáticos pasaron a unos 676 millones en 2026, y su centro está en el sur del mundo. El viento del Espíritu sopla en todas las direcciones.'
        } }
      ],
      pensar: 'El evangelio que salió de Europa vuelve hoy a ella por medio de creyentes africanos y latinoamericanos. ¿Qué responsabilidad tiene la iglesia latinoamericana en la misión mundial?'
    }
  ];

  // ================== RUTA VI. Lo que enseñan los pentecostales ==================
  const doctrina = [
    {
      id: 'evangelio-completo', n: 'El evangelio completo: Cristo salva, sana, bautiza y viene', ref: 'Hebreos 13:8; Lucas 4:18-19; Hechos 10:38', fecha: [1887, 2026],
      visual: [
        esq('esquema-evangelio.svg', 'Esquema que compara el evangelio cuádruple del movimiento de santidad (Cristo Salvador, Santificador, Sanador y Rey que viene) con el de los pentecostales (Cristo Salvador, Bautizador en el Espíritu, Sanador y Rey que viene), con los textos bíblicos de cada uno', 'Del «evangelio cuádruple» de la santidad al «evangelio completo» pentecostal.'),
        cita('Hebreos 13:8', 'Jesucristo es el mismo ayer, y hoy, y por los siglos.')
      ],
      texto: [
        'Si se pregunta a un pentecostal qué es lo que distingue a su fe, es probable que hable del Espíritu Santo. Pero los primeros pentecostales resumían su mensaje de otra manera: hablaban del «evangelio completo», y en el centro de ese evangelio no estaba el Espíritu, sino Cristo.',
        { h: 'Cuatro o cinco afirmaciones sobre Cristo' },
        'El movimiento de santidad había predicado un evangelio cuádruple: Cristo Salvador, Santificador, Sanador y Rey que viene. Los pentecostales añadieron a Cristo como el que bautiza en el Espíritu Santo, porque Juan el Bautista lo había anunciado así: «él os bautizará en Espíritu Santo y fuego» (Mt 3:11). Los que seguían la doctrina de las tres obras hablaban de cinco aspectos; los de la obra consumada, como las Asambleas de Dios y la Iglesia Cuadrangular, de cuatro: Cristo salva, sana, bautiza en el Espíritu y viene otra vez.',
        { h: 'Cristo salva' },
        'Lo primero es la salvación. Los pentecostales comparten con todos los evangélicos la convicción de que el ser humano es salvo solo por la gracia de Dios, mediante la fe en Jesucristo, que murió por nuestros pecados y resucitó. Nadie recibe el Espíritu ni sus dones como premio a su esfuerzo: todo es gracia.',
        { h: 'Cristo bautiza en el Espíritu' },
        'Cristo, exaltado a la diestra del Padre, «ha derramado esto que vosotros veis y oís» (Hch 2:33). El bautismo en el Espíritu no es una experiencia centrada en el creyente, sino un don de Cristo para que su iglesia sea su testigo.',
        { h: 'Cristo sana' },
        'Jesús anduvo «haciendo bienes y sanando a todos los oprimidos por el diablo» (Hch 10:38). Los pentecostales creen que la sanidad es parte de la obra redentora de Cristo y que la iglesia debe orar por los enfermos con fe. No desprecian la medicina, que también es un regalo de Dios, ni enseñan que la falta de sanidad sea siempre falta de fe: Pablo dejó a Trófimo enfermo en Mileto (2 Ti 4:20) y aconsejó a Timoteo un remedio para su estómago (1 Ti 5:23).',
        { h: 'Cristo viene' },
        'Por último, el evangelio completo anuncia que Cristo volverá. Los pentecostales clásicos esperan la venida de Cristo por su iglesia, antes de la gran tribulación, y después su reino sobre la tierra. Esa esperanza dio urgencia a la evangelización y a las misiones.',
        'Todo el evangelio completo se resume en una frase de Hebreos que muchos pentecostales escribían en las paredes de sus templos: «Jesucristo es el mismo ayer, y hoy, y por los siglos» (He 13:8). El mismo que salvó, sanó y llenó del Espíritu a sus discípulos lo hace hoy. Este resumen es solo una puerta de entrada; la doctrina del Espíritu Santo se estudiará en su propio recurso (en preparación).'
      ],
      pensar: 'El centro del evangelio completo no es una experiencia, sino Cristo. ¿Cuál de estas cuatro afirmaciones sobre Cristo necesitas hoy creer y vivir con más fuerza?'
    },
    {
      id: 'bautismo', n: 'El bautismo en el Espíritu Santo', ref: 'Hechos 1:4-8; Hechos 8:14-17; Lucas 11:13; Romanos 8:9; 1 Corintios 12:13', fecha: [1901, 2026],
      visual: [
        cita('Hechos 1:4-8', 'Y estando juntos, les mandó que no se fueran de Jerusalén, sino que esperasen la promesa del Padre, la cual, les dijo, oísteis de mí. Porque Juan ciertamente bautizó con agua, mas vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días. Entonces los que se habían reunido le preguntaron, diciendo: Señor, ¿restaurarás el reino a Israel en este tiempo? Y les dijo: No os toca a vosotros saber los tiempos o las sazones, que el Padre puso en su sola potestad; pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.'),
        tabla({
          titulo: 'Lo que es y lo que no es',
          cab: ['El bautismo en el Espíritu…', 'No es…'],
          filas: [
            ['Un don de Cristo para todos los creyentes que lo piden (Lc 11:13)', 'Un premio para los más santos o los más maduros'],
            ['Poder para ser testigos (Hch 1:8)', 'Una experiencia para sentirse superior a otros'],
            ['Una llenura que debe renovarse (Hch 4:31; Ef 5:18)', 'Una experiencia única que resuelve todo para siempre'],
            ['Una experiencia que puede ser distinta de la conversión', 'La condición para ser salvo o para tener el Espíritu (Ro 8:9)']
          ]
        }, 'Lo que es')
      ],
      texto: [
        'La doctrina más característica del pentecostalismo clásico es que el bautismo en el Espíritu Santo es una experiencia que puede ser distinta de la conversión y posterior a ella, cuyo propósito principal es dar poder para el testimonio y el servicio. Los teólogos la llaman la doctrina de la subsecuencia.',
        { h: 'Los argumentos' },
        'Los pentecostales se apoyan en varios hechos de la Escritura. Los discípulos ya creían en Jesús y habían recibido su soplo (Jn 20:22), pero él les mandó esperar en Jerusalén «la promesa del Padre» y les dijo: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos» (Hch 1:4, 8). Los samaritanos creyeron y fueron bautizados, pero recibieron el Espíritu días después, cuando Pedro y Juan oraron por ellos (Hch 8:14-17). Los discípulos de Éfeso recibieron el Espíritu después de creer y bautizarse (Hch 19:5-6). Jesús mismo enseñó a pedir el Espíritu: «¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?» (Lc 11:13).',
        { posturas: {
          titulo: '¿Es el bautismo en el Espíritu una experiencia distinta de la conversión?',
          a: { n: 'Es la conversión', t: 'Muchos evangélicos enseñan que todo creyente es bautizado en el Espíritu al convertirse, porque «por un solo Espíritu fuimos todos bautizados en un cuerpo» (1 Co 12:13), y que los relatos de Samaria y Éfeso fueron momentos únicos de la expansión del evangelio. Después de la conversión puede haber muchas llenuras del Espíritu, pero no un segundo bautismo.' },
          b: { n: 'Es una experiencia distinta, para recibir poder', t: 'Todo creyente tiene el Espíritu desde que se convierte (Ro 8:9). Pero Hechos muestra también una experiencia de poder, que puede ser posterior, a la que Lucas llama ser bautizados o llenos del Espíritu (Hch 1:5; 2:4), cuyo propósito es el testimonio (Hch 1:8). Pablo, en 1 Corintios 12:13, habla de cómo el Espíritu nos une al cuerpo de Cristo; Lucas, del poder para la misión.' },
          c: 'Este recurso sigue la segunda postura, la de los pentecostales clásicos. Al mismo tiempo afirma que no hay dos clases de cristianos: quien todavía no ha recibido esta experiencia no es menos hijo de Dios, y quien la ha recibido no es por eso más maduro ni más santo. La llenura del Espíritu se renueva (Hch 4:31) y se manifiesta en el fruto, en el amor y en el testimonio.'
        } },
        { h: 'Cómo se recibe' },
        'Los pentecostales enseñan que el bautismo en el Espíritu se recibe por fe, como un regalo, no como resultado de una técnica. Los que lo buscan lo hacen orando, adorando, a veces con la imposición de manos de otros creyentes, con un corazón arrepentido y dispuesto a obedecer. No hace falta repetir fórmulas, gritar ni forzar nada: el Espíritu da que hablen (Hch 2:4).',
        { ejercicio: {
          pregunta: 'Según la postura pentecostal clásica, ¿qué tiene un creyente que todavía no ha recibido el bautismo en el Espíritu?',
          opciones: [
            { t: 'Nada del Espíritu Santo, porque solo lo reciben los que hablan en lenguas.', ok: false, por_que: 'Todo creyente tiene el Espíritu desde su conversión: «si alguno no tiene el Espíritu de Cristo, no es de él» (Ro 8:9).' },
            { t: 'El Espíritu Santo, que mora en él desde su conversión, y la promesa de una experiencia de poder para el testimonio.', ok: true, por_que: 'La subsecuencia no niega que el creyente tenga el Espíritu; afirma que hay una experiencia de poder que puede ser posterior.' },
            { t: 'Una salvación incompleta, que se completa con las lenguas.', ok: false, por_que: 'La salvación es completa por la fe en Cristo; el bautismo en el Espíritu es para el servicio, no para la salvación.' }
          ],
          explicacion: 'Distinguir el nuevo nacimiento del bautismo en el Espíritu no divide a los cristianos en dos clases: recuerda que Dios tiene más para cada creyente y lo invita a pedirlo (Lc 11:13).'
        } }
      ],
      pensar: 'Jesús dijo que el Padre dará el Espíritu Santo «a los que se lo pidan» (Lc 11:13). ¿Lo has pedido con fe? ¿Para qué quieres ser lleno del Espíritu?'
    },
    {
      id: 'dones', n: 'Los dones del Espíritu hoy', ref: '1 Corintios 12:4-11; 1 Corintios 13:8-12; 1 Corintios 14:1; Efesios 4:11-13', fecha: [1901, 2026],
      visual: [
        tabla({
          titulo: 'Los dones de 1 Corintios 12:8-10',
          cab: ['Grupo', 'Dones'],
          filas: [
            ['Dones de palabra o de conocimiento', 'Palabra de sabiduría, palabra de ciencia, discernimiento de espíritus'],
            ['Dones de poder', 'Fe, dones de sanidades, hacer milagros'],
            ['Dones de expresión', 'Profecía, diversos géneros de lenguas, interpretación de lenguas']
          ],
          nota: 'La agrupación es una forma tradicional de ordenarlos, no la hace Pablo. Otros dones aparecen en Romanos 12:6-8, 1 Corintios 12:28 y Efesios 4:11.'
        }, 'Los dones'),
        cita('1 Corintios 13:8-12', 'El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará. Porque en parte conocemos, y en parte profetizamos; mas cuando venga lo perfecto, entonces lo que es en parte se acabará. Cuando yo era niño, hablaba como niño, pensaba como niño, juzgaba como niño; mas cuando ya fui hombre, dejé lo que era de niño. Ahora vemos por espejo, oscuramente; mas entonces veremos cara a cara. Ahora conozco en parte; pero entonces conoceré como fui conocido.')
      ],
      texto: [
        'Los pentecostales creen que todos los dones del Espíritu que describe el Nuevo Testamento siguen vigentes y que la iglesia debe desearlos y practicarlos. Pablo lo pide expresamente: «Seguid el amor; y procurad los dones espirituales, pero sobre todo que profeticéis» (1 Co 14:1). La estación sobre Azusa de Historia de la Iglesia II presenta este debate en breve; aquí se estudia con más detalle.',
        { h: 'El cesacionismo' },
        'Muchos cristianos evangélicos sostienen que los dones de señales, como las lenguas, la profecía, las sanidades y los milagros, cesaron cuando murieron los apóstoles y se completó el Nuevo Testamento. Esta postura se llama cesacionismo. Sus argumentos principales son: que esos dones fueron «señales de apóstol» (2 Co 12:12) para confirmar la revelación; que la iglesia se edificó sobre el fundamento de los apóstoles y profetas, que se pone una sola vez (Ef 2:20); que «lo perfecto» de 1 Corintios 13:10 sería el Nuevo Testamento completo, y que la historia de la iglesia muestra que esos dones casi desaparecieron. El teólogo Benjamín Warfield, en 1918, dio a esta postura su forma clásica.',
        { h: 'El continuismo' },
        'Los pentecostales, los carismáticos y muchos otros evangélicos responden que el Nuevo Testamento nunca dice que los dones cesarían antes de la venida de Cristo. Pablo dice que los corintios no carecían de ningún don «esperando la manifestación de nuestro Señor Jesucristo» (1 Co 1:7). «Lo perfecto» es el momento en que veremos «cara a cara» y conoceremos como fuimos conocidos (1 Co 13:12), lo que solo ocurrirá cuando Cristo vuelva. La promesa de Pentecostés es «para todos los que están lejos» (Hch 2:39), y los dones se dan para edificar a la iglesia, que todavía necesita ser edificada.',
        { posturas: {
          titulo: '¿Cesaron los dones del Espíritu?',
          a: { n: 'Cesacionismo', t: 'Los dones de señales confirmaron la revelación apostólica y cesaron al completarse el Nuevo Testamento. Hoy Dios sigue obrando y respondiendo la oración, pero no da a nadie el don de lenguas, de profecía o de milagros como en el tiempo de los apóstoles.' },
          b: { n: 'Continuismo', t: 'Los dones siguen vigentes hasta la venida de Cristo (1 Co 1:7; 13:10-12) y se dan para edificar a la iglesia. La profecía de hoy no añade nada a la Escritura: edifica, exhorta y consuela (1 Co 14:3), y se juzga por la Palabra (1 Co 14:29).' },
          c: 'Este recurso sigue la segunda postura. Distingue entre la revelación que fundó la iglesia, que está completa en la Escritura, y los dones que la edifican hoy, que deben ejercerse con amor (1 Co 13), con orden (1 Co 14:40) y bajo la autoridad de la Palabra.'
        } },
        { h: 'Dones para servir' },
        'Pablo enseña que el Espíritu reparte los dones «como él quiere» (1 Co 12:11) y que se dan «para provecho» de todos (1 Co 12:7), no para lucirse. En medio de sus dos capítulos sobre los dones puso el capítulo del amor: sin amor, hablar lenguas es ruido y tener profecía no es nada (1 Co 13:1-2). Los dones son herramientas para servir; el fruto del Espíritu muestra el carácter. Una iglesia sana necesita ambas cosas.',
        ir('Leer la estación de Historia de la Iglesia II sobre Azusa y los dones', H2 + '#siglo20/1')
      ],
      pensar: 'Pablo dice «procurad los dones espirituales» y, en el mismo texto, «seguid el amor» (1 Co 14:1). ¿Buscas los dones para servir a otros? ¿Qué don crees que Dios te ha dado o quiere darte para edificar a tu iglesia?'
    },
    {
      id: 'santidad-vida', n: 'Santidad y vida en el Espíritu', ref: 'Gálatas 5:16-25; Romanos 8:13-14; Hebreos 12:14; Romanos 14:17', fecha: [1906, 2026],
      visual: [
        cita('Gálatas 5:22-25', 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley. Pero los que son de Cristo han crucificado la carne con sus pasiones y deseos. Si vivimos por el Espíritu, andemos también por el Espíritu.'),
        tabla({
          titulo: 'Dos peligros opuestos',
          cab: ['Legalismo', 'Mundanalidad'],
          filas: [
            ['Medir la santidad por la ropa, el peinado o las costumbres', 'Pensar que la gracia permite vivir como el mundo'],
            ['Juzgar a los hermanos por normas que la Biblia no da', 'Dejar de lado los mandamientos claros de la Biblia'],
            ['Orgullo espiritual: sentirse más santo que otros', 'Indiferencia: no importa cómo vivo si «tengo el Espíritu»'],
            ['Respuesta: «el reino de Dios no es comida ni bebida» (Ro 14:17)', 'Respuesta: «Andad en el Espíritu, y no satisfagáis los deseos de la carne» (Gá 5:16)']
          ]
        }, 'Dos peligros')
      ],
      texto: [
        'Los pentecostales heredaron del movimiento de santidad una fuerte convicción: el Espíritu Santo es santo, y quien es lleno de él debe vivir en santidad. Desde el principio, sus iglesias exigieron a los convertidos dejar el alcohol, el tabaco, el juego, la inmoralidad sexual, la violencia y las deudas. Para muchas familias pobres, eso significó un cambio radical: el sueldo llegaba a la casa en lugar de quedarse en la cantina, el padre dejaba de golpear a su esposa y los hijos iban a la escuela.',
        { h: 'Las normas y el legalismo' },
        'Con el tiempo, muchas iglesias pentecostales añadieron a esas exigencias bíblicas otras normas de conducta y de apariencia: no ir al cine ni al fútbol, no tener televisión, que las mujeres no se cortaran el cabello ni usaran pantalones o maquillaje, que los hombres usaran siempre traje en el culto. Esas normas nacían de un deseo sincero de separarse del mundo. Pero en algunos casos se volvieron un legalismo que medía la santidad por lo exterior, juzgaba a los hermanos y hacía olvidar que la santidad nace del corazón. Jesús reprendió a los fariseos que limpiaban «lo de fuera del vaso» y dejaban sucio el interior (Mt 23:25-26).',
        { h: 'El peligro contrario' },
        'En las últimas décadas, muchas iglesias han ido al extremo opuesto. En nombre de la gracia y de la libertad, algunas dejaron de enseñar sobre el pecado, la santidad y el arrepentimiento, y toleran en sus miembros y aun en sus líderes conductas que la Biblia llama claramente pecado. Pero la gracia no es permiso para pecar: es el poder para dejar de hacerlo (Tit 2:11-12). Sin santidad «nadie verá al Señor» (He 12:14).',
        { h: 'Andar en el Espíritu' },
        'La respuesta bíblica está en Gálatas 5. Pablo dice que la carne y el Espíritu se oponen, y que la manera de vencer la carne no es una lista de reglas, sino andar en el Espíritu: «Andad en el Espíritu, y no satisfagáis los deseos de la carne» (Gá 5:16). El resultado es un fruto, no un uniforme: «amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza» (Gá 5:22-23).',
        'Un pentecostalismo sano une el poder y el carácter. Los dones muestran lo que el Espíritu hace por medio de nosotros; el fruto, lo que hace en nosotros. Un creyente que habla en lenguas pero es amargado, mentiroso o inmoral contradice al Espíritu que dice tener. Y un creyente que vive en santidad, aunque no tenga dones visibles, ya muestra la obra del Espíritu en su vida. Pablo resume: «Si vivimos por el Espíritu, andemos también por el Espíritu» (Gá 5:25).'
      ],
      pensar: 'Revisa el fruto del Espíritu de Gálatas 5:22-23. ¿Cuál de esas virtudes ves crecer en tu vida, y cuál necesitas pedirle al Espíritu que desarrolle en ti?'
    },
    {
      id: 'mision', n: 'Misión y esperanza: «recibiréis poder»', ref: 'Hechos 1:8; Mateo 24:14; 1 Tesalonicenses 4:16-17; Tito 2:13', fecha: [1906, 2026],
      visual: [
        cita('Hechos 1:8', 'pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.'),
        tabla({
          titulo: 'Por qué el movimiento pentecostal fue tan misionero',
          cab: ['Convicción', 'Consecuencia'],
          filas: [
            ['El Espíritu da poder para ser testigos (Hch 1:8)', 'Cada creyente se sabe enviado'],
            ['Cristo puede volver en cualquier momento (Tit 2:13)', 'Urgencia: hay que predicar ahora'],
            ['El evangelio debe llegar a todas las naciones antes del fin (Mt 24:14)', 'Misiones a todos los pueblos'],
            ['Dios confirma su Palabra con señales (Mr 16:20)', 'Fe en que Dios obra en cualquier cultura'],
            ['No hace falta un título para servir', 'Laicos, mujeres y pobres como misioneros']
          ]
        }, 'Misión')
      ],
      texto: [
        'Para los pentecostales, el bautismo en el Espíritu nunca fue un fin en sí mismo. La razón de ser del poder del Espíritu es la misión: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Ese versículo, que ordena todo el libro de los Hechos, fue el programa del movimiento.',
        { h: 'La urgencia del fin' },
        'Los primeros pentecostales vivían con la convicción de que Cristo volvería muy pronto. Interpretaban el derramamiento del Espíritu como la «lluvia tardía» antes de la cosecha final, y creían que el evangelio debía predicarse en todo el mundo antes del fin: «será predicado este evangelio del reino en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin» (Mt 24:14). Por eso salían como misioneros sin esperar a tener recursos ni preparación.',
        'Los pentecostales clásicos esperan la venida de Cristo para arrebatar a su iglesia, antes de la gran tribulación, y después su reino de mil años sobre la tierra. Esa esperanza, «la esperanza bienaventurada» (Tit 2:13), no los llevó a la pasividad, sino a la acción: si el Señor puede venir hoy, cada día es una oportunidad para anunciarlo.',
        { h: 'Una misión de todos' },
        'Lo más original del movimiento pentecostal fue que la misión dejó de ser tarea de unos pocos especialistas. Obreros, empleadas domésticas, campesinos, mujeres y jóvenes se sintieron llamados a evangelizar a sus vecinos, a abrir una obra en otro barrio, a ir a otra ciudad o a otro país. Los migrantes llevaron su fe a donde fueron: los chilenos a Argentina y a Bolivia, los puertorriqueños a Nueva York, los brasileños a Portugal y a Japón, los africanos a Europa. Muchas iglesias pentecostales de América Latina nacieron sin un solo misionero extranjero.',
        { h: 'La misión hoy' },
        'Hoy América Latina envía misioneros a todos los continentes, y muchos de ellos son pentecostales. El desafío es que la misión no se reduzca a hacer crecer la propia congregación, sino que llegue a los pueblos que todavía no han oído el evangelio, que sirva a los pobres y que forme discípulos. El Espíritu que vino en Pentecostés sigue empujando a la iglesia hacia afuera.',
        ir('Estudiar Los últimos tiempos', '../../escatologia/'),
        { ejercicio: {
          pregunta: 'Según Hechos 1:8, ¿cuál es el propósito principal del poder del Espíritu Santo?',
          opciones: [
            { t: 'Que los creyentes tengan experiencias emocionantes en el culto.', ok: false, por_que: 'Las experiencias pueden ser reales y buenas, pero Hechos 1:8 no las presenta como el propósito.' },
            { t: 'Que los creyentes sean testigos de Cristo desde su ciudad hasta lo último de la tierra.', ok: true, por_que: 'Jesús une en una sola frase el poder del Espíritu y el testimonio en todo el mundo.' },
            { t: 'Que la iglesia tenga influencia política en su país.', ok: false, por_que: 'El texto habla de ser testigos de Cristo, no de obtener poder político.' }
          ],
          explicacion: 'El libro de los Hechos sigue el orden de este versículo: Jerusalén (capítulos 1-7), Judea y Samaria (8-12) y hasta Roma (13-28). El poder del Espíritu siempre empuja hacia afuera.'
        } }
      ],
      pensar: '«Me seréis testigos en Jerusalén… y hasta lo último de la tierra» (Hch 1:8). ¿Quién es tu «Jerusalén», tu «Samaria» y tu «lo último de la tierra»? ¿Cómo participas tú en la misión de Dios?'
    }
  ];

  // ================== RUTA VII. Desafíos y discernimiento ==================
  const discernimiento = [
    {
      id: 'prosperidad', n: 'El evangelio de la prosperidad', ref: '1 Timoteo 6:5-10; 2 Pedro 2:1-3; Hechos 8:18-24; Mateo 6:19-21, 33', fecha: [1950, 2026],
      visual: [
        tabla({
          titulo: 'Lo que enseña la prosperidad y lo que enseña la Escritura',
          cab: ['La teología de la prosperidad', 'La Escritura'],
          filas: [
            ['Dios quiere que todos sus hijos sean ricos y sanos ahora', 'Los creyentes pueden tener abundancia o necesidad, y aprender a contentarse en ambas (Fil 4:11-13)'],
            ['Lo que declaras con fe se crea («confesión positiva»)', 'Dios hace su voluntad; oramos «hágase tu voluntad» (Mt 6:10; Stg 4:13-15)'],
            ['La ofrenda es una semilla que obliga a Dios a devolver multiplicado', 'Se da con gratitud y alegría, no para comprar bendiciones (2 Co 9:7; Hch 8:20)'],
            ['La pobreza y la enfermedad son señal de poca fe', 'Pablo, Timoteo y Trófimo pasaron necesidad y enfermedad (2 Co 11:27; 2 Ti 4:20)'],
            ['El predicador próspero es prueba de la bendición', '«Que toman la piedad como fuente de ganancia; apártate de los tales» (1 Ti 6:5)']
          ]
        }, 'Comparación'),
        cita('1 Timoteo 6:6-10', 'Pero gran ganancia es la piedad acompañada de contentamiento; porque nada hemos traído a este mundo, y sin duda nada podremos sacar. Así que, teniendo sustento y abrigo, estemos contentos con esto. Porque los que quieren enriquecerse caen en tentación y lazo, y en muchas codicias necias y dañosas, que hunden a los hombres en destrucción y perdición; porque raíz de todos los males es el amor al dinero, el cual codiciando algunos, se extraviaron de la fe, y fueron traspasados de muchos dolores.')
      ],
      texto: [
        'De todos los desvíos que han afectado al mundo pentecostal y carismático, ninguno ha hecho tanto daño como el llamado evangelio de la prosperidad. Para el pentecostalismo clásico no es una sana doctrina: es otro evangelio, que usa el nombre de Cristo y el lenguaje de la fe para hacer negocios con la necesidad de la gente.',
        { h: 'De dónde viene' },
        'Sus raíces están en Norteamérica. A comienzos del siglo XX, un predicador llamado E. W. Kenyon enseñó que las palabras que se declaran con fe tienen poder para crear la realidad; varios estudiosos han señalado que tomó esas ideas de corrientes de pensamiento ajenas al cristianismo. Desde la década de 1950, algunos evangelistas de sanidad comenzaron a enseñar que la ofrenda es una «semilla de fe» que Dios devuelve multiplicada. En las décadas de 1970 y 1980, maestros como Kenneth Hagin y Kenneth Copeland difundieron la «palabra de fe» o «confesión positiva»: Dios quiere que todos sus hijos sean prósperos y sanos, y basta declararlo con fe para recibirlo. Por la televisión, estas ideas llegaron a todo el mundo. En América Latina se extendieron sobre todo desde la década de 1980; una de las iglesias que más las difundió fue la Iglesia Universal del Reino de Dios, fundada en Río de Janeiro en 1977 por Edir Macedo, conocida por pedir ofrendas y «sacrificios» con promesas de bendición económica.',
        { h: 'Por qué es un negocio' },
        'La teología de la prosperidad convierte la relación con Dios en una transacción: el creyente da para recibir más, y si no recibe, la culpa es de su poca fe. Así, muchas personas pobres han entregado lo que no tenían, endeudándose para «sembrar», mientras los predicadores se enriquecían con aviones, mansiones y lujos que presentaban como prueba de la bendición. Eso es exactamente lo que Pedro anunció: «por avaricia harán mercadería de vosotros con palabras fingidas» (2 P 2:3). Cuando Simón el mago quiso comprar con dinero el poder de imponer las manos, Pedro le respondió: «Tu dinero perezca contigo, porque has pensado que el don de Dios se obtiene con dinero» (Hch 8:20).',
        { h: 'La respuesta pentecostal' },
        'Las Asambleas de Dios, en un documento de 1980, y otras iglesias pentecostales clásicas rechazaron expresamente la confesión positiva como contraria a la Escritura. Pablo advierte contra los «hombres corruptos de entendimiento y privados de la verdad, que toman la piedad como fuente de ganancia» y manda: «apártate de los tales» (1 Ti 6:5). Y enseña lo contrario de la prosperidad: «gran ganancia es la piedad acompañada de contentamiento… porque raíz de todos los males es el amor al dinero» (1 Ti 6:6, 10).',
        'Esto no significa que Dios no provea ni que la Biblia desprecie el trabajo, el ahorro o la generosidad. Dios cuida de sus hijos, se puede orar por el pan de cada día y por la salud, y la ofrenda y el diezmo son una práctica buena, que se da con gratitud y no por temor ni para comprar la bendición. Pero Jesús llamó a buscar «primeramente el reino de Dios y su justicia» (Mt 6:33) y a hacer tesoros en el cielo (Mt 6:19-21).',
        ir('Leer Deuteronomio 28 en su contexto (Pactos y dispensaciones)', '../../pactos-y-dispensaciones/#taller/2'),
        ir('Leer Malaquías 3:10 y el diezmo (Pactos y dispensaciones)', '../../pactos-y-dispensaciones/#taller/4'),
        { ejercicio: {
          pregunta: 'Un predicador dice: «Si siembras una ofrenda grande con fe, Dios está obligado a devolvértela multiplicada; si no recibes, es porque te faltó fe». ¿Qué responde la Escritura?',
          opciones: [
            { t: 'Que tiene razón, porque Malaquías 3:10 garantiza que Dios devuelve el dinero multiplicado.', ok: false, por_que: 'Malaquías habla al Israel del pacto del Sinaí sobre el sostenimiento del templo; no enseña una inversión que obliga a Dios.' },
            { t: 'Que el don de Dios no se obtiene con dinero, y que se da con alegría y gratitud, no para obligar a Dios.', ok: true, por_que: 'Pedro reprendió a Simón por pensar que el don de Dios se compraba (Hch 8:20), y Pablo enseña a dar «no con tristeza, ni por necesidad, porque Dios ama al dador alegre» (2 Co 9:7).' },
            { t: 'Que hay que dar solo si se tiene seguridad de recibir algo a cambio.', ok: false, por_que: 'Esa es la misma lógica de transacción, solo que más prudente; la ofrenda cristiana es gratitud, no inversión.' }
          ],
          explicacion: 'La ofrenda y el diezmo son actos de adoración y de amor por la obra de Dios. Convertirlos en un negocio con promesas de ganancia es lo que Pedro llama hacer «mercadería» de los creyentes (2 P 2:3).'
        } }
      ],
      pensar: 'Pablo dice que «gran ganancia es la piedad acompañada de contentamiento» (1 Ti 6:6). ¿Estás contento con lo que Dios te ha dado? ¿Por qué das tus ofrendas: por gratitud o esperando algo a cambio?'
    },
    {
      id: 'apostoles', n: 'La «nueva reforma apostólica» y los apóstoles de hoy', ref: 'Efesios 2:19-20; Efesios 4:11-13; 2 Corintios 11:13-15; Apocalipsis 2:2; 1 Pedro 5:1-3', fecha: [1990, 2026],
      visual: [
        tabla({
          titulo: 'Funciones apostólicas y oficio de apóstol',
          cab: ['Lo que acepta la Escritura', 'Lo que enseña la nueva reforma apostólica'],
          filas: [
            ['Los doce y Pablo, testigos de Cristo resucitado, pusieron el fundamento (Ef 2:20; 1 Co 15:8)', 'Dios restaura hoy apóstoles y profetas con la misma autoridad'],
            ['Hay ministerios apostólicos: misioneros que abren obra y fundan iglesias (Hch 14:14)', 'Los apóstoles gobiernan redes de iglesias y pastores, que les deben obediencia y diezmos'],
            ['La revelación está completa en la Escritura (Jud 1:3)', 'Los apóstoles y profetas reciben nuevas revelaciones para la iglesia'],
            ['Los líderes rinden cuentas y sirven (1 P 5:1-3)', 'La autoridad del apóstol no se discute'],
            ['El reino vendrá con Cristo (Ap 11:15)', 'La iglesia debe tomar el control de la sociedad antes de que Cristo vuelva']
          ]
        }, 'Comparación'),
        cita('Efesios 2:19-20', 'Así que ya no sois extranjeros ni advenedizos, sino conciudadanos de los santos, y miembros de la familia de Dios, edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo,')
      ],
      texto: [
        'Desde la década de 1990, muchos pastores de iglesias independientes, en América Latina y en el resto del mundo, comenzaron a llamarse apóstoles y profetas. Detrás de esa tendencia hay una enseñanza a la que el misionólogo Pedro Wagner, el mismo que había dado nombre a la tercera ola, llamó la «nueva reforma apostólica».',
        { h: 'Lo que enseña' },
        'Wagner y otros maestros enseñaron que Dios estaba restaurando en estos tiempos los oficios de apóstol y de profeta, con la misma autoridad que en el Nuevo Testamento, para gobernar la iglesia. Los apóstoles encabezan redes de iglesias y de pastores que se someten a ellos y muchas veces les entregan sus diezmos; los profetas reciben revelaciones nuevas sobre lo que Dios quiere hacer. En 1999 se formó una coalición internacional de apóstoles. Algunos de estos maestros añadieron la idea de que la iglesia debe conquistar las «siete montañas» de la sociedad, como el gobierno, la economía, la educación y los medios, para establecer el reino de Dios antes de que Cristo vuelva. Son ideas muy parecidas a las de la «lluvia tardía» de 1948.',
        { h: 'Por qué preocupa' },
        'Los pentecostales clásicos aceptan que hay ministerios apostólicos: misioneros que abren obra en lugares nuevos, fundan iglesias y forman líderes, como Bernabé, a quien Lucas también llama apóstol (Hch 14:14). Pero distinguen esas funciones del oficio único de los apóstoles de Cristo, que fueron testigos de su resurrección y pusieron el fundamento de la iglesia, «sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo» (Ef 2:20). Un fundamento no se vuelve a poner.',
        'En el año 2000, las Asambleas de Dios advirtieron en un documento oficial contra la restauración de apóstoles y profetas con autoridad de gobierno sobre las iglesias. El peligro es triple: una autoridad que no rinde cuentas, nuevas revelaciones que compiten con la Escritura y una esperanza puesta en conquistar el poder en lugar de esperar al Rey. Pablo advirtió a los corintios contra unos «falsos apóstoles» (2 Co 11:13), y el Señor alabó a la iglesia de Éfeso por haber probado a «los que se dicen ser apóstoles, y no lo son» (Ap 2:2).',
        { posturas: {
          titulo: '¿Hay apóstoles y profetas hoy?',
          a: { n: 'Restauración de los oficios', t: 'Efesios 4:11-13 dice que Cristo dio apóstoles, profetas, evangelistas, pastores y maestros «hasta que todos lleguemos a la unidad de la fe»; como eso no ha ocurrido, los cinco ministerios siguen vigentes con la misma autoridad que en el siglo I, incluida la de gobernar iglesias y dar revelación.' },
          b: { n: 'Funciones sí, fundamento no', t: 'Los dones de Efesios 4 siguen edificando a la iglesia, y hay creyentes con un llamado apostólico (misionero) y con el don de profecía. Pero el oficio de los apóstoles de Cristo, testigos de la resurrección y portadores de la revelación, fue único y fundante (Ef 2:20). La autoridad de la iglesia hoy es la Escritura, y sus líderes son ancianos que sirven y rinden cuentas (1 P 5:1-3).' },
          c: 'Este recurso sigue la segunda postura. Un título no da autoridad espiritual: la da la fidelidad a la Palabra y el carácter de siervo (Mr 10:42-45).'
        } },
        ir('Ver la «lluvia tardía» de 1948 (ruta III)', '#organizacion/7')
      ],
      pensar: 'Jesús dijo que entre sus discípulos el que quiera ser grande será servidor de todos (Mr 10:43-44). ¿Cómo distingues a un líder espiritual que sirve de uno que busca dominar?'
    },
    {
      id: 'manifestaciones', n: 'Manifestaciones extrañas', ref: '1 Corintios 14:32-33; 1 Corintios 14:40; 1 Tesalonicenses 5:19-21; Gálatas 5:22-23', fecha: [1994, 2026],
      visual: [
        cita('1 Corintios 14:26-33', '¿Qué hay, pues, hermanos? Cuando os reunís, cada uno de vosotros tiene salmo, tiene doctrina, tiene lengua, tiene revelación, tiene interpretación. Hágase todo para edificación. Si habla alguno en lengua extraña, sea esto por dos, o a lo más tres, y por turno; y uno interprete. Y si no hay intérprete, calle en la iglesia, y hable para sí mismo y para Dios. Asimismo, los profetas hablen dos o tres, y los demás juzguen. Y si algo le fuere revelado a otro que estuviere sentado, calle el primero. Porque podéis profetizar todos uno por uno, para que todos aprendan, y todos sean exhortados. Y los espíritus de los profetas están sujetos a los profetas; pues Dios no es Dios de confusión, sino de paz. Como en todas las iglesias de los santos,'),
        mapa({ view: V.atlantico, lugares: ['h-toronto', 'h-anaheim', 'h-londres'] }, 'Mapa')
      ],
      texto: [
        'En enero de 1994, en una iglesia de la red de la Viña situada junto al aeropuerto de Toronto, en Canadá, comenzaron unas reuniones que pronto se hicieron famosas en todo el mundo. Durante la oración, muchas personas caían al suelo, reían sin poder controlarse, temblaban, gritaban y, en algunos casos, emitían sonidos parecidos a los de animales. Lo llamaron «la bendición de Toronto». Durante años llegaron visitantes de muchos países, también de América Latina, que volvían a sus iglesias buscando lo mismo.',
        { h: 'Las reacciones' },
        'Muchos de los que pasaron por Toronto contaron que habían sido renovados en su amor por Dios, sanados de heridas profundas o restaurados en su ministerio. Otros, en cambio, vieron en esas manifestaciones algo ajeno al Nuevo Testamento. La propia red de la Viña, a la que pertenecía la iglesia, se separó de ella a fines de 1995, porque su fundador, John Wimber, consideró que se estaba dando a las manifestaciones un lugar que no tienen en la Escritura. En los años siguientes, otras «olas» de manifestaciones aparecieron en distintos lugares, con supuestas lluvias de polvo de oro, plumas, dientes de oro o «ángeles» que traían dinero.',
        { posturas: {
          titulo: '¿Cómo evaluar las manifestaciones extrañas?',
          a: { n: 'Juzgar por el fruto', t: 'Dios puede obrar de maneras inesperadas; en los avivamientos de Wesley y de Edwards también hubo personas que caían o lloraban. Si la experiencia deja fruto en las vidas, más amor por Dios y por la Palabra, no hay que rechazarla aunque no tenga un modelo exacto en la Biblia.' },
          b: { n: 'Juzgar por la Escritura y por el fruto', t: 'El fruto importa, pero la primera prueba es la Escritura. Los dones del Espíritu que describe el Nuevo Testamento son comprensibles y edifican a la iglesia (1 Co 14:12, 26); el Espíritu produce dominio propio (Gá 5:23) y «los espíritus de los profetas están sujetos a los profetas» (1 Co 14:32). Las manifestaciones sin fundamento bíblico no deben buscarse, promoverse ni ponerse en el centro del culto.' },
          c: 'Este recurso sigue la segunda postura, sin apagar el Espíritu (1 Ts 5:19). No toda emoción o reacción física es falsa: la presencia de Dios puede conmover profundamente a una persona. Pero lo que no edifica, no glorifica a Cristo o no tiene respaldo en la Escritura no debe presentarse como obra del Espíritu.'
        } },
        { h: 'Lo que dice Pablo' },
        'Los corintios valoraban las manifestaciones espectaculares, y Pablo les enseñó a medirlas con una pregunta: ¿edifica a la iglesia? «Hágase todo para edificación» (1 Co 14:26). Les recordó que «Dios no es Dios de confusión, sino de paz» (1 Co 14:33) y que todo debe hacerse «decentemente y con orden» (1 Co 14:40). Las Asambleas de Dios y otras iglesias pentecostales clásicas recibieron con cautela la bendición de Toronto y pidieron a sus pastores examinarlo todo a la luz de la Palabra.',
        'Un pentecostal no debe tener miedo del Espíritu, ni de la emoción, ni de lo sobrenatural. Pero tampoco debe aceptar todo lo que se presenta con el nombre del Espíritu. Pablo dice ambas cosas en el mismo versículo: «No apaguéis al Espíritu… Examinadlo todo; retened lo bueno» (1 Ts 5:19, 21).'
      ],
      pensar: '«Hágase todo para edificación» (1 Co 14:26). Cuando una experiencia espiritual te impresiona, ¿te preguntas si te acerca a Cristo y a su Palabra, y si edifica a los demás?'
    },
    {
      id: 'escandalos', n: 'Escándalos y abusos: el carácter del ministro', ref: '1 Timoteo 3:1-7; Tito 1:6-9; 1 Pedro 5:1-4; Mateo 7:21-23', fecha: [1955, 2026],
      visual: [
        tabla({
          titulo: 'Lo que Dios pide a los que dirigen la iglesia (1 Timoteo 3:1-7)',
          cab: ['Requisito', 'Qué significa'],
          filas: [
            ['Irreprensible', 'Sin acusaciones fundadas en su conducta'],
            ['Marido de una sola mujer', 'Fiel en su matrimonio'],
            ['Sobrio, prudente, decoroso', 'Dueño de sí mismo, con buen juicio y conducta digna'],
            ['Hospedador, apto para enseñar', 'Abierto a los demás y capaz de enseñar la Palabra'],
            ['No codicioso de ganancias deshonestas, no avaro', 'Limpio en el manejo del dinero'],
            ['Que gobierne bien su casa', 'Con una familia cuidada, no abandonada por el ministerio'],
            ['No un neófito', 'Probado con el tiempo, para que no se envanezca'],
            ['Con buen testimonio de los de afuera', 'Respetado también fuera de la iglesia']
          ]
        }, 'Requisitos'),
        cita('1 Pedro 5:1-4', 'Ruego a los ancianos que están entre vosotros, yo anciano también con ellos, y testigo de los padecimientos de Cristo, que soy también participante de la gloria que será revelada: Apacentad la grey de Dios que está entre vosotros, cuidando de ella, no por fuerza, sino voluntariamente; no por ganancia deshonesta, sino con ánimo pronto; no como teniendo señorío sobre los que están a vuestro cuidado, sino siendo ejemplos de la grey. Y cuando aparezca el Príncipe de los pastores, vosotros recibiréis la corona incorruptible de gloria.')
      ],
      texto: [
        'La historia del movimiento pentecostal tiene también páginas oscuras. Algunos de sus predicadores más conocidos cayeron en escándalos que dañaron gravemente el testimonio de la iglesia y la fe de muchas personas. Recordarlos no es para condenar a nadie, sino para aprender.',
        { h: 'Los escándalos de 1987 y 1988' },
        'En 1987, Jim Bakker, un ministro de las Asambleas de Dios que dirigía un enorme ministerio de televisión en Estados Unidos, renunció después de que se conociera un escándalo moral. Las Asambleas de Dios le retiraron sus credenciales, y en 1989 un tribunal lo condenó por fraude: había vendido a sus seguidores participaciones en un centro vacacional que no podía cumplir. Al año siguiente, en 1988, otro famoso evangelista de televisión de las Asambleas de Dios, Jimmy Swaggart, que había denunciado con dureza la caída de Bakker, confesó públicamente un pecado moral. Cuando se negó a aceptar el período de disciplina y restauración que le pedía su iglesia, también perdió sus credenciales.',
        'Estos casos tuvieron enorme repercusión, también en América Latina, donde sus programas se transmitían en español. Pero no fueron los únicos. En muchos países, también latinoamericanos, ha habido pastores y líderes que abusaron de su autoridad, que manejaron el dinero de la iglesia como propio o que cometieron abusos contra los más vulnerables, a veces encubiertos por otros líderes.',
        { h: 'Los dones no prueban el carácter' },
        'Una de las lecciones más duras es que los dones espirituales no prueban la santidad de quien los ejerce. Jesús advirtió que algunos le dirán: «¿no profetizamos en tu nombre, y en tu nombre echamos fuera demonios, y en tu nombre hicimos muchos milagros?», y él les responderá: «Nunca os conocí» (Mt 7:22-23). Por eso, cuando Pablo describe al líder de la iglesia, casi no habla de dones: habla de carácter, de familia, de dinero y de testimonio (1 Ti 3:1-7; Tit 1:6-9).',
        { h: 'Rendir cuentas' },
        'La mejor protección contra la caída de un líder no es su carisma, sino la rendición de cuentas. Una iglesia sana tiene un cuerpo de ancianos o un consejo que acompaña al pastor, cuentas claras y revisadas, normas para proteger a los niños y a los vulnerables, y una disciplina bíblica que busca la restauración sin encubrir el pecado (Gá 6:1; 1 Ti 5:19-20). Pedro pide a los ancianos apacentar la grey «no por ganancia deshonesta… no como teniendo señorío sobre los que están a vuestro cuidado, sino siendo ejemplos de la grey» (1 P 5:2-3).',
        { ejercicio: {
          pregunta: 'Cuando Pablo describe los requisitos de un líder de la iglesia en 1 Timoteo 3, ¿en qué pone el énfasis?',
          opciones: [
            { t: 'En los dones espectaculares: sanidades, milagros y profecías.', ok: false, por_que: 'Pablo no menciona esos dones entre los requisitos; habla del carácter y la vida familiar.' },
            { t: 'En el carácter, la familia, el manejo del dinero y el buen testimonio.', ok: true, por_que: 'Casi todos los requisitos son de carácter: irreprensible, fiel, sobrio, no avaro, buen padre, con buen testimonio.' },
            { t: 'En la cantidad de personas que asisten a su iglesia.', ok: false, por_que: 'El tamaño de la congregación no aparece en ninguna de las listas de requisitos.' }
          ],
          explicacion: 'Dios usa a personas con dones, pero los confía a quienes tienen un carácter probado. Solo hay un requisito sobre la capacidad: ser «apto para enseñar» (1 Ti 3:2).'
        } }
      ],
      pensar: 'Pablo dice: «el que piensa estar firme, mire que no caiga» (1 Co 10:12). ¿A quién le rindes cuentas de tu vida espiritual, de tu matrimonio y de tu dinero? ¿Oras por tus pastores?'
    },
    {
      id: 'probar', n: 'Cómo probar los espíritus', ref: '1 Juan 4:1-3; 1 Tesalonicenses 5:19-21; Hechos 17:11; 1 Corintios 14:29; Mateo 7:15-20', fecha: [30, 2026],
      visual: [
        esq('esquema-discernir.svg', 'Esquema con seis preguntas para discernir: si confiesa y exalta a Cristo; si concuerda con toda la Escritura; si edifica a la iglesia; si produce el fruto del Espíritu; si se hace con orden y en amor; y si busca el bien de otros y no el dinero, cada una con sus textos bíblicos', 'Seis preguntas para discernir, con sus textos bíblicos.'),
        img('berea.webp', 'De noche, en una casa sencilla de un barrio latinoamericano de hoy, un grupo pequeño de creyentes de distintas edades, sentados alrededor de una mesa de cocina con tazas de té, lee la Biblia con atención; una mujer mayor señala un versículo y un joven compara en su teléfono', 'Un grupo de estudio bíblico en una casa (recreación; personas anónimas).')
      ],
      texto: [
        'Si algo enseña la historia del movimiento pentecostal es que el fervor no basta. Junto a la obra genuina del Espíritu han aparecido una y otra vez falsos profetas, enseñanzas extrañas, manifestaciones dudosas y líderes que se aprovecharon de la fe de la gente. La Biblia no responde a ese peligro apagando el Espíritu, sino enseñando a discernir: «Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios; porque muchos falsos profetas han salido por el mundo» (1 Jn 4:1).',
        { h: 'Las pruebas de la Escritura' },
        'El Nuevo Testamento ofrece varias pruebas. La primera es Cristo: el Espíritu de Dios confiesa que Jesucristo ha venido en carne (1 Jn 4:2) y glorifica a Cristo (Jn 16:14); lo que pone en el centro a un hombre, a una experiencia o a una bendición material en lugar de Cristo, no viene del Espíritu. La segunda es la Escritura: los de Berea recibieron con alegría el mensaje de Pablo, pero escudriñaban cada día las Escrituras «para ver si estas cosas eran así» (Hch 17:11); si un apóstol podía ser examinado así, también cualquier predicador de hoy. La tercera es la edificación: los dones se dan para provecho de todos (1 Co 12:7; 14:26). La cuarta es el fruto: «Por sus frutos los conoceréis» (Mt 7:16). La quinta es el orden y el amor (1 Co 13; 14:40). Y la sexta es la actitud hacia el dinero y el poder (1 P 5:2-3; 2 P 2:3).',
        { h: 'Juzgar las profecías' },
        'Pablo da una instrucción concreta para las reuniones: «Asimismo, los profetas hablen dos o tres, y los demás juzguen» (1 Co 14:29). La profecía no se acepta automáticamente, ni se rechaza por principio: se juzga. Una palabra profética que contradice la Escritura es falsa, aunque el que la da sea respetado. Una profecía que anuncia algo que no se cumple, tampoco viene de Dios (Dt 18:22). Y una «palabra» personal que pretende dirigir tus decisiones de matrimonio, trabajo o ministerio debe confirmarse con la Escritura, la oración, el consejo de creyentes maduros y la paz de Dios.',
        { h: 'Discernimiento en la práctica' },
        'Discernir no es ser desconfiado de todo ni criticar a todos. Es tener la Biblia abierta, conocerla bien y amar la verdad. Por eso la mejor defensa contra el error no es memorizar la lista de los falsos maestros, sino conocer tan bien la verdad que lo falso se note enseguida. Una iglesia que estudia la Biblia en grupos pequeños, que tiene pastores que enseñan con fidelidad y creyentes que escudriñan las Escrituras, está mucho más protegida que una que solo busca experiencias.',
        { ejercicio: {
          pregunta: 'En una reunión, alguien da una profecía que anuncia una «nueva revelación» que no está en la Biblia y que, según dice, todos deben obedecer. ¿Qué enseña el Nuevo Testamento?',
          opciones: [
            { t: 'Que hay que obedecerla sin dudar, porque juzgar una profecía es apagar el Espíritu.', ok: false, por_que: 'Pablo manda juzgar las profecías (1 Co 14:29) en el mismo pasaje en que dice no apagar el Espíritu (1 Ts 5:19-21).' },
            { t: 'Que debe juzgarse por la Escritura, que es la fe dada una vez para siempre; una revelación que la contradice o la supera no viene de Dios.', ok: true, por_que: 'La profecía edifica y se somete a la Palabra; no añade un fundamento nuevo ni obliga a la iglesia por encima de la Escritura (Jud 1:3; Gá 1:8).' },
            { t: 'Que hay que rechazar todas las profecías, porque ya no existen.', ok: false, por_que: 'Esa es la postura cesacionista; el Nuevo Testamento manda no menospreciar las profecías, sino examinarlas (1 Ts 5:20-21).' }
          ],
          explicacion: 'Pablo dijo que si aun un ángel del cielo anunciara otro evangelio, sea anatema (Gá 1:8). Ninguna experiencia ni profecía está por encima de la Escritura.'
        } }
      ],
      pensar: 'Los de Berea examinaban cada día las Escrituras para ver si lo que oían era así (Hch 17:11). ¿Tienes el hábito de comparar con la Biblia lo que escuchas en las prédicas, en las canciones o en las redes sociales?'
    },
    {
      id: 'futuro', n: 'Fuego y Palabra: el futuro del movimiento', ref: 'Hechos 2:42-47; Zacarías 4:6; 2 Timoteo 1:6-7; 2 Timoteo 2:2', fecha: [2026, 2026],
      visual: [
        img('iglesia-hoy.webp', 'Una iglesia pentecostal de barrio en una ciudad latinoamericana hoy: una congregación de todas las edades, abuelas, padres jóvenes, adolescentes y niños, de pie en un templo sencillo de muros blancos, unos con la Biblia abierta y otros con las manos levantadas, mientras un pastor de mediana edad lee la Escritura desde un púlpito de madera', 'Una iglesia pentecostal de barrio hoy (recreación; personas anónimas).'),
        cita('Hechos 2:42-47', 'Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones. Y sobrevino temor a toda persona; y muchas maravillas y señales eran hechas por los apóstoles. Todos los que habían creído estaban juntos, y tenían en común todas las cosas; y vendían sus propiedades y sus bienes, y lo repartían a todos según la necesidad de cada uno. Y perseverando unánimes cada día en el templo, y partiendo el pan en las casas, comían juntos con alegría y sencillez de corazón, alabando a Dios, y teniendo favor con todo el pueblo. Y el Señor añadía cada día a la iglesia los que habían de ser salvos.')
      ],
      texto: [
        'En poco más de un siglo, el movimiento pentecostal pasó de un puñado de creyentes que oraban en una escuela bíblica de Kansas y en un establo de Los Ángeles a cientos de millones de personas en todos los continentes. En América Latina, transformó el mapa religioso del continente. ¿Qué viene ahora?',
        { h: 'Las fortalezas' },
        'El movimiento llega al siglo XXI con grandes fortalezas: una fe viva, que espera que Dios actúe; una iglesia de laicos, donde todos son testigos; una vocación misionera que no se ha perdido; iglesias arraigadas en los barrios pobres, que acompañan a los que sufren; y una experiencia del Espíritu que ha renovado a muchas otras iglesias.',
        { h: 'Los desafíos' },
        'También enfrenta desafíos serios. El primero es la formación: muchas iglesias crecieron más en número que en conocimiento de la Biblia, y eso las dejó expuestas a la prosperidad, a los nuevos apóstoles y a las modas espirituales. El segundo son las nuevas generaciones: muchos hijos y nietos de pentecostales dejan la iglesia, y los censos muestran el crecimiento de los que no tienen religión. El tercero es la tentación del poder, político, económico o eclesiástico, que ha dañado el testimonio en muchos lugares. Y el cuarto es mantener la unidad y la sana doctrina en un movimiento muy diverso.',
        { h: 'Fuego y Palabra' },
        'La primera iglesia, la de Pentecostés, muestra el equilibrio que se necesita. Los que habían sido llenos del Espíritu «perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones» (Hch 2:42). El fuego del Espíritu y la Palabra de Dios no son enemigos. Sin el fuego, la Palabra se vuelve una doctrina fría que no transforma. Sin la Palabra, el fuego se vuelve emoción sin dirección, que puede quemar en lugar de dar calor. Los momentos más sanos del movimiento fueron aquellos en que ambos fueron juntos.',
        'Pablo exhortó a Timoteo a que avivara «el fuego del don de Dios» que estaba en él (2 Ti 1:6) y, en la misma carta, a que lo que había oído lo encargara «a hombres fieles que sean idóneos para enseñar también a otros» (2 Ti 2:2). Esa es la tarea de cada generación: recibir el fuego y la Palabra, y pasarlos a la siguiente.',
        'El futuro del movimiento no depende de sus estrategias, de sus edificios ni de sus números. Depende de lo mismo que en el comienzo: «No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos» (Zac 4:6).',
        ir('Ver La iglesia en el siglo XXI (Historia de la Iglesia II)', H2 + '#hoy/1')
      ],
      pensar: 'Pablo pidió a Timoteo avivar el fuego del don de Dios y enseñar a otros lo que había recibido (2 Ti 1:6; 2:2). ¿Qué estás haciendo para mantener vivo el fuego en tu vida y para pasar la fe a la próxima generación?'
    }
  ];

  // ================== Ensamblado ==================
  window.RUTA_DATA = {
    titulo: 'El movimiento pentecostal',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      minZoom: 1.5,
      maxZoom: 9,
      zoomEncuadre: 8,
      maxBounds: [[-72, -200], [84, 200]],
      rotulos: window.PENTECOSTAL_ROTULOS
    },
    rutas: [
      { id: 'raices', grupo: 'Los orígenes', n: 'I. Las raíces', info: 'Pentecostés, los dones en la historia, Wesley, la santidad, Keswick y Topeka', estaciones: raices,
        linea: { desde: 1730, hasta: 1910, hitos: [
          { a: 1738, t: 'Wesley' }, { a: 1840, t: 'Santidad' }, { a: 1875, t: 'Keswick' }, { a: 1901, t: 'Topeka' }
        ] } },
      { id: 'azusa', grupo: 'Los orígenes', n: 'II. Azusa y la primera expansión', info: 'Seymour, la calle Azusa y el fuego en todos los continentes, 1906-1914', estaciones: azusa,
        linea: { desde: 1900, hasta: 1915, hitos: [
          { a: 1901, t: 'Topeka' }, { a: 1905, t: 'Mukti' }, { a: 1906, t: 'Azusa' }, { a: 1907, t: 'Sunderland' },
          { a: 1909, t: 'Valparaíso' }, { a: 1913, t: 'Filadelfia' }
        ] } },
      { id: 'organizacion', grupo: 'Los orígenes', n: 'III. Organización y controversias', info: 'Las primeras iglesias, los debates de doctrina y el camino a la aceptación', estaciones: organizacion,
        linea: { desde: 1905, hasta: 1995, hitos: [
          { a: 1914, t: 'Hot Springs' }, { a: 1927, t: 'Cuadrangular' }, { a: 1948, t: 'Lluvia tardía' }, { a: 1994, t: 'Memphis' }
        ] } },
      { id: 'america', grupo: 'América Latina', n: 'IV. América Latina', info: 'Chile, Brasil, los latinos, México, Centroamérica, Argentina y los Andes', estaciones: america,
        linea: { desde: 1905, hasta: 2030, hitos: [
          { a: 1909, t: 'Valparaíso' }, { a: 1954, t: 'Hicks' }, { a: 1977, t: 'Iglesia Universal' },
          { a: 1984, t: 'Annacondia' }, { a: 2024, t: 'Censo de Chile' }
        ] } },
      { id: 'olas', grupo: 'Nuevas corrientes', n: 'V. Renovación y nuevas olas', info: 'Los carismáticos, la tercera ola, el neopentecostalismo, Asia y África', estaciones: olas,
        linea: { desde: 1945, hasta: 2030, hitos: [
          { a: 1960, t: 'Van Nuys' }, { a: 1967, t: 'Duquesne' }, { a: 1982, t: 'Tercera ola' }
        ] } },
      { id: 'doctrina', grupo: 'Doctrina y discernimiento', n: 'VI. Lo que enseñan los pentecostales', info: 'El evangelio completo, el bautismo en el Espíritu, los dones, la santidad y la misión', estaciones: doctrina },
      { id: 'discernimiento', grupo: 'Doctrina y discernimiento', n: 'VII. Desafíos y discernimiento', info: 'La prosperidad, los nuevos apóstoles, las manifestaciones extrañas y cómo probar los espíritus', estaciones: discernimiento,
        linea: { desde: 1970, hasta: 2030, hitos: [
          { a: 1977, t: 'Iglesia Universal' }, { a: 1987, t: 'Escándalos' }, { a: 1994, t: 'Toronto' }, { a: 2000, t: 'Nuevos apóstoles' }
        ] } }
    ]
  };
})();
