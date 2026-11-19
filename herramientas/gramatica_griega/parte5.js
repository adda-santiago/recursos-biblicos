/* Taller práctico y armado de RUTA_DATA (ver el encabezado de parte1.js) */
(() => {
  const { G } = window.__GG;
  const taller = [
    {
      id: 'juan-1-1', n: 'Juan 1:1: «el Verbo era Dios»', ref: 'Juan 1:1-3; Juan 1:18',
      visual: [
        G('Juan 1:1', 'Juan 1:1', '@@n1904:jn/1/1', '@@n1904tr:jn/1/1', '@@n1904t:jn/1/1',
          ['en', 'principio', 'era', 'el', 'Verbo', 'y', 'el', 'Verbo', 'era', 'con', 'el', 'Dios', 'y', 'Dios', 'era', 'el', 'Verbo'],
          '@@jn/1/1'),
        { tipo: 'tabla', titulo: 'Tres maneras', tabla: {
          titulo: 'Tres maneras de escribir la última frase',
          cab: ['Si Juan hubiera escrito…', 'Significaría', '¿Lo escribió?'],
          filas: [
            ['ὁ λόγος ἦν ὁ θεός, con artículo en los dos', 'El Verbo y Dios Padre son la misma persona', 'No: ya dijo que el Verbo estaba «con» Dios'],
            ['ὁ λόγος ἦν θεῖος, con el adjetivo «divino»', 'El Verbo tenía algo divino, sin ser Dios', 'No'],
            ['θεὸς ἦν ὁ λόγος', 'El Verbo era Dios en su naturaleza, sin ser la persona del Padre', 'Sí'],
          ],
          nota: 'θεός sin artículo y antes del verbo es el predicado: dice qué es el Verbo.'
        } }
      ],
      texto: [
        'Con lo que has aprendido puedes leer el primer versículo del Evangelio de Juan forma por forma. Es breve, de palabras sencillas, y una de las afirmaciones más profundas de toda la Biblia.',
        { h: 'Era' },
        'Ἐν ἀρχῇ, «en el principio», con dativo después de ἐν, recuerda Génesis 1:1. El verbo es ἦν, imperfecto de εἰμί: «era». Juan no dice que el Verbo «comenzó a ser» en el principio, sino que ya era. Lo verás claro en el versículo 3, donde de la creación usa otro verbo: πάντα δι’ αὐτοῦ ἐγένετο, «todas las cosas por él fueron hechas». El Verbo era; las cosas llegaron a ser. Es el mismo contraste de Juan 8:58.',
        { h: 'Con Dios' },
        'καὶ ὁ λόγος ἦν πρὸς τὸν θεόν: «y el Verbo era con Dios». πρός con acusativo indica dirección y cercanía: junto a Dios, en comunión con él, cara a cara. El artículo τόν delante de θεόν señala a Dios Padre. El Verbo es distinto del Padre: está con él.',
        { h: 'Dios era el Verbo' },
        'La tercera frase dice θεὸς ἦν ὁ λόγος. Recuerda la ruta I: el sustantivo con artículo, ὁ λόγος, es el sujeto; el que no lo tiene, θεός, es el predicado. Por eso se traduce «el Verbo era Dios», aunque θεός vaya primero. Y va primero para destacarlo: lo que Dios es, eso era el Verbo.',
        'La tabla del panel muestra por qué Juan escribió exactamente así. Con artículo en los dos, habría dicho que el Verbo es la misma persona del Padre, lo que contradice la frase anterior; ese es el error que hoy enseñan los pentecostales unicitarios. Con el adjetivo θεῖος, «divino», habría dicho menos. Con θεός sin artículo y adelantado, dice todo: el Verbo es Dios en su naturaleza y es distinto del Padre.',
        { h: '¿«Un dios»?' },
        'La Traducción del Nuevo Mundo, de los Testigos de Jehová, dice «la Palabra era un dios», porque θεός no tiene artículo. Pero el griego no tiene artículo indefinido, y la falta de artículo no equivale a «un». En el mismo capítulo, Juan escribe θεοῦ y θεόν sin artículo para referirse al único Dios verdadero: Juan el Bautista fue enviado παρὰ θεοῦ, «de Dios» (Jn 1:6), y θεὸν οὐδεὶς ἑώρακεν πώποτε, «a Dios nadie le vio jamás» (Jn 1:18). Nadie traduce allí «un dios». Además, hablar de «un dios» junto al Dios verdadero sería politeísmo, algo impensable para un judío como Juan. Muchos Testigos de Jehová leen la Biblia con sinceridad; este versículo es una buena puerta para conversar con respeto sobre quién es Jesús.',
        { ir: { t: 'Ver la doctrina de la Trinidad en Dios y la Trinidad', a: '../../dios-y-la-trinidad/' } },
        { ejercicio: {
          pregunta: 'En θεὸς ἦν ὁ λόγος, ¿qué indica que «el Verbo» es el sujeto?',
          opciones: [
            { t: 'Que ὁ λόγος va al final.', ok: false, por_que: 'En griego la posición no decide el sujeto.' },
            { t: 'Que ὁ λόγος lleva artículo y θεός no.', ok: true, por_que: 'En una frase con «ser», el sustantivo con artículo suele ser el sujeto.' },
            { t: 'Que θεός está en genitivo.', ok: false, por_que: 'θεός está en nominativo. El genitivo sería θεοῦ.' }
          ],
          explicacion: 'El Verbo es el sujeto; «Dios» es lo que se afirma de él, adelantado para destacarlo.'
        } }
      ],
      pensar: 'El Verbo que era Dios se hizo carne y habitó entre nosotros (Jn 1:14). ¿Qué te dice de Dios que haya querido acercarse tanto a ti?'
    },
    {
      id: 'juan-3-16', n: 'Juan 3:16: «de tal manera amó Dios»', ref: 'Juan 3:16-17',
      visual: [
        G('Juan 3:16', 'Juan 3:16', '@@n1904:jn/3/16', '@@n1904tr:jn/3/16', '@@n1904t:jn/3/16',
          ['así', 'porque', 'amó', 'el', 'Dios', 'al', 'mundo', 'que', 'al', 'Hijo', 'el', 'único', 'dio', 'para que', 'todo', 'el', 'que cree', 'en', 'él', 'no', 'se pierda', 'sino', 'tenga', 'vida', 'eterna'],
          '@@jn/3/16'),
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Los verbos de Juan 3:16',
          cab: ['Forma', 'Análisis', 'De', 'Sentido'],
          filas: [
            ['ἠγάπησεν', 'aoristo indicativo activo, 3.ª sing.', 'ἀγαπάω', 'amó'],
            ['ἔδωκεν', 'aoristo indicativo activo, 3.ª sing.', 'δίδωμι', 'dio'],
            ['πιστεύων', 'participio presente activo, nom. masc. sing.', 'πιστεύω', 'que cree'],
            ['ἀπόληται', 'aoristo subjuntivo medio, 3.ª sing.', 'ἀπόλλυμι', 'se pierda'],
            ['ἔχῃ', 'presente subjuntivo activo, 3.ª sing.', 'ἔχω', 'tenga'],
          ],
          nota: 'Dos aoristos para lo que Dios hizo; un participio presente para el que cree; dos subjuntivos para el propósito.'
        } }
      ],
      texto: [
        'Es el versículo más conocido del Nuevo Testamento. Léelo en voz alta en griego con las ayudas, y después recórrelo con la tabla del panel.',
        { h: 'Así amó Dios' },
        'Οὕτως significa «así, de esta manera». La Reina-Valera traduce «de tal manera», que destaca la intensidad. Muchos estudiosos señalan que οὕτως apunta sobre todo al modo: Dios amó así, de esta manera, y la frase con ὥστε explica cuál: dando a su Hijo. Las dos lecturas se complementan: la manera en que Dios amó muestra cuánto amó.',
        'ἠγάπησεν es aoristo: presenta el amor de Dios como un hecho completo en la historia, que culminó en la cruz. τὸν κόσμον, acusativo, es el objeto del amor: el mundo, que en Juan es la humanidad apartada de Dios, la misma que «no le conoció» (Jn 1:10). Dios amó a quienes no lo amaban.',
        { h: 'Dio a su Hijo único' },
        'ὥστε introduce el resultado. Normalmente va con infinitivo; aquí va con un indicativo, ἔδωκεν, «dio», que subraya que el resultado ocurrió de verdad. τὸν υἱὸν τὸν μονογενῆ tiene el artículo repetido, como ὁ ποιμὴν ὁ καλός: «el Hijo, el único». μονογενής se ha traducido «unigénito»; muchos estudiosos la relacionan con γένος, «clase», y entienden «único en su clase». Las dos traducciones dicen lo esencial: no hay otro Hijo como él.',
        { h: 'Para que todo el que cree' },
        'ἵνα introduce el propósito, con dos subjuntivos. πᾶς ὁ πιστεύων εἰς αὐτόν, «todo el que cree en él», combina lo que viste en la ruta III y en la IV: un participio con artículo y la construcción πιστεύω εἰς. La puerta está abierta a «todo» el que cree. μὴ ἀπόληται, «no se pierda», es un aoristo de ἀπόλλυμι: la perdición vista como un hecho final. ἀλλ’ ἔχῃ ζωὴν αἰώνιον, «sino que tenga vida eterna», está en presente: la vida eterna es una posesión que comienza ahora.',
        'El versículo siguiente aclara el propósito de Dios: «no envió Dios a su Hijo al mundo para condenar al mundo, sino para que el mundo sea salvo por él» (Jn 3:17).',
        { ejercicio: {
          pregunta: '¿Por qué ἀπόληται y ἔχῃ están en subjuntivo?',
          opciones: [
            { t: 'Porque van después de ἵνα, «para que», y expresan el propósito de Dios.', ok: true, por_que: 'ἵνα + subjuntivo es la construcción normal de propósito.' },
            { t: 'Porque Juan duda de que alguien pueda salvarse.', ok: false, por_que: 'El subjuntivo aquí no expresa duda, sino propósito.' },
            { t: 'Porque son futuros.', ok: false, por_que: 'Son subjuntivos: lo muestran la η de ἀπόληται y la ῃ de ἔχῃ.' }
          ],
          explicacion: 'Dios dio a su Hijo con un propósito: que el que cree no se pierda, sino que tenga vida eterna.'
        } }
      ],
      pensar: 'Dios amó al mundo que no lo amaba. ¿Hay alguien a quien te cuesta amar porque no te ama? ¿Qué te enseña Juan 3:16 sobre cómo tratarlo?'
    },
    {
      id: 'efesios-2', n: 'Efesios 2:8-9: «por gracia sois salvos»', ref: 'Efesios 2:8-10',
      visual: [
        G('Efesios 2:8', 'Efesios 2:8', '@@n1904:ef/2/8', '@@n1904tr:ef/2/8', '@@n1904t:ef/2/8',
          ['por la', 'porque', 'gracia', 'sois', 'salvados', 'por medio de', 'fe', 'y', 'esto', 'no', 'de', 'vosotros', 'de Dios', 'el', 'don'],
          '@@ef/2/8'),
        G('Efesios 2:9', 'Efesios 2:9', '@@n1904:ef/2/9', '@@n1904tr:ef/2/9', '@@n1904t:ef/2/9',
          ['no', 'por', 'obras', 'para que', 'no', 'nadie', 'se gloríe'],
          '@@ef/2/9')
      ],
      texto: [
        'Efesios 2:8-9 resume el evangelio de la gracia en dos versículos. Casi cada palabra enseña algo de gramática.',
        { h: 'Salvados por gracia' },
        'τῇ γὰρ χάριτι: dativo de medio, como viste en la ruta II. La gracia es el medio por el cual Dios salva. ἐστε σεσῳσμένοι es una construcción con εἰμί, «sois», y un participio perfecto pasivo de σῴζω, «salvados». La forma equivale a un perfecto: «habéis sido salvados, y lo estáis». Fue Dios quien salvó (pasiva) y el resultado permanece (perfecto).',
        { h: 'Por medio de la fe' },
        'διὰ πίστεως: διά con genitivo, «por medio de». La fe no es la causa de la salvación ni un mérito, sino el canal por el que se recibe. La causa es la gracia de Dios; el medio, la fe.',
        { h: '¿Qué es «esto»?' },
        'καὶ τοῦτο οὐκ ἐξ ὑμῶν, θεοῦ τὸ δῶρον: «y esto no de vosotros, pues es don de Dios». τοῦτο es neutro. χάρις y πίστις son femeninos, así que «esto» no se refiere solo a una de esas palabras, sino a todo lo dicho: la salvación por gracia mediante la fe. Todo es regalo. Fíjate también en el orden: θεοῦ va primero, enfático: de Dios es el don.',
        { h: 'No por obras' },
        'El versículo 9 añade οὐκ ἐξ ἔργων, «no por obras», y el propósito: ἵνα μή τις καυχήσηται, «para que nadie se gloríe». καυχήσηται es aoristo subjuntivo de καυχάομαι, un verbo con forma media. Nadie podrá decir delante de Dios: «me lo gané».',
        'Pero las obras no desaparecen. El versículo 10 dice: αὐτοῦ γάρ ἐσμεν ποίημα, «somos hechura suya», κτισθέντες… ἐπὶ ἔργοις ἀγαθοῖς, «creados… para buenas obras». Las obras no son la raíz de la salvación, sino su fruto. Por cierto, de ποίημα viene «poema», y a veces se predica que somos «el poema de Dios». Es una imagen bonita, pero ποίημα significa «obra, lo hecho»; recuerda el error de leer una palabra con un sentido moderno.',
        { ejercicio: {
          pregunta: '¿Por qué se entiende que τοῦτο, «esto», se refiere a toda la salvación y no solo a la fe?',
          opciones: [
            { t: 'Porque τοῦτο es neutro y πίστις es femenino.', ok: true, por_que: 'Si se refiriera solo a la fe, lo esperable sería el femenino αὕτη. El neutro abarca todo lo dicho.' },
            { t: 'Porque τοῦτο está en plural.', ok: false, por_que: 'τοῦτο es singular. El plural es ταῦτα.' },
            { t: 'Porque la fe no existe en Efesios.', ok: false, por_que: 'La fe está en el mismo versículo: διὰ πίστεως.' }
          ],
          explicacion: 'La salvación entera, por gracia y mediante la fe, es don de Dios.'
        } }
      ],
      pensar: 'Eres salvo por gracia y creado para buenas obras. ¿Qué obra buena tiene Dios preparada para ti esta semana?'
    },
    {
      id: 'mateo-28', n: 'Mateo 28:19-20: «id, y haced discípulos»', ref: 'Mateo 28:18-20',
      visual: [
        G('Mateo 28:19', 'Mateo 28:19', '@@n1904:mt/28/19', '@@n1904tr:mt/28/19', '@@n1904t:mt/28/19',
          ['yendo', 'pues', 'haced discípulos', 'a todas', 'las', 'naciones', 'bautizando', 'los', 'en', 'el', 'nombre', 'del', 'Padre', 'y', 'del', 'Hijo', 'y', 'del', 'Santo', 'Espíritu'],
          '@@mt/28/19'),
        G('Mateo 28:20', 'Mateo 28:20', '@@n1904:mt/28/20', '@@n1904tr:mt/28/20', '@@n1904t:mt/28/20',
          ['enseñando', 'les', 'a guardar', 'todas las cosas', 'que', 'mandé', 'a vosotros', 'y', 'he aquí', 'yo', 'con', 'vosotros', 'estoy', 'todos', 'los', 'días', 'hasta', 'el', 'fin', 'del', 'siglo'],
          '@@mt/28/20')
      ],
      texto: [
        'La Gran Comisión tiene un solo verbo principal y tres participios que lo rodean. Ver esa estructura ayuda a entender qué manda Jesús y cómo.',
        { h: 'El verbo principal' },
        'El único imperativo es μαθητεύσατε, aoristo de μαθητεύω: «haced discípulos». La Reina-Valera traduce «doctrinad», en el sentido antiguo de «enseñar y formar». El objeto es πάντα τὰ ἔθνη, «todas las naciones», acusativo neutro plural: el discipulado no tiene fronteras.',
        { h: '¿«Id» o «yendo»?' },
        'πορευθέντες es un participio de aoristo, «habiendo ido, yendo». A veces se predica que, por ser participio, significa «mientras vais por la vida», como si ir fuera opcional. Pero en la narración griega, un participio de aoristo antes de un imperativo suele tomar la fuerza del imperativo: es la acción que hay que hacer primero. Por eso todas las traducciones dicen «id». Mateo lo usa así en otros lugares: πορευθέντες μάθετε, «id, pues, y aprended» (Mt 9:13). La misión exige salir.',
        { h: 'Bautizando y enseñando' },
        'βαπτίζοντες y διδάσκοντες son participios de presente: describen cómo se hacen discípulos. Se bautiza a los que creen y se les enseña a guardar todo lo que Jesús mandó. Fíjate que no dice solo «enseñándoles todo», sino τηρεῖν πάντα, «a guardar», a obedecer. El discipulado es obediencia, no solo información.',
        'La fórmula del bautismo es εἰς τὸ ὄνομα, «en el nombre», en singular, del Padre, del Hijo y del Espíritu Santo, cada uno con su artículo: un solo nombre y tres personas distintas.',
        { h: 'Todos los días' },
        'El final es una promesa: ἐγὼ μεθ’ ὑμῶν εἰμι πάσας τὰς ἡμέρας. Ya conoces todas estas formas: ἐγώ enfático, μετά con genitivo, «con», εἰμί en presente, y πάσας τὰς ἡμέρας, un acusativo de extensión de tiempo: «durante todos los días», sin excepción. ἰδού, «he aquí», es una forma de ὁράω que llama la atención: ¡mira!',
        { ejercicio: {
          pregunta: '¿Cuál es el verbo principal de Mateo 28:19-20?',
          opciones: [
            { t: 'πορευθέντες, «id».', ok: false, por_que: 'Es un participio, aunque aquí toma la fuerza del imperativo.' },
            { t: 'μαθητεύσατε, «haced discípulos».', ok: true, por_que: 'Es el único imperativo. Los participios dependen de él.' },
            { t: 'βαπτίζοντες, «bautizando».', ok: false, por_que: 'Es un participio de presente que describe cómo se hacen discípulos.' }
          ],
          explicacion: 'Ir, bautizar y enseñar giran en torno a un mandato central: hacer discípulos de todas las naciones.'
        } }
      ],
      pensar: 'El mandato es hacer discípulos, no solo convertidos. ¿A quién estás ayudando tú a aprender a guardar lo que Jesús mandó?'
    },
    {
      id: 'hechos-pentecostes', n: 'Hechos 1:8 y 2:4: poder y lenguas', ref: 'Hechos 1:8; Hechos 2:1-4; Hechos 10:44-46; Hechos 19:6',
      visual: [
        G('Hechos 1:8', 'Hechos 1:8', '@@n1904:hch/1/8', '@@n1904tr:hch/1/8', '@@n1904t:hch/1/8',
          ['pero', 'recibiréis', 'poder', 'habiendo venido', 'el', 'Santo', 'Espíritu', 'sobre', 'vosotros', 'y', 'seréis', 'de mí', 'testigos', 'en', 'tanto', 'Jerusalén', 'como', 'en', 'toda', 'la', 'Judea', 'y', 'Samaria', 'y', 'hasta', 'lo último', 'de la', 'tierra'],
          '@@hch/1/8'),
        G('Hechos 2:4', 'Hechos 2:4', '@@n1904:hch/2/4', '@@n1904tr:hch/2/4', '@@n1904t:hch/2/4',
          ['y', 'fueron llenos', 'todos', 'de Espíritu', 'Santo', 'y', 'comenzaron', 'a hablar', 'en otras', 'lenguas', 'según', 'el', 'Espíritu', 'daba', 'expresarse', 'a ellos'],
          '@@hch/2/4')
      ],
      texto: [
        'Estos dos versículos son la promesa y su cumplimiento. Léelos juntos, forma por forma.',
        { h: 'La promesa' },
        'λήμψεσθε es futuro de λαμβάνω, «recibiréis», con forma media, como muchos futuros de verbos frecuentes. δύναμιν, acusativo de δύναμις: «poder». Luego viene un genitivo absoluto, como anunciaba la ruta III: ἐπελθόντος τοῦ ἁγίου πνεύματος ἐφ’ ὑμᾶς. El participio de aoristo ἐπελθόντος y su sujeto, τοῦ πνεύματος, están en genitivo, separados del resto de la frase: «cuando haya venido sobre vosotros el Espíritu Santo». El poder llega con la venida del Espíritu.',
        'καὶ ἔσεσθέ μου μάρτυρες: futuro de εἰμί, «seréis», y el genitivo μου adelantado: «mis testigos». El poder tiene un propósito: dar testimonio de Cristo en círculos que se amplían, de Jerusalén a lo último de la tierra. El libro de Hechos sigue ese orden.',
        { h: 'El cumplimiento' },
        'En Hechos 2:4, ἐπλήσθησαν es aoristo pasivo de πίμπλημι: «fueron llenos». La pasiva indica que la obra es de Dios, y πάντες, «todos», que nadie quedó fuera. Πνεύματος ἁγίου está en genitivo, el caso de aquello de lo que algo se llena.',
        'καὶ ἤρξαντο λαλεῖν ἑτέραις γλώσσαις: aoristo medio de ἄρχομαι más infinitivo, «comenzaron a hablar», y un dativo, «en otras lenguas». ἕτερος, «otro, distinto», indica lenguas distintas de las suyas, que los oyentes reconocieron como sus idiomas, según Hechos 2:6-11.',
        'El final es delicado: καθὼς τὸ πνεῦμα ἐδίδου ἀποφθέγγεσθαι αὐτοῖς. ἐδίδου es imperfecto de δίδωμι: el Espíritu les «daba», de manera continua, que se expresaran. Los discípulos hablaban; el Espíritu daba la expresión. ἀποφθέγγεσθαι es un verbo de habla solemne o inspirada; Lucas lo usa también para el discurso de Pedro (Hch 2:14).',
        { h: 'Un patrón en Hechos' },
        'Lo que pasó en Pentecostés se repite en otros momentos de Hechos: en casa de Cornelio, los oyentes «hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46), y en Éfeso, cuando Pablo les impuso las manos, «hablaban en lenguas, y profetizaban» (Hch 19:6). En los dos textos, el verbo λαλέω está en imperfecto. La promesa del Padre es para la iglesia de todos los tiempos (Hch 2:39), y la experiencia del bautismo en el Espíritu Santo, con la señal de hablar en otras lenguas, sigue a disposición de todo creyente que la busca.',
        { ir: { t: 'Estudiar el bautismo en el Espíritu en El Espíritu Santo', a: '../../espiritu-santo/' } },
        { ejercicio: {
          pregunta: '¿Qué indica el imperfecto ἐδίδου en Hechos 2:4?',
          opciones: [
            { t: 'Que el Espíritu les dio a hablar una sola palabra.', ok: false, por_que: 'El imperfecto presenta una acción en desarrollo, no un hecho puntual.' },
            { t: 'Que el Espíritu les iba dando que se expresaran mientras hablaban.', ok: true, por_que: 'El imperfecto describe la acción continua del Espíritu durante todo el hablar.' },
            { t: 'Que el Espíritu les dará lenguas en el futuro.', ok: false, por_que: 'El aumento ἐ- indica pasado.' }
          ],
          explicacion: 'Los discípulos hablaban y el Espíritu les daba continuamente la expresión: una obra conjunta.'
        } }
      ],
      pensar: 'El poder del Espíritu es para ser testigos. ¿Has buscado ser lleno del Espíritu Santo? ¿Dónde está tu «Jerusalén», el primer lugar donde Dios te llama a testificar?'
    },
    {
      id: 'juan-19-30', n: 'Juan 19:30: «consumado es»', ref: 'Juan 19:28-30; Juan 10:18',
      visual: [
        G('Juan 19:30', 'Juan 19:30', '@@n1904:jn/19/30', '@@n1904tr:jn/19/30', '@@n1904t:jn/19/30',
          ['cuando', 'pues', 'tomó', 'el', 'vinagre', 'el', 'Jesús', 'dijo', 'ha sido consumado', 'y', 'inclinando', 'la', 'cabeza', 'entregó', 'el', 'espíritu'],
          '@@jn/19/30')
      ],
      texto: [
        'La última palabra de Jesús en la cruz, según Juan, es un solo verbo: τετέλεσται. Ya puedes analizarlo con el método de la ruta III.',
        { h: 'Análisis' },
        'Reduplicación τε-; sin -κ-; terminación -ται. Es un perfecto medio o pasivo, indicativo, tercera persona del singular, de τελέω, «terminar, cumplir, llevar a su fin». Literalmente: «ha sido llevado a su fin», y queda terminado. La Reina-Valera traduce «Consumado es».',
        'El perfecto es la clave. Jesús no dice solo «se terminó», lo que diría el aoristo ἐτελέσθη, sino que la obra quedó completa y su resultado permanece. Nada hay que añadir a lo que Cristo hizo en la cruz.',
        { h: '¿Qué fue consumado?' },
        'Dos versículos antes, Juan usa la misma forma: «sabiendo Jesús que ya todo estaba consumado», πάντα τετέλεσται, «dijo, para que la Escritura se cumpliese: Tengo sed» (Jn 19:28). Lo consumado es la obra que el Padre le dio, anunciada en las Escrituras. Jesús había dicho en su oración: τὸ ἔργον τελειώσας, «he acabado la obra que me diste que hiciese» (Jn 17:4).',
        'Se repite a menudo que en los recibos de impuestos de la época se escribía esta palabra con el sentido de «pagado». Es cierto que τελέω se usaba para pagar impuestos, como en Mateo 17:24 y Romanos 13:6, y la idea de una deuda pagada armoniza con la enseñanza bíblica de la cruz (Col 2:14). Pero conviene no apoyar la predicación en ese dato, que se cita sin pruebas claras. El mismo Juan explica la palabra: es el cumplimiento de la obra y de la Escritura.',
        { h: 'Entregó el espíritu' },
        'κλίνας τὴν κεφαλήν, «habiendo inclinado la cabeza», es un participio de aoristo: una acción anterior al verbo principal. παρέδωκεν τὸ πνεῦμα, «entregó el espíritu», es aoristo activo de παραδίδωμι. Jesús no fue vencido por la muerte: entregó su vida él mismo. Lo había dicho: «Nadie me la quita, sino que yo de mí mismo la pongo» (Jn 10:18). Aquí πνεῦμα significa el espíritu humano de Jesús, su vida, como en la ruta IV.',
        { ejercicio: {
          pregunta: '¿Qué aporta el perfecto τετέλεσται que no aportaría el aoristo?',
          opciones: [
            { t: 'Que la obra quedó completa y su resultado permanece.', ok: true, por_que: 'El perfecto mira el resultado vigente de una acción terminada.' },
            { t: 'Que la obra se repetirá cada año.', ok: false, por_que: 'El perfecto no indica repetición. La obra de Cristo fue hecha una vez (He 9:28).' },
            { t: 'Que la obra todavía no ha empezado.', ok: false, por_que: 'La reduplicación indica una acción terminada.' }
          ],
          explicacion: 'Consumado es: la obra de la cruz está completa y sigue siendo suficiente.'
        } }
      ],
      pensar: 'Si la obra de Cristo quedó consumada, ¿estás intentando añadirle algo para sentirte aceptado por Dios? ¿Qué significa para ti descansar en lo que él terminó?'
    },
    {
      id: 'seguir', n: 'Cómo seguir', ref: '2 Pedro 3:18; Hechos 17:11; 2 Timoteo 2:15',
      visual: [
        G('2 Pedro 3:18', '2 Pedro 3:18', '@@n1904:2p/3/18', '@@n1904tr:2p/3/18', '@@n1904t:2p/3/18',
          ['creced', 'pero', 'en', 'gracia', 'y', 'conocimiento', 'del', 'Señor', 'de nosotros', 'y', 'Salvador', 'Jesús', 'Cristo', 'a él', 'la', 'gloria', 'tanto', 'ahora', 'como', 'hasta', 'el día', 'de la eternidad'],
          '@@2p/3/18'),
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Cómo seguir creciendo',
          cab: ['Herramienta', 'Para qué'],
          filas: [
            ['El vocabulario de este recurso', 'Una lección por semana hasta completar las 45, y repasar con el modo de práctica'],
            ['Interlineal griego–español (NT)', 'Recurso del sitio: el Nuevo Testamento palabra por palabra, con su análisis'],
            ['Concordancia con números de Strong', 'Encontrar todas las apariciones de una palabra griega'],
            ['Un diccionario griego–español del Nuevo Testamento', 'Ver todos los sentidos de una palabra y sus usos'],
            ['Una gramática del griego del Nuevo Testamento', 'Profundizar lo que aquí es una introducción'],
            ['Vocabulario y gramática básica del hebreo bíblico', 'El paso equivalente para el Antiguo Testamento'],
          ],
          nota: 'Lo más útil es la práctica breve y constante: un versículo por día, con el método de las seis preguntas.'
        } }
      ],
      texto: [
        'Si llegaste hasta aquí, ya sabes mucho más griego del que sabías al empezar. Puedes reconocer los casos, distinguir un aoristo de un presente, encontrar un participio y entender por qué un comentario dice que un verbo es «perfecto pasivo». Lo que sigue es práctica.',
        { h: 'Un hábito sencillo' },
        'Elige un libro breve que conozcas bien en español, como 1 Juan o Filipenses, y lee un versículo por día en griego. Primero en voz alta. Después busca las palabras que no conozcas en el vocabulario. Por último, aplica a cada verbo el método de las seis preguntas. Al terminar el libro, notarás la diferencia.',
        { ir: { t: 'Abrir el vocabulario', a: 'vocabulario/' } },
        { h: 'Lo que viene' },
        'El paso siguiente en el sitio es el Interlineal griego–español del Nuevo Testamento, que muestra cada palabra con su glosa y su análisis, como el interlineal hebreo. Con lo que aprendiste aquí podrás sacarle todo el provecho; su ruta «Cómo usar este recurso» te enseña a evitar los errores más comunes. Mientras tanto, si estudias también el Antiguo Testamento, el recurso de hebreo sigue el mismo camino.',
        { ir: { t: 'Abrir el Interlineal griego–español (NT)', a: '../../interlineal-griego/' } },
        { ir: { t: 'Ver Vocabulario y gramática básica del hebreo bíblico', a: '../../gramatica-hebrea/' } },
        { h: 'Crecer en gracia y en conocimiento' },
        'Pedro termina su segunda carta con un imperativo de presente: αὐξάνετε, «creced», un crecimiento continuo. Y dice en qué: ἐν χάριτι καὶ γνώσει, «en la gracia y el conocimiento», dos dativos con una sola preposición. El conocimiento es τοῦ κυρίου ἡμῶν καὶ σωτῆρος Ἰησοῦ Χριστοῦ: un artículo para dos títulos, «nuestro Señor y Salvador Jesucristo», la misma persona.',
        'Ese es el propósito de todo este estudio. No aprendemos griego para saber más que otros, sino para conocer mejor a Cristo y para servir mejor a su iglesia. El conocimiento sin gracia envanece; la gracia sin conocimiento se queda corta. Pedro pide las dos.',
        { ir: { t: 'Repasar «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } },
        { ejercicio: {
          pregunta: 'En 2 Pedro 3:18, ¿qué indica el imperativo de presente αὐξάνετε?',
          opciones: [
            { t: 'Un crecimiento que debe continuar, como proceso.', ok: true, por_que: 'El presente presenta la acción en desarrollo: seguid creciendo.' },
            { t: 'Un crecimiento que ya terminó.', ok: false, por_que: 'Para algo terminado se usaría el perfecto.' },
            { t: 'Un crecimiento que ocurrirá solo en el cielo.', ok: false, por_que: 'Es un mandato para la vida presente.' }
          ],
          explicacion: 'La vida cristiana es crecimiento continuo en gracia y en el conocimiento de Cristo.'
        } }
      ],
      pensar: '«Creced en la gracia y el conocimiento de nuestro Señor y Salvador Jesucristo.» ¿Qué paso concreto darás este mes para seguir creciendo, y con quién compartirás lo que aprendiste?'
    }
  ];

  const GG = window.__GG;
  delete window.__GG;
  window.RUTA_DATA = {
    titulo: 'Vocabulario y gramática básica del griego del NT',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto griego: Nuevo Testamento de Eberhard Nestle (1904), dominio público, según la edición de biblicalhumanities.org (morfología, lemas y números de Strong CC0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Vocabulario y gramática', n: 'I. Panorama', info: 'Cómo funciona el griego: terminaciones, clases de palabras, orden y frecuencia', estaciones: GG.panorama },
      { id: 'sustantivo', grupo: 'Vocabulario y gramática', n: 'II. El sustantivo y sus compañeros', info: 'Los cinco casos, las tres declinaciones, el artículo, el adjetivo, las preposiciones y los pronombres', estaciones: GG.sustantivo },
      { id: 'verbo', grupo: 'Vocabulario y gramática', n: 'III. El verbo', info: 'Aspecto, tiempos, voces, modos, infinitivo, participio y un método para analizar', estaciones: GG.verbo },
      { id: 'palabras', grupo: 'Vocabulario y gramática', n: 'IV. Palabras clave de la fe', info: 'Diez palabras griegas estudiadas sin caer en los errores comunes', estaciones: GG.palabras },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Seis pasajes famosos, forma por forma', estaciones: taller }
    ]
  };
})();
