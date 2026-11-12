(() => {
  /* ---------------- VIII. Creación y esperanza ---------------- */
  const esperanza = [
    {
      id: 'ciencia', n: 'Fe y ciencia', ref: 'Salmos 111:2; Proverbios 25:2; Romanos 1:20; Colosenses 1:17; Hebreos 11:3',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Científicos creyentes que fundaron la ciencia moderna',
          cab: ['Científico', 'Aporte', 'Lo que dijo o creyó'],
          filas: [
            ['Johannes Kepler (1571–1630)', 'Leyes del movimiento de los planetas', 'Veía la astronomía como una manera de conocer la obra de Dios'],
            ['Blaise Pascal (1623–1662)', 'Presión de los fluidos, probabilidad', 'Escribió una defensa de la fe cristiana, los Pensamientos'],
            ['Robert Boyle (1627–1691)', 'Padre de la química moderna', 'Financió la traducción de la Biblia a otras lenguas'],
            ['Isaac Newton (1643–1727)', 'Gravitación universal', 'Escribió más sobre la Biblia y la profecía que sobre física'],
            ['Gregor Mendel (1822–1884)', 'Leyes de la herencia genética', 'Monje y abad agustino'],
            ['Michael Faraday (1791–1867)', 'Electricidad y magnetismo', 'Anciano de una pequeña congregación cristiana de Londres'],
          ],
          nota: 'La ciencia nació en buena parte de la convicción de que el universo es ordenado porque lo hizo un Dios racional.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/111/1-4', ref: 'Salmos 111:1-4' }
      ],
      texto: [
        'Muchas personas creen que la fe y la ciencia son enemigas, y que un creyente tiene que elegir entre la Biblia y el laboratorio. La historia muestra otra cosa. Muchos de los fundadores de la ciencia moderna fueron creyentes que estudiaban la naturaleza porque creían que Dios la había hecho con orden. La tabla nombra a algunos.',
        { h: 'Por qué la ciencia es posible' },
        'La ciencia supone que el universo es ordenado, que sigue leyes estables y que la mente humana puede entenderlo. No es obvio que deba ser así. La Biblia da la razón: un Dios sabio creó el mundo con orden (Jer 10:12), sostiene todas las cosas (Col 1:17) y creó al ser humano a su imagen, capaz de pensar y descubrir. El salmista dice: «Grandes son las obras de Jehová, Buscadas de todos los que las quieren» (Sal 111:2). Y Proverbios agrega: «Gloria de Dios es encubrir un asunto; Pero honra del rey es escudriñarlo» (Pr 25:2). Investigar la creación puede ser un acto de adoración.',
        { h: 'Dos libros, un autor' },
        'Los antiguos cristianos hablaban de dos libros de Dios: el libro de la naturaleza y el libro de la Escritura. Los dos vienen del mismo autor y no pueden contradecirse cuando se leen bien. Cuando parece haber un conflicto, puede ser que se esté leyendo mal la naturaleza, por supuestos equivocados, o que se esté leyendo mal la Escritura, haciéndole decir lo que no dice. En el siglo XVII, muchos teólogos pensaban que la Biblia enseñaba que el sol giraba alrededor de la tierra; al final se entendió que el texto hablaba con el lenguaje de la observación.',
        { h: 'Lo que la ciencia no puede responder' },
        'La ciencia puede describir cómo funciona el universo, pero no puede responder por qué existe algo en lugar de nada, ni si la vida tiene propósito, ni qué es bueno y qué es malo. Esas preguntas pertenecen a la fe y a la revelación. «Por la fe entendemos haber sido constituido el universo por la palabra de Dios» (He 11:3). Muchos científicos de hoy, creyentes y no creyentes, se asombran de lo ajustadas que son las leyes del universo para permitir la vida: si algunas constantes de la física fueran apenas distintas, no podríamos existir. Para el creyente, ese ajuste es una huella del Creador.',
        { ejercicio: {
          pregunta: '¿Qué enseña Proverbios 25:2 sobre investigar la creación?',
          opciones: [
            { t: 'Que Dios esconde cosas en su obra y que buscarlas es una tarea honrosa para el ser humano.', ok: true, por_que: 'Correcto: investigar lo que Dios hizo no es rebeldía, sino una manera de honrarlo.' },
            { t: 'Que el creyente no debe investigar, porque lo que Dios encubrió está prohibido.', ok: false, por_que: 'El versículo dice lo contrario: escudriñar es «honra del rey».' },
            { t: 'Que la ciencia y la Biblia hablan de cosas que nunca se tocan.', ok: false, por_que: 'Las dos hablan del mismo mundo creado por Dios, aunque con propósitos distintos.' }
          ],
          explicacion: 'La fe bíblica no teme a la investigación: Dios es el autor de lo que la ciencia estudia.'
        } }
      ],
      pensar: '¿Has sentido alguna vez que tenías que elegir entre tu fe y lo que aprendías en el colegio o la universidad? ¿Qué te enseña la historia de estos científicos creyentes?'
    },
    {
      id: 'cuidar', n: 'Mayordomos de la creación', ref: 'Génesis 1:28; 2:15; Salmos 24:1; Levítico 25:23; Deuteronomio 20:19; Proverbios 12:10; Apocalipsis 11:18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El cuidado de la creación en la Biblia',
          cab: ['Texto', 'Lo que enseña'],
          filas: [
            ['Gn 2:15', 'Labrar y guardar: cultivar y cuidar'],
            ['Sal 24:1', 'La tierra es de Jehová, no nuestra'],
            ['Lv 25:2-5, 23', 'La tierra descansa el año sabático; Dios es su dueño'],
            ['Dt 20:19', 'En la guerra, no destruir los árboles frutales'],
            ['Dt 22:6-7', 'No tomar la madre con los polluelos del nido'],
            ['Pr 12:10', 'El justo cuida de la vida de su animal'],
            ['Jon 4:11', 'Dios tiene piedad de Nínive «y muchos animales»'],
            ['Mt 6:26', 'El Padre alimenta a las aves'],
            ['Ap 11:18', 'Dios destruirá a los que destruyen la tierra'],
          ],
          nota: 'Cuidar la creación no es adorarla: es honrar a su Creador.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/24/1-2', ref: 'Salmos 24:1-2' }
      ],
      texto: [
        'Dios puso al ser humano en el huerto «para que lo labrara y lo guardase» (Gn 2:15), y le encargó señorear sobre la creación (Gn 1:28). Ese encargo no terminó con la caída. Sigue vigente, aunque ahora se cumple en un mundo herido por el pecado.',
        { h: 'No somos los dueños' },
        'La base de todo es una frase sencilla: «De Jehová es la tierra y su plenitud» (Sal 24:1). Dios dijo a Israel: «la tierra mía es; pues vosotros forasteros y extranjeros sois para conmigo» (Lv 25:23). El ser humano no es dueño de la creación, sino administrador, un mayordomo que rendirá cuentas. Por eso la ley de Moisés incluía normas de cuidado: dejar descansar la tierra cada siete años, no talar los árboles frutales en la guerra, no destruir un nido entero, dar descanso a los animales el día de reposo.',
        'Proverbios dice que «El justo cuida de la vida de su bestia» (Pr 12:10). La crueldad con los animales es una señal de un corazón impío. Y Dios mismo se preocupa por su creación: al final del libro de Jonás, explica su compasión por Nínive mencionando a sus habitantes y también a sus «muchos animales» (Jon 4:11).',
        { h: 'Dos errores opuestos' },
        'Hay dos maneras de equivocarse. La primera es tratar la creación como si fuera solo un recurso para usar y desechar, sin pensar en el Creador ni en las generaciones futuras. Eso contradice el encargo de guardar. La segunda es adorar la naturaleza, tratándola como si fuera divina o como si el ser humano fuera un intruso en ella. Pablo describe ese error: «honrando y dando culto a las criaturas antes que al Creador» (Ro 1:25). La Biblia ama la creación porque ama a su Creador, y pone al ser humano en el centro, no como tirano, sino como siervo responsable.',
        { h: 'Una tarea práctica' },
        'Cuidar la creación incluye cosas sencillas: no derrochar el agua ni la comida, no ensuciar los lugares públicos, tratar bien a los animales, plantar y cuidar, y apoyar decisiones que protejan la tierra y a las personas pobres que más sufren cuando se daña. Apocalipsis advierte que, en el juicio, Dios destruirá «a los que destruyen la tierra» (Ap 11:18). El creyente cuida la tierra no porque sea su dios, sino porque es la obra de su Dios.'
      ],
      pensar: 'La tierra es de Jehová y tú eres su mayordomo. ¿Qué hábito de tu casa o de tu trabajo podrías cambiar esta semana para cuidar mejor lo que Dios creó?'
    },
    {
      id: 'gime', n: 'La creación que gime', ref: 'Romanos 8:18-25; Génesis 3:17-19; Isaías 11:6-9',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ro/8/18-23', ref: 'Romanos 8:18-23' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres gemidos en Romanos 8',
          cab: ['Quién gime', 'Por qué', 'Texto'],
          filas: [
            ['La creación', 'Está sujeta a corrupción y espera ser libertada', 'Ro 8:20-22'],
            ['Los creyentes', 'Esperan la redención de su cuerpo', 'Ro 8:23'],
            ['El Espíritu Santo', 'Intercede por nosotros con gemidos indecibles', 'Ro 8:26'],
          ],
          nota: 'Los tres gemidos son como dolores de parto: anuncian que algo nuevo va a nacer.'
        } }
      ],
      texto: [
        'Si Dios creó todo «bueno en gran manera», ¿por qué hay terremotos, sequías, enfermedades y muerte? Pablo responde en Romanos 8 con una imagen poderosa: la creación entera está gimiendo.',
        { h: 'Sujeta a vanidad' },
        '«Porque la creación fue sujetada a vanidad, no por su propia voluntad, sino por causa del que la sujetó en esperanza» (Ro 8:20). La palabra «vanidad» significa frustración, incapacidad de cumplir plenamente su propósito. Cuando el ser humano pecó, Dios sometió la creación a esa condición: «maldita será la tierra por tu causa» (Gn 3:17). La creación no pecó; sufre las consecuencias del pecado de quien debía cuidarla. El mundo actual es bueno, pero está herido.',
        { h: 'Dolores de parto' },
        'Pero el gemido de la creación no es el de un moribundo, sino el de una mujer que va a dar a luz: «toda la creación gime a una, y a una está con dolores de parto hasta ahora» (Ro 8:22). Los dolores de parto son reales y duelen, pero anuncian una vida nueva. La creación fue sujetada «en esperanza»: Dios no la abandonó, sino que la puso en espera de su liberación.',
        { h: 'Esperando con nosotros' },
        'Lo sorprendente es que la creación espera lo mismo que los creyentes: «el anhelo ardiente de la creación es el aguardar la manifestación de los hijos de Dios» (Ro 8:19). Su liberación está unida a la nuestra. Cuando Cristo vuelva y los creyentes reciban cuerpos glorificados, la creación también será libertada «de la esclavitud de corrupción, a la libertad gloriosa de los hijos de Dios» (Ro 8:21). La salvación que Dios prepara no es solo para las almas, sino para los cuerpos y para la tierra.',
        'La tabla muestra que en Romanos 8 hay tres gemidos: el de la creación, el de los creyentes y el del Espíritu Santo, que intercede por nosotros. Los creyentes «tenemos las primicias del Espíritu» (Ro 8:23): la vida nueva que el Espíritu ya nos da es como el primer fruto de la cosecha, la garantía de que vendrá el resto.',
        { h: 'Un anticipo en el reino' },
        'Los profetas anunciaron un tiempo en que «Morará el lobo con el cordero» y «No harán mal ni dañarán en todo mi santo monte» (Is 11:6, 9). En la lectura premilenial que sigue este sitio, estas promesas se cumplirán en el reino de Cristo sobre la tierra, el milenio, como un anticipo de la renovación total. Y después vendrán los cielos nuevos y la tierra nueva.',
        { ir: { t: 'Ver «El milenio» en Los últimos tiempos', a: '../../escatologia/#eventos/20' } }
      ],
      pensar: 'Pablo dice que las aflicciones de este tiempo no son comparables con la gloria que vendrá (Ro 8:18). ¿Qué dolor de tu vida necesitas mirar como un «dolor de parto» y no como un final?'
    },
    {
      id: 'nueva', n: 'Cielos nuevos y tierra nueva', ref: 'Isaías 65:17-25; 2 Pedro 3:10-13; Apocalipsis 21:1-5; 22:1-5',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../escatologia/img/esc-nueva-jerusalen.webp', alt: 'La nueva Jerusalén desciende del cielo, una ciudad resplandeciente como piedra de jaspe, con muros de piedras preciosas, doce puertas de perla y calles de oro transparente como vidrio, sobre una tierra nueva llena de luz', pie: '«Vi un cielo nuevo y una tierra nueva» (Apocalipsis 21:1).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-genesis-apocalipsis.svg', alt: 'Dos columnas enfrentadas: a la izquierda Génesis 1 a 3, a la derecha Apocalipsis 21 y 22. La creación de los cielos y la tierra frente a los cielos nuevos y la tierra nueva; las tinieblas y la luz del sol frente a una ciudad sin noche; el río del Edén frente al río de agua de vida; el árbol de vida prohibido frente al árbol de vida para las naciones; la maldición frente a «no habrá más maldición»; Dios que se pasea en el huerto frente al tabernáculo de Dios con los hombres', pie: 'El final de la Biblia responde a su comienzo: lo que se perdió en el Edén se recupera, y más.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ap/21/1-5', ref: 'Apocalipsis 21:1-5' }
      ],
      texto: [
        'La historia de la Biblia comienza con «En el principio creó Dios los cielos y la tierra» (Gn 1:1) y termina con «Vi un cielo nuevo y una tierra nueva» (Ap 21:1). Entre esas dos frases está toda la historia de la salvación. El Dios que creó el mundo no lo abandonará al pecado: lo hará nuevo.',
        { h: 'Lo que Isaías anunció' },
        'Isaías ya lo había prometido: «Porque he aquí que yo crearé nuevos cielos y nueva tierra; y de lo primero no habrá memoria» (Is 65:17). Pedro lo repite: «nosotros esperamos, según sus promesas, cielos nuevos y tierra nueva, en los cuales mora la justicia» (2 P 3:13). Pedro describe un fuego que purificará la creación, como el diluvio la limpió en el pasado (2 P 3:6-7, 10). Los intérpretes discuten si la creación actual será destruida y reemplazada, o purificada y renovada; en los dos casos, lo que vendrá será una tierra real, no un mundo de espíritus sin cuerpo.',
        { h: 'Génesis y Apocalipsis' },
        'El esquema compara los primeros capítulos de la Biblia con los últimos. En el Edén había un río; en la nueva Jerusalén, «un río limpio de agua de vida» que sale del trono de Dios y del Cordero (Ap 22:1). En el Edén, el árbol de vida quedó custodiado por querubines; en la ciudad de Dios, el árbol de vida da fruto cada mes, y sus hojas son «para la sanidad de las naciones» (Ap 22:2). En el Edén cayó una maldición; en la nueva creación «no habrá más maldición» (Ap 22:3). En el principio, Dios creó la luz; al final, la ciudad no necesita sol, porque Dios la ilumina (Ap 22:5).',
        { h: 'Más que el Edén' },
        'La nueva creación no es un simple regreso al principio. El Edén era un huerto; la nueva Jerusalén es una ciudad-jardín, con gente de todas las naciones. En el Edén, Dios visitaba al ser humano; en la nueva creación, «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos» (Ap 21:3). Adán podía caer; los redimidos estarán para siempre con el Señor. Y en el centro de todo no está un árbol, sino el Cordero que fue inmolado. El que hizo todas las cosas dice: «He aquí, yo hago nuevas todas las cosas» (Ap 21:5).',
        { ir: { t: 'Ver «Cielos nuevos y tierra nueva» en Los últimos tiempos', a: '../../escatologia/#eventos/22' } }
      ],
      pensar: 'Dios enjugará toda lágrima y hará nuevas todas las cosas. ¿Qué lágrima tuya espera ese día? ¿Cómo cambia tu presente saber cómo termina la historia?'
    },
    {
      id: 'adorar', n: 'Adorar al Creador', ref: 'Apocalipsis 4:11; 14:7; Salmos 148; Nehemías 9:6; Romanos 11:36',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/148/1-5', ref: 'Salmos 148:1-5' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Repaso: Génesis 1 a 11 en ocho verdades',
          cab: ['Verdad', 'Texto clave'],
          filas: [
            ['Dios creó todo de la nada por su palabra', 'Gn 1:1; He 11:3'],
            ['El Padre, el Hijo y el Espíritu crearon juntos', 'Gn 1:2; Jn 1:3'],
            ['La creación es buena y ordenada', 'Gn 1:31'],
            ['El ser humano es imagen de Dios, varón y hembra', 'Gn 1:27; 2:7'],
            ['El pecado trajo la muerte y la maldición', 'Gn 3; Ro 5:12'],
            ['Dios juzga el pecado y salva por gracia', 'Gn 6:8; 1 P 3:20'],
            ['Todas las naciones son una sola familia', 'Gn 10; Hch 17:26'],
            ['Dios prometió bendecir a todas las familias por Abraham', 'Gn 12:3; Ga 3:8'],
          ],
          nota: 'Sobre estas verdades se construye el resto de la Biblia.'
        } }
      ],
      texto: [
        'Este recurso comenzó con los ancianos que adoran ante el trono de Dios porque Él creó todas las cosas (Ap 4:11). Termina igual. La doctrina de la creación no es solo un tema para estudiar o discutir: es un motivo para adorar.',
        { h: 'Toda la creación alaba' },
        'El Salmo 148 llama a toda la creación a alabar a Dios: los ángeles, el sol y la luna, las estrellas, los cielos de los cielos y las aguas que están sobre ellos. Luego desciende a la tierra: los monstruos marinos, el fuego y el granizo, los montes, los árboles, las bestias, las aves, los reyes, los jóvenes, las doncellas, los ancianos y los niños. La razón es la misma para todos: «Alaben el nombre de Jehová; Porque él mandó, y fueron creados» (Sal 148:5). La creación entera es un coro, y el ser humano está llamado a ponerle palabras.',
        { h: 'El evangelio eterno' },
        'En Apocalipsis, un ángel anuncia «el evangelio eterno» a toda nación, tribu, lengua y pueblo, y su mensaje empieza por la creación: «Temed a Dios, y dadle gloria… y adorad a aquel que hizo el cielo y la tierra, el mar y las fuentes de las aguas» (Ap 14:7). Hasta el final de la historia, reconocer al Creador es el primer paso para volver a Dios.',
        { h: 'Lo que aprendiste' },
        'La tabla resume las verdades principales de Génesis 1 a 11. Dios creó todo de la nada, por su palabra, como obra del Padre, del Hijo y del Espíritu. La creación es buena y ordenada. El ser humano fue creado a imagen de Dios, varón y hembra, del polvo y con el aliento de Dios. El pecado trajo muerte y maldición, y se extendió de un fruto a un asesinato, de un asesinato a una tierra llena de violencia, y de allí a una humanidad unida contra Dios. Dios juzgó con el diluvio y dispersó en Babel, pero siempre con gracia: la promesa a Eva, la señal de Caín, el arca de Noé, el arco iris y, al final, el llamado de Abraham. Los creyentes leen de distintas maneras los días de Génesis 1, pero todos confiesan al mismo Creador.',
        'Y todo apunta a Cristo: el Verbo por quien todo fue hecho, el postrer Adán, el descendiente de la mujer, el arca de salvación, el Señor del Pentecostés y el que hará nuevas todas las cosas. «Porque de él, y por él, y para él, son todas las cosas. A él sea la gloria por los siglos. Amén» (Ro 11:36).',
        { ejercicio: {
          pregunta: '¿Cuál es el hilo que une la creación, el diluvio, Babel y el llamado de Abraham en Génesis 1 a 12?',
          opciones: [
            { t: 'Que Dios, el Creador, juzga el pecado pero sigue obrando con gracia para cumplir su propósito de bendecir a la humanidad.', ok: true, por_que: 'Correcto: en cada juicio hay una gracia, y todo lleva a la promesa de bendición para todas las familias de la tierra.' },
            { t: 'Que la humanidad se fue haciendo cada vez mejor gracias a sus inventos.', ok: false, por_que: 'Génesis muestra lo contrario: el progreso técnico no impidió que el pecado se extendiera.' },
            { t: 'Que Dios abandonó a la humanidad después de la caída y solo se ocupó de Israel.', ok: false, por_que: 'Dios cuidó a toda la humanidad (Noé, el pacto con toda carne) y eligió a Abraham para bendecir a todas las naciones.' }
          ],
          explicacion: 'Génesis 1 a 11 es la historia de un Creador fiel que no abandona su obra.'
        } }
      ],
      pensar: 'Si toda la creación alaba a Dios, ¿qué te impide hoy unirte a ese coro? Sal esta noche, mira el cielo y dale gracias por algo que Él creó.'
    }
  ];

  const C = window.__CREACION;
  delete window.__CREACION;
  window.RUTA_DATA = {
    titulo: 'La creación y los orígenes',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'creador', grupo: 'El Creador y su obra', n: 'I. Dios, el Creador', info: 'Creación de la nada, el Dios trino, el propósito de la creación y los mitos vecinos', estaciones: C.creador },
      { id: 'dias', grupo: 'El Creador y su obra', n: 'II. Los seis días y el reposo', info: 'Formar y llenar, día por día, el ser humano y el séptimo día', estaciones: C.dias },
      { id: 'leer', grupo: 'El Creador y su obra', n: 'III. Cómo leer Génesis 1', info: 'Los días y la edad de la tierra: cinco lecturas, la evolución y un taller', estaciones: C.leer },
      { id: 'eden', grupo: 'De la creación a Babel', n: 'IV. El Edén y la primera pareja', info: 'Del polvo y el aliento, el huerto, el trabajo, la mujer, el matrimonio y la caída', estaciones: C.eden },
      { id: 'cain', grupo: 'De la creación a Babel', n: 'V. De Caín a Noé', info: 'Caín y Abel, los dos linajes, las genealogías, Enoc y los hijos de Dios', estaciones: C.cain },
      { id: 'diluvio', grupo: 'De la creación a Babel', n: 'VI. El diluvio', info: 'El arca, el año del diluvio, universal o local, otros relatos, Ararat y el pacto', estaciones: C.diluvio },
      { id: 'babel', grupo: 'De la creación a Babel', n: 'VII. Babel y las naciones', info: 'Los hijos de Noé, la tabla de las naciones, Nimrod, la torre, Pentecostés y Abraham', estaciones: C.babel },
      { id: 'esperanza', grupo: 'Creación y esperanza', n: 'VIII. Creación y esperanza', info: 'Fe y ciencia, el cuidado de la creación, la creación que gime y la nueva creación', estaciones: esperanza }
    ]
  };
})();
