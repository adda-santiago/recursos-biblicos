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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo;', ref: 'Hebreos 1:1-2' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Los cielos cuentan la gloria de Dios, Y el firmamento anuncia la obra de sus manos. Un día emite palabra a otro día, Y una noche a otra noche declara sabiduría. No hay lenguaje, ni palabras, Ni es oída su voz. Por toda la tierra salió su voz, Y hasta el extremo del mundo sus palabras. En ellos puso tabernáculo para el sol;', ref: 'Salmo 19:1-4' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y él les dijo: Oíd ahora mis palabras. Cuando haya entre vosotros profeta de Jehová, le apareceré en visión, en sueños hablaré con él. No así a mi siervo Moisés, que es fiel en toda mi casa. Cara a cara hablaré con él, y claramente, y no por figuras; y verá la apariencia de Jehová. ¿Por qué, pues, no tuvisteis temor de hablar contra mi siervo Moisés?', ref: 'Números 12:6-8' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad. Juan dio testimonio de él, y clamó diciendo: Este es de quien yo decía: El que viene después de mí, es antes de mí; porque era primero que yo. Porque de su plenitud tomamos todos, y gracia sobre gracia. Pues la ley por medio de Moisés fue dada, pero la gracia y la verdad vinieron por medio de Jesucristo. A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer.', ref: 'Juan 1:14-18' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y vino palabra de Jehová a Jeremías, después que el rey quemó el rollo, las palabras que Baruc había escrito de boca de Jeremías, diciendo: Vuelve a tomar otro rollo, y escribe en él todas las palabras primeras que estaban en el primer rollo que quemó Joacim rey de Judá.', ref: 'Jeremías 36:27-28' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Los profetas que profetizaron de la gracia destinada a vosotros, inquirieron y diligentemente indagaron acerca de esta salvación, escudriñando qué persona y qué tiempo indicaba el Espíritu de Cristo que estaba en ellos, el cual anunciaba de antemano los sufrimientos de Cristo, y las glorias que vendrían tras ellos. A éstos se les reveló que no para sí mismos, sino para nosotros, administraban las cosas que ahora os son anunciadas por los que os han predicado el evangelio por el Espíritu Santo enviado del cielo; cosas en las cuales anhelan mirar los ángeles.', ref: '1 Pedro 1:10-12' }
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
/* La Palabra de Dios · ruta II. La inspiración (ver encabezado en parte1.js) */
(() => {
  const inspiracion = [
    {
      id: 'exhalada', n: 'Exhalada por Dios', ref: '2 Timoteo 3:14-17',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero persiste tú en lo que has aprendido y te persuadiste, sabiendo de quién has aprendido; y que desde la niñez has sabido las Sagradas Escrituras, las cuales te pueden hacer sabio para la salvación por la fe que es en Cristo Jesús. Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.', ref: '2 Timoteo 3:14-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que dice 2 Timoteo 3:16, palabra por palabra',
          cab: ['Expresión', 'Qué significa'],
          filas: [
            ['«Toda»', 'Cada parte, no solo algunos pasajes: la inspiración es plenaria'],
            ['«la Escritura»', 'Lo escrito, no solo las ideas o los autores: la inspiración alcanza al texto'],
            ['«inspirada por Dios»', 'En griego theópneustos, «exhalada por Dios»: su origen es Dios'],
            ['«útil para enseñar…»', 'Su fin es práctico: doctrina, reprensión, corrección e instrucción'],
            ['«a fin de que el hombre de Dios sea perfecto»', 'Completo, equipado: la Escritura basta para formar al creyente']
          ]
        } }
      ],
      texto: [
        'Pablo escribe su última carta desde la cárcel, sabiendo que su muerte está cerca. Su consejo final a Timoteo no es buscar nuevas experiencias ni nuevas doctrinas, sino permanecer en lo que aprendió desde niño: las Sagradas Escrituras, que pueden hacerlo «sabio para la salvación por la fe que es en Cristo Jesús» (2 Ti 3:15). Y entonces da la razón de su valor: «Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia» (2 Ti 3:16).',
        'La palabra que la RV 1960 traduce «inspirada por Dios» es un término griego que Pablo quizá acuñó: theópneustos. Está formada por theós, Dios, y pnéo, soplar. Literalmente dice que la Escritura es «exhalada por Dios». La idea no es que Dios sopló sobre un libro humano para darle vida, ni que los autores estaban «inspirados» como lo está un poeta. Es que la Escritura salió de la boca de Dios, como el aliento sale de quien habla. Jesús lo dijo así: el hombre vive «de toda palabra que sale de la boca de Dios» (Mt 4:4).',
        { h: 'Toda la Escritura' },
        'Pablo no dice que algunas partes son inspiradas y otras no. Dice «toda». A esto se llama inspiración plenaria: las genealogías, los salmos de lamento, las leyes de pureza y las cartas personales son igualmente Palabra de Dios, aunque no todas tengan la misma función. Y dice «Escritura», es decir, lo escrito. La inspiración no se limita a los pensamientos de los autores o a su experiencia religiosa; alcanza las palabras mismas que quedaron en el texto. A esto se llama inspiración verbal.',
        'Cuando Pablo escribió esto pensaba ante todo en el Antiguo Testamento, que Timoteo conocía desde la niñez. Pero en la misma época Pedro ya contaba las cartas de Pablo entre «las otras Escrituras» (2 P 3:16), y Pablo citó un dicho de Jesús registrado en Lucas como «la Escritura» (1 Ti 5:18). La segunda estación de los apóstoles desarrolla este punto.',
        { ejercicio: {
          pregunta: '¿Qué significa literalmente la palabra griega que traducimos «inspirada por Dios»?',
          opciones: [
            { t: 'Que los autores estaban muy emocionados o entusiasmados al escribir.', ok: false, por_que: 'Ese es el sentido moderno de «inspiración», como la de un artista. El término griego habla del origen del texto, no del estado de ánimo del autor.' },
            { t: 'Que la Escritura fue exhalada por Dios: salió de Él como el aliento de quien habla.', ok: true, por_que: 'Theópneustos une «Dios» y «soplar». La Escritura tiene su origen en Dios mismo.' },
            { t: 'Que Dios aprobó después unos libros que los hombres escribieron por su cuenta.', ok: false, por_que: 'Eso sería una aprobación posterior. Pablo afirma que la Escritura procede de Dios desde su origen.' }
          ],
          explicacion: 'Porque procede de Dios, toda la Escritura tiene autoridad; porque es útil, toda la Escritura debe leerse, aun las partes que parecen áridas.'
        } }
      ],
      pensar: 'Pablo dice que la Escritura sirve también para «redargüir» y «corregir» (2 Ti 3:16). ¿Dejas que la Biblia te corrija, o la lees solo para encontrar consuelo?'
    },
    {
      id: 'autores', n: 'Hombres movidos por el Espíritu', ref: '2 Pedro 1:19-21; 2 Samuel 23:2; Lucas 1:1-4',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-doble-autoria.svg', alt: 'Dos autores para un mismo texto: el Espíritu Santo, autor divino, y el autor humano con su lengua, su estilo y sus circunstancias; ambos confluyen en un texto que es plenamente Palabra de Dios y plenamente escrito humano', pie: 'Un texto, dos autores: el Espíritu Santo y el autor humano.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Tenemos también la palabra profética más segura, a la cual hacéis bien en estar atentos como a una antorcha que alumbra en lugar oscuro, hasta que el día esclarezca y el lucero de la mañana salga en vuestros corazones; entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.', ref: '2 Pedro 1:19-21' }
      ],
      texto: [
        'Pedro explica cómo nació la Escritura: «porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21). La expresión griega que la RV 1960 traduce como inspirados se usa en Hechos 27 para el barco que el viento arrastraba (Hch 27:15, 17). Los autores eran llevados por el Espíritu como una nave es llevada por el viento: navegaban, pero el rumbo y el destino los ponía Dios.',
        'Al mismo tiempo, Pedro dice que «hablaron» hombres. No eran máquinas. David pudo decir: «El Espíritu de Jehová ha hablado por mí, Y su palabra ha estado en mi lengua» (2 S 23:2), y sin embargo sus salmos llevan su voz, sus angustias y su alegría. Lucas cuenta que investigó «con diligencia todas las cosas desde su origen» antes de escribir (Lc 1:3): consultó testigos, ordenó el material y eligió un estilo griego cuidado. Pablo dictaba a un secretario, que a veces saludaba al final (Ro 16:22). Amós escribe como un campesino; Isaías, como un poeta de la corte.',
        { h: 'Plenamente divina y plenamente humana' },
        'La Escritura tiene, entonces, dos autores. El autor divino garantiza que lo escrito es exactamente lo que Dios quiso decir. El autor humano pone su lengua, su vocabulario, su estilo, su cultura y sus circunstancias. Una cosa no anula la otra: Dios preparó a cada autor durante toda su vida, y en el momento de escribir lo guió de tal modo que sus palabras fueron a la vez suyas y de Dios. Hechos lo dice así: el Espíritu Santo «habló antes por boca de David» (Hch 1:16).',
        'Para el intérprete esto tiene dos consecuencias. Como el autor es humano, hay que estudiar su lengua, su época y su manera de escribir. Como el autor también es divino, lo que el texto afirma tiene la autoridad de Dios y no puede contradecirse con otros pasajes. El recurso Cómo interpretar la Biblia desarrolla el método que se sigue de aquí.',
        { ejercicio: {
          pregunta: 'Lucas investigó con diligencia antes de escribir (Lucas 1:1-4). ¿Qué muestra eso sobre la inspiración?',
          opciones: [
            { t: 'Que su evangelio no fue inspirado, porque tuvo que investigar.', ok: false, por_que: 'La inspiración no excluye el trabajo del autor. Dios guió a Lucas también en su investigación y en lo que escribió.' },
            { t: 'Que Dios usó el trabajo, la investigación y el estilo de los autores, guiándolos para que escribieran sin error.', ok: true, por_que: 'Es lo que muestran Lucas, Pablo o David: el Espíritu no suprimió la persona del autor, sino que la usó.' },
            { t: 'Que solo las partes que Lucas no pudo investigar fueron dictadas por Dios.', ok: false, por_que: 'Toda la Escritura es inspirada (2 Timoteo 3:16), no solo algunas partes de un libro.' }
          ],
          explicacion: 'La inspiración no se opone a la investigación ni al estilo personal: Dios guió a cada autor de principio a fin.'
        } }
      ],
      pensar: 'Dios usó la historia, el carácter y aun las cárceles de los autores bíblicos para dar su Palabra. ¿Cómo podría estar usando Dios tu propia historia para servir a otros?'
    },
    {
      id: 'como', n: '¿Cómo inspiró Dios la Escritura?', ref: '2 Timoteo 3:16; Gálatas 3:16; 1 Corintios 2:12-13',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Explicaciones de la inspiración',
          cab: ['Explicación', 'Qué sostiene', 'Por qué no basta o por qué se acepta'],
          filas: [
            ['Natural', 'Los autores eran genios religiosos, como un gran poeta', 'Hace de la Biblia un libro solo humano; contradice 2 P 1:21'],
            ['Parcial', 'Solo son inspiradas las partes de fe y conducta', '«Toda la Escritura» es inspirada (2 Ti 3:16); el lector termina eligiendo qué partes valen'],
            ['Conceptual', 'Dios inspiró las ideas, y el autor las expresó a su manera', 'Jesús y Pablo argumentan a partir de palabras y aun de una letra (Mt 22:32; Gá 3:16)'],
            ['Dictado mecánico', 'Dios dictó palabra por palabra, y el autor solo copió', 'No explica los estilos distintos ni la investigación de Lucas (Lc 1:1-4)'],
            ['Verbal y plenaria', 'Dios guió a los autores de modo que sus propias palabras fueran, en todo, las que Él quiso', 'Es la que sigue este recurso: une la autoría divina y la humana']
          ],
          nota: 'Algunos pasajes sí fueron dictados (los mandamientos, los mensajes a las siete iglesias), pero la Biblia no presenta el dictado como la forma general de la inspiración.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ahora bien, a Abraham fueron hechas las promesas, y a su simiente. No dice: Y a las simientes, como si hablase de muchos, sino como de uno: Y a tu simiente, la cual es Cristo.', ref: 'Gálatas 3:16' }
      ],
      texto: [
        'La Biblia afirma que es inspirada, pero no describe en detalle cómo actuó el Espíritu en la mente de cada autor. Por eso han surgido varias explicaciones. La tabla las resume. Vale la pena conocerlas, porque detrás de cada una hay una manera distinta de tratar el texto.',
        'La explicación natural dice que los autores eran genios religiosos y que la Biblia está «inspirada» como lo están Cervantes o Neruda. Pero Pedro niega que la profecía viniera por voluntad humana (2 P 1:21). La explicación parcial acepta que algunas partes son Palabra de Dios, las de fe y conducta, pero no las históricas o científicas. El problema es quién decide qué partes son cuáles: al final, el lector se convierte en juez de la Biblia. La explicación conceptual dice que Dios inspiró las ideas pero no las palabras. Sin embargo, Jesús basó un argumento sobre la resurrección en el tiempo de un verbo: Dios dijo «Yo soy el Dios de Abraham» (Mt 22:32), en presente, siglos después de la muerte del patriarca. Y Pablo argumentó a partir de un singular: «No dice: Y a las simientes, como si hablase de muchos, sino como de uno» (Gá 3:16). Para ellos, las palabras mismas importaban.',
        { h: 'Ni dictado ni libertad sin guía' },
        'En el otro extremo está la idea de que Dios dictó todo, palabra por palabra, como a un secretario. Hay pasajes dictados: los diez mandamientos, o las cartas a las siete iglesias de Apocalipsis. Pero la mayor parte de la Escritura no se escribió así, y el dictado no explica que cada autor tenga su vocabulario y su estilo.',
        'La explicación que sigue este recurso se llama inspiración verbal y plenaria. Verbal, porque alcanza las palabras. Plenaria, porque alcanza a toda la Escritura. Dios guió a los autores, con su personalidad y su trabajo, de modo que lo que escribieron fue exactamente lo que Él quiso comunicar. Pablo lo dice así: hablamos «no con palabras enseñadas por sabiduría humana, sino con las que enseña el Espíritu» (1 Co 2:13).',
        { ejercicio: {
          pregunta: 'Jesús argumenta que Dios es «Dios de vivos» porque dijo «Yo soy el Dios de Abraham» (Mateo 22:32). ¿Qué muestra ese argumento?',
          opciones: [
            { t: 'Que para Jesús lo inspirado eran las ideas generales, no las palabras.', ok: false, por_que: 'Su argumento depende del tiempo del verbo: «soy», no «era». Si las palabras no fueran inspiradas, el argumento no tendría fuerza.' },
            { t: 'Que Jesús confiaba en la Escritura hasta en el detalle de las palabras.', ok: true, por_que: 'Es un ejemplo claro de inspiración verbal: Jesús saca una doctrina de la forma exacta de una frase de Éxodo 3:6.' },
            { t: 'Que Jesús interpretaba la Escritura con libertad, sin atender al texto.', ok: false, por_que: 'Al contrario: Jesús reprende a los saduceos por ignorar las Escrituras (Mateo 22:29) y los lleva al texto exacto.' }
          ],
          explicacion: 'Jesús y los apóstoles tratan las palabras de la Escritura como palabras de Dios. Esa es la base de la inspiración verbal.'
        } }
      ],
      pensar: 'Si cada palabra de la Escritura importa, ¿qué cambiaría en tu manera de leerla: la velocidad, la atención, la memoria?'
    },
    {
      id: 'jesus', n: 'Jesús y la Escritura', ref: 'Mateo 5:17-18; Juan 10:35; Lucas 4:16-21; 24:44',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/jesus-nazaret.webp', alt: 'En la sinagoga de Nazaret, un hombre de pie, visto de espaldas, sostiene abierto el rollo de Isaías ante los asistentes sentados que lo miran atentos', pie: 'Jesús lee el libro del profeta Isaías en la sinagoga de Nazaret (Lucas 4:16-21).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir. Porque de cierto os digo que hasta que pasen el cielo y la tierra, ni una jota ni una tilde pasará de la ley, hasta que todo se haya cumplido.', ref: 'Mateo 5:17-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo trató Jesús el Antiguo Testamento',
          cab: ['Lo que hizo', 'Ejemplo'],
          filas: [
            ['Lo citó como palabra de Dios', '«¿No habéis leído lo que os fue dicho por Dios…?» (Mt 22:31)'],
            ['Venció la tentación con él', '«Escrito está» tres veces (Mt 4:4, 7, 10)'],
            ['Afirmó que no puede fallar', '«La Escritura no puede ser quebrantada» (Jn 10:35)'],
            ['Trató sus relatos como historia', 'Adán y Eva, Noé, Jonás, Sodoma (Mt 19:4-5; 24:37-39; 12:40; Lc 17:29)'],
            ['Se presentó como su cumplimiento', '«Hoy se ha cumplido esta Escritura» (Lc 4:21)'],
            ['Reconoció sus tres partes', 'La ley de Moisés, los profetas y los salmos (Lc 24:44)']
          ]
        } }
      ],
      texto: [
        'La razón más fuerte que tiene un cristiano para creer que la Biblia es inspirada no es un argumento filosófico, sino el ejemplo de Jesús. El Señor creía en la Escritura, la citaba, la obedecía y se sometía a ella. Si confiamos en Él como Señor, aceptamos también su manera de ver la Biblia.',
        'En el sermón del monte, Jesús dijo: «No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17). Y añadió que ni una jota ni una tilde pasará de la ley hasta que todo se haya cumplido (Mt 5:18). La jota es la letra más pequeña del alfabeto hebreo; la tilde, un pequeño trazo que distingue una letra de otra. Jesús afirma que la autoridad de la Escritura llega hasta el detalle más pequeño.',
        { h: '«La Escritura no puede ser quebrantada»' },
        'En una discusión en Jerusalén, Jesús citó una frase del Salmo 82 y añadió, como algo que nadie discutía, que «la Escritura no puede ser quebrantada» (Jn 10:35). No dijo que la ley entera no puede fallar, sino que lo dijo sobre una expresión aislada de un salmo. Para Jesús, cada parte de la Escritura tiene la autoridad del todo.',
        'Jesús también trató los relatos del Antiguo Testamento como historia real: habló de Adán y Eva creados varón y hembra (Mt 19:4-5), de los días de Noé (Mt 24:37-39), de Jonás en el vientre del gran pez (Mt 12:40) y de Sodoma (Lc 17:29). Cuando venció al diablo en el desierto, no discutió: tres veces respondió «Escrito está» (Mt 4:4, 7, 10). Y en la sinagoga de Nazaret leyó Isaías 61 y dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21).',
        { h: 'La Escritura de Jesús' },
        'Después de resucitar, Jesús explicó que debía cumplirse todo lo que estaba escrito de Él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44). Son las tres partes en que los judíos dividían sus Escrituras, las mismas que el canon del Antiguo Testamento que hoy tenemos. La ruta del canon vuelve sobre este pasaje.',
        { ejercicio: {
          pregunta: 'Jesús dijo que ni una jota ni una tilde pasará de la ley (Mateo 5:18). ¿Qué enseña con eso?',
          opciones: [
            { t: 'Que los cristianos deben seguir guardando todas las leyes ceremoniales de Israel.', ok: false, por_que: 'Jesús dice que vino a cumplir la ley. El Nuevo Testamento enseña que las ceremonias eran sombra de Cristo (Colosenses 2:16-17); su autoridad se mantiene en su cumplimiento.' },
            { t: 'Que la autoridad de la Escritura alcanza hasta sus detalles más pequeños.', ok: true, por_que: 'La jota y la tilde son lo más pequeño de la escritura hebrea. Nada de lo que Dios dijo queda sin cumplirse.' },
            { t: 'Que la ley era importante en su época, pero ya no tiene autoridad hoy.', ok: false, por_que: 'Jesús dice que nada pasará de la ley hasta que todo se haya cumplido. Su autoridad permanece, aunque se aplique a la luz de Cristo.' }
          ],
          explicacion: 'Jesús trató la Escritura como Palabra de Dios en cada detalle. Quien lo sigue como Señor aprende a confiar en la Biblia como Él confiaba.'
        } }
      ],
      pensar: 'Jesús enfrentó la tentación con la Escritura memorizada. ¿Qué versículos tienes guardados en el corazón para el momento de la prueba (Sal 119:11)?'
    },
    {
      id: 'apostoles', n: 'Los escritos de los apóstoles', ref: '1 Timoteo 5:18; 2 Pedro 3:15-16; 1 Corintios 14:37; Juan 14:26',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../interpretar-biblia/img/pablo-preso-escribe.webp', alt: 'Pablo, encadenado a un soldado romano, dicta una carta a un escriba en una habitación sencilla de Roma', pie: 'Pablo dicta una carta desde la prisión.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y tened entendido que la paciencia de nuestro Señor es para salvación; como también nuestro amado hermano Pablo, según la sabiduría que le ha sido dada, os ha escrito, casi en todas sus epístolas, hablando en ellas de estas cosas; entre las cuales hay algunas difíciles de entender, las cuales los indoctos e inconstantes tuercen, como también las otras Escrituras, para su propia perdición.', ref: '2 Pedro 3:15-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Nuevo Testamento se reconoce a sí mismo como Escritura',
          cab: ['Pasaje', 'Qué afirma'],
          filas: [
            ['Jn 14:26; 16:13', 'Jesús promete que el Espíritu recordará y guiará a los apóstoles a toda la verdad'],
            ['1 Ts 2:13', 'Los tesalonicenses recibieron la predicación de Pablo como palabra de Dios'],
            ['1 Co 14:37', 'Lo que Pablo escribe son mandamientos del Señor'],
            ['1 Ti 5:18', 'Pablo cita juntos Deuteronomio 25:4 y Lucas 10:7 como «la Escritura»'],
            ['2 P 3:15-16', 'Pedro pone las cartas de Pablo al lado de «las otras Escrituras»'],
            ['2 P 3:2', 'Los mandamientos de los apóstoles, junto a las palabras de los profetas'],
            ['Ap 1:3; 22:18-19', 'Apocalipsis se presenta como profecía que se lee en la iglesia y no admite añadidos']
          ]
        } }
      ],
      texto: [
        'Jesús no escribió libros. Pero antes de partir prometió a sus apóstoles que el Espíritu Santo les enseñaría todas las cosas y les recordaría todo lo que Él les había dicho (Jn 14:26), y que los guiaría a toda la verdad (Jn 16:13). Esa promesa es la base de la inspiración del Nuevo Testamento: lo que los apóstoles enseñaron y escribieron fue obra del mismo Espíritu que habló por los profetas.',
        'Los apóstoles tenían conciencia de esa autoridad. Pablo agradece que los tesalonicenses recibieran su predicación «no como palabra de hombres, sino según es en verdad, la palabra de Dios» (1 Ts 2:13). A los corintios que se creían espirituales les dice: «reconozca que lo que os escribo son mandamientos del Señor» (1 Co 14:37). Incluso cuando distingue entre lo que mandó el Señor durante su ministerio y lo que él mismo enseña (1 Co 7:10, 12), lo hace como apóstol con autoridad, no como un consejero cualquiera.',
        { h: 'Escritura junto a Escritura' },
        'Hay dos pasajes especialmente importantes. En 1 Timoteo 5:18 Pablo escribe: «Pues la Escritura dice: No pondrás bozal al buey que trilla; y: Digno es el obrero de su salario». La primera cita es de Deuteronomio 25:4; la segunda coincide con las palabras de Jesús en Lucas 10:7. Pablo pone un texto de Moisés y un texto de los evangelios bajo el mismo título: Escritura.',
        'En 2 Pedro 3:15-16, Pedro menciona las cartas de su «amado hermano Pablo» y dice que hay en ellas cosas difíciles, que los indoctos tuercen «como también las otras Escrituras». La palabra «otras» muestra que Pedro ya cuenta las cartas de Pablo entre las Escrituras. Así, desde la generación de los apóstoles, la iglesia recibió sus escritos con la misma autoridad que el Antiguo Testamento.',
        { ejercicio: {
          pregunta: '¿Por qué es importante 1 Timoteo 5:18 para la doctrina de la Escritura?',
          opciones: [
            { t: 'Porque enseña cuánto se debe pagar a los pastores.', ok: false, por_que: 'Ese es el tema práctico del pasaje, pero no explica su importancia para la doctrina de la Escritura.' },
            { t: 'Porque Pablo llama «Escritura» tanto a un texto de Deuteronomio como a unas palabras registradas en Lucas.', ok: true, por_que: 'Pone un texto del Antiguo Testamento y uno del Nuevo con la misma autoridad: los dos son Escritura.' },
            { t: 'Porque demuestra que Pablo citaba de memoria y con errores.', ok: false, por_que: 'Citar libremente o resumir no es equivocarse. Pablo cita con fidelidad el sentido de ambos textos.' }
          ],
          explicacion: 'Antes de que hubiera listas oficiales, los apóstoles ya trataban los escritos del Nuevo Testamento como Escritura.'
        } }
      ],
      pensar: 'Los tesalonicenses recibieron el mensaje como palabra de Dios y por eso «actúa en vosotros los creyentes» (1 Ts 2:13). ¿Cómo recibes la predicación de la Palabra en tu iglesia?'
    },
    {
      id: 'inerrancia', n: 'Sin error en todo lo que afirma', ref: 'Juan 17:17; Números 23:19; Salmo 12:6; Proverbios 30:5-6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Toda palabra de Dios es limpia; El es escudo a los que en él esperan. No añadas a sus palabras, para que no te reprenda, Y seas hallado mentiroso.', ref: 'Proverbios 30:5-6' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que la inerrancia no significa',
          cab: ['La Biblia puede…', 'Ejemplo', 'Por qué no es error'],
          filas: [
            ['Describir como se ve', '«Sale el sol, y se pone el sol» (Ec 1:5)', 'Es lenguaje de observación, como el que usamos hoy'],
            ['Redondear números', 'Censos y cifras de ejércitos', 'Las cifras redondas eran normales y no pretendían exactitud contable'],
            ['Citar con libertad', 'Citas del AT en el NT', 'Se cita el sentido; a veces desde la traducción griega'],
            ['Resumir o ordenar por tema', 'Los evangelios no siempre siguen el orden cronológico', 'Cada autor organiza su material con un propósito'],
            ['Registrar palabras falsas', 'El diablo (Gn 3:4) o los amigos de Job (Job 42:7)', 'La Biblia registra con exactitud lo que dijeron, no lo aprueba'],
            ['Usar figuras', '«Los cuatro ángulos de la tierra» (Ap 7:1)', 'Es una figura de los puntos cardinales, no una afirmación sobre la forma del mundo']
          ],
          nota: 'La inerrancia se aplica a los escritos originales. Las copias y traducciones se estudian en el recurso De la Biblia a nosotros.'
        } }
      ],
      texto: [
        'Si la Escritura procede de Dios, y Dios no miente, la Escritura no afirma nada falso. Balaam lo dijo frente a Balac: «Dios no es hombre, para que mienta» (Nm 23:19). Jesús oró al Padre: «Santifícalos en tu verdad; tu palabra es verdad» (Jn 17:17). Y Proverbios advierte: «Toda palabra de Dios es limpia» (Pr 30:5), por lo que nadie debe añadirle nada (Pr 30:6). A esta convicción se la llama inerrancia: la Escritura, en sus escritos originales, no tiene error en nada de lo que afirma.',
        'Inerrancia no significa que la Biblia hable como un manual técnico moderno. La tabla muestra varias cosas que no son errores. La Biblia describe el mundo como se ve, igual que nosotros decimos que el sol sale. Usa números redondos, figuras, resúmenes y citas libres. Registra con exactitud palabras falsas, como la mentira de la serpiente, sin aprobarlas. Para saber si un texto afirma algo hay que leerlo según su género y su intención, como enseña el recurso Cómo interpretar la Biblia.',
        { posturas: {
          titulo: '¿Hasta dónde llega la verdad de la Escritura?',
          a: { n: 'Infalibilidad limitada', t: 'Algunos teólogos sostienen que la Biblia es infalible solo en lo que enseña sobre la fe y la conducta, y que puede tener errores menores en datos históricos, geográficos o científicos, que no afectarían su mensaje.' },
          b: { n: 'Inerrancia', t: 'La Escritura no tiene error en nada de lo que afirma, sea doctrina, historia o cualquier otro tema, porque toda ella procede de Dios (2 Ti 3:16). Jesús trató los relatos históricos como verdaderos (Mt 12:40; 19:4-5) y dijo que la Escritura no puede ser quebrantada (Jn 10:35).' },
          c: 'Este recurso sigue la inerrancia. Separar la fe de la historia es difícil en una revelación que ocurrió en hechos reales: si la resurrección no fuera un hecho histórico, la fe sería vana (1 Co 15:14-17). Además, la postura limitada deja al lector la decisión de qué partes son confiables.'
        } },
        'La inerrancia no nace de que podamos resolver cada dificultad, sino del carácter de Dios. Hay pasajes difíciles, y la próxima estación muestra cómo abordarlos. Pero el creyente se acerca a ellos con la confianza de que el problema está en nuestro conocimiento limitado, no en la Palabra de Dios.',
        { ejercicio: {
          pregunta: 'Eclesiastés 1:5 dice: «Sale el sol, y se pone el sol». ¿Es un error científico?',
          opciones: [
            { t: 'Sí, porque es la Tierra la que gira, no el sol.', ok: false, por_que: 'Exigir lenguaje técnico a un texto de observación es un error de lectura. También los astrónomos dicen hoy «sale el sol».' },
            { t: 'No, porque es lenguaje de observación: describe lo que se ve, sin pretender explicar la astronomía.', ok: true, por_que: 'El autor describe el ciclo diario tal como lo percibe cualquiera. No afirma una teoría sobre el sistema solar.' },
            { t: 'No importa, porque la Biblia solo es verdadera en temas espirituales.', ok: false, por_que: 'Esa es la postura de la infalibilidad limitada. Aquí no hace falta: el texto no afirma nada falso.' }
          ],
          explicacion: 'Para saber si la Biblia se equivoca, primero hay que saber qué afirma. Muchas supuestas contradicciones nacen de pedirle al texto lo que no pretende decir.'
        } }
      ],
      pensar: '«Toda palabra de Dios es limpia» (Pr 30:5). Si la Palabra es completamente confiable, ¿hay alguna promesa o mandato en el que todavía te cueste confiar?'
    },
    {
      id: 'dificultades', n: 'Las dificultades del texto', ref: '2 Samuel 24:1; 1 Crónicas 21:1; Mateo 27:5; Hechos 1:18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro dificultades y cómo se explican',
          cab: ['Dificultad', 'Explicación'],
          filas: [
            ['¿Quién incitó a David al censo? Jehová (2 S 24:1) o Satanás (1 Cr 21:1)', 'Satanás tentó con su propia mala intención, y Dios lo permitió como juicio sobre Israel, igual que en Job 1–2. Cada libro destaca un aspecto del mismo hecho'],
            ['¿Cómo murió Judas? Se ahorcó (Mt 27:5) o cayó y se reventó (Hch 1:18)', 'Mateo cuenta cómo murió; Lucas, lo que se encontró después. Un cuerpo colgado que cae se revienta. Los relatos se complementan'],
            ['¿Uno o dos ciegos en Jericó? Mateo habla de dos (Mt 20:30); Marcos y Lucas, de uno', 'Marcos nombra al que todos conocían, Bartimeo. Quien menciona a uno no niega que hubiera otro'],
            ['¿Al salir o al entrar en Jericó? (Mt 20:29; Lc 18:35)', 'En tiempos de Jesús había dos Jericó: la antigua y la nueva de Herodes, a poca distancia. El hecho pudo ocurrir entre ambas']
          ],
          nota: 'Estas explicaciones son las que proponen comentaristas evangélicos. No todas las dificultades tienen una solución segura; algunas esperan más información.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero Satanás se levantó contra Israel, e incitó a David a que hiciese censo de Israel.', ref: '1 Crónicas 21:1' }
      ],
      texto: [
        'Quien lee la Biblia con atención encuentra pasajes que parecen chocar. No es una sorpresa: son 66 libros escritos por unos cuarenta autores a lo largo de quince siglos, que narran los mismos hechos desde ángulos distintos. Lo honesto no es esconder las dificultades, sino estudiarlas con paciencia y con la convicción de que la Palabra de Dios es verdadera.',
        'La tabla muestra cuatro ejemplos. En 2 Samuel 24:1 es Jehová quien incita a David a hacer el censo; en 1 Crónicas 21:1, «Satanás se levantó contra Israel, e incitó a David». No se trata de dos versiones incompatibles. Como en el libro de Job, Satanás actúa con mala intención, y Dios, que gobierna sobre todo, lo permite para cumplir un juicio justo. El autor de Samuel mira la causa última; el de Crónicas, el instrumento inmediato.',
        { h: 'Complementar no es contradecir' },
        'La muerte de Judas es otro ejemplo. Mateo dice que se ahorcó (Mt 27:5); Pedro, según Lucas, dice que «cayendo de cabeza, se reventó por la mitad» (Hch 1:18). Una explicación sencilla es que el cuerpo colgado cayó y se reventó. Dos testigos que cuentan distintos detalles de un mismo hecho no se contradicen; se complementan. Lo mismo ocurre cuando un evangelio menciona dos ciegos y otro solo uno: el que menciona a uno no dice que fuera el único.',
        { h: 'Cómo abordar una dificultad' },
        'Hay algunos pasos sencillos. Primero, leer los dos pasajes completos en su contexto, no solo el versículo. Segundo, preguntarse qué quiere destacar cada autor. Tercero, distinguir entre lo que el texto afirma y lo que nosotros suponemos. Cuarto, consultar un buen comentario o una Biblia de estudio. Y quinto, si la dificultad sigue, tener la humildad de esperar: muchas supuestas contradicciones se resolvieron cuando la arqueología o el estudio de las lenguas aportaron información que antes faltaba.',
        { ejercicio: {
          pregunta: 'Mateo menciona dos ciegos en Jericó, y Marcos menciona solo a Bartimeo. ¿Cómo se entiende mejor?',
          opciones: [
            { t: 'Uno de los dos evangelistas recordó mal el hecho.', ok: false, por_que: 'Es la salida más rápida, pero no la necesaria. Mencionar a uno no excluye que hubiera otro.' },
            { t: 'Marcos menciona al ciego conocido por su nombre, y Mateo informa que eran dos; los relatos se complementan.', ok: true, por_que: 'Un autor puede centrarse en la persona más conocida para sus lectores sin negar que hubiera otra.' },
            { t: 'Son dos milagros distintos que no tienen relación entre sí.', ok: false, por_que: 'Es posible en teoría, pero los relatos coinciden en lugar, momento y desarrollo; la explicación más sencilla es que narran el mismo hecho.' }
          ],
          explicacion: 'Antes de concluir que hay un error, conviene preguntarse si los textos se complementan. Casi siempre lo hacen.'
        } }
      ],
      pensar: '¿Hay alguna dificultad de la Biblia que te haya inquietado? ¿Qué pasos de esta estación podrías dar para estudiarla con paciencia y fe?'
    }
  ];

  window.__PALABRA.inspiracion = inspiracion;
})();
/* La Palabra de Dios · ruta III. El canon (ver encabezado en parte1.js) */
(() => {
  const canon = [
    {
      id: 'que-es', n: '¿Qué es el canon?', ref: 'Gálatas 6:16; Deuteronomio 4:2; Romanos 3:2',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-66-libros.svg', alt: 'Los 66 libros de la Biblia agrupados: en el Antiguo Testamento, 5 de la ley, 12 históricos, 5 poéticos, 5 profetas mayores y 12 menores; en el Nuevo, 4 evangelios, Hechos, 13 cartas de Pablo, 8 cartas generales y Apocalipsis', pie: 'Los 66 libros del canon: 39 del Antiguo Testamento y 27 del Nuevo.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'No añadiréis a la palabra que yo os mando, ni disminuiréis de ella, para que guardéis los mandamientos de Jehová vuestro Dios que yo os ordene.', ref: 'Deuteronomio 4:2' }
      ],
      texto: [
        'La palabra canon viene del griego kanón, que designaba una caña recta usada para medir, como una regla de carpintero. Pablo la usa en sentido figurado: paz y misericordia «a todos los que anden conforme a esta regla» (Gá 6:16). Desde el siglo IV, la iglesia llamó canon a la lista de libros que son Escritura inspirada y, por lo tanto, la regla de la fe y de la vida. Un libro canónico es un libro que pertenece a esa lista.',
        'La Biblia que usan las iglesias evangélicas tiene 66 libros: 39 en el Antiguo Testamento y 27 en el Nuevo. El esquema los muestra agrupados según el orden de nuestras Biblias. Esa organización no es parte de la inspiración, pero ayuda a encontrar los libros y a ver la forma de la historia: la ley, la historia de Israel, la poesía y los profetas en el Antiguo Testamento; los evangelios, la historia de la iglesia, las cartas y la profecía en el Nuevo.',
        { h: 'Reconocido, no creado' },
        'Una pregunta clave es quién decide qué libros son Escritura. Pablo dice que a Israel «les ha sido confiada la palabra de Dios» (Ro 3:2). Israel no hizo inspirados los libros; los recibió y los guardó. Lo mismo vale para la iglesia: no le dio autoridad a los evangelios o a las cartas, sino que reconoció la autoridad que ya tenían por haber sido inspirados por Dios.',
        { posturas: {
          titulo: '¿La iglesia hizo el canon o lo reconoció?',
          a: { n: 'Lo definió la iglesia', t: 'La Iglesia católica enseña que fue la autoridad de la Iglesia la que definió con certeza el canon, y que por eso la Escritura se recibe junto con la tradición y el magisterio que la determinaron.' },
          b: { n: 'Lo reconoció la iglesia', t: 'Las iglesias evangélicas sostienen que los libros son canónicos porque Dios los inspiró. La iglesia, guiada por el Espíritu, reconoció su voz en ellos (Jn 10:27), como un hijo reconoce la letra de su padre. La autoridad está en el libro, no en quien hizo la lista.' },
          c: 'Este recurso sigue la segunda postura. El canon es una colección de libros con autoridad, no una colección de libros a los que alguien dio autoridad. Por eso los creyentes del siglo I ya obedecían los escritos apostólicos antes de que existiera cualquier concilio.'
        } },
        'Moisés advirtió: «No añadiréis a la palabra que yo os mando, ni disminuiréis de ella» (Dt 4:2). Saber cuáles son los libros de Dios importa, porque añadir o quitar a su Palabra es igual de grave. Las estaciones siguientes recorren cómo se reconoció el canon del Antiguo y del Nuevo Testamento.'
      ],
      pensar: 'La Biblia es la regla que mide todo lo demás. ¿Qué ideas, costumbres o enseñanzas de tu vida necesitan ser medidas otra vez con esa regla?'
    },
    {
      id: 'antiguo', n: 'El canon del Antiguo Testamento', ref: 'Lucas 24:44; Mateo 23:35; Romanos 3:2', fecha: [-1446, -400],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-tanaj.svg', alt: 'Correspondencia entre las tres partes de la Biblia hebrea (Ley: 5 libros; Profetas: 8; Escritos: 11; en total 24) y los 39 libros del Antiguo Testamento de las Biblias evangélicas, que son los mismos textos contados de otra manera', pie: 'Los 24 libros de la Biblia hebrea son los mismos 39 de nuestro Antiguo Testamento.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y les dijo: Estas son las palabras que os hablé, estando aún con vosotros: que era necesario que se cumpliese todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos. Entonces les abrió el entendimiento, para que comprendiesen las Escrituras;', ref: 'Lucas 24:44-45' }
      ],
      texto: [
        'El Antiguo Testamento se fue reuniendo a medida que Dios hablaba. La ley de Moisés se guardó junto al arca (Dt 31:24-26); Josué añadió sus palabras al libro de la ley (Jos 24:26); Samuel escribió las leyes del reino y las guardó delante de Jehová (1 S 10:25). Daniel, en el exilio, leía la profecía de Jeremías como Escritura (Dn 9:2). Después del regreso, Esdras enseñó la ley al pueblo (Esd 7:10; Neh 8:8). Con Malaquías, hacia el 430 a.C., terminó la voz de los profetas del Antiguo Testamento.',
        'Los judíos dividían sus Escrituras en tres partes: la Ley (Torá), los Profetas (Neviím) y los Escritos (Ketuvím). De las iniciales hebreas viene el nombre Tanaj. Contaban 24 libros, porque unían Samuel, Reyes y Crónicas, los doce profetas menores en un solo libro, y Esdras con Nehemías. El esquema muestra que son exactamente los mismos textos que nuestros 39 libros, contados y ordenados de otra manera. El historiador judío Josefo, a fines del siglo I d.C., habla de 22 libros, juntando además Rut con Jueces y Lamentaciones con Jeremías.',
        { h: 'El canon que Jesús reconoció' },
        'Jesús confirmó esa colección. Después de resucitar, habló de todo lo escrito de Él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44): los Salmos encabezaban la tercera parte, los Escritos. Y en Mateo 23:35 habló de la sangre justa derramada desde Abel hasta Zacarías. Abel muere en Génesis, el primer libro del Tanaj; Zacarías, apedreado en el patio del templo, muere en 2 Crónicas 24:20-21, que en el orden hebreo es el último libro (los intérpretes explican de distintas maneras el nombre de su padre en Mateo). Es como decir «de Génesis a Crónicas»: de principio a fin de la Escritura.',
        'Los apóstoles citan como Escritura casi todos los libros del Antiguo Testamento, y nunca citan como Escritura los libros llamados apócrifos, que se estudian en la siguiente estación. Pablo resume la responsabilidad de Israel: a ellos «les ha sido confiada la palabra de Dios» (Ro 3:2). La iglesia recibió de Jesús y de los apóstoles esa misma colección.',
        { ejercicio: {
          pregunta: '¿Por qué la Biblia hebrea tiene 24 libros y nuestro Antiguo Testamento 39?',
          opciones: [
            { t: 'Porque las Biblias evangélicas añadieron quince libros que los judíos no aceptan.', ok: false, por_que: 'No hay libros añadidos: el contenido es el mismo. La diferencia está en la forma de contar.' },
            { t: 'Porque son los mismos textos, divididos y contados de otra manera.', ok: true, por_que: 'Los judíos unían, por ejemplo, los doce profetas menores en un solo libro, y Samuel, Reyes y Crónicas en uno cada uno.' },
            { t: 'Porque los judíos perdieron varios libros durante el exilio.', ok: false, por_que: 'No hay indicios de libros canónicos perdidos. Daniel y Esdras usaban las Escrituras en el exilio y después del regreso.' }
          ],
          explicacion: 'Los 24 libros del Tanaj y los 39 de nuestro Antiguo Testamento contienen exactamente los mismos escritos.'
        } }
      ],
      pensar: 'Jesús enseñó lo que de Él estaba escrito «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44). ¿Lees el Antiguo Testamento buscando a Cristo, o lo dejas de lado por parecerte lejano?'
    },
    {
      id: 'apocrifos', n: 'Los libros apócrifos', ref: 'Romanos 3:2; Lucas 24:44; Judas 14-15', fecha: [-200, 50],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los libros deuterocanónicos o apócrifos',
          cab: ['Libro', 'Contenido', 'Fecha aproximada'],
          filas: [
            ['Tobías', 'Relato de un israelita piadoso en el exilio y el viaje de su hijo con un ángel', 'Siglos III–II a.C.'],
            ['Judit', 'Una viuda judía salva a su pueblo de un general asirio', 'Siglo II a.C.'],
            ['Adiciones a Ester', 'Oraciones y escenas añadidas al libro hebreo', 'Siglo II a.C.'],
            ['Sabiduría', 'Reflexión sobre la sabiduría, escrita en griego en nombre de Salomón', 'Siglo I a.C.'],
            ['Eclesiástico (Sirácida)', 'Proverbios de Jesús ben Sirá', 'Hacia 180 a.C.'],
            ['Baruc y Carta de Jeremías', 'Escritos atribuidos al secretario de Jeremías', 'Siglos II–I a.C.'],
            ['Adiciones a Daniel', 'Oración de Azarías, Susana, Bel y el dragón', 'Siglos II–I a.C.'],
            ['1 y 2 Macabeos', 'Historia de la rebelión judía contra los griegos seléucidas', 'Fines del siglo II a.C.']
          ],
          nota: 'Las iglesias ortodoxas reconocen además otros libros, como 3 Macabeos y un salmo adicional atribuido a David que no está en la Biblia hebrea.'
        } }
      ],
      texto: [
        'Si se compara una Biblia evangélica con una católica, la católica tiene siete libros más en el Antiguo Testamento, además de algunas secciones añadidas a Ester y Daniel. La Iglesia católica los llama deuterocanónicos, es decir, «del segundo canon». Las iglesias evangélicas los llaman apócrifos, palabra que significa «ocultos» y que se aplicó a libros que no se leían como Escritura. Fueron escritos entre el siglo III a.C. y el siglo I a.C., en el período entre los dos testamentos.',
        'Estos libros formaban parte de muchas copias de la traducción griega del Antiguo Testamento, la Septuaginta, que usaban los judíos de habla griega. Por eso circularon en la iglesia antigua y algunos escritores cristianos los citaron. Pero no formaban parte de la Biblia hebrea.',
        { posturas: {
          titulo: '¿Son Escritura los libros apócrifos?',
          a: { n: 'Sí, son canónicos', t: 'La Iglesia católica los incluyó en su canon definitivo en el Concilio de Trento (1546). Señala que estaban en la Septuaginta, que varios padres de la iglesia los citaron y que los concilios africanos de fines del siglo IV los incluyeron en sus listas.' },
          b: { n: 'No son canónicos', t: 'Las iglesias evangélicas, siguiendo el canon hebreo, no los consideran Escritura. Israel, a quien fueron confiadas las palabras de Dios (Ro 3:2), no los aceptó; Jesús reconoció la Ley, los Profetas y los Escritos (Lc 24:44); el Nuevo Testamento nunca los cita como Escritura; y 1 Macabeos reconoce que en su tiempo no había profetas (1 Mac 9:27).' },
          c: 'Este recurso sigue el canon hebreo. Jerónimo, el traductor de la Vulgata latina hacia el año 400, ya los distinguía y decía que podían leerse para edificación, pero no para fundar doctrina. La primera Biblia completa en castellano de la Reforma, de Casiodoro de Reina (1569), todavía los incluía; la revisión de Cipriano de Valera (1602) los agrupó en una sección aparte, entre los dos testamentos, por ese mismo motivo.'
        } },
        { h: '¿Y la cita de Enoc en Judas?' },
        'Judas cita una profecía de Enoc (Jud 14-15) que aparece en un libro judío llamado 1 Enoc, que tampoco forma parte del canon. Citar una frase verdadera de un libro no convierte al libro en Escritura: Pablo cita a poetas griegos (Hch 17:28; Tit 1:12) sin que nadie piense que sus obras sean inspiradas. Lo inspirado es lo que Judas escribe, que incluye esa frase verdadera.',
        'Los apócrifos tienen valor histórico. 1 Macabeos, por ejemplo, es la principal fuente sobre la fiesta de la Dedicación que Jesús celebró en Jerusalén (Jn 10:22). Se pueden leer como historia o literatura del período entre los testamentos, como se usan en el recurso El imperio griego, pero no como Palabra de Dios.',
        { ir: { t: 'Recorrer los apócrifos y los pseudoepígrafos uno por uno', a: '../../libros-apocrifos/#que/1' } },
        { ejercicio: {
          pregunta: '¿Cuál de estos argumentos apoya que los apócrifos no son parte del canon?',
          opciones: [
            { t: 'Que fueron escritos en griego y no en hebreo.', ok: false, por_que: 'El idioma no decide la inspiración: todo el Nuevo Testamento está escrito en griego. Además, algunos apócrifos se escribieron en hebreo.' },
            { t: 'Que Israel no los recibió como Escritura y el Nuevo Testamento nunca los cita como tal.', ok: true, por_que: 'Son dos de los argumentos principales: a Israel se le confió la palabra de Dios, y ni Jesús ni los apóstoles citan esos libros como Escritura.' },
            { t: 'Que contienen errores de copia en los manuscritos.', ok: false, por_que: 'Todos los libros, también los canónicos, tienen variantes en sus copias. Eso no define el canon.' }
          ],
          explicacion: 'El canon del Antiguo Testamento que siguen las iglesias evangélicas es el que Israel recibió y Jesús confirmó.'
        } }
      ],
      pensar: 'Leer un libro útil y leer la Palabra de Dios no es lo mismo. ¿Qué lugar tienen en tu vida los libros cristianos frente a la propia Biblia?'
    },
    {
      id: 'nuevo', n: 'El canon del Nuevo Testamento', ref: 'Colosenses 4:16; 1 Tesalonicenses 5:27; 2 Pedro 3:15-16', fecha: [50, 397],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se reconoció el canon del Nuevo Testamento',
          cab: ['Fecha', 'Hecho'],
          filas: [
            ['50–95 d.C.', 'Se escriben los 27 libros; las cartas se leen y circulan entre iglesias (Col 4:16; 1 Ts 5:27)'],
            ['Hacia 65 d.C.', 'Pedro cuenta las cartas de Pablo entre las Escrituras (2 P 3:15-16)'],
            ['Hacia 110 d.C.', 'Ignacio de Antioquía y Policarpo de Esmirna citan con autoridad evangelios y cartas'],
            ['Hacia 140 d.C.', 'Marción propone su propio canon: rechaza el Antiguo Testamento y recorta Lucas y diez cartas de Pablo'],
            ['Hacia 180 d.C.', 'Ireneo de Lyon defiende que hay cuatro evangelios, ni más ni menos'],
            ['Fines del siglo II', 'El Canon Muratoriano, la lista más antigua conocida, incluye la mayoría de los libros actuales'],
            ['Hacia 325 d.C.', 'Eusebio de Cesarea clasifica los libros en reconocidos, discutidos y rechazados'],
            ['367 d.C.', 'Atanasio de Alejandría, en su carta de Pascua, enumera exactamente los 27 libros'],
            ['393 y 397 d.C.', 'Los sínodos de Hipona y Cartago confirman la misma lista de 27']
          ],
          nota: 'Fechas aproximadas. Ningún concilio de toda la iglesia impuso el canon: las listas confirmaron lo que las iglesias ya usaban.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/carta-leida.webp', alt: 'Una pequeña congregación del siglo I reunida en el patio de una casa escucha a un hombre que lee en voz alta una carta en pergamino recién llegada', pie: 'Las cartas de los apóstoles se leían en voz alta en las iglesias (Colosenses 4:16).', origen: 'ia' }
      ],
      texto: [
        'Los libros del Nuevo Testamento se escribieron en unos cincuenta años, aproximadamente entre el 50 y el 95 d.C. Desde el principio, las iglesias los leían en sus reuniones. Pablo pide que su carta a los colosenses se lea también en Laodicea (Col 4:16), y a los tesalonicenses les dice: «Os conjuro por el Señor, que esta carta se lea a todos los santos hermanos» (1 Ts 5:27). Las cartas se copiaban y pasaban de una iglesia a otra. Pronto se formaron colecciones de las cartas de Pablo y de los cuatro evangelios.',
        'Los primeros líderes después de los apóstoles, como Ignacio de Antioquía y Policarpo, citaban los evangelios y las cartas con autoridad, y distinguían su propia enseñanza de la de los apóstoles. No se sentían autores de Escritura; se sentían discípulos de ella.',
        { h: 'Las amenazas que obligaron a definir' },
        'Hacia el año 140, un hombre llamado Marción enseñó que el Dios del Antiguo Testamento era distinto del Padre de Jesús. Armó su propia Biblia: rechazó todo el Antiguo Testamento, aceptó solo una versión recortada de Lucas y diez cartas de Pablo. Al mismo tiempo circulaban escritos con nombres de apóstoles que enseñaban doctrinas extrañas. Frente a eso, las iglesias tuvieron que decir con claridad cuáles eran los libros recibidos de los apóstoles. Ireneo defendió los cuatro evangelios, y la lista más antigua conservada, el llamado Canon Muratoriano, recoge la mayoría de los libros que hoy tenemos.',
        'Durante dos siglos más hubo dudas sobre algunos libros pequeños, que se estudian en otra estación. Pero el núcleo nunca estuvo en discusión: los cuatro evangelios, Hechos, las trece cartas de Pablo, 1 Pedro y 1 Juan. En el año 367, Atanasio, obispo de Alejandría, enumeró exactamente los 27 libros que tenemos, y los sínodos de Hipona (393) y Cartago (397) confirmaron esa lista. Desde entonces, las iglesias de Oriente y Occidente coinciden en el canon del Nuevo Testamento.',
        { ejercicio: {
          pregunta: '¿Qué papel tuvieron los concilios del siglo IV en la formación del canon?',
          opciones: [
            { t: 'Eligieron por votación qué libros serían Palabra de Dios.', ok: false, por_que: 'Los libros se leían como Escritura desde el siglo I. Los sínodos confirmaron una lista que las iglesias ya usaban; no crearon su autoridad.' },
            { t: 'Confirmaron públicamente los libros que las iglesias ya recibían como apostólicos.', ok: true, por_que: 'Hipona y Cartago eran sínodos regionales que reconocieron un uso que venía de los apóstoles.' },
            { t: 'Agregaron los evangelios, que antes no se consideraban Escritura.', ok: false, por_que: 'Los cuatro evangelios estaban reconocidos desde el siglo II, como muestra Ireneo.' }
          ],
          explicacion: 'El canon del Nuevo Testamento no fue una decisión tardía, sino el reconocimiento de lo que las iglesias recibieron de los apóstoles desde el comienzo.'
        } }
      ],
      pensar: 'Las primeras iglesias leían juntas las cartas de los apóstoles en voz alta. ¿Qué lugar ocupa la lectura pública de la Escritura en tu congregación y en tu familia?'
    },
    {
      id: 'criterios', n: 'Cómo se reconocieron los libros', ref: 'Efesios 2:20; Gálatas 1:8-9; 1 Juan 4:1-3; Juan 10:27', fecha: [150, 397],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las preguntas que hizo la iglesia',
          cab: ['Criterio', 'Pregunta', 'Base bíblica'],
          filas: [
            ['Apostolicidad', '¿Lo escribió un apóstol o alguien cercano a un apóstol, con su respaldo?', 'Ef 2:20; Jud 17'],
            ['Ortodoxia', '¿Concuerda con el evangelio recibido y con la Escritura anterior?', 'Gá 1:8-9; 1 Jn 4:1-3'],
            ['Antigüedad', '¿Viene de la época de los apóstoles?', '1 Jn 1:1-3'],
            ['Uso en las iglesias', '¿Lo leían como Escritura las iglesias de distintos lugares desde el principio?', 'Col 4:16; 2 P 3:16'],
            ['Testimonio del Espíritu', '¿Se reconoce en él la voz del Señor?', 'Jn 10:27; 1 Ts 2:13']
          ],
          nota: 'Marcos escribió con el respaldo de Pedro, y Lucas con el de Pablo, según el testimonio de los primeros siglos. Hebreos se recibió por su contenido y su antigüedad, aunque no se sabe con certeza quién la escribió.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mas si aun nosotros, o un ángel del cielo, os anunciare otro evangelio diferente del que os hemos anunciado, sea anatema. Como antes hemos dicho, también ahora lo repito: Si alguno os predica diferente evangelio del que habéis recibido, sea anatema.', ref: 'Gálatas 1:8-9' }
      ],
      texto: [
        'Las iglesias antiguas no tenían una lista oficial con la cual comparar, pero sí tenían preguntas claras para reconocer cuáles escritos venían de Dios. La tabla las resume. No eran requisitos que un libro debía cumplir para volverse Escritura, sino señales de que ya lo era.',
        'La primera pregunta era si el libro venía de los apóstoles. Pablo dice que la iglesia está edificada «sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo» (Ef 2:20). Los apóstoles fueron testigos de Cristo, comisionados por Él. Un libro escrito por un apóstol, como Juan o Pablo, o por alguien que trabajó junto a uno de ellos con su respaldo, como Marcos con Pedro o Lucas con Pablo, tenía autoridad apostólica. Por eso los falsificadores ponían nombres de apóstoles a sus escritos, y Pablo ya tuvo que advertir sobre cartas falsas con su nombre (2 Ts 2:2; 3:17).',
        { h: 'La regla de la fe' },
        'La segunda pregunta era si el libro enseñaba el mismo evangelio. Pablo había dicho: si aun un ángel del cielo anuncia otro evangelio, «sea anatema» (Gá 1:8). Y Juan dio una prueba concreta: todo espíritu que no confiesa que Jesucristo ha venido en carne no es de Dios (1 Jn 4:2-3). Un escrito que negaba la verdadera humanidad de Cristo, o que contradecía las Escrituras ya recibidas, quedaba fuera, por mucho que llevara el nombre de un apóstol.',
        'También importaba la antigüedad, porque un libro escrito un siglo después no podía ser testigo directo, y el uso extendido: un libro que solo leía una secta en una región era sospechoso, mientras que uno que las iglesias de Roma, Asia, Siria y Egipto leían desde el principio mostraba que se había recibido de los apóstoles. Por encima de todo, Jesús había dicho: «Mis ovejas oyen mi voz» (Jn 10:27). Guiadas por el Espíritu, las iglesias reconocieron en esos libros la voz de su Pastor.',
        { ejercicio: {
          pregunta: 'Un escrito del siglo II lleva el nombre de un apóstol, pero enseña que Jesús solo parecía tener cuerpo. ¿Qué criterio lo excluye con más claridad?',
          opciones: [
            { t: 'La ortodoxia: contradice el evangelio de que Jesucristo vino en carne.', ok: true, por_que: 'Juan dice que el espíritu que no confiesa a Jesucristo venido en carne no es de Dios. Ningún nombre de apóstol puede cubrir esa enseñanza.' },
            { t: 'El uso: no se lee en ninguna iglesia de habla latina.', ok: false, por_que: 'El uso importa, pero aquí el problema es más grave: el contenido contradice el evangelio.' },
            { t: 'Ninguno, porque lleva el nombre de un apóstol.', ok: false, por_que: 'Un nombre puede falsificarse. Pablo mismo advirtió sobre cartas falsas que circulaban con su nombre.' }
          ],
          explicacion: 'Los criterios funcionan juntos, pero el contenido es decisivo: lo que contradice el evangelio apostólico no puede venir de Dios.'
        } }
      ],
      pensar: '«Mis ovejas oyen mi voz» (Jn 10:27). ¿Cómo distingues hoy la voz del Señor entre tantas voces que dicen hablar en su nombre?'
    },
    {
      id: 'discutidos', n: 'Los libros discutidos', ref: 'Hebreos 1:1-2; Santiago 2:14-26; 2 Pedro 3:15-16; Apocalipsis 1:1-3', fecha: [200, 397],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Siete libros que tardaron en reconocerse en todas partes',
          cab: ['Libro', 'Por qué se dudó', 'Por qué se recibió'],
          filas: [
            ['Hebreos', 'Su autor no se nombra; en Occidente se dudaba que fuera de Pablo', 'Antigüedad, contenido apostólico y uso constante en Oriente'],
            ['Santiago', 'Poco conocida fuera de Palestina; parecía chocar con Pablo sobre la fe y las obras', 'Escrita por el hermano del Señor, líder de Jerusalén (Hch 15:13; Gá 1:19); concuerda con Pablo al leerla bien'],
            ['2 Pedro', 'Estilo distinto al de 1 Pedro; poco citada al principio', 'Se presenta como de Pedro (2 P 1:16-18); el estilo puede deberse a otro secretario'],
            ['2 y 3 Juan', 'Muy breves y personales; el autor se llama solo «el anciano»', 'Mismo lenguaje y doctrina que 1 Juan'],
            ['Judas', 'Breve; cita un libro no canónico (Jud 14-15)', 'Escrita por otro hermano del Señor; contenido apostólico'],
            ['Apocalipsis', 'Recibido desde el siglo II, pero en el siglo III algunos en Oriente dudaron por el uso que hacían de él ciertos grupos', 'Testimonio temprano de su origen apostólico (Justino, Ireneo)']
          ],
          nota: 'En la antigüedad se llamó antilegomena («discutidos») a estos libros. La duda no fue sobre su contenido, sino sobre su origen o su difusión.'
        } }
      ],
      texto: [
        'A veces se dice que el canon fue un proceso lleno de disputas. En realidad, la gran mayoría del Nuevo Testamento fue recibida sin discusión desde el comienzo. Eusebio de Cesarea, que escribió una historia de la iglesia hacia el año 325, distinguió entre los libros reconocidos por todos, los discutidos por algunos y los rechazados. En el grupo de los discutidos puso unos pocos libros breves que no se conocían igual en todas las regiones.',
        'La tabla muestra esos libros. Hebreos no nombra a su autor, y en las iglesias de Occidente se dudaba que fuera de Pablo; en Oriente se leía desde el principio. Su contenido, profundamente apostólico, terminó por convencer a todos. Santiago era poco conocida fuera de Palestina, y siglos más tarde Martín Lutero tuvo dudas porque le parecía contradecir a Pablo. Pero leída en su contexto, Santiago no niega la justificación por la fe: dice que la fe verdadera se demuestra con obras (Stg 2:18), lo mismo que Pablo cuando habla de «la fe que obra por el amor» (Gá 5:6).',
        { h: 'Libros pequeños, distancias grandes' },
        'Las cartas breves, como 2 y 3 Juan o Judas, se copiaban menos y llegaban más lentamente a las iglesias lejanas. No es extraño que una carta personal de una página tardara en conocerse en Roma o en Egipto. La segunda carta de Pedro tiene un estilo griego distinto de la primera, lo que hizo dudar a algunos; pero Pedro dice que la primera la escribió «por conducto de Silvano» (1 P 5:12), y un secretario distinto puede explicar la diferencia.',
        'Apocalipsis fue recibido como libro del apóstol Juan desde muy temprano, por Justino e Ireneo en el siglo II. Las dudas surgieron después en parte de Oriente, en reacción al uso que hacían de él algunos grupos. Con el tiempo, todas las iglesias lo reconocieron. Que estas dudas existieran muestra que las iglesias no aceptaban cualquier libro con ligereza: examinaron con cuidado, y al final llegaron a la misma lista.',
        { ejercicio: {
          pregunta: '¿Qué muestra que algunos libros fueran discutidos antes de recibirse?',
          opciones: [
            { t: 'Que el canon se decidió por intereses políticos.', ok: false, por_que: 'Las dudas eran sobre el origen o la difusión de libros pequeños, y se resolvieron por el examen de su contenido y su historia, no por presiones políticas.' },
            { t: 'Que las iglesias examinaron con cuidado y no aceptaron libros a la ligera.', ok: true, por_que: 'La prudencia de las iglesias da más confianza en el resultado: los libros se recibieron después de ser probados.' },
            { t: 'Que esos siete libros tienen menos autoridad que el resto.', ok: false, por_que: 'Una vez reconocidos, son tan Escritura como los demás. La duda fue sobre su origen, no una rebaja de su inspiración.' }
          ],
          explicacion: 'La discusión sobre unos pocos libros breves no debilita el canon; muestra el cuidado con que la iglesia lo reconoció.'
        } }
      ],
      pensar: 'Santiago insiste en que la fe se muestra con obras. ¿Qué obras concretas muestran hoy la fe que dices tener?'
    },
    {
      id: 'rechazados', n: 'Los escritos que quedaron fuera', ref: '1 Juan 4:1-3; 2 Tesalonicenses 2:2; Gálatas 1:6-9', fecha: [100, 300],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Escritos antiguos que no entraron en el canon',
          cab: ['Escrito', 'Qué es', 'Por qué quedó fuera'],
          filas: [
            ['Didajé', 'Manual de enseñanza y orden para iglesias, de fines del siglo I o principios del II', 'Útil y ortodoxo, pero no apostólico'],
            ['1 Clemente', 'Carta de la iglesia de Roma a Corinto, hacia el 96 d.C.', 'Valiosa; su autor se distingue de los apóstoles'],
            ['Pastor de Hermas', 'Visiones y exhortaciones, escrito en Roma en el siglo II', 'El Canon Muratoriano dice que es reciente y no debe leerse como Escritura'],
            ['Evangelio de Tomás', '114 dichos atribuidos a Jesús, con ideas gnósticas; siglo II', 'Tardío, sin uso en las iglesias y con enseñanzas contrarias al evangelio'],
            ['Evangelio de Pedro', 'Relato de la pasión del siglo II', 'Rechazado hacia el 200 por presentar a un Cristo que no sufre de verdad'],
            ['Evangelio de Judas', 'Texto gnóstico del siglo II que presenta a Judas como héroe', 'Contradice el evangelio y fue condenado por Ireneo hacia el 180']
          ],
          nota: 'Los tres primeros son escritos cristianos respetables que se leen con provecho como historia de la iglesia. Los otros tres son falsificaciones con nombres de apóstoles.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios; porque muchos falsos profetas han salido por el mundo. En esto conoced el Espíritu de Dios: Todo espíritu que confiesa que Jesucristo ha venido en carne, es de Dios; y todo espíritu que no confiesa que Jesucristo ha venido en carne, no es de Dios; y este es el espíritu del anticristo, el cual vosotros habéis oído que viene, y que ahora ya está en el mundo.', ref: '1 Juan 4:1-3' }
      ],
      texto: [
        'Cada cierto tiempo aparece un documental o una noticia que habla de «evangelios perdidos» o de libros que la iglesia habría escondido. Vale la pena saber qué son esos escritos y por qué no forman parte de la Biblia. La tabla presenta seis de los más conocidos, que son de dos clases muy distintas.',
        'Algunos son escritos cristianos antiguos, respetables y útiles, como la Didajé, la primera carta de Clemente o el Pastor de Hermas. Algunas iglesias los leían con aprecio, y uno o dos aparecen en manuscritos antiguos junto a los libros del Nuevo Testamento. Pero sus propios autores no se presentaban como apóstoles, y las iglesias, con el tiempo, los distinguieron claramente de la Escritura. El Canon Muratoriano dice del Pastor de Hermas que se escribió hacía poco, en tiempos del autor de la lista, y que podía leerse en privado pero no en la iglesia como libro de los profetas o de los apóstoles.',
        { h: 'Los evangelios falsos' },
        'Otros escritos son de otra clase. El Evangelio de Tomás, el de Pedro o el de Judas fueron escritos en el siglo II o después, mucho tiempo después de los apóstoles, por grupos que se llamaban gnósticos. Enseñaban que la salvación viene de un conocimiento secreto, que la materia es mala y que Cristo no tuvo un cuerpo verdadero o no sufrió de verdad. Les ponían nombres de apóstoles para darse autoridad. Los primeros cristianos los rechazaron con la regla que Juan había dado: «todo espíritu que no confiesa que Jesucristo ha venido en carne, no es de Dios» (1 Jn 4:3).',
        'La iglesia no escondió estos libros: los conoció, los examinó y los rechazó, y escritores como Ireneo explicaron públicamente por qué. Muchos de ellos se conocieron mejor en el siglo XX gracias a hallazgos en Egipto, como la biblioteca de Nag Hammadi (1945). Su lectura confirma lo que la iglesia antigua dijo: son tardíos y enseñan otro evangelio. Pablo ya había advertido sobre quienes querían pervertir el evangelio de Cristo (Gá 1:7).',
        { ir: { t: 'Ver los apócrifos del Nuevo Testamento', a: '../../libros-apocrifos/#nt/1' } },
        { ejercicio: {
          pregunta: 'Un amigo te dice que el Evangelio de Tomás fue escondido por la iglesia porque mostraba al verdadero Jesús. ¿Qué respuesta es más fiel a la historia?',
          opciones: [
            { t: 'Que tiene razón, y que conviene leerlo junto a los cuatro evangelios.', ok: false, por_que: 'Es un escrito del siglo II con ideas gnósticas, muy posterior a los testigos de Jesús y contrario al evangelio apostólico.' },
            { t: 'Que la iglesia lo conoció, lo examinó y lo rechazó porque es tardío y enseña otro evangelio.', ok: true, por_que: 'No fue escondido sino evaluado. Su fecha y su doctrina lo separan de los evangelios escritos por testigos o sus compañeros.' },
            { t: 'Que nunca existió y es un invento moderno.', ok: false, por_que: 'El escrito existe: se conoce un manuscrito completo en copto hallado en 1945 y fragmentos griegos más antiguos. Lo que se discute no es su existencia, sino su valor.' }
          ],
          explicacion: 'Responder con información verdadera, sin exagerar, es parte de defender la fe con mansedumbre y respeto (1 Pedro 3:15).'
        } }
      ],
      pensar: 'Pedro manda estar siempre preparados para presentar defensa de la esperanza que hay en nosotros (1 P 3:15). ¿Te sientes preparado para responder con calma cuando alguien cuestiona la Biblia?'
    },
    {
      id: 'cerrado', n: 'Un canon cerrado y un Espíritu que habla', ref: 'Judas 3; Apocalipsis 22:18-19; 1 Corintios 14:29-33; Hechos 2:16-18', fecha: 95,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Yo testifico a todo aquel que oye las palabras de la profecía de este libro: Si alguno añadiere a estas cosas, Dios traerá sobre él las plagas que están escritas en este libro. Y si alguno quitare de las palabras del libro de esta profecía, Dios quitará su parte del libro de la vida, y de la santa ciudad y de las cosas que están escritas en este libro.', ref: 'Apocalipsis 22:18-19' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Escritura y profecía en la iglesia',
          cab: ['', 'La Escritura', 'La profecía en la iglesia hoy'],
          filas: [
            ['Origen', 'Inspirada por Dios (2 Ti 3:16)', 'Don del Espíritu (1 Co 12:10)'],
            ['Alcance', 'Para toda la iglesia de todos los tiempos', 'Para una congregación o persona, en un momento'],
            ['Autoridad', 'Final: juzga todo lo demás', 'Se juzga y se examina (1 Co 14:29; 1 Ts 5:21)'],
            ['Contenido', 'Revela la fe dada una vez (Jud 3)', 'Edifica, exhorta y consuela (1 Co 14:3)'],
            ['Si contradice a la otra', 'Prevalece siempre', 'Se rechaza (Gá 1:8; Is 8:20)']
          ]
        } }
      ],
      texto: [
        'Si Dios habló por los profetas y los apóstoles, ¿puede seguir añadiendo libros a la Biblia? La respuesta de las iglesias cristianas ha sido unánime: no. El canon está cerrado. Dios habló su palabra final en el Hijo (He 1:2), los apóstoles transmitieron con autoridad esa palabra, y la iglesia está edificada sobre ese fundamento, que se pone una sola vez (Ef 2:20). Judas habla de «la fe que ha sido una vez dada a los santos» (Jud 3). Apocalipsis, el último libro escrito, termina con una advertencia contra quien añada o quite a sus palabras (Ap 22:18-19), como Moisés al comienzo (Dt 4:2).',
        'Esto descarta a cualquier grupo que presente un libro nuevo como revelación al mismo nivel de la Biblia, o una enseñanza nueva que la complete o la corrija. Ninguna visión, sueño o mensaje puede añadir una doctrina nueva a la fe.',
        { h: 'El Espíritu sigue hablando' },
        'Un canon cerrado no significa un cielo cerrado. El día de Pentecostés, Pedro anunció que se cumplía la profecía de Joel: hijos e hijas profetizarían, jóvenes y ancianos tendrían visiones y sueños (Hch 2:16-17), y dijo que la promesa es para todos los que el Señor llamare (Hch 2:39). Pablo exhorta: «No apaguéis al Espíritu. No menospreciéis las profecías» (1 Ts 5:19-20).',
        { posturas: {
          titulo: '¿Siguen vigentes los dones de profecía?',
          a: { n: 'Los dones cesaron', t: 'La postura cesacionista sostiene que la profecía, las lenguas y los dones de sanidad fueron señales para fundar la iglesia y cesaron con los apóstoles. Muchos entienden que «lo perfecto» de 1 Corintios 13:10 es el canon completo.' },
          b: { n: 'Los dones continúan', t: 'La postura continuista sostiene que los dones siguen hasta la venida de Cristo. «Lo perfecto» es el día en que veremos «cara a cara» (1 Co 13:10-12), y la iglesia de Corinto esperaba la manifestación del Señor sin que le faltara ningún don (1 Co 1:7).' },
          c: 'Este recurso sigue la segunda postura. La profecía de hoy es real, pero distinta de la Escritura: edifica, exhorta y consuela (1 Co 14:3), se somete a examen (1 Co 14:29) y nunca tiene la autoridad de la Biblia ni añade doctrina. Toda palabra se mide con la Escritura.'
        } },
        'Así, el creyente pentecostal vive dos convicciones a la vez. Busca los dones del Espíritu con fervor, y al mismo tiempo los somete a la Palabra con humildad. Isaías lo resumió: «¡A la ley y al testimonio! Si no dijeren conforme a esto, es porque no les ha amanecido» (Is 8:20).',
        { ejercicio: {
          pregunta: 'En una reunión, alguien comparte una palabra profética que anuncia una enseñanza que no aparece en la Biblia. ¿Qué corresponde hacer según el Nuevo Testamento?',
          opciones: [
            { t: 'Aceptarla, porque el Espíritu puede revelar doctrinas nuevas.', ok: false, por_que: 'La fe fue dada una vez a los santos. El Espíritu no contradice ni completa lo que inspiró en la Escritura.' },
            { t: 'Rechazar toda profecía, porque el canon está cerrado.', ok: false, por_que: 'El Nuevo Testamento manda no menospreciar las profecías. El canon cerrado no apaga los dones; los ordena.' },
            { t: 'Examinarla con la Escritura, y no recibirla como doctrina si no concuerda con ella.', ok: true, por_que: 'Es lo que piden Pablo e Isaías: los demás juzguen, examinadlo todo, a la ley y al testimonio.' }
          ],
          explicacion: 'Los dones edifican a la iglesia cuando se ejercen bajo la autoridad de la Escritura.'
        } }
      ],
      pensar: '«Examinadlo todo; retened lo bueno» (1 Ts 5:21). ¿Cómo puedes ser, a la vez, abierto a lo que el Espíritu hace hoy y firme en lo que ya dijo en su Palabra?'
    }
  ];

  window.__PALABRA.canon = canon;
})();
/* La Palabra de Dios · ruta IV. Autoridad y suficiencia, y datos de las rutas (ver encabezado en parte1.js) */
(() => {
  const autoridad = [
    {
      id: 'autoridad', n: 'La autoridad de la Escritura', ref: 'Hechos 17:11; Isaías 8:20; Mateo 22:29; 1 Corintios 4:6',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../interpretar-biblia/img/bereanos.webp', alt: 'Judíos de Berea reunidos en una sinagoga alrededor de una mesa con rollos abiertos, comparando pasajes', pie: 'Los de Berea escudriñaban cada día las Escrituras (Hechos 17:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Inmediatamente, los hermanos enviaron de noche a Pablo y a Silas hasta Berea. Y ellos, habiendo llegado, entraron en la sinagoga de los judíos. Y éstos eran más nobles que los que estaban en Tesalónica, pues recibieron la palabra con toda solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así. Así que creyeron muchos de ellos, y mujeres griegas de distinción, y no pocos hombres.', ref: 'Hechos 17:10-12' }
      ],
      texto: [
        'Si la Biblia es Palabra de Dios, tiene la autoridad de Dios. Lo que ella enseña, Dios lo enseña; lo que ella manda, Dios lo manda. Por eso la Escritura es la autoridad final del creyente y de la iglesia en todo lo que tiene que ver con la fe y la vida. Ninguna persona, institución, experiencia o costumbre está por encima de ella.',
        'Lucas cuenta que, cuando Pablo predicó en Berea, los judíos de esa ciudad «eran más nobles que los que estaban en Tesalónica, pues recibieron la palabra con toda solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así» (Hch 17:11). Recibieron el mensaje con entusiasmo, pero no lo creyeron solo porque lo decía un apóstol: lo compararon con la Escritura. Lucas no los critica por desconfiados; los llama nobles. El resultado fue que muchos creyeron (Hch 17:12).',
        { h: 'La medida de toda enseñanza' },
        'Isaías ya había dado el criterio: «¡A la ley y al testimonio! Si no dijeren conforme a esto, es porque no les ha amanecido» (Is 8:20). Pablo enseñó a los corintios «a no pensar más de lo que está escrito» (1 Co 4:6). Y Jesús explicó el error de los saduceos con una frase que sirve para muchos errores: «Erráis, ignorando las Escrituras y el poder de Dios» (Mt 22:29). La ignorancia de la Escritura no es un detalle; es la raíz de muchas desviaciones.',
        'Esto vale también para los predicadores y los líderes. Un buen pastor no pide que se le crea porque es pastor, sino que abre la Biblia y muestra lo que dice. Pablo se negaba a adulterar la palabra de Dios (2 Co 4:2), y pidió a Timoteo: «que prediques la palabra» (2 Ti 4:2). Una iglesia sana es aquella en que el púlpito y los bancos están bajo la misma autoridad.',
        { ejercicio: {
          pregunta: '¿Por qué Lucas llama «nobles» a los de Berea?',
          opciones: [
            { t: 'Porque eran de familias ricas e influyentes de la ciudad.', ok: false, por_que: 'En el contexto, la nobleza se refiere a su actitud ante la palabra, no a su posición social.' },
            { t: 'Porque recibieron la palabra con interés y la comprobaron con las Escrituras.', ok: true, por_que: 'Lucas une las dos cosas: recibieron con toda solicitud y escudriñaban cada día las Escrituras.' },
            { t: 'Porque aceptaron todo lo que Pablo decía sin hacer preguntas.', ok: false, por_que: 'Hicieron lo contrario: examinaron si lo que Pablo decía era así, y por eso Lucas los elogia.' }
          ],
          explicacion: 'Recibir con gozo y examinar con la Escritura no se oponen: son las dos marcas de quien reconoce la autoridad de la Palabra.'
        } }
      ],
      pensar: 'Los de Berea comprobaban aun lo que predicaba un apóstol. ¿Tienes el hábito de abrir la Biblia para ver si lo que escuchas «es así»?'
    },
    {
      id: 'tradicion', n: 'La Escritura y la tradición', ref: 'Marcos 7:6-13; 2 Tesalonicenses 2:15; 1 Corintios 11:2',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Respondiendo él, les dijo: Hipócritas, bien profetizó de vosotros Isaías, como está escrito: Este pueblo de labios me honra, Mas su corazón está lejos de mí. Pues en vano me honran, Enseñando como doctrinas mandamientos de hombres. Porque dejando el mandamiento de Dios, os aferráis a la tradición de los hombres: los lavamientos de los jarros y de los vasos de beber; y hacéis otras muchas cosas semejantes. Les decía también: Bien invalidáis el mandamiento de Dios para guardar vuestra tradición.', ref: 'Marcos 7:6-9' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres tipos de tradición',
          cab: ['Tipo', 'Ejemplo', 'Qué autoridad tiene'],
          filas: [
            ['La enseñanza de los apóstoles', 'Lo que Pablo entregó «por palabra, o por carta» (2 Ts 2:15)', 'Autoridad de Dios; hoy la tenemos por escrito en el Nuevo Testamento'],
            ['Costumbres de la iglesia', 'Horarios de culto, himnos, formas de organizar la congregación', 'Útiles y respetables, siempre que no contradigan la Escritura'],
            ['Tradiciones que anulan la Palabra', 'El «Corbán» que libraba de ayudar a los padres (Mr 7:11-13)', 'Ninguna: Jesús las condena']
          ]
        } }
      ],
      texto: [
        'La palabra «tradición» significa «lo que se entrega». En el Nuevo Testamento tiene dos sentidos muy distintos. Por un lado, Pablo alaba a los corintios porque retienen «las instrucciones tal como os las entregué» (1 Co 11:2), y pide a los tesalonicenses que retengan la doctrina que aprendieron, «sea por palabra, o por carta nuestra» (2 Ts 2:15). Esa tradición es la enseñanza apostólica, que hoy tenemos en el Nuevo Testamento.',
        'Por otro lado, Jesús denunció a los fariseos porque, «dejando el mandamiento de Dios, os aferráis a la tradición de los hombres» (Mr 7:8). Su ejemplo es claro: con la práctica del Corbán, un hijo podía declarar sus bienes ofrenda para Dios y así quedar libre de ayudar a sus padres. Una costumbre religiosa terminaba invalidando el quinto mandamiento. Jesús concluye que así invalidaban «la palabra de Dios con vuestra tradición» (Mr 7:13).',
        { posturas: {
          titulo: '¿Qué relación tienen la Escritura y la tradición?',
          a: { n: 'Escritura y Tradición', t: 'La Iglesia católica enseña que la revelación se transmite por dos vías, la Escritura y la Tradición, interpretadas con autoridad por el magisterio de la Iglesia. Cita 2 Tesalonicenses 2:15 como apoyo de una tradición oral junto a la escrita.' },
          b: { n: 'Solo la Escritura', t: 'Las iglesias evangélicas sostienen que la Escritura es la única regla infalible de fe. La enseñanza oral de los apóstoles coincidía con la escrita, y lo que necesitamos de ella quedó en el Nuevo Testamento. Las tradiciones posteriores pueden ayudar, pero se juzgan con la Escritura (Mr 7:13; Is 8:20).' },
          c: 'Este recurso sigue la segunda postura. «Solo la Escritura» no significa despreciar la historia de la iglesia, los credos o los buenos maestros: significa que todo eso está bajo la Biblia y no a su lado.'
        } },
        'Cada congregación tiene sus costumbres, y muchas son buenas: ordenan el culto, transmiten la fe a los niños y dan identidad. Las iglesias pentecostales tienen su propia historia de himnos, vigilias y formas de culto. El peligro aparece cuando una costumbre se vuelve intocable y se exige como si fuera mandamiento de Dios. Entonces se cumple lo que Jesús citó de Isaías: «Enseñando como doctrinas mandamientos de hombres» (Mr 7:7).',
        { ejercicio: {
          pregunta: '¿Qué condena Jesús en Marcos 7?',
          opciones: [
            { t: 'Toda costumbre religiosa que no esté escrita en la Biblia.', ok: false, por_que: 'Jesús mismo participaba de costumbres como la sinagoga, que no estaba mandada en la ley. Lo que condena es otra cosa.' },
            { t: 'Las tradiciones humanas que ocupan el lugar del mandamiento de Dios y lo anulan.', ok: true, por_que: 'Su ejemplo, el Corbán, muestra una costumbre que dejaba sin efecto el mandamiento de honrar a los padres.' },
            { t: 'La enseñanza oral, porque solo vale lo que está escrito.', ok: false, por_que: 'Los apóstoles enseñaban también de palabra. El problema no es lo oral, sino lo humano que reemplaza lo divino.' }
          ],
          explicacion: 'Las costumbres pueden servir a la fe, pero nunca pueden mandar más que la Palabra ni contradecirla.'
        } }
      ],
      pensar: '¿Hay alguna costumbre en tu vida o en tu iglesia que se trate como mandamiento de Dios sin serlo? ¿Y hay algún mandamiento de Dios que se haya dejado de lado por costumbre?'
    },
    {
      id: 'experiencia', n: 'La Escritura y la experiencia espiritual', ref: 'Hechos 2:14-21; 1 Tesalonicenses 5:19-21; 1 Juan 4:1; Gálatas 1:8',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces Pedro, poniéndose en pie con los once, alzó la voz y les habló diciendo: Varones judíos, y todos los que habitáis en Jerusalén, esto os sea notorio, y oíd mis palabras. Porque éstos no están ebrios, como vosotros suponéis, puesto que es la hora tercera del día. Mas esto es lo dicho por el profeta Joel: Y en los postreros días, dice Dios, Derramaré de mi Espíritu sobre toda carne, Y vuestros hijos y vuestras hijas profetizarán; Vuestros jóvenes verán visiones, Y vuestros ancianos soñarán sueños; Y de cierto sobre mis siervos y sobre mis siervas en aquellos días Derramaré de mi Espíritu, y profetizarán.', ref: 'Hechos 2:14-18' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-experiencia.svg', alt: 'Esquema con la Escritura como norma en la base y tres preguntas para examinar una experiencia: si concuerda con lo que la Biblia enseña, si glorifica a Cristo y si produce el fruto del Espíritu', pie: 'Tres preguntas para examinar una experiencia a la luz de la Escritura.', origen: 'esquema' }
      ],
      texto: [
        'El día de Pentecostés, ciento veinte discípulos fueron llenos del Espíritu Santo y hablaron en otras lenguas. La multitud estaba confundida, y algunos se burlaban. Entonces Pedro se puso de pie y explicó lo que estaba pasando. No pidió que le creyeran porque lo habían sentido. Abrió la Escritura: «Mas esto es lo dicho por el profeta Joel» (Hch 2:16). La experiencia fue real y poderosa, pero Pedro la interpretó con la Palabra, y la Palabra le dio su sentido.',
        'Ese es el modelo para la vida pentecostal. El Espíritu Santo sigue bautizando, llenando, guiando y dando dones a la iglesia. Pablo manda no apagar al Espíritu ni menospreciar las profecías, y en la misma frase añade: «Examinadlo todo; retened lo bueno» (1 Ts 5:21). Juan dice: «no creáis a todo espíritu, sino probad los espíritus si son de Dios» (1 Jn 4:1). Abrirse a la obra del Espíritu y examinarla con la Palabra no se oponen; las dos cosas vienen del mismo Espíritu, que inspiró la Escritura.',
        { h: 'Cómo examinar una experiencia' },
        'El esquema propone tres preguntas sencillas. Primera: ¿concuerda con lo que la Escritura enseña? Pablo dice que ni un ángel del cielo puede anunciar otro evangelio (Gá 1:8). Una experiencia, por intensa que sea, no puede enseñar algo contrario a la Biblia. Segunda: ¿glorifica a Cristo? Jesús dijo que el Espíritu «me glorificará» (Jn 16:14); lo que pone en el centro a una persona, un ministerio o una manifestación, en lugar de Cristo, debe revisarse. Tercera: ¿produce el fruto del Espíritu? Amor, gozo, paz, paciencia y dominio propio (Gá 5:22-23) acompañan la obra genuina de Dios, que no es de confusión sino de paz (1 Co 14:33).',
        'La experiencia es valiosa: el creyente no solo sabe cosas de Dios, sino que lo conoce y lo vive. Pero la experiencia es personal y cambiante, y el corazón humano puede engañarse (Jer 17:9). La Escritura, en cambio, es fija y pública. Por eso la experiencia se somete a la Palabra, y no la Palabra a la experiencia.',
        { ejercicio: {
          pregunta: 'Alguien dice: «Dios me mostró en un sueño que puedo dejar a mi esposa y casarme con otra persona». ¿Cómo se evalúa?',
          opciones: [
            { t: 'Si la persona es sincera y el sueño fue muy claro, hay que respetarlo como dirección de Dios.', ok: false, por_que: 'La sinceridad no garantiza el origen. Dios no guía a hacer lo que su Palabra prohíbe.' },
            { t: 'Se compara con la Escritura; como contradice lo que Dios enseña sobre el matrimonio, no viene de Él.', ok: true, por_que: 'Es la primera y decisiva prueba: el Espíritu no contradice lo que Él mismo inspiró.' },
            { t: 'No se puede evaluar, porque las experiencias espirituales son personales.', ok: false, por_que: 'El Nuevo Testamento manda examinarlo todo y probar los espíritus. Ninguna experiencia queda fuera del juicio de la Palabra.' }
          ],
          explicacion: 'Pedro interpretó Pentecostés con Joel. Toda experiencia se entiende y se juzga a la luz de la Escritura.'
        } }
      ],
      pensar: 'Pedro explicó Pentecostés con la Biblia abierta. ¿Puedes explicar con la Escritura las experiencias espirituales que has vivido?'
    },
    {
      id: 'iluminacion', n: 'El Espíritu ilumina la Palabra', ref: '1 Corintios 2:12-14; Lucas 24:45; Salmo 119:18; Efesios 1:17-18',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y nosotros no hemos recibido el espíritu del mundo, sino el Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido, lo cual también hablamos, no con palabras enseñadas por sabiduría humana, sino con las que enseña el Espíritu, acomodando lo espiritual a lo espiritual. Pero el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente.', ref: '1 Corintios 2:12-14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Revelación, inspiración e iluminación',
          cab: ['', 'Qué es', 'A quién', 'Cuándo'],
          filas: [
            ['Revelación', 'Dios da a conocer lo que no se podía saber', 'A profetas y apóstoles', 'Completa en Cristo y los apóstoles'],
            ['Inspiración', 'Dios guía la escritura sin error', 'A los autores bíblicos', 'Terminó con el canon'],
            ['Iluminación', 'El Espíritu abre el entendimiento para comprender y recibir lo escrito', 'A todo creyente', 'Hoy, cada vez que leemos']
          ],
          nota: 'La iluminación no añade nada al texto: hace ver lo que el texto ya dice.'
        } }
      ],
      texto: [
        'Hay una diferencia importante entre inspiración e iluminación. La inspiración fue la obra del Espíritu en los autores bíblicos, para que escribieran sin error; ya terminó. La iluminación es la obra del Espíritu en los lectores, para que entiendan, acepten y vivan lo que está escrito; sigue ocurriendo hoy, cada vez que alguien abre la Biblia con fe.',
        'Pablo explica por qué hace falta: «el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente» (1 Co 2:14). El problema no es solo intelectual. Una persona sin el Espíritu puede analizar la gramática de un pasaje y aun así no recibir su mensaje. Por eso los creyentes hemos recibido «el Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido» (1 Co 2:12).',
        { h: 'Una oración antes de leer' },
        'Los discípulos de Emaús conocían las Escrituras, pero no entendían. Jesús «les abrió el entendimiento, para que comprendiesen las Escrituras» (Lc 24:45). El salmista oraba: «Abre mis ojos, y miraré Las maravillas de tu ley» (Sal 119:18). Pablo pedía para los efesios espíritu de sabiduría y de revelación, «alumbrando los ojos de vuestro entendimiento» (Ef 1:18). Antes de estudiar, el creyente ora, porque depende del mismo Espíritu que inspiró el texto.',
        'La iluminación no reemplaza el estudio. Juan dice que la unción enseña a los creyentes (1 Jn 2:27), pero lo dice en una carta escrita para enseñarles. El Espíritu ilumina por medio del texto, no al margen de él; no da significados ocultos que contradigan la gramática o el contexto, sino que hace ver con claridad y recibir con fe lo que el texto dice. Por eso el estudio cuidadoso y la dependencia del Espíritu van juntos. El recurso Cómo interpretar la Biblia desarrolla el método de ese estudio.',
        { ejercicio: {
          pregunta: '¿Cuál es la diferencia entre inspiración e iluminación?',
          opciones: [
            { t: 'Son lo mismo: el Espíritu sigue inspirando a quien lee la Biblia.', ok: false, por_que: 'La inspiración produjo un texto sin error y terminó con el canon. Quien lee hoy no escribe Escritura.' },
            { t: 'La inspiración guió a los autores al escribir; la iluminación ayuda a los lectores a entender y recibir lo escrito.', ok: true, por_que: 'Es la distinción de la tabla: la primera actuó sobre los autores; la segunda actúa sobre todo creyente.' },
            { t: 'La iluminación permite descubrir significados ocultos distintos de lo que dice el texto.', ok: false, por_que: 'El Espíritu ilumina lo que el texto dice; no agrega sentidos contrarios a la gramática y el contexto.' }
          ],
          explicacion: 'El mismo Espíritu que inspiró la Escritura la ilumina hoy. Por eso se estudia con método y se lee con oración.'
        } },
        { ir: { t: 'Abrir Cómo interpretar la Biblia', a: '../../interpretar-biblia/' } }
      ],
      pensar: '«Abre mis ojos, y miraré Las maravillas de tu ley» (Sal 119:18). ¿Oras antes de leer la Biblia, o la abres como cualquier otro libro?'
    },
    {
      id: 'suficiencia', n: 'Suficiente para la fe y la vida', ref: 'Salmo 19:7-11; 2 Timoteo 3:15-17; 2 Pedro 1:3; Lucas 16:29-31',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La Palabra en el Salmo 19',
          cab: ['Nombre', 'Cualidad', 'Lo que hace'],
          filas: [
            ['La ley', 'Perfecta', 'Convierte el alma'],
            ['El testimonio', 'Fiel', 'Hace sabio al sencillo'],
            ['Los mandamientos', 'Rectos', 'Alegran el corazón'],
            ['El precepto', 'Puro', 'Alumbra los ojos'],
            ['El temor', 'Limpio', 'Permanece para siempre'],
            ['Los juicios', 'Verdad, todos justos', 'Son más deseables que el oro']
          ],
          nota: 'Salmo 19:7-10. Seis nombres para la misma Palabra, con seis cualidades y seis efectos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces le dijo: Te ruego, pues, padre, que le envíes a la casa de mi padre, porque tengo cinco hermanos, para que les testifique, a fin de que no vengan ellos también a este lugar de tormento. Y Abraham le dijo: A Moisés y a los profetas tienen; óiganlos. El entonces dijo: No, padre Abraham; pero si alguno fuere a ellos de entre los muertos, se arrepentirán. Mas Abraham le dijo: Si no oyen a Moisés y a los profetas, tampoco se persuadirán aunque alguno se levantare de los muertos.', ref: 'Lucas 16:27-31' }
      ],
      texto: [
        'La Escritura no solo tiene autoridad; también es suficiente. Eso significa que contiene todo lo que necesitamos saber para ser salvos y para vivir como Dios quiere. Pablo dice que las Escrituras pueden hacer a Timoteo «sabio para la salvación por la fe que es en Cristo Jesús» (2 Ti 3:15), y que su propósito es «que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra» (2 Ti 3:17). Pedro añade que todas las cosas que pertenecen a la vida y a la piedad nos han sido dadas mediante el conocimiento de Cristo (2 P 1:3).',
        'El Salmo 19, después de hablar de los cielos, describe la Palabra con seis nombres. La tabla los muestra: la ley es perfecta y convierte el alma; el testimonio es fiel y hace sabio al sencillo; los mandamientos son rectos y alegran el corazón. David no piensa en un libro frío de reglas, sino en algo «más que mucho oro afinado» y más dulce que la miel (Sal 19:10).',
        { h: 'Más que un milagro' },
        'En la historia del rico y Lázaro, el rico pide desde el tormento que Lázaro sea enviado a advertir a sus hermanos. Abraham responde: «A Moisés y a los profetas tienen; óiganlos» (Lc 16:29). El rico insiste: si alguien vuelve de entre los muertos, se arrepentirán. Y la respuesta es tajante: «Si no oyen a Moisés y a los profetas, tampoco se persuadirán aunque alguno se levantare de los muertos» (Lc 16:31). La Escritura basta para llevar al arrepentimiento; quien la rechaza no será convencido por una señal.',
        'Suficiente no significa que la Biblia responda a todas las preguntas posibles. No enseña a reparar un motor ni a elegir una carrera concreta. Significa que en ella está todo lo necesario para conocer a Dios, ser salvo y agradarle, y que da los principios para tomar las demás decisiones con sabiduría. Tampoco significa que no necesitemos al Espíritu, a la iglesia o a los dones: la misma Escritura nos manda buscarlos. Pero ninguna de esas cosas añade una verdad que la Biblia no tenga.',
        { ejercicio: {
          pregunta: '¿Qué enseña la respuesta de Abraham en Lucas 16:31?',
          opciones: [
            { t: 'Que los milagros no sirven para nada en la evangelización.', ok: false, por_que: 'En Hechos, Dios confirma la predicación con señales. El punto es otro: la señal no reemplaza a la Palabra.' },
            { t: 'Que la Escritura basta para llamar al arrepentimiento, y quien la rechaza no se convencerá con una señal.', ok: true, por_que: 'Moisés y los profetas eran suficientes. El problema de los hermanos del rico no era falta de pruebas, sino de disposición a oír.' },
            { t: 'Que solo los judíos necesitaban la ley y los profetas.', ok: false, por_que: 'La historia se aplica a los hermanos del rico, pero muestra un principio sobre el valor de la Escritura para todos.' }
          ],
          explicacion: 'La Palabra es suficiente para la salvación y la vida. Las señales acompañan, pero no reemplazan, el mensaje escrito.'
        } }
      ],
      pensar: 'Si la Escritura basta para que seas «enteramente preparado para toda buena obra» (2 Ti 3:17), ¿qué buena obra te está preparando Dios para hacer por medio de lo que lees?'
    },
    {
      id: 'en-la-vida', n: 'La Palabra viva en la vida del creyente', ref: 'Hebreos 4:12; Santiago 1:22-25; Josué 1:8; 2 Timoteo 3:14-15',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/timoteo-nino.webp', alt: 'En el patio de una casa de Listra, una abuela y una madre leen un rollo de las Escrituras a un niño de unos ocho años sentado entre ellas', pie: 'Timoteo aprendió las Sagradas Escrituras desde la niñez con su abuela Loida y su madre Eunice (2 Timoteo 1:5; 3:15).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos. Porque si alguno es oidor de la palabra pero no hacedor de ella, éste es semejante al hombre que considera en un espejo su rostro natural. Porque él se considera a sí mismo, y se va, y luego olvida cómo era. Mas el que mira atentamente en la perfecta ley, la de la libertad, y persevera en ella, no siendo oidor olvidadizo, sino hacedor de la obra, éste será bienaventurado en lo que hace.', ref: 'Santiago 1:22-25' }
      ],
      texto: [
        'Todo lo estudiado en este recurso tiene un fin práctico. Dios se reveló, inspiró la Escritura y la preservó para su pueblo, no para que la admiremos de lejos, sino para que viva en nosotros. Hebreos dice que «la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos» (He 4:12). No es un documento del pasado: penetra hasta lo más hondo y discierne los pensamientos y las intenciones del corazón.',
        'Timoteo es un buen ejemplo. Su abuela Loida y su madre Eunice le enseñaron las Escrituras «desde la niñez» (2 Ti 3:15; 1:5). Años después, ya pastor, Pablo le recuerda esa herencia y le pide permanecer en ella. La Palabra que recibió en casa lo sostuvo en el ministerio. Lo que una familia enseña con paciencia puede formar a un siervo de Dios.',
        { h: 'Oír y hacer' },
        'Santiago advierte contra un engaño sutil: «sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos» (Stg 1:22). Quien oye sin obedecer es como alguien que se mira en un espejo y luego olvida cómo era (Stg 1:23-24). En cambio, el que mira atentamente y persevera en hacerlo «será bienaventurado en lo que hace» (Stg 1:25). Jesús terminó el sermón del monte con la misma enseñanza: el prudente es el que oye sus palabras y las hace (Mt 7:24).',
        { h: 'Hábitos que hacen espacio a la Palabra' },
        'El Señor dijo a Josué: «Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él» (Jos 1:8). Leer la Biblia de forma ordenada, por libros completos; memorizar versículos para guardarlos en el corazón (Sal 119:11); meditar, es decir, volver una y otra vez sobre un pasaje; oír la predicación con atención; y conversar la Palabra en familia y en el grupo de estudio son maneras concretas de dejar que la Palabra de Cristo more en abundancia en nosotros (Col 3:16). El salmista lo vivía así: «¡Oh, cuánto amo yo tu ley! Todo el día es ella mi meditación» (Sal 119:97).',
        { ejercicio: {
          pregunta: 'Según Santiago 1:22-25, ¿quién se engaña a sí mismo?',
          opciones: [
            { t: 'El que lee poco la Biblia.', ok: false, por_que: 'Leer poco es un problema, pero Santiago habla de algo más sutil: alguien que sí oye la palabra.' },
            { t: 'El que oye la palabra pero no la pone en práctica.', ok: true, por_que: 'Cree que oír es suficiente, como quien se mira al espejo y olvida lo que vio.' },
            { t: 'El que pone en práctica la palabra sin entenderla del todo.', ok: false, por_que: 'Santiago llama bienaventurado al que persevera en hacerla. La obediencia sencilla no es engaño.' }
          ],
          explicacion: 'La Palabra se recibe para obedecerla. El conocimiento que no se vuelve obediencia deja al lector igual que antes.'
        } }
      ],
      pensar: 'Timoteo recibió la Palabra en su casa desde niño. ¿A quién le estás transmitiendo tú las Escrituras?'
    }
  ];

  const P = window.__PALABRA;
  delete window.__PALABRA;
  window.RUTA_DATA = {
    titulo: 'La Palabra de Dios',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'revelacion', grupo: 'La doctrina de la Escritura', n: 'I. La revelación', info: 'Un Dios que habla: la creación, la revelación especial, Cristo y la palabra escrita', estaciones: P.revelacion },
      { id: 'inspiracion', grupo: 'La doctrina de la Escritura', n: 'II. La inspiración', info: 'Exhalada por Dios y escrita por hombres; Jesús, los apóstoles y la verdad de la Escritura', estaciones: P.inspiracion },
      { id: 'canon', grupo: 'La doctrina de la Escritura', n: 'III. El canon', info: 'Qué libros son Escritura y cómo los reconoció el pueblo de Dios', estaciones: P.canon,
        linea: { desde: -1500, hasta: 420, hitos: [
          { a: -1446, t: 'Moisés escribe la ley' }, { a: -586, t: 'Exilio' },
          { a: [-458, -430], t: 'Esdras y Malaquías' }, { a: [-250, -100], t: 'Septuaginta' },
          { a: [50, 95], t: 'Se escribe el NT' }, { a: [367, 397], t: 'Atanasio y Cartago' }
        ] } },
      { id: 'autoridad', grupo: 'La doctrina de la Escritura', n: 'IV. Autoridad y suficiencia', info: 'La Escritura como norma frente a la tradición y la experiencia, iluminada por el Espíritu', estaciones: autoridad }
    ]
  };
})();
