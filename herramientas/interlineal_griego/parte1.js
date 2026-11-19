/* ==========================================================
   Recursos Bíblicos — Interlineal griego–español (NT) · contenido de las rutas (parte 1: rutas I y II)
   FUENTE de public/apps/interlineal-griego/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/interlineal_griego_citas.py
   Marcas (dos arrobas y luego): libro/cap/vv (RV 1960), n1904:libro/cap/vv (griego de Nestle 1904),
   intg:libro/cap/v (palabras con transliteración y glosa del interlineal), intgtr:libro/cap/v
   (transliteración del versículo). Pronunciación y transliteración: las de El alfabeto griego.
   ========================================================== */
(() => {
  const V = (r, titulo) => ({ tipo: 'griego', titulo: titulo || r.ref + ' en el interlineal', ref: r.ref, gr: r.gr, tr: r.tr, palabras: r.p, rv: r.rv });
  // R('jn', 1, 1, 'Juan 1:1') → versículo del interlineal: el script lo convierte en { ref, gr, tr, p, rv } con las marcas
  const R = r => r;
  window.__INTG = { V, R };

  const queEs = [
    {
      id: 'puente', n: 'Un puente entre dos lenguas', ref: 'Hechos 8:30',
      visual: [ V(R('hch', 8, 30, 'Hechos 8:30')) ],
      texto: [
        'Un interlineal es el texto bíblico en su lengua original con una ayuda debajo de cada palabra. En este recurso, esa lengua es el griego del Nuevo Testamento, y debajo de cada palabra griega van su pronunciación y una glosa en español: el sentido básico de esa palabra. El nombre viene de ahí: la ayuda va «entre las líneas» del texto.',
        'Mira el panel. Es Hechos 8:30, el momento en que Felipe oye al etíope leer en voz alta al profeta Isaías y le pregunta si entiende lo que lee. Arriba está el griego; en la lista, cada palabra con su transliteración y su glosa; abajo, la Reina-Valera 1960. En griego la pregunta tiene un juego de palabras que la traducción no puede conservar: γινώσκεις, «conoces», y ἀναγινώσκεις, «lees», son el mismo verbo con un prefijo. Es como si Felipe dijera: «¿Conoces lo que re-conoces?». Ese tipo de detalle es el que un interlineal deja ver.',
        { h: 'Para qué sirve' },
        'El interlineal sirve para ver con tus propios ojos qué palabra griega está detrás de una palabra de tu Biblia; para notar que una misma palabra se traduce de varias maneras; para reconocer las palabras que ya aprendiste en el vocabulario, y para seguir un comentario que cita el griego. Es una herramienta para mirar el texto de cerca.',
        { h: 'Para qué no sirve' },
        'El interlineal no reemplaza a una traducción. Leer las glosas una tras otra no da el sentido del versículo, porque el griego y el español ordenan las palabras de otra manera, y el griego expresa con terminaciones lo que el español dice con preposiciones y artículos. En este recurso vas a aprender a leer la línea de glosas, a evitar los errores más comunes y a volver siempre a la traducción con más entendimiento, no con menos confianza.',
        'El etíope respondió: «¿Y cómo podré, si alguno no me enseñare?» (Hch 8:31). El interlineal no ocupa el lugar del maestro ni del Espíritu que ilumina la Palabra; es una ayuda más para entender lo que lees.',
        { ir: { t: 'Abrir el interlineal en Hechos 8:30', a: 'interlineal/#hch/8/30', marco: true } }
      ],
      pensar: 'El etíope tenía el texto en sus manos, pero necesitó que alguien le abriera su sentido, y esa conversación terminó en su bautismo (Hch 8:35-38). ¿Quién te ayudó a entender la Escritura por primera vez, y a quién podrías ayudar tú?'
    },
    {
      id: 'como-esta-hecho', n: 'Cómo está hecho este interlineal', ref: 'Lucas 1:3-4',
      visual: [
        { tipo: 'tabla', titulo: 'Las capas de cada palabra', tabla: {
          titulo: 'Lo que ves debajo de cada palabra griega',
          cab: ['Capa', 'De dónde viene', 'Qué te dice'],
          filas: [
            ['El griego', 'Nuevo Testamento de Eberhard Nestle (1904), en la edición digital de biblicalhumanities.org', 'Las palabras, los acentos y la puntuación de una edición crítica cercana a las actuales'],
            ['La transliteración', 'Calculada con las reglas de El alfabeto griego', 'Cómo se pronuncia, con la pronunciación erasmiana'],
            ['La glosa', 'Escrita para este sitio, una por cada una de las 5.401 palabras de diccionario', 'El sentido básico de la palabra, con su número, el artículo y el «de» o «a» de su caso'],
            ['La morfología', 'El análisis de Nestle 1904 (Ulrik Sandborg-Petersen, de uso libre)', 'Qué clase de palabra es y qué forma tiene'],
            ['La ficha', 'La morfología, el léxico de Strong y las frecuencias del texto', 'La forma explicada, el lema y cuántas veces aparece']
          ],
          nota: 'Son 137.779 palabras griegas en los 27 libros. La Reina-Valera va debajo de cada versículo.'
        } }
      ],
      texto: [
        'Lucas cuenta que antes de escribir su evangelio investigó todo con diligencia, para que Teófilo conociera bien la verdad (Lc 1:3-4). Antes de usar una herramienta conviene hacer algo parecido: saber cómo está hecha. Este interlineal tiene cinco capas, y cada una viene de una fuente distinta.',
        { h: 'El texto griego' },
        'El griego es el de la edición de Eberhard Nestle publicada en 1904, de dominio público. Es una edición crítica: compara los manuscritos y elige en cada lugar la lectura que considera más antigua. Está muy cerca de las ediciones que usan hoy los traductores, y es la que el sitio ya usa en El alfabeto griego y en el vocabulario. La Reina-Valera, en cambio, se tradujo del llamado Textus Receptus, el texto griego impreso en el siglo XVI. Por eso, en unos pocos lugares, el griego del interlineal y la Reina-Valera no dicen exactamente lo mismo; la página lo avisa con una nota, y la ruta IV lo explica.',
        { ir: { t: 'Ver «El Textus Receptus y el texto crítico» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/6' } },
        { h: 'La glosa' },
        'La glosa en español se escribió para este sitio: una por cada palabra de diccionario, a partir del léxico de Strong, con las 1.124 palabras del vocabulario como base. Después, la página arma la glosa de cada palabra con su forma: pone el sustantivo en plural cuando el griego lo está, da al artículo el género del sustantivo español y agrega «de» o «a» según el caso. Los verbos quedan en infinitivo («amar», «creer»), y la forma verbal se lee en la fila de morfología y en la ficha.',
        'Esta decisión tiene una ventaja: la glosa es coherente en todo el Nuevo Testamento, y puedes comprobar que la misma palabra griega lleva siempre la misma glosa. También tiene un límite: una palabra con varios sentidos muestra solo el básico. Lo que dice en cada versículo lo dice el contexto, y eso lo verás en la ruta III.',
        { ejercicio: {
          pregunta: 'Debajo de ἠγάπησεν en Juan 3:16 dice «amar», y no «amó». ¿Por qué?',
          opciones: [
            { t: 'Porque el interlineal da la glosa del lema, y los verbos quedan en infinitivo.', ok: true, por_que: 'La forma («aoristo, activa, indicativo, 3.ª persona singular») está en la fila de morfología y en la ficha.' },
            { t: 'Porque en griego ese verbo está en infinitivo.', ok: false, por_que: 'No. ἠγάπησεν es un aoristo de indicativo: «amó». El infinitivo es solo la forma de citar la glosa.' },
            { t: 'Porque el griego no distingue el pasado del presente.', ok: false, por_que: 'El griego sí distingue tiempos y aspectos; los verás en la ruta II.' }
          ],
          explicacion: 'Glosa por lema: el sentido básico de la palabra de diccionario. La forma concreta se lee en la morfología.'
        } }
      ],
      pensar: 'Lucas escribió «para que conozcas bien la verdad de las cosas en las cuales has sido instruido» (Lc 1:4). ¿Qué te dice el cuidado con que se escribió y se copió el Nuevo Testamento acerca de la confianza que puedes tener en él?'
    },
    {
      id: 'traducciones', n: 'Interlineal, traducción literal y traducción dinámica', ref: 'Juan 3:16',
      visual: [
        V(R('jn', 3, 16, 'Juan 3:16')),
        { tipo: 'tabla', titulo: 'Tres maneras de pasar al español', tabla: {
          titulo: 'El comienzo de Juan 3:16, de lo más literal a lo más libre',
          cab: ['Tipo', 'Cómo se lee', 'Qué gana y qué pierde'],
          filas: [
            ['Glosas del interlineal', 'así · porque · amar · el · Dios · el · mundo', 'Muestra cada palabra; no es español'],
            ['Traducción por equivalencia formal', 'Porque de tal manera amó Dios al mundo…', 'Sigue de cerca las palabras, en buen español'],
            ['Paráfrasis', 'Dios quiso tanto a la gente de este mundo…', 'Fácil de leer; se aleja de las palabras del texto']
          ],
          nota: 'La segunda fila es la Reina-Valera 1960. La tercera es un ejemplo hecho para esta estación.'
        } }
      ],
      texto: [
        'Entre el griego y tu Biblia hay un trabajo de traducción, y no todas las traducciones lo hacen igual. Conviene ubicar al interlineal en ese mapa.',
        { h: 'Del más literal al más libre' },
        'En un extremo está el interlineal: una glosa debajo de cada palabra, en el orden del griego. Es lo más cercano al texto, pero no se puede leer como español. Después vienen las traducciones por equivalencia formal, que siguen de cerca las palabras del original y las ponen en buen español; la Reina-Valera pertenece a esta familia. Más allá están las traducciones por equivalencia dinámica, que buscan decir el mismo sentido con las palabras que usaría hoy un lector, y en el otro extremo las paráfrasis, que explican con libertad.',
        'Mira la tabla del panel. Juan 3:16 empieza con οὕτως γάρ, «así, porque». La Reina-Valera ordena las dos palabras y las une en «porque de tal manera». También cambia el orden del verbo y el sujeto, y dice «al mundo» donde el griego dice «el mundo» en acusativo, porque en español el complemento de persona o de algo personificado lleva «a». Nada de eso es infidelidad: es pasar de una lengua a otra.',
        { h: 'Cada una sirve para algo' },
        'Para estudiar a fondo conviene una traducción formal, como la Reina-Valera; para leer de corrido, una más dinámica puede ayudar; y para ver qué hay detrás de una palabra, el interlineal. Ninguna reemplaza a las otras. Usar el interlineal no significa desconfiar de la traducción: significa conocer mejor por qué tradujo lo que tradujo.',
        { ejercicio: {
          pregunta: 'En Juan 3:16, οὕτως significa «así, de esta manera». ¿Qué conserva la Reina-Valera de esa palabra?',
          opciones: [
            { t: '«De tal manera»: el modo en que Dios amó, que el versículo explica enseguida (dio a su Hijo).', ok: true, por_que: 'Οὕτως apunta a la manera; la Reina-Valera la conserva y la deja en primer lugar.' },
            { t: 'Nada: la Reina-Valera la omite.', ok: false, por_que: 'No la omite: la traduce con «de tal manera».' },
            { t: '«Porque».', ok: false, por_que: '«Porque» traduce γάρ, la segunda palabra del versículo.' }
          ],
          explicacion: 'Una buena traducción reparte el sentido de cada palabra griega entre las palabras españolas que lo necesitan.'
        } },
        { ir: { t: 'Abrir Juan 3 en el interlineal', a: 'interlineal/#jn/3/16', marco: true } }
      ],
      pensar: 'La Reina-Valera es el fruto del trabajo de muchas personas que estudiaron el griego para que tú pudieras leer la Biblia en tu lengua. ¿Cómo puede el interlineal ayudarte a valorar mejor tu traducción?'
    },
    {
      id: 'limites', n: 'Lo que un interlineal no puede hacer', ref: 'Juan 1:14',
      visual: [ V(R('jn', 1, 14, 'Juan 1:14')) ],
      texto: [
        'Un interlineal es honesto con las palabras, pero tiene límites que conviene conocer antes de empezar.',
        { h: 'No da el tiempo del verbo' },
        'En este interlineal, los verbos van en infinitivo. Debajo de ἐγένετο dice «llegar a ser», y la Reina-Valera traduce «fue hecho». Que un verbo se diga «fue», «era», «ha sido» o «llegó a ser» depende de su forma y del contexto. Esa decisión la toma el traductor mirando la frase completa, no la palabra sola.',
        { h: 'No da los giros ni la riqueza de una palabra' },
        'Debajo de ἐσκήνωσεν dice «habitar». Es correcto, pero el verbo viene de σκηνή, «la tienda», y un lector judío pensaba en el tabernáculo, donde Dios habitaba en medio de Israel. Juan dice que el Verbo «puso su tienda» entre nosotros. La glosa no puede contar eso: lo cuenta el estudio de la palabra y de su uso en la Biblia.',
        { h: 'No elige el sentido' },
        'Mira παρὰ Πατρός: la glosa de παρά con genitivo es «de parte de», y la Reina-Valera dice «del Padre». Las preposiciones griegas tienen varios sentidos según el caso que las sigue, y la página elige el más común para ese caso. En cada versículo, el sentido exacto lo da el contexto.',
        { h: 'No da el orden del español' },
        'El griego puede poner las palabras en un orden que en español sería extraño, porque las terminaciones dicen quién hace qué. En Juan 1:14, σάρξ, «carne», va antes del verbo para darle énfasis. La glosa se queda debajo de cada palabra y no puede reordenar.',
        { ejercicio: {
          pregunta: 'Debajo de ἐγένετο dice «llegar a ser», pero la Reina-Valera traduce «fue hecho». ¿Cuál es la conclusión correcta?',
          opciones: [
            { t: 'La traducción eligió la expresión según la forma del verbo y el contexto.', ok: true, por_que: 'El infinitivo es solo la glosa del lema; el tiempo y el giro en español son una decisión de traducción.' },
            { t: 'La Reina-Valera cambió el texto griego.', ok: false, por_que: 'No lo cambió: tradujo una forma verbal que la glosa no muestra.' },
            { t: 'Habría que leer «el Verbo llegar a ser carne».', ok: false, por_que: 'Eso no es español; es la palabra de diccionario.' }
          ],
          explicacion: 'Lo que la glosa no muestra (tiempo, orden, giros, sentido en contexto) lo resuelve la traducción. Por eso el interlineal se usa junto a ella.'
        } }
      ],
      pensar: '«Aquel Verbo fue hecho carne, y habitó entre nosotros» (Jn 1:14). Dios no se quedó lejos: puso su tienda en medio de los hombres. ¿Qué significa para ti que Cristo haya venido a vivir entre nosotros?'
    },
    {
      id: 'usar', n: 'Cómo usar la página del interlineal', ref: 'Mateo 5:3',
      visual: [
        V(R('mt', 5, 3, 'Mateo 5:3')),
        { tipo: 'tabla', titulo: 'Los controles', tabla: {
          titulo: 'Qué hace cada control de la página',
          cab: ['Control', 'Para qué sirve'],
          filas: [
            ['‹ Libro · Capítulo ›', 'Ir a cualquier capítulo de los 27 libros, o al anterior y al siguiente'],
            ['Transliteración', 'Mostrar u ocultar la pronunciación debajo de cada palabra'],
            ['Glosa', 'Mostrar u ocultar el sentido básico en español'],
            ['Morfología', 'Mostrar la forma de cada palabra en abreviaturas'],
            ['Texto en español', 'Mostrar u ocultar la Reina-Valera debajo del versículo, y elegir la versión'],
            ['Tocar una palabra', 'Abrir su ficha: forma explicada, lema, número de Strong y frecuencia'],
            ['Número del versículo', 'Enlace propio del versículo, para compartirlo']
          ],
          nota: 'La versión elegida es la misma del resto del sitio y se recuerda en este dispositivo.'
        } }
      ],
      texto: [
        'La página del interlineal se abre desde la ficha del recurso. Arriba están los controles; debajo, el capítulo, versículo por versículo.',
        { h: 'Leer un versículo' },
        'Cada palabra griega se ve como una pequeña columna: arriba el griego, debajo la transliteración en cursiva y, más abajo, la glosa. Debajo de todo el versículo va el texto en español. Si una palabra te llama la atención, tócala: se abre su ficha, con la forma explicada (por ejemplo, «sustantivo, dativo singular neutro»), la palabra de diccionario, su número de Strong y cuántas veces aparece en el Nuevo Testamento. Si está entre las 1.124 palabras del vocabulario, la ficha lo dice y te lleva a estudiarla.',
        { h: 'Practicar' },
        'Las casillas permiten ocultar ayudas. Para practicar la lectura, oculta la glosa y la transliteración y lee el griego en voz alta; después vuelve a mostrarlas para comprobar. Para estudiar gramática, activa la morfología.',
        { h: 'Compartir un versículo' },
        'El número de cada versículo es un enlace. Al agregar al enlace de la página el libro, el capítulo y el versículo, por ejemplo #mt/5/3, el interlineal abre Mateo 5:3 y lo destaca. Así puedes enviar un versículo a tu grupo de estudio.',
        'Mira el panel: es la primera bienaventuranza. Fíjate en τῷ πνεύματι, glosado «al espíritu». Es un dativo, y la Reina-Valera lo traduce «en espíritu»: el dativo dice aquí en qué sentido son pobres. La glosa marca el caso; la traducción decide la preposición española.',
        { ejercicio: {
          pregunta: 'Quieres ver si una palabra de tu versículo está en el vocabulario de 1.124 palabras. ¿Qué haces?',
          opciones: [
            { t: 'Tocas la palabra: la ficha dice si está en el vocabulario y cuántas veces aparece.', ok: true, por_que: 'La ficha muestra el lema, su frecuencia y un enlace al vocabulario cuando corresponde.' },
            { t: 'Activas la morfología.', ok: false, por_que: 'La morfología muestra la forma, no si está en el vocabulario.' },
            { t: 'Ocultas la glosa.', ok: false, por_que: 'Eso sirve para practicar la lectura.' }
          ],
          explicacion: 'La ficha de cada palabra es el puente entre el interlineal y el vocabulario.'
        } },
        { ir: { t: 'Abrir Mateo 5 en el interlineal', a: 'interlineal/#mt/5/3', marco: true } }
      ],
      pensar: '«Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos» (Mt 5:3). Jesús comienza el Sermón del Monte con quienes reconocen que no tienen nada que ofrecer. ¿Qué lugar tiene esa humildad en tu manera de acercarte a la Palabra?'
    }
  ];

  const leer = [
    {
      id: 'orden', n: 'De izquierda a derecha, con un orden libre', ref: 'Juan 1:1',
      visual: [ V(R('jn', 1, 1, 'Juan 1:1')) ],
      texto: [
        'El griego se lee como el español, de izquierda a derecha. Pero su orden de palabras es mucho más libre, porque no depende de la posición para saber quién hace qué: lo dicen las terminaciones.',
        { h: 'Las terminaciones mandan' },
        'En español, «el perro muerde al hombre» y «el hombre muerde al perro» dicen cosas distintas solo por el orden. En griego, el sujeto va en nominativo y el complemento directo en acusativo, y esas formas se distinguen por la terminación. Por eso el autor puede poner primero lo que quiere destacar.',
        'Mira el final de Juan 1:1, καὶ Θεὸς ἦν ὁ Λόγος. Palabra por palabra: «y Dios era el Verbo». ¿Quién es el sujeto? El que lleva artículo, ὁ Λόγος; Θεός, sin artículo y puesto primero, dice qué es el Verbo. Por eso la Reina-Valera traduce «y el Verbo era Dios». Juan puso Θεός al comienzo de la frase para darle peso: lo que el Verbo era, era Dios.',
        { h: 'Las palabras que van en segundo lugar' },
        'Algunas palabras griegas nunca van primero en su frase: γάρ, «porque»; δέ, «pero, y»; οὖν, «así que». Se ponen en segundo lugar aunque en español vayan al comienzo. En Juan 3:16, Οὕτως γάρ: «así, porque»; en español, «porque de tal manera». Cuando la glosa diga «porque» en segundo lugar, recuerda que en español va primero.',
        { h: 'Leer con las dos manos' },
        'Una buena manera de leer el interlineal es esta: primero lee la Reina-Valera; después recorre la línea griega con el dedo, buscando dónde está cada palabra española; al final, vuelve a la traducción. No intentes leer las glosas como si fueran una frase.',
        { ejercicio: {
          pregunta: 'En καὶ Θεὸς ἦν ὁ Λόγος, ¿cómo se sabe que el sujeto es el Verbo y no Dios?',
          opciones: [
            { t: 'Porque ὁ Λόγος lleva el artículo, y en una frase con el verbo «ser» el sujeto suele ser el que lo lleva.', ok: true, por_que: 'Los dos están en nominativo; el artículo marca el sujeto, y Θεός dice qué es.' },
            { t: 'Porque el sujeto siempre va primero.', ok: false, por_que: 'En griego no: aquí lo primero es Θεός, que no es el sujeto.' },
            { t: 'Porque Θεός está en acusativo.', ok: false, por_que: 'No: con el verbo «ser», los dos van en nominativo.' }
          ],
          explicacion: 'El orden griego da énfasis; las terminaciones y el artículo dan la función. Esto se retoma en la ruta III.'
        } },
        { ir: { t: 'Abrir Juan 1 en el interlineal', a: 'interlineal/#jn/1/1', marco: true } }
      ],
      pensar: 'Juan empieza su evangelio afirmando que el Verbo estaba con Dios y era Dios. ¿Qué cambia en tu lectura de todo el evangelio saber desde el primer versículo quién es Jesús?'
    },
    {
      id: 'articulo', n: 'El artículo', ref: '1 Corintios 13:13',
      visual: [
        V(R('1co', 13, 13, '1 Corintios 13:13')),
        { tipo: 'tabla', titulo: 'El artículo y su glosa', tabla: {
          titulo: 'Cómo glosa la página el artículo griego',
          cab: ['Griego', 'Glosa', 'Por qué'],
          filas: [
            ['ὁ Θεός', 'el Dios', 'Masculino en griego y en español'],
            ['ἡ ἀγάπη', 'el amor', 'Femenino en griego, pero «amor» es masculino en español'],
            ['τὸ πνεῦμα', 'el espíritu', 'Neutro en griego; el español no tiene neutro'],
            ['τὸ ζῆν', 'el vivir', 'Artículo con infinitivo: el infinitivo se vuelve sustantivo'],
            ['τοῦ Θεοῦ', 'del Dios', 'Genitivo: la glosa agrega «de»']
          ],
          nota: 'El griego no tiene artículo indefinido («un, una»). Cuando la Reina-Valera dice «un», el griego no tiene artículo.'
        } }
      ],
      texto: [
        'El griego tiene un solo artículo, ὁ, ἡ, τό, que cambia según el género, el número y el caso de la palabra que acompaña. Es la palabra más frecuente del Nuevo Testamento: casi veinte mil veces.',
        { h: 'Cómo lo glosa la página' },
        'La página da al artículo el género del sustantivo español que acompaña. En 1 Corintios 13:13, ἡ ἀγάπη es femenino en griego, pero «amor» es masculino en español; por eso la glosa dice «el», no «la». Si el artículo no acompaña a un sustantivo, la página usa el género griego: «el» o «la», y «lo» para el neutro.',
        { h: 'Lo que el artículo hace' },
        'El artículo griego hace más que el español. Puede convertir en sustantivo casi cualquier cosa: un adjetivo (οἱ πτωχοί, «los pobres»), un infinitivo (τὸ ζῆν, «el vivir») o una frase entera (τοῖς ἐν Χριστῷ Ἰησοῦ, «a los que están en Cristo Jesús»). Y como el griego no tiene artículo indefinido, cuando no hay artículo la traducción decide si pone «un», «una» o nada.',
        'En 1 Corintios 13:13, πίστις, ἐλπίς, ἀγάπη van sin artículo en la lista, y la Reina-Valera les pone «la»: «la fe, la esperanza y el amor». Al final, Pablo dice ἡ ἀγάπη, con artículo: «el amor», el que acaba de describir en todo el capítulo.',
        { h: 'El artículo repetido' },
        'A veces el griego repite el artículo. En Juan 3:16, τὸν Υἱὸν τὸν μονογενῆ es «el Hijo, el unigénito». Es una manera de destacar el adjetivo. La glosa muestra los dos artículos; la Reina-Valera dice «a su Hijo unigénito».',
        { ejercicio: {
          pregunta: 'En el interlineal lees ἡ ἀγάπη, y la glosa del artículo dice «el». ¿Es un error?',
          opciones: [
            { t: 'No: ἡ es femenino en griego, pero la glosa toma el género de «amor», que en español es masculino.', ok: true, por_que: 'El género gramatical no siempre coincide entre las dos lenguas.' },
            { t: 'Sí: debería decir «la amor».', ok: false, por_que: 'Eso no sería español; la glosa ayuda a leer en español.' },
            { t: 'Sí: el artículo griego femenino es τό.', ok: false, por_que: 'τό es neutro; el femenino es ἡ.' }
          ],
          explicacion: 'La forma griega (femenino) está en la morfología; la glosa la acomoda al español.'
        } }
      ],
      pensar: '«Ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor» (1 Co 13:13). ¿Por qué crees que Pablo pone el amor por encima incluso de la fe y la esperanza?'
    },
    {
      id: 'casos', n: 'Los casos en la glosa: «de» y «a»', ref: 'Romanos 1:16',
      visual: [
        V(R('ro', 1, 16, 'Romanos 1:16')),
        { tipo: 'tabla', titulo: 'Los cinco casos', tabla: {
          titulo: 'Los casos griegos y lo que hace la glosa',
          cab: ['Caso', 'Función principal', 'En la glosa'],
          filas: [
            ['Nominativo', 'El sujeto; lo que se dice del sujeto', 'Sin cambio: Θεός, «Dios»'],
            ['Genitivo', 'Pertenencia, origen, tema: «de»', 'Agrega «de»: Θεοῦ, «de Dios»'],
            ['Dativo', 'A quién, para quién; a veces con qué o en qué', 'Agrega «a»: Θεῷ, «a Dios»'],
            ['Acusativo', 'El complemento directo; hacia dónde', 'Sin cambio: Θεόν, «Dios»'],
            ['Vocativo', 'A quién se habla', 'Sin cambio: Πάτερ, «Padre»']
          ],
          nota: 'Detrás de una preposición no se agrega nada: la preposición ya dice la relación.'
        } }
      ],
      texto: [
        'El griego dice con terminaciones lo que el español dice con preposiciones. Θεός, Θεοῦ, Θεῷ y Θεόν son la misma palabra en cuatro casos. Para que la línea de glosas se entienda, este interlineal agrega «de» al genitivo y «a» al dativo cuando no hay una preposición delante.',
        { h: 'Solo la primera palabra del grupo' },
        'El «de» o el «a» va una sola vez por grupo: en el artículo, si lo hay, o en la primera palabra. Así, τοῦ Θεοῦ se glosa «del» · «Dios», y no «de el» · «de Dios». Un adjetivo o un sustantivo que concuerdan con la palabra anterior no repiten la marca. Los pronombres personales, en cambio, siempre la llevan: ἡμῶν, «de nosotros»; αὐτῷ, «a él».',
        { h: 'Romanos 1:16' },
        'Mira el panel. δύναμις γὰρ Θεοῦ: «poder, porque, de Dios»: el evangelio es poder que viene de Dios. Después, παντὶ τῷ πιστεύοντι, «a todo, al, creer»: el dativo dice para quién es ese poder. La Reina-Valera lo dice en buen español: «poder de Dios para salvación a todo aquel que cree».',
        { h: 'El dativo no siempre es «a»' },
        'La glosa «a» es la más común, pero el dativo también puede decir con qué se hace algo, en qué tiempo o de qué manera. En Efesios 5:18, μὴ μεθύσκεσθε οἴνῳ se glosa «no · embriagarse · a vino», y la Reina-Valera traduce «no os embriaguéis con vino». En Juan 2:20, τεσσεράκοντα καὶ ἓξ ἔτεσιν se glosa «a años», y la Reina-Valera dice «en cuarenta y seis años». La glosa marca el caso; el sentido lo decide el contexto.',
        { ejercicio: {
          pregunta: 'En ἀπὸ τοῦ Θεοῦ la glosa dice «de» · «el» · «Dios», sin agregar otro «de». ¿Por qué?',
          opciones: [
            { t: 'Porque detrás de una preposición no se agrega nada: ἀπό ya dice la relación.', ok: true, por_que: 'La preposición rige el caso y da el sentido; la glosa no lo repite.' },
            { t: 'Porque Θεοῦ no está en genitivo.', ok: false, por_que: 'Sí lo está; ἀπό siempre va con genitivo.' },
            { t: 'Porque es un error de la página.', ok: false, por_que: 'Es la regla de la página: la marca va solo cuando no hay preposición.' }
          ],
          explicacion: 'Sin preposición, el caso solo dice la relación, y la glosa la muestra con «de» o «a».'
        } },
        { ir: { t: 'Abrir Romanos 1 en el interlineal', a: 'interlineal/#ro/1/16', marco: true } }
      ],
      pensar: 'Pablo dice que no se avergüenza del evangelio, porque es poder de Dios para salvación (Ro 1:16). ¿Hay situaciones en que te cuesta hablar del evangelio? ¿Qué te da confianza este versículo?'
    },
    {
      id: 'verbo', n: 'El verbo: tiempo y aspecto', ref: 'Juan 1:1-3',
      visual: [
        V(R('jn', 1, 3, 'Juan 1:3')),
        { tipo: 'tabla', titulo: 'Los tiempos del verbo', tabla: {
          titulo: 'Qué mira cada tiempo griego',
          cab: ['Tiempo', 'Cómo mira la acción', 'Ejemplo'],
          filas: [
            ['Presente', 'En curso o habitual', 'λέγω, «digo»'],
            ['Imperfecto', 'En curso en el pasado', 'ἦν, «era»'],
            ['Aoristo', 'Como un todo, sin detenerse en su duración', 'ἐγένετο, «llegó a ser, fue hecho»'],
            ['Perfecto', 'Terminada, con un resultado que sigue', 'γέγονεν, «ha llegado a ser»'],
            ['Futuro', 'Lo que va a ocurrir', 'ἐγερεῖς, «levantarás»'],
            ['Pluscuamperfecto', 'Terminada antes de otro momento pasado', 'ᾔδει, «sabía»']
          ],
          nota: 'En la página: tocar el verbo abre la ficha con su tiempo, su voz, su modo y una explicación del tiempo.'
        } }
      ],
      texto: [
        'El verbo griego dice más que el tiempo en que ocurre algo: dice cómo mira el autor la acción. A eso se le llama aspecto. Por eso el interlineal deja los verbos en infinitivo y explica la forma en la ficha.',
        { h: 'Juan 1:1-3' },
        'Juan usa dos verbos con mucho cuidado. Para el Verbo dice ἦν, imperfecto de «ser»: «era», una existencia continua, sin comienzo a la vista. Para la creación dice ἐγένετο, aoristo de «llegar a ser»: «fue hecho», algo que comenzó. Y al final del versículo 3 dice γέγονεν, perfecto: «lo que ha sido hecho», lo que llegó a existir y sigue existiendo. En la línea de glosas los tres se ven parecidos («ser», «llegar a ser»); en la morfología se ve la diferencia.',
        { h: 'Voz y modo' },
        'La ficha también dice la voz: activa (el sujeto hace), media (el sujeto hace algo para sí o en sí) o pasiva (el sujeto recibe la acción). Algunos verbos cambian de sentido en la voz media, y la glosa lo tiene en cuenta: ἄρχω es «gobernar», pero en voz media es «comenzar», como en Hechos 2:4, «comenzaron a hablar». Y dice el modo: indicativo (lo que es), subjuntivo (lo posible o deseado), imperativo (la orden), optativo (el deseo), infinitivo y participio.',
        { h: 'Cómo leer un verbo' },
        'Cuando la glosa diga un infinitivo, pregúntate: ¿quién lo hace?, ¿cuándo?, ¿cómo lo mira el autor? La morfología responde: «aor. act. ind. 3s» es aoristo, voz activa, indicativo, tercera persona singular. Después mira cómo lo tradujo la Reina-Valera.',
        { ejercicio: {
          pregunta: 'En Juan 1:1-3, ¿por qué es importante que Juan diga ἦν del Verbo y ἐγένετο de la creación?',
          opciones: [
            { t: 'Porque «era» presenta al Verbo existiendo sin comienzo, y «fue hecho» presenta a la creación comenzando a existir.', ok: true, por_que: 'El contraste de los dos verbos distingue al Creador de lo creado.' },
            { t: 'Porque los dos verbos significan exactamente lo mismo.', ok: false, por_que: 'Son verbos distintos y en tiempos distintos.' },
            { t: 'Porque ἐγένετο es futuro.', ok: false, por_que: 'Es aoristo.' }
          ],
          explicacion: 'La elección de un verbo y de su tiempo puede decir mucho; la morfología te deja verla.'
        } },
        { ir: { t: 'Ver «El verbo» en Vocabulario y gramática del griego', a: '../../gramatica-griega/' } }
      ],
      pensar: '«Todas las cosas por él fueron hechas» (Jn 1:3). Todo lo que existe comenzó por medio de Cristo, y él existía antes de todo. ¿Qué te dice eso de su autoridad sobre tu vida?'
    },
    {
      id: 'participio', n: 'El participio y el infinitivo', ref: 'Filipenses 1:21',
      visual: [ V(R('fil', 1, 21, 'Filipenses 1:21')), V(R('jn', 3, 16, 'Juan 3:16')) ],
      texto: [
        'Dos formas del verbo griego merecen atención especial porque funcionan también como otras clases de palabras: el infinitivo y el participio.',
        { h: 'El infinitivo con artículo' },
        'En Filipenses 1:21, Pablo dice τὸ ζῆν Χριστὸς καὶ τὸ ἀποθανεῖν κέρδος. La glosa es «el vivir · Cristo · y · el morir · ganancia». El artículo convierte el infinitivo en sustantivo: «el vivir», «el morir». La Reina-Valera conserva el giro: «el vivir es Cristo, y el morir es ganancia». Fíjate también en que el griego no tiene el verbo «es»: es común que el griego lo omita, y la traducción lo agrega.',
        { h: 'El participio' },
        'El participio es un verbo que funciona como adjetivo o como sustantivo. En Juan 3:16, πᾶς ὁ πιστεύων es «todo · el · creer» en la glosa: «todo el que cree», «todo aquel que en él cree». El participio está en presente: describe a alguien que cree, no a alguien que creyó una vez. La Reina-Valera lo traduce con una frase («todo aquel que cree»), que es lo que hace casi siempre el español con un participio con artículo.',
        'El participio también puede acompañar al verbo principal y decir cuándo, cómo o por qué ocurre algo. En Mateo 28:19, πορευθέντες es «ir», en aoristo, y βαπτίζοντες es «bautizar», en presente: «yendo», «bautizándolos». El verbo principal de la frase es μαθητεύσατε, «haced discípulos». La glosa no muestra esas relaciones; la morfología («part.») te avisa que estás frente a un participio.',
        { h: 'Cómo reconocerlos' },
        'En la fila de morfología, «inf.» marca el infinitivo y «part.» el participio, seguido de su caso, número y género. Cuando veas un artículo y luego un verbo, piensa en «el que…», «los que…».',
        { ejercicio: {
          pregunta: 'En πᾶς ὁ πιστεύων, ¿qué indica que el participio esté en presente?',
          opciones: [
            { t: 'Describe a quien cree como algo actual y continuo: «todo el que cree».', ok: true, por_que: 'El presente mira la acción en curso; la fe que salva es una fe viva.' },
            { t: 'Que la fe es algo que ocurrió una sola vez en el pasado.', ok: false, por_que: 'Eso no lo dice el presente.' },
            { t: 'Que el verbo está en infinitivo.', ok: false, por_que: 'Es un participio; el infinitivo solo es la glosa del lema.' }
          ],
          explicacion: 'El tiempo del participio ayuda a ver cómo mira el autor la acción, sin forzarle más de lo que dice.'
        } }
      ],
      pensar: '«Para mí el vivir es Cristo, y el morir es ganancia» (Fil 1:21). Pablo lo escribió preso. ¿Qué tendría que cambiar en tu vida para poder decir lo mismo?'
    },
    {
      id: 'particulas', n: 'Las partículas pequeñas', ref: 'Romanos 6:23',
      visual: [
        V(R('ro', 6, 23, 'Romanos 6:23')),
        { tipo: 'tabla', titulo: 'Partículas frecuentes', tabla: {
          titulo: 'Palabras pequeñas que unen el razonamiento',
          cab: ['Griego', 'Glosa', 'Qué hace'],
          filas: [
            ['καί', 'y', 'Une; a veces «también», «aun»'],
            ['δέ', 'pero', 'Pasa a algo nuevo o contrasta; va en segundo lugar'],
            ['γάρ', 'porque', 'Da la razón; va en segundo lugar'],
            ['οὖν', 'así que', 'Saca una conclusión; va en segundo lugar'],
            ['μέν… δέ', 'por una parte… por otra', 'Pone dos cosas una frente a otra'],
            ['ἵνα', 'para que', 'Propósito o resultado'],
            ['ἄν', '–', 'No se traduce: da sentido de posibilidad («-quiera», «-ría»)']
          ],
          nota: 'Las cuatro primeras están entre las diez palabras más frecuentes del Nuevo Testamento.'
        } }
      ],
      texto: [
        'Las palabras más pequeñas del griego son las que llevan el hilo del razonamiento. Un lector apurado las salta; un buen lector las sigue, porque dicen cómo se conecta una frase con la anterior.',
        { h: 'Romanos 6:23' },
        'Mira el panel: τὰ γὰρ ὀψώνια τῆς ἁμαρτίας θάνατος, τὸ δὲ χάρισμα τοῦ Θεοῦ ζωὴ αἰώνιος. Γάρ, «porque», une el versículo con lo anterior: es la razón de lo que Pablo venía diciendo. Δέ, «pero», pone frente a frente las dos mitades: los salarios del pecado y el don de Dios. Las dos van en segundo lugar, y la Reina-Valera las pone donde van en español: «Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna».',
        { h: 'Partículas que no se traducen' },
        'La glosa de ἄν es una raya, «–»: no tiene una palabra española que le corresponda. Da a la frase un matiz de posibilidad. En Romanos 10:13, Πᾶς γὰρ ὃς ἂν ἐπικαλέσηται es «todo aquel que invocare»: el ἄν, junto con el subjuntivo, da el sentido de «cualquiera que».',
        { h: 'Seguir el razonamiento' },
        'Cuando estudies una carta, marca las partículas de un párrafo: cada γάρ te dice que viene una razón; cada οὖν, una conclusión; cada δέ, un paso o un contraste. Así ves el argumento del autor antes de detenerte en las palabras grandes.',
        { ejercicio: {
          pregunta: 'Un párrafo de Romanos empieza con οὖν. ¿Qué te dice esa palabra?',
          opciones: [
            { t: 'Que viene una conclusión de lo que Pablo dijo antes: «así que».', ok: true, por_que: 'Οὖν saca una consecuencia; conviene leer lo anterior para entenderla.' },
            { t: 'Que comienza un tema sin relación con lo anterior.', ok: false, por_que: 'Οὖν justamente une con lo anterior.' },
            { t: 'Nada: es una palabra de relleno.', ok: false, por_que: 'Las partículas llevan el hilo del razonamiento.' }
          ],
          explicacion: 'Las partículas son las bisagras del texto. Seguirlas ayuda a leer cada versículo en su contexto.'
        } },
        { ir: { t: 'Abrir Romanos 6 en el interlineal', a: 'interlineal/#ro/6/23', marco: true } }
      ],
      pensar: '«La paga del pecado es muerte, mas la dádiva de Dios es vida eterna» (Ro 6:23). Pablo pone frente a frente un salario que se gana y un regalo que se recibe. ¿Estás tratando de ganar lo que Dios quiere regalarte?'
    },
    {
      id: 'morfologia', n: 'La fila de morfología y la ficha', ref: 'Mateo 28:19',
      visual: [
        V(R('mt', 28, 19, 'Mateo 28:19')),
        { tipo: 'tabla', titulo: 'Abreviaturas', tabla: {
          titulo: 'Las abreviaturas de la fila de morfología',
          cab: ['Abreviatura', 'Significa'],
          filas: [
            ['sust. · adj. · art. · pron.', 'Sustantivo · adjetivo · artículo · pronombre'],
            ['nom. · gen. · dat. · ac. · voc.', 'Los cinco casos'],
            ['sg. · pl. · m · f · n', 'Singular · plural · masculino · femenino · neutro'],
            ['pres. · imperf. · fut. · aor. · perf. · plusc.', 'Los tiempos'],
            ['act. · med. · pas.', 'Las voces'],
            ['ind. · subj. · opt. · imper. · inf. · part.', 'Los modos'],
            ['1s · 2p · 3s…', 'Persona y número del verbo'],
            ['indecl.', 'Indeclinable: un nombre que no cambia (Ἀβραάμ, Δαυείδ)']
          ],
          nota: 'La ficha escribe todo con palabras completas.'
        } }
      ],
      texto: [
        'La casilla «Morfología» agrega una cuarta fila debajo de cada palabra, con su forma en abreviaturas. Es la información que usa la página para armar la glosa, y la misma que usan los comentarios cuando hablan del griego.',
        { h: 'Mateo 28:19' },
        'Activa la morfología en el interlineal y mira la gran comisión. πορευθέντες: «aor. pas. part. nom. pl. m»: un participio aoristo, «habiendo ido», «id». μαθητεύσατε: «aor. act. imper. 2p»: un imperativo, la orden central del versículo, «haced discípulos». βαπτίζοντες: «pres. act. part.»: «bautizando». Y τὸ ὄνομα, «el nombre», en singular: un solo nombre para el Padre, el Hijo y el Espíritu Santo.',
        { h: 'La ficha de la palabra' },
        'Al tocar una palabra se abre su ficha. Arriba van el griego, la transliteración y la glosa; debajo, la forma con palabras completas y la palabra de diccionario (el lema) con su glosa, su número de Strong y cuántas veces aparece en el Nuevo Testamento. Si la palabra es un verbo, la ficha explica qué mira su tiempo; si está en genitivo o dativo, explica por qué la glosa lleva «de» o «a».',
        { h: 'El número de Strong' },
        'James Strong numeró en 1890 todas las palabras de diccionario del Nuevo Testamento. Muchos diccionarios y concordancias usan esos números, así que la ficha te deja buscar la misma palabra en otros libros. El número identifica la palabra, no su sentido en un versículo.',
        { ejercicio: {
          pregunta: 'En Mateo 28:19, ¿cuál de las palabras es la orden principal?',
          opciones: [
            { t: 'μαθητεύσατε, «haced discípulos»: es el único imperativo.', ok: true, por_que: 'Los otros verbos son participios que acompañan a la orden.' },
            { t: 'πορευθέντες, «id».', ok: false, por_que: 'Es un participio; acompaña a la orden. En español se traduce como mandato porque va unido a ella.' },
            { t: 'βαπτίζοντες, «bautizándolos».', ok: false, por_que: 'Es un participio presente que dice cómo se hacen discípulos.' }
          ],
          explicacion: 'La morfología muestra la estructura de la frase: un mandato central y participios que lo acompañan.'
        } },
        { ir: { t: 'Abrir Mateo 28 en el interlineal', a: 'interlineal/#mt/28/19', marco: true } }
      ],
      pensar: 'Jesús mandó hacer discípulos, no solo convertidos (Mt 28:19). ¿Qué estás haciendo para ayudar a alguien a seguir a Cristo?'
    }
  ];

  window.__INTG.queEs = queEs;
  window.__INTG.leer = leer;
})();
