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
  const GN11 = { titulo: 'Génesis 1:1 en el interlineal', ref: 'Génesis 1:1', he: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃', tr: 'Bereshit bará elohim et hashamáyim veet haarets.', p: [{ he: 'בְּרֵאשִׁית', tr: 'bereshit', es: 'en principio' }, { he: 'בָּרָא', tr: 'bará', es: 'crear' }, { he: 'אֱלֹהִים', tr: 'elohim', es: 'Dios' }, { he: 'אֵת', tr: 'et', es: '[obj.]' }, { he: 'הַשָּׁמַיִם', tr: 'hashamáyim', es: 'los cielos' }, { he: 'וְאֵת', tr: 'veet', es: 'y [obj.]' }, { he: 'הָאָרֶץ', tr: 'haarets', es: 'la tierra' }], rv: 'En el principio creó Dios los cielos y la tierra.' };
  const GN12 = { titulo: 'Génesis 1:2 en el interlineal', ref: 'Génesis 1:2', he: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם׃', tr: 'Vehaarets haytá tohu vavohu vejóshej al pené tehom verúaj elohim merajéfet al pené hamáyim.', p: [{ he: 'וְהָאָרֶץ', tr: 'vehaarets', es: 'y la tierra' }, { he: 'הָיְתָה', tr: 'haytá', es: 'ser' }, { he: 'תֹהוּ', tr: 'tohu', es: 'caos' }, { he: 'וָבֹהוּ', tr: 'vavohu', es: 'y vacío' }, { he: 'וְחֹשֶׁךְ', tr: 'vejóshej', es: 'y tinieblas' }, { he: 'עַל־', tr: 'al', es: 'sobre' }, { he: 'פְּנֵי', tr: 'pené', es: 'rostro de' }, { he: 'תְהוֹם', tr: 'tehom', es: 'abismo' }, { he: 'וְרוּחַ', tr: 'verúaj', es: 'y espíritu de' }, { he: 'אֱלֹהִים', tr: 'elohim', es: 'Dios' }, { he: 'מְרַחֶפֶת', tr: 'merajéfet', es: 'moverse' }, { he: 'עַל־', tr: 'al', es: 'sobre' }, { he: 'פְּנֵי', tr: 'pené', es: 'rostro de' }, { he: 'הַמָּיִם', tr: 'hamáyim', es: 'las aguas' }], rv: 'Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas.' };
  const GN13 = { titulo: 'Génesis 1:3 en el interlineal', ref: 'Génesis 1:3', he: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר׃', tr: 'Vayómer elohim yehí or vayhi or.', p: [{ he: 'וַיֹּאמֶר', tr: 'vayómer', es: 'y decir' }, { he: 'אֱלֹהִים', tr: 'elohim', es: 'Dios' }, { he: 'יְהִי', tr: 'yehí', es: 'ser' }, { he: 'אוֹר', tr: 'or', es: 'luz' }, { he: 'וַיְהִי־', tr: 'vayhi', es: 'y ser' }, { he: 'אוֹר', tr: 'or', es: 'luz' }], rv: 'Y dijo Dios: Sea la luz; y fue la luz.' };
  const GN121 = { titulo: 'Génesis 12:1 en el interlineal', ref: 'Génesis 12:1', he: 'וַיֹּאמֶר יְהוָה אֶל־אַבְרָם לֶךְ־לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ וּמִבֵּית אָבִיךָ אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ׃', tr: 'Vayómer Adonái el Avram lej lejá meartsejá umimoladtejá umibet avija el haarets asher areka.', p: [{ he: 'וַיֹּאמֶר', tr: 'vayómer', es: 'y decir' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֶל־', tr: 'el', es: 'a' }, { he: 'אַבְרָם', tr: 'Avram', es: 'Abram' }, { he: 'לֶךְ־', tr: 'lej', es: 'ir' }, { he: 'לְךָ', tr: 'lejá', es: 'a ti' }, { he: 'מֵאַרְצְךָ', tr: 'meartsejá', es: 'de tu tierra' }, { he: 'וּמִמּוֹלַדְתְּךָ', tr: 'umimoladtejá', es: 'y de tu parentela' }, { he: 'וּמִבֵּית', tr: 'umibet', es: 'y de casa de' }, { he: 'אָבִיךָ', tr: 'avija', es: 'tu padre' }, { he: 'אֶל־', tr: 'el', es: 'a' }, { he: 'הָאָרֶץ', tr: 'haarets', es: 'la tierra' }, { he: 'אֲשֶׁר', tr: 'asher', es: 'que' }, { he: 'אַרְאֶךָּ', tr: 'areka', es: 'verte' }], rv: 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré.' };
  const SAL231 = { titulo: 'Salmo 23:1 en el interlineal', ref: 'Salmo 23:1', he: 'מִזְמוֹר לְדָוִד יְהוָה רֹעִי לֹא אֶחְסָר׃', tr: 'Mizmor le-David Adonái roí lo ejsar.', p: [{ he: 'מִזְמוֹר', tr: 'mizmor', es: 'salmo' }, { he: 'לְדָוִד', tr: 'le-David', es: 'a David' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'רֹעִי', tr: 'roí', es: 'apacentarme' }, { he: 'לֹא', tr: 'lo', es: 'no' }, { he: 'אֶחְסָר', tr: 'ejsar', es: 'faltar' }], rv: 'Jehová es mi pastor; nada me faltará.' };
  const NEH88 = { titulo: 'Nehemías 8:8 en el interlineal', ref: 'Nehemías 8:8', he: 'וַיִּקְרְאוּ בַסֵּפֶר בְּתוֹרַת הָאֱלֹהִים מְפֹרָשׁ וְשׂוֹם שֶׂכֶל וַיָּבִינוּ בַּמִּקְרָא׃', tr: 'Vayíkrev vaséfer betorat haelohim meforash vesom séjel vayavinu bamikrá.', p: [{ he: 'וַיִּקְרְאוּ', tr: 'vayíkrev', es: 'y llamar' }, { he: 'בַסֵּפֶר', tr: 'vaséfer', es: 'en el libro' }, { he: 'בְּתוֹרַת', tr: 'betorat', es: 'en ley de' }, { he: 'הָאֱלֹהִים', tr: 'haelohim', es: 'el Dios' }, { he: 'מְפֹרָשׁ', tr: 'meforash', es: 'declarar' }, { he: 'וְשׂוֹם', tr: 'vesom', es: 'y poner' }, { he: 'שֶׂכֶל', tr: 'séjel', es: 'prudencia' }, { he: 'וַיָּבִינוּ', tr: 'vayavinu', es: 'y entender' }, { he: 'בַּמִּקְרָא', tr: 'bamikrá', es: 'en la convocación' }], rv: 'Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.' };
  const EX202 = { titulo: 'Éxodo 20:2 en el interlineal', ref: 'Éxodo 20:2', he: 'אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים׃', tr: 'Anojí Adonái eloheja asher hotsetija meerets Mitsráyim mibet avadim.', p: [{ he: 'אָנֹכִי', tr: 'anojí', es: 'yo' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֱלֹהֶיךָ', tr: 'eloheja', es: 'tu Dios' }, { he: 'אֲשֶׁר', tr: 'asher', es: 'que' }, { he: 'הוֹצֵאתִיךָ', tr: 'hotsetija', es: 'salirte' }, { he: 'מֵאֶרֶץ', tr: 'meerets', es: 'de tierra de' }, { he: 'מִצְרַיִם', tr: 'Mitsráyim', es: 'Egipto' }, { he: 'מִבֵּית', tr: 'mibet', es: 'de casa de' }, { he: 'עֲבָדִים', tr: 'avadim', es: 'siervos' }], rv: 'Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre.' };
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
        { tipo: 'hebreo', titulo: 'Rut 3:5 en el interlineal', ref: 'Rut 3:5', he: 'וַתֹּאמֶר אֵלֶיהָ כֹּל אֲשֶׁר־תֹּאמְרִי אֶעֱשֶׂה׃', tr: 'Vatómer eléah kol asher tomrí elái eesé.', palabras: [{ he: 'וַתֹּאמֶר', tr: 'vatómer', es: 'y decir' }, { he: 'אֵלֶיהָ', tr: 'eléah', es: 'a ella' }, { he: 'כֹּל', tr: 'kol', es: 'todo' }, { he: 'אֲשֶׁר־', tr: 'asher', es: 'que' }, { he: 'תֹּאמְרִי', tr: 'tomrí', es: 'decir' }, { he: '[אֵלַי]', tr: 'elái', es: 'a mí' }, { he: 'אֶעֱשֶׂה', tr: 'eesé', es: 'hacer' }], rv: 'Y ella respondió: Haré todo lo que tú me mandes.' },
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
/* ==========================================================
   Interlineal hebreo–español (AT) · contenido (parte 2: rutas III, IV, taller y RUTA_DATA)
   ========================================================== */
(() => {
  const I = window.__INT;
  const V = I.V;

  const errores = [
    {
      id: 'glosa', n: 'La glosa no es «el verdadero significado»', ref: 'Génesis 1:2; Juan 3:8',
      visual: [
        I.GN12 && V(I.GN12),
        { tipo: 'tabla', titulo: 'Una palabra, varios sentidos', tabla: {
          titulo: 'רוּחַ en el Antiguo Testamento',
          cab: ['Pasaje', 'Sentido en el contexto', 'RV 1960'],
          filas: [
            ['Génesis 1:2', 'el Espíritu de Dios', 'Espíritu'],
            ['Génesis 8:1', 'el aire en movimiento', 'viento'],
            ['Génesis 6:17', 'el aliento de vida', 'espíritu de vida'],
            ['1 Samuel 1:15', 'el ánimo, el estado interior', 'espíritu'],
            ['Isaías 11:2', 'el Espíritu de Jehová', 'Espíritu']
          ],
          nota: 'La glosa del interlineal es siempre «espíritu». El contexto dice cuál de estos sentidos tiene en cada versículo.'
        } }
      ].filter(Boolean),
      texto: [
        'El error más común al usar un interlineal es tomar la glosa como si fuera el significado exacto de la palabra en ese versículo. La glosa es una etiqueta para reconocer la palabra: su sentido básico. El sentido en cada pasaje lo da el contexto.',
        { h: 'Un ejemplo: רוּחַ' },
        'La palabra רוּחַ aparece unas 380 veces en el Antiguo Testamento. Su glosa en el interlineal es «espíritu». Pero, como muestra la tabla, puede ser el viento, el aliento, el ánimo de una persona o el Espíritu de Dios. Si alguien leyera Génesis 8:1 en el interlineal y concluyera que Dios hizo pasar «un espíritu» sobre la tierra para secar las aguas, se equivocaría: el contexto habla del viento que seca las aguas del diluvio. La Reina-Valera traduce «viento», y está bien.',
        'Jesús juega con esa misma amplitud en griego cuando dice a Nicodemo que el viento sopla de donde quiere, y así es todo aquel que es nacido del Espíritu (Jn 3:8). Las palabras con varios sentidos no son un problema: son parte de la riqueza de la lengua. El problema aparece cuando se elige un sentido sin mirar el contexto.',
        { h: 'Cómo evitarlo' },
        'Antes de sacar una conclusión de una glosa, lee la Reina-Valera y el pasaje completo. Si quieres saber qué sentidos tiene una palabra, mira cómo se traduce en otros versículos: la ficha te da el número de Strong y cuántas veces aparece, y un diccionario o una concordancia te muestran todos los usos.',
        { ejercicio: {
          pregunta: 'En un versículo, la glosa de una palabra es «alma», y la Reina-Valera traduce «vida». ¿Qué concluyes?',
          opciones: [
            { t: 'Que la palabra tiene varios sentidos y el traductor eligió el que exige ese contexto.', ok: true, por_que: 'Es lo que pasa con נֶפֶשׁ, que puede ser alma, vida, persona o deseo.' },
            { t: 'Que la Reina-Valera se equivocó.', ok: false, por_que: 'La glosa no es el sentido en cada versículo; la traducción mira el contexto.' },
            { t: 'Que el versículo enseña algo distinto de lo que dice la traducción.', ok: false, por_que: 'Una glosa por sí sola no puede corregir una traducción hecha con todo el contexto.' }
          ],
          explicacion: 'La glosa ayuda a reconocer; el contexto decide el sentido.'
        } }
      ],
      pensar: '«El viento sopla de donde quiere… así es todo aquel que es nacido del Espíritu» (Jn 3:8). ¿Qué señales de la obra del Espíritu ves hoy en tu vida, aunque no puedas verlo a él?'
    },
    {
      id: 'etimologia', n: 'La falacia etimológica', ref: 'Génesis 1:1',
      visual: [ V(I.GN11) ],
      texto: [
        'Un segundo error es buscar el significado de una palabra en su origen, en su raíz o en las palabras que la forman, en lugar de mirar cómo se usaba en la época del texto. Se llama falacia etimológica. Es tan antigua como el estudio de las palabras, y abunda en las prédicas que dicen «en el hebreo original, esta palabra significa…».',
        { h: 'Un ejemplo en español' },
        'La palabra española «salario» viene del latín de la sal. Nadie diría que quien cobra su salario recibe sal. El origen de una palabra es interesante, pero el significado lo da el uso. Con el hebreo pasa lo mismo, aunque la distancia nos haga olvidarlo.',
        { h: 'Un ejemplo bíblico: בָּרָא' },
        'El verbo בָּרָא, «crear», tiene como sujeto solo a Dios en todo el Antiguo Testamento. Eso es un dato del uso, y es importante. Pero a veces se oye que בָּרָא «significa crear de la nada» porque así lo dirían sus letras o su raíz. El verbo en sí no lo dice: en Génesis 1:27, Dios «creó» al hombre, y Génesis 2:7 cuenta que lo formó del polvo. La doctrina de la creación de la nada es verdadera, pero se apoya en la enseñanza de toda la Escritura (He 11:3; Ro 4:17), no en la etimología de una palabra.',
        { h: 'Las letras con significado secreto' },
        'Una forma extrema de esta falacia es dar un significado a cada letra hebrea (que la א sería «buey» y por eso «fuerza», y así con todas) y leer mensajes ocultos en las palabras. Es atractivo, pero no es cómo funciona ninguna lengua. Ningún israelita leía así su Biblia. El vocabulario del sitio advierte contra esto en su ruta de palabras clave.',
        { ir: { t: 'Ver «Cómo estudiar una palabra» en Vocabulario y gramática', a: '../../gramatica-hebrea/#palabras/1' } },
        { ejercicio: {
          pregunta: '¿Cuál es la mejor manera de saber qué significa una palabra hebrea en un versículo?',
          opciones: [
            { t: 'Mirar el contexto y cómo se usa la palabra en otros pasajes.', ok: true, por_que: 'El significado lo da el uso, y el contexto elige entre los sentidos posibles.' },
            { t: 'Buscar el significado de cada una de sus letras.', ok: false, por_que: 'Las letras no tienen significado propio en una palabra; eso no es cómo funciona el hebreo.' },
            { t: 'Buscar el significado original de su raíz.', ok: false, por_que: 'La raíz ayuda a relacionar palabras, pero el sentido lo da el uso.' }
          ],
          explicacion: 'Uso y contexto, no origen.'
        } }
      ],
      pensar: '«Por la fe entendemos haber sido constituido el universo por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía» (He 11:3). ¿Por qué es mejor apoyar una doctrina en toda la Escritura que en una sola palabra?'
    },
    {
      id: 'totalidad', n: 'Todos los sentidos a la vez', ref: 'Deuteronomio 6:5',
      visual: [ { tipo: 'hebreo', titulo: 'Deuteronomio 6:5 en el interlineal', ref: 'Deuteronomio 6:5', he: 'וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל־לְבָבְךָ וּבְכָל־נַפְשְׁךָ וּבְכָל־מְאֹדֶךָ׃', tr: 'Veahavtá et Adonái eloheja bejal levavjá uvjal nafshejá uvjal meodeja.', palabras: [{ he: 'וְאָהַבְתָּ', tr: 'veahavtá', es: 'y amar' }, { he: 'אֵת', tr: 'et', es: '[obj.]' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֱלֹהֶיךָ', tr: 'eloheja', es: 'tu Dios' }, { he: 'בְּכָל־', tr: 'bejal', es: 'en todo' }, { he: 'לְבָבְךָ', tr: 'levavjá', es: 'tu corazón' }, { he: 'וּבְכָל־', tr: 'uvjal', es: 'y en todo' }, { he: 'נַפְשְׁךָ', tr: 'nafshejá', es: 'tu alma' }, { he: 'וּבְכָל־', tr: 'uvjal', es: 'y en todo' }, { he: 'מְאֹדֶךָ', tr: 'meodeja', es: 'tu fuerza' }], rv: 'Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas.' } ],
      texto: [
        'El tercer error es el contrario del primero: cargar en un versículo todos los sentidos que una palabra tiene en el diccionario. Se oye así: «esta palabra significa alma, vida, deseo, garganta y persona; así que aquí significa todo eso». Los estudiosos lo llaman transferencia ilegítima de la totalidad. Una palabra, en un lugar, dice normalmente una cosa.',
        { h: 'Un ejemplo: נֶפֶשׁ' },
        'En Deuteronomio 6:5, Israel debe amar a Dios «de todo tu corazón, y de toda tu alma, y con todas tus fuerzas». La palabra para «alma» es נֶפֶשׁ, que en otros pasajes es «vida», «persona», «deseo» o incluso «garganta». En este versículo no significa «garganta», aunque el diccionario lo registre. Significa el ser entero, la vida misma, como enseña el paralelo con «corazón» y «fuerzas».',
        { h: 'Un detalle del interlineal' },
        'Mira la última palabra del versículo. El interlineal glosa מְאֹדֶךָ como «tu fuerza». Esa palabra casi siempre es un adverbio, «muy», y su glosa en el vocabulario es «muy». Aquí, con un sufijo, funciona como sustantivo: «tu mucho», «todo lo que eres y tienes». La Reina-Valera traduce «todas tus fuerzas». Es un caso en que el interlineal hace una excepción y lo advierte la ficha, porque la glosa básica no se entendería.',
        { ejercicio: {
          pregunta: 'Alguien dice que en Deuteronomio 6:5 נֶפֶשׁ significa a la vez alma, vida, deseo, garganta y persona. ¿Qué error comete?',
          opciones: [
            { t: 'Carga todos los sentidos del diccionario en un solo versículo.', ok: true, por_que: 'Es la transferencia ilegítima de la totalidad: en cada lugar la palabra dice lo que el contexto pide.' },
            { t: 'La falacia etimológica.', ok: false, por_que: 'No busca el origen de la palabra, sino que suma todos sus usos.' },
            { t: 'Ninguno: en hebreo las palabras significan todo a la vez.', ok: false, por_que: 'Ninguna lengua funciona así, tampoco el hebreo.' }
          ],
          explicacion: 'Un sentido por contexto. Los demás sentidos están en otros versículos.'
        } }
      ],
      pensar: '«Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas» (Dt 6:5). Jesús lo llamó el primero y grande mandamiento (Mt 22:37-38). ¿Qué parte de tu vida todavía no has entregado a ese amor?'
    },
    {
      id: 'orden', n: 'Forzar el orden hebreo', ref: 'Génesis 1:3; Salmo 23:1',
      visual: [ V(I.GN13), V(I.SAL231) ],
      texto: [
        'Un interlineal muestra las palabras en el orden del hebreo. Algunos lectores concluyen que ese orden es «el verdadero» y que las traducciones lo cambian sin razón, o que el orden hebreo encierra un énfasis que debe trasladarse al español. A veces es así, pero la mayoría de las veces no.',
        { h: 'El orden normal del hebreo' },
        'En la prosa hebrea, el orden normal es verbo, sujeto, objeto: «y dijo Dios». En español el orden normal es sujeto, verbo, objeto: «Dios dijo». Cuando la Reina-Valera traduce «Y dijo Dios», conserva el orden hebreo porque en español también se puede decir así; otras veces lo cambia porque en español sonaría extraño. No pierde nada, porque en hebreo ese orden no tenía un énfasis especial: era la manera normal de contar.',
        { h: 'Cuando el orden sí dice algo' },
        'El énfasis aparece cuando el hebreo se aparta de su orden normal. En el Salmo 23:1, la oración no tiene verbo: «Jehová, mi pastor». El nombre de Dios va primero y la frase lo pone en el centro. En Génesis 1:1, el complemento de tiempo, «en el principio», va antes del verbo y abre toda la Biblia. Para notar estos casos hay que conocer primero el orden normal, y eso se aprende leyendo mucho.',
        { h: 'Una regla práctica' },
        'No busques un mensaje en el orden de cada versículo. Si un comentario serio señala un énfasis por el orden de las palabras, el interlineal te permite verlo con tus ojos. Si nadie lo señala, lo más probable es que el orden sea el normal.',
        { ejercicio: {
          pregunta: 'En el interlineal, Génesis 1:3 dice «y decir · Dios». ¿Qué conclusión es correcta?',
          opciones: [
            { t: 'Es el orden normal del relato hebreo, verbo y sujeto, sin énfasis especial.', ok: true, por_que: 'Así empiezan cientos de frases en la narración hebrea.' },
            { t: 'El hebreo pone el verbo primero para enfatizar que Dios habla.', ok: false, por_que: 'Es el orden normal; el énfasis estaría en una alteración de ese orden.' },
            { t: 'La traducción debe decir «decir Dios».', ok: false, por_que: 'Eso no es español; la traducción usa la forma y el orden del español.' }
          ],
          explicacion: 'Primero hay que conocer el orden normal; solo así se nota cuando cambia.'
        } }
      ],
      pensar: 'En el Salmo 23, David empieza por Dios y después habla de sí mismo. ¿En tus oraciones empiezas por Dios o por tus necesidades? ¿Qué cambiaría si siguieras el orden de David?'
    },
    {
      id: 'en-el-hebreo', n: '«En el hebreo dice…»', ref: 'Isaías 7:14',
      visual: [ { tipo: 'hebreo', titulo: 'Isaías 7:14 en el interlineal', ref: 'Isaías 7:14', he: 'לָכֵן יִתֵּן אֲדֹנָי הוּא לָכֶם אוֹת הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן וְקָרָאת שְׁמוֹ עִמָּנוּ אֵל׃', tr: 'Lajén yitén adonái lajem ot hiné haalmá hará veyolédet ben vekarat shemó Imanu El.', palabras: [{ he: 'לָכֵן', tr: 'lajén', es: 'por tanto' }, { he: 'יִתֵּן', tr: 'yitén', es: 'dar' }, { he: 'אֲדֹנָי', tr: 'adonái', es: 'mi Señor' }, { he: 'הוּא', tr: '', es: 'él' }, { he: 'לָכֶם', tr: 'lajem', es: 'a vosotros' }, { he: 'אוֹת', tr: 'ot', es: 'señal' }, { he: 'הִנֵּה', tr: 'hiné', es: '¡he aquí!' }, { he: 'הָעַלְמָה', tr: 'haalmá', es: 'la doncella' }, { he: 'הָרָה', tr: 'hará', es: 'encinta' }, { he: 'וְיֹלֶדֶת', tr: 'veyolédet', es: 'y dar a luz' }, { he: 'בֵּן', tr: 'ben', es: 'hijo' }, { he: 'וְקָרָאת', tr: 'vekarat', es: 'y llamar' }, { he: 'שְׁמוֹ', tr: 'shemó', es: 'su nombre (de él)' }, { he: 'עִמָּנוּ', tr: 'Imanu', es: 'Emanuel' }, { he: 'אֵל', tr: 'El', es: '(sigue el nombre)' }], rv: 'Por tanto, el Señor mismo os dará señal: He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel.' } ],
      texto: [
        'Con un interlineal en la mano, es fácil sentir que uno puede corregir a todas las traducciones. Hay que tener cuidado: las traducciones las hicieron equipos que dedicaron años al hebreo. Si alguien encuentra en el interlineal un sentido que ninguna traducción reconocida da, lo más probable es que el error esté en la lectura, no en las traducciones.',
        { h: 'Un caso conocido: עַלְמָה' },
        'En Isaías 7:14, la Reina-Valera traduce «la virgen concebirá». La palabra hebrea es עַלְמָה, que el interlineal glosa «doncella»: una joven en edad de casarse. Algunos argumentan que, si Isaías hubiera querido decir «virgen», habría usado בְּתוּלָה, y que por eso el versículo no habla de un nacimiento virginal. Otros responden que עַלְמָה nunca se usa en el Antiguo Testamento para una mujer casada, y que en esa cultura una doncella era una virgen.',
        { posturas: {
          titulo: '¿«Doncella» o «virgen» en Isaías 7:14?',
          a: { n: 'Profecía del nacimiento virginal', t: 'עַלְמָה designa a una joven soltera, que en Israel se entendía virgen. La traducción griega de los judíos, siglos antes de Cristo, puso παρθένος, «virgen», y Mateo 1:22-23 cita ese texto y dice que se cumplió en Jesús. La señal tiene un cumplimiento pleno en el Mesías, Emanuel, «Dios con nosotros».' },
          b: { n: 'Solo una joven de la época de Isaías', t: 'עַלְמָה significa solo «joven», sin decir nada sobre su virginidad; la señal se refiere a un niño nacido en tiempos del rey Acaz.' },
          c: 'Las dos posturas parten de la misma palabra; las separa la manera de leer el contexto y el Nuevo Testamento. Este sitio sigue la primera, junto con la Reina-Valera y la fe de la iglesia, porque Mateo la cita con autoridad. Aun quien piense que la profecía tuvo un primer cumplimiento en tiempos de Acaz puede reconocer su cumplimiento pleno en Cristo.'
        } },
        { h: 'Lo que enseña este caso' },
        'El interlineal muestra la palabra; no decide sola la interpretación. Para entender un pasaje discutido hay que leer el contexto, ver cómo se usa la palabra en otros lugares y escuchar al resto de la Escritura, que para un cristiano incluye cómo el Nuevo Testamento lee el Antiguo.'
      ],
      pensar: '«He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros» (Mt 1:23). ¿Qué significa para ti hoy que Dios esté contigo en Cristo?'
    },
    {
      id: 'elohim', n: 'Formas que engañan: el plural de אֱלֹהִים', ref: 'Génesis 1:1, 26; Deuteronomio 6:4',
      visual: [
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:4 en el interlineal', ref: 'Deuteronomio 6:4', he: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד׃', tr: 'Shemá Yisrael Adonái elohenu Adonái ejad.', palabras: [{ he: 'שְׁמַע', tr: 'shemá', es: 'oír' }, { he: 'יִשְׂרָאֵל', tr: 'Yisrael', es: 'Israel' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֱלֹהֵינוּ', tr: 'elohenu', es: 'nuestro Dios' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֶחָד', tr: 'ejad', es: 'uno' }], rv: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.' },
        { tipo: 'tabla', titulo: 'Un plural con verbo singular', tabla: {
          titulo: 'אֱלֹהִים en la morfología',
          cab: ['Palabra', 'Morfología', 'Concordancia'],
          filas: [
            ['בָּרָא', 'qal perf. 3ms', 'el verbo está en singular'],
            ['אֱלֹהִים', 'sust. mp', 'el sustantivo está en plural'],
            ['אֱלֹהִים אֲחֵרִים (Éx 20:3)', 'sust. mp + adj. mp', 'aquí sí es plural: «dioses ajenos»']
          ],
          nota: 'El interlineal glosa אֱלֹהִים siempre como «Dios»; la morfología muestra que la forma es plural.'
        } }
      ],
      texto: [
        'La fila de morfología a veces muestra datos que sorprenden. El caso más conocido es אֱלֹהִים, la palabra más común para «Dios». Su forma es plural, pero cuando se refiere al Dios de Israel lleva el verbo en singular: בָּרָא אֱלֹהִים, «creó Dios», no «crearon dioses». El interlineal la glosa siempre «Dios», y la morfología dice «sust. mp».',
        { h: 'Qué dice el plural' },
        'Los gramáticos lo llaman plural de majestad o de plenitud: una forma plural para expresar grandeza. El hebreo lo usa también con otras palabras, como «señor» (אֲדֹנִים) cuando habla de un solo amo. Cuando אֱלֹהִים se refiere a los dioses de las naciones, lleva verbos y adjetivos en plural, como en Éxodo 20:3, «dioses ajenos».',
        { posturas: {
          titulo: '¿El plural de אֱלֹהִים enseña la Trinidad?',
          a: { n: 'Es una pista compatible', t: 'Muchos creyentes ven en el plural, y en textos como «Hagamos al hombre» (Gn 1:26), una apertura del Antiguo Testamento que se aclara con la revelación del Hijo y del Espíritu.' },
          b: { n: 'No prueba nada por sí solo', t: 'El plural de majestad se explica por la gramática del hebreo; los judíos lo leyeron siempre junto con «Jehová uno es» (Dt 6:4).' },
          c: 'Las dos observaciones son compatibles. La doctrina de la Trinidad se apoya en todo el testimonio de la Escritura, en especial del Nuevo Testamento, como enseña el recurso Dios y la Trinidad; el plural de אֱלֹהִים armoniza con ella, pero no hace falta cargar sobre él todo el peso.'
        } },
        { ir: { t: 'Ver Dios y la Trinidad', a: '../../dios-y-la-trinidad/' } },
        { ejercicio: {
          pregunta: 'La morfología dice que אֱלֹהִים es plural, pero el verbo está en singular. ¿Cómo se traduce Génesis 1:1?',
          opciones: [
            { t: '«creó Dios», porque el verbo singular muestra que se habla de un solo Dios.', ok: true, por_que: 'La concordancia con el verbo decide la traducción.' },
            { t: '«crearon los dioses», porque la palabra es plural.', ok: false, por_que: 'El verbo singular no lo permite.' },
            { t: 'No se puede saber.', ok: false, por_que: 'La gramática lo deja claro: el verbo singular concuerda con un solo sujeto.' }
          ],
          explicacion: 'Forma plural, sentido singular: la concordancia lo muestra.'
        } }
      ],
      pensar: '«Oye, Israel: Jehová nuestro Dios, Jehová uno es» (Dt 6:4). ¿Cómo vives la verdad de que hay un solo Dios cuando tantas cosas compiten por tu confianza?'
    }
  ];

  const traduccion = [
    {
      id: 'comparar', n: 'Comparar con la Reina-Valera', ref: 'Rut 1:16',
      visual: [ { tipo: 'hebreo', titulo: 'Rut 1:16 en el interlineal', ref: 'Rut 1:16', he: 'וַתֹּאמֶר רוּת אַל־תִּפְגְּעִי־בִי לְעָזְבֵךְ לָשׁוּב מֵאַחֲרָיִךְ כִּי אֶל־אֲשֶׁר תֵּלְכִי אֵלֵךְ וּבַאֲשֶׁר תָּלִינִי אָלִין עַמֵּךְ עַמִּי וֵאלֹהַיִךְ אֱלֹהָי׃', tr: 'Vatómer al tifgei vi leazvej lashuv meajaráyij ki el asher teljí elej uvaasher talini alín amej amí veloháyij elohái.', palabras: [{ he: 'וַתֹּאמֶר', tr: 'vatómer', es: 'y decir' }, { he: 'רוּת', tr: '', es: 'Rut' }, { he: 'אַל־', tr: 'al', es: 'no' }, { he: 'תִּפְגְּעִי־', tr: 'tifgei', es: 'encontrar' }, { he: 'בִי', tr: 'vi', es: 'en mí' }, { he: 'לְעָזְבֵךְ', tr: 'leazvej', es: 'para dejarte' }, { he: 'לָשׁוּב', tr: 'lashuv', es: 'para volver' }, { he: 'מֵאַחֲרָיִךְ', tr: 'meajaráyij', es: 'de después de ti' }, { he: 'כִּי', tr: 'ki', es: 'porque' }, { he: 'אֶל־', tr: 'el', es: 'a' }, { he: 'אֲשֶׁר', tr: 'asher', es: 'que' }, { he: 'תֵּלְכִי', tr: 'teljí', es: 'ir' }, { he: 'אֵלֵךְ', tr: 'elej', es: 'ir' }, { he: 'וּבַאֲשֶׁר', tr: 'uvaasher', es: 'y en que' }, { he: 'תָּלִינִי', tr: 'talini', es: 'pasar la noche' }, { he: 'אָלִין', tr: 'alín', es: 'pasar la noche' }, { he: 'עַמֵּךְ', tr: 'amej', es: 'tu pueblo' }, { he: 'עַמִּי', tr: 'amí', es: 'mi pueblo' }, { he: 'וֵאלֹהַיִךְ', tr: 'veloháyij', es: 'y tu Dios' }, { he: 'אֱלֹהָי', tr: 'elohái', es: 'mi Dios' }], rv: 'Respondió Rut: No me ruegues que te deje, y me aparte de ti; porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios.' } ],
      texto: [
        'El paso final del interlineal es volver a la traducción. Leer una línea de glosas y después la Reina-Valera te muestra qué decisiones tomó el traductor, y casi siempre te hará valorar mejor su trabajo.',
        { h: 'Lo que la traducción agrega' },
        'Mira Rut 1:16. Las glosas dicen: «no · encontrar · en mí · para dejarte · para volver · de después de ti». La Reina-Valera dice: «No me ruegues que te deje, y me aparte de ti». El verbo פָּגַע tiene como glosa básica «encontrar» o «salir al encuentro»; con la preposición «en» significa «insistir», «rogar», y así lo tradujo la Reina-Valera. El traductor también convirtió «de después de ti» en «de ti», porque en español no se dice «volverse de detrás de alguien». También agregó «que» para unir las frases. Son palabras que el español necesita y el hebreo no.',
        { h: 'Lo que la traducción omite' },
        'La traducción omite lo que el español no necesita: la marca אֵת, algunas «y» del relato, el artículo cuando sobra. No omite sentido; omite palabras que en español serían ruido.',
        { h: 'Cómo comparar' },
        'Recorre la línea hebrea y busca en la traducción dónde quedó cada palabra. Marca las que la traducción no tiene y las que agrega. Pregúntate por qué. Si una decisión no te queda clara, compara con otra traducción: si coinciden, probablemente es la forma natural de decirlo en español.',
        { ejercicio: {
          pregunta: 'La traducción tiene una palabra que no está en las glosas. ¿Qué es lo más probable?',
          opciones: [
            { t: 'Que el español la necesita para expresar lo que el hebreo dice con su gramática.', ok: true, por_que: 'Un «que», un artículo o un pronombre suelen estar implícitos en la forma hebrea.' },
            { t: 'Que el traductor añadió algo a la Palabra de Dios.', ok: false, por_que: 'Expresar en español lo que el hebreo dice no es añadir a la Palabra.' },
            { t: 'Que el interlineal está incompleto.', ok: false, por_que: 'El interlineal muestra todas las palabras hebreas; la diferencia está en la gramática de cada lengua.' }
          ],
          explicacion: 'Cada lengua dice lo mismo con piezas distintas.'
        } }
      ],
      pensar: '«Tu pueblo será mi pueblo, y tu Dios mi Dios» (Rt 1:16). Rut eligió pertenecer al pueblo de Dios. ¿Qué significa para ti hoy pertenecer al pueblo de Dios?'
    },
    {
      id: 'modismos', n: 'Los modismos hebreos', ref: 'Génesis 6:8; 18:2',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 6:8 en el interlineal', ref: 'Génesis 6:8', he: 'וְנֹחַ מָצָא חֵן בְּעֵינֵי יְהוָה׃', tr: 'Ve-Nóaj matsa jen beené Adonái.', palabras: [{ he: 'וְנֹחַ', tr: 've-Nóaj', es: 'y Noé' }, { he: 'מָצָא', tr: 'matsa', es: 'hallar' }, { he: 'חֵן', tr: 'jen', es: 'gracia' }, { he: 'בְּעֵינֵי', tr: 'beené', es: 'en ojos de' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }], rv: 'Pero Noé halló gracia ante los ojos de Jehová.' },
        { tipo: 'tabla', titulo: 'Giros que se repiten', tabla: {
          titulo: 'Modismos hebreos y su traducción',
          cab: ['Palabra por palabra', 'Sentido', 'RV 1960 (ejemplo)'],
          filas: [
            ['hallar gracia en los ojos de', 'agradar, recibir favor', 'Noé halló gracia ante los ojos de Jehová (Gn 6:8)'],
            ['a rostros de', 'delante de', 'delante de Jehová'],
            ['alzar los ojos y ver', 'mirar', 'alzó sus ojos y miró (Gn 18:2)'],
            ['largo de narices', 'lento para la ira', 'tardo para la ira (Éx 34:6)'],
            ['hijo de … años', 'de … años de edad', 'era Noé de seiscientos años (Gn 7:6)'],
            ['cortar un pacto', 'hacer un pacto', 'hizo un pacto (Gn 15:18)']
          ],
          nota: 'El interlineal glosa לִפְנֵי directamente como «delante de», porque «a rostros de» no se entendería.'
        } }
      ],
      texto: [
        'Toda lengua tiene modismos: expresiones cuyo sentido no es la suma de sus palabras. En español decimos «tomar el pelo» sin hablar de pelo. El hebreo tiene los suyos, y el interlineal los muestra tal como son.',
        { h: 'Algunos ejemplos' },
        'En Génesis 6:8, Noé «halló gracia ante los ojos de Jehová». Palabra por palabra, el hebreo dice «halló gracia en los ojos de Jehová»: es la manera hebrea de decir que alguien recibe el favor de otro. La Reina-Valera conserva el giro porque se entiende. Otras veces lo cambia: «largo de narices» es la expresión hebrea para «paciente», porque la nariz que se enciende es la imagen de la ira; la Reina-Valera traduce «tardo para la ira» (Éx 34:6).',
        'Un modismo muy frecuente es לִפְנֵי, literalmente «a la faz de», que significa «delante de». Aparece más de mil veces. El interlineal lo glosa directamente «delante de», porque la glosa palabra por palabra confundiría.',
        { h: 'Para qué sirve conocerlos' },
        'Conocer los modismos evita dos errores: leer literalmente lo que es una figura, y creer que la traducción «cambió» el texto cuando solo dijo en español lo que el hebreo dice con su giro. También enriquece la lectura: «halló gracia en los ojos de Jehová» pinta la mirada favorable de Dios sobre Noé.',
        { ejercicio: {
          pregunta: 'En el interlineal ves «largo de narices» en Éxodo 34:6. ¿Qué significa?',
          opciones: [
            { t: 'Lento para enojarse, paciente.', ok: true, por_que: 'Es un modismo: la nariz encendida representa la ira, y una nariz «larga» tarda en encenderse.' },
            { t: 'Que Dios tiene forma humana.', ok: false, por_que: 'Es una figura del lenguaje, no una descripción física.' },
            { t: 'Que Dios es orgulloso.', ok: false, por_que: 'El contexto habla de misericordia y paciencia.' }
          ],
          explicacion: 'Un modismo se traduce por su sentido, no palabra por palabra.'
        } }
      ],
      pensar: '«Noé halló gracia ante los ojos de Jehová» (Gn 6:8). En medio de un mundo corrompido, Noé vivió bajo la mirada favorable de Dios. ¿Qué significa para ti hallar gracia delante de Dios por medio de Cristo?'
    },
    {
      id: 'nombre', n: 'El nombre de Dios en el interlineal', ref: 'Éxodo 3:15',
      visual: [ { tipo: 'hebreo', titulo: 'Éxodo 3:15 en el interlineal', ref: 'Éxodo 3:15', he: 'וַיֹּאמֶר עוֹד אֱלֹהִים אֶל־מֹשֶׁה כֹּה־תֹאמַר אֶל־בְּנֵי יִשְׂרָאֵל יְהוָה אֱלֹהֵי אֲבֹתֵיכֶם אֱלֹהֵי אַבְרָהָם אֱלֹהֵי יִצְחָק וֵאלֹהֵי יַעֲקֹב שְׁלָחַנִי אֲלֵיכֶם זֶה־שְּׁמִי לְעֹלָם וְזֶה זִכְרִי לְדֹר דֹּר׃', tr: 'Vayomer od elohim el Moshé ko tomar el bené Yisrael Adonái elohé avotejem elohé Avraham elohé Yitsjak velohé Yaakov shelajani alejem ze shemí leolam vezé zijrí ledor dor.', palabras: [{ he: 'וַיֹּאמֶר', tr: 'vayomer', es: 'y decir' }, { he: 'עוֹד', tr: 'od', es: 'todavía' }, { he: 'אֱלֹהִים', tr: 'elohim', es: 'Dios' }, { he: 'אֶל־', tr: 'el', es: 'a' }, { he: 'מֹשֶׁה', tr: 'Moshé', es: 'Moisés' }, { he: 'כֹּה־', tr: 'ko', es: 'así' }, { he: 'תֹאמַר', tr: 'tomar', es: 'decir' }, { he: 'אֶל־', tr: 'el', es: 'a' }, { he: 'בְּנֵי', tr: 'bené', es: 'hijos de' }, { he: 'יִשְׂרָאֵל', tr: 'Yisrael', es: 'Israel' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֱלֹהֵי', tr: 'elohé', es: 'Dios de' }, { he: 'אֲבֹתֵיכֶם', tr: 'avotejem', es: 'vuestros padres' }, { he: 'אֱלֹהֵי', tr: 'elohé', es: 'Dios de' }, { he: 'אַבְרָהָם', tr: 'Avraham', es: 'Abraham' }, { he: 'אֱלֹהֵי', tr: 'elohé', es: 'Dios de' }, { he: 'יִצְחָק', tr: 'Yitsjak', es: 'Isaac' }, { he: 'וֵאלֹהֵי', tr: 'velohé', es: 'y Dios de' }, { he: 'יַעֲקֹב', tr: 'Yaakov', es: 'Jacob' }, { he: 'שְׁלָחַנִי', tr: 'shelajani', es: 'enviarme' }, { he: 'אֲלֵיכֶם', tr: 'alejem', es: 'a vosotros' }, { he: 'זֶה־', tr: 'ze', es: 'este' }, { he: 'שְּׁמִי', tr: 'shemí', es: 'mi nombre' }, { he: 'לְעֹלָם', tr: 'leolam', es: 'a siempre' }, { he: 'וְזֶה', tr: 'vezé', es: 'y este' }, { he: 'זִכְרִי', tr: 'zijrí', es: 'mi recuerdo' }, { he: 'לְדֹר', tr: 'ledor', es: 'a generación' }, { he: 'דֹּר', tr: 'dor', es: 'generación' }], rv: 'Además dijo Dios a Moisés: Así dirás a los hijos de Israel: Jehová, el Dios de vuestros padres, el Dios de Abraham, Dios de Isaac y Dios de Jacob, me ha enviado a vosotros. Este es mi nombre para siempre; con él se me recordará por todos los siglos.' } ],
      texto: [
        'El nombre propio de Dios en el Antiguo Testamento son cuatro consonantes: יהוה. Aparece más de 6.500 veces. En Éxodo 3:15, Dios lo da a Moisés como su nombre para siempre.',
        { h: 'Cómo se leía' },
        'Con el tiempo, por reverencia, los judíos dejaron de pronunciarlo. Al leer en voz alta decían אֲדֹנָי, Adonái, «Señor». Los masoretas pusieron en las cuatro consonantes las vocales de Adonái, para que el lector supiera qué decir. Por eso la transliteración del interlineal dice Adonái: es lo que el texto indica leer. Donde el texto ya dice «Adonái» junto al nombre, los masoretas pusieron las vocales de Elohim, y el interlineal translitera Elohím.',
        { h: 'Cómo se traduce' },
        'Las primeras traducciones españolas combinaron las consonantes del nombre con las vocales de Adonái y formaron «Jehová». La Reina-Valera usa esa forma, y el interlineal la sigue en la glosa. Otras traducciones ponen «el SEÑOR» o «Yahvé». Por eso, en el interlineal verás Adonái arriba y Jehová abajo: no es un error, son dos cosas distintas, la lectura y la traducción.',
        { posturas: {
          titulo: '¿Jehová o Yahvé?',
          a: { n: 'Jehová', t: 'Es la forma de la tradición de la Reina-Valera y de los himnos de la iglesia hispana; combina las consonantes con las vocales que el texto masorético indica.' },
          b: { n: 'Yahvé', t: 'Muchos estudiosos piensan que la pronunciación antigua era parecida a «Yahvé», por testimonios antiguos y por formas abreviadas como «Yah».' },
          c: 'La pronunciación original no se conoce con certeza. Las dos formas nombran al mismo Dios, y lo importante es lo que el nombre revela: el Dios que es, que estuvo con su pueblo y que cumple sus promesas (Éx 3:14-15).'
        } }
      ],
      pensar: '«Este es mi nombre para siempre; con él se me recordará por todos los siglos» (Éx 3:15). ¿Qué te dice del carácter de Dios que se haya dado a conocer con un nombre propio?'
    },
    {
      id: 'metodo', n: 'Un método en cinco pasos', ref: 'Josué 1:8',
      visual: [
        { tipo: 'hebreo', titulo: 'Josué 1:8 en el interlineal', ref: 'Josué 1:8', he: 'לֹא־יָמוּשׁ סֵפֶר הַתּוֹרָה הַזֶּה מִפִּיךָ וְהָגִיתָ בּוֹ יוֹמָם וָלַיְלָה לְמַעַן תִּשְׁמֹר לַעֲשׂוֹת כְּכָל־הַכָּתוּב בּוֹ כִּי־אָז תַּצְלִיחַ אֶת־דְּרָכֶךָ וְאָז תַּשְׂכִּיל׃', tr: 'Lo yamush sefer hatorá hazé mipija vehagita bo yomam valayla lemaan tishmor laasot kejal hakatuv bo ki az tatslíaj et derajeja veaz taskil.', palabras: [{ he: 'לֹא־', tr: 'lo', es: 'no' }, { he: 'יָמוּשׁ', tr: 'yamush', es: 'apartarse' }, { he: 'סֵפֶר', tr: 'sefer', es: 'libro de' }, { he: 'הַתּוֹרָה', tr: 'hatorá', es: 'la ley' }, { he: 'הַזֶּה', tr: 'hazé', es: 'este' }, { he: 'מִפִּיךָ', tr: 'mipija', es: 'de tu boca' }, { he: 'וְהָגִיתָ', tr: 'vehagita', es: 'y meditar' }, { he: 'בּוֹ', tr: 'bo', es: 'en él' }, { he: 'יוֹמָם', tr: 'yomam', es: 'de día' }, { he: 'וָלַיְלָה', tr: 'valayla', es: 'y noche' }, { he: 'לְמַעַן', tr: 'lemaan', es: 'por causa de' }, { he: 'תִּשְׁמֹר', tr: 'tishmor', es: 'guardar' }, { he: 'לַעֲשׂוֹת', tr: 'laasot', es: 'para hacer' }, { he: 'כְּכָל־', tr: 'kejal', es: 'como todo' }, { he: 'הַכָּתוּב', tr: 'hakatuv', es: 'escribir' }, { he: 'בּוֹ', tr: 'bo', es: 'en él' }, { he: 'כִּי־', tr: 'ki', es: 'porque' }, { he: 'אָז', tr: 'az', es: 'entonces' }, { he: 'תַּצְלִיחַ', tr: 'tatslíaj', es: 'prosperar' }, { he: 'אֶת־', tr: 'et', es: '[obj.]' }, { he: 'דְּרָכֶךָ', tr: 'derajeja', es: 'tus caminos' }, { he: 'וְאָז', tr: 'veaz', es: 'y entonces' }, { he: 'תַּשְׂכִּיל', tr: 'taskil', es: 'entender' }], rv: 'Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito; porque entonces harás prosperar tu camino, y todo te saldrá bien.' },
        { tipo: 'tabla', titulo: 'Los cinco pasos', tabla: {
          titulo: 'Cómo estudiar un versículo con el interlineal',
          cab: ['Paso', 'Qué haces'],
          filas: [
            ['1. Leer la traducción', 'Lee el pasaje completo en la Reina-Valera y escribe tu pregunta'],
            ['2. Leer la línea', 'Recorre el hebreo de derecha a izquierda, en voz alta, con la glosa'],
            ['3. Abrir la ficha', 'En las palabras clave, mira las piezas, la forma y el número de Strong'],
            ['4. Comparar', 'Vuelve a la traducción: qué agregó, qué omitió, qué decidió'],
            ['5. Confirmar', 'Mira otros usos de la palabra y un buen comentario antes de concluir']
          ],
          nota: 'El orden importa: se empieza y se termina en la traducción.'
        } }
      ],
      texto: [
        'Este método resume lo aprendido. Sirve para preparar un estudio bíblico, para seguir un comentario o para meditar en un versículo.',
        { h: '1 y 2. Traducción y línea' },
        'Empieza siempre por la traducción, leyendo el pasaje completo, no solo el versículo. Escribe qué quieres averiguar: ¿qué palabra está detrás de «meditar»? Después recorre la línea hebrea. En Josué 1:8, el verbo traducido «meditarás» es הָגָה, el mismo del Salmo 1:2.',
        { h: '3. La ficha' },
        'Abre la ficha de la palabra que te interesa. Verás su lema, su forma y cuántas veces aparece. Si quieres ver otros usos, anota el número de Strong y búscalo en una concordancia, o busca la palabra en el vocabulario si es una de las 751.',
        { h: '4 y 5. Comparar y confirmar' },
        'Vuelve a la traducción con lo aprendido. Antes de enseñar algo a otros, confírmalo: mira la palabra en otros pasajes, compara traducciones y consulta un comentario. Si tu conclusión no la da ninguna traducción ni ningún comentario serio, revísala de nuevo.',
        { ir: { t: 'Abrir Josué 1:8 en el interlineal', a: 'interlineal/#jos/1/8', marco: true } },
        { ejercicio: {
          pregunta: '¿Por qué el método empieza y termina en la traducción?',
          opciones: [
            { t: 'Porque el interlineal ayuda a entender el texto, pero no reemplaza la lectura del pasaje en una traducción.', ok: true, por_que: 'El contexto y el sentido completo se leen mejor en la traducción; el interlineal ilumina detalles.' },
            { t: 'Porque las traducciones siempre tienen razón y el hebreo no importa.', ok: false, por_que: 'El hebreo importa: por eso existe el interlineal. Pero se usa junto con la traducción.' },
            { t: 'Porque así es más rápido.', ok: false, por_que: 'El motivo es entender bien, no la rapidez.' }
          ],
          explicacion: 'Traducción → interlineal → traducción: del todo a la parte y de vuelta al todo.'
        } }
      ],
      pensar: '«Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él» (Jos 1:8). ¿Cómo puede el estudio cuidadoso de una palabra convertirse en meditación y obediencia, y no solo en conocimiento?'
    }
  ];

  const taller = [
    {
      id: 'gn1', n: 'Génesis 1:1, palabra por palabra', ref: 'Génesis 1:1',
      visual: [ V(I.GN11) ],
      texto: [
        'Aplica el método al primer versículo de la Biblia. Ábrelo también en la página del interlineal y toca cada palabra.',
        { ir: { t: 'Abrir Génesis 1:1 en el interlineal', a: 'interlineal/#gn/1/1', marco: true } },
        'Hay siete palabras. בְּרֵאשִׁית es la preposición «en» con el sustantivo «principio», sin artículo; la traducción agrega «el» porque en español se necesita. בָּרָא es un verbo qal en perfecto, tercera persona masculina singular: «creó». אֱלֹהִים es «Dios», plural en forma y singular en sentido, como muestra el verbo. אֵת marca el complemento directo y no se traduce. הַשָּׁמַיִם es «los cielos», con artículo; la palabra hebrea solo existe en plural. וְאֵת es «y» con la marca del complemento. הָאָרֶץ es «la tierra».',
        { h: 'Compara con la Reina-Valera' },
        'Ahora vuelve a la traducción: «En el principio creó Dios los cielos y la tierra». El orden cambió una sola vez, al poner el verbo antes del sujeto, que en español también es natural; se agregó el artículo «el» delante de «principio»; y se omitieron las dos marcas del complemento directo. Ninguna de esas decisiones cambia el sentido. La expresión «los cielos y la tierra» es un modo hebreo de decir «todo lo que existe»: los dos extremos nombran el conjunto. Con ese dato, el versículo afirma que no hay nada que Dios no haya creado.',
        { ejercicio: {
          pregunta: '¿Cuántas palabras hebreas de Génesis 1:1 no tienen una palabra correspondiente en la Reina-Valera?',
          opciones: [
            { t: 'Dos: las dos marcas אֵת del complemento directo.', ok: true, por_que: 'אֵת y la אֵת de וְאֵת no se traducen; la «y» de וְאֵת sí.' },
            { t: 'Ninguna.', ok: false, por_que: 'Las dos marcas del complemento directo no tienen equivalente en español.' },
            { t: 'Cuatro.', ok: false, por_que: 'Cuenta de nuevo: solo las marcas del complemento quedan sin palabra.' }
          ],
          explicacion: 'Lo que no se traduce como palabra, se expresa con el orden del español.'
        } }
      ],
      pensar: 'La Biblia empieza afirmando que todo lo que existe tiene un Creador. ¿Cómo cambia tu manera de cuidar la creación, tu cuerpo y tu tiempo saber que todo es de Dios (Sal 24:1)?'
    },
    {
      id: 'dt64', n: 'Deuteronomio 6:4, la Shemá', ref: 'Deuteronomio 6:4',
      visual: [ { tipo: 'hebreo', titulo: 'Deuteronomio 6:4 en el interlineal', ref: 'Deuteronomio 6:4', he: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד׃', tr: 'Shemá Yisrael Adonái elohenu Adonái ejad.', palabras: [{ he: 'שְׁמַע', tr: 'shemá', es: 'oír' }, { he: 'יִשְׂרָאֵל', tr: 'Yisrael', es: 'Israel' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֱלֹהֵינוּ', tr: 'elohenu', es: 'nuestro Dios' }, { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' }, { he: 'אֶחָד', tr: 'ejad', es: 'uno' }], rv: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.' } ],
      texto: [
        'La Shemá («oye») es la confesión de fe de Israel, y Jesús la citó como el comienzo del primer mandamiento (Mr 12:29). Tiene solo seis palabras.',
        { ir: { t: 'Abrir Deuteronomio 6:4 en el interlineal', a: 'interlineal/#dt/6/4', marco: true } },
        'שְׁמַע es un imperativo: «oye». יִשְׂרָאֵל es el nombre propio. Después vienen cuatro palabras sin ningún verbo: יְהוָה, «Jehová» (se lee Adonái); אֱלֹהֵינוּ, «Dios» en constructo con el sufijo «nuestro»; otra vez יְהוָה; y אֶחָד, «uno». La oración sin verbo deja abiertas dos maneras de traducir: «Jehová nuestro Dios, Jehová uno es», como la Reina-Valera, o «Jehová es nuestro Dios, solo Jehová».',
        { h: 'Lo que dice la palabra אֶחָד' },
        'La glosa de אֶחָד es «uno», el número. Algunos maestros afirman que esta palabra significa siempre una «unidad compuesta» y otros que significa «único y solitario». Las dos afirmaciones cargan demasiado sobre una palabra: אֶחָד es simplemente «uno», y en Génesis 2:24 se usa para el hombre y la mujer que llegan a ser «una sola carne». El versículo confiesa que solo Jehová es Dios, frente a los dioses de las naciones. La plenitud de quién es ese Dios único se revela en toda la Escritura, y el Nuevo Testamento la confiesa en el Padre, el Hijo y el Espíritu Santo.',
        { ejercicio: {
          pregunta: '¿Qué dice la ficha de אֱלֹהֵינוּ?',
          opciones: [
            { t: 'Sustantivo masculino plural en constructo, con sufijo de 1.ª persona común plural: «nuestro Dios».', ok: true, por_que: 'El sufijo «nuestro» va pegado a una forma constructa.' },
            { t: 'Verbo en primera persona plural: «adoramos».', ok: false, por_que: 'No hay verbo en la frase; es un sustantivo con sufijo.' },
            { t: 'Adjetivo «uno».', ok: false, por_que: '«Uno» es la última palabra, אֶחָד.' }
          ],
          explicacion: 'Sustantivo + sufijo posesivo: «nuestro Dios».'
        } }
      ],
      pensar: 'Israel debía repetir la Shemá en la casa, en el camino, al acostarse y al levantarse (Dt 6:7). ¿Qué verdad sobre Dios necesitas repetir tú cada día?'
    },
    {
      id: 'sal23', n: 'Salmo 23:1-2', ref: 'Salmo 23:1-2',
      visual: [ V(I.SAL231), { tipo: 'hebreo', titulo: 'Salmo 23:2 en el interlineal', ref: 'Salmo 23:2', he: 'בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי׃', tr: 'Binot deshé yarbitseni al me menujot yenahaleni.', palabras: [{ he: 'בִּנְאוֹת', tr: 'binot', es: 'en moradas de' }, { he: 'דֶּשֶׁא', tr: 'deshé', es: 'hierba' }, { he: 'יַרְבִּיצֵנִי', tr: 'yarbitseni', es: 'recostarse a mí' }, { he: 'עַל־', tr: 'al', es: 'sobre' }, { he: 'מֵי', tr: 'me', es: 'aguas de' }, { he: 'מְנֻחוֹת', tr: 'menujot', es: 'reposos' }, { he: 'יְנַהֲלֵנִי', tr: 'yenahaleni', es: 'conducirme' }], rv: 'En lugares de delicados pastos me hará descansar; Junto a aguas de reposo me pastoreará.' } ],
      texto: [
        'El Salmo 23 es uno de los pasajes más conocidos del Antiguo Testamento. En el interlineal, el versículo 1 empieza con el título, מִזְמוֹר לְדָוִד, «salmo de David». La Reina-Valera lo pone en letra pequeña, sin número; aquí coincide la numeración porque el título y la primera frase forman un solo versículo.',
        { ir: { t: 'Abrir el Salmo 23 en el interlineal', a: 'interlineal/#sal/23/1', marco: true } },
        'Busca en el versículo 1 las palabras רֹעִי, «mi pastor» (participio con sufijo), y אֶחְסָר, «me faltará» (imperfecto, primera persona). En el versículo 2, יַרְבִּיצֵנִי es un hifil, causativo, con el sufijo de objeto «me»: «me hace descansar». יְנַהֲלֵנִי es un piel con el mismo sufijo: «me pastorea», «me conduce». La glosa da el infinitivo; la ficha y la traducción completan el sentido.',
        { h: 'Una oración sin verbo' },
        'La primera frase del salmo, יְהוָה רֹעִי, no tiene verbo: «Jehová, mi pastor». El hebreo no necesita el verbo «ser» en presente, y el español sí; por eso la Reina-Valera agrega «es». Sin verbo, la frase es una afirmación sin tiempo. La segunda frase, לֹא אֶחְסָר, tiene un imperfecto, «no me faltará», que mira hacia adelante: la confianza en el pastor se proyecta al futuro. Una frase sin tiempo y otra hacia el futuro: eso es lo que la línea del interlineal te permite ver.',
        { ejercicio: {
          pregunta: 'La glosa de יַרְבִּיצֵנִי dice «recostarse a mí». ¿Qué te dice la morfología «hifil»?',
          opciones: [
            { t: 'Que es causativo: el pastor hace que la oveja se recueste.', ok: true, por_que: 'El hifil expresa causa: «me hace descansar».' },
            { t: 'Que la oveja se recuesta por sí misma.', ok: false, por_que: 'Eso sería un qal; el hifil indica que otro causa la acción.' },
            { t: 'Que es pasivo: «soy recostado».', ok: false, por_que: 'El pasivo del hifil es el hofal.' }
          ],
          explicacion: 'La forma verbal muestra al pastor que cuida activamente.'
        } }
      ],
      pensar: '«En lugares de delicados pastos me hará descansar» (Sal 23:2). El pastor hace descansar a la oveja. ¿Le permites a Dios darte descanso, o vives como si todo dependiera de ti?'
    },
    {
      id: 'is53', n: 'Isaías 53:5', ref: 'Isaías 53:5',
      visual: [ { tipo: 'hebreo', titulo: 'Isaías 53:5 en el interlineal', ref: 'Isaías 53:5', he: 'וְהוּא מְחֹלָל מִפְּשָׁעֵנוּ מְדֻכָּא מֵעֲוֺנֹתֵינוּ מוּסַר שְׁלוֹמֵנוּ עָלָיו וּבַחֲבֻרָתוֹ נִרְפָּא־לָנוּ׃', tr: 'Vehú mejolal mipshaenu meduká meavonotenu musar shelomenu alav uvajavurató nirpa lanu.', palabras: [{ he: 'וְהוּא', tr: 'vehú', es: 'y él' }, { he: 'מְחֹלָל', tr: 'mejolal', es: 'profanar' }, { he: 'מִפְּשָׁעֵנוּ', tr: 'mipshaenu', es: 'de nuestras rebeliones' }, { he: 'מְדֻכָּא', tr: 'meduká', es: 'quebrantar' }, { he: 'מֵעֲוֺנֹתֵינוּ', tr: 'meavonotenu', es: 'de nuestras iniquidades' }, { he: 'מוּסַר', tr: 'musar', es: 'disciplina de' }, { he: 'שְׁלוֹמֵנוּ', tr: 'shelomenu', es: 'nuestra paz' }, { he: 'עָלָיו', tr: 'alav', es: 'sobre él' }, { he: 'וּבַחֲבֻרָתוֹ', tr: 'uvajavurató', es: 'y en su herida (de él)' }, { he: 'נִרְפָּא־', tr: 'nirpa', es: 'sanar' }, { he: 'לָנוּ', tr: 'lanu', es: 'a nosotros' }], rv: 'Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.' } ],
      texto: [
        'Isaías 53 describe al Siervo de Jehová que sufre por otros, y el Nuevo Testamento lo aplica a Cristo (1 P 2:24). El versículo 5 es el centro del capítulo.',
        { ir: { t: 'Abrir Isaías 53:5 en el interlineal', a: 'interlineal/#is/53/5', marco: true } },
        'Mira cómo el versículo une al Siervo con «nosotros»: מִפְּשָׁעֵנוּ, «por nuestras rebeliones», y מֵעֲוֺנֹתֵינוּ, «por nuestros pecados», llevan la preposición מִ y el sufijo «nuestro». La preposición, que en otros lugares es «de» o «desde», aquí expresa la causa: fue herido a causa de nuestras rebeliones. שְׁלוֹמֵנוּ es «nuestra paz»; וּבַחֲבֻרָתוֹ, «y por su llaga», con el sufijo «su (de él)»; y נִרְפָּא־לָנוּ, «fuimos curados», un nifal, pasivo, seguido de «a nosotros».',
        { h: 'Los verbos del sufrimiento' },
        'Los verbos que describen lo que sufre el Siervo están en formas pasivas: מְחֹלָל, «herido», y מְדֻכָּא, «molido», son participios de binyanim pasivos. El interlineal da su glosa básica en infinitivo, pero la morfología muestra que el Siervo no se hiere a sí mismo: recibe el golpe. El versículo pone frente a frente lo que él recibió y lo que nosotros recibimos: él fue herido y molido; a nosotros nos tocó la paz y la sanidad. Pedro lo resume diciendo que por su herida fuimos sanados (1 P 2:24).',
        { ejercicio: {
          pregunta: '¿Qué hace la preposición מִ en מִפְּשָׁעֵנוּ?',
          opciones: [
            { t: 'Indica la causa: «por nuestras rebeliones», «a causa de ellas».', ok: true, por_que: 'La glosa básica es «de», pero el contexto pide el sentido causal, y así traduce la Reina-Valera.' },
            { t: 'Indica el lugar de donde sale: «desde nuestras rebeliones».', ok: false, por_que: 'El contexto habla de la causa del sufrimiento, no de un lugar.' },
            { t: 'No significa nada.', ok: false, por_que: 'Es una preposición con sentido; aquí causal.' }
          ],
          explicacion: 'La misma glosa básica, «de», toma en el contexto el sentido de causa.'
        } }
      ],
      pensar: '«El castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados» (Is 53:5). Lee el versículo poniendo tu nombre en cada «nuestro». ¿Qué te dice de lo que Cristo hizo por ti?'
    },
    {
      id: 'jl3', n: 'Joel 2:28 (Joel 3:1 en hebreo)', ref: 'Joel 2:28',
      visual: [ { tipo: 'hebreo', titulo: 'Joel 3:1 hebreo (Joel 2:28 en la RV 1960)', ref: 'Joel 2:28', he: 'וְהָיָה אַחֲרֵי־כֵן אֶשְׁפּוֹךְ אֶת־רוּחִי עַל־כָּל־בָּשָׂר וְנִבְּאוּ בְּנֵיכֶם וּבְנוֹתֵיכֶם זִקְנֵיכֶם חֲלֹמוֹת יַחֲלֹמוּן בַּחוּרֵיכֶם חֶזְיֹנוֹת יִרְאוּ׃', tr: 'Vehayá ájare jen eshpoj et rují al kal basar venibú benejem uvnotejem ziknejem jalomot yajalomún bajurejem jezyonot yirú.', palabras: [{ he: 'וְהָיָה', tr: 'vehayá', es: 'y ser' }, { he: 'אַחֲרֵי־', tr: 'ájare', es: 'después de' }, { he: 'כֵן', tr: 'jen', es: 'así' }, { he: 'אֶשְׁפּוֹךְ', tr: 'eshpoj', es: 'derramar' }, { he: 'אֶת־', tr: 'et', es: '[obj.]' }, { he: 'רוּחִי', tr: 'rují', es: 'mi espíritu' }, { he: 'עַל־', tr: 'al', es: 'sobre' }, { he: 'כָּל־', tr: 'kal', es: 'todo' }, { he: 'בָּשָׂר', tr: 'basar', es: 'carne' }, { he: 'וְנִבְּאוּ', tr: 'venibú', es: 'y profetizar' }, { he: 'בְּנֵיכֶם', tr: 'benejem', es: 'vuestros hijos' }, { he: 'וּבְנוֹתֵיכֶם', tr: 'uvnotejem', es: 'y vuestras hijas' }, { he: 'זִקְנֵיכֶם', tr: 'ziknejem', es: 'ancianos' }, { he: 'חֲלֹמוֹת', tr: 'jalomot', es: 'sueños' }, { he: 'יַחֲלֹמוּן', tr: 'yajalomún', es: 'soñar' }, { he: 'בַּחוּרֵיכֶם', tr: 'bajurejem', es: 'vuestros jóvenes' }, { he: 'חֶזְיֹנוֹת', tr: 'jezyonot', es: 'visiones' }, { he: 'יִרְאוּ', tr: 'yirú', es: 'ver' }], rv: 'Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones.' } ],
      texto: [
        'La promesa de Joel es la que Pedro citó el día de Pentecostés (Hch 2:16-18). En la Biblia hebrea es Joel 3:1; en la Reina-Valera, Joel 2:28. El interlineal la muestra en Joel 3 y avisa debajo cuál es el número en la Reina-Valera.',
        { ir: { t: 'Abrir Joel 3:1 en el interlineal', a: 'interlineal/#jl/3/1', marco: true } },
        'Busca אֶשְׁפּוֹךְ, «derramaré» (imperfecto, primera persona), y רוּחִי, «mi Espíritu», con el sufijo «mi». La promesa es para כָּל־בָּשָׂר, «toda carne»: no solo para profetas, reyes o sacerdotes, sino para hijos e hijas, ancianos y jóvenes. Las formas וְנִבְּאוּ, «y profetizarán», y יַחֲלֹמוּן, «soñarán», muestran a quiénes alcanza el derramamiento.',
        { ejercicio: {
          pregunta: 'Lees Joel 2:28 en una prédica y no lo encuentras en el interlineal en Joel 2. ¿Dónde está?',
          opciones: [
            { t: 'En Joel 3:1, porque la Biblia hebrea numera distinto.', ok: true, por_que: 'Joel 2:28-32 de la RV 1960 corresponde a Joel 3:1-5 en hebreo.' },
            { t: 'No está en el hebreo.', ok: false, por_que: 'Está; solo cambia el número.' },
            { t: 'En Joel 4.', ok: false, por_que: 'Joel 4 hebreo corresponde a Joel 3 de la RV 1960.' }
          ],
          explicacion: 'Mismo texto, otra numeración. La página lo avisa debajo de cada versículo.'
        } },
        { h: 'Cómo seguir' },
        'Con este recurso tienes las herramientas para leer el Antiguo Testamento de cerca: el alfabeto, el vocabulario, la gramática y el interlineal. Usa el interlineal cada vez que estudies un pasaje: una palabra por día, en voz alta, comparando siempre con la traducción.',
        { ir: { t: 'Abrir el interlineal', a: 'interlineal/', marco: true } }
      ],
      pensar: '«Derramaré mi Espíritu sobre toda carne» (Jl 2:28). Pedro dijo que esa promesa es para nosotros y para nuestros hijos (Hch 2:39). ¿Has buscado la plenitud del Espíritu que Dios prometió?'
    }
  ];

  delete window.__INT;
  window.RUTA_DATA = {
    titulo: 'Interlineal hebreo–español (AT)',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0), con su morfología; léxico de Strong de Open Scriptures (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    volver: { t: 'Volver al interlineal', a: 'interlineal/' },
    rutas: [
      { id: 'que-es', grupo: 'Interlineal', n: 'I. Qué es un interlineal', info: 'Cómo está hecho, qué puede y qué no puede hacer, y cómo usar la página', estaciones: I.queEs },
      { id: 'leer', grupo: 'Interlineal', n: 'II. Cómo leer una línea', info: 'Dirección, prefijos, sufijos, constructo, verbo, morfología, ketiv y qere', estaciones: I.leer },
      { id: 'errores', grupo: 'Interlineal', n: 'III. Errores comunes', info: 'Glosa y sentido, etimología, todos los sentidos, el orden, «en el hebreo dice»', estaciones: errores },
      { id: 'traduccion', grupo: 'Interlineal', n: 'IV. Del interlineal a la traducción', info: 'Comparar, modismos, el nombre de Dios y un método en cinco pasos', estaciones: traduccion },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes famosos con el interlineal', estaciones: taller }
    ]
  };
})();
