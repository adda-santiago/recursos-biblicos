/* ==========================================================
   Recursos Bíblicos — El problema sinóptico (ruta de la Armonía de los evangelios, nº 99)
   FUENTE de public/apps/evangelios/sinoptico/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/sinoptico_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../../assets/js/ruta-estudio.js (formato en su encabezado).
   Página auxiliar de la Armonía (§20): se abre dentro del mismo marco que la Armonía, con el
   botón «El problema sinóptico» de su cabecera o con /evangelios/#sinoptico/n desde otra ficha.
   Los botones hacia los pasajes de la Armonía usan  ir: { …, marco: true }  para abrirse en el
   mismo marco; con «/coincidencias» al final del # la Armonía abre con Coincidencias activado.
   Línea del recurso:
   - Continúa la Introducción al Nuevo Testamento (II.7), que resume el tema sin tomar partido.
   - Marcos primero y Mateo primero se presentan como posturas defendibles; ninguna doctrina
     depende de ellas. No se siguen las teorías que niegan la fidelidad histórica de los evangelios.
   - Las diferencias entre los evangelios se explican como testimonio de testigos distintos;
     nunca se presenta el texto bíblico como error (§20, Historia y texto bíblico).
   - Cifras aproximadas: Marcos tiene 678 versículos en la RV 1960 (661 en las ediciones críticas).
   ========================================================== */
(() => {
  window.__SIN = window.__SIN || {};
  const ARM = '../';   // la Armonía, en el mismo marco

  /* ---------------- Los datos ---------------- */
  const datos = [
    {
      id: 'vistos-juntos', n: 'Vistos juntos', ref: 'Lucas 1:1-4',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: 'img/sin-lucas-testigos.webp', alt: 'En el patio de una casa de Jerusalén, Lucas, con una tablilla de cera, escucha a una anciana discípula y a un hombre de mediana edad que le cuentan lo que vieron', pie: 'Lucas investiga «con diligencia» y escucha a los que vieron a Jesús (Lc 1:2-3).', origen: 'ia', foco: '50% 40%' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/1/1-4', ref: 'Lucas 1:1-4' }
      ],
      texto: [
        'Si se ponen Mateo, Marcos y Lucas en tres columnas, uno al lado del otro, salta a la vista algo que no pasa con ningún otro grupo de libros de la Biblia: cuentan muchos de los mismos hechos, muchas veces en el mismo orden y, a veces, con las mismas palabras. Por eso se los llama evangelios sinópticos. La palabra viene del griego y significa «vistos juntos» o «mirados de una sola vez». Una sinopsis es justamente eso: un libro que pone los evangelios en columnas paralelas para leerlos a la vez. La Armonía de los evangelios de este sitio es una sinopsis, y además incluye a Juan.',
        { h: 'La pregunta' },
        'Al leerlos juntos aparece una pregunta: ¿cómo se explica que se parezcan tanto y, al mismo tiempo, que tengan diferencias? Si fueran tres relatos completamente independientes, no esperaríamos frases idénticas de varias líneas. Si uno solo hubiera copiado de otro, no esperaríamos tantas diferencias de detalle. Esa pregunta, cómo se relacionan entre sí los tres primeros evangelios, se llama el problema sinóptico.',
        'La palabra «problema» no quiere decir que haya un defecto en la Biblia. Se usa como en matemáticas: una pregunta que pide una explicación. Es una pregunta sobre la historia de cómo se escribieron los evangelios, no sobre si lo que cuentan es verdad.',
        { h: 'Lucas abre la puerta' },
        'El mismo Nuevo Testamento da la primera pista. Lucas comienza su evangelio diciendo que ya «muchos han tratado de poner en orden la historia» de lo ocurrido (Lc 1:1). Cuenta que su información viene de los que «desde el principio lo vieron con sus ojos, y fueron ministros de la palabra» (Lc 1:2), y que él mismo escribió «después de haber investigado con diligencia todas las cosas desde su origen» (Lc 1:3). Lucas conocía relatos anteriores, escuchó a testigos e investigó. Nada de eso le quita autoridad a su evangelio: es la forma en que el Espíritu Santo lo guió.',
        { h: 'Qué verás en esta ruta' },
        'Las estaciones 2 a 5 presentan los datos: lo que los tres comparten (el contenido, el orden y las palabras) y en qué se diferencian. Las estaciones 6 a 12 recorren las explicaciones: la tradición de los testigos, las respuestas que se han dado en la historia, las dos posturas principales de hoy, las teorías que no se siguen, la relación entre fuentes e inspiración, y el lugar de Juan. La última estación es un taller para que estudies un pasaje paralelo por tu cuenta en la Armonía.',
        { ir: { t: 'Abrir «Propósito del evangelio de Lucas» en la Armonía', a: ARM + '#proposito-lucas', marco: true } }
      ],
      pensar: 'Lucas escribió para que Teófilo conociera «bien la verdad de las cosas» en que había sido instruido (Lc 1:4). ¿Qué te ayudaría hoy a estar más seguro de lo que crees acerca de Jesús?'
    },
    {
      id: 'contenido', n: 'Lo que comparten: el contenido', ref: 'Marcos 1:1; Mateo 9:1-8; Marcos 2:1-12; Lucas 5:17-26',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-tres-circulos.svg', alt: 'Tres círculos que se cruzan, uno por evangelio: la zona común a los tres es la triple tradición; la zona de Mateo y Lucas sin Marcos es la doble tradición; cada círculo tiene además su material propio', pie: 'Material común y propio de los sinópticos, en versículos aproximados.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres tipos de material (cifras aproximadas)',
          cab: ['Material', 'Dónde está', 'Ejemplos'],
          filas: [
            ['Triple tradición', 'En Mateo, Marcos y Lucas', 'El paralítico (Mt 9:1-8; Mr 2:1-12; Lc 5:17-26), la tempestad calmada, la confesión de Pedro, la transfiguración'],
            ['Doble tradición', 'En Mateo y Lucas, no en Marcos (unos 230 versículos)', 'El Padre nuestro, las tentaciones en detalle, el centurión (Mt 8:5-13; Lc 7:1-10), muchas enseñanzas'],
            ['Propio de Mateo', 'Solo en Mateo (cerca de 300 versículos)', 'Los magos, la parábola de la cizaña, las diez vírgenes, la gran comisión'],
            ['Propio de Lucas', 'Solo en Lucas (cerca de 500 versículos)', 'El buen samaritano, el hijo pródigo, Zaqueo, los caminantes de Emaús'],
            ['Propio de Marcos', 'Solo en Marcos (unos 30 versículos)', 'La semilla que crece sola (Mr 4:26-29), el ciego de Betsaida (Mr 8:22-26), el joven que huyó (Mr 14:51-52)']
          ],
          nota: 'Las cifras cambian según cómo se cuenten los pasajes y qué ediciones se usen. Marcos tiene 678 versículos en la Reina-Valera 1960.'
        } }
      ],
      texto: [
        'La primera señal del parecido está en el contenido. Casi todo lo que cuenta Marcos aparece también en Mateo, en Lucas o en los dos. Cerca del noventa por ciento de Marcos tiene un paralelo en Mateo, y más de la mitad tiene un paralelo en Lucas. Solo unos treinta versículos de Marcos no están en ninguno de los otros dos.',
        { h: 'Triple y doble tradición' },
        'Los estudiosos llaman triple tradición a lo que cuentan los tres. Es la columna vertebral de la historia: el bautismo de Jesús, sus milagros en Galilea, la confesión de Pedro, la transfiguración, el viaje a Jerusalén, la última semana, la cruz y la tumba vacía. Un ejemplo es la sanidad del paralítico que bajaron por el techo (Mt 9:1-8; Mr 2:1-12; Lc 5:17-26).',
        'Hay además un bloque que comparten Mateo y Lucas, pero que no está en Marcos: la doble tradición. Son sobre todo enseñanzas de Jesús, como el Padre nuestro, las bienaventuranzas, el centurión de Capernaúm (Mt 8:5-13; Lc 7:1-10) o la parábola de la levadura. Este bloque, de unos doscientos treinta versículos, es una de las claves del problema.',
        { h: 'Lo propio de cada uno' },
        'Cada evangelista tiene también material propio. Mateo cuenta la visita de los magos, la parábola de la cizaña y la gran comisión. Lucas, el más extenso, guarda tesoros que solo él registra: el buen samaritano, el hijo pródigo, Zaqueo y los caminantes de Emaús. Marcos tiene muy poco propio, pero lo que tiene es vivo y concreto, como el joven que huyó desnudo la noche del arresto (Mr 14:51-52).',
        'El esquema muestra estas zonas como tres círculos que se cruzan. Mira el tamaño de cada zona: el círculo de Marcos casi desaparece dentro de los otros dos, mientras que Mateo y Lucas tienen cada uno una parte grande que no comparte nadie.',
        { h: 'Por qué importa' },
        'Que tres testigos coincidan en lo esencial es una garantía, no un problema. La ley de Moisés pedía dos o tres testigos para establecer un hecho (Dt 19:15), y Jesús aplicó el mismo principio (Mt 18:16). La vida de Jesús no descansa en un solo relato: está confirmada por varios, que coinciden en los hechos centrales y aportan cada uno lo que el otro no dijo.',
        { ir: { t: 'Ver el paralítico en la Armonía, con Coincidencias', a: ARM + '#paralitico/coincidencias', marco: true } }
      ],
      pensar: 'Dios quiso darnos la vida de Jesús por medio de varios testigos y no de uno solo. ¿Qué te dice eso sobre la manera en que Dios sostiene tu fe?'
    },
    {
      id: 'orden', n: 'Lo que comparten: el orden', ref: 'Marcos 2:1–5:43; Lucas 5:17–8:56; Mateo 8:23–13:9',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-orden.svg', alt: 'Tres columnas con diez pasajes: en el centro Marcos, a la derecha Lucas en el mismo orden con líneas paralelas, a la izquierda Mateo con varias líneas cruzadas porque agrupa algunos pasajes en otro orden', pie: 'Diez pasajes en Marcos 2–5 y sus paralelos. Lucas sigue el mismo orden; Mateo agrupa algunos de otra forma.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Diez pasajes en tres evangelios',
          cab: ['Pasaje', 'Marcos', 'Lucas', 'Mateo'],
          filas: [
            ['El paralítico', 'Mr 2:1-12', 'Lc 5:17-26', 'Mt 9:1-8'],
            ['El llamamiento de Leví', 'Mr 2:13-17', 'Lc 5:27-32', 'Mt 9:9-13'],
            ['La pregunta sobre el ayuno', 'Mr 2:18-22', 'Lc 5:33-39', 'Mt 9:14-17'],
            ['Las espigas en el día de reposo', 'Mr 2:23-28', 'Lc 6:1-5', 'Mt 12:1-8'],
            ['La mano seca', 'Mr 3:1-6', 'Lc 6:6-11', 'Mt 12:9-14'],
            ['La elección de los doce', 'Mr 3:13-19', 'Lc 6:12-16', 'Mt 10:1-4'],
            ['El sembrador', 'Mr 4:1-9', 'Lc 8:4-8', 'Mt 13:1-9'],
            ['La tempestad calmada', 'Mr 4:35-41', 'Lc 8:22-25', 'Mt 8:23-27'],
            ['El endemoniado gadareno', 'Mr 5:1-20', 'Lc 8:26-39', 'Mt 8:28-34'],
            ['La hija de Jairo', 'Mr 5:21-43', 'Lc 8:40-56', 'Mt 9:18-26']
          ],
          nota: 'Lucas sigue exactamente el orden de Marcos en estos diez pasajes. Mateo pone antes la tempestad y el gadareno (cap. 8) y deja el sembrador para su capítulo de parábolas (cap. 13).'
        } }
      ],
      texto: [
        'La segunda señal es el orden. Los tres evangelios siguen el mismo esquema general: la predicación de Juan el Bautista, el bautismo y la tentación de Jesús, un largo ministerio en Galilea, la confesión de Pedro en Cesarea de Filipo, el viaje a Jerusalén y la última semana. Juan, en cambio, cuenta varios viajes a Jerusalén y sigue el calendario de las fiestas. Que los tres primeros coincidan en el esquema es natural: es el bosquejo de la predicación apostólica (Hch 10:37-41).',
        { h: 'Más que el esquema' },
        'Pero la coincidencia va más allá del bosquejo. Muchas veces los tres ponen una serie de pasajes en el mismo orden, aunque no haya una razón de tiempo o de lugar que lo exija. La tabla muestra diez pasajes de Marcos 2 a 5. Lucas los cuenta exactamente en el mismo orden. Mateo los tiene todos, pero agrupa algunos de otra manera: junta varios milagros en sus capítulos 8 y 9, y reúne las parábolas en el capítulo 13.',
        { h: 'Un dato curioso' },
        'Cuando se compara el orden de todos los pasajes, aparece un hecho que los estudiosos notaron hace casi dos siglos: Mateo y Lucas casi nunca coinciden entre sí en un orden distinto del de Marcos. Si Mateo se aparta del orden de Marcos, Lucas lo sigue; si Lucas se aparta, Mateo lo sigue. Marcos queda siempre en el medio. Este dato se usa como argumento en las explicaciones que verás en las estaciones 8 y 9, y cada postura lo explica a su manera.',
        { h: 'El orden de cada evangelista' },
        'Los evangelistas no escribieron un diario día por día. Lucas dice que escribió «por orden» (Lc 1:3), pero eso puede significar un orden lógico y bien pensado, no necesariamente cronológico en cada detalle. Papías, un obispo de principios del siglo II, decía que Marcos escribió con exactitud lo que Pedro recordaba, aunque no siempre en orden. Mateo agrupa por temas: cinco grandes discursos de Jesús, diez milagros en los capítulos 8 y 9, siete parábolas en el capítulo 13.',
        'La Armonía de este sitio sigue un orden cronológico reconstruido. Por eso, en algunos pasajes uno de los evangelios aparece en un lugar distinto del que tiene en su libro. Es una ayuda para estudiar, no una corrección de los evangelistas.',
        { ir: { t: 'Ver la tempestad calmada en la Armonía', a: ARM + '#tempestad/coincidencias', marco: true } }
      ],
      pensar: 'Mateo ordenó las enseñanzas de Jesús por temas para que sus lectores las aprendieran y las practicaran. ¿Cómo podrías ordenar tú lo que aprendes de la Biblia para recordarlo y vivirlo?'
    },
    {
      id: 'palabras', n: 'Lo que comparten: las palabras', ref: 'Mateo 9:6; Marcos 2:10-11; Lucas 5:24; Mateo 24:15; Marcos 13:14',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-palabras.svg', alt: 'Mateo 9:6, Marcos 2:10-11 y Lucas 5:24 en tres columnas, con el mismo paréntesis resaltado en las tres: el narrador interrumpe a Jesús para decir que se dirige al paralítico', pie: 'El mismo paréntesis del narrador en los tres evangelios (RV 1960).', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mr/13/14', ref: 'Marcos 13:14' }
      ],
      texto: [
        'La tercera señal es la más llamativa: muchas veces las palabras son casi las mismas. En los dichos de Jesús esto no sorprende, porque los discípulos los repetían y los enseñaban de memoria. Lo que sorprende es que coincidan también las palabras del narrador, es decir, la manera de contar.',
        { h: 'Un paréntesis en tres evangelios' },
        'El ejemplo clásico está en la sanidad del paralítico. Jesús está hablando a los escribas y, a mitad de la frase, se vuelve hacia el enfermo. Los tres evangelistas interrumpen la frase con el mismo paréntesis. Mateo escribe: «Pues para que sepáis que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados (dice entonces al paralítico): Levántate, toma tu cama, y vete a tu casa» (Mt 9:6). Marcos y Lucas tienen la misma frase y el mismo paréntesis: «(dijo al paralítico)» (Mr 2:10; Lc 5:24). En griego, las tres oraciones coinciden casi palabra por palabra. Tres testigos que cuentan un hecho por separado rara vez cortan una frase en el mismo lugar.',
        { h: '«El que lee, entienda»' },
        'Un segundo ejemplo está en el discurso del monte de los Olivos. Jesús habla de la abominación desoladora anunciada por Daniel, y en medio de su discurso aparece una nota para el lector: «(el que lee, entienda)» (Mt 24:15; Mr 13:14). Jesús estaba hablando, no leyendo; la nota es del evangelista, que se dirige a quien lee su libro. Que la misma nota esté en Mateo y en Marcos muestra que hay una relación escrita entre ellos, y no solo un recuerdo común.',
        { h: 'Diferencias dentro del parecido' },
        'Aun en estos pasajes hay pequeñas diferencias. Mateo dice «tu cama» y Marcos y Lucas «tu lecho»; Lucas añade «A ti te digo», como Marcos. Así son los paralelos sinópticos: muy cercanos, pero no fotocopias. Cada evangelista escribe con su estilo y para sus lectores.',
        'En la Armonía puedes comprobarlo tú mismo con el botón Coincidencias, que resalta las palabras que comparten los evangelios de un pasaje. Las que están en todos aparecen en un color y las que están en algunos, en otro.',
        { ir: { t: 'Ver el paralítico en la Armonía, con Coincidencias', a: ARM + '#paralitico/coincidencias', marco: true } },
        { ir: { t: 'Ver «Señales antes del fin» en la Armonía', a: ARM + '#senales-fin/coincidencias', marco: true } },
        { ejercicio: {
          pregunta: '¿Por qué la nota «el que lee, entienda» es una pista importante para el problema sinóptico?',
          opciones: [
            { t: 'Porque Jesús estaba leyendo un libro mientras enseñaba.', ok: false, por_que: 'Jesús enseñaba de viva voz a sus discípulos en el monte de los Olivos (Mt 24:3).' },
            { t: 'Porque es una nota del evangelista al lector, y aparece igual en dos evangelios.', ok: true, por_que: 'Una nota dirigida al lector pertenece al texto escrito. Que esté en Mateo y en Marcos indica una relación escrita entre ellos.' },
            { t: 'Porque muestra que uno de los evangelistas se equivocó al copiar.', ok: false, por_que: 'La nota no es un error: los dos evangelistas la incluyen a propósito para llamar la atención sobre la profecía de Daniel.' }
          ],
          explicacion: 'Los dichos de Jesús pudieron transmitirse de memoria; las notas del narrador, como esta y el paréntesis del paralítico, apuntan a que los evangelistas conocieron textos escritos.'
        } }
      ],
      pensar: 'Los evangelistas se detienen para decirle al lector: «entienda». ¿Con qué atención lees tú la Palabra de Dios? ¿Qué podrías cambiar para leerla entendiendo?'
    },
    {
      id: 'diferencias', n: 'Las diferencias', ref: 'Mateo 5:3; Lucas 6:20; Mateo 27:37; Marcos 15:26; Lucas 23:38; Juan 19:19; Mateo 20:29-30; Marcos 10:46; Lucas 18:35',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El título sobre la cruz en los cuatro evangelios',
          cab: ['Evangelio', 'Lo que registra', 'Cómo se entiende'],
          filas: [
            ['Mateo 27:37', 'ESTE ES JESÚS, EL REY DE LOS JUDÍOS', 'Nombre y causa'],
            ['Marcos 15:26', 'EL REY DE LOS JUDÍOS', 'Solo la causa de la condena'],
            ['Lucas 23:38', 'ESTE ES EL REY DE LOS JUDÍOS', 'Añade que estaba en tres lenguas'],
            ['Juan 19:19-20', 'JESÚS NAZARENO, REY DE LOS JUDÍOS', 'En hebreo, en griego y en latín']
          ],
          nota: 'El título estaba escrito en tres lenguas (Lc 23:38; Jn 19:20), así que pudo decir algo distinto en cada una. Todos registran lo esencial: «EL REY DE LOS JUDÍOS».'
        } },
        { tipo: 'imagen', titulo: 'Foto', src: '../../de-la-biblia-a-nosotros/img/codice-sinaitico.webp', alt: 'Página del Códice Sinaítico con cuatro columnas de texto griego en letras mayúsculas sobre pergamino', pie: 'Códice Sinaítico, siglo IV: una página de Mateo 6, donde está el Padre nuestro.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true }
      ],
      texto: [
        'Junto a los parecidos están las diferencias. Algunos lectores se inquietan al encontrarlas, y otros las usan para decir que los evangelios no son confiables. Vale la pena mirarlas de cerca, porque al examinarlas muestran justamente lo contrario: son las diferencias normales entre testigos que no se pusieron de acuerdo para contar la misma historia.',
        { h: 'Resumir y destacar' },
        'El título sobre la cruz es un buen ejemplo. Cada evangelio lo registra con palabras algo distintas, como muestra la tabla. Pero el título estaba escrito «en hebreo, en griego y en latín» (Jn 19:20), y cada evangelista pudo citar una de las lenguas o resumir. Todos coinciden en lo que importa: Jesús fue crucificado como «EL REY DE LOS JUDÍOS» (Mr 15:26).',
        { h: 'Enseñanzas repetidas' },
        'Mateo registra: «Bienaventurados los pobres en espíritu» (Mt 5:3), en un monte. Lucas registra: «Bienaventurados vosotros los pobres» (Lc 6:20), después de que Jesús «se detuvo en un lugar llano» (Lc 6:17). El Padre nuestro de Mateo está en el sermón del monte (Mt 6:9-13); el de Lucas, en otra ocasión, cuando un discípulo le pidió: «Señor, enséñanos a orar» (Lc 11:1). Jesús fue un maestro itinerante que enseñó durante unos tres años en muchos lugares. Es natural que repitiera sus enseñanzas con variaciones, como hace todo buen predicador. Además, un «lugar llano» puede ser una meseta en la ladera de un monte.',
        { posturas: {
          titulo: 'Los ciegos de Jericó',
          a: { n: 'Dos Jericós', t: 'Mateo dice que eran dos ciegos y que Jesús salía de Jericó (Mt 20:29-30); Marcos nombra solo a uno, Bartimeo, también al salir (Mr 10:46); Lucas dice que fue «acercándose Jesús a Jericó» (Lc 18:35). En tiempos de Jesús había dos Jericós: la ciudad antigua, en ruinas, y la ciudad nueva de Herodes, a cerca de dos kilómetros. Saliendo de una y acercándose a la otra, los tres relatos describen el mismo lugar.' },
          b: { n: 'Un relato condensado', t: 'Otros proponen que Lucas resume en un solo relato lo ocurrido al entrar y al salir de la ciudad, o que el ciego clamó a Jesús a la entrada y fue sanado a la salida. Marcos menciona solo a Bartimeo porque era conocido entre los creyentes, como su nombre lo indica, y Mateo cuenta a los dos.' },
          c: 'Las dos explicaciones son razonables, y ninguna obliga a pensar en un error. Un testigo que nombra a uno de dos no contradice al que cuenta a los dos.'
        } },
        { h: 'Lo que muestran las diferencias' },
        'Si los evangelistas hubieran copiado sin pensar, no habría diferencias; si hubieran inventado, no habría tanto acuerdo. Lo que encontramos es lo que se espera de testigos honestos: acuerdo pleno en los hechos y libertad para resumir, elegir y destacar según el propósito de cada uno.',
        { ir: { t: 'Ver el ciego de Jericó en la Armonía', a: ARM + '#bartimeo', marco: true } },
        { ir: { t: 'Ver la crucifixión en la Armonía', a: ARM + '#crucifixion', marco: true } }
      ],
      pensar: 'Las diferencias entre los evangelios invitan a leerlos con más atención, no con menos confianza. ¿Cómo respondes cuando encuentras en la Biblia algo que no entiendes a primera vista?'
    }
  ];

  /* ---------------- Las explicaciones (1) ---------------- */
  const explicaciones1 = [
    {
      id: 'testigos', n: 'Testigos y tradición oral', ref: 'Lucas 1:2; Hechos 1:21-22; Hechos 2:42; 1 Corintios 15:3-8',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: 'img/sin-ensenanza-oral.webp', alt: 'En una casa de Jerusalén, Pedro enseña a un grupo de creyentes sentados en el suelo; algunos repiten en voz baja lo que oyen', pie: 'Los creyentes «perseveraban en la doctrina de los apóstoles» (Hch 2:42).', origen: 'ia', foco: '50% 45%' },
        { tipo: 'imagen', titulo: 'Marcos y Pedro', src: '../../introduccion-nuevo-testamento/img/int-marcos-pedro.webp', alt: 'En una casa de Roma, de noche, Juan Marcos escribe en un papiro mientras Pedro, anciano, recuerda en voz alta, sentado junto a una lámpara', pie: 'Según Papías, Marcos escribió lo que Pedro enseñaba.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1co/15/3-8', ref: '1 Corintios 15:3-8' }
      ],
      texto: [
        'Antes de que existiera un solo evangelio escrito, el evangelio ya se predicaba. Entre la resurrección de Jesús y los primeros evangelios pasaron entre veinte y treinta años. En ese tiempo, la historia de Jesús se transmitió de viva voz, por medio de los apóstoles y de otros testigos.',
        { h: 'Testigos desde el principio' },
        'Cuando hubo que reemplazar a Judas, Pedro pidió un hombre que hubiera estado con ellos «todo el tiempo que el Señor Jesús entraba y salía entre nosotros, comenzando desde el bautismo de Juan» (Hch 1:21-22). Ese es justamente el marco de los evangelios sinópticos, del bautismo a la ascensión. Los apóstoles eran testigos, y su enseñanza era el centro de la vida de la iglesia: los creyentes «perseveraban en la doctrina de los apóstoles» (Hch 2:42). Lucas dice que su evangelio se apoya en «los que desde el principio lo vieron con sus ojos» (Lc 1:2).',
        { h: 'Recibir y entregar' },
        'Pablo usa dos palabras que eran técnicas entre los maestros judíos: recibir y enseñar, o entregar. «Os he enseñado lo que asimismo recibí» (1 Co 15:3), escribe, y a continuación enumera los testigos de la resurrección, muchos de los cuales todavía vivían. En el mundo judío, los discípulos aprendían de memoria las palabras de su maestro, con precisión. Jesús enseñaba de una forma fácil de recordar: frases breves, paralelismos, parábolas, imágenes de la vida diaria. Esa enseñanza memorizada explica bien por qué los dichos de Jesús se parecen tanto en los tres evangelios.',
        { h: 'Pedro detrás de Marcos' },
        'Los escritores cristianos más antiguos relacionan cada evangelio con un testigo. Papías, obispo de Hierápolis a comienzos del siglo II, cuenta que Marcos fue el intérprete de Pedro y que escribió con cuidado lo que Pedro recordaba de las palabras y los hechos del Señor. El Nuevo Testamento muestra a Marcos junto a Pedro: la iglesia se reunía en casa de su madre (Hch 12:12), y Pedro lo llama «Marcos mi hijo» (1 P 5:13).',
        'La tradición oral no explica por sí sola las notas del narrador que viste en la estación 4. Pero ninguna explicación del problema sinóptico puede dejarla de lado: los evangelios escritos nacieron dentro de una iglesia que ya conocía, repetía y cuidaba la historia de Jesús.'
      ],
      pensar: 'La fe de la iglesia descansa en el testimonio de los que vieron a Jesús resucitado (1 Co 15:3-8). ¿A quién le estás transmitiendo tú lo que has recibido?'
    },
    {
      id: 'historia', n: 'Las respuestas en la historia', ref: 'Lucas 1:1-3',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: 'img/sin-papias.webp', alt: 'En una casa de Hierápolis, hacia el año 110, Papías, obispo de barba gris, escribe en un rollo mientras escucha a un anciano viajero que le cuenta lo que oyó de los discípulos del Señor', pie: 'Papías de Hierápolis recoge lo que contaban quienes habían oído a los discípulos.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se ha respondido a la pregunta',
          cab: ['Época', 'Quién', 'Qué propuso'],
          filas: [
            ['Hacia 110–130', 'Papías de Hierápolis', 'Marcos escribió lo que enseñaba Pedro; Mateo reunió los dichos del Señor en lengua hebrea'],
            ['Hacia 180', 'Ireneo de Lyon', 'Mateo escribió primero, para los hebreos; después Marcos, discípulo de Pedro; luego Lucas y Juan'],
            ['Hacia 200', 'Clemente de Alejandría', 'Los evangelios con genealogías (Mateo y Lucas) se escribieron primero'],
            ['Hacia 400', 'Agustín de Hipona', 'Orden Mateo, Marcos, Lucas; Marcos sigue y abrevia a Mateo'],
            ['1789', 'Johann Griesbach', 'Mateo primero, después Lucas; Marcos combina a los dos'],
            ['1835–1863', 'Lachmann, Weisse, Holtzmann', 'Marcos primero; Mateo y Lucas usan a Marcos y una colección de dichos'],
            ['1924', 'Burnett Streeter', 'Cuatro fuentes: Marcos, los dichos, lo propio de Mateo y lo propio de Lucas'],
            ['1955', 'Austin Farrer', 'Marcos primero, Mateo usa a Marcos y Lucas usa a los dos, sin colección de dichos'],
            ['1964', 'William Farmer', 'Defensa renovada de Mateo primero, en la línea de Griesbach']
          ],
          nota: 'Fechas aproximadas. Las obras de Papías se perdieron; sus palabras se conocen por Eusebio de Cesarea (Historia eclesiástica 3.39).'
        } }
      ],
      texto: [
        'La pregunta por la relación entre los evangelios no es nueva. Desde muy temprano, los cristianos se preguntaron quién escribió cada evangelio, en qué orden y con qué información. Sus respuestas son valiosas, porque algunos vivieron cerca de los apóstoles.',
        { h: 'Los primeros siglos' },
        'Papías, obispo de Hierápolis, una ciudad cercana a Laodicea (Col 4:13), escribió hacia los años 110 a 130 una obra en cinco libros sobre los dichos del Señor. Se perdió, pero Eusebio de Cesarea copió algunos fragmentos. Papías dice que Marcos fue el intérprete de Pedro, y que Mateo reunió los dichos de Jesús en lengua hebrea, es decir, en hebreo o en arameo. Ireneo de Lyon, hacia el año 180, afirma que Mateo escribió primero, para los judíos, y que después escribieron Marcos, Lucas y Juan. Clemente de Alejandría dice que los evangelios con genealogías se escribieron antes que los otros.',
        'Agustín de Hipona escribió hacia el año 400 un libro entero sobre la armonía de los evangelios. Siguió el orden de nuestras Biblias, Mateo, Marcos y Lucas, y explicó a Marcos como alguien que sigue a Mateo y lo resume. Esta fue la opinión común durante catorce siglos.',
        { h: 'La época moderna' },
        'En el siglo XVIII los estudiosos comenzaron a imprimir sinopsis en columnas y a comparar los textos palabra por palabra. Johann Griesbach propuso en 1789 que Mateo escribió primero, que Lucas usó a Mateo y que Marcos combinó a los dos. En el siglo XIX, Karl Lachmann llamó la atención sobre el orden: Marcos siempre está en el medio (estación 3). A partir de ahí, Christian Weisse y Heinrich Holtzmann propusieron que Marcos fue el primero.',
        'En el siglo XX esa propuesta llegó a ser la más aceptada, con variantes. Burnett Streeter habló de cuatro fuentes, Austin Farrer propuso una versión sin la colección de dichos, y William Farmer volvió a defender que Mateo fue el primero. El debate sigue abierto, y en él participan estudiosos que creen firmemente en la inspiración de la Escritura.',
        'Las dos estaciones que siguen presentan las dos respuestas principales de hoy, cada una con sus mejores argumentos.'
      ],
      pensar: 'Durante siglos, muchos creyentes estudiaron los evangelios con paciencia y cuidado. ¿Qué te enseña su ejemplo sobre la forma de estudiar la Biblia?'
    }
  ];

  window.__SIN.datos = datos;
  window.__SIN.explicaciones1 = explicaciones1;
})();
