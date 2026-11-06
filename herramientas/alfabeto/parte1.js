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
        { tipo: 'hebreo', titulo: 'Génesis 1:1', ref: 'Génesis 1:1', he: '@@wlc:gn/1/1', tr: 'Bereshit bará Elohim et hashamáyim veet haárets.',
          palabras: P('@@wlcp:gn/1/1', [['bereshit', 'en el principio'], ['bará', 'creó'], ['Elohim', 'Dios'], ['et', '(marca del objeto)'], ['hashamáyim', 'los cielos'], ['veet', 'y (marca del objeto)'], ['haárets', 'la tierra']]),
          rv: '@@gn/1/1' },
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
        { tipo: 'hebreo', titulo: 'Jeremías 10:11', ref: 'Jeremías 10:11', he: '@@wlc:jer/10/11', rv: '@@jer/10/11' }
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
        { tipo: 'hebreo', titulo: 'Salmo 119:105', ref: 'Salmo 119:105', he: '@@wlc:sal/119/105', tr: 'Ner leraglí devareja veor lintivatí.',
          palabras: P('@@wlcp:sal/119/105', [['ner-leraglí', 'lámpara para mi pie'], ['devareja', 'tu palabra'], ['veor', 'y luz'], ['lintivatí', 'para mi camino']]),
          rv: '@@sal/119/105' },
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
