/* ==========================================================
   Recursos Bíblicos — Interlineal hebreo–español (AT) · contenido de las rutas (parte 1: rutas I y II)
   FUENTE de public/apps/interlineal-hebreo/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/interlineal_citas.py
   Marcas (dos arrobas y luego): libro/cap/vv (RV 1960), wlc:libro/cap/vv (hebreo sin acentos),
   wlcp:libro/cap/v (palabras), int:libro/cap/v (palabras con transliteración y glosa del interlineal),
   inttr:libro/cap/v (transliteración del versículo). Las marcas hebreas usan la numeración hebrea.
   Pronunciación y transliteración: las de El alfabeto hebreo. Formas verbales: «perfecto (qatal)» e
   «imperfecto (yiqtol)». El nombre de cuatro letras se translitera Adonái y se traduce Jehová.
   ========================================================== */
(() => {
  const V = (ref, titulo) => ({ tipo: 'hebreo', titulo: titulo || ref.titulo, ref: ref.ref, he: ref.he, tr: ref.tr, palabras: ref.p, rv: ref.rv });
  const GN11 = { titulo: 'Génesis 1:1 en el interlineal', ref: 'Génesis 1:1', he: '@@wlc:gn/1/1', tr: '@@inttr:gn/1/1', p: '@@int:gn/1/1', rv: '@@gn/1/1' };
  const GN12 = { titulo: 'Génesis 1:2 en el interlineal', ref: 'Génesis 1:2', he: '@@wlc:gn/1/2', tr: '@@inttr:gn/1/2', p: '@@int:gn/1/2', rv: '@@gn/1/2' };
  const GN13 = { titulo: 'Génesis 1:3 en el interlineal', ref: 'Génesis 1:3', he: '@@wlc:gn/1/3', tr: '@@inttr:gn/1/3', p: '@@int:gn/1/3', rv: '@@gn/1/3' };
  const GN121 = { titulo: 'Génesis 12:1 en el interlineal', ref: 'Génesis 12:1', he: '@@wlc:gn/12/1', tr: '@@inttr:gn/12/1', p: '@@int:gn/12/1', rv: '@@gn/12/1' };
  const SAL231 = { titulo: 'Salmo 23:1 en el interlineal', ref: 'Salmo 23:1', he: '@@wlc:sal/23/1', tr: '@@inttr:sal/23/1', p: '@@int:sal/23/1', rv: '@@sal/23/1' };
  const NEH88 = { titulo: 'Nehemías 8:8 en el interlineal', ref: 'Nehemías 8:8', he: '@@wlc:neh/8/8', tr: '@@inttr:neh/8/8', p: '@@int:neh/8/8', rv: '@@neh/8/8' };
  const EX202 = { titulo: 'Éxodo 20:2 en el interlineal', ref: 'Éxodo 20:2', he: '@@wlc:ex/20/2', tr: '@@inttr:ex/20/2', p: '@@int:ex/20/2', rv: '@@ex/20/2' };
  window.__INT = { V, GN11, GN12, GN13, GN121, SAL231 };

  const queEs = [
    {
      id: 'puente', n: 'Un puente entre dos lenguas', ref: 'Nehemías 8:8',
      visual: [ V(NEH88) ],
      texto: [
        'Un interlineal es un texto bíblico en su lengua original con una ayuda debajo de cada palabra. En este recurso, esa lengua es el hebreo del Antiguo Testamento, y debajo de cada palabra hebrea van su pronunciación y una glosa en español: el sentido básico de esa palabra. El nombre viene de ahí: la ayuda va «entre las líneas» del texto.',
        'Mira el panel. Es Nehemías 8:8, el versículo en que los levitas leían la ley delante del pueblo que había vuelto del exilio. Arriba está el hebreo, que se lee de derecha a izquierda. En la lista de palabras, cada una lleva su transliteración y su glosa. Abajo está la Reina-Valera 1960. Compara las tres cosas: el hebreo dice lo que dice, la glosa te ayuda a reconocer cada palabra y la traducción lo dice en buen español.',
        { h: 'Para qué sirve' },
        'El interlineal sirve para ver con tus propios ojos qué palabra hebrea está detrás de una palabra de tu Biblia. Sirve para notar que una misma palabra se traduce de varias maneras, para reconocer las palabras que ya aprendiste en el vocabulario y para seguir un comentario que cita el hebreo. Es una herramienta para mirar el texto de cerca.',
        { h: 'Para qué no sirve' },
        'El interlineal no reemplaza a una traducción. Leer las glosas una tras otra no da el sentido del versículo, porque el hebreo y el español ordenan las palabras de otra manera y dicen las cosas con otros giros. En este recurso vas a aprender a leer la línea de glosas, a evitar los errores más comunes y a volver siempre a la traducción con más entendimiento, no con menos confianza.',
        'Los levitas «leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Ese es el propósito del interlineal: ayudarte a entender lo que lees, no darte un texto nuevo.',
        { ir: { t: 'Abrir el interlineal en Nehemías 8:8', a: 'interlineal/#neh/8/8', marco: true } }
      ],
      pensar: 'Nehemías cuenta que el pueblo lloraba al oír la ley y que después hizo gran alegría porque había entendido las palabras (Neh 8:9-12). ¿Qué cambia en tu vida cuando entiendes un pasaje que antes solo leías?'
    },
    {
      id: 'como-esta-hecho', n: 'Cómo está hecho este interlineal', ref: 'Salmo 12:6',
      visual: [
        { tipo: 'tabla', titulo: 'Las capas de cada palabra', tabla: {
          titulo: 'Lo que ves debajo de cada palabra hebrea',
          cab: ['Capa', 'De dónde viene', 'Qué te dice'],
          filas: [
            ['El hebreo', 'Códice de Leningrado (año 1008), en la edición de Open Scriptures', 'Las consonantes y las vocales que los masoretas copiaron'],
            ['La transliteración', 'Calculada con las vocales y los acentos del códice', 'Cómo se pronuncia, con la pronunciación israelí moderna'],
            ['La glosa', 'Escrita para este sitio, una por cada una de las 8.590 palabras de diccionario', 'El sentido básico de la palabra, con sus prefijos y sufijos'],
            ['La morfología', 'Open Scriptures Hebrew Bible (OSHB)', 'Qué clase de palabra es y qué forma tiene'],
            ['La ficha', 'El léxico de Strong y la morfología', 'Las partes de la palabra, su lema y cuántas veces aparece']
          ],
          nota: 'Son 305.507 palabras hebreas en los 39 libros. La RV 1960 va debajo de cada versículo.'
        } }
      ],
      texto: [
        'Antes de usar una herramienta conviene saber cómo está hecha. Este interlineal tiene cinco capas, y cada una viene de una fuente distinta.',
        { h: 'El texto hebreo' },
        'El hebreo es el del Códice de Leningrado, el manuscrito completo más antiguo de la Biblia hebrea, copiado hacia el año 1008. Es el mismo texto que usan casi todas las Biblias hebreas impresas y que el sitio ya usa en El alfabeto hebreo y en el vocabulario. En De la Biblia a nosotros puedes ver cómo llegó hasta nosotros.',
        { ir: { t: 'Ver «El texto del Antiguo Testamento» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/' } },
        { h: 'La morfología' },
        'Cada palabra está analizada por el proyecto Open Scriptures Hebrew Bible: qué prefijos tiene, cuál es su palabra de diccionario (el lema), qué clase de palabra es y en qué forma está. Ese análisis lo hicieron especialistas y es de uso libre.',
        { h: 'La glosa' },
        'La glosa en español se escribió para este sitio: una por cada lema, a partir del léxico de Strong, y con las 751 palabras del vocabulario como base. Después, la página arma la glosa de cada palabra con sus piezas: si la palabra tiene la conjunción «y», el artículo o un posesivo, la glosa los muestra. Por eso es una glosa por lema y no una traducción de cada versículo. Los verbos quedan en infinitivo («crear», «decir»), y la forma verbal se lee en la fila de morfología y en la ficha.',
        'Esta decisión tiene una ventaja: la glosa es coherente en toda la Biblia, y puedes comprobar que la misma palabra hebrea lleva siempre la misma glosa. También tiene un límite: una palabra con varios sentidos muestra solo el básico. Lo que dice en cada versículo lo dice el contexto, y eso lo verás en la ruta III.',
        { ejercicio: {
          pregunta: 'Debajo de בָּרָא en Génesis 1:1 dice «crear», y no «creó». ¿Por qué?',
          opciones: [
            { t: 'Porque el interlineal da la glosa del lema, y los verbos quedan en infinitivo.', ok: true, por_que: 'La forma («perfecto, 3.ª persona masculina singular») está en la fila de morfología y en la ficha.' },
            { t: 'Porque en hebreo ese verbo está en infinitivo.', ok: false, por_que: 'No. בָּרָא es un perfecto (qatal): «creó». El infinitivo es solo la forma de citar la glosa.' },
            { t: 'Porque el hebreo no distingue pasado de futuro.', ok: false, por_que: 'El hebreo sí distingue formas verbales; las verás en la ruta II.' }
          ],
          explicacion: 'Glosa por lema: el sentido básico de la palabra de diccionario. La forma concreta se lee en la morfología.'
        } }
      ],
      pensar: '«Las palabras de Jehová son palabras limpias, como plata refinada en horno de tierra, purificada siete veces» (Sal 12:6). ¿Qué te dice el cuidado con que el texto fue copiado durante siglos acerca del valor que tiene la Palabra?'
    },
    {
      id: 'traducciones', n: 'Interlineal, traducción literal y traducción dinámica', ref: 'Génesis 1:1',
      visual: [
        V(GN11),
        { tipo: 'tabla', titulo: 'Tres maneras de pasar al español', tabla: {
          titulo: 'Génesis 1:1, de lo más literal a lo más libre',
          cab: ['Tipo', 'Cómo se lee', 'Qué gana y qué pierde'],
          filas: [
            ['Glosas del interlineal', 'en principio · crear · Dios · [obj.] · los cielos · y [obj.] · la tierra', 'Muestra cada palabra; no es español'],
            ['Traducción por equivalencia formal', 'En el principio creó Dios los cielos y la tierra.', 'Sigue de cerca las palabras y el orden, en buen español'],
            ['Paráfrasis', 'Al comienzo de todo, Dios hizo el universo entero.', 'Fácil de leer; se aleja de las palabras del texto']
          ],
          nota: 'La segunda fila es la Reina-Valera 1960. La tercera es un ejemplo hecho para esta estación.'
        } }
      ],
      texto: [
        'Entre el hebreo y tu Biblia hay un trabajo de traducción, y no todas las traducciones lo hacen igual. Conviene ubicar al interlineal en ese mapa.',
        { h: 'Del más literal al más libre' },
        'En un extremo está el interlineal: una glosa debajo de cada palabra, en el orden del hebreo. Es lo más cercano al texto, pero no se puede leer como español. Después vienen las traducciones por equivalencia formal, que siguen de cerca las palabras del original y las ponen en buen español; la Reina-Valera pertenece a esta familia. Más allá están las traducciones por equivalencia dinámica, que buscan decir el mismo sentido con las palabras que usaría hoy un lector, y en el otro extremo las paráfrasis, que explican con libertad.',
        'Mira la tabla del panel. En Génesis 1:1, la Reina-Valera casi coincide con las glosas: solo cambia el orden del verbo y del sujeto («creó Dios») y omite la palabra אֵת, que el hebreo usa para marcar el complemento directo y que el español no necesita. Hay versículos en que la distancia es mucho mayor, porque el hebreo usa giros que en español no se entienden palabra por palabra.',
        { h: 'Cada una sirve para algo' },
        'Para estudiar a fondo conviene una traducción formal, como la Reina-Valera; para leer de corrido, una más dinámica puede ayudar; y para ver qué hay detrás de una palabra, el interlineal. Ninguna reemplaza a las otras. Usar el interlineal no significa desconfiar de la traducción: significa conocer mejor por qué tradujo lo que tradujo.',
        { ejercicio: {
          pregunta: 'En Génesis 1:1, ¿qué palabra hebrea no aparece en la Reina-Valera?',
          opciones: [
            { t: 'אֵת, la marca del complemento directo.', ok: true, por_que: 'El hebreo la pone delante de un complemento directo definido; el español no tiene una palabra equivalente.' },
            { t: 'אֱלֹהִים, «Dios».', ok: false, por_que: 'Sí aparece: «creó Dios».' },
            { t: 'בְּרֵאשִׁית, «en el principio».', ok: false, por_que: 'Sí aparece, al comienzo del versículo.' }
          ],
          explicacion: 'Una traducción no deja de ser fiel por omitir una palabra que el español no necesita: el sentido está completo.'
        } },
        { ir: { t: 'Abrir Génesis 1 en el interlineal', a: 'interlineal/#gn/1/1', marco: true } }
      ],
      pensar: 'La Reina-Valera es el fruto del trabajo de muchas personas que estudiaron el hebreo para que tú pudieras leer la Biblia en tu lengua. ¿Cómo puede el interlineal ayudarte a agradecer y a valorar mejor tu traducción?'
    },
    {
      id: 'limites', n: 'Lo que un interlineal no puede hacer', ref: 'Génesis 12:1',
      visual: [ V(GN121) ],
      texto: [
        'Un interlineal es honesto con las palabras, pero tiene límites que conviene conocer antes de empezar.',
        { h: 'No da el orden del español' },
        'El hebreo suele poner el verbo primero y el sujeto después: «y decir Jehová a Abram». La Reina-Valera lo ordena: «Pero Jehová había dicho a Abram». La glosa no puede hacer ese trabajo, porque se queda debajo de cada palabra.',
        { h: 'No da el tiempo del verbo' },
        'En este interlineal, los verbos van en infinitivo. Que un verbo se traduzca «dijo», «había dicho» o «dirá» depende de su forma y del contexto. En Génesis 12:1, la Reina-Valera traduce «había dicho», porque entiende que el llamado de Abram ocurrió antes de lo que cuenta el capítulo anterior. Esa decisión la toma el traductor mirando todo el relato, no la palabra sola.',
        { h: 'No da los giros' },
        'Mira la glosa «ir a ti» debajo de לֶךְ־לְךָ. Palabra por palabra es «ve, a ti» o «ve para ti»; en español se dice «vete». El hebreo usa muchos giros así, y la glosa los muestra como son, sin explicarlos. En la ruta IV verás varios.',
        { h: 'No elige el sentido' },
        'Una palabra puede tener varios sentidos, y la glosa muestra solo el básico. El sentido en cada versículo lo da el contexto, y eso exige leer todo el pasaje.',
        { ejercicio: {
          pregunta: 'Debajo de וַיֹּאמֶר dice «y decir», pero la Reina-Valera traduce «había dicho». ¿Cuál es la conclusión correcta?',
          opciones: [
            { t: 'La traducción eligió el tiempo según la forma del verbo y el contexto del relato.', ok: true, por_que: 'El infinitivo es solo la glosa del lema; el tiempo en español es una decisión de traducción.' },
            { t: 'La Reina-Valera cambió el texto hebreo.', ok: false, por_que: 'No lo cambió: tradujo una forma verbal que la glosa no muestra.' },
            { t: 'El hebreo dice «decir» y por eso hay que leer «decir».', ok: false, por_que: '«Decir» no es una oración en español; es la palabra de diccionario.' }
          ],
          explicacion: 'Lo que la glosa no muestra (tiempo, orden, giros) lo resuelve la traducción. Por eso el interlineal se usa junto a ella.'
        } }
      ],
      pensar: 'Dios llamó a Abram a salir de su tierra sin decirle adónde (He 11:8). ¿Qué te enseña la obediencia de Abram sobre cómo recibir una palabra de Dios que no entiendes del todo?'
    },
    {
      id: 'usar', n: 'Cómo usar la página del interlineal', ref: 'Éxodo 20:2',
      visual: [
        V(EX202),
        { tipo: 'tabla', titulo: 'Los controles', tabla: {
          titulo: 'Qué hace cada control de la página',
          cab: ['Control', 'Qué hace'],
          filas: [
            ['‹ Libro · Capítulo ›', 'Elige libro y capítulo; las flechas pasan al capítulo anterior o siguiente'],
            ['Transliteración', 'Muestra u oculta la pronunciación debajo de cada palabra'],
            ['Glosa', 'Muestra u oculta el sentido en español'],
            ['Morfología', 'Muestra la forma de cada palabra, abreviada (por ejemplo, «qal perf. 3ms»)'],
            ['Texto en español', 'Muestra u oculta la traducción debajo de cada versículo; al lado, elige la versión (RV 1960, RV 1909 o RV 1865)'],
            ['Tocar una palabra', 'Abre su ficha: las partes, el lema, el número de Strong y cuántas veces aparece'],
            ['Número del versículo', 'Es un enlace propio, para compartir ese versículo']
          ],
          nota: 'La versión elegida se recuerda en tu dispositivo y es la misma de la cabecera del sitio y de la burbuja de citas.'
        } }
      ],
      texto: [
        'La página del interlineal tiene los 39 libros del Antiguo Testamento. Se abre con el botón de abajo, y cada versículo tiene su propio enlace: por ejemplo, el de Éxodo 20:2 termina en #ex/20/2.',
        { h: 'Leer un versículo' },
        'Empieza por la derecha. Lee la palabra hebrea en voz alta con ayuda de la transliteración, mira la glosa y sigue con la palabra de la izquierda. Al terminar la línea, lee el texto en español y busca dónde quedó cada palabra. Si quieres compararlo con una revisión más antigua, cambia la versión en el selector junto a «Texto en español». Después oculta la transliteración y vuelve a leer: así practicas lo que aprendiste en El alfabeto hebreo.',
        { h: 'La ficha de una palabra' },
        'Al tocar una palabra se abre su ficha. Arriba está la palabra completa; debajo, cada una de sus piezas: un prefijo, la palabra de diccionario y un sufijo, con su descripción en español. La palabra de diccionario muestra su forma, su transliteración, su glosa, su número de Strong y cuántas veces aparece en el Antiguo Testamento. Si es una de las 751 del vocabulario, la ficha lo dice.',
        { h: 'Dos avisos' },
        'Algunas palabras llevan un círculo pequeño: se escriben de una manera y se leen de otra. Lo verás en la ruta II. Y algunos versículos tienen otro número en la Reina-Valera: los títulos de muchos salmos, el final de Joel o de Malaquías. La página lo avisa debajo del versículo y muestra el texto español que corresponde.',
        { ir: { t: 'Abrir el interlineal en Éxodo 20:2', a: 'interlineal/#ex/20/2', marco: true } },
        { ejercicio: {
          pregunta: 'Quieres practicar la lectura del hebreo sin ayudas. ¿Qué haces?',
          opciones: [
            { t: 'Desmarco «Transliteración» y «Glosa», leo, y después las vuelvo a mostrar para revisar.', ok: true, por_que: 'Es la manera de practicar: primero sin ayuda, después con ella.' },
            { t: 'Marco «Morfología».', ok: false, por_que: 'La morfología agrega información; no oculta las ayudas.' },
            { t: 'Desmarco «Texto en español».', ok: false, por_que: 'Eso oculta la traducción, pero la pronunciación y la glosa siguen a la vista.' }
          ],
          explicacion: 'Las cuatro casillas se pueden combinar como quieras.'
        } }
      ],
      pensar: '«Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto» (Éx 20:2). Los mandamientos empiezan recordando lo que Dios hizo. ¿Por qué crees que la obediencia empieza por recordar la gracia recibida?'
    }
  ];

  const leer = [
    {
      id: 'derecha', n: 'De derecha a izquierda', ref: 'Génesis 1:1',
      visual: [ V(GN11) ],
      texto: [
        'El hebreo se escribe y se lee de derecha a izquierda. En el interlineal, por eso, la primera palabra de cada versículo está a la derecha, junto al número, y la línea avanza hacia la izquierda. Las ayudas de cada palabra (transliteración y glosa) van en español, de izquierda a derecha, pero cada una queda debajo de su palabra.',
        { h: 'Las palabras unidas' },
        'Algunas palabras hebreas van unidas a la siguiente con un guion alto, el maqaf (־). Así se leen como una sola unidad de pronunciación: עַל־פְּנֵי, «sobre la faz de», o כָּל־הָאָרֶץ, «toda la tierra». El interlineal muestra el maqaf al final de la primera palabra y las deja en cajas separadas, para que veas la glosa de cada una.',
        { h: 'Una palabra hebrea, varias españolas' },
        'Mira la primera palabra de la Biblia, בְּרֵאשִׁית. Debajo dice «en principio»: dos palabras españolas para una hebrea. El hebreo escribe pegadas al sustantivo algunas palabras pequeñas, como «en», «y» o «el». Por eso una línea hebrea es más corta que su traducción. En las próximas estaciones aprenderás a reconocer esas piezas.',
        { h: 'El final del versículo' },
        'El hebreo marca el final de cada versículo con dos puntos (׃), el sof pasuq, «fin del versículo». La página no los muestra, porque el número del versículo siguiente ya separa uno de otro.',
        { ejercicio: {
          pregunta: 'En la línea de Génesis 1:1, ¿dónde está la palabra «la tierra»?',
          opciones: [
            { t: 'En el extremo izquierdo: es la última palabra del versículo.', ok: true, por_que: 'הָאָרֶץ cierra el versículo; en hebreo, lo último queda a la izquierda.' },
            { t: 'En el extremo derecho: es la primera palabra.', ok: false, por_que: 'A la derecha está בְּרֵאשִׁית, «en el principio».' },
            { t: 'En el centro, porque el hebreo pone el sujeto en medio.', ok: false, por_que: 'En el centro está אֱלֹהִים, «Dios», el sujeto; «la tierra» es lo último.' }
          ],
          explicacion: 'Derecha = comienzo; izquierda = final. Con un poco de práctica, el ojo se acostumbra.'
        } }
      ],
      pensar: '«En el principio creó Dios los cielos y la tierra» (Gn 1:1). La Biblia empieza con Dios, no con el ser humano. ¿Qué cambia en tu manera de ver el mundo si empiezas, como la Biblia, por Dios?'
    },
    {
      id: 'prefijos', n: 'Los prefijos: y, en, a, como, de, el', ref: 'Génesis 1:2',
      visual: [
        V(GN12),
        { tipo: 'tabla', titulo: 'Las letras que se pegan al comienzo', tabla: {
          titulo: 'Prefijos de una letra y su glosa',
          cab: ['Prefijo', 'Se lee', 'Glosa', 'Ejemplo'],
          filas: [
            ['וְ', 've, u, va', 'y', 'וְהָאָרֶץ, «y la tierra»'],
            ['הַ', 'ha', 'el, la, los, las', 'הַשָּׁמַיִם, «los cielos»'],
            ['בְּ', 'be', 'en, con', 'בְּרֵאשִׁית, «en el principio»'],
            ['לְ', 'le', 'a, para', 'לְדָוִד, «a David», «de David»'],
            ['כְּ', 'ke', 'como', 'כְּצֹאן, «como ovejas»'],
            ['מִ', 'mi', 'de, desde', 'מֵאַרְצְךָ, «de tu tierra»'],
            ['שֶׁ', 'she', 'que', 'שֶׁהָיָה, «que fue»']
          ],
          nota: 'Con el artículo, la preposición se contrae: לָאָרֶץ es «a la tierra», no «a ha-tierra».'
        } }
      ],
      texto: [
        'El hebreo escribe pegadas al comienzo de la palabra siete letras que en español son palabras separadas. El interlineal las traduce en la glosa: por eso ves «y la tierra» debajo de una sola palabra, וְהָאָרֶץ. En la ficha, cada prefijo aparece en su propia fila.',
        { h: 'La conjunción y el artículo' },
        'La más frecuente es la conjunción וְ, «y». Aparece más de cincuenta mil veces en el Antiguo Testamento. Mira Génesis 1:2: casi cada frase empieza con «y». Es el estilo del relato hebreo, que encadena una acción tras otra; la Reina-Valera conserva muchas de esas «y», y otras veces las traduce «pero», «entonces» o no las traduce.',
        'El artículo הַ es «el», «la», «los» o «las». El hebreo no tiene artículo indefinido: una palabra sin artículo se traduce «un» o va sin artículo. Por eso la glosa de תֹהוּ es «caos», sin artículo.',
        { h: 'Las preposiciones' },
        'בְּ, לְ, כְּ y מִ son preposiciones. Cuando van con el artículo, la vocal cambia y la ה desaparece: בָּאָרֶץ es «en la tierra». El interlineal lo resuelve en la glosa, y la ficha te dice «preposición con artículo».',
        { ejercicio: {
          pregunta: 'La glosa de וְרוּחַ en Génesis 1:2 es «y espíritu de». ¿De dónde sale cada parte?',
          opciones: [
            { t: '«y» es el prefijo וְ; «espíritu» es la palabra רוּחַ; «de» indica el estado constructo.', ok: true, por_que: 'Así es. El constructo, «espíritu de Dios», lo verás en otra estación.' },
            { t: 'Todo sale de la palabra רוּחַ.', ok: false, por_que: 'רוּחַ es «espíritu»; la «y» es la letra ו pegada al comienzo.' },
            { t: '«y» y «de» son agregados del traductor.', ok: false, por_que: 'Los dos están en el hebreo: uno es una letra y el otro, la forma de la palabra.' }
          ],
          explicacion: 'Prefijo + palabra + forma: tres datos en una sola palabra hebrea.'
        } }
      ],
      pensar: '«Y el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2). Antes de que hubiera orden y vida, el Espíritu ya estaba presente. ¿Qué esperanza te da saber que el Espíritu de Dios obra aun donde hay desorden y vacío?'
    },
    {
      id: 'sufijos', n: 'Los sufijos: mi, tu, su; me, te, lo', ref: 'Salmo 23:1',
      visual: [
        V(SAL231),
        { tipo: 'tabla', titulo: 'Sufijos frecuentes', tabla: {
          titulo: 'Pronombres pegados al final',
          cab: ['Sufijo', 'Con un sustantivo', 'Con un verbo', 'Con una preposición'],
          filas: [
            ['ִי / ַנִי', 'mi: אָבִי, «mi padre»', 'me: יַרְבִּיצֵנִי, «me hace descansar»', 'a mí: לִי'],
            ['ְךָ', 'tu: אַרְצְךָ, «tu tierra»', 'te: יְבָרֶכְךָ, «te bendiga»', 'a ti: לְךָ'],
            ['וֹ / ָיו', 'su (de él): שְׁמוֹ, «su nombre»', 'lo: וַיִּקְרָאֵהוּ', 'a él: לוֹ'],
            ['ָהּ', 'su (de ella)', 'la', 'a ella: לָהּ'],
            ['ֵנוּ', 'nuestro: אֱלֹהֵינוּ', 'nos', 'a nosotros: לָנוּ'],
            ['ָם / ֵיהֶם', 'su (de ellos)', 'los', 'a ellos: לָהֶם']
          ],
          nota: 'La glosa traduce el sufijo según la palabra a la que se pega: posesivo, objeto o pronombre.'
        } }
      ],
      texto: [
        'Así como el hebreo pega palabras al comienzo, también pega pronombres al final. Un sufijo puede ser un posesivo («mi», «tu», «su»), el objeto de un verbo («me», «te», «lo») o el pronombre que sigue a una preposición («a mí», «a ti», «a él»). El interlineal lo pone en la glosa, y la ficha lo describe: «sufijo pronominal, 1.ª persona, común, singular».',
        { h: 'En el Salmo 23' },
        'Mira el panel. רֹעִי, «mi pastor», es una sola palabra: el participio de «apacentar» con el sufijo de primera persona. La glosa dice «apacentarme», porque el interlineal da los verbos en infinitivo y pega el sufijo como objeto; la ficha te muestra que es un participio activo, es decir, «el que apacienta»: el pastor. Con el sufijo, «mi pastor». Este es un buen ejemplo de por qué conviene abrir la ficha cuando la glosa suena extraña.',
        { h: 'Su, ¿de quién?' },
        'En español, «su» puede ser de él, de ella, de ellos o de usted. El hebreo distingue. Por eso, cuando el sufijo es de tercera persona, la glosa agrega entre paréntesis «de él», «de ella» o «de ellos»: שְׁמוֹ es «su nombre (de él)». En Isaías 7:14, ese detalle muestra que el nombre es el del hijo: «y llamará su nombre Emanuel».',
        { ejercicio: {
          pregunta: 'La palabra לִי aparece muchas veces. Es la preposición לְ con el sufijo de primera persona. ¿Qué significa?',
          opciones: [
            { t: '«a mí» o «para mí».', ok: true, por_que: 'Con una preposición, el sufijo es el pronombre que la sigue.' },
            { t: '«mi».', ok: false, por_que: '«mi» es el sentido del sufijo con un sustantivo, no con una preposición.' },
            { t: '«me».', ok: false, por_que: '«me» es el sentido del sufijo con un verbo.' }
          ],
          explicacion: 'El mismo sufijo cambia de función según la palabra a la que se pega.'
        } }
      ],
      pensar: '«Jehová es mi pastor; nada me faltará» (Sal 23:1). David no dice «un pastor», sino «mi pastor». ¿Qué diferencia hay entre saber que Dios es pastor y poder decir que es tu pastor?'
    },
    {
      id: 'constructo', n: 'El estado constructo: «de»', ref: 'Éxodo 20:2',
      visual: [
        V(EX202),
        { tipo: 'tabla', titulo: 'Cómo se lee el constructo', tabla: {
          titulo: 'Dos palabras que forman una sola idea',
          cab: ['Hebreo', 'Glosas', 'Español'],
          filas: [
            ['בְּנֵי יִשְׂרָאֵל', 'hijos de · Israel', 'los hijos de Israel'],
            ['רוּחַ אֱלֹהִים', 'espíritu de · Dios', 'el Espíritu de Dios'],
            ['אֶרֶץ מִצְרַיִם', 'tierra de · Egipto', 'la tierra de Egipto'],
            ['בֵּית עֲבָדִים', 'casa de · siervos', 'casa de servidumbre'],
            ['דְּבַר־יְהוָה', 'palabra de · Jehová', 'la palabra de Jehová']
          ],
          nota: 'La primera palabra cambia de forma y pierde el artículo; la segunda la determina.'
        } }
      ],
      texto: [
        'El hebreo no tiene una palabra para «de» como en «la casa de David». Une los dos sustantivos: el primero cambia de forma y queda «en estado constructo», y el segundo lo completa. El interlineal marca esa forma agregando «de» a la glosa de la primera palabra: «hijos de · Israel».',
        { h: 'Cómo reconocerlo' },
        'La ficha dice «estado constructo», y la fila de morfología muestra «cons.». La primera palabra nunca lleva artículo, aunque se traduzca con artículo: בְּנֵי יִשְׂרָאֵל son «los hijos de Israel», porque el nombre propio ya hace definida a toda la expresión. Muchas veces la primera palabra se acorta o cambia sus vocales: בַּיִת, «casa», es בֵּית en constructo.',
        { h: 'Cadenas de constructos' },
        'Un constructo puede encadenar tres o más palabras. En Éxodo 20:2, מֵאֶרֶץ מִצְרַיִם es «de la tierra de Egipto», y מִבֵּית עֲבָדִים es «de casa de siervos», que la Reina-Valera traduce «de casa de servidumbre». La traducción convirtió «siervos» en «servidumbre» para que se entienda la idea: una casa donde se vive como esclavo.',
        { h: 'Un detalle: «de» con «todo»' },
        'La palabra כֹּל, «todo», casi siempre está en constructo: כָּל־הָאָרֶץ, «toda la tierra». Ahí el español no dice «todo de la tierra», y el interlineal tampoco agrega «de». Es una de las pocas excepciones a la regla.',
        { ejercicio: {
          pregunta: '¿Cómo se traduce mejor דְּבַר־יְהוָה?',
          opciones: [
            { t: '«la palabra de Jehová».', ok: true, por_que: 'Constructo con un nombre propio: la expresión entera es definida.' },
            { t: '«una palabra, Jehová».', ok: false, por_que: 'No son dos ideas sueltas: la primera palabra depende de la segunda.' },
            { t: '«Jehová habló».', ok: false, por_que: 'דְּבַר es un sustantivo en constructo, no un verbo.' }
          ],
          explicacion: 'Constructo = «de». La expresión toma la definición de su última palabra.'
        } }
      ],
      pensar: 'Dios se presenta como el que sacó a Israel «de casa de servidumbre» (Éx 20:2). ¿De qué esclavitud te ha sacado Cristo, y cómo cambia eso tu manera de obedecer (Jn 8:36)?'
    },
    {
      id: 'verbo', n: 'El verbo en el interlineal', ref: 'Génesis 1:3',
      visual: [
        V(GN13),
        { tipo: 'tabla', titulo: 'Las formas del verbo', tabla: {
          titulo: 'Lo que dice la fila de morfología',
          cab: ['Abreviatura', 'Forma', 'Se traduce casi siempre'],
          filas: [
            ['perf.', 'perfecto (qatal)', 'pasado: «creó»'],
            ['wayyiqtol', 'imperfecto con waw', 'pasado en un relato: «y dijo»'],
            ['imperf.', 'imperfecto (yiqtol)', 'futuro o presente: «dirá», «dice»'],
            ['weqatal', 'perfecto con waw', 'futuro o mandato: «y dirás»'],
            ['yus. · cohort.', 'yusivo, cohortativo', 'deseo: «sea», «vamos»'],
            ['imper.', 'imperativo', 'mandato: «di», «oye»'],
            ['part. act.', 'participio activo', '«el que hace», o presente'],
            ['inf. cons.', 'infinitivo constructo', '«para decir», «al decir»']
          ],
          nota: 'También indica el binyán (qal, nifal, piel, hifil…) y la persona: 3ms = 3.ª persona masculina singular.'
        } }
      ],
      texto: [
        'Un verbo hebreo dice mucho en una sola palabra: la acción, quién la hace, si es una acción terminada o en curso, y si es simple, intensiva o causativa. En El vocabulario y la gramática del hebreo bíblico aprendiste esas formas. El interlineal no las traduce en la glosa: da el infinitivo y deja la forma en la fila de morfología y en la ficha.',
        { ir: { t: 'Repasar «El verbo» en Vocabulario y gramática', a: '../../gramatica-hebrea/#verbo/1' } },
        { h: 'Génesis 1:3' },
        'Mira el panel. La primera palabra, וַיֹּאמֶר, tiene la glosa «y decir». La ficha dice: verbo qal, imperfecto con waw (wayyiqtol), 3.ª persona masculina singular. Esa es la forma típica del relato: «y dijo». La segunda palabra, יְהִי, tiene la glosa «ser»; la ficha dice que es un yusivo, la forma del deseo o la orden: «sea». La tercera, אוֹר, es «luz». Con esos tres datos se arma la frase de la Reina-Valera: «Y dijo Dios: Sea la luz».',
        'Después viene וַיְהִי, otra vez «ser», pero ahora en wayyiqtol: «y fue». El mismo verbo, en dos formas, cuenta la orden de Dios y su cumplimiento inmediato.',
        { h: 'Por qué no se conjuga la glosa' },
        'Conjugar cada verbo exigiría decidir el tiempo en cada versículo, y esa decisión depende del contexto. El infinitivo evita poner en la glosa una interpretación. Tú puedes leer la forma y comparar con la traducción.',
        { ejercicio: {
          pregunta: 'En la fila de morfología de un verbo dice «hifil perf. 3ms». ¿Qué te dice?',
          opciones: [
            { t: 'Es causativo (hifil), una acción terminada (perfecto) y el sujeto es «él».', ok: true, por_que: 'Binyán, forma y persona: los tres datos de la abreviatura.' },
            { t: 'Es un verbo pasivo en futuro, para «ellos».', ok: false, por_que: 'El hifil es causativo, el perfecto no es futuro y 3ms es «él».' },
            { t: 'Es un sustantivo masculino singular.', ok: false, por_que: 'Las abreviaturas de sustantivo empiezan con «sust.».' }
          ],
          explicacion: 'Binyán + forma + persona, género y número: la ficha lo dice con todas las letras.'
        } }
      ],
      pensar: '«Y dijo Dios: Sea la luz; y fue la luz» (Gn 1:3). Entre la palabra de Dios y su cumplimiento no hubo distancia. ¿Qué promesa de Dios necesitas creer hoy con esa misma confianza?'
    },
    {
      id: 'morfologia', n: 'La fila de morfología', ref: 'Génesis 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'Abreviaturas', tabla: {
          titulo: 'Cómo leer la fila de morfología',
          cab: ['Abreviatura', 'Significa'],
          filas: [
            ['sust. · n. pr. · gent.', 'sustantivo, nombre propio, gentilicio'],
            ['adj. · núm. · ord.', 'adjetivo, número cardinal, número ordinal'],
            ['m · f · b · c', 'masculino, femenino, ambos géneros, común'],
            ['s · p · d', 'singular, plural, dual'],
            ['cons. · det.', 'estado constructo, determinado'],
            ['prep. · conj. · adv.', 'preposición, conjunción, adverbio'],
            ['art. · obj. · neg. · interr.', 'artículo, marca del complemento directo, negación, interrogativa'],
            ['suf. 3ms', 'sufijo de 3.ª persona masculina singular'],
            ['qal · nifal · piel · pual · hifil · hofal · hitpael', 'los siete binyanim principales']
          ],
          nota: 'Una palabra con varias piezas muestra varias abreviaturas unidas con «+».'
        } },
        V(GN11)
      ],
      texto: [
        'La casilla «Morfología» de la página agrega una cuarta línea debajo de cada palabra. Es la descripción abreviada de su forma, pieza por pieza, y viene del análisis de Open Scriptures Hebrew Bible. La primera vez parece un código; con la tabla del panel se lee sin dificultad.',
        { h: 'Un ejemplo' },
        'Debajo de בְּרֵאשִׁית dice «prep. + sust. fs». Son dos piezas: la preposición בְּ, «en», y el sustantivo רֵאשִׁית, «principio», femenino singular. Debajo de הַשָּׁמַיִם dice «art. + sust. mp»: el artículo y un sustantivo masculino plural. Debajo de בָּרָא dice «qal perf. 3ms»: el verbo en qal, perfecto, tercera persona masculina singular.',
        { h: 'Cuándo usarla' },
        'No hace falta leer la morfología de cada palabra. Conviene mirarla cuando la glosa suena extraña, cuando la traducción usa un tiempo verbal que no esperabas o cuando un comentario dice algo sobre la forma de una palabra («este verbo está en hifil», «aquí hay un plural»). En esos casos, la ficha lo explica con todas las palabras.',
        { h: 'El arameo' },
        'Algunos capítulos de Daniel y de Esdras, y un versículo de Jeremías, están en arameo, una lengua hermana del hebreo. La morfología usa los nombres arameos de los binyanim: peal en lugar de qal, pael en lugar de piel, afel o hafel en lugar de hifil. La página lo indica en la ficha.',
        { ejercicio: {
          pregunta: 'Debajo de una palabra dice «conj. + prep. + art. + sust. fs». ¿Cuál podría ser su glosa?',
          opciones: [
            { t: '«y en la tierra».', ok: true, por_que: 'Conjunción «y», preposición «en», artículo «la», sustantivo femenino singular.' },
            { t: '«la tierra».', ok: false, por_que: 'Faltan la conjunción y la preposición.' },
            { t: '«y tus tierras».', ok: false, por_que: 'No hay sufijo y el sustantivo es singular.' }
          ],
          explicacion: 'Cada abreviatura es una pieza de la palabra, en el mismo orden en que se escriben.'
        } }
      ],
      pensar: 'El análisis de cada palabra de la Biblia hebrea es el trabajo de muchos años de estudiosos. ¿Qué te dice ese cuidado sobre el valor que la iglesia ha dado siempre a cada palabra de la Escritura (Mt 5:18)?'
    },
    {
      id: 'ketiv', n: 'Ketiv y qere, y la numeración', ref: 'Rut 3:5',
      visual: [
        { tipo: 'hebreo', titulo: 'Rut 3:5 en el interlineal', ref: 'Rut 3:5', he: '@@wlc:rt/3/5', tr: '@@inttr:rt/3/5', palabras: '@@int:rt/3/5', rv: '@@rt/3/5' },
        { tipo: 'tabla', titulo: 'Versículos con otro número', tabla: {
          titulo: 'Donde la RV 1960 numera distinto',
          cab: ['Biblia hebrea', 'Reina-Valera 1960'],
          filas: [
            ['Salmo 3:1 (el título) y 3:2', 'título sin número y Salmo 3:1'],
            ['Génesis 32:1', 'Génesis 31:55'],
            ['Isaías 9:1', 'Isaías 9:2'],
            ['Joel 3:1-5', 'Joel 2:28-32'],
            ['Joel 4', 'Joel 3'],
            ['Malaquías 3:19-24', 'Malaquías 4:1-6']
          ],
          nota: 'El interlineal sigue la numeración hebrea y avisa debajo del versículo cuál es el número en la RV 1960.'
        } }
      ],
      texto: [
        'Los masoretas, los escribas judíos que fijaron las vocales del texto hebreo, no se atrevieron a cambiar las consonantes que habían recibido. Cuando creían que una palabra debía leerse de otra manera, dejaban la escrita y anotaban al margen cómo leerla. Lo escrito se llama ketiv («lo escrito») y lo leído, qere («lo que se lee»). Hay más de mil casos.',
        { h: 'Cómo los muestra el interlineal' },
        'En la página, una palabra con ketiv y qere lleva un círculo pequeño (°). La palabra que ves son las consonantes escritas en el códice; la transliteración y la glosa son las de la lectura indicada por los masoretas, que es la que siguen casi todas las traducciones. La ficha muestra las dos formas.',
        'En Rut 3:5, Rut le responde a Noemí: «Haré todo lo que tú me mandes». El texto escrito no tiene la palabra «me» (אֵלַי); los masoretas indicaron leerla. En otros casos, el qere corrige una letra, une dos palabras o cambia una palabra por otra más apropiada para leer en voz alta.',
        { h: 'El nombre de Dios' },
        'El caso más frecuente es el nombre de cuatro letras, יהוה. Los lectores judíos no lo pronunciaban y decían Adonái, «Señor». Por eso la transliteración del interlineal dice Adonái y la glosa dice Jehová, como la Reina-Valera. Lo verás en la ruta IV.',
        { h: 'La numeración' },
        'Las Biblias hebreas y las españolas no siempre dividen igual los versículos. En muchos salmos, el título es el versículo 1 en hebreo y en la Reina-Valera va sin número. En Joel, el capítulo 3 hebreo es Joel 2:28-32. El interlineal usa la numeración hebrea, la del códice, y debajo de cada versículo afectado dice cuál es su número en la Reina-Valera.',
        { ejercicio: {
          pregunta: 'Ves una palabra con el círculo °. ¿Qué significa?',
          opciones: [
            { t: 'Se escribe de una manera y los masoretas indicaron leerla de otra; la glosa sigue la lectura.', ok: true, por_que: 'Es un caso de ketiv y qere. La ficha muestra las dos formas.' },
            { t: 'Es una palabra dudosa que no está en todos los manuscritos.', ok: false, por_que: 'Las consonantes están en el códice; la nota indica cómo leerlas.' },
            { t: 'Es una palabra en arameo.', ok: false, por_que: 'El arameo no lleva marca; la ficha lo indica en la morfología.' }
          ],
          explicacion: 'Ketiv (lo escrito) y qere (lo leído): fidelidad a lo recibido y cuidado al leer.'
        } }
      ],
      pensar: 'Los masoretas prefirieron anotar al margen antes que tocar una sola letra del texto recibido. ¿Qué te enseña esa reverencia sobre cómo tratar la Palabra de Dios en tu propio estudio (Ap 22:18-19)?'
    }
  ];

  window.__INT.queEs = queEs;
  window.__INT.leer = leer;
})();
