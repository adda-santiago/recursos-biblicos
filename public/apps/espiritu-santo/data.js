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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y yo rogaré al Padre, y os dará otro Consolador, para que esté con vosotros para siempre: el Espíritu de verdad, al cual el mundo no puede recibir, porque no le ve, ni le conoce; pero vosotros le conocéis, porque mora con vosotros, y estará en vosotros.', ref: 'Juan 14:16-17' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir. El me glorificará; porque tomará de lo mío, y os lo hará saber.', ref: 'Juan 16:13-14' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y dijo Pedro: Ananías, ¿por qué llenó Satanás tu corazón para que mintieses al Espíritu Santo, y sustrajeses del precio de la heredad? Reteniéndola, ¿no se te quedaba a ti? y vendida, ¿no estaba en tu poder? ¿Por qué pusiste esto en tu corazón? No has mentido a los hombres, sino a Dios.', ref: 'Hechos 5:3-4' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero cuando venga el Consolador, a quien yo os enviaré del Padre, el Espíritu de verdad, el cual procede del Padre, él dará testimonio acerca de mí.', ref: 'Juan 15:26' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y reposará sobre él el Espíritu de Jehová; espíritu de sabiduría y de inteligencia, espíritu de consejo y de poder, espíritu de conocimiento y de temor de Jehová.', ref: 'Isaías 11:2' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Todos ellos esperan en ti, Para que les des su comida a su tiempo. Les das, recogen; Abres tu mano, se sacian de bien. Escondes tu rostro, se turban; Les quitas el hálito, dejan de ser, Y vuelven al polvo. Envías tu Espíritu, son creados, Y renuevas la faz de la tierra.', ref: 'Salmo 104:27-30' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Samuel tomó el cuerno del aceite, y lo ungió en medio de sus hermanos; y desde aquel día en adelante el Espíritu de Jehová vino sobre David. Se levantó luego Samuel, y se volvió a Ramá. El Espíritu de Jehová se apartó de Saúl, y le atormentaba un espíritu malo de parte de Jehová.', ref: '1 Samuel 16:13-14' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Tenemos también la palabra profética más segura, a la cual hacéis bien en estar atentos como a una antorcha que alumbra en lugar oscuro, hasta que el día esclarezca y el lucero de la mañana salga en vuestros corazones; entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.', ref: '2 Pedro 1:19-21' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones. Y también sobre los siervos y sobre las siervas derramaré mi Espíritu en aquellos días.', ref: 'Joel 2:28-29' },
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
(() => {
  /* ---------------- III. El Espíritu en la vida de Jesús ---------------- */
  const jesus = [
    {
      id: 'concepcion', n: 'Concebido por el Espíritu Santo', ref: 'Lucas 1:30-35; Mateo 1:18-20; Hebreos 10:5',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces María dijo al ángel: ¿Cómo será esto? pues no conozco varón. Respondiendo el ángel, le dijo: El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios.', ref: 'Lucas 1:34-35' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../lucas/img/lc-elisabet-maria.webp', alt: 'María, joven, y Elisabet, anciana y embarazada, se abrazan en el umbral de una casa de piedra en la montaña de Judea', pie: 'Elisabet, llena del Espíritu Santo, reconoció en María a la madre de su Señor (Lc 1:41-43).', origen: 'ia' }
      ],
      texto: [
        'La vida terrenal de Jesús comenzó por obra del Espíritu Santo. Cuando el ángel Gabriel anunció a María que daría a luz al Hijo del Altísimo, ella preguntó cómo sería eso, pues no conocía varón. La respuesta fue: «El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios» (Lc 1:35).',
        { h: 'Una nueva creación' },
        'La expresión «te cubrirá con su sombra» (Lc 1:35) recuerda la nube de gloria que cubría el tabernáculo (Éx 40:34-35) y, de algún modo, al Espíritu que se movía sobre las aguas en la creación. Así como el Espíritu dio vida al primer mundo, ahora da comienzo a una nueva humanidad en el seno de una virgen. Mateo lo dice con sencillez: María «se halló que había concebido del Espíritu Santo» (Mt 1:18), y el ángel aseguró a José que lo engendrado en ella «del Espíritu Santo es» (Mt 1:20).',
        { h: 'Santo desde el principio' },
        'Gabriel une la obra del Espíritu con la santidad del niño: «por lo cual» será llamado santo. Jesús fue verdadero hombre, nacido de mujer, pero sin heredar la culpa ni la corrupción del pecado. El recurso La persona y obra de Cristo estudia el nacimiento virginal y por qué importa.',
        { h: 'Un Espíritu que llena a muchos' },
        'Los primeros capítulos de Lucas están llenos del Espíritu Santo. Juan el Bautista sería lleno del Espíritu desde el vientre de su madre (Lc 1:15). Elisabet, al oír el saludo de María, fue llena del Espíritu y la bendijo (Lc 1:41). Zacarías, lleno del Espíritu, profetizó (Lc 1:67). Simeón tenía el Espíritu sobre él, le había sido revelado por el Espíritu que vería al Cristo, y movido por el Espíritu fue al templo (Lc 2:25-27). Después de cuatro siglos sin profetas, el Espíritu vuelve a hablar, y todo gira en torno al niño que viene.',
        'Para Lucas, esto es una señal: la era del Espíritu anunciada por los profetas está comenzando. Lo que se ve en pequeño en las casas de Judea y en el templo se verá en grande en Pentecostés, en el segundo libro de Lucas.',
        { ir: { t: 'Ver «Nacido de una virgen» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#encarnacion/2' } }
      ],
      pensar: 'María respondió: «He aquí la sierva del Señor; hágase conmigo conforme a tu palabra». ¿Qué te enseña su disposición sobre cómo recibir lo que el Espíritu quiere hacer en tu vida?'
    },
    {
      id: 'uncion', n: 'Ungido en el Jordán', ref: 'Lucas 3:21-22; 4:1, 14-21; Juan 1:32-34; 3:34; Isaías 61:1-2',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../palabra-de-dios/img/jesus-nazaret.webp', alt: 'Jesús, de espaldas, de pie en la sinagoga de Nazaret, lee un rollo ante la congregación sentada en bancos de piedra', pie: 'En Nazaret, Jesús leyó: «El Espíritu del Señor está sobre mí» (Lc 4:18).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Vino a Nazaret, donde se había criado; y en el día de reposo entró en la sinagoga, conforme a su costumbre, y se levantó a leer. Y se le dio el libro del profeta Isaías; y habiendo abierto el libro, halló el lugar donde estaba escrito: El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres; Me ha enviado a sanar a los quebrantados de corazón; A pregonar libertad a los cautivos, Y vista a los ciegos; A poner en libertad a los oprimidos; A predicar el año agradable del Señor. Y enrollando el libro, lo dio al ministro, y se sentó; y los ojos de todos en la sinagoga estaban fijos en él. Y comenzó a decirles: Hoy se ha cumplido esta Escritura delante de vosotros.', ref: 'Lucas 4:16-21' }
      ],
      texto: [
        'Durante treinta años, Jesús vivió en Nazaret sin hacer milagros ni predicar en público. Su ministerio comenzó con un acontecimiento en el que el Espíritu tuvo un papel central: el bautismo en el Jordán.',
        { h: 'El Espíritu desciende' },
        'Cuando Jesús fue bautizado y oraba, el cielo se abrió y «descendió el Espíritu Santo sobre él en forma corporal, como paloma» (Lc 3:22), mientras la voz del Padre lo llamaba su Hijo amado. Juan el Bautista dio testimonio de que vio al Espíritu descender y permanecer sobre Él, y que esa era la señal para reconocer al que bautiza con el Espíritu Santo (Jn 1:32-33).',
        'Jesús era el Hijo eterno de Dios. ¿Por qué necesitaba el Espíritu? Porque, al hacerse hombre, vivió su vida humana en dependencia del Padre y en el poder del Espíritu. En el Jordán fue ungido para su ministerio de Mesías, como los reyes y profetas eran ungidos para el suyo, pero en una medida mayor: Dios no le dio el Espíritu por medida (Jn 3:34).',
        { h: 'Lleno, llevado y en el poder' },
        'Lucas describe una secuencia. Jesús volvió del Jordán «lleno del Espíritu Santo», y «fue llevado por el Espíritu al desierto» para ser tentado (Lc 4:1). Allí venció a Satanás con la Escritura. Después «volvió en el poder del Espíritu a Galilea» (Lc 4:14). La tentación no fue un accidente: el mismo Espíritu que lo ungió lo condujo a la prueba y lo sostuvo en ella.',
        { h: 'El programa de su ministerio' },
        'En la sinagoga de Nazaret, Jesús leyó Isaías 61: «El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres» (Lc 4:18). Luego dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21). Predicar, sanar, liberar y proclamar el año agradable del Señor: ese es el programa del Ungido. Pedro lo resumió años después en casa de Cornelio: «cómo Dios ungió con el Espíritu Santo y con poder a Jesús de Nazaret, y cómo éste anduvo haciendo bienes y sanando a todos los oprimidos por el diablo» (Hch 10:38).',
        'Lo que el Espíritu hizo en Jesús es el modelo de lo que hará en los discípulos: ungirlos con poder para continuar su obra.',
        { ir: { t: 'Ver «Ungido por el Espíritu» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#encarnacion/6' } },
        { ir: { t: 'Ver «El Espíritu Santo: el Ungido y la promesa del Padre» en Lucas', a: '../../lucas/#teologia/2' } }
      ],
      pensar: 'Jesús, siendo el Hijo de Dios, no comenzó su ministerio sin la unción del Espíritu. ¿Qué te dice eso sobre servir a Dios solo con tu preparación, tus talentos o tu experiencia?'
    },
    {
      id: 'ministerio', n: 'Un ministerio en el poder del Espíritu', ref: 'Mateo 12:15-21, 28; Lucas 10:21; 11:20; Hechos 10:38',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Espíritu en el ministerio de Jesús',
          cab: ['Momento', 'Lo que hace el Espíritu', 'Texto'],
          filas: [
            ['Concepción', 'Forma su humanidad en María', 'Lc 1:35'],
            ['Bautismo', 'Desciende y permanece sobre Él', 'Lc 3:22; Jn 1:32'],
            ['Tentación', 'Lo lleva al desierto y lo sostiene', 'Lc 4:1'],
            ['Predicación', 'Lo unge para anunciar buenas nuevas', 'Lc 4:18'],
            ['Liberaciones', 'Por el Espíritu echa fuera demonios', 'Mt 12:28'],
            ['Gozo y oración', 'Se regocija en el Espíritu', 'Lc 10:21'],
            ['La cruz', 'Por el Espíritu eterno se ofrece a sí mismo', 'He 9:14'],
            ['Resurrección', 'Es vivificado en espíritu', 'Ro 8:11; 1 P 3:18'],
            ['Ascensión', 'Da mandamientos por el Espíritu y lo derrama', 'Hch 1:2; 2:33']
          ],
          nota: 'De la concepción a Pentecostés, el Espíritu acompaña toda la obra del Hijo.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'He aquí mi siervo, a quien he escogido; Mi Amado, en quien se agrada mi alma; Pondré mi Espíritu sobre él, Y a los gentiles anunciará juicio.', ref: 'Mateo 12:18' }
      ],
      texto: [
        'Los evangelios muestran que el Espíritu no solo estuvo presente al comienzo del ministerio de Jesús, sino en cada etapa. La tabla lo resume de la concepción a la ascensión.',
        { h: 'El siervo sobre quien pondré mi Espíritu' },
        'Mateo cita Isaías 42 para explicar el estilo del ministerio de Jesús: «He aquí mi siervo, a quien he escogido; Mi Amado, en quien se agrada mi alma; Pondré mi Espíritu sobre él» (Mt 12:18). El Ungido no gritaría ni haría alarde: no quebraría la caña cascada ni apagaría el pábilo que humea. El poder del Espíritu en Jesús se mostró con compasión hacia los débiles, no con espectáculo.',
        { h: 'El dedo de Dios' },
        'Cuando los fariseos acusaron a Jesús de echar fuera demonios por el poder de Beelzebú, Él respondió: «si yo por el Espíritu de Dios echo fuera los demonios, ciertamente ha llegado a vosotros el reino de Dios» (Mt 12:28). Lucas dice lo mismo con otra imagen: «por el dedo de Dios» (Lc 11:20), la expresión que usaron los magos de Egipto ante las plagas (Éx 8:19). Las liberaciones y las sanidades eran señales de que el reino había llegado, y el Espíritu era su poder. Por eso atribuirlas a Satanás era tan grave: es la blasfemia contra el Espíritu Santo, que la ruta VIII estudia.',
        { h: 'Gozo en el Espíritu' },
        'El Espíritu no solo dio poder a Jesús, sino también gozo. Cuando los setenta volvieron de su misión, Jesús «se regocijó en el Espíritu» y alabó al Padre por revelar sus cosas a los sencillos (Lc 10:21). La vida en el Espíritu incluye la alegría y la oración, no solo las obras de poder.',
        { h: 'Hombre lleno del Espíritu' },
        'Jesús es Dios, y nunca dejó de serlo. Pero los evangelios subrayan que vivió como hombre lleno del Espíritu, dependiente del Padre. Eso lo hace nuestro modelo: no podemos imitar su divinidad, pero sí su dependencia. Jesús dijo que el que cree en Él haría las obras que Él hacía, y aun mayores, porque Él iba al Padre (Jn 14:12). La promesa se cumple porque el mismo Espíritu que estuvo sobre Jesús es enviado a los suyos.',
        { ir: { t: 'Ver «La blasfemia contra el Espíritu Santo» en este recurso', a: '#textos/1' } }
      ],
      pensar: 'El poder del Espíritu en Jesús se mostró con ternura hacia la caña cascada. ¿Cómo se ve en tu vida y en tu iglesia un poder del Espíritu que no aplasta a los débiles?'
    },
    {
      id: 'consolador', n: '«Otro Consolador»', ref: 'Juan 7:37-39; 14:16-18, 26; 15:26-27; 16:7-15',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../lucas/img/lc-ultima-cena.webp', alt: 'Jesús, de espaldas, reclinado a la mesa con sus discípulos en un aposento iluminado por lámparas de aceite', pie: 'En el aposento alto, la noche antes de morir, Jesús prometió el Consolador.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las cinco promesas del Consolador',
          cab: ['Texto', 'Lo que hará el Espíritu'],
          filas: [
            ['Jn 14:16-18', 'Estará con vosotros para siempre; mora con vosotros y estará en vosotros; no os dejaré huérfanos'],
            ['Jn 14:26', 'Os enseñará todas las cosas y os recordará lo que yo os he dicho'],
            ['Jn 15:26-27', 'Dará testimonio de mí, y vosotros también daréis testimonio'],
            ['Jn 16:7-11', 'Convencerá al mundo de pecado, de justicia y de juicio'],
            ['Jn 16:12-15', 'Os guiará a toda la verdad, os hará saber las cosas que vendrán y me glorificará']
          ],
          nota: 'Jesús dijo que a los discípulos les convenía que Él se fuera, porque así vendría el Consolador (Jn 16:7).'
        } }
      ],
      texto: [
        'La noche antes de morir, en el aposento alto, Jesús preparó a sus discípulos para su partida. Ellos estaban tristes y asustados. En ese discurso, recogido en Juan 14 a 16, Jesús habló del Espíritu Santo más que en ningún otro lugar de los evangelios. La tabla reúne sus cinco promesas.',
        { h: '«Os conviene que yo me vaya»' },
        'Jesús dijo algo que parecía imposible: «Os conviene que yo me vaya; porque si no me fuera, el Consolador no vendría a vosotros» (Jn 16:7). Mientras Jesús estuvo en la tierra, su presencia física estaba limitada a un lugar. El Espíritu estaría con todos los discípulos, en todas partes, al mismo tiempo, y no solo con ellos, sino en ellos: «mora con vosotros, y estará en vosotros» (Jn 14:17). Por eso Jesús promete: «No os dejaré huérfanos; vendré a vosotros» (Jn 14:18). Por el Espíritu, Jesús sigue presente con los suyos.',
        { h: 'Maestro y testigo' },
        'El Espíritu les enseñaría todas las cosas y les recordaría todo lo que Jesús les había dicho (Jn 14:26). Esta promesa se cumplió de manera especial en los apóstoles, que escribieron los evangelios y las cartas: el Espíritu les recordó con fidelidad las palabras de Jesús y los guió a toda la verdad (Jn 16:13). Por eso el Nuevo Testamento tiene la misma autoridad que el Antiguo. El Espíritu también daría testimonio de Jesús, y los discípulos, con Él, darían testimonio (Jn 15:26-27).',
        { h: 'Ríos de agua viva' },
        'Meses antes, en la fiesta de los tabernáculos, Jesús había clamado que de quien creyera en Él correrían ríos de agua viva. Juan explica: «Esto dijo del Espíritu que habían de recibir los que creyesen en él; pues aún no había venido el Espíritu Santo, porque Jesús no había sido aún glorificado» (Jn 7:39). El Espíritu ya actuaba, por supuesto. Lo que no había venido era la nueva etapa prometida: el Espíritu derramado sobre todos los creyentes. Para eso Jesús tenía que morir, resucitar y ser glorificado. La ruta IV estudia la obra de convencer al mundo, y la V, el cumplimiento de la promesa en Pentecostés.',
        { ejercicio: {
          pregunta: '¿Por qué dijo Jesús que a los discípulos les convenía que Él se fuera?',
          opciones: [
            { t: 'Porque así vendría el Consolador, que estaría en todos ellos y para siempre.', ok: true, por_que: 'Jesús lo dice en Juan 16:7: su partida abría paso a la venida del Espíritu.' },
            { t: 'Porque así los discípulos aprenderían a vivir sin la ayuda de Dios.', ok: false, por_que: 'Es lo contrario: Jesús promete que no los dejará huérfanos, sino que vendrá a ellos por el Espíritu (Jn 14:18).' },
            { t: 'Porque su presencia física les impedía hacer milagros.', ok: false, por_que: 'Los discípulos ya habían sanado enfermos durante el ministerio de Jesús (Lc 9:1-6). La razón es la venida del Espíritu.' }
          ],
          explicacion: 'Por el Espíritu, la presencia de Jesús no queda limitada a un lugar: está con todos los suyos y en ellos.'
        } }
      ],
      pensar: 'Jesús dijo que era mejor para sus discípulos tener al Espíritu que tenerlo a Él físicamente a su lado. ¿Vives como alguien que cree que eso es verdad?'
    },
    {
      id: 'cruz', n: 'La cruz y la resurrección', ref: 'Hebreos 9:14; Romanos 1:4; 8:11; 1 Pedro 3:18; 1 Timoteo 3:16',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../persona-y-obra-de-cristo/img/tumba-vacia.webp', alt: 'Una tumba excavada en la roca con la gran piedra circular corrida a un lado, al amanecer, con lienzos de lino doblados en el interior', pie: 'El Espíritu que resucitó a Jesús vivificará también nuestros cuerpos mortales (Ro 8:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mas vosotros no vivís según la carne, sino según el Espíritu, si es que el Espíritu de Dios mora en vosotros. Y si alguno no tiene el Espíritu de Cristo, no es de él. Pero si Cristo está en vosotros, el cuerpo en verdad está muerto a causa del pecado, mas el espíritu vive a causa de la justicia. Y si el Espíritu de aquel que levantó de los muertos a Jesús mora en vosotros, el que levantó de los muertos a Cristo Jesús vivificará también vuestros cuerpos mortales por su Espíritu que mora en vosotros.', ref: 'Romanos 8:9-11' }
      ],
      texto: [
        'El Espíritu Santo no se apartó de Jesús en la hora de su muerte. La Escritura lo muestra presente en la cruz y en la resurrección.',
        { h: '«Mediante el Espíritu eterno»' },
        'Hebreos compara el sacrificio de Cristo con los sacrificios del Antiguo Testamento. La sangre de los animales purificaba la carne; «¿cuánto más la sangre de Cristo, el cual mediante el Espíritu eterno se ofreció a sí mismo sin mancha a Dios, limpiará vuestras conciencias de obras muertas para que sirváis al Dios vivo?» (He 9:14). En la cruz, Jesús no fue una víctima pasiva. Se ofreció a sí mismo, y lo hizo por el Espíritu: el mismo Espíritu que lo había ungido lo sostuvo en Getsemaní y en el Calvario para llevar su obediencia hasta el final.',
        { h: 'Declarado Hijo de Dios con poder' },
        'Pablo dice que Jesús, descendiente de David según la carne, «fue declarado Hijo de Dios con poder, según el Espíritu de santidad, por la resurrección de entre los muertos» (Ro 1:4). La resurrección no hizo a Jesús Hijo de Dios, porque lo era desde siempre; lo declaró públicamente con poder. Pedro agrega que Cristo fue muerto en la carne, «pero vivificado en espíritu» (1 P 3:18). El Nuevo Testamento atribuye la resurrección al Padre, al Hijo y al Espíritu: las tres personas actúan juntas.',
        { h: 'Las primicias de nuestra resurrección' },
        'Lo que el Espíritu hizo en el cuerpo de Jesús lo hará en el nuestro: «si el Espíritu de aquel que levantó de los muertos a Jesús mora en vosotros, el que levantó de los muertos a Cristo Jesús vivificará también vuestros cuerpos mortales por su Espíritu que mora en vosotros» (Ro 8:11). El Espíritu que hoy vive en el creyente es la garantía de la resurrección futura. Por eso Pablo dice que tenemos «las primicias del Espíritu» y esperamos «la redención de nuestro cuerpo» (Ro 8:23).',
        'El cuerpo del creyente no es algo despreciable que el alma abandona para siempre. Es templo del Espíritu, y el Espíritu lo levantará glorificado. La ruta VII vuelve sobre esta esperanza.',
        { ir: { t: 'Ver «La tumba vacía y las apariciones» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#exaltado/2' } }
      ],
      pensar: 'El mismo Espíritu que levantó a Jesús de la tumba vive en ti. ¿Qué situación de tu vida parece hoy muerta y necesita ese poder de resurrección?'
    },
    {
      id: 'soplo', n: '«Recibid el Espíritu Santo»', ref: 'Juan 20:19-23; Lucas 24:45-49; Hechos 1:4-8',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-soplo.webp', alt: 'Jesús resucitado, de espaldas, de pie en medio de los discípulos reunidos en una habitación con la puerta atrancada, sopla sobre ellos; Pedro y Juan lo miran asombrados a la luz de lámparas', pie: 'El primer día de la semana, Jesús sopló sobre sus discípulos y les dijo: «Recibid el Espíritu Santo» (Jn 20:22).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cuando llegó la noche de aquel mismo día, el primero de la semana, estando las puertas cerradas en el lugar donde los discípulos estaban reunidos por miedo de los judíos, vino Jesús, y puesto en medio, les dijo: Paz a vosotros. Y cuando les hubo dicho esto, les mostró las manos y el costado. Y los discípulos se regocijaron viendo al Señor. Entonces Jesús les dijo otra vez: Paz a vosotros. Como me envió el Padre, así también yo os envío. Y habiendo dicho esto, sopló, y les dijo: Recibid el Espíritu Santo. A quienes remitiereis los pecados, les son remitidos; y a quienes se los retuviereis, les son retenidos.', ref: 'Juan 20:19-23' }
      ],
      texto: [
        'La tarde del día de la resurrección, los discípulos estaban reunidos con las puertas cerradas por miedo a los judíos. Jesús se presentó en medio de ellos, les mostró las manos y el costado, y les dijo: «Como me envió el Padre, así también yo os envío. Y habiendo dicho esto, sopló, y les dijo: Recibid el Espíritu Santo» (Jn 20:21-22).',
        { h: 'El soplo de la nueva creación' },
        'El verbo «sopló» es el mismo que usa la traducción griega del Antiguo Testamento en Génesis 2:7, cuando Dios sopló aliento de vida en el hombre, y en Ezequiel 37:9, cuando el Espíritu sopla sobre los huesos secos. Juan quiere que veamos una nueva creación: el Cristo resucitado da vida nueva a sus discípulos.',
        { h: 'Un texto que necesita explicación' },
        'Pero cincuenta días después, en Pentecostés, los mismos discípulos fueron llenos del Espíritu Santo. Y antes de la ascensión, Jesús les mandó esperar en Jerusalén la promesa del Padre (Hch 1:4). ¿Cómo se entiende que reciban el Espíritu en Juan 20 y que todavía tengan que esperarlo en Hechos 1?',
        { posturas: {
          titulo: '¿Qué ocurrió en Juan 20:22?',
          a: { n: 'Una recepción real del Espíritu', t: 'Muchos intérpretes, también pentecostales, entienden que esa noche los discípulos recibieron de verdad el Espíritu para vida: nacieron de nuevo en el sentido pleno del nuevo pacto, como creyentes en el Cristo resucitado. Pentecostés fue después una experiencia distinta: el bautismo en el Espíritu, para recibir poder y testificar (Hch 1:8). Este caso apoya, para ellos, que el bautismo en el Espíritu es una experiencia posterior a la conversión.' },
          b: { n: 'Una acción simbólica que anuncia Pentecostés', t: 'Otros entienden que el soplo fue una señal profética, como tantas que hicieron los profetas: Jesús anunciaba y garantizaba lo que ocurriría en Pentecostés, cuando el Espíritu sería dado de hecho. Señalan que, después de Juan 20, los discípulos siguen encerrados y sin predicar, y que Jesús mismo dice en Hechos 1 que la promesa aún está por venir.' },
          c: 'Las dos lecturas coinciden en lo importante: Jesús resucitado es quien da el Espíritu, y la misión de la iglesia nace de su envío. Este recurso sigue la primera lectura como la más probable, porque el texto dice «Recibid» en imperativo y no lo presenta como un anuncio. Esa lectura muestra en los mismos discípulos la distinción entre recibir el Espíritu para vida y ser bautizados en el Espíritu para poder. La ruta V la desarrolla.'
        } },
        { h: 'Enviados con autoridad' },
        'Jesús agregó: «A quienes remitiereis los pecados, les son remitidos» (Jn 20:23). No dio a los discípulos un poder propio de perdonar, sino la autoridad de anunciar el perdón en su nombre: quien recibe el evangelio es perdonado, y quien lo rechaza sigue en sus pecados. Esa misión solo puede cumplirse en el poder del Espíritu.'
      ],
      pensar: 'Jesús envió a sus discípulos como el Padre lo había enviado a Él, y con su Espíritu. ¿Te ves a ti mismo como alguien enviado por Jesús al lugar donde vives y trabajas?'
    }
  ];

  /* ---------------- IV. La obra del Espíritu en la salvación ---------------- */
  const salvacion = [
    {
      id: 'convence', n: 'Convence al mundo', ref: 'Juan 16:8-11; Hechos 2:37; 1 Corintios 2:4-5; 12:3; 1 Tesalonicenses 1:5',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y cuando él venga, convencerá al mundo de pecado, de justicia y de juicio. De pecado, por cuanto no creen en mí; de justicia, por cuanto voy al Padre, y no me veréis más; y de juicio, por cuanto el príncipe de este mundo ha sido ya juzgado.', ref: 'Juan 16:8-11' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-salvacion.svg', alt: 'Esquema con las obras del Espíritu en la salvación, en orden: convence, regenera, bautiza en el cuerpo de Cristo, mora, sella, da testimonio, intercede y santifica, hasta la resurrección del cuerpo', pie: 'De principio a fin, la salvación es obra del Espíritu que aplica lo que Cristo hizo.', origen: 'esquema' }
      ],
      texto: [
        'Nadie se acerca a Dios por iniciativa propia. Antes de que una persona crea en Cristo, el Espíritu Santo ya está obrando en ella. Jesús describió esa obra así: «cuando él venga, convencerá al mundo de pecado, de justicia y de juicio» (Jn 16:8).',
        { h: 'Convencer' },
        'El verbo griego (elénjō) significa sacar a la luz, demostrar una culpa, como un fiscal que prueba un delito ante el tribunal. No se trata de un sentimiento vago de malestar, sino de que la persona vea su verdadera situación delante de Dios. El esquema muestra que es el primer paso de la obra del Espíritu en la salvación.',
        { h: 'De pecado, de justicia y de juicio' },
        'Jesús explicó cada parte. De pecado, «por cuanto no creen en mí» (Jn 16:9): el pecado de fondo no es una falta moral entre otras, sino rechazar a Cristo. De justicia, porque Jesús va al Padre (Jn 16:10): la resurrección y la ascensión demuestran que Jesús era justo, aunque el mundo lo condenó, y que en Él está la justicia que necesitamos. De juicio, porque el príncipe de este mundo ya ha sido juzgado (Jn 16:11): en la cruz Satanás fue vencido, y quien sigue de su lado comparte su condena.',
        { h: 'Pentecostés y hoy' },
        'El día de Pentecostés, cuando Pedro predicó, los oyentes «se compungieron de corazón» y preguntaron: «Varones hermanos, ¿qué haremos?» (Hch 2:37). La predicación fue sencilla, pero el Espíritu la hizo penetrar. Pablo dice que su mensaje en Corinto no fue con palabras persuasivas de sabiduría humana, «sino con demostración del Espíritu y de poder» (1 Co 2:4), y que el evangelio llegó a Tesalónica «en poder, en el Espíritu Santo y en plena certidumbre» (1 Ts 1:5).',
        'Esto tiene consecuencias para la evangelización. El creyente anuncia el evangelio con claridad y con amor, pero no puede convencer a nadie por sus propios argumentos. Es el Espíritu quien abre los ojos. Por eso la evangelización va acompañada de oración. Y nadie puede llamar a Jesús Señor, de verdad, sino por el Espíritu Santo (1 Co 12:3).',
        { ejercicio: {
          pregunta: 'Según Jesús, ¿de qué pecado convence el Espíritu al mundo?',
          opciones: [
            { t: 'Del pecado de no creer en Él.', ok: true, por_que: 'Jesús lo dice explícitamente: «De pecado, por cuanto no creen en mí» (Jn 16:9).' },
            { t: 'De los pecados sexuales, que son los más graves.', ok: false, por_que: 'El Espíritu también convence de esos pecados, pero Jesús señala como raíz la incredulidad.' },
            { t: 'De no cumplir los mandamientos de la ley de Moisés.', ok: false, por_que: 'La ley muestra el pecado (Ro 3:20), pero Jesús habla aquí de rechazarlo a Él.' }
          ],
          explicacion: 'El pecado de fondo es rechazar a Cristo, y la justicia está en el Cristo resucitado.'
        } }
      ],
      pensar: '¿Por quién estás orando para que el Espíritu Santo le abra los ojos? ¿Confías más en tus argumentos o en la obra del Espíritu cuando hablas de Cristo?'
    },
    {
      id: 'regenera', n: 'Nacer del Espíritu', ref: 'Juan 3:3-8; Tito 3:4-7; Ezequiel 36:26-27; 2 Corintios 5:17; 1 Pedro 1:23',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/samaritana.webp', alt: 'La mujer samaritana, con un cántaro de barro, conversa junto al pozo de Jacob con Jesús, que está de espaldas', pie: 'A la samaritana, Jesús le ofreció un agua que sería en ella una fuente que salta para vida eterna (Jn 4:14).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Respondió Jesús: De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios. Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu, espíritu es. No te maravilles de que te dije: Os es necesario nacer de nuevo. El viento sopla de donde quiere, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va; así es todo aquel que es nacido del Espíritu.', ref: 'Juan 3:5-8' }
      ],
      texto: [
        'Nicodemo era un maestro de Israel, fariseo y miembro del Sanedrín, un hombre religioso y respetado. Jesús le dijo algo que lo dejó perplejo: «el que no naciere de nuevo, no puede ver el reino de Dios» (Jn 3:3).',
        { h: 'Un nuevo nacimiento' },
        'Nicodemo pensó en un segundo nacimiento físico. Jesús le explicó: «el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios. Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu, espíritu es» (Jn 3:5-6). El nacimiento natural produce vida natural; para la vida de Dios hace falta un nacimiento que solo el Espíritu puede dar. Los teólogos lo llaman regeneración.',
        'Muchos entienden «agua y Espíritu» a la luz de Ezequiel 36, que Nicodemo, como maestro de Israel, debía conocer: Dios esparciría agua limpia sobre su pueblo y pondría dentro su Espíritu (Ez 36:25-27). El agua representa la limpieza del pecado; el Espíritu, la vida nueva. Otros ven en el agua una referencia al bautismo o al nacimiento natural. En todo caso, el énfasis está en el Espíritu.',
        { h: 'Obra de Dios, no del hombre' },
        'El viento sopla donde quiere, «así es todo aquel que es nacido del Espíritu» (Jn 3:8). Nadie se da a sí mismo el nuevo nacimiento, como nadie decidió nacer la primera vez. Pablo lo dice así: Dios «nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo» (Tit 3:5). La persona responde a Dios arrepintiéndose y creyendo, pero la vida nueva es un regalo del Espíritu.',
        { h: 'Lo que cambia' },
        'La regeneración no es mejorar la vida vieja, sino recibir una nueva: «si alguno está en Cristo, nueva criatura es» (2 Co 5:17). El creyente recibe un corazón nuevo que ama a Dios y desea obedecerle. Esto no significa que ya no luche contra el pecado, pero sí que el pecado ya no es su amo. La religión de Nicodemo era sincera, pero no bastaba. Asistir a una iglesia, conocer la Biblia o tener una experiencia emocional no reemplaza el nuevo nacimiento.',
        { ir: { t: 'Ver «Los fariseos» en El mundo judío en tiempos de Jesús', a: '../../mundo-judio/#grupos/1' } }
      ],
      pensar: 'Nicodemo era un hombre muy religioso que necesitaba nacer de nuevo. ¿Puedes señalar cuándo y cómo el Espíritu te dio vida nueva, o tu fe es todavía solo una costumbre?'
    },
    {
      id: 'cuerpo', n: 'Bautizados en un cuerpo', ref: '1 Corintios 12:12-13; Romanos 8:9; Efesios 4:3-6; Gálatas 3:27-28',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque así como el cuerpo es uno, y tiene muchos miembros, pero todos los miembros del cuerpo, siendo muchos, son un solo cuerpo, así también Cristo. Porque por un solo Espíritu fuimos todos bautizados en un cuerpo, sean judíos o griegos, sean esclavos o libres; y a todos se nos dio a beber de un mismo Espíritu.', ref: '1 Corintios 12:12-13' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos obras distintas con nombres parecidos',
          cab: ['', 'Bautizados por el Espíritu en el cuerpo', 'Bautizados por Cristo en el Espíritu'],
          filas: [
            ['Quién bautiza', 'El Espíritu', 'Jesucristo'],
            ['En qué', 'En el cuerpo de Cristo, la iglesia', 'En el Espíritu Santo'],
            ['Cuándo', 'En la conversión', 'En la conversión o después de ella'],
            ['Para qué', 'Unirnos a Cristo y a su pueblo', 'Recibir poder para testificar'],
            ['Quiénes', 'Todos los creyentes', 'Prometido a todos los creyentes'],
            ['Textos', '1 Co 12:13', 'Mt 3:11; Hch 1:5, 8; 2:4']
          ],
          nota: 'Es la lectura de las Asambleas de Dios; la ruta V presenta también la otra.'
        } }
      ],
      texto: [
        'En la conversión, el Espíritu Santo no solo da vida nueva a la persona: la une al cuerpo de Cristo. Pablo lo enseña en 1 Corintios 12, al hablar de los dones: «Porque por un solo Espíritu fuimos todos bautizados en un cuerpo, sean judíos o griegos, sean esclavos o libres; y a todos se nos dio a beber de un mismo Espíritu» (1 Co 12:13).',
        { h: 'Un solo cuerpo' },
        'Bautizar significa sumergir. Al creer en Cristo, cada creyente es sumergido en un cuerpo, la iglesia, del que Cristo es la cabeza. Nadie se convierte en cristiano para vivir la fe solo: el mismo Espíritu que lo regenera lo hace miembro de una familia en la que caen las barreras de raza y de clase. Por eso Pablo exhorta a guardar «la unidad del Espíritu en el vínculo de la paz» (Ef 4:3). La unidad no se fabrica; se guarda, porque el Espíritu ya la creó.',
        { h: 'Todos tienen el Espíritu' },
        'La palabra «todos» se repite dos veces en el versículo. Ningún creyente verdadero está sin el Espíritu: «si alguno no tiene el Espíritu de Cristo, no es de él» (Ro 8:9). No existe una clase de cristianos con el Espíritu y otra sin Él. Todo creyente tiene al Espíritu Santo habitando en él desde que cree.',
        { h: '¿Es este el bautismo en el Espíritu?' },
        'Aquí surge una pregunta importante. Juan el Bautista anunció que Jesús bautizaría «en Espíritu Santo» (Mt 3:11), y Jesús lo prometió para Pentecostés (Hch 1:5). ¿Es lo mismo que el bautismo de 1 Corintios 12:13? La tabla muestra cómo lo entiende la tradición pentecostal clásica. En 1 Corintios 12:13, el Espíritu es quien bautiza y el elemento es el cuerpo de Cristo: es la obra de la conversión. En los evangelios y Hechos, Cristo es quien bautiza y el elemento es el Espíritu: es una experiencia de poder para el servicio, prometida a todos los creyentes. Son dos obras distintas del mismo Espíritu.',
        'Muchos evangélicos entienden, en cambio, que 1 Corintios 12:13 describe el mismo bautismo que prometió Juan, y que todo creyente lo recibe al convertirse. La ruta V presenta las dos posturas con detalle.',
        { ir: { t: 'Ver «Distinto de la conversión» en este recurso', a: '#bautismo/4' } }
      ],
      pensar: 'El Espíritu te unió a hermanos de toda raza y condición. ¿Hay algún hermano en tu iglesia con quien te cuesta guardar la unidad del Espíritu? ¿Qué paso podrías dar esta semana?'
    },
    {
      id: 'mora', n: 'El Espíritu mora en el creyente', ref: 'Juan 14:17, 23; Romanos 8:9-11; 1 Corintios 3:16; 6:19-20; Gálatas 4:6; 2 Timoteo 1:14',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros? Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios.', ref: '1 Corintios 6:19-20' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dónde habitó Dios con su pueblo',
          cab: ['Etapa', 'Lugar de la presencia', 'Texto'],
          filas: [
            ['El desierto', 'El tabernáculo', 'Éx 40:34-35'],
            ['La monarquía', 'El templo de Salomón', '1 R 8:10-11'],
            ['La encarnación', 'El cuerpo de Jesús', 'Jn 1:14; 2:21'],
            ['La iglesia', 'Los creyentes, juntos', '1 Co 3:16; Ef 2:21-22'],
            ['Cada creyente', 'Su cuerpo', '1 Co 6:19'],
            ['La eternidad', 'La nueva Jerusalén', 'Ap 21:3, 22']
          ],
          nota: '«He aquí el tabernáculo de Dios con los hombres, y él morará con ellos» (Ap 21:3).'
        } }
      ],
      texto: [
        'Una de las promesas más asombrosas de Jesús es que el Espíritu no solo estaría con los discípulos, sino en ellos: «mora con vosotros, y estará en vosotros» (Jn 14:17). Desde Pentecostés, Dios habita en cada creyente.',
        { h: 'De la tienda al corazón' },
        'La tabla resume una historia que recorre toda la Biblia: Dios quiere habitar con su pueblo. En el desierto habitó en el tabernáculo, y su gloria lo llenó. Después llenó el templo de Salomón. En la encarnación, el Verbo «habitó entre nosotros» (Jn 1:14), literalmente «puso su tienda». Ahora, el Espíritu hace de la iglesia y de cada creyente su templo. Al final, la nueva Jerusalén será el lugar donde Dios more con los hombres para siempre.',
        { h: 'Templo en conjunto y en particular' },
        'Pablo usa la imagen del templo en dos sentidos. En 1 Corintios 3:16 habla a la iglesia como un todo: vosotros, juntos, sois templo de Dios, y quien destruye la iglesia con divisiones destruye la casa de Dios. En 1 Corintios 6:19 habla del cuerpo de cada uno: «¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros?». El contexto es la inmoralidad sexual. Lo que hago con mi cuerpo lo hago en el lugar donde Dios habita.',
        { h: 'Una presencia permanente' },
        'En el Antiguo Testamento, el Espíritu venía sobre algunas personas y podía apartarse. En el nuevo pacto, Jesús prometió que el Consolador estaría con los suyos «para siempre» (Jn 14:16). Eso no significa que el creyente no pueda entristecer al Espíritu ni alejarse de Dios: la ruta VII y la VIII lo estudian. Significa que el Espíritu no viene y va según nuestro estado de ánimo. Habita en nosotros como en su casa.',
        'Esta verdad da seguridad y también exige reverencia. Seguridad, porque el creyente nunca está solo: Dios está en él, en el hospital, en el trabajo y en la noche más oscura. Reverencia, porque hemos sido comprados por precio, y estamos llamados a glorificar a Dios en nuestro cuerpo (1 Co 6:20).',
        { ir: { t: 'Ver El tabernáculo', a: '../../tabernaculo/' } }
      ],
      pensar: 'Si tu cuerpo es el lugar donde Dios habita, ¿qué lugares, imágenes o hábitos estás llevando a su templo? ¿Qué necesitarías limpiar?'
    },
    {
      id: 'sello', n: 'Sello y arras', ref: 'Efesios 1:13-14; 4:30; 2 Corintios 1:21-22; 5:5; Romanos 8:23',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En él también vosotros, habiendo oído la palabra de verdad, el evangelio de vuestra salvación, y habiendo creído en él, fuisteis sellados con el Espíritu Santo de la promesa, que es las arras de nuestra herencia hasta la redención de la posesión adquirida, para alabanza de su gloria.', ref: 'Efesios 1:13-14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos imágenes del comercio antiguo',
          cab: ['Imagen', 'Qué era', 'Qué enseña del Espíritu'],
          filas: [
            ['Sello', 'Marca de cera o arcilla, hecha con el anillo del dueño, en documentos, cartas y mercancías', 'Pertenecemos a Dios, Él nos reconoce como suyos y nos protege'],
            ['Arras', 'Primer pago de una compra, que obliga a pagar el resto (en griego arrabṓn)', 'Lo que ya tenemos del Espíritu garantiza la herencia completa']
          ],
          nota: 'En el griego moderno, arrabṓna significa también anillo de compromiso.'
        } }
      ],
      texto: [
        'Pablo explica la seguridad del creyente con dos imágenes del comercio de su época: el sello y las arras. Las dos aparecen juntas en Efesios 1: «habiendo creído en él, fuisteis sellados con el Espíritu Santo de la promesa, que es las arras de nuestra herencia hasta la redención de la posesión adquirida, para alabanza de su gloria» (Ef 1:13-14).',
        { h: 'El sello' },
        'En el mundo antiguo, un sello se hacía presionando un anillo o un cilindro grabado sobre cera o arcilla. Cumplía varias funciones: indicaba quién era el dueño, autentificaba un documento y protegía su contenido, porque nadie podía romperlo sin permiso. Cuando el creyente cree, Dios pone sobre él su sello, que es el Espíritu Santo. Eso significa que le pertenece, que es auténticamente suyo y que está bajo su protección. Por eso Pablo dice que el Espíritu nos selló «para el día de la redención» (Ef 4:30).',
        { h: 'Las arras' },
        'La palabra arrabṓn, que la RV 1960 traduce «arras», era un término comercial: el primer pago de una compra, que obligaba al comprador a completar el resto. Dios nos ha dado el Espíritu como anticipo de lo que nos espera. La vida, el gozo, la paz y la presencia de Dios que hoy experimentamos son una muestra real, pero parcial, de la herencia completa. Pablo dice que Dios «nos ha dado las arras del Espíritu» (2 Co 5:5), en el contexto de la resurrección del cuerpo.',
        { h: 'Para alabanza de su gloria' },
        'Las dos imágenes apuntan a lo mismo: la salvación que Dios comenzó, Él la terminará. El creyente no vive con la angustia de no saber si es de Dios. Al mismo tiempo, el sello no es una licencia para pecar: el mismo versículo que habla del sello dice «no contristéis al Espíritu Santo de Dios» (Ef 4:30). Quien ha sido sellado por el Espíritu Santo quiere vivir en santidad.',
        { posturas: {
          titulo: '¿El sello es un hecho de la conversión o una experiencia posterior?',
          a: { n: 'En la conversión', t: 'La mayoría de los intérpretes, también pentecostales, entiende que el sello ocurre al creer: «habiendo creído en él, fuisteis sellados». Todo creyente está sellado, y por eso Pablo puede exhortar a toda la iglesia de Éfeso a no contristar al Espíritu con quien fue sellada.' },
          b: { n: 'Una experiencia posterior', t: 'Algunos predicadores de los movimientos de santidad y algunos puritanos identificaron el sello con una segunda experiencia de seguridad o con el bautismo en el Espíritu, leyendo «habiendo creído» como algo que ocurrió antes del sello.' },
          c: 'Este recurso sigue la primera postura. El participio griego describe un mismo acontecimiento: creer y ser sellado van juntos. La seguridad de la salvación descansa en la obra de Cristo y en el sello del Espíritu que todo creyente ha recibido, no en una experiencia adicional.'
        } }
      ],
      pensar: 'Dios puso su sello sobre ti y te dio un anticipo de tu herencia. ¿Qué te dice eso cuando la duda o la culpa te hacen pensar que no eres de Dios?'
    },
    {
      id: 'abba', n: '«¡Abba, Padre!»', ref: 'Romanos 8:14-17; Gálatas 4:4-7; 1 Juan 3:24; 4:13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque todos los que son guiados por el Espíritu de Dios, éstos son hijos de Dios. Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre! El Espíritu mismo da testimonio a nuestro espíritu, de que somos hijos de Dios. Y si hijos, también herederos; herederos de Dios y coherederos con Cristo, si es que padecemos juntamente con él, para que juntamente con él seamos glorificados.', ref: 'Romanos 8:14-17' }
      ],
      texto: [
        'El Espíritu no solo nos hace hijos de Dios: nos hace saber que lo somos. Pablo lo explica en Romanos 8: «Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre! El Espíritu mismo da testimonio a nuestro espíritu, de que somos hijos de Dios» (Ro 8:15-16).',
        { h: 'Adopción' },
        'En el mundo romano, la adopción era una institución legal. Un hombre podía adoptar a alguien, incluso a un adulto, y darle todos los derechos de un hijo: su nombre, su herencia y su lugar en la familia. Las deudas anteriores quedaban canceladas. Pablo usa esa imagen: éramos esclavos del pecado, y Dios nos adoptó como hijos con plenos derechos. Y si hijos, también herederos, coherederos con Cristo (Ro 8:17).',
        { h: 'Abba' },
        'Abba es la palabra aramea con la que un niño se dirigía a su padre, con cariño y confianza. Jesús la usó en Getsemaní: «Abba, Padre, todas las cosas son posibles para ti» (Mr 14:36). Ningún judío de su tiempo se dirigía a Dios de esa manera en su oración. El Espíritu nos permite orar como oraba Jesús, con la misma confianza de un hijo. En Gálatas, Pablo dice que es el Espíritu mismo quien clama en nuestros corazones: «Dios envió a vuestros corazones el Espíritu de su Hijo, el cual clama: ¡Abba, Padre!» (Gá 4:6).',
        { h: 'Del temor a la confianza' },
        'Pablo contrasta dos espíritus: el de esclavitud, que lleva al temor, y el de adopción. Un esclavo obedece por miedo al castigo; un hijo, por amor a su padre. Muchos creyentes viven su fe como esclavos: siempre inseguros, intentando ganar el favor de Dios. El Espíritu Santo quiere quitar ese temor y poner en su lugar la confianza de un hijo amado.',
        { h: 'El testimonio interior' },
        '¿Cómo sabe una persona que es hija de Dios? Ante todo, por las promesas de la Palabra: el que cree en el Hijo tiene vida eterna (1 Jn 5:13). Pero Pablo agrega un testimonio interior: el Espíritu mismo confirma a nuestro espíritu que somos hijos. No es una voz audible, sino una certeza que crece en la oración, en la obediencia y en el amor a los hermanos. Juan lo dice así: en esto conocemos que permanecemos en Él, «en que nos ha dado de su Espíritu» (1 Jn 4:13).'
      ],
      pensar: 'Cuando oras, ¿te diriges a Dios como un esclavo que teme o como un hijo que confía? ¿Qué temor necesitas entregar hoy al Espíritu de adopción?'
    },
    {
      id: 'santifica', n: 'Intercede y santifica', ref: 'Romanos 8:26-27; 2 Corintios 3:17-18; 2 Tesalonicenses 2:13; 1 Pedro 1:2; Judas 20',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y de igual manera el Espíritu nos ayuda en nuestra debilidad; pues qué hemos de pedir como conviene, no lo sabemos, pero el Espíritu mismo intercede por nosotros con gemidos indecibles. Mas el que escudriña los corazones sabe cuál es la intención del Espíritu, porque conforme a la voluntad de Dios intercede por los santos.', ref: 'Romanos 8:26-27' },
        { tipo: 'cita', titulo: 'Pasaje 2', texto: 'Porque el Señor es el Espíritu; y donde está el Espíritu del Señor, allí hay libertad. Por tanto, nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor.', ref: '2 Corintios 3:17-18' }
      ],
      texto: [
        'La obra del Espíritu no termina en la conversión. Durante toda la vida del creyente, el Espíritu lo ayuda a orar y lo transforma poco a poco a la imagen de Cristo.',
        { h: 'Cuando no sabemos qué pedir' },
        'Pablo reconoce algo que todo creyente ha experimentado: «qué hemos de pedir como conviene, no lo sabemos» (Ro 8:26). Hay situaciones tan confusas o tan dolorosas que no encontramos palabras. Pero no estamos solos: «el Espíritu mismo intercede por nosotros con gemidos indecibles». El Espíritu ora en nosotros y por nosotros, y como conoce la voluntad de Dios, su intercesión siempre es conforme a ella (Ro 8:27). Por eso Pablo puede decir a continuación que a los que aman a Dios todas las cosas les ayudan a bien (Ro 8:28).',
        'Los creyentes tenemos dos intercesores: Cristo intercede por nosotros a la diestra del Padre (Ro 8:34), y el Espíritu intercede en nosotros. Judas exhorta a orar en el Espíritu Santo (Jud 20), y Pablo a orar en todo tiempo con toda oración y súplica en el Espíritu (Ef 6:18).',
        { posturas: {
          titulo: '¿Qué son los «gemidos indecibles»?',
          a: { n: 'La oración en lenguas', t: 'Algunos intérpretes pentecostales relacionan estos gemidos con la oración en lenguas, en la que el creyente ora con el espíritu sin entender lo que dice (1 Co 14:14-15), y el Espíritu da expresión a lo que la mente no puede formular.' },
          b: { n: 'Una intercesión que no se expresa con palabras', t: 'La mayoría de los intérpretes, también muchos pentecostales, entiende que «indecibles» significa que no se expresan en palabras de ningún idioma. Es una intercesión del Espíritu ante el Padre, más profunda que cualquier oración humana, que ocurre aunque el creyente no la perciba.' },
          c: 'El texto no menciona las lenguas, y Pablo dice que «el Espíritu mismo» intercede, no el creyente. Por eso este recurso no identifica los gemidos con las lenguas. Al mismo tiempo, la oración en lenguas es una forma en que el Espíritu ayuda al creyente a orar más allá de su entendimiento, y la ruta VI la estudia.'
        } },
        { h: 'De gloria en gloria' },
        'La otra gran obra del Espíritu en la vida del creyente es la santificación: el proceso por el cual Dios lo aparta del pecado y lo hace parecerse a Cristo. Pablo lo describe así: «nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor» (2 Co 3:18). La transformación ocurre mirando a Cristo, y el Espíritu es quien la produce.',
        'La santificación tiene un comienzo (en la conversión, el creyente es apartado para Dios: 1 Co 6:11), un proceso que dura toda la vida, y una meta: ser semejantes a Cristo cuando Él venga (1 Jn 3:2). En ese proceso, el creyente no es pasivo: debe hacer morir las obras de la carne «por el Espíritu» (Ro 8:13). La ruta VII estudia la vida en el Espíritu y su fruto.'
      ],
      pensar: 'Hay momentos en que no sabes cómo orar. ¿Te consuela saber que el Espíritu intercede por ti con gemidos indecibles? ¿Cómo cambia eso tu manera de orar en la prueba?'
    }
  ];

  window.__ESPIRITU.jesus = jesus;
  window.__ESPIRITU.salvacion = salvacion;
})();
(() => {
  const HECHOS = [[30.4, 26.5], [39.2, 37.6]]; // de Éfeso a Damasco y Jerusalén
  const JUDEA = [[30.8, 33.6], [33.8, 36.8]];

  /* ---------------- V. El bautismo en el Espíritu Santo ---------------- */
  const bautismo = [
    {
      id: 'promesa-padre', n: 'La promesa del Padre', ref: 'Mateo 3:11; Lucas 11:13; 24:49; Hechos 1:4-8',
      fecha: 33,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-aposento-espera.webp', alt: 'Los discípulos, María la madre de Jesús y otras mujeres oran juntos en un aposento alto de Jerusalén, unos de rodillas y otros de pie con las manos levantadas, a la luz de la mañana', pie: '«Todos éstos perseveraban unánimes en oración y ruego» (Hch 1:14), esperando la promesa del Padre.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y estando juntos, les mandó que no se fueran de Jerusalén, sino que esperasen la promesa del Padre, la cual, les dijo, oísteis de mí. Porque Juan ciertamente bautizó con agua, mas vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días. Entonces los que se habían reunido le preguntaron, diciendo: Señor, ¿restaurarás el reino a Israel en este tiempo? Y les dijo: No os toca a vosotros saber los tiempos o las sazones, que el Padre puso en su sola potestad; pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.', ref: 'Hechos 1:4-8' }
      ],
      texto: [
        'Las rutas anteriores mostraron que todo creyente recibe el Espíritu Santo al convertirse: el Espíritu lo regenera, lo une al cuerpo de Cristo, mora en él y lo sella. Esta ruta estudia otra obra, que la Escritura llama bautismo en el Espíritu Santo y que la tradición pentecostal considera una experiencia distinta, prometida a todos los creyentes.',
        { h: 'El que bautiza en Espíritu Santo' },
        'Los cuatro evangelios recogen la misma promesa de Juan el Bautista: «Yo a la verdad os bautizo en agua para arrepentimiento; pero el que viene tras mí… él os bautizará en Espíritu Santo y fuego» (Mt 3:11). El que bautiza es Jesús, y el elemento en que sumerge es el Espíritu. Es una de las pocas cosas que los cuatro evangelistas cuentan del ministerio de Juan, lo que muestra su importancia.',
        { h: '«Hasta que seáis investidos de poder»' },
        'Después de su resurrección, Jesús les dijo a los discípulos que se quedaran en Jerusalén: «He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49). Antes de ascender les mandó «que esperasen la promesa del Padre… porque Juan ciertamente bautizó con agua, mas vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días» (Hch 1:4-5). Investir es vestir: el poder del Espíritu viene sobre el discípulo como un vestido que lo cubre para su tarea.',
        { h: 'Poder para testificar' },
        'Jesús explicó el propósito: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Estos discípulos ya creían en Jesús resucitado, lo habían adorado y habían recibido sus enseñanzas durante cuarenta días. Sin embargo, Jesús les dijo que no comenzaran la misión hasta recibir ese poder.',
        { h: 'Esperar en oración' },
        'Los discípulos obedecieron. Volvieron a Jerusalén y, con las mujeres, con María la madre de Jesús y con los hermanos de Él, unos ciento veinte en total, perseveraban unánimes en oración (Hch 1:14-15). Jesús había enseñado que el Padre celestial dará el Espíritu Santo a los que se lo pidan (Lc 11:13). Diez días después, el día de Pentecostés, la promesa se cumplió.',
        { ir: { t: 'Ver «La promesa del Espíritu» en Hechos', a: '../../hechos/#espiritu/1' } }
      ],
      pensar: 'Los discípulos ya conocían a Jesús resucitado, y aun así Él les mandó no salir sin el poder del Espíritu. ¿Estás intentando servir a Dios con tus fuerzas, o has buscado ese poder que Él prometió?'
    },
    {
      id: 'pentecostes', n: 'El día de Pentecostés', ref: 'Hechos 2:1-21, 32-41; Levítico 23:15-21',
      fecha: 33,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../movimiento-pentecostal/img/pentecostes.webp', alt: 'Los discípulos reunidos en una casa de Jerusalén, con llamas de fuego sobre sus cabezas, alaban a Dios con los brazos levantados', pie: '«Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas» (Hch 2:4).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cuando llegó el día de Pentecostés, estaban todos unánimes juntos. Y de repente vino del cielo un estruendo como de un viento recio que soplaba, el cual llenó toda la casa donde estaban sentados; y se les aparecieron lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos. Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.', ref: 'Hechos 2:1-4' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que ocurrió en Pentecostés',
          cab: ['Señal', 'Qué indica', 'Texto'],
          filas: [
            ['Estruendo como de viento recio', 'El aliento de Dios que da vida, como en Ezequiel 37', 'Hch 2:2'],
            ['Lenguas como de fuego sobre cada uno', 'La presencia de Dios, que purifica y da poder a cada creyente', 'Hch 2:3'],
            ['Hablaron en otras lenguas', 'El evangelio para todas las naciones', 'Hch 2:4-11'],
            ['Predicación de Pedro', 'Poder para testificar con valor', 'Hch 2:14-36'],
            ['Tres mil convertidos', 'Comienza la cosecha', 'Hch 2:41']
          ],
          nota: 'El viento y el fuego no se repiten en Hechos; las lenguas, sí.'
        } }
      ],
      texto: [
        'Pentecostés era una de las tres grandes fiestas de Israel. Se celebraba cincuenta días después de la Pascua (de ahí su nombre griego) y marcaba el fin de la cosecha del trigo, cuando se presentaban a Dios los primeros panes del grano nuevo (Lv 23:15-21). Según la cronología del sitio, aquel Pentecostés fue el domingo 24 de mayo del año 33. Jerusalén estaba llena de judíos piadosos venidos de muchas naciones.',
        { h: 'Viento, fuego y lenguas' },
        'Los discípulos estaban «todos unánimes juntos». De repente vino del cielo un estruendo como de un viento recio, que llenó la casa, y aparecieron lenguas como de fuego que se asentaron sobre cada uno de ellos. «Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). La tabla resume las señales y su sentido.',
        'Las otras lenguas eran idiomas reales: la multitud, formada por judíos de Partia, Mesopotamia, Egipto, Roma y otras regiones, oía a los galileos hablar las maravillas de Dios en su propia lengua (Hch 2:8-11). En Babel, Dios había confundido las lenguas y dispersado a los pueblos (Gn 11). En Pentecostés, el Espíritu reúne a gente de muchas lenguas en una sola alabanza: el evangelio es para todas las naciones.',
        { h: '«Esto es lo dicho por el profeta Joel»' },
        'Algunos se burlaban, diciendo que estaban borrachos. Pedro, el mismo que semanas antes había negado a Jesús ante una criada, se puso de pie con valor y explicó que se estaba cumpliendo la profecía de Joel. Luego predicó a Cristo crucificado y resucitado, y concluyó que Jesús, exaltado a la diestra de Dios, había recibido del Padre la promesa del Espíritu y había derramado «esto que vosotros veis y oís» (Hch 2:33).',
        { h: 'Para vosotros y para vuestros hijos' },
        'Unos tres mil se convirtieron ese día. Pedro les dijo que se arrepintieran y se bautizaran en el nombre de Jesucristo, «y recibiréis el don del Espíritu Santo. Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:38-39). La promesa no era solo para los apóstoles ni solo para aquel día. Es para todos los creyentes de todos los tiempos, también para nosotros.',
        { ir: { t: 'Ver «Jerusalén: el Espíritu derramado» en Hechos', a: '../../hechos/#espiritu/2' } }
      ],
      pensar: 'Pedro dijo que la promesa es «para todos los que están lejos; para cuantos el Señor nuestro Dios llamare». ¿Crees que esa promesa es para ti hoy?'
    },
    {
      id: 'cinco', n: 'Los cinco relatos de Hechos', ref: 'Hechos 2:1-4; 8:14-19; 9:17-18; 10:44-48; 19:1-7',
      fecha: [33, 53],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Jerusalén, año 33: los ciento veinte son llenos del Espíritu y hablan en otras lenguas (Hch 2:4).', fecha: 33,
            estado: { view: HECHOS, capas: ['roma-14', 'iglesia-30'], lugares: ['jerusalen'] } },
          { t: 'Samaria, hacia el 34: los samaritanos creen y se bautizan; días después, Pedro y Juan les imponen las manos y reciben el Espíritu (Hch 8:14-17).', fecha: 34,
            estado: { view: HECHOS, capas: ['roma-14', 'iglesia-34'], lugares: ['jerusalen', 'samaria'] } },
          { t: 'Damasco, hacia el 34: tres días después de ver a Jesús, Saulo es lleno del Espíritu cuando Ananías le impone las manos (Hch 9:17).', fecha: 34,
            estado: { view: HECHOS, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'samaria', 'damasco'] } },
          { t: 'Cesarea, hacia el 40: mientras Pedro predica, el Espíritu cae sobre Cornelio y su casa, que hablan en lenguas (Hch 10:44-46).', fecha: 40,
            estado: { view: HECHOS, capas: ['roma-14', 'iglesia-40'], lugares: ['jerusalen', 'samaria', 'damasco', 'cesarea'] } },
          { t: 'Éfeso, hacia el 53: doce discípulos de Juan creen en Jesús, son bautizados y, al imponerles Pablo las manos, hablan en lenguas y profetizan (Hch 19:1-7).', fecha: 53,
            estado: { view: HECHOS, capas: ['roma-14', 'iglesia-52'], lugares: ['jerusalen', 'samaria', 'damasco', 'cesarea', 'efeso'] } }
        ] },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los cinco relatos comparados',
          cab: ['Lugar', 'Ya creían', 'Imposición de manos', 'Señal registrada', 'Texto'],
          filas: [
            ['Jerusalén', 'Sí, discípulos de Jesús', 'No', 'Hablaron en otras lenguas', 'Hch 2:4'],
            ['Samaria', 'Sí, creyeron y fueron bautizados', 'Sí, Pedro y Juan', 'Algo visible: Simón «vio» y quiso comprarlo', 'Hch 8:12-19'],
            ['Damasco', 'Sí, desde el camino («hermano Saulo»)', 'Sí, Ananías', 'No se registra; Pablo hablaba en lenguas', 'Hch 9:17; 1 Co 14:18'],
            ['Cesarea', 'Al mismo tiempo que creían', 'No', 'Hablaban en lenguas y magnificaban a Dios', 'Hch 10:44-46'],
            ['Éfeso', 'Sí, después de creer en Jesús y bautizarse', 'Sí, Pablo', 'Hablaban en lenguas y profetizaban', 'Hch 19:5-6']
          ],
          nota: 'En tres casos se dice que hablaron en lenguas; en Samaria hubo algo que se pudo ver; de Saulo sabemos por sus cartas que hablaba en lenguas.'
        } }
      ],
      texto: [
        'Lucas narra cinco ocasiones en que creyentes reciben el Espíritu Santo de manera visible. El mapa las sigue en orden, y la tabla las compara. El recurso Hechos estudia cada una con detalle. Aquí interesa lo que tienen en común.',
        { h: 'Samaria: creyentes que aún no lo habían recibido' },
        'Felipe predicó en Samaria, y muchos creyeron y fueron bautizados. Pero cuando los apóstoles supieron, enviaron a Pedro y a Juan, que oraron por ellos «para que recibiesen el Espíritu Santo; porque aún no había descendido sobre ninguno de ellos, sino que solamente habían sido bautizados en el nombre de Jesús» (Hch 8:15-16). Eran creyentes verdaderos, bautizados, y sin embargo todavía no habían recibido el Espíritu en el sentido de Pentecostés. Cuando les impusieron las manos, lo recibieron, y fue algo visible: Simón el mago «vio» que el Espíritu se daba y ofreció dinero para tener ese poder (Hch 8:18).',
        { h: 'Damasco, Cesarea y Éfeso' },
        'Saulo se encontró con Jesús en el camino y lo llamó Señor. Tres días después, Ananías llegó, lo llamó «hermano Saulo» y le impuso las manos para que recobrara la vista y fuera lleno del Espíritu Santo (Hch 9:17). En Cesarea, el orden fue distinto: el Espíritu cayó sobre Cornelio y los suyos mientras Pedro todavía predicaba, y los judíos que lo acompañaban se asombraron, «porque los oían que hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46). En Éfeso, Pablo encontró a unos discípulos que solo conocían el bautismo de Juan. Les explicó el evangelio, fueron bautizados en el nombre de Jesús y, cuando Pablo les impuso las manos, vino sobre ellos el Espíritu Santo, «y hablaban en lenguas, y profetizaban» (Hch 19:6).',
        { h: 'Lo que tienen en común' },
        'Los detalles varían: a veces hay imposición de manos y a veces no; a veces el Espíritu viene después de creer y a veces al mismo tiempo. Pero se repiten tres cosas. Es una experiencia que se reconoce: las personas saben cuándo la recibieron. Es una experiencia de poder que lleva a hablar: en lenguas, en alabanza, en profecía. Y en tres de los cinco relatos se dice expresamente que hablaron en lenguas. Las dos estaciones siguientes estudian las dos conclusiones que la tradición pentecostal saca de estos relatos.',
        { ir: { t: 'Ver «El patrón de Hechos» en Hechos', a: '../../hechos/#espiritu/7' } }
      ],
      pensar: 'Los samaritanos creyeron y fueron bautizados, pero los apóstoles no se conformaron hasta verlos recibir el Espíritu. ¿Te conformas con menos de lo que Dios prometió a su iglesia?'
    },
    {
      id: 'subsecuencia', n: 'Distinto de la conversión', fecha: [33, 53], ref: 'Hechos 1:5, 8; 2:38-39; 8:12-17; 19:1-6; Lucas 11:13; 1 Corintios 12:13',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dos-obras.svg', alt: 'Dos columnas: a la izquierda, la conversión, con el Espíritu que regenera, mora y sella a todo creyente; a la derecha, el bautismo en el Espíritu, con Cristo que bautiza en el Espíritu para dar poder y testificar, prometido a todos', pie: 'Todo creyente tiene el Espíritu; el bautismo en el Espíritu es una obra distinta, para el poder y el servicio.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cuando los apóstoles que estaban en Jerusalén oyeron que Samaria había recibido la palabra de Dios, enviaron allá a Pedro y a Juan; los cuales, habiendo venido, oraron por ellos para que recibiesen el Espíritu Santo; porque aún no había descendido sobre ninguno de ellos, sino que solamente habían sido bautizados en el nombre de Jesús. Entonces les imponían las manos, y recibían el Espíritu Santo.', ref: 'Hechos 8:14-17' }
      ],
      texto: [
        'La primera conclusión que la tradición pentecostal clásica saca de Hechos es que el bautismo en el Espíritu Santo es una experiencia distinta de la conversión y, en la mayoría de los casos, posterior a ella. Los teólogos lo llaman subsecuencia.',
        { h: 'Las razones' },
        'La primera razón está en los mismos discípulos: ya habían creído en Jesús, lo habían seguido, habían sido enviados a predicar y, según Juan 20:22, habían recibido el Espíritu del Cristo resucitado. Aun así, Jesús les dijo que esperaran el bautismo en el Espíritu. La segunda está en Samaria: los samaritanos creyeron, fueron bautizados y solo días después recibieron el Espíritu (Hch 8:12-17). La tercera, en Saulo: se convirtió en el camino y fue lleno del Espíritu tres días después. La cuarta, en Éfeso: Pablo pregunta a unos discípulos si recibieron el Espíritu Santo cuando creyeron (Hch 19:2), una pregunta que no tendría sentido si toda persona lo recibe necesariamente en ese momento.',
        'Además, el propósito es distinto. La conversión tiene que ver con la salvación: el perdón, la vida nueva, la adopción. El bautismo en el Espíritu tiene que ver con el poder para el servicio: «recibiréis poder… y me seréis testigos» (Hch 1:8). El esquema muestra las dos obras.',
        { h: 'Puede ocurrir casi al mismo tiempo' },
        'Subsecuencia no significa que tenga que pasar mucho tiempo entre una cosa y otra. En la casa de Cornelio, los gentiles creyeron y fueron bautizados en el Espíritu casi en el mismo momento (Hch 10:44). Lo importante es que son dos obras distintas, aunque a veces coincidan en el tiempo. Tampoco significa que haya cristianos de primera y de segunda categoría: todo creyente tiene el Espíritu Santo, y la promesa del bautismo es para todos.',
        { posturas: {
          titulo: '¿El bautismo en el Espíritu es distinto de la conversión?',
          a: { n: 'Una experiencia distinta, para el poder', t: 'Es la postura de las Asambleas de Dios y del pentecostalismo clásico: el bautismo en el Espíritu es una experiencia distinta de la regeneración, posterior a ella en el orden lógico y casi siempre en el tiempo, para recibir poder para el servicio. Se apoya en los relatos de Hechos, que Lucas escribe no solo como historia, sino para enseñar (Lc 1:1-4), y en la diferencia entre 1 Corintios 12:13 y la promesa de Juan el Bautista.' },
          b: { n: 'Parte de la conversión', t: 'Muchos evangélicos, como los bautistas, los presbiterianos y una parte del movimiento carismático, enseñan que todo creyente es bautizado en el Espíritu al convertirse (1 Co 12:13). Ven los casos de Hechos como excepciones de una etapa de transición, mientras la iglesia se extendía a samaritanos y gentiles, y hablan después de «llenuras» repetidas en lugar de un bautismo posterior.' },
          c: 'Las dos posturas coinciden en que todo creyente tiene el Espíritu y en que debe ser lleno de Él. Este recurso sigue la primera, porque los relatos de Hechos repiten un mismo modelo en Jerusalén, Samaria, Damasco y Éfeso, veinte años después de Pentecostés, cuando ya no había transición que explicar. Lucas lo presenta con las palabras de Pedro: «para vosotros es la promesa, y para vuestros hijos» (Hch 2:39).'
        } }
      ],
      pensar: 'La pregunta de Pablo en Éfeso sigue vigente: «¿Recibisteis el Espíritu Santo cuando creísteis?». ¿Cómo la responderías tú?'
    },
    {
      id: 'evidencia', n: 'Hablar en otras lenguas', fecha: 40, ref: 'Hechos 2:4; 10:44-47; 11:15-17; 19:6; Marcos 16:17; 1 Corintios 14:18',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-cornelio.webp', alt: 'En el patio de una casa romana en Cesarea, el centurión Cornelio, su familia y sus amigos alaban a Dios con los brazos levantados, mientras Pedro, de pie, y los judíos que lo acompañan los miran asombrados', pie: 'En casa de Cornelio, la señal convenció a Pedro: «los oían que hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mientras aún hablaba Pedro estas palabras, el Espíritu Santo cayó sobre todos los que oían el discurso. Y los fieles de la circuncisión que habían venido con Pedro se quedaron atónitos de que también sobre los gentiles se derramase el don del Espíritu Santo. Porque los oían que hablaban en lenguas, y que magnificaban a Dios. Entonces respondió Pedro: ¿Puede acaso alguno impedir el agua, para que no sean bautizados estos que han recibido el Espíritu Santo también como nosotros?', ref: 'Hechos 10:44-47' }
      ],
      texto: [
        'La segunda conclusión de la tradición pentecostal clásica es que la señal física inicial del bautismo en el Espíritu Santo es hablar en otras lenguas, según el Espíritu da que se hable. Las Asambleas de Dios la llaman evidencia física inicial.',
        { h: 'Cómo supo Pedro' },
        'El relato de Cesarea es el más claro. Pedro había ido a la casa de un gentil a regañadientes, después de una visión. Mientras predicaba, el Espíritu cayó sobre los oyentes, y los judíos que lo acompañaban se asombraron de que el don del Espíritu se derramara también sobre los gentiles. ¿Cómo lo supieron? «Porque los oían que hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46). La señal fue suficiente para que Pedro mandara bautizarlos, y después, para convencer a la iglesia de Jerusalén: «cayó el Espíritu Santo sobre ellos también, como sobre nosotros al principio» (Hch 11:15). Las lenguas mostraron que era la misma experiencia de Pentecostés.',
        { h: 'Un patrón' },
        'En Jerusalén, Cesarea y Éfeso, Lucas dice expresamente que los que recibieron el Espíritu hablaron en lenguas. En Samaria no lo menciona, pero dice que hubo algo visible que impresionó a Simón el mago. De Saulo no dice nada en Hechos, pero el mismo Pablo escribió después: «Doy gracias a Dios que hablo en lenguas más que todos vosotros» (1 Co 14:18). En ningún relato se menciona otra señal que se repita.',
        { h: 'Lo que no significa' },
        'Esta enseñanza se entiende mal con facilidad, y conviene precisar. Las lenguas no son un requisito para ser salvo: la salvación es por gracia, por medio de la fe en Cristo. En esto el pentecostalismo trinitario se diferencia de los pentecostales unicitarios, que enseñan que sin lenguas no hay salvación. Las lenguas tampoco miden la espiritualidad ni la madurez: los corintios hablaban mucho en lenguas y eran carnales (1 Co 3:1). Y la evidencia inicial no es lo mismo que el don de lenguas de 1 Corintios 12, que la ruta VI estudia.',
        { posturas: {
          titulo: '¿Las lenguas son la señal inicial del bautismo en el Espíritu?',
          a: { n: 'La evidencia física inicial', t: 'Las Asambleas de Dios confiesan que el bautismo en el Espíritu Santo se evidencia por la señal física inicial de hablar en otras lenguas como el Espíritu da que se hable (Hch 2:4). Se apoyan en el patrón de Hechos y en que la señal fue el criterio de Pedro en Cesarea.' },
          b: { n: 'Una señal posible, no necesaria', t: 'Muchos carismáticos y algunos pentecostales, sobre todo en América Latina y en otros lugares del mundo, creen en el bautismo en el Espíritu como experiencia distinta, pero no exigen las lenguas como señal: puede manifestarse con profecía, con alabanza o con poder para testificar. Señalan que Pablo pregunta: «¿hablan todos lenguas?» (1 Co 12:30), esperando un no.' },
          c: 'Este recurso sigue la primera postura, en la línea de las Asambleas de Dios. La pregunta de 1 Corintios 12:30 se refiere al don de lenguas en el culto, no a la señal inicial; la ruta VIII la estudia. Las dos posturas coinciden en lo esencial: la promesa del Espíritu es para todos y hay que buscarla.'
        } },
        { ir: { t: 'Ver «¿Hablan todos lenguas?» en este recurso', a: '#textos/2' } }
      ],
      pensar: 'Las lenguas son una señal, no un trofeo. ¿Buscas al Espíritu para tener una experiencia o para tener poder para servir y testificar de Cristo?'
    },
    {
      id: 'poder', n: 'Poder para testificar', fecha: [33, 36], ref: 'Hechos 1:8; 4:8-13, 29-31; 6:8-10; Lucas 24:48-49; 1 Corintios 2:4',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-pedro-sanedrin.webp', alt: 'Pedro y Juan, de pie ante los jueces del Sanedrín sentados en semicírculo, hablan con firmeza', pie: 'Lleno del Espíritu Santo, Pedro habló con valor ante los mismos jueces que habían condenado a Jesús (Hch 4:8-13).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que el poder del Espíritu produjo en Hechos',
          cab: ['Efecto', 'Ejemplo', 'Texto'],
          filas: [
            ['Valor para hablar', 'Pedro y Juan ante el Sanedrín', 'Hch 4:8-13'],
            ['Predicación eficaz', 'Tres mil y luego cinco mil convertidos', 'Hch 2:41; 4:4'],
            ['Señales y prodigios', 'Sanidades en Jerusalén, Samaria y Listra', 'Hch 3:6-8; 8:6-7; 14:8-10'],
            ['Sabiduría para responder', 'Esteban ante sus adversarios', 'Hch 6:10'],
            ['Guía en la misión', 'Felipe y el etíope; Pablo en Troas', 'Hch 8:29; 16:6-10'],
            ['Gozo en la persecución', 'Los apóstoles azotados', 'Hch 5:41; 13:52']
          ],
          nota: 'El poder del Espíritu en Hechos siempre está al servicio del testimonio de Cristo.'
        } }
      ],
      texto: [
        'Jesús dejó claro el propósito del bautismo en el Espíritu: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos» (Hch 1:8). No es una experiencia para disfrutar en privado ni un premio para los más espirituales: es un equipamiento para la misión.',
        { h: 'Dýnamis' },
        'La palabra griega para poder es dýnamis, de la que vienen «dinamita» y «dinámico». Pero en Hechos el poder del Espíritu no se ve en explosiones de emoción, sino en personas comunes que hablan de Jesús con un valor que no tenían. Pedro, que había negado a Jesús ante una criada, lleno del Espíritu Santo, acusó a los jefes del pueblo de haber crucificado al Mesías y anunció que en ningún otro hay salvación. Ellos se maravillaron, viendo que eran «hombres sin letras y del vulgo», y «les reconocían que habían estado con Jesús» (Hch 4:13).',
        { h: 'Testigos' },
        'La palabra griega para testigo es mártys, de la que viene «mártir». Un testigo cuenta lo que ha visto y oído, aunque le cueste. Esteban, «lleno de gracia y de poder», hacía grandes prodigios, y sus adversarios no podían resistir la sabiduría y el Espíritu con que hablaba (Hch 6:8-10). Terminó apedreado, mirando al cielo, lleno del Espíritu Santo (Hch 7:55). El poder del Espíritu no libra siempre del sufrimiento; da fuerza para ser fiel en él.',
        { h: 'Hasta lo último de la tierra' },
        'Hechos 1:8 es también el bosquejo del libro: Jerusalén, Judea y Samaria, y lo último de la tierra. En cada etapa, el Espíritu va adelante: impulsa a Felipe hacia el etíope, aparta a Bernabé y a Saulo para la misión, e impide a Pablo ir a Asia para llevarlo a Europa. La expansión de la iglesia es obra del Espíritu.',
        'Por eso el pentecostalismo ha sido desde el comienzo un movimiento misionero. Los primeros pentecostales de Azusa y de Valparaíso entendieron que el bautismo en el Espíritu era para salir a predicar, y en pocas décadas el mensaje llegó a todos los continentes. El recurso El movimiento pentecostal cuenta esa historia.',
        { ir: { t: 'Ver «Misión y esperanza: recibiréis poder» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#doctrina/5' } }
      ],
      pensar: 'Pedro y Juan eran «hombres sin letras y del vulgo», pero la gente reconocía que habían estado con Jesús. ¿Qué reconocen los demás cuando te escuchan hablar de tu fe?'
    },
    {
      id: 'recibir', n: 'Cómo se recibe', fecha: 33, ref: 'Lucas 11:9-13; Hechos 1:14; 2:38-39; 5:32; Gálatas 3:2, 5, 14; Juan 7:37-39',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y yo os digo: Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama, se le abrirá. ¿Qué padre de vosotros, si su hijo le pide pan, le dará una piedra? ¿o si pescado, en lugar de pescado, le dará una serpiente? ¿O si le pide un huevo, le dará un escorpión? Pues si vosotros, siendo malos, sabéis dar buenas dádivas a vuestros hijos, ¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?', ref: 'Lucas 11:9-13' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que ayuda y lo que estorba',
          cab: ['Ayuda', 'Estorba'],
          filas: [
            ['Ser creyente: haber nacido de nuevo', 'Buscar la experiencia sin conocer a Cristo'],
            ['Pedir con fe, como un hijo a su Padre', 'Pensar que hay que ganarlo con méritos'],
            ['Tener sed de Dios', 'La indiferencia o la autosuficiencia'],
            ['Obedecer a Dios', 'Pecados conocidos que no se quieren dejar'],
            ['Esperar con paciencia, sin angustia', 'La ansiedad, la comparación y la presión'],
            ['Entregar la voz y el corazón a Dios', 'El miedo a perder el control o a hacer el ridículo']
          ],
          nota: 'El Espíritu es un don: se recibe por fe, no se fabrica ni se compra (Hch 8:20).'
        } }
      ],
      texto: [
        'Si el bautismo en el Espíritu es para todos los creyentes, ¿cómo se recibe? La Biblia no da una técnica ni un método, porque es un don de Dios. Pero sí muestra la actitud con que se recibe.',
        { h: 'Pedir como un hijo' },
        'Jesús enseñó a pedir con insistencia: pedid, buscad, llamad. Y concluyó con una comparación: si un padre terrenal, siendo malo, no da a su hijo una serpiente cuando le pide un pescado, «¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?» (Lc 11:13). El Padre quiere dar el Espíritu. No tenemos que convencerlo ni temer que nos dé algo malo en su lugar. Pedir es reconocer que lo necesitamos.',
        { h: 'Por fe, no por méritos' },
        'Pablo preguntó a los gálatas: «¿Recibisteis el Espíritu por las obras de la ley, o por el oír con fe?» (Gá 3:2). El Espíritu no es un premio para los que han alcanzado un nivel de santidad. Se recibe por fe, como la salvación. Al mismo tiempo, Pedro habla del Espíritu Santo, «el cual ha dado Dios a los que le obedecen» (Hch 5:32). No se gana con obediencia, pero quien cree de verdad quiere obedecer, y un pecado que no se quiere dejar estorba la comunión con Dios.',
        { h: 'Con sed' },
        'Jesús dijo: «Si alguno tiene sed, venga a mí y beba» (Jn 7:37). La sed es una necesidad que no se puede disimular. Los ciento veinte esperaron diez días unánimes en oración. En Cesarea, en cambio, el Espíritu cayó mientras escuchaban la predicación. Dios no tiene un solo modo. A algunos les llega en un momento de oración personal, a otros en un culto o mientras se les imponen las manos.',
        { h: 'Sin ansiedad ni presión' },
        'Las iglesias pentecostales enseñan a buscar con fervor, pero sin angustia. Nadie debe sentirse menos cristiano porque aún no lo ha recibido, ni ser presionado a imitar sonidos para «soltar la lengua». Las lenguas que da el Espíritu no se aprenden ni se fabrican. Basta con creer en la promesa, abrir el corazón y la boca para alabar a Dios, y dejar que el Espíritu dé que hablar. El Padre es fiel.',
        { ejercicio: {
          pregunta: 'Según Lucas 11:13, ¿cuál es la actitud correcta para recibir el Espíritu Santo?',
          opciones: [
            { t: 'Pedir con la confianza de un hijo, sabiendo que el Padre quiere darlo.', ok: true, por_que: 'Jesús compara a Dios con un padre bueno que da cosas buenas a sus hijos que le piden.' },
            { t: 'Ayunar y orar hasta merecerlo.', ok: false, por_que: 'El ayuno y la oración son buenos, pero el Espíritu se recibe por fe y no por méritos (Gá 3:2).' },
            { t: 'Repetir sonidos hasta que salgan las lenguas.', ok: false, por_que: 'Las lenguas las da el Espíritu (Hch 2:4); no se producen con una técnica.' }
          ],
          explicacion: 'El Espíritu es un don del Padre a sus hijos: se pide y se recibe por fe.'
        } }
      ],
      pensar: '¿Has pedido al Padre el Espíritu Santo con la confianza de un hijo? Si ya lo recibiste, ¿por quién podrías orar para que lo reciba?'
    },
    {
      id: 'llenuras', n: 'Una vez bautizados, muchas veces llenos', fecha: [33, 47], ref: 'Hechos 2:4; 4:8, 31; 6:3, 5; 7:55; 9:17; 13:9, 52; Efesios 5:18-21',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Llenos del Espíritu en Hechos',
          cab: ['Quién', 'Cuándo', 'Texto'],
          filas: [
            ['Los ciento veinte', 'En Pentecostés', 'Hch 2:4'],
            ['Pedro', 'Al hablar ante el Sanedrín', 'Hch 4:8'],
            ['Los mismos discípulos', 'Al orar después de las amenazas', 'Hch 4:31'],
            ['Los siete', 'Como requisito para servir las mesas', 'Hch 6:3'],
            ['Esteban', 'Al morir apedreado', 'Hch 7:55'],
            ['Saulo', 'Al recibir la vista', 'Hch 9:17'],
            ['Pablo', 'Al reprender a Elimas', 'Hch 13:9'],
            ['Los discípulos de Antioquía', 'En medio de la persecución', 'Hch 13:52']
          ],
          nota: 'Pedro fue lleno en Hechos 2, 4:8 y 4:31: un bautismo, muchas llenuras.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y ahora, Señor, mira sus amenazas, y concede a tus siervos que con todo denuedo hablen tu palabra, mientras extiendes tu mano para que se hagan sanidades y señales y prodigios mediante el nombre de tu santo Hijo Jesús. Cuando hubieron orado, el lugar en que estaban congregados tembló; y todos fueron llenos del Espíritu Santo, y hablaban con denuedo la palabra de Dios.', ref: 'Hechos 4:29-31' }
      ],
      texto: [
        'El bautismo en el Espíritu no es la meta de la vida cristiana, sino una puerta a una vida llena del Espíritu. Hechos usa la expresión «lleno del Espíritu» para describir no solo la primera experiencia, sino momentos posteriores en que Dios renueva su poder.',
        { h: 'Pedro, lleno otra vez' },
        'Pedro fue lleno del Espíritu en Pentecostés (Hch 2:4). Poco después, al hablar ante el Sanedrín, «lleno del Espíritu Santo» respondió a los jueces (Hch 4:8). Al volver a los hermanos, oraron juntos pidiendo valor para seguir predicando, «y todos fueron llenos del Espíritu Santo, y hablaban con denuedo la palabra de Dios» (Hch 4:31). La tabla muestra otros casos. Un bautismo, muchas llenuras: el creyente necesita ser lleno una y otra vez para cada nueva tarea y cada nueva prueba.',
        { h: '«Sed llenos del Espíritu»' },
        'Pablo lo manda a toda la iglesia de Éfeso: «No os embriaguéis con vino, en lo cual hay disolución; antes bien sed llenos del Espíritu» (Ef 5:18). El verbo está en presente continuo: «seguid siendo llenos». No es una experiencia de una vez, sino un estilo de vida. Pablo compara y contrasta con la borrachera: el vino toma el control y lleva al desorden; el Espíritu también llena por completo, pero lleva al dominio propio y a la alabanza.',
        { h: 'Cómo se ve una vida llena' },
        'Pablo describe a continuación lo que produce: hablar entre nosotros con salmos, himnos y cánticos espirituales, cantar y alabar al Señor en el corazón, dar siempre gracias a Dios por todo y someterse unos a otros en el temor de Dios (Ef 5:19-21). Después aplica esa sumisión mutua al matrimonio, a la familia y al trabajo. La llenura del Espíritu no se mide solo en el culto, sino en la casa.',
        { h: 'Lleno para servir' },
        'Cuando la iglesia de Jerusalén eligió a siete hombres para servir las mesas de las viudas, el requisito fue que estuvieran «llenos del Espíritu Santo y de sabiduría» (Hch 6:3). Repartir comida requería la misma llenura que predicar. Toda tarea en el reino de Dios, visible o escondida, necesita el poder del Espíritu.',
        { ir: { t: 'Ver «Llenuras y dones del Espíritu» en Hechos', a: '../../hechos/#teologia/3' } }
      ],
      pensar: 'Pedro necesitó ser lleno del Espíritu varias veces. ¿Cuándo fue la última vez que pediste a Dios una nueva llenura para la tarea o la prueba que tienes delante?'
    }
  ];

  /* ---------------- VI. Los dones del Espíritu ---------------- */
  const dones = [
    {
      id: 'carisma', n: '¿Qué es un don espiritual?', ref: '1 Corintios 12:1-11; Romanos 12:6; 1 Pedro 4:10-11',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dones.svg', alt: 'Esquema de los nueve dones de 1 Corintios 12 agrupados en tres: dones para saber (palabra de sabiduría, palabra de ciencia y discernimiento de espíritus), dones para hacer (fe, sanidades y milagros) y dones para hablar (profecía, lenguas e interpretación)', pie: 'Los nueve dones de 1 Corintios 12:8-10, en la clasificación más usada.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ahora bien, hay diversidad de dones, pero el Espíritu es el mismo. Y hay diversidad de ministerios, pero el Señor es el mismo. Y hay diversidad de operaciones, pero Dios, que hace todas las cosas en todos, es el mismo. Pero a cada uno le es dada la manifestación del Espíritu para provecho.', ref: '1 Corintios 12:4-7' }
      ],
      texto: [
        'La iglesia de Corinto tenía muchos dones y muchos problemas. Pablo dedicó tres capítulos de su primera carta, del 12 al 14, a enseñarle sobre los dones espirituales. Comienza así: «No quiero, hermanos, que ignoréis acerca de los dones espirituales» (1 Co 12:1).',
        { h: 'Carismas' },
        'La palabra que usa Pablo es járisma, de la misma raíz que járis, «gracia». Un carisma es un regalo de la gracia de Dios: no se gana ni se merece. Pablo describe los dones desde la Trinidad: hay diversidad de dones, pero el Espíritu es el mismo; diversidad de ministerios, pero el Señor es el mismo; diversidad de operaciones, pero Dios es el mismo (1 Co 12:4-6).',
        { h: 'Para provecho de todos' },
        'El versículo 7 da la clave: «a cada uno le es dada la manifestación del Espíritu para provecho». Los dones no son para exhibir la espiritualidad de nadie, sino para edificar a la iglesia. Pedro lo dice así: «Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios» (1 P 4:10). Un don que no sirve a otros pierde su propósito.',
        { h: 'Como Él quiere' },
        'Pablo agrega: «todas estas cosas las hace uno y el mismo Espíritu, repartiendo a cada uno en particular como él quiere» (1 Co 12:11). El Espíritu decide qué don da a cada creyente. Eso excluye dos errores: el orgullo de quien cree que su don lo hace superior y la envidia de quien cree que su don no vale. Pablo exhorta también a procurar «los dones mejores» (1 Co 12:31), es decir, los que más edifican a la iglesia en cada momento.',
        { h: 'Los nueve dones' },
        'En 1 Corintios 12:8-10, Pablo enumera nueve manifestaciones del Espíritu. El esquema muestra la clasificación más usada en la enseñanza pentecostal: dones para saber, dones para hacer y dones para hablar. Es una ayuda didáctica, no una división que haga Pablo. Las tres estaciones siguientes los estudian de tres en tres. Pablo menciona otros dones en Romanos 12, Efesios 4 y 1 Pedro 4, que la estación 7 reúne. Ninguna lista es completa.',
        { ejercicio: {
          pregunta: 'Según 1 Corintios 12:7, ¿para qué se da la manifestación del Espíritu?',
          opciones: [
            { t: 'Para provecho de todos, es decir, para edificar a la iglesia.', ok: true, por_que: 'Pablo dice que se da «para provecho», y en el capítulo 14 insiste en que todo se haga para edificación.' },
            { t: 'Para mostrar quiénes son los creyentes más espirituales.', ok: false, por_que: 'Ese era el error de los corintios. Los dones son regalos de la gracia, no medallas.' },
            { t: 'Para el beneficio personal de quien lo recibe.', ok: false, por_que: 'Algunos dones edifican también a quien los ejerce (1 Co 14:4), pero el propósito principal es servir a otros.' }
          ],
          explicacion: 'Los dones son regalos de la gracia de Dios para servir a la iglesia.'
        } }
      ],
      pensar: 'Si cada creyente ha recibido una manifestación del Espíritu para provecho de otros, ¿cuál crees que es la tuya, y a quién estás sirviendo con ella?'
    },
    {
      id: 'revelacion', n: 'Sabiduría, ciencia y discernimiento', ref: '1 Corintios 12:8, 10; Hechos 5:1-11; 15:28; 16:16-18; 1 Juan 4:1',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dones para saber',
          cab: ['Don', 'Qué es', 'Ejemplo bíblico'],
          filas: [
            ['Palabra de sabiduría', 'Una palabra dada por el Espíritu que muestra qué hacer o cómo aplicar la verdad de Dios en una situación concreta', 'La decisión del concilio de Jerusalén: «ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28)'],
            ['Palabra de ciencia', 'Un conocimiento dado por el Espíritu de hechos que la persona no podría saber por sí misma', 'Pedro sabe que Ananías retuvo parte del dinero (Hch 5:3); Jesús y la samaritana (Jn 4:17-18)'],
            ['Discernimiento de espíritus', 'La capacidad de distinguir si una manifestación viene de Dios, de un espíritu malo o del ser humano', 'Pablo y la muchacha con espíritu de adivinación (Hch 16:16-18)']
          ],
          nota: 'La Biblia no define estos dones con detalle; las definiciones se deducen de los ejemplos.'
        } }
      ],
      texto: [
        'Los tres primeros dones de esta clasificación tienen que ver con saber lo que solo Dios sabe. Pablo no los define, y por eso hay que deducir su sentido de los ejemplos bíblicos, con humildad.',
        { h: 'Palabra de sabiduría' },
        'Pablo no habla del don de sabiduría en general, sino de «palabra de sabiduría» (1 Co 12:8): una palabra concreta, dada para un momento. La sabiduría bíblica no es acumular información, sino saber cómo vivir según la voluntad de Dios. Un ejemplo es el concilio de Jerusalén (Hch 15). La iglesia enfrentaba una pregunta que podía dividirla: ¿debían los gentiles circuncidarse? Después de escuchar, Jacobo propuso una solución, y la carta a las iglesias dice: «ha parecido bien al Espíritu Santo, y a nosotros» (Hch 15:28). Jesús había prometido esta clase de ayuda a sus discípulos cuando fueran llevados ante autoridades: «yo os daré palabra y sabiduría» (Lc 21:15).',
        { h: 'Palabra de ciencia' },
        'La «palabra de ciencia» es, según la mayoría de los intérpretes pentecostales, un conocimiento sobrenatural de hechos que la persona no podría conocer por medios naturales. Jesús sabía que la samaritana había tenido cinco maridos (Jn 4:18). Pedro supo que Ananías y Safira habían retenido parte del dinero (Hch 5:3). Otros entienden este don como la capacidad de entender y enseñar las verdades de la fe. En cualquier caso, su propósito es edificar: en Juan 4, el conocimiento abrió el corazón de una mujer al Mesías.',
        { h: 'Discernimiento de espíritus' },
        'No todo lo que parece espiritual viene de Dios. En Filipos, una muchacha con espíritu de adivinación seguía a Pablo gritando algo verdadero: «Estos hombres son siervos del Dios Altísimo». Pero Pablo discernió que la fuente no era el Espíritu Santo, y echó fuera al espíritu en el nombre de Jesús (Hch 16:16-18). Juan manda a todos los creyentes: «no creáis a todo espíritu, sino probad los espíritus si son de Dios» (1 Jn 4:1). Todos deben examinar todo a la luz de la Escritura; algunos reciben además una capacidad especial para discernir.',
        { h: 'Un cuidado necesario' },
        'Estos dones se prestan a abusos. Hay quienes dicen tener «una palabra» sobre la vida de otros para controlarlos, avergonzarlos o pedirles dinero. Un don verdadero no contradice la Escritura, no busca dominar a las personas ni exhibirse, y se somete a la evaluación de la iglesia (1 Co 14:29). Lo que no pasa esa prueba no viene del Espíritu.'
      ],
      pensar: 'Juan manda probar los espíritus. ¿Qué haces cuando alguien te dice que tiene una palabra de Dios para ti? ¿La comparas con la Escritura y la evalúas con otros creyentes maduros?'
    },
    {
      id: 'poder-dones', n: 'Fe, sanidades y milagros', ref: '1 Corintios 12:9-10; Hechos 3:1-10; 9:32-42; 19:11-12; Santiago 5:14-16',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-cojo-hermosa.webp', alt: 'Pedro toma de la mano derecha a un hombre cojo sentado junto a la puerta del templo llamada la Hermosa y lo levanta, mientras Juan observa', pie: '«No tengo plata ni oro, pero lo que tengo te doy; en el nombre de Jesucristo de Nazaret, levántate y anda» (Hch 3:6).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dones para hacer',
          cab: ['Don', 'Qué es', 'Ejemplo bíblico'],
          filas: [
            ['Fe', 'Una confianza extraordinaria, dada por el Espíritu para un momento, de que Dios hará algo', 'Pedro ante el cojo de la puerta la Hermosa (Hch 3:6, 16)'],
            ['Dones de sanidades', 'Sanidades de enfermedades por el poder de Dios', 'Eneas en Lida (Hch 9:33-34); los enfermos de Malta (Hch 28:8-9)'],
            ['Hacer milagros', 'Obras de poder que superan el orden natural', 'Dorcas resucitada (Hch 9:40); Elimas queda ciego (Hch 13:11)']
          ],
          nota: 'Pablo dice «dones de sanidades», en plural: cada sanidad es un regalo.'
        } }
      ],
      texto: [
        'El segundo grupo de dones tiene que ver con el poder de Dios que actúa en el mundo físico. Son los dones que más acompañaron la predicación del evangelio en Hechos.',
        { h: 'El don de fe' },
        'Todo creyente tiene fe para salvación, y todo creyente debe crecer en la fe. Pero Pablo menciona la fe como un don especial, que no todos tienen (1 Co 12:9). Se trata de una confianza extraordinaria, dada para una situación concreta, de que Dios va a actuar. Pedro miró al cojo que pedía limosna y le dijo: «en el nombre de Jesucristo de Nazaret, levántate y anda» (Hch 3:6). Después explicó que fue la fe en el nombre de Jesús la que le dio completa sanidad (Hch 3:16).',
        { h: 'Dones de sanidades' },
        'Pablo dice «dones de sanidades», en plural: cada sanidad es un regalo de Dios, no un poder que una persona posee y usa a voluntad. Ni siquiera Pablo pudo sanar siempre: dejó a Trófimo enfermo en Mileto (2 Ti 4:20) y aconsejó a Timoteo que tomara un poco de vino por su estómago (1 Ti 5:23). Además de este don, Santiago enseña que los enfermos llamen a los ancianos de la iglesia para que oren por ellos ungiéndolos con aceite, «y la oración de fe salvará al enfermo» (Stg 5:14-15). La sanidad divina, provista en la obra de Cristo, es parte del evangelio completo, como estudia el recurso La persona y obra de Cristo.',
        { h: 'Hacer milagros' },
        'Los milagros son obras de poder que superan el orden natural: Pedro resucitó a Dorcas en Jope (Hch 9:40), Pablo dejó ciego por un tiempo al mago Elimas (Hch 13:11), y Dios hacía milagros extraordinarios por mano de Pablo en Éfeso (Hch 19:11). En Hechos, los milagros nunca son espectáculos: abren puertas al evangelio y glorifican a Jesús, no a quien ora.',
        { h: 'Equilibrio' },
        'Las iglesias pentecostales creen que Dios sana y hace milagros hoy, y oran con fe por los enfermos. Al mismo tiempo, no desprecian la medicina, que también es un don de Dios; Lucas era médico (Col 4:14). No culpan al enfermo que no sana de tener poca fe, porque Pablo, Trófimo y Timoteo enfrentaron enfermedades. Y no prometen milagros a cambio de dinero: Pedro rechazó con dureza al que quiso comprar el poder de Dios (Hch 8:20).',
        { ir: { t: 'Ver «Sanidad en la expiación» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/8' } }
      ],
      pensar: 'Pedro dijo: «No tengo plata ni oro, pero lo que tengo te doy». ¿Por quién podrías orar esta semana con fe, sin buscar la gloria para ti?'
    },
    {
      id: 'expresion', n: 'Profecía, lenguas e interpretación', ref: '1 Corintios 12:10; 14:1-5, 13-19, 26-33',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-culto-casa.webp', alt: 'Una reunión de la iglesia primitiva en el patio de una casa de Corinto: un hombre de pie habla con las manos abiertas mientras los demás, sentados en bancos y sobre alfombras, escuchan con atención; lámparas de aceite al anochecer', pie: '«Cuando os reunís, cada uno de vosotros tiene salmo, tiene doctrina, tiene lengua, tiene revelación, tiene interpretación. Hágase todo para edificación» (1 Co 14:26).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dones para hablar',
          cab: ['Don', 'A quién se dirige', 'Qué produce', 'Texto'],
          filas: [
            ['Profecía', 'A la iglesia, en su idioma', 'Edificación, exhortación y consolación', '1 Co 14:3'],
            ['Diversos géneros de lenguas', 'A Dios, en un idioma no aprendido', 'Edifica al que habla; con interpretación, a la iglesia', '1 Co 14:2, 4-5'],
            ['Interpretación de lenguas', 'A la iglesia', 'Da a entender el sentido de un mensaje en lenguas', '1 Co 14:13, 27']
          ],
          nota: 'Lenguas con interpretación equivalen a profecía en cuanto a la edificación de la iglesia (1 Co 14:5).'
        } }
      ],
      texto: [
        'El tercer grupo de dones tiene que ver con la palabra hablada. Son los dones que más problemas causaban en Corinto, y por eso Pablo les dedica todo el capítulo 14.',
        { h: 'Profecía' },
        'En el Nuevo Testamento, profetizar no es principalmente predecir el futuro, aunque a veces lo incluye (Hch 11:28; 21:10-11). Pablo lo define por su efecto: «el que profetiza habla a los hombres para edificación, exhortación y consolación» (1 Co 14:3). Es un mensaje dado por el Espíritu, en el idioma de los oyentes, que fortalece, anima y consuela a la iglesia. Pablo lo prefería sobre las lenguas en el culto: «Seguid el amor; y procurad los dones espirituales, pero sobre todo que profeticéis» (1 Co 14:1).',
        { h: 'Diversos géneros de lenguas' },
        'El don de lenguas es la capacidad, dada por el Espíritu, de hablar en un idioma que la persona no ha aprendido. Pablo dice que «el que habla en lenguas no habla a los hombres, sino a Dios» (1 Co 14:2): es oración y alabanza. En Pentecostés eran idiomas humanos que los oyentes reconocían. En Corinto nadie entendía sin interpretación. Pablo menciona «lenguas humanas y angélicas» (1 Co 13:1), lo que algunos entienden como una posibilidad real y otros como una forma de hablar.',
        { h: 'Interpretación' },
        'Un mensaje en lenguas en el culto, sin interpretación, no edifica a nadie más que al que habla. Por eso Pablo manda que el que habla en lenguas pida en oración poder interpretarlas (1 Co 14:13), y que, si no hay intérprete, calle en la iglesia y hable para sí mismo y para Dios (1 Co 14:28). La interpretación no es una traducción palabra por palabra, sino dar a conocer el sentido de lo dicho. Una lengua interpretada edifica a la iglesia tanto como la profecía (1 Co 14:5).',
        { h: 'Uso en público y en privado' },
        'Pablo distingue dos usos. En el culto, lo que importa es la edificación de todos, y por eso las lenguas necesitan interpretación. En la vida personal, el creyente puede orar en lenguas sin interpretación, y Pablo valora esa oración: «el que habla en lengua extraña, a sí mismo se edifica» (1 Co 14:4). La próxima estación estudia este uso.',
        { ejercicio: {
          pregunta: 'En un culto, alguien da un mensaje en lenguas en voz alta y nadie lo interpreta. Según 1 Corintios 14, ¿qué debería hacerse?',
          opciones: [
            { t: 'Pedir a Dios la interpretación y, si no la hay, que en adelante el que habla en lenguas lo haga en voz baja, para sí y para Dios.', ok: true, por_que: 'Pablo pide orar por la interpretación (v. 13) y, si no hay intérprete, callar en la iglesia y hablar para sí mismo y para Dios (v. 28).' },
            { t: 'Prohibir las lenguas en la iglesia para evitar desorden.', ok: false, por_que: 'Pablo dice expresamente: «no impidáis el hablar lenguas» (1 Co 14:39).' },
            { t: 'Nada: todo mensaje en lenguas edifica a la iglesia, se entienda o no.', ok: false, por_que: 'Pablo dice que sin interpretación el otro no es edificado (1 Co 14:16-17).' }
          ],
          explicacion: 'En el culto, todo debe hacerse para edificación y con orden (1 Co 14:26, 40).'
        } }
      ],
      pensar: 'Pablo dice que el profeta habla para edificar, exhortar y consolar. ¿Qué palabras de ánimo podría estar queriendo darte Dios para alguien de tu iglesia esta semana?'
    },
    {
      id: 'orar-lenguas', n: 'Orar en lenguas', ref: '1 Corintios 14:2, 4, 14-18; Romanos 8:26; Efesios 6:18; Judas 20',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque si yo oro en lengua desconocida, mi espíritu ora, pero mi entendimiento queda sin fruto. ¿Qué, pues? Oraré con el espíritu, pero oraré también con el entendimiento; cantaré con el espíritu, pero cantaré también con el entendimiento. Porque si bendices sólo con el espíritu, el que ocupa lugar de simple oyente, ¿cómo dirá el Amén a tu acción de gracias? pues no sabe lo que has dicho. Porque tú, a la verdad, bien das gracias; pero el otro no es edificado. Doy gracias a Dios que hablo en lenguas más que todos vosotros;', ref: '1 Corintios 14:14-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos usos de las lenguas',
          cab: ['', 'Oración personal en lenguas', 'Mensaje en lenguas en el culto'],
          filas: [
            ['A quién se dirige', 'A Dios', 'A Dios, ante la iglesia'],
            ['Quién la recibe', 'Todo creyente bautizado en el Espíritu puede orar así', 'Algunos, como don para la iglesia (1 Co 12:30)'],
            ['Necesita interpretación', 'No', 'Sí'],
            ['A quién edifica', 'Al que ora', 'Con interpretación, a toda la iglesia'],
            ['Texto', '1 Co 14:4, 14-15, 18', '1 Co 14:5, 13, 27-28']
          ],
          nota: 'Es la distinción que hace la enseñanza pentecostal clásica entre la señal, la oración y el don.'
        } }
      ],
      texto: [
        'Las lenguas tienen un uso que no se ve en el culto: la oración personal. Pablo escribió a los corintios que él hablaba en lenguas más que todos ellos, pero que en la iglesia prefería hablar cinco palabras con su entendimiento antes que diez mil en lengua desconocida (1 Co 14:18-19). Si no lo hacía en la iglesia, ¿dónde hablaba tanto en lenguas? En su oración personal.',
        { h: 'Orar con el espíritu' },
        'Pablo explica lo que ocurre: «si yo oro en lengua desconocida, mi espíritu ora, pero mi entendimiento queda sin fruto» (1 Co 14:14). El creyente ora desde lo más profundo de su ser, guiado por el Espíritu, aunque su mente no comprenda las palabras. Y concluye: «Oraré con el espíritu, pero oraré también con el entendimiento; cantaré con el espíritu, pero cantaré también con el entendimiento» (1 Co 14:15). No se trata de elegir uno u otro: las dos formas de orar son buenas y se complementan.',
        { h: 'Se edifica a sí mismo' },
        'Pablo dice: «El que habla en lengua extraña, a sí mismo se edifica» (1 Co 14:4). No lo dice como reproche, sino como un hecho. Es verdad que en el culto lo importante es edificar a los demás, pero edificarse a uno mismo en la comunión con Dios no es egoísmo: es como comer para tener fuerzas. Judas exhorta a los creyentes a edificarse sobre su santísima fe, «orando en el Espíritu Santo» (Jud 20).',
        { h: 'Señal, oración y don' },
        'La tabla resume una distinción que ayuda a entender textos que parecen contradictorios. Las lenguas como señal inicial acompañan el bautismo en el Espíritu (ruta V). Las lenguas como oración personal están al alcance de todo creyente bautizado en el Espíritu. El don de lenguas para dar un mensaje a la iglesia, con interpretación, lo reciben algunos, según el Espíritu reparte. Por eso Pablo puede desear «que todos vosotros hablaseis en lenguas» (1 Co 14:5) y a la vez preguntar «¿hablan todos lenguas?» (1 Co 12:30), esperando un no: no todos tienen el ministerio de dar mensajes en lenguas en el culto.',
        { h: 'Para qué sirve' },
        'Los creyentes que oran en lenguas suelen dar testimonio de que les ayuda a orar cuando no encuentran palabras, a perseverar en la intercesión, a adorar con libertad y a mantenerse en comunión con Dios durante el día. No hace a nadie superior, pero es un regalo que Dios quiere dar a sus hijos.',
        { ir: { t: 'Ver «¿Hablan todos lenguas?» en este recurso', a: '#textos/2' } }
      ],
      pensar: 'Pablo oraba con el espíritu y con el entendimiento, y cantaba de las dos maneras. ¿Qué lugar tiene la oración en el Espíritu en tu vida personal, y qué lugar tiene la oración con el entendimiento?'
    }
  ];

  window.__ESPIRITU.bautismo = bautismo;
  window.__ESPIRITU.dones = dones;
})();
(() => {
  /* ---------------- VI. Los dones del Espíritu (continuación) ---------------- */
  const dones2 = [
    {
      id: 'profecia-hoy', n: 'La profecía hoy y cómo se juzga', ref: '1 Corintios 14:29-33; 1 Tesalonicenses 5:19-22; 1 Juan 4:1; Deuteronomio 18:21-22; Hechos 21:10-14',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-agabo.webp', alt: 'El profeta Agabo, en una casa de Cesarea, se ata las manos y los pies con el cinto de Pablo ante los discípulos, que lo miran preocupados', pie: 'Agabo anunció la prisión de Pablo, pero la decisión de ir a Jerusalén siguió siendo de Pablo (Hch 21:10-14).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se juzga una profecía',
          cab: ['Pregunta', 'Texto'],
          filas: [
            ['¿Concuerda con la Escritura, sin agregarle ni quitarle?', 'Gá 1:8; Ap 22:18-19'],
            ['¿Glorifica a Jesucristo como Señor venido en carne?', '1 Co 12:3; 1 Jn 4:2-3'],
            ['¿Edifica, exhorta o consuela a la iglesia?', '1 Co 14:3'],
            ['¿Se cumple lo que anuncia?', 'Dt 18:21-22'],
            ['¿La confirma la iglesia y sus líderes maduros?', '1 Co 14:29'],
            ['¿Se da con orden, amor y dominio propio?', '1 Co 14:32-33, 40'],
            ['¿Da buen fruto la vida de quien profetiza?', 'Mt 7:15-20']
          ],
          nota: 'Toda profecía actual está por debajo de la Escritura y se examina con ella.'
        } }
      ],
      texto: [
        'Las iglesias pentecostales creen que el don de profecía sigue vigente. Pero una profecía actual no tiene la misma autoridad que la Escritura, y por eso el Nuevo Testamento manda examinarla.',
        { h: 'No menospreciar, examinar' },
        'Pablo da a los tesalonicenses dos mandatos que van juntos: «No apaguéis al Espíritu. No menospreciéis las profecías. Examinadlo todo; retened lo bueno» (1 Ts 5:19-21). Hay dos errores opuestos. Uno es despreciar las profecías por miedo a los abusos; el otro, aceptar todo lo que se dice en nombre de Dios sin examinarlo. Lo bíblico es recibir la profecía con apertura y examinarla con cuidado.',
        { h: 'Los demás juzguen' },
        'En el culto, Pablo establece un orden: «los profetas hablen dos o tres, y los demás juzguen» (1 Co 14:29). La profecía no se acepta solo porque alguien la diga con convicción. La iglesia, y en especial sus líderes maduros, la evalúan. Pablo añade: «los espíritus de los profetas están sujetos a los profetas» (1 Co 14:32). Quien profetiza no pierde el control de sí mismo: puede esperar su turno, callar y someterse a la evaluación. Una profecía que exige obediencia ciega no es bíblica.',
        { h: 'Los criterios' },
        'La tabla reúne los criterios principales. El primero es la Escritura: el Espíritu que inspiró la Biblia no se contradice, y Pablo dice que, aunque un ángel del cielo anunciara otro evangelio, sea anatema (Gá 1:8). Otro es Cristo: lo que viene del Espíritu confiesa a Jesús como Señor. Otro es el cumplimiento, cuando la profecía predice algo (Dt 18:22). Y otro, el fruto en la vida de quien profetiza.',
        { h: 'Una profecía no reemplaza la decisión' },
        'El caso de Agabo enseña algo importante. Agabo anunció, con una acción simbólica, que Pablo sería atado en Jerusalén. Los discípulos le rogaron a Pablo que no fuera. Pablo respondió que estaba dispuesto a morir por el nombre de Jesús, y fue (Hch 21:10-14). La profecía fue verdadera, pero la decisión siguió siendo de Pablo, guiado por el Espíritu. Una palabra profética puede confirmar, advertir o preparar, pero no reemplaza la responsabilidad de cada creyente ante Dios.',
        { ejercicio: {
          pregunta: 'Alguien te dice que tiene una profecía: Dios quiere que dejes a tu familia y te vayas a otra iglesia que él dirige. ¿Qué es lo más bíblico?',
          opciones: [
            { t: 'Examinarla con la Escritura y con líderes maduros, porque contradice el mandato de cuidar a la familia y busca beneficiar a quien la da.', ok: true, por_que: 'Toda profecía se juzga (1 Co 14:29; 1 Ts 5:21). La Escritura manda cuidar de los suyos (1 Ti 5:8).' },
            { t: 'Obedecerla de inmediato, porque desobedecer una profecía es desobedecer a Dios.', ok: false, por_que: 'Las profecías de hoy no tienen autoridad propia: se examinan con la Escritura y por la iglesia.' },
            { t: 'Rechazar toda profecía en adelante, porque son peligrosas.', ok: false, por_que: 'Pablo manda no menospreciar las profecías, sino examinarlas y retener lo bueno (1 Ts 5:20-21).' }
          ],
          explicacion: 'La profecía se recibe con apertura y se examina con la Escritura, en comunidad.'
        } }
      ],
      pensar: '¿Tiendes más a despreciar las profecías o a aceptarlas sin examinar? ¿Qué te enseña el doble mandato de 1 Tesalonicenses 5:20-21?'
    },
    {
      id: 'servicio', n: 'Dones de servicio y ministerio', ref: 'Romanos 12:3-8; Efesios 4:7-16; 1 Corintios 12:28; 1 Pedro 4:10-11',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las listas de dones del Nuevo Testamento',
          cab: ['Romanos 12:6-8', '1 Corintios 12:8-10', '1 Corintios 12:28', 'Efesios 4:11', '1 Pedro 4:10-11'],
          filas: [
            ['Profecía', 'Palabra de sabiduría', 'Apóstoles', 'Apóstoles', 'Hablar'],
            ['Servicio', 'Palabra de ciencia', 'Profetas', 'Profetas', 'Servir'],
            ['Enseñanza', 'Fe', 'Maestros', 'Evangelistas', ''],
            ['Exhortación', 'Sanidades', 'Milagros', 'Pastores y maestros', ''],
            ['Repartir', 'Milagros', 'Sanidades', '', ''],
            ['Presidir', 'Profecía', 'Los que ayudan', '', ''],
            ['Misericordia', 'Discernimiento', 'Los que administran', '', ''],
            ['', 'Lenguas', 'Lenguas', '', ''],
            ['', 'Interpretación', '', '', '']
          ],
          nota: 'Ninguna lista es completa: hay dones que se repiten y otros que aparecen una sola vez.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque de la manera que en un cuerpo tenemos muchos miembros, pero no todos los miembros tienen la misma función, así nosotros, siendo muchos, somos un cuerpo en Cristo, y todos miembros los unos de los otros. De manera que, teniendo diferentes dones, según la gracia que nos es dada, si el de profecía, úsese conforme a la medida de la fe; o si de servicio, en servir; o el que enseña, en la enseñanza; el que exhorta, en la exhortación; el que reparte, con liberalidad; el que preside, con solicitud; el que hace misericordia, con alegría.', ref: 'Romanos 12:4-8' }
      ],
      texto: [
        'Cuando se habla de dones espirituales, muchos piensan solo en los nueve de 1 Corintios 12. Pero el Nuevo Testamento tiene al menos cinco listas, y la tabla las reúne. Muchos dones son discretos, y la iglesia no podría vivir sin ellos.',
        { h: 'Romanos 12: dones para la vida diaria' },
        'Pablo enumera dones que parecen sencillos: servir, enseñar, exhortar, repartir, presidir y hacer misericordia. Y dice cómo usarlos: el que reparte, con liberalidad; el que preside, con solicitud; el que hace misericordia, con alegría (Ro 12:8). Visitar enfermos, administrar con honestidad, abrir la casa, enseñar a los niños, animar a los desanimados: todo eso es obra del Espíritu cuando se hace por su gracia.',
        { h: 'Efesios 4: personas que son dones' },
        'En Efesios 4, los dones no son capacidades, sino personas que Cristo da a su iglesia: apóstoles, profetas, evangelistas, pastores y maestros. Su función es clara: «a fin de perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo» (Ef 4:12). El pastor no está para hacer todo el ministerio, sino para preparar a cada creyente para que haga el suyo.',
        { h: 'Apóstoles y profetas hoy' },
        'La iglesia está edificada «sobre el fundamento de los apóstoles y profetas» (Ef 2:20). En el sentido de los doce y de Pablo, testigos de la resurrección que pusieron el fundamento de la fe y escribieron el Nuevo Testamento, no hay apóstoles hoy. En un sentido más amplio, el Nuevo Testamento llama apóstoles a otros enviados, como Bernabé (Hch 14:14), y muchas iglesias reconocen hoy ministerios misioneros y fundadores de iglesias con ese espíritu, aunque no usen el título. El recurso El movimiento pentecostal estudia el error de quienes se proclaman apóstoles con autoridad sobre las iglesias.',
        { h: 'Descubrir y usar los dones' },
        'Pablo pide a cada uno que no tenga más alto concepto de sí que el que debe tener, sino que piense de sí con cordura (Ro 12:3). Los dones se descubren sirviendo: probando distintas tareas, escuchando lo que los hermanos maduros reconocen en nosotros y viendo dónde Dios trae fruto. Lo importante no es tener un título, sino servir.',
        { ir: { t: 'Ver «La nueva reforma apostólica» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#discernimiento/2' } }
      ],
      pensar: '¿Cuál de los dones de Romanos 12 reconocen otros en ti? ¿Lo estás usando con la actitud que pide Pablo: con liberalidad, con solicitud, con alegría?'
    },
    {
      id: 'cesacion', n: '¿Han cesado los dones?', ref: '1 Corintios 1:7; 13:8-12; Efesios 4:11-13; Hebreos 2:3-4; Hechos 2:17, 39',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará. Porque en parte conocemos, y en parte profetizamos; mas cuando venga lo perfecto, entonces lo que es en parte se acabará. Cuando yo era niño, hablaba como niño, pensaba como niño, juzgaba como niño; mas cuando ya fui hombre, dejé lo que era de niño. Ahora vemos por espejo, oscuramente; mas entonces veremos cara a cara. Ahora conozco en parte; pero entonces conoceré como fui conocido.', ref: '1 Corintios 13:8-12' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos maneras de leer «cuando venga lo perfecto»',
          cab: ['Lectura', 'Qué es «lo perfecto»', 'Cuándo cesan los dones'],
          filas: [
            ['Cesacionista', 'El canon completo del Nuevo Testamento (o la madurez de la iglesia)', 'Hacia el final del siglo I'],
            ['Continuista', 'La venida de Cristo y el estado eterno, cuando veamos «cara a cara»', 'Cuando Cristo vuelva']
          ],
          nota: '«Cara a cara» y «conoceré como fui conocido» describen la visión de Dios en la eternidad, no la lectura de un libro.'
        } }
      ],
      texto: [
        'Muchos cristianos sinceros enseñan que los dones milagrosos, como las lenguas, la profecía y las sanidades, cesaron con la muerte de los apóstoles o con la conclusión del Nuevo Testamento. A esta postura se la llama cesacionismo. La sostienen muchas iglesias reformadas y presbiterianas, buena parte de las bautistas y muchos dispensacionalistas clásicos. La postura contraria, que los dones siguen vigentes, se llama continuismo, y es la de las iglesias pentecostales y carismáticas.',
        { h: 'Los argumentos cesacionistas' },
        'Los cesacionistas presentan varios argumentos. Los dones milagrosos servían para confirmar el mensaje de los apóstoles (He 2:3-4), y una vez confirmado y escrito, ya no hacen falta. La iglesia está edificada sobre el fundamento de los apóstoles y profetas (Ef 2:20), y un fundamento se pone una sola vez. Si hoy hubiera profecía, el canon quedaría abierto. Y los dones milagrosos parecen escasear en la historia de la iglesia después del siglo II. Algunos leen además «lo perfecto» de 1 Corintios 13:10 como el canon completo.',
        { h: 'Las razones del continuismo' },
        'El texto clave es 1 Corintios 13:8-12. Pablo dice que las profecías y las lenguas cesarán «cuando venga lo perfecto». ¿Qué es lo perfecto? Pablo lo explica: «Ahora vemos por espejo, oscuramente; mas entonces veremos cara a cara. Ahora conozco en parte; pero entonces conoceré como fui conocido» (1 Co 13:12). Ver cara a cara y conocer como somos conocidos describen la eternidad con Cristo, no la lectura de la Biblia: ni el más sabio conoce hoy como Dios lo conoce. Además, Pablo dice a los corintios que no les falta ningún don «esperando la manifestación de nuestro Señor Jesucristo» (1 Co 1:7): los dones acompañan a la iglesia hasta la venida de Cristo.',
        'Pentecostés inauguró los «postreros días» (Hch 2:17), que siguen hasta hoy, y la promesa es para los que están lejos y para sus hijos (Hch 2:39). Ningún texto dice que los dones cesarían al terminar el Nuevo Testamento. Y la historia muestra que nunca desaparecieron del todo, como estudia el recurso El movimiento pentecostal.',
        { posturas: {
          titulo: '¿Siguen vigentes los dones del Espíritu?',
          a: { n: 'Cesacionismo', t: 'Los dones de revelación y de señales (apostolado, profecía, lenguas, sanidades y milagros) fueron dados para fundar la iglesia y confirmar el mensaje apostólico, y cesaron con los apóstoles o con el canon. Hoy el Espíritu obra por la Escritura, la providencia y los dones de servicio. Lo sostienen teólogos reformados como B. B. Warfield, y muchos dispensacionalistas clásicos.' },
          b: { n: 'Continuismo', t: 'Todos los dones siguen vigentes hasta la venida de Cristo, porque «lo perfecto» es su venida (1 Co 13:10-12) y los dones acompañan a la iglesia mientras la espera (1 Co 1:7). La profecía de hoy edifica y se juzga por la Escritura, sin agregarle nada. Es la postura de las Asambleas de Dios y del pentecostalismo, compartida por muchos evangélicos.' },
          c: 'Este recurso sigue el continuismo. Comparte con el cesacionismo que el canon está cerrado y que ninguna profecía tiene la autoridad de la Escritura. Los cesacionistas tienen razón al advertir contra los abusos, pero el remedio que da la Biblia no es suprimir los dones, sino usarlos con orden y examinarlos (1 Co 14:39-40).'
        } },
        { ir: { t: 'Ver «Los dones a lo largo de la historia de la iglesia» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#raices/3' } }
      ],
      pensar: 'Pablo dice que los corintios esperaban la venida del Señor sin que les faltara ningún don. ¿Vives con la expectativa de que Dios sigue obrando hoy como lo hizo en el libro de Hechos?'
    },
    {
      id: 'orden', n: 'Decentemente y con orden', ref: '1 Corintios 14:26-40; 1 Tesalonicenses 5:19-21',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿Qué hay, pues, hermanos? Cuando os reunís, cada uno de vosotros tiene salmo, tiene doctrina, tiene lengua, tiene revelación, tiene interpretación. Hágase todo para edificación. Si habla alguno en lengua extraña, sea esto por dos, o a lo más tres, y por turno; y uno interprete. Y si no hay intérprete, calle en la iglesia, y hable para sí mismo y para Dios. Asimismo, los profetas hablen dos o tres, y los demás juzguen. Y si algo le fuere revelado a otro que estuviere sentado, calle el primero. Porque podéis profetizar todos uno por uno, para que todos aprendan, y todos sean exhortados. Y los espíritus de los profetas están sujetos a los profetas; pues Dios no es Dios de confusión, sino de paz. Como en todas las iglesias de los santos,', ref: '1 Corintios 14:26-33' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las reglas de Pablo para el culto',
          cab: ['Regla', 'Texto'],
          filas: [
            ['Todo para edificación', '1 Co 14:26'],
            ['En lenguas, dos o a lo más tres, por turno, y uno interprete', '1 Co 14:27'],
            ['Si no hay intérprete, calle en la iglesia y hable para sí y para Dios', '1 Co 14:28'],
            ['Profetas, dos o tres, y los demás juzguen', '1 Co 14:29'],
            ['Si otro recibe una revelación, el primero calle', '1 Co 14:30'],
            ['Los espíritus de los profetas están sujetos a los profetas', '1 Co 14:32'],
            ['Dios no es Dios de confusión, sino de paz', '1 Co 14:33'],
            ['No impidáis el hablar lenguas', '1 Co 14:39'],
            ['Hágase todo decentemente y con orden', '1 Co 14:40']
          ],
          nota: 'Pablo no apaga el fuego: lo pone en un fogón.'
        } }
      ],
      texto: [
        'Las reuniones de la iglesia de Corinto eran animadas: muchos querían hablar a la vez, unos en lenguas, otros profetizando. Pablo no les dice que dejen de hacerlo, sino que lo hagan con orden. Sus instrucciones de 1 Corintios 14:26-40, resumidas en la tabla, siguen siendo una guía para el culto.',
        { h: 'Participación' },
        'Pablo describe una reunión donde muchos participan: «Cuando os reunís, cada uno de vosotros tiene salmo, tiene doctrina, tiene lengua, tiene revelación, tiene interpretación» (1 Co 14:26). La iglesia no es un auditorio que mira a unos pocos, sino un cuerpo en el que cada miembro aporta. Y el criterio para todo es uno: «Hágase todo para edificación».',
        { h: 'Turnos y límites' },
        'Pablo pone límites concretos. En lenguas, dos o a lo más tres, por turno, y con interpretación; si no hay intérprete, que el que habla en lenguas calle en la iglesia y hable para sí mismo y para Dios. De los profetas, también dos o tres, y los demás juzguen. Si otro recibe una revelación, el primero debe callar. La razón es teológica: «Dios no es Dios de confusión, sino de paz» (1 Co 14:33). El Espíritu Santo produce dominio propio, no descontrol (Gá 5:23).',
        { h: 'Pensar en el que llega' },
        'Pablo piensa también en los que no son creyentes. Si toda la iglesia habla en lenguas a la vez y entra un incrédulo, dirá que están locos. Pero si todos profetizan y entra un incrédulo, será convencido, los secretos de su corazón se harán manifiestos y adorará a Dios, declarando que verdaderamente Dios está entre ellos (1 Co 14:23-25). El culto pentecostal debe ser libre en el Espíritu y, al mismo tiempo, comprensible para quien llega por primera vez.',
        { h: 'Dos extremos' },
        'El capítulo termina con un equilibrio: «procurad profetizar, y no impidáis el hablar lenguas; pero hágase todo decentemente y con orden» (1 Co 14:39-40). Hay iglesias donde, por miedo al desorden, ya no hay lugar para los dones. Y hay otras donde, en nombre de la libertad del Espíritu, todo vale: gritos sin sentido, manifestaciones extrañas y espectáculo. Las dos se apartan de la enseñanza de Pablo. Las manifestaciones extrañas se estudian en el recurso El movimiento pentecostal y en Falsas doctrinas y desvíos de hoy, en preparación.',
        { ir: { t: 'Ver «Manifestaciones extrañas» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#discernimiento/3' } }
      ],
      pensar: 'Si un incrédulo entrara al culto de tu iglesia, ¿entendería lo que pasa y sentiría que Dios está allí? ¿Qué podrías aportar tú para la edificación de todos?'
    },
    {
      id: 'amor', n: 'El camino más excelente', ref: '1 Corintios 12:31–13:13; 14:1',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Si yo hablase lenguas humanas y angélicas, y no tengo amor, vengo a ser como metal que resuena, o címbalo que retiñe. Y si tuviese profecía, y entendiese todos los misterios y toda ciencia, y si tuviese toda la fe, de tal manera que trasladase los montes, y no tengo amor, nada soy. Y si repartiese todos mis bienes para dar de comer a los pobres, y si entregase mi cuerpo para ser quemado, y no tengo amor, de nada me sirve. El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor; no se goza de la injusticia, mas se goza de la verdad. Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.', ref: '1 Corintios 13:1-7' }
      ],
      texto: [
        'En medio de su enseñanza sobre los dones, entre los capítulos 12 y 14, Pablo pone el capítulo del amor. No es un paréntesis poético para leer en las bodas: es la clave para entender los dones. Al final del capítulo 12 dice: «Procurad, pues, los dones mejores. Mas yo os muestro un camino aun más excelente» (1 Co 12:31).',
        { h: 'Sin amor, nada' },
        'Pablo toma los dones más valorados en Corinto y los pone en una balanza. Si hablo lenguas humanas y angélicas, y no tengo amor, soy como un metal que resuena o un címbalo que retiñe: puro ruido. Si tengo profecía, entiendo todos los misterios y tengo toda la fe, de tal manera que trasladase los montes, y no tengo amor, nada soy. Si reparto todos mis bienes y entrego mi cuerpo para ser quemado, y no tengo amor, de nada me sirve (1 Co 13:1-3). Los dones sin amor no edifican a nadie.',
        { h: 'Cómo es el amor' },
        'Luego Pablo describe el amor con quince rasgos: es sufrido, es benigno, no tiene envidia, no es jactancioso, no se envanece, no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor (1 Co 13:4-5). Cada rasgo corrige un problema de Corinto. Los corintios eran envidiosos de los dones de otros, jactanciosos de los suyos, desordenados en el culto y buscaban su propio provecho. El amor es lo contrario.',
        { h: 'El amor permanece' },
        'Los dones son para esta etapa: las profecías se acabarán, las lenguas cesarán, la ciencia acabará. Pero «el amor nunca deja de ser» (1 Co 13:8). Cuando veamos a Cristo cara a cara, ya no necesitaremos profecía ni lenguas, pero seguiremos amando. Por eso el amor es el mayor: «Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor» (1 Co 13:13).',
        { h: 'No uno contra el otro' },
        'Algunos leen este capítulo como si Pablo dijera: «olvidad los dones y buscad el amor». Pero el capítulo 14 comienza: «Seguid el amor; y procurad los dones espirituales» (1 Co 14:1). No hay que elegir. El amor es el camino por el que se deben usar los dones. Una iglesia llena de dones sin amor es un címbalo que retiñe; una iglesia que dice amar pero desprecia los dones se pierde las herramientas que Dios le dio para servir. La ruta VII estudia el fruto del Espíritu, cuyo primer rasgo es el amor.',
        { ejercicio: {
          pregunta: '¿Por qué pone Pablo el capítulo del amor en medio de su enseñanza sobre los dones?',
          opciones: [
            { t: 'Porque el amor es el camino en el que deben usarse los dones para edificar a la iglesia.', ok: true, por_que: 'Pablo une los dos: «Seguid el amor; y procurad los dones espirituales» (1 Co 14:1).' },
            { t: 'Porque el amor reemplaza a los dones, que ya no son necesarios.', ok: false, por_que: 'Inmediatamente después, Pablo manda procurar los dones y no impedir las lenguas (1 Co 14:1, 39).' },
            { t: 'Porque quería escribir un texto para las bodas.', ok: false, por_que: 'Es un texto hermoso para las bodas, pero en su contexto corrige el uso de los dones en Corinto.' }
          ],
          explicacion: 'Los dones sin amor son ruido; el amor sin dones pierde herramientas que Dios dio para servir.'
        } }
      ],
      pensar: 'Lee 1 Corintios 13:4-7 poniendo tu nombre en lugar de «el amor». ¿Qué rasgo te resulta más difícil de afirmar con sinceridad? Pídele al Espíritu que lo forme en ti.'
    }
  ];

  /* ---------------- VII. El fruto y la vida en el Espíritu ---------------- */
  const vida = [
    {
      id: 'andar', n: 'Andar en el Espíritu', ref: 'Gálatas 5:16-18, 24-25; Romanos 8:1-14',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Digo, pues: Andad en el Espíritu, y no satisfagáis los deseos de la carne. Porque el deseo de la carne es contra el Espíritu, y el del Espíritu es contra la carne; y éstos se oponen entre sí, para que no hagáis lo que quisiereis. Pero si sois guiados por el Espíritu, no estáis bajo la ley.', ref: 'Gálatas 5:16-18' },
        { tipo: 'cita', titulo: 'Pasaje 2', texto: 'Así que, hermanos, deudores somos, no a la carne, para que vivamos conforme a la carne; porque si vivís conforme a la carne, moriréis; mas si por el Espíritu hacéis morir las obras de la carne, viviréis. Porque todos los que son guiados por el Espíritu de Dios, éstos son hijos de Dios.', ref: 'Romanos 8:12-14' }
      ],
      texto: [
        'Toda persona que ha nacido de nuevo conoce una lucha interior. Quiere agradar a Dios y, al mismo tiempo, siente el tirón de los viejos deseos. Pablo describe esa lucha y su solución: «Andad en el Espíritu, y no satisfagáis los deseos de la carne» (Gá 5:16).',
        { h: 'La carne y el Espíritu' },
        'En el lenguaje de Pablo, la «carne» no es el cuerpo, que es templo del Espíritu, sino la naturaleza humana caída, inclinada al pecado y al egoísmo. «Porque el deseo de la carne es contra el Espíritu, y el del Espíritu es contra la carne; y éstos se oponen entre sí» (Gá 5:17). El creyente no es un campo de batalla neutral: tiene un aliado poderoso que habita en él.',
        { h: 'Andar, ser guiados, vivir' },
        'Pablo usa varios verbos para describir la vida en el Espíritu. Andar: un paso tras otro, cada día, en dependencia (Gá 5:16). Ser guiados: «si sois guiados por el Espíritu, no estáis bajo la ley» (Gá 5:18). Vivir: «Si vivimos por el Espíritu, andemos también por el Espíritu» (Gá 5:25). La vida en el Espíritu no es un momento de éxtasis, sino un caminar continuo.',
        { h: 'Hacer morir las obras de la carne' },
        'En Romanos 8, Pablo dice que, si vivimos conforme a la carne, moriremos; «mas si por el Espíritu hacéis morir las obras de la carne, viviréis» (Ro 8:13). El creyente participa activamente: rechaza el pecado, huye de la tentación, corta lo que lo hace caer. Pero no lo hace solo con su fuerza de voluntad: lo hace «por el Espíritu». La santidad no es fruto del esfuerzo humano ni de la pasividad, sino de la colaboración del creyente con el Espíritu que obra en él.',
        { h: 'Libres de la condenación' },
        'Romanos 8 comienza con una de las frases más consoladoras de la Biblia: «Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús, los que no andan conforme a la carne, sino conforme al Espíritu» (Ro 8:1). La lucha contra el pecado no se libra para ganar el favor de Dios, sino desde el favor de Dios. El creyente que cae no está perdido: se levanta, confiesa su pecado y sigue andando en el Espíritu (1 Jn 1:9). Y Pablo concluye que todos los que son guiados por el Espíritu de Dios, esos son hijos de Dios (Ro 8:14).',
        { ejercicio: {
          pregunta: 'Según Gálatas 5:16, ¿cuál es el camino para no satisfacer los deseos de la carne?',
          opciones: [
            { t: 'Andar en el Espíritu.', ok: true, por_que: 'Pablo no propone primero reglas ni esfuerzo propio, sino andar en el Espíritu.' },
            { t: 'Cumplir con más rigor la ley de Moisés.', ok: false, por_que: 'Pablo dice que los guiados por el Espíritu no están bajo la ley (Gá 5:18); la ley no puede dar vida (Gá 3:21).' },
            { t: 'Castigar el cuerpo con ayunos y privaciones extremas.', ok: false, por_que: 'Pablo dice que esas prácticas no tienen valor alguno contra los apetitos de la carne (Col 2:23).' }
          ],
          explicacion: 'El poder para vencer el pecado está en el Espíritu que habita en el creyente.'
        } }
      ],
      pensar: '¿Qué deseo de la carne te cuesta más vencer? ¿Has intentado enfrentarlo solo con fuerza de voluntad, o andando en el Espíritu, un día a la vez?'
    },
    {
      id: 'fruto', n: 'El fruto del Espíritu', ref: 'Gálatas 5:19-23; Juan 15:1-8; Mateo 7:15-20',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-fruto.svg', alt: 'Dos columnas: a la izquierda, las obras de la carne de Gálatas 5:19-21; a la derecha, los nueve aspectos del fruto del Espíritu de Gálatas 5:22-23, agrupados de tres en tres', pie: 'Obras en plural, fruto en singular: el Espíritu produce un solo carácter, el de Cristo.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley. Pero los que son de Cristo han crucificado la carne con sus pasiones y deseos. Si vivimos por el Espíritu, andemos también por el Espíritu.', ref: 'Gálatas 5:22-25' }
      ],
      texto: [
        'Los dones del Espíritu muestran lo que el Espíritu hace por medio de un creyente; el fruto muestra lo que hace en él. Pablo contrasta en Gálatas 5 dos listas: las obras de la carne y el fruto del Espíritu. El esquema las pone lado a lado.',
        { h: 'Obras y fruto' },
        'Pablo dice «obras de la carne», en plural, y «fruto del Espíritu», en singular. Las obras de la carne son muchas, variadas y desordenadas: adulterio, fornicación, idolatría, hechicerías, enemistades, pleitos, celos, iras, contiendas, disensiones, envidias, borracheras y cosas semejantes (Gá 5:19-21). El fruto del Espíritu es uno solo, con nueve aspectos, como un racimo: es el carácter de Cristo formado en el creyente.',
        { h: 'Nueve aspectos de un solo fruto' },
        'Muchos maestros los agrupan de tres en tres. Hacia Dios: amor, gozo y paz. Hacia los demás: paciencia, benignidad y bondad. Hacia uno mismo: fe (fidelidad), mansedumbre y templanza (dominio propio) (Gá 5:22-23). El primero es el amor, y los demás se pueden ver como su desarrollo. Pablo agrega: «contra tales cosas no hay ley».',
        { h: 'El fruto crece' },
        'Un fruto no se fabrica: crece. Un manzano no hace esfuerzos para producir manzanas; las produce porque está sano y unido a sus raíces. Jesús dijo: «Yo soy la vid, vosotros los pámpanos; el que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer» (Jn 15:5). El fruto del Espíritu crece cuando el creyente permanece en Cristo: en la Palabra, en la oración, en la comunión con la iglesia y en la obediencia. Y crece con el tiempo: nadie madura en un día.',
        { h: 'Dones y fruto' },
        'La tradición pentecostal ha insistido en los dones, y con razón. Pero los dones sin fruto son peligrosos. Jesús advirtió que muchos le dirían: «¿no profetizamos en tu nombre, y en tu nombre echamos fuera demonios, y en tu nombre hicimos muchos milagros?», y Él les respondería: «Nunca os conocí» (Mt 7:22-23). Antes había dicho: «por sus frutos los conoceréis» (Mt 7:20). Un ministerio poderoso no prueba nada si falta el carácter de Cristo. Los dones se reciben en un momento; el fruto se cultiva toda la vida. La iglesia necesita las dos cosas.'
      ],
      pensar: '¿Cuál de los nueve aspectos del fruto ves crecer en tu vida en el último año? ¿Cuál todavía está verde? ¿Qué te ayuda a permanecer en Cristo para que el fruto madure?'
    },
    {
      id: 'contristar', n: 'No contristar, no apagar', ref: 'Efesios 4:25-32; 1 Tesalonicenses 5:16-22; Hechos 7:51; Isaías 63:10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ninguna palabra corrompida salga de vuestra boca, sino la que sea buena para la necesaria edificación, a fin de dar gracia a los oyentes. Y no contristéis al Espíritu Santo de Dios, con el cual fuisteis sellados para el día de la redención. Quítense de vosotros toda amargura, enojo, ira, gritería y maledicencia, y toda malicia. Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.', ref: 'Efesios 4:29-32' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres advertencias sobre el Espíritu',
          cab: ['Advertencia', 'Imagen', 'Cómo ocurre', 'Texto'],
          filas: [
            ['No contristéis', 'Entristecer a una persona que se ama', 'Con palabras corrompidas, amargura, ira y falta de perdón', 'Ef 4:30'],
            ['No apaguéis', 'Echar agua sobre un fuego', 'Despreciando las profecías y la obra del Espíritu', '1 Ts 5:19-20'],
            ['No resistáis', 'Oponerse a quien habla', 'Endureciendo el corazón ante la Palabra', 'Hch 7:51']
          ],
          nota: 'Contristar tiene que ver con el pecado; apagar, con frenar la obra del Espíritu.'
        } }
      ],
      texto: [
        'Como el Espíritu Santo es una persona, la relación con Él puede dañarse. El Nuevo Testamento da advertencias concretas, que la tabla reúne.',
        { h: 'No contristéis al Espíritu' },
        'Pablo escribe: «Y no contristéis al Espíritu Santo de Dios, con el cual fuisteis sellados para el día de la redención» (Ef 4:30). Contristar es entristecer. Solo se puede entristecer a quien ama. El contexto muestra qué lo entristece: la mentira, el enojo que dura hasta la noche, el robo, las palabras corrompidas, la amargura, la gritería, la maledicencia y la malicia (Ef 4:25-31). Casi todo tiene que ver con la manera de tratar a los demás. Pablo da el remedio: «Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo» (Ef 4:32).',
        { h: 'No apaguéis al Espíritu' },
        'A los tesalonicenses, Pablo les dice: «No apaguéis al Espíritu. No menospreciéis las profecías» (1 Ts 5:19-20). La imagen es la del fuego. Se apaga el fuego cuando se le echa agua o cuando se le deja de echar leña. En el contexto, se refiere a frenar la obra del Espíritu en la iglesia: despreciar sus dones, cerrarle la puerta por miedo o por costumbre, no dejarle lugar en el culto ni en la vida. Pablo enmarca esta advertencia con tres mandatos: estad siempre gozosos, orad sin cesar, dad gracias en todo (1 Ts 5:16-18).',
        { h: 'No resistáis al Espíritu' },
        'Esteban acusó al Sanedrín: «vosotros resistís siempre al Espíritu Santo; como vuestros padres, así también vosotros» (Hch 7:51). Isaías ya había dicho que Israel «hicieron enojar su santo espíritu» en el desierto (Is 63:10). Resistir es una actitud más grave: endurecer el corazón ante la verdad que el Espíritu muestra. Quien resiste una y otra vez se expone a quedar endurecido.',
        { h: 'Cuando ha ocurrido' },
        'Todo creyente ha contristado al Espíritu alguna vez. La buena noticia es que el Espíritu no se va al primer pecado: Pablo recuerda en el mismo versículo que estamos sellados. El camino de regreso es el arrepentimiento sincero, la confesión y, cuando corresponde, la reconciliación con quien se ofendió. Dios es fiel para perdonar y restaurar la comunión (1 Jn 1:9).'
      ],
      pensar: '¿Hay alguna palabra, alguna amargura o algún perdón pendiente que esté contristando al Espíritu en tu vida? ¿Qué paso concreto puedes dar hoy?'
    },
    {
      id: 'guiados', n: 'Guiados por el Espíritu', ref: 'Hechos 8:26-29; 10:19-20; 13:1-4; 16:6-10; Romanos 8:14; Juan 16:13; Salmo 32:8',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-troas.webp', alt: 'Pablo, dormido en una habitación de Troas a la luz de la luna, ve en visión a un varón macedonio de pie que le extiende la mano', pie: 'Después de dos puertas cerradas, una visión de noche llevó a Pablo a Macedonia (Hch 16:6-10).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo guió el Espíritu en Hechos',
          cab: ['Medio', 'Ejemplo', 'Texto'],
          filas: [
            ['Una indicación interior', '«Acércate y júntate a ese carro»', 'Hch 8:29'],
            ['Mientras oraban y ayunaban, en la iglesia', '«Apartadme a Bernabé y a Saulo»', 'Hch 13:2'],
            ['Puertas cerradas', 'No les permitió ir a Asia ni a Bitinia', 'Hch 16:6-7'],
            ['Una visión', 'El varón macedonio', 'Hch 16:9-10'],
            ['El consejo de la iglesia', '«Ha parecido bien al Espíritu Santo, y a nosotros»', 'Hch 15:28'],
            ['Una profecía que prepara', 'Agabo y la prisión de Pablo', 'Hch 21:10-14']
          ],
          nota: 'El Espíritu guía de muchas maneras, pero siempre en armonía con la Escritura.'
        } }
      ],
      texto: [
        '«Porque todos los que son guiados por el Espíritu de Dios, éstos son hijos de Dios» (Ro 8:14). Ser guiados por el Espíritu es, ante todo, vivir según la voluntad de Dios. Pero el libro de Hechos muestra también que el Espíritu guía en decisiones concretas.',
        { h: 'Los caminos de Hechos' },
        'La tabla reúne algunos ejemplos. A Felipe, el Espíritu le dijo que se acercara al carro de un etíope (Hch 8:29). A la iglesia de Antioquía le habló mientras oraban y ayunaban (Hch 13:2). Al concilio de Jerusalén lo guió por medio de la deliberación de los apóstoles y ancianos (Hch 15:28). El Espíritu usa medios variados, y ninguno es la única manera.',
        { h: 'Puertas cerradas' },
        'El segundo viaje misionero de Pablo muestra una guía desconcertante. Pablo quiso predicar en Asia, y el Espíritu Santo se lo prohibió. Intentó ir a Bitinia, «pero el Espíritu no se lo permitió» (Hch 16:7). No sabemos cómo: quizá por una profecía, una circunstancia o una convicción interior. Llegó a Troas sin saber adónde ir, y allí tuvo de noche una visión de un varón macedonio que le rogaba: «Pasa a Macedonia y ayúdanos». Lucas escribe: «dando por cierto que Dios nos llamaba» (Hch 16:10). El evangelio llegó a Europa por un camino que Pablo no había planeado. A veces el Espíritu guía cerrando puertas.',
        { h: 'Discernir la guía' },
        'No todo impulso interior viene del Espíritu. Los creyentes maduros enseñan a examinar la guía con algunas preguntas. ¿Está de acuerdo con la Escritura? El Espíritu nunca guía a desobedecer lo que Él mismo inspiró. ¿Lo confirman creyentes maduros? En Antioquía y en Jerusalén, la guía fue reconocida en comunidad. ¿Da paz, aunque sea difícil? ¿Glorifica a Cristo? Y en la mayoría de las decisiones de la vida diaria, el Espíritu guía por la sabiduría que da a quien conoce la Palabra, ora y busca consejo (Stg 1:5).',
        'El Espíritu promete guiar: «Te haré entender, y te enseñaré el camino en que debes andar; Sobre ti fijaré mis ojos» (Sal 32:8). Quien camina cerca de Dios aprende a reconocer su voz, como las ovejas conocen la voz del pastor (Jn 10:4).',
        { ir: { t: 'Ver «Segundo viaje: el evangelio entra en Europa» en Los viajes de Pablo', a: '../../viajes-pablo/#recorrido/6' } }
      ],
      pensar: '¿Hay una puerta cerrada en tu vida que te ha frustrado? ¿Podría ser que el Espíritu te esté guiando hacia algo que todavía no ves, como a Pablo en Troas?'
    },
    {
      id: 'mision', n: 'El Espíritu y la misión', ref: 'Hechos 1:8; 8:4-8, 26-40; 13:1-4; Lucas 4:18; Juan 20:21-22; Romanos 15:18-19',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-antioquia-envio.webp', alt: 'En Antioquía, los profetas y maestros imponen las manos sobre Bernabé y Saulo, arrodillados, antes de enviarlos a la misión', pie: 'En Antioquía, el Espíritu apartó a Bernabé y a Saulo, y la iglesia los envió con ayuno y oración (Hch 13:2-3).', origen: 'ia' }
      ],
      texto: [
        'El libro de Hechos podría llamarse «Los hechos del Espíritu Santo». En cada etapa de la expansión de la iglesia, el Espíritu toma la iniciativa: da poder, guía, aparta obreros y abre puertas. La misión de la iglesia es la misión del Espíritu.',
        { h: 'El Espíritu va adelante' },
        'El Espíritu llevó a Felipe al camino de Gaza para que un funcionario etíope oyera el evangelio (Hch 8:29). Preparó a Cornelio y a Pedro con visiones simultáneas para abrir la puerta a los gentiles (Hch 10:19-20). En Antioquía, la primera iglesia con muchos creyentes gentiles, mientras ministraban al Señor y ayunaban, el Espíritu dijo: «Apartadme a Bernabé y a Saulo para la obra a que los he llamado». La iglesia les impuso las manos y los despidió, y Lucas dice que fueron «enviados por el Espíritu Santo» (Hch 13:2-4). La iglesia envía, pero quien llama es el Espíritu.',
        { h: 'Palabra y poder' },
        'Al final de su ministerio, Pablo resumió así su obra entre los gentiles: Cristo la hizo «con potencia de señales y prodigios, en el poder del Espíritu de Dios; de manera que desde Jerusalén, y por los alrededores hasta Ilírico, todo lo he llenado del evangelio de Cristo» (Ro 15:19). La misión se hace con palabra y con poder: la predicación clara del evangelio, acompañada de la obra del Espíritu que convence, sana y transforma.',
        { h: 'Misión en todas partes' },
        'La misión no es solo para misioneros que cruzan el mar. Cuando estalló la persecución en Jerusalén, los creyentes dispersados «iban por todas partes anunciando el evangelio» (Hch 8:4). Eran creyentes comunes, no apóstoles. El mismo Espíritu que da poder a los misioneros da poder a la madre que habla de Cristo a su vecina, al estudiante que testifica en la universidad y al obrero que ora por un compañero enfermo.',
        { h: 'Hasta lo último de la tierra' },
        'Jesús prometió que el evangelio del reino sería predicado en todo el mundo antes del fin (Mt 24:14). El movimiento pentecostal nació con una urgencia misionera: los primeros bautizados en el Espíritu creían que el poder recibido era para alcanzar a las naciones antes de la venida del Señor. Esa urgencia sigue vigente. La ruta V estudió el poder para testificar; aquí basta recordar que la llenura del Espíritu siempre empuja hacia afuera.',
        { ir: { t: 'Ver «Capítulo 13: enviados por el Espíritu» en Hechos', a: '../../hechos/#comentario/14' } }
      ],
      pensar: 'Los creyentes dispersados por la persecución iban por todas partes anunciando el evangelio. ¿Quién, en tu entorno, necesita oír de Cristo por tu boca?'
    },
    {
      id: 'esperanza', n: 'El Espíritu y la esperanza', ref: 'Romanos 8:18-27; 15:13; 2 Corintios 5:1-5; Efesios 1:13-14; Apocalipsis 22:17',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque sabemos que toda la creación gime a una, y a una está con dolores de parto hasta ahora; y no sólo ella, sino que también nosotros mismos, que tenemos las primicias del Espíritu, nosotros también gemimos dentro de nosotros mismos, esperando la adopción, la redención de nuestro cuerpo. Porque en esperanza fuimos salvos; pero la esperanza que se ve, no es esperanza; porque lo que alguno ve, ¿a qué esperarlo? Pero si esperamos lo que no vemos, con paciencia lo aguardamos.', ref: 'Romanos 8:22-25' },
        { tipo: 'cita', titulo: 'Pasaje 2', texto: 'Y el Espíritu y la Esposa dicen: Ven. Y el que oye, diga: Ven. Y el que tiene sed, venga; y el que quiera, tome del agua de la vida gratuitamente.', ref: 'Apocalipsis 22:17' }
      ],
      texto: [
        'El Espíritu Santo no solo nos une a Cristo en el presente: también nos hace mirar hacia el futuro. Es el Espíritu de la esperanza.',
        { h: 'Las primicias' },
        'En Romanos 8, Pablo describe una creación que gime, como con dolores de parto, esperando ser libertada de la corrupción. Y agrega: «no sólo ella, sino que también nosotros mismos, que tenemos las primicias del Espíritu, nosotros también gemimos dentro de nosotros mismos, esperando la adopción, la redención de nuestro cuerpo» (Ro 8:23). Las primicias eran los primeros frutos de la cosecha, que se ofrecían a Dios como garantía de que vendría el resto. El Espíritu que hoy tenemos es el comienzo de la cosecha. Lo que falta es la redención del cuerpo: la resurrección.',
        { h: 'Un anhelo que crece' },
        'Por eso el creyente lleno del Espíritu no se acomoda a este mundo. Cuanto más conoce la presencia de Dios, más anhela verlo cara a cara. Pablo dice que gemimos con el deseo de ser revestidos de nuestra habitación celestial, y que Dios nos preparó para esto, «quien nos ha dado las arras del Espíritu» (2 Co 5:5). Y ora: «el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo» (Ro 15:13).',
        { h: 'El Espíritu y la Esposa dicen: Ven' },
        'La Biblia termina con un clamor: «Y el Espíritu y la Esposa dicen: Ven» (Ap 22:17). El Espíritu, por medio de la iglesia, clama por la venida de Cristo, y Jesús responde: «Ciertamente vengo en breve» (Ap 22:20). La esperanza del creyente es la venida del Señor para arrebatar a su iglesia, según 1 Tesalonicenses 4:16-17, y la resurrección de los que murieron en Cristo. El Espíritu que levantó a Jesús de los muertos vivificará nuestros cuerpos mortales (Ro 8:11).',
        { h: 'Esperar trabajando' },
        'La esperanza no hace al creyente pasivo. El mismo versículo de Apocalipsis dice: «el que tiene sed, venga; y el que quiere, tome del agua de la vida gratuitamente». Mientras espera, la iglesia llena del Espíritu invita a otros a beber del agua viva. El Espíritu da poder para testificar ahora y mantiene viva la esperanza de lo que vendrá. El recurso Los últimos tiempos estudia el orden de los acontecimientos del fin.',
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } }
      ],
      pensar: 'El Espíritu y la Esposa dicen: «Ven». ¿Tu oración incluye el anhelo por la venida de Cristo? ¿A quién estás invitando, mientras tanto, a beber del agua de la vida?'
    }
  ];

  window.__ESPIRITU.dones = window.__ESPIRITU.dones.concat(dones2);
  window.__ESPIRITU.vida = vida;
})();
(() => {
  /* ---------------- VIII. Textos difíciles ---------------- */
  const textos = [
    {
      id: 'blasfemia', n: 'La blasfemia contra el Espíritu Santo', ref: 'Mateo 12:22-32; Marcos 3:22-30; Lucas 12:10; Hebreos 6:4-6; 1 Juan 1:9',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/es-blasfemia.webp', alt: 'Jesús, de espaldas, junto a un hombre recién liberado que mira asombrado a su alrededor, mientras la multitud se maravilla y un grupo de fariseos con mantos de flecos murmura con gesto hostil', pie: 'Después de una liberación, los fariseos dijeron que Jesús echaba fuera demonios por Beelzebú (Mt 12:24).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto os digo: Todo pecado y blasfemia será perdonado a los hombres; mas la blasfemia contra el Espíritu no les será perdonada. A cualquiera que dijere alguna palabra contra el Hijo del Hombre, le será perdonado; pero al que hable contra el Espíritu Santo, no le será perdonado, ni en este siglo ni en el venidero.', ref: 'Mateo 12:31-32' }
      ],
      texto: [
        'Pocos textos han causado tanta angustia a los creyentes como este: «todo pecado y blasfemia será perdonado a los hombres; mas la blasfemia contra el Espíritu no les será perdonada» (Mt 12:31). Muchos se han preguntado, con temor, si lo cometieron alguna vez. Para entenderlo hay que leerlo en su contexto.',
        { h: 'Qué ocurrió' },
        'Jesús sanó a un endemoniado ciego y mudo. La multitud, asombrada, preguntaba si no sería este el Hijo de David. Los fariseos, en cambio, dijeron: «Este no echa fuera los demonios sino por Beelzebú, príncipe de los demonios» (Mt 12:24). No negaban el milagro, que era evidente. Lo atribuían a Satanás. Marcos lo explica al final del relato: Jesús dijo esto «porque ellos habían dicho: Tiene espíritu inmundo» (Mr 3:30).',
        { h: 'Qué es' },
        'La blasfemia contra el Espíritu Santo no es una palabra dicha en un momento de enojo ni un pensamiento impuro que cruza la mente. Es atribuir conscientemente a Satanás la obra que el Espíritu hace por medio de Cristo, después de haberla visto con claridad. Es cerrar los ojos a la luz de manera deliberada y persistente, llamando malo a lo que se sabe que es de Dios. Quien rechaza así al único que puede perdonar se queda sin perdón, no porque Dios no quiera perdonar, sino porque la persona rechaza el único camino del perdón.',
        { h: 'Por qué no tiene perdón' },
        'Jesús distingue: el que diga una palabra contra el Hijo del Hombre será perdonado. Pedro negó a Jesús tres veces y fue restaurado. Pablo había sido blasfemo y perseguidor, y recibió misericordia porque lo hizo por ignorancia, en incredulidad (1 Ti 1:13). La blasfemia contra el Espíritu es distinta porque el Espíritu es quien convence de pecado y lleva al arrepentimiento. Quien endurece su corazón hasta llamar diabólica la obra del Espíritu ya no puede arrepentirse, porque rechaza al que lo lleva al arrepentimiento.',
        { h: 'Una palabra pastoral' },
        'Por eso, la persona que teme haber cometido este pecado muestra con su temor que no lo ha cometido. Quien está endurecido no se angustia por haber ofendido a Dios. Si te preocupa, es porque el Espíritu sigue obrando en ti. La promesa sigue en pie: «Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9).',
        { ejercicio: {
          pregunta: 'Según el contexto de Mateo 12, ¿qué es la blasfemia contra el Espíritu Santo?',
          opciones: [
            { t: 'Atribuir a Satanás, con conocimiento y de manera persistente, la obra que el Espíritu hace por medio de Cristo.', ok: true, por_que: 'Es lo que hicieron los fariseos ante una liberación evidente (Mt 12:24; Mr 3:30).' },
            { t: 'Cualquier insulto contra Dios dicho en un momento de enojo.', ok: false, por_que: 'Jesús dice que «todo pecado y blasfemia será perdonado a los hombres» (Mt 12:31). Pedro y Pablo fueron perdonados.' },
            { t: 'Dudar de una manifestación en un culto pentecostal.', ok: false, por_que: 'Examinar las manifestaciones es un mandato (1 Ts 5:21; 1 Jn 4:1), no una blasfemia.' }
          ],
          explicacion: 'Quien teme haber cometido este pecado muestra que el Espíritu sigue obrando en él.'
        } }
      ],
      pensar: 'Si alguna vez temiste haber cometido el pecado imperdonable, ¿qué te dice este estudio? ¿A quién conoces que necesita oír esta palabra de consuelo?'
    },
    {
      id: 'hablan-todos', n: '«¿Hablan todos lenguas?»', ref: '1 Corintios 12:27-31; 14:5, 18, 23; Hechos 2:4; 10:46; 19:6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y a unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros, luego los que hacen milagros, después los que sanan, los que ayudan, los que administran, los que tienen don de lenguas. ¿Son todos apóstoles? ¿son todos profetas? ¿todos maestros? ¿hacen todos milagros? ¿Tienen todos dones de sanidad? ¿hablan todos lenguas? ¿interpretan todos? Procurad, pues, los dones mejores. Mas yo os muestro un camino aun más excelente.', ref: '1 Corintios 12:28-31' }
      ],
      texto: [
        'Al final de 1 Corintios 12, Pablo hace siete preguntas: «¿Son todos apóstoles? ¿son todos profetas? ¿todos maestros? ¿hacen todos milagros? ¿Tienen todos dones de sanidad? ¿hablan todos lenguas? ¿interpretan todos?» (1 Co 12:29-30). En griego, la forma de las preguntas espera una respuesta negativa: no, no todos. ¿Contradice esto la enseñanza de que las lenguas son la señal inicial del bautismo en el Espíritu, que es para todos?',
        { h: 'El contexto' },
        'Pablo está hablando de la iglesia como un cuerpo con muchos miembros, cada uno con su función. Inmediatamente antes dice: «Y a unos puso Dios en la iglesia, primeramente apóstoles…» (1 Co 12:28). Las preguntas se refieren a ministerios y dones ejercidos en la reunión de la iglesia. No todos son apóstoles ni maestros; no todos traen un mensaje en lenguas para la congregación, ni todos interpretan.',
        { h: 'Lo que Pablo dice en otros lugares' },
        'El mismo Pablo, dos capítulos después, escribe: «Así que, quisiera que todos vosotros hablaseis en lenguas» (1 Co 14:5). Y supone que toda la iglesia podría hablar en lenguas al mismo tiempo (1 Co 14:23). Si todos podían hablar en lenguas, ¿por qué pregunta «¿hablan todos lenguas?» esperando un no? Porque se refiere a cosas distintas.',
        { h: 'Señal, oración y don' },
        'La enseñanza pentecostal clásica distingue, como vimos en la ruta VI, entre las lenguas como señal del bautismo en el Espíritu, las lenguas como oración personal y el don de lenguas para la iglesia, que debe interpretarse. En Hechos, todos los que fueron bautizados en el Espíritu hablaron en lenguas: los ciento veinte, la casa de Cornelio, los doce de Éfeso. En 1 Corintios 12, Pablo dice que no todos tienen el ministerio de traer mensajes en lenguas a la congregación. Las dos cosas son verdad.',
        { posturas: {
          titulo: '¿Qué significa «¿hablan todos lenguas?»?',
          a: { n: 'No todos tienen el don para la iglesia', t: 'La lectura pentecostal clásica entiende que la pregunta se refiere al don de lenguas ejercido en el culto, que necesita interpretación. No contradice que todo creyente bautizado en el Espíritu hable en lenguas como señal inicial y pueda orar en lenguas en privado (1 Co 14:5, 18).' },
          b: { n: 'No todos hablan en lenguas', t: 'Los cesacionistas y muchos evangélicos, también algunos carismáticos, entienden que la pregunta muestra que las lenguas nunca fueron para todos, y que por eso no pueden ser la señal necesaria de ninguna experiencia del Espíritu.' },
          c: 'Este recurso sigue la primera lectura, porque toma en cuenta todo lo que Pablo dice en los capítulos 12 a 14 y los relatos de Hechos. Ninguna de las dos posturas permite despreciar a quien no habla en lenguas ni hacer de ellas una medida de espiritualidad.'
        } }
      ],
      pensar: 'Pablo desea que todos hablen en lenguas y, a la vez, enseña que no todos tienen el mismo ministerio. ¿Cómo te ayuda esa distinción a valorar tus dones y los de otros sin envidia ni orgullo?'
    },
    {
      id: 'cesaran', n: '«Las lenguas cesarán»', ref: '1 Corintios 13:8-13; 1:4-8; 1 Juan 3:2',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará. Porque en parte conocemos, y en parte profetizamos; mas cuando venga lo perfecto, entonces lo que es en parte se acabará.', ref: '1 Corintios 13:8-10' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Ahora y entonces en 1 Corintios 13:9-12',
          cab: ['Ahora', 'Entonces'],
          filas: [
            ['Conocemos en parte', 'Lo perfecto'],
            ['Profetizamos en parte', 'Lo que es en parte se acabará'],
            ['Como niño: hablaba, pensaba y juzgaba como niño', 'Como hombre: dejé lo que era de niño'],
            ['Vemos por espejo, oscuramente', 'Veremos cara a cara'],
            ['Conozco en parte', 'Conoceré como fui conocido']
          ],
          nota: 'El «entonces» describe la visión de Dios en la eternidad.'
        } }
      ],
      texto: [
        '«El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará» (1 Co 13:8). Este versículo es el texto más citado para enseñar que los dones del Espíritu ya no existen. La ruta VI presentó el debate; aquí se lee el texto con detalle.',
        { h: 'Cuándo cesan' },
        'Pablo responde la pregunta de cuándo: «cuando venga lo perfecto, entonces lo que es en parte se acabará» (1 Co 13:10). Todo depende de qué es «lo perfecto». La palabra griega (téleion) significa lo completo, lo que llegó a su fin o meta. La tabla muestra cómo Pablo contrasta el «ahora» con el «entonces».',
        { h: 'Cara a cara' },
        'Pablo describe el «entonces» con dos imágenes. Primero, «veremos cara a cara» (1 Co 13:12). En el Antiguo Testamento, ver cara a cara es la expresión para el encuentro directo con Dios (Gn 32:30; Éx 33:11). Segundo, «conoceré como fui conocido». Dios nos conoce perfectamente. Conocer de esa manera solo será posible cuando estemos con Cristo: «sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es» (1 Jn 3:2). Ningún creyente, por mucho que haya leído el Nuevo Testamento completo, conoce hoy como Dios lo conoce.',
        { h: 'El canon completo' },
        'La lectura cesacionista más conocida entiende que lo perfecto es el canon completo de la Escritura, terminado hacia el final del siglo I. Pero los corintios no podían saber que Pablo se refería a una colección de libros que todavía no existía, y la descripción de Pablo no encaja con un libro: con la Biblia en las manos seguimos viendo «por espejo, oscuramente». Otros cesacionistas lo entienden como la madurez de la iglesia, pero la iglesia no ha llegado a conocer como Dios conoce.',
        { h: 'Hasta que Él venga' },
        'En el primer capítulo de la carta, Pablo dio gracias porque a los corintios no les faltaba ningún don, «esperando la manifestación de nuestro Señor Jesucristo» (1 Co 1:7). Los dones son herramientas para el tiempo de la espera. Cuando Cristo venga, ya no harán falta las profecías, porque veremos al que hablaba por ellas; ni las lenguas, porque oraremos cara a cara. Mientras tanto, el amor, que permanece para siempre, es el camino en que se usan.',
        { ejercicio: {
          pregunta: '¿Qué indica mejor que «lo perfecto» de 1 Corintios 13:10 es la venida de Cristo y no el canon del Nuevo Testamento?',
          opciones: [
            { t: 'Que Pablo lo describe como ver «cara a cara» y conocer como somos conocidos, algo que solo ocurrirá en la presencia de Cristo.', ok: true, por_que: 'Esas expresiones describen la visión de Dios (1 Jn 3:2), no la lectura de un libro.' },
            { t: 'Que la palabra «perfecto» siempre significa Jesucristo en la Biblia.', ok: false, por_que: 'Téleion tiene varios sentidos (maduro, completo). Lo decisivo es el contexto del versículo 12.' },
            { t: 'Que el Nuevo Testamento no menciona el canon en ningún lugar.', ok: false, por_que: 'Aunque es cierto que no lo menciona, el argumento principal está en lo que el mismo Pablo dice del «entonces».' }
          ],
          explicacion: 'Los dones acompañan a la iglesia hasta que veamos a Cristo cara a cara.'
        } }
      ],
      pensar: 'Pablo dice que ahora vemos «por espejo, oscuramente». ¿Qué cosas de Dios anhelas entender cuando lo veas cara a cara? ¿Cómo te ayuda esa esperanza a confiar hoy?'
    },
    {
      id: 'apartarse', n: '¿Puede el Espíritu apartarse?', ref: '1 Samuel 16:14; Salmo 51:11; Juan 14:16; Efesios 4:30; Hebreos 3:12-14; 6:4-6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Crea en mí, oh Dios, un corazón limpio, Y renueva un espíritu recto dentro de mí. No me eches de delante de ti, Y no quites de mí tu santo Espíritu. Vuélveme el gozo de tu salvación, Y espíritu noble me sustente.', ref: 'Salmo 51:10-12' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Antes y después de Pentecostés',
          cab: ['', 'Antiguo Testamento', 'Nuevo pacto'],
          filas: [
            ['Sobre quién', 'Algunos: jueces, reyes, profetas', 'Todos los creyentes'],
            ['Cómo', 'Viene sobre ellos para una tarea', 'Mora en ellos'],
            ['Por cuánto tiempo', 'Podía apartarse (Saúl, Sansón)', '«Para siempre» (Jn 14:16)'],
            ['La advertencia', 'No quites de mí tu santo Espíritu (Sal 51:11)', 'No contristéis al Espíritu (Ef 4:30)']
          ],
          nota: 'El cambio de pacto cambia la manera en que el Espíritu está con el pueblo de Dios.'
        } }
      ],
      texto: [
        'La ruta II mostró que el Espíritu se apartó de Saúl (1 S 16:14) y que David oró: «no quites de mí tu santo Espíritu» (Sal 51:11). ¿Puede un creyente de hoy hacer la misma oración? ¿Puede el Espíritu apartarse de él?',
        { h: 'Un cambio de pacto' },
        'La tabla muestra la diferencia. En el Antiguo Testamento, el Espíritu venía sobre algunas personas para cumplir una tarea, y su presencia estaba ligada a esa función. Saúl perdió el Espíritu cuando Dios lo desechó como rey. En el nuevo pacto, el Espíritu mora en todo creyente. Jesús prometió que el Consolador estaría «para siempre» (Jn 14:16), y Pablo dice que fuimos sellados «para el día de la redención» (Ef 4:30). Por eso, muchos maestros enseñan que el creyente de hoy no necesita orar «no quites de mí tu santo Espíritu» con el temor de David: el Espíritu no se va con cada caída.',
        { h: 'Pero hay advertencias' },
        'Al mismo tiempo, el Nuevo Testamento advierte con seriedad. Hebreos dice: «Mirad, hermanos, que no haya en ninguno de vosotros corazón malo de incredulidad para apartarse del Dios vivo» (He 3:12), y habla de quienes «fueron hechos partícipes del Espíritu Santo» y recayeron (He 6:4-6). Jesús habló de ramas que no permanecen en la vid y son echadas fuera (Jn 15:6). Estos textos se entienden de distintas maneras.',
        { posturas: {
          titulo: '¿Puede un creyente perder la salvación?',
          a: { n: 'Seguridad condicional', t: 'Las Asambleas de Dios y la tradición arminiana-wesleyana, de la que vienen la mayoría de los pentecostales, enseñan que el creyente está seguro mientras permanece en la fe, pero que puede, por una incredulidad persistente y deliberada, apartarse de Cristo y perder la salvación. Leen así Hebreos 3:12, 6:4-6 y Juan 15:6. No es caer en un pecado, sino abandonar a Cristo.' },
          b: { n: 'Perseverancia de los santos', t: 'La tradición reformada y muchos bautistas enseñan que quien ha nacido de nuevo perseverará hasta el fin, porque Dios termina lo que comienza (Fil 1:6) y nadie arrebata a las ovejas de la mano de Cristo (Jn 10:28-29). Entienden que quienes se apartan definitivamente nunca habían nacido de nuevo (1 Jn 2:19).' },
          c: 'Este recurso sigue la primera postura, en la línea de las Asambleas de Dios, con su equilibrio pastoral: el sello del Espíritu da seguridad al que confía en Cristo, y el creyente que cae no ha perdido la salvación por eso, sino que es llamado a levantarse y confesar su pecado (1 Jn 1:9). Las dos posturas coinciden en que la seguridad descansa en Cristo y en que nadie debe vivir en el pecado confiando en una seguridad que no se manifiesta en una vida de fe.'
        } },
        { h: 'Cómo orar hoy' },
        'El Salmo 51 sigue siendo una oración preciosa para el creyente que ha pecado, aunque lo lea a la luz del nuevo pacto. Su centro no es el miedo, sino el anhelo: «Crea en mí, oh Dios, un corazón limpio… Vuélveme el gozo de tu salvación» (Sal 51:10, 12). El pecado no hace que el Espíritu se vaya en un instante, pero sí contrista al Espíritu, apaga el gozo y enfría la comunión. El camino de regreso está siempre abierto.'
      ],
      pensar: 'David pidió: «Vuélveme el gozo de tu salvación». ¿Hay algo que te haya quitado el gozo de la comunión con Dios? ¿Qué te impide volver hoy?'
    },
    {
      id: 'detiene', n: 'Lo que detiene al inicuo', ref: '2 Tesalonicenses 2:1-12; 1 Tesalonicenses 4:13-18; Juan 16:7-11; Apocalipsis 3:10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y ahora vosotros sabéis lo que lo detiene, a fin de que a su debido tiempo se manifieste. Porque ya está en acción el misterio de la iniquidad; sólo que hay quien al presente lo detiene, hasta que él a su vez sea quitado de en medio. Y entonces se manifestará aquel inicuo, a quien el Señor matará con el espíritu de su boca, y destruirá con el resplandor de su venida;', ref: '2 Tesalonicenses 2:6-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '¿Quién o qué detiene?',
          cab: ['Propuesta', 'Razón', 'Dificultad'],
          filas: [
            ['El Espíritu Santo que obra por medio de la iglesia', 'Solo Dios puede frenar el misterio de la iniquidad; Pablo usa un neutro («lo que») y un masculino («quien»), como Juan con el Espíritu', 'Pablo no lo nombra'],
            ['El Imperio romano y su ley', 'Fue la lectura de muchos padres de la iglesia, como Tertuliano', 'Roma cayó hace siglos y el inicuo no se manifestó'],
            ['El gobierno humano en general', 'Romanos 13: las autoridades frenan el mal', 'No explica que sea «quitado de en medio» de una vez'],
            ['La predicación del evangelio', 'El fin vendrá cuando el evangelio llegue a todas las naciones (Mt 24:14)', 'Es difícil verla como «quien» es quitado']
          ],
          nota: 'Pablo dice que los tesalonicenses sabían lo que detenía (2 Ts 2:6); nosotros solo podemos deducirlo.'
        } }
      ],
      texto: [
        'En 2 Tesalonicenses 2, Pablo corrige a una iglesia confundida, que creía que el día del Señor ya había llegado. Les explica que antes debe manifestarse «el hombre de pecado», a quien la tradición llama el Anticristo. Y dice que algo, o alguien, lo detiene: «Y ahora vosotros sabéis lo que lo detiene, a fin de que a su debido tiempo se manifieste… sólo que hay quien al presente lo detiene, hasta que él a su vez sea quitado de en medio» (2 Ts 2:6-7).',
        { h: 'Un enigma' },
        'Pablo no dice qué es lo que detiene, porque los tesalonicenses ya lo sabían: se lo había enseñado cuando estuvo con ellos (2 Ts 2:5). Nosotros tenemos que deducirlo. La tabla reúne las propuestas principales.',
        { h: 'El Espíritu Santo, por medio de la iglesia' },
        'La interpretación más común entre los dispensacionalistas, y la que siguen las Asambleas de Dios, es que quien detiene es el Espíritu Santo, que obra en el mundo por medio de la iglesia. Hay varias razones. Lo que se detiene es «el misterio de la iniquidad», una fuerza espiritual que solo Dios puede frenar. Pablo usa un neutro («lo que detiene») y un masculino («quien lo detiene»), como ocurre con el Espíritu en griego: la palabra pneûma es neutra, pero el Espíritu es una persona, y Juan usa el masculino para Él. Y Jesús dijo que el Espíritu convencería al mundo de pecado, de justicia y de juicio (Jn 16:8): su presencia en la iglesia es sal y luz que frena la corrupción.',
        { h: 'Quitado de en medio' },
        '¿Cómo puede el Espíritu ser «quitado de en medio» si está en todas partes? No significa que el Espíritu deje el mundo: en la tribulación seguirá habiendo personas que se conviertan (Ap 7:9-14). Significa que termina su obra de freno por medio de la iglesia, cuando la iglesia sea arrebatada al encuentro del Señor (1 Ts 4:17). Para el dispensacionalismo pretribulacional, este texto apoya que el arrebatamiento ocurre antes de que se manifieste el Anticristo y comience la gran tribulación.',
        { posturas: {
          titulo: '¿Quién es el que detiene?',
          a: { n: 'El Espíritu Santo, por medio de la iglesia', t: 'Solo Dios puede detener el misterio de la iniquidad, y lo hace por el Espíritu que mora en la iglesia. Cuando la iglesia sea arrebatada, cesará ese freno y se manifestará el inicuo. Es la lectura de muchos premilenaristas pretribulacionales.' },
          b: { n: 'El orden político y la ley', t: 'Muchos padres de la iglesia y algunos intérpretes modernos entienden que Pablo habla del Imperio romano o, en general, del gobierno y la ley que frenan el caos, y que el inicuo se manifestará cuando ese orden se derrumbe. Pablo no lo nombraría para no ser acusado de anunciar la caída del imperio.' },
          c: 'Este recurso sigue la primera lectura, porque explica mejor el carácter espiritual del freno y el uso del masculino y el neutro. Pero la presenta como interpretación probable y no como dato seguro, porque Pablo no lo dice expresamente. Lo que el texto sí enseña con claridad es que Dios controla la historia y que el mal no avanza ni un día más allá de lo que Él permite.'
        } },
        { ir: { t: 'Ver «¿Antes de la tribulación?» en Los últimos tiempos', a: '../../escatologia/#eventos/3' } }
      ],
      pensar: 'Si la presencia del Espíritu en la iglesia frena el mal en el mundo, ¿qué responsabilidad te da eso como sal y luz en tu barrio, tu trabajo y tu país?'
    },
    {
      id: 'efeso', n: '«¿Recibisteis el Espíritu Santo cuando creísteis?»', ref: 'Hechos 18:24–19:7; Efesios 1:13',
      fecha: 53,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-efeso-espiritu.webp', alt: 'En una casa de Éfeso, Pablo impone las manos sobre un grupo de doce hombres que alaban a Dios con los rostros levantados', pie: '«Y habiéndoles impuesto Pablo las manos, vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban» (Hch 19:6).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Aconteció que entre tanto que Apolos estaba en Corinto, Pablo, después de recorrer las regiones superiores, vino a Efeso, y hallando a ciertos discípulos, les dijo: ¿Recibisteis el Espíritu Santo cuando creísteis? Y ellos le dijeron: Ni siquiera hemos oído si hay Espíritu Santo. Entonces dijo: ¿En qué, pues, fuisteis bautizados? Ellos dijeron: En el bautismo de Juan. Dijo Pablo: Juan bautizó con bautismo de arrepentimiento, diciendo al pueblo que creyesen en aquel que vendría después de él, esto es, en Jesús el Cristo. Cuando oyeron esto, fueron bautizados en el nombre del Señor Jesús. Y habiéndoles impuesto Pablo las manos, vino sobre ellos el Espíritu Santo; y hablaban en lenguas, y profetizaban. Eran por todos unos doce hombres.', ref: 'Hechos 19:1-7' }
      ],
      texto: [
        'Cuando Pablo llegó a Éfeso, encontró a unos doce discípulos y les hizo una pregunta: «¿Recibisteis el Espíritu Santo cuando creísteis?» (Hch 19:2). Respondieron que ni siquiera habían oído si había Espíritu Santo. Este pasaje se usa a favor y en contra de la doctrina pentecostal, y por eso conviene leerlo con cuidado.',
        { h: 'Quiénes eran' },
        'Lucas los llama «discípulos», la palabra que usa casi siempre para los creyentes en Jesús. Pero solo conocían el bautismo de Juan. Probablemente habían sido alcanzados por la predicación de Juan el Bautista o de alguien como Apolos, que antes de ser instruido por Priscila y Aquila «solamente conocía el bautismo de Juan» (Hch 18:25). Pablo les explicó que Juan había bautizado con bautismo de arrepentimiento, diciendo que creyeran en el que vendría después de él, es decir, en Jesús. Al oírlo, fueron bautizados en el nombre del Señor Jesús. Y cuando Pablo les impuso las manos, vino sobre ellos el Espíritu Santo, y hablaban en lenguas y profetizaban (Hch 19:4-6).',
        { posturas: {
          titulo: '¿Qué enseña Hechos 19:1-7?',
          a: { n: 'Una experiencia posterior a la fe', t: 'La pregunta de Pablo supone que se puede creer sin haber recibido todavía el Espíritu en el sentido de Pentecostés. El orden del relato también lo muestra: creen en Jesús, se bautizan y después, con la imposición de manos, reciben el Espíritu y hablan en lenguas. Para la lectura pentecostal, Éfeso confirma, veinte años después de Pentecostés, el patrón de Samaria.' },
          b: { n: 'Una conversión incompleta', t: 'Muchos evangélicos entienden que estos hombres no eran todavía cristianos, sino discípulos de Juan, y que todo ocurrió en un solo acontecimiento: creyeron en Jesús, fueron bautizados y recibieron el Espíritu. Para ellos, el texto muestra que el Espíritu se recibe al creer en Cristo, no después.' },
          c: 'Las dos lecturas tienen razones. Aun si eran discípulos de Juan, el relato distingue el bautismo en agua y la recepción del Espíritu con lenguas y profecía, que llega después con la imposición de manos. Y la pregunta de Pablo muestra que, para él, recibir el Espíritu era algo de lo que un creyente podía estar consciente: algo que se sabía si había ocurrido o no. Este recurso entiende el pasaje, junto con Samaria, como apoyo a la enseñanza de la ruta V.'
        } },
        { h: 'Una pregunta para hoy' },
        'Más allá del debate, la pregunta de Pablo sigue siendo pertinente. Muchos creyentes sinceros, como los doce de Éfeso, conocen una parte del evangelio, pero nunca han oído con claridad que el Espíritu Santo es una persona que quiere habitar en ellos, llenarlos y darles poder. Pablo no los despreció: les enseñó lo que faltaba y oró por ellos. Así debe hacer la iglesia hoy.',
        { ejercicio: {
          pregunta: 'Al terminar este recurso, ¿cuál es la mejor síntesis de lo que la Biblia enseña sobre el Espíritu Santo?',
          opciones: [
            { t: 'Es Dios y es persona; da vida nueva, mora en todo creyente y lo santifica; bautiza con poder para testificar, reparte dones y forma el carácter de Cristo hasta su venida.', ok: true, por_que: 'Resume su persona (ruta I), su obra en la salvación (IV), el bautismo en el Espíritu (V), los dones (VI) y el fruto (VII).' },
            { t: 'Es la fuerza activa de Dios que da poder a los creyentes más consagrados.', ok: false, por_que: 'El Espíritu es una persona divina, no una fuerza, y mora en todo creyente (Ro 8:9).' },
            { t: 'Fue dado a los apóstoles para fundar la iglesia y hoy obra solo por medio de la Biblia.', ok: false, por_que: 'La promesa es para todos los creyentes de todos los tiempos (Hch 2:39), y los dones acompañan a la iglesia hasta la venida de Cristo (1 Co 1:7).' }
          ],
          explicacion: 'El Espíritu Santo es Dios con nosotros y en nosotros, hasta que veamos a Cristo cara a cara.'
        } }
      ],
      pensar: 'Si Pablo te hiciera hoy la misma pregunta, «¿Recibisteis el Espíritu Santo cuando creísteis?», ¿qué responderías? ¿Qué te falta conocer o recibir?'
    }
  ];

  const E = window.__ESPIRITU;
  delete window.__ESPIRITU;
  window.RUTA_DATA = {
    titulo: 'El Espíritu Santo',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'quien', grupo: 'Quién es el Espíritu Santo', n: 'I. Quién es el Espíritu Santo', info: 'Una persona divina: sus nombres, sus símbolos, su lugar en la Trinidad y los errores', estaciones: E.quien },
      { id: 'at', grupo: 'La obra del Espíritu en la historia', n: 'II. El Espíritu en el Antiguo Testamento', info: 'En la creación, sobre jueces, reyes y profetas, y la promesa del derramamiento', estaciones: E.at },
      { id: 'jesus', grupo: 'La obra del Espíritu en la historia', n: 'III. El Espíritu en la vida de Jesús', info: 'De la concepción a la resurrección, y la promesa del Consolador', estaciones: E.jesus },
      { id: 'salvacion', grupo: 'El Espíritu en el creyente', n: 'IV. La obra del Espíritu en la salvación', info: 'Convence, regenera, une al cuerpo, mora, sella, adopta, intercede y santifica', estaciones: E.salvacion },
      { id: 'bautismo', grupo: 'El Espíritu en el creyente', n: 'V. El bautismo en el Espíritu Santo', info: 'La promesa, Pentecostés, los relatos de Hechos, las lenguas y cómo se recibe', estaciones: E.bautismo,
        linea: { desde: 30, hasta: 60, hitos: [
          { a: 33, t: 'Pentecostés' }, { a: 34, t: 'Samaria y Damasco' }, { a: 40, t: 'Cesarea' }, { a: 53, t: 'Éfeso' }
        ] } },
      { id: 'dones', grupo: 'El Espíritu en el creyente', n: 'VI. Los dones del Espíritu', info: 'Los nueve dones, las lenguas, la profecía, los ministerios, la vigencia y el amor', estaciones: E.dones },
      { id: 'vida', grupo: 'El Espíritu en el creyente', n: 'VII. El fruto y la vida en el Espíritu', info: 'Andar en el Espíritu, su fruto, ser guiados, la misión y la esperanza', estaciones: E.vida },
      { id: 'textos', grupo: 'Textos difíciles', n: 'VIII. Textos difíciles', info: 'La blasfemia contra el Espíritu, las lenguas, si el Espíritu se aparta, lo que detiene y Éfeso', estaciones: textos }
    ]
  };
})();
