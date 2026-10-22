/* Dios y la Trinidad · ruta IV. La Trinidad (ver encabezado en parte1.js) */
(() => {
  const trinidad = [
    {
      id: 'definicion', n: 'Un solo Dios en tres personas', ref: 'Deuteronomio 6:4; Mateo 28:19; 2 Corintios 13:14',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-escudo.svg', alt: 'Triángulo con el Padre, el Hijo y el Espíritu Santo en los vértices, unidos al centro por la palabra Dios con la frase «es»; los lados que unen a las personas dicen «no es»', pie: 'El escudo de la Trinidad, un diagrama usado desde la Edad Media: cada persona es Dios, y ninguna es la otra.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que la doctrina afirma',
          cab: ['Afirmación', 'Base bíblica', 'Lo que niega'],
          filas: [
            ['Hay un solo Dios', 'Dt 6:4; Is 45:5; 1 Co 8:4', 'Que haya tres dioses (triteísmo)'],
            ['El Padre es Dios', 'Jn 6:27; 1 Co 8:6', 'Que solo uno de los tres sea Dios'],
            ['El Hijo es Dios', 'Jn 1:1; 20:28; He 1:8', 'Que el Hijo sea una criatura (arrianismo)'],
            ['El Espíritu Santo es Dios', 'Hch 5:3-4; 1 Co 2:10-11', 'Que el Espíritu sea una fuerza impersonal'],
            ['Los tres son personas distintas', 'Mt 3:16-17; Jn 14:16; 17:5', 'Que sean solo tres modos o máscaras de uno (modalismo)'],
            ['Los tres son iguales y eternos', 'Jn 1:1; 17:5; He 9:14', 'Que uno sea más Dios que otro']
          ],
          nota: 'Una esencia divina, tres personas. Si se niega cualquiera de las seis afirmaciones, se cae en uno de los errores de la ruta V.'
        } }
      ],
      texto: [
        'La palabra Trinidad no aparece en la Biblia. Tampoco aparecen las palabras omnipresencia ni encarnación, y sin embargo expresan verdades que la Biblia enseña. Trinidad es el nombre que la iglesia dio, desde el siglo II, a lo que encontraba en la Escritura cuando la leía completa: que hay un solo Dios, y que el Padre, el Hijo y el Espíritu Santo son ese único Dios, sin ser la misma persona.',
        'La doctrina se puede resumir en una frase: un solo Dios en tres personas. O, dicho de otra manera, una sola esencia divina que subsiste eternamente como Padre, Hijo y Espíritu Santo, iguales en poder, en gloria y en eternidad. La tabla desarma esa frase en seis afirmaciones, cada una con su base bíblica. La doctrina de la Trinidad no es una idea agregada a la Biblia: es la única manera de sostener todas esas afirmaciones al mismo tiempo sin negar ninguna.',
        { h: '¿Qué significa «persona»?' },
        'Hay que tener cuidado con la palabra persona. Tres personas humanas, como Pedro, Juan y Santiago, son tres individuos separados, cada uno con su propio ser. Si la Trinidad fuera así, habría tres dioses. Cuando la teología dice que Dios es tres personas, quiere decir que en el único ser de Dios hay tres que se relacionan entre sí: se hablan, se aman, se envían y se glorifican el uno al otro. El Padre no es el Hijo, el Hijo no es el Espíritu, el Espíritu no es el Padre; pero los tres no son tres seres, sino el único Dios.',
        'El esquema, conocido desde la Edad Media como el escudo de la Trinidad, lo dice con flechas: cada persona «es» Dios, y cada una «no es» la otra. No explica cómo es posible; muestra qué se afirma.',
        { h: 'Un misterio revelado' },
        'La Trinidad es un misterio en el sentido bíblico de la palabra: una verdad que no podríamos haber descubierto por nuestra cuenta y que Dios nos reveló. Podemos conocerla y expresarla con exactitud, aunque no podamos comprenderla del todo. No es una contradicción, porque no dice que Dios sea uno y tres en el mismo sentido: es uno en esencia y tres en personas. Que no podamos imaginarlo no es extraño; lo extraño sería que el ser del Dios infinito cupiera en nuestra imaginación.',
        { ejercicio: {
          pregunta: '¿Cuál de estas frases expresa correctamente la doctrina de la Trinidad?',
          opciones: [
            { t: 'Un Dios que se manifiesta en tres formas distintas según la época.', ok: false, por_que: 'Esa es la idea del modalismo: un solo Dios que cambia de modo. La Biblia muestra a las tres personas a la vez, por ejemplo en el bautismo de Jesús.' },
            { t: 'Tres dioses que trabajan siempre de acuerdo.', ok: false, por_que: 'Eso es triteísmo. Contradice el Shemá: «Jehová uno es» (Deuteronomio 6:4).' },
            { t: 'Un solo Dios, que existe eternamente como Padre, Hijo y Espíritu Santo.', ok: true, por_que: 'Uno en esencia, tres en personas: así se sostienen todas las afirmaciones bíblicas a la vez.' }
          ],
          explicacion: 'La Trinidad no es tres dioses ni un Dios con tres máscaras, sino el único Dios que es Padre, Hijo y Espíritu Santo.'
        } }
      ],
      pensar: 'La Trinidad es un misterio que se puede conocer, aunque no comprender del todo. ¿Te cuesta adorar a un Dios que no cabe completo en tu entendimiento, o eso te lleva a adorarlo más?'
    },
    {
      id: 'antiguo', n: 'Indicios en el Antiguo Testamento', ref: 'Génesis 1:26; 3:22; 11:7; Isaías 6:8; 48:16; 61:1; Salmo 45:6-7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/26-27', ref: 'Génesis 1:26-27' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pasajes que el Nuevo Testamento ayuda a leer',
          cab: ['Pasaje', 'Qué se observa'],
          filas: [
            ['Gn 1:26; 3:22; 11:7', 'Dios habla en plural: «Hagamos», «uno de nosotros», «descendamos»'],
            ['Is 6:3, 8', 'Tres veces santo; «¿quién irá por nosotros?»'],
            ['Gn 16:13; Éx 3:2-6; Jue 13:21-22', 'El ángel de Jehová habla como Dios y es llamado Dios'],
            ['Sal 45:6-7 (He 1:8-9)', 'Al rey se le llama Dios, y Dios lo unge'],
            ['Sal 110:1 (Mt 22:43-45)', 'Jehová habla a «mi Señor», el Señor de David'],
            ['Is 48:16; 61:1 (Lc 4:18)', 'Jehová, su Espíritu y el enviado aparecen juntos'],
            ['Gn 1:2; Sal 139:7', 'El Espíritu de Dios actúa en la creación y está en todo lugar']
          ],
          nota: 'Ninguno de estos textos, por sí solo, enseña la Trinidad; juntos, y a la luz del Nuevo Testamento, la anticipan.'
        } }
      ],
      texto: [
        'El Antiguo Testamento insiste una y otra vez en que Dios es uno. Israel vivía rodeado de pueblos politeístas, y lo primero que tenía que aprender era que no había otros dioses. Por eso la Trinidad no se revela con claridad en el Antiguo Testamento: se revela en el Nuevo, cuando el Hijo se hace hombre y el Espíritu es derramado. Sin embargo, al volver a leer las Escrituras de Israel con los ojos del Nuevo Testamento, los cristianos encontraron que ya había indicios.',
        { h: '«Hagamos»' },
        'El primero está en la creación del ser humano: «Entonces dijo Dios: Hagamos al hombre a nuestra imagen» (Gn 1:26). El versículo siguiente vuelve al singular: «Y creó Dios al hombre a su imagen» (Gn 1:27). El mismo plural aparece después de la caída, «He aquí el hombre es como uno de nosotros» (Gn 3:22), y en Babel, «descendamos, y confundamos allí su lengua» (Gn 11:7). Isaías oye a Dios preguntar: «¿A quién enviaré, y quién irá por nosotros?» (Is 6:8).',
        { posturas: {
          titulo: '¿Qué significa el plural de Génesis 1:26?',
          a: { n: 'Plural de majestad o consulta con los ángeles', t: 'Algunos lo explican como un plural de majestad, como cuando un rey dice «nos» al hablar de sí mismo, o como Dios hablando con los ángeles de su corte celestial (1 R 22:19-22). Del mismo modo, el plural de la palabra Elohim sería una forma de expresar grandeza, no número.' },
          b: { n: 'Un primer indicio de la pluralidad en Dios', t: 'El hebreo bíblico no usa el plural de majestad con verbos en primera persona, y los ángeles no participaron en la creación del ser humano ni son la imagen según la cual fue hecho: el versículo 27 dice que fue creado «a imagen de Dios». El plural sugiere que en el único Dios hay más de uno que delibera.' },
          c: 'Este recurso entiende el plural como un indicio, no como una prueba. Por sí solo no enseña la Trinidad, y sería un error apoyar la doctrina solo en este versículo. Pero encaja con lo que el Nuevo Testamento revela: que el Verbo estaba con Dios en la creación (Jn 1:1-3) y que el Espíritu se movía sobre las aguas (Gn 1:2). Algo parecido ocurre con la palabra «uno» del Shemá: algunos señalan que puede indicar una unidad compuesta, pero el argumento es débil y no es necesario.'
        } },
        { h: 'El ángel de Jehová' },
        'Otro indicio es el ángel de Jehová. No es un ángel cualquiera: habla como Dios y es tratado como Dios. Agar, después de hablar con él, llama a Jehová «Dios que ve» (Gn 16:13). En la zarza, el ángel de Jehová se aparece en la llama, y quien habla desde ella dice «Yo soy el Dios de tu padre» (Éx 3:2-6). Manoa, después de verlo, exclama: «Ciertamente moriremos, porque a Dios hemos visto» (Jue 13:22). Y sin embargo es distinto de Jehová, que lo envía y de quien dice: «mi nombre está en él» (Éx 23:21). Muchos estudiosos ven en estas apariciones al Hijo antes de su encarnación, aunque el texto no lo dice explícitamente.',
        'Por último, hay pasajes donde aparecen juntos Dios, su Espíritu y alguien enviado: «el Espíritu de Jehová el Señor está sobre mí, porque me ungió Jehová» (Is 61:1). Jesús leyó ese texto en Nazaret y dijo que se cumplía en Él (Lc 4:18-21).',
        { ejercicio: {
          pregunta: '¿Cuál es la manera más prudente de usar Génesis 1:26 para hablar de la Trinidad?',
          opciones: [
            { t: 'Como la prueba principal de la doctrina.', ok: false, por_que: 'Por sí solo, el plural admite otras explicaciones. La doctrina se apoya sobre todo en la revelación del Nuevo Testamento.' },
            { t: 'Como un indicio que se entiende mejor a la luz del Nuevo Testamento.', ok: true, por_que: 'Es la lectura que siguieron muchos padres de la iglesia y reformadores: el plural anticipa lo que después se revela con claridad.' },
            { t: 'No tiene ninguna relación con la Trinidad.', ok: false, por_que: 'Juan 1:1-3 muestra que el Verbo estaba con Dios en la creación, y eso da sentido al plural.' }
          ],
          explicacion: 'La revelación es progresiva: lo que en el Antiguo Testamento es un indicio, en el Nuevo es una verdad clara.'
        } }
      ],
      pensar: 'Dios reveló primero que es uno, y después que es Padre, Hijo y Espíritu. ¿Por qué crees que Israel necesitaba aprender primero la unidad de Dios?'
    },
    {
      id: 'tres-juntos', n: 'Las tres personas juntas', ref: 'Mateo 3:13-17; 28:18-20; 2 Corintios 13:14',
      visual: [
        { tipo: 'imagen', titulo: 'El bautismo', src: 'img/bautismo-jesus.webp', alt: 'En el río Jordán, Jesús, de espaldas y con el agua hasta los muslos, mira hacia el cielo abierto, del que desciende una paloma en un haz de luz; Juan el Bautista, de frente, lo observa con asombro', pie: 'El Hijo en el agua, el Espíritu que desciende y la voz del Padre (Mateo 3:16-17).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/3/16-17', ref: 'Mateo 3:16-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Padre, el Hijo y el Espíritu en un mismo pasaje',
          cab: ['Pasaje', 'Padre', 'Hijo', 'Espíritu'],
          filas: [
            ['Lc 1:35', 'El poder del Altísimo', 'El Santo Ser que nacerá', 'El Espíritu Santo vendrá sobre ti'],
            ['Mt 3:16-17', 'La voz de los cielos', 'Jesús, bautizado', 'Desciende como paloma'],
            ['Jn 14:16-17', 'Dará otro Consolador', 'Yo rogaré al Padre', 'El Espíritu de verdad'],
            ['Mt 28:19', 'El nombre del Padre', 'y del Hijo', 'y del Espíritu Santo'],
            ['Hch 2:33', 'Da la promesa', 'Exaltado, la derrama', 'La promesa del Espíritu'],
            ['1 Co 12:4-6', 'Dios, que hace todas las cosas', 'El Señor', 'El mismo Espíritu'],
            ['2 Co 13:14', 'El amor de Dios', 'La gracia del Señor Jesucristo', 'La comunión del Espíritu'],
            ['1 P 1:2', 'Presciencia de Dios Padre', 'La sangre de Jesucristo', 'Santificación del Espíritu']
          ]
        } }
      ],
      texto: [
        'Si el Antiguo Testamento deja indicios, el Nuevo pone a las tres personas en la misma escena. La más clara es el bautismo de Jesús. Cuando subió del agua, los cielos se abrieron, Juan vio al Espíritu de Dios descender como paloma y venir sobre Él, y una voz desde los cielos dijo: «Este es mi Hijo amado, en quien tengo complacencia» (Mt 3:17). El Hijo está en el agua; el Espíritu desciende; el Padre habla desde el cielo. No es un solo actor cambiando de papel: son tres, presentes y actuando a la vez.',
        { h: 'En el nombre' },
        'Al final del mismo evangelio, Jesús resucitado envía a sus discípulos a hacer discípulos a todas las naciones, «bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo» (Mt 28:19). Fíjate en un detalle: dice «en el nombre», en singular, no «en los nombres». Pero luego nombra a tres, cada uno con su artículo: el Padre, el Hijo, el Espíritu Santo. Un solo nombre, tres personas. Para un judío, el Nombre era el de Jehová; ahora se bautiza en el nombre que comparten el Padre, el Hijo y el Espíritu. La ruta V explica qué relación tiene este mandato con el bautismo «en el nombre de Jesús» que menciona Hechos.',
        { h: 'Una bendición en tres partes' },
        'Pablo termina su segunda carta a los corintios con una bendición: «La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros» (2 Co 13:14). No es una explicación teológica, sino una oración, y por eso es tan valiosa: muestra que los primeros cristianos oraban y bendecían pensando en el Padre, el Hijo y el Espíritu, cada uno con su aporte, sin creer en tres dioses.',
        'La tabla reúne otros pasajes en que aparecen las tres personas: el anuncio a María, la promesa del Consolador, Pentecostés, los dones espirituales, la elección y la santificación. Lo notable es que estos textos no intentan demostrar la Trinidad; simplemente la dan por sentada. Los apóstoles hablaban así porque así habían conocido a Dios: como el Padre que envió a su Hijo y el Espíritu que el Hijo derramó sobre ellos.',
        { ejercicio: {
          pregunta: '¿Por qué el bautismo de Jesús es tan importante para la doctrina de la Trinidad?',
          opciones: [
            { t: 'Porque Jesús recibe ahí su divinidad.', ok: false, por_que: 'Jesús ya era el Hijo eterno (Juan 1:1). En el bautismo el Padre lo presenta, no lo convierte en Dios.' },
            { t: 'Porque el Padre, el Hijo y el Espíritu aparecen al mismo tiempo, cada uno actuando de manera distinta.', ok: true, por_que: 'El Hijo sube del agua, el Espíritu desciende y el Padre habla: tres personas presentes a la vez.' },
            { t: 'Porque muestra que la paloma es una cuarta persona divina.', ok: false, por_que: 'El texto dice que el Espíritu descendió «como paloma»: es una forma visible del Espíritu, no otro ser.' }
          ],
          explicacion: 'En el Jordán, las tres personas se distinguen con claridad. Un Dios que solo cambiara de modo no podría estar en el agua y hablar desde el cielo al mismo tiempo.'
        } }
      ],
      pensar: 'Fuiste bautizado, o lo serás, en el nombre del Padre, del Hijo y del Espíritu Santo. ¿Qué significa para ti pertenecer a ese Nombre?'
    },
    {
      id: 'padre-dios', n: 'El Padre es Dios', ref: 'Juan 6:27; 17:1-5; 1 Corintios 8:6; Efesios 1:3; Mateo 11:25-27',
      visual: [
        { tipo: 'imagen', titulo: 'El trono', src: '../apocalipsis/img/apo-trono.webp', alt: 'Un trono rodeado de un arco iris y de una luz que oculta a quien está sentado en él, con veinticuatro ancianos y cuatro seres vivientes alrededor', pie: 'El que está sentado en el trono (Apocalipsis 4:2-3).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/17/1-5', ref: 'Juan 17:1-5' }
      ],
      texto: [
        'Que el Padre es Dios casi nadie lo discute. Jesús lo llama «el único Dios verdadero» (Jn 17:3) y dice que a Él lo «señaló Dios el Padre» (Jn 6:27). Pablo escribe que para nosotros hay «un Dios, el Padre, del cual proceden todas las cosas» (1 Co 8:6), y abre sus cartas con bendiciones al «Dios y Padre de nuestro Señor Jesucristo» (Ef 1:3). En el Nuevo Testamento, cuando aparece la palabra Dios sin más precisión, casi siempre se refiere al Padre.',
        { h: 'Padre desde siempre' },
        'Lo importante es entender de quién es Padre. La Biblia llama a Dios Padre en varios sentidos: es Padre de Israel, porque lo formó como pueblo (Dt 32:6); es Padre de todos, como Creador (Hch 17:28); y es Padre de los creyentes, por adopción (Ro 8:15). Pero hay un sentido anterior y más profundo: es el Padre de nuestro Señor Jesucristo. Y lo es desde la eternidad, no desde Belén. Jesús ora: «Ahora pues, Padre, glorifícame tú al lado tuyo, con aquella gloria que tuve contigo antes que el mundo fuese» (Jn 17:5). Y dice que el Padre lo amó «desde antes de la fundación del mundo» (Jn 17:24).',
        'Esto quiere decir que Dios no comenzó a ser Padre cuando creó el mundo o cuando el Hijo se hizo hombre. Siempre fue Padre, porque siempre tuvo un Hijo. El amor no es algo que Dios aprendió al crear, sino algo que siempre existió dentro de Dios: el Padre ama al Hijo, el Hijo ama al Padre, en la comunión del Espíritu. Por eso Juan puede decir que «Dios es amor» (1 Jn 4:8): un Dios solitario, antes de la creación, no habría tenido a quién amar.',
        { h: 'Lo que hace el Padre' },
        'En la obra de la salvación, el Padre aparece como el origen del plan. Él escogió a los suyos en Cristo antes de la fundación del mundo (Ef 1:4), envió a su Hijo (Jn 3:16; Gá 4:4), lo entregó por nosotros (Ro 8:32), lo resucitó de los muertos (Hch 2:32) y prometió y dio el Espíritu Santo (Hch 1:4; 2:33). Jesús dice que nadie conoce al Padre, «sino el Hijo, y aquel a quien el Hijo lo quiera revelar» (Mt 11:27). Al Padre se le conoce por medio del Hijo.',
        { ejercicio: {
          pregunta: 'Según Juan 17:5 y 17:24, ¿desde cuándo es Dios el Padre de Jesucristo?',
          opciones: [
            { t: 'Desde que Jesús nació en Belén.', ok: false, por_que: 'Jesús habla de la gloria que tuvo con el Padre «antes que el mundo fuese».' },
            { t: 'Desde que Jesús fue bautizado en el Jordán.', ok: false, por_que: 'En el bautismo el Padre presenta a su Hijo amado; no lo adopta en ese momento.' },
            { t: 'Desde antes de la fundación del mundo, desde la eternidad.', ok: true, por_que: 'El Padre amó al Hijo «desde antes de la fundación del mundo» (Juan 17:24). La relación es eterna.' }
          ],
          explicacion: 'Dios siempre fue Padre porque siempre tuvo un Hijo. Su amor no comenzó con la creación.'
        } }
      ],
      pensar: 'El Padre te escogió en Cristo antes de la fundación del mundo (Ef 1:4). ¿Cómo cambia tu manera de ver tu vida saber que el amor de Dios por ti es anterior a todo lo que has hecho?'
    },
    {
      id: 'hijo-dios', n: 'El Hijo es Dios', ref: 'Juan 1:1-3, 14; 20:28; Colosenses 2:9; Hebreos 1:3, 8; Tito 2:13',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../apocalipsis/img/apo-cristo-glorificado.webp', alt: 'Cristo glorificado entre siete candeleros de oro, con el rostro oculto por una luz resplandeciente', pie: '«Yo soy el primero y el último» (Apocalipsis 1:17).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro clases de evidencia',
          cab: ['Evidencia', 'Ejemplos'],
          filas: [
            ['Se le llama Dios', 'Jn 1:1; 20:28; Ro 9:5; Tit 2:13; He 1:8; 1 Jn 5:20'],
            ['Tiene atributos que solo Dios tiene', 'Eterno (Jn 8:58; 17:5), inmutable (He 13:8), omnipresente (Mt 18:20; 28:20), omnisciente (Jn 16:30; 21:17)'],
            ['Hace obras que solo Dios hace', 'Crea (Jn 1:3; Col 1:16), sostiene todo (He 1:3), perdona pecados (Mr 2:5-7), juzgará al mundo (Jn 5:22)'],
            ['Recibe la honra que solo Dios recibe', 'Adoración (Mt 14:33; He 1:6; Ap 5:12-14), oración (Hch 7:59), la misma honra que el Padre (Jn 5:23)']
          ],
          nota: 'Dios no comparte su gloria con nadie (Is 42:8). Si el Hijo la comparte, es porque es Dios.'
        } }
      ],
      texto: [
        'La pregunta que separa a la fe cristiana de muchos otros grupos que leen la Biblia es esta: ¿quién es Jesús? Esta estación no estudia toda su persona y su obra, que tiene su propio recurso, sino lo que la doctrina de la Trinidad necesita: que el Hijo es Dios, igual al Padre, y no una criatura, por más elevada que sea.',
        { h: 'En el principio' },
        'Juan abre su evangelio con tres afirmaciones: «En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios» (Jn 1:1). El Verbo ya existía en el principio, es decir, no comenzó a existir. Estaba con Dios, en relación con Él, y por lo tanto es distinto del Padre. Y era Dios, de la misma naturaleza divina. Luego Juan añade que todas las cosas fueron hechas por Él, «y sin él nada de lo que ha sido hecho, fue hecho» (Jn 1:3). Si nada creado fue hecho sin Él, Él no es parte de lo creado. Y finalmente: «aquel Verbo fue hecho carne» (Jn 1:14). Ese Verbo es Jesús.',
        { h: 'Señor mío y Dios mío' },
        'La tabla agrupa la evidencia en cuatro clases. Se le llama Dios: Tomás, al ver al resucitado, le dijo «¡Señor mío, y Dios mío!» (Jn 20:28), y Jesús aceptó esa confesión en lugar de corregirla. Pablo dice que en Cristo «habita corporalmente toda la plenitud de la Deidad» (Col 2:9). Hebreos aplica al Hijo el Salmo 45: «Tu trono, oh Dios, por el siglo del siglo» (He 1:8). Tiene atributos que solo Dios tiene, como la eternidad: «Antes que Abraham fuese, yo soy» (Jn 8:58). Hace obras que solo Dios hace, como perdonar pecados; los escribas lo entendieron bien cuando pensaron: «¿Quién puede perdonar pecados, sino sólo Dios?» (Mr 2:7). Y recibe la honra que solo Dios recibe: el Padre quiere que todos honren al Hijo «como honran al Padre» (Jn 5:23).',
        'Al mismo tiempo, el Hijo es distinto del Padre: está «con Dios», ora al Padre, es enviado por Él y vuelve a Él. Por eso no se puede decir que Jesús es el Padre. Es el Hijo eterno, igual al Padre en naturaleza, distinto de Él como persona. Los Evangelios muestran además que, al hacerse hombre, se sometió voluntariamente al Padre en su misión: es lo que explica textos como «el Padre mayor es que yo», que se estudian en la ruta VI.',
        { ir: { t: 'Ver la Armonía de los evangelios', a: '../../evangelios/' } },
        { ejercicio: {
          pregunta: 'Juan 1:3 dice que todas las cosas fueron hechas por el Verbo, y sin Él nada fue hecho. ¿Qué implica sobre el Verbo?',
          opciones: [
            { t: 'Que fue la primera cosa que Dios creó, y luego Dios creó todo lo demás por medio de Él.', ok: false, por_que: 'Si fuera creado, habría algo hecho sin Él: Él mismo. Juan dice que nada de lo hecho fue hecho sin Él.' },
            { t: 'Que no es parte de lo creado: es el Creador.', ok: true, por_que: 'Todo lo que fue hecho, fue hecho por Él. Por lo tanto, Él no fue hecho; ya existía en el principio (Juan 1:1).' },
            { t: 'Que es un ángel muy poderoso.', ok: false, por_que: 'Los ángeles fueron creados por medio de Él (Colosenses 1:16), y Hebreos 1:6 manda que todos los ángeles le adoren.' }
          ],
          explicacion: 'El Verbo no está del lado de las criaturas, sino del lado del Creador: es Dios, distinto del Padre e igual a Él.'
        } }
      ],
      pensar: 'Tomás pasó de la duda a la adoración: «¡Señor mío, y Dios mío!» (Jn 20:28). ¿Es Jesús para ti un gran maestro, o tu Señor y tu Dios?'
    },
    {
      id: 'espiritu-dios', n: 'El Espíritu Santo es Dios y es persona', ref: 'Hechos 5:3-4; 1 Corintios 2:10-11; 12:11; Juan 14:16-17, 26; Efesios 4:30',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-efeso-espiritu.webp', alt: 'Pablo impone las manos sobre un grupo de discípulos en Éfeso, que reciben el Espíritu Santo y comienzan a hablar en lenguas y profetizar', pie: 'El Espíritu Santo vino sobre los discípulos de Éfeso (Hechos 19:6).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Espíritu es Alguien, no algo',
          cab: ['Rasgo personal', 'Referencia'],
          filas: [
            ['Enseña y recuerda', 'Jn 14:26'],
            ['Da testimonio de Cristo', 'Jn 15:26'],
            ['Oye y habla', 'Jn 16:13; Hch 13:2'],
            ['Escudriña y conoce lo profundo de Dios', '1 Co 2:10-11'],
            ['Reparte los dones como Él quiere', '1 Co 12:11'],
            ['Intercede por nosotros', 'Ro 8:26-27'],
            ['Se le puede contristar, mentir y resistir', 'Ef 4:30; Hch 5:3; 7:51'],
            ['Prohíbe y dirige', 'Hch 16:6-7']
          ],
          nota: 'Además, es eterno (He 9:14), está en todo lugar (Sal 139:7) y participó en la creación (Gn 1:2): atributos y obras de Dios.'
        } }
      ],
      texto: [
        'Sobre el Espíritu Santo hay dos errores frecuentes. Uno es pensar que es una fuerza o una energía de Dios, como la electricidad, y no una persona. El otro es pensar que es una persona, pero inferior: un ser creado o un ángel. La Biblia descarta ambos. Esta estación muestra lo que la Trinidad necesita; la persona y la obra del Espíritu, sus dones y el bautismo en el Espíritu Santo se estudian en su propio recurso.',
        { h: 'Es Dios' },
        'El texto más directo está en la historia de Ananías y Safira. Ananías vendió una propiedad y entregó solo una parte del dinero, fingiendo que era el total. Pedro le dijo: «¿por qué llenó Satanás tu corazón para que mintieses al Espíritu Santo…?» Y un momento después: «No has mentido a los hombres, sino a Dios» (Hch 5:3-4). Mentir al Espíritu Santo es mentir a Dios. Pablo dice que los creyentes son «templo de Dios», porque «el Espíritu de Dios mora en vosotros» (1 Co 3:16). Y el Espíritu tiene atributos que solo Dios tiene: es llamado «el Espíritu eterno» (He 9:14), está en todo lugar (Sal 139:7) y conoce lo profundo de Dios como solo Dios se conoce a sí mismo (1 Co 2:10-11).',
        { h: 'Es persona' },
        'Jesús, al despedirse de sus discípulos, les prometió «otro Consolador» (Jn 14:16). La palabra griega, paráclito, designa a alguien llamado para estar al lado de otro, como un abogado o un ayudador. Y otro significa uno más, de la misma clase: Jesús había sido su Consolador, y el Espíritu sería otro como Él. Luego habla del Espíritu con verbos personales: enseñará, recordará, dará testimonio, guiará, oirá, hablará, glorificará a Cristo (Jn 14:26; 15:26; 16:13-14). La tabla reúne más rasgos. Una fuerza no puede ser contristada, pero Pablo dice: «no contristéis al Espíritu Santo de Dios» (Ef 4:30). Una energía no tiene voluntad, pero el Espíritu reparte los dones «a cada uno en particular como él quiere» (1 Co 12:11).',
        'El Espíritu es distinto del Padre y del Hijo. Jesús ruega al Padre, y el Padre da al Espíritu (Jn 14:16). El Espíritu no habla por su propia cuenta, sino que glorifica al Hijo (Jn 16:13-14). Es la tercera persona de la Trinidad, no porque sea menos, sino por el orden en que se nos revela y en que actúa.',
        'Esta verdad es preciosa para la vida pentecostal. Ser lleno del Espíritu no es cargarse de una energía, sino ser lleno de la presencia de Dios mismo, que es una persona con quien se tiene comunión (2 Co 13:14).',
        { ejercicio: {
          pregunta: '¿Qué muestra Efesios 4:30 al decir «no contristéis al Espíritu Santo»?',
          opciones: [
            { t: 'Que el Espíritu es una fuerza que se debilita cuando pecamos.', ok: false, por_que: 'Contristar significa entristecer. Una fuerza no se entristece; una persona sí.' },
            { t: 'Que el Espíritu es una persona que puede ser entristecida por nuestro pecado.', ok: true, por_que: 'El verbo supone afectos personales. El Espíritu es Alguien que se relaciona con nosotros.' },
            { t: 'Que el Espíritu solo está presente cuando estamos alegres.', ok: false, por_que: 'El versículo dice que con Él fuimos sellados para el día de la redención: su presencia es permanente.' }
          ],
          explicacion: 'El Espíritu Santo es Dios y es persona: se le puede obedecer, resistir, contristar y amar.'
        } }
      ],
      pensar: 'El Espíritu Santo puede ser contristado (Ef 4:30). ¿Hay algo en tu manera de hablar o de vivir que lo esté entristeciendo?'
    },
    {
      id: 'relacion', n: 'Distintos y unidos', ref: 'Juan 14:9-11; 17:20-24; Efesios 1:3-14; Hechos 7:55-56',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-economia.svg', alt: 'Tres columnas para Efesios 1: el Padre nos escogió y predestinó (vv. 3-6), el Hijo nos redimió con su sangre (vv. 7-12), el Espíritu nos selló como arras de la herencia (vv. 13-14); cada columna termina en «para alabanza de su gloria»', pie: 'Efesios 1:3-14: una sola salvación, obra de las tres personas.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/17/20-24', ref: 'Juan 17:20-24' },
        { tipo: 'imagen', titulo: 'Esteban', src: '../hechos/img/hechos-esteban.webp', alt: 'Esteban, ante el concilio, mira hacia el cielo con el rostro iluminado mientras los miembros del Sanedrín se tapan los oídos', pie: 'Esteban, lleno del Espíritu Santo, ve la gloria de Dios y a Jesús a su diestra (Hechos 7:55).', origen: 'ia' }
      ],
      texto: [
        'Si el Padre, el Hijo y el Espíritu son el mismo Dios, ¿en qué se distinguen? Y si son distintos, ¿cómo son uno? La Biblia no da una fórmula, pero muestra cómo se relacionan.',
        { h: 'Uno en el otro' },
        'Jesús dice a Felipe: «¿No crees que yo soy en el Padre, y el Padre en mí?» (Jn 14:10). Y en su oración por la iglesia pide que los creyentes sean uno «como tú, oh Padre, en mí, y yo en ti» (Jn 17:21). Las personas divinas no son tres individuos que se ponen de acuerdo, sino que habitan la una en la otra, compartiendo un solo ser. Los antiguos llamaron a esto pericóresis, una palabra griega que sugiere una danza en la que cada uno está en el otro. Por eso Jesús puede decir: «El que me ha visto a mí, ha visto al Padre» (Jn 14:9), sin decir que Él es el Padre.',
        { h: 'Relaciones eternas' },
        'Lo que distingue a las personas no es que tengan más o menos divinidad, sino su relación. El Padre es Padre del Hijo; el Hijo es Hijo del Padre; el Espíritu procede del Padre (Jn 15:26) y es enviado por el Padre y por el Hijo (Jn 14:26; 16:7). Estas relaciones no son un orden de importancia: los tres son igualmente Dios y dignos de la misma adoración. Pero sí son un orden real, que se refleja en cómo actúan. En su misión en la tierra, el Hijo vino a hacer «la voluntad del que me envió» (Jn 6:38), y el Espíritu glorifica al Hijo (Jn 16:14). Esa sujeción en la misión no rebaja al Hijo ni al Espíritu, como el amor no rebaja al que sirve.',
        { h: 'Una sola obra' },
        'En todo lo que Dios hace, actúan las tres personas juntas, cada una a su manera. El esquema lo muestra con Efesios 1, un solo párrafo en griego que alaba a Dios por la salvación. El Padre nos escogió en Cristo antes de la fundación del mundo y nos predestinó para ser adoptados hijos (Ef 1:4-5). En el Hijo «tenemos redención por su sangre, el perdón de pecados» (Ef 1:7). Y fuimos sellados con el Espíritu Santo de la promesa, «que es las arras de nuestra herencia» (Ef 1:13-14). Tres veces se repite el estribillo: para alabanza de su gloria (Ef 1:6, 12, 14).',
        'Esteban, al morir, vio esa comunión: lleno del Espíritu Santo, «vio la gloria de Dios, y a Jesús que estaba a la diestra de Dios» (Hch 7:55). Las tres personas en una sola escena, otra vez.',
        { ejercicio: {
          pregunta: 'Según el esquema de Efesios 1:3-14, ¿qué aporta cada persona a la salvación?',
          opciones: [
            { t: 'El Padre redime, el Hijo sella y el Espíritu elige.', ok: false, por_que: 'Los papeles están cambiados: el Padre elige (v. 4), el Hijo redime (v. 7) y el Espíritu sella (v. 13).' },
            { t: 'El Padre elige y adopta, el Hijo redime con su sangre, el Espíritu sella como garantía de la herencia.', ok: true, por_que: 'Es el orden del pasaje. Una sola salvación, obra de las tres personas.' },
            { t: 'Solo el Hijo participa; el Padre y el Espíritu aparecen de paso.', ok: false, por_que: 'El párrafo empieza bendiciendo al Padre y termina con el sello del Espíritu: los tres son protagonistas.' }
          ],
          explicacion: 'Las obras de Dios son inseparables: el Padre planea, el Hijo cumple y el Espíritu aplica, y todo para alabanza de su gloria.'
        } }
      ],
      pensar: 'Jesús pidió que sus discípulos fueran uno como el Padre y Él son uno (Jn 17:21). ¿Qué relación tiene la unidad de tu iglesia con el testimonio que da al mundo?'
    },
    {
      id: 'comparaciones', n: 'Las comparaciones y sus límites', ref: 'Isaías 40:18, 25; Éxodo 20:4',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-comparaciones.svg', alt: 'Cinco comparaciones frecuentes de la Trinidad con el error al que llevan: agua, hielo y vapor (modalismo); un hombre que es padre, hijo y esposo (modalismo); huevo y trébol (partes de Dios); el sol, su luz y su calor (el Hijo y el Espíritu como efectos); tres personas humanas (tres dioses)', pie: 'Cada comparación ilumina algo y deforma otra cosa.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué ilustra y qué deforma cada comparación',
          cab: ['Comparación', 'Qué ilustra', 'Error al que lleva'],
          filas: [
            ['Agua: líquido, hielo, vapor', 'Una sustancia en tres formas', 'Modalismo: una sola persona que cambia de estado'],
            ['Un hombre que es padre, hijo y esposo', 'Una sola persona con tres relaciones', 'Modalismo: tres papeles de uno solo'],
            ['Huevo: cáscara, clara, yema; trébol de tres hojas', 'Unidad de tres elementos', 'Partes: cada persona sería un tercio de Dios'],
            ['El sol, su luz y su calor', 'Que el Hijo y el Espíritu vienen del Padre', 'Que el Hijo y el Espíritu sean efectos o cosas, no personas'],
            ['Tres personas humanas de una familia', 'Tres personas que se aman', 'Triteísmo: tres seres, tres dioses']
          ],
          nota: 'Lo más seguro es hablar como habla la Biblia: un solo Dios; el Padre, el Hijo y el Espíritu son Dios; y son distintos entre sí.'
        } }
      ],
      texto: [
        'Quien enseña en la escuela dominical o en un grupo pequeño conoce la dificultad: cómo explicar la Trinidad a un niño o a un nuevo creyente. Se han usado muchas comparaciones con cosas de la vida diaria. Tienen buena intención, y algunas pueden ayudar en un primer momento, pero todas tienen un problema: si se las toma en serio, llevan a uno de los errores que la iglesia rechazó.',
        { h: 'Cinco comparaciones' },
        'La más común es el agua, que puede ser líquido, hielo o vapor. Ilustra que una misma sustancia puede presentarse de tres maneras. Pero el agua no es las tres cosas a la vez: se transforma de una en otra. Aplicada a Dios, describe un solo Dios que a veces es Padre, a veces Hijo y a veces Espíritu. Es justamente el error del modalismo, que el bautismo de Jesús descarta. Lo mismo pasa con el hombre que es padre de sus hijos, hijo de sus padres y esposo de su mujer: es una sola persona con tres papeles.',
        'El huevo, con su cáscara, clara y yema, o el trébol de tres hojas, ilustran que tres cosas forman una unidad. Pero cada parte es solo una porción del todo. Ninguna hoja es el trébol completo. En cambio, el Padre no es un tercio de Dios: es plenamente Dios, y lo mismo el Hijo y el Espíritu. El sol, su luz y su calor muestran que algo procede de otro, pero hacen de la luz y el calor efectos impersonales, no personas. Y tres personas humanas, como tres hermanos, ilustran la relación personal, pero son tres seres distintos: llevan a creer en tres dioses.',
        { h: 'Entonces, ¿cómo explicarla?' },
        'Ninguna cosa creada puede ser una imagen exacta del Creador. Isaías pregunta: «¿A qué, pues, me haréis semejante o me compararéis? dice el Santo» (Is 40:25). Las comparaciones pueden servir para mostrar que algo puede ser uno y tres en sentidos distintos, siempre que se diga también en qué fallan. Pero la mejor manera de enseñar la Trinidad es la más sencilla: decir lo que dice la Biblia. Hay un solo Dios. El Padre es Dios, el Hijo es Dios y el Espíritu Santo es Dios. El Padre no es el Hijo, el Hijo no es el Espíritu y el Espíritu no es el Padre. Y adorar a ese Dios, aunque no podamos imaginarlo.',
        { ejercicio: {
          pregunta: 'Un maestro dice: «Dios es como el agua: a veces líquido, a veces hielo y a veces vapor». ¿Qué error puede transmitir?',
          opciones: [
            { t: 'Triteísmo: que hay tres dioses.', ok: false, por_que: 'El agua es una sola sustancia; la comparación no sugiere tres dioses, sino otra cosa.' },
            { t: 'Modalismo: que un solo Dios cambia de forma según el momento.', ok: true, por_que: 'El agua no es líquido, hielo y vapor al mismo tiempo. En el bautismo de Jesús, el Padre, el Hijo y el Espíritu están presentes a la vez.' },
            { t: 'Ninguno: es una comparación exacta.', ok: false, por_que: 'Ninguna comparación es exacta, y esta en particular describe el error del modalismo.' }
          ],
          explicacion: 'Las tres personas existen siempre y a la vez. Por eso las comparaciones con cosas que cambian de estado no sirven.'
        } },
        { ejercicio: {
          pregunta: '¿Qué problema tiene la comparación con el trébol de tres hojas?',
          opciones: [
            { t: 'Que cada persona sería solo una parte de Dios.', ok: true, por_que: 'Una hoja no es el trébol completo. Pero el Padre, el Hijo y el Espíritu son, cada uno, plenamente Dios (Colosenses 2:9).' },
            { t: 'Que el trébol es una planta y Dios no.', ok: false, por_que: 'Toda comparación usa algo distinto de Dios. El problema está en lo que la comparación sugiere.' },
            { t: 'Que el trébol tiene a veces cuatro hojas.', ok: false, por_que: 'Es una curiosidad botánica, no el problema teológico de la comparación.' }
          ],
          explicacion: 'Dios no está dividido en partes: toda la plenitud de la Deidad está en cada persona.'
        } }
      ],
      pensar: 'Si tuvieras que explicar la Trinidad a un niño de tu iglesia, ¿qué le dirías usando solo palabras de la Biblia?'
    },
    {
      id: 'vida', n: 'La Trinidad en la vida del creyente', ref: 'Efesios 2:18; Romanos 8:26-27, 34; Judas 20-21; Hechos 2:33',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ef/2/18-22', ref: 'Efesios 2:18-22' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La vida cristiana con el Dios trino',
          cab: ['Práctica', 'Padre', 'Hijo', 'Espíritu'],
          filas: [
            ['La oración', 'A quien oramos (Mt 6:9)', 'Por quien oramos, intercede (Jn 16:23; Ro 8:34)', 'En quien oramos, nos ayuda (Ro 8:26; Jud 20)'],
            ['La adoración', 'Busca adoradores (Jn 4:23)', 'Digno del Cordero (Ap 5:12)', 'Adoramos en espíritu (Fil 3:3)'],
            ['El bautismo en agua', 'En su nombre (Mt 28:19)', 'En su nombre', 'En su nombre'],
            ['El bautismo en el Espíritu', 'Da la promesa (Hch 1:4)', 'La derrama (Hch 2:33)', 'Viene con poder (Hch 1:8)'],
            ['La santa cena', 'Damos gracias (1 Co 11:24)', 'Recordamos su cuerpo y su sangre', 'Comunión en un cuerpo (1 Co 12:13)'],
            ['La seguridad', 'Nadie nos arrebata de su mano (Jn 10:29)', 'Intercede siempre (He 7:25)', 'Nos sella (Ef 1:13)']
          ]
        } }
      ],
      texto: [
        'La Trinidad podría parecer una doctrina solo para teólogos. Pero el Nuevo Testamento muestra que la vida cristiana entera es trinitaria. Pablo lo resume en un versículo: «porque por medio de él los unos y los otros tenemos entrada por un mismo Espíritu al Padre» (Ef 2:18). Por medio de Cristo, en el Espíritu, al Padre: esa es la dirección de toda la vida del creyente.',
        { h: 'Orar al Padre, por el Hijo, en el Espíritu' },
        'Jesús enseñó a orar al Padre (Mt 6:9), y prometió que lo que pidiéramos al Padre en su nombre nos sería dado (Jn 16:23). Pedir en el nombre de Jesús no es una fórmula mágica para terminar la oración: es acercarse al Padre confiando en lo que Cristo hizo, y no en nuestros méritos. Cristo, además, intercede por nosotros a la diestra de Dios (Ro 8:34). Y el Espíritu nos ayuda desde dentro: cuando no sabemos qué pedir, «el Espíritu mismo intercede por nosotros con gemidos indecibles» (Ro 8:26). Judas llama a los creyentes a edificarse «orando en el Espíritu Santo», conservándose en el amor de Dios y esperando la misericordia de nuestro Señor Jesucristo (Jud 20-21). Tenemos dos intercesores: uno en el cielo, el Hijo, y otro en nuestro corazón, el Espíritu.',
        'Esto no quiere decir que esté prohibido dirigirse a Jesús o al Espíritu en oración. Esteban oró a Jesús al morir (Hch 7:59), y la iglesia ha cantado siempre al Espíritu Santo. Pero el modelo habitual del Nuevo Testamento es claro, y ayuda a orar con más conciencia de lo que hace cada persona por nosotros.',
        { h: 'Pentecostés' },
        'Pentecostés es un acontecimiento profundamente trinitario. Jesús mandó a los discípulos esperar «la promesa del Padre» (Hch 1:4). Ese día, Pedro explicó lo que la multitud veía y oía: Jesús, «exaltado por la diestra de Dios, y habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís» (Hch 2:33). El Padre promete, el Hijo derrama, el Espíritu viene con poder. Cada vez que un creyente es bautizado en el Espíritu Santo, el Dios trino está actuando.',
        'La tabla muestra otras prácticas: la adoración, el bautismo, la santa cena y la seguridad del creyente. En todas está presente el Dios trino. Conocerlo como Padre, Hijo y Espíritu no complica la fe: la llena de riqueza, porque no adoramos a un Dios solitario, sino a un Dios que es comunión de amor y que nos invita a participar de ella (1 Jn 1:3).',
        { ejercicio: {
          pregunta: 'Según Hechos 2:33, ¿quién derramó el Espíritu Santo en Pentecostés?',
          opciones: [
            { t: 'Jesús exaltado, que recibió del Padre la promesa del Espíritu.', ok: true, por_que: 'Es la explicación de Pedro: el Padre da la promesa y el Hijo exaltado derrama el Espíritu.' },
            { t: 'Los apóstoles, al imponer las manos sobre la multitud.', ok: false, por_que: 'En Pentecostés el Espíritu vino sobre los ciento veinte sin imposición de manos (Hechos 2:1-4).' },
            { t: 'El Espíritu se derramó a sí mismo, sin relación con el Padre y el Hijo.', ok: false, por_que: 'Pedro nombra al Padre y al Hijo como los que dan y derraman la promesa.' }
          ],
          explicacion: 'El bautismo en el Espíritu Santo es obra del Dios trino: promesa del Padre, derramada por el Hijo, cumplida en la venida del Espíritu.'
        } }
      ],
      pensar: 'Tienes acceso al Padre, por medio de Cristo, en un mismo Espíritu (Ef 2:18). ¿Cómo podría cambiar tu oración de esta semana si la vives con esa conciencia?'
    }
  ];

  window.__TRINIDAD.trinidad = trinidad;
})();
