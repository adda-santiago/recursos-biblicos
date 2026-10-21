/* ==========================================================
   Recursos Bíblicos — De la Biblia a nosotros · contenido de las rutas
   FUENTE de public/apps/de-la-biblia-a-nosotros/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/manuscritos_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960). Con un prefijo de
   versión (dos arrobas + rv1909: + libro/capítulo/versículos) se copia de esa versión.
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica.
   ========================================================== */
(() => {
  const escritura = [
    {
      id: 'materiales', n: 'Piedra, arcilla, papiro y pergamino', ref: 'Éxodo 34:27; Jeremías 36:23; 2 Timoteo 4:13; 2 Juan 12',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-materiales.svg', alt: 'Seis materiales de escritura en orden: tablas de piedra, tablillas de arcilla, ostraca, rollo de papiro, rollo de pergamino y códice', pie: 'Los materiales en que se escribió y se copió la Biblia.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2ti/4/13', ref: '2 Timoteo 4:13' }
      ],
      texto: [
        'Antes de llegar a nuestras manos impresa en papel, la Biblia recorrió más de tres mil años de historia. Este recurso sigue ese camino: cómo se escribió, cómo se copió durante siglos, cómo sabemos que el texto que leemos es el que se escribió, y cómo llegó a nuestra lengua. La primera pregunta es sencilla: ¿sobre qué se escribía?',
        { h: 'Piedra y arcilla' },
        'Los diez mandamientos se escribieron sobre piedra: «la escritura era escritura de Dios grabada sobre las tablas» (Éx 32:16). Israel también recibió la orden de escribir la ley sobre piedras revocadas con cal al entrar en la tierra (Dt 27:2-8). La piedra dura, pero es pesada y cara. En Mesopotamia se escribía sobre tablillas de arcilla con un punzón, y en todo el Oriente se usaban ostraca: trozos de cerámica rota donde se anotaban cartas breves, recibos y listas.',
        { h: 'El rollo de papiro' },
        'El material de escritura más común del mundo antiguo fue el papiro, una caña del Nilo. Se cortaba en tiras, se ponían en dos capas cruzadas, se prensaban y se secaban; las hojas se pegaban una a otra para formar un rollo. Era liviano y barato, pero frágil: se quiebra con los años y se pudre con la humedad. Por eso casi todos los papiros antiguos que conocemos vienen del clima seco de Egipto.',
        { h: 'El pergamino y el códice' },
        'El pergamino es piel de animal (oveja, cabra o ternero) raspada, estirada y secada. Es mucho más resistente que el papiro y se puede escribir por ambos lados. Pablo, preso en Roma, pidió a Timoteo que le llevara «los libros, mayormente los pergaminos» (2 Ti 4:13). Los rollos de la ley en la sinagoga se escribían, y se escriben hasta hoy, sobre pergamino.',
        'El gran cambio fue el códice: hojas dobladas y cosidas por el lomo, es decir, el libro tal como lo conocemos. Los cristianos lo adoptaron muy pronto, antes que el resto de la sociedad. Un códice reúne en un solo volumen lo que exigía varios rollos, permite buscar un pasaje sin desenrollar metros de texto y se lleva con facilidad en los viajes misioneros. Los cuatro evangelios o todas las cartas de Pablo podían caber en un solo libro.',
        { ejercicio: {
          pregunta: '¿Por qué los cristianos de los primeros siglos prefirieron el códice al rollo?',
          opciones: [
            { t: 'Porque la ley prohibía escribir las Escrituras en rollos.', ok: false, por_que: 'No había tal prohibición; de hecho, la sinagoga siguió usando rollos para la ley.' },
            { t: 'Porque reunía varios escritos en un volumen manejable y permitía encontrar un pasaje con rapidez.', ok: true, por_que: 'Es la ventaja práctica del libro cosido: más texto en menos espacio y acceso directo a cualquier página.' },
            { t: 'Porque el papiro ya no existía y solo quedaba el pergamino.', ok: false, por_que: 'El papiro siguió en uso durante siglos, y muchos códices cristianos antiguos son justamente de papiro.' }
          ],
          explicacion: 'El códice respondía a las necesidades de una fe que leía sus Escrituras en la reunión, las comparaba y las llevaba de ciudad en ciudad.'
        } }
      ],
      pensar: 'Dios se tomó el trabajo de dejar su palabra por escrito, en materiales frágiles y en manos humanas. ¿Qué cuidado le das tú a la Biblia que tienes?'
    },
    {
      id: 'lenguas', n: 'Hebreo, arameo y griego', ref: 'Daniel 2:4; Esdras 4:8; Juan 19:20; Marcos 5:41',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-lenguas.svg', alt: 'Las tres lenguas de la Biblia: hebreo, en casi todo el Antiguo Testamento; arameo, en partes de Daniel y Esdras y algunas palabras sueltas; griego, en todo el Nuevo Testamento', pie: 'Las tres lenguas en que Dios hizo escribir su Palabra.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El arameo en la Biblia',
          cab: ['Pasaje', 'Contenido'],
          filas: [
            ['Génesis 31:47', 'El nombre que Labán da al majano de piedras: Jegar Sahaduta'],
            ['Jeremías 10:11', 'Un versículo para que los exiliados respondan a los paganos'],
            ['Esdras 4:8–6:18; 7:12-26', 'Cartas y decretos de la corte persa'],
            ['Daniel 2:4–7:28', 'Desde que hablan los caldeos hasta la visión de las cuatro bestias'],
            ['Marcos 5:41; 15:34', 'Palabras de Jesús conservadas en arameo: Talita cumi; Eloi, Eloi']
          ],
          nota: 'El resto del Antiguo Testamento está en hebreo, y todo el Nuevo Testamento en griego.'
        } }
      ],
      texto: [
        'La Biblia se escribió en tres lenguas. El Antiguo Testamento está casi entero en hebreo, la lengua de Israel. El hebreo se escribe de derecha a izquierda y, en su forma antigua, solo con consonantes: el lector ponía las vocales de memoria, porque conocía la lengua. Es una lengua concreta, de verbos y de imágenes, en la que la misma palabra puede decir «aliento», «viento» y «espíritu».',
        { h: 'El arameo' },
        'Algunas partes están en arameo, la lengua internacional del Oriente durante los imperios asirio, babilónico y persa. Daniel cambia de lengua justo cuando los sabios se dirigen al rey: «Entonces hablaron los caldeos al rey en lengua aramea» (Dn 2:4), y el texto sigue en arameo hasta el capítulo 7. En Esdras, las cartas de la corte persa se citan en su lengua oficial. Después del exilio, el arameo pasó a ser la lengua cotidiana de los judíos, y por eso Jesús hablaba en arameo. Marcos conserva algunas de sus palabras tal como sonaron: «Talita cumi; que traducido es: Niña, a ti te digo, levántate» (Mr 5:41).',
        { h: 'El griego' },
        'El Nuevo Testamento se escribió en griego koiné, el griego común que se hablaba desde Roma hasta Egipto después de las conquistas de Alejandro Magno. No era el griego literario de los filósofos, sino el de las cartas, los contratos y el mercado. Dios eligió la lengua que podían entender a la vez un comerciante de Corinto, un esclavo de Colosas y un funcionario de Etiopía. El título de la cruz resume ese mundo: estaba escrito «en hebreo, en griego y en latín» (Jn 19:20).',
        'Esto tiene una consecuencia práctica. Toda Biblia en español es una traducción, y quien traduce tiene que decidir cómo decir en nuestra lengua lo que el texto dice en la suya. Las rutas III y IV de este recurso explican cómo se fija el texto original y cómo se traduce.',
        { ejercicio: {
          pregunta: '¿Por qué el Nuevo Testamento se escribió en griego y no en arameo, la lengua que hablaba Jesús?',
          opciones: [
            { t: 'Porque el griego común era la lengua que se entendía en todo el Mediterráneo, adonde iba el evangelio.', ok: true, por_que: 'El koiné permitía que una misma carta se leyera en Roma, Corinto o Antioquía sin traducción.' },
            { t: 'Porque el arameo se consideraba una lengua impura para escribir Escritura.', ok: false, por_que: 'Partes de Daniel y Esdras son Escritura en arameo; no había nada impuro en esa lengua.' },
            { t: 'Porque los apóstoles no sabían escribir en arameo.', ok: false, por_que: 'No hay base para afirmarlo. La elección del griego tiene que ver con los destinatarios, no con una incapacidad de los autores.' }
          ],
          explicacion: 'La lengua del Nuevo Testamento ya anuncia su propósito misionero: un mensaje para todas las naciones, escrito en la lengua que más naciones compartían.'
        } }
      ],
      pensar: 'Dios habló en la lengua de la gente común, no en una lengua sagrada reservada a unos pocos. ¿Qué te dice eso sobre cómo quiere que se comunique hoy su Palabra?'
    },
    {
      id: 'autografos', n: 'Los originales y las copias', ref: 'Jeremías 36:27-32; Deuteronomio 17:18; Colosenses 4:16',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-camino.svg', alt: 'Camino del texto: escritos originales, copias a mano durante siglos, manuscritos que se conservan, comparación de los manuscritos, texto en hebreo y griego, traducción, tu Biblia', pie: 'De los escritos originales a la Biblia que tienes en las manos.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../palabra-de-dios/img/rollo-quemado.webp', alt: 'El rey Joacim corta con un cortaplumas una columna del rollo de Jeremías y la echa al brasero', pie: 'Joacim quemó el rollo, pero la palabra se volvió a escribir (Jeremías 36).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jer/36/27-28', ref: 'Jeremías 36:27-28' }
      ],
      texto: [
        'Los escritos originales de los autores bíblicos se llaman autógrafos: el rollo que dictó Jeremías, la carta que Pablo firmó de su mano. Ninguno de ellos se conserva. Lo mismo ocurre con todas las obras de la antigüedad: no tenemos el original de ningún libro de Platón, de Julio César o de Josefo. El papiro y el pergamino no duran para siempre, y los originales se gastaban justamente por usarlos.',
        { h: 'Copiar era parte del plan' },
        'La Biblia misma muestra que las copias eran el medio normal para transmitir la Palabra. El rey de Israel debía escribir «para sí en un libro una copia de esta ley, del original que está al cuidado de los sacerdotes levitas» (Dt 17:18). Pablo pidió que la carta a los Colosenses se leyera también en Laodicea, y que la de Laodicea se leyera en Colosas (Col 4:16): las cartas circulaban, y para circular había que copiarlas.',
        'Jeremías 36 lo muestra de forma dramática. El rey Joacim cortó el rollo del profeta columna por columna y lo echó al fuego. Pero Dios dijo a Jeremías: «Vuelve a tomar otro rollo, y escribe en él todas las palabras primeras que estaban en el primer rollo» (Jer 36:28). El material se quemó; la palabra no. La Palabra de Dios no depende de un objeto físico, sino de que Dios la preserve.',
        { h: 'Entonces, ¿cómo sabemos qué decían?' },
        'Si los originales no existen, ¿cómo sabemos lo que escribieron los autores? Por la comparación de las copias. Cuando un mismo texto se conserva en muchos manuscritos copiados en lugares y épocas distintos, los errores de un copista no se repiten en los demás, y el texto original se puede reconocer con mucha seguridad. Ese trabajo se llama crítica textual, y la ruta III lo explica.',
        'Hay algo más. La inspiración se refiere a los escritos originales: Dios guio a los autores para que escribieran sin error. Las copias y las traducciones son Palabra de Dios en la medida en que reproducen fielmente lo que se escribió. Por eso importa tanto saber cómo se transmitió el texto.',
        { ejercicio: {
          pregunta: 'Si no se conserva ningún autógrafo de la Biblia, ¿qué se puede concluir?',
          opciones: [
            { t: 'Que no podemos saber qué escribieron los autores bíblicos.', ok: false, por_que: 'La comparación de miles de copias independientes permite reconocer el texto original con gran seguridad.' },
            { t: 'Que la Biblia está en la misma situación que todos los libros antiguos, y que su texto se conoce por la comparación de las copias.', ok: true, por_que: 'Ningún libro antiguo conserva su original. La diferencia es que la Biblia tiene muchas más copias, y más antiguas, que cualquier otro.' },
            { t: 'Que la iglesia escondió los originales para evitar que se compararan.', ok: false, por_que: 'No hay ninguna evidencia de algo así. Los originales se gastaron por el uso, como los de cualquier obra de la época.' }
          ],
          explicacion: 'La falta de originales no es un problema propio de la Biblia. Lo excepcional de la Biblia es la abundancia de copias con que contamos para reconocer lo que se escribió.'
        } }
      ],
      pensar: 'Joacim pensó que con un cortaplumas y un brasero podía deshacerse de la palabra de Dios. ¿Qué intentos ves hoy de quitarle autoridad a la Biblia, y qué te enseña Jeremías 36 sobre su resultado?'
    },
    {
      id: 'escribas', n: 'Los escribas de Israel', ref: 'Esdras 7:6, 10; Nehemías 8:1-8; Mateo 5:18',
      fecha: -445,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/escriba-copia.webp', alt: 'Un escriba judío anciano copia con cálamo un rollo de la ley sobre pergamino, a la luz de una lámpara de aceite, con el rollo modelo abierto a su lado', pie: 'Un escriba copia la ley letra por letra, mirando el modelo.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Reglas de los copistas judíos para un rollo de la ley',
          cab: ['Regla', 'Para qué servía'],
          filas: [
            ['Copiar siempre de un rollo modelo, nunca de memoria', 'Evitar que el copista cambie una palabra por otra conocida'],
            ['Leer en voz alta cada palabra antes de escribirla', 'Fijar la atención en la palabra exacta'],
            ['Respetar las columnas, el número de líneas y los espacios del modelo', 'Que cada rollo se pareciera al anterior y los errores saltaran a la vista'],
            ['No escribir el nombre de Dios sin haberse preparado', 'Escribir con reverencia, sin distracción'],
            ['Revisar el rollo terminado y retirar el que tuviera errores', 'Que no circularan copias defectuosas']
          ],
          nota: 'Resumen de prácticas que recogen el Talmud y el tratado Soferim (siglos III a VIII d.C.); reflejan una tradición más antigua.'
        } }
      ],
      texto: [
        'Durante siglos, cada copia de las Escrituras se hizo a mano. En Israel, ese trabajo estaba en manos de los escribas (en hebreo, soferim, «los que cuentan»). El más conocido es Esdras, que volvió de Babilonia: «Era escriba diligente en la ley de Moisés» (Esd 7:6), y había preparado su corazón para estudiarla, cumplirla y enseñarla (Esd 7:10). El escriba no era un simple copista: conocía la ley, la custodiaba y la explicaba al pueblo.',
        { h: 'Un oficio cuidadoso' },
        'Los escribas copiaban con una reverencia que hoy cuesta imaginar. Las reglas que se conservan en la tradición judía exigían copiar mirando siempre un rollo modelo, leer cada palabra en voz alta antes de escribirla, respetar el mismo número de columnas y de líneas, y revisar el rollo terminado. Un rollo con errores no se usaba en la sinagoga. Cuando un rollo se gastaba, no se tiraba: se guardaba en un depósito llamado guenizá y luego se enterraba con respeto.',
        'Jesús habló de este cuidado cuando dijo que «ni una jota ni una tilde pasará de la ley, hasta que todo se haya cumplido» (Mt 5:18). La jota es la yod, la letra más pequeña del alfabeto hebreo; la tilde es el pequeño trazo que distingue una letra de otra parecida. Jesús afirmaba que la ley se cumpliría hasta en su detalle más pequeño, y su imagen venía del trabajo de los escribas, que contaban hasta esos trazos.',
        { h: 'Escribas buenos y escribas malos' },
        'Los evangelios critican a muchos escribas del tiempo de Jesús, pero no por copiar mal. Jesús les reprochó que invalidaban el mandamiento de Dios con sus tradiciones (Mr 7:9-13) y que, conociendo las Escrituras, no venían a Él para tener vida (Jn 5:39-40). Se puede copiar la Biblia con exactitud y no obedecerla. También dijo que «todo escriba docto en el reino de los cielos es semejante a un padre de familia, que saca de su tesoro cosas nuevas y cosas viejas» (Mt 13:52): el buen escriba guarda la Palabra y la comparte.',
        { ejercicio: {
          pregunta: '¿Qué reprochó Jesús a muchos escribas de su tiempo?',
          opciones: [
            { t: 'Que copiaban las Escrituras con descuido y cambiaban el texto.', ok: false, por_que: 'Los evangelios no los acusan de alterar el texto. Al contrario, eran conocidos por su exactitud.' },
            { t: 'Que ponían sus tradiciones por encima del mandamiento de Dios y no reconocían que las Escrituras hablaban de Él.', ok: true, por_que: 'Es lo que dicen Marcos 7:9-13 y Juan 5:39-40: conocían el texto, pero no lo obedecían ni veían a Cristo en él.' },
            { t: 'Que traducían la ley al arameo para que el pueblo la entendiera.', ok: false, por_que: 'Explicar la ley en la lengua del pueblo no era un pecado; Nehemías 8:8 lo presenta como algo bueno.' }
          ],
          explicacion: 'Conservar el texto con exactitud es valioso, pero no basta. La Palabra se copia para ser creída y obedecida.'
        } }
      ],
      pensar: 'Los escribas copiaban letra por letra, pero muchos no reconocieron a Cristo. ¿Cómo evitas que tu estudio de la Biblia se quede solo en conocer el texto?'
    },
    {
      id: 'copistas', n: 'Los primeros copistas cristianos', ref: 'Colosenses 4:16; 1 Tesalonicenses 5:27; 2 Pedro 3:15-16; Apocalipsis 1:3',
      fecha: [50, 300],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/copistas-iglesia.webp', alt: 'En una casa de una ciudad romana del siglo II, un creyente copia una carta apostólica en un códice de papiro mientras otro lee el original y una familia escucha', pie: 'Las cartas apostólicas se copiaban para leerlas en otras iglesias.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@col/4/16', ref: 'Colosenses 4:16' }
      ],
      texto: [
        'El Nuevo Testamento nació para ser leído en voz alta en las iglesias. Pablo ordenó: «Os conjuro por el Señor, que esta carta se lea a todos los santos hermanos» (1 Ts 5:27). Apocalipsis promete una bendición al que lee y a los que oyen (Ap 1:3). Como en las iglesias pocos tenían libros, la lectura pública era el modo en que la congregación recibía la Palabra.',
        { h: 'Cartas que viajaban' },
        'Una carta de Pablo no se quedaba en la iglesia que la recibía. Colosas debía hacer leer su carta en Laodicea, y leer la que había llegado a Laodicea (Col 4:16). Pedro sabía que las cartas de Pablo se conocían en varias regiones y las ponía junto a «las otras Escrituras» (2 P 3:16). Para que eso fuera posible, las iglesias hacían copias, y las copias se volvían a copiar. Muy pronto se formaron colecciones: las cartas de Pablo en un códice, los cuatro evangelios en otro.',
        { h: 'Copistas sin oficio' },
        'Al comienzo, los copistas cristianos no eran escribas profesionales. Eran hermanos que sabían escribir y copiaban para su iglesia, a veces con letra sencilla, sin adornos. Pablo dictaba sus cartas a un secretario, que en Romanos saluda con su nombre: «Yo Tercio, que escribí la epístola» (Ro 16:22). Él agregaba un saludo de su propia mano como señal de autenticidad (2 Ts 3:17). Con los siglos, sobre todo después del año 313, cuando cesaron las persecuciones, la copia se hizo en talleres llamados escritorios (scriptoria), con copistas profesionales y libros más cuidados.',
        'Copiar a mano produce errores: una letra confundida, una línea saltada, una palabra repetida. Pero la forma en que se difundió el Nuevo Testamento tiene una ventaja. Como se copió muy pronto y en muchos lugares a la vez, ningún grupo pudo controlar el texto ni cambiarlo en todas partes. Un error en Egipto no aparecía en las copias de Siria o de Roma. Esa multitud de copias independientes es la que permite hoy reconocer lo que se escribió.',
        { ejercicio: {
          pregunta: '¿Por qué la difusión rápida del Nuevo Testamento en muchas regiones ayuda a conocer su texto original?',
          opciones: [
            { t: 'Porque cada región copiaba con más cuidado que los escribas judíos.', ok: false, por_que: 'Los primeros copistas cristianos no eran profesionales; su ventaja no fue la técnica, sino el número y la dispersión de las copias.' },
            { t: 'Porque las copias independientes no repiten los mismos errores, y al compararlas se ve qué decía el original.', ok: true, por_que: 'Si un error aparece en una sola rama de copias y no en las demás, se reconoce como error.' },
            { t: 'Porque un concilio revisó todas las copias y corrigió los errores.', ok: false, por_que: 'Ningún concilio revisó el texto de todas las copias. Justamente por estar tan dispersas, nadie podía controlarlas.' }
          ],
          explicacion: 'La dispersión del texto lo protegió: nadie pudo alterarlo en todas partes, y la comparación de las ramas independientes deja ver el original.'
        } }
      ],
      pensar: 'Los primeros cristianos copiaban a mano las cartas para que otras iglesias pudieran leerlas. ¿Qué haces tú para que la Palabra llegue a quien todavía no la tiene?'
    }
  ];
  window.__MANUSCRITOS = { escritura };
})();
