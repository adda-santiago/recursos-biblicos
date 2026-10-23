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
        cita('Hechos 8:5-8', '@@hch/8/5-8')
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

