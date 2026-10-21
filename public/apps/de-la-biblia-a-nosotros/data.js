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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Trae, cuando vengas, el capote que dejé en Troas en casa de Carpo, y los libros, mayormente los pergaminos.', ref: '2 Timoteo 4:13' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y vino palabra de Jehová a Jeremías, después que el rey quemó el rollo, las palabras que Baruc había escrito de boca de Jeremías, diciendo: Vuelve a tomar otro rollo, y escribe en él todas las palabras primeras que estaban en el primer rollo que quemó Joacim rey de Judá.', ref: 'Jeremías 36:27-28' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cuando esta carta haya sido leída entre vosotros, haced que también se lea en la iglesia de los laodicenses, y que la de Laodicea la leáis también vosotros.', ref: 'Colosenses 4:16' }
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
/* De la Biblia a nosotros · ruta II. El texto del Antiguo Testamento (ver encabezado en parte1.js) */
(() => {
  const antiguo = [
    {
      id: 'mas-antiguos', n: 'Los textos bíblicos más antiguos', ref: 'Números 6:24-26; Deuteronomio 5:6-21; 6:4-9',
      fecha: [-600, -100],
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia; Jehová alce sobre ti su rostro, y ponga en ti paz.', ref: 'Números 6:24-26' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Testigos antiguos del texto hebreo',
          cab: ['Testigo', 'Fecha aproximada', 'Contenido'],
          filas: [
            ['Amuletos de Ketef Hinnom (Jerusalén)', 'Hacia 600 a.C.', 'Una forma de la bendición sacerdotal (Nm 6:24-26) en dos pequeños rollos de plata'],
            ['Papiro Nash (Egipto)', 'Siglo II a.C.', 'Los diez mandamientos y el Shemá (Dt 6:4-5) en una sola hoja'],
            ['Rollos del mar Muerto (Qumrán)', '250 a.C. – 68 d.C.', 'Unos 230 manuscritos bíblicos, de casi todos los libros del Antiguo Testamento'],
            ['Códice de Alepo', 'Hacia 930 d.C.', 'La Biblia hebrea completa con vocales y notas masoréticas; hoy le falta casi toda la ley'],
            ['Códice de Leningrado', '1008 d.C.', 'La Biblia hebrea completa más antigua que se conserva entera']
          ],
          nota: 'Fechas según los estudios arqueológicos y paleográficos; son aproximadas.'
        } }
      ],
      texto: [
        'Los libros del Antiguo Testamento se escribieron a lo largo de unos mil años, desde Moisés hasta Malaquías. ¿Cuáles son los manuscritos más antiguos que conservamos? Hasta mediados del siglo XX, la respuesta era desalentadora: las Biblias hebreas completas más antiguas eran del siglo X d.C. Hoy sabemos mucho más.',
        { h: 'Dos rollos de plata' },
        'En 1979, en unas tumbas excavadas en la roca frente a los muros de Jerusalén, en un lugar llamado Ketef Hinnom, los arqueólogos encontraron dos rollitos de plata del tamaño de un dedo. Se llevaban colgados como amuletos. Tardaron años en desenrollarlos sin romperlos. Grabada en ellos había una forma de la bendición que Dios dio a los sacerdotes: «Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia; Jehová alce sobre ti su rostro, y ponga en ti paz» (Nm 6:24-26). Son de alrededor del año 600 a.C., la época de Jeremías y del rey Josías: los fragmentos de texto bíblico más antiguos que se conocen.',
        'Este hallazgo tiene un valor que va más allá de su antigüedad. Muestra que, antes del exilio a Babilonia, los habitantes de Jerusalén ya conocían este texto de Números y lo consideraban tan precioso que lo llevaban consigo hasta la tumba.',
        { h: 'El papiro Nash' },
        'Antes de 1947, el texto hebreo más antiguo conocido era una sola hoja de papiro comprada en Egipto en 1902, el papiro Nash. Es del siglo II a.C. y contiene los diez mandamientos y el comienzo del Shemá: «Oye, Israel: Jehová nuestro Dios, Jehová uno es» (Dt 6:4). Probablemente servía para la enseñanza o la oración diaria.',
        'Con estos testigos, y sobre todo con los rollos del mar Muerto, la distancia entre los escritos originales y las copias que conocemos se acortó en más de mil años. Las próximas estaciones explican qué mostraron esas copias.',
        { ejercicio: {
          pregunta: '¿Qué muestran los amuletos de Ketef Hinnom, además de su antigüedad?',
          opciones: [
            { t: 'Que la bendición sacerdotal de Números ya se conocía y se apreciaba en Jerusalén antes del exilio.', ok: true, por_que: 'Los amuletos son de hacia el 600 a.C., antes de la caída de Jerusalén, y llevaban este texto como algo precioso.' },
            { t: 'Que el libro de Números se escribió completo en láminas de plata.', ok: false, por_que: 'Los amuletos contienen solo unas líneas, una forma de la bendición sacerdotal. No son una copia del libro.' },
            { t: 'Que los israelitas usaban la Escritura como un objeto mágico aprobado por Dios.', ok: false, por_que: 'Que alguien la llevara como amuleto dice algo de su aprecio por el texto, no que Dios aprobara ese uso.' }
          ],
          explicacion: 'Un hallazgo pequeño puede tener mucho peso: confirma que el texto ya circulaba y se valoraba siglos antes de las copias más antiguas que se conocían.'
        } }
      ],
      pensar: 'Alguien en Jerusalén llevaba la bendición de Números 6 junto a su corazón hace veintiséis siglos. ¿Qué palabra de Dios llevas tú contigo, en la memoria, para los días difíciles?'
    },
    {
      id: 'masoretico', n: 'El Texto Masorético', ref: 'Mateo 5:18; Romanos 3:1-2; Salmo 12:6-7',
      fecha: [600, 1008],
      visual: [
        { tipo: 'imagen', titulo: 'Fotografía', src: 'img/codice-alepo.webp', alt: 'Página del Códice de Alepo con el comienzo del libro de Josué en tres columnas de texto hebreo con puntos vocálicos y notas en los márgenes', pie: 'Códice de Alepo, hacia el año 930: comienzo de Josué.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué agregaron los masoretas al texto',
          cab: ['Elemento', 'Qué es', 'Para qué servía'],
          filas: [
            ['Vocales', 'Puntos y rayas debajo, encima o dentro de las consonantes', 'Fijar la pronunciación tradicional sin tocar las consonantes'],
            ['Acentos', 'Signos de entonación y de pausa', 'Indicar cómo se lee y se canta el texto en la sinagoga, y cómo se agrupan las palabras'],
            ['Masora', 'Notas en los márgenes y al final de cada libro', 'Contar palabras y letras, señalar formas raras y detectar errores de copia']
          ],
          nota: 'Las consonantes se copiaban sin cambios; vocales, acentos y notas se escribían alrededor de ellas.'
        } }
      ],
      texto: [
        'El texto hebreo que usan las Biblias de hoy se llama Texto Masorético. Debe su nombre a los masoretas, escribas judíos que trabajaron entre los siglos VI y X d.C., sobre todo en Tiberíades, junto al mar de Galilea. La palabra viene de masorá, «tradición»: su tarea era transmitir el texto recibido tal como lo habían recibido.',
        { h: 'Vocales sin tocar las consonantes' },
        'El hebreo antiguo se escribía solo con consonantes. Mientras se habló como lengua materna, eso no era problema; pero con los siglos el pueblo hablaba arameo y luego otras lenguas, y la pronunciación tradicional corría peligro de perderse. Los masoretas inventaron un sistema de puntos y pequeñas rayas que se escriben debajo, encima o dentro de las letras. Lo admirable es que no cambiaron ni una consonante del texto recibido: las vocales se agregaron alrededor, como quien anota la música sin tocar la letra de un himno.',
        { h: 'Contar para no equivocarse' },
        'En los márgenes escribieron notas, la masora. Contaban cuántas veces aparecía una palabra, cuál era el versículo central de un libro, qué formas eran únicas. Si al terminar una copia el número no coincidía, sabían que algo se había saltado o repetido. Cuando el texto que habían recibido les parecía extraño, no lo corregían: lo dejaban tal cual y anotaban al margen cómo debía leerse. Así trataban un texto que, como dijo Pablo, fue confiado a Israel: «les ha sido confiada la palabra de Dios» (Ro 3:2).',
        { h: 'Dos códices famosos' },
        'El Códice de Alepo fue vocalizado hacia el año 930 por Aarón ben Asher, el masoreta más respetado. Durante siglos se guardó en la sinagoga de Alepo, en Siria; en 1947 fue dañado en un ataque contra la comunidad judía, y hoy, en Jerusalén, le falta casi toda la ley de Moisés. El Códice de Leningrado, copiado en 1008 en la misma tradición, es la Biblia hebrea completa más antigua que se conserva entera, y es la base de las ediciones hebreas que usan hoy los traductores.',
        { ejercicio: {
          pregunta: '¿Qué hacían los masoretas cuando una palabra del texto recibido les parecía extraña?',
          opciones: [
            { t: 'La corregían por la forma que creían correcta.', ok: false, por_que: 'Justamente no lo hacían: tenían por norma no cambiar las consonantes que habían recibido.' },
            { t: 'La dejaban como estaba y anotaban al margen cómo debía leerse.', ok: true, por_que: 'Así conservaban a la vez el texto escrito y la lectura tradicional, sin mezclar ambas cosas.' },
            { t: 'Eliminaban el versículo completo para no transmitir un error.', ok: false, por_que: 'Eliminar texto habría contradicho todo su método. Su preocupación era no añadir ni quitar.' }
          ],
          explicacion: 'Los masoretas trataban el texto como algo recibido, no como algo propio. Esa actitud es la razón de su exactitud.'
        } }
      ],
      pensar: 'Los masoretas no se atrevían a cambiar una letra que no entendían. ¿Cómo tratas tú los pasajes que no entiendes o que no te gustan?'
    },
    {
      id: 'qumran', n: 'Los rollos del mar Muerto', ref: 'Isaías 40:8; Isaías 53; Salmo 119:89',
      fecha: [-250, 68],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/pastor-qumran.webp', alt: 'Un joven pastor beduino se asoma a la entrada de una cueva en un acantilado del desierto de Judea y descubre en la penumbra unas tinajas de barro', pie: 'Recreación del hallazgo de 1947 en las cuevas de Qumrán.', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Fotografía', src: 'img/rollo-isaias.webp', alt: 'Sección desenrollada del Gran rollo de Isaías, con columnas de texto hebreo sobre pergamino gastado', pie: 'El Gran rollo de Isaías de Qumrán, de hacia el año 125 a.C.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-mil-anos.svg', alt: 'Línea del tiempo con Isaías hacia el 700 a.C., el Gran rollo de Isaías hacia el 125 a.C. y el Códice de Alepo hacia el 930 d.C.: unos mil años entre ambas copias', pie: 'Mil años más cerca del profeta.', origen: 'esquema' }
      ],
      texto: [
        'En el invierno de 1946 a 1947, un joven pastor beduino que buscaba una cabra perdida en los acantilados de Qumrán, junto al mar Muerto, entró en una cueva y encontró unas tinajas de barro con rollos envueltos en lino. Fue el comienzo del mayor hallazgo de manuscritos del siglo XX. Entre 1947 y 1956 se exploraron once cuevas y se recuperaron restos de unos novecientos manuscritos, la mayoría en fragmentos.',
        { h: 'Copias mil años más antiguas' },
        'Unos 230 de esos manuscritos son libros del Antiguo Testamento. Están representados todos los libros salvo Ester. Fueron copiados entre el siglo III a.C. y el año 68 d.C., cuando los romanos destruyeron el lugar durante la guerra contra los judíos. De golpe, los estudiosos tuvieron copias del Antiguo Testamento unos mil años más antiguas que las que conocían.',
        'La joya es el Gran rollo de Isaías: un rollo de pergamino de más de siete metros, con los 66 capítulos del libro, copiado hacia el año 125 a.C. Se exhibe hoy en Jerusalén. La pregunta era inevitable: después de mil años de copias a mano, ¿el texto masorético de Isaías sería muy distinto de este rollo?',
        { h: 'Lo que mostró la comparación' },
        'La respuesta sorprendió incluso a los estudiosos escépticos. El Gran rollo de Isaías coincide palabra por palabra con el texto masorético en la inmensa mayoría de los versículos. Las diferencias son sobre todo de ortografía (letras que indican vocales, como escribir «Davit» o «David»), algunas palabras agregadas u omitidas por descuido y unas pocas variantes de sentido, que la ruta siguiente analiza. Mil años de copias no habían alterado el mensaje del profeta. Como dice el mismo libro: «la palabra del Dios nuestro permanece para siempre» (Is 40:8).',
        'Conviene decirlo con exactitud: no todos los rollos bíblicos de Qumrán coinciden tanto con el texto masorético. Algunos, como una copia breve de Jeremías, se parecen más al texto hebreo que usó la Septuaginta. Esos casos ayudan a los traductores a evaluar algunas lecturas, y las Biblias modernas los mencionan en notas. Pero la mayoría de los manuscritos de Qumrán pertenece a la misma tradición del texto masorético.',
        { ejercicio: {
          pregunta: '¿Qué mostró la comparación del Gran rollo de Isaías con el texto masorético?',
          opciones: [
            { t: 'Que el Isaías de nuestras Biblias había cambiado mucho durante la Edad Media.', ok: false, por_que: 'Fue lo contrario: después de unos mil años de copias, el texto coincidía en la inmensa mayoría de los versículos.' },
            { t: 'Que ambos textos coinciden casi por completo, y que las diferencias son sobre todo de ortografía.', ok: true, por_que: 'Las variantes de sentido son pocas y no afectan ninguna enseñanza del libro.' },
            { t: 'Que el rollo de Qumrán tiene capítulos que faltan en nuestras Biblias.', ok: false, por_que: 'El Gran rollo de Isaías tiene los mismos 66 capítulos que el texto masorético.' }
          ],
          explicacion: 'Los rollos del mar Muerto permitieron comprobar, con copias mil años más antiguas, la fidelidad con que se transmitió el Antiguo Testamento.'
        } }
      ],
      pensar: 'Durante casi dos mil años, esos rollos esperaron en una cueva. ¿Qué te enseña este hallazgo sobre la manera en que Dios cuida su Palabra?'
    },
    {
      id: 'versiones-antiguas', n: 'La Septuaginta y otras versiones antiguas', ref: 'Hebreos 10:5-7; Salmo 40:6-8; Nehemías 8:8',
      fecha: [-250, 400],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Versiones antiguas del Antiguo Testamento',
          cab: ['Versión', 'Lengua y fecha', 'Qué aporta'],
          filas: [
            ['Septuaginta (LXX)', 'Griego; ley en el siglo III a.C., el resto hasta el siglo I a.C.', 'Muestra cómo se leía el hebreo antes de Cristo; la citan a menudo los autores del Nuevo Testamento'],
            ['Pentateuco samaritano', 'Hebreo en escritura antigua; tradición samaritana', 'Los cinco libros de Moisés en una tradición separada de la judía'],
            ['Tárgumes', 'Arameo; traducciones explicativas que se leían en la sinagoga', 'Cómo entendían el texto los judíos de habla aramea'],
            ['Peshitta', 'Siríaco; siglos I–II d.C. en adelante', 'La Biblia de las iglesias de habla siríaca'],
            ['Vulgata', 'Latín; Jerónimo, hacia 405 d.C.', 'Traducida del hebreo de su tiempo; se estudia en la ruta IV']
          ],
          nota: 'Las versiones antiguas sirven para comparar, no para reemplazar el texto hebreo.'
        } },
        { tipo: 'cita', titulo: 'Salmo 40', texto: 'Sacrificio y ofrenda no te agrada; Has abierto mis oídos; Holocausto y expiación no has demandado. Entonces dije: He aquí, vengo; En el rollo del libro está escrito de mí; El hacer tu voluntad, Dios mío, me ha agradado, Y tu ley está en medio de mi corazón.', ref: 'Salmo 40:6-8' },
        { tipo: 'cita', titulo: 'Hebreos 10', texto: 'Por lo cual, entrando en el mundo dice: Sacrificio y ofrenda no quisiste; Mas me preparaste cuerpo. Holocaustos y expiaciones por el pecado no te agradaron. Entonces dije: He aquí que vengo, oh Dios, para hacer tu voluntad, Como en el rollo del libro está escrito de mí.', ref: 'Hebreos 10:5-7' }
      ],
      texto: [
        'Además de las copias en hebreo, el Antiguo Testamento se tradujo muy temprano a otras lenguas. Esas traducciones antiguas son testigos valiosos: muestran qué texto hebreo tenían delante los traductores siglos antes de los manuscritos medievales.',
        { h: 'La Septuaginta' },
        'Después de Alejandro Magno, muchos judíos vivían en ciudades de habla griega, sobre todo en Alejandría de Egipto, y ya no entendían bien el hebreo. Allí, a partir del siglo III a.C., se tradujo la ley de Moisés al griego, y luego el resto de los libros. Una leyenda antigua cuenta que setenta y dos traductores la hicieron en setenta y dos días; de ahí su nombre, Septuaginta («setenta»), que se abrevia LXX.',
        'La Septuaginta fue la Biblia de los judíos de la dispersión y, después, de la primera iglesia, que predicaba en griego. Muchas citas del Antiguo Testamento en el Nuevo siguen su texto. Un ejemplo se ve en las pestañas. El Salmo 40, en el hebreo, dice: «Has abierto mis oídos» (Sal 40:6). La carta a los Hebreos cita el mismo salmo según la Septuaginta: «Mas me preparaste cuerpo» (He 10:5). Inspirado por el Espíritu, el autor usa la versión que leían sus destinatarios, y en ella ve anunciada la encarnación del Hijo, que vino a hacer la voluntad del Padre.',
        { h: 'Otras versiones' },
        'Los samaritanos conservaron su propia copia del Pentateuco, escrita con el alfabeto hebreo antiguo. Coincide en lo esencial con el texto masorético; sus diferencias más notables son de ortografía, y algunas reflejan la disputa samaritana sobre el monte Gerizim (Jn 4:20). En las sinagogas de habla aramea, después de leer el hebreo se explicaba en arameo, como en tiempos de Esdras, cuando los levitas «ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Esas explicaciones se pusieron por escrito en los tárgumes. Las iglesias de Siria tradujeron la Biblia al siríaco (la Peshitta), y la iglesia de Occidente, al latín.',
        { posturas: {
          titulo: '¿Qué hacer cuando la Septuaginta y el hebreo difieren?',
          a: { n: 'Preferir la Septuaginta', t: 'Las iglesias ortodoxas usan la Septuaginta como su Antiguo Testamento, porque fue la Biblia de los apóstoles y de los padres griegos, y porque en algunos pasajes parece conservar una forma antigua del texto hebreo.' },
          b: { n: 'Partir del texto hebreo', t: 'Las traducciones evangélicas parten del texto masorético, porque es el texto en la lengua original transmitido por Israel, a quien fueron confiadas las palabras de Dios (Ro 3:2). La Septuaginta y los rollos de Qumrán se consultan en los pocos pasajes donde el hebreo presenta una dificultad.' },
          c: 'Este recurso sigue la segunda postura. Que un autor inspirado cite la Septuaginta no hace inspirada toda esa traducción: el Espíritu guio al autor al elegir y aplicar esas palabras. La Reina-Valera traduce el Antiguo Testamento del hebreo.'
        } }
      ],
      pensar: 'Dios permitió que su Palabra se tradujera al griego siglos antes de Cristo, y esa traducción preparó el camino para el evangelio en todo el imperio. ¿Qué te dice eso sobre los tiempos de Dios?'
    },
    {
      id: 'preservado', n: 'Un texto preservado', ref: 'Isaías 40:6-8; Isaías 53:11; Mateo 24:35',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Voz que decía: Da voces. Y yo respondí: ¿Qué tengo que decir a voces? Que toda carne es hierba, y toda su gloria como flor del campo. La hierba se seca, y la flor se marchita, porque el viento de Jehová sopló en ella; ciertamente como hierba es el pueblo. Sécase la hierba, marchítase la flor; mas la palabra del Dios nuestro permanece para siempre.', ref: 'Isaías 40:6-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Isaías 53 en los rollos de Qumrán y en el texto masorético',
          cab: ['Tipo de diferencia', 'Ejemplo', '¿Cambia el sentido?'],
          filas: [
            ['Ortografía', 'Una misma palabra escrita con o sin letra que indica la vocal', 'No'],
            ['Pequeñas formas gramaticales', 'Una conjunción «y» presente o ausente', 'No'],
            ['Una palabra agregada', '«Luz» en el versículo 11: «verá luz» en lugar de «verá»', 'Muy poco; la lectura coincide con la Septuaginta']
          ],
          nota: 'Según el análisis que recogen Geisler y Nix (Introducción general a la Biblia): de las 166 palabras del capítulo, solo una palabra de tres letras representa una diferencia de contenido.'
        } }
      ],
      texto: [
        'Después de recorrer los testigos del Antiguo Testamento, se puede resumir lo que sabemos. El texto hebreo que se usa para traducir hoy se apoya en una tradición de copias muy cuidadosas, comprobada por manuscritos mil años más antiguos y por traducciones hechas antes de Cristo.',
        { h: 'Un ejemplo: Isaías 53' },
        'Isaías 53, el capítulo del Siervo sufriente, es uno de los textos más importantes del Antiguo Testamento para la fe cristiana. Al compararlo en los rollos de Qumrán y en el texto masorético, las diferencias son casi todas de ortografía. La única de contenido está en el versículo 11, que en nuestra Biblia dice: «Verá el fruto de la aflicción de su alma, y quedará satisfecho» (Is 53:11). El rollo de Qumrán, igual que la Septuaginta, dice que el Siervo «verá luz» después de su aflicción. Algunas traducciones modernas incluyen esa palabra; la Reina-Valera sigue el texto masorético. En cualquiera de las dos lecturas, el versículo anuncia que el Siervo, después de sufrir, vive y ve el fruto de su obra: una profecía de la resurrección.',
        { h: 'Lo que la crítica textual no cambia' },
        'Ninguna de las diferencias entre los manuscritos del Antiguo Testamento cambia una doctrina ni un hecho importante de la historia bíblica. Las variantes que existen se refieren a la ortografía, a nombres y números en algunos pasajes de Samuel, Reyes y Crónicas (donde los números se escribían con signos fáciles de confundir) y a algunas palabras sueltas. Las Biblias de estudio señalan esos casos en notas, y nada se oculta.',
        'Jesús dio por sentado que la Escritura de su tiempo era confiable: la citaba con un «escrito está» y afirmaba que «la Escritura no puede ser quebrantada» (Jn 10:35). No leía los autógrafos de Moisés ni de Isaías, sino copias, y aun así las trató como Palabra de Dios. El creyente puede hacer lo mismo con confianza: «El cielo y la tierra pasarán, pero mis palabras no pasarán» (Mt 24:35).',
        { ejercicio: {
          pregunta: 'Jesús leía y citaba copias de las Escrituras, no los autógrafos. ¿Qué se puede aprender de eso?',
          opciones: [
            { t: 'Que solo los originales son Palabra de Dios, y que las copias no tienen autoridad.', ok: false, por_que: 'Jesús citó las copias de su tiempo con plena autoridad: «escrito está». Una copia fiel transmite la Palabra de Dios.' },
            { t: 'Que una copia fiel transmite con autoridad lo que Dios inspiró.', ok: true, por_que: 'La inspiración se refiere a los originales, pero su autoridad llega al lector por medio de copias y traducciones fieles.' },
            { t: 'Que a Jesús no le importaba si el texto se había copiado bien.', ok: false, por_que: 'Jesús enseñó que ni una jota ni una tilde pasaría de la ley (Mt 5:18). Le importaba el texto hasta su detalle.' }
          ],
          explicacion: 'Los originales fueron inspirados; las copias fieles los transmiten. Por eso el creyente puede leer su Biblia como Palabra de Dios.'
        } }
      ],
      pensar: 'La hierba se seca y la flor se marchita, pero la Palabra permanece. ¿En qué áreas de tu vida necesitas descansar en algo que no cambia?'
    }
  ];
  window.__MANUSCRITOS.antiguo = antiguo;
})();
/* De la Biblia a nosotros · ruta III. El texto del Nuevo Testamento (ver encabezado en parte1.js) */
(() => {
  const nuevo = [
    {
      id: 'abundancia', n: 'Una abundancia sin igual', ref: 'Lucas 1:1-4; Juan 20:30-31; Juan 21:25',
      fecha: [50, 1500],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-copias.svg', alt: 'Barras que comparan el número de copias y los años entre el original y la copia más antigua: Nuevo Testamento, más de 5.800 manuscritos griegos y unos 50 años; Homero, unos 1.800; Guerra de las Galias de César, unos 250 y unos 900 años; Anales de Tácito, libros 1 a 6 en un solo manuscrito y unos 750 años', pie: 'Copias que se conservan y distancia entre el original y la copia más antigua (cifras aproximadas).', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Testigos del Nuevo Testamento',
          cab: ['Tipo de testigo', 'Cantidad aproximada', 'Época'],
          filas: [
            ['Papiros griegos', 'Unos 140', 'Siglos II a VIII'],
            ['Códices en letra mayúscula (unciales)', 'Unos 320', 'Siglos III a XI'],
            ['Códices en letra minúscula', 'Unos 2.900', 'Siglos IX a XVI'],
            ['Leccionarios (lecturas para el culto)', 'Unos 2.500', 'Siglos IV a XVI'],
            ['Manuscritos en latín', 'Más de 10.000', 'Siglos IV a XVI'],
            ['Manuscritos en siríaco, copto, armenio y otras lenguas', 'Varios miles', 'Siglos II en adelante']
          ],
          nota: 'En total, más de 5.800 manuscritos griegos catalogados. Las cifras crecen con nuevos hallazgos.'
        } }
      ],
      texto: [
        'Lucas escribió su evangelio después de «haber investigado con diligencia todas las cosas desde su origen», para que Teófilo conociera «bien la verdad de las cosas» en que había sido instruido (Lc 1:3-4). Su propósito supone que lo escrito se puede conocer con certeza. ¿Podemos hoy saber qué escribió Lucas? La respuesta está en el número y la antigüedad de las copias.',
        { h: 'Más copias que cualquier otro libro antiguo' },
        'Del Nuevo Testamento se conservan más de 5.800 manuscritos griegos, desde pequeños fragmentos hasta Biblias completas. A eso se suman más de diez mil manuscritos de la traducción latina y miles en siríaco, copto, armenio, etíope y otras lenguas. Ningún otro libro de la antigüedad se le acerca.',
        'La comparación ayuda a dimensionarlo. De la Guerra de las Galias de Julio César se conservan unas 250 copias, y la más antigua es unos novecientos años posterior al autor. De los primeros seis libros de los Anales de Tácito, el historiador romano, existe un solo manuscrito, copiado unos siete siglos y medio después. Los historiadores confían en esos textos y nadie duda de que conocemos lo que escribieron César o Tácito. La Ilíada de Homero, el libro más copiado de la antigüedad griega, tiene alrededor de 1.800 manuscritos, la mayoría medievales.',
        { h: 'Copias muy cercanas a los originales' },
        'No solo importa el número, sino la distancia. Los escritos del Nuevo Testamento se terminaron antes del año 100. Hay fragmentos del siglo II, papiros extensos de alrededor del año 200 y Biblias completas del siglo IV. Entre el original y algunas de las copias que conservamos hay pocas décadas, no siglos. Las estaciones siguientes presentan a esos testigos.',
        'Juan dijo que no se escribió todo lo que Jesús hizo, pero que «éstas se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios» (Jn 20:31). Lo que Dios quiso que se escribiera para nuestra fe nos ha llegado con una riqueza de testigos que no tiene igual.',
        { ejercicio: {
          pregunta: '¿Qué diferencia al Nuevo Testamento de las demás obras antiguas en cuanto a su texto?',
          opciones: [
            { t: 'Que se conservan sus escritos originales.', ok: false, por_que: 'Como ninguna obra antigua, el Nuevo Testamento no conserva sus autógrafos. Su ventaja está en las copias.' },
            { t: 'Que tiene muchísimas más copias, y mucho más cercanas a los originales, que cualquier otro libro antiguo.', ok: true, por_que: 'Más de 5.800 manuscritos griegos, algunos a pocas décadas del original, frente a decenas o cientos de copias medievales en otras obras.' },
            { t: 'Que todas sus copias son idénticas, sin una sola diferencia.', ok: false, por_que: 'Las copias hechas a mano tienen diferencias. La abundancia de copias es justamente lo que permite reconocer el texto original.' }
          ],
          explicacion: 'Si se acepta que conocemos el texto de César o de Tácito, con mayor razón podemos confiar en que conocemos lo que escribieron los apóstoles.'
        } }
      ],
      pensar: 'Dios pudo haber dejado su Palabra con pocos testigos, pero la rodeó de miles. ¿Qué dudas sobre la Biblia te ayuda a responder esta abundancia?'
    },
    {
      id: 'papiros', n: 'Los papiros', ref: 'Juan 18:31-38; 1 Corintios 15:3-8; 2 Pedro 3:15-16',
      fecha: [125, 250],
      visual: [
        { tipo: 'imagen', titulo: 'Fotografía', src: 'img/papiro-p52.webp', alt: 'Fragmento de papiro con forma aproximadamente triangular, del tamaño de una tarjeta, con letras griegas en tinta oscura', pie: 'Papiro 52 (Biblioteca John Rylands, Mánchester): Juan 18:31-33.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces les dijo Pilato: Tomadle vosotros, y juzgadle según vuestra ley. Y los judíos le dijeron: A nosotros no nos está permitido dar muerte a nadie; para que se cumpliese la palabra que Jesús había dicho, dando a entender de qué muerte iba a morir. Entonces Pilato volvió a entrar en el pretorio, y llamó a Jesús y le dijo: ¿Eres tú el Rey de los judíos?', ref: 'Juan 18:31-33' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Algunos papiros importantes',
          cab: ['Papiro', 'Fecha aproximada', 'Contenido'],
          filas: [
            ['P52 (Rylands)', 'Siglo II', 'Juan 18:31-33, 37-38; el fragmento más antiguo conocido del Nuevo Testamento'],
            ['P46 (Chester Beatty)', 'Hacia 200', 'Gran parte de las cartas de Pablo y Hebreos'],
            ['P66 (Bodmer)', 'Hacia 200', 'Casi todo el evangelio de Juan'],
            ['P75 (Bodmer)', 'Hacia 175–225', 'Gran parte de Lucas y de Juan'],
            ['P45 (Chester Beatty)', 'Siglo III', 'Partes de los cuatro evangelios y de Hechos'],
            ['P47 (Chester Beatty)', 'Siglo III', 'Apocalipsis 9–17']
          ],
          nota: 'Fechas según la paleografía (el estudio de la forma de la letra); los especialistas discuten algunos años arriba o abajo.'
        } }
      ],
      texto: [
        'Los manuscritos más antiguos del Nuevo Testamento son papiros encontrados en Egipto, cuyo clima seco los conservó. Se han catalogado unos 140. Muchos son fragmentos, pero algunos contienen libros casi completos.',
        { h: 'Un trozo de Juan' },
        'En 1920 se compró en Egipto un pequeño trozo de papiro que pasó años sin estudiarse en la Biblioteca John Rylands de Mánchester. En 1934 se identificó: era una hoja de un códice del evangelio de Juan, con parte del diálogo entre Pilato y los judíos por un lado (Jn 18:31-33) y la pregunta de Pilato «¿Qué es la verdad?» por el otro (Jn 18:38). Por la forma de la letra se lo fechó en la primera mitad del siglo II; algunos especialistas proponen una fecha algo más tardía, dentro del mismo siglo. Se lo conoce como Papiro 52.',
        'Su importancia es enorme. Juan escribió su evangelio, según la tradición, en Éfeso, hacia el año 90. Pocas décadas después, una copia de ese evangelio ya circulaba en Egipto, a más de mil kilómetros. Durante el siglo XIX, algunos críticos sostuvieron que Juan se había escrito muy tarde, hacia el año 160 o después. Este pequeño fragmento hizo imposible esa teoría.',
        { h: 'Libros casi completos' },
        'Los papiros de las colecciones Chester Beatty y Bodmer, descubiertos en el siglo XX, son más extensos. El P46, de alrededor del año 200, contiene gran parte de las cartas de Pablo: un libro que estuvo en manos de creyentes apenas un siglo y medio después de que el apóstol las escribiera. El P75 contiene gran parte de Lucas y de Juan, y su texto coincide de manera notable con el del Códice Vaticano, copiado más de un siglo después. Esa coincidencia muestra que el texto se copiaba con fidelidad de una generación a la siguiente.',
        { ejercicio: {
          pregunta: '¿Por qué es tan importante el Papiro 52, aunque tenga solo unos pocos versículos?',
          opciones: [
            { t: 'Porque es el autógrafo del evangelio de Juan.', ok: false, por_que: 'Es una copia hecha en Egipto, no el original que escribió Juan.' },
            { t: 'Porque contiene un relato de Jesús que no aparece en los evangelios.', ok: false, por_que: 'Contiene versículos conocidos de Juan 18; su valor no está en algo nuevo, sino en su antigüedad.' },
            { t: 'Porque muestra que el evangelio de Juan ya se copiaba en Egipto pocas décadas después de escrito.', ok: true, por_que: 'Eso descarta las teorías que fechaban el evangelio a fines del siglo II.' }
          ],
          explicacion: 'Un fragmento pequeño puede tener gran peso como testigo: confirma que el evangelio de Juan se escribió en el siglo I y se difundió con rapidez.'
        } }
      ],
      pensar: 'En un trozo de papiro del tamaño de una tarjeta quedó la pregunta de Pilato: «¿Qué es la verdad?». ¿Cómo responderías tú esa pregunta a la luz de Juan 14:6?'
    },
    {
      id: 'codices', n: 'Los grandes códices', ref: 'Mateo 6:9-13; Marcos 16:8; Hebreos 9:14',
      fecha: [300, 450],
      visual: [
        { tipo: 'imagen', titulo: 'Fotografía', src: 'img/codice-sinaitico.webp', alt: 'Página del Códice Sinaítico con cuatro columnas de texto griego en letras mayúsculas sobre pergamino', pie: 'Códice Sinaítico, siglo IV: una página de Mateo 6.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los grandes códices en letra mayúscula',
          cab: ['Códice', 'Fecha aproximada', 'Dónde está', 'Contenido'],
          filas: [
            ['Vaticano (B)', '300–325', 'Biblioteca Vaticana', 'Casi toda la Biblia griega; le faltan el final de Hebreos, las cartas pastorales, Filemón y Apocalipsis'],
            ['Sinaítico (א)', '330–360', 'Biblioteca Británica (la mayor parte), Leipzig, San Petersburgo y el Sinaí', 'El Nuevo Testamento completo, gran parte del Antiguo en griego y dos escritos cristianos antiguos'],
            ['Alejandrino (A)', '400–440', 'Biblioteca Británica', 'Casi toda la Biblia griega'],
            ['Beza (D)', 'Hacia 400', 'Universidad de Cambridge', 'Evangelios y Hechos en griego y latín, con muchas lecturas propias']
          ],
          nota: 'Las letras entre paréntesis son las siglas con que los citan las ediciones del texto griego.'
        } }
      ],
      texto: [
        'En el año 313, el emperador Constantino puso fin a las persecuciones. Las iglesias pudieron encargar Biblias completas en pergamino, copiadas por profesionales con letra mayúscula y cuidada, en tres o cuatro columnas por página. Algunas de esas Biblias del siglo IV se conservan hasta hoy y son testigos de primer orden.',
        { h: 'El Códice Vaticano' },
        'Se guarda en la Biblioteca Vaticana desde, al menos, el siglo XV, y se copió a comienzos del siglo IV. Contiene casi toda la Biblia en griego, aunque se perdieron sus últimas hojas: el texto se interrumpe en Hebreos 9:14. Su texto del Nuevo Testamento es de los más antiguos y cuidados que se conocen.',
        { h: 'El Códice Sinaítico' },
        'Su historia parece una novela. En 1844, el estudioso alemán Constantin von Tischendorf visitó el monasterio de Santa Catalina, al pie del monte Sinaí, y vio unas hojas antiguas de la Biblia griega. Volvió en 1859 y un monje le mostró, envuelto en un paño, el resto del códice. Es la única Biblia de su época que conserva el Nuevo Testamento completo. Hoy la mayor parte está en la Biblioteca Británica de Londres, y todas sus páginas se pueden ver en línea.',
        { h: 'Alejandrino y Beza' },
        'El Códice Alejandrino, del siglo V, llegó a Inglaterra en 1627 como regalo al rey. El Códice de Beza, de hacia el año 400, tiene los evangelios y Hechos en griego y latín en páginas enfrentadas, con muchas lecturas propias que lo hacen muy valioso para estudiar cómo se transmitió el texto.',
        'Estos códices son de mediados del siglo IV, unos 250 años después de terminado el Nuevo Testamento. Comparados con los papiros más antiguos, muestran el mismo texto en lo esencial. Sus diferencias entre sí, que se estudian en las estaciones siguientes, son las que permiten a los especialistas reconstruir con cuidado lo que escribieron los apóstoles.',
        { ejercicio: {
          pregunta: '¿Por qué aparecen las grandes Biblias completas en pergamino en el siglo IV y no antes?',
          opciones: [
            { t: 'Porque antes del siglo IV no existía el Nuevo Testamento.', ok: false, por_que: 'El Nuevo Testamento ya circulaba desde el siglo I, como muestran los papiros del siglo II y III.' },
            { t: 'Porque con el fin de las persecuciones las iglesias pudieron encargar copias grandes y costosas a copistas profesionales.', ok: true, por_que: 'La paz de la iglesia desde 313 hizo posible producir Biblias completas, caras y cuidadas.' },
            { t: 'Porque un concilio ordenó escribir por primera vez la Biblia completa.', ok: false, por_que: 'Ningún concilio ordenó eso. Las copias completas responden a las nuevas condiciones de la iglesia, no a un decreto.' }
          ],
          explicacion: 'Antes de 313, la Escritura se copiaba en códices más pequeños y modestos, muchas veces bajo persecución. La paz trajo Biblias más grandes, no un texto distinto.'
        } }
      ],
      pensar: 'Durante la persecución de Diocleciano, a comienzos del siglo IV, se ordenó quemar los libros cristianos, y muchos creyentes prefirieron morir antes que entregarlos. ¿Cuánto vale para ti tu Biblia?'
    },
    {
      id: 'testigos', n: 'Versiones antiguas y citas de los padres', ref: 'Hechos 2:5-11; 2 Timoteo 2:2; Judas 3',
      fecha: [150, 450],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres clases de testigos',
          cab: ['Testigo', 'Ejemplos', 'Qué aporta'],
          filas: [
            ['Manuscritos griegos', 'Papiros, códices, minúsculos y leccionarios', 'El texto en su lengua original'],
            ['Versiones antiguas', 'Latín antiguo y Vulgata, siríaco, copto, gótico, armenio, etíope', 'Qué texto griego tenían los traductores y en qué región circulaba'],
            ['Citas de los padres de la iglesia', 'Ireneo, Tertuliano, Clemente de Alejandría, Orígenes, Cipriano, Agustín y muchos más', 'Qué texto leía un autor fechado, en un lugar conocido']
          ],
          nota: 'Una lectura que aparece en testigos antiguos de varias regiones tiene mucho peso.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros.', ref: '2 Timoteo 2:2' }
      ],
      texto: [
        'Además de los manuscritos griegos, hay otros dos tipos de testigos que permiten conocer el texto del Nuevo Testamento. Juntos forman una red de evidencia que cubre todo el mundo cristiano antiguo.',
        { h: 'Las versiones antiguas' },
        'El evangelio salió de Jerusalén hacia todas las naciones, y en cada lugar la Escritura se tradujo a la lengua del pueblo. Ya en el siglo II había traducciones al latín y al siríaco; después vinieron el copto en Egipto, el gótico entre los pueblos germanos, el armenio, el georgiano y el etíope. Una traducción antigua muestra qué texto griego tenían sus traductores. Si una lectura aparece en el latín de África, en el siríaco de Mesopotamia y en el copto de Egipto, es casi seguro que estaba en el texto desde muy temprano.',
        { h: 'Las citas de los padres' },
        'Los pastores y maestros de la iglesia antigua, a quienes se llama padres de la iglesia, citaban la Escritura constantemente en sermones, comentarios y cartas. Ireneo, obispo en las Galias hacia el año 180, cita casi todos los libros del Nuevo Testamento. Orígenes, en el siglo III, escribió comentarios versículo por versículo. Como sabemos cuándo y dónde vivió cada uno, sus citas fechan y ubican las lecturas que usaba.',
        'Las citas son tantas que el erudito Bruce Metzger afirmó que, si se perdieran todos los manuscritos, casi todo el Nuevo Testamento podría reconstruirse solo con ellas. Hay que usarlas con cuidado, porque a veces los padres citaban de memoria o resumían, pero su testimonio es muy valioso.',
        'Pablo pidió a Timoteo que encargara lo que había oído «a hombres fieles que sean idóneos para enseñar también a otros» (2 Ti 2:2). La cadena de la fe se transmitió de generación en generación, y en esa cadena también se transmitió el texto. La fe que «ha sido una vez dada a los santos» (Jud 3) no se perdió en el camino.',
        { ejercicio: {
          pregunta: '¿Para qué sirven las citas bíblicas de los padres de la iglesia en el estudio del texto?',
          opciones: [
            { t: 'Para corregir a los apóstoles cuando escribieron algo poco claro.', ok: false, por_que: 'Los padres no tienen autoridad sobre la Escritura. Sus citas se usan como testigos de lo que decía el texto, no para corregirlo.' },
            { t: 'Para saber qué texto se leía en una época y en un lugar determinados.', ok: true, por_que: 'Como se conoce cuándo y dónde vivió cada autor, sus citas fechan y ubican las lecturas.' },
            { t: 'Para reemplazar a los manuscritos griegos, que son menos confiables.', ok: false, por_que: 'Los manuscritos griegos son el testigo principal. Las citas los complementan y deben usarse con cuidado, porque a veces se citaba de memoria.' }
          ],
          explicacion: 'Manuscritos, versiones y citas se confirman unos a otros. Ningún testigo aislado decide el texto; lo decide el conjunto.'
        } }
      ],
      pensar: 'La Escritura llegó hasta ti por una cadena de creyentes fieles a lo largo de los siglos. ¿Quién fue el eslabón que te la entregó a ti, y a quién se la estás entregando?'
    },
    {
      id: 'critica', n: 'Cómo se comparan las copias', ref: 'Juan 1:18; Romanos 5:1; Deuteronomio 4:2',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-variantes.svg', alt: 'Gráfico de las diferencias entre manuscritos del Nuevo Testamento: la gran mayoría son de ortografía; luego sinónimos y orden de palabras; luego lecturas con sentido pero sin apoyo; y menos del uno por ciento tienen sentido y apoyo antiguo', pie: 'Las clases de diferencias entre los manuscritos.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se elige entre dos lecturas',
          cab: ['Criterio', 'Pregunta'],
          filas: [
            ['Antigüedad', '¿La lectura aparece en los testigos más antiguos?'],
            ['Distribución', '¿Aparece en testigos de distintas regiones, o solo en una?'],
            ['Lectura más difícil', '¿Un copista habría cambiado esta lectura por otra más fácil, y no al revés?'],
            ['Origen de las demás', '¿Qué lectura explica mejor cómo surgieron las otras?'],
            ['Estilo del autor', '¿Corresponde al vocabulario y la forma de escribir del autor?']
          ],
          nota: 'Los criterios se usan juntos; ninguno decide por sí solo.'
        } }
      ],
      texto: [
        'Con miles de copias hechas a mano, es inevitable que haya diferencias entre ellas. A cada diferencia se la llama variante. La disciplina que compara los manuscritos para reconocer el texto original se llama crítica textual. La palabra «crítica» no significa aquí criticar la Biblia, sino juzgar con cuidado entre las lecturas, como un juez que examina testimonios.',
        { h: 'Cuántas diferencias hay y de qué tipo' },
        'Se calcula que entre los manuscritos griegos del Nuevo Testamento hay cientos de miles de variantes. La cifra impresiona hasta que se entiende cómo se cuenta: si una palabra está mal escrita en mil manuscritos, se cuentan mil variantes. La gran mayoría son errores de ortografía, palabras repetidas o saltadas, o cambios de orden que en griego no alteran el sentido, como decir «Cristo Jesús» o «Jesucristo». Según los especialistas, menos del uno por ciento afecta el sentido y tiene apoyo serio en manuscritos antiguos.',
        { h: 'Dos ejemplos' },
        'En Romanos 5:1, la mayoría de los manuscritos dice «tenemos paz para con Dios»; algunos antiguos dicen «tengamos paz», porque en griego la diferencia es una sola letra que sonaba casi igual. La Reina-Valera dice: «tenemos paz para con Dios por medio de nuestro Señor Jesucristo» (Ro 5:1). En cualquier caso, Pablo enseña lo mismo: la paz con Dios es fruto de la justificación por la fe.',
        'En Juan 1:18, unos manuscritos dicen «el unigénito Hijo» y otros, entre ellos los papiros P66 y P75, dicen «el unigénito Dios». Ambas lecturas presentan a Cristo como el único que da a conocer al Padre, y la segunda afirma incluso de manera explícita su divinidad. Ninguna variante debilita la doctrina de Cristo.',
        { h: 'Errores involuntarios y correcciones' },
        'Muchos errores son de vista: el copista salta de una palabra a otra igual que aparece más abajo y omite lo que hay entre ellas. Otros son de oído, cuando se copiaba al dictado. Algunos cambios fueron intencionales pero bienintencionados: aclarar una frase difícil o hacer que un pasaje coincidiera con su paralelo en otro evangelio. Por eso los especialistas suelen preferir la lectura más difícil: un copista tendía a suavizar, no a complicar.',
        { ejercicio: {
          pregunta: 'Una palabra mal escrita en mil manuscritos, ¿cuántas variantes cuenta?',
          opciones: [
            { t: 'Una sola, porque es la misma palabra.', ok: false, por_que: 'Las variantes se cuentan en cada manuscrito donde aparecen; por eso las cifras totales son tan altas.' },
            { t: 'Mil, una por cada manuscrito, aunque sea el mismo error menor.', ok: true, por_que: 'Así se cuentan, y por eso el número total impresiona más de lo que significa: la mayoría son detalles de ortografía.' },
            { t: 'Ninguna, porque los errores de ortografía no se cuentan.', ok: false, por_que: 'Se cuentan todas las diferencias, incluidas las de ortografía, que son la gran mayoría.' }
          ],
          explicacion: 'Las cifras de variantes reflejan la abundancia de manuscritos, no la falta de fiabilidad del texto. Más copias significa más diferencias menores y, a la vez, más seguridad sobre el original.'
        } }
      ],
      pensar: 'Dios mandó no añadir ni quitar a su Palabra (Dt 4:2). ¿Qué te dice que existan creyentes dedicados toda su vida a distinguir lo que el texto dice de lo que no dice?'
    },
    {
      id: 'familias', n: 'El Textus Receptus y el texto crítico', ref: 'Proverbios 30:5-6; Hechos 17:11; 1 Tesalonicenses 5:21',
      fecha: [1516, 2012],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-familias.svg', alt: 'Tres familias de manuscritos que salen de los originales: alejandrina (Egipto, papiros y códices Vaticano y Sinaítico), occidental (Beza y latín antiguo) y bizantina (Constantinopla, la mayoría de los manuscritos tardíos), y las dos ediciones impresas: el Textus Receptus, basado en manuscritos bizantinos, y el texto crítico, que compara todas las familias', pie: 'Las familias de manuscritos y las dos tradiciones de ediciones impresas.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué texto griego sigue cada traducción',
          cab: ['Base', 'Traducciones al español'],
          filas: [
            ['Textus Receptus', 'Reina-Valera (1569, 1602, 1909, 1960), Reina-Valera 1977'],
            ['Texto crítico (Nestle-Aland y Sociedades Bíblicas Unidas)', 'La Biblia de las Américas, Nueva Versión Internacional, Nueva Traducción Viviente, Dios Habla Hoy, Biblia Textual']
          ],
          nota: 'La Reina-Valera 1960 sigue el Textus Receptus en casi todo, con algunas lecturas tomadas de otras ediciones.'
        } }
      ],
      texto: [
        'Al comparar los manuscritos, los especialistas notaron que se agrupan en familias, según la región donde se copiaron y las lecturas que comparten. Se suelen distinguir tres. La alejandrina, de Egipto, incluye los papiros más antiguos y los códices Vaticano y Sinaítico; su texto es breve y sobrio. La occidental, representada por el Códice de Beza y el latín antiguo, tiene más paráfrasis y añadidos. La bizantina se formó en el mundo de habla griega en torno a Constantinopla y es la de la gran mayoría de los manuscritos, casi todos de la Edad Media.',
        { h: 'El Textus Receptus' },
        'Cuando se inventó la imprenta, el humanista Erasmo de Róterdam publicó en Basilea, en 1516, el primer Nuevo Testamento griego impreso y puesto a la venta. Trabajó con prisa y con unos pocos manuscritos bizantinos tardíos que tenía a mano. De Apocalipsis tuvo un solo manuscrito, al que le faltaban los últimos versículos, y los tradujo del latín al griego. Sus ediciones, mejoradas por Estienne y Beza, fueron la base de las traducciones de la Reforma. En 1633, una edición impresa en Leiden dijo en su prólogo que ese era el texto recibido por todos, y desde entonces se lo llama Textus Receptus. De él tradujo Casiodoro de Reina, y en él se basa la Reina-Valera 1960.',
        { h: 'El texto crítico' },
        'En los siglos XIX y XX aparecieron los grandes códices y los papiros, muchos siglos más antiguos que los manuscritos de Erasmo. Las ediciones críticas, como la de Westcott y Hort (1881) y hoy la de Nestle-Aland, comparan todos los testigos y suelen dar más peso a los más antiguos. La mayoría de las traducciones modernas parten de ese texto.',
        { posturas: {
          titulo: '¿Qué texto griego es más fiel al original?',
          a: { n: 'Textus Receptus o texto mayoritario', t: 'Algunos sostienen que el texto que la iglesia usó durante siglos, presente en la gran mayoría de los manuscritos, refleja mejor el original, y ven en esa abundancia una señal de que Dios lo preservó. Añaden que la Reina-Valera y la versión inglesa del rey Jacobo han alimentado a generaciones de creyentes.' },
          b: { n: 'Texto crítico', t: 'La mayoría de los estudiosos, incluidos muchos evangélicos conservadores, sostiene que los manuscritos más antiguos, aunque menos numerosos, están más cerca de los originales, y que el texto bizantino creció con los siglos por armonizaciones y aclaraciones. Dios preservó su Palabra en el conjunto de los testigos, no en una sola edición.' },
          c: 'Ambas posturas coinciden en lo esencial: entre el Textus Receptus y el texto crítico no hay diferencias en ninguna doctrina. Las Asambleas de Dios no exigen una sola edición ni una sola traducción. Este recurso usa la Reina-Valera 1960, la versión más conocida del mundo hispano, y explica con honestidad los pasajes discutidos.'
        } }
      ],
      pensar: 'Los de Berea examinaban cada día las Escrituras para ver si lo que oían era así (Hch 17:11). ¿Cómo puedes estudiar estos temas sin desconfiar de tu Biblia ni de quienes usan otra versión?'
    },
    {
      id: 'discutidos', n: 'Pasajes discutidos', ref: 'Marcos 16:9-20; Juan 7:53–8:11; 1 Juan 5:7-8',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres pasajes discutidos',
          cab: ['Pasaje', 'Dónde falta', 'Dónde está'],
          filas: [
            ['Marcos 16:9-20', 'Códices Sinaítico y Vaticano; algunas versiones antiguas', 'Códices Alejandrino, de Beza y la gran mayoría; Ireneo lo cita hacia 180'],
            ['Juan 7:53–8:11', 'Papiros P66 y P75; códices Sinaítico y Vaticano', 'Códice de Beza y la mayoría de los manuscritos posteriores; algunos lo ponen en otro lugar de Juan o en Lucas'],
            ['1 Juan 5:7-8 («en el cielo… en la tierra»)', 'Todos los manuscritos griegos antiguos y las versiones antiguas, salvo parte del latín', 'Algunos manuscritos latinos desde el siglo IV y unos pocos griegos tardíos; Erasmo lo agregó en su tercera edición (1522)']
          ],
          nota: 'Las Biblias modernas suelen imprimir estos pasajes entre corchetes o con una nota.'
        } },
        { tipo: 'cita', titulo: 'Marcos 16', texto: 'Habiendo, pues, resucitado Jesús por la mañana, el primer día de la semana, apareció primeramente a María Magdalena, de quien había echado siete demonios. Yendo ella, lo hizo saber a los que habían estado con él, que estaban tristes y llorando. Ellos, cuando oyeron que vivía, y que había sido visto por ella, no lo creyeron. Pero después apareció en otra forma a dos de ellos que iban de camino, yendo al campo. Ellos fueron y lo hicieron saber a los otros; y ni aun a ellos creyeron. Finalmente se apareció a los once mismos, estando ellos sentados a la mesa, y les reprochó su incredulidad y dureza de corazón, porque no habían creído a los que le habían visto resucitado. Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura. El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado. Y estas señales seguirán a los que creen: En mi nombre echarán fuera demonios; hablarán nuevas lenguas; tomarán en las manos serpientes, y si bebieren cosa mortífera, no les hará daño; sobre los enfermos pondrán sus manos, y sanarán. Y el Señor, después que les habló, fue recibido arriba en el cielo, y se sentó a la diestra de Dios. Y ellos, saliendo, predicaron en todas partes, ayudándoles el Señor y confirmando la palabra con las señales que la seguían. Amén.', ref: 'Marcos 16:9-20' },
        { tipo: 'cita', titulo: '1 Juan 5', texto: 'Porque tres son los que dan testimonio en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno. Y tres son los que dan testimonio en la tierra: el Espíritu, el agua y la sangre; y estos tres concuerdan.', ref: '1 Juan 5:7-8' }
      ],
      texto: [
        'Algunas Biblias modernas ponen ciertos pasajes entre corchetes, con una nota que dice que no están en los manuscritos más antiguos. Es bueno conocerlos, para no sorprenderse ni dudar de toda la Escritura. Los tres más conocidos son estos.',
        { h: 'El final de Marcos' },
        'Los códices Sinaítico y Vaticano terminan Marcos en 16:8, con las mujeres que huyen del sepulcro con temor. Los versículos 9 al 20, que narran apariciones del Resucitado, la gran comisión y las señales que seguirán a los que creen, están en la gran mayoría de los manuscritos, y Ireneo ya cita el versículo 19 hacia el año 180. Unos piensan que el final se perdió y que este se agregó muy pronto; otros, que es original.',
        { h: 'La mujer sorprendida en adulterio' },
        'Juan 7:53–8:11 no está en los papiros más antiguos de Juan ni en los grandes códices del siglo IV, y algunos manuscritos lo ponen en otros lugares. Muchos estudiosos creen que es un relato verdadero de la vida de Jesús, conservado por la tradición, que se incorporó después al evangelio. Jerónimo lo incluyó en la Vulgata.',
        { h: 'Los tres testigos en el cielo' },
        'En 1 Juan 5:7-8, las palabras «en el cielo: el Padre, el Verbo y el Espíritu Santo; y estos tres son uno. Y tres son los que dan testimonio en la tierra» no aparecen en ningún manuscrito griego antiguo. Surgieron en el latín y Erasmo las agregó en 1522. La Reina-Valera 1960 las conserva.',
        { posturas: {
          titulo: '¿Qué hacer con estos pasajes?',
          a: { n: 'Conservarlos en el texto', t: 'Quienes defienden el Textus Receptus o el texto mayoritario los consideran parte de la Escritura, porque la iglesia los leyó durante siglos y están en la mayoría de los manuscritos.' },
          b: { n: 'Marcarlos como discutidos', t: 'Quienes siguen el texto crítico los imprimen con corchetes o notas. En el caso de 1 Juan 5:7, casi todos los estudiosos coinciden en que es una adición tardía.' },
          c: 'Ninguna doctrina depende de estos pasajes. La Trinidad se enseña en toda la Escritura (Mt 28:19; 2 Co 13:14; Jn 1:1), y las señales que acompañan la predicación se ven en todo el libro de Hechos y en 1 Corintios 12 y 14. Conviene enseñar cada doctrina desde los pasajes que nadie discute.'
        } }
      ],
      pensar: 'Una Biblia honesta te dice dónde hay preguntas. ¿Por qué crees que esa honestidad fortalece la confianza en la Escritura en vez de debilitarla?'
    },
    {
      id: 'ninguna-doctrina', n: 'Ninguna doctrina en duda', ref: '1 Pedro 1:23-25; Mateo 24:35; Salmo 119:89',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'siendo renacidos, no de simiente corruptible, sino de incorruptible, por la palabra de Dios que vive y permanece para siempre. Porque: Toda carne es como hierba, Y toda la gloria del hombre como flor de la hierba. La hierba se seca, y la flor se cae; Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada.', ref: '1 Pedro 1:23-25' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-camino.svg', alt: 'Camino del texto: escritos originales, copias a mano durante siglos, manuscritos que se conservan, comparación de los manuscritos, texto en hebreo y griego, traducción, tu Biblia', pie: 'De los escritos originales a la Biblia que tienes en las manos.', origen: 'esquema' }
      ],
      texto: [
        'Después de recorrer los papiros, los códices, las versiones y las variantes, se puede responder la pregunta del comienzo: ¿tenemos lo que escribieron los autores del Nuevo Testamento? Sí, con una seguridad que no tiene ningún otro libro antiguo.',
        { h: 'Lo que sabemos' },
        'La inmensa mayoría del texto no tiene variantes que discutir: todos los testigos coinciden. Donde hay variantes, casi siempre son detalles que no cambian el sentido. Las pocas que lo cambian están identificadas, estudiadas y señaladas en las notas de las Biblias. Y ninguna de ellas pone en duda una doctrina de la fe: la divinidad de Cristo, su muerte y resurrección, la salvación por gracia, la obra del Espíritu Santo o la segunda venida descansan sobre muchos pasajes que todos los manuscritos comparten.',
        'Esto no se opone a la fe, sino que la acompaña. Creemos que la Escritura es inspirada porque Dios lo dice; la historia de su transmisión muestra que Dios también cuidó que esa Palabra llegara hasta nosotros. Pedro, citando a Isaías, lo dijo así: «Mas la palabra del Señor permanece para siempre. Y esta es la palabra que por el evangelio os ha sido anunciada» (1 P 1:25).',
        { h: 'Cómo usar este conocimiento' },
        'Saber cómo se transmitió la Biblia sirve para responder con calma a quien dice que «la Biblia se cambió tantas veces que ya no se sabe qué decía». No hace falta negar las variantes ni esconder los pasajes discutidos. Basta explicar lo que muestran los manuscritos: copias abundantes, antiguas y coincidentes, que permiten leer hoy lo que Dios hizo escribir.',
        'También sirve para leer mejor la propia Biblia: entender las notas al pie, no inquietarse cuando una versión dice algo con otras palabras, y apoyar la enseñanza en los pasajes más claros. El creyente no necesita ser un especialista en manuscritos para confiar en su Biblia, pero puede dar gracias por quienes lo son.',
        { ejercicio: {
          pregunta: 'Alguien te dice: «La Biblia se copió tantas veces que ya no sabemos qué decía». ¿Cuál es la mejor respuesta?',
          opciones: [
            { t: 'Que la Biblia nunca tuvo errores de copia porque Dios guio la mano de cada copista.', ok: false, por_que: 'Los manuscritos sí tienen diferencias. Negarlo no ayuda; lo que se puede mostrar es que se conocen y no afectan la fe.' },
            { t: 'Que hay miles de copias antiguas, y al compararlas se reconoce el texto original con una seguridad que no tiene otro libro antiguo.', ok: true, por_que: 'Es lo que muestra la evidencia: abundancia, antigüedad y coincidencia de los testigos.' },
            { t: 'Que esas preguntas no se deben hacer, porque basta con creer.', ok: false, por_que: 'La fe no teme las preguntas. Pedro manda estar preparados para presentar defensa con mansedumbre (1 P 3:15).' }
          ],
          explicacion: 'La respuesta cristiana no es negar los hechos ni evitar la pregunta, sino mostrar con mansedumbre lo que los hechos enseñan.'
        } }
      ],
      pensar: 'Jesús dijo que el cielo y la tierra pasarán, pero sus palabras no. ¿Qué lugar le das, en tus decisiones diarias, a una Palabra que va a durar más que todo lo que ves?'
    }
  ];
  window.__MANUSCRITOS.nuevo = nuevo;
})();
/* De la Biblia a nosotros · ruta IV. Las traducciones y armado de RUTA_DATA (ver encabezado en parte1.js) */
(() => {
  const traducciones = [
    {
      id: 'traducir', n: 'La Palabra en la lengua del pueblo', ref: 'Nehemías 8:1-8; Hechos 2:5-11; Mateo 28:19',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../interpretar-biblia/img/esdras-lee-la-ley.webp', alt: 'Esdras lee el libro de la ley desde una plataforma de madera ante el pueblo reunido en Jerusalén', pie: 'Esdras lee la ley, y los levitas explican el sentido (Nehemías 8).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Nehemías 8', texto: 'Y los levitas Jesúa, Bani, Serebías, Jamín, Acub, Sabetai, Hodías, Maasías, Kelita, Azarías, Jozabed, Hanán y Pelaía, hacían entender al pueblo la ley; y el pueblo estaba atento en su lugar. Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.', ref: 'Nehemías 8:7-8' },
        { tipo: 'cita', titulo: 'Hechos 2', texto: 'Moraban entonces en Jerusalén judíos, varones piadosos, de todas las naciones bajo el cielo. Y hecho este estruendo, se juntó la multitud; y estaban confusos, porque cada uno les oía hablar en su propia lengua. Y estaban atónitos y maravillados, diciendo: Mirad, ¿no son galileos todos estos que hablan? ¿Cómo, pues, les oímos nosotros hablar cada uno en nuestra lengua en la que hemos nacido? Partos, medos, elamitas, y los que habitamos en Mesopotamia, en Judea, en Capadocia, en el Ponto y en Asia, en Frigia y Panfilia, en Egipto y en las regiones de Africa más allá de Cirene, y romanos aquí residentes, tanto judíos como prosélitos, cretenses y árabes, les oímos hablar en nuestras lenguas las maravillas de Dios.', ref: 'Hechos 2:5-11' }
      ],
      texto: [
        'La última parte del camino de la Biblia hasta nosotros es la traducción. Ningún lector de habla hispana lee el hebreo o el griego sin aprenderlos; leemos una traducción. ¿Está bien traducir la Palabra de Dios? La Biblia misma responde que sí.',
        { h: 'Esdras y los levitas' },
        'Cuando los judíos volvieron del exilio, muchos ya no hablaban bien el hebreo. Esdras leyó la ley ante el pueblo desde el alba hasta el mediodía, y los levitas ayudaban: «leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). No bastaba con que el pueblo oyera las palabras; tenía que entenderlas. Esa es la meta de toda buena traducción.',
        { h: 'Pentecostés' },
        'El día de Pentecostés, el Espíritu Santo hizo que judíos de quince regiones distintas oyeran a los discípulos hablar en sus propias lenguas: «¿Cómo, pues, les oímos nosotros hablar cada uno en nuestra lengua en la que hemos nacido?» (Hch 2:8). El don de lenguas de aquel día fue una señal de lo que Dios quería: que las maravillas de Dios se anunciaran en la lengua de cada pueblo (Hch 2:11). El evangelio no exige aprender una lengua sagrada; llega en la lengua materna.',
        { h: 'Una Palabra para todas las naciones' },
        'Jesús mandó hacer discípulos a todas las naciones (Mt 28:19), y la visión final de Apocalipsis muestra ante el trono una multitud «de todas naciones y tribus y pueblos y lenguas» (Ap 7:9). Por eso la iglesia tradujo la Escritura desde el comienzo: el Antiguo Testamento ya se había vertido al griego, y en el siglo II había traducciones al latín y al siríaco. Las estaciones de esta ruta siguen ese camino hasta la Biblia en español y la traducción a las lenguas que todavía esperan.',
        { ejercicio: {
          pregunta: 'Según Nehemías 8:8, ¿qué hacían los levitas mientras se leía la ley?',
          opciones: [
            { t: 'Leían en voz baja para que solo los sacerdotes oyeran.', ok: false, por_que: 'La lectura era pública, ante hombres, mujeres y todos los que podían entender (Neh 8:3).' },
            { t: 'Leían con claridad y explicaban el sentido para que el pueblo entendiera.', ok: true, por_que: 'Es lo que dice el versículo: ponían el sentido, de modo que entendiesen la lectura.' },
            { t: 'Traducían la ley al griego para los judíos de Egipto.', ok: false, por_que: 'La escena ocurre en Jerusalén en el siglo V a.C.; la traducción griega se hizo después, en Alejandría.' }
          ],
          explicacion: 'Desde la Biblia misma, el propósito de leer la Palabra al pueblo es que la entienda. Traducir y explicar son formas de cumplir ese propósito.'
        } }
      ],
      pensar: 'Dios quiso que oyeras sus maravillas en tu propia lengua. ¿A quién conoces que todavía no las ha oído en la suya?'
    },
    {
      id: 'vulgata', n: 'Jerónimo y la Vulgata', ref: 'Hechos 17:11; 2 Timoteo 2:15',
      fecha: [382, 405],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/jeronimo-belen.webp', alt: 'Jerónimo, un erudito anciano de barba gris, trabaja de noche en una celda de piedra de Belén con un rollo hebreo abierto, un códice griego y una tablilla donde escribe en latín', pie: 'Jerónimo en Belén, traduciendo del hebreo al latín.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La Vulgata en la historia',
          cab: ['Año', 'Hecho'],
          filas: [
            ['382', 'El obispo de Roma, Dámaso, encarga a Jerónimo revisar los evangelios en latín'],
            ['386', 'Jerónimo se establece en Belén y estudia hebreo con maestros judíos'],
            ['Hacia 390–405', 'Traduce el Antiguo Testamento directamente del hebreo'],
            ['Siglos V–XV', 'La Vulgata es la Biblia de la iglesia de Occidente'],
            ['1546', 'El Concilio de Trento la declara texto auténtico de la Iglesia católica']
          ],
          nota: 'Vulgata significa «divulgada» o «común»: la versión de uso general.'
        } }
      ],
      texto: [
        'A fines del siglo IV circulaban en Occidente muchas traducciones latinas de la Biblia, hechas por distintas personas y con calidad muy desigual. En 382, el obispo de Roma encargó a Jerónimo, el mejor erudito bíblico de su tiempo, que revisara los evangelios en latín. Jerónimo terminó haciendo mucho más.',
        { h: 'Ir a la fuente' },
        'En 386, Jerónimo se instaló en Belén. Estudió hebreo con maestros judíos, algo que casi ningún cristiano de su época hacía, y tomó una decisión discutida: traducir el Antiguo Testamento directamente del hebreo y no de la Septuaginta, como se acostumbraba. Hablaba de la «verdad hebrea». Muchos lo criticaron, incluso Agustín, que temía que una traducción nueva confundiera a los fieles acostumbrados a la antigua. Jerónimo respondió que el traductor debe ir a la lengua en que Dios habló.',
        'Jerónimo también notó que los libros apócrifos no estaban en la Biblia hebrea. Los tradujo con menos cuidado y advirtió en sus prólogos que la iglesia los leía para edificación, pero no para establecer doctrina. Más tarde esa advertencia se olvidó, y en la Edad Media los apócrifos se leyeron junto con los demás libros.',
        { h: 'Mil años de Biblia latina' },
        'La traducción de Jerónimo terminó por imponerse y se llamó Vulgata, la versión común. Durante mil años fue la Biblia de Europa occidental: de ella se copiaron miles de manuscritos, y sobre ella se escribieron los comentarios medievales. Pero el latín, que en tiempos de Jerónimo era la lengua del pueblo, dejó de serlo. Con los siglos nacieron el español, el italiano, el francés y otras lenguas, y la Biblia quedó encerrada en una lengua que el pueblo ya no entendía. La paradoja es grande: la traducción hecha para que el pueblo entendiera se volvió, con el tiempo, una barrera.',
        { ejercicio: {
          pregunta: '¿Qué tuvo de nuevo la traducción del Antiguo Testamento que hizo Jerónimo?',
          opciones: [
            { t: 'Que la tradujo directamente del hebreo, en lugar de traducir la Septuaginta griega.', ok: true, por_que: 'Jerónimo quiso ir a la lengua original, aunque eso le trajo críticas de quienes preferían la tradición.' },
            { t: 'Que fue la primera traducción de la Biblia a cualquier lengua.', ok: false, por_que: 'Ya existían la Septuaginta, las traducciones latinas antiguas, el siríaco y otras.' },
            { t: 'Que agregó los libros apócrifos, que antes no se leían.', ok: false, por_que: 'Jerónimo advirtió que los apócrifos no estaban en la Biblia hebrea y no debían usarse para establecer doctrina.' }
          ],
          explicacion: 'El principio de Jerónimo sigue vigente: una traducción fiel se hace desde las lenguas originales.'
        } }
      ],
      pensar: 'Jerónimo aprendió hebreo ya adulto para traducir mejor. ¿Qué esfuerzo estás dispuesto a hacer para entender mejor la Palabra de Dios?'
    },
    {
      id: 'reforma', n: 'La imprenta y la Reforma', ref: 'Salmo 119:105; Hechos 17:11; Colosenses 3:16',
      fecha: [1382, 1536],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/imprenta.webp', alt: 'Taller de imprenta del siglo XV: dos operarios bajan la gran prensa de madera mientras otro revisa una hoja recién impresa con dos columnas de texto en latín', pie: 'La imprenta de tipos móviles hizo posible que la Biblia llegara a muchos.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La Biblia en lengua del pueblo',
          cab: ['Año', 'Hecho'],
          filas: [
            ['Hacia 1382', 'Juan Wiclef impulsa la primera Biblia completa en inglés, traducida de la Vulgata'],
            ['Hacia 1455', 'Gutenberg imprime en Maguncia la Vulgata: el primer gran libro impreso con tipos móviles'],
            ['1516', 'Erasmo publica el Nuevo Testamento griego impreso'],
            ['1522', 'Lutero publica el Nuevo Testamento en alemán, traducido del griego'],
            ['1526', 'Tyndale imprime el Nuevo Testamento en inglés, traducido del griego'],
            ['1534', 'Lutero completa la Biblia en alemán'],
            ['1536', 'Tyndale es ejecutado cerca de Bruselas']
          ]
        } }
      ],
      texto: [
        'Al final de la Edad Media, la Biblia era un libro caro, copiado a mano, en latín y casi siempre en manos del clero. Unos pocos creyentes se atrevieron a traducirla a la lengua del pueblo, y pagaron por ello.',
        { h: 'Antes de la imprenta' },
        'En Inglaterra, hacia 1382, Juan Wiclef impulsó una traducción completa al inglés, hecha desde la Vulgata. Sus seguidores, llamados lolardos, la copiaban a mano y la leían en secreto; las autoridades la prohibieron y muchos fueron perseguidos. En Bohemia, Juan Hus siguió ideas semejantes y murió en la hoguera en 1415.',
        { h: 'La imprenta' },
        'Hacia 1455, Juan Gutenberg terminó en Maguncia el primer gran libro impreso con tipos móviles en Europa: una Biblia en latín. La imprenta cambió todo. Un libro que antes exigía meses de trabajo de un copista podía reproducirse por centenares en poco tiempo, con el mismo texto en cada ejemplar. En 1516, Erasmo publicó el Nuevo Testamento en griego, y los traductores pudieron trabajar desde la lengua original.',
        { h: 'La Reforma' },
        'La Reforma afirmó que la Escritura es la autoridad suprema de la fe y que todo creyente debe poder leerla. Martín Lutero tradujo el Nuevo Testamento al alemán desde el griego y lo publicó en 1522; la Biblia completa salió en 1534. Su lenguaje, cercano al habla del pueblo, marcó la lengua alemana. En Inglaterra, Guillermo Tyndale tradujo el Nuevo Testamento del griego e imprimió su traducción en 1526 fuera del país, porque en Inglaterra estaba prohibido. Fue arrestado y ejecutado en 1536. Según el relato de su muerte, sus últimas palabras fueron una oración pidiendo a Dios que abriera los ojos del rey de Inglaterra. Pocos años después, el rey autorizó una Biblia en inglés que tomaba gran parte del trabajo de Tyndale.',
        'La Palabra que había sido «lámpara» y «lumbrera» (Sal 119:105) para el salmista volvía a estar en las casas, en la lengua de cada familia.',
        { ejercicio: {
          pregunta: '¿Por qué la imprenta fue tan importante para la difusión de la Biblia?',
          opciones: [
            { t: 'Porque permitió producir muchos ejemplares con el mismo texto, en poco tiempo y a menor costo.', ok: true, por_que: 'La copia a mano era lenta, cara y sujeta a errores; la imprenta multiplicó los ejemplares idénticos.' },
            { t: 'Porque con la imprenta se descubrieron los manuscritos originales.', ok: false, por_que: 'La imprenta no descubrió manuscritos; reprodujo los textos que ya existían.' },
            { t: 'Porque hizo innecesario traducir la Biblia, ya que todos aprendieron latín.', ok: false, por_que: 'Fue al revés: la imprenta permitió difundir traducciones en las lenguas del pueblo.' }
          ],
          explicacion: 'La imprenta, junto con el redescubrimiento de las lenguas originales, hizo posible que la Biblia traducida llegara a las manos de los creyentes comunes.'
        } }
      ],
      pensar: 'Tyndale dio su vida para que un labrador pudiera leer la Biblia. Hoy la tienes en tu teléfono. ¿Cuánto tiempo le dedicas realmente?'
    },
    {
      id: 'espanol', n: 'La Biblia en español antes de Reina', ref: 'Salmo 119:130; Hechos 8:30-31',
      fecha: [1280, 1559],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-espanol.svg', alt: 'Línea de tiempo de la Biblia en español: Biblia alfonsina (siglo XIII), Biblia de Alba (1430), Biblia de Ferrara (1553), Nuevo Testamento de Enzinas (1543), de Pérez de Pineda (1556), Biblia del Oso de Casiodoro de Reina (1569), revisión de Cipriano de Valera (1602), revisiones de 1862, 1909 y 1960', pie: 'Siete siglos de la Biblia en español.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Traducciones al español anteriores a 1569',
          cab: ['Traducción', 'Fecha', 'Características'],
          filas: [
            ['Biblias medievales (prealfonsina y alfonsina)', 'Siglo XIII', 'Traducidas de la Vulgata; la de Alfonso X se incluye en su General Estoria'],
            ['Biblias romanceadas judías', 'Siglos XIII–XV', 'Antiguo Testamento traducido del hebreo por judíos de Castilla'],
            ['Biblia de Alba', '1422–1433', 'El rabino Moisés Arragel traduce el Antiguo Testamento del hebreo para un noble castellano'],
            ['Biblia de Ferrara', '1553', 'Antiguo Testamento de los judíos sefardíes expulsados, muy literal'],
            ['Nuevo Testamento de Francisco de Enzinas', '1543', 'Primero traducido del griego al español, impreso en Amberes'],
            ['Nuevo Testamento de Juan Pérez de Pineda', '1556', 'Impreso en Ginebra para los creyentes españoles']
          ]
        } }
      ],
      texto: [
        'La historia de la Biblia en español comienza mucho antes de la Reina-Valera. Ya en el siglo XIII, cuando el castellano se convertía en lengua escrita, se tradujeron partes de la Biblia desde el latín de la Vulgata. El rey Alfonso X el Sabio incluyó gran parte de la Biblia en su General Estoria, una historia del mundo.',
        { h: 'Las traducciones judías' },
        'En la España medieval vivían muchos judíos, y algunos tradujeron el Antiguo Testamento directamente del hebreo al castellano. La más notable es la Biblia de Alba, preparada entre 1422 y 1433 por el rabino Moisés Arragel. Después de la expulsión de los judíos en 1492, los sefardíes conservaron sus traducciones; en 1553 publicaron en Ferrara, Italia, un Antiguo Testamento en castellano muy literal, que Casiodoro de Reina consultó después.',
        { h: 'Prohibida en su propia tierra' },
        'Con la Reforma, varios españoles quisieron que su pueblo leyera la Escritura. Francisco de Enzinas tradujo el Nuevo Testamento del griego, lo imprimió en Amberes en 1543 y lo presentó al emperador Carlos V; por ello fue encarcelado, aunque logró escapar. Juan Pérez de Pineda publicó otro Nuevo Testamento en Ginebra en 1556. Pero en España, el índice de libros prohibidos de 1559 vedó la Biblia en lengua vulgar. Durante más de dos siglos, leer la Biblia en castellano fue un delito en el propio país donde se hablaba esa lengua. Las Biblias se imprimían en el extranjero y entraban escondidas, en toneles o entre mercaderías.',
        'El eunuco etíope tenía el libro de Isaías en las manos, pero necesitó que alguien le explicara: «¿Y cómo podré, si alguno no me enseñare?» (Hch 8:31). Durante siglos, el pueblo hispano no tuvo ni siquiera el libro. Esa sed explica el valor que tuvo la obra de Casiodoro de Reina, que se estudia en la próxima estación.',
        { ejercicio: {
          pregunta: '¿Por qué el Nuevo Testamento de Enzinas y el de Pérez de Pineda se imprimieron fuera de España?',
          opciones: [
            { t: 'Porque en España no había imprentas.', ok: false, por_que: 'España tenía imprentas desde el siglo XV; el problema no era técnico.' },
            { t: 'Porque en España estaba prohibido publicar y leer la Biblia en lengua del pueblo.', ok: true, por_que: 'Las autoridades persiguieron estas traducciones, y en 1559 el índice de libros prohibidos las vedó.' },
            { t: 'Porque se escribieron para lectores de otros países que hablaban español.', ok: false, por_que: 'Se escribieron pensando en los españoles, y se introducían en España a escondidas.' }
          ],
          explicacion: 'La Biblia en español nació en el exilio. Quienes la tradujeron arriesgaron su libertad y su vida para que su pueblo pudiera leerla.'
        } }
      ],
      pensar: 'Hubo un tiempo en que leer la Biblia en tu propia lengua era un delito. ¿Qué te dice eso sobre el privilegio de tenerla libremente hoy?'
    },
    {
      id: 'reina-valera', n: 'Casiodoro de Reina y Cipriano de Valera', ref: 'Isaías 40:8; Salmo 12:6-7; Mateo 24:35',
      fecha: [1569, 1960],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/casiodoro-basilea.webp', alt: 'Casiodoro de Reina, un hombre de unos cincuenta años con barba castaña entrecana y ropa negra de erudito del siglo XVI, revisa un pliego recién impreso en un taller de imprenta de Basilea', pie: 'Casiodoro de Reina en Basilea, 1569 (recreación).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Fotografía', src: 'img/biblia-del-oso.webp', alt: 'Portada de la Biblia del Oso de 1569, con el grabado de un oso que come miel de un panal en un árbol', pie: 'Portada de la Biblia del Oso (Basilea, 1569).', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Tres revisiones', tabla: {
          titulo: 'El mismo versículo en tres revisiones de la Reina-Valera',
          cab: ['Pasaje', 'Revisión de 1865', 'Revisión de 1909', 'Revisión de 1960'],
          filas: [
            ['Mateo 6:11', 'Dános hoy nuestro pan cotidiano.', 'Danos hoy nuestro pan cotidiano.', 'El pan nuestro de cada día, dánoslo hoy.'],
            ['Génesis 4:1', 'Y conoció Adam a su mujer Eva, la cual concibió y parió a Caín, y dijo: Ganado he un varón por Jehová.', 'Y CONOCIÓ Adam á su mujer Eva, la cual concibió y parió á Caín, y dijo: Adquirido he varón por Jehová.', 'Conoció Adán a su mujer Eva, la cual concibió y dio a luz a Caín, y dijo: Por voluntad de Jehová he adquirido varón.'],
            ['1 Pedro 1:13', 'Por lo cual teniendo los lomos de vuestro entendimiento ceñidos, y sobrios, esperád perfectamente en la gracia que se os ha de traer en la manifestación de Jesu Cristo:', 'Por lo cual, teniendo los lomos de vuestro entendimiento ceñidos, con templanza, esperad perfectamente en la gracia que os es presentada cuando Jesucristo os es manifestado:', 'Por tanto, ceñid los lomos de vuestro entendimiento, sed sobrios, y esperad por completo en la gracia que se os traerá cuando Jesucristo sea manifestado;']
          ],
          nota: 'Las revisiones actualizan la ortografía y el vocabulario, y ajustan algunas frases al original.'
        } }
      ],
      texto: [
        'Casiodoro de Reina nació hacia 1520 en Montemolín, en Extremadura, y fue monje en el monasterio de San Isidoro del Campo, cerca de Sevilla. Allí, un grupo de monjes leyó libros de la Reforma y la Escritura, y abrazó el evangelio. Cuando la Inquisición comenzó a perseguirlos, en 1557, Reina y otros huyeron. Varios de los que se quedaron murieron en la hoguera.',
        { h: 'Doce años de trabajo en el exilio' },
        'Reina vivió como refugiado en Ginebra, Londres, Amberes y Fráncfort, perseguido incluso fuera de España, mientras traducía. Trabajó desde el hebreo y el griego, consultando las mejores ediciones y traducciones de su tiempo, incluida la Biblia de Ferrara. En 1569, en Basilea, se imprimió la primera Biblia completa en español traducida de las lenguas originales. Por el grabado de su portada, un oso que come miel de un panal, se la llama Biblia del Oso. En la misma portada, Reina puso un versículo: «la palabra del Dios nuestro permanece para siempre» (Is 40:8).',
        'Reina incluyó los libros apócrifos intercalados en el Antiguo Testamento, como se acostumbraba en su tiempo, aunque explicó que no tenían la autoridad de los demás.',
        { h: 'La revisión de Valera' },
        'Cipriano de Valera, otro de los monjes de San Isidoro que había huido en 1557, dedicó veinte años a revisar la traducción de Reina. Su edición se imprimió en Ámsterdam en 1602. Reunió los apócrifos en una sección aparte, entre los dos Testamentos, y corrigió muchos detalles. Desde entonces se la llama Reina-Valera, en honor a los dos.',
        { h: 'Revisiones posteriores' },
        'La lengua cambia, y una traducción fiel necesita revisiones. En el siglo XIX, las sociedades bíblicas publicaron varias revisiones (entre ellas las de 1862 y 1865), sin los apócrifos. Siguió la de 1909, que muchos leyeron durante medio siglo, y en 1960 la revisión de las Sociedades Bíblicas con un comité de pastores y biblistas de América Latina. La Reina-Valera 1960 es hasta hoy la Biblia de la mayoría de los evangélicos de habla hispana. En la pestaña «Tres revisiones» se ve cómo un mismo versículo se actualizó con el tiempo.',
        { ejercicio: {
          pregunta: '¿Por qué se llama Reina-Valera a la traducción que leemos?',
          opciones: [
            { t: 'Porque la encargaron una reina de España y un noble llamado Valera.', ok: false, por_que: 'No tiene nada que ver con la realeza: Reina es el apellido del traductor, Casiodoro de Reina.' },
            { t: 'Porque la tradujo Casiodoro de Reina (1569) y la revisó Cipriano de Valera (1602).', ok: true, por_que: 'El nombre honra al traductor y a su primer revisor, dos exmonjes de San Isidoro que huyeron de la Inquisición.' },
            { t: 'Porque fue traducida en las ciudades de Reina y de Valera, en España.', ok: false, por_que: 'Se imprimió fuera de España, en Basilea (1569) y en Ámsterdam (1602), porque en España estaba prohibida.' }
          ],
          explicacion: 'Cada vez que dices «Reina-Valera» nombras a dos creyentes que arriesgaron la vida para que el pueblo hispano tuviera la Biblia.'
        } }
      ],
      pensar: 'Reina puso en la portada de su Biblia que la palabra de Dios permanece para siempre, y cuatro siglos y medio después la seguimos leyendo. ¿Qué parte de esa historia te anima a perseverar en tu propio servicio?'
    },
    {
      id: 'formas', n: 'Formas de traducir', ref: 'Romanos 3:4; Génesis 4:1; 1 Pedro 1:13',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-espectro.svg', alt: 'Espectro de traducciones: a la izquierda, equivalencia formal (palabra por palabra): interlineal, La Biblia de las Américas, Reina-Valera 1960, Biblia Textual; al centro, Nueva Versión Internacional; a la derecha, equivalencia dinámica (idea por idea): Nueva Traducción Viviente, Dios Habla Hoy, Traducción en Lenguaje Actual; en el extremo, paráfrasis', pie: 'Del texto más literal al más libre.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres decisiones de traducción',
          cab: ['Pasaje', 'Literalmente', 'Reina-Valera 1960', 'Una traducción dinámica diría'],
          filas: [
            ['Romanos 3:4', 'que no llegue a ser', 'De ninguna manera', '¡Claro que no!'],
            ['Génesis 4:1', 'Adán conoció a Eva', 'Conoció Adán a su mujer Eva', 'Adán tuvo relaciones con Eva'],
            ['1 Pedro 1:13', 'ceñid los lomos de vuestra mente', 'ceñid los lomos de vuestro entendimiento', 'preparen su mente para actuar']
          ],
          nota: 'La última columna muestra el tipo de solución que eligen las versiones dinámicas, sin citar una versión en particular.'
        } }
      ],
      texto: [
        'Traducir no es cambiar cada palabra por su equivalente en el diccionario. Cada lengua tiene su gramática, sus giros y sus imágenes. Todo traductor tiene que decidir cuánto se acerca a la forma del original y cuánto a la forma natural del español.',
        { h: 'Equivalencia formal' },
        'Una traducción de equivalencia formal sigue de cerca las palabras y la estructura del original, aunque el resultado suene menos natural. La Reina-Valera, La Biblia de las Américas y la Biblia Textual son de este tipo. Su ventaja es que permiten ver los detalles del texto: una misma palabra traducida igual en varios pasajes, una imagen hebrea conservada. Son las más útiles para el estudio detallado. Su desventaja es que a veces conservan expresiones que el lector actual no entiende, como «ceñid los lomos de vuestro entendimiento» (1 P 1:13), una imagen de quien se recoge la túnica para correr.',
        { h: 'Equivalencia dinámica' },
        'Una traducción de equivalencia dinámica o funcional busca que el lector de hoy entienda lo mismo que entendía el lector original, aunque use otras palabras. Dios Habla Hoy, la Nueva Traducción Viviente y la Traducción en Lenguaje Actual son de este tipo. Su ventaja es la claridad, sobre todo para quien recién empieza a leer la Biblia. Su riesgo es que el traductor interpreta más, y a veces decide por el lector un sentido que el original deja abierto. La Nueva Versión Internacional busca un punto intermedio.',
        { h: 'La paráfrasis' },
        'Una paráfrasis vuelve a contar el texto con libertad, a menudo a partir de otra traducción y no del original. Puede ayudar a captar el tono general de un pasaje, pero no sirve para estudiar ni para fundar una doctrina.',
        'Ninguna forma de traducir es perfecta: toda traducción interpreta algo. Por eso es útil comparar.',
        { ejercicio: {
          pregunta: 'Para estudiar con detalle cómo usa Pablo una palabra en varias cartas, ¿qué tipo de traducción conviene usar como base?',
          opciones: [
            { t: 'Una paráfrasis, porque se entiende mejor.', ok: false, por_que: 'La paráfrasis cambia las palabras con libertad; no permite seguir una palabra concreta del original.' },
            { t: 'Una traducción de equivalencia formal, porque tiende a traducir la misma palabra de la misma manera.', ok: true, por_que: 'Al seguir de cerca el original, deja ver dónde se repite una palabra o una imagen.' },
            { t: 'Cualquiera, porque todas traducen cada palabra de la misma manera.', ok: false, por_que: 'Las traducciones dinámicas varían las palabras según el contexto, lo que es útil para leer pero dificulta el estudio de vocabulario.' }
          ],
          explicacion: 'Cada tipo de traducción sirve para algo distinto: la formal para estudiar, la dinámica para entender rápido, y ambas para comparar.'
        } }
      ],
      pensar: 'Toda traducción exige decisiones. ¿Cómo te ayuda saberlo a leer tu Biblia con más atención, y no con menos confianza?'
    },
    {
      id: 'elegir', n: 'Cómo elegir y usar una traducción', ref: 'Hechos 17:11; 2 Timoteo 2:15; Salmo 119:130',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Algunas traducciones al español',
          cab: ['Traducción', 'Año (completa)', 'Tipo', 'Uso recomendado'],
          filas: [
            ['Reina-Valera 1960', '1960', 'Formal; Textus Receptus', 'Lectura, memoria, culto y estudio'],
            ['La Biblia de las Américas', '1986', 'Formal; texto crítico', 'Estudio detallado'],
            ['Biblia Textual', '1999', 'Formal; texto crítico', 'Estudio detallado, con notas sobre manuscritos'],
            ['Nueva Versión Internacional', '1999', 'Intermedia', 'Lectura y estudio'],
            ['Dios Habla Hoy', '1979', 'Dinámica', 'Lectura y nuevos lectores'],
            ['Nueva Traducción Viviente', '2010', 'Dinámica', 'Lectura y comparación'],
            ['Traducción en Lenguaje Actual', '2003', 'Dinámica, lenguaje sencillo', 'Niños y nuevos lectores']
          ],
          nota: 'Las Biblias católicas en español, como la de Nácar-Colunga (1944) o la Biblia de Jerusalén, incluyen además los libros deuterocanónicos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y éstos eran más nobles que los que estaban en Tesalónica, pues recibieron la palabra con toda solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así.', ref: 'Hechos 17:11' }
      ],
      texto: [
        'Hoy existen decenas de traducciones de la Biblia al español. Esa abundancia es una bendición, pero puede confundir. ¿Cuál conviene usar?',
        { h: 'Una Biblia base' },
        'Conviene tener una traducción base para leer, memorizar y estudiar, y usar siempre la misma para que el texto se grabe en la memoria. Para la mayoría de las iglesias hispanas esa versión es la Reina-Valera 1960: es la que se lee en el culto, la que citan los himnos y los predicadores, y la que permite memorizar en comunidad. Es una traducción formal, fiel y probada por generaciones. Este sitio la usa en todos sus recursos.',
        { h: 'Comparar para entender' },
        'Al estudiar un pasaje difícil, ayuda mucho leerlo en otras traducciones. Si las versiones formales y las dinámicas coinciden, el sentido es claro. Si difieren, la diferencia señala un punto que merece estudio: una palabra difícil del original, una construcción ambigua o una variante de los manuscritos. La comparación no sirve para elegir la versión que dice lo que uno quiere, sino para ver mejor lo que dice el texto.',
        { h: 'Herramientas de estudio' },
        'Las notas al pie de muchas Biblias explican traducciones alternativas y variantes de manuscritos. Una Biblia interlineal pone debajo de cada palabra hebrea o griega su equivalente en español. Una concordancia permite encontrar todos los pasajes donde aparece una palabra. Con estas herramientas, el creyente que no sabe hebreo ni griego puede acercarse mucho al texto original.',
        { h: 'Tres cuidados' },
        'Primero, no fundar una doctrina en un solo versículo de una sola traducción, y menos en una paráfrasis. Segundo, desconfiar de una versión que cambia la enseñanza clara de la Escritura para acomodarla a una secta: algunas traducciones hechas por grupos que niegan la divinidad de Cristo modifican pasajes como Juan 1:1. Tercero, no despreciar a quien lee otra traducción fiel. Los de Berea son el modelo: escudriñaban «cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11).',
        { ejercicio: {
          pregunta: 'Lees un versículo en dos traducciones y dicen cosas bastante distintas. ¿Qué es lo más prudente?',
          opciones: [
            { t: 'Elegir la que mejor apoya lo que ya pensabas.', ok: false, por_que: 'Eso es usar la Biblia para confirmar opiniones, no para escuchar a Dios.' },
            { t: 'Concluir que la Biblia no se puede entender.', ok: false, por_que: 'Las diferencias suelen ser pocas y señalan un punto que se puede estudiar.' },
            { t: 'Ver qué dicen otras traducciones, las notas al pie y el contexto, para entender la dificultad del original.', ok: true, por_que: 'La diferencia es una señal de que el pasaje merece más estudio, y las herramientas permiten resolverla.' }
          ],
          explicacion: 'Comparar traducciones es una forma de escudriñar las Escrituras. El objetivo es entender mejor lo que Dios dijo, no elegir lo que preferimos.'
        } }
      ],
      pensar: '¿Tienes una Biblia base que conozcas bien? ¿Qué herramienta podrías sumar este mes para estudiarla mejor?'
    },
    {
      id: 'todos-pueblos', n: 'Hasta el último pueblo', ref: 'Apocalipsis 7:9-10; Mateo 24:14; Romanos 10:14-17',
      fecha: 2025,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/traductores-hoy.webp', alt: 'En una comunidad indígena de los Andes, un equipo de traductores y hablantes de la lengua revisa en un computador portátil y en hojas impresas un pasaje recién traducido', pie: 'Traductores y hablantes de una lengua indígena revisan un pasaje.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La traducción de la Biblia en 2025',
          cab: ['Dato', 'Cifra'],
          filas: [
            ['Lenguas vivas en el mundo', '7.396'],
            ['Lenguas con algún trabajo de traducción en curso', '4.457'],
            ['Lenguas que todavía esperan que se inicie la traducción', '544'],
            ['Personas que hablan esas 544 lenguas', '36,8 millones'],
            ['Población mundial con acceso a alguna porción de la Escritura', 'Más del 99 %']
          ],
          nota: 'Fuente: Wycliffe Global Alliance, estadísticas al 1 de agosto de 2025.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Después de esto miré, y he aquí una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas, que estaban delante del trono y en la presencia del Cordero, vestidos de ropas blancas, y con palmas en las manos; y clamaban a gran voz, diciendo: La salvación pertenece a nuestro Dios que está sentado en el trono, y al Cordero.', ref: 'Apocalipsis 7:9-10' }
      ],
      texto: [
        'La historia de la Biblia no terminó con la Reina-Valera. Hoy, miles de traductores, lingüistas y hablantes nativos siguen trabajando para que la Escritura llegue a cada lengua. Es una de las grandes obras misioneras de nuestro tiempo.',
        { h: 'Cuánto falta' },
        'Según la Wycliffe Global Alliance, en agosto de 2025 se hablaban en el mundo 7.396 lenguas. Más del 99 % de la población mundial tiene acceso a alguna porción de la Escritura en una lengua que entiende, y hay trabajo de traducción en curso en 4.457 lenguas. Pero 544 lenguas, habladas por casi 37 millones de personas, todavía esperan que alguien comience a traducir la Biblia. Muchas más tienen solo algunos libros o el Nuevo Testamento.',
        { h: 'En América Latina' },
        'Nuestro continente tiene cientos de lenguas indígenas, desde México hasta la Patagonia. Pueblos de habla quechua, aimara o guaraní tienen hoy la Biblia completa en su lengua, y otros siguen esperando. La traducción moderna se hace en equipo: traductores formados en hebreo y griego, consultores y, sobre todo, hablantes de la lengua que revisan si el texto se entiende y suena natural. Cada traducción es también un acto de amor por un pueblo, porque le dice que Dios habla su idioma.',
        { h: 'La meta' },
        'Pablo preguntó: «¿Y cómo oirán sin haber quien les predique?» (Ro 10:14), y concluyó que «la fe es por el oír, y el oír, por la palabra de Dios» (Ro 10:17). Jesús anunció que el evangelio sería predicado «en todo el mundo, para testimonio a todas las naciones; y entonces vendrá el fin» (Mt 24:14). La visión de Apocalipsis muestra el resultado: una multitud que nadie puede contar, de toda lengua, alabando al Cordero. Cada Biblia traducida acerca ese día.',
        'Aquí termina el recorrido de este recurso. La Palabra que Dios reveló e inspiró fue escrita, copiada con cuidado durante siglos, comprobada por miles de testigos y traducida con sacrificio, hasta llegar a tus manos. Ahora te toca leerla, obedecerla y llevarla a otros.',
        { ejercicio: {
          pregunta: 'Según Romanos 10:14-17, ¿por qué importa que la Palabra llegue a cada pueblo?',
          opciones: [
            { t: 'Porque la fe nace de oír la palabra de Dios, y nadie puede creer en lo que no ha oído.', ok: true, por_que: 'Es el argumento de Pablo: invocar, creer, oír y predicar forman una cadena que comienza con la Palabra.' },
            { t: 'Porque cada pueblo necesita una revelación distinta y adaptada a su cultura.', ok: false, por_que: 'La revelación es una sola para todos; lo que se adapta es la lengua en que se comunica, no el mensaje.' },
            { t: 'Porque Dios solo salva a quienes leen la Biblia en su lengua materna.', ok: false, por_que: 'Pablo no pone esa condición. Afirma que la fe viene por el oír la Palabra, y por eso hay que llevarla a todos.' }
          ],
          explicacion: 'La traducción de la Biblia está al servicio de la Gran Comisión: que todos puedan oír, creer e invocar el nombre del Señor.'
        } }
      ],
      pensar: 'Hay millones de personas que todavía no tienen ni un versículo en su lengua. ¿Cómo podrías apoyar, con oración, ofrenda o servicio, que la Palabra llegue a ellos?'
    }
  ];

  const M = window.__MANUSCRITOS;
  delete window.__MANUSCRITOS;
  window.RUTA_DATA = {
    titulo: 'De la Biblia a nosotros',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Reina-Valera 1909 y 1865: dominio público.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'escritura', grupo: 'De la Biblia a nosotros', n: 'I. Cómo se escribió y se copió', info: 'Materiales, lenguas, originales y copias, escribas y copistas', estaciones: M.escritura,
        linea: { desde: -1500, hasta: 400, hitos: [
          { a: -1446, t: 'Moisés escribe la ley' }, { a: -445, t: 'Esdras' },
          { a: [50, 95], t: 'Se escribe el NT' }, { a: 313, t: 'Fin de las persecuciones' }
        ] } },
      { id: 'antiguo', grupo: 'De la Biblia a nosotros', n: 'II. El texto del Antiguo Testamento', info: 'Ketef Hinnom, los masoretas, Qumrán y las versiones antiguas', estaciones: M.antiguo,
        linea: { desde: -700, hasta: 2000, hitos: [
          { a: -600, t: 'Ketef Hinnom' }, { a: [-250, 68], t: 'Rollos de Qumrán' },
          { a: [600, 1000], t: 'Masoretas' }, { a: 1947, t: 'Hallazgo de Qumrán' }
        ] } },
      { id: 'nuevo', grupo: 'De la Biblia a nosotros', n: 'III. El texto del Nuevo Testamento', info: 'Papiros, códices, crítica textual y pasajes discutidos', estaciones: M.nuevo,
        linea: { desde: 0, hasta: 2030, hitos: [
          { a: [50, 95], t: 'Se escribe el NT' }, { a: [300, 360], t: 'Vaticano y Sinaítico' },
          { a: 1516, t: 'Erasmo' }, { a: 1881, t: 'Westcott y Hort' }
        ] } },
      { id: 'traducciones', grupo: 'De la Biblia a nosotros', n: 'IV. Las traducciones', info: 'De Jerónimo y la Reforma a la Reina-Valera y las lenguas que esperan', estaciones: traducciones,
        linea: { desde: 300, hasta: 2030, hitos: [
          { a: 405, t: 'Vulgata' }, { a: 1455, t: 'Gutenberg' },
          { a: 1569, t: 'Biblia del Oso' }, { a: 1960, t: 'RV 1960' }
        ] } }
    ]
  };
})();
