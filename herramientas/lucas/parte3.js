/* Lucas · parte 3: ruta III, Comentario (Lucas 10:25–24:53) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  L.comentario.push(
    {
      id: 'c10', n: 'Capítulo 10: el buen samaritano y Marta y María', ref: 'Lucas 10:25-42; Deuteronomio 6:5; Levítico 19:18', fecha: 32,
      visual: [
        img('lc-buen-samaritano.webp', 'En un camino pedregoso del desierto de Judea, un viajero samaritano con turbante se arrodilla junto a un hombre herido y le venda las heridas, con su asno al lado', 'El samaritano se detiene (Lc 10:33-34).'),
        img('../mundo-judio/img/mj-marta-maria.webp', 'En una casa de Betania, una joven se sienta a escuchar en el suelo mientras su hermana, con delantal, trae un cántaro con gesto de reproche', 'Marta y María (Lc 10:39-40).'),
        mapa({ view: V.judea, capas: ['nt-judea'], lugares: ['jerusalen', 'jerico', 'betania', 'desierto-judea'], trazos: ['c-jerico'] }, 'Mapa')
      ],
      texto: [
        'Un intérprete de la ley preguntó a Jesús: «Maestro, ¿haciendo qué cosa heredaré la vida eterna?» (Lc 10:25). Jesús le devolvió la pregunta, y el hombre respondió bien: amar a Dios con todo el corazón y al prójimo como a sí mismo (Dt 6:5; Lv 19:18). «Haz esto, y vivirás.» Pero él, «queriendo justificarse a sí mismo», preguntó: «¿Y quién es mi prójimo?» (Lc 10:29).',
        { h: 'Un camino peligroso' },
        'El camino de Jerusalén a Jericó baja unos mil metros en treinta kilómetros por el desierto de Judea, y era conocido por los asaltantes. Un hombre cayó en manos de ladrones, que lo dejaron medio muerto. Pasó un sacerdote, y luego un levita; los dos lo vieron y pasaron de largo. Quizás temían contaminarse con un muerto o ser asaltados ellos mismos.',
        { h: 'El samaritano' },
        'Entonces viene la sorpresa. El que se detuvo fue un samaritano, alguien a quien el intérprete de la ley despreciaba. «Viéndole, fue movido a misericordia» (Lc 10:33): le vendó las heridas con aceite y vino, lo puso en su cabalgadura, lo llevó a un mesón, pagó dos denarios y prometió pagar lo que faltara. Dio su tiempo, su dinero y su seguridad.',
        'Jesús cambió la pregunta. El intérprete quería saber a quién estaba obligado a amar; Jesús le preguntó quién «fue el prójimo» del herido. Él no pudo decir «el samaritano» y respondió: «El que usó de misericordia con él». «Ve, y haz tú lo mismo» (Lc 10:37). El prójimo no es una categoría que se define para limitar el amor; es cualquiera que necesita misericordia.',
        { h: 'Marta y María' },
        'Inmediatamente después, Lucas cuenta la visita a Betania. Marta servía, afanada; María estaba sentada a los pies de Jesús, oyendo su palabra, como un discípulo ante su maestro. Marta se quejó, y Jesús le respondió con cariño: «Marta, Marta, afanada y turbada estás con muchas cosas. Pero sólo una cosa es necesaria; y María ha escogido la buena parte, la cual no le será quitada» (Lc 10:41-42).',
        'Los dos relatos van juntos: el samaritano enseña a servir; María, a escuchar. El discípulo necesita ambas cosas, pero el servicio nace de estar a los pies de Jesús.',
        ir('Ir a la parábola del buen samaritano', '#parabolas/2'),
        ir('Ver Marta y María en la Armonía', R.armonia + '#marta-maria')
      ],
      pensar: '¿Te pareces más a Marta, afanada en servir, o a María, sentada a escuchar? ¿Qué te diría Jesús hoy con ese «Marta, Marta»?'
    },
    {
      id: 'c11', n: 'Capítulo 11: enséñanos a orar', ref: 'Lucas 11:1-54', fecha: 32,
      visual: [
        img('lc-jesus-ora.webp', 'Antes del amanecer, en una ladera rocosa de Galilea, una figura vista de espaldas ora de rodillas con las manos abiertas, mientras unos discípulos esperan a cierta distancia', 'Jesús orando en un lugar apartado (Lc 11:1).'),
        cita('Lucas 11:1-4', '@@lc/11/1-4'),
        cita('Lucas 11:9-13', '@@lc/11/9-13', 'Pedid')
      ],
      texto: [
        'Jesús estaba orando, y cuando terminó, uno de sus discípulos le pidió: «Señor, enséñanos a orar» (Lc 11:1). Los discípulos habían visto que la oración era la fuente de la vida de Jesús.',
        { h: 'El Padre nuestro' },
        'Jesús les dio un modelo breve. Comienza con «Padre», la palabra con que Él mismo se dirigía a Dios, y la comparte con sus discípulos. Pide primero por Dios: que su nombre sea santificado y venga su reino. Luego por nuestras necesidades: el pan de cada día, el perdón «porque también nosotros perdonamos a todos los que nos deben», y que no nos meta en tentación. La versión de Lucas es más corta que la de Mateo 6:9-13; Jesús la enseñó en más de una ocasión.',
        { h: 'Pedir con insistencia' },
        'Luego contó la parábola de un hombre que, a medianoche, va a pedir tres panes a su amigo para un viajero que llegó. El amigo no quiere levantarse, pero lo hace «por su importunidad» (Lc 11:8). Si un amigo cansado responde, ¡cuánto más Dios! «Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá» (Lc 11:9).',
        'Jesús termina con una comparación entre padres: ningún padre da una serpiente al hijo que pide un pescado. «Pues si vosotros, siendo malos, sabéis dar buenas dádivas a vuestros hijos, ¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?» (Lc 11:13). Donde Mateo dice «buenas cosas» (Mt 7:11), Lucas dice «el Espíritu Santo». El mejor regalo del Padre es su Espíritu, y Él lo da a sus hijos que lo piden.',
        { h: 'Más fuerte que el fuerte' },
        'Cuando Jesús expulsó un demonio, algunos dijeron que lo hacía por Beelzebú. Jesús respondió que un reino dividido no permanece, y que si echaba los demonios «por el dedo de Dios», el reino de Dios había llegado a ellos (Lc 11:20). Él es el más fuerte que vence al fuerte armado y reparte su botín.',
        { h: 'Ayes contra la religión vacía' },
        'En casa de un fariseo, Jesús denunció una religión que limpia lo de fuera y deja el interior lleno de rapacidad, que diezma la menta y pasa por alto «la justicia y el amor de Dios» (Lc 11:42). Desde entonces, los escribas y fariseos comenzaron a acecharle.',
        ir('Ir a la ruta Jesús que ora', '#oracion/3'),
        ir('Ver «Oración, ayuno y limosna» en El mundo judío', R.mundo + '#fe/7')
      ],
      pensar: 'Jesús promete que el Padre dará el Espíritu Santo a los que se lo pidan. ¿Has pedido con insistencia, como el amigo de medianoche, la llenura del Espíritu en tu vida?'
    },
    {
      id: 'c12', n: 'Capítulo 12: tesoros, temores y la venida del Señor', ref: 'Lucas 12:1-59', fecha: 32,
      visual: [
        cita('Lucas 12:16-21', '@@lc/12/16-21'),
        tabla({
          titulo: 'De qué cuidarse y qué buscar',
          cab: ['Cuidaos de…', 'En cambio…'],
          filas: [
            ['La levadura de los fariseos, que es la hipocresía (12:1)', 'Nada oculto deja de descubrirse (12:2)'],
            ['Temer a los hombres (12:4)', 'Temer a Dios, que cuida aun a los pajarillos (12:5-7)'],
            ['Toda avaricia (12:15)', 'Ser rico para con Dios (12:21)'],
            ['El afán por la comida y el vestido (12:22)', 'Buscar el reino de Dios (12:31)'],
            ['Dormirse en la espera (12:45)', 'Estar preparados, como siervos que esperan a su señor (12:35-40)']
          ]
        }),
        img('lc-rico-insensato.webp', 'De noche, un terrateniente rico contempla satisfecho sus graneros nuevos llenos de trigo a la luz de una lámpara, sin advertir las nubes oscuras que se acercan', 'El rico insensato (Lc 12:19-20).')
      ],
      texto: [
        'Mientras se juntaban miles de personas, Jesús habló primero a sus discípulos. El capítulo trata del temor, del dinero y de la espera de su venida.',
        { h: 'No temáis' },
        'Jesús advierte contra la hipocresía y contra el miedo a los hombres, que solo pueden matar el cuerpo. Hay que temer a Dios. Pero ese temor viene con consuelo: Dios no olvida ni un pajarillo, «aun los cabellos de vuestra cabeza están todos contados» (Lc 12:7). Cuando los lleven ante las autoridades, «el Espíritu Santo os enseñará en la misma hora lo que debáis decir» (Lc 12:12).',
        { h: 'El rico insensato' },
        'Uno de la multitud pidió a Jesús que ordenara a su hermano repartir la herencia. Jesús se negó a ser juez en el asunto y advirtió contra la avaricia. Contó de un hombre rico cuya tierra produjo tanto que pensó derribar sus graneros y edificar otros mayores, y decirse a sí mismo: «Alma, muchos bienes tienes guardados para muchos años; repósate, come, bebe, regocíjate» (Lc 12:19). Pero Dios le dijo: «Necio, esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será?» (Lc 12:20). Su error no fue trabajar ni prosperar, sino vivir como si Dios y la muerte no existieran.',
        { h: 'Buscad el reino' },
        'Jesús llama a no afanarse: Dios alimenta a los cuervos y viste los lirios. «Mas buscad el reino de Dios, y todas estas cosas os serán añadidas. No temáis, manada pequeña, porque a vuestro Padre le ha placido daros el reino» (Lc 12:31-32). Por eso pueden vender, dar limosna y hacerse un tesoro en los cielos.',
        { h: 'Siervos que esperan' },
        'La última parte habla de la venida del Señor. Los discípulos deben estar como siervos con los lomos ceñidos y las lámparas encendidas, esperando a su señor que vuelve de las bodas, «porque a la hora que no penséis, el Hijo del Hombre vendrá» (Lc 12:40). El mayordomo fiel será puesto sobre todos los bienes; el que piensa que su señor tarda y maltrata a los demás será castigado. «A todo aquel a quien se haya dado mucho, mucho se le demandará» (Lc 12:48).',
        ir('Ir a la parábola del rico insensato', '#parabolas/3'),
        ir('Ver «Vivir esperando su venida» en Los últimos tiempos', R.escatologia + '#temas/5')
      ],
      pensar: 'El rico insensato hizo planes para muchos años sin contar con Dios. ¿En qué planes tuyos necesitas preguntarte si eres «rico para con Dios»?'
    },
    {
      id: 'c13', n: 'Capítulo 13: arrepentimiento, la puerta angosta y Jerusalén', ref: 'Lucas 13:1-35; Salmo 118:26', fecha: 32,
      visual: [
        cita('Lucas 13:31-35', '@@lc/13/31-35'),
        tabla({
          titulo: 'El capítulo en cinco escenas',
          cab: ['Pasaje', 'Escena', 'Enseñanza'],
          filas: [
            ['13:1-5', 'Los galileos y la torre de Siloé', 'Si no os arrepentís, todos pereceréis'],
            ['13:6-9', 'La higuera estéril', 'Dios da tiempo, pero no para siempre'],
            ['13:10-17', 'La mujer encorvada', 'Hija de Abraham, libre en el día de reposo'],
            ['13:18-30', 'Mostaza, levadura y la puerta angosta', 'El reino crece; esforzaos por entrar'],
            ['13:31-35', 'Herodes y el lamento', '«¡Jerusalén, Jerusalén!»']
          ]
        })
      ],
      texto: [
        'Unos le contaron a Jesús que Pilato había mezclado la sangre de unos galileos con la de sus sacrificios. Jesús preguntó si pensaban que eran más pecadores que los demás. «Os digo: No; antes si no os arrepentís, todos pereceréis igualmente» (Lc 13:3). Lo mismo dijo de los dieciocho que murieron al caer la torre de Siloé. Las tragedias no son siempre un castigo por pecados particulares, pero recuerdan a todos que necesitan arrepentirse.',
        { h: 'La higuera estéril' },
        'Un hombre buscó fruto en su higuera durante tres años sin hallarlo y mandó cortarla. El viñador le pidió un año más para cavar y abonar. Es una imagen de Israel y de cada persona: Dios es paciente, pero su paciencia tiene un fin.',
        { h: 'Una hija de Abraham' },
        'En una sinagoga, en sábado, había una mujer que llevaba dieciocho años encorvada, sin poder enderezarse. Jesús la llamó, le dijo «Mujer, eres libre de tu enfermedad», puso las manos sobre ella, y al momento se enderezó y glorificaba a Dios (Lc 13:12-13). El principal de la sinagoga se indignó. Jesús le respondió que ellos desataban su buey en sábado para darle de beber; ¿no debía ser desatada esta «hija de Abraham, que Satanás había atado dieciocho años»? (Lc 13:16).',
        { h: 'La puerta angosta' },
        'Alguien preguntó si eran pocos los que se salvan. Jesús no respondió con un número, sino con un llamado: «Esforzaos a entrar por la puerta angosta» (Lc 13:24). Algunos dirán que comieron y bebieron con Él, y oirán: «No sé de dónde sois». En cambio, «vendrán del oriente y del occidente, del norte y del sur, y se sentarán a la mesa en el reino de Dios» (Lc 13:29).',
        { h: '¡Jerusalén, Jerusalén!' },
        'Unos fariseos le advirtieron que Herodes quería matarlo. Jesús respondió: «Id, y decid a aquella zorra» que Él seguiría su obra hasta terminarla, porque no es posible que un profeta muera fuera de Jerusalén (Lc 13:32-33). Y lloró sobre la ciudad: como la gallina junta a sus polluelos, quiso juntar a sus hijos, «y no quisiste» (Lc 13:34). Pero añadió una esperanza: no lo verían hasta que dijeran «Bendito el que viene en nombre del Señor» (Lc 13:35; Sal 118:26). Israel lo recibirá cuando vuelva.',
        ir('Ver «Antipas y Jesús: aquella zorra» en La dinastía de Herodes', R.herodes + '#hijos/5'),
        ir('Ver «Israel y los pactos de Dios» en Los últimos tiempos', R.escatologia + '#temas/1')
      ],
      pensar: 'Jesús llamó a la mujer encorvada «hija de Abraham» y la soltó. ¿Hay algo que te ha tenido «encorvado» por años y que necesitas traer a Jesús?'
    },
    {
      id: 'c14', n: 'Capítulo 14: el banquete del reino y el costo del discipulado', ref: 'Lucas 14:1-35; Proverbios 25:6-7', fecha: 32,
      visual: [
        img('../mundo-judio/img/mj-boda-procesion.webp', 'Una procesión nocturna de boda avanza con antorchas y lámparas por una calle de una aldea, con invitados vestidos de fiesta', 'Una fiesta en una aldea de Galilea.'),
        cita('Lucas 14:12-14', '@@lc/14/12-14'),
        tabla({
          titulo: 'Cuatro enseñanzas en una comida',
          cab: ['Pasaje', 'Enseñanza'],
          filas: [
            ['14:1-6', 'Sanar al hidrópico en sábado'],
            ['14:7-11', 'El último lugar: el que se humilla será enaltecido'],
            ['14:12-14', 'Invitar a los que no pueden pagar'],
            ['14:15-24', 'La gran cena: los invitados se excusan y entran los pobres'],
            ['14:25-35', 'Calcular el costo: la torre, la guerra y la sal']
          ]
        })
      ],
      texto: [
        'El capítulo transcurre casi entero en una comida, en casa de un principal de los fariseos, en día de reposo. Lucas muestra muchas veces a Jesús a la mesa: allí enseña sobre el reino.',
        { h: 'El último lugar' },
        'Después de sanar a un hombre hidrópico, Jesús observó cómo los invitados escogían los primeros asientos. Les aconsejó sentarse en el último lugar, para que el anfitrión los hiciera subir, como enseña Proverbios 25:6-7. Pero no da solo un consejo de buenos modales: «cualquiera que se enaltece, será humillado; y el que se humilla, será enaltecido» (Lc 14:11). Así funciona el reino de Dios.',
        { h: 'Los invitados de Dios' },
        'Al anfitrión le dijo que no invitara a quienes pudieran devolverle la invitación, sino a «los pobres, los mancos, los cojos y los ciegos», y sería recompensado «en la resurrección de los justos» (Lc 14:13-14). Jesús no da una regla para toda fiesta, sino un principio: el amor que no espera nada a cambio imita a Dios.',
        { h: 'La gran cena' },
        'Un invitado exclamó: «Bienaventurado el que coma pan en el reino de Dios» (Lc 14:15). Jesús respondió con una parábola. Un hombre preparó una gran cena y envió a decir a los invitados que ya estaba lista. Todos comenzaron a excusarse: una hacienda, cinco yuntas de bueyes, un matrimonio. El señor, enojado, mandó traer de las calles a los pobres, mancos, cojos y ciegos, y luego de los caminos y vallados, «para que se llene mi casa» (Lc 14:23). Los que se creían seguros del banquete se quedan fuera por sus excusas; los despreciados entran.',
        { h: 'Calcular el costo' },
        'Grandes multitudes iban con Él, y Jesús se volvió para advertirles. Seguirle exige amarlo más que a la propia familia y que a la propia vida, y llevar la cruz (Lc 14:26-27). La palabra «aborrecer» es una forma semítica de decir «amar menos». Con dos ejemplos, el que edifica una torre y el rey que va a la guerra, Jesús pide calcular el costo: «cualquiera de vosotros que no renuncia a todo lo que posee, no puede ser mi discípulo» (Lc 14:33).',
        ir('Ir a la parábola de la gran cena', '#parabolas/4'),
        ir('Ver «La mesa: con quién se comía y cómo» en El mundo judío', R.mundo + '#vida/7')
      ],
      pensar: 'Los invitados no rechazaron la cena con odio, sino con excusas razonables. ¿Qué «excusas razonables» te están alejando del banquete de Dios?'
    },
    {
      id: 'c15', n: 'Capítulo 15: perdidos y encontrados', ref: 'Lucas 15:1-32', fecha: 32,
      visual: [
        img('lc-hijo-prodigo.webp', 'Un padre anciano corre por un camino polvoriento y abraza a su hijo joven, delgado y harapiento, ante una casa de campo de piedra', 'El padre corre a recibir a su hijo (Lc 15:20).'),
        cita('Lucas 15:1-7', '@@lc/15/1-7'),
        tabla({
          titulo: 'Tres parábolas, un mismo mensaje',
          cab: ['', 'La oveja', 'La moneda', 'El hijo'],
          filas: [
            ['Proporción perdida', '1 de 100', '1 de 10', '1 de 2'],
            ['Quién busca', 'El pastor', 'La mujer', 'El padre espera y corre'],
            ['Cómo se perdió', 'Por descuido', 'Sin culpa propia', 'Por rebeldía'],
            ['Final', 'Gozo con amigos y vecinos', 'Gozo con amigas y vecinas', 'Fiesta… y un hermano afuera']
          ]
        })
      ],
      texto: [
        'Este es el corazón del evangelio de Lucas. Todos los publicanos y pecadores se acercaban a Jesús para oírle, y los fariseos y escribas murmuraban: «Este a los pecadores recibe, y con ellos come» (Lc 15:2). Jesús respondió con tres parábolas.',
        { h: 'La oveja y la moneda' },
        'Un pastor que pierde una oveja deja las noventa y nueve y la busca hasta encontrarla; luego la pone sobre sus hombros gozoso y llama a sus vecinos a celebrar. «Os digo que así habrá más gozo en el cielo por un pecador que se arrepiente, que por noventa y nueve justos que no necesitan de arrepentimiento» (Lc 15:7). Una mujer que pierde una de sus diez monedas enciende la lámpara, barre la casa y busca con diligencia; al hallarla, también hace fiesta. Dios busca a los perdidos y se alegra al encontrarlos.',
        { h: 'Los dos hijos' },
        'La tercera parábola es la más larga. El hijo menor pidió su parte de la herencia, como si su padre ya estuviera muerto, y la malgastó lejos, viviendo perdidamente. Cuando vino el hambre, terminó cuidando cerdos, el oficio más bajo para un judío. «Y volviendo en sí» (Lc 15:17), decidió regresar y pedir ser tratado como jornalero.',
        'El centro de la historia es el padre. «Cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó» (Lc 15:20). Un hombre mayor de aquel tiempo no corría en público, pero este padre corrió. No dejó que el hijo terminara su discurso: mandó traer el mejor vestido, el anillo y el calzado, y hacer fiesta, «porque este mi hijo muerto era, y ha revivido; se había perdido, y es hallado» (Lc 15:24).',
        { h: 'El hermano mayor' },
        'La parábola no termina ahí. El hijo mayor volvió del campo, oyó la música y se enojó. No quiso entrar. Se quejó de que nunca había recibido ni un cabrito, aunque había servido tantos años. El padre salió también a buscarlo: «Hijo, tú siempre estás conmigo, y todas mis cosas son tuyas» (Lc 15:31). La historia termina sin decir si entró. Era una invitación a los fariseos que murmuraban, y lo es a todo creyente que se cree más merecedor que los demás.',
        ir('Ir a la parábola del hijo pródigo', '#parabolas/5'),
        ir('Ver el pasaje en la Armonía', R.armonia + '#hijo-prodigo')
      ],
      pensar: '¿Te pareces más al hijo menor que vuelve o al hermano mayor que no quiere entrar? ¿Cómo responde el Padre a cada uno?'
    },
    {
      id: 'c16', n: 'Capítulo 16: el mayordomo infiel y el rico y Lázaro', ref: 'Lucas 16:1-31', fecha: 32,
      visual: [
        img('lc-rico-lazaro.webp', 'Ante la puerta de piedra de una casa lujosa, un mendigo flaco y cubierto de llagas yace en el suelo, mientras se ve el banquete adentro y unos perros se le acercan', 'Lázaro a la puerta del rico (Lc 16:20-21).'),
        cita('Lucas 16:19-26', '@@lc/16/19-26')
      ],
      texto: [
        'El capítulo 16 trata del dinero, con dos parábolas que comienzan igual: «Había un hombre rico».',
        { h: 'Un administrador astuto' },
        'Un mayordomo fue acusado de malgastar los bienes de su amo y supo que lo despedirían. Antes de irse, llamó a los deudores de su amo y les rebajó las deudas, para que lo recibieran en sus casas después. «Alabó el amo al mayordomo malo por haber hecho sagazmente» (Lc 16:8). Jesús no aprueba su deshonestidad; destaca su astucia para preparar el futuro. «Los hijos de este siglo son más sagaces en el trato con sus semejantes que los hijos de luz.»',
        'La aplicación es clara: usar el dinero, que es pasajero, para fines eternos, ganando amigos que nos reciban «en las moradas eternas» (Lc 16:9). El que es fiel en lo muy poco, también en lo más es fiel. Y una advertencia final: «Ningún siervo puede servir a dos señores… No podéis servir a Dios y a las riquezas» (Lc 16:13). Los fariseos, que eran avaros, se burlaban de Él.',
        { h: 'El rico y Lázaro' },
        'Había un hombre rico que se vestía de púrpura y lino fino y hacía banquete cada día. A su puerta yacía un mendigo llamado Lázaro, lleno de llagas, que deseaba comer las migajas de su mesa, y hasta los perros le lamían las llagas. Es el único personaje de una parábola de Jesús que tiene nombre, y significa «Dios ayuda».',
        'Los dos murieron. Lázaro fue llevado por los ángeles al seno de Abraham; el rico estaba en el Hades, en tormentos. Pidió que Lázaro mojara su dedo para refrescar su lengua, pero Abraham respondió que en vida él había recibido sus bienes, y que «una gran sima está puesta entre nosotros y vosotros» (Lc 16:26). Después de la muerte no se puede cambiar de lugar.',
        'Entonces el rico pidió que Lázaro fuera a advertir a sus cinco hermanos. «A Moisés y a los profetas tienen; óiganlos.» Y si alguno se levantara de los muertos, tampoco se persuadirían (Lc 16:29-31). Poco después, Jesús resucitó, y muchos no creyeron.',
        'La parábola no describe todos los detalles del más allá, pero enseña con seriedad que existe una vida consciente después de la muerte, que el destino se decide en esta vida y que la Escritura basta para conocer el camino.',
        ir('Ir a la parábola del rico y Lázaro', '#parabolas/6')
      ],
      pensar: 'El rico no maltrató a Lázaro; simplemente no lo vio. ¿Quién está «a tu puerta» y no lo estás viendo?'
    },
    {
      id: 'c17', n: 'Capítulos 17–18: fe, gratitud y la venida del reino', ref: 'Lucas 17:1–18:14; Génesis 7; 19', fecha: 33,
      visual: [
        img('lc-diez-leprosos.webp', 'En un camino entre Samaria y Galilea, un hombre con ropas raídas se postra rostro en tierra a los pies de una figura vista de espaldas, mientras otros nueve se alejan por el camino', 'El samaritano vuelve a dar gracias (Lc 17:15-16).'),
        cita('Lucas 17:11-19', '@@lc/17/11-19'),
        img('lc-fariseo-publicano.webp', 'En un atrio del templo, un fariseo bien vestido ora de pie con las manos en alto mientras, al fondo, un publicano con la cabeza baja se golpea el pecho', 'El fariseo y el publicano (Lc 18:10-13).')
      ],
      texto: [
        'En este tramo del viaje se reúnen enseñanzas sobre la fe, la gratitud, la venida del reino y la oración.',
        { h: 'Perdón, fe y servicio' },
        'Jesús enseña a perdonar al hermano que se arrepiente, aunque peque siete veces al día. Los apóstoles pidieron: «Auméntanos la fe». Jesús respondió que una fe como un grano de mostaza bastaría para arrancar un sicómoro (Lc 17:5-6). No se necesita una fe grande, sino fe en un Dios grande. Y con la imagen del siervo que hace lo que se le manda, enseñó a servir sin buscar recompensa: «Siervos inútiles somos, pues lo que debíamos hacer, hicimos» (Lc 17:10).',
        { h: 'Diez leprosos' },
        'Yendo a Jerusalén, entre Samaria y Galilea, diez leprosos le gritaron de lejos pidiendo misericordia. Jesús los envió a mostrarse a los sacerdotes, y mientras iban, quedaron limpios. Solo uno volvió glorificando a Dios a gran voz y se postró a sus pies dándole gracias, «y éste era samaritano» (Lc 17:16). Jesús preguntó: «¿No son diez los que fueron limpiados? Y los nueve, ¿dónde están?». Y le dijo: «Levántate, vete; tu fe te ha salvado» (Lc 17:19). Los diez fueron sanados; solo uno recibió además la salvación.',
        { h: 'Cuándo vendrá el reino' },
        'Los fariseos preguntaron cuándo vendría el reino. Jesús respondió que no vendría con señales visibles para calcularlo, porque «el reino de Dios está entre vosotros» (Lc 17:21): estaba presente en Él. Pero a sus discípulos les habló de su venida futura: será como el relámpago, visible para todos, y sorprenderá a la gente como el diluvio en los días de Noé y el fuego en los de Lot. «Acordaos de la mujer de Lot» (Lc 17:32). La gente estará comiendo, comprando y edificando, sin prepararse.',
        { h: 'Dos parábolas de oración' },
        'Para enseñar «la necesidad de orar siempre, y no desmayar», Jesús contó de una viuda que insistió hasta que un juez injusto le hizo justicia (Lc 18:1-8). Dios, que no es injusto, hará justicia a sus escogidos. Y a algunos que confiaban en sí mismos les contó del fariseo que oraba dando gracias por no ser como los demás, y del publicano que no alzaba los ojos y decía: «Dios, sé propicio a mí, pecador» (Lc 18:13). Este volvió a su casa justificado.',
        ir('Ir a la parábola del fariseo y el publicano', '#parabolas/7'),
        ir('Ver «Señales de los tiempos sin fijar fechas» en Los últimos tiempos', R.escatologia + '#temas/4')
      ],
      pensar: 'Nueve leprosos fueron sanados y siguieron su camino; uno volvió a dar gracias. ¿Por qué cosas que Dios ha hecho en tu vida todavía no has vuelto a darle gracias?'
    },
    {
      id: 'c18', n: 'Capítulos 18–19: niños, un rico, un ciego y Zaqueo', ref: 'Lucas 18:15–19:27', fecha: 33,
      visual: [
        img('../mundo-judio/img/mj-zaqueo.webp', 'Un hombre muy bajo, con manto verde bordado, baja de un sicómoro en una calle de Jericó mientras la gente murmura', 'Zaqueo baja del sicómoro (Lc 19:5-6).'),
        mapa({ view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'jerusalen', 'betania', 'desierto-judea'], trazos: ['c-jerico'] }, 'Mapa'),
        tabla({
          titulo: 'Dos ricos frente a Jesús',
          cab: ['', 'El joven rico (18:18-30)', 'Zaqueo (19:1-10)'],
          filas: [
            ['Reputación', 'Principal, cumplidor de la ley', 'Jefe de publicanos, pecador público'],
            ['Pregunta o deseo', '«¿Qué haré para heredar la vida eterna?»', 'Quería ver quién era Jesús'],
            ['Respuesta', 'Se puso muy triste', 'Lo recibió gozoso'],
            ['Sus bienes', 'No pudo dejarlos', 'Dio la mitad y devolvió cuatro veces lo robado'],
            ['Final', '«¡Cuán difícilmente entrarán en el reino!»', '«Hoy ha venido la salvación a esta casa»']
          ]
        })
      ],
      texto: [
        'Al acercarse a Jericó, el viaje llega a su última etapa. Cuatro encuentros muestran quiénes entran en el reino.',
        { h: 'Los niños' },
        'Traían niños a Jesús para que los tocara, y los discípulos los reprendían. Jesús los llamó: «Dejad a los niños venir a mí… porque de los tales es el reino de Dios» (Lc 18:16). El reino se recibe como un niño: con confianza y sin méritos.',
        { h: 'Un hombre muy rico' },
        'Un principal preguntó qué debía hacer para heredar la vida eterna. Decía haber guardado los mandamientos desde su juventud. Jesús le dijo que le faltaba una cosa: vender todo, darlo a los pobres y seguirlo. «Entonces él, oyendo esto, se puso muy triste, porque era muy rico» (Lc 18:23). Jesús dijo que es más fácil que un camello pase por el ojo de una aguja que un rico entre en el reino. Los discípulos se preguntaron quién podría salvarse. «Lo que es imposible para los hombres, es posible para Dios» (Lc 18:27).',
        { h: 'Tercer anuncio y un ciego' },
        'Jesús anunció de nuevo que en Jerusalén se cumpliría todo lo escrito por los profetas: sería entregado, escarnecido, azotado, muerto, y resucitaría al tercer día. Los doce no entendieron nada. Al llegar a Jericó, en cambio, un ciego que mendigaba gritó: «¡Jesús, Hijo de David, ten misericordia de mí!» (Lc 18:38). El ciego veía mejor que los discípulos quién era Jesús. Recibió la vista y le seguía glorificando a Dios.',
        { h: 'Zaqueo' },
        'En Jericó vivía Zaqueo, jefe de los publicanos y rico. Quería ver a Jesús, pero era pequeño de estatura, y subió a un sicómoro. Jesús se detuvo, lo miró y le dijo: «Zaqueo, date prisa, desciende, porque hoy es necesario que pose yo en tu casa» (Lc 19:5). Todos murmuraban. Zaqueo, en cambio, prometió dar la mitad de sus bienes a los pobres y devolver cuatro veces lo defraudado. Jesús declaró: «Hoy ha venido la salvación a esta casa… Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido» (Lc 19:9-10). Lo imposible para el joven rico fue posible para Zaqueo por la gracia.',
        { h: 'Las minas' },
        'Como algunos pensaban que el reino aparecería en seguida, Jesús contó de un noble que se fue a un país lejano a recibir un reino y volver. Antes dio una mina a cada siervo para negociar. A su regreso premió a los fieles y quitó al que la escondió. El reino vendrá cuando el Rey vuelva; mientras tanto, sus siervos deben trabajar con lo que recibieron.',
        ir('Ver Zaqueo en la Armonía', R.armonia + '#zaqueo')
      ],
      pensar: 'El joven rico se fue triste; Zaqueo recibió a Jesús con gozo. ¿Qué te impide recibir a Jesús con la alegría de Zaqueo?'
    },
    {
      id: 'c19', n: 'Capítulos 19–20: el Rey llega a Jerusalén', ref: 'Lucas 19:28–20:47; Zacarías 9:9; Salmo 118:22-26', fecha: 33,
      visual: [
        img('../mundo-judio/img/mj-multitud-rey.webp', 'Una multitud de peregrinos tiende mantos en el camino que baja del monte de los Olivos hacia Jerusalén, con las murallas y el templo al fondo', 'La entrada en Jerusalén desde el monte de los Olivos (Lc 19:36-37).'),
        cita('Lucas 19:41-44', '@@lc/19/41-44'),
        pasos([
          { t: 'De Jericó a Betfagé y Betania, junto al monte de los Olivos (19:28-29)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['betania', 'monte-olivos', 'jerusalen'] } },
          { t: 'Al bajar del monte, Jesús llora sobre la ciudad (19:41)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['monte-olivos', 'jerusalen', 'getsemani'] } }
        ])
      ],
      texto: [
        'Después de casi diez capítulos de viaje, Jesús llega a Jerusalén. Mandó traer un pollino en el que nadie había montado y entró sobre él, como había anunciado Zacarías: el rey viene «humilde, y cabalgando sobre un asno» (Zac 9:9).',
        { h: 'Bendito el Rey' },
        'Al bajar del monte de los Olivos, la multitud de los discípulos comenzó a alabar a Dios a gran voz: «¡Bendito el rey que viene en el nombre del Señor; paz en el cielo, y gloria en las alturas!» (Lc 19:38). El canto recuerda el de los ángeles en Belén. Algunos fariseos le pidieron que reprendiera a sus discípulos. Jesús respondió: «si éstos callaran, las piedras clamarían» (Lc 19:40).',
        { h: 'Jesús llora' },
        'Solo Lucas cuenta que, al ver la ciudad, Jesús lloró sobre ella. Jerusalén no conoció lo que era para su paz. Vendrían días en que sus enemigos la rodearían con vallado y no dejarían piedra sobre piedra, «por cuanto no conociste el tiempo de tu visitación» (Lc 19:44). Cuarenta años después, en el año 70, los romanos la destruyeron. El Rey llora por la ciudad que lo rechaza.',
        { h: 'En el templo' },
        'Jesús entró en el templo y echó a los que vendían: «Mi casa es casa de oración; mas vosotros la habéis hecho cueva de ladrones» (Lc 19:46). Desde entonces enseñaba cada día en el templo. Los principales sacerdotes, los escribas y los ancianos buscaban matarlo, pero no hallaban cómo, «porque todo el pueblo estaba suspenso oyéndole» (Lc 19:48).',
        { h: 'Preguntas y trampas' },
        'El capítulo 20 reúne las controversias de Jerusalén. Le preguntaron con qué autoridad hacía esto, y Él respondió con otra pregunta sobre Juan. Contó la parábola de los labradores malvados que mataron al hijo del dueño de la viña, y citó el Salmo 118: la piedra que desecharon los edificadores vino a ser cabeza del ángulo. Le tendieron trampas: sobre el tributo a César («Dad a César lo que es de César, y a Dios lo que es de Dios», Lc 20:25) y sobre la resurrección, que los saduceos negaban. Jesús respondió que Dios «no es Dios de muertos, sino de vivos, pues para él todos viven» (Lc 20:38). Y les preguntó cómo el Cristo puede ser hijo de David si David lo llama Señor (Sal 110:1).',
        ir('Ver la entrada en la Armonía', R.armonia + '#entrada-triunfal'),
        ir('Ver «La última semana, día por día» en Cronología', R.crono + '#semana/1')
      ],
      pensar: 'Jesús lloró por una ciudad que no conoció el tiempo de su visitación. ¿Estás reconociendo los momentos en que Dios te visita?'
    },
    {
      id: 'c21', n: 'Capítulo 21: la ofrenda de la viuda y el discurso del fin', ref: 'Lucas 21:1-38; Daniel 9:26-27; Romanos 11:25', fecha: 33,
      visual: [
        cita('Lucas 21:20-28', '@@lc/21/20-28'),
        esq('lc-discurso.svg', 'Línea de tiempo: la destrucción de Jerusalén en el año 70, una flecha larga marcada «los tiempos de los gentiles», y al final las señales en el cielo y la venida del Hijo del Hombre', 'Lucas 21: del año 70 a la venida del Hijo del Hombre.'),
        tabla({
          titulo: 'Dos horizontes en el discurso',
          cab: ['Pasaje', 'Acontecimiento', 'Cumplimiento'],
          filas: [
            ['21:5-6', 'No quedará piedra sobre piedra', 'Año 70'],
            ['21:8-19', 'Engaños, guerras y persecución', 'Toda la era de la iglesia'],
            ['21:20-24', 'Jerusalén rodeada de ejércitos; el pueblo llevado cautivo', 'Año 70 y la dispersión'],
            ['21:24', '«Hasta que los tiempos de los gentiles se cumplan»', 'Desde el 70 hasta el fin'],
            ['21:25-28', 'Señales en el cielo; el Hijo del Hombre viene en una nube', 'Venida de Cristo en gloria']
          ]
        })
      ],
      texto: [
        'Antes del discurso, Lucas cuenta una escena breve. Jesús vio a los ricos echar sus ofrendas en el arca, y a una viuda pobre que echó dos blancas. «En verdad os digo, que esta viuda pobre echó más que todos» (Lc 21:3), porque dio todo su sustento. Dios mide la ofrenda por lo que queda, no por lo que se da.',
        { h: 'Piedra sobre piedra' },
        'Algunos admiraban las piedras hermosas del templo. Jesús anunció que no quedaría piedra sobre piedra. Le preguntaron cuándo sería y qué señal habría. Su respuesta tiene dos horizontes que se entrelazan: la destrucción de Jerusalén y su venida al final de los tiempos.',
        { h: 'Lo que vendría antes' },
        'Habría engañadores que dirían «Yo soy el Cristo», guerras, terremotos, hambres y pestilencias. Pero antes de todo eso, los discípulos serían perseguidos, llevados ante reyes y gobernadores. Jesús promete: «yo os daré palabra y sabiduría, la cual no podrán resistir» (Lc 21:15), y «con vuestra paciencia ganaréis vuestras almas» (Lc 21:19). Hechos muestra cómo se cumplió.',
        { h: 'Jerusalén rodeada de ejércitos' },
        'Lucas registra con claridad la parte que se cumplió en el año 70: «cuando viereis a Jerusalén rodeada de ejércitos, sabed entonces que su destrucción ha llegado» (Lc 21:20). Los de Judea debían huir a los montes; según una antigua tradición, los creyentes de Jerusalén escaparon a Pela antes del asedio. El pueblo sería llevado cautivo a todas las naciones, y Jerusalén sería «hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan» (Lc 21:24).',
        { h: 'Los tiempos de los gentiles y la venida' },
        'Esa frase abre un período que dura hasta hoy. Al final vendrán señales en el sol, la luna y las estrellas, angustia de las naciones, «Entonces verán al Hijo del Hombre, que vendrá en una nube con poder y gran gloria» (Lc 21:27). Los creyentes no deben temer: «erguíos y levantad vuestra cabeza, porque vuestra redención está cerca» (Lc 21:28).',
        { posturas: {
          titulo: '¿Todo se cumplió en el año 70?',
          a: { n: 'Dos horizontes: el año 70 y la venida futura', t: 'La destrucción de Jerusalén cumplió una parte del discurso, pero «los tiempos de los gentiles» abren un período largo, y la venida del Hijo del Hombre en gloria es todavía futura. Esa venida estará precedida por la gran tribulación (Mt 24:21), y antes la iglesia será arrebatada (1 Ts 4:16-17). Es la lectura de este sitio.' },
          b: { n: 'Todo se cumplió en el año 70', t: 'La lectura llamada preterista entiende que todo el discurso, incluida la «venida» del Hijo del Hombre, describe en lenguaje simbólico el juicio de Dios sobre Jerusalén en el año 70.' },
          c: 'Lucas mismo separa los dos horizontes con los tiempos de los gentiles, y Hechos 1:11 anuncia que Jesús volverá «así como le habéis visto ir al cielo», de manera visible. Por eso la venida de Lucas 21:27 sigue siendo la esperanza de la iglesia.'
        } },
        'El capítulo termina con un llamado: «Velad, pues, en todo tiempo orando» (Lc 21:36).',
        ir('Ver «Los tiempos de los gentiles» en Los últimos tiempos', R.escatologia + '#panorama/6'),
        ir('Ver «La guerra judía y la caída de Jerusalén» en Cronología', R.crono + '#apostoles/4')
      ],
      pensar: 'Jesús dice que, cuando vengan las señales, levantemos la cabeza, porque la redención está cerca. ¿Vives con temor del futuro o con esa esperanza?'
    },
    {
      id: 'c22a', n: 'Capítulo 22 (I): la última cena', ref: 'Lucas 22:1-38; Éxodo 12; Jeremías 31:31-34; Isaías 53:12', fecha: 33,
      visual: [
        img('lc-ultima-cena.webp', 'En un aposento alto iluminado por lámparas de aceite, un grupo de hombres reclinados en torno a una mesa baja observa a una figura vista de espaldas que levanta una copa', 'La copa del nuevo pacto (Lc 22:20).'),
        cita('Lucas 22:14-20', '@@lc/22/14-20'),
        img('../cronologia-nuevo-testamento/img/cr-pascua-corderos.webp', 'Sacerdotes y peregrinos con corderos en los atrios del templo de Jerusalén, en la víspera de la Pascua', 'La Pascua en el templo (Lc 22:7).')
      ],
      texto: [
        'Se acercaba la fiesta de los panes sin levadura, «que se llama la pascua» (Lc 22:1). Los principales sacerdotes buscaban cómo matar a Jesús sin provocar al pueblo. Entonces «entró Satanás en Judas» (Lc 22:3), que fue a negociar la entrega y recibió dinero.',
        { h: 'La Pascua nueva' },
        'Jesús envió a Pedro y Juan a preparar la Pascua en un aposento alto. Al sentarse a la mesa dijo: «¡Cuánto he deseado comer con vosotros esta pascua antes que padezca!» (Lc 22:15). La Pascua recordaba la liberación de Egipto por la sangre del cordero. Ahora Jesús le dio un nuevo sentido.',
        'Tomó el pan, dio gracias, lo partió y dijo: «Esto es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí» (Lc 22:19). Después tomó la copa: «Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama» (Lc 22:20). Su muerte sería el sacrificio que inaugura el nuevo pacto prometido por Jeremías (Jer 31:31-34), en el que Dios perdona el pecado y escribe su ley en el corazón. La iglesia celebra la Cena del Señor en memoria de Él, «hasta que él venga» (1 Co 11:26).',
        { h: '¿Quién es el mayor?' },
        'En esa misma mesa, los discípulos discutían cuál de ellos sería el mayor. Jesús les dijo que entre los gentiles los reyes se enseñorean, pero entre ellos no debía ser así: «yo estoy entre vosotros como el que sirve» (Lc 22:27). Y les prometió que comerían y beberían a su mesa en su reino y se sentarían en tronos juzgando a las doce tribus de Israel (Lc 22:30).',
        { h: 'Pedro y la oración de Jesús' },
        'Jesús advirtió a Pedro: «Simón, Simón, he aquí Satanás os ha pedido para zarandearos como a trigo; pero yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos» (Lc 22:31-32). Pedro caería, pero no para siempre, porque Jesús oraba por él. Esa misma noche lo negaría tres veces.',
        'Al final, Jesús citó Isaías 53: «Y fue contado con los inicuos» (Lc 22:37). Iba a morir como un malhechor, en lugar de los malhechores.',
        ir('Ver la santa cena en la Armonía', R.armonia + '#santa-cena'),
        ir('Ver «La Pascua en Juan y en los otros evangelios» en Cronología', R.crono + '#semana/3')
      ],
      pensar: 'Jesús oró por Pedro antes de que cayera, para que su fe no faltara. ¿Qué consuelo te da saber que Cristo intercede por ti (He 7:25)?'
    },
    {
      id: 'c22b', n: 'Capítulo 22 (II): Getsemaní, el arresto y el Sanedrín', ref: 'Lucas 22:39-71; Salmo 110:1; Daniel 7:13', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/getsemani.webp', 'De noche, entre olivos antiguos, una figura vista de espaldas ora postrada junto a una roca, mientras tres discípulos duermen a cierta distancia', 'Getsemaní (Lc 22:41-45).'),
        cita('Lucas 22:41-46', '@@lc/22/41-46'),
        tabla({
          titulo: 'Lo que solo cuenta Lucas en esta noche',
          cab: ['Detalle', 'Pasaje'],
          filas: [
            ['Un ángel lo fortalece; su sudor como gotas de sangre', '22:43-44'],
            ['Los discípulos dormían «a causa de la tristeza»', '22:45'],
            ['Jesús sana la oreja del siervo', '22:51'],
            ['«Esta es vuestra hora, y la potestad de las tinieblas»', '22:53'],
            ['«Vuelto el Señor, miró a Pedro»', '22:61']
          ]
        })
      ],
      texto: [
        'Jesús salió al monte de los Olivos, como solía, y dijo a sus discípulos: «Orad que no entréis en tentación» (Lc 22:40). Se apartó a un tiro de piedra, se puso de rodillas y oró: «Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya» (Lc 22:42).',
        { h: 'La agonía' },
        'La copa era la ira de Dios contra el pecado, que Jesús iba a beber en lugar nuestro. Su verdadera humanidad sintió todo el peso de esa hora, y su obediencia fue completa. Lucas agrega que se le apareció un ángel para fortalecerlo, y que, en agonía, oraba más intensamente, y su sudor era como grandes gotas de sangre (Lc 22:43-44).',
        { posturas: {
          titulo: 'Lucas 22:43-44 en los manuscritos',
          a: { n: 'Parte original del evangelio', t: 'Estos versículos están en muchos manuscritos antiguos y en la gran mayoría de los posteriores, y los citan escritores del siglo II como Justino e Ireneo. Algunos copistas pudieron omitirlos porque les parecía que mostraban a Jesús demasiado débil.' },
          b: { n: 'Una adición antigua', t: 'Faltan en varios de los manuscritos más antiguos, como el papiro 75 y el códice Vaticano, y otros los marcan con signos de duda. Muchos editores del texto griego los ponen entre corchetes.' },
          c: 'La Reina-Valera 1960 los incluye. Lo que enseñan, la angustia real de Jesús, se afirma también en pasajes seguros (Mt 26:37-38; He 5:7). Ninguna doctrina depende de ellos.'
        } },
        { h: 'El arresto' },
        'Llegó Judas con una turba y se acercó para besarlo. «Judas, ¿con un beso entregas al Hijo del Hombre?» (Lc 22:48). Uno de los discípulos hirió con la espada al siervo del sumo sacerdote y le cortó la oreja derecha. Jesús dijo «Basta ya» y, tocando su oreja, le sanó (Lc 22:51): su último milagro antes de la cruz fue para un enemigo. Y dijo a los que venían a prenderlo: «esta es vuestra hora, y la potestad de las tinieblas» (Lc 22:53).',
        { h: 'Pedro niega' },
        'En el patio del sumo sacerdote, Pedro negó tres veces conocer a Jesús. Al cantar el gallo, «vuelto el Señor, miró a Pedro» (Lc 22:61). Pedro recordó la palabra del Señor, salió y lloró amargamente. Esa mirada no fue de condena, sino de amor que llama al arrepentimiento.',
        { h: 'Ante el Sanedrín' },
        'Al amanecer, el concilio le preguntó si era el Cristo. Jesús respondió: «Desde ahora el Hijo del Hombre se sentará a la diestra del poder de Dios» (Lc 22:69), uniendo el Salmo 110:1 y Daniel 7:13. «¿Luego eres tú el Hijo de Dios?» «Vosotros decís que lo soy.» Para ellos, ya no necesitaban más testimonio.',
        ir('Ver Getsemaní en la Armonía', R.armonia + '#getsemani'),
        ir('Ver «El Sanedrín en tiempos de Jesús» en El mundo judío', R.mundo + '#poder/4')
      ],
      pensar: 'Jesús miró a Pedro justo después de su tercera negación. Si hoy Jesús te mirara así después de una caída, ¿qué crees que encontrarías en su mirada?'
    },
    {
      id: 'c23', n: 'Capítulo 23: Pilato, Herodes y la cruz', ref: 'Lucas 23:1-56; Isaías 53:12; Salmo 31:5', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/golgota.webp', 'Bajo un cielo oscurecido, tres cruces sobre una colina rocosa fuera de las murallas de Jerusalén, con un grupo de mujeres mirando de lejos', 'El Calvario (Lc 23:33, 49).'),
        cita('Lucas 23:39-46', '@@lc/23/39-46'),
        tabla({
          titulo: 'Inocente: siete testimonios en Lucas 23',
          cab: ['Testigo', 'Pasaje'],
          filas: [
            ['Pilato: «Ningún delito hallo en este hombre»', '23:4'],
            ['Pilato otra vez, después de examinarlo', '23:14'],
            ['Herodes: nada digno de muerte', '23:15'],
            ['Pilato por tercera vez', '23:22'],
            ['El ladrón: «éste ningún mal hizo»', '23:41'],
            ['El centurión: «Verdaderamente este hombre era justo»', '23:47'],
            ['La multitud se vuelve golpeándose el pecho', '23:48']
          ]
        })
      ],
      texto: [
        'Los líderes llevaron a Jesús ante Pilato con acusaciones políticas: que pervertía a la nación, prohibía dar tributo a César y decía ser rey (Lc 23:2). Pilato lo interrogó y dijo: «Ningún delito hallo en este hombre» (Lc 23:4).',
        { h: 'Ante Herodes' },
        'Al oír que era galileo, Pilato lo envió a Herodes Antipas, que estaba en Jerusalén por la fiesta. Solo Lucas lo cuenta. Herodes se alegró, porque hacía tiempo que deseaba verle hacer alguna señal. Le hizo muchas preguntas, pero Jesús no le respondió nada. Herodes y sus soldados lo menospreciaron, lo vistieron con una ropa espléndida y lo devolvieron a Pilato. Ese día Pilato y Herodes se hicieron amigos (Lc 23:12). Hechos 4:27 recuerda que Herodes, Pilato, los gentiles y el pueblo de Israel se juntaron contra Jesús.',
        { h: 'Barrabás' },
        'Pilato declaró tres veces la inocencia de Jesús y quiso soltarlo después de castigarlo, pero la multitud gritaba: «¡Crucifícale, crucifícale!» (Lc 23:21). Al fin soltó a Barrabás, un homicida, y entregó a Jesús a la voluntad de ellos. El culpable quedó libre y el inocente murió en su lugar.',
        { h: 'Camino al Calvario' },
        'Obligaron a Simón de Cirene a llevar la cruz detrás de Jesús. Unas mujeres lloraban por Él, y Jesús les dijo: «no lloréis por mí, sino llorad por vosotras mismas y por vuestros hijos» (Lc 23:28), anunciando de nuevo el juicio que vendría sobre la ciudad.',
        { h: 'Las palabras desde la cruz' },
        'Lucas registra tres palabras de Jesús en la cruz que los otros no cuentan. Primero: «Padre, perdónalos, porque no saben lo que hacen» (Lc 23:34). Luego, al ladrón que le pidió «acuérdate de mí cuando vengas en tu reino», le respondió: «De cierto te digo que hoy estarás conmigo en el paraíso» (Lc 23:43). El último que se convierte en el evangelio es un criminal, y es salvo sin obras, solo por la fe. Por último, después de tres horas de tinieblas y el velo del templo rasgado, Jesús clamó a gran voz: «Padre, en tus manos encomiendo mi espíritu» (Lc 23:46; Sal 31:5).',
        'El centurión glorificó a Dios. José de Arimatea, un miembro del concilio que no había consentido en la decisión, pidió el cuerpo y lo puso en un sepulcro nuevo. Las mujeres de Galilea miraron dónde lo ponían, y descansaron el día de reposo.',
        ir('Ver «La última semana: Pascua, Sanedrín y Pilato» en El mundo judío', R.mundo + '#jesus/6'),
        ir('Ver «¿Por qué tenía que morir Cristo?» en La persona y obra de Cristo', R.cristo + '#cruz/1')
      ],
      pensar: 'El ladrón no tenía nada que ofrecer, y Jesús le prometió el paraíso «hoy». ¿Qué te dice eso sobre la gracia de Dios y sobre tu propia salvación?'
    },
    {
      id: 'c24a', n: 'Capítulo 24 (I): la tumba vacía y el camino a Emaús', ref: 'Lucas 24:1-35', fecha: 33,
      visual: [
        img('lc-emaus.webp', 'Al atardecer, en un camino entre colinas de Judea, dos discípulos conversan con un tercer caminante, visto de espaldas, que les explica algo con la mano', 'El camino a Emaús (Lc 24:15).'),
        img('../persona-y-obra-de-cristo/img/tumba-vacia.webp', 'A la luz del amanecer, la entrada de una tumba excavada en la roca, con la piedra redonda corrida a un lado', 'La piedra removida (Lc 24:2).'),
        cita('Lucas 24:25-32', '@@lc/24/25-32'),
        pasos([
          { t: 'Emaús, a sesenta estadios de Jerusalén: unos 11 kilómetros (24:13)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'emaus'], trazos: ['c-emaus'] } }
        ])
      ],
      texto: [
        'El primer día de la semana, muy de mañana, las mujeres fueron al sepulcro con las especias que habían preparado. Hallaron removida la piedra y no hallaron el cuerpo del Señor Jesús. Dos varones con vestiduras resplandecientes les dijeron: «¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado» (Lc 24:5-6).',
        { h: 'Las primeras testigos' },
        'Eran María Magdalena, Juana, María madre de Jacobo y las demás. Contaron todo a los once, pero a ellos «les parecían locura las palabras de ellas, y no las creían» (Lc 24:11). Pedro corrió al sepulcro, vio los lienzos solos y se fue maravillado. Si alguien hubiera inventado la resurrección, no habría puesto a mujeres como primeras testigos ni a los apóstoles como incrédulos.',
        { h: 'Dos discípulos tristes' },
        'Ese mismo día, dos discípulos iban a Emaús, a sesenta estadios de Jerusalén. Uno se llamaba Cleofas. Jesús mismo se acercó y caminaba con ellos, «mas los ojos de ellos estaban velados, para que no le conociesen» (Lc 24:16). Le contaron, con el rostro triste, lo que había pasado con Jesús de Nazaret, «varón profeta, poderoso en obra y en palabra», y le confesaron: «nosotros esperábamos que él era el que había de redimir a Israel» (Lc 24:19-21).',
        { h: 'Toda la Escritura habla de Él' },
        'Jesús les respondió: «¡Oh insensatos, y tardos de corazón para creer todo lo que los profetas han dicho! ¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria?» (Lc 24:25-26). Y comenzando desde Moisés y siguiendo por todos los profetas, les explicó lo que de Él decían todas las Escrituras. El Antiguo Testamento entero apunta a Cristo.',
        { h: 'Al partir el pan' },
        'Al llegar a la aldea, le rogaron: «Quédate con nosotros, porque se hace tarde». Estando a la mesa, Jesús tomó el pan, lo bendijo, lo partió y se lo dio. «Entonces les fueron abiertos los ojos, y le reconocieron; mas él se desapareció de su vista» (Lc 24:31). Se dijeron el uno al otro: «¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el camino, y cuando nos abría las Escrituras?» (Lc 24:32). Esa misma hora volvieron a Jerusalén. El cansancio y la noche ya no importaban.',
        ir('Ver Emaús en la Armonía', R.armonia + '#emaus'),
        ir('Ver «La tumba vacía y las apariciones» en La persona y obra de Cristo', R.cristo + '#exaltado/2')
      ],
      pensar: '«¿No ardía nuestro corazón… cuando nos abría las Escrituras?» ¿Cuándo fue la última vez que tu corazón ardió al leer la Biblia? Pide a Jesús que te la vuelva a abrir.'
    },
    {
      id: 'c24b', n: 'Capítulo 24 (II): la comisión y la ascensión', ref: 'Lucas 24:36-53; Hechos 1:4-11', fecha: 33,
      visual: [
        img('../hechos/img/hechos-ascension.webp', 'En la cumbre del monte de los Olivos, los discípulos miran hacia el cielo mientras una figura luminosa asciende entre las nubes', 'La ascensión (Lc 24:51).'),
        cita('Lucas 24:44-49', '@@lc/24/44-49'),
        pasos([
          { t: 'Jerusalén: Jesús aparece a los once (24:36)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'emaus', 'betania'] } },
          { t: '«Los sacó fuera hasta Betania» (24:50)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'monte-olivos', 'betania'] } }
        ])
      ],
      texto: [
        'Mientras los de Emaús contaban lo sucedido, Jesús se puso en medio de ellos y les dijo: «Paz a vosotros» (Lc 24:36). Ellos, espantados, pensaban que veían un espíritu.',
        { h: 'Un cuerpo verdadero' },
        'Jesús les mostró sus manos y sus pies: «palpad, y ved; porque un espíritu no tiene carne ni huesos, como veis que yo tengo» (Lc 24:39). Como todavía no lo creían de gozo, pidió algo de comer y comió delante de ellos pescado asado. La resurrección no fue una visión ni la supervivencia de un espíritu, sino la victoria del mismo cuerpo, ahora glorificado, sobre la muerte.',
        { h: 'Las Escrituras abiertas' },
        'Jesús les recordó que era necesario que se cumpliera todo lo escrito de Él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44), las tres partes del Antiguo Testamento hebreo. «Entonces les abrió el entendimiento, para que comprendiesen las Escrituras» (Lc 24:45). Lo que hizo en el camino con dos, ahora lo hace con todos.',
        { h: 'La comisión' },
        'El mensaje de las Escrituras tiene tres partes: el Cristo debía padecer, resucitar al tercer día, y en su nombre se debía predicar «el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén» (Lc 24:47). Los discípulos serían testigos.',
        { h: 'La promesa del Padre' },
        'Pero no debían salir todavía: «He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49). Para ser testigos necesitaban el poder del Espíritu Santo. Diez días después de la ascensión, en Pentecostés, la promesa se cumplió (Hch 2:1-4).',
        { h: 'La ascensión' },
        'Jesús los llevó hasta Betania, alzó sus manos y los bendijo, y mientras los bendecía fue llevado arriba al cielo (Lc 24:50-51). El último gesto de Jesús en la tierra fue bendecir. Ellos, después de haberle adorado, volvieron a Jerusalén con gran gozo, y estaban siempre en el templo alabando y bendiciendo a Dios. El evangelio que comenzó en el templo con un sacerdote que no pudo bendecir termina en el templo con un pueblo que bendice.',
        ir('Ir a la ruta De Lucas a Hechos', '#puente/1'),
        ir('Ver «La ascensión» en La persona y obra de Cristo', R.cristo + '#exaltado/5')
      ],
      pensar: 'Los discípulos tenían el mensaje, pero Jesús les pidió esperar el poder del Espíritu antes de salir. ¿Estás intentando servir a Dios con tus propias fuerzas, o has buscado ser investido de poder desde lo alto?'
    }
  );
})();
