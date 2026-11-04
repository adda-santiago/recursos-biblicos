/* ==========================================================
   Recursos Bíblicos — Introducción al Nuevo Testamento · contenido de las rutas
   FUENTE de public/apps/introduccion-nuevo-testamento/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/introduccion_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Línea del recurso: autoría tradicional de los 27 libros; todo escrito antes del año 70,
   salvo los escritos de Juan (hacia 85–95). Crucifixión en el año 33 (decisión del sitio).
   Fechas de los libros: las de Cronología del Nuevo Testamento (ruta VIII), cronología única del sitio.
   Coordinación con otros recursos:
   - El canon y los manuscritos se resumen (I.7): su desarrollo está en La Palabra de Dios y en
     De la Biblia a nosotros.
   - El problema sinóptico se resume (II.7): su desarrollo está en la ruta El problema sinóptico de la Armonía (nº 99).
   - Cada libro enlaza con su estudio; hoy existen Hechos y Apocalipsis.
   ========================================================== */
(() => {
  const NT = [30, 100];
  const MEDIT = [[29, 9], [44.5, 40]];          // todo el mundo del Nuevo Testamento
  window.__NT = window.__NT || {};

  /* ---------------- I. Panorama ---------------- */
  const panorama = [
    {
      id: 'nt', n: 'El Nuevo Testamento: 27 libros', ref: 'Jeremías 31:31; Lucas 22:20; Hebreos 1:1-2', fecha: NT,
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-27-libros.svg', alt: 'Los 27 libros del Nuevo Testamento en cinco grupos de colores: cuatro evangelios, Hechos, trece cartas de Pablo, Hebreos y siete cartas generales, y Apocalipsis', pie: 'Los 27 libros del Nuevo Testamento, agrupados como aparecen en la Biblia.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cinco grupos, nueve autores',
          cab: ['Grupo', 'Libros', 'Autores'],
          filas: [
            ['Evangelios', 'Mateo, Marcos, Lucas, Juan', 'Mateo, Marcos, Lucas y Juan'],
            ['Historia', 'Hechos', 'Lucas'],
            ['Cartas de Pablo', 'Romanos a Filemón (13)', 'Pablo'],
            ['Hebreos y cartas generales', 'Hebreos, Santiago, 1 y 2 Pedro, 1, 2 y 3 Juan, Judas (8)', 'Autor de Hebreos, Santiago, Pedro, Juan y Judas'],
            ['Profecía', 'Apocalipsis', 'Juan']
          ],
          nota: 'Cinco libros narran (los evangelios y Hechos), veintiuno son cartas y uno es profecía. Apocalipsis también tiene forma de carta (Ap 1:4).'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/1/1-2', ref: 'Hebreos 1:1-2' }
      ],
      texto: [
        'La Biblia tiene dos grandes partes. La palabra «testamento» traduce una palabra que significa pacto. Por medio de Jeremías, Dios prometió: «He aquí que vienen días, dice Jehová, en los cuales haré nuevo pacto con la casa de Israel y con la casa de Judá» (Jer 31:31). La noche antes de morir, Jesús tomó la copa y dijo: «Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama» (Lc 22:20). Por eso los libros que nacieron de ese pacto se llaman Nuevo Testamento, y los anteriores, Antiguo.',
        { h: 'Una biblioteca pequeña' },
        'El Nuevo Testamento es mucho más breve que el Antiguo: 27 libros frente a 39, y ocupa cerca de una cuarta parte de una Biblia común. Fue escrito en unos cincuenta años, aproximadamente entre el 45 y el 95 d.C., por nueve autores: cuatro evangelistas, Pablo, Santiago, Pedro, Judas y el autor de Hebreos, cuyo nombre no conocemos. Todos eran judíos, salvo probablemente Lucas, y todos conocieron a Jesús o a sus apóstoles.',
        'El Antiguo Testamento abarca siglos de historia; el Nuevo, unas pocas décadas. Cuenta la vida de Jesús, desde su nacimiento hasta su ascensión, y los primeros treinta años de la iglesia. Luego explica, en cartas, lo que significa esa historia para la fe y la vida, y termina mirando al futuro: la venida de Cristo y la nueva creación.',
        { h: 'Cinco grupos' },
        'El esquema y la tabla muestran cómo están agrupados. Los cuatro evangelios cuentan la vida, la muerte y la resurrección de Jesús. Hechos sigue la expansión del evangelio desde Jerusalén hasta Roma. Trece cartas llevan el nombre de Pablo. Hebreos y siete cartas más, llamadas generales porque casi todas se dirigen a varias iglesias, fueron escritas por otros autores. Apocalipsis cierra la Biblia con la revelación de las cosas por venir.',
        { h: 'Cómo usar este recurso' },
        'Esta primera ruta da el panorama: el mundo en que se escribió el Nuevo Testamento, sus géneros, su orden y cómo se reunieron sus libros. Las rutas II a VI presentan cada libro con una ficha: autor, destinatarios, fecha, ocasión, tema, bosquejo y versículo clave, y su lugar en el mapa. La ruta VII mira el conjunto y termina con un repaso. Cuando un libro tiene su propio estudio en el sitio, un botón lleva a él.'
      ],
      pensar: 'Dios habló «muchas veces y de muchas maneras» por los profetas, pero en estos postreros días nos ha hablado por el Hijo (He 1:1-2). ¿Qué lugar ocupa el Nuevo Testamento en tu lectura de la Biblia?'
    },
    {
      id: 'cumplimiento', n: 'Del Antiguo al Nuevo', ref: 'Mateo 5:17; Lucas 24:44; Jeremías 31:31-34; Hebreos 8:6-13', fecha: 33,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/24/44-47', ref: 'Lucas 24:44-47' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Promesa y cumplimiento',
          cab: ['En el Antiguo Testamento', 'En el Nuevo Testamento'],
          filas: [
            ['La promesa del descendiente de la mujer (Gn 3:15)', 'Cristo vence al diablo (He 2:14; 1 Jn 3:8)'],
            ['La bendición a todas las naciones por Abraham (Gn 12:3)', 'El evangelio llega a los gentiles (Ga 3:8, 14)'],
            ['El trono eterno de David (2 S 7:16)', 'Jesús, hijo de David, reinará para siempre (Lc 1:32-33)'],
            ['La pascua y los sacrificios', 'Cristo, nuestra pascua (1 Co 5:7; He 10:10-14)'],
            ['El nuevo pacto prometido (Jer 31:31-34)', 'El nuevo pacto en su sangre (Lc 22:20; He 8:6-13)'],
            ['El Espíritu derramado sobre toda carne (Jl 2:28)', 'Pentecostés (Hch 2:16-18)']
          ],
          nota: 'El Nuevo Testamento cita o alude al Antiguo cientos de veces.'
        } }
      ],
      texto: [
        'El Nuevo Testamento no comienza de cero. Su primer versículo presenta a Jesucristo como «hijo de David, hijo de Abraham» (Mt 1:1), y con eso lo une a las promesas que Dios hizo siglos antes. Jesús mismo dijo: «No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17).',
        { h: 'Las Escrituras de los apóstoles' },
        'Cuando los apóstoles hablaban de «las Escrituras», se referían al Antiguo Testamento. Fue la Biblia de Jesús y de la iglesia primitiva. Después de resucitar, Jesús abrió el entendimiento de los discípulos para que comprendieran que todo lo escrito de Él en la ley de Moisés, en los profetas y en los salmos tenía que cumplirse (Lc 24:44-45). Desde entonces, los apóstoles leyeron todo el Antiguo Testamento a la luz de Cristo. Las citas y alusiones a él se cuentan por cientos: casi no hay página del Nuevo Testamento sin un eco del Antiguo.',
        { h: 'Continuidad y novedad' },
        'La relación entre los dos testamentos tiene dos lados. Hay continuidad: el mismo Dios, el mismo plan de salvación, la misma fe de Abraham: «Creyó Abraham a Dios, y le fue contado por justicia» (Ro 4:3). Y hay novedad: lo que antes era sombra, ahora es realidad. Hebreos dice que la ley tenía «la sombra de los bienes venideros, no la imagen misma de las cosas» (He 10:1), y que Cristo es mediador de un mejor pacto, establecido sobre mejores promesas (He 8:6).',
        'Un antiguo dicho, atribuido a Agustín de Hipona, lo resume así: el Nuevo está escondido en el Antiguo, y el Antiguo se aclara en el Nuevo. Por eso un buen lector del Nuevo Testamento necesita el Antiguo, y el Antiguo solo se entiende del todo en Cristo.',
        'Las promesas a Israel que todavía esperan cumplimiento, como el reino de David sobre la tierra, no quedan anuladas por la iglesia. El recurso Pactos y dispensaciones estudia cómo se cumplen los pactos en Cristo y qué queda por cumplirse.',
        { ir: { t: 'Ver «Mediador de un mejor pacto» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/3' } }
      ],
      pensar: 'Jesús dijo que las Escrituras «dan testimonio de mí» (Jn 5:39). Cuando lees el Antiguo Testamento, ¿buscas a Cristo en él?'
    },
    {
      id: 'mundo', n: 'El mundo en que se escribió', ref: 'Gálatas 4:4; Lucas 2:1; Hechos 2:5-11; 17:26-27', fecha: NT,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'El imperio romano hacia el año 14 d.C.: un solo gobierno de Hispania a Siria.', fecha: 14,
            estado: { view: MEDIT, capas: ['roma-14'], lugares: ['roma', 'jerusalen', 'antioquia', 'alejandria', 'efeso', 'corinto'] } },
          { t: 'La iglesia hacia el año 62 d.C., cuando Hechos termina: de Jerusalén a Roma.', fecha: 62,
            estado: { view: MEDIT, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'jerusalen', 'antioquia', 'efeso', 'corinto', 'filipos', 'tesalonica'] } }
        ] },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres mundos en uno',
          cab: ['Mundo', 'Qué aportó', 'Dónde se nota en el NT'],
          filas: [
            ['Romano', 'Paz, caminos, rutas marítimas, ciudadanía y ley', 'Los viajes de Pablo; su apelación a César (Hch 25:11)'],
            ['Griego', 'Una lengua común, ciudades, filosofía y cartas', 'Todo el NT escrito en griego; Atenas (Hch 17)'],
            ['Judío', 'Las Escrituras, la sinagoga y la esperanza del Mesías', 'Pablo predica primero en las sinagogas (Hch 17:1-3)']
          ]
        } }
      ],
      texto: [
        'Pablo escribió que, «cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley» (Ga 4:4). El Nuevo Testamento nació en un momento preparado, en el cruce de tres mundos: el romano, el griego y el judío.',
        { h: 'Roma' },
        'Hacia el tiempo de Jesús, Roma gobernaba todo el Mediterráneo. Augusto había puesto fin a las guerras civiles, y la llamada paz romana permitía viajar con relativa seguridad. Una red de caminos empedrados y de rutas marítimas unía las provincias. Por esos caminos viajaron los apóstoles, sus colaboradores y sus cartas. La ciudadanía romana protegió a Pablo más de una vez, y su apelación a César lo llevó hasta Roma.',
        { h: 'Grecia' },
        'Tres siglos antes, las conquistas de Alejandro Magno habían extendido la cultura griega por todo Oriente. El griego común, llamado koiné, se hablaba desde Roma hasta Alejandría y Antioquía. Por eso los apóstoles pudieron escribir en una sola lengua a iglesias de Galacia, Macedonia, Acaya, Asia e Italia. Las ciudades griegas, con sus plazas, teatros y escuelas, fueron el escenario de buena parte de Hechos.',
        { h: 'Israel' },
        'El Nuevo Testamento es, ante todo, un libro judío. Jesús nació bajo la ley; sus apóstoles eran judíos; su Biblia era el Antiguo Testamento. En casi todas las ciudades del imperio había comunidades judías con su sinagoga, donde se leían las Escrituras cada sábado y se esperaba al Mesías. Allí comenzaba Pablo a predicar, y allí encontraba también a gentiles temerosos de Dios, preparados para oír el evangelio.',
        'Este recurso solo resume ese trasfondo. El sitio lo estudia con detalle en los recursos que siguen.',
        { ir: { t: 'Ver El mundo judío en tiempos de Jesús', a: '../../mundo-judio/' } },
        { ir: { t: 'Ver Roma y la Biblia en El imperio romano', a: '../../imperio-romano/#biblia/1' } },
        { ir: { t: 'Ver «Cuando vino el cumplimiento del tiempo» en Entre los Testamentos', a: '../../entre-los-testamentos/#cumplimiento/1' } }
      ],
      pensar: 'Dios usó la paz de Roma, la lengua de Grecia y las sinagogas de Israel para extender el evangelio. ¿Qué circunstancias de tu tiempo podría estar usando Dios para lo mismo?'
    },
    {
      id: 'carta', n: 'Griego, papiro y cartas', ref: 'Romanos 16:22; Gálatas 6:11; 2 Tesalonicenses 3:17; Colosenses 4:7-9, 16', fecha: [48, 95],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-carta.svg', alt: 'Las partes de una carta antigua con el ejemplo de Filemón: remitente, destinatario, saludo, acción de gracias, cuerpo, exhortación, saludos y despedida', pie: 'Las partes de una carta del siglo I, con el ejemplo de la carta a Filemón.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/foto-p46-bifolio.jpg', alt: 'Dos hojas de papiro claro, unidas por el centro, sobre un fondo negro, con columnas de letras griegas mayúsculas en tinta oscura; los bordes están gastados y arriba se ven las etiquetas del museo', pie: 'Papiro 46 (hacia el año 200): a la izquierda, Romanos 11; a la derecha, el final de Filipenses y el comienzo de Colosenses. Es una de las copias más antiguas de las cartas de Pablo.', origen: 'foto', licencia: 'Biblioteca Chester Beatty, Dublín. Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Imagen', src: '../viajes-pablo/img/vp-carta.webp', alt: 'En una casa de Corinto, Pablo dicta una carta a un secretario que escribe en un papiro, mientras Silas y Timoteo escuchan', pie: 'Pablo dicta una carta con Silas y Timoteo (1 Ts 1:1).', origen: 'ia' }
      ],
      texto: [
        'Todo el Nuevo Testamento se escribió en griego koiné, el griego común de la calle y del comercio, no el de los filósofos. Era la lengua que entendían el mercader, el soldado y el esclavo. Dios habló en el idioma de la gente.',
        { h: 'Papiro y secretarios' },
        'Los libros se escribían sobre papiro, una hoja hecha con tallos de una planta del Nilo, con tinta de hollín y una caña afilada. Escribir era un oficio, y muchas cartas se dictaban a un secretario. Al final de Romanos, el secretario mismo envía su saludo: «Yo Tercio, que escribí la epístola, os saludo en el Señor» (Ro 16:22). Pablo solía tomar la pluma al final para firmar de su mano: «Mirad con cuán grandes letras os escribo de mi propia mano» (Ga 6:11). La firma era la garantía de que la carta era auténtica (2 Ts 3:17).',
        { h: 'Cómo era una carta' },
        'Las cartas del siglo I seguían un modelo, que el esquema muestra con el ejemplo de Filemón. Comenzaban con el nombre del que escribía y el de los destinatarios, un saludo y, muchas veces, una acción de gracias. Luego venía el cuerpo, y al final, recomendaciones, saludos y una despedida. Los apóstoles usaron ese molde y lo llenaron de contenido cristiano. En vez del saludo griego habitual, Pablo escribe «gracia y paz».',
        { h: 'Llevadas y leídas' },
        'No había correo para particulares. Las cartas las llevaban colaboradores de confianza, que también las explicaban. Tíquico llevó Colosenses y, con Onésimo, daría noticias de Pablo (Col 4:7-9). Las cartas se leían en voz alta ante la iglesia reunida y se compartían con otras: «haced que también se lea en la iglesia de los laodicenses» (Col 4:16). Así comenzaron a copiarse y a reunirse, como muestra el papiro 46, una colección de las cartas de Pablo copiada hacia el año 200.',
        { ir: { t: 'Ver «Los primeros copistas cristianos» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#escritura/5' } }
      ],
      pensar: 'Las cartas del Nuevo Testamento se escribieron para ser leídas en voz alta en la iglesia. ¿Qué cambia cuando lees una carta apostólica como si estuvieras sentado entre sus primeros oyentes?'
    },
    {
      id: 'orden', n: 'El orden de los libros', ref: '2 Pedro 3:15-16; Lucas 1:1-4', fecha: [45, 95],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-orden.svg', alt: 'Línea de tiempo del año 40 al 100 con cada libro del Nuevo Testamento ubicado en la fecha aproximada en que se escribió, coloreado según su grupo', pie: 'Cuándo se escribió cada libro: fechas aproximadas.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos órdenes',
          cab: ['En la Biblia', 'Por qué ese lugar', 'Cuándo se escribió (aprox.)'],
          filas: [
            ['Evangelios', 'Son el fundamento: la vida de Jesús', 'Mateo, 50–60; Marcos, 55–65; Lucas, 60–61; Juan, 85–90'],
            ['Hechos', 'Continúa la historia', 'c. 62'],
            ['Cartas de Pablo a iglesias', 'De la más larga a la más corta', 'De Gálatas (48–49) a Filipenses (61–62)'],
            ['Cartas de Pablo a personas', 'También por largo', 'De 1 Timoteo (62–64) a 2 Timoteo (66–67)'],
            ['Hebreos y cartas generales', 'Por autor y largo', 'De Santiago (45–49) a 3 Juan (85–95)'],
            ['Apocalipsis', 'Cierra con la consumación', 'c. 95']
          ],
          nota: 'El orden de la Biblia es temático, no cronológico. Las fechas son aproximadas y algunas se discuten.'
        } }
      ],
      texto: [
        'Quien abre el Nuevo Testamento lee primero los evangelios, después Hechos, las cartas y Apocalipsis. Ese orden tiene sentido, pero no es el orden en que se escribieron los libros. Conocer los dos ayuda a entender mejor cada uno.',
        { h: 'El orden de la Biblia' },
        'Los evangelios van primero porque cuentan lo que es el fundamento de todo lo demás: la persona y la obra de Jesús. Hechos continúa la historia y sirve de puente hacia las cartas. Las cartas de Pablo aparecen en dos grupos, primero las dirigidas a iglesias y luego las dirigidas a personas, y dentro de cada grupo van más o menos de la más larga, Romanos, a la más corta, Filemón. Hebreos y las cartas generales vienen después, y Apocalipsis cierra la Biblia con la venida de Cristo y la nueva creación. Es un orden pensado para la lectura, de la historia a la enseñanza y de la enseñanza a la esperanza.',
        { h: 'El orden en que se escribieron' },
        'Si se ordenan por fecha, como en el esquema, el panorama cambia. Las primeras páginas del Nuevo Testamento no fueron los evangelios, sino cartas. Santiago y Gálatas se escribieron probablemente antes del año 50, y 1 y 2 Tesalonicenses hacia el 50 o 51, unos veinte años después de la resurrección. Los evangelios se escribieron después, aunque su contenido se predicaba y se enseñaba desde Pentecostés. Lucas cuenta que antes de él muchos habían puesto en orden la historia, «tal como nos lo enseñaron los que desde el principio lo vieron con sus ojos» (Lc 1:2). Los escritos de Juan llegaron al final del siglo.',
        'Este recurso sigue el orden de la Biblia, pero da en cada libro su fecha aproximada. La ruta VII vuelve a mirar el conjunto en una línea de tiempo, y el recurso Cronología del Nuevo Testamento explica cómo se fecha cada libro.',
        { ir: { t: 'Ver «Los 27 libros en orden» en Cronología del Nuevo Testamento', a: '../../cronologia-nuevo-testamento/#libros/1' } },
        { ejercicio: {
          pregunta: '¿Por qué Romanos aparece primero entre las cartas de Pablo?',
          opciones: [
            { t: 'Porque es la más larga de las cartas dirigidas a iglesias.', ok: true, por_que: 'Las cartas de Pablo están ordenadas, en general, de la más larga a la más corta: primero las de iglesias y luego las de personas.' },
            { t: 'Porque fue la primera que Pablo escribió.', ok: false, por_que: 'Romanos se escribió hacia el 56 o 57. Gálatas y Tesalonicenses son anteriores.' },
            { t: 'Porque la iglesia de Roma era la más importante del siglo I.', ok: false, por_que: 'El orden no responde a la importancia de la iglesia, sino al largo de la carta.' }
          ],
          explicacion: 'El orden de la Biblia es temático y práctico; para conocer la historia hay que mirar las fechas de cada libro.'
        } }
      ],
      pensar: 'Las primeras cartas cristianas se escribieron unos veinte años después de la resurrección, cuando muchos testigos aún vivían (1 Co 15:6). ¿Qué te dice eso sobre la confianza que puedes tener en el mensaje del Nuevo Testamento?'
    },
    {
      id: 'generos', n: 'Cuatro géneros', ref: 'Juan 20:30-31; Hechos 1:1-2; Colosenses 4:16; Apocalipsis 1:1-3', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo leer cada género',
          cab: ['Género', 'Libros', 'Qué es', 'Cómo leerlo'],
          filas: [
            ['Evangelio', 'Mateo, Marcos, Lucas, Juan', 'Relato de la vida, muerte y resurrección de Jesús, escrito para despertar la fe', 'Pasaje por pasaje, preguntando qué revela de Jesús; comparando los cuatro'],
            ['Historia', 'Hechos', 'Relato de la expansión del evangelio por el Espíritu', 'Distinguir lo que describe de lo que enseña; ver el plan de Hch 1:8'],
            ['Carta', 'Romanos a Judas', 'Enseñanza dirigida a una iglesia o persona en una situación concreta', 'Reconstruir la ocasión; seguir el argumento completo, no versículos sueltos'],
            ['Apocalipsis', 'Apocalipsis', 'Profecía en lenguaje de visiones y símbolos, con forma de carta', 'Interpretar los símbolos con la Biblia misma, sobre todo con Daniel y Ezequiel']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/20/30-31', ref: 'Juan 20:30-31' }
      ],
      texto: [
        'Un poema no se lee como un contrato, ni una carta como una novela. La Biblia también tiene géneros literarios, y cada uno se lee de una manera. En el Nuevo Testamento hay cuatro.',
        { h: 'Evangelios' },
        'Un evangelio no es una biografía moderna. No dice casi nada de la infancia de Jesús ni de su aspecto, y dedica un tercio de su espacio a su última semana. Cada evangelista eligió y ordenó los hechos para presentar a Jesús y llamar a la fe. Juan lo dice abiertamente: hizo muchas otras señales, «pero éstas se han escrito para que creáis que Jesús es el Cristo» (Jn 20:31). Por eso conviene leer cada evangelio como una obra completa, con su propio énfasis, y compararlo con los otros.',
        { h: 'Historia' },
        'Hechos es la continuación del evangelio de Lucas. Cuenta lo que Jesús siguió haciendo por medio de su Espíritu y de su iglesia. Al leerlo hay que distinguir lo que el libro describe de lo que enseña como modelo, y prestar atención a lo que se repite, como el derramamiento del Espíritu y la predicación con poder.',
        { h: 'Cartas' },
        'Veintiún libros son cartas. Cada una responde a una situación concreta: un error doctrinal, un conflicto, una pregunta, una persecución. Es como escuchar un lado de una conversación telefónica: hay que reconstruir lo que pasaba del otro lado. Las cartas desarrollan un argumento, y un versículo suelto puede perder su sentido si se separa de él.',
        { h: 'Apocalipsis' },
        'El último libro combina tres géneros: es un apocalipsis, es decir, una revelación en visiones y símbolos; es profecía, y es carta a siete iglesias. Sus símbolos se entienden mejor con la Biblia misma, sobre todo con Daniel, Ezequiel y Zacarías.',
        { ir: { t: 'Ver «Los evangelios y las parábolas» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#generos/6' } },
        { ir: { t: 'Ver «Las cartas» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#generos/7' } }
      ],
      pensar: 'Leer una carta del Nuevo Testamento es como escuchar un lado de una conversación. ¿Qué preguntas te ayudarían a reconstruir el otro lado antes de aplicar un pasaje a tu vida?'
    },
    {
      id: 'canon', n: 'Cómo se reunieron los 27 libros', ref: '2 Pedro 3:15-16; 1 Timoteo 5:18; Colosenses 4:16; Judas 3', fecha: [50, 400],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Del siglo I al siglo IV',
          cab: ['Fecha', 'Qué ocurre'],
          filas: [
            ['Siglo I', 'Las cartas se leen en las iglesias y se comparten (Col 4:16); Pedro llama «Escrituras» a las cartas de Pablo (2 P 3:16)'],
            ['Hacia 110', 'Ignacio y Policarpo citan cartas de Pablo y los evangelios'],
            ['Hacia 140', 'Marción publica un canon recortado: un solo evangelio mutilado y diez cartas de Pablo; la iglesia lo rechaza'],
            ['Hacia 180', 'Ireneo defiende que hay cuatro evangelios, ni más ni menos'],
            ['Hacia 170–200', 'El fragmento de Muratori enumera la mayoría de los libros'],
            ['367', 'Atanasio de Alejandría enumera exactamente los 27 libros'],
            ['393 y 397', 'Los concilios de Hipona y de Cartago reconocen la misma lista']
          ],
          nota: 'La iglesia no creó el canon: reconoció los libros que Dios había inspirado.'
        } },
        { tipo: 'imagen', titulo: 'Foto', src: '../de-la-biblia-a-nosotros/img/papiro-p52.webp', alt: 'Fragmento de papiro con forma aproximadamente triangular, con letras griegas en tinta oscura', pie: 'Papiro 52, la copia más antigua conocida de un pasaje del Nuevo Testamento (Juan 18:31-33), de la primera mitad del siglo II.', origen: 'foto', licencia: 'Dominio público, vía Wikimedia Commons', completa: true }
      ],
      texto: [
        'Ningún concilio se reunió un día para decidir qué libros entrarían en el Nuevo Testamento. Los 27 libros fueron reconocidos poco a poco, porque las iglesias los recibieron desde el principio como palabra de los apóstoles.',
        { h: 'Reconocidos desde el principio' },
        'Ya en el siglo I, las cartas apostólicas tenían autoridad. Pedro habla de las cartas de Pablo y dice que algunos las tuercen, «como también las otras Escrituras» (2 P 3:16): las pone al nivel del Antiguo Testamento. Pablo cita juntos un texto de Deuteronomio y una palabra de Jesús que aparece en Lucas, y llama Escritura a ambos (1 Ti 5:18). A comienzos del siglo II, los líderes de las iglesias citaban los evangelios y las cartas como palabra con autoridad.',
        { h: 'Por qué hubo que hacer listas' },
        'Hacia el año 140, un maestro llamado Marción rechazó el Antiguo Testamento y publicó su propia lista: un evangelio de Lucas recortado y diez cartas de Pablo. Al mismo tiempo circulaban escritos falsos con nombres de apóstoles, los apócrifos. La iglesia tuvo que decir con claridad cuáles eran los libros recibidos. Los criterios fueron tres: que el libro viniera de un apóstol o de alguien cercano a ellos, que su enseñanza estuviera de acuerdo con la fe recibida y que fuera usado por las iglesias en todas partes.',
        { h: 'Una lista completa' },
        'La mayoría de los libros, los cuatro evangelios, Hechos y las cartas de Pablo, nunca se discutieron. Algunos de los más breves, como 2 Pedro, 2 y 3 Juan, Judas, y también Hebreos y Apocalipsis, tardaron más en ser aceptados en todas las regiones. En el año 367, Atanasio enumeró exactamente los 27 libros, y a fines del siglo IV los concilios del norte de África reconocieron la misma lista. Desde entonces, las iglesias de Oriente y de Occidente tienen el mismo Nuevo Testamento.',
        'El recurso La Palabra de Dios estudia el canon con detalle, y De la Biblia a nosotros, los miles de manuscritos que lo conservaron.',
        { ir: { t: 'Ver «El canon del Nuevo Testamento» en La Palabra de Dios', a: '../../palabra-de-dios/#canon/4' } },
        { ir: { t: 'Ver «Una abundancia sin igual» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/1' } },
        { ejercicio: {
          pregunta: '¿Cuál es la mejor manera de describir cómo se formó el canon del Nuevo Testamento?',
          opciones: [
            { t: 'Las iglesias reconocieron los libros que ya recibían como palabra apostólica, y con el tiempo lo dijeron en listas.', ok: true, por_que: 'La autoridad de los libros venía de Dios por medio de los apóstoles; las listas la reconocieron.' },
            { t: 'Un emperador eligió los libros en el concilio de Nicea.', ok: false, por_que: 'Es un mito popular: el concilio de Nicea (325) trató la divinidad de Cristo, no el canon.' },
            { t: 'Cada iglesia eligió los libros que le gustaban más.', ok: false, por_que: 'Los criterios fueron el origen apostólico, la fe recibida y el uso de todas las iglesias.' }
          ],
          explicacion: 'La iglesia no dio autoridad a los libros: reconoció la autoridad que ya tenían.'
        } }
      ],
      pensar: 'Judas exhorta a contender por la fe «que ha sido una vez dada a los santos» (Jud 3). ¿Qué te da seguridad de que la Biblia que tienes en tus manos es la fe que recibieron los apóstoles?'
    }
  ];

  window.__NT.panorama = panorama;
})();
