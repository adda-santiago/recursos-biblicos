/* La persona y obra de Cristo · ruta III. Dios y hombre en una persona (ver encabezado en parte1.js) */
(() => {
  const ORIENTE = [[29.5, 22], [42.5, 40]]; // Egipto, Asia Menor y Siria
  const IMP = ['roma-117'];
  const NT = [30, 95];

  /* ---------------- III. Dios y hombre en una persona ---------------- */
  const persona = [
    {
      id: 'verdadero-dios', n: 'Verdadero Dios: lo que Jesús reclamó', ref: 'Marcos 2:5-12; Mateo 12:6-8; 25:31-32; Juan 5:17-23; 10:28; 20:28', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Jesús dijo e hizo como solo Dios puede',
          cab: ['Jesús…', 'Texto', 'Por qué solo Dios'],
          filas: [
            ['Perdona pecados', 'Hijo, tus pecados te son perdonados (Mr 2:5)', '¿Quién puede perdonar pecados, sino sólo Dios? (Mr 2:7)'],
            ['Es Señor del día de reposo', 'El Hijo del Hombre es Señor del día de reposo (Mt 12:8)', 'Dios instituyó el sábado (Gn 2:3; Éx 20:11)'],
            ['Es mayor que el templo', 'Uno mayor que el templo está aquí (Mt 12:6)', 'El templo era la casa de Dios'],
            ['Juzgará a las naciones', 'Se sentará en su trono de gloria (Mt 25:31-32)', 'Dios es el juez de toda la tierra (Gn 18:25)'],
            ['Da vida eterna', 'Yo les doy vida eterna (Jn 10:28)', 'Solo Dios tiene vida en sí mismo (Jn 5:26)'],
            ['Pide la misma honra que el Padre', 'Para que todos honren al Hijo como honran al Padre (Jn 5:23)', 'Dios no da su gloria a otro (Is 42:8)'],
            ['Acepta adoración', 'Le adoraron (Mt 14:33; 28:9); ¡Señor mío, y Dios mío! (Jn 20:28)', 'Solo a Dios se adora (Mt 4:10)']
          ],
          nota: 'La lista de los textos donde se llama Dios a Jesús está en Dios y la Trinidad, estación «El Hijo es Dios».'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mr/2/5-10', ref: 'Marcos 2:5-10' }
      ],
      texto: [
        'El Nuevo Testamento llama Dios a Jesús varias veces: Tomás lo confiesa «¡Señor mío, y Dios mío!» (Jn 20:28), Pablo lo llama «Dios sobre todas las cosas» (Ro 9:5) y Tito lo espera como «nuestro gran Dios y Salvador» (Tit 2:13). Esos textos se estudian en el recurso Dios y la Trinidad. Esta estación mira otra clase de evidencia, a veces más impresionante: lo que Jesús mismo dijo e hizo, aun sin decir expresamente «yo soy Dios».',
        { h: 'Un paralítico en Capernaúm' },
        'Cuatro hombres abrieron el techo de una casa para bajar a un paralítico delante de Jesús. Lo esperable era que lo sanara. Pero Jesús dijo primero: «Hijo, tus pecados te son perdonados» (Mr 2:5). Los escribas entendieron muy bien lo que eso implicaba: «¿Quién puede perdonar pecados, sino sólo Dios?» (Mr 2:7). Cualquiera puede perdonar una ofensa contra sí mismo, pero Jesús perdonaba pecados cometidos contra Dios, como si Él fuera el ofendido. Para mostrar que tenía esa autoridad, sanó al paralítico delante de todos.',
        { h: 'La autoridad del Hijo' },
        'La tabla reúne otros ejemplos. Jesús se declaró Señor del día de reposo, que Dios había instituido. Dijo que en Él había algo mayor que el templo, la casa de Dios. Anunció que se sentaría en el trono de su gloria para juzgar a todas las naciones, y que el destino eterno de cada persona dependería de su relación con Él (Mt 7:21-23; 25:31-46). Prometió dar vida eterna. Exigió que lo amaran más que a padre y madre (Mt 10:37). Mientras los profetas decían «así dice Jehová», Jesús decía «De cierto os digo». Y, según Juan 5:23, pidió para sí la misma honra que se da al Padre.',
        { h: 'Las reacciones' },
        'Sus adversarios entendieron estas afirmaciones. Cuando sanó en sábado y llamó a Dios su propio Padre, procuraban matarlo, porque se hacía igual a Dios (Jn 5:18). Cuando dijo «Yo y el Padre uno somos», tomaron piedras para apedrearlo por blasfemia (Jn 10:30-33). Y en el juicio fue condenado a muerte porque, ante el sumo sacerdote, se identificó con el Hijo del Hombre que vendría en las nubes del cielo (Mr 14:61-64). Jesús no murió por decir que había que amar al prójimo, sino por lo que afirmaba de sí mismo.',
        { ir: { t: 'Ver «El Hijo es Dios» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/5' } },
        { ejercicio: {
          pregunta: '¿Por qué los escribas acusaron a Jesús de blasfemia cuando perdonó al paralítico?',
          opciones: [
            { t: 'Porque perdonar pecados contra Dios es algo que solo Dios puede hacer.', ok: true, por_que: 'Ellos mismos lo dicen: «¿Quién puede perdonar pecados, sino sólo Dios?» (Mr 2:7).' },
            { t: 'Porque lo hizo en día de reposo.', ok: false, por_que: 'Marcos 2 no dice que fuera sábado; la objeción es otra.' },
            { t: 'Porque no ofreció un sacrificio en el templo.', ok: false, por_que: 'La objeción no fue ritual: fue que Jesús se atribuyó una prerrogativa divina.' }
          ],
          explicacion: 'Jesús reclamó para sí lo que solo Dios puede hacer, y lo confirmó con un milagro.'
        } }
      ],
      pensar: 'Jesús dijo «De cierto os digo» con una autoridad que ningún profeta se atribuyó. ¿Tienen sus palabras esa autoridad en tus decisiones de cada día?'
    },
    {
      id: 'yo-soy', n: 'Los siete «Yo soy» de Juan', ref: 'Juan 6:35; 8:12; 10:9, 11; 11:25; 14:6; 15:1', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los siete «Yo soy» con imagen',
          cab: ['Yo soy…', 'Texto', 'Contexto', 'Promesa'],
          filas: [
            ['el pan de vida', 'Jn 6:35', 'Después de multiplicar los panes; el maná del desierto', 'Nunca tendrá hambre'],
            ['la luz del mundo', 'Jn 8:12; 9:5', 'Fiesta de los Tabernáculos, con sus grandes candelabros; sana a un ciego', 'Tendrá la luz de la vida'],
            ['la puerta', 'Jn 10:7, 9', 'El redil de las ovejas', 'Será salvo y hallará pastos'],
            ['el buen pastor', 'Jn 10:11, 14', 'Los malos pastores de Israel (Ez 34)', 'Su vida da por las ovejas'],
            ['la resurrección y la vida', 'Jn 11:25', 'Ante la tumba de Lázaro', 'Aunque esté muerto, vivirá'],
            ['el camino, y la verdad, y la vida', 'Jn 14:6', 'La última cena; Tomás no sabe el camino', 'Nadie viene al Padre, sino por mí'],
            ['la vid verdadera', 'Jn 15:1, 5', 'Camino a Getsemaní; Israel era la viña de Dios (Is 5)', 'El que permanece en mí lleva mucho fruto']
          ],
          nota: 'Cada «Yo soy» responde a una necesidad humana: alimento, luz, salvación, cuidado, vida, dirección y fruto.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/lazaro.webp', alt: 'Ante la entrada de una tumba excavada en la roca en Betania, con la piedra removida, Lázaro, vivo y envuelto en vendas de lino, aparece en la abertura; Jesús, de espaldas, alza la mano frente a la tumba, y Marta y María, abrazadas, lloran de asombro junto a un grupo de vecinos', pie: '«Yo soy la resurrección y la vida» (Jn 11:25): Jesús lo dijo y lo demostró ante la tumba de Lázaro.', origen: 'ia', foco: '20% 40%' }
      ],
      texto: [
        'El evangelio de Juan registra siete afirmaciones de Jesús que comienzan con «Yo soy» y terminan con una imagen tomada de la vida diaria o de la historia de Israel. Cada una revela algo de quién es Jesús y de lo que da a quien cree en Él. La tabla las reúne.',
        { h: 'Pan, luz y puerta' },
        'Después de alimentar a cinco mil personas, la multitud le recordó que Moisés les había dado maná en el desierto. Jesús respondió: «Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre» (Jn 6:35). Él es lo que el maná prefiguraba: el alimento del alma. En la fiesta de los Tabernáculos, cuando grandes candelabros iluminaban el templo, dijo: «Yo soy la luz del mundo» (Jn 8:12), y luego dio vista a un ciego de nacimiento. Y cuando habló del redil, se presentó como la puerta: no una de muchas, sino la única entrada por la que las ovejas son salvas.',
        { h: 'Pastor, resurrección y camino' },
        'Ezequiel había denunciado a los pastores de Israel que se apacentaban a sí mismos, y Dios prometió que Él mismo buscaría a sus ovejas (Ez 34:11). Jesús dijo: «Yo soy el buen pastor; el buen pastor su vida da por las ovejas» (Jn 10:11). Ante Marta, que lloraba a su hermano, dijo: «Yo soy la resurrección y la vida» (Jn 11:25), y llamó a Lázaro fuera de la tumba. En la última cena, cuando Tomás confesó que no sabía el camino, respondió: «Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí» (Jn 14:6).',
        { h: 'La vid' },
        'Israel era la viña que Dios había plantado y que dio uvas silvestres (Is 5:1-7). Jesús dijo: «Yo soy la vid verdadera» (Jn 15:1). Él es el verdadero Israel, el que da el fruto que Dios esperaba, y sus discípulos son los pámpanos que dan fruto si permanecen en Él.',
        { h: 'Exclusivos y personales' },
        'Estas afirmaciones son exclusivas: Jesús no dice que muestra un camino, sino que Él es el camino. Y son personales: el pan se come, la puerta se cruza, en la vid se permanece. No basta con saber quién es Jesús; hay que venir a Él. La estación siguiente estudia otros «Yo soy» en Juan, sin imagen, que son aún más asombrosos.',
        { ejercicio: {
          pregunta: '¿Qué tienen en común los siete «Yo soy» con imagen?',
          opciones: [
            { t: 'Cada uno presenta a Jesús como la respuesta a una necesidad humana y llama a una relación personal con Él.', ok: true, por_que: 'Pan para el hambre, luz para la oscuridad, vida para la muerte: y en cada caso hay que venir, seguir, entrar o permanecer.' },
            { t: 'Son parábolas que Jesús contó sobre otras personas.', ok: false, por_que: 'No son relatos sobre otros: Jesús habla de sí mismo en primera persona.' },
            { t: 'Todos aparecen también en Mateo, Marcos y Lucas.', ok: false, por_que: 'Esta forma de «Yo soy» con imagen es propia del evangelio de Juan.' }
          ],
          explicacion: 'Jesús no solo da pan, luz y vida: Él es el pan, la luz y la vida.'
        } }
      ],
      pensar: '¿Cuál de los siete «Yo soy» describe mejor lo que necesitas de Jesús en esta etapa de tu vida? ¿Qué significa venir a Él en esa área?'
    },
    {
      id: 'yo-soy-absoluto', n: '«Antes que Abraham fuese, yo soy»', ref: 'Juan 8:24, 28, 56-59; 13:19; 18:4-6; Éxodo 3:14; Isaías 43:10-13', fecha: NT,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/8/56-58', ref: 'Juan 8:56-58' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Yo soy» sin imagen, en Juan',
          cab: ['Texto', 'Lo que dice Jesús', 'Eco en el Antiguo Testamento'],
          filas: [
            ['Jn 8:24', 'Si no creéis que yo soy, en vuestros pecados moriréis', 'Para que… entendáis que yo mismo soy (Is 43:10)'],
            ['Jn 8:28', 'Cuando hayáis levantado al Hijo del Hombre, entonces conoceréis que yo soy', 'Yo soy el mismo (Is 41:4; 48:12)'],
            ['Jn 8:58', 'Antes que Abraham fuese, yo soy', 'YO SOY EL QUE SOY (Éx 3:14)'],
            ['Jn 13:19', 'Os lo digo antes que suceda, para que cuando suceda, creáis que yo soy', 'Anuncio lo por venir desde el principio (Is 46:10)'],
            ['Jn 18:5-6', 'Yo soy… retrocedieron, y cayeron a tierra', 'La gloria de Dios hace caer a los hombres (Ez 1:28)']
          ],
          nota: 'En griego, «yo soy» es egó eimí. Así tradujo la Septuaginta el nombre de Dios en Éxodo 3:14 y las frases de Isaías.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/zarza.webp', alt: 'Moisés, descalzo y arrodillado, se cubre el rostro ante una zarza que arde sin consumirse', pie: 'En la zarza, Dios se presentó como «YO SOY» (Éx 3:14).', origen: 'ia' }
      ],
      texto: [
        'Además de los siete «Yo soy» con imagen, Juan registra otras frases en las que Jesús dice simplemente «yo soy», sin agregar nada. En español suenan como algo normal, pero en el contexto de Juan tienen un peso enorme, porque recuerdan el nombre con que Dios se reveló a Moisés.',
        { h: 'El nombre de la zarza' },
        'Cuando Moisés preguntó a Dios cuál era su nombre, Dios respondió: «YO SOY EL QUE SOY» (Éx 3:14). Siglos después, Dios repitió por Isaías una fórmula parecida para afirmar que solo Él es Dios: «para que me conozcáis y creáis, y entendáis que yo mismo soy; antes de mí no fue formado dios» (Is 43:10). La traducción griega que usaban los judíos en tiempos de Jesús, la Septuaginta, expresó esas frases con las palabras egó eimí, «yo soy». Son las mismas que Jesús usa en Juan.',
        { h: 'Antes que Abraham' },
        'En una discusión con líderes judíos, Jesús dijo que Abraham se había gozado de ver su día. Ellos le respondieron con burla: no tenía cincuenta años, ¿y había visto a Abraham? Entonces Jesús dijo: «De cierto, de cierto os digo: Antes que Abraham fuese, yo soy» (Jn 8:58). Si solo hubiera querido decir que existía antes que Abraham, habría dicho «yo era». Pero dijo «yo soy»: Abraham comenzó a existir; Jesús simplemente es, sin principio. Sus oyentes entendieron: tomaron piedras para arrojárselas, la pena por blasfemia (Jn 8:59; Lv 24:16).',
        { h: 'En Getsemaní' },
        'La noche del arresto, una compañía de soldados llegó al huerto con antorchas y armas. Jesús preguntó a quién buscaban. Respondieron: «A Jesús nazareno». Él dijo: «Yo soy». Juan cuenta que entonces «retrocedieron, y cayeron a tierra» (Jn 18:6). Por un instante, el que se entregaba voluntariamente dejó ver quién era. Después se dejó prender.',
        { h: 'Creer que Él es' },
        'Jesús advirtió: «si no creéis que yo soy, en vuestros pecados moriréis» (Jn 8:24). La fe que salva no es creer que Jesús fue un buen hombre o un gran profeta, sino creer que Él es quien dice ser.',
        { ejercicio: {
          pregunta: '¿Por qué los oyentes de Juan 8:58 quisieron apedrear a Jesús?',
          opciones: [
            { t: 'Porque al decir «yo soy» se atribuyó una existencia eterna y el nombre divino de Éxodo 3:14.', ok: true, por_que: 'La lapidación era la pena por blasfemia (Lv 24:16): entendieron que Jesús se hacía Dios.' },
            { t: 'Porque dijo que era mayor que Moisés.', ok: false, por_que: 'En ese pasaje la comparación es con Abraham, y la reacción viene inmediatamente después del «yo soy».' },
            { t: 'Porque dijo que tenía menos de cincuenta años.', ok: false, por_que: 'Eso lo dijeron ellos, burlándose de Él.' }
          ],
          explicacion: 'Jesús no dijo «yo era antes que Abraham», sino «yo soy»: la forma de hablar de Dios.'
        } }
      ],
      pensar: 'Los soldados cayeron a tierra ante el «Yo soy» de Jesús, y aun así Él se dejó llevar. ¿Qué te dice eso sobre la libertad y el amor con que fue a la cruz?'
    },
    {
      id: 'titulos', n: 'Los títulos de Jesús', ref: 'Mateo 1:21-23; 16:16; Marcos 10:45; 14:61-62; Daniel 7:13-14; Romanos 10:9; Filipenses 2:11', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los títulos principales',
          cab: ['Título', 'Significado', 'Texto clave'],
          filas: [
            ['Jesús', 'Forma griega de Josué, «Jehová salva»', 'Él salvará a su pueblo de sus pecados (Mt 1:21)'],
            ['Cristo, Mesías', 'Ungido: el rey, sacerdote y profeta esperado', 'Tú eres el Cristo (Mt 16:16)'],
            ['Hijo del Hombre', 'El título que Jesús prefería: hombre humilde y a la vez rey celestial de Daniel 7', 'Vino… para dar su vida en rescate (Mr 10:45)'],
            ['Hijo de Dios', 'Relación única y eterna con el Padre', 'Mi Hijo amado (Mt 3:17); el unigénito (Jn 3:16)'],
            ['Señor (Kýrios)', 'El nombre con que la Septuaginta traduce Jehová', 'Jesucristo es el Señor (Fil 2:11)'],
            ['Hijo de David', 'El heredero del trono prometido', 'Hijo de David, ten misericordia de mí (Mr 10:47)'],
            ['Emanuel', 'Dios con nosotros', 'Mt 1:23; Is 7:14'],
            ['Cordero de Dios', 'El sacrificio que quita el pecado', 'He aquí el Cordero de Dios (Jn 1:29)'],
            ['Verbo, Lógos', 'La Palabra que revela a Dios', 'Jn 1:1, 14; Ap 19:13']
          ],
          nota: 'Hay muchos más: Salvador, Rey de reyes, el Santo, el Alfa y la Omega, el León de Judá, la Estrella resplandeciente de la mañana.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../daniel/img/dan-anciano-dias.webp', alt: 'Visión del Anciano de días sentado en un trono de fuego', pie: 'Daniel vio a «uno como un hijo de hombre» que venía con las nubes hasta el Anciano de días (Dn 7:13).', origen: 'ia' }
      ],
      texto: [
        'En la Biblia, un nombre o un título dice algo de quien lo lleva. Jesús recibe decenas de títulos en el Nuevo Testamento. La tabla reúne los principales; esta estación se detiene en cuatro.',
        { h: 'Cristo' },
        'Cristo no es un apellido, sino un título: el Ungido, el Mesías prometido. Cuando Pedro confesó «Tú eres el Cristo» (Mr 8:29), estaba diciendo que Jesús era el rey esperado por Israel. Curiosamente, Jesús pidió a sus discípulos que no lo divulgaran (Mr 8:30), porque muchos esperaban un Mesías político que expulsara a los romanos. Jesús tenía que enseñarles primero que el Mesías debía sufrir.',
        { h: 'Hijo del Hombre' },
        'Era el título que Jesús usaba con más frecuencia para hablar de sí mismo, más de ochenta veces en los evangelios. Podía significar simplemente «un ser humano», y así velaba su identidad. Pero Jesús lo llenó con el sentido de Daniel 7, donde «uno como un hijo de hombre» viene con las nubes del cielo hasta el Anciano de días y recibe un reino eterno sobre todos los pueblos (Dn 7:13-14). En el juicio, Jesús lo dijo sin velos: «veréis al Hijo del Hombre sentado a la diestra del poder de Dios, y viniendo en las nubes del cielo» (Mr 14:62). El sumo sacerdote rasgó sus vestiduras. Y Jesús unió a ese rey glorioso con el siervo que sufre: «el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos» (Mr 10:45).',
        { h: 'Hijo de Dios' },
        'En el Antiguo Testamento, Israel y el rey podían ser llamados hijos de Dios en un sentido amplio. Pero Jesús es el Hijo en un sentido único: el unigénito (Jn 3:16), que conoce al Padre como nadie (Mt 11:27) y que comparte su naturaleza. Por eso, cuando Jesús llamaba a Dios su propio Padre, sus adversarios entendían que se hacía igual a Dios (Jn 5:18). Dios y la Trinidad estudia lo que significa que sea Hijo sin ser creado.',
        { h: 'Señor' },
        'La palabra griega Kýrios podía usarse como un trato de respeto, como «señor» en español. Pero la Septuaginta la usaba para traducir el nombre de Dios, Jehová. Cuando la iglesia confesaba «Jesucristo es el Señor» (Fil 2:11), estaba aplicando a Jesús el nombre de Dios. Pablo cita Joel 2:32, «todo aquel que invocare el nombre del Señor será salvo», refiriéndose a Jesús (Ro 10:9-13). Por eso, nadie puede llamar a Jesús Señor sino por el Espíritu Santo (1 Co 12:3).',
        { ejercicio: {
          pregunta: '¿Por qué el título «Hijo del Hombre» no se refiere solo a la humanidad de Jesús?',
          opciones: [
            { t: 'Porque Jesús lo usa con el sentido de Daniel 7, donde el hijo de hombre recibe un reino eterno sobre todos los pueblos.', ok: true, por_que: 'En Marcos 14:62 Jesús une el título con las nubes del cielo y la diestra de Dios, como en Daniel.' },
            { t: 'Porque en la Biblia «hombre» siempre significa Dios.', ok: false, por_que: 'La expresión puede significar simplemente «ser humano»; su peso viene del uso de Daniel 7.' },
            { t: 'Porque nunca lo usó para hablar de su sufrimiento.', ok: false, por_que: 'Lo usó muchas veces para anunciar su pasión, como en Marcos 10:45.' }
          ],
          explicacion: 'El Hijo del Hombre es a la vez el siervo que da su vida y el rey celestial que viene con las nubes.'
        } }
      ],
      pensar: 'Llamar «Señor» a Jesús es reconocer su divinidad y someterse a su autoridad. ¿Hay alguna área de tu vida donde lo llamas Señor con los labios, pero no con los hechos (Lc 6:46)?'
    },
    {
      id: 'dos-naturalezas', n: 'Dos naturalezas, una persona', ref: 'Juan 1:14; Romanos 1:3-4; 9:5; Filipenses 2:6-7; Colosenses 2:9; 1 Timoteo 2:5', fecha: NT,
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dos-naturalezas.svg', alt: 'Esquema: una sola persona, el Hijo eterno, con dos naturalezas, divina y humana, unidas sin confusión, sin cambio, sin división y sin separación, y los cuatro errores que la iglesia rechazó', pie: 'La fórmula del Concilio de Calcedonia (451) y los errores que excluye.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que pertenece a cada naturaleza, en la misma persona',
          cab: ['Como hombre', 'Como Dios'],
          filas: [
            ['Durmió en la barca (Mr 4:38)', 'Calmó el viento y el mar (Mr 4:39)'],
            ['Tuvo hambre (Mt 21:18)', 'Alimentó a cinco mil (Mt 14:21)'],
            ['Lloró ante la tumba de Lázaro (Jn 11:35)', 'Resucitó a Lázaro (Jn 11:43-44)'],
            ['Nació en Belén (Mt 2:1)', 'Sus salidas son desde la eternidad (Mi 5:2)'],
            ['Murió en la cruz (Jn 19:30)', 'Tiene poder para volver a tomar su vida (Jn 10:18)'],
            ['Del linaje de David según la carne (Ro 1:3)', 'Dios sobre todas las cosas (Ro 9:5)']
          ],
          nota: 'No hay dos Jesús: el mismo que durmió es el que calmó la tormenta.'
        } }
      ],
      texto: [
        'Si Jesús es verdadero Dios y verdadero hombre, surge una pregunta: ¿cómo se relacionan las dos cosas? ¿Hay dos personas en Jesús? ¿Se mezclaron lo divino y lo humano en algo intermedio? La iglesia tardó siglos en encontrar las palabras, y la estación siguiente cuenta esa historia. Aquí se presenta el resultado, que los teólogos llaman la unión hipostática, de la palabra griega hipóstasis, «persona».',
        { h: 'Una sola persona' },
        'En Jesús hay una sola persona: el Hijo eterno de Dios. No hay un hombre Jesús y, al lado, un Hijo de Dios que lo habita. El que nació en Belén es el mismo que estaba con Dios en el principio. Por eso los evangelios hablan siempre de un solo sujeto: el mismo Jesús que duerme en la barca, se levanta y reprende al viento. La tabla muestra esos contrastes. No dice que una parte de Jesús durmió y otra calmó el mar, sino que Jesús, el único, hizo las dos cosas.',
        { h: 'Dos naturalezas' },
        'Esa única persona tiene dos naturalezas completas: la divina, que tuvo siempre, y la humana, que tomó en la encarnación. Naturaleza significa el conjunto de lo que hace que algo sea lo que es. Jesús tiene todo lo que hace a Dios ser Dios, porque en Él habita corporalmente toda la plenitud de la Deidad (Col 2:9). Y tiene todo lo que hace al hombre ser hombre: cuerpo, alma, mente, emociones y voluntad humana. Por eso Pablo puede decir en una misma frase que Cristo vino de Israel «según la carne» y que «es Dios sobre todas las cosas» (Ro 9:5).',
        { h: 'Las cuatro negaciones' },
        'En el año 451, el Concilio de Calcedonia confesó que Cristo es reconocido en dos naturalezas «sin confusión, sin cambio, sin división, sin separación». Las dos primeras palabras protegen la distinción: la divinidad no se convirtió en humanidad ni se mezclaron en una tercera cosa. Las dos últimas protegen la unidad: no son dos personas ni pueden separarse. La misma definición dice que Cristo es perfecto en divinidad y perfecto en humanidad, con alma racional y cuerpo. El esquema muestra los errores que así quedan excluidos.',
        'Esto es un misterio, y conviene reconocerlo con humildad. La fórmula de Calcedonia no explica cómo ocurre la unión; pone límites para no decir algo falso. Como un cerco alrededor de un pozo profundo, no muestra el fondo, pero evita que uno caiga.',
        { h: 'Por qué importa' },
        'Si Jesús fuera solo Dios, no podría morir por los hombres. Si fuera solo hombre, su muerte no tendría valor infinito. Si fueran dos personas, la que murió en la cruz no sería Dios. Solo una persona divina con naturaleza humana puede ser el «solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5).',
        { ejercicio: {
          pregunta: 'Según la doctrina bíblica, ¿quién murió en la cruz?',
          opciones: [
            { t: 'El Hijo eterno de Dios, en su naturaleza humana.', ok: true, por_que: 'Una sola persona, el Hijo, murió según la carne; por eso Hechos 20:28 habla de la iglesia que Dios ganó «por su propia sangre».' },
            { t: 'Solo el hombre Jesús, mientras el Hijo de Dios se había apartado de él.', ok: false, por_que: 'Eso divide a Cristo en dos personas, el error que la iglesia rechazó en Éfeso (431).' },
            { t: 'La naturaleza divina, que murió y dejó de existir por tres días.', ok: false, por_que: 'Dios es inmortal (1 Ti 6:16). El Hijo murió en su humanidad: su cuerpo y su alma se separaron.' }
          ],
          explicacion: 'Lo que hace una naturaleza lo hace la persona: por eso podemos decir que el Señor de la gloria fue crucificado (1 Co 2:8).'
        } }
      ],
      pensar: 'El mismo que tuvo hambre multiplicó el pan. ¿Cómo te ayuda saber que tu Salvador es a la vez plenamente poderoso y plenamente comprensivo?'
    },
    {
      id: 'controversias', n: 'Las controversias: de los docetas a Calcedonia', ref: '1 Juan 4:2-3; 2 Juan 7; Colosenses 2:8-9; Juan 1:14',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Siglos I y II: los docetas niegan que Jesús tuviera un cuerpo real; los ebionitas, que fuera Dios.', fecha: [90, 200],
            estado: { view: ORIENTE, capas: IMP, lugares: ['efeso', 'antioquia', 'alejandria', 'jerusalen'] } },
          { t: '325, Nicea: el Hijo es «de la misma sustancia» que el Padre, contra Arrio.', fecha: 325,
            estado: { view: ORIENTE, capas: IMP, lugares: ['nicea', 'alejandria'] } },
          { t: '381, Constantinopla: Cristo tiene un alma y una mente humanas, contra Apolinar.', fecha: 381,
            estado: { view: ORIENTE, capas: IMP, lugares: ['constantinopla', 'h-laodicea-siria'] } },
          { t: '431, Éfeso: Cristo es una sola persona, contra la enseñanza atribuida a Nestorio.', fecha: 431,
            estado: { view: ORIENTE, capas: IMP, lugares: ['efeso', 'constantinopla', 'alejandria', 'antioquia'] } },
          { t: '451, Calcedonia: una persona en dos naturalezas, contra Eutiques.', fecha: 451,
            estado: { view: ORIENTE, capas: IMP, lugares: ['h-calcedonia', 'constantinopla', 'roma'] } }
        ] },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Errores sobre Cristo y respuesta de la iglesia',
          cab: ['Error', 'Qué enseñaba', 'Respuesta'],
          filas: [
            ['Docetismo (siglos I–II)', 'Jesús solo parecía hombre; su cuerpo era una apariencia', '1 Jn 4:2-3; Ignacio de Antioquía'],
            ['Ebionismo (siglo II)', 'Jesús era solo un hombre justo, adoptado por Dios en el bautismo', 'Jn 1:1; Ireneo de Lyon'],
            ['Arrianismo (siglo IV)', 'El Hijo es la primera y más alta criatura', 'Nicea (325)'],
            ['Apolinarismo (siglo IV)', 'El Verbo ocupaba el lugar de la mente humana de Jesús', 'Constantinopla (381)'],
            ['Nestorianismo (siglo V)', 'Dos personas unidas: el Hijo de Dios y el hombre Jesús', 'Éfeso (431)'],
            ['Eutiquianismo (siglo V)', 'Después de la unión, una sola naturaleza mezclada', 'Calcedonia (451)']
          ],
          nota: 'El nestorianismo y el eutiquianismo se conocen sobre todo por sus adversarios; se discute cuánto enseñaron Nestorio y Eutiques lo que se les atribuye.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/calcedonia.webp', alt: 'Cientos de obispos con túnicas claras y mantos oscuros reunidos en una gran basílica con columnas de mármol; en el centro, un obispo anciano lee de pie, ante un atril, una declaración escrita en un rollo, y junto a una mesa se sientan los comisionados del emperador', pie: 'En Calcedonia, frente a Constantinopla, unos quinientos obispos confesaron a Cristo en dos naturalezas y una persona.', origen: 'ia' }
      ],
      texto: [
        'Desde el principio hubo quienes enseñaban un Cristo distinto del de los apóstoles. Los errores sobre su persona siempre van hacia uno de dos lados: niegan su divinidad o niegan su humanidad. Y cuando ambas se aceptan, la dificultad está en cómo se unen. El mapa recorre los pasos principales y la tabla los resume.',
        { h: 'Los primeros siglos' },
        'Ya en el Nuevo Testamento aparece el docetismo, de una palabra griega que significa «parecer». Influidos por la idea griega de que la materia es mala, algunos enseñaban que el Hijo de Dios no pudo tener un cuerpo real: solo parecía hombre. Juan responde que el que no confiesa que Jesucristo ha venido en carne no es de Dios (1 Jn 4:2-3). Hacia el año 110, Ignacio de Antioquía, camino al martirio, escribió que si Cristo solo había sufrido en apariencia, él estaba encadenado en vano. En el extremo opuesto, los ebionitas, un grupo judeocristiano, enseñaban que Jesús era un hombre justo al que Dios adoptó como Hijo en su bautismo.',
        { h: 'Nicea y Constantinopla' },
        'En el siglo IV, Arrio enseñó que el Hijo era la primera criatura, y el Concilio de Nicea (325) confesó que es de la misma sustancia que el Padre. Esa historia se cuenta en Dios y la Trinidad. Poco después, Apolinar, obispo de Laodicea de Siria, defendió la divinidad de Cristo, pero enseñó que el Verbo ocupaba en Jesús el lugar de la mente humana. Gregorio Nacianceno le respondió con un principio que se hizo famoso: lo que no fue asumido no fue sanado. Si Cristo no tuvo una mente humana, no salvó nuestra mente. El Concilio de Constantinopla (381) rechazó esa enseñanza.',
        { h: 'Éfeso y Calcedonia' },
        'En el siglo V, la discusión se centró en la unión. A Nestorio, patriarca de Constantinopla, se le acusó de dividir a Cristo en dos personas, el Hijo de Dios y el hombre Jesús, unidos solo por la voluntad. El Concilio de Éfeso (431) afirmó que Cristo es una sola persona. Allí se aprobó llamar a María Theotókos, «la que dio a luz a Dios», un título pensado para afirmar que el niño que nació de ella era Dios mismo, no para exaltar a María. Poco después, el monje Eutiques fue al otro extremo: después de la unión, dijo, en Cristo hay una sola naturaleza, en la que la humanidad se disolvió como una gota en el mar.',
        'En el año 451, unos quinientos obispos se reunieron en Calcedonia, frente a Constantinopla, al otro lado del Bósforo. Su definición, estudiada en la estación anterior, confesó a Cristo en dos naturalezas, sin confusión ni cambio, sin división ni separación. Las iglesias evangélicas aceptan la definición de Calcedonia porque resume con fidelidad lo que enseña la Escritura.',
        { ir: { t: 'Ver «Arrio y el Concilio de Nicea» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#historia/2' } },
        { ejercicio: {
          pregunta: '¿Qué quiso decir Gregorio Nacianceno con «lo que no fue asumido no fue sanado»?',
          opciones: [
            { t: 'Que si Cristo no tomó una humanidad completa, con mente y alma, no pudo salvar al hombre completo.', ok: true, por_que: 'Era su respuesta a Apolinar, que negaba la mente humana de Cristo.' },
            { t: 'Que Cristo no sanó a todos los enfermos de su tiempo.', ok: false, por_que: 'La frase no habla de los milagros, sino de la encarnación.' },
            { t: 'Que la naturaleza divina de Cristo necesitaba ser sanada.', ok: false, por_que: 'Dios no necesita sanidad: el argumento es sobre la humanidad que el Hijo tomó para salvarla.' }
          ],
          explicacion: 'Cristo tomó todo lo humano, menos el pecado, para redimir todo lo humano.'
        } }
      ],
      pensar: 'Los errores sobre Cristo casi siempre empiezan por quitar algo: su divinidad o su humanidad. ¿Por qué crees que es tan fácil caer en uno de los dos extremos?'
    },
    {
      id: 'errores-hoy', n: 'Errores sobre Cristo hoy', ref: '2 Corintios 11:3-4; 1 Juan 2:22-23; 4:1-3; Gálatas 1:6-9; Juan 8:24',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que enseñan sobre Jesús',
          cab: ['Grupo', 'Qué enseña sobre Jesús', 'Qué responde la Escritura'],
          filas: [
            ['Testigos de Jehová', 'Es el arcángel Miguel, la primera criatura de Jehová, «un dios»; murió en un madero y resucitó como espíritu; volvió de manera invisible en 1914', 'El Creador de todo (Jn 1:3); los ángeles le adoran (He 1:6); resucitó con su cuerpo (Lc 24:39)'],
            ['Iglesia de Jesucristo de los Santos de los Últimos Días (mormones)', 'Es el primogénito espiritual del Padre Celestial, un ser exaltado con cuerpo; todos los espíritus, incluido Lucifer, son hijos espirituales de ese Padre', 'El Creador no es hermano de una criatura (Col 1:16); hay un solo Dios (Is 43:10)'],
            ['Pentecostales unicitarios', 'Jesús es el Padre, el Hijo y el Espíritu; el Hijo es solo la humanidad de Jesús', 'El Hijo estaba con el Padre antes del mundo (Jn 17:5)'],
            ['Islam', 'Isa es un gran profeta, nacido de una virgen y Mesías, pero no Hijo de Dios; no fue crucificado, sino que así les pareció', 'Murió y resucitó (1 Co 15:3-4); es el Hijo (Mt 3:17)'],
            ['Nueva Era', 'Cristo es una conciencia o energía universal; Jesús fue un maestro que la alcanzó, como otros', 'Jesús es el Cristo (1 Jn 2:22); el único camino (Jn 14:6)'],
            ['Escepticismo popular', 'Jesús fue solo un buen maestro moral, y lo demás es leyenda', 'Afirmó ser Dios (Jn 8:58); la iglesia lo adoró desde el principio (Fil 2:6-11)']
          ],
          nota: 'Se describe la doctrina oficial de cada grupo, no a todos sus miembros. Los unicitarios se estudian también en Dios y la Trinidad.'
        } },
        { tipo: 'tabla', titulo: 'Fuentes', tabla: {
          titulo: 'Jesús en fuentes no cristianas del siglo I y II',
          cab: ['Autor', 'Obra y fecha', 'Qué dice, en resumen'],
          filas: [
            ['Flavio Josefo, historiador judío', 'Antigüedades judías 20.200, hacia 93', 'Menciona a Jacobo, hermano de Jesús llamado Cristo, ejecutado en Jerusalén en 62'],
            ['Flavio Josefo', 'Antigüedades judías 18.63-64', 'Describe a Jesús como maestro crucificado bajo Pilato; el párrafo tiene añadidos cristianos posteriores, pero la mayoría de los historiadores acepta un núcleo original'],
            ['Tácito, historiador romano', 'Anales 15.44, hacia 116', 'Cristo fue ejecutado por el procurador Poncio Pilato en tiempos de Tiberio'],
            ['Plinio el Joven, gobernador', 'Cartas 10.96, hacia 112', 'Los cristianos se reunían un día fijo y cantaban himnos a Cristo como a un dios']
          ],
          nota: 'Ningún historiador serio niega hoy que Jesús existió y fue crucificado bajo Pilato. La pregunta es quién era.'
        } }
      ],
      texto: [
        'Pablo temía que los corintios fueran engañados por alguien que les predicara «otro Jesús» (2 Co 11:4). Hoy también hay quienes hablan de Jesús con respeto, pero enseñan un Jesús distinto del de la Biblia. Esta estación describe lo que enseñan algunos grupos, según sus doctrinas oficiales y con respeto por sus miembros, muchos de los cuales son personas sinceras.',
        { h: 'Grupos que nacieron en el cristianismo' },
        'Los Testigos de Jehová enseñan que Jesús es el arcángel Miguel, la primera criatura de Jehová, por medio de la cual fue creado todo lo demás, y traducen Juan 1:1 «la Palabra era un dios». Enseñan también que murió en un madero, que resucitó como espíritu y que regresó de manera invisible en 1914. La Iglesia de Jesucristo de los Santos de los Últimos Días, conocida como iglesia mormona, enseña que Jesús es el primogénito espiritual del Padre Celestial, un ser exaltado que tiene cuerpo. Como enseña que todos los espíritus, incluido Lucifer, son hijos espirituales de ese Padre, en su doctrina Jesús es, en ese sentido, hermano espiritual de Lucifer. Los pentecostales unicitarios aceptan la divinidad de Jesús, pero niegan que el Hijo sea una persona distinta del Padre.',
        { h: 'Otras religiones y corrientes' },
        'El islam honra a Jesús, Isa, como un gran profeta nacido de una virgen y lo llama Mesías, pero niega que sea Hijo de Dios. El Corán dice que no lo mataron ni lo crucificaron, sino que así les pareció. Sin cruz no hay expiación, y sin resurrección no hay evangelio (1 Co 15:14). La Nueva Era, por su parte, separa a Jesús del Cristo: Cristo sería una conciencia universal que Jesús alcanzó y que cualquiera podría alcanzar. Juan responde: «¿Quién es el mentiroso, sino el que niega que Jesús es el Cristo?» (1 Jn 2:22).',
        { h: '¿Solo un buen maestro?' },
        'Mucha gente dice que Jesús fue un gran maestro moral, pero no Dios. El problema es que un buen maestro no afirma que perdona pecados, que existía antes de Abraham y que juzgará al mundo. Si Jesús dijo esas cosas y no eran verdad, no sería un buen maestro, sino un engañador o alguien que vivía fuera de la realidad. La única otra posibilidad es que dijera la verdad. El escritor británico C. S. Lewis popularizó este argumento en su libro Mero cristianismo.',
        'La segunda tabla muestra que historiadores judíos y romanos de los siglos I y II, que no eran cristianos, confirman que Jesús existió, que fue crucificado bajo Poncio Pilato y que sus seguidores lo adoraban como a Dios desde muy temprano.',
        { h: 'Cómo responder' },
        'Ante estas enseñanzas, el creyente no necesita miedo ni agresividad, sino conocimiento y amor. Pedro manda estar siempre preparados para presentar defensa, «con mansedumbre y reverencia» (1 P 3:15). La mejor preparación es conocer bien al Cristo de la Escritura.',
        { ir: { t: 'Ver «Errores que vuelven» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#historia/4' } },
        { ejercicio: {
          pregunta: 'Alguien te dice: «Jesús fue un gran maestro, pero nunca dijo ser Dios». ¿Cuál es la mejor respuesta?',
          opciones: [
            { t: 'Mostrar lo que Jesús afirmó de sí mismo, como perdonar pecados y decir «antes que Abraham fuese, yo soy», y cómo reaccionaron sus oyentes.', ok: true, por_que: 'Sus contemporáneos entendieron que se hacía igual a Dios (Jn 5:18; 10:33) y por eso lo acusaron de blasfemia.' },
            { t: 'Decirle que eso no se puede discutir y que debe creer sin preguntar.', ok: false, por_que: 'Pedro manda presentar defensa con razones (1 P 3:15), con mansedumbre.' },
            { t: 'Aceptar que fue solo un maestro, para no ofender.', ok: false, por_que: 'Jesús no dejó abierta esa posibilidad: un maestro que afirma ser Dios sin serlo no es un buen maestro.' }
          ],
          explicacion: 'La pregunta no es si Jesús fue bueno, sino si dijo la verdad sobre sí mismo.'
        } }
      ],
      pensar: 'Pablo temía que los creyentes fueran apartados de «la sincera fidelidad a Cristo» (2 Co 11:3). ¿Qué haces para conocer al Cristo de la Biblia lo suficiente como para reconocer a uno falso?'
    }
  ];

  window.__CRISTO.persona = persona;
})();
