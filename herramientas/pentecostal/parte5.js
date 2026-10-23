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
        cita('Colosenses 3:16', '@@col/3/16'),
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
        cita('1 Corintios 2:4-5', '@@1co/2/4-5')
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

