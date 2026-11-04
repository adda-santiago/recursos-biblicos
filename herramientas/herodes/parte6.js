/* La dinastía de Herodes · ruta VI. Los Herodes y la Biblia, y datos del recurso (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA VI. Los Herodes y la Biblia ==================
  const biblia = [
    {
      id: 'distinguir', n: 'Cómo distinguir a cada Herodes', ref: 'Mateo 2:1; Mateo 14:1; Lucas 3:1; Hechos 12:1; Hechos 25:13', fecha: [-37, 92],
      visual: [
        esq('hd-cual-herodes.svg', 'Tabla con seis franjas de color: Herodes el Grande, Arquelao, Herodes Antipas, Felipe, Agripa I y Agripa II, con el nombre que les da el texto bíblico, los pasajes y lo que sucede', 'Seis gobernantes de una misma familia en el Nuevo Testamento.', '¿Cuál Herodes?'),
        tabla({
          titulo: 'Cuatro preguntas para saber de qué Herodes se trata',
          cab: ['Pregunta', 'Qué ayuda a decidir'],
          filas: [
            ['¿En qué libro y en qué momento de la historia estoy?', 'Mateo 2 y Lucas 1: Herodes el Grande. Los evangelios durante el ministerio de Jesús: Antipas. Hechos 12: Agripa I. Hechos 25–26: Agripa II'],
            ['¿Qué título le da el texto?', '«Rey» en Mateo 2 y Hechos; «tetrarca» es siempre Antipas o Felipe'],
            ['¿Dónde ocurre?', 'Galilea y Perea: Antipas. El noreste del lago: Felipe. Judea antes del 4 a.C.: Herodes el Grande; entre el 4 a.C. y el 6 d.C.: Arquelao'],
            ['¿Quién más está en la escena?', 'Juan el Bautista o Pilato: Antipas. Jacobo y Pedro: Agripa I. Festo y Berenice: Agripa II']
          ]
        }, 'Método')
      ],
      texto: [
        'Con todo lo estudiado, ya es posible reconocer a cada Herodes cuando aparece en la Biblia. El texto rara vez da el nombre completo; a veces solo dice «Herodes» o «el rey». Pero casi siempre deja pistas: el libro, el momento, el título, el lugar y las otras personas de la escena.',
        'Practica con estos ejercicios. Antes de responder, pregúntate en qué momento de la historia ocurre cada pasaje.',
        { ejercicio: {
          pregunta: 'Lucas 1:5 dice que Zacarías vivía «en los días de Herodes, rey de Judea». ¿De qué Herodes se trata?',
          opciones: [
            { t: 'Herodes el Grande.', ok: true, por_que: 'Juan el Bautista nació unos meses antes que Jesús, en los últimos años de Herodes el Grande (Mt 2:1).' },
            { t: 'Arquelao.', ok: false, por_que: 'Arquelao gobernó Judea después de la muerte de su padre, y nunca tuvo el título de rey.' },
            { t: 'Agripa I.', ok: false, por_que: 'Agripa I reinó en Judea en los años 41 a 44, cuando Juan el Bautista ya había muerto.' }
          ],
          explicacion: 'El nacimiento de Juan y el de Jesús ocurren en el reinado de Herodes el Grande, antes del 4 a.C.'
        } },
        { ejercicio: {
          pregunta: 'En Lucas 13:31, unos fariseos advierten a Jesús que «Herodes te quiere matar». ¿Quién es?',
          opciones: [
            { t: 'Herodes el Grande, que ya había intentado matarlo en Belén.', ok: false, por_que: 'Herodes el Grande murió cuando Jesús era niño (Mt 2:19).' },
            { t: 'Herodes Antipas, tetrarca de Galilea y Perea.', ok: true, por_que: 'Jesús estaba en su territorio y responde: «decid a aquella zorra» (Lc 13:32).' },
            { t: 'Felipe, tetrarca de Iturea.', ok: false, por_que: 'Los evangelios nunca muestran a Felipe en conflicto con Jesús.' }
          ],
          explicacion: 'Durante el ministerio de Jesús, el «Herodes» de los evangelios es casi siempre Antipas.'
        } },
        { ejercicio: {
          pregunta: '¿Por qué Hechos 12 llama «el rey Herodes» a Agripa I, si su nombre era Agripa?',
          opciones: [
            { t: 'Porque Lucas se equivocó de persona.', ok: false, por_que: 'Los datos de Lucas coinciden con los de Josefo: Cesarea, la aclamación, la muerte repentina.' },
            { t: 'Porque «Herodes» era también el nombre de la familia y un título, como «César».', ok: true, por_que: 'Josefo lo llama Agripa; sus monedas lo llaman «el gran rey Agripa»; el nombre Herodes identificaba la dinastía.' },
            { t: 'Porque Agripa I era hijo de Herodes el Grande.', ok: false, por_que: 'Era su nieto, hijo de Aristóbulo.' }
          ],
          explicacion: 'Lucas usa el nombre familiar, como la gente de su tiempo; en Hechos 25 llama «Agripa» al hijo para distinguirlo.'
        } },
        arbol('Repasar en el árbol interactivo')
      ],
      pensar: 'Leer con atención al momento y al contexto evita muchos errores al estudiar la Biblia. ¿Qué pasaje que has leído hace poco podrías entender mejor si te preguntaras en qué momento de la historia ocurrió?'
    },
    {
      id: 'herodianos', n: 'Los herodianos y la levadura de Herodes', ref: 'Marcos 3:6; Marcos 12:13-17; Mateo 22:15-22; Marcos 8:15', fecha: [29, 33],
      visual: [
        tabla({
          titulo: 'Los herodianos en los evangelios',
          cab: ['Pasaje', 'Qué hacen', 'Con quién'],
          filas: [
            ['Marcos 3:6', 'Toman consejo para destruir a Jesús, después de una sanidad en sábado', 'Los fariseos'],
            ['Marcos 12:13; Mateo 22:16', 'Le preguntan si es lícito dar tributo a César', 'Los fariseos'],
            ['Marcos 8:15', 'Jesús advierte contra «la levadura de Herodes»', '(Junto a la de los fariseos)']
          ]
        }),
        cita('Marcos 12:13-17', '@@mr/12/13-17')
      ],
      texto: [
        'Los evangelios mencionan un grupo llamado «los herodianos», que no aparece en ningún otro escrito antiguo. Por su nombre, eran partidarios de la familia de Herodes, probablemente de Antipas en Galilea: personas influyentes que apoyaban su gobierno y la alianza con Roma, y quizás esperaban que un Herodes volviera a reinar sobre todo el país, como ocurrió después con Agripa I.',
        { h: 'Una alianza extraña' },
        'Lo sorprendente es con quién se unen. Los fariseos eran estrictos con la ley y desconfiaban de los Herodes, que vivían como príncipes romanos. Los herodianos eran gente de la corte. En condiciones normales no tenían nada en común. Pero se pusieron de acuerdo contra Jesús. Después de que Jesús sanó a un hombre en sábado, «salidos los fariseos, tomaron consejo con los herodianos contra él para destruirle» (Mr 3:6). Y en Jerusalén, en la última semana, le enviaron «algunos de los fariseos y de los herodianos, para que le sorprendiesen en alguna palabra» (Mr 12:13).',
        { h: 'Una trampa sobre el tributo' },
        'La pregunta era una trampa perfecta: «¿Es lícito dar tributo a César, o no?» (Mr 12:14). Si Jesús decía que sí, los fariseos lo acusarían ante el pueblo de aceptar a Roma; si decía que no, los herodianos lo denunciarían como rebelde. Jesús pidió una moneda con la imagen del César y respondió: «Dad a César lo que es de César, y a Dios lo que es de Dios» (Mr 12:17). La moneda llevaba la imagen del emperador; el ser humano lleva la imagen de Dios y le pertenece entero.',
        ir('Ver en El mundo judío: los herodianos', R.mundo + '#grupos/6'),
        { h: 'La levadura de Herodes' },
        'Jesús advirtió: «guardaos de la levadura de los fariseos, y de la levadura de Herodes» (Mr 8:15). La levadura es algo pequeño que lo penetra todo. La de los fariseos era la hipocresía religiosa; la de Herodes, una manera de vivir que pone el poder, la conveniencia y el favor de los poderosos por encima de la verdad. Es la levadura que movió a Antipas a matar a Juan para quedar bien con sus invitados, y a Agripa I a matar a Jacobo para agradar al pueblo.',
        'Los herodianos y los fariseos muestran también algo que se repite en la historia: grupos que no tienen nada en común pueden unirse cuando Cristo los incomoda.'
      ],
      pensar: 'La levadura de Herodes es dejar que el poder y la conveniencia decidan por encima de la verdad. ¿En qué decisiones de tu vida podría estar actuando esa levadura sin que lo notes?'
    },
    {
      id: 'salmo2', n: '«Se reunieron los reyes de la tierra»', ref: 'Salmo 2:1-12; Hechos 4:24-31', fecha: [33, 44],
      visual: [
        cita('Hechos 4:24-28', '@@hch/4/24-28'),
        cita('Salmo 2:1-4', '@@sal/2/1-4', 'Salmo 2'),
        tabla({
          titulo: 'Los Herodes contra el Ungido, y lo que Dios hizo',
          cab: ['Lo que hicieron', 'Lo que Dios hizo'],
          filas: [
            ['Herodes el Grande quiso matar al niño (Mt 2:16)', 'Lo guardó en Egipto y lo llevó a Nazaret (Mt 2:13-23)'],
            ['Antipas mató a Juan (Mr 6:27)', 'Jesús siguió su camino hasta Jerusalén (Lc 13:33)'],
            ['Antipas se burló de Jesús (Lc 23:11)', 'Lo resucitó y lo hizo Señor y Cristo (Hch 2:36)'],
            ['Agripa I mató a Jacobo y encarceló a Pedro (Hch 12:2-4)', 'Libró a Pedro, y la palabra crecía (Hch 12:7-11, 24)'],
            ['Agripa II oyó el evangelio y no creyó (Hch 26:28)', 'El evangelio llegó a Roma (Hch 28:30-31)']
          ]
        }, 'Contraste')
      ],
      texto: [
        'Después de que el Sanedrín amenazó a Pedro y a Juan, la iglesia de Jerusalén se reunió a orar. Su oración comenzó con las palabras del Salmo 2: «¿Por qué se amotinan las gentes, y los pueblos piensan cosas vanas? Se reunieron los reyes de la tierra, y los príncipes se juntaron en uno contra el Señor, y contra su Cristo» (Hch 4:25-26).',
        { h: 'Un salmo cumplido en Jerusalén' },
        'La iglesia vio ese salmo cumplido en lo que acababa de pasar: «verdaderamente se unieron en esta ciudad contra tu santo Hijo Jesús, a quien ungiste, Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel» (Hch 4:27). El Herodes de esta oración es Antipas, el tetrarca que recibió a Jesús en su juicio. Herodes y Pilato, que antes estaban enemistados, se hicieron amigos ese día (Lc 23:12).',
        'La responsabilidad por la muerte de Jesús está repartida en esta frase: los gobernantes judíos y romanos, los gentiles y el pueblo de Jerusalén de esa generación. Detrás de todos, los pecados de toda la humanidad, por los que Cristo murió. Por eso nadie puede culpar a un pueblo entero de otras épocas: todos necesitamos el perdón que se ofrece en la cruz.',
        { h: '«Para hacer cuanto tu mano… había antes determinado»' },
        'Lo más asombroso de la oración es lo que sigue: se unieron «para hacer cuanto tu mano y tu consejo habían antes determinado que sucediera» (Hch 4:28). Los gobernantes creían que estaban decidiendo el destino de Jesús; en realidad, cumplían el plan de Dios para la salvación del mundo. Ninguno de ellos dejó de ser responsable de lo que hizo; pero ninguno pudo impedir lo que Dios se había propuesto.',
        'Durante cuatro generaciones, la familia de Herodes se opuso al Ungido de Dios, y cada vez Dios tuvo la última palabra. El Salmo 2 termina con una invitación a los reyes: «Honrad al Hijo… Bienaventurados todos los que en él confían» (Sal 2:12).',
        { h: 'La oración de la iglesia' },
        'La iglesia no pidió que Dios destruyera a sus enemigos, ni que los librara de toda persecución. Pidió: «concede a tus siervos que con todo denuedo hablen tu palabra» (Hch 4:29). Y el lugar tembló, «y todos fueron llenos del Espíritu Santo, y hablaban con denuedo la palabra de Dios» (Hch 4:31).'
      ],
      pensar: 'Frente a la oposición de los gobernantes, la iglesia pidió denuedo para seguir hablando la Palabra, y el Espíritu Santo los llenó. ¿Qué le pedirías hoy a Dios frente a la oposición que enfrentas por tu fe?'
    },
    {
      id: 'arqueologia', n: 'Lo que encontró la arqueología', ref: 'Lucas 19:40; Juan 2:20; Hechos 23:35', fecha: [-37, 92],
      visual: [
        tabla({
          titulo: 'Huellas de los Herodes',
          cab: ['Hallazgo', 'Dónde', 'Qué muestra'],
          filas: [
            ['El muro occidental y los muros del monte del templo', 'Jerusalén', 'Las piedras de la explanada de Herodes, algunas de más de cien toneladas'],
            ['Palacios de Masada, Herodión, Jericó y Maqueronte', 'Desierto de Judea y Perea', 'El lujo y el temor del rey; Maqueronte, lugar de la muerte de Juan según Josefo'],
            ['El puerto, el teatro y el palacio de Cesarea', 'Costa', 'El «pretorio de Herodes» donde Pablo estuvo preso (Hch 23:35)'],
            ['Una ánfora de vino con su nombre en latín', 'Masada', 'Vino enviado desde Italia «para el rey Herodes de Judea», hacia el 19 a.C.'],
            ['La tumba y el sarcófago', 'Herodión, 2007', 'Atribuidos a Herodes por Ehud Netzer; la identificación se discute'],
            ['Monedas de cada gobernante', 'Todo el país', 'Herodes y Antipas sin imágenes humanas; Felipe y los Agripas con la del emperador y la suya propia'],
            ['Séforis, Tiberíades y Cesarea de Filipo', 'Galilea y el norte', 'Las ciudades que construyeron Antipas y Felipe']
          ]
        }),
        foto('foto-masada-palacio.jpg', 'El palacio norte de Masada, con sus tres terrazas escalonadas colgadas del borde del acantilado, sobre el desierto y el mar Muerto', 'El palacio de Herodes en el extremo norte de Masada, construido en tres terrazas sobre el acantilado.', 'CC BY-SA 4.0 · Andrew Shiva / Wikipedia, vía Wikimedia Commons'),
        foto('foto-moneda-agripa.jpg', 'Pequeña moneda de bronce con un toldo o sombrilla real de un lado y tres espigas de cebada del otro', 'Moneda de Agripa I acuñada en Jerusalén, con un toldo real y tres espigas: sin imágenes humanas, para no ofender a los judíos de la ciudad.', 'CC BY-SA 3.0 · Classical Numismatic Group, Inc., vía Wikimedia Commons')
      ],
      texto: [
        'Pocas familias del mundo antiguo han dejado tantas huellas como la de Herodes. Sus obras siguen en pie, y cada año la arqueología agrega algo nuevo.',
        { h: 'Piedras que hablan' },
        'Las piedras más conocidas son las del muro occidental de Jerusalén, el «muro de los lamentos», que no es parte del templo sino del muro de contención de la explanada que construyó Herodes. Algunos bloques pesan más de cien toneladas. Al pie del muro aún se ven las piedras que los romanos derribaron en el año 70. En Masada, el Herodión, Jericó y Maqueronte se han excavado los palacios del rey, con baños, mosaicos y frescos; en Cesarea, el teatro, el hipódromo, el palacio junto al mar y los restos del puerto.',
        { h: 'Un nombre en una ánfora' },
        'En Masada se encontraron ánforas de vino importado de Italia con inscripciones en latín. Una de ellas, fechada por el nombre de los cónsules romanos en el 19 a.C., dice que el vino era para el rey Herodes de Judea. Es una de las pocas veces que su nombre aparece escrito en un objeto de su tiempo. En el Herodión, como vimos, Ehud Netzer encontró en 2007 la que identificó como su tumba.',
        { h: 'Monedas con y sin rostro' },
        'Las monedas de la familia cuentan su historia. Herodes el Grande, Arquelao y Antipas acuñaron monedas sin rostros humanos, con símbolos como cascos, anclas, palmas o cañas, para no ofender a los judíos, que entendían que la ley prohibía las imágenes. Felipe, que gobernaba gentiles, puso la imagen del emperador y la suya. Agripa I hizo las dos cosas: en Jerusalén, monedas sin rostro; en Cesarea y Paneas, monedas con su imagen y la del emperador. Agripa II siguió acuñando hasta los años 90.',
        'Nada de esto prueba la fe; pero todo muestra que los evangelios y Hechos hablan de personas, lugares y tiempos reales. Cuando los discípulos admiraban las piedras del templo, Jesús les dijo que no quedaría piedra sobre piedra. Las piedras que quedaron dan testimonio de que sus palabras se cumplieron.',
        ir('Ver en El imperio romano: la evidencia arqueológica', R.romano + '#biblia/7')
      ],
      pensar: 'Las piedras de Herodes siguen en pie, pero su reino desapareció. ¿Qué parte de lo que haces hoy quedará cuando todo lo demás pase?'
    },
    {
      id: 'rey', n: 'Reinos que pasan y el Rey que permanece', ref: 'Daniel 2:44; Lucas 1:32-33; Juan 18:36-37; 1 Juan 2:17; Apocalipsis 11:15; Apocalipsis 19:16', fecha: [-37, 100],
      visual: [
        esq('hd-reinados.svg', 'Escala de tiempo del 40 a.C. al 100 d.C. con los reinados de la familia de Herodes y los hechos del Nuevo Testamento', 'Ciento treinta años de la familia de Herodes, al lado de la historia del evangelio.', 'Línea de tiempo'),
        cita('Lucas 1:30-33', '@@lc/1/30-33'),
        tabla({
          titulo: 'Dos reinos',
          cab: ['El reino de los Herodes', 'El reino de Cristo'],
          filas: [
            ['Recibido del Senado y del emperador', 'Dado por Dios: «el Señor Dios le dará el trono de David» (Lc 1:32)'],
            ['Conquistado con legiones romanas', 'Ganado por la cruz y la resurrección'],
            ['Defendido con fortalezas y con la muerte de rivales', '«Mi reino no es de este mundo» (Jn 18:36)'],
            ['Dividido entre los hijos y perdido por ambición', '«Su reino no tendrá fin» (Lc 1:33)'],
            ['Terminó hacia el 100 d.C., sin herederos', 'Se extiende hasta lo último de la tierra y se manifestará en gloria cuando Cristo vuelva']
          ]
        }, 'Dos reinos')
      ],
      texto: [
        'La historia de la familia de Herodes empezó con un hombre que recibió del Senado romano el título de «rey de los judíos» y que lo conquistó con la espada. Terminó, ciento treinta años después, con un rey sin hijos que murió lejos de Jerusalén, cuando el templo de su bisabuelo ya no existía.',
        'En medio de esa historia nació otro Rey. A María el ángel le anunció que Dios daría a su hijo «el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin» (Lc 1:32-33). Los magos lo buscaron como «el rey de los judíos» (Mt 2:2); Pilato hizo escribir ese título sobre su cruz (Jn 19:19). Jesús no conquistó su reino con legiones: dijo que su reino no es de este mundo (Jn 18:36), y lo ganó entregando su vida.',
        { h: 'Lo que pasa y lo que permanece' },
        'Herodes construyó para que su nombre durara. Sus hijos pelearon por su herencia. Sus nietos buscaron el favor de los emperadores. Todos pasaron. Juan lo dice así: «el mundo pasa, y sus deseos; pero el que hace la voluntad de Dios permanece para siempre» (1 Jn 2:17). Pedro, al que Agripa I quiso matar, escribió: «Toda carne es como hierba, y toda la gloria del hombre como flor de la hierba. La hierba se seca, y la flor se cae; mas la palabra del Señor permanece para siempre» (1 P 1:24-25).',
        { h: 'El Rey que volverá' },
        'Daniel había anunciado que en los días de los reinos de este mundo Dios levantaría «un reino que no será jamás destruido» (Dn 2:44). Ese reino ya comenzó en los que reciben a Cristo, y se manifestará en plenitud cuando él vuelva. Como en la parábola del hombre noble que fue a recibir un reino y volvió (Lc 19:12), Cristo fue al Padre y vendrá otra vez. Entonces se oirá en el cielo: «Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo; y él reinará por los siglos de los siglos» (Ap 11:15). Y llevará escrito su nombre: «REY DE REYES Y SEÑOR DE SEÑORES» (Ap 19:16).',
        'Cada Herodes tuvo que decidir qué hacer con Jesús. Herodes el Grande quiso eliminarlo. Antipas quiso verlo hacer una señal. Agripa II estuvo «por poco». La misma pregunta llega hoy a cada lector de esta historia.',
        ir('Ver Los últimos tiempos: el regreso de Cristo y su reino', R.escatologia)
      ],
      pensar: 'Los Herodes pasaron y Cristo reina. ¿Qué lugar le das hoy al Rey que permanece: el de un personaje de la historia, o el de tu Señor?'
    }
  ];

  const E = window.__HD;
  const LINEA = { desde: -75, hasta: 100, hitos: [
    { a: -63, t: 'Pompeyo' }, { a: -40, t: 'Herodes, rey' }, { a: -20, t: 'El templo' }, { a: -4, t: 'Muere Herodes' },
    { a: [29, 33], t: 'Ministerio de Jesús' },
    { a: 44, t: 'Muere Agripa I' }, { a: 59, t: 'Pablo ante Agripa' }, { a: 70, t: 'Cae el templo' }, { a: 95, t: 'Fin de la dinastía' }
  ] };
  window.RUTA_DATA = {
    titulo: 'La dinastía de Herodes',
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
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama: una familia en el Nuevo Testamento', info: 'Cuántos Herodes, Idumea, Antípatro, los títulos de Roma y el árbol', estaciones: E.panorama, linea: LINEA },
      { id: 'grande', grupo: 'La familia', n: 'II. Herodes el Grande', info: 'El ascenso, los asmoneos, Augusto, las obras, la familia, los magos, la muerte y el reparto', estaciones: E.grande, linea: LINEA },
      { id: 'hijos', grupo: 'La familia', n: 'III. Los hijos: Arquelao, Felipe y Antipas', info: 'Judea, el noreste y Galilea; Juan el Bautista y Jesús ante Herodes', estaciones: E.hijos, linea: LINEA },
      { id: 'mujeres', grupo: 'La familia', n: 'IV. Las mujeres de la casa de Herodes', info: 'Mariamne y Salomé, Herodías, la hija de Herodías, Berenice y Drusila', estaciones: E.mujeres, linea: LINEA },
      { id: 'agripas', grupo: 'La familia', n: 'V. Agripa I y Agripa II', info: 'De la cárcel al trono, Hechos 12, Pablo ante Agripa y el fin de la dinastía', estaciones: E.agripas, linea: LINEA },
      { id: 'biblia', grupo: 'Los Herodes y la Biblia', n: 'VI. Los Herodes y la Biblia', info: 'Cómo distinguirlos, los herodianos, el Salmo 2, la arqueología y el Rey que permanece', estaciones: biblia, linea: LINEA }
    ]
  };
})();
