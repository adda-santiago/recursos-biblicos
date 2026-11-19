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
  // { ref: 'Juan 1:1', gr: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.', tr: 'En arjḗ ēn ho Lógos kai ho Lógos ēn pros ton Theón kai Theós ēn ho Lógos.', p: [{ gr: 'Ἐν', tr: 'En', es: 'en' }, { gr: 'ἀρχῇ', tr: 'arjḗ', es: 'principio' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'πρὸς', tr: 'pros', es: 'a' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'Θεόν', tr: 'Theón', es: 'Dios' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'Θεὸς', tr: 'Theós', es: 'Dios' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }], rv: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' } → versículo del interlineal: el script lo convierte en { ref, gr, tr, p, rv } con las marcas
  const R = r => r;
  window.__INTG = { V, R };

  const queEs = [
    {
      id: 'puente', n: 'Un puente entre dos lenguas', ref: 'Hechos 8:30',
      visual: [ V({ ref: 'Hechos 8:30', gr: 'προσδραμὼν δὲ ὁ Φίλιππος ἤκουσεν αὐτοῦ ἀναγινώσκοντος Ἡσαΐαν τὸν προφήτην, καὶ εἶπεν Ἆρά γε γινώσκεις ἃ ἀναγινώσκεις;', tr: 'Prosdramṓn de ho Fílippos ḗkusen autú anaginṓskontos Hēsaían ton profḗtēn kai eípen Árá ge ginṓskeis ha anaginṓskeis.', p: [{ gr: 'προσδραμὼν', tr: 'prosdramṓn', es: 'correr hacia' }, { gr: 'δὲ', tr: 'de', es: 'pero' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Φίλιππος', tr: 'Fílippos', es: 'Felipe' }, { gr: 'ἤκουσεν', tr: 'ḗkusen', es: 'oír' }, { gr: 'αὐτοῦ', tr: 'autú', es: 'de él' }, { gr: 'ἀναγινώσκοντος', tr: 'anaginṓskontos', es: 'de leer' }, { gr: 'Ἡσαΐαν', tr: 'Hēsaían', es: 'Isaías' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'προφήτην', tr: 'profḗtēn', es: 'profeta' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'εἶπεν', tr: 'eípen', es: 'decir' }, { gr: 'Ἆρά', tr: 'Árá', es: '¿acaso?' }, { gr: 'γε', tr: 'ge', es: 'ciertamente' }, { gr: 'γινώσκεις', tr: 'ginṓskeis', es: 'conocer' }, { gr: 'ἃ', tr: 'ha', es: 'que' }, { gr: 'ἀναγινώσκεις', tr: 'anaginṓskeis', es: 'leer' }], rv: 'Acudiendo Felipe, le oyó que leía al profeta Isaías, y dijo: Pero ¿entiendes lo que lees?' }) ],
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
        V({ ref: 'Juan 3:16', gr: 'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον.', tr: 'Hútōs gar ēgápēsen ho Theós ton kósmon hṓste ton Hyión ton monogenḗ édōken hína pas ho pisteúōn eis autón mē apólētai all’ éjē zōḗn aiṓnion.', p: [{ gr: 'Οὕτως', tr: 'Hútōs', es: 'así' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'ἠγάπησεν', tr: 'ēgápēsen', es: 'amar' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Θεὸς', tr: 'Theós', es: 'Dios' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'κόσμον', tr: 'kósmon', es: 'mundo' }, { gr: 'ὥστε', tr: 'hṓste', es: 'de modo que' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'Υἱὸν', tr: 'Hyión', es: 'Hijo' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'μονογενῆ', tr: 'monogenḗ', es: 'unigénito' }, { gr: 'ἔδωκεν', tr: 'édōken', es: 'dar' }, { gr: 'ἵνα', tr: 'hína', es: 'para que' }, { gr: 'πᾶς', tr: 'pas', es: 'todo' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'πιστεύων', tr: 'pisteúōn', es: 'creer' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'αὐτὸν', tr: 'autón', es: 'él' }, { gr: 'μὴ', tr: 'mē', es: 'no' }, { gr: 'ἀπόληται', tr: 'apólētai', es: 'perecer' }, { gr: 'ἀλλ', tr: 'all’', es: 'pero' }, { gr: 'ἔχῃ', tr: 'éjē', es: 'tener' }, { gr: 'ζωὴν', tr: 'zōḗn', es: 'vida' }, { gr: 'αἰώνιον', tr: 'aiṓnion', es: 'eterna' }], rv: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.' }),
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
      visual: [ V({ ref: 'Juan 1:14', gr: 'Καὶ ὁ Λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν, καὶ ἐθεασάμεθα τὴν δόξαν αὐτοῦ, δόξαν ὡς μονογενοῦς παρὰ Πατρός, πλήρης χάριτος καὶ ἀληθείας.', tr: 'Kai ho Lógos sarx egéneto kai eskḗnōsen en hēmín kai etheasámetha tēn dóxan autú dóxan hōs monogenús pará Patrós plḗrēs járitos kai alētheías.', p: [{ gr: 'Καὶ', tr: 'Kai', es: 'y' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }, { gr: 'σὰρξ', tr: 'sarx', es: 'carne' }, { gr: 'ἐγένετο', tr: 'egéneto', es: 'llegar a ser' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ἐσκήνωσεν', tr: 'eskḗnōsen', es: 'habitar' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'ἡμῖν', tr: 'hēmín', es: 'nosotros' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ἐθεασάμεθα', tr: 'etheasámetha', es: 'contemplar' }, { gr: 'τὴν', tr: 'tēn', es: 'la' }, { gr: 'δόξαν', tr: 'dóxan', es: 'gloria' }, { gr: 'αὐτοῦ', tr: 'autú', es: 'de él' }, { gr: 'δόξαν', tr: 'dóxan', es: 'gloria' }, { gr: 'ὡς', tr: 'hōs', es: 'como' }, { gr: 'μονογενοῦς', tr: 'monogenús', es: 'de unigénito' }, { gr: 'παρὰ', tr: 'pará', es: 'de parte de' }, { gr: 'Πατρός', tr: 'Patrós', es: 'Padre' }, { gr: 'πλήρης', tr: 'plḗrēs', es: 'lleno' }, { gr: 'χάριτος', tr: 'járitos', es: 'de gracia' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ἀληθείας', tr: 'alētheías', es: 'de verdad' }], rv: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.' }) ],
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
        V({ ref: 'Mateo 5:3', gr: 'Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.', tr: 'Makárioi hoi ptōjoí tō pneúmati hóti autṓn estin hē basileía tōn uranṓn.', p: [{ gr: 'Μακάριοι', tr: 'Makárioi', es: 'bienaventurados' }, { gr: 'οἱ', tr: 'hoi', es: 'los' }, { gr: 'πτωχοὶ', tr: 'ptōjoí', es: 'pobres' }, { gr: 'τῷ', tr: 'tō', es: 'al' }, { gr: 'πνεύματι', tr: 'pneúmati', es: 'espíritu' }, { gr: 'ὅτι', tr: 'hóti', es: 'que' }, { gr: 'αὐτῶν', tr: 'autṓn', es: 'de ellos' }, { gr: 'ἐστιν', tr: 'estin', es: 'ser' }, { gr: 'ἡ', tr: 'hē', es: 'el' }, { gr: 'βασιλεία', tr: 'basileía', es: 'reino' }, { gr: 'τῶν', tr: 'tōn', es: 'de los' }, { gr: 'οὐρανῶν', tr: 'uranṓn', es: 'cielos' }], rv: 'Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos.' }),
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
      visual: [ V({ ref: 'Juan 1:1', gr: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.', tr: 'En arjḗ ēn ho Lógos kai ho Lógos ēn pros ton Theón kai Theós ēn ho Lógos.', p: [{ gr: 'Ἐν', tr: 'En', es: 'en' }, { gr: 'ἀρχῇ', tr: 'arjḗ', es: 'principio' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'πρὸς', tr: 'pros', es: 'a' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'Θεόν', tr: 'Theón', es: 'Dios' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'Θεὸς', tr: 'Theós', es: 'Dios' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }], rv: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' }) ],
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
        V({ ref: '1 Corintios 13:13', gr: 'νυνὶ δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα· μείζων δὲ τούτων ἡ ἀγάπη.', tr: 'Nyní de ménei pístis elpís agápē ta tría taúta meízōn de tútōn hē agápē.', p: [{ gr: 'νυνὶ', tr: 'nyní', es: 'ahora' }, { gr: 'δὲ', tr: 'de', es: 'pero' }, { gr: 'μένει', tr: 'ménei', es: 'permanecer' }, { gr: 'πίστις', tr: 'pístis', es: 'fe' }, { gr: 'ἐλπίς', tr: 'elpís', es: 'esperanza' }, { gr: 'ἀγάπη', tr: 'agápē', es: 'amor' }, { gr: 'τὰ', tr: 'ta', es: 'las' }, { gr: 'τρία', tr: 'tría', es: 'tres' }, { gr: 'ταῦτα', tr: 'taúta', es: 'estas cosas' }, { gr: 'μείζων', tr: 'meízōn', es: 'más grande' }, { gr: 'δὲ', tr: 'de', es: 'pero' }, { gr: 'τούτων', tr: 'tútōn', es: 'de estas cosas' }, { gr: 'ἡ', tr: 'hē', es: 'el' }, { gr: 'ἀγάπη', tr: 'agápē', es: 'amor' }], rv: 'Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor.' }),
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
        V({ ref: 'Romanos 1:16', gr: 'οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον· δύναμις γὰρ Θεοῦ ἐστιν εἰς σωτηρίαν παντὶ τῷ πιστεύοντι, Ἰουδαίῳ τε πρῶτον καὶ Ἕλληνι.', tr: 'U gar epaisjýnomai to euangélion dýnamis gar Theú estin eis sōtērían pantí tō pisteúonti Iudaíō te prṓton kai Héllēni.', p: [{ gr: 'οὐ', tr: 'u', es: 'no' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'ἐπαισχύνομαι', tr: 'epaisjýnomai', es: 'avergonzarse' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'εὐαγγέλιον', tr: 'euangélion', es: 'evangelio' }, { gr: 'δύναμις', tr: 'dýnamis', es: 'poder' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'Θεοῦ', tr: 'Theú', es: 'de Dios' }, { gr: 'ἐστιν', tr: 'estin', es: 'ser' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'σωτηρίαν', tr: 'sōtērían', es: 'salvación' }, { gr: 'παντὶ', tr: 'pantí', es: 'a todo' }, { gr: 'τῷ', tr: 'tō', es: 'al' }, { gr: 'πιστεύοντι', tr: 'pisteúonti', es: 'creer' }, { gr: 'Ἰουδαίῳ', tr: 'Iudaíō', es: 'judío' }, { gr: 'τε', tr: 'te', es: 'y' }, { gr: 'πρῶτον', tr: 'prṓton', es: 'primero' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'Ἕλληνι', tr: 'Héllēni', es: 'a griego' }], rv: 'Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.' }),
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
        V({ ref: 'Juan 1:3', gr: 'πάντα δι’ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν ὃ γέγονεν.', tr: 'Pánta di’ autú egéneto kai jōrís autú egéneto udé hen ho gégonen.', p: [{ gr: 'πάντα', tr: 'pánta', es: 'todas las cosas' }, { gr: 'δι', tr: 'di’', es: 'por medio de' }, { gr: 'αὐτοῦ', tr: 'autú', es: 'él' }, { gr: 'ἐγένετο', tr: 'egéneto', es: 'llegar a ser' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'χωρὶς', tr: 'jōrís', es: 'sin' }, { gr: 'αὐτοῦ', tr: 'autú', es: 'de él' }, { gr: 'ἐγένετο', tr: 'egéneto', es: 'llegar a ser' }, { gr: 'οὐδὲ', tr: 'udé', es: 'ni' }, { gr: 'ἕν', tr: 'hen', es: 'uno' }, { gr: 'ὃ', tr: 'ho', es: 'que' }, { gr: 'γέγονεν', tr: 'gégonen', es: 'llegar a ser' }], rv: 'Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.' }),
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
      visual: [ V({ ref: 'Filipenses 1:21', gr: 'Ἐμοὶ γὰρ τὸ ζῆν Χριστὸς καὶ τὸ ἀποθανεῖν κέρδος.', tr: 'Emoí gar to zēn Jristós kai to apothaneín kérdos.', p: [{ gr: 'Ἐμοὶ', tr: 'Emoí', es: 'a mí' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'ζῆν', tr: 'zēn', es: 'vivir' }, { gr: 'Χριστὸς', tr: 'Jristós', es: 'Cristo' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'ἀποθανεῖν', tr: 'apothaneín', es: 'morir' }, { gr: 'κέρδος', tr: 'kérdos', es: 'ganancia' }], rv: 'Porque para mí el vivir es Cristo, y el morir es ganancia.' }), V({ ref: 'Juan 3:16', gr: 'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον.', tr: 'Hútōs gar ēgápēsen ho Theós ton kósmon hṓste ton Hyión ton monogenḗ édōken hína pas ho pisteúōn eis autón mē apólētai all’ éjē zōḗn aiṓnion.', p: [{ gr: 'Οὕτως', tr: 'Hútōs', es: 'así' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'ἠγάπησεν', tr: 'ēgápēsen', es: 'amar' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Θεὸς', tr: 'Theós', es: 'Dios' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'κόσμον', tr: 'kósmon', es: 'mundo' }, { gr: 'ὥστε', tr: 'hṓste', es: 'de modo que' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'Υἱὸν', tr: 'Hyión', es: 'Hijo' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'μονογενῆ', tr: 'monogenḗ', es: 'unigénito' }, { gr: 'ἔδωκεν', tr: 'édōken', es: 'dar' }, { gr: 'ἵνα', tr: 'hína', es: 'para que' }, { gr: 'πᾶς', tr: 'pas', es: 'todo' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'πιστεύων', tr: 'pisteúōn', es: 'creer' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'αὐτὸν', tr: 'autón', es: 'él' }, { gr: 'μὴ', tr: 'mē', es: 'no' }, { gr: 'ἀπόληται', tr: 'apólētai', es: 'perecer' }, { gr: 'ἀλλ', tr: 'all’', es: 'pero' }, { gr: 'ἔχῃ', tr: 'éjē', es: 'tener' }, { gr: 'ζωὴν', tr: 'zōḗn', es: 'vida' }, { gr: 'αἰώνιον', tr: 'aiṓnion', es: 'eterna' }], rv: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.' }) ],
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
        V({ ref: 'Romanos 6:23', gr: 'τὰ γὰρ ὀψώνια τῆς ἁμαρτίας θάνατος, τὸ δὲ χάρισμα τοῦ Θεοῦ ζωὴ αἰώνιος ἐν Χριστῷ Ἰησοῦ τῷ Κυρίῳ ἡμῶν.', tr: 'Ta gar opsṓnia tēs hamartías thánatos to de járisma tu Theú zōḗ aiṓnios en Jristṓ Iēsú tō Kyríō hēmṓn.', p: [{ gr: 'τὰ', tr: 'ta', es: 'los' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'ὀψώνια', tr: 'opsṓnia', es: 'salarios' }, { gr: 'τῆς', tr: 'tēs', es: 'del' }, { gr: 'ἁμαρτίας', tr: 'hamartías', es: 'pecado' }, { gr: 'θάνατος', tr: 'thánatos', es: 'muerte' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'δὲ', tr: 'de', es: 'pero' }, { gr: 'χάρισμα', tr: 'járisma', es: 'don' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Θεοῦ', tr: 'Theú', es: 'Dios' }, { gr: 'ζωὴ', tr: 'zōḗ', es: 'vida' }, { gr: 'αἰώνιος', tr: 'aiṓnios', es: 'eterna' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'Χριστῷ', tr: 'Jristṓ', es: 'Cristo' }, { gr: 'Ἰησοῦ', tr: 'Iēsú', es: 'Jesús' }, { gr: 'τῷ', tr: 'tō', es: 'al' }, { gr: 'Κυρίῳ', tr: 'Kyríō', es: 'Señor' }, { gr: 'ἡμῶν', tr: 'hēmṓn', es: 'de nosotros' }], rv: 'Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.' }),
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
        V({ ref: 'Mateo 28:19', gr: 'πορευθέντες οὖν μαθητεύσατε πάντα τὰ ἔθνη, βαπτίζοντες αὐτοὺς εἰς τὸ ὄνομα τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος,', tr: 'Poreuthéntes un mathēteúsate pánta ta éthnē baptízontes autús eis to ónoma tu Patrós kai tu Hyiú kai tu Hagíu Pneúmatos.', p: [{ gr: 'πορευθέντες', tr: 'poreuthéntes', es: 'ir' }, { gr: 'οὖν', tr: 'un', es: 'así que' }, { gr: 'μαθητεύσατε', tr: 'mathēteúsate', es: 'hacer discípulos' }, { gr: 'πάντα', tr: 'pánta', es: 'todas' }, { gr: 'τὰ', tr: 'ta', es: 'las' }, { gr: 'ἔθνη', tr: 'éthnē', es: 'naciones' }, { gr: 'βαπτίζοντες', tr: 'baptízontes', es: 'bautizar' }, { gr: 'αὐτοὺς', tr: 'autús', es: 'los' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'ὄνομα', tr: 'ónoma', es: 'nombre' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Πατρὸς', tr: 'Patrós', es: 'Padre' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Υἱοῦ', tr: 'Hyiú', es: 'Hijo' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Ἁγίου', tr: 'Hagíu', es: 'Santo' }, { gr: 'Πνεύματος', tr: 'Pneúmatos', es: 'Espíritu' }], rv: 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;' }),
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
/* ==========================================================
   Recursos Bíblicos — Interlineal griego–español (NT) · contenido de las rutas (parte 2: III, IV y taller)
   Ver el encabezado de parte1.js.
   ========================================================== */
(() => {
  const { V, R, queEs, leer } = window.__INTG;

  const errores = [
    {
      id: 'glosa', n: 'La glosa no es «el verdadero significado»', ref: 'Juan 3:8',
      visual: [ V({ ref: 'Juan 3:8', gr: 'τὸ πνεῦμα ὅπου θέλει πνεῖ, καὶ τὴν φωνὴν αὐτοῦ ἀκούεις, ἀλλ’ οὐκ οἶδας πόθεν ἔρχεται καὶ ποῦ ὑπάγει· οὕτως ἐστὶν πᾶς ὁ γεγεννημένος ἐκ τοῦ Πνεύματος.', tr: 'To pneúma hópu thélei pnei kai tēn fōnḗn autú akúeis all’ uk oídas póthen érjetai kai pu hypágei hútōs estín pas ho gegennēménos ek tu Pneúmatos.', p: [{ gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'πνεῦμα', tr: 'pneúma', es: 'espíritu' }, { gr: 'ὅπου', tr: 'hópu', es: 'donde' }, { gr: 'θέλει', tr: 'thélei', es: 'querer' }, { gr: 'πνεῖ', tr: 'pnei', es: 'soplar' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'τὴν', tr: 'tēn', es: 'la' }, { gr: 'φωνὴν', tr: 'fōnḗn', es: 'voz' }, { gr: 'αὐτοῦ', tr: 'autú', es: 'de él' }, { gr: 'ἀκούεις', tr: 'akúeis', es: 'oír' }, { gr: 'ἀλλ', tr: 'all’', es: 'pero' }, { gr: 'οὐκ', tr: 'uk', es: 'no' }, { gr: 'οἶδας', tr: 'oídas', es: 'saber' }, { gr: 'πόθεν', tr: 'póthen', es: '¿de dónde?' }, { gr: 'ἔρχεται', tr: 'érjetai', es: 'venir' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ποῦ', tr: 'pu', es: '¿dónde?' }, { gr: 'ὑπάγει', tr: 'hypágei', es: 'irse' }, { gr: 'οὕτως', tr: 'hútōs', es: 'así' }, { gr: 'ἐστὶν', tr: 'estín', es: 'ser' }, { gr: 'πᾶς', tr: 'pas', es: 'todo' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'γεγεννημένος', tr: 'gegennēménos', es: 'engendrar' }, { gr: 'ἐκ', tr: 'ek', es: 'de' }, { gr: 'τοῦ', tr: 'tu', es: 'el' }, { gr: 'Πνεύματος', tr: 'Pneúmatos', es: 'Espíritu' }], rv: 'El viento sopla de donde quiere, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va; así es todo aquel que es nacido del Espíritu.' }) ],
      texto: [
        'El error más común al usar un interlineal es tomar la glosa como si fuera el sentido escondido que la traducción no se atrevió a decir. La glosa es solo el sentido básico de la palabra de diccionario.',
        { h: 'Una palabra, dos sentidos' },
        'En Juan 3:8, la primera palabra es τὸ πνεῦμα, glosada «el espíritu». La Reina-Valera traduce «el viento». ¿Se equivocó? No: πνεῦμα significa «viento», «aliento» y «espíritu», y aquí Jesús habla de algo que sopla y cuyo sonido se oye. Al final del mismo versículo vuelve la palabra, ἐκ τοῦ Πνεύματος, y ahí la Reina-Valera dice «del Espíritu». Jesús juega con los dos sentidos: el Espíritu obra como el viento, que no se ve pero se nota.',
        'Si alguien dijera «en el griego dice “el espíritu sopla de donde quiere”, así que la Reina-Valera está mal», estaría usando la glosa en lugar del contexto. El interlineal pone una sola glosa por palabra para que la línea sea coherente, no para corregir a la traducción.',
        { h: 'Cómo usar bien la glosa' },
        'Usa la glosa para reconocer la palabra. Después pregunta: ¿qué sentidos tiene esta palabra en el Nuevo Testamento?, ¿cuál pide este contexto?, ¿cómo la tradujo la Reina-Valera aquí y en otros lugares? Las respuestas están en un buen diccionario, en la concordancia y en el propio texto, no en la glosa.',
        { ejercicio: {
          pregunta: 'Debajo de πνεῦμα en Juan 3:8 dice «espíritu», pero la Reina-Valera dice «viento». ¿Qué concluyes?',
          opciones: [
            { t: 'Que πνεῦμα tiene varios sentidos, y el contexto (algo que sopla y se oye) pide «viento».', ok: true, por_que: 'La glosa da un sentido básico; la traducción elige el que pide el contexto.' },
            { t: 'Que la Reina-Valera tradujo mal.', ok: false, por_que: 'Eligió bien: el versículo habla de algo que sopla.' },
            { t: 'Que el griego dice «espíritu» y hay que corregir la Biblia.', ok: false, por_que: 'La glosa no es más autorizada que la traducción.' }
          ],
          explicacion: 'La glosa ayuda a reconocer; el contexto decide el sentido.'
        } },
        { ir: { t: 'Abrir Juan 3 en el interlineal', a: 'interlineal/#jn/3/8', marco: true } }
      ],
      pensar: '«Así es todo aquel que es nacido del Espíritu» (Jn 3:8). No ves el viento, pero ves lo que hace. ¿Qué evidencias del obrar del Espíritu ves en tu vida?'
    },
    {
      id: 'etimologia', n: 'La falacia etimológica', ref: 'Romanos 1:16',
      visual: [
        V({ ref: 'Romanos 1:16', gr: 'οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον· δύναμις γὰρ Θεοῦ ἐστιν εἰς σωτηρίαν παντὶ τῷ πιστεύοντι, Ἰουδαίῳ τε πρῶτον καὶ Ἕλληνι.', tr: 'U gar epaisjýnomai to euangélion dýnamis gar Theú estin eis sōtērían pantí tō pisteúonti Iudaíō te prṓton kai Héllēni.', p: [{ gr: 'οὐ', tr: 'u', es: 'no' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'ἐπαισχύνομαι', tr: 'epaisjýnomai', es: 'avergonzarse' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'εὐαγγέλιον', tr: 'euangélion', es: 'evangelio' }, { gr: 'δύναμις', tr: 'dýnamis', es: 'poder' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'Θεοῦ', tr: 'Theú', es: 'de Dios' }, { gr: 'ἐστιν', tr: 'estin', es: 'ser' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'σωτηρίαν', tr: 'sōtērían', es: 'salvación' }, { gr: 'παντὶ', tr: 'pantí', es: 'a todo' }, { gr: 'τῷ', tr: 'tō', es: 'al' }, { gr: 'πιστεύοντι', tr: 'pisteúonti', es: 'creer' }, { gr: 'Ἰουδαίῳ', tr: 'Iudaíō', es: 'judío' }, { gr: 'τε', tr: 'te', es: 'y' }, { gr: 'πρῶτον', tr: 'prṓton', es: 'primero' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'Ἕλληνι', tr: 'Héllēni', es: 'a griego' }], rv: 'Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.' }),
        { tipo: 'tabla', titulo: 'Etimologías que engañan', tabla: {
          titulo: 'Lo que se oye en algunas prédicas y lo que dice el uso',
          cab: ['Palabra', 'Lo que se dice', 'Lo que dice el uso'],
          filas: [
            ['δύναμις', '«Dinamita»: el evangelio es explosivo', '«Poder», «fuerza», «milagro». La dinamita se inventó en 1867'],
            ['ἐκκλησία', '«Los llamados fuera» del mundo', 'Asamblea, reunión de un pueblo; Hechos 19:32 la usa para una multitud pagana'],
            ['ὑπηρέτης', '«Remero de abajo» en una galera', '«Servidor», «ayudante», «alguacil»'],
            ['μετάνοια', 'Solo «cambio de mente»', '«Arrepentimiento»: volverse de corazón, con frutos (Lc 3:8)']
          ],
          nota: 'La historia de una palabra puede ser interesante, pero su sentido lo da el uso en la época del autor.'
        } }
      ],
      texto: [
        'La falacia etimológica es creer que el sentido «verdadero» de una palabra es el de sus raíces o el de una palabra moderna que viene de ella. Es uno de los errores más comunes al predicar con el griego.',
        { h: 'Δύναμις no es dinamita' },
        'Seguramente has oído que en Romanos 1:16 el evangelio es «la dinamita de Dios». Es cierto que la palabra «dinamita» viene del griego δύναμις: Alfred Nobel la tomó de ahí en el siglo XIX. Pero Pablo no podía pensar en algo que no existía. Para él, δύναμις era «poder», la fuerza de Dios que salva. La palabra nueva salió de la vieja, no al revés. Además, la dinamita destruye; el poder de Dios en el evangelio da vida.',
        { h: 'Las raíces no mandan' },
        'Muchas palabras griegas son compuestas, y es tentador desarmarlas. Ἐκκλησία viene de ἐκ, «de, fuera», y καλέω, «llamar», pero en tiempos del Nuevo Testamento significaba simplemente asamblea, y Lucas la usa para la reunión alborotada del teatro de Éfeso (Hch 19:32). La iglesia sí es un pueblo llamado por Dios, pero eso lo enseñan otros pasajes, no la etimología de la palabra.',
        { h: 'Qué hacer' },
        'Para saber qué significa una palabra, mira cómo la usa el Nuevo Testamento: la ficha del interlineal te dice cuántas veces aparece; un buen diccionario te muestra sus usos; y el contexto decide. La etimología puede ilustrar, pero no puede decidir el sentido de un versículo.',
        { ejercicio: {
          pregunta: '¿Por qué no se puede decir que en Romanos 1:16 el evangelio es «la dinamita de Dios»?',
          opciones: [
            { t: 'Porque la dinamita se inventó siglos después; Pablo usaba δύναμις con el sentido de «poder».', ok: true, por_que: 'El sentido de una palabra se busca en su época, no en las palabras modernas que salieron de ella.' },
            { t: 'Porque δύναμις no tiene relación con «dinamita».', ok: false, por_que: 'Sí la tiene: «dinamita» viene de δύναμις. Pero la relación va del griego al español, no al revés.' },
            { t: 'Porque δύναμις significa «debilidad».', ok: false, por_que: 'Significa «poder», «fuerza».' }
          ],
          explicacion: 'La historia de una palabra no reemplaza su uso. Este error lo describe D. A. Carson en Exegetical Fallacies.'
        } }
      ],
      pensar: 'El evangelio es «poder de Dios para salvación a todo aquel que cree» (Ro 1:16). Ese poder no necesita adornos para impresionar. ¿Confías en el poder del mensaje mismo cuando hablas de Cristo?'
    },
    {
      id: 'todos', n: 'Todos los sentidos a la vez', ref: 'Juan 3:3',
      visual: [ V({ ref: 'Juan 3:3', gr: 'ἀπεκρίθη Ἰησοῦς καὶ εἶπεν αὐτῷ Ἀμὴν ἀμὴν λέγω σοι, ἐὰν μή τις γεννηθῇ ἄνωθεν, οὐ δύναται ἰδεῖν τὴν βασιλείαν τοῦ Θεοῦ.', tr: 'Apekríthē Iēsús kai eípen autṓ Amḗn amḗn légō soi eán mē tis gennēthḗ ánōthen u dýnatai ideín tēn basileían tu Theú.', p: [{ gr: 'ἀπεκρίθη', tr: 'apekríthē', es: 'responder' }, { gr: 'Ἰησοῦς', tr: 'Iēsús', es: 'Jesús' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'εἶπεν', tr: 'eípen', es: 'decir' }, { gr: 'αὐτῷ', tr: 'autṓ', es: 'a él' }, { gr: 'Ἀμὴν', tr: 'Amḗn', es: 'amén' }, { gr: 'ἀμὴν', tr: 'amḗn', es: 'amén' }, { gr: 'λέγω', tr: 'légō', es: 'decir' }, { gr: 'σοι', tr: 'soi', es: 'a ti' }, { gr: 'ἐὰν', tr: 'eán', es: 'si' }, { gr: 'μή', tr: 'mē', es: 'no' }, { gr: 'τις', tr: 'tis', es: 'alguien' }, { gr: 'γεννηθῇ', tr: 'gennēthḗ', es: 'engendrar' }, { gr: 'ἄνωθεν', tr: 'ánōthen', es: 'de arriba' }, { gr: 'οὐ', tr: 'u', es: 'no' }, { gr: 'δύναται', tr: 'dýnatai', es: 'poder' }, { gr: 'ἰδεῖν', tr: 'ideín', es: 'ver' }, { gr: 'τὴν', tr: 'tēn', es: 'el' }, { gr: 'βασιλείαν', tr: 'basileían', es: 'reino' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Θεοῦ', tr: 'Theú', es: 'Dios' }], rv: 'Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios.' }) ],
      texto: [
        'El tercer error es el contrario del primero: en lugar de quedarse con un solo sentido, cargar a la palabra con todos los sentidos que tiene en el diccionario, como si el autor los quisiera decir todos en cada versículo.',
        { h: 'Una palabra en un versículo' },
        'Una palabra puede tener muchos sentidos posibles, pero en una frase normalmente quiere decir uno. Si en Lucas 1:3 ἄνωθεν es «desde el principio», no hay que agregarle «de arriba» y «de nuevo». Leer todos los sentidos a la vez convierte una frase clara en un acertijo que el autor no escribió.',
        { h: 'Cuando el autor juega con la palabra' },
        'Hay excepciones, y Juan 3:3 es una de ellas. Jesús dice que hay que nacer ἄνωθεν, glosado «de arriba». La palabra significa «de arriba» y también «de nuevo». La Reina-Valera traduce «de nuevo», que es como lo entendió Nicodemo, porque pregunta cómo puede un hombre volver a nacer siendo viejo (Jn 3:4). Pero en el mismo capítulo, Juan usa ἄνωθεν para decir «de arriba» (Jn 3:31). Muchos comentaristas creen que Juan juega con los dos sentidos: el nuevo nacimiento es un nacer otra vez que viene de arriba, de Dios.',
        'La diferencia está en que aquí el contexto da pistas de los dos sentidos: la pregunta de Nicodemo y el uso del mismo capítulo. Un doble sentido se demuestra con el texto, no se supone en cada palabra.',
        { h: 'Una regla sencilla' },
        'Pregunta siempre: ¿qué sentido pide este contexto? Si el contexto da pistas claras de dos sentidos, puedes señalarlos. Si no, quédate con uno y deja los demás para otros versículos.',
        { ejercicio: {
          pregunta: 'Alguien explica que en cada versículo una palabra griega dice «todo lo que significa». ¿Qué le responderías?',
          opciones: [
            { t: 'Que en una frase la palabra suele tener un sentido, y que un doble sentido hay que mostrarlo con el contexto.', ok: true, por_que: 'Así se respeta lo que el autor quiso decir.' },
            { t: 'Que tiene razón, porque el griego es más rico que el español.', ok: false, por_que: 'La riqueza de una lengua no hace que cada palabra diga todo a la vez.' },
            { t: 'Que las palabras griegas no tienen más de un sentido.', ok: false, por_que: 'Muchas tienen varios; el contexto elige.' }
          ],
          explicacion: 'Elegir el sentido que pide el contexto es la regla; el juego de palabras es una excepción que el texto deja ver.'
        } },
        { ir: { t: 'Abrir Juan 3 en el interlineal', a: 'interlineal/#jn/3/3', marco: true } }
      ],
      pensar: 'Jesús dijo: «el que no naciere de nuevo, no puede ver el reino de Dios» (Jn 3:3). El nuevo nacimiento es obra de Dios. ¿Puedes contar cuándo y cómo naciste de nuevo?'
    },
    {
      id: 'aoristo', n: 'El aoristo no significa «una vez y para siempre»', ref: 'Juan 2:20',
      visual: [ V({ ref: 'Juan 2:20', gr: 'εἶπαν οὖν οἱ Ἰουδαῖοι Τεσσεράκοντα καὶ ἓξ ἔτεσιν οἰκοδομήθη ὁ ναὸς οὗτος, καὶ σὺ ἐν τρισὶν ἡμέραις ἐγερεῖς αὐτόν;', tr: 'Eípan un hoi Iudaíoi Tesserákonta kai hex étesin oikodomḗthē ho naós hútos kai sy en trisín hēmérais egereís autón.', p: [{ gr: 'εἶπαν', tr: 'eípan', es: 'decir' }, { gr: 'οὖν', tr: 'un', es: 'así que' }, { gr: 'οἱ', tr: 'hoi', es: 'los' }, { gr: 'Ἰουδαῖοι', tr: 'Iudaíoi', es: 'judíos' }, { gr: 'Τεσσεράκοντα', tr: 'Tesserákonta', es: 'cuarenta' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ἓξ', tr: 'hex', es: 'seis' }, { gr: 'ἔτεσιν', tr: 'étesin', es: 'a años' }, { gr: 'οἰκοδομήθη', tr: 'oikodomḗthē', es: 'edificar' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'ναὸς', tr: 'naós', es: 'templo' }, { gr: 'οὗτος', tr: 'hútos', es: 'este' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'σὺ', tr: 'sy', es: 'tú' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'τρισὶν', tr: 'trisín', es: 'tres' }, { gr: 'ἡμέραις', tr: 'hēmérais', es: 'días' }, { gr: 'ἐγερεῖς', tr: 'egereís', es: 'levantar' }, { gr: 'αὐτόν', tr: 'autón', es: 'lo' }], rv: 'Dijeron luego los judíos: En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás?' }), V({ ref: 'Romanos 3:23', gr: 'πάντες γὰρ ἥμαρτον καὶ ὑστεροῦνται τῆς δόξης τοῦ Θεοῦ,', tr: 'Pántes gar hḗmarton kai hysterúntai tēs dóxēs tu Theú.', p: [{ gr: 'πάντες', tr: 'pántes', es: 'todos' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'ἥμαρτον', tr: 'hḗmarton', es: 'pecar' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ὑστεροῦνται', tr: 'hysterúntai', es: 'faltar' }, { gr: 'τῆς', tr: 'tēs', es: 'de la' }, { gr: 'δόξης', tr: 'dóxēs', es: 'gloria' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Θεοῦ', tr: 'Theú', es: 'Dios' }], rv: 'por cuanto todos pecaron, y están destituidos de la gloria de Dios,' }) ],
      texto: [
        'Es frecuente oír que un verbo «está en aoristo, y eso significa que ocurrió una vez y para siempre». La frase suena erudita, pero no es lo que dice el aoristo.',
        { h: 'Lo que dice el aoristo' },
        'El aoristo mira la acción como un todo, sin detenerse en su duración ni en su repetición. Es como ver una película entera desde lejos, en lugar de mirar un fotograma. Puede referirse a algo instantáneo, a algo que duró años o a algo que se repitió muchas veces. Lo que fue en la realidad lo dicen el contexto y el sentido del verbo, no el aoristo solo.',
        { h: 'Cuarenta y seis años en aoristo' },
        'Mira Juan 2:20. Los judíos dicen que el templo οἰκοδομήθη, «fue edificado», en cuarenta y seis años. El verbo está en aoristo, y la obra duró casi medio siglo. El aoristo resume toda esa construcción como un hecho, sin hablar de su duración: la duración la dice la frase «en cuarenta y seis años».',
        'En Romanos 3:23, ἥμαρτον, «pecaron», también es aoristo. No quiere decir que cada persona pecó una sola vez, sino que resume la historia de pecado de toda la humanidad: todos pecaron. Y el verbo siguiente, ὑστεροῦνται, «están destituidos», está en presente: la consecuencia sigue.',
        { h: 'Cuidado al predicar' },
        'Hay acciones que sí ocurrieron una vez para siempre, como el sacrificio de Cristo (He 10:10 lo dice con la palabra ἐφάπαξ, «una vez para siempre»). Pero eso lo dice el texto con palabras, no el tiempo del verbo. Frank Stagg escribió un artículo famoso sobre este error, titulado «El aoristo maltratado» (1972).',
        { ejercicio: {
          pregunta: 'En Juan 2:20, οἰκοδομήθη está en aoristo y la construcción duró cuarenta y seis años. ¿Qué enseña eso?',
          opciones: [
            { t: 'Que el aoristo no dice cuánto duró una acción: la resume como un todo.', ok: true, por_que: 'La duración la da el contexto («en cuarenta y seis años»).' },
            { t: 'Que el templo se construyó en un instante.', ok: false, por_que: 'El mismo versículo dice que tomó cuarenta y seis años.' },
            { t: 'Que Juan usó mal el aoristo.', ok: false, por_que: 'Lo usó como se usaba: para mirar la obra completa.' }
          ],
          explicacion: 'El aoristo es el tiempo «normal» para narrar. No convierte una acción en única ni en definitiva por sí mismo.'
        } }
      ],
      pensar: '«Todos pecaron, y están destituidos de la gloria de Dios» (Ro 3:23). Y el versículo siguiente dice que somos justificados gratuitamente por su gracia (Ro 3:24). ¿Vives cada día descansando en esa gracia?'
    },
    {
      id: 'en-el-griego', n: '«En el griego dice…»', ref: 'Efesios 5:18',
      visual: [ V({ ref: 'Efesios 5:18', gr: 'καὶ μὴ μεθύσκεσθε οἴνῳ, ἐν ᾧ ἐστιν ἀσωτία, ἀλλὰ πληροῦσθε ἐν Πνεύματι,', tr: 'Kai mē methýskesthe oínō en hō estin asōtía allá plērústhe en Pneúmati.', p: [{ gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'μὴ', tr: 'mē', es: 'no' }, { gr: 'μεθύσκεσθε', tr: 'methýskesthe', es: 'embriagarse' }, { gr: 'οἴνῳ', tr: 'oínō', es: 'a vino' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'ᾧ', tr: 'hō', es: 'el cual' }, { gr: 'ἐστιν', tr: 'estin', es: 'ser' }, { gr: 'ἀσωτία', tr: 'asōtía', es: 'disolución' }, { gr: 'ἀλλὰ', tr: 'allá', es: 'pero' }, { gr: 'πληροῦσθε', tr: 'plērústhe', es: 'llenar' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'Πνεύματι', tr: 'Pneúmati', es: 'Espíritu' }], rv: 'No os embriaguéis con vino, en lo cual hay disolución; antes bien sed llenos del Espíritu,' }) ],
      texto: [
        'La frase «en el griego dice…» puede abrir una buena explicación o puede cerrar una discusión con una autoridad falsa. El interlineal ayuda a usarla bien, siempre que se respeten dos reglas: decir lo que el griego realmente dice, y no decir más de lo que dice.',
        { h: 'Un buen uso: Efesios 5:18' },
        'Mira el verbo πληροῦσθε, glosado «llenar». La morfología dice «pres. pas. imper. 2p»: presente, pasiva, imperativo, segunda persona plural. Las tres cosas importan. Es un mandato: «sed llenos»; es pasivo: no nos llenamos solos, nos deja llenar el Espíritu; y está en presente, que en imperativo suele mirar una acción que continúa. Por eso muchos maestros lo explican como «sean llenos continuamente». Esa explicación tiene base en la forma, y concuerda con lo que muestra Hechos: los mismos discípulos llenos en Pentecostés (Hch 2:4) fueron llenos otra vez (Hch 4:31).',
        { h: 'Un mal uso' },
        'El problema aparece cuando se le pide a la forma más de lo que da. Si alguien dijera «el presente griego prueba que hay que ser lleno exactamente cada día a cierta hora», estaría inventando. El presente da un matiz de continuidad; el resto, si es verdad, tiene que venir de otros textos.',
        { h: 'Antes de decir «en el griego dice…»' },
        'Pregúntate: ¿lo que voy a decir está en la glosa, en la morfología o en el diccionario?, ¿lo confirma el contexto?, ¿lo explicaría igual un comentario serio?, ¿la traducción lo deja ver de alguna forma? Si las respuestas son sí, puedes decirlo con sencillez. Si no, es mejor no decirlo.',
        { ejercicio: {
          pregunta: '¿Qué puedes afirmar con base en la forma de πληροῦσθε en Efesios 5:18?',
          opciones: [
            { t: 'Que es un mandato, que lo realiza otro (pasiva) y que mira una acción continua (presente).', ok: true, por_que: 'Todo eso está en la morfología: «pres. pas. imper. 2p».' },
            { t: 'Que hay que ser lleno una sola vez en la vida.', ok: false, por_que: 'El presente apunta más bien a lo continuo, y Hechos muestra llenuras repetidas.' },
            { t: 'Que el griego dice «llenar» y por eso no es un mandato.', ok: false, por_que: '«Llenar» es solo la glosa del lema; la forma es imperativa.' }
          ],
          explicacion: 'La morfología permite afirmar con seguridad lo que la forma dice, y obliga a no afirmar lo que no dice.'
        } },
        { ir: { t: 'Abrir Efesios 5 en el interlineal', a: 'interlineal/#ef/5/18', marco: true } }
      ],
      pensar: '«No os embriaguéis con vino, en lo cual hay disolución; antes bien sed llenos del Espíritu» (Ef 5:18). ¿Buscas cada día la plenitud del Espíritu, o te conformas con una experiencia del pasado?'
    },
    {
      id: 'un-dios', n: 'Juan 1:1 y el «un dios»', ref: 'Juan 1:1',
      visual: [ V({ ref: 'Juan 1:1', gr: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.', tr: 'En arjḗ ēn ho Lógos kai ho Lógos ēn pros ton Theón kai Theós ēn ho Lógos.', p: [{ gr: 'Ἐν', tr: 'En', es: 'en' }, { gr: 'ἀρχῇ', tr: 'arjḗ', es: 'principio' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'πρὸς', tr: 'pros', es: 'a' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'Θεόν', tr: 'Theón', es: 'Dios' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'Θεὸς', tr: 'Theós', es: 'Dios' }, { gr: 'ἦν', tr: 'ēn', es: 'ser' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'Λόγος', tr: 'Lógos', es: 'Verbo' }], rv: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' }), V({ ref: 'Juan 1:18', gr: 'Θεὸν οὐδεὶς ἑώρακεν πώποτε· μονογενὴς Θεὸς ὁ ὢν εἰς τὸν κόλπον τοῦ Πατρὸς, ἐκεῖνος ἐξηγήσατο.', tr: 'Theón udeís heṓraken pṓpote monogenḗs Theós ho ōn eis ton kólpon tu Patrós ekeínos exēgḗsato.', p: [{ gr: 'Θεὸν', tr: 'Theón', es: 'Dios' }, { gr: 'οὐδεὶς', tr: 'udeís', es: 'nadie' }, { gr: 'ἑώρακεν', tr: 'heṓraken', es: 'ver' }, { gr: 'πώποτε', tr: 'pṓpote', es: 'jamás' }, { gr: 'μονογενὴς', tr: 'monogenḗs', es: 'unigénito' }, { gr: 'Θεὸς', tr: 'Theós', es: 'Dios' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'ὢν', tr: 'ōn', es: 'ser' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'κόλπον', tr: 'kólpon', es: 'seno' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Πατρὸς', tr: 'Patrós', es: 'Padre' }, { gr: 'ἐκεῖνος', tr: 'ekeínos', es: 'aquel' }, { gr: 'ἐξηγήσατο', tr: 'exēgḗsato', es: 'contar' }], rv: 'A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer.' }) ],
      texto: [
        'Algunos grupos usan el griego para negar la divinidad de Cristo. El caso más conocido es el de la Traducción del Nuevo Mundo, la versión de los Testigos de Jehová, que en Juan 1:1 dice «la Palabra era un dios». El argumento es que Θεός, al final del versículo, no lleva artículo. El interlineal te deja ver el texto y responder con respeto y con datos.',
        { h: 'Por qué Θεός no lleva artículo' },
        'En la ruta II viste que en καὶ Θεὸς ἦν ὁ Λόγος el sujeto es el que lleva el artículo, ὁ Λόγος. Si Juan hubiera escrito también ὁ Θεός, los dos serían intercambiables, y la frase diría que el Verbo es toda la persona de Dios que acaba de nombrar, es decir, el Padre: «el Verbo era con Dios» y a la vez «era el mismo Dios con quien estaba». Juan evita eso. Sin el artículo, Θεός dice qué es el Verbo, su naturaleza: el Verbo era Dios, distinto del Padre y de la misma naturaleza.',
        { h: 'El mismo capítulo responde' },
        'En Juan 1, Θεός aparece sin artículo varias veces más: en el versículo 6, παρὰ Θεοῦ, «de parte de Dios»; en el 12, τέκνα Θεοῦ, «hijos de Dios»; en el 13, ἐκ Θεοῦ, «de Dios»; y en el 18, Θεὸν οὐδεὶς ἑώρακεν, «a Dios nadie le vio». En ninguno de esos versículos alguien traduce «un dios». Traducir así solo en el versículo 1 es una decisión doctrinal, no gramatical. Y el mismo Juan termina su evangelio con Tomás diciendo a Jesús ὁ Κύριός μου καὶ ὁ Θεός μου, «¡Señor mío, y Dios mío!» (Jn 20:28).',
        { posturas: {
          titulo: 'Dos lecturas de καὶ Θεὸς ἦν ὁ Λόγος',
          a: { n: 'El Verbo era Dios', t: 'La lectura de la iglesia desde el principio y de casi todas las traducciones: Θεός sin artículo describe la naturaleza del Verbo. Juan lo distingue del Padre («era con Dios») y lo identifica con Dios en su ser. Así lo leen también quienes estudian la gramática griega con independencia de cualquier iglesia.' },
          b: { n: 'El Verbo era «un dios»', t: 'La lectura de los Testigos de Jehová en su Traducción del Nuevo Mundo: sin artículo, Θεός sería indefinido, y Cristo sería un ser divino creado, inferior al Padre. Su enseñanza oficial lo identifica con el arcángel Miguel antes de nacer.' },
          c: 'La gramática no apoya la segunda lectura: el mismo capítulo usa Θεός sin artículo para el único Dios, y el griego no tiene artículo indefinido. Los miembros de ese grupo merecen respeto; su enseñanza sobre Cristo contradice el testimonio de Juan.'
        } },
        { ir: { t: 'Ver «Dios y hombre en una persona» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/' } }
      ],
      pensar: 'Juan escribió su evangelio «para que creáis que Jesús es el Cristo, el Hijo de Dios» (Jn 20:31). ¿Cómo responderías, con mansedumbre y con la Escritura, a alguien que te dice que Jesús no es Dios?'
    }
  ];

  const traduccion = [
    {
      id: 'comparar', n: 'Comparar con la Reina-Valera', ref: 'Romanos 12:1',
      visual: [ V({ ref: 'Romanos 12:1', gr: 'Παρακαλῶ οὖν ὑμᾶς, ἀδελφοί, διὰ τῶν οἰκτιρμῶν τοῦ Θεοῦ παραστῆσαι τὰ σώματα ὑμῶν θυσίαν ζῶσαν ἁγίαν τῷ Θεῷ εὐάρεστον, τὴν λογικὴν λατρείαν ὑμῶν·', tr: 'Parakalṓ un hymás adelfoí diá tōn oiktirmṓn tu Theú parastḗsai ta sṓmata hymṓn thysían zṓsan hagían tō Theṓ euáreston tēn logikḗn latreían hymṓn.', p: [{ gr: 'Παρακαλῶ', tr: 'Parakalṓ', es: 'exhortar' }, { gr: 'οὖν', tr: 'un', es: 'así que' }, { gr: 'ὑμᾶς', tr: 'hymás', es: 'os' }, { gr: 'ἀδελφοί', tr: 'adelfoí', es: 'hermanos' }, { gr: 'διὰ', tr: 'diá', es: 'por medio de' }, { gr: 'τῶν', tr: 'tōn', es: 'las' }, { gr: 'οἰκτιρμῶν', tr: 'oiktirmṓn', es: 'compasiones' }, { gr: 'τοῦ', tr: 'tu', es: 'del' }, { gr: 'Θεοῦ', tr: 'Theú', es: 'Dios' }, { gr: 'παραστῆσαι', tr: 'parastḗsai', es: 'presentar' }, { gr: 'τὰ', tr: 'ta', es: 'los' }, { gr: 'σώματα', tr: 'sṓmata', es: 'cuerpos' }, { gr: 'ὑμῶν', tr: 'hymṓn', es: 'de vosotros' }, { gr: 'θυσίαν', tr: 'thysían', es: 'sacrificio' }, { gr: 'ζῶσαν', tr: 'zṓsan', es: 'vivir' }, { gr: 'ἁγίαν', tr: 'hagían', es: 'santo' }, { gr: 'τῷ', tr: 'tō', es: 'al' }, { gr: 'Θεῷ', tr: 'Theṓ', es: 'Dios' }, { gr: 'εὐάρεστον', tr: 'euáreston', es: 'agradable' }, { gr: 'τὴν', tr: 'tēn', es: 'el' }, { gr: 'λογικὴν', tr: 'logikḗn', es: 'racional' }, { gr: 'λατρείαν', tr: 'latreían', es: 'culto' }, { gr: 'ὑμῶν', tr: 'hymṓn', es: 'de vosotros' }], rv: 'Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional.' }) ],
      texto: [
        'El interlineal da su mejor fruto cuando se lee junto a la traducción. Comparar es preguntar, palabra por palabra: ¿dónde está esto en la Reina-Valera?, ¿por qué lo tradujo así?, ¿qué otra traducción sería posible?',
        { h: 'Romanos 12:1' },
        'Recorre la línea con la Reina-Valera al lado. Παρακαλῶ es «exhortar»; la Reina-Valera dice «os ruego». El verbo tiene los dos matices: exhortar, animar y rogar. διὰ τῶν οἰκτιρμῶν τοῦ Θεοῦ es «por medio de las compasiones del Dios»: la Reina-Valera dice «por las misericordias de Dios», y el plural griego se mantiene. θυσίαν ζῶσαν ἁγίαν es «sacrificio, vivir, santo»: ζῶσαν es un participio, «viviente», y la Reina-Valera dice «en sacrificio vivo».',
        { h: 'Una palabra con dos traducciones posibles' },
        'Al final, τὴν λογικὴν λατρείαν: «el racional culto». Λογικός viene de λόγος y puede significar «racional», «razonable» o «espiritual», en el sentido de un culto con la mente y no solo con ritos. La Reina-Valera dice «vuestro culto racional»; otras traducciones dicen «culto espiritual». Las dos captan algo verdadero: Pablo pide una entrega total, consciente y del corazón, en lugar de los sacrificios de animales.',
        { h: 'Lo que la comparación enseña' },
        'Al comparar descubres tres cosas: que la traducción es fiel; que a veces el griego tiene matices que una sola palabra española no puede cubrir; y que las diferencias entre traducciones suelen ser elecciones legítimas, no errores. Esto te da confianza en tu Biblia y te ayuda a explicarla mejor.',
        { ejercicio: {
          pregunta: 'Una traducción dice «culto racional» y otra «culto espiritual» en Romanos 12:1. ¿Qué concluyes con el interlineal?',
          opciones: [
            { t: 'Que λογικός tiene más de un matiz, y las dos traducciones eligen uno legítimo.', ok: true, por_que: 'La palabra significa «racional» y se usaba para un culto interior, no solo de ritos.' },
            { t: 'Que una de las dos cambió el texto.', ok: false, por_que: 'Las dos traducen la misma palabra griega.' },
            { t: 'Que el griego no dice nada sobre el culto.', ok: false, por_que: 'Dice λατρείαν, «culto», con su adjetivo.' }
          ],
          explicacion: 'Comparar traducciones con el interlineal muestra las decisiones del traductor y la riqueza de la palabra.'
        } },
        { ir: { t: 'Abrir Romanos 12 en el interlineal', a: 'interlineal/#ro/12/1', marco: true } }
      ],
      pensar: '«Que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios» (Ro 12:1). ¿Qué parte de tu vida todavía no has puesto sobre el altar?'
    },
    {
      id: 'semitismos', n: 'El griego con acento hebreo', ref: 'Lucas 2:1',
      visual: [
        V({ ref: 'Lucas 2:1', gr: 'Ἐγένετο δὲ ἐν ταῖς ἡμέραις ἐκείναις ἐξῆλθεν δόγμα παρὰ Καίσαρος Αὐγούστου ἀπογράφεσθαι πᾶσαν τὴν οἰκουμένην.', tr: 'Egéneto de en tais hēmérais ekeínais exḗlthen dógma pará Kaísaros Augústu apográfesthai pásan tēn oikuménēn.', p: [{ gr: 'Ἐγένετο', tr: 'Egéneto', es: 'llegar a ser' }, { gr: 'δὲ', tr: 'de', es: 'pero' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'ταῖς', tr: 'tais', es: 'los' }, { gr: 'ἡμέραις', tr: 'hēmérais', es: 'días' }, { gr: 'ἐκείναις', tr: 'ekeínais', es: 'aquellos' }, { gr: 'ἐξῆλθεν', tr: 'exḗlthen', es: 'salir' }, { gr: 'δόγμα', tr: 'dógma', es: 'decreto' }, { gr: 'παρὰ', tr: 'pará', es: 'de parte de' }, { gr: 'Καίσαρος', tr: 'Kaísaros', es: 'César' }, { gr: 'Αὐγούστου', tr: 'Augústu', es: 'Augusto' }, { gr: 'ἀπογράφεσθαι', tr: 'apográfesthai', es: 'empadronar' }, { gr: 'πᾶσαν', tr: 'pásan', es: 'todo' }, { gr: 'τὴν', tr: 'tēn', es: 'el' }, { gr: 'οἰκουμένην', tr: 'oikuménēn', es: 'mundo habitado' }], rv: 'Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado.' }),
        { tipo: 'tabla', titulo: 'Semitismos frecuentes', tabla: {
          titulo: 'Giros hebreos en el griego del Nuevo Testamento',
          cab: ['Griego', 'Glosas', 'Qué significa'],
          filas: [
            ['ἐγένετο δέ…', 'llegar a ser · pero', '«Aconteció que…»: comienzo de un relato, como el hebreo וַיְהִי'],
            ['ἀποκριθεὶς εἶπεν', 'responder · decir', '«Respondiendo, dijo»: dos verbos para un solo hecho'],
            ['υἱοὶ τοῦ φωτός', 'hijos · de la · luz', 'Los que pertenecen a la luz; ver Lucas 16:8'],
            ['ἀμὴν ἀμὴν λέγω', 'amén · amén · decir', '«De cierto, de cierto os digo»: la palabra hebrea amén'],
            ['πρὸ προσώπου', 'antes de · rostro', '«Delante de», literalmente «ante el rostro»']
          ],
          nota: 'Los semitismos son más comunes en los evangelios y en Apocalipsis, y menos en Lucas, Hechos y Hebreos.'
        } }
      ],
      texto: [
        'El Nuevo Testamento se escribió en griego común, el que se hablaba en todo el imperio, pero lo escribieron judíos (salvo, probablemente, Lucas) que conocían el Antiguo Testamento de memoria y pensaban también en hebreo y arameo. Por eso su griego tiene giros que vienen de esas lenguas: los semitismos.',
        { h: 'Lucas 2:1' },
        'El relato de la Navidad empieza con Ἐγένετο δέ, glosado «llegar a ser · pero». Un griego no empezaba así sus relatos; un lector del Antiguo Testamento, sí: es el «Y aconteció» de tantos relatos hebreos, que en la traducción griega del Antiguo Testamento se decía con estas mismas palabras. La Reina-Valera lo traduce como siempre: «Aconteció en aquellos días». Lucas, que escribía un griego cuidado, usa este giro a propósito para que su relato suene como las historias de la Escritura.',
        { h: 'Por qué importa' },
        'Si lees las glosas sin conocer estos giros, algunas líneas parecen extrañas: «respondiendo, dijo», cuando nadie había preguntado; «hijos de la luz», cuando no se habla de familia. No son errores ni sentidos ocultos: son maneras de hablar. El buen intérprete los reconoce y los lee como un judío del siglo I.',
        'También pasa al revés: el Nuevo Testamento cita el Antiguo muchas veces, a veces de la traducción griega que usaban los judíos de habla griega (la Septuaginta) y a veces traduciendo directamente del hebreo. Cuando una cita no es idéntica a tu Antiguo Testamento, la razón suele estar ahí.',
        { ejercicio: {
          pregunta: 'En el interlineal lees ἀποκριθεὶς εἶπεν, «responder · decir», en un pasaje donde nadie ha hecho una pregunta. ¿Qué pasa?',
          opciones: [
            { t: 'Es un giro semítico para introducir lo que alguien dice; no supone una pregunta previa.', ok: true, por_que: 'Muchas veces significa simplemente «tomó la palabra y dijo».' },
            { t: 'Es un error del texto griego.', ok: false, por_que: 'Es una manera normal de hablar en el griego de los evangelios.' },
            { t: 'Significa que hubo una pregunta que se perdió.', ok: false, por_que: 'No hay que suponer textos perdidos: es un giro.' }
          ],
          explicacion: 'Reconocer los semitismos evita leer en las glosas cosas que el autor no quiso decir.'
        } },
        { ir: { t: 'Abrir Lucas 2 en el interlineal', a: 'interlineal/#lc/2/1', marco: true } }
      ],
      pensar: 'Lucas cuenta el nacimiento de Jesús con el lenguaje de las historias del Antiguo Testamento. ¿Qué te enseña eso sobre la unidad de toda la Escritura?'
    },
    {
      id: 'variantes', n: 'Cuando la Reina-Valera traduce otro texto griego', ref: '1 Juan 5:7-8',
      visual: [
        V({ ref: '1 Juan 5:7', gr: 'ὅτι τρεῖς εἰσιν οἱ μαρτυροῦντες,', tr: 'Hóti treis eisin hoi martyrúntes.', p: [{ gr: 'ὅτι', tr: 'hóti', es: 'que' }, { gr: 'τρεῖς', tr: 'treis', es: 'tres' }, { gr: 'εἰσιν', tr: 'eisin', es: 'ser' }, { gr: 'οἱ', tr: 'hoi', es: 'los' }, { gr: 'μαρτυροῦντες', tr: 'martyrúntes', es: 'dar testimonio' }], rv: 'Porque tres son los que dan testimonio en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno.' }),
        V({ ref: '1 Juan 5:8', gr: 'τὸ Πνεῦμα καὶ τὸ ὕδωρ καὶ τὸ αἷμα, καὶ οἱ τρεῖς εἰς τὸ ἕν εἰσιν.', tr: 'To Pneúma kai to hýdōr kai to haíma kai hoi treis eis to hen eisin.', p: [{ gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'Πνεῦμα', tr: 'Pneúma', es: 'Espíritu' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'ὕδωρ', tr: 'hýdōr', es: 'agua' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'τὸ', tr: 'to', es: 'la' }, { gr: 'αἷμα', tr: 'haíma', es: 'sangre' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'οἱ', tr: 'hoi', es: 'los' }, { gr: 'τρεῖς', tr: 'treis', es: 'tres' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'τὸ', tr: 'to', es: 'lo' }, { gr: 'ἕν', tr: 'hen', es: 'uno' }, { gr: 'εἰσιν', tr: 'eisin', es: 'ser' }], rv: 'Y tres son los que dan testimonio en la tierra: el Espíritu, el agua y la sangre; y estos tres concuerdan.' }),
        { tipo: 'tabla', titulo: 'Versículos que faltan', tabla: {
          titulo: 'Versículos de la Reina-Valera que no están en Nestle 1904',
          cab: ['Libro', 'Versículos'],
          filas: [
            ['Mateo', '17:21; 18:11; 23:14'],
            ['Marcos', '7:16; 9:44; 9:46; 11:26; 15:28'],
            ['Lucas', '17:36; 23:17'],
            ['Hechos', '8:37; 15:34; 24:7; 28:29'],
            ['Romanos', '16:24']
          ],
          nota: 'Hechos 19:41 y 2 Corintios 13:14 sí están: Nestle los numera dentro del versículo anterior.'
        } }
      ],
      texto: [
        'El interlineal usa el griego de Nestle 1904, y la Reina-Valera se tradujo del Textus Receptus, el texto griego que se imprimió desde 1516 con los manuscritos que había a mano. Los dos coinciden en la inmensa mayoría de las palabras, pero no en todas. Este recurso no esconde las diferencias: las muestra y las explica.',
        { h: 'Lo que vas a encontrar' },
        'En quince lugares, la Reina-Valera tiene un versículo que Nestle 1904 no trae: la página lo muestra con una nota en lugar del griego. En algunos pasajes famosos, el versículo existe pero dice algo distinto, y la página pone una nota debajo: el final del Padre Nuestro (Mt 6:13), el ángel del estanque (Jn 5:3-4), 1 Timoteo 3:16 y 1 Juan 5:7-8, entre otros. Y hay dos pasajes largos que Nestle imprime entre corchetes o paréntesis: el final de Marcos (Mr 16:9-20) y la mujer adúltera (Jn 7:53–8:11).',
        { h: '1 Juan 5:7-8' },
        'Mira el panel. En Nestle 1904, el versículo 7 dice solo ὅτι τρεῖς εἰσιν οἱ μαρτυροῦντες, «porque tres son los que dan testimonio», y el 8 sigue: el Espíritu, el agua y la sangre. La Reina-Valera agrega las palabras sobre el Padre, el Verbo y el Espíritu Santo en el cielo. Esas palabras no aparecen en ningún manuscrito griego anterior al siglo X, y entraron al texto impreso en el siglo XVI. La doctrina de la Trinidad no depende de ellas: se enseña en muchos otros pasajes, como Mateo 28:19.',
        { posturas: {
          titulo: '¿Qué texto griego seguir?',
          a: { n: 'El texto crítico', t: 'Compara todos los manuscritos y da más peso a los más antiguos (papiros del siglo II y III, grandes códices del siglo IV). Es la base de Nestle 1904 y de la mayoría de las traducciones modernas.' },
          b: { n: 'El Textus Receptus o el texto mayoritario', t: 'Sigue el texto que la iglesia leyó durante siglos, o el que traen la mayoría de los manuscritos, casi todos medievales. Es la base de la Reina-Valera y de otras traducciones clásicas.' },
          c: 'Las dos posturas las sostienen cristianos que creen en la inspiración de la Escritura. Las diferencias afectan a una pequeña parte del texto, y ninguna doctrina de la fe depende de un pasaje discutido.'
        } },
        { ir: { t: 'Ver «Pasajes discutidos» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/7' } }
      ],
      pensar: 'Dios preservó su Palabra en miles de manuscritos, y la abundancia de copias permite saber lo que escribieron los apóstoles. ¿Cómo fortalece eso tu confianza al leer tu Biblia?'
    },
    {
      id: 'kyrios', n: '«Señor»: κύριος y el nombre de Dios', ref: 'Romanos 10:13',
      visual: [ V({ ref: 'Romanos 10:13', gr: 'Πᾶς γὰρ ὃς ἂν ἐπικαλέσηται τὸ ὄνομα Κυρίου σωθήσεται.', tr: 'Pas gar hos an epikalésētai to ónoma Kyríu sōthḗsetai.', p: [{ gr: 'Πᾶς', tr: 'Pas', es: 'todo' }, { gr: 'γὰρ', tr: 'gar', es: 'porque' }, { gr: 'ὃς', tr: 'hos', es: 'que' }, { gr: 'ἂν', tr: 'an', es: '–' }, { gr: 'ἐπικαλέσηται', tr: 'epikalésētai', es: 'invocar' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'ὄνομα', tr: 'ónoma', es: 'nombre' }, { gr: 'Κυρίου', tr: 'Kyríu', es: 'de Señor' }, { gr: 'σωθήσεται', tr: 'sōthḗsetai', es: 'salvar' }], rv: 'porque todo aquel que invocare el nombre del Señor, será salvo.' }) ],
      texto: [
        'En el Antiguo Testamento, la Reina-Valera escribe «Jehová» donde el hebreo tiene el nombre de cuatro letras. En el Nuevo Testamento ese nombre no aparece: en su lugar está κύριος, «Señor». El interlineal permite ver qué hicieron los apóstoles con el nombre de Dios.',
        { h: 'De Joel a Romanos' },
        'Pablo cita en Romanos 10:13 la promesa de Joel, «todo aquel que invocare el nombre de Jehová será salvo» (Jl 2:32). En el griego de Romanos dice τὸ ὄνομα Κυρίου, «el nombre de Señor». Los judíos de habla griega ya leían κύριος donde estaba el nombre de Dios, y los apóstoles siguieron esa costumbre.',
        { ir: { t: 'Ver Joel 2:32 en el Interlineal hebreo', a: '../../interlineal-hebreo/#jl/3/5' } },
        { h: 'Lo que hace Pablo' },
        'Lee el contexto. En Romanos 10:9, Pablo dice que hay que confesar «que Jesús es el Señor», κύριον Ἰησοῦν. Cuatro versículos después, el «Señor» cuyo nombre se invoca para ser salvo es el mismo. Pablo aplica a Jesús un texto que en Joel habla de Jehová. Esto ocurre muchas veces en el Nuevo Testamento: los apóstoles reconocían en Jesús al Señor del Antiguo Testamento.',
        { h: 'Cuidado con «Señor»' },
        'No todo κύριος en el Nuevo Testamento se refiere a Dios. La misma palabra se usa para un amo, un dueño o como trato respetuoso, «señor». En Juan 4:11, la samaritana le dice a Jesús κύριε, «Señor», sin saber todavía quién es. Como siempre, el contexto decide.',
        { ejercicio: {
          pregunta: 'En Romanos 10:13 Pablo cita a Joel. ¿Qué palabra griega ocupa el lugar del nombre de Dios del hebreo?',
          opciones: [
            { t: 'κύριος, «Señor», que en este contexto se refiere a Jesús.', ok: true, por_que: 'El versículo 9 llama «Señor» a Jesús; Pablo le aplica la promesa de Joel.' },
            { t: 'Θεός, «Dios».', ok: false, por_que: 'En la cita aparece Κυρίου, no Θεοῦ.' },
            { t: 'Una transliteración del nombre hebreo.', ok: false, por_que: 'El Nuevo Testamento no transcribe el nombre; usa κύριος.' }
          ],
          explicacion: 'Seguir el nombre de Dios del Antiguo al Nuevo Testamento muestra cómo los apóstoles confesaban a Jesús como Señor.'
        } },
        { ir: { t: 'Abrir Romanos 10 en el interlineal', a: 'interlineal/#ro/10/13', marco: true } }
      ],
      pensar: '«Si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo» (Ro 10:9). ¿Qué significa en tu vida diaria que Jesús sea tu Señor?'
    },
    {
      id: 'metodo', n: 'Un método en cinco pasos', ref: '2 Timoteo 2:15',
      visual: [
        V({ ref: '2 Timoteo 2:15', gr: 'σπούδασον σεαυτὸν δόκιμον παραστῆσαι τῷ Θεῷ, ἐργάτην ἀνεπαίσχυντον, ὀρθοτομοῦντα τὸν λόγον τῆς ἀληθείας.', tr: 'Spúdason seautón dókimon parastḗsai tō Theṓ ergátēn anepaísjynton orthotomúnta ton lógon tēs alētheías.', p: [{ gr: 'σπούδασον', tr: 'spúdason', es: 'procurar con diligencia' }, { gr: 'σεαυτὸν', tr: 'seautón', es: 'ti mismo' }, { gr: 'δόκιμον', tr: 'dókimon', es: 'aprobado' }, { gr: 'παραστῆσαι', tr: 'parastḗsai', es: 'presentar' }, { gr: 'τῷ', tr: 'tō', es: 'al' }, { gr: 'Θεῷ', tr: 'Theṓ', es: 'Dios' }, { gr: 'ἐργάτην', tr: 'ergátēn', es: 'obrero' }, { gr: 'ἀνεπαίσχυντον', tr: 'anepaísjynton', es: 'que no tiene de qué avergonzarse' }, { gr: 'ὀρθοτομοῦντα', tr: 'orthotomúnta', es: 'trazar rectamente' }, { gr: 'τὸν', tr: 'ton', es: 'la' }, { gr: 'λόγον', tr: 'lógon', es: 'palabra' }, { gr: 'τῆς', tr: 'tēs', es: 'de la' }, { gr: 'ἀληθείας', tr: 'alētheías', es: 'verdad' }], rv: 'Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.' }),
        { tipo: 'tabla', titulo: 'Los cinco pasos', tabla: {
          titulo: 'Cómo usar el interlineal al estudiar un pasaje',
          cab: ['Paso', 'Qué hacer'],
          filas: [
            ['1. Leer', 'Lee el pasaje completo en la Reina-Valera, con su contexto'],
            ['2. Ubicar', 'Abre el interlineal y busca dónde está cada palabra española en la línea griega'],
            ['3. Analizar', 'Toca las palabras importantes: su forma, su lema, cuántas veces aparece'],
            ['4. Comparar', 'Mira cómo se traduce la misma palabra en otros pasajes y en otras traducciones'],
            ['5. Volver', 'Vuelve a la traducción y resume lo que entendiste, sin decir más de lo que dice el texto']
          ],
          nota: 'Los pasos 3 y 4 se apoyan en Vocabulario y gramática básica del griego del NT.'
        } }
      ],
      texto: [
        'Pablo le pide a Timoteo que sea un obrero que no tiene de qué avergonzarse, ὀρθοτομοῦντα τὸν λόγον τῆς ἀληθείας, glosado «trazar rectamente · la · palabra · de la · verdad». La imagen es la de un camino o un surco bien trazado: manejar la Palabra con rectitud. El interlineal es una herramienta para eso, si se usa con método.',
        { h: 'Los cinco pasos' },
        'Primero, lee el pasaje en la Reina-Valera, completo y con su contexto: el interlineal no se abre en frío. Segundo, abre el interlineal y ubica cada palabra española en la línea griega. Tercero, toca las palabras importantes y mira su forma, su palabra de diccionario y su frecuencia. Cuarto, compara: cómo se traduce esa palabra en otros versículos, qué dicen otras traducciones, qué explica un buen diccionario. Quinto, vuelve a la traducción y resume lo que entendiste.',
        { h: 'Un ejemplo breve' },
        'En 2 Timoteo 2:15, el paso 3 muestra que σπούδασον, «procurar con diligencia», es un imperativo aoristo: una orden directa. El paso 4 muestra que el verbo aparece once veces en el Nuevo Testamento con el sentido de «esforzarse», «apresurarse». El paso 5 te devuelve a la Reina-Valera, «procura con diligencia», ahora con más peso: Pablo no sugiere, ordena esforzarse.',
        { h: 'Lo que el método protege' },
        'El método te protege de los errores de la ruta III: no tomarás la glosa por el «verdadero sentido», no desarmarás palabras en sus raíces, no cargarás un versículo con todos los sentidos del diccionario ni le pedirás al aoristo lo que no dice. Y te deja algo mejor: un conocimiento más profundo de tu Biblia en español.',
        { ejercicio: {
          pregunta: '¿Por qué el método empieza leyendo la Reina-Valera y no el interlineal?',
          opciones: [
            { t: 'Porque el sentido de las palabras lo da el contexto, y el contexto se ve mejor en una traducción completa.', ok: true, por_que: 'El interlineal mira de cerca; la traducción da la visión de conjunto.' },
            { t: 'Porque el interlineal es menos fiel que la traducción.', ok: false, por_que: 'No es menos fiel; es otra clase de herramienta.' },
            { t: 'Porque el orden no importa.', ok: false, por_que: 'Importa: empezar por las palabras sueltas lleva a perder el contexto.' }
          ],
          explicacion: 'Del conjunto a la palabra, y de la palabra otra vez al conjunto.'
        } },
        { ir: { t: 'Ver Cómo interpretar la Biblia', a: '../../interpretar-biblia/' } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad» (2 Ti 2:15). ¿Qué tiempo le das cada semana al estudio cuidadoso de la Escritura?'
    }
  ];

  const taller = [
    {
      id: 'padre-nuestro', n: 'El Padre Nuestro', ref: 'Mateo 6:9-13',
      visual: [ V({ ref: 'Mateo 6:9', gr: 'οὕτως οὖν προσεύχεσθε ὑμεῖς Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς· Ἁγιασθήτω τὸ ὄνομά σου·', tr: 'Hútōs un proseújesthe hymeís Páter hēmṓn ho en tois uranoís Hagiasthḗtō to ónomá su.', p: [{ gr: 'οὕτως', tr: 'hútōs', es: 'así' }, { gr: 'οὖν', tr: 'un', es: 'así que' }, { gr: 'προσεύχεσθε', tr: 'proseújesthe', es: 'orar' }, { gr: 'ὑμεῖς', tr: 'hymeís', es: 'vosotros' }, { gr: 'Πάτερ', tr: 'Páter', es: 'Padre' }, { gr: 'ἡμῶν', tr: 'hēmṓn', es: 'de nosotros' }, { gr: 'ὁ', tr: 'ho', es: 'el' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'τοῖς', tr: 'tois', es: 'los' }, { gr: 'οὐρανοῖς', tr: 'uranoís', es: 'cielos' }, { gr: 'Ἁγιασθήτω', tr: 'Hagiasthḗtō', es: 'santificar' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'ὄνομά', tr: 'ónomá', es: 'nombre' }, { gr: 'σου', tr: 'su', es: 'de ti' }], rv: 'Vosotros, pues, oraréis así: Padre nuestro que estás en los cielos, santificado sea tu nombre.' }), V({ ref: 'Mateo 6:11', gr: 'Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον·', tr: 'Ton árton hēmṓn ton epiúsion dos hēmín sḗmeron.', p: [{ gr: 'Τὸν', tr: 'Ton', es: 'el' }, { gr: 'ἄρτον', tr: 'árton', es: 'pan' }, { gr: 'ἡμῶν', tr: 'hēmṓn', es: 'de nosotros' }, { gr: 'τὸν', tr: 'ton', es: 'el' }, { gr: 'ἐπιούσιον', tr: 'epiúsion', es: 'de cada día' }, { gr: 'δὸς', tr: 'dos', es: 'dar' }, { gr: 'ἡμῖν', tr: 'hēmín', es: 'a nosotros' }, { gr: 'σήμερον', tr: 'sḗmeron', es: 'hoy' }], rv: 'El pan nuestro de cada día, dánoslo hoy.' }), V({ ref: 'Mateo 6:13', gr: 'καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ.', tr: 'Kai mē eisenénkēs hēmás eis peirasmón allá rhýsai hēmás apó tu ponērú.', p: [{ gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'μὴ', tr: 'mē', es: 'no' }, { gr: 'εἰσενέγκῃς', tr: 'eisenénkēs', es: 'meter' }, { gr: 'ἡμᾶς', tr: 'hēmás', es: 'nos' }, { gr: 'εἰς', tr: 'eis', es: 'a' }, { gr: 'πειρασμόν', tr: 'peirasmón', es: 'tentación' }, { gr: 'ἀλλὰ', tr: 'allá', es: 'pero' }, { gr: 'ῥῦσαι', tr: 'rhýsai', es: 'librar' }, { gr: 'ἡμᾶς', tr: 'hēmás', es: 'nos' }, { gr: 'ἀπὸ', tr: 'apó', es: 'de' }, { gr: 'τοῦ', tr: 'tu', es: 'el' }, { gr: 'πονηροῦ', tr: 'ponērú', es: 'malo' }], rv: 'Y no nos metas en tentación, mas líbranos del mal; porque tuyo es el reino, y el poder, y la gloria, por todos los siglos. Amén.' }) ],
      texto: [
        'El Padre Nuestro es la oración más conocida del mundo. Leerla en el interlineal la vuelve a hacer nueva.',
        { ir: { t: 'Abrir Mateo 6:9 en el interlineal', a: 'interlineal/#mt/6/9', marco: true } },
        { h: 'Mateo 6:9' },
        'La oración empieza con Πάτερ ἡμῶν, «Padre · de nosotros». Πάτερ está en vocativo, el caso con que se habla a alguien; y ἡμῶν, «de nosotros», es plural: aun quien ora solo, ora como parte de una familia. Después vienen tres imperativos en aoristo de tercera persona: Ἁγιασθήτω, «santificar» (sea santificado), ἐλθάτω, «venga», y γενηθήτω, «hágase». En español no tenemos imperativos de tercera persona; por eso la traducción dice «santificado sea», «venga».',
        { h: 'Mateo 6:11' },
        'El pan es τὸν ἐπιούσιον, glosado «de cada día». La palabra ἐπιούσιος aparece solo aquí y en Lucas 11:3, y casi en ningún otro texto griego. Por eso se discute su sentido exacto: «de cada día», «necesario» o «del día que viene». Todas las opciones apuntan a lo mismo: depender de Dios para lo de hoy. Es un buen ejemplo de humildad ante el texto: cuando una palabra es rara, no hay que afirmar más de lo que se sabe.',
        { h: 'Mateo 6:13' },
        'Mira el último panel y la nota de la página: en Nestle 1904 la oración termina con ἀπὸ τοῦ πονηροῦ, «del malo» o «del mal». La doxología «porque tuyo es el reino, y el poder, y la gloria» no está en los manuscritos más antiguos; la traen muchos manuscritos posteriores y la Reina-Valera. Sus palabras se parecen a la alabanza de David en 1 Crónicas 29:11, y la iglesia las usó desde muy temprano para cerrar la oración.',
        { ejercicio: {
          pregunta: '¿Qué indica que ἡμῶν, en Πάτερ ἡμῶν, sea plural?',
          opciones: [
            { t: 'Que se ora como parte de la familia de Dios, aunque se ore a solas.', ok: true, por_que: 'Jesús enseña a decir «nuestro», no «mío».' },
            { t: 'Que hay varios padres.', ok: false, por_que: 'Πάτερ es singular; el plural es «de nosotros».' },
            { t: 'Que la oración solo se puede decir en grupo.', ok: false, por_que: 'Jesús enseñó también a orar en lo secreto (Mt 6:6).' }
          ],
          explicacion: 'El número del pronombre, que la glosa muestra con «de nosotros», dice mucho de la oración cristiana.'
        } }
      ],
      pensar: 'La oración empieza con el nombre de Dios, su reino y su voluntad, y solo después pide el pan (Mt 6:9-11). ¿Qué ocupa el primer lugar en tus oraciones?'
    },
    {
      id: 'ro8', n: 'Romanos 8:1', ref: 'Romanos 8:1',
      visual: [ V({ ref: 'Romanos 8:1', gr: 'Οὐδὲν ἄρα νῦν κατάκριμα τοῖς ἐν Χριστῷ Ἰησοῦ.', tr: 'Udén ára nyn katákrima tois en Jristṓ Iēsú.', p: [{ gr: 'Οὐδὲν', tr: 'Udén', es: 'ninguna' }, { gr: 'ἄρα', tr: 'ára', es: 'así que' }, { gr: 'νῦν', tr: 'nyn', es: 'ahora' }, { gr: 'κατάκριμα', tr: 'katákrima', es: 'condenación' }, { gr: 'τοῖς', tr: 'tois', es: 'a los' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'Χριστῷ', tr: 'Jristṓ', es: 'Cristo' }, { gr: 'Ἰησοῦ', tr: 'Iēsú', es: 'Jesús' }], rv: 'Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús, los que no andan conforme a la carne, sino conforme al Espíritu.' }) ],
      texto: [
        'Romanos 8 empieza con una de las frases más consoladoras de la Biblia. El interlineal deja ver su fuerza y, de paso, una diferencia de texto.',
        { ir: { t: 'Abrir Romanos 8:1 en el interlineal', a: 'interlineal/#ro/8/1', marco: true } },
        { h: 'Palabra por palabra' },
        'Οὐδὲν ἄρα νῦν κατάκριμα: «ninguna · así que · ahora · condenación». El griego pone primero Οὐδέν, «ninguna», para darle todo el peso: ¡ninguna! Ἄρα saca la conclusión de lo que Pablo venía diciendo en los capítulos 5 a 7. Νῦν, «ahora», marca el cambio: lo que antes era condena, ahora no lo es. Κατάκριμα, «condenación», es la sentencia del juez. Y el griego no tiene el verbo «hay»: la frase es más tajante sin él.',
        'Después, τοῖς ἐν Χριστῷ Ἰησοῦ, «a los · en · Cristo · Jesús». El artículo τοῖς convierte la frase en un grupo de personas: «los que están en Cristo Jesús». No dice «los que se portan bien», sino los que están unidos a Cristo.',
        { h: 'La diferencia de texto' },
        'La nota de la página avisa que la Reina-Valera agrega aquí «los que no andan conforme a la carne, sino conforme al Espíritu». Esas palabras están en el versículo 4 en todos los manuscritos, y en el versículo 1 solo en manuscritos posteriores. La enseñanza no cambia: Romanos 8:4 dice lo mismo. Pero en el versículo 1 Pablo deja la promesa limpia: ninguna condenación para los que están en Cristo, y después explica cómo viven.',
        { ejercicio: {
          pregunta: '¿Por qué Οὐδέν va al principio de Romanos 8:1?',
          opciones: [
            { t: 'Para darle énfasis: lo primero que Pablo quiere que oigas es «ninguna».', ok: true, por_que: 'En griego, lo que va primero suele llevar el peso de la frase.' },
            { t: 'Porque en griego la negación siempre va primero.', ok: false, por_que: 'No siempre; aquí es una elección del autor.' },
            { t: 'Porque es el sujeto del verbo «hay».', ok: false, por_que: 'El griego ni siquiera tiene el verbo; Οὐδέν acompaña a κατάκριμα.' }
          ],
          explicacion: 'El orden de las palabras en griego da énfasis. Leerlo así hace sentir la fuerza del versículo.'
        } }
      ],
      pensar: '«Ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). ¿Hay alguna culpa que sigues cargando aunque Cristo ya la llevó?'
    },
    {
      id: 'fil2', n: 'Filipenses 2:6-7', ref: 'Filipenses 2:6-7',
      visual: [ V({ ref: 'Filipenses 2:6', gr: 'ὃς ἐν μορφῇ Θεοῦ ὑπάρχων οὐχ ἁρπαγμὸν ἡγήσατο τὸ εἶναι ἴσα Θεῷ,', tr: 'Hos en morfḗ Theú hypárjōn uj harpagmón hēgḗsato to eínai ísa Theṓ.', p: [{ gr: 'ὃς', tr: 'hos', es: 'que' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'μορφῇ', tr: 'morfḗ', es: 'forma' }, { gr: 'Θεοῦ', tr: 'Theú', es: 'de Dios' }, { gr: 'ὑπάρχων', tr: 'hypárjōn', es: 'ser' }, { gr: 'οὐχ', tr: 'uj', es: 'no' }, { gr: 'ἁρπαγμὸν', tr: 'harpagmón', es: 'aferrarse' }, { gr: 'ἡγήσατο', tr: 'hēgḗsato', es: 'considerar' }, { gr: 'τὸ', tr: 'to', es: 'el' }, { gr: 'εἶναι', tr: 'eínai', es: 'ser' }, { gr: 'ἴσα', tr: 'ísa', es: 'iguales' }, { gr: 'Θεῷ', tr: 'Theṓ', es: 'a Dios' }], rv: 'el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse,' }), V({ ref: 'Filipenses 2:7', gr: 'ἀλλὰ ἑαυτὸν ἐκένωσεν μορφὴν δούλου λαβών, ἐν ὁμοιώματι ἀνθρώπων γενόμενος· καὶ σχήματι εὑρεθεὶς ὡς ἄνθρωπος', tr: 'Allá heautón ekénōsen morfḗn dúlu labṓn en homoiṓmati anthrṓpōn genómenos kai sjḗmati heuretheís hōs ánthrōpos.', p: [{ gr: 'ἀλλὰ', tr: 'allá', es: 'pero' }, { gr: 'ἑαυτὸν', tr: 'heautón', es: 'sí mismo' }, { gr: 'ἐκένωσεν', tr: 'ekénōsen', es: 'vaciar' }, { gr: 'μορφὴν', tr: 'morfḗn', es: 'forma' }, { gr: 'δούλου', tr: 'dúlu', es: 'de siervo' }, { gr: 'λαβών', tr: 'labṓn', es: 'tomar' }, { gr: 'ἐν', tr: 'en', es: 'en' }, { gr: 'ὁμοιώματι', tr: 'homoiṓmati', es: 'semejanza' }, { gr: 'ἀνθρώπων', tr: 'anthrṓpōn', es: 'de seres humanos' }, { gr: 'γενόμενος', tr: 'genómenos', es: 'llegar a ser' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'σχήματι', tr: 'sjḗmati', es: 'a apariencia' }, { gr: 'εὑρεθεὶς', tr: 'heuretheís', es: 'hallar' }, { gr: 'ὡς', tr: 'hōs', es: 'como' }, { gr: 'ἄνθρωπος', tr: 'ánthrōpos', es: 'ser humano' }], rv: 'sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres;' }) ],
      texto: [
        'Filipenses 2:6-11 es uno de los textos más profundos sobre Cristo. Muchos lo consideran un himno de la iglesia primitiva. Aquí miramos sus dos primeros versículos.',
        { ir: { t: 'Abrir Filipenses 2:6 en el interlineal', a: 'interlineal/#fil/2/6', marco: true } },
        { h: 'En forma de Dios' },
        'ἐν μορφῇ Θεοῦ ὑπάρχων: «en · forma · de Dios · ser». Μορφή no es una apariencia exterior, sino la forma que expresa lo que algo es. Ὑπάρχων es un participio presente: Cristo existía, y sigue existiendo, en forma de Dios. Después, τὸ εἶναι ἴσα Θεῷ, «el ser iguales a Dios»: el artículo con el infinitivo, como en Filipenses 1:21. Cristo no consideró ese ser igual a Dios como algo a qué aferrarse.',
        { h: 'Se despojó a sí mismo' },
        'En el versículo 7, ἑαυτὸν ἐκένωσεν: «sí mismo · vaciar». De este verbo viene la palabra kénosis. ¿De qué se vació? El mismo versículo responde con dos participios: μορφὴν δούλου λαβών, «forma · de siervo · tomar», y ἐν ὁμοιώματι ἀνθρώπων γενόμενος, «en · semejanza · de seres humanos · llegar a ser». Cristo no se vació restando su divinidad, sino sumando la humanidad y la condición de siervo: dejó su gloria y sus privilegios, no lo que él es.',
        { posturas: {
          titulo: '¿De qué se despojó Cristo?',
          a: { n: 'De su gloria y del uso independiente de sus atributos', t: 'Cristo siguió siendo plenamente Dios, pero renunció a la gloria que tenía con el Padre (Jn 17:5) y vivió como hombre dependiente del Padre y del Espíritu. Es la lectura de la iglesia desde los concilios y de las Asambleas de Dios.' },
          b: { n: 'De algunos atributos divinos', t: 'Algunos teólogos del siglo XIX enseñaron que Cristo dejó de lado atributos como la omnisciencia o la omnipresencia mientras estuvo en la tierra.' },
          c: 'El texto no dice que perdió nada de su ser: lo explica con lo que tomó, la forma de siervo. Un Dios que dejara de tener sus atributos dejaría de ser Dios.'
        } },
        { ir: { t: 'Ver «Dios y hombre en una persona» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/' } }
      ],
      pensar: 'Pablo presenta la humildad de Cristo como ejemplo: «Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús» (Fil 2:5). ¿En qué relación concreta te está pidiendo Dios que tomes forma de siervo?'
    },
    {
      id: 'he11', n: 'Hebreos 11:1', ref: 'Hebreos 11:1',
      visual: [ V({ ref: 'Hebreos 11:1', gr: 'Ἔστιν δὲ πίστις ἐλπιζομένων ὑπόστασις, πραγμάτων ἔλεγχος οὐ βλεπομένων.', tr: 'Éstin de pístis elpizoménōn hypóstasis pragmátōn élenjos u blepoménōn.', p: [{ gr: 'Ἔστιν', tr: 'Éstin', es: 'ser' }, { gr: 'δὲ', tr: 'de', es: 'pero' }, { gr: 'πίστις', tr: 'pístis', es: 'fe' }, { gr: 'ἐλπιζομένων', tr: 'elpizoménōn', es: 'de esperar' }, { gr: 'ὑπόστασις', tr: 'hypóstasis', es: 'sustancia' }, { gr: 'πραγμάτων', tr: 'pragmátōn', es: 'de asuntos' }, { gr: 'ἔλεγχος', tr: 'élenjos', es: 'convicción' }, { gr: 'οὐ', tr: 'u', es: 'no' }, { gr: 'βλεπομένων', tr: 'blepoménōn', es: 'de ver' }], rv: 'Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.' }) ],
      texto: [
        'Hebreos 11:1 es lo más parecido a una definición de la fe que tiene la Biblia. En griego es una frase corta y densa, y el interlineal permite verla pieza por pieza.',
        { ir: { t: 'Abrir Hebreos 11:1 en el interlineal', a: 'interlineal/#he/11/1', marco: true } },
        { h: 'Pieza por pieza' },
        'Ἔστιν δὲ πίστις: «ser · pero · fe». Después, dos frases paralelas. ἐλπιζομένων ὑπόστασις: «de esperar · sustancia». Ἐλπιζομένων es un participio pasivo en genitivo plural, «de las cosas que se esperan». Ὑπόστασις significa literalmente «lo que está debajo», el fundamento, la sustancia que da realidad a algo; en los documentos comerciales de la época se usaba también para un título de propiedad. La Reina-Valera dice «la certeza de lo que se espera».',
        'πραγμάτων ἔλεγχος οὐ βλεπομένων: «de asuntos · convicción · no · de ver». Ἔλεγχος es una prueba que convence, como en un juicio; βλεπομένων es otro participio pasivo: «de las cosas que no se ven». La Reina-Valera dice «la convicción de lo que no se ve».',
        { h: 'Lo que dice la forma' },
        'Fíjate en que los dos participios son pasivos y presentes: las cosas que se esperan y las que no se ven son realidades que están ahí, aunque todavía no las tenemos ni las vemos. La fe no las inventa: las recibe como seguras. El resto del capítulo lo muestra en la vida de Abel, Noé, Abraham, Moisés y muchos otros.',
        { ejercicio: {
          pregunta: 'La glosa de ὑπόστασις es «sustancia». ¿Qué aporta esa palabra a la definición de la fe?',
          opciones: [
            { t: 'Que la fe da un fundamento firme a lo que se espera, como algo que ya es real.', ok: true, por_que: 'Ὑπόστασις es lo que sostiene y da realidad; de ahí «certeza».' },
            { t: 'Que la fe es un sentimiento sin base.', ok: false, por_que: 'Es lo contrario: un fundamento.' },
            { t: 'Que la fe es una sustancia material.', ok: false, por_que: 'La glosa «sustancia» no habla de materia; el contexto la explica.' }
          ],
          explicacion: 'La glosa ayuda a reconocer la palabra; su uso y el contexto explican por qué la Reina-Valera dice «certeza».'
        } }
      ],
      pensar: '«Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve» (He 11:1). ¿Qué promesa de Dios, que todavía no ves, estás llamado a sostener con fe?'
    },
    {
      id: '1jn1', n: '1 Juan 1:9', ref: '1 Juan 1:9',
      visual: [ V({ ref: '1 Juan 1:9', gr: 'ἐὰν ὁμολογῶμεν τὰς ἁμαρτίας ἡμῶν, πιστός ἐστιν καὶ δίκαιος, ἵνα ἀφῇ ἡμῖν τὰς ἁμαρτίας καὶ καθαρίσῃ ἡμᾶς ἀπὸ πάσης ἀδικίας.', tr: 'Eán homologṓmen tas hamartías hēmṓn pistós estin kai díkaios hína afḗ hēmín tas hamartías kai katharísē hēmás apó pásēs adikías.', p: [{ gr: 'ἐὰν', tr: 'eán', es: 'si' }, { gr: 'ὁμολογῶμεν', tr: 'homologṓmen', es: 'confesar' }, { gr: 'τὰς', tr: 'tas', es: 'los' }, { gr: 'ἁμαρτίας', tr: 'hamartías', es: 'pecados' }, { gr: 'ἡμῶν', tr: 'hēmṓn', es: 'de nosotros' }, { gr: 'πιστός', tr: 'pistós', es: 'fiel' }, { gr: 'ἐστιν', tr: 'estin', es: 'ser' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'δίκαιος', tr: 'díkaios', es: 'justo' }, { gr: 'ἵνα', tr: 'hína', es: 'para que' }, { gr: 'ἀφῇ', tr: 'afḗ', es: 'perdonar' }, { gr: 'ἡμῖν', tr: 'hēmín', es: 'a nosotros' }, { gr: 'τὰς', tr: 'tas', es: 'los' }, { gr: 'ἁμαρτίας', tr: 'hamartías', es: 'pecados' }, { gr: 'καὶ', tr: 'kai', es: 'y' }, { gr: 'καθαρίσῃ', tr: 'katharísē', es: 'limpiar' }, { gr: 'ἡμᾶς', tr: 'hēmás', es: 'nos' }, { gr: 'ἀπὸ', tr: 'apó', es: 'de' }, { gr: 'πάσης', tr: 'pásēs', es: 'toda' }, { gr: 'ἀδικίας', tr: 'adikías', es: 'injusticia' }], rv: 'Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.' }) ],
      texto: [
        '1 Juan 1:9 es la promesa a la que vuelve el creyente cada vez que peca. El interlineal muestra cómo está armada.',
        { ir: { t: 'Abrir 1 Juan 1:9 en el interlineal', a: 'interlineal/#1jn/1/9', marco: true } },
        { h: 'Si confesamos' },
        'ἐὰν ὁμολογῶμεν τὰς ἁμαρτίας ἡμῶν: «si · confesar · los · pecados · de nosotros». Ὁμολογῶμεν es presente de subjuntivo: el subjuntivo va con ἐάν, «si», y el presente mira una confesión que se repite cada vez que hace falta. El verbo viene de ὁμός, «mismo», y λέγω, «decir»; pero, como viste en la ruta III, el sentido lo da el uso: «confesar», reconocer abiertamente. Y el objeto es plural, τὰς ἁμαρτίας: no una confesión general, sino de los pecados concretos.',
        { h: 'Él es fiel y justo' },
        'πιστός ἐστιν καὶ δίκαιος: «fiel · ser · y · justo». Dios perdona porque es fiel a su promesa y justo, porque el pecado ya fue pagado por Cristo (1 Jn 2:2). Después, ἵνα ἀφῇ ἡμῖν τὰς ἁμαρτίας: «para que · perdonar · a nosotros · los · pecados». Ἀφῇ es aoristo de subjuntivo de ἀφίημι, «dejar, soltar, perdonar»: el perdón suelta la deuda. Y καθαρίσῃ ἡμᾶς ἀπὸ πάσης ἀδικίας, «limpiar · nos · de · toda · injusticia»: no solo de los pecados confesados, sino de toda.',
        { h: 'Una frase completa' },
        'Fíjate en el dativo ἡμῖν, «a nosotros»: el perdón se da a personas. La glosa lo muestra con «a»; la Reina-Valera lo integra en «perdonar nuestros pecados». Comparar las dos líneas permite ver qué hace cada palabra.',
        { ejercicio: {
          pregunta: '¿Qué sugiere que ὁμολογῶμεν esté en presente?',
          opciones: [
            { t: 'Que la confesión es una práctica que se repite en la vida del creyente.', ok: true, por_que: 'El presente mira una acción continua o habitual.' },
            { t: 'Que basta confesar una vez en la vida.', ok: false, por_que: 'Eso no lo dice el presente; el contexto habla de andar en luz cada día.' },
            { t: 'Que Dios perdona solo si se confiesa en voz alta.', ok: false, por_que: 'El tiempo del verbo no dice nada sobre la voz alta.' }
          ],
          explicacion: 'La forma del verbo acompaña lo que dice todo el pasaje: andar en luz y confesar cuando pecamos.'
        } },
        { h: 'Cómo seguir' },
        'Con este recurso tienes las herramientas para leer el Nuevo Testamento de cerca: el alfabeto, el vocabulario, la gramática y el interlineal. Usa el interlineal cada vez que estudies un pasaje: una palabra por día, en voz alta, comparando siempre con la traducción.',
        { ir: { t: 'Abrir el interlineal', a: 'interlineal/', marco: true } }
      ],
      pensar: '«Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9). ¿Hay algo que necesitas confesar hoy para vivir en esa limpieza?'
    }
  ];

  delete window.__INTG;
  window.RUTA_DATA = {
    titulo: 'Interlineal griego–español (NT)',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto griego: Nuevo Testamento de Eberhard Nestle (1904), dominio público, según la edición de biblicalhumanities.org, con su morfología, lemas y números de Strong (CC0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    volver: { t: 'Volver al interlineal', a: 'interlineal/' },
    rutas: [
      { id: 'que-es', grupo: 'Interlineal', n: 'I. Qué es un interlineal', info: 'Cómo está hecho, qué puede y qué no puede hacer, y cómo usar la página', estaciones: queEs },
      { id: 'leer', grupo: 'Interlineal', n: 'II. Cómo leer una línea', info: 'Orden, artículo, casos, verbo, participio, partículas y morfología', estaciones: leer },
      { id: 'errores', grupo: 'Interlineal', n: 'III. Errores comunes', info: 'Glosa y sentido, etimología, todos los sentidos, el aoristo, «en el griego dice» y Juan 1:1', estaciones: errores },
      { id: 'traduccion', grupo: 'Interlineal', n: 'IV. Del interlineal a la traducción', info: 'Comparar, semitismos, variantes del texto, κύριος y un método en cinco pasos', estaciones: traduccion },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes con el interlineal', estaciones: taller }
    ]
  };
})();
