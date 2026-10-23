  // ================== RUTA VII. El evangelio en América Latina ==================
  const america = [
    {
      id: 'colonia', n: 'La cristiandad colonial', ref: 'Hechos 17:26; Génesis 1:27; Miqueas 6:8', fecha: [1492, 1810],
      visual: [
        img('colonial.webp', 'Interior de una iglesia de adobe en un pueblo de los Andes hacia 1600: un fraile con hábito pardo celebra ante un altar de madera dorada mientras una congregación de indígenas quechuas, con mantas tejidas de colores, está arrodillada en el suelo de tierra; luz entrando por una puerta lateral', 'Una iglesia de pueblo en la América colonial (recreación; personas anónimas).'),
        mapa({ view: V.america, capas: ['h-am-esp', 'h-am-por'], lugares: ['h-santo-domingo', 'h-mexico', 'h-lima', 'h-reducciones'] }, 'Mapa'),
        tabla({
          titulo: 'La fe en la colonia',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1492', 'Llegada de Colón; comienza la conquista y la evangelización'],
            ['1511', 'Sermón de Antonio de Montesinos en Santo Domingo contra los abusos a los indígenas'],
            ['1550-1551', 'Debate de Valladolid entre Bartolomé de las Casas y Juan Ginés de Sepúlveda'],
            ['1557', 'Primer culto evangélico en América, de hugonotes franceses en la bahía de Guanabara (Brasil)'],
            ['1570-1610', 'Tribunales de la Inquisición en Lima, México y Cartagena'],
            ['1790-1793', 'Primera Biblia católica en castellano autorizada en España (Scio de San Miguel)']
          ],
          nota: 'El mapa muestra la América española y portuguesa con las fronteras de los países de hoy.'
        })
      ],
      texto: [
        'Para entender la historia evangélica de América Latina hay que empezar antes, en la colonia. Durante tres siglos, desde 1492 hasta las independencias, el continente fue gobernado por España y Portugal, y la iglesia católica fue la única permitida. Por un acuerdo con el papa, los reyes tenían el «patronato»: nombraban obispos, financiaban las misiones y decidían sobre la vida de la iglesia. La cruz y la espada llegaron juntas.',
        { h: 'Evangelización y abusos' },
        'Miles de frailes franciscanos, dominicos, agustinos y jesuitas vinieron a evangelizar. Algunos aprendieron las lenguas indígenas, escribieron gramáticas y catecismos, fundaron escuelas y hospitales, y defendieron a los indígenas. Pero muchas veces el bautismo se impuso sin verdadera conversión, y en muchos pueblos la fe cristiana se mezcló con las creencias antiguas. Los conquistadores y encomenderos explotaron a los indígenas hasta la muerte, y después trajeron millones de africanos esclavizados.',
        'Hubo voces valientes. En diciembre de 1511, en Santo Domingo, el fraile dominico Antonio de Montesinos predicó ante los colonos un sermón que los escandalizó: les preguntó con qué derecho trataban así a los indígenas, y si acaso no eran hombres con almas racionales. Bartolomé de las Casas, que había sido encomendero, renunció a sus indígenas en 1514 y pasó cincuenta años defendiéndolos ante los reyes. La Escritura les daba la razón: Dios «de una sangre ha hecho todo el linaje de los hombres» (Hch 17:26), y todos fueron creados a su imagen (Gn 1:27).',
        { h: 'Sin Biblia y sin libertad' },
        'Durante la colonia, el pueblo casi no tuvo acceso a la Biblia. El índice de libros prohibidos de España, de 1559, prohibía las Biblias en lengua vulgar, y la Inquisición, con tribunales en Lima, México y Cartagena, vigilaba que no entraran libros protestantes. Los pocos evangélicos que llegaron, casi siempre marineros o comerciantes extranjeros, fueron juzgados. Un grupo de hugonotes franceses que se estableció en 1555 en la bahía de Guanabara, en Brasil, celebró en 1557 el primer culto evangélico de América; poco después, tres de ellos murieron ejecutados por su fe.',
        'Por eso, cuando llegaron las independencias, América Latina era un continente católico por tradición, con una piedad popular llena de devoción, pero donde la mayoría nunca había leído la Biblia ni oído con claridad que la salvación es un regalo de Dios por la fe en Cristo. Esa es la tierra en la que se sembró el evangelio en los siglos XIX y XX.'
      ],
      pensar: 'Montesinos y Las Casas defendieron a los indígenas cuando casi nadie lo hacía. ¿A quién desprecia hoy tu sociedad, y cómo te llama la Escritura a tratarlo (Mi 6:8)?'
    },
    {
      id: 'thomson', n: 'Diego Thomson y la Biblia en la escuela', ref: 'Salmo 119:130; Salmo 119:9; Proverbios 22:6', fecha: [1818, 1827],
      visual: [
        img('thomson.webp', 'Diego Thomson, un escocés de unos treinta años con levita oscura y corbatín blanco, de pie en una gran sala de escuela de Buenos Aires hacia 1819; decenas de niños criollos sentados en largos bancos leen en grupos pequeños lecciones colgadas en la pared, mientras niños mayores les enseñan; ventanas altas con luz de la mañana', 'Diego Thomson en una escuela lancasteriana de Buenos Aires, hacia 1819 (recreación).'),
        mapa({ view: V.america, lugares: ['h-buenos-aires', 'h-santiago', 'h-lima', 'h-quito', 'h-bogota', 'h-mexico'], trazos: ['h-t-thomson'] }, 'Los viajes de Thomson')
      ],
      texto: [
        'Las independencias, entre 1810 y 1825, abrieron una puerta inesperada. Los nuevos gobiernos querían educar al pueblo y buscaban métodos modernos. En 1818 llegó a Buenos Aires un pastor bautista escocés, Diego Thomson, enviado por una sociedad británica de escuelas y por la Sociedad Bíblica Británica y Extranjera.',
        { h: 'Las escuelas lancasterianas' },
        'Thomson traía el método lancasteriano, inventado en Inglaterra: en cada escuela, un maestro enseñaba a los alumnos mayores, y estos enseñaban a grupos pequeños de niños menores, de modo que una sola escuela podía educar a cientos de niños con pocos recursos. Para enseñar a leer, Thomson usaba lecciones sacadas de la Biblia, en una traducción católica aprobada, sin notas. Así, miles de niños aprendieron a leer con las palabras de la Escritura.',
        'Los libertadores lo recibieron con entusiasmo. El gobierno de Buenos Aires lo nombró director de escuelas y le dio la ciudadanía. En 1821 lo contrató el gobierno de Chile, bajo Bernardo O\'Higgins, y en 1822 José de San Martín lo invitó al Perú. Después recorrió Ecuador y Colombia, donde en 1825 se fundó en Bogotá una sociedad bíblica con participación de sacerdotes católicos, y en 1827 llegó a México. En todas partes vendía o regalaba Biblias y Nuevos Testamentos, y conversaba con autoridades, sacerdotes y familias.',
        { h: 'Una semilla' },
        'Muchas de las escuelas lancasterianas cerraron cuando cambiaron los gobiernos, y la iglesia oficial terminó oponiéndose a la distribución de Biblias sin notas. Pero Thomson había abierto un camino: había mostrado que la Biblia podía circular libremente en América Latina, y que muchos la recibían con gozo. En sus cartas contó que en muchos lugares la gente nunca había visto una Biblia completa. El salmista dice: «La exposición de tus palabras alumbra; hace entender a los simples» (Sal 119:130).',
        'Thomson no fundó iglesias evangélicas: su propósito era poner la Palabra en manos del pueblo. Esa obra la continuaron las sociedades bíblicas y los colportores durante todo el siglo XIX, como se ve en la próxima estación.',
        { ejercicio: {
          pregunta: '¿Qué método usó Diego Thomson para llevar la Biblia a América Latina?',
          opciones: [
            { t: 'Fundó iglesias evangélicas en cada ciudad que visitó.', ok: false, por_que: 'Thomson no fundó iglesias; su propósito era educar y distribuir la Biblia.' },
            { t: 'Organizó escuelas donde los niños aprendían a leer con lecciones tomadas de la Biblia.', ok: true, por_que: 'Las escuelas lancasterianas usaban textos bíblicos para enseñar a leer, con apoyo de los nuevos gobiernos.' },
            { t: 'Predicó en las plazas contra la iglesia católica.', ok: false, por_que: 'Thomson trabajó con las autoridades y aun con sacerdotes, y evitó la confrontación.' }
          ],
          explicacion: 'Thomson unió dos necesidades de las nuevas repúblicas: educar al pueblo y darle la Palabra de Dios. Fue un comienzo humilde que preparó el terreno para el evangelio.'
        } }
      ],
      pensar: 'Miles de niños aprendieron a leer con la Biblia gracias a Thomson. ¿Qué estás haciendo para que los niños de tu familia o de tu iglesia aprendan a amar la Escritura (Pr 22:6)?'
    },
    {
      id: 'colportores', n: 'Colportores y libertad de cultos', ref: 'Isaías 52:7; Romanos 10:15; Hechos 4:19-20', fecha: [1833, 1925],
      visual: [
        img('colportor.webp', 'Un colportor del siglo XIX, un hombre delgado con sombrero de ala ancha, poncho de lana y botas gastadas, guía por la brida a una mula cargada con dos cajones de madera llenos de Biblias por un sendero de montaña en los Andes, con cumbres nevadas al fondo', 'Un colportor de las sociedades bíblicas en los Andes (recreación; persona anónima).'),
        tabla({
          titulo: 'La libertad de cultos en algunos países',
          cab: ['País', 'Año', 'Paso'],
          filas: [
            ['Argentina', '1853', 'La Constitución garantiza la libertad de culto'],
            ['México', '1860', 'Ley de libertad de cultos de las Leyes de Reforma'],
            ['Chile', '1865', 'Ley que permite el culto privado de los no católicos y sus escuelas'],
            ['Brasil', '1890', 'Separación de la iglesia y el Estado'],
            ['Perú', '1915', 'Se suprime la prohibición del culto público no católico'],
            ['Uruguay', '1918', 'La Constitución separa la iglesia del Estado'],
            ['Chile', '1925', 'La Constitución separa la iglesia del Estado']
          ],
          nota: 'Fechas de los pasos principales; en cada país hubo leyes anteriores y posteriores.'
        })
      ],
      texto: [
        'Durante el siglo XIX, las sociedades bíblicas enviaron a América Latina agentes y colportores, vendedores ambulantes de Biblias. Viajaban a pie o a lomo de mula por caminos de montaña, selvas y desiertos, de pueblo en pueblo, con cajones de Biblias, Nuevos Testamentos y Evangelios. Muchos eran latinoamericanos convertidos; otros, europeos que adoptaron estas tierras como propias.',
        { h: 'Francisco Penzotti' },
        'Uno de los más conocidos fue Francisco Penzotti, un italiano que emigró a Uruguay, se convirtió en Montevideo y se dedicó a distribuir la Biblia. Con el escocés Andrés Milne recorrió Argentina, Chile, Bolivia, Perú y Ecuador. En Lima, además de vender Biblias, reunía a un grupo de creyentes. El 26 de julio de 1890 fue arrestado por realizar cultos no católicos, que la Constitución prohibía, y pasó unos ocho meses en una cárcel insalubre. Una fotografía suya tras las rejas dio la vuelta al mundo y provocó protestas internacionales. Fue liberado en marzo de 1891. Su caso alimentó el debate que llevó, en 1915, a que el Perú suprimiera la prohibición del culto público no católico.',
        'Otros colportores no tuvieron la misma suerte: fueron apedreados, expulsados de los pueblos o vieron quemar sus Biblias en las plazas. Algunos murieron. Pero siguieron adelante, convencidos de que valía la pena. Isaías lo dice: «¡Cuán hermosos son sobre los montes los pies del que trae alegres nuevas!» (Is 52:7).',
        { h: 'La lucha por la libertad' },
        'Al mismo tiempo, en cada país hubo un largo debate entre quienes querían mantener el catolicismo como religión única y quienes defendían la libertad de conciencia. Muchos liberales defendían la libertad religiosa por razones políticas, y los evangélicos la defendían por razones bíblicas: la fe no se impone, se recibe. La tabla muestra algunos de los pasos principales. Gracias a esas leyes, los evangélicos pudieron reunirse, construir templos, fundar escuelas y, con el tiempo, predicar en las calles.',
        'Los apóstoles respondieron a las autoridades que les prohibían predicar: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20). Esa misma convicción sostuvo a los colportores y a los primeros evangélicos de América Latina en tiempos de prohibición.'
      ],
      pensar: 'Los colportores arriesgaron la vida para que la Biblia llegara a los pueblos. ¿Quién de tu barrio o tu familia todavía no tiene una Biblia, y cómo podrías ayudarle a tenerla?'
    },
    {
      id: 'gardiner', n: 'Allen Gardiner y los pueblos del sur', ref: '1 Pedro 5:7; Filipenses 4:11-13; Juan 12:24', fecha: [1838, 1880],
      visual: [
        img('gardiner.webp', 'La costa desolada de una bahía de Tierra del Fuego en invierno: playa de piedras grises, un bote de madera volcado junto a la entrada de una cueva entre las rocas, árboles torcidos por el viento y montañas con nieve bajo un cielo nublado; no hay personas', 'La costa de Bahía Aguirre, en Tierra del Fuego, donde murió la expedición de Gardiner en 1851 (recreación).'),
        mapa({ view: V.conosur, lugares: ['h-bahia-aguirre', 'h-ushuaia', 'h-santiago', 'h-valparaiso', 'h-buenos-aires'] }, 'Mapa')
      ],
      texto: [
        'Allen Gardiner era un oficial de la marina británica que, después de su conversión, dedicó su vida a llevar el evangelio a los pueblos que nadie alcanzaba. Trabajó primero entre los zulúes de Sudáfrica y, desde 1838, recorrió el sur de Chile, Argentina y Bolivia buscando cómo llegar a los pueblos originarios. En 1844 fundó en Inglaterra una pequeña sociedad misionera para la Patagonia.',
        { h: 'La expedición de 1850' },
        'En 1850 Gardiner partió con seis compañeros hacia Tierra del Fuego, para llegar a los pueblos yámanas. Llevaban provisiones para seis meses y esperaban un barco con más alimentos. El barco nunca llegó a tiempo. Los yámanas, desconfiados, no los dejaron establecerse, y los misioneros tuvieron que refugiarse en la costa de Bahía Aguirre, en botes y en una cueva. Uno tras otro murieron de hambre y de escorbuto. Gardiner fue el último; murió hacia el 6 de septiembre de 1851. Cuando un barco llegó en octubre, solo encontró sus cuerpos y sus escritos.',
        'Los últimos apuntes de Gardiner no tienen una sola queja contra Dios. Escribió que había aprendido a estar contento en cualquier situación y que había echado todo su cuidado sobre Dios, esperando su tiempo. Son palabras que recuerdan a Pablo: «he aprendido a contentarme, cualquiera que sea mi situación» (Fil 4:11), y a Pedro: «echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros» (1 P 5:7).',
        { h: 'La semilla que murió' },
        'La noticia conmovió a Inglaterra, y en lugar de abandonar la misión, muchos se ofrecieron para continuarla. La sociedad, que después se llamó Sociedad Misionera Sudamericana, estableció una base en las islas Malvinas y luego en Tierra del Fuego. En 1869 se instaló una misión en Ushuaia, y el misionero Tomás Bridges aprendió la lengua yámana y escribió un diccionario de decenas de miles de palabras. Carlos Darwin, que años antes había visitado Tierra del Fuego y creía que sus habitantes no podían cambiar, quedó tan impresionado por la transformación que vio en los informes de la misión que se hizo contribuyente de la sociedad.',
        'La historia tiene también un final triste: las enfermedades que trajeron los colonos y la ocupación de sus tierras casi hicieron desaparecer a los yámanas a comienzos del siglo XX. Pero la sociedad que nació del sacrificio de Gardiner siguió trabajando entre los pueblos originarios del Chaco argentino y paraguayo y entre los mapuches de Chile. Jesús lo había dicho: «si el grano de trigo no cae en la tierra y muere, queda solo; pero si muere, lleva mucho fruto» (Jn 12:24).'
      ],
      pensar: 'Gardiner murió de hambre sin ver ningún fruto, y aun así escribió que estaba contento en Dios. ¿Qué te enseña su fe para los momentos en que tu servicio parece no dar resultado?'
    },
    {
      id: 'historicas', n: 'Iglesias de inmigrantes y misiones históricas', ref: 'Jeremías 29:7; Mateo 13:31-32; Zacarías 4:10', fecha: [1845, 1916],
      visual: [
        mapa({ view: V.sudamerica, lugares: ['h-valparaiso', 'h-santiago', 'h-buenos-aires', 'h-montevideo', 'h-sao-paulo', 'h-lima', 'h-bogota'] }, 'Mapa'),
        tabla({
          titulo: 'Algunos comienzos',
          cab: ['Año', 'Lugar', 'Comienzo'],
          filas: [
            ['1845', 'Valparaíso', 'Llega el pastor David Trumbull; funda la Iglesia Unión'],
            ['1855', 'Río de Janeiro', 'El médico escocés Robert Kalley inicia una iglesia brasileña'],
            ['Década de 1850', 'Sur de Chile y de Brasil', 'Colonos alemanes luteranos fundan sus iglesias'],
            ['1856-1858', 'Uruguay', 'Llegan colonos valdenses del norte de Italia'],
            ['1859', 'Brasil', 'Llega el misionero presbiteriano Ashbel Simonton'],
            ['1870', 'São Paulo', 'Se funda la escuela presbiteriana que dará origen a la Universidad Mackenzie'],
            ['1877', 'Chile', 'El metodista William Taylor inicia escuelas que se sostienen solas']
          ]
        })
      ],
      texto: [
        'Con la libertad de comercio llegaron a los puertos de América Latina comerciantes británicos, norteamericanos y alemanes, y con ellos las primeras iglesias evangélicas estables. Al principio eran iglesias para extranjeros, con cultos en inglés o alemán, que las leyes toleraban siempre que no buscaran convertir a los católicos.',
        { h: 'Iglesias de inmigrantes' },
        'En 1845 llegó a Valparaíso David Trumbull, un pastor norteamericano que fundó una iglesia para los marinos y extranjeros, y que luchó durante décadas por la libertad religiosa en Chile; llegó a hacerse ciudadano chileno. En el sur de Chile y de Brasil se establecieron miles de colonos alemanes, que formaron iglesias luteranas. En Uruguay y Argentina se instalaron colonos valdenses, descendientes de los seguidores de Pedro Valdo que habían sobrevivido en los valles de los Alpes desde la Edad Media: una historia de fe que unía siete siglos.',
        { h: 'Las misiones históricas' },
        'Poco a poco llegaron misioneros que querían evangelizar a los latinoamericanos en su propia lengua: presbiterianos, metodistas, bautistas, anglicanos y otros. En Brasil, el médico escocés Robert Kalley fundó en 1858 una iglesia evangélica brasileña, y el presbiteriano Ashbel Simonton llegó en 1859. En Chile, Argentina, Perú, México y otros países se formaron las primeras congregaciones de habla castellana. Estas misiones, que hoy se llaman históricas, fundaron también colegios, hospitales e imprentas. Muchos de sus colegios fueron de los primeros en educar a las mujeres y en usar métodos modernos, y algunos llegaron a ser universidades.',
        { h: 'Pequeñas y extranjeras' },
        'A comienzos del siglo XX, los evangélicos eran todavía una pequeña minoría, menos del uno por ciento en casi todos los países. Muchas de sus iglesias dependían de misioneros y dinero del extranjero, tenían cultos con himnos traducidos y formas importadas, y la gente las veía como «la religión de los gringos». Faltaba que el evangelio echara raíces en el pueblo latinoamericano y que los propios latinoamericanos lo llevaran a sus vecinos. Eso ocurriría, sobre todo, con el movimiento pentecostal.',
        'Pero aquellas pequeñas iglesias fueron fieles. Tradujeron himnos, formaron pastores, defendieron la libertad religiosa y sembraron en una tierra que parecía dura. El profeta pregunta: «los que menospreciaron el día de las pequeñeces se alegrarán» (Zac 4:10). Los comienzos pequeños no son comienzos sin valor.'
      ],
      pensar: 'Las primeras iglesias evangélicas eran pequeñas y parecían extranjeras. ¿Qué hace que tu iglesia sea hoy «de tu pueblo» y no de afuera? ¿Hay algo que todavía la hace parecer ajena a tus vecinos?'
    },
    {
      id: 'valparaiso', n: 'El avivamiento de Valparaíso', ref: 'Joel 2:28-29; Hechos 2:4; Hechos 2:47', fecha: [1907, 1910],
      visual: [
        img('valparaiso.webp', 'Interior de una iglesia metodista de madera en Valparaíso en 1909, de noche: una congregación de obreros, empleadas y familias chilenas de la época, con ropa sencilla, ora en voz alta con las manos levantadas; algunos de rodillas junto a las bancas, una joven llora con el rostro alzado; lámparas de parafina iluminan el templo', 'Una reunión de oración en Valparaíso en 1909 (recreación; personas anónimas).'),
        mapa({ view: V.mundo, lugares: ['h-mukti', 'h-valparaiso', 'h-santiago', 'h-los-angeles'], trazos: ['h-t-mukti-chile'] }, 'De la India a Chile')
      ],
      texto: [
        'Guillermo Hoover era un médico norteamericano que llegó a Chile en 1889 como profesor y misionero metodista. Desde 1902 era pastor de la Iglesia Metodista Episcopal de Valparaíso. Después del terremoto que destruyó buena parte de la ciudad en 1906, la congregación construyó un nuevo templo con mucho sacrificio.',
        { h: 'Una carta desde la India' },
        'En 1907 su esposa, María, recibió un folleto escrito por una antigua compañera de estudios, Minnie Abrams, misionera en la India. Contaba el avivamiento que había vivido en la misión de Mukti, con oración, arrepentimiento y bautismo en el Espíritu Santo. Los Hoover leyeron también noticias de lo que pasaba en otros lugares del mundo y empezaron a orar con su congregación por un derramamiento del Espíritu. Durante meses se reunieron en vigilias de oración, muchas veces toda la noche.',
        { h: '1909' },
        'En 1909 llegó la respuesta. En las reuniones de oración muchos creyentes vivieron lo que los profetas habían anunciado: hablaron en otras lenguas, tuvieron visiones, lloraron por sus pecados, cayeron al suelo bajo el poder de Dios, cantaron en el Espíritu y danzaron de gozo. Hubo conversiones de personas que vivían en el alcohol y la violencia, reconciliaciones y sanidades. La congregación creció rápidamente, y el fuego se extendió a las iglesias metodistas de Santiago y de otras ciudades. Era el cumplimiento de la promesa de Joel: «derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas» (Jl 2:28).',
        'La prensa se burló y las autoridades de la iglesia metodista se alarmaron. En la conferencia anual de 1910, Hoover fue acusado de enseñar doctrinas contrarias al metodismo. Él renunció, y con las congregaciones de Valparaíso y de Santiago que lo siguieron formó una iglesia independiente, que con el tiempo se llamó Iglesia Metodista Pentecostal.',
        { h: 'Un pentecostalismo chileno' },
        'Lo más notable de este movimiento fue que desde el principio fue chileno: no dependía de misioneros ni de dinero extranjero. Sus pastores eran obreros y campesinos que se formaban en la práctica, predicando en las calles, y sus himnos y su estilo nacieron del pueblo. En los años siguientes se formaron otras iglesias pentecostales a partir de esta y de otras raíces, y el pentecostalismo llegó a ser la mayoría de los evangélicos de Chile. Casi al mismo tiempo, en 1910 y 1911, nacieron en Brasil las primeras iglesias pentecostales, en São Paulo y en Belém, y en las décadas siguientes el movimiento se extendió por todo el continente. Lucas lo resume así: «el Señor añadía cada día a la iglesia los que habían de ser salvos» (Hch 2:47).',
        'Esta estación es un panorama; la historia del pentecostalismo latinoamericano se estudia en detalle en El movimiento pentecostal.',
        ir('Estudiar el pentecostalismo en América Latina', '../../movimiento-pentecostal/#america/1'),
        { ejercicio: {
          pregunta: '¿Qué rasgo distinguió al pentecostalismo chileno desde sus comienzos?',
          opciones: [
            { t: 'Dependía de misioneros y fondos de Estados Unidos.', ok: false, por_que: 'Fue al revés: después de la separación de 1910, el movimiento no tuvo apoyo misionero extranjero.' },
            { t: 'Fue un movimiento nacional, con pastores chilenos formados en la práctica y predicación en las calles.', ok: true, por_que: 'Desde muy temprano fue dirigido y sostenido por chilenos, lo que explica en parte su rápido crecimiento.' },
            { t: 'Nació en una universidad, entre profesores de teología.', ok: false, por_que: 'Nació en una congregación de obreros y gente sencilla de Valparaíso, en reuniones de oración.' }
          ],
          explicacion: 'El pentecostalismo chileno mostró que el evangelio echa raíces cuando los creyentes de cada pueblo lo hacen suyo y lo anuncian a sus vecinos con sus propias palabras.'
        } }
      ],
      pensar: 'El avivamiento de Valparaíso comenzó con meses de vigilias de oración. ¿Estás dispuesto a perseverar en oración por un derramamiento del Espíritu en tu iglesia, aunque la respuesta tarde?'
    },
    {
      id: 'panama', n: 'De Panamá 1916 a la misión latinoamericana', ref: 'Hechos 1:8; 2 Timoteo 2:2; Hechos 15:28', fecha: [1916, 1992],
      visual: [
        tabla({
          titulo: 'Los encuentros evangélicos del continente',
          cab: ['Año', 'Lugar', 'Encuentro'],
          filas: [
            ['1916', 'Panamá', 'Congreso de Acción Cristiana en América Latina'],
            ['1925', 'Montevideo', 'Congreso de Obra Cristiana en Sudamérica, ya en castellano'],
            ['1929', 'La Habana', 'Congreso Evangélico Hispanoamericano'],
            ['1949', 'Buenos Aires', 'Primera Conferencia Evangélica Latinoamericana'],
            ['1969', 'Bogotá', 'Primer Congreso Latinoamericano de Evangelización (CLADE I)'],
            ['1970', 'Cochabamba', 'Se funda la Fraternidad Teológica Latinoamericana'],
            ['1979', 'Lima', 'CLADE II'],
            ['1982', 'Panamá', 'Se forma la Confraternidad Evangélica Latinoamericana (CONELA)'],
            ['1992', 'Quito', 'CLADE III']
          ]
        }),
        mapa({ view: V.america, lugares: ['h-panama', 'h-montevideo', 'h-buenos-aires', 'h-bogota', 'h-lima', 'h-quito'] }, 'Mapa')
      ],
      texto: [
        'Cuando en Edimburgo, en 1910, se dejó a América Latina fuera del temario, los misioneros que trabajaban en el continente decidieron reunirse por su cuenta. En febrero de 1916 se celebró en Panamá el Congreso de Acción Cristiana en América Latina. Asistieron unos trescientos participantes, casi todos misioneros y dirigentes extranjeros, y muy pocos latinoamericanos.',
        { h: 'Lo que se decidió en Panamá' },
        'El congreso afirmó que América Latina era un campo legítimo de misión, porque millones de personas no conocían el evangelio de manera personal. Las misiones acordaron repartirse el territorio para no competir, coordinar la literatura y la educación, y formar líderes nacionales. Pero el tono fue todavía el de una obra pensada desde afuera. En los congresos de Montevideo (1925) y La Habana (1929), en cambio, ya hablaron más latinoamericanos, y en castellano.',
        { h: 'Una voz latinoamericana' },
        'En la segunda mitad del siglo XX, los evangélicos latinoamericanos empezaron a pensar la misión desde su propia realidad. En 1969 se reunió en Bogotá el primer Congreso Latinoamericano de Evangelización, y al año siguiente un grupo de pastores y teólogos fundó la Fraternidad Teológica Latinoamericana, para reflexionar sobre la fe con raíces bíblicas y latinoamericanas. Entre sus fundadores estaban René Padilla y Samuel Escobar, que en 1974 hablarían en Lausana. En 1982 se formó la Confraternidad Evangélica Latinoamericana, que reunió a iglesias evangélicas y pentecostales del continente.',
        'Las iglesias pentecostales, que crecían más que todas las demás, participaron poco al principio en estos encuentros: estaban ocupadas evangelizando, y muchas desconfiaban de las discusiones teológicas. Con el tiempo, sus líderes se incorporaron a las redes de cooperación evangélica.',
        { h: 'De campo misionero a fuerza misionera' },
        'En un siglo, América Latina pasó de ser un continente excluido del mapa misionero a ser un continente que envía misioneros al mundo. En la década de 1980 se organizaron congresos misioneros latinoamericanos, como COMIBAM (1987), y hoy miles de misioneros latinoamericanos sirven en otros países. La promesa de Jesús sigue vigente: «me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8).'
      ],
      pensar: 'Pablo pidió a Timoteo encargar la enseñanza a «hombres fieles que sean idóneos para enseñar también a otros» (2 Ti 2:2). ¿A quién estás formando tú para que continúe la obra?'
    },
    {
      id: 'pobreza', n: 'Dos respuestas a la pobreza', ref: 'Lucas 4:18; Santiago 2:15-17; 2 Corintios 5:19-20; Gálatas 2:10', fecha: [1968, 1990],
      visual: [
        cita('Lucas 4:18', '@@lc/4/18'),
        tabla({
          titulo: 'Dos corrientes de los años setenta',
          cab: ['', 'Teología de la liberación', 'Misión integral'],
          filas: [
            ['Origen', 'Teólogos católicos, desde Medellín (1968) y Gustavo Gutiérrez (1971); algunos protestantes', 'Evangélicos de la Fraternidad Teológica Latinoamericana (1970) y Lausana (1974)'],
            ['Punto de partida', 'La realidad de los pobres y la práctica de la justicia', 'La autoridad de la Escritura y la misión de la iglesia'],
            ['Salvación', 'Se entiende también como liberación de estructuras sociales injustas', 'Reconciliación con Dios por la fe en Cristo, que transforma a la persona y su entorno'],
            ['Herramientas', 'Algunos usaron el análisis marxista de la sociedad', 'Rechaza reducir el evangelio a una ideología política']
          ]
        })
      ],
      texto: [
        'En las décadas de 1960 y 1970, América Latina vivía una gran pobreza, desigualdad, golpes de Estado y violencia política. Muchos creyentes se preguntaron qué tenía que decir el evangelio a esa realidad. Surgieron dos respuestas principales, que conviene conocer porque marcaron a las iglesias del continente.',
        { h: 'La teología de la liberación' },
        'En la iglesia católica, los obispos reunidos en Medellín en 1968 hablaron de una «opción preferencial por los pobres». En 1971, el sacerdote peruano Gustavo Gutiérrez publicó Teología de la liberación, que leía la Biblia desde la experiencia de los pobres y veía en el Éxodo un modelo de liberación. Algunos teólogos protestantes siguieron una línea parecida. Una parte de esta corriente usó el análisis marxista de la sociedad y apoyó movimientos políticos, y en 1984 el propio Vaticano criticó ese uso.',
        { h: 'La misión integral' },
        'Entre los evangélicos, la Fraternidad Teológica Latinoamericana propuso otro camino, que se llamó misión integral. Sostenía que el evangelio es para toda la persona: que la conversión a Cristo transforma también la vida familiar, el trabajo y la sociedad, y que la iglesia debe servir a los pobres como lo hizo Jesús, que vino a «dar buenas nuevas a los pobres» (Lc 4:18). Al mismo tiempo, afirmaba que la necesidad más profunda del ser humano es la reconciliación con Dios.',
        { posturas: {
          titulo: '¿Cuál es la relación entre el evangelio y la justicia social?',
          a: { n: 'Teología de la liberación', t: 'Dios se pone del lado de los pobres y oprimidos, como en el Éxodo. La fe se verifica en la práctica de la justicia, y la salvación incluye la liberación de estructuras sociales injustas (Lc 4:18; Is 58:6-7).' },
          b: { n: 'Misión integral', t: 'El centro del evangelio es la reconciliación con Dios por medio de Cristo (2 Co 5:19-20). Esa reconciliación produce frutos de justicia y servicio a los necesitados, porque la fe sin obras está muerta (Stg 2:15-17), pero el evangelio no se reduce a un programa político.' },
          c: 'Este recurso sigue la segunda postura, con una prioridad clara: la iglesia anuncia ante todo el perdón de los pecados y la vida nueva en Cristo, y esa vida nueva se muestra en el amor práctico a los pobres (Gá 2:10). Muchas iglesias pentecostales, sin escribir teología, vivieron la misión integral en la práctica: rescataron a personas del alcohol y la violencia, restauraron familias y sostuvieron a los más pobres en sus comunidades. La iglesia sirve a todos sin identificarse con ningún partido.'
        } },
        'La historia muestra dos peligros opuestos. Uno es reducir el evangelio a la política y olvidar la conversión personal. El otro es predicar la salvación del alma y olvidar al hermano que tiene hambre. Santiago pregunta: si alguien dice al necesitado «Id en paz, calentaos y saciaos», pero no le da lo necesario, «¿de qué aprovecha?» (Stg 2:16).'
      ],
      pensar: 'Pablo, después de debatir con los apóstoles sobre el evangelio, recordó que le pidieron «que nos acordásemos de los pobres» (Gá 2:10). ¿Cómo ayuda tu iglesia, y cómo ayudas tú, a los que pasan necesidad?'
    },
    {
      id: 'crecimiento', n: 'El crecimiento evangélico', ref: 'Isaías 60:22; Hechos 11:21; Zacarías 4:6', fecha: [1960, 2024],
      visual: [
        esq('esquema-latam.svg', 'Gráfico de barras de la religión en América Latina en 1995 y 2024 según Latinobarómetro: católicos 80 % y 54 %; evangélicos 6 % y 19 %; sin religión 4 % y 19 %', 'Religión en América Latina, 1995 y 2024 (Latinobarómetro).', 'América Latina'),
        tabla({
          titulo: 'Censos recientes',
          cab: ['País y censo', 'Católicos', 'Evangélicos', 'Sin religión'],
          filas: [
            ['Brasil, 2010', '65,1 %', '21,6 %', '7,9 %'],
            ['Brasil, 2022', '56,7 %', '26,9 %', '9,3 %'],
            ['Chile, 2002', '70,0 %', '15,1 %', '8,3 %'],
            ['Chile, 2024', '54,0 %', '16,3 %', '25,8 %']
          ],
          nota: 'Brasil: IBGE, población de 10 años o más (resultados publicados en junio de 2025). Chile: INE, población de 15 años o más (resultados publicados en julio de 2025).'
        })
      ],
      texto: [
        'Hace cien años, los evangélicos eran menos del uno por ciento en casi toda América Latina. Hoy son, según Latinobarómetro, cerca de uno de cada cinco latinoamericanos. En Brasil, el censo de 2022 contó un 26,9 % de evangélicos, más de 47 millones de personas. En Guatemala, Honduras y El Salvador, las encuestas recientes muestran que entre un tercio y más de dos quintos de la población es evangélica. Es uno de los cambios religiosos más rápidos de la historia moderna.',
        { h: 'Por qué creció' },
        'La gran mayoría de este crecimiento se debe a las iglesias pentecostales. Los estudiosos señalan varias causas. Las iglesias pentecostales fueron dirigidas por los propios latinoamericanos, con pastores salidos del pueblo, que hablaban su lenguaje. Cada creyente era un testigo, y se predicaba en las calles, en las plazas y de casa en casa. Las iglesias ofrecieron una comunidad a millones de personas que emigraban del campo a la ciudad y se sentían solas. La oración por los enfermos y la liberación de vicios como el alcohol transformaron familias enteras. Y las mujeres tuvieron un papel activo en la oración, la evangelización y el servicio. Detrás de todo, los creyentes ven la obra del Espíritu: «la mano del Señor estaba con ellos, y gran número creyó y se convirtió al Señor» (Hch 11:21).',
        { h: 'Los desafíos' },
        'El crecimiento trajo también desafíos serios. Muchas iglesias crecieron más en número que en formación bíblica, y en algunas se difundieron enseñanzas extrañas, como el llamado evangelio de la prosperidad. Hubo divisiones frecuentes, liderazgos autoritarios y escándalos que dañaron el testimonio. Algunos líderes buscaron el poder político y confundieron el reino de Dios con un partido. Y las encuestas muestran un fenómeno nuevo: crece el número de personas sin religión, entre ellas muchos jóvenes que se criaron en iglesias evangélicas y las dejaron. En Chile, el censo de 2024 mostró que uno de cada cuatro mayores de quince años no se identifica con ninguna religión.',
        'El crecimiento es una gran bendición y una gran responsabilidad. La pregunta ya no es si el evangelio puede echar raíces en América Latina, sino si las iglesias formarán discípulos maduros, fieles a la Escritura y capaces de transformar su sociedad. Dios dijo a Zorobabel: «No con ejército, ni con fuerza, sino con mi Espíritu» (Zac 4:6).',
        { ejercicio: {
          pregunta: 'Según Latinobarómetro, ¿cómo cambió la proporción de evangélicos en América Latina entre 1995 y 2024?',
          opciones: [
            { t: 'Pasó de cerca de un 6 % a cerca de un 19 %.', ok: true, por_que: 'En treinta años, la proporción de evangélicos se triplicó, mientras la de católicos bajó de 80 % a 54 %.' },
            { t: 'Se mantuvo estable, cerca de un 10 %.', ok: false, por_que: 'El cambio fue grande: en 1995 era alrededor de 6 %, y en 2024, alrededor de 19 %.' },
            { t: 'Pasó a ser la mayoría de la población del continente.', ok: false, por_que: 'Los evangélicos son cerca de uno de cada cinco latinoamericanos; los católicos siguen siendo la mayoría.' }
          ],
          explicacion: 'El mismo estudio muestra que también crecieron, en la misma proporción, las personas sin religión. Por eso el desafío de hoy es doble: seguir evangelizando y formar discípulos que perseveren.'
        } }
      ],
      pensar: '«El pequeño vendrá a ser mil, el menor, un pueblo fuerte» (Is 60:22). La iglesia evangélica de América Latina dejó de ser pequeña. ¿Qué significa para ti ser parte de una iglesia numerosa, y qué responsabilidad trae?'
    }
  ];
