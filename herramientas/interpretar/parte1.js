/* ==========================================================
   Recursos Bíblicos — Cómo interpretar la Biblia · contenido de las rutas
   FUENTE de public/apps/interpretar-biblia/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/interpretar_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado; bloque
   { ejercicio } de opción múltiple desde la v2.30 de las Directrices).
   En temas doctrinales prevalece la línea pentecostal clásica.
   ========================================================== */
(() => {
  const fundamentos = [
    {
      id: 'por-que', n: '¿Por qué hay que interpretar?', ref: 'Nehemías 8:1-8; Hechos 8:26-35; 2 Timoteo 2:15',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/esdras-lee-la-ley.webp', alt: 'Esdras lee el libro de la ley desde un púlpito de madera ante una multitud en la plaza de la puerta de las Aguas, al amanecer', pie: 'Esdras lee la ley y los levitas explican su sentido (Nehemías 8).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@neh/8/8', ref: 'Nehemías 8:8' }
      ],
      texto: [
        'Leer la Biblia y entenderla no siempre son lo mismo. Cuando el pueblo volvió del exilio, Esdras leyó la ley de Moisés en la plaza de Jerusalén «desde el alba hasta el mediodía» (Neh 8:3). Pero no bastó con leer: los levitas recorrían la multitud y explicaban. «Leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Lectura, sentido y entendimiento: ese es el camino de este recurso.',
        'Siglos después, un funcionario etíope volvía de Jerusalén leyendo a Isaías en su carro. Felipe le preguntó: «¿entiendes lo que lees?», y él respondió con sinceridad: «¿Y cómo podré, si alguno no me enseñare?» (Hch 8:30-31). El etíope no tenía un problema de fe ni de interés; tenía un pasaje que no sabía a quién se refería (Hch 8:34). Cuando Felipe le explicó el texto, comenzando desde esa misma escritura, le anunció el evangelio de Jesús (Hch 8:35).',
        { h: 'Interpretar no es inventar' },
        'Algunos creyentes desconfían de la palabra «interpretar», como si significara poner en la Biblia ideas que no tiene. Es al revés. Todo el que lee interpreta: decide qué significa cada palabra, a quién se dirige el texto y qué espera de él. La pregunta no es si interpretamos, sino si lo hacemos bien o mal. Pedro advierte que hay pasajes difíciles que los indoctos e inconstantes tuercen para su propia perdición (2 P 3:16). Interpretar bien es la manera de no torcer la Escritura.',
        'Por eso Pablo pide a Timoteo que procure con diligencia ser un obrero que «usa bien la palabra de verdad» (2 Ti 2:15). La imagen es la de un artesano que corta derecho: con cuidado, con método y con temor de Dios. Este recurso enseña ese oficio en cinco rutas: los fundamentos, el método, los géneros literarios, los errores más comunes y un taller para practicar con pasajes muy citados.',
        { ejercicio: {
          pregunta: '¿Qué hacían los levitas en Nehemías 8 además de leer la ley?',
          opciones: [
            { t: 'Ponían el sentido para que el pueblo entendiera la lectura.', ok: true, por_que: 'Nehemías 8:8 lo dice expresamente: leían claramente y ponían el sentido.' },
            { t: 'Traducían la ley a la lengua de Babilonia para los extranjeros.', ok: false, por_que: 'Es posible que hubiera que explicar el hebreo a quienes hablaban arameo, pero el texto pone el acento en el sentido y el entendimiento, no en un público extranjero.' },
            { t: 'Leían solo los pasajes fáciles para no cansar al pueblo.', ok: false, por_que: 'La lectura duró desde el alba hasta el mediodía (Nehemías 8:3). No se saltaron nada: explicaron lo que se leía.' }
          ],
          explicacion: 'Desde el Antiguo Testamento, el pueblo de Dios entendió que la Palabra se lee y se explica. Interpretar es servir al texto para que se entienda, no reemplazarlo.'
        } }
      ],
      pensar: 'El etíope reconoció que necesitaba ayuda para entender (Hch 8:31). ¿Qué pasaje de la Biblia lees a menudo sin estar seguro de lo que significa?'
    },
    {
      id: 'palabra-de-dios', n: 'La Biblia es Palabra de Dios', ref: '2 Timoteo 3:14-17; 2 Pedro 1:19-21',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2ti/3/16-17', ref: '2 Timoteo 3:16-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro convicciones del intérprete',
          cab: ['Convicción', 'Qué significa', 'Consecuencia al leer'],
          filas: [
            ['Inspiración', 'Toda la Escritura viene de Dios, que guió a los autores humanos (2 Ti 3:16; 2 P 1:21)', 'Cada parte merece atención; nada sobra'],
            ['Autoridad', 'Lo que la Escritura enseña, Dios lo enseña', 'El texto juzga al lector, no al revés'],
            ['Unidad', 'Un solo Autor divino detrás de 66 libros', 'La Biblia no se contradice; un pasaje ayuda a entender otro'],
            ['Claridad', 'Lo necesario para la salvación y la vida se entiende (Sal 119:130)', 'Cualquier creyente puede estudiarla, no solo los expertos']
          ],
          nota: 'Estas convicciones no son conclusiones del estudio, sino su punto de partida: se reciben de la propia Escritura.'
        } }
      ],
      texto: [
        'Antes de hablar de métodos, hay que decir con qué libro estamos tratando. La forma de leer depende de lo que uno cree que tiene en las manos. Una carta de un amigo, un contrato o un poema se leen distinto. La Biblia dice de sí misma que es Palabra de Dios: «Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia» (2 Ti 3:16).',
        'La palabra «inspirada» traduce un término griego que significa literalmente «exhalada por Dios». La Escritura no es un libro humano al que Dios dio su aprobación después; salió de Dios. Al mismo tiempo, Dios no dictó como a una máquina: usó a hombres con su estilo, su lengua y sus circunstancias. Pedro lo explica así: «nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21). Por eso la Biblia es a la vez plenamente divina y plenamente humana en su forma, y sin error en todo lo que afirma.',
        { h: 'Por qué importa para interpretar' },
        'Si la Biblia es Palabra de Dios, el intérprete no es su juez sino su oyente. Su tarea es descubrir lo que Dios quiso decir por medio del autor humano, no decidir qué partes le parecen aceptables. Si tiene un solo Autor divino, sus libros no se contradicen: cuando dos pasajes parecen chocar, el problema está en nuestra comprensión y hay que seguir estudiando. Y si fue escrita en lenguas humanas, se entiende con las reglas normales del lenguaje: gramática, contexto, género e historia. Las dos verdades van juntas: porque es divina, la obedecemos; porque es humana en su forma, la estudiamos.',
        'Pedro añade que «ninguna profecía de la Escritura es de interpretación privada» (2 P 1:20). Como el texto no nació de la voluntad de un hombre, tampoco su sentido queda a la voluntad de cada lector. El significado lo pone Dios, y el lector lo busca con humildad.',
        { ejercicio: {
          pregunta: 'Si dos pasajes de la Biblia parecen contradecirse, ¿qué actitud corresponde al intérprete?',
          opciones: [
            { t: 'Elegir el pasaje que le parece más razonable y dejar el otro de lado.', ok: false, por_que: 'Eso convierte al lector en juez de la Escritura. Toda la Escritura es inspirada, no solo la que nos convence.' },
            { t: 'Concluir que uno de los autores humanos se equivocó.', ok: false, por_que: 'La Biblia tiene un Autor divino que no se contradice; descartar un texto por error es la salida más fácil, no la más fiel.' },
            { t: 'Estudiar el contexto de ambos, porque el problema está en nuestra comprensión.', ok: true, por_que: 'La unidad de la Escritura lleva a seguir estudiando: casi siempre la tensión desaparece al ver el contexto, el género o el tema de cada pasaje.' }
          ],
          explicacion: 'La convicción de que la Biblia no se contradice no es ingenuidad: es la base para estudiar con paciencia. Muchas supuestas contradicciones se resuelven al leer cada texto en su lugar.'
        } }
      ],
      pensar: 'Pablo dice que la Escritura es útil para enseñar, redargüir, corregir e instruir (2 Ti 3:16). ¿Cuándo fue la última vez que un pasaje te corrigió, y no solo te confirmó lo que ya pensabas?'
    },
    {
      id: 'espiritu-santo', n: 'El Espíritu Santo y el intérprete', ref: 'Juan 14:26; 16:12-15; 1 Corintios 2:9-14; 1 Juan 2:27',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1co/2/12-14', ref: '1 Corintios 2:12-14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Revelación, inspiración e iluminación',
          cab: ['Obra del Espíritu', 'Qué es', 'Quién la recibe'],
          filas: [
            ['Revelación', 'Dios da a conocer lo que el hombre no podía saber por sí mismo', 'Profetas y apóstoles'],
            ['Inspiración', 'Dios guía la escritura de esa revelación, sin error', 'Los autores de la Biblia'],
            ['Iluminación', 'Dios abre el entendimiento para comprender y recibir lo escrito', 'Todo creyente que lee con fe']
          ],
          nota: 'La iluminación no agrega nada al texto: ayuda a ver lo que ya está en él (Sal 119:18).'
        } }
      ],
      texto: [
        'La Biblia no es solo un libro que se analiza: es un libro que se recibe. Pablo afirma que «el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente» (1 Co 2:14). Una persona sin Cristo puede conocer muy bien la gramática de un pasaje y, sin embargo, no aceptar lo que dice. El mismo Espíritu que inspiró la Escritura es el que abre el corazón para entenderla.',
        'Jesús lo prometió a sus discípulos: el Consolador «os enseñará todas las cosas, y os recordará todo lo que yo os he dicho» (Jn 14:26), y «él os guiará a toda la verdad» (Jn 16:13). Después de la resurrección, el Señor mismo «les abrió el entendimiento, para que comprendiesen las Escrituras» (Lc 24:45). Juan escribe a creyentes sencillos que tienen la unción del Santo y que esa unción les enseña (1 Jn 2:27). Por eso el estudio bíblico empieza con oración, como el salmista: «Abre mis ojos, y miraré Las maravillas de tu ley» (Sal 119:18).',
        { h: 'Iluminación no es atajo' },
        'Depender del Espíritu no reemplaza el estudio. El Espíritu ilumina el texto que está escrito; no entrega significados secretos que contradigan lo que el texto dice en su contexto. Los apóstoles, llenos del Espíritu, citaban la Escritura, la explicaban y razonaban a partir de ella (Hch 17:2-3). Cuando alguien dice «el Señor me mostró» algo que choca con el sentido claro de un pasaje, no está ante una iluminación sino ante una confusión, porque el Espíritu no se contradice.',
        'Tampoco 1 Juan 2:27 significa que el creyente no necesita maestros. Juan lo escribe para proteger a la iglesia de falsos maestros que pretendían tener un conocimiento superior; el mismo Nuevo Testamento dice que Cristo dio maestros a la iglesia (Ef 4:11). El Espíritu enseña a través de la Palabra, del estudio personal y de la enseñanza fiel en la congregación.',
        { posturas: {
          titulo: '¿Basta la oración, o hace falta método?',
          a: { n: 'Solo el Espíritu', t: 'Algunos piensan que estudiar contexto, gramática e historia enfría la fe, y que basta con orar y abrir la Biblia.' },
          b: { n: 'Solo el método', t: 'Otros tratan la Biblia como cualquier libro antiguo y creen que un buen método asegura la comprensión sin necesidad de fe.' },
          c: 'La Escritura une ambas cosas: el Espíritu ilumina al que estudia con diligencia (2 Ti 2:15) y el estudio da fruto cuando se hace en oración y obediencia. El método es la herramienta; el Espíritu, quien da entendimiento y vida.'
        } }
      ],
      pensar: 'Antes de abrir la Biblia, ¿oras para que Dios te dé entendimiento? ¿Y después de orar, te tomas el tiempo de estudiar con cuidado lo que lees?'
    },
    {
      id: 'cristo-centro', n: 'Cristo, centro de la Escritura', ref: 'Lucas 24:25-27, 44-45; Juan 5:39-40',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/camino-a-emaus.webp', alt: 'Jesús resucitado camina de espaldas junto a dos discípulos por un camino de tierra entre colinas al atardecer, explicándoles las Escrituras', pie: 'En el camino a Emaús, Jesús explica lo que las Escrituras decían de él (Lucas 24).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/24/25-27', ref: 'Lucas 24:25-27' }
      ],
      texto: [
        'Dos discípulos caminaban hacia Emaús desanimados. Conocían las Escrituras, pero no habían entendido lo principal. Jesús, sin que lo reconocieran, les dio la clase de Biblia más extraordinaria de la historia: «comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían» (Lc 24:27). Más tarde dijo a los once que era necesario que se cumpliese «todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44), es decir, en las tres partes del Antiguo Testamento.',
        'A los líderes religiosos que estudiaban la ley con esmero, Jesús les dijo: «Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí» (Jn 5:39). Se puede saber mucho de la Biblia y no llegar a Cristo. Ese es el error más grave de interpretación, porque pierde el propósito por el que Dios dio su Palabra.',
        { h: 'Qué significa leer con Cristo en el centro' },
        'La Biblia cuenta una sola historia: Dios crea, el hombre cae, Dios promete un Redentor, prepara un pueblo, envía a su Hijo, forma su iglesia y consumará su reino. Cristo es el centro de esa historia: el Antiguo Testamento lo anuncia y lo prepara; los Evangelios lo presentan; Hechos y las cartas proclaman y explican su obra; Apocalipsis anuncia su victoria final.',
        'Leer con Cristo en el centro no significa buscar a Jesús en cada detalle ni inventar símbolos. El arca de Noé no se vuelve un tratado sobre la cruz por cada madero que tiene. Significa preguntarse, después de entender el pasaje en su contexto, cómo encaja en el plan de Dios que culmina en Cristo: si es una promesa que él cumple, una figura que él realiza, una necesidad que él satisface o una enseñanza que él profundiza. Los autores del Nuevo Testamento nos muestran ese camino cuando citan el Antiguo; más adelante, en la ruta de errores comunes, veremos la diferencia entre esa lectura y la alegoría.',
        { ejercicio: {
          pregunta: 'Según Juan 5:39-40, ¿cuál era el problema de quienes escudriñaban las Escrituras?',
          opciones: [
            { t: 'Estudiaban poco y con descuido.', ok: false, por_que: 'Al contrario: las escudriñaban con esmero. El problema no era la cantidad de estudio.' },
            { t: 'Estudiaban las Escrituras pero no venían a Cristo, de quien ellas daban testimonio.', ok: true, por_que: 'Jesús dice que las Escrituras dan testimonio de él y que, aun así, no querían venir a él para tener vida.' },
            { t: 'Usaban una traducción equivocada del texto.', ok: false, por_que: 'Nada en el pasaje habla de traducciones. El problema estaba en el corazón y en el propósito de la lectura.' }
          ],
          explicacion: 'El fin del estudio bíblico no es acumular información, sino conocer a Cristo y tener vida en él.'
        } }
      ],
      pensar: 'Los discípulos de Emaús dijeron después: «¿No ardía nuestro corazón en nosotros… cuando nos abría las Escrituras?» (Lc 24:32). ¿Tu estudio de la Biblia te acerca a Cristo o solo te llena de datos?'
    },
    {
      id: 'distancias', n: 'Las distancias entre el texto y nosotros', ref: 'Hechos 8:34; 1 Corintios 8:4-9; Romanos 15:4',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-distancias.svg', alt: 'Un puente une el mundo bíblico con el lector de hoy; sobre el río que los separa se leen cinco distancias: idioma, cultura, historia, geografía y forma literaria', pie: 'Cinco distancias que el intérprete debe cruzar.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Ejemplos de cada distancia',
          cab: ['Distancia', 'Ejemplo bíblico', 'Pregunta que ayuda'],
          filas: [
            ['Idioma', 'Hebreo, arameo y griego; palabras con matices que el español no siempre conserva', '¿Qué significaba esta palabra para el autor?'],
            ['Cultura', 'Comer carne ofrecida a ídolos (1 Co 8), lavar los pies, el velo', '¿Qué costumbre está detrás del texto?'],
            ['Historia', 'Jeremías escribe a judíos exiliados en Babilonia (Jer 29)', '¿Qué estaba pasando cuando se escribió?'],
            ['Geografía', 'Descender de Jerusalén a Jericó; subir a Jerusalén', '¿Dónde ocurre y cómo es ese lugar?'],
            ['Forma literaria', 'Salmos, leyes, parábolas, cartas, visiones', '¿Qué tipo de texto estoy leyendo?']
          ]
        } }
      ],
      texto: [
        'La Biblia se escribió para nosotros, pero no se escribió primero a nosotros. Pablo dice que «las cosas que se escribieron antes, para nuestra enseñanza se escribieron» (Ro 15:4). A la vez, cada libro tuvo destinatarios concretos, en un lugar y una época concretos. Entre ellos y nosotros hay distancias reales que el intérprete tiene que cruzar con cuidado, como quien construye un puente.',
        { h: 'Las cinco distancias' },
        'La primera es el idioma. La Biblia se escribió en hebreo, arameo y griego. Las traducciones son fieles, pero algunas palabras tienen matices que el español no conserva del todo, y algunas expresiones idiomáticas suenan extrañas en nuestra lengua. La segunda es la cultura: comidas, vestidos, saludos, formas de familia y de trabajo que no son las nuestras. Para entender por qué comer carne sacrificada a ídolos era un problema en Corinto (1 Co 8:4-9), hay que saber que en esa ciudad la carne del mercado solía pasar antes por los templos paganos.',
        'La tercera es la historia: guerras, imperios, reyes y exilios que explican el porqué de muchos textos. La cuarta es la geografía: montes, desiertos, ríos y caminos que dan sentido a frases como «descendía de Jerusalén a Jericó» (Lc 10:30), un descenso real de unos mil metros. La quinta es la forma literaria: no se lee igual un salmo que una ley o una visión, y la tercera ruta de este recurso está dedicada a eso.',
        { h: 'Cruzar el puente' },
        'Cruzar estas distancias no requiere ser un erudito. Requiere hacerse preguntas y usar buenas herramientas: un atlas bíblico, una línea de tiempo, notas de una Biblia de estudio y los recursos de este sitio sobre geografía e historia. El objetivo es entender qué significó el texto para sus primeros lectores, para luego descubrir qué significa para nosotros. Saltarse el primer paso es construir el puente desde un solo lado.',
        { ir: { t: 'Abrir el Atlas bíblico', a: '../../atlas-biblico/' } },
        { ir: { t: 'Abrir Los imperios en la historia bíblica', a: '../../imperios-historia/' } }
      ],
      pensar: 'Piensa en un pasaje que conoces bien. ¿Cuál de las cinco distancias crees que es la que más te cuesta cruzar al leerlo?'
    },
    {
      id: 'un-significado', n: 'Un significado, muchas aplicaciones', ref: 'Nehemías 8:8; Lucas 10:36-37; Santiago 1:22-25',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-significado.svg', alt: 'Un texto bíblico en el centro con una sola flecha hacia su significado, y desde el significado varias flechas hacia distintas aplicaciones en la vida', pie: 'El significado es uno; las aplicaciones pueden ser muchas.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/10/36-37', ref: 'Lucas 10:36-37' }
      ],
      texto: [
        'En muchos estudios bíblicos se escucha la pregunta «¿qué significa este versículo para ti?». Es una buena pregunta, pero llega demasiado pronto. Antes hay que preguntar qué significa el versículo, a secas: qué quiso comunicar Dios por medio del autor a sus primeros lectores. Si cada lector decide el significado, la Biblia termina diciendo cosas opuestas a distintas personas, y deja de ser una palabra que nos habla para convertirse en un espejo de lo que ya pensábamos.',
        { h: 'Significado y aplicación' },
        'El significado de un texto es uno solo y está en el texto mismo. La aplicación es la forma en que ese significado toca la vida de cada lector, y puede ser muy variada. Cuando Jesús terminó la parábola del buen samaritano, el significado era claro: el prójimo es aquel a quien uno muestra misericordia, sin importar su origen (Lc 10:36-37). La aplicación, «Ve, y haz tú lo mismo», lleva a un creyente a visitar a un enfermo, a otro a ayudar a un inmigrante, a otro a reconciliarse con un vecino. Las aplicaciones cambian; el significado no.',
        'Esto da libertad y a la vez protege. Da libertad, porque el Espíritu Santo puede aplicar un mismo pasaje de maneras muy personales a distintos creyentes. Protege, porque ninguna aplicación puede contradecir el significado del texto. Si alguien aplica el buen samaritano para justificar el desprecio hacia otros, su aplicación es falsa, aunque diga que el Señor se lo mostró.',
        { h: 'La meta es obedecer' },
        'Santiago advierte que se puede oír la Palabra y engañarse: «sed hacedores de la palabra, y no tan solamente oidores» (Stg 1:22). Interpretar bien no es un ejercicio académico; termina cuando la verdad entendida se vuelve obediencia. Por eso la última etapa del método que veremos en la próxima ruta es la aplicación.',
        { ejercicio: {
          pregunta: 'Un grupo lee Lucas 10:25-37. ¿Cuál de estas frases expresa el significado del pasaje y no una aplicación?',
          opciones: [
            { t: 'Debo ofrecerme como voluntario en el hospital de mi ciudad.', ok: false, por_que: 'Es una aplicación válida para alguien, pero no es lo que el texto enseña en sí mismo.' },
            { t: 'El prójimo es aquel a quien mostramos misericordia, sin importar su origen.', ok: true, por_que: 'Esa es la respuesta del propio pasaje a la pregunta «¿quién es mi prójimo?» (Lucas 10:29, 36-37).' },
            { t: 'Los creyentes no deben viajar solos por caminos peligrosos.', ok: false, por_que: 'Toma un detalle del relato y lo convierte en enseñanza. La parábola no trata de la seguridad en los viajes.' }
          ],
          explicacion: 'Primero se establece el significado, que es el mismo para todos; después se buscan las aplicaciones, que el Espíritu puede hacer muy personales.'
        } }
      ],
      pensar: '¿Qué pasaje leíste esta semana del que sacaste una aplicación? Vuelve a él y pregúntate primero qué significaba para sus primeros lectores. ¿Cambia en algo tu aplicación?'
    }
  ];
