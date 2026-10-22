  // ================== RUTA V. La tierra después de la Biblia ==================
  // Hechos fechados; donde hay disputa se presentan las dos perspectivas, sin opinión política.
  // La estación 6 describe la situación al 21 de octubre de 2026 y se revisa periódicamente (DIRECTRICES, Pendientes).
  const despues = [
    {
      id: 'destruccion', n: 'Destrucción y dispersión', ref: 'Lucas 19:41-44; 21:20-24; Mateo 24:1-2', fecha: [66, 135],
      visual: [
        pasos([
          { t: 'La gran rebelión (66–73): Roma destruye Jerusalén y el templo en el año 70.', fecha: 70, estado: { view: V.tierra, capas: ['h-iudaea'], lugares: ['jerusalen', 'masada', 'cesarea', 'maqueronte', 'pela'] } },
          { t: 'La rebelión de Bar Kojba (132–135) termina con la caída de Betar.', fecha: 135, estado: { view: V.juda, capas: ['h-iudaea'], lugares: ['jerusalen', 'betar', 'belen', 'hebron'] } },
          { t: 'Jerusalén pasa a ser Aelia Capitolina, en la provincia de Siria Palestina.', fecha: 136, estado: { view: V.tierra, capas: ['h-palaestina'], lugares: ['aelia', 'cesarea', 'tiberias'] } }
        ]),
        img('masada.webp', 'El campamento de una legión romana al pie de una gran meseta rocosa en el desierto junto al mar Muerto, con una rampa de tierra que sube hasta la fortaleza en lo alto; soldados romanos anónimos y tiendas de cuero', 'El asedio romano de Masada (73 o 74 d.C.).'),
        foto('arco-tito.jpg', 'Relieve del Arco de Tito en Roma: soldados romanos llevan en procesión el candelabro de siete brazos y otros objetos del templo de Jerusalén', 'El botín del templo en el Arco de Tito, Roma (hacia el año 81).', 'Jebulon, CC0 (dominio público), Wikimedia Commons')
      ],
      texto: [
        'Pocos días antes de morir, al ver Jerusalén desde el monte de los Olivos, Jesús lloró sobre ella y anunció: «vendrán días sobre ti, cuando tus enemigos te rodearán con vallado, y te sitiarán, y por todas partes te estrecharán, y te derribarán a tierra, y a tus hijos dentro de ti, y no dejarán en ti piedra sobre piedra» (Lc 19:43-44). Unos cuarenta años después, esas palabras se cumplieron.',
        { h: 'El año 70' },
        'En el año 66, los judíos de Judea se rebelaron contra Roma. El general Vespasiano recuperó Galilea, y cuando fue proclamado emperador, su hijo Tito sitió Jerusalén. Tras meses de hambre y luchas internas, la ciudad cayó en el verano del año 70. El templo de Herodes fue incendiado y destruido, y la ciudad arrasada. El historiador judío Josefo, testigo de la guerra, describe miles de muertos y miles de cautivos vendidos como esclavos. En Roma, el Arco de Tito todavía muestra a los soldados llevando el candelabro del templo como botín. El último foco de resistencia, la fortaleza de Masada junto al mar Muerto, cayó en el 73 o 74.',
        'Según el historiador cristiano Eusebio, los creyentes de Jerusalén recordaron la advertencia de Jesús —«cuando viereis a Jerusalén rodeada de ejércitos… los que estén en Judea, huyan a los montes» (Lc 21:20-21)— y se refugiaron en Pela, al otro lado del Jordán.',
        { h: 'Bar Kojba y Aelia Capitolina' },
        'Sesenta años después hubo una segunda rebelión. Entre 132 y 135, un líder llamado Simón Bar Kosiba, a quien muchos llamaron Bar Kojba, «hijo de la estrella», y a quien el rabino Akiva reconoció como mesías, se levantó contra el emperador Adriano. La guerra terminó con la caída de la fortaleza de Betar, al suroeste de Jerusalén. Roma reconstruyó Jerusalén como una ciudad pagana llamada Aelia Capitolina, con templos a sus dioses, y prohibió a los judíos entrar en ella. La provincia de Judea pasó a llamarse Siria Palestina.',
        { h: 'Hollada por los gentiles' },
        'Para el pueblo judío comenzó un largo período de dispersión por el mundo, aunque nunca dejó de haber comunidades judías en la tierra, sobre todo en Galilea, donde los rabinos compilaron la Mishná y el Talmud de Jerusalén. Jesús había dicho: «Jerusalén será hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan» (Lc 21:24). Esas últimas palabras, «hasta que», dejan abierta una esperanza que la ruta VI estudia.',
        ir('Recorrer el templo de Herodes en 3D', '../../templo-herodes/'),
        ir('Estudiar el imperio romano', '../../imperio-romano/')
      ],
      pensar: 'Jesús lloró por la ciudad que lo rechazaba (Lc 19:41). ¿Qué te enseña su llanto sobre la manera de mirar a quienes no han reconocido «el tiempo de su visitación»?'
    },
    {
      id: 'bizantina', n: 'Tierra Santa cristiana', ref: 'Hebreos 13:14; Juan 4:21-24', fecha: [324, 638],
      visual: [
        mapa({ view: V.tierra, capas: ['h-bizancio'], lugares: ['jerusalen', 'belen', 'madaba', 'cesarea', 'tiberias', 'monte-nebo'] }),
        img('basilica.webp', 'Peregrinos cristianos anónimos del siglo V, con mantos y bastones de viaje, entran en una gran basílica bizantina de piedra con columnas y mosaicos dorados, iluminada por lámparas de aceite', 'Peregrinos en una basílica de Tierra Santa (siglo V).'),
        foto('mapa-madaba.jpg', 'Detalle del mosaico del mapa de Madaba: Jerusalén vista desde arriba, con sus murallas, sus puertas, una gran calle con columnas y la iglesia del Santo Sepulcro', 'Jerusalén en el mapa de Madaba, mosaico del siglo VI (Madaba, Jordania).', 'Carole Raddato, CC BY-SA 2.0, Wikimedia Commons')
      ],
      texto: [
        'En el año 324, Constantino quedó como único emperador de Roma. Había favorecido a los cristianos desde 313, y su conversión cambió también la historia de la tierra. Por primera vez, la tierra donde vivió Jesús quedó bajo un gobierno cristiano, y empezó a llamarse comúnmente Tierra Santa.',
        { h: 'Iglesias en los lugares de la historia bíblica' },
        'Hacia el año 326, Elena, la madre de Constantino, visitó la tierra. El emperador mandó construir grandes basílicas en los lugares que la tradición de los cristianos de Jerusalén señalaba: la iglesia del Santo Sepulcro, sobre el lugar de la crucifixión y la tumba de Jesús, consagrada en 335; la iglesia de la Natividad en Belén, sobre la cueva del nacimiento; y la del monte de los Olivos. Para construir el Santo Sepulcro se derribó un templo pagano que Adriano había levantado allí. Muchos estudiosos piensan que esta ubicación, entonces fuera de las murallas del siglo I, es muy probablemente la verdadera.',
        { h: 'Peregrinos, monjes y traductores' },
        'Desde entonces llegaron peregrinos de todo el imperio. Un viajero de Burdeos dejó en 333 un itinerario, y una mujer llamada Egeria escribió hacia el año 383 un diario que describe cómo se celebraban la Semana Santa y las fiestas en Jerusalén. En Belén se estableció Jerónimo, que vivió allí desde 386 hasta su muerte en 420 y tradujo la Biblia al latín desde el hebreo y el griego, la versión llamada Vulgata. En el desierto de Judea se fundaron monasterios en los barrancos, como el de Mar Saba, fundado en 483 y habitado hasta hoy.',
        'En el siglo VI se hizo en Madaba, en Moab, un mosaico con el mapa de Tierra Santa, con Jerusalén en el centro. Es el mapa más antiguo de la región que se conserva, y muestra la ciudad con su gran calle de columnas y la iglesia del Santo Sepulcro.',
        { h: 'Un tiempo de luz y de sombra' },
        'En este período, la mayoría de la población de la tierra llegó a ser cristiana. Pero los judíos, que siguieron viviendo sobre todo en Galilea, sufrieron leyes cada vez más duras, y en 614 muchos apoyaron a los persas, que invadieron la tierra, saquearon Jerusalén y quemaron iglesias. El emperador Heraclio recuperó la región en 629, pero pocos años después llegó otro poder del desierto.',
        'Jesús había enseñado que llegaría la hora en que los verdaderos adoradores no dependerían de un monte ni de un lugar, sino que adorarían «en espíritu y en verdad» (Jn 4:23). Los lugares santos ayudan a recordar la historia, pero la fe cristiana no está atada a ellos: «no tenemos aquí ciudad permanente, sino que buscamos la por venir» (He 13:14).',
        ir('Conocer a Jerónimo en De la Biblia a nosotros', '../../de-la-biblia-a-nosotros/')
      ],
      pensar: 'Los peregrinos querían caminar donde caminó Jesús. ¿Qué significa para ti seguir sus pasos hoy, dondequiera que vivas (1 P 2:21)?'
    },
    {
      id: 'islam-cruzadas', n: 'Bajo el islam y las cruzadas', ref: 'Mateo 26:52; Juan 18:36; Romanos 12:17-21', fecha: [636, 1516],
      visual: [
        pasos([
          { t: 'Desde 636–638, la tierra forma parte del califato, dividida en Yund Filastín y Yund al-Urdun.', fecha: 638, estado: { view: V.tierra, capas: ['h-califato'], lugares: ['jerusalen', 'ramla', 'tiberias', 'cesarea'] } },
          { t: 'Desde 1099, los cruzados fundan el reino latino de Jerusalén.', fecha: 1099, estado: { view: [[29.3, 33.8], [34.2, 36.6]], capas: ['h-cruzados'], lugares: ['jerusalen', 'acre', 'hattin', 'kerak', 'beirut'] } },
          { t: 'Desde 1260, los mamelucos de Egipto gobiernan la tierra; en 1291 cae Acre, el último bastión cruzado.', fecha: 1291, estado: { view: V.tierra, capas: ['h-mamelucos'], lugares: ['jerusalen', 'acre', 'ain-jalut', 'safed'] } }
        ]),
        tabla({
          titulo: 'Fechas de este período',
          cab: ['Año', 'Hecho'],
          filas: [
            ['636', 'Batalla del Yarmuc: los ejércitos árabes vencen a Bizancio'],
            ['638', 'Jerusalén se rinde al califa Omar'],
            ['691–692', 'Se termina la Cúpula de la Roca en el monte del templo'],
            ['1009', 'El califa al-Hakim manda destruir la iglesia del Santo Sepulcro'],
            ['1099', 'Los cruzados toman Jerusalén (15 de julio)'],
            ['1187', 'Saladino vence en los Cuernos de Hattín y recupera Jerusalén'],
            ['1260', 'Los mamelucos vencen a los mongoles en Ain Jalut'],
            ['1291', 'Cae Acre, fin de los reinos cruzados en la tierra'],
            ['1516–1517', 'Los otomanos conquistan la región']
          ]
        })
      ],
      texto: [
        'En la primera mitad del siglo VII nació el islam en Arabia. Pocos años después de la muerte de Mahoma, los ejércitos árabes avanzaron sobre el imperio bizantino. En 636 lo vencieron en el río Yarmuc, al este del mar de Galilea, y hacia 638 Jerusalén se rindió al califa Omar, que permitió a los cristianos conservar sus iglesias a cambio de un impuesto. La tierra se organizó en dos distritos, Yund Filastín, con capital en Ramla, y Yund al-Urdun, con capital en Tiberias.',
        { h: 'La Cúpula de la Roca' },
        'En el monte del templo, abandonado desde el año 70, el califa Abd al-Malik terminó en 691 o 692 la Cúpula de la Roca, sobre la roca que la tradición judía identifica con el monte Moriah. Poco después se construyó la mezquita de al-Aqsa en el extremo sur de la explanada. La tradición islámica relaciona este lugar con el viaje nocturno de Mahoma. Desde entonces, el monte del templo es también un lugar santo del islam, y lo sigue siendo hoy.',
        'Durante los siglos siguientes, el árabe se volvió la lengua de la región y una parte creciente de la población se hizo musulmana, aunque siguieron existiendo comunidades cristianas, judías y samaritanas.',
        { h: 'Las cruzadas' },
        'En 1009, el califa al-Hakim mandó destruir la iglesia del Santo Sepulcro, y más tarde los turcos selyúcidas dificultaron las peregrinaciones. En 1095, el papa Urbano II llamó a una guerra para recuperar Jerusalén. Los cruzados la tomaron el 15 de julio de 1099 y mataron a gran parte de sus habitantes musulmanes y judíos. Fundaron el reino latino de Jerusalén, que duró casi un siglo. En 1187, Saladino los venció en los Cuernos de Hattín, cerca del mar de Galilea, y recuperó Jerusalén. Los cruzados se mantuvieron en la costa, con capital en Acre, hasta que cayó en 1291.',
        'Las cruzadas son una herida en la historia del cristianismo. Se hicieron en nombre de la cruz, pero Jesús había dicho: «Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían» (Jn 18:36), y a Pedro le ordenó: «Vuelve tu espada a su lugar» (Mt 26:52). El evangelio se extiende por el testimonio y el amor, no por la espada.',
        { h: 'Los mamelucos' },
        'En 1260, los mamelucos, soldados que gobernaban Egipto, vencieron a los mongoles en Ain Jalut, junto a la fuente de Harod, en el valle de Jezreel, el mismo lugar donde Gedeón reunió a su ejército (Jue 7:1). Gobernaron la tierra hasta 1516. En ese tiempo la costa quedó casi despoblada, porque destruyeron los puertos para que los cruzados no volvieran.'
      ],
      pensar: 'Pablo enseñó a vencer el mal con el bien (Ro 12:21). ¿Qué te enseña la historia de las cruzadas sobre el peligro de defender la fe con las armas del mundo?'
    },
    {
      id: 'otomano', n: 'El imperio otomano', ref: 'Isaías 11:11-12; Jeremías 16:14-15; Amós 9:14', fecha: [1517, 1917],
      visual: [
        mapa({ view: [[29.3, 32.5], [37.5, 42.0]], capas: ['h-otomano'], lugares: ['jerusalen', 'damasco', 'safed', 'tiberias', 'hebron', 'acre', 'jope'] }),
        tabla({
          titulo: 'Fechas de este período',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1517', 'El sultán Selim I conquista la región y Egipto'],
            ['1537–1541', 'Solimán el Magnífico reconstruye las murallas de Jerusalén que se ven hoy'],
            ['1867', 'Mark Twain visita la tierra y la describe pobre y casi despoblada'],
            ['1882', 'Primera gran ola de inmigración judía (la primera aliá)'],
            ['1896–1897', 'Theodor Herzl publica «El Estado judío» y reúne el Primer Congreso Sionista en Basilea'],
            ['1909', 'Se funda Tel Aviv junto a Jafa'],
            ['1917', 'Las tropas británicas toman Beerseba (31 de octubre) y Jerusalén (9 a 11 de diciembre)']
          ],
          nota: 'Hacia 1914 vivían en la región unas 700.000 personas: la gran mayoría árabes musulmanes y cristianos, y unos 60.000 a 85.000 judíos (las cifras varían según la fuente).'
        })
      ],
      texto: [
        'En 1516 y 1517, el sultán otomano Selim I conquistó Siria, la tierra de Israel y Egipto. Durante cuatrocientos años, hasta 1917, la región fue una provincia lejana del imperio otomano, gobernada desde Damasco o desde Sidón, y dividida en distritos. Su hijo, Solimán el Magnífico, reconstruyó entre 1537 y 1541 las murallas de Jerusalén, las mismas que rodean hoy la ciudad antigua.',
        { h: 'Una tierra pobre' },
        'En los siglos siguientes, la tierra perdió población y riqueza. Los impuestos eran altos, los caminos inseguros por los asaltos de beduinos y muchas tierras bajas se convirtieron en pantanos. Los viajeros europeos del siglo XIX describían aldeas pobres, campos abandonados y una Jerusalén pequeña, de unos pocos miles de habitantes. El escritor estadounidense Mark Twain, que la visitó en 1867, la describió como una tierra triste y desolada. Muchos lectores de la Biblia vieron en ese abandono el cumplimiento de las advertencias de Levítico 26:32-33.',
        { h: 'Los judíos en la tierra' },
        'Durante todo este tiempo hubo comunidades judías en la tierra, sobre todo en las cuatro ciudades santas del judaísmo: Jerusalén, Hebrón, Safed y Tiberias. En Safed, en el siglo XVI, se reunió un importante grupo de maestros judíos. En el siglo XIX la comunidad judía de Jerusalén llegó a ser la más numerosa de la ciudad, y en 1860 se construyó el primer barrio fuera de las murallas.',
        'A partir de 1882, a causa de las persecuciones en Rusia y Rumania, llegaron grupos de judíos para fundar colonias agrícolas. En 1896, el periodista Theodor Herzl publicó «El Estado judío», y en 1897 reunió en Basilea el primer congreso del movimiento sionista, que buscaba un hogar nacional para el pueblo judío en la tierra de sus padres. En 1909 se fundó Tel Aviv. La población, sin embargo, seguía siendo en su gran mayoría árabe.',
        'En ese mismo siglo, muchos cristianos evangélicos de Gran Bretaña y Estados Unidos, al leer profecías como Isaías 11:11-12 y Amós 9:14-15, comenzaron a hablar del regreso de los judíos a su tierra como algo que Dios había prometido.',
        { h: 'El fin del imperio' },
        'En la Primera Guerra Mundial, el imperio otomano se alió con Alemania. Las tropas británicas avanzaron desde Egipto, tomaron Beerseba el 31 de octubre de 1917 y entraron en Jerusalén en diciembre. El general Allenby entró en la ciudad a pie, por respeto a su carácter sagrado. Terminaban cuatro siglos de gobierno otomano.'
      ],
      pensar: 'Dios prometió que la tierra «gozará sus días de reposo» mientras su pueblo estuviera lejos (Lv 26:34). ¿Qué te enseña la historia de esta tierra sobre la paciencia de Dios con sus promesas?'
    },
    {
      id: 'siglo20', n: 'Del mandato británico a 1948', ref: 'Ezequiel 37:21; Romanos 11:1-2; Efesios 2:14-16; Deuteronomio 10:18-19', fecha: [1917, 1949],
      visual: [
        pasos([
          { t: 'El mandato británico de Palestina (1922–1948); al este, el emirato de Transjordania.', fecha: 1922, estado: { view: V.siglo20, capas: ['h-mandato', 'h-transjordania'], lugares: ['jerusalen', 'tel-aviv', 'amman', 'acre', 'gaza'] } },
          { t: 'El plan de partición de la ONU (29 de noviembre de 1947): un Estado judío, un Estado árabe y Jerusalén bajo régimen internacional.', fecha: 1947, estado: { view: [[29.4, 33.9], [33.4, 35.9]], capas: ['p47-judio', 'p47-arabe', 'p47-corpus'], lugares: ['jerusalen', 'tel-aviv', 'jope', 'gaza', 'beerseba', 'acre'] } },
          { t: 'Las líneas del armisticio de 1949: Israel; Cisjordania bajo Jordania; la Franja de Gaza bajo Egipto.', fecha: 1949, estado: { view: [[29.4, 33.9], [33.4, 35.9]], capas: ['x-israel', 'x-cisjordania49', 'x-gaza49'], lugares: ['jerusalen', 'tel-aviv', 'gaza', 'beerseba', 'eilat'] } }
        ]),
        tabla({
          titulo: 'Fechas de este período',
          cab: ['Fecha', 'Hecho'],
          filas: [
            ['2 de noviembre de 1917', 'Declaración Balfour: Gran Bretaña apoya «un hogar nacional para el pueblo judío» en Palestina, sin perjuicio de los derechos de las comunidades no judías'],
            ['1922', 'La Sociedad de las Naciones aprueba el mandato británico; Transjordania queda aparte'],
            ['1929; 1936–1939', 'Disturbios y revuelta árabe contra la inmigración judía y el mandato'],
            ['1939', 'El Libro Blanco británico limita la inmigración judía'],
            ['1939–1945', 'El Holocausto: unos seis millones de judíos asesinados en Europa'],
            ['29 de noviembre de 1947', 'La Asamblea General de la ONU aprueba la partición (resolución 181: 33 votos a favor, 13 en contra y 10 abstenciones)'],
            ['14 de mayo de 1948', 'David Ben-Gurión proclama el Estado de Israel; al día siguiente lo atacan los ejércitos de varios Estados árabes'],
            ['1948–1949', 'Guerra; unos 700.000 árabes palestinos huyen o son expulsados; armisticios de 1949']
          ]
        })
      ],
      texto: [
        'Con el fin del imperio otomano, Gran Bretaña recibió de la Sociedad de las Naciones el mandato para administrar Palestina, con el encargo de facilitar el establecimiento de un hogar nacional judío, tal como había prometido en la Declaración Balfour de 1917, y a la vez proteger los derechos civiles y religiosos de los habitantes árabes. Al este del Jordán se formó un territorio aparte, el emirato de Transjordania, que en 1946 se convirtió en el reino de Jordania.',
        { h: 'Dos pueblos y una misma tierra' },
        'Durante el mandato llegaron cientos de miles de judíos, sobre todo de Europa oriental, que compraron tierras, drenaron pantanos, fundaron kibutz y ciudades. La población árabe también creció. Los dirigentes árabes se opusieron a la inmigración y al proyecto de un Estado judío, y hubo disturbios en 1920, 1921 y 1929, y una revuelta entre 1936 y 1939. En 1939, Gran Bretaña limitó la inmigración judía. Justo entonces, en Europa, la Alemania nazi asesinaba a unos seis millones de judíos en el Holocausto.',
        { h: 'La partición y la guerra' },
        'En 1947, Gran Bretaña entregó el problema a las Naciones Unidas. El 29 de noviembre de 1947, la Asamblea General aprobó un plan para dividir el territorio en un Estado judío y otro árabe, con Jerusalén bajo un régimen internacional. Los dirigentes judíos lo aceptaron; los dirigentes árabes y los Estados árabes lo rechazaron. Estalló una guerra civil, y el 14 de mayo de 1948, el día antes de que terminara el mandato, David Ben-Gurión proclamó la independencia del Estado de Israel. Al día siguiente lo atacaron los ejércitos de Egipto, Jordania, Siria, Irak y Líbano.',
        'La guerra terminó con los armisticios de 1949. Israel quedó con más territorio que el del plan de partición; Jordania tomó Cisjordania y la parte oriental de Jerusalén, con la ciudad antigua, y Egipto la Franja de Gaza. Unos 700.000 árabes palestinos huyeron o fueron expulsados de sus hogares, y no se les permitió volver. En los años siguientes, cientos de miles de judíos dejaron o fueron expulsados de países árabes y musulmanes, y la mayoría se estableció en Israel.',
        { posturas: {
          titulo: 'Dos memorias de 1948',
          a: { n: 'Para Israel y el pueblo judío', t: 'Es la independencia: el regreso a la tierra de los padres después de casi dos mil años de dispersión y pocos años después del Holocausto, aprobado por la ONU y defendido en una guerra contra varios ejércitos. Se recuerda cada año como Día de la Independencia.' },
          b: { n: 'Para los palestinos', t: 'Es la Nakba, «la catástrofe»: la pérdida de hogares, aldeas y tierras, y el comienzo de un problema de refugiados que, con sus descendientes, sigue sin resolverse. Se recuerda cada 15 de mayo.' },
          c: 'Las dos memorias se refieren a hechos reales y ninguna se entiende sin la otra. Este recurso no toma posición política. Un creyente puede reconocer la fidelidad de Dios con Israel, porque «No ha desechado Dios a su pueblo» (Ro 11:2), y a la vez amar, orar y obrar por la paz de judíos y árabes, recordando que Dios ama al extranjero (Dt 10:18-19) y que en Cristo se derriba la pared de enemistad (Ef 2:14-16).'
        } }
      ],
      pensar: 'Jesús dijo: «Bienaventurados los pacificadores» (Mt 5:9). ¿Cómo puedes orar hoy por la paz de Jerusalén (Sal 122:6) pensando en las personas concretas, judías y árabes, que viven allí?'
    },
    {
      id: 'hoy', n: 'De 1948 a hoy', ref: 'Salmo 122:6-9; Lucas 21:24; Mateo 5:9', fecha: [1949, 2026],
      visual: [
        pasos([
          { t: 'Después de la guerra de 1967: Israel controla Cisjordania, Jerusalén oriental, la Franja de Gaza, el Golán y el Sinaí.', fecha: 1967, estado: { view: V.siglo20, capas: ['x-israel', 'x-cisjordania', 'x-gaza', 'x-golan', 'x-sinai'], lugares: ['jerusalen', 'tel-aviv', 'gaza', 'eilat'] } },
          { t: 'Hoy (octubre de 2026): Israel; Cisjordania, con zonas de la Autoridad Palestina y zonas bajo control israelí; la Franja de Gaza; y el Golán.', fecha: 2026, estado: { view: [[29.4, 33.9], [33.45, 36.1]], capas: ['x-israel', 'x-cisjordania-hoy', 'x-gaza-hoy', 'x-golan-hoy'], lugares: ['jerusalen', 'tel-aviv', 'gaza', 'eilat'] } }
        ]),
        tabla({
          titulo: 'Fechas desde 1948',
          cab: ['Fecha', 'Hecho'],
          filas: [
            ['5 a 10 de junio de 1967', 'Guerra de los Seis Días; Jerusalén queda bajo control israelí'],
            ['1973', 'Guerra de Yom Kipur'],
            ['1979; 1982', 'Paz con Egipto; Israel devuelve el Sinaí'],
            ['1980; 1981', 'Ley de Jerusalén; Israel aplica su ley en el Golán'],
            ['1987; 2000', 'Primera y segunda intifada palestina'],
            ['1993–1995', 'Acuerdos de Oslo; nace la Autoridad Palestina'],
            ['1994', 'Paz con Jordania'],
            ['2005; 2007', 'Israel se retira de Gaza; Hamás toma el control de la Franja'],
            ['2020', 'Acuerdos de Abraham con Emiratos, Baréin, Marruecos y Sudán'],
            ['7 de octubre de 2023', 'Ataque de Hamás: unas 1.200 personas muertas y 251 secuestradas; comienza la guerra en Gaza'],
            ['10 de octubre de 2025', 'Alto el fuego en Gaza; vuelven los rehenes vivos'],
            ['2026', 'Guerra con Irán (desde el 28 de febrero) y con Hezbolá en el Líbano (desde el 2 de marzo); tregua en el Líbano desde el 16 de abril']
          ],
          nota: 'Situación descrita al 21 de octubre de 2026. Este texto se revisa periódicamente.'
        })
      ],
      texto: [
        'Desde 1948, la historia de la tierra ha estado marcada por guerras, acuerdos de paz y un conflicto entre israelíes y palestinos que sigue sin resolverse. Esta estación resume los hechos principales con sus fechas, sin tomar posición política, y describe la situación a octubre de 2026.',
        { h: '1967 y Jerusalén' },
        'En junio de 1967, tras semanas de tensión con Egipto, Siria y Jordania, Israel ganó en seis días una guerra que le dio el control de la península del Sinaí, la Franja de Gaza, Cisjordania con Jerusalén oriental y los altos del Golán. Por primera vez desde el año 70, la ciudad antigua de Jerusalén y el monte del templo quedaron bajo un gobierno judío, aunque Israel dejó la administración de la explanada en manos de una fundación islámica. En 1980 declaró a Jerusalén unida como su capital, pero la mayoría de los países mantienen sus embajadas en Tel Aviv; los palestinos reclaman Jerusalén oriental como capital de su Estado.',
        { h: 'Oslo, Gaza y el 7 de octubre' },
        'Los acuerdos de Oslo (1993–1995) crearon la Autoridad Palestina, que gobierna parte de Cisjordania, mientras otras zonas siguen bajo control israelí, con asentamientos israelíes. En 2005 Israel se retiró de Gaza, y en 2007 el movimiento islamista Hamás tomó el control de la Franja. El 7 de octubre de 2023, Hamás atacó el sur de Israel: murieron unas 1.200 personas y 251 fueron llevadas como rehenes. Israel respondió con una guerra en Gaza que causó una enorme destrucción; según el Ministerio de Salud de Gaza, dependiente de Hamás, los muertos palestinos superaban los 70.000 a fines de 2025.',
        { h: 'La situación a octubre de 2026' },
        'El 10 de octubre de 2025 comenzó un alto el fuego en Gaza dentro de un plan de veinte puntos promovido por Estados Unidos, y volvieron los rehenes vivos; el último cuerpo fue recuperado en enero de 2026. Un año después, el alto el fuego se mantiene pero es frágil: la segunda fase, que incluye el desarme de Hamás y la retirada israelí, sigue estancada, y las tropas israelíes controlan parte de la Franja. En 2026 hubo además una guerra con Irán, desde el 28 de febrero, y combates con Hezbolá en el Líbano, con una tregua desde el 16 de abril.',
        'Israel tiene unos 10,3 millones de habitantes (septiembre de 2026): cerca del 78 % judíos y otros, y cerca del 22 % árabes. Allí vive casi la mitad de los judíos del mundo. Más de cinco millones de palestinos viven en Cisjordania y Gaza. En 2025, Francia, el Reino Unido, Canadá, Australia y otros países reconocieron al Estado de Palestina, al que reconocen 157 de los 193 miembros de la ONU.',
        { h: 'Cómo lo mira un creyente' },
        'Los cristianos ven estos hechos de maneras distintas, como explica la ruta VI. Pero todos pueden obedecer el mandato del salmo: «Pedid por la paz de Jerusalén» (Sal 122:6), y recordar que Dios ama a israelíes y palestinos, y que hay creyentes en Jesús en ambos pueblos.',
        ir('Ver qué enseña la Biblia sobre el futuro de la tierra', '#plan/6')
      ],
      pensar: 'Orar por la paz de Jerusalén es orar por personas con nombre y familia. ¿Por quiénes concretamente puedes orar hoy, en Israel, en Gaza y en Cisjordania?'
    }
  ];
