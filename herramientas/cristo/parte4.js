/* La persona y obra de Cristo · ruta V. La cruz (cont.) y VI. Resucitado y exaltado (ver encabezado en parte1.js) */
(() => {
  /* ---------------- V. La cruz (continuación) ---------------- */
  const cruz2 = [
    {
      id: 'victoria', n: 'Victoria sobre Satanás', ref: 'Génesis 3:15; Colosenses 2:13-15; Hebreos 2:14-15; Juan 12:31-32; 1 Juan 3:8; Apocalipsis 12:10-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@col/2/13-15', ref: 'Colosenses 2:13-15' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperio-romano/img/roma-triunfo-tito.webp', alt: 'Desfile triunfal romano: el general vencedor en su carro, seguido de los cautivos y los despojos de guerra', pie: 'Pablo usa la imagen del desfile triunfal romano: Cristo exhibió públicamente a los poderes vencidos (Col 2:15).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que la cruz hizo con el enemigo',
          cab: ['El enemigo tenía…', 'En la cruz…', 'Texto'],
          filas: [
            ['El acta de los decretos contra nosotros', 'Fue clavada en la cruz y anulada', 'Col 2:14'],
            ['El poder de acusar', 'El acusador fue lanzado fuera', 'Ap 12:10-11'],
            ['El imperio de la muerte', 'Fue destruido por medio de la muerte', 'He 2:14'],
            ['Esclavos que vivían con temor', 'Fueron librados', 'He 2:15'],
            ['El dominio de este mundo', 'El príncipe de este mundo fue echado fuera', 'Jn 12:31'],
            ['Sus obras', 'Fueron deshechas', '1 Jn 3:8']
          ],
          nota: 'La victoria es completa, pero su manifestación final espera la venida de Cristo (Ap 20:10).'
        } }
      ],
      texto: [
        'La primera promesa del evangelio fue una declaración de guerra: el descendiente de la mujer heriría a la serpiente en la cabeza (Gn 3:15). La cruz fue el lugar de esa batalla. A primera vista, parecía que el diablo había ganado: el Hijo de Dios colgaba muerto de un madero. Pero fue exactamente al revés.',
        { h: 'El desfile triunfal' },
        'Pablo usa una imagen que sus lectores conocían bien. Cuando un general romano vencía en una gran guerra, Roma le concedía un triunfo: un desfile por las calles en el que el vencedor iba en su carro y detrás marchaban los reyes cautivos y los despojos, expuestos a la vista de todos. Pablo dice que en la cruz Cristo, «despojando a los principados y a las potestades, los exhibió públicamente, triunfando sobre ellos» (Col 2:15). Lo que parecía la derrota de Jesús fue, en realidad, la derrota pública de los poderes del mal.',
        { h: 'Cómo los venció' },
        'El versículo anterior explica cómo. El diablo tenía un arma contra nosotros: nuestros pecados, «el acta de los decretos que había contra nosotros». Cristo la anuló «clavándola en la cruz» (Col 2:14). Al quitar la culpa, quitó al acusador su argumento. Por eso Apocalipsis dice que los creyentes vencen al acusador «por medio de la sangre del Cordero» (Ap 12:11). Hebreos agrega que por medio de la muerte destruyó al que tenía el imperio de la muerte, y libró a los que por temor a la muerte vivían como esclavos (He 2:14-15). El que muere en Cristo ya no muere en la culpa ni en el poder del enemigo.',
        { h: 'Una victoria para vivir' },
        'Esta verdad tiene consecuencias prácticas. El creyente no pelea para conseguir la victoria, sino desde la victoria que Cristo ya ganó. Jesús dio a sus discípulos autoridad sobre los demonios (Lc 10:17-19), y la iglesia primitiva echaba fuera espíritus malos en su nombre (Hch 16:18). Al mismo tiempo, la guerra espiritual no consiste en ritos ni fórmulas, sino en vestirse de toda la armadura de Dios: la verdad, la justicia, el evangelio, la fe, la salvación, la Palabra y la oración (Ef 6:10-18). El enemigo sigue activo, pero es un enemigo vencido. Su derrota final llegará cuando sea lanzado al lago de fuego (Ap 20:10).',
        { ejercicio: {
          pregunta: 'Según Colosenses 2:14-15, ¿cómo venció Cristo a los poderes del mal en la cruz?',
          opciones: [
            { t: 'Quitando nuestra culpa, que era el arma con que el enemigo nos acusaba.', ok: true, por_que: 'El acta de los decretos contra nosotros fue clavada en la cruz: sin culpa, el acusador pierde su poder.' },
            { t: 'Con un combate físico contra Satanás en el momento de morir.', ok: false, por_que: 'El texto no describe un combate físico: la victoria está en el perdón de los pecados.' },
            { t: 'Haciendo que Satanás dejara de existir en ese momento.', ok: false, por_que: 'Satanás sigue activo (1 P 5:8); su destino final está anunciado para el fin (Ap 20:10).' }
          ],
          explicacion: 'La sangre de Cristo quita la culpa, y con ella el derecho del acusador sobre el creyente.'
        } }
      ],
      pensar: 'Si Cristo ya venció en la cruz, ¿estás peleando tus batallas espirituales desde el miedo o desde su victoria?'
    },
    {
      id: 'por-quien', n: '¿Por quién murió Cristo?', ref: 'Juan 3:16; 1 Juan 2:2; 1 Timoteo 2:4-6; 2 Pedro 3:9; Juan 10:11, 15; Efesios 5:25',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1jn/2/2', ref: '1 Juan 2:2' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los textos de cada lado',
          cab: ['Murió por todos', 'Murió por los suyos'],
          filas: [
            ['De tal manera amó Dios al mundo (Jn 3:16)', 'Su vida da por las ovejas (Jn 10:11)'],
            ['Por los de todo el mundo (1 Jn 2:2)', 'Cristo amó a la iglesia, y se entregó a sí mismo por ella (Ef 5:25)'],
            ['Se dio a sí mismo en rescate por todos (1 Ti 2:6)', 'Él salvará a su pueblo de sus pecados (Mt 1:21)'],
            ['Para que por la gracia de Dios gustase la muerte por todos (He 2:9)', 'La iglesia del Señor, la cual él ganó por su propia sangre (Hch 20:28)'],
            ['Aun negarán al Señor que los rescató (2 P 2:1)', 'Para llevar los pecados de muchos (He 9:28)']
          ],
          nota: 'Los dos grupos de textos son verdad: la pregunta es cómo se relacionan.'
        } }
      ],
      texto: [
        'Todos los cristianos evangélicos creen que la muerte de Cristo tiene valor suficiente para salvar a todo el mundo, y que solo se salvan los que creen. La pregunta que divide a algunos es otra: ¿cuál fue la intención de Dios al enviar a Cristo a la cruz? ¿Murió por todos los seres humanos, o solo por los que Dios eligió para salvación?',
        { posturas: {
          titulo: '¿Murió Cristo por todos o solo por los elegidos?',
          a: { n: 'Expiación limitada o particular', t: 'La tradición reformada, que sigue a Calvino y al Sínodo de Dort (1619), enseña que Cristo murió con la intención de salvar a los elegidos, y que su muerte asegura con certeza su salvación. Si Cristo hubiera pagado por los pecados de todos, dicen, todos se salvarían, porque Dios no cobraría dos veces la misma deuda. Leen «el mundo» y «todos» como personas de toda clase y nación, no cada individuo.' },
          b: { n: 'Expiación ilimitada o universal', t: 'La tradición arminiana y wesleyana, y con ella la línea pentecostal clásica, enseña que Cristo murió por todos los seres humanos sin excepción, y que la salvación se aplica a los que creen. Dios quiere que todos sean salvos (1 Ti 2:4) y no quiere que ninguno perezca (2 P 3:9). Juan dice que Cristo es la propiciación no solo por nuestros pecados, «sino también por los de todo el mundo» (1 Jn 2:2), y Pedro habla de falsos maestros que niegan al Señor que los rescató (2 P 2:1).' },
          c: 'Este recurso sigue la segunda postura. Los textos que dicen que Cristo murió por sus ovejas o por su iglesia no niegan que muriera por otros: muestran su amor especial por los suyos, como un esposo que da su vida por su esposa sin que eso signifique que no ame a nadie más. La muerte de Cristo hace posible la salvación de todos y la asegura para todos los que creen. Así se puede predicar a cualquier persona con verdad: «Cristo murió por ti».'
        } },
        { h: 'Lo que tienen en común' },
        'Es importante no exagerar la diferencia. Ninguna de las dos posturas enseña que todos se salvarán, y las dos predican el evangelio a toda criatura. Los reformados también creen que la invitación es sincera y universal, y los arminianos también creen que nadie viene a Cristo sin la obra de la gracia de Dios. Grandes misioneros y evangelistas han salido de ambas tradiciones. Spurgeon era calvinista; Wesley, arminiano.',
        { h: 'Por qué importa para la misión' },
        'La convicción de que Cristo murió por todos impulsa la evangelización. Si Dios amó al mundo de tal manera, ninguna persona está fuera del alcance de su amor: ni el más pecador, ni el más lejano, ni el de otra cultura. Pablo dice que el amor de Cristo nos constriñe, porque «uno murió por todos» (2 Co 5:14), y por eso somos embajadores que ruegan a todos: «Reconciliaos con Dios» (2 Co 5:20).',
        { ejercicio: {
          pregunta: '¿En qué están de acuerdo las dos posturas sobre el alcance de la expiación?',
          opciones: [
            { t: 'En que la muerte de Cristo tiene valor suficiente para todos, que solo se salvan los que creen y que el evangelio debe predicarse a todos.', ok: true, por_que: 'La diferencia está en la intención de la cruz, no en su valor ni en el mandato de predicar.' },
            { t: 'En que al final todos los seres humanos se salvarán.', ok: false, por_que: 'Ninguna de las dos enseña el universalismo: las dos afirman que solo se salvan los que creen.' },
            { t: 'En que no hace falta predicar el evangelio a todas las naciones.', ok: false, por_que: 'Las dos tradiciones han producido grandes misioneros y obedecen la gran comisión.' }
          ],
          explicacion: 'Cristo murió por todos, y la salvación es de todos los que creen.'
        } }
      ],
      pensar: 'Si Cristo murió por todos, no hay nadie a quien no puedas decirle «Cristo murió por ti». ¿A quién necesitas decírselo esta semana?'
    },
    {
      id: 'sanidad', n: 'Sanidad en la expiación', ref: 'Isaías 53:4-5; Mateo 8:16-17; 1 Pedro 2:24; Santiago 5:14-16; Romanos 8:23; 2 Timoteo 4:20',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/8/16-17', ref: 'Mateo 8:16-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los textos lado a lado',
          cab: ['Isaías 53', 'Su uso en el Nuevo Testamento'],
          filas: [
            ['Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores (Is 53:4)', 'El mismo tomó nuestras enfermedades, y llevó nuestras dolencias (Mt 8:17), aplicado a sanidades físicas'],
            ['Por su llaga fuimos nosotros curados (Is 53:5)', 'Por cuya herida fuisteis sanados (1 P 2:24), en un contexto que habla del pecado'],
            ['Habiendo él llevado el pecado de muchos (Is 53:12)', 'Llevó él mismo nuestros pecados en su cuerpo sobre el madero (1 P 2:24)']
          ],
          nota: 'El hebreo de Isaías 53:4 usa palabras que en otros pasajes significan enfermedad y dolor físico (Dt 28:61; Jer 6:7).'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../movimiento-pentecostal/img/carpa-sanidad.webp', alt: 'Culto en una carpa evangelística; un grupo de creyentes ora con imposición de manos por un enfermo', pie: 'La oración por los enfermos ha sido parte del culto pentecostal desde sus comienzos (Stg 5:14-15).', origen: 'ia' }
      ],
      texto: [
        'Las Asambleas de Dios incluyen la sanidad divina entre sus verdades fundamentales: la sanidad divina es parte integral del evangelio, la liberación de la enfermedad ha sido provista en la expiación y es privilegio de todos los creyentes. Esta estación examina sus textos, la otra lectura y el equilibrio pastoral que la acompaña.',
        { h: 'Los textos' },
        'Isaías 53 dice del siervo: «Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores… y por su llaga fuimos nosotros curados» (Is 53:4-5). Las palabras hebreas del versículo 4 se usan en otros pasajes para enfermedades y dolores físicos. Mateo, al contar que Jesús sanó a todos los enfermos en Capernaúm, dice que lo hizo «para que se cumpliese lo dicho por el profeta Isaías, cuando dijo: El mismo tomó nuestras enfermedades, y llevó nuestras dolencias» (Mt 8:17). Es decir, el mismo Nuevo Testamento aplica Isaías 53 a la sanidad del cuerpo.',
        { h: 'Por qué la sanidad está en la cruz' },
        'La enfermedad y la muerte entraron al mundo por el pecado (Ro 5:12), y la salvación que Cristo trae alcanza a toda la persona: Jesús perdona y sana a la vez (Mr 2:5-12), y la palabra griega sózo significa tanto salvar como sanar (Mr 5:34). Por eso Santiago enseña a orar por los enfermos con la promesa de que «la oración de fe salvará al enfermo, y el Señor lo levantará» (Stg 5:15). Como el perdón, es un regalo de la gracia.',
        { posturas: {
          titulo: '¿Está la sanidad del cuerpo provista en la expiación?',
          a: { n: 'Solo en sentido final', t: 'Muchos evangélicos no pentecostales enseñan que la cruz asegura la sanidad completa, pero en la resurrección del cuerpo (Ro 8:23). Señalan que 1 Pedro 2:24 aplica Isaías 53:5 al pecado, y que Mateo 8:17 se cumplió en el ministerio de Jesús, antes de la cruz. Dios puede sanar hoy cuando quiere, pero no lo ha prometido en cada caso.' },
          b: { n: 'Provista en la expiación para hoy', t: 'La línea pentecostal clásica enseña que la sanidad fue provista en la cruz y está disponible ahora por la fe, como anticipo de la redención final del cuerpo. Mateo aplica Isaías 53:4 a enfermedades físicas, y la oración por los enfermos es un mandato para la iglesia de todos los tiempos (Stg 5:14-16; Mr 16:18).' },
          c: 'Este recurso sigue la segunda postura, que es la de las Asambleas de Dios. Las dos lecturas coinciden en algo importante: la cruz es la fuente de toda bendición, incluida la resurrección del cuerpo, y Dios sigue sanando hoy.'
        } },
        { h: 'El equilibrio pastoral' },
        'Que la sanidad esté provista no significa que todos sean sanados ahora. Pablo dejó a Trófimo enfermo en Mileto (2 Ti 4:20), recomendó a Timoteo un remedio para su estómago (1 Ti 5:23) y aceptó que el Señor no le quitara su aguijón (2 Co 12:7-9). Usar médicos y medicinas no es falta de fe; Lucas era médico. Y nunca se debe culpar a un enfermo de su enfermedad por falta de fe. Así se distingue esta enseñanza de la «confesión positiva» y del evangelio de la prosperidad, que prometen salud garantizada a cambio de fe o de dinero.',
        { ir: { t: 'Ver «El evangelio de la prosperidad» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#discernimiento/1' } }
      ],
      pensar: 'Oramos con fe porque Cristo llevó nuestras enfermedades, y seguimos confiando cuando la sanidad no llega porque la redención del cuerpo es segura. ¿Cómo puedes vivir las dos verdades a la vez, en tu vida y al acompañar a otros?'
    },
    {
      id: 'teorias', n: 'Cómo se ha explicado la cruz en la historia', ref: 'Marcos 10:45; Romanos 3:25-26; Colosenses 2:15; 1 Pedro 2:21-24; 1 Juan 4:9-10',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las principales explicaciones de la expiación',
          cab: ['Explicación', 'Quién y cuándo', 'Qué subraya', 'Límite'],
          filas: [
            ['Recapitulación', 'Ireneo de Lyon, hacia 180', 'Cristo recorre la vida humana y obedece donde Adán falló', 'Explica la encarnación más que la cruz'],
            ['Rescate', 'Orígenes y otros padres, siglos III–IV', 'Cristo fue el precio que nos liberó del poder del diablo', 'Algunos llegaron a decir que el pago se hizo al diablo'],
            ['Satisfacción', 'Anselmo de Canterbury, hacia 1098', 'Cristo restaura el honor de Dios ofendido por el pecado', 'Piensa en el honor de un señor feudal más que en la ley'],
            ['Influencia moral', 'Pedro Abelardo, siglo XII', 'La cruz muestra el amor de Dios y mueve al pecador a amarle', 'Por sí sola no explica por qué era necesaria'],
            ['Sustitución penal', 'Lutero y Calvino, siglo XVI', 'Cristo recibió en nuestro lugar el castigo del pecado', 'Si se aísla, puede olvidar la victoria y el ejemplo'],
            ['Gubernamental', 'Hugo Grocio, 1617', 'Dios muestra en la cruz la seriedad de su ley', 'Debilita la idea de un pago real'],
            ['Cristo vencedor', 'Gustaf Aulén le dio nombre en 1931', 'La cruz es la victoria sobre el pecado, la muerte y el diablo', 'Necesita explicar cómo se logra la victoria']
          ],
          nota: 'Las fechas son aproximadas. Las explicaciones no siempre se excluyen: muchas recogen un aspecto verdadero.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1jn/4/9-10', ref: '1 Juan 4:9-10' }
      ],
      texto: [
        'La iglesia nunca definió la doctrina de la expiación en un concilio, como hizo con la Trinidad o con las dos naturalezas de Cristo. A lo largo de los siglos, los teólogos propusieron distintas explicaciones de cómo la muerte de Cristo nos salva. La tabla resume las principales.',
        { h: 'Los primeros siglos' },
        'Ireneo de Lyon, hacia el año 180, enseñó que Cristo recapituló, es decir, volvió a recorrer la historia humana: donde Adán desobedeció junto a un árbol, Cristo obedeció en un madero. Otros padres de la iglesia hablaron de la cruz como un rescate, tomando las palabras de Jesús en Marcos 10:45. Algunos llevaron la imagen demasiado lejos, preguntando a quién se pagó el rescate, y respondieron que al diablo. La Biblia no dice eso: el rescate es el precio de nuestra libertad, no un pago al enemigo.',
        { h: 'De la Edad Media a la Reforma' },
        'Anselmo de Canterbury, hacia 1098, explicó la cruz como satisfacción: el pecado ofende el honor de Dios, y solo el Dios-hombre podía dar una satisfacción infinita. Poco después, Pedro Abelardo subrayó que la cruz muestra el amor de Dios y despierta nuestro amor. Los reformadores, Lutero y Calvino, desarrollaron la idea de Anselmo a partir de la Escritura: Cristo no solo restauró un honor ofendido, sino que recibió en nuestro lugar el castigo que la ley de Dios exige. Es la sustitución penal.',
        { h: 'Cómo leerlas hoy' },
        'Muchas de estas explicaciones recogen un aspecto verdadero de lo que la Biblia enseña. La cruz es una victoria sobre los poderes del mal (Col 2:15), una demostración del amor de Dios (1 Jn 4:9-10), un ejemplo para los creyentes (1 P 2:21) y un rescate (Mr 10:45). Pero el aspecto que explica todos los demás es la sustitución: Cristo venció al diablo porque quitó la culpa; la cruz muestra el amor de Dios porque Cristo murió en nuestro lugar. Sin la sustitución, la cruz sería un ejemplo conmovedor, pero no una salvación. Por eso este recurso pone la sustitución en el centro, sin olvidar las otras dimensiones.',
        { ejercicio: {
          pregunta: '¿Por qué la sola idea de la influencia moral no basta para explicar la cruz?',
          opciones: [
            { t: 'Porque no explica por qué era necesario que Cristo muriera; un ejemplo de amor no quita la culpa.', ok: true, por_que: 'La cruz muestra el amor de Dios precisamente porque Cristo murió en nuestro lugar (Ro 5:8).' },
            { t: 'Porque la cruz no tiene nada que ver con el amor de Dios.', ok: false, por_que: '1 Juan 4:9-10 dice que en la cruz se mostró el amor de Dios: la influencia moral recoge una verdad.' },
            { t: 'Porque fue propuesta en la Edad Media.', ok: false, por_que: 'La fecha de una idea no la hace verdadera ni falsa; lo que importa es si explica lo que dice la Escritura.' }
          ],
          explicacion: 'La cruz es amor, victoria y ejemplo, porque antes es sustitución.'
        } }
      ],
      pensar: 'Cada explicación de la cruz destaca una faceta distinta. ¿Cuál de ellas te ha conmovido más en tu vida cristiana, y cuál necesitas conocer mejor?'
    }
  ];

  /* ---------------- VI. Resucitado y exaltado ---------------- */
  const exaltado = [
    {
      id: 'descenso', n: '«Descendió a los infiernos»', ref: 'Lucas 23:43, 46; Hechos 2:27-31; Efesios 4:8-10; 1 Pedro 3:18-20; 4:6; Mateo 12:40',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que dice la Escritura sobre los tres días',
          cab: ['Texto', 'Qué dice'],
          filas: [
            ['Lc 23:43', 'Al malhechor arrepentido: hoy estarás conmigo en el paraíso'],
            ['Lc 23:46', 'Padre, en tus manos encomiendo mi espíritu'],
            ['Mt 12:40', 'Tres días y tres noches en el corazón de la tierra'],
            ['Hch 2:27, 31', 'Su alma no fue dejada en el Hades, ni su carne vio corrupción'],
            ['Ef 4:9', 'Había descendido primero a las partes más bajas de la tierra'],
            ['1 P 3:18-20', 'Vivificado en espíritu, fue y predicó a los espíritus encarcelados que desobedecieron en los días de Noé']
          ],
          nota: 'El Credo de los Apóstoles dice «descendió a los infiernos», pero la frase se agregó tarde, en el siglo IV, y en latín inferos significa «el lugar de los muertos», no el infierno de castigo.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1p/3/18-20', ref: '1 Pedro 3:18-20' }
      ],
      texto: [
        'Entre la muerte de Jesús el viernes y su resurrección el domingo, su cuerpo estuvo en la tumba. ¿Y su alma? Muchos cristianos confiesan en el Credo de los Apóstoles que Cristo «descendió a los infiernos». La frase ha producido muchas preguntas. Esta estación reúne lo que dice la Biblia, que no es mucho, y las principales maneras de entenderlo.',
        { h: 'Lo que es claro' },
        'Jesús murió de verdad: su cuerpo fue sepultado y su espíritu se separó del cuerpo, como ocurre con toda persona que muere. En la cruz dijo: «Padre, en tus manos encomiendo mi espíritu» (Lc 23:46), y al malhechor arrepentido le prometió: «hoy estarás conmigo en el paraíso» (Lc 23:43). Pedro, citando el salmo 16, dice que su alma no fue dejada en el Hades, el lugar de los muertos, ni su carne vio corrupción (Hch 2:31). Su obra de expiación terminó en la cruz: «Consumado es» (Jn 19:30). No siguió sufriendo por nuestros pecados después de morir.',
        { h: 'Lo que se discute' },
        'Pedro escribe que Cristo, «vivificado en espíritu», fue y «predicó a los espíritus encarcelados» que desobedecieron en los días de Noé (1 P 3:18-20). Es uno de los pasajes más difíciles del Nuevo Testamento. Pablo dice que Cristo había descendido primero «a las partes más bajas de la tierra» (Ef 4:9).',
        { posturas: {
          titulo: '¿Qué significa 1 Pedro 3:19?',
          a: { n: 'Cristo predicó por medio de Noé', t: 'Una lectura entiende que el Espíritu de Cristo predicó por medio de Noé a la gente de su tiempo, que ahora está encarcelada en el lugar de los muertos (2 P 2:5 llama a Noé «pregonero de justicia»). No habría un descenso de Cristo entre su muerte y su resurrección.' },
          b: { n: 'Cristo proclamó su victoria en el mundo de los muertos', t: 'Otra lectura, muy extendida, entiende que entre su muerte y su resurrección, o al resucitar, Cristo proclamó su victoria a espíritus rebeldes, quizá los ángeles caídos de Génesis 6. La palabra «predicó» significaría proclamar, no ofrecer una segunda oportunidad de salvación.' },
          c: 'Este recurso considera que las dos lecturas son posibles y que ninguna doctrina debe apoyarse en este pasaje oscuro. Lo que el pasaje no enseña es una segunda oportunidad después de la muerte: Hebreos 9:27 dice que está establecido morir una sola vez, y después el juicio. Algunos maestros también enseñaron que Cristo sufrió en el infierno a manos de los demonios para completar la salvación; esa idea contradice el «Consumado es» y la promesa del paraíso.'
        } },
        { ejercicio: {
          pregunta: '¿Qué enseñanza contradice claramente la Escritura sobre los días entre la cruz y la resurrección?',
          opciones: [
            { t: 'Que Cristo siguió sufriendo por nuestros pecados en el infierno después de morir.', ok: true, por_que: 'Jesús dijo «Consumado es» (Jn 19:30) y prometió al malhechor el paraíso ese mismo día (Lc 23:43).' },
            { t: 'Que el cuerpo de Jesús estuvo en la tumba.', ok: false, por_que: 'Eso es lo que dicen los evangelios: fue sepultado por José de Arimatea.' },
            { t: 'Que su alma no fue dejada en el Hades.', ok: false, por_que: 'Eso lo dice Pedro en Hechos 2:31, citando el Salmo 16.' }
          ],
          explicacion: 'La expiación terminó en la cruz; lo que siguió fue la victoria.'
        } }
      ],
      pensar: 'Jesús prometió a un malhechor arrepentido: «hoy estarás conmigo en el paraíso». ¿Qué consuelo te da esa promesa frente a tu propia muerte o la de quienes amas?'
    },
    {
      id: 'tumba-vacia', n: 'La tumba vacía y las apariciones', ref: 'Mateo 28:1-10; Marcos 16:1-8; Lucas 24; Juan 20–21; 1 Corintios 15:3-8',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tumba-vacia.webp', alt: 'Al amanecer, en un huerto con olivos, la entrada de una tumba excavada en la roca con una gran piedra redonda corrida a un lado; tres mujeres con velos y frascos de especias se detienen asombradas ante la abertura vacía', pie: 'Las mujeres fueron al sepulcro el primer día de la semana, muy de mañana, y encontraron la piedra removida (Mr 16:1-4).', origen: 'ia', foco: '50% 55%' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las apariciones del resucitado',
          cab: ['A quién', 'Dónde', 'Texto'],
          filas: [
            ['María Magdalena', 'Junto al sepulcro', 'Jn 20:11-18; Mr 16:9'],
            ['Las otras mujeres', 'Camino de la ciudad', 'Mt 28:9-10'],
            ['Pedro (Cefas)', 'Jerusalén', 'Lc 24:34; 1 Co 15:5'],
            ['Dos discípulos', 'Camino a Emaús', 'Lc 24:13-35'],
            ['Los discípulos sin Tomás', 'Jerusalén, de noche', 'Lc 24:36-43; Jn 20:19-23'],
            ['Los once con Tomás', 'Jerusalén, ocho días después', 'Jn 20:26-29'],
            ['Siete discípulos', 'Junto al mar de Galilea', 'Jn 21:1-23'],
            ['Más de quinientos hermanos a la vez', 'Probablemente en Galilea', '1 Co 15:6'],
            ['Jacobo, el hermano del Señor', 'Sin lugar indicado', '1 Co 15:7'],
            ['Los apóstoles, en la ascensión', 'Monte de los Olivos', 'Hch 1:3-11'],
            ['Pablo', 'Camino a Damasco', 'Hch 9:3-6; 1 Co 15:8']
          ],
          nota: 'Durante cuarenta días se presentó vivo «con muchas pruebas indubitables» (Hch 1:3).'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1co/15/3-8', ref: '1 Corintios 15:3-8' }
      ],
      texto: [
        'El domingo por la mañana, unas mujeres que habían seguido a Jesús desde Galilea fueron al sepulcro a ungir su cuerpo. Se preguntaban quién les quitaría la gran piedra de la entrada. Al llegar, la piedra estaba removida y el cuerpo no estaba. Un ángel les dijo: «No está aquí, pues ha resucitado, como dijo» (Mt 28:6). Así comienza el acontecimiento central de la fe cristiana.',
        { h: 'La tumba vacía' },
        'Los cuatro evangelios cuentan que la tumba estaba vacía. Pedro y Juan corrieron al sepulcro y vieron los lienzos puestos allí y el sudario enrollado aparte (Jn 20:6-7): no parecía un robo, porque nadie se habría detenido a desenvolver el cuerpo. Las autoridades judías no negaron que la tumba estuviera vacía; pagaron a los soldados para que dijeran que los discípulos habían robado el cuerpo mientras ellos dormían (Mt 28:11-15). Un detalle es significativo: los primeros testigos fueron mujeres, cuyo testimonio en aquella cultura tenía poco valor legal. Nadie que inventara la historia habría elegido esos testigos.',
        { h: 'Las apariciones' },
        'Pero la tumba vacía, por sí sola, no produjo la fe. Lo que transformó a los discípulos fue ver a Jesús vivo. La tabla reúne las apariciones. Jesús se apareció a personas solas y a grupos, en casas y al aire libre, en Jerusalén y en Galilea, de día y de noche. Comió con ellos, se dejó tocar y les habló durante cuarenta días. A Tomás, que dudaba, le dijo: «Pon aquí tu dedo, y mira mis manos» (Jn 20:27).',
        { h: 'Un testimonio temprano' },
        'Pablo escribió 1 Corintios hacia el año 55, pero en el capítulo 15 transmite un resumen que él mismo había recibido, probablemente pocos años después de la cruz: que Cristo murió, fue sepultado, resucitó al tercer día y apareció a Cefas, a los doce, a más de quinientos hermanos a la vez, a Jacobo y a todos los apóstoles (1 Co 15:3-7). Pablo agrega que muchos de esos quinientos todavía vivían: cualquiera podía preguntarles.',
        { h: 'Un cuerpo glorificado' },
        'Jesús no resucitó como un espíritu ni volvió a la misma vida mortal, como Lázaro, que después volvió a morir. Resucitó con su mismo cuerpo, con las marcas de los clavos, pero transformado: ya no podía morir, aparecía y desaparecía, no era siempre reconocido de inmediato. Es el primero de una nueva creación.'
      ],
      pensar: 'María Magdalena reconoció a Jesús cuando Él la llamó por su nombre (Jn 20:16). ¿Qué significa para ti que el Resucitado te conoce y te llama por tu nombre?'
    },
    {
      id: 'alternativas', n: 'Las explicaciones alternativas', ref: 'Mateo 27:62-66; 28:11-15; Hechos 2:24-32; 4:18-20; 1 Corintios 15:12-19',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las explicaciones alternativas y sus problemas',
          cab: ['Explicación', 'Qué propone', 'Problema'],
          filas: [
            ['El robo', 'Los discípulos robaron el cuerpo', 'Había guardia y sello (Mt 27:66); los discípulos sufrieron y murieron por lo que sabían que era mentira'],
            ['La tumba equivocada', 'Las mujeres fueron a otra tumba', 'José de Arimatea y las autoridades sabían dónde estaba; bastaba mostrar el cuerpo'],
            ['El desmayo', 'Jesús no murió, solo se desmayó y se recuperó', 'Los soldados romanos sabían matar; la lanza en el costado (Jn 19:34); un herido moribundo no inspira fe en la resurrección'],
            ['Las alucinaciones', 'Los discípulos tuvieron visiones', 'Las alucinaciones son individuales, no de quinientos a la vez; no explican la tumba vacía'],
            ['La leyenda', 'La historia creció con los años', 'El resumen de 1 Corintios 15 es de pocos años después; los testigos vivían']
          ],
          nota: 'El recurso Apologética: preguntas y evidencias, en preparación, desarrollará estas preguntas.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-pedro-sanedrin.webp', alt: 'Pedro y Juan, de pie ante el Sanedrín, hablan con firmeza', pie: 'Los mismos que habían huido proclamaron la resurrección ante el Sanedrín: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20).', origen: 'ia' }
      ],
      texto: [
        'Desde el principio se buscaron explicaciones para la tumba vacía que no fueran la resurrección. La primera la registra el mismo Mateo: las autoridades dijeron que los discípulos habían robado el cuerpo (Mt 28:13). A lo largo de la historia se han propuesto otras. La tabla resume las principales y sus problemas. El recurso Apologética, hoy en preparación, tratará estas preguntas con más detalle.',
        { h: 'Los hechos que hay que explicar' },
        'Cualquier explicación tiene que dar cuenta de varios hechos que reconocen incluso muchos historiadores no creyentes. Jesús murió crucificado. Fue sepultado en una tumba conocida. Al tercer día la tumba estaba vacía. Sus discípulos, que habían huido aterrados, afirmaron haberlo visto vivo y cambiaron de manera radical: dejaron el miedo y predicaron en la misma Jerusalén donde lo habían crucificado. Jacobo, el hermano de Jesús, que no creía en Él (Jn 7:5), llegó a ser líder de la iglesia. Saulo, un perseguidor, se convirtió en apóstol. Y judíos que guardaban el sábado comenzaron a reunirse el primer día de la semana.',
        { h: 'Por qué no bastan' },
        'Si los discípulos robaron el cuerpo, sabían que la resurrección era mentira, y sin embargo sufrieron cárcel, azotes y muerte por anunciarla. Hay quienes mueren por una mentira que creen verdad, pero nadie muere por lo que sabe que es mentira. Si Jesús solo se desmayó, un hombre medio muerto, sin atención médica, no habría convencido a nadie de que había vencido la muerte. Si fueron alucinaciones, la tumba seguía ocupada, y las autoridades habrían mostrado el cuerpo. Y la leyenda necesita tiempo, pero el resumen de 1 Corintios 15 circulaba pocos años después de la cruz, cuando los testigos todavía vivían.',
        { h: 'La fe y la evidencia' },
        'Las evidencias no reemplazan la fe ni obligan a nadie a creer: Jesús dijo que algunos no creerían «aunque alguno se levantare de los muertos» (Lc 16:31). Pero muestran que la fe cristiana no es un salto al vacío. Lucas dice que Jesús se presentó vivo «con muchas pruebas indubitables» (Hch 1:3). La resurrección es un hecho de la historia que pide una respuesta personal.',
        { ejercicio: {
          pregunta: '¿Por qué la teoría del robo del cuerpo es difícil de sostener?',
          opciones: [
            { t: 'Porque los discípulos sufrieron y murieron por anunciar algo que, si hubieran robado el cuerpo, sabrían que era falso.', ok: true, por_que: 'Nadie entrega su vida por lo que sabe que es mentira; los apóstoles prefirieron la cárcel antes que callar (Hch 4:20).' },
            { t: 'Porque la tumba nunca estuvo vacía.', ok: false, por_que: 'Las mismas autoridades reconocieron que estaba vacía al inventar la historia del robo (Mt 28:13).' },
            { t: 'Porque Jesús no fue sepultado.', ok: false, por_que: 'Los cuatro evangelios y 1 Corintios 15:4 afirman que fue sepultado.' }
          ],
          explicacion: 'El cambio de los discípulos es uno de los argumentos más fuertes a favor de la resurrección.'
        } }
      ],
      pensar: 'Los apóstoles dijeron: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20). ¿Qué te impide a ti hablar de lo que Cristo ha hecho en tu vida?'
    },
    {
      id: 'significado', n: 'Qué significa la resurrección', ref: '1 Corintios 15:12-28, 42-57; Romanos 1:4; 4:25; 6:4-11; 8:11; Hechos 17:31',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1co/15/17-20', ref: '1 Corintios 15:17-20' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que la resurrección significa',
          cab: ['Para…', 'Significa', 'Texto'],
          filas: [
            ['Cristo', 'Fue declarado Hijo de Dios con poder', 'Ro 1:4'],
            ['La cruz', 'El sacrificio fue aceptado: resucitó para nuestra justificación', 'Ro 4:25'],
            ['El creyente hoy', 'Vida nueva: andamos en vida nueva', 'Ro 6:4'],
            ['El cuerpo del creyente', 'Resucitará como el de Cristo: Él es las primicias', '1 Co 15:20-23'],
            ['El mundo', 'Dios juzgará al mundo por el hombre que resucitó', 'Hch 17:31'],
            ['La muerte', 'Ha sido vencida: ¿Dónde está, oh muerte, tu aguijón?', '1 Co 15:55']
          ],
          nota: 'Pablo dice que, sin resurrección, la fe es vana y aún estamos en nuestros pecados (1 Co 15:17).'
        } }
      ],
      texto: [
        'En Corinto había creyentes que negaban la resurrección de los muertos. Pablo les responde en el capítulo más largo dedicado al tema en todo el Nuevo Testamento. Su argumento comienza con una pregunta: si los muertos no resucitan, entonces Cristo tampoco resucitó. Y si Cristo no resucitó, todo se derrumba: «vuestra fe es vana; aún estáis en vuestros pecados» (1 Co 15:17). La fe cristiana se juega entera en este hecho.',
        { h: 'Para Cristo' },
        'La resurrección confirmó quién era Jesús. Pablo dice que fue «declarado Hijo de Dios con poder… por la resurrección de entre los muertos» (Ro 1:4). No llegó a ser Hijo de Dios al resucitar, pero la resurrección lo demostró ante todos. Pedro predicó en Pentecostés que Dios había hecho Señor y Cristo a este Jesús a quien ellos crucificaron (Hch 2:36). Lo que el mundo condenó como blasfemia, Dios lo vindicó.',
        { h: 'Para la salvación' },
        'Cristo «fue entregado por nuestras transgresiones, y resucitado para nuestra justificación» (Ro 4:25). La resurrección es el recibo que muestra que el pago fue aceptado. Un Cristo muerto sería un Cristo vencido, y su sacrificio, inútil. Además, el creyente participa de la resurrección de Cristo ya ahora: fue sepultado con Él en el bautismo, para andar en vida nueva (Ro 6:4). El mismo poder que levantó a Cristo de los muertos actúa en los que creen (Ef 1:19-20).',
        { h: 'Las primicias' },
        'Pablo usa una imagen del culto de Israel: «Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho» (1 Co 15:20). Las primicias eran la primera gavilla de la cosecha, que se ofrecía a Dios como anticipo y garantía de que vendría el resto (Lv 23:10-11). La resurrección de Cristo es la garantía de la resurrección de los suyos: «luego los que son de Cristo, en su venida» (1 Co 15:23). El cuerpo resucitado será incorruptible, glorioso, poderoso y espiritual, como el de Cristo (1 Co 15:42-44).',
        { h: 'Victoria sobre la muerte' },
        'Pablo termina con un grito de triunfo: «¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?» (1 Co 15:55). Para el creyente, la muerte ya no es el final, sino un sueño del que despertará. Por eso concluye: «estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano» (1 Co 15:58).',
        { ejercicio: {
          pregunta: '¿Qué enseña la imagen de las «primicias» en 1 Corintios 15:20-23?',
          opciones: [
            { t: 'Que la resurrección de Cristo es el anticipo y la garantía de la resurrección de los creyentes.', ok: true, por_que: 'Las primicias eran la primera gavilla, que garantizaba el resto de la cosecha (Lv 23:10-11).' },
            { t: 'Que Cristo fue el único que resucitará.', ok: false, por_que: 'Primicias implica que vendrá el resto: «luego los que son de Cristo, en su venida».' },
            { t: 'Que los creyentes ya resucitaron espiritualmente y no habrá resurrección del cuerpo.', ok: false, por_que: 'Pablo enseña una resurrección corporal futura (1 Co 15:42-44); Himeneo y Fileto erraban al decir que ya había ocurrido (2 Ti 2:18).' }
          ],
          explicacion: 'Lo que Dios hizo con Cristo es lo que hará con todos los que son de Él.'
        } }
      ],
      pensar: 'Pablo saca una conclusión práctica: vuestro trabajo en el Señor no es en vano (1 Co 15:58). ¿Qué servicio a Dios estás tentado a abandonar, y cómo te anima la resurrección a seguir?'
    },
    {
      id: 'ascension', n: 'La ascensión', ref: 'Lucas 24:50-53; Hechos 1:1-11; Juan 14:2-3; 16:7; Efesios 4:8-10; Hebreos 4:14',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-ascension.webp', alt: 'Los apóstoles en el monte de los Olivos miran al cielo mientras una nube oculta a Jesús que asciende', pie: '«Este mismo Jesús… así vendrá como le habéis visto ir al cielo» (Hch 1:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@hch/1/9-11', ref: 'Hechos 1:9-11' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Por qué la ascensión fue buena para nosotros',
          cab: ['Al ascender, Cristo…', 'Texto'],
          filas: [
            ['Fue a preparar lugar para los suyos', 'Jn 14:2-3'],
            ['Envió al Espíritu Santo', 'Os conviene que yo me vaya (Jn 16:7); Hch 2:33'],
            ['Dio dones a los hombres', 'Ef 4:8-11'],
            ['Entró como precursor y sumo sacerdote', 'He 4:14; 6:19-20'],
            ['Llevó nuestra humanidad al trono de Dios', 'He 2:9; Ef 2:6'],
            ['Dejó una promesa: volverá de la misma manera', 'Hch 1:11']
          ],
          nota: 'Lucas cuenta la ascensión dos veces: al final de su evangelio y al comienzo de Hechos.'
        } }
      ],
      texto: [
        'Cuarenta días después de resucitar, Jesús llevó a sus discípulos al monte de los Olivos, cerca de Betania. Les prometió el poder del Espíritu Santo y les mandó ser sus testigos hasta lo último de la tierra. Y entonces, «viéndolo ellos, fue alzado, y le recibió una nube que le ocultó de sus ojos» (Hch 1:9). Dos varones con vestiduras blancas les dijeron que el mismo Jesús volvería de la misma manera.',
        { h: 'Un hecho, no un símbolo' },
        'Lucas cuenta la ascensión como un acontecimiento visible: los discípulos vieron a Jesús subir. No fue una manera poética de decir que Jesús «se fue al corazón de los creyentes». El mismo Jesús, con su cuerpo resucitado, dejó la tierra y entró en la presencia del Padre. La nube recuerda la nube de gloria que acompañó a Israel en el desierto y llenó el tabernáculo: Jesús entró en la gloria de Dios.',
        { h: 'Os conviene que yo me vaya' },
        'Los discípulos podrían haber sentido la ascensión como una pérdida. Pero Lucas dice que volvieron a Jerusalén «con gran gozo» (Lc 24:52). Jesús les había explicado: «Os conviene que yo me vaya; porque si no me fuera, el Consolador no vendría a vosotros» (Jn 16:7). Mientras estaba en la tierra, Jesús podía estar en un solo lugar. Por medio del Espíritu, su presencia está con cada creyente en todo lugar. Diez días después de la ascensión llegó Pentecostés.',
        { h: 'Nuestra humanidad en el cielo' },
        'La ascensión significa también que hay un hombre glorificado en el trono del universo. Jesús no dejó su humanidad al subir: la llevó consigo. Hebreos dice que tenemos «un gran sumo sacerdote que traspasó los cielos» (He 4:14), y que entró detrás del velo como precursor nuestro (He 6:20). Donde está la cabeza, estará el cuerpo. Por eso Pablo dice que Dios nos hizo sentar con Él en los lugares celestiales (Ef 2:6).',
        { h: 'La promesa' },
        'La ascensión deja una promesa: «Este mismo Jesús… así vendrá como le habéis visto ir al cielo» (Hch 1:11). Se fue personal, corporal y visiblemente, y así volverá. Mientras tanto, los ángeles corrigen a los discípulos: no es tiempo de quedarse mirando al cielo, sino de ir a Jerusalén a esperar el poder y luego ser testigos.'
      ],
      pensar: 'Los ángeles preguntaron: «¿por qué estáis mirando al cielo?» (Hch 1:11). ¿Cómo se equilibra en tu vida la esperanza de su venida con la tarea de ser su testigo ahora?'
    },
    {
      id: 'diestra', n: 'A la diestra del Padre', ref: 'Salmo 110:1; Hechos 2:32-36; Romanos 8:34; Efesios 1:20-23; Hebreos 1:3; 7:25; 1 Juan 2:1',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperios-historia/img/integrador-pentecostes.webp', alt: 'Los discípulos reunidos en Jerusalén reciben el Espíritu Santo como lenguas de fuego', pie: 'Exaltado a la diestra de Dios, Jesús recibió del Padre la promesa del Espíritu y «ha derramado esto que vosotros veis y oís» (Hch 2:33).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@hch/2/32-36', ref: 'Hechos 2:32-36' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Cristo hace desde la diestra',
          cab: ['Cristo…', 'Texto'],
          filas: [
            ['Reina sobre todo principado y autoridad', 'Ef 1:20-22; 1 P 3:22'],
            ['Intercede por los suyos', 'Ro 8:34; He 7:25'],
            ['Es nuestro abogado cuando pecamos', '1 Jn 2:1'],
            ['Derrama el Espíritu Santo y bautiza con Él', 'Hch 2:33; Mt 3:11'],
            ['Da dones a la iglesia', 'Ef 4:8-12'],
            ['Espera hasta que sus enemigos sean puestos por estrado de sus pies', 'Sal 110:1; He 10:12-13']
          ],
          nota: 'El Salmo 110:1 es el versículo del Antiguo Testamento más citado en el Nuevo.'
        } }
      ],
      texto: [
        '«Jehová dijo a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies» (Sal 110:1). Es el versículo del Antiguo Testamento que más veces se cita o se menciona en el Nuevo. Jesús lo usó para mostrar que el Mesías era más que hijo de David (Mr 12:35-37), y los apóstoles lo usaron una y otra vez para explicar dónde está Jesús ahora y qué está haciendo.',
        { h: 'Sentado: la obra está hecha' },
        'Estar sentado a la diestra de un rey significaba compartir su autoridad y su honor. Hebreos dice que Cristo, después de efectuar la purificación de nuestros pecados, «se sentó a la diestra de la Majestad en las alturas» (He 1:3). Está sentado porque su sacrificio está terminado. Y reina: Dios lo sentó «sobre todo principado y autoridad y poder y señorío, y sobre todo nombre que se nombra» (Ef 1:21). Nada en el universo está fuera de su autoridad.',
        { h: 'Intercede' },
        'Desde la diestra, Cristo intercede por los suyos. Pablo pregunta: «¿Quién es el que condenará? Cristo es el que murió; más aun, el que también resucitó, el que además está a la diestra de Dios, el que también intercede por nosotros» (Ro 8:34). Cuando un creyente peca, «abogado tenemos para con el Padre, a Jesucristo el justo» (1 Jn 2:1). Antes de negarlo, Pedro escuchó que Jesús había rogado por él para que su fe no faltara (Lc 22:32). Así ora Cristo hoy por cada uno de los suyos.',
        { h: 'Derrama el Espíritu' },
        'En Pentecostés, Pedro explicó lo que estaba ocurriendo: Jesús, «exaltado por la diestra de Dios, y habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís» (Hch 2:33). El bautismo en el Espíritu Santo es obra del Cristo exaltado. Juan el Bautista lo había anunciado: «él os bautizará en Espíritu Santo y fuego» (Mt 3:11). El derramamiento del Espíritu, con las lenguas como señal, es la prueba de que Jesús está vivo y reina. Es una de las convicciones centrales del pentecostalismo: Jesús sigue bautizando con el Espíritu Santo a los que creen.',
        { h: 'Hasta que' },
        'El salmo dice «hasta que». Cristo reina, pero sus enemigos todavía no han sido puestos completamente bajo sus pies. «El postrer enemigo que será destruido es la muerte» (1 Co 15:26). La historia avanza hacia ese día.',
        { ejercicio: {
          pregunta: 'Según Hechos 2:33, ¿qué muestra el derramamiento del Espíritu en Pentecostés?',
          opciones: [
            { t: 'Que Jesús fue exaltado a la diestra de Dios y, desde allí, derramó el Espíritu prometido.', ok: true, por_que: 'Pedro une la exaltación de Jesús con el derramamiento: es su obra como Cristo exaltado.' },
            { t: 'Que los discípulos habían alcanzado un nivel espiritual por su propio esfuerzo.', ok: false, por_que: 'El Espíritu es «la promesa del Padre», un don recibido, no un logro humano.' },
            { t: 'Que Jesús había dejado de actuar y el Espíritu lo reemplazó.', ok: false, por_que: 'Es Jesús quien derrama el Espíritu: el Espíritu no lo reemplaza, sino que lo hace presente.' }
          ],
          explicacion: 'Pentecostés es la prueba de que Jesús vive, reina y sigue bautizando con el Espíritu Santo.'
        } }
      ],
      pensar: 'Cristo intercede por ti y te ofrece la llenura del Espíritu. ¿Vives con la conciencia de que tienes un abogado en el cielo y un poder prometido para servir en la tierra?'
    },
    {
      id: 'cabeza', n: 'Cabeza de la iglesia', ref: 'Mateo 16:18; Efesios 1:22-23; 4:11-16; 5:23-27; Colosenses 1:18; Apocalipsis 1:12-20',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-casa-iglesia.webp', alt: 'Una iglesia del siglo I reunida en una casa: hombres, mujeres y niños escuchan la lectura de las Escrituras y parten el pan', pie: 'La iglesia es el cuerpo de Cristo, y Él es la cabeza (Col 1:18).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Imágenes de Cristo y su iglesia',
          cab: ['Cristo es…', 'La iglesia es…', 'Texto'],
          filas: [
            ['La cabeza', 'Su cuerpo', 'Ef 1:22-23; Col 1:18'],
            ['El esposo', 'Su esposa', 'Ef 5:25-27; Ap 19:7'],
            ['La piedra angular', 'Un templo santo', 'Ef 2:20-22; 1 P 2:4-5'],
            ['El buen pastor', 'Su rebaño', 'Jn 10:14-16; 1 P 5:4'],
            ['La vid', 'Los pámpanos', 'Jn 15:5'],
            ['El constructor', 'Su obra: edificaré mi iglesia', 'Mt 16:18']
          ],
          nota: 'Cada imagen subraya un aspecto: vida, amor, solidez, cuidado, fruto y propiedad.'
        } }
      ],
      texto: [
        'En Cesarea de Filipo, después de la confesión de Pedro, Jesús dijo: «edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella» (Mt 16:18). Es la primera vez que aparece la palabra iglesia en los evangelios. La iglesia es obra de Cristo, le pertenece y Él la gobierna. El Nuevo Testamento usa varias imágenes para describir esa relación; la tabla reúne las principales.',
        { h: 'La cabeza y el cuerpo' },
        'La imagen más característica de Pablo es la del cuerpo. Cristo es «la cabeza del cuerpo que es la iglesia» (Col 1:18). En el pensamiento antiguo, la cabeza era la fuente de la dirección y de la vida. La iglesia recibe de Cristo su crecimiento (Ef 4:15-16), y cada creyente es un miembro con una función propia. Ningún líder humano es la cabeza de la iglesia: los apóstoles, profetas, evangelistas, pastores y maestros son dones que Cristo da para edificar el cuerpo (Ef 4:11-12), pero la cabeza es solo Él.',
        { h: 'El esposo' },
        'Pablo también presenta a Cristo como el esposo que amó a la iglesia «y se entregó a sí mismo por ella, para santificarla» (Ef 5:25-26). La cruz fue el precio de su amor por su esposa, y su meta es presentársela a sí mismo gloriosa, sin mancha ni arruga. Apocalipsis anuncia las bodas del Cordero (Ap 19:7). Esta imagen dice que la relación de Cristo con su pueblo no es solo de autoridad, sino de amor.',
        { h: 'En medio de los candeleros' },
        'Cuando Juan vio a Cristo glorificado en Patmos, lo vio andando en medio de siete candeleros de oro, que representaban a las siete iglesias (Ap 1:12-20). Cristo conocía cada iglesia: sus obras, sus luchas, sus pecados. Las elogió, las corrigió y les hizo promesas. Así sigue presente en su iglesia hoy, por medio de su Espíritu: la conoce, la cuida y la purifica. El recurso Apocalipsis estudia esas cartas.',
        'Que Cristo sea la cabeza significa que la iglesia no es un club ni una empresa, sino un cuerpo vivo que le obedece. La pregunta de toda iglesia no es qué queremos hacer, sino qué quiere la cabeza.',
        { ir: { t: 'Ver la ruta de las siete iglesias en Apocalipsis', a: '../../apocalipsis/' } }
      ],
      pensar: 'Si eres un miembro del cuerpo de Cristo, tienes una función. ¿Cuál es tu lugar en su cuerpo, y estás recibiendo de Él la vida para cumplirlo?'
    }
  ];

  window.__CRISTO.cruz = window.__CRISTO.cruz.concat(cruz2);
  window.__CRISTO.exaltado = exaltado;
})();
