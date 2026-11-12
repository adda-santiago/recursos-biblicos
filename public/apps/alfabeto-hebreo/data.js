/* ==========================================================
   Recursos Bíblicos — El alfabeto hebreo y la lectura · contenido de las rutas
   FUENTE de public/apps/alfabeto-hebreo/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/alfabeto_citas.py
   Marcas que el script reemplaza (dos arrobas y luego):
     libro/capítulo/versículos       → texto de la RV 1960 del sitio (public/biblia/rv1960)
     wlc:libro/capítulo/versículos   → hebreo del Códice de Leningrado, con vocales y sin acentos
     wlca:libro/capítulo/versículo   → el mismo hebreo con los acentos de cantilación
     wlcp:libro/capítulo/versículo   → lista de las palabras hebreas del versículo
   Pronunciación: hebreo israelí moderno. Transliteración sencilla para hispanohablantes:
   j = ח y כ sin punto, sh = שׁ, ts = צ, v = ב sin punto y ו; la tilde marca el acento
   cuando no sigue la regla del español. Motor: ../assets/js/ruta-estudio.js.
   ========================================================== */
(() => {
  // Palabras de un versículo con su transliteración y su sentido, en orden de lectura
  const P = (lista, glosas) => lista.map((he, i) => ({ he, tr: glosas[i][0], es: glosas[i][1] }));
  window.__ALEF = { P };

  const panorama = [
    {
      id: 'por-que', n: '¿Por qué leer hebreo si tengo la Reina-Valera?', ref: 'Mateo 5:18; Lucas 24:44; Nehemías 8:8',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:1', ref: 'Génesis 1:1', he: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃', tr: 'Bereshit bará Elohim et hashamáyim veet haárets.',
          palabras: P(['בְּרֵאשִׁית', 'בָּרָא', 'אֱלֹהִים', 'אֵת', 'הַשָּׁמַיִם', 'וְאֵת', 'הָאָרֶץ'], [['bereshit', 'en el principio'], ['bará', 'creó'], ['Elohim', 'Dios'], ['et', '(marca del objeto)'], ['hashamáyim', 'los cielos'], ['veet', 'y (marca del objeto)'], ['haárets', 'la tierra']]),
          rv: 'En el principio creó Dios los cielos y la tierra.' },
        { tipo: 'tabla', titulo: 'Lo que aprenderás', tabla: {
          titulo: 'Lo que vas a aprender en este recurso',
          cab: ['Ruta', 'Qué aprendes', 'Al terminar podrás'],
          filas: [
            ['I. Panorama', 'La lengua, la escritura y la dirección de lectura', 'Abrir una Biblia hebrea sin perderte'],
            ['II. Las 22 letras', 'Forma, nombre, sonido y valor de cada letra', 'Reconocer todas las consonantes'],
            ['III. Las vocales', 'Los puntos de los masoretas y el dagesh', 'Pronunciar una palabra completa'],
            ['IV. A leer', 'Sílabas, nombres, prefijos y signos', 'Leer palabras y frases conocidas'],
            ['Taller práctico', 'Cinco versículos famosos, palabra por palabra', 'Leer en voz alta un versículo entero']
          ],
          nota: 'Este recurso enseña a leer, no a traducir. El vocabulario y la gramática vienen en el recurso siguiente.'
        } }
      ],
      texto: [
        'La Reina-Valera es una traducción fiel, y quien la lee con oración recibe todo lo que necesita para la fe y la vida. Entonces, ¿para qué aprender el alfabeto hebreo? No para reemplazar la Biblia en español ni para sentirse más espiritual que otros, sino para acercarse con más atención a la lengua en que Dios habló a Israel durante más de mil años.',
        'Jesús tomó en serio cada letra del Antiguo Testamento: «ni una jota ni una tilde pasará de la ley, hasta que todo se haya cumplido» (Mt 5:18). La jota es la yod (י), la letra más pequeña del alfabeto hebreo, y la tilde es un rasgo mínimo que distingue una letra de otra. Quien conoce el alfabeto entiende de inmediato de qué está hablando el Señor.',
        { h: 'Tres beneficios concretos' },
        'Primero, podrás usar las herramientas de estudio. Los diccionarios bíblicos, las concordancias, los interlineales y los comentarios citan palabras hebreas. Si sabes leerlas, aunque sea despacio, ya no dependes de la transliteración de cada autor.',
        'Segundo, verás lo que la traducción no puede mostrar: los juegos de palabras, las repeticiones, los acrósticos de los Salmos y los nombres con significado. Adán viene de la tierra (adamá), e Isaac es «risa».',
        'Tercero, leerás con humildad. Cuando ves en hebreo lo que hay detrás de una palabra, entiendes por qué los traductores a veces eligen caminos distintos, y aprecias el trabajo de quienes nos dieron la Biblia en español. Algo así hicieron los levitas en tiempos de Esdras: «leían en el libro de la ley de Dios claramente, y ponían el sentido» (Neh 8:8).',
        'En el panel tienes el primer versículo de la Biblia. Hoy probablemente no puedas leerlo, pero al terminar este recurso podrás leerlo en voz alta, palabra por palabra.',
        { ejercicio: {
          pregunta: '¿Cuál es el propósito principal de aprender el alfabeto hebreo en este recurso?',
          opciones: [
            { t: 'Dejar de usar la Biblia en español, porque solo el hebreo es Palabra de Dios.', ok: false, por_que: 'Una traducción fiel comunica la Palabra de Dios. El hebreo no reemplaza la Biblia en español, sino que ayuda a estudiarla.' },
            { t: 'Poder leer las palabras hebreas que citan las herramientas de estudio y ver detalles del texto original.', ok: true, por_que: 'Ese es el objetivo: leer con más atención y usar mejor los diccionarios, concordancias e interlineales.' },
            { t: 'Hablar hebreo moderno con fluidez.', ok: false, por_que: 'El recurso enseña a leer el hebreo bíblico. Hablar una lengua requiere otro tipo de estudio.' }
          ],
          explicacion: 'Leer el alfabeto es la puerta de entrada al estudio de las palabras de la Biblia. No reemplaza la traducción, la acompaña.'
        } }
      ],
      pensar: 'Jesús dijo que ni una jota pasaría de la ley. ¿Qué te dice eso sobre el cuidado con que Dios ha guardado su Palabra, y sobre el cuidado con que tú la lees?'
    },
    {
      id: 'lengua', n: 'La lengua del Antiguo Testamento', ref: 'Isaías 19:18; 2 Reyes 18:26; Daniel 2:4; Esdras 4:8',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las lenguas del Antiguo Testamento',
          cab: ['Lengua', 'Dónde', 'Cuánto'],
          filas: [
            ['Hebreo', 'De Génesis a Malaquías, salvo los pasajes en arameo', 'Casi todo el Antiguo Testamento'],
            ['Arameo', 'Daniel 2:4–7:28', 'Seis capítulos, de los sueños del rey a la visión de las cuatro bestias'],
            ['Arameo', 'Esdras 4:8–6:18 y 7:12-26', 'Cartas de la corte persa y el relato que las enmarca'],
            ['Arameo', 'Jeremías 10:11', 'Un versículo dirigido a las naciones'],
            ['Arameo', 'Génesis 31:47', 'Dos palabras: el nombre que Labán da al majano'],
          ],
          nota: 'El arameo se escribe con las mismas 22 letras que el hebreo, así que todo lo que aprendas aquí sirve también para leer esos pasajes.'
        } },
        { tipo: 'hebreo', titulo: 'Jeremías 10:11', ref: 'Jeremías 10:11', he: 'כִּדְנָה תֵּאמְרוּן לְהוֹם אֱלָהַיָּא דִּי־שְׁמַיָּא וְאַרְקָא לָא עֲבַדוּ יֵאבַדוּ מֵאַרְעָא וּמִן־תְּחוֹת שְׁמַיָּא אֵלֶּה׃', rv: 'Les diréis así: Los dioses que no hicieron los cielos ni la tierra, desaparezcan de la tierra y de debajo de los cielos.' }
      ],
      texto: [
        'El hebreo es una lengua semítica, de la misma familia que el arameo, el árabe y el antiguo idioma de los fenicios. Fue la lengua de Israel desde los patriarcas hasta después del exilio. La Biblia la llama «la lengua de Canaán» (Is 19:18) y también «lengua de Judá» (2 R 18:26), cuando los oficiales de Ezequías piden al enviado asirio que no hable en hebreo para que el pueblo no entienda.',
        { h: 'Algunos pasajes en arameo' },
        'El arameo era la lengua internacional del Oriente en tiempos de los imperios asirio, babilónico y persa. Por eso el Antiguo Testamento lo usa justo donde la historia de Israel se cruza con la corte de los reyes extranjeros. En Daniel, el cambio de lengua ocurre en medio de una frase: «Entonces hablaron los caldeos al rey en lengua aramea» (Dn 2:4), y el texto sigue en arameo hasta el final del capítulo 7. En Esdras se copian las cartas oficiales del imperio persa en su idioma.',
        'El ejemplo más breve está en Génesis 31:47. Labán y Jacob levantan un montón de piedras como testigo de su pacto: Labán, que es arameo, lo llama Jegar Sahaduta, y Jacob lo llama Galaad. Dos nombres que significan lo mismo, uno en cada lengua.',
        { h: 'Una lengua concreta' },
        'El hebreo bíblico es una lengua de imágenes. Muchas palabras abstractas nacen de algo que se ve o se toca: la misma raíz da «aliento», «viento» y «espíritu» (rúaj), y la «gloria» (kavod) viene de una raíz que tiene que ver con el peso. Por eso los profetas y los salmistas hablan con tanta fuerza: piensan con el cuerpo, con la tierra y con la vida diaria.',
        'Después del exilio, los judíos hablaban arameo en la vida diaria, y siglos después el hebreo dejó de ser lengua materna. Siguió vivo en la lectura de la Escritura y en la oración, y en el siglo XX volvió a hablarse en el Estado de Israel. El hebreo moderno conserva el mismo alfabeto, y su pronunciación es la que usa este recurso.',
        { ir: { t: 'Ver «Hebreo, arameo y griego» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#escritura/2' } },
        { ejercicio: {
          pregunta: '¿Por qué hay pasajes en arameo dentro del Antiguo Testamento?',
          opciones: [
            { t: 'Porque esos libros se escribieron muchos siglos después de Cristo.', ok: false, por_que: 'Daniel y Esdras pertenecen a la época de los imperios babilónico y persa, siglos antes de Cristo.' },
            { t: 'Porque el arameo era la lengua oficial de los imperios con los que Israel convivió en esa época.', ok: true, por_que: 'Los pasajes en arameo aparecen donde el relato se acerca a la corte extranjera o cita sus documentos.' },
            { t: 'Porque los copistas tradujeron esos capítulos por error.', ok: false, por_que: 'El cambio de lengua es parte del texto desde el principio, y Daniel lo anuncia expresamente.' }
          ],
          explicacion: 'Daniel y Esdras usan el arameo de la corte. Es un detalle que muestra que esos libros nacieron en el mundo que describen.'
        } }
      ],
      pensar: 'Dios habló a Israel en su propia lengua y, cuando su pueblo vivió entre otras naciones, también en la lengua de esas naciones. ¿Qué te enseña eso sobre un Dios que quiere ser entendido?'
    },
    {
      id: 'escritura', n: 'De la escritura fenicia a la escritura cuadrada', ref: 'Mateo 5:18; 2 Reyes 20:20; Ezequiel 9:4',
      fecha: -700,
      visual: [
        { tipo: 'imagen', titulo: 'Gézer', src: '../tierra-de-israel/img/calendario-gezer.jpg', alt: 'El calendario de Gézer: una pequeña tablilla de piedra caliza con siete líneas de escritura hebrea antigua que enumeran los meses del trabajo agrícola', pie: 'Calendario de Gézer, siglo X a.C. (Museo Arqueológico de Estambul): escritura hebrea antigua.', origen: 'foto', licencia: 'Osama Shukir Muhammed Amin FRCP(Glasg), CC BY-SA 4.0, Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Siloé', src: 'img/inscripcion-siloe.jpg', alt: 'La inscripción de Siloé: una placa de piedra con seis líneas de escritura hebrea antigua, tallada en el túnel de Ezequías en Jerusalén', pie: 'Inscripción de Siloé, hacia el 700 a.C. (Museo Arqueológico de Estambul): cuenta cómo se encontraron los dos equipos que cavaban el túnel.', origen: 'foto', licencia: 'Oncenawhile, CC0, Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Qumrán', src: '../de-la-biblia-a-nosotros/img/rollo-isaias.webp', alt: 'Sección desenrollada del Gran rollo de Isaías, con columnas de texto hebreo sobre pergamino gastado', pie: 'El Gran rollo de Isaías, hacia el 125 a.C.: ya en escritura cuadrada.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres etapas de la escritura hebrea',
          cab: ['Etapa', 'Época', 'Ejemplos'],
          filas: [
            ['Escritura hebrea antigua (paleohebrea)', 'Desde hacia el siglo X a.C. hasta el exilio', 'Calendario de Gézer, inscripción de Siloé, sellos y óstraca'],
            ['Escritura cuadrada', 'Desde el período persa, después del exilio', 'Rollos del mar Muerto, textos de la época de Jesús'],
            ['Escritura cuadrada con vocales', 'Desde los masoretas (siglos VII a X d.C.)', 'Códice de Alepo, Códice de Leningrado, Biblias impresas'],
          ],
          nota: 'Las letras cambiaron de forma, pero son las mismas 22, en el mismo orden y con los mismos sonidos.'
        } }
      ],
      texto: [
        'El alfabeto hebreo es uno de los más antiguos del mundo. Según la mayoría de los estudiosos, nació de dibujos sencillos que representaban cosas: la primera letra se parecía a la cabeza de un buey (álef significa «buey»), y la segunda a una casa (bet, «casa»). Con el tiempo cada dibujo dejó de representar la cosa y pasó a representar solo el primer sonido de su nombre. Así nació un sistema de apenas 22 signos, mucho más fácil de aprender que los cientos de signos de Egipto o de Babilonia.',
        { h: 'La escritura de los reyes de Israel' },
        'Durante la época de los jueces, los reyes y los profetas anteriores al exilio, Israel escribió con letras parecidas a las de sus vecinos fenicios. Es la llamada escritura paleohebrea. La vemos en el calendario de Gézer, una tablilla escolar con los meses del año agrícola, y en la inscripción de Siloé, tallada por los obreros que cavaron el túnel del rey Ezequías para llevar agua a Jerusalén (2 R 20:20). Moisés, David e Isaías escribieron con letras de este tipo.',
        { h: 'La escritura cuadrada' },
        'Después del exilio, los judíos adoptaron la escritura que se usaba para el arameo en el imperio persa. Sus letras tienen forma más cuadrada, y es la que se usa hasta hoy. Los rollos del mar Muerto ya están escritos así; en algunos de ellos, los copistas escribieron el nombre de Dios con las letras antiguas, como muestra de reverencia.',
        'Este detalle aclara las palabras de Jesús sobre «una jota» (Mt 5:18). En la escritura cuadrada, la yod es la letra más pequeña de todas. En la escritura antigua no lo era. Jesús hablaba de la Biblia que se leía en las sinagogas de su tiempo, escrita con las mismas letras que vas a aprender aquí.',
        'Otro detalle: en Ezequiel 9:4, Dios manda poner «una señal» en la frente de los que gemían por el pecado de Jerusalén. La palabra hebrea es tav, que es también el nombre de la última letra del alfabeto, que en la escritura antigua tenía forma de cruz o de equis.',
        { ejercicio: {
          pregunta: 'Si Moisés o David volvieran a ver una Biblia hebrea impresa hoy, ¿qué les resultaría nuevo?',
          opciones: [
            { t: 'Las palabras y el orden de las letras, porque el alfabeto cambió por completo.', ok: false, por_que: 'Las 22 letras son las mismas, en el mismo orden y con los mismos sonidos. Lo que cambió fue el dibujo de cada letra.' },
            { t: 'La forma cuadrada de las letras y los puntos de las vocales.', ok: true, por_que: 'Ellos escribían con letras paleohebreas y sin vocales. La escritura cuadrada llegó después del exilio, y los puntos vocálicos, con los masoretas.' },
            { t: 'Que se lea de derecha a izquierda.', ok: false, por_que: 'El hebreo siempre se escribió de derecha a izquierda.' }
          ],
          explicacion: 'La forma de las letras cambió, pero no el texto: se copiaba letra por letra a la nueva escritura.'
        } }
      ],
      pensar: 'Las letras cambiaron de forma con los siglos, pero el mensaje se copió letra por letra. ¿Qué te dice eso sobre la fidelidad de Dios para guardar su Palabra a través de la historia?'
    },
    {
      id: 'derecha', n: 'De derecha a izquierda', ref: 'Génesis 1:1; Salmo 119:105',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 119:105', ref: 'Salmo 119:105', he: 'נֵר־לְרַגְלִי דְבָרֶךָ וְאוֹר לִנְתִיבָתִי׃', tr: 'Ner leraglí devareja veor lintivatí.',
          palabras: P(['נֵר־לְרַגְלִי', 'דְבָרֶךָ', 'וְאוֹר', 'לִנְתִיבָתִי'], [['ner-leraglí', 'lámpara para mi pie'], ['devareja', 'tu palabra'], ['veor', 'y luz'], ['lintivatí', 'para mi camino']]),
          rv: 'Lámpara es a mis pies tu palabra, Y lumbrera a mi camino.' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Español y hebreo, lado a lado',
          cab: ['', 'Español', 'Hebreo'],
          filas: [
            ['Dirección', 'De izquierda a derecha', 'De derecha a izquierda'],
            ['Primera página del libro', 'A la izquierda del lomo', 'A la derecha del lomo'],
            ['Mayúsculas', 'Sí', 'No: todas las letras son del mismo tipo'],
            ['Letras unidas', 'En la letra manuscrita', 'No: cada letra va separada'],
            ['Vocales', 'Son letras', 'Son puntos, debajo, encima o dentro de las letras'],
            ['Números', 'Cifras 1, 2, 3…', 'En la Biblia, las mismas letras (ruta II)'],
          ],
          nota: 'En un texto mixto, como los de este recurso, la palabra hebrea se lee de derecha a izquierda aunque el párrafo en español vaya de izquierda a derecha.'
        } }
      ],
      texto: [
        'Lo primero que hay que acostumbrar es la mirada. El hebreo se escribe y se lee de derecha a izquierda. Una Biblia hebrea se abre por lo que para nosotros es el final del libro: Génesis está donde una Biblia en español tiene Apocalipsis. Dentro de cada línea, la primera palabra está a la derecha.',
        'Mira el panel: la primera palabra del Salmo 119:105 es נֵר־לְרַגְלִי, «lámpara a mis pies», y está en el extremo derecho. En la lista de palabras, la primera tarjeta también está a la derecha. Recórrelas con el dedo, de derecha a izquierda, mientras lees la transliteración.',
        { h: 'Cada letra, por separado' },
        'El hebreo no tiene mayúsculas ni minúsculas, y en el texto impreso las letras no se unen entre sí. Eso facilita mucho el aprendizaje: cada letra tiene una sola forma, salvo cinco letras que cambian al final de la palabra (las verás en la ruta II).',
        'Las letras se apoyan en una línea imaginaria superior, no inferior como en español. Por eso la mayoría cuelga hacia abajo desde esa línea, y algunas, como la lámed (ל), sobresalen por encima.',
        { h: 'Un consejo práctico' },
        'Al principio, tu mano y tu vista querrán ir hacia la derecha. Para evitarlo, lee siempre señalando con el dedo o con un lápiz, y avanza de derecha a izquierda. Si copias palabras a mano, empieza por la letra de la derecha. Escribir es una de las mejores formas de memorizar las letras, porque obliga a mirar cada una con detalle.',
        'Este recurso marca el hebreo con una letra un poco más grande. Cuando aparezca dentro de un párrafo en español, lee el hebreo de derecha a izquierda y luego sigue el español como siempre.',
        { ejercicio: {
          pregunta: 'En la palabra hebrea שָׁלוֹם (shalom, «paz»), ¿cuál es la primera letra que se lee?',
          opciones: [
            { t: 'La letra del extremo izquierdo.', ok: false, por_que: 'La letra de la izquierda es la última: la mem final (ם), que da el sonido «m» de shalom.' },
            { t: 'La letra del extremo derecho.', ok: true, por_que: 'La primera letra es la del extremo derecho: la shin (שׁ), que da el sonido «sh» de shalom.' },
            { t: 'La letra del centro, porque las palabras hebreas se leen desde el medio.', ok: false, por_que: 'No hay palabras que se lean desde el medio. Siempre se empieza por la derecha.' }
          ],
          explicacion: 'Shalom se lee שׁ (sh) + וֹ (o) … hasta terminar en ם (m), de derecha a izquierda.'
        } }
      ],
      pensar: '«Lámpara es a mis pies tu palabra» (Sal 119:105). Aprender a leer en otra dirección exige paciencia y práctica diaria. ¿Qué lugar ocupa la lectura paciente de la Palabra en tu día?'
    },
    {
      id: 'consonantes', n: 'Solo consonantes: cómo leían sin vocales', ref: 'Nehemías 8:8; Romanos 3:2',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../de-la-biblia-a-nosotros/img/escriba-copia.webp', alt: 'Un escriba judío anciano copia con cálamo un rollo de la ley sobre pergamino, a la luz de una lámpara de aceite, con el rollo modelo abierto a su lado', pie: 'Durante siglos, la Escritura se copió solo con consonantes; la lectura correcta se aprendía de memoria y en voz alta.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Un ejemplo', tabla: {
          titulo: 'Las mismas tres consonantes, tres palabras distintas',
          cab: ['Sin vocales', 'Con vocales', 'Se lee', 'Significa'],
          filas: [
            ['דבר', 'דָּבָר', 'davar', 'palabra, asunto'],
            ['דבר', 'דִּבֶּר', 'diber', 'habló'],
            ['דבר', 'דֶּבֶר', 'dever', 'peste, plaga (Éx 9:3)'],
          ],
          nota: 'El contexto casi siempre deja una sola lectura posible. Los masoretas pusieron por escrito la lectura que se había transmitido.'
        } }
      ],
      texto: [
        'El alfabeto hebreo solo tiene consonantes. Durante más de dos mil años, la Escritura se escribió sin vocales, y así se sigue escribiendo hoy el rollo de la ley que se lee en las sinagogas. ¿Cómo sabían leerla?',
        'Para quien habla una lengua, las consonantes bastan casi siempre. Piensa en un mensaje de texto escrito con apuro: «nos vmos mñn en l iglsia». Lo entiendes porque conoces el español y el contexto. Lo mismo pasaba con el hebreo cuando era la lengua materna del pueblo.',
        { h: 'Una lectura que se transmitía de viva voz' },
        'Además, la Escritura no se leía como un libro cualquiera. Se leía en voz alta en las reuniones, se recitaba y se enseñaba de padres a hijos (Dt 6:7). El texto escrito y la lectura aprendida de memoria caminaban juntos. En tiempos de Esdras, cuando el pueblo volvió del exilio hablando arameo, los levitas leían la ley y explicaban su sentido para que todos entendieran (Neh 8:8).',
        'En el panel tienes un ejemplo. Las tres consonantes דבר pueden leerse de tres maneras, y cada lectura es una palabra distinta. En un versículo concreto, sin embargo, casi nunca hay duda: «la palabra de Jehová» no se confunde con «la peste».',
        { h: 'Algunas letras ayudaban' },
        'Con el tiempo, los escribas empezaron a usar tres consonantes, ה, ו y י, para indicar algunas vocales, sobre todo al final de las palabras. Las llamaremos letras que ayudan a leer (ruta III). Pero el sistema completo de vocales llegó mucho después, cuando los masoretas, entre los siglos VII y X d.C., inventaron los puntos que usaremos en este recurso.',
        'Esto explica algo que verás en los comentarios bíblicos: a veces un estudioso propone leer las mismas consonantes con otras vocales. Es una discusión seria y limitada a pocos casos, porque la lectura de los masoretas recoge una tradición muy antigua. La Reina-Valera sigue el texto masorético.',
        { ir: { t: 'Ver «El Texto Masorético» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#antiguo/2' } },
        { ejercicio: {
          pregunta: 'Si el hebreo se escribía sin vocales, ¿cómo se conservó la pronunciación correcta del texto bíblico?',
          opciones: [
            { t: 'Cada lector inventaba las vocales que prefería.', ok: false, por_que: 'La lectura no era libre: se aprendía y se transmitía en la comunidad, en voz alta.' },
            { t: 'Por la lectura en voz alta, que se enseñaba y se transmitía junto con el texto escrito.', ok: true, por_que: 'Texto escrito y lectura tradicional iban juntos. Los masoretas pusieron esa lectura por escrito con sus puntos.' },
            { t: 'Porque las vocales estaban escritas desde Moisés, pero se borraron con el tiempo.', ok: false, por_que: 'Los puntos vocálicos son un invento de los masoretas, siglos después de Cristo. Antes no existían.' }
          ],
          explicacion: 'La tradición de lectura se cuidó tanto como el texto escrito. Por eso los puntos de los masoretas son tan valiosos.'
        } }
      ],
      pensar: 'A los judíos «les ha sido confiada la palabra de Dios» (Ro 3:2), y la guardó leyéndola en voz alta y enseñándola a sus hijos. ¿Cómo estás transmitiendo tú la Palabra a quienes vienen detrás?'
    },
    {
      id: 'como-usar', n: 'Cómo usar este recurso y la tabla del alfabeto', ref: 'Deuteronomio 6:6-7; Salmo 1:2',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/aprender-letras.webp', alt: 'Una persona adulta estudia sola en la mesa de su casa, de noche, con una Biblia abierta, un cuaderno donde copia letras hebreas y una lámpara', pie: 'Unos minutos al día, con lápiz y cuaderno, bastan para aprender el alfabeto.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Plan sugerido', tabla: {
          titulo: 'Un plan de cuatro semanas',
          cab: ['Semana', 'Qué estudiar', 'Práctica diaria'],
          filas: [
            ['1', 'Ruta I y las letras de álef a nun', 'Copiar cada letra diez veces y decir su nombre en voz alta'],
            ['2', 'Las letras de sámej a tav, las finales y las que se confunden', 'Diez minutos en el modo de práctica de la tabla'],
            ['3', 'Ruta III, las vocales', 'Leer en voz alta las palabras de ejemplo'],
            ['4', 'Ruta IV y el taller', 'Un versículo del taller por día, primero con ayudas y luego sin ellas'],
          ],
          nota: 'Es mejor estudiar diez minutos cada día que dos horas una vez por semana.'
        } }
      ],
      texto: [
        'Este recurso es una herramienta de estudio para aprender solo, a tu ritmo. No necesitas saber nada de hebreo para empezar, y no hay exámenes ni puntaje.',
        { h: 'Cómo está organizado' },
        'La ruta I, que estás terminando, presenta la lengua y su escritura. La ruta II enseña las 22 letras en grupos pequeños, con su nombre, su sonido, su valor numérico y una palabra bíblica de ejemplo. La ruta III enseña los puntos de las vocales y algunos signos que cambian el sonido de las letras. La ruta IV junta todo para leer palabras y frases. El taller práctico aplica lo aprendido a cinco versículos famosos.',
        'En las estaciones con un pasaje en hebreo, el panel muestra el texto hebreo, su transliteración, las palabras una por una y la Reina-Valera 1960. El botón «Ocultar ayudas» deja solo el hebreo, para que practiques la lectura sin mirar la respuesta.',
        { h: 'La tabla del alfabeto' },
        'El recurso incluye una tabla interactiva con todas las letras y las vocales. Al tocar una letra ves su nombre, su sonido, su valor y ejemplos. Tiene además un modo de práctica: te muestra una letra y eliges su nombre. Conviene tenerla a mano mientras recorres las rutas.',
        { ir: { t: 'Abrir la tabla del alfabeto hebreo', a: 'alfabeto/' } },
        { h: 'La pronunciación que usamos' },
        'Hay varias formas de pronunciar el hebreo bíblico. Este recurso usa la del hebreo israelí moderno, la que enseñan la mayoría de los institutos bíblicos y la que se oye hoy en Israel. En la ruta IV verás en qué se diferencia de la pronunciación antigua. La transliteración está pensada para hispanohablantes: j suena como nuestra jota, sh como en «show», ts como en «tsunami», y la tilde marca la sílaba acentuada cuando no sigue la regla del español.',
        { h: 'Un hábito, no un esfuerzo aislado' },
        'Moisés pidió que las palabras de Dios estuvieran en el corazón y se repitieran «estando en tu casa, y andando por el camino» (Dt 6:7). Aprender un alfabeto funciona igual: con repeticiones breves y frecuentes.'
      ],
      pensar: 'El salmista medita en la ley de Jehová «de día y de noche» (Sal 1:2). ¿Qué momento fijo de tu día puedes dedicar a estudiar la Palabra con calma durante las próximas cuatro semanas?'
    }
  ];

  window.__ALEF.panorama = panorama;
})();
/* El alfabeto hebreo y la lectura · ruta II. Las 22 letras (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;
  const CAB = ['Letra', 'Nombre', 'Sonido', 'Valor', 'Ejemplo'];
  const NOTA = 'Pronunciación del hebreo israelí moderno. El valor es el número que la letra representa (estación «Las letras como números»).';

  const letras = [
    {
      id: 'alef-dalet', n: 'Álef, bet, guímel y dálet', ref: 'Génesis 1:1; Juan 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Las cuatro primeras letras',
          cab: CAB,
          filas: [
            ['א', 'Álef', 'Muda: solo sostiene la vocal', '1', 'אֱלֹהִים (Elohim), Dios'],
            ['בּ', 'Bet', 'b, como en «boca»', '2', 'בַּיִת (báyit), casa'],
            ['ב', 'Vet', 'v, como b suave', '2', 'אָב (av), padre'],
            ['ג', 'Guímel', 'g, siempre como en «gato»', '3', 'גָּדוֹל (gadol), grande'],
            ['ד', 'Dálet', 'd, como en «dedo»', '4', 'דָּוִד (David)'],
          ],
          nota: NOTA
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/letras-maestro.webp', alt: 'En una sala de la sinagoga del siglo I, un maestro anciano señala con el dedo las letras hebreas escritas en una tablilla mientras un grupo de niños las repite en voz alta', pie: 'Los niños judíos aprendían las letras repitiéndolas en voz alta con un maestro.', origen: 'ia' }
      ],
      texto: [
        'Empezamos por el principio: las cuatro primeras letras. Míralas en el panel, pronuncia su nombre en voz alta y cópialas en un cuaderno, empezando por la derecha.',
        { h: 'Álef (א)' },
        'La primera letra no tiene sonido propio. Es una consonante muda que sostiene la vocal que la acompaña: אָ se lee «a», אֵ se lee «e». Por eso el nombre de Dios, אֱלֹהִים, empieza con álef y se lee Elohim. Su nombre significa «buey»; en la escritura antigua la letra parecía la cabeza de un buey con sus cuernos.',
        { h: 'Bet (בּ) y vet (ב)' },
        'La segunda letra es una casa abierta hacia la izquierda, y su nombre significa justamente «casa». Tiene dos sonidos. Con un punto en el centro (בּ) suena b; sin el punto (ב) suena v. Es la primera letra de la Biblia: בְּרֵאשִׁית, bereshit, «en el principio» (Gn 1:1). Observa la pequeña base que sobresale a la derecha, abajo: es lo que la distingue de la kaf (כ), que es redondeada.',
        { h: 'Guímel (ג)' },
        'La tercera letra suena siempre g, como en «gato» o «guerra», nunca como en «gente». Tiene un pie que se abre hacia la izquierda. Su nombre se suele relacionar con el camello (gamal).',
        { h: 'Dálet (ד)' },
        'La cuarta letra suena d. Su nombre se parece a la palabra «puerta» (délet). Tiene un techo horizontal que sobresale un poco a la derecha, en la esquina. Fíjate bien en esa esquina, porque la resh (ר), que verás más adelante, es igual pero redondeada.',
        { h: 'Un orden muy antiguo' },
        'Álef, bet, guímel, dálet… El griego aprendió el alfabeto de los fenicios y dio a sus letras nombres parecidos: alfa, beta, gamma, delta. De alfa y beta viene nuestra palabra «alfabeto». Cuando Jesús dice «Yo soy el Alfa y la Omega» (Ap 22:13), usa la primera y la última letra del alfabeto griego, el equivalente de álef y tav.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la letra ב, sin punto en el centro?',
          opciones: [
            { t: 'b, como en «boca».', ok: false, por_que: 'Ese es el sonido de la letra con el punto en el centro (בּ), que se llama bet.' },
            { t: 'v, como una b suave.', ok: true, por_que: 'Sin el punto, la letra se llama vet y suena v.' },
            { t: 'Es muda, como la álef.', ok: false, por_que: 'La única letra muda de este grupo es la álef (א).' }
          ],
          explicacion: 'Bet y vet son la misma letra. El punto en el centro, que se llama dagesh, cambia su sonido (ruta III).'
        } }
      ],
      pensar: 'La Biblia hebrea empieza con bet, la letra de la «casa», y el primer versículo nos presenta a Dios como Creador. ¿Qué significa para ti que tu vida esté edificada sobre el Dios que creó todas las cosas?'
    },
    {
      id: 'he-jet', n: 'He, vav, zayin y jet', ref: 'Éxodo 26:32; Salmo 136:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la quinta a la octava letra',
          cab: CAB,
          filas: [
            ['ה', 'He', 'h suave, como al soplar; muda al final de palabra', '5', 'הַר (har), monte'],
            ['ו', 'Vav', 'v; a veces es vocal o o u', '6', 'וְ (ve), y'],
            ['ז', 'Zayin', 'z sonora, como un zumbido', '7', 'זָהָב (zahav), oro'],
            ['ח', 'Jet', 'j, como en «jardín»', '8', 'חֶסֶד (jésed), misericordia'],
          ],
          nota: NOTA
        } },
        { tipo: 'tabla', titulo: 'He o jet', tabla: {
          titulo: 'Cómo distinguir la he de la jet',
          cab: ['Letra', 'Qué mirar', 'Ejemplo'],
          filas: [
            ['ה', 'La pata izquierda no toca el techo: queda un espacio arriba', 'הַר, monte'],
            ['ח', 'Las dos patas tocan el techo: no hay espacio', 'חַיִּים, vida'],
          ],
          nota: 'La tav (ת), que verás al final, se parece a ambas, pero tiene un pie hacia la izquierda.'
        } }
      ],
      texto: [
        { h: 'He (ה)' },
        'La he suena como una h suave, un soplo, parecida a la «j» aspirada de algunos países del Caribe. Al final de una palabra casi siempre es muda y solo indica que la palabra termina en vocal: תּוֹרָה se lee Torá. Muchos nombres femeninos terminan así: שָׂרָה, Sara. Como artículo, delante de una palabra, significa «el» o «la»: הַר es «monte» y הָהָר, «el monte».',
        { h: 'Vav (ו)' },
        'La vav es un trazo vertical con una pequeña cabeza. Su nombre significa «gancho» o «clavo», y así se llaman los ganchos de oro del tabernáculo (Éx 26:32). Suena v, pero también sirve para escribir dos vocales: con un punto encima (וֹ) se lee o, y con un punto a su izquierda (וּ) se lee u. Lo verás en la ruta III.',
        'Es una de las letras más frecuentes de la Biblia, porque pegada al comienzo de una palabra significa «y». Los relatos hebreos encadenan una acción tras otra con esa vav: «y dijo Dios… y fue… y vio Dios…». Por eso la Reina-Valera empieza tantos versículos con «y».',
        { h: 'Zayin (ז)' },
        'La zayin suena como una z sonora, la de la palabra inglesa «zoo», con vibración, como el zumbido de una abeja. En la práctica, muchos hispanohablantes la pronuncian como una s, y se entiende. Parece una vav con un sombrero más ancho.',
        { h: 'Jet (ח)' },
        'La jet suena como nuestra jota: חַיִּים, jayim, «vida». Es la letra de palabras muy importantes, como חֶסֶד, jésed, la misericordia fiel de Dios hacia su pueblo, que el Salmo 136 repite veintiséis veces: «porque para siempre es su misericordia».',
        'En el segundo panel tienes el truco para no confundir la he con la jet: la he tiene un espacio en la esquina superior izquierda, como una ventana abierta; la jet está cerrada arriba.',
        { ejercicio: {
          pregunta: 'En la palabra תּוֹרָה (Torá), ¿cómo suena la ה del final?',
          opciones: [
            { t: 'Como una j fuerte: «Toraj».', ok: false, por_que: 'La j fuerte es la jet (ח), que tiene las dos patas unidas al techo.' },
            { t: 'No suena: solo indica que la palabra termina en vocal.', ok: true, por_que: 'Al final de la palabra, la he casi siempre es muda. Se lee Torá.' },
            { t: 'Como una h aspirada fuerte: «Torah», con soplo al final.', ok: false, por_que: 'Al final de palabra la he no se pronuncia, aunque muchas transliteraciones escriban «Torah».' }
          ],
          explicacion: 'La he final es una de las letras que ayudan a leer: marca una vocal al final de la palabra.'
        } }
      ],
      pensar: 'La palabra חֶסֶד (jésed) describe un amor fiel que no abandona el pacto. ¿En qué momento de tu vida has visto que «para siempre es su misericordia»?'
    },
    {
      id: 'tet-kaf', n: 'Tet, yod y kaf', ref: 'Mateo 5:18; Génesis 1:4; Éxodo 28:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la novena a la undécima letra',
          cab: CAB,
          filas: [
            ['ט', 'Tet', 't', '9', 'טוֹב (tov), bueno'],
            ['י', 'Yod', 'y, como en «yo»', '10', 'יָד (yad), mano'],
            ['כּ', 'Kaf', 'k, como en «casa»', '20', 'כֹּהֵן (kohén), sacerdote'],
            ['כ', 'Jaf', 'j, como en «jardín»', '20', 'לְךָ (lejá), a ti'],
            ['ך', 'Jaf final', 'j, al final de palabra', '20', 'מֶלֶךְ (mélej), rey'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Génesis 1:4', ref: 'Génesis 1:4', he: 'וַיַּרְא אֱלֹהִים אֶת־הָאוֹר כִּי־טוֹב וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ׃', rv: 'Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas.' }
      ],
      texto: [
        { h: 'Tet (ט)' },
        'La tet suena t, igual que la tav (ת). En la pronunciación antigua eran sonidos distintos, pero hoy se pronuncian igual. Su forma es redonda, como un recipiente con el borde superior derecho doblado hacia adentro. Aparece en una palabra que se repite siete veces en el primer capítulo de la Biblia: טוֹב, tov, «bueno». En el panel puedes buscarla en Génesis 1:4: «Y vio Dios que la luz era buena».',
        { h: 'Yod (י)' },
        'La yod es la letra más pequeña del alfabeto: una pequeña coma suspendida en la parte superior de la línea. Es la «jota» de Mateo 5:18, y por eso decimos que algo no cambió «ni una jota». Suena y, como en «yo» o en «ya»: יָד, yad, «mano».',
        'La yod abre muchísimos nombres bíblicos: יִשְׂרָאֵל (Israel), יְהוּדָה (Judá), יִצְחָק (Isaac), יַעֲקֹב (Jacob), יוֹסֵף (José). En español, esos nombres pasaron por el griego y el latín y perdieron el sonido y inicial, pero en hebreo todos empiezan igual. También empieza con yod el nombre de Josué, יְהוֹשֻׁעַ, Yehoshúa, que en su forma abreviada, Yeshúa, es el nombre de Jesús.',
        { h: 'Kaf (כּ) y jaf (כ)' },
        'Como la bet, la kaf tiene dos sonidos: con un punto en el centro (כּ) suena k, y sin el punto (כ) suena j, como la jet. Es redondeada, sin la base que sobresale de la bet. Su nombre significa «palma de la mano», y su forma recuerda una mano ahuecada.',
        'Al final de una palabra, la jaf cambia de forma: se estira hacia abajo, debajo de la línea (ך), como en מֶלֶךְ, mélej, «rey». Es la primera de las cinco letras finales que verás en esta ruta.',
        { ejercicio: {
          pregunta: '¿Por qué Jesús habló de «una jota» para decir que ni el detalle más pequeño de la ley pasaría?',
          opciones: [
            { t: 'Porque la yod es la letra más pequeña del alfabeto hebreo.', ok: true, por_que: 'En la escritura cuadrada que se leía en las sinagogas, la yod es apenas un trazo pequeño en lo alto de la línea.' },
            { t: 'Porque la yod es la primera letra del alfabeto.', ok: false, por_que: 'La primera letra es la álef (א). La yod es la décima.' },
            { t: 'Porque la jota española es una letra que casi no se usa.', ok: false, por_que: 'Jesús no hablaba de la jota española, sino de la yod hebrea; «jota» es como la traducción la nombra.' }
          ],
          explicacion: 'La yod es la letra más pequeña. Ni siquiera ella, dice Jesús, pasará de la ley hasta que todo se cumpla.'
        } }
      ],
      pensar: 'El nombre de Jesús empieza con yod, la letra más pequeña, y significa Jehová salva. El Hijo de Dios se despojó a sí mismo y se humilló para salvarnos (Fil 2:7-8). ¿Qué te dice esa humildad sobre el amor de Dios por ti?'
    },
    {
      id: 'lamed-nun', n: 'Lámed, mem y nun', ref: 'Deuteronomio 6:5; Génesis 1:2; Deuteronomio 18:18',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la duodécima a la decimocuarta letra',
          cab: CAB,
          filas: [
            ['ל', 'Lámed', 'l', '30', 'לֵב (lev), corazón'],
            ['מ', 'Mem', 'm', '40', 'מַיִם (máyim), aguas'],
            ['ם', 'Mem final', 'm, al final de palabra', '40', 'שָׁלוֹם (shalom), paz'],
            ['נ', 'Nun', 'n', '50', 'נָבִיא (naví), profeta'],
            ['ן', 'Nun final', 'n, al final de palabra', '50', 'בֵּן (ben), hijo'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:5', ref: 'Deuteronomio 6:5', he: 'וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל־לְבָבְךָ וּבְכָל־נַפְשְׁךָ וּבְכָל־מְאֹדֶךָ׃', rv: 'Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas.' }
      ],
      texto: [
        { h: 'Lámed (ל)' },
        'La lámed es la única letra que sube por encima de la línea, como un bastón o una vara de pastor. Su nombre se relaciona con la aguijada con que se guiaba a los bueyes, y comparte raíz con el verbo «aprender» (lamad). Suena l. Es fácil de reconocer: לֵב, lev, «corazón».',
        'Pegada al comienzo de una palabra, la lámed significa «a», «para» o «de»: לְדָוִד, ledavid, «de David» o «para David», como en el título de muchos salmos.',
        { h: 'Mem (מ, ם)' },
        'La mem suena m. Tiene dos formas: en medio de la palabra es abierta abajo (מ), y al final es un cuadrado cerrado (ם). Su nombre se parece a la palabra «aguas», מַיִם, máyim, que tiene las dos formas: empieza con la abierta y termina con la cerrada. «Y el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2).',
        'La mem cerrada aparece al final de muchas palabras en plural, porque la terminación masculina plural es -im: אֱלֹהִים (Elohim), כְּרֻבִים (querubines), שְׂרָפִים (serafines). De ahí vienen los plurales «querubín» y «serafín» que usa el español.',
        { h: 'Nun (נ, ן)' },
        'La nun suena n. En medio de la palabra es una letra corta con base (נ); al final se convierte en un trazo largo que baja debajo de la línea (ן). Así se escribe בֵּן, ben, «hijo», que aparece en tantos nombres: Benjamín es «hijo de la mano derecha».',
        'Con nun empieza נָבִיא, naví, «profeta». Dios anunció a Moisés que levantaría un profeta como él (Dt 18:18), y Pedro enseñó que esa promesa se cumplió en Jesús (Hch 3:22).',
        'En el panel tienes Deuteronomio 6:5. Busca la palabra que empieza con lámed y tiene bet: לְבָבְךָ, levavjá, «tu corazón».',
        { ejercicio: {
          pregunta: '¿Qué diferencia hay entre מ y ם?',
          opciones: [
            { t: 'Son dos letras distintas, con sonidos distintos.', ok: false, por_que: 'Las dos suenan m y tienen el mismo valor, 40. Son la misma letra.' },
            { t: 'Son la misma letra: מ se usa al comienzo o en medio de la palabra, y ם al final.', ok: true, por_que: 'La mem tiene una forma final cerrada. Lo mismo pasa con la nun, la kaf, la pe y la tsade.' },
            { t: 'ם es la forma mayúscula de מ.', ok: false, por_que: 'El hebreo no tiene mayúsculas. La forma depende solo del lugar de la letra en la palabra.' }
          ],
          explicacion: 'Cinco letras tienen forma final. La mem es la única cuya forma final es cerrada; las otras cuatro se estiran hacia abajo.'
        } }
      ],
      pensar: '«Amarás a Jehová tu Dios de todo tu corazón» (Dt 6:5). La palabra «corazón» (lev) en hebreo incluye la mente, la voluntad y los afectos. ¿Qué parte de tu corazón le cuesta más rendir a Dios?'
    },
    {
      id: 'samej-tsade', n: 'Sámej, áyin, pe y tsade', ref: 'Josué 1:8; Números 6:25; Génesis 6:9',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'De la decimoquinta a la decimoctava letra',
          cab: CAB,
          filas: [
            ['ס', 'Sámej', 's', '60', 'סֵפֶר (séfer), libro'],
            ['ע', 'Áyin', 'Muda (antiguamente, un sonido de garganta)', '70', 'עַם (am), pueblo'],
            ['פּ', 'Pe', 'p', '80', 'פָּנִים (panim), rostro'],
            ['פ', 'Fe', 'f', '80', 'סֵפֶר (séfer), libro'],
            ['ף', 'Fe final', 'f, al final de palabra', '80', 'יוֹסֵף (Yosef), José'],
            ['צ', 'Tsade', 'ts, como en «tsunami»', '90', 'צַדִּיק (tsadik), justo'],
            ['ץ', 'Tsade final', 'ts, al final de palabra', '90', 'אֶרֶץ (érets), tierra'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Números 6:25', ref: 'Números 6:25', he: 'יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ׃', rv: 'Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia;' }
      ],
      texto: [
        { h: 'Sámej (ס)' },
        'La sámej es un círculo casi cerrado y suena s. Aparece en סֵפֶר, séfer, «libro»: «Nunca se apartará de tu boca este libro de la ley» (Jos 1:8). No la confundas con la mem final (ם), que es cuadrada.',
        { h: 'Áyin (ע)' },
        'La áyin se parece a una y griega con la cola hacia la izquierda. En la pronunciación israelí moderna es muda, como la álef, y solo sostiene su vocal: עַם se lee am, «pueblo». En la antigüedad era un sonido de garganta que el español no tiene. Su nombre significa «ojo», y así se dice ojo en hebreo: עַיִן, áyin. Muchos nombres bíblicos tienen áyin: יַעֲקֹב, Yaakov (Jacob), o עֵדֶן, Edén.',
        { h: 'Pe (פּ) y fe (פ, ף)' },
        'La pe es la tercera letra de dos sonidos: con punto en el centro (פּ) suena p, y sin punto (פ) suena f. Al final de la palabra se estira hacia abajo (ף), como en יוֹסֵף, Yosef, José. Su nombre significa «boca», y פֶּה, pe, es la palabra hebrea para boca.',
        'De la misma raíz viene פָּנִים, panim, «rostro», que está en plural: en hebreo, la cara se nombra como algo de muchos lados. Es la palabra de la bendición sacerdotal que tienes en el panel: «Jehová haga resplandecer su rostro sobre ti» (Nm 6:25).',
        { h: 'Tsade (צ, ץ)' },
        'La tsade suena ts, como en «tsunami» o en la palabra italiana «pizza». Al final de la palabra se estira hacia abajo (ץ), como en אֶרֶץ, érets, «tierra». Con tsade empieza צַדִּיק, tsadik, «justo», palabra con que se describe a Noé (Gn 6:9), y צִיּוֹן, Tsiyón, Sion.',
        'En las Biblias en español, la tsade suele pasar como una s, como en «Sion» o «Sadoc». El sacerdote Sadoc, צָדוֹק, es Tsadok en hebreo: su nombre viene de la misma raíz que «justo».',
        { ejercicio: {
          pregunta: '¿Cómo se lee la palabra סֵפֶר (libro)?',
          opciones: [
            { t: 'séper, porque la segunda letra es una pe.', ok: false, por_que: 'La pe de סֵפֶר no tiene punto en el centro, así que suena f.' },
            { t: 'séfer: sámej (s), fe sin punto (f) y resh (r).', ok: true, por_que: 'Sin el punto en el centro, la letra suena f.' },
            { t: 'Es muda, porque la letra del medio es una áyin.', ok: false, por_que: 'La letra del medio es una fe (פ). La áyin (ע) tiene forma de y griega.' }
          ],
          explicacion: 'Bet/vet, kaf/jaf y pe/fe: tres letras que cambian de sonido según tengan o no el punto en el centro.'
        } }
      ],
      pensar: 'La bendición sacerdotal pide que Dios haga resplandecer su rostro (panim) sobre su pueblo. ¿Qué significa para ti vivir bajo la mirada favorable de Dios por medio de Cristo?'
    },
    {
      id: 'qof-tav', n: 'Qof, resh, shin y tav', ref: 'Isaías 6:3; Génesis 1:2; Salmo 23:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las letras', tabla: {
          titulo: 'Las últimas cuatro letras',
          cab: CAB,
          filas: [
            ['ק', 'Qof', 'k, como en «casa»', '100', 'קָדוֹשׁ (kadosh), santo'],
            ['ר', 'Resh', 'r (en Israel, de garganta)', '200', 'רוּחַ (rúaj), espíritu'],
            ['שׁ', 'Shin', 'sh, como en «show»', '300', 'שָׁלוֹם (shalom), paz'],
            ['שׂ', 'Sin', 's', '300', 'יִשְׂרָאֵל (Yisrael), Israel'],
            ['ת', 'Tav', 't', '400', 'תּוֹרָה (Torá), ley, enseñanza'],
          ],
          nota: NOTA
        } },
        { tipo: 'hebreo', titulo: 'Isaías 6:3', ref: 'Isaías 6:3', he: 'וְקָרָא זֶה אֶל־זֶה וְאָמַר קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְהוָה צְבָאוֹת מְלֹא כָל־הָאָרֶץ כְּבוֹדוֹ׃', rv: 'Y el uno al otro daba voces, diciendo: Santo, santo, santo, Jehová de los ejércitos; toda la tierra está llena de su gloria.' }
      ],
      texto: [
        { h: 'Qof (ק)' },
        'La qof suena k, igual que la kaf con punto. Es la única letra, además de las finales, que baja por debajo de la línea en medio de una palabra: su pata izquierda cuelga hacia abajo. Con qof empieza קָדוֹשׁ, kadosh, «santo», la palabra que los serafines repiten tres veces delante del trono (Is 6:3). Búscala en el panel.',
        { h: 'Resh (ר)' },
        'La resh suena r. En Israel se pronuncia en la garganta, como la r francesa, pero una r española se entiende perfectamente. Su forma es como la dálet (ד), pero redondeada, sin la esquina que sobresale. Su nombre significa «cabeza», como en רֹאשׁ, rosh. Con resh empieza רוּחַ, rúaj, que significa viento, aliento y espíritu: «el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2).',
        { h: 'Shin (שׁ) y sin (שׂ)' },
        'Esta letra tiene tres brazos, como una corona o un tridente, y dos sonidos que dependen de un punto encima. Con el punto sobre el brazo derecho (שׁ) se llama shin y suena sh: שָׁלוֹם, shalom. Con el punto sobre el brazo izquierdo (שׂ) se llama sin y suena s: יִשְׂרָאֵל, Yisrael. Para recordarlo: «shin, a la derecha; sin, a la izquierda».',
        { h: 'Tav (ת)' },
        'La última letra suena t. Se parece a la jet, pero tiene un pie hacia la izquierda en la pata izquierda. En la escritura antigua tenía forma de cruz o de equis, y su nombre significa «señal» o «marca» (Ez 9:4). Con tav empieza תּוֹרָה, Torá, palabra que la Reina-Valera traduce «ley», pero que significa también «instrucción» o «enseñanza»: la Torá es la enseñanza de Dios para su pueblo.',
        { h: 'Ya conoces el alfabeto' },
        'Con estas cuatro letras completas las 22 consonantes. Antes de seguir, abre la tabla del alfabeto y recórrela entera, de álef a tav, diciendo cada nombre en voz alta.',
        { ir: { t: 'Abrir la tabla del alfabeto hebreo', a: 'alfabeto/' } },
        { ejercicio: {
          pregunta: '¿Cómo se lee la letra שׂ, con el punto sobre el brazo izquierdo?',
          opciones: [
            { t: 'sh, como en «show».', ok: false, por_que: 'Ese es el sonido de la shin, con el punto sobre el brazo derecho (שׁ).' },
            { t: 's, como en «sol».', ok: true, por_que: 'Con el punto a la izquierda la letra se llama sin y suena s, como en Yisrael.' },
            { t: 't, como la tav.', ok: false, por_que: 'La tav (ת) es otra letra, sin brazos.' }
          ],
          explicacion: 'Shin y sin son la misma letra: el punto de arriba, a la derecha o a la izquierda, indica el sonido.'
        } }
      ],
      pensar: '«Santo, santo, santo, Jehová de los ejércitos» (Is 6:3). Ante la santidad de Dios, Isaías reconoció su propio pecado y fue purificado. ¿Cómo influye la santidad de Dios en tu manera de adorarle?'
    },
    {
      id: 'finales', n: 'Las cinco letras finales', ref: 'Génesis 1:1; Números 6:26',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las cinco letras que cambian al final de la palabra',
          cab: ['Normal', 'Final', 'Nombre', 'Sonido', 'Ejemplo con forma final'],
          filas: [
            ['כ', 'ך', 'Jaf', 'j', 'מֶלֶךְ (mélej), rey'],
            ['מ', 'ם', 'Mem', 'm', 'שָׁלוֹם (shalom), paz'],
            ['נ', 'ן', 'Nun', 'n', 'בֵּן (ben), hijo'],
            ['פ', 'ף', 'Fe', 'f', 'יוֹסֵף (Yosef), José'],
            ['צ', 'ץ', 'Tsade', 'ts', 'אֶרֶץ (érets), tierra'],
          ],
          nota: 'Las letras finales tienen el mismo sonido y el mismo valor numérico que la forma normal. Solo cambia el dibujo.'
        } },
        { tipo: 'hebreo', titulo: 'Números 6:26', ref: 'Números 6:26', he: 'יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם׃', tr: 'Yisá Adonái panav eleja veyasem lejá shalom.',
          palabras: P(['יִשָּׂא', 'יְהוָה', 'פָּנָיו', 'אֵלֶיךָ', 'וְיָשֵׂם', 'לְךָ', 'שָׁלוֹם'], [['yisá', 'alce'], ['Adonái', 'Jehová'], ['panav', 'su rostro'], ['eleja', 'hacia ti'], ['veyasem', 'y ponga'], ['lejá', 'en ti'], ['shalom', 'paz']]),
          rv: 'Jehová alce sobre ti su rostro, y ponga en ti paz.' }
      ],
      texto: [
        'Cinco letras tienen una forma especial cuando están al final de una palabra: kaf, mem, nun, pe y tsade. La regla es sencilla: el sonido no cambia, solo la forma. Es como si la letra, al llegar al final, se soltara y dejara caer su trazo.',
        { h: 'Cuatro bajan y una se cierra' },
        'Cuatro de ellas se estiran hacia abajo, por debajo de la línea: ך, ן, ף y ץ. La quinta, la mem, hace lo contrario: se cierra en un cuadrado (ם). Si ves un trazo que baja debajo de la línea al final de una palabra, es casi seguro una letra final; la única letra normal que también baja es la qof (ק), y esa puede estar en cualquier lugar.',
        'En el panel tienes la última línea de la bendición sacerdotal. Termina con שָׁלוֹם, shalom, y su mem final cerrada. Busca también la jaf final en אֵלֶיךָ, eleja, «hacia ti», y en לְךָ, lejá, «en ti».',
        { h: 'Una forma de recordarlas' },
        'Los maestros judíos enseñaban las cinco letras finales con una palabra inventada que las junta en orden: kamnatspáj (כמנפץ). Si la repites algunas veces, no las olvidarás: kaf, mem, nun, pe, tsade.',
        { h: 'Para qué sirven' },
        'En un texto antiguo sin espacios ni puntos, las formas finales ayudaban a ver dónde terminaba una palabra. Hoy hay espacios, pero siguen siendo una ayuda para la vista: marcan el borde de las palabras y evitan confundir una letra con la siguiente.',
        'Ojo con dos confusiones frecuentes. La nun final (ן) se parece a la vav (ו), pero es más larga y baja debajo de la línea. Y la mem final (ם) se parece a la sámej (ס), pero la mem es cuadrada y la sámej redonda.',
        { ejercicio: {
          pregunta: 'En la palabra אֶרֶץ (érets, tierra), ¿qué letra es la última?',
          opciones: [
            { t: 'Una áyin, porque tiene forma de y griega.', ok: false, por_que: 'La áyin (ע) no baja tanto debajo de la línea. Esta letra es la tsade final, con un trazo recto que baja.' },
            { t: 'Una tsade final, que suena ts.', ok: true, por_que: 'La tsade final (ץ) se estira hacia abajo. La palabra se lee érets.' },
            { t: 'Una nun final, que suena n.', ok: false, por_que: 'La nun final (ן) es un trazo simple. La letra de érets tiene un brazo extra a la derecha.' }
          ],
          explicacion: 'Kaf, mem, nun, pe y tsade: kamnatspáj. Sus formas finales tienen el mismo sonido y el mismo valor.'
        } }
      ],
      pensar: 'La bendición de Números 6 termina con la palabra shalom: paz, bienestar, plenitud. ¿Qué significa para ti la paz que Cristo da, distinta de la que da el mundo (Jn 14:27)?'
    },
    {
      id: 'confunden', n: 'Las letras que se confunden', ref: 'Jueces 12:6',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Parejas y tríos que se parecen',
          cab: ['Letras', 'Cómo distinguirlas'],
          filas: [
            ['ב כ', 'Bet tiene una base que sobresale abajo a la derecha; kaf es redonda'],
            ['ד ר ך', 'Dálet tiene esquina; resh es redonda; jaf final baja debajo de la línea'],
            ['ה ח ת', 'He tiene un espacio arriba; jet está cerrada; tav tiene un pie a la izquierda'],
            ['ו ז ן י', 'Vav es una línea; zayin lleva sombrero ancho; nun final baja; yod es pequeña'],
            ['ג נ', 'Guímel abre un pie a la izquierda; nun tiene una base plana'],
            ['ס ם', 'Sámej es redonda; mem final es cuadrada'],
            ['ע צ', 'Áyin tiene la cola inclinada hacia la izquierda; tsade, un brazo arriba a la derecha y una base plana'],
            ['ט מ', 'Tet es redonda y abierta arriba; mem tiene una esquina abierta abajo a la izquierda'],
            ['שׁ שׂ', 'El punto a la derecha es sh; a la izquierda, s'],
          ],
          nota: 'Cuando dudes, compara las dos letras en la tabla del alfabeto y escríbelas una junto a la otra.'
        } }
      ],
      texto: [
        'Al principio, algunas letras parecen gemelas. Es normal: el ojo todavía no sabe qué detalle mirar. La tabla del panel reúne las confusiones más frecuentes con la pista que las distingue. Léela con calma, letra por letra, y vuelve a ella cada vez que dudes.',
        { h: 'Mirar las esquinas y los pies' },
        'Casi todas las diferencias están en tres lugares: las esquinas (dálet tiene esquina, resh no), los pies (bet tiene base, kaf no; tav tiene un pie, jet no) y el largo de la letra (vav llega a la línea, nun final baja de ella). Si te acostumbras a mirar esos tres lugares, la mayoría de las dudas desaparece.',
        { h: 'Un ejercicio que funciona' },
        'Escribe cada pareja en tu cuaderno, una letra junto a la otra, y nombra en voz alta el detalle que las distingue mientras la trazas. Después, abre la tabla del alfabeto, entra al modo de práctica y fíjate en qué letras te equivocas: esas son las que conviene repasar al día siguiente.',
        { h: 'Un detalle que importa' },
        'Algunas de estas diferencias son mínimas en el papel, pero cambian el sentido. La dálet y la resh distinguen אֶחָד, ejad, «uno», de אַחֵר, ajer, «otro». Por eso los escribas que copiaban la Escritura cuidaban esos trazos con tanto esmero, y por eso Jesús pudo hablar de la «tilde» que no pasaría de la ley (Mt 5:18).',
        { h: 'Una diferencia de pronunciación en la Biblia' },
        'La misma Biblia cuenta un caso en que una sola letra salvó o costó la vida. Después de una guerra entre Galaad y Efraín, los galaaditas tomaron los vados del Jordán, y a cada fugitivo le pedían que dijera שִׁבֹּלֶת, shibólet. Los efrateos no pronunciaban bien la shin y decían סִבֹּלֶת, sibólet, y así eran descubiertos (Jue 12:6). Desde entonces, en varias lenguas, «shibolet» significa una contraseña.',
        { ejercicio: {
          pregunta: '¿Qué letra es esta: ד?',
          opciones: [
            { t: 'Resh, que suena r.', ok: false, por_que: 'La resh (ר) es redondeada. Esta letra tiene una esquina que sobresale a la derecha.' },
            { t: 'Dálet, que suena d.', ok: true, por_que: 'La esquina recta que sobresale arriba a la derecha es la marca de la dálet.' },
            { t: 'Jaf final, que suena j.', ok: false, por_que: 'La jaf final (ך) baja debajo de la línea. Esta letra se queda en la línea.' }
          ],
          explicacion: 'Dálet tiene esquina, resh es redonda y jaf final baja.'
        } },
        { ejercicio: {
          pregunta: '¿Qué letra es esta: ח?',
          opciones: [
            { t: 'He, que suena h suave.', ok: false, por_que: 'La he (ה) tiene un espacio entre la pata izquierda y el techo. Esta letra está cerrada.' },
            { t: 'Tav, que suena t.', ok: false, por_que: 'La tav (ת) tiene un pie hacia la izquierda en la pata izquierda.' },
            { t: 'Jet, que suena j.', ok: true, por_que: 'Las dos patas tocan el techo y no hay pie: es la jet.' }
          ],
          explicacion: 'He abierta, jet cerrada, tav con pie.'
        } }
      ],
      pensar: 'Una sola letra separaba shibólet de sibólet. En la vida cristiana también hay detalles que parecen pequeños, pero que revelan de qué lado estamos. ¿Qué «detalles» de tu obediencia diaria muestran a quién perteneces?'
    },
    {
      id: 'numeros', n: 'Las letras como números', ref: 'Salmo 119; Apocalipsis 13:18; Deuteronomio 29:29',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El valor numérico de las letras',
          cab: ['Letra', 'Unidades', 'Letra', 'Decenas', 'Letra', 'Centenas'],
          filas: [
            ['א', '1', 'י', '10', 'ק', '100'],
            ['ב', '2', 'כ', '20', 'ר', '200'],
            ['ג', '3', 'ל', '30', 'ש', '300'],
            ['ד', '4', 'מ', '40', 'ת', '400'],
            ['ה', '5', 'נ', '50', '', ''],
            ['ו', '6', 'ס', '60', '', ''],
            ['ז', '7', 'ע', '70', '', ''],
            ['ח', '8', 'פ', '80', '', ''],
            ['ט', '9', 'צ', '90', '', ''],
          ],
          nota: 'Para escribir un número se suman las letras: יא = 11, כג = 23, קיט = 119. Para 15 y 16 se escribe טו (9 + 6) y טז (9 + 7), y no יה ni יו, porque esas letras inician el nombre de Dios.'
        } }
      ],
      texto: [
        'El hebreo antiguo no tenía cifras como las nuestras. Para escribir números usaba las mismas letras del alfabeto, cada una con un valor fijo: las nueve primeras son las unidades, las nueve siguientes las decenas y las cuatro últimas las centenas. Para formar un número se ponen las letras una al lado de la otra y se suman, empezando por la de mayor valor.',
        { h: 'Dónde lo verás' },
        'En una Biblia hebrea impresa, los capítulos y los versículos se numeran con letras. El Salmo 23 aparece como כג (20 + 3), y el Salmo 119 como קיט (100 + 10 + 9). Los calendarios judíos también fechan los días del mes y los años con letras. Si algún día abres una Biblia hebrea, esta tabla te servirá para encontrar el pasaje.',
        'Hay un detalle de reverencia: 15 no se escribe יה (10 + 5), ni 16 יו (10 + 6), porque esas combinaciones son el comienzo del nombre de Dios. Se escriben טו y טז.',
        { h: 'Los números no esconden un código' },
        'Desde la Edad Media, algunos maestros judíos, y después algunos autores cristianos, buscaron significados ocultos sumando el valor de las letras de las palabras. Esa práctica se llama gematría. Con suficiente imaginación, cualquier palabra puede sumar el número que uno quiere encontrar, y por eso estas cuentas no sirven para fundar una doctrina.',
        'La Biblia enseña con palabras claras, no con códigos que solo descubren unos pocos: «Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos» (Dt 29:29). El único lugar donde la Escritura invita a contar el número de un nombre es Apocalipsis 13:18, y aun allí no da la respuesta. Cuando un predicador o un video promete un mensaje secreto en los números de la Biblia, conviene recordar que el sentido de un texto se encuentra leyéndolo en su contexto.',
        { ir: { t: 'Ver «Leer lo que uno quiere» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#errores/2' } },
        { ejercicio: {
          pregunta: '¿Qué número representa כג?',
          opciones: [
            { t: '23, porque כ vale 20 y ג vale 3.', ok: true, por_que: 'Se suman los valores: 20 + 3 = 23. Así se numera el Salmo 23 en una Biblia hebrea.' },
            { t: '5, porque son la kaf (11.ª letra) menos la guímel (3.ª).', ok: false, por_que: 'Los valores no se restan ni se toman por la posición, sino por la tabla: kaf vale 20.' },
            { t: '203, porque la kaf vale 200.', ok: false, por_que: 'La kaf vale 20. La letra que vale 200 es la resh (ר).' }
          ],
          explicacion: 'Unidades, decenas y centenas: se suman las letras de mayor a menor.'
        } }
      ],
      pensar: 'Dios no esconde su voluntad en códigos: la reveló con claridad en su Palabra (Dt 29:29). ¿Hay algo que Dios ya te mostró claramente en la Escritura y que estás esperando confirmar por otro camino?'
    },
    {
      id: 'acrosticos', n: 'Los acrósticos: el Salmo 119', ref: 'Salmo 119; Proverbios 31:10-31; Lamentaciones 1:1',
      visual: [
        { tipo: 'hebreo', titulo: 'Álef', ref: 'Salmo 119:1', he: 'אַשְׁרֵי תְמִימֵי־דָרֶךְ הַהֹלְכִים בְּתוֹרַת יְהוָה׃', tr: 'Ashré temimé-dárej haholjim betorat Adonái.',
          palabras: P(['אַשְׁרֵי', 'תְמִימֵי־דָרֶךְ', 'הַהֹלְכִים', 'בְּתוֹרַת', 'יְהוָה'], [['ashré', 'dichosos'], ['temimé-dárej', 'los perfectos de camino'], ['haholjim', 'los que andan'], ['betorat', 'en la ley de'], ['Adonái', 'Jehová']]),
          rv: 'Bienaventurados los perfectos de camino, Los que andan en la ley de Jehová.' },
        { tipo: 'hebreo', titulo: 'Bet', ref: 'Salmo 119:9', he: 'בַּמֶּה יְזַכֶּה־נַּעַר אֶת־אָרְחוֹ לִשְׁמֹר כִּדְבָרֶךָ׃', rv: '¿Con qué limpiará el joven su camino? Con guardar tu palabra.' },
        { tipo: 'tabla', titulo: 'Acrósticos', tabla: {
          titulo: 'Los poemas alfabéticos de la Biblia',
          cab: ['Pasaje', 'Cómo está armado'],
          filas: [
            ['Salmo 119', '22 estrofas de 8 versículos; los 8 empiezan con la misma letra'],
            ['Salmos 111 y 112', 'Cada media línea empieza con la letra siguiente'],
            ['Salmos 25, 34 y 145', 'Un versículo por letra, con pequeñas irregularidades'],
            ['Salmo 37', 'Una letra cada dos versículos'],
            ['Proverbios 31:10-31', 'La mujer virtuosa: un versículo por letra'],
            ['Lamentaciones 1, 2 y 4', 'Un versículo por letra'],
            ['Lamentaciones 3', 'Tres versículos seguidos por cada letra (66 versículos)'],
          ],
          nota: 'La traducción no puede conservar el orden alfabético, por eso la Reina-Valera pone el nombre de cada letra como título de las estrofas del Salmo 119.'
        } }
      ],
      texto: [
        'Algunos poemas de la Biblia siguen el orden del alfabeto: el primer verso empieza con álef, el segundo con bet, y así hasta la tav. Se llaman acrósticos alfabéticos. En español es imposible conservarlos, pero en hebreo se ven con solo mirar la primera letra de cada línea.',
        { h: 'El Salmo 119' },
        'El más famoso es el Salmo 119, el capítulo más largo de la Biblia. Tiene 22 estrofas, una por cada letra, y cada estrofa tiene 8 versículos que empiezan con la misma letra: 176 versículos en total. Por eso en tu Reina-Valera cada estrofa lleva como título el nombre de una letra.',
        'En el panel tienes el comienzo de las dos primeras estrofas. El versículo 1 empieza con álef: אַשְׁרֵי, ashré, «bienaventurados». El versículo 9 empieza con bet: בַּמֶּה, bamé, «¿con qué?». Toca «Ocultar ayudas» e intenta reconocer la primera letra sin mirar la transliteración.',
        { h: '¿Por qué escribir así?' },
        'El orden alfabético ayudaba a memorizar: quien sabía el alfabeto tenía una guía para recitar el poema completo. Además expresa plenitud. El Salmo 119 alaba la Palabra de Dios «de la A a la Z», con todas las letras, como diciendo que no hay nada que la Palabra no abarque.',
        'En Lamentaciones, el recurso tiene otra fuerza. Jeremías llora la destrucción de Jerusalén con un dolor ordenado, letra por letra, como si quisiera expresar el sufrimiento entero, de principio a fin. En el capítulo 3, el centro del libro, cada letra se repite tres veces, y en medio de ese capítulo está la confesión más luminosa: «Por la misericordia de Jehová no hemos sido consumidos» (Lm 3:22).',
        'Proverbios termina con otro acróstico, el retrato de la mujer virtuosa (Pr 31:10-31): la sabiduría de todo el libro, encarnada en una vida, de álef a tav.',
        { ejercicio: {
          pregunta: '¿Por qué cada estrofa del Salmo 119 lleva en la Reina-Valera un título como «Alef» o «Bet»?',
          opciones: [
            { t: 'Porque son los nombres de los autores de cada estrofa.', ok: false, por_que: 'Álef, bet, guímel… son nombres de letras, no de personas.' },
            { t: 'Porque en hebreo los ocho versículos de cada estrofa empiezan con esa letra.', ok: true, por_que: 'El título conserva en la traducción la estructura alfabética que el español no puede reproducir.' },
            { t: 'Porque indican la melodía con que se cantaba cada estrofa.', ok: false, por_que: 'Las indicaciones musicales de los salmos son otras. Estos títulos marcan el orden alfabético.' }
          ],
          explicacion: 'El Salmo 119 recorre las 22 letras, ocho versículos por letra.'
        } }
      ],
      pensar: 'El Salmo 119 alaba la Palabra con todas las letras del alfabeto. Si escribieras tu propio acróstico de gratitud a Dios, de la A a la Z, ¿qué pondrías en las primeras letras?'
    }
  ];

  window.__ALEF.letras = letras;
})();
/* El alfabeto hebreo y la lectura · ruta III. Las vocales (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;

  const vocales = [
    {
      id: 'masoretas', n: 'Los masoretas y sus puntos', ref: 'Romanos 3:2; Nehemías 8:8',
      fecha: 930,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/masoreta.webp', alt: 'Un escriba masoreta de Tiberíades, en el siglo X, agrega con una pluma fina pequeños puntos debajo de las letras hebreas de un códice de pergamino, junto a una ventana que da al mar de Galilea', pie: 'Los masoretas agregaron las vocales sin cambiar ni una consonante del texto recibido.', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Códice de Alepo', src: '../de-la-biblia-a-nosotros/img/codice-alepo.webp', alt: 'Página del Códice de Alepo con el comienzo del libro de Josué en tres columnas de texto hebreo con puntos vocálicos y notas en los márgenes', pie: 'Códice de Alepo, hacia el año 930: comienzo de Josué. Los puntos de las vocales se ven debajo y encima de las letras.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Códice de Leningrado', src: 'img/codice-leningrado.jpg', alt: 'Una página del Códice de Leningrado, del año 1008, con columnas de texto hebreo con vocales y acentos y notas masoréticas en los márgenes', pie: 'Códice de Leningrado (1008), folio 371b: Salmos 32:10–34:23. Es la Biblia hebrea completa más antigua que se conserva entera, y su texto es el que muestra este recurso.', origen: 'foto', licencia: 'Dominio público; escaneo de USC Dornsife, vía Wikimedia Commons', completa: true },
        { tipo: 'hebreo', titulo: 'Con y sin vocales', ref: 'Génesis 1:1', he: 'בראשית ברא אלהים את השמים ואת הארץ', tr: 'Así se escribe en un rollo de la ley: solo consonantes. Compáralo con el texto con puntos de la primera estación.', rv: 'En el principio creó Dios los cielos y la tierra.' }
      ],
      texto: [
        'Durante siglos, el texto hebreo se copió solo con consonantes. Cuando el hebreo dejó de hablarse en la vida diaria, la pronunciación tradicional corría el riesgo de perderse. Entre los siglos VII y X después de Cristo, unos escribas judíos llamados masoretas, de la palabra masorá, «tradición», idearon un sistema de puntos y rayitas para ponerla por escrito.',
        { h: 'Vocales alrededor de las letras' },
        'El sistema tenía una condición: no se podía tocar el texto recibido. Por eso las vocales no son letras nuevas, sino signos que se escriben debajo, encima o dentro de las consonantes. Se agregaron alrededor de las letras, como quien anota la música de un himno sin cambiar ninguna palabra.',
        'Hubo varios sistemas, en Babilonia y en la tierra de Israel, pero el que se impuso fue el de los masoretas de Tiberíades, a orillas del mar de Galilea. La familia más conocida fue la de Ben Asher. El Códice de Alepo, vocalizado hacia el año 930, y el Códice de Leningrado, copiado en 1008, siguen esa tradición. El texto hebreo de este recurso viene del Códice de Leningrado.',
        { h: 'Tres clases de signos' },
        'Los masoretas pusieron tres clases de signos. Los puntos vocálicos indican las vocales. Los acentos indican la sílaba que se acentúa, la melodía con que se cantaba el texto en la sinagoga y las pausas dentro del versículo (los verás en la ruta IV). Y en los márgenes escribieron notas que cuentan palabras y advierten formas raras, para que nadie cambiara el texto al copiarlo.',
        'Este recurso muestra el texto con las vocales y sin los acentos, que son muchos y distraen al principio. Es como se imprimen muchos libros para aprender hebreo.',
        { h: 'Lo que se aprende en esta ruta' },
        'En la pronunciación israelí, que usa este recurso, el hebreo tiene cinco sonidos de vocal, igual que el español: a, e, i, o, u. La buena noticia es que no necesitas aprender cinco vocales nuevas, sino reconocer los signos que las representan. Hay más signos que sonidos, porque los masoretas también marcaban diferencias de duración que hoy no se pronuncian.',
        { ir: { t: 'Ver «El Texto Masorético» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#antiguo/2' } },
        { ejercicio: {
          pregunta: '¿Qué hicieron los masoretas con el texto consonántico que habían recibido?',
          opciones: [
            { t: 'Lo reescribieron con un alfabeto nuevo que incluía vocales.', ok: false, por_que: 'El alfabeto siguió siendo el mismo. Las vocales se agregaron como signos aparte.' },
            { t: 'Lo dejaron intacto y agregaron puntos y signos alrededor de las letras.', ok: true, por_que: 'Por eso las vocales hebreas son puntos y rayitas, no letras: no querían alterar las consonantes.' },
            { t: 'Corrigieron las palabras que les parecían equivocadas.', ok: false, por_que: 'Cuando algo les parecía extraño, lo dejaban como estaba y anotaban en el margen cómo debía leerse.' }
          ],
          explicacion: 'Las consonantes son el texto recibido; los puntos son la lectura tradicional escrita alrededor de ellas.'
        } }
      ],
      pensar: 'Los masoretas dedicaron su vida a que el texto no perdiera ni una letra ni su lectura. ¿Qué te dice su ejemplo sobre el valor que tú le das a la Palabra de Dios?'
    },
    {
      id: 'a-e', n: 'Los sonidos a y e', ref: 'Génesis 1:1; Juan 3:8',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Vocales que suenan a y e (con la letra bet)',
          cab: ['Signo', 'Nombre', 'Suena', 'Ejemplo'],
          filas: [
            ['בַ', 'Pataj: una raya bajo la letra', 'a', 'בַּיִת (báyit), casa'],
            ['בָ', 'Qamets: una pequeña te bajo la letra', 'a (a veces o)', 'דָּבָר (davar), palabra'],
            ['בֵ', 'Tsere: dos puntos lado a lado', 'e', 'בֵּן (ben), hijo'],
            ['בֶ', 'Segol: tres puntos en triángulo', 'e', 'מֶלֶךְ (mélej), rey'],
            ['בֵי', 'Tsere con yod', 'e', 'בֵּית (beit), casa de'],
          ],
          nota: 'La vocal se pronuncia después de la consonante que la lleva: בַ es «ba», no «ab».'
        } },
        { tipo: 'hebreo', titulo: 'Leer', ref: 'Génesis 1:1', he: 'בָּרָא · מֶלֶךְ · אֶרֶץ · הָאָרֶץ · שָׁמַיִם', tr: 'bará · mélej · érets · haárets · shamáyim', rv: 'creó · rey · tierra · la tierra · cielos' }
      ],
      texto: [
        'Empecemos con los signos que suenan a y e. En el panel están escritos debajo de la letra bet, para que veas dónde se ubican. Una regla vale para todas las vocales: la vocal se pronuncia después de la consonante que la lleva. בָ es «ba», בֵ es «be».',
        { h: 'Para el sonido a: pataj y qamets' },
        'El pataj es una rayita horizontal bajo la letra (בַ). El qamets es una rayita con una patita hacia abajo, como una te pequeña (בָ). En la pronunciación israelí, los dos suenan a. La palabra בָּרָא, bará, «creó», tiene dos qamets; שָׁמַיִם, shamáyim, «cielos», tiene un qamets y un pataj.',
        'El qamets tiene una excepción que verás en la estación de las vocales i, o, u: en algunas sílabas suena o. Por ahora, léelo como a.',
        { h: 'Para el sonido e: tsere y segol' },
        'El tsere son dos puntos uno al lado del otro (בֵ). El segol son tres puntos en triángulo, con la punta hacia abajo (בֶ). Los dos suenan e. Muchas palabras hebreas de dos sílabas llevan dos segol seguidos y se acentúan en la primera sílaba: מֶלֶךְ, mélej, «rey»; אֶרֶץ, érets, «tierra»; לֶחֶם, léjem, «pan».',
        'Cuando el tsere va seguido de una yod, la yod no suena: solo ayuda a leer la vocal. Así se escribe בֵּית, «casa de», que verás en nombres como Betel (casa de Dios) o Belén (casa del pan). En el hebreo israelí, esta combinación suena a veces como «ei».',
        { h: 'Una a que se adelanta' },
        'Al final de algunas palabras que terminan en jet (ח) o áyin (ע), el pataj se pronuncia antes de la consonante, no después: רוּחַ se lee rúaj, no ruja. Es una pequeña a que se desliza para facilitar la pronunciación de la gutural. Lo mismo ocurre en מָשִׁיחַ, mashíaj, «Mesías», y en יְהוֹשֻׁעַ, Yehoshúa, Josué. Los gramáticos lo llaman pataj furtivo.',
        { ejercicio: {
          pregunta: '¿Cómo se lee מֶלֶךְ?',
          opciones: [
            { t: 'mélej', ok: true, por_que: 'Mem con segol (me), lámed con segol (le) y jaf final (j). Se acentúa en la primera sílaba.' },
            { t: 'malaj', ok: false, por_que: 'Los tres puntos en triángulo son segol, que suena e, no a.' },
            { t: 'emlej', ok: false, por_que: 'La vocal se lee después de la consonante que la lleva: me, no em.' }
          ],
          explicacion: 'Mélej, «rey». Dos segol seguidos: una palabra acentuada en la primera sílaba.'
        } }
      ],
      pensar: 'La palabra rúaj significa viento, aliento y espíritu. Jesús comparó al Espíritu con el viento (Jn 3:8). ¿Qué evidencias de la obra del Espíritu Santo has visto en tu vida, aunque no puedas verlo a Él?'
    },
    {
      id: 'i-o-u', n: 'Los sonidos i, o y u', ref: 'Deuteronomio 6:4; Salmo 23:1',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Vocales que suenan i, o y u (con la letra bet)',
          cab: ['Signo', 'Nombre', 'Suena', 'Ejemplo'],
          filas: [
            ['בִ', 'Jireq: un punto bajo la letra', 'i', 'אֱלֹהִים (Elohim), Dios'],
            ['בִי', 'Jireq con yod', 'i', 'נָבִיא (naví), profeta'],
            ['בֹ', 'Jolem: un punto arriba, a la izquierda', 'o', 'אֱלֹהִים (Elohim), Dios'],
            ['בוֹ', 'Jolem con vav', 'o', 'שָׁלוֹם (shalom), paz'],
            ['בֻ', 'Qibuts: tres puntos en diagonal', 'u', 'שֻׁלְחָן (shuljan), mesa'],
            ['בוּ', 'Shuruq: vav con un punto en el medio', 'u', 'רוּחַ (rúaj), espíritu'],
            ['בָ', 'Qamets que suena o (qamets jatuf)', 'o', 'כָּל (kol), todo'],
          ],
          nota: 'Cuando la vav lleva un punto encima o dentro (וֹ, וּ), es una vocal y no suena v.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 23:1', ref: 'Salmo 23:1', he: 'מִזְמוֹר לְדָוִד יְהוָה רֹעִי לֹא אֶחְסָר׃', tr: 'Mizmor ledavid. Adonái roí, lo ejsar.',
          palabras: P(['מִזְמוֹר', 'לְדָוִד', 'יְהוָה', 'רֹעִי', 'לֹא', 'אֶחְסָר'], [['mizmor', 'salmo'], ['ledavid', 'de David'], ['Adonái', 'Jehová'], ['roí', 'mi pastor'], ['lo', 'no'], ['ejsar', 'me faltará']]),
          rv: 'Jehová es mi pastor; nada me faltará.' }
      ],
      texto: [
        { h: 'El sonido i: jireq' },
        'El jireq es un solo punto debajo de la letra (בִ) y suena i. A menudo va seguido de una yod que no suena, solo refuerza la vocal: נָבִיא, naví, «profeta». La palabra אֱלֹהִים, Elohim, termina con jireq, yod y mem final: «-im».',
        { h: 'El sonido o: jolem' },
        'El jolem es un punto arriba, en la esquina izquierda de la letra (בֹ), y suena o. Muchas veces se escribe sobre una vav (וֹ), que entonces deja de ser consonante y se vuelve vocal: שָׁלוֹם, shalom. En אֱלֹהִים, el punto sobre la lámed es un jolem: E-lo-him.',
        { h: 'El sonido u: qibuts y shuruq' },
        'El qibuts son tres puntos en diagonal debajo de la letra (בֻ). El shuruq es una vav con un punto en el medio (וּ). Los dos suenan u: שֻׁלְחָן, shuljan, «mesa», y רוּחַ, rúaj, «espíritu».',
        { h: 'La vav: ¿consonante o vocal?' },
        'La vav tiene tres usos, y el punto te dice cuál es. Sin punto, o con una vocal debajo, es la consonante v: דָּוִד, David. Con un punto encima, es la vocal o: וֹ. Con un punto dentro, es la vocal u: וּ. Mira bien dónde está el punto antes de leer.',
        { h: 'Cuando el qamets suena o' },
        'El qamets (בָ) suena a casi siempre, pero en una sílaba cerrada que no lleva el acento suena o. Se llama entonces qamets jatuf, «qamets breve». El caso más frecuente es la palabra כָּל, kol, «todo», y también חָכְמָה, jojmá, «sabiduría». Las Biblias para estudiantes a veces lo marcan con un signo especial; si dudas, el diccionario te dirá cómo se lee.',
        'En el panel tienes el Salmo 23:1, que en hebreo incluye el título: «Salmo de David». Busca el jireq de מִזְמוֹר (mizmor) y el jolem con vav de la misma palabra; el jolem de רֹעִי (roí), y el de לֹא (lo).',
        { ejercicio: {
          pregunta: '¿Cómo suena la vav en la palabra רוּחַ?',
          opciones: [
            { t: 'Como v: «rvaj».', ok: false, por_que: 'La vav tiene un punto en el medio. Así no es consonante, sino la vocal u.' },
            { t: 'Como u: «rúaj».', ok: true, por_que: 'Vav con punto en el medio es shuruq, la vocal u. La palabra se lee rúaj.' },
            { t: 'Como o: «róaj».', ok: false, por_que: 'Para sonar o, el punto debería estar encima de la vav (וֹ), no en el medio.' }
          ],
          explicacion: 'Vav con punto encima: o. Vav con punto en medio: u. Vav sin punto: v.'
        } }
      ],
      pensar: '«Jehová es mi pastor; nada me faltará» (Sal 23:1). En hebreo son apenas cuatro palabras después del título. ¿Qué parte de tu vida necesita hoy descansar en el cuidado del Pastor?'
    },
    {
      id: 'sheva', n: 'El shevá: una e muy breve, o silencio', ref: 'Deuteronomio 6:4; Números 6:24',
      visual: [
        { tipo: 'tabla', titulo: 'Reglas', tabla: {
          titulo: 'Cuándo suena el shevá (בְ)',
          cab: ['Dónde está', 'Cómo se lee', 'Ejemplo'],
          filas: [
            ['Bajo la primera letra de la palabra', 'Suena: e muy breve', 'בְּרֵאשִׁית (bereshit), שְׁמַע (shemá)'],
            ['Dos shevá seguidos en medio de la palabra', 'El primero calla, el segundo suena', 'וְיִשְׁמְרֶךָ (ve-yish-me-re-ja)'],
            ['En medio de la palabra, después de una vocal breve', 'Calla: cierra la sílaba', 'מִזְמוֹר (miz-mor), יִשְׂרָאֵל (Yis-ra-el)'],
            ['Al final de la palabra', 'Calla', 'מֶלֶךְ (mélej)'],
          ],
          nota: 'Las gramáticas dan reglas más precisas. Para empezar a leer, estas cuatro bastan en la gran mayoría de los casos.'
        } },
        { tipo: 'hebreo', titulo: 'Números 6:24', ref: 'Números 6:24', he: 'יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ׃', tr: 'Yevarejejá Adonái veyishmereja.',
          palabras: P(['יְבָרֶכְךָ', 'יְהוָה', 'וְיִשְׁמְרֶךָ'], [['yevarejejá', 'te bendiga'], ['Adonái', 'Jehová'], ['veyishmereja', 'y te guarde']]),
          rv: 'Jehová te bendiga, y te guarde;' }
      ],
      texto: [
        'El shevá son dos puntos uno sobre otro, debajo de la letra (בְ). Es el signo más frecuente del texto hebreo, y el único que a veces suena y a veces no. Cuando suena, es una e muy breve, casi un suspiro. Cuando calla, indica que la consonante no tiene vocal y se une a la sílaba anterior.',
        { h: 'Al comienzo de la palabra, suena' },
        'Si el shevá está bajo la primera letra de la palabra, siempre suena: בְּרֵאשִׁית, bereshit; שְׁמַע, shemá («oye»); דְּבַר, devar («palabra de»). En el habla rápida de Israel, a veces esa e casi desaparece, pero al leer la Biblia conviene pronunciarla.',
        'Lo mismo ocurre con las palabras pequeñas que se pegan al comienzo: וְ (ve, «y»), בְּ (be, «en»), לְ (le, «a», «para»), כְּ (ke, «como»). Todas llevan shevá y todas suenan con e breve.',
        { h: 'En medio y al final, casi siempre calla' },
        'En medio de la palabra, el shevá suele cerrar la sílaba: מִזְמוֹר se lee miz-mor, no mi-ze-mor. Al final de la palabra siempre calla; por eso la jaf final de מֶלֶךְ lleva shevá y se lee solo j.',
        'Cuando hay dos shevá seguidos en medio de la palabra, el primero cierra la sílaba anterior y el segundo abre la siguiente, así que suena. Míralo en el panel, en וְיִשְׁמְרֶךָ: ve-yish-me-re-ja, «y te guarde». El shevá de la vav inicial suena (ve), el de la shin calla (yish) y el de la mem suena (me).',
        { h: 'Practica despacio' },
        'Lee en el panel la primera línea de la bendición sacerdotal. Primero, con las ayudas; después, tócalas para ocultarlas y léela de nuevo. Fíjate en el shevá de יְבָרֶכְךָ: el de la yod inicial suena (ye) y el de la jaf del medio calla (rej). Se lee ye-va-rej-já.',
        { ejercicio: {
          pregunta: 'En שְׁמַע (oye), ¿cómo se pronuncia el shevá de la shin?',
          opciones: [
            { t: 'Calla: se lee «shma».', ok: false, por_que: 'En hebreo moderno a veces se oye así, pero la regla es que el shevá de la primera letra suena.' },
            { t: 'Suena como una e breve: se lee «shemá».', ok: true, por_que: 'Está bajo la primera letra de la palabra, así que suena. Es la primera palabra del Shemá, la confesión de fe de Israel.' },
            { t: 'Suena como una a larga: «shamá».', ok: false, por_que: 'El shevá nunca suena a. Cuando suena, es una e muy breve.' }
          ],
          explicacion: 'Shevá al comienzo de la palabra: suena. Shevá al final de la sílaba: calla.'
        } }
      ],
      pensar: '«Jehová te bendiga, y te guarde» (Nm 6:24). Dios mismo puso estas palabras en boca de los sacerdotes para bendecir a su pueblo. ¿A quién podrías bendecir hoy con la Palabra de Dios?'
    },
    {
      id: 'jatef', n: 'Las vocales breves de las guturales', ref: 'Génesis 1:1; Éxodo 20:2',
      visual: [
        { tipo: 'tabla', titulo: 'Las vocales', tabla: {
          titulo: 'Las tres vocales reducidas (jatef)',
          cab: ['Signo', 'Nombre', 'Suena', 'Ejemplo'],
          filas: [
            ['אֲ', 'Jatef pataj: shevá + pataj', 'a breve', 'אֲנִי (aní), yo'],
            ['אֱ', 'Jatef segol: shevá + segol', 'e breve', 'אֱלֹהִים (Elohim), Dios'],
            ['אֳ', 'Jatef qamets: shevá + qamets', 'o breve', 'חֳדָשִׁים (jodashim), meses'],
          ],
          nota: 'Las cuatro letras guturales son א ה ח ע. A veces la resh (ר) se comporta como ellas.'
        } },
        { tipo: 'hebreo', titulo: 'Éxodo 20:2', ref: 'Éxodo 20:2', he: 'אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים׃', rv: 'Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre.' }
      ],
      texto: [
        'Cuatro letras se pronunciaban en la garganta: álef (א), he (ה), jet (ח) y áyin (ע). Se llaman guturales. Estas letras no se llevan bien con el shevá simple. Cuando les tocaría un shevá que suena, llevan en su lugar un shevá combinado con otra vocal, y la vocal se pronuncia breve.',
        { h: 'Tres vocales compuestas' },
        'Estas vocales se llaman jatef, «apresurada». Son tres, y cada una se forma poniendo el shevá a la derecha de una vocal que ya conoces. El jatef pataj (בֲ) suena a breve: אֲנִי, aní, «yo». El jatef segol (בֱ) suena e breve: אֱלֹהִים, Elohim, «Dios». El jatef qamets (בֳ) suena o breve: חֳדָשִׁים, jodashim, «meses».',
        'Para leer basta saber que se pronuncian como la vocal que acompaña al shevá. La diferencia de duración no se nota en la pronunciación de hoy.',
        { h: 'Palabras muy frecuentes' },
        'Algunas de las palabras más frecuentes de la Biblia empiezan con jatef: אֱלֹהִים (Elohim, «Dios»), אֲשֶׁר (asher, «que», «el cual»), אֲדֹנָי (Adonái, «Señor»), אֲנִי (aní, «yo»). Si las reconoces, leerás muchísimos versículos con más soltura.',
        'En el panel tienes Éxodo 20:2, el comienzo de los diez mandamientos: «Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto». Busca el jatef pataj de אֲשֶׁר y el de עֲבָדִים (avadim, «siervos»), bajo la áyin. Y fíjate en אֱלֹהֶיךָ, Eloheja, «tu Dios», con jatef segol bajo la álef.',
        { h: 'Las guturales y la pronunciación de hoy' },
        'En el hebreo israelí, la álef y la áyin son mudas, y la he suena suave. Solo la jet conserva un sonido fuerte, como nuestra jota. Por eso, al leer, las guturales se notan menos por su sonido que por las vocales que las acompañan.',
        { ejercicio: {
          pregunta: '¿Cómo se lee אֲנִי (yo)?',
          opciones: [
            { t: 'aní', ok: true, por_que: 'La álef es muda y lleva jatef pataj (a breve); la nun lleva jireq con yod (i). Se lee aní.' },
            { t: 'ení', ok: false, por_que: 'El signo bajo la álef tiene una raya junto al shevá: es jatef pataj, que suena a.' },
            { t: 'ni, porque la álef no suena', ok: false, por_que: 'La álef no tiene sonido propio, pero su vocal sí se pronuncia: a.' }
          ],
          explicacion: 'Álef muda + jatef pataj = a. Nun + jireq + yod = ni. Aní.'
        } }
      ],
      pensar: '«Yo soy Jehová tu Dios, que te saqué» (Éx 20:2). Los mandamientos empiezan recordando lo que Dios ya hizo por su pueblo. ¿Cómo cambia tu obediencia cuando la ves como respuesta a la salvación que Dios te dio?'
    },
    {
      id: 'ayudan', n: 'Letras que ayudan a leer', ref: '1 Samuel 16:13; 1 Crónicas 11:1; Jeremías 26:18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres consonantes que marcan vocales',
          cab: ['Letra', 'Marca la vocal', 'Ejemplo'],
          filas: [
            ['ה', 'a o e al final de la palabra', 'תּוֹרָה (Torá), שָׂדֶה (sadé), campo'],
            ['ו', 'o (וֹ) o u (וּ)', 'שָׁלוֹם (shalom), רוּחַ (rúaj)'],
            ['י', 'i (ִי) o e (ֵי)', 'נָבִיא (naví), בֵּית (beit)'],
          ],
          nota: 'Estas letras ya se usaban antes de que existieran los puntos. Se las llama madres de lectura (en latín, matres lectionis).'
        } },
        { tipo: 'tabla', titulo: 'David', tabla: {
          titulo: 'Dos maneras de escribir el nombre de David',
          cab: ['Grafía', 'Dónde aparece', 'Se lee'],
          filas: [
            ['דָּוִד', 'Samuel, Reyes, Salmos y la mayoría de los libros', 'David'],
            ['דָּוִיד', 'Sobre todo en Crónicas; también en Esdras, Nehemías, Zacarías y unos pocos pasajes más', 'David'],
          ],
          nota: 'La segunda grafía agrega una yod que marca la i. Es una costumbre de escritura más tardía, no un error.'
        } }
      ],
      texto: [
        'Antes de los puntos de los masoretas, los escribas ya tenían una ayuda para la lectura. Usaban tres consonantes, ה, ו y י, para indicar algunas vocales, sobre todo las largas y las del final de palabra. Se llaman madres de lectura: letras que se escriben, pero que en esa posición no suenan como consonante, sino que señalan una vocal.',
        { h: 'Cómo reconocerlas' },
        'La he al final de la palabra casi siempre marca una a o una e: תּוֹרָה, Torá; שָׂדֶה, sadé, «campo». La vav con un punto encima o dentro marca o o u. La yod después de un jireq o de un tsere marca i o e: נָבִיא, naví; בֵּית, beit. En esos casos, la letra no se pronuncia aparte: lees solo la vocal.',
        { h: 'Escritura plena y escritura breve' },
        'Con el tiempo, los escribas fueron usando cada vez más estas letras. Por eso la Biblia hebrea escribe algunas palabras de dos maneras: con la madre de lectura (escritura plena) o sin ella (escritura breve). El ejemplo más claro es el nombre de David, que en el panel aparece con sus dos grafías. En los libros más antiguos se escribe דָּוִד, y en los libros escritos después del exilio, como Crónicas, suele escribirse דָּוִיד, con una yod que marca la i.',
        'El nombre de Jerusalén muestra lo mismo. En casi toda la Biblia se escribe sin la yod de la última sílaba, יְרוּשָׁלִַם, y los masoretas agregaron una vocal para que se lea Yerushaláyim. Solo en cuatro pasajes aparece con la yod, como en Jeremías 26:18: וִירוּשָׁלַיִם, «y Jerusalén».',
        'Estas diferencias son una huella de la historia de la lengua y de los copistas, que respetaron la forma en que cada libro se había escrito. No cambian ni la lectura ni el sentido.',
        { h: 'Una ayuda para ti también' },
        'Si algún día lees hebreo sin vocales, como en un rollo de la ley o en el hebreo moderno impreso, las madres de lectura serán tu principal ayuda. Por eso conviene acostumbrarse a verlas desde ahora.',
        { ejercicio: {
          pregunta: 'En שָׁלוֹם (shalom), ¿suena la vav como consonante?',
          opciones: [
            { t: 'Sí: se lee «shalvom».', ok: false, por_que: 'La vav tiene un punto encima: es la vocal o, no la consonante v.' },
            { t: 'No: con el punto encima marca la vocal o, y se lee shalom.', ok: true, por_que: 'Es una madre de lectura: la vav sostiene el jolem y no suena como v.' },
            { t: 'No suena nada: se lee «shalm».', ok: false, por_que: 'La vav no suena como v, pero marca la vocal o, que sí se pronuncia.' }
          ],
          explicacion: 'Las madres de lectura (ה, ו, י) marcan vocales: no se pronuncian como consonantes en esa posición.'
        } }
      ],
      pensar: 'Los copistas respetaron incluso la forma en que cada libro escribía el nombre de David. ¿Qué te enseña ese respeto por el texto sobre la manera en que debemos acercarnos a la Biblia, sin quitarle ni agregarle (Dt 4:2)?'
    },
    {
      id: 'dagesh', n: 'El punto dentro de la letra', ref: 'Génesis 1:1; Salmo 150:6; Éxodo 20:8',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El punto dentro de la letra',
          cab: ['Signo', 'Nombre', 'Qué hace', 'Ejemplo'],
          filas: [
            ['בּ כּ פּ', 'Dagesh suave', 'Cambia el sonido: b, k, p (sin punto: v, j, f)', 'בַּיִת (báyit), כֹּהֵן (kohén), פֶּה (pe)'],
            ['גּ דּ תּ', 'Dagesh suave', 'En la pronunciación de hoy no cambia el sonido', 'דָּוִד (David), תּוֹרָה (Torá)'],
            ['שּׁ מּ', 'Dagesh fuerte', 'Duplica la consonante; hoy casi no se oye', 'הַשָּׁמַיִם (hashamáyim), שַׁבָּת (shabat)'],
            ['הּ', 'Mapiq', 'La he final suena', 'יָהּ (Yah)'],
            ['וּ', 'Shuruq', 'No es dagesh: es la vocal u', 'רוּחַ (rúaj)'],
          ],
          nota: 'Las seis letras que pueden cambiar de sonido se recuerdan con la palabra begadkefat: ב ג ד כ פ ת.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 150:6', ref: 'Salmo 150:6', he: 'כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ הַלְלוּ־יָהּ׃', tr: 'Kol haneshamá tehalel Yah. Haleluyá.',
          palabras: P(['כֹּל', 'הַנְּשָׁמָה', 'תְּהַלֵּל', 'יָהּ', 'הַלְלוּ־יָהּ'], [['kol', 'todo'], ['haneshamá', 'lo que respira'], ['tehalel', 'alabe'], ['Yah', 'a Jah'], ['halelu-Yah', 'alabad a Jah']]),
          rv: 'Todo lo que respira alabe a JAH. Aleluya' }
      ],
      texto: [
        'A veces verás un punto dentro de una letra. Se llama dagesh, y puede hacer dos cosas distintas. No te preocupes por distinguirlas a la perfección: para leer en voz alta, lo importante es saber en qué letras cambia el sonido.',
        { h: 'El dagesh suave: tres letras cambian' },
        'Seis letras podían tener dos sonidos: ב ג ד כ פ ת. Los gramáticos las recuerdan con la palabra begadkefat. Con el punto dentro tenían un sonido duro, y sin el punto, uno suave. En el hebreo israelí solo se nota la diferencia en tres de ellas, que ya conoces: בּ b y ב v; כּ k y כ j; פּ p y פ f. En las otras tres, guímel, dálet y tav, el punto no cambia nada: suenan g, d y t de todas formas.',
        'Ese punto aparece sobre todo al comienzo de una palabra o de una sílaba que sigue a una consonante sin vocal. Por eso בְּרֵאשִׁית empieza con b, y por eso בַּיִת, «casa», empieza con b, pero לְבָבְךָ («tu corazón») tiene v.',
        { h: 'El dagesh fuerte: una letra doble' },
        'Cuando el punto aparece después de una vocal, en cualquier letra que no sea gutural, indica que la consonante se duplica. En הַשָּׁמַיִם, «los cielos», la shin lleva dagesh porque el artículo duplica la letra siguiente: en la pronunciación antigua sonaba hash-shamáyim. En שַׁבָּת, «sábado», la bet doble era shab-bat. Hoy esa duplicación casi no se oye, pero a veces queda en la transliteración, como en las dos enes de «hosanna».',
        { h: 'El mapiq: una he que suena' },
        'La he final suele ser muda. Si lleva un punto dentro (הּ), se pronuncia. El caso más conocido es יָהּ, Yah, la forma breve del nombre de Dios. En el panel la tienes dos veces en el último versículo del libro de los Salmos. La segunda está en הַלְלוּ־יָהּ, «alabad a Jah», de donde viene nuestro «aleluya».',
        { h: 'No confundir' },
        'La vav con un punto en el medio (וּ) no es una vav con dagesh, sino la vocal u. Si la letra anterior no tiene vocal, lee u.',
        { ejercicio: {
          pregunta: '¿Cómo se lee la letra פ sin punto dentro, como en סֵפֶר (libro)?',
          opciones: [
            { t: 'p', ok: false, por_que: 'La p necesita el punto dentro (פּ).' },
            { t: 'f', ok: true, por_que: 'Sin dagesh, la pe suena f. Por eso se lee séfer.' },
            { t: 'Igual con o sin punto, como la dálet.', ok: false, por_que: 'En el hebreo de hoy, solo bet, kaf y pe cambian de sonido con el punto. Dálet, guímel y tav no cambian.' }
          ],
          explicacion: 'Con punto: b, k, p. Sin punto: v, j, f.'
        } }
      ],
      pensar: '«Todo lo que respira alabe a JAH. Aleluya» (Sal 150:6). El libro de los Salmos termina en alabanza. ¿Qué lugar ocupa la alabanza, no solo la petición, en tu oración diaria?'
    }
  ];

  window.__ALEF.vocales = vocales;
})();
/* El alfabeto hebreo y la lectura · ruta IV. A leer (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;

  const leer = [
    {
      id: 'silabas', n: 'Sílabas y acento', ref: 'Génesis 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'Sílabas', tabla: {
          titulo: 'Palabras divididas en sílabas',
          cab: ['Palabra', 'Sílabas', 'Se lee', 'Acento'],
          filas: [
            ['בָּרָא', 'בָּ · רָא', 'ba-rá', 'Última sílaba'],
            ['אֱלֹהִים', 'אֱ · לֹ · הִים', 'E-lo-him', 'Última sílaba'],
            ['שָׁלוֹם', 'שָׁ · לוֹם', 'sha-lom', 'Última sílaba'],
            ['מִזְמוֹר', 'מִז · מוֹר', 'miz-mor', 'Última sílaba'],
            ['מֶלֶךְ', 'מֶ · לֶךְ', 'mé-lej', 'Penúltima sílaba'],
            ['הַשָּׁמַיִם', 'הַ · שָּׁ · מַ · יִם', 'ha-sha-má-yim', 'Penúltima sílaba'],
          ],
          nota: 'Toda sílaba hebrea empieza con una consonante. La única excepción es la vav que significa «y» cuando suena u (וּ).'
        } },
        { tipo: 'hebreo', titulo: 'Con acentos', ref: 'Génesis 1:1', he: 'בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃', tr: 'Los acentos masoréticos marcan, entre otras cosas, la sílaba acentuada de cada palabra.', rv: 'En el principio creó Dios los cielos y la tierra.' }
      ],
      texto: [
        'Ya conoces las letras y las vocales. Para leer con soltura falta un paso: agruparlas en sílabas. El hebreo tiene reglas sencillas que ayudan mucho.',
        { h: 'Toda sílaba empieza con consonante' },
        'En hebreo, cada sílaba empieza con una consonante, y cada consonante con vocal abre una sílaba. Por eso אֱלֹהִים se divide E-lo-him: la álef con su vocal, la lámed con la suya y la he con la suya, más la mem final que cierra. Aunque la álef no suene, cuenta como la consonante que abre la primera sílaba.',
        'Una sílaba puede terminar en vocal (abierta), como בָּ en בָּרָא, o en consonante (cerrada), como מִז en מִזְמוֹר. Una consonante sin vocal, con shevá que calla o al final de la palabra, cierra la sílaba anterior.',
        { h: '¿Dónde va el acento?' },
        'La mayoría de las palabras hebreas se acentúan en la última sílaba: ba-RÁ, sha-LOM, E-lo-HIM. Es lo contrario de lo que pasa con muchas palabras del español, así que conviene practicarlo.',
        'Hay un grupo importante que se acentúa en la penúltima sílaba: las palabras de dos sílabas con segol, como מֶלֶךְ (MÉ-lej), אֶרֶץ (É-rets) y לֶחֶם (LÉ-jem). También las palabras en dual o con la terminación -áyim, como שָׁמַיִם (sha-MÁ-yim) y מַיִם (MÁ-yim). En la transliteración de este recurso, la tilde te avisa cuando el acento no cae donde el español lo pondría.',
        { h: 'Los acentos del texto' },
        'En el segundo panel tienes Génesis 1:1 con todos los signos de los masoretas. Las pequeñas marcas que aparecen encima y debajo de las palabras, además de las vocales, son los acentos. Casi todos se escriben sobre la sílaba acentuada, así que también sirven para saber dónde cargar la voz. Los verás de nuevo en la estación «Signos que ayudan a leer».',
        { ejercicio: {
          pregunta: '¿Cómo se divide en sílabas y se acentúa שָׁלוֹם?',
          opciones: [
            { t: 'SHA-lom', ok: false, por_que: 'La división es correcta, pero el acento cae en la última sílaba, como en la mayoría de las palabras hebreas.' },
            { t: 'sha-LOM', ok: true, por_que: 'Dos sílabas: shin con qamets (sha) y lámed con jolem vav y mem final (lom). El acento va al final.' },
            { t: 'shal-om', ok: false, por_que: 'Toda sílaba hebrea empieza con consonante: la lámed abre la segunda sílaba, no cierra la primera.' }
          ],
          explicacion: 'Sha-LOM: dos sílabas, acento en la última.'
        } }
      ],
      pensar: 'Leer despacio, sílaba por sílaba, obliga a prestar atención a cada palabra. ¿Cómo podrías leer la Biblia en español con esa misma atención, sin apurarte?'
    },
    {
      id: 'nombres', n: 'Nombres que ya conoces', ref: 'Génesis 17:5; 21:6; 32:28; Mateo 1:21',
      visual: [
        { tipo: 'tabla', titulo: 'Nombres', tabla: {
          titulo: 'Nombres bíblicos en hebreo',
          cab: ['Hebreo', 'Se lee', 'En español', 'Relacionado con'],
          filas: [
            ['אָדָם', 'Adam', 'Adán', 'adamá, «tierra» (Gn 2:7)'],
            ['חַוָּה', 'Javá', 'Eva', 'jay, «viviente» (Gn 3:20)'],
            ['אַבְרָהָם', 'Avraham', 'Abraham', '«padre de muchedumbre» (Gn 17:5)'],
            ['יִצְחָק', 'Yitsjak', 'Isaac', '«reirá» (Gn 21:6)'],
            ['יַעֲקֹב', 'Yaakov', 'Jacob', 'akev, «talón» (Gn 25:26)'],
            ['יִשְׂרָאֵל', 'Yisrael', 'Israel', 'ha luchado con Dios (Gn 32:28)'],
            ['מֹשֶׁה', 'Moshé', 'Moisés', '«sacar» de las aguas (Éx 2:10)'],
            ['דָּוִד', 'David', 'David', 'probablemente «amado»'],
            ['שְׁלֹמֹה', 'Shelomó', 'Salomón', 'shalom, «paz»'],
            ['יְהוֹשֻׁעַ', 'Yehoshúa', 'Josué y Jesús', 'Jehová salva (Mt 1:21)'],
          ],
          nota: 'Toca «Ocultar ayudas» en la estación siguiente del taller para practicar sin la columna «Se lee».'
        } }
      ],
      texto: [
        'La mejor manera de ganar confianza es leer palabras que ya conoces. Los nombres bíblicos son ideales: sabes cómo deberían sonar, y puedes comprobar si los leíste bien. Tapa con la mano las columnas de la derecha e intenta leer cada nombre antes de mirar.',
        { h: 'Nombres con significado' },
        'En la Biblia, los nombres no son etiquetas: dicen algo de la persona o de lo que Dios hizo en su vida. Adán, אָדָם, se relaciona con אֲדָמָה, adamá, la tierra de la que fue formado. Eva, חַוָּה, Javá, fue llamada así «por cuanto ella era madre de todos los vivientes» (Gn 3:20). Isaac, יִצְחָק, significa «reirá», porque Sara dijo: «Dios me ha hecho reir» (Gn 21:6).',
        'A veces Dios mismo cambia un nombre para marcar una nueva etapa. Abram pasa a llamarse Abraham, «padre de muchedumbre de gentes» (Gn 17:5). Jacob, el que tomó el talón de su hermano, pasa a llamarse Israel después de luchar con Dios en Peniel (Gn 32:28).',
        { h: 'Por qué suenan distinto en español' },
        'Muchos nombres llegaron al español a través del griego y del latín, y en el camino cambiaron. Yitsjak se volvió Isaac, Moshé se volvió Moisés y Shelomó se volvió Salomón. El griego no tenía el sonido sh ni la jota, y agregaba terminaciones propias. Cuando leas en hebreo, no te sorprendas: la Biblia en español conserva la forma que nos llegó por la tradición, y el hebreo te muestra el sonido original.',
        { h: 'El nombre de Jesús' },
        'El último nombre de la tabla merece atención. יְהוֹשֻׁעַ, Yehoshúa, es el nombre de Josué, y significa «Jehová salva». En tiempos de Jesús se usaba mucho su forma breve, Yeshúa. Pasó al griego como Iesús y al español como Jesús. Por eso el ángel le dijo a José: «llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados» (Mt 1:21). El nombre ya anunciaba su misión.',
        { ejercicio: {
          pregunta: 'Lee esta palabra: מֹשֶׁה. ¿Qué nombre es?',
          opciones: [
            { t: 'Moshé, Moisés', ok: true, por_que: 'Mem con jolem (mo), shin con segol (she) y he final muda. Se lee Moshé.' },
            { t: 'Shalom, paz', ok: false, por_que: 'Shalom empieza con shin (שׁ). Esta palabra empieza con mem (מ).' },
            { t: 'Melej, rey', ok: false, por_que: 'Mélej termina en jaf final (ך). Esta palabra termina en he (ה).' }
          ],
          explicacion: 'מֹשֶׁה: mo-SHÉ. La he final no suena.'
        } }
      ],
      pensar: 'El nombre de Jesús significa Jehová salva, y en ningún otro nombre hay salvación (Hch 4:12). ¿Qué te dice tu propia vida sobre el nombre de Jesús?'
    },
    {
      id: 'espanol', n: 'Palabras hebreas en español', ref: 'Salmo 118:25; Isaías 7:14; Éxodo 16:31',
      visual: [
        { tipo: 'tabla', titulo: 'Palabras', tabla: {
          titulo: 'Del hebreo bíblico al español',
          cab: ['Hebreo', 'Se lee', 'En español', 'Significa'],
          filas: [
            ['אָמֵן', 'amén', 'amén', 'firme, cierto, así sea'],
            ['הַלְלוּ־יָהּ', 'halelu-Yah', 'aleluya', 'alabad a Jah'],
            ['הוֹשִׁיעָה נָּא', 'hoshía na', 'hosanna', 'salva ahora, te ruego'],
            ['עִמָּנוּ אֵל', 'imanu El', 'Emanuel', 'Dios con nosotros'],
            ['מָשִׁיחַ', 'mashíaj', 'Mesías', 'ungido'],
            ['שַׁבָּת', 'shabat', 'sábado', 'cese, reposo'],
            ['מָן', 'man', 'maná', '¿qué es esto?'],
            ['כְּרוּב', 'kerúv', 'querubín', 'querubín'],
            ['שְׂרָפִים', 'serafim', 'serafines', 'los que arden'],
            ['שָׂטָן', 'satán', 'Satanás', 'adversario'],
            ['עֵדֶן', 'éden', 'Edén', 'delicia'],
            ['יוֹבֵל', 'yovel', 'jubileo', 'año de liberación; cuerno de carnero'],
          ],
          nota: 'Varias de estas palabras llegaron al español a través del griego del Nuevo Testamento y del latín, por eso cambiaron un poco su forma.'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 118:25', ref: 'Salmo 118:25', he: 'אָנָּא יְהוָה הוֹשִׁיעָה נָּא אָנָּא יְהוָה הַצְלִיחָה נָּא׃', rv: 'Oh Jehová, sálvanos ahora, te ruego; Te ruego, oh Jehová, que nos hagas prosperar ahora.' }
      ],
      texto: [
        'Sin saberlo, ya usas palabras hebreas. Cada vez que dices amén o aleluya en la iglesia, hablas en la lengua del Antiguo Testamento. Leerlas ahora en su escritura original es una forma muy agradable de practicar.',
        { h: 'Palabras de la adoración' },
        'אָמֵן, amén, viene de una raíz que significa ser firme o seguro, la misma de la que salen «fe» y «verdad». Decir amén es decir «es cierto, así sea». En el Nuevo Testamento, Jesús empieza muchas de sus enseñanzas con un doble amén, que la Reina-Valera traduce «de cierto, de cierto». Y Pablo dice que todas las promesas de Dios son en Cristo «Amén» (2 Co 1:20).',
        'הַלְלוּ־יָהּ, halelu-Yah, une el verbo «alabad» con Yah, la forma breve del nombre de Dios. Aparece en los Salmos, sobre todo al final del libro, y pasó al Nuevo Testamento en el gran canto de Apocalipsis 19.',
        'Hosanna viene de הוֹשִׁיעָה נָּא, hoshía na, «salva ahora», del Salmo 118:25, que tienes en el panel. Las multitudes lo gritaron cuando Jesús entró en Jerusalén (Mt 21:9). Era un ruego que se había vuelto un grito de alabanza.',
        { h: 'Palabras de la historia de la salvación' },
        'מָשִׁיחַ, mashíaj, «ungido», pasó al español como Mesías; su traducción griega es Cristo. Emanuel, עִמָּנוּ אֵל, son dos palabras: imanu, «con nosotros», y El, «Dios» (Is 7:14; Mt 1:23). El maná, מָן, recibió su nombre de la pregunta de los israelitas cuando lo vieron por primera vez: «¿Qué es esto?» (Éx 16:15).',
        'Otras palabras describen el mundo espiritual: querubín y serafín son plurales hebreos en -im, y Satanás viene de שָׂטָן, satán, que significa adversario. Jubileo viene de יוֹבֵל, yovel, palabra relacionada con el cuerno de carnero (Jos 6:4) y que da nombre al año de liberación (Lv 25:10).',
        { ejercicio: {
          pregunta: '¿Qué significa la palabra hebrea detrás de «hosanna»?',
          opciones: [
            { t: 'Gloria a Dios en las alturas.', ok: false, por_que: 'Esa es otra alabanza, la de los ángeles en Belén.' },
            { t: 'Salva ahora, te ruego.', ok: true, por_que: 'Hoshía na, del Salmo 118:25: un ruego de salvación que el pueblo dirigió a Jesús.' },
            { t: 'Así sea.', ok: false, por_que: 'Ese es el sentido de amén.' }
          ],
          explicacion: 'Al gritar «hosanna», la multitud pedía al Hijo de David que trajera la salvación prometida.'
        } }
      ],
      pensar: 'Cada vez que dices amén, afirmas que lo que Dios dice es firme y verdadero. ¿Hay alguna promesa de Dios a la que te cuesta decir amén de corazón?'
    },
    {
      id: 'nombre-de-dios', n: 'El nombre de Dios: יהוה', ref: 'Éxodo 3:14-15; Génesis 15:2',
      visual: [
        { tipo: 'hebreo', titulo: 'Éxodo 3:15', ref: 'Éxodo 3:15', he: 'וַיֹּאמֶר עוֹד אֱלֹהִים אֶל־מֹשֶׁה כֹּה־תֹאמַר אֶל־בְּנֵי יִשְׂרָאֵל יְהוָה אֱלֹהֵי אֲבֹתֵיכֶם אֱלֹהֵי אַבְרָהָם אֱלֹהֵי יִצְחָק וֵאלֹהֵי יַעֲקֹב שְׁלָחַנִי אֲלֵיכֶם זֶה־שְּׁמִי לְעֹלָם וְזֶה זִכְרִי לְדֹר דֹּר׃', rv: 'Además dijo Dios a Moisés: Así dirás a los hijos de Israel: Jehová, el Dios de vuestros padres, el Dios de Abraham, Dios de Isaac y Dios de Jacob, me ha enviado a vosotros. Este es mi nombre para siempre; con él se me recordará por todos los siglos.' },
        { tipo: 'tabla', titulo: 'Cómo se lee', tabla: {
          titulo: 'Cómo se lee el nombre de Dios en la Biblia hebrea',
          cab: ['Se escribe', 'Se lee', 'La Reina-Valera dice', 'Ejemplo'],
          filas: [
            ['יְהוָה', 'Adonái', 'Jehová', 'Éxodo 3:15'],
            ['אֲדֹנָי יֱהוִה', 'Adonái Elohim', 'Señor Jehová', 'Génesis 15:2'],
            ['יָהּ', 'Yah', 'JAH', 'Salmo 150:6'],
            ['אֲדֹנָי', 'Adonái', 'Señor', 'Isaías 6:1'],
          ],
          nota: 'Las vocales de יְהוָה no son las del nombre, sino una señal para leer «Adonái». Cuando el texto ya dice אֲדֹנָי al lado, el nombre lleva las vocales de Elohim.'
        } }
      ],
      texto: [
        'El nombre propio de Dios se escribe con cuatro consonantes: יהוה, yod, he, vav, he. Por eso se le llama tetragrámaton, «las cuatro letras». Aparece casi siete mil veces en el Antiguo Testamento. Dios lo reveló a Moisés junto a la zarza: «Este es mi nombre para siempre» (Éx 3:15), y está relacionado con el verbo «ser»: «YO SOY EL QUE SOY» (Éx 3:14).',
        { h: 'Un nombre que no se pronunciaba' },
        'Con el tiempo, por reverencia y para no tomar el nombre de Dios en vano (Éx 20:7), los judíos dejaron de pronunciarlo. Al leer en voz alta decían אֲדֹנָי, Adonái, «mi Señor». Cuando los masoretas pusieron las vocales, no escribieron las del nombre, que ya no se pronunciaba, sino las de la palabra que había que leer. Por eso en el texto aparece יְהוָה: las cuatro consonantes del nombre con las vocales de Adonái, como una nota que dice «lee Señor».',
        'La regla tiene un detalle curioso. Cuando el texto ya dice אֲדֹנָי junto al nombre, como en «Señor Jehová» (Gn 15:2), habría que decir «Adonái Adonái». Entonces los masoretas escribieron el nombre con las vocales de אֱלֹהִים, para que se leyera «Adonái Elohim»: יֱהוִה.',
        { h: '¿De dónde viene «Jehová»?' },
        'Algunos lectores cristianos de la Edad Media leyeron juntas las consonantes del nombre y las vocales de Adonái, y de esa combinación salió la forma Jehová. Casiodoro de Reina la usó en su traducción de 1569, y la Reina-Valera 1960 la conserva. Muchos estudiosos piensan que la pronunciación original se acercaba a Yahvé, aunque nadie puede asegurarlo. Este recurso, al transliterar el texto hebreo, escribe Adonái, que es como se lee en voz alta, y en la traducción mantiene Jehová, como la Reina-Valera.',
        { posturas: {
          titulo: '¿Jehová o Yahvé?',
          a: { n: 'Jehová', t: 'Es la forma de la Reina-Valera desde 1569 y la que reconocen los lectores hispanos. Combina las consonantes del nombre con las vocales que el texto hebreo trae escritas.' },
          b: { n: 'Yahvé', t: 'Es una reconstrucción académica de la pronunciación antigua, basada en la forma breve Yah y en testimonios de los primeros siglos. Varias traducciones modernas la usan.' },
          c: 'Las dos formas nombran al mismo Dios; la diferencia es de transcripción, no de doctrina. El Nuevo Testamento, al citar el Antiguo, traduce el nombre como «Señor» (Kyrios), y llama así también a Jesucristo (Fil 2:11).'
        } },
        { ir: { t: 'Ver «Jehová, Yo soy el que soy» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#nombres/2' } },
        { ejercicio: {
          pregunta: '¿Por qué el nombre יְהוָה lleva en la Biblia hebrea las vocales de Adonái?',
          opciones: [
            { t: 'Porque así se pronunciaba el nombre en tiempos de Moisés.', ok: false, por_que: 'Las vocales no son las del nombre: son una señal para leer «Adonái» en su lugar.' },
            { t: 'Para indicar al lector que, en lugar del nombre, debía leer «Adonái», Señor.', ok: true, por_que: 'Los masoretas escribieron las vocales de la palabra que se leía en voz alta, por reverencia al nombre.' },
            { t: 'Porque Adonái y el nombre de Dios son la misma palabra.', ok: false, por_que: 'Son palabras distintas: Adonái significa «mi Señor», y el nombre se relaciona con el verbo «ser».' }
          ],
          explicacion: 'Consonantes del nombre, vocales de Adonái: el texto conserva el nombre y, a la vez, indica cómo leerlo con reverencia.'
        } }
      ],
      pensar: 'Israel temía tanto usar en vano el nombre de Dios que dejó de pronunciarlo. ¿Cómo honras tú el nombre de Dios en tu manera de hablar, de orar y de vivir?'
    },
    {
      id: 'signos', n: 'Signos que ayudan a leer', ref: 'Génesis 1:1; Deuteronomio 6:4; Isaías 6:3',
      visual: [
        { tipo: 'tabla', titulo: 'Signos', tabla: {
          titulo: 'Signos que conviene reconocer',
          cab: ['Signo', 'Nombre', 'Para qué sirve'],
          filas: [
            ['׃', 'Sof pasuq', 'Marca el final del versículo, como un punto final'],
            ['־', 'Maqaf', 'Une dos palabras que se leen como una sola, como un guion'],
            ['אֱלֹהִ֑ים', 'Atnaj', 'Divide el versículo en dos mitades, como un punto y coma (aquí, bajo la he de Elohim)'],
            ['הָאָֽרֶץ', 'Silúq', 'Va en la última palabra del versículo, en la sílaba acentuada (aquí, bajo la álef)'],
            ['פ ס', 'Petujá y setumá', 'Marcan el fin de un párrafo en algunas Biblias hebreas'],
          ],
          nota: 'El texto de este recurso conserva el sof pasuq y el maqaf, y omite los acentos salvo en esta estación y en la de las sílabas.'
        } },
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:4', ref: 'Deuteronomio 6:4', he: 'שְׁמַ֖ע יִשְׂרָאֵ֑ל יְהוָ֥ה אֱלֹהֵ֖ינוּ יְהוָ֥ה׀ אֶחָֽד׃', tr: 'Shemá Yisrael, Adonái Eloheinu, Adonái ejad.', rv: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.' },
        { tipo: 'hebreo', titulo: 'Isaías 6:3', ref: 'Isaías 6:3', he: 'וְקָרָ֨א זֶ֤ה אֶל־זֶה֙ וְאָמַ֔ר קָד֧וֹשׁ׀ קָד֛וֹשׁ קָד֖וֹשׁ יְהוָ֣ה צְבָא֑וֹת מְלֹ֥א כָל־הָאָ֖רֶץ כְּבוֹדֽוֹ׃', rv: 'Y el uno al otro daba voces, diciendo: Santo, santo, santo, Jehová de los ejércitos; toda la tierra está llena de su gloria.' }
      ],
      texto: [
        'Además de las vocales, los masoretas pusieron en el texto un sistema completo de acentos. Son unos treinta signos distintos que cumplen tres funciones: marcan la sílaba acentuada, indican la melodía con que se canta el texto en la sinagoga y señalan las pausas, como hacen nuestras comas y puntos. Para empezar a leer no necesitas aprenderlos todos, pero sí reconocer algunos.',
        { h: 'Fin del versículo y unión de palabras' },
        'El sof pasuq (׃), dos puntos uno sobre otro, cierra cada versículo. Lo has visto al final de todos los textos de este recurso. El maqaf (־) es una rayita alta que une dos palabras que se pronuncian juntas, con un solo acento, como en אֶת־הָאָדָם o en הַלְלוּ־יָהּ.',
        { h: 'Las dos mitades del versículo' },
        'El acento más útil para el lector es el atnaj (ב֑), que parece una pequeña ve invertida bajo una sílaba. Divide el versículo en dos mitades, y la división casi siempre coincide con el sentido. En Génesis 1:1 está bajo אֱלֹהִים: «En el principio creó Dios» | «los cielos y la tierra». En el panel lo tienes en Deuteronomio 6:4, bajo יִשְׂרָאֵל: «Oye, Israel» | «Jehová nuestro Dios, Jehová uno es». La última palabra del versículo lleva el silúq, una rayita vertical bajo la sílaba acentuada.',
        { h: 'Una ayuda para interpretar' },
        'Los acentos son la interpretación más antigua que conservamos de cómo se leía cada versículo. No son inspirados como el texto, pero muestran cómo la comunidad que lo transmitía entendía sus pausas. Los traductores los tienen en cuenta, aunque a veces deciden puntuar de otra manera. Los verás mencionados en comentarios sobre pasajes como Isaías 40:3, donde la pausa decide si «en el desierto» va con la voz que clama o con el camino que se prepara.',
        { h: 'Cuando el texto se canta' },
        'En las sinagogas, la Escritura no se recita en tono plano: se canta siguiendo la melodía que indican los acentos. Es probable que la lectura pública ya se entonara así, de algún modo, en las reuniones donde se leían la ley y los profetas, como la de Nazaret en Lucas 4:16-17.',
        { ejercicio: {
          pregunta: '¿Qué indica el signo ׃ al final de una línea hebrea?',
          opciones: [
            { t: 'Que la palabra se lee dos veces.', ok: false, por_que: 'No hay un signo de repetición: ׃ es el sof pasuq.' },
            { t: 'El final del versículo.', ok: true, por_que: 'Sof pasuq significa «fin del versículo». Funciona como nuestro punto final.' },
            { t: 'Que falta una vocal.', ok: false, por_que: 'Las vocales son puntos debajo, encima o dentro de las letras. El sof pasuq va después de la última palabra.' }
          ],
          explicacion: 'Sof pasuq (׃): fin del versículo. Atnaj (ב֑): mitad del versículo. Maqaf (־): une palabras.'
        } }
      ],
      pensar: 'El atnaj divide el Shemá en dos partes: «Oye, Israel» y lo que Israel debe oír. ¿Qué tan dispuesto está tu corazón a oír antes de hablar cuando lees la Palabra?'
    },
    {
      id: 'prefijos', n: 'Letras que se pegan al comienzo', ref: 'Salmo 119:9; Génesis 1:1; Éxodo 20:2',
      visual: [
        { tipo: 'tabla', titulo: 'Prefijos', tabla: {
          titulo: 'Seis prefijos frecuentes',
          cab: ['Prefijo', 'Significa', 'Ejemplo', 'Se lee'],
          filas: [
            ['וְ', 'y', 'וְאֵת', 've-et'],
            ['בְּ', 'en, con', 'בְּרֵאשִׁית', 'be-reshit, en el principio'],
            ['כְּ', 'como, conforme a', 'כִּדְבָרֶךָ', 'ki-dvareja, conforme a tu palabra'],
            ['לְ', 'a, para, de', 'לְדָוִד', 'le-david, de David'],
            ['הַ', 'el, la, los, las', 'הַשָּׁמַיִם', 'ha-shamáyim, los cielos'],
            ['מִ / מֵ', 'de, desde', 'מֵאֶרֶץ', 'me-érets, de la tierra'],
          ],
          nota: 'Las terminaciones de las palabras (mi, tu, su, nuestro) y la gramática se estudian en el recurso siguiente, Vocabulario y gramática básica del hebreo bíblico (ruta II, «Los sufijos»).'
        } },
        { tipo: 'hebreo', titulo: 'Salmo 119:9', ref: 'Salmo 119:9', he: 'בַּמֶּה יְזַכֶּה־נַּעַר אֶת־אָרְחוֹ לִשְׁמֹר כִּדְבָרֶךָ׃', tr: 'Bamé yezaké-náar et-orjó? Lishmor kidvareja.',
          palabras: P(['בַּמֶּה', 'יְזַכֶּה־נַּעַר', 'אֶת־אָרְחוֹ', 'לִשְׁמֹר', 'כִּדְבָרֶךָ'], [['bamé', '¿con qué?'], ['yezaké-náar', 'limpiará el joven'], ['et-orjó', 'su camino'], ['lishmor', 'guardando'], ['kidvareja', 'conforme a tu palabra']]),
          rv: '¿Con qué limpiará el joven su camino? Con guardar tu palabra.' }
      ],
      texto: [
        'Si buscas en un diccionario la palabra בְּרֵאשִׁית, no la vas a encontrar así. Está formada por dos partes: בְּ, «en», y רֵאשִׁית, «principio». En hebreo, varias palabras pequeñas no se escriben aparte, sino pegadas al comienzo de la palabra siguiente. Reconocerlas es el primer paso para usar un diccionario o un interlineal.',
        { h: 'Las seis más frecuentes' },
        'En el panel tienes las seis. Cuatro llevan normalmente shevá: וְ («y»), בְּ («en»), כְּ («como») y לְ («a», «para»). El artículo הַ («el», «la») lleva pataj y, casi siempre, duplica la letra siguiente con un dagesh: por eso הַשָּׁמַיִם tiene un punto dentro de la shin. La preposición מִ («de», «desde») también suele duplicar la letra siguiente o, ante una gutural, se vuelve מֵ, como en מֵאֶרֶץ, «de la tierra» (Éx 20:2).',
        'A veces cambia la vocal del prefijo para facilitar la pronunciación. Delante de otra letra con shevá, el shevá del prefijo se vuelve jireq: כִּדְבָרֶךָ (kidvareja) y לִשְׁמֹר (lishmor). Y la vav «y» se lee u delante de algunas letras: וּבְכָל, uvjol, «y con todo».',
        { h: 'Pueden juntarse' },
        'Una palabra puede llevar más de un prefijo. וּבְכָל son tres partes: וּ («y»), בְ («con») y כָל («todo»). Al leer, sepáralas mentalmente de derecha a izquierda: primero el prefijo, después la palabra.',
        { h: 'Practica con el Salmo 119:9' },
        'El panel trae la primera línea de la estrofa de la bet: «¿Con qué limpiará el joven su camino? Con guardar tu palabra». Busca en la última palabra el prefijo כִּ, «conforme a», y en לִשְׁמֹר el prefijo לִ, «para». Después oculta las ayudas y léela sin mirar.',
        { ir: { t: 'Ver «Los sufijos» en Vocabulario y gramática básica del hebreo bíblico', a: '../../gramatica-hebrea/#sustantivo/9' } },
        { ejercicio: {
          pregunta: 'En la palabra לְדָוִד, que aparece en el título de muchos salmos, ¿qué significa la primera letra?',
          opciones: [
            { t: 'Es parte del nombre: el rey se llamaba Ledavid.', ok: false, por_que: 'El nombre es דָּוִד, David. La lámed del comienzo es un prefijo.' },
            { t: '«De» o «para»: el salmo es de David o dedicado a él.', ok: true, por_que: 'La lámed pegada al comienzo significa «a», «para» o «de». La Reina-Valera traduce «Salmo de David».' },
            { t: '«Y»: el salmo es de David y de otro autor.', ok: false, por_que: 'El prefijo «y» es la vav (וְ), no la lámed (לְ).' }
          ],
          explicacion: 'לְ + דָוִד: «de David». Separar el prefijo te permite encontrar la palabra en un diccionario.'
        } }
      ],
      pensar: '«¿Con qué limpiará el joven su camino? Con guardar tu palabra» (Sal 119:9). ¿Qué palabra de Dios necesitas guardar hoy para mantener limpio tu camino?'
    },
    {
      id: 'pronunciacion', n: 'La pronunciación antigua y la de hoy', ref: 'Jueces 12:6; Nehemías 13:24',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres tradiciones de lectura',
          cab: ['Palabra', 'Israelí (este recurso)', 'Asquenazí', 'Qué cambia'],
          filas: [
            ['שַׁבָּת', 'shabat', 'shabos', 'La tav sin punto suena s'],
            ['אֱמֶת', 'emet', 'emes', 'La tav sin punto suena s'],
            ['בְּרֵאשִׁית', 'bereshit', 'bereishis', 'El tsere suena ei'],
          ],
          nota: 'La pronunciación asquenazí es la de los judíos de Europa central y oriental. La israelí se basa en la sefardí, de los judíos de España y del Mediterráneo.'
        } },
        { tipo: 'tabla', titulo: 'Antes y hoy', tabla: {
          titulo: 'Sonidos del hebreo antiguo que hoy se pronuncian igual',
          cab: ['Letras', 'Hoy', 'En la antigüedad'],
          filas: [
            ['ח / כ', 'Las dos suenan j', 'La jet era una h fuerte de la garganta, distinta de la jaf'],
            ['ע / א', 'Las dos son mudas', 'La áyin era un sonido de garganta propio'],
            ['ט / ת', 'Las dos suenan t', 'La tet era una t enfática, pronunciada más atrás'],
            ['ק / כּ', 'Las dos suenan k', 'La qof era una k enfática, más profunda'],
            ['ו', 'v', 'Probablemente w, como en «huevo»'],
            ['גּ ג / דּ ד / תּ ת', 'Sin diferencia', 'Con y sin punto tenían sonidos distintos'],
          ],
          nota: 'La pronunciación antigua se reconstruye por las transcripciones griegas, los sonidos de las lenguas hermanas y las reglas de la gramática. No es segura en todos los detalles.'
        } }
      ],
      texto: [
        'Si alguna vez escuchas leer hebreo bíblico, puede que no suene igual que en este recurso. Hay varias tradiciones de pronunciación, y ninguna es más espiritual que otra. Todas leen las mismas letras con las mismas vocales; cambian algunos sonidos.',
        { h: 'Tres tradiciones' },
        'La pronunciación israelí, la que usa este recurso, se basa en la sefardí, la de los judíos que vivieron en España hasta 1492 y después se dispersaron por el Mediterráneo. Es la que se habla hoy en Israel y la que enseñan la mayoría de los institutos bíblicos y seminarios.',
        'La pronunciación asquenazí, de los judíos de Europa central y oriental, pronuncia la tav sin punto como s y cambia algunas vocales: por eso a veces oirás «shabos» en lugar de shabat. La tradición de los judíos de Yemen conserva varios sonidos antiguos de garganta que las otras perdieron.',
        { h: 'Cómo sonaba en tiempos bíblicos' },
        'El hebreo que hablaban David o Isaías tenía sonidos que hoy se confunden: la jet y la jaf eran distintas, la áyin tenía un sonido propio, y la tet y la qof se pronunciaban de manera enfática. El segundo panel resume esas diferencias. Los estudiosos las reconstruyen comparando el hebreo con las lenguas hermanas y con la forma en que los traductores griegos escribieron los nombres propios.',
        { h: 'Las diferencias ya estaban en la Biblia' },
        'La Biblia misma muestra que no todos los israelitas pronunciaban igual. Los efrateos decían sibólet en lugar de shibólet (Jue 12:6). Siglos después, Nehemías se lamentó porque los hijos de los matrimonios con mujeres de Asdod «no sabían hablar judaico» (Neh 13:24): la lengua del pueblo de Dios se estaba perdiendo en sus propias casas.',
        { h: 'Para qué sirve saberlo' },
        'Para leer y estudiar, basta con elegir una pronunciación y ser constante. Lo que importa no es sonar como un antiguo israelita, sino leer bien las letras y entender las palabras. Conocer las otras tradiciones te ayudará a no confundirte cuando las encuentres en un libro, una canción o un video.',
        { ejercicio: {
          pregunta: 'Si escuchas a alguien leer שַׁבָּת como «shabos», ¿qué está pasando?',
          opciones: [
            { t: 'Está leyendo mal: confunde la tav con la sámej.', ok: false, por_que: 'No es un error de lectura: es la tradición asquenazí, que pronuncia la tav sin punto como s.' },
            { t: 'Usa la pronunciación asquenazí, que pronuncia como s la tav sin punto.', ok: true, por_que: 'Es una tradición de lectura antigua y respetable, distinta de la israelí que usa este recurso.' },
            { t: 'Está leyendo otra palabra con otro significado.', ok: false, por_que: 'Es la misma palabra, sábado, con otra pronunciación.' }
          ],
          explicacion: 'Las tradiciones de lectura difieren en algunos sonidos, no en el texto.'
        } }
      ],
      pensar: 'Nehemías se dolió de que los niños no supieran hablar la lengua de su pueblo, en la que oían la ley de Dios. ¿Qué estás haciendo para que la Palabra de Dios sea la «lengua materna» de los niños de tu casa y de tu iglesia?'
    }
  ];

  window.__ALEF.leer = leer;
})();
/* El alfabeto hebreo y la lectura · Taller práctico y armado de RUTA_DATA (ver encabezado de parte1.js) */
(() => {
  const P = window.__ALEF.P;

  const taller = [
    {
      id: 'genesis', n: 'Génesis 1:1, palabra por palabra', ref: 'Génesis 1:1; Juan 1:1-3',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:1', ref: 'Génesis 1:1', he: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃', tr: 'Bereshit bará Elohim et hashamáyim veet haárets.',
          palabras: P(['בְּרֵאשִׁית', 'בָּרָא', 'אֱלֹהִים', 'אֵת', 'הַשָּׁמַיִם', 'וְאֵת', 'הָאָרֶץ'], [['bereshit', 'en el principio'], ['bará', 'creó'], ['Elohim', 'Dios'], ['et', '(marca del objeto)'], ['hashamáyim', 'los cielos'], ['veet', 'y (marca del objeto)'], ['haárets', 'la tierra']]),
          rv: 'En el principio creó Dios los cielos y la tierra.' },
        { tipo: 'tabla', titulo: 'Paso a paso', tabla: {
          titulo: 'Cómo leer cada palabra',
          cab: ['Palabra', 'Letras y vocales', 'Sílabas'],
          filas: [
            ['בְּרֵאשִׁית', 'bet con dagesh y shevá · resh con tsere · álef muda · shin con jireq · yod (ayuda) · tav', 'be-re-SHIT'],
            ['בָּרָא', 'bet con qamets · resh con qamets · álef muda', 'ba-RÁ'],
            ['אֱלֹהִים', 'álef con jatef segol · lámed con jolem · he con jireq · yod (ayuda) · mem final', 'e-lo-HIM'],
            ['אֵת', 'álef con tsere · tav', 'ET'],
            ['הַשָּׁמַיִם', 'artículo ha · shin con dagesh y qamets · mem con pataj · yod con jireq · mem final', 'ha-sha-MÁ-yim'],
            ['וְאֵת', 'vav «y» con shevá · álef con tsere · tav', 've-ET'],
            ['הָאָרֶץ', 'artículo ha · álef con qamets · resh con segol · tsade final', 'ha-Á-rets'],
          ],
          nota: 'Delante de la álef, que no puede duplicarse, el artículo lleva qamets en lugar de pataj: הָאָרֶץ.'
        } }
      ],
      texto: [
        'Ha llegado el momento de leer un versículo entero. Empezamos por el primero de la Biblia, el que viste en la primera estación de este recurso. Sigue estos cinco pasos, y repítelos en cada versículo del taller.',
        { h: 'Cinco pasos para leer' },
        'Primero, ubica el comienzo: la palabra de la derecha. Segundo, identifica las consonantes de la palabra, una por una. Tercero, mira las vocales y los puntos de cada consonante. Cuarto, arma las sílabas y busca el acento, que casi siempre está al final. Quinto, lee la palabra entera en voz alta, y solo entonces pasa a la siguiente.',
        'La tabla del segundo panel hace este trabajo con las siete palabras de Génesis 1:1. Léela con calma, y después vuelve al primer panel e intenta leer el versículo completo. Cuando te salga, toca «Ocultar ayudas» y léelo de nuevo, solo con el hebreo.',
        { h: 'Lo que se ve en hebreo' },
        'El versículo tiene siete palabras, y muchos lectores han notado que el número siete marca todo el relato de la creación, que termina en el séptimo día. Pero hay algo más sencillo y más importante. El verbo בָּרָא, «crear», en la forma que usa este versículo tiene siempre a Dios como sujeto en toda la Biblia: solo Dios crea en este sentido. Y la palabra אֵת, que no se traduce, señala el complemento: los cielos y la tierra, es decir, todo lo que existe.',
        'Juan empezó su evangelio con las mismas palabras: «En el principio era el Verbo… Todas las cosas por él fueron hechas» (Jn 1:1-3). El Hijo de Dios estaba allí, en el principio, como Creador.',
        { ejercicio: {
          pregunta: '¿Cuál de estas palabras del versículo lleva el artículo «el», «la» o «los»?',
          opciones: [
            { t: 'בָּרָא', ok: false, por_que: 'Bará, «creó», es un verbo. No lleva artículo.' },
            { t: 'הַשָּׁמַיִם', ok: true, por_que: 'Empieza con הַ, el artículo, y por eso la shin lleva dagesh: hashamáyim, «los cielos».' },
            { t: 'אֱלֹהִים', ok: false, por_que: 'Elohim empieza con álef y jatef segol. Es un nombre sin artículo.' }
          ],
          explicacion: 'הַ + שָּׁמַיִם: «los cielos». Lo mismo en הָאָרֶץ, «la tierra», con qamets delante de la álef.'
        } },
        { ejercicio: {
          pregunta: '¿Cómo se lee la primera palabra, בְּרֵאשִׁית?',
          opciones: [
            { t: 'bereshit', ok: true, por_que: 'Bet con dagesh (b) y shevá que suena (e), resh con tsere (re), álef muda, shin con jireq (shi) y tav (t).' },
            { t: 'vreshit', ok: false, por_que: 'La bet tiene un punto dentro: suena b, no v. Y el shevá al comienzo de la palabra suena.' },
            { t: 'barashit', ok: false, por_que: 'Los dos puntos verticales bajo la bet son un shevá (e breve), y los dos horizontales bajo la resh, un tsere (e).' }
          ],
          explicacion: 'Be-re-SHIT: «en el principio».'
        } }
      ],
      pensar: 'La Biblia empieza con Dios, no con el ser humano: «En el principio creó Dios». ¿Qué cambia en tu manera de ver el mundo, y de verte a ti mismo, cuando empiezas por Dios?'
    },
    {
      id: 'shema', n: 'El Shemá: Deuteronomio 6:4-5', ref: 'Deuteronomio 6:4-5; Marcos 12:29-30',
      visual: [
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:4', ref: 'Deuteronomio 6:4', he: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד׃', tr: 'Shemá Yisrael, Adonái Eloheinu, Adonái ejad.',
          palabras: P(['שְׁמַע', 'יִשְׂרָאֵל', 'יְהוָה', 'אֱלֹהֵינוּ', 'יְהוָה', 'אֶחָד'], [['shemá', 'oye'], ['Yisrael', 'Israel'], ['Adonái', 'Jehová'], ['Eloheinu', 'nuestro Dios'], ['Adonái', 'Jehová'], ['ejad', 'uno']]),
          rv: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.' },
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:5', ref: 'Deuteronomio 6:5', he: 'וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל־לְבָבְךָ וּבְכָל־נַפְשְׁךָ וּבְכָל־מְאֹדֶךָ׃', tr: 'Veahavtá et Adonái Eloheja bejol-levavjá uvjol-nafshejá uvjol-meodeja.',
          palabras: P(['וְאָהַבְתָּ', 'אֵת', 'יְהוָה', 'אֱלֹהֶיךָ', 'בְּכָל־לְבָבְךָ', 'וּבְכָל־נַפְשְׁךָ', 'וּבְכָל־מְאֹדֶךָ'], [['veahavtá', 'y amarás'], ['et', '(marca del objeto)'], ['Adonái', 'a Jehová'], ['Eloheja', 'tu Dios'], ['bejol-levavjá', 'con todo tu corazón'], ['uvjol-nafshejá', 'y con toda tu alma'], ['uvjol-meodeja', 'y con todas tus fuerzas']]),
          rv: 'Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas.' }
      ],
      texto: [
        'El Shemá es la confesión de fe de Israel. Recibe su nombre de su primera palabra, שְׁמַע, «oye». Los israelitas piadosos lo recitaban por la mañana y por la noche, y cuando un escriba preguntó a Jesús cuál era el primer mandamiento, Él respondió citándolo: «Oye, Israel; el Señor nuestro Dios, el Señor uno es» (Mr 12:29).',
        { h: 'Lee el versículo 4' },
        'Son seis palabras. La primera, שְׁמַע, empieza con shevá, que suena, y la mem lleva pataj; la áyin final es muda: she-MÁ. La segunda es יִשְׂרָאֵל, con sin (punto a la izquierda): Yis-ra-EL. Después viene dos veces el nombre de Dios, que se lee Adonái, y entre ellos אֱלֹהֵינוּ, Eloheinu, «nuestro Dios»: la terminación -nu significa «nuestro». La última palabra es אֶחָד, ejad, «uno».',
        'Una curiosidad: en los rollos de la ley y en muchas Biblias hebreas impresas, la áyin de שְׁמַע y la dálet de אֶחָד se escriben más grandes que las demás. Juntas forman la palabra עֵד, «testigo». Además, una dálet grande evita confundirla con una resh, que convertiría «uno» en «otro» (אַחֵר).',
        { h: 'Un Dios uno' },
        'La palabra אֶחָד afirma que solo Jehová es Dios, frente a los muchos dioses de las naciones. La misma palabra se usa para el hombre y la mujer que llegan a ser «una sola carne» (Gn 2:24), una unidad que no excluye que sean dos personas. Por eso el Shemá no contradice lo que el Nuevo Testamento revela del Padre, el Hijo y el Espíritu Santo: un solo Dios.',
        { ir: { t: 'Ver «Dios es uno» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#conocer/4' } },
        { h: 'Lee el versículo 5' },
        'En la segunda pestaña está el mandamiento que sigue: amar a Dios con todo el corazón, el alma y las fuerzas. Fíjate en la repetición de כָל, «todo», unida con maqaf, y en los prefijos: וּ («y») y בְ («con»). La terminación -já de las tres palabras significa «tu».',
        { ejercicio: {
          pregunta: '¿Qué significa la terminación -nu en אֱלֹהֵינוּ, Eloheinu?',
          opciones: [
            { t: 'Nuestro: «nuestro Dios».', ok: true, por_que: 'Elohim + -nu = Eloheinu, «nuestro Dios». Israel confiesa a Dios como el Dios de su pacto.' },
            { t: 'Uno: «Dios uno».', ok: false, por_que: '«Uno» es la última palabra del versículo, אֶחָד, ejad.' },
            { t: 'Tu: «tu Dios».', ok: false, por_que: '«Tu Dios» es אֱלֹהֶיךָ, Eloheja, con la terminación -já, que aparece en el versículo 5.' }
          ],
          explicacion: '-nu: nuestro. -já: tu. Las terminaciones se estudian en el recurso de gramática.'
        } }
      ],
      pensar: 'Jesús llamó al Shemá el primer mandamiento. ¿Qué significa amar a Dios «con todo» tu corazón, tu alma y tus fuerzas en tu vida de esta semana?'
    },
    {
      id: 'bendicion', n: 'La bendición sacerdotal: Números 6:24-26', ref: 'Números 6:22-27',
      visual: [
        { tipo: 'hebreo', titulo: 'Versículo 24', ref: 'Números 6:24', he: 'יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ׃', tr: 'Yevarejejá Adonái veyishmereja.',
          palabras: P(['יְבָרֶכְךָ', 'יְהוָה', 'וְיִשְׁמְרֶךָ'], [['yevarejejá', 'te bendiga'], ['Adonái', 'Jehová'], ['veyishmereja', 'y te guarde']]),
          rv: 'Jehová te bendiga, y te guarde;' },
        { tipo: 'hebreo', titulo: 'Versículo 25', ref: 'Números 6:25', he: 'יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ׃', tr: 'Yaer Adonái panav eleja vijuneka.',
          palabras: P(['יָאֵר', 'יְהוָה', 'פָּנָיו', 'אֵלֶיךָ', 'וִיחֻנֶּךָּ'], [['yaer', 'haga resplandecer'], ['Adonái', 'Jehová'], ['panav', 'su rostro'], ['eleja', 'sobre ti'], ['vijuneka', 'y tenga de ti misericordia']]),
          rv: 'Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia;' },
        { tipo: 'hebreo', titulo: 'Versículo 26', ref: 'Números 6:26', he: 'יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם׃', tr: 'Yisá Adonái panav eleja veyasem lejá shalom.',
          palabras: P(['יִשָּׂא', 'יְהוָה', 'פָּנָיו', 'אֵלֶיךָ', 'וְיָשֵׂם', 'לְךָ', 'שָׁלוֹם'], [['yisá', 'alce'], ['Adonái', 'Jehová'], ['panav', 'su rostro'], ['eleja', 'sobre ti'], ['veyasem', 'y ponga'], ['lejá', 'en ti'], ['shalom', 'paz']]),
          rv: 'Jehová alce sobre ti su rostro, y ponga en ti paz.' },
        { tipo: 'imagen', titulo: 'Ketef Hinom', src: 'img/ketef-hinom.jpg', alt: 'Los dos pequeños amuletos de plata de Ketef Hinom, con letras hebreas antiguas grabadas, en su vitrina del Museo de Israel', pie: 'Amuletos de plata de Ketef Hinom (hacia el 600 a.C., Museo de Israel) con la bendición sacerdotal: el texto bíblico más antiguo que se conoce.', origen: 'foto', licencia: 'Bachrach44, CC BY-SA 3.0, Wikimedia Commons', completa: true }
      ],
      texto: [
        'Dios mismo dio a Aarón y a sus hijos las palabras con que debían bendecir a Israel, y añadió: «Y pondrán mi nombre sobre los hijos de Israel, y yo los bendeciré» (Nm 6:27). Es una de las oraciones más antiguas que se siguen pronunciando hoy, en sinagogas e iglesias de todo el mundo.',
        { h: 'Una bendición que crece' },
        'En hebreo, la bendición tiene tres líneas, una por pestaña, y cada una es más larga que la anterior: tres palabras, cinco y siete. Las tres nombran a Jehová, y en las tres Él es el que actúa. La bendición se abre como una flor: Dios bendice y guarda, Dios hace brillar su rostro y tiene misericordia, Dios vuelve su rostro hacia su pueblo y le da paz.',
        { h: 'Lee cada línea' },
        'En la primera línea ya practicaste el shevá. En יְבָרֶכְךָ (yevarejejá), el primero suena y el del medio calla. En la segunda, fíjate en פָּנָיו, panav, «su rostro»: la yod antes de la vav final no suena, y la terminación -av significa «su». La última palabra, וִיחֻנֶּךָּ, vijuneka, tiene una nun doble y una kaf con dagesh: «y tenga de ti misericordia». En la tercera, distingue la sin de יִשָּׂא (yisá, «alce») de la shin de שָׁלוֹם.',
        { h: 'La bendición en plata' },
        'En 1979, en unas tumbas excavadas en la roca en Ketef Hinom, frente a las murallas de Jerusalén, los arqueólogos encontraron dos pequeños amuletos de plata enrollados, de alrededor del año 600 a.C. Al desenrollarlos, se leyó en ellos esta bendición, en escritura paleohebrea. Son el texto bíblico más antiguo que se conoce, varios siglos anteriores a los rollos del mar Muerto.',
        'Lee las tres líneas seguidas, primero con ayudas y después sin ellas. Luego léelas en voz alta como una oración por alguien de tu familia o de tu iglesia.',
        { ejercicio: {
          pregunta: '¿Qué significa la terminación -av en פָּנָיו (panav)?',
          opciones: [
            { t: 'Su: «su rostro».', ok: true, por_que: 'Panim, «rostro», con la terminación -av: «su rostro». La yod no suena.' },
            { t: 'Tu: «tu rostro».', ok: false, por_que: 'La terminación de «tu» es -já, como en lejá y eleja.' },
            { t: 'Es parte de la palabra y no significa nada aparte.', ok: false, por_que: 'La palabra para «rostro» es פָּנִים, panim. La terminación cambia el sentido.' }
          ],
          explicacion: 'Panav: «su rostro». Dios vuelve su rostro hacia su pueblo.'
        } }
      ],
      pensar: 'Dios mandó a los sacerdotes poner su nombre sobre el pueblo con una bendición. En Cristo, todos los creyentes son real sacerdocio (1 P 2:9). ¿A quién podrías bendecir esta semana con estas mismas palabras?'
    },
    {
      id: 'salmo-23', n: 'El buen pastor: Salmo 23:1-2', ref: 'Salmo 23:1-2; Juan 10:11',
      visual: [
        { tipo: 'hebreo', titulo: 'Versículo 1', ref: 'Salmo 23:1', he: 'מִזְמוֹר לְדָוִד יְהוָה רֹעִי לֹא אֶחְסָר׃', tr: 'Mizmor ledavid. Adonái roí, lo ejsar.',
          palabras: P(['מִזְמוֹר', 'לְדָוִד', 'יְהוָה', 'רֹעִי', 'לֹא', 'אֶחְסָר'], [['mizmor', 'salmo'], ['ledavid', 'de David'], ['Adonái', 'Jehová'], ['roí', 'mi pastor'], ['lo', 'no'], ['ejsar', 'me faltará']]),
          rv: 'Jehová es mi pastor; nada me faltará.' },
        { tipo: 'hebreo', titulo: 'Versículo 2', ref: 'Salmo 23:2', he: 'בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי׃', tr: 'Binot déshe yarbitseni, al-mé menujot yenahaleni.',
          palabras: P(['בִּנְאוֹת', 'דֶּשֶׁא', 'יַרְבִּיצֵנִי', 'עַל־מֵי', 'מְנֻחוֹת', 'יְנַהֲלֵנִי'], [['binot', 'en praderas de'], ['déshe', 'hierba tierna'], ['yarbitseni', 'me hace descansar'], ['al-mé', 'junto a aguas de'], ['menujot', 'reposo'], ['yenahaleni', 'me pastoreará']]),
          rv: 'En lugares de delicados pastos me hará descansar; Junto a aguas de reposo me pastoreará.' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../tierra-de-israel/img/pastor.webp', alt: 'Un pastor guía su rebaño por una ladera de Judea', pie: 'El pastor guía a sus ovejas hacia el pasto y el agua.', origen: 'ia' }
      ],
      texto: [
        'Ya leíste el primer versículo del Salmo 23 en la estación de las vocales i, o, u. Ahora léelo sin ayudas, de corrido, y después avanza al versículo 2, que es nuevo.',
        { h: 'El versículo 1' },
        'En hebreo, el título forma parte del primer versículo: מִזְמוֹר לְדָוִד, «Salmo de David». La Reina-Valera lo pone como encabezado, por eso tu Biblia empieza el versículo con «Jehová es mi pastor». Después vienen cuatro palabras: el nombre de Dios, רֹעִי (roí, «mi pastor»), לֹא (lo, «no») y אֶחְסָר (ejsar, «me faltará»). La terminación -í de roí significa «mi».',
        { h: 'El versículo 2' },
        'El segundo versículo tiene palabras más largas, ideales para practicar las sílabas. יַרְבִּיצֵנִי se lee yar-bi-TSE-ni: la terminación -ni significa «me». La misma terminación aparece en la última palabra, יְנַהֲלֵנִי, ye-na-ha-LE-ni, con un jatef pataj bajo la he. Y fíjate en עַל־מֵי, al-mé, dos palabras unidas por maqaf que se leen como una sola.',
        'La palabra מְנֻחוֹת, menujot, significa «reposo» o «descanso». Las «aguas de reposo» no son aguas quietas por casualidad: el pastor busca para sus ovejas un lugar donde puedan beber tranquilas.',
        'Lee ahora los dos versículos seguidos, primero con ayudas y luego sin ellas. Si te trabas en una palabra, divídela en sílabas, léela despacio y vuelve a empezar la línea completa.',
        { h: 'El pastor del salmo' },
        'Jesús tomó esta imagen para sí: «Yo soy el buen pastor; el buen pastor su vida da por las ovejas» (Jn 10:11). Al leer el salmo en hebreo, recuerda que el que lo pronuncia es David, el pastor que llegó a ser rey, y que el Pastor de David vino a buscarnos en persona.',
        { ejercicio: {
          pregunta: 'En רֹעִי (roí, «mi pastor») e יַרְבִּיצֵנִי (yarbitseni, «me hace descansar»), ¿qué indican las terminaciones -í y -ni?',
          opciones: [
            { t: 'Que las palabras están en plural.', ok: false, por_que: 'El plural masculino termina en -im. Estas terminaciones se refieren a la persona que habla.' },
            { t: 'La primera persona: «mi» y «me».', ok: true, por_que: '-í se une a los nombres («mi pastor») y -ni a los verbos («me hace descansar»). El salmo es una confesión personal.' },
            { t: 'Que son nombres propios.', ok: false, por_que: 'Roí y yarbitseni no son nombres: son un sustantivo y un verbo con terminaciones de persona.' }
          ],
          explicacion: 'El Salmo 23 está lleno de «mi» y «me»: David no habla del pastor de otros, sino del suyo.'
        } }
      ],
      pensar: 'David no dice «Jehová es un pastor», sino «mi pastor». ¿Puedes decirlo tú con la misma confianza personal? ¿En qué área de tu vida necesitas dejarte guiar a «aguas de reposo»?'
    },
    {
      id: 'emanuel', n: 'Emanuel: Isaías 7:14', ref: 'Isaías 7:14; Mateo 1:22-23',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 7:14', ref: 'Isaías 7:14', he: 'לָכֵן יִתֵּן אֲדֹנָי הוּא לָכֶם אוֹת הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן וְקָרָאת שְׁמוֹ עִמָּנוּ אֵל׃', tr: 'Lajén yitén Adonái hu lajem ot: hiné haalmá hará veyolédet ben, vekarat shemó Imanu El.',
          palabras: P(['לָכֵן', 'יִתֵּן', 'אֲדֹנָי', 'הוּא', 'לָכֶם', 'אוֹת', 'הִנֵּה', 'הָעַלְמָה', 'הָרָה', 'וְיֹלֶדֶת', 'בֵּן', 'וְקָרָאת', 'שְׁמוֹ', 'עִמָּנוּ', 'אֵל'], [['lajén', 'por tanto'], ['yitén', 'dará'], ['Adonái', 'el Señor'], ['hu', 'él mismo'], ['lajem', 'os'], ['ot', 'señal'], ['hiné', 'he aquí'], ['haalmá', 'la virgen'], ['hará', 'concebirá'], ['veyolédet', 'y dará a luz'], ['ben', 'un hijo'], ['vekarat', 'y llamará'], ['shemó', 'su nombre'], ['imanu', 'con nosotros'], ['El', 'Dios']]),
          rv: 'Por tanto, el Señor mismo os dará señal: He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel.' },
        { tipo: 'cita', titulo: 'Mateo 1:23', texto: 'He aquí, una virgen concebirá y dará a luz un hijo, Y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.', ref: 'Mateo 1:23' }
      ],
      texto: [
        'Este versículo es más largo: quince palabras. Es un buen ejercicio final, porque reúne casi todo lo que aprendiste. Tómalo con calma: lee primero cada palabra por separado, en la lista del panel, y después el versículo completo.',
        { h: 'Dos palabras para «Señor»' },
        'Fíjate en la tercera palabra: אֲדֹנָי. Aquí no está el nombre de cuatro letras, sino la palabra Adonái, «Señor», escrita con sus propias consonantes. Por eso la Reina-Valera dice «el Señor» y no «Jehová». Al leer en voz alta suenan igual, pero en el texto son distintas, y ahora puedes verlo.',
        { h: 'Palabras para practicar' },
        'הָעַלְמָה, haalmá, lleva el artículo ha y una áyin muda con pataj: ha-al-MÁ. וְיֹלֶדֶת, veyolédet, tiene dos segol seguidos y se acentúa en la penúltima sílaba: ve-yo-LÉ-det. Y וְקָרָאת, vekarat, «y llamará», tiene una álef que no suena antes de la tav final.',
        'Las dos últimas palabras ya las conoces: עִמָּנוּ אֵל, imanu El. La mem de imanu lleva dagesh fuerte: en la pronunciación antigua era una m doble, im-ma-nu. La terminación -nu es «nosotros», como en Eloheinu.',
        'Cuando puedas leer el versículo completo con ayudas, ocúltalas y léelo de nuevo. Es el más largo del taller: si lo logras, ya puedes enfrentar casi cualquier versículo del Antiguo Testamento.',
        { h: 'La virgen y el Hijo' },
        'La palabra עַלְמָה, almá, designa a una joven en edad de casarse, que en la sociedad de Israel se entendía soltera y virgen. Los traductores judíos de la Septuaginta, siglos antes de Cristo, la tradujeron con la palabra griega que significa «virgen», y Mateo, guiado por el Espíritu Santo, enseña que la señal se cumplió plenamente en el nacimiento virginal de Jesús (Mt 1:22-23). La Reina-Valera traduce «virgen», siguiendo esa interpretación del propio Nuevo Testamento.',
        { ejercicio: {
          pregunta: '¿Por qué la Reina-Valera traduce «el Señor» y no «Jehová» al comienzo de Isaías 7:14?',
          opciones: [
            { t: 'Porque el texto hebreo dice אֲדֹנָי, Adonái, y no el nombre de cuatro letras.', ok: true, por_que: 'Son palabras distintas en el texto, aunque se lean igual en voz alta. La Reina-Valera reserva «Jehová» para יהוה.' },
            { t: 'Porque en Isaías el nombre de Dios no aparece nunca.', ok: false, por_que: 'El nombre de Dios aparece cientos de veces en Isaías. En este versículo, la palabra es Adonái.' },
            { t: 'Por un error de los traductores.', ok: false, por_que: 'No es un error: la traducción sigue con precisión la palabra que está en el texto hebreo.' }
          ],
          explicacion: 'יהוה → Jehová; אֲדֹנָי → Señor. Saber leer hebreo permite ver la diferencia.'
        } }
      ],
      pensar: 'Emanuel significa «Dios con nosotros». ¿En qué situación de tu vida necesitas recordar hoy que Dios está contigo en Cristo?'
    },
    {
      id: 'seguir', n: 'Cómo seguir aprendiendo', ref: 'Salmo 119:18; 2 Timoteo 2:15',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 119:18', ref: 'Salmo 119:18', he: 'גַּל־עֵינַי וְאַבִּיטָה נִפְלָאוֹת מִתּוֹרָתֶךָ׃', tr: 'Gal-enái veabita niflaot mitorateja.',
          palabras: P(['גַּל־עֵינַי', 'וְאַבִּיטָה', 'נִפְלָאוֹת', 'מִתּוֹרָתֶךָ'], [['gal-enái', 'abre mis ojos'], ['veabita', 'y miraré'], ['niflaot', 'maravillas'], ['mitorateja', 'de tu ley']]),
          rv: 'Abre mis ojos, y miraré Las maravillas de tu ley.' },
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Herramientas para seguir',
          cab: ['Herramienta', 'Para qué sirve'],
          filas: [
            ['La tabla del alfabeto de este recurso', 'Repasar las letras y las vocales, y practicar el reconocimiento'],
            ['Vocabulario y gramática básica del hebreo bíblico', 'Recurso siguiente del sitio: las 751 palabras más frecuentes, el sustantivo y el verbo'],
            ['Interlineal hebreo–español', 'Recurso del sitio: los 39 libros del Antiguo Testamento palabra por palabra, con su glosa en español'],
            ['Concordancia con números de Strong', 'Encontrar todas las veces que aparece una palabra hebrea'],
            ['Una Biblia hebrea impresa o digital', 'Leer cualquier pasaje en el texto masorético'],
          ],
          nota: 'El orden importa: primero leer con soltura, después vocabulario y gramática, y luego el interlineal.'
        } }
      ],
      texto: [
        'Si llegaste hasta aquí, ya puedes leer hebreo bíblico. Despacio, con ayudas y equivocándote, pero puedes. Lo que sigue es práctica.',
        { h: 'Un hábito de diez minutos' },
        'La lectura se afianza con repetición breve y frecuente. Te sugerimos tres ejercicios. Repasa el alfabeto en el modo de práctica de la tabla hasta reconocer cada letra sin dudar. Vuelve a leer en voz alta los versículos del taller, sin ayudas, hasta que salgan de corrido. Y lee cada día un versículo nuevo de un pasaje que conozcas bien en español: el Salmo 23 completo, los primeros versículos de Génesis o el Salmo 119, estrofa por estrofa.',
        { ir: { t: 'Abrir la tabla del alfabeto hebreo', a: 'alfabeto/' } },
        { h: 'Lo que viene' },
        'Saber leer es el primer paso. El recurso Vocabulario y gramática básica del hebreo bíblico te enseña las palabras más frecuentes, cómo se forman los verbos y qué significan las terminaciones que viste en el taller. Después, el Interlineal hebreo–español te permite leer cualquier pasaje del Antiguo Testamento con la glosa de cada palabra.',
        { ir: { t: 'Seguir con Vocabulario y gramática básica del hebreo bíblico', a: '../../gramatica-hebrea/' } },
        { ir: { t: 'Abrir el Interlineal hebreo–español', a: '../../interlineal-hebreo/' } },
        'Mientras tanto, una concordancia con los números de Strong es muy útil: a cada palabra hebrea le asigna un número, y con él puedes encontrar todos los pasajes donde aparece, aunque la traducción la vierta de maneras distintas.',
        { h: 'Con humildad y con oración' },
        'Conocer algo de hebreo es una herramienta valiosa, pero no te convierte en experto. Desconfía de las enseñanzas que dicen que «en el hebreo original» la Biblia dice algo muy distinto de lo que dicen todas las traducciones. Usa lo que aprendiste para leer con más atención, para comparar traducciones con respeto y para escuchar mejor a quienes estudiaron más.',
        'Sobre todo, recuerda para qué estudias. El salmista no pidió aprender hebreo, que era su lengua, sino que Dios le abriera los ojos: «Abre mis ojos, y miraré las maravillas de tu ley» (Sal 119:18). Es la última lectura de este recurso: léela en hebreo, y hazla tu oración.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad» (2 Ti 2:15). ¿Qué paso concreto vas a dar este mes para seguir creciendo en el estudio de la Palabra?'
    }
  ];

  const A = window.__ALEF;
  delete window.__ALEF;
  window.RUTA_DATA = {
    titulo: 'El alfabeto hebreo y la lectura',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'El alfabeto hebreo', n: 'I. Panorama', info: 'La lengua del Antiguo Testamento, su escritura y cómo se lee', estaciones: A.panorama },
      { id: 'letras', grupo: 'El alfabeto hebreo', n: 'II. Las 22 letras', info: 'Forma, nombre, sonido y valor de cada letra, las finales y los acrósticos', estaciones: A.letras },
      { id: 'vocales', grupo: 'El alfabeto hebreo', n: 'III. Las vocales', info: 'Los puntos de los masoretas, el shevá y el dagesh', estaciones: A.vocales },
      { id: 'leer', grupo: 'El alfabeto hebreo', n: 'IV. A leer', info: 'Sílabas, nombres, palabras conocidas, el nombre de Dios, signos y prefijos', estaciones: A.leer },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes famosos, palabra por palabra', estaciones: taller }
    ]
  };
})();
