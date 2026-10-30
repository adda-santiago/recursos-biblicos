/* El mundo judío en tiempos de Jesús · ruta VI. Jesús en su mundo (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA VI. Jesús en su mundo ==================
  const jesus = [
    {
      id: 'galileo', n: 'Un judío de Galilea: Nazaret y Capernaúm', ref: 'Gálatas 4:4; Lucas 2:21-24, 39-41; Mateo 2:23; Juan 1:46; Mateo 4:12-16; Mateo 9:1; Marcos 6:1-6', fecha: [-6, 30],
      visual: [
        pasos([
          { t: 'Nazaret, una aldea de unos pocos cientos de habitantes en las colinas de la Baja Galilea', fecha: 0, estado: { view: V.galilea, capas: ['nt-galilea'], lugares: ['nazaret', 'seforis', 'cana', 'nain'] } },
          { t: 'Capernaúm, «su ciudad», a orillas del lago, en el camino hacia el territorio de Felipe', fecha: 28, estado: { view: V.lago, capas: ['nt-galilea', 'nt-felipe'], lugares: ['capernaum', 'betsaida', 'corazin', 'magdala', 'tiberias'] } },
          { t: 'Los viajes de Jesús: Galilea, Samaria, Judea y las regiones vecinas', fecha: 29, estado: { view: V.palestina, capas: DIV, lugares: ['nazaret', 'capernaum', 'cesarea-filipo', 'tiro-sidon', 'gadara', 'sicar', 'jerusalen', 'betania', 'jerico'], trazos: ['jesus-samaria', 'jesus-jerusalen'] } }
        ]),
        img('../tierra-de-israel/img/galilea.webp', 'Una barca de pesca de madera del siglo I en el mar de Galilea al amanecer, con pescadores anónimos recogiendo una red; detrás, las colinas verdes de la orilla y la niebla sobre el agua', 'El mar de Galilea, centro del ministerio de Jesús. Recreación.'),
        cita('Mateo 4:12-16', '@@mt/4/12-16')
      ],
      texto: [
        'Pablo resume el nacimiento de Jesús en pocas palabras: «Dios envió a su Hijo, nacido de mujer y nacido bajo la ley» (Gá 4:4). Jesús nació judío, en una familia judía piadosa. Fue circuncidado al octavo día, presentado en el templo, criado en la ley de Moisés y llevado cada año a Jerusalén para la Pascua. Todo lo que este recurso ha descrito fue su mundo.',
        { h: 'Nazaret' },
        'Jesús creció en Nazaret, una aldea pequeña y sin importancia en las colinas de la Baja Galilea, tan pequeña que el Antiguo Testamento no la menciona. La arqueología ha encontrado allí casas sencillas, cuevas usadas como bodegas, prensas de aceite y de vino, y terrazas de cultivo. Natanael, de la cercana Caná, preguntó con desdén: «¿De Nazaret puede salir algo de bueno?» (Jn 1:46). A unos seis kilómetros estaba Séforis, la ciudad que Herodes Antipas reconstruía; desde las colinas de Nazaret se veía el gran valle de Jezreel, con su historia de batallas y profetas.',
        'Cuando Jesús volvió a Nazaret como maestro, sus vecinos no pudieron aceptar que el carpintero que habían visto crecer fuera alguien especial: «Y se escandalizaban de él». Jesús les dijo: «No hay profeta sin honra, sino en su propia tierra y en su casa» (Mt 13:57).',
        { h: 'Capernaúm, su ciudad' },
        'Al comenzar su ministerio, Jesús dejó Nazaret y «habitó en Capernaum, ciudad marítima» (Mt 4:13), a orillas del lago. Era una aldea de pescadores y agricultores, más grande que Nazaret, en el camino que llevaba al territorio de Felipe, con una aduana y una guarnición. Allí vivían Pedro y Andrés, y desde allí recorrió Jesús las aldeas de Galilea. Mateo la llama «su ciudad» (Mt 9:1). En Capernaúm se han excavado las casas de basalto de la época, una sinagoga posterior construida sobre otra más antigua, y una casa que los cristianos veneraron desde muy temprano como la casa de Pedro.',
        'Mateo vio en ese traslado el cumplimiento de Isaías: «El pueblo asentado en tinieblas vio gran luz» (Mt 4:16). La luz del Mesías no se encendió primero en Jerusalén, sino en la despreciada Galilea.',
        ir('Ver la Armonía de los evangelios: el ministerio en Galilea', R.armonia)
      ],
      pensar: 'Jesús pasó treinta años en una aldea pequeña y sin fama, y sus propios vecinos no lo reconocieron. ¿Qué te enseña esto sobre la manera en que Dios obra, muchas veces en lo pequeño y lo escondido?'
    },
    {
      id: 'maestro', n: 'Un maestro sin escuela: «Rabí», discípulos y parábolas', ref: 'Juan 1:38; Juan 7:15; Mateo 5:1-2; Mateo 7:28-29; Marcos 3:13-15; Mateo 13:34; Lucas 9:57-62', fecha: [27, 30],
      visual: [
        img('mj-sermon-ladera.webp', 'En una ladera verde junto al mar de Galilea, en primavera, Jesús, visto de espaldas, está sentado sobre una roca enseñando a sus discípulos sentados cerca de él, mientras una gran multitud de galileos anónimos, familias, ancianos y niños, escucha sentada en la hierba; abajo brilla el lago', '«Viendo la multitud, subió al monte; y sentándose, vinieron a él sus discípulos» (Mateo 5:1). Recreación.'),
        tabla({
          titulo: 'Jesús y los maestros de su tiempo',
          cab: ['', 'Un maestro de la ley', 'Jesús'],
          filas: [
            ['Formación', 'Años a los pies de un maestro conocido', '«¿Cómo sabe éste letras, sin haber estudiado?» (Juan 7:15)'],
            ['Discípulos', 'Los discípulos elegían a su maestro', 'Jesús eligió a los suyos: «Venid en pos de mí» (Marcos 1:17)'],
            ['Autoridad', 'Citaba a los maestros anteriores', '«Pero yo os digo» (Mateo 5:22)'],
            ['Dónde enseñaba', 'En la escuela, la sinagoga o el templo', 'En sinagogas, casas, caminos, barcas, montes y en el templo'],
            ['A quién', 'A quienes podían dedicarse al estudio', 'A todos: pescadores, publicanos, mujeres, niños y pecadores'],
            ['Meta', 'Que el discípulo llegara a ser maestro', 'Que el discípulo estuviera con Él y fuera enviado (Marcos 3:14)']
          ]
        }),
        cita('Mateo 7:28-29', '@@mt/7/28-29')
      ],
      texto: [
        'Los dos primeros discípulos que siguieron a Jesús le preguntaron: «Rabí (que traducido es, Maestro), ¿dónde moras?» (Jn 1:38). Así lo veía la gente: como un maestro, un rabí. Tenía discípulos, enseñaba en las sinagogas y en el templo, discutía la ley con los fariseos y le hacían las mismas preguntas que a cualquier maestro: cuál es el primer mandamiento, si es lícito el divorcio, quién es mi prójimo.',
        { h: 'Pero distinto de todos' },
        'Al mismo tiempo, Jesús no encajaba en el molde. No había estudiado con ningún maestro conocido, y en Jerusalén se preguntaban: «¿Cómo sabe éste letras, sin haber estudiado?» (Jn 7:15). Los discípulos de un rabino lo elegían a él; Jesús, en cambio, eligió a los suyos y les dijo: «Sígueme». Un maestro enseñaba citando a otros; Jesús decía: «Oísteis que fue dicho… pero yo os digo». Por eso la gente «se admiraba de su doctrina; porque les enseñaba como quien tiene autoridad, y no como los escribas» (Mt 7:28-29).',
        { h: 'Enseñar en parábolas' },
        'Los maestros judíos usaban parábolas, comparaciones tomadas de la vida diaria para explicar una verdad. Jesús las usó como nadie: «sin parábolas no les hablaba» (Mt 13:34). Hablaba de semillas y cosechas, de ovejas y pastores, de monedas, bodas, deudas y vecinos. Sus oyentes reconocían cada escena, y la historia los obligaba a pensar y a tomar una decisión. Para los que tenían el corazón abierto, las parábolas revelaban los misterios del reino; para los que lo tenían cerrado, quedaban como historias sin sentido (Mt 13:10-15).',
        { h: 'Discípulos para estar con Él' },
        'Un discípulo judío vivía junto a su maestro para aprender no solo lo que decía, sino cómo vivía. Jesús estableció a doce «para que estuviesen con él, y para enviarlos a predicar» (Mr 3:14). Seguirlo significaba dejar la casa, la barca o el banco de los tributos, y aceptar una vida sin seguridad: «las zorras tienen guaridas, y las aves de los cielos nidos; mas el Hijo del Hombre no tiene dónde recostar la cabeza» (Lc 9:58). Pero la meta no era que llegaran a ser maestros como Él, sino testigos llenos del Espíritu Santo que hicieran discípulos en todas las naciones (Mt 28:19).',
        { ejercicio: {
          pregunta: '¿Qué asombraba a la gente de la manera de enseñar de Jesús?',
          opciones: [
            { t: 'Que hablaba en griego, y no en arameo como los demás maestros.', ok: false, por_que: 'El asombro no tenía que ver con la lengua, sino con la autoridad con que enseñaba.' },
            { t: 'Que enseñaba con autoridad propia, sin apoyarse en lo que decían otros maestros.', ok: true, por_que: 'Los escribas citaban la tradición; Jesús hablaba como quien tiene autoridad (Mateo 7:29).' },
            { t: 'Que nunca citaba la Escritura en sus enseñanzas.', ok: false, por_que: 'Jesús citó constantemente la ley, los profetas y los salmos.' }
          ],
          explicacion: 'Jesús honró la Escritura, pero habló como su autor: «el cielo y la tierra pasarán, pero mis palabras no pasarán» (Mateo 24:35).'
        } }
      ],
      pensar: 'Jesús llamó a sus discípulos para que estuvieran con Él antes de enviarlos. ¿Cuánto tiempo pasas con Jesús, en su Palabra y en oración, antes de intentar servirle?'
    },
    {
      id: 'ley', n: 'Jesús y la ley: «no he venido para abrogar»', ref: 'Mateo 5:17-48; Mateo 22:35-40; Marcos 7:18-19; Romanos 10:4; Gálatas 4:4-5', fecha: [27, 30],
      visual: [
        cita('Mateo 5:17-20', '@@mt/5/17-20'),
        tabla({
          titulo: '«Oísteis que fue dicho… pero yo os digo»',
          cab: ['Lo que decía la ley', 'Lo que enseñó Jesús', 'Mateo'],
          filas: [
            ['No matarás', 'Tampoco te enojes ni insultes a tu hermano', '5:21-26'],
            ['No cometerás adulterio', 'Tampoco mires a una mujer para codiciarla', '5:27-30'],
            ['Quien repudie a su mujer, dele carta de divorcio', 'Lo que Dios juntó, no lo separe el hombre', '5:31-32; 19:3-9'],
            ['No perjurarás', 'No jures en ninguna manera; sea vuestro sí, sí', '5:33-37'],
            ['Ojo por ojo', 'No resistas al que es malo; ve la segunda milla', '5:38-42'],
            ['Amarás a tu prójimo', 'Amad a vuestros enemigos', '5:43-48']
          ]
        })
      ],
      texto: [
        'Algunos acusaban a Jesús de despreciar la ley, porque no seguía las tradiciones de los fariseos sobre el día de reposo o la pureza. Jesús respondió con claridad: «No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17). Y agregó algo que debió sorprender a sus oyentes: «si vuestra justicia no fuere mayor que la de los escribas y fariseos, no entraréis en el reino de los cielos» (Mt 5:20). Los fariseos eran los más estrictos. ¿Cómo podía alguien ser más justo que ellos?',
        { h: 'Una justicia del corazón' },
        'La respuesta está en lo que sigue. Jesús tomó varios mandamientos y mostró que Dios no mira solo los actos, sino el corazón. No basta con no matar: el enojo y el desprecio ya son homicidio a los ojos de Dios. No basta con no cometer adulterio: la mirada codiciosa ya es adulterio en el corazón. No basta con amar al prójimo: hay que amar también al enemigo. Los fariseos ponían cercos alrededor de la ley para no quebrantarla por fuera; Jesús llevó la ley hasta el fondo del corazón, donde nadie puede cumplirla por sí mismo.',
        { h: 'Toda la ley en dos mandamientos' },
        'Cuando un intérprete de la ley le preguntó cuál era el gran mandamiento, Jesús unió dos textos de Moisés: amar a Dios con todo el corazón (Dt 6:5) y amar al prójimo como a uno mismo (Lv 19:18). «De estos dos mandamientos depende toda la ley y los profetas» (Mt 22:40).',
        { h: 'Cumplir la ley' },
        'Jesús no solo enseñó la ley: la cumplió. Fue el único que la obedeció perfectamente, desde el corazón, y en la cruz cargó la maldición que la ley pronunciaba sobre los que la quebrantan (Gá 3:13). Por eso Pablo dice que «el fin de la ley es Cristo, para justicia a todo aquel que cree» (Ro 10:4). Algunos mandamientos, como los sacrificios y las leyes de pureza, señalaban hacia Él y se cumplieron en Él. La ley moral de Dios, en cambio, sigue mostrando su voluntad, y el Espíritu Santo la escribe en el corazón del creyente (Ro 8:3-4).',
        ir('Ver Pactos y dispensaciones: ¿qué pasa con el pacto del Sinaí?', R.pactos + '#cristo/4'),
        { posturas: {
          titulo: '¿Qué significa que Jesús vino a «cumplir» la ley?',
          a: { n: 'Obedecerla y enseñarla en su sentido pleno', t: 'Jesús cumplió la ley obedeciéndola perfectamente y mostrando su verdadero sentido, que sus oyentes habían reducido a reglas exteriores.' },
          b: { n: 'Llevarla a su término', t: 'Jesús cumplió la ley como el cumplimiento cumple una profecía: todo lo que la ley anunciaba encontró su realidad en Él, y por eso algunos de sus mandamientos ya no se practican igual en el nuevo pacto.' },
          c: 'Las dos ideas son verdaderas y se complementan: Jesús obedeció la ley perfectamente y, por su muerte y resurrección, cumplió lo que la ley prefiguraba. El creyente no está bajo la ley como sistema, sino bajo la gracia, y el Espíritu lo capacita para vivir la justicia que la ley pedía.'
        } }
      ],
      pensar: 'Jesús enseñó que Dios mira el corazón y no solo los actos. Cuando lees Mateo 5, ¿qué te revela sobre tu propio corazón, y qué te enseña sobre tu necesidad de la gracia de Cristo?'
    },
    {
      id: 'frente-grupos', n: 'Jesús frente a cada grupo', ref: 'Mateo 22:15-46; Marcos 12:13-34; Lucas 20:20-26; Romanos 13:1-7', fecha: [30, 33],
      visual: [
        img('mj-tributo-cesar.webp', 'En un pórtico del templo de Jerusalén, Jesús, visto de espaldas, sostiene en alto un denario de plata frente a un grupo de fariseos con flecos azules en sus mantos y de herodianos con ropas finas de cortesanos, que miran la moneda con expresión tensa; alrededor, la multitud escucha', '«¿De quién es esta imagen, y la inscripción?» (Mateo 22:20). Recreación.'),
        tabla({
          titulo: 'El martes de la última semana: cuatro preguntas',
          cab: ['Quiénes preguntan', 'La pregunta', 'La respuesta de Jesús'],
          filas: [
            ['Fariseos y herodianos', '¿Es lícito dar tributo a César?', '«Dad a César lo que es de César, y a Dios lo que es de Dios»'],
            ['Saduceos', '¿De quién será la mujer en la resurrección?', '«Erráis, ignorando las Escrituras y el poder de Dios»'],
            ['Un intérprete de la ley', '¿Cuál es el gran mandamiento?', 'Amar a Dios y al prójimo'],
            ['Jesús pregunta', '¿De quién es hijo el Cristo?', 'Si David lo llama Señor, ¿cómo es su hijo? (Salmo 110:1)']
          ]
        }),
        cita('Mateo 22:15-22', '@@mt/22/15-22')
      ],
      texto: [
        'Mateo, Marcos y Lucas cuentan que, en los días anteriores a su muerte, Jesús enseñaba cada día en el templo, y que los distintos grupos de Jerusalén se turnaron para ponerlo a prueba. En una sola jornada se ve a Jesús frente a todo el mundo judío de su tiempo.',
        { h: 'Fariseos y herodianos: el tributo' },
        'Primero vinieron los discípulos de los fariseos junto con los herodianos. Lo halagaron y le preguntaron si era lícito pagar tributo al César. Si respondía que no, los herodianos lo acusarían de rebelión ante Pilato; si respondía que sí, el pueblo, que odiaba el tributo, lo vería como un traidor. Jesús pidió que le mostraran la moneda del tributo. Le trajeron un denario, que llevaba la imagen de Tiberio y una inscripción que lo llamaba hijo del divino Augusto. «¿De quién es esta imagen, y la inscripción?». Le dijeron: «De César». Y Jesús respondió: «Dad, pues, a César lo que es de César, y a Dios lo que es de Dios» (Mt 22:20-21).',
        'La moneda llevaba la imagen del César y le pertenecía; el ser humano lleva la imagen de Dios y le pertenece a Él. Jesús no fue un rebelde contra el gobierno, como quería Judas el galileo, ni un servidor del poder, como los herodianos: reconoció el lugar del gobierno, que Pablo explicaría después (Ro 13:1-7), y puso a Dios por encima de todo.',
        { h: 'Saduceos: la resurrección' },
        'Luego vinieron los saduceos con su caso de la mujer y los siete hermanos (III.2). Jesús les respondió desde los libros de Moisés que Dios «no es Dios de muertos, sino de vivos» (Mt 22:32), y la multitud se admiraba de su doctrina.',
        { h: 'Un escriba: el gran mandamiento' },
        'Un intérprete de la ley, de los fariseos, le preguntó cuál era el gran mandamiento. Jesús respondió con el amor a Dios y al prójimo. Según Marcos, el escriba reconoció que eso valía más que todos los holocaustos, y Jesús le dijo que no estaba lejos del reino (Mr 12:32-34).',
        { h: 'Jesús pregunta' },
        'Finalmente Jesús les preguntó a ellos: ¿de quién es hijo el Cristo? Le dijeron: «De David». Entonces citó el Salmo 110, donde David llama al Mesías «mi Señor». Si David lo llama Señor, ¿cómo puede ser solo su hijo? (Mt 22:42-45). Nadie pudo responder. Jesús había mostrado que el Mesías es mucho más que un rey humano descendiente de David: es el Señor de David. «Y nadie le podía responder palabra; ni osó alguno desde aquel día preguntarle más» (Mt 22:46).'
      ],
      pensar: 'Jesús enseñó a dar al gobierno lo que le corresponde y a Dios lo que le pertenece. Si llevas la imagen de Dios, ¿qué significa en tu vida dar «a Dios lo que es de Dios»?'
    },
    {
      id: 'barreras', n: 'Barreras que Jesús cruzó', ref: 'Marcos 1:40-42; Juan 4:7-9, 27; Lucas 7:36-50; Mateo 8:5-13; Marcos 7:24-30; Lucas 19:1-10; Efesios 2:13-16', fecha: [27, 30],
      visual: [
        img('../dios-y-la-trinidad/img/samaritana.webp', 'Junto al pozo de Jacob, al mediodía, una mujer samaritana con un cántaro escucha a Jesús, que está sentado en el brocal y se ve de espaldas; al fondo, el monte Gerizim', 'Una mujer, samaritana y con una vida marcada por el pecado: tres barreras que Jesús cruzó junto al pozo de Jacob (Juan 4). Recreación.'),
        tabla({
          titulo: 'Barreras de su tiempo y lo que hizo Jesús',
          cab: ['Barrera', 'Lo que se esperaba', 'Lo que hizo Jesús'],
          filas: [
            ['Pureza', 'No tocar a un leproso, a una mujer con flujo ni a un muerto', 'Los tocó y quedaron limpios (Marcos 1:41; 5:27-42)'],
            ['Pueblo', 'No tratar con samaritanos', 'Pidió agua a una samaritana y se quedó en su pueblo (Juan 4)'],
            ['Género', 'Un maestro no habla a solas con una mujer', 'Habló con ella y la hizo testigo (Juan 4:27-29)'],
            ['Moral', 'No comer con pecadores', 'Comió con publicanos y pecadores (Lucas 5:29-32)'],
            ['Nación', 'Los gentiles quedan fuera', 'Sanó al siervo del centurión y a la hija de la sirofenicia (Mateo 8:5-13; Marcos 7:24-30)']
          ]
        }),
        cita('Mateo 8:10-11', '@@mt/8/10-11')
      ],
      texto: [
        'Las rutas anteriores mostraron las muchas líneas que dividían el mundo judío del siglo I: entre puros e impuros, entre judíos y samaritanos, entre hombres y mujeres, entre justos y pecadores, entre Israel y los gentiles. Muchas de esas líneas tenían su origen en la ley de Dios, que había separado a Israel para que fuera santo. Otras las habían agregado los hombres. Jesús las cruzó todas, una y otra vez.',
        { h: 'Sin dejar de ser santo' },
        'Al cruzar esas barreras, Jesús no se volvió impuro ni aprobó el pecado. Ocurrió lo contrario: su santidad era más fuerte que la impureza. El leproso quedó limpio, la mujer pecadora salió perdonada, Zaqueo devolvió lo robado y la samaritana corrió a anunciar a su pueblo que había encontrado al Cristo. Jesús no bajó la exigencia de Dios: ofreció el poder para cumplirla.',
        { h: 'Primero a Israel, después a las naciones' },
        'Durante su ministerio, Jesús se dedicó sobre todo a Israel: «No soy enviado sino a las ovejas perdidas de la casa de Israel» (Mt 15:24). Pero cuando un centurión romano y una mujer sirofenicia, ambos gentiles, le pidieron ayuda con fe, los atendió y alabó su fe. Del centurión dijo: «ni aun en Israel he hallado tanta fe. Y os digo que vendrán muchos del oriente y del occidente, y se sentarán con Abraham e Isaac y Jacob en el reino de los cielos» (Mt 8:10-11). Cuando unos griegos pidieron ver a Jesús en la última Pascua, Él anunció que había llegado la hora de ser glorificado y de atraer a todos a sí mismo (Jn 12:20-32).',
        { h: 'La pared derribada' },
        'Lo que Jesús comenzó en su ministerio lo completó en la cruz. Pablo escribe que Cristo «es nuestra paz, que de ambos pueblos hizo uno, derribando la pared intermedia de separación» (Ef 2:14). Pensaba en la balaustrada del templo que ningún gentil podía cruzar (IV.1). En la iglesia, judíos y gentiles, hombres y mujeres, esclavos y libres, son uno en Cristo (Gá 3:28).',
        ir('Ver la ruta IV: el templo y la pared de separación', '#fe/1')
      ],
      pensar: 'Jesús cruzó las barreras que separaban a las personas, sin dejar de ser santo. ¿Qué barreras de cultura, clase social, nacionalidad o prejuicio te cuesta cruzar para llevar el amor de Cristo?'
    },
    {
      id: 'ultima-semana', n: 'La última semana: Pascua, Sanedrín y Pilato', ref: 'Marcos 14:1-2; Juan 18:28; Lucas 23:1-25; Mateo 27:24-25; Hechos 2:23, 36; Hechos 3:13-17; Hechos 4:27-28; Isaías 53:5', fecha: [30, 33],
      visual: [
        esq('esquema-semana.svg', 'Esquema de la última semana de Jesús, de domingo a domingo, y del viernes hora por hora, del Sanedrín al amanecer hasta la sepultura antes de la puesta del sol', 'La última semana de Jesús, día por día, y el viernes hora por hora.'),
        img('mj-antipas-jesus.webp', 'En un salón del palacio asmoneo de Jerusalén, Herodes Antipas, de unos cincuenta años, sentado en un trono, se ríe con desprecio mientras sus soldados ponen sobre los hombros de Jesús, que está de pie, atado y sereno, visto de espaldas, una ropa espléndida y brillante; los principales sacerdotes acusan con gestos al fondo', '«Herodes con sus soldados le menospreció y escarneció, vistiéndole de una ropa espléndida» (Lucas 23:11). Recreación.'),
        img('../imperio-romano/img/roma-jesus-pilato.webp', 'Jesús, de pie con las manos atadas, ante Poncio Pilato sentado en su tribunal en el pretorio de Jerusalén', 'Jesús ante Pilato (Juan 18:33-38). Recreación.'),
        cita('Hechos 4:27-28', '@@hch/4/27-28')
      ],
      texto: [
        'La última semana de Jesús ocurrió en el corazón del mundo judío: en Jerusalén, durante la Pascua, con la ciudad llena de peregrinos. Los principales sacerdotes querían prenderlo, pero decían: «No durante la fiesta, para que no se haga alboroto del pueblo» (Mr 14:2). El pueblo lo tenía por profeta, y los líderes le temían.',
        { h: 'Todo el mundo de Jesús en una noche' },
        'En menos de un día, Jesús pasó por todos los poderes que este recurso ha estudiado. Lo arrestó una cohorte romana junto con la guardia del templo; lo interrogó Anás; lo juzgó el Sanedrín presidido por Caifás; lo entregaron a Pilato, el prefecto romano; Pilato lo envió a Herodes Antipas, que estaba en Jerusalén por la fiesta, y Herodes lo devolvió burlándose de él. Sus acusadores no entraron en el pretorio «para no contaminarse, y así poder comer la pascua» (Jn 18:28): cuidaban su pureza mientras pedían la muerte de un inocente.',
        'Pilato, que no halló delito en Jesús, ofreció soltarlo según la costumbre de la fiesta. La multitud pidió a Barrabás. Pilato se lavó las manos, y «respondiendo todo el pueblo, dijo: Su sangre sea sobre nosotros, y sobre nuestros hijos» (Mt 27:25). Jesús fue crucificado por soldados romanos, a la manera romana, fuera de la ciudad.',
        { h: '¿Quién mató a Jesús?' },
        'El Nuevo Testamento responde de varias maneras, y todas son verdad. Pedro dijo a los habitantes de Jerusalén: «a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo» (Hch 2:36). Los líderes y la multitud de Jerusalén que pidieron su muerte fueron responsables, y Pedro los llamó al arrepentimiento. Pero en el mismo discurso agregó: «sé que por ignorancia lo habéis hecho, como también vuestros gobernantes» (Hch 3:17), y les ofreció el perdón. La iglesia, en oración, dijo que se unieron contra Jesús «Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel» (Hch 4:27): judíos y gentiles juntos.',
        'Y detrás de todos estaba algo más profundo. Jesús fue entregado «por el determinado consejo y anticipado conocimiento de Dios» (Hch 2:23), y dio su vida voluntariamente: «Nadie me la quita, sino que yo de mí mismo la pongo» (Jn 10:18). Murió por los pecados de la humanidad entera, judíos y gentiles: «él herido fue por nuestras rebeliones, molido por nuestros pecados» (Is 53:5). Cada persona que ha pecado es parte de la causa de la cruz.',
        'Por eso es un grave error, y una injusticia que causó siglos de persecución, culpar de la muerte de Jesús a los judíos de otras épocas o al pueblo judío en general. Los primeros creyentes eran judíos, el mismo Jesús oró por quienes lo crucificaban: «Padre, perdónalos, porque no saben lo que hacen» (Lc 23:34), y el evangelio se ofreció primero en Jerusalén.'
      ],
      pensar: 'Jesús murió por los pecados de quienes lo crucificaron y también por los tuyos. ¿Has reconocido que tus pecados también llevaron a Jesús a la cruz, y has recibido el perdón que Él ofreció desde allí?'
    },
    {
      id: 'crucificado', n: 'Un Mesías crucificado: «tropezadero» para los judíos', ref: 'Deuteronomio 21:22-23; Gálatas 3:13; 1 Corintios 1:22-24; Lucas 24:19-27; Hechos 5:30-31; 1 Pedro 2:24', fecha: [30, 60],
      visual: [
        foto('foto-talon-yehohanan.jpg', 'Réplica de un hueso del talón humano atravesado por un clavo de hierro doblado, con restos de madera, conservado en una vitrina de museo', 'Réplica del talón de Yehohanán, un judío crucificado en el siglo I, hallado en 1968 en una tumba de Jerusalén con el clavo todavía en el hueso. Es la única prueba arqueológica directa de una crucifixión en la tierra de Israel. Museo de Israel.', 'Licencia por verificar'),
        img('../interpretar-biblia/img/camino-a-emaus.webp', 'Jesús resucitado camina de espaldas junto a dos discípulos por un camino de tierra entre colinas al atardecer, explicándoles las Escrituras', '«¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria?» (Lucas 24:26). Recreación.'),
        cita('Lucas 24:19-27', '@@lc/24/19-27')
      ],
      texto: [
        'Pablo escribió: «nosotros predicamos a Cristo crucificado, para los judíos ciertamente tropezadero, y para los gentiles locura» (1 Co 1:23). Para entender por qué la cruz era un escándalo para un judío del siglo I, hay que recordar lo que significaba ser crucificado.',
        { h: 'La muerte más vergonzosa' },
        'La crucifixión era el castigo romano para esclavos, rebeldes y criminales de las clases bajas. Era una muerte lenta, pública y humillante: el condenado era azotado, cargaba el madero, era desnudado y quedaba expuesto a la burla de todos. Los romanos crucificaron a miles de judíos en el siglo I, sobre todo rebeldes. En 1968 se encontró en Jerusalén el hueso del talón de un hombre llamado Yehohanán, todavía atravesado por un clavo: la única prueba arqueológica directa de una crucifixión en la tierra de Israel.',
        { h: '«Maldito por Dios es el colgado»' },
        'Para un judío, había algo peor que la vergüenza. La ley decía que el cuerpo de un ejecutado colgado en un madero no debía quedar allí de noche, «porque maldito por Dios es el colgado» (Dt 21:23). Por eso los líderes pidieron a Pilato que quitaran los cuerpos antes del sábado (Jn 19:31). Un hombre crucificado parecía maldito por Dios. ¿Cómo podía ser el Mesías, el ungido y bendito de Dios? Ninguna de las esperanzas judías de la época, ni la del rey hijo de David, ni la del sacerdote, ni la del profeta, imaginaba un Mesías crucificado.',
        { h: '«Nosotros esperábamos»' },
        'Los discípulos tampoco lo esperaban. Los dos que caminaban a Emaús le explicaron al desconocido que se les unió que Jesús había sido «varón profeta, poderoso en obra y en palabra», pero que los principales sacerdotes lo habían crucificado, y concluyeron con tristeza: «nosotros esperábamos que él era el que había de redimir a Israel» (Lc 24:19-21). Entonces Jesús resucitado les dijo: «¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria?», y les explicó en todas las Escrituras, desde Moisés y los profetas, lo que decían de Él (Lc 24:26-27).',
        { h: 'La maldición que nos redime' },
        'Lo que parecía la prueba de que Jesús no era el Mesías resultó ser el centro del plan de Dios. Pablo, el fariseo que había perseguido a la iglesia precisamente por esto, lo entendió así: «Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición (porque está escrito: Maldito todo el que es colgado en un madero)» (Gá 3:13). Jesús fue colgado en el madero no por sus pecados, sino por los nuestros. Y Dios lo resucitó y lo exaltó como Príncipe y Salvador (Hch 5:30-31). Por eso, «para los llamados, así judíos como griegos», el Cristo crucificado es «poder de Dios, y sabiduría de Dios» (1 Co 1:24).',
        ir('Ver Entre los Testamentos: la esperanza del Mesías', R.entre + '#nacio/8')
      ],
      pensar: 'La cruz parecía la mayor derrota de Jesús, y fue su mayor victoria. ¿Hay alguna situación en tu vida que parece una derrota, en la que necesitas confiar en que Dios está obrando su plan?'
    }
  ];

  window.__MJ.jesus = jesus;
})();
