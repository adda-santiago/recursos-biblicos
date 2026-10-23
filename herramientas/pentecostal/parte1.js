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
  const HAY = new Set(/*@@IMAGENES*/[]);
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
        cita('Hechos 2:1-4', '@@hch/2/1-4'),
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
        cita('Hechos 19:1-7', '@@hch/19/1-7')
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
        cita('1 Tesalonicenses 5:23', '@@1ts/5/23')
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
        cita('Santiago 5:14-15', '@@stg/5/14-15')
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
        cita('Joel 2:23', '@@jl/2/23'),
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

