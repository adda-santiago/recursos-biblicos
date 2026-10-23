  // ================== RUTA III. Organización y controversias ==================
  const organizacion = [
    {
      id: 'obras', n: '¿Dos o tres obras de gracia?', ref: 'Hebreos 10:10-14; 2 Corintios 3:18; 1 Tesalonicenses 5:23', fecha: [1906, 1912],
      visual: [
        esq('esquema-obras.svg', 'Esquema con dos columnas. Santidad pentecostal: conversión, santificación completa como segunda obra instantánea y bautismo en el Espíritu como tercera. Obra consumada: conversión, santificación progresiva durante toda la vida y bautismo en el Espíritu como segunda obra', 'Las dos maneras en que los primeros pentecostales ordenaron la vida cristiana.'),
        cita('Hebreos 10:10-14', '@@he/10/10-14')
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
        cita('Mateo 28:19', '@@mt/28/19')
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
        cita('Judas 1:3', '@@jud/1/3')
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
        cita('Hechos 10:44-46', '@@hch/10/44-46')
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
        cita('Mateo 10:8', '@@mt/10/8')
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

