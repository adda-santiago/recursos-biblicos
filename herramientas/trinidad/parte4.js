/* Dios y la Trinidad · rutas V. La doctrina en la historia y VI. Textos difíciles (ver encabezado en parte1.js) */
(() => {
  const MED = [[28, 4], [44, 42]];        // Mediterráneo oriental y occidental
  const ORIENTE = [[29.5, 22], [42.5, 40]]; // Egipto, Asia Menor y Siria
  const IMP = ['roma-117'];

  /* ---------------- V. La doctrina en la historia ---------------- */
  const historia = [
    {
      id: 'primitiva', n: 'La iglesia primitiva y la palabra «Trinidad»', ref: 'Mateo 28:19; 2 Corintios 13:14; Judas 3', fecha: [100, 250],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MED, capas: IMP, lugares: ['roma', 'cartago', 'alejandria', 'antioquia', 'efeso', 'jerusalen'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperio-romano/img/roma-catacumbas.webp', alt: 'Cristianos reunidos a la luz de lámparas de aceite en una galería subterránea de las catacumbas de Roma', pie: 'Los primeros cristianos confesaban al Padre, al Hijo y al Espíritu antes de tener fórmulas teológicas.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Testigos de los siglos II y III',
          cab: ['Fecha aprox.', 'Testigo', 'Qué dice'],
          filas: [
            ['Hacia 100', 'La Didajé (Siria)', 'Manda bautizar en el nombre del Padre, del Hijo y del Espíritu Santo'],
            ['Hacia 110', 'Ignacio de Antioquía', 'Llama a Jesucristo «nuestro Dios» y nombra juntos al Padre, al Hijo y al Espíritu'],
            ['Hacia 155', 'Justino Mártir (Roma)', 'Describe el bautismo y la oración en el nombre del Padre, del Hijo y del Espíritu'],
            ['Hacia 180', 'Teófilo de Antioquía', 'Usa por primera vez la palabra griega «tríada» para Dios'],
            ['Hacia 180', 'Ireneo de Lyon', 'Llama al Hijo y al Espíritu «las dos manos de Dios»'],
            ['Hacia 213', 'Tertuliano (Cartago)', 'Usa la palabra latina trinitas y la fórmula «una sustancia, tres personas»']
          ],
          nota: 'Fechas aproximadas. Los escritos de estos autores no son Escritura; muestran cómo entendió la iglesia lo que había recibido de los apóstoles.'
        } }
      ],
      texto: [
        'Los apóstoles no escribieron un tratado sobre la Trinidad. Escribieron cartas y evangelios donde hablaban del Padre, del Hijo y del Espíritu Santo con toda naturalidad, como se vio en la ruta IV. La iglesia que vino después recibió esa fe «que ha sido una vez dada a los santos» (Jud 3), y la confesó primero en su vida: en el bautismo, en la oración y en el culto, mucho antes de darle una definición.',
        { h: 'En el bautismo y en la oración' },
        'La Didajé, un manual de la iglesia escrito en Siria hacia el año 100, instruye bautizar «en el nombre del Padre, y del Hijo, y del Espíritu Santo», repitiendo las palabras de Jesús en Mateo 28:19. Ignacio, obispo de Antioquía, que murió como mártir en Roma hacia el 110, llama a Jesucristo «nuestro Dios» en sus cartas. Justino, un filósofo convertido que enseñó en Roma, describe hacia el 155 cómo los cristianos bautizaban y daban gracias al Padre por el nombre del Hijo y del Espíritu Santo. La tabla reúne estos testimonios.',
        { h: 'Las primeras palabras técnicas' },
        'Hacia el año 180, Teófilo de Antioquía usó por primera vez una palabra para referirse a Dios, el Verbo y la Sabiduría juntos: tríada. Unos treinta años después, en Cartago, al norte de África, Tertuliano escribió en latín contra un maestro llamado Práxeas, que enseñaba que el Padre mismo había nacido y había sufrido en la cruz. Para responderle, Tertuliano usó la palabra trinitas y una fórmula que haría historia: Dios es una sola sustancia en tres personas. Tertuliano no inventó la doctrina; buscó palabras precisas para defender lo que la iglesia ya creía frente a quien lo deformaba.',
        'Ese es el patrón de toda esta ruta. Las definiciones de la Trinidad no nacieron de la especulación, sino de la necesidad de responder a enseñanzas que alteraban el evangelio. Cada vez que alguien negaba que el Hijo fuera Dios, o que fuera distinto del Padre, la iglesia volvía a la Escritura y buscaba palabras más exactas para decir lo mismo que ella dice.',
        { ejercicio: {
          pregunta: '¿Por qué Tertuliano usó la palabra «Trinidad» y la fórmula «una sustancia, tres personas»?',
          opciones: [
            { t: 'Para introducir una enseñanza nueva que los apóstoles no conocían.', ok: false, por_que: 'Los apóstoles ya hablaban del Padre, el Hijo y el Espíritu (Mateo 28:19; 2 Corintios 13:14). Tertuliano dio nombre a lo que la iglesia ya creía.' },
            { t: 'Para responder a quien enseñaba que el Padre mismo había sufrido en la cruz.', ok: true, por_que: 'Escribió contra Práxeas, que confundía al Padre con el Hijo. Las palabras técnicas sirvieron para proteger la fe recibida.' },
            { t: 'Porque el Concilio de Nicea se lo había ordenado.', ok: false, por_que: 'Tertuliano escribió hacia el 213, más de cien años antes de Nicea (325).' }
          ],
          explicacion: 'La iglesia buscó palabras precisas para defender lo que la Escritura enseña, no para agregarle algo.'
        } }
      ],
      pensar: 'Los primeros cristianos confesaban al Padre, al Hijo y al Espíritu en el bautismo y en la oración antes de definirlo con palabras técnicas. ¿Tu fe en el Dios trino se nota más en lo que sabes o en cómo oras?'
    },
    {
      id: 'nicea', n: 'Arrio y el Concilio de Nicea', ref: 'Juan 1:1-3; Colosenses 1:16-17; Hebreos 1:3', fecha: 325,
      visual: [
        { tipo: 'imagen', titulo: 'Nicea', src: 'img/nicea.webp', alt: 'En una gran sala con columnas de mármol, decenas de obispos de túnicas oscuras sentados en bancos escuchan a un joven diácono de pie, Atanasio, que responde con un libro abierto en la mano a un presbítero alto y anciano, Arrio', pie: 'Concilio de Nicea, 325 d.C. Recreación: no hay imágenes de época del concilio.', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Hacia el 318, en Alejandría, el presbítero Arrio enseña que el Hijo fue creado.', fecha: 318,
            estado: { view: ORIENTE, capas: IMP, lugares: ['alejandria'] } },
          { t: 'La controversia se extiende por Egipto, Palestina, Siria y Asia Menor.', fecha: [320, 324],
            estado: { view: ORIENTE, capas: IMP, lugares: ['alejandria', 'cesarea', 'antioquia', 'nicomedia'] } },
          { t: 'En 325, el emperador Constantino reúne a unos trescientos obispos en Nicea.', fecha: 325,
            estado: { view: ORIENTE, capas: IMP, lugares: ['nicea', 'constantinopla', 'alejandria', 'antioquia', 'cesarea'] } }
        ] },
        { tipo: 'imagen', titulo: 'Icono', src: 'img/icono-nicea.webp', alt: 'Icono ortodoxo de fondo dorado: el emperador Constantino, con corona y cetro, en el centro entre cuatro obispos con aureola y libros de los evangelios; delante sostienen un gran pliego con el texto griego del credo', pie: 'Icono ortodoxo del Concilio de Nicea, de autor desconocido. El pliego muestra en griego el comienzo del credo: «Creemos en un solo Dios, Padre todopoderoso…»; en la quinta línea se lee homoousion, «de la misma sustancia». Como otros iconos, mezcla épocas: el texto es el del credo ampliado en 381.', origen: 'foto', licencia: 'Autor desconocido; reproducción fiel de una obra en dominio público (PD-Art), vía Wikimedia Commons', completa: true }
      ],
      texto: [
        'Hacia el año 318, en Alejandría de Egipto, un presbítero llamado Arrio comenzó a enseñar algo que parecía defender el monoteísmo: solo el Padre es Dios en sentido pleno. El Hijo, decía, es la primera y más excelente de las criaturas, hecho por el Padre antes de todas las demás, y por medio de él fue creado todo lo demás. Su frase más conocida era: «hubo un tiempo en que no existía». Arrio usaba textos como «el primogénito de toda creación» (Col 1:15) y Proverbios 8:22, donde la Sabiduría dice «Jehová me poseía en el principio». La ruta VI vuelve sobre esos textos.',
        { h: 'Lo que estaba en juego' },
        'Alejandro, obispo de Alejandría, y su joven diácono Atanasio vieron el peligro. Si el Hijo es una criatura, entonces los cristianos adoran a una criatura, lo cual es idolatría. Y si el Hijo no es Dios, no puede revelarnos a Dios de verdad ni salvarnos: solo Dios puede vencer al pecado y a la muerte y darnos vida eterna. Atanasio lo resumiría así: Dios se hizo hombre para que el hombre pudiera llegar a ser partícipe de la vida de Dios. Juan había dicho que todas las cosas fueron hechas por el Verbo, y sin Él nada de lo hecho fue hecho (Jn 1:3): el Verbo no puede estar entre las cosas hechas.',
        { h: 'El concilio' },
        'La disputa dividió a las iglesias del Oriente, y en 325 el emperador Constantino convocó un concilio en Nicea, en Asia Menor, cerca de su residencia en Nicomedia. Asistieron unos trescientos obispos, muchos de los cuales llevaban en el cuerpo las marcas de las persecuciones recientes. El concilio rechazó la enseñanza de Arrio y redactó un credo que confiesa al Hijo como «Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no hecho, de la misma sustancia que el Padre». La expresión clave, en griego homoousios, «de la misma sustancia», no está en la Biblia, pero se eligió precisamente porque los arrianos podían aceptar cualquier frase bíblica dándole su propio sentido; esta no.',
        'Nicea no terminó con la controversia: durante cincuenta años más, los arrianos tuvieron el favor de varios emperadores, y Atanasio fue desterrado cinco veces. Se llegó a decir «Atanasio contra el mundo». Pero la fe de Nicea se impuso porque era la fe de la Escritura.',
        { ejercicio: {
          pregunta: '¿Por qué era tan grave la enseñanza de Arrio?',
          opciones: [
            { t: 'Porque usaba palabras griegas en vez de hebreas.', ok: false, por_que: 'El Nuevo Testamento mismo está en griego. El problema era lo que afirmaba, no el idioma.' },
            { t: 'Porque, si el Hijo es una criatura, adorarlo sería idolatría y no podría salvarnos.', ok: true, por_que: 'Era el argumento central de Atanasio: solo Dios puede revelar a Dios y salvar al ser humano.' },
            { t: 'Porque negaba que Jesús hubiera existido en la historia.', ok: false, por_que: 'Arrio aceptaba la vida, muerte y resurrección de Jesús; negaba que el Hijo fuera eterno e igual al Padre.' }
          ],
          explicacion: 'La divinidad del Hijo no es un detalle técnico: de ella dependen la adoración cristiana y la salvación.'
        } }
      ],
      pensar: 'Atanasio defendió la verdad aunque fue desterrado cinco veces. ¿Qué verdad bíblica estarías dispuesto a sostener aunque fueras minoría?'
    },
    {
      id: 'credos', n: 'Constantinopla y los credos', ref: 'Juan 15:26; Hechos 5:3-4; 2 Corintios 3:17-18', fecha: 381,
      visual: [
        { tipo: 'tabla', titulo: 'El Credo', tabla: {
          titulo: 'Credo niceno-constantinopolitano (381)',
          cab: ['Sobre', 'Confesión'],
          filas: [
            ['El Padre', 'Creemos en un solo Dios, Padre todopoderoso, creador del cielo y de la tierra, de todo lo visible y lo invisible.'],
            ['El Hijo', 'Y en un solo Señor, Jesucristo, Hijo unigénito de Dios, nacido del Padre antes de todos los siglos: Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no hecho, de la misma sustancia que el Padre, por quien todo fue hecho;'],
            ['Su obra', 'que por nosotros y por nuestra salvación bajó del cielo, se encarnó por obra del Espíritu Santo y de la virgen María, y se hizo hombre; fue crucificado por nosotros bajo Poncio Pilato, padeció y fue sepultado, resucitó al tercer día según las Escrituras, subió al cielo, está sentado a la derecha del Padre, y de nuevo vendrá con gloria a juzgar a vivos y muertos, y su reino no tendrá fin.'],
            ['El Espíritu', 'Y en el Espíritu Santo, Señor y dador de vida, que procede del Padre, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas.'],
            ['La iglesia', 'Y en una iglesia santa, universal y apostólica. Confesamos un solo bautismo para el perdón de los pecados. Esperamos la resurrección de los muertos y la vida del mundo venidero. Amén.']
          ],
          nota: 'Traducción del recurso. «Universal» traduce el griego catholica. Las iglesias occidentales agregaron después «y del Hijo» en la línea del Espíritu.'
        } },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: IMP, lugares: ['constantinopla', 'nicea', 'cesarea-capadocia', 'alejandria', 'antioquia'] } }
      ],
      texto: [
        'Después de Nicea, la discusión se trasladó al Espíritu Santo. Algunos aceptaban que el Hijo era Dios, pero enseñaban que el Espíritu era una criatura al servicio del Hijo, o una simple fuerza. Los llamaron pneumatómacos, «los que combaten contra el Espíritu».',
        { h: 'Los capadocios' },
        'Tres pastores de Capadocia, en el centro de Asia Menor, dieron la respuesta: Basilio de Cesarea, su hermano Gregorio de Nisa y su amigo Gregorio Nacianceno. Basilio escribió un libro sobre el Espíritu Santo mostrando, con la Escritura, que el Espíritu recibe la misma gloria que el Padre y el Hijo. Recordaba, por ejemplo, que mentir al Espíritu es mentir a Dios (Hch 5:3-4) y que el bautismo se hace en un solo nombre que incluye al Espíritu (Mt 28:19). Los capadocios precisaron además el vocabulario: en Dios hay una sola esencia (ousía) y tres personas (hipóstasis).',
        { h: 'El credo de 381' },
        'En 381, un concilio reunido en Constantinopla confirmó la fe de Nicea y amplió su credo, especialmente en lo que dice del Espíritu: «Señor y dador de vida, que procede del Padre, que con el Padre y el Hijo recibe una misma adoración y gloria». La tabla muestra el credo completo. Es la confesión de fe más compartida de la historia: la recitan católicos, ortodoxos y muchas iglesias evangélicas, y resume lo que cree cualquier cristiano trinitario. El Concilio de Calcedonia, en 451, explicaría después cómo el Hijo es a la vez verdadero Dios y verdadero hombre en una sola persona, tema que se estudia en el recurso sobre Cristo.',
        'Más tarde surgió en Occidente el llamado Credo de Atanasio, aunque no lo escribió él, que dice: «el Padre es Dios, el Hijo es Dios, el Espíritu Santo es Dios; y sin embargo no son tres dioses, sino un solo Dios».',
        { posturas: {
          titulo: '¿Procede el Espíritu del Padre, o del Padre y del Hijo?',
          a: { n: 'Del Padre (Oriente)', t: 'Las iglesias ortodoxas conservan el credo de 381 como fue escrito: el Espíritu procede del Padre, con las palabras de Juan 15:26. Agregar algo a un credo común, dicen, rompe la unidad, y decir que procede también del Hijo arriesga confundir al Hijo con el Padre.' },
          b: { n: 'Del Padre y del Hijo (Occidente)', t: 'En Occidente se agregó «y del Hijo» (en latín filioque), aceptado en España en el Concilio de Toledo de 589 y después en Roma. Se apoya en que el Espíritu es llamado «el Espíritu de su Hijo» (Gá 4:6) y que el Hijo lo envía (Jn 15:26; 16:7). Las iglesias protestantes heredaron esta forma.' },
          c: 'La diferencia fue una de las causas de la separación entre Oriente y Occidente en 1054, pero ambas partes confiesan lo esencial: el Espíritu Santo es Dios, una persona distinta, eterna e igual al Padre y al Hijo. Este recurso sigue la forma occidental, que es la de las iglesias evangélicas, y reconoce que la Escritura no resuelve todos los detalles de la relación eterna entre las personas.'
        } },
        { ejercicio: {
          pregunta: '¿Qué agregó el credo de 381 al de Nicea?',
          opciones: [
            { t: 'Una confesión más completa del Espíritu Santo como Señor, dador de vida y digno de la misma adoración que el Padre y el Hijo.', ok: true, por_que: 'Frente a quienes negaban la divinidad del Espíritu, el concilio confesó que con el Padre y el Hijo recibe una misma adoración y gloria.' },
            { t: 'La doctrina de que Jesús tiene dos naturalezas en una persona.', ok: false, por_que: 'Eso lo definió el Concilio de Calcedonia, en 451.' },
            { t: 'La palabra «Trinidad», que nunca se había usado antes.', ok: false, por_que: 'Tertuliano ya la usaba hacia el año 213.' }
          ],
          explicacion: 'Nicea defendió la divinidad del Hijo; Constantinopla, la del Espíritu. Así quedó formulada la fe trinitaria.'
        } }
      ],
      pensar: 'El credo dice que el Espíritu «recibe una misma adoración y gloria» con el Padre y el Hijo. ¿Ocupa el Espíritu Santo ese lugar en tu adoración, o lo piensas solo como una ayuda?'
    },
    {
      id: 'errores', n: 'Errores que vuelven', ref: 'Mateo 3:16-17; 28:19; Hechos 2:38; Juan 1:1; 1 Juan 4:1-3', fecha: [1913, 1916],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-errores.svg', alt: 'Tres caminos que se apartan de la doctrina de la Trinidad: el modalismo niega que las personas sean distintas; el arrianismo niega que el Hijo y el Espíritu sean Dios; el triteísmo niega que Dios sea uno. Cada uno con su forma antigua y sus formas actuales', pie: 'Tres maneras de perder el equilibrio: cada error niega una de las verdades que la Trinidad sostiene a la vez.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los errores antiguos y sus formas actuales',
          cab: ['Error', 'Qué enseña', 'Forma antigua', 'Grupos que lo enseñan hoy'],
          filas: [
            ['Modalismo o unicitarismo', 'Un solo Dios que se manifiesta como Padre, como Hijo y como Espíritu; Jesús es el Padre', 'Noeto, Práxeas y Sabelio (siglos II y III)', 'Iglesias pentecostales unicitarias o «Solo Jesús»: Iglesia Pentecostal Unida, Iglesia Apostólica de la Fe en Cristo Jesús y otras'],
            ['Arrianismo', 'Solo el Padre es Dios; el Hijo es la primera criatura y el Espíritu es una fuerza', 'Arrio (siglo IV)', 'Testigos de Jehová'],
            ['Triteísmo', 'Padre, Hijo y Espíritu son tres seres o tres dioses distintos', 'Algunos maestros del siglo VI', 'La Iglesia de Jesucristo de los Santos de los Últimos Días (mormones)'],
            ['Adopcionismo', 'Jesús fue un hombre al que Dios adoptó como Hijo en el bautismo', 'Teódoto, Pablo de Samosata (siglos II y III)', 'Algunos grupos unitarios y corrientes liberales']
          ],
          nota: 'Se describe la enseñanza oficial de cada grupo. Muchos de sus miembros son personas sinceras que aman a Dios: la crítica es a la doctrina, no a las personas.'
        } }
      ],
      texto: [
        'Las herejías antiguas no desaparecieron: vuelven una y otra vez con otros nombres. Conocerlas ayuda a reconocerlas cuando alguien toca la puerta con una revista o cuando un amigo invita a otra iglesia. El esquema muestra que hay tres errores principales, y cada uno nace de negar una de las verdades que la Trinidad sostiene al mismo tiempo.',
        { h: 'Modalismo: el error más cercano' },
        'El modalismo enseña que hay un solo Dios y una sola persona, que se manifiesta de distintas maneras: como Padre en la creación, como Hijo en la encarnación y como Espíritu en la iglesia. En el siglo III lo enseñó Sabelio. Su forma actual es el unicitarismo, que nació dentro del movimiento pentecostal. En 1913, en un campamento en Los Ángeles, se predicó que el bautismo debía hacerse solo «en el nombre de Jesús». De allí surgió la enseñanza de que Jesús es el Padre, el Hijo y el Espíritu. En 1916, las principales asambleas pentecostales de Estados Unidos adoptaron declaraciones de fe trinitarias, y los grupos unicitarios se organizaron aparte. Hoy son numerosos en América Latina.',
        'Los unicitarios comparten con los demás pentecostales el amor por la Palabra, la oración y el bautismo en el Espíritu. Pero su doctrina choca con los textos en que el Padre y el Hijo aparecen como dos, hablándose y amándose: el bautismo de Jesús (Mt 3:16-17), la oración de Juan 17, el Hijo que intercede ante el Padre (Ro 8:34). Un Dios de una sola persona no puede enviar a su Hijo ni amarlo desde antes de la fundación del mundo (Jn 17:24).',
        { posturas: {
          titulo: '¿«En el nombre de Jesús» o «en el nombre del Padre, y del Hijo, y del Espíritu Santo»?',
          a: { n: 'Lectura unicitaria', t: 'Hechos registra bautismos «en el nombre de Jesucristo» (Hch 2:38; 10:48; 19:5). Como Mateo 28:19 habla de «el nombre», en singular, y ese nombre sería Jesús, solo es válido el bautismo que pronuncia el nombre de Jesús. Los apóstoles habrían entendido así el mandato.' },
          b: { n: 'Lectura trinitaria', t: 'Mateo 28:19 es el mandato explícito de Jesús. En Hechos, «en el nombre de Jesucristo» indica bajo qué autoridad y en qué fe se bautiza, y distingue el bautismo cristiano del de Juan (Hch 19:3-5); no se presenta como una fórmula para repetir. La Didajé, hacia el año 100, usa las dos expresiones y manda bautizar con la fórmula de Mateo.' },
          c: 'Este recurso sigue la lectura trinitaria. El bautismo es en el único nombre que comparten el Padre, el Hijo y el Espíritu, y se hace por la autoridad de Jesucristo y en la fe en Él. Lo decisivo no es solo la fórmula, sino la doctrina: el unicitarismo niega que el Padre y el Hijo sean personas distintas, y en eso se aparta de la fe que la iglesia ha confesado desde los apóstoles.'
        } },
        { h: 'Arrianismo y triteísmo' },
        'Los Testigos de Jehová repiten el arrianismo: enseñan que Jesús es el arcángel Miguel, la primera criatura de Dios, y que el Espíritu Santo es la fuerza activa de Dios. Su traducción de Juan 1:1 dice que el Verbo era «un dios», tema de la ruta VI. Los mormones, en cambio, enseñan que el Padre, el Hijo y el Espíritu son tres seres distintos, y que el Padre tiene un cuerpo de carne y huesos; es una forma de triteísmo que contradice Juan 4:24 y el Shemá. Juan llama a probar los espíritus (1 Jn 4:1): la pregunta decisiva sigue siendo quién es Jesús.',
        { ejercicio: {
          pregunta: '¿Qué texto muestra con más claridad que el Padre y el Hijo no son la misma persona?',
          opciones: [
            { t: 'El que dice que Dios es uno.', ok: false, por_que: 'El Shemá afirma la unidad de Dios, que la Trinidad también confiesa. No distingue a las personas.' },
            { t: 'El bautismo de Jesús, donde el Hijo está en el agua, el Espíritu desciende y el Padre habla desde el cielo.', ok: true, por_que: 'Mateo 3:16-17 muestra a los tres a la vez, actuando de manera distinta. Un solo Dios de una sola persona no puede estar en el agua y hablar desde el cielo al mismo tiempo.' },
            { t: 'El que dice que el Verbo se hizo carne.', ok: false, por_que: 'Juan 1:14 afirma la encarnación. Juan 1:1 sí distingue al Verbo de Dios, pero el bautismo lo muestra en una escena.' }
          ],
          explicacion: 'El modalismo no puede explicar las escenas donde el Padre y el Hijo se hablan, se aman y actúan juntos.'
        } },
        { ejercicio: {
          pregunta: 'Alguien enseña que Jesús es una criatura, el primero de los ángeles. ¿Qué error antiguo repite?',
          opciones: [
            { t: 'El modalismo.', ok: false, por_que: 'El modalismo exalta a Jesús hasta identificarlo con el Padre. Este error lo rebaja a criatura.' },
            { t: 'El triteísmo.', ok: false, por_que: 'El triteísmo hace de los tres, tres dioses. Este error niega que el Hijo sea Dios.' },
            { t: 'El arrianismo.', ok: true, por_que: 'Arrio enseñaba que el Hijo fue la primera criatura. Hebreos 1:6 manda que los ángeles adoren al Hijo: Él no es uno de ellos.' }
          ],
          explicacion: 'Cada error niega una verdad: el modalismo, la distinción; el arrianismo, la divinidad del Hijo; el triteísmo, la unidad de Dios.'
        } }
      ],
      pensar: 'Juan dice que hay que probar los espíritus (1 Jn 4:1). Si alguien te visita con una enseñanza sobre Jesús, ¿qué preguntas le harías a partir de lo que has estudiado?'
    },
    {
      id: '1-juan-5-7', n: '1 Juan 5:7 y la Trinidad', ref: '1 Juan 5:6-9; Mateo 28:19; 2 Corintios 13:14', fecha: 1522,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1jn/5/6-9', ref: '1 Juan 5:6-9' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La Trinidad sin 1 Juan 5:7',
          cab: ['Verdad', 'Pasajes que todos los manuscritos comparten'],
          filas: [
            ['Dios es uno', 'Dt 6:4; Is 45:5; 1 Co 8:4-6; Stg 2:19'],
            ['El Hijo es Dios', 'Jn 1:1-3; 20:28; Fil 2:6; Col 2:9; He 1:8'],
            ['El Espíritu es Dios', 'Hch 5:3-4; 1 Co 2:10-11; 3:16'],
            ['Los tres son distintos', 'Mt 3:16-17; Jn 14:16-17; 15:26; 17:5'],
            ['Los tres juntos', 'Mt 28:19; 1 Co 12:4-6; 2 Co 13:14; Ef 4:4-6; 1 P 1:2']
          ]
        } }
      ],
      texto: [
        'Durante siglos, muchos cristianos de habla hispana citaron 1 Juan 5:7 como el texto más claro sobre la Trinidad: «Porque tres son los que dan testimonio en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno» (1 Jn 5:7). Pero este versículo tiene una historia particular, que conviene conocer para no apoyar la doctrina en un terreno discutido.',
        { h: 'Un pasaje discutido' },
        'Las palabras que mencionan al Padre, el Verbo y el Espíritu «en el cielo», y los tres que dan testimonio «en la tierra», no aparecen en ningún manuscrito griego antiguo de 1 Juan ni en las versiones antiguas, salvo en parte de la tradición latina. Surgieron en manuscritos latinos desde el siglo IV, probablemente como una nota que explicaba el texto, y pasaron al texto de la Vulgata. Erasmo las incluyó en la tercera edición de su Nuevo Testamento griego, en 1522, y de allí llegaron al Textus Receptus y a la Reina-Valera. La RV 1960 las conserva. El recurso De la Biblia a nosotros explica esta historia en detalle.',
        { ir: { t: 'Ver «Pasajes discutidos» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/7' } },
        { h: 'La doctrina no depende de él' },
        'Lo importante para este recurso es que la Trinidad no depende de 1 Juan 5:7. Como muestra la tabla, cada una de las verdades que la componen se apoya en pasajes que todos los manuscritos comparten. El sitio sigue un criterio: ninguna doctrina se enseña desde un pasaje discutido. Por eso, en todo este recurso, 1 Juan 5:7 no se ha usado como prueba.',
        'Los primeros grandes defensores de la Trinidad, como Atanasio y los capadocios, nunca citaron este versículo, porque no estaba en sus Biblias griegas. Aun así, defendieron la doctrina con fuerza a partir de Mateo 28:19, Juan 1, Juan 14 a 17, las cartas de Pablo y Hebreos. Si alguien dice que la Trinidad se inventó a partir de un versículo agregado, la historia lo desmiente: la doctrina se formuló siglos antes de que ese versículo llegara a las Biblias impresas.',
        'Saber esto protege al creyente de dos peligros. Uno, apoyar su fe en un texto que alguien le puede mostrar como discutido, y sentir que todo se derrumba. El otro, pensar que, como ese texto es discutido, la doctrina también lo es. La Trinidad está en toda la Escritura, no en un versículo.',
        { ejercicio: {
          pregunta: 'Un amigo te dice: «La Trinidad se basa en 1 Juan 5:7, y ese versículo fue agregado». ¿Qué le responderías?',
          opciones: [
            { t: 'Que 1 Juan 5:7 está en todos los manuscritos antiguos.', ok: false, por_que: 'No es así: falta en los manuscritos griegos antiguos. Negarlo sería faltar a la verdad.' },
            { t: 'Que la doctrina se apoya en muchos pasajes que todos los manuscritos comparten, y se formuló siglos antes de que ese versículo llegara a las Biblias impresas.', ok: true, por_que: 'Mateo 28:19, Juan 1:1, Hechos 5:3-4, 2 Corintios 13:14 y muchos otros sostienen la doctrina; Nicea es del año 325, y Erasmo publicó su edición en 1522.' },
            { t: 'Que, si el versículo fue agregado, entonces la Trinidad también es dudosa.', ok: false, por_que: 'La doctrina no depende de ese versículo, como muestra la tabla de esta estación.' }
          ],
          explicacion: 'Honestidad sobre el texto y firmeza en la doctrina van juntas: la Trinidad se enseña desde pasajes indiscutidos.'
        } }
      ],
      pensar: 'Una fe bien fundada no teme examinar la historia del texto (Hch 17:11). ¿Hay alguna convicción tuya que se apoya en un solo versículo y que convendría estudiar más a fondo?'
    }
  ];

  /* ---------------- VI. Textos difíciles ---------------- */
  const textos = [
    {
      id: 'mayor', n: '«El Padre mayor es que yo»', ref: 'Juan 14:28; Marcos 13:32; Filipenses 2:5-11; Juan 5:18',
      visual: [
        { tipo: 'cita', titulo: 'Juan 14', texto: '@@jn/14/28', ref: 'Juan 14:28' },
        { tipo: 'cita', titulo: 'Filipenses 2', texto: '@@fil/2/5-8', ref: 'Filipenses 2:5-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Leer los Evangelios con dos columnas',
          cab: ['Como Dios, el Hijo…', 'Como hombre, el Hijo…'],
          filas: [
            ['Existía antes de Abraham (Jn 8:58)', 'Nació de mujer (Gá 4:4)'],
            ['Es igual al Padre (Jn 5:18; Fil 2:6)', 'Dice que el Padre es mayor (Jn 14:28)'],
            ['Sabía lo que había en el hombre (Jn 2:25)', 'Crecía en sabiduría (Lc 2:52); no sabía el día (Mr 13:32)'],
            ['Calmó la tempestad (Mr 4:39)', 'Dormía en la barca, cansado (Mr 4:38)'],
            ['Resucitó a Lázaro (Jn 11:43)', 'Lloró ante su tumba (Jn 11:35)']
          ],
          nota: 'No son dos personas, sino una persona, el Hijo eterno, que tiene dos naturalezas.'
        } }
      ],
      texto: [
        'Esta ruta estudia los textos que se usan con más frecuencia para negar la Trinidad, sea la divinidad del Hijo o su distinción del Padre. No se trata de ganar discusiones, sino de leer bien. Cada estación aplica el método de interpretación: el texto en su contexto, el resto de la Escritura y lo que dice el autor en otras partes.',
        'Jesús dijo: «el Padre mayor es que yo» (Jn 14:28). Los arrianos de ayer y los Testigos de Jehová hoy concluyen que, si el Padre es mayor, el Hijo no puede ser Dios igual a Él. Pero el mismo evangelio de Juan dice que los judíos querían matar a Jesús porque llamaba a Dios su propio Padre, «haciéndose igual a Dios» (Jn 5:18), y comienza diciendo que el Verbo era Dios (Jn 1:1). Juan no se contradice. ¿Cómo se entienden juntos?',
        { h: 'Mayor en posición, no en naturaleza' },
        'Pablo lo explica en Filipenses 2. Cristo, «siendo en forma de Dios», no consideró su igualdad con Dios como algo a qué aferrarse, sino que «se despojó a sí mismo, tomando forma de siervo» y se humilló hasta la muerte de cruz (Fil 2:6-8). Al hacerse hombre, el Hijo no dejó de ser Dios, pero tomó voluntariamente una posición de siervo. En esa condición, el Padre era mayor que Él: en posición, no en naturaleza. Un hijo que trabaja al servicio de su padre en la empresa familiar está bajo su autoridad, pero no es menos humano que él. Fíjate además en el contexto: Jesús dice que los discípulos deberían alegrarse porque Él vuelve al Padre, es decir, a la gloria que tenía antes (Jn 17:5).',
        { h: '«Ni el Hijo»' },
        'Algo parecido ocurre con Marcos 13:32, donde Jesús dice que del día y la hora de su venida «nadie sabe, ni aun los ángeles que están en el cielo, ni el Hijo, sino el Padre». El Hijo eterno, al hacerse hombre, aceptó vivir con un conocimiento humano: Lucas dice que crecía en sabiduría (Lc 2:52). La tabla muestra cómo los Evangelios presentan a Jesús en dos columnas: hace lo que solo Dios hace, y vive lo que vive un hombre. Ambas cosas son verdad de la misma persona.',
        { ejercicio: {
          pregunta: '¿Cómo se entiende mejor «el Padre mayor es que yo» junto con Juan 5:18 y Filipenses 2:6?',
          opciones: [
            { t: 'El Hijo es una criatura inferior al Padre.', ok: false, por_que: 'Juan 5:18 y Filipenses 2:6 dicen que el Hijo es igual a Dios. Juan no se contradice.' },
            { t: 'El Hijo, igual al Padre en naturaleza, tomó al encarnarse una posición de siervo en la que el Padre es mayor.', ok: true, por_que: 'Es la lectura que une los textos: mayor en posición durante su misión, no en naturaleza.' },
            { t: 'Jesús hablaba de sí mismo como Padre en otra manifestación.', ok: false, por_que: 'Jesús distingue claramente: «voy al Padre». No se puede ir a uno mismo.' }
          ],
          explicacion: 'Cuando un texto parece contradecir a otro del mismo autor, la lectura correcta es la que explica los dos.'
        } }
      ],
      pensar: 'El Hijo, siendo igual a Dios, tomó forma de siervo (Fil 2:7). ¿Qué te enseña su ejemplo sobre servir a otros sin sentir que pierdes tu valor?'
    },
    {
      id: 'uno-somos', n: '«Yo y el Padre uno somos»', ref: 'Juan 10:27-33; 17:11, 21-22; Deuteronomio 6:4',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/10/27-33', ref: 'Juan 10:27-33' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Un mismo versículo, tres lecturas',
          cab: ['Lectura', 'Qué entiende', 'Problema'],
          filas: [
            ['Unicitaria', 'Jesús y el Padre son la misma persona', '«Somos» está en plural: son dos que son uno'],
            ['Arriana', 'Solo unidad de propósito, como entre los creyentes', 'Los judíos entendieron que se hacía Dios (Jn 10:33), y Jesús no los corrigió'],
            ['Trinitaria', 'Dos personas distintas con un mismo ser y poder', 'Explica el plural, el contexto y la reacción de los oyentes']
          ]
        } }
      ],
      texto: [
        'Juan 10:30 se usa desde dos lados opuestos. Los unicitarios dicen que demuestra que Jesús y el Padre son la misma persona. Los Testigos de Jehová dicen que solo significa que estaban de acuerdo. El texto, leído con cuidado, no permite ninguna de las dos lecturas.',
        { h: '«Somos»' },
        'Jesús no dice «Yo soy el Padre», sino «Yo y el Padre uno somos» (Jn 10:30). En griego, el verbo está en plural, esmen, «somos»: son dos los que hablan como sujeto. Además, la palabra «uno», hen, está en neutro, no en masculino. Si Jesús hubiera querido decir que eran una sola persona, habría usado el masculino heis, «uno solo». El neutro indica una unidad de ser, de cosa, no de persona. Por eso el versículo descarta el modalismo: son dos, el Hijo y el Padre, y son uno.',
        { h: 'Lo que entendieron los oyentes' },
        'Pero ¿se trata solo de una unidad de propósito? El contexto responde. Jesús acaba de decir que nadie puede arrebatar sus ovejas de su mano, ni de la mano de su Padre (Jn 10:28-29): las manos del Hijo y del Padre son igualmente poderosas para guardar. Y los oyentes reaccionaron tomando piedras para apedrearlo. Cuando Jesús les preguntó por qué, respondieron: «por la blasfemia; porque tú, siendo hombre, te haces Dios» (Jn 10:33). Ningún judío habría apedreado a alguien por decir que estaba de acuerdo con Dios. Entendieron que Jesús reclamaba igualdad con Dios, y Jesús no los corrigió: siguió defendiendo que era el Hijo de Dios, santificado y enviado por el Padre (Jn 10:36).',
        { h: '¿Y Juan 17?' },
        'Los Testigos de Jehová señalan que Jesús pidió que sus discípulos fueran uno «así como nosotros» (Jn 17:11, 22), y nadie diría que los discípulos son un solo ser. Es cierto: en Juan 17, Jesús pide para la iglesia una unidad que refleje la de la Trinidad, como un espejo refleja una luz sin ser la luz. La unidad de los creyentes es de amor y de propósito; la del Padre y el Hijo incluye eso, pero es más profunda: es la de un mismo ser. Juan 10 lo muestra con la reacción de los oyentes; Juan 17, con la gloria que el Hijo tenía con el Padre antes que el mundo fuese (Jn 17:5).',
        { ejercicio: {
          pregunta: '¿Qué indica el plural «somos» en Juan 10:30?',
          opciones: [
            { t: 'Que Jesús y el Padre son una sola persona con dos nombres.', ok: false, por_que: 'Una sola persona no dice «somos». El plural muestra dos sujetos.' },
            { t: 'Que hay dos personas, el Hijo y el Padre, que son uno.', ok: true, por_que: 'El verbo en plural y el «uno» en neutro señalan dos personas con un mismo ser.' },
            { t: 'Que Jesús hablaba en nombre de los discípulos.', ok: false, por_que: 'Jesús dice «Yo y el Padre»: los dos sujetos son Él y el Padre.' }
          ],
          explicacion: 'Juan 10:30 descarta tanto que sean la misma persona como que su unidad sea solo de acuerdo.'
        } },
        { ejercicio: {
          pregunta: 'Según Juan 10:33, ¿por qué querían apedrear a Jesús?',
          opciones: [
            { t: 'Porque había sanado en día de reposo.', ok: false, por_que: 'Eso ocurrió en Juan 5 y 9. Aquí los oyentes dan otra razón explícita.' },
            { t: 'Porque siendo hombre se hacía Dios.', ok: true, por_que: 'Es la respuesta de los mismos oyentes. Entendieron que Jesús reclamaba igualdad con Dios.' },
            { t: 'Porque decía estar de acuerdo con Dios.', ok: false, por_que: 'Nadie era apedreado por estar de acuerdo con Dios. El texto habla de blasfemia.' }
          ],
          explicacion: 'La reacción de los oyentes es la mejor pista de lo que Jesús quiso decir.'
        } }
      ],
      pensar: 'Jesús dijo que nadie puede arrebatar sus ovejas de su mano ni de la del Padre (Jn 10:28-29). ¿Qué temor tuyo responde esa promesa?'
    },
    {
      id: 'padre-eterno', n: '«Padre Eterno» en Isaías 9:6', ref: 'Isaías 9:6-7; 22:20-21; Juan 14:9; Hebreos 2:13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@is/9/6-7', ref: 'Isaías 9:6-7' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los cuatro nombres del niño',
          cab: ['Nombre', 'Qué dice del Mesías'],
          filas: [
            ['Admirable Consejero', 'Su sabiduría es maravillosa; gobernará con sabiduría perfecta (Is 11:2)'],
            ['Dios Fuerte', 'Es Dios: el mismo título se da a Jehová en Isaías 10:21'],
            ['Padre Eterno', 'Cuida para siempre de su pueblo como un padre (compara Is 22:21)'],
            ['Príncipe de Paz', 'Su reino traerá una paz sin fin (Is 9:7)']
          ],
          nota: 'Cada nombre describe cómo será el Rey prometido, no a quién se identifica dentro de la Trinidad.'
        } }
      ],
      texto: [
        'Isaías anuncia el nacimiento de un niño, el Rey descendiente de David: «se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz» (Is 9:6). Los unicitarios ven aquí una prueba de que Jesús es el Padre: si se le llama Padre Eterno, el Hijo y el Padre serían la misma persona.',
        { posturas: {
          titulo: '¿Qué significa que el Mesías se llame «Padre Eterno»?',
          a: { n: 'Lectura unicitaria', t: 'El niño que nace, Jesús, es llamado Padre Eterno. Por lo tanto, Jesús es el Padre, y Padre e Hijo son dos nombres o manifestaciones de la misma persona.' },
          b: { n: 'Lectura trinitaria', t: 'El título describe la relación del Mesías con su pueblo: como un padre, lo cuidará, lo protegerá y gobernará para siempre. No dice que sea la primera persona de la Trinidad, de la cual el Nuevo Testamento lo distingue siempre.' },
          c: 'Este recurso sigue la lectura trinitaria. En hebreo, «padre de» se usaba para describir a alguien por lo que hace o provee, y en Isaías 22:21 Dios dice que Eliaquim será «padre al morador de Jerusalén», es decir, su protector. El nombre muestra que el Mesías gobernará con un cuidado paternal y eterno. Además, el mismo versículo lo llama «hijo nos es dado» (Is 9:6): es el Hijo. Y el Nuevo Testamento, que cita varias veces este pasaje de Isaías (Mt 4:15-16; Lc 1:32-33, 79), nunca llama a Jesús «el Padre», sino que lo presenta orando al Padre, enviado por Él y volviendo a Él.'
        } },
        { h: 'Leer un nombre hebreo' },
        'Los nombres del niño en Isaías 9:6 forman un retrato del Rey. Es Admirable Consejero, porque su sabiduría será perfecta. Es Dios Fuerte, título que Isaías aplica a Jehová mismo pocos versículos después (Is 10:21): aquí está una de las afirmaciones más claras del Antiguo Testamento de que el Mesías es Dios. Es Padre Eterno, porque cuidará de su pueblo como un padre, y su reino no tendrá fin. Y es Príncipe de Paz, porque su gobierno traerá la paz definitiva. La tabla los resume.',
        'Es verdad que hay una relación muy estrecha entre el Hijo y el Padre: Jesús dijo «El que me ha visto a mí, ha visto al Padre» (Jn 14:9), porque es la imagen perfecta del Padre. Pero en el mismo pasaje dice: «yo soy en el Padre, y el Padre en mí» (Jn 14:10). Para estar uno en el otro, tienen que ser dos. Así, Isaías 9:6, lejos de negar la Trinidad, afirma algo fundamental para ella: que el niño nacido en Belén es el Dios Fuerte.',
        { ejercicio: {
          pregunta: '¿Qué afirma con más claridad Isaías 9:6 sobre el Mesías?',
          opciones: [
            { t: 'Que es el Padre, la primera persona de la Trinidad.', ok: false, por_que: 'El mismo versículo lo llama «hijo nos es dado». El título Padre Eterno describe su cuidado eterno por su pueblo.' },
            { t: 'Que es Dios, pues lo llama Dios Fuerte, el mismo título que Isaías da a Jehová.', ok: true, por_que: 'Isaías 10:21 usa el mismo título para Dios. El niño que nace es Dios hecho hombre.' },
            { t: 'Que será solo un rey humano muy sabio.', ok: false, por_que: 'Ningún rey humano podría llamarse Dios Fuerte ni tener un reino sin fin.' }
          ],
          explicacion: 'Isaías 9:6 es un gran texto sobre la divinidad del Mesías, no una prueba de que el Hijo sea el Padre.'
        } }
      ],
      pensar: 'El Mesías es Padre Eterno para su pueblo: lo cuida para siempre. ¿Qué área de tu vida necesita hoy ese cuidado paternal de Cristo?'
    },
    {
      id: 'primogenito', n: '«Primogénito» y «un solo mediador»', ref: 'Colosenses 1:15-20; 1 Timoteo 2:5; Salmo 89:27; Proverbios 8:22; Apocalipsis 3:14',
      visual: [
        { tipo: 'cita', titulo: 'Colosenses 1', texto: '@@col/1/15-18', ref: 'Colosenses 1:15-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Textos que se usan para decir que el Hijo fue creado',
          cab: ['Texto', 'Lo que se dice', 'Lo que significa en su contexto'],
          filas: [
            ['Col 1:15 «primogénito de toda creación»', 'Fue el primero en ser creado', 'Tiene la primacía y el derecho de heredero sobre la creación, que fue hecha por Él (Col 1:16-17)'],
            ['1 Ti 2:5 «Jesucristo hombre»', 'Si es hombre, no es Dios', 'Medió como verdadero hombre; el mismo Pablo dice que en Él habita la plenitud de la Deidad (Col 2:9)'],
            ['Pr 8:22 «Jehová me poseía en el principio»', 'La Sabiduría, que es Cristo, fue creada', 'Es una personificación poética de la sabiduría, no una profecía sobre el origen del Hijo'],
            ['Ap 3:14 «el principio de la creación de Dios»', 'Fue el comienzo de lo creado', 'Arché significa también origen o soberano: es la fuente y el que gobierna la creación (Ap 21:6; 22:13)']
          ]
        } }
      ],
      texto: [
        'Arrio en el siglo IV, y los Testigos de Jehová hoy, se apoyan en algunos textos para decir que el Hijo fue creado. La tabla los reúne. Todos se aclaran con la misma regla: leer el versículo en su contexto y junto con lo que el mismo autor dice en otras partes.',
        { h: 'El primogénito' },
        'Pablo llama a Cristo «el primogénito de toda creación» (Col 1:15). Si se lee solo esa frase, parece decir que fue el primero de los seres creados. Pero en la Biblia primogénito no siempre significa nacido primero: indica también la posición del heredero, con el rango más alto. Dios dice de David, que era el menor de sus hermanos: «Yo también le pondré por primogénito, El más excelso de los reyes de la tierra» (Sal 89:27). Y el versículo siguiente en Colosenses explica por qué Cristo es el primogénito: «Porque en él fueron creadas todas las cosas… todo fue creado por medio de él y para él. Y él es antes de todas las cosas» (Col 1:16-17). No es la primera criatura, sino el Creador y heredero de todo. Por eso la Traducción del Nuevo Mundo, de los Testigos de Jehová, tiene que agregar la palabra «otras» en esos versículos: «todas las otras cosas».',
        { h: 'Un solo mediador' },
        '«Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5). Se argumenta que, si Jesús es mediador entre Dios y los hombres, no puede ser Dios. Pero un mediador perfecto tiene que representar bien a las dos partes. Cristo puede llevarnos a Dios porque es verdadero hombre, y puede traernos a Dios porque es verdadero Dios. Pablo subraya aquí su humanidad porque habla de su muerte en rescate por todos (1 Ti 2:6), pero el mismo apóstol dice que en Él habita corporalmente toda la plenitud de la Deidad (Col 2:9) y lo llama «nuestro gran Dios y Salvador Jesucristo» (Tit 2:13).',
        { ejercicio: {
          pregunta: '¿Qué muestra el Salmo 89:27 sobre la palabra «primogénito»?',
          opciones: [
            { t: 'Que David fue el primer hijo de Isaí.', ok: false, por_que: 'David era el menor de sus hermanos (1 Samuel 16:11). No era primogénito por nacimiento.' },
            { t: 'Que puede indicar una posición de primacía, no un orden de nacimiento.', ok: true, por_que: 'Dios «pone» a David por primogénito: le da el rango más alto entre los reyes.' },
            { t: 'Que solo se usa para personas creadas.', ok: false, por_que: 'El salmo muestra el sentido de rango; Colosenses 1:16-17 aclara que Cristo es el Creador de todo.' }
          ],
          explicacion: 'Primogénito de toda creación significa que Cristo tiene la primacía sobre todo lo creado, porque todo fue creado por Él.'
        } },
        { ejercicio: {
          pregunta: 'Si 1 Timoteo 2:5 llama a Jesús «hombre», ¿significa que no es Dios?',
          opciones: [
            { t: 'Sí, porque un mediador no puede ser una de las partes.', ok: false, por_que: 'Un mediador perfecto representa a las dos partes. Cristo es Dios y hombre, por eso puede unirlas.' },
            { t: 'No: Pablo destaca su humanidad porque habla de su muerte, pero en otras cartas lo llama Dios.', ok: true, por_que: 'Colosenses 2:9 y Tito 2:13 son del mismo autor. Cristo es verdadero hombre y verdadero Dios.' },
            { t: 'Sí, porque Pablo nunca habla de la divinidad de Cristo.', ok: false, por_que: 'Pablo lo hace muchas veces, por ejemplo en Filipenses 2:6 y Romanos 9:5.' }
          ],
          explicacion: 'Que Cristo sea hombre no niega que sea Dios: lo hace el mediador perfecto.'
        } }
      ],
      pensar: 'Cristo es el único mediador entre Dios y tú (1 Ti 2:5). ¿Buscas a veces otros mediadores, personas, objetos o méritos propios, para acercarte a Dios?'
    },
    {
      id: 'un-dios', n: '«El Verbo era Dios», no «un dios»', ref: 'Juan 1:1-18; 20:28; Isaías 43:10; 44:6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/1/1-3', ref: 'Juan 1:1-3' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Juan 1:1 frase por frase',
          cab: ['Griego (transcrito)', 'RV 1960', 'Qué afirma'],
          filas: [
            ['En arché ên ho Lógos', 'En el principio era el Verbo', 'Cuando todo comenzó, el Verbo ya existía: es eterno'],
            ['kai ho Lógos ên pros ton Theón', 'y el Verbo era con Dios', 'Estaba en relación con Dios (el Padre): es distinto de Él'],
            ['kai Theós ên ho Lógos', 'y el Verbo era Dios', 'Tenía la naturaleza de Dios: es Dios']
          ],
          nota: 'En la tercera frase, Theós va sin artículo y antes del verbo: describe qué era el Verbo (su naturaleza), sin identificarlo con el Padre, que acaba de nombrarse con artículo.'
        } }
      ],
      texto: [
        'La Traducción del Nuevo Mundo, de los Testigos de Jehová, traduce el final de Juan 1:1 como «y la Palabra era un dios». Su argumento es gramatical: en griego, la palabra Dios en esa frase no lleva artículo, mientras que en la frase anterior sí. Según ellos, sin artículo significaría «un dios», un ser divino de segunda categoría. Esta estación examina el argumento con calma.',
        { h: 'Por qué no hay artículo' },
        'La tabla muestra el versículo frase por frase. En la segunda frase, Juan dice que el Verbo estaba «con Dios», ton Theón, con artículo: se refiere a una persona concreta, el Padre. En la tercera, dice Theós ên ho Lógos, literalmente «Dios era el Verbo». Si Juan hubiera escrito ho Theós, con artículo, habría dicho que el Verbo es la misma persona que acaba de nombrar, es decir, el Padre: eso sería modalismo. Si hubiera querido decir «divino» en un sentido menor, tenía la palabra theios. Al poner Theós sin artículo y antes del verbo, Juan dice qué era el Verbo, cuál era su naturaleza: lo que Dios era, eso era el Verbo. Con una sola frase, Juan descarta a la vez el arrianismo y el modalismo.',
        'Además, la falta de artículo no significa «un dios» en el resto del evangelio. En el mismo capítulo, Theós sin artículo aparece varias veces y la misma traducción lo traduce «Dios»: por ejemplo, «hubo un hombre enviado de Dios» (Jn 1:6) y «A Dios nadie le vio jamás» (Jn 1:18). Traducir «un dios» solo en el versículo 1 no responde a la gramática, sino a una doctrina previa.',
        { h: '¿Dos dioses?' },
        'Hay además un problema teológico. Si el Verbo es «un dios» distinto del Dios verdadero, entonces hay dos dioses: uno mayor y otro menor. Eso contradice todo el Antiguo Testamento. Dios dice por medio de Isaías: «antes de mí no fue formado dios, ni lo será después de mí» (Is 43:10), y «fuera de mí no hay Dios» (Is 44:6). Juan, judío y monoteísta, nunca habría aceptado un segundo dios menor. Y el evangelio termina como empezó: Tomás llama a Jesús «¡Señor mío, y Dios mío!» (Jn 20:28), con artículo.',
        'Cómo se traduce y por qué hay distintas traducciones se estudia en el recurso De la Biblia a nosotros.',
        { ir: { t: 'Ver «Formas de traducir» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#traducciones/6' } },
        { ejercicio: {
          pregunta: '¿Qué problema tiene traducir «el Verbo era un dios»?',
          opciones: [
            { t: 'Ninguno: el griego obliga a traducirlo así.', ok: false, por_que: 'La misma traducción pone «Dios» en otros versículos donde Theós tampoco lleva artículo, como Juan 1:6 y 1:18.' },
            { t: 'Que introduce un segundo dios menor, contrario al monoteísmo de toda la Biblia.', ok: true, por_que: 'Isaías 43:10 y 44:6 niegan que haya otro dios. Juan no habría aceptado un dios de segunda categoría.' },
            { t: 'Que hace del Verbo la misma persona que el Padre.', ok: false, por_que: 'Ese sería el problema de poner el artículo. «Un dios» comete el error contrario: rebaja al Verbo.' }
          ],
          explicacion: 'Juan 1:1 dice que el Verbo es distinto del Padre y que es Dios: lo que Dios era, eso era el Verbo.'
        } },
        { ejercicio: {
          pregunta: 'Al terminar este recurso, ¿cuál es la mejor síntesis de la doctrina bíblica de Dios?',
          opciones: [
            { t: 'Hay un solo Dios, que existe eternamente como Padre, Hijo y Espíritu Santo, tres personas iguales y distintas.', ok: true, por_que: 'Es lo que sostienen juntos el Shemá, la divinidad del Hijo y del Espíritu, y su distinción en el bautismo de Jesús y en Juan 17.' },
            { t: 'Hay un Dios mayor, el Padre, y dos seres divinos menores que le sirven.', ok: false, por_que: 'Eso es el arrianismo. El Hijo y el Espíritu son plenamente Dios.' },
            { t: 'Hay un solo Dios que se manifiesta como Padre, como Hijo o como Espíritu según el momento.', ok: false, por_que: 'Eso es el modalismo. Las tres personas existen y actúan a la vez.' }
          ],
          explicacion: 'Un solo Dios, Padre, Hijo y Espíritu Santo: a Él la gloria por los siglos.'
        } }
      ],
      pensar: 'Juan escribió su evangelio «para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:31). Después de este estudio, ¿qué ha crecido más en ti: tu conocimiento de Dios o tu deseo de adorarle?'
    }
  ];

  const T = window.__TRINIDAD;
  delete window.__TRINIDAD;
  window.RUTA_DATA = {
    titulo: 'Dios y la Trinidad',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'conocer', grupo: 'La doctrina de Dios', n: 'I. Conocer a Dios', info: 'Que Dios se puede conocer, que existe, que es espíritu, que es uno y que es persona', estaciones: T.conocer },
      { id: 'nombres', grupo: 'La doctrina de Dios', n: 'II. Los nombres de Dios', info: 'Elohim, Jehová, Adonai, los nombres compuestos y el Padre del Nuevo Testamento', estaciones: T.nombres },
      { id: 'atributos', grupo: 'La doctrina de Dios', n: 'III. Los atributos de Dios', info: 'Lo que solo Dios es y lo que forma en sus hijos', estaciones: T.atributos },
      { id: 'trinidad', grupo: 'La doctrina de Dios', n: 'IV. La Trinidad', info: 'Un solo Dios: Padre, Hijo y Espíritu Santo', estaciones: T.trinidad },
      { id: 'historia', grupo: 'Historia y textos difíciles', n: 'V. La doctrina en la historia', info: 'De la iglesia primitiva a Nicea, los credos y los errores de hoy', estaciones: historia,
        linea: { desde: 0, hasta: 2030, hitos: [
          { a: [100, 250], t: 'Didajé a Tertuliano' }, { a: [325, 381], t: 'Nicea y Constantinopla' },
          { a: 1054, t: 'Oriente y Occidente' }, { a: 1522, t: 'Erasmo' },
          { a: 1916, t: 'Pentecostales trinitarios y unicitarios' }
        ] } },
      { id: 'textos', grupo: 'Historia y textos difíciles', n: 'VI. Textos difíciles', info: 'Los pasajes que se usan para negar la Trinidad, leídos en su contexto', estaciones: textos }
    ]
  };
})();
