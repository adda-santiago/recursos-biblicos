  // ================== RUTA II. La Reforma (siglo XVI) ==================
  const reforma = [
    {
      id: 'europa', n: 'Europa hacia 1500', ref: 'Marcos 7:13; Salmo 119:130; Isaías 40:8', fecha: 1500,
      visual: [
        img('../de-la-biblia-a-nosotros/img/imprenta.webp', 'Taller de imprenta del siglo XV: un operario tira de la palanca de una prensa de madera mientras otro entinta los tipos y un tercero revisa un pliego recién impreso', 'La imprenta de tipos móviles, hacia 1455, cambió la manera de difundir las ideas (recreación).'),
        mapa({ view: V.europa, lugares: ['h-oxford', 'h-praga', 'h-roma', 'h-wittenberg', 'h-basilea', 'h-paris', 'h-sevilla'] }, 'Mapa'),
        tabla({
          titulo: 'Antes de Lutero',
          cab: ['Fecha', 'Hecho'],
          filas: [
            ['Hacia 1175', 'Pedro Valdo, en Lyon, hace traducir la Escritura y predica la pobreza; nacen los valdenses'],
            ['Hacia 1380', 'Juan Wycliffe, en Oxford, impulsa la primera Biblia completa en inglés'],
            ['1415', 'Juan Hus, predicador de Praga, muere en la hoguera en el Concilio de Constanza'],
            ['Hacia 1455', 'Gutenberg imprime en Maguncia la primera Biblia con tipos móviles'],
            ['1516', 'Erasmo publica en Basilea el Nuevo Testamento en griego']
          ],
          nota: 'Los precursores de la Reforma se estudian en Historia de la Iglesia I (en preparación).'
        })
      ],
      texto: [
        'Hacia el año 1500, casi todos los habitantes de Europa occidental eran bautizados en la iglesia de Roma y vivían su fe dentro de ella. Las catedrales dominaban las ciudades, el calendario seguía las fiestas de la iglesia y el papa era una de las figuras más poderosas del continente. Pero muchos sentían que algo andaba mal.',
        { h: 'Una iglesia que necesitaba reforma' },
        'Los papas del Renacimiento vivían como príncipes, hacían guerras y daban cargos a sus familiares. Muchos sacerdotes de pueblo apenas sabían latín y no predicaban. La salvación se vivía como un sistema de méritos: misas, peregrinaciones, reliquias y obras que ayudaban a reducir el tiempo en el purgatorio. Las indulgencias, que la iglesia concedía a cambio de una obra piadosa o de una ofrenda, se habían convertido en un negocio. La Biblia se leía en latín, una lengua que el pueblo no entendía, y en varios países estaba prohibido traducirla.',
        'Muchos pedían una reforma «en la cabeza y en los miembros», y algunos lo pagaron caro. Pedro Valdo y sus seguidores fueron perseguidos por predicar la Escritura en lengua del pueblo. Juan Wycliffe, en Oxford, enseñó que la Biblia está por encima del papa e impulsó una traducción al inglés. Juan Hus predicó en Praga ideas parecidas y murió en la hoguera en 1415. Jesús había advertido contra los que invalidan «la palabra de Dios» con su tradición (Mr 7:13), y estos precursores se atrevieron a decirlo en su tiempo.',
        { h: 'Dos herramientas nuevas' },
        'Dos cosas prepararon el camino de la Reforma. La primera fue el humanismo, un movimiento de eruditos que quería volver «a las fuentes»: leer los textos antiguos en su lengua original. En 1516 Erasmo de Róterdam publicó el Nuevo Testamento en griego, y por primera vez muchos maestros pudieron comparar la traducción latina con el texto que escribieron los apóstoles. La segunda fue la imprenta de tipos móviles, que Gutenberg usó hacia 1455 para imprimir la Biblia. Hacia 1500 ya había imprentas en más de doscientas ciudades de Europa: un escrito podía multiplicarse por miles en pocas semanas.',
        'Así, cuando un profesor de Wittenberg comenzó a enseñar que el pecador es justificado por la fe, sus ideas no quedaron encerradas en un aula. El salmista dice que «la exposición de tus palabras alumbra» (Sal 119:130), y en el siglo XVI esa luz llegó, por primera vez, a las manos de miles de personas comunes.'
      ],
      pensar: 'Durante siglos, la mayoría de los cristianos de Europa no pudo leer la Biblia en su lengua. Hoy la tienes al alcance de la mano. ¿Qué lugar ocupa realmente en tu semana?'
    },
    {
      id: 'lutero', n: 'Lutero: un monje en busca de paz', ref: 'Romanos 1:16-17; Habacuc 2:4; Romanos 3:23-24', fecha: [1483, 1517],
      visual: [
        foto('lutero-cranach.jpg', 'Retrato de Martín Lutero pintado por Lucas Cranach el Viejo en 1529: un hombre de unos cuarenta y cinco años, de rostro ancho, con gorro y ropa negra de profesor, sobre fondo verde azulado', 'Martín Lutero, por Lucas Cranach el Viejo (1529).', 'Dominio público, vía Wikimedia Commons', 'Retrato'),
        cita('Romanos 1:16-17', '@@ro/1/16-17')
      ],
      texto: [
        'Martín Lutero nació en 1483 en Eisleben, en Alemania, hijo de un minero que había prosperado y que quería que su hijo fuera abogado. En julio de 1505, cuando volvía a la universidad, lo sorprendió una tormenta y un rayo cayó cerca de él. Aterrado, prometió hacerse monje. Pocos días después entró en el monasterio de los agustinos de Erfurt.',
        { h: 'Un corazón sin paz' },
        'Lutero fue un monje ejemplar: oraba, ayunaba, pasaba noches en vela y se confesaba durante horas. Pero cuanto más se esforzaba, menos paz tenía. Sabía que Dios es justo y que exige un corazón perfecto, y sabía que su corazón no lo era. Llegó a decir que odiaba al Dios justo que castiga a los pecadores. Su superior, Johann von Staupitz, le aconsejó mirar las heridas de Cristo y, para ocuparlo, lo envió a estudiar teología. En 1512 Lutero fue nombrado doctor y profesor de Biblia en la pequeña universidad de Wittenberg.',
        { h: 'El descubrimiento' },
        'Entre 1513 y 1517 Lutero enseñó los Salmos, Romanos y Gálatas. Le costaba especialmente un versículo: «en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá» (Ro 1:17). Él entendía «la justicia de Dios» como la justicia con que Dios castiga. Meditando día y noche en el texto, comprendió que Pablo habla de otra justicia: la que Dios da gratuitamente al que cree. El pecador no se vuelve aceptable ante Dios por sus obras, sino que es declarado justo por la fe en Cristo, que cargó con su pecado. Es lo que dice Pablo un poco más adelante: «siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús» (Ro 3:24).',
        'Años después, Lutero recordó ese momento con palabras famosas: sintió que había nacido de nuevo y que había entrado por puertas abiertas en el paraíso mismo. Toda la Escritura le pareció distinta. El versículo que Pablo cita viene del profeta Habacuc: «mas el justo por su fe vivirá» (Hab 2:4). Una frase escrita seis siglos antes de Cristo, citada por un apóstol, cambió la vida de un monje y, a través de él, la historia de Europa.',
        { h: 'Lo que estaba en juego' },
        'El descubrimiento de Lutero no fue una idea nueva: era el mensaje de Pablo, que Agustín había defendido mil años antes. Lo nuevo fue que Lutero sacó todas sus consecuencias. Si somos justificados solo por la fe, entonces no hacen falta méritos acumulados, ni indulgencias, ni un sistema que venda el perdón. El perdón es un regalo. Esa convicción lo llevaría, en pocos años, a enfrentarse con el papa y el emperador.'
      ],
      pensar: 'Lutero buscó la paz con Dios en sus esfuerzos y la encontró en la gracia. ¿Hay algo en tu vida cristiana con lo que todavía intentas «ganarte» el favor de Dios?'
    },
    {
      id: 'tesis', n: 'Las 95 tesis', ref: 'Mateo 4:17; Hechos 3:19; Efesios 2:8-9', fecha: 1517,
      visual: [
        img('tesis.webp', 'Martín Lutero, un monje agustino de unos treinta y cuatro años con hábito negro y tonsura, fija un pliego de papel en la gran puerta de madera de la iglesia del castillo de Wittenberg; algunos estudiantes y vecinos lo observan', 'Wittenberg, 31 de octubre de 1517 (recreación de la tradición).'),
        pasos([
          { t: 'Wittenberg: las 95 tesis (octubre de 1517)', fecha: 1517, estado: { view: V.reforma, lugares: ['h-wittenberg'] } },
          { t: 'Heidelberg: Lutero explica su teología a los agustinos (1518)', fecha: 1518, estado: { view: V.reforma, lugares: ['h-wittenberg', 'h-heidelberg'] } },
          { t: 'Leipzig: debate con Juan Eck (1519)', fecha: 1519, estado: { view: V.reforma, lugares: ['h-wittenberg', 'h-heidelberg', 'h-leipzig'] } },
          { t: 'Wittenberg: Lutero quema la bula del papa (diciembre de 1520)', fecha: 1520, estado: { view: V.reforma, lugares: ['h-wittenberg', 'h-leipzig', 'h-roma'] } }
        ], 'De las tesis a la ruptura')
      ],
      texto: [
        'En 1517 llegó a los alrededores de Wittenberg un predicador de indulgencias, el dominico Juan Tetzel. El papa León X necesitaba dinero para construir la basílica de San Pedro en Roma, y el arzobispo Alberto de Maguncia, que debía grandes sumas, recibía una parte. Según la fama de su predicación, Tetzel prometía que el dinero entregado por un difunto lo libraba del purgatorio. Los fieles de Lutero cruzaban la frontera para comprar indulgencias y después le decían que ya no necesitaban arrepentirse.',
        { h: 'El 31 de octubre de 1517' },
        'Lutero escribió noventa y cinco tesis, es decir, afirmaciones para un debate académico, y el 31 de octubre de 1517 se las envió al arzobispo. Según una tradición antigua, ese mismo día las clavó en la puerta de la iglesia del castillo de Wittenberg, que servía de tablero de anuncios de la universidad; algunos historiadores dudan de que lo haya hecho así, pero la fecha se recuerda desde entonces como el Día de la Reforma.',
        'La primera tesis decía que, cuando Jesús mandó «Arrepentíos», quiso que toda la vida de los creyentes fuera arrepentimiento. Lutero recordaba que el perdón no se compra con dinero sino que nace de un corazón que se vuelve a Dios: «arrepentíos y convertíos, para que sean borrados vuestros pecados» (Hch 3:19). La tesis 62 resumía su convicción: el verdadero tesoro de la iglesia es el santo evangelio de la gloria y de la gracia de Dios.',
        { h: 'Un debate que no se detuvo' },
        'Lutero escribió en latín, para los eruditos, pero alguien tradujo las tesis al alemán y las imprimió. En dos semanas se leían en toda Alemania. En los años siguientes el debate se volvió más profundo. En Leipzig, en 1519, el teólogo Juan Eck lo llevó a reconocer que también los concilios podían equivocarse, y que Juan Hus había tenido razón en muchas cosas. En 1520 Lutero publicó tres libros que llegaron a miles de lectores: llamó a los príncipes a reformar la iglesia, criticó el sistema de los sacramentos y escribió sobre la libertad del cristiano, que es libre por la fe y servidor de todos por el amor.',
        'El papa respondió con una bula que le daba sesenta días para retractarse. El 10 de diciembre de 1520, ante los estudiantes, Lutero arrojó la bula al fuego. Ya no había vuelta atrás. Lo que empezó como una discusión sobre las indulgencias se había convertido en una pregunta sobre la autoridad: ¿quién decide lo que es verdad en la iglesia, el papa o la Escritura?',
        { ejercicio: {
          pregunta: '¿Qué criticaba principalmente Lutero en las 95 tesis?',
          opciones: [
            { t: 'La venta de indulgencias y la idea de que el perdón se podía comprar.', ok: true, por_que: 'Las tesis atacan la predicación de las indulgencias y recuerdan que el perdón viene del arrepentimiento y de la gracia de Dios.' },
            { t: 'El bautismo de los niños y la misa en latín.', ok: false, por_que: 'Esos temas aparecieron después, en otros debates; las 95 tesis tratan casi solo de las indulgencias y el arrepentimiento.' },
            { t: 'La existencia del papa y de los obispos.', ok: false, por_que: 'En 1517 Lutero todavía apelaba al papa; la ruptura con Roma llegó en los años siguientes.' }
          ],
          explicacion: 'Las tesis eran un llamado a debatir sobre las indulgencias. Lo que nadie esperaba era que, gracias a la imprenta, ese debate llegara en pocas semanas a toda Alemania.'
        } }
      ],
      pensar: 'Lutero dijo que toda la vida del creyente es arrepentimiento. ¿Qué significa para ti vivir en arrepentimiento día a día, y no solo el día de tu conversión?'
    },
    {
      id: 'worms', n: 'Worms y la Biblia alemana', ref: 'Hechos 5:29; Salmo 46:1; Hechos 4:19-20', fecha: [1521, 1546],
      visual: [
        img('wartburg.webp', 'Una pequeña habitación de madera en el castillo de Wartburg: una mesa con un Nuevo Testamento griego abierto, pliegos escritos a mano, una pluma, un tintero y una vela; por la ventana se ven los bosques de Turingia', 'La habitación de Wartburg donde Lutero tradujo el Nuevo Testamento en 1521-1522 (recreación).'),
        foto('biblia-lutero-1534.jpg', 'Portada de la Biblia completa de Lutero, impresa en Wittenberg en 1534, con un grabado en madera y el título en letra gótica alemana', 'Portada de la Biblia de Lutero (Wittenberg, 1534); arriba dice «Gottes wort bleibt ewig», la palabra de Dios permanece para siempre.', 'Dominio público, vía Wikimedia Commons'),
        mapa({ view: V.alemania, lugares: ['h-wittenberg', 'h-worms', 'h-wartburg', 'h-erfurt', 'h-augsburgo'], trazos: ['h-t-lutero'] }, 'Mapa')
      ],
      texto: [
        'En abril de 1521 Lutero fue citado ante la dieta imperial, la asamblea del imperio, en la ciudad de Worms. Presidía el joven emperador Carlos V, que también era rey de España. Lutero viajó con un salvoconducto, aunque sabía que a Juan Hus le habían dado uno y lo habían quemado igual. Frente a una mesa llena de sus libros, le preguntaron si los reconocía como suyos y si se retractaba.',
        { h: '«Mi conciencia está cautiva de la Palabra de Dios»' },
        'Lutero pidió un día para pensar. El 18 de abril respondió que, a menos que lo convencieran con el testimonio de la Escritura o con razones evidentes, no podía retractarse, porque su conciencia estaba cautiva de la Palabra de Dios, y actuar contra la conciencia no era seguro ni correcto. Las palabras «Aquí estoy, no puedo hacer otra cosa» aparecen en las primeras ediciones impresas, aunque quizá no las dijo así. Su actitud recuerda la de los apóstoles: «Es necesario obedecer a Dios antes que a los hombres» (Hch 5:29).',
        'El emperador lo declaró fuera de la ley. Camino a casa, unos jinetes lo secuestraron: eran hombres de su protector, el príncipe Federico de Sajonia, que lo escondieron en el castillo de Wartburg. Allí, disfrazado de caballero, Lutero tradujo el Nuevo Testamento del griego al alemán en unas once semanas. Se publicó en septiembre de 1522 y se agotó enseguida. En 1534, con la ayuda de otros eruditos, apareció la Biblia completa. Su alemán era el de la calle y la casa: Lutero decía que había que escuchar cómo habla la madre en su hogar y los niños en la calle. Esa traducción ayudó a formar la lengua alemana moderna.',
        { h: 'Una iglesia que canta' },
        'Lutero quiso que toda la congregación cantara, y no solo el coro. Escribió himnos en alemán con melodías fáciles; el más conocido, «Castillo fuerte es nuestro Dios», está inspirado en el Salmo 46: «Dios es nuestro amparo y fortaleza» (Sal 46:1). En 1525 se casó con Catalina de Bora, una exmonja, y su hogar se convirtió en modelo de la familia pastoral protestante. En 1530, sus colaboradores presentaron al emperador la Confesión de Augsburgo, que resume la fe luterana.',
        { h: 'Luces y sombras' },
        'Lutero tuvo también graves errores. En la guerra de los campesinos de 1525 pidió a los príncipes reprimir sin piedad a los rebeldes, y en sus últimos años escribió contra los judíos textos duros e injustos, que siglos después fueron usados para fines terribles. Las iglesias luteranas los han rechazado públicamente. Reconocer estas sombras no niega lo que Dios hizo por medio de él, pero recuerda que solo la Escritura, y no ningún reformador, es la regla de la fe. Lutero murió en 1546, en Eisleben, la ciudad donde había nacido.'
      ],
      pensar: 'Lutero arriesgó la vida antes que actuar contra su conciencia sujeta a la Palabra. ¿En qué situación de tu trabajo, tu estudio o tu familia te cuesta más obedecer a Dios antes que a los hombres?'
    },
    {
      id: 'solas', n: 'Las cinco «solas»', ref: 'Efesios 2:8-9; 2 Timoteo 3:16-17; 1 Timoteo 2:5; 1 Pedro 2:9', fecha: [1517, 1560],
      visual: [
        esq('esquema-solas.svg', 'Esquema de las cinco solas como columnas que sostienen un mismo techo: Sola Escritura (2 Ti 3:16-17), Sola gracia (Ef 2:8), Sola fe (Ro 3:28), Solo Cristo (1 Ti 2:5) y Solo a Dios la gloria (1 Co 10:31); en la base, el sacerdocio de todos los creyentes (1 P 2:9)', 'Las cinco convicciones de la Reforma.', 'Las cinco solas'),
        tabla({
          titulo: 'Qué afirmaban y qué rechazaban',
          cab: ['Convicción', 'Afirma', 'Rechaza'],
          filas: [
            ['Sola Escritura', 'La Biblia es la autoridad final en la fe y en la vida', 'Tradiciones y decretos que la contradicen o se ponen a su altura'],
            ['Sola gracia', 'La salvación es un regalo que Dios da sin que lo merezcamos', 'La idea de merecer el perdón'],
            ['Sola fe', 'Somos justificados al confiar en Cristo, no por obras', 'Indulgencias, méritos y obras como causa de la salvación'],
            ['Solo Cristo', 'Cristo es el único mediador y su sacrificio basta', 'Otros mediadores y la misa como sacrificio repetido'],
            ['Solo a Dios la gloria', 'Toda la vida es para la gloria de Dios', 'La gloria de los hombres y de las instituciones']
          ],
          nota: 'La lista de las cinco «solas» se formuló en el siglo XX; las convicciones son las de los reformadores del siglo XVI.'
        })
      ],
      texto: [
        'La Reforma no fue solo una protesta contra abusos. Fue la recuperación de convicciones bíblicas que los reformadores resumían con la palabra latina sola, «solo». Con el tiempo se ordenaron en cinco frases, que se repiten hasta hoy en las iglesias evangélicas.',
        { h: 'Sola Escritura' },
        'La Biblia es la autoridad final de la iglesia. Los reformadores no despreciaban a los padres de la iglesia ni los concilios, pero los ponían bajo la Escritura, porque «toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia» (2 Ti 3:16). De esta convicción nacieron las traducciones a las lenguas del pueblo y la predicación como centro del culto.',
        { h: 'Sola gracia, sola fe' },
        'La salvación es un regalo inmerecido: «por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe» (Ef 2:8-9). La fe no es una obra que gane la salvación, sino la mano vacía que recibe lo que Dios da. Los reformadores insistían en que la fe verdadera produce obras, porque somos creados en Cristo «para buenas obras» (Ef 2:10), pero las obras son fruto de la salvación y no su causa.',
        { h: 'Solo Cristo, solo a Dios la gloria' },
        'Cristo es suficiente. Hay «un solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5), y su sacrificio en la cruz no necesita repetirse, porque «con una sola ofrenda hizo perfectos para siempre a los santificados» (He 10:14). Por eso los reformadores rechazaron la intercesión de los santos como mediadores y la misa entendida como sacrificio. Y como todo viene de Dios, toda la gloria es suya: el trabajo, el hogar y el estudio pueden ser vividos «para la gloria de Dios» (1 Co 10:31).',
        { h: 'El sacerdocio de todos los creyentes' },
        'De estas convicciones surgió otra muy práctica. Si Cristo es el único mediador, todo creyente tiene acceso directo a Dios. Pedro llama a toda la iglesia «real sacerdocio» (1 P 2:9). Lutero enseñó que un zapatero o una madre que sirven a Dios en su vocación hacen una obra tan santa como la de un sacerdote. Los pastores siguen teniendo un llamado especial para enseñar, pero la iglesia no se divide en una clase de religiosos y otra de laicos pasivos: todos son ministros.',
        { ejercicio: {
          pregunta: 'Según los reformadores, ¿qué relación hay entre la fe y las buenas obras?',
          opciones: [
            { t: 'Las buenas obras no importan, porque basta con creer.', ok: false, por_que: 'Los reformadores enseñaron que la fe verdadera siempre produce obras; una fe sin obras está muerta (Stg 2:17).' },
            { t: 'Las buenas obras son el fruto de la salvación, no su causa.', ok: true, por_que: 'Somos salvos por la fe, y por eso hacemos buenas obras: creados en Cristo «para buenas obras» (Ef 2:10).' },
            { t: 'La fe y las obras juntas ganan la salvación.', ok: false, por_que: 'Esa era la enseñanza que los reformadores rechazaron: las obras no aportan méritos para ser justificados.' }
          ],
          explicacion: 'La fórmula clásica dice que somos justificados solo por la fe, pero la fe que justifica nunca está sola: siempre va acompañada de amor y de obras.'
        } }
      ],
      pensar: 'Pedro dice que todos los creyentes son «real sacerdocio». ¿Cómo puedes servir a Dios como sacerdote en el lugar donde trabajas o estudias esta semana?'
    },
    {
      id: 'zuinglio', n: 'Zuinglio y Zúrich', ref: '1 Corintios 11:23-26; Mateo 26:26-28; Hebreos 10:14', fecha: [1519, 1531],
      visual: [
        mapa({ view: V.suiza, lugares: ['h-zurich', 'h-basilea', 'h-ginebra', 'h-marburgo', 'h-estrasburgo'] }, 'Mapa'),
        cita('1 Corintios 11:23-26', '@@1co/11/23-26')
      ],
      texto: [
        'Al mismo tiempo que Lutero, pero sin depender de él, un sacerdote suizo llegaba a convicciones parecidas. Ulrico Zuinglio, nacido en 1484, era un humanista que había estudiado el Nuevo Testamento griego de Erasmo y lo copiaba a mano para aprenderlo de memoria. El 1 de enero de 1519 asumió como predicador de la catedral de Zúrich y anunció algo nuevo: en vez de seguir las lecturas fijas del año, predicaría el Evangelio de Mateo capítulo por capítulo.',
        { h: 'La reforma de una ciudad' },
        'La predicación de Zuinglio fue cambiando la ciudad. En 1522 algunos de sus amigos comieron salchichas en Cuaresma, y él los defendió diciendo que la Escritura no prohibía comer carne en esos días. En 1523 el concejo de Zúrich organizó un debate público y decidió que en la ciudad se predicaría solo lo que pudiera probarse con la Biblia. Se quitaron las imágenes de las iglesias, se suprimió la misa y la Cena del Señor se celebró con sencillez. Zuinglio reunía cada mañana a los pastores para estudiar el Antiguo Testamento en hebreo y el Nuevo en griego; de ese trabajo salió la Biblia de Zúrich, completa en 1531.',
        { h: 'Marburgo: la Cena del Señor' },
        'Los príncipes protestantes querían una alianza entre alemanes y suizos, y en 1529 reunieron a Lutero y Zuinglio en Marburgo. Estuvieron de acuerdo en catorce de quince puntos: la Trinidad, la justificación por la fe, la autoridad de la Escritura. Pero no se pusieron de acuerdo en la Cena del Señor. Lutero escribió con tiza sobre la mesa «Esto es mi cuerpo» (Mt 26:26) y no aceptó otra interpretación. Se separaron sin darse la mano como hermanos, y la Reforma quedó dividida en dos ramas: la luterana y la reformada.',
        { posturas: {
          titulo: '¿Qué significa «esto es mi cuerpo»?',
          a: { n: 'Presencia real (Lutero)', t: 'Cristo está presente con su cuerpo y su sangre «en, con y bajo» el pan y el vino, aunque estos no se transforman. Las palabras de Jesús deben tomarse literalmente (Mt 26:26).' },
          b: { n: 'Memorial (Zuinglio)', t: 'El pan y el vino representan el cuerpo y la sangre de Cristo. La Cena es un recuerdo y una proclamación de su muerte: «haced esto en memoria de mí» (1 Co 11:24), «la muerte del Señor anunciáis hasta que él venga» (1 Co 11:26).' },
          c: 'Calvino propuso un camino intermedio: Cristo está presente espiritualmente y el creyente se alimenta de Él por la fe. Las iglesias pentecostales y la mayoría de las evangélicas de América Latina celebran la Cena como una ordenanza que Cristo mandó, un memorial de su muerte, una comunión con Él por la fe y un anuncio de su venida, sin entender que el pan y el vino cambien de sustancia ni que se repita su sacrificio (He 10:14).'
        } },
        'Zuinglio murió en 1531 en la batalla de Kappel, adonde había ido como capellán de las tropas de Zúrich en una guerra contra los cantones católicos. Su sucesor, Enrique Bullinger, condujo la iglesia de Zúrich durante más de cuarenta años, y su obra preparó el camino de Calvino.'
      ],
      pensar: 'Lutero y Zuinglio coincidían en casi todo y se separaron por un solo punto. ¿Cómo distingues entre las verdades por las que vale la pena separarse y las diferencias que pueden convivir dentro del amor?'
    },
    {
      id: 'calvino', n: 'Calvino y Ginebra', ref: 'Romanos 11:36; Efesios 4:11-12; Salmo 119:105', fecha: [1536, 1564],
      visual: [
        foto('calvino.jpg', 'Retrato anónimo de Juan Calvino, del siglo XVI: un hombre delgado de barba larga y oscura, con gorro negro y ropa de erudito', 'Juan Calvino, retrato anónimo francés de hacia 1550 (Museo Catharijneconvent, Utrecht).', 'Dominio público, vía Wikimedia Commons', 'Retrato'),
        pasos([
          { t: 'Ginebra, ciudad de la Reforma (1541)', fecha: 1541, estado: { view: V.europa, lugares: ['h-ginebra'] } },
          { t: 'Llegan refugiados de Francia, Italia, España, Inglaterra y Escocia', fecha: 1555, estado: { view: V.europa, lugares: ['h-ginebra', 'h-paris', 'h-roma', 'h-sevilla', 'h-londres', 'h-edimburgo'] } },
          { t: 'Vuelven a sus países: hugonotes, reformados, puritanos y presbiterianos', fecha: 1560, estado: { view: V.europa1600, capas: ['h-reformados'], lugares: ['h-ginebra', 'h-paris', 'h-amsterdam', 'h-edimburgo', 'h-londres'] } }
        ], 'Ginebra y sus refugiados')
      ],
      texto: [
        'Juan Calvino nació en 1509 en Noyon, Francia, y estudió derecho y letras clásicas. Hacia 1533 tuvo lo que él llamó una «conversión súbita»: Dios sometió su corazón a la enseñanza de la Escritura. Como Francia perseguía a los evangélicos, tuvo que huir. En 1536, con apenas 26 años, publicó en Basilea la Institución de la religión cristiana, una exposición ordenada de la fe que dedicó al rey de Francia para defender a sus hermanos perseguidos. La fue ampliando toda su vida, hasta la edición de 1559.',
        { h: 'Ginebra' },
        'Ese mismo año, de paso por Ginebra, el predicador Guillermo Farel lo convenció de quedarse para ayudar a reformar la ciudad. Los primeros años fueron difíciles: en 1538 los expulsaron. Calvino vivió tres años felices en Estrasburgo, como pastor de los refugiados franceses, y allí se casó. En 1541 Ginebra le rogó que volviera, y se quedó hasta su muerte en 1564. Organizó la iglesia con cuatro ministerios: pastores que predican, maestros que enseñan, ancianos que cuidan la vida de la congregación y diáconos que atienden a los pobres. Predicaba casi todos los días, libro por libro de la Biblia.',
        { h: 'Una escuela para Europa' },
        'Ginebra se convirtió en refugio de perseguidos. Llegaron miles de franceses, italianos, ingleses, escoceses y también españoles, entre ellos varios de los monjes que huyeron de Sevilla con Casiodoro de Reina. En 1559 Calvino fundó una academia para formar pastores, y de allí salieron predicadores hacia Francia, los Países Bajos, Escocia y Hungría. En Ginebra se preparó la Biblia de Ginebra en inglés (1560), la Biblia de los puritanos. El escocés Juan Knox, que vivió allí, escribió que era la escuela de Cristo más perfecta desde los días de los apóstoles.',
        { h: 'Su enseñanza y su sombra' },
        'En el centro de la teología de Calvino estaba la soberanía de Dios, de quien, por quien y para quien son todas las cosas (Ro 11:36). Enseñó con fuerza la autoridad de la Escritura, la unión del creyente con Cristo, la obra del Espíritu Santo y la predestinación, un tema que después dividió a sus herederos y que se estudia en la ruta III. Su legado incluye también una mancha: en 1553 apoyó el proceso contra Miguel Servet, un médico español que negaba la Trinidad, quien murió en la hoguera en Ginebra. Así se castigaba entonces la herejía en casi toda Europa, católica y protestante, pero es un recordatorio de que la verdad no se defiende con la espada. En 1903, los reformados de Ginebra levantaron un monumento de arrepentimiento en el lugar donde murió Servet.'
      ],
      pensar: 'Calvino organizó la iglesia para que cada creyente fuera cuidado: con predicación, enseñanza, ancianos que velan y diáconos que sirven a los necesitados. ¿Cuál de esos ministerios necesita hoy más tu ayuda en tu congregación?'
    },
    {
      id: 'radicales', n: 'La reforma radical', ref: 'Hechos 2:38-41; Hechos 8:36-38; Romanos 6:3-4', fecha: [1525, 1561],
      visual: [
        img('bautismo-1525.webp', 'En la sala sencilla de una casa de Zúrich, en invierno de 1525, un hombre arrodillado recibe agua sobre la cabeza de manos de otro, ante un pequeño grupo de hombres y mujeres con ropa de artesanos del siglo XVI que oran en silencio; la luz de una ventana pequeña ilumina la escena', 'Los primeros bautismos de creyentes en Zúrich, enero de 1525 (recreación; personas anónimas).'),
        cita('Hechos 8:36-38', '@@hch/8/36-38')
      ],
      texto: [
        'Entre los alumnos de Zuinglio había un grupo de jóvenes que quería llevar la Reforma más lejos. Conrado Grebel, Félix Manz y otros leían el Nuevo Testamento y no encontraban en él el bautismo de recién nacidos. En Hechos, primero se oye el evangelio, se cree y luego se bautiza: «los que recibieron su palabra fueron bautizados» (Hch 2:41). Pidieron a Zuinglio y al concejo de Zúrich que la iglesia estuviera formada solo por creyentes que se bautizaran por decisión propia. El concejo se negó y ordenó bautizar a todos los niños.',
        { h: 'El 21 de enero de 1525' },
        'Esa noche, en una casa de Zúrich, el grupo se reunió a orar. Jorge Blaurock pidió a Grebel que lo bautizara según su fe, y después él bautizó a los demás. Fue el comienzo de un movimiento que sus enemigos llamaron «anabautista», es decir, de los que bautizan otra vez. Ellos no lo veían así: entendían que el bautismo de un bebé no era el bautismo del Nuevo Testamento.',
        'La persecución fue terrible, y vino tanto de católicos como de protestantes. Félix Manz fue ahogado en el río Limmat en enero de 1527, por orden de las autoridades protestantes de Zúrich. Ese mismo año, Miguel Sattler fue quemado en Alemania pocos meses después de redactar la Confesión de Schleitheim, que resume la fe de los hermanos suizos: bautismo de creyentes, disciplina en la iglesia, separación del mundo y rechazo de la espada. Miles de anabautistas murieron en las décadas siguientes, muchos cantando himnos camino a la muerte.',
        { h: 'Münster y Menno Simons' },
        'En 1534 un grupo de radicales violentos tomó la ciudad de Münster y proclamó un reino apocalíptico, que terminó en una masacre en 1535. Ese episodio, ajeno a la mayoría pacífica, desprestigió a todos los anabautistas. Un exsacerdote holandés, Menno Simons, reunió a los dispersos y les dio una dirección pacífica; de él vienen los menonitas.',
        { posturas: {
          titulo: '¿A quién se bautiza?',
          a: { n: 'Bautismo de niños', t: 'Luteranos, reformados, anglicanos y católicos bautizan a los hijos de los creyentes. Ven el bautismo como señal del pacto, como la circuncisión en Israel (Col 2:11-12), y recuerdan que en Hechos se bautizaron familias enteras (Hch 16:33).' },
          b: { n: 'Bautismo de creyentes', t: 'Anabautistas, bautistas, pentecostales y la mayoría de las iglesias evangélicas de América Latina bautizan a quienes creen y confiesan su fe. En el Nuevo Testamento el orden es creer y luego bautizarse (Hch 2:38-41; 8:12, 36-38), y la inmersión expresa la muerte y resurrección con Cristo (Ro 6:3-4).' },
          c: 'Este recurso sigue el bautismo de creyentes por inmersión, como lo enseña la mayoría de las iglesias evangélicas de habla hispana. Reconoce, a la vez, que quienes bautizan niños lo hacen convencidos de seguir la Escritura, y que el bautismo no salva por sí mismo: es la confesión pública de una fe que ya salvó.'
        } },
        'El legado de los anabautistas es enorme. Insistieron en que la fe no se impone por la fuerza, en que la iglesia y el Estado deben estar separados y en que la conciencia debe ser libre. Siglos después, esas convicciones fueron aceptadas por casi todas las iglesias evangélicas.'
      ],
      pensar: 'Los anabautistas pagaron con la vida su convicción de que la fe es una decisión personal. ¿Qué significó tu bautismo para ti, y qué significa hoy?'
    },
    {
      id: 'inglaterra', n: 'Inglaterra y Escocia', ref: 'Salmo 119:105; Hechos 7:59-60; Apocalipsis 2:10', fecha: [1526, 1611],
      visual: [
        img('contrabando.webp', 'Un muelle de Londres en 1526: estibadores descargan fardos de tela de un barco mercante; uno de los fardos está abierto y deja ver pequeños libros impresos escondidos entre la tela, que un comerciante cubre con rapidez mientras mira de reojo', 'Los Nuevos Testamentos de Tyndale entraban a Inglaterra escondidos en fardos de mercadería (recreación; personas anónimas).'),
        foto('tyndale-1526.jpg', 'Facsímil del Nuevo Testamento de Guillermo Tyndale abierto en el comienzo del Evangelio de Juan, con letra gótica, iniciales de colores y un grabado del evangelista escribiendo', 'Comienzo del Evangelio de Juan en un facsímil del Nuevo Testamento de Tyndale.', 'Foto: Kevin Rawlings, CC BY 2.0, vía Wikimedia Commons'),
        mapa({ view: V.britania, capas: ['h-anglicanos', 'h-reformados'], lugares: ['h-londres', 'h-oxford', 'h-edimburgo', 'h-amberes', 'h-worms'] }, 'Mapa')
      ],
      texto: [
        'En Inglaterra la Reforma tuvo dos caras: una historia de fe y una historia de poder. La de fe comienza con Guillermo Tyndale, un erudito que quería que el pueblo inglés tuviera la Biblia traducida del griego y del hebreo. Según un testigo de la época, le dijo a un clérigo que, si Dios le daba vida, haría que el muchacho que guía el arado supiera más de la Escritura que él. Como en Inglaterra estaba prohibido traducirla, Tyndale se fue al continente y en 1526 imprimió en Worms su Nuevo Testamento. Los ejemplares entraban escondidos en fardos de tela; los obispos los compraban para quemarlos.',
        'Tyndale fue traicionado en Amberes, encarcelado y, en octubre de 1536, estrangulado y quemado. Según el relato de su muerte, sus últimas palabras fueron una oración: «Señor, abre los ojos del rey de Inglaterra».',
        { h: 'Un rey contra el papa' },
        'La otra cara es política. El rey Enrique VIII quería anular su matrimonio con Catalina de Aragón, que no le había dado un hijo varón, y el papa no lo permitió. En 1534 el Parlamento lo declaró jefe supremo de la iglesia de Inglaterra. Enrique no era protestante de corazón, pero la ruptura con Roma abrió la puerta. En 1539 ordenó poner en cada iglesia la Gran Biblia en inglés, basada en gran parte en la traducción de Tyndale: tres años después de su muerte, la oración del mártir tenía respuesta. Bajo su hijo Eduardo VI, el arzobispo Tomás Cranmer preparó el Libro de Oración Común (1549).',
        { h: 'Los mártires y el acuerdo isabelino' },
        'Entre 1553 y 1558 reinó María Tudor, que restauró el catolicismo. Cerca de trescientas personas murieron en la hoguera, entre ellas los obispos Latimer y Ridley y el propio Cranmer. Según el relato de Juan Foxe, Latimer animó a su compañero diciendo que ese día encenderían en Inglaterra una vela que, por la gracia de Dios, nunca se apagaría. Con Isabel I (1558-1603) se estableció una iglesia de Inglaterra protestante en su doctrina, con obispos y liturgia: el anglicanismo. Su sobrino nieto, Jacobo I, mandó preparar la versión de 1611, que todavía conserva buena parte de las palabras de Tyndale.',
        { h: 'Escocia' },
        'En Escocia la Reforma fue más popular y más ligada a Ginebra. Juan Knox, que había sido condenado a remar en las galeras francesas y luego vivió con Calvino, volvió en 1559. En 1560 el Parlamento escocés adoptó una confesión reformada, y nació la Iglesia de Escocia, gobernada por ancianos o presbíteros. De ella vienen los presbiterianos, que siglos después llegarían a América Latina.'
      ],
      pensar: 'Tyndale murió orando por el rey que lo perseguía, y Dios respondió su oración. ¿Por qué autoridad o persona difícil puedes orar hoy, en vez de solo quejarte?'
    },
    {
      id: 'espana', n: 'La Reforma en España', ref: 'Isaías 40:8; Apocalipsis 2:10; Hebreos 11:36-38', fecha: [1529, 1602],
      visual: [
        img('../de-la-biblia-a-nosotros/img/casiodoro-basilea.webp', 'Casiodoro de Reina, un hombre de unos cincuenta años con barba castaña entrecana y ropa negra de erudito del siglo XVI, revisa un pliego recién impreso en un taller de imprenta de Basilea', 'Casiodoro de Reina en Basilea, 1569 (recreación).'),
        mapa({ view: V.reina, lugares: ['h-sevilla', 'h-valladolid', 'h-ginebra', 'h-londres', 'h-amberes', 'h-francfort', 'h-estrasburgo', 'h-basilea', 'h-amsterdam'], trazos: ['h-t-reina'] }, 'La huida de Reina'),
        foto('../de-la-biblia-a-nosotros/img/biblia-del-oso.webp', 'Portada de la Biblia del Oso de 1569, con el grabado de un oso que come miel de un panal en un árbol', 'Portada de la Biblia del Oso (Basilea, 1569).', 'Dominio público, vía Wikimedia Commons')
      ],
      texto: [
        'Es fácil pensar que la Reforma fue un asunto del norte de Europa, pero también llegó a España. Allí había una larga tradición de estudio bíblico: la Universidad de Alcalá había publicado la Biblia Políglota Complutense, y las obras de Erasmo eran muy leídas. Algunos españoles abrazaron el evangelio y lo pagaron con el exilio o con la vida.',
        { h: 'Los primeros evangélicos españoles' },
        'Juan de Valdés, un humanista de Cuenca, escribió en 1529 un Diálogo de doctrina cristiana y reunió en Nápoles un círculo de creyentes que leía las cartas de Pablo. Francisco de Enzinas, de Burgos, tradujo el Nuevo Testamento del griego y en 1543 se lo presentó al emperador Carlos V; terminó en la cárcel, de donde escapó. Juan Pérez de Pineda publicó otro Nuevo Testamento en Ginebra en 1556. Mientras tanto, en Sevilla y en Valladolid se formaron grupos de lectores de la Biblia y de libros de la Reforma, entre ellos los monjes jerónimos del monasterio de San Isidoro del Campo.',
        { h: 'La huida y los autos de fe' },
        'Un sevillano llamado Julián Hernández llevaba libros evangélicos desde Ginebra escondidos en toneles. En 1557 la Inquisición descubrió los grupos. Doce monjes de San Isidoro alcanzaron a huir, entre ellos Casiodoro de Reina y Cipriano de Valera. Los que se quedaron no tuvieron esa suerte. En 1559 y 1560 se celebraron grandes autos de fe en Valladolid y en Sevilla, con el rey Felipe II presente en uno de ellos. Decenas de personas murieron en la hoguera, entre ellas Julián Hernández, y muchas más fueron condenadas a prisión. A Reina lo quemaron en efigie, porque no lo pudieron atrapar. En pocos años, la Reforma desapareció de España.',
        { h: 'La Biblia del Oso' },
        'Reina vivió como refugiado en Ginebra, Londres, Amberes, Fráncfort y Estrasburgo, perseguido incluso fuera de España, mientras traducía la Biblia del hebreo y del griego. En 1569, en Basilea, se imprimió la primera Biblia completa en español traducida de las lenguas originales, conocida por el oso de su portada. En ella Reina puso el versículo: «la palabra del Dios nuestro permanece para siempre» (Is 40:8). Cipriano de Valera la revisó y la publicó en Ámsterdam en 1602. La Biblia que hoy leen millones de hispanos nació de esos exiliados.',
        'Pero la Biblia de Reina casi no pudo entrar en España ni en América. Durante casi tres siglos, el mundo de habla hispana vivió sin acceso libre a la Escritura en su lengua. La ruta VII cuenta cómo esa Biblia llegó por fin a nuestros países.',
        ir('Leer la historia de la Reina-Valera', '../../de-la-biblia-a-nosotros/'),
        { ejercicio: {
          pregunta: '¿Dónde se imprimió la Biblia del Oso de Casiodoro de Reina, y por qué allí?',
          opciones: [
            { t: 'En Sevilla, con permiso del rey Felipe II.', ok: false, por_que: 'En España estaba prohibida; Reina había huido de Sevilla en 1557 perseguido por la Inquisición.' },
            { t: 'En Basilea, porque en España los evangélicos eran perseguidos.', ok: true, por_que: 'Reina era un exiliado; la imprimió en Basilea, Suiza, en 1569, donde podía hacerlo con libertad.' },
            { t: 'En Roma, por encargo del papa.', ok: false, por_que: 'La Biblia del Oso fue obra de un reformador perseguido; Roma no autorizaba traducciones protestantes.' }
          ],
          explicacion: 'La primera Biblia completa en español traducida de los originales se imprimió en el exilio. La revisión de Valera, de 1602, también se imprimió fuera de España, en Ámsterdam.'
        } }
      ],
      pensar: 'Hebreos recuerda a los que «experimentaron vituperios y azotes, y a más de esto prisiones y cárceles» (He 11:36) por su fe. ¿Qué te dice el precio que pagaron los evangélicos españoles sobre el valor de la Biblia que hoy lees libremente?'
    }
  ];
