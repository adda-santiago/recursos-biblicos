/* ==========================================================
   Recursos Bíblicos — Dios y la Trinidad · contenido de las rutas
   FUENTE de public/apps/dios-y-la-trinidad/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/trinidad_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica.
   La deidad del Hijo y del Espíritu se trata aquí solo en lo que necesita la Trinidad:
   el desarrollo completo va en La persona y obra de Cristo y en El Espíritu Santo.
   ========================================================== */
(() => {
  /* ---------------- I. Conocer a Dios ---------------- */
  const conocer = [
    {
      id: 'conocer', n: '¿Se puede conocer a Dios?', ref: 'Jeremías 9:23-24; Juan 17:3; Romanos 11:33-36',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Así dijo Jehová: No se alabe el sabio en su sabiduría, ni en su valentía se alabe el valiente, ni el rico se alabe en sus riquezas. Mas alábese en esto el que se hubiere de alabar: en entenderme y conocerme, que yo soy Jehová, que hago misericordia, juicio y justicia en la tierra; porque estas cosas quiero, dice Jehová.', ref: 'Jeremías 9:23-24' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos verdades que van juntas',
          cab: ['Dios es incomprensible', 'Dios es cognoscible'],
          filas: [
            ['Nadie lo conoce por completo: sus juicios son insondables (Ro 11:33)', 'Se le puede conocer de verdad, porque Él se reveló (Jer 9:24)'],
            ['Sus pensamientos son más altos que los nuestros (Is 55:8-9)', 'Conocerlo es la vida eterna (Jn 17:3)'],
            ['Habita en luz inaccesible (1 Ti 6:16)', 'El Hijo le ha dado a conocer (Jn 1:18)'],
            ['Lo secreto le pertenece a Él (Dt 29:29)', 'Lo revelado es para nosotros y nuestros hijos (Dt 29:29)']
          ],
          nota: 'Conocer a Dios de verdad no es conocerlo del todo. La humildad y la confianza crecen juntas.'
        } }
      ],
      texto: [
        'Todo este recurso descansa sobre una pregunta previa: ¿puede un ser humano conocer a Dios? Las personas responden de maneras muy distintas. Algunos dicen que Dios, si existe, está tan lejos que no se puede saber nada de Él. Otros piensan que cada uno se lo imagina a su manera y que todas las ideas valen lo mismo. La Biblia no acepta ninguna de las dos respuestas.',
        'Por un lado, enseña que Dios es incomprensible, es decir, que ninguna mente creada puede abarcarlo por completo. Pablo termina su gran explicación del plan de salvación con una exclamación: «¡Oh profundidad de las riquezas de la sabiduría y de la ciencia de Dios! ¡Cuán insondables son sus juicios, e inescrutables sus caminos!» (Ro 11:33). Por medio de Isaías el Señor dice que sus pensamientos y sus caminos están tan por encima de los nuestros como el cielo está por encima de la tierra (Is 55:8-9). Quien cree haber entendido todo sobre Dios ya no está hablando del Dios de la Biblia.',
        { h: 'Pero Dios se deja conocer' },
        'Por otro lado, la Escritura insiste en que Dios puede ser conocido de verdad, porque Él mismo se dio a conocer. Por medio de Jeremías dice que el único motivo legítimo para gloriarse es este: «en entenderme y conocerme, que yo soy Jehová» (Jer 9:24). Y Jesús define la vida eterna con esas mismas palabras: «Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado» (Jn 17:3).',
        'Conocer a Dios, en la Biblia, no es solo tener datos correctos sobre Él. Es una relación: confiar, amar, obedecer y adorar. Pero esa relación necesita verdad. No se puede amar a alguien de quien se tiene una idea equivocada. Por eso este recurso estudia lo que Dios dijo de sí mismo: que existe, que es espíritu, que es uno, cuáles son sus nombres y sus atributos, y cómo se reveló como Padre, Hijo y Espíritu Santo.',
        'La fuente de ese conocimiento es la revelación: lo que Dios mostró en la creación y, sobre todo, lo que dijo en la Escritura y en su Hijo. Cómo se revela Dios y por qué la Biblia tiene autoridad se estudia en otro recurso del sitio.',
        { ir: { t: 'Ver La Palabra de Dios', a: '../../palabra-de-dios/' } },
        { ejercicio: {
          pregunta: '¿Cuál de estas afirmaciones resume mejor lo que enseña la Biblia sobre el conocimiento de Dios?',
          opciones: [
            { t: 'Dios no se puede conocer; solo podemos tener opiniones sobre Él.', ok: false, por_que: 'Jeremías 9:24 y Juan 17:3 dicen que Dios sí puede ser conocido, porque Él se reveló.' },
            { t: 'Dios se puede conocer de verdad, aunque nunca por completo.', ok: true, por_que: 'Las dos verdades van juntas: Dios es incomprensible (Romanos 11:33) y a la vez se dio a conocer (Juan 1:18).' },
            { t: 'Con suficiente estudio, una persona puede llegar a entender a Dios por completo.', ok: false, por_que: 'Isaías 55:8-9 y Romanos 11:33 lo descartan: sus caminos son inescrutables para cualquier mente creada.' }
          ],
          explicacion: 'El creyente conoce a Dios de verdad porque Dios habló, y lo adora porque siempre queda más por conocer.'
        } }
      ],
      pensar: 'Jesús dijo que la vida eterna es conocer al único Dios verdadero (Jn 17:3). ¿Tu relación con Dios se parece más a conocer datos sobre Él o a conocerlo a Él?'
    },
    {
      id: 'existe', n: 'Dios existe', ref: 'Salmo 14:1; Romanos 1:19-21; Hebreos 11:6',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../palabra-de-dios/img/cielo-estrellado.webp', alt: 'Un pastor joven sentado sobre una roca en las colinas de Judea mira un cielo nocturno cubierto de estrellas, con su rebaño dormido alrededor', pie: 'Las cosas invisibles de Dios se hacen visibles por medio de lo creado (Romanos 1:20).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los argumentos clásicos y lo que alcanzan',
          cab: ['Argumento', 'Qué observa', 'Hasta dónde llega'],
          filas: [
            ['De la causa', 'Todo lo que comienza a existir tiene una causa; el universo tuvo un comienzo', 'Una causa primera, poderosa y fuera del universo'],
            ['Del diseño', 'El orden, la belleza y la precisión de la naturaleza y de la vida', 'Una inteligencia que diseñó'],
            ['Moral', 'Todos los pueblos distinguen el bien del mal y se sienten obligados por él', 'Un legislador justo, fuente del bien'],
            ['De la experiencia humana', 'El anhelo de eternidad y de sentido que ningún bien de este mundo llena', 'Que fuimos hechos para algo más que lo terrenal'],
            ['De la historia', 'La resurrección de Cristo y el testimonio de sus testigos', 'Que Dios actuó en la historia (1 Co 15:3-8)']
          ],
          nota: 'Ningún argumento lleva por sí solo a la fe salvadora; todos dejan sin excusa a quien rechaza a Dios (Ro 1:20).'
        } }
      ],
      texto: [
        'La Biblia no comienza demostrando que Dios existe. Comienza afirmándolo: «En el principio creó Dios los cielos y la tierra» (Gn 1:1). Para los autores bíblicos, la existencia de Dios es el punto de partida de todo lo demás, no una conclusión a la que se llega al final. Por eso la Escritura no considera el ateísmo una postura intelectual neutral, sino una necedad moral: «Dice el necio en su corazón: No hay Dios» (Sal 14:1). Lo dice en el corazón, no en la cabeza: el problema de fondo es que no quiere a Dios.',
        'Pablo explica por qué. Lo que se puede conocer de Dios «les es manifiesto, pues Dios se lo manifestó» (Ro 1:19). El poder eterno y la deidad de Dios se ven con claridad en lo creado, de modo que nadie tiene excusa (Ro 1:20). El problema no es la falta de pruebas, sino que los seres humanos, habiendo conocido a Dios, no le glorificaron como a Dios ni le dieron gracias (Ro 1:21).',
        { h: 'Los argumentos y su lugar' },
        'A lo largo de la historia, los creyentes han ofrecido argumentos para mostrar que la fe en Dios es razonable. La tabla resume los más conocidos. Observan que el universo tuvo un comienzo y necesita una causa; que la vida muestra un diseño admirable; que todos los pueblos reconocen una ley moral que no inventaron; que el corazón humano anhela la eternidad (Ec 3:11); y que la resurrección de Cristo es un hecho histórico con testigos.',
        'Estos argumentos son útiles. Ayudan al creyente que duda, responden a objeciones y muestran que creer no es irracional. Pero tienen un límite. Llevan a reconocer que existe un Creador poderoso, sabio y justo, no a confiar en Cristo para salvación. Nadie se convierte por un silogismo. La fe que salva nace de oír la Palabra de Dios (Ro 10:17), y el Espíritu Santo es quien convence al mundo de pecado, de justicia y de juicio (Jn 16:8).',
        { h: 'Creer que Él existe' },
        'Hebreos pone la existencia de Dios en el centro de la fe: «es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan» (He 11:6). No basta con admitir que existe un ser superior; hay que acercarse a Él y buscarlo, confiando en que responde a quien lo busca.',
        { ejercicio: {
          pregunta: 'Según Romanos 1:19-21, ¿cuál es el problema de fondo de quien niega a Dios?',
          opciones: [
            { t: 'Que nunca recibió suficientes pruebas de que Dios existe.', ok: false, por_que: 'Pablo dice lo contrario: Dios se lo manifestó, y lo invisible de Dios se ve claramente en la creación.' },
            { t: 'Que, conociendo algo de Dios, no quiso glorificarle ni darle gracias.', ok: true, por_que: 'Es lo que dice Romanos 1:21. La raíz es moral y espiritual, no solo intelectual.' },
            { t: 'Que los argumentos filosóficos son demasiado difíciles de entender.', ok: false, por_que: 'El testimonio de la creación es claro para todos, no solo para los filósofos.' }
          ],
          explicacion: 'Los argumentos ayudan, pero la necesidad más profunda del incrédulo es que el Espíritu le convenza y que oiga el evangelio.'
        } }
      ],
      pensar: 'Hebreos 11:6 pide creer que Dios existe y que recompensa a los que le buscan. ¿Crees lo segundo con la misma firmeza que lo primero?'
    },
    {
      id: 'espiritu', n: 'Dios es espíritu', ref: 'Juan 4:19-24; 1 Timoteo 1:17; Deuteronomio 4:15-19',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/samaritana.webp', alt: 'Junto al pozo de Jacob, al mediodía, una mujer samaritana con un cántaro escucha a Jesús, que está sentado en el brocal y se ve de espaldas; al fondo, el monte Gerizim', pie: '«Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren» (Juan 4:24).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Jesús le dijo: Mujer, créeme, que la hora viene cuando ni en este monte ni en Jerusalén adoraréis al Padre. Vosotros adoráis lo que no sabéis; nosotros adoramos lo que sabemos; porque la salvación viene de los judíos. Mas la hora viene, y ahora es, cuando los verdaderos adoradores adorarán al Padre en espíritu y en verdad; porque también el Padre tales adoradores busca que le adoren. Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren.', ref: 'Juan 4:21-24' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuando la Biblia habla de Dios con figuras humanas',
          cab: ['Expresión', 'Ejemplo', 'Qué quiere decir'],
          filas: [
            ['El brazo de Jehová', 'Is 53:1; Éx 6:6', 'Su poder para salvar'],
            ['Los ojos de Jehová', '2 Cr 16:9; Pr 15:3', 'Que todo lo ve y cuida a los suyos'],
            ['El oído de Dios', 'Sal 34:15; Is 59:1', 'Que escucha la oración'],
            ['Bajo sus alas', 'Sal 91:4', 'Su protección, como la de un ave'],
            ['La mano de Dios', 'Esd 7:9; Hch 11:21', 'Su acción y su favor'],
            ['Se arrepintió', 'Gn 6:6; Jon 3:10', 'Su respuesta real ante la conducta humana (ver ruta III)']
          ],
          nota: 'Son antropomorfismos: maneras de hablar de Dios con imágenes humanas para que podamos entender lo que hace.'
        } }
      ],
      texto: [
        'Junto al pozo de Jacob, una mujer samaritana quiso discutir con Jesús dónde había que adorar: en el monte Gerizim, como decían los samaritanos, o en Jerusalén, como decían los judíos. Jesús llevó la conversación a algo más profundo: «Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren» (Jn 4:24).',
        'Decir que Dios es espíritu significa que no tiene cuerpo ni está hecho de materia. No está limitado a un lugar, no se puede ver con los ojos ni tocar con las manos. Pablo lo llama el Rey de los siglos, «inmortal, invisible» (1 Ti 1:17), y dice que habita en luz inaccesible, «a quien ninguno de los hombres ha visto ni puede ver» (1 Ti 6:16). Jesús mismo, después de resucitar, explicó la diferencia: «un espíritu no tiene carne ni huesos, como veis que yo tengo» (Lc 24:39). Esa diferencia muestra el milagro de la encarnación: el Hijo eterno tomó un cuerpo verdadero.',
        { h: 'Sin imágenes' },
        'De esta verdad nace el segundo mandamiento. Moisés recordó al pueblo que en el Sinaí no vio ninguna figura: Dios habló desde el fuego, pero sin forma visible. Por eso les advirtió que no se hicieran imagen alguna para adorarla (Dt 4:15-16). Toda imagen de Dios lo achica: lo vuelve un objeto del tamaño de lo que el artista puede fabricar. Isaías se burla de ello: ¿a qué compararán a Dios, o qué imagen le compondrán? (Is 40:18).',
        { h: 'Brazos, ojos y alas' },
        'Si Dios no tiene cuerpo, ¿por qué la Biblia habla de sus ojos, de su brazo o de sus alas? Porque usa imágenes humanas para describir lo que Dios hace. La tabla muestra algunas. Cuando el salmista dice que los ojos de Jehová están sobre los justos (Sal 34:15), no describe la forma de Dios, sino su cuidado atento. Estas expresiones se llaman antropomorfismos, y se interpretan como cualquier lenguaje figurado: buscando lo que comunican, no tomando la imagen al pie de la letra.',
        'Que Dios sea espíritu no lo hace lejano. Al contrario: precisamente porque no está limitado por un cuerpo puede estar cerca de cada uno de sus hijos al mismo tiempo, y busca adoradores que le adoren en espíritu y en verdad (Jn 4:23). La adoración que Él quiere no depende de un monte ni de un edificio, sino de un corazón movido por el Espíritu y guiado por la verdad de su Palabra.',
        { ejercicio: {
          pregunta: 'El Salmo 91:4 dice que Dios nos cubrirá con sus plumas. ¿Cómo se entiende?',
          opciones: [
            { t: 'Que Dios tiene alas literales, aunque no podamos verlas.', ok: false, por_que: 'Dios es espíritu y no tiene cuerpo (Juan 4:24). La imagen describe lo que hace, no su forma.' },
            { t: 'Que Dios protege a los suyos como un ave protege a sus crías.', ok: true, por_que: 'Es un antropomorfismo, o mejor, una imagen tomada de la naturaleza: comunica protección y cercanía.' },
            { t: 'Que la frase es un error que no debemos tomar en cuenta.', ok: false, por_que: 'El lenguaje figurado es verdadero en lo que comunica. Leerlo como figura no es dejarlo de lado.' }
          ],
          explicacion: 'Las figuras humanas o tomadas de la naturaleza nos ayudan a entender cómo actúa Dios, que en sí mismo es espíritu.'
        } }
      ],
      pensar: 'Jesús dijo que el Padre busca adoradores en espíritu y en verdad (Jn 4:23). ¿Tu adoración depende del lugar o del ambiente, o la puedes ofrecer en cualquier parte?'
    },
    {
      id: 'uno', n: 'Dios es uno', ref: 'Deuteronomio 6:4-9; Isaías 45:5-6, 21-22; 1 Corintios 8:4-6',
      visual: [
        { tipo: 'imagen', titulo: 'El Shemá', src: 'img/shema-familia.webp', alt: 'En la entrada de una casa de piedra israelita, al atardecer, un padre enseña a sus dos hijos pequeños señalando un pequeño estuche de cuero fijado en el poste de la puerta', pie: '«Y las repetirás a tus hijos… y las escribirás en los postes de tu casa» (Deuteronomio 6:7, 9).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es. Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas. Y estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos, y hablarás de ellas estando en tu casa, y andando por el camino, y al acostarte, y cuando te levantes. Y las atarás como una señal en tu mano, y estarán como frontales entre tus ojos; y las escribirás en los postes de tu casa, y en tus puertas.', ref: 'Deuteronomio 6:4-9' },
        { tipo: 'imagen', titulo: 'Los dioses de Egipto', src: '../egipto/img/egipto-templo-dioses.webp', alt: 'Interior de un templo egipcio con grandes estatuas de dioses y sacerdotes ofreciendo incienso', pie: 'Israel salió de un mundo lleno de dioses.', origen: 'ia' }
      ],
      texto: [
        'Israel salió de Egipto, un país con cientos de dioses: el sol, el Nilo, el faraón, los animales sagrados. Llegó a una tierra donde los cananeos adoraban a Baal, a Asera y a Moloc. Más tarde conocería los dioses de Asiria, de Babilonia y de Grecia. En medio de ese mundo, Moisés dio al pueblo la confesión que los judíos repiten hasta hoy dos veces al día: «Oye, Israel: Jehová nuestro Dios, Jehová uno es» (Dt 6:4). Por su primera palabra en hebreo, este pasaje se llama el Shemá.',
        'El Shemá no dice solo que Israel debía adorar a un dios entre muchos. Afirma que el Señor es el único Dios. Isaías lo dirá con toda claridad: «Yo soy Jehová, y ninguno más hay; no hay Dios fuera de mí» (Is 45:5). Y otra vez: «Yo soy el primero, y yo soy el postrero, y fuera de mí no hay Dios» (Is 44:6). Esto se llama monoteísmo: hay un solo Dios verdadero, y todos los demás son ídolos sin vida.',
        { h: 'Un Dios para amar' },
        'El Shemá no termina en una afirmación teórica. Sigue de inmediato con un mandamiento: «Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas» (Dt 6:5). Porque Dios es uno, merece una lealtad indivisa: no se le puede amar a medias, repartiendo el corazón con otros dioses. Y esa confesión debía vivirse en casa: repetirla a los hijos, hablar de ella en el camino, escribirla en los postes de las puertas (Dt 6:7-9). Jesús llamó a este el primer y grande mandamiento (Mt 22:37-38).',
        { h: 'Uno, y sin embargo…' },
        'El Nuevo Testamento no abandona el Shemá. Pablo lo repite: sabemos «que un ídolo nada es en el mundo, y que no hay más que un Dios» (1 Co 8:4). Pero en el mismo pasaje dice algo asombroso: para nosotros hay «un Dios, el Padre» y «un Señor, Jesucristo» (1 Co 8:6). Pablo toma las dos palabras del Shemá, Dios y Señor, y las aplica al Padre y a Jesucristo, sin dejar de afirmar que Dios es uno. Ese es el punto de partida de la doctrina de la Trinidad, que se estudia en la ruta IV: no tres dioses, sino un solo Dios.',
        'Santiago advierte que creer en un solo Dios no basta: «Tú crees que Dios es uno; bien haces. También los demonios creen, y tiemblan» (Stg 2:19). La fe que salva no se queda en la confesión correcta: confía y obedece.',
        { ir: { t: 'Ver Egipto', a: '../../egipto/' } },
        { ejercicio: {
          pregunta: '¿Qué pide Deuteronomio 6:5, inmediatamente después de confesar que Dios es uno?',
          opciones: [
            { t: 'Construir un templo para que todas las naciones lo conozcan.', ok: false, por_que: 'El pasaje no habla de un templo, sino de la relación del pueblo con Dios.' },
            { t: 'Amarle con todo el corazón, el alma y las fuerzas.', ok: true, por_que: 'Porque Dios es uno, merece un amor indiviso. La confesión lleva a la entrega total.' },
            { t: 'Estudiar los dioses de las naciones para refutarlos.', ok: false, por_que: 'Lo que sigue al Shemá es amar a Dios y enseñar sus palabras en casa, no estudiar a los ídolos.' }
          ],
          explicacion: 'El monoteísmo bíblico es una doctrina que se vive: un solo Dios, amado con todo el ser y enseñado en la familia.'
        } }
      ],
      pensar: 'Israel debía hablar de Dios en casa, en el camino, al acostarse y al levantarse (Dt 6:7). ¿En qué momentos de tu día se habla de Dios en tu hogar?'
    },
    {
      id: 'persona', n: 'Dios es persona', ref: 'Hechos 17:22-31; Éxodo 3:14; Salmo 94:9',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperio-griego/img/grecia-pablo-areopago.webp', alt: 'Pablo habla de pie ante un grupo de filósofos atenienses en la colina del Areópago, con la Acrópolis al fondo', pie: 'Pablo en el Areópago: «en él vivimos, y nos movemos, y somos» (Hechos 17:28).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo entienden a Dios las grandes cosmovisiones',
          cab: ['Cosmovisión', 'Qué dice de Dios', 'Qué responde la Biblia'],
          filas: [
            ['Ateísmo', 'No hay Dios; solo existe la materia', 'Dios existe y se manifiesta en lo creado (Ro 1:20)'],
            ['Panteísmo', 'Todo es Dios: la naturaleza, el universo, uno mismo', 'Dios hizo el mundo y es distinto de él (Hch 17:24)'],
            ['Deísmo', 'Dios creó el mundo, pero se desentendió de él', 'Dios da vida a todos y gobierna la historia (Hch 17:25-26)'],
            ['Politeísmo', 'Hay muchos dioses con poderes limitados', 'Hay un solo Dios verdadero (Is 45:5)'],
            ['Fuerza impersonal', 'Dios es una energía o un poder sin voluntad', 'Dios habla, ama, se enoja y llama (Éx 3:14; 1 Jn 4:8)'],
            ['Teísmo bíblico', 'Un Dios personal, creador, distinto del mundo y presente en él', 'Hch 17:24-28']
          ]
        } }
      ],
      texto: [
        'Cuando Pablo llegó a Atenas encontró una ciudad llena de ídolos y de filósofos. Los epicúreos creían que, si había dioses, estaban lejos y no se interesaban por los humanos. Los estoicos pensaban que todo el universo estaba penetrado por una razón divina, casi como si el mundo mismo fuera dios. Ante ellos, en el Areópago, Pablo presentó al Dios de la Biblia como un Dios distinto de ambas ideas (Hch 17:22-31).',
        { h: 'Distinto del mundo' },
        'Primero, Dios no es el mundo. Pablo comienza: «El Dios que hizo el mundo y todas las cosas que en él hay, siendo Señor del cielo y de la tierra, no habita en templos hechos por manos humanas» (Hch 17:24). El Creador es distinto de lo creado. Esto descarta el panteísmo, la idea de que todo es Dios, que hoy aparece en muchas formas de espiritualidad: decir que uno mismo es divino, que la naturaleza es dios o que todo es una sola energía.',
        { h: 'Cerca de cada uno' },
        'Segundo, Dios no está lejos. Él «da a todos vida y aliento y todas las cosas» (Hch 17:25), fijó los tiempos y los límites de los pueblos, y lo hizo para que lo buscaran, «aunque ciertamente no está lejos de cada uno de nosotros. Porque en él vivimos, y nos movemos, y somos» (Hch 17:27-28). Esto descarta el deísmo, la idea de un Dios que creó el mundo como un relojero y luego lo dejó funcionar solo.',
        { h: 'Alguien, no algo' },
        'Sobre todo, Dios es persona. No es una fuerza ni una energía, sino Alguien que piensa, siente, decide y habla. En la zarza se presentó como «YO SOY» (Éx 3:14): un Dios que dice «yo» y llama a Moisés por su nombre. El salmista razona con sencillez: «El que hizo el oído, ¿no oirá? El que formó el ojo, ¿no verá?» (Sal 94:9). Si nosotros, que somos sus criaturas, tenemos inteligencia, voluntad y afectos, el que nos creó no puede ser menos que personal.',
        'Por eso la Biblia describe a Dios con verbos personales: ama, se compadece, se enoja contra el pecado, perdona, recuerda, promete y cumple. Y por eso se puede tener una relación con Él. A una fuerza no se le ora ni se le agradece; a un Padre, sí. Pablo terminó su discurso anunciando que este Dios personal manda a todos los hombres que se arrepientan, porque ha establecido un día para juzgar al mundo por medio de Jesucristo, a quien levantó de los muertos (Hch 17:30-31).',
        { ejercicio: {
          pregunta: 'Una persona dice: «Dios es la energía que hay en todo; tú y yo somos parte de Dios». ¿Qué cosmovisión expresa?',
          opciones: [
            { t: 'El deísmo.', ok: false, por_que: 'El deísmo separa a Dios del mundo y lo imagina lejano; esta frase lo confunde con el mundo.' },
            { t: 'El panteísmo.', ok: true, por_que: 'Identificar a Dios con todo lo que existe es panteísmo. Hechos 17:24 enseña que Dios hizo el mundo y es distinto de él.' },
            { t: 'El teísmo bíblico.', ok: false, por_que: 'La Biblia enseña que Dios está presente en todo, pero no que todo sea Dios ni que nosotros seamos parte de Él.' }
          ],
          explicacion: 'Dios está cerca de cada uno, pero no se confunde con su creación. Es el Creador personal, no una energía.'
        } }
      ],
      pensar: 'Pablo dijo a los atenienses que Dios no está lejos de cada uno de nosotros (Hch 17:27). ¿Hay algún área de tu vida en la que actúas como si Dios estuviera lejos?'
    }
  ];

  /* ---------------- II. Los nombres de Dios ---------------- */
  const nombres = [
    {
      id: 'elohim', n: 'Elohim y El', ref: 'Génesis 1:1; 14:18-22; 16:13; 17:1; 21:33',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dios (El, Elohim) y sus títulos',
          cab: ['Hebreo', 'RV 1960', 'Primera aparición', 'Qué revela'],
          filas: [
            ['Elohim', 'Dios', 'Gn 1:1', 'El Dios creador, poderoso, digno de reverencia'],
            ['El Elyón', 'Dios Altísimo', 'Gn 14:18-20', 'Está por encima de todo lo creado y de todo poder'],
            ['El Roí', 'Dios que ve', 'Gn 16:13', 'Ve al afligido y se ocupa de él'],
            ['El Shaddai', 'Dios Todopoderoso, Dios Omnipotente', 'Gn 17:1; Éx 6:3', 'Cumple sus promesas aunque parezcan imposibles'],
            ['El Olam', 'Dios eterno', 'Gn 21:33', 'No cambia con el tiempo; su pacto permanece'],
            ['El Gibbor', 'Dios Fuerte', 'Is 9:6; 10:21', 'Guerrero poderoso a favor de su pueblo']
          ],
          nota: 'En hebreo, el nombre no es una simple etiqueta: dice quién es y qué hace la persona.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces Melquisedec, rey de Salem y sacerdote del Dios Altísimo, sacó pan y vino; y le bendijo, diciendo: Bendito sea Abram del Dios Altísimo, creador de los cielos y de la tierra; y bendito sea el Dios Altísimo, que entregó tus enemigos en tu mano. Y le dio Abram los diezmos de todo.', ref: 'Génesis 14:18-20' }
      ],
      texto: [
        'Hoy un nombre suele elegirse porque suena bien. En la Biblia, en cambio, el nombre dice algo de la persona: Abram pasa a llamarse Abraham, porque Dios lo puso «por padre de muchedumbre de gentes» (Gn 17:5), y Jacob pasa a llamarse Israel después de luchar con Dios (Gn 32:28). Por eso los nombres de Dios no son títulos decorativos. Cada uno revela un aspecto de quién es Él, y casi siempre aparece en un momento de la historia en que el pueblo necesitaba conocer justamente ese aspecto.',
        { h: 'Elohim' },
        'La primera palabra para Dios en la Biblia es Elohim: «En el principio creó Dios los cielos y la tierra» (Gn 1:1). Es la forma más general para referirse a Dios, y se usa más de dos mil quinientas veces en el Antiguo Testamento. Viene de una raíz que sugiere poder, y está en plural, aunque cuando se refiere al Dios verdadero va con verbos en singular. En la ruta IV se verá qué se puede decir y qué no de ese plural. La forma breve es El, que se usa sobre todo combinada con otras palabras.',
        { h: 'Los títulos de Dios en Génesis' },
        'En la vida de los patriarcas, Dios se da a conocer con varios títulos. Melquisedec bendice a Abram en nombre del «Dios Altísimo, creador de los cielos y de la tierra» (Gn 14:19): El Elyón, el que está por encima de todos los reyes y de todos los dioses de Canaán. Agar, sola y huyendo en el desierto, descubre que Dios la ha visto, y le llama «Dios que ve» (Gn 16:13): El Roí. A Abram, con noventa y nueve años y todavía sin el hijo prometido, Dios le dice: «Yo soy el Dios Todopoderoso» (Gn 17:1): El Shaddai, el que puede cumplir lo que promete aunque la naturaleza diga que es imposible. Y en Beerseba, Abraham invoca a «Jehová Dios eterno» (Gn 21:33): El Olam, cuyo pacto no se acaba.',
        'Fíjate en el patrón: cada título responde a una necesidad. La esclava abandonada descubre al Dios que ve; el anciano sin hijos, al Todopoderoso; el peregrino que planta un árbol en una tierra ajena, al Eterno. Dios se dio a conocer en medio de la vida real, no en una clase de teología.',
        { ejercicio: {
          pregunta: '¿En qué circunstancia se reveló Dios como El Shaddai, el Dios Todopoderoso?',
          opciones: [
            { t: 'Cuando Abram venció a los reyes que habían capturado a Lot.', ok: false, por_que: 'Después de esa batalla, Abram recibió la bendición del Dios Altísimo (Génesis 14:19), no el nombre El Shaddai.' },
            { t: 'Cuando Abram tenía noventa y nueve años y esperaba el hijo prometido.', ok: true, por_que: 'Génesis 17:1. El título asegura que Dios puede cumplir lo humanamente imposible.' },
            { t: 'Cuando Agar huyó al desierto.', ok: false, por_que: 'Agar llamó a Dios «Dios que ve» (Génesis 16:13), El Roí.' }
          ],
          explicacion: 'Los nombres de Dios aparecen en momentos concretos: Dios se da a conocer según lo que su pueblo necesita saber de Él.'
        } }
      ],
      pensar: 'Agar descubrió que Dios la veía cuando se sentía sola y olvidada. ¿Cuál de estos nombres de Dios necesitas recordar en tu situación actual?'
    },
    {
      id: 'jehova', n: 'Jehová, «Yo soy el que soy»', ref: 'Éxodo 3:13-15; 6:2-3; 20:7',
      visual: [
        { tipo: 'imagen', titulo: 'La zarza', src: 'img/zarza.webp', alt: 'Moisés, anciano, descalzo y arrodillado sobre la roca al pie de un monte del desierto, se cubre el rostro ante una zarza que arde con llamas intensas sin consumirse', pie: '«YO SOY EL QUE SOY» (Éxodo 3:14).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo Moisés a Dios: He aquí que llego yo a los hijos de Israel, y les digo: El Dios de vuestros padres me ha enviado a vosotros. Si ellos me preguntaren: ¿Cuál es su nombre?, ¿qué les responderé? Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros. Además dijo Dios a Moisés: Así dirás a los hijos de Israel: Jehová, el Dios de vuestros padres, el Dios de Abraham, Dios de Isaac y Dios de Jacob, me ha enviado a vosotros. Este es mi nombre para siempre; con él se me recordará por todos los siglos.', ref: 'Éxodo 3:13-15' },
        { tipo: 'imagen', titulo: 'La estela de Mesa', src: 'img/estela-mesa.webp', alt: 'La estela de Mesa en el Louvre: losa de basalto de borde redondeado, con fragmentos originales de piedra rugosa cubiertos de letras moabitas encajados en una reconstrucción lisa', pie: 'La estela de Mesa, rey de Moab (hacia 840 a.C.), nombra a YHWH, el Dios de Israel: es la mención más antigua conocida del Nombre fuera de la Biblia (2 Reyes 3:4-5). Los fragmentos rugosos son originales; la parte lisa es la reconstrucción de Clermont-Ganneau (1870).', origen: 'foto', licencia: 'Foto: Tangopaso (2018), dominio público, vía Wikimedia Commons', completa: true }
      ],
      texto: [
        'Moisés pastoreaba ovejas en el desierto cuando vio una zarza que ardía sin consumirse. Desde el fuego, Dios lo llamó para sacar a Israel de Egipto. Moisés hizo una pregunta lógica: si los israelitas le preguntaban el nombre del Dios que lo enviaba, ¿qué les respondería? La respuesta fue: «YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros» (Éx 3:14). Y enseguida: «Jehová, el Dios de vuestros padres… Este es mi nombre para siempre» (Éx 3:15).',
        { h: 'El nombre propio de Dios' },
        'Elohim es una palabra que se puede usar también para otros dioses o para los jueces. Pero Dios tiene un nombre propio, que solo le pertenece a Él. En hebreo se escribe con cuatro consonantes, YHWH, y por eso se le llama el tetragrámaton («las cuatro letras»). Aparece casi siete mil veces en el Antiguo Testamento, más que cualquier otro nombre. Está relacionado con el verbo hebreo «ser» o «estar»: el que existe por sí mismo, el que siempre es y el que estará presente con su pueblo.',
        'El nombre dice al menos tres cosas. Dios existe por sí mismo: no depende de nadie ni fue hecho por nadie. No cambia: es el mismo para Abraham, para Moisés y para nosotros. Y está presente: el Dios que dice «Yo soy» es el que había dicho a Moisés, unos versículos antes, «Ve, porque yo estaré contigo» (Éx 3:12). Por eso en Éxodo 6:3 Dios dice que los patriarcas lo conocieron como Dios Omnipotente, pero no por su nombre Jehová: conocían el nombre, pero ahora Israel iba a ver lo que ese nombre significaba, al cumplir Dios su promesa y liberarlos.',
        { h: '¿Jehová o Yahvé?' },
        'Con el tiempo, los judíos dejaron de pronunciar el Nombre por reverencia, y al leer decían Adonai, «Señor». Cuando los escribas medievales agregaron vocales al texto hebreo, pusieron a YHWH las vocales de Adonai, para recordar al lector que leyera «Señor». De esa combinación salió la forma Jehová, que usan Casiodoro de Reina y la RV 1960. Muchos estudiosos piensan que la pronunciación original se acercaba a Yahvé, y algunas traducciones escriben SEÑOR en mayúsculas. Las tres formas se refieren al mismo Nombre; la diferencia es de transcripción, no de doctrina.',
        { ejercicio: {
          pregunta: '¿Por qué la RV 1960 escribe «Jehová»?',
          opciones: [
            { t: 'Porque es la pronunciación hebrea exacta que usaba Moisés.', ok: false, por_que: 'La pronunciación original se perdió; muchos estudiosos piensan que se acercaba a Yahvé.' },
            { t: 'Porque combina las consonantes YHWH con las vocales de Adonai, como se transmitió en el texto hebreo.', ok: true, por_que: 'Esa forma pasó a las traducciones al español desde Casiodoro de Reina.' },
            { t: 'Porque Jehová es un dios distinto de Elohim.', ok: false, por_que: 'Éxodo 3:15 une los dos: Jehová es el Dios (Elohim) de Abraham, Isaac y Jacob.' }
          ],
          explicacion: 'Jehová, Yahvé y SEÑOR traducen el mismo nombre propio de Dios. Lo importante es lo que el Nombre revela.'
        } }
      ],
      pensar: 'Antes de revelar su nombre, Dios dijo a Moisés: «Ve, porque yo estaré contigo» (Éx 3:12). ¿Qué tarea te ha dado Dios en la que necesitas recordar que Él está presente?'
    },
    {
      id: 'adonai', n: 'Adonai: el Señor', ref: 'Salmo 8:1; 110:1; Isaías 6:1; Éxodo 20:7; Malaquías 1:6',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo traduce la RV 1960 los nombres hebreos',
          cab: ['Hebreo', 'RV 1960', 'Ejemplo'],
          filas: [
            ['YHWH', 'Jehová', 'Éx 3:15; Sal 23:1'],
            ['Adonai', 'Señor', 'Is 6:1; Sal 8:1'],
            ['Adonai YHWH', 'Jehová el Señor; Señor Jehová', 'Gn 15:2; Ez 2:4'],
            ['Elohim', 'Dios', 'Gn 1:1'],
            ['YHWH Elohim', 'Jehová Dios', 'Gn 2:4'],
            ['YHWH Tsebaot', 'Jehová de los ejércitos', '1 S 1:3; Is 6:3'],
            ['Adón (un hombre)', 'señor', 'Gn 18:12; Mal 1:6']
          ],
          nota: 'En el Salmo 110:1, «Jehová dijo a mi Señor», hablan dos: YHWH y el Señor de David. Jesús usó ese versículo para mostrar quién es el Mesías (Mt 22:41-45).'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '¡Oh Jehová, Señor nuestro, Cuán glorioso es tu nombre en toda la tierra! Has puesto tu gloria sobre los cielos; De la boca de los niños y de los que maman, fundaste la fortaleza, A causa de tus enemigos, Para hacer callar al enemigo y al vengativo. Cuando veo tus cielos, obra de tus dedos, La luna y las estrellas que tú formaste, Digo: ¿Qué es el hombre, para que tengas de él memoria, Y el hijo del hombre, para que lo visites?', ref: 'Salmo 8:1-4' }
      ],
      texto: [
        'Adonai significa «mi Señor». La palabra adón se usaba para un amo, un rey o un esposo, y expresa autoridad y dominio. Cuando se aplica a Dios en la forma Adonai, dice que Él es el dueño y soberano de todo. El Salmo 8 combina los dos nombres: «¡Oh Jehová, Señor nuestro, Cuán glorioso es tu nombre en toda la tierra!» (Sal 8:1). Jehová es su nombre propio; Señor, su posición sobre nosotros.',
        'Isaías, en su visión del templo, dice: «vi yo al Señor sentado sobre un trono alto y sublime» (Is 6:1). Ante Adonai, el profeta no se siente admirador, sino súbdito: se reconoce inmundo y se pone a su disposición (Is 6:5, 8). Llamar a Dios Señor implica aceptar que tiene derecho a mandarnos. Por eso Malaquías reprocha a los sacerdotes de su tiempo que lo llamaban Señor sin temerle: «si soy señor, ¿dónde está mi temor?» (Mal 1:6). Y Jesús hará la misma pregunta: «¿Por qué me llamáis, Señor, Señor, y no hacéis lo que yo digo?» (Lc 6:46).',
        { h: 'Reverencia por el Nombre' },
        'El tercer mandamiento dice: «No tomarás el nombre de Jehová tu Dios en vano» (Éx 20:7). Tomarlo en vano es usarlo de manera vacía o falsa: jurar en falso, maldecir, mencionarlo sin respeto o usarlo para respaldar lo que Dios no dijo. Con los siglos, los judíos levantaron una cerca alrededor de este mandamiento y dejaron de pronunciar el Nombre; al leer YHWH decían Adonai. La intención era buena, pero la Biblia nunca prohíbe pronunciarlo: los salmistas lo invocan constantemente. Lo que Dios pide no es silencio, sino reverencia.',
        { h: 'De Adonai a Kyrios' },
        'Cuando el Antiguo Testamento se tradujo al griego, siglos antes de Cristo, los traductores pusieron Kyrios, «Señor», donde decía YHWH o Adonai. Así lo leían los judíos de habla griega en tiempos de Jesús. Ese detalle es importante para entender el Nuevo Testamento: cuando los apóstoles llaman a Jesús Kyrios, el Señor, y le aplican pasajes que en el Antiguo Testamento hablan de Jehová, están diciendo algo muy fuerte sobre quién es Él. La última estación de esta ruta vuelve sobre ello.',
        { ejercicio: {
          pregunta: 'Según Malaquías 1:6 y Lucas 6:46, ¿qué implica llamar Señor a Dios?',
          opciones: [
            { t: 'Usar un título respetuoso al orar.', ok: false, por_que: 'El título es correcto, pero ambos pasajes reprochan a quienes lo usan sin vivir de acuerdo con él.' },
            { t: 'Reconocer su autoridad y obedecerle.', ok: true, por_que: '«¿Dónde está mi temor?» y «¿por qué… no hacéis lo que yo digo?»: llamarlo Señor es aceptar que Él manda.' },
            { t: 'Evitar pronunciar su nombre propio.', ok: false, por_que: 'La costumbre judía de no pronunciarlo surgió después; la Biblia pide reverencia, no silencio.' }
          ],
          explicacion: 'Adonai expresa el señorío de Dios. Confesarlo con la boca pide reconocerlo con la vida.'
        } }
      ],
      pensar: 'Jesús preguntó: «¿Por qué me llamáis, Señor, Señor, y no hacéis lo que yo digo?» (Lc 6:46). ¿Hay algo que Él te ha mostrado y que todavía no has obedecido?'
    },
    {
      id: 'compuestos', n: 'Jehová proveerá: los nombres compuestos', ref: 'Génesis 22:1-14; Éxodo 15:26; 17:15; Jueces 6:24; Jeremías 23:6; Ezequiel 48:35',
      visual: [
        { tipo: 'imagen', titulo: 'Moriah', src: 'img/moriah.webp', alt: 'En la cumbre de un monte rocoso, el anciano Abraham, con el cuchillo todavía en la mano, se vuelve hacia un carnero trabado por los cuernos en un zarzal; junto al altar de piedras, su hijo Isaac, un muchacho, lo mira', pie: '«Y llamó Abraham el nombre de aquel lugar, Jehová proveerá» (Génesis 22:14).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los nombres compuestos con Jehová',
          cab: ['Hebreo', 'RV 1960', 'Dónde', 'Qué revela'],
          filas: [
            ['YHWH Yiré', 'Jehová proveerá', 'Gn 22:14', 'Provee el sacrificio que necesitamos'],
            ['YHWH Rofé', 'Jehová tu sanador', 'Éx 15:26', 'Sana a su pueblo'],
            ['YHWH Nisí', 'Jehová-nisi («mi estandarte»)', 'Éx 17:15', 'Da la victoria y reúne a su pueblo'],
            ['YHWH Shalom', 'Jehová-salom («paz»)', 'Jue 6:24', 'Da paz al que tiembla ante Él'],
            ['YHWH Roí', 'Jehová es mi pastor', 'Sal 23:1', 'Guía, alimenta y protege'],
            ['YHWH Tsidkenu', 'Jehová, justicia nuestra', 'Jer 23:6', 'Será la justicia de su pueblo, en el Mesías'],
            ['YHWH Shammá', 'Jehová-sama («allí»)', 'Ez 48:35', 'Estará presente en medio de su pueblo para siempre']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces habló Isaac a Abraham su padre, y dijo: Padre mío. Y él respondió: Heme aquí, mi hijo. Y él dijo: He aquí el fuego y la leña; mas ¿dónde está el cordero para el holocausto? Y respondió Abraham: Dios se proveerá de cordero para el holocausto, hijo mío. E iban juntos. Y cuando llegaron al lugar que Dios le había dicho, edificó allí Abraham un altar, y compuso la leña, y ató a Isaac su hijo, y lo puso en el altar sobre la leña. Y extendió Abraham su mano y tomó el cuchillo para degollar a su hijo. Entonces el ángel de Jehová le dio voces desde el cielo, y dijo: Abraham, Abraham. Y él respondió: Heme aquí. Y dijo: No extiendas tu mano sobre el muchacho, ni le hagas nada; porque ya conozco que temes a Dios, por cuanto no me rehusaste tu hijo, tu único. Entonces alzó Abraham sus ojos y miró, y he aquí a sus espaldas un carnero trabado en un zarzal por sus cuernos; y fue Abraham y tomó el carnero, y lo ofreció en holocausto en lugar de su hijo. Y llamó Abraham el nombre de aquel lugar, Jehová proveerá. Por tanto se dice hoy: En el monte de Jehová será provisto.', ref: 'Génesis 22:7-14' }
      ],
      texto: [
        'Dios pidió a Abraham que ofreciera a Isaac, el hijo de la promesa, en un monte de la tierra de Moriah. Camino al monte, Isaac llevaba la leña y preguntó: «He aquí el fuego y la leña; mas ¿dónde está el cordero para el holocausto?» Abraham respondió: «Dios se proveerá de cordero para el holocausto, hijo mío» (Gn 22:7-8). En la cumbre, cuando Abraham ya extendía la mano, el ángel de Jehová lo detuvo, y Abraham vio un carnero trabado en un zarzal. Lo ofreció en lugar de su hijo, y llamó al lugar «Jehová proveerá» (Gn 22:14).',
        'Ese es el primero de varios nombres en los que Jehová se une a una palabra que describe lo que hace. La tabla los reúne. Después de las aguas amargas de Mara, Dios dice: «yo soy Jehová tu sanador» (Éx 15:26). Tras la victoria sobre Amalec, Moisés levanta un altar y lo llama Jehová-nisi, que significa Jehová es mi estandarte (Éx 17:15). Gedeón, aterrado por haber visto al ángel de Jehová, oye que Dios le dice «Paz a ti» y llama a su altar Jehová-salom (Jue 6:23-24). Jeremías anuncia que el Rey justo, descendiente de David, se llamará «Jehová, justicia nuestra» (Jer 23:6), y Ezequiel termina su libro con la ciudad de Dios cuyo nombre será Jehová-sama, que significa Jehová está allí (Ez 48:35).',
        { posturas: {
          titulo: '¿Son nombres de Dios o nombres de lugares?',
          a: { n: 'Nombres de lugares y altares', t: 'Varios de estos nombres no se dan directamente a Dios: Jehová proveerá es el nombre del monte, Jehová-nisi y Jehová-salom son nombres de altares, y Jehová-sama es el nombre de una ciudad. Serían conmemoraciones de lo que Dios hizo allí, no títulos que Dios se dio a sí mismo.' },
          b: { n: 'Nombres que revelan a Dios', t: 'Aunque se den a un lugar o a un altar, describen a Dios: el monte se llama así porque Jehová es el que provee. Además, «Jehová tu sanador» sí lo dice Dios de sí mismo (Éx 15:26), y «Jehová, justicia nuestra» es el nombre del Mesías (Jer 23:6).' },
          c: 'Las dos observaciones son ciertas y no se excluyen. Es más exacto decir «Abraham llamó al lugar Jehová proveerá» que «Dios se llama Jehová-jireh». Pero lo que el nombre afirma de Dios es verdadero, y así lo leyó siempre su pueblo: el Dios que proveyó en Moriah es el que provee.'
        } },
        { h: 'En el mismo monte' },
        'El monte de Moriah volverá a aparecer: allí Salomón edificó el templo (2 Cr 3:1). Y la pregunta de Isaac, «¿dónde está el cordero?», recibió su respuesta definitiva cuando Juan el Bautista señaló a Jesús: «He aquí el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29). Dios no perdonó a su propio Hijo, sino que lo entregó por todos nosotros (Ro 8:32).',
        { ejercicio: {
          pregunta: 'Según Génesis 22:14, ¿a qué le puso Abraham el nombre «Jehová proveerá»?',
          opciones: [
            { t: 'Al carnero que ofreció en lugar de Isaac.', ok: false, por_que: 'El versículo dice que le dio ese nombre a aquel lugar, no al animal.' },
            { t: 'Al lugar donde Dios proveyó el sacrificio.', ok: true, por_que: 'Es el nombre del monte. Lo que afirma de Dios, que Él provee, sigue siendo verdadero.' },
            { t: 'A su hijo Isaac.', ok: false, por_que: 'Isaac ya tenía su nombre, dado por Dios antes de nacer (Génesis 17:19).' }
          ],
          explicacion: 'Leer con exactitud no quita fuerza al texto: el nombre del lugar recuerda lo que Dios es.'
        } }
      ],
      pensar: 'Abraham dijo «Dios se proveerá» antes de ver el carnero (Gn 22:8). ¿En qué situación necesitas confiar en la provisión de Dios antes de verla?'
    },
    {
      id: 'padre', n: 'Dios, Señor y Padre en el Nuevo Testamento', ref: 'Mateo 6:9; Romanos 8:14-16; Gálatas 4:4-6; Filipenses 2:9-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque todos los que son guiados por el Espíritu de Dios, éstos son hijos de Dios. Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre! El Espíritu mismo da testimonio a nuestro espíritu, de que somos hijos de Dios.', ref: 'Romanos 8:14-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pasajes sobre Jehová que el Nuevo Testamento aplica a Jesús',
          cab: ['Antiguo Testamento', 'Nuevo Testamento', 'Qué dice de Jesús'],
          filas: [
            ['A mí se doblará toda rodilla (Is 45:23)', 'En el nombre de Jesús se doble toda rodilla (Fil 2:10-11)', 'Recibe la adoración que Jehová reserva para sí'],
            ['Todo aquel que invocare el nombre de Jehová será salvo (Jl 2:32)', 'Todo aquel que invocare el nombre del Señor será salvo (Ro 10:9-13)', 'Es el Señor a quien se invoca para salvación'],
            ['Preparad camino a Jehová (Is 40:3)', 'Preparad el camino del Señor (Mr 1:2-3)', 'Juan el Bautista prepara la venida de Jehová, y llega Jesús'],
            ['Yo soy el primero y el postrero (Is 44:6)', 'Yo soy el primero y el último (Ap 1:17)', 'Comparte el título exclusivo de Dios']
          ],
          nota: 'Cristo en sí mismo se estudia en el recurso La persona y obra de Cristo.'
        } }
      ],
      texto: [
        'El Nuevo Testamento se escribió en griego, y usa sobre todo tres palabras para Dios. Theos, «Dios», corresponde a Elohim. Kyrios, «Señor», corresponde a Adonai y, como se vio, era la palabra con que los judíos de habla griega leían el nombre YHWH. Y Pater, «Padre», que es la gran novedad: aparece en el Antiguo Testamento solo unas quince veces aplicado a Dios, y en el Nuevo, más de doscientas cincuenta.',
        { h: 'Abba, Padre' },
        'Jesús enseñó a sus discípulos a orar diciendo: «Padre nuestro que estás en los cielos, santificado sea tu nombre» (Mt 6:9). En Getsemaní, Él mismo oró: «Abba, Padre, todas las cosas son posibles para ti» (Mr 14:36). Abba es una palabra aramea, la lengua que Jesús hablaba en casa: es como un niño se dirigía a su padre, con confianza y cariño, aunque también la usaban los hijos adultos con respeto. Los judíos de su tiempo no solían hablar así a Dios.',
        'Lo asombroso es que Jesús comparte esa relación con los suyos. Pablo dice que los creyentes han recibido «el espíritu de adopción, por el cual clamamos: ¡Abba, Padre!» (Ro 8:15), y que Dios envió a nuestros corazones «el Espíritu de su Hijo, el cual clama: ¡Abba, Padre!» (Gá 4:6). Fíjate que en estos versículos aparecen el Padre, el Hijo y el Espíritu: el Padre envía, el Hijo es el Hijo eterno que nos hace hijos, y el Espíritu nos hace clamar. Aun así, Jesús distingue su filiación de la nuestra: «Subo a mi Padre y a vuestro Padre» (Jn 20:17). Él es Hijo por naturaleza, desde la eternidad; nosotros, por adopción y por gracia.',
        { h: 'Jesús es el Señor' },
        'La tabla muestra algo que los primeros cristianos hicieron con toda naturalidad: tomaron pasajes que en el Antiguo Testamento hablan de Jehová y los aplicaron a Jesús. Isaías dice que ante Jehová se doblará toda rodilla; Pablo dice que en el nombre de Jesús se doblará toda rodilla y toda lengua confesará «que Jesucristo es el Señor, para gloria de Dios Padre» (Fil 2:10-11). Joel dice que el que invoque el nombre de Jehová será salvo; Pablo lo aplica a confesar a Jesús como Señor (Ro 10:9-13). Esos judíos monoteístas no estaban agregando un segundo dios: estaban reconociendo que Jesús comparte el nombre y la gloria del único Dios. Así se prepara la ruta IV.',
        { ejercicio: {
          pregunta: '¿Qué diferencia marca Jesús en Juan 20:17 al decir «mi Padre y vuestro Padre»?',
          opciones: [
            { t: 'Ninguna: Él y los discípulos son hijos de Dios exactamente de la misma manera.', ok: false, por_que: 'Si fuera así, habría dicho «nuestro Padre». Jesús distingue cuidadosamente su relación de la de ellos.' },
            { t: 'Él es Hijo por naturaleza y desde la eternidad; los creyentes son hijos por adopción.', ok: true, por_que: 'El Nuevo Testamento llama a Jesús el unigénito Hijo (Juan 1:18) y a los creyentes, hijos adoptivos (Romanos 8:15).' },
            { t: 'Que los discípulos no podían llamar Padre a Dios.', ok: false, por_que: 'Jesús mismo les enseñó a orar «Padre nuestro» (Mateo 6:9).' }
          ],
          explicacion: 'Por medio del Hijo eterno, el Padre nos adopta y el Espíritu nos permite llamarle Abba.'
        } }
      ],
      pensar: 'Puedes llamar a Dios «Abba, Padre» porque el Espíritu del Hijo vive en ti (Gá 4:6). ¿Cómo cambiaría tu oración si hablaras con Dios con esa confianza?'
    }
  ];

  window.__TRINIDAD = { conocer, nombres };
})();
/* Dios y la Trinidad · ruta III. Los atributos de Dios (ver encabezado en parte1.js) */
(() => {
  const atributos = [
    {
      id: 'clasificar', n: 'Cómo es Dios: sus atributos', ref: 'Éxodo 34:6-7; Salmo 145:3; Romanos 11:33-36',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-atributos.svg', alt: 'Dos columnas: atributos que solo Dios tiene (eterno, independiente, inmutable, omnipresente, omnisciente, omnipotente) y atributos que Dios comparte en parte con el ser humano (santidad, justicia, amor, misericordia, gracia, fidelidad, sabiduría, verdad)', pie: 'Lo que solo Dios es, y lo que Dios forma en sus hijos.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Jehová descendió en la nube, y estuvo allí con él, proclamando el nombre de Jehová. Y pasando Jehová por delante de él, proclamó: ¡Jehová! ¡Jehová! fuerte, misericordioso y piadoso; tardo para la ira, y grande en misericordia y verdad; que guarda misericordia a millares, que perdona la iniquidad, la rebelión y el pecado, y que de ningún modo tendrá por inocente al malvado; que visita la iniquidad de los padres sobre los hijos y sobre los hijos de los hijos, hasta la tercera y cuarta generación.', ref: 'Éxodo 34:5-7' }
      ],
      texto: [
        'Después del pecado del becerro de oro, Moisés pidió a Dios: «Te ruego que me muestres tu gloria» (Éx 33:18). Dios le respondió que nadie podía ver su rostro y vivir, pero que haría pasar delante de él todo su bien. Lo escondió en una hendidura de la peña y, al pasar, proclamó quién es: «¡Jehová! ¡Jehová! fuerte, misericordioso y piadoso; tardo para la ira, y grande en misericordia y verdad» (Éx 34:6). Moisés pidió ver la gloria de Dios, y Dios le describió su carácter.',
        'A esas cualidades de Dios la teología las llama atributos: lo que Dios es y cómo se ha mostrado. No son partes de Dios, como si tuviera un poco de amor y otro poco de justicia. Dios es todo lo que es, completo y a la vez: su amor es santo, su justicia es amorosa, su poder es sabio. Por eso ningún atributo se puede usar contra otro, como quien dice «Dios es amor, así que no juzgará el pecado».',
        { h: 'Dos grupos' },
        'Para estudiarlos con orden, se suelen dividir en dos grupos, como muestra el esquema. Los atributos incomunicables son los que solo Dios tiene y no comparte con ninguna criatura: es eterno, no depende de nada, no cambia, está en todas partes, lo sabe todo y lo puede todo. Ningún ser humano será jamás omnipresente. Los atributos comunicables son los que Dios comparte, en una medida limitada, con los seres humanos creados a su imagen: santidad, justicia, amor, misericordia, bondad, fidelidad, sabiduría y verdad. Dios es amor en grado infinito; nosotros podemos amar de manera real, aunque imperfecta.',
        'La división ayuda, pero tiene un límite: hasta los atributos comunicables, en Dios, son infinitos. Su sabiduría no es como la nuestra, solo que más grande; es de otro orden. Aun así, la división es útil para la vida cristiana. Los atributos incomunicables nos llevan a la adoración y a la confianza: el Dios eterno, que lo sabe y lo puede todo, cuida de nosotros. Los comunicables nos llaman a la imitación: «Sed santos, porque yo soy santo» (1 P 1:16), y «Sed, pues, imitadores de Dios como hijos amados» (Ef 5:1).',
        { ejercicio: {
          pregunta: '¿Cuál de estos atributos es incomunicable, es decir, solo Dios lo tiene?',
          opciones: [
            { t: 'La fidelidad.', ok: false, por_que: 'Dios es fiel en grado infinito, pero también llama a sus hijos a ser fieles (Mateo 25:21). Es comunicable.' },
            { t: 'La omnipresencia.', ok: true, por_que: 'Ninguna criatura puede estar en todas partes a la vez. Solo Dios llena el cielo y la tierra (Jeremías 23:24).' },
            { t: 'La misericordia.', ok: false, por_que: 'Jesús dijo: «Sed, pues, misericordiosos, como también vuestro Padre es misericordioso» (Lucas 6:36).' }
          ],
          explicacion: 'Lo que solo Dios tiene nos lleva a adorarle; lo que comparte con nosotros nos llama a parecernos a Él.'
        } }
      ],
      pensar: 'Moisés pidió ver la gloria de Dios, y Dios le mostró su carácter (Éx 34:6). ¿Cuál de las cualidades de Éxodo 34:6-7 te sorprende más que Dios haya querido destacar primero?'
    },
    {
      id: 'eterno', n: 'Eterno, independiente e inmutable', ref: 'Salmo 90:2; 102:25-27; Malaquías 3:6; Santiago 1:17; Hechos 17:25',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Desde el principio tú fundaste la tierra, Y los cielos son obra de tus manos. Ellos perecerán, mas tú permanecerás; Y todos ellos como una vestidura se envejecerán; Como un vestido los mudarás, y serán mudados; Pero tú eres el mismo, Y tus años no se acabarán.', ref: 'Salmo 102:25-27' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dios y su creación',
          cab: ['Dios', 'La creación'],
          filas: [
            ['No tiene principio ni fin (Sal 90:2)', 'Comenzó a existir (Gn 1:1)'],
            ['No necesita nada (Hch 17:25)', 'Depende de Dios para vida y aliento (Hch 17:25)'],
            ['No cambia (Mal 3:6)', 'Se envejece como una vestidura (Sal 102:26)'],
            ['Sus planes permanecen (Sal 33:11)', 'Los planes humanos fracasan (Sal 33:10)']
          ]
        } }
      ],
      texto: [
        'Los atributos incomunicables comienzan por lo que Dios es en relación con el tiempo y con todo lo demás. Moisés, el autor del Salmo 90, había visto morir a toda una generación en el desierto. Frente a la brevedad de la vida humana, se aferra a lo único que no pasa: «Antes que naciesen los montes Y formases la tierra y el mundo, Desde el siglo y hasta el siglo, tú eres Dios» (Sal 90:2). Dios es eterno: no tuvo comienzo, no tendrá fin, y no envejece. Para Él, mil años son como el día de ayer (Sal 90:4).',
        { h: 'No necesita nada' },
        'Dios es también independiente: no depende de nada ni de nadie para existir o ser feliz. Pablo lo dijo en Atenas: Dios no es honrado por manos de hombres, «como si necesitase de algo; pues él es quien da a todos vida y aliento y todas las cosas» (Hch 17:25). Dios no creó el mundo porque se sintiera solo ni porque le faltara algo. Como se verá en la ruta IV, el Padre, el Hijo y el Espíritu ya vivían en comunión perfecta antes de la creación. Dios creó por amor generoso, no por necesidad, y por eso todo lo que recibimos de Él es gracia.',
        { h: 'No cambia' },
        '«Porque yo Jehová no cambio; por esto, hijos de Jacob, no habéis sido consumidos» (Mal 3:6). Dios es inmutable: su ser, su carácter, sus propósitos y sus promesas no cambian. Santiago dice que en el Padre de las luces «no hay mudanza, ni sombra de variación» (Stg 1:17). Las estrellas cambian de posición y proyectan sombras distintas; Dios no. Esto es un gran consuelo: el Dios que fue fiel a Abraham y a Moisés es el mismo que hoy escucha nuestra oración.',
        'Inmutable no significa inmóvil ni indiferente. Dios actúa, responde a la oración, se alegra con el que se arrepiente y se enoja con el pecado. Lo que no cambia es su carácter, y justamente por eso responde de manera distinta según cambia la conducta humana.',
        { posturas: {
          titulo: '¿Se arrepiente Dios?',
          a: { n: 'Textos que dicen que sí', t: 'Génesis 6:6 dice que «se arrepintió Jehová de haber hecho hombre en la tierra»; en 1 Samuel 15:11 Dios dice «Me pesa haber puesto por rey a Saúl»; y Jonás 3:10 dice que Dios se arrepintió del mal que había anunciado contra Nínive.' },
          b: { n: 'Textos que dicen que no', t: 'En el mismo capítulo, 1 Samuel 15:29 dice que la Gloria de Israel no se arrepentirá, «porque no es hombre para que se arrepienta», y Números 23:19 dice que Dios no es hombre para que mienta ni para que se arrepienta.' },
          c: 'Los dos grupos de textos están a pocos versículos de distancia, y el autor no veía contradicción. Cuando la Biblia dice que Dios se arrepiente, describe con lenguaje humano su respuesta real ante el cambio de las personas: Jeremías 18:7-10 explica que, si una nación se convierte, Dios no envía el castigo anunciado, y si se aparta, no envía el bien prometido. Cuando dice que no se arrepiente, afirma que no cambia de carácter ni se equivoca ni falta a su palabra. Dios no cambia; por eso trata distinto al que cambia.'
        } },
        { ejercicio: {
          pregunta: 'Según Malaquías 3:6, ¿qué consecuencia tiene para Israel que Dios no cambie?',
          opciones: [
            { t: 'Que Israel no ha sido consumido.', ok: true, por_que: 'Dios había hecho un pacto con ellos, y como no cambia, no los destruye aunque fallen. Su fidelidad los sostiene.' },
            { t: 'Que Dios no escucha sus oraciones, porque ya decidió todo.', ok: false, por_que: 'En el mismo capítulo Dios los llama a volver a Él y promete volverse a ellos (Malaquías 3:7).' },
            { t: 'Que Israel tampoco necesita cambiar.', ok: false, por_que: 'Malaquías llama a Israel al arrepentimiento: Dios no cambia, pero su pueblo sí debe cambiar.' }
          ],
          explicacion: 'La inmutabilidad de Dios es la garantía de sus promesas: no nos consume porque es fiel a su pacto.'
        } }
      ],
      pensar: 'Todo lo que te rodea envejece como una vestidura (Sal 102:26), pero Dios es el mismo. ¿Qué cambio en tu vida te hace valorar hoy que Dios no cambia?'
    },
    {
      id: 'omnipresente', n: 'Presente en todo lugar', ref: 'Salmo 139:7-12; Jeremías 23:23-24; 1 Reyes 8:27',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿A dónde me iré de tu Espíritu? ¿Y a dónde huiré de tu presencia? Si subiere a los cielos, allí estás tú; Y si en el Seol hiciere mi estrado, he aquí, allí tú estás. Si tomare las alas del alba Y habitare en el extremo del mar, Aun allí me guiará tu mano, Y me asirá tu diestra. Si dijere: Ciertamente las tinieblas me encubrirán; Aun la noche resplandecerá alrededor de mí. Aun las tinieblas no encubren de ti, Y la noche resplandece como el día; Lo mismo te son las tinieblas que la luz.', ref: 'Salmo 139:7-12' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las maneras en que Dios está presente',
          cab: ['Presencia', 'Qué significa', 'Ejemplos'],
          filas: [
            ['En todo lugar', 'Dios llena el cielo y la tierra; nadie puede escapar de Él', 'Sal 139:7-10; Jer 23:24'],
            ['Manifestada', 'Dios se hace sentir o ver de manera especial en un lugar y un momento', 'Éx 40:34-35; 2 Cr 7:1-3; Hch 4:31'],
            ['En el creyente', 'El Espíritu Santo habita en cada hijo de Dios', 'Jn 14:16-17; 1 Co 6:19'],
            ['En la iglesia reunida', 'Cristo está en medio de los que se reúnen en su nombre', 'Mt 18:20; Ef 2:21-22'],
            ['Para juicio', 'El impío no puede esconderse de Dios', 'Am 9:2-4; Ap 6:15-17']
          ],
          nota: 'Dios está en todas partes, pero no en todas partes se manifiesta de la misma manera.'
        } }
      ],
      texto: [
        'David escribió el Salmo 139 como una oración, no como un tratado. Se pregunta: «¿A dónde me iré de tu Espíritu? ¿Y a dónde huiré de tu presencia?» (Sal 139:7). Y se responde a sí mismo recorriendo todos los lugares posibles: los cielos, el Seol, el extremo del mar, las tinieblas de la noche. En todos está Dios. «Aun las tinieblas no encubren de ti, Y la noche resplandece como el día» (Sal 139:12).',
        'Esta verdad se llama omnipresencia: Dios está presente con todo su ser en cada lugar. No está repartido, como si una parte de Dios estuviera en Chile y otra en México. Por medio de Jeremías, Dios pregunta: «¿No lleno yo, dice Jehová, el cielo y la tierra?» (Jer 23:24). Y Salomón, al dedicar el templo, reconoce que ni siquiera el templo más grandioso puede encerrarlo: «los cielos, los cielos de los cielos, no te pueden contener; ¿cuánto menos esta casa que yo he edificado?» (1 R 8:27).',
        { h: 'Presente y manifestado' },
        'Si Dios está en todas partes, ¿qué significa que su gloria llenó el tabernáculo (Éx 40:34) o que el lugar donde oraban los discípulos tembló y todos fueron llenos del Espíritu Santo (Hch 4:31)? La tabla distingue varias maneras de presencia. Dios está en todo lugar, pero hay momentos en que manifiesta su presencia de manera especial: para revelarse, para bendecir, para salvar o para juzgar. El creyente pentecostal conoce bien esa experiencia en la oración y en el culto. No es que Dios llegue a un lugar donde no estaba; es que se da a conocer de una manera que se percibe.',
        'Además, el Nuevo Testamento promete una presencia personal en cada creyente: el Espíritu Santo, que mora en nosotros (Jn 14:17), hace de nuestro cuerpo su templo (1 Co 6:19). Y Jesús prometió estar en medio de los que se reúnen en su nombre (Mt 18:20).',
        { h: 'Consuelo y advertencia' },
        'Para David, la omnipresencia de Dios era un consuelo: aun en el extremo del mar, «me guiará tu mano, Y me asirá tu diestra» (Sal 139:10). Ningún creyente está solo, ni en un hospital, ni en una cárcel, ni en otro país. Pero también es una advertencia: no hay lugar donde se pueda pecar a escondidas de Dios. Jonás intentó huir de la presencia de Jehová en un barco, y descubrió que Dios gobernaba también el mar (Jon 1:3-4).',
        { ejercicio: {
          pregunta: 'Si Dios está en todas partes, ¿cómo se entiende que su gloria llenara el templo de Salomón (2 Crónicas 7:1-3)?',
          opciones: [
            { t: 'Dios no estaba en el templo hasta ese momento.', ok: false, por_que: 'Salomón mismo dijo que ni los cielos pueden contener a Dios (1 Reyes 8:27). Dios ya estaba allí.' },
            { t: 'Dios manifestó su presencia de manera especial y visible en ese lugar.', ok: true, por_que: 'La omnipresencia y la presencia manifestada no se contradicen: Dios está en todo lugar, pero se da a conocer de modo especial cuando quiere.' },
            { t: 'Solo una parte de Dios bajó al templo.', ok: false, por_que: 'Dios no está repartido en partes; está presente con todo su ser en cada lugar.' }
          ],
          explicacion: 'Dios no tiene que viajar para llegar a un lugar. Cuando manifiesta su presencia, muestra lo que siempre estuvo allí.'
        } }
      ],
      pensar: 'David dijo que ni las tinieblas lo esconden de Dios (Sal 139:12). ¿Es esa verdad para ti más un consuelo o más una advertencia? ¿Por qué?'
    },
    {
      id: 'omnisciente', n: 'Lo sabe todo', ref: 'Salmo 139:1-6; 147:5; Hebreos 4:13; Isaías 46:9-10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Oh Jehová, tú me has examinado y conocido. Tú has conocido mi sentarme y mi levantarme; Has entendido desde lejos mis pensamientos. Has escudriñado mi andar y mi reposo, Y todos mis caminos te son conocidos. Pues aún no está la palabra en mi lengua, Y he aquí, oh Jehová, tú la sabes toda. Detrás y delante me rodeaste, Y sobre mí pusiste tu mano. Tal conocimiento es demasiado maravilloso para mí; Alto es, no lo puedo comprender.', ref: 'Salmo 139:1-6' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Dios conoce',
          cab: ['Qué conoce', 'Referencia'],
          filas: [
            ['Todo lo creado, hasta las estrellas por su nombre', 'Sal 147:4; He 4:13'],
            ['Nuestros pensamientos y palabras antes de decirlas', 'Sal 139:2-4; 1 Cr 28:9'],
            ['El número de nuestros cabellos', 'Mt 10:30'],
            ['Lo que necesitamos antes de pedirlo', 'Mt 6:8'],
            ['El futuro, desde el principio', 'Is 46:9-10; 41:21-23'],
            ['Lo que habría pasado en otras circunstancias', '1 S 23:10-13; Mt 11:21']
          ]
        } }
      ],
      texto: [
        'El Salmo 139 comienza así: «Oh Jehová, tú me has examinado y conocido» (Sal 139:1). David sabe que Dios conoce cuándo se sienta y cuándo se levanta, entiende sus pensamientos desde lejos, y conoce sus palabras antes de que lleguen a la lengua (Sal 139:2-4). Su conclusión no es de temor, sino de asombro: «Tal conocimiento es demasiado maravilloso para mí» (Sal 139:6).',
        'Dios es omnisciente: lo conoce todo, de manera perfecta y sin esfuerzo. «Su entendimiento es infinito» (Sal 147:5). No aprende, no olvida, no se sorprende ni tiene que investigar. Hebreos lo dice con una imagen fuerte: «todas las cosas están desnudas y abiertas a los ojos de aquel a quien tenemos que dar cuenta» (He 4:13).',
        { h: 'Conoce el futuro' },
        'Dios conoce también lo que todavía no ha ocurrido. Por medio de Isaías desafía a los ídolos a que anuncien el futuro, y se presenta como el único que puede hacerlo: «anuncio lo por venir desde el principio, y desde la antigüedad lo que aún no era hecho» (Is 46:10). Toda la profecía bíblica descansa en esta verdad: Dios anunció el nombre de Ciro más de un siglo antes (Is 44:28), y el lugar donde nacería el Mesías (Mi 5:2). La tabla muestra que conoce incluso lo que habría pasado: David preguntó si los de Keila lo entregarían a Saúl, y Dios le respondió lo que harían si se quedaba (1 S 23:10-13).',
        { posturas: {
          titulo: '¿Conoce Dios todo el futuro?',
          a: { n: 'Teísmo abierto', t: 'Algunos teólogos de las últimas décadas sostienen que Dios conoce todo lo que se puede conocer, pero que las decisiones libres futuras todavía no existen y, por lo tanto, Dios no las conoce con certeza. Así explican la libertad humana y los textos donde Dios parece reaccionar o probar a alguien (Gn 22:12).' },
          b: { n: 'Presciencia plena', t: 'Dios conoce todo el futuro, incluidas las decisiones libres de las personas. Jesús anunció con detalle la traición de Judas y las tres negaciones de Pedro (Jn 13:21-26; Mt 26:34), y la profecía bíblica depende de ese conocimiento (Is 46:9-10).' },
          c: 'Este recurso sigue la presciencia plena, que es la enseñanza histórica de la iglesia. Los textos en que Dios prueba a alguien o le hace una pregunta no indican ignorancia: Dios preguntó a Adán dónde estaba (Gn 3:9) para llamarlo a confesar, no porque no lo supiera. Que Dios conozca de antemano una decisión no la hace menos libre: Pedro negó a Jesús por su propia voluntad, y lloró amargamente por ello.'
        } },
        'Para el creyente, esta verdad es profundamente consoladora. Dios sabe lo que necesitamos antes de que se lo pidamos (Mt 6:8); por eso oramos con confianza, no para informarle, sino para depender de Él. Y conoce todo nuestro pecado, y aun así nos amó: no hay nada que pueda descubrir de nosotros que lo haga cambiar de opinión.',
        { ejercicio: {
          pregunta: 'Si Dios ya sabe lo que necesitamos (Mateo 6:8), ¿para qué orar?',
          opciones: [
            { t: 'No hace falta orar; basta con confiar en que Dios ya lo sabe.', ok: false, por_que: 'En el mismo pasaje Jesús dice «Vosotros, pues, oraréis así» (Mateo 6:9). Saber que Dios conoce no nos exime de orar.' },
            { t: 'Para expresar dependencia y confianza en un Padre que ya conoce nuestra necesidad.', ok: true, por_que: 'Jesús lo presenta así: oramos a un Padre que sabe, y por eso no necesitamos muchas palabras.' },
            { t: 'Para informar a Dios de lo que todavía no sabe.', ok: false, por_que: 'Eso contradiría Mateo 6:8 y el Salmo 139:4.' }
          ],
          explicacion: 'La omnisciencia de Dios no hace inútil la oración: la vuelve confiada y sencilla.'
        } }
      ],
      pensar: 'Dios conoce todos tus pensamientos y aun así te ama. ¿Hay algo que intentas esconderle en la oración, que podrías confesarle hoy con confianza?'
    },
    {
      id: 'omnipotente', n: 'Todo lo puede', ref: 'Génesis 18:14; Jeremías 32:17, 27; Lucas 1:37; Hebreos 6:18',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '¡Oh Señor Jehová! he aquí que tú hiciste el cielo y la tierra con tu gran poder, y con tu brazo extendido, ni hay nada que sea difícil para ti; que haces misericordia a millares, y castigas la maldad de los padres en sus hijos después de ellos; Dios grande, poderoso, Jehová de los ejércitos es su nombre; grande en consejo, y magnífico en hechos; porque tus ojos están abiertos sobre todos los caminos de los hijos de los hombres, para dar a cada uno según sus caminos, y según el fruto de sus obras.', ref: 'Jeremías 32:17-19' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Dios «no puede» hacer',
          cab: ['No puede…', 'Referencia', 'Por qué'],
          filas: [
            ['Mentir', 'He 6:18; Tit 1:2', 'Es la verdad; mentir sería dejar de ser Dios'],
            ['Negarse a sí mismo', '2 Ti 2:13', 'Es fiel a su propio carácter'],
            ['Ser tentado por el mal ni tentar a nadie', 'Stg 1:13', 'Es santo'],
            ['Cambiar', 'Mal 3:6', 'Es perfecto; todo cambio sería para peor'],
            ['Tener por inocente al malvado sin expiación', 'Éx 34:7; Ro 3:26', 'Es justo; por eso proveyó la cruz']
          ],
          nota: 'No son límites de su poder, sino la perfección de su carácter: Dios no puede ser menos que Dios.'
        } }
      ],
      texto: [
        'Cuando Sara se rió al oír que tendría un hijo en su vejez, Dios preguntó: «¿Hay para Dios alguna cosa difícil?» (Gn 18:14). Siglos después, Jeremías estaba preso mientras Babilonia sitiaba Jerusalén, y Dios le mandó comprar un campo en Anatot, como señal de que volverían a comprarse tierras en Judá. El profeta obedeció y oró: «¡Oh Señor Jehová! he aquí que tú hiciste el cielo y la tierra con tu gran poder, y con tu brazo extendido, ni hay nada que sea difícil para ti» (Jer 32:17). Y Dios le contestó con la misma pregunta de Génesis: «He aquí que yo soy Jehová, Dios de toda carne; ¿habrá algo que sea difícil para mí?» (Jer 32:27).',
        'Dios es omnipotente: tiene poder para hacer todo lo que quiere. El ángel Gabriel lo dijo a María: «porque nada hay imposible para Dios» (Lc 1:37). Y el salmista: «Nuestro Dios está en los cielos; Todo lo que quiso ha hecho» (Sal 115:3). Creó el universo con su palabra, sostiene todas las cosas, abrió el mar, resucitó a Jesús de entre los muertos y resucitará a los suyos. Su nombre El Shaddai, el Todopoderoso, recorre toda la Escritura hasta el Apocalipsis (Ap 4:8).',
        { h: 'Lo que Dios no puede hacer' },
        'Hay una pregunta que se usa a veces para confundir: ¿puede Dios hacer una piedra tan pesada que no la pueda levantar? La pregunta es un juego de palabras, como preguntar si Dios puede dibujar un círculo cuadrado. Omnipotencia no significa que Dios pueda hacer cualquier cosa que se pueda decir con palabras, sino que puede hacer todo lo que quiere y que es coherente con quien es Él.',
        'La Biblia misma menciona cosas que Dios no puede hacer, y la tabla las reúne: no puede mentir (He 6:18), no puede negarse a sí mismo (2 Ti 2:13), no puede ser tentado por el mal (Stg 1:13). No son debilidades, sino la perfección de su carácter. Un Dios que pudiera mentir no sería más poderoso, sino menos confiable. Hebreos dice precisamente que, porque es imposible que Dios mienta, tenemos «un fortísimo consuelo» (He 6:18).',
        'El poder de Dios siempre actúa unido a su sabiduría y su bondad. A veces no hace lo que le pedimos, no porque no pueda, sino porque tiene un propósito mejor. Pablo pidió tres veces que le quitara el aguijón, y recibió otra respuesta: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Co 12:9).',
        { ejercicio: {
          pregunta: 'Hebreos 6:18 dice que es imposible que Dios mienta. ¿Contradice eso su omnipotencia?',
          opciones: [
            { t: 'Sí: si hay algo que no puede hacer, no es todopoderoso.', ok: false, por_que: 'La omnipotencia es poder para hacer todo lo que Dios quiere, no para dejar de ser quien es.' },
            { t: 'No: no poder mentir es parte de su perfección, y es lo que hace firmes sus promesas.', ok: true, por_que: 'Hebreos lo presenta como fuente de consuelo: como Dios no puede mentir, su promesa es segura.' },
            { t: 'No, porque Dios sí podría mentir, pero decide no hacerlo.', ok: false, por_que: 'El texto dice que es imposible. Mentir es contrario a su naturaleza, no solo a su decisión.' }
          ],
          explicacion: 'El poder de Dios no está por encima de su carácter: todo lo que puede hacer es santo, justo y verdadero.'
        } }
      ],
      pensar: 'Jeremías compró un campo mientras la ciudad estaba sitiada, confiando en que para Dios nada es difícil (Jer 32:17). ¿Qué paso de fe podrías dar hoy apoyado en el poder de Dios?'
    },
    {
      id: 'santo', n: 'Santo, santo, santo', ref: 'Isaías 6:1-8; Habacuc 1:13; 1 Pedro 1:15-16; Apocalipsis 4:8',
      visual: [
        { tipo: 'imagen', titulo: 'La visión', src: 'img/vision-isaias.webp', alt: 'El profeta Isaías, postrado en el atrio del templo de Jerusalén lleno de humo, levanta la mirada hacia una luz blanca y deslumbrante que llena el santuario; las columnas del pórtico tiemblan', pie: '«¡Ay de mí! que soy muerto… han visto mis ojos al Rey, Jehová de los ejércitos» (Isaías 6:5).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En el año que murió el rey Uzías vi yo al Señor sentado sobre un trono alto y sublime, y sus faldas llenaban el templo. Por encima de él había serafines; cada uno tenía seis alas; con dos cubrían sus rostros, con dos cubrían sus pies, y con dos volaban. Y el uno al otro daba voces, diciendo: Santo, santo, santo, Jehová de los ejércitos; toda la tierra está llena de su gloria. Y los quiciales de las puertas se estremecieron con la voz del que clamaba, y la casa se llenó de humo. Entonces dije: ¡Ay de mí! que soy muerto; porque siendo hombre inmundo de labios, y habitando en medio de pueblo que tiene labios inmundos, han visto mis ojos al Rey, Jehová de los ejércitos. Y voló hacia mí uno de los serafines, teniendo en su mano un carbón encendido, tomado del altar con unas tenazas; y tocando con él sobre mi boca, dijo: He aquí que esto tocó tus labios, y es quitada tu culpa, y limpio tu pecado. Después oí la voz del Señor, que decía: ¿A quién enviaré, y quién irá por nosotros? Entonces respondí yo: Heme aquí, envíame a mí.', ref: 'Isaías 6:1-8' }
      ],
      texto: [
        'Isaías tuvo su visión «En el año que murió el rey Uzías» (Is 6:1). Uzías había reinado cincuenta y dos años; su muerte dejaba a Judá insegura. En ese momento, el profeta vio al verdadero Rey, sentado sobre un trono alto y sublime. Los serafines que lo rodeaban se cubrían el rostro y clamaban: «Santo, santo, santo, Jehová de los ejércitos; toda la tierra está llena de su gloria» (Is 6:3).',
        'Es el único atributo de Dios que la Biblia repite tres veces seguidas. En hebreo, repetir una palabra es la forma de llevarla al grado máximo. Siglos después, Juan oye a los seres vivientes alrededor del trono decir lo mismo, sin cesar, día y noche (Ap 4:8). La santidad es la cualidad que más se destaca en la presencia misma de Dios.',
        { h: 'Separado y puro' },
        'La palabra santo, en hebreo qadosh, significa separado, apartado. Dios es santo, primero, porque es distinto de todo lo creado: está por encima de todo, en otra categoría. Y es santo, además, porque es absolutamente puro, sin ninguna mancha de mal. Habacuc dice: «Muy limpio eres de ojos para ver el mal, ni puedes ver el agravio» (Hab 1:13). Su santidad no es solo ausencia de pecado: es una pureza que reacciona contra el pecado como el fuego contra la paja.',
        { h: '¡Ay de mí!' },
        'Ante esa santidad, Isaías no se sintió inspirado, sino perdido: «¡Ay de mí! que soy muerto; porque siendo hombre inmundo de labios… han visto mis ojos al Rey» (Is 6:5). Cuanto más cerca se está de la luz, más se notan las manchas. Pero Dios no lo dejó en su culpa: un serafín tomó un carbón encendido del altar, tocó sus labios y le dijo que su culpa era quitada y su pecado limpiado (Is 6:6-7). El altar del sacrificio es el lugar donde el Dios santo purifica al pecador. Solo después, el profeta purificado oye la voz que pregunta «¿A quién enviaré, y quién irá por nosotros?», y responde: «Heme aquí, envíame a mí» (Is 6:8).',
        { h: 'Sed santos' },
        'Pedro aplica esta verdad a la vida de cada creyente: «como aquel que os llamó es santo, sed también vosotros santos en toda vuestra manera de vivir» (1 P 1:15). La santidad es un atributo comunicable: el Espíritu Santo, cuyo nombre mismo lo dice, obra en nosotros para apartarnos del pecado y consagrarnos a Dios. La santificación no es una lista de prohibiciones, sino llegar a parecerse al Dios santo.',
        { ejercicio: {
          pregunta: '¿En qué orden ocurren las cosas en Isaías 6?',
          opciones: [
            { t: 'Isaías se ofrece para servir, y después Dios le muestra su gloria.', ok: false, por_que: 'Es al revés: primero ve la santidad de Dios, y solo al final responde «Heme aquí».' },
            { t: 'Isaías ve la santidad de Dios, reconoce su pecado, es purificado y luego es enviado.', ok: true, por_que: 'Es la secuencia de los versículos 1-8: visión, confesión, purificación y envío.' },
            { t: 'Isaías es enviado sin necesidad de ser purificado, porque ya era profeta.', ok: false, por_que: 'El versículo 7 dice que su culpa fue quitada y su pecado limpiado antes del envío.' }
          ],
          explicacion: 'Una visión verdadera de la santidad de Dios lleva a la humildad, a la purificación y al servicio.'
        } }
      ],
      pensar: 'Isaías vio al Rey cuando el rey de su nación había muerto. ¿Qué inseguridad de tu vida podría ayudarte a ver con más claridad que Dios sigue sentado en su trono?'
    },
    {
      id: 'justo-amor', n: 'Justo y amoroso a la vez', ref: 'Romanos 1:18; 3:23-26; 1 Juan 4:8-10; Juan 3:16',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'por cuanto todos pecaron, y están destituidos de la gloria de Dios, siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús, a quien Dios puso como propiciación por medio de la fe en su sangre, para manifestar su justicia, a causa de haber pasado por alto, en su paciencia, los pecados pasados, con la mira de manifestar en este tiempo su justicia, a fin de que él sea el justo, y el que justifica al que es de la fe de Jesús.', ref: 'Romanos 3:23-26' },
        { tipo: 'imagen', titulo: 'El velo', src: '../sacerdocio/img/sac-velo.webp', alt: 'El gran velo del templo de Jerusalén rasgado de arriba abajo, dejando ver el Lugar Santísimo', pie: 'En la cruz se encuentran la justicia y el amor de Dios, y el camino a su presencia queda abierto (Marcos 15:38; Hebreos 10:19-20).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos errores frente a la cruz',
          cab: ['Error', 'Qué dice', 'Qué olvida'],
          filas: [
            ['Solo amor', 'Dios es tan bueno que perdona a todos sin más', 'Que Dios es justo y la ira contra el pecado es real (Ro 1:18)'],
            ['Solo justicia', 'Dios es un juez severo al que hay que aplacar', 'Que el mismo Dios dio a su Hijo por amor (Jn 3:16)'],
            ['La cruz', 'Dios castiga el pecado en su Hijo y justifica al que cree', 'Nada: es justo y el que justifica (Ro 3:26)']
          ]
        } }
      ],
      texto: [
        'Dos afirmaciones bíblicas parecen tirar en direcciones opuestas. Por un lado, «Dios es amor» (1 Jn 4:8). Por otro, «la ira de Dios se revela desde el cielo contra toda impiedad e injusticia de los hombres» (Ro 1:18). Moisés oyó las dos cosas en la misma proclamación: Dios es misericordioso y perdona la iniquidad, «y que de ningún modo tendrá por inocente al malvado» (Éx 34:7). ¿Cómo puede Dios perdonar al culpable sin dejar de ser justo?',
        { h: 'Dios es justo' },
        'Dios es justo: siempre hace lo recto y da a cada uno lo que corresponde. Moisés canta: «El es la Roca, cuya obra es perfecta, Porque todos sus caminos son rectitud» (Dt 32:4). Su ira no es un arrebato de mal genio, sino la reacción santa y justa contra el mal que destruye a sus criaturas. Un juez que no castigara el crimen no sería bondadoso, sino corrupto. Si Dios mirara para otro lado ante el pecado, dejaría de ser bueno.',
        { h: 'Dios es amor' },
        'Juan no dice solo que Dios ama, sino que «Dios es amor» (1 Jn 4:8): el amor es parte de su ser, no una emoción ocasional. Y explica en qué consiste: «no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros, y envió a su Hijo en propiciación por nuestros pecados» (1 Jn 4:10). Propiciación es un sacrificio que satisface la justicia y quita la ira. El amor de Dios no ignora la justicia: la cumple.',
        { h: 'El justo y el que justifica' },
        'Pablo resuelve la tensión en Romanos 3. Todos pecaron, y todos son justificados gratuitamente por la gracia de Dios, por medio de Cristo, a quien Dios puso como propiciación por medio de la fe en su sangre. ¿Para qué? «a fin de que él sea el justo, y el que justifica al que es de la fe de Jesús» (Ro 3:26). En la cruz, Dios no rebajó su justicia para poder amarnos, ni dejó de amarnos para ser justo. El castigo que merecía nuestro pecado cayó sobre Cristo, y el perdón que no merecíamos llega a nosotros.',
        'Por eso la cruz es la mayor revelación del carácter de Dios. Nos muestra cuánto odia Dios el pecado, que costó la muerte de su Hijo, y cuánto ama al pecador, que entregó a su Hijo por él. «Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros» (Ro 5:8). Lo que Cristo hizo en la cruz se estudia a fondo en el recurso sobre su persona y su obra.',
        { ejercicio: {
          pregunta: 'Según Romanos 3:26, ¿qué logra Dios en la cruz?',
          opciones: [
            { t: 'Dejar de lado su justicia para poder perdonar.', ok: false, por_que: 'Pablo dice lo contrario: la cruz manifiesta su justicia (Romanos 3:25-26).' },
            { t: 'Ser justo y, al mismo tiempo, justificar al que cree en Jesús.', ok: true, por_que: 'Es la frase exacta del versículo 26. La justicia y el amor se cumplen juntos.' },
            { t: 'Mostrar que el pecado no era tan grave como parecía.', ok: false, por_que: 'La cruz muestra lo contrario: el pecado era tan grave que costó la vida del Hijo de Dios.' }
          ],
          explicacion: 'En la cruz, el Dios justo castiga el pecado y el Dios de amor salva al pecador.'
        } }
      ],
      pensar: 'Dios mostró su amor «siendo aún pecadores» (Ro 5:8), no después de que mejoráramos. ¿Te cuesta aceptar un amor que no depende de lo que has hecho?'
    },
    {
      id: 'fiel', n: 'Misericordioso, fiel y sabio', ref: 'Éxodo 34:6-7; Lamentaciones 3:21-26; Salmo 103:8-14; Efesios 2:4-9; Romanos 11:33',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Esto recapacitaré en mi corazón, por lo tanto esperaré. Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad. Mi porción es Jehová, dijo mi alma; por tanto, en él esperaré. Bueno es Jehová a los que en él esperan, al alma que le busca. Bueno es esperar en silencio la salvación de Jehová.', ref: 'Lamentaciones 3:21-26' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro palabras cercanas',
          cab: ['Atributo', 'Qué significa', 'Referencia'],
          filas: [
            ['Bondad', 'Dios es bueno y hace bien a todos', 'Sal 145:9; Stg 1:17'],
            ['Misericordia', 'Se compadece del que sufre y no le da el castigo que merece', 'Sal 103:8-10; Ef 2:4'],
            ['Gracia', 'Da lo que no merecemos: favor, perdón, salvación', 'Ef 2:8-9; Ro 3:24'],
            ['Fidelidad', 'Cumple siempre lo que promete', 'Lm 3:23; 1 Co 1:9; 1 Jn 1:9'],
            ['Paciencia', 'Es tardo para la ira; espera el arrepentimiento', 'Éx 34:6; 2 P 3:9'],
            ['Sabiduría', 'Elige siempre los mejores fines y los mejores medios', 'Ro 11:33; 16:27']
          ],
          nota: 'Misericordia: no recibir el castigo que merecemos. Gracia: recibir el bien que no merecemos.'
        } }
      ],
      texto: [
        'El libro de Lamentaciones llora la destrucción de Jerusalén por Babilonia. El templo está quemado, el pueblo deportado, los niños desfallecen de hambre en las calles. En medio del capítulo más oscuro, el autor dice: «Esto recapacitaré en mi corazón, por lo tanto esperaré» (Lm 3:21). Y lo que recuerda es esto: «Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad» (Lm 3:22-23).',
        { h: 'Misericordia y gracia' },
        'Estas palabras se parecen, pero no son iguales, y la tabla las distingue. La misericordia es la compasión de Dios ante la miseria humana: no nos da lo que merecemos. El Salmo 103 dice que Dios «No ha hecho con nosotros conforme a nuestras iniquidades» (Sal 103:10), y que se compadece de nosotros como un padre de sus hijos, porque «Se acuerda de que somos polvo» (Sal 103:14). La gracia va más allá: nos da lo que no merecemos. Pablo junta las dos en Efesios 2: Dios, «que es rico en misericordia», nos dio vida con Cristo cuando estábamos muertos en pecados, y añade: «por gracia sois salvos» (Ef 2:4-5).',
        { h: 'Fiel a su palabra' },
        'Dios es fiel: nunca falla a lo que prometió. Por eso el autor de Lamentaciones puede esperar aun entre ruinas: si Dios anunció el juicio y lo cumplió, también cumplirá la restauración que prometió. La fidelidad de Dios no depende de la nuestra: «Si fuéremos infieles, él permanece fiel; El no puede negarse a sí mismo» (2 Ti 2:13). Y es la base de nuestro perdón: «Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9).',
        { h: 'Sabio en todo' },
        'Por último, Dios es sabio: siempre elige los mejores fines y los mejores medios para alcanzarlos. Pablo, después de explicar cómo Dios usó aun la desobediencia de Israel para traer la salvación a los gentiles, exclama: «¡Oh profundidad de las riquezas de la sabiduría y de la ciencia de Dios!» (Ro 11:33). A menudo no entendemos lo que Dios hace, como José no entendía por qué estaba en la cárcel. Pero el mismo José pudo decir después a sus hermanos: «Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien» (Gn 50:20).',
        { ejercicio: {
          pregunta: '¿Cuál es la diferencia entre misericordia y gracia?',
          opciones: [
            { t: 'La misericordia es del Antiguo Testamento y la gracia del Nuevo.', ok: false, por_que: 'Las dos aparecen en ambos testamentos: Éxodo 34:6 habla de misericordia y Génesis 6:8 dice que Noé halló gracia.' },
            { t: 'Por misericordia no recibimos el castigo que merecemos; por gracia recibimos el bien que no merecemos.', ok: true, por_que: 'Es la distinción clásica: Dios retiene el castigo y, además, regala la salvación (Efesios 2:4-8).' },
            { t: 'Son exactamente lo mismo, con dos palabras distintas.', ok: false, por_que: 'Están muy unidas, pero cada una destaca un aspecto distinto del favor de Dios.' }
          ],
          explicacion: 'La misericordia mira nuestra miseria; la gracia mira nuestra falta de méritos. En Cristo recibimos ambas.'
        } }
      ],
      pensar: 'De las misericordias de Dios, Lamentaciones dice: «Nuevas son cada mañana» (Lm 3:23). ¿Qué misericordia nueva de Dios puedes reconocer en el día de hoy?'
    }
  ];

  window.__TRINIDAD.atributos = atributos;
})();
/* Dios y la Trinidad · ruta IV. La Trinidad (ver encabezado en parte1.js) */
(() => {
  const trinidad = [
    {
      id: 'definicion', n: 'Un solo Dios en tres personas', ref: 'Deuteronomio 6:4; Mateo 28:19; 2 Corintios 13:14',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-escudo.svg', alt: 'Triángulo con el Padre, el Hijo y el Espíritu Santo en los vértices, unidos al centro por la palabra Dios con la frase «es»; los lados que unen a las personas dicen «no es»', pie: 'El escudo de la Trinidad, un diagrama usado desde la Edad Media: cada persona es Dios, y ninguna es la otra.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que la doctrina afirma',
          cab: ['Afirmación', 'Base bíblica', 'Lo que niega'],
          filas: [
            ['Hay un solo Dios', 'Dt 6:4; Is 45:5; 1 Co 8:4', 'Que haya tres dioses (triteísmo)'],
            ['El Padre es Dios', 'Jn 6:27; 1 Co 8:6', 'Que solo uno de los tres sea Dios'],
            ['El Hijo es Dios', 'Jn 1:1; 20:28; He 1:8', 'Que el Hijo sea una criatura (arrianismo)'],
            ['El Espíritu Santo es Dios', 'Hch 5:3-4; 1 Co 2:10-11', 'Que el Espíritu sea una fuerza impersonal'],
            ['Los tres son personas distintas', 'Mt 3:16-17; Jn 14:16; 17:5', 'Que sean solo tres modos o máscaras de uno (modalismo)'],
            ['Los tres son iguales y eternos', 'Jn 1:1; 17:5; He 9:14', 'Que uno sea más Dios que otro']
          ],
          nota: 'Una esencia divina, tres personas. Si se niega cualquiera de las seis afirmaciones, se cae en uno de los errores de la ruta V.'
        } }
      ],
      texto: [
        'La palabra Trinidad no aparece en la Biblia. Tampoco aparecen las palabras omnipresencia ni encarnación, y sin embargo expresan verdades que la Biblia enseña. Trinidad es el nombre que la iglesia dio, desde el siglo II, a lo que encontraba en la Escritura cuando la leía completa: que hay un solo Dios, y que el Padre, el Hijo y el Espíritu Santo son ese único Dios, sin ser la misma persona.',
        'La doctrina se puede resumir en una frase: un solo Dios en tres personas. O, dicho de otra manera, una sola esencia divina que subsiste eternamente como Padre, Hijo y Espíritu Santo, iguales en poder, en gloria y en eternidad. La tabla desarma esa frase en seis afirmaciones, cada una con su base bíblica. La doctrina de la Trinidad no es una idea agregada a la Biblia: es la única manera de sostener todas esas afirmaciones al mismo tiempo sin negar ninguna.',
        { h: '¿Qué significa «persona»?' },
        'Hay que tener cuidado con la palabra persona. Tres personas humanas, como Pedro, Juan y Santiago, son tres individuos separados, cada uno con su propio ser. Si la Trinidad fuera así, habría tres dioses. Cuando la teología dice que Dios es tres personas, quiere decir que en el único ser de Dios hay tres que se relacionan entre sí: se hablan, se aman, se envían y se glorifican el uno al otro. El Padre no es el Hijo, el Hijo no es el Espíritu, el Espíritu no es el Padre; pero los tres no son tres seres, sino el único Dios.',
        'El esquema, conocido desde la Edad Media como el escudo de la Trinidad, lo dice con flechas: cada persona «es» Dios, y cada una «no es» la otra. No explica cómo es posible; muestra qué se afirma.',
        { h: 'Un misterio revelado' },
        'La Trinidad es un misterio en el sentido bíblico de la palabra: una verdad que no podríamos haber descubierto por nuestra cuenta y que Dios nos reveló. Podemos conocerla y expresarla con exactitud, aunque no podamos comprenderla del todo. No es una contradicción, porque no dice que Dios sea uno y tres en el mismo sentido: es uno en esencia y tres en personas. Que no podamos imaginarlo no es extraño; lo extraño sería que el ser del Dios infinito cupiera en nuestra imaginación.',
        { ejercicio: {
          pregunta: '¿Cuál de estas frases expresa correctamente la doctrina de la Trinidad?',
          opciones: [
            { t: 'Un Dios que se manifiesta en tres formas distintas según la época.', ok: false, por_que: 'Esa es la idea del modalismo: un solo Dios que cambia de modo. La Biblia muestra a las tres personas a la vez, por ejemplo en el bautismo de Jesús.' },
            { t: 'Tres dioses que trabajan siempre de acuerdo.', ok: false, por_que: 'Eso es triteísmo. Contradice el Shemá: «Jehová uno es» (Deuteronomio 6:4).' },
            { t: 'Un solo Dios, que existe eternamente como Padre, Hijo y Espíritu Santo.', ok: true, por_que: 'Uno en esencia, tres en personas: así se sostienen todas las afirmaciones bíblicas a la vez.' }
          ],
          explicacion: 'La Trinidad no es tres dioses ni un Dios con tres máscaras, sino el único Dios que es Padre, Hijo y Espíritu Santo.'
        } }
      ],
      pensar: 'La Trinidad es un misterio que se puede conocer, aunque no comprender del todo. ¿Te cuesta adorar a un Dios que no cabe completo en tu entendimiento, o eso te lleva a adorarlo más?'
    },
    {
      id: 'antiguo', n: 'Indicios en el Antiguo Testamento', ref: 'Génesis 1:26; 3:22; 11:7; Isaías 6:8; 48:16; 61:1; Salmo 45:6-7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra. Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.', ref: 'Génesis 1:26-27' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pasajes que el Nuevo Testamento ayuda a leer',
          cab: ['Pasaje', 'Qué se observa'],
          filas: [
            ['Gn 1:26; 3:22; 11:7', 'Dios habla en plural: «Hagamos», «uno de nosotros», «descendamos»'],
            ['Is 6:3, 8', 'Tres veces santo; «¿quién irá por nosotros?»'],
            ['Gn 16:13; Éx 3:2-6; Jue 13:21-22', 'El ángel de Jehová habla como Dios y es llamado Dios'],
            ['Sal 45:6-7 (He 1:8-9)', 'Al rey se le llama Dios, y Dios lo unge'],
            ['Sal 110:1 (Mt 22:43-45)', 'Jehová habla a «mi Señor», el Señor de David'],
            ['Is 48:16; 61:1 (Lc 4:18)', 'Jehová, su Espíritu y el enviado aparecen juntos'],
            ['Gn 1:2; Sal 139:7', 'El Espíritu de Dios actúa en la creación y está en todo lugar']
          ],
          nota: 'Ninguno de estos textos, por sí solo, enseña la Trinidad; juntos, y a la luz del Nuevo Testamento, la anticipan.'
        } }
      ],
      texto: [
        'El Antiguo Testamento insiste una y otra vez en que Dios es uno. Israel vivía rodeado de pueblos politeístas, y lo primero que tenía que aprender era que no había otros dioses. Por eso la Trinidad no se revela con claridad en el Antiguo Testamento: se revela en el Nuevo, cuando el Hijo se hace hombre y el Espíritu es derramado. Sin embargo, al volver a leer las Escrituras de Israel con los ojos del Nuevo Testamento, los cristianos encontraron que ya había indicios.',
        { h: '«Hagamos»' },
        'El primero está en la creación del ser humano: «Entonces dijo Dios: Hagamos al hombre a nuestra imagen» (Gn 1:26). El versículo siguiente vuelve al singular: «Y creó Dios al hombre a su imagen» (Gn 1:27). El mismo plural aparece después de la caída, «He aquí el hombre es como uno de nosotros» (Gn 3:22), y en Babel, «descendamos, y confundamos allí su lengua» (Gn 11:7). Isaías oye a Dios preguntar: «¿A quién enviaré, y quién irá por nosotros?» (Is 6:8).',
        { posturas: {
          titulo: '¿Qué significa el plural de Génesis 1:26?',
          a: { n: 'Plural de majestad o consulta con los ángeles', t: 'Algunos lo explican como un plural de majestad, como cuando un rey dice «nos» al hablar de sí mismo, o como Dios hablando con los ángeles de su corte celestial (1 R 22:19-22). Del mismo modo, el plural de la palabra Elohim sería una forma de expresar grandeza, no número.' },
          b: { n: 'Un primer indicio de la pluralidad en Dios', t: 'El hebreo bíblico no usa el plural de majestad con verbos en primera persona, y los ángeles no participaron en la creación del ser humano ni son la imagen según la cual fue hecho: el versículo 27 dice que fue creado «a imagen de Dios». El plural sugiere que en el único Dios hay más de uno que delibera.' },
          c: 'Este recurso entiende el plural como un indicio, no como una prueba. Por sí solo no enseña la Trinidad, y sería un error apoyar la doctrina solo en este versículo. Pero encaja con lo que el Nuevo Testamento revela: que el Verbo estaba con Dios en la creación (Jn 1:1-3) y que el Espíritu se movía sobre las aguas (Gn 1:2). Algo parecido ocurre con la palabra «uno» del Shemá: algunos señalan que puede indicar una unidad compuesta, pero el argumento es débil y no es necesario.'
        } },
        { h: 'El ángel de Jehová' },
        'Otro indicio es el ángel de Jehová. No es un ángel cualquiera: habla como Dios y es tratado como Dios. Agar, después de hablar con él, llama a Jehová «Dios que ve» (Gn 16:13). En la zarza, el ángel de Jehová se aparece en la llama, y quien habla desde ella dice «Yo soy el Dios de tu padre» (Éx 3:2-6). Manoa, después de verlo, exclama: «Ciertamente moriremos, porque a Dios hemos visto» (Jue 13:22). Y sin embargo es distinto de Jehová, que lo envía y de quien dice: «mi nombre está en él» (Éx 23:21). Muchos estudiosos ven en estas apariciones al Hijo antes de su encarnación, aunque el texto no lo dice explícitamente.',
        'Por último, hay pasajes donde aparecen juntos Dios, su Espíritu y alguien enviado: «el Espíritu de Jehová el Señor está sobre mí, porque me ungió Jehová» (Is 61:1). Jesús leyó ese texto en Nazaret y dijo que se cumplía en Él (Lc 4:18-21).',
        { ejercicio: {
          pregunta: '¿Cuál es la manera más prudente de usar Génesis 1:26 para hablar de la Trinidad?',
          opciones: [
            { t: 'Como la prueba principal de la doctrina.', ok: false, por_que: 'Por sí solo, el plural admite otras explicaciones. La doctrina se apoya sobre todo en la revelación del Nuevo Testamento.' },
            { t: 'Como un indicio que se entiende mejor a la luz del Nuevo Testamento.', ok: true, por_que: 'Es la lectura que siguieron muchos padres de la iglesia y reformadores: el plural anticipa lo que después se revela con claridad.' },
            { t: 'No tiene ninguna relación con la Trinidad.', ok: false, por_que: 'Juan 1:1-3 muestra que el Verbo estaba con Dios en la creación, y eso da sentido al plural.' }
          ],
          explicacion: 'La revelación es progresiva: lo que en el Antiguo Testamento es un indicio, en el Nuevo es una verdad clara.'
        } }
      ],
      pensar: 'Dios reveló primero que es uno, y después que es Padre, Hijo y Espíritu. ¿Por qué crees que Israel necesitaba aprender primero la unidad de Dios?'
    },
    {
      id: 'tres-juntos', n: 'Las tres personas juntas', ref: 'Mateo 3:13-17; 28:18-20; 2 Corintios 13:14',
      visual: [
        { tipo: 'imagen', titulo: 'El bautismo', src: 'img/bautismo-jesus.webp', alt: 'En el río Jordán, Jesús, de espaldas y con el agua hasta los muslos, mira hacia el cielo abierto, del que desciende una paloma en un haz de luz; Juan el Bautista, de frente, lo observa con asombro', pie: 'El Hijo en el agua, el Espíritu que desciende y la voz del Padre (Mateo 3:16-17).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Jesús, después que fue bautizado, subió luego del agua; y he aquí cielos le fueron abiertos, y vio al Espíritu de Dios que descendía como paloma, y venía sobre él. Y hubo una voz de los cielos, que decía: Este es mi Hijo amado, en quien tengo complacencia.', ref: 'Mateo 3:16-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Padre, el Hijo y el Espíritu en un mismo pasaje',
          cab: ['Pasaje', 'Padre', 'Hijo', 'Espíritu'],
          filas: [
            ['Lc 1:35', 'El poder del Altísimo', 'El Santo Ser que nacerá', 'El Espíritu Santo vendrá sobre ti'],
            ['Mt 3:16-17', 'La voz de los cielos', 'Jesús, bautizado', 'Desciende como paloma'],
            ['Jn 14:16-17', 'Dará otro Consolador', 'Yo rogaré al Padre', 'El Espíritu de verdad'],
            ['Mt 28:19', 'El nombre del Padre', 'y del Hijo', 'y del Espíritu Santo'],
            ['Hch 2:33', 'Da la promesa', 'Exaltado, la derrama', 'La promesa del Espíritu'],
            ['1 Co 12:4-6', 'Dios, que hace todas las cosas', 'El Señor', 'El mismo Espíritu'],
            ['2 Co 13:14', 'El amor de Dios', 'La gracia del Señor Jesucristo', 'La comunión del Espíritu'],
            ['1 P 1:2', 'Presciencia de Dios Padre', 'La sangre de Jesucristo', 'Santificación del Espíritu']
          ]
        } }
      ],
      texto: [
        'Si el Antiguo Testamento deja indicios, el Nuevo pone a las tres personas en la misma escena. La más clara es el bautismo de Jesús. Cuando subió del agua, los cielos se abrieron, Juan vio al Espíritu de Dios descender como paloma y venir sobre Él, y una voz desde los cielos dijo: «Este es mi Hijo amado, en quien tengo complacencia» (Mt 3:17). El Hijo está en el agua; el Espíritu desciende; el Padre habla desde el cielo. No es un solo actor cambiando de papel: son tres, presentes y actuando a la vez.',
        { h: 'En el nombre' },
        'Al final del mismo evangelio, Jesús resucitado envía a sus discípulos a hacer discípulos a todas las naciones, «bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo» (Mt 28:19). Fíjate en un detalle: dice «en el nombre», en singular, no «en los nombres». Pero luego nombra a tres, cada uno con su artículo: el Padre, el Hijo, el Espíritu Santo. Un solo nombre, tres personas. Para un judío, el Nombre era el de Jehová; ahora se bautiza en el nombre que comparten el Padre, el Hijo y el Espíritu. La ruta V explica qué relación tiene este mandato con el bautismo «en el nombre de Jesús» que menciona Hechos.',
        { h: 'Una bendición en tres partes' },
        'Pablo termina su segunda carta a los corintios con una bendición: «La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros» (2 Co 13:14). No es una explicación teológica, sino una oración, y por eso es tan valiosa: muestra que los primeros cristianos oraban y bendecían pensando en el Padre, el Hijo y el Espíritu, cada uno con su aporte, sin creer en tres dioses.',
        'La tabla reúne otros pasajes en que aparecen las tres personas: el anuncio a María, la promesa del Consolador, Pentecostés, los dones espirituales, la elección y la santificación. Lo notable es que estos textos no intentan demostrar la Trinidad; simplemente la dan por sentada. Los apóstoles hablaban así porque así habían conocido a Dios: como el Padre que envió a su Hijo y el Espíritu que el Hijo derramó sobre ellos.',
        { ejercicio: {
          pregunta: '¿Por qué el bautismo de Jesús es tan importante para la doctrina de la Trinidad?',
          opciones: [
            { t: 'Porque Jesús recibe ahí su divinidad.', ok: false, por_que: 'Jesús ya era el Hijo eterno (Juan 1:1). En el bautismo el Padre lo presenta, no lo convierte en Dios.' },
            { t: 'Porque el Padre, el Hijo y el Espíritu aparecen al mismo tiempo, cada uno actuando de manera distinta.', ok: true, por_que: 'El Hijo sube del agua, el Espíritu desciende y el Padre habla: tres personas presentes a la vez.' },
            { t: 'Porque muestra que la paloma es una cuarta persona divina.', ok: false, por_que: 'El texto dice que el Espíritu descendió «como paloma»: es una forma visible del Espíritu, no otro ser.' }
          ],
          explicacion: 'En el Jordán, las tres personas se distinguen con claridad. Un Dios que solo cambiara de modo no podría estar en el agua y hablar desde el cielo al mismo tiempo.'
        } }
      ],
      pensar: 'Fuiste bautizado, o lo serás, en el nombre del Padre, del Hijo y del Espíritu Santo. ¿Qué significa para ti pertenecer a ese Nombre?'
    },
    {
      id: 'padre-dios', n: 'El Padre es Dios', ref: 'Juan 6:27; 17:1-5; 1 Corintios 8:6; Efesios 1:3; Mateo 11:25-27',
      visual: [
        { tipo: 'imagen', titulo: 'El trono', src: '../apocalipsis/img/apo-trono.webp', alt: 'Un trono rodeado de un arco iris y de una luz que oculta a quien está sentado en él, con veinticuatro ancianos y cuatro seres vivientes alrededor', pie: 'El que está sentado en el trono (Apocalipsis 4:2-3).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Estas cosas habló Jesús, y levantando los ojos al cielo, dijo: Padre, la hora ha llegado; glorifica a tu Hijo, para que también tu Hijo te glorifique a ti; como le has dado potestad sobre toda carne, para que dé vida eterna a todos los que le diste. Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado. Yo te he glorificado en la tierra; he acabado la obra que me diste que hiciese. Ahora pues, Padre, glorifícame tú al lado tuyo, con aquella gloria que tuve contigo antes que el mundo fuese.', ref: 'Juan 17:1-5' }
      ],
      texto: [
        'Que el Padre es Dios casi nadie lo discute. Jesús lo llama «el único Dios verdadero» (Jn 17:3) y dice que a Él lo «señaló Dios el Padre» (Jn 6:27). Pablo escribe que para nosotros hay «un Dios, el Padre, del cual proceden todas las cosas» (1 Co 8:6), y abre sus cartas con bendiciones al «Dios y Padre de nuestro Señor Jesucristo» (Ef 1:3). En el Nuevo Testamento, cuando aparece la palabra Dios sin más precisión, casi siempre se refiere al Padre.',
        { h: 'Padre desde siempre' },
        'Lo importante es entender de quién es Padre. La Biblia llama a Dios Padre en varios sentidos: es Padre de Israel, porque lo formó como pueblo (Dt 32:6); es Padre de todos, como Creador (Hch 17:28); y es Padre de los creyentes, por adopción (Ro 8:15). Pero hay un sentido anterior y más profundo: es el Padre de nuestro Señor Jesucristo. Y lo es desde la eternidad, no desde Belén. Jesús ora: «Ahora pues, Padre, glorifícame tú al lado tuyo, con aquella gloria que tuve contigo antes que el mundo fuese» (Jn 17:5). Y dice que el Padre lo amó «desde antes de la fundación del mundo» (Jn 17:24).',
        'Esto quiere decir que Dios no comenzó a ser Padre cuando creó el mundo o cuando el Hijo se hizo hombre. Siempre fue Padre, porque siempre tuvo un Hijo. El amor no es algo que Dios aprendió al crear, sino algo que siempre existió dentro de Dios: el Padre ama al Hijo, el Hijo ama al Padre, en la comunión del Espíritu. Por eso Juan puede decir que «Dios es amor» (1 Jn 4:8): un Dios solitario, antes de la creación, no habría tenido a quién amar.',
        { h: 'Lo que hace el Padre' },
        'En la obra de la salvación, el Padre aparece como el origen del plan. Él escogió a los suyos en Cristo antes de la fundación del mundo (Ef 1:4), envió a su Hijo (Jn 3:16; Gá 4:4), lo entregó por nosotros (Ro 8:32), lo resucitó de los muertos (Hch 2:32) y prometió y dio el Espíritu Santo (Hch 1:4; 2:33). Jesús dice que nadie conoce al Padre, «sino el Hijo, y aquel a quien el Hijo lo quiera revelar» (Mt 11:27). Al Padre se le conoce por medio del Hijo.',
        { ejercicio: {
          pregunta: 'Según Juan 17:5 y 17:24, ¿desde cuándo es Dios el Padre de Jesucristo?',
          opciones: [
            { t: 'Desde que Jesús nació en Belén.', ok: false, por_que: 'Jesús habla de la gloria que tuvo con el Padre «antes que el mundo fuese».' },
            { t: 'Desde que Jesús fue bautizado en el Jordán.', ok: false, por_que: 'En el bautismo el Padre presenta a su Hijo amado; no lo adopta en ese momento.' },
            { t: 'Desde antes de la fundación del mundo, desde la eternidad.', ok: true, por_que: 'El Padre amó al Hijo «desde antes de la fundación del mundo» (Juan 17:24). La relación es eterna.' }
          ],
          explicacion: 'Dios siempre fue Padre porque siempre tuvo un Hijo. Su amor no comenzó con la creación.'
        } }
      ],
      pensar: 'El Padre te escogió en Cristo antes de la fundación del mundo (Ef 1:4). ¿Cómo cambia tu manera de ver tu vida saber que el amor de Dios por ti es anterior a todo lo que has hecho?'
    },
    {
      id: 'hijo-dios', n: 'El Hijo es Dios', ref: 'Juan 1:1-3, 14; 20:28; Colosenses 2:9; Hebreos 1:3, 8; Tito 2:13',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../apocalipsis/img/apo-cristo-glorificado.webp', alt: 'Cristo glorificado entre siete candeleros de oro, con el rostro oculto por una luz resplandeciente', pie: '«Yo soy el primero y el último» (Apocalipsis 1:17).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro clases de evidencia',
          cab: ['Evidencia', 'Ejemplos'],
          filas: [
            ['Se le llama Dios', 'Jn 1:1; 20:28; Ro 9:5; Tit 2:13; He 1:8; 1 Jn 5:20'],
            ['Tiene atributos que solo Dios tiene', 'Eterno (Jn 8:58; 17:5), inmutable (He 13:8), omnipresente (Mt 18:20; 28:20), omnisciente (Jn 16:30; 21:17)'],
            ['Hace obras que solo Dios hace', 'Crea (Jn 1:3; Col 1:16), sostiene todo (He 1:3), perdona pecados (Mr 2:5-7), juzgará al mundo (Jn 5:22)'],
            ['Recibe la honra que solo Dios recibe', 'Adoración (Mt 14:33; He 1:6; Ap 5:12-14), oración (Hch 7:59), la misma honra que el Padre (Jn 5:23)']
          ],
          nota: 'Dios no comparte su gloria con nadie (Is 42:8). Si el Hijo la comparte, es porque es Dios.'
        } }
      ],
      texto: [
        'La pregunta que separa a la fe cristiana de muchos otros grupos que leen la Biblia es esta: ¿quién es Jesús? Esta estación no estudia toda su persona y su obra, que tiene su propio recurso, sino lo que la doctrina de la Trinidad necesita: que el Hijo es Dios, igual al Padre, y no una criatura, por más elevada que sea.',
        { h: 'En el principio' },
        'Juan abre su evangelio con tres afirmaciones: «En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios» (Jn 1:1). El Verbo ya existía en el principio, es decir, no comenzó a existir. Estaba con Dios, en relación con Él, y por lo tanto es distinto del Padre. Y era Dios, de la misma naturaleza divina. Luego Juan añade que todas las cosas fueron hechas por Él, «y sin él nada de lo que ha sido hecho, fue hecho» (Jn 1:3). Si nada creado fue hecho sin Él, Él no es parte de lo creado. Y finalmente: «aquel Verbo fue hecho carne» (Jn 1:14). Ese Verbo es Jesús.',
        { h: 'Señor mío y Dios mío' },
        'La tabla agrupa la evidencia en cuatro clases. Se le llama Dios: Tomás, al ver al resucitado, le dijo «¡Señor mío, y Dios mío!» (Jn 20:28), y Jesús aceptó esa confesión en lugar de corregirla. Pablo dice que en Cristo «habita corporalmente toda la plenitud de la Deidad» (Col 2:9). Hebreos aplica al Hijo el Salmo 45: «Tu trono, oh Dios, por el siglo del siglo» (He 1:8). Tiene atributos que solo Dios tiene, como la eternidad: «Antes que Abraham fuese, yo soy» (Jn 8:58). Hace obras que solo Dios hace, como perdonar pecados; los escribas lo entendieron bien cuando pensaron: «¿Quién puede perdonar pecados, sino sólo Dios?» (Mr 2:7). Y recibe la honra que solo Dios recibe: el Padre quiere que todos honren al Hijo «como honran al Padre» (Jn 5:23).',
        'Al mismo tiempo, el Hijo es distinto del Padre: está «con Dios», ora al Padre, es enviado por Él y vuelve a Él. Por eso no se puede decir que Jesús es el Padre. Es el Hijo eterno, igual al Padre en naturaleza, distinto de Él como persona. Los Evangelios muestran además que, al hacerse hombre, se sometió voluntariamente al Padre en su misión: es lo que explica textos como «el Padre mayor es que yo», que se estudian en la ruta VI.',
        { ir: { t: 'Ver la Armonía de los evangelios', a: '../../evangelios/' } },
        { ejercicio: {
          pregunta: 'Juan 1:3 dice que todas las cosas fueron hechas por el Verbo, y sin Él nada fue hecho. ¿Qué implica sobre el Verbo?',
          opciones: [
            { t: 'Que fue la primera cosa que Dios creó, y luego Dios creó todo lo demás por medio de Él.', ok: false, por_que: 'Si fuera creado, habría algo hecho sin Él: Él mismo. Juan dice que nada de lo hecho fue hecho sin Él.' },
            { t: 'Que no es parte de lo creado: es el Creador.', ok: true, por_que: 'Todo lo que fue hecho, fue hecho por Él. Por lo tanto, Él no fue hecho; ya existía en el principio (Juan 1:1).' },
            { t: 'Que es un ángel muy poderoso.', ok: false, por_que: 'Los ángeles fueron creados por medio de Él (Colosenses 1:16), y Hebreos 1:6 manda que todos los ángeles le adoren.' }
          ],
          explicacion: 'El Verbo no está del lado de las criaturas, sino del lado del Creador: es Dios, distinto del Padre e igual a Él.'
        } }
      ],
      pensar: 'Tomás pasó de la duda a la adoración: «¡Señor mío, y Dios mío!» (Jn 20:28). ¿Es Jesús para ti un gran maestro, o tu Señor y tu Dios?'
    },
    {
      id: 'espiritu-dios', n: 'El Espíritu Santo es Dios y es persona', ref: 'Hechos 5:3-4; 1 Corintios 2:10-11; 12:11; Juan 14:16-17, 26; Efesios 4:30',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-efeso-espiritu.webp', alt: 'Pablo impone las manos sobre un grupo de discípulos en Éfeso, que reciben el Espíritu Santo y comienzan a hablar en lenguas y profetizar', pie: 'El Espíritu Santo vino sobre los discípulos de Éfeso (Hechos 19:6).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Espíritu es Alguien, no algo',
          cab: ['Rasgo personal', 'Referencia'],
          filas: [
            ['Enseña y recuerda', 'Jn 14:26'],
            ['Da testimonio de Cristo', 'Jn 15:26'],
            ['Oye y habla', 'Jn 16:13; Hch 13:2'],
            ['Escudriña y conoce lo profundo de Dios', '1 Co 2:10-11'],
            ['Reparte los dones como Él quiere', '1 Co 12:11'],
            ['Intercede por nosotros', 'Ro 8:26-27'],
            ['Se le puede contristar, mentir y resistir', 'Ef 4:30; Hch 5:3; 7:51'],
            ['Prohíbe y dirige', 'Hch 16:6-7']
          ],
          nota: 'Además, es eterno (He 9:14), está en todo lugar (Sal 139:7) y participó en la creación (Gn 1:2): atributos y obras de Dios.'
        } }
      ],
      texto: [
        'Sobre el Espíritu Santo hay dos errores frecuentes. Uno es pensar que es una fuerza o una energía de Dios, como la electricidad, y no una persona. El otro es pensar que es una persona, pero inferior: un ser creado o un ángel. La Biblia descarta ambos. Esta estación muestra lo que la Trinidad necesita; la persona y la obra del Espíritu, sus dones y el bautismo en el Espíritu Santo se estudian en su propio recurso.',
        { h: 'Es Dios' },
        'El texto más directo está en la historia de Ananías y Safira. Ananías vendió una propiedad y entregó solo una parte del dinero, fingiendo que era el total. Pedro le dijo: «¿por qué llenó Satanás tu corazón para que mintieses al Espíritu Santo…?» Y un momento después: «No has mentido a los hombres, sino a Dios» (Hch 5:3-4). Mentir al Espíritu Santo es mentir a Dios. Pablo dice que los creyentes son «templo de Dios», porque «el Espíritu de Dios mora en vosotros» (1 Co 3:16). Y el Espíritu tiene atributos que solo Dios tiene: es llamado «el Espíritu eterno» (He 9:14), está en todo lugar (Sal 139:7) y conoce lo profundo de Dios como solo Dios se conoce a sí mismo (1 Co 2:10-11).',
        { h: 'Es persona' },
        'Jesús, al despedirse de sus discípulos, les prometió «otro Consolador» (Jn 14:16). La palabra griega, paráclito, designa a alguien llamado para estar al lado de otro, como un abogado o un ayudador. Y otro significa uno más, de la misma clase: Jesús había sido su Consolador, y el Espíritu sería otro como Él. Luego habla del Espíritu con verbos personales: enseñará, recordará, dará testimonio, guiará, oirá, hablará, glorificará a Cristo (Jn 14:26; 15:26; 16:13-14). La tabla reúne más rasgos. Una fuerza no puede ser contristada, pero Pablo dice: «no contristéis al Espíritu Santo de Dios» (Ef 4:30). Una energía no tiene voluntad, pero el Espíritu reparte los dones «a cada uno en particular como él quiere» (1 Co 12:11).',
        'El Espíritu es distinto del Padre y del Hijo. Jesús ruega al Padre, y el Padre da al Espíritu (Jn 14:16). El Espíritu no habla por su propia cuenta, sino que glorifica al Hijo (Jn 16:13-14). Es la tercera persona de la Trinidad, no porque sea menos, sino por el orden en que se nos revela y en que actúa.',
        'Esta verdad es preciosa para la vida pentecostal. Ser lleno del Espíritu no es cargarse de una energía, sino ser lleno de la presencia de Dios mismo, que es una persona con quien se tiene comunión (2 Co 13:14).',
        { ejercicio: {
          pregunta: '¿Qué muestra Efesios 4:30 al decir «no contristéis al Espíritu Santo»?',
          opciones: [
            { t: 'Que el Espíritu es una fuerza que se debilita cuando pecamos.', ok: false, por_que: 'Contristar significa entristecer. Una fuerza no se entristece; una persona sí.' },
            { t: 'Que el Espíritu es una persona que puede ser entristecida por nuestro pecado.', ok: true, por_que: 'El verbo supone afectos personales. El Espíritu es Alguien que se relaciona con nosotros.' },
            { t: 'Que el Espíritu solo está presente cuando estamos alegres.', ok: false, por_que: 'El versículo dice que con Él fuimos sellados para el día de la redención: su presencia es permanente.' }
          ],
          explicacion: 'El Espíritu Santo es Dios y es persona: se le puede obedecer, resistir, contristar y amar.'
        } }
      ],
      pensar: 'El Espíritu Santo puede ser contristado (Ef 4:30). ¿Hay algo en tu manera de hablar o de vivir que lo esté entristeciendo?'
    },
    {
      id: 'relacion', n: 'Distintos y unidos', ref: 'Juan 14:9-11; 17:20-24; Efesios 1:3-14; Hechos 7:55-56',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-economia.svg', alt: 'Tres columnas para Efesios 1: el Padre nos escogió y predestinó (vv. 3-6), el Hijo nos redimió con su sangre (vv. 7-12), el Espíritu nos selló como arras de la herencia (vv. 13-14); cada columna termina en «para alabanza de su gloria»', pie: 'Efesios 1:3-14: una sola salvación, obra de las tres personas.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mas no ruego solamente por éstos, sino también por los que han de creer en mí por la palabra de ellos, para que todos sean uno; como tú, oh Padre, en mí, y yo en ti, que también ellos sean uno en nosotros; para que el mundo crea que tú me enviaste. La gloria que me diste, yo les he dado, para que sean uno, así como nosotros somos uno. Yo en ellos, y tú en mí, para que sean perfectos en unidad, para que el mundo conozca que tú me enviaste, y que los has amado a ellos como también a mí me has amado. Padre, aquellos que me has dado, quiero que donde yo estoy, también ellos estén conmigo, para que vean mi gloria que me has dado; porque me has amado desde antes de la fundación del mundo.', ref: 'Juan 17:20-24' },
        { tipo: 'imagen', titulo: 'Esteban', src: '../hechos/img/hechos-esteban.webp', alt: 'Esteban, ante el concilio, mira hacia el cielo con el rostro iluminado mientras los miembros del Sanedrín se tapan los oídos', pie: 'Esteban, lleno del Espíritu Santo, ve la gloria de Dios y a Jesús a su diestra (Hechos 7:55).', origen: 'ia' }
      ],
      texto: [
        'Si el Padre, el Hijo y el Espíritu son el mismo Dios, ¿en qué se distinguen? Y si son distintos, ¿cómo son uno? La Biblia no da una fórmula, pero muestra cómo se relacionan.',
        { h: 'Uno en el otro' },
        'Jesús dice a Felipe: «¿No crees que yo soy en el Padre, y el Padre en mí?» (Jn 14:10). Y en su oración por la iglesia pide que los creyentes sean uno «como tú, oh Padre, en mí, y yo en ti» (Jn 17:21). Las personas divinas no son tres individuos que se ponen de acuerdo, sino que habitan la una en la otra, compartiendo un solo ser. Los antiguos llamaron a esto pericóresis, una palabra griega que sugiere una danza en la que cada uno está en el otro. Por eso Jesús puede decir: «El que me ha visto a mí, ha visto al Padre» (Jn 14:9), sin decir que Él es el Padre.',
        { h: 'Relaciones eternas' },
        'Lo que distingue a las personas no es que tengan más o menos divinidad, sino su relación. El Padre es Padre del Hijo; el Hijo es Hijo del Padre; el Espíritu procede del Padre (Jn 15:26) y es enviado por el Padre y por el Hijo (Jn 14:26; 16:7). Estas relaciones no son un orden de importancia: los tres son igualmente Dios y dignos de la misma adoración. Pero sí son un orden real, que se refleja en cómo actúan. En su misión en la tierra, el Hijo vino a hacer «la voluntad del que me envió» (Jn 6:38), y el Espíritu glorifica al Hijo (Jn 16:14). Esa sujeción en la misión no rebaja al Hijo ni al Espíritu, como el amor no rebaja al que sirve.',
        { h: 'Una sola obra' },
        'En todo lo que Dios hace, actúan las tres personas juntas, cada una a su manera. El esquema lo muestra con Efesios 1, un solo párrafo en griego que alaba a Dios por la salvación. El Padre nos escogió en Cristo antes de la fundación del mundo y nos predestinó para ser adoptados hijos (Ef 1:4-5). En el Hijo «tenemos redención por su sangre, el perdón de pecados» (Ef 1:7). Y fuimos sellados con el Espíritu Santo de la promesa, «que es las arras de nuestra herencia» (Ef 1:13-14). Tres veces se repite el estribillo: para alabanza de su gloria (Ef 1:6, 12, 14).',
        'Esteban, al morir, vio esa comunión: lleno del Espíritu Santo, «vio la gloria de Dios, y a Jesús que estaba a la diestra de Dios» (Hch 7:55). Las tres personas en una sola escena, otra vez.',
        { ejercicio: {
          pregunta: 'Según el esquema de Efesios 1:3-14, ¿qué aporta cada persona a la salvación?',
          opciones: [
            { t: 'El Padre redime, el Hijo sella y el Espíritu elige.', ok: false, por_que: 'Los papeles están cambiados: el Padre elige (v. 4), el Hijo redime (v. 7) y el Espíritu sella (v. 13).' },
            { t: 'El Padre elige y adopta, el Hijo redime con su sangre, el Espíritu sella como garantía de la herencia.', ok: true, por_que: 'Es el orden del pasaje. Una sola salvación, obra de las tres personas.' },
            { t: 'Solo el Hijo participa; el Padre y el Espíritu aparecen de paso.', ok: false, por_que: 'El párrafo empieza bendiciendo al Padre y termina con el sello del Espíritu: los tres son protagonistas.' }
          ],
          explicacion: 'Las obras de Dios son inseparables: el Padre planea, el Hijo cumple y el Espíritu aplica, y todo para alabanza de su gloria.'
        } }
      ],
      pensar: 'Jesús pidió que sus discípulos fueran uno como el Padre y Él son uno (Jn 17:21). ¿Qué relación tiene la unidad de tu iglesia con el testimonio que da al mundo?'
    },
    {
      id: 'comparaciones', n: 'Las comparaciones y sus límites', ref: 'Isaías 40:18, 25; Éxodo 20:4',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-comparaciones.svg', alt: 'Cinco comparaciones frecuentes de la Trinidad con el error al que llevan: agua, hielo y vapor (modalismo); un hombre que es padre, hijo y esposo (modalismo); huevo y trébol (partes de Dios); el sol, su luz y su calor (el Hijo y el Espíritu como efectos); tres personas humanas (tres dioses)', pie: 'Cada comparación ilumina algo y deforma otra cosa.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué ilustra y qué deforma cada comparación',
          cab: ['Comparación', 'Qué ilustra', 'Error al que lleva'],
          filas: [
            ['Agua: líquido, hielo, vapor', 'Una sustancia en tres formas', 'Modalismo: una sola persona que cambia de estado'],
            ['Un hombre que es padre, hijo y esposo', 'Una sola persona con tres relaciones', 'Modalismo: tres papeles de uno solo'],
            ['Huevo: cáscara, clara, yema; trébol de tres hojas', 'Unidad de tres elementos', 'Partes: cada persona sería un tercio de Dios'],
            ['El sol, su luz y su calor', 'Que el Hijo y el Espíritu vienen del Padre', 'Que el Hijo y el Espíritu sean efectos o cosas, no personas'],
            ['Tres personas humanas de una familia', 'Tres personas que se aman', 'Triteísmo: tres seres, tres dioses']
          ],
          nota: 'Lo más seguro es hablar como habla la Biblia: un solo Dios; el Padre, el Hijo y el Espíritu son Dios; y son distintos entre sí.'
        } }
      ],
      texto: [
        'Quien enseña en la escuela dominical o en un grupo pequeño conoce la dificultad: cómo explicar la Trinidad a un niño o a un nuevo creyente. Se han usado muchas comparaciones con cosas de la vida diaria. Tienen buena intención, y algunas pueden ayudar en un primer momento, pero todas tienen un problema: si se las toma en serio, llevan a uno de los errores que la iglesia rechazó.',
        { h: 'Cinco comparaciones' },
        'La más común es el agua, que puede ser líquido, hielo o vapor. Ilustra que una misma sustancia puede presentarse de tres maneras. Pero el agua no es las tres cosas a la vez: se transforma de una en otra. Aplicada a Dios, describe un solo Dios que a veces es Padre, a veces Hijo y a veces Espíritu. Es justamente el error del modalismo, que el bautismo de Jesús descarta. Lo mismo pasa con el hombre que es padre de sus hijos, hijo de sus padres y esposo de su mujer: es una sola persona con tres papeles.',
        'El huevo, con su cáscara, clara y yema, o el trébol de tres hojas, ilustran que tres cosas forman una unidad. Pero cada parte es solo una porción del todo. Ninguna hoja es el trébol completo. En cambio, el Padre no es un tercio de Dios: es plenamente Dios, y lo mismo el Hijo y el Espíritu. El sol, su luz y su calor muestran que algo procede de otro, pero hacen de la luz y el calor efectos impersonales, no personas. Y tres personas humanas, como tres hermanos, ilustran la relación personal, pero son tres seres distintos: llevan a creer en tres dioses.',
        { h: 'Entonces, ¿cómo explicarla?' },
        'Ninguna cosa creada puede ser una imagen exacta del Creador. Isaías pregunta: «¿A qué, pues, me haréis semejante o me compararéis? dice el Santo» (Is 40:25). Las comparaciones pueden servir para mostrar que algo puede ser uno y tres en sentidos distintos, siempre que se diga también en qué fallan. Pero la mejor manera de enseñar la Trinidad es la más sencilla: decir lo que dice la Biblia. Hay un solo Dios. El Padre es Dios, el Hijo es Dios y el Espíritu Santo es Dios. El Padre no es el Hijo, el Hijo no es el Espíritu y el Espíritu no es el Padre. Y adorar a ese Dios, aunque no podamos imaginarlo.',
        { ejercicio: {
          pregunta: 'Un maestro dice: «Dios es como el agua: a veces líquido, a veces hielo y a veces vapor». ¿Qué error puede transmitir?',
          opciones: [
            { t: 'Triteísmo: que hay tres dioses.', ok: false, por_que: 'El agua es una sola sustancia; la comparación no sugiere tres dioses, sino otra cosa.' },
            { t: 'Modalismo: que un solo Dios cambia de forma según el momento.', ok: true, por_que: 'El agua no es líquido, hielo y vapor al mismo tiempo. En el bautismo de Jesús, el Padre, el Hijo y el Espíritu están presentes a la vez.' },
            { t: 'Ninguno: es una comparación exacta.', ok: false, por_que: 'Ninguna comparación es exacta, y esta en particular describe el error del modalismo.' }
          ],
          explicacion: 'Las tres personas existen siempre y a la vez. Por eso las comparaciones con cosas que cambian de estado no sirven.'
        } },
        { ejercicio: {
          pregunta: '¿Qué problema tiene la comparación con el trébol de tres hojas?',
          opciones: [
            { t: 'Que cada persona sería solo una parte de Dios.', ok: true, por_que: 'Una hoja no es el trébol completo. Pero el Padre, el Hijo y el Espíritu son, cada uno, plenamente Dios (Colosenses 2:9).' },
            { t: 'Que el trébol es una planta y Dios no.', ok: false, por_que: 'Toda comparación usa algo distinto de Dios. El problema está en lo que la comparación sugiere.' },
            { t: 'Que el trébol tiene a veces cuatro hojas.', ok: false, por_que: 'Es una curiosidad botánica, no el problema teológico de la comparación.' }
          ],
          explicacion: 'Dios no está dividido en partes: toda la plenitud de la Deidad está en cada persona.'
        } }
      ],
      pensar: 'Si tuvieras que explicar la Trinidad a un niño de tu iglesia, ¿qué le dirías usando solo palabras de la Biblia?'
    },
    {
      id: 'vida', n: 'La Trinidad en la vida del creyente', ref: 'Efesios 2:18; Romanos 8:26-27, 34; Judas 20-21; Hechos 2:33',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'porque por medio de él los unos y los otros tenemos entrada por un mismo Espíritu al Padre. Así que ya no sois extranjeros ni advenedizos, sino conciudadanos de los santos, y miembros de la familia de Dios, edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo, en quien todo el edificio, bien coordinado, va creciendo para ser un templo santo en el Señor; en quien vosotros también sois juntamente edificados para morada de Dios en el Espíritu.', ref: 'Efesios 2:18-22' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La vida cristiana con el Dios trino',
          cab: ['Práctica', 'Padre', 'Hijo', 'Espíritu'],
          filas: [
            ['La oración', 'A quien oramos (Mt 6:9)', 'Por quien oramos, intercede (Jn 16:23; Ro 8:34)', 'En quien oramos, nos ayuda (Ro 8:26; Jud 20)'],
            ['La adoración', 'Busca adoradores (Jn 4:23)', 'Digno del Cordero (Ap 5:12)', 'Adoramos en espíritu (Fil 3:3)'],
            ['El bautismo en agua', 'En su nombre (Mt 28:19)', 'En su nombre', 'En su nombre'],
            ['El bautismo en el Espíritu', 'Da la promesa (Hch 1:4)', 'La derrama (Hch 2:33)', 'Viene con poder (Hch 1:8)'],
            ['La santa cena', 'Damos gracias (1 Co 11:24)', 'Recordamos su cuerpo y su sangre', 'Comunión en un cuerpo (1 Co 12:13)'],
            ['La seguridad', 'Nadie nos arrebata de su mano (Jn 10:29)', 'Intercede siempre (He 7:25)', 'Nos sella (Ef 1:13)']
          ]
        } }
      ],
      texto: [
        'La Trinidad podría parecer una doctrina solo para teólogos. Pero el Nuevo Testamento muestra que la vida cristiana entera es trinitaria. Pablo lo resume en un versículo: «porque por medio de él los unos y los otros tenemos entrada por un mismo Espíritu al Padre» (Ef 2:18). Por medio de Cristo, en el Espíritu, al Padre: esa es la dirección de toda la vida del creyente.',
        { h: 'Orar al Padre, por el Hijo, en el Espíritu' },
        'Jesús enseñó a orar al Padre (Mt 6:9), y prometió que lo que pidiéramos al Padre en su nombre nos sería dado (Jn 16:23). Pedir en el nombre de Jesús no es una fórmula mágica para terminar la oración: es acercarse al Padre confiando en lo que Cristo hizo, y no en nuestros méritos. Cristo, además, intercede por nosotros a la diestra de Dios (Ro 8:34). Y el Espíritu nos ayuda desde dentro: cuando no sabemos qué pedir, «el Espíritu mismo intercede por nosotros con gemidos indecibles» (Ro 8:26). Judas llama a los creyentes a edificarse «orando en el Espíritu Santo», conservándose en el amor de Dios y esperando la misericordia de nuestro Señor Jesucristo (Jud 20-21). Tenemos dos intercesores: uno en el cielo, el Hijo, y otro en nuestro corazón, el Espíritu.',
        'Esto no quiere decir que esté prohibido dirigirse a Jesús o al Espíritu en oración. Esteban oró a Jesús al morir (Hch 7:59), y la iglesia ha cantado siempre al Espíritu Santo. Pero el modelo habitual del Nuevo Testamento es claro, y ayuda a orar con más conciencia de lo que hace cada persona por nosotros.',
        { h: 'Pentecostés' },
        'Pentecostés es un acontecimiento profundamente trinitario. Jesús mandó a los discípulos esperar «la promesa del Padre» (Hch 1:4). Ese día, Pedro explicó lo que la multitud veía y oía: Jesús, «exaltado por la diestra de Dios, y habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís» (Hch 2:33). El Padre promete, el Hijo derrama, el Espíritu viene con poder. Cada vez que un creyente es bautizado en el Espíritu Santo, el Dios trino está actuando.',
        'La tabla muestra otras prácticas: la adoración, el bautismo, la santa cena y la seguridad del creyente. En todas está presente el Dios trino. Conocerlo como Padre, Hijo y Espíritu no complica la fe: la llena de riqueza, porque no adoramos a un Dios solitario, sino a un Dios que es comunión de amor y que nos invita a participar de ella (1 Jn 1:3).',
        { ejercicio: {
          pregunta: 'Según Hechos 2:33, ¿quién derramó el Espíritu Santo en Pentecostés?',
          opciones: [
            { t: 'Jesús exaltado, que recibió del Padre la promesa del Espíritu.', ok: true, por_que: 'Es la explicación de Pedro: el Padre da la promesa y el Hijo exaltado derrama el Espíritu.' },
            { t: 'Los apóstoles, al imponer las manos sobre la multitud.', ok: false, por_que: 'En Pentecostés el Espíritu vino sobre los ciento veinte sin imposición de manos (Hechos 2:1-4).' },
            { t: 'El Espíritu se derramó a sí mismo, sin relación con el Padre y el Hijo.', ok: false, por_que: 'Pedro nombra al Padre y al Hijo como los que dan y derraman la promesa.' }
          ],
          explicacion: 'El bautismo en el Espíritu Santo es obra del Dios trino: promesa del Padre, derramada por el Hijo, cumplida en la venida del Espíritu.'
        } }
      ],
      pensar: 'Tienes acceso al Padre, por medio de Cristo, en un mismo Espíritu (Ef 2:18). ¿Cómo podría cambiar tu oración de esta semana si la vives con esa conciencia?'
    }
  ];

  window.__TRINIDAD.trinidad = trinidad;
})();
/* Dios y la Trinidad · rutas V. La doctrina en la historia y VI. Textos difíciles (ver encabezado en parte1.js) */
(() => {
  const MED = [[28, 4], [44, 42]];        // Mediterráneo oriental y occidental
  const ORIENTE = [[29.5, 22], [42.5, 40]]; // Egipto, Asia Menor y Siria
  const IMP = ['roma-117'];

  /* ---------------- V. La doctrina en la historia ---------------- */
  const historia = [
    {
      id: 'primitiva', n: 'La iglesia primitiva y la palabra «Trinidad»', ref: 'Mateo 28:19; 2 Corintios 13:14; Judas 3', fecha: [100, 250],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MED, capas: IMP, lugares: ['roma', 'cartago', 'alejandria', 'antioquia', 'efeso', 'jerusalen'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperio-romano/img/roma-catacumbas.webp', alt: 'Cristianos reunidos a la luz de lámparas de aceite en una galería subterránea de las catacumbas de Roma', pie: 'Los primeros cristianos confesaban al Padre, al Hijo y al Espíritu antes de tener fórmulas teológicas.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Testigos de los siglos II y III',
          cab: ['Fecha aprox.', 'Testigo', 'Qué dice'],
          filas: [
            ['Hacia 100', 'La Didajé (Siria)', 'Manda bautizar en el nombre del Padre, del Hijo y del Espíritu Santo'],
            ['Hacia 110', 'Ignacio de Antioquía', 'Llama a Jesucristo «nuestro Dios» y nombra juntos al Padre, al Hijo y al Espíritu'],
            ['Hacia 155', 'Justino Mártir (Roma)', 'Describe el bautismo y la oración en el nombre del Padre, del Hijo y del Espíritu'],
            ['Hacia 180', 'Teófilo de Antioquía', 'Usa por primera vez la palabra griega «tríada» para Dios'],
            ['Hacia 180', 'Ireneo de Lyon', 'Llama al Hijo y al Espíritu «las dos manos de Dios»'],
            ['Hacia 213', 'Tertuliano (Cartago)', 'Usa la palabra latina trinitas y la fórmula «una sustancia, tres personas»']
          ],
          nota: 'Fechas aproximadas. Los escritos de estos autores no son Escritura; muestran cómo entendió la iglesia lo que había recibido de los apóstoles.'
        } }
      ],
      texto: [
        'Los apóstoles no escribieron un tratado sobre la Trinidad. Escribieron cartas y evangelios donde hablaban del Padre, del Hijo y del Espíritu Santo con toda naturalidad, como se vio en la ruta IV. La iglesia que vino después recibió esa fe «que ha sido una vez dada a los santos» (Jud 3), y la confesó primero en su vida: en el bautismo, en la oración y en el culto, mucho antes de darle una definición.',
        { h: 'En el bautismo y en la oración' },
        'La Didajé, un manual de la iglesia escrito en Siria hacia el año 100, instruye bautizar «en el nombre del Padre, y del Hijo, y del Espíritu Santo», repitiendo las palabras de Jesús en Mateo 28:19. Ignacio, obispo de Antioquía, que murió como mártir en Roma hacia el 110, llama a Jesucristo «nuestro Dios» en sus cartas. Justino, un filósofo convertido que enseñó en Roma, describe hacia el 155 cómo los cristianos bautizaban y daban gracias al Padre por el nombre del Hijo y del Espíritu Santo. La tabla reúne estos testimonios.',
        { h: 'Las primeras palabras técnicas' },
        'Hacia el año 180, Teófilo de Antioquía usó por primera vez una palabra para referirse a Dios, el Verbo y la Sabiduría juntos: tríada. Unos treinta años después, en Cartago, al norte de África, Tertuliano escribió en latín contra un maestro llamado Práxeas, que enseñaba que el Padre mismo había nacido y había sufrido en la cruz. Para responderle, Tertuliano usó la palabra trinitas y una fórmula que haría historia: Dios es una sola sustancia en tres personas. Tertuliano no inventó la doctrina; buscó palabras precisas para defender lo que la iglesia ya creía frente a quien lo deformaba.',
        'Ese es el patrón de toda esta ruta. Las definiciones de la Trinidad no nacieron de la especulación, sino de la necesidad de responder a enseñanzas que alteraban el evangelio. Cada vez que alguien negaba que el Hijo fuera Dios, o que fuera distinto del Padre, la iglesia volvía a la Escritura y buscaba palabras más exactas para decir lo mismo que ella dice.',
        { ejercicio: {
          pregunta: '¿Por qué Tertuliano usó la palabra «Trinidad» y la fórmula «una sustancia, tres personas»?',
          opciones: [
            { t: 'Para introducir una enseñanza nueva que los apóstoles no conocían.', ok: false, por_que: 'Los apóstoles ya hablaban del Padre, el Hijo y el Espíritu (Mateo 28:19; 2 Corintios 13:14). Tertuliano dio nombre a lo que la iglesia ya creía.' },
            { t: 'Para responder a quien enseñaba que el Padre mismo había sufrido en la cruz.', ok: true, por_que: 'Escribió contra Práxeas, que confundía al Padre con el Hijo. Las palabras técnicas sirvieron para proteger la fe recibida.' },
            { t: 'Porque el Concilio de Nicea se lo había ordenado.', ok: false, por_que: 'Tertuliano escribió hacia el 213, más de cien años antes de Nicea (325).' }
          ],
          explicacion: 'La iglesia buscó palabras precisas para defender lo que la Escritura enseña, no para agregarle algo.'
        } }
      ],
      pensar: 'Los primeros cristianos confesaban al Padre, al Hijo y al Espíritu en el bautismo y en la oración antes de definirlo con palabras técnicas. ¿Tu fe en el Dios trino se nota más en lo que sabes o en cómo oras?'
    },
    {
      id: 'nicea', n: 'Arrio y el Concilio de Nicea', ref: 'Juan 1:1-3; Colosenses 1:16-17; Hebreos 1:3', fecha: 325,
      visual: [
        { tipo: 'imagen', titulo: 'Nicea', src: 'img/nicea.webp', alt: 'En una gran sala con columnas de mármol, decenas de obispos de túnicas oscuras sentados en bancos escuchan a un joven diácono de pie, Atanasio, que responde con un libro abierto en la mano a un presbítero alto y anciano, Arrio', pie: 'Concilio de Nicea, 325 d.C. Recreación: no hay imágenes de época del concilio.', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Hacia el 318, en Alejandría, el presbítero Arrio enseña que el Hijo fue creado.', fecha: 318,
            estado: { view: ORIENTE, capas: IMP, lugares: ['alejandria'] } },
          { t: 'La controversia se extiende por Egipto, Palestina, Siria y Asia Menor.', fecha: [320, 324],
            estado: { view: ORIENTE, capas: IMP, lugares: ['alejandria', 'cesarea', 'antioquia', 'nicomedia'] } },
          { t: 'En 325, el emperador Constantino reúne a unos trescientos obispos en Nicea.', fecha: 325,
            estado: { view: ORIENTE, capas: IMP, lugares: ['nicea', 'constantinopla', 'alejandria', 'antioquia', 'cesarea'] } }
        ] },
        { tipo: 'imagen', titulo: 'Icono', src: 'img/icono-nicea.webp', alt: 'Icono ortodoxo de fondo dorado: el emperador Constantino, con corona y cetro, en el centro entre cuatro obispos con aureola y libros de los evangelios; delante sostienen un gran pliego con el texto griego del credo', pie: 'Icono ortodoxo del Concilio de Nicea, de autor desconocido. El pliego muestra en griego el comienzo del credo: «Creemos en un solo Dios, Padre todopoderoso…»; en la quinta línea se lee homoousion, «de la misma sustancia». Como otros iconos, mezcla épocas: el texto es el del credo ampliado en 381.', origen: 'foto', licencia: 'Autor desconocido; reproducción fiel de una obra en dominio público (PD-Art), vía Wikimedia Commons', completa: true }
      ],
      texto: [
        'Hacia el año 318, en Alejandría de Egipto, un presbítero llamado Arrio comenzó a enseñar algo que parecía defender el monoteísmo: solo el Padre es Dios en sentido pleno. El Hijo, decía, es la primera y más excelente de las criaturas, hecho por el Padre antes de todas las demás, y por medio de él fue creado todo lo demás. Su frase más conocida era: «hubo un tiempo en que no existía». Arrio usaba textos como «el primogénito de toda creación» (Col 1:15) y Proverbios 8:22, donde la Sabiduría dice «Jehová me poseía en el principio». La ruta VI vuelve sobre esos textos.',
        { h: 'Lo que estaba en juego' },
        'Alejandro, obispo de Alejandría, y su joven diácono Atanasio vieron el peligro. Si el Hijo es una criatura, entonces los cristianos adoran a una criatura, lo cual es idolatría. Y si el Hijo no es Dios, no puede revelarnos a Dios de verdad ni salvarnos: solo Dios puede vencer al pecado y a la muerte y darnos vida eterna. Atanasio lo resumiría así: Dios se hizo hombre para que el hombre pudiera llegar a ser partícipe de la vida de Dios. Juan había dicho que todas las cosas fueron hechas por el Verbo, y sin Él nada de lo hecho fue hecho (Jn 1:3): el Verbo no puede estar entre las cosas hechas.',
        { h: 'El concilio' },
        'La disputa dividió a las iglesias del Oriente, y en 325 el emperador Constantino convocó un concilio en Nicea, en Asia Menor, cerca de su residencia en Nicomedia. Asistieron unos trescientos obispos, muchos de los cuales llevaban en el cuerpo las marcas de las persecuciones recientes. El concilio rechazó la enseñanza de Arrio y redactó un credo que confiesa al Hijo como «Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no hecho, de la misma sustancia que el Padre». La expresión clave, en griego homoousios, «de la misma sustancia», no está en la Biblia, pero se eligió precisamente porque los arrianos podían aceptar cualquier frase bíblica dándole su propio sentido; esta no.',
        'Nicea no terminó con la controversia: durante cincuenta años más, los arrianos tuvieron el favor de varios emperadores, y Atanasio fue desterrado cinco veces. Se llegó a decir «Atanasio contra el mundo». Pero la fe de Nicea se impuso porque era la fe de la Escritura.',
        { ejercicio: {
          pregunta: '¿Por qué era tan grave la enseñanza de Arrio?',
          opciones: [
            { t: 'Porque usaba palabras griegas en vez de hebreas.', ok: false, por_que: 'El Nuevo Testamento mismo está en griego. El problema era lo que afirmaba, no el idioma.' },
            { t: 'Porque, si el Hijo es una criatura, adorarlo sería idolatría y no podría salvarnos.', ok: true, por_que: 'Era el argumento central de Atanasio: solo Dios puede revelar a Dios y salvar al ser humano.' },
            { t: 'Porque negaba que Jesús hubiera existido en la historia.', ok: false, por_que: 'Arrio aceptaba la vida, muerte y resurrección de Jesús; negaba que el Hijo fuera eterno e igual al Padre.' }
          ],
          explicacion: 'La divinidad del Hijo no es un detalle técnico: de ella dependen la adoración cristiana y la salvación.'
        } }
      ],
      pensar: 'Atanasio defendió la verdad aunque fue desterrado cinco veces. ¿Qué verdad bíblica estarías dispuesto a sostener aunque fueras minoría?'
    },
    {
      id: 'credos', n: 'Constantinopla y los credos', ref: 'Juan 15:26; Hechos 5:3-4; 2 Corintios 3:17-18', fecha: 381,
      visual: [
        { tipo: 'tabla', titulo: 'El Credo', tabla: {
          titulo: 'Credo niceno-constantinopolitano (381)',
          cab: ['Sobre', 'Confesión'],
          filas: [
            ['El Padre', 'Creemos en un solo Dios, Padre todopoderoso, creador del cielo y de la tierra, de todo lo visible y lo invisible.'],
            ['El Hijo', 'Y en un solo Señor, Jesucristo, Hijo unigénito de Dios, nacido del Padre antes de todos los siglos: Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no hecho, de la misma sustancia que el Padre, por quien todo fue hecho;'],
            ['Su obra', 'que por nosotros y por nuestra salvación bajó del cielo, se encarnó por obra del Espíritu Santo y de la virgen María, y se hizo hombre; fue crucificado por nosotros bajo Poncio Pilato, padeció y fue sepultado, resucitó al tercer día según las Escrituras, subió al cielo, está sentado a la derecha del Padre, y de nuevo vendrá con gloria a juzgar a vivos y muertos, y su reino no tendrá fin.'],
            ['El Espíritu', 'Y en el Espíritu Santo, Señor y dador de vida, que procede del Padre, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas.'],
            ['La iglesia', 'Y en una iglesia santa, universal y apostólica. Confesamos un solo bautismo para el perdón de los pecados. Esperamos la resurrección de los muertos y la vida del mundo venidero. Amén.']
          ],
          nota: 'Traducción del recurso. «Universal» traduce el griego catholica. Las iglesias occidentales agregaron después «y del Hijo» en la línea del Espíritu.'
        } },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: IMP, lugares: ['constantinopla', 'nicea', 'cesarea-capadocia', 'alejandria', 'antioquia'] } }
      ],
      texto: [
        'Después de Nicea, la discusión se trasladó al Espíritu Santo. Algunos aceptaban que el Hijo era Dios, pero enseñaban que el Espíritu era una criatura al servicio del Hijo, o una simple fuerza. Los llamaron pneumatómacos, «los que combaten contra el Espíritu».',
        { h: 'Los capadocios' },
        'Tres pastores de Capadocia, en el centro de Asia Menor, dieron la respuesta: Basilio de Cesarea, su hermano Gregorio de Nisa y su amigo Gregorio Nacianceno. Basilio escribió un libro sobre el Espíritu Santo mostrando, con la Escritura, que el Espíritu recibe la misma gloria que el Padre y el Hijo. Recordaba, por ejemplo, que mentir al Espíritu es mentir a Dios (Hch 5:3-4) y que el bautismo se hace en un solo nombre que incluye al Espíritu (Mt 28:19). Los capadocios precisaron además el vocabulario: en Dios hay una sola esencia (ousía) y tres personas (hipóstasis).',
        { h: 'El credo de 381' },
        'En 381, un concilio reunido en Constantinopla confirmó la fe de Nicea y amplió su credo, especialmente en lo que dice del Espíritu: «Señor y dador de vida, que procede del Padre, que con el Padre y el Hijo recibe una misma adoración y gloria». La tabla muestra el credo completo. Es la confesión de fe más compartida de la historia: la recitan católicos, ortodoxos y muchas iglesias evangélicas, y resume lo que cree cualquier cristiano trinitario. El Concilio de Calcedonia, en 451, explicaría después cómo el Hijo es a la vez verdadero Dios y verdadero hombre en una sola persona, tema que se estudia en el recurso sobre Cristo.',
        'Más tarde surgió en Occidente el llamado Credo de Atanasio, aunque no lo escribió él, que dice: «el Padre es Dios, el Hijo es Dios, el Espíritu Santo es Dios; y sin embargo no son tres dioses, sino un solo Dios».',
        { posturas: {
          titulo: '¿Procede el Espíritu del Padre, o del Padre y del Hijo?',
          a: { n: 'Del Padre (Oriente)', t: 'Las iglesias ortodoxas conservan el credo de 381 como fue escrito: el Espíritu procede del Padre, con las palabras de Juan 15:26. Agregar algo a un credo común, dicen, rompe la unidad, y decir que procede también del Hijo arriesga confundir al Hijo con el Padre.' },
          b: { n: 'Del Padre y del Hijo (Occidente)', t: 'En Occidente se agregó «y del Hijo» (en latín filioque), aceptado en España en el Concilio de Toledo de 589 y después en Roma. Se apoya en que el Espíritu es llamado «el Espíritu de su Hijo» (Gá 4:6) y que el Hijo lo envía (Jn 15:26; 16:7). Las iglesias protestantes heredaron esta forma.' },
          c: 'La diferencia fue una de las causas de la separación entre Oriente y Occidente en 1054, pero ambas partes confiesan lo esencial: el Espíritu Santo es Dios, una persona distinta, eterna e igual al Padre y al Hijo. Este recurso sigue la forma occidental, que es la de las iglesias evangélicas, y reconoce que la Escritura no resuelve todos los detalles de la relación eterna entre las personas.'
        } },
        { ejercicio: {
          pregunta: '¿Qué agregó el credo de 381 al de Nicea?',
          opciones: [
            { t: 'Una confesión más completa del Espíritu Santo como Señor, dador de vida y digno de la misma adoración que el Padre y el Hijo.', ok: true, por_que: 'Frente a quienes negaban la divinidad del Espíritu, el concilio confesó que con el Padre y el Hijo recibe una misma adoración y gloria.' },
            { t: 'La doctrina de que Jesús tiene dos naturalezas en una persona.', ok: false, por_que: 'Eso lo definió el Concilio de Calcedonia, en 451.' },
            { t: 'La palabra «Trinidad», que nunca se había usado antes.', ok: false, por_que: 'Tertuliano ya la usaba hacia el año 213.' }
          ],
          explicacion: 'Nicea defendió la divinidad del Hijo; Constantinopla, la del Espíritu. Así quedó formulada la fe trinitaria.'
        } }
      ],
      pensar: 'El credo dice que el Espíritu «recibe una misma adoración y gloria» con el Padre y el Hijo. ¿Ocupa el Espíritu Santo ese lugar en tu adoración, o lo piensas solo como una ayuda?'
    },
    {
      id: 'errores', n: 'Errores que vuelven', ref: 'Mateo 3:16-17; 28:19; Hechos 2:38; Juan 1:1; 1 Juan 4:1-3', fecha: [1913, 1916],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-errores.svg', alt: 'Tres caminos que se apartan de la doctrina de la Trinidad: el modalismo niega que las personas sean distintas; el arrianismo niega que el Hijo y el Espíritu sean Dios; el triteísmo niega que Dios sea uno. Cada uno con su forma antigua y sus formas actuales', pie: 'Tres maneras de perder el equilibrio: cada error niega una de las verdades que la Trinidad sostiene a la vez.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los errores antiguos y sus formas actuales',
          cab: ['Error', 'Qué enseña', 'Forma antigua', 'Grupos que lo enseñan hoy'],
          filas: [
            ['Modalismo o unicitarismo', 'Un solo Dios que se manifiesta como Padre, como Hijo y como Espíritu; Jesús es el Padre', 'Noeto, Práxeas y Sabelio (siglos II y III)', 'Iglesias pentecostales unicitarias o «Solo Jesús»: Iglesia Pentecostal Unida, Iglesia Apostólica de la Fe en Cristo Jesús y otras'],
            ['Arrianismo', 'Solo el Padre es Dios; el Hijo es la primera criatura y el Espíritu es una fuerza', 'Arrio (siglo IV)', 'Testigos de Jehová'],
            ['Triteísmo', 'Padre, Hijo y Espíritu son tres seres o tres dioses distintos', 'Algunos maestros del siglo VI', 'La Iglesia de Jesucristo de los Santos de los Últimos Días (mormones)'],
            ['Adopcionismo', 'Jesús fue un hombre al que Dios adoptó como Hijo en el bautismo', 'Teódoto, Pablo de Samosata (siglos II y III)', 'Algunos grupos unitarios y corrientes liberales']
          ],
          nota: 'Se describe la enseñanza oficial de cada grupo. Muchos de sus miembros son personas sinceras que aman a Dios: la crítica es a la doctrina, no a las personas.'
        } }
      ],
      texto: [
        'Las herejías antiguas no desaparecieron: vuelven una y otra vez con otros nombres. Conocerlas ayuda a reconocerlas cuando alguien toca la puerta con una revista o cuando un amigo invita a otra iglesia. El esquema muestra que hay tres errores principales, y cada uno nace de negar una de las verdades que la Trinidad sostiene al mismo tiempo.',
        { h: 'Modalismo: el error más cercano' },
        'El modalismo enseña que hay un solo Dios y una sola persona, que se manifiesta de distintas maneras: como Padre en la creación, como Hijo en la encarnación y como Espíritu en la iglesia. En el siglo III lo enseñó Sabelio. Su forma actual es el unicitarismo, que nació dentro del movimiento pentecostal. En 1913, en un campamento en Los Ángeles, se predicó que el bautismo debía hacerse solo «en el nombre de Jesús». De allí surgió la enseñanza de que Jesús es el Padre, el Hijo y el Espíritu. En 1916, las principales asambleas pentecostales de Estados Unidos adoptaron declaraciones de fe trinitarias, y los grupos unicitarios se organizaron aparte. Hoy son numerosos en América Latina.',
        'Los unicitarios comparten con los demás pentecostales el amor por la Palabra, la oración y el bautismo en el Espíritu. Pero su doctrina choca con los textos en que el Padre y el Hijo aparecen como dos, hablándose y amándose: el bautismo de Jesús (Mt 3:16-17), la oración de Juan 17, el Hijo que intercede ante el Padre (Ro 8:34). Un Dios de una sola persona no puede enviar a su Hijo ni amarlo desde antes de la fundación del mundo (Jn 17:24).',
        { posturas: {
          titulo: '¿«En el nombre de Jesús» o «en el nombre del Padre, y del Hijo, y del Espíritu Santo»?',
          a: { n: 'Lectura unicitaria', t: 'Hechos registra bautismos «en el nombre de Jesucristo» (Hch 2:38; 10:48; 19:5). Como Mateo 28:19 habla de «el nombre», en singular, y ese nombre sería Jesús, solo es válido el bautismo que pronuncia el nombre de Jesús. Los apóstoles habrían entendido así el mandato.' },
          b: { n: 'Lectura trinitaria', t: 'Mateo 28:19 es el mandato explícito de Jesús. En Hechos, «en el nombre de Jesucristo» indica bajo qué autoridad y en qué fe se bautiza, y distingue el bautismo cristiano del de Juan (Hch 19:3-5); no se presenta como una fórmula para repetir. La Didajé, hacia el año 100, usa las dos expresiones y manda bautizar con la fórmula de Mateo.' },
          c: 'Este recurso sigue la lectura trinitaria. El bautismo es en el único nombre que comparten el Padre, el Hijo y el Espíritu, y se hace por la autoridad de Jesucristo y en la fe en Él. Lo decisivo no es solo la fórmula, sino la doctrina: el unicitarismo niega que el Padre y el Hijo sean personas distintas, y en eso se aparta de la fe que la iglesia ha confesado desde los apóstoles.'
        } },
        { h: 'Arrianismo y triteísmo' },
        'Los Testigos de Jehová repiten el arrianismo: enseñan que Jesús es el arcángel Miguel, la primera criatura de Dios, y que el Espíritu Santo es la fuerza activa de Dios. Su traducción de Juan 1:1 dice que el Verbo era «un dios», tema de la ruta VI. Los mormones, en cambio, enseñan que el Padre, el Hijo y el Espíritu son tres seres distintos, y que el Padre tiene un cuerpo de carne y huesos; es una forma de triteísmo que contradice Juan 4:24 y el Shemá. Juan llama a probar los espíritus (1 Jn 4:1): la pregunta decisiva sigue siendo quién es Jesús.',
        { ejercicio: {
          pregunta: '¿Qué texto muestra con más claridad que el Padre y el Hijo no son la misma persona?',
          opciones: [
            { t: 'El que dice que Dios es uno.', ok: false, por_que: 'El Shemá afirma la unidad de Dios, que la Trinidad también confiesa. No distingue a las personas.' },
            { t: 'El bautismo de Jesús, donde el Hijo está en el agua, el Espíritu desciende y el Padre habla desde el cielo.', ok: true, por_que: 'Mateo 3:16-17 muestra a los tres a la vez, actuando de manera distinta. Un solo Dios de una sola persona no puede estar en el agua y hablar desde el cielo al mismo tiempo.' },
            { t: 'El que dice que el Verbo se hizo carne.', ok: false, por_que: 'Juan 1:14 afirma la encarnación. Juan 1:1 sí distingue al Verbo de Dios, pero el bautismo lo muestra en una escena.' }
          ],
          explicacion: 'El modalismo no puede explicar las escenas donde el Padre y el Hijo se hablan, se aman y actúan juntos.'
        } },
        { ejercicio: {
          pregunta: 'Alguien enseña que Jesús es una criatura, el primero de los ángeles. ¿Qué error antiguo repite?',
          opciones: [
            { t: 'El modalismo.', ok: false, por_que: 'El modalismo exalta a Jesús hasta identificarlo con el Padre. Este error lo rebaja a criatura.' },
            { t: 'El triteísmo.', ok: false, por_que: 'El triteísmo hace de los tres, tres dioses. Este error niega que el Hijo sea Dios.' },
            { t: 'El arrianismo.', ok: true, por_que: 'Arrio enseñaba que el Hijo fue la primera criatura. Hebreos 1:6 manda que los ángeles adoren al Hijo: Él no es uno de ellos.' }
          ],
          explicacion: 'Cada error niega una verdad: el modalismo, la distinción; el arrianismo, la divinidad del Hijo; el triteísmo, la unidad de Dios.'
        } }
      ],
      pensar: 'Juan dice que hay que probar los espíritus (1 Jn 4:1). Si alguien te visita con una enseñanza sobre Jesús, ¿qué preguntas le harías a partir de lo que has estudiado?'
    },
    {
      id: '1-juan-5-7', n: '1 Juan 5:7 y la Trinidad', ref: '1 Juan 5:6-9; Mateo 28:19; 2 Corintios 13:14', fecha: 1522,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Este es Jesucristo, que vino mediante agua y sangre; no mediante agua solamente, sino mediante agua y sangre. Y el Espíritu es el que da testimonio; porque el Espíritu es la verdad. Porque tres son los que dan testimonio en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno. Y tres son los que dan testimonio en la tierra: el Espíritu, el agua y la sangre; y estos tres concuerdan. Si recibimos el testimonio de los hombres, mayor es el testimonio de Dios; porque este es el testimonio con que Dios ha testificado acerca de su Hijo.', ref: '1 Juan 5:6-9' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La Trinidad sin 1 Juan 5:7',
          cab: ['Verdad', 'Pasajes que todos los manuscritos comparten'],
          filas: [
            ['Dios es uno', 'Dt 6:4; Is 45:5; 1 Co 8:4-6; Stg 2:19'],
            ['El Hijo es Dios', 'Jn 1:1-3; 20:28; Fil 2:6; Col 2:9; He 1:8'],
            ['El Espíritu es Dios', 'Hch 5:3-4; 1 Co 2:10-11; 3:16'],
            ['Los tres son distintos', 'Mt 3:16-17; Jn 14:16-17; 15:26; 17:5'],
            ['Los tres juntos', 'Mt 28:19; 1 Co 12:4-6; 2 Co 13:14; Ef 4:4-6; 1 P 1:2']
          ]
        } }
      ],
      texto: [
        'Durante siglos, muchos cristianos de habla hispana citaron 1 Juan 5:7 como el texto más claro sobre la Trinidad: «Porque tres son los que dan testimonio en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno» (1 Jn 5:7). Pero este versículo tiene una historia particular, que conviene conocer para no apoyar la doctrina en un terreno discutido.',
        { h: 'Un pasaje discutido' },
        'Las palabras que mencionan al Padre, el Verbo y el Espíritu «en el cielo», y los tres que dan testimonio «en la tierra», no aparecen en ningún manuscrito griego antiguo de 1 Juan ni en las versiones antiguas, salvo en parte de la tradición latina. Surgieron en manuscritos latinos desde el siglo IV, probablemente como una nota que explicaba el texto, y pasaron al texto de la Vulgata. Erasmo las incluyó en la tercera edición de su Nuevo Testamento griego, en 1522, y de allí llegaron al Textus Receptus y a la Reina-Valera. La RV 1960 las conserva. El recurso De la Biblia a nosotros explica esta historia en detalle.',
        { ir: { t: 'Ver «Pasajes discutidos» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/7' } },
        { h: 'La doctrina no depende de él' },
        'Lo importante para este recurso es que la Trinidad no depende de 1 Juan 5:7. Como muestra la tabla, cada una de las verdades que la componen se apoya en pasajes que todos los manuscritos comparten. El sitio sigue un criterio: ninguna doctrina se enseña desde un pasaje discutido. Por eso, en todo este recurso, 1 Juan 5:7 no se ha usado como prueba.',
        'Los primeros grandes defensores de la Trinidad, como Atanasio y los capadocios, nunca citaron este versículo, porque no estaba en sus Biblias griegas. Aun así, defendieron la doctrina con fuerza a partir de Mateo 28:19, Juan 1, Juan 14 a 17, las cartas de Pablo y Hebreos. Si alguien dice que la Trinidad se inventó a partir de un versículo agregado, la historia lo desmiente: la doctrina se formuló siglos antes de que ese versículo llegara a las Biblias impresas.',
        'Saber esto protege al creyente de dos peligros. Uno, apoyar su fe en un texto que alguien le puede mostrar como discutido, y sentir que todo se derrumba. El otro, pensar que, como ese texto es discutido, la doctrina también lo es. La Trinidad está en toda la Escritura, no en un versículo.',
        { ejercicio: {
          pregunta: 'Un amigo te dice: «La Trinidad se basa en 1 Juan 5:7, y ese versículo fue agregado». ¿Qué le responderías?',
          opciones: [
            { t: 'Que 1 Juan 5:7 está en todos los manuscritos antiguos.', ok: false, por_que: 'No es así: falta en los manuscritos griegos antiguos. Negarlo sería faltar a la verdad.' },
            { t: 'Que la doctrina se apoya en muchos pasajes que todos los manuscritos comparten, y se formuló siglos antes de que ese versículo llegara a las Biblias impresas.', ok: true, por_que: 'Mateo 28:19, Juan 1:1, Hechos 5:3-4, 2 Corintios 13:14 y muchos otros sostienen la doctrina; Nicea es del año 325, y Erasmo publicó su edición en 1522.' },
            { t: 'Que, si el versículo fue agregado, entonces la Trinidad también es dudosa.', ok: false, por_que: 'La doctrina no depende de ese versículo, como muestra la tabla de esta estación.' }
          ],
          explicacion: 'Honestidad sobre el texto y firmeza en la doctrina van juntas: la Trinidad se enseña desde pasajes indiscutidos.'
        } }
      ],
      pensar: 'Una fe bien fundada no teme examinar la historia del texto (Hch 17:11). ¿Hay alguna convicción tuya que se apoya en un solo versículo y que convendría estudiar más a fondo?'
    }
  ];

  /* ---------------- VI. Textos difíciles ---------------- */
  const textos = [
    {
      id: 'mayor', n: '«El Padre mayor es que yo»', ref: 'Juan 14:28; Marcos 13:32; Filipenses 2:5-11; Juan 5:18',
      visual: [
        { tipo: 'cita', titulo: 'Juan 14', texto: 'Habéis oído que yo os he dicho: Voy, y vengo a vosotros. Si me amarais, os habríais regocijado, porque he dicho que voy al Padre; porque el Padre mayor es que yo.', ref: 'Juan 14:28' },
        { tipo: 'cita', titulo: 'Filipenses 2', texto: 'Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús, el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres; y estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz.', ref: 'Filipenses 2:5-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Leer los Evangelios con dos columnas',
          cab: ['Como Dios, el Hijo…', 'Como hombre, el Hijo…'],
          filas: [
            ['Existía antes de Abraham (Jn 8:58)', 'Nació de mujer (Gá 4:4)'],
            ['Es igual al Padre (Jn 5:18; Fil 2:6)', 'Dice que el Padre es mayor (Jn 14:28)'],
            ['Sabía lo que había en el hombre (Jn 2:25)', 'Crecía en sabiduría (Lc 2:52); no sabía el día (Mr 13:32)'],
            ['Calmó la tempestad (Mr 4:39)', 'Dormía en la barca, cansado (Mr 4:38)'],
            ['Resucitó a Lázaro (Jn 11:43)', 'Lloró ante su tumba (Jn 11:35)']
          ],
          nota: 'No son dos personas, sino una persona, el Hijo eterno, que tiene dos naturalezas.'
        } }
      ],
      texto: [
        'Esta ruta estudia los textos que se usan con más frecuencia para negar la Trinidad, sea la divinidad del Hijo o su distinción del Padre. No se trata de ganar discusiones, sino de leer bien. Cada estación aplica el método de interpretación: el texto en su contexto, el resto de la Escritura y lo que dice el autor en otras partes.',
        'Jesús dijo: «el Padre mayor es que yo» (Jn 14:28). Los arrianos de ayer y los Testigos de Jehová hoy concluyen que, si el Padre es mayor, el Hijo no puede ser Dios igual a Él. Pero el mismo evangelio de Juan dice que los judíos querían matar a Jesús porque llamaba a Dios su propio Padre, «haciéndose igual a Dios» (Jn 5:18), y comienza diciendo que el Verbo era Dios (Jn 1:1). Juan no se contradice. ¿Cómo se entienden juntos?',
        { h: 'Mayor en posición, no en naturaleza' },
        'Pablo lo explica en Filipenses 2. Cristo, «siendo en forma de Dios», no consideró su igualdad con Dios como algo a qué aferrarse, sino que «se despojó a sí mismo, tomando forma de siervo» y se humilló hasta la muerte de cruz (Fil 2:6-8). Al hacerse hombre, el Hijo no dejó de ser Dios, pero tomó voluntariamente una posición de siervo. En esa condición, el Padre era mayor que Él: en posición, no en naturaleza. Un hijo que trabaja al servicio de su padre en la empresa familiar está bajo su autoridad, pero no es menos humano que él. Fíjate además en el contexto: Jesús dice que los discípulos deberían alegrarse porque Él vuelve al Padre, es decir, a la gloria que tenía antes (Jn 17:5).',
        { h: '«Ni el Hijo»' },
        'Algo parecido ocurre con Marcos 13:32, donde Jesús dice que del día y la hora de su venida «nadie sabe, ni aun los ángeles que están en el cielo, ni el Hijo, sino el Padre». El Hijo eterno, al hacerse hombre, aceptó vivir con un conocimiento humano: Lucas dice que crecía en sabiduría (Lc 2:52). La tabla muestra cómo los Evangelios presentan a Jesús en dos columnas: hace lo que solo Dios hace, y vive lo que vive un hombre. Ambas cosas son verdad de la misma persona.',
        { ejercicio: {
          pregunta: '¿Cómo se entiende mejor «el Padre mayor es que yo» junto con Juan 5:18 y Filipenses 2:6?',
          opciones: [
            { t: 'El Hijo es una criatura inferior al Padre.', ok: false, por_que: 'Juan 5:18 y Filipenses 2:6 dicen que el Hijo es igual a Dios. Juan no se contradice.' },
            { t: 'El Hijo, igual al Padre en naturaleza, tomó al encarnarse una posición de siervo en la que el Padre es mayor.', ok: true, por_que: 'Es la lectura que une los textos: mayor en posición durante su misión, no en naturaleza.' },
            { t: 'Jesús hablaba de sí mismo como Padre en otra manifestación.', ok: false, por_que: 'Jesús distingue claramente: «voy al Padre». No se puede ir a uno mismo.' }
          ],
          explicacion: 'Cuando un texto parece contradecir a otro del mismo autor, la lectura correcta es la que explica los dos.'
        } }
      ],
      pensar: 'El Hijo, siendo igual a Dios, tomó forma de siervo (Fil 2:7). ¿Qué te enseña su ejemplo sobre servir a otros sin sentir que pierdes tu valor?'
    },
    {
      id: 'uno-somos', n: '«Yo y el Padre uno somos»', ref: 'Juan 10:27-33; 17:11, 21-22; Deuteronomio 6:4',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mis ovejas oyen mi voz, y yo las conozco, y me siguen, y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano. Mi Padre que me las dio, es mayor que todos, y nadie las puede arrebatar de la mano de mi Padre. Yo y el Padre uno somos. Entonces los judíos volvieron a tomar piedras para apedrearle. Jesús les respondió: Muchas buenas obras os he mostrado de mi Padre; ¿por cuál de ellas me apedreáis? Le respondieron los judíos, diciendo: Por buena obra no te apedreamos, sino por la blasfemia; porque tú, siendo hombre, te haces Dios.', ref: 'Juan 10:27-33' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Un mismo versículo, tres lecturas',
          cab: ['Lectura', 'Qué entiende', 'Problema'],
          filas: [
            ['Unicitaria', 'Jesús y el Padre son la misma persona', '«Somos» está en plural: son dos que son uno'],
            ['Arriana', 'Solo unidad de propósito, como entre los creyentes', 'Los judíos entendieron que se hacía Dios (Jn 10:33), y Jesús no los corrigió'],
            ['Trinitaria', 'Dos personas distintas con un mismo ser y poder', 'Explica el plural, el contexto y la reacción de los oyentes']
          ]
        } }
      ],
      texto: [
        'Juan 10:30 se usa desde dos lados opuestos. Los unicitarios dicen que demuestra que Jesús y el Padre son la misma persona. Los Testigos de Jehová dicen que solo significa que estaban de acuerdo. El texto, leído con cuidado, no permite ninguna de las dos lecturas.',
        { h: '«Somos»' },
        'Jesús no dice «Yo soy el Padre», sino «Yo y el Padre uno somos» (Jn 10:30). En griego, el verbo está en plural, esmen, «somos»: son dos los que hablan como sujeto. Además, la palabra «uno», hen, está en neutro, no en masculino. Si Jesús hubiera querido decir que eran una sola persona, habría usado el masculino heis, «uno solo». El neutro indica una unidad de ser, de cosa, no de persona. Por eso el versículo descarta el modalismo: son dos, el Hijo y el Padre, y son uno.',
        { h: 'Lo que entendieron los oyentes' },
        'Pero ¿se trata solo de una unidad de propósito? El contexto responde. Jesús acaba de decir que nadie puede arrebatar sus ovejas de su mano, ni de la mano de su Padre (Jn 10:28-29): las manos del Hijo y del Padre son igualmente poderosas para guardar. Y los oyentes reaccionaron tomando piedras para apedrearlo. Cuando Jesús les preguntó por qué, respondieron: «por la blasfemia; porque tú, siendo hombre, te haces Dios» (Jn 10:33). Ningún judío habría apedreado a alguien por decir que estaba de acuerdo con Dios. Entendieron que Jesús reclamaba igualdad con Dios, y Jesús no los corrigió: siguió defendiendo que era el Hijo de Dios, santificado y enviado por el Padre (Jn 10:36).',
        { h: '¿Y Juan 17?' },
        'Los Testigos de Jehová señalan que Jesús pidió que sus discípulos fueran uno «así como nosotros» (Jn 17:11, 22), y nadie diría que los discípulos son un solo ser. Es cierto: en Juan 17, Jesús pide para la iglesia una unidad que refleje la de la Trinidad, como un espejo refleja una luz sin ser la luz. La unidad de los creyentes es de amor y de propósito; la del Padre y el Hijo incluye eso, pero es más profunda: es la de un mismo ser. Juan 10 lo muestra con la reacción de los oyentes; Juan 17, con la gloria que el Hijo tenía con el Padre antes que el mundo fuese (Jn 17:5).',
        { ejercicio: {
          pregunta: '¿Qué indica el plural «somos» en Juan 10:30?',
          opciones: [
            { t: 'Que Jesús y el Padre son una sola persona con dos nombres.', ok: false, por_que: 'Una sola persona no dice «somos». El plural muestra dos sujetos.' },
            { t: 'Que hay dos personas, el Hijo y el Padre, que son uno.', ok: true, por_que: 'El verbo en plural y el «uno» en neutro señalan dos personas con un mismo ser.' },
            { t: 'Que Jesús hablaba en nombre de los discípulos.', ok: false, por_que: 'Jesús dice «Yo y el Padre»: los dos sujetos son Él y el Padre.' }
          ],
          explicacion: 'Juan 10:30 descarta tanto que sean la misma persona como que su unidad sea solo de acuerdo.'
        } },
        { ejercicio: {
          pregunta: 'Según Juan 10:33, ¿por qué querían apedrear a Jesús?',
          opciones: [
            { t: 'Porque había sanado en día de reposo.', ok: false, por_que: 'Eso ocurrió en Juan 5 y 9. Aquí los oyentes dan otra razón explícita.' },
            { t: 'Porque siendo hombre se hacía Dios.', ok: true, por_que: 'Es la respuesta de los mismos oyentes. Entendieron que Jesús reclamaba igualdad con Dios.' },
            { t: 'Porque decía estar de acuerdo con Dios.', ok: false, por_que: 'Nadie era apedreado por estar de acuerdo con Dios. El texto habla de blasfemia.' }
          ],
          explicacion: 'La reacción de los oyentes es la mejor pista de lo que Jesús quiso decir.'
        } }
      ],
      pensar: 'Jesús dijo que nadie puede arrebatar sus ovejas de su mano ni de la del Padre (Jn 10:28-29). ¿Qué temor tuyo responde esa promesa?'
    },
    {
      id: 'padre-eterno', n: '«Padre Eterno» en Isaías 9:6', ref: 'Isaías 9:6-7; 22:20-21; Juan 14:9; Hebreos 2:13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz. Lo dilatado de su imperio y la paz no tendrán límite, sobre el trono de David y sobre su reino, disponiéndolo y confirmándolo en juicio y en justicia desde ahora y para siempre. El celo de Jehová de los ejércitos hará esto.', ref: 'Isaías 9:6-7' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los cuatro nombres del niño',
          cab: ['Nombre', 'Qué dice del Mesías'],
          filas: [
            ['Admirable Consejero', 'Su sabiduría es maravillosa; gobernará con sabiduría perfecta (Is 11:2)'],
            ['Dios Fuerte', 'Es Dios: el mismo título se da a Jehová en Isaías 10:21'],
            ['Padre Eterno', 'Cuida para siempre de su pueblo como un padre (compara Is 22:21)'],
            ['Príncipe de Paz', 'Su reino traerá una paz sin fin (Is 9:7)']
          ],
          nota: 'Cada nombre describe cómo será el Rey prometido, no a quién se identifica dentro de la Trinidad.'
        } }
      ],
      texto: [
        'Isaías anuncia el nacimiento de un niño, el Rey descendiente de David: «se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz» (Is 9:6). Los unicitarios ven aquí una prueba de que Jesús es el Padre: si se le llama Padre Eterno, el Hijo y el Padre serían la misma persona.',
        { posturas: {
          titulo: '¿Qué significa que el Mesías se llame «Padre Eterno»?',
          a: { n: 'Lectura unicitaria', t: 'El niño que nace, Jesús, es llamado Padre Eterno. Por lo tanto, Jesús es el Padre, y Padre e Hijo son dos nombres o manifestaciones de la misma persona.' },
          b: { n: 'Lectura trinitaria', t: 'El título describe la relación del Mesías con su pueblo: como un padre, lo cuidará, lo protegerá y gobernará para siempre. No dice que sea la primera persona de la Trinidad, de la cual el Nuevo Testamento lo distingue siempre.' },
          c: 'Este recurso sigue la lectura trinitaria. En hebreo, «padre de» se usaba para describir a alguien por lo que hace o provee, y en Isaías 22:21 Dios dice que Eliaquim será «padre al morador de Jerusalén», es decir, su protector. El nombre muestra que el Mesías gobernará con un cuidado paternal y eterno. Además, el mismo versículo lo llama «hijo nos es dado» (Is 9:6): es el Hijo. Y el Nuevo Testamento, que cita varias veces este pasaje de Isaías (Mt 4:15-16; Lc 1:32-33, 79), nunca llama a Jesús «el Padre», sino que lo presenta orando al Padre, enviado por Él y volviendo a Él.'
        } },
        { h: 'Leer un nombre hebreo' },
        'Los nombres del niño en Isaías 9:6 forman un retrato del Rey. Es Admirable Consejero, porque su sabiduría será perfecta. Es Dios Fuerte, título que Isaías aplica a Jehová mismo pocos versículos después (Is 10:21): aquí está una de las afirmaciones más claras del Antiguo Testamento de que el Mesías es Dios. Es Padre Eterno, porque cuidará de su pueblo como un padre, y su reino no tendrá fin. Y es Príncipe de Paz, porque su gobierno traerá la paz definitiva. La tabla los resume.',
        'Es verdad que hay una relación muy estrecha entre el Hijo y el Padre: Jesús dijo «El que me ha visto a mí, ha visto al Padre» (Jn 14:9), porque es la imagen perfecta del Padre. Pero en el mismo pasaje dice: «yo soy en el Padre, y el Padre en mí» (Jn 14:10). Para estar uno en el otro, tienen que ser dos. Así, Isaías 9:6, lejos de negar la Trinidad, afirma algo fundamental para ella: que el niño nacido en Belén es el Dios Fuerte.',
        { ejercicio: {
          pregunta: '¿Qué afirma con más claridad Isaías 9:6 sobre el Mesías?',
          opciones: [
            { t: 'Que es el Padre, la primera persona de la Trinidad.', ok: false, por_que: 'El mismo versículo lo llama «hijo nos es dado». El título Padre Eterno describe su cuidado eterno por su pueblo.' },
            { t: 'Que es Dios, pues lo llama Dios Fuerte, el mismo título que Isaías da a Jehová.', ok: true, por_que: 'Isaías 10:21 usa el mismo título para Dios. El niño que nace es Dios hecho hombre.' },
            { t: 'Que será solo un rey humano muy sabio.', ok: false, por_que: 'Ningún rey humano podría llamarse Dios Fuerte ni tener un reino sin fin.' }
          ],
          explicacion: 'Isaías 9:6 es un gran texto sobre la divinidad del Mesías, no una prueba de que el Hijo sea el Padre.'
        } }
      ],
      pensar: 'El Mesías es Padre Eterno para su pueblo: lo cuida para siempre. ¿Qué área de tu vida necesita hoy ese cuidado paternal de Cristo?'
    },
    {
      id: 'primogenito', n: '«Primogénito» y «un solo mediador»', ref: 'Colosenses 1:15-20; 1 Timoteo 2:5; Salmo 89:27; Proverbios 8:22; Apocalipsis 3:14',
      visual: [
        { tipo: 'cita', titulo: 'Colosenses 1', texto: 'El es la imagen del Dios invisible, el primogénito de toda creación. Porque en él fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra, visibles e invisibles; sean tronos, sean dominios, sean principados, sean potestades; todo fue creado por medio de él y para él. Y él es antes de todas las cosas, y todas las cosas en él subsisten; y él es la cabeza del cuerpo que es la iglesia, él que es el principio, el primogénito de entre los muertos, para que en todo tenga la preeminencia;', ref: 'Colosenses 1:15-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Textos que se usan para decir que el Hijo fue creado',
          cab: ['Texto', 'Lo que se dice', 'Lo que significa en su contexto'],
          filas: [
            ['Col 1:15 «primogénito de toda creación»', 'Fue el primero en ser creado', 'Tiene la primacía y el derecho de heredero sobre la creación, que fue hecha por Él (Col 1:16-17)'],
            ['1 Ti 2:5 «Jesucristo hombre»', 'Si es hombre, no es Dios', 'Medió como verdadero hombre; el mismo Pablo dice que en Él habita la plenitud de la Deidad (Col 2:9)'],
            ['Pr 8:22 «Jehová me poseía en el principio»', 'La Sabiduría, que es Cristo, fue creada', 'Es una personificación poética de la sabiduría, no una profecía sobre el origen del Hijo'],
            ['Ap 3:14 «el principio de la creación de Dios»', 'Fue el comienzo de lo creado', 'Arché significa también origen o soberano: es la fuente y el que gobierna la creación (Ap 21:6; 22:13)']
          ]
        } }
      ],
      texto: [
        'Arrio en el siglo IV, y los Testigos de Jehová hoy, se apoyan en algunos textos para decir que el Hijo fue creado. La tabla los reúne. Todos se aclaran con la misma regla: leer el versículo en su contexto y junto con lo que el mismo autor dice en otras partes.',
        { h: 'El primogénito' },
        'Pablo llama a Cristo «el primogénito de toda creación» (Col 1:15). Si se lee solo esa frase, parece decir que fue el primero de los seres creados. Pero en la Biblia primogénito no siempre significa nacido primero: indica también la posición del heredero, con el rango más alto. Dios dice de David, que era el menor de sus hermanos: «Yo también le pondré por primogénito, El más excelso de los reyes de la tierra» (Sal 89:27). Y el versículo siguiente en Colosenses explica por qué Cristo es el primogénito: «Porque en él fueron creadas todas las cosas… todo fue creado por medio de él y para él. Y él es antes de todas las cosas» (Col 1:16-17). No es la primera criatura, sino el Creador y heredero de todo. Por eso la Traducción del Nuevo Mundo, de los Testigos de Jehová, tiene que agregar la palabra «otras» en esos versículos: «todas las otras cosas».',
        { h: 'Un solo mediador' },
        '«Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5). Se argumenta que, si Jesús es mediador entre Dios y los hombres, no puede ser Dios. Pero un mediador perfecto tiene que representar bien a las dos partes. Cristo puede llevarnos a Dios porque es verdadero hombre, y puede traernos a Dios porque es verdadero Dios. Pablo subraya aquí su humanidad porque habla de su muerte en rescate por todos (1 Ti 2:6), pero el mismo apóstol dice que en Él habita corporalmente toda la plenitud de la Deidad (Col 2:9) y lo llama «nuestro gran Dios y Salvador Jesucristo» (Tit 2:13).',
        { ejercicio: {
          pregunta: '¿Qué muestra el Salmo 89:27 sobre la palabra «primogénito»?',
          opciones: [
            { t: 'Que David fue el primer hijo de Isaí.', ok: false, por_que: 'David era el menor de sus hermanos (1 Samuel 16:11). No era primogénito por nacimiento.' },
            { t: 'Que puede indicar una posición de primacía, no un orden de nacimiento.', ok: true, por_que: 'Dios «pone» a David por primogénito: le da el rango más alto entre los reyes.' },
            { t: 'Que solo se usa para personas creadas.', ok: false, por_que: 'El salmo muestra el sentido de rango; Colosenses 1:16-17 aclara que Cristo es el Creador de todo.' }
          ],
          explicacion: 'Primogénito de toda creación significa que Cristo tiene la primacía sobre todo lo creado, porque todo fue creado por Él.'
        } },
        { ejercicio: {
          pregunta: 'Si 1 Timoteo 2:5 llama a Jesús «hombre», ¿significa que no es Dios?',
          opciones: [
            { t: 'Sí, porque un mediador no puede ser una de las partes.', ok: false, por_que: 'Un mediador perfecto representa a las dos partes. Cristo es Dios y hombre, por eso puede unirlas.' },
            { t: 'No: Pablo destaca su humanidad porque habla de su muerte, pero en otras cartas lo llama Dios.', ok: true, por_que: 'Colosenses 2:9 y Tito 2:13 son del mismo autor. Cristo es verdadero hombre y verdadero Dios.' },
            { t: 'Sí, porque Pablo nunca habla de la divinidad de Cristo.', ok: false, por_que: 'Pablo lo hace muchas veces, por ejemplo en Filipenses 2:6 y Romanos 9:5.' }
          ],
          explicacion: 'Que Cristo sea hombre no niega que sea Dios: lo hace el mediador perfecto.'
        } }
      ],
      pensar: 'Cristo es el único mediador entre Dios y tú (1 Ti 2:5). ¿Buscas a veces otros mediadores, personas, objetos o méritos propios, para acercarte a Dios?'
    },
    {
      id: 'un-dios', n: '«El Verbo era Dios», no «un dios»', ref: 'Juan 1:1-18; 20:28; Isaías 43:10; 44:6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.', ref: 'Juan 1:1-3' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Juan 1:1 frase por frase',
          cab: ['Griego (transcrito)', 'RV 1960', 'Qué afirma'],
          filas: [
            ['En arché ên ho Lógos', 'En el principio era el Verbo', 'Cuando todo comenzó, el Verbo ya existía: es eterno'],
            ['kai ho Lógos ên pros ton Theón', 'y el Verbo era con Dios', 'Estaba en relación con Dios (el Padre): es distinto de Él'],
            ['kai Theós ên ho Lógos', 'y el Verbo era Dios', 'Tenía la naturaleza de Dios: es Dios']
          ],
          nota: 'En la tercera frase, Theós va sin artículo y antes del verbo: describe qué era el Verbo (su naturaleza), sin identificarlo con el Padre, que acaba de nombrarse con artículo.'
        } }
      ],
      texto: [
        'La Traducción del Nuevo Mundo, de los Testigos de Jehová, traduce el final de Juan 1:1 como «y la Palabra era un dios». Su argumento es gramatical: en griego, la palabra Dios en esa frase no lleva artículo, mientras que en la frase anterior sí. Según ellos, sin artículo significaría «un dios», un ser divino de segunda categoría. Esta estación examina el argumento con calma.',
        { h: 'Por qué no hay artículo' },
        'La tabla muestra el versículo frase por frase. En la segunda frase, Juan dice que el Verbo estaba «con Dios», ton Theón, con artículo: se refiere a una persona concreta, el Padre. En la tercera, dice Theós ên ho Lógos, literalmente «Dios era el Verbo». Si Juan hubiera escrito ho Theós, con artículo, habría dicho que el Verbo es la misma persona que acaba de nombrar, es decir, el Padre: eso sería modalismo. Si hubiera querido decir «divino» en un sentido menor, tenía la palabra theios. Al poner Theós sin artículo y antes del verbo, Juan dice qué era el Verbo, cuál era su naturaleza: lo que Dios era, eso era el Verbo. Con una sola frase, Juan descarta a la vez el arrianismo y el modalismo.',
        'Además, la falta de artículo no significa «un dios» en el resto del evangelio. En el mismo capítulo, Theós sin artículo aparece varias veces y la misma traducción lo traduce «Dios»: por ejemplo, «hubo un hombre enviado de Dios» (Jn 1:6) y «A Dios nadie le vio jamás» (Jn 1:18). Traducir «un dios» solo en el versículo 1 no responde a la gramática, sino a una doctrina previa.',
        { h: '¿Dos dioses?' },
        'Hay además un problema teológico. Si el Verbo es «un dios» distinto del Dios verdadero, entonces hay dos dioses: uno mayor y otro menor. Eso contradice todo el Antiguo Testamento. Dios dice por medio de Isaías: «antes de mí no fue formado dios, ni lo será después de mí» (Is 43:10), y «fuera de mí no hay Dios» (Is 44:6). Juan, judío y monoteísta, nunca habría aceptado un segundo dios menor. Y el evangelio termina como empezó: Tomás llama a Jesús «¡Señor mío, y Dios mío!» (Jn 20:28), con artículo.',
        'Cómo se traduce y por qué hay distintas traducciones se estudia en el recurso De la Biblia a nosotros.',
        { ir: { t: 'Ver «Formas de traducir» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#traducciones/6' } },
        { ejercicio: {
          pregunta: '¿Qué problema tiene traducir «el Verbo era un dios»?',
          opciones: [
            { t: 'Ninguno: el griego obliga a traducirlo así.', ok: false, por_que: 'La misma traducción pone «Dios» en otros versículos donde Theós tampoco lleva artículo, como Juan 1:6 y 1:18.' },
            { t: 'Que introduce un segundo dios menor, contrario al monoteísmo de toda la Biblia.', ok: true, por_que: 'Isaías 43:10 y 44:6 niegan que haya otro dios. Juan no habría aceptado un dios de segunda categoría.' },
            { t: 'Que hace del Verbo la misma persona que el Padre.', ok: false, por_que: 'Ese sería el problema de poner el artículo. «Un dios» comete el error contrario: rebaja al Verbo.' }
          ],
          explicacion: 'Juan 1:1 dice que el Verbo es distinto del Padre y que es Dios: lo que Dios era, eso era el Verbo.'
        } },
        { ejercicio: {
          pregunta: 'Al terminar este recurso, ¿cuál es la mejor síntesis de la doctrina bíblica de Dios?',
          opciones: [
            { t: 'Hay un solo Dios, que existe eternamente como Padre, Hijo y Espíritu Santo, tres personas iguales y distintas.', ok: true, por_que: 'Es lo que sostienen juntos el Shemá, la divinidad del Hijo y del Espíritu, y su distinción en el bautismo de Jesús y en Juan 17.' },
            { t: 'Hay un Dios mayor, el Padre, y dos seres divinos menores que le sirven.', ok: false, por_que: 'Eso es el arrianismo. El Hijo y el Espíritu son plenamente Dios.' },
            { t: 'Hay un solo Dios que se manifiesta como Padre, como Hijo o como Espíritu según el momento.', ok: false, por_que: 'Eso es el modalismo. Las tres personas existen y actúan a la vez.' }
          ],
          explicacion: 'Un solo Dios, Padre, Hijo y Espíritu Santo: a Él la gloria por los siglos.'
        } }
      ],
      pensar: 'Juan escribió su evangelio «para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:31). Después de este estudio, ¿qué ha crecido más en ti: tu conocimiento de Dios o tu deseo de adorarle?'
    }
  ];

  const T = window.__TRINIDAD;
  delete window.__TRINIDAD;
  window.RUTA_DATA = {
    titulo: 'Dios y la Trinidad',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'conocer', grupo: 'La doctrina de Dios', n: 'I. Conocer a Dios', info: 'Que Dios se puede conocer, que existe, que es espíritu, que es uno y que es persona', estaciones: T.conocer },
      { id: 'nombres', grupo: 'La doctrina de Dios', n: 'II. Los nombres de Dios', info: 'Elohim, Jehová, Adonai, los nombres compuestos y el Padre del Nuevo Testamento', estaciones: T.nombres },
      { id: 'atributos', grupo: 'La doctrina de Dios', n: 'III. Los atributos de Dios', info: 'Lo que solo Dios es y lo que forma en sus hijos', estaciones: T.atributos },
      { id: 'trinidad', grupo: 'La doctrina de Dios', n: 'IV. La Trinidad', info: 'Un solo Dios: Padre, Hijo y Espíritu Santo', estaciones: T.trinidad },
      { id: 'historia', grupo: 'Historia y textos difíciles', n: 'V. La doctrina en la historia', info: 'De la iglesia primitiva a Nicea, los credos y los errores de hoy', estaciones: historia,
        linea: { desde: 0, hasta: 2030, hitos: [
          { a: [100, 250], t: 'Didajé a Tertuliano' }, { a: [325, 381], t: 'Nicea y Constantinopla' },
          { a: 1054, t: 'Oriente y Occidente' }, { a: 1522, t: 'Erasmo' },
          { a: 1916, t: 'Pentecostales trinitarios y unicitarios' }
        ] } },
      { id: 'textos', grupo: 'Historia y textos difíciles', n: 'VI. Textos difíciles', info: 'Los pasajes que se usan para negar la Trinidad, leídos en su contexto', estaciones: textos }
    ]
  };
})();
