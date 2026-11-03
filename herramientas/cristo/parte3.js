/* La persona y obra de Cristo · rutas IV. Profeta, sacerdote y rey y V. La cruz (ver encabezado en parte1.js) */
(() => {
  /* ---------------- IV. Profeta, sacerdote y rey ---------------- */
  const oficios = [
    {
      id: 'tres-oficios', n: 'Los tres oficios del Mesías', ref: 'Deuteronomio 18:15-18; Salmo 110:1-4; Zacarías 6:12-13; Hebreos 1:1-3',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-oficios.svg', alt: 'Esquema de los tres oficios de Cristo: profeta, sacerdote y rey, con lo que hizo en el pasado, lo que hace ahora y lo que hará', pie: 'Los tres oficios en el tiempo: lo que Cristo hizo, lo que hace y lo que hará.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres oficios ungidos en Israel',
          cab: ['Oficio', 'Función', 'Ejemplos en Israel', 'Cristo'],
          filas: [
            ['Profeta', 'Habla a los hombres de parte de Dios', 'Moisés, Samuel, Elías, Isaías', 'La Palabra hecha carne (Jn 1:14; He 1:1-2)'],
            ['Sacerdote', 'Representa a los hombres delante de Dios', 'Aarón y sus hijos', 'Se ofreció a sí mismo e intercede (He 7:25-27)'],
            ['Rey', 'Gobierna al pueblo en nombre de Dios', 'David, Josías, Ezequías', 'El Hijo de David que reinará para siempre (Lc 1:32-33)']
          ],
          nota: 'En Israel nadie podía tener los tres oficios: cuando el rey Uzías quiso ofrecer incienso, fue herido de lepra (2 Cr 26:16-21).'
        } }
      ],
      texto: [
        'En el antiguo Israel había tres clases de personas que eran ungidas con aceite para un servicio especial: los profetas, los sacerdotes y los reyes. Cada uno tenía una función distinta, como muestra la tabla. El profeta hablaba de parte de Dios al pueblo; el sacerdote se presentaba ante Dios en favor del pueblo; el rey gobernaba al pueblo en nombre de Dios. Desde la Reforma, los teólogos han usado estos tres oficios para ordenar la obra de Cristo, el Ungido por excelencia.',
        { h: 'Separados en Israel' },
        'En Israel estos oficios estaban separados con cuidado. Los sacerdotes venían de la tribu de Leví y de la familia de Aarón; los reyes, después de David, de la tribu de Judá. Un rey no podía ofrecer sacrificios: cuando Saúl lo hizo, perdió el reino (1 S 13:8-14), y cuando Uzías quiso quemar incienso en el templo, fue herido de lepra. Ninguno de ellos podía, además, cumplir su oficio de manera perfecta: los profetas eran hombres con debilidades, los sacerdotes tenían que ofrecer por sus propios pecados y los reyes, incluso los mejores, fallaron.',
        { h: 'Unidos en Cristo' },
        'Los profetas anunciaron a alguien que reuniría lo que estaba separado. Moisés anunció un profeta como él (Dt 18:15). El salmo 110 habla de un rey sentado a la diestra de Dios que es a la vez «sacerdote para siempre según el orden de Melquisedec» (Sal 110:4). Y Zacarías vio a un hombre llamado el Renuevo que edificaría el templo y se sentaría a gobernar en su trono, y habría consejo de paz entre ambos oficios (Zac 6:12-13). En Jesús se cumplen las tres líneas.',
        { h: 'Pasado, presente y futuro' },
        'El esquema muestra que los tres oficios no pertenecen solo al pasado. Como profeta, Jesús enseñó en la tierra y sigue hablando por su Palabra y su Espíritu. Como sacerdote, se ofreció una vez en la cruz y ahora intercede por nosotros. Como rey, venció en la cruz y la resurrección, reina ahora sobre su iglesia, y reinará visiblemente sobre la tierra cuando vuelva. Las tres estaciones siguientes estudian cada oficio.',
        'Los tres oficios también describen lo que necesitamos. Por la ignorancia, necesitamos un profeta que nos enseñe; por la culpa, un sacerdote que nos reconcilie; por la esclavitud del pecado, un rey que nos gobierne y nos libre.',
        { ejercicio: {
          pregunta: '¿Por qué es significativo que Cristo reúna los tres oficios?',
          opciones: [
            { t: 'Porque en Israel estaban separados y nadie podía ejercerlos todos ni cumplirlos con perfección.', ok: true, por_que: 'Saúl y Uzías fueron castigados por invadir el oficio sacerdotal; el Salmo 110 y Zacarías 6 anunciaban a alguien que los uniría.' },
            { t: 'Porque así cumplió con las tres tribus principales de Israel.', ok: false, por_que: 'Los oficios no se repartían en tres tribus: los profetas podían venir de cualquier tribu.' },
            { t: 'Porque Jesús fue ungido con aceite tres veces durante su ministerio.', ok: false, por_que: 'Jesús fue ungido con el Espíritu Santo, no con aceite ritual (Hch 10:38).' }
          ],
          explicacion: 'Lo que en Israel estaba repartido entre muchos y siempre incompleto, en Cristo está unido y es perfecto.'
        } }
      ],
      pensar: 'Necesitamos a Cristo como profeta que nos enseña, sacerdote que nos reconcilia y rey que nos gobierna. ¿Cuál de los tres te cuesta más aceptar en la práctica?'
    },
    {
      id: 'profeta', n: 'Profeta: Dios nos ha hablado por el Hijo', ref: 'Deuteronomio 18:15-19; Hebreos 1:1-2; Mateo 7:28-29; Lucas 13:33; Hechos 3:22-23; Juan 16:12-15',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-sermon-ladera.webp', alt: 'Jesús, de espaldas, enseña sentado en la ladera de un monte junto al mar de Galilea a una multitud', pie: 'La gente se admiraba de su doctrina, porque les enseñaba «como quien tiene autoridad» (Mt 7:29).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/1/1-2', ref: 'Hebreos 1:1-2' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cristo, el profeta como Moisés y mayor que él',
          cab: ['Moisés', 'Jesús'],
          filas: [
            ['Salvado de niño de la matanza ordenada por el faraón (Éx 1–2)', 'Salvado de niño de la matanza ordenada por Herodes (Mt 2)'],
            ['Cuarenta años en el desierto', 'Cuarenta días en el desierto'],
            ['Dio la ley desde el monte Sinaí', 'Enseñó desde un monte: «Pero yo os digo» (Mt 5:22)'],
            ['Dio maná del cielo', 'Es el pan de vida (Jn 6)'],
            ['Mediador del antiguo pacto', 'Mediador del nuevo pacto (He 9:15)'],
            ['Fiel como siervo en la casa de Dios', 'Fiel como Hijo sobre su casa (He 3:5-6)']
          ],
          nota: 'El paralelo es especialmente claro en Mateo, que escribe para lectores judíos.'
        } }
      ],
      texto: [
        'Moisés anunció a Israel: «Profeta de en medio de ti, de tus hermanos, como yo, te levantará Jehová tu Dios; a él oiréis» (Dt 18:15). Después de él surgieron muchos profetas, pero el libro de Deuteronomio termina diciendo que nunca más se levantó un profeta como Moisés, a quien Jehová conociera cara a cara (Dt 34:10). La promesa quedó abierta. En tiempos de Jesús, la gente preguntaba a Juan el Bautista si él era «el profeta» (Jn 1:21), y después de la multiplicación de los panes muchos dijeron de Jesús: «Este verdaderamente es el profeta que había de venir al mundo» (Jn 6:14). Pedro lo confirmó en el templo: Jesús es el profeta que Moisés anunció (Hch 3:22-26).',
        { h: 'Más que un profeta' },
        'Jesús hizo lo que hacían los profetas: anunció la Palabra de Dios, llamó al arrepentimiento, denunció la injusticia y predijo el futuro, incluida la destrucción del templo. Y fue tratado como los profetas: rechazado en su pueblo (Lc 4:24) y muerto en Jerusalén, que «matas a los profetas» (Mt 23:37). Pero Hebreos muestra la diferencia: Dios habló antes por los profetas, «en estos postreros días nos ha hablado por el Hijo» (He 1:2). Los profetas traían la palabra de Dios; Jesús es la Palabra de Dios. Los profetas decían «así dice Jehová»; Jesús decía «Pero yo os digo». Por eso la gente se admiraba, porque les enseñaba como quien tiene autoridad, y no como los escribas (Mt 7:29).',
        { h: 'La última palabra' },
        'Si Dios habló por el Hijo «en estos postreros días», el Hijo es la palabra final y suprema de Dios. No habrá otra revelación que lo supere ni lo corrija. Esto no niega los dones del Espíritu, que Jesús prometió y que siguen vigentes: el Espíritu de verdad guía a la verdad, pero no habla por su propia cuenta, sino que toma de lo de Cristo y lo hace saber (Jn 16:13-15). Toda profecía en la iglesia se juzga a la luz de la Palabra de Cristo. La relación entre el canon cerrado y los dones vigentes se estudia en el recurso La Palabra de Dios.',
        { h: 'Oírle' },
        'Moisés dijo «a él oiréis», y la voz del Padre en el monte de la transfiguración repitió lo mismo: «a él oíd» (Mt 17:5). Pedro advierte que quien no oiga a ese profeta será desarraigado del pueblo (Hch 3:23). El profeta sigue hablando hoy por medio de su Palabra.',
        { ejercicio: {
          pregunta: 'Según Hebreos 1:1-2, ¿en qué se diferencia Jesús de los profetas del Antiguo Testamento?',
          opciones: [
            { t: 'Los profetas traían la palabra de Dios; el Hijo es la palabra final y suprema de Dios.', ok: true, por_que: 'Dios habló «muchas veces y de muchas maneras» por los profetas, pero «en estos postreros días» por el Hijo.' },
            { t: 'Los profetas hablaban de juicio y Jesús solo de amor.', ok: false, por_que: 'Jesús también anunció juicio, por ejemplo sobre Jerusalén y sobre los que lo rechazan (Mt 23).' },
            { t: 'Jesús no hizo predicciones sobre el futuro, a diferencia de los profetas.', ok: false, por_que: 'Jesús predijo su muerte y resurrección, la caída del templo y su segunda venida.' }
          ],
          explicacion: 'En Cristo, Dios dijo todo lo que necesitamos saber para la salvación.'
        } }
      ],
      pensar: 'El Padre dijo de su Hijo: «a él oíd». ¿Qué espacio real tiene en tu semana escuchar lo que Cristo dice en su Palabra?'
    },
    {
      id: 'sacerdote', n: 'Sacerdote: el que ofrece y se ofrece', ref: 'Hebreos 4:14-16; 7:23-27; 9:11-14, 24-28; 10:11-14; Juan 17',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../sacerdocio/img/sac-velo.webp', alt: 'El gran velo del templo rasgado de arriba abajo, con la luz entrando al Lugar Santísimo', pie: 'Al morir Jesús, el velo del templo se rasgó «de arriba abajo» (Mt 27:51).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los sacerdotes de Aarón y Cristo',
          cab: ['Sacerdotes levíticos', 'Cristo'],
          filas: [
            ['Muchos, porque la muerte les impedía continuar (He 7:23)', 'Uno solo, que permanece para siempre (He 7:24)'],
            ['Ofrecían primero por sus propios pecados (He 7:27)', 'Santo, inocente, sin mancha (He 7:26)'],
            ['Ofrecían sangre de animales (He 9:13)', 'Ofreció su propia sangre (He 9:12)'],
            ['Cada día y cada año (He 10:11)', 'Una vez para siempre (He 10:12)'],
            ['Entraban al tabernáculo hecho de mano (He 9:24)', 'Entró en el cielo mismo (He 9:24)'],
            ['Se quedaban de pie: su trabajo nunca terminaba (He 10:11)', 'Se sentó a la diestra de Dios: su obra está terminada (He 10:12)']
          ],
          nota: 'El recurso El sacerdocio en Israel dedica una ruta a Cristo como sumo sacerdote.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/7/24-27', ref: 'Hebreos 7:24-27' }
      ],
      texto: [
        'Un sacerdote es alguien que se presenta delante de Dios en favor de otros. En Israel, los sacerdotes ofrecían sacrificios para la expiación del pecado e intercedían por el pueblo. Una vez al año, en el Día de la Expiación, el sumo sacerdote entraba al Lugar Santísimo con sangre para rociarla sobre el propiciatorio (Lv 16). La carta a los Hebreos, escrita a creyentes judíos tentados a volver al templo, explica que todo eso era sombra de lo que Cristo haría.',
        { h: 'Sacerdote y sacrificio' },
        'La gran novedad es que Cristo es a la vez el sacerdote y el sacrificio. Los sacerdotes ofrecían animales; Cristo «se ofreció a sí mismo sin mancha a Dios» (He 9:14). Y lo hizo una sola vez. Hebreos insiste en ello: los sacerdotes ofrecían cada día los mismos sacrificios, que nunca pueden quitar los pecados, «pero Cristo, habiendo ofrecido una vez para siempre un solo sacrificio por los pecados, se ha sentado a la diestra de Dios» (He 10:12). En el tabernáculo no había sillas: el trabajo del sacerdote nunca terminaba. Cristo se sentó, porque su obra estaba consumada.',
        { h: 'Un sacerdocio mejor' },
        'Jesús no era de la tribu de Leví, sino de Judá. ¿Cómo puede ser sacerdote? Hebreos responde con el salmo 110: es sacerdote para siempre según el orden de Melquisedec, un sacerdocio anterior y superior al de Aarón. La tabla compara los dos. Los sacerdotes de Aarón morían; Cristo vive para siempre. Ellos ofrecían por sus propios pecados; Él no tenía pecado. Ellos entraban en un santuario terrenal; Él entró en el cielo mismo.',
        { h: 'El que intercede' },
        'La obra sacerdotal de Cristo no terminó en la cruz. Ahora está en el cielo «para presentarse ahora por nosotros ante Dios» (He 9:24), y «puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos» (He 7:25). Juan lo llama nuestro abogado para con el Padre (1 Jn 2:1). Por eso Hebreos invita: «Acerquémonos, pues, confiadamente al trono de la gracia» (He 4:16). El velo que separaba el Lugar Santísimo se rasgó cuando Jesús murió, y el camino a la presencia de Dios quedó abierto para todo creyente.',
        { ir: { t: 'Ver la ruta «Cristo, nuestro sumo sacerdote» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/2' } },
        { ejercicio: {
          pregunta: '¿Qué significa que Cristo «se ha sentado» a la diestra de Dios después de ofrecer su sacrificio (He 10:12)?',
          opciones: [
            { t: 'Que su sacrificio está terminado y no necesita repetirse.', ok: true, por_que: 'Los sacerdotes levíticos estaban siempre de pie, porque su trabajo no terminaba (He 10:11).' },
            { t: 'Que dejó de interceder por los creyentes.', ok: false, por_que: 'Hebreos 7:25 dice que vive siempre para interceder: lo terminado es el sacrificio, no la intercesión.' },
            { t: 'Que descansa hasta que llegue el momento de ofrecer otro sacrificio.', ok: false, por_que: 'Hebreos insiste en que se ofreció «una vez para siempre» (He 10:10-14).' }
          ],
          explicacion: 'La cruz fue suficiente: nadie puede añadirle nada, y nadie necesita repetirla.'
        } }
      ],
      pensar: 'Cristo vive para interceder por ti. ¿Cómo cambia tu manera de acercarte a Dios saber que tienes un sumo sacerdote que te comprende y que está orando por ti?'
    },
    {
      id: 'rey', n: 'Rey: el reino que vino y que vendrá', ref: 'Lucas 1:32-33; Mateo 4:17; 12:28; Juan 18:36; Colosenses 1:13; Hechos 1:6-7; 3:19-21; Apocalipsis 11:15; 20:4-6',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-reino.svg', alt: 'Línea del tiempo del reino de Cristo: prometido a David, anunciado por Jesús, rechazado por los líderes de Israel, presente en la iglesia en forma espiritual, y establecido visiblemente en el milenio y para siempre', pie: 'Las etapas del reino de Cristo, según la lectura premilenial.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-multitud-rey.webp', alt: 'Una multitud de galileos rodea a Jesús, de espaldas, con intención de hacerlo rey', pie: 'Después de la multiplicación de los panes, quisieron hacerlo rey por la fuerza, y Él se retiró (Jn 6:15).', origen: 'ia' }
      ],
      texto: [
        'El ángel Gabriel dijo a María que Dios daría a su hijo «el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin» (Lc 1:32-33). Jesús comenzó su ministerio anunciando: «Arrepentíos, porque el reino de los cielos se ha acercado» (Mt 4:17). Y murió bajo un letrero que decía «Este es Jesús, el Rey de los judíos» (Mt 27:37). ¿En qué sentido es Rey, y cuándo reina?',
        { h: 'El reino que llegó' },
        'Con Jesús, el reino de Dios irrumpió en la historia. Cuando echaba fuera demonios por el Espíritu de Dios, el reino había llegado (Mt 12:28). Pero no era el reino que muchos esperaban. Cuando la multitud quiso hacerlo rey por la fuerza, se retiró (Jn 6:15), y ante Pilato dijo: «Mi reino no es de este mundo» (Jn 18:36). Su reino no viene de este mundo ni se establece con sus métodos.',
        { h: 'El reino hoy' },
        'Hoy Cristo reina desde la diestra del Padre. Todo creyente ha sido trasladado al «reino de su amado Hijo» (Col 1:13). El reino está presente donde Cristo es obedecido como Señor y se manifiesta cuando el evangelio libera a los cautivos. Pero todavía no se ve en su plenitud: el mal sigue activo y Satanás todavía es el dios de este siglo (2 Co 4:4).',
        { h: 'El reino que vendrá' },
        'Antes de ascender, los discípulos preguntaron: «Señor, ¿restaurarás el reino a Israel en este tiempo?» (Hch 1:6). Jesús no les dijo que la pregunta estuviera equivocada, sino que no les tocaba saber cuándo. Pedro anunció después que el cielo debía recibir a Jesús «hasta los tiempos de la restauración de todas las cosas» (Hch 3:21). Cuando Cristo vuelva, los reinos del mundo vendrán a ser suyos (Ap 11:15), y reinará con los suyos mil años (Ap 20:4-6), antes del reino eterno.',
        { posturas: {
          titulo: '¿Es el reino de Cristo solo espiritual o también futuro y visible?',
          a: { n: 'Solo espiritual y presente', t: 'El amilenialismo enseña que el reino de Cristo es su gobierno espiritual desde el cielo y en la iglesia, y que los mil años de Apocalipsis 20 son símbolo de toda la era de la iglesia. Las promesas a Israel se cumplirían espiritualmente en la iglesia.' },
          b: { n: 'Presente en forma espiritual y futuro en forma visible', t: 'El premilenialismo enseña que el reino ya está presente en forma espiritual, pero que se establecerá visiblemente en la tierra cuando Cristo vuelva, con un reinado de mil años en el que se cumplirán las promesas hechas a Israel y a David.' },
          c: 'Este recurso sigue la segunda postura, en su forma dispensacionalista. Los profetas anunciaron un reino con paz entre las naciones y justicia en la tierra (Is 2:2-4; 11:1-9) que todavía no se ha visto. Jesús dijo a Jerusalén que no lo vería más hasta que dijera «Bendito el que viene en el nombre del Señor» (Mt 23:39): el rechazo de sus líderes no anuló la promesa, sino que la postergó. El recurso Los últimos tiempos estudia el milenio.'
        } },
        { ir: { t: 'Ver «El milenio» en Los últimos tiempos', a: '../../escatologia/#eventos/20' } }
      ],
      pensar: 'Si Cristo ya es Rey, su reino comienza en quienes lo obedecen. ¿Qué señales de su reinado se ven hoy en tu casa, tu trabajo y tu iglesia?'
    },
    {
      id: 'milagros', n: 'Sus milagros: señales del reino', ref: 'Mateo 11:2-6; Juan 2:11; 20:30-31; Hechos 2:22; Marcos 1:40-42; Lucas 7:11-17',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los milagros de Jesús por su clase',
          cab: ['Clase', 'Ejemplos', 'Qué muestran'],
          filas: [
            ['Sanidades', 'Ciegos, leprosos, paralíticos, la mujer del flujo de sangre', 'Compasión y poder sobre la enfermedad'],
            ['Liberaciones', 'El gadareno, la hija de la sirofenicia, el muchacho lunático', 'El reino de Dios vence al de Satanás (Mt 12:28)'],
            ['Sobre la naturaleza', 'Calma la tempestad, camina sobre el mar, multiplica panes', 'El Creador gobierna su creación'],
            ['Resurrecciones', 'La hija de Jairo, el hijo de la viuda de Naín, Lázaro', 'Señor de la vida y la muerte'],
            ['Señales de Juan', 'Siete señales, del agua en vino a Lázaro', 'Para que creáis que Jesús es el Cristo (Jn 20:31)']
          ],
          nota: 'Los evangelios registran unos treinta y cinco milagros, pero dicen que hubo muchos más (Jn 20:30; 21:25).'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-leproso.webp', alt: 'Jesús, de espaldas, extiende la mano y toca a un leproso arrodillado ante Él', pie: 'Jesús tocó al leproso, a quien nadie tocaba, y quedó limpio (Mr 1:41-42).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/11/2-5', ref: 'Mateo 11:2-5' }
      ],
      texto: [
        'Cuando Juan el Bautista, preso en la fortaleza de Maqueronte, envió a preguntar si Jesús era el que había de venir, Jesús no respondió con un sí o un no. Mandó decirle lo que veían: «Los ciegos ven, los cojos andan, los leprosos son limpiados, los sordos oyen, los muertos son resucitados» (Mt 11:5). Juan conocía a Isaías, que había anunciado esas señales para los días del Mesías (Is 35:5-6; 61:1). Los milagros eran la respuesta.',
        { h: 'Señales' },
        'El evangelio de Juan llama a los milagros señales, porque señalan algo más allá de sí mismos. Al convertir el agua en vino en Caná, Jesús «manifestó su gloria; y sus discípulos creyeron en él» (Jn 2:11). Cada señal revela quién es Jesús: el que multiplica el pan es el pan de vida; el que da vista al ciego es la luz del mundo; el que resucita a Lázaro es la resurrección y la vida. Pedro dijo en Pentecostés que Jesús fue un varón aprobado por Dios «con las maravillas, prodigios y señales que Dios hizo entre vosotros por medio de él» (Hch 2:22).',
        { h: 'El reino en acción' },
        'Los milagros mostraban que el reino de Dios había llegado y estaba deshaciendo las obras del diablo. La enfermedad, la posesión demoníaca y la muerte son consecuencias de un mundo caído; en los milagros de Jesús se ve un anticipo de lo que será la creación restaurada. Por eso no son solo pruebas de su poder, sino también expresiones de su compasión. Jesús tocó al leproso, a quien la ley mandaba mantener aparte; se detuvo ante el cortejo fúnebre de Naín porque se compadeció de la madre viuda (Lc 7:13); lloró con Marta y María antes de resucitar a su hermano.',
        { h: 'Los milagros hoy' },
        'Jesús envió a sus discípulos a predicar el reino y sanar enfermos (Lc 9:2), y prometió que los que creyeran harían las obras que Él hacía (Jn 14:12). El libro de Hechos muestra a la iglesia haciendo señales en el nombre de Jesús. La línea pentecostal clásica cree que el Señor sigue sanando y obrando milagros por el poder del Espíritu, como parte del evangelio. Al mismo tiempo, los milagros no son un espectáculo: Jesús se negó a hacer señales para satisfacer la curiosidad de Herodes o de los fariseos (Lc 23:8-9; Mt 12:38-39), y sus milagros siempre apuntaban a Él y llamaban a la fe.',
        { ejercicio: {
          pregunta: '¿Por qué Jesús respondió a Juan el Bautista describiendo sus milagros?',
          opciones: [
            { t: 'Porque esos milagros eran las señales que Isaías había anunciado para los días del Mesías.', ok: true, por_que: 'Isaías 35:5-6 y 61:1 hablan de ciegos que ven, cojos que saltan y buenas nuevas a los pobres.' },
            { t: 'Porque no quería admitir que era el Mesías.', ok: false, por_que: 'Su respuesta sí afirma que es el Mesías, pero de una manera que Juan, conocedor de Isaías, entendería.' },
            { t: 'Porque Juan dudaba de que Jesús pudiera hacer milagros.', ok: false, por_que: 'La pregunta de Juan era si Jesús era «aquel que había de venir», no si podía hacer milagros.' }
          ],
          explicacion: 'Los milagros de Jesús cumplen las profecías y muestran que el reino de Dios llegó con Él.'
        } }
      ],
      pensar: 'Los milagros de Jesús eran poder y compasión juntos. ¿Oras por los enfermos con fe en su poder y con la misma compasión que Él tenía?'
    },
    {
      id: 'transfiguracion', n: 'La transfiguración', ref: 'Mateo 17:1-9; Marcos 9:2-8; Lucas 9:28-36; 2 Pedro 1:16-18',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/transfiguracion.webp', alt: 'En la cima de un monte, de noche, Jesús de espaldas resplandece con vestidos blancos como la luz; a sus lados se distinguen Moisés y Elías envueltos en luz, y en primer plano Pedro, Jacobo y Juan, postrados, se cubren los ojos', pie: 'En el monte, el rostro de Jesús resplandeció «como el sol» (Mt 17:2).', origen: 'ia', foco: '50% 40%' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/17/1-9', ref: 'Mateo 17:1-9' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que vieron y oyeron',
          cab: ['Detalle', 'Significado'],
          filas: [
            ['Su rostro y sus vestidos resplandecieron', 'Se dejó ver la gloria que tenía y que velaba su humanidad'],
            ['Moisés y Elías', 'La ley y los profetas dan testimonio de Él'],
            ['Hablaban de su partida en Jerusalén (Lc 9:31)', 'La gloria pasa por la cruz'],
            ['La nube de luz', 'La presencia de Dios, como en el Sinaí y el tabernáculo'],
            ['Este es mi Hijo amado… a él oíd', 'Superior a Moisés y a Elías: el profeta a quien hay que oír'],
            ['Jesús solo', 'Moisés y Elías desaparecen; queda Cristo']
          ],
          nota: 'La tradición ubica el monte en el Tabor; muchos estudiosos prefieren el Hermón, cerca de Cesarea de Filipo.'
        } }
      ],
      texto: [
        'Seis días después de la confesión de Pedro en Cesarea de Filipo, Jesús llevó a Pedro, a Jacobo y a Juan a un monte alto. Allí «se transfiguró delante de ellos, y resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz» (Mt 17:2). La palabra griega es la misma de la que viene «metamorfosis»: un cambio de forma visible.',
        { h: 'La gloria velada' },
        'Durante su vida terrenal, la gloria del Hijo estaba velada por su humanidad común. La gente veía a un artesano de Nazaret. En el monte, por un momento, los tres discípulos vieron lo que había detrás del velo. Juan recordaría después: «vimos su gloria, gloria como del unigénito del Padre» (Jn 1:14). Y Pedro escribiría que no siguió fábulas artificiosas, sino que vio con sus propios ojos su majestad en el monte santo (2 P 1:16-18).',
        { h: 'Moisés y Elías' },
        'Junto a Jesús aparecieron Moisés y Elías. Moisés representaba la ley y Elías a los profetas: toda la Escritura de Israel daba testimonio de Él. Los dos habían tenido encuentros con Dios en un monte, el Sinaí u Horeb, y ninguno de los dos tenía una tumba conocida. Lucas agrega un detalle importante: hablaban de su partida, literalmente su «éxodo», que iba a cumplir en Jerusalén (Lc 9:31). La gloria del monte no evitaba la cruz, sino que la anunciaba.',
        { h: '«A él oíd»' },
        'Pedro, sin saber qué decir, propuso hacer tres enramadas, una para cada uno, como si Moisés, Elías y Jesús estuvieran al mismo nivel. Entonces una nube de luz los cubrió y la voz del Padre dijo: «Este es mi Hijo amado, en quien tengo complacencia; a él oíd» (Mt 17:5). Cuando alzaron los ojos, «a nadie vieron sino a Jesús solo» (Mt 17:8). La ley y los profetas cumplieron su papel de señalarlo; ahora la voz que hay que oír es la del Hijo.',
        { h: 'Un anticipo' },
        'Jesús había dicho justo antes que algunos de sus discípulos no morirían hasta ver al Hijo del Hombre viniendo en su reino (Mt 16:28). La transfiguración fue un anticipo de la gloria con que volverá. Y es también una promesa para los creyentes: Pablo usa la misma palabra para decir que somos transformados de gloria en gloria en su misma imagen (2 Co 3:18), y que Cristo transformará nuestro cuerpo para que sea semejante al cuerpo de su gloria (Fil 3:21).'
      ],
      pensar: 'Los discípulos bajaron del monte y encontraron un muchacho atormentado y discípulos impotentes (Mt 17:14-21). ¿Cómo te prepara la presencia de Dios para servir en los valles de la vida?'
    }
  ];

  /* ---------------- V. La cruz ---------------- */
  const cruz = [
    {
      id: 'necesaria', n: '¿Por qué tenía que morir Cristo?', ref: 'Marcos 8:31; Lucas 24:26; Romanos 3:23-26; 6:23; Hebreos 9:22; Mateo 26:36-44',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/getsemani.webp', alt: 'De noche, entre olivos antiguos de tronco retorcido, Jesús, de espaldas, ora arrodillado con las manos sobre una roca; a lo lejos, bajo la luna llena, se ven las murallas de Jerusalén y el templo, y más cerca tres discípulos se han dormido sentados junto a un olivo', pie: 'En Getsemaní: «Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú» (Mt 26:39).', origen: 'ia', foco: '50% 55%' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ro/3/23-26', ref: 'Romanos 3:23-26' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Por qué la cruz era necesaria',
          cab: ['Porque…', 'Texto'],
          filas: [
            ['Todos pecaron', 'Todos pecaron, y están destituidos de la gloria de Dios (Ro 3:23)'],
            ['El pecado merece la muerte', 'La paga del pecado es muerte (Ro 6:23)'],
            ['Dios es justo y no puede pasar por alto el pecado', 'A fin de que él sea el justo, y el que justifica (Ro 3:26)'],
            ['Sin sangre no hay perdón', 'Sin derramamiento de sangre no se hace remisión (He 9:22)'],
            ['Los sacrificios de animales no bastaban', 'La sangre de los toros… no puede quitar los pecados (He 10:4)'],
            ['Dios lo había decidido y anunciado', 'Le era necesario al Hijo del Hombre padecer mucho (Mr 8:31)']
          ],
          nota: 'La palabra «necesario» aparece una y otra vez cuando Jesús habla de su muerte.'
        } }
      ],
      texto: [
        'Desde la confesión de Pedro, Jesús comenzó a enseñar a sus discípulos que «le era necesario al Hijo del Hombre padecer mucho… y ser muerto, y resucitar después de tres días» (Mr 8:31). Pedro lo reprendió, y Jesús le respondió con dureza. En Getsemaní oró tres veces que, si era posible, pasara de Él esa copa. No fue posible. ¿Por qué? ¿No podía Dios simplemente perdonar?',
        { h: 'El problema del pecado' },
        'La respuesta comienza con el pecado. «Todos pecaron, y están destituidos de la gloria de Dios» (Ro 3:23). El pecado no es solo un error o una debilidad: es rebelión contra un Dios santo, y su consecuencia es la muerte, la separación de Dios. Además, Dios es justo. Un juez que dejara libre a un culpable sin más sería un juez injusto. Si Dios pasara por alto el pecado, dejaría de ser justo; si castigara a todos los pecadores, nadie se salvaría.',
        { h: 'La solución de Dios' },
        'Pablo explica la solución en un texto que la tabla y el pasaje reproducen. Dios puso a Cristo «como propiciación por medio de la fe en su sangre, para manifestar su justicia» (Ro 3:25). En la cruz, Dios castigó el pecado, de modo que su justicia quedó a salvo, y al mismo tiempo perdonó al pecador. Así puede ser «el justo, y el que justifica al que es de la fe de Jesús» (Ro 3:26). La cruz es el lugar donde se encuentran la justicia y el amor de Dios, como se vio en Dios y la Trinidad.',
        { h: 'Los sacrificios anunciaban la cruz' },
        'Durante siglos, Israel ofreció sacrificios. La ley enseñaba que sin derramamiento de sangre no hay perdón (He 9:22), porque la vida está en la sangre y una vida debía darse por otra (Lv 17:11). Pero la sangre de toros y machos cabríos no podía quitar el pecado de verdad (He 10:4): solo lo cubría hasta que llegara el sacrificio verdadero. Dios había tenido paciencia con los pecados pasados, mirando hacia la cruz (Ro 3:25).',
        { h: 'Por amor' },
        'La cruz no fue un accidente ni una derrota. Pedro dijo en Pentecostés que Jesús fue entregado «por el determinado consejo y anticipado conocimiento de Dios» (Hch 2:23). Pero tampoco fue un castigo impuesto a un Hijo que no quería. Jesús dijo: «nadie me la quita, sino que yo de mí mismo la pongo» (Jn 10:18). Fue el Dios trino quien, por amor, decidió salvarnos a ese precio.',
        { ejercicio: {
          pregunta: 'Según Romanos 3:26, ¿qué logra Dios en la cruz?',
          opciones: [
            { t: 'Ser justo y, al mismo tiempo, justificar al que cree en Jesús.', ok: true, por_que: 'La cruz satisface la justicia de Dios y le permite perdonar sin dejar de ser justo.' },
            { t: 'Mostrar que el pecado no era tan grave como parecía.', ok: false, por_que: 'La cruz muestra lo contrario: el pecado es tan grave que costó la muerte del Hijo.' },
            { t: 'Cambiar su ley para que el pecado ya no merezca castigo.', ok: false, por_que: 'La ley no cambió: el castigo cayó sobre Cristo en lugar del pecador.' }
          ],
          explicacion: 'En la cruz, Dios no rebajó su justicia ni su amor: los cumplió los dos.'
        } }
      ],
      pensar: 'Jesús oró tres veces en Getsemaní y aun así fue a la cruz. ¿Qué te dice eso sobre lo grave de tu pecado y lo grande de su amor?'
    },
    {
      id: 'crucifixion', n: 'La crucifixión en la historia', ref: 'Marcos 15:15-41; Juan 19:16-37; Deuteronomio 21:22-23; Gálatas 3:13; 1 Corintios 1:18-25',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/golgota.webp', alt: 'Vista lejana, al mediodía bajo un cielo oscurecido, de una colina rocosa fuera de las murallas de Jerusalén con tres cruces de madera y siluetas a contraluz; en primer plano, un grupo de mujeres con velos mira desde lejos', pie: 'Las mujeres que habían seguido a Jesús desde Galilea miraban «de lejos» (Mr 15:40).', origen: 'ia', foco: '50% 50%' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El viernes de la crucifixión, según los evangelios',
          cab: ['Hora aprox.', 'Hecho', 'Texto'],
          filas: [
            ['Madrugada', 'Juicio ante el Sanedrín y negación de Pedro', 'Mr 14:53-72'],
            ['Temprano', 'Juicio ante Pilato y ante Herodes Antipas; azotes', 'Mr 15:1-15; Lc 23:6-12'],
            ['Hora tercera (9 de la mañana)', 'Lo crucifican', 'Mr 15:25'],
            ['Hora sexta a novena (mediodía a 3 de la tarde)', 'Tinieblas sobre la tierra', 'Mr 15:33'],
            ['Hora novena (3 de la tarde)', '«Dios mío, Dios mío…», «Consumado es» y muere', 'Mr 15:34-37; Jn 19:30'],
            ['Tarde', 'José de Arimatea lo sepulta antes del sábado', 'Mr 15:42-46']
          ],
          nota: 'Juan 19:14 menciona la hora sexta durante el juicio; se explica en el recurso Pesos, medidas, monedas y horas bíblicas.'
        } }
      ],
      texto: [
        'La crucifixión era la forma de ejecución más cruel y humillante del mundo romano. El orador romano Cicerón la llamó el suplicio más cruel y terrible, y dijo que la sola palabra cruz debía estar lejos de los oídos de un ciudadano romano. Se reservaba para esclavos, rebeldes y criminales de las provincias. Se hacía en público, junto a los caminos, para que sirviera de advertencia.',
        { h: 'Lo que sufrió Jesús' },
        'Los evangelios cuentan los hechos con sobriedad, sin detenerse en los detalles del dolor. Jesús fue azotado por soldados romanos, burlado con una corona de espinas y un manto de púrpura, y obligado a cargar el madero hasta que, debilitado, otro tuvo que llevarlo. Fue crucificado entre dos malhechores, en un lugar llamado Gólgota, fuera de la ciudad (He 13:12). Allí estuvo unas seis horas. Los que pasaban lo insultaban, los principales sacerdotes se burlaban y los soldados se repartían sus vestidos. Al final, clamó a gran voz y entregó el espíritu.',
        { h: 'Maldito el colgado en un madero' },
        'Para un judío, la cruz era además una maldición. La ley decía que el cuerpo de un ejecutado colgado en un madero no debía pasar la noche allí, «porque maldito por Dios es el colgado» (Dt 21:23). Por eso, un Mesías crucificado parecía una contradicción: Pablo dice que era tropezadero para los judíos, y para los griegos, locura (1 Co 1:23). Pero Pablo descubrió el sentido de esa maldición: «Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición» (Ga 3:13). Él cargó la maldición que nos correspondía. El recurso El mundo judío en tiempos de Jesús explica por qué la cruz era un escándalo.',
        { h: '¿Quién mató a Jesús?' },
        'Pedro responde en Hechos: los líderes y la multitud de Jerusalén de esa generación, Herodes, Pilato y los gentiles (Hch 2:23, 36; 4:27). Nunca se puede culpar al pueblo judío de otras épocas, como se hizo con terribles consecuencias en la historia. Y detrás de todos ellos, los pecados de toda la humanidad. Pero la Biblia también dice que nadie le quitó la vida: Él la puso por sí mismo (Jn 10:18), y Dios lo entregó por todos nosotros (Ro 8:32).',
        { h: 'Un hecho histórico' },
        'La crucifixión de Jesús es uno de los hechos mejor atestiguados de la antigüedad: la mencionan los cuatro evangelios, las cartas de Pablo, el historiador judío Josefo y el historiador romano Tácito. En 1968 se encontró en Jerusalén el talón de un hombre del siglo I, llamado Yehohanán, atravesado por un clavo: la prueba arqueológica de cómo se crucificaba en tiempos de Jesús.',
        { ir: { t: 'Ver «Un Mesías crucificado» en El mundo judío en tiempos de Jesús', a: '../../mundo-judio/#jesus/7' } },
        { ir: { t: 'Ver la última semana en la Armonía de los evangelios', a: '../../evangelios/' } }
      ],
      pensar: 'Pablo dijo: «me propuse no saber entre vosotros cosa alguna sino a Jesucristo, y a éste crucificado» (1 Co 2:2). ¿Qué lugar tiene la cruz en tu fe y en tu predicación?'
    },
    {
      id: 'sustitucion', n: 'Sacrificio y sustitución', ref: 'Isaías 53:4-12; 2 Corintios 5:21; 1 Pedro 2:24; 3:18; Gálatas 3:13; Juan 1:29; Génesis 22:13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@is/53/4-6', ref: 'Isaías 53:4-6' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/moriah.webp', alt: 'En el monte Moriah, Abraham e Isaac junto a un altar de piedras; un carnero está trabado en un zarzal', pie: 'En Moriah, Dios proveyó un carnero «en lugar de su hijo» (Gn 22:13).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Por nosotros»: el lenguaje de la sustitución',
          cab: ['Texto', 'Lo que dice'],
          filas: [
            ['Is 53:5', 'Él herido fue por nuestras rebeliones'],
            ['Is 53:6', 'Jehová cargó en él el pecado de todos nosotros'],
            ['Mr 10:45', 'Dar su vida en rescate por muchos'],
            ['2 Co 5:21', 'Al que no conoció pecado, por nosotros lo hizo pecado'],
            ['Ga 3:13', 'Hecho por nosotros maldición'],
            ['1 P 2:24', 'Llevó él mismo nuestros pecados en su cuerpo sobre el madero'],
            ['1 P 3:18', 'El justo por los injustos, para llevarnos a Dios']
          ],
          nota: 'En griego, las preposiciones hypér y antí significan «a favor de» y «en lugar de».'
        } }
      ],
      texto: [
        'Setecientos años antes de la cruz, Isaías describió a un siervo de Jehová que sufriría de una manera única. El pasaje, Isaías 52:13 a 53:12, es el texto del Antiguo Testamento más citado en el Nuevo para explicar la muerte de Jesús. Lo central es que el siervo no sufre por sus propios pecados, sino por los de otros: «Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él» (Is 53:5).',
        { h: 'En nuestro lugar' },
        'Esto es lo que la teología llama sustitución: Cristo murió en nuestro lugar, recibiendo el castigo que nosotros merecíamos. La tabla muestra que el Nuevo Testamento lo dice una y otra vez. Pablo escribe que Dios, «al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él» (2 Co 5:21). Es un intercambio: Él tomó nuestro pecado y nos da su justicia. Pedro dice que llevó él mismo nuestros pecados en su cuerpo sobre el madero, «el justo por los injustos» (1 P 3:18).',
        { h: 'Figuras de la sustitución' },
        'Dios había enseñado la idea de la sustitución desde mucho antes. En el monte Moriah, cuando Abraham estaba por sacrificar a Isaac, Dios proveyó un carnero que fue ofrecido «en lugar de su hijo» (Gn 22:13). En la Pascua, el cordero moría y su sangre en los postes protegía al primogénito. En el Día de la Expiación, el sumo sacerdote ponía las manos sobre la cabeza de un macho cabrío y confesaba sobre él los pecados del pueblo (Lv 16:21). Por eso Juan el Bautista presentó a Jesús como «el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29).',
        { h: 'Una objeción' },
        'Algunos objetan que es injusto castigar a un inocente en lugar de los culpables. La objeción tendría fuerza si Dios hubiera tomado a un tercero cualquiera y lo hubiera castigado contra su voluntad. Pero Cristo no es un tercero: es Dios mismo, el ofendido, que en la persona del Hijo carga con la ofensa. Y no fue obligado: se entregó voluntariamente por amor (Ga 2:20). Además, como nuevo Adán y cabeza de su pueblo, nos representa: lo que Él hizo cuenta para los que están unidos a Él por la fe.',
        { h: 'Por mí' },
        'Pablo no habla de la cruz como una teoría lejana, sino como algo personal: «el Hijo de Dios, el cual me amó y se entregó a sí mismo por mí» (Ga 2:20). La sustitución no es solo una doctrina para entender; es una verdad para recibir con gratitud.',
        { ejercicio: {
          pregunta: '¿Qué intercambio describe 2 Corintios 5:21?',
          opciones: [
            { t: 'Cristo cargó nuestro pecado y nosotros recibimos su justicia.', ok: true, por_que: 'Dios lo hizo pecado por nosotros «para que nosotros fuésemos hechos justicia de Dios en él».' },
            { t: 'Cristo se volvió pecador y nosotros nos volvimos divinos.', ok: false, por_que: 'Cristo no cometió pecado: cargó el nuestro. Y nosotros no nos volvemos Dios, sino justos ante Él.' },
            { t: 'Cristo cambió su santidad por nuestro arrepentimiento.', ok: false, por_que: 'El texto habla de pecado y justicia, no de arrepentimiento: la iniciativa y el costo son de Dios.' }
          ],
          explicacion: 'Lo que era nuestro, el pecado, pasó a Cristo; lo que es suyo, la justicia, pasa a nosotros.'
        } }
      ],
      pensar: 'Isaías dice: «Todos nosotros nos descarriamos como ovejas… mas Jehová cargó en él el pecado de todos nosotros» (Is 53:6). Lee el versículo poniendo tu nombre donde dice «nosotros». ¿Qué produce en ti?'
    },
    {
      id: 'vocabulario', n: 'Propiciación, redención, reconciliación', ref: 'Romanos 3:24-25; 5:10-11; 1 Juan 2:2; 4:10; Efesios 1:7; 1 Pedro 1:18-19; 2 Corintios 5:18-21',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cruz.svg', alt: 'Esquema en cuatro cuadros: el templo y la propiciación, el mercado y la redención, el tribunal y la justificación, la familia y la reconciliación, cada uno con su problema y lo que Cristo hizo', pie: 'Cuatro imágenes del mundo antiguo para explicar lo que Cristo hizo en la cruz.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las palabras de la cruz',
          cab: ['Palabra', 'Imagen', 'El problema', 'Lo que hizo Cristo', 'Texto'],
          filas: [
            ['Propiciación', 'El templo', 'La ira justa de Dios contra el pecado', 'Satisfizo su justicia con su sangre', 'Ro 3:25; 1 Jn 4:10'],
            ['Redención', 'El mercado de esclavos', 'La esclavitud del pecado', 'Pagó el precio de nuestra libertad', 'Ef 1:7; 1 P 1:18-19'],
            ['Justificación', 'El tribunal', 'La culpa ante el juez', 'Fuimos declarados justos', 'Ro 5:1; 3:24'],
            ['Reconciliación', 'La familia', 'La enemistad con Dios', 'Hizo la paz', '2 Co 5:18-19; Ro 5:10']
          ],
          nota: 'Cada palabra mira la cruz desde un ángulo distinto: ninguna sola lo dice todo.'
        } }
      ],
      texto: [
        'El Nuevo Testamento usa varias palabras para explicar lo que Cristo hizo en la cruz. Cada una viene de un ámbito de la vida antigua y describe la salvación desde un ángulo distinto, como las caras de un diamante. El esquema y la tabla las resumen.',
        { h: 'Propiciación: el templo' },
        'Juan escribe que Dios «envió a su Hijo en propiciación por nuestros pecados» (1 Jn 4:10). Propiciar significa aplacar o satisfacer la ira de alguien. En las religiones paganas, los hombres ofrecían sacrificios para calmar a dioses caprichosos. La Biblia es muy distinta: Dios no tiene arrebatos de enojo, sino una oposición justa y santa al pecado; y no son los hombres quienes lo aplacan, sino Dios mismo quien provee la propiciación. En la Septuaginta, la misma palabra se usa para el propiciatorio, la tapa del arca donde se rociaba la sangre en el Día de la Expiación. Cristo es el lugar y el sacrificio donde la justicia de Dios queda satisfecha.',
        { h: 'Redención: el mercado' },
        'Redimir es comprar la libertad de alguien pagando un precio. En el mundo antiguo, un esclavo podía ser liberado si alguien pagaba su rescate. Jesús dijo que vino a dar su vida en rescate por muchos (Mr 10:45). Pedro recuerda que fuimos rescatados «no con cosas corruptibles, como oro o plata, sino con la sangre preciosa de Cristo» (1 P 1:18-19). Éramos esclavos del pecado, y Cristo pagó el precio. Por eso, dice Pablo, «no sois vuestros… habéis sido comprados por precio» (1 Co 6:19-20).',
        { h: 'Justificación: el tribunal' },
        'Justificar es un término legal: declarar justo a alguien ante un tribunal. El pecador está culpable ante Dios, pero por la fe en Cristo es declarado justo, no porque lo merezca, sino porque Cristo cargó su culpa. La estación siguiente se dedica a esta palabra.',
        { h: 'Reconciliación: la familia' },
        'Reconciliar es restablecer una relación rota. El pecado nos hizo enemigos de Dios (Ro 5:10). En la cruz, «Dios estaba en Cristo reconciliando consigo al mundo, no tomándoles en cuenta a los hombres sus pecados» (2 Co 5:19). Es notable quién toma la iniciativa: no somos nosotros quienes convencemos a Dios, sino Dios quien busca reconciliarse con nosotros. Y nos ha dado el ministerio de la reconciliación: rogar a otros que se reconcilien con Dios.',
        { ejercicio: {
          pregunta: '¿En qué se diferencia la propiciación bíblica de los sacrificios paganos?',
          opciones: [
            { t: 'En la Biblia es Dios mismo quien provee la propiciación, y su ira es una oposición santa al pecado, no un capricho.', ok: true, por_que: '1 Juan 4:10: Dios «envió a su Hijo en propiciación»; la iniciativa es del amor de Dios.' },
            { t: 'En la Biblia no existe la ira de Dios, solo su amor.', ok: false, por_que: 'Romanos 1:18 y 5:9 hablan de la ira de Dios; la cruz nos salva de ella.' },
            { t: 'En la Biblia los hombres aplacan a Dios con sus buenas obras.', ok: false, por_que: 'Nadie puede aplacar a Dios con sus obras: Cristo es la propiciación.' }
          ],
          explicacion: 'El Dios que se ofende es el mismo que provee el sacrificio: eso es amor.'
        } }
      ],
      pensar: '«No sois vuestros… habéis sido comprados por precio» (1 Co 6:19-20). ¿Qué decisiones concretas cambiarían si vivieras cada día sabiendo cuánto le costaste a Cristo?'
    },
    {
      id: 'justificados', n: 'Justificados por la fe', ref: 'Romanos 3:21-28; 4:1-8; 5:1; Gálatas 2:16; Habacuc 2:4; Filipenses 3:9',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ro/5/1', ref: 'Romanos 5:1' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué es y qué no es la justificación',
          cab: ['Es', 'No es'],
          filas: [
            ['Una declaración de Dios: el creyente es justo ante Él', 'Un proceso por el que el creyente se va haciendo justo (eso es la santificación)'],
            ['Por la justicia de Cristo, contada al creyente', 'Por los méritos propios o las obras de la ley'],
            ['Recibida por la fe', 'Ganada por el esfuerzo'],
            ['Completa desde el primer momento', 'Parcial, que se completa con el tiempo'],
            ['El fundamento de la paz con Dios', 'Un permiso para seguir pecando (Ro 6:1-2)']
          ],
          nota: 'El desarrollo completo de la justificación, la regeneración y la santificación va en el recurso La salvación, en preparación.'
        } }
      ],
      texto: [
        'Si la cruz satisface la justicia de Dios, ¿cómo llega ese beneficio a una persona? Pablo responde: por la fe. «Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo» (Ro 5:1). Esta estación presenta la justificación en relación con la obra de Cristo; cómo se aplica la salvación al creyente se estudiará en detalle en el recurso La salvación, hoy en preparación.',
        { h: 'Declarado justo' },
        'Justificar es declarar justo, como un juez que dicta sentencia. Pablo afirma algo que parecía escandaloso: Dios «justifica al impío» (Ro 4:5). No es que Dios declare inocente a un culpable sin más, lo que sería injusto. La base es la cruz: Cristo cargó la culpa y Dios cuenta al creyente la justicia de Cristo. Pablo lo ilustra con Abraham, que creyó a Dios «y le fue contado por justicia» (Ro 4:3), antes de circuncidarse y antes de la ley.',
        { h: 'Por la fe, no por las obras' },
        'La justificación no se gana: se recibe. «Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley» (Ro 3:28). La fe no es una obra que merezca algo, sino la mano vacía que recibe el regalo. Por eso nadie puede jactarse (Ef 2:8-9). Martín Lutero redescubrió esta verdad al estudiar Romanos y el texto de Habacuc que Pablo cita: «el justo por la fe vivirá» (Ro 1:17). El recurso Historia de la Iglesia II cuenta esa historia.',
        { h: 'Fe que obra' },
        'Santiago dice que la fe sin obras está muerta y que Abraham fue justificado por las obras cuando ofreció a Isaac (Stg 2:17-24). No contradice a Pablo. Pablo habla de cómo somos declarados justos delante de Dios; Santiago, de cómo se muestra delante de los hombres que la fe es verdadera. La fe que salva es la que transforma la vida: somos salvos por la fe sola, pero la fe que salva nunca está sola.',
        { h: 'Paz con Dios' },
        'El primer fruto de la justificación es la paz con Dios. El creyente ya no vive con miedo a la condenación, porque «ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). Su seguridad no depende de cómo se sintió hoy, sino de lo que Cristo hizo.',
        { ir: { t: 'Ver la Reforma en Historia de la Iglesia II', a: '../../historia-iglesia-2/' } },
        { ejercicio: {
          pregunta: '¿Cómo se relacionan Pablo (justificados por la fe) y Santiago (justificados por las obras)?',
          opciones: [
            { t: 'Pablo habla de cómo somos declarados justos ante Dios; Santiago, de cómo se demuestra que la fe es verdadera.', ok: true, por_que: 'Santiago combate una fe de palabras que no cambia la vida (Stg 2:14-17), no la justificación por la fe.' },
            { t: 'Se contradicen, y hay que elegir a uno de los dos.', ok: false, por_que: 'Ambos son Palabra de Dios y usan el ejemplo de Abraham con propósitos distintos.' },
            { t: 'Santiago enseña que las obras son la causa de la salvación.', ok: false, por_que: 'Santiago enseña que las obras son la evidencia de una fe viva, no la causa de la salvación.' }
          ],
          explicacion: 'Somos salvos por la fe sola, pero la fe que salva nunca está sola.'
        } }
      ],
      pensar: '«Ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). ¿Vives con la paz de quien ya fue declarado justo, o con el miedo de quien todavía intenta ganarse a Dios?'
    }
  ];

  window.__CRISTO.oficios = oficios;
  window.__CRISTO.cruz = cruz;
})();
