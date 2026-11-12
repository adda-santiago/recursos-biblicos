/* ==========================================================
   Recursos Bíblicos — La creación y los orígenes · contenido de las rutas
   FUENTE de public/apps/creacion-y-origenes/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/creacion_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Decisiones del responsable al aprobar el bosquejo (6-11-2026):
   - Alcance: Génesis 1 a 11, de la creación a Babel.
   - Los días de Génesis 1 y la edad de la tierra: todas las lecturas en bloques `posturas`,
     sin fijar ninguna; el recurso sí afirma la creación de la nada, la creación especial
     del ser humano, un Adán y una Eva históricos y rechaza la evolución sin guía.
   - El diluvio: universal como lectura natural del texto; el diluvio local, como postura.
   - Se nombran las organizaciones que defienden cada postura (Respuestas en Génesis,
     Reasons to Believe, BioLogos), describiendo lo que enseñan y con respeto.
   Coordinación con otros recursos:
   - La caída, la imagen de Dios y el pecado se desarrollan en El ser humano y el pecado
     (nº 16, en preparación): aquí llegan solo como puente.
   - Los pactos con Adán y con Noé están en Pactos y dispensaciones; aquí se resumen y se enlazan.
   - El comentario versículo por versículo irá en el estudio de Génesis (nº 20).
   ========================================================== */
(() => {

  /* ---------------- I. Dios, el Creador ---------------- */
  const creador = [
    {
      id: 'principio', n: 'En el principio', ref: 'Génesis 1:1; Juan 1:1-3; Hebreos 11:3; Apocalipsis 4:11',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:1', ref: 'Génesis 1:1', he: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃', tr: 'Bereshit bará Elohim et hashamáyim veet haárets.',
          palabras: [
            { he: 'בְּרֵאשִׁית', tr: 'bereshit', es: 'en el principio' },
            { he: 'בָּרָא', tr: 'bará', es: 'creó' },
            { he: 'אֱלֹהִים', tr: 'Elohim', es: 'Dios' },
            { he: 'אֵת', tr: 'et', es: '(marca del objeto)' },
            { he: 'הַשָּׁמַיִם', tr: 'hashamáyim', es: 'los cielos' },
            { he: 'וְאֵת', tr: 'veet', es: 'y (marca del objeto)' },
            { he: 'הָאָרֶץ', tr: 'haárets', es: 'la tierra' }
          ],
          rv: 'En el principio creó Dios los cielos y la tierra.' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-panorama.svg', alt: 'Génesis 1 a 11 en cinco momentos: la creación, la caída, de Caín a Noé, el diluvio y Babel, que desembocan en el llamado de Abraham en Génesis 12', pie: 'Génesis 1 a 11 cuenta el origen de todo; desde Génesis 12, la historia se concentra en Abraham y su descendencia.', origen: 'esquema' }
      ],
      texto: [
        'La Biblia no comienza con una prueba de que Dios existe, ni con una explicación de cómo se puede conocerlo. Comienza con Dios actuando: «En el principio creó Dios los cielos y la tierra» (Gn 1:1). En siete palabras hebreas, el primer versículo dice quién estaba antes de todo, qué hizo y sobre qué tiene autoridad. Antes del principio no había cielos ni tierra, pero ya estaba Dios.',
        { h: 'Siete palabras que lo cambian todo' },
        'La pestaña de hebreo muestra el versículo palabra por palabra. «Los cielos y la tierra» es una manera hebrea de decir «todo»: lo de arriba y lo de abajo, lo que se ve y lo que no se ve. El verbo bará, «creó», tiene siempre a Dios como sujeto en el Antiguo Testamento: las personas hacen, forman y construyen, pero solo Dios crea en este sentido. Y el sujeto, Elohim, es el Dios verdadero, no una de las muchas divinidades de los pueblos vecinos.',
        'El Nuevo Testamento vuelve a esta primera frase. Juan abre su evangelio con las mismas palabras, «En el principio», para decir que el Verbo ya era y que «Todas las cosas por él fueron hechas» (Jn 1:3). La carta a los Hebreos enseña que entender la creación es asunto de fe: «Por la fe entendemos haber sido constituido el universo por la palabra de Dios» (He 11:3). Y en el cielo, los que adoran alrededor del trono dan gloria a Dios precisamente porque Él creó todas las cosas (Ap 4:11).',
        { h: 'Lo que estudia este recurso' },
        'Los once primeros capítulos de Génesis cuentan el origen de todo: el universo, la vida, el ser humano, el matrimonio, el trabajo, el pecado, la muerte, las ciudades, las lenguas y las naciones. El esquema los ordena en cinco momentos. Desde el capítulo 12, la historia se concentra en Abraham y su descendencia, y todo lo anterior explica por qué el mundo necesitaba esa promesa.',
        'La ruta I estudia al Creador; la II, los seis días y el reposo; la III, las distintas maneras en que los creyentes leen Génesis 1. Las rutas IV a VII siguen el relato del Edén a Babel, y la VIII mira hacia adelante: la creación que espera ser renovada. La caída y la doctrina del pecado tendrán su propio recurso, El ser humano y el pecado, en preparación.',
        { ir: { t: 'Leer Génesis 1:1 palabra por palabra en El alfabeto hebreo', a: '../../alfabeto-hebreo/#taller/1' } }
      ],
      pensar: 'Si la primera frase de la Biblia es verdad, nada de lo que existe, ni tu propia vida, está fuera de la autoridad de Dios. ¿Qué área de tu vida tratas como si no le perteneciera a Él?'
    },
    {
      id: 'nada', n: 'Creación de la nada', ref: 'Hebreos 11:3; Romanos 4:17; Salmos 33:6-9; Nehemías 9:6; Hechos 17:24-25',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro respuestas a «¿de dónde viene todo?»',
          cab: ['Respuesta', 'Qué afirma', 'Qué dice la Biblia'],
          filas: [
            ['Creación (la fe bíblica)', 'Un Dios personal y eterno creó todo de la nada y es distinto de lo que creó', 'Gn 1:1; He 11:3; Neh 9:6'],
            ['Materialismo', 'Solo existe la materia; siempre existió o apareció sola, sin propósito', 'Ro 1:20: la creación muestra el poder de Dios'],
            ['Panteísmo', 'Todo es dios: la naturaleza y lo divino son lo mismo', 'Ro 1:25: honraron a la criatura antes que al Creador'],
            ['Dualismo', 'Dos principios eternos, uno bueno y otro malo, luchan desde siempre', 'Is 45:7: Dios no tiene rival eterno'],
          ],
          nota: 'La Biblia distingue siempre al Creador de lo creado: Dios no es parte del mundo, y el mundo no es parte de Dios.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/33/6-9', ref: 'Salmos 33:6-9' }
      ],
      texto: [
        'Un carpintero hace una mesa con madera que ya existía. Un alfarero forma una vasija con barro que encontró. Dios no trabajó así. Cuando la Escritura dice que Dios creó los cielos y la tierra, enseña que antes no había materia, ni energía, ni espacio, ni tiempo: solo Dios. Los teólogos lo llaman creación ex nihilo, una expresión latina que significa «de la nada».',
        { h: 'Lo que se ve, de lo que no se veía' },
        'El texto más claro está en Hebreos: el universo fue constituido por la palabra de Dios, «de modo que lo que se ve fue hecho de lo que no se veía» (He 11:3). Pablo describe a Dios como el que «llama las cosas que no son, como si fuesen» (Ro 4:17). El Salmo 33 lo dice en forma de canto: «Por la palabra de Jehová fueron hechos los cielos» (Sal 33:6), «Porque él dijo, y fue hecho» (Sal 33:9). Dios no necesitó herramientas ni materiales: habló, y lo que no existía comenzó a existir.',
        { h: 'Dios no necesita al mundo' },
        'Si Dios creó de la nada, el mundo depende de Él, y Él no depende del mundo. Pablo lo explicó a los filósofos de Atenas: Dios no es honrado por manos de hombres «como si necesitase de algo; pues él es quien da a todos vida y aliento y todas las cosas» (Hch 17:25). Dios no creó porque estuviera solo o le faltara algo; el Padre, el Hijo y el Espíritu Santo vivían desde siempre en perfecta comunión. La creación es un regalo libre, no una necesidad.',
        'Esa misma dependencia continúa hoy. Nehemías ora: «tú vivificas todas estas cosas» (Neh 9:6). El universo no funciona como un reloj al que Dios dio cuerda y dejó solo. Cada respiración, cada estación y cada amanecer existen porque Dios los sostiene. Esto se llama providencia, y es la otra cara de la creación.',
        { h: 'Frente a otras respuestas' },
        'La tabla compara la fe bíblica con tres respuestas que siguen vivas hoy. El materialismo dice que solo existe la materia; el panteísmo, que todo es dios; el dualismo, que el bien y el mal son dos fuerzas eternas en lucha. Génesis 1:1 responde a las tres: hay un solo Dios, eterno, personal, distinto de su obra, y todo lo demás existe porque Él lo quiso.',
        { ejercicio: {
          pregunta: '¿Qué significa que Dios creó «de la nada»?',
          opciones: [
            { t: 'Que antes de la creación solo existía Dios, y Él dio existencia a todo lo demás sin usar materiales previos.', ok: true, por_que: 'Es lo que enseña Hebreos 11:3: lo que se ve fue hecho de lo que no se veía, por la palabra de Dios.' },
            { t: 'Que Dios ordenó una materia eterna que estaba en desorden.', ok: false, por_que: 'Esa era la idea de varios filósofos griegos. La Biblia no deja nada eterno junto a Dios: todo lo demás tuvo comienzo.' },
            { t: 'Que la creación salió de la misma sustancia de Dios, como una parte de Él.', ok: false, por_que: 'Es la idea del panteísmo. La Escritura distingue siempre al Creador de la criatura, y condena adorar a la criatura en lugar del Creador.' }
          ],
          explicacion: 'Dios es el único eterno. Todo lo demás existe porque Él lo llamó a existir con su palabra, y sigue existiendo porque Él lo sostiene.'
        } }
      ],
      pensar: 'Si Dios no necesita nada de ti, ¿por qué crees que te creó? ¿Cambia algo en tu manera de orar saber que Él te sostiene en cada respiración?'
    },
    {
      id: 'trinidad', n: 'El Dios trino en la creación', ref: 'Génesis 1:1-3, 26; Juan 1:1-3; Colosenses 1:16-17; Hebreos 1:2-3; Salmos 104:30; 1 Corintios 8:6',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../espiritu-santo/img/es-creacion-aguas.webp', alt: 'Aguas oscuras y profundas bajo un cielo sin forma; un viento recorre la superficie y levanta una bruma iluminada por una luz tenue', pie: '«Y el Espíritu de Dios se movía sobre la faz de las aguas» (Génesis 1:2).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las tres personas en la obra de la creación',
          cab: ['Persona', 'Lo que hace en la creación', 'Textos'],
          filas: [
            ['El Padre', 'Origen de todas las cosas: de Él proceden', '1 Co 8:6; Ap 4:11'],
            ['El Hijo', 'Por medio de Él y para Él fue hecho todo; Él lo sostiene', 'Jn 1:3; Col 1:16-17; He 1:2-3'],
            ['El Espíritu Santo', 'Se movía sobre las aguas; da vida y renueva', 'Gn 1:2; Sal 104:30; Job 33:4'],
          ],
          nota: 'Las tres personas actúan juntas: lo que una hace, no lo hace sin las otras.'
        } }
      ],
      texto: [
        'Génesis 1 no usa la palabra Trinidad, pero el resto de la Escritura muestra que la creación fue obra del Padre, del Hijo y del Espíritu Santo. La revelación de Dios es progresiva: lo que en Génesis aparece en semilla, el Nuevo Testamento lo explica con claridad.',
        { h: 'El Espíritu sobre las aguas' },
        'En el segundo versículo, la tierra estaba desordenada y vacía, y las tinieblas cubrían el abismo, «y el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2). El verbo hebreo describe un movimiento suave, como el de un ave que revolotea sobre su nido (Dt 32:11). El Espíritu está presente antes de la primera palabra creadora, preparando la vida. El salmista lo confirma: «Envías tu Espíritu, son creados, Y renuevas la faz de la tierra» (Sal 104:30).',
        { h: 'El Hijo, por quien todo fue hecho' },
        'Juan presenta a Jesús como el Verbo eterno, la Palabra de Dios: «Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho» (Jn 1:3). Cada vez que Génesis dice «Y dijo Dios», el Nuevo Testamento nos permite ver al Hijo en acción. Pablo agrega que todo fue creado «por medio de él y para él» (Col 1:16), y que en Él todas las cosas subsisten: Cristo no solo hizo el universo, sino que lo mantiene unido. Hebreos dice que Dios hizo el universo por el Hijo, quien «sustenta todas las cosas con la palabra de su poder» (He 1:3).',
        { h: '«Hagamos»' },
        'En el sexto día Dios dice: «Hagamos al hombre a nuestra imagen» (Gn 1:26). Los intérpretes han propuesto varias explicaciones para ese plural: un plural de majestad, como el de un rey; Dios hablando con los ángeles; o una deliberación dentro de Dios mismo. Los padres de la iglesia vieron aquí un indicio de la pluralidad de personas en el único Dios, y esa lectura armoniza con lo que el Nuevo Testamento revela después. Los ángeles no son creadores ni el ser humano es hecho a su imagen; el texto sigue diciendo «creó Dios al hombre a su imagen» (Gn 1:27).',
        { h: 'Un Dios, una obra' },
        'La tabla resume lo que hace cada persona. Pablo lo dice en un solo versículo: hay un Dios, el Padre, «del cual proceden todas las cosas», y un Señor, Jesucristo, «por medio del cual son todas las cosas» (1 Co 8:6). El Creador no es un poder impersonal, sino el Dios trino que vive en amor desde la eternidad y que creó un mundo para compartir ese amor.',
        { ir: { t: 'Ver «Indicios en el Antiguo Testamento» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/2' } },
        { ir: { t: 'Ver «El Espíritu en la creación» en El Espíritu Santo', a: '../../espiritu-santo/#at/1' } }
      ],
      pensar: 'El mismo Jesús que murió por ti es el que sostiene cada átomo del universo. ¿Qué preocupación tuya se vuelve más pequeña a la luz de Colosenses 1:17?'
    },
    {
      id: 'proposito', n: '¿Para qué creó Dios?', ref: 'Apocalipsis 4:11; Isaías 43:7; 45:18; Salmos 19:1-4; Romanos 1:20; 11:36',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/19/1-4', ref: 'Salmos 19:1-4' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los propósitos de la creación',
          cab: ['Propósito', 'Lo que significa', 'Textos'],
          filas: [
            ['Para la gloria de Dios', 'Mostrar quién es Dios: su poder, sabiduría y bondad', 'Is 43:7; Sal 19:1; Ro 11:36'],
            ['Para ser habitada', 'Un hogar preparado para la vida y para el ser humano', 'Is 45:18; Sal 115:16'],
            ['Para revelar a Dios', 'Que todos puedan saber que hay un Creador', 'Ro 1:20; Hch 14:17'],
            ['Para la comunión', 'Un lugar donde Dios se encuentra con los suyos', 'Gn 3:8; Ap 21:3'],
            ['Para Cristo', 'Todo fue hecho para Él y será reunido en Él', 'Col 1:16; Ef 1:10'],
          ],
          nota: 'Dios no creó por necesidad, sino por su voluntad y para su gloria.'
        } }
      ],
      texto: [
        'Si Dios no necesitaba nada, ¿por qué creó? La Biblia no responde con una teoría, sino con una canción. Los veinticuatro ancianos de Apocalipsis cantan: «Señor, digno eres de recibir la gloria y la honra y el poder; porque tú creaste todas las cosas, y por tu voluntad existen y fueron creadas» (Ap 4:11). La creación existe porque Dios quiso que existiera, y existe para que su gloria sea vista.',
        { h: 'Los cielos cuentan' },
        'El Salmo 19 compara el universo con un predicador que no se cansa: «Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos» (Sal 19:1). No usa palabras, pero su voz llega a toda la tierra. Pablo saca la conclusión en Romanos: el eterno poder y la deidad de Dios «se hacen claramente visibles desde la creación del mundo» (Ro 1:20), de modo que nadie tiene excusa. Esto se llama revelación general: lo que todos pueden saber de Dios mirando lo que hizo. No basta para salvar, porque no habla de Cristo ni del perdón, pero basta para que el ser humano sepa que tiene un Creador.',
        { h: 'Una casa para habitar' },
        'Isaías dice que Dios «no la creó en vano, para que fuese habitada la creó» (Is 45:18). La palabra hebrea traducida «en vano» es tohu, la misma que Génesis 1:2 traduce «desordenada»: Dios no dejó la tierra vacía, sino que la preparó como un hogar. En los seis días se ve a un Dios que ordena, separa, llena y bendice, como quien arregla una casa antes de que lleguen sus hijos.',
        { h: 'Un lugar de encuentro' },
        'En el Edén, Dios se paseaba en el huerto y hablaba con Adán (Gn 3:8). Al final de la Biblia, la nueva creación tiene el mismo propósito, cumplido para siempre: «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos» (Ap 21:3). La creación es el escenario de la comunión entre Dios y su pueblo. El pecado rompió esa comunión, pero no cambió el propósito: la historia de la salvación es la historia de Dios restaurando lo que creó.',
        'Pablo lo resume en una frase de alabanza: «Porque de él, y por él, y para él, son todas las cosas. A él sea la gloria por los siglos. Amén» (Ro 11:36).',
        { ir: { t: 'Ver «La revelación general» en La Palabra de Dios', a: '../../palabra-de-dios/#revelacion/2' } }
      ],
      pensar: 'Fuiste creado para la gloria de Dios (Is 43:7). ¿Qué cambiaría en tu trabajo, tus estudios o tu familia si los vieras como un lugar para mostrar cómo es Dios?'
    },
    {
      id: 'biblia', n: 'La creación en toda la Biblia', ref: 'Job 38:4-7; Salmos 104; Proverbios 8:22-31; Isaías 40:26-28; Hechos 17:24-26; Colosenses 1:16; Apocalipsis 21:1-5',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La creación de Génesis a Apocalipsis',
          cab: ['Pasaje', 'Lo que enseña sobre la creación'],
          filas: [
            ['Génesis 1–2', 'El relato: Dios crea en orden y forma al ser humano'],
            ['Job 38–41', 'Dios interroga a Job: el Creador sabe lo que el hombre no sabe'],
            ['Salmos 8; 19; 104; 148', 'Alabanza: la creación canta y depende de Dios'],
            ['Proverbios 8:22-31', 'La sabiduría estaba presente cuando Dios formaba el mundo'],
            ['Isaías 40–45', 'El Creador consuela a su pueblo y se burla de los ídolos'],
            ['Juan 1:1-3', 'El Verbo, por quien todo fue hecho'],
            ['Hechos 14; 17', 'La predicación a los paganos empieza por el Creador'],
            ['Romanos 1:20; 8:19-23', 'La creación revela a Dios y gime esperando su liberación'],
            ['Colosenses 1:16-17; Hebreos 1:2-3', 'Cristo, Creador y sustentador'],
            ['Apocalipsis 4:11; 21–22', 'Adoración al Creador y la nueva creación'],
          ],
          nota: 'La doctrina de la creación no está solo en Génesis: recorre toda la Escritura.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@job/38/4-7', ref: 'Job 38:4-7' }
      ],
      texto: [
        'Muchos creyentes piensan en la creación solo cuando leen Génesis. Pero la Biblia vuelve una y otra vez al Creador, y casi siempre con un propósito práctico: consolar, corregir, llamar a la adoración o anunciar el evangelio. La tabla recorre los pasajes principales.',
        { h: 'Job: humildad ante el Creador' },
        'Después de treinta y cinco capítulos de discusión, Dios responde a Job con preguntas: «¿Dónde estabas tú cuando yo fundaba la tierra? Házmelo saber, si tienes inteligencia» (Job 38:4). Dios no le explica a Job por qué sufrió; le muestra que el que ordenó las estrellas y el mar también sabe gobernar su vida. La creación enseña humildad.',
        { h: 'Salmos y profetas: consuelo y adoración' },
        'El Salmo 104 recorre la creación como un paseo por los seis días, y termina con un canto: «¡Cuán innumerables son tus obras, oh Jehová! Hiciste todas ellas con sabiduría» (Sal 104:24). Isaías habla a un pueblo cansado y desterrado, y le recuerda quién es su Dios: el que creó los confines de la tierra «No desfallece, ni se fatiga con cansancio» (Is 40:28). El mismo profeta se burla de los ídolos, que tienen que ser fabricados, cargados y clavados para que no se caigan. El Creador no se cansa; los ídolos ni siquiera se sostienen.',
        { h: 'La predicación a los paganos' },
        'Cuando Pablo predicó a personas que no conocían las Escrituras, en Listra y en Atenas, no comenzó con Moisés ni con los profetas, sino con el Dios «que hizo el cielo y la tierra, el mar, y todo lo que en ellos hay» (Hch 14:15). En Atenas agregó: «de una sangre ha hecho todo el linaje de los hombres» (Hch 17:26). La doctrina de la creación es el primer capítulo del evangelio: antes de hablar de un Salvador, hay que saber que tenemos un Creador ante quien rendir cuentas.',
        { h: 'Apocalipsis: el final como el principio' },
        'El último libro de la Biblia adora al Creador (Ap 4:11) y anuncia «un cielo nuevo y una tierra nueva» (Ap 21:1). La historia comienza en un huerto y termina en una ciudad-jardín, con un río y el árbol de la vida. La ruta VIII estudia esa esperanza.'
      ],
      pensar: 'Isaías usó la creación para consolar a un pueblo desanimado. ¿Qué cansancio o preocupación tuya podría cambiar si miras el cielo de noche y recuerdas quién lo hizo?'
    },
    {
      id: 'mitos', n: 'Génesis y los relatos de los pueblos vecinos', ref: 'Génesis 1:14-18, 21; Isaías 44:24; Jeremías 10:11-12; Salmos 96:5',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Génesis frente a los relatos de Mesopotamia y Egipto',
          cab: ['Tema', 'Relatos de los pueblos vecinos', 'Génesis 1–2'],
          filas: [
            ['Los dioses', 'Muchos dioses, que nacen, pelean y mueren', 'Un solo Dios, eterno, sin rival'],
            ['El origen del mundo', 'El cuerpo de una diosa vencida (Enuma Elish) o una divinidad que se engendra a sí misma (Egipto)', 'Dios crea por su palabra, sin lucha'],
            ['El sol, la luna y las estrellas', 'Dioses que gobiernan el destino', '«Lumbreras» puestas por Dios para alumbrar y marcar el tiempo'],
            ['El mar y sus monstruos', 'El caos enemigo de los dioses', 'Criaturas de Dios, también buenas (Gn 1:21)'],
            ['El ser humano', 'Esclavo hecho para que los dioses descansen', 'Imagen de Dios, bendecido y puesto a gobernar la tierra'],
            ['El descanso', 'Los dioses descansan porque el hombre trabaja por ellos', 'Dios descansa de su obra y bendice el día de reposo'],
          ],
          nota: 'Las semejanzas existen, porque todos hablan del mismo mundo; las diferencias son de fondo.'
        } }
      ],
      texto: [
        'Desde el siglo XIX, los arqueólogos han encontrado en Mesopotamia y Egipto varios relatos antiguos sobre el origen del mundo y del ser humano. El más conocido es el Enuma Elish, el poema babilónico de la creación, que toma su nombre de sus primeras palabras: «Cuando en lo alto». Otros, como la epopeya de Atrahasis, cuentan la creación del hombre y un gran diluvio. Algunos han dicho que Génesis copió esos relatos. Una lectura atenta muestra lo contrario.',
        { h: 'Lo que cuentan los otros' },
        'En el Enuma Elish, los dioses nacen de la mezcla de dos aguas primordiales. Después de una guerra entre generaciones de dioses, Marduk, el dios de Babilonia, vence a la diosa Tiamat, la parte en dos y con su cuerpo forma el cielo y la tierra. Luego crea a la humanidad con la sangre de un dios rebelde, para que los seres humanos trabajen y los dioses puedan descansar. En Egipto, los relatos hablan de un dios que surge de las aguas y engendra por sí mismo a los demás dioses.',
        { h: 'Lo que dice Génesis' },
        'La tabla compara los temas. En Génesis no hay guerra ni rival: Dios habla y las cosas existen. El sol y la luna, adorados como dioses en todo el mundo antiguo, ni siquiera reciben su nombre: son «la lumbrera mayor» y «la lumbrera menor» (Gn 1:16), lámparas colgadas por Dios. Los grandes monstruos marinos, símbolo del caos en otros pueblos, son simplemente criaturas, y Dios vio que eran buenas (Gn 1:21). El ser humano no es un esclavo de los dioses, sino la imagen de Dios, bendecido para gobernar la tierra.',
        { posturas: {
          titulo: '¿Por qué se parecen en algunos puntos?',
          a: { n: 'Un recuerdo común de hechos reales', t: 'Muchos creyentes entienden que todos los pueblos guardaron recuerdos de los mismos hechos antiguos, como la creación del hombre y el diluvio, y que con el tiempo los deformaron en mitos politeístas. Génesis conserva la versión verdadera, revelada por Dios.' },
          b: { n: 'Génesis responde a los mitos de su tiempo', t: 'Otros intérpretes evangélicos destacan que Génesis fue escrito para un pueblo rodeado de esas ideas, y que usa imágenes conocidas (las aguas, el abismo, las lumbreras) para corregirlas: el Dios de Israel es el único Creador, y todo lo que otros adoraban es solo criatura.' },
          c: 'Las dos explicaciones se complementan, y ninguna convierte a Génesis en un mito más. La diferencia de fondo no es de detalles, sino de Dios: uno solo, bueno, soberano y sin rival. Así lo proclaman también los profetas: «Los dioses que no hicieron los cielos ni la tierra, desaparezcan de la tierra» (Jer 10:11).'
        } },
        { ir: { t: 'Ver «La religión de Babilonia» en El imperio babilónico', a: '../../imperio-babilonico/#sociedad/3' } }
      ],
      pensar: 'Los pueblos antiguos adoraban al sol, a la luna y al mar. ¿Qué cosas creadas (el dinero, la salud, una persona, el éxito) corren el riesgo de ocupar hoy el lugar del Creador en tu vida?'
    }
  ];

  /* ---------------- II. Los seis días y el reposo ---------------- */
  const dias = [
    {
      id: 'estructura', n: 'Formar y llenar: el orden de los días', ref: 'Génesis 1:1–2:3; Isaías 45:18',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dias.svg', alt: 'Dos columnas de tres días: a la izquierda los días 1, 2 y 3, en que Dios forma los espacios (luz, cielo y mar, tierra seca y plantas); a la derecha los días 4, 5 y 6, en que los llena (lumbreras, aves y peces, animales terrestres y el ser humano). Abajo, el día séptimo, el reposo', pie: 'La tierra estaba «desordenada y vacía»: en los días 1 a 3 Dios la ordena, y en los días 4 a 6 la llena.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/1-5', ref: 'Génesis 1:1-5' }
      ],
      texto: [
        'Génesis 1 no es una lista desordenada de cosas que Dios hizo. Es un relato cuidadosamente construido, que el lector antiguo podía memorizar y recitar. La clave está en el versículo 2: la tierra estaba «desordenada y vacía». En hebreo son dos palabras que riman, tohu vabohu. El resto del capítulo muestra cómo Dios resuelve los dos problemas.',
        { h: 'Primero forma, después llena' },
        'Observa el esquema. En los tres primeros días, Dios forma espacios: separa la luz de las tinieblas (día 1), las aguas de arriba de las de abajo (día 2) y el mar de la tierra seca, que se cubre de plantas (día 3). En los tres días siguientes, Dios llena esos espacios con habitantes: las lumbreras para el día y la noche (día 4), las aves para el cielo y los peces para el mar (día 5), los animales terrestres y el ser humano para la tierra (día 6). Cada día de la segunda columna corresponde a uno de la primera.',
        { h: 'Un ritmo que se repite' },
        'Cada día sigue un patrón: «Y dijo Dios», «Y fue así», «Y vio Dios que era bueno» y «Y fue la tarde y la mañana». El ritmo comunica que Dios trabaja con orden, sin esfuerzo y sin improvisar. Su palabra se cumple siempre. Y cada cosa que hace es buena.',
        'El número siete marca el relato. El primer versículo tiene siete palabras en hebreo y el segundo, catorce. Las palabras «Dios», «tierra» y «bueno» aparecen en múltiplos de siete, y el relato culmina en el séptimo día, que Dios bendice. Para un israelita, el siete era el número de lo completo: la creación es una obra perfecta y terminada.',
        { h: 'Para qué sirve esta estructura' },
        'Ver la estructura ayuda a leer el capítulo como lo leyó Israel. El orden de los días enseña que Dios es un Dios de orden (1 Co 14:33), que nada en el universo es fruto del azar, y que el mundo fue preparado para la vida antes de que llegara el ser humano. Los creyentes discuten si los días son de veinticuatro horas o períodos más largos, y la ruta III presenta esas lecturas. Pero todas reconocen este diseño, que está en el texto mismo.',
        { ejercicio: {
          pregunta: 'Según el esquema de formar y llenar, ¿con qué día se corresponde el día 5, en que Dios crea las aves y los peces?',
          opciones: [
            { t: 'Con el día 2, en que Dios separó las aguas y formó la expansión del cielo.', ok: true, por_que: 'Correcto: el día 2 forma el cielo y el mar, y el día 5 los llena con aves y peces.' },
            { t: 'Con el día 3, en que apareció la tierra seca.', ok: false, por_que: 'El día 3 se corresponde con el día 6: la tierra seca recibe a los animales terrestres y al ser humano.' },
            { t: 'Con el día 1, en que Dios creó la luz.', ok: false, por_que: 'El día 1 se corresponde con el día 4: la luz y las tinieblas reciben al sol, la luna y las estrellas.' }
          ],
          explicacion: 'Los días 1, 2 y 3 forman los espacios; los días 4, 5 y 6 los llenan, en el mismo orden.'
        } }
      ],
      pensar: 'Dios convirtió lo «desordenado y vacío» en un mundo ordenado y lleno de vida. ¿Hay algo desordenado o vacío en tu vida que necesitas poner en sus manos?'
    },
    {
      id: 'luz', n: 'Días 1 y 4: la luz y las lumbreras', ref: 'Génesis 1:3-5, 14-19; 2 Corintios 4:6; Salmos 136:7-9; Apocalipsis 21:23',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-luz.webp', alt: 'Sobre un océano oscuro y sin orillas, una luz intensa rompe las tinieblas desde lo alto y se refleja en el agua agitada; no hay sol visible ni tierra', pie: '«Y dijo Dios: Sea la luz; y fue la luz» (Génesis 1:3).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/14-19', ref: 'Génesis 1:14-19' }
      ],
      texto: [
        'La primera palabra que Dios pronuncia en la Biblia es una orden: «Sea la luz; y fue la luz» (Gn 1:3). En hebreo son apenas dos palabras repetidas: yehí or, vayehí or. Lo primero que Dios hace en un mundo de tinieblas es traer luz, y luego la separa de la oscuridad y le pone nombre: Día y Noche. Nombrar algo era señal de autoridad sobre ello.',
        { h: '¿Luz antes del sol?' },
        'Muchos lectores preguntan cómo pudo haber luz el primer día si el sol aparece el cuarto. Los intérpretes dan varias respuestas. Algunos entienden que Dios creó una luz distinta del sol, que alumbró los tres primeros días; Apocalipsis muestra que Dios puede alumbrar sin sol (Ap 21:23). Otros entienden que el sol ya existía desde el versículo 1, pero que en el día cuarto se hizo visible desde la tierra o recibió su función de marcar el tiempo. Otros ven en el orden de los días una estructura literaria más que una secuencia estricta. La ruta III presenta estas lecturas.',
        { h: 'Lámparas, no dioses' },
        'En el día cuarto, Dios pone «lumbreras en la expansión de los cielos» (Gn 1:14) para separar el día de la noche y servir «de señales para las estaciones, para días y años». Llama la atención que el texto no dice «sol» ni «luna»: dice «la lumbrera mayor» y «la lumbrera menor» (Gn 1:16). En todo el mundo antiguo el sol y la luna eran dioses poderosos; en Babilonia, el dios luna Sin, y en Egipto, el dios sol Ra. Génesis los presenta como lámparas puestas por Dios, al servicio de sus criaturas. Y las estrellas, que los astrólogos consultaban para conocer el destino, aparecen casi de pasada: «hizo también las estrellas» (Gn 1:16).',
        'Por eso la Escritura prohíbe adorar a los astros (Dt 4:19) y consultar los horóscopos (Is 47:13-14). Las estrellas no gobiernan la vida de nadie: anuncian la gloria de quien las hizo.',
        { h: 'La luz del evangelio' },
        'Pablo toma la primera palabra de la creación para explicar la conversión: «Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones» (2 Co 4:6). El mismo Dios que dijo «Sea la luz» sobre el abismo lo dice en el corazón de quien cree en Cristo. Y al final de la Biblia, la ciudad de Dios no necesita sol ni luna, porque la gloria de Dios la ilumina y el Cordero es su lumbrera (Ap 21:23).'
      ],
      pensar: 'Dios habló luz sobre las tinieblas del principio y sobre las tinieblas de tu corazón. ¿Qué área oscura de tu vida necesita todavía que Él diga «Sea la luz»?'
    },
    {
      id: 'aguas', n: 'Días 2 y 5: las aguas, el cielo y sus habitantes', ref: 'Génesis 1:6-8, 20-23; Salmos 104:2-3, 25-26; Job 38:8-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/20-23', ref: 'Génesis 1:20-23' },
        { tipo: 'cita', titulo: 'Salmo 104', texto: '@@sal/104/24-26', ref: 'Salmos 104:24-26' }
      ],
      texto: [
        'En el segundo día Dios dice: «Haya expansión en medio de las aguas, y separe las aguas de las aguas» (Gn 1:6). La palabra hebrea raquía, traducida «expansión» o «firmamento», viene de un verbo que significa extender o batir, como se bate una lámina de metal. Dios separa las aguas de abajo de las de arriba, y a la expansión la llama Cielos. Se forma el espacio donde volarán las aves y donde caerá la lluvia.',
        { h: 'El lenguaje de lo que se ve' },
        'La Biblia describe el mundo tal como lo ve un observador desde la tierra. Nosotros hacemos lo mismo cuando decimos que el sol «sale» o «se pone», aunque sabemos que la tierra gira. Las «aguas sobre la expansión» se han entendido como las nubes y la humedad del cielo, de donde viene la lluvia; Génesis 7:11 habla de las «cataratas de los cielos» que se abren en el diluvio. La Escritura no pretende dar una lección de física, sino enseñar quién gobierna el cielo y el mar. Ese lenguaje, propio de la observación, no es un error: es la manera en que cualquier persona habla del mundo que ve.',
        { h: 'El mar tiene límites' },
        'Para muchos pueblos antiguos, el mar era un poder caótico y amenazante, a veces un dios. En la Biblia, el mar obedece. Dios le dice: «Hasta aquí llegarás, y no pasarás adelante» (Job 38:11). El salmista describe los barcos y el gran monstruo marino, el leviatán, que Dios hizo para que jugase en el mar (Sal 104:26). Lo que otros temían, Dios lo creó y lo tiene bajo su mando.',
        { h: 'El día quinto: vida en el agua y en el aire' },
        'En el quinto día Dios llena los espacios que formó en el segundo. Las aguas se llenan de seres vivientes y el cielo, de aves. Por primera vez desde el versículo 1 vuelve el verbo bará, «creó»: «Y creó Dios los grandes monstruos marinos» (Gn 1:21). Es el comienzo de la vida animal, algo nuevo en el relato. Es también la primera vez que Dios bendice: «Fructificad y multiplicaos» (Gn 1:22). La vida animal es un regalo de Dios, y Él quiere que abunde.',
        'Las criaturas fueron hechas «según su género» y «según su especie», una expresión que se repite diez veces en el capítulo. Indica que Dios creó una gran variedad de formas de vida, cada una con su propia naturaleza, que se reproducen según su clase. La ruta III estudia lo que esa expresión enseña y lo que no.',
        { ejercicio: {
          pregunta: '¿Por qué es importante que Génesis presente a los grandes monstruos marinos como criaturas de Dios?',
          opciones: [
            { t: 'Porque en otros pueblos eran símbolo del caos o incluso divinidades, y Génesis enseña que son obra de Dios y están bajo su autoridad.', ok: true, por_que: 'Correcto: lo que otros temían o adoraban, la Biblia lo presenta como creación buena de Dios.' },
            { t: 'Porque así el texto prueba que los dinosaurios vivieron en el mar.', ok: false, por_que: 'El texto no habla de dinosaurios; habla de grandes animales marinos. No conviene hacerle decir lo que no dice.' },
            { t: 'Porque esos animales eran impuros y Dios quería advertir a Israel que no los comiera.', ok: false, por_que: 'Las leyes de animales limpios e impuros vienen mucho después, en Levítico 11. Aquí Dios ve que todo es bueno.' }
          ],
          explicacion: 'Génesis 1 desarma los miedos y las idolatrías del mundo antiguo: nada en la creación es rival de Dios.'
        } }
      ],
      pensar: 'El mar que los antiguos temían tiene límites que Dios le puso. ¿Qué situación que hoy te parece un «mar» amenazante necesitas ver bajo la autoridad de Dios?'
    },
    {
      id: 'tierra', n: 'Días 3 y 6: la tierra y sus habitantes', ref: 'Génesis 1:9-13, 24-25, 29-31; Salmos 104:10-23',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-tierra-viva.webp', alt: 'Un valle verde y fértil al amanecer, con un río, árboles frutales, pastos altos y distintos animales (ciervos, ganado salvaje, aves) en paz; sin personas', pie: '«Produzca la tierra seres vivientes según su género» (Génesis 1:24).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/9-13', ref: 'Génesis 1:9-13' }
      ],
      texto: [
        'El tercer día tiene dos obras. Primero, Dios junta las aguas en un lugar y hace aparecer la tierra seca. Después ordena: «Produzca la tierra hierba verde, hierba que dé semilla; árbol de fruto que dé fruto según su género» (Gn 1:11). Antes de crear a los animales y al ser humano, Dios prepara la comida que necesitarán.',
        { h: 'Plantas con semilla' },
        'El texto insiste en la semilla: la hierba «da semilla» y el árbol tiene «su semilla en él». Dios no creó un jardín que se acabaría con la primera cosecha, sino un mundo capaz de renovarse. Cada planta lleva en sí la capacidad de producir otras de su misma clase. Es una muestra de la generosidad y la sabiduría del Creador, que piensa en las generaciones futuras.',
        { h: 'El sexto día: los animales de la tierra' },
        'En el sexto día Dios llena la tierra seca. Primero los animales: el ganado, los animales salvajes y los que se arrastran (Gn 1:24-25). Otra vez aparece «según su género». El Salmo 104 muestra a los leones que rugen buscando presa, a las cabras monteses en los riscos y a los conejos entre las peñas (Sal 104:18-21): cada criatura tiene su lugar, y todas esperan de Dios su comida (Sal 104:27).',
        { h: 'La comida en el principio' },
        'Al final del sexto día, Dios da a los seres humanos y a los animales las plantas como alimento (Gn 1:29-30). Después del diluvio permitirá comer carne (Gn 9:3). Los intérpretes discuten si antes de la caída había muerte animal. Unos entienden que la muerte de los animales entró con el pecado, porque Dios vio que todo era «bueno en gran manera». Otros entienden que Romanos 5:12 habla de la muerte del ser humano, y que la muerte animal pudo ser parte del orden creado. Esta pregunta se relaciona con la edad de la tierra y se retoma en la ruta III.',
        { h: 'Sobre la tierra que Dios preparó' },
        'Lo más importante del sexto día está todavía por venir: la creación del ser humano, que tiene su propia estación. Pero antes de llegar a él, el relato muestra que Dios preparó todo lo necesario. Cuando el ser humano aparece, encuentra la luz encendida, el aire limpio, el agua, la comida y la compañía de los animales. Es como un padre que arregla la habitación de su hijo antes de que nazca.'
      ],
      pensar: 'Dios preparó todo lo que necesitarías antes de que existieras. ¿Qué cuidados de Dios en tu vida has recibido sin darte cuenta, antes siquiera de pedirlos?'
    },
    {
      id: 'hombre', n: 'El ser humano, corona de la creación', ref: 'Génesis 1:26-28; 2:7; Salmos 8:3-6; Mateo 19:4; Hechos 17:26',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/26-28', ref: 'Génesis 1:26-28' },
        { tipo: 'cita', titulo: 'Salmo 8', texto: '@@sal/8/3-6', ref: 'Salmos 8:3-6' }
      ],
      texto: [
        'Hasta este momento, Dios ha dicho «Sea» y «Produzca». Ahora el tono cambia: «Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza» (Gn 1:26). El relato se detiene, como si Dios deliberara. La creación del ser humano es el punto más alto del capítulo, y el único lugar donde el verbo «creó» se repite tres veces en un solo versículo (Gn 1:27).',
        { h: 'A imagen de Dios' },
        'El ser humano no es un animal más evolucionado ni un dios caído: es una criatura hecha «a imagen de Dios». En el mundo antiguo, los reyes ponían estatuas suyas en las provincias para mostrar quién gobernaba. Dios puso en la tierra a seres humanos que lo representan. Por eso reciben la orden de señorear sobre los peces, las aves y los animales: gobiernan en nombre de Dios, no por su cuenta. Qué significa exactamente la imagen de Dios, y qué quedó de ella después de la caída, se estudia en el recurso El ser humano y el pecado, en preparación.',
        { h: 'Varón y hembra' },
        '«Varón y hembra los creó» (Gn 1:27). Los dos llevan la imagen de Dios por igual, y los dos reciben la bendición y la tarea. Jesús citó este versículo para enseñar sobre el matrimonio: «el que los hizo al principio, varón y hembra los hizo» (Mt 19:4). La diferencia entre hombre y mujer no es un accidente ni una construcción cultural: es parte del diseño bueno de Dios.',
        { h: 'Una sola familia humana' },
        'Todos los seres humanos descienden de la primera pareja. Pablo lo dijo en Atenas: «de una sangre ha hecho todo el linaje de los hombres» (Hch 17:26). No hay razas superiores ni inferiores; hay una sola humanidad, con la misma dignidad y la misma necesidad de Dios. Este es uno de los fundamentos bíblicos contra el racismo y el desprecio por cualquier pueblo.',
        { h: 'La pregunta del salmista' },
        'David miró las estrellas y se sintió pequeño: «¿Qué es el hombre, para que tengas de él memoria?» (Sal 8:4). La respuesta lo asombra: Dios lo coronó de gloria y de honra. Hebreos 2 aplica este salmo a Jesús, el verdadero hombre, que cumple lo que Adán no pudo. La dignidad humana viene del Creador, y su plenitud se ve en Cristo.',
        { ejercicio: {
          pregunta: 'Según Génesis 1:26-28, ¿qué relación hay entre ser imagen de Dios y señorear sobre la creación?',
          opciones: [
            { t: 'El ser humano gobierna la creación como representante de Dios, y debe hacerlo como Él lo haría.', ok: true, por_que: 'Correcto: la imagen de Dios incluye la tarea de representarlo en la tierra, con responsabilidad y no como dueño absoluto.' },
            { t: 'Ser imagen de Dios autoriza al ser humano a usar la naturaleza como quiera, porque todo es suyo.', ok: false, por_que: 'La tierra es de Jehová (Sal 24:1). El ser humano es un administrador que rendirá cuentas, no el dueño.' },
            { t: 'No hay relación: la imagen de Dios se refiere solo a que el ser humano tiene alma.', ok: false, por_que: 'El texto une las dos cosas en el mismo versículo: «a nuestra imagen… y señoree».' }
          ],
          explicacion: 'Ser imagen de Dios es una dignidad y una tarea: representar al Creador en su creación.'
        } }
      ],
      pensar: 'Cada persona que ves hoy lleva la imagen de Dios. ¿A quién has tratado sin esa dignidad, y qué harías distinto si lo vieras como Dios lo ve?'
    },
    {
      id: 'bueno', n: '«Bueno en gran manera»', ref: 'Génesis 1:31; 1 Timoteo 4:4-5; Eclesiastés 3:11; Romanos 8:20-21',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Y vio Dios que era bueno»',
          cab: ['Día', 'Lo que Dios vio bueno', 'Versículo'],
          filas: [
            ['1', 'La luz', 'Gn 1:4'],
            ['3', 'La tierra seca y los mares', 'Gn 1:10'],
            ['3', 'Las plantas y los árboles', 'Gn 1:12'],
            ['4', 'Las lumbreras', 'Gn 1:18'],
            ['5', 'Los animales del agua y las aves', 'Gn 1:21'],
            ['6', 'Los animales de la tierra', 'Gn 1:25'],
            ['6', 'Todo lo que había hecho: «bueno en gran manera»', 'Gn 1:31'],
          ],
          nota: 'Siete veces aparece «bueno»; la séptima, sobre el conjunto, es superlativa. En el día 2 no se dice, quizá porque la obra de las aguas termina en el día 3.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1ti/4/1-5', ref: '1 Timoteo 4:1-5' }
      ],
      texto: [
        'Siete veces Génesis 1 dice que Dios vio lo que hizo, y era bueno. La última vez mira todo junto, con el ser humano incluido: «Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera» (Gn 1:31). La creación, tal como salió de las manos de Dios, era excelente.',
        { h: 'La materia no es mala' },
        'Esta afirmación parece sencilla, pero tiene consecuencias enormes. Muchas religiones y filosofías han enseñado que el mundo material es malo o inferior, y que lo espiritual consiste en escapar del cuerpo. En el siglo II, los gnósticos decían que el mundo había sido hecho por un dios inferior. Pablo enfrentó ideas parecidas en Éfeso: había quienes prohibían casarse y mandaban abstenerse de ciertos alimentos. Su respuesta viene de Génesis: «Porque todo lo que Dios creó es bueno, y nada es de desecharse, si se toma con acción de gracias» (1 Ti 4:4).',
        'El cuerpo, la comida, el trabajo, el matrimonio, la belleza de la naturaleza y la alegría de la música son buenos regalos de Dios. El pecado puede torcerlos, pero no los hizo. Por eso el creyente puede disfrutar la creación con gratitud, sin idolatrarla y sin despreciarla.',
        { h: 'Bueno, pero ahora herido' },
        'Si todo era bueno en gran manera, ¿de dónde vienen las enfermedades, los terremotos y la muerte? Génesis 3 responde: el pecado del ser humano trajo maldición sobre la tierra (Gn 3:17). Pablo dice que la creación «fue sujetada a vanidad» y espera ser liberada (Ro 8:20-21). El mundo actual sigue mostrando la bondad de Dios, pero también las marcas de la caída. Ni el optimismo ingenuo ni el pesimismo amargo son bíblicos: la creación es buena, está herida y será restaurada.',
        { h: 'Bueno para quién' },
        'En hebreo, la palabra tov, «bueno», incluye la idea de algo que funciona como debe, que cumple el propósito para el que fue hecho. Dios no vio solo cosas bonitas, sino un mundo que funcionaba en armonía: cada parte en su lugar, cumpliendo su función, y todo apuntando a la gloria del Creador. Eclesiastés lo dice así: «Todo lo hizo hermoso en su tiempo» (Ec 3:11).',
        { ejercicio: {
          pregunta: '¿Qué conclusión saca Pablo de la bondad de la creación en 1 Timoteo 4?',
          opciones: [
            { t: 'Que no hay que prohibir el matrimonio ni ciertos alimentos como si fueran malos en sí mismos.', ok: true, por_que: 'Correcto: si todo lo que Dios creó es bueno, se recibe con acción de gracias, no se desprecia.' },
            { t: 'Que el creyente puede hacer lo que quiera con su cuerpo, porque la materia no importa.', ok: false, por_que: 'Es el error contrario. Que el cuerpo sea bueno significa que importa y debe usarse para Dios (1 Co 6:19-20).' },
            { t: 'Que la creación ya no está afectada por el pecado.', ok: false, por_que: 'Pablo enseña en Romanos 8 que la creación gime. La bondad original no niega la caída.' }
          ],
          explicacion: 'La bondad de la creación protege de dos errores: despreciar lo material y usarlo sin Dios.'
        } }
      ],
      pensar: 'Dios llamó bueno a tu cuerpo, a la comida y al trabajo. ¿Hay algo bueno que Dios te dio que desprecias, o que usas como si no viniera de Él?'
    },
    {
      id: 'reposo', n: 'El séptimo día: Dios reposó', ref: 'Génesis 2:1-3; Éxodo 20:8-11; Marcos 2:27; Hebreos 4:1-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/2/1-3', ref: 'Génesis 2:1-3' },
        { tipo: 'cita', titulo: 'Hebreos 4', texto: '@@he/4/9-11', ref: 'Hebreos 4:9-11' }
      ],
      texto: [
        'Los seis días terminan con una obra distinta: el descanso. «Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo de toda la obra que hizo» (Gn 2:2). El verbo hebreo shabat significa cesar, dejar de trabajar, y de él viene la palabra sábado. Dios no reposó porque estuviera cansado: Isaías dice que el Creador no se fatiga (Is 40:28). Reposó porque su obra estaba completa.',
        { h: 'Un día sin «tarde y mañana»' },
        'Los seis primeros días terminan con la fórmula «y fue la tarde y la mañana». El séptimo no la tiene. Muchos intérpretes ven en esa ausencia un detalle intencional: el reposo de Dios no se cierra, sigue abierto. Hebreos 4 lo entiende así: «queda un reposo para el pueblo de Dios» (He 4:9), y los creyentes son invitados a entrar en él por la fe.',
        { h: 'Bendito y santificado' },
        'Dios bendice el séptimo día y lo santifica, es decir, lo aparta como especial. Es lo primero que la Biblia llama santo, y no es un lugar ni un objeto, sino un tiempo. En el Sinaí, Dios dio a Israel el mandamiento del día de reposo apoyándose en la creación: «Porque en seis días hizo Jehová los cielos y la tierra… y reposó en el séptimo día» (Éx 20:11). El ritmo de seis días de trabajo y uno de descanso viene del Creador.',
        { h: 'Hecho para el ser humano' },
        'Jesús enseñó que «El día de reposo fue hecho por causa del hombre, y no el hombre por causa del día de reposo» (Mr 2:27). El descanso es un regalo, no una carga. En un mundo antiguo donde los esclavos trabajaban sin parar, Israel debía descansar y dejar descansar a sus siervos y a sus animales. Hoy, cuando muchas personas viven agotadas, el ejemplo del Creador recuerda que no somos máquinas y que nuestra vida no depende solo de nuestro esfuerzo.',
        'Los cristianos han entendido de distintas maneras cómo se aplica hoy el día de reposo. La iglesia, desde el principio, se reunió el primer día de la semana, el día en que Cristo resucitó (Hch 20:7). La relación entre el sábado de Israel y la vida cristiana se estudia en Pactos y dispensaciones.',
        { ir: { t: 'Ver «Éxodo 20:8: el día de reposo» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#taller/3' } }
      ],
      pensar: 'Dios trabajó seis días y descansó uno, no por cansancio sino por satisfacción. ¿Tu ritmo de trabajo y descanso muestra que confías en Dios, o que todo depende de ti?'
    }
  ];

  window.__CREACION = { creador, dias };
})();
