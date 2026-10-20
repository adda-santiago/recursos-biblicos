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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.', ref: 'Nehemías 8:8' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.', ref: '2 Timoteo 3:16-17' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y nosotros no hemos recibido el espíritu del mundo, sino el Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido, lo cual también hablamos, no con palabras enseñadas por sabiduría humana, sino con las que enseña el Espíritu, acomodando lo espiritual a lo espiritual. Pero el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente.', ref: '1 Corintios 2:12-14' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces él les dijo: ¡Oh insensatos, y tardos de corazón para creer todo lo que los profetas han dicho! ¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria? Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.', ref: 'Lucas 24:25-27' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿Quién, pues, de estos tres te parece que fue el prójimo del que cayó en manos de los ladrones? El dijo: El que usó de misericordia con él. Entonces Jesús le dijo: Ve, y haz tú lo mismo.', ref: 'Lucas 10:36-37' }
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

  const metodo = [
    {
      id: 'tres-pasos', n: 'Observar, interpretar, aplicar', ref: 'Esdras 7:10; Nehemías 8:8; Santiago 1:22-25',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-metodo.svg', alt: 'Tres pasos en secuencia: observación (¿qué dice?), interpretación (¿qué significa?) y aplicación (¿cómo lo vivo?), con las preguntas de cada paso', pie: 'El método en tres pasos.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque Esdras había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos.', ref: 'Esdras 7:10' }
      ],
      texto: [
        'Esdras es un buen modelo de estudiante de la Biblia. El texto dice que «había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos» (Esd 7:10). Primero inquirir, después cumplir y, recién entonces, enseñar. El orden importa: no se puede obedecer bien lo que no se ha entendido, ni enseñar con autoridad lo que uno mismo no vive.',
        'El método que proponemos sigue ese orden en tres pasos. No es el único posible, pero es sencillo, se puede usar con cualquier pasaje y lo emplean maestros de escuela dominical, predicadores y estudiantes de seminario por igual.',
        { h: '1. Observación: ¿qué dice?' },
        'Es mirar el texto con atención antes de sacar conclusiones. Quién habla y a quién, qué ocurre, dónde y cuándo, qué palabras se repiten, qué conectores unen las ideas. La mayoría de los errores de interpretación nacen de observar mal: leer rápido, completar con lo que uno cree que dice o saltarse una palabra clave.',
        { h: '2. Interpretación: ¿qué significa?' },
        'Es descubrir lo que el autor quiso comunicar a sus primeros lectores. Aquí entran el contexto literario, el histórico y cultural, el sentido de las palabras, el género del texto y la comparación con el resto de la Escritura. Las próximas estaciones explican cada una de estas herramientas.',
        { h: '3. Aplicación: ¿cómo lo vivo?' },
        'Es llevar el significado a la vida de hoy: qué verdad sobre Dios enseña, qué promesa ofrece, qué mandamiento hay que obedecer, qué pecado hay que dejar, qué ejemplo seguir o evitar. Santiago compara al que oye sin hacer con quien se mira en un espejo y olvida cómo era (Stg 1:23-24). La aplicación es el momento de mirar y no olvidar.',
        { ejercicio: {
          pregunta: 'Un estudiante lee un pasaje y de inmediato se pregunta qué le está diciendo Dios para su situación personal. ¿Qué paso del método se está saltando?',
          opciones: [
            { t: 'Ninguno: la aplicación es lo más importante, así que conviene empezar por ella.', ok: false, por_que: 'La aplicación es la meta, pero si se empieza por ella, el texto termina diciendo lo que uno quería oír.' },
            { t: 'La observación y la interpretación: aplica antes de saber qué dice y qué significa.', ok: true, por_que: 'Sin observar y sin interpretar, la aplicación queda suelta y puede contradecir el sentido del pasaje.' },
            { t: 'Solo la interpretación, porque la observación se hace sola al leer.', ok: false, por_que: 'La observación no se hace sola: requiere leer despacio, varias veces y con preguntas. Es el paso que más se omite.' }
          ],
          explicacion: 'Los tres pasos van en orden. La aplicación es fruto de la interpretación, y la interpretación se apoya en una buena observación.'
        } }
      ],
      pensar: 'Esdras preparó su corazón antes de estudiar (Esd 7:10). ¿Qué tendrías que preparar tú (tiempo, lugar, actitud) para estudiar la Biblia con este método?'
    },
    {
      id: 'observar', n: 'Observar: leer con preguntas', ref: 'Romanos 12:1-2; Hechos 17:11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional. No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.', ref: 'Romanos 12:1-2' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué buscar al observar',
          cab: ['Busca', 'Ejemplo en Romanos 12:1-2'],
          filas: [
            ['Quién habla y a quién', 'Pablo, a los «hermanos» de la iglesia en Roma'],
            ['Conectores', '«Así que»: une el capítulo 12 con todo lo anterior (capítulos 1–11)'],
            ['Verbos de mandato', '«presentéis», «no os conforméis», «transformaos»'],
            ['Motivo', '«por las misericordias de Dios»'],
            ['Contrastes', 'conformarse al siglo / ser transformados'],
            ['Propósito', '«para que comprobéis cuál sea la buena voluntad de Dios»'],
            ['Imágenes', 'sacrificio vivo, culto racional']
          ]
        } }
      ],
      texto: [
        'Los creyentes de Berea son recordados porque recibieron la palabra con solicitud, «escudriñando cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11). Escudriñar es mirar con detención, como quien busca algo pequeño y valioso. Esa es la actitud de la observación: no dar nada por sabido y dejar que el texto hable antes que nosotros.',
        { h: 'Leer varias veces y con preguntas' },
        'Un buen ejercicio es leer el pasaje completo al menos tres veces, si es posible en voz alta, y luego hacerle preguntas: ¿quién?, ¿qué?, ¿dónde?, ¿cuándo?, ¿por qué?, ¿cómo? Conviene anotar lo que se ve, sin interpretar todavía. Al comienzo cuesta, porque estamos acostumbrados a saltar directo a la conclusión.',
        { h: 'Palabras pequeñas que cambian todo' },
        'Hay que prestar atención a los conectores. «Así que» y «por tanto» indican que lo que sigue es consecuencia de lo anterior; «pero» y «mas» marcan un contraste; «porque» da una razón; «para que» indica un propósito; «si» pone una condición. En Romanos 12:1, el «Así que» inicial revela que el llamado a entregar la vida a Dios es la respuesta a todo lo que Pablo explicó en los once capítulos anteriores sobre la gracia. Quien lo pasa por alto convierte el pasaje en una exigencia moral sin fundamento, cuando en realidad es la respuesta agradecida a «las misericordias de Dios».',
        'También hay que notar las palabras que se repiten, los mandatos, las promesas, las comparaciones y las preguntas del propio texto. En la observación el lápiz es un buen aliado: subrayar, encerrar en un círculo y dibujar flechas entre ideas ayuda a ver la estructura del pasaje.',
        { ejercicio: {
          pregunta: 'En Romanos 12:1, ¿qué indica la expresión «Así que» al comienzo del versículo?',
          opciones: [
            { t: 'Que Pablo cambia de tema y empieza una sección sin relación con lo anterior.', ok: false, por_que: 'Es justo lo contrario: «Así que» conecta lo que sigue con lo que ya se dijo.' },
            { t: 'Que el llamado a presentar el cuerpo a Dios es consecuencia de lo que Pablo explicó antes sobre la misericordia de Dios.', ok: true, por_que: 'El mismo versículo lo confirma: «os ruego por las misericordias de Dios». La entrega es respuesta a la gracia.' },
            { t: 'Que lo que sigue es un resumen de todo el libro.', ok: false, por_que: 'Lo que sigue es la parte práctica de la carta, no un resumen.' }
          ],
          explicacion: 'Una palabra pequeña puede abrir el sentido de todo un pasaje. Observar con cuidado los conectores es uno de los hábitos más útiles del estudio bíblico.'
        } }
      ],
      pensar: 'Elige un pasaje corto que te guste y léelo tres veces seguidas, despacio. ¿Qué detalle descubriste que antes no habías notado?'
    },
    {
      id: 'contexto-literario', n: 'El contexto literario', ref: 'Colosenses 2:20-23; Romanos 3:28; Santiago 2:14-24',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-contexto.svg', alt: 'Círculos concéntricos: el versículo al centro, rodeado por el párrafo, el capítulo, el libro, el testamento y toda la Biblia', pie: 'Los círculos del contexto: del versículo a toda la Biblia.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pues si habéis muerto con Cristo en cuanto a los rudimentos del mundo, ¿por qué, como si vivieseis en el mundo, os sometéis a preceptos tales como: No manejes, ni gustes, ni aun toques (en conformidad a mandamientos y doctrinas de hombres), cosas que todas se destruyen con el uso? Tales cosas tienen a la verdad cierta reputación de sabiduría en culto voluntario, en humildad y en duro trato del cuerpo; pero no tienen valor alguno contra los apetitos de la carne.', ref: 'Colosenses 2:20-23' }
      ],
      texto: [
        'Hay un dicho que todo estudiante de la Biblia debería recordar: «un texto fuera de contexto es un pretexto». Un versículo aislado se puede hacer decir casi cualquier cosa. Colosenses 2:21 dice: «No manejes, ni gustes, ni aun toques». Algunos lo han usado como un mandamiento para prohibir ciertas cosas. Pero basta leer el versículo anterior y el siguiente para ver que Pablo cita esas reglas para rechazarlas: son «mandamientos y doctrinas de hombres» que «no tienen valor alguno contra los apetitos de la carne» (Col 2:22-23). Sin contexto, el versículo dice lo contrario de lo que enseña.',
        { h: 'Los círculos del contexto' },
        'El contexto se puede imaginar como círculos que rodean al versículo. El más cercano es el párrafo: las frases de antes y de después. Luego viene el capítulo o la sección, que desarrolla un tema. Después, el libro completo, con su propósito y su estructura. Más allá, el testamento al que pertenece y, por último, toda la Biblia. Cuanto más cerca está el círculo, más peso tiene para decidir el sentido de una frase.',
        'Por eso conviene leer siempre el párrafo completo, identificar de qué trata la sección y conocer el tema general del libro. Las Biblias con subtítulos ayudan, aunque esos títulos no son parte del texto inspirado y a veces cortan un argumento por la mitad.',
        { h: 'El contexto resuelve tensiones' },
        'Pablo escribe: «el hombre es justificado por fe sin las obras de la ley» (Ro 3:28). Santiago escribe: «el hombre es justificado por las obras, y no solamente por la fe» (Stg 2:24). Leídos sueltos, parecen chocar. En su contexto, Pablo habla de cómo un pecador es declarado justo delante de Dios: solo por la fe, sin méritos propios. Santiago responde a quienes decían tener fe pero no mostraban ningún cambio, y afirma que la fe verdadera se demuestra con obras (Stg 2:18). Los dos enseñan la misma verdad desde dos frentes distintos.',
        { ejercicio: {
          pregunta: 'Según su contexto (Colosenses 2:20-23), la frase «No manejes, ni gustes, ni aun toques» es…',
          opciones: [
            { t: 'Un mandamiento de Pablo para que los creyentes se abstengan de ciertas comidas.', ok: false, por_que: 'Pablo pregunta por qué los creyentes se someten a esos preceptos; no los está mandando.' },
            { t: 'Una cita de reglas humanas que Pablo rechaza porque no sirven contra la carne.', ok: true, por_que: 'Los versículos 22 y 23 las llaman mandamientos y doctrinas de hombres sin valor contra los apetitos de la carne.' },
            { t: 'Un consejo de salud para la iglesia de Colosas.', ok: false, por_que: 'El tema del pasaje es la libertad en Cristo frente a normas religiosas humanas, no la salud.' }
          ],
          explicacion: 'Leer un versículo junto con los que lo rodean es la regla más sencilla y más importante de la interpretación.'
        } }
      ],
      pensar: '¿Hay algún versículo que hayas usado alguna vez sin conocer su contexto? Léelo hoy con los versículos de antes y de después.'
    },
    {
      id: 'contexto-historico', n: 'El contexto histórico y cultural', ref: 'Amós 4:1; 1 Corintios 8:4-13; Jeremías 29:1-7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Oíd esta palabra, vacas de Basán, que estáis en el monte de Samaria, que oprimís a los pobres y quebrantáis a los menesterosos, que decís a vuestros señores: Traed, y beberemos.', ref: 'Amós 4:1' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Preguntas para reconstruir el trasfondo',
          cab: ['Pregunta', 'Dónde buscar'],
          filas: [
            ['¿Quién escribió y a quién?', 'Comienzo del libro, introducciones de una Biblia de estudio'],
            ['¿Cuándo y en qué situación?', 'Libros históricos (Reyes, Crónicas, Hechos), líneas de tiempo'],
            ['¿Qué imperio dominaba?', 'Recursos de los imperios de este sitio'],
            ['¿Qué costumbres están detrás?', 'Diccionarios bíblicos, manuales de usos y costumbres'],
            ['¿Dónde ocurre?', 'Atlas bíblico, mapas']
          ]
        } }
      ],
      texto: [
        'Amós llama a las mujeres ricas de Samaria «vacas de Basán» (Am 4:1). Para un lector de hoy puede sonar solo a insulto. Pero Basán era una región al oriente del Jordán famosa por sus pastos y su ganado gordo y bien alimentado. La imagen describe a personas que vivían en la abundancia mientras oprimían a los pobres, como el mismo versículo dice. Conocer el trasfondo no cambia el mensaje: lo hace más vivo y más preciso.',
        { h: 'Cada libro nació en una situación' },
        'Ningún libro de la Biblia se escribió en el vacío. Los profetas hablaron en medio de crisis políticas, guerras e idolatría; Pablo escribió cartas para responder a problemas concretos de iglesias concretas. Saber quién escribió, a quién, cuándo y por qué es indispensable para entender el sentido. Jeremías 29, por ejemplo, es una carta a judíos llevados a Babilonia que debían esperar setenta años antes de volver (Jer 29:4-10); sin ese dato, sus promesas se leen como si hablaran de cualquier situación.',
        'Las costumbres también importan. En Corinto, gran parte de la carne que se vendía en el mercado había sido ofrecida antes en un templo pagano. Algunos creyentes, recién salidos de la idolatría, se escandalizaban al comerla; otros sabían que un ídolo nada es (1 Co 8:4). Pablo enseña que la libertad del cristiano debe cuidar la conciencia del hermano débil (1 Co 8:9). El problema de la carne sacrificada ya no existe en la mayoría de nuestras ciudades, pero el principio sigue vigente: el amor limita la libertad para no hacer tropezar a otro.',
        { h: 'Cuidado con dos extremos' },
        'Un extremo ignora el trasfondo y lee la Biblia como si se hubiera escrito ayer en nuestro barrio. El otro usa el trasfondo para quitarle autoridad al texto, diciendo que todo era «cultural» y ya no se aplica. El camino correcto es usar la historia y la cultura para entender mejor lo que el texto dice, y luego buscar el principio permanente que Dios quiso enseñar a través de esa situación particular.',
        { ir: { t: 'Abrir El exilio y los retornos', a: '../../exilio/' } }
      ],
      pensar: 'Pablo pidió a los corintios renunciar a una libertad por amor al hermano débil (1 Co 8:13). ¿Hay alguna libertad que deberías limitar por amor a alguien de tu congregación?'
    },
    {
      id: 'palabras', n: 'Las palabras y la gramática', ref: 'Romanos 8:8-9; Gálatas 2:20; Juan 10:9',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Una palabra, varios sentidos: «carne» en Pablo',
          cab: ['Pasaje', 'Sentido de «carne»'],
          filas: [
            ['Gálatas 2:20: «lo que ahora vivo en la carne»', 'La vida en el cuerpo, la existencia humana'],
            ['Romanos 8:8: «los que viven según la carne»', 'La naturaleza humana caída, opuesta a Dios'],
            ['1 Corintios 15:39: carne de hombres, de animales', 'La sustancia del cuerpo'],
            ['Romanos 9:5: Cristo vino «según la carne»', 'La descendencia humana, el linaje']
          ],
          nota: 'El contexto decide qué sentido tiene la palabra en cada pasaje.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'y los que viven según la carne no pueden agradar a Dios. Mas vosotros no vivís según la carne, sino según el Espíritu, si es que el Espíritu de Dios mora en vosotros. Y si alguno no tiene el Espíritu de Cristo, no es de él.', ref: 'Romanos 8:8-9' }
      ],
      texto: [
        'Dios eligió comunicarse con palabras, y las palabras tienen sentido dentro de oraciones. Por eso el intérprete presta atención a lo que significan los términos y a cómo se relacionan en la frase. No hace falta saber hebreo o griego para estudiar bien la Biblia, pero sí hace falta leer con atención y usar algunas herramientas.',
        { h: 'El contexto define la palabra' },
        'Una misma palabra puede tener varios significados, y el contexto decide cuál corresponde. Pablo usa la palabra «carne» para la vida en el cuerpo, cuando dice «lo que ahora vivo en la carne, lo vivo en la fe del Hijo de Dios» (Gá 2:20), y también para la naturaleza caída que se opone a Dios: «los que viven según la carne no pueden agradar a Dios» (Ro 8:8). Si se confunden estos sentidos, se llega a la idea equivocada de que el cuerpo es malo en sí mismo, algo que la Biblia no enseña.',
        { h: 'Precauciones' },
        'Dos errores son frecuentes. El primero es tomar el origen de una palabra como si fuera su significado. Una palabra significa lo que la gente quería decir con ella en su época, no lo que significaban sus raíces siglos antes. El segundo es cargar en cada aparición de una palabra todos sus sentidos posibles a la vez, como si un predicador pudiera elegir el que le conviene. El autor quiso decir algo concreto en cada frase.',
        'También hay que respetar el lenguaje figurado. Cuando Jesús dice «Yo soy la puerta» (Jn 10:9) nadie piensa en madera y bisagras: es una imagen que comunica una verdad real, que solo por él se entra a la salvación. Interpretar «literalmente» no significa ignorar las figuras, sino entenderlas como las entendería un lector normal.',
        { h: 'Herramientas al alcance' },
        'Comparar varias traducciones confiables, usar una concordancia para ver dónde más aparece una palabra y consultar un diccionario bíblico ayudan mucho. Este sitio tiene previstos recursos sobre el hebreo y el griego bíblicos, y un interlineal, para quienes quieran profundizar.',
        { ejercicio: {
          pregunta: 'En Gálatas 2:20, Pablo dice «lo que ahora vivo en la carne». ¿Qué significa aquí «carne»?',
          opciones: [
            { t: 'La naturaleza pecaminosa que domina al apóstol.', ok: false, por_que: 'En el mismo versículo Pablo dice que vive esa vida «en la fe del Hijo de Dios». No habla de vivir dominado por el pecado.' },
            { t: 'La vida presente en el cuerpo humano.', ok: true, por_que: 'Pablo se refiere a su existencia actual en el cuerpo, que ahora vive por la fe en Cristo.' },
            { t: 'La carne de los sacrificios del templo.', ok: false, por_que: 'Nada en Gálatas 2 trata de sacrificios. El contexto es la vida del creyente unido a Cristo.' }
          ],
          explicacion: 'La misma palabra puede tener sentidos distintos en dos pasajes del mismo autor. Es el contexto, no el diccionario solo, el que decide.'
        } }
      ],
      pensar: '¿Qué palabra de la Biblia usas a menudo (gracia, fe, carne, mundo, santo) sin estar seguro de lo que significa en cada pasaje? Busca tres versículos donde aparezca y compáralos.'
    },
    {
      id: 'escritura-interpreta', n: 'La Escritura interpreta a la Escritura', ref: 'Isaías 7:14; Mateo 1:22-23; Hechos 17:11; Deuteronomio 29:29',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pasajes claros que iluminan a otros',
          cab: ['Pasaje', 'Lo ilumina'],
          filas: [
            ['Isaías 7:14: la virgen dará a luz', 'Mateo 1:22-23: se cumple en el nacimiento de Jesús'],
            ['Génesis 15:6: Abram creyó', 'Romanos 4:3 y Gálatas 3:6: la justificación por la fe'],
            ['Salmo 110:1: «Jehová dijo a mi Señor»', 'Mateo 22:41-45; Hechos 2:34-36: el Mesías es Señor de David'],
            ['Joel 2:28-32: el derramamiento del Espíritu', 'Hechos 2:16-21: «esto es lo dicho por el profeta Joel»'],
            ['Los sacrificios de Levítico', 'Hebreos 9–10: su cumplimiento en Cristo']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos para siempre, para que cumplamos todas las palabras de esta ley.', ref: 'Deuteronomio 29:29' }
      ],
      texto: [
        'Como toda la Biblia tiene un mismo Autor, la mejor intérprete de la Escritura es la propia Escritura. Este principio, que la iglesia ha usado desde los primeros siglos, tiene dos caras. La primera: los pasajes claros ayudan a entender los difíciles, y no al revés. La segunda: ninguna interpretación de un pasaje puede contradecir lo que la Biblia enseña con claridad en otros lugares.',
        { h: 'Lo claro ilumina lo difícil' },
        'Moisés dice que «las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros» (Dt 29:29). Hay pasajes cuyo sentido exacto no podemos determinar con seguridad. La actitud sabia es construir la fe sobre lo que Dios reveló con claridad y acercarse a lo oscuro con humildad, sin edificar una doctrina sobre un solo texto difícil. En la ruta de errores comunes volveremos sobre esto.',
        { h: 'El Nuevo Testamento explica el Antiguo' },
        'Muchas veces el mismo Nuevo Testamento nos dice cómo entender un texto del Antiguo. Isaías anunció que «la virgen concebirá, y dará a luz un hijo» (Is 7:14), y Mateo enseña que eso se cumplió en Jesús (Mt 1:22-23). Pedro, el día de Pentecostés, explica lo que estaba ocurriendo con una frase que es en sí misma una lección de interpretación: «esto es lo dicho por el profeta Joel» (Hch 2:16). Los apóstoles leían los hechos a la luz de la Escritura, y la Escritura a la luz de su cumplimiento en Cristo.',
        { h: 'Comparar con cuidado' },
        'Usar este principio exige leer cada pasaje primero en su contexto. No se trata de juntar versículos que comparten una palabra, sino de comparar pasajes que tratan el mismo tema. Las referencias cruzadas de una Biblia de estudio son útiles para eso, siempre que se lea el contexto de cada una. Así actuaban los de Berea: comparaban lo que oían con lo que estaba escrito (Hch 17:11).',
        { ejercicio: {
          pregunta: 'Un maestro enseña una doctrina basada en un versículo difícil, y esa enseñanza contradice lo que otros pasajes dicen con claridad. ¿Qué indica el principio de la Escritura que interpreta a la Escritura?',
          opciones: [
            { t: 'Que se debe aceptar la enseñanza, porque también es un versículo de la Biblia.', ok: false, por_que: 'El versículo es inspirado; la interpretación del maestro no. Lo que hay que revisar es la interpretación.' },
            { t: 'Que la interpretación del versículo difícil está equivocada y hay que revisarla a la luz de los pasajes claros.', ok: true, por_que: 'La Biblia no se contradice: una interpretación que choca con la enseñanza clara de la Escritura no puede ser correcta.' },
            { t: 'Que los pasajes claros deben reinterpretarse a la luz del difícil.', ok: false, por_que: 'Es el orden inverso: lo claro ilumina lo oscuro, no lo oscuro a lo claro.' }
          ],
          explicacion: 'Ninguna doctrina se edifica sobre un pasaje aislado u oscuro, y ninguna interpretación puede contradecir la enseñanza clara del conjunto de la Escritura.'
        } }
      ],
      pensar: 'Pedro dijo «esto es lo dicho por el profeta Joel» (Hch 2:16). ¿Qué experiencia de tu vida espiritual podrías explicar con un pasaje bíblico concreto, y no solo con lo que sentiste?'
    },
    {
      id: 'literal-progresiva', n: 'Sentido literal y revelación progresiva', ref: 'Hebreos 1:1-2; Génesis 3:15; Gálatas 4:4-5; Romanos 11:25-26',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-revelacion.svg', alt: 'Línea de tiempo de la promesa del Redentor que se va aclarando: Génesis 3:15, Abraham, David, los profetas, Cristo y su venida en gloria', pie: 'La revelación progresiva de la promesa del Redentor.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo;', ref: 'Hebreos 1:1-2' }
      ],
      texto: [
        'El método que seguimos se suele llamar gramático-histórico, y busca el sentido literal del texto. «Literal» no significa ignorar las figuras de lenguaje, sino tomar el texto en su sentido normal, el que tendría para un lector de su época según las reglas de la gramática, el contexto histórico y el género literario. Si el texto es una parábola, el sentido literal es el de una parábola; si es una visión con símbolos, se interpreta como tal, y si narra hechos, se toma como historia real.',
        { h: 'Dios se reveló por etapas' },
        '«Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo» (He 1:1-2). La revelación no llegó toda de una vez. La promesa de un Redentor aparece en semilla en Génesis 3:15, se precisa en Abraham, en David y en los profetas, y se cumple cuando «vino el cumplimiento del tiempo» y Dios envió a su Hijo (Gá 4:4). Esto se llama revelación progresiva: lo posterior no contradice lo anterior, pero lo aclara y lo completa.',
        'Por eso el intérprete pregunta en qué momento del plan de Dios está el texto. Los sacrificios de animales fueron mandados por Dios a Israel, y hoy no los ofrecemos, no porque Dios haya cambiado, sino porque se cumplieron en el sacrificio de Cristo (He 10:1-10).',
        { h: 'Israel y la iglesia' },
        'Leer las promesas en su sentido normal lleva a distinguir entre lo que Dios prometió a Israel como nación y lo que dio a la iglesia. Pablo enseña que el endurecimiento de Israel es parcial y temporal, «hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo» (Ro 11:25-26). Las promesas a Israel siguen en pie y tendrán su cumplimiento futuro; la iglesia, formada por judíos y gentiles, recibe en Cristo las bendiciones espirituales del pacto.',
        { posturas: {
          titulo: '¿Las promesas a Israel pasaron a la iglesia?',
          a: { n: 'La iglesia como nuevo Israel', t: 'Muchos teólogos reformados entienden que las promesas a Israel se cumplen espiritualmente en la iglesia, y leen las profecías sobre la tierra y el reino en sentido simbólico.' },
          b: { n: 'Israel y la iglesia distinguidos', t: 'Otros, siguiendo el sentido normal de los textos, sostienen que Dios cumplirá a Israel lo prometido (Ro 11:25-29) y que la iglesia es una obra nueva del Espíritu, no un reemplazo de Israel.' },
          c: 'Este sitio sigue la segunda lectura: tomar las promesas en su sentido normal y distinguir el plan de Dios para Israel y para la iglesia, sin negar que ambos se unen en Cristo. Es la base del esquema de los últimos tiempos que se estudia en otro recurso.'
        } },
        { ir: { t: 'Abrir Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'Dios fue revelando su plan poco a poco a lo largo de la historia. ¿Qué te enseña esa paciencia de Dios sobre la manera en que te enseña a ti?'
    },
    {
      id: 'aplicar', n: 'Aplicar la Palabra', ref: 'Santiago 1:22-25; Romanos 15:4; 1 Corintios 10:6, 11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos. Porque si alguno es oidor de la palabra pero no hacedor de ella, éste es semejante al hombre que considera en un espejo su rostro natural. Porque él se considera a sí mismo, y se va, y luego olvida cómo era. Mas el que mira atentamente en la perfecta ley, la de la libertad, y persevera en ella, no siendo oidor olvidadizo, sino hacedor de la obra, éste será bienaventurado en lo que hace.', ref: 'Santiago 1:22-25' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Preguntas para aplicar un pasaje',
          cab: ['Pregunta', 'Ejemplo'],
          filas: [
            ['¿Qué enseña sobre Dios?', 'Su fidelidad, su santidad, su misericordia'],
            ['¿Hay una promesa que pueda reclamar?', 'Solo si en su contexto se extiende al creyente'],
            ['¿Hay un mandamiento que obedecer?', 'Distinguir si es para todos o para una situación concreta'],
            ['¿Hay un pecado que confesar o dejar?', 'A la luz de la enseñanza del Nuevo Testamento'],
            ['¿Hay un ejemplo que seguir o evitar?', 'Los relatos como «ejemplo» (1 Co 10:6, 11)'],
            ['¿Qué haré concretamente esta semana?', 'Una acción específica, no una intención vaga']
          ]
        } }
      ],
      texto: [
        'El estudio bíblico no termina cuando entendemos el texto, sino cuando el texto nos cambia. Santiago lo dice con una imagen: el que oye la Palabra y no la hace es como quien se mira en un espejo y luego olvida cómo era; pero el que mira atentamente y persevera, «éste será bienaventurado en lo que hace» (Stg 1:25). La aplicación es el paso que transforma la información en obediencia.',
        { h: 'Del significado al principio' },
        'Para aplicar bien, hay que identificar el principio permanente que enseña el pasaje. Algunos textos se aplican directamente, porque fueron dados a todo creyente: «No os conforméis a este siglo» (Ro 12:2) nos habla igual que a los romanos. Otros fueron dados a una persona o situación concreta, y lo que se aplica es el principio que revelan. Cuando Pablo pide a Timoteo que le traiga el capote que dejó en Troas (2 Ti 4:13), nadie busca un capote; pero se aprende algo sobre la humanidad del apóstol y su necesidad en la cárcel.',
        'Los relatos del Antiguo Testamento se aplican como ejemplo. Pablo dice de las experiencias de Israel en el desierto: «estas cosas les acontecieron como ejemplo, y están escritas para amonestarnos a nosotros» (1 Co 10:11). Los relatos no siempre aprueban lo que narran; muchas veces muestran lo que hay que evitar.',
        { h: 'Concreta, personal y comunitaria' },
        'Una buena aplicación es concreta: no «debo orar más», sino «oraré diez minutos cada mañana esta semana». Es personal: empieza por el lector antes que por los demás. Y también es comunitaria: muchos mandamientos del Nuevo Testamento están en plural y se viven en la iglesia, como el perdón, la hospitalidad y la ayuda a los necesitados. Conviene compartir lo aprendido con otros hermanos, que pueden animarnos y corregirnos.',
        { ejercicio: {
          pregunta: 'Pablo pide a Timoteo: «Trae, cuando vengas, el capote que dejé en Troas» (2 Timoteo 4:13). ¿Cuál es la aplicación más adecuada?',
          opciones: [
            { t: 'Los pastores deben usar siempre un capote o una prenda especial.', ok: false, por_que: 'Convierte un pedido personal en una regla para todos. El texto no tiene esa intención.' },
            { t: 'El versículo no tiene aplicación, porque es un detalle sin importancia.', ok: false, por_que: 'Todo el texto es inspirado y útil (2 Timoteo 3:16). Que no tenga un mandato no significa que no enseñe nada.' },
            { t: 'Los siervos de Dios tienen necesidades reales, y la iglesia debe estar atenta a ellas.', ok: true, por_que: 'El pedido muestra a un apóstol preso, con frío y necesidades concretas. El principio es atender las necesidades de los que sirven.' }
          ],
          explicacion: 'Cuando un pasaje se dirige a una situación particular, no se aplica copiando el detalle, sino descubriendo el principio que revela.'
        } }
      ],
      pensar: 'Piensa en el último pasaje que estudiaste. ¿Qué acción concreta puedes hacer esta semana a partir de él, y con quién la compartirás?'
    }
  ];

  const generos = [
    {
      id: 'biblioteca', n: 'La Biblia, una biblioteca', ref: 'Hebreos 1:1; 2 Timoteo 3:16',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-generos.svg', alt: 'Los 66 libros de la Biblia como lomos de una biblioteca, coloreados por género: narrativa, ley, poesía y sabiduría, profecía, evangelios, cartas y apocalíptica', pie: 'Los 66 libros agrupados por su género principal.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los géneros y cómo leerlos',
          cab: ['Género', 'Ejemplos', 'Pregunta clave'],
          filas: [
            ['Narrativa', 'Génesis, Josué, Samuel, Reyes, Hechos', '¿Qué enseña Dios con lo que sucedió?'],
            ['Ley', 'Éxodo 20–40, Levítico, Deuteronomio', '¿Qué revela de Dios y cómo se cumple en Cristo?'],
            ['Poesía', 'Salmos, Cantares, Lamentaciones', '¿Qué imágenes usa y qué sentimiento expresa?'],
            ['Sabiduría', 'Proverbios, Job, Eclesiastés', '¿Es un principio general o una promesa?'],
            ['Profecía', 'Isaías a Malaquías', '¿A quién habló y qué se cumplió ya o falta por cumplirse?'],
            ['Evangelios', 'Mateo, Marcos, Lucas, Juan', '¿Qué revela de Jesús cada relato?'],
            ['Cartas', 'Romanos a Judas', '¿Qué problema responde el autor?'],
            ['Apocalíptica', 'Daniel 7–12, Apocalipsis', '¿Qué representan los símbolos según el mismo texto?']
          ],
          nota: 'Muchos libros combinan géneros: Éxodo tiene narrativa y ley; Isaías, poesía y profecía; Daniel, narrativa y apocalíptica.'
        } }
      ],
      texto: [
        'La palabra «Biblia» viene del griego y significa «libros». No es un solo libro, sino una biblioteca de 66, escrita por unos cuarenta autores a lo largo de unos mil quinientos años. Dios habló «muchas veces y de muchas maneras» (He 1:1): por relatos, leyes, cantos, proverbios, oráculos, cartas y visiones. Cada forma tiene sus propias reglas de lectura.',
        'En la vida diaria todos distinguimos géneros sin pensarlo. Nadie lee una receta de cocina como un poema, ni una noticia como una carta de amor. Si alguien dice «me muero de hambre», entendemos que tiene mucha hambre, no que esté a punto de morir. Con la Biblia ocurre lo mismo: confundir el género lleva a errores serios. Un proverbio leído como promesa absoluta, una parábola leída como alegoría en cada detalle o una visión simbólica leída como descripción fotográfica producen interpretaciones que el autor nunca quiso dar.',
        { h: 'Una forma, un propósito' },
        'Dios no eligió la variedad por adorno. Cada género toca al lector de una manera distinta. La narrativa nos hace entrar en la historia y vernos en sus personajes. La ley muestra la santidad de Dios y nuestra necesidad de gracia. La poesía da palabras a la oración, al dolor y a la alabanza. La sabiduría enseña a vivir con prudencia en lo cotidiano. La profecía llama al arrepentimiento y sostiene la esperanza. Los evangelios nos ponen frente a Jesús. Las cartas aplican el evangelio a la vida de la iglesia. Y la apocalíptica levanta la mirada hacia el triunfo final de Dios.',
        'En las próximas estaciones veremos cada género con sus claves de lectura. La primera pregunta ante cualquier pasaje, entonces, es: ¿qué tipo de texto estoy leyendo?',
        { ejercicio: {
          pregunta: 'El libro de Daniel combina dos géneros principales. ¿Cuáles?',
          opciones: [
            { t: 'Ley y cartas.', ok: false, por_que: 'Daniel no contiene leyes ni cartas apostólicas.' },
            { t: 'Narrativa (capítulos 1–6) y apocalíptica (capítulos 7–12).', ok: true, por_que: 'La primera mitad narra la vida de Daniel en la corte; la segunda presenta visiones simbólicas sobre los imperios y el fin.' },
            { t: 'Sabiduría y evangelio.', ok: false, por_que: 'Aunque Daniel es un hombre sabio, el libro no pertenece a la literatura sapiencial ni es un evangelio.' }
          ],
          explicacion: 'Saber cuándo cambia el género dentro de un libro ayuda a cambiar también la forma de leer: los relatos se leen como historia; las visiones, buscando el sentido de sus símbolos.'
        } },
        { ir: { t: 'Abrir el estudio de Daniel', a: '../../daniel/' } }
      ],
      pensar: '¿Qué género de la Biblia lees con más frecuencia y cuál lees menos? ¿Qué te estás perdiendo de la manera en que Dios habla?'
    },
    {
      id: 'narrativa', n: 'La narrativa', ref: 'Lucas 1:1-4; 1 Corintios 10:6, 11; Hechos 2:4; 10:44-46; 19:6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Puesto que ya muchos han tratado de poner en orden la historia de las cosas que entre nosotros han sido ciertísimas, tal como nos lo enseñaron los que desde el principio lo vieron con sus ojos, y fueron ministros de la palabra, me ha parecido también a mí, después de haber investigado con diligencia todas las cosas desde su origen, escribírtelas por orden, oh excelentísimo Teófilo, para que conozcas bien la verdad de las cosas en las cuales has sido instruido.', ref: 'Lucas 1:1-4' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Claves para leer un relato',
          cab: ['Clave', 'Qué preguntar'],
          filas: [
            ['El relato completo', '¿Dónde empieza y termina la historia? No cortarla a la mitad'],
            ['Dios es el protagonista', '¿Qué hace Dios? ¿Qué revela de sí mismo?'],
            ['El narrador evalúa', '¿Aprueba o reprueba lo que ocurre? ¿Cómo lo sabemos?'],
            ['Lo que se repite', '¿Hay un patrón a lo largo del libro?'],
            ['Lo que enseña el resto de la Escritura', '¿Hay pasajes que explican o confirman este hecho?']
          ]
        } }
      ],
      texto: [
        'Más de un tercio de la Biblia es narrativa: historias de la creación, los patriarcas, Israel, los reyes, Jesús y la iglesia primitiva. Son relatos de hechos reales, escritos con arte y con un propósito. Lucas dice que investigó «con diligencia todas las cosas desde su origen» y las escribió por orden, para que Teófilo conociera «bien la verdad» (Lc 1:3-4). El narrador bíblico no solo informa: elige qué contar y cómo contarlo para enseñar.',
        { h: 'Contar no siempre es aprobar' },
        'Los relatos registran también lo malo: la mentira de Abraham, el pecado de David, la idolatría de Salomón. Que la Biblia cuente algo no significa que lo apruebe. A veces el narrador lo dice expresamente; otras veces lo deja ver por las consecuencias. Pablo enseña a leer así la historia de Israel en el desierto: «estas cosas sucedieron como ejemplos para nosotros, para que no codiciemos cosas malas, como ellos codiciaron» (1 Co 10:6).',
        { h: 'Los relatos también enseñan doctrina' },
        'Algunos intérpretes sostienen que los relatos solo describen lo que pasó y nunca establecen enseñanza para la iglesia. Eso no hace justicia a autores como Lucas, que escribe historia con intención teológica. Cuando un hecho se repite de manera intencional en el relato y el resto de la Escritura lo confirma, el patrón enseña. En Hechos, el Espíritu Santo desciende sobre creyentes en Jerusalén, en casa de Cornelio y en Éfeso, y cada vez se registra que hablaron en lenguas (Hch 2:4; 10:46; 19:6). Lucas muestra así lo que Pedro llama «la promesa» para todos los que el Señor llame (Hch 2:39).',
        { posturas: {
          titulo: '¿Los relatos de Hechos enseñan doctrina?',
          a: { n: 'Solo describen', t: 'Algunos evangélicos sostienen que la narrativa solo informa lo ocurrido, y que la doctrina debe basarse únicamente en los textos de enseñanza directa, como las cartas.' },
          b: { n: 'Describen y enseñan', t: 'Otros entienden que Lucas es historiador y teólogo, y que los patrones repetidos e intencionales del relato enseñan a la iglesia, sobre todo cuando las cartas los confirman.' },
          c: 'Este recurso sigue la segunda lectura. La narrativa enseña cuando un patrón se repite con intención y concuerda con el resto de la Escritura; un detalle aislado, en cambio, no basta para fijar una norma. Por eso el bautismo en el Espíritu Santo, con la evidencia de hablar en otras lenguas, se enseña a partir del patrón de Hechos y de la promesa que abarca a todas las generaciones (Hch 2:39).'
        } },
        { ir: { t: 'Abrir el estudio de Hechos', a: '../../hechos/' } }
      ],
      pensar: '¿Con qué personaje de un relato bíblico te identificas más? ¿Qué te enseña Dios a través de su historia, en lo que hizo bien y en lo que hizo mal?'
    },
    {
      id: 'ley', n: 'La ley', ref: 'Mateo 5:17-18; Gálatas 3:24-25; Romanos 10:4; 13:10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir. Porque de cierto os digo que hasta que pasen el cielo y la tierra, ni una jota ni una tilde pasará de la ley, hasta que todo se haya cumplido.', ref: 'Mateo 5:17-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres aspectos de la ley de Moisés',
          cab: ['Aspecto', 'Ejemplos', 'En Cristo'],
          filas: [
            ['Moral', '«No matarás» (Éx 20:13); amar al prójimo', 'Se reafirma en el Nuevo Testamento y se cumple por el amor (Ro 13:10)'],
            ['Ceremonial', 'Sacrificios, fiestas, purificaciones, alimentos', 'Era sombra de lo que había de venir; se cumple en Cristo (He 10:1)'],
            ['Civil', 'Leyes del gobierno de Israel como nación', 'No rige para la iglesia, pero revela principios de justicia (Dt 22:8)']
          ],
          nota: 'La división es una ayuda para estudiar; la ley se dio como un todo a Israel, y Cristo la cumplió entera.'
        } }
      ],
      texto: [
        'Muchos lectores se detienen en Levítico: sacrificios, enfermedades de la piel, prohibiciones de mezclar telas (Lv 19:19). ¿Qué hacer con esas leyes? La respuesta empieza con Jesús: «No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17). La ley no se descarta ni se lee como si nada hubiera pasado: se lee a la luz de Cristo, que la cumplió.',
        { h: 'La ley se dio a Israel en el pacto del Sinaí' },
        'La ley de Moisés fue el reglamento del pacto entre Dios e Israel, dado después de la liberación de Egipto. No era un camino para ganarse la salvación, sino la forma de vida de un pueblo ya redimido. Pablo explica que fue como un ayo, un tutor, «para llevarnos a Cristo, a fin de que fuésemos justificados por la fe. Pero venida la fe, ya no estamos bajo ayo» (Gá 3:24-25). El creyente no está bajo el pacto mosaico, sino bajo el nuevo pacto.',
        { h: 'Cómo leer una ley' },
        'Ayuda distinguir tres aspectos. Las leyes morales reflejan el carácter de Dios y se reafirman en el Nuevo Testamento: no matar, no adulterar, no robar, amar al prójimo. Las ceremoniales (sacrificios, fiestas, alimentos puros e impuros, purificaciones) eran figura de lo que había de venir y se cumplen en Cristo. Las civiles regían a Israel como nación y no se aplican tal cual a la iglesia, pero revelan principios permanentes. La ley que obligaba a poner una baranda en la azotea de la casa (Dt 22:8) enseña a cuidar la vida del prójimo; hoy se aplica, por ejemplo, en la seguridad de un hogar o de un lugar de trabajo.',
        'Leída así, la ley es un tesoro. Revela la santidad de Dios, muestra el pecado, anuncia a Cristo y enseña cómo amar al prójimo. «El cumplimiento de la ley es el amor» (Ro 13:10).',
        { ejercicio: {
          pregunta: '¿Por qué los creyentes de hoy no ofrecen los sacrificios de animales de Levítico?',
          opciones: [
            { t: 'Porque esas leyes fueron un error que Dios corrigió después.', ok: false, por_que: 'Dios mismo los mandó. No fueron un error, sino una figura con un propósito.' },
            { t: 'Porque eran sombra de lo que había de venir y se cumplieron en el sacrificio de Cristo.', ok: true, por_que: 'Hebreos 10:1 llama a la ley sombra de los bienes venideros; Cristo entró una vez para siempre con su propia sangre (Hebreos 9:12).' },
            { t: 'Porque ya no hay un templo en Jerusalén y no se pueden ofrecer.', ok: false, por_que: 'Es un dato histórico cierto, pero no es la razón bíblica: aunque hubiera templo, el sacrificio de Cristo es suficiente y definitivo.' }
          ],
          explicacion: 'La ley ceremonial no se anula: se cumple. Leerla bien es descubrir cómo cada sacrificio anunciaba la obra de Cristo.'
        } },
        { ir: { t: 'Abrir El sacerdocio en Israel', a: '../../sacerdocio/' } }
      ],
      pensar: 'Pablo dice que la ley fue un ayo que nos lleva a Cristo (Gá 3:24). ¿Qué te enseña la santidad de la ley sobre tu necesidad de la gracia?'
    },
    {
      id: 'poesia-sabiduria', n: 'La poesía y la sabiduría', ref: 'Salmo 19:1; 23:1; Proverbios 22:6; 26:4-5; Job 42:7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Nunca respondas al necio de acuerdo con su necedad, Para que no seas tú también como él. Responde al necio como merece su necedad, Para que no se estime sabio en su propia opinión.', ref: 'Proverbios 26:4-5' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El paralelismo hebreo',
          cab: ['Tipo', 'Qué hace', 'Ejemplo'],
          filas: [
            ['Sinónimo', 'La segunda línea repite la idea con otras palabras', 'Los cielos cuentan la gloria de Dios / el firmamento anuncia la obra de sus manos (Sal 19:1)'],
            ['Antitético', 'La segunda línea dice lo contrario', 'El hijo sabio alegra al padre / el hijo necio es tristeza de su madre (Pr 10:1)'],
            ['Progresivo', 'La segunda línea completa o avanza la idea', 'Jehová es mi pastor / nada me faltará (Sal 23:1)']
          ]
        } }
      ],
      texto: [
        'Un tercio del Antiguo Testamento está escrito en poesía. La poesía hebrea no se basa en la rima, sino en el paralelismo: dos o más líneas que se responden. «Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos» (Sal 19:1). Reconocer el paralelismo evita errores: la segunda línea no suele agregar un hecho distinto, sino repetir, contrastar o completar la primera.',
        { h: 'Imágenes que se sienten' },
        'La poesía habla con imágenes: Dios como pastor, roca, escudo o águila que cubre con sus alas (Sal 91:4). Las imágenes comunican verdades reales sobre Dios, pero no se leen como descripciones técnicas. También expresan emociones intensas, incluso queja, angustia o deseo de justicia. Los Salmos enseñan a orar con honestidad: no todo lo que dice un salmista es un modelo de conducta, pero todo es inspirado y enseña cómo llevar el corazón a Dios.',
        { h: 'Proverbios: principios, no garantías' },
        'Los proverbios son frases breves que resumen cómo funciona normalmente la vida bajo el gobierno de Dios. Son verdaderos, pero generales. «Instruye al niño en su camino, Y aun cuando fuere viejo no se apartará de él» (Pr 22:6) enseña el valor de la formación temprana; no es una promesa que garantice que ningún hijo criado en el Señor se apartará jamás. Leerlo como garantía ha cargado de culpa injusta a muchos padres fieles.',
        'El mismo libro pone dos proverbios seguidos que parecen opuestos: «Nunca respondas al necio de acuerdo con su necedad» y «Responde al necio como merece su necedad» (Pr 26:4-5). No es una contradicción: la sabiduría consiste en discernir qué situación pide cada respuesta.',
        { h: 'Job y Eclesiastés: leer el libro completo' },
        'En Job, los amigos dicen cosas que suenan piadosas, pero al final Dios declara que no hablaron de él «lo recto, como mi siervo Job» (Job 42:7). Citar a Elifaz como si fuera la enseñanza de Dios es un error. Eclesiastés, a su vez, examina la vida «debajo del sol», y su conclusión llega al final del libro: «Teme a Dios, y guarda sus mandamientos» (Ec 12:13). En estos libros, el sentido se descubre leyendo el conjunto.',
        { ejercicio: {
          pregunta: 'Unos padres criaron a su hijo en el Señor, y hoy él está lejos de Dios. ¿Qué enseña correctamente Proverbios 22:6 en esa situación?',
          opciones: [
            { t: 'Que los padres fallaron, porque la promesa es segura para quien instruye bien.', ok: false, por_que: 'Esto lee el proverbio como una garantía absoluta. Los proverbios expresan principios generales, no promesas sin excepción.' },
            { t: 'Que la formación temprana deja una huella profunda, y los padres pueden seguir orando con esperanza.', ok: true, por_que: 'El proverbio afirma el valor duradero de la instrucción; no anula la responsabilidad personal del hijo ni la gracia de Dios que sigue obrando.' },
            { t: 'Que el proverbio no se aplica a nuestra época.', ok: false, por_que: 'El principio sigue vigente. El error no está en aplicarlo, sino en convertirlo en una garantía.' }
          ],
          explicacion: 'Reconocer el género sapiencial protege de conclusiones injustas: los proverbios enseñan cómo funciona la vida en general bajo Dios, y requieren sabiduría para aplicarse.'
        } }
      ],
      pensar: 'Los salmistas oraron con total honestidad, incluso en la angustia. ¿Qué salmo podría darte palabras para orar hoy por lo que estás viviendo?'
    },
    {
      id: 'profecia', n: 'La profecía', ref: 'Jeremías 18:7-8; Jonás 3:4, 10; Isaías 61:1-2; Lucas 4:16-21',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-montes.svg', alt: 'Un observador mira dos cumbres que parecen juntas a la distancia; de lado se ve el valle que las separa: la primera venida de Cristo y su venida en gloria, con la era de la iglesia en medio', pie: 'La perspectiva profética: dos cumbres que de lejos parecen una.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres; Me ha enviado a sanar a los quebrantados de corazón; A pregonar libertad a los cautivos, Y vista a los ciegos; A poner en libertad a los oprimidos; A predicar el año agradable del Señor. Y enrollando el libro, lo dio al ministro, y se sentó; y los ojos de todos en la sinagoga estaban fijos en él. Y comenzó a decirles: Hoy se ha cumplido esta Escritura delante de vosotros.', ref: 'Lucas 4:18-21' }
      ],
      texto: [
        'Cuando pensamos en profecía, solemos pensar en anuncios del futuro. Pero la mayor parte de lo que dijeron los profetas fue un llamado a su propia generación: volver a Dios, abandonar la idolatría, practicar la justicia y cuidar al pobre. Profetizar era, ante todo, proclamar la palabra de Dios al pueblo; el anuncio del futuro servía a ese llamado. Por eso, al leer un profeta, la primera pregunta es a quién habló y en qué situación.',
        { h: 'Profecías cumplidas, por cumplirse y condicionales' },
        'Algunas profecías ya se cumplieron, como el regreso del exilio o el nacimiento de Jesús en Belén. Otras esperan su cumplimiento, como la venida de Cristo en gloria. Y algunos anuncios de juicio eran condicionales, aunque no lo dijeran expresamente. Jonás predicó: «De aquí a cuarenta días Nínive será destruida» (Jon 3:4). La ciudad se arrepintió, y Dios no la destruyó (Jon 3:10). Jeremías explica el principio: si un pueblo se convierte de su maldad, Dios se arrepiente del mal que había anunciado (Jer 18:7-8).',
        { h: 'Las dos cumbres' },
        'Los profetas a veces vieron en una sola visión acontecimientos que estaban separados por siglos, como quien mira dos montañas a lo lejos y las ve juntas, sin percibir el valle que hay entre ellas. Isaías anunció al Ungido que traería «el año de la buena voluntad de Jehová, y el día de venganza del Dios nuestro» (Is 61:2). En la sinagoga de Nazaret, Jesús leyó ese pasaje y se detuvo antes del día de venganza; luego dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21). La primera parte se cumplió en su primera venida; la segunda espera su regreso.',
        'Por eso la profecía se lee con humildad y con el resto de la Escritura. El Nuevo Testamento nos muestra cómo se cumplieron muchas profecías, y nos enseña a esperar las que faltan sin fijar fechas, porque «del día y la hora nadie sabe» (Mt 24:36).',
        { ejercicio: {
          pregunta: '¿Por qué Jesús se detuvo en Isaías 61:2 sin leer «el día de venganza del Dios nuestro»?',
          opciones: [
            { t: 'Porque esa parte de la profecía ya no tenía validez.', ok: false, por_que: 'La Escritura no pierde validez. El juicio anunciado se cumplirá en su tiempo.' },
            { t: 'Porque en su primera venida cumplía la parte de gracia, y el juicio corresponde a su segunda venida.', ok: true, por_que: 'Jesús dijo que «hoy» se cumplía lo que había leído. Lo demás pertenece a su venida en gloria: dos cumbres de una misma profecía.' },
            { t: 'Porque el rollo de Nazaret estaba incompleto.', ok: false, por_que: 'No hay indicio de eso en el texto. La pausa de Jesús es intencional y significativa.' }
          ],
          explicacion: 'La perspectiva profética ayuda a entender por qué algunas profecías se cumplen en partes, separadas por el tiempo de la iglesia.'
        } },
        { ir: { t: 'Abrir Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'La mayor parte de la profecía llamaba a la gente a volver a Dios en su propio presente. ¿Qué llamado de los profetas sigue siendo urgente para la iglesia de hoy?'
    },
    {
      id: 'evangelios-parabolas', n: 'Los evangelios y las parábolas', ref: 'Lucas 15:1-3; 18:1; Mateo 13:10-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Se acercaban a Jesús todos los publicanos y pecadores para oírle, y los fariseos y los escribas murmuraban, diciendo: Este a los pecadores recibe, y con ellos come. Entonces él les refirió esta parábola, diciendo:', ref: 'Lucas 15:1-3' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Claves para una parábola',
          cab: ['Clave', 'Ejemplo'],
          filas: [
            ['Busca la ocasión', 'Lucas 15: los fariseos murmuran porque Jesús recibe a pecadores'],
            ['Busca la explicación del propio texto', 'Lucas 18:1: la viuda insistente enseña a orar siempre'],
            ['Identifica el punto central', 'Dios se alegra por un pecador que se arrepiente (Lc 15:7)'],
            ['No fuerces cada detalle', 'Las algarrobas del hijo pródigo no simbolizan una doctrina'],
            ['Mira la reacción esperada', '¿Con quién se identifica el oyente? Con el hermano mayor']
          ]
        } }
      ],
      texto: [
        'Los cuatro evangelios no son biografías modernas, sino cuatro retratos de Jesús escritos por inspiración, cada uno con su propósito y su público. Mateo escribe pensando en lectores judíos y muestra el cumplimiento de las profecías; Marcos presenta al Siervo en acción; Lucas, al Salvador de todos; Juan, al Hijo eterno, para que creamos y tengamos vida (Jn 20:31). Cuando un mismo hecho aparece en varios evangelios, comparar los relatos enriquece la comprensión, como cuatro testigos que miran desde ángulos distintos.',
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } },
        { h: 'Las parábolas' },
        'Jesús enseñó mucho por parábolas: relatos breves tomados de la vida diaria que comunican una verdad del reino. Revelaban el misterio del reino a los que tenían oídos para oír, y lo velaban a los que no querían creer (Mt 13:10-11). Para interpretarlas, lo primero es buscar la ocasión. Las tres parábolas de Lucas 15 (la oveja, la moneda y el hijo perdidos) responden a los fariseos que murmuraban porque Jesús recibía a los pecadores (Lc 15:2). El punto central es el gozo de Dios por el pecador que se arrepiente, y la parábola termina con el hermano mayor afuera, retratando a los mismos fariseos.',
        'A veces el propio evangelio da la clave: «les refirió Jesús una parábola sobre la necesidad de orar siempre, y no desmayar» (Lc 18:1). Y cuando Jesús explica una parábola, como la del sembrador (Mt 13:18-23), su explicación es la norma.',
        { h: 'No alegorizar cada detalle' },
        'Durante siglos se interpretó el buen samaritano como una alegoría: el hombre herido es Adán, Jerusalén el paraíso, los ladrones el diablo, el mesón la iglesia y las dos monedas los sacramentos. Puede sonar edificante, pero Jesús nunca dijo eso: la parábola responde a la pregunta «¿quién es mi prójimo?» y termina con un mandato claro: «Ve, y haz tú lo mismo» (Lc 10:37). Una parábola suele tener un punto central, a veces dos o tres ligados a sus personajes principales; los demás detalles dan vida al relato.',
        { ejercicio: {
          pregunta: 'En Lucas 15, ¿a quién representa principalmente el hijo mayor de la parábola?',
          opciones: [
            { t: 'A los ángeles, que nunca se apartaron de Dios.', ok: false, por_que: 'Nada en el contexto apunta a los ángeles. La parábola responde a personas concretas que estaban presentes.' },
            { t: 'A los fariseos y escribas que murmuraban porque Jesús recibía a los pecadores.', ok: true, por_que: 'La ocasión (Lucas 15:1-2) lo muestra: el hermano mayor se queja como ellos y se niega a entrar a la fiesta.' },
            { t: 'A los creyentes fieles, que merecen más que los recién convertidos.', ok: false, por_que: 'El hermano mayor no es presentado como modelo: su actitud es la que Jesús confronta.' }
          ],
          explicacion: 'La ocasión de una parábola es la mejor llave para entenderla. Jesús la contó a alguien, por algo.'
        } }
      ],
      pensar: 'En la parábola de Lucas 15, el hermano mayor se queda afuera de la fiesta. ¿Hay alguna persona cuyo regreso a Dios te ha costado celebrar?'
    },
    {
      id: 'cartas', n: 'Las cartas', ref: '1 Corintios 1:2; 1 Corintios 7:1; Romanos 16:16',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Claves para leer una carta',
          cab: ['Clave', 'Qué hacer'],
          filas: [
            ['Leerla entera', 'Una carta se lee de una sentada; así la oyeron las iglesias'],
            ['Reconstruir la ocasión', '¿Qué problema o pregunta motiva la carta? (1 Co 7:1: «En cuanto a las cosas de que me escribisteis»)'],
            ['Seguir el argumento', 'Doctrina y práctica suelen ir en ese orden (Ro 1–11 y 12–16; Ef 1–3 y 4–6)'],
            ['Separar principio y forma', 'El principio permanece; la forma cultural puede variar'],
            ['Notar el destinatario', '¿Una iglesia, una persona, varias iglesias?']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'a la iglesia de Dios que está en Corinto, a los santificados en Cristo Jesús, llamados a ser santos con todos los que en cualquier lugar invocan el nombre de nuestro Señor Jesucristo, Señor de ellos y nuestro:', ref: '1 Corintios 1:2' }
      ],
      texto: [
        'Veintiún libros del Nuevo Testamento son cartas. Pablo, Pedro, Santiago, Juan y Judas escribieron a iglesias y a personas para enseñar, corregir, animar y responder preguntas. Son cartas reales, con saludos, noticias, pedidos y despedidas. A la vez son Escritura inspirada, dirigidas «a la iglesia de Dios que está en Corinto… con todos los que en cualquier lugar invocan el nombre de nuestro Señor Jesucristo» (1 Co 1:2).',
        { h: 'Leer una conversación a medias' },
        'Leer una carta del Nuevo Testamento es como escuchar un lado de una conversación telefónica: oímos lo que dice el apóstol, pero tenemos que deducir lo que le habían preguntado o informado. En 1 Corintios, Pablo responde a cosas que le contaron los de Cloé (1 Co 1:11) y a preguntas que le escribieron: «En cuanto a las cosas de que me escribisteis» (1 Co 7:1). Reconstruir esa situación ayuda a entender por qué el apóstol insiste en ciertos temas y cómo aplicarlos hoy.',
        'También conviene leer la carta completa, de una sola vez, como la escucharon las iglesias cuando se leía en voz alta. Muchas cartas siguen un orden: primero la doctrina y luego la práctica. En Efesios, los capítulos 1 a 3 exponen lo que Dios hizo en Cristo, y los capítulos 4 a 6 explican cómo vivir en consecuencia.',
        { h: 'Principio permanente y forma cultural' },
        'Algunas instrucciones se expresan en formas propias de esa cultura. Pablo pide: «Saludaos los unos a los otros con ósculo santo» (Ro 16:16). El principio, el afecto fraternal sincero y puro entre los hermanos, es permanente; la forma (el beso como saludo) varía según los pueblos, y muchas iglesias lo expresan con un abrazo o un apretón de manos. Para distinguir principio y forma, hay que preguntarse si el autor basa la instrucción en la creación, en el carácter de Dios o en la obra de Cristo (lo que indica algo permanente), o en una costumbre de su tiempo. Ante la duda, la actitud sabia es la humildad: no descartar ligeramente un mandato como «cultural» ni imponer como mandato lo que es solo una forma.',
        { ejercicio: {
          pregunta: 'Pablo manda saludarse «con ósculo santo» (Romanos 16:16). ¿Cómo se aplica mejor hoy?',
          opciones: [
            { t: 'Es obligatorio que todos los creyentes se saluden con un beso en cada reunión.', ok: false, por_que: 'Esto confunde la forma con el principio. El texto no busca imponer un gesto de una cultura a todas las demás.' },
            { t: 'Ya no tiene aplicación porque era una costumbre antigua.', ok: false, por_que: 'La forma era cultural, pero el principio sigue vigente: todo el texto es útil para enseñar.' },
            { t: 'Los hermanos deben saludarse con afecto sincero y puro, con el gesto propio de su cultura.', ok: true, por_que: 'El principio permanente es el amor fraternal expresado con santidad; la forma puede variar.' }
          ],
          explicacion: 'Distinguir principio y forma permite obedecer de verdad el texto, sin convertir costumbres en mandamientos ni descartar mandamientos como costumbres.'
        } }
      ],
      pensar: 'Si escribieras una carta a tu congregación, ¿qué problema o pregunta la motivaría? Piensa en eso al leer la próxima carta del Nuevo Testamento.'
    },
    {
      id: 'apocaliptica', n: 'La literatura apocalíptica', ref: 'Daniel 7:17; Apocalipsis 1:1, 20; 5:5-6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y uno de los ancianos me dijo: No llores. He aquí que el León de la tribu de Judá, la raíz de David, ha vencido para abrir el libro y desatar sus siete sellos. Y miré, y vi que en medio del trono y de los cuatro seres vivientes, y en medio de los ancianos, estaba en pie un Cordero como inmolado, que tenía siete cuernos, y siete ojos, los cuales son los siete espíritus de Dios enviados por toda la tierra.', ref: 'Apocalipsis 5:5-6' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Símbolos que el mismo texto explica',
          cab: ['Símbolo', 'Explicación', 'Pasaje'],
          filas: [
            ['Cuatro grandes bestias', 'Cuatro reyes o reinos', 'Daniel 7:17'],
            ['Carnero de dos cuernos', 'Los reyes de Media y de Persia', 'Daniel 8:20'],
            ['Siete estrellas', 'Los ángeles de las siete iglesias', 'Apocalipsis 1:20'],
            ['Siete candeleros', 'Las siete iglesias', 'Apocalipsis 1:20'],
            ['El gran dragón', 'La serpiente antigua, el diablo y Satanás', 'Apocalipsis 12:9'],
            ['Las muchas aguas', 'Pueblos, muchedumbres, naciones y lenguas', 'Apocalipsis 17:15']
          ]
        } }
      ],
      texto: [
        'Daniel y Apocalipsis contienen un tipo de literatura llamado apocalíptico, de la palabra griega que significa «revelación». Se caracteriza por visiones, ángeles que explican, números simbólicos, animales con rasgos extraños y un mensaje central: Dios gobierna la historia y su reino triunfará sobre todos los poderes del mal. Juan dice que Dios declaró su revelación «enviándola por medio de su ángel» (Ap 1:1): son mensajes comunicados por señales.',
        { h: 'Símbolos de realidades reales' },
        'Que un texto use símbolos no significa que hable de cosas imaginarias. Los símbolos apuntan a personas, reinos y acontecimientos reales. La regla más importante es buscar primero la explicación en el mismo texto. Daniel ve cuatro bestias, y el ángel le dice: «Estas cuatro grandes bestias son cuatro reyes que se levantarán en la tierra» (Dn 7:17). Juan ve siete estrellas y siete candeleros, y se le explica que son los ángeles de las siete iglesias y las siete iglesias (Ap 1:20).',
        'La segunda regla es buscar el trasfondo en el Antiguo Testamento. Apocalipsis está lleno de imágenes tomadas de Éxodo, Ezequiel, Daniel y Zacarías. Las plagas de las trompetas recuerdan las de Egipto; la mujer y el dragón recuerdan la promesa de Génesis 3:15.',
        { h: 'El León que es Cordero' },
        'Un ejemplo muestra el poder de este lenguaje. En Apocalipsis 5, un anciano anuncia que el León de la tribu de Judá ha vencido; Juan mira y ve «un Cordero como inmolado» (Ap 5:5-6). Las dos imágenes describen a Cristo: el Rey vencedor que triunfó por medio de su muerte. Ninguna fotografía podría decir tanto en tan pocas palabras.',
        'Leer la apocalíptica con estas reglas protege de dos extremos: convertir todo en símbolos sin relación con hechos futuros, y leer cada detalle como si fuera una descripción literal de la televisión de mañana. El texto enseña acontecimientos reales con un lenguaje simbólico, y su propósito es dar esperanza y llamar a la fidelidad.',
        { ejercicio: {
          pregunta: 'Al encontrar un símbolo en Apocalipsis, ¿qué conviene hacer primero?',
          opciones: [
            { t: 'Buscar si el mismo texto o el contexto cercano explica el símbolo.', ok: true, por_que: 'Muchas veces el propio libro da la clave, como en Apocalipsis 1:20 o 17:15.' },
            { t: 'Relacionarlo con la noticia internacional más reciente.', ok: false, por_que: 'Este método ha producido muchas interpretaciones fallidas. El primer paso es dejar que la Biblia explique la Biblia.' },
            { t: 'Concluir que no tiene sentido real y pasarlo por alto.', ok: false, por_que: 'Los símbolos apocalípticos apuntan a realidades. Saltarlos es perder parte de la revelación.' }
          ],
          explicacion: 'El orden es: explicación del mismo texto, trasfondo del Antiguo Testamento, y enseñanza del resto de la Escritura. Las noticias pueden ilustrar, pero no interpretan.'
        } },
        { ir: { t: 'Abrir el estudio de Apocalipsis', a: '../../apocalipsis/' } }
      ],
      pensar: 'Apocalipsis muestra al León de Judá como un Cordero inmolado. ¿Qué te dice esa imagen sobre la manera en que Dios vence el mal?'
    }
  ];

  const errores = [
    {
      id: 'versiculo-suelto', n: 'El versículo suelto', ref: 'Mateo 4:5-7; Salmo 91:11-12; 2 Corintios 3:6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces el diablo le llevó a la santa ciudad, y le puso sobre el pináculo del templo, y le dijo: Si eres Hijo de Dios, échate abajo; porque escrito está: A sus ángeles mandará acerca de ti, y, En sus manos te sostendrán, Para que no tropieces con tu pie en piedra. Jesús le dijo: Escrito está también: No tentarás al Señor tu Dios.', ref: 'Mateo 4:5-7' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Versículos que suelen citarse sueltos',
          cab: ['Uso común', 'Lo que dice el contexto'],
          filas: [
            ['«La letra mata» (2 Co 3:6): no hay que estudiar tanto la Biblia', 'Pablo contrasta el pacto de la ley escrita en piedra con el nuevo pacto del Espíritu (2 Co 3:3-11); no habla del estudio'],
            ['«No manejes, ni gustes, ni aun toques» (Col 2:21): un mandamiento de abstinencia', 'Pablo cita esas reglas humanas para rechazarlas (Col 2:22-23)'],
            ['«A sus ángeles mandará» (Sal 91:11): Dios me librará aunque me exponga al peligro', 'Satanás usó así este salmo, y Jesús respondió con otra Escritura (Mt 4:6-7)']
          ]
        } }
      ],
      texto: [
        'El primero en citar la Biblia fuera de contexto fue el diablo. En la tentación, llevó a Jesús al pináculo del templo y le dijo: «échate abajo; porque escrito está: A sus ángeles mandará acerca de ti» (Mt 4:6). La cita era casi exacta, pero el uso era falso: el Salmo 91 promete la protección de Dios al que confía en él en los peligros de su camino, no al que se lanza al vacío para ponerlo a prueba. Jesús no discutió la cita; respondió con otra: «Escrito está también: No tentarás al Señor tu Dios» (Mt 4:7).',
        'Ese «escrito está también» es una lección de interpretación. Un versículo no se entiende aislado de lo que la Escritura dice en su contexto y en el resto de la Biblia.',
        { h: 'Un ejemplo frecuente' },
        'Algunos citan «la letra mata, mas el espíritu vivifica» (2 Co 3:6) para desconfiar del estudio bíblico, como si estudiar con cuidado apagara el Espíritu. Pero en ese capítulo Pablo compara dos pactos: el antiguo, escrito en tablas de piedra, que condenaba al pecador, y el nuevo, en el que el Espíritu escribe la ley de Dios en el corazón (2 Co 3:3, 7-9). La «letra» es la ley que no puede dar vida por sí misma; nada tiene que ver con estudiar la Biblia. El mismo Pablo pidió a Timoteo sus libros y pergaminos (2 Ti 4:13).',
        { h: 'Cómo evitarlo' },
        'La protección es sencilla y exige disciplina: leer siempre el párrafo completo, preguntarse quién habla, a quién y por qué, y comparar con lo que la Biblia enseña en otros lugares. Las tarjetas con versículos, los mensajes en el celular y las imágenes en redes sociales son útiles para recordar la Palabra, pero muestran el versículo sin su contexto. Conviene volver a la Biblia y leerlo en su lugar.',
        { ejercicio: {
          pregunta: '¿Por qué el uso que hizo el diablo del Salmo 91 era falso, si la cita era casi exacta?',
          opciones: [
            { t: 'Porque el Salmo 91 no se aplica a Jesús.', ok: false, por_que: 'El salmo habla de la protección de Dios al que confía en él; Jesús es el que confía perfectamente. El problema no estaba en el destinatario.' },
            { t: 'Porque usaba una promesa de protección para justificar que Jesús tentara a Dios exponiéndose sin necesidad.', ok: true, por_que: 'La promesa es para quien anda en los caminos de Dios, no para quien provoca a Dios. Jesús lo mostró con otra Escritura (Deuteronomio 6:16).' },
            { t: 'Porque el diablo citó una traducción distinta.', ok: false, por_que: 'La diferencia de palabras es mínima. El error estaba en el uso del texto, no en las palabras.' }
          ],
          explicacion: 'Se puede citar la Biblia con exactitud y aun así usarla mal. El contexto y el resto de la Escritura protegen de ese error.'
        } }
      ],
      pensar: 'Jesús respondió «Escrito está también» (Mt 4:7). ¿Conoces la Biblia lo suficiente para reconocer cuando alguien la usa fuera de contexto?'
    },
    {
      id: 'eisegesis', n: 'Leer lo que uno quiere', ref: '2 Pedro 3:16-17; Mateo 22:29; Hechos 17:11',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-exegesis.svg', alt: 'Dos flechas opuestas: la exégesis saca el sentido desde el texto hacia el lector; la eiségesis mete en el texto las ideas del lector', pie: 'Exégesis y eiségesis.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'casi en todas sus epístolas, hablando en ellas de estas cosas; entre las cuales hay algunas difíciles de entender, las cuales los indoctos e inconstantes tuercen, como también las otras Escrituras, para su propia perdición. Así que vosotros, oh amados, sabiéndolo de antemano, guardaos, no sea que arrastrados por el error de los inicuos, caigáis de vuestra firmeza.', ref: '2 Pedro 3:16-17' }
      ],
      texto: [
        'Dos palabras griegas describen dos maneras de leer. La exégesis significa «sacar afuera»: extraer del texto el sentido que tiene. La eiségesis significa «meter adentro»: poner en el texto ideas que el lector ya traía. La primera escucha a Dios; la segunda usa la Biblia como respaldo de lo que uno ya pensaba.',
        { h: 'Cómo se cuela la eiségesis' },
        'Nadie se propone torcer la Escritura. La eiségesis entra de manera sutil: cuando buscamos versículos para apoyar una idea que ya decidimos, cuando un pasaje nos incomoda y le buscamos otro sentido, cuando una enseñanza popular o una experiencia fuerte pesa más que el texto, o cuando leemos con las preguntas de nuestra época en lugar de las del autor. Pedro advierte que los indoctos e inconstantes tuercen las Escrituras «para su propia perdición», y añade: «guardaos, no sea que arrastrados por el error de los inicuos, caigáis de vuestra firmeza» (2 P 3:16-17).',
        'Un ejemplo: algunos enseñan que la fe sirve para obtener riqueza y salud garantizadas, y citan versículos de prosperidad sin su contexto. Pero el Nuevo Testamento también muestra a apóstoles fieles con hambre, frío y enfermedad (2 Co 11:27; Fil 4:12; 2 Ti 4:20). Una enseñanza que necesita esconder parte de la Escritura para sostenerse nace de la eiségesis.',
        { h: 'El remedio: humildad y método' },
        'Nadie lee sin presupuestos; todos llegamos al texto con una historia, una cultura y una tradición. El remedio no es fingir que no los tenemos, sino someterlos al texto. El método ayuda: observar antes de concluir, leer el contexto, comparar con toda la Escritura, consultar a maestros fieles y estar dispuestos a cambiar de opinión. Jesús dijo a los saduceos: «Erráis, ignorando las Escrituras y el poder de Dios» (Mt 22:29). El error nace de no conocer bien la Palabra o de no creer en el Dios que habla en ella.',
        { ejercicio: {
          pregunta: '¿Cuál de estas situaciones es un caso de eiségesis?',
          opciones: [
            { t: 'Un creyente estudia un pasaje que lo confronta y cambia de opinión sobre un tema.', ok: false, por_que: 'Eso es justamente dejar que el texto hable y corrija. Es el fruto de la exégesis.' },
            { t: 'Un predicador decide el tema de su mensaje y busca versículos que parezcan apoyarlo, sin revisar su contexto.', ok: true, por_que: 'La idea va primero y el texto se usa como respaldo. Es meter en la Biblia lo que uno ya pensaba.' },
            { t: 'Un grupo compara cuatro traducciones de un versículo difícil.', ok: false, por_que: 'Comparar traducciones es una buena herramienta para entender mejor el texto.' }
          ],
          explicacion: 'Predicar sobre un tema es legítimo, siempre que cada texto citado diga en su contexto lo que se afirma. La pregunta es quién manda: el texto o la idea previa.'
        } }
      ],
      pensar: '¿Hay alguna enseñanza que crees firmemente y que nunca has contrastado con la Escritura en su contexto? ¿Estás dispuesto a hacerlo?'
    },
    {
      id: 'alegoria', n: 'Alegorizar y la tipología', ref: 'Juan 3:14-15; Números 21:8-9; Hebreos 8:5; 9:11-12; Gálatas 4:24',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tipología y alegoría',
          cab: ['', 'Tipología', 'Alegoría'],
          filas: [
            ['Qué hace', 'Ve en personas, hechos o instituciones reales una figura de lo que Dios cumplirá', 'Busca significados ocultos en los detalles del texto'],
            ['Base', 'El mismo Nuevo Testamento la indica o la confirma', 'La imaginación del intérprete'],
            ['La historia', 'Se respeta: el hecho ocurrió y además anuncia algo', 'Se deja de lado: importa el significado escondido'],
            ['Ejemplo', 'La serpiente de bronce y la cruz (Jn 3:14)', 'Las dos monedas del samaritano como los sacramentos'],
            ['Control', 'Correspondencias claras y limitadas', 'Sin límites: cada intérprete ve algo distinto']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.', ref: 'Juan 3:14-15' }
      ],
      texto: [
        'En los primeros siglos de la iglesia, algunos maestros enseñaron que el sentido literal era solo la cáscara del texto, y que lo valioso era el sentido espiritual escondido en cada detalle. Así nació la lectura alegórica: las cinco piedras de David podían ser los cinco libros de Moisés; el mesón del buen samaritano, la iglesia. Esa lectura parece profunda, pero deja la interpretación a merced de la imaginación de cada uno.',
        { h: 'La tipología legítima' },
        'La Biblia sí enseña que algunas personas, hechos e instituciones del Antiguo Testamento eran figuras de lo que Dios cumpliría en Cristo. A esto se le llama tipología. Jesús mismo dijo: «como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado» (Jn 3:14). La serpiente de bronce fue un hecho real (Nm 21:8-9) y, a la vez, una figura de la cruz: el que miraba con fe, vivía. Hebreos enseña que el tabernáculo y sus sacrificios eran «figura y sombra de las cosas celestiales» (He 8:5) y que Cristo entró con su propia sangre en el Lugar Santísimo (He 9:12).',
        'La diferencia con la alegoría es clara. La tipología respeta la historia: el hecho ocurrió y además anuncia algo. Y tiene un control: el Nuevo Testamento la indica o la confirma, y la correspondencia es clara, no forzada en cada detalle.',
        { h: '¿Y Gálatas 4?' },
        'Pablo dice de Agar y Sara: «Lo cual es una alegoría» (Gá 4:24). Pero no niega la historia de Génesis ni inventa sentidos ocultos en cada detalle: usa dos mujeres reales para ilustrar dos pactos, ante lectores que apelaban a Abraham. Es una aplicación apostólica e inspirada, no un permiso para alegorizar cualquier pasaje.',
        { ejercicio: {
          pregunta: '¿Cuál de estas lecturas es un ejemplo de tipología legítima y no de alegoría?',
          opciones: [
            { t: 'Las cinco piedras de David representan los cinco libros de Moisés.', ok: false, por_que: 'Ningún texto bíblico hace esa conexión. Es un significado oculto puesto por el intérprete.' },
            { t: 'Los sacrificios de Levítico anunciaban el sacrificio de Cristo.', ok: true, por_que: 'Hebreos 9–10 lo enseña expresamente: la ley era sombra de los bienes venideros, cumplidos en Cristo.' },
            { t: 'Los siete baños de Naamán en el Jordán son las siete virtudes cristianas.', ok: false, por_que: 'Es una correspondencia inventada. El relato de 2 Reyes 5 enseña la obediencia humilde y el poder de Dios, no una lista de virtudes.' }
          ],
          explicacion: 'La tipología se apoya en lo que la Escritura misma indica; la alegoría, en la imaginación del intérprete.'
        } },
        { ir: { t: 'Abrir El tabernáculo', a: '../../tabernaculo/' } }
      ],
      pensar: 'Jesús comparó su cruz con la serpiente de bronce: bastaba mirar con fe para vivir (Jn 3:14-15). ¿Qué significa para ti hoy «mirar» a Cristo?'
    },
    {
      id: 'pasaje-oscuro', n: 'Doctrina sobre un pasaje oscuro', ref: '1 Corintios 15:29; Deuteronomio 29:29',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'De otro modo, ¿qué harán los que se bautizan por los muertos, si en ninguna manera los muertos resucitan? ¿Por qué, pues, se bautizan por los muertos?', ref: '1 Corintios 15:29' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo tratar un pasaje difícil',
          cab: ['Paso', 'En 1 Corintios 15:29'],
          filas: [
            ['¿Cuál es el tema del pasaje?', 'La resurrección de los muertos (1 Co 15)'],
            ['¿Para qué menciona el autor el detalle?', 'Como argumento: aun esa práctica supone la resurrección'],
            ['¿Lo enseña o lo menciona?', 'Lo menciona; no lo manda ni lo aprueba'],
            ['¿Qué dice el resto de la Escritura?', 'La salvación es por la fe personal (Ef 2:8-9); nadie se bautiza por otro'],
            ['¿Qué queda incierto?', 'Qué hacían exactamente esas personas: no se puede saber con seguridad']
          ]
        } }
      ],
      texto: [
        '«¿Qué harán los que se bautizan por los muertos, si en ninguna manera los muertos resucitan?» (1 Co 15:29). Este versículo es uno de los más difíciles del Nuevo Testamento: hay más de treinta interpretaciones propuestas. Algunos grupos han construido sobre él la práctica de bautizarse en lugar de personas fallecidas, para que alcancen la salvación. Es un ejemplo claro de un error frecuente: edificar una doctrina sobre un pasaje oscuro.',
        { h: 'Lo que sí está claro' },
        'Aunque no sepamos con certeza qué hacían esas personas, varias cosas sí son claras. El tema del capítulo es la resurrección, no el bautismo. Pablo menciona la práctica como argumento: si los muertos no resucitan, aun lo que hacían algunos carecería de sentido. Pablo no dice «nosotros» ni «haced esto»: habla de «los que se bautizan». Y el resto del Nuevo Testamento enseña con claridad que la salvación es por la fe personal en Cristo, por gracia (Ef 2:8-9), y que después de la muerte viene el juicio (He 9:27). Ninguna interpretación de 1 Corintios 15:29 puede contradecir esa enseñanza.',
        { h: 'La regla' },
        'Una doctrina se edifica sobre lo que la Biblia enseña con claridad y en varios lugares, no sobre un versículo aislado, difícil o mencionado al pasar. Cuando un pasaje es oscuro, es mejor reconocer que no sabemos todo con certeza que inventar una enseñanza. «Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros» (Dt 29:29). Esto no es falta de fe, sino respeto por la Palabra: decir lo que dice y callar donde calla.',
        'Todas las doctrinas centrales de la fe cristiana (la Trinidad, la deidad de Cristo, la salvación por gracia, la resurrección, la obra del Espíritu Santo, la segunda venida) se enseñan en muchos pasajes claros. No dependen de un texto difícil.',
        { ejercicio: {
          pregunta: '¿Qué conclusión es la más fiel ante 1 Corintios 15:29?',
          opciones: [
            { t: 'La iglesia debe practicar el bautismo por los muertos, porque está en la Biblia.', ok: false, por_que: 'El versículo menciona una práctica; no la manda. Y una práctica así contradice la salvación por la fe personal.' },
            { t: 'No sabemos con certeza qué hacían esas personas, pero sí que Pablo argumenta a favor de la resurrección.', ok: true, por_que: 'Es reconocer lo oscuro sin perder lo claro: el punto del pasaje es la resurrección.' },
            { t: 'El versículo no pertenece a la Biblia original.', ok: false, por_que: 'Los manuscritos lo respaldan. Que sea difícil no significa que no sea parte de la Escritura.' }
          ],
          explicacion: 'La humildad ante lo oscuro protege de errores graves. La fe se edifica sobre lo que Dios reveló con claridad.'
        } }
      ],
      pensar: '¿Te cuesta decir «no sé con certeza qué significa este pasaje»? ¿Por qué esa humildad honra a Dios y protege a la iglesia?'
    },
    {
      id: 'promesas', n: '¿Esa promesa es para mí?', ref: 'Josué 1:1-3; Hechos 2:38-39; 2 Corintios 1:20',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Aconteció después de la muerte de Moisés siervo de Jehová, que Jehová habló a Josué hijo de Nun, servidor de Moisés, diciendo: Mi siervo Moisés ha muerto; ahora, pues, levántate y pasa este Jordán, tú y todo este pueblo, a la tierra que yo les doy a los hijos de Israel. Yo os he entregado, como lo había dicho a Moisés, todo lugar que pisare la planta de vuestro pie.', ref: 'Josué 1:1-3' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Preguntas ante una promesa',
          cab: ['Pregunta', 'Ejemplo'],
          filas: [
            ['¿A quién se hizo?', 'Josué 1:3: a Josué e Israel, sobre la tierra de Canaán'],
            ['¿Tiene condiciones?', '2 Crónicas 7:14: «si se humillare mi pueblo…»'],
            ['¿El Nuevo Testamento la extiende a los creyentes?', 'Hechos 2:39: «para todos los que están lejos»'],
            ['¿Revela algo permanente de Dios?', 'Josué 1:5, 9: Dios está con los suyos (He 13:5)'],
            ['¿Se cumplió ya, o espera cumplimiento?', 'Las promesas de restauración de Israel']
          ]
        } }
      ],
      texto: [
        'La Biblia está llena de promesas, y es natural querer apropiarse de ellas. Pero no todas fueron hechas a todos. Antes de reclamar una promesa, hay que preguntar a quién se hizo, si tiene condiciones y si el resto de la Escritura la extiende a los creyentes de hoy.',
        { h: 'Un ejemplo: Josué 1:3' },
        'Dios dijo a Josué: «Yo os he entregado, como lo había dicho a Moisés, todo lugar que pisare la planta de vuestro pie» (Jos 1:3). A veces se usa este versículo para «reclamar» casas, terrenos o ciudades caminando sobre ellos. Pero el contexto es preciso: Dios habla a Josué y a Israel, después de la muerte de Moisés, sobre la tierra de Canaán, con sus límites definidos (Jos 1:2, 4). No es una fórmula para adquirir propiedades.',
        'Eso no significa que el pasaje no tenga nada para nosotros. Revela verdades permanentes sobre Dios: él cumple lo que promete, va delante de los suyos y no los abandona. El Nuevo Testamento toma justamente esa parte, «No te desampararé, ni te dejaré» (He 13:5), y la aplica a todo creyente. La aplicación correcta no es reclamar la tierra de Josué, sino confiar en el Dios de Josué.',
        { h: 'Promesas que sí son nuestras' },
        'Muchas promesas se extienden expresamente a todos los creyentes. Pedro, el día de Pentecostés, dijo sobre el don del Espíritu: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). Pablo enseña que «todas las promesas de Dios son en él Sí, y en él Amén» (2 Co 1:20): en Cristo, el creyente recibe todo lo que Dios prometió a los suyos.',
        'Distinguir no le quita riqueza a la Biblia; al contrario, nos permite descansar con seguridad en las promesas que sí son nuestras, sin frustrarnos por reclamar las que Dios hizo a otros.',
        { ejercicio: {
          pregunta: '¿Cuál es la aplicación más fiel de Josué 1:3 para un creyente de hoy?',
          opciones: [
            { t: 'Caminar alrededor de un terreno que deseo para que Dios me lo entregue.', ok: false, por_que: 'La promesa se refería a Canaán, entregada a Israel. Usarla como fórmula para obtener bienes saca el texto de su contexto.' },
            { t: 'Confiar en que Dios cumple sus promesas y acompaña a los suyos en la tarea que les encomienda.', ok: true, por_que: 'Es la verdad permanente del pasaje, que el Nuevo Testamento confirma (Hebreos 13:5).' },
            { t: 'El pasaje no tiene aplicación porque era solo para Israel.', ok: false, por_que: 'La promesa específica era para Israel, pero el pasaje revela el carácter de Dios, que no cambia.' }
          ],
          explicacion: 'Ante una promesa se pregunta a quién se hizo y qué revela de Dios. Así se aplica sin torcerla y sin perder su riqueza.'
        } }
      ],
      pensar: '¿Qué promesa bíblica que sí es para todo creyente necesitas recordar hoy? ¿Dónde está escrita?'
    },
    {
      id: 'experiencia', n: 'La experiencia y la Palabra', ref: '1 Juan 4:1-3; 1 Tesalonicenses 5:19-21; Gálatas 1:8; Hechos 17:11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'No apaguéis al Espíritu. No menospreciéis las profecías. Examinadlo todo; retened lo bueno.', ref: '1 Tesalonicenses 5:19-21' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Examinar sin apagar',
          cab: ['No apaguéis al Espíritu', 'Examinadlo todo'],
          filas: [
            ['Esperar que Dios hable y obre hoy', 'Comprobar que lo que se dice concuerda con la Escritura'],
            ['Valorar los dones espirituales (1 Co 12–14)', 'Que se ejerzan con orden y para edificación (1 Co 14:26, 40)'],
            ['Recibir la profecía con apertura', 'Que los demás juzguen (1 Co 14:29)'],
            ['Buscar la llenura del Espíritu', 'Reconocer su fruto en la vida (Gá 5:22-23)']
          ]
        } }
      ],
      texto: [
        'Dios obra hoy. Sana, habla, llena con su Espíritu y reparte dones a su iglesia. La experiencia espiritual es parte de la vida cristiana y la Biblia la valora. Pablo escribe: «No apaguéis al Espíritu. No menospreciéis las profecías», y en la misma frase añade: «Examinadlo todo; retened lo bueno» (1 Ts 5:19-21). Las dos instrucciones van juntas.',
        { h: 'La Palabra juzga la experiencia' },
        'El error aparece cuando la experiencia se pone por encima de la Escritura: cuando una visión, un sueño, una palabra recibida en oración o una sensación intensa se usan para establecer una doctrina que la Biblia no enseña, o para contradecir lo que enseña. Juan advierte: «no creáis a todo espíritu, sino probad los espíritus si son de Dios; porque muchos falsos profetas han salido por el mundo» (1 Jn 4:1). Y Pablo es tajante: si aun un ángel del cielo anunciara otro evangelio, «sea anatema» (Gá 1:8).',
        'El Espíritu Santo que inspiró la Escritura no se contradice. Una experiencia que viene de él concuerda con la Palabra, glorifica a Cristo (Jn 16:14) y produce fruto de santidad. Por eso la experiencia se examina con la Biblia, y no la Biblia con la experiencia.',
        { h: 'Interpretar la experiencia con la Escritura' },
        'Los apóstoles nos dejaron el modelo. Cuando el Espíritu descendió en Pentecostés y la gente preguntaba qué significaba, Pedro no explicó lo ocurrido con sus sensaciones: abrió la Escritura y dijo «esto es lo dicho por el profeta Joel» (Hch 2:16). La experiencia fue real y poderosa, y la Palabra la explicó. Ese es el orden sano: buscar todo lo que Dios ofrece, y entenderlo y evaluarlo a la luz de lo que él ya dijo.',
        { ejercicio: {
          pregunta: 'En una reunión, alguien comparte una palabra que, según dice, recibió del Señor, pero contradice lo que enseña un pasaje claro de la Biblia. ¿Qué indica la Escritura?',
          opciones: [
            { t: 'Aceptarla, porque no se debe apagar al Espíritu.', ok: false, por_que: 'No apagar al Espíritu va unido a examinarlo todo (1 Tesalonicenses 5:19-21). El Espíritu no contradice lo que él mismo inspiró.' },
            { t: 'Examinarla con la Escritura y no recibirla como palabra de Dios, con amor y sin despreciar los dones.', ok: true, por_que: 'La Biblia manda probar los espíritus (1 Juan 4:1) y juzgar las profecías (1 Corintios 14:29), sin menospreciarlas.' },
            { t: 'Concluir que los dones espirituales ya no existen.', ok: false, por_que: 'Un uso equivocado no anula el don. La Escritura enseña a ejercerlo con orden, no a rechazarlo.' }
          ],
          explicacion: 'La Palabra y el Espíritu nunca están en conflicto. Por eso todo lo que se presenta como de Dios se examina a la luz de la Escritura.'
        } },
        { ir: { t: 'Abrir el estudio de Hechos', a: '../../hechos/' } }
      ],
      pensar: '¿Has vivido alguna experiencia espiritual que nunca contrastaste con la Escritura? ¿Qué pasaje podría ayudarte a entenderla?'
    }
  ];

  const taller = [
    {
      id: 'como-usar', n: 'Cómo usar este taller', ref: 'Esdras 7:10; Hechos 17:11; 2 Timoteo 2:15',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/bereanos.webp', alt: 'Un grupo de judíos de Berea, hombres y mujeres, examina rollos de las Escrituras sobre una mesa de la sinagoga a la luz de lámparas de aceite', pie: 'Los de Berea escudriñaban cada día las Escrituras (Hechos 17:11).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Guía de estudio de un pasaje',
          cab: ['Paso', 'Preguntas'],
          filas: [
            ['0. Orar', '«Abre mis ojos, y miraré» (Sal 119:18)'],
            ['1. Observar', '¿Quién habla, a quién, cuándo y dónde? ¿Qué dicen los versículos de antes y de después? ¿Qué conectores y palabras se repiten?'],
            ['2. Género', '¿Es relato, ley, poesía, sabiduría, profecía, evangelio, carta o visión?'],
            ['3. Trasfondo', '¿Qué situación histórica y cultural hay detrás?'],
            ['4. Significado', '¿Qué quiso decir el autor a sus primeros lectores? Resúmelo en una frase'],
            ['5. Toda la Escritura', '¿Qué dicen otros pasajes del mismo tema? ¿Cómo encaja en el plan de Dios en Cristo?'],
            ['6. Aplicación', '¿Qué verdad, promesa, mandato o ejemplo hay para mí y para mi iglesia? ¿Qué haré esta semana?']
          ],
          nota: 'Puedes copiar esta guía en tu cuaderno y usarla con cualquier pasaje.'
        } }
      ],
      texto: [
        'Este taller pone en práctica todo lo aprendido. Cada estación toma un versículo muy citado, de esos que se ven en tarjetas, cuadros y mensajes, y lo estudia paso a paso con el método de la segunda ruta: observar, interpretar y aplicar. En algunos casos descubrirás que el versículo significa algo más rico de lo que pensabas; en otros, que se suele usar de una manera que el texto no respalda.',
        'El propósito no es quitarle valor a ningún versículo, sino devolverlo a su lugar. Un versículo leído en su contexto no pierde fuerza: la gana, porque deja de ser una frase que se usa a conveniencia y vuelve a ser palabra de Dios con su sentido verdadero.',
        { h: 'Cómo aprovechar cada estación' },
        'Antes de leer el texto de la estación, abre la pestaña del pasaje y léelo completo, al menos dos veces. Intenta responder por tu cuenta las preguntas de la guía: quién habla, a quién, en qué situación y qué quiso decir. Después lee la explicación y responde los ejercicios. Si te equivocas, lee la retroalimentación: los errores también enseñan, y puedes intentarlo de nuevo.',
        'Si estudias en grupo, una estación por reunión es un buen ritmo. Cada uno puede leer el pasaje en silencio, luego compartir sus observaciones y, al final, conversar la pregunta «Para pensar».',
        { h: 'Las herramientas que necesitas' },
        'Basta con una Biblia, un cuaderno y tiempo. Si tienes una Biblia con referencias cruzadas o notas de estudio, mejor. Y lo más importante: un corazón dispuesto a obedecer lo que Dios muestre. Los de Berea recibieron la palabra «con toda solicitud» y escudriñaban «cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11). Ese es el espíritu de este taller.',
        { ejercicio: {
          pregunta: 'Según la guía, ¿qué paso viene inmediatamente antes de buscar la aplicación?',
          opciones: [
            { t: 'Comparar con el resto de la Escritura y ver cómo encaja en el plan de Dios en Cristo.', ok: true, por_que: 'La aplicación se apoya en el significado ya confirmado por el conjunto de la Escritura.' },
            { t: 'Elegir el versículo que más nos gusta del pasaje.', ok: false, por_que: 'La guía estudia el pasaje completo; elegir un versículo suelto es justamente el error que se quiere evitar.' },
            { t: 'Buscar una ilustración para compartir el pasaje con otros.', ok: false, por_que: 'Compartir es valioso, pero no es un paso del método de estudio.' }
          ],
          explicacion: 'El orden de la guía protege la aplicación: se aplica lo que el texto significa, confirmado por toda la Escritura.'
        } }
      ],
      pensar: '¿Con quién podrías recorrer este taller? Estudiar con otros ayuda a ver lo que uno solo no ve.'
    },
    {
      id: 'jeremias-29-11', n: 'Jeremías 29:11', ref: 'Jeremías 29:1-14',
      visual: [
        { tipo: 'cita', titulo: 'Contexto', texto: 'Así ha dicho Jehová de los ejércitos, Dios de Israel, a todos los de la cautividad que hice transportar de Jerusalén a Babilonia: Edificad casas, y habitadlas; y plantad huertos, y comed del fruto de ellos. Casaos, y engendrad hijos e hijas; dad mujeres a vuestros hijos, y dad maridos a vuestras hijas, para que tengan hijos e hijas; y multiplicaos ahí, y no os disminuyáis. Y procurad la paz de la ciudad a la cual os hice transportar, y rogad por ella a Jehová; porque en su paz tendréis vosotros paz. Porque así ha dicho Jehová de los ejércitos, Dios de Israel: No os engañen vuestros profetas que están entre vosotros, ni vuestros adivinos; ni atendáis a los sueños que soñáis. Porque falsamente os profetizan ellos en mi nombre; no los envié, ha dicho Jehová. Porque así dijo Jehová: Cuando en Babilonia se cumplan los setenta años, yo os visitaré, y despertaré sobre vosotros mi buena palabra, para haceros volver a este lugar.', ref: 'Jeremías 29:4-10' },
        { tipo: 'cita', titulo: 'Versículo', texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis. Entonces me invocaréis, y vendréis y oraréis a mí, y yo os oiré; y me buscaréis y me hallaréis, porque me buscaréis de todo vuestro corazón. Y seré hallado por vosotros, dice Jehová, y haré volver vuestra cautividad, y os reuniré de todas las naciones y de todos los lugares adonde os arrojé, dice Jehová; y os haré volver al lugar de donde os hice llevar.', ref: 'Jeremías 29:11-14' }
      ],
      texto: [
        '«Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis» (Jer 29:11). Es uno de los versículos más queridos de la Biblia. Muchas veces se cita para animar a alguien que comienza un trabajo, termina los estudios o atraviesa una crisis, como una promesa de que todo saldrá bien pronto. Veamos qué dice en su contexto.',
        { h: 'Observar' },
        'El capítulo es una carta. Jeremías la envió desde Jerusalén «a los ancianos que habían quedado de los que fueron transportados» a Babilonia (Jer 29:1). Los destinatarios eran exiliados. Y lo primero que Dios les dice no es que volverán pronto, sino lo contrario: «Edificad casas, y habitadlas; y plantad huertos» (Jer 29:5); cásense, tengan hijos, procuren la paz de la ciudad donde están. Los profetas falsos anunciaban un regreso rápido, y Dios los desmiente (Jer 29:8-9). Luego fija el plazo: «Cuando en Babilonia se cumplan los setenta años, yo os visitaré» (Jer 29:10). Recién entonces viene el versículo 11, que empieza con «Porque»: explica por qué Dios cumplirá su promesa de hacerlos volver.',
        { h: 'Interpretar' },
        'Dios promete a Israel, como pueblo, un futuro de paz al final de un largo exilio. Muchos de los que leyeron la carta morirían en Babilonia; serían sus hijos y nietos quienes volverían. El «fin que esperáis» no era un éxito inmediato, sino la restauración prometida después de setenta años. La promesa incluye, además, un llamado: «me buscaréis y me hallaréis, porque me buscaréis de todo vuestro corazón» (Jer 29:13).',
        { h: 'Aplicar' },
        'El versículo no garantiza que mis planes personales saldrán bien ni que mis problemas terminarán pronto. Pero sí revela algo permanente del corazón de Dios: sus pensamientos hacia su pueblo son de paz, aun en medio de la disciplina y la espera, y él cumple lo que promete en su tiempo. El creyente puede confiar en esa fidelidad, buscar a Dios de todo corazón y, mientras espera, vivir fielmente donde Dios lo puso, procurando el bien de la ciudad donde vive (Jer 29:7).',
        { ejercicio: {
          pregunta: '¿A quiénes estaba dirigida originalmente la promesa de Jeremías 29:11?',
          opciones: [
            { t: 'A cada creyente que comienza un proyecto nuevo.', ok: false, por_que: 'Es una aplicación frecuente, pero el texto se dirige a un grupo concreto en una situación concreta.' },
            { t: 'A los judíos exiliados en Babilonia, como pueblo.', ok: true, por_que: 'Jeremías 29:1 y 29:4 lo dicen expresamente: es una carta a los de la cautividad.' },
            { t: 'Al rey Sedequías, que seguía en Jerusalén.', ok: false, por_que: 'Sedequías envió a los mensajeros (Jeremías 29:3), pero la carta se dirige a los exiliados.' }
          ],
          explicacion: 'Identificar a los destinatarios es el primer paso. Desde ahí se busca lo que el pasaje revela de Dios para nosotros.'
        } },
        { ejercicio: {
          pregunta: 'Según el versículo 10, ¿cuándo se cumpliría la promesa de hacerlos volver?',
          opciones: [
            { t: 'De inmediato, como anunciaban otros profetas.', ok: false, por_que: 'Dios desmiente a esos profetas en los versículos 8 y 9.' },
            { t: 'Cuando se cumplieran setenta años en Babilonia.', ok: true, por_que: 'El versículo 10 fija ese plazo. Por eso Dios les manda edificar casas y plantar huertos.' },
            { t: 'En la segunda venida de Cristo.', ok: false, por_que: 'El texto se refiere al regreso del exilio, cumplido en tiempos de Ciro (Esdras 1:1).' }
          ],
          explicacion: 'La promesa de paz incluía una larga espera. La fidelidad de Dios no siempre es rapidez, pero siempre es cumplimiento.'
        } },
        { ir: { t: 'Abrir El exilio y los retornos', a: '../../exilio/' } }
      ],
      pensar: 'Dios mandó a los exiliados edificar, plantar y orar por la ciudad mientras esperaban (Jer 29:5-7). ¿Qué significa para ti vivir fielmente donde estás mientras esperas el cumplimiento de lo que Dios prometió?'
    },
    {
      id: 'filipenses-4-13', n: 'Filipenses 4:13', ref: 'Filipenses 4:10-14',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En gran manera me gocé en el Señor de que ya al fin habéis revivido vuestro cuidado de mí; de lo cual también estabais solícitos, pero os faltaba la oportunidad. No lo digo porque tenga escasez, pues he aprendido a contentarme, cualquiera que sea mi situación. Sé vivir humildemente, y sé tener abundancia; en todo y por todo estoy enseñado, así para estar saciado como para tener hambre, así para tener abundancia como para padecer necesidad. Todo lo puedo en Cristo que me fortalece. Sin embargo, bien hicisteis en participar conmigo en mi tribulación.', ref: 'Filipenses 4:10-14' },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/pablo-preso-escribe.webp', alt: 'El apóstol Pablo, encadenado a un soldado romano, dicta una carta en una habitación sencilla mientras recibe un paquete de ayuda de un mensajero', pie: 'Pablo escribe a los filipenses desde la prisión, tras recibir su ofrenda.', origen: 'ia' }
      ],
      texto: [
        '«Todo lo puedo en Cristo que me fortalece» (Fil 4:13). Este versículo aparece en camisetas deportivas, en cuadernos de estudiantes y en mensajes antes de una competencia o un examen. A menudo se entiende como una promesa de que, con fe, uno puede lograr cualquier meta. ¿Es eso lo que Pablo quiso decir?',
        { h: 'Observar' },
        'Pablo escribe desde la prisión (Fil 1:13). La iglesia de Filipos le había enviado una ofrenda, y él agradece: «me gocé en el Señor de que ya al fin habéis revivido vuestro cuidado de mí» (Fil 4:10). Enseguida aclara que no lo dice por necesidad, porque «he aprendido a contentarme, cualquiera que sea mi situación» (Fil 4:11). El versículo 12 describe esas situaciones: vivir humildemente y tener abundancia, estar saciado y tener hambre. Y entonces viene el versículo 13. Después añade: «bien hicisteis en participar conmigo en mi tribulación» (Fil 4:14).',
        { h: 'Interpretar' },
        'En su contexto, «todo» se refiere a las situaciones del versículo 12: la abundancia y la escasez, el hambre y la saciedad. Pablo dice que puede vivir contento en cualquiera de ellas porque Cristo le da la fuerza. No habla de ganar competencias o alcanzar metas, sino de soportar con contentamiento lo que Dios permita, incluso la cárcel y el hambre. Es una frase de fortaleza en la necesidad, no de éxito asegurado.',
        { h: 'Aplicar' },
        'El versículo es más poderoso en su contexto que fuera de él. No promete que ganaré el partido, pero sí que Cristo me dará fuerza para ser fiel si lo pierdo; no garantiza el empleo que busco, pero sí la capacidad de vivir contento mientras lo busco. El contentamiento, dice Pablo, se aprende. Y se aprende apoyado en Cristo, no en las circunstancias. La aplicación también es comunitaria: los filipenses participaron en la tribulación de Pablo con su ofrenda (Fil 4:14). Dios fortalece a menudo a través de los hermanos.',
        { ejercicio: {
          pregunta: 'En el contexto de Filipenses 4:11-12, ¿a qué se refiere «todo» en el versículo 13?',
          opciones: [
            { t: 'A cualquier meta que el creyente se proponga con fe.', ok: false, por_que: 'El contexto no habla de metas, sino de situaciones de abundancia y escasez.' },
            { t: 'A las circunstancias de abundancia y de necesidad, en las que Pablo aprendió a estar contento.', ok: true, por_que: 'Los versículos 11 y 12 describen esas situaciones, y el versículo 13 explica cómo Pablo puede vivirlas.' },
            { t: 'A los milagros que Pablo realizaba en su ministerio.', ok: false, por_que: 'Dios hizo milagros por medio de Pablo, pero este pasaje trata del contentamiento en la necesidad.' }
          ],
          explicacion: 'Leer los versículos de antes y de después cambia por completo el sentido de «todo».'
        } },
        { ejercicio: {
          pregunta: 'Un deportista cristiano pierde una final importante. ¿Cómo le habla Filipenses 4:13 correctamente?',
          opciones: [
            { t: 'Le recuerda que, si hubiera tenido más fe, habría ganado.', ok: false, por_que: 'Es una lectura que el texto no respalda y que carga una culpa injusta.' },
            { t: 'Le asegura que Cristo lo fortalece para vivir con contentamiento y fidelidad también en la derrota.', ok: true, por_que: 'Es la enseñanza del pasaje: la fuerza de Cristo en la abundancia y en la escasez, en la victoria y en la pérdida.' },
            { t: 'No le dice nada, porque el versículo no se aplica al deporte.', ok: false, por_que: 'El principio sí se aplica a toda circunstancia de la vida, incluido el deporte.' }
          ],
          explicacion: 'El versículo no promete resultados, pero sí la presencia y la fuerza de Cristo en cualquier resultado.'
        } }
      ],
      pensar: 'Pablo dijo que aprendió a contentarse (Fil 4:11). ¿En qué área de tu vida necesitas aprender hoy el contentamiento que viene de Cristo?'
    },
    {
      id: 'mateo-18-20', n: 'Mateo 18:20', ref: 'Mateo 18:15-20',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, si tu hermano peca contra ti, ve y repréndele estando tú y él solos; si te oyere, has ganado a tu hermano. Mas si no te oyere, toma aún contigo a uno o dos, para que en boca de dos o tres testigos conste toda palabra. Si no los oyere a ellos, dilo a la iglesia; y si no oyere a la iglesia, tenle por gentil y publicano. De cierto os digo que todo lo que atéis en la tierra, será atado en el cielo; y todo lo que desatéis en la tierra, será desatado en el cielo. Otra vez os digo, que si dos de vosotros se pusieren de acuerdo en la tierra acerca de cualquiera cosa que pidieren, les será hecho por mi Padre que está en los cielos. Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.', ref: 'Mateo 18:15-20' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los pasos de Mateo 18:15-20',
          cab: ['Paso', 'Quiénes', 'Versículo'],
          filas: [
            ['Hablar en privado', 'Tú y tu hermano', '15'],
            ['Llevar testigos', 'Uno o dos más', '16'],
            ['Decirlo a la iglesia', 'La congregación', '17'],
            ['Decisión respaldada', 'Lo atado y desatado', '18'],
            ['Acuerdo en oración', 'Dos de vosotros', '19'],
            ['Presencia de Cristo', 'Dos o tres reunidos en su nombre', '20']
          ]
        } }
      ],
      texto: [
        '«Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos» (Mt 18:20). Este versículo se cita a menudo cuando una reunión tiene poca asistencia, como consuelo de que el Señor está presente aunque seamos pocos. ¿Qué enseña en su contexto?',
        { h: 'Observar' },
        'El versículo comienza con «Porque», así que explica lo anterior. Y lo anterior es un procedimiento: «si tu hermano peca contra ti, ve y repréndele estando tú y él solos» (Mt 18:15). Si no escucha, se lleva a «uno o dos», para que «en boca de dos o tres testigos conste toda palabra» (Mt 18:16), una expresión tomada de la ley (Dt 19:15). Si tampoco escucha, se dice a la iglesia (Mt 18:17). Jesús afirma luego que lo atado y desatado en la tierra será atado y desatado en el cielo (Mt 18:18), y que si dos se ponen de acuerdo en lo que piden, el Padre lo hará (Mt 18:19).',
        { h: 'Interpretar' },
        'Los «dos o tres» del versículo 20 son los mismos «dos o tres testigos» del versículo 16. Jesús está hablando de la disciplina y la restauración de un hermano que pecó. Promete que, cuando la iglesia actúa en su nombre para corregir y restaurar, con humildad y conforme a su palabra, él está presente respaldando esa decisión. Es una promesa de autoridad y compañía para una de las tareas más difíciles de la vida de la iglesia.',
        { h: 'Aplicar' },
        'La lectura común no es falsa en lo que afirma: Cristo está con los suyos siempre (Mt 28:20), sean muchos o pocos, porque otros pasajes lo enseñan. Pero este versículo dice algo más específico y desafiante: cuando hay un conflicto entre hermanos, la iglesia no debe evitarlo ni resolverlo con chismes, sino seguir el camino de Jesús, en privado primero, y confiar en que él está presente en ese proceso. La meta, dice el versículo 15, es ganar al hermano.',
        { ejercicio: {
          pregunta: '¿Con qué expresión de los versículos anteriores se conectan los «dos o tres» del versículo 20?',
          opciones: [
            { t: 'Con los «dos o tres testigos» del versículo 16, en el proceso de corregir a un hermano.', ok: true, por_que: 'El «Porque» del versículo 20 une la promesa con el procedimiento que Jesús acaba de describir.' },
            { t: 'Con el número mínimo de personas para que una reunión de iglesia sea válida.', ok: false, por_que: 'El pasaje no fija un número mínimo para las reuniones; habla de un proceso de restauración.' },
            { t: 'Con los discípulos que Jesús envió de dos en dos.', ok: false, por_que: 'Ese envío ocurre en otro contexto (Lucas 10:1). Aquí el tema es el pecado de un hermano.' }
          ],
          explicacion: 'Un conector como «Porque» obliga a mirar atrás. En este caso revela el verdadero tema del versículo.'
        } },
        { ejercicio: {
          pregunta: 'Según el versículo 15, ¿cuál es el propósito del proceso que describe Jesús?',
          opciones: [
            { t: 'Demostrar quién tiene la razón.', ok: false, por_que: 'El texto no busca ganadores en la discusión, sino la restauración.' },
            { t: 'Expulsar pronto de la iglesia al que peca.', ok: false, por_que: 'La separación es el último paso, solo si el hermano no escucha a nadie. No es la meta.' },
            { t: 'Ganar al hermano.', ok: true, por_que: '«si te oyere, has ganado a tu hermano» (Mateo 18:15). La meta es la restauración.' }
          ],
          explicacion: 'Cristo prometió su presencia para una iglesia que corrige con amor y busca restaurar, no para una que castiga o calla.'
        } }
      ],
      pensar: '¿Hay algún hermano con quien tengas un conflicto sin resolver? ¿Qué te impide dar el primer paso que Jesús indica en el versículo 15?'
    },
    {
      id: 'apocalipsis-3-20', n: 'Apocalipsis 3:20', ref: 'Apocalipsis 3:14-22',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y escribe al ángel de la iglesia en Laodicea: He aquí el Amén, el testigo fiel y verdadero, el principio de la creación de Dios, dice esto: Yo conozco tus obras, que ni eres frío ni caliente. ¡Ojalá fueses frío o caliente! Pero por cuanto eres tibio, y no frío ni caliente, te vomitaré de mi boca. Porque tú dices: Yo soy rico, y me he enriquecido, y de ninguna cosa tengo necesidad; y no sabes que tú eres un desventurado, miserable, pobre, ciego y desnudo. Por tanto, yo te aconsejo que de mí compres oro refinado en fuego, para que seas rico, y vestiduras blancas para vestirte, y que no se descubra la vergüenza de tu desnudez; y unge tus ojos con colirio, para que veas. Yo reprendo y castigo a todos los que amo; sé, pues, celoso, y arrepiéntete. He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo. Al que venciere, le daré que se siente conmigo en mi trono, así como yo he vencido, y me he sentado con mi Padre en su trono. El que tiene oído, oiga lo que el Espíritu dice a las iglesias.', ref: 'Apocalipsis 3:14-22' },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/laodicea.webp', alt: 'Vista al atardecer de la ciudad de Laodicea en el siglo I, próspera, con sus calles columnadas, y al fondo el acueducto que traía agua tibia desde lejos', pie: 'Laodicea, una ciudad rica de Asia Menor en el siglo I.', origen: 'ia' }
      ],
      texto: [
        '«He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo» (Ap 3:20). Este versículo se ha usado durante generaciones en la evangelización: Cristo llama a la puerta del corazón del incrédulo, y cada uno debe abrirle. ¿A quién habla en su contexto?',
        { h: 'Observar' },
        'El versículo está al final de la carta a la iglesia de Laodicea (Ap 3:14). Es una iglesia: personas que se consideraban creyentes. Cristo les dice que no son fríos ni calientes, sino tibios (Ap 3:15-16). Ellos se creían ricos y sin necesidad, pero Cristo los ve «desventurado, miserable, pobre, ciego y desnudo» (Ap 3:17). Les aconseja comprar de él oro, vestiduras blancas y colirio (Ap 3:18), y les dice: «Yo reprendo y castigo a todos los que amo; sé, pues, celoso, y arrepiéntete» (Ap 3:19). Recién entonces llama a la puerta.',
        { h: 'Interpretar' },
        'Laodicea era una ciudad rica, conocida por su banca, su industria textil y una escuela de medicina asociada a un ungüento para los ojos. La iglesia había absorbido esa autosuficiencia. Cristo, que debía estar en el centro, está afuera, llamando. La invitación es para una iglesia que lo dejó fuera: si alguno oye y abre, él entra y tiene comunión con él. Cenar juntos era, en esa cultura, señal de amistad íntima.',
        { h: 'Aplicar' },
        'Usar el versículo para invitar a un incrédulo a recibir a Cristo no es contrario al evangelio: la Biblia enseña en muchos lugares que hay que recibirlo por la fe (Jn 1:12). Pero el sentido primero de Apocalipsis 3:20 es más incómodo: es un llamado a creyentes satisfechos de sí mismos que dejaron a Cristo fuera de su vida y de su iglesia. Cada congregación y cada creyente puede preguntarse si Cristo está adentro, en el centro, o afuera, llamando. Y la promesa es preciosa: a quien abre, Cristo no le reprocha; se sienta a cenar con él.',
        { ejercicio: {
          pregunta: 'En su contexto, ¿a quién dirige Cristo la invitación de Apocalipsis 3:20?',
          opciones: [
            { t: 'A los incrédulos de la ciudad de Laodicea.', ok: false, por_que: 'La carta está dirigida «al ángel de la iglesia en Laodicea» (Apocalipsis 3:14), es decir, a la congregación.' },
            { t: 'A una iglesia tibia y autosuficiente que dejó a Cristo afuera.', ok: true, por_que: 'Los versículos 14 al 19 describen a esa iglesia; el versículo 20 es el llamado final a abrirle la puerta.' },
            { t: 'A los ángeles de las siete iglesias.', ok: false, por_que: 'Aunque la carta nombra al ángel de la iglesia, su contenido es para la congregación: «El que tiene oído, oiga lo que el Espíritu dice a las iglesias» (Apocalipsis 3:22).' }
          ],
          explicacion: 'El versículo sigue siendo una invitación de gracia, pero dirigida primero a creyentes que necesitan arrepentirse y volver a la comunión con Cristo.'
        } },
        { ejercicio: {
          pregunta: '¿Qué detalle del trasfondo de Laodicea ayuda a entender el consejo de comprar «colirio» (Apocalipsis 3:18)?',
          opciones: [
            { t: 'Que la ciudad era famosa por una medicina para los ojos y, sin embargo, la iglesia estaba espiritualmente ciega.', ok: true, por_que: 'Cristo usa algo de lo que la ciudad se enorgullecía para mostrar la ceguera de la iglesia.' },
            { t: 'Que en Laodicea hubo una epidemia de ceguera.', ok: false, por_que: 'No hay registro de eso. La imagen se entiende por la fama médica de la ciudad, no por una epidemia.' },
            { t: 'Que los cristianos de Laodicea vendían colirio en el templo.', ok: false, por_que: 'Nada lo indica. El trasfondo es la riqueza y la autosuficiencia de la ciudad.' }
          ],
          explicacion: 'El trasfondo histórico da vida a las imágenes: Cristo habla a cada iglesia con el lenguaje de su propia ciudad.'
        } },
        { ir: { t: 'Abrir Las siete iglesias de Asia (Apocalipsis)', a: '../../apocalipsis/' } }
      ],
      pensar: '¿Hay áreas de tu vida, o de tu congregación, donde Cristo está afuera llamando? ¿Qué significaría abrirle la puerta hoy?'
    },
    {
      id: 'mateo-7-1', n: 'Mateo 7:1', ref: 'Mateo 7:1-6; Juan 7:24',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'No juzguéis, para que no seáis juzgados. Porque con el juicio con que juzgáis, seréis juzgados, y con la medida con que medís, os será medido. ¿Y por qué miras la paja que está en el ojo de tu hermano, y no echas de ver la viga que está en tu propio ojo? ¿O cómo dirás a tu hermano: Déjame sacar la paja de tu ojo, y he aquí la viga en el ojo tuyo? ¡Hipócrita! saca primero la viga de tu propio ojo, y entonces verás bien para sacar la paja del ojo de tu hermano. No deis lo santo a los perros, ni echéis vuestras perlas delante de los cerdos, no sea que las pisoteen, y se vuelvan y os despedacen.', ref: 'Mateo 7:1-6' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Juzgar en la Biblia',
          cab: ['Lo que Jesús prohíbe', 'Lo que la Escritura manda'],
          filas: [
            ['Condenar a otros con una medida que no me aplico (Mt 7:2-4)', 'Juzgar «con justo juicio» (Jn 7:24)'],
            ['Señalar la paja sin ver la viga (Mt 7:3)', 'Sacar primero la viga y luego ayudar al hermano (Mt 7:5)'],
            ['Un espíritu crítico, duro e hipócrita', 'Discernir entre lo santo y lo profano (Mt 7:6)'],
            ['Juzgar los motivos ocultos que solo Dios conoce (1 Co 4:5)', 'Corregir con mansedumbre al que cae (Gá 6:1)']
          ]
        } }
      ],
      texto: [
        '«No juzguéis, para que no seáis juzgados» (Mt 7:1). Puede que sea el versículo más citado por personas que no leen la Biblia. Se usa para decir que nadie puede opinar sobre la conducta de otro, que toda corrección es juicio y que el cristiano debe aceptarlo todo sin evaluar nada. ¿Es eso lo que enseña Jesús?',
        { h: 'Observar' },
        'El versículo abre una enseñanza del Sermón del Monte. Jesús explica por qué no juzgar: «con el juicio con que juzgáis, seréis juzgados» (Mt 7:2). Luego pone una imagen exagerada a propósito: alguien quiere sacar una paja del ojo de su hermano mientras tiene una viga en el suyo (Mt 7:3-4). Le dice «¡Hipócrita!» y le manda: «saca primero la viga de tu propio ojo, y entonces verás bien para sacar la paja del ojo de tu hermano» (Mt 7:5). Y enseguida agrega: «No deis lo santo a los perros» (Mt 7:6), lo cual exige discernir.',
        { h: 'Interpretar' },
        'Jesús no prohíbe toda evaluación moral. El mismo pasaje termina con la tarea de sacar la paja del ojo del hermano, y el versículo 6 pide discernimiento. Lo que prohíbe es el juicio hipócrita y condenatorio: medir a otros con una vara que uno no se aplica, buscar faltas ajenas para sentirse superior, y condenar en lugar de restaurar. En otro lugar dice: «No juzguéis según las apariencias, sino juzgad con justo juicio» (Jn 7:24).',
        { h: 'Aplicar' },
        'El pasaje corrige dos errores opuestos. A quien critica con dureza, le dice: mírate primero, examina tu propio corazón y trata a los demás con la misma misericordia que necesitas. A quien usa el versículo para que nadie le diga nada, le recuerda que Jesús sí espera que los hermanos se ayuden a sacar la paja, con humildad. El orden es la clave: primero mi viga, después la paja de mi hermano, siempre para ayudar y no para condenar.',
        { ejercicio: {
          pregunta: 'Según Mateo 7:5, ¿qué espera Jesús del discípulo?',
          opciones: [
            { t: 'Que nunca diga nada sobre la conducta de otro.', ok: false, por_que: 'El versículo 5 termina con «sacar la paja del ojo de tu hermano». La ayuda al hermano sigue siendo parte de la tarea.' },
            { t: 'Que primero se examine a sí mismo y luego ayude al hermano a corregir su falta.', ok: true, por_que: 'Es el orden que da Jesús: la viga propia primero, la paja ajena después.' },
            { t: 'Que señale las faltas de los demás para que la iglesia se mantenga pura.', ok: false, por_que: 'Eso es lo que Jesús llama hipocresía cuando no empieza por uno mismo.' }
          ],
          explicacion: 'Jesús no prohíbe ayudar al hermano, sino hacerlo con hipocresía. El autoexamen hace posible una corrección humilde.'
        } },
        { ejercicio: {
          pregunta: 'Alguien dice: «No puedes decir que algo es pecado, porque Jesús dijo no juzguéis». ¿Qué responde mejor el contexto?',
          opciones: [
            { t: 'Tiene razón: el cristiano no debe llamar pecado a nada.', ok: false, por_que: 'La Biblia nombra el pecado en muchos lugares, y Jesús mismo lo hizo. Mateo 7 no anula eso.' },
            { t: 'Jesús prohíbe el juicio hipócrita y condenatorio, pero pide discernir y ayudar al hermano con humildad.', ok: true, por_que: 'Lo confirman los versículos 5 y 6 y Juan 7:24: juzgar con justo juicio.' },
            { t: 'Ese versículo se aplicaba solo a los fariseos de su tiempo.', ok: false, por_que: 'Es enseñanza a los discípulos en el Sermón del Monte y se aplica a todo creyente.' }
          ],
          explicacion: 'El contexto equilibra: ni condenación orgullosa, ni silencio ante el pecado, sino humildad que restaura.'
        } }
      ],
      pensar: '¿Hay alguna «paja» que te molesta en otro y que podría señalar una «viga» en tu propia vida? Llévalo hoy a Dios en oración.'
    },
    {
      id: 'cronicas-7-14', n: '2 Crónicas 7:14', ref: '2 Crónicas 7:11-16',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Terminó, pues, Salomón la casa de Jehová, y la casa del rey: y todo lo que Salomón se propuso hacer en la casa de Jehová y en su casa, fue prosperado. Y apareció Jehová a Salomón de noche, y le dijo: Yo he oído tu oración, y he elegido para mí este lugar por casa de sacrificio. Si yo cerrare los cielos, para que no haya lluvia, y si mandare a la langosta que consuma la tierra, o si enviare pestilencia a mi pueblo; Si se humillare mi pueblo, sobre el cual mi nombre es invocado, y oraren, y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra. Ahora estarán abiertos mis ojos, y atentos mis oídos, a la oración en este lugar: Porque ahora he elegido y santificado esta casa, para que esté en ella mi nombre para siempre; y mis ojos y mi corazón estarán ahí para siempre.', ref: '2 Crónicas 7:11-16' },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/dedicacion-templo.webp', alt: 'El rey Salomón, de rodillas y con las manos alzadas, ora ante el altar de bronce del templo recién terminado, entre sacerdotes con trompetas, mientras el pueblo se inclina en el atrio', pie: 'La dedicación del templo de Salomón (2 Crónicas 6–7).', origen: 'ia' }
      ],
      texto: [
        '«Si se humillare mi pueblo, sobre el cual mi nombre es invocado, y oraren, y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra» (2 Cr 7:14). Este versículo se cita en jornadas de oración por el país, a veces como una promesa de que, si la iglesia ora, Dios sanará la nación. Es un pasaje precioso; veamos cómo aplicarlo bien.',
        { h: 'Observar' },
        'Salomón acaba de terminar y dedicar el templo (2 Cr 7:11). En su oración había pedido a Dios que, cuando el pueblo pecara y viniera sequía, langosta o pestilencia, y oraran hacia esa casa, él oyera y perdonara (2 Cr 6:26-31). Ahora Dios se le aparece de noche y responde: «Yo he oído tu oración» (2 Cr 7:12). El versículo 13 menciona justamente la sequía, la langosta y la pestilencia, y el versículo 15 dice que sus oídos estarán atentos «a la oración en este lugar».',
        { h: 'Interpretar' },
        '«Mi pueblo» es Israel, unido a Dios por el pacto. «Su tierra» es la tierra prometida, y la sanidad de la tierra se refiere en primer lugar al fin de los castigos del versículo 13: que vuelva la lluvia y cesen la plaga y la peste, como el pacto había advertido (Dt 28). La promesa tiene condiciones claras: humillarse, orar, buscar el rostro de Dios y convertirse de los malos caminos. No basta con orar; hay que abandonar el pecado.',
        { h: 'Aplicar' },
        'Ningún país de hoy es el Israel del pacto, ni tiene la promesa de la tierra de Canaán. Por eso no se puede usar el versículo como garantía de que una nación se sanará si la iglesia ora. Pero el pasaje revela verdades permanentes sobre Dios: oye la oración de su pueblo humillado, perdona al que se arrepiente y restaura. La iglesia, que es pueblo de Dios en Cristo, está llamada a humillarse, orar y apartarse del pecado; y puede orar por su país, como manda el Nuevo Testamento (1 Ti 2:1-2), confiando en un Dios que perdona y sana, aunque los resultados queden en sus manos.',
        { ejercicio: {
          pregunta: 'En su contexto, ¿qué significa «sanaré su tierra»?',
          opciones: [
            { t: 'Que Dios garantiza la prosperidad económica de cualquier país donde la iglesia ore.', ok: false, por_que: 'Lleva una promesa del pacto con Israel a cualquier nación, sin base en el texto.' },
            { t: 'Que Dios quitaría la sequía, la langosta y la pestilencia de Israel cuando el pueblo se arrepintiera.', ok: true, por_que: 'El versículo 13 nombra esos castigos, y el 14 promete su fin al pueblo que se humilla y se convierte.' },
            { t: 'Que la tierra de Israel nunca volvería a sufrir desastres.', ok: false, por_que: 'La promesa es condicional: depende de que el pueblo se humille y se convierta.' }
          ],
          explicacion: 'Las palabras «mi pueblo» y «su tierra» tienen un referente concreto en el pacto de Dios con Israel.'
        } },
        { ejercicio: {
          pregunta: '¿Cuál es la aplicación más fiel de 2 Crónicas 7:14 para la iglesia de hoy?',
          opciones: [
            { t: 'Organizar una jornada de oración con la seguridad de que Dios sanará la economía del país.', ok: false, por_que: 'Orar por el país es bíblico (1 Timoteo 2:1-2), pero el versículo no garantiza ese resultado a una nación de hoy.' },
            { t: 'Ninguna, porque el versículo es solo para Israel.', ok: false, por_que: 'La promesa específica es para Israel, pero el pasaje revela cómo responde Dios a quien se humilla y se arrepiente.' },
            { t: 'Humillarse, orar y abandonar el pecado, confiando en que Dios oye y perdona a su pueblo, y orar por el país dejando los resultados en sus manos.', ok: true, por_que: 'Toma el principio permanente del pasaje, unido a lo que el Nuevo Testamento enseña sobre orar por las autoridades.' }
          ],
          explicacion: 'Se aplica el carácter de Dios y el camino del arrepentimiento, sin convertir una promesa del pacto con Israel en una garantía para cualquier nación.'
        } },
        { ir: { t: 'Abrir El templo de Salomón', a: '../../templo-salomon/' } }
      ],
      pensar: 'El versículo pide humillarse, orar, buscar el rostro de Dios y convertirse de los malos caminos. ¿Cuál de esas cuatro acciones te cuesta más, y por qué?'
    }
  ];

  window.RUTA_DATA = {
    titulo: 'Cómo interpretar la Biblia',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'fundamentos', grupo: 'Aprender a interpretar', n: 'I. Fundamentos', info: 'Por qué interpretar, la Biblia como Palabra de Dios, el Espíritu Santo, Cristo en el centro y las distancias del texto', estaciones: fundamentos },
      { id: 'metodo', grupo: 'Aprender a interpretar', n: 'II. El método', info: 'Observar, interpretar y aplicar; el contexto, las palabras, la Escritura que interpreta a la Escritura', estaciones: metodo },
      { id: 'generos', grupo: 'Aprender a interpretar', n: 'III. Los géneros literarios', info: 'Narrativa, ley, poesía y sabiduría, profecía, evangelios, cartas y apocalíptica', estaciones: generos },
      { id: 'errores', grupo: 'Aprender a interpretar', n: 'IV. Errores comunes', info: 'El versículo suelto, la eiségesis, la alegoría, los pasajes oscuros, las promesas y la experiencia', estaciones: errores },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Seis versículos muy citados, estudiados paso a paso', estaciones: taller }
    ]
  };
})();
