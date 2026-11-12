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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por la palabra de Jehová fueron hechos los cielos, Y todo el ejército de ellos por el aliento de su boca. El junta como montón las aguas del mar; El pone en depósitos los abismos. Tema a Jehová toda la tierra; Teman delante de él todos los habitantes del mundo. Porque él dijo, y fue hecho; El mandó, y existió.', ref: 'Salmos 33:6-9' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos. Un día emite palabra a otro día, Y una noche a otra noche declara sabiduría. No hay lenguaje, ni palabras, Ni es oída su voz. Por toda la tierra salió su voz, Y hasta el extremo del mundo sus palabras. En ellos puso tabernáculo para el sol;', ref: 'Salmos 19:1-4' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿Dónde estabas tú cuando yo fundaba la tierra? Házmelo saber, si tienes inteligencia. ¿Quién ordenó sus medidas, si lo sabes? ¿O quién extendió sobre ella cordel? ¿Sobre qué están fundadas sus bases? ¿O quién puso su piedra angular, Cuando alababan todas las estrellas del alba, Y se regocijaban todos los hijos de Dios?', ref: 'Job 38:4-7' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En el principio creó Dios los cielos y la tierra. Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas. Y dijo Dios: Sea la luz; y fue la luz. Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas. Y llamó Dios a la luz Día, y a las tinieblas llamó Noche. Y fue la tarde y la mañana un día.', ref: 'Génesis 1:1-5' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo luego Dios: Haya lumbreras en la expansión de los cielos para separar el día de la noche; y sirvan de señales para las estaciones, para días y años, y sean por lumbreras en la expansión de los cielos para alumbrar sobre la tierra. Y fue así. E hizo Dios las dos grandes lumbreras; la lumbrera mayor para que señorease en el día, y la lumbrera menor para que señorease en la noche; hizo también las estrellas. Y las puso Dios en la expansión de los cielos para alumbrar sobre la tierra, y para señorear en el día y en la noche, y para separar la luz de las tinieblas. Y vio Dios que era bueno. Y fue la tarde y la mañana el día cuarto.', ref: 'Génesis 1:14-19' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo Dios: Produzcan las aguas seres vivientes, y aves que vuelen sobre la tierra, en la abierta expansión de los cielos. Y creó Dios los grandes monstruos marinos, y todo ser viviente que se mueve, que las aguas produjeron según su género, y toda ave alada según su especie. Y vio Dios que era bueno. Y Dios los bendijo, diciendo: Fructificad y multiplicaos, y llenad las aguas en los mares, y multiplíquense las aves en la tierra. Y fue la tarde y la mañana el día quinto.', ref: 'Génesis 1:20-23' },
        { tipo: 'cita', titulo: 'Salmo 104', texto: '¡Cuán innumerables son tus obras, oh Jehová! Hiciste todas ellas con sabiduría; La tierra está llena de tus beneficios. He allí el grande y anchuroso mar, En donde se mueven seres innumerables, Seres pequeños y grandes. Allí andan las naves; Allí este leviatán que hiciste para que jugase en él.', ref: 'Salmos 104:24-26' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo también Dios: Júntense las aguas que están debajo de los cielos en un lugar, y descúbrase lo seco. Y fue así. Y llamó Dios a lo seco Tierra, y a la reunión de las aguas llamó Mares. Y vio Dios que era bueno. Después dijo Dios: Produzca la tierra hierba verde, hierba que dé semilla; árbol de fruto que dé fruto según su género, que su semilla esté en él, sobre la tierra. Y fue así. Produjo, pues, la tierra hierba verde, hierba que da semilla según su naturaleza, y árbol que da fruto, cuya semilla está en él, según su género. Y vio Dios que era bueno. Y fue la tarde y la mañana el día tercero.', ref: 'Génesis 1:9-13' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra. Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Y los bendijo Dios, y les dijo: Fructificad y multiplicaos; llenad la tierra, y sojuzgadla, y señoread en los peces del mar, en las aves de los cielos, y en todas las bestias que se mueven sobre la tierra.', ref: 'Génesis 1:26-28' },
        { tipo: 'cita', titulo: 'Salmo 8', texto: 'Cuando veo tus cielos, obra de tus dedos, La luna y las estrellas que tú formaste, Digo: ¿Qué es el hombre, para que tengas de él memoria, Y el hijo del hombre, para que lo visites? Le has hecho poco menor que los ángeles, Y lo coronaste de gloria y de honra. Le hiciste señorear sobre las obras de tus manos; Todo lo pusiste debajo de sus pies:', ref: 'Salmos 8:3-6' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero el Espíritu dice claramente que en los postreros tiempos algunos apostatarán de la fe, escuchando a espíritus engañadores y a doctrinas de demonios; por la hipocresía de mentirosos que, teniendo cauterizada la conciencia, prohibirán casarse, y mandarán abstenerse de alimentos que Dios creó para que con acción de gracias participasen de ellos los creyentes y los que han conocido la verdad. Porque todo lo que Dios creó es bueno, y nada es de desecharse, si se toma con acción de gracias; porque por la palabra de Dios y por la oración es santificado.', ref: '1 Timoteo 4:1-5' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Fueron, pues, acabados los cielos y la tierra, y todo el ejército de ellos. Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo de toda la obra que hizo. Y bendijo Dios al día séptimo, y lo santificó, porque en él reposó de toda la obra que había hecho en la creación.', ref: 'Génesis 2:1-3' },
        { tipo: 'cita', titulo: 'Hebreos 4', texto: 'Por tanto, queda un reposo para el pueblo de Dios. Porque el que ha entrado en su reposo, también ha reposado de sus obras, como Dios de las suyas. Procuremos, pues, entrar en aquel reposo, para que ninguno caiga en semejante ejemplo de desobediencia.', ref: 'Hebreos 4:9-11' }
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
(() => {
  /* ---------------- III. Cómo leer Génesis 1 ----------------
     Decisión del responsable: todas las lecturas de los días y de la edad de la tierra en bloques
     `posturas`, sin fijar ninguna; se nombran las organizaciones con respeto. El recurso sí afirma
     la creación de la nada, la creación especial del ser humano y un Adán y una Eva históricos. */
  const leer = [
    {
      id: 'pregunta', n: 'Una pregunta que divide a hermanos', ref: 'Génesis 1:1–2:3; Romanos 14:1; 2 Timoteo 2:23-25',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-posturas.svg', alt: 'Cinco lecturas de Génesis 1 en columnas: días de 24 horas y tierra joven, teoría de la brecha, días como eras y creación progresiva, marco literario y evolución teísta; abajo, una franja común con lo que todas las lecturas cristianas ortodoxas afirman', pie: 'Las cinco lecturas más comunes entre los evangélicos, de la más literal en la cronología a la más figurada. Abajo, lo que comparten.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cinco maneras de leer los días',
          cab: ['Lectura', 'Los días son…', 'Edad de la tierra', 'Ruta III'],
          filas: [
            ['Tierra joven', 'Seis días de veinticuatro horas', 'Unos miles de años', 'Estación 2'],
            ['Teoría de la brecha', 'Seis días literales de restauración, después de un largo intervalo', 'Antigua', 'Estación 3'],
            ['Día-era y creación progresiva', 'Seis períodos largos y sucesivos', 'Antigua', 'Estación 4'],
            ['Marco literario', 'Un marco que ordena el relato por temas, no por cronología', 'No la define el texto', 'Estación 5'],
            ['Evolución teísta', 'Lenguaje figurado; Dios creó por medio de la evolución', 'Antigua', 'Estación 6'],
          ],
          nota: 'Las cuatro primeras rechazan que el ser humano venga de otras especies; la quinta lo acepta.'
        } }
      ],
      texto: [
        'Pocas preguntas bíblicas generan discusiones tan apasionadas como esta: ¿cuánto duraron los días de Génesis 1, y cuántos años tiene la tierra? Hay creyentes que aman la Biblia, la creen palabra por palabra y llegan a respuestas distintas. Esta ruta no busca resolver la discusión, sino ayudarte a entender cada lectura con justicia, conocer sus argumentos y saber qué está en juego.',
        { h: 'No es una pregunta nueva' },
        'Mucho antes de la ciencia moderna, los cristianos ya leían los días de maneras distintas. En el siglo IV, Basilio de Cesarea predicó sobre los seis días como días ordinarios. Su contemporáneo Agustín de Hipona pensaba lo contrario: Dios lo había creado todo en un instante, y los seis días eran una manera de enseñar el orden de la creación a los ángeles y a los hombres. Ninguno de los dos estaba respondiendo a los geólogos, que todavía no existían. La diversidad de lecturas es antigua.',
        { h: 'Lo que está en juego' },
        'Desde el siglo XIX, la geología y la astronomía estiman que la tierra tiene unos 4.500 millones de años y el universo unos 13.800 millones. Algunos creyentes aceptan esas cifras y buscan cómo armonizarlas con Génesis; otros piensan que esos cálculos parten de supuestos equivocados. Y la teoría de la evolución, propuesta por Charles Darwin en 1859, plantea otra pregunta: si los seres vivos, incluido el ser humano, descienden unos de otros por procesos naturales.',
        { h: 'Lo que compartimos' },
        'Antes de las diferencias, conviene ver lo que une a todos los que creen la Escritura como Palabra de Dios: hay un solo Dios que creó todo de la nada; la creación es buena y tiene propósito; Dios formó al ser humano de manera especial, a su imagen; Adán y Eva fueron personas reales, de quienes desciende toda la humanidad; y el pecado entró al mundo por la desobediencia de ellos. Muchas iglesias evangélicas y pentecostales afirman con firmeza estas verdades y, al mismo tiempo, no fijan una postura oficial sobre la edad de la tierra. Este recurso hace lo mismo.',
        'Pablo pide recibir al débil en la fe «pero no para contender sobre opiniones» (Ro 14:1), y que el siervo del Señor corrija con mansedumbre (2 Ti 2:24-25). Esa actitud vale para esta ruta.',
        { ir: { t: 'Ver «Sentido literal y revelación progresiva» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/7' } }
      ],
      pensar: '¿Has visto discusiones sobre la creación que dividieron a hermanos? ¿Qué diferencia hay entre defender la verdad con firmeza y pelear por una opinión?'
    },
    {
      id: 'joven', n: 'Seis días de veinticuatro horas', ref: 'Génesis 1:5; Éxodo 20:9-11; 31:17; Marcos 10:6; Romanos 5:12',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Seis días trabajarás, y harás toda tu obra; mas el séptimo día es reposo para Jehová tu Dios; no hagas en él obra alguna, tú, ni tu hijo, ni tu hija, ni tu siervo, ni tu criada, ni tu bestia, ni tu extranjero que está dentro de tus puertas. Porque en seis días hizo Jehová los cielos y la tierra, el mar, y todas las cosas que en ellos hay, y reposó en el séptimo día; por tanto, Jehová bendijo el día de reposo y lo santificó.', ref: 'Éxodo 20:9-11' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La lectura de la tierra joven',
          cab: ['Punto', 'Lo que sostiene'],
          filas: [
            ['Los días', 'Seis días consecutivos de veinticuatro horas'],
            ['La edad de la tierra', 'Unos 6.000 a 10.000 años, sumando las genealogías'],
            ['La muerte', 'No hubo muerte animal antes del pecado de Adán'],
            ['Los fósiles y las capas de roca', 'En su mayoría, formados por el diluvio universal'],
            ['La ciencia de los orígenes', 'Los métodos de datación parten de supuestos que no se pueden comprobar'],
            ['Quiénes la defienden', 'Respuestas en Génesis (Ken Ham), el Instituto para la Investigación de la Creación (Henry Morris) y muchos pastores y creyentes'],
          ],
          nota: 'En 1650, el arzobispo James Ussher calculó, sumando las edades de la Biblia, que la creación ocurrió en el año 4004 a.C.'
        } }
      ],
      texto: [
        'La lectura más antigua y extendida entre los creyentes sencillos es que Dios creó el mundo en seis días como los nuestros. Hoy se la conoce como creacionismo de la tierra joven, porque, al sumar las edades de las genealogías de Génesis 5 y 11, la creación habría ocurrido hace unos pocos miles de años.',
        { h: 'Sus argumentos' },
        'Primero, la palabra «día» (yom). Cuando va acompañada de un número, «día segundo», «día tercero», en el resto del Antiguo Testamento casi siempre significa un día normal. Además, cada día termina con «la tarde y la mañana», que describe el ciclo de un día. Segundo, el cuarto mandamiento compara la semana de trabajo de Israel con la semana de la creación: «Porque en seis días hizo Jehová los cielos y la tierra» (Éx 20:11). Si los días fueran eras, dicen, la comparación perdería fuerza.',
        'Tercero, Jesús dijo que «al principio de la creación, varón y hembra los hizo Dios» (Mr 10:6). Para ellos, eso supone que el ser humano estuvo presente casi desde el comienzo, no al final de miles de millones de años. Cuarto, Pablo enseña que la muerte entró al mundo por el pecado (Ro 5:12). Si los fósiles muestran millones de años de muerte, enfermedad y extinción antes de Adán, entonces Dios habría llamado «bueno en gran manera» a un mundo lleno de muerte.',
        { h: 'Quiénes la defienden' },
        'En el siglo XX, esta lectura tomó fuerza con el libro El diluvio del Génesis (1961), de John Whitcomb y Henry Morris. Morris fundó el Instituto para la Investigación de la Creación. Hoy la organización más conocida es Respuestas en Génesis, fundada por Ken Ham, que construyó en Kentucky un museo de la creación y una réplica del arca de Noé a tamaño real.',
        { posturas: {
          titulo: '¿Qué responden quienes no siguen esta lectura?',
          a: { n: 'La lectura de la tierra joven', t: 'Es la lectura más natural del texto: días con número, tarde y mañana, y una semana que sirve de modelo para la de Israel. La ciencia cambia; la Palabra no. Si Génesis 1 no se lee así, dicen, se debilita la confianza en el resto de la Biblia.' },
          b: { n: 'Las objeciones', t: 'Otros intérpretes, que también creen en la inspiración de la Escritura, señalan que yom tiene varios sentidos (Gn 2:4 llama «el día» a toda la creación), que el sexto día parece tener demasiados hechos para veinticuatro horas (Gn 2:15-23), que el séptimo día no termina, y que las genealogías bíblicas a veces saltan generaciones (compárese Mt 1:8 con 1 Cr 3:11-12).' },
          c: 'Esta lectura ha sido la de muchos creyentes fieles a lo largo de la historia, y lo sigue siendo. Quien la sostiene no lo hace por ignorancia, sino por respeto al texto. Quien no la sostiene no por eso niega la autoridad de la Biblia. El recurso no fija una postura sobre la edad de la tierra.'
        } }
      ],
      pensar: 'Quienes defienden la tierra joven quieren honrar la Palabra tal como está escrita. ¿Cómo puedes tener esa misma reverencia por el texto, sea cual sea tu conclusión sobre los días?'
    },
    {
      id: 'brecha', n: 'La teoría de la brecha', ref: 'Génesis 1:1-2; Isaías 45:18; Jeremías 4:23-26; Isaías 14:12-15; Ezequiel 28:13-17',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En el principio creó Dios los cielos y la tierra. Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas.', ref: 'Génesis 1:1-2' },
        { tipo: 'cita', titulo: 'Jeremías 4', texto: 'Miré a la tierra, y he aquí que estaba asolada y vacía; y a los cielos, y no había en ellos luz. Miré a los montes, y he aquí que temblaban, y todos los collados fueron destruidos. Miré, y no había hombre, y todas las aves del cielo se habían ido. Miré, y he aquí el campo fértil era un desierto, y todas sus ciudades eran asoladas delante de Jehová, delante del ardor de su ira.', ref: 'Jeremías 4:23-26' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La teoría de la brecha en tres tiempos',
          cab: ['Momento', 'Texto', 'Lo que habría ocurrido'],
          filas: [
            ['Una creación original', 'Gn 1:1', 'Dios crea un mundo perfecto, quizá hace mucho tiempo'],
            ['Una ruina', 'Gn 1:2', 'La rebelión de Lucifer trae un juicio: la tierra «llegó a ser» desordenada y vacía'],
            ['Una restauración', 'Gn 1:3-31', 'Dios rehace la tierra en seis días literales y crea a Adán'],
          ],
          nota: 'También se la llama teoría de la ruina y la reconstrucción.'
        } }
      ],
      texto: [
        'Durante buena parte del siglo XX, muchos predicadores evangélicos y pentecostales enseñaron una lectura que permitía aceptar una tierra muy antigua sin renunciar a seis días literales. Se la conoce como teoría de la brecha, porque coloca un largo intervalo, una brecha, entre los versículos 1 y 2 de Génesis 1.',
        { h: 'Qué propone' },
        'Según esta lectura, el versículo 1 describe una creación original y perfecta. Después, Lucifer, el querubín que estaba en el huerto de Dios (Ez 28:13-15), se rebeló, y su caída trajo un juicio sobre aquella primera tierra. El versículo 2 describiría el resultado: la tierra «llegó a ser» desordenada y vacía. Isaías 45:18 diría que Dios no la creó así, sino que llegó a ese estado. Jeremías 4:23 usa las mismas palabras, tohu vabohu, para describir una tierra arrasada por el juicio. Desde el versículo 3, Dios restauraría la tierra en seis días literales. Los fósiles y las rocas antiguas pertenecerían al mundo anterior.',
        { h: 'Quiénes la difundieron' },
        'La propuso el escocés Thomas Chalmers en 1814 y la desarrolló George H. Pember en Las edades más antiguas de la tierra (1876). La hicieron popular la Biblia anotada de C. I. Scofield (1909), muy leída por los dispensacionalistas, y, entre los pentecostales, la Biblia anotada de Finis Dake (1963) y los diagramas de Clarence Larkin. Muchos creyentes de habla hispana la aprendieron así en sus iglesias e institutos bíblicos.',
        { posturas: {
          titulo: '¿Hay una brecha entre Génesis 1:1 y 1:2?',
          a: { n: 'Sí: una ruina y una restauración', t: 'El verbo hebreo de Génesis 1:2 (hayetah) puede traducirse «llegó a ser», como en Génesis 19:26. Isaías 45:18 dice que Dios no creó la tierra tohu. Jeremías 4:23 asocia tohu vabohu con un juicio. Y la caída de Satanás tuvo que ocurrir antes de Génesis 3, cuando la serpiente ya es enemiga de Dios. La teoría explica todo eso y deja lugar para las edades de la geología.' },
          b: { n: 'No: el versículo 2 describe el punto de partida', t: 'La mayoría de los hebraístas, también conservadores, señalan que la construcción de Génesis 1:2 en hebreo describe una situación («y la tierra estaba»), no un cambio. Isaías 45:18 habla del propósito final de Dios, no del estado inicial: no creó la tierra para que quedara vacía. Jeremías 4 compara el juicio con el estado anterior a la creación, no al revés. Además, Éxodo 20:11 dice que en seis días Dios hizo «los cielos y la tierra», y la teoría supone muerte y destrucción antes del pecado de Adán.' },
          c: 'La teoría de la brecha nació con buenas intenciones y la sostuvieron grandes maestros de la Biblia. Hoy la siguen menos creyentes, porque su apoyo gramatical es débil. Lo que sí afirma la Escritura es que Satanás cayó antes de tentar a Eva, aunque no dice cuándo. Este recurso presenta la teoría como una postura posible, no como enseñanza firme.'
        } }
      ],
      pensar: 'Muchos aprendimos ciertas explicaciones de la Biblia de maestros que amábamos. ¿Estás dispuesto a revisar lo que te enseñaron con la Biblia abierta, sin dejar de honrar a quienes te lo enseñaron?'
    },
    {
      id: 'dia-era', n: 'Días como eras y creación progresiva', ref: 'Génesis 2:4; Salmos 90:2-4; 2 Pedro 3:8; Hebreos 4:3-10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Señor, tú nos has sido refugio De generación en generación. Antes que naciesen los montes Y formases la tierra y el mundo, Desde el siglo y hasta el siglo, tú eres Dios. Vuelves al hombre hasta ser quebrantado, Y dices: Convertíos, hijos de los hombres. Porque mil años delante de tus ojos Son como el día de ayer, que pasó, Y como una de las vigilias de la noche.', ref: 'Salmos 90:1-4' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las lecturas de tierra antigua con creación especial',
          cab: ['Punto', 'Día-era', 'Creación progresiva'],
          filas: [
            ['Los días', 'Seis períodos largos y sucesivos', 'Seis períodos, o días que introducen largas etapas'],
            ['Cómo creó Dios', 'Por su palabra, en etapas', 'Por actos creadores sucesivos a lo largo de millones de años'],
            ['El origen de las especies', 'Creadas por Dios, no por evolución', 'Creadas por Dios en etapas; rechaza el antepasado común'],
            ['Adán y Eva', 'Creados de manera especial, personas reales', 'Creados de manera especial, personas reales'],
            ['Quiénes la defienden', 'Muchos evangélicos de los siglos XIX y XX', 'Reasons to Believe (Hugh Ross) y otros científicos cristianos'],
          ],
          nota: 'Las dos aceptan la edad de la tierra que estima la geología y rechazan la evolución sin guía.'
        } }
      ],
      texto: [
        'Otra familia de lecturas entiende que los días de Génesis 1 no fueron de veinticuatro horas, sino largos períodos de tiempo. Así, el relato bíblico y la edad de la tierra que estiman los científicos no se contradicen. Esta lectura se llama día-era, y una variante muy difundida hoy es la creación progresiva.',
        { h: 'Sus argumentos' },
        'La palabra yom no siempre significa un día de veinticuatro horas. En Génesis 2:4, la RV 1960 dice «el día que Jehová Dios hizo la tierra y los cielos», refiriéndose a toda la semana de la creación. Los profetas hablan del «día de Jehová», que abarca muchos acontecimientos. Moisés escribe que «mil años delante de tus ojos Son como el día de ayer» (Sal 90:4), y Pedro dice que para el Señor «un día es como mil años» (2 P 3:8).',
        'Además, observan que el sexto día incluye muchos hechos: la creación de Adán, el huerto, el nombre de todos los animales y la creación de Eva (Gn 2:7-23). Y el séptimo día no tiene tarde ni mañana: según Hebreos 4, el reposo de Dios continúa. Si el séptimo día es largo, dicen, los otros también pueden serlo.',
        { h: 'La creación progresiva' },
        'La creación progresiva sostiene que Dios creó el universo hace miles de millones de años, y que a lo largo de esas edades intervino una y otra vez con actos creadores directos para producir nuevas formas de vida, hasta crear al ser humano. Rechaza que todas las especies desciendan de un antepasado común y afirma que Adán y Eva fueron personas reales, creadas directamente por Dios. Su defensor más conocido es el astrofísico canadiense Hugh Ross, que fundó en 1986 la organización Reasons to Believe («Razones para creer»).',
        { posturas: {
          titulo: '¿Pueden los días ser eras?',
          a: { n: 'Sí: períodos largos y sucesivos', t: 'Yom tiene sentidos amplios, el sexto día es demasiado lleno para veinticuatro horas y el séptimo sigue abierto. La creación revela a Dios tanto como la Escritura (Sal 19:1), y las dos no pueden contradecirse; la edad que muestran las estrellas y las rocas sería parte de esa revelación.' },
          b: { n: 'No: los días con número y «tarde y mañana» son días', t: 'Los críticos responden que «tarde y mañana» con un número describe un día común, que Éxodo 20:11 compara directamente la semana de Dios con la de Israel, y que el orden de Génesis 1 (plantas antes que el sol, aves antes que los animales terrestres) no coincide del todo con la secuencia que propone la geología. También objetan que esta lectura supone muerte animal antes de la caída.' },
          c: 'Las dos posturas comparten la creación especial del ser humano y la historicidad de Adán y Eva. La diferencia está en la duración de los días, una pregunta que el texto no responde con la claridad que quisiéramos. El recurso no fija una postura.'
        } }
      ],
      pensar: 'Para Dios, mil años son como un día. ¿Qué te enseña esto sobre la paciencia de Dios con la historia, y con tu propia vida?'
    },
    {
      id: 'marco', n: 'El marco literario y otras lecturas literarias', ref: 'Génesis 1:1–2:3; 2:4-25; Éxodo 25–40',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dias.svg', alt: 'Los seis días en dos columnas paralelas, formar y llenar, con el séptimo día como corona', pie: 'El paralelo entre los días 1-3 y 4-6 es la base de la lectura del marco literario.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres lecturas literarias de Génesis 1',
          cab: ['Lectura', 'Qué propone', 'Quiénes'],
          filas: [
            ['Marco literario', 'Los días son un marco que ordena la creación por temas (formar y llenar), no una cronología', 'Arie Noordtzij (1924), Meredith Kline, Henri Blocher'],
            ['Días análogos', 'Los días de Dios son análogos a los nuestros: modelo para la semana humana, sin duración definida', 'C. John Collins'],
            ['Templo cósmico', 'Génesis 1 describe a Dios dando funciones a su creación e inaugurándola como su templo', 'John Walton'],
          ],
          nota: 'Estas lecturas no niegan que Dios creó, sino que preguntan qué quiere enseñar la forma del relato.'
        } }
      ],
      texto: [
        'Las lecturas anteriores tienen algo en común: entienden que los días de Génesis 1 siguen un orden cronológico, sean de veinticuatro horas o más largos. Hay otras lecturas que ponen el acento en la forma literaria del relato. No preguntan primero cuánto duró cada día, sino por qué Moisés escribió la creación de esta manera.',
        { h: 'El marco literario' },
        'La lectura del marco literario parte del paralelo que viste en la ruta II: los días 1 a 3 forman espacios y los días 4 a 6 los llenan. Para sus sostenedores, esa simetría muestra que el autor ordenó la creación por temas, como un marco de dos paneles, y no en estricto orden de aparición. Por eso la luz del día 1 y las lumbreras del día 4 pueden hablar de la misma realidad desde dos ángulos. La semana es la forma que Dios eligió para enseñar que creó todo con orden, que el ser humano es la corona de su obra y que el reposo es santo. La propuso el holandés Arie Noordtzij en 1924, y la defendieron después el teólogo reformado Meredith Kline y el francés Henri Blocher.',
        { h: 'Días análogos y templo cósmico' },
        'Otros proponen que los días son análogos a los nuestros: Dios trabaja y descansa, y su semana sirve de modelo para la nuestra, aunque no tenga la misma duración. John Walton, por su parte, sugiere que Génesis 1 habla sobre todo de funciones: Dios da a cada parte del universo su tarea y, en el séptimo día, toma posesión de su creación como de un templo. Recuerda que en el tabernáculo y en el templo también había siete etapas, un descanso y la presencia de Dios.',
        { posturas: {
          titulo: '¿Enseña Génesis 1 una cronología?',
          a: { n: 'No necesariamente: es un relato ordenado por temas', t: 'Génesis 1 tiene una forma cuidadosamente literaria, y Génesis 2 cuenta la creación en otro orden, centrado en el ser humano. Si Moisés hubiera querido dar una cronología estricta, dicen, no habría escrito dos relatos con secuencias distintas. El mensaje teológico no depende de la duración ni del orden exacto.' },
          b: { n: 'Sí: el texto se presenta como historia', t: 'Los críticos responden que el relato usa la forma narrativa hebrea propia de la historia («y dijo… y fue…»), que la secuencia de días numerados es deliberada, y que Éxodo 20:11 trata la semana como algo que ocurrió. Temen que, si los días son solo un marco, se abra la puerta a tratar como figura otros relatos de Génesis, como Adán, el diluvio o Babel.' },
          c: 'Que Génesis 1 tenga una estructura literaria es evidente. La pregunta es si esa estructura excluye una secuencia histórica. Muchos sostenedores del marco literario afirman con igual firmeza la historicidad de Adán y de la caída. El recurso no fija una postura.'
        } },
        { ir: { t: 'Ver «La narrativa» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#generos/2' } }
      ],
      pensar: 'Génesis 1 es un relato hermoso y ordenado. ¿Te has detenido a leerlo como adoración, además de como información?'
    },
    {
      id: 'evolucion', n: '¿Y la evolución?', ref: 'Génesis 1:24-27; 2:7, 21-22; Lucas 3:38; Romanos 5:12-19; 1 Corintios 15:21-22, 45; 1 Timoteo 2:13',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '¿De qué hablamos cuando decimos «evolución»?',
          cab: ['Sentido', 'Qué afirma', 'Y la fe bíblica'],
          filas: [
            ['Cambios dentro de una especie', 'Las poblaciones varían y se adaptan (razas de perros, resistencia de bacterias)', 'Compatible: lo aceptan todas las lecturas'],
            ['Antepasado común', 'Todas las especies, incluido el ser humano, descienden de formas de vida anteriores', 'Discutido: lo aceptan los evolucionistas teístas; lo rechazan las demás lecturas'],
            ['Evolución sin guía (naturalismo)', 'La vida y el ser humano son resultado de procesos ciegos, sin propósito ni Creador', 'Incompatible: niega la creación'],
          ],
          nota: 'Muchas discusiones se confunden porque se usa la misma palabra para tres cosas distintas.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente.', ref: 'Génesis 2:7' },
        { tipo: 'cita', titulo: 'Romanos 5', texto: 'Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron. Pues antes de la ley, había pecado en el mundo; pero donde no hay ley, no se inculpa de pecado. No obstante, reinó la muerte desde Adán hasta Moisés, aun en los que no pecaron a la manera de la transgresión de Adán, el cual es figura del que había de venir.', ref: 'Romanos 5:12-14' }
      ],
      texto: [
        'En 1859, Charles Darwin publicó El origen de las especies, donde proponía que los seres vivos descienden unos de otros y cambian a lo largo del tiempo por selección natural. Desde entonces, la palabra «evolución» se usa con varios sentidos, y conviene distinguirlos, como hace la tabla.',
        { h: 'Lo que ningún creyente puede aceptar' },
        'Que las especies varían y se adaptan es algo que cualquiera puede observar, y no contradice la Biblia. Lo que la Escritura rechaza sin ambigüedad es la evolución entendida como un proceso ciego, sin propósito y sin Creador, que explicaría la vida y al ser humano sin Dios. Esa es una filosofía, el naturalismo, más que una conclusión de la ciencia, y la fe cristiana la rechaza: los cielos cuentan la gloria de Dios (Sal 19:1).',
        { h: 'La evolución teísta' },
        'Algunos cristianos aceptan que todas las especies, también el ser humano, descienden de un antepasado común, pero sostienen que ese proceso fue guiado por Dios. Esta lectura se llama evolución teísta o creación evolutiva. La defiende la organización BioLogos, fundada en 2007 por Francis Collins, el genetista que dirigió el Proyecto Genoma Humano. Sobre Adán y Eva, algunos de sus miembros los ven como una pareja histórica dentro de una población más amplia, y otros como figuras que representan a la humanidad.',
        { posturas: {
          titulo: '¿Creó Dios al ser humano por medio de la evolución?',
          a: { n: 'Evolución teísta', t: 'Dios es soberano sobre los procesos naturales, como lo es sobre la lluvia o el crecimiento de un niño, y pudo crear por medio de la evolución. El relato de Génesis 2, dicen, usa imágenes (el polvo, el soplo, la costilla) para enseñar verdades sobre el ser humano, no para describir el método biológico.' },
          b: { n: 'Creación especial del ser humano', t: 'El texto presenta a Adán formado del polvo y animado por el aliento de Dios (Gn 2:7), y a Eva formada del hombre (Gn 2:21-22), algo que ningún proceso evolutivo explica. Lucas traza la genealogía de Jesús hasta «Adán, hijo de Dios» (Lc 3:38). Pablo construye la doctrina de la salvación sobre un Adán histórico: por un hombre entró el pecado, y por un hombre, Cristo, la justicia (Ro 5:12-19; 1 Co 15:21-22). Si no hubo un primer hombre real que pecó, la comparación con Cristo pierde su base.' },
          c: 'Este recurso sostiene la creación especial del ser humano: Adán y Eva fueron personas reales, creadas directamente por Dios, de quienes desciende toda la humanidad, y su caída explica la condición del mundo. Lo hace sin dudar de la fe de quienes piensan distinto. La doctrina del ser humano y del pecado se estudia en El ser humano y el pecado, en preparación.'
        } },
        { h: '«Según su género»' },
        'La palabra hebrea min, traducida «género» (Gn 1:24-25), no equivale exactamente a la «especie» de la biología: describe clases de seres vivos que se reproducen dentro de su clase, con la gran variedad que observamos hoy.'
      ],
      pensar: 'Pablo dice que por un hombre entró el pecado y por un hombre vino la vida. ¿Qué significa para ti que la historia de tu salvación esté unida a personas reales, Adán y Cristo, y no a ideas?'
    },
    {
      id: 'conversar', n: 'Taller: lo que compartimos y cómo conversar', ref: 'Hebreos 11:3; 1 Pedro 3:15; Romanos 14:1-5; Colosenses 4:6',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo esencial y lo discutido',
          cab: ['Lo que afirma la Escritura con claridad', 'Lo que los creyentes discuten'],
          filas: [
            ['Dios creó todo de la nada', 'La duración de los días'],
            ['La creación es buena y tiene propósito', 'La edad de la tierra y del universo'],
            ['Cristo es el Creador y el sustentador', 'Si hubo muerte animal antes de la caída'],
            ['Dios formó al ser humano de manera especial', 'El orden exacto de los días'],
            ['Adán y Eva fueron personas reales', 'Si las genealogías de Génesis tienen huecos'],
            ['El pecado entró por la desobediencia de Adán', 'El alcance geográfico del diluvio'],
          ],
          nota: 'La columna izquierda es fundamento de la fe; la derecha, tema de estudio y diálogo entre hermanos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'sino santificad a Dios el Señor en vuestros corazones, y estad siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros; teniendo buena conciencia, para que en lo que murmuran de vosotros como de malhechores, sean avergonzados los que calumnian vuestra buena conducta en Cristo.', ref: '1 Pedro 3:15-16' }
      ],
      texto: [
        'Esta ruta presentó cinco maneras de leer Génesis 1. No es necesario que elijas una hoy. Lo importante es que puedas distinguir lo que la Biblia afirma con claridad de lo que los creyentes discuten honestamente, y que sepas conversar de estos temas con humildad, tanto con hermanos que piensan distinto como con personas que no creen.',
        { h: 'Con hermanos' },
        'Los creyentes que sostienen la tierra joven, la brecha, la día-era o el marco literario creen en el mismo Creador, en el mismo Adán y en el mismo Salvador. Pablo pide que «cada uno esté plenamente convencido en su propia mente» en los asuntos discutibles (Ro 14:5), sin juzgar ni despreciar al otro. Una diferencia sobre la edad de la tierra no es una diferencia sobre el evangelio.',
        { h: 'Con quienes no creen' },
        'Pedro pide estar «siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros» (1 P 3:15). Muchos jóvenes dejan la iglesia porque creen que tienen que elegir entre la fe y la ciencia. Conviene mostrarles que la pregunta principal no es cuántos años tiene la tierra, sino si el universo tiene un Creador, si la vida tiene propósito y si el ser humano es más que un accidente. En esos puntos, la Biblia habla con claridad, y la creación misma da testimonio (Ro 1:20).',
        { ejercicio: {
          pregunta: 'Un compañero de trabajo te dice: «La ciencia ya demostró que la tierra tiene millones de años, así que la Biblia está equivocada». ¿Cuál es la mejor respuesta?',
          opciones: [
            { t: 'Explicarle que hay creyentes con distintas lecturas de los días, y que lo esencial de Génesis es que Dios creó todo con propósito y que el ser humano no es un accidente.', ok: true, por_que: 'Correcto: llevas la conversación a lo central y muestras que la fe no depende de una sola manera de leer los días.' },
            { t: 'Decirle que la ciencia es enemiga de la fe y que no vale la pena hablar del tema.', ok: false, por_que: 'La Biblia no enseña que la ciencia sea enemiga; Dios es autor de la creación que la ciencia estudia. Cerrar la conversación tampoco ayuda a quien pregunta.' },
            { t: 'Aceptar que Génesis 1 es un mito sin valor histórico, para evitar la discusión.', ok: false, por_que: 'Eso entrega lo que el texto sí afirma: un Dios creador, un ser humano creado y una historia real de pecado y salvación.' }
          ],
          explicacion: 'La edad de la tierra es una pregunta secundaria; la existencia del Creador, la dignidad humana y la necesidad de salvación no lo son.'
        } },
        { ejercicio: {
          pregunta: '¿Cuál de estas afirmaciones comparten la tierra joven, la teoría de la brecha, la día-era y el marco literario?',
          opciones: [
            { t: 'Que Dios creó al ser humano de manera especial y que Adán y Eva fueron personas reales.', ok: true, por_que: 'Correcto: las cuatro lecturas lo afirman, aunque difieran sobre los días.' },
            { t: 'Que la tierra tiene unos pocos miles de años.', ok: false, por_que: 'Solo la lectura de la tierra joven lo sostiene; las otras aceptan una tierra antigua o no la definen.' },
            { t: 'Que los días de Génesis 1 son períodos de millones de años.', ok: false, por_que: 'Eso es propio de la lectura día-era; la tierra joven y la brecha entienden días literales.' }
          ],
          explicacion: 'Lo que une a estas lecturas es más profundo que lo que las separa.'
        } }
      ],
      pensar: '¿Con quién podrías conversar esta semana sobre el Creador? ¿Cómo lo harías con mansedumbre y reverencia, como pide Pedro?'
    }
  ];

  window.__CREACION.leer = leer;
})();
(() => {
  const MESOP = [[28.6, 37.5], [40.6, 50.5]];   // Mesopotamia y las montañas de Armenia

  /* ---------------- IV. El Edén y la primera pareja ---------------- */
  const eden = [
    {
      id: 'polvo', n: 'Del polvo y con el aliento de Dios', ref: 'Génesis 2:4-7; Job 33:4; Eclesiastés 12:7; 1 Corintios 15:45-49',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Estos son los orígenes de los cielos y de la tierra cuando fueron creados, el día que Jehová Dios hizo la tierra y los cielos, y toda planta del campo antes que fuese en la tierra, y toda hierba del campo antes que naciese; porque Jehová Dios aún no había hecho llover sobre la tierra, ni había hombre para que labrase la tierra, sino que subía de la tierra un vapor, el cual regaba toda la faz de la tierra. Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente.', ref: 'Génesis 2:4-7' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos relatos que se complementan',
          cab: ['', 'Génesis 1:1–2:3', 'Génesis 2:4-25'],
          filas: [
            ['Nombre de Dios', 'Dios (Elohim): el Creador poderoso', 'Jehová Dios: el Dios del pacto, cercano'],
            ['Enfoque', 'Todo el universo, en orden de días', 'El ser humano, en el huerto'],
            ['Cómo crea', 'Por su palabra: «Y dijo Dios»', 'Con sus manos: forma, sopla, planta, toma'],
            ['El ser humano', 'Corona de la obra, a imagen de Dios', 'Formado del polvo, compañero de Dios'],
            ['Lo que destaca', 'La grandeza de Dios', 'La relación de Dios con el hombre'],
          ],
          nota: 'Como una foto panorámica y un acercamiento del mismo paisaje.'
        } }
      ],
      texto: [
        'En Génesis 2:4 comienza una nueva sección. La frase «Estos son los orígenes» (en hebreo, toledot, «generaciones» o «historia») aparece diez veces en Génesis y marca cada parte del libro. Aquí da paso a un segundo relato de la creación, que no repite el primero: lo mira de cerca.',
        { h: 'Dos miradas, una historia' },
        'Algunos han dicho que Génesis 1 y 2 son dos relatos contradictorios. Una lectura atenta muestra que se complementan, como explica la tabla. El primero es una vista panorámica: todo el universo, día por día, con Dios que habla y las cosas existen. El segundo es un acercamiento: el huerto, el hombre, la mujer, y un Dios que se inclina a formar con sus manos. Por eso cambia también el nombre: en el capítulo 2 aparece por primera vez Jehová Dios, el nombre del Dios que hace pacto con su pueblo.',
        { h: 'Polvo y aliento' },
        '«Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente» (Gn 2:7). El verbo «formó» es el que se usa para el alfarero que modela el barro (Jer 18:6). En hebreo hay un juego de palabras: el hombre es adam y la tierra de la que fue tomado es adamá. Su nombre le recuerda de dónde viene.',
        'Pero el ser humano no es solo polvo. Dios sopla en él su aliento, y entonces llega a ser un ser viviente. Ningún animal recibe ese soplo directo en el relato. Elihú lo reconoce: «El espíritu de Dios me hizo, Y el soplo del Omnipotente me dio vida» (Job 33:4). El ser humano está hecho de tierra y de cielo: tiene un cuerpo que vuelve al polvo y un espíritu que vuelve a Dios (Ec 12:7).',
        { h: 'El primer Adán y el postrer Adán' },
        'Pablo cita este versículo y lo pone frente a Cristo: «Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante» (1 Co 15:45). El primer Adán recibió la vida; Cristo, el último Adán, la da. Y así como hemos traído la imagen del terrenal, traeremos también la imagen del celestial (1 Co 15:49): la resurrección completará lo que comenzó en el Edén.',
        { ejercicio: {
          pregunta: '¿Qué enseña el juego de palabras entre adam (hombre) y adamá (tierra)?',
          opciones: [
            { t: 'Que el ser humano fue tomado de la tierra y está unido a ella, aunque recibió de Dios el aliento de vida.', ok: true, por_que: 'Correcto: su nombre recuerda su origen humilde, y el soplo de Dios, su dignidad.' },
            { t: 'Que el ser humano es solo materia, igual que los animales.', ok: false, por_que: 'El versículo dice además que Dios sopló en él aliento de vida, algo que no se dice de los animales.' },
            { t: 'Que Adán fue el nombre de un pueblo, no de una persona.', ok: false, por_que: 'Adam puede significar «ser humano», pero Génesis 4 y 5, Lucas 3:38 y Romanos 5 hablan de Adán como una persona concreta.' }
          ],
          explicacion: 'Polvo y aliento: humildad y dignidad a la vez. Así es el ser humano según Génesis.'
        } }
      ],
      pensar: 'Eres polvo, pero Dios sopló en ti su aliento. ¿Cuál de las dos verdades olvidas más: tu fragilidad o tu dignidad?'
    },
    {
      id: 'huerto', n: 'El huerto de Edén', ref: 'Génesis 2:8-14; Ezequiel 28:13; Apocalipsis 2:7; 22:1-2',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-eden.webp', alt: 'Un huerto exuberante al amanecer, con árboles frutales, flores y hierba alta; un río cristalino atraviesa el huerto y más allá se divide en cuatro brazos que se pierden en la distancia; en el centro, un gran árbol iluminado; no hay personas', pie: '«Y salía de Edén un río para regar el huerto, y de allí se repartía en cuatro brazos» (Génesis 2:10).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Génesis nombra cuatro ríos: el Pisón, el Gihón, el Hidekel (el Tigris, «al oriente de Asiria») y el Éufrates. Solo los dos últimos se identifican con seguridad.',
            estado: { view: MESOP, capas: [], lugares: ['ninive', 'asur', 'babilonia', 'ur'] } },
          { t: 'Hipótesis del sur: el Edén estaría cerca de la desembocadura del Tigris y el Éufrates, en el golfo Pérsico, donde estaba Eridu, la ciudad que los sumerios consideraban la más antigua.',
            estado: { view: MESOP, capas: [], lugares: ['r-eden-sur', 'eridu', 'ur', 'babilonia'] } },
          { t: 'Hipótesis del norte: el Edén estaría en las montañas de Armenia, donde nacen el Tigris y el Éufrates, cerca del lago Van.',
            estado: { view: MESOP, capas: [], lugares: ['r-eden-norte', 'monte-ararat', 'ninive'] } }
        ] }
      ],
      texto: [
        '«Y Jehová Dios plantó un huerto en Edén, al oriente; y puso allí al hombre que había formado» (Gn 2:8). Edén probablemente significa «delicia», y la traducción griega del Antiguo Testamento llamó al huerto paradeisos, de donde viene nuestra palabra «paraíso». Dios no puso al hombre en un desierto, sino en un lugar preparado con belleza y abundancia: árboles deliciosos a la vista y buenos para comer.',
        { h: 'Dos árboles en el centro' },
        'En medio del huerto había dos árboles especiales: «el árbol de vida» y «el árbol de la ciencia del bien y del mal» (Gn 2:9). El primero representaba la vida que Dios daba. El segundo, el límite que Dios ponía: el ser humano podía disfrutar de todo, pero no decidir por sí mismo qué es bueno y qué es malo. El árbol de vida vuelve a aparecer al final de la Biblia, en la ciudad de Dios, con sus hojas «para la sanidad de las naciones» (Ap 22:2). Lo que se perdió en el Edén será restaurado.',
        { h: '¿Dónde estaba el Edén?' },
        'Génesis da una descripción geográfica: un río salía de Edén y se dividía en cuatro brazos (Gn 2:10-14). El Hidekel es el Tigris y el cuarto es el Éufrates, dos ríos bien conocidos. El Pisón rodeaba la tierra de Havila, donde había oro, y el Gihón, la tierra de Cus. Esos dos no se han identificado con seguridad. El mapa muestra las dos hipótesis más comunes.',
        { posturas: {
          titulo: '¿Se puede ubicar hoy el Edén?',
          a: { n: 'En algún lugar de Mesopotamia o de Armenia', t: 'El texto menciona el Tigris y el Éufrates porque quiere que el lector sepa que el Edén fue un lugar real. Algunos lo ubican al sur, cerca del golfo Pérsico, y otros al norte, donde nacen los ríos. El Pisón y el Gihón podrían ser ríos hoy secos o desaparecidos.' },
          b: { n: 'Ya no se puede ubicar', t: 'Otros piensan que el diluvio cambió la geografía de la tierra, de modo que los ríos que hoy llevan esos nombres no siguen el mismo curso que en el principio. Los que vinieron después pudieron dar a los nuevos ríos los nombres de los antiguos.' },
          c: 'Las dos lecturas coinciden en que el Edén fue un lugar real, no un símbolo. Su ubicación exacta es incierta, y el mapa la muestra como hipótesis.'
        } },
        'Ezequiel llama al Edén «el huerto de Dios» (Ez 28:13). Era el lugar donde Dios se encontraba con el ser humano, como después lo sería el tabernáculo. Por eso muchos intérpretes ven en el Edén el primer santuario de la Biblia: allí había querubines (Gn 3:24), oro y piedras preciosas, y un acceso por el oriente, como en el tabernáculo y el templo.'
      ],
      pensar: 'El árbol de vida que se perdió en el Edén espera a los vencedores en el paraíso de Dios (Ap 2:7). ¿Cómo cambia tu manera de enfrentar las pérdidas saber que Dios restaurará lo que el pecado quitó?'
    },
    {
      id: 'trabajo', n: 'Para que lo labrara y lo guardase', ref: 'Génesis 2:15-17; 1:28; Colosenses 3:23-24; Efesios 4:28',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase. Y mandó Jehová Dios al hombre, diciendo: De todo árbol del huerto podrás comer; mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás.', ref: 'Génesis 2:15-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Dios dio al ser humano en el Edén',
          cab: ['Don', 'Texto', 'Lo que enseña'],
          filas: [
            ['Un lugar', 'Gn 2:8', 'Dios provee un hogar'],
            ['Un trabajo', 'Gn 2:15', 'El trabajo es bueno, anterior al pecado'],
            ['Una libertad', 'Gn 2:16', '«De todo árbol del huerto podrás comer»'],
            ['Un límite', 'Gn 2:17', 'La obediencia es parte de la relación con Dios'],
            ['Una compañía', 'Gn 2:18-22', 'El ser humano no fue hecho para estar solo'],
            ['Una tarea mayor', 'Gn 1:28', 'Llenar la tierra y gobernarla para Dios'],
          ],
          nota: 'Los teólogos llaman mandato cultural a la tarea de Génesis 1:28 y 2:15.'
        } }
      ],
      texto: [
        '«Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase» (Gn 2:15). Antes del pecado, antes de las espinas y los cardos, el ser humano ya tenía trabajo. El trabajo no es un castigo: es parte del diseño bueno de Dios.',
        { h: 'Labrar y guardar' },
        'Los dos verbos son significativos. «Labrar» (avad) es trabajar la tierra, cultivarla, servirla. «Guardar» (shamar) es cuidar, proteger, vigilar. Los mismos dos verbos se usan juntos después para el servicio de los levitas en el tabernáculo (Nm 3:7-8). El trabajo de Adán era a la vez cultivo y culto: al cuidar el huerto, servía a Dios.',
        'Lo que cambió con la caída no fue la existencia del trabajo, sino su carácter. Después del pecado, la tierra produce espinos y el trabajo se vuelve fatiga: «Con el sudor de tu rostro comerás el pan» (Gn 3:19). Pero el trabajo en sí sigue siendo una manera de honrar a Dios. Pablo escribe: «todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres» (Col 3:23).',
        { h: 'Una gran libertad y un pequeño límite' },
        'El mandato de Dios comienza con una libertad enorme: «De todo árbol del huerto podrás comer» (Gn 2:16). Solo un árbol estaba prohibido. Dios no es un tirano que niega placeres, sino un Padre generoso que pone un límite por amor. La advertencia era seria: «el día que de él comieres, ciertamente morirás» (Gn 2:17). Ese límite hacía posible que la relación con Dios fuera de confianza y obediencia libre, no de programación.',
        { h: 'Mayordomos de la tierra' },
        'En Génesis 1:28 Dios ordena llenar la tierra, sojuzgarla y señorear sobre los animales. No es permiso para explotarla, sino encargo para administrarla como lo haría su dueño. «De Jehová es la tierra y su plenitud» (Sal 24:1). Cultivar, construir, criar hijos, crear arte, investigar la naturaleza y cuidar el medio ambiente son formas de cumplir ese encargo. La ruta VIII vuelve sobre el cuidado de la creación.',
        { ir: { t: 'Ver «En el Edén» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/1' } }
      ],
      pensar: 'Adán labraba el huerto como un servicio a Dios. ¿Ves tu trabajo diario, sea cual sea, como una manera de servir al Señor?'
    },
    {
      id: 'mujer', n: 'Ayuda idónea: la creación de la mujer', ref: 'Génesis 2:18-23; Salmos 33:20; 1 Corintios 11:11-12; 1 Pedro 3:7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y dijo Jehová Dios: No es bueno que el hombre esté solo; le haré ayuda idónea para él. Jehová Dios formó, pues, de la tierra toda bestia del campo, y toda ave de los cielos, y las trajo a Adán para que viese cómo las había de llamar; y todo lo que Adán llamó a los animales vivientes, ese es su nombre. Y puso Adán nombre a toda bestia y ave de los cielos y a todo ganado del campo; mas para Adán no se halló ayuda idónea para él. Entonces Jehová Dios hizo caer sueño profundo sobre Adán, y mientras éste dormía, tomó una de sus costillas, y cerró la carne en su lugar. Y de la costilla que Jehová Dios tomó del hombre, hizo una mujer, y la trajo al hombre. Dijo entonces Adán: Esto es ahora hueso de mis huesos y carne de mi carne; ésta será llamada Varona, porque del varón fue tomada.', ref: 'Génesis 2:18-23' }
      ],
      texto: [
        'Siete veces Génesis 1 dice que algo era bueno. En Génesis 2, por primera vez, Dios dice que algo no lo es: «No es bueno que el hombre esté solo; le haré ayuda idónea para él» (Gn 2:18). Adán vive en un huerto perfecto, en comunión con Dios, y aun así le falta algo. El ser humano fue creado para la relación con otros como él.',
        { h: 'Adán nombra a los animales' },
        'Antes de crear a la mujer, Dios trae los animales a Adán «para que viese cómo las había de llamar» (Gn 2:19). Dar nombre era una forma de ejercer el dominio que Dios le había encargado, y también de conocer y clasificar. Adán fue el primer científico: observó, distinguió y nombró. Pero el ejercicio tenía otro propósito: «mas para Adán no se halló ayuda idónea para él» (Gn 2:20). Al ver a cada animal, Adán descubre que ninguno es como él.',
        { h: '«Ayuda idónea»' },
        'La expresión hebrea es ézer kenegdó, que significa literalmente «una ayuda como frente a él», es decir, que le corresponde, a su altura. La palabra ézer no indica inferioridad. En el Antiguo Testamento se usa sobre todo para Dios mismo: «Nuestra ayuda y nuestro escudo es él» (Sal 33:20). La mujer no es una sirvienta ni un complemento menor, sino una compañera igual en dignidad, que comparte con el hombre la imagen de Dios y la tarea de gobernar la tierra.',
        { h: 'Hueso de mis huesos' },
        'Dios hace caer sobre Adán un sueño profundo, toma una de sus costillas y forma a la mujer. La palabra traducida «costilla» también puede significar «lado». Muchos predicadores han observado que Dios no la tomó de la cabeza para que dominara al hombre, ni de los pies para que él la pisara, sino de su costado, para que fuera su igual, cerca de su corazón. Cuando Adán la ve, exclama con alegría: «Esto es ahora hueso de mis huesos y carne de mi carne» (Gn 2:23). Por fin hay alguien como él.',
        'En hebreo hay otro juego de palabras: el varón es ish y la mujer, ishá. La RV 1960 lo conserva: «ésta será llamada Varona, porque del varón fue tomada» (Gn 2:23). Pablo enseña que hay un orden en la creación (1 Co 11:8-9), pero agrega enseguida que «en el Señor, ni el varón es sin la mujer, ni la mujer sin el varón» (1 Co 11:11). Pedro llama a las esposas «coherederas de la gracia de la vida» (1 P 3:7).',
        { ejercicio: {
          pregunta: '¿Qué indica la palabra hebrea ézer, traducida «ayuda», sobre la mujer?',
          opciones: [
            { t: 'Que la mujer es una compañera que corresponde al hombre, pues la misma palabra se usa para Dios como ayuda de su pueblo.', ok: true, por_que: 'Correcto: ézer no implica inferioridad; Dios mismo es llamado ézer de Israel.' },
            { t: 'Que la mujer fue creada para servir al hombre como una sirvienta.', ok: false, por_que: 'Si ézer significara inferioridad, no podría usarse para Dios. La mujer comparte la imagen de Dios por igual (Gn 1:27).' },
            { t: 'Que la mujer fue una idea posterior, porque Dios se olvidó de crearla.', ok: false, por_que: 'El relato muestra un propósito: Dios hace que Adán sienta su soledad para que reciba a la mujer como un regalo.' }
          ],
          explicacion: 'Hombre y mujer son iguales en dignidad y distintos en su creación; los dos llevan la imagen de Dios.'
        } }
      ],
      pensar: '«No es bueno que el hombre esté solo.» ¿A quién necesitas acercarte, o a quién necesitas acompañar, para vivir el diseño de Dios para las relaciones?'
    },
    {
      id: 'matrimonio', n: 'Una sola carne', ref: 'Génesis 2:24-25; Mateo 19:3-9; Efesios 5:25-33; Hebreos 13:4',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne. Y estaban ambos desnudos, Adán y su mujer, y no se avergonzaban.', ref: 'Génesis 2:24-25' },
        { tipo: 'cita', titulo: 'Mateo 19', texto: 'El, respondiendo, les dijo: ¿No habéis leído que el que los hizo al principio, varón y hembra los hizo, y dijo: Por esto el hombre dejará padre y madre, y se unirá a su mujer, y los dos serán una sola carne? Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.', ref: 'Mateo 19:4-6' }
      ],
      texto: [
        'El relato de la creación de la mujer termina con un comentario del narrador que se convierte en la definición bíblica del matrimonio: «Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne» (Gn 2:24). Este versículo se cita cuatro veces en el Nuevo Testamento. Es uno de los fundamentos de la ética cristiana.',
        { h: 'Tres movimientos' },
        'El versículo describe tres pasos. Primero, dejar: el hombre deja a su padre y a su madre. El matrimonio crea una familia nueva, con una lealtad que está por encima de la familia de origen. Segundo, unirse: el verbo hebreo significa pegarse, adherirse con firmeza, y se usa también para la fidelidad a Dios (Dt 10:20). Es un pacto, no un arreglo temporal. Tercero, ser una sola carne: la unión completa de dos personas, en cuerpo, vida y propósito, que incluye la intimidad sexual dentro del pacto.',
        { h: 'Lo que Jesús enseñó desde el principio' },
        'Cuando los fariseos preguntaron a Jesús sobre el divorcio, Él no comenzó con la ley de Moisés, sino con la creación: «¿No habéis leído que el que los hizo al principio, varón y hembra los hizo…?» (Mt 19:4). Unió Génesis 1:27 y 2:24 y concluyó: «lo que Dios juntó, no lo separe el hombre» (Mt 19:6). Para Jesús, el diseño de la creación es la norma: un hombre y una mujer, unidos de por vida. Moisés lo permitió por la dureza del corazón, «mas al principio no fue así» (Mt 19:8).',
        { h: 'Un misterio mayor' },
        'Pablo cita Génesis 2:24 y agrega: «Grande es este misterio; mas yo digo esto respecto de Cristo y de la iglesia» (Ef 5:32). Desde el principio, el matrimonio fue pensado como una imagen del amor de Cristo por su pueblo. Por eso el esposo debe amar a su esposa como Cristo amó a la iglesia y se entregó por ella (Ef 5:25).',
        { h: 'Desnudos sin vergüenza' },
        'El capítulo termina diciendo que «estaban ambos desnudos, Adán y su mujer, y no se avergonzaban» (Gn 2:25). Antes del pecado no había nada que esconder, ni ante Dios ni el uno ante el otro: confianza total, inocencia total. El capítulo siguiente cuenta cómo esa inocencia se perdió, y el primer efecto del pecado será precisamente la vergüenza y el deseo de cubrirse (Gn 3:7).',
        { ejercicio: {
          pregunta: 'Cuando le preguntaron sobre el divorcio, ¿a qué texto acudió Jesús primero?',
          opciones: [
            { t: 'Al relato de la creación en Génesis 1 y 2, para mostrar el diseño original de Dios.', ok: true, por_que: 'Correcto: Jesús dijo «al principio no fue así» y basó su enseñanza en Génesis 1:27 y 2:24.' },
            { t: 'A la ley del divorcio en Deuteronomio 24, para explicar cuándo es permitido.', ok: false, por_que: 'Fueron los fariseos quienes citaron a Moisés. Jesús explicó que esa ley se dio por la dureza del corazón.' },
            { t: 'A la costumbre de su tiempo, para adaptarse a la cultura.', ok: false, por_que: 'Jesús fue más allá de la cultura de su tiempo y volvió al propósito del Creador.' }
          ],
          explicacion: 'Para entender el matrimonio, Jesús nos lleva al Edén: allí está el diseño de Dios.'
        } }
      ],
      pensar: 'El matrimonio es una imagen del amor de Cristo por su iglesia. Si eres casado, ¿qué refleja tu matrimonio de ese amor? Si no lo eres, ¿cómo puedes honrar el diseño de Dios en tus relaciones?'
    },
    {
      id: 'caida', n: 'Del huerto al destierro', ref: 'Génesis 3:1-24; Romanos 5:12; 8:20; Apocalipsis 12:9',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../pactos-y-dispensaciones/img/eden-salida.webp', alt: 'Adán y Eva, vestidos con túnicas de piel, caminan con la cabeza baja fuera del huerto de Edén, mientras detrás de ellos una luz como espada encendida guarda la entrada entre los árboles', pie: '«Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió» (Génesis 3:21).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.', ref: 'Génesis 3:15' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que cambió con el pecado',
          cab: ['Antes', 'Después', 'Texto'],
          filas: [
            ['Comunión con Dios', 'Miedo y escondite', 'Gn 3:8-10'],
            ['Desnudos sin vergüenza', 'Vergüenza y acusación mutua', 'Gn 3:7, 12'],
            ['Trabajo como servicio', 'Fatiga, espinos y cardos', 'Gn 3:17-19'],
            ['Árbol de vida al alcance', 'Expulsión del huerto', 'Gn 3:22-24'],
            ['Vida', 'Muerte: «al polvo volverás»', 'Gn 3:19; Ro 5:12'],
          ],
          nota: 'En medio del juicio, Dios promete un descendiente de la mujer que vencerá a la serpiente (Gn 3:15).'
        } }
      ],
      texto: [
        'Génesis 3 cuenta cómo el mundo bueno que Dios creó se quebró. Este recurso solo lo resume, porque la caída, la naturaleza del pecado y sus consecuencias tienen su propio estudio en El ser humano y el pecado, en preparación. Pero sin este capítulo no se entiende el resto de Génesis 1 a 11.',
        { h: 'La serpiente y la duda' },
        'La serpiente, que Apocalipsis identifica con la serpiente antigua, que «se llama diablo y Satanás» (Ap 12:9), comienza con una pregunta: «¿Conque Dios os ha dicho…?» (Gn 3:1). Primero siembra la duda sobre la palabra de Dios, después la niega («No moriréis») y por último calumnia el carácter de Dios: Él no quiere que ustedes sean como Él. Eva come del fruto y da a su marido, que estaba con ella. Los dos desobedecen.',
        { h: 'Las consecuencias' },
        'La tabla muestra lo que cambió. La comunión se convirtió en miedo, la inocencia en vergüenza, el trabajo en fatiga, y la vida en muerte. La creación entera fue afectada: «maldita será la tierra por tu causa» (Gn 3:17). Pablo resume: «el pecado entró en el mundo por un hombre, y por el pecado la muerte» (Ro 5:12). Las rutas V a VII mostrarán cómo el pecado se extiende: un hermano mata a otro, la violencia llena la tierra, y la humanidad se une contra Dios en Babel.',
        { h: 'Gracia en medio del juicio' },
        'Pero Dios no abandonó a su creación. Antes de pronunciar las consecuencias, promete a la serpiente que la simiente de la mujer «te herirá en la cabeza, y tú le herirás en el calcañar» (Gn 3:15). Es el primer anuncio del evangelio, que los antiguos llamaron protoevangelio: un descendiente de Eva vencería al enemigo, aunque sufriendo. Dios mismo vistió a Adán y Eva con túnicas de pieles (Gn 3:21), lo que implica la muerte de un animal para cubrir su vergüenza, una sombra de los sacrificios que vendrían.',
        'La expulsión del huerto también fue una misericordia: Dios no quiso que vivieran para siempre en su estado de pecado (Gn 3:22). El camino al árbol de vida quedó guardado por querubines, hasta que Cristo, el postrer Adán, lo abriera de nuevo.',
        { ir: { t: 'Ver «Inocencia y conciencia» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#dispensaciones/3' } }
      ],
      pensar: 'La serpiente comenzó con una duda: «¿Conque Dios os ha dicho…?». ¿Qué palabra de Dios estás tentado a poner en duda hoy?'
    }
  ];

  /* ---------------- V. De Caín a Noé ---------------- */
  const cain = [
    {
      id: 'cain-abel', n: 'Caín y Abel', ref: 'Génesis 4:1-16; Hebreos 11:4; 12:24; 1 Juan 3:11-12; Mateo 23:35',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-cain-abel.webp', alt: 'Dos hermanos en un campo al atardecer ante dos altares de piedra: el pastor, a la izquierda, ofrece un cordero y el humo de su altar sube recto; el labrador, a la derecha, con frutos de la tierra, mira de reojo a su hermano con el rostro sombrío', pie: '«Y miró Jehová con agrado a Abel y a su ofrenda; pero no miró con agrado a Caín y a la ofrenda suya» (Génesis 4:4-5).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y aconteció andando el tiempo, que Caín trajo del fruto de la tierra una ofrenda a Jehová. Y Abel trajo también de los primogénitos de sus ovejas, de lo más gordo de ellas. Y miró Jehová con agrado a Abel y a su ofrenda; pero no miró con agrado a Caín y a la ofrenda suya. Y se ensañó Caín en gran manera, y decayó su semblante. Entonces Jehová dijo a Caín: ¿Por qué te has ensañado, y por qué ha decaído tu semblante? Si bien hicieres, ¿no serás enaltecido? y si no hicieres bien, el pecado está a la puerta; con todo esto, a ti será su deseo, y tú te enseñorearás de él. Y dijo Caín a su hermano Abel: Salgamos al campo. Y aconteció que estando ellos en el campo, Caín se levantó contra su hermano Abel, y lo mató. Y Jehová dijo a Caín: ¿Dónde está Abel tu hermano? Y él respondió: No sé. ¿Soy yo acaso guarda de mi hermano? Y él le dijo: ¿Qué has hecho? La voz de la sangre de tu hermano clama a mí desde la tierra.', ref: 'Génesis 4:3-10' }
      ],
      texto: [
        'Fuera del Edén, la vida continúa. Eva da a luz a Caín, cuyo nombre suena como «he adquirido», y después a Abel, que significa «soplo» o «vapor», como anticipando lo breve de su vida. Abel fue pastor de ovejas y Caín, labrador de la tierra (Gn 4:2). Las dos ocupaciones eran buenas, y continuaban el trabajo que Dios había encargado.',
        { h: 'Dos ofrendas' },
        'Los dos hermanos traen una ofrenda a Jehová. Caín trae del fruto de la tierra; Abel, «de los primogénitos de sus ovejas, de lo más gordo de ellas» (Gn 4:4). Dios mira con agrado a Abel y a su ofrenda, pero no a Caín. ¿Por qué? El texto no lo explica directamente, y los intérpretes señalan varias pistas. Abel trajo lo primero y lo mejor; de Caín solo se dice que trajo «del fruto». Hebreos agrega la clave: «Por la fe Abel ofreció a Dios más excelente sacrificio que Caín» (He 11:4). Y Juan explica que las obras de Caín eran malas y las de su hermano justas (1 Jn 3:12). Dios mira primero a la persona y después a la ofrenda: el problema de Caín estaba en su corazón.',
        { h: 'El pecado a la puerta' },
        'Dios no rechaza a Caín sin más: le habla, le advierte y lo invita a cambiar. «Si bien hicieres, ¿no serás enaltecido? y si no hicieres bien, el pecado está a la puerta; con todo esto, a ti será su deseo, y tú te enseñorearás de él» (Gn 4:7). El pecado aparece como una fiera agazapada que quiere dominarlo. Caín no escucha. Lleva a su hermano al campo y lo mata.',
        { h: '¿Soy yo acaso guarda de mi hermano?' },
        'Como con Adán, Dios pregunta: «¿Dónde está Abel tu hermano?». Caín responde con una mentira y una burla: «No sé. ¿Soy yo acaso guarda de mi hermano?» (Gn 4:9). Pero la sangre de Abel clama desde la tierra. Caín es condenado a vagar, y aun así Dios le pone una señal para protegerlo: incluso al asesino lo alcanza la misericordia.',
        'Jesús llamó a Abel «el justo», el primer mártir de la historia (Mt 23:35). Y Hebreos dice que la sangre de Jesús «habla mejor que la de Abel» (He 12:24): la sangre de Abel clamaba por justicia; la de Cristo clama por perdón.'
      ],
      pensar: '«El pecado está a la puerta… y tú te enseñorearás de él.» ¿Qué enojo o envidia está agazapado a la puerta de tu corazón, y qué te dice Dios hoy para que lo domines?'
    },
    {
      id: 'linajes', n: 'Dos linajes: Caín y Set', ref: 'Génesis 4:16-26; 5:1-3',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-linajes.svg', alt: 'Dos columnas que descienden de Adán: a la izquierda, el linaje de Caín hasta Lamec y sus hijos Jabal, Jubal, Tubal-caín y Naama, con la ciudad, la música, el metal y la violencia; a la derecha, el linaje de Set hasta Noé, con la invocación del nombre de Jehová y Enoc que caminó con Dios', pie: 'Dos líneas desde Adán: una construye una cultura sin Dios; la otra invoca su nombre.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Lamec tomó para sí dos mujeres; el nombre de la una fue Ada, y el nombre de la otra, Zila. Y Ada dio a luz a Jabal, el cual fue padre de los que habitan en tiendas y crían ganados. Y el nombre de su hermano fue Jubal, el cual fue padre de todos los que tocan arpa y flauta. Y Zila también dio a luz a Tubal-caín, artífice de toda obra de bronce y de hierro; y la hermana de Tubal-caín fue Naama. Y dijo Lamec a sus mujeres: Ada y Zila, oíd mi voz; Mujeres de Lamec, escuchad mi dicho: Que un varón mataré por mi herida, Y un joven por mi golpe. Si siete veces será vengado Caín, Lamec en verdad setenta veces siete lo será. Y conoció de nuevo Adán a su mujer, la cual dio a luz un hijo, y llamó su nombre Set: Porque Dios (dijo ella) me ha sustituido otro hijo en lugar de Abel, a quien mató Caín. Y a Set también le nació un hijo, y llamó su nombre Enós. Entonces los hombres comenzaron a invocar el nombre de Jehová.', ref: 'Génesis 4:19-26' }
      ],
      texto: [
        'Después del asesinato de Abel, Génesis sigue dos líneas de descendientes de Adán. El esquema las pone una al lado de la otra. Una es la de Caín, que se aleja de la presencia de Dios. La otra es la de Set, el hijo que Dios dio a Eva «en lugar de Abel» (Gn 4:25).',
        { h: 'La línea de Caín: progreso sin Dios' },
        'Caín se establece en la tierra de Nod, al oriente de Edén, y edifica una ciudad (Gn 4:16-17). Entre sus descendientes aparecen los inventores de la cultura: Jabal, padre de los ganaderos nómadas; Jubal, padre de los músicos de arpa y flauta; y Tubal-caín, artífice del bronce y el hierro (Gn 4:20-22). Génesis no condena la ganadería, la música ni la metalurgia: son parte del encargo de Dios de llenar y administrar la tierra, y más tarde se usarán para su gloria. Pero en la línea de Caín ese progreso va acompañado de violencia y orgullo.',
        'Lamec, el séptimo desde Adán por esa línea, es el primer bígamo de la Biblia y compone un canto de venganza: si Caín sería vengado siete veces, Lamec lo sería «setenta veces siete» (Gn 4:24). Siglos después, Jesús usará la misma cifra al revés: perdonar «setenta veces siete» (Mt 18:22). El evangelio invierte la lógica de Lamec.',
        { h: 'La línea de Set: los que invocan' },
        'La otra línea comienza de manera sencilla. Set tiene un hijo, Enós, «Entonces los hombres comenzaron a invocar el nombre de Jehová» (Gn 4:26). Mientras una familia construye ciudades y armas, otra ora. Por esa línea, que continúa en Génesis 5, llegará Noé, después Abraham, David y, finalmente, Jesús (Lc 3:23-38).',
        { h: 'Dos maneras de vivir' },
        'Agustín de Hipona vio en estas dos líneas el comienzo de lo que llamó las dos ciudades: la ciudad de los hombres, que se ama a sí misma hasta despreciar a Dios, y la ciudad de Dios, que ama a Dios hasta despreciarse a sí misma. Las dos conviven en la historia y comparten la misma tierra, los mismos inventos y la misma cultura. La diferencia está en a quién sirven. El creyente no rechaza la cultura, sino que la pone al servicio de Dios.',
        { ejercicio: {
          pregunta: '¿Qué enseña Génesis 4 sobre la música, la ganadería y el trabajo con metales, que aparecen en la línea de Caín?',
          opciones: [
            { t: 'Que son buenos dones de la creación, aunque en esa línea se desarrollaron lejos de Dios.', ok: true, por_que: 'Correcto: el problema no son los inventos, sino el corazón que los usa. David usará el arpa para alabar a Dios.' },
            { t: 'Que son malos en sí mismos, porque vienen de los descendientes de Caín.', ok: false, por_que: 'La Biblia usa la música y el metal en el culto: el tabernáculo tenía bronce y Levítico ordena tocar trompetas. Nada de eso es malo en sí.' },
            { t: 'Que los descendientes de Set no podían usar ninguno de esos inventos.', ok: false, por_que: 'El texto no lo dice. Noé, de la línea de Set, construyó un arca con gran habilidad técnica.' }
          ],
          explicacion: 'La cultura es parte del encargo de Dios; lo que la hace santa o profana es a quién sirve.'
        } }
      ],
      pensar: 'Una línea construyó ciudades; la otra invocó el nombre de Jehová. ¿En qué estás invirtiendo más tiempo: en construir tu propio nombre o en invocar el de Dios?'
    },
    {
      id: 'genealogias', n: 'Las genealogías y los años de vida', ref: 'Génesis 5:1-32; 11:10-26; 6:3; Salmos 90:10; Lucas 3:34-38',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-longevidad.svg', alt: 'Gráfico de barras con los años de vida de los patriarcas: de Adán (930) y Matusalén (969) antes del diluvio, a Sem (600), Arfaxad (438), Peleg (239), Taré (205) y Abraham (175) después; las barras bajan con claridad después del diluvio', pie: 'Los años de vida según la RV 1960 (texto hebreo). Después del diluvio, las edades bajan de manera constante.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Génesis 5: de Adán a Noé',
          cab: ['Nombre', 'Edad al engendrar', 'Años de vida'],
          filas: [
            ['Adán', '130', '930'], ['Set', '105', '912'], ['Enós', '90', '905'], ['Cainán', '70', '910'],
            ['Mahalaleel', '65', '895'], ['Jared', '162', '962'], ['Enoc', '65', '365 (traspuesto)'],
            ['Matusalén', '187', '969'], ['Lamec', '182', '777'], ['Noé', '500', '950'],
          ],
          nota: 'Diez generaciones de Adán a Noé, y diez de Sem a Abraham (Gn 11). La Septuaginta da cifras algo distintas.'
        } }
      ],
      texto: [
        'Génesis 5 es una genealogía: «Este es el libro de las generaciones de Adán» (Gn 5:1). Muchos lectores la saltan, pero tiene un mensaje. Cada entrada sigue el mismo patrón: vivió tantos años, engendró, vivió tantos años más, «y murió». La frase se repite como una campana. La advertencia de Dios en el Edén se cumplió: todos mueren. Solo una vez el ritmo se rompe, con Enoc, que no murió.',
        { h: '¿Vivieron tanto tiempo?' },
        'Las edades llaman la atención: Adán vivió 930 años y Matusalén, 969. Después del diluvio, las edades bajan de manera constante, como muestra el esquema, hasta llegar a los 175 de Abraham y los 120 de Moisés. Siglos después, el Salmo 90 dice que nuestros días son «setenta años, Y si en los más robustos son ochenta años» (Sal 90:10).',
        'Los intérpretes que toman las cifras de manera literal ofrecen varias explicaciones: el ser humano estaba más cerca de la perfección original, el mundo antes del diluvio era distinto, y Dios había anunciado que acortaría la vida humana (Gn 6:3). Otros proponen que las cifras tienen además un sentido simbólico o honorífico, como en algunas listas antiguas. Las listas de reyes de Sumeria, por ejemplo, atribuyen a los reyes anteriores al diluvio reinados de decenas de miles de años, mucho más que Génesis. Frente a ellas, las cifras bíblicas son sobrias y siguen un patrón que tiene sentido.',
        { posturas: {
          titulo: '¿Se pueden sumar las genealogías para calcular la edad del mundo?',
          a: { n: 'Genealogías cerradas', t: 'Las listas de Génesis 5 y 11 dan la edad de cada padre cuando engendra al siguiente, algo que no hacen otras genealogías bíblicas. Eso permite sumar las cifras y calcular los años desde Adán hasta Abraham, como hizo Ussher. Es la base de la lectura de la tierra joven.' },
          b: { n: 'Genealogías con huecos', t: 'Otras genealogías bíblicas omiten generaciones: Mateo 1:8 salta tres reyes. La palabra «engendró» puede significar «fue antepasado de». Lucas 3:36 agrega a Cainán entre Arfaxad y Sala, un nombre que no está en el texto hebreo de Génesis 11 sino en la Septuaginta. Por eso algunos piensan que estas listas son selectivas, y que no pretenden dar una cronología completa.' },
          c: 'Las dos posturas aceptan que estas personas existieron y que la historia de Génesis es real. La diferencia está en si las listas son completas. Las cifras de los manuscritos (hebreo, samaritano y griego) también varían, lo que obliga a la prudencia antes de dar una fecha exacta de la creación.'
        } },
        { h: 'Una línea que lleva a Cristo' },
        'Lucas copia esta genealogía al revés, desde Jesús hasta «Adán, hijo de Dios» (Lc 3:38). Para el evangelista, estas listas no son números fríos: son la historia de la promesa de Génesis 3:15, transmitida de generación en generación hasta que nació el descendiente de la mujer.',
        { ir: { t: 'Ver el linaje en el Árbol genealógico', a: '../../arbol-genealogico/' } }
      ],
      pensar: 'Cada nombre de Génesis 5 termina con «y murió». ¿Qué te gustaría que dijera de ti la línea de tu vida, además de cuántos años viviste?'
    },
    {
      id: 'enoc', n: 'Enoc caminó con Dios', ref: 'Génesis 5:21-24; Hebreos 11:5-6; Judas 14-15; 1 Tesalonicenses 4:16-17',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-enoc.webp', alt: 'Un hombre anciano de barba gris camina solo por un sendero en lo alto de una colina al amanecer, apoyado en un bastón, con la mirada hacia la luz que se abre entre las nubes', pie: '«Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios» (Génesis 5:24).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por la fe Enoc fue traspuesto para no ver muerte, y no fue hallado, porque lo traspuso Dios; y antes que fuese traspuesto, tuvo testimonio de haber agradado a Dios. Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan.', ref: 'Hebreos 11:5-6' }
      ],
      texto: [
        'En medio de la genealogía de Génesis 5, donde todos mueren, aparece un hombre distinto. «Y caminó Enoc con Dios, después que engendró a Matusalén, trescientos años» (Gn 5:22). Y su historia no termina con «y murió», sino con un misterio: «Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios» (Gn 5:24).',
        { h: 'Caminar con Dios' },
        'Caminar con alguien supone ir en la misma dirección, al mismo ritmo y en conversación. La expresión describe una relación diaria y constante, no una experiencia aislada. Llama la atención que Enoc no se retiró del mundo para hacerlo: tuvo hijos e hijas, vivió una vida familiar normal, y caminó con Dios durante tres siglos. Es la misma frase que se dirá de Noé (Gn 6:9).',
        'Hebreos explica qué hacía especial a Enoc: «antes que fuese traspuesto, tuvo testimonio de haber agradado a Dios» (He 11:5). Y agrega una frase que se ha vuelto un principio para todo creyente: «sin fe es imposible agradar a Dios» (He 11:6). Enoc creyó que Dios existía y que recompensa a los que lo buscan.',
        { h: 'Un profeta antes del diluvio' },
        'Judas cita una profecía de Enoc, «séptimo desde Adán», que anuncia la venida del Señor con sus santos para juzgar a los impíos (Jud 14-15). Las palabras que cita también aparecen en el libro de 1 Enoc, una obra judía escrita siglos antes de Cristo que no forma parte de la Escritura. Judas toma de ella una profecía verdadera, guiado por el Espíritu, sin aprobar todo el libro, como Pablo citó a poetas griegos (Hch 17:28).',
        { h: 'Llevado antes del juicio' },
        'Enoc vivió en un mundo que se corrompía rápidamente, y fue llevado por Dios antes del diluvio. Noé, en cambio, atravesó el juicio protegido en el arca. Muchos intérpretes ven en los dos una figura de lo que vendrá: así como Enoc fue tomado antes del juicio, la iglesia será arrebatada para estar con el Señor (1 Ts 4:17), y así como Noé y su familia fueron preservados a través de las aguas, Dios preservará a un remanente de Israel durante la tribulación. Es una figura, no una prueba, pero muestra la coherencia de la esperanza bíblica.',
        { ir: { t: 'Ver «1 Enoc y la carta de Judas» en Los libros apócrifos y pseudoepígrafos', a: '../../libros-apocrifos/#pseudo/1' } },
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } }
      ],
      pensar: 'Enoc caminó con Dios mientras criaba hijos y vivía en un mundo corrupto. ¿Qué te impide caminar con Dios en tu vida diaria, y no solo los domingos?'
    },
    {
      id: 'hijos-de-dios', n: '«Los hijos de Dios» y las hijas de los hombres', ref: 'Génesis 6:1-4; Job 1:6; 2 Pedro 2:4-5; Judas 6-7; Mateo 22:30',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Aconteció que cuando comenzaron los hombres a multiplicarse sobre la faz de la tierra, y les nacieron hijas, que viendo los hijos de Dios que las hijas de los hombres eran hermosas, tomaron para sí mujeres, escogiendo entre todas. Y dijo Jehová: No contenderá mi espíritu con el hombre para siempre, porque ciertamente él es carne; mas serán sus días ciento veinte años. Había gigantes en la tierra en aquellos días, y también después que se llegaron los hijos de Dios a las hijas de los hombres, y les engendraron hijos. Estos fueron los valientes que desde la antigüedad fueron varones de renombre.', ref: 'Génesis 6:1-4' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres lecturas de Génesis 6:1-4',
          cab: ['Lectura', '«Los hijos de Dios» son…', 'Apoyos', 'Dificultades'],
          filas: [
            ['Ángeles caídos', 'Ángeles que se unieron con mujeres', 'Job 1:6; 38:7; 2 P 2:4; Jud 6-7; tradición judía antigua', 'Jesús dice que los ángeles no se casan (Mt 22:30)'],
            ['Linaje de Set', 'Los descendientes de Set, que se mezclaron con los de Caín', 'El contexto de los dos linajes (Gn 4–5)', 'El texto no menciona a Set ni a Caín'],
            ['Reyes o poderosos', 'Gobernantes que tomaban las mujeres que querían', 'En el mundo antiguo los reyes se llamaban hijos de los dioses', 'La expresión no se usa así en el resto de la Biblia'],
          ],
          nota: 'Los padres de la iglesia más antiguos siguieron la primera; desde el siglo IV, muchos siguieron la segunda.'
        } }
      ],
      texto: [
        'Génesis 6:1-4 es uno de los pasajes más difíciles de la Biblia. En cuatro versículos habla de «los hijos de Dios» que tomaron mujeres de entre «las hijas de los hombres», de unos «gigantes» (en hebreo, nefilim) y de «los valientes que desde la antigüedad fueron varones de renombre». Después Dios anuncia que limitará la vida humana a ciento veinte años. ¿Qué ocurrió?',
        { h: 'Tres lecturas' },
        'La tabla resume las tres interpretaciones principales. La primera entiende que «los hijos de Dios» eran ángeles caídos que se unieron con mujeres. En el libro de Job, «los hijos de Dios» son seres celestiales que se presentan ante Él (Job 1:6). Pedro y Judas hablan de ángeles que pecaron, que no guardaron su dignidad y abandonaron su propia morada, y que están guardados en prisiones de oscuridad (2 P 2:4; Jud 6), y los mencionan junto al diluvio y a Sodoma. Así lo leyeron muchos intérpretes judíos antiguos y los primeros padres de la iglesia.',
        'La segunda entiende que «los hijos de Dios» eran los descendientes de Set, la línea piadosa, que se casaron con las descendientes de Caín y se corrompieron. Encaja con el contexto de los capítulos 4 y 5. La siguieron Agustín, Lutero, Calvino y muchos evangélicos. La tercera ve en ellos a reyes y poderosos.',
        { posturas: {
          titulo: '¿Ángeles o descendientes de Set?',
          a: { n: 'Ángeles caídos', t: 'La expresión «hijos de Dios» se usa en el Antiguo Testamento para seres celestiales (Job 1:6; 2:1; 38:7). 2 Pedro 2:4-5 y Judas 6-7 hablan de ángeles que pecaron de una manera particular, en relación con el diluvio y con un pecado sexual. Mateo 22:30 dice que los ángeles en el cielo no se casan, pero no que los caídos no pudieran pecar así.' },
          b: { n: 'El linaje de Set', t: 'Los ángeles son espíritus y Jesús dice que no se casan (Mt 22:30). El juicio que sigue cae sobre los seres humanos, no sobre ángeles (Gn 6:3, 5-7). El pasaje continúa la historia de los dos linajes: cuando el pueblo de Dios se mezcla con los que no lo invocan, la corrupción se extiende.' },
          c: 'Las dos lecturas tienen defensores serios y fieles a la Escritura. Las dos coinciden en lo principal: la humanidad cruzó límites que Dios había puesto, la maldad se multiplicó y el juicio se volvió inevitable. Ninguna doctrina importante depende de este pasaje.'
        } },
        { h: 'Ciento veinte años' },
        '«No contenderá mi espíritu con el hombre para siempre… mas serán sus días ciento veinte años» (Gn 6:3). Algunos entienden que Dios limitó la duración de la vida humana; otros, que dio ciento veinte años de plazo antes del diluvio, el tiempo de paciencia en que Noé construyó el arca (1 P 3:20). Las dos lecturas muestran a un Dios paciente que no juzga sin advertir.'
      ],
      pensar: 'Ante un pasaje difícil, es fácil querer una respuesta segura o perder el interés. ¿Cómo puedes estudiar con humildad lo que no entiendes del todo, sin dejar de obedecer lo que sí está claro?'
    },
    {
      id: 'violencia', n: 'La tierra llena de violencia', ref: 'Génesis 6:5-13; Mateo 24:37-39; Lucas 17:26-27; 2 Pedro 2:5',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal. Y se arrepintió Jehová de haber hecho hombre en la tierra, y le dolió en su corazón. Y dijo Jehová: Raeré de sobre la faz de la tierra a los hombres que he creado, desde el hombre hasta la bestia, y hasta el reptil y las aves del cielo; pues me arrepiento de haberlos hecho. Pero Noé halló gracia ante los ojos de Jehová. Estas son las generaciones de Noé: Noé, varón justo, era perfecto en sus generaciones; con Dios caminó Noé.', ref: 'Génesis 6:5-9' },
        { tipo: 'cita', titulo: 'Mateo 24', texto: 'Mas como en los días de Noé, así será la venida del Hijo del Hombre. Porque como en los días antes del diluvio estaban comiendo y bebiendo, casándose y dando en casamiento, hasta el día en que Noé entró en el arca, y no entendieron hasta que vino el diluvio y se los llevó a todos, así será también la venida del Hijo del Hombre.', ref: 'Mateo 24:37-39' }
      ],
      texto: [
        'Génesis 6 describe un mundo que llegó al límite. «Y vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal» (Gn 6:5). Fíjate en las palabras: «todo», «de continuo», «solamente». El pecado que comenzó con un fruto y siguió con un asesinato había llenado la tierra.',
        { h: 'El dolor de Dios' },
        'La reacción de Dios sorprende: «Y se arrepintió Jehová de haber hecho hombre en la tierra, y le dolió en su corazón» (Gn 6:6). Dios no cambia de opinión como un ser humano que se equivocó (Nm 23:19); el lenguaje expresa su dolor real ante el pecado, como un padre que sufre por un hijo rebelde. El juicio que vendrá no es la reacción fría de un juez, sino la decisión dolorosa de un Creador herido.',
        'El texto usa dos veces la palabra «violencia» (Gn 6:11, 13). La corrupción no era solo religiosa o sexual, sino social: los fuertes oprimían a los débiles, y la vida humana había perdido su valor. Lamec había cantado su venganza; ahora toda la tierra vivía como él.',
        { h: 'Pero Noé…' },
        'Entonces aparece una de las frases más luminosas de la Biblia: «Pero Noé halló gracia ante los ojos de Jehová» (Gn 6:8). Es la primera vez que aparece la palabra «gracia» en la Escritura. Noé no se salvó por ser mejor que los demás, sino porque Dios le mostró favor. Y esa gracia produjo fruto: Noé era «varón justo», «perfecto en sus generaciones», y «con Dios caminó Noé» (Gn 6:9), como Enoc. Pedro lo llama «pregonero de justicia» (2 P 2:5): mientras construía el arca, también advertía a su generación.',
        { h: 'Como en los días de Noé' },
        'Jesús usó esta época para describir su segunda venida: «Mas como en los días de Noé, así será la venida del Hijo del Hombre» (Mt 24:37). Lo que describe no es solo la maldad, sino la indiferencia: la gente comía, bebía, se casaba y daba en casamiento, «y no entendieron hasta que vino el diluvio y se los llevó a todos» (Mt 24:39). La vida normal continuaba, sin atender a la advertencia de Dios. La ruta VI estudia el juicio y la salvación del diluvio.',
        { ejercicio: {
          pregunta: 'Según Jesús en Mateo 24, ¿qué caracterizaba a la gente en los días de Noé?',
          opciones: [
            { t: 'Vivían ocupados en la vida diaria sin prestar atención a la advertencia de Dios, hasta que vino el juicio.', ok: true, por_que: 'Correcto: comer, beber y casarse no es malo, pero vivían como si Dios no fuera a intervenir.' },
            { t: 'Estaban todos reunidos en templos paganos adorando ídolos.', ok: false, por_que: 'Jesús no menciona ídolos; destaca que la vida seguía su curso normal sin atender a Dios.' },
            { t: 'Esperaban con temor el diluvio, pero no sabían dónde refugiarse.', ok: false, por_que: 'Al contrario: «no entendieron hasta que vino el diluvio». No esperaban nada.' }
          ],
          explicacion: 'El peligro de los días de Noé, y de los nuestros, es vivir como si el Señor no fuera a venir.'
        } }
      ],
      pensar: 'En los días de Noé, la gente seguía su rutina sin escuchar la advertencia. ¿Hay algo que Dios te ha estado advirtiendo y que has postergado por estar ocupado?'
    }
  ];

  Object.assign(window.__CREACION, { eden, cain });
})();
(() => {
  const MESOP = [[28.6, 37.5], [40.6, 50.5]];        // Mesopotamia y Armenia
  const NACIONES = [[12, 18], [46, 58]];             // el mundo de Génesis 10
  const HECHOS2 = [[22, 10], [44, 60]];              // las naciones de Hechos 2

  /* ---------------- VI. El diluvio ----------------
     Decisión del responsable: el diluvio universal como lectura natural del texto; el diluvio
     local, como postura. */
  const diluvio = [
    {
      id: 'arca', n: 'Hazte un arca', ref: 'Génesis 6:13-22; Hebreos 11:7; 1 Pedro 3:20',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-arca-construccion.webp', alt: 'Noé, anciano de barba blanca, de pie junto al enorme casco de madera del arca en construcción, en una llanura; a lo lejos, trabajadores anónimos suben vigas por andamios y el cielo está despejado', pie: '«Y lo hizo así Noé; hizo conforme a todo lo que Dios le mandó» (Génesis 6:22).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: '../medidas-biblicas/img/esquema-arca.svg', alt: 'Siluetas a la misma escala: el arca de Noé de 133 metros de largo, el templo de Salomón de 27 metros, el tabernáculo de 13 metros, una cancha de fútbol de 105 metros y una persona', pie: 'El arca, dibujada a la misma escala que el templo, el tabernáculo y una cancha de fútbol (codo de 44,5 cm).', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El arca en medidas actuales',
          cab: ['Dato', 'En la Biblia', 'Hoy'],
          filas: [
            ['Largo', '300 codos', 'unos 133,5 m (con el codo largo, unos 156 m)'],
            ['Ancho', '50 codos', 'unos 22 m'],
            ['Alto', '30 codos', 'unos 13 m, como un edificio de cuatro pisos'],
            ['Pisos', 'Tres (Gn 6:16)', 'Superficie total cercana a 9.000 m²'],
            ['Volumen', '—', 'Cerca de 40.000 m³'],
            ['Material', 'Madera de gofer, calafateada con brea', 'Madera resinosa, quizá ciprés; impermeabilizada'],
          ],
          nota: 'Equivalencias del sitio: codo común de 44,5 cm, codo largo de 52 cm.'
        } }
      ],
      texto: [
        'Dios anuncia a Noé el juicio y, en la misma frase, le da el medio de salvación: «Hazte un arca de madera de gofer» (Gn 6:14). El juicio y la gracia llegan juntos. Dios no solo advierte: provee una salida.',
        { h: 'Un barco sin timón' },
        'La palabra hebrea para arca, tevá, se usa solo otra vez en la Biblia: para la canasta de juncos donde fue puesto Moisés niño en el Nilo (Éx 2:3). En los dos casos, una pequeña caja calafateada con brea flota sobre las aguas de la muerte y lleva dentro la esperanza del pueblo de Dios. El arca no tenía velas ni timón: no necesitaba ir a ninguna parte, sino mantenerse a flote. Su rumbo estaba en manos de Dios.',
        { h: 'Las medidas' },
        'Dios da medidas precisas: trescientos codos de largo, cincuenta de ancho y treinta de alto (Gn 6:15). La tabla las convierte con las equivalencias del sitio: unos 133 metros de largo, 22 de ancho y 13 de alto, con tres pisos. Es más larga que una cancha de fútbol. Las proporciones, seis veces más larga que ancha, son parecidas a las de muchos barcos de carga modernos, y le daban estabilidad frente al oleaje. Su volumen, cercano a 40.000 metros cúbicos, equivale a varios cientos de vagones de tren.',
        { h: 'Por la fe' },
        'Hebreos dice que Noé, «cuando fue advertido por Dios acerca de cosas que aún no se veían, con temor preparó el arca en que su casa se salvase» (He 11:7). Noé construyó un barco enorme en tierra seca, por una lluvia que nadie había visto, durante muchos años. Su obediencia fue su predicación: cada viga clavada anunciaba que el juicio vendría. Pedro dice que Dios esperaba con paciencia «mientras se preparaba el arca» (1 P 3:20). Mientras hubo arca en construcción, hubo tiempo para arrepentirse.',
        'El relato insiste: «Y lo hizo así Noé; hizo conforme a todo lo que Dios le mandó» (Gn 6:22). Noé no discutió las medidas ni el material. La fe verdadera se muestra en una obediencia detallada.',
        { ir: { t: 'Ver «El arca, el tabernáculo y el templo en metros» en Pesos, medidas, monedas y horas bíblicas', a: '../../medidas-biblicas/#longitud/3' } }
      ],
      pensar: 'Noé obedeció durante años sin ver la lluvia. ¿Qué te ha pedido Dios que haces sin ver todavía el resultado? ¿Qué te ayuda a perseverar?'
    },
    {
      id: 'entrar', n: 'Y Jehová le cerró la puerta', ref: 'Génesis 7:1-16; Juan 10:9; Mateo 25:10; 2 Pedro 3:9',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo luego Jehová a Noé: Entra tú y toda tu casa en el arca; porque a ti he visto justo delante de mí en esta generación. De todo animal limpio tomarás siete parejas, macho y su hembra; mas de los animales que no son limpios, una pareja, el macho y su hembra. También de las aves de los cielos, siete parejas, macho y hembra, para conservar viva la especie sobre la faz de la tierra. Porque pasados aún siete días, yo haré llover sobre la tierra cuarenta días y cuarenta noches; y raeré de sobre la faz de la tierra a todo ser viviente que hice. E hizo Noé conforme a todo lo que le mandó Jehová.', ref: 'Génesis 7:1-5' },
        { tipo: 'cita', titulo: 'Génesis 7:13-16', texto: 'En este mismo día entraron Noé, y Sem, Cam y Jafet hijos de Noé, la mujer de Noé, y las tres mujeres de sus hijos, con él en el arca; ellos, y todos los animales silvestres según sus especies, y todos los animales domesticados según sus especies, y todo reptil que se arrastra sobre la tierra según su especie, y toda ave según su especie, y todo pájaro de toda especie. Vinieron, pues, con Noé al arca, de dos en dos de toda carne en que había espíritu de vida. Y los que vinieron, macho y hembra de toda carne vinieron, como le había mandado Dios; y Jehová le cerró la puerta.', ref: 'Génesis 7:13-16' }
      ],
      texto: [
        'Cuando el arca estuvo terminada, Dios dijo a Noé: «Entra tú y toda tu casa en el arca; porque a ti he visto justo delante de mí en esta generación» (Gn 7:1). La invitación es personal y familiar. Noé no se salvó solo: entraron con él su esposa, sus tres hijos y sus nueras, ocho personas en total (1 P 3:20).',
        { h: 'De dos en dos, y de siete en siete' },
        'Génesis 6:19 dice que entrarían dos de cada especie, macho y hembra. Génesis 7:2 precisa que de los animales limpios entrarían siete parejas, y de los no limpios, una. No es una contradicción: la primera instrucción es general y la segunda la detalla. Los animales limpios eran necesarios para los sacrificios que Noé ofrecería al salir (Gn 8:20) y para el alimento posterior. La distinción entre limpios e inmundos ya era conocida antes de la ley de Moisés.',
        '¿Cabían todos los animales? Quienes estudian el tema observan que Noé no necesitaba llevar todas las especies actuales, sino representantes de cada «especie» o clase (Gn 6:20), que después se diversificaron. Tampoco tenía que llevar peces ni animales marinos. Muchos animales pudieron entrar jóvenes, más pequeños y fáciles de alimentar. Con cerca de 40.000 metros cúbicos, el arca tenía espacio suficiente. Y el texto dice que los animales «vinieron» a Noé (Gn 7:9, 15): Dios mismo los trajo.',
        { h: 'Siete días de espera' },
        'Dios anunció: «pasados aún siete días, yo haré llover sobre la tierra» (Gn 7:4). Aun después de que el arca estuvo terminada, Dios dio una semana más. Pedro explica que el Señor «es paciente para con nosotros, no queriendo que ninguno perezca» (2 P 3:9). La paciencia de Dios tiene un propósito: dar tiempo para que todos entren.',
        { h: 'La puerta cerrada' },
        'El versículo 16 termina con una frase breve y solemne: «y Jehová le cerró la puerta». No la cerró Noé, sino Dios. Fue un acto de protección para los de adentro y de juicio para los de afuera. Había una sola puerta (Gn 6:16), como hay un solo camino de salvación. Jesús dijo: «Yo soy la puerta; el que por mí entrare, será salvo» (Jn 10:9). Y en la parábola de las diez vírgenes, cuando llegó el esposo, «se cerró la puerta» (Mt 25:10). Hay un día en que la invitación termina.',
        { ejercicio: {
          pregunta: '¿Por qué Génesis 7:2 habla de siete parejas de animales limpios, si Génesis 6:19 decía dos de cada especie?',
          opciones: [
            { t: 'Porque 6:19 da la instrucción general y 7:2 la precisa: hacían falta más animales limpios para los sacrificios y el alimento.', ok: true, por_que: 'Correcto: es una precisión, no una contradicción. Noé ofreció animales limpios al salir del arca (Gn 8:20).' },
            { t: 'Porque son dos relatos distintos que se contradicen.', ok: false, por_que: 'El segundo detalla al primero. La misma manera de escribir se ve en muchos relatos bíblicos: primero el resumen, luego el detalle.' },
            { t: 'Porque Noé desobedeció y llevó más animales de los que Dios dijo.', ok: false, por_que: 'El texto dice que Noé hizo todo conforme a lo que Dios le mandó (Gn 7:5).' }
          ],
          explicacion: 'Leer con atención resuelve muchas aparentes contradicciones: el texto pasa de lo general a lo particular.'
        } }
      ],
      pensar: 'Dios cerró la puerta del arca. Hoy la puerta de la salvación sigue abierta. ¿Hay alguien de tu casa o de tu entorno a quien necesitas invitar a entrar mientras hay tiempo?'
    },
    {
      id: 'aguas-diluvio', n: 'Las aguas sobre la tierra', ref: 'Génesis 7:11-24; 8:1-14; Salmos 29:10',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-diluvio.webp', alt: 'El arca de madera, pequeña frente a un océano gris sin orillas, avanza entre olas altas bajo una lluvia torrencial y un cielo oscuro; no se ve tierra ni montañas', pie: '«Y subieron las aguas y crecieron en gran manera sobre la tierra; y flotaba el arca sobre la superficie de las aguas» (Génesis 7:18).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cronologia-diluvio.svg', alt: 'Línea de tiempo del año del diluvio: 17 del mes 2 comienza la lluvia; 40 días de lluvia; las aguas prevalecen 150 días; 17 del mes 7 el arca reposa en Ararat; 1 del mes 10 se ven las cimas; 40 días después el cuervo y la paloma; 1 del mes 1 del año siguiente la superficie está seca; 27 del mes 2 la tierra está seca y salen del arca', pie: 'El año del diluvio según las fechas de Génesis 7 y 8: Noé estuvo en el arca un año y diez días.', origen: 'esquema' }
      ],
      texto: [
        'Génesis cuenta el diluvio como un diario de navegación, con fechas precisas: «El año seiscientos de la vida de Noé, en el mes segundo, a los diecisiete días del mes, aquel día fueron rotas todas las fuentes del grande abismo, y las cataratas de los cielos fueron abiertas» (Gn 7:11). El narrador quiere que el lector sepa que esto ocurrió en un día concreto de la historia.',
        { h: 'Las aguas de abajo y de arriba' },
        'El diluvio no fue solo una lluvia muy fuerte. Las aguas vinieron de dos lados: de abajo, las «fuentes del grande abismo», y de arriba, las «cataratas de los cielos». Es como si Dios deshiciera la separación de las aguas que había hecho en el segundo y el tercer día de la creación (Gn 1:6-10). La tierra vuelve a quedar cubierta por el abismo, como al principio. El diluvio es una des-creación, y lo que viene después será una nueva creación.',
        { h: 'Un año en el arca' },
        'El esquema reúne las fechas del relato. Llovió cuarenta días y cuarenta noches. Las aguas prevalecieron sobre la tierra ciento cincuenta días. El arca reposó sobre los montes de Ararat en el mes séptimo. En el mes décimo se vieron las cimas de los montes. Noé esperó, envió un cuervo y luego una paloma tres veces. Recién el día veintisiete del mes segundo del año siguiente la tierra estuvo seca, y Dios mandó salir. En total, Noé y su familia estuvieron en el arca un año y diez días.',
        'El texto dice que «todos los montes altos que había debajo de todos los cielos, fueron cubiertos» (Gn 7:19), y que las aguas subieron quince codos, unos siete metros, por encima de ellos. Murió «toda carne que se mueve sobre la tierra» (Gn 7:21), y «quedó solamente Noé, y los que con él estaban en el arca» (Gn 7:23).',
        { h: 'Dios se acordó de Noé' },
        'En el centro del relato está la frase: «Y se acordó Dios de Noé» (Gn 8:1). En la Biblia, que Dios se acuerde no significa que lo hubiera olvidado, sino que actúa a favor de alguien según su promesa. Dios hizo pasar un viento sobre la tierra, como el Espíritu que se movía sobre las aguas en Génesis 1:2, y las aguas comenzaron a bajar. Lo que el diluvio deshizo, Dios lo vuelve a ordenar.',
        'El Salmo 29 canta: «Jehová preside en el diluvio, Y se sienta Jehová como rey para siempre» (Sal 29:10). Aun en el peor juicio de la historia, Dios no perdió el control.'
      ],
      pensar: 'Noé pasó un año encerrado sin ver la tierra, pero «se acordó Dios de Noé». ¿En qué situación larga de tu vida necesitas recordar que Dios no se ha olvidado de ti?'
    },
    {
      id: 'universal', n: '¿Un diluvio universal o local?', ref: 'Génesis 7:19-23; 9:11-15; 2 Pedro 3:5-7; Mateo 24:39',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Universal o local: las dos lecturas',
          cab: ['Punto', 'Diluvio universal', 'Diluvio local'],
          filas: [
            ['Extensión', 'Cubrió toda la tierra', 'Cubrió la región habitada por los seres humanos (Mesopotamia)'],
            ['«Todos los montes altos»', 'Literalmente, todos los montes del planeta', 'Todos los montes que Noé podía ver en el horizonte'],
            ['Quiénes murieron', 'Toda la humanidad, salvo ocho', 'Toda la humanidad, salvo ocho (en las versiones más extendidas)'],
            ['Las capas de roca y los fósiles', 'En gran parte, efecto del diluvio', 'Formados a lo largo de largas edades'],
            ['Quiénes la sostienen', 'Respuestas en Génesis y la mayoría de los creyentes en la historia', 'Reasons to Believe y otros intérpretes de tierra antigua'],
          ],
          nota: 'Las dos lecturas creen que el diluvio ocurrió y que fue un juicio de Dios sobre la humanidad.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Estos ignoran voluntariamente, que en el tiempo antiguo fueron hechos por la palabra de Dios los cielos, y también la tierra, que proviene del agua y por el agua subsiste, por lo cual el mundo de entonces pereció anegado en agua; pero los cielos y la tierra que existen ahora, están reservados por la misma palabra, guardados para el fuego en el día del juicio y de la perdición de los hombres impíos.', ref: '2 Pedro 3:5-7' }
      ],
      texto: [
        'Todos los que creen la Biblia aceptan que el diluvio ocurrió de verdad. La pregunta que divide a los intérpretes es otra: ¿cubrió el agua todo el planeta, o una región muy extensa donde vivía la humanidad? Este recurso presenta el diluvio universal como la lectura más natural del texto, y el diluvio local como una postura que sostienen otros creyentes.',
        { h: 'Lo que dice el texto' },
        'El lenguaje de Génesis 7 es amplio e insistente: las aguas cubrieron «todos los montes altos que había debajo de todos los cielos» (Gn 7:19), murió «toda carne que se mueve sobre la tierra» (Gn 7:21), y fue destruido «todo ser que vivía sobre la faz de la tierra» (Gn 7:23). Las aguas tardaron meses en bajar y el arca se posó en las montañas de Ararat, a gran altura. Dios prometió después que no habría «más diluvio para destruir la tierra» (Gn 9:11); si el diluvio hubiera sido local, la promesa se habría quebrado muchas veces, porque ha habido muchas inundaciones regionales.',
        'El Nuevo Testamento usa el diluvio como modelo del juicio final, que alcanzará a todos. Jesús dice que vino el diluvio «y se los llevó a todos» (Mt 24:39), y Pedro compara «el mundo de entonces», que pereció anegado en agua, con los cielos y la tierra de ahora, guardados para el fuego (2 P 3:6-7). Un juicio universal futuro tiene como figura un juicio universal pasado.',
        { posturas: {
          titulo: '¿Cubrió el diluvio todo el planeta?',
          a: { n: 'Sí: un diluvio universal', t: 'Es la lectura natural de las expresiones «todos los montes altos… debajo de todos los cielos» y «toda carne». Si fuera local, no habría hecho falta un arca: Noé y los animales podrían haber migrado. La promesa de Génesis 9 y la comparación de 2 Pedro 3 suponen un juicio que alcanzó a todo el mundo. Esta ha sido la lectura de la gran mayoría de los creyentes en la historia.' },
          b: { n: 'Un diluvio local, pero universal para la humanidad', t: 'Otros intérpretes señalan que en la Biblia «toda la tierra» a veces se refiere a la región conocida: «toda la tierra» fue a Egipto a comprar grano (Gn 41:57), y en Pentecostés había judíos «de todas las naciones bajo el cielo» (Hch 2:5). Proponen que el diluvio cubrió la región donde vivía la humanidad, en Mesopotamia, y destruyó a todos los seres humanos salvo a Noé y su familia. La geología, dicen, no muestra una inundación global reciente.' },
          c: 'Las dos posturas aceptan la historicidad del diluvio, el juicio de Dios sobre toda la humanidad pecadora y la salvación de Noé por gracia. La diferencia está en la extensión geográfica de las aguas. El recurso sigue la lectura universal, por ser la más natural del texto, y respeta a quienes, por fidelidad a la Escritura, entienden la otra.'
        } }
      ],
      pensar: 'Pedro dice que el mundo de entonces pereció en agua y que el de ahora está guardado para el fuego. ¿Vives con la conciencia de que habrá un juicio, y de que hay un arca, Cristo, para escapar de él?'
    },
    {
      id: 'relatos-diluvio', n: 'El diluvio en los relatos de otros pueblos', ref: 'Génesis 6–9; Hebreos 11:7',
      visual: [
        { tipo: 'imagen', titulo: 'Foto', src: 'img/tablilla-diluvio.jpg', alt: 'Tablilla de arcilla con escritura cuneiforme, rota en la esquina superior derecha: la tablilla XI de la Epopeya de Gilgamesh, que cuenta el diluvio de Utnapishtim', pie: 'La «tablilla del diluvio» de la Epopeya de Gilgamesh (tablilla XI, siglo VII a.C.), de la biblioteca de Asurbanipal en Nínive. George Smith la tradujo en 1872.', origen: 'foto', licencia: 'Foto: BabelStone, CC0, vía Wikimedia Commons. Museo Británico, K.3375', completa: true },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Génesis y los relatos de Mesopotamia',
          cab: ['Tema', 'Gilgamesh (tablilla XI) y Atrahasis', 'Génesis 6–9'],
          filas: [
            ['Por qué viene el diluvio', 'En Atrahasis, el ruido de los hombres no deja dormir a los dioses; Gilgamesh no da un motivo moral', 'La maldad y la violencia de la humanidad'],
            ['Quién avisa', 'El dios Ea, en secreto, contra la decisión de los demás', 'Dios mismo, que juzga y salva'],
            ['El héroe', 'Utnapishtim, que recibe la inmortalidad', 'Noé, justo por gracia, que muere a los 950 años'],
            ['La barca', 'Un cubo de 120 codos por lado: no flotaría estable', 'Un arca alargada de 300 × 50 × 30 codos'],
            ['Las aves', 'Una paloma, una golondrina y un cuervo', 'Un cuervo y una paloma tres veces'],
            ['El sacrificio', 'Los dioses, hambrientos, se juntan «como moscas»', 'Dios percibe olor grato y hace un pacto'],
          ],
          nota: 'Las semejanzas muestran un recuerdo común; las diferencias muestran dos maneras de ver a Dios.'
        } }
      ],
      texto: [
        'En 1872, un joven empleado del Museo Británico, George Smith, traducía unas tablillas de arcilla encontradas en las ruinas de Nínive, en la biblioteca del rey asirio Asurbanipal. Al leer una de ellas, se dio cuenta de que contaba un diluvio, con una barca, un héroe salvado y aves enviadas para ver si la tierra estaba seca. Era la tablilla XI de la Epopeya de Gilgamesh. El hallazgo causó sensación en todo el mundo.',
        { h: 'Un recuerdo en muchos pueblos' },
        'Desde entonces se han conocido otros relatos mesopotámicos del diluvio: el de Ziusudra, en sumerio, y la Epopeya de Atrahasis, en acadio. Además, pueblos de casi todos los continentes, desde Grecia hasta los pueblos originarios de América, conservan historias de una gran inundación de la que se salvaron pocas personas. Muchos creyentes ven en esa coincidencia el eco de un hecho real, recordado por los descendientes de Noé cuando se dispersaron por la tierra.',
        { h: 'Las semejanzas' },
        'La tabla compara Génesis con Gilgamesh. Las semejanzas son claras: un diluvio enviado como castigo, un hombre avisado que construye una barca, animales a bordo, la barca que se posa en una montaña, aves enviadas para explorar y un sacrificio al salir. Algunos estudiosos concluyeron que Génesis había copiado el relato babilonio.',
        { h: 'Las diferencias' },
        'Pero las diferencias son más profundas que las semejanzas. En Atrahasis, los dioses envían el diluvio porque los seres humanos hacen demasiado ruido y no los dejan dormir, y Gilgamesh no da ningún motivo moral; uno de los dioses traiciona a los demás para avisar al héroe; durante la tormenta, los dioses se asustan y lloran; y al final, hambrientos porque nadie les ofrecía sacrificios, se juntan alrededor de la ofrenda. La barca de Utnapishtim era un cubo que habría girado sin control. En Génesis, el diluvio es un juicio moral de un Dios santo; el mismo Dios que juzga es el que salva; no hay pánico en el cielo, y el relato termina con un pacto de gracia para toda la tierra.',
        'Las semejanzas se explican bien si los dos relatos recuerdan un mismo hecho. Las diferencias muestran por qué Génesis no es un mito más: presenta al Dios verdadero, justo y misericordioso, mientras los otros relatos reflejan dioses caprichosos hechos a imagen del hombre.',
        { ir: { t: 'Ver «La evidencia arqueológica» en El imperio babilónico', a: '../../imperio-babilonico/#biblia/7' } }
      ],
      pensar: 'Los dioses de Gilgamesh castigaron al ser humano porque les molestaba. El Dios de Génesis juzgó el pecado, pero salvó y prometió. ¿Cómo cambia tu oración saber que Dios no es caprichoso, sino justo y lleno de gracia?'
    },
    {
      id: 'ararat', n: 'Sobre los montes de Ararat', ref: 'Génesis 8:1-19; 2 Reyes 19:37; Jeremías 51:27',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-paloma.webp', alt: 'Una paloma blanca vuela al atardecer hacia la ventana abierta del arca, con una hoja de olivo en el pico; la mano de un anciano se extiende desde la ventana para recibirla; abajo, las cimas de las montañas asoman sobre el agua', pie: '«Y la paloma volvió a él a la hora de la tarde; y he aquí que traía una hoja de olivo en el pico» (Génesis 8:11).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[30, 33], [42, 50]], capas: [], lugares: ['monte-ararat', 'r-urartu', 'ninive', 'haran', 'babilonia'] } }
      ],
      texto: [
        '«Y reposó el arca en el mes séptimo, a los diecisiete días del mes, sobre los montes de Ararat» (Gn 8:4). Fíjate en el plural: el texto no habla de una cumbre, sino de «los montes de Ararat», una región montañosa.',
        { h: 'La tierra de Ararat' },
        'Ararat es el nombre hebreo de la región que los asirios llamaban Urartu, un reino que existió entre los siglos IX y VI a.C. en las montañas de Armenia, entre el lago Van y el monte que hoy lleva ese nombre, en el extremo oriental de Turquía. La Biblia vuelve a mencionarla cuando los hijos del rey asirio Senaquerib, después de asesinarlo, huyeron «a tierra de Ararat» (2 R 19:37). El mapa muestra la región. El monte Ararat actual, de 5.137 metros, es el más alto de la zona, pero el texto no dice en qué cumbre se posó el arca.',
        { h: 'El cuervo y la paloma' },
        'Pasados cuarenta días desde que aparecieron las cimas, Noé abrió la ventana y envió un cuervo, que iba y volvía. Luego envió una paloma, que no encontró dónde posarse y regresó: «Entonces él extendió su mano, y tomándola, la hizo entrar consigo en el arca» (Gn 8:9). Siete días después, la paloma volvió por la tarde con una hoja de olivo en el pico: la vida había comenzado de nuevo. La tercera vez, no volvió. La paloma con la rama de olivo se convirtió, en muchas culturas, en un símbolo de paz.',
        { h: 'Esperar la orden de Dios' },
        'Noé vio la tierra seca el primer día del primer mes, pero no salió. Esperó casi dos meses más, hasta que Dios le habló: «Sal del arca tú, y tu mujer, y tus hijos» (Gn 8:16). Entró por orden de Dios y salió por orden de Dios. Es un ejemplo de paciencia y obediencia: no basta con ver que las condiciones parecen buenas; hay que esperar la palabra del Señor.',
        { h: '¿Se ha encontrado el arca?' },
        'Desde la Antigüedad se ha dicho que restos del arca se conservaban en las montañas de Armenia. En los siglos XX y XXI, varias expediciones han buscado el arca en el monte Ararat y en sus alrededores, y algunos han anunciado hallazgos que no se han confirmado. Hasta hoy no hay ninguna prueba aceptada de que se hayan encontrado sus restos. La fe en el relato no depende de esos hallazgos: depende de la Palabra de Dios.'
      ],
      pensar: 'Noé vio la tierra seca, pero esperó a que Dios le dijera «Sal». ¿Hay alguna decisión en la que te estás adelantando a Dios porque las circunstancias parecen favorables?'
    },
    {
      id: 'pacto-noe', n: 'El pacto con Noé y el arco iris', ref: 'Génesis 8:20–9:17; Isaías 54:9-10; 1 Pedro 3:20-21; Apocalipsis 4:3',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../pactos-y-dispensaciones/img/noe-arco.webp', alt: 'Noé, anciano, de pie junto a un altar de piedras humeante en la ladera de una montaña, levanta la vista hacia un arco iris; su familia y algunos animales lo rodean, y el arca de madera se ve más abajo', pie: '«Mi arco he puesto en las nubes, el cual será por señal del pacto» (Génesis 9:13).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y habló Dios a Noé y a sus hijos con él, diciendo: He aquí que yo establezco mi pacto con vosotros, y con vuestros descendientes después de vosotros; y con todo ser viviente que está con vosotros; aves, animales y toda bestia de la tierra que está con vosotros, desde todos los que salieron del arca hasta todo animal de la tierra. Estableceré mi pacto con vosotros, y no exterminaré ya más toda carne con aguas de diluvio, ni habrá más diluvio para destruir la tierra. Y dijo Dios: Esta es la señal del pacto que yo establezco entre mí y vosotros y todo ser viviente que está con vosotros, por siglos perpetuos: Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra. Y sucederá que cuando haga venir nubes sobre la tierra, se dejará ver entonces mi arco en las nubes. Y me acordaré del pacto mío, que hay entre mí y vosotros y todo ser viviente de toda carne; y no habrá más diluvio de aguas para destruir toda carne. Estará el arco en las nubes, y lo veré, y me acordaré del pacto perpetuo entre Dios y todo ser viviente, con toda carne que hay sobre la tierra. Dijo, pues, Dios a Noé: Esta es la señal del pacto que he establecido entre mí y toda carne que está sobre la tierra.', ref: 'Génesis 9:8-17' }
      ],
      texto: [
        'Lo primero que hace Noé al salir del arca es edificar un altar y ofrecer holocaustos (Gn 8:20). Antes de construir una casa o plantar una viña, adora. Dios recibe la ofrenda con agrado y promete en su corazón: «No volveré más a maldecir la tierra por causa del hombre» (Gn 8:21). Y garantiza el orden de la creación: «Mientras la tierra permanezca, no cesarán la sementera y la siega, el frío y el calor, el verano y el invierno, y el día y la noche» (Gn 8:22).',
        { h: 'Un nuevo comienzo' },
        'Génesis 9 presenta a Noé como un nuevo Adán. Dios repite la bendición de la creación: «Fructificad y multiplicaos, y llenad la tierra» (Gn 9:1). Pero el mundo ya no es el del Edén: los animales temerán al ser humano, y Dios permite comer carne, con una condición: no comer la sangre, que representa la vida (Gn 9:3-4).',
        'Dios agrega una ley que protege la vida humana: «El que derramare sangre de hombre, por el hombre su sangre será derramada; porque a imagen de Dios es hecho el hombre» (Gn 9:6). Después del diluvio, la imagen de Dios sigue en el ser humano, y por eso su vida es sagrada. Con esta norma comienza lo que muchos llaman la dispensación del gobierno humano: Dios encarga a la sociedad castigar el asesinato y frenar la violencia que había llenado la tierra.',
        { h: 'La señal del arco' },
        'Dios establece un pacto «con vosotros, y con vuestros descendientes después de vosotros; y con todo ser viviente» (Gn 9:9-10). Es un pacto universal e incondicional: Dios se compromete sin pedir nada a cambio. La señal es el arco en las nubes. En hebreo, la palabra es la misma que se usa para el arco de guerra. Dios cuelga su arco en el cielo, apuntando hacia arriba, lejos de la tierra: es un arco de paz. Y dice algo conmovedor: «lo veré, y me acordaré del pacto perpetuo» (Gn 9:16). Cada vez que aparece el arco iris, Dios mismo recuerda su promesa.',
        { h: 'Las aguas y la salvación' },
        'Pedro ve en el diluvio una figura del bautismo: ocho personas «fueron salvadas por agua», y el bautismo «que corresponde a esto ahora nos salva», no porque lave el cuerpo, sino como «la aspiración de una buena conciencia hacia Dios» por la resurrección de Cristo (1 P 3:20-21). Las aguas que fueron juicio para el mundo fueron el paso hacia una nueva vida para los que estaban en el arca. Y en el cielo, Juan vio un arco iris alrededor del trono de Dios (Ap 4:3): la promesa sigue rodeando el gobierno de Dios.',
        { ir: { t: 'Ver «Noé: la tierra preservada» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/2' } },
        { ir: { t: 'Ver «Gobierno humano y promesa» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#dispensaciones/4' } }
      ],
      pensar: 'Dios dijo que al ver el arco iris se acordaría de su pacto. ¿Qué promesa de Dios necesitas recordar hoy cuando veas un arco iris?'
    }
  ];

  /* ---------------- VII. Babel y las naciones ---------------- */
  const babel = [
    {
      id: 'tres-hijos', n: 'Sem, Cam y Jafet', ref: 'Génesis 9:18-29; Hechos 17:26; Gálatas 3:28',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y los hijos de Noé que salieron del arca fueron Sem, Cam y Jafet; y Cam es el padre de Canaán. Estos tres son los hijos de Noé, y de ellos fue llena toda la tierra. Después comenzó Noé a labrar la tierra, y plantó una viña; y bebió del vino, y se embriagó, y estaba descubierto en medio de su tienda. Y Cam, padre de Canaán, vio la desnudez de su padre, y lo dijo a sus dos hermanos que estaban afuera. Entonces Sem y Jafet tomaron la ropa, y la pusieron sobre sus propios hombros, y andando hacia atrás, cubrieron la desnudez de su padre, teniendo vueltos sus rostros, y así no vieron la desnudez de su padre. Y despertó Noé de su embriaguez, y supo lo que le había hecho su hijo más joven, y dijo: Maldito sea Canaán; Siervo de siervos será a sus hermanos. Dijo más: Bendito por Jehová mi Dios sea Sem, Y sea Canaán su siervo. Engrandezca Dios a Jafet, Y habite en las tiendas de Sem, Y sea Canaán su siervo.', ref: 'Génesis 9:18-27' }
      ],
      texto: [
        '«Estos tres son los hijos de Noé, y de ellos fue llena toda la tierra» (Gn 9:19). Toda la humanidad después del diluvio desciende de una sola familia. El episodio que sigue es breve, incómodo y muy mal usado en la historia, y por eso conviene leerlo con cuidado.',
        { h: 'La caída de Noé' },
        'Noé, el justo que caminó con Dios, planta una viña, bebe vino, se embriaga y queda descubierto en su tienda (Gn 9:20-21). La Biblia no esconde los pecados de sus héroes. El hombre que resistió la corrupción de toda una generación cae en la intimidad de su casa. Ningún creyente está libre de caer, por mucha experiencia espiritual que tenga.',
        'Cam, el padre de Canaán, ve la desnudez de su padre y lo cuenta a sus hermanos, como quien difunde algo vergonzoso. Sem y Jafet, en cambio, toman una ropa, caminan hacia atrás para no mirar y cubren a su padre (Gn 9:22-23). Unos exponen la falta; otros la cubren con respeto. El amor «cubrirá multitud de pecados» (1 P 4:8).',
        { h: '¿La «maldición de Cam»?' },
        'Cuando Noé despierta, pronuncia una maldición, pero no sobre Cam, sino sobre Canaán, uno de sus hijos: «Maldito sea Canaán; Siervo de siervos será a sus hermanos» (Gn 9:25). Es una palabra profética que se cumplió siglos después, cuando los cananeos, conocidos por su corrupción moral (Lv 18:24-28), fueron sometidos por Israel en la conquista.',
        'Durante siglos, algunos usaron este pasaje para justificar la esclavitud de los pueblos africanos, hablando de una supuesta «maldición de Cam» que habría oscurecido su piel y los habría condenado a servir. El texto no dice nada de eso: Cam no fue maldecido, la maldición cayó sobre Canaán, los cananeos no eran africanos, y nada en el pasaje habla del color de la piel. Esa interpretación fue un grave pecado contra la Escritura y contra millones de personas hechas a imagen de Dios. La Biblia enseña que Dios «de una sangre ha hecho todo el linaje de los hombres» (Hch 17:26), y que en Cristo no hay distinción de pueblos (Ga 3:28).',
        { h: 'Sem y Jafet' },
        'Noé bendice a Dios por Sem: «Bendito por Jehová mi Dios sea Sem» (Gn 9:26). De Sem descenderán Abraham, Israel y el Mesías; de su nombre viene la palabra «semita». De Jafet dice: «Engrandezca Dios a Jafet, Y habite en las tiendas de Sem» (Gn 9:27). Los pueblos de Jafet se extendieron hacia el norte y el oeste. Muchos intérpretes ven aquí un anuncio de que los gentiles compartirían las bendiciones que vendrían por medio de Sem, como ocurrió cuando el evangelio llegó a las naciones.',
        { ejercicio: {
          pregunta: '¿Sobre quién cae la maldición de Génesis 9:25?',
          opciones: [
            { t: 'Sobre Canaán, el hijo de Cam, y se cumplió en los cananeos.', ok: true, por_que: 'Correcto: el texto dice «Maldito sea Canaán». Usarlo contra los pueblos africanos tergiversa la Escritura.' },
            { t: 'Sobre Cam y todos sus descendientes, incluidos los pueblos de África.', ok: false, por_que: 'Es la interpretación que sirvió para justificar la esclavitud. El texto no maldice a Cam ni habla de África ni del color de la piel.' },
            { t: 'Sobre Noé, por haberse embriagado.', ok: false, por_que: 'Noé pecó, pero el texto no lo maldice. La maldición es una palabra profética que él pronuncia sobre Canaán.' }
          ],
          explicacion: 'Leer con atención protege de usar la Biblia para justificar el pecado. Todos los pueblos son una sola familia humana.'
        } }
      ],
      pensar: 'Sem y Jafet cubrieron la falta de su padre sin exponerla. Cuando conoces el pecado de un hermano, ¿lo difundes o lo cubres con amor y lo ayudas a restaurarse?'
    },
    {
      id: 'naciones', n: 'La tabla de las naciones', ref: 'Génesis 10:1-32; Deuteronomio 32:8; Hechos 17:26',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Los hijos de Jafet (Gn 10:2-5): Gomer, Magog, Madai (los medos), Javán (los griegos de Jonia), Tubal, Mesec y Tiras. Se extienden hacia el norte y las costas del Mediterráneo.',
            estado: { view: NACIONES, capas: [], lugares: ['r-gomer', 'r-magog', 'r-media', 'javan', 'r-tubal', 'r-mesec', 'r-togarma', 'quitim', 'rodas'] } },
          { t: 'Los hijos de Cam (Gn 10:6-20): Cus, Mizraim (Egipto), Fut y Canaán. Se extienden hacia el sur: África, Arabia y la tierra de Canaán, y desde Sinar Nimrod funda ciudades en Mesopotamia.',
            estado: { view: NACIONES, capas: [], lugares: ['r-cus', 'r-egipto', 'r-fut', 'canaan', 'sidon', 'het', 'seba', 'babilonia', 'ninive'] } },
          { t: 'Los hijos de Sem (Gn 10:21-31): Elam, Asur, Arfaxad, Lud y Aram. Ocupan Mesopotamia, Siria y el oriente; de Arfaxad, por Heber, vendrá Abraham.',
            estado: { view: NACIONES, capas: [], lugares: ['r-elam', 'asur', 'lud', 'aram', 'ur', 'haran'] } }
        ] },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-naciones.svg', alt: 'Árbol que parte de Noé en tres ramas: Jafet hacia el norte y el oeste, con Gomer, Magog, Madai, Javán, Tubal, Mesec y Tiras; Cam hacia el sur, con Cus, Mizraim, Fut y Canaán; Sem hacia el oriente, con Elam, Asur, Arfaxad, Lud y Aram, y de Arfaxad a Heber, Peleg y Abraham', pie: 'Setenta nombres en total: toda la humanidad, en tres familias.', origen: 'esquema' }
      ],
      texto: [
        'Génesis 10 es un capítulo único en la literatura antigua. Ningún otro pueblo de su tiempo hizo un mapa de toda la humanidad conocida como una sola familia. Los egipcios, los babilonios y los griegos se veían a sí mismos como el centro del mundo y a los demás como bárbaros. Génesis, en cambio, presenta a todas las naciones como descendientes de Noé y, a través de él, de Adán.',
        { h: 'Setenta naciones' },
        'El capítulo nombra unas setenta naciones o pueblos, organizados en tres grupos: los hijos de Jafet, de Cam y de Sem. El mapa los recorre en tres pasos. La mayoría de los nombres son de pueblos o regiones, no solo de personas: Mizraim es Egipto, Madai son los medos, Javán son los griegos de Jonia, Asur es Asiria y Aram es Siria. Muchos de esos nombres vuelven a aparecer en los profetas.',
        'El número setenta tiene sentido en la Biblia. Setenta personas de la casa de Jacob bajaron a Egipto (Gn 46:27), y Moisés canta que Dios «estableció los límites de los pueblos Según el número de los hijos de Israel» (Dt 32:8). Jesús envió a setenta discípulos (Lc 10:1), quizá como una señal de que el evangelio era para todas las naciones.',
        { h: 'Cada uno según su lengua' },
        'El capítulo repite que las naciones se distribuyeron «según su lengua, conforme a sus familias en sus naciones» (Gn 10:5). Génesis 11 explicará cómo surgieron las distintas lenguas en Babel. El orden de los capítulos no es estrictamente cronológico: el capítulo 10 muestra el resultado, y el 11 cuenta la causa.',
        { h: 'Peleg y la repartición' },
        'En la línea de Sem aparece un detalle: Heber tuvo un hijo llamado Peleg, «porque en sus días fue repartida la tierra» (Gn 10:25). El nombre significa «división». La mayoría de los intérpretes entienden que se refiere a la división de los pueblos en Babel. De Heber viene probablemente la palabra «hebreo», y de su línea, Abraham.',
        { h: 'Un solo linaje' },
        'Pablo resume el mensaje del capítulo ante los filósofos de Atenas: Dios «de una sangre ha hecho todo el linaje de los hombres, para que habiten sobre toda la faz de la tierra; y les ha prefijado el orden de los tiempos, y los límites de su habitación» (Hch 17:26). Todas las naciones tienen el mismo origen, la misma dignidad y el mismo Dios que gobierna su historia. La identificación de algunos nombres, como Magog, es incierta, y el mapa la muestra como aproximada.'
      ],
      pensar: 'Génesis 10 ve a todas las naciones como una sola familia. ¿Hay algún pueblo o grupo de personas hacia el que tienes prejuicios? ¿Qué te enseña este capítulo?'
    },
    {
      id: 'nimrod', n: 'Nimrod y las primeras ciudades', ref: 'Génesis 10:8-12; Miqueas 5:6',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MESOP, capas: [], lugares: ['babilonia', 'uruk', 'acad', 'ninive', 'kalhu', 'asur', 'ur', 'eridu'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Cus engendró a Nimrod, quien llegó a ser el primer poderoso en la tierra. Este fue vigoroso cazador delante de Jehová; por lo cual se dice: Así como Nimrod, vigoroso cazador delante de Jehová. Y fue el comienzo de su reino Babel, Erec, Acad y Calne, en la tierra de Sinar. De esta tierra salió para Asiria, y edificó Nínive, Rehobot, Cala, y Resén entre Nínive y Cala, la cual es ciudad grande.', ref: 'Génesis 10:8-12' }
      ],
      texto: [
        'En medio de la lista de las naciones, Génesis se detiene en un personaje: Nimrod, hijo de Cus, «quien llegó a ser el primer poderoso en la tierra» (Gn 10:8). Es el primer hombre de la Biblia descrito como un gobernante con un reino.',
        { h: 'Un vigoroso cazador' },
        'Nimrod era «vigoroso cazador delante de Jehová» (Gn 10:9), y su fama se volvió un dicho popular. En el mundo antiguo, los reyes se presentaban como grandes cazadores: los relieves asirios muestran a los reyes cazando leones, como prueba de su fuerza y de su derecho a gobernar. La expresión «delante de Jehová» puede entenderse de dos maneras. Algunos la leen como un elogio: era un cazador extraordinario, aun a los ojos de Dios. Otros, siguiendo a antiguos intérpretes judíos, la leen como desafío: un hombre que se levantó frente a Dios. Su nombre suena en hebreo como «nos rebelaremos».',
        { h: 'Las primeras ciudades del imperio' },
        'El comienzo de su reino fue «Babel, Erec, Acad y Calne, en la tierra de Sinar» (Gn 10:10). Sinar es el nombre bíblico de la llanura del sur de Mesopotamia. Babel es Babilonia; Erec es Uruk, una de las ciudades más antiguas del mundo, donde se encuentran algunos de los primeros textos escritos; Acad fue la capital del primer imperio conocido, el de Sargón, cuya ubicación exacta aún se busca. De allí, Nimrod salió hacia Asiria y edificó Nínive y Cala (Gn 10:11). El mapa muestra estas ciudades, que siglos después serían las capitales de Babilonia y Asiria, los imperios que conquistarían a Israel y a Judá.',
        'Miqueas llama a Asiria «la tierra de Nimrod» (Mi 5:6). Para los profetas, Nimrod era el fundador del poder imperial que oprime a los pueblos.',
        { h: 'El poder sin Dios' },
        'Nimrod representa algo que se repite en la historia: el ser humano que acumula poder, construye ciudades y funda imperios para engrandecer su propio nombre. Babilonia aparece aquí por primera vez en la Biblia, y la Escritura la seguirá hasta el final, cuando Apocalipsis anuncie: «Ha caído, ha caído la gran Babilonia» (Ap 18:2). Babel es el símbolo de la civilización humana organizada contra Dios.',
        { ir: { t: 'Ver «Babilonia en la Biblia» en El imperio babilónico', a: '../../imperio-babilonico/#historia/1' } }
      ],
      pensar: 'Nimrod se hizo un nombre con su poder. ¿Qué lugar ocupa en tu vida el deseo de ser reconocido, y qué lugar el deseo de que Dios sea conocido?'
    },
    {
      id: 'torre', n: 'La torre de Babel', ref: 'Génesis 11:1-9; Daniel 4:30; Isaías 14:13-14; Apocalipsis 18:2',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-babel.webp', alt: 'Una multitud anónima de obreros de la antigua Mesopotamia fabrica y cuece ladrillos de barro y los sube por rampas hacia una enorme torre escalonada en construcción, cuyos pisos superiores se pierden entre nubes de polvo al atardecer', pie: '«Vamos, edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo» (Génesis 11:4).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/zigurat-ur.jpg', alt: 'El gran zigurat de Ur, en el sur de Irak: una torre escalonada de ladrillo con una gran escalinata central, restaurada en parte', pie: 'El zigurat de Ur, construido hacia el 2100 a.C. por el rey Ur-Nammu y restaurado en parte en el siglo XX. Así eran las torres de los templos de Mesopotamia.', origen: 'foto', licencia: 'Foto: Hardnfast, CC BY 3.0, vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-zigurat.svg', alt: 'Perfil de un zigurat de siete pisos, con el santuario arriba y una escalinata, comparado a escala con el Etemenanki de Babilonia, de unos 91 metros de lado y de alto, una persona y un edificio de diez pisos', pie: 'El Etemenanki, el gran zigurat de Babilonia, medía según las fuentes unos 91 metros de lado. Su nombre significaba «casa del fundamento del cielo y de la tierra».', origen: 'esquema' }
      ],
      texto: [
        '«Tenía entonces toda la tierra una sola lengua y unas mismas palabras» (Gn 11:1). Los descendientes de Noé, moviéndose hacia el oriente, encuentran una llanura en Sinar y se establecen allí. Dios había mandado llenar la tierra (Gn 9:1); ellos deciden quedarse juntos.',
        { h: 'Ladrillo en lugar de piedra' },
        'El texto da un detalle técnico que muestra que el narrador conocía Mesopotamia: «les sirvió el ladrillo en lugar de piedra, y el asfalto en lugar de mezcla» (Gn 11:3). En la llanura del Tigris y el Éufrates no hay piedra, pero hay barro y betún. Los mesopotámicos inventaron el ladrillo cocido y construyeron con él ciudades enteras y grandes torres escalonadas, los zigurats, sobre las que ponían un santuario para sus dioses. Las fotos y el esquema muestran cómo eran.',
        { h: '«Hagámonos un nombre»' },
        'El propósito del proyecto está en sus palabras: «edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra» (Gn 11:4). Hay tres pecados en una frase: el orgullo de querer llegar al cielo por esfuerzo propio, el deseo de hacerse un nombre en lugar de honrar el de Dios, y la desobediencia de no querer llenar la tierra. Es el mismo orgullo que Isaías atribuye al rey de Babilonia: «Subiré al cielo… y seré semejante al Altísimo» (Is 14:13-14).',
        { h: 'Dios desciende' },
        'El relato tiene una ironía fina: los hombres quieren que su torre llegue al cielo, pero «descendió Jehová para ver la ciudad y la torre» (Gn 11:5). La obra que les parecía tan alta era tan pequeña que Dios tuvo que bajar para verla. Dios dice: «descendamos, y confundamos allí su lengua» (Gn 11:7), con un plural que recuerda al «Hagamos» de la creación. Confunde las lenguas, y el proyecto se detiene. Los pueblos se dispersan por la tierra, cumpliendo, a pesar de sí mismos, el mandato de Dios.',
        { h: 'Babel: puerta o confusión' },
        'Para los babilonios, el nombre de su ciudad, Bab-ilu, significaba «puerta de dios». Génesis juega con otra palabra hebrea parecida, balal, que significa «confundir»: «Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra» (Gn 11:9). Lo que ellos llamaban la puerta de dios, Dios lo llamó confusión. Siglos después, Nabucodonosor diría de la misma ciudad: «¿No es ésta la gran Babilonia que yo edifiqué…?» (Dn 4:30), y también sería humillado.',
        { ejercicio: {
          pregunta: '¿Cuál era el pecado principal de los constructores de Babel?',
          opciones: [
            { t: 'Querer hacerse un nombre y quedarse juntos, desobedeciendo el mandato de llenar la tierra.', ok: true, por_que: 'Correcto: el texto lo dice con sus propias palabras: «hagámonos un nombre, por si fuéremos esparcidos».' },
            { t: 'Construir con ladrillos, que era una técnica prohibida.', ok: false, por_que: 'Construir no es pecado; el texto solo describe la técnica. El problema estaba en el propósito.' },
            { t: 'Hablar una sola lengua.', ok: false, por_que: 'Tener una sola lengua no era malo; lo malo fue usar esa unidad para rebelarse contra Dios.' }
          ],
          explicacion: 'Babel no fue condenada por su tecnología, sino por su orgullo: una humanidad unida para engrandecerse sin Dios.'
        } }
      ],
      pensar: '«Hagámonos un nombre.» ¿En qué proyectos de tu vida buscas más tu propio nombre que el de Dios?'
    },
    {
      id: 'pentecostes', n: 'De Babel a Pentecostés', ref: 'Hechos 2:1-11; Sofonías 3:9; Apocalipsis 7:9-10',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../movimiento-pentecostal/img/pentecostes.webp', alt: 'Los discípulos reunidos en una casa de Jerusalén, con pequeñas llamas sobre sus cabezas, hablan con los rostros encendidos mientras una multitud se agolpa en la calle', pie: '«¿Cómo, pues, les oímos nosotros hablar cada uno en nuestra lengua en la que hemos nacido?» (Hechos 2:8).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: HECHOS2, capas: ['roma-14'], lugares: ['jerusalen', 'r-partia', 'r-media', 'r-elam', 'r-mesopotamia', 'r-capadocia', 'r-ponto', 'r-asia', 'r-frigia', 'r-panfilia', 'r-egipto', 'r-libia', 'r-roma', 'r-creta', 'r-arabia'] } },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Babel y Pentecostés',
          cab: ['Babel (Gn 11)', 'Pentecostés (Hch 2)'],
          filas: [
            ['Los hombres quieren subir al cielo', 'El Espíritu desciende del cielo'],
            ['«Hagámonos un nombre»', 'Se predica el nombre de Jesús (Hch 2:38)'],
            ['Una lengua se divide en muchas', 'Muchas lenguas anuncian un solo mensaje'],
            ['Nadie entiende a su compañero', 'Cada uno oye en su propia lengua'],
            ['La humanidad se dispersa', 'Las naciones se reúnen en una iglesia'],
          ],
          nota: 'Pentecostés no elimina las lenguas: las santifica para anunciar las maravillas de Dios.'
        } }
      ],
      texto: [
        'La historia de Babel no termina en Génesis 11. Siglos después, en Jerusalén, el día de Pentecostés, ocurre algo que la Biblia presenta como su respuesta. Mientras los discípulos estaban reunidos, «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4).',
        { h: 'Todas las naciones bajo el cielo' },
        'En Jerusalén había judíos piadosos «de todas las naciones bajo el cielo» (Hch 2:5). Lucas los nombra: partos, medos, elamitas, habitantes de Mesopotamia, Judea, Capadocia, el Ponto, Asia, Frigia, Panfilia, Egipto, Libia y Roma, cretenses y árabes. El mapa los muestra. La lista recuerda a la tabla de las naciones: los descendientes de los que se dispersaron en Babel vuelven a reunirse, y cada uno oye «en nuestras lenguas las maravillas de Dios» (Hch 2:11).',
        { h: 'Lo que Babel deshizo, el Espíritu lo restaura' },
        'La tabla compara los dos relatos. En Babel, los hombres querían subir al cielo; en Pentecostés, el Espíritu desciende del cielo. En Babel buscaban hacerse un nombre; en Pentecostés se anuncia el nombre de Jesús. En Babel, las lenguas dividieron a la humanidad; en Pentecostés, las lenguas se vuelven instrumento para unirla en Cristo. Muchos padres de la iglesia vieron esta relación, y el profeta Sofonías ya la había anunciado: Dios devolvería «a los pueblos pureza de labios, para que todos invoquen el nombre de Jehová» (Sof 3:9).',
        'Es importante notar lo que Dios hizo y lo que no hizo. En Pentecostés, Dios no anuló las lenguas para volver a una sola; habló en las lenguas de cada pueblo. El evangelio no borra las culturas, sino que llega a cada una en su propio idioma. Por eso la iglesia ha traducido la Biblia a miles de lenguas.',
        { h: 'Toda lengua delante del trono' },
        'El final de la historia está en Apocalipsis: Juan vio «una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas» delante del trono y del Cordero (Ap 7:9). La humanidad que se dispersó en Babel será reunida en adoración, sin perder su diversidad.',
        { ir: { t: 'Ver «El día de Pentecostés» en El Espíritu Santo', a: '../../espiritu-santo/#bautismo/2' } }
      ],
      pensar: 'En Pentecostés, el Espíritu habló a cada pueblo en su lengua. ¿A qué personas de otra cultura, idioma o generación podría Dios usarte para llevar el evangelio?'
    },
    {
      id: 'abraham', n: 'De Babel a Abraham', ref: 'Génesis 11:10–12:3; Gálatas 3:8; Hebreos 11:8-10',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[28.5, 33.5], [39, 48.5]], capas: [], lugares: ['ur', 'babilonia', 'haran', 'damasco', 'jerusalen'], trazos: ['cr-tare'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré. Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición. Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra.', ref: 'Génesis 12:1-3' }
      ],
      texto: [
        'Génesis 11 termina con una genealogía que lleva de Sem a Taré y sus hijos: Abram, Nacor y Harán (Gn 11:10-26). Después del juicio de Babel, la historia de toda la humanidad se angosta hasta un solo hombre. Es el fin de los orígenes y el comienzo de la historia de la salvación por medio de un pueblo.',
        { h: 'De Ur a Harán' },
        'Taré vivía en «Ur de los caldeos» (Gn 11:28), una gran ciudad del sur de Mesopotamia, con su propio zigurat dedicado al dios luna. Josué recordará que los antepasados de Israel «servían a dioses extraños» al otro lado del río (Jos 24:2). Taré salió de Ur con Abram, Sarai y Lot rumbo a Canaán, pero se quedó en Harán, al norte, otra ciudad dedicada al dios luna (Gn 11:31). El mapa muestra el recorrido. Abraham salió de una sociedad parecida a la de Babel.',
        { h: 'Un nombre que Dios engrandece' },
        'El contraste con Babel es deliberado. Los constructores de la torre dijeron «hagámonos un nombre» (Gn 11:4). A Abram, Dios le dice: «engrandeceré tu nombre» (Gn 12:2). Lo que ellos quisieron conseguir por orgullo, Dios lo da por gracia a quien confía en Él. Los de Babel querían quedarse en un lugar; Abram es llamado a salir hacia una tierra que no conoce. Babel buscó su propia seguridad; Abraham «esperaba la ciudad que tiene fundamentos, cuyo arquitecto y constructor es Dios» (He 11:10).',
        { h: 'Todas las familias de la tierra' },
        'La promesa de Génesis 12:3 responde a todo lo que se rompió en Génesis 1 a 11: «serán benditas en ti todas las familias de la tierra» (Gn 12:3). Después de la maldición sobre la tierra (Gn 3:17), sobre Caín (Gn 4:11) y sobre Canaán (Gn 9:25), llega por fin una bendición para todas las familias que se dispersaron en Babel. Pablo dice que en esta promesa Dios «dio de antemano la buena nueva a Abraham» (Ga 3:8): es el evangelio anunciado por adelantado. La bendición llegaría a todas las naciones por medio de Cristo, el descendiente de Abraham.',
        'Los primeros once capítulos de Génesis explican por qué el mundo necesita un Salvador. El resto de la Biblia cuenta cómo Dios lo envió. La historia de Abraham y los patriarcas tendrá su propio recurso, Los patriarcas, en preparación.',
        { ir: { t: 'Ver «La promesa a Abraham» en La tierra de Israel', a: '../../tierra-de-israel/#plan/1' } },
        { ir: { t: 'Ver «Abraham: las promesas» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/3' } }
      ],
      pensar: 'Dios llamó a Abram a salir de una ciudad que confiaba en sí misma. ¿De qué «Ur» o «Babel» te está llamando Dios a salir para seguirlo por fe?'
    }
  ];

  Object.assign(window.__CREACION, { diluvio, babel });
})();
(() => {
  /* ---------------- VIII. Creación y esperanza ---------------- */
  const esperanza = [
    {
      id: 'ciencia', n: 'Fe y ciencia', ref: 'Salmos 111:2; Proverbios 25:2; Romanos 1:20; Colosenses 1:17; Hebreos 11:3',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Científicos creyentes que fundaron la ciencia moderna',
          cab: ['Científico', 'Aporte', 'Lo que dijo o creyó'],
          filas: [
            ['Johannes Kepler (1571–1630)', 'Leyes del movimiento de los planetas', 'Veía la astronomía como una manera de conocer la obra de Dios'],
            ['Blaise Pascal (1623–1662)', 'Presión de los fluidos, probabilidad', 'Escribió una defensa de la fe cristiana, los Pensamientos'],
            ['Robert Boyle (1627–1691)', 'Padre de la química moderna', 'Financió la traducción de la Biblia a otras lenguas'],
            ['Isaac Newton (1643–1727)', 'Gravitación universal', 'Escribió más sobre la Biblia y la profecía que sobre física'],
            ['Gregor Mendel (1822–1884)', 'Leyes de la herencia genética', 'Monje y abad agustino'],
            ['Michael Faraday (1791–1867)', 'Electricidad y magnetismo', 'Anciano de una pequeña congregación cristiana de Londres'],
          ],
          nota: 'La ciencia nació en buena parte de la convicción de que el universo es ordenado porque lo hizo un Dios racional.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Alabaré a Jehová con todo el corazón En la compañía y congregación de los rectos. Grandes son las obras de Jehová, Buscadas de todos los que las quieren. Gloria y hermosura es su obra, Y su justicia permanece para siempre. Ha hecho memorables sus maravillas; Clemente y misericordioso es Jehová.', ref: 'Salmos 111:1-4' }
      ],
      texto: [
        'Muchas personas creen que la fe y la ciencia son enemigas, y que un creyente tiene que elegir entre la Biblia y el laboratorio. La historia muestra otra cosa. Muchos de los fundadores de la ciencia moderna fueron creyentes que estudiaban la naturaleza porque creían que Dios la había hecho con orden. La tabla nombra a algunos.',
        { h: 'Por qué la ciencia es posible' },
        'La ciencia supone que el universo es ordenado, que sigue leyes estables y que la mente humana puede entenderlo. No es obvio que deba ser así. La Biblia da la razón: un Dios sabio creó el mundo con orden (Jer 10:12), sostiene todas las cosas (Col 1:17) y creó al ser humano a su imagen, capaz de pensar y descubrir. El salmista dice: «Grandes son las obras de Jehová, Buscadas de todos los que las quieren» (Sal 111:2). Y Proverbios agrega: «Gloria de Dios es encubrir un asunto; Pero honra del rey es escudriñarlo» (Pr 25:2). Investigar la creación puede ser un acto de adoración.',
        { h: 'Dos libros, un autor' },
        'Los antiguos cristianos hablaban de dos libros de Dios: el libro de la naturaleza y el libro de la Escritura. Los dos vienen del mismo autor y no pueden contradecirse cuando se leen bien. Cuando parece haber un conflicto, puede ser que se esté leyendo mal la naturaleza, por supuestos equivocados, o que se esté leyendo mal la Escritura, haciéndole decir lo que no dice. En el siglo XVII, muchos teólogos pensaban que la Biblia enseñaba que el sol giraba alrededor de la tierra; al final se entendió que el texto hablaba con el lenguaje de la observación.',
        { h: 'Lo que la ciencia no puede responder' },
        'La ciencia puede describir cómo funciona el universo, pero no puede responder por qué existe algo en lugar de nada, ni si la vida tiene propósito, ni qué es bueno y qué es malo. Esas preguntas pertenecen a la fe y a la revelación. «Por la fe entendemos haber sido constituido el universo por la palabra de Dios» (He 11:3). Muchos científicos de hoy, creyentes y no creyentes, se asombran de lo ajustadas que son las leyes del universo para permitir la vida: si algunas constantes de la física fueran apenas distintas, no podríamos existir. Para el creyente, ese ajuste es una huella del Creador.',
        { ejercicio: {
          pregunta: '¿Qué enseña Proverbios 25:2 sobre investigar la creación?',
          opciones: [
            { t: 'Que Dios esconde cosas en su obra y que buscarlas es una tarea honrosa para el ser humano.', ok: true, por_que: 'Correcto: investigar lo que Dios hizo no es rebeldía, sino una manera de honrarlo.' },
            { t: 'Que el creyente no debe investigar, porque lo que Dios encubrió está prohibido.', ok: false, por_que: 'El versículo dice lo contrario: escudriñar es «honra del rey».' },
            { t: 'Que la ciencia y la Biblia hablan de cosas que nunca se tocan.', ok: false, por_que: 'Las dos hablan del mismo mundo creado por Dios, aunque con propósitos distintos.' }
          ],
          explicacion: 'La fe bíblica no teme a la investigación: Dios es el autor de lo que la ciencia estudia.'
        } }
      ],
      pensar: '¿Has sentido alguna vez que tenías que elegir entre tu fe y lo que aprendías en el colegio o la universidad? ¿Qué te enseña la historia de estos científicos creyentes?'
    },
    {
      id: 'cuidar', n: 'Mayordomos de la creación', ref: 'Génesis 1:28; 2:15; Salmos 24:1; Levítico 25:23; Deuteronomio 20:19; Proverbios 12:10; Apocalipsis 11:18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El cuidado de la creación en la Biblia',
          cab: ['Texto', 'Lo que enseña'],
          filas: [
            ['Gn 2:15', 'Labrar y guardar: cultivar y cuidar'],
            ['Sal 24:1', 'La tierra es de Jehová, no nuestra'],
            ['Lv 25:2-5, 23', 'La tierra descansa el año sabático; Dios es su dueño'],
            ['Dt 20:19', 'En la guerra, no destruir los árboles frutales'],
            ['Dt 22:6-7', 'No tomar la madre con los polluelos del nido'],
            ['Pr 12:10', 'El justo cuida de la vida de su animal'],
            ['Jon 4:11', 'Dios tiene piedad de Nínive «y muchos animales»'],
            ['Mt 6:26', 'El Padre alimenta a las aves'],
            ['Ap 11:18', 'Dios destruirá a los que destruyen la tierra'],
          ],
          nota: 'Cuidar la creación no es adorarla: es honrar a su Creador.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'De Jehová es la tierra y su plenitud; El mundo, y los que en él habitan. Porque él la fundó sobre los mares, Y la afirmó sobre los ríos.', ref: 'Salmos 24:1-2' }
      ],
      texto: [
        'Dios puso al ser humano en el huerto «para que lo labrara y lo guardase» (Gn 2:15), y le encargó señorear sobre la creación (Gn 1:28). Ese encargo no terminó con la caída. Sigue vigente, aunque ahora se cumple en un mundo herido por el pecado.',
        { h: 'No somos los dueños' },
        'La base de todo es una frase sencilla: «De Jehová es la tierra y su plenitud» (Sal 24:1). Dios dijo a Israel: «la tierra mía es; pues vosotros forasteros y extranjeros sois para conmigo» (Lv 25:23). El ser humano no es dueño de la creación, sino administrador, un mayordomo que rendirá cuentas. Por eso la ley de Moisés incluía normas de cuidado: dejar descansar la tierra cada siete años, no talar los árboles frutales en la guerra, no destruir un nido entero, dar descanso a los animales el día de reposo.',
        'Proverbios dice que «El justo cuida de la vida de su bestia» (Pr 12:10). La crueldad con los animales es una señal de un corazón impío. Y Dios mismo se preocupa por su creación: al final del libro de Jonás, explica su compasión por Nínive mencionando a sus habitantes y también a sus «muchos animales» (Jon 4:11).',
        { h: 'Dos errores opuestos' },
        'Hay dos maneras de equivocarse. La primera es tratar la creación como si fuera solo un recurso para usar y desechar, sin pensar en el Creador ni en las generaciones futuras. Eso contradice el encargo de guardar. La segunda es adorar la naturaleza, tratándola como si fuera divina o como si el ser humano fuera un intruso en ella. Pablo describe ese error: «honrando y dando culto a las criaturas antes que al Creador» (Ro 1:25). La Biblia ama la creación porque ama a su Creador, y pone al ser humano en el centro, no como tirano, sino como siervo responsable.',
        { h: 'Una tarea práctica' },
        'Cuidar la creación incluye cosas sencillas: no derrochar el agua ni la comida, no ensuciar los lugares públicos, tratar bien a los animales, plantar y cuidar, y apoyar decisiones que protejan la tierra y a las personas pobres que más sufren cuando se daña. Apocalipsis advierte que, en el juicio, Dios destruirá «a los que destruyen la tierra» (Ap 11:18). El creyente cuida la tierra no porque sea su dios, sino porque es la obra de su Dios.'
      ],
      pensar: 'La tierra es de Jehová y tú eres su mayordomo. ¿Qué hábito de tu casa o de tu trabajo podrías cambiar esta semana para cuidar mejor lo que Dios creó?'
    },
    {
      id: 'gime', n: 'La creación que gime', ref: 'Romanos 8:18-25; Génesis 3:17-19; Isaías 11:6-9',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pues tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse. Porque el anhelo ardiente de la creación es el aguardar la manifestación de los hijos de Dios. Porque la creación fue sujetada a vanidad, no por su propia voluntad, sino por causa del que la sujetó en esperanza; porque también la creación misma será libertada de la esclavitud de corrupción, a la libertad gloriosa de los hijos de Dios. Porque sabemos que toda la creación gime a una, y a una está con dolores de parto hasta ahora; y no sólo ella, sino que también nosotros mismos, que tenemos las primicias del Espíritu, nosotros también gemimos dentro de nosotros mismos, esperando la adopción, la redención de nuestro cuerpo.', ref: 'Romanos 8:18-23' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres gemidos en Romanos 8',
          cab: ['Quién gime', 'Por qué', 'Texto'],
          filas: [
            ['La creación', 'Está sujeta a corrupción y espera ser libertada', 'Ro 8:20-22'],
            ['Los creyentes', 'Esperan la redención de su cuerpo', 'Ro 8:23'],
            ['El Espíritu Santo', 'Intercede por nosotros con gemidos indecibles', 'Ro 8:26'],
          ],
          nota: 'Los tres gemidos son como dolores de parto: anuncian que algo nuevo va a nacer.'
        } }
      ],
      texto: [
        'Si Dios creó todo «bueno en gran manera», ¿por qué hay terremotos, sequías, enfermedades y muerte? Pablo responde en Romanos 8 con una imagen poderosa: la creación entera está gimiendo.',
        { h: 'Sujeta a vanidad' },
        '«Porque la creación fue sujetada a vanidad, no por su propia voluntad, sino por causa del que la sujetó en esperanza» (Ro 8:20). La palabra «vanidad» significa frustración, incapacidad de cumplir plenamente su propósito. Cuando el ser humano pecó, Dios sometió la creación a esa condición: «maldita será la tierra por tu causa» (Gn 3:17). La creación no pecó; sufre las consecuencias del pecado de quien debía cuidarla. El mundo actual es bueno, pero está herido.',
        { h: 'Dolores de parto' },
        'Pero el gemido de la creación no es el de un moribundo, sino el de una mujer que va a dar a luz: «toda la creación gime a una, y a una está con dolores de parto hasta ahora» (Ro 8:22). Los dolores de parto son reales y duelen, pero anuncian una vida nueva. La creación fue sujetada «en esperanza»: Dios no la abandonó, sino que la puso en espera de su liberación.',
        { h: 'Esperando con nosotros' },
        'Lo sorprendente es que la creación espera lo mismo que los creyentes: «el anhelo ardiente de la creación es el aguardar la manifestación de los hijos de Dios» (Ro 8:19). Su liberación está unida a la nuestra. Cuando Cristo vuelva y los creyentes reciban cuerpos glorificados, la creación también será libertada «de la esclavitud de corrupción, a la libertad gloriosa de los hijos de Dios» (Ro 8:21). La salvación que Dios prepara no es solo para las almas, sino para los cuerpos y para la tierra.',
        'La tabla muestra que en Romanos 8 hay tres gemidos: el de la creación, el de los creyentes y el del Espíritu Santo, que intercede por nosotros. Los creyentes «tenemos las primicias del Espíritu» (Ro 8:23): la vida nueva que el Espíritu ya nos da es como el primer fruto de la cosecha, la garantía de que vendrá el resto.',
        { h: 'Un anticipo en el reino' },
        'Los profetas anunciaron un tiempo en que «Morará el lobo con el cordero» y «No harán mal ni dañarán en todo mi santo monte» (Is 11:6, 9). En la lectura premilenial que sigue este sitio, estas promesas se cumplirán en el reino de Cristo sobre la tierra, el milenio, como un anticipo de la renovación total. Y después vendrán los cielos nuevos y la tierra nueva.',
        { ir: { t: 'Ver «El milenio» en Los últimos tiempos', a: '../../escatologia/#eventos/20' } }
      ],
      pensar: 'Pablo dice que las aflicciones de este tiempo no son comparables con la gloria que vendrá (Ro 8:18). ¿Qué dolor de tu vida necesitas mirar como un «dolor de parto» y no como un final?'
    },
    {
      id: 'nueva', n: 'Cielos nuevos y tierra nueva', ref: 'Isaías 65:17-25; 2 Pedro 3:10-13; Apocalipsis 21:1-5; 22:1-5',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../escatologia/img/esc-nueva-jerusalen.webp', alt: 'La nueva Jerusalén desciende del cielo, una ciudad resplandeciente como piedra de jaspe, con muros de piedras preciosas, doce puertas de perla y calles de oro transparente como vidrio, sobre una tierra nueva llena de luz', pie: '«Vi un cielo nuevo y una tierra nueva» (Apocalipsis 21:1).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-genesis-apocalipsis.svg', alt: 'Dos columnas enfrentadas: a la izquierda Génesis 1 a 3, a la derecha Apocalipsis 21 y 22. La creación de los cielos y la tierra frente a los cielos nuevos y la tierra nueva; las tinieblas y la luz del sol frente a una ciudad sin noche; el río del Edén frente al río de agua de vida; el árbol de vida prohibido frente al árbol de vida para las naciones; la maldición frente a «no habrá más maldición»; Dios que se pasea en el huerto frente al tabernáculo de Dios con los hombres', pie: 'El final de la Biblia responde a su comienzo: lo que se perdió en el Edén se recupera, y más.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Vi un cielo nuevo y una tierra nueva; porque el primer cielo y la primera tierra pasaron, y el mar ya no existía más. Y yo Juan vi la santa ciudad, la nueva Jerusalén, descender del cielo, de Dios, dispuesta como una esposa ataviada para su marido. Y oí una gran voz del cielo que decía: He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios. Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron. Y el que estaba sentado en el trono dijo: He aquí, yo hago nuevas todas las cosas. Y me dijo: Escribe; porque estas palabras son fieles y verdaderas.', ref: 'Apocalipsis 21:1-5' }
      ],
      texto: [
        'La historia de la Biblia comienza con «En el principio creó Dios los cielos y la tierra» (Gn 1:1) y termina con «Vi un cielo nuevo y una tierra nueva» (Ap 21:1). Entre esas dos frases está toda la historia de la salvación. El Dios que creó el mundo no lo abandonará al pecado: lo hará nuevo.',
        { h: 'Lo que Isaías anunció' },
        'Isaías ya lo había prometido: «Porque he aquí que yo crearé nuevos cielos y nueva tierra; y de lo primero no habrá memoria» (Is 65:17). Pedro lo repite: «nosotros esperamos, según sus promesas, cielos nuevos y tierra nueva, en los cuales mora la justicia» (2 P 3:13). Pedro describe un fuego que purificará la creación, como el diluvio la limpió en el pasado (2 P 3:6-7, 10). Los intérpretes discuten si la creación actual será destruida y reemplazada, o purificada y renovada; en los dos casos, lo que vendrá será una tierra real, no un mundo de espíritus sin cuerpo.',
        { h: 'Génesis y Apocalipsis' },
        'El esquema compara los primeros capítulos de la Biblia con los últimos. En el Edén había un río; en la nueva Jerusalén, «un río limpio de agua de vida» que sale del trono de Dios y del Cordero (Ap 22:1). En el Edén, el árbol de vida quedó custodiado por querubines; en la ciudad de Dios, el árbol de vida da fruto cada mes, y sus hojas son «para la sanidad de las naciones» (Ap 22:2). En el Edén cayó una maldición; en la nueva creación «no habrá más maldición» (Ap 22:3). En el principio, Dios creó la luz; al final, la ciudad no necesita sol, porque Dios la ilumina (Ap 22:5).',
        { h: 'Más que el Edén' },
        'La nueva creación no es un simple regreso al principio. El Edén era un huerto; la nueva Jerusalén es una ciudad-jardín, con gente de todas las naciones. En el Edén, Dios visitaba al ser humano; en la nueva creación, «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos» (Ap 21:3). Adán podía caer; los redimidos estarán para siempre con el Señor. Y en el centro de todo no está un árbol, sino el Cordero que fue inmolado. El que hizo todas las cosas dice: «He aquí, yo hago nuevas todas las cosas» (Ap 21:5).',
        { ir: { t: 'Ver «Cielos nuevos y tierra nueva» en Los últimos tiempos', a: '../../escatologia/#eventos/22' } }
      ],
      pensar: 'Dios enjugará toda lágrima y hará nuevas todas las cosas. ¿Qué lágrima tuya espera ese día? ¿Cómo cambia tu presente saber cómo termina la historia?'
    },
    {
      id: 'adorar', n: 'Adorar al Creador', ref: 'Apocalipsis 4:11; 14:7; Salmos 148; Nehemías 9:6; Romanos 11:36',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Alabad a Jehová desde los cielos; Alabadle en las alturas. Alabadle, vosotros todos sus ángeles; Alabadle, vosotros todos sus ejércitos. Alabadle, sol y luna; Alabadle, vosotras todas, lucientes estrellas. Alabadle, cielos de los cielos, Y las aguas que están sobre los cielos. Alaben el nombre de Jehová; Porque él mandó, y fueron creados.', ref: 'Salmos 148:1-5' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Repaso: Génesis 1 a 11 en ocho verdades',
          cab: ['Verdad', 'Texto clave'],
          filas: [
            ['Dios creó todo de la nada por su palabra', 'Gn 1:1; He 11:3'],
            ['El Padre, el Hijo y el Espíritu crearon juntos', 'Gn 1:2; Jn 1:3'],
            ['La creación es buena y ordenada', 'Gn 1:31'],
            ['El ser humano es imagen de Dios, varón y hembra', 'Gn 1:27; 2:7'],
            ['El pecado trajo la muerte y la maldición', 'Gn 3; Ro 5:12'],
            ['Dios juzga el pecado y salva por gracia', 'Gn 6:8; 1 P 3:20'],
            ['Todas las naciones son una sola familia', 'Gn 10; Hch 17:26'],
            ['Dios prometió bendecir a todas las familias por Abraham', 'Gn 12:3; Ga 3:8'],
          ],
          nota: 'Sobre estas verdades se construye el resto de la Biblia.'
        } }
      ],
      texto: [
        'Este recurso comenzó con los ancianos que adoran ante el trono de Dios porque Él creó todas las cosas (Ap 4:11). Termina igual. La doctrina de la creación no es solo un tema para estudiar o discutir: es un motivo para adorar.',
        { h: 'Toda la creación alaba' },
        'El Salmo 148 llama a toda la creación a alabar a Dios: los ángeles, el sol y la luna, las estrellas, los cielos de los cielos y las aguas que están sobre ellos. Luego desciende a la tierra: los monstruos marinos, el fuego y el granizo, los montes, los árboles, las bestias, las aves, los reyes, los jóvenes, las doncellas, los ancianos y los niños. La razón es la misma para todos: «Alaben el nombre de Jehová; Porque él mandó, y fueron creados» (Sal 148:5). La creación entera es un coro, y el ser humano está llamado a ponerle palabras.',
        { h: 'El evangelio eterno' },
        'En Apocalipsis, un ángel anuncia «el evangelio eterno» a toda nación, tribu, lengua y pueblo, y su mensaje empieza por la creación: «Temed a Dios, y dadle gloria… y adorad a aquel que hizo el cielo y la tierra, el mar y las fuentes de las aguas» (Ap 14:7). Hasta el final de la historia, reconocer al Creador es el primer paso para volver a Dios.',
        { h: 'Lo que aprendiste' },
        'La tabla resume las verdades principales de Génesis 1 a 11. Dios creó todo de la nada, por su palabra, como obra del Padre, del Hijo y del Espíritu. La creación es buena y ordenada. El ser humano fue creado a imagen de Dios, varón y hembra, del polvo y con el aliento de Dios. El pecado trajo muerte y maldición, y se extendió de un fruto a un asesinato, de un asesinato a una tierra llena de violencia, y de allí a una humanidad unida contra Dios. Dios juzgó con el diluvio y dispersó en Babel, pero siempre con gracia: la promesa a Eva, la señal de Caín, el arca de Noé, el arco iris y, al final, el llamado de Abraham. Los creyentes leen de distintas maneras los días de Génesis 1, pero todos confiesan al mismo Creador.',
        'Y todo apunta a Cristo: el Verbo por quien todo fue hecho, el postrer Adán, el descendiente de la mujer, el arca de salvación, el Señor del Pentecostés y el que hará nuevas todas las cosas. «Porque de él, y por él, y para él, son todas las cosas. A él sea la gloria por los siglos. Amén» (Ro 11:36).',
        { ejercicio: {
          pregunta: '¿Cuál es el hilo que une la creación, el diluvio, Babel y el llamado de Abraham en Génesis 1 a 12?',
          opciones: [
            { t: 'Que Dios, el Creador, juzga el pecado pero sigue obrando con gracia para cumplir su propósito de bendecir a la humanidad.', ok: true, por_que: 'Correcto: en cada juicio hay una gracia, y todo lleva a la promesa de bendición para todas las familias de la tierra.' },
            { t: 'Que la humanidad se fue haciendo cada vez mejor gracias a sus inventos.', ok: false, por_que: 'Génesis muestra lo contrario: el progreso técnico no impidió que el pecado se extendiera.' },
            { t: 'Que Dios abandonó a la humanidad después de la caída y solo se ocupó de Israel.', ok: false, por_que: 'Dios cuidó a toda la humanidad (Noé, el pacto con toda carne) y eligió a Abraham para bendecir a todas las naciones.' }
          ],
          explicacion: 'Génesis 1 a 11 es la historia de un Creador fiel que no abandona su obra.'
        } }
      ],
      pensar: 'Si toda la creación alaba a Dios, ¿qué te impide hoy unirte a ese coro? Sal esta noche, mira el cielo y dale gracias por algo que Él creó.'
    }
  ];

  const C = window.__CREACION;
  delete window.__CREACION;
  window.RUTA_DATA = {
    titulo: 'La creación y los orígenes',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'creador', grupo: 'El Creador y su obra', n: 'I. Dios, el Creador', info: 'Creación de la nada, el Dios trino, el propósito de la creación y los mitos vecinos', estaciones: C.creador },
      { id: 'dias', grupo: 'El Creador y su obra', n: 'II. Los seis días y el reposo', info: 'Formar y llenar, día por día, el ser humano y el séptimo día', estaciones: C.dias },
      { id: 'leer', grupo: 'El Creador y su obra', n: 'III. Cómo leer Génesis 1', info: 'Los días y la edad de la tierra: cinco lecturas, la evolución y un taller', estaciones: C.leer },
      { id: 'eden', grupo: 'De la creación a Babel', n: 'IV. El Edén y la primera pareja', info: 'Del polvo y el aliento, el huerto, el trabajo, la mujer, el matrimonio y la caída', estaciones: C.eden },
      { id: 'cain', grupo: 'De la creación a Babel', n: 'V. De Caín a Noé', info: 'Caín y Abel, los dos linajes, las genealogías, Enoc y los hijos de Dios', estaciones: C.cain },
      { id: 'diluvio', grupo: 'De la creación a Babel', n: 'VI. El diluvio', info: 'El arca, el año del diluvio, universal o local, otros relatos, Ararat y el pacto', estaciones: C.diluvio },
      { id: 'babel', grupo: 'De la creación a Babel', n: 'VII. Babel y las naciones', info: 'Los hijos de Noé, la tabla de las naciones, Nimrod, la torre, Pentecostés y Abraham', estaciones: C.babel },
      { id: 'esperanza', grupo: 'Creación y esperanza', n: 'VIII. Creación y esperanza', info: 'Fe y ciencia, el cuidado de la creación, la creación que gime y la nueva creación', estaciones: esperanza }
    ]
  };
})();
