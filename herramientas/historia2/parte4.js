  // ================== RUTA IV. Puritanos, pietistas y avivamientos (siglos XVII y XVIII) ==================
  const avivamientos = [
    {
      id: 'puritanos', n: 'Los puritanos', ref: 'Deuteronomio 6:6-7; 1 Pedro 1:15-16; Josué 24:15', fecha: [1560, 1689],
      visual: [
        img('puritanos.webp', 'Una familia inglesa del siglo XVII reunida junto a la chimenea de una casa de campo: el padre lee en voz alta una Biblia grande, la madre y cuatro hijos de distintas edades escuchan sentados en bancos de madera; ropa sencilla oscura con cuellos blancos, luz de fuego y velas', 'El culto familiar de los puritanos (recreación; personas anónimas).'),
        tabla({
          titulo: 'Los puritanos en fechas',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1560', 'La Biblia de Ginebra, con notas, se vuelve la Biblia del pueblo inglés'],
            ['1643-1649', 'La Asamblea de Westminster redacta una confesión y dos catecismos'],
            ['1649-1658', 'Guerra civil, ejecución del rey y gobierno de Oliverio Cromwell'],
            ['1662', 'Unos dos mil pastores puritanos son expulsados de la Iglesia de Inglaterra'],
            ['1660-1672', 'Juan Bunyan pasa doce años preso por predicar sin licencia'],
            ['1678', 'Se publica El progreso del peregrino']
          ]
        })
      ],
      texto: [
        'En la Inglaterra de Isabel I, muchos creyentes sentían que la Reforma había quedado a medio camino. La iglesia anglicana había cambiado su doctrina, pero conservaba ceremonias, vestiduras y costumbres que les parecían restos del catolicismo. Querían «purificar» la iglesia según la Escritura, y por eso los llamaron puritanos. Aunque la palabra se usa hoy como sinónimo de rigidez, los puritanos fueron un movimiento de profunda vida espiritual.',
        { h: 'Una fe para toda la vida' },
        'Para los puritanos, toda la vida debía estar bajo la Palabra de Dios. Pusieron la predicación en el centro del culto, con sermones largos que explicaban el texto y lo aplicaban a la conciencia. Guardaban el día del Señor, practicaban el culto familiar cada día y escribían diarios espirituales para examinar su corazón. Querían que cada padre cumpliera el mandato de Moisés: «estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos» (Dt 6:6-7). Buscaban una santidad práctica, porque «escrito está: Sed santos, porque yo soy santo» (1 P 1:16).',
        { h: 'Guerra, poder y persecución' },
        'En el siglo XVII los puritanos se mezclaron en la política. Durante la guerra civil inglesa (1642-1651), el Parlamento, con mayoría puritana, venció al rey Carlos I, que fue ejecutado en 1649, y Oliverio Cromwell gobernó el país. En esos años la Asamblea de Westminster redactó una confesión de fe y dos catecismos que todavía usan los presbiterianos. Pero cuando volvió la monarquía, en 1660, los puritanos fueron perseguidos: en 1662 unos dos mil pastores fueron expulsados de sus iglesias por no aceptar el Libro de Oración Común.',
        { h: 'Juan Bunyan' },
        'Uno de los perseguidos fue Juan Bunyan, un calderero sin estudios que se había convertido después de años de lucha interior. Predicaba sin licencia y pasó doce años en la cárcel de Bedford. Allí, para mantener a su familia, hacía cordones, y escribió. En 1678 publicó El progreso del peregrino, la historia de un hombre llamado Cristiano que deja la Ciudad de Destrucción con una carga en la espalda, la pierde al pie de la cruz y atraviesa pruebas hasta llegar a la Ciudad Celestial. Es uno de los libros más traducidos de la historia después de la Biblia.',
        'Los puritanos dejaron una herencia muy grande: una manera de predicar centrada en la Biblia, una literatura devocional que se sigue leyendo y la convicción de que la fe se vive en el hogar, en el trabajo y en la sociedad. También muestran un peligro: cuando la iglesia busca el poder político, puede terminar persiguiendo o siendo perseguida por las mismas armas.'
      ],
      pensar: 'Los puritanos practicaban el culto familiar todos los días. ¿Cómo podrías apartar un momento, aunque sea breve, para leer la Biblia y orar con los de tu casa (Jos 24:15)?'
    },
    {
      id: 'libertad', n: 'Peregrinos, bautistas y libertad religiosa', ref: 'Mateo 5:14; Mateo 22:21; Gálatas 5:1', fecha: [1609, 1689],
      visual: [
        img('mayflower.webp', 'Peregrinos ingleses de 1620, hombres, mujeres y niños con ropa sencilla y abrigos de lana, en la cubierta de un velero de madera en un mar gris de noviembre, mirando hacia una costa boscosa que aparece en el horizonte', 'Los peregrinos del Mayflower ven la costa de América, noviembre de 1620 (recreación; personas anónimas).'),
        mapa({ view: V.atlantico, lugares: ['h-plymouth-ing', 'h-plymouth', 'h-amsterdam', 'h-londres', 'h-boston'], trazos: ['h-t-mayflower'] }, 'El Mayflower')
      ],
      texto: [
        'Algunos puritanos llegaron a la conclusión de que la iglesia de Inglaterra no tenía arreglo y que había que formar congregaciones separadas, solo de creyentes. Los llamaron separatistas. Como la ley lo prohibía, varios grupos huyeron a los Países Bajos, donde había más libertad.',
        { h: 'Los primeros bautistas' },
        'En Ámsterdam, hacia 1609, un pastor separatista llamado Juan Smyth llegó a la convicción de que el bautismo debía ser para los creyentes, como enseñaban los menonitas que vivían en la ciudad. Su grupo formó la primera iglesia bautista. En 1612, uno de sus miembros, Tomás Helwys, volvió a Inglaterra y fundó en Londres la primera iglesia bautista de ese país. Ese mismo año publicó un libro dirigido al rey, en el que pedía libertad religiosa para todos, incluso para quienes no eran cristianos, porque el rey no tiene poder sobre las almas. Helwys murió en la cárcel.',
        { h: 'El Mayflower' },
        'Otro grupo de separatistas, que vivía en Leiden, decidió buscar un lugar donde pudiera vivir su fe y conservar su lengua y costumbres. En septiembre de 1620 unas cien personas zarparon de Plymouth, en Inglaterra, en un barco llamado Mayflower. Tras dos meses de travesía llegaron a la costa de Norteamérica y fundaron la colonia de Plymouth. La mitad murió el primer invierno. Diez años después llegaron muchos más puritanos a Massachusetts. Su gobernador, Juan Winthrop, les recordó que debían ser como una ciudad sobre un monte, a la vista de todos, como dijo Jesús: «una ciudad asentada sobre un monte no se puede esconder» (Mt 5:14).',
        { h: 'Roger Williams y la libertad de conciencia' },
        'Pero los puritanos de Massachusetts no toleraban otras creencias. Un pastor llamado Roger Williams sostuvo que el gobierno no debía castigar los pecados contra Dios ni imponer una religión, y fue desterrado en 1636. Fundó la colonia de Rhode Island, la primera donde hubo verdadera libertad de conciencia, y allí se formó la primera iglesia bautista de América. Jesús había distinguido entre lo que se debe al gobierno y lo que se debe a Dios: «Dad, pues, a César lo que es de César, y a Dios lo que es de Dios» (Mt 22:21).',
        'Estas ideas, que nacieron entre anabautistas, bautistas y separatistas perseguidos, se volvieron con el tiempo la base de la libertad religiosa moderna. En América Latina llegaron mucho después, con las independencias del siglo XIX, y gracias a ellas hoy las iglesias evangélicas pueden reunirse y predicar con libertad.',
        { ejercicio: {
          pregunta: '¿Qué pedía Tomás Helwys al rey de Inglaterra en 1612?',
          opciones: [
            { t: 'Que la iglesia bautista fuera la iglesia oficial del reino.', ok: false, por_que: 'Helwys pedía justamente lo contrario: que el rey no impusiera ninguna religión.' },
            { t: 'Libertad religiosa para todos, porque el rey no tiene poder sobre las almas.', ok: true, por_que: 'Helwys defendió la libertad de conciencia aun para los no cristianos; murió en la cárcel por sus convicciones.' },
            { t: 'Permiso para emigrar a América con su congregación.', ok: false, por_que: 'Helwys volvió de Ámsterdam a Inglaterra para fundar allí una iglesia, sabiendo que lo perseguirían.' }
          ],
          explicacion: 'La libertad religiosa que hoy disfrutan las iglesias evangélicas fue defendida primero por minorías perseguidas, como los anabautistas y los bautistas, que sufrieron por pedirla.'
        } }
      ],
      pensar: 'Pablo dice: «Estad, pues, firmes en la libertad con que Cristo nos hizo libres» (Gá 5:1). ¿Cómo puedes usar la libertad religiosa que tienes para anunciar el evangelio y servir, en lugar de darla por sentada?'
    },
    {
      id: 'pietismo', n: 'El pietismo', ref: 'Juan 3:3; Hechos 2:42; Santiago 2:17', fecha: [1675, 1730],
      visual: [
        tabla({
          titulo: 'Los «deseos piadosos» de Spener (1675)',
          cab: ['Propuesta', 'Qué significaba'],
          filas: [
            ['1. Más Biblia', 'Que los creyentes leyeran toda la Escritura, también en grupos en las casas'],
            ['2. Sacerdocio de todos', 'Que cada creyente ejerciera su ministerio, no solo el pastor'],
            ['3. Fe practicada', 'Que el cristianismo no fuera solo saber, sino vida y amor'],
            ['4. Amor en las discusiones', 'Debatir con los que piensan distinto con oración y caridad'],
            ['5. Pastores piadosos', 'Formar a los pastores en piedad, no solo en teología'],
            ['6. Predicación que edifica', 'Sermones para formar la vida, no para lucirse']
          ]
        }),
        mapa({ view: V.mundo, lugares: ['h-halle', 'h-copenhague'] }, 'Mapa')
      ],
      texto: [
        'En Alemania, después de la guerra de los Treinta Años, la iglesia luterana tenía teólogos brillantes y una doctrina bien definida, pero mucha gente vivía una fe de costumbre: se bautizaban, iban a la iglesia y comulgaban, pero sin una relación viva con Dios. Contra esa frialdad surgió el pietismo, un movimiento que buscaba una fe del corazón, o «piedad».',
        { h: 'Felipe Jacobo Spener' },
        'En 1675 un pastor de Fráncfort, Felipe Jacobo Spener, publicó un pequeño libro llamado Pia desideria, «deseos piadosos». La tabla resume sus seis propuestas. La más práctica fue reunir grupos pequeños en las casas para leer la Biblia, orar y compartir. No pretendía crear una nueva iglesia, sino renovar la existente desde dentro, con creyentes que vivieran lo que confesaban. Su idea recuerda a la iglesia de Jerusalén, que perseveraba «en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones» (Hch 2:42).',
        'Spener insistía en el nuevo nacimiento. Jesús dijo a Nicodemo: «el que no naciere de nuevo, no puede ver el reino de Dios» (Jn 3:3). Ser bautizado de niño y pertenecer a una iglesia no reemplazaba la conversión personal.',
        { h: 'Augusto Hermann Francke y Halle' },
        'Su discípulo Augusto Hermann Francke convirtió la ciudad de Halle en un centro de fe y servicio. En 1698 fundó un orfanato sin más recursos que la oración, que llegó a albergar a cientos de niños, junto con escuelas, una farmacia y una imprenta. En 1710 un colaborador suyo creó un instituto para imprimir Biblias baratas, y en pocas décadas distribuyó cientos de miles de ejemplares, al alcance de los pobres.',
        { h: 'Los primeros misioneros protestantes' },
        'De Halle salieron, en 1706, los primeros misioneros protestantes enviados a la India: Bartolomé Ziegenbalg y Enrique Plütschau, con el apoyo del rey de Dinamarca. Ziegenbalg aprendió el tamil y tradujo el Nuevo Testamento. Así, mucho antes del gran siglo de las misiones, el pietismo mostró que una fe viva produce frutos de amor y de misión.',
        'El pietismo tuvo también sus riesgos: a veces valoró tanto la experiencia que descuidó la doctrina, o se volvió legalista con las costumbres. Pero su influencia fue enorme. Por medio de los moravos llegó a Juan Wesley, y por medio de él, a los avivamientos de los que nacen las iglesias de santidad y pentecostales.'
      ],
      pensar: 'Spener propuso grupos pequeños en las casas para leer la Biblia y orar. ¿Participas de algún grupo así? Si no, ¿qué te impide comenzar uno?'
    },
    {
      id: 'moravos', n: 'Los moravos: cien años de oración', ref: 'Hechos 2:1-4; Hechos 13:2-3; Isaías 6:8', fecha: [1722, 1760],
      visual: [
        img('herrnhut.webp', 'De noche, en una sala sencilla de madera de la aldea de Herrnhut, en 1727, dos hombres y una mujer con ropa de campesinos alemanes del siglo XVIII oran de rodillas junto a una mesa con una Biblia abierta y una vela; por la ventana se ven las casas del pueblo bajo la nieve', 'La vigilia de oración de Herrnhut, que duró unos cien años (recreación; personas anónimas).'),
        pasos([
          { t: 'Herrnhut, refugio de los hermanos de Moravia (1722)', fecha: 1722, estado: { view: V.atlantico, lugares: ['h-herrnhut'] } },
          { t: 'Santo Tomás, en el Caribe: los primeros misioneros (1732)', fecha: 1732, estado: { view: V.atlantico, lugares: ['h-herrnhut', 'h-copenhague', 'h-santo-tomas'], trazos: ['h-t-moravos-1'] } },
          { t: 'Groenlandia (1733)', fecha: 1733, estado: { view: V.atlantico, lugares: ['h-herrnhut', 'h-copenhague', 'h-santo-tomas', 'h-groenlandia'], trazos: ['h-t-moravos-1', 'h-t-moravos-2'] } }
        ], 'Las primeras misiones moravas')
      ],
      texto: [
        'En la ruta III vimos cómo, en 1620, los evangélicos de Bohemia y Moravia fueron obligados a volver al catolicismo. Algunos de ellos, herederos de los seguidores de Juan Hus, conservaron su fe en secreto durante un siglo. En 1722, un grupo de estas familias huyó a Sajonia y pidió refugio en las tierras de un joven conde luterano, Nicolás Luis de Zinzendorf. Allí fundaron una aldea que llamaron Herrnhut, «la guarda del Señor».',
        { h: 'El 13 de agosto de 1727' },
        'Al principio Herrnhut fue un lugar de discusiones: llegaron refugiados de distintas tradiciones que no se entendían. Zinzendorf los visitó casa por casa, los llamó a la oración y redactó un acuerdo de convivencia. El 13 de agosto de 1727, durante una celebración de la Cena del Señor, la comunidad vivió un mover del Espíritu Santo tan profundo que lo recordaron como su Pentecostés. Las enemistades se disolvieron en amor, y los creyentes salieron sabiendo que eran una sola familia.',
        { h: 'Cien años de oración' },
        'Pocos días después, veinticuatro hombres y veinticuatro mujeres se comprometieron a orar por turnos de una hora, de modo que hubiera oración las veinticuatro horas del día. Esa vigilia continuó, según los registros de la comunidad, durante unos cien años. De esa oración nació un fuego misionero. En 1732 dos jóvenes, Leonardo Dober y David Nitschmann, partieron a la isla de Santo Tomás, en el Caribe, para anunciar el evangelio a los esclavos africanos. Al año siguiente otros fueron a Groenlandia. En pocas décadas los moravos tenían misioneros en América, África y Asia, muchos de ellos artesanos que se sostenían con su trabajo.',
        'Igual que en Antioquía, la misión nació de la oración: «Ministrando éstos al Señor, y ayunando, dijo el Espíritu Santo: Apartadme a Bernabé y a Saulo» (Hch 13:2). Zinzendorf resumía su vida en una frase: tenía una sola pasión, y era Cristo.',
        { h: 'Moravos y Wesley' },
        'En 1736 un joven pastor anglicano viajaba en barco a la colonia de Georgia. En medio de una tormenta terrible, mientras los ingleses gritaban de miedo, un grupo de moravos alemanes cantaba himnos con calma. El pastor quedó impresionado: él no tenía esa paz. Se llamaba Juan Wesley, y los moravos tendrían un papel decisivo en su conversión.',
        { ejercicio: {
          pregunta: '¿Qué relación hubo entre la vigilia de oración de Herrnhut y las misiones moravas?',
          opciones: [
            { t: 'Ninguna: las misiones fueron organizadas por el rey de Dinamarca.', ok: false, por_que: 'El rey dio facilidades, pero el impulso nació en la comunidad que oraba en Herrnhut.' },
            { t: 'La oración constante de la comunidad dio origen a un fuerte llamado misionero.', ok: true, por_que: 'Cinco años después de comenzar la vigilia, en 1732, partieron los primeros misioneros, y luego muchos más.' },
            { t: 'Los moravos dejaron de orar para dedicarse a las misiones.', ok: false, por_que: 'La vigilia continuó durante unos cien años, mientras los misioneros salían.' }
          ],
          explicacion: 'Como en Antioquía (Hch 13:2-3), la misión moravia nació de una iglesia que ministraba al Señor en oración. La oración y la misión fueron juntas.'
        } }
      ],
      pensar: 'Los moravos oraron por turnos durante cien años. ¿Qué lugar ocupa la oración por las misiones en tu vida y en tu congregación?'
    },
    {
      id: 'wesley', n: 'Juan Wesley y el metodismo', ref: 'Romanos 8:16; 1 Tesalonicenses 5:23; Zacarías 3:2', fecha: [1703, 1791],
      visual: [
        img('wesley.webp', 'Juan Wesley, un hombre delgado de unos treinta y seis años con cabello largo castaño, toga negra de clérigo y alzacuello blanco, predica de pie sobre un pequeño montículo al aire libre a una multitud de mineros del carbón con ropas gastadas y rostros tiznados, cerca de Bristol en 1739', 'Juan Wesley predica al aire libre cerca de Bristol, 1739 (recreación).'),
        tabla({
          titulo: 'Juan Wesley (1703-1791)',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1709', 'Lo rescatan de un incendio en la casa pastoral de Epworth'],
            ['1729', 'En Oxford, el «Club Santo» de su hermano Carlos; los llaman metodistas'],
            ['1736', 'Viaje a Georgia; encuentro con los moravos en la tormenta'],
            ['1738', 'El 24 de mayo, en la calle Aldersgate de Londres, siente su corazón «extrañamente ardiente»'],
            ['1739', 'Comienza a predicar al aire libre en Bristol'],
            ['1739-1791', 'Recorre Gran Bretaña a caballo y predica unas cuarenta mil veces'],
            ['1791', 'Muere en Londres; su última carta anima a Wilberforce contra la esclavitud']
          ]
        }),
        mapa({ view: V.britania, lugares: ['h-londres', 'h-oxford', 'h-bristol'] }, 'Mapa')
      ],
      texto: [
        'Juan Wesley nació en 1703, hijo de un pastor anglicano de Epworth, en Inglaterra, y de Susana, una madre que educó a sus hijos con disciplina y oración. Cuando tenía cinco años, la casa pastoral se incendió y lo sacaron por una ventana en el último momento. Toda su vida se vio a sí mismo, con palabras del profeta, como «un tizón arrebatado del incendio» (Zac 3:2).',
        { h: 'Religioso, pero sin paz' },
        'En la Universidad de Oxford, Juan y su hermano Carlos formaron un grupo de estudiantes que oraban, leían la Biblia, comulgaban cada semana y visitaban a los presos. Por su vida tan ordenada los llamaron, en burla, «metodistas». Pero Juan, como Lutero, no tenía paz. En 1735 fue como misionero a Georgia, y fracasó. El encuentro con los moravos en la tormenta le mostró que le faltaba algo.',
        { h: 'Aldersgate' },
        'De regreso en Londres, un moravo llamado Pedro Böhler le habló de la fe que confía en Cristo y recibe la seguridad del perdón. La noche del 24 de mayo de 1738 Wesley fue, sin ganas, a una reunión en la calle Aldersgate. Alguien leía el prefacio de Lutero a la carta a los Romanos. Wesley escribió en su diario que sintió su corazón extrañamente ardiente, que confió solo en Cristo para su salvación y que recibió la seguridad de que Él había quitado sus pecados. Es la experiencia de la que habla Pablo: «El Espíritu mismo da testimonio a nuestro espíritu, de que somos hijos de Dios» (Ro 8:16).',
        { h: 'El mundo es mi parroquia' },
        'Las iglesias anglicanas le cerraron sus puertas por su predicación encendida. En 1739, invitado por su amigo Jorge Whitefield, que había predicado a los mineros del carbón de Kingswood, Wesley predicó por primera vez al aire libre, en las afueras de Bristol. Desde entonces recorrió Gran Bretaña a caballo durante cincuenta años, unos 400.000 kilómetros, predicando dos o tres veces al día. Organizó a los convertidos en «clases» de unas doce personas que se reunían cada semana para orar y rendirse cuentas, y formó predicadores laicos. Su hermano Carlos escribió miles de himnos para que el pueblo cantara su fe.',
        'Wesley enseñaba que la gracia de Dios es para todos, que el creyente puede tener seguridad de su salvación y que Dios quiere santificar por completo a sus hijos: «el mismo Dios de paz os santifique por completo» (1 Ts 5:23). Su fe tuvo frutos sociales: escuelas, ayuda a los pobres, visitas a las cárceles y una oposición firme a la esclavitud. De sus seguidores nacieron las iglesias metodistas, que llegaron a Norteamérica y desde allí, en el siglo XIX, a América Latina. De esa familia saldrán el movimiento de santidad y, en Chile, el avivamiento de Valparaíso.'
      ],
      pensar: 'Wesley era un hombre religioso y disciplinado, pero necesitó una experiencia personal con Cristo. ¿Tienes la seguridad, por el testimonio del Espíritu, de que eres hijo de Dios (Ro 8:16)?'
    },
    {
      id: 'despertar', n: 'El Gran Despertar', ref: '1 Juan 4:1-3; Salmo 85:6; Juan 3:8', fecha: [1734, 1745],
      visual: [
        mapa({ view: V.atlantico, lugares: ['h-northampton', 'h-boston', 'h-bristol', 'h-londres'] }, 'Mapa'),
        tabla({
          titulo: 'Las señales de una obra del Espíritu, según Jonathan Edwards (1741)',
          cab: ['Señal', 'Base bíblica'],
          filas: [
            ['Exalta a Jesús como Hijo de Dios y Salvador', '1 Jn 4:2-3'],
            ['Se opone al reino de Satanás y al pecado', '1 Jn 4:4-5'],
            ['Aumenta el amor y el respeto por la Escritura', '1 Jn 4:6'],
            ['Conduce a la verdad', '1 Jn 4:6'],
            ['Produce amor a Dios y al prójimo', '1 Jn 4:7-8']
          ],
          nota: 'Edwards advertía que las manifestaciones exteriores (llanto, gritos, desmayos) no prueban por sí solas que una obra sea de Dios, ni que no lo sea: se la juzga por sus frutos.'
        })
      ],
      texto: [
        'Mientras Wesley predicaba en Inglaterra, en las colonias inglesas de Norteamérica ocurría un avivamiento que se llamó el Gran Despertar. Comenzó en 1734 en Northampton, un pueblo de Massachusetts, donde el pastor Jonathan Edwards predicaba sobre la justificación por la fe. Cientos de personas se convirtieron en pocos meses, y Edwards describió el movimiento como una obra sorprendente de Dios.',
        { h: 'Jorge Whitefield' },
        'En 1739 llegó desde Inglaterra Jorge Whitefield, un joven predicador de voz poderosa, amigo de los Wesley. Recorrió las colonias predicando al aire libre a multitudes de decenas de miles de personas. Benjamín Franklin, que no era creyente, calculó que su voz podía ser oída por unas treinta mil personas a la vez. Whitefield predicaba sobre todo un mensaje: «Os es necesario nacer de nuevo» (Jn 3:7). En 1741 Edwards predicó en Enfield un sermón famoso sobre los pecadores en las manos de un Dios airado, que provocó llanto y clamor entre los oyentes.',
        { h: 'Las manifestaciones y el discernimiento' },
        'El avivamiento estuvo acompañado de manifestaciones intensas: personas que lloraban, gritaban, temblaban o caían al suelo. Eso dividió a las iglesias. Algunos pastores lo rechazaban todo como fanatismo; otros aceptaban todo como obra de Dios. Edwards, que vivió el avivamiento de cerca, escribió en 1741 un estudio de 1 Juan 4, que comienza: «no creáis a todo espíritu, sino probad los espíritus si son de Dios» (1 Jn 4:1). La tabla resume las señales que propuso.',
        'Su conclusión fue equilibrada: las manifestaciones del cuerpo no prueban que una obra sea de Dios, pero tampoco prueban que no lo sea. Lo que importa es el fruto: si Jesús es exaltado, si el pecado es abandonado, si crece el amor por la Escritura y por los hermanos. Este criterio sigue siendo útil para las iglesias pentecostales y carismáticas de hoy. Pablo lo dice así: «No apaguéis al Espíritu. No menospreciéis las profecías. Examinadlo todo; retened lo bueno» (1 Ts 5:19-21).',
        'El Gran Despertar transformó las colonias. Nacieron nuevas iglesias y universidades, y muchos indígenas y africanos esclavizados escucharon el evangelio. El misionero David Brainerd, que murió joven entre los indígenas de Nueva Jersey, dejó un diario que Edwards publicó y que inspiró después a muchos misioneros.',
        { ejercicio: {
          pregunta: 'En una reunión de oración, varias personas lloran y algunas caen al suelo. Según el criterio de Edwards, ¿cómo se puede saber si es una obra del Espíritu?',
          opciones: [
            { t: 'Si hay manifestaciones fuertes, es seguro que es una obra de Dios.', ok: false, por_que: 'Edwards advertía que las manifestaciones por sí solas no prueban nada: pueden venir de Dios, de la emoción humana o de otra fuente.' },
            { t: 'Si hay manifestaciones, seguro que no es de Dios, porque Dios es orden.', ok: false, por_que: 'Edwards rechazó también ese extremo: las manifestaciones no prueban que una obra no sea de Dios.' },
            { t: 'Por sus frutos: si exalta a Jesús, aparta del pecado y produce amor por la Escritura y por los hermanos.', ok: true, por_que: 'Es el criterio de 1 Juan 4 que Edwards aplicó: se prueba el espíritu por lo que produce.' }
          ],
          explicacion: 'Jesús dijo: «Por sus frutos los conoceréis» (Mt 7:16). El discernimiento no se basa en lo que se ve en el momento, sino en lo que la obra produce con el tiempo.'
        } }
      ],
      pensar: 'El salmista oraba: «¿No volverás a darnos vida, para que tu pueblo se regocije en ti?» (Sal 85:6). ¿Estás orando por un avivamiento en tu iglesia, y estás dispuesto a examinarlo con la Escritura cuando llegue?'
    },
    {
      id: 'ilustracion', n: 'La Ilustración: la razón sin revelación', ref: 'Colosenses 2:8; 1 Corintios 1:20-25; Romanos 1:20-22', fecha: [1687, 1802],
      visual: [
        tabla({
          titulo: 'La Ilustración y la fe',
          cab: ['Año', 'Obra o hecho', 'Idea central'],
          filas: [
            ['1687', 'Newton, Principios matemáticos', 'El universo sigue leyes; Newton era creyente'],
            ['1696', 'Toland, Cristianismo sin misterios', 'Deísmo: nada en la religión puede estar por encima de la razón'],
            ['1736', 'Butler, La analogía de la religión', 'Respuesta cristiana: la revelación es razonable'],
            ['1748', 'Hume, Sobre los milagros', 'Los milagros no se pueden creer'],
            ['1764', 'Voltaire, Diccionario filosófico', 'Burla de la iglesia y de la Biblia'],
            ['1789-1794', 'Revolución francesa', 'Ataque a la iglesia; «culto de la Razón» en Notre-Dame (1793)'],
            ['1802', 'Paley, Teología natural', 'El diseño de la naturaleza apunta a un Diseñador']
          ]
        }),
        cita('1 Corintios 1:20-25', '@@1co/1/20-25')
      ],
      texto: [
        'Después de las guerras de religión, muchos pensadores europeos concluyeron que la fe dividía y que la razón unía. Así nació la Ilustración, un movimiento intelectual del siglo XVIII que quería iluminar todo con la luz de la razón humana. Trajo avances reales: la ciencia moderna, la crítica a la tortura y a los privilegios, la defensa de la tolerancia. Muchos de sus primeros científicos, como Isaac Newton, eran creyentes que veían en las leyes del universo la obra del Creador.',
        { h: 'El deísmo' },
        'Pero pronto muchos ilustrados fueron más lejos. El deísmo enseñaba que Dios creó el mundo como un relojero que fabrica un reloj y luego lo deja funcionar solo: no interviene, no hace milagros, no se revela. La Biblia sería solo un libro humano con buenas enseñanzas morales. El filósofo escocés David Hume escribió en 1748 que nunca es razonable creer en un milagro. Voltaire ridiculizó a la iglesia y a la Escritura. En Francia, durante la Revolución, se cerraron templos, se mató a sacerdotes y en 1793 se celebró un culto a la Razón en la catedral de Notre-Dame.',
        { h: 'La respuesta de la fe' },
        'Los creyentes respondieron de dos maneras. Algunos pensadores mostraron que la fe no es irracional: el matemático Blas Pascal, en el siglo XVII, había escrito que el corazón tiene razones que la razón no conoce; el obispo José Butler y el teólogo Guillermo Paley defendieron la revelación y el diseño de la creación. Pablo ya había dicho que las cosas invisibles de Dios «se hacen claramente visibles desde la creación del mundo» (Ro 1:20).',
        'La otra respuesta fue el avivamiento. El mismo siglo que produjo a Voltaire produjo a Wesley, a Whitefield y a Edwards. Mientras unos discutían si Dios podía actuar en el mundo, miles de mineros, campesinos y esclavos experimentaban que Dios actuaba en sus vidas. Pablo lo había escrito: «agradó a Dios salvar a los creyentes por la locura de la predicación» (1 Co 1:21).',
        { h: 'Una herencia que sigue viva' },
        'La Ilustración cambió para siempre la manera de pensar de Occidente. En el siglo XIX, sus ideas llegaron a las universidades y a la teología, como se verá en la ruta V, y en el siglo XX produjeron sociedades que viven como si Dios no existiera. También influyeron en las independencias de América Latina, cuyos líderes leían a los ilustrados. Pablo advirtió: «Mirad que nadie os engañe por medio de filosofías y huecas sutilezas» (Col 2:8). No se trata de rechazar la razón, que es un don de Dios, sino de ponerla al servicio de la verdad revelada.'
      ],
      pensar: 'Pedro pide estar «siempre preparados para presentar defensa» de nuestra esperanza (1 P 3:15). ¿Qué pregunta de un amigo incrédulo te gustaría saber responder mejor, y dónde podrías aprender?'
    }
  ];
