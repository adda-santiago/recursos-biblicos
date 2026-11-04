/* El problema sinóptico · parte 2: las explicaciones (2), el taller y armado de RUTA_DATA */
(() => {
  const N = window.__SIN;
  const ARM = '../';

  const explicaciones2 = [
    {
      id: 'marcos-primero', n: 'Marcos primero y la fuente Q', ref: 'Marcos 1:1; Mateo 8:5-13; Lucas 7:1-10',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-hipotesis.svg', alt: 'Cuatro diagramas de flechas: Agustín (Mateo, Marcos, Lucas en fila), Griesbach (Mateo a Lucas y los dos a Marcos), dos fuentes (Marcos y Q hacia Mateo y Lucas) y Farrer (Marcos a Mateo y los dos a Lucas); debajo de todos, la enseñanza oral de los apóstoles', pie: 'Las principales explicaciones del problema sinóptico. Todas parten de la enseñanza de los testigos.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Argumentos a favor de Marcos primero',
          cab: ['Argumento', 'En qué consiste'],
          filas: [
            ['Contenido', 'Casi todo Marcos está en Mateo o en Lucas. Es más fácil explicar que dos ampliaran un libro breve que pensar que uno omitió tanto de dos libros más largos (el nacimiento, el sermón del monte, el Padre nuestro)'],
            ['Orden', 'Mateo y Lucas casi nunca coinciden contra el orden de Marcos: cada uno lo sigue o se aparta por su cuenta'],
            ['Estilo', 'El griego de Marcos es más sencillo y directo; en los pasajes paralelos, Mateo y Lucas suelen pulir su redacción'],
            ['Detalles difíciles', 'Marcos conserva expresiones que los otros suavizan, por ejemplo «no pudo hacer allí ningún milagro» (Mr 6:5) frente a «no hizo allí muchos milagros» (Mt 13:58)']
          ],
          nota: 'La colección de dichos llamada Q es una hipótesis: no se ha encontrado ningún manuscrito de ella.'
        } }
      ],
      texto: [
        'La explicación más extendida hoy, también entre muchos estudiosos evangélicos, sostiene que Marcos fue el primer evangelio escrito. Mateo y Lucas, cada uno por su cuenta, habrían usado a Marcos como base y lo habrían ampliado con otros materiales.',
        { h: 'La hipótesis de las dos fuentes' },
        'Si Mateo y Lucas usaron a Marcos, queda por explicar la doble tradición: los unos doscientos treinta versículos que tienen en común y que no están en Marcos (estación 2). Para eso se propone una segunda fuente, una colección de dichos de Jesús que ambos habrían conocido. Se la llama Q, por la palabra alemana Quelle, que significa fuente. Por eso esta explicación se conoce como la hipótesis de las dos fuentes. Streeter añadió el material propio de Mateo y el de Lucas, y habló de cuatro fuentes.',
        'Q no es un libro que alguien haya visto: es una deducción a partir de los textos. Algunos piensan que fue un escrito; otros, que era un conjunto de enseñanzas de Jesús que se repetían de memoria en las iglesias. Que existiera una colección así no tiene nada de extraño. Recuerda que, según Papías, Mateo reunió los dichos del Señor.',
        { h: 'Sus argumentos' },
        'La tabla resume los argumentos principales: el contenido, el orden, el estilo y ciertos detalles que Marcos cuenta con más crudeza. Por ejemplo, Marcos dice que en Nazaret Jesús «no pudo hacer allí ningún milagro, salvo que sanó a unos pocos enfermos» (Mr 6:5), y Mateo dice que «no hizo allí muchos milagros, a causa de la incredulidad de ellos» (Mt 13:58). Quienes defienden esta postura piensan que es más natural que Mateo haya aclarado la expresión de Marcos que lo contrario.',
        { h: 'Sin Q' },
        'Otros estudiosos aceptan que Marcos fue el primero, pero no creen necesario suponer la fuente Q. Según la propuesta de Austin Farrer, defendida hoy por Mark Goodacre, Lucas habría conocido tanto a Marcos como a Mateo. Así se explica la doble tradición sin una fuente perdida, y también algunas coincidencias pequeñas de Mateo y Lucas contra Marcos, que verás en la estación siguiente.',
        'Quien sostiene que Marcos fue el primero no está diciendo que Marcos sea más confiable que Mateo. Los tres evangelios son Palabra de Dios. La pregunta es solo cuál se escribió antes.'
      ],
      pensar: 'Marcos escribió un evangelio breve y lleno de acción, y Dios lo usó como base para otros. ¿Qué te enseña esto sobre el valor de una obra sencilla hecha con fidelidad?'
    },
    {
      id: 'mateo-primero', n: 'Mateo primero', ref: 'Mateo 9:9; Mateo 26:68; Marcos 14:65; Lucas 22:64',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: '../../mundo-judio/img/mj-mateo-banco.webp', alt: 'Junto a un camino a la entrada de Capernaúm, Mateo está sentado tras una mesa con monedas, una balanza y tablillas de cuentas; Jesús, de espaldas, se ha detenido frente a él', pie: 'Mateo, el publicano que dejó todo para seguir a Jesús (Mt 9:9).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Quién es el que te golpeó»',
          cab: ['Evangelio', 'Lo que dicen los que golpean a Jesús'],
          filas: [
            ['Mateo 26:68', 'Profetízanos, Cristo, quién es el que te golpeó.'],
            ['Marcos 14:65', 'Profetiza.'],
            ['Lucas 22:64', 'Profetiza, ¿quién es el que te golpeó?']
          ],
          nota: 'Mateo y Lucas coinciden en una frase que no está en Marcos. Estas pequeñas coincidencias de Mateo y Lucas contra Marcos son difíciles de explicar si los dos usaron a Marcos sin conocerse.'
        } }
      ],
      texto: [
        'La otra gran respuesta sostiene que Mateo fue el primero. Es la postura de la iglesia antigua y está reflejada en el orden de nuestras Biblias. Hoy tiene menos defensores, pero sus argumentos son serios.',
        { h: 'El testimonio antiguo' },
        'Todos los escritores cristianos de los primeros siglos que hablan del tema ponen a Mateo primero: Papías, Ireneo, Clemente de Alejandría, Orígenes y Agustín (estación 7). Estaban mucho más cerca de los hechos que nosotros. Mateo, además, fue apóstol y testigo directo: Jesús lo llamó cuando estaba «sentado al banco de los tributos públicos» (Mt 9:9).',
        { h: 'Las pequeñas coincidencias' },
        'El argumento más fuerte tiene que ver con los pasajes de la triple tradición. Hay varios lugares en que Mateo y Lucas coinciden en una palabra o una frase que no está en Marcos. La tabla muestra el más conocido: durante el juicio, los que golpean a Jesús le dicen «Profetiza, ¿quién es el que te golpeó?» (Lc 22:64), y Mateo trae la misma pregunta (Mt 26:68), mientras Marcos solo dice «Profetiza» (Mr 14:65). Si Mateo y Lucas copiaron a Marcos sin conocerse, ¿cómo coinciden los dos en agregar la misma frase? Para quienes sostienen que Mateo fue el primero, se explica porque Lucas conocía a Mateo.',
        { h: 'Las formas de esta postura' },
        'La propuesta de Griesbach, renovada por William Farmer y llamada hoy hipótesis de los dos evangelios, dice que Lucas usó a Mateo y que Marcos combinó a los dos, resumiéndolos. Otros, como la estudiosa alemana Eta Linnemann, que abandonó la crítica liberal después de su conversión, sostienen que los evangelistas escribieron de manera independiente, a partir de su propio testimonio y de la enseñanza oral de los apóstoles, sin copiar unos de otros.',
        { posturas: {
          titulo: '¿Cuál se escribió primero?',
          a: { n: 'Marcos primero', t: 'Mateo y Lucas usaron a Marcos, junto con una colección de dichos de Jesús (Q) o, según otros, Lucas usó también a Mateo. Se apoya en que casi todo Marcos está en los otros dos, en el orden, en el estilo y en que Marcos conserva expresiones que los otros aclaran. Es la postura más extendida hoy, también entre muchos estudiosos evangélicos.' },
          b: { n: 'Mateo primero', t: 'Mateo escribió primero, como dicen todos los testigos antiguos; Lucas lo conoció, y Marcos resumió a los dos o escribió por su cuenta lo que Pedro predicaba. Otros piensan que los tres dependen del testimonio oral de los apóstoles más que de un documento. Se apoya en la tradición de la iglesia y en las coincidencias de Mateo y Lucas contra Marcos.' },
          c: 'Este recurso no toma partido: las dos posturas son defendibles y ninguna doctrina depende de ellas. Las dos aceptan que los evangelios transmiten fielmente lo que Jesús hizo y enseñó, y que fueron escritos por los autores que la iglesia reconoció desde el principio. Lo que no se sigue son las teorías que niegan esa fidelidad (estación 10).'
        } },
        { ir: { t: 'Ver «Jesús escarnecido y golpeado» en la Armonía, con Coincidencias', a: ARM + '#escarnecido/coincidencias', marco: true } }
      ],
      pensar: 'Mateo dejó la mesa de los impuestos para seguir a Jesús, y terminó escribiendo un evangelio. ¿Qué podría hacer Dios con tu vida si respondes a su llamado como respondió Mateo?'
    },
    {
      id: 'lo-que-no', n: 'Lo que no se sigue', ref: '2 Pedro 1:16; Lucas 1:4; Juan 19:35',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Teorías que no se siguen',
          cab: ['Teoría', 'Qué sostiene', 'Por qué no se sigue'],
          filas: [
            ['Crítica de las formas radical (Bultmann, desde 1921)', 'Los relatos de los evangelios nacieron en las comunidades cristianas, que habrían creado muchos dichos y hechos de Jesús según sus necesidades', 'Los testigos seguían vivos y eran conocidos (1 Co 15:6); los apóstoles cuidaban la enseñanza; el tiempo entre los hechos y los evangelios fue corto'],
            ['El Seminario de Jesús (desde 1985)', 'Votando con cuentas de colores, sus miembros concluyeron que Jesús dijo apenas una pequeña parte de lo que le atribuyen los evangelios', 'Parte de la premisa de que lo sobrenatural no ocurre; decide por votación lo que la evidencia no permite decidir'],
            ['Los evangelios como leyenda tardía', 'Los evangelios se escribieron mucho después, por personas que no conocieron a los testigos', 'Los evangelios reflejan con exactitud la geografía, los nombres y las costumbres de Judea antes del año 70; la iglesia antigua conocía a sus autores']
          ],
          nota: 'Estudiar las fuentes de los evangelios es legítimo. Lo que se rechaza son las conclusiones que dependen de negar de antemano lo sobrenatural o el testimonio de los testigos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2p/1/16-18', ref: '2 Pedro 1:16-18' }
      ],
      texto: [
        'Comparar los evangelios y preguntarse cómo se escribieron no es un ataque a la fe: Lucas mismo investigó sus fuentes (Lc 1:3). Pero en los últimos dos siglos algunos estudiosos usaron estas preguntas para llegar a conclusiones que niegan lo que los evangelios afirman. Conviene conocerlas, porque se repiten en documentales, libros populares y clases universitarias.',
        { h: 'La crítica de las formas radical' },
        'A comienzos del siglo XX, estudiosos alemanes como Rudolf Bultmann clasificaron los relatos de los evangelios por su forma: dichos, parábolas, milagros, controversias. Clasificar no es el problema. El problema es la conclusión de Bultmann: que muchos de esos relatos habrían sido creados por las comunidades cristianas y atribuidos después a Jesús. Esa idea olvida que los testigos seguían vivos. Pablo dice que la mayoría de los más de quinientos que vieron a Jesús resucitado vivían todavía cuando él escribía (1 Co 15:6). Una comunidad que inventara historias tendría que enfrentarse a quienes sabían lo que había pasado.',
        { h: 'El Seminario de Jesús' },
        'En 1985, un grupo de estudiosos de Estados Unidos fundó el Seminario de Jesús. Votaban con cuentas de colores si Jesús había dicho o no cada frase de los evangelios, y concluyeron que la gran mayoría no la dijo. Recibieron mucha atención en los medios. Pero partían de una premisa que nunca demostraron: que Jesús no pudo hacer milagros, anunciar su muerte y resurrección ni hablar de sí mismo como el Hijo de Dios. Con esa premisa, la conclusión ya estaba decidida antes de comenzar.',
        { h: 'Testigos, no fábulas' },
        'Los apóstoles sabían que su mensaje sería cuestionado y respondieron con el argumento del testigo: «no os hemos dado a conocer el poder y la venida de nuestro Señor Jesucristo siguiendo fábulas artificiosas, sino como habiendo visto con nuestros propios ojos su majestad» (2 P 1:16). Juan dice de la cruz: «el que lo vio da testimonio, y su testimonio es verdadero» (Jn 19:35). Los estudios recientes sobre la memoria y los testigos, como los de Richard Bauckham, han vuelto a dar peso a este testimonio.',
        'Las dos posturas de las estaciones 8 y 9 aceptan esa fidelidad. Por eso este recurso las presenta como defendibles, y no a las teorías de esta estación.'
      ],
      pensar: 'Pedro dijo que no siguió «fábulas artificiosas», sino lo que vio con sus propios ojos. ¿Cómo puedes responder con mansedumbre y firmeza a quien te dice que los evangelios son leyendas?'
    },
    {
      id: 'inspiracion', n: 'Fuentes e inspiración', ref: 'Juan 14:26; 2 Pedro 1:21; 2 Timoteo 3:16; Lucas 1:3',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: '../../hechos/img/hechos-lucas-escribe.webp', alt: 'Lucas escribe sobre un rollo de papiro a la luz de una lámpara de aceite, con otros rollos y tablillas a su alrededor', pie: 'Lucas escribe «después de haber investigado con diligencia» (Lc 1:3).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-inspiracion.svg', alt: 'Esquema de tres niveles: abajo los hechos de Jesús, en medio los testigos y la investigación del evangelista, arriba el evangelio escrito; a un costado, una franja que acompaña los tres niveles: el Espíritu Santo que recuerda, guía e inspira', pie: 'El Espíritu Santo acompaña todo el proceso: recuerda, guía e inspira.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/14/26', ref: 'Juan 14:26' }
      ],
      texto: [
        'Una pregunta queda flotando: si los evangelistas usaron fuentes, investigaron y quizás conocieron otros evangelios, ¿siguen siendo Palabra de Dios? La respuesta de la Biblia es clara: sí.',
        { h: 'Inspiración no es dictado' },
        'La Escritura afirma que «toda la Escritura es inspirada por Dios» (2 Ti 3:16) y que «los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21). Pero la inspiración no anula la persona del autor. Pablo escribe con su estilo, Juan con el suyo, y Lucas como un historiador cuidadoso. Dios no usó a los autores como máquinas de escribir: los guió en su investigación, en su memoria, en su elección de los hechos y en sus palabras, de modo que el resultado es a la vez palabra de un ser humano y Palabra de Dios.',
        'Por eso, que Lucas investigara «con diligencia» (Lc 1:3) no rebaja su evangelio. Al contrario: el Espíritu Santo lo guió precisamente en esa investigación. Lo mismo vale si Mateo usó a Marcos, o si Marcos resumió a Mateo: el texto que resultó es el que Dios quiso dar a su iglesia.',
        { h: 'El Espíritu que recuerda' },
        'Jesús preparó a sus discípulos para esto. La noche antes de morir les prometió: «el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho» (Jn 14:26). Los apóstoles no dependían solo de su memoria natural: el Espíritu Santo les recordaba las palabras de Jesús y les daba a entender su sentido.',
        { h: 'Cuatro evangelios, una sola verdad' },
        'Dios no nos dio una biografía única de Jesús, sino cuatro evangelios. Cada uno tiene su propósito: Mateo presenta al Rey prometido, Marcos al Siervo en acción, Lucas al Salvador de todos y Juan al Hijo de Dios. Las semejanzas muestran que cuentan la misma historia; las diferencias, que son testimonios distintos. Por eso la iglesia nunca quiso reemplazarlos por una sola narración armonizada.',
        { ejercicio: {
          pregunta: 'Si Lucas usó fuentes escritas y testigos, ¿qué significa eso para la inspiración de su evangelio?',
          opciones: [
            { t: 'Que su evangelio tiene menos autoridad que los demás.', ok: false, por_que: 'Toda la Escritura es inspirada por Dios. Usar fuentes no disminuye la autoridad del texto final.' },
            { t: 'Que el Espíritu Santo lo guió también en su investigación y en lo que escribió.', ok: true, por_que: 'Así lo muestra el propio Lucas al presentar su trabajo, y así lo enseña la Escritura sobre su inspiración.' },
            { t: 'Que la inspiración solo alcanza a las palabras de Jesús, no al relato.', ok: false, por_que: 'La inspiración alcanza a «toda la Escritura», no solo a las palabras de Jesús.' }
          ],
          explicacion: 'La inspiración no anula el trabajo humano: lo guía. Los evangelistas investigaron, recordaron y escribieron, y el Espíritu Santo hizo que lo escrito fuera Palabra de Dios.'
        } }
      ],
      pensar: 'El mismo Espíritu que recordó a los apóstoles las palabras de Jesús te ayuda a entenderlas hoy. ¿Le pides al Espíritu Santo que te enseñe cuando abres la Biblia?'
    },
    {
      id: 'juan', n: 'Juan, el cuarto testigo', ref: 'Juan 20:30-31; Juan 21:24-25; Juan 6:1-15',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: '../../introduccion-nuevo-testamento/img/int-juan-efeso.webp', alt: 'En una casa de Éfeso, Juan, anciano de barba blanca, dicta a un discípulo joven que escribe en un papiro, mientras algunos ancianos de la iglesia escuchan', pie: 'Juan escribe su evangelio en Éfeso, hacia el final del siglo I.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Juan comparte y lo que agrega',
          cab: ['Comparte con los sinópticos', 'Solo en Juan'],
          filas: [
            ['Juan el Bautista y el comienzo del ministerio', 'Las bodas de Caná y Nicodemo'],
            ['La alimentación de los cinco mil (los cuatro evangelios)', 'La samaritana y el paralítico de Betesda'],
            ['Jesús camina sobre el agua', 'El discurso del pan de vida y los «Yo soy»'],
            ['La unción en Betania y la entrada en Jerusalén', 'La resurrección de Lázaro'],
            ['La última cena, el arresto, el juicio y la cruz', 'El lavamiento de pies y Juan 13 a 17'],
            ['La tumba vacía y las apariciones', 'Tomás y el desayuno junto al lago (Juan 21)']
          ],
          nota: 'Cerca del noventa por ciento del contenido de Juan no está en los sinópticos.'
        } },
        { tipo: 'imagen', titulo: 'Foto', src: '../../de-la-biblia-a-nosotros/img/papiro-p52.webp', alt: 'Fragmento de papiro con forma aproximadamente triangular, del tamaño de una tarjeta, con letras griegas en tinta oscura', pie: 'Papiro 52 (Biblioteca John Rylands, Mánchester): Juan 18:31-33, de la primera mitad del siglo II.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true }
      ],
      texto: [
        'Juan no forma parte del problema sinóptico, porque su evangelio es muy distinto de los otros tres. Pero completa el cuadro, y la Armonía lo pone en su lugar junto a ellos.',
        { h: 'Un camino propio' },
        'Juan tiene pocos pasajes en común con los sinópticos. No cuenta el nacimiento en Belén, ni la transfiguración, ni la institución de la santa cena, y no registra parábolas como las de los otros tres. En cambio, cuenta varios viajes de Jesús a Jerusalén para las fiestas, largas conversaciones (Nicodemo, la samaritana), siete señales y los grandes discursos de Jesús, entre ellos la enseñanza de la última noche (Juan 13 a 17). Cerca del noventa por ciento de su contenido es propio.',
        { h: 'Por qué es distinto' },
        'Juan escribió probablemente en Éfeso, hacia el final del siglo I, cuando los otros evangelios ya circulaban. Clemente de Alejandría dice que Juan, sabiendo que los hechos externos ya estaban contados en los otros evangelios, escribió un evangelio espiritual. Juan mismo explica su método: Jesús hizo «muchas otras señales» que no están escritas en su libro, y las que eligió «se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:30-31).',
        { h: 'Un testigo que confirma' },
        'Precisamente porque no depende de los sinópticos, Juan es un testigo independiente. Confirma lo esencial: el ministerio de Juan el Bautista, la alimentación de los cinco mil, Jesús caminando sobre el agua, la unción en Betania, la entrada en Jerusalén, la última cena, la traición, la negación de Pedro, el juicio ante Pilato, la cruz y la tumba vacía. Y añade lo que los otros no dijeron. Sus datos de tiempo, como las tres Pascuas del ministerio, son los que permiten calcular su duración.',
        'El papiro 52, de la primera mitad del siglo II, conserva unos versículos de Juan 18. Fue hallado en Egipto, lejos de Éfeso, y muestra que el evangelio de Juan ya se copiaba y circulaba pocas décadas después de escrito.',
        { ir: { t: 'Ver la alimentación de los cinco mil en la Armonía (los cuatro evangelios)', a: ARM + '#cinco-mil/coincidencias', marco: true } }
      ],
      pensar: 'Juan escribió para que sus lectores creyeran y tuvieran vida en el nombre de Jesús (Jn 20:31). ¿Qué señal de Jesús ha fortalecido más tu fe?'
    }
  ];

  /* ---------------- Taller ---------------- */
  const taller = [
    {
      id: 'taller', n: 'Taller: estudia un pasaje paralelo', ref: 'Mateo 8:23-27; Marcos 4:35-41; Lucas 8:22-25; Mateo 16:13-20; Marcos 8:27-30; Lucas 9:18-20',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: 'img/sin-grupo-estudio.webp', alt: 'Sobre una mesa de madera, tres Biblias abiertas en los evangelios, un cuaderno con notas, lápices de colores y una tableta con tres columnas de texto; las manos de varias personas señalan versículos', pie: 'Comparar los evangelios es un buen ejercicio para el estudio personal y en grupo.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La tempestad calmada: lo que dicen los discípulos y Jesús',
          cab: ['', 'Mateo 8', 'Marcos 4', 'Lucas 8'],
          filas: [
            ['Los discípulos', '¡Señor, sálvanos, que perecemos!', 'Maestro, ¿no tienes cuidado que perecemos?', '¡Maestro, Maestro, que perecemos!'],
            ['Jesús a los discípulos', '¿Por qué teméis, hombres de poca fe?', '¿Por qué estáis así amedrentados? ¿Cómo no tenéis fe?', '¿Dónde está vuestra fe?'],
            ['Cuándo les habla', 'Antes de calmar el mar', 'Después de calmar el mar', 'Después de calmar el mar']
          ],
          nota: 'Texto de la Reina-Valera 1960 (Mt 8:25-26; Mr 4:38-40; Lc 8:24-25).'
        } }
      ],
      texto: [
        'Ahora te toca a ti. Este taller te propone un método sencillo para estudiar cualquier pasaje que aparece en más de un evangelio, usando la Armonía.',
        { h: 'El método en cinco pasos' },
        '1. Abre el pasaje en la Armonía y lee primero cada evangelio completo, columna por columna. 2. Activa Coincidencias y observa lo que comparten. 3. Busca las palabras en negrita: lo que solo registra un evangelio. 4. Pregúntate por qué cada evangelista incluyó o destacó ese detalle, pensando en sus lectores y en el propósito de su libro. 5. Junta todo: ¿qué ves de Jesús al leer los relatos juntos que no verías leyendo uno solo?',
        { h: 'Primer pasaje: la tempestad' },
        'Abre la tempestad calmada y compara lo que dicen los discípulos en la tabla. En Mateo es una oración: «¡Señor, sálvanos, que perecemos!» (Mt 8:25). En Marcos, un reproche: «Maestro, ¿no tienes cuidado que perecemos?» (Mr 4:38). En Lucas, un grito: «¡Maestro, Maestro, que perecemos!» (Lc 8:24). En una barca que se hunde, varios hablan a la vez; cada evangelista recogió una voz.',
        { ir: { t: 'Abrir la tempestad calmada en la Armonía, con Coincidencias', a: ARM + '#tempestad/coincidencias', marco: true } },
        { ejercicio: {
          pregunta: 'En Mateo, Jesús habla a los discípulos antes de calmar el mar; en Marcos y Lucas, después. ¿Cuál es la mejor manera de entender esta diferencia?',
          opciones: [
            { t: 'Uno de los evangelistas se equivocó en el orden de los hechos.', ok: false, por_que: 'No hace falta suponer un error. Los evangelistas no siempre narran en orden estricto, y Jesús pudo hablar antes y después.' },
            { t: 'Mateo destaca la falta de fe de los discípulos y la pone primero; los otros siguen la secuencia de los hechos.', ok: true, por_que: 'Mateo, que agrupa y ordena para enseñar, pone en primer plano la lección sobre la fe.' },
            { t: 'Fueron dos tempestades distintas el mismo día.', ok: false, por_que: 'Los tres relatos coinciden en el lugar, el momento y los detalles; se trata del mismo hecho.' }
          ],
          explicacion: 'Cada evangelista ordena su relato con un propósito. Mateo subraya la enseñanza; Marcos y Lucas, la secuencia. El hecho es el mismo.'
        } },
        { h: 'Segundo pasaje: la confesión de Pedro' },
        'Abre ahora la confesión de Pedro. Marcos registra: «Tú eres el Cristo» (Mr 8:29). Lucas: «El Cristo de Dios» (Lc 9:20). Mateo, el más completo: «Tú eres el Cristo, el Hijo del Dios viviente» (Mt 16:16).',
        { ir: { t: 'Abrir la confesión de Pedro en la Armonía, con Coincidencias', a: ARM + '#confesion-pedro/coincidencias', marco: true } },
        { ejercicio: {
          pregunta: '¿Qué conclusión es correcta al comparar las tres versiones de la confesión de Pedro?',
          opciones: [
            { t: 'Las tres dicen lo mismo en lo esencial: Jesús es el Mesías; Mateo registra la confesión de forma más completa.', ok: true, por_que: 'Los tres registran que Pedro reconoció a Jesús como el Cristo; Mateo conserva además «el Hijo del Dios viviente», importante para sus lectores judíos.' },
            { t: 'Pedro dijo tres frases distintas en tres momentos diferentes.', ok: false, por_que: 'Los tres evangelios ubican la confesión en el mismo momento y lugar, cerca de Cesarea de Filipo.' },
            { t: 'Marcos rebaja la confesión porque no creía que Jesús fuera Hijo de Dios.', ok: false, por_que: 'Marcos comienza su evangelio presentando a «Jesucristo, Hijo de Dios» (Mr 1:1).' }
          ],
          explicacion: 'Un evangelista puede resumir y otro dar la frase completa. Leídos juntos, los tres nos dan la confesión en toda su riqueza.'
        } },
        { ejercicio: {
          pregunta: 'Al usar el botón Coincidencias en un pasaje paralelo, ¿qué conviene hacer con las palabras en negrita?',
          opciones: [
            { t: 'Ignorarlas, porque solo importa lo que comparten los evangelios.', ok: false, por_que: 'Lo propio de cada evangelista también es Palabra de Dios y muchas veces muestra su propósito.' },
            { t: 'Preguntarse por qué ese evangelista incluyó ese detalle.', ok: true, por_que: 'Lo exclusivo suele revelar el énfasis de cada evangelio y lo que quería enseñar a sus lectores.' },
            { t: 'Considerarlas un agregado posterior al texto original.', ok: false, por_que: 'Lo exclusivo de un evangelio es parte de su texto: el evangelista lo escribió así.' }
          ],
          explicacion: 'Las coincidencias muestran la historia común; lo exclusivo, el énfasis de cada evangelista. Las dos cosas enriquecen el estudio.'
        } }
      ],
      pensar: 'Los discípulos en la barca no sabían todavía quién era Jesús: «¿Quién es éste, que aun a los vientos y a las aguas manda, y le obedecen?» (Lc 8:25). Después de estudiar los evangelios juntos, ¿cómo responderías tú esa pregunta?'
    }
  ];

  window.RUTA_DATA = {
    titulo: 'El problema sinóptico',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../../',
    volver: { t: 'Armonía de los evangelios', a: '../' },
    rutas: [
      { id: 'sinoptico', grupo: 'Armonía de los evangelios', n: 'El problema sinóptico', info: 'Por qué Mateo, Marcos y Lucas se parecen tanto y en qué se diferencian', estaciones: [...N.datos, ...N.explicaciones1, ...explicaciones2, ...taller] }
    ]
  };
})();
