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
        cita('Hechos 2:17-18', '@@hch/2/17-18'),
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
        cita('1 Corintios 14:39-40', '@@1co/14/39-40'),
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

