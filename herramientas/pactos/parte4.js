/* Pactos y dispensaciones · ruta IV. Las dispensaciones (ver encabezado en parte1.js) */
(() => {
  const ETAPA = (nombre, desde, hasta, resp, falla, juicio, gracia) => ({ tipo: 'tabla', titulo: 'Tabla', tabla: {
    titulo: `La dispensación ${nombre}`,
    cab: ['', ''],
    filas: [['Desde', desde], ['Hasta', hasta], ['Responsabilidad', resp], ['Fracaso', falla], ['Juicio', juicio], ['La gracia de Dios', gracia]],
    nota: 'En cada etapa, la salvación es por gracia mediante la fe; lo que cambia es la responsabilidad que Dios da.'
  } });

  const dispensaciones = [
    {
      id: 'que-es', n: 'Qué es una dispensación', ref: 'Lucas 16:1-2; 1 Corintios 9:17; Efesios 1:9-10; 3:2, 9; Colosenses 1:25',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La palabra oikonomía en el Nuevo Testamento',
          cab: ['Pasaje', 'Traducción en la RV 1960', 'Sentido'],
          filas: [
            ['Lc 16:2-4', 'mayordomía', 'La administración de los bienes de un señor'],
            ['1 Co 9:17', 'comisión', 'El encargo de predicar dado a Pablo'],
            ['Ef 1:10', 'dispensación', 'La administración final: reunir todo en Cristo'],
            ['Ef 3:2', 'administración', 'La gracia de Dios confiada a Pablo para los gentiles'],
            ['Ef 3:9', 'dispensación', 'El misterio escondido desde los siglos'],
            ['Col 1:25', 'administración', 'El ministerio de anunciar la palabra']
          ],
          nota: 'De oikos, «casa», y nómos, «ley» o «norma»: la manera de ordenar una casa. De ahí viene también la palabra «economía».'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/16/1-2', ref: 'Lucas 16:1-2' }
      ],
      texto: [
        'Las tres primeras rutas estudiaron los pactos. Esta estudia las dispensaciones, otra manera de ordenar la historia bíblica que se relaciona con los pactos pero no es lo mismo. Los pactos son compromisos de Dios; las dispensaciones son las etapas en que Dios administra su plan.',
        { h: 'Una palabra del Nuevo Testamento' },
        'La palabra viene del griego oikonomía, formada por oikos, casa, y nómos, norma. Significa la administración de una casa. Jesús la usa en la parábola del mayordomo infiel: el señor le dice «Da cuenta de tu mayordomía, porque ya no podrás más ser mayordomo» (Lc 16:2). Un mayordomo administraba los bienes de su señor con ciertas responsabilidades y debía rendir cuentas.',
        'Pablo usa la misma palabra para hablar del plan de Dios. Dios se propuso «reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos» (Ef 1:10). Y habla de «la administración de la gracia de Dios que me fue dada para con vosotros» (Ef 3:2), y de «la dispensación del misterio escondido desde los siglos en Dios» (Ef 3:9). La tabla reúne los pasajes: la RV 1960 traduce la misma palabra como mayordomía, comisión, dispensación o administración.',
        { h: 'Una definición' },
        'Una dispensación es una manera particular en que Dios administra su relación con la humanidad en una etapa de la historia. En cada una, Dios revela algo de su voluntad y da una responsabilidad; las personas fallan; viene un juicio; y Dios abre una nueva etapa con más revelación. No son caminos de salvación distintos, sino etapas de la revelación progresiva de un mismo plan.',
        'Pensar en dispensaciones ayuda a responder preguntas que todo lector de la Biblia se hace. ¿Por qué Israel ofrecía sacrificios de animales y nosotros no? ¿Por qué Abraham no guardaba el sábado y Moisés sí? ¿Por qué Jesús envió a los doce solo a Israel (Mt 10:5-6) y después a todas las naciones (Mt 28:19)? Dios no cambió, pero su manera de administrar su casa sí.',
        { ir: { t: 'Ver «Sentido literal y revelación progresiva» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/7' } },
        { ejercicio: {
          pregunta: '¿Qué significa la palabra griega oikonomía, traducida «dispensación»?',
          opciones: [
            { t: 'Un período de mil años.', ok: false, por_que: 'La palabra no indica una duración, sino una forma de administrar.' },
            { t: 'La administración o el orden de una casa.', ok: true, por_que: 'Viene de oikos, casa, y nómos, norma; Jesús la usa para la tarea de un mayordomo.' },
            { t: 'Un camino distinto de salvación.', ok: false, por_que: 'Las dispensaciones no son caminos de salvación, sino etapas de un mismo plan.' }
          ],
          explicacion: 'Una dispensación es la manera en que Dios administra su casa en una etapa de la historia.'
        } }
      ],
      pensar: 'Pablo veía su ministerio como una administración que Dios le había confiado (Ef 3:2). ¿Qué te ha confiado Dios a ti para administrar en esta etapa de tu vida?'
    },
    {
      id: 'una-salvacion', n: 'Una sola salvación, varias administraciones', ref: 'Génesis 15:6; Romanos 3:21-26; 4:1-8; Hebreos 11:4-7, 13; Hechos 10:43',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ro/4/1-8', ref: 'Romanos 4:1-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que cambia y lo que no cambia',
          cab: ['No cambia en ninguna etapa', 'Cambia de una etapa a otra'],
          filas: [
            ['La salvación es por gracia (Ef 2:8)', 'Cuánto ha revelado Dios de su plan'],
            ['Se recibe por la fe (He 11:6)', 'Qué responsabilidad concreta da Dios'],
            ['Se basa en la muerte de Cristo (Ro 3:25; He 9:15)', 'Las señales y las formas de culto'],
            ['Dios es el mismo (Mal 3:6)', 'Con quién trata especialmente: la humanidad, Israel, la iglesia']
          ]
        } }
      ],
      texto: [
        'Antes de recorrer las dispensaciones hay que despejar un error común. Algunos piensan que en el Antiguo Testamento las personas se salvaban guardando la ley, y en el Nuevo, por la fe. Si fuera así, habría dos o más caminos de salvación. La Biblia enseña otra cosa.',
        { h: 'Abraham y David' },
        'Pablo toma dos ejemplos del Antiguo Testamento para demostrar que la salvación siempre fue por fe. El primero es Abraham: «¿qué dice la Escritura? Creyó Abraham a Dios, y le fue contado por justicia» (Ro 4:3). El segundo es David, que vivió bajo la ley y aun así habló de la bienaventuranza del hombre «a quien Dios atribuye justicia sin obras» (Ro 4:6). Uno vivió antes de la ley y otro bajo la ley: los dos fueron justificados por la fe.',
        'Hebreos 11 recorre la historia desde Abel hasta los profetas, y repite una y otra vez «por la fe». Abel, Enoc, Noé, Abraham, Moisés y Rahab agradaron a Dios por la fe, porque «sin fe es imposible agradar a Dios» (He 11:6). Ninguno se salvó por cumplir perfectamente un sistema.',
        { h: 'La cruz alcanza hacia atrás' },
        '¿En qué se basaba el perdón antes de Cristo? Los sacrificios del Antiguo Testamento no podían quitar los pecados por sí mismos (He 10:4). Dios perdonaba a los creyentes de antes en vista del sacrificio de Cristo, que todavía no había ocurrido. Pablo dice que Dios, en su paciencia, había pasado por alto los pecados pasados, y que en la cruz mostró su justicia (Ro 3:25-26). Hebreos dice que la muerte de Cristo fue «para la remisión de las transgresiones que había bajo el primer pacto» (He 9:15).',
        'Lo que sí cambió fue el contenido de la fe. Abel creyó lo que Dios le había revelado hasta entonces; Abraham creyó la promesa de una descendencia; un israelita creía en el Dios del pacto y ofrecía los sacrificios que Él mandaba; nosotros creemos en Cristo crucificado y resucitado. La fe siempre responde a la revelación disponible, y la revelación fue creciendo.',
        'Algunos maestros dispensacionalistas de comienzos del siglo XX escribieron frases que parecían enseñar otro camino de salvación bajo la ley. Sus sucesores las corrigieron, y hoy la enseñanza dispensacional afirma con claridad que en toda dispensación la salvación es por gracia, mediante la fe, sobre la base de la obra de Cristo.',
        { ejercicio: {
          pregunta: '¿Cómo se salvaba una persona en el Antiguo Testamento?',
          opciones: [
            { t: 'Cumpliendo la ley de Moisés sin fallar.', ok: false, por_que: 'Nadie cumplía la ley sin fallar; por eso existían los sacrificios. Pablo dice que por las obras de la ley nadie será justificado (Ro 3:20).' },
            { t: 'Por gracia, mediante la fe en lo que Dios había revelado, sobre la base de la obra futura de Cristo.', ok: true, por_que: 'Abraham y David fueron justificados por la fe (Ro 4), y la muerte de Cristo alcanzó los pecados cometidos bajo el primer pacto (He 9:15).' },
            { t: 'Ofreciendo suficientes sacrificios para pagar sus pecados.', ok: false, por_que: 'Hebreos 10:4 dice que la sangre de los toros y de los machos cabríos no puede quitar los pecados.' }
          ],
          explicacion: 'En todas las dispensaciones, la salvación es por gracia, mediante la fe, gracias a Cristo.'
        } }
      ],
      pensar: 'Abraham, David y tú se salvan de la misma manera. ¿Qué te dice esto sobre la unidad del pueblo de Dios a lo largo de la historia?'
    },
    {
      id: 'inocencia-conciencia', n: 'Inocencia y conciencia', ref: 'Génesis 1:26–3:24; 4:1-26; 6:5-8; Romanos 2:14-16',
      visual: [
        ETAPA('de la inocencia', 'La creación del hombre (Gn 1:26)', 'La caída (Gn 3)', 'No comer del árbol de la ciencia del bien y del mal (Gn 2:16-17)', 'Adán y Eva desobedecieron (Gn 3:6)', 'Expulsión del huerto y muerte (Gn 3:16-24)', 'La promesa de la simiente y las túnicas de pieles (Gn 3:15, 21)'),
        ETAPA('de la conciencia', 'La caída (Gn 3)', 'El diluvio (Gn 7)', 'Obedecer la conciencia y ofrecer el sacrificio aceptable (Gn 4:4-7)', 'La maldad del hombre llegó a ser «de continuo solamente el mal» (Gn 6:5)', 'El diluvio (Gn 7)', 'Noé halló gracia ante los ojos de Jehová (Gn 6:8)')
      ],
      texto: [
        'La enseñanza dispensacional clásica distingue siete etapas, que se recorren en esta y las próximas estaciones. Las tablas de cada estación muestran el mismo patrón: una responsabilidad, un fracaso, un juicio y una nueva expresión de la gracia de Dios.',
        { h: 'La inocencia' },
        'La primera etapa va desde la creación hasta la caída. Adán y Eva fueron creados sin pecado, en comunión directa con Dios, en un ambiente perfecto. Su responsabilidad era sencilla: cuidar el huerto y no comer de un solo árbol. Tenían todo a su favor, y aun así desobedecieron. La lección de esta etapa es que ni un ambiente perfecto garantiza la obediencia de una criatura libre que desconfía de Dios.',
        'El juicio fue la expulsión del huerto y la entrada de la muerte. Pero antes del juicio vino la promesa de la simiente que vencería a la serpiente (Gn 3:15), y Dios vistió a Adán y Eva con túnicas de pieles. La primera dispensación termina con la gracia.',
        { h: 'La conciencia' },
        'Desde la caída hasta el diluvio, el ser humano vivió sin una ley escrita, guiado por su conciencia, que ahora conocía el bien y el mal. Pablo dice que aun los gentiles sin ley muestran «la obra de la ley escrita en sus corazones, dando testimonio su conciencia» (Ro 2:15). Dios también había revelado la manera de acercarse a Él con sacrificios: Abel ofreció un sacrificio aceptable y Caín no (Gn 4:4-5). Dios advirtió a Caín que el pecado estaba a la puerta (Gn 4:7).',
        'El resultado fue el primer homicidio, la arrogancia de Lamec y una violencia cada vez mayor. Al final, «vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal» (Gn 6:5). La conciencia sola no detuvo el pecado. Vino el diluvio. Pero en medio de esa generación hubo quienes caminaron con Dios: Enoc, y Noé, que «halló gracia ante los ojos de Jehová» (Gn 6:8).',
        'Estas etapas no se borran del todo cuando llega la siguiente. La conciencia sigue actuando hoy en cada persona, y el ser humano sigue fallando como Adán. Cada dispensación agrega una nueva prueba, no elimina lo que Dios ya había revelado.',
        { ejercicio: {
          pregunta: '¿Qué enseña la etapa de la inocencia sobre el ser humano?',
          opciones: [
            { t: 'Que el pecado se debe solo a un ambiente malo.', ok: false, por_que: 'Adán y Eva estaban en un ambiente perfecto y aun así pecaron.' },
            { t: 'Que ni siquiera un ambiente perfecto garantiza la obediencia.', ok: true, por_que: 'El problema no estaba en el huerto, sino en la desconfianza hacia la palabra de Dios.' },
            { t: 'Que Dios no les dio suficiente información.', ok: false, por_que: 'El mandamiento era claro y la consecuencia también (Gn 2:17).' }
          ],
          explicacion: 'Cada etapa muestra que el ser humano necesita la gracia de Dios, no solo mejores condiciones.'
        } }
      ],
      pensar: 'Dios advirtió a Caín que el pecado estaba a la puerta y que debía dominarlo (Gn 4:7). ¿Qué puerta necesitas cerrar hoy?'
    },
    {
      id: 'gobierno-promesa', n: 'Gobierno humano y promesa', ref: 'Génesis 9:1-7; 11:1-9; 12:1-3; Éxodo 1:8-14; 19:8',
      visual: [
        ETAPA('del gobierno humano', 'El diluvio (Gn 8)', 'Babel (Gn 11)', 'Llenar la tierra y castigar el homicidio (Gn 9:1, 6)', 'Se unieron para no ser esparcidos y hacerse un nombre (Gn 11:4)', 'La confusión de las lenguas (Gn 11:7-9)', 'El llamado de Abraham (Gn 12:1-3)'),
        ETAPA('de la promesa', 'El llamado de Abraham (Gn 12)', 'El Sinaí (Éx 19)', 'Creer la promesa y permanecer en la tierra', 'Descendieron a Egipto y terminaron esclavos; en el Sinaí cambiaron la promesa por la ley (Éx 19:8)', 'La esclavitud en Egipto (Éx 1)', 'El éxodo y el pacto con Israel (Éx 12–14; 19)')
      ],
      texto: [
        'Después del diluvio, Dios dio a la humanidad una nueva responsabilidad, y luego, al fracasar esta, comenzó a trabajar por medio de un solo hombre y su familia.',
        { h: 'El gobierno humano' },
        'En el pacto con Noé, Dios mandó llenar la tierra y estableció la pena por el homicidio: «El que derramare sangre de hombre, por el hombre su sangre será derramada» (Gn 9:6). Por primera vez Dios delegaba en la sociedad la autoridad de juzgar. Pablo enseña que esa autoridad sigue vigente: las autoridades civiles son servidoras de Dios para castigar el mal (Ro 13:1-4).',
        'La humanidad volvió a fallar. En lugar de esparcirse por la tierra, se reunió en la llanura de Sinar y dijo: «edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra» (Gn 11:4). Era un gobierno humano unido contra el mandato de Dios, buscando su propia gloria. Dios confundió su lengua y los esparció.',
        { h: 'La promesa' },
        'Entonces Dios cambió de estrategia. En lugar de tratar con todas las naciones a la vez, llamó a Abraham y le dio las promesas que la ruta II estudió: tierra, descendencia y bendición. Por eso esta etapa se llama dispensación de la promesa. Abraham, Isaac, Jacob y sus hijos vivieron como extranjeros en Canaán, confiando en lo que Dios había dicho. La responsabilidad era creer y permanecer en la tierra.',
        'Los patriarcas tuvieron una fe real, pero también fallaron. Abraham bajó a Egipto en tiempo de hambre y mintió sobre Sara; Jacob engañó a su padre; los hijos de Jacob vendieron a José. Finalmente toda la familia descendió a Egipto, y con los años sus descendientes terminaron esclavos. En el Sinaí, cuando Dios les propuso un pacto condicional, el pueblo respondió con confianza en sí mismo: «Todo lo que Jehová ha dicho, haremos» (Éx 19:8). Muchos maestros ven ahí el paso de la promesa a la ley.',
        'Pero la promesa no terminó. Las etapas cambian; las promesas de Dios permanecen. Pablo insiste en que la ley, que vino después, no anuló la promesa (Gá 3:17). La dispensación de la promesa terminó como forma de administración, pero el pacto con Abraham sigue en pie hasta hoy.',
        { ejercicio: {
          pregunta: '¿Por qué la etapa que comienza con Abraham se llama «de la promesa»?',
          opciones: [
            { t: 'Porque Abraham prometió obedecer la ley.', ok: false, por_que: 'La ley vino siglos después. Las promesas las hizo Dios, no Abraham.' },
            { t: 'Porque Dios trató con Abraham y su familia sobre la base de lo que les prometió.', ok: true, por_que: 'La responsabilidad era creer la promesa de tierra, descendencia y bendición.' },
            { t: 'Porque en esa etapa terminaron todas las promesas de Dios.', ok: false, por_que: 'El pacto con Abraham sigue vigente; lo que terminó fue esa forma de administración.' }
          ],
          explicacion: 'Las dispensaciones cambian; las promesas de Dios permanecen.'
        } }
      ],
      pensar: 'Los constructores de Babel querían hacerse un nombre; a Abraham, Dios le prometió engrandecer su nombre (Gn 12:2). ¿Buscas hacerte un nombre o confías en lo que Dios hará contigo?'
    },
    {
      id: 'ley', n: 'La ley', ref: 'Éxodo 19:3-8; 2 Reyes 17:7-23; Romanos 3:19-20; Gálatas 3:19-24; Juan 1:17',
      visual: [
        ETAPA('de la ley', 'El Sinaí (Éx 19)', 'La muerte de Cristo; para la iglesia, Pentecostés (Hch 2)', 'Guardar el pacto del Sinaí con todos sus mandamientos (Éx 19:5)', 'Idolatría y desobediencia; rechazo del Mesías (2 R 17:15; Jn 1:11)', 'El exilio en Asiria y Babilonia; la destrucción de Jerusalén en el año 70', 'Los profetas, el sistema de sacrificios y, al final, el Mesías'),
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ga/3/19-24', ref: 'Gálatas 3:19-24' }
      ],
      texto: [
        'La dispensación de la ley es la más larga y la mejor documentada de la Biblia. Va desde el Sinaí hasta la muerte de Cristo, unos quince siglos, y ocupa la mayor parte del Antiguo Testamento. Durante ese tiempo Dios trató especialmente con la nación de Israel por medio del pacto del Sinaí.',
        { h: 'Para qué sirvió la ley' },
        'La ley tenía varios propósitos. Apartaba a Israel como nación santa entre las naciones. Revelaba la santidad de Dios y lo que Él espera. Ofrecía, por medio del tabernáculo, el sacerdocio y los sacrificios, un camino para que un pueblo pecador se acercara a un Dios santo. Y, sobre todo, mostraba el pecado: «por medio de la ley es el conocimiento del pecado» (Ro 3:20). La ley era un espejo que mostraba la mancha, no un jabón que la quitaba.',
        'Pablo resume su función con la imagen del ayo: «la ley ha sido nuestro ayo, para llevarnos a Cristo, a fin de que fuésemos justificados por la fe» (Gá 3:24). Cada sacrificio, cada fiesta y cada detalle del tabernáculo preparaba para el Mesías que había de venir.',
        { h: 'El fracaso y la gracia' },
        'La historia de Israel bajo la ley es, en gran parte, una historia de infidelidad. Poco después del Sinaí, el pueblo hizo un becerro de oro. Durante los jueces y los reyes, se fue tras dioses ajenos una y otra vez. El libro de Reyes explica la caída de Samaria así: «desecharon sus estatutos, y el pacto que él había hecho con sus padres» (2 R 17:15). Vinieron el exilio en Asiria y en Babilonia. Y cuando llegó el Mesías, «A lo suyo vino, y los suyos no le recibieron» (Jn 1:11).',
        'Pero en toda esa historia Dios mostró su gracia: envió jueces y profetas, perdonó una y otra vez, preservó un remanente fiel y cumplió su promesa enviando a su Hijo «nacido bajo la ley» (Gá 4:4). Juan resume el paso a la etapa siguiente: «Pues la ley por medio de Moisés fue dada, pero la gracia y la verdad vinieron por medio de Jesucristo» (Jn 1:17).',
        { h: '¿Cuándo terminó?' },
        'La dispensación de la ley terminó como forma de administración con la muerte de Cristo, que rasgó el velo del templo (Mt 27:51). La iglesia nace en Pentecostés, cincuenta días después. El templo siguió en pie unos cuarenta años más, y muchos creyentes judíos siguieron asistiendo a él, hasta que Roma lo destruyó en el año 70.',
        { ejercicio: {
          pregunta: '¿Cuál de estos fue un propósito de la ley, según Pablo?',
          opciones: [
            { t: 'Dar a Israel un camino para salvarse por sus propias obras.', ok: false, por_que: 'Pablo dice que por las obras de la ley nadie será justificado (Ro 3:20).' },
            { t: 'Mostrar el pecado y llevar a Cristo, como un ayo.', ok: true, por_que: 'Romanos 3:20 y Gálatas 3:24 describen esos dos propósitos.' },
            { t: 'Reemplazar para siempre la promesa hecha a Abraham.', ok: false, por_que: 'Gálatas 3:17 dice que la ley no invalidó la promesa.' }
          ],
          explicacion: 'La ley mostraba el pecado y preparaba el camino para Cristo.'
        } }
      ],
      pensar: 'La ley muestra el pecado como un espejo, pero no lo limpia. ¿Has tratado alguna vez de limpiarte con el espejo, en lugar de ir a Cristo?'
    },
    {
      id: 'gracia', n: 'La gracia: la iglesia', ref: 'Hechos 2:1-4; Efesios 3:1-11; Romanos 11:25; Tito 2:11-14; 1 Tesalonicenses 4:13-18',
      visual: [
        ETAPA('de la gracia', 'Pentecostés (Hch 2)', 'El arrebatamiento de la iglesia (1 Ts 4:16-17)', 'Creer en Cristo y vivir en santidad por el Espíritu, llevando el evangelio a todas las naciones (Jn 3:36; Mt 28:19-20)', 'Muchos rechazan el evangelio; apostasía en los postreros días (2 Ti 3:1-5; 4:3-4)', 'La tribulación sobre el mundo incrédulo (2 Ts 2:3-12)', 'El evangelio predicado en todo el mundo; la iglesia arrebatada antes de la ira (1 Ts 1:10)'),
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ef/3/1-11', ref: 'Efesios 3:1-11' }
      ],
      texto: [
        'La dispensación en que vivimos comenzó en Pentecostés, cuando el Espíritu Santo fue derramado sobre los discípulos y nació la iglesia. Se la llama dispensación de la gracia o de la iglesia. No porque antes no hubiera gracia, sino porque ahora la gracia de Dios se manifiesta de una manera nueva y plena en Cristo, y porque Dios está formando un pueblo nuevo, el cuerpo de Cristo.',
        { h: 'Lo nuevo de esta etapa' },
        'Pablo llama a la iglesia un misterio, algo «que en otras generaciones no se dio a conocer a los hijos de los hombres» (Ef 3:5): que judíos y gentiles formen un solo cuerpo en Cristo, en igualdad. Además, el Espíritu Santo mora en cada creyente, como prometía el nuevo pacto. El evangelio ya no se anuncia solo a Israel, sino a todas las naciones. Y no hay templo de piedra, sacrificios de animales ni sacerdocio especial: la iglesia es el templo, Cristo es el sacrificio y todos los creyentes son sacerdotes.',
        { h: 'Responsabilidad y peligro' },
        'La responsabilidad en esta etapa es creer en Cristo y vivir para Él. La gracia no es permiso para pecar: «la gracia de Dios se ha manifestado para salvación a todos los hombres, enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente» (Tit 2:11-12). La iglesia tiene además una misión: hacer discípulos de todas las naciones, con el poder del Espíritu, hasta lo último de la tierra (Hch 1:8).',
        'El Nuevo Testamento anuncia que esta etapa también terminará con un fracaso general de la humanidad. En los postreros días vendrán tiempos peligrosos, muchos no sufrirán la sana doctrina (2 Ti 4:3) y habrá apostasía (2 Ts 2:3). Pero el fracaso del mundo no es el fracaso de la iglesia verdadera: Cristo prometió edificarla, y las puertas del Hades no prevalecerán contra ella (Mt 16:18).',
        { h: 'Un final distinto' },
        'Según la lectura que sigue este estudio, la dispensación de la iglesia termina de un modo único: con el arrebatamiento. «Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire» (1 Ts 4:17). La iglesia no pasará por la ira de Dios (1 Ts 1:10; 5:9). Después vendrá la tribulación, que en las setenta semanas de Daniel corresponde a la semana que falta, y en la que Dios vuelve a tratar especialmente con Israel. Todo esto se estudia en Los últimos tiempos.',
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } },
        { ejercicio: {
          pregunta: '¿Por qué se llama a la etapa actual «dispensación de la gracia», si siempre hubo gracia?',
          opciones: [
            { t: 'Porque antes de Cristo Dios no mostraba gracia a nadie.', ok: false, por_que: 'Dios mostró gracia a Adán, a Noé, a Abraham y a Israel.' },
            { t: 'Porque la gracia se manifiesta ahora plenamente en Cristo y Dios forma un pueblo nuevo, la iglesia.', ok: true, por_que: 'Juan 1:17 contrasta la ley dada por Moisés con la gracia y la verdad venidas por Jesucristo.' },
            { t: 'Porque ahora la obediencia ya no importa.', ok: false, por_que: 'Tito 2:11-12 dice que la gracia enseña a vivir sobria, justa y piadosamente.' }
          ],
          explicacion: 'La gracia no es nueva, pero en Cristo se manifiesta de manera plena.'
        } }
      ],
      pensar: 'La gracia de Dios nos enseña a renunciar a la impiedad (Tit 2:12). ¿Qué te está enseñando la gracia de Dios en esta temporada?'
    },
    {
      id: 'reino', n: 'El reino', ref: 'Apocalipsis 20:1-15; Isaías 2:2-4; 11:1-10; Zacarías 14:9, 16; Mateo 25:31-34; 1 Corintios 15:24-28',
      visual: [
        ETAPA('del reino', 'La segunda venida de Cristo (Ap 19:11-16)', 'El juicio final (Ap 20:11-15)', 'Obedecer al Rey, que reina en justicia (Is 11:3-5)', 'Al soltar a Satanás, las naciones se rebelan (Ap 20:7-9)', 'Fuego del cielo y el gran trono blanco (Ap 20:9-15)', 'Cielos nuevos y tierra nueva, donde mora la justicia (Ap 21:1-4)'),
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@is/11/1-10', ref: 'Isaías 11:1-10' }
      ],
      texto: [
        'La última dispensación es el reino de Cristo sobre la tierra, que Apocalipsis 20 describe como un período de mil años. En ella se cumplen de manera visible las promesas de los pactos: el Hijo de David reina desde Jerusalén, Israel está restaurado en su tierra con un corazón nuevo y las naciones son bendecidas.',
        { h: 'Lo que anunciaron los profetas' },
        'Los profetas describieron ese reino con imágenes de paz y justicia. Las naciones subirán a Jerusalén para aprender los caminos de Dios, y «volverán sus espadas en rejas de arado» (Is 2:4). El Mesías, retoño del tronco de Isaí, juzgará con justicia a los pobres, y aun la naturaleza será transformada: «Morará el lobo con el cordero» (Is 11:6). «Y Jehová será rey sobre toda la tierra» (Zac 14:9). Satanás estará atado y no engañará a las naciones (Ap 20:2-3).',
        { h: 'La última prueba' },
        'Lo sorprendente es que, aun en ese reino perfecto, con Cristo presente y Satanás atado, habrá rebelión. Al final de los mil años Satanás será suelto por un poco de tiempo y engañará a las naciones, que rodearán el campamento de los santos y la ciudad amada; pero descenderá fuego del cielo y los consumirá (Ap 20:7-9). La última dispensación demuestra lo que todas las anteriores fueron mostrando: el problema del ser humano no es su ambiente, sino su corazón, y solo la gracia de Dios puede cambiarlo.',
        'Después viene el juicio ante el gran trono blanco y la creación de cielos nuevos y tierra nueva (Ap 20:11–21:4). Pablo describe ese momento final: Cristo entregará el reino al Padre, «para que Dios sea todo en todos» (1 Co 15:28). Es la «dispensación del cumplimiento de los tiempos», en que Dios reúne todas las cosas en Cristo (Ef 1:10).',
        { h: 'Un reino ya presente' },
        'Esto no significa que hoy Cristo no reine. Él reina a la diestra del Padre, y quienes creen en Él ya han sido trasladados «al reino de su amado Hijo» (Col 1:13). El reino de los mil años es la manifestación visible y terrenal de ese reino. El orden de los eventos del fin, las posturas sobre el milenio y sus pasajes se estudian con detalle en Los últimos tiempos.',
        { ir: { t: 'Ver «El milenio» en Los últimos tiempos', a: '../../escatologia/#eventos/20' } },
        { ejercicio: {
          pregunta: '¿Qué muestra la rebelión del final del milenio (Apocalipsis 20:7-9)?',
          opciones: [
            { t: 'Que el reino de Cristo fracasó.', ok: false, por_que: 'La rebelión es aplastada de inmediato; el reino de Cristo no fracasa.' },
            { t: 'Que el problema del ser humano está en su corazón, no en su ambiente.', ok: true, por_que: 'Aun con Cristo presente y Satanás atado mil años, hay quienes se rebelan cuando son tentados.' },
            { t: 'Que Satanás es más fuerte que Cristo.', ok: false, por_que: 'Fuego del cielo consume a los rebeldes y Satanás es lanzado al lago de fuego (Ap 20:9-10).' }
          ],
          explicacion: 'Todas las dispensaciones muestran la necesidad de la gracia; la última lo confirma.'
        } }
      ],
      pensar: 'En el reino, Jehová será rey sobre toda la tierra (Zac 14:9). ¿Cómo cambia tu manera de vivir hoy saber hacia dónde va la historia?'
    },
    {
      id: 'juntos', n: 'Pactos y dispensaciones juntos', ref: 'Efesios 1:9-10; Hebreos 1:1-2; Gálatas 4:4-5',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pactos-dispensaciones.svg', alt: 'Línea del tiempo de toda la historia bíblica dividida en siete dispensaciones, de la inocencia al reino, con los pactos marcados en el momento en que se hicieron: Noé, Abraham, el Sinaí, David y el nuevo pacto, y la cruz y Pentecostés en el centro', pie: 'Las siete dispensaciones y los pactos de Dios en una sola línea.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Las siete', src: 'img/esquema-dispensaciones.svg', alt: 'Siete escalones, uno por dispensación, con su responsabilidad, su fracaso y su juicio, y una flecha de la gracia de Dios que atraviesa todos', pie: 'En cada etapa: responsabilidad, fracaso, juicio y gracia.', origen: 'esquema' }
      ],
      texto: [
        'Esta estación pone juntos los dos temas del recurso. Los pactos y las dispensaciones se confunden a menudo, pero responden a preguntas distintas.',
        { h: 'Dos preguntas distintas' },
        'Los pactos responden a la pregunta: ¿qué ha prometido Dios y a quién? Son compromisos que Dios asume y que, en su mayoría, siguen vigentes aunque cambie la época. El pacto con Noé rige hoy; el pacto con Abraham sigue en pie; el pacto con David espera su cumplimiento visible; el nuevo pacto está en vigor desde la cruz.',
        'Las dispensaciones responden a otra pregunta: ¿cómo administra Dios su relación con la humanidad en cada etapa? Son períodos sucesivos, cada uno con su forma de culto y su responsabilidad. Cuando termina una dispensación, termina esa forma de administración, pero no las promesas de Dios.',
        { h: 'Cómo se relacionan' },
        'El esquema muestra que varias dispensaciones comienzan con un pacto. La del gobierno humano comienza con el pacto con Noé; la de la promesa, con el pacto con Abraham; la de la ley, con el pacto del Sinaí; la de la gracia, con la inauguración del nuevo pacto en la cruz y el don del Espíritu en Pentecostés; y la del reino traerá el cumplimiento visible de los pactos con Abraham, con David y del nuevo pacto para Israel.',
        'Hay pactos que atraviesan varias dispensaciones. El pacto con Abraham estaba vigente durante la ley, sigue vigente durante la gracia y se cumplirá en el reino. Por eso Pablo podía decir que la ley no anuló la promesa (Gá 3:17). Y hay un pacto que coincide con una sola dispensación: el del Sinaí, que comenzó y terminó con la dispensación de la ley.',
        { h: 'Un solo plan' },
        'Lo más importante del esquema es lo que lo une todo. «Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo» (He 1:1-2). Las muchas veces y maneras son las etapas; el Hijo es el centro. Todo el plan de Dios avanza hacia el momento en que reúna «todas las cosas en Cristo» (Ef 1:10).',
        { ejercicio: {
          pregunta: '¿Cuál es la diferencia principal entre un pacto y una dispensación?',
          opciones: [
            { t: 'No hay diferencia: son dos nombres para lo mismo.', ok: false, por_que: 'Un pacto es un compromiso de Dios; una dispensación es una etapa de su administración.' },
            { t: 'El pacto es una promesa de Dios que puede seguir vigente en varias etapas; la dispensación es una etapa en la forma en que Dios administra su plan.', ok: true, por_que: 'Por eso el pacto con Abraham atraviesa la ley, la gracia y el reino.' },
            { t: 'Los pactos son del Antiguo Testamento y las dispensaciones del Nuevo.', ok: false, por_que: 'Hay un nuevo pacto, y las dispensaciones abarcan toda la Biblia.' }
          ],
          explicacion: 'Los pactos dicen qué ha prometido Dios; las dispensaciones, cómo administra su plan en cada etapa.'
        } }
      ],
      pensar: 'Dios ha hablado de muchas maneras, pero su palabra final es el Hijo (He 1:1-2). ¿Ocupa Cristo el centro de tu manera de leer toda la Biblia?'
    },
    {
      id: 'historia', n: 'De dónde viene esta manera de leer', ref: '2 Timoteo 2:15; Efesios 1:10; Hechos 17:11',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Momentos en la historia de los pactos y las dispensaciones',
          cab: ['Fecha', 'Quién', 'Qué aportó'],
          filas: [
            ['Hacia 180', 'Ireneo de Lyon', 'Habla de varios pactos dados por Dios en la historia (Adán, Noé, Moisés y el evangelio)'],
            ['1646', 'Confesión de Westminster', 'Hace del pacto de obras y el pacto de gracia parte de la confesión de las iglesias presbiterianas'],
            ['1648', 'Johannes Cocceius', 'Organiza toda la teología en torno a los pactos de Dios'],
            ['Siglos XVII y XVIII', 'Pierre Poiret, Isaac Watts', 'Proponen divisiones de la historia en etapas o dispensaciones'],
            ['Hacia 1830', 'John Nelson Darby', 'Desarrolla el dispensacionalismo: distinción entre Israel y la iglesia, arrebatamiento antes de la tribulación'],
            ['1909', 'C. I. Scofield', 'La Biblia anotada de Scofield difunde las siete dispensaciones en todo el mundo'],
            ['1947–1948', 'Lewis Sperry Chafer', 'Teología sistemática dispensacional; el seminario de Dallas'],
            ['1965', 'Charles Ryrie', 'Resume el dispensacionalismo en tres rasgos esenciales'],
            ['1993', 'Craig Blaising y Darrell Bock', 'Formulan el dispensacionalismo progresivo']
          ],
          nota: 'Las fechas de obras antiguas son aproximadas.'
        } }
      ],
      texto: [
        'Es honesto reconocer que la palabra dispensacionalismo y el esquema de las siete dispensaciones son del siglo XIX. Eso no los hace verdaderos ni falsos: hay que examinarlos con la Escritura, como los de Berea examinaban lo que oían (Hch 17:11). Esta estación cuenta brevemente de dónde vienen.',
        { h: 'La iglesia antigua' },
        'La idea de que Dios trató con la humanidad en etapas distintas es antigua. Ireneo de Lyon, hacia el año 180, escribió que Dios dio varios pactos a lo largo de la historia: uno con Adán, otro con Noé, otro por medio de Moisés y el último por el evangelio. Muchos autores antiguos distinguían entre la época antes de la ley, bajo la ley y bajo la gracia. Lo que no hubo en los primeros siglos fue un sistema completo.',
        { h: 'La teología del pacto' },
        'Después de la Reforma, teólogos reformados como Johannes Cocceius ordenaron toda la teología en torno a dos grandes pactos: un pacto de obras con Adán y un pacto de gracia que abarca a todos los creyentes de todas las épocas. La Confesión de Westminster lo hizo parte de la fe de las iglesias presbiterianas. En este sistema, Israel y la iglesia son un solo pueblo de Dios en dos etapas, y las promesas a Israel se cumplen en la iglesia.',
        { h: 'El dispensacionalismo' },
        'En el siglo XIX, John Nelson Darby, uno de los iniciadores de los Hermanos de Plymouth en Gran Bretaña, desarrolló un sistema distinto. Insistió en leer las profecías en su sentido normal, en distinguir a Israel de la iglesia y en que la iglesia sería arrebatada antes de la tribulación. Sus ideas se difundieron en Estados Unidos por medio de conferencias bíblicas y, sobre todo, de la Biblia anotada de C. I. Scofield (1909), que presentaba las siete dispensaciones en sus notas. Millones de creyentes aprendieron así a ordenar la historia bíblica.',
        'Esta manera de leer llegó a las iglesias evangélicas de América Latina con los misioneros del siglo XX, junto con la Biblia de Scofield en español. Los primeros pentecostales adoptaron su esquema profético, pero no todas sus conclusiones, como se verá en la estación sobre los dones del Espíritu.',
        { h: 'Lo esencial' },
        'En 1965, Charles Ryrie resumió el dispensacionalismo en tres rasgos: la distinción entre Israel y la iglesia, la interpretación normal o literal de toda la Escritura, y la gloria de Dios como propósito final de la historia, no solo la salvación del ser humano. El número exacto de dispensaciones no es lo esencial.',
        { ejercicio: {
          pregunta: 'Que el sistema dispensacional se haya formulado en el siglo XIX, ¿significa que es falso?',
          opciones: [
            { t: 'Sí: todo lo que no enseñaron los primeros cristianos con esas palabras es un error.', ok: false, por_que: 'Con ese criterio habría que rechazar también la teología del pacto, formulada en el siglo XVII.' },
            { t: 'No: un sistema se juzga por si explica bien la Escritura, no por su fecha.', ok: true, por_que: 'Como los de Berea, hay que examinarlo con la Biblia (Hch 17:11).' },
            { t: 'No, porque los apóstoles enseñaron las siete dispensaciones con esos mismos nombres.', ok: false, por_que: 'Los nombres y el número de las dispensaciones son posteriores; la palabra oikonomía sí es bíblica.' }
          ],
          explicacion: 'Todo sistema teológico es una herramienta humana que debe someterse a la Escritura.'
        } }
      ],
      pensar: 'Los de Berea escudriñaban cada día las Escrituras para ver si lo que oían era así (Hch 17:11). ¿Revisas con la Biblia lo que aprendes, aun en este recurso?'
    },
    {
      id: 'tres-lecturas', n: 'Tres lecturas hoy', ref: 'Romanos 11:1-2, 25-29; Gálatas 3:29; 6:16; Efesios 2:14-16; Hechos 15:14-18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres maneras de ordenar la historia de la salvación',
          cab: ['', 'Teología del pacto', 'Dispensacionalismo progresivo', 'Dispensacionalismo clásico'],
          filas: [
            ['Israel y la iglesia', 'Un solo pueblo; la iglesia es el Israel verdadero', 'Distintos, pero unidos en un mismo plan', 'Dos pueblos con propósitos distintos'],
            ['Promesas nacionales a Israel', 'Se cumplen espiritualmente en la iglesia', 'Se cumplirán en el reino futuro', 'Se cumplirán en el reino futuro'],
            ['El reino de David', 'Cristo reina hoy en la iglesia', 'Ya inaugurado; se completará en el milenio', 'Futuro, en el milenio'],
            ['El nuevo pacto', 'Se cumple en la iglesia', 'Uno solo: la iglesia ya participa, Israel lo recibirá', 'La iglesia participa de sus bendiciones; Israel lo recibirá'],
            ['El milenio', 'Por lo general amilenial', 'Premilenial', 'Premilenial, con arrebatamiento antes de la tribulación'],
            ['Lectura de la profecía', 'Con frecuencia espiritual o simbólica', 'Literal, con más continuidad entre las etapas', 'Literal']
          ],
          nota: 'Son generalizaciones: dentro de cada lectura hay matices.'
        } }
      ],
      texto: [
        'Hoy los creyentes evangélicos que estudian estos temas suelen seguir una de tres grandes lecturas. Todas creen en la autoridad de la Biblia, en la salvación por gracia mediante la fe y en la segunda venida de Cristo. Difieren en cómo se relacionan Israel y la iglesia, y en cómo se cumplen las promesas de los pactos.',
        { h: 'Teología del pacto' },
        'La teología del pacto, propia de las iglesias reformadas y presbiterianas, ve un solo pacto de gracia que atraviesa toda la historia. Israel fue la forma del pueblo de Dios en el Antiguo Testamento, y la iglesia es su forma en el Nuevo. Las promesas a Israel, incluida la tierra, se cumplen espiritualmente en Cristo y en la iglesia. Su fortaleza es mostrar la unidad del plan de Dios y del pueblo de Dios.',
        { h: 'Dispensacionalismo clásico' },
        'El dispensacionalismo clásico, el de Darby, Scofield y Chafer, subraya la distinción entre Israel y la iglesia y la interpretación literal de las profecías. Espera un reino futuro de mil años en que Dios cumplirá a Israel todo lo prometido, y el arrebatamiento de la iglesia antes de la tribulación. Su fortaleza es tomar en serio las promesas a Israel tal como fueron dadas.',
        { h: 'Dispensacionalismo progresivo' },
        'Desde la década de 1990, algunos dispensacionalistas proponen una lectura progresiva. Mantienen la distinción entre Israel y la iglesia y el reino futuro, pero subrayan que el reino de David ya fue inaugurado con la resurrección y la exaltación de Cristo (Hch 2:30-36), y que hay un solo nuevo pacto, del que la iglesia participa ya y que Israel recibirá. Su fortaleza es unir el «ya» y el «todavía no».',
        { posturas: {
          titulo: '¿Cómo se cumplen las promesas de los pactos?',
          a: { n: 'Se cumplen en la iglesia', t: 'Para la teología del pacto, Cristo es el verdadero Israel y la iglesia, unida a Él, hereda todas las promesas. La tierra prometida se amplía a la nueva creación (Ro 4:13) y el trono de David es el reinado de Cristo desde el cielo.' },
          b: { n: 'Se cumplen en la iglesia y en Israel', t: 'Para el dispensacionalismo, la iglesia recibe ahora las bendiciones espirituales de los pactos, y Dios cumplirá además a Israel, en el reino futuro, las promesas nacionales que le juró, porque sus dones son irrevocables (Ro 11:29).' },
          c: 'Este estudio sigue la segunda postura, con la esperanza de un reino futuro y del arrebatamiento antes de la tribulación, y reconoce el aporte de la lectura progresiva: el reino de Cristo ya comenzó y se manifestará plenamente cuando vuelva. Creyentes sinceros sostienen las otras lecturas; las diferencias no deben romper la comunión.'
        } },
        { ir: { t: 'Ver «Cuatro maneras de entender el milenio» en Los últimos tiempos', a: '../../escatologia/#panorama/3' } },
        { ejercicio: {
          pregunta: '¿En qué se diferencian principalmente la teología del pacto y el dispensacionalismo?',
          opciones: [
            { t: 'En si la salvación es por gracia o por obras.', ok: false, por_que: 'Ambas enseñan la salvación por gracia mediante la fe.' },
            { t: 'En la relación entre Israel y la iglesia, y en cómo se cumplen las promesas a Israel.', ok: true, por_que: 'Para una, la iglesia hereda todas las promesas; para la otra, Dios cumplirá también a Israel lo prometido.' },
            { t: 'En si Cristo volverá o no.', ok: false, por_que: 'Las tres lecturas esperan la segunda venida de Cristo.' }
          ],
          explicacion: 'La gran pregunta es si Dios tiene todavía un plan para Israel como nación.'
        } }
      ],
      pensar: 'Creyentes que aman la Biblia llegan a conclusiones distintas en estos temas. ¿Cómo puedes sostener tus convicciones con firmeza y, a la vez, con amor por quienes piensan distinto?'
    },
    {
      id: 'dones', n: 'Dispensaciones y dones del Espíritu', ref: 'Hechos 2:16-18, 38-39; 1 Corintios 1:4-8; 12:4-11; 13:8-12; Efesios 4:11-13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1co/13/8-12', ref: '1 Corintios 13:8-12' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Cuando venga lo perfecto»: tres lecturas',
          cab: ['Lo perfecto es…', 'Consecuencia', 'Dificultad'],
          filas: [
            ['El canon completo del Nuevo Testamento', 'Los dones cesaron hacia fines del siglo I', 'Pablo dice que entonces veremos «cara a cara» y conoceremos como fuimos conocidos'],
            ['La madurez de la iglesia', 'Los dones disminuyen al crecer la iglesia', 'El pasaje no habla de una iglesia madura, sino del fin de lo parcial'],
            ['La venida de Cristo y el estado final', 'Los dones continúan hasta que Cristo vuelva', 'Es la lectura más natural del «cara a cara» (1 Co 13:12; 1 Jn 3:2)']
          ]
        } }
      ],
      texto: [
        'Esta estación toca un punto donde la historia del dispensacionalismo y la fe pentecostal se cruzan. Muchos maestros dispensacionalistas de fines del siglo XIX y comienzos del XX enseñaban que las señales y los dones milagrosos del Espíritu, como las lenguas, la profecía y las sanidades, pertenecieron solo a la época de los apóstoles. Según ellos, servían para confirmar el mensaje mientras se escribía el Nuevo Testamento, y cesaron cuando este estuvo completo. A esa postura se la llama cesacionismo.',
        'Cuando a comienzos del siglo XX se extendió el avivamiento pentecostal, con el bautismo en el Espíritu Santo y el hablar en lenguas, muchos de esos maestros lo rechazaron. Los pentecostales, en cambio, aceptaron el esquema profético dispensacional, con el arrebatamiento y el milenio, pero no aceptaron que los dones hubieran cesado.',
        { posturas: {
          titulo: '¿Cesaron los dones del Espíritu?',
          a: { n: 'Cesaron con los apóstoles', t: 'Las señales acreditaban a los apóstoles y su mensaje (He 2:3-4; 2 Co 12:12). Con el canon completo, «lo perfecto» de 1 Corintios 13:10, ya no son necesarias, y la iglesia se edifica con la Escritura.' },
          b: { n: 'Continúan hasta la venida de Cristo', t: 'Pedro dijo que la promesa del Espíritu es «para cuantos el Señor nuestro Dios llamare» (Hch 2:39). Pablo dice que a los corintios nada les faltaba en ningún don mientras esperaban «la manifestación de nuestro Señor Jesucristo» (1 Co 1:7), y que lo parcial termina cuando veamos «cara a cara» (1 Co 13:12).' },
          c: 'Este estudio sigue la segunda postura. Joel unió el derramamiento del Espíritu con «los postreros días» (Hch 2:17), y toda la era de la iglesia es parte de esos días. Ningún pasaje dice que los dones terminarían al completarse el canon. La distinción entre dispensaciones no obliga al cesacionismo: la dispensación de la iglesia comenzó con el Espíritu derramado y termina con la venida del Señor.'
        } },
        { h: 'Canon cerrado, dones vigentes' },
        'Afirmar que los dones continúan no significa que haya nueva revelación al nivel de la Escritura. El canon está cerrado, y toda profecía de hoy se juzga por la Palabra escrita (1 Co 14:29; 1 Ts 5:20-21). La profecía en la iglesia edifica, exhorta y consuela (1 Co 14:3); no añade doctrina. Así se evitan dos errores: negar la obra presente del Espíritu y poner experiencias por encima de la Biblia.',
        { ir: { t: 'Ver «Llenuras y dones del Espíritu» en Hechos', a: '../../hechos/#teologia/3' } },
        { ejercicio: {
          pregunta: 'Según 1 Corintios 1:7, ¿hasta cuándo esperaba Pablo que los dones estuvieran presentes en la iglesia?',
          opciones: [
            { t: 'Hasta que terminara de escribirse el Nuevo Testamento.', ok: false, por_que: 'El versículo no menciona el canon, sino la manifestación de Cristo.' },
            { t: 'Mientras la iglesia espera la manifestación de nuestro Señor Jesucristo.', ok: true, por_que: 'Pablo une el ejercicio de los dones con la espera de la venida de Cristo.' },
            { t: 'Solo mientras vivieran los apóstoles.', ok: false, por_que: 'Pablo escribe a una iglesia, no a apóstoles, y mira hacia la venida del Señor.' }
          ],
          explicacion: 'Los dones del Espíritu acompañan a la iglesia en toda la dispensación de la gracia, hasta que Cristo vuelva.'
        } }
      ],
      pensar: 'Pablo dice que a la iglesia no le falta ningún don mientras espera al Señor (1 Co 1:7). ¿Estás buscando y usando los dones del Espíritu para edificar a otros?'
    },
    {
      id: 'errores', n: 'Errores al dividir la Biblia', ref: '2 Timoteo 2:15; 3:16-17; Mateo 5:1-12; Romanos 15:4; 1 Corintios 10:11',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Errores frecuentes y cómo corregirlos',
          cab: ['Error', 'Qué dice', 'Corrección bíblica'],
          filas: [
            ['Ultradispensacionalismo', 'La iglesia comienza en Hechos 9, 13 o 28; el bautismo en agua y la Cena no son para hoy', 'La iglesia nace en Pentecostés (Hch 2:41-47; 11:15); Pablo practicó y enseñó el bautismo y la Cena (Hch 19:5; 1 Co 11:23-26)'],
            ['«Los evangelios no son para nosotros»', 'El Sermón del monte y las enseñanzas de Jesús son solo para Israel o para el reino', 'Jesús mandó enseñar a las naciones a guardar todo lo que Él mandó (Mt 28:20)'],
            ['Desprecio del Antiguo Testamento', 'Como estamos en otra dispensación, el Antiguo Testamento ya no sirve', 'Lo escrito antes se escribió para nuestra enseñanza (Ro 15:4; 1 Co 10:11; 2 Ti 3:16)'],
            ['Varios caminos de salvación', 'Bajo la ley se salvaban por obras', 'Siempre por gracia mediante la fe (Ro 4:1-8)'],
            ['Sistema sobre el texto', 'Forzar un pasaje para que calce en el esquema', 'El esquema es una herramienta; manda el texto']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2ti/2/15', ref: '2 Timoteo 2:15' }
      ],
      texto: [
        'Pablo pidió a Timoteo que fuera un obrero «que usa bien la palabra de verdad» (2 Ti 2:15). La Reina-Valera de 1909 decía «que traza bien», y la versión inglesa del rey Jacobo, «que divide bien»; muchos dispensacionalistas usaron ese versículo como lema. Distinguir las etapas del plan de Dios es parte de usar bien la Palabra. Pero cualquier herramienta, mal usada, produce errores. Esta estación reúne los más frecuentes.',
        { h: 'El ultradispensacionalismo' },
        'Algunos llevaron la división de la Biblia al extremo. E. W. Bullinger, a fines del siglo XIX, enseñó que la iglesia, el cuerpo de Cristo, no comenzó en Pentecostés sino en Hechos 28, y que el bautismo en agua y la Cena del Señor no corresponden a esta dispensación. Otros ubican el comienzo en Hechos 9 o 13. Pero Pedro se refiere a Pentecostés como el principio, cuando el Espíritu cayó sobre ellos (Hch 11:15), Pablo bautizó a los creyentes y transmitió la Cena «hasta que él venga» (1 Co 11:26). La mayoría de los dispensacionalistas rechaza estas enseñanzas.',
        { h: '«Eso no es para nosotros»' },
        'Otro error es decir que el Sermón del monte o los evangelios no tienen aplicación para la iglesia, porque Jesús hablaba a Israel antes de la cruz. Es cierto que hay que leer cada pasaje en su contexto, y que algunas instrucciones eran para un momento particular, como el envío de los doce solo a Israel (Mt 10:5-6). Pero Jesús mandó a sus discípulos enseñar a todas las naciones «que guarden todas las cosas que os he mandado» (Mt 28:20). Las bienaventuranzas, la oración del Padre nuestro y el mandamiento del amor son para la iglesia.',
        { h: 'Despreciar el Antiguo Testamento' },
        'También es un error pensar que el Antiguo Testamento ya no sirve porque pertenece a otras dispensaciones. Pablo dice: «las cosas que se escribieron antes, para nuestra enseñanza se escribieron» (Ro 15:4). Los relatos de Israel en el desierto fueron escritos «para amonestarnos a nosotros» (1 Co 10:11). La pregunta correcta no es si un pasaje es para mí, sino cómo se aplica a mí, que vivo en el nuevo pacto. El taller práctico ejercita esa pregunta.',
        { ir: { t: 'Ver «¿Esa promesa es para mí?» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#errores/5' } },
        { ejercicio: {
          pregunta: '¿Qué responde mejor a quien dice que el Sermón del monte no es para la iglesia?',
          opciones: [
            { t: 'Que tiene razón, porque Jesús hablaba solo a judíos antes de la cruz.', ok: false, por_que: 'Jesús mandó enseñar a las naciones todo lo que Él había mandado (Mt 28:20).' },
            { t: 'Que hay que leerlo en su contexto, pero Jesús mandó enseñar a las naciones a guardar lo que Él enseñó.', ok: true, por_que: 'El contexto importa, pero las enseñanzas de Jesús son para sus discípulos de todas las épocas.' },
            { t: 'Que todo lo que dice la Biblia se aplica igual a todos, sin importar el contexto.', ok: false, por_que: 'Ese es el error contrario: algunas instrucciones eran para un momento particular, como Mateo 10:5-6.' }
          ],
          explicacion: 'Distinguir las etapas sirve para aplicar bien la Biblia, no para dejar de aplicarla.'
        } }
      ],
      pensar: 'Toda la Escritura es útil para enseñar y para instruir en justicia (2 Ti 3:16). ¿Hay partes de la Biblia que has dejado de leer porque pensabas que no eran para ti?'
    }
  ];

  window.__PACTOS.dispensaciones = dispensaciones;
})();
