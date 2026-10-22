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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jer/9/23-24', ref: 'Jeremías 9:23-24' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/4/21-24', ref: 'Juan 4:21-24' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@dt/6/4-9', ref: 'Deuteronomio 6:4-9' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/14/18-20', ref: 'Génesis 14:18-20' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ex/3/13-15', ref: 'Éxodo 3:13-15' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/8/1-4', ref: 'Salmo 8:1-4' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/22/7-14', ref: 'Génesis 22:7-14' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ro/8/14-16', ref: 'Romanos 8:14-16' },
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
