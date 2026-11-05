/* Lucas · parte 5: temas (parábolas, mujeres, oración, cánticos), puente a Hechos y RUTA_DATA */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  // ================== Temas: Las parábolas de Lucas ==================
  L.parabolas = [
    {
      id: 'p-leer', n: 'Cómo leer las parábolas de Lucas', ref: 'Lucas 8:9-10; 10:29; 15:1-3; 18:1, 9; 19:11', fecha: [30, 33],
      visual: [
        tabla({
          titulo: 'Lucas dice para qué cuenta cada parábola',
          cab: ['Ocasión o propósito', 'Parábola'],
          filas: [
            ['«¿Y quién es mi prójimo?» (10:29)', 'El buen samaritano'],
            ['Uno pide repartir una herencia (12:13)', 'El rico insensato'],
            ['«Este a los pecadores recibe» (15:2)', 'La oveja, la moneda y el hijo'],
            ['«La necesidad de orar siempre» (18:1)', 'La viuda y el juez'],
            ['A unos que confiaban en sí mismos (18:9)', 'El fariseo y el publicano'],
            ['Pensaban que el reino se manifestaría inmediatamente (19:11)', 'Las minas']
          ]
        }),
        cita('Lucas 8:9-10', '@@lc/8/9-10')
      ],
      texto: [
        'Una parábola es una historia breve, tomada de la vida diaria, que enseña una verdad del reino de Dios. Jesús las usaba para iluminar a los que querían entender y para confrontar a los que se resistían (Lc 8:10). Lucas registra muchas que no están en los otros evangelios.',
        { h: 'Lucas da la clave' },
        'Una ventaja de Lucas es que muchas veces dice por qué Jesús contó la parábola. El buen samaritano responde a un intérprete que quería justificarse; las tres parábolas de lo perdido, a los fariseos que murmuraban; la viuda y el juez enseñan a orar siempre. Leer esa introducción es el primer paso para entender la historia.',
        { h: 'Un punto central' },
        'Las parábolas no son alegorías en las que cada detalle significa algo. Casi siempre tienen un punto principal, a veces dos o tres, uno por cada personaje importante. El aceite y el vino del samaritano no representan los sacramentos ni el mesón a la iglesia; muestran cuánto se esforzó por ayudar. Buscar significados escondidos en cada detalle puede hacer decir a Jesús lo que Él no dijo.',
        { h: 'Personajes que sorprenden' },
        'Las parábolas de Lucas suelen invertir lo esperado: el samaritano es el bueno, el publicano sale justificado, el hijo rebelde es recibido con fiesta y el religioso queda afuera. Los primeros oyentes se sorprendían, y esa sorpresa es parte del mensaje. Para sentirla hay que conocer el mundo de entonces: quiénes eran los samaritanos, qué pensaban de los publicanos, qué significaba que un padre corriera.',
        { h: 'Una respuesta' },
        'Muchas parábolas terminan con una pregunta o con un final abierto: «¿Quién, pues, de estos tres te parece que fue el prójimo?» (Lc 10:36). Jesús no quería solo enseñar ideas; quería que sus oyentes decidieran. Esta ruta estudia seis parábolas propias de Lucas con esa mirada.',
        ir('Ver «Los evangelios y las parábolas» en Cómo interpretar la Biblia', R.interpretar + '#generos/6'),
        ir('Ver «Alegorizar y la tipología» en Cómo interpretar la Biblia', R.interpretar + '#errores/3')
      ],
      pensar: 'Las parábolas piden una respuesta. ¿Hay alguna parábola que hayas leído muchas veces sin dejar que te confronte?'
    },
    {
      id: 'p-samaritano', n: 'El buen samaritano', ref: 'Lucas 10:25-37', fecha: 32,
      visual: [
        img('lc-buen-samaritano.webp', 'En un camino pedregoso del desierto de Judea, un viajero samaritano con turbante se arrodilla junto a un hombre herido y le venda las heridas, con su asno al lado', 'El samaritano se detiene (Lc 10:33-34).'),
        cita('Lucas 10:30-37', '@@lc/10/30-37')
      ],
      texto: [
        'Es una de las historias más conocidas del mundo. Hasta en lenguaje común se llama «buen samaritano» a quien ayuda a un desconocido. Pero para los primeros oyentes, la expresión era casi una contradicción.',
        { h: 'La pregunta detrás' },
        'Un intérprete de la ley sabía que debía amar a su prójimo como a sí mismo, pero quería saber hasta dónde. «¿Y quién es mi prójimo?» (Lc 10:29). En su tiempo se discutía si el prójimo era solo el israelita, o también el extranjero que vivía en la tierra. La pregunta buscaba un límite.',
        { h: 'Los que pasaron de largo' },
        'El sacerdote y el levita eran servidores del templo. Bajaban de Jerusalén, quizás después de cumplir su turno. Vieron al herido y pasaron por el otro lado. Jesús no explica sus razones; quizás temían tocar un cadáver, quizás temían a los ladrones. Lo importante es que su religión no los movió a la misericordia.',
        { h: 'El enemigo que se detuvo' },
        'El tercero era samaritano. Judíos y samaritanos se despreciaban desde hacía siglos; poco antes, una aldea samaritana había rechazado a Jesús (Lc 9:53). Pero este hombre «fue movido a misericordia» (Lc 10:33). Lucas usa ese verbo para Jesús ante la viuda de Naín (Lc 7:13) y para el padre del hijo pródigo (Lc 15:20). El samaritano actúa como actúa Dios. Arriesgó su seguridad, gastó su aceite y su vino, cedió su cabalgadura, pagó el mesón y se comprometió a volver.',
        { h: 'La pregunta cambiada' },
        'Jesús no respondió «tu prójimo es todo el mundo». Cambió la pregunta: no «¿quién es mi prójimo?», sino «¿quién se portó como prójimo?». El intérprete quería saber a quién estaba obligado a amar; Jesús le mostró que el amor no pregunta por la etnia ni por el mérito del necesitado. Y lo obligó a reconocer que un samaritano cumplió la ley mejor que los sacerdotes.',
        '«Ve, y haz tú lo mismo» (Lc 10:37). La parábola no se entiende solo con la mente; se obedece en el camino.',
        ir('Volver al comentario de Lucas 10', '#comentario/17'),
        ir('Ver «Los samaritanos en tiempos de Jesús» en El mundo judío', R.mundo + '#grupos/7')
      ],
      pensar: 'El samaritano ayudó a alguien que probablemente lo despreciaba. ¿A quién te cuesta ver como prójimo, y qué paso concreto puedes dar hacia esa persona?'
    },
    {
      id: 'p-insensato', n: 'El rico insensato', ref: 'Lucas 12:13-21; Eclesiastés 2:18-21; Santiago 4:13-15', fecha: 32,
      visual: [
        img('lc-rico-insensato.webp', 'De noche, un terrateniente rico contempla satisfecho sus graneros nuevos llenos de trigo a la luz de una lámpara, sin advertir las nubes oscuras que se acercan', 'El rico insensato (Lc 12:19-20).'),
        cita('Lucas 12:13-21', '@@lc/12/13-21')
      ],
      texto: [
        'La parábola nace de una interrupción. Mientras Jesús enseñaba, alguien le gritó: «Maestro, di a mi hermano que parta conmigo la herencia» (Lc 12:13). Era común pedir a un maestro que resolviera pleitos. Jesús se negó a ser juez en ese caso, pero vio el problema de fondo: «Mirad, y guardaos de toda avaricia» (Lc 12:15).',
        { h: 'Un hombre con éxito' },
        'La heredad de un hombre rico había producido mucho. No se dice que la obtuvo con trampas. Su problema era otro: no tenía dónde guardar tanto. Su solución parece sensata: derribar los graneros y construir otros mayores. Y luego decirse a sí mismo: «Alma, muchos bienes tienes guardados para muchos años; repósate, come, bebe, regocíjate» (Lc 12:19).',
        { h: 'Un diálogo consigo mismo' },
        'En la parábola, el hombre habla solo. Dice «mis frutos», «mis graneros», «mis bienes», «mi alma». No menciona a Dios, ni a los pobres, ni a nadie más. Planea muchos años sin preguntarse si los tendrá. Santiago advierte lo mismo a los que dicen «iremos a tal ciudad, y estaremos allá un año»: no saben lo que será mañana (Stg 4:13-14).',
        { h: 'La voz de Dios' },
        'Entonces habla Dios, y es la única vez en una parábola de Jesús que Dios habla directamente: «Necio, esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será?» (Lc 12:20). La palabra «necio» en la Biblia describe al que vive como si Dios no existiera (Sal 14:1). El hombre había asegurado su comida, pero no su vida.',
        { h: 'Rico para con Dios' },
        'Jesús concluye: «Así es el que hace para sí tesoro, y no es rico para con Dios» (Lc 12:21). Inmediatamente después enseña a sus discípulos a no afanarse, a buscar el reino y a hacerse tesoros en el cielo dando a los necesitados (Lc 12:22-34). Ser rico para con Dios es usar lo que tenemos según sus prioridades, sabiendo que todo es suyo y que nuestra vida está en sus manos.',
        ir('Volver al comentario de Lucas 12', '#comentario/19')
      ],
      pensar: 'El rico hizo planes sin contar con Dios ni con los demás. Si hoy fuera tu última noche, ¿de qué te gustaría haber sido «rico»?'
    },
    {
      id: 'p-cena', n: 'La gran cena', ref: 'Lucas 14:15-24; Isaías 25:6-9; Mateo 22:1-14', fecha: 32,
      visual: [
        cita('Lucas 14:16-24', '@@lc/14/16-24'),
        tabla({
          titulo: 'Tres excusas',
          cab: ['Excusa', 'Qué la hace extraña'],
          filas: [
            ['«He comprado una hacienda, y necesito ir a verla»', 'Nadie compra un campo sin haberlo visto antes'],
            ['«He comprado cinco yuntas de bueyes, y voy a probarlos»', 'Se prueban antes de comprarlos'],
            ['«Acabo de casarme, y por tanto no puedo ir»', 'La boda ya había ocurrido; la invitación se aceptó antes']
          ],
          nota: 'En aquel tiempo se invitaba dos veces: primero para anunciar la fiesta y después para avisar que todo estaba listo.'
        })
      ],
      texto: [
        'Durante una comida, un invitado exclamó: «Bienaventurado el que coma pan en el reino de Dios» (Lc 14:15). Todos esperaban el gran banquete del final, anunciado por Isaías, en el que Dios haría «banquete de manjares» para todos los pueblos (Is 25:6). Y cada uno se imaginaba sentado allí. Jesús respondió con una parábola que preguntaba quiénes estarían de verdad.',
        { h: 'Los invitados que no fueron' },
        'Un hombre hizo una gran cena y convidó a muchos. Ellos ya habían aceptado la primera invitación. Cuando el siervo fue a decirles que todo estaba preparado, todos comenzaron a excusarse. La tabla muestra que sus excusas eran pretextos. Ninguno dijo «no quiero ir», pero ninguno fue. Rechazar la invitación a última hora era una ofensa grave para el anfitrión.',
        { h: 'Los que entraron' },
        'El señor, enojado, mandó a su siervo a las plazas y calles de la ciudad a traer «a los pobres, los mancos, los cojos y los ciegos» (Lc 14:21), los mismos que Jesús acababa de mandar invitar (Lc 14:13). Y como todavía había lugar, lo envió fuera, «por los caminos y por los vallados», a obligar a otros a entrar, «para que se llene mi casa» (Lc 14:23).',
        { h: 'Israel y las naciones' },
        'Los primeros invitados representan a los que se creían seguros del reino, como los líderes religiosos que rechazaban a Jesús. Los pobres de la ciudad, a los marginados de Israel que lo recibían: publicanos, pecadores y enfermos. Los de los caminos, fuera de la ciudad, anuncian a los gentiles. Hechos muestra cómo se cumplió.',
        'La palabra «fuérzalos» no significa obligar a nadie a creer por la fuerza. En la cultura de entonces, un pobre invitado por un rico se negaba por cortesía; el siervo debía insistir con amor hasta convencerlo.',
        { h: 'Una invitación abierta' },
        'La parábola termina con una advertencia: ninguno de los primeros invitados gustará la cena (Lc 14:24). La invitación de Dios es generosa, pero se puede rechazar. Y todavía «hay lugar».',
        ir('Volver al comentario de Lucas 14', '#comentario/21'),
        ir('Ver la gran cena en la Armonía', R.armonia + '#gran-cena')
      ],
      pensar: 'Los invitados no dijeron «no», solo pusieron excusas. ¿Qué excusas sueles poner a la invitación de Dios, y qué excusas escuchas de los que todavía no han venido?'
    },
    {
      id: 'p-prodigo', n: 'El hijo pródigo y el hermano mayor', ref: 'Lucas 15:11-32', fecha: 32,
      visual: [
        img('lc-hijo-prodigo.webp', 'Un padre anciano corre por un camino polvoriento y abraza a su hijo joven, delgado y harapiento, ante una casa de campo de piedra', 'El padre corre a recibir a su hijo (Lc 15:20).'),
        cita('Lucas 15:20-24', '@@lc/15/20-24'),
        tabla({
          titulo: 'Lo que el padre le da al hijo',
          cab: ['Regalo', 'Qué significa'],
          filas: [
            ['El mejor vestido', 'Honor: lo recibe como hijo de la casa'],
            ['Un anillo', 'Autoridad: el sello de la familia'],
            ['Calzado', 'Libertad: los esclavos andaban descalzos'],
            ['El becerro gordo', 'Fiesta para todo el pueblo']
          ]
        })
      ],
      texto: [
        'Muchos llaman a esta historia «la parábola del hijo pródigo», pero su verdadero protagonista es el padre. Podría llamarse también «la parábola de los dos hijos perdidos», porque los dos estaban lejos del corazón del padre.',
        { h: 'El hijo que se fue' },
        'El menor pidió su parte de la herencia en vida de su padre. Era como decirle que prefería su dinero a su presencia. Se fue lejos y lo desperdició todo. Cuando vino el hambre, terminó cuidando cerdos, animales impuros, y deseando comer las algarrobas que ellos comían. Allí, «volviendo en sí» (Lc 15:17), recordó la casa de su padre y preparó un discurso: «Padre, he pecado contra el cielo y contra ti. Ya no soy digno de ser llamado tu hijo; hazme como a uno de tus jornaleros» (Lc 15:18-19). Es el retrato del arrepentimiento: reconocer, volver y confesar.',
        { h: 'El padre que corrió' },
        'El padre lo vio «cuando aún estaba lejos»: lo esperaba. Corrió, lo abrazó y lo besó antes de que el hijo terminara de hablar. No le dejó decir la parte de «hazme como a uno de tus jornaleros». Le devolvió todo lo que la tabla muestra y mandó hacer fiesta. Así es Dios con el pecador que vuelve: no lo recibe a prueba, sino como hijo.',
        { h: 'El hijo que se quedó' },
        'El mayor nunca se fue de casa, pero tampoco estaba cerca. Al oír la fiesta se enojó y no quiso entrar. Le reprochó al padre: «he aquí, tantos años te sirvo… y nunca me has dado ni un cabrito» (Lc 15:29). Se veía a sí mismo como un siervo que merecía un pago, no como un hijo. Y no llamó «mi hermano» al menor, sino «este tu hijo».',
        'El padre también salió a buscarlo y le rogó que entrara. La parábola no dice qué hizo. Jesús la contó a los fariseos que murmuraban porque recibía a pecadores (Lc 15:2); el final abierto era su invitación. Hay dos maneras de estar perdido: lejos de casa en el pecado, o dentro de casa en el orgullo.',
        ir('Volver al comentario de Lucas 15', '#comentario/22')
      ],
      pensar: 'El hermano mayor servía a su padre, pero no compartía su alegría. ¿Te alegras cuando Dios recibe a alguien que tú considerabas indigno?'
    },
    {
      id: 'p-lazaro', n: 'El rico y Lázaro', ref: 'Lucas 16:19-31; Isaías 58:7', fecha: 32,
      visual: [
        img('lc-rico-lazaro.webp', 'Ante la puerta de piedra de una casa lujosa, un mendigo flaco y cubierto de llagas yace en el suelo, mientras se ve el banquete adentro y unos perros se le acercan', 'Lázaro a la puerta del rico (Lc 16:20-21).'),
        tabla({
          titulo: 'Dos vidas, dos destinos',
          cab: ['', 'El rico', 'Lázaro'],
          filas: [
            ['Nombre', 'No se dice', '«Dios ayuda»'],
            ['En vida', 'Púrpura, lino fino, banquete cada día', 'Llagas, hambre, perros'],
            ['Al morir', '«Fue sepultado»', '«Fue llevado por los ángeles»'],
            ['Después', 'Tormentos en el Hades', 'Consolado en el seno de Abraham'],
            ['Lo que no cambia', 'Una gran sima entre los dos', '']
          ]
        }),
        cita('Lucas 16:27-31', '@@lc/16/27-31')
      ],
      texto: [
        'Jesús contó esta parábola a los fariseos, que eran amigos del dinero y se burlaban de su enseñanza (Lc 16:14). Es la parábola que más habla de lo que hay después de la muerte.',
        { h: 'Dos hombres en una puerta' },
        'El rico se vestía de púrpura, el color de los reyes, y de lino fino, y hacía banquete «cada día» con esplendidez. En el mundo de entonces, la carne se comía en las fiestas; él vivía en fiesta permanente. A su puerta, cada día también, yacía Lázaro, «lleno de llagas», deseando las migajas. Los perros callejeros, animales impuros, le lamían las llagas. El rico pasaba por esa puerta todos los días.',
        { h: 'La muerte cambia todo' },
        'Murió el mendigo «y fue llevado por los ángeles al seno de Abraham». Murió también el rico, y Lucas solo dice que «fue sepultado» (Lc 16:22). En el Hades, en tormentos, el rico alzó los ojos y vio a Lázaro con Abraham. Pidió alivio, pero Abraham le recordó que en vida había recibido sus bienes, y que entre ellos había una gran sima que nadie puede cruzar (Lc 16:26).',
        'El rico no fue condenado por ser rico, ni Lázaro salvado por ser pobre. Abraham mismo había sido muy rico. El rico fue condenado porque vivió para sí y sin arrepentirse, con Moisés y los profetas a su alcance, que mandaban compartir el pan con el hambriento (Is 58:7). Lázaro, cuyo nombre significa «Dios ayuda», representa al pobre que espera en Dios.',
        { h: '«A Moisés y a los profetas tienen»' },
        'Entonces el rico pidió que Lázaro fuera a advertir a sus cinco hermanos. Abraham respondió que ya tenían las Escrituras. Si no las oían, «tampoco se persuadirán aunque alguno se levantare de los muertos» (Lc 16:31). La señal más espectacular no convence a quien ha cerrado su corazón a la Palabra.',
        { h: 'Lo que enseña y lo que no' },
        'La parábola usa imágenes que los oyentes conocían, como el seno de Abraham. No pretende describir todos los detalles del más allá. Pero enseña con claridad que la persona sigue consciente después de la muerte, que hay consuelo para unos y tormento para otros, que el destino se decide en esta vida y que la Escritura basta para conocer el camino de la salvación.',
        ir('Volver al comentario de Lucas 16', '#comentario/23')
      ],
      pensar: '«A Moisés y a los profetas tienen; óiganlos.» Tienes la Biblia completa en tus manos. ¿Qué te está diciendo que hagas hoy, y lo estás oyendo?'
    },
    {
      id: 'p-publicano', n: 'El fariseo y el publicano', ref: 'Lucas 18:9-14; Salmo 51:17', fecha: 33,
      visual: [
        img('lc-fariseo-publicano.webp', 'En un atrio del templo, un fariseo bien vestido ora de pie con las manos en alto mientras, al fondo, un publicano con la cabeza baja se golpea el pecho', 'El fariseo y el publicano (Lc 18:10-13).'),
        cita('Lucas 18:9-14', '@@lc/18/9-14')
      ],
      texto: [
        'Lucas dice exactamente para quiénes contó Jesús esta parábola: «a unos que confiaban en sí mismos como justos, y menospreciaban a los otros» (Lc 18:9). Las dos actitudes van juntas: el que confía en su propia justicia termina despreciando a los demás.',
        { h: 'Dos hombres en el templo' },
        'Dos hombres subieron al templo a orar, probablemente a la hora del sacrificio de la mañana o de la tarde. Uno era fariseo, respetado por su piedad. El otro era publicano, despreciado como colaborador de Roma y ladrón.',
        { h: 'La oración del fariseo' },
        'El fariseo, «puesto en pie, oraba consigo mismo» (Lc 18:11). Comenzó bien, dando gracias, pero no por lo que Dios había hecho, sino por lo que él no era: ni ladrón, ni injusto, ni adúltero, «ni aun como este publicano». Luego enumeró sus méritos: ayunaba dos veces a la semana, más de lo que la ley exigía, y daba el diezmo de todo lo que ganaba. Usó «yo» cinco veces. No pidió nada, porque no creía necesitar nada.',
        { h: 'La oración del publicano' },
        'El publicano se quedó lejos, no quería ni alzar los ojos al cielo, y se golpeaba el pecho, un gesto de profundo dolor. Su oración tuvo pocas palabras: «Dios, sé propicio a mí, pecador» (Lc 18:13). La palabra «propicio» se relaciona con la expiación: pedía que Dios cubriera su pecado con un sacrificio. No tenía méritos que mostrar; solo pedía misericordia.',
        { h: 'Justificado' },
        'Jesús dio el veredicto que nadie esperaba: «Os digo que éste descendió a su casa justificado antes que el otro» (Lc 18:14). «Justificado» significa declarado justo por Dios. El publicano recibió de regalo lo que el fariseo creía haber ganado. Es la misma verdad que Pablo enseñará: el hombre es justificado por la fe, no por las obras de la ley (Ro 3:28).',
        'La parábola termina con un principio del reino que Lucas repite: «cualquiera que se enaltece, será humillado; y el que se humilla será enaltecido». Dios no desprecia «al corazón contrito y humillado» (Sal 51:17).',
        ir('Volver al comentario de Lucas 17–18', '#comentario/24'),
        ir('Ver «Justificados por la fe» en La persona y obra de Cristo', R.cristo + '#cruz/5')
      ],
      pensar: 'El fariseo se comparó con el publicano y se sintió bien. ¿Con quién te comparas tú? ¿Qué cambiaría si te compararas con la santidad de Dios?'
    }
  ];

  // ================== Temas: Las mujeres en Lucas ==================
  L.mujeres = [
    {
      id: 'w-maria', n: 'María, la sierva del Señor', ref: 'Lucas 1:26-56; 2:19, 34-35, 48-51; 8:19-21; 11:27-28; Hechos 1:14', fecha: [-6, 33],
      visual: [
        img('lc-elisabet-maria.webp', 'Una joven de velo gris azulado abraza en la puerta de una casa de piedra de las montañas de Judea a una mujer anciana embarazada, que la recibe con alegría', 'María y Elisabet (Lc 1:39-45).'),
        tabla({
          titulo: 'María en Lucas y Hechos',
          cab: ['Momento', 'Pasaje'],
          filas: [
            ['El anuncio: «Hágase conmigo conforme a tu palabra»', '1:38'],
            ['Bienaventurada porque creyó', '1:45'],
            ['El Magníficat: «mi Salvador»', '1:46-55'],
            ['Guardaba todo en su corazón', '2:19, 51'],
            ['Una espada traspasará su alma', '2:35'],
            ['Los que oyen la palabra y la hacen', '8:21; 11:28'],
            ['Orando con los discípulos antes de Pentecostés', 'Hch 1:14']
          ]
        })
      ],
      texto: [
        'Lucas es el evangelio que más nos dice de María, la madre de Jesús. La presenta con respeto y cariño, como la primera creyente del evangelio y modelo de fe para todos los discípulos.',
        { h: 'Una joven que creyó' },
        'María era una joven de una aldea sin importancia, desposada con un artesano. Dios la eligió por gracia: el ángel la llama «muy favorecida», es decir, objeto del favor de Dios (Lc 1:28). Ante un anuncio imposible, preguntó cómo sería y luego se entregó: «He aquí la sierva del Señor» (Lc 1:38). Elisabet la llamó bienaventurada «la que creyó» (Lc 1:45).',
        { h: 'Una adoradora que necesitaba un Salvador' },
        'En el Magníficat, María dice: «mi espíritu se regocija en Dios mi Salvador» (Lc 1:47). Se reconoce necesitada de salvación, como todos. Su cántico no la exalta a ella, sino a Dios, que «ha mirado la bajeza de su sierva». Todas las generaciones la llaman bienaventurada (Lc 1:48), porque Dios hizo con ella grandes cosas.',
        { h: 'Una mujer que meditaba' },
        'María no entendió todo de inmediato. Cuando Jesús se quedó en el templo, ella y José no comprendieron su respuesta (Lc 2:50). Pero «guardaba todas estas cosas en su corazón» (Lc 2:51). Simeón le había anunciado que una espada traspasaría su alma, y así fue al pie de la cruz.',
        { h: 'Bienaventurados los que oyen' },
        'Una mujer exclamó: «Bienaventurado el vientre que te trajo». Jesús respondió: «Antes bienaventurados los que oyen la palabra de Dios, y la guardan» (Lc 11:27-28). No despreció a su madre; señaló lo que la hacía grande: su fe obediente. Esa misma bienaventuranza está abierta a todos.',
        'La última vez que Lucas la menciona es en Hechos, orando con los discípulos en el aposento alto, esperando la promesa del Espíritu (Hch 1:14). La madre de Jesús llegó a ser también su discípula.',
        ir('Volver al comentario de Lucas 1:26-56', '#comentario/2')
      ],
      pensar: 'Lo que hizo grande a María fue que creyó y obedeció la palabra de Dios. ¿Qué palabra de Dios estás guardando y meditando en tu corazón?'
    },
    {
      id: 'w-elisabet-ana', n: 'Elisabet y Ana: mujeres del Espíritu', ref: 'Lucas 1:5-7, 24-25, 39-45, 57-60; 2:36-38; Joel 2:28', fecha: [-7, -5],
      visual: [
        cita('Lucas 2:36-38', '@@lc/2/36-38'),
        tabla({
          titulo: 'Dos ancianas fieles',
          cab: ['', 'Elisabet', 'Ana'],
          filas: [
            ['Familia', 'Descendiente de Aarón, esposa de un sacerdote', 'Hija de Fanuel, de la tribu de Aser'],
            ['Su dolor', 'Estéril, «afrenta» entre los hombres', 'Viuda después de siete años de matrimonio'],
            ['Su fe', 'Justa delante de Dios', 'No se apartaba del templo, ayunando y orando'],
            ['El Espíritu', 'Llena del Espíritu, bendice a María', 'Profetisa'],
            ['Su testimonio', 'Llama a María «la madre de mi Señor»', 'Habla del niño a los que esperaban la redención']
          ]
        })
      ],
      texto: [
        'En los primeros capítulos de Lucas, el Espíritu de Dios vuelve a hablar después de siglos, y lo hace por medio de hombres y de mujeres. Junto a María aparecen dos mujeres ancianas: Elisabet y Ana.',
        { h: 'Elisabet' },
        'Elisabet era de las hijas de Aarón, esposa del sacerdote Zacarías, con su esposo, «justos delante de Dios», pero estéril (Lc 1:5-7). En una cultura donde no tener hijos se vivía como una vergüenza, ella había cargado ese dolor por años. Cuando concibió, se escondió cinco meses y dijo que Dios había quitado su afrenta (Lc 1:25).',
        'Al recibir la visita de María, la criatura saltó en su vientre y ella «fue llena del Espíritu Santo» (Lc 1:41). Fue la primera persona en llamar «Señor» a Jesús antes de su nacimiento: «¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí?» (Lc 1:43). No hubo envidia en ella, aunque era mayor y esposa de sacerdote; se alegró de la bendición de la joven. Y fue firme: cuando quisieron llamar Zacarías al niño, dijo «No; se llamará Juan».',
        { h: 'Ana' },
        'Ana era profetisa, de la tribu de Aser, una de las tribus del norte que muchos daban por perdidas. Había enviudado joven, después de siete años de matrimonio, y tenía unos ochenta y cuatro años (o había vivido ochenta y cuatro años de viudez). No se apartaba del templo, «sirviendo de noche y de día con ayunos y oraciones» (Lc 2:37).',
        'Llegó en el momento en que Simeón sostenía al niño. Dio gracias a Dios «y hablaba del niño a todos los que esperaban la redención en Jerusalén» (Lc 2:38). Fue una de las primeras evangelistas: anunció a Jesús a los que esperaban.',
        { h: 'Hijos e hijas profetizarán' },
        'Joel había anunciado que Dios derramaría su Espíritu sobre toda carne, y que profetizarían «vuestros hijos y vuestras hijas» (Jl 2:28). Lucas muestra que ese derramamiento comienza a anticiparse en hombres y mujeres, jóvenes y ancianos. En Hechos, el Espíritu llena a todos, y las cuatro hijas de Felipe profetizan (Hch 21:9).',
        ir('Ir a los cánticos de la Navidad', '#canticos/1')
      ],
      pensar: 'Ana sirvió a Dios en oración durante décadas, y Dios le permitió ver al Mesías. ¿Qué te enseña su vida sobre la fidelidad en la espera?'
    },
    {
      id: 'w-galilea', n: 'La pecadora perdonada y las mujeres de Galilea', ref: 'Lucas 7:36–8:3; 23:49, 55-56', fecha: 31,
      visual: [
        img('lc-mujeres-galilea.webp', 'Por un camino de Galilea, un grupo de mujeres de distinta condición, una con vestido rojo granza, otra con ropa fina de la corte, camina detrás de un grupo de discípulos', 'Las mujeres que seguían a Jesús (Lc 8:1-3).'),
        cita('Lucas 8:1-3', '@@lc/8/1-3'),
        img('lc-pecadora-simon.webp', 'En el patio de la casa de un fariseo, una mujer de velo oscuro llora arrodillada junto a los pies de un invitado reclinado a la mesa, visto de espaldas, mientras el anfitrión la mira con desprecio', 'La mujer pecadora (Lc 7:38).')
      ],
      texto: [
        'Lucas pone una al lado de la otra dos escenas que muestran cómo Jesús recibía a las mujeres: una pecadora que lloraba a sus pies y un grupo de mujeres que lo acompañaban en su ministerio.',
        { h: 'Una mujer sin nombre' },
        'Lucas no dice su nombre, solo que «era pecadora» en la ciudad (Lc 7:37). Todos lo sabían, y por eso Simón el fariseo se escandalizó de que Jesús la dejara tocarlo. Ella no dijo una palabra; sus lágrimas, sus besos y su perfume hablaron por ella. Jesús la defendió, le dijo que sus pecados le eran perdonados y la despidió con dignidad: «Tu fe te ha salvado, vé en paz» (Lc 7:50). Esta mujer no es María Magdalena; Lucas presenta a María Magdalena unos versículos después, como alguien que había sido liberada de demonios, no como una pecadora pública.',
        { h: 'Las que le servían de sus bienes' },
        'Lucas cuenta que Jesús recorría las ciudades y aldeas con los doce y con algunas mujeres. Nombra a tres. María Magdalena, de Magdala, junto al lago, de la que habían salido siete demonios. Juana, mujer de Chuza, intendente de Herodes Antipas: una mujer de la corte que seguía a un predicador itinerante, quizás con riesgo. Y Susana, de la que no sabemos nada más. Había «otras muchas que le servían de sus bienes» (Lc 8:3).',
        'Que unas mujeres acompañaran a un maestro de pueblo en pueblo era algo muy poco común. Jesús las aceptó como discípulas, y ellas sostuvieron con su dinero el ministerio. Mujeres sanadas y liberadas se convirtieron en colaboradoras.',
        { h: 'Fieles hasta el final' },
        'Las mismas mujeres de Galilea estaban mirando de lejos cuando Jesús murió (Lc 23:49), vieron dónde lo sepultaron, prepararon especias y fueron al sepulcro el primer día de la semana (Lc 23:55–24:1). Cuando los discípulos huyeron, ellas permanecieron.',
        ir('Volver al comentario de Lucas 7:36–8:3', '#comentario/13'),
        ir('Ver «Las mujeres en tiempos de Jesús» en El mundo judío', R.mundo + '#vida/4')
      ],
      pensar: 'Las mujeres de Galilea sirvieron a Jesús con sus bienes y lo siguieron hasta la cruz. ¿Cómo estás sirviendo a Jesús con lo que tienes, y hasta dónde estás dispuesto a seguirle?'
    },
    {
      id: 'w-betania', n: 'Marta y María: servir y escuchar', ref: 'Lucas 10:38-42; Juan 11:1-44; 12:1-8', fecha: 32,
      visual: [
        img('../mundo-judio/img/mj-marta-maria.webp', 'En una casa de Betania, una joven se sienta a escuchar en el suelo mientras su hermana, con delantal, trae un cántaro con gesto de reproche', 'Marta y María (Lc 10:39-40).'),
        cita('Lucas 10:38-42', '@@lc/10/38-42')
      ],
      texto: [
        'Lucas cuenta una sola escena de las hermanas de Betania, pero ha dejado una huella profunda en la iglesia. Juan las presenta en otros dos momentos: la resurrección de su hermano Lázaro y la cena antes de la última Pascua.',
        { h: 'Marta recibe a Jesús' },
        'Lucas dice que Marta «le recibió en su casa» (Lc 10:38). Era la dueña de casa, hospitalaria y activa. Recibir a Jesús y a sus discípulos significaba cocinar para muchas personas. Marta «se preocupaba con muchos quehaceres» (Lc 10:40). Lo que hacía era bueno y necesario.',
        { h: 'María a los pies de Jesús' },
        'María, en cambio, «sentándose a los pies de Jesús, oía su palabra» (Lc 10:39). Esa era la postura de un discípulo ante su maestro; Pablo dice que se formó «a los pies de Gamaliel» (Hch 22:3). En aquel tiempo, muy pocos maestros aceptaban mujeres como discípulas. Jesús no solo lo permitió, sino que lo defendió.',
        { h: 'La queja y la respuesta' },
        'Marta se acercó molesta: «Señor, ¿no te da cuidado que mi hermana me deje servir sola? Dile, pues, que me ayude» (Lc 10:40). Se quejaba de su hermana y, en el fondo, de Jesús. Jesús le respondió con ternura, repitiendo su nombre: «Marta, Marta, afanada y turbada estás con muchas cosas. Pero sólo una cosa es necesaria; y María ha escogido la buena parte, la cual no le será quitada» (Lc 10:41-42).',
        'Jesús no despreció el servicio de Marta. Lo que corrigió fue el afán, que la hacía sentirse sola y juzgar a su hermana. El servicio que no nace de estar con Jesús se vuelve carga y queja.',
        { h: 'Las dos hermanas en Juan' },
        'Juan muestra que Marta también aprendió. Cuando murió Lázaro, ella hizo una de las grandes confesiones del evangelio: «yo he creído que tú eres el Cristo, el Hijo de Dios» (Jn 11:27). Y en la cena de Betania, mientras Marta servía, María ungió los pies de Jesús con perfume (Jn 12:2-3). Cada una sirvió con lo que era, a los pies de Jesús.',
        ir('Volver al comentario de Lucas 10', '#comentario/17')
      ],
      pensar: '«Sólo una cosa es necesaria.» ¿Cuánto tiempo pasas a los pies de Jesús escuchando su palabra, antes de servirle?'
    },
    {
      id: 'w-viudas', n: 'Viudas e hijas de Abraham', ref: 'Lucas 4:25-26; 7:11-17; 8:40-56; 13:10-17; 18:1-8; 20:47; 21:1-4', fecha: [29, 33],
      visual: [
        img('lc-viuda-juez.webp', 'Ante la puerta de un tribunal, una viuda de velo oscuro y ropa gastada reclama con el brazo extendido a un juez sentado que la mira con fastidio', 'La viuda y el juez (Lc 18:3).'),
        tabla({
          titulo: 'Mujeres que Jesús sanó, defendió o alabó',
          cab: ['Mujer', 'Pasaje', 'Lo que hizo Jesús'],
          filas: [
            ['La viuda de Sarepta', '4:25-26', 'La puso como ejemplo de la gracia a los gentiles'],
            ['La viuda de Naín', '7:11-17', 'Se compadeció y le devolvió a su hijo'],
            ['La mujer del flujo de sangre', '8:43-48', 'La sanó y la llamó «Hija»'],
            ['La hija de Jairo', '8:49-56', 'La resucitó'],
            ['La mujer encorvada', '13:10-17', 'La liberó y la llamó «hija de Abraham»'],
            ['La viuda insistente', '18:1-8', 'La puso como modelo de oración'],
            ['La viuda pobre', '21:1-4', 'Alabó su ofrenda']
          ]
        })
      ],
      texto: [
        'Lucas menciona viudas más que ningún otro evangelio. En el mundo antiguo, una viuda sin hijos quedaba sin sustento y sin quién la defendiera. La ley de Moisés mandaba cuidarlas (Dt 24:17-21), y los profetas denunciaban a quienes las oprimían. Jesús hizo lo mismo.',
        { h: 'Viudas en el ministerio de Jesús' },
        'En Nazaret, Jesús recordó a la viuda de Sarepta. En Naín, se compadeció de una viuda que enterraba a su único hijo. En el templo, denunció a los escribas que «devoran las casas de las viudas» con largas oraciones (Lc 20:47), y en seguida alabó a una viuda pobre que echó dos blancas, todo lo que tenía. En una parábola, una viuda sin poder es el modelo de la oración perseverante: insiste ante un juez injusto hasta conseguir justicia (Lc 18:1-8). Las viudas de Lucas son débiles ante los hombres y fuertes ante Dios.',
        { h: 'Hijas' },
        'Jesús llamó «Hija» a la mujer que llevaba doce años con flujo de sangre (Lc 8:48). Su enfermedad la hacía impura según la ley y la excluía de la vida religiosa. Tocó el manto de Jesús en secreto, pero Él la hizo hablar delante de todos para que todos supieran que estaba sana y restaurada. A la mujer encorvada la llamó «hija de Abraham» (Lc 13:16), un título que casi no se usaba para mujeres. Las declaró miembros plenos del pueblo de la promesa.',
        { h: 'El corazón de Dios' },
        'El salmista llama a Dios «Padre de huérfanos y defensor de viudas» (Sal 68:5). Jesús mostró ese corazón. Y la iglesia de Hechos lo continuó: organizó la ayuda diaria a las viudas (Hch 6:1-6), y Dorcas hacía túnicas para ellas (Hch 9:39). Santiago resume: la religión pura es visitar a los huérfanos y a las viudas en sus tribulaciones (Stg 1:27).',
        ir('Ver «Las mujeres en tiempos de Jesús» en El mundo judío', R.mundo + '#vida/4')
      ],
      pensar: 'Jesús se detuvo ante viudas y mujeres que nadie veía. ¿Hay en tu iglesia o en tu barrio personas solas que necesitan que alguien se detenga?'
    },
    {
      id: 'w-testigos', n: 'Las primeras testigos de la resurrección', ref: 'Lucas 23:49, 55-56; 24:1-12, 22-24; Hechos 1:14', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/tumba-vacia.webp', 'A la luz del amanecer, la entrada de una tumba excavada en la roca, con la piedra redonda corrida a un lado', 'La piedra removida (Lc 24:2).'),
        cita('Lucas 24:1-10', '@@lc/24/1-10')
      ],
      texto: [
        'Lucas termina su evangelio con las mujeres en el centro. Las que habían seguido a Jesús desde Galilea estuvieron junto a la cruz, en la sepultura y en la tumba vacía.',
        { h: 'Al pie de la cruz' },
        'Cuando Jesús murió, «todos sus conocidos, y las mujeres que le habían seguido desde Galilea, estaban lejos mirando estas cosas» (Lc 23:49). Siguieron a José de Arimatea, vieron el sepulcro y cómo fue puesto el cuerpo, y volvieron a preparar especias y ungüentos. El sábado descansaron, «conforme al mandamiento» (Lc 23:56). Eran fieles a la ley y fieles a su Señor.',
        { h: 'Muy de mañana' },
        'El primer día de la semana, muy de mañana, fueron al sepulcro con las especias. Iban a cumplir un último acto de amor por un muerto. Hallaron removida la piedra y no hallaron el cuerpo. Dos varones con vestiduras resplandecientes les dijeron: «¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado» (Lc 24:5-6). Y les recordaron lo que Jesús les había dicho en Galilea.',
        '«Entonces ellas se acordaron de sus palabras» (Lc 24:8). Las mujeres habían sido discípulas: habían escuchado la enseñanza de Jesús sobre su muerte y resurrección.',
        { h: 'Un testimonio despreciado' },
        'Lucas da sus nombres: María Magdalena, Juana y María madre de Jacobo, y «las demás con ellas». Fueron y contaron todo a los once, «mas a ellos les parecían locura las palabras de ellas, y no las creían» (Lc 24:11). En aquel tiempo, el testimonio de una mujer tenía poco valor ante un tribunal. Si los discípulos hubieran inventado la resurrección, nunca habrían elegido a mujeres como primeras testigos. Dios sí las eligió.',
        { h: 'En el aposento alto' },
        'Cuarenta días después, cuando los discípulos esperaban en Jerusalén la promesa del Padre, Lucas cuenta que perseveraban unánimes en oración «con las mujeres, y con María la madre de Jesús» (Hch 1:14). Cuando vino el Espíritu en Pentecostés, cayó sobre todos, hombres y mujeres, y se cumplió lo dicho por Joel: «vuestros hijos y vuestras hijas profetizarán» (Hch 2:17).',
        ir('Volver al comentario de Lucas 24', '#comentario/31'),
        ir('Ver «Las mujeres de Hechos» en Hechos', R.hechos + '#personajes/6')
      ],
      pensar: 'Las primeras en anunciar la resurrección no fueron creídas. ¿Sigues contando lo que Dios ha hecho aunque otros no te crean?'
    }
  ];

  // ================== Temas: Jesús que ora ==================
  L.oracion = [
    {
      id: 'o-bautismo', n: 'Orando en el bautismo y en lugares desiertos', ref: 'Lucas 3:21-22; 4:42; 5:15-16', fecha: [29, 30],
      visual: [
        img('../dios-y-la-trinidad/img/bautismo-jesus.webp', 'Jesús, de espaldas, sale del agua del Jordán mientras desde el cielo abierto desciende una luz suave', 'Jesús ora en el bautismo (Lc 3:21).'),
        cita('Lucas 5:15-16', '@@lc/5/15-16')
      ],
      texto: [
        'Esta ruta sigue a Jesús en los momentos en que Lucas lo muestra orando. Son más que en ningún otro evangelio, y casi siempre ocurren antes de un momento decisivo.',
        { h: 'El cielo se abrió mientras oraba' },
        'Mateo y Marcos cuentan que, al salir Jesús del agua, el cielo se abrió y el Espíritu descendió. Lucas agrega un detalle: «Jesús… orando, el cielo se abrió» (Lc 3:21). El comienzo del ministerio de Jesús, la venida del Espíritu sobre Él y la voz del Padre ocurren en un momento de oración. No es casual: en Hechos, el Espíritu también desciende sobre los discípulos mientras oran (Hch 1:14; 2:1-4; 4:31).',
        { h: 'Apartarse para orar' },
        'El ministerio en Galilea fue intenso. Después de un día entero sanando enfermos en Capernaúm, Jesús salió de madrugada a un lugar desierto (Lc 4:42). Cuando su fama se extendía y grandes multitudes venían a oírle y a ser sanadas, Lucas dice: «Mas él se apartaba a lugares desiertos, y oraba» (Lc 5:16). El verbo indica una costumbre, algo que hacía una y otra vez.',
        'Cuanto más crecía el ministerio, más se retiraba Jesús a orar. No lo hacía porque le sobrara tiempo, sino porque sabía de dónde venía su poder. El éxito y la presión de la gente podían alejarlo de su misión; la oración lo mantenía unido al Padre y a su voluntad.',
        { h: 'Un ejemplo para nosotros' },
        'Si el Hijo de Dios, lleno del Espíritu, necesitaba apartarse a solas con el Padre, cuánto más sus discípulos. La vida espiritual no se sostiene con la actividad, por buena que sea. Jesús enseñó después: «cuando ores, entra en tu aposento, y cerrada la puerta, ora a tu Padre que está en secreto» (Mt 6:6).',
        ir('Ver el bautismo en la Armonía', R.armonia + '#bautismo')
      ],
      pensar: 'Cuanto más ocupado estaba Jesús, más tiempo apartaba para orar. Cuando tu vida se llena de actividades, ¿qué pasa con tu tiempo a solas con Dios?'
    },
    {
      id: 'o-decisiones', n: 'Una noche antes de elegir y la cima del monte', ref: 'Lucas 6:12-13; 9:18-20, 28-31', fecha: [31, 32],
      visual: [
        img('lc-jesus-ora.webp', 'Antes del amanecer, en una ladera rocosa de Galilea, una figura vista de espaldas ora de rodillas con las manos abiertas, mientras unos discípulos esperan a cierta distancia', 'Jesús pasa la noche orando (Lc 6:12).'),
        cita('Lucas 6:12-13', '@@lc/6/12-13'),
        cita('Lucas 9:28-29', '@@lc/9/28-29', 'La transfiguración')
      ],
      texto: [
        'Tres momentos decisivos del ministerio de Jesús en Galilea están precedidos por la oración, y Lucas es el único que lo dice en los tres.',
        { h: 'Antes de elegir a los doce' },
        '«En aquellos días él fue al monte a orar, y pasó la noche orando a Dios. Y cuando era de día, llamó a sus discípulos, y escogió a doce de ellos» (Lc 6:12-13). Elegir a los apóstoles era una de las decisiones más importantes de su ministerio: ellos serían los testigos de su resurrección y el fundamento de la iglesia (Ef 2:20). Jesús no lo decidió solo; lo decidió con el Padre, en una noche entera de oración. Y aun así incluyó a Judas, que lo traicionaría, porque también eso estaba en el plan de Dios.',
        { h: 'Antes de la gran pregunta' },
        '«Aconteció que mientras Jesús oraba aparte, estaban con él los discípulos; y les preguntó, diciendo: ¿Quién dice la gente que soy yo?» (Lc 9:18). Después de orar, Jesús llevó a sus discípulos a confesar que era el Cristo de Dios, y les anunció por primera vez su muerte. La revelación de quién es Jesús nace en un ambiente de oración. Mateo agrega que Jesús le dijo a Pedro que eso no se lo había revelado carne ni sangre, sino el Padre (Mt 16:17).',
        { h: 'En la transfiguración' },
        'Lucas dice que Jesús subió al monte «a orar», «y entre tanto que oraba, la apariencia de su rostro se hizo otra» (Lc 9:28-29). Mateo y Marcos cuentan la transfiguración; solo Lucas dice que ocurrió mientras oraba. En la oración, la gloria del Hijo se hizo visible, y Moisés y Elías hablaron con Él de la partida que iba a cumplir en Jerusalén. Allí, en comunión con el Padre, Jesús enfrentó lo que le esperaba.',
        'Los discípulos, en cambio, «estaban rendidos de sueño» (Lc 9:32), como lo estarán después en Getsemaní. La oración de Jesús contrasta con el sueño de sus seguidores.',
        ir('Volver al comentario de Lucas 6:1-19', '#comentario/10')
      ],
      pensar: 'Jesús oró una noche entera antes de una decisión que afectaría a muchos. ¿Qué decisión importante estás por tomar, y cuánto la has orado?'
    },
    {
      id: 'o-ensenanos', n: '«Señor, enséñanos a orar»', ref: 'Lucas 11:1-13; Mateo 6:9-13', fecha: 32,
      visual: [
        cita('Lucas 11:1-4', '@@lc/11/1-4'),
        tabla({
          titulo: 'El Padre nuestro en Lucas',
          cab: ['Petición', 'Qué pide'],
          filas: [
            ['«Padre nuestro que estás en los cielos»', 'Hablar con Dios como hijos'],
            ['«Santificado sea tu nombre»', 'Que Dios sea honrado como santo'],
            ['«Venga tu reino»', 'Que Dios reine plenamente'],
            ['«Hágase tu voluntad, como en el cielo, así también en la tierra»', 'Que se haga lo que Dios quiere'],
            ['«El pan nuestro de cada día, dánoslo hoy»', 'Lo necesario para vivir'],
            ['«Perdónanos nuestros pecados»', 'El perdón, y perdonar a otros'],
            ['«No nos metas en tentación, mas líbranos del mal»', 'Protección en la prueba']
          ],
          nota: 'Las frases de la tabla siguen el texto de la RV 1960 en Lucas 11:2-4, que incluye algunas palabras que faltan en varios manuscritos antiguos.'
        })
      ],
      texto: [
        'Los discípulos de Juan aprendían a orar con su maestro, y los de Jesús le pidieron lo mismo. El pedido surgió al verlo orar: «Aconteció que estaba Jesús orando en un lugar, y cuando terminó, uno de sus discípulos le dijo: Señor, enséñanos a orar» (Lc 11:1).',
        { h: 'Un modelo, no una fórmula' },
        'Jesús les dio una oración breve. Mateo la registra en el sermón del monte, con algunas diferencias, lo que muestra que Jesús la enseñó en más de una ocasión. La iglesia la ha repetido por siglos, y está bien hacerlo. Pero Jesús la dio sobre todo como modelo: enseña qué pedir y en qué orden.',
        { h: 'Primero Dios' },
        'La oración comienza con Dios: su nombre, su reino, su voluntad. Antes de presentar nuestras necesidades, ponemos nuestra vida bajo su gobierno. Orar «venga tu reino» es pedir que Cristo reine plenamente, ahora en nuestras vidas y un día en toda la tierra.',
        { h: 'Después nuestras necesidades' },
        'Luego viene el pan «de cada día», que recuerda el maná del desierto: Dios provee día a día. El perdón, unido al compromiso de perdonar «a todos los que nos deben». Y la protección frente a la tentación, porque somos débiles.',
        { h: 'Orar con insistencia y confianza' },
        'Jesús añadió dos enseñanzas. La parábola del amigo a medianoche enseña a pedir con insistencia, sin vergüenza. Y la comparación con los padres enseña a pedir con confianza: si un padre humano no da una piedra al hijo que pide pan, «¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?» (Lc 11:13). La oración culmina pidiendo lo más importante: la presencia y el poder del Espíritu de Dios.',
        ir('Volver al comentario de Lucas 11', '#comentario/18')
      ],
      pensar: 'Los discípulos pidieron aprender a orar porque vieron orar a Jesús. ¿Hay alguien que esté aprendiendo a orar al verte orar a ti?'
    },
    {
      id: 'o-siempre', n: 'Orar siempre, y no desmayar', ref: 'Lucas 18:1-14; 21:36', fecha: 33,
      visual: [
        img('lc-viuda-juez.webp', 'Ante la puerta de un tribunal, una viuda de velo oscuro y ropa gastada reclama con el brazo extendido a un juez sentado que la mira con fastidio', 'La viuda y el juez (Lc 18:3).'),
        cita('Lucas 18:1-8', '@@lc/18/1-8')
      ],
      texto: [
        'Lucas presenta dos parábolas seguidas sobre la oración, y de las dos dice el propósito antes de contarlas.',
        { h: 'La viuda y el juez' },
        'La primera enseña «la necesidad de orar siempre, y no desmayar» (Lc 18:1). Un juez no temía a Dios ni respetaba a nadie. Una viuda, sin dinero ni influencias, le pedía justicia contra su adversario. Él no quiso por un tiempo, pero la insistencia de ella lo cansó: «le haré justicia, no sea que viniendo de continuo, me agote la paciencia» (Lc 18:5).',
        'La parábola no compara a Dios con el juez, sino que los contrasta. Si un juez injusto termina haciendo justicia, «¿acaso Dios no hará justicia a sus escogidos, que claman a él día y noche?» (Lc 18:7). Dios no es indiferente ni hay que cansarlo. Pero a veces parece tardar, y la tentación es desmayar. Jesús anima a seguir orando, porque Dios responderá «pronto», a su tiempo.',
        'La parábola termina con una pregunta: «cuando venga el Hijo del Hombre, ¿hallará fe en la tierra?» (Lc 18:8). La oración perseverante es una forma de fe que espera su venida.',
        { h: 'El fariseo y el publicano' },
        'La segunda parábola se dirige a los que confiaban en sí mismos. Muestra que no basta orar mucho; hay que orar con humildad. El fariseo oraba con frecuencia, pero su oración era una lista de méritos. El publicano solo pedía misericordia, y fue justificado. Dios escucha al humilde.',
        { h: 'Velad orando' },
        'En el discurso sobre el fin, Jesús vuelve a la oración: «Velad, pues, en todo tiempo orando que seáis tenidos por dignos de escapar de todas estas cosas que vendrán, y de estar en pie delante del Hijo del Hombre» (Lc 21:36). La oración mantiene despierto al creyente mientras espera a su Señor.',
        'Las dos parábolas juntas dan el retrato de la oración que agrada a Dios: perseverante como la viuda, humilde como el publicano.',
        ir('Volver al comentario de Lucas 17–18', '#comentario/24')
      ],
      pensar: '¿Hay alguna oración que hayas dejado de hacer porque la respuesta tardaba? ¿Qué te dice la viuda insistente?'
    },
    {
      id: 'o-getsemani', n: 'Por Pedro y en Getsemaní', ref: 'Lucas 22:31-32, 39-46; Hebreos 5:7; 7:25', fecha: 33,
      visual: [
        img('../persona-y-obra-de-cristo/img/getsemani.webp', 'De noche, entre olivos antiguos, una figura vista de espaldas ora postrada junto a una roca, mientras tres discípulos duermen a cierta distancia', 'Getsemaní (Lc 22:41).'),
        cita('Lucas 22:31-32', '@@lc/22/31-32')
      ],
      texto: [
        'En la última noche, Lucas muestra a Jesús orando de dos maneras: por otro y por sí mismo.',
        { h: '«Yo he rogado por ti»' },
        'En la cena, Jesús le advirtió a Pedro que Satanás había pedido zarandearlos como a trigo. El verbo está en plural: el ataque era contra todos. Pero Jesús dijo a Pedro: «yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos» (Lc 22:32). Jesús sabía que Pedro lo negaría, y oró antes de la caída para que su fe sobreviviera. Pedro cayó, pero no se perdió. Volvió, y en Hechos fue el que confirmó a sus hermanos.',
        'Hebreos dice que Jesús puede salvar a los que por Él se acercan a Dios, «viviendo siempre para interceder por ellos» (He 7:25). Lo que hizo por Pedro esa noche, lo sigue haciendo por su pueblo.',
        { h: 'En Getsemaní' },
        'En el monte de los Olivos, Jesús dijo a los discípulos: «Orad que no entréis en tentación» (Lc 22:40), y se apartó a orar. Su oración fue de entrega: «Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya» (Lc 22:42). Jesús no fingió: pidió honestamente que la copa pasara, y al mismo tiempo se sometió por completo a la voluntad del Padre.',
        'Hebreos describe esos días: «ofreciendo ruegos y súplicas con gran clamor y lágrimas al que le podía librar de la muerte, fue oído a causa de su temor reverente» (He 5:7). Fue oído, no porque se le evitara la cruz, sino porque recibió fuerza para ir a ella y fue librado de la muerte por la resurrección.',
        { h: 'Discípulos dormidos' },
        'Al volver, halló a los discípulos «durmiendo a causa de la tristeza» (Lc 22:45). Jesús les dijo de nuevo: «Levantaos, y orad para que no entréis en tentación». Momentos después llegó Judas. Jesús, que había orado, enfrentó la prueba con serenidad. Los discípulos, que durmieron, huyeron y negaron.',
        ir('Volver al comentario de Lucas 22:39-71', '#comentario/29')
      ],
      pensar: 'Jesús oró por Pedro antes de su caída. Hoy intercede por ti. ¿Por quién podrías orar tú hoy, sabiendo que enfrenta una prueba?'
    },
    {
      id: 'o-cruz', n: 'Orando en la cruz y una iglesia que ora', ref: 'Lucas 23:34, 46; 24:50-53; Hechos 1:14; 7:59-60', fecha: 33,
      visual: [
        cita('Lucas 23:33-34', '@@lc/23/33-34'),
        tabla({
          titulo: 'Jesús en la cruz y Esteban al morir',
          cab: ['Jesús (Lucas 23)', 'Esteban (Hechos 7)'],
          filas: [
            ['«Padre, perdónalos, porque no saben lo que hacen» (23:34)', '«Señor, no les tomes en cuenta este pecado» (7:60)'],
            ['«Padre, en tus manos encomiendo mi espíritu» (23:46)', '«Señor Jesús, recibe mi espíritu» (7:59)']
          ]
        })
      ],
      texto: [
        'Las últimas oraciones de Jesús en Lucas se pronuncian en la cruz, y las dos comienzan con «Padre».',
        { h: '«Padre, perdónalos»' },
        'Mientras lo crucificaban, Jesús oró: «Padre, perdónalos, porque no saben lo que hacen» (Lc 23:34). Había enseñado a amar a los enemigos y a orar por los que nos calumnian (Lc 6:27-28), y lo cumplió en el momento de mayor dolor. Oró por los soldados que lo clavaban, por los líderes que lo habían entregado y por el pueblo que gritaba. Pedro diría después a ese pueblo que había actuado «por ignorancia», y le ofrecería el perdón si se arrepentía (Hch 3:17-19). La oración de Jesús fue respondida en miles que se convirtieron.',
        { h: '«En tus manos encomiendo mi espíritu»' },
        'Su última palabra fue una oración tomada del Salmo 31:5: «Padre, en tus manos encomiendo mi espíritu» (Lc 23:46). Era una oración que los niños judíos aprendían para decir antes de dormir. Jesús añadió «Padre». Murió como había vivido: en comunión confiada con el Padre. Nadie le quitó la vida; Él la entregó.',
        { h: 'Una iglesia que ora' },
        'El evangelio termina con los discípulos en el templo, «alabando y bendiciendo a Dios» (Lc 24:53). Hechos comienza con ellos perseverando unánimes en oración en el aposento alto (Hch 1:14). La iglesia nace orando, y el Espíritu desciende sobre una iglesia que ora.',
        'El primer mártir, Esteban, murió orando como su Señor, como muestra la tabla. Los discípulos no solo aprendieron las palabras de Jesús; aprendieron su manera de orar y de morir.',
        'La oración atraviesa Lucas y Hechos de principio a fin. Jesús oró en el bautismo, en las noches de Galilea, en el monte, en Getsemaní y en la cruz. Y sus discípulos, llenos de su Espíritu, siguieron orando.',
        ir('Ver «Una iglesia que ora» en Hechos', R.hechos + '#iglesia/3'),
        ir('Ir a la ruta De Lucas a Hechos', '#puente/1')
      ],
      pensar: 'Jesús oró por los que lo crucificaban. ¿Hay alguien que te haya herido por quien todavía no has podido orar? Pide al Espíritu que te ayude a hacerlo.'
    }
  ];

  // ================== Temas: Los cánticos de la Navidad ==================
  L.canticos = [
    {
      id: 'k-evangelio', n: 'Un evangelio que canta', ref: 'Lucas 1:46-55, 68-79; 2:14, 29-32; Éxodo 15:1-21; 1 Samuel 2:1-10', fecha: [-6, -5],
      visual: [
        tabla({
          titulo: 'Los cuatro cánticos',
          cab: ['Nombre', 'Quién lo canta', 'Pasaje', 'Tema'],
          filas: [
            ['Magníficat', 'María', '1:46-55', 'Dios exalta a los humildes'],
            ['Benedictus', 'Zacarías', '1:68-79', 'Dios cumple su pacto'],
            ['Gloria in excelsis', 'Los ángeles', '2:14', 'Gloria a Dios, paz en la tierra'],
            ['Nunc dimittis', 'Simeón', '2:29-32', 'Luz para las naciones']
          ],
          nota: 'Los nombres vienen de la primera palabra de cada cántico en la traducción latina.'
        }),
        img('lc-pastores.webp', 'De noche, en un campo de pastoreo de las colinas de Belén, unos pastores con mantos de lana se cubren los ojos ante una luz intensa que baja del cielo sobre su rebaño', 'El cántico de los ángeles (Lc 2:13-14).')
      ],
      texto: [
        'Los dos primeros capítulos de Lucas están llenos de música. Cuatro cánticos celebran la venida del Salvador. La iglesia los ha cantado en sus cultos desde los primeros siglos, y han inspirado una gran cantidad de música cristiana.',
        { h: 'Cantos al estilo del Antiguo Testamento' },
        'Estos cánticos se parecen mucho a los salmos y a otros cantos del Antiguo Testamento. Están llenos de frases de la Escritura. El Magníficat recuerda al cántico de Ana, la madre de Samuel (1 S 2:1-10), y el Benedictus a las promesas a David y a Abraham. Los que cantan son judíos piadosos que conocían bien la Biblia; cuando el Espíritu los llenó, alabaron a Dios con las palabras de las Escrituras.',
        { h: 'Cantos del cumplimiento' },
        'En el Antiguo Testamento, los grandes actos de salvación terminaban en cántico. Después de cruzar el mar Rojo, Moisés y Miriam cantaron (Éx 15). Ahora Dios está haciendo algo mayor: visitar a su pueblo y enviar al Salvador. Los cánticos de Lucas celebran que las promesas antiguas se están cumpliendo.',
        { h: 'Cantos del Espíritu' },
        'Lucas dice que Elisabet fue «llena del Espíritu Santo» al bendecir a María (Lc 1:41), que Zacarías «fue lleno del Espíritu Santo, y profetizó» (Lc 1:67), y que el Espíritu estaba sobre Simeón (Lc 2:25). Estos cánticos son alabanza inspirada, profecía hecha canto. Pablo enseñaría después a la iglesia a hablar «entre vosotros con salmos, con himnos y cánticos espirituales, cantando y alabando al Señor en vuestros corazones» (Ef 5:19), como fruto de ser llenos del Espíritu.',
        { h: 'Cantos de humildes' },
        'Ninguno de los que cantan es poderoso: una joven de Nazaret, un sacerdote anciano, unos ángeles ante unos pastores, y un anciano en el templo. Dios pone su alabanza en la boca de los humildes. Esta ruta recorre cada cántico.',
        ir('Volver al comentario de Lucas 1', '#comentario/1')
      ],
      pensar: 'Los primeros que recibieron la noticia del Salvador respondieron cantando. ¿Ocupa la alabanza un lugar central en tu respuesta a lo que Dios ha hecho por ti?'
    },
    {
      id: 'k-magnificat', n: 'El Magníficat: el cántico de María', ref: 'Lucas 1:46-55; 1 Samuel 2:1-10; Génesis 17:7; 22:17-18', fecha: -6,
      visual: [
        cita('Lucas 1:46-55', '@@lc/1/46-55'),
        tabla({
          titulo: 'Ecos del cántico de Ana',
          cab: ['Ana (1 Samuel 2)', 'María (Lucas 1)'],
          filas: [
            ['«Mi corazón se regocija en Jehová» (2:1)', '«Mi espíritu se regocija en Dios mi Salvador» (1:47)'],
            ['«No hay santo como Jehová» (2:2)', '«Santo es su nombre» (1:49)'],
            ['«Los que estaban saciados se alquilaron por pan» (2:5)', '«A los hambrientos colmó de bienes, y a los ricos envió vacíos» (1:53)'],
            ['«Abate, y enaltece» (2:7)', '«Quitó de los tronos a los poderosos, y exaltó a los humildes» (1:52)']
          ]
        })
      ],
      texto: [
        'María cantó en casa de Elisabet, después de oír que era bienaventurada porque creyó. Su cántico tiene dos partes: lo que Dios hizo con ella y lo que Dios hace con su pueblo.',
        { h: 'Lo que Dios hizo conmigo' },
        '«Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador» (Lc 1:46-47). «Engrandecer» es hacer grande: María quiere que todos vean lo grande que es Dios. Lo llama «mi Salvador»: se sabe una pecadora que necesita salvación. Y dice por qué alaba: Dios «ha mirado la bajeza de su sierva» (Lc 1:48). No la eligió por sus méritos, sino por su gracia.',
        'Por eso «todas las generaciones» la llamarán bienaventurada. No porque ella sea objeto de adoración, sino porque «me ha hecho grandes cosas el Poderoso; santo es su nombre» (Lc 1:49). Toda la gloria es para Dios.',
        { h: 'Lo que Dios hace con su pueblo' },
        'La segunda parte se amplía. La misericordia de Dios es «de generación en generación a los que le temen» (Lc 1:50). Dios esparce a los soberbios, quita de los tronos a los poderosos y exalta a los humildes; llena a los hambrientos y despide vacíos a los ricos. María canta los verbos en pasado, como si ya hubiera ocurrido. Con la concepción de Jesús, Dios ya puso en marcha la gran inversión del reino que Jesús anunciará en todo el evangelio.',
        { h: 'Fiel a sus promesas' },
        'El cántico termina con el pacto: Dios socorrió a Israel su siervo, acordándose de su misericordia, «de la cual habló a nuestros padres, para con Abraham y su descendencia para siempre» (Lc 1:54-55). Lo que nació en Nazaret era el cumplimiento de la promesa hecha dos mil años antes.',
        { h: 'Una joven que conocía la Biblia' },
        'El cántico está tejido con frases del Antiguo Testamento, como muestra la tabla con el cántico de Ana. María conocía las Escrituras, y el Espíritu las puso en su boca como alabanza. Su ejemplo enseña que la Palabra guardada en el corazón se vuelve canto.',
        ir('Volver al comentario de Lucas 1:26-56', '#comentario/2'),
        ir('Ver «La promesa a Abraham» en Pactos y dispensaciones', R.pactos + '#pactos/3')
      ],
      pensar: 'María se maravilló de que Dios mirara a alguien tan pequeño como ella. ¿Qué «grandes cosas» ha hecho Dios contigo por las que puedes engrandecerlo hoy?'
    },
    {
      id: 'k-benedictus', n: 'El Benedictus: el cántico de Zacarías', ref: 'Lucas 1:67-79; 2 Samuel 7:12-16; Génesis 22:16-18; Isaías 9:2; Malaquías 4:2', fecha: -6,
      visual: [
        cita('Lucas 1:76-79', '@@lc/1/76-79'),
        tabla({
          titulo: 'Tres promesas cumplidas',
          cab: ['Promesa', 'En el Benedictus'],
          filas: [
            ['A David: un descendiente en su trono (2 S 7)', '«Nos levantó un poderoso Salvador en la casa de David» (1:69)'],
            ['A Abraham: bendición y victoria sobre los enemigos (Gn 22)', '«Del juramento que hizo a Abraham nuestro padre» (1:73)'],
            ['A los profetas: un mensajero y una luz', '«La aurora desde lo alto» (1:78; Is 9:2; Mal 4:2)']
          ]
        })
      ],
      texto: [
        'Zacarías había estado mudo nueve meses. Cuando escribió «Juan es su nombre», se le soltó la lengua, y sus primeras palabras fueron de alabanza. Lleno del Espíritu Santo, profetizó.',
        { h: 'Dios ha visitado a su pueblo' },
        '«Bendito el Señor Dios de Israel, que ha visitado y redimido a su pueblo» (Lc 1:68). La palabra «visitar» en la Biblia significa que Dios viene a intervenir en favor de su pueblo. Zacarías ve en el nacimiento de su hijo la señal de que Dios está por hacer algo mucho mayor: levantar «un poderoso Salvador en la casa de David» (Lc 1:69). Lo curioso es que Zacarías era de la tribu de Leví, no de la de David. No canta por su propio hijo, sino por el que vendría después de él, el hijo de María.',
        { h: 'El pacto de Abraham' },
        'Zacarías recuerda «su santo pacto; del juramento que hizo a Abraham nuestro padre» (Lc 1:72-73). Dios había jurado bendecir a Abraham y a su descendencia (Gn 22:16-18). Ahora cumple: libra a su pueblo de sus enemigos para que le sirvan sin temor, en santidad y en justicia delante de Él, todos sus días (Lc 1:74-75). La salvación tiene un propósito: una vida entregada a Dios.',
        { h: 'Tú, niño' },
        'En la segunda parte, Zacarías mira a su hijo recién nacido y profetiza su misión: «Y tú, niño, profeta del Altísimo serás llamado» (Lc 1:76). Juan prepararía el camino del Señor y daría «conocimiento de salvación a su pueblo, para perdón de sus pecados» (Lc 1:77). Los dos niños quedan en su lugar: Jesús es «Hijo del Altísimo» (Lc 1:32), Juan es «profeta del Altísimo».',
        { h: 'La aurora desde lo alto' },
        'El cántico termina con una imagen hermosa: por la entrañable misericordia de Dios, «nos visitó desde lo alto la aurora», para dar luz a los que habitan en tinieblas y en sombra de muerte, y encaminar nuestros pies por camino de paz (Lc 1:78-79). Isaías había anunciado que el pueblo que andaba en tinieblas vería gran luz (Is 9:2), y Malaquías, que nacería «el Sol de justicia» (Mal 4:2). Jesús es esa aurora.',
        ir('Volver al comentario de Lucas 1:57-80', '#comentario/3')
      ],
      pensar: 'Zacarías dice que Dios nos salva para que le sirvamos sin temor, en santidad y en justicia todos nuestros días. ¿Cómo se ve eso en tus días comunes?'
    },
    {
      id: 'k-gloria', n: 'Gloria in excelsis: el cántico de los ángeles', ref: 'Lucas 2:8-20; Isaías 9:6-7; Efesios 2:14-17', fecha: -5,
      visual: [
        img('lc-pastores.webp', 'De noche, en un campo de pastoreo de las colinas de Belén, unos pastores con mantos de lana se cubren los ojos ante una luz intensa que baja del cielo sobre su rebaño', 'Los pastores en el campo de Belén (Lc 2:8-9).'),
        cita('Lucas 2:13-14', '@@lc/2/13-14'),
        tabla({
          titulo: 'Dos mensajes de paz',
          cab: ['La paz de Augusto', 'La paz de Cristo'],
          filas: [
            ['Impuesta por las legiones', 'Anunciada por los ángeles'],
            ['El emperador, llamado «salvador»', '«Os ha nacido… un Salvador»'],
            ['Sus «buenas nuevas»: su nacimiento y sus victorias', '«Nuevas de gran gozo»: un niño en un pesebre'],
            ['Paz entre naciones sometidas', 'Paz con Dios y entre los hombres (Ef 2:14-17)']
          ]
        })
      ],
      texto: [
        'Es el cántico más breve y quizás el más conocido. Lo cantaron los ángeles a unos pastores en los campos de Belén.',
        { h: 'Un anuncio a los humildes' },
        'Un ángel se presentó a los pastores, «y la gloria del Señor los rodeó de resplandor» (Lc 2:9). La gloria de Dios, que había llenado el tabernáculo y el templo, ahora brillaba en un campo de pastoreo. El ángel les anunció el nacimiento del Salvador y les dio una señal sencilla: un niño envuelto en pañales, acostado en un pesebre. «Y repentinamente apareció con el ángel una multitud de las huestes celestiales, que alababan a Dios» (Lc 2:13).',
        { h: 'Gloria a Dios' },
        '«¡Gloria a Dios en las alturas!» El nacimiento de Jesús es, antes que nada, una obra que muestra la gloria de Dios. En el cielo los ángeles lo entienden y adoran; en la tierra, unos pastores son los primeros en unirse.',
        { h: 'Paz en la tierra' },
        '«Y en la tierra paz, buena voluntad para con los hombres» (Lc 2:14). En ese tiempo, el emperador Augusto era celebrado como el que había traído la paz al mundo. Pero esa paz se sostenía con las legiones. La paz que anuncian los ángeles es otra: la reconciliación con Dios que trae el Príncipe de paz (Is 9:6), y que después hace posible la paz entre los hombres. Pablo dice que Cristo «es nuestra paz» y que vino a anunciar «las buenas nuevas de paz» a los de lejos y a los de cerca (Ef 2:14, 17).',
        'La frase final se entiende como la buena voluntad de Dios hacia los hombres: la paz viene porque Dios los mira con favor, no porque ellos lo merezcan.',
        { h: 'Los pastores responden' },
        'Cuando los ángeles se fueron, los pastores no se quedaron discutiendo: «Pasemos, pues, hasta Belén, y veamos esto que ha sucedido» (Lc 2:15). Fueron aprisa, encontraron al niño y contaron lo que les habían dicho. Volvieron «glorificando y alabando a Dios» (Lc 2:20). El cántico de los ángeles se convirtió en el cántico de los pastores.',
        ir('Volver al comentario de Lucas 2:1-20', '#comentario/4'),
        ir('Ver «Jesús nace bajo Augusto» en El imperio romano', R.romano + '#biblia/2')
      ],
      pensar: 'Los pastores fueron, vieron y contaron. ¿Has dejado que la noticia de Jesús te lleve a ir a verle y a contarla a otros?'
    },
    {
      id: 'k-nunc', n: 'Nunc dimittis: el cántico de Simeón', ref: 'Lucas 2:25-35; Isaías 40:1; 42:6; 49:6; 52:10', fecha: -5,
      visual: [
        img('../entre-los-testamentos/img/simeon-templo.webp', 'En un atrio del templo, un anciano de barba blanca sostiene en brazos a un recién nacido y levanta la mirada al cielo, junto a una joven madre', 'Simeón toma al niño en sus brazos (Lc 2:28).'),
        cita('Lucas 2:29-35', '@@lc/2/29-35')
      ],
      texto: [
        'El último cántico de la Navidad lo canta un anciano en el templo, con el niño en sus brazos. Es una oración de despedida y de cumplimiento.',
        { h: 'Un hombre que esperaba' },
        'Simeón era «justo y piadoso», y esperaba «la consolación de Israel» (Lc 2:25), una expresión que viene de Isaías: «Consolaos, consolaos, pueblo mío» (Is 40:1). Era la esperanza en el Mesías. «El Espíritu Santo estaba sobre él», le había revelado que vería al Ungido antes de morir, y ese día lo movió a ir al templo (Lc 2:25-27). Tres veces se menciona al Espíritu en tres versículos.',
        { h: '«Ahora despides a tu siervo»' },
        'Simeón tomó al niño en brazos y bendijo a Dios: «Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación» (Lc 2:29-30). Habla como un siervo que ha terminado su guardia y puede retirarse. Dios cumplió su palabra; ya puede morir en paz. Lo que vio fue un niño de cuarenta días, pero con los ojos de la fe vio la salvación de Dios.',
        { h: 'Luz para los gentiles' },
        'El cántico dice que esa salvación fue preparada «en presencia de todos los pueblos; luz para revelación a los gentiles, y gloria de tu pueblo Israel» (Lc 2:31-32). Son ecos de Isaías, que anunció al Siervo de Jehová como «luz de las naciones» (Is 42:6; 49:6). En el corazón del templo de Jerusalén, un anciano judío anuncia que el Mesías es también para los gentiles. Es el tema de todo Lucas y Hechos.',
        { h: 'Una palabra para María' },
        'Después Simeón bendijo a José y a María, y habló a la madre de algo menos alegre. El niño sería «para caída y para levantamiento de muchos en Israel, y para señal que será contradicha», y «una espada traspasará tu misma alma» (Lc 2:34-35). Frente a Jesús, nadie queda neutral: unos caen y otros se levantan, y los pensamientos de muchos corazones quedan al descubierto. Y la madre sufriría al ver a su hijo rechazado y crucificado.',
        'Los cánticos de la Navidad terminan así, mirando ya hacia la cruz. La alegría del nacimiento y el dolor de la pasión van juntos en el plan de Dios.',
        ir('Volver al comentario de Lucas 2:21-52', '#comentario/5')
      ],
      pensar: 'Simeón pudo morir en paz porque había visto la salvación de Dios. ¿Tienes esa paz frente a la muerte? ¿Has visto en Jesús tu salvación?'
    }
  ];

  // ================== De Lucas a Hechos ==================
  L.puente = [
    {
      id: 'b-comenzo', n: 'Lo que Jesús comenzó', ref: 'Lucas 24:44-53; Hechos 1:1-3', fecha: 33,
      visual: [
        esq('lc-dos-tomos.svg', 'Dos columnas paralelas: Lucas va de Galilea a Jerusalén y termina con la ascensión; Hechos comienza con la ascensión y va de Jerusalén a Roma; en el centro, Jerusalén y la promesa del Espíritu', 'Lucas y Hechos: dos tomos que se encuentran en Jerusalén.'),
        cita('Hechos 1:1-3', '@@hch/1/1-3')
      ],
      texto: [
        'Esta última ruta conecta el final de Lucas con el comienzo de Hechos. El autor los escribió como una sola obra, y los últimos versículos del evangelio y los primeros de Hechos se superponen.',
        { h: 'Un final que es un comienzo' },
        'El evangelio termina con la ascensión y con los discípulos volviendo a Jerusalén con gran gozo (Lc 24:50-53). Hechos comienza volviendo atrás: resume los cuarenta días en que Jesús se presentó vivo «con muchas pruebas indubitables», hablándoles del reino de Dios (Hch 1:3), y cuenta de nuevo la ascensión con más detalle (Hch 1:9-11). Lucas une los dos tomos con una costura visible.',
        { h: '«Comenzó a hacer y a enseñar»' },
        'Hechos describe el primer tomo como el relato de «todas las cosas que Jesús comenzó a hacer y a enseñar, hasta el día en que fue recibido arriba» (Hch 1:1-2). Si el evangelio cuenta lo que Jesús comenzó, Hechos cuenta lo que Jesús continuó haciendo y enseñando, ahora desde el cielo, por medio de su iglesia y por el Espíritu Santo.',
        'Por eso Hechos podría llamarse también «los hechos de Jesús por el Espíritu en sus apóstoles». El protagonista sigue siendo el mismo. Cuando Pedro sana al cojo, dice que lo hizo en el nombre de Jesús (Hch 3:6, 16). Cuando Saulo persigue a la iglesia, Jesús le pregunta: «¿por qué me persigues?» (Hch 9:4).',
        { h: 'Dos ascensiones, un mismo hecho' },
        'Algunos lectores notan que el evangelio parece situar la ascensión el mismo día de la resurrección, mientras Hechos habla de cuarenta días. En realidad, el evangelio resume sin indicar el tiempo transcurrido entre Lucas 24:43 y 24:44, y Hechos lo precisa. Es la manera en que los historiadores antiguos resumían en un tomo lo que desarrollaban en otro.',
        'Las estaciones siguientes recorren los tres hilos que pasan de un libro al otro: la promesa del Padre, los testigos a todas las naciones y la misma misión con el mismo Espíritu.',
        ir('Ver «Un segundo tomo» en Hechos', R.hechos + '#introduccion/2'),
        ir('Ver «La ascensión» en La persona y obra de Cristo', R.cristo + '#exaltado/5')
      ],
      pensar: 'Jesús sigue obrando hoy por medio de su iglesia. Si alguien escribiera los «hechos» de Jesús en tu iglesia en este año, ¿qué podría contar?'
    },
    {
      id: 'b-promesa', n: 'La promesa del Padre', ref: 'Lucas 3:16; 11:13; 24:49; Hechos 1:4-5, 8; 2:1-4, 16-18, 33, 38-39', fecha: 33,
      visual: [
        tabla({
          titulo: 'Una promesa en dos tomos',
          cab: ['Lucas', 'Hechos'],
          filas: [
            ['Juan: «él os bautizará en Espíritu Santo y fuego» (3:16)', 'Jesús: «vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días» (1:5)'],
            ['El Padre dará el Espíritu a los que se lo pidan (11:13)', 'Los discípulos perseveran unánimes en oración (1:14)'],
            ['«Yo enviaré la promesa de mi Padre» (24:49)', '«Que esperasen la promesa del Padre» (1:4)'],
            ['«Investidos de poder desde lo alto» (24:49)', '«Recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo» (1:8)'],
            ['«Quedaos vosotros en la ciudad de Jerusalén» (24:49)', '«Que no se fueran de Jerusalén» (1:4)'],
            ['', 'Pentecostés: «fueron todos llenos del Espíritu Santo» (2:4)']
          ]
        }),
        img('../hechos/img/hechos-ascension.webp', 'En la cumbre del monte de los Olivos, los discípulos miran hacia el cielo mientras una figura luminosa asciende entre las nubes', 'La ascensión (Hch 1:9).')
      ],
      texto: [
        'El hilo más importante entre Lucas y Hechos es la promesa del Espíritu Santo. Lucas la anuncia al comienzo del ministerio de Jesús, la repite al final y la cumple en Pentecostés.',
        { h: 'Anunciada' },
        'Juan el Bautista dijo que el que vendría después de él bautizaría «en Espíritu Santo y fuego» (Lc 3:16). Jesús enseñó que el Padre daría el Espíritu Santo a los que se lo pidieran (Lc 11:13). Y antes de ascender dijo: «He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto» (Lc 24:49).',
        { h: 'Repetida' },
        'Hechos retoma la misma promesa con las mismas palabras. Jesús les mandó «que no se fueran de Jerusalén, sino que esperasen la promesa del Padre» y les dijo: «vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días» (Hch 1:4-5). La promesa del Padre, la investidura de poder y el bautismo en el Espíritu Santo son la misma experiencia.',
        { h: 'Cumplida' },
        'Diez días después de la ascensión, en el día de Pentecostés, mientras estaban todos unánimes juntos, vino un estruendo del cielo, aparecieron lenguas como de fuego, «y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen» (Hch 2:4). Pedro explicó que Jesús, exaltado a la diestra de Dios, «habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís» (Hch 2:33).',
        { h: 'Para todos' },
        'Pedro terminó su sermón diciendo que la promesa no era solo para los apóstoles: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). En Hechos, el Espíritu cae también sobre los samaritanos, sobre Cornelio y su casa, y sobre los discípulos de Éfeso. La promesa del Padre sigue vigente para cada creyente.',
        ir('Ver «La promesa del Espíritu» en Hechos', R.hechos + '#espiritu/1'),
        ir('Ver «La promesa y Pentecostés» en El movimiento pentecostal', R.pentecostal + '#raices/1')
      ],
      pensar: 'Jesús dijo que la promesa es «para todos los que están lejos». ¿Has recibido la promesa del Padre? ¿La estás buscando con la perseverancia de los discípulos en el aposento alto?'
    },
    {
      id: 'b-testigos', n: 'Testigos en todas las naciones', ref: 'Lucas 2:30-32; 24:46-48; Hechos 1:8; 13:47; 28:28', fecha: [33, 62],
      visual: [
        pasos([
          { t: '«Comenzando desde Jerusalén» (Lc 24:47; Hch 2)', fecha: 33, estado: { view: V.oriente, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'samaria', 'cesarea'] } },
          { t: 'En toda Judea y Samaria (Hch 8)', fecha: 35, estado: { view: V.oriente, capas: ['roma-14', 'iglesia-37'], lugares: ['jerusalen', 'samaria', 'cesarea', 'jope', 'damasco'] } },
          { t: '«Hasta lo último de la tierra»: Antioquía, Asia, Europa y Roma', fecha: 62, estado: { view: V.mediterraneo, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'efeso', 'filipos', 'corinto', 'roma'] } }
        ]),
        cita('Lucas 24:46-48', '@@lc/24/46-48')
      ],
      texto: [
        'El segundo hilo es la misión. El evangelio termina con una comisión, y Hechos cuenta cómo se cumplió.',
        { h: 'La comisión en Lucas' },
        'Jesús resumió el mensaje de las Escrituras en tres partes: que el Cristo padeciera, que resucitara al tercer día, y que se predicara en su nombre «el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén». Y agregó: «Y vosotros sois testigos de estas cosas» (Lc 24:46-48).',
        { h: 'El plan de Hechos' },
        'Hechos repite la comisión y le da forma de mapa: «me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Ese versículo es el índice del libro. Los capítulos 1 a 7 transcurren en Jerusalén; los capítulos 8 a 12, en Judea y Samaria, con la conversión de Saulo y de Cornelio; y del 13 al 28, el evangelio llega a Asia Menor, Grecia y Roma.',
        { h: 'Lo que Simeón anunció' },
        'El tema estaba presente desde el comienzo del evangelio. Simeón había dicho que el niño sería «luz para revelación a los gentiles» (Lc 2:32). Pablo y Bernabé, en Antioquía de Pisidia, citaron las mismas palabras de Isaías para explicar por qué iban a los gentiles: «Te he puesto para luz de los gentiles, a fin de que seas para salvación hasta lo último de la tierra» (Hch 13:47). Y al final de Hechos, en Roma, Pablo declara: «a los gentiles es enviada esta salvación de Dios; y ellos oirán» (Hch 28:28).',
        { h: 'Testigos' },
        'En los dos tomos, la palabra clave es «testigos». Un testigo cuenta lo que vio y oyó. Los apóstoles habían estado con Jesús desde el bautismo hasta la ascensión (Hch 1:21-22), y su testimonio de la resurrección es el fundamento de la fe. Pero en Hechos también son testigos Esteban, Felipe y muchos creyentes anónimos que, esparcidos por la persecución, «iban por todas partes anunciando el evangelio» (Hch 8:4).',
        ir('Ver «El bosquejo de Hechos 1:8» en Hechos', R.hechos + '#panorama/2'),
        ir('Ver «Un mapa trazado por Jesús» en Hechos', R.hechos + '#expansion/1')
      ],
      pensar: 'Los primeros testigos comenzaron en su propia ciudad. ¿Quién es tu «Jerusalén»: las personas de tu casa, tu trabajo o tu barrio a quienes Dios te envía primero?'
    },
    {
      id: 'b-mision', n: 'El mismo Espíritu, la misma misión', ref: 'Lucas 4:18; 5:17-26; 7:11-17; 23:34, 46; Hechos 3:1-10; 7:59-60; 9:36-41; 10:38', fecha: [29, 62],
      visual: [
        tabla({
          titulo: 'Los discípulos hacen lo que hizo su Señor',
          cab: ['Jesús en Lucas', 'Los discípulos en Hechos'],
          filas: [
            ['Ungido por el Espíritu para predicar (4:18)', 'Llenos del Espíritu, predican con denuedo (Hch 4:31)'],
            ['Sana a un paralítico (5:17-26)', 'Pedro sana a un cojo (Hch 3:1-10) y a Eneas (Hch 9:33-35)'],
            ['Resucita al hijo de la viuda y a la hija de Jairo (7:11-17; 8:49-56)', 'Pedro resucita a Dorcas (Hch 9:36-41)'],
            ['Expulsa demonios (4:33-36; 8:26-39)', 'Pablo libera a la muchacha de Filipos (Hch 16:16-18)'],
            ['Juzgado ante el Sanedrín, Herodes y Pilato', 'Pablo, ante el Sanedrín, Félix, Festo y Agripa'],
            ['Perdona a sus verdugos (23:34)', 'Esteban perdona a los suyos (Hch 7:60)']
          ]
        }),
        img('../hechos/img/hechos-cojo-hermosa.webp', 'A la entrada del templo, Pedro toma de la mano a un hombre cojo sentado en el suelo y lo levanta, mientras Juan observa', 'Pedro sana al cojo en la puerta la Hermosa (Hch 3:7).')
      ],
      texto: [
        'El tercer hilo es la continuidad entre Jesús y su iglesia. Lucas organiza sus dos tomos con paralelos para que el lector vea que los discípulos continúan la misión de su Maestro con el mismo Espíritu.',
        { h: 'Lo que hizo Jesús, lo hacen ellos' },
        'La tabla muestra algunos de esos paralelos. Jesús fue ungido por el Espíritu y anduvo «haciendo bienes y sanando a todos los oprimidos por el diablo» (Hch 10:38). En Hechos, los discípulos llenos del mismo Espíritu predican, sanan, liberan y resucitan muertos. Jesús había dicho: «el que en mí cree, las obras que yo hago, él las hará también» (Jn 14:12).',
        'Los milagros no son un fin en sí mismos. En Lucas y en Hechos, las señales confirman la palabra y abren la puerta al evangelio. Cuando el cojo fue sanado, Pedro predicó a Cristo resucitado, y cinco mil creyeron (Hch 3:12-26; 4:4).',
        { h: 'Lo que sufrió Jesús, lo sufren ellos' },
        'Los paralelos incluyen también el sufrimiento. Jesús fue llevado ante el Sanedrín, ante Herodes y ante el gobernador romano; Pablo comparece ante el mismo Sanedrín, ante gobernadores romanos y ante el rey Agripa. Jesús anunció que sus discípulos serían llevados «ante reyes y ante gobernadores por causa de mi nombre» (Lc 21:12), y así fue. Esteban murió orando como su Señor.',
        { h: 'Una misión que sigue' },
        'Hechos no tiene un final cerrado: Pablo predica en Roma «abiertamente y sin impedimento» (Hch 28:31), y el relato se detiene. La historia continúa. Cada generación de creyentes es llamada a escribir su capítulo, con la misma promesa del Padre y la misma comisión.',
        'Aquí termina este estudio de Lucas. El estudio de Hechos sigue la historia desde el otro lado.',
        ir('Abrir el estudio de Hechos de los Apóstoles', R.hechos),
        ir('Ver «Para qué son las señales» en Hechos', R.hechos + '#senales/6')
      ],
      pensar: 'Jesús dijo que sus discípulos harían sus obras por el mismo Espíritu. ¿Qué parte de la misión de Jesús te está llamando el Espíritu a continuar en tu vida?'
    }
  ];

  // ================== Datos de la app ==================
  delete window.__LC;
  const LINEA = { desde: -8, hasta: 65, hitos: [
    { a: -5, t: 'Nace Jesús' }, { a: 8, t: 'Jesús a los doce' }, { a: 29, t: 'Bautismo' },
    { a: 33, t: 'Cruz y Pentecostés' }, { a: [57, 59], t: 'Lucas en Judea' }, { a: [60, 61], t: 'Lucas escribe' }
  ] };
  const LINEA_MIN = { desde: 26, hasta: 36, hitos: [
    { a: 26, t: 'Pilato' }, { a: [28, 29], t: 'Año 15 de Tiberio' }, { a: 29, t: 'Bautismo' },
    { a: 30, t: 'Pascua' }, { a: 32, t: 'Hacia Jerusalén' }, { a: 33, t: 'La cruz' }
  ] };
  const LINEA_VIDA = { desde: -8, hasta: 35, hitos: [
    { a: -5, t: 'Nace Jesús' }, { a: 8, t: 'Jesús a los doce' },
    { a: 29, t: 'Bautismo' }, { a: 33, t: 'Cruz y Pentecostés' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Lucas',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio (como La tierra de Israel)
      minZoom: 3.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.MUNDO_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'introduccion', grupo: 'Estudio del libro', n: 'I. Introducción y trasfondo', info: 'Lucas el médico, Teófilo, los testigos, la fecha, el mundo de Lucas 3:1 y el censo', estaciones: L.introduccion, linea: LINEA },
      { id: 'panorama', grupo: 'Estudio del libro', n: 'II. Visión panorámica', info: 'Estructura, bosquejo, palabras clave, Lucas 19:10 y los grandes temas', estaciones: L.panorama, linea: LINEA },
      { id: 'comentario', grupo: 'Estudio del libro', n: 'III. Comentario', info: 'Los 24 capítulos de Lucas en 32 estaciones', estaciones: L.comentario, linea: LINEA_VIDA },
      { id: 'teologia', grupo: 'Estudio del libro', n: 'IV. Teología de Lucas', info: 'Cristo, el Espíritu, la salvación, el reino, los últimos tiempos, la oración, los pobres y el discipulado', estaciones: L.teologia, linea: LINEA },
      { id: 'mapas', grupo: 'Mapas', n: 'Lucas en el mapa', info: 'El imperio, Nazaret y Belén, Galilea, el gran viaje, Jericó y Emaús', estaciones: L.mapas, linea: LINEA },
      { id: 'parabolas', grupo: 'Temas', n: 'Las parábolas de Lucas', info: 'El buen samaritano, el rico insensato, la gran cena, el hijo pródigo, el rico y Lázaro, el fariseo y el publicano', estaciones: L.parabolas, linea: LINEA_MIN },
      { id: 'mujeres', grupo: 'Temas', n: 'Las mujeres en Lucas', info: 'María, Elisabet y Ana, las mujeres de Galilea, Marta y María, las viudas y las testigos', estaciones: L.mujeres, linea: LINEA },
      { id: 'oracion', grupo: 'Temas', n: 'Jesús que ora', info: 'Del bautismo a la cruz: Jesús ora y enseña a orar', estaciones: L.oracion, linea: LINEA_MIN },
      { id: 'canticos', grupo: 'Temas', n: 'Los cánticos de la Navidad', info: 'Magníficat, Benedictus, Gloria y Nunc dimittis', estaciones: L.canticos, linea: LINEA },
      { id: 'puente', grupo: 'Temas', n: 'De Lucas a Hechos', info: 'Lo que Jesús comenzó, la promesa del Padre, los testigos y la misma misión', estaciones: L.puente, linea: LINEA }
    ]
  };
})();
