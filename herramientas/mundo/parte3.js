/* El mundo judío en tiempos de Jesús · ruta III. Los grupos judíos (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA III. Los grupos judíos ==================
  const grupos = [
    {
      id: 'fariseos', n: 'Los fariseos: Hilel y Samay, Nicodemo, Gamaliel y Pablo', ref: 'Juan 3:1-2; Mateo 19:3; Mateo 23:2-7, 23; Lucas 7:36; Lucas 13:31; Hechos 5:34; Hechos 15:5; Filipenses 3:5', fecha: [-30, 70],
      visual: [
        img('mj-nicodemo-noche.webp', 'De noche, en la azotea de una casa de Jerusalén iluminada por una lámpara de aceite, Nicodemo, un fariseo de unos sesenta años con barba gris y manto fino con flecos azules, conversa con Jesús, que está sentado frente a él y se ve de espaldas; abajo se adivinan los techos de la ciudad', 'Nicodemo, «un principal entre los judíos», vino a Jesús de noche (Juan 3:1-2). Recreación.'),
        tabla({
          titulo: 'Dos escuelas de fariseos en tiempos de Jesús',
          cab: ['Tema', 'Escuela de Hilel', 'Escuela de Samay'],
          filas: [
            ['Carácter', 'Más flexible y paciente', 'Más estricta'],
            ['El divorcio (Deuteronomio 24:1)', 'Se permite por cualquier causa, incluso por cosas pequeñas', 'Solo por una falta grave de conducta'],
            ['Los gentiles que quieren aprender', 'Los recibe con paciencia', 'Los despide con dureza'],
            ['Un dicho atribuido', 'Lo que no te gusta, no se lo hagas a tu prójimo: eso es toda la ley', 'Haz del estudio de la ley algo fijo'],
            ['En el Nuevo Testamento', 'Gamaliel, considerado su nieto (Hechos 5:34)', 'Muchos de los rebeldes del año 66 la seguían']
          ],
          nota: 'Lo que se sabe de las dos escuelas proviene sobre todo de la Mishná y de tradiciones judías posteriores.'
        }),
        img('../entre-los-testamentos/img/debate-templo.webp', 'En un pórtico de columnas del templo de Jerusalén, un grupo de fariseos con mantos sencillos y flecos azules en las esquinas discute con un grupo de sacerdotes saduceos de vestimenta lujosa', 'Fariseos y saduceos discuten en los atrios del templo. Recreación.')
      ],
      texto: [
        'Entre los Testamentos cuenta cómo nacieron los fariseos y qué creían. En tiempos de Jesús eran el movimiento religioso más respetado por el pueblo. Josefo calcula que eran unos seis mil, en su mayoría laicos: comerciantes, artesanos y maestros que se proponían cumplir toda la ley en la vida diaria, también las reglas de pureza, los diezmos y el día de reposo.',
        ir('Ver Entre los Testamentos: los fariseos', R.entre + '#nacio/3'),
        { h: 'Hilel y Samay' },
        'Poco antes del nacimiento de Jesús vivieron dos grandes maestros fariseos, Hilel y Samay, cuyas escuelas discutían sobre casi todo. Un ejemplo aparece en el evangelio. Cuando los fariseos preguntaron a Jesús: «¿Es lícito al hombre repudiar a su mujer por cualquier causa?» (Mt 19:3), estaban metiéndolo en ese debate: los de Hilel permitían el divorcio por cualquier motivo; los de Samay, solo por una falta grave. Jesús no tomó partido por ninguna escuela, sino que volvió al plan de Dios en la creación: «lo que Dios juntó, no lo separe el hombre» (Mt 19:6).',
        'A Hilel se le atribuye un resumen de la ley: lo que no te gusta, no se lo hagas a tu prójimo. Jesús lo dijo en forma positiva y más exigente: «todas las cosas que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos» (Mt 7:12).',
        { h: 'Fariseos cerca de Jesús' },
        'Los evangelios no presentan a todos los fariseos como enemigos. Varios invitaron a Jesús a comer en su casa (Lc 7:36; 14:1). Unos le advirtieron que Herodes quería matarlo (Lc 13:31). Nicodemo, «un principal entre los judíos», vino a verlo de noche (Jn 3:1-2), lo defendió ante el concilio y ayudó a sepultarlo. Gamaliel aconsejó no perseguir a los apóstoles. Después de Pentecostés, muchos fariseos creyeron en Jesús (Hch 15:5), y el apóstol Pablo nunca dejó de decir que había sido educado como fariseo (Fil 3:5).',
        { h: 'Lo que Jesús denunció' },
        'Jesús reconoció que enseñaban la ley de Moisés: «todo lo que os digan que guardéis, guardadlo y hacedlo; mas no hagáis conforme a sus obras, porque dicen, y no hacen» (Mt 23:3). Lo que denunció fue la hipocresía de muchos de ellos: hacer obras «para ser vistos por los hombres», ensanchar las filacterias, buscar los primeros asientos y que los llamen «Rabí» (Mt 23:5-7), y cuidar los detalles de la ley descuidando «la justicia, la misericordia y la fe» (Mt 23:23). Esas palabras no son un ataque contra el pueblo judío, sino una advertencia que sigue valiendo para todo creyente religioso.'
      ],
      pensar: 'Jesús no condenó el deseo de obedecer a Dios en todo, sino la hipocresía y el orgullo. ¿En qué aspectos de tu vida de fe podrías estar más preocupado por lo que ven los demás que por la justicia, la misericordia y la fe?'
    },
    {
      id: 'saduceos', n: 'Los saduceos y la aristocracia del templo', ref: 'Mateo 22:23-33; Hechos 4:1-3; Hechos 5:17-18; Hechos 23:6-8; Mateo 16:6', fecha: [-30, 70],
      visual: [
        img('mj-familias-sacerdotales.webp', 'El patio interior de una gran casa de piedra de la parte alta de Jerusalén en el siglo I, con suelos de mosaico, paredes con frescos de colores, vasijas finas y una escalera que baja a un baño ritual; un sacerdote rico con túnica de lino fino conversa con sus siervos, y por una ventana se ve el templo', 'Una casa de una familia sacerdotal rica en la parte alta de Jerusalén, como las que excavó la arqueología. Recreación.'),
        tabla({
          titulo: 'Fariseos y saduceos en tiempos de Jesús',
          cab: ['', 'Fariseos', 'Saduceos'],
          filas: [
            ['Quiénes eran', 'Laicos y algunos sacerdotes; maestros del pueblo', 'Familias sacerdotales y aristocracia de Jerusalén'],
            ['Dónde tenían influencia', 'Las sinagogas y el pueblo', 'El templo y el Sanedrín'],
            ['Las Escrituras', 'La ley, los profetas y los escritos, con la tradición oral', 'La ley escrita; rechazaban la tradición oral'],
            ['Resurrección y ángeles', 'Sí', 'No (Hechos 23:8)'],
            ['Ante Roma', 'Distancia; preferían no meterse en política', 'Cooperación, para conservar el templo y su poder'],
            ['Ante Jesús', 'Discuten con Él la ley, el sábado y la pureza', 'Lo ven como un peligro para el orden; lo entregan a Pilato'],
            ['Después del año 70', 'Dan origen al judaísmo rabínico', 'Desaparecen con el templo']
          ]
        }),
        cita('Mateo 22:29-32', '@@mt/22/29-32')
      ],
      texto: [
        'Los saduceos eran pocos, pero poderosos. Pertenecían a las familias sacerdotales principales y a la aristocracia de Jerusalén, y de entre ellos salían casi siempre los sumos sacerdotes. Josefo dice que Anás el joven, hijo de Anás, era saduceo, y Hechos dice que el sumo sacerdote y «todos los que estaban con él, esto es, la secta de los saduceos» persiguieron a los apóstoles (Hch 5:17).',
        ir('Ver Entre los Testamentos: los saduceos', R.entre + '#nacio/4'),
        { h: 'Guardianes del templo y del orden' },
        'Para los saduceos, lo más importante era el templo: su culto, sus tesoros y la paz con Roma, que les permitía conservarlo. Por eso veían con alarma a cualquiera que alborotara al pueblo. Cuando Jesús purificó el templo, atacó directamente el negocio que ellos controlaban; y cuando la multitud empezó a seguirlo, temieron que los romanos vinieran y destruyeran «nuestro lugar santo y nuestra nación» (Jn 11:48).',
        'Josefo dice que eran ásperos en el trato, incluso entre ellos, y que el pueblo no los quería. Los fariseos, en cambio, tenían el favor de la gente; por eso, aun en el Sanedrín, los saduceos muchas veces tenían que aceptar lo que los fariseos proponían.',
        { h: '«Erráis, ignorando las Escrituras»' },
        'Los saduceos solo reconocían la ley escrita y negaban la resurrección, el juicio futuro, los ángeles y los espíritus. Un día le presentaron a Jesús el caso de una mujer que se casó con siete hermanos, para ridiculizar la resurrección. Jesús les respondió que no conocían «las Escrituras y el poder de Dios» (Mt 22:29), y les demostró la resurrección desde los libros de Moisés, los únicos que ellos aceptaban: Dios se presentó a Moisés como «el Dios de Abraham, el Dios de Isaac y el Dios de Jacob», y «Dios no es Dios de muertos, sino de vivos» (Mt 22:32).',
        { h: 'Contra los apóstoles' },
        'Después de Pentecostés, los saduceos fueron los primeros en perseguir a la iglesia, «resentidos de que enseñasen al pueblo, y anunciasen en Jesús la resurrección de entre los muertos» (Hch 4:2). Era exactamente lo que ellos negaban. Cuando el templo fue destruido en el año 70, los saduceos desaparecieron de la historia, porque su razón de ser estaba ligada al templo.',
        { ejercicio: {
          pregunta: '¿Por qué Jesús respondió a los saduceos citando un pasaje de Éxodo y no de Daniel o de Isaías?',
          opciones: [
            { t: 'Porque en Daniel e Isaías no se habla de la resurrección.', ok: false, por_que: 'Sí se habla: por ejemplo, Daniel 12:2 e Isaías 26:19.' },
            { t: 'Porque los saduceos solo reconocían como norma los libros de Moisés.', ok: true, por_que: 'Jesús les mostró la resurrección en la parte de la Escritura que ellos mismos aceptaban (Mateo 22:31-32).' },
            { t: 'Porque Éxodo era el único libro que se leía en el templo.', ok: false, por_que: 'En el templo y en las sinagogas se leían los libros de Moisés y los profetas.' }
          ],
          explicacion: 'Jesús argumentó desde el terreno de sus interlocutores, y aun así mostró que toda la Escritura enseña la vida después de la muerte.'
        } }
      ],
      pensar: 'Los saduceos tenían poder, riqueza y conocimiento, pero Jesús les dijo que ignoraban las Escrituras y el poder de Dios. ¿Qué puede llevar a una persona religiosa a tener mucho conocimiento y aun así no conocer el poder de Dios?'
    },
    {
      id: 'escribas', n: 'Los escribas, intérpretes de la ley', ref: 'Marcos 1:22; Mateo 23:2-8; Marcos 12:28-34; Lucas 10:25-28; Lucas 11:46, 52; Mateo 13:52', fecha: [-30, 70],
      visual: [
        img('../viajes-pablo/img/vp-gamaliel.webp', 'Un joven Saulo, sentado en el suelo junto a otros estudiantes, escucha a Gamaliel, un maestro fariseo anciano que enseña con un rollo abierto en un atrio de Jerusalén', 'Saulo, «instruido a los pies de Gamaliel» (Hechos 22:3). Recreación.'),
        tabla({
          titulo: 'Cómo los llama el Nuevo Testamento',
          cab: ['Nombre', 'Qué indica', 'Ejemplo'],
          filas: [
            ['Escribas', 'Estudiosos de la Escritura, maestros y redactores de documentos legales', 'Marcos 12:28'],
            ['Intérpretes de la ley', 'Expertos en aplicar la ley de Moisés', 'Lucas 10:25'],
            ['Doctores de la ley', 'Maestros reconocidos que enseñan a otros', 'Lucas 5:17; Hechos 5:34'],
            ['Rabí', '«Mi maestro»: un trato de respeto, todavía no un título oficial', 'Juan 1:38; 3:2']
          ]
        }),
        cita('Marcos 12:28-34', '@@mr/12/28-34')
      ],
      texto: [
        'Los escribas eran los especialistas en la Escritura. En los evangelios aparecen casi siempre junto a los fariseos, porque la mayoría de los escribas eran fariseos, aunque también los había entre los saduceos y los sacerdotes. Lucas los llama además intérpretes de la ley y doctores de la ley.',
        ir('Ver Entre los Testamentos: los escribas y la tradición oral', R.entre + '#nacio/2'),
        { h: 'Lo que hacía un escriba' },
        'Un escriba estudiaba la ley desde joven, a los pies de un maestro, y llegaba a ser maestro él mismo. Enseñaba en el templo y en las sinagogas, respondía preguntas sobre cómo cumplir la ley, actuaba como juez en los tribunales locales y redactaba documentos como contratos o cartas de divorcio. Muchos tenían además un oficio para vivir: Pablo, educado por Gamaliel, fabricaba tiendas (Hch 18:3). La gente los saludaba con respeto en las plazas y los llamaba «rabí», que significa «mi maestro».',
        { h: 'Un maestro distinto' },
        'Un escriba enseñaba citando a otros maestros: tal rabino dice esto, tal otro dice aquello. Por eso la gente se asombró con Jesús, «porque les enseñaba como quien tiene autoridad, y no como los escribas» (Mr 1:22). Jesús no citaba a nadie: decía «Pero yo os digo».',
        { h: 'No todos eran iguales' },
        'Jesús fue duro con los intérpretes de la ley que «cargáis a los hombres con cargas que no pueden llevar, pero vosotros ni aun con un dedo las tocáis» (Lc 11:46), y que se habían llevado «la llave de la ciencia» sin entrar ellos ni dejar entrar a otros (Lc 11:52). Pero también encontró escribas sinceros. Uno le preguntó cuál era el primer mandamiento, y cuando Jesús respondió con el amor a Dios y al prójimo, el escriba reconoció que eso valía más que todos los sacrificios. Jesús le dijo: «No estás lejos del reino de Dios» (Mr 12:34).',
        'Jesús mismo habló de un nuevo tipo de escriba: «todo escriba docto en el reino de los cielos es semejante a un padre de familia, que saca de su tesoro cosas nuevas y cosas viejas» (Mt 13:52). Es el que conoce el Antiguo Testamento y lo entiende a la luz de Cristo.',
        { h: '«Uno es vuestro Maestro»' },
        'A sus discípulos, Jesús les dijo: «vosotros no queráis que os llamen Rabí; porque uno es vuestro Maestro, el Cristo, y todos vosotros sois hermanos» (Mt 23:8). No prohibía enseñar, sino buscar honra con los títulos. En la iglesia hay maestros, pero todos son hermanos bajo un solo Maestro.'
      ],
      pensar: 'El escriba sincero estaba «no lejos del reino», pero todavía no dentro. ¿Qué le faltaba? ¿Puede alguien conocer bien la Biblia y aun así no haber entrado en el reino de Dios?'
    },
    {
      id: 'esenios', n: 'Los esenios en tiempos de Jesús', ref: 'Mateo 5:43-44; Mateo 12:11-12; Lucas 14:12-14; Juan 3:19-21', fecha: [-30, 68],
      visual: [
        img('../entre-los-testamentos/img/qumran-esenios.webp', 'Al amanecer, en un edificio de piedra junto a los acantilados del desierto frente al mar Muerto, varios hombres vestidos de lino blanco copian rollos sentados ante largas mesas de yeso, mientras otro baja por las escaleras de un baño ritual excavado en la roca', 'Una comunidad judía del desierto copia las Escrituras junto al mar Muerto. Recreación.'),
        tabla({
          titulo: 'La regla de Qumrán y la enseñanza de Jesús',
          cab: ['Tema', 'En los escritos de Qumrán', 'En la enseñanza de Jesús'],
          filas: [
            ['El enemigo', 'Amar a los hijos de la luz y aborrecer a los hijos de las tinieblas', '«Amad a vuestros enemigos» (Mateo 5:44)'],
            ['El día de reposo', 'Prohibido sacar en sábado a un animal caído en un pozo', 'Cualquiera saca su oveja; «es lícito hacer el bien» (Mateo 12:11-12)'],
            ['Los excluidos', 'Los cojos, ciegos y lisiados no pueden entrar en la asamblea', '«Llama a los pobres, los mancos, los cojos y los ciegos» (Lucas 14:13)'],
            ['La pureza', 'Separarse del mundo y de los demás judíos', 'Ir a los pecadores para llamarlos al arrepentimiento'],
            ['El templo', 'Contaminado; se apartaron de él', 'Lo purifica y lo llama «casa de oración»']
          ]
        }),
        mapa({ view: V.judea, capas: ['nt-judea'], lugares: ['jerusalen', 'qumran', 'jerico', 'en-gadi', 'masada', 'betabara'] }),
        cita('Mateo 12:11-12', '@@mt/12/11-12')
      ],
      texto: [
        'Los esenios, la comunidad de Qumrán y sus rollos se estudian en Entre los Testamentos. Josefo dice que en su tiempo había unos cuatro mil esenios, que vivían en comunidades en muchas aldeas de Judea y en el desierto junto al mar Muerto. Compartían los bienes, comían juntos después de bañarse, vestían de blanco, eran muy estrictos con el día de reposo y la pureza, y se preparaban para una gran guerra final entre los hijos de la luz y los hijos de las tinieblas.',
        ir('Ver Entre los Testamentos: los esenios y Qumrán', R.entre + '#nacio/5'),
        { h: 'Un grupo que el Nuevo Testamento no nombra' },
        'Los evangelios hablan de fariseos, saduceos y herodianos, pero nunca de esenios. Tal vez porque vivían apartados y no discutían con Jesús en las plazas. Sin embargo, conocer sus escritos ayuda a entender algunas palabras de Jesús, porque muestran ideas que circulaban en la época.',
        { h: 'Contrastes que iluminan los evangelios' },
        'Jesús dijo: «Oísteis que fue dicho: Amarás a tu prójimo, y aborrecerás a tu enemigo» (Mt 5:43). La ley de Moisés manda amar al prójimo, pero en ninguna parte manda aborrecer al enemigo. La regla de Qumrán, en cambio, pedía a sus miembros amar a los de la comunidad y aborrecer a los de fuera. Jesús enseñó lo contrario: «Amad a vuestros enemigos» (Mt 5:44).',
        'Un escrito de la comunidad prohibía sacar en sábado a un animal que se hubiera caído en un pozo. Jesús preguntó a los fariseos, que eran menos estrictos: «¿Qué hombre habrá de vosotros, que tenga una oveja, y si ésta cayere en un hoyo en día de reposo, no le eche mano, y la levante?» (Mt 12:11). Y otro escrito excluía de la asamblea a los cojos, los ciegos y los lisiados, mientras Jesús mandó invitarlos al banquete (Lc 14:13).',
        { h: 'Separarse o ir' },
        'Los esenios respondieron a la corrupción del templo y del pueblo apartándose al desierto para mantenerse puros. Jesús hizo lo contrario: entró en las ciudades, tocó a los impuros y comió con los pecadores. No fue indiferente al pecado, pero vino a buscarlo y salvarlo. La comunidad de Qumrán desapareció en el año 68, cuando los romanos destruyeron su asentamiento; sus rollos, escondidos en las cuevas, esperaron casi dos mil años para ser hallados.'
      ],
      pensar: 'Los esenios se apartaron del mundo para mantenerse santos; Jesús se acercó a los pecadores sin dejar de ser santo. ¿Qué te enseña su ejemplo sobre cómo vivir en santidad sin alejarte de las personas que necesitan el evangelio?'
    },
    {
      id: 'zelotes', n: 'Los zelotes y Simón el zelote', ref: 'Lucas 6:13-16; Hechos 1:13; Números 25:11-13; Gálatas 1:14; Hechos 21:20; Mateo 26:51-52', fecha: [6, 73],
      visual: [
        foto('foto-gamla.jpg', 'Colina rocosa y alargada en forma de joroba de camello en los Altos del Golán, con las ruinas de una ciudad antigua, su muralla y su sinagoga en la ladera', 'Gamla, en el Golán, ciudad judía que resistió a Roma en el año 67. Al pie de la colina se ven la muralla y la sinagoga, una de las más antiguas que se conocen.', 'Dominio público · EdoM, vía Wikimedia Commons'),
        mapa({ view: V.guerra, capas: ['nt-galilea', 'nt-felipe'], lugares: ['gamla', 'jotapata', 'tiberias', 'magdala', 'capernaum', 'seforis'], trazos: ['mj-vespasiano-67'] }),
        cita('Lucas 6:13-16', '@@lc/6/13-16')
      ],
      texto: [
        'Entre los doce apóstoles había un hombre llamado «Simón llamado Zelote» (Lc 6:15). La palabra zelote viene del griego y significa celoso, lleno de celo. Mateo y Marcos lo llaman «Simón el cananista», que traduce la misma palabra aramea.',
        { h: 'El celo de Finees' },
        'En la historia de Israel, el celo por Dios tenía héroes. Finees, nieto de Aarón, mató a un israelita que llevó a una madianita a su tienda en medio de la idolatría de Baal-peor, y Dios dijo que había tenido «celo por su Dios» (Nm 25:13). Elías mató a los profetas de Baal. Matatías, el padre de los macabeos, empezó la rebelión contra Antíoco IV matando a un judío que sacrificaba a los ídolos. Para muchos judíos del siglo I, ser «celoso por la ley» significaba estar dispuesto a defenderla incluso con la violencia. Pablo dice que antes de su conversión era «mucho más celoso de las tradiciones de mis padres» (Gá 1:14), y por eso perseguía a la iglesia.',
        { h: 'De celosos a partido de guerra' },
        'Josefo llama zelotes a un grupo concreto que se formó durante la guerra contra Roma, entre los años 66 y 68: hombres que tomaron el templo, mataron a los sacerdotes que consideraban traidores y lucharon hasta el final. Antes de ellos estaban los seguidores de Judas el galileo (II.7) y los sicarios, que asesinaban con puñales. Todos compartían la convicción de que Israel no debía someterse a ningún señor fuera de Dios, y que había que preparar con las armas la llegada del reino.',
        { posturas: {
          titulo: '¿Qué era Simón el zelote?',
          a: { n: 'Un rebelde antes de seguir a Jesús', t: 'Algunos piensan que Simón había pertenecido a un movimiento armado contra Roma, como los seguidores de Judas el galileo, y que dejó ese camino para seguir a Jesús.' },
          b: { n: 'Un hombre celoso por la ley', t: 'Otros señalan que el partido de los zelotes, con ese nombre, aparece en Josefo recién en la guerra del año 66. En los días de Jesús, «zelote» podía significar simplemente alguien muy celoso de la ley, como los miles de creyentes de Jerusalén que eran «celosos por la ley» (Hch 21:20).' },
          c: 'En cualquiera de los dos casos, lo notable es que Jesús reunió entre sus doce a Simón, el celoso de la ley, y a Mateo, el publicano que había cobrado para el poder extranjero. Solo Cristo podía hacer de ellos hermanos.'
        } },
        { h: 'La espada guardada' },
        'Cuando arrestaron a Jesús, Pedro sacó una espada e hirió a un siervo del sumo sacerdote. Jesús le dijo: «Vuelve tu espada a su lugar; porque todos los que tomen espada, a espada perecerán» (Mt 26:52). Treinta y cinco años después, los que tomaron la espada para establecer el reino por la fuerza llevaron a Jerusalén a la destrucción. Gamla, en el Golán, cayó en el año 67 tras un asedio terrible; el mapa muestra el avance de Vespasiano por Galilea.'
      ],
      pensar: 'Simón el zelote y Mateo el publicano estaban en extremos opuestos, pero los dos siguieron a Jesús. ¿Qué diferencias políticas, sociales o de carácter tendrías que dejar a los pies de Cristo para vivir como hermano de otros creyentes?'
    },
    {
      id: 'herodianos', n: 'Los herodianos', ref: 'Marcos 3:1-6; Marcos 8:15; Marcos 12:13-17; Mateo 22:15-16', fecha: [-4, 44],
      visual: [
        mapa({ view: V.galilea, capas: ['nt-galilea'], lugares: ['tiberias', 'seforis', 'capernaum', 'magdala', 'nazaret', 'cana'] }),
        tabla({
          titulo: 'Los herodianos en los evangelios',
          cab: ['Pasaje', 'Con quién', 'Qué hacen'],
          filas: [
            ['Marcos 3:6', 'Fariseos, en Galilea', 'Después de que Jesús sana en sábado, toman consejo para destruirlo'],
            ['Marcos 8:15', '—', 'Jesús advierte contra «la levadura de Herodes»'],
            ['Marcos 12:13; Mateo 22:16', 'Fariseos, en Jerusalén', 'Le preguntan si es lícito pagar tributo al César']
          ]
        }),
        cita('Marcos 3:1-6', '@@mr/3/1-6')
      ],
      texto: [
        'Los herodianos aparecen solo tres veces en los evangelios, pero siempre en un mal momento: unidos a los fariseos para buscar la manera de acabar con Jesús. Ni Josefo ni otras fuentes los describen como un grupo religioso. Su nombre indica lo que eran: partidarios de la familia de Herodes.',
        { h: 'Quiénes eran' },
        'Probablemente eran funcionarios, nobles y gente influyente de la corte de Herodes Antipas en Galilea, y quizá también judíos de Jerusalén que preferían que Judea volviera a tener un rey de la familia de Herodes antes que un gobernador romano. Su interés era político: mantener el orden y el poder de la dinastía.',
        { h: 'Una alianza extraña' },
        'Los fariseos y los herodianos no tenían mucho en común. Los fariseos desconfiaban de Herodes, que no era de linaje judío puro y había matado a muchos de sus maestros. Pero los unió un enemigo común. En Galilea, después de que Jesús sanó en sábado a un hombre con la mano seca, «salidos los fariseos, tomaron consejo con los herodianos contra él para destruirle» (Mr 3:6). Los fariseos veían en Jesús a alguien que quebrantaba el día de reposo; los herodianos, a un hombre que reunía multitudes en el territorio de Antipas, que acababa de matar a Juan el Bautista por la misma razón.',
        'En Jerusalén, poco antes de la cruz, fariseos y herodianos le preguntaron juntos si era lícito pagar tributo al César (Mr 12:13-14). Los herodianos eran precisamente los que aceptaban el gobierno de Roma y de sus aliados; los fariseos, los que lo soportaban con disgusto. Cualquier respuesta parecía dejar mal a Jesús ante uno de los dos grupos.',
        { h: 'La levadura de Herodes' },
        'Jesús advirtió a sus discípulos: «guardaos de la levadura de los fariseos, y de la levadura de Herodes» (Mr 8:15). La levadura es algo pequeño que se extiende por toda la masa. La de los fariseos era la hipocresía (Lc 12:1); la de Herodes, una fe que se acomoda al poder, que busca el reino en la política y que está dispuesta a eliminar a quien estorbe. Las dos pueden entrar en el corazón de un creyente.',
        { ejercicio: {
          pregunta: '¿Qué tenían en común los fariseos y los herodianos cuando se unieron contra Jesús?',
          opciones: [
            { t: 'Las mismas creencias sobre la ley y la pureza.', ok: false, por_que: 'Los herodianos eran un grupo político; no compartían el celo de los fariseos por la tradición.' },
            { t: 'La lealtad a Roma y al emperador.', ok: false, por_que: 'Los fariseos soportaban a Roma, pero no la defendían.' },
            { t: 'Un enemigo común: Jesús, que ponía en peligro su influencia sobre el pueblo.', ok: true, por_que: 'Sus razones eran distintas, religiosas en unos y políticas en otros, pero los dos querían deshacerse de Él (Marcos 3:6).' }
          ],
          explicacion: 'Lo mismo ocurrió con Herodes Antipas y Pilato, que «se hicieron amigos» el día de la cruz (Lucas 23:12).'
        } }
      ],
      pensar: 'Personas que no tenían nada en común se unieron para oponerse a Jesús. ¿Qué te enseña esto sobre cómo el rechazo a Cristo puede unir a quienes en todo lo demás están divididos?'
    },
    {
      id: 'samaritanos', n: 'Los samaritanos en tiempos de Jesús', ref: 'Juan 4:4-42; Lucas 9:51-56; Lucas 10:30-37; Lucas 17:11-19; Juan 8:48; Hechos 8:5-8', fecha: [-4, 66],
      visual: [
        img('../tierra-de-israel/img/pozo-jacob.webp', 'Jesús, de espaldas, sentado junto a un pozo de piedra a mediodía, conversando con una mujer samaritana que sostiene un cántaro; detrás se levanta el monte Gerizim', 'Jesús y la mujer samaritana junto al pozo de Jacob, frente al monte Gerizim (Juan 4). Recreación.'),
        mapa({ view: V.centro, capas: ['nt-samaria', 'nt-galilea', 'nt-judea'], lugares: ['sicar', 'monte-gerizim', 'samaria', 'jerusalen', 'nazaret', 'jerico'], trazos: ['jesus-samaria', 'c-jordan'] }),
        foto('../entre-los-testamentos/img/pascua-samaritana.webp', 'Un samaritano vestido de blanco, con gorro rojo y blanco, sentado sobre unas piedras afila el cuchillo para el sacrificio de la Pascua', 'Un samaritano prepara el cuchillo para el sacrificio de la Pascua en el monte Gerizim (2011). La comunidad samaritana celebra allí la Pascua hasta hoy.', 'CC BY 2.0 · Flavio~, vía Wikimedia Commons'),
        cita('Juan 4:19-26', '@@jn/4/19-26')
      ],
      texto: [
        'El origen de los samaritanos y de su templo en el monte Gerizim se estudia en Entre los Testamentos. Ese templo había sido destruido por el asmoneo Juan Hircano hacia el año 110 a.C., pero los samaritanos seguían subiendo a la cumbre del monte para adorar, como lo hacen hasta hoy. Solo aceptaban los cinco libros de Moisés, en su propia versión, y esperaban un profeta como Moisés que vendría a restaurarlo todo.',
        ir('Ver Entre los Testamentos: los samaritanos y el monte Gerizim', R.entre + '#persa/3'),
        { h: 'Una enemistad que empeoraba' },
        'En tiempos de Jesús, la enemistad entre judíos y samaritanos estaba en su peor momento. Josefo cuenta que, siendo Coponio gobernador, unos samaritanos entraron de noche en el templo de Jerusalén durante la Pascua y esparcieron huesos humanos en los pórticos, para contaminarlo. Años más tarde, hacia el 52, unos peregrinos galileos fueron asesinados en una aldea samaritana camino de la fiesta, y la venganza provocó una pequeña guerra. Llamar a alguien samaritano era un insulto: a Jesús le dijeron «¿No decimos bien nosotros, que tú eres samaritano, y que tienes demonio?» (Jn 8:48).',
        'Por eso la mujer de Sicar se sorprendió de que un judío le pidiera agua, «porque judíos y samaritanos no se tratan entre sí» (Jn 4:9). Y por eso, cuando una aldea samaritana no quiso recibir a Jesús porque iba a Jerusalén, Jacobo y Juan quisieron pedir fuego del cielo (Lc 9:52-54).',
        { h: 'Lo que hizo Jesús' },
        'Jesús reprendió a Jacobo y a Juan: «Vosotros no sabéis de qué espíritu sois» (Lc 9:55). Se detuvo junto al pozo de Jacob, habló con una mujer samaritana y se quedó dos días en su pueblo, donde muchos creyeron. No negó la verdad: le dijo que «la salvación viene de los judíos» (Jn 4:22). Pero le anunció que llegaba la hora en que los verdaderos adoradores adorarían al Padre «en espíritu y en verdad», ni en Gerizim ni en Jerusalén, y se le reveló como el Mesías que ella esperaba (Jn 4:23-26).',
        'En sus parábolas, el héroe fue un samaritano que se compadeció del herido que un sacerdote y un levita habían dejado en el camino (Lc 10:33). Y de diez leprosos sanados, solo volvió a dar gracias uno, «y éste era samaritano» (Lc 17:16).',
        { h: 'Hasta Samaria' },
        'Antes de ascender, Jesús envió a sus discípulos a ser testigos «en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Pocos años después, Felipe predicó en Samaria, y Pedro y Juan, el mismo Juan que había querido hacer bajar fuego, oraron allí para que los samaritanos recibieran el Espíritu Santo (Hch 8:14-17).'
      ],
      pensar: 'Juan quiso una vez pedir fuego del cielo sobre una aldea samaritana, y años después oró para que los samaritanos recibieran el Espíritu Santo. ¿A qué personas o grupos te cuesta amar, y qué tendría que cambiar en ti para verlos como Jesús los ve?'
    },
    {
      id: 'pueblo', n: 'El pueblo de la tierra: pecadores, publicanos y pobres', ref: 'Juan 7:47-49; Lucas 15:1-2; Mateo 9:10-13; Mateo 11:19; Lucas 18:9-14; Lucas 19:1-10; Lucas 4:18', fecha: [-4, 66],
      visual: [
        img('mj-zaqueo.webp', 'En una calle de Jericó bordeada de palmeras, una multitud rodea a Jesús, visto de espaldas, que levanta la mirada hacia un sicómoro donde está subido Zaqueo, un hombre bajo de unos cuarenta y cinco años, con ropa fina de comerciante rico; algunos en la multitud murmuran indignados', '«Zaqueo, date prisa, desciende, porque hoy es necesario que pose yo en tu casa» (Lucas 19:5). Recreación.'),
        tabla({
          titulo: 'Quiénes eran los «pecadores» de los evangelios',
          cab: ['Grupo', 'Por qué eran despreciados', 'Encuentros con Jesús'],
          filas: [
            ['El pueblo sencillo', 'No conocía ni cumplía las reglas de los fariseos', 'Las multitudes que lo seguían (Juan 7:49)'],
            ['Publicanos', 'Cobraban para Roma o para Herodes, y muchos robaban', 'Mateo, Zaqueo, el publicano del templo'],
            ['Pecadores públicos', 'Vivían en pecado conocido por todos', 'La mujer que ungió sus pies (Lucas 7:37-50)'],
            ['Oficios despreciados', 'Pastores, curtidores y otros, por su trabajo o su impureza', 'Los pastores de Belén (Lucas 2:8-20)'],
            ['Pobres, enfermos y mendigos', 'Muchos pensaban que su desgracia era castigo de Dios', 'Bartimeo, el ciego de nacimiento (Juan 9:2)']
          ]
        }),
        cita('Lucas 18:10-14', '@@lc/18/10-14')
      ],
      texto: [
        'La gran mayoría de los judíos del tiempo de Jesús no eran fariseos, ni saduceos, ni esenios. Eran campesinos, pescadores, jornaleros y artesanos que iban a la sinagoga, subían a las fiestas cuando podían y trataban de vivir según la ley, pero no tenían tiempo ni formación para cumplir todas las reglas de pureza y de diezmos que enseñaban los fariseos. Los maestros los llamaban «el pueblo de la tierra», y algunos los despreciaban. Cuando los alguaciles volvieron sin arrestar a Jesús, los fariseos dijeron: «esta gente que no sabe la ley, maldita es» (Jn 7:49).',
        { h: 'Los pecadores' },
        'En los evangelios, los «pecadores» no son simplemente las personas que pecan, porque todos pecan. Son los que tenían fama de vivir fuera de la ley: los que cometían pecados conocidos por todos, las prostitutas, los publicanos y quienes tenían oficios considerados deshonestos o impuros. Con ellos, una persona religiosa no compartía la mesa, porque comer juntos era señal de amistad y de aceptación.',
        { h: '«Amigo de publicanos y de pecadores»' },
        'Jesús hizo justamente lo que no se hacía: comió con ellos. Sus críticos lo llamaron, para burlarse, «amigo de publicanos y de pecadores» (Mt 11:19), y murmuraban: «Este a los pecadores recibe, y con ellos come» (Lc 15:2). Jesús respondió con tres parábolas: la oveja perdida, la moneda perdida y el hijo pródigo. Y explicó su misión: «Los sanos no tienen necesidad de médico, sino los enfermos. No he venido a llamar a justos, sino a pecadores» (Mr 2:17).',
        'Jesús no aprobó el pecado de nadie. A Zaqueo no le dijo que su vida estaba bien; pero al ser recibido por Jesús, Zaqueo se arrepintió, devolvió lo robado y oyó: «Hoy ha venido la salvación a esta casa» (Lc 19:9).',
        { h: 'El fariseo y el publicano' },
        'La parábola del fariseo y el publicano resume todo. El fariseo daba gracias porque no era «como los otros hombres», y enumeraba sus ayunos y sus diezmos. El publicano, desde lejos, sin atreverse a levantar los ojos, solo decía: «Dios, sé propicio a mí, pecador». Jesús concluyó que el publicano volvió a su casa justificado, y no el otro (Lc 18:11-14).',
        { h: 'Buenas nuevas a los pobres' },
        'En la sinagoga de Nazaret, Jesús anunció que el Espíritu del Señor lo había ungido «para dar buenas nuevas a los pobres» (Lc 4:18). El pueblo sencillo, los enfermos y los despreciados fueron los primeros en recibirlo con alegría.'
      ],
      pensar: '¿Te identificas más con el fariseo o con el publicano de la parábola? ¿Qué personas de tu entorno podrían sentir que la iglesia no es para ellas, y cómo podrías mostrarles la gracia que Jesús mostró a Zaqueo?'
    }
  ];

  window.__MJ.grupos = grupos;
})();
