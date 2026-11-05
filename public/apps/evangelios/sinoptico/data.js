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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Puesto que ya muchos han tratado de poner en orden la historia de las cosas que entre nosotros han sido ciertísimas, tal como nos lo enseñaron los que desde el principio lo vieron con sus ojos, y fueron ministros de la palabra, me ha parecido también a mí, después de haber investigado con diligencia todas las cosas desde su origen, escribírtelas por orden, oh excelentísimo Teófilo, para que conozcas bien la verdad de las cosas en las cuales has sido instruido.', ref: 'Lucas 1:1-4' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero cuando veáis la abominación desoladora de que habló el profeta Daniel, puesta donde no debe estar (el que lee, entienda), entonces los que estén en Judea huyan a los montes.', ref: 'Marcos 13:14' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras; y que apareció a Cefas, y después a los doce. Después apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen. Después apareció a Jacobo; después a todos los apóstoles; y al último de todos, como a un abortivo, me apareció a mí.', ref: '1 Corintios 15:3-8' }
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
/* El problema sinóptico · parte 2: las explicaciones (2), el taller y armado de RUTA_DATA */
(() => {
  const N = window.__SIN;
  const ARM = '../';

  const explicaciones2 = [
    {
      id: 'marcos-primero', n: 'Marcos primero y la fuente Q', ref: 'Marcos 1:1; Mateo 8:5-13; Lucas 7:1-10',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-hipotesis.svg', alt: 'Cuatro diagramas de flechas: Agustín (Mateo, Marcos, Lucas en fila), Griesbach (Mateo a Lucas y los dos a Marcos), dos fuentes (Marcos y Q hacia Mateo y Lucas) y Farrer (Marcos a Mateo y los dos a Lucas); debajo de todos, la enseñanza oral de los apóstoles', pie: 'Las principales explicaciones del problema sinóptico. Todas parten de la enseñanza de los testigos.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Argumentos a favor de Marcos primero',
          cab: ['Argumento', 'En qué consiste'],
          filas: [
            ['Contenido', 'Casi todo Marcos está en Mateo o en Lucas. Es más fácil explicar que dos ampliaran un libro breve que pensar que uno omitió tanto de dos libros más largos (el nacimiento, el sermón del monte, el Padre nuestro)'],
            ['Orden', 'Mateo y Lucas casi nunca coinciden contra el orden de Marcos: cada uno lo sigue o se aparta por su cuenta'],
            ['Estilo', 'El griego de Marcos es más sencillo y directo; en los pasajes paralelos, Mateo y Lucas suelen pulir su redacción'],
            ['Detalles difíciles', 'Marcos conserva expresiones que los otros suavizan, por ejemplo «no pudo hacer allí ningún milagro» (Mr 6:5) frente a «no hizo allí muchos milagros» (Mt 13:58)']
          ],
          nota: 'La colección de dichos llamada Q es una hipótesis: no se ha encontrado ningún manuscrito de ella.'
        } }
      ],
      texto: [
        'La explicación más extendida hoy, también entre muchos estudiosos evangélicos, sostiene que Marcos fue el primer evangelio escrito. Mateo y Lucas, cada uno por su cuenta, habrían usado a Marcos como base y lo habrían ampliado con otros materiales.',
        { h: 'La hipótesis de las dos fuentes' },
        'Si Mateo y Lucas usaron a Marcos, queda por explicar la doble tradición: los unos doscientos treinta versículos que tienen en común y que no están en Marcos (estación 2). Para eso se propone una segunda fuente, una colección de dichos de Jesús que ambos habrían conocido. Se la llama Q, por la palabra alemana Quelle, que significa fuente. Por eso esta explicación se conoce como la hipótesis de las dos fuentes. Streeter añadió el material propio de Mateo y el de Lucas, y habló de cuatro fuentes.',
        'Q no es un libro que alguien haya visto: es una deducción a partir de los textos. Algunos piensan que fue un escrito; otros, que era un conjunto de enseñanzas de Jesús que se repetían de memoria en las iglesias. Que existiera una colección así no tiene nada de extraño. Recuerda que, según Papías, Mateo reunió los dichos del Señor.',
        { h: 'Sus argumentos' },
        'La tabla resume los argumentos principales: el contenido, el orden, el estilo y ciertos detalles que Marcos cuenta con más crudeza. Por ejemplo, Marcos dice que en Nazaret Jesús «no pudo hacer allí ningún milagro, salvo que sanó a unos pocos enfermos» (Mr 6:5), y Mateo dice que «no hizo allí muchos milagros, a causa de la incredulidad de ellos» (Mt 13:58). Quienes defienden esta postura piensan que es más natural que Mateo haya aclarado la expresión de Marcos que lo contrario.',
        { h: 'Sin Q' },
        'Otros estudiosos aceptan que Marcos fue el primero, pero no creen necesario suponer la fuente Q. Según la propuesta de Austin Farrer, defendida hoy por Mark Goodacre, Lucas habría conocido tanto a Marcos como a Mateo. Así se explica la doble tradición sin una fuente perdida, y también algunas coincidencias pequeñas de Mateo y Lucas contra Marcos, que verás en la estación siguiente.',
        'Quien sostiene que Marcos fue el primero no está diciendo que Marcos sea más confiable que Mateo. Los tres evangelios son Palabra de Dios. La pregunta es solo cuál se escribió antes.',
        { ir: { t: 'Ver «Lucas entre los evangelios» en el estudio de Lucas', a: '../../../lucas/#introduccion/9' } }
      ],
      pensar: 'Marcos escribió un evangelio breve y lleno de acción, y Dios lo usó como base para otros. ¿Qué te enseña esto sobre el valor de una obra sencilla hecha con fidelidad?'
    },
    {
      id: 'mateo-primero', n: 'Mateo primero', ref: 'Mateo 9:9; Mateo 26:68; Marcos 14:65; Lucas 22:64',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: '../../mundo-judio/img/mj-mateo-banco.webp', alt: 'Junto a un camino a la entrada de Capernaúm, Mateo está sentado tras una mesa con monedas, una balanza y tablillas de cuentas; Jesús, de espaldas, se ha detenido frente a él', pie: 'Mateo, el publicano que dejó todo para seguir a Jesús (Mt 9:9).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Quién es el que te golpeó»',
          cab: ['Evangelio', 'Lo que dicen los que golpean a Jesús'],
          filas: [
            ['Mateo 26:68', 'Profetízanos, Cristo, quién es el que te golpeó.'],
            ['Marcos 14:65', 'Profetiza.'],
            ['Lucas 22:64', 'Profetiza, ¿quién es el que te golpeó?']
          ],
          nota: 'Mateo y Lucas coinciden en una frase que no está en Marcos. Estas pequeñas coincidencias de Mateo y Lucas contra Marcos son difíciles de explicar si los dos usaron a Marcos sin conocerse.'
        } }
      ],
      texto: [
        'La otra gran respuesta sostiene que Mateo fue el primero. Es la postura de la iglesia antigua y está reflejada en el orden de nuestras Biblias. Hoy tiene menos defensores, pero sus argumentos son serios.',
        { h: 'El testimonio antiguo' },
        'Todos los escritores cristianos de los primeros siglos que hablan del tema ponen a Mateo primero: Papías, Ireneo, Clemente de Alejandría, Orígenes y Agustín (estación 7). Estaban mucho más cerca de los hechos que nosotros. Mateo, además, fue apóstol y testigo directo: Jesús lo llamó cuando estaba «sentado al banco de los tributos públicos» (Mt 9:9).',
        { h: 'Las pequeñas coincidencias' },
        'El argumento más fuerte tiene que ver con los pasajes de la triple tradición. Hay varios lugares en que Mateo y Lucas coinciden en una palabra o una frase que no está en Marcos. La tabla muestra el más conocido: durante el juicio, los que golpean a Jesús le dicen «Profetiza, ¿quién es el que te golpeó?» (Lc 22:64), y Mateo trae la misma pregunta (Mt 26:68), mientras Marcos solo dice «Profetiza» (Mr 14:65). Si Mateo y Lucas copiaron a Marcos sin conocerse, ¿cómo coinciden los dos en agregar la misma frase? Para quienes sostienen que Mateo fue el primero, se explica porque Lucas conocía a Mateo.',
        { h: 'Las formas de esta postura' },
        'La propuesta de Griesbach, renovada por William Farmer y llamada hoy hipótesis de los dos evangelios, dice que Lucas usó a Mateo y que Marcos combinó a los dos, resumiéndolos. Otros, como la estudiosa alemana Eta Linnemann, que abandonó la crítica liberal después de su conversión, sostienen que los evangelistas escribieron de manera independiente, a partir de su propio testimonio y de la enseñanza oral de los apóstoles, sin copiar unos de otros.',
        { posturas: {
          titulo: '¿Cuál se escribió primero?',
          a: { n: 'Marcos primero', t: 'Mateo y Lucas usaron a Marcos, junto con una colección de dichos de Jesús (Q) o, según otros, Lucas usó también a Mateo. Se apoya en que casi todo Marcos está en los otros dos, en el orden, en el estilo y en que Marcos conserva expresiones que los otros aclaran. Es la postura más extendida hoy, también entre muchos estudiosos evangélicos.' },
          b: { n: 'Mateo primero', t: 'Mateo escribió primero, como dicen todos los testigos antiguos; Lucas lo conoció, y Marcos resumió a los dos o escribió por su cuenta lo que Pedro predicaba. Otros piensan que los tres dependen del testimonio oral de los apóstoles más que de un documento. Se apoya en la tradición de la iglesia y en las coincidencias de Mateo y Lucas contra Marcos.' },
          c: 'Este recurso no toma partido: las dos posturas son defendibles y ninguna doctrina depende de ellas. Las dos aceptan que los evangelios transmiten fielmente lo que Jesús hizo y enseñó, y que fueron escritos por los autores que la iglesia reconoció desde el principio. Lo que no se sigue son las teorías que niegan esa fidelidad (estación 10).'
        } },
        { ir: { t: 'Ver «Jesús escarnecido y golpeado» en la Armonía, con Coincidencias', a: ARM + '#escarnecido/coincidencias', marco: true } },
        { ir: { t: 'Ver «Testigos e investigación» en el estudio de Lucas', a: '../../../lucas/#introduccion/4' } }
      ],
      pensar: 'Mateo dejó la mesa de los impuestos para seguir a Jesús, y terminó escribiendo un evangelio. ¿Qué podría hacer Dios con tu vida si respondes a su llamado como respondió Mateo?'
    },
    {
      id: 'lo-que-no', n: 'Lo que no se sigue', ref: '2 Pedro 1:16; Lucas 1:4; Juan 19:35',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Teorías que no se siguen',
          cab: ['Teoría', 'Qué sostiene', 'Por qué no se sigue'],
          filas: [
            ['Crítica de las formas radical (Bultmann, desde 1921)', 'Los relatos de los evangelios nacieron en las comunidades cristianas, que habrían creado muchos dichos y hechos de Jesús según sus necesidades', 'Los testigos seguían vivos y eran conocidos (1 Co 15:6); los apóstoles cuidaban la enseñanza; el tiempo entre los hechos y los evangelios fue corto'],
            ['El Seminario de Jesús (desde 1985)', 'Votando con cuentas de colores, sus miembros concluyeron que Jesús dijo apenas una pequeña parte de lo que le atribuyen los evangelios', 'Parte de la premisa de que lo sobrenatural no ocurre; decide por votación lo que la evidencia no permite decidir'],
            ['Los evangelios como leyenda tardía', 'Los evangelios se escribieron mucho después, por personas que no conocieron a los testigos', 'Los evangelios reflejan con exactitud la geografía, los nombres y las costumbres de Judea antes del año 70; la iglesia antigua conocía a sus autores']
          ],
          nota: 'Estudiar las fuentes de los evangelios es legítimo. Lo que se rechaza son las conclusiones que dependen de negar de antemano lo sobrenatural o el testimonio de los testigos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque no os hemos dado a conocer el poder y la venida de nuestro Señor Jesucristo siguiendo fábulas artificiosas, sino como habiendo visto con nuestros propios ojos su majestad. Pues cuando él recibió de Dios Padre honra y gloria, le fue enviada desde la magnífica gloria una voz que decía: Este es mi Hijo amado, en el cual tengo complacencia. Y nosotros oímos esta voz enviada del cielo, cuando estábamos con él en el monte santo.', ref: '2 Pedro 1:16-18' }
      ],
      texto: [
        'Comparar los evangelios y preguntarse cómo se escribieron no es un ataque a la fe: Lucas mismo investigó sus fuentes (Lc 1:3). Pero en los últimos dos siglos algunos estudiosos usaron estas preguntas para llegar a conclusiones que niegan lo que los evangelios afirman. Conviene conocerlas, porque se repiten en documentales, libros populares y clases universitarias.',
        { h: 'La crítica de las formas radical' },
        'A comienzos del siglo XX, estudiosos alemanes como Rudolf Bultmann clasificaron los relatos de los evangelios por su forma: dichos, parábolas, milagros, controversias. Clasificar no es el problema. El problema es la conclusión de Bultmann: que muchos de esos relatos habrían sido creados por las comunidades cristianas y atribuidos después a Jesús. Esa idea olvida que los testigos seguían vivos. Pablo dice que la mayoría de los más de quinientos que vieron a Jesús resucitado vivían todavía cuando él escribía (1 Co 15:6). Una comunidad que inventara historias tendría que enfrentarse a quienes sabían lo que había pasado.',
        { h: 'El Seminario de Jesús' },
        'En 1985, un grupo de estudiosos de Estados Unidos fundó el Seminario de Jesús. Votaban con cuentas de colores si Jesús había dicho o no cada frase de los evangelios, y concluyeron que la gran mayoría no la dijo. Recibieron mucha atención en los medios. Pero partían de una premisa que nunca demostraron: que Jesús no pudo hacer milagros, anunciar su muerte y resurrección ni hablar de sí mismo como el Hijo de Dios. Con esa premisa, la conclusión ya estaba decidida antes de comenzar.',
        { h: 'Testigos, no fábulas' },
        'Los apóstoles sabían que su mensaje sería cuestionado y respondieron con el argumento del testigo: «no os hemos dado a conocer el poder y la venida de nuestro Señor Jesucristo siguiendo fábulas artificiosas, sino como habiendo visto con nuestros propios ojos su majestad» (2 P 1:16). Juan dice de la cruz: «el que lo vio da testimonio, y su testimonio es verdadero» (Jn 19:35). Los estudios recientes sobre la memoria y los testigos, como los de Richard Bauckham, han vuelto a dar peso a este testimonio.',
        'Las dos posturas de las estaciones 8 y 9 aceptan esa fidelidad. Por eso este recurso las presenta como defendibles, y no a las teorías de esta estación.'
      ],
      pensar: 'Pedro dijo que no siguió «fábulas artificiosas», sino lo que vio con sus propios ojos. ¿Cómo puedes responder con mansedumbre y firmeza a quien te dice que los evangelios son leyendas?'
    },
    {
      id: 'inspiracion', n: 'Fuentes e inspiración', ref: 'Juan 14:26; 2 Pedro 1:21; 2 Timoteo 3:16; Lucas 1:3',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: '../../hechos/img/hechos-lucas-escribe.webp', alt: 'Lucas escribe sobre un rollo de papiro a la luz de una lámpara de aceite, con otros rollos y tablillas a su alrededor', pie: 'Lucas escribe «después de haber investigado con diligencia» (Lc 1:3).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-inspiracion.svg', alt: 'Esquema de tres niveles: abajo los hechos de Jesús, en medio los testigos y la investigación del evangelista, arriba el evangelio escrito; a un costado, una franja que acompaña los tres niveles: el Espíritu Santo que recuerda, guía e inspira', pie: 'El Espíritu Santo acompaña todo el proceso: recuerda, guía e inspira.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho.', ref: 'Juan 14:26' }
      ],
      texto: [
        'Una pregunta queda flotando: si los evangelistas usaron fuentes, investigaron y quizás conocieron otros evangelios, ¿siguen siendo Palabra de Dios? La respuesta de la Biblia es clara: sí.',
        { h: 'Inspiración no es dictado' },
        'La Escritura afirma que «toda la Escritura es inspirada por Dios» (2 Ti 3:16) y que «los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21). Pero la inspiración no anula la persona del autor. Pablo escribe con su estilo, Juan con el suyo, y Lucas como un historiador cuidadoso. Dios no usó a los autores como máquinas de escribir: los guió en su investigación, en su memoria, en su elección de los hechos y en sus palabras, de modo que el resultado es a la vez palabra de un ser humano y Palabra de Dios.',
        'Por eso, que Lucas investigara «con diligencia» (Lc 1:3) no rebaja su evangelio. Al contrario: el Espíritu Santo lo guió precisamente en esa investigación. Lo mismo vale si Mateo usó a Marcos, o si Marcos resumió a Mateo: el texto que resultó es el que Dios quiso dar a su iglesia.',
        { h: 'El Espíritu que recuerda' },
        'Jesús preparó a sus discípulos para esto. La noche antes de morir les prometió: «el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho» (Jn 14:26). Los apóstoles no dependían solo de su memoria natural: el Espíritu Santo les recordaba las palabras de Jesús y les daba a entender su sentido.',
        { h: 'Cuatro evangelios, una sola verdad' },
        'Dios no nos dio una biografía única de Jesús, sino cuatro evangelios. Cada uno tiene su propósito: Mateo presenta al Rey prometido, Marcos al Siervo en acción, Lucas al Salvador de todos y Juan al Hijo de Dios. Las semejanzas muestran que cuentan la misma historia; las diferencias, que son testimonios distintos. Por eso la iglesia nunca quiso reemplazarlos por una sola narración armonizada.',
        { ejercicio: {
          pregunta: 'Si Lucas usó fuentes escritas y testigos, ¿qué significa eso para la inspiración de su evangelio?',
          opciones: [
            { t: 'Que su evangelio tiene menos autoridad que los demás.', ok: false, por_que: 'Toda la Escritura es inspirada por Dios. Usar fuentes no disminuye la autoridad del texto final.' },
            { t: 'Que el Espíritu Santo lo guió también en su investigación y en lo que escribió.', ok: true, por_que: 'Así lo muestra el propio Lucas al presentar su trabajo, y así lo enseña la Escritura sobre su inspiración.' },
            { t: 'Que la inspiración solo alcanza a las palabras de Jesús, no al relato.', ok: false, por_que: 'La inspiración alcanza a «toda la Escritura», no solo a las palabras de Jesús.' }
          ],
          explicacion: 'La inspiración no anula el trabajo humano: lo guía. Los evangelistas investigaron, recordaron y escribieron, y el Espíritu Santo hizo que lo escrito fuera Palabra de Dios.'
        } }
      ],
      pensar: 'El mismo Espíritu que recordó a los apóstoles las palabras de Jesús te ayuda a entenderlas hoy. ¿Le pides al Espíritu Santo que te enseñe cuando abres la Biblia?'
    },
    {
      id: 'juan', n: 'Juan, el cuarto testigo', ref: 'Juan 20:30-31; Juan 21:24-25; Juan 6:1-15',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: '../../introduccion-nuevo-testamento/img/int-juan-efeso.webp', alt: 'En una casa de Éfeso, Juan, anciano de barba blanca, dicta a un discípulo joven que escribe en un papiro, mientras algunos ancianos de la iglesia escuchan', pie: 'Juan escribe su evangelio en Éfeso, hacia el final del siglo I.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Juan comparte y lo que agrega',
          cab: ['Comparte con los sinópticos', 'Solo en Juan'],
          filas: [
            ['Juan el Bautista y el comienzo del ministerio', 'Las bodas de Caná y Nicodemo'],
            ['La alimentación de los cinco mil (los cuatro evangelios)', 'La samaritana y el paralítico de Betesda'],
            ['Jesús camina sobre el agua', 'El discurso del pan de vida y los «Yo soy»'],
            ['La unción en Betania y la entrada en Jerusalén', 'La resurrección de Lázaro'],
            ['La última cena, el arresto, el juicio y la cruz', 'El lavamiento de pies y Juan 13 a 17'],
            ['La tumba vacía y las apariciones', 'Tomás y el desayuno junto al lago (Juan 21)']
          ],
          nota: 'Cerca del noventa por ciento del contenido de Juan no está en los sinópticos.'
        } },
        { tipo: 'imagen', titulo: 'Foto', src: '../../de-la-biblia-a-nosotros/img/papiro-p52.webp', alt: 'Fragmento de papiro con forma aproximadamente triangular, del tamaño de una tarjeta, con letras griegas en tinta oscura', pie: 'Papiro 52 (Biblioteca John Rylands, Mánchester): Juan 18:31-33, de la primera mitad del siglo II.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true }
      ],
      texto: [
        'Juan no forma parte del problema sinóptico, porque su evangelio es muy distinto de los otros tres. Pero completa el cuadro, y la Armonía lo pone en su lugar junto a ellos.',
        { h: 'Un camino propio' },
        'Juan tiene pocos pasajes en común con los sinópticos. No cuenta el nacimiento en Belén, ni la transfiguración, ni la institución de la santa cena, y no registra parábolas como las de los otros tres. En cambio, cuenta varios viajes de Jesús a Jerusalén para las fiestas, largas conversaciones (Nicodemo, la samaritana), siete señales y los grandes discursos de Jesús, entre ellos la enseñanza de la última noche (Juan 13 a 17). Cerca del noventa por ciento de su contenido es propio.',
        { h: 'Por qué es distinto' },
        'Juan escribió probablemente en Éfeso, hacia el final del siglo I, cuando los otros evangelios ya circulaban. Clemente de Alejandría dice que Juan, sabiendo que los hechos externos ya estaban contados en los otros evangelios, escribió un evangelio espiritual. Juan mismo explica su método: Jesús hizo «muchas otras señales» que no están escritas en su libro, y las que eligió «se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:30-31).',
        { h: 'Un testigo que confirma' },
        'Precisamente porque no depende de los sinópticos, Juan es un testigo independiente. Confirma lo esencial: el ministerio de Juan el Bautista, la alimentación de los cinco mil, Jesús caminando sobre el agua, la unción en Betania, la entrada en Jerusalén, la última cena, la traición, la negación de Pedro, el juicio ante Pilato, la cruz y la tumba vacía. Y añade lo que los otros no dijeron. Sus datos de tiempo, como las tres Pascuas del ministerio, son los que permiten calcular su duración.',
        'El papiro 52, de la primera mitad del siglo II, conserva unos versículos de Juan 18. Fue hallado en Egipto, lejos de Éfeso, y muestra que el evangelio de Juan ya se copiaba y circulaba pocas décadas después de escrito.',
        { ir: { t: 'Ver la alimentación de los cinco mil en la Armonía (los cuatro evangelios)', a: ARM + '#cinco-mil/coincidencias', marco: true } }
      ],
      pensar: 'Juan escribió para que sus lectores creyeran y tuvieran vida en el nombre de Jesús (Jn 20:31). ¿Qué señal de Jesús ha fortalecido más tu fe?'
    }
  ];

  /* ---------------- Taller ---------------- */
  const taller = [
    {
      id: 'taller', n: 'Taller: estudia un pasaje paralelo', ref: 'Mateo 8:23-27; Marcos 4:35-41; Lucas 8:22-25; Mateo 16:13-20; Marcos 8:27-30; Lucas 9:18-20',
      visual: [
        { tipo: 'imagen', titulo: 'Escena', src: 'img/sin-grupo-estudio.webp', alt: 'Sobre una mesa de madera, tres Biblias abiertas en los evangelios, un cuaderno con notas, lápices de colores y una tableta con tres columnas de texto; las manos de varias personas señalan versículos', pie: 'Comparar los evangelios es un buen ejercicio para el estudio personal y en grupo.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La tempestad calmada: lo que dicen los discípulos y Jesús',
          cab: ['', 'Mateo 8', 'Marcos 4', 'Lucas 8'],
          filas: [
            ['Los discípulos', '¡Señor, sálvanos, que perecemos!', 'Maestro, ¿no tienes cuidado que perecemos?', '¡Maestro, Maestro, que perecemos!'],
            ['Jesús a los discípulos', '¿Por qué teméis, hombres de poca fe?', '¿Por qué estáis así amedrentados? ¿Cómo no tenéis fe?', '¿Dónde está vuestra fe?'],
            ['Cuándo les habla', 'Antes de calmar el mar', 'Después de calmar el mar', 'Después de calmar el mar']
          ],
          nota: 'Texto de la Reina-Valera 1960 (Mt 8:25-26; Mr 4:38-40; Lc 8:24-25).'
        } }
      ],
      texto: [
        'Ahora te toca a ti. Este taller te propone un método sencillo para estudiar cualquier pasaje que aparece en más de un evangelio, usando la Armonía.',
        { h: 'El método en cinco pasos' },
        '1. Abre el pasaje en la Armonía y lee primero cada evangelio completo, columna por columna. 2. Activa Coincidencias y observa lo que comparten. 3. Busca las palabras en negrita: lo que solo registra un evangelio. 4. Pregúntate por qué cada evangelista incluyó o destacó ese detalle, pensando en sus lectores y en el propósito de su libro. 5. Junta todo: ¿qué ves de Jesús al leer los relatos juntos que no verías leyendo uno solo?',
        { h: 'Primer pasaje: la tempestad' },
        'Abre la tempestad calmada y compara lo que dicen los discípulos en la tabla. En Mateo es una oración: «¡Señor, sálvanos, que perecemos!» (Mt 8:25). En Marcos, un reproche: «Maestro, ¿no tienes cuidado que perecemos?» (Mr 4:38). En Lucas, un grito: «¡Maestro, Maestro, que perecemos!» (Lc 8:24). En una barca que se hunde, varios hablan a la vez; cada evangelista recogió una voz.',
        { ir: { t: 'Abrir la tempestad calmada en la Armonía, con Coincidencias', a: ARM + '#tempestad/coincidencias', marco: true } },
        { ejercicio: {
          pregunta: 'En Mateo, Jesús habla a los discípulos antes de calmar el mar; en Marcos y Lucas, después. ¿Cuál es la mejor manera de entender esta diferencia?',
          opciones: [
            { t: 'Uno de los evangelistas se equivocó en el orden de los hechos.', ok: false, por_que: 'No hace falta suponer un error. Los evangelistas no siempre narran en orden estricto, y Jesús pudo hablar antes y después.' },
            { t: 'Mateo destaca la falta de fe de los discípulos y la pone primero; los otros siguen la secuencia de los hechos.', ok: true, por_que: 'Mateo, que agrupa y ordena para enseñar, pone en primer plano la lección sobre la fe.' },
            { t: 'Fueron dos tempestades distintas el mismo día.', ok: false, por_que: 'Los tres relatos coinciden en el lugar, el momento y los detalles; se trata del mismo hecho.' }
          ],
          explicacion: 'Cada evangelista ordena su relato con un propósito. Mateo subraya la enseñanza; Marcos y Lucas, la secuencia. El hecho es el mismo.'
        } },
        { h: 'Segundo pasaje: la confesión de Pedro' },
        'Abre ahora la confesión de Pedro. Marcos registra: «Tú eres el Cristo» (Mr 8:29). Lucas: «El Cristo de Dios» (Lc 9:20). Mateo, el más completo: «Tú eres el Cristo, el Hijo del Dios viviente» (Mt 16:16).',
        { ir: { t: 'Abrir la confesión de Pedro en la Armonía, con Coincidencias', a: ARM + '#confesion-pedro/coincidencias', marco: true } },
        { ejercicio: {
          pregunta: '¿Qué conclusión es correcta al comparar las tres versiones de la confesión de Pedro?',
          opciones: [
            { t: 'Las tres dicen lo mismo en lo esencial: Jesús es el Mesías; Mateo registra la confesión de forma más completa.', ok: true, por_que: 'Los tres registran que Pedro reconoció a Jesús como el Cristo; Mateo conserva además «el Hijo del Dios viviente», importante para sus lectores judíos.' },
            { t: 'Pedro dijo tres frases distintas en tres momentos diferentes.', ok: false, por_que: 'Los tres evangelios ubican la confesión en el mismo momento y lugar, cerca de Cesarea de Filipo.' },
            { t: 'Marcos rebaja la confesión porque no creía que Jesús fuera Hijo de Dios.', ok: false, por_que: 'Marcos comienza su evangelio presentando a «Jesucristo, Hijo de Dios» (Mr 1:1).' }
          ],
          explicacion: 'Un evangelista puede resumir y otro dar la frase completa. Leídos juntos, los tres nos dan la confesión en toda su riqueza.'
        } },
        { ejercicio: {
          pregunta: 'Al usar el botón Coincidencias en un pasaje paralelo, ¿qué conviene hacer con las palabras en negrita?',
          opciones: [
            { t: 'Ignorarlas, porque solo importa lo que comparten los evangelios.', ok: false, por_que: 'Lo propio de cada evangelista también es Palabra de Dios y muchas veces muestra su propósito.' },
            { t: 'Preguntarse por qué ese evangelista incluyó ese detalle.', ok: true, por_que: 'Lo exclusivo suele revelar el énfasis de cada evangelio y lo que quería enseñar a sus lectores.' },
            { t: 'Considerarlas un agregado posterior al texto original.', ok: false, por_que: 'Lo exclusivo de un evangelio es parte de su texto: el evangelista lo escribió así.' }
          ],
          explicacion: 'Las coincidencias muestran la historia común; lo exclusivo, el énfasis de cada evangelista. Las dos cosas enriquecen el estudio.'
        } }
      ],
      pensar: 'Los discípulos en la barca no sabían todavía quién era Jesús: «¿Quién es éste, que aun a los vientos y a las aguas manda, y le obedecen?» (Lc 8:25). Después de estudiar los evangelios juntos, ¿cómo responderías tú esa pregunta?'
    }
  ];

  window.RUTA_DATA = {
    titulo: 'El problema sinóptico',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../../',
    volver: { t: 'Armonía de los evangelios', a: '../' },
    rutas: [
      { id: 'sinoptico', grupo: 'Armonía de los evangelios', n: 'El problema sinóptico', info: 'Por qué Mateo, Marcos y Lucas se parecen tanto y en qué se diferencian', estaciones: [...N.datos, ...N.explicaciones1, ...explicaciones2, ...taller] }
    ]
  };
})();
