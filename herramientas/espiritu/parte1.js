/* ==========================================================
   Recursos Bíblicos — El Espíritu Santo · contenido de las rutas
   FUENTE de public/apps/espiritu-santo/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/espiritu_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica.
   Coordinación con otros recursos:
   - La divinidad del Espíritu dentro de la Trinidad está resumida en Dios y la Trinidad (IV.6):
     aquí se desarrolla y se enlaza.
   - Los cinco relatos de Hechos tienen su ruta en Hechos («El Espíritu Santo en Hechos»):
     aquí se resumen para la doctrina y se enlazan.
   - La historia del movimiento pentecostal y las manifestaciones extrañas están en
     El movimiento pentecostal; los desvíos de hoy irán en Falsas doctrinas y desvíos de hoy,
     en preparación.
   ========================================================== */
(() => {
  const ORIENTE = [[29.5, 22], [42.5, 40]]; // Egipto, Asia Menor y Siria
  const IMP = ['roma-117'];

  /* ---------------- I. Quién es el Espíritu Santo ---------------- */
  const quien = [
    {
      id: 'panorama', n: 'El Espíritu de Génesis a Apocalipsis', ref: 'Génesis 1:2; Joel 2:28-29; Juan 14:16-17; Hechos 2:1-4; Apocalipsis 22:17',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-panorama.svg', alt: 'Línea que recorre la Biblia: el Espíritu en la creación, sobre algunos en el Antiguo Testamento, prometido por los profetas, sobre Jesús, derramado en Pentecostés y en la iglesia hasta la venida de Cristo', pie: 'El Espíritu Santo actúa en toda la Biblia, pero Pentecostés marca un antes y un después.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/14/16-17', ref: 'Juan 14:16-17' }
      ],
      texto: [
        'La Biblia comienza y termina con el Espíritu de Dios. En el segundo versículo de Génesis, cuando la tierra estaba desordenada y vacía, «el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2). En el último capítulo de Apocalipsis, el Espíritu y la Esposa dicen al mundo: «Ven» (Ap 22:17). Entre esos dos extremos, el Espíritu Santo está presente en cada etapa de la historia de la salvación.',
        { h: 'Una historia en cinco momentos' },
        'El esquema muestra el recorrido. En la creación, el Espíritu da forma y vida. En el Antiguo Testamento viene sobre algunas personas elegidas para una tarea: artesanos, jueces, reyes y profetas. Los profetas anuncian un tiempo nuevo, en que Dios derramará su Espíritu sobre toda carne (Jl 2:28). En la plenitud de los tiempos, el Espíritu viene sobre Jesús sin medida, y Jesús promete enviarlo a los suyos. En Pentecostés la promesa se cumple: el Espíritu es derramado sobre la iglesia, y desde entonces mora en cada creyente y la llena de poder para testificar hasta que Cristo vuelva.',
        { h: 'Por qué estudiar al Espíritu' },
        'A veces se ha llamado al Espíritu Santo la persona olvidada de la Trinidad. Muchos creyentes saben explicar quién es el Padre y quién es el Hijo, pero hablan del Espíritu como de una fuerza o un sentimiento. Sin embargo, Jesús dijo a sus discípulos que les convenía que Él se fuera, porque así vendría el Consolador (Jn 16:7). La vida cristiana no se vive con las fuerzas propias, sino en el Espíritu: nacer de nuevo, orar, entender la Escritura, vencer el pecado, servir con dones y testificar con poder son obra suya.',
        { h: 'Cómo está organizado este recurso' },
        'La ruta I estudia quién es: una persona divina, con nombres, símbolos y un lugar propio en la Trinidad. Las rutas II y III siguen su obra en el Antiguo Testamento y en la vida de Jesús. La ruta IV estudia su obra en la salvación, y la V, el bautismo en el Espíritu Santo, centro de la experiencia pentecostal. La VI trata los dones y la VII, el fruto y la vida en el Espíritu. La VIII lee los textos más discutidos.',
        { ir: { t: 'Ver «El Espíritu Santo es Dios y es persona» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/6' } }
      ],
      pensar: 'Si alguien observara tu vida durante una semana, ¿vería a una persona que depende del Espíritu Santo o a alguien que intenta vivir la fe con sus propias fuerzas?'
    },
    {
      id: 'persona', n: 'Una persona, no una fuerza', ref: 'Juan 14:26; 16:13-14; Hechos 13:2; Romanos 8:26-27; 1 Corintios 2:10-11; 12:11; Efesios 4:30',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que hace una persona',
          cab: ['Rasgo personal', 'Lo que la Biblia dice del Espíritu', 'Texto'],
          filas: [
            ['Piensa y conoce', 'Escudriña lo profundo de Dios y conoce sus cosas', '1 Co 2:10-11'],
            ['Tiene voluntad', 'Reparte los dones como Él quiere', '1 Co 12:11'],
            ['Siente', 'Puede ser contristado (entristecido)', 'Ef 4:30'],
            ['Habla', 'Dijo: «Apartadme a Bernabé y a Saulo»', 'Hch 13:2'],
            ['Enseña y recuerda', 'Enseña todas las cosas y recuerda las palabras de Jesús', 'Jn 14:26'],
            ['Intercede', 'Ruega por los santos con gemidos indecibles', 'Ro 8:26-27'],
            ['Prohíbe y guía', 'No permitió a Pablo ir a Bitinia', 'Hch 16:6-7'],
            ['Se le puede mentir y resistir', 'Ananías le mintió; Israel lo resistió', 'Hch 5:3; 7:51']
          ],
          nota: 'A una fuerza no se le miente, no se la entristece ni toma decisiones.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/16/13-14', ref: 'Juan 16:13-14' }
      ],
      texto: [
        'Muchas personas piensan en el Espíritu Santo como en una energía, una influencia o un poder que sale de Dios, como la electricidad sale de una central. La Biblia no lo presenta así. El Espíritu Santo es alguien, no algo: una persona divina, con inteligencia, sentimientos y voluntad.',
        { h: 'Piensa, siente y decide' },
        'La tabla reúne lo que la Escritura dice que hace el Espíritu. Pablo enseña que el Espíritu todo lo escudriña, «aun lo profundo de Dios» (1 Co 2:10): conoce, y conoce como solo Dios se conoce a sí mismo. Reparte los dones «como él quiere» (1 Co 12:11): tiene voluntad propia. Puede ser entristecido: «no contristéis al Espíritu Santo de Dios» (Ef 4:30). Una fuerza puede gastarse o desviarse, pero no puede ponerse triste.',
        'El Espíritu también habla. En Antioquía, mientras los líderes ministraban al Señor y ayunaban, «dijo el Espíritu Santo: Apartadme a Bernabé y a Saulo para la obra a que los he llamado» (Hch 13:2). Fíjate en los pronombres: «apartadme», «los he llamado». Quien habla se presenta como alguien que llama y envía.',
        { h: '«Él» en el griego de Juan' },
        'En griego, la palabra «espíritu» (pneûma) es de género neutro, y lo normal sería referirse a ella con un pronombre neutro. Pero cuando Jesús habla del Consolador en Juan 14 a 16, el evangelio usa varias veces el pronombre masculino ekeînos, «él»: «él os guiará a toda la verdad… El me glorificará» (Jn 16:13-14). Juan elige la forma personal porque Jesús habla de alguien, no de algo. La palabra Paráklētos, que la RV 1960 traduce «Consolador», es además un título personal: el que es llamado a estar al lado de otro para ayudarlo.',
        { h: 'Por qué importa' },
        'Si el Espíritu fuera una fuerza, el creyente buscaría usarla. Como es una persona, el creyente se relaciona con Él: lo escucha, lo obedece, cuida de no entristecerlo y disfruta de su comunión (2 Co 13:14). La pregunta correcta no es «¿cómo consigo más poder del Espíritu?», sino «¿cómo le dejo más lugar al Espíritu en mi vida?».',
        { ejercicio: {
          pregunta: '¿Cuál de estos datos muestra mejor que el Espíritu Santo es una persona y no una fuerza?',
          opciones: [
            { t: 'Que puede ser entristecido y reparte los dones según su propia voluntad.', ok: true, por_que: 'Sentir y decidir son rasgos de una persona (Ef 4:30; 1 Co 12:11). Una energía no se entristece ni elige.' },
            { t: 'Que se le compara con el viento y con el fuego.', ok: false, por_que: 'Son símbolos que ilustran su obra; no dicen nada sobre si es persona. Jesús también es llamado puerta y luz.' },
            { t: 'Que la palabra hebrea para espíritu también significa aliento.', ok: false, por_que: 'Rúaj significa viento, aliento o espíritu, pero el sentido de una palabra no decide si se habla de una persona.' }
          ],
          explicacion: 'La Escritura atribuye al Espíritu inteligencia, sentimientos y voluntad: es una persona divina.'
        } }
      ],
      pensar: '¿Te relacionas con el Espíritu Santo como con alguien que te conoce, te habla y puede entristecerse, o lo buscas solo cuando necesitas fuerza?'
    },
    {
      id: 'dios', n: 'El Espíritu Santo es Dios', ref: 'Hechos 5:3-4; Salmo 139:7-8; 1 Corintios 2:10-11; 3:16; Hebreos 9:14; Mateo 28:19; 2 Corintios 13:14',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que solo Dios es y hace',
          cab: ['Atributo u obra', 'Dicho del Espíritu', 'Texto'],
          filas: [
            ['Es llamado Dios', 'Mentir al Espíritu Santo es mentir a Dios', 'Hch 5:3-4'],
            ['Eterno', 'El Espíritu eterno', 'He 9:14'],
            ['Presente en todo lugar', '¿A dónde me iré de tu Espíritu?', 'Sal 139:7-8'],
            ['Conoce todo', 'Escudriña aun lo profundo de Dios', '1 Co 2:10-11'],
            ['Todopoderoso', 'El poder del Altísimo te cubrirá', 'Lc 1:35'],
            ['Crea', 'El Espíritu de Dios me hizo', 'Job 33:4; Sal 104:30'],
            ['Da vida y resucita', 'Vivificará también vuestros cuerpos mortales', 'Ro 8:11'],
            ['Inspira la Escritura', 'Los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo', '2 P 1:21'],
            ['Mora como en un templo', 'Sois templo de Dios, y el Espíritu de Dios mora en vosotros', '1 Co 3:16']
          ],
          nota: 'El nombre del Padre, del Hijo y del Espíritu Santo es uno solo (Mt 28:19).'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@hch/5/3-4', ref: 'Hechos 5:3-4' }
      ],
      texto: [
        'Que el Espíritu sea una persona no basta: los ángeles también son personas. La Escritura enseña además que el Espíritu Santo es Dios, igual al Padre y al Hijo, y no una criatura al servicio de Dios.',
        { h: 'Mentir al Espíritu es mentir a Dios' },
        'El texto más directo está en Hechos 5. Ananías vendió una propiedad, se quedó con parte del dinero y fingió entregarlo todo. Pedro le dijo: «¿por qué llenó Satanás tu corazón para que mintieses al Espíritu Santo…?», y un momento después: «No has mentido a los hombres, sino a Dios» (Hch 5:3-4). Para Pedro, mentir al Espíritu Santo y mentir a Dios son la misma cosa.',
        { h: 'Atributos y obras divinas' },
        'La tabla muestra que el Espíritu tiene los atributos que solo Dios tiene. Es eterno: Cristo se ofreció «mediante el Espíritu eterno» (He 9:14). Está en todas partes: David pregunta a dónde podría huir de su Espíritu, y responde que no hay lugar, ni en los cielos ni en el Seol (Sal 139:7-8). Conoce todo: nadie conoce las cosas de Dios sino el Espíritu de Dios (1 Co 2:11), de modo que su conocimiento es tan grande como el de Dios mismo. Y hace las obras de Dios: crea, da vida, inspira la Escritura y resucita a los muertos.',
        { h: 'Un templo para Dios' },
        'Pablo dice a los corintios: «¿No sabéis que sois templo de Dios, y que el Espíritu de Dios mora en vosotros?» (1 Co 3:16). En la Biblia, el templo es la casa de Dios. Si el creyente es templo porque el Espíritu habita en él, el Espíritu es Dios. Por eso Pablo advierte contra la inmoralidad: el cuerpo es templo del Espíritu Santo (1 Co 6:19).',
        { h: 'En un mismo nombre' },
        'Jesús mandó bautizar «en el nombre del Padre, y del Hijo, y del Espíritu Santo» (Mt 28:19). No dice «en los nombres», sino «en el nombre», y pone al Espíritu al mismo nivel que el Padre y el Hijo. La bendición de 2 Corintios 13:14 hace lo mismo. Nadie pondría a una criatura en esa lista. El recurso Dios y la Trinidad estudia cómo las tres personas son un solo Dios.',
        { ir: { t: 'Ver «Un solo Dios en tres personas» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/1' } },
        { ejercicio: {
          pregunta: '¿Qué muestra Hechos 5:3-4 sobre el Espíritu Santo?',
          opciones: [
            { t: 'Que es Dios, porque mentirle a Él es mentir a Dios.', ok: true, por_que: 'Pedro dice primero que Ananías mintió al Espíritu Santo y luego que mintió a Dios: los identifica.' },
            { t: 'Que es un ángel enviado por Dios para vigilar a la iglesia.', ok: false, por_que: 'El texto no habla de un ángel; Pedro iguala al Espíritu con Dios mismo.' },
            { t: 'Que es el poder de Pedro para descubrir pecados ocultos.', ok: false, por_que: 'Pedro dice que la mentira fue contra el Espíritu, no contra él ni contra su don.' }
          ],
          explicacion: 'El Espíritu Santo es Dios: tiene sus atributos, hace sus obras y comparte su nombre con el Padre y el Hijo.'
        } }
      ],
      pensar: 'Si tu cuerpo es templo del Espíritu Santo, el Dios eterno vive en ti. ¿Qué cambiaría en tu manera de hablar, de mirar y de vivir si lo recordaras cada mañana?'
    },
    {
      id: 'trinidad', n: 'Su lugar en la Trinidad', ref: 'Juan 14:16, 26; 15:26; 16:7; Gálatas 4:6; Romanos 8:9; Hechos 2:33',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-procede.svg', alt: 'Esquema con el Padre, el Hijo y el Espíritu Santo: el Padre envía al Espíritu en nombre del Hijo, el Hijo lo envía de parte del Padre, y el Espíritu glorifica al Hijo y da testimonio de él', pie: 'El Padre y el Hijo envían al Espíritu; el Espíritu glorifica al Hijo y nos lleva al Padre.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/15/26', ref: 'Juan 15:26' }
      ],
      texto: [
        'El Espíritu Santo es Dios, igual al Padre y al Hijo. Pero no es el Padre ni el Hijo: es una persona distinta, con un lugar propio en la vida de la Trinidad y en la obra de salvación.',
        { h: 'Enviado por el Padre y por el Hijo' },
        'En el aposento alto, Jesús habló del Espíritu con dos expresiones que se complementan. Por un lado, el Padre lo enviará: «el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre» (Jn 14:26). Por otro, el Hijo lo enviará: «el Consolador, a quien yo os enviaré del Padre» (Jn 15:26). En Pentecostés, Pedro lo explica así: Jesús, exaltado a la diestra de Dios, recibió del Padre la promesa del Espíritu y lo derramó (Hch 2:33). El Padre da, el Hijo derrama y el Espíritu viene.',
        { h: 'El Espíritu del Padre y el Espíritu de Cristo' },
        'Por eso el Nuevo Testamento lo llama tanto Espíritu de Dios como Espíritu de Cristo. Pablo los usa juntos: «vosotros no vivís según la carne, sino según el Espíritu, si es que el Espíritu de Dios mora en vosotros. Y si alguno no tiene el Espíritu de Cristo, no es de él» (Ro 8:9). Y en Gálatas: «Dios envió a vuestros corazones el Espíritu de su Hijo» (Gá 4:6). No son dos espíritus, sino uno, que pertenece al Padre y al Hijo.',
        { h: 'Su obra propia: glorificar a Cristo' },
        'El Espíritu no llama la atención sobre sí mismo. Jesús dijo: «El me glorificará; porque tomará de lo mío, y os lo hará saber» (Jn 16:14). Su ministerio es como el de un foco que ilumina a otro: muestra a Cristo, lo hace presente y nos une a Él. Por eso, una enseñanza o una experiencia que aparta la mirada de Cristo para ponerla en manifestaciones, personas o sensaciones no viene del Espíritu.',
        { posturas: {
          titulo: '¿Procede del Padre, o del Padre y del Hijo?',
          a: { n: 'Del Padre y del Hijo (Filioque)', t: 'Las iglesias de Occidente, católicas y protestantes, confiesan que el Espíritu procede «del Padre y del Hijo». La palabra latina Filioque («y del Hijo») se agregó al Credo Niceno-Constantinopolitano en España en el siglo VI y Roma la adoptó en 1014. Se apoyan en que el Hijo envía al Espíritu y en que este es llamado Espíritu de Cristo.' },
          b: { n: 'Del Padre (por medio del Hijo)', t: 'Las iglesias ortodoxas mantienen el texto original del credo del 381: el Espíritu «procede del Padre», como dice Juan 15:26. Aceptan que el Hijo envía al Espíritu en el tiempo, pero sostienen que en la eternidad el Padre es su única fuente. La disputa contribuyó a la separación de 1054.' },
          c: 'Las dos tradiciones confiesan que el Espíritu es Dios, igual al Padre y al Hijo, y que el Hijo lo envía a la iglesia. La diferencia es sobre la relación eterna dentro de la Trinidad, un misterio sobre el que la Escritura dice poco. Las iglesias evangélicas, incluidas las pentecostales, usan por lo general la forma occidental, sin hacer de ella una prueba de fe.'
        } }
      ],
      pensar: 'Si la obra del Espíritu es glorificar a Cristo, ¿qué lugar ocupa Jesús en tu oración, tu alabanza y tu testimonio cuando dices que estás lleno del Espíritu?'
    },
    {
      id: 'nombres', n: 'Nombres y títulos', ref: 'Juan 14:16-17; Romanos 1:4; 8:2, 9, 15; Hebreos 10:29; Isaías 11:2; Efesios 1:13',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los nombres del Espíritu y lo que enseñan',
          cab: ['Nombre', 'Texto', 'Lo que enseña'],
          filas: [
            ['Espíritu Santo', 'Lc 11:13; Ef 4:30', 'Es santo y santifica'],
            ['Espíritu de Dios, de Jehová', 'Gn 1:2; Jue 6:34', 'Pertenece a Dios y es Dios'],
            ['Espíritu de Cristo, de su Hijo', 'Ro 8:9; Gá 4:6', 'Es enviado por Cristo y lo revela'],
            ['Consolador', 'Jn 14:16, 26', 'Está a nuestro lado para ayudar, defender y animar'],
            ['Espíritu de verdad', 'Jn 14:17; 16:13', 'Guía a toda la verdad e inspira la Escritura'],
            ['Espíritu de vida', 'Ro 8:2', 'Da la vida nueva y resucitará el cuerpo'],
            ['Espíritu de adopción', 'Ro 8:15', 'Nos hace clamar «¡Abba, Padre!»'],
            ['Espíritu de gracia', 'He 10:29; Zac 12:10', 'Trae el favor inmerecido de Dios'],
            ['Espíritu de santidad', 'Ro 1:4', 'Obró en la resurrección de Cristo'],
            ['Espíritu de sabiduría y de inteligencia', 'Is 11:2; Ef 1:17', 'Da entendimiento de Dios y de su voluntad'],
            ['Espíritu de la promesa', 'Ef 1:13; Hch 1:4', 'Es el gran don prometido por el Padre'],
            ['Espíritu eterno', 'He 9:14', 'No tiene principio ni fin']
          ],
          nota: 'Algunos nombres describen quién es; otros, lo que hace en nosotros.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@is/11/2', ref: 'Isaías 11:2' }
      ],
      texto: [
        'En la Biblia, el nombre de una persona dice algo de quién es. El Espíritu Santo recibe muchos nombres y títulos, y cada uno revela un aspecto de su persona o de su obra. La tabla reúne los principales.',
        { h: 'Santo' },
        'El nombre más frecuente es Espíritu Santo. En el Antiguo Testamento aparece pocas veces (Sal 51:11; Is 63:10-11), pero en el Nuevo se vuelve habitual. Que sea llamado santo no significa que el Padre y el Hijo no lo sean, sino que su obra propia es santificar: apartar para Dios y transformar a los creyentes a la imagen de Cristo.',
        { h: 'El Consolador' },
        'Jesús le dio un título especial: «otro Consolador» (Jn 14:16). La palabra griega Paráklētos designaba a alguien llamado a estar al lado de otro para ayudarlo, como un abogado defensor, un consejero o un amigo que anima. Por eso algunas versiones traducen «Abogado», «Ayudador» o «Defensor». Juan usa la misma palabra para Jesús: «abogado tenemos para con el Padre, a Jesucristo el justo» (1 Jn 2:1). Al decir «otro», Jesús indica que el Espíritu será para los discípulos lo que Él había sido: no otro de distinta clase, sino uno igual a Él que no los dejaría.',
        { h: 'De verdad, de vida y de adopción' },
        'Es el Espíritu de verdad, porque guía a toda la verdad y es el autor de la Escritura (Jn 16:13; 2 P 1:21). Es el Espíritu de vida, porque libra de la ley del pecado y de la muerte (Ro 8:2). Y es el Espíritu de adopción: el que nos hace saber que somos hijos de Dios y nos lleva a orar con confianza, «¡Abba, Padre!» (Ro 8:15).',
        { h: 'Los siete espíritus' },
        'Isaías anuncia que sobre el renuevo de Isaí reposará el Espíritu de Jehová, con una lista de seis cualidades (Is 11:2). Apocalipsis habla de «los siete espíritus que están delante de su trono» (Ap 1:4). La mayoría de los intérpretes entiende que no son siete espíritus distintos, sino el único Espíritu Santo en su plenitud, porque siete es el número de lo completo. El saludo de Apocalipsis los pone entre el Padre y Jesucristo, como fuente de gracia y paz.',
        { ejercicio: {
          pregunta: '¿Qué quiere decir Jesús al llamar al Espíritu «otro Consolador»?',
          opciones: [
            { t: 'Que el Espíritu estaría con ellos como Él había estado, a su lado para ayudarlos, y para siempre.', ok: true, por_que: 'Jesús ya era su Paráklētos; el Espíritu ocuparía ese lugar y estaría «para siempre» (Jn 14:16).' },
            { t: 'Que el Espíritu sería un consolador de menor categoría que Jesús.', ok: false, por_que: '«Otro» indica uno igual a Él, no inferior. El Espíritu es Dios como el Hijo.' },
            { t: 'Que el Espíritu solo consuela en momentos de tristeza.', ok: false, por_que: 'Paráklētos incluye consolar, pero también defender, enseñar, recordar y guiar (Jn 14:26; 16:13).' }
          ],
          explicacion: 'El Consolador es el que está a nuestro lado: el Espíritu continúa con los discípulos la presencia de Jesús.'
        } }
      ],
      pensar: '¿Cuál de los nombres del Espíritu necesitas conocer más hoy: Consolador, Espíritu de verdad, de vida o de adopción? ¿Por qué?'
    },
    {
      id: 'simbolos', n: 'Los símbolos del Espíritu', ref: 'Juan 3:8; 7:37-39; Hechos 2:2-3; Mateo 3:16; 1 Juan 2:20, 27; Efesios 1:13-14',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-simbolos.svg', alt: 'Siete recuadros con los símbolos del Espíritu Santo: viento, fuego, agua, aceite, paloma, sello y arras, cada uno con su texto bíblico y lo que enseña', pie: 'Cada símbolo ilustra un aspecto de la obra del Espíritu; ninguno lo describe por completo.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/bautismo-jesus.webp', alt: 'Jesús, de espaldas, sale de las aguas del Jordán mientras una paloma desciende sobre él; Juan el Bautista observa desde la orilla', pie: 'En el Jordán, el Espíritu descendió sobre Jesús «en forma corporal, como paloma» (Lc 3:22).', origen: 'ia' }
      ],
      texto: [
        'Para enseñarnos quién es el Espíritu y qué hace, la Biblia usa imágenes tomadas de la vida diaria. Cada símbolo ilumina un aspecto de su obra. Ninguno lo describe por completo, y ninguno debe hacernos pensar que el Espíritu es una cosa: son comparaciones, como cuando Jesús dice que es la puerta o la vid.',
        { h: 'Viento y aliento' },
        'En hebreo, rúaj significa a la vez viento, aliento y espíritu; en griego, pneûma tiene el mismo triple sentido. Jesús jugó con esa palabra ante Nicodemo: «El viento sopla de donde quiere… así es todo aquel que es nacido del Espíritu» (Jn 3:8). El viento no se ve, pero se ven sus efectos; es libre y poderoso. En Pentecostés vino «un estruendo como de un viento recio que soplaba» (Hch 2:2), y Ezequiel vio cómo el aliento de Dios devolvía la vida a un valle de huesos secos (Ez 37:9-10).',
        { h: 'Fuego' },
        'Juan el Bautista anunció que Jesús bautizaría «en Espíritu Santo y fuego» (Mt 3:11), y en Pentecostés aparecieron «lenguas repartidas, como de fuego» (Hch 2:3). El fuego purifica, ilumina y da calor. Representa la santidad de Dios, que quema la escoria, y el celo que enciende el corazón para servir.',
        { h: 'Agua' },
        'En la fiesta de los tabernáculos, Jesús clamó que de su interior correrían ríos de agua viva, «Esto dijo del Espíritu que habían de recibir los que creyesen en él» (Jn 7:38-39). El agua limpia, refresca y hace fructificar el desierto (Is 44:3).',
        { h: 'Aceite' },
        'Con aceite se ungía a los sacerdotes, los reyes y algunos profetas. Cuando Samuel ungió a David, el Espíritu de Jehová vino sobre él (1 S 16:13). Jesús es el Cristo, es decir, el Ungido, y los creyentes tienen «la unción del Santo» (1 Jn 2:20): el Espíritu los capacita y les enseña.',
        { h: 'Paloma, sello y arras' },
        'En el bautismo de Jesús, el Espíritu descendió como paloma (Lc 3:22): un símbolo de paz, de mansedumbre y, como la paloma de Noé, de un nuevo comienzo. Pablo usa dos imágenes del comercio: el sello, que marca lo que pertenece a alguien y lo protege, y las arras, el primer pago que garantiza el resto. El Espíritu es ambas cosas: «fuisteis sellados con el Espíritu Santo de la promesa, que es las arras de nuestra herencia» (Ef 1:13-14). La ruta IV vuelve sobre ellas.'
      ],
      pensar: '¿Cuál de estos símbolos describe mejor lo que necesitas que el Espíritu haga en ti hoy: el viento que da vida, el fuego que purifica, el agua que refresca o el aceite que capacita?'
    },
    {
      id: 'errores', n: 'Errores sobre el Espíritu', ref: 'Hechos 5:3-4; Juan 14:16-17, 26; Mateo 28:19; 1 Juan 4:1-3',
      fecha: 381,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Hacia el 360, en Egipto y Asia Menor, algunos aceptan que el Hijo es Dios pero niegan que lo sea el Espíritu. Atanasio responde desde Alejandría.', fecha: 360,
            estado: { view: ORIENTE, capas: IMP, lugares: ['alejandria', 'constantinopla', 'cesarea-capadocia'] } },
          { t: '374–375: Basilio de Cesarea escribe su tratado Sobre el Espíritu Santo.', fecha: 375,
            estado: { view: ORIENTE, capas: IMP, lugares: ['cesarea-capadocia', 'constantinopla'] } },
          { t: '381, Constantinopla: el concilio confiesa al Espíritu Santo, «Señor y dador de vida», adorado y glorificado con el Padre y el Hijo.', fecha: 381,
            estado: { view: ORIENTE, capas: IMP, lugares: ['constantinopla', 'nicea', 'alejandria', 'antioquia', 'roma'] } }
        ] },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que se enseña y lo que dice la Escritura',
          cab: ['Enseñanza', 'Quién la sostiene', 'Lo que dice la Biblia'],
          filas: [
            ['El Espíritu es una criatura al servicio de Dios', 'Los pneumatómacos («enemigos del Espíritu»), siglo IV', 'Mentirle es mentir a Dios (Hch 5:3-4); es eterno (He 9:14)'],
            ['El Espíritu es la «fuerza activa» de Dios, no una persona', 'Testigos de Jehová', 'Enseña, habla, decide y puede ser contristado (Jn 14:26; Hch 13:2; Ef 4:30)'],
            ['El Espíritu es el mismo Jesús en otra manifestación', 'Pentecostales unicitarios', 'Jesús ruega al Padre que envíe «otro Consolador» (Jn 14:16)'],
            ['El Espíritu Santo es una influencia o una energía', 'Movimientos de la Nueva Era y espiritualidades difusas', 'Es Dios, con nombre propio junto al Padre y al Hijo (Mt 28:19)']
          ],
          nota: 'Las doctrinas de cada grupo se describen según sus publicaciones oficiales, con respeto por sus miembros.'
        } }
      ],
      texto: [
        'A lo largo de la historia, la doctrina del Espíritu Santo se ha negado o deformado de distintas maneras. Conocer esos errores ayuda a valorar lo que enseña la Escritura y a dialogar con respeto con quienes creen distinto.',
        { h: 'Los enemigos del Espíritu' },
        'El Concilio de Nicea (325) confesó que el Hijo es Dios, pero sobre el Espíritu solo dijo: «Y en el Espíritu Santo». Poco después aparecieron grupos que aceptaban la divinidad del Hijo, pero enseñaban que el Espíritu era una criatura, superior a los ángeles e inferior a Dios. Sus adversarios los llamaron pneumatómacos, «los que pelean contra el Espíritu». Atanasio les respondió que, si el Espíritu nos santifica y nos une a Dios, tiene que ser Dios: una criatura no puede divinizar a otra. Basilio de Cesarea escribió Sobre el Espíritu Santo, y Gregorio Nacianceno predicó sobre su divinidad. El Concilio de Constantinopla (381) completó el credo: el Espíritu es «Señor y dador de vida», «que con el Padre y el Hijo juntamente es adorado y glorificado». El mapa sigue ese recorrido.',
        { h: 'Errores de hoy' },
        'Los Testigos de Jehová enseñan, en sus publicaciones, que el espíritu santo (con minúsculas) no es una persona, sino la fuerza activa de Dios, como la electricidad. La tabla muestra los textos que lo contradicen: una fuerza no enseña, no habla en primera persona ni se entristece.',
        'Los pentecostales unicitarios, también llamados de «solo Jesús», creen que el Espíritu Santo es Dios, pero niegan que sea una persona distinta del Padre y del Hijo: para ellos, Padre, Hijo y Espíritu son tres manifestaciones o títulos de una sola persona, Jesús. Comparten muchas prácticas con los pentecostales trinitarios, y por eso conviene conocer la diferencia. Jesús habla del Espíritu como de «otro» al que el Padre enviará a petición del Hijo (Jn 14:16), y el Espíritu glorifica al Hijo, no a sí mismo (Jn 16:14).',
        'Por último, muchas espiritualidades de hoy hablan de «energía», «espíritu» o «presencia» sin referirse al Dios de la Biblia. El Espíritu Santo no es una fuerza que se pueda manejar ni una sensación que se pueda producir, sino Dios mismo.',
        { ir: { t: 'Ver «Constantinopla y los credos» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#historia/3' } },
        { ejercicio: {
          pregunta: '¿Qué texto responde mejor a quien dice que el Espíritu Santo es solo Jesús en otra forma?',
          opciones: [
            { t: 'Que Jesús ruega al Padre que envíe «otro Consolador».', ok: true, por_que: 'En Juan 14:16 aparecen tres personas: el Hijo que ruega, el Padre que da y el Consolador que es enviado.' },
            { t: 'Que el Espíritu es llamado «Espíritu de Cristo».', ok: false, por_que: 'Ese nombre indica que el Espíritu pertenece a Cristo y es enviado por Él (Ro 8:9), no que sea la misma persona.' },
            { t: 'Que el Espíritu descendió como paloma.', ok: false, por_que: 'Es un símbolo. Lo que sí muestra el bautismo es que el Hijo, el Padre y el Espíritu actúan a la vez (Lc 3:21-22).' }
          ],
          explicacion: 'El Espíritu Santo es Dios y es una persona distinta del Padre y del Hijo.'
        } }
      ],
      pensar: 'Los creyentes del siglo IV defendieron la divinidad del Espíritu porque sabían que solo Dios puede santificar. ¿Qué tan importante es para ti que quien vive en ti sea Dios mismo y no una simple fuerza?'
    }
  ];

  /* ---------------- II. El Espíritu en el Antiguo Testamento ---------------- */
  const at = [
    {
      id: 'creacion', n: 'El Espíritu en la creación', ref: 'Génesis 1:2; 2:7; Job 26:13; 33:4; Salmo 33:6; 104:29-30',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-creacion-aguas.webp', alt: 'Un océano oscuro y sin orillas bajo un cielo cubierto, con una brisa que riza la superficie del agua y un primer resplandor de luz en el horizonte', pie: '«El Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/104/27-30', ref: 'Salmo 104:27-30' }
      ],
      texto: [
        'La primera mención del Espíritu en la Biblia está en el segundo versículo: «Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas» (Gn 1:2). Antes de que Dios dijera «Sea la luz», el Espíritu ya estaba allí.',
        { h: 'Como un ave sobre el nido' },
        'El verbo hebreo que la RV 1960 traduce «se movía» (merajéfet) aparece también en Deuteronomio 32:11, donde el águila «revolotea sobre sus pollos». La imagen es la de un ave que cubre y cuida, lista para dar vida. La creación no salió de Dios por accidente: el Espíritu estaba presente, preparando el mundo para ordenarlo y llenarlo. Lo que estaba desordenado y vacío se convirtió, en seis días, en un mundo ordenado y lleno de vida.',
        { h: 'La palabra y el aliento' },
        'El Salmo 33 une las dos acciones: «Por la palabra de Jehová fueron hechos los cielos, Y todo el ejército de ellos por el aliento de su boca» (Sal 33:6). En hebreo, «aliento» es rúaj, la misma palabra que «espíritu». Dios crea por su Palabra y por su Espíritu: el Nuevo Testamento revelará que la Palabra es el Hijo (Jn 1:1-3). Desde el principio, el Padre, el Hijo y el Espíritu actúan juntos.',
        { h: 'Dador de vida' },
        'Cuando Dios formó al hombre del polvo, sopló en su nariz aliento de vida, «y fue el hombre un ser viviente» (Gn 2:7). Eliú lo resume: «El espíritu de Dios me hizo, Y el soplo del Omnipotente me dio vida» (Job 33:4). El Salmo 104 va más allá de la creación inicial: cada ser vivo depende del Espíritu en cada momento. Si Dios quita su aliento, los animales mueren y vuelven al polvo; si envía su Espíritu, son creados y la faz de la tierra se renueva (Sal 104:29-30).',
        'Por eso el credo de Constantinopla llama al Espíritu «dador de vida». Esa misma obra se verá en la nueva creación: el Espíritu que dio vida al primer hombre da vida nueva al creyente (Jn 3:5-6) y un día resucitará los cuerpos de los que son de Cristo (Ro 8:11).',
        { ir: { t: 'Ver «Las tres personas juntas» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/3' } }
      ],
      pensar: 'El mismo Espíritu que puso orden en el caos y llenó de vida la tierra vacía quiere obrar en tu vida. ¿Qué área desordenada o vacía necesitas entregarle hoy?'
    },
    {
      id: 'capacita', n: 'Artesanos, ancianos y jueces', ref: 'Éxodo 31:1-6; 35:30-35; Números 11:16-29; Jueces 3:10; 6:34; 11:29; 14:6; 15:14; 16:20',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-bezaleel.webp', alt: 'Bezaleel, artesano de barba oscura con delantal de cuero, martilla con cuidado una lámina de oro en un taller de tienda en el desierto, rodeado de ayudantes que trabajan madera de acacia y telas teñidas', pie: 'Bezaleel, lleno «del Espíritu de Dios, en sabiduría y en inteligencia» (Éx 31:3), dirigió la construcción del tabernáculo.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Espíritu viene sobre personas para una tarea',
          cab: ['Persona', 'Tarea', 'Texto'],
          filas: [
            ['Bezaleel y Aholiab', 'Construir el tabernáculo con arte y sabiduría', 'Éx 31:1-6'],
            ['Los setenta ancianos', 'Llevar con Moisés la carga del pueblo; profetizaron', 'Nm 11:16-25'],
            ['Josué', 'Guiar a Israel después de Moisés', 'Nm 27:18; Dt 34:9'],
            ['Otoniel', 'Juzgar a Israel y librarlo de Cusan-risataim', 'Jue 3:10'],
            ['Gedeón', 'Convocar al pueblo contra Madián', 'Jue 6:34'],
            ['Jefté', 'Librar a Israel de los amonitas', 'Jue 11:29'],
            ['Sansón', 'Fuerza contra el león y los filisteos', 'Jue 14:6; 15:14']
          ],
          nota: 'En el Antiguo Testamento, el Espíritu viene sobre algunos, para una tarea, y no siempre de forma permanente.'
        } }
      ],
      texto: [
        'En el Antiguo Testamento, el Espíritu de Dios no habita en todo el pueblo, como ocurrirá desde Pentecostés. Viene sobre algunas personas elegidas para capacitarlas para una tarea concreta. La tabla reúne los casos principales.',
        { h: 'El primer lleno del Espíritu' },
        'La primera persona de la que la Biblia dice que fue llena del Espíritu de Dios no fue un profeta ni un rey, sino un artesano. Para construir el tabernáculo, Dios llamó a Bezaleel y dijo: «lo he llenado del Espíritu de Dios, en sabiduría y en inteligencia, en ciencia y en todo arte» (Éx 31:3). Trabajar el oro, tallar piedras y labrar madera fue obra del Espíritu. Además le dio capacidad para enseñar a otros (Éx 35:34). El servicio práctico, hecho para Dios y con excelencia, también es obra del Espíritu.',
        { h: '«Ojalá todo el pueblo fuese profeta»' },
        'Cuando Moisés ya no podía llevar solo la carga del pueblo, Dios tomó del espíritu que estaba en él y lo puso sobre setenta ancianos, que profetizaron (Nm 11:25). Dos de ellos, Eldad y Medad, profetizaron en el campamento, y Josué quiso impedirlo. Moisés respondió con un deseo que parecía imposible: «Ojalá todo el pueblo de Jehová fuese profeta, y que Jehová pusiera su espíritu sobre ellos» (Nm 11:29). Ese deseo se cumpliría en Pentecostés.',
        { h: 'Los jueces' },
        'En el libro de los Jueces, la expresión «el Espíritu de Jehová vino sobre» marca el momento en que Dios levanta a un libertador. Vino sobre Otoniel, y juzgó a Israel (Jue 3:10); sobre Gedeón, que tocó el cuerno y reunió al pueblo (Jue 6:34); sobre Jefté y sobre Sansón, que despedazó a un león sin nada en las manos (Jue 14:6). El Espíritu les dio valor, autoridad y fuerza más allá de sus capacidades.',
        { h: 'Poder no es lo mismo que madurez' },
        'Pero los jueces muestran también que el poder del Espíritu no garantiza un carácter santo. Sansón tuvo una fuerza extraordinaria y una vida desordenada. Al final, tras revelar su secreto a Dalila, dijo: «Esta vez saldré como las otras»; pero no sabía «que Jehová ya se había apartado de él» (Jue 16:20). Los dones pueden coexistir con una vida inmadura, pero no para siempre. La ruta VII estudia el fruto del Espíritu, que es la otra cara del poder.'
      ],
      pensar: 'Bezaleel sirvió a Dios con sus manos, lleno del Espíritu. ¿Qué habilidades que hoy consideras «solo prácticas» podrías poner al servicio de Dios pidiendo la ayuda del Espíritu?'
    },
    {
      id: 'reyes', n: 'Reyes: Saúl y David', ref: '1 Samuel 10:1-10; 11:6; 16:13-14; 2 Samuel 23:1-2; Salmo 51:10-12',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-david-uncion.webp', alt: 'El anciano profeta Samuel derrama aceite de un cuerno sobre la cabeza del joven David, arrodillado, mientras sus hermanos mayores observan junto a un redil en Belén', pie: '«Desde aquel día en adelante el Espíritu de Jehová vino sobre David» (1 S 16:13).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1s/16/13-14', ref: '1 Samuel 16:13-14' }
      ],
      texto: [
        'Con la monarquía, la unción con aceite y el Espíritu de Dios quedan unidos. El rey de Israel era «el ungido de Jehová», y el Espíritu venía sobre él para gobernar al pueblo de Dios. Las historias de los dos primeros reyes muestran lo que eso significaba y lo que se podía perder.',
        { h: 'Saúl: mudado en otro hombre' },
        'Cuando Samuel ungió a Saúl, le anunció: «el Espíritu de Jehová vendrá sobre ti con poder, y profetizarás con ellos, y serás mudado en otro hombre» (1 S 10:6). Así ocurrió: Saúl profetizó con un grupo de profetas, y la gente se preguntaba si también él estaba entre ellos. Poco después, el Espíritu vino sobre él con poder cuando supo que los amonitas amenazaban a Jabes de Galaad, y reunió a Israel para salvar a la ciudad (1 S 11:6).',
        'Pero Saúl desobedeció a Dios una y otra vez, y fue desechado como rey. El texto dice entonces algo terrible: «El Espíritu de Jehová se apartó de Saúl» (1 S 16:14). El hombre que había comenzado tan bien terminó atormentado, celoso y consultando a una adivina.',
        { h: 'David: desde aquel día en adelante' },
        'En el mismo capítulo, Samuel va a Belén y unge al menor de los hijos de Isaí, un pastor de ovejas. «Y desde aquel día en adelante el Espíritu de Jehová vino sobre David» (1 S 16:13). La expresión «desde aquel día en adelante» marca una diferencia con los jueces: el Espíritu permanece sobre David para toda su tarea de rey. Por eso, al final de su vida, David pudo decir que el Espíritu de Jehová había hablado por él (2 S 23:2): muchos de sus salmos son palabra inspirada.',
        { h: '«No quites de mí tu santo Espíritu»' },
        'David también pecó gravemente. Después de su adulterio con Betsabé y el asesinato de Urías, el profeta Natán lo confrontó. En el Salmo 51, David pidió perdón y oró: «No me eches de delante de ti, Y no quites de mí tu santo Espíritu» (Sal 51:11). Había visto lo que le pasó a Saúl. La diferencia entre los dos reyes no fue que uno pecara y el otro no, sino que David se arrepintió de verdad y Saúl no. La ruta VIII estudia si hoy el Espíritu puede apartarse de un creyente.',
        { ir: { t: 'Ver «¿Puede el Espíritu apartarse?» en este recurso', a: '#textos/4' } }
      ],
      pensar: 'Saúl y David recibieron el Espíritu y ambos pecaron. ¿Qué diferencia hay entre el corazón de quien se justifica ante Dios y el de quien se arrepiente de verdad?'
    },
    {
      id: 'profetas', n: 'El Espíritu y los profetas', ref: 'Números 24:2; 2 Samuel 23:2; Nehemías 9:30; Ezequiel 2:2; 11:5; Miqueas 3:8; Zacarías 7:12; 2 Pedro 1:21; 1 Pedro 1:10-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2p/1/19-21', ref: '2 Pedro 1:19-21' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los profetas y el Espíritu',
          cab: ['Profeta', 'Lo que dice', 'Texto'],
          filas: [
            ['David', 'El Espíritu de Jehová ha hablado por mí', '2 S 23:2'],
            ['Ezequiel', 'Entró el Espíritu en mí y me afirmó sobre mis pies', 'Ez 2:2'],
            ['Miqueas', 'Estoy lleno de poder del Espíritu de Jehová', 'Mi 3:8'],
            ['Nehemías (sobre los profetas)', 'Les testificaste con tu Espíritu por medio de tus profetas', 'Neh 9:30'],
            ['Zacarías (sobre los profetas)', 'Las palabras que Jehová enviaba por su Espíritu', 'Zac 7:12'],
            ['Pedro (sobre todos)', 'Hablaron siendo inspirados por el Espíritu Santo', '2 P 1:21']
          ],
          nota: 'El profeta no hablaba por cuenta propia: el Espíritu ponía en su boca la palabra de Dios.'
        } }
      ],
      texto: [
        'La obra más característica del Espíritu en el Antiguo Testamento es la profecía. Los profetas no eran adivinos ni simples comentaristas de su tiempo: eran mensajeros que hablaban de parte de Dios, movidos por su Espíritu.',
        { h: 'Llenos del Espíritu para hablar' },
        'Miqueas se distingue de los falsos profetas, que anunciaban paz a quien les daba de comer: «Mas yo estoy lleno de poder del Espíritu de Jehová, y de juicio y de fuerza, para denunciar a Jacob su rebelión» (Mi 3:8). El Espíritu le daba valor para decir lo que nadie quería oír. Ezequiel cuenta que, cuando Dios le habló, entró en él el Espíritu y lo afirmó sobre sus pies (Ez 2:2). Después del exilio, Nehemías y Zacarías miraban atrás y reconocían que Dios había hablado a Israel por su Espíritu, por medio de los profetas, y que el pueblo no quiso oír (Neh 9:30; Zac 7:12).',
        { h: 'El autor de la Escritura' },
        'El Nuevo Testamento confirma esta obra. Pedro explica que la profecía nunca fue traída por voluntad humana, «sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21). El verbo griego describe a alguien llevado por el viento, como un barco con las velas llenas. Los profetas escribieron con su propio estilo y vocabulario, pero el Espíritu los llevó de modo que lo que escribieron es palabra de Dios. Por eso el Nuevo Testamento cita el Antiguo diciendo: «como dice el Espíritu Santo» (He 3:7). El recurso La Palabra de Dios estudia la inspiración con detalle.',
        { h: 'El Espíritu de Cristo en los profetas' },
        'Pedro agrega algo más: los profetas indagaban qué tiempo indicaba «el Espíritu de Cristo que estaba en ellos», cuando anunciaba los sufrimientos de Cristo y las glorias que vendrían después (1 P 1:10-11). El mismo Espíritu que habló por los profetas es el que hoy ilumina a los creyentes para entender lo que ellos escribieron.',
        { h: 'Un don para pocos' },
        'En el Antiguo Testamento, la profecía era un don que recibían pocas personas. Por eso tenía tanto valor el deseo de Moisés de que todo el pueblo fuera profeta. Los mismos profetas anunciaron que llegaría un día en que eso ocurriría. Ese es el tema de la próxima estación.',
        { ir: { t: 'Ver «Exhalada por Dios» en La Palabra de Dios', a: '../../palabra-de-dios/#inspiracion/1' } }
      ],
      pensar: 'El mismo Espíritu que inspiró a los profetas te ayuda a entender lo que escribieron. ¿Le pides su ayuda antes de abrir la Biblia, o la lees confiando solo en tu propio entendimiento?'
    },
    {
      id: 'promesa', n: 'La promesa del derramamiento', ref: 'Números 11:29; Isaías 32:15; 44:3; Ezequiel 36:26-27; 37:1-14; Joel 2:28-32; Zacarías 12:10',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-valle-huesos.webp', alt: 'El profeta Ezequiel, de pie en un valle desértico cubierto de huesos secos, con la mano extendida, mientras un viento levanta el polvo y los huesos comienzan a juntarse', pie: 'En el valle de los huesos secos, el Espíritu de Dios devuelve la vida a un pueblo muerto (Ez 37:1-14).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jl/2/28-29', ref: 'Joel 2:28-29' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que anunciaron los profetas',
          cab: ['Promesa', 'Texto', 'Lo nuevo'],
          filas: [
            ['Ojalá todo el pueblo fuese profeta', 'Nm 11:29', 'El Espíritu, para todo el pueblo'],
            ['Derramaré mi Espíritu sobre tu generación', 'Is 44:3', 'Como agua sobre tierra seca'],
            ['Pondré dentro de vosotros mi Espíritu', 'Ez 36:26-27', 'Un corazón nuevo y obediencia desde adentro'],
            ['Pondré mi Espíritu en vosotros, y viviréis', 'Ez 37:14', 'Vida a un pueblo muerto'],
            ['Derramaré mi Espíritu sobre toda carne', 'Jl 2:28-29', 'Hijos e hijas, jóvenes y ancianos, siervos y siervas'],
            ['Espíritu de gracia y de oración', 'Zac 12:10', 'Israel mirará al que traspasaron']
          ],
          nota: 'Pentecostés comienza a cumplir estas promesas; su plenitud para Israel es futura.'
        } }
      ],
      texto: [
        'Los profetas no solo hablaban por el Espíritu: también anunciaban una nueva era del Espíritu. Lo que en el Antiguo Testamento era un privilegio de algunos, en el futuro sería la herencia de todo el pueblo de Dios.',
        { h: 'Agua sobre la tierra seca' },
        'Isaías usa la imagen del agua: «Porque yo derramaré aguas sobre el sequedal, y ríos sobre la tierra árida; mi Espíritu derramaré sobre tu generación» (Is 44:3). El verbo derramar indica abundancia: no unas gotas, sino un torrente. En otro lugar dice que el desierto se convertirá en campo fértil cuando sea derramado el Espíritu de lo alto (Is 32:15).',
        { h: 'Un corazón nuevo' },
        'Ezequiel anuncia una obra interior: «Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros… Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos» (Ez 36:26-27). La ley escrita en piedra no había podido cambiar el corazón de Israel. El Espíritu lo haría desde adentro. Esta promesa se relaciona con el nuevo pacto de Jeremías 31, que el recurso Pactos y dispensaciones estudia. En el capítulo siguiente, Ezequiel ve un valle lleno de huesos secos que, por el soplo del Espíritu, se levantan como un ejército. Dios explica: «pondré mi Espíritu en vosotros, y viviréis» (Ez 37:14).',
        { h: 'Sobre toda carne' },
        'La promesa más clara es la de Joel: «Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas» (Jl 2:28). Tres barreras caen. La del sexo: hijos e hijas. La de la edad: ancianos y jóvenes. La de la condición social: siervos y siervas. El Espíritu ya no sería solo para reyes, sacerdotes y profetas, sino para todo el pueblo de Dios.',
        'El día de Pentecostés, Pedro se puso de pie y dijo: «esto es lo dicho por el profeta Joel» (Hch 2:16). La promesa comenzaba a cumplirse. Pero algunos detalles de Joel, como las señales en el sol y la luna, y la restauración de Israel en Ezequiel 36 y 37 esperan su cumplimiento pleno al final de los tiempos, cuando Israel mire al que traspasaron (Zac 12:10). El recurso Los últimos tiempos estudia esa esperanza.',
        { ir: { t: 'Ver «El Espíritu, promesa del nuevo pacto» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/5' } },
        { ejercicio: {
          pregunta: 'Según Joel 2:28-29, ¿qué tiene de nuevo el derramamiento del Espíritu?',
          opciones: [
            { t: 'Que alcanzaría a todo el pueblo de Dios, sin distinción de sexo, edad ni condición social.', ok: true, por_que: 'Hijos e hijas, ancianos y jóvenes, siervos y siervas: el Espíritu deja de ser privilegio de unos pocos.' },
            { t: 'Que por primera vez el Espíritu daría poder para profetizar.', ok: false, por_que: 'Ya había profetas llenos del Espíritu en el Antiguo Testamento, como Miqueas o Ezequiel. Lo nuevo es el alcance.' },
            { t: 'Que el Espíritu vendría solo sobre los sacerdotes del templo.', ok: false, por_que: 'Es al revés: Joel anuncia que vendría «sobre toda carne», también sobre los siervos.' }
          ],
          explicacion: 'Lo que antes era de algunos sería de todos: el deseo de Moisés se cumplió en Pentecostés.'
        } }
      ],
      pensar: 'Joel anunció que el Espíritu vendría sobre los jóvenes, los ancianos, las mujeres y los siervos. ¿Hay alguien en tu iglesia a quien no esperas ver usado por Dios? ¿Qué te dice esta promesa?'
    }
  ];

  window.__ESPIRITU = { quien, at };
})();
