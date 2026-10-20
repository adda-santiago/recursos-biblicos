/* ==========================================================
   Recursos Bíblicos — La Palabra de Dios · contenido de las rutas
   FUENTE de public/apps/palabra-de-dios/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/palabra_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica.
   ========================================================== */
(() => {
  const revelacion = [
    {
      id: 'dios-habla', n: 'Un Dios que habla', ref: 'Hebreos 1:1-2; Amós 3:7; Deuteronomio 29:29',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cadena.svg', alt: 'Cadena de cinco eslabones: Dios se revela, inspira a los autores, la iglesia reconoce el canon, el Espíritu ilumina y el creyente lee y obedece', pie: 'De Dios al lector: cinco eslabones que este recurso recorre.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/1/1-2', ref: 'Hebreos 1:1-2' }
      ],
      texto: [
        'La Biblia no comienza con una discusión sobre si Dios existe ni con un método para encontrarlo. Comienza con un Dios que habla: «Y dijo Dios: Sea la luz» (Gn 1:3). Desde la primera página, el Señor es un Dios que se comunica, y todo lo que sabemos de Él lo sabemos porque Él quiso darse a conocer. A eso la teología lo llama revelación: Dios descorre el velo y muestra lo que el ser humano, por sí solo, no podría descubrir.',
        'La carta a los Hebreos resume toda la historia en una frase: «Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo» (He 1:1-2). Dios habló, y lo hizo de muchas formas y durante siglos, hasta su palabra final en Jesucristo. Amós añade que el Señor no hace nada sin revelar antes su secreto a sus siervos los profetas (Am 3:7).',
        { h: 'Lo secreto y lo revelado' },
        'Moisés distingue dos cosas: «Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos para siempre, para que cumplamos todas las palabras de esta ley» (Dt 29:29). Hay misterios que Dios se reserva, y no nos toca especular sobre ellos. Pero lo que Él reveló es nuestro, y nos fue dado con un propósito práctico: obedecer.',
        { h: 'Cinco eslabones' },
        'Este recurso recorre la cadena que une a Dios con el lector de hoy. Primero, Dios se revela. Segundo, inspira a hombres para que pongan por escrito esa revelación sin error. Tercero, el pueblo de Dios reconoce cuáles son esos escritos: el canon. Cuarto, el Espíritu Santo ilumina a quien lee para que entienda. Quinto, el creyente recibe la Palabra con autoridad y la obedece. Cada eslabón tiene su ruta: la revelación, la inspiración, el canon y la autoridad de la Escritura. Cómo llegaron los manuscritos hasta nuestras traducciones se estudia en otro recurso del sitio.',
        { ejercicio: {
          pregunta: 'Según Deuteronomio 29:29, ¿para qué nos dio Dios lo que reveló?',
          opciones: [
            { t: 'Para que podamos conocer también las cosas secretas de Dios.', ok: false, por_que: 'El versículo dice lo contrario: las cosas secretas pertenecen a Dios. Lo revelado no es una llave para lo oculto.' },
            { t: 'Para que cumplamos todas las palabras de su ley.', ok: true, por_que: 'Es la finalidad que el mismo versículo declara: lo revelado es para nosotros y nuestros hijos, para obedecer.' },
            { t: 'Para que solo los sacerdotes y los profetas lo estudien.', ok: false, por_que: 'Moisés dice que lo revelado es para nosotros y para nuestros hijos para siempre: es para todo el pueblo.' }
          ],
          explicacion: 'La revelación no se da para satisfacer la curiosidad, sino para formar un pueblo que conoce a Dios y le obedece.'
        } }
      ],
      pensar: 'Dios no estaba obligado a hablar, y sin embargo habló. ¿Qué dice de su carácter que haya querido darse a conocer a personas como tú?'
    },
    {
      id: 'general', n: 'La revelación general', ref: 'Salmo 19:1-6; Romanos 1:18-21; Hechos 14:15-17',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cielo-estrellado.webp', alt: 'Un pastor joven sentado sobre una roca en las colinas de Judea mira un cielo nocturno cubierto de estrellas, con su rebaño dormido alrededor', pie: 'Los cielos cuentan la gloria de Dios (Salmo 19:1).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/19/1-4', ref: 'Salmo 19:1-4' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dos-libros.svg', alt: 'Comparación entre la revelación general (creación, conciencia, providencia: llega a todos, muestra el poder de Dios, deja sin excusa) y la revelación especial (Escritura y Cristo: llega a quien la oye, muestra la salvación, lleva a la fe)', pie: 'Lo que cada revelación alcanza y lo que no alcanza.', origen: 'esquema' }
      ],
      texto: [
        'Hay una revelación que llega a todos los seres humanos sin excepción. David la describe en el Salmo 19: «Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos» (Sal 19:1). Es un mensaje sin palabras, pero que no se interrumpe: un día lo dice al otro, y una noche a la otra. Llega «hasta el extremo del mundo» (Sal 19:4). Por eso se la llama revelación general: es general en su alcance, porque llega a todos, y en su contenido, porque muestra a Dios de un modo amplio.',
        'Pablo explica qué comunica. Por medio de lo creado se ven con claridad «su eterno poder y deidad» (Ro 1:20). En Listra añade la providencia: Dios no se dejó a sí mismo sin testimonio, haciendo bien, dando lluvias y tiempos fructíferos (Hch 14:17). Y en Romanos 2:14-15 menciona la conciencia, una ley escrita en el corazón que acusa o defiende. Creación, providencia y conciencia: tres maneras en que todo ser humano sabe que hay un Dios poderoso, bueno y justo.',
        { h: 'Lo que no puede hacer' },
        'La revelación general es verdadera, pero no basta para salvar. El cielo estrellado muestra el poder de Dios, no la cruz de Cristo. Pablo dice que su efecto es otro: los seres humanos «no tienen excusa» (Ro 1:20), porque habiendo conocido a Dios no le glorificaron ni le dieron gracias (Ro 1:21). La revelación general deja a la humanidad responsable delante de Dios, pero no le dice cómo reconciliarse con Él. Para eso hace falta que Dios hable de otra manera.',
        'Por eso el Salmo 19 tiene dos mitades. La primera habla de los cielos; la segunda, de la ley de Jehová, que «es perfecta, que convierte el alma» (Sal 19:7). Los cielos muestran la gloria del Creador; la Palabra convierte al pecador. El creyente puede admirar la creación y estudiarla con gratitud, porque es obra de Dios, pero sabe que el camino de la salvación solo se conoce por la revelación especial.',
        { ejercicio: {
          pregunta: '¿Qué logra la revelación general según Romanos 1:20?',
          opciones: [
            { t: 'Basta para que cualquier persona sincera se salve sin oír el evangelio.', ok: false, por_que: 'Pablo concluye lo contrario: la creación muestra el poder de Dios y deja a los hombres sin excusa, pero el evangelio es el poder de Dios para salvación (Romanos 1:16).' },
            { t: 'Muestra el eterno poder y la deidad de Dios, y deja a todos sin excusa.', ok: true, por_que: 'Es exactamente lo que dice el versículo: lo invisible de Dios se ve por medio de lo creado.' },
            { t: 'No comunica nada verdadero de Dios; solo la Biblia lo hace.', ok: false, por_que: 'La revelación general es real y verdadera. Su límite no es que mienta, sino que no revela el camino de la salvación.' }
          ],
          explicacion: 'La revelación general es suficiente para hacer responsables a todos, pero insuficiente para salvar. Por eso la iglesia predica el evangelio a toda criatura.'
        } }
      ],
      pensar: 'La creación habla de Dios a todos, pero «¿cómo oirán sin haber quien les predique?» (Ro 10:14). ¿A quién conoces que ve la obra de Dios cada día pero nunca ha oído el evangelio con claridad?'
    },
    {
      id: 'especial', n: 'La revelación especial y sus formas', ref: 'Hebreos 1:1; Números 12:6-8; Éxodo 3:1-6',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las muchas maneras en que Dios habló',
          cab: ['Forma', 'Ejemplos', 'Referencias'],
          filas: [
            ['Palabra directa', 'Dios habla con Adán, Noé, Abraham y Moisés', 'Gn 3:9; 12:1; Éx 3:4'],
            ['Teofanías', 'La zarza que ardía; el varón que luchó con Jacob; el ángel de Jehová', 'Éx 3:2; Gn 32:24-30; Jue 6:11-22'],
            ['Sueños', 'José, Faraón, Nabucodonosor, José el esposo de María', 'Gn 37:5; 41:1; Dn 2:1; Mt 1:20'],
            ['Visiones', 'Isaías en el templo, Ezequiel, Daniel, Pedro, Juan en Patmos', 'Is 6:1; Ez 1:1; Hch 10:9-16; Ap 1:10'],
            ['Suertes y Urim', 'El sumo sacerdote consultaba con el Urim y Tumim', 'Éx 28:30; Nm 27:21; Pr 16:33'],
            ['Palabra profética', '«Así dice Jehová»: el mensaje puesto en boca del profeta', 'Jer 1:9; Ez 2:7; Am 3:8'],
            ['Hechos de Dios', 'El éxodo, la conquista, el exilio y el retorno, interpretados por la palabra', 'Éx 14:31; Dt 4:32-35'],
            ['El Hijo', 'Jesucristo, la palabra final y suprema', 'Jn 1:14-18; He 1:2']
          ],
          nota: 'Ninguna de estas formas se presenta como superior a la Escritura: lo que Dios reveló de manera permanente quedó escrito.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@nm/12/6-8', ref: 'Números 12:6-8' }
      ],
      texto: [
        'Si la creación no basta para conocer el camino de la salvación, Dios tenía que hablar de un modo más claro y personal. A eso se llama revelación especial: es especial porque llega a personas concretas en momentos concretos, y porque revela lo que la creación no muestra: el nombre de Dios, su pacto, su ley, su plan de redención y, al final, a su Hijo.',
        'Hebreos dice que Dios habló «muchas veces y de muchas maneras» (He 1:1). La tabla muestra esa variedad: palabra directa, apariciones visibles de Dios llamadas teofanías, sueños, visiones, el Urim y Tumim del sumo sacerdote, la palabra puesta en boca de los profetas y los grandes hechos de Dios en la historia de Israel. El éxodo, por ejemplo, fue una revelación en hechos: Israel vio el mar abierto, y por eso temió a Jehová y creyó (Éx 14:31). Pero los hechos necesitaron la palabra que los explicara; sin Moisés, el éxodo habría sido solo una huida.',
        { h: 'Moisés, cara a cara' },
        'Números 12 marca una diferencia. A los profetas comunes Dios les habla en visión o en sueños; a Moisés, en cambio, «Cara a cara hablaré con él, y claramente, y no por figuras» (Nm 12:8). Hay grados de claridad en la revelación, y Moisés recibe la más clara del Antiguo Testamento. Aun así, Juan dirá que la ley vino por medio de Moisés, pero la gracia y la verdad vinieron por medio de Jesucristo (Jn 1:17). Moisés es el mayor de los profetas, pero no la última palabra.',
        { h: 'Dios sigue hablando' },
        'El Nuevo Testamento muestra que el Espíritu Santo sigue guiando a la iglesia: Pedro tiene una visión en Jope (Hch 10), Pablo recibe sueños y palabras proféticas (Hch 16:9; 21:10-11), y el día de Pentecostés se cumple la promesa de que hijos e hijas profetizarían (Hch 2:16-17). Esa guía es real hoy. Pero la iglesia distingue entre la revelación que fundó la fe y quedó escrita para siempre, y la guía del Espíritu en la vida de los creyentes, que se juzga siempre por la Escritura. La ruta del canon vuelve sobre esta diferencia.',
        { ejercicio: {
          pregunta: 'Según Números 12:6-8, ¿qué distinguía la revelación dada a Moisés?',
          opciones: [
            { t: 'Que Dios le hablaba solo por medio de sueños muy detallados.', ok: false, por_que: 'Los sueños y las visiones eran la forma común con los profetas; con Moisés Dios habló de otro modo.' },
            { t: 'Que Dios le hablaba cara a cara, claramente y no por figuras.', ok: true, por_que: 'Así lo dice el versículo 8. Es la revelación más directa del Antiguo Testamento.' },
            { t: 'Que nunca necesitó escribir lo que Dios le decía.', ok: false, por_que: 'Moisés escribió todas las palabras de Jehová (Éxodo 24:4). La claridad de la revelación no eliminó la escritura.' }
          ],
          explicacion: 'Dios habló de muchas maneras y con distintos grados de claridad. La cumbre llegó en Cristo, que no solo trajo la palabra de Dios: es la Palabra.'
        } }
      ],
      pensar: 'Dios habló en la zarza, en sueños y por profetas, pero lo que quiso que permaneciera lo dejó por escrito. ¿Qué lugar ocupa la Escritura cuando buscas la dirección de Dios para una decisión?'
    },
    {
      id: 'cristo', n: 'Cristo, la revelación suprema', ref: 'Juan 1:1-18; Hebreos 1:1-3; Colosenses 1:15',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/1/14-18', ref: 'Juan 1:14-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Por qué el Hijo es la palabra final',
          cab: ['Los profetas', 'El Hijo'],
          filas: [
            ['Recibieron la palabra de Dios', 'Es la Palabra de Dios (Jn 1:1)'],
            ['Hablaron «muchas veces y de muchas maneras»', 'Es la palabra de «estos postreros días» (He 1:1-2)'],
            ['Vieron visiones de la gloria de Dios', 'Es el resplandor de su gloria (He 1:3)'],
            ['Anunciaron lo que vendría', 'Es aquel de quien hablaban (Lc 24:27, 44)'],
            ['Fueron siervos en la casa de Dios', 'Es el Hijo sobre su casa (He 3:5-6)'],
            ['Nadie vio a Dios jamás', 'El Hijo «le ha dado a conocer» (Jn 1:18)']
          ]
        } }
      ],
      texto: [
        'Toda la revelación anterior apuntaba a un rostro. Juan abre su evangelio diciendo que en el principio «era el Verbo, y el Verbo era con Dios, y el Verbo era Dios» (Jn 1:1). Verbo traduce la palabra griega logos: la palabra, la expresión, el mensaje. Dios no solo habló palabras; envió a su Palabra en persona. «Y aquel Verbo fue hecho carne, y habitó entre nosotros» (Jn 1:14).',
        'Por eso Jesús es la revelación suprema. Juan lo dice sin rodeos: «A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer» (Jn 1:18). Cuando Felipe pidió que les mostrara al Padre, Jesús respondió: «El que me ha visto a mí, ha visto al Padre» (Jn 14:9). Pablo lo llama la imagen del Dios invisible (Col 1:15), y Hebreos, el resplandor de su gloria y la imagen misma de su sustancia (He 1:3). Si queremos saber cómo es Dios, miramos a Cristo.',
        { h: 'La Palabra escrita y la Palabra hecha carne' },
        'Alguien podría pensar que, si Cristo es la Palabra, la Biblia queda en segundo plano. El propio Jesús enseñó lo contrario. Dijo que las Escrituras «dan testimonio de mí» (Jn 5:39) y explicó a sus discípulos lo que de Él decían la ley, los profetas y los salmos (Lc 24:44). Además, todo lo que sabemos de Cristo lo sabemos por la Escritura: no hay otro acceso confiable a sus palabras y a sus obras. La Palabra escrita nos lleva a la Palabra hecha carne, y la Palabra hecha carne confirma la autoridad de la Palabra escrita.',
        { h: 'Una palabra final' },
        'Hebreos dice que Dios nos ha hablado por el Hijo «en estos postreros días» (He 1:2). La expresión indica que con Cristo comenzó la etapa final de la historia de la salvación. No hay que esperar otro mediador ni otro evangelio: Dios ya dijo en su Hijo lo esencial de todo lo que tenía que decir. Lo que los apóstoles escribieron después fue el testimonio y la explicación autorizada de esa palabra final, y por eso el Nuevo Testamento es el cierre de la revelación escrita.',
        { ejercicio: {
          pregunta: '¿Qué relación hay entre Cristo y la Escritura?',
          opciones: [
            { t: 'Cristo reemplaza a la Escritura: basta con tener una relación personal con Él.', ok: false, por_que: 'Jesús mismo remitió a sus oyentes a las Escrituras, que dan testimonio de Él (Juan 5:39). Sin ellas no sabríamos quién es.' },
            { t: 'La Escritura da testimonio de Cristo, y Cristo confirma la autoridad de la Escritura.', ok: true, por_que: 'Las dos revelaciones se sostienen mutuamente: el Hijo es la Palabra, y la Biblia es la Palabra escrita que lo revela.' },
            { t: 'Son dos revelaciones independientes, que pueden decir cosas distintas.', ok: false, por_que: 'Tienen un mismo origen, Dios, y un mismo centro. No pueden contradecirse.' }
          ],
          explicacion: 'Cristo es la revelación suprema, y la Escritura es el medio por el cual lo conocemos con certeza.'
        } }
      ],
      pensar: 'Jesús dijo: «El que me ha visto a mí, ha visto al Padre» (Jn 14:9). ¿Qué rasgo del carácter de Dios entendiste mejor al leer los evangelios?'
    },
    {
      id: 'escrita', n: 'De la palabra hablada a la palabra escrita', ref: 'Éxodo 24:3-7; Deuteronomio 31:24-26; Jeremías 36',
      visual: [
        { tipo: 'imagen', titulo: 'Moisés', src: 'img/moises-escribe.webp', alt: 'Moisés, anciano de barba blanca, escribe en un rollo sentado en una tienda al pie del monte Sinaí, con el campamento de Israel al fondo', pie: 'Moisés escribió todas las palabras de Jehová (Éxodo 24:4).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'El rollo', src: 'img/rollo-quemado.webp', alt: 'El rey Joacim, sentado junto a un brasero en su casa de invierno, corta con un cortaplumas una columna del rollo que su secretario le lee y la arroja al fuego', pie: 'El rey quema el rollo de Jeremías, y Dios manda escribirlo de nuevo (Jeremías 36).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jer/36/27-28', ref: 'Jeremías 36:27-28' }
      ],
      texto: [
        'Dios habló a Moisés en el Sinaí, y Moisés comunicó al pueblo todas las palabras de Jehová. Pero no se quedó ahí: «Y Moisés escribió todas las palabras de Jehová» (Éx 24:4). Al día siguiente tomó el libro del pacto y lo leyó al pueblo, que respondió: «Haremos todas las cosas que Jehová ha dicho, y obedeceremos» (Éx 24:7). La palabra hablada se volvió palabra escrita, y la escrita se convirtió en la referencia del pacto.',
        'Al final de su vida, Moisés terminó de escribir «las palabras de esta ley en un libro hasta concluirse» y mandó a los levitas ponerlo al lado del arca del pacto, para que estuviera allí por testigo (Dt 31:24-26). Josué agregó sus propias palabras «en el libro de la ley de Dios» (Jos 24:26). Así comenzó a formarse la colección de escritos sagrados que Israel guardaría.',
        { h: '¿Por qué escribir?' },
        'La palabra escrita tiene ventajas que la palabra oral no tiene. Permanece: no depende de la memoria de quien la oyó. Se transmite igual: llega a otros lugares y a otras generaciones sin cambiar. Y sirve de norma: cuando alguien dice hablar de parte de Dios, se puede comparar con lo que Dios ya dijo. Moisés ordenó que el rey de Israel copiara la ley de su mano y la leyera todos los días de su vida (Dt 17:18-19). Lo escrito era la medida aun para el rey.',
        { h: 'El rollo que no se pudo quemar' },
        'Jeremías 36 muestra cuánto valor tiene la Palabra escrita. Dios mandó a Jeremías poner por escrito todas sus profecías, y Baruc las escribió de boca del profeta. Cuando el rollo se leyó ante el rey Joacim, este iba cortando las columnas con un cortaplumas y echándolas al brasero, hasta que todo el rollo se consumió (Jer 36:23). La respuesta de Dios fue sencilla: «Vuelve a tomar otro rollo, y escribe en él todas las palabras primeras que estaban en el primer rollo que quemó Joacim rey de Judá» (Jer 36:28). El rey pudo destruir un rollo, pero no la Palabra.',
        { ejercicio: {
          pregunta: '¿Qué muestra Deuteronomio 31:24-26 sobre el libro de la ley?',
          opciones: [
            { t: 'Que se guardaba como un objeto sagrado, pero nadie debía leerlo.', ok: false, por_que: 'La ley debía leerse ante todo Israel cada siete años (Deuteronomio 31:10-11). Se guardaba para leerse y obedecerse.' },
            { t: 'Que la palabra escrita quedaba como testigo permanente del pacto.', ok: true, por_que: 'Moisés manda ponerlo junto al arca «por testigo»: el libro sería la referencia fija del pacto entre Dios y su pueblo.' },
            { t: 'Que solo Moisés podía interpretar lo que había escrito.', ok: false, por_que: 'Moisés iba a morir. El libro se escribió precisamente para que su enseñanza permaneciera después de él.' }
          ],
          explicacion: 'Desde Moisés, la Palabra escrita es la norma del pueblo de Dios: permanece, se transmite y juzga todo lo que se dice en nombre de Dios.'
        } }
      ],
      pensar: 'El rey Joacim cortó lo que no quería oír. ¿Hay partes de la Biblia que, en la práctica, prefieres pasar por alto?'
    },
    {
      id: 'progresiva', n: 'Una revelación progresiva y completa', ref: '1 Pedro 1:10-12; Hebreos 1:1-2; Judas 3',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: '../interpretar-biblia/img/esquema-revelacion.svg', alt: 'Línea de tiempo de la promesa del Redentor que se va aclarando: Génesis 3:15, Abraham, David, los profetas, Cristo y su venida en gloria', pie: 'La revelación progresiva de la promesa del Redentor.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1p/1/10-12', ref: '1 Pedro 1:10-12' }
      ],
      texto: [
        'Dios no reveló todo de una vez. Su revelación avanzó a lo largo de unos quince siglos, desde Moisés hasta los apóstoles, como una semilla que crece hasta ser árbol. En Génesis 3:15 la promesa del Redentor es apenas una frase sobre la simiente de la mujer; con Abraham se sabe que vendrá de su descendencia; con David, que será un rey de su casa; con los profetas, que nacerá de una virgen, sufrirá y reinará. En Cristo, la promesa se cumple y se ve completa.',
        'Pedro describe a los profetas como hombres que «inquirieron y diligentemente indagaron» sobre la salvación que anunciaban (1 P 1:10). El Espíritu de Cristo que estaba en ellos les hacía anunciar los sufrimientos de Cristo y las glorias posteriores, pero ellos mismos no sabían todo: buscaban qué persona y qué tiempo indicaba (1 P 1:11). Lo que ellos vieron de lejos, nosotros lo vemos cumplido.',
        { h: 'Progresiva no es contradictoria' },
        'Que la revelación sea progresiva no significa que lo posterior corrija errores de lo anterior. Significa que lo posterior aclara y completa lo que antes estaba en semilla. Los sacrificios del Antiguo Testamento no eran un error; eran sombra de lo que vendría, y su cuerpo es Cristo (Col 2:17). La ley no fue un tropiezo de Dios, sino un ayo que llevaba a Cristo (Gá 3:24). El intérprete lee cada etapa en su lugar y a la luz de la etapa final.',
        { h: 'Una fe dada una vez' },
        'La revelación avanzó hasta llegar a su cumbre en el Hijo. Después, los apóstoles dejaron por escrito su enseñanza, y Judas llama a la iglesia a contender ardientemente «por la fe que ha sido una vez dada a los santos» (Jud 3). La expresión «una vez» indica algo entregado de manera definitiva. Nadie puede añadir artículos nuevos a la fe ni corregir el evangelio de los apóstoles. Lo que el Espíritu hace hoy es iluminar, aplicar y confirmar esa fe, no reemplazarla.',
        { ejercicio: {
          pregunta: '¿Qué significa que la revelación sea progresiva?',
          opciones: [
            { t: 'Que las ideas de Israel sobre Dios evolucionaron y fueron corrigiendo sus errores.', ok: false, por_que: 'La Escritura no presenta su historia como una corrección de errores humanos, sino como una revelación de Dios que avanza hacia su cumplimiento.' },
            { t: 'Que Dios fue dando a conocer su plan por etapas, aclarando y completando lo anterior hasta Cristo.', ok: true, por_que: 'Cada etapa es verdadera; la siguiente la desarrolla. Así lo muestra la promesa del Redentor desde Génesis 3:15 hasta Cristo.' },
            { t: 'Que la revelación sigue avanzando y la iglesia puede recibir nuevas doctrinas.', ok: false, por_que: 'Judas 3 habla de la fe dada una vez a los santos. La revelación progresó hasta Cristo y los apóstoles, y allí quedó completa.' }
          ],
          explicacion: 'Progresiva en su desarrollo, completa en su cumplimiento: así es la revelación que la Biblia registra.'
        } }
      ],
      pensar: 'Los profetas anhelaban ver lo que tú ya conoces (1 P 1:10-12). ¿Valoras el privilegio de leer la historia completa de la salvación?'
    }
  ];

  window.__PALABRA = { revelacion };
})();
