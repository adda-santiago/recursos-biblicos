  // ================== RUTA V. El siglo de las misiones (1792-1910) ==================
  const misiones = [
    {
      id: 'carey', n: 'William Carey', ref: 'Isaías 54:2-3; Romanos 10:14-15; Mateo 28:19-20', fecha: [1792, 1834],
      visual: [
        img('serampore.webp', 'Taller de imprenta de la misión de Serampore, en Bengala, hacia 1810: impresores bengalíes con dhoti y un europeo con chaleco revisan pliegos con letra bengalí junto a una prensa de madera; estantes con pilas de libros y un gran ventanal con palmeras afuera', 'La imprenta de la misión de Serampore, en la India (recreación; personas anónimas).'),
        mapa({ view: V.mundo, lugares: ['h-londres', 'h-ciudad-del-cabo', 'h-serampore'], trazos: ['h-t-carey'] }, 'El viaje de Carey (1793)')
      ],
      texto: [
        'Guillermo Carey nació en 1761 en una aldea de Inglaterra. Era zapatero, pobre y casi sin escuela, pero aprendió solo latín, griego, hebreo, francés y holandés. En su taller tenía un mapa del mundo hecho a mano, donde anotaba la población y la religión de cada país, que sacaba de los relatos de viaje del capitán Cook. Mientras arreglaba zapatos, oraba por los pueblos que nunca habían oído el evangelio.',
        { h: 'Un llamado a toda la iglesia' },
        'Carey se hizo pastor bautista y planteó a sus colegas una pregunta: ¿no seguía vigente el mandato de hacer discípulos a todas las naciones? Según una tradición, un pastor mayor le respondió que, si Dios quería convertir a los paganos, lo haría sin su ayuda. Carey no se calló. En 1792 publicó un estudio sobre la obligación de los cristianos de usar medios para la conversión de los pueblos no cristianos, y predicó un sermón sobre Isaías 54: «Ensancha el sitio de tu tienda … alarga tus cuerdas, y refuerza tus estacas» (Is 54:2). Su consejo se resume en dos frases que se hicieron famosas: esperar grandes cosas de Dios, emprender grandes cosas para Dios. Ese mismo año se fundó la Sociedad Misionera Bautista.',
        { h: 'Cuarenta años en la India' },
        'En 1793 Carey viajó a la India con su familia. Los primeros años fueron durísimos: pobreza, enfermedad, la muerte de un hijo y la enfermedad mental de su esposa. Pasaron siete años antes de que se convirtiera el primer bengalí, Krishna Pal, en 1800. Ese año Carey se estableció en Serampore, una colonia danesa cerca de Calcuta, con otros dos misioneros, Joshua Marshman y William Ward. Juntos fundaron una iglesia, escuelas, un colegio y una imprenta. En 1812 un incendio destruyó la imprenta y años de manuscritos de traducción; Carey lloró, oró y volvió a empezar.',
        'Carey y sus colaboradores tradujeron la Biblia completa a seis lenguas de la India y partes de ella a otras veintinueve. Carey luchó también contra la costumbre de quemar viudas en la pira funeraria del marido, que el gobierno británico prohibió en 1829. Murió en Serampore en 1834.',
        { h: '¿El padre de las misiones modernas?' },
        'A Carey se le llama a menudo el padre de las misiones modernas. No fue el primero, porque antes habían salido los misioneros de Halle y los moravos, pero su llamado despertó a las iglesias de habla inglesa y dio origen a decenas de sociedades misioneras. En pocos años se fundaron la Sociedad Misionera de Londres (1795), la de la Iglesia Anglicana (1799) y muchas más, y comenzó lo que los historiadores llaman el gran siglo de las misiones.',
        { ejercicio: {
          pregunta: '¿Qué hizo Carey para despertar a las iglesias a la misión?',
          opciones: [
            { t: 'Esperó a que Dios convirtiera a los pueblos sin intervención humana.', ok: false, por_que: 'Esa era la idea que Carey combatió: él insistió en que los cristianos debían usar medios para llevar el evangelio.' },
            { t: 'Publicó un llamado a la obligación misionera, predicó sobre Isaías 54 y se ofreció él mismo para ir.', ok: true, por_que: 'Carey escribió, predicó, ayudó a fundar una sociedad misionera y partió a la India en 1793.' },
            { t: 'Pidió al rey de Inglaterra que enviara soldados para proteger a los misioneros.', ok: false, por_que: 'Carey no dependió del poder político; de hecho, la Compañía de las Indias Orientales se oponía a los misioneros.' }
          ],
          explicacion: 'Carey unió la convicción bíblica, la oración, la organización y la entrega personal. «¿Cómo predicarán si no fueren enviados?» (Ro 10:15).'
        } }
      ],
      pensar: 'Carey oraba por las naciones mientras hacía su trabajo de zapatero. ¿Cómo podrías unir tu trabajo diario con la oración por los pueblos que no conocen a Cristo?'
    },
    {
      id: 'sociedades', n: 'Las sociedades bíblicas', ref: 'Romanos 10:17; Isaías 55:11; Salmo 119:105', fecha: [1804, 1946],
      visual: [
        tabla({
          titulo: 'Las sociedades bíblicas',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1800', 'Según la tradición, Mary Jones camina unos 40 km en Gales para comprar una Biblia'],
            ['1804', 'Se funda en Londres la Sociedad Bíblica Británica y Extranjera'],
            ['1816', 'Se funda la Sociedad Bíblica Americana, en Nueva York'],
            ['Siglo XIX', 'Agentes y colportores llevan la Biblia a América Latina, Asia y África'],
            ['1946', 'Se forman las Sociedades Bíblicas Unidas'],
            ['1960', 'Las Sociedades Bíblicas publican la revisión Reina-Valera 1960']
          ]
        }),
        cita('Isaías 55:10-11', '@@is/55/10-11')
      ],
      texto: [
        'Una de las grandes obras del siglo XIX fue poner la Biblia al alcance de todos. Se cuenta que en 1800 una muchacha galesa llamada Mary Jones ahorró durante seis años para comprar una Biblia y caminó unos cuarenta kilómetros, descalza, hasta el pueblo de Bala, donde el pastor Tomás Charles tenía algunos ejemplares. La historia conmovió a Charles, que planteó en Londres una pregunta: si Gales necesitaba Biblias, ¿por qué no también el resto del mundo?',
        { h: 'Una Biblia sin notas para todos' },
        'En 1804 se fundó en Londres la Sociedad Bíblica Británica y Extranjera, con un propósito sencillo: imprimir y distribuir la Biblia, sin notas ni comentarios, al precio más bajo posible, en todas las lenguas. Al no incluir notas, anglicanos, metodistas, bautistas y otros podían trabajar juntos. En 1816 se fundó la Sociedad Bíblica Americana, y luego muchas más en Europa y en otros continentes. En un siglo distribuyeron cientos de millones de Biblias y porciones y patrocinaron traducciones a cientos de lenguas.',
        { h: 'Los colportores' },
        'Para llevar la Biblia a los pueblos, las sociedades contrataban colportores: vendedores ambulantes de Biblias que recorrían caminos y aldeas a pie o a lomo de mula. Muchos eran creyentes sencillos que además de vender explicaban la Escritura y oraban con las personas. En América Latina fueron muchas veces los primeros evangélicos que conoció un pueblo, y algunos fueron encarcelados o apedreados, como se verá en la ruta VII.',
        'Las sociedades vendían las Biblias a un precio bajo, en lugar de regalarlas, porque habían comprobado que lo que se compra se valora más. Pero nunca dejaron de ayudar a los más pobres.',
        { h: 'La Biblia que lees' },
        'Las Sociedades Bíblicas Unidas, que reúnen a las sociedades nacionales desde 1946, son las que publicaron la Reina-Valera 1960, la Biblia de la mayoría de los evangélicos de habla hispana, que este sitio cita en todos sus recursos. Cada vez que abres tu Biblia tienes en las manos el fruto de dos siglos de trabajo de estas sociedades. Dios prometió: «así será mi palabra que sale de mi boca; no volverá a mí vacía» (Is 55:11).'
      ],
      pensar: 'Mary Jones caminó cuarenta kilómetros por una Biblia. ¿Qué estás dispuesto a hacer tú para leerla, estudiarla y ponerla en manos de otros?'
    },
    {
      id: 'asia', n: 'El evangelio en Asia', ref: '1 Corintios 9:22; Juan 12:24; Hechos 20:24', fecha: [1807, 1907],
      visual: [
        foto('hudson-taylor.jpg', 'Fotografía de Hudson Taylor hacia 1865: un hombre de unos treinta años, de cabello claro peinado hacia atrás y patillas, con ropa oscura y cuello blanco', 'Hudson Taylor hacia 1865, año en que fundó la Misión al Interior de China.', 'Dominio público, vía Wikimedia Commons', 'Foto'),
        pasos([
          { t: 'Roberto Morrison en Cantón (1807)', fecha: 1807, estado: { view: V.asia, lugares: ['h-canton'] } },
          { t: 'Adoniram Judson en Birmania (1813)', fecha: 1813, estado: { view: V.asia, lugares: ['h-canton', 'h-rangun'] } },
          { t: 'Hudson Taylor llega a Shanghái (1854)', fecha: 1854, estado: { view: V.mundo, lugares: ['h-liverpool', 'h-canton', 'h-rangun', 'h-shanghai'], trazos: ['h-t-taylor'] } },
          { t: 'El avivamiento de Pionyang, Corea (1907)', fecha: 1907, estado: { view: V.asia, lugares: ['h-canton', 'h-rangun', 'h-shanghai', 'h-pyongyang', 'h-seul'] } }
        ], 'Misiones en Asia')
      ],
      texto: [
        'Asia era el continente más poblado y el más difícil para los misioneros: grandes civilizaciones con religiones antiguas, gobiernos que prohibían el cristianismo y lenguas muy distintas de las europeas.',
        { h: 'Morrison y Judson' },
        'Roberto Morrison llegó a Cantón en 1807, cuando era ilegal enseñar chino a un extranjero. Trabajó como traductor de una compañía comercial y, en secreto, tradujo la Biblia al chino, que se publicó completa en 1823. En 27 años vio muy pocos convertidos, pero abrió la puerta para los que vendrían. Adoniram Judson y su esposa Ana llegaron a Birmania en 1813. Durante una guerra con Inglaterra, Judson pasó más de un año y medio en la cárcel en condiciones terribles, y Ana lo mantuvo vivo llevándole comida. Ana murió poco después. Judson terminó la Biblia en birmano en 1834, y al morir dejó miles de creyentes, sobre todo entre el pueblo karen.',
        { h: 'Hudson Taylor' },
        'Hudson Taylor llegó a China en 1854, con 21 años. Pronto tomó una decisión que escandalizó a otros misioneros: se vistió como un maestro chino, se dejó la trenza y vivió como la gente del lugar, porque quería que el evangelio no pareciera una religión extranjera. Pablo dijo: «a todos me he hecho de todo, para que de todos modos salve a algunos» (1 Co 9:22). En 1865, preocupado por los millones de chinos del interior que nunca habían oído de Cristo, fundó la Misión al Interior de China, que no pedía dinero a nadie sino que confiaba en la oración. Al morir Taylor, en 1905, la misión tenía cientos de misioneros. En la rebelión de los bóxers, en 1900, murieron decenas de ellos junto con miles de cristianos chinos.',
        { h: 'Corea' },
        'Los primeros misioneros evangélicos llegaron a Corea en 1884 y 1885. Desde el principio animaron a los coreanos a sostener sus propias iglesias, a estudiar la Biblia en grupos y a evangelizar a sus vecinos. En enero de 1907, en Pionyang, durante una reunión de estudio bíblico, la congregación vivió un avivamiento con confesión pública de pecados, llanto y oración en voz alta de todos a la vez. De allí se extendió por todo el país. Hoy Corea del Sur es uno de los países que más misioneros envía al mundo.',
        'La historia de Asia muestra que la semilla a veces tarda en germinar. Jesús dijo: «si el grano de trigo no cae en la tierra y muere, queda solo; pero si muere, lleva mucho fruto» (Jn 12:24). Hoy hay más de cuatrocientos millones de cristianos en Asia.'
      ],
      pensar: 'Hudson Taylor dejó sus costumbres para que el evangelio no pareciera extranjero. ¿Qué costumbres de tu iglesia podrían ser un obstáculo para que tus vecinos escuchen el evangelio, y cuáles son esenciales?'
    },
    {
      id: 'africa', n: 'El evangelio en África', ref: 'Hechos 8:26-39; Apocalipsis 7:9; Salmo 126:5-6', fecha: [1816, 1891],
      visual: [
        foto('crowther.jpg', 'Retrato enmarcado del obispo Samuel Ajayi Crowther, un hombre africano mayor de cabello canoso con vestiduras de obispo anglicano, expuesto en un museo de Badagry, Nigeria', 'Samuel Ajayi Crowther, primer obispo anglicano africano (1864), en el museo de Badagry.', 'Foto: Yemi Festus, CC BY 3.0, vía Wikimedia Commons', 'Foto'),
        mapa({ view: V.africa, lugares: ['h-freetown', 'h-abeokuta', 'h-kuruman', 'h-victoria', 'h-ciudad-del-cabo'] }, 'Mapa')
      ],
      texto: [
        'El cristianismo no era nuevo en África: desde los primeros siglos había iglesias en Egipto y Etiopía, y el eunuco etíope fue uno de los primeros convertidos fuera de Israel (Hch 8:27-39). Pero en el siglo XIX la mayor parte del continente nunca había oído el evangelio, y gran parte de su costa sufría el tráfico de esclavos.',
        { h: 'Un precio muy alto' },
        'Los misioneros que fueron a África occidental pagaron un precio terrible. La malaria y la fiebre amarilla mataron a tantos en los primeros años que la región fue llamada la tumba del hombre blanco. Muchos misioneros murieron a los pocos meses de llegar, y sin embargo otros seguían ofreciéndose. Hoy se visitan en la costa africana cementerios llenos de tumbas de misioneros jóvenes.',
        { h: 'Livingstone' },
        'En el sur, Roberto Moffat trabajó medio siglo en Kuruman y tradujo la Biblia a la lengua tswana. Su yerno, David Livingstone, médico y misionero escocés, recorrió el interior de África durante treinta años, cruzó el continente de costa a costa y fue el primer europeo en ver las cataratas Victoria, en 1855. Denunció con fuerza el tráfico de esclavos que todavía hacían comerciantes árabes y portugueses. Murió en 1873 en una aldea de la actual Zambia, de rodillas junto a su cama; sus compañeros africanos enterraron su corazón allí y llevaron su cuerpo hasta la costa.',
        { h: 'Samuel Ajayi Crowther' },
        'Samuel Ajayi Crowther era un niño yoruba cuando fue capturado y vendido como esclavo en 1821. El barco que lo llevaba fue interceptado por la marina británica, y Crowther fue liberado en Freetown, Sierra Leona, donde conoció a Cristo. Estudió, fue ordenado pastor, tradujo la Biblia al yoruba y en 1864 fue consagrado obispo: el primer obispo anglicano africano. El niño que iba a ser esclavo llegó a ser pastor de su pueblo.',
        { posturas: {
          titulo: 'Las misiones y el colonialismo',
          a: { n: 'Crítica', t: 'Muchos misioneros llegaron junto con los imperios europeos, se beneficiaron de su protección y a veces confundieron el evangelio con la cultura europea, despreciando las culturas africanas y asiáticas.' },
          b: { n: 'Matiz', t: 'Muchos misioneros se opusieron a los abusos coloniales, defendieron a los pueblos locales y tradujeron la Biblia a sus lenguas, lo que ayudó a preservarlas. Investigaciones recientes muestran que donde hubo más misiones protestantes hubo más escuelas y alfabetización, y que la iglesia creció más rápido después de la independencia, cuando quedó en manos africanas.' },
          c: 'Las dos cosas son verdad. El evangelio no es europeo ni de ninguna cultura, y su mejor prueba fue lo que pasó después: los propios africanos lo hicieron suyo y lo llevaron a sus pueblos. En 1900 había unos diez millones de cristianos en África; en 2026 hay casi 780 millones.'
        } }
      ],
      pensar: '«Los que sembraron con lágrimas, con regocijo segarán» (Sal 126:5). ¿Qué te enseña el sacrificio de los misioneros que murieron en África sobre el valor de sembrar aunque no veas el fruto?'
    },
    {
      id: 'abolicion', n: 'La abolición de la esclavitud', ref: 'Éxodo 21:16; 1 Timoteo 1:10; Gálatas 3:28; Filemón 1:16', fecha: [1787, 1888],
      visual: [
        img('emancipacion.webp', 'En una capilla sencilla de madera en Jamaica, a medianoche del 31 de julio de 1834, hombres, mujeres y niños afrodescendientes, recién liberados, están de rodillas o de pie con las manos levantadas, algunos llorando de alegría; un reloj de pared marca las doce y la luz de velas ilumina la escena', 'Medianoche del 1 de agosto de 1834: entra en vigor la abolición en las colonias británicas (recreación; personas anónimas).'),
        tabla({
          titulo: 'Fechas de la abolición',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1787', 'Se forma en Londres la Sociedad para la Abolición del Tráfico de Esclavos'],
            ['1807', 'Gran Bretaña prohíbe el tráfico de esclavos'],
            ['1823', 'Chile declara la abolición de la esclavitud'],
            ['1833-1834', 'Gran Bretaña abole la esclavitud en sus colonias'],
            ['1865', 'Estados Unidos abole la esclavitud tras la guerra civil'],
            ['1888', 'Brasil, el último país de América en abolirla']
          ]
        })
      ],
      texto: [
        'Durante siglos, millones de africanos fueron capturados, llevados a América en condiciones inhumanas y obligados a trabajar como esclavos. Lo más triste es que muchos que se decían cristianos participaron en ese comercio o se beneficiaron de él, y algunos usaron la Biblia para justificarlo. Pero también fueron cristianos los que más lucharon para terminarlo.',
        { h: 'Wilberforce y sus amigos' },
        'Los primeros en oponerse en forma organizada fueron los cuáqueros. Luego se sumaron evangélicos anglicanos, metodistas y bautistas. Juan Newton había sido capitán de un barco negrero; después de su conversión fue pastor, escribió el himno «Sublime gracia» y denunció públicamente el tráfico que él mismo había practicado. Guillermo Wilberforce, un joven diputado convertido en 1785, dedicó su vida a la abolición. Con un grupo de amigos evangélicos presentó proyectos de ley año tras año durante dos décadas, recogió firmas, publicó testimonios y soportó burlas y amenazas. En 1807 el Parlamento prohibió el tráfico de esclavos, y en 1833, tres días antes de que Wilberforce muriera, aprobó la abolición de la esclavitud en las colonias británicas. Juan Wesley, en su última carta, lo había animado a seguir adelante.',
        { h: 'En América' },
        'En Estados Unidos la esclavitud dividió a las iglesias: metodistas y bautistas se separaron en una rama del norte y otra del sur. Muchos evangélicos, como el predicador Carlos Finney, fueron abolicionistas, mientras otros defendían la esclavitud con versículos sacados de contexto. Hizo falta una guerra civil para terminarla, en 1865. En América Latina, la abolición llegó con las repúblicas: Chile la declaró en 1823, y Brasil fue el último país del continente, en 1888.',
        { h: 'Una lección de interpretación' },
        'Los defensores de la esclavitud citaban los pasajes que regulan la servidumbre en Israel o que piden a los siervos obedecer. Los abolicionistas respondían con la Biblia entera: la ley de Moisés castigaba con la muerte a quien secuestrara una persona para venderla, «el que robare una persona y la vendiere … morirá» (Éx 21:16); Pablo pone a los «secuestradores» entre los que se oponen a la sana doctrina (1 Ti 1:10); en Cristo «no hay esclavo ni libre» (Gá 3:28), y Pablo pide recibir a Onésimo «no ya como esclavo, sino como más que esclavo, como hermano amado» (Flm 1:16). El tráfico de esclavos de los siglos XVI al XIX era justamente secuestro y venta de personas.',
        { ejercicio: {
          pregunta: '¿Qué error de interpretación cometían quienes usaban la Biblia para defender la esclavitud?',
          opciones: [
            { t: 'Tomaban versículos aislados y no consideraban el mensaje de toda la Escritura sobre la dignidad humana.', ok: true, por_que: 'Citaban pasajes que regulan una realidad de su tiempo, pero ignoraban que la Biblia condena el secuestro de personas y que en Cristo todos son hermanos.' },
            { t: 'Usaban una traducción equivocada de la Biblia.', ok: false, por_que: 'El problema no era la traducción, sino la manera de leer y aplicar los textos.' },
            { t: 'Leían solo el Nuevo Testamento.', ok: false, por_que: 'Citaban pasajes de ambos Testamentos; el problema era sacarlos de su contexto y del mensaje completo.' }
          ],
          explicacion: 'Un texto fuera de contexto se puede usar para defender casi cualquier cosa. Por eso la Escritura se interpreta con la Escritura, leyendo cada pasaje dentro del mensaje completo de la Biblia.'
        } }
      ],
      pensar: 'Wilberforce perseveró veinte años en una causa justa. ¿Qué injusticia de tu entorno podrías ayudar a enfrentar desde tu fe, con oración y perseverancia (Pr 31:8-9)?'
    },
    {
      id: 'predicadores', n: 'Avivamientos y grandes predicadores', ref: 'Hechos 3:19; 2 Timoteo 4:2; Mateo 9:37-38', fecha: [1801, 1899],
      visual: [
        img('campamento.webp', 'Una reunión campestre en Kentucky en 1801, de noche: una multitud de familias de colonos rodea una plataforma de troncos donde predica un hombre con levita; hay fogatas, carretas y tiendas de lona entre los árboles; algunas personas están de rodillas y otras con las manos levantadas', 'Una reunión campestre del Segundo Gran Despertar (recreación; personas anónimas).'),
        mapa({ view: V.atlantico, lugares: ['h-cane-ridge', 'h-rochester', 'h-londres', 'h-chicago'] }, 'Mapa')
      ],
      texto: [
        'A comienzos del siglo XIX, Norteamérica vivió un segundo gran avivamiento. En agosto de 1801, en un lugar llamado Cane Ridge, en Kentucky, se reunieron miles de colonos en una reunión campestre que duró casi una semana. Predicadores presbiterianos, metodistas y bautistas hablaban al mismo tiempo desde distintas plataformas, y muchas personas se convertían con llanto, gritos y caídas. Desde entonces, las reuniones campestres se volvieron una costumbre de las iglesias de la frontera.',
        { h: 'Carlos Finney' },
        'Carlos Finney era abogado cuando se convirtió en 1821, en una experiencia que él describió como olas de amor que lo inundaban. Se hizo predicador y llevó el avivamiento a las ciudades, como Rochester, en 1830. Introdujo «nuevas medidas»: reuniones durante muchos días seguidos, llamados a pasar adelante y oración por los que buscaban la salvación. Enseñaba que un avivamiento no es un milagro que solo hay que esperar, sino el resultado de usar los medios que Dios ha dado: oración, predicación y arrepentimiento. Otros, como Edwards un siglo antes, insistían en que el avivamiento es una obra soberana de Dios. Ambas cosas tienen su lugar en la Escritura: Dios promete sanar la tierra de su pueblo, si su pueblo se humilla y ora (2 Cr 7:14).',
        { h: 'Spurgeon y Moody' },
        'En Londres, Carlos Spurgeon, un bautista que llegó como pastor a los diecinueve años, llenó cada domingo durante décadas el Tabernáculo Metropolitano, con capacidad para unas cinco mil personas. Sus sermones se imprimían cada semana y se leían en todo el mundo. En Estados Unidos, Dwight L. Moody, un vendedor de zapatos casi sin estudios, se convirtió en el evangelista más conocido de su tiempo. Con el cantante Ira Sankey predicó a multitudes en Gran Bretaña y Estados Unidos, y fundó en Chicago un instituto bíblico para formar obreros.',
        { h: 'Los estudiantes voluntarios' },
        'En 1886, en un encuentro de estudiantes organizado por Moody, cien jóvenes universitarios firmaron un compromiso: si Dios lo permitía, serían misioneros en el extranjero. Así nació el Movimiento Estudiantil Voluntario, con un lema audaz: la evangelización del mundo en esta generación. En las décadas siguientes, más de veinte mil jóvenes partieron como misioneros. Jesús había dicho: «Rogad, pues, al Señor de la mies, que envíe obreros a su mies» (Mt 9:38).'
      ],
      pensar: 'Cien estudiantes cambiaron la historia misionera al decir «iré si Dios lo permite». ¿Hay algún joven en tu iglesia al que podrías animar a considerar el llamado misionero?'
    },
    {
      id: 'santidad', n: 'El movimiento de santidad', ref: '1 Tesalonicenses 5:23; Hebreos 12:14; Mateo 3:11; Santiago 5:14-15', fecha: [1835, 1900],
      visual: [
        tabla({
          titulo: 'Del «evangelio cuádruple» al «evangelio completo»',
          cab: ['Simpson y la santidad (1880)', 'Los pentecostales (1906-1914)'],
          filas: [
            ['Jesús salva', 'Jesús salva'],
            ['Jesús santifica', 'Jesús bautiza con el Espíritu Santo'],
            ['Jesús sana', 'Jesús sana'],
            ['Jesús viene otra vez', 'Jesús viene otra vez']
          ],
          nota: 'Muchas iglesias pentecostales enseñan las cinco verdades: salvación, santificación, bautismo en el Espíritu Santo, sanidad divina y segunda venida de Cristo.'
        }),
        cita('Mateo 3:11', '@@mt/3/11')
      ],
      texto: [
        'Juan Wesley había enseñado que Dios quiere santificar por completo a sus hijos, librándolos del dominio del pecado y llenándolos de amor. En el siglo XIX, algunos metodistas sintieron que sus iglesias, ya grandes y respetables, estaban olvidando esa enseñanza. Así nació el movimiento de santidad, que buscaba una vida consagrada y una experiencia de santificación posterior a la conversión.',
        { h: 'Febe Palmer y las reuniones campestres' },
        'En Nueva York, una mujer metodista llamada Febe Palmer dirigió durante décadas una reunión de los martes dedicada a la santidad, a la que asistían obispos, pastores y laicos. Enseñaba que el creyente puede consagrarse por completo a Dios, poniendo todo sobre el altar, y recibir por fe la santificación. Después de la guerra civil, en 1867, se organizaron grandes reuniones campestres de santidad a las que asistían decenas de miles de personas. En Inglaterra, desde 1875, la convención de Keswick reunía cada año a creyentes que buscaban una vida cristiana victoriosa.',
        { h: 'El lenguaje del bautismo del Espíritu' },
        'Poco a poco, el movimiento empezó a hablar de esa experiencia como el «bautismo del Espíritu Santo», recordando las palabras de Juan el Bautista: «él os bautizará en Espíritu Santo y fuego» (Mt 3:11). Algunos lo entendían sobre todo como purificación del corazón; otros, como una investidura de poder para servir, como la que recibieron los discípulos en Pentecostés (Hch 1:8). Muchos creyentes oraban por un nuevo Pentecostés al comenzar el siglo XX.',
        { h: 'Sanidad divina' },
        'El movimiento de santidad también recuperó la oración por los enfermos. Santiago dice: «¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor» (Stg 5:14). Se abrieron casas de sanidad para orar por enfermos, y Alberto Simpson, fundador de la Alianza Cristiana y Misionera, resumió el mensaje en un «evangelio cuádruple»: Jesús salva, santifica, sana y viene otra vez.',
        'De este ambiente salió, pocos años después, el movimiento pentecostal. Los primeros pentecostales conservaron casi todo lo que habían aprendido en la santidad: la búsqueda de la consagración, la oración por los enfermos, la espera de la venida de Cristo y muchos himnos. Pero entendieron el bautismo en el Espíritu Santo como una experiencia de poder distinta de la conversión, acompañada de la señal de hablar en otras lenguas, como en Hechos 2:4. La tabla muestra ese cambio.',
        { ejercicio: {
          pregunta: '¿Qué cambiaron los pentecostales en el «evangelio cuádruple» del movimiento de santidad?',
          opciones: [
            { t: 'Quitaron la sanidad divina.', ok: false, por_que: 'Los pentecostales mantuvieron con fuerza la oración por los enfermos.' },
            { t: 'Pusieron en el centro a Jesús que bautiza con el Espíritu Santo.', ok: true, por_que: 'El bautismo en el Espíritu, con la señal de hablar en lenguas, pasó a ser la marca distintiva del pentecostalismo; muchas iglesias mantuvieron también la santificación.' },
            { t: 'Dejaron de esperar la segunda venida de Cristo.', ok: false, por_que: 'Al contrario, los primeros pentecostales vivían con una fuerte expectativa de la venida de Cristo.' }
          ],
          explicacion: 'El pentecostalismo nació dentro de la santidad y conservó la mayor parte de su mensaje, pero puso en el centro la promesa de Hechos 1:5: «seréis bautizados con el Espíritu Santo».'
        } }
      ],
      pensar: '«Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor» (He 12:14). ¿Qué área de tu vida necesitas poner hoy sobre el altar?'
    },
    {
      id: 'liberalismo', n: 'El liberalismo teológico', ref: '2 Timoteo 3:16; 2 Pedro 1:20-21; 1 Corintios 15:3-4', fecha: [1799, 1900],
      visual: [
        tabla({
          titulo: 'Las ideas y las respuestas',
          cab: ['Año', 'Idea liberal', 'Respuesta evangélica'],
          filas: [
            ['1799', 'Schleiermacher: la religión es un sentimiento de dependencia, no una doctrina revelada', 'La fe se basa en lo que Dios ha revelado en su Palabra'],
            ['1835', 'Strauss: los milagros de los evangelios son mitos', 'Los evangelios son testimonio de testigos (Lc 1:1-4)'],
            ['1859', 'Darwin publica El origen de las especies; muchos lo usan para negar la creación', 'Dios es el Creador, cualquiera sea la forma en que se discuta el cómo'],
            ['1878', 'Wellhausen: el Pentateuco es una suma de documentos tardíos', 'Jesús cita a Moisés como autor de la ley (Jn 5:46)'],
            ['1881', '—', 'A. A. Hodge y B. B. Warfield defienden la inspiración y la inerrancia'],
            ['1887', '—', 'Spurgeon denuncia la «pendiente» de las iglesias que abandonan la Biblia']
          ]
        }),
        cita('2 Pedro 1:20-21', '@@2p/1/20-21')
      ],
      texto: [
        'Mientras los misioneros llevaban la Biblia a todo el mundo, en las universidades de Europa crecía una corriente que ponía en duda su autoridad. Las ideas de la Ilustración entraron en la teología y dieron origen a lo que se llamó el liberalismo teológico.',
        { h: 'Una fe sin lo sobrenatural' },
        'El teólogo alemán Federico Schleiermacher quiso hacer la fe aceptable para las personas cultas de su tiempo. Enseñó que la religión no es un conjunto de doctrinas reveladas, sino un sentimiento de dependencia de Dios. Sus seguidores fueron más lejos. Algunos estudiosos afirmaron que los milagros de los evangelios eran mitos, que muchos libros de la Biblia se escribieron mucho después de lo que dicen y que Jesús había sido un gran maestro moral pero no Dios hecho hombre. A fines del siglo, el historiador Adolfo von Harnack resumió el cristianismo en la paternidad de Dios, la hermandad de los hombres y el valor del alma humana, sin cruz como sacrificio ni resurrección corporal.',
        'La teoría de la evolución de Carlos Darwin, publicada en 1859, fue usada por muchos para sostener que el mundo no necesitaba un Creador. En pocas décadas, buena parte de las universidades y de los seminarios protestantes de Europa y Norteamérica adoptaron estas ideas.',
        { h: 'La respuesta' },
        'Otros respondieron con firmeza. En el seminario de Princeton, Archibaldo Hodge y Benjamín Warfield defendieron la inspiración de la Escritura y su verdad en todo lo que afirma: «los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21). En Londres, Spurgeon denunció en 1887 que muchas iglesias iban cuesta abajo al abandonar la autoridad de la Biblia y la expiación, y se retiró de la unión bautista. Las iglesias de santidad, los avivamientos y los misioneros siguieron creyendo y predicando la Biblia como Palabra de Dios.',
        'El liberalismo planteó preguntas reales que los creyentes no podían ignorar, y obligó a estudiar mejor la historia y las lenguas de la Biblia. Pero sus respuestas vaciaban el evangelio: un cristianismo sin milagros, sin cruz y sin resurrección no es el que predicaron los apóstoles. Pablo resumió lo esencial: «que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día» (1 Co 15:3-4). Este sitio sostiene la inspiración plena de la Escritura, que se estudia en el recurso La Palabra de Dios.',
        ir('Estudiar la inspiración de la Escritura', '../../palabra-de-dios/')
      ],
      pensar: 'El liberalismo quiso hacer la fe aceptable quitándole lo sobrenatural. ¿Hay alguna enseñanza bíblica que te cuesta aceptar porque choca con lo que piensa la gente a tu alrededor? ¿Qué harás con ella?'
    },
    {
      id: 'dispensaciones', n: 'Darby y la esperanza de la venida de Cristo', ref: '1 Tesalonicenses 4:16-17; Tito 2:13; Apocalipsis 20:4-6', fecha: [1830, 1909],
      visual: [
        cita('1 Tesalonicenses 4:16-17', '@@1ts/4/16-17'),
        tabla({
          titulo: 'Tres maneras de entender el milenio',
          cab: ['Postura', 'Qué enseña', 'Época de mayor difusión'],
          filas: [
            ['Premilenial', 'Cristo vuelve antes de reinar mil años en la tierra (Ap 20:4-6)', 'Iglesia antigua; desde el siglo XIX entre los evangélicos'],
            ['Amilenial', 'El milenio es simbólico: el reinado actual de Cristo', 'Desde Agustín (siglo V); muchas iglesias históricas'],
            ['Postmilenial', 'El evangelio transformará el mundo y luego vendrá Cristo', 'Siglos XVIII y XIX, en tiempos de avivamiento']
          ]
        })
      ],
      texto: [
        'El siglo XIX fue también un tiempo de gran interés por la profecía bíblica. Muchos creyentes estudiaban Daniel y Apocalipsis, y se preguntaban cómo sería la venida de Cristo. Un predicador irlandés tuvo un papel decisivo en esa búsqueda.',
        { h: 'Juan Nelson Darby' },
        'Juan Nelson Darby era un pastor anglicano de Irlanda que, hacia 1830, se unió a un grupo de creyentes que se reunían con sencillez, sin clero, para partir el pan y estudiar la Biblia: los Hermanos, llamados a veces de Plymouth. Darby enseñó que Dios ha tratado con la humanidad en distintas etapas o dispensaciones, que Israel y la iglesia son distintos en el plan de Dios, y que la iglesia será arrebatada para encontrarse con el Señor antes de la gran tribulación. Se apoyaba en pasajes como el de Pablo: «seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire» (1 Ts 4:17).',
        { h: 'De las conferencias a la Biblia de Scofield' },
        'Las ideas de Darby se difundieron en Norteamérica por medio de conferencias bíblicas sobre la profecía, como las del Niágara (desde la década de 1870), y fueron adoptadas por muchos evangelistas, entre ellos Moody. En 1909 Ciro Scofield publicó una Biblia con notas que explicaban la Escritura según este sistema, y que fue leída por millones. Así, el premilenialismo dispensacional se convirtió en la manera más común de entender la profecía entre los evangélicos de Norteamérica y, con los misioneros, entre los de América Latina, incluidas la mayoría de las iglesias pentecostales.',
        { posturas: {
          titulo: '¿Antes o después de la tribulación?',
          a: { n: 'Arrebatamiento pretribulacional', t: 'La iglesia será arrebatada antes de la gran tribulación, porque Dios no la ha puesto para ira (1 Ts 5:9), y el Señor puede venir en cualquier momento (Tit 2:13). Después de la tribulación, Cristo volverá con su iglesia para reinar mil años.' },
          b: { n: 'Otras posturas', t: 'Muchos premileniales históricos creen que la iglesia pasará por la tribulación y será reunida con Cristo cuando Él venga en gloria (Mt 24:29-31). Amileniales y postmileniales entienden el milenio de manera simbólica.' },
          c: 'Este recurso sigue la postura premilenial y pretribulacional, que se estudia en Los últimos tiempos, sin fijar fechas, porque «del día y la hora nadie sabe» (Mt 24:36). En todas las posturas hay creyentes que esperan con amor la venida del Señor.'
        } },
        'La esperanza de la venida de Cristo tuvo un efecto práctico: dio urgencia a la evangelización. Si el Señor podía venir en cualquier momento, había que anunciar el evangelio a todas las naciones cuanto antes (Mt 24:14). Esa urgencia impulsó a miles de misioneros.',
        ir('Estudiar Los últimos tiempos', '../../escatologia/')
      ],
      pensar: 'Pablo vivía «aguardando la esperanza bienaventurada» (Tit 2:13). ¿Cómo cambia tu manera de usar el tiempo y el dinero el saber que el Señor puede venir en cualquier momento?'
    },
    {
      id: 'edimburgo', n: 'Edimburgo 1910', ref: 'Juan 17:21; Mateo 24:14; Romanos 15:20-21', fecha: 1910,
      visual: [
        foto('edimburgo-1910.jpg', 'Fotografía de la Conferencia Misionera Mundial de Edimburgo, en junio de 1910: cientos de delegados, hombres y mujeres, llenan la sala de asambleas del New College de la Universidad de Edimburgo, con galerías de madera y una mesa central de la presidencia', 'La Conferencia Misionera Mundial de Edimburgo, en la sala de asambleas del New College (1910).', 'Dominio público, vía Wikimedia Commons', 'Foto'),
        tabla({
          titulo: 'La conferencia en cifras',
          cab: ['', ''],
          filas: [
            ['Fecha', '14 al 23 de junio de 1910'],
            ['Delegados', 'Unos 1.200, de sociedades misioneras protestantes'],
            ['Delegados de Asia y África', 'Menos de veinte'],
            ['Delegados de América Latina', 'Ninguno: el continente quedó fuera del temario'],
            ['Presidente', 'Juan R. Mott, del Movimiento Estudiantil Voluntario']
          ]
        })
      ],
      texto: [
        'El siglo de las misiones culminó en junio de 1910 con la Conferencia Misionera Mundial de Edimburgo, en Escocia. Unos 1.200 delegados de sociedades misioneras protestantes se reunieron para estudiar cómo terminar la tarea de evangelizar el mundo. Los presidía Juan R. Mott, un laico metodista que había recorrido el mundo organizando a los estudiantes cristianos.',
        { h: 'Optimismo y realidad' },
        'El ambiente era de gran optimismo. Los misioneros habían llegado a casi todos los países, la Biblia estaba traducida a cientos de lenguas y muchos pensaban que el mundo entero sería cristiano en pocas décadas. Cuatro años después estalló la Primera Guerra Mundial, en la que naciones «cristianas» se mataron entre sí por millones. El optimismo se derrumbó, y el siglo XX mostró que la tarea era más difícil de lo que creían.',
        { h: '«Dadnos amigos»' },
        'Entre los pocos delegados de Asia estaba Vedanayagam Samuel Azariah, un joven pastor de la India que después sería el primer obispo anglicano indio. En un discurso que incomodó a muchos, agradeció a los misioneros su sacrificio, pero les pidió algo más: que no trataran a los creyentes de Asia como subordinados sino como hermanos. Terminó con una frase que se recuerda hasta hoy: habían dado sus bienes para alimentar a los pobres y sus cuerpos para ser quemados, pero también pedían amor; y concluyó: «¡Dadnos amigos!».',
        { h: 'América Latina, fuera' },
        'Para América Latina, Edimburgo tuvo una consecuencia importante. Algunas iglesias, sobre todo anglicanas, se negaron a tratar a América Latina como campo misionero, porque la consideraban ya cristiana por ser católica. Por eso el continente quedó fuera del temario. Los misioneros que trabajaban en América Latina organizaron entonces su propio congreso, que se reunió en Panamá en 1916 y que se estudia en la ruta VII.',
        'De Edimburgo nació también el deseo de que las iglesias cooperaran en la misión. Jesús había orado «para que todos sean uno … para que el mundo crea» (Jn 17:21). Ese deseo dio origen al movimiento ecuménico del siglo XX, que se estudia en la ruta VI, con sus logros y sus desvíos.',
        { ejercicio: {
          pregunta: '¿Por qué América Latina no estuvo en el temario de Edimburgo 1910?',
          opciones: [
            { t: 'Porque ya era mayoritariamente evangélica.', ok: false, por_que: 'En 1910 los evangélicos eran una pequeña minoría en América Latina.' },
            { t: 'Porque algunas iglesias la consideraban ya cristiana por ser católica.', ok: true, por_que: 'Para no ofender a quienes veían a América Latina como cristiana, se la excluyó; eso llevó al Congreso de Panamá en 1916.' },
            { t: 'Porque los gobiernos latinoamericanos prohibieron a sus ciudadanos viajar.', ok: false, por_que: 'No hubo tal prohibición; la exclusión fue una decisión de los organizadores.' }
          ],
          explicacion: 'La exclusión de América Latina en Edimburgo impulsó a los evangélicos del continente a organizarse por su cuenta, desde Panamá 1916.'
        } }
      ],
      pensar: 'Azariah pidió a los misioneros amistad y no solo ayuda. ¿Cómo tratas a los hermanos de otras culturas o de otros países que llegan a tu iglesia?'
    }
  ];
