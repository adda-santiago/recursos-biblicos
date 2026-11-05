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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo;', ref: 'Hebreos 1:1-2' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y les dijo: Estas son las palabras que os hablé, estando aún con vosotros: que era necesario que se cumpliese todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos. Entonces les abrió el entendimiento, para que comprendiesen las Escrituras; y les dijo: Así está escrito, y así fue necesario que el Cristo padeciese, y resucitase de los muertos al tercer día; y que se predicase en su nombre el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén.', ref: 'Lucas 24:44-47' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Hizo además Jesús muchas otras señales en presencia de sus discípulos, las cuales no están escritas en este libro. Pero éstas se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre.', ref: 'Juan 20:30-31' }
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
/* Introducción al Nuevo Testamento · parte 2: II. Los evangelios y III. Hechos */
(() => {
  const MEDIT = [[29, 9], [44.5, 40]];
  const LEVANTE = [[29.5, 31.5], [37.8, 38.8]];
  // Ficha de un libro: filas [etiqueta, valor]
  const ficha = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Ficha', tabla: { titulo, cab: ['', ''], filas, nota } });
  const bosquejo = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Bosquejo', tabla: { titulo, cab: ['Capítulos', 'Contenido'], filas, nota } });

  /* ---------------- II. Los evangelios ---------------- */
  const evangelios = [
    {
      id: 'evangelio', n: '¿Qué es un evangelio?', ref: 'Marcos 1:1, 14-15; Isaías 52:7; 1 Corintios 15:1-4; Lucas 1:1-4', fecha: [33, 90],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los cuatro evangelios de un vistazo',
          cab: ['', 'Mateo', 'Marcos', 'Lucas', 'Juan'],
          filas: [
            ['Autor', 'El apóstol Mateo', 'Juan Marcos', 'Lucas, el médico', 'El apóstol Juan'],
            ['Primeros lectores', 'Creyentes judíos', 'Creyentes de Roma', 'Teófilo y los gentiles', 'Creyentes de Asia'],
            ['Fecha aprox.', '50–60', '55–65', '60–61', '85–90'],
            ['Jesús es…', 'El Mesías Rey prometido', 'El Siervo, Hijo de Dios', 'El Salvador de todos', 'El Hijo eterno de Dios'],
            ['Rasgo propio', 'Cinco grandes discursos', 'Acción: «en seguida»', 'Oración, Espíritu, pobres', 'Señales y «Yo soy»'],
            ['Capítulos', '28', '16', '24', '21']
          ],
          nota: 'Fechas aproximadas. Mateo, Marcos y Lucas se llaman sinópticos (ruta II, estación 7).'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-sermon-ladera.webp', alt: 'Jesús, de espaldas, enseña sentado en la ladera de un monte junto al mar de Galilea a una multitud', pie: 'Durante años, el evangelio se contó de viva voz antes de ponerse por escrito.', origen: 'ia' }
      ],
      texto: [
        'Marcos comienza así: «Principio del evangelio de Jesucristo, Hijo de Dios» (Mr 1:1). La palabra evangelio significa buena noticia. Isaías había anunciado la llegada de un mensajero que trae alegres nuevas y dice a Sion: «¡Tu Dios reina!» (Is 52:7). En el imperio romano se usaba la misma palabra para anunciar el nacimiento o la victoria de un emperador. Los cristianos la usaron para la mejor noticia de todas: Dios cumplió sus promesas en Jesús.',
        { h: 'Primero se predicó' },
        'Antes de ser un libro, el evangelio fue un mensaje. Jesús vino a Galilea «predicando el evangelio del reino de Dios» (Mr 1:14). Después de Pentecostés, los apóstoles predicaron su muerte y su resurrección, y Pablo resume ese mensaje: Cristo murió por nuestros pecados, conforme a las Escrituras, fue sepultado y resucitó al tercer día (1 Co 15:1-4). Los relatos de lo que Jesús dijo e hizo se repetían en las iglesias, se enseñaban a los nuevos creyentes y se memorizaban, como era costumbre en Israel.',
        { h: 'Después se escribió' },
        'Con los años, los testigos comenzaron a morir y el evangelio llegó a lugares lejanos. Entonces se pusieron por escrito los relatos. Lucas cuenta que muchos lo habían intentado antes que él, y que él investigó «con diligencia todas las cosas desde su origen» para escribirlas por orden (Lc 1:3). Así nacieron los cuatro evangelios, el mismo mensaje contado por cuatro testigos con sus propios énfasis.',
        { h: 'Cuatro, no uno' },
        'Desde el siglo II, la iglesia recibió cuatro evangelios, ni más ni menos. Ireneo de Lyon, hacia el 180, defendía que eran cuatro como cuatro son los vientos, y rechazaba tanto a quienes usaban solo uno como a quienes agregaban evangelios falsos. La tabla los compara. Las estaciones que siguen presentan cada uno.',
        { ejercicio: {
          pregunta: '¿Qué significa la palabra «evangelio»?',
          opciones: [
            { t: 'Buena noticia: el anuncio de lo que Dios hizo en Jesucristo.', ok: true, por_que: 'Es el sentido de la palabra griega y de Isaías 52:7, que habla de alegres nuevas de salvación.' },
            { t: 'Biografía completa de una persona.', ok: false, por_que: 'Los evangelios no pretenden contar toda la vida de Jesús; seleccionan lo necesario para creer.' },
            { t: 'Libro de leyes para los cristianos.', ok: false, por_que: 'Los evangelios contienen enseñanzas de Jesús, pero su centro es una noticia: su muerte y resurrección.' }
          ],
          explicacion: 'Antes de ser un libro, el evangelio fue una noticia proclamada; los evangelios son esa noticia puesta por escrito.'
        } }
      ],
      pensar: 'El evangelio se predicó de boca en boca antes de escribirse. ¿A quién le has contado tú la buena noticia de Jesús?'
    },
    {
      id: 'mateo', n: 'Mateo: el Rey prometido', ref: 'Mateo 1:1; 5:17; 9:9; 16:16-18; 28:18-20', fecha: [50, 60],
      visual: [
        ficha('El evangelio según Mateo', [
          ['Autor', 'Mateo, llamado también Leví, publicano y apóstol (Mt 9:9; 10:3)'],
          ['Primeros lectores', 'Creyentes judíos, probablemente de Judea o de Siria'],
          ['Fecha', 'Entre el 50 y el 60 d.C. (antes de la destrucción del templo en el año 70)'],
          ['Lugar', 'Judea o Antioquía de Siria (se discute)'],
          ['Tema', 'Jesús es el Mesías, hijo de David, que cumple la ley y los profetas'],
          ['Palabras clave', '«Para que se cumpliese», «reino de los cielos», «hijo de David»'],
          ['Versículo clave', 'Mateo 5:17; también 28:18-20']
        ]),
        bosquejo('Bosquejo de Mateo', [
          ['1–4', 'El Rey nace y se presenta: genealogía, nacimiento, Juan el Bautista, tentación'],
          ['5–7', 'Primer discurso: el Sermón del monte'],
          ['8–10', 'Milagros y segundo discurso: el envío de los doce'],
          ['11–13', 'Rechazo creciente y tercer discurso: las parábolas del reino'],
          ['14–18', 'Formación de los discípulos y cuarto discurso: la vida en la comunidad'],
          ['19–25', 'Camino a Jerusalén y quinto discurso: el monte de los Olivos'],
          ['26–28', 'Pasión, resurrección y gran comisión']
        ], 'Cada discurso termina con una frase parecida: «Cuando terminó Jesús estas palabras» (Mt 7:28; 11:1; 13:53; 19:1; 26:1).'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-mateo-banco.webp', alt: 'Junto a un camino a la entrada de Capernaúm, Mateo está sentado tras una mesa con monedas, una balanza y tablillas de cuentas; Jesús, de espaldas, se ha detenido frente a él', pie: '«Vio a un hombre llamado Mateo, que estaba sentado al banco de los tributos públicos, y le dijo: Sígueme» (Mt 9:9).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Jesús se acercó y les habló diciendo: Toda potestad me es dada en el cielo y en la tierra. Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.', ref: 'Mateo 28:18-20' }
      ],
      texto: [
        'El primer libro del Nuevo Testamento empieza con una genealogía: «Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham» (Mt 1:1). Para un lector judío no había mejor comienzo. Jesús es el descendiente de Abraham por quien serían benditas las naciones, y el hijo de David a quien Dios prometió un trono eterno.',
        { h: 'El autor' },
        'El libro no lleva firma, pero los escritores cristianos del siglo II lo atribuyen de manera unánime al apóstol Mateo. Papías, obispo de Hierápolis hacia el año 120, cuenta que Mateo reunió las palabras del Señor en lengua hebrea. Mateo era un cobrador de impuestos de Capernaúm, un oficio despreciado, a quien Jesús llamó con una sola palabra: «Sígueme» (Mt 9:9). Acostumbrado a llevar cuentas, escribió un evangelio ordenado, con listas y cinco grandes discursos.',
        { h: 'Para lectores judíos' },
        'Mateo cita el Antiguo Testamento más que ningún otro evangelista y repite la fórmula «para que se cumpliese lo dicho por el profeta». No explica las costumbres judías y habla del «reino de los cielos», como hacían los judíos piadosos para no pronunciar el nombre de Dios. Presenta a Jesús como el Mesías prometido, que no vino a abrogar la ley, sino a cumplirla (Mt 5:17), y como un nuevo Moisés que enseña desde un monte.',
        { h: 'Para todas las naciones' },
        'Al mismo tiempo, Mateo abre la puerta a los gentiles. En la genealogía hay mujeres extranjeras, como Rut y Rahab; los primeros en adorar al Niño son magos de Oriente, y el libro termina con el envío a «todas las naciones» (Mt 28:19). Es también el único evangelio que usa la palabra iglesia (Mt 16:18; 18:17).',
        { h: 'Su fecha' },
        'Jesús anuncia la destrucción del templo (Mt 24:2), pero el libro no la narra como un hecho ocurrido. Por eso este recurso, como Cronología del Nuevo Testamento, lo fecha hacia el 50–60. Otros estudiosos lo ubican en los años 60; la tradición antigua lo consideraba el primero de los evangelios. La relación entre Mateo, Marcos y Lucas se resume en la estación 7.',
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } }
      ],
      pensar: 'Jesús llamó a un publicano despreciado y lo convirtió en autor del primer libro del Nuevo Testamento. ¿Qué te dice eso sobre lo que Dios puede hacer con tu historia?'
    },
    {
      id: 'marcos', n: 'Marcos: el Siervo en acción', ref: 'Marcos 1:1; 10:45; 15:39; Hechos 12:12; 15:37-39; 1 Pedro 5:13', fecha: [55, 65],
      visual: [
        ficha('El evangelio según Marcos', [
          ['Autor', 'Juan Marcos, compañero de Pablo y de Pedro (Hch 12:12; 1 P 5:13)'],
          ['Primeros lectores', 'Creyentes gentiles, probablemente de Roma'],
          ['Fecha', 'Entre el 55 y el 65 d.C.'],
          ['Lugar', 'Roma, según la tradición antigua'],
          ['Tema', 'Jesús, el Hijo de Dios, vino a servir y a dar su vida en rescate'],
          ['Palabras clave', '«En seguida» (más de cuarenta veces), «evangelio», «Hijo de Dios»'],
          ['Versículo clave', 'Marcos 10:45']
        ]),
        bosquejo('Bosquejo de Marcos', [
          ['1:1-13', 'El comienzo: Juan el Bautista, el bautismo y la tentación'],
          ['1:14–8:26', 'El ministerio en Galilea: autoridad sobre la enfermedad, los demonios, la naturaleza y el pecado'],
          ['8:27–10:52', 'Camino a Jerusalén: tres anuncios de la cruz'],
          ['11–13', 'En Jerusalén: entrada, templo y enseñanza en el monte de los Olivos'],
          ['14–16', 'Pasión, muerte y resurrección']
        ], 'La confesión de Pedro en Cesarea de Filipo (Mr 8:29) divide el libro en dos mitades.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDIT, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'jerusalen', 'antioquia', 'pafos'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-marcos-pedro.webp', alt: 'En una casa de Roma, de noche, Juan Marcos escribe en un papiro mientras Pedro, anciano, recuerda en voz alta, sentado junto a una lámpara', pie: 'Según la tradición antigua, Marcos puso por escrito la predicación de Pedro.', origen: 'ia' }
      ],
      texto: [
        'Marcos es el evangelio más breve y el más rápido. No tiene genealogía ni relatos del nacimiento: comienza con Juan el Bautista y, en pocos versículos, Jesús ya está sanando y echando fuera demonios. La palabra «en seguida» aparece una y otra vez. Es un evangelio de acción.',
        { h: 'El autor' },
        'Juan Marcos era hijo de una María en cuya casa se reunía la iglesia de Jerusalén (Hch 12:12). Acompañó a Pablo y a Bernabé en el primer viaje, pero los dejó a mitad del camino, y Pablo no quiso llevarlo en el segundo (Hch 15:37-39). Años después, Pablo pidió que lo trajeran, porque le era útil para el ministerio (2 Ti 4:11). Pedro lo llamaba «Marcos mi hijo» (1 P 5:13). Su vida muestra que un fracaso no tiene la última palabra.',
        'Papías, hacia el año 120, cuenta que Marcos fue intérprete de Pedro y escribió con exactitud lo que recordaba de la predicación del apóstol. Eso explica los detalles vivos del libro y el lugar que tienen en él los errores de Pedro, contados sin disimulo.',
        { h: 'Para lectores romanos' },
        'Marcos explica las costumbres judías, como el lavamiento de manos (Mr 7:3-4), y traduce las palabras arameas, como Talita cumi o Efata. Usa varias palabras latinas. Todo indica lectores gentiles, y la tradición los ubica en Roma, donde los cristianos pronto sufrirían la persecución de Nerón.',
        { h: 'El Siervo que da su vida' },
        'El versículo clave resume el libro: «el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos» (Mr 10:45). La primera mitad muestra la autoridad de Jesús; la segunda, su camino a la cruz. El clímax llega cuando un centurión romano, al verlo morir, dice: «Verdaderamente este hombre era Hijo de Dios» (Mr 15:39). El libro comenzó con ese título (Mr 1:1) y lo pone al final en boca de un gentil.',
        { posturas: {
          titulo: '¿Dónde termina Marcos?',
          a: { n: 'En el versículo 16:8', t: 'Los dos manuscritos griegos completos más antiguos, el Sinaítico y el Vaticano, terminan en Marcos 16:8. Muchos estudiosos piensan que el final largo (16:9-20) se agregó después, para completar el relato con las apariciones del resucitado.' },
          b: { n: 'En el versículo 16:20', t: 'La gran mayoría de los manuscritos, las versiones antiguas y citas de autores del siglo II, como Ireneo, incluyen los versículos 9 a 20. La Reina-Valera los conserva, y muchos los consideran parte del texto original.' },
          c: 'Este recurso conserva los versículos 9 a 20 como los trae la Reina-Valera, y nota que su autenticidad se discute. Ninguna doctrina depende solo de ellos: las señales que acompañan a los creyentes (Mr 16:17-18) se enseñan también en Hechos y en 1 Corintios 12 a 14. El recurso De la Biblia a nosotros estudia este pasaje.'
        } },
        { ir: { t: 'Ver «Pasajes discutidos» en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/#nuevo/7' } }
      ],
      pensar: 'Marcos, el que abandonó el viaje misionero, terminó escribiendo un evangelio. ¿Hay alguien a quien hayas dejado de lado y a quien Dios todavía pueda usar?'
    },
    {
      id: 'lucas', n: 'Lucas: el Salvador de todos', ref: 'Lucas 1:1-4; 4:18-19; 9:51; 19:10; Colosenses 4:14', fecha: [60, 61],
      visual: [
        ficha('El evangelio según Lucas', [
          ['Autor', 'Lucas, «el médico amado», compañero de Pablo (Col 4:14; 2 Ti 4:11)'],
          ['Destinatario', 'Teófilo, y con él los creyentes gentiles (Lc 1:3)'],
          ['Fecha', 'Hacia el 60–61 d.C., antes de Hechos'],
          ['Lugar', 'Cesarea o Roma (se discute)'],
          ['Tema', 'Jesús, el Hijo del Hombre lleno del Espíritu, vino a salvar a todos'],
          ['Palabras clave', '«Salvador», «hoy», «Espíritu Santo», «oración», «gozo»'],
          ['Versículo clave', 'Lucas 19:10']
        ]),
        bosquejo('Bosquejo de Lucas', [
          ['1:1-4', 'Prólogo: por qué y cómo escribe'],
          ['1:5–2:52', 'Nacimiento e infancia de Juan y de Jesús'],
          ['3:1–4:13', 'Preparación: Juan, bautismo, genealogía y tentación'],
          ['4:14–9:50', 'Ministerio en Galilea, desde la sinagoga de Nazaret'],
          ['9:51–19:27', 'El viaje a Jerusalén: parábolas propias de Lucas'],
          ['19:28–24:53', 'Jerusalén: pasión, resurrección y ascensión']
        ], 'Casi la mitad del contenido de Lucas no aparece en los otros evangelios.'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-lucas-escribe.webp', alt: 'Lucas escribe sobre un rollo de papiro a la luz de una lámpara de aceite, con otros rollos y tablillas a su alrededor', pie: 'Lucas investigó «con diligencia todas las cosas desde su origen» (Lc 1:3).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Puesto que ya muchos han tratado de poner en orden la historia de las cosas que entre nosotros han sido ciertísimas, tal como nos lo enseñaron los que desde el principio lo vieron con sus ojos, y fueron ministros de la palabra, me ha parecido también a mí, después de haber investigado con diligencia todas las cosas desde su origen, escribírtelas por orden, oh excelentísimo Teófilo, para que conozcas bien la verdad de las cosas en las cuales has sido instruido.', ref: 'Lucas 1:1-4' }
      ],
      texto: [
        'Lucas es el único evangelista que explica cómo trabajó. En su prólogo dice que investigó con cuidado desde el origen, consultando a los testigos, y que escribió por orden para que Teófilo conociera «bien la verdad» de lo que le habían enseñado (Lc 1:1-4). Es el evangelio del historiador.',
        { h: 'El autor' },
        'Lucas escribió también Hechos, y los dos libros forman una obra en dos tomos dedicada al mismo Teófilo. En algunas partes de Hechos, el autor pasa a hablar en primera persona plural, «nosotros», porque acompañó a Pablo en sus viajes. Pablo lo llama «el médico amado» (Col 4:14), y fue el único que lo acompañaba en su última prisión (2 Ti 4:11). Probablemente era gentil, el único autor no judío de la Biblia. Durante los dos años que Pablo estuvo preso en Cesarea, Lucas tuvo ocasión de recorrer Judea y Galilea y de hablar con los testigos.',
        { h: 'Para todos' },
        'Lucas presenta a Jesús como el Salvador de todos los hombres. Su genealogía no se detiene en Abraham, sino que llega hasta Adán (Lc 3:38). Da un lugar especial a los que la sociedad dejaba de lado: los pobres, las mujeres, los samaritanos, los publicanos y los pecadores. Solo Lucas cuenta las parábolas del buen samaritano, del hijo pródigo y del fariseo y el publicano, y la historia de Zaqueo, que termina con el versículo clave: «el Hijo del Hombre vino a buscar y a salvar lo que se había perdido» (Lc 19:10).',
        { h: 'El evangelio del Espíritu y de la oración' },
        'Lucas habla del Espíritu Santo casi tanto como Mateo y Marcos juntos. Juan es lleno del Espíritu desde el vientre; María concibe por el Espíritu; Jesús vuelve del Jordán «lleno del Espíritu Santo» y comienza su ministerio en Nazaret leyendo Isaías: «El Espíritu del Señor está sobre mí» (Lc 4:18). Lucas muestra también a Jesús orando en cada momento decisivo. Y el libro termina con la promesa del Padre: los discípulos deben quedarse en Jerusalén hasta ser investidos de poder desde lo alto (Lc 24:49). Hechos contará cómo se cumplió.',
        { ir: { t: 'Abrir el estudio de Lucas', a: '../../lucas/' } },
        { ir: { t: 'Ver «Lucas-Hechos, una obra en dos tomos» en Hechos', a: '../../hechos/#introduccion/3' } }
      ],
      pensar: 'Lucas muestra a Jesús orando antes de cada decisión importante. ¿Qué lugar ocupa la oración en tus decisiones?'
    },
    {
      id: 'juan', n: 'Juan: para que creáis', ref: 'Juan 1:1-18; 20:30-31; 21:20-24', fecha: [85, 90],
      visual: [
        ficha('El evangelio según Juan', [
          ['Autor', 'El apóstol Juan, «el discípulo a quien amaba Jesús» (Jn 21:20-24)'],
          ['Primeros lectores', 'Creyentes de Asia, judíos y gentiles'],
          ['Fecha', 'Hacia el 85–90 d.C.'],
          ['Lugar', 'Éfeso, según la tradición antigua'],
          ['Tema', 'Jesús es el Cristo, el Hijo eterno de Dios; quien cree en Él tiene vida'],
          ['Palabras clave', '«Creer» (casi cien veces), «vida», «luz», «verdad», «permanecer», «señal»'],
          ['Versículo clave', 'Juan 20:31']
        ]),
        bosquejo('Bosquejo de Juan', [
          ['1:1-18', 'Prólogo: el Verbo eterno hecho carne'],
          ['1:19–12:50', 'El libro de las señales: siete señales y el rechazo creciente'],
          ['13–17', 'El aposento alto: lavamiento de pies, discurso de despedida y oración'],
          ['18–20', 'Pasión y resurrección: la hora de su gloria'],
          ['21', 'Epílogo: Pedro restaurado y el testimonio del discípulo amado']
        ], 'Siete señales y siete «Yo soy» con imagen ordenan el libro.'),
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-juan-efeso.webp', alt: 'En una casa de Éfeso, Juan, anciano de barba blanca, dicta a un discípulo joven que escribe en un papiro, mientras algunos ancianos de la iglesia escuchan', pie: 'Según Ireneo, Juan escribió su evangelio cuando vivía en Éfeso.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Hizo además Jesús muchas otras señales en presencia de sus discípulos, las cuales no están escritas en este libro. Pero éstas se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre.', ref: 'Juan 20:30-31' }
      ],
      texto: [
        'El cuarto evangelio es distinto de los otros tres. No comienza en Belén ni en el Jordán, sino en la eternidad: «En el principio era el Verbo» (Jn 1:1). Cerca del noventa por ciento de su contenido no aparece en los sinópticos. No hay parábolas como las de Mateo, Marcos y Lucas, ni exorcismos, pero sí largos diálogos y discursos, y siete milagros escogidos que Juan llama señales.',
        { h: 'El autor' },
        'El libro dice que lo escribió «el discípulo a quien amaba Jesús», el que se recostó a su lado en la última cena, y añade: «sabemos que su testimonio es verdadero» (Jn 21:20-24). Ese discípulo nunca se nombra, pero aparece junto a Pedro una y otra vez. Ireneo, discípulo de Policarpo, que a su vez había conocido a Juan, dice que el apóstol Juan publicó el evangelio mientras vivía en Éfeso. Los detalles del libro, como las fiestas, la geografía de Jerusalén y la hora de los hechos, son los de un testigo ocular judío.',
        { h: 'El propósito' },
        'Juan es el único evangelista que dice abiertamente para qué escribió: «para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:31). Todo el libro sirve a ese propósito. Las señales, desde el agua convertida en vino hasta la resurrección de Lázaro, revelan quién es Jesús. Los siete «Yo soy», como el pan de vida y la luz del mundo, unen su persona al nombre de Dios revelado a Moisés.',
        { h: 'Un evangelio que completa' },
        'Escrito cuando los otros tres ya circulaban, Juan los completa. Narra el ministerio en Judea y las visitas de Jesús a Jerusalén en las fiestas, que muestran que su ministerio duró unos tres años. Insiste en la divinidad de Cristo y también en su humanidad: Jesús se cansa, tiene sed y llora. Es el evangelio que más enseña sobre el Espíritu Santo como el Consolador que el Padre enviaría (Jn 14–16).',
        { ir: { t: 'Ver «Los siete Yo soy de Juan» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#persona/2' } }
      ],
      pensar: 'Juan escribió «para que creáis… y para que creyendo, tengáis vida» (Jn 20:31). ¿Cuál de las señales de Juan ha fortalecido más tu fe?'
    },
    {
      id: 'cuatro', n: 'Cuatro retratos de un mismo Cristo', ref: 'Deuteronomio 19:15; Ezequiel 1:10; Apocalipsis 4:7; Juan 21:25', fecha: [50, 90],
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cuatro.svg', alt: 'Cuatro columnas con los cuatro evangelios: Mateo presenta al Rey, Marcos al Siervo, Lucas al Hombre perfecto y Juan al Hijo de Dios, con sus versículos clave y sus primeros lectores', pie: 'Cuatro retratos de Jesús: el mismo Señor visto desde cuatro ángulos.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Un mismo hecho, cuatro testigos',
          cab: ['Evangelio', 'La inscripción sobre la cruz'],
          filas: [
            ['Mateo 27:37', 'ESTE ES JESÚS, EL REY DE LOS JUDÍOS'],
            ['Marcos 15:26', 'EL REY DE LOS JUDÍOS'],
            ['Lucas 23:38', 'ESTE ES EL REY DE LOS JUDÍOS'],
            ['Juan 19:19', 'JESÚS NAZARENO, REY DE LOS JUDÍOS']
          ],
          nota: 'La inscripción estaba en hebreo, griego y latín (Jn 19:20). Cada evangelista resume; ninguno contradice a los otros.'
        } }
      ],
      texto: [
        '¿Por qué hay cuatro evangelios y no uno solo? La ley de Moisés pedía dos o tres testigos para establecer un hecho (Dt 19:15). Dios nos dio cuatro testigos independientes de la vida de su Hijo. Cada uno lo vio desde un ángulo y escribió para lectores distintos, como cuatro fotografías de un mismo edificio tomadas desde sus cuatro costados.',
        { h: 'Cuatro énfasis' },
        'El esquema resume una manera tradicional de presentarlos. Mateo muestra a Jesús como el Rey, hijo de David, que cumple las profecías. Marcos lo muestra como el Siervo que obra con poder y da su vida. Lucas, como el Hombre perfecto, lleno del Espíritu, amigo de pecadores, que vino a salvar a todos. Juan, como el Hijo eterno de Dios hecho carne. Desde antiguo, los cristianos relacionaron los cuatro evangelios con los cuatro rostros de los seres vivientes de Ezequiel y Apocalipsis: león, buey, hombre y águila (Ez 1:10; Ap 4:7). Los autores antiguos no se pusieron de acuerdo en qué rostro corresponde a cada evangelio, y la Biblia no lo dice; es una ayuda para recordar, no una enseñanza.',
        { h: 'Diferencias que no son contradicciones' },
        'Al comparar los evangelios aparecen diferencias de orden, de detalle o de palabras. Es lo que se espera de testigos honestos: si cuatro relatos fueran idénticos palabra por palabra, se sospecharía que fueron copiados. La tabla muestra un ejemplo. La inscripción sobre la cruz aparece con palabras distintas en cada evangelio, pero los cuatro dicen lo mismo: Jesús, el Rey de los judíos. Además, estaba escrita en tres lenguas, y cada evangelista pudo traducir o resumir una de ellas.',
        'Juan termina su evangelio diciendo que, si se escribieran una por una todas las cosas que hizo Jesús, ni aun en el mundo cabrían los libros (Jn 21:25). Cada evangelista eligió. Leídos juntos, dan un retrato más completo que cualquiera por separado.',
        'La Armonía de los evangelios del sitio pone los cuatro textos en columnas paralelas, en orden cronológico, para leerlos juntos.',
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } },
        { ejercicio: {
          pregunta: 'Al comparar los evangelios, ¿cómo conviene entender las diferencias de detalle entre ellos?',
          opciones: [
            { t: 'Como el testimonio de testigos distintos, que eligen, resumen y ordenan sin contradecirse.', ok: true, por_que: 'Cada evangelista escribió con su propósito; las diferencias completan el cuadro.' },
            { t: 'Como errores que muestran que los evangelios no son confiables.', ok: false, por_que: 'Las diferencias de detalle son normales entre testigos honestos y, examinadas, se armonizan.' },
            { t: 'Como prueba de que los cuatro copiaron de un mismo libro.', ok: false, por_que: 'Si hubieran copiado sin más, no habría diferencias; Juan, además, es casi del todo independiente.' }
          ],
          explicacion: 'Cuatro testigos con sus propios énfasis dan un retrato más rico y más creíble de Jesús.'
        } }
      ],
      pensar: 'Cada evangelio muestra un aspecto de Jesús: Rey, Siervo, Hombre y Dios. ¿Cuál de esos aspectos necesitas contemplar más en esta etapa de tu vida?'
    },
    {
      id: 'sinoptico', n: 'Los sinópticos y Juan', ref: 'Lucas 1:1-4; Juan 14:26; 2 Pedro 1:21', fecha: [50, 90],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Material compartido y propio (aproximado)',
          cab: ['Evangelio', 'Compartido con otros sinópticos', 'Propio'],
          filas: [
            ['Marcos', 'Casi todo su contenido aparece también en Mateo o en Lucas', 'Muy poco (por ejemplo, Mr 4:26-29; 7:31-37; 8:22-26)'],
            ['Mateo', 'Buena parte, con Marcos y con Lucas', 'Los magos, varias parábolas, la gran comisión'],
            ['Lucas', 'Cerca de la mitad', 'El buen samaritano, el hijo pródigo, Zaqueo, Emaús'],
            ['Juan', 'Muy poco', 'Casi todo: Caná, Nicodemo, la samaritana, Lázaro, Juan 13–17']
          ],
          nota: 'Proporciones aproximadas, que varían según cómo se cuenten los pasajes.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho.', ref: 'Juan 14:26' }
      ],
      texto: [
        'Mateo, Marcos y Lucas se parecen tanto que pueden leerse en columnas paralelas. Por eso se llaman sinópticos, que significa «vistos juntos». Cuentan muchos de los mismos hechos, a veces en el mismo orden y con las mismas palabras. Juan, en cambio, sigue un camino propio. La pregunta de cómo se relacionan los tres primeros se llama el problema sinóptico.',
        { h: 'Por qué se parecen' },
        'Los tres se basan en el mismo testimonio apostólico, que se predicaba y se enseñaba en las iglesias. Pero los parecidos en el orden y en las palabras exactas, en griego, hacen pensar que unos conocieron el escrito de otros. Lucas mismo dice que muchos habían escrito antes que él y que investigó con diligencia (Lc 1:1-3). Usar fuentes no está reñido con la inspiración: el Espíritu Santo guió a los autores en su investigación, en su memoria y en su escritura. Jesús había prometido que el Espíritu les recordaría todo lo que Él les había dicho (Jn 14:26).',
        { posturas: {
          titulo: '¿Cuál se escribió primero?',
          a: { n: 'Marcos primero', t: 'La postura más extendida hoy, también entre muchos estudiosos evangélicos, sostiene que Marcos se escribió primero y que Mateo y Lucas lo usaron, junto con una colección de dichos de Jesús que ambos comparten (a la que se suele llamar Q, por la palabra alemana que significa fuente). Se apoya en que casi todo Marcos está en los otros dos, y en que Mateo y Lucas casi nunca coinciden entre sí contra Marcos.' },
          b: { n: 'Mateo primero', t: 'Los escritores cristianos de los primeros siglos, como Papías, Ireneo y Agustín, dicen que Mateo escribió primero, y así está ordenado en la Biblia. Algunos estudiosos actuales defienden esta tradición y piensan que Marcos resumió a Mateo y a Lucas, o que los tres dependen del testimonio oral de los apóstoles más que de un documento.' },
          c: 'Este recurso no toma partido: las dos posturas son defendibles y ninguna doctrina depende de ellas. Las dos aceptan que los evangelios transmiten fielmente lo que Jesús hizo y enseñó, contado por testigos y por quienes los escucharon. Las teorías que niegan esa fidelidad no se siguen. La ruta El problema sinóptico, dentro de la Armonía de los evangelios, estudia el tema con ejemplos.'
        } },
        { h: 'Juan, el que completa' },
        'Juan conoce a los sinópticos y no repite lo que ellos ya contaron. Su independencia es un testimonio más: un cuarto testigo que confirma lo esencial (la muerte y resurrección de Jesús, la multiplicación de los panes, la entrada en Jerusalén) y agrega lo que los otros no dijeron.',
        { ir: { t: 'Estudiar el problema sinóptico en la Armonía', a: '../../evangelios/#sinoptico/1' } },
        { ir: { t: 'Abrir la Armonía de los evangelios', a: '../../evangelios/' } }
      ],
      pensar: 'El Espíritu prometió recordar a los apóstoles todo lo que Jesús les dijo (Jn 14:26). ¿Qué confianza te da saber que el mismo Espíritu que los guió te ayuda hoy a entender lo que escribieron?'
    }
  ];

  /* ---------------- III. Hechos ---------------- */
  const hechos = [
    {
      id: 'hechos', n: 'Hechos: hasta lo último de la tierra', ref: 'Hechos 1:1-8; 2:1-4; 28:30-31', fecha: 62,
      visual: [
        ficha('Hechos de los Apóstoles', [
          ['Autor', 'Lucas, el mismo del tercer evangelio (Hch 1:1)'],
          ['Destinatario', 'Teófilo, y con él toda la iglesia'],
          ['Fecha', 'Hacia el 62 d.C., cuando termina la narración'],
          ['Lugar', 'Roma, probablemente'],
          ['Tema', 'El Espíritu Santo lleva el evangelio de Jerusalén a Roma por medio de la iglesia'],
          ['Período', 'Del año 33 (ascensión y Pentecostés) al 62 (Pablo preso en Roma)'],
          ['Versículo clave', 'Hechos 1:8']
        ]),
        bosquejo('Bosquejo de Hechos', [
          ['1–7', 'Jerusalén: Pentecostés, la primera iglesia, Esteban'],
          ['8–12', 'Judea y Samaria: Felipe, Saulo, Cornelio, Antioquía'],
          ['13–28', 'Hasta lo último de la tierra: los viajes de Pablo y su llegada a Roma']
        ], 'El bosquejo sigue el plan de Hechos 1:8.'),
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Jerusalén: Pentecostés y la primera iglesia (Hch 1–7).', fecha: 33, estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-30'], lugares: ['jerusalen'] } },
          { t: 'Judea, Samaria y Antioquía (Hch 8–12).', fecha: 44, estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-44'], lugares: ['jerusalen', 'samaria', 'cesarea', 'damasco', 'antioquia'] } },
          { t: 'Los tres viajes de Pablo (Hch 13–21).', fecha: 57, estado: { view: MEDIT, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'efeso', 'corinto', 'filipos', 'jerusalen'], trazos: ['viaje-1', 'viaje-2', 'viaje-3'] } },
          { t: 'Preso hasta Roma (Hch 27–28).', fecha: 62, estado: { view: MEDIT, capas: ['roma-14', 'iglesia-62'], lugares: ['cesarea', 'roma'], trazos: ['viaje-roma'] } }
        ] },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.', ref: 'Hechos 1:8' }
      ],
      texto: [
        'Hechos es el puente del Nuevo Testamento. Une los evangelios con las cartas: sin él no sabríamos quién era Pablo, cómo nacieron las iglesias a las que escribió ni cómo el evangelio pasó de un pequeño grupo de judíos en Jerusalén a ciudades de todo el imperio.',
        { h: 'El segundo tomo' },
        'Lucas comienza recordando a Teófilo su «primer tratado», el evangelio, donde habló de lo que Jesús «comenzó a hacer y a enseñar» (Hch 1:1). Hechos cuenta lo que Jesús siguió haciendo, ya ascendido, por medio de su Espíritu y de su iglesia. Por eso algunos lo llaman los hechos del Espíritu Santo.',
        { h: 'Un plan en un versículo' },
        'Antes de ascender, Jesús dijo a sus discípulos: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra» (Hch 1:8). Ese versículo es el índice del libro, como muestran el bosquejo y el mapa. En el día de Pentecostés, los discípulos fueron llenos del Espíritu y hablaron en otras lenguas (Hch 2:4). Desde allí, el testimonio avanza por círculos cada vez más amplios, hasta llegar a Roma, la capital del mundo.',
        { h: 'Pedro y Pablo' },
        'La primera mitad del libro sigue sobre todo a Pedro; la segunda, a Pablo. Lucas acompañó a Pablo en parte de sus viajes, y en esas secciones escribe «nosotros». Su precisión en nombres de autoridades, títulos y lugares ha sido confirmada una y otra vez por la arqueología.',
        { h: 'Un final abierto' },
        'Hechos termina con Pablo preso en Roma, en una casa alquilada, predicando el reino de Dios «abiertamente y sin impedimento» (Hch 28:31). No cuenta el resultado de su juicio, ni la persecución de Nerón, ni la muerte de Pablo y de Pedro. Lo más probable es que Lucas escribiera en ese momento, hacia el año 62. El final abierto también invita al lector: la historia del testimonio sigue.',
        'El sitio tiene un estudio completo de Hechos, con sus rutas de introducción, panorama, comentario y teología, y un recurso con los viajes de Pablo.',
        { ir: { t: 'Abrir el estudio de Hechos de los Apóstoles', a: '../../hechos/' } },
        { ir: { t: 'Abrir Los viajes de Pablo', a: '../../viajes-pablo/' } }
      ],
      pensar: 'Hechos termina sin un final cerrado: la historia del testimonio sigue. ¿Qué capítulo de esa historia está escribiendo el Espíritu Santo en tu vida y en tu iglesia?'
    }
  ];

  window.__NT.evangelios = evangelios;
  window.__NT.hechos = hechos;
})();
/* Introducción al Nuevo Testamento · parte 3: IV. Las cartas de Pablo */
(() => {
  const ORIENTE = [[33.5, 11], [43.5, 39]];   // de Roma a Siria
  const EGEO = [[33.5, 20.0], [42.2, 37.0]];
  const ASIA_MENOR = [[34.2, 29.0], [41.6, 38.0]];
  const ficha = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Ficha', tabla: { titulo, cab: ['', ''], filas, nota } });
  const bosquejo = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Bosquejo', tabla: { titulo, cab: ['Capítulos', 'Contenido'], filas, nota } });
  const ESTUDIO = 'Esta carta tendrá su propio estudio de libro en el sitio, hoy en preparación.';

  const pablo = [
    {
      id: 'pablo', n: 'Pablo, el escritor', ref: 'Hechos 9:15; Romanos 15:20; 2 Corintios 11:28; 2 Pedro 3:15-16', fecha: [48, 67],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las trece cartas de Pablo en orden aproximado',
          cab: ['Carta', 'Escrita desde', 'Fecha aprox.', 'Momento'],
          filas: [
            ['Gálatas', 'Antioquía (o Éfeso)', 'c. 48–49 (o c. 55)', 'Antes del concilio (o en el tercer viaje)'],
            ['1 y 2 Tesalonicenses', 'Corinto', 'c. 50–51', 'Segundo viaje'],
            ['1 Corintios', 'Éfeso', 'c. 55–56', 'Tercer viaje'],
            ['2 Corintios', 'Macedonia', 'c. 56', 'Tercer viaje'],
            ['Romanos', 'Corinto', 'c. 57', 'Fin del tercer viaje'],
            ['Efesios, Colosenses, Filemón', 'Roma', 'c. 60–61', 'Primera prisión'],
            ['Filipenses', 'Roma', 'c. 61–62', 'Primera prisión'],
            ['1 Timoteo, Tito', 'Macedonia (?)', 'c. 62–64', 'Después de Hechos'],
            ['2 Timoteo', 'Roma', 'c. 66–67', 'Segunda prisión']
          ],
          nota: 'Fechas aproximadas, las de Cronología del Nuevo Testamento. El lugar y la fecha de algunas cartas se discuten.'
        } },
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Las primeras cartas: Gálatas y Tesalonicenses (c. 48–51).', fecha: [48, 51], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-52'], lugares: ['antioquia', 'r-galacia', 'corinto', 'tesalonica'], trazos: ['nt-galatas', 'nt-tesalonicenses'] } },
          { t: 'Las grandes cartas del tercer viaje: Corintios y Romanos (c. 55–57).', fecha: [55, 57], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'corinto', 'filipos', 'roma'], trazos: ['nt-1corintios', 'nt-romanos'] } },
          { t: 'Las cartas de la prisión, desde Roma (c. 60–62).', fecha: [60, 62], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'efeso', 'colosas', 'filipos'], trazos: ['nt-colosenses', 'nt-filipenses'] } },
          { t: 'Las cartas pastorales (c. 62–67).', fecha: [62, 67], estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['r-macedonia', 'efeso', 'creta-isla', 'roma'], trazos: ['nt-1timoteo', 'nt-tito', 'nt-2timoteo'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: '../viajes-pablo/img/vp-carta.webp', alt: 'En una casa de Corinto, Pablo dicta una carta a un secretario que escribe en un papiro, mientras Silas y Timoteo escuchan', pie: 'Casi todas las cartas de Pablo nacieron en el camino.', origen: 'ia' }
      ],
      texto: [
        'Trece de los veintisiete libros del Nuevo Testamento llevan el nombre de Pablo. Ningún otro autor bíblico escribió tantos libros. Sus cartas forman casi una cuarta parte del Nuevo Testamento y han dado forma a la doctrina cristiana desde el siglo I.',
        { h: 'El hombre' },
        'Saulo de Tarso fue un fariseo formado en Jerusalén que persiguió a la iglesia hasta que Cristo resucitado le salió al encuentro camino a Damasco. El Señor dijo de él: «instrumento escogido me es éste, para llevar mi nombre en presencia de los gentiles, y de reyes, y de los hijos de Israel» (Hch 9:15). Durante unos treinta años recorrió el imperio fundando iglesias donde Cristo no había sido nombrado (Ro 15:20).',
        { h: 'Cartas de un pastor' },
        'Pablo no escribía tratados para una biblioteca. Escribía a iglesias que había fundado y que no podía visitar, para responder preguntas, corregir errores, animar en la persecución o preparar una visita. Cargaba cada día «la preocupación por todas las iglesias» (2 Co 11:28). Sus cartas son la voz de un pastor a la distancia. Por eso, para entenderlas, ayuda saber en qué momento de su vida las escribió, como muestran la tabla y el mapa.',
        { h: 'Cuatro grupos' },
        'Las cartas pueden agruparse según el momento en que se escribieron. Las primeras, Gálatas y Tesalonicenses, defienden el evangelio de la gracia y enseñan sobre la venida del Señor. Las grandes cartas del tercer viaje, Corintios y Romanos, exponen el evangelio y corrigen la vida de la iglesia. Las cartas de la prisión, escritas desde Roma, exaltan a Cristo y a su iglesia. Las cartas pastorales, a Timoteo y a Tito, ordenan las iglesias para cuando Pablo ya no esté.',
        'Algunos críticos modernos sostienen que no todas las cartas son de Pablo. La iglesia antigua las recibió todas como suyas, y este recurso sigue esa postura; la estación sobre 1 Timoteo y Tito presenta la discusión.',
        { ir: { t: 'Ver «Las cartas en su contexto» en Los viajes de Pablo', a: '../../viajes-pablo/#cartas/1' } },
        { ir: { t: 'Ver «Las trece cartas de Pablo» en Cronología del Nuevo Testamento', a: '../../cronologia-nuevo-testamento/#libros/3' } }
      ],
      pensar: 'Pedro reconoció que en las cartas de Pablo hay «algunas difíciles de entender» (2 P 3:16). ¿Qué te ayudaría a leerlas con más paciencia, siguiendo su argumento completo?'
    },
    {
      id: 'galatas', n: 'Gálatas: libres por la gracia', ref: 'Gálatas 1:6-9; 2:16, 20; 3:28; 5:1, 22-23', fecha: [48, 49],
      visual: [
        ficha('La carta a los Gálatas', [
          ['Autor', 'Pablo (Ga 1:1)'],
          ['Destinatarios', 'Las iglesias de Galacia, probablemente las del sur: Antioquía de Pisidia, Iconio, Listra y Derbe'],
          ['Fecha', 'Hacia el 48–49 d.C., antes del concilio de Jerusalén (se discute)'],
          ['Lugar', 'Antioquía de Siria (o Éfeso, si es posterior)'],
          ['Ocasión', 'Maestros judaizantes enseñaban que los gentiles debían circuncidarse y guardar la ley para ser salvos'],
          ['Tema', 'El hombre es justificado por la fe en Cristo, no por las obras de la ley'],
          ['Versículo clave', 'Gálatas 2:16; también 5:1']
        ]),
        bosquejo('Bosquejo de Gálatas', [
          ['1–2', 'Personal: Pablo defiende su apostolado y su evangelio, recibido de Cristo'],
          ['3–4', 'Doctrinal: Abraham fue justificado por la fe; la ley fue un ayo hasta Cristo'],
          ['5–6', 'Práctico: la libertad cristiana y la vida en el Espíritu']
        ]),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'antioquia-pisidia', 'iconio', 'listra', 'derbe', 'r-galacia'], trazos: ['nt-galatas'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'sabiendo que el hombre no es justificado por las obras de la ley, sino por la fe de Jesucristo, nosotros también hemos creído en Jesucristo, para ser justificados por la fe de Cristo y no por las obras de la ley, por cuanto por las obras de la ley nadie será justificado.', ref: 'Gálatas 2:16' }
      ],
      texto: [
        'Gálatas es la carta más urgente de Pablo. No tiene acción de gracias al comienzo, como casi todas las demás. Después del saludo, va directo al problema: «Estoy maravillado de que tan pronto os hayáis alejado del que os llamó por la gracia de Cristo, para seguir un evangelio diferente» (Ga 1:6).',
        { h: 'La ocasión' },
        'Después de que Pablo fundó las iglesias de Galacia, llegaron maestros desde Judea que enseñaban que los gentiles debían circuncidarse y guardar la ley de Moisés para ser salvos. También ponían en duda la autoridad de Pablo. Él responde con firmeza, porque estaba en juego el evangelio mismo: si la salvación depende de la ley, la muerte de Cristo fue en vano (Ga 2:21).',
        { h: 'El mensaje' },
        'El centro de la carta es la justificación por la fe: «el hombre no es justificado por las obras de la ley, sino por la fe de Jesucristo» (Ga 2:16). Abraham fue justificado por creer, antes de la ley (Ga 3:6). La ley tuvo un papel, como un ayo que cuida a un niño hasta que llega a la edad adulta, pero vino la fe y ya no estamos bajo ayo (Ga 3:24-25). En Cristo ya no hay judío ni griego, esclavo ni libre, varón ni mujer: todos son uno (Ga 3:28). Esa libertad no es licencia para pecar, sino vida guiada por el Espíritu, que produce su fruto (Ga 5:22-23).',
        { posturas: {
          titulo: '¿A quiénes y cuándo?',
          a: { n: 'Galacia del sur, hacia el 48–49', t: 'Las iglesias serían las del primer viaje, en la provincia romana de Galacia. La carta no menciona el concilio de Jerusalén, que habría resuelto la misma cuestión; por eso se habría escrito antes, y sería la primera carta de Pablo. La visita de Gálatas 2:1-10 sería la de la ofrenda (Hch 11:30).' },
          b: { n: 'Galacia del norte, hacia el 55', t: 'Las iglesias estarían en el antiguo territorio de los gálatas, más al norte, que Pablo habría visitado en su segundo y tercer viaje (Hch 16:6; 18:23). La carta se habría escrito desde Éfeso, y Gálatas 2 describiría el concilio de Hechos 15.' },
          c: 'Este recurso sigue la primera postura, la misma de Los viajes de Pablo, por las razones dadas, y nota que la segunda tiene buenos defensores. El mensaje de la carta es el mismo en las dos.'
        } },
        { ir: { t: 'Ver «Gálatas: libres por la gracia» en Los viajes de Pablo', a: '../../viajes-pablo/#cartas/2' } },
        ESTUDIO
      ],
      pensar: 'Pablo escribió: «Estad, pues, firmes en la libertad con que Cristo nos hizo libres» (Ga 5:1). ¿Hay alguna regla humana que te haga sentir que debes ganarte el amor de Dios?'
    },
    {
      id: 'tesalonicenses', n: '1 y 2 Tesalonicenses: su venida', ref: '1 Tesalonicenses 1:9-10; 4:13-18; 5:1-11; 2 Tesalonicenses 2:1-12; 3:6-13', fecha: [50, 51],
      visual: [
        ficha('Las cartas a los Tesalonicenses', [
          ['Autor', 'Pablo, con Silvano (Silas) y Timoteo (1 Ts 1:1; 2 Ts 1:1)'],
          ['Destinatarios', 'La iglesia de Tesalónica, capital de Macedonia, fundada en el segundo viaje (Hch 17:1-9)'],
          ['Fecha', 'Hacia el 50–51 d.C., con pocos meses de diferencia'],
          ['Lugar', 'Corinto'],
          ['Ocasión', '1 Ts: buenas noticias de Timoteo y preguntas sobre los creyentes que habían muerto. 2 Ts: una enseñanza falsa decía que el día del Señor ya había llegado'],
          ['Tema', 'Vivir en santidad esperando la venida del Señor'],
          ['Versículo clave', '1 Tesalonicenses 4:16-17; 2 Tesalonicenses 2:3']
        ]),
        bosquejo('Bosquejo de las dos cartas', [
          ['1 Ts 1–3', 'Gratitud por una iglesia ejemplar y defensa del ministerio de Pablo'],
          ['1 Ts 4–5', 'Santidad, trabajo, la venida del Señor por los suyos y el día del Señor'],
          ['2 Ts 1', 'Ánimo en la persecución: el juicio justo de Dios'],
          ['2 Ts 2', 'Lo que debe ocurrir antes del día del Señor: la apostasía y el hombre de pecado'],
          ['2 Ts 3', 'Oración, trabajo y disciplina']
        ], 'Cada capítulo de 1 Tesalonicenses termina mencionando la venida del Señor.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['filipos', 'tesalonica', 'berea', 'atenas', 'corinto'], trazos: ['nt-tesalonicenses'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor.', ref: '1 Tesalonicenses 4:16-17' }
      ],
      texto: [
        'Pablo pasó pocas semanas en Tesalónica. Una persecución lo obligó a salir de noche hacia Berea (Hch 17:10). Preocupado por esa iglesia tan nueva, envió a Timoteo desde Atenas, y cuando este volvió a Corinto con buenas noticias, Pablo escribió la primera carta. Es, con Gálatas, uno de los escritos cristianos más antiguos que tenemos.',
        { h: 'Una iglesia ejemplar' },
        'Los tesalonicenses se habían convertido «de los ídolos a Dios, para servir al Dios vivo y verdadero, y esperar de los cielos a su Hijo» (1 Ts 1:9-10). Esas tres palabras, servir, esperar y convertirse, resumen la carta. A pesar de la persecución, su fe se comentaba en toda Macedonia y Acaya.',
        { h: 'Los que duermen' },
        'Algunos creyentes habían muerto, y la iglesia se preguntaba qué pasaría con ellos cuando Cristo volviera. Pablo responde para que no se entristezcan «como los otros que no tienen esperanza» (1 Ts 4:13). El Señor mismo descenderá del cielo, los muertos en Cristo resucitarán primero, y los que vivan serán arrebatados juntamente con ellos para recibir al Señor en el aire (1 Ts 4:16-17). Este pasaje es la enseñanza más clara del arrebatamiento de la iglesia. Pablo agrega que Dios no nos ha puesto para ira, sino para alcanzar salvación (1 Ts 5:9).',
        { h: 'La segunda carta' },
        'Poco después, alguien enseñó, incluso con una carta falsa atribuida a Pablo, que el día del Señor ya había llegado (2 Ts 2:2). Pablo explica que antes vendrá la apostasía y se manifestará el hombre de pecado, que ahora es detenido. También corrige a quienes habían dejado de trabajar esperando el fin: «Si alguno no quiere trabajar, tampoco coma» (2 Ts 3:10). Esperar al Señor no es quedarse de brazos cruzados.',
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Pablo terminó su enseñanza sobre la venida del Señor diciendo: «alentaos los unos a los otros con estas palabras» (1 Ts 4:18). ¿A quién podrías animar hoy con esa esperanza?'
    },
    {
      id: '1corintios', n: '1 Corintios: una iglesia con dones y problemas', ref: '1 Corintios 1:2, 10; 12:7; 13:13; 14:40; 15:3-4', fecha: [55, 56],
      visual: [
        ficha('La primera carta a los Corintios', [
          ['Autor', 'Pablo, con Sóstenes (1 Co 1:1)'],
          ['Destinatarios', 'La iglesia de Corinto, fundada en el segundo viaje (Hch 18:1-18)'],
          ['Fecha', 'Hacia el 56 d.C.'],
          ['Lugar', 'Éfeso, en el tercer viaje (1 Co 16:8)'],
          ['Ocasión', 'Noticias de divisiones e inmoralidad, y una carta de la iglesia con preguntas (1 Co 1:11; 7:1)'],
          ['Tema', 'Una iglesia santificada en Cristo, que debe vivir en unidad, santidad, amor y orden'],
          ['Versículo clave', '1 Corintios 1:2; también 13:13']
        ]),
        bosquejo('Bosquejo de 1 Corintios', [
          ['1–4', 'Las divisiones y la sabiduría de la cruz'],
          ['5–6', 'Inmoralidad y pleitos entre hermanos'],
          ['7', 'Matrimonio y soltería'],
          ['8–10', 'La carne sacrificada a los ídolos y la libertad cristiana'],
          ['11', 'El orden en el culto y la Cena del Señor'],
          ['12–14', 'Los dones espirituales, el amor y el orden'],
          ['15', 'La resurrección'],
          ['16', 'La ofrenda para Jerusalén y saludos']
        ], 'Desde el capítulo 7, Pablo responde las preguntas de la carta de los corintios: «En cuanto a…»'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'corinto', 'cencrea', 'atenas'], trazos: ['nt-1corintios'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-pablo-galion.webp', alt: 'Pablo de pie ante el procónsul Galión, sentado en una tribuna de piedra elevada en el foro de Corinto', pie: 'Corinto, la ciudad de Galión (Hch 18:12), era un puerto rico y cosmopolita.', origen: 'ia' }
      ],
      texto: [
        'Corinto era una ciudad portuaria, rica y famosa por su inmoralidad. Pablo vivió allí un año y medio, y nació una iglesia numerosa y llena de dones (1 Co 1:7). Pero también tenía muchos problemas. Primera de Corintios es la carta en que Pablo los enfrenta uno por uno.',
        { h: 'Los problemas' },
        'La iglesia estaba dividida en grupos que seguían a distintos líderes: «Yo soy de Pablo; y yo de Apolos; y yo de Cefas; y yo de Cristo» (1 Co 1:12). Toleraba un caso de inmoralidad grave, los hermanos se llevaban a juicio ante los tribunales y la Cena del Señor se había convertido en ocasión de desigualdad. Además, la iglesia había escrito a Pablo con preguntas sobre el matrimonio, la comida ofrecida a los ídolos, los dones espirituales y la resurrección.',
        { h: 'La respuesta' },
        'Pablo responde siempre desde la cruz y desde la identidad de los creyentes. Los saluda como «santificados en Cristo Jesús, llamados a ser santos» (1 Co 1:2): ya pertenecen a Dios, y deben vivir como tales. A las divisiones opone la sabiduría de la cruz. A la inmoralidad, que el cuerpo es templo del Espíritu Santo (1 Co 6:19).',
        { h: 'Los dones y el amor' },
        'Los capítulos 12 a 14 son la enseñanza más amplia de la Biblia sobre los dones del Espíritu. Pablo no los prohíbe ni los menosprecia: «a cada uno le es dada la manifestación del Espíritu para provecho» (1 Co 12:7), y desea que todos hablen en lenguas y, más aún, que profeticen (1 Co 14:5). Pero los dones deben ejercerse con amor, el camino más excelente (1 Co 13), y con orden: «hágase todo decentemente y con orden» (1 Co 14:40).',
        { h: 'La resurrección' },
        'La carta culmina con el capítulo 15, que resume el evangelio, enumera a los testigos del resucitado y explica la resurrección del cuerpo. Si Cristo no resucitó, la fe es vana; pero Cristo ha resucitado, primicias de los que durmieron (1 Co 15:17-20).',
        ESTUDIO
      ],
      pensar: 'Pablo puso el capítulo del amor en medio de su enseñanza sobre los dones. ¿Cómo se ve el amor en la manera en que tú usas los dones que Dios te dio?'
    },
    {
      id: '2corintios', n: '2 Corintios: el poder en la debilidad', ref: '2 Corintios 2:4; 4:7; 5:17-21; 8:9; 11:23-33; 12:9-10', fecha: 56,
      visual: [
        ficha('La segunda carta a los Corintios', [
          ['Autor', 'Pablo, con Timoteo (2 Co 1:1)'],
          ['Destinatarios', 'La iglesia de Corinto y los santos de toda Acaya'],
          ['Fecha', 'Hacia el 56 d.C.'],
          ['Lugar', 'Macedonia, en el tercer viaje (2 Co 7:5-7)'],
          ['Ocasión', 'Tito trae noticias: la mayoría se ha arrepentido, pero falsos apóstoles atacan a Pablo'],
          ['Tema', 'El ministerio del nuevo pacto: el poder de Dios se perfecciona en la debilidad'],
          ['Versículo clave', '2 Corintios 12:9; también 4:7']
        ]),
        bosquejo('Bosquejo de 2 Corintios', [
          ['1–7', 'El ministerio de Pablo: consuelo, gloria del nuevo pacto, reconciliación'],
          ['8–9', 'La ofrenda para los santos de Jerusalén'],
          ['10–13', 'Defensa frente a los falsos apóstoles: gloriarse en la debilidad']
        ], 'Es la carta más personal de Pablo.'),
        { tipo: 'imagen', titulo: 'Foto', src: 'img/foto-p46.jpg', alt: 'Una hoja de papiro con una columna de letras griegas mayúsculas en tinta oscura; el borde inferior está roto', pie: 'Una hoja del papiro 46, hacia el año 200, con 2 Corintios 11:33–12:9, la huida en el canasto y «Bástate mi gracia».', origen: 'foto', licencia: 'Biblioteca Chester Beatty, Dublín. Dominio público, vía Wikimedia Commons', completa: true },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'troas', 'filipos', 'tesalonica', 'corinto'], trazos: ['nt-2corintios'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo. Por lo cual, por amor a Cristo me gozo en las debilidades, en afrentas, en necesidades, en persecuciones, en angustias; porque cuando soy débil, entonces soy fuerte.', ref: '2 Corintios 12:9-10' }
      ],
      texto: [
        'Entre la primera y la segunda carta, la relación de Pablo con Corinto pasó por momentos muy duros. Hizo una visita dolorosa y escribió una carta «con muchas lágrimas» (2 Co 2:4), que no se conserva. Luego, inquieto, salió de Éfeso a esperar noticias. En Macedonia lo encontró Tito: la mayoría de la iglesia se había arrepentido (2 Co 7:6-7). Con alivio, Pablo escribió esta carta, la más personal de todas.',
        { h: 'Un tesoro en vasos de barro' },
        'Unos maestros que se presentaban como «grandes apóstoles» se burlaban de Pablo. Decían que sus cartas eran fuertes, pero su presencia débil y su palabra menospreciable (2 Co 10:10). Pablo no responde mostrando su fuerza, sino su debilidad: «tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros» (2 Co 4:7). Enumera azotes, naufragios, hambre y peligros, y cuenta cómo huyó de Damasco descolgado en un canasto (2 Co 11:23-33).',
        { h: 'Bástate mi gracia' },
        'Pablo recibió revelaciones extraordinarias, pero también un aguijón en la carne. Tres veces pidió que se le quitara, y el Señor le respondió: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Co 12:9). La foto muestra ese pasaje en el papiro 46, una de las copias más antiguas de las cartas de Pablo.',
        { h: 'El ministerio de la reconciliación' },
        'La carta tiene también algunas de las páginas más hermosas sobre el evangelio. El ministerio del nuevo pacto tiene una gloria mayor que el de Moisés (2 Co 3). «Si alguno está en Cristo, nueva criatura es» (2 Co 5:17), y Dios nos dio el ministerio de la reconciliación. Los capítulos 8 y 9, sobre la ofrenda para los pobres de Jerusalén, son la enseñanza más amplia del Nuevo Testamento sobre la generosidad: Cristo, siendo rico, se hizo pobre por nosotros (2 Co 8:9), y Dios ama al dador alegre (2 Co 9:7).',
        { ir: { t: 'Ver «El aguijón y la gracia suficiente» en Los viajes de Pablo', a: '../../viajes-pablo/#sufrimientos/3' } },
        ESTUDIO
      ],
      pensar: 'Dios no le quitó el aguijón a Pablo, pero le dio su gracia. ¿En qué debilidad tuya podría perfeccionarse el poder de Cristo?'
    },
    {
      id: 'romanos', n: 'Romanos: el evangelio de la justicia de Dios', ref: 'Romanos 1:16-17; 3:21-26; 5:1; 8:1; 11:25-27; 12:1-2; 15:24; 16:1, 22', fecha: 57,
      visual: [
        ficha('La carta a los Romanos', [
          ['Autor', 'Pablo, por medio de su secretario Tercio (Ro 1:1; 16:22)'],
          ['Destinatarios', 'La iglesia de Roma, de judíos y gentiles, que Pablo no había fundado'],
          ['Fecha', 'Hacia el 57 d.C.'],
          ['Lugar', 'Corinto, en casa de Gayo, al final del tercer viaje (Ro 16:23); la llevó Febe, de Cencrea (Ro 16:1)'],
          ['Ocasión', 'Pablo planea ir a Roma y desde allí a España, y presenta el evangelio que predica (Ro 15:22-29)'],
          ['Tema', 'En el evangelio se revela la justicia de Dios, que justifica por la fe a judíos y gentiles'],
          ['Versículo clave', 'Romanos 1:16-17']
        ]),
        bosquejo('Bosquejo de Romanos', [
          ['1:1-17', 'Introducción y tema'],
          ['1:18–3:20', 'Pecado: todo el mundo es culpable ante Dios'],
          ['3:21–5:21', 'Justificación: por la fe en Cristo, como Abraham'],
          ['6–8', 'Santificación: libres del pecado y de la ley, vida en el Espíritu'],
          ['9–11', 'Israel en el plan de Dios: su caída, su remanente y su restauración futura'],
          ['12–16', 'La vida del creyente: sacrificio vivo, amor, autoridades, débiles y fuertes; planes y saludos']
        ]),
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-romanos-tercio.webp', alt: 'En una habitación de una casa de Corinto, Pablo, de pie, dicta con la mano levantada a Tercio, un secretario sentado que escribe en un papiro sobre una mesa baja, a la luz de una lámpara', pie: '«Yo Tercio, que escribí la epístola, os saludo en el Señor» (Ro 16:22).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[33, 8], [44, 30]], capas: ['roma-14', 'iglesia-57'], lugares: ['corinto', 'cencrea', 'roma'], trazos: ['nt-romanos'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego. Porque en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá.', ref: 'Romanos 1:16-17' }
      ],
      texto: [
        'Romanos es la exposición más completa y ordenada del evangelio en toda la Biblia. A diferencia de las demás cartas de Pablo, se dirige a una iglesia que él no había fundado ni visitado. Por eso no responde a problemas concretos tanto como presenta, de principio a fin, el mensaje que Pablo predicaba.',
        { h: 'La ocasión' },
        'Al terminar su tercer viaje, Pablo pasó tres meses en Corinto. Desde allí planeaba llevar a Jerusalén la ofrenda de las iglesias, y luego viajar a España, pasando por Roma (Ro 15:24-25). Quería que la iglesia de Roma conociera su evangelio y lo ayudara en esa misión. Dictó la carta a Tercio, y la llevó Febe, una servidora de la iglesia de Cencrea, el puerto de Corinto (Ro 16:1).',
        { h: 'El argumento' },
        'El tema está en el capítulo 1: el evangelio «es poder de Dios para salvación a todo aquel que cree», porque en él se revela la justicia de Dios por fe (Ro 1:16-17). Pablo muestra primero que todos, judíos y gentiles, son culpables: «todos pecaron, y están destituidos de la gloria de Dios» (Ro 3:23). Luego explica que Dios justifica gratuitamente por su gracia, mediante la redención en Cristo. El justificado tiene paz con Dios (Ro 5:1), es libre del dominio del pecado y vive por el Espíritu: «ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1).',
        { h: 'Israel y la vida cristiana' },
        'En los capítulos 9 a 11, Pablo se pregunta si Dios desechó a Israel. Responde que no: hay un remanente escogido por gracia, el endurecimiento de Israel es parcial y temporal, y «todo Israel será salvo» cuando haya entrado la plenitud de los gentiles (Ro 11:25-26). Los capítulos 12 a 16 aplican el evangelio a la vida: presentar el cuerpo en sacrificio vivo, amar sin fingimiento, someterse a las autoridades y recibir al hermano débil.',
        'Romanos ha cambiado la historia. Por ella se convirtieron Agustín de Hipona en el siglo IV y Martín Lutero en el XVI, y al oír leer su prefacio a Romanos, Juan Wesley sintió su corazón «extrañamente ardido» en 1738.',
        { ir: { t: 'Ver «Israel y la iglesia» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/7' } },
        ESTUDIO
      ],
      pensar: 'Pablo dijo: «no me avergüenzo del evangelio» (Ro 1:16). ¿Hay situaciones en las que te cuesta hablar de él? ¿Qué te enseña Romanos sobre su poder?'
    },
    {
      id: 'efesios-colosenses', n: 'Efesios y Colosenses: Cristo y su iglesia', ref: 'Efesios 1:3-14; 2:8-10; 4:1-16; 6:10-20; Colosenses 1:15-20; 2:8-10; 4:7-9, 16', fecha: [60, 61],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Dos cartas gemelas',
          cab: ['', 'Efesios', 'Colosenses'],
          filas: [
            ['Autor', 'Pablo, prisionero (Ef 3:1)', 'Pablo, con Timoteo (Col 1:1)'],
            ['Destinatarios', 'La iglesia de Éfeso y, probablemente, otras iglesias de Asia', 'La iglesia de Colosas, fundada por Epafras (Col 1:7)'],
            ['Fecha y lugar', 'Hacia el 60–61, desde Roma', 'Hacia el 60–61, desde Roma'],
            ['Mensajero', 'Tíquico (Ef 6:21)', 'Tíquico, con Onésimo (Col 4:7-9)'],
            ['Ocasión', 'Fortalecer a las iglesias en su identidad en Cristo', 'Una enseñanza que mezclaba filosofía, ritos judíos y culto a los ángeles'],
            ['Tema', 'La iglesia, cuerpo de Cristo, unida en Él', 'Cristo, cabeza de todo, plenitud de Dios'],
            ['Versículo clave', 'Efesios 2:8-10', 'Colosenses 2:9-10']
          ],
          nota: 'Unos setenta versículos de Efesios tienen paralelo en Colosenses.'
        } },
        bosquejo('Bosquejo de las dos cartas', [
          ['Ef 1–3', 'Lo que Dios hizo: bendiciones en Cristo, salvos por gracia, judíos y gentiles en un cuerpo'],
          ['Ef 4–6', 'Cómo vivir: unidad y dones, vida nueva, familia, armadura de Dios'],
          ['Col 1–2', 'La supremacía de Cristo y la advertencia contra la falsa enseñanza'],
          ['Col 3–4', 'Buscar las cosas de arriba: vida nueva y relaciones']
        ], 'Las dos cartas pasan de la doctrina (lo que Dios hizo) a la práctica (cómo vivir).'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'efeso', 'colosas', 'laodicea', 'hierapolis'], trazos: ['nt-efesios', 'nt-colosenses'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-pablo-roma.webp', alt: 'Pablo, ya mayor, encadenado por la muñeca a un soldado romano, enseña a un grupo de hombres y mujeres en una casa alquilada en Roma', pie: 'Desde la casa alquilada de Roma salieron las cartas de la prisión (Hch 28:30-31).', origen: 'ia' }
      ],
      texto: [
        'Durante sus dos años de prisión en Roma, Pablo escribió cuatro cartas: Efesios, Colosenses, Filemón y Filipenses. Por eso se llaman cartas de la prisión. Las tres primeras viajaron juntas, en manos de Tíquico y de Onésimo. Efesios y Colosenses son casi gemelas: comparten temas, estructura y muchas frases.',
        { h: 'Efesios: la iglesia, cuerpo de Cristo' },
        'Efesios comienza con una alabanza: Dios «nos bendijo con toda bendición espiritual en los lugares celestiales en Cristo» (Ef 1:3). En Cristo fuimos escogidos, redimidos y sellados con el Espíritu Santo. Somos salvos «por gracia… por medio de la fe; y esto no de vosotros, pues es don de Dios» (Ef 2:8). Y Dios hizo algo nuevo: judíos y gentiles, antes enemigos, forman un solo cuerpo. La segunda mitad enseña a vivir esa unidad: un cuerpo, un Espíritu, un Señor, una fe (Ef 4:4-5), con dones dados para edificar a la iglesia. Termina con la armadura de Dios para estar firmes contra las asechanzas del diablo (Ef 6:11).',
        'Algunos manuscritos antiguos no traen las palabras «en Éfeso» en el primer versículo, y la carta no tiene saludos personales, aunque Pablo vivió tres años allí. Por eso muchos piensan que fue una carta circular para varias iglesias de Asia, que se guardó en Éfeso.',
        { h: 'Colosenses: Cristo sobre todo' },
        'Pablo no conocía en persona la iglesia de Colosas, fundada por Epafras. Allí circulaba una enseñanza que mezclaba filosofía, normas de comida y días de fiesta, y culto a los ángeles, como si Cristo no bastara. Pablo responde con uno de los grandes himnos sobre Cristo: Él es la imagen del Dios invisible, por Él fueron creadas todas las cosas, y es la cabeza de la iglesia (Col 1:15-18). «En él habita corporalmente toda la plenitud de la Deidad, y vosotros estáis completos en él» (Col 2:9-10). Quien tiene a Cristo no necesita nada más.',
        { posturas: {
          titulo: '¿Desde dónde se escribieron las cartas de la prisión?',
          a: { n: 'Desde Roma', t: 'Es la postura tradicional. Pablo estuvo dos años preso en Roma con cierta libertad para recibir visitas (Hch 28:30-31). Filipenses menciona el pretorio y a los de la casa de César (Fil 1:13; 4:22).' },
          b: { n: 'Desde Éfeso o Cesarea', t: 'Algunos estudiosos piensan en una prisión en Éfeso, que Hechos no narra, o en los dos años en Cesarea (Hch 24:27). Éfeso queda más cerca de Colosas y de Filipos, lo que facilitaría los viajes que las cartas mencionan.' },
          c: 'Este recurso sigue la postura tradicional, la de Roma, como Los viajes de Pablo. El contenido de las cartas no cambia con el lugar.'
        } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Colosenses dice que en Cristo estás completo (Col 2:10). ¿Buscas a veces en otras cosas lo que ya tienes en Él?'
    },
    {
      id: 'filemon', n: 'Filemón: de esclavo a hermano', ref: 'Filemón 1-25; Colosenses 4:9', fecha: [60, 61],
      visual: [
        ficha('La carta a Filemón', [
          ['Autor', 'Pablo, prisionero, con Timoteo (Flm 1)'],
          ['Destinatarios', 'Filemón, creyente de Colosas, con Apia, Arquipo y la iglesia en su casa (Flm 1-2)'],
          ['Fecha', 'Hacia el 60–61 d.C.'],
          ['Lugar', 'Roma, junto con Colosenses'],
          ['Ocasión', 'Onésimo, esclavo de Filemón, había huido; se convirtió con Pablo y ahora vuelve'],
          ['Tema', 'El evangelio reconcilia y hace hermanos al amo y al esclavo'],
          ['Versículo clave', 'Filemón 16']
        ]),
        bosquejo('Bosquejo de Filemón', [
          ['1-7', 'Saludo y gratitud por el amor de Filemón'],
          ['8-21', 'El ruego por Onésimo: recíbelo como a mí mismo'],
          ['22-25', 'Planes y saludos']
        ], 'Es la carta más breve de Pablo: un solo capítulo de 25 versículos.'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-casa-iglesia.webp', alt: 'Una iglesia del siglo I reunida en el patio de una casa grecorromana: hombres, mujeres, niños y esclavos sentados juntos alrededor de una mesa con pan', pie: 'La carta se dirigía también a «la iglesia que está en tu casa» (Flm 2).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque quizás para esto se apartó de ti por algún tiempo, para que le recibieses para siempre; no ya como esclavo, sino como más que esclavo, como hermano amado, mayormente para mí, pero cuánto más para ti, tanto en la carne como en el Señor. Así que, si me tienes por compañero, recíbele como a mí mismo.', ref: 'Filemón 15-17' }
      ],
      texto: [
        'Filemón es una carta breve y personal, pero dice mucho sobre el poder del evangelio. Filemón era un creyente de Colosas, probablemente convertido por medio de Pablo, que tenía una iglesia en su casa. Onésimo, su esclavo, había huido, quizá después de causarle algún perjuicio (Flm 18). En Roma encontró a Pablo y se convirtió. Ahora volvía a su amo, con Tíquico, llevando esta carta.',
        { h: 'Un ruego' },
        'En el imperio romano, un esclavo fugitivo podía ser castigado con dureza. Pablo podría haber ordenado a Filemón lo que convenía, pero prefiere rogarle por amor (Flm 8-9). Hace un juego de palabras con el nombre Onésimo, que significa útil: «en otro tiempo te fue inútil, pero ahora a ti y a mí nos es útil» (Flm 11). Le pide que lo reciba «no ya como esclavo, sino como más que esclavo, como hermano amado» (Flm 16). Y se ofrece a pagar lo que Onésimo deba: «ponlo a mi cuenta» (Flm 18).',
        { h: 'Una imagen del evangelio' },
        'Lo que Pablo hace por Onésimo es una imagen de lo que Cristo hizo por nosotros. Intercede por el culpable, carga su deuda y lo presenta como hermano. Martín Lutero escribió que todos somos Onésimos de Dios.',
        { h: 'El evangelio y la esclavitud' },
        'Pablo no lanzó una campaña contra la esclavitud, que estaba en la base de la economía romana. Pero sembró algo más profundo: en Cristo ya no hay esclavo ni libre (Ga 3:28), y el amo y el esclavo se sientan a la misma mesa como hermanos. Esa verdad terminó socavando la institución. Siglos después, muchos cristianos que lucharon contra la esclavitud, como William Wilberforce, lo hicieron movidos por el evangelio.',
        'Una antigua tradición menciona a un Onésimo obispo de Éfeso a comienzos del siglo II. No es seguro que sea el mismo, pero sería un hermoso final para la historia del esclavo que volvió.',
        ESTUDIO
      ],
      pensar: '«Ponlo a mi cuenta» (Flm 18). ¿Con quién necesitas reconciliarte, y qué te enseña el ejemplo de Pablo sobre cómo dar el primer paso?'
    },
    {
      id: 'filipenses', n: 'Filipenses: la carta del gozo', ref: 'Filipenses 1:12-21; 2:5-11; 3:7-14; 4:4-13, 18', fecha: [61, 62],
      visual: [
        ficha('La carta a los Filipenses', [
          ['Autor', 'Pablo, con Timoteo (Fil 1:1)'],
          ['Destinatarios', 'La iglesia de Filipos, la primera de Europa (Hch 16:12-40)'],
          ['Fecha', 'Hacia el 61–62 d.C., al final de la primera prisión'],
          ['Lugar', 'Roma (Fil 1:13; 4:22)'],
          ['Ocasión', 'Agradecer la ofrenda que llevó Epafrodito y animar a la unidad (Fil 4:18; 2:25-30)'],
          ['Tema', 'El gozo en Cristo, en toda circunstancia'],
          ['Versículo clave', 'Filipenses 1:21; también 4:4']
        ]),
        bosquejo('Bosquejo de Filipenses', [
          ['1', 'Gozo en la prisión: el evangelio avanza; para mí el vivir es Cristo'],
          ['2', 'Gozo en el servicio: el ejemplo de Cristo, de Timoteo y de Epafrodito'],
          ['3', 'Gozo en conocer a Cristo: todo lo demás es pérdida'],
          ['4', 'Gozo en toda situación: paz, contentamiento y gratitud por la ofrenda']
        ], 'Las palabras gozo y regocijarse aparecen unas quince veces en cuatro capítulos.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'filipos', 'tesalonica'], trazos: ['nt-filipenses'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-lidia.webp', alt: 'Junto a un río en las afueras de Filipos, Lidia, con un manto de púrpura, escucha a Pablo, rodeada de otras mujeres sentadas en la orilla', pie: 'La iglesia de Filipos comenzó junto a un río, con Lidia (Hch 16:13-15).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús, el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres; y estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz. Por lo cual Dios también le exaltó hasta lo sumo, y le dio un nombre que es sobre todo nombre, para que en el nombre de Jesús se doble toda rodilla de los que están en los cielos, y en la tierra, y debajo de la tierra; y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.', ref: 'Filipenses 2:5-11' }
      ],
      texto: [
        'La iglesia de Filipos tenía un lugar especial en el corazón de Pablo. Nació junto a un río con Lidia, una comerciante de púrpura, creció con un carcelero que creyó una noche de terremoto, y fue la única que ayudó a Pablo con ofrendas una y otra vez (Fil 4:15-16). Cuando supo que estaba preso en Roma, le envió una ofrenda por medio de Epafrodito. Pablo le responde con esta carta.',
        { h: 'Gozo encadenado' },
        'Filipenses es la carta del gozo, escrita por un hombre encadenado que no sabía si viviría o moriría. «Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!» (Fil 4:4). Pablo cuenta que su prisión había servido para que el evangelio se conociera en todo el pretorio, y que muchos hermanos predicaban con más valor (Fil 1:12-14). Su gozo no dependía de las circunstancias, sino de Cristo: «para mí el vivir es Cristo, y el morir es ganancia» (Fil 1:21).',
        { h: 'El sentir de Cristo' },
        'En la iglesia había algunas tensiones, y dos hermanas, Evodia y Síntique, no se ponían de acuerdo (Fil 4:2). Pablo llama a la humildad con el ejemplo supremo: Cristo, siendo en forma de Dios, se despojó a sí mismo, tomó forma de siervo y se humilló hasta la muerte de cruz; por eso Dios lo exaltó hasta lo sumo (Fil 2:5-11). Es uno de los pasajes más importantes del Nuevo Testamento sobre la persona de Cristo.',
        { h: 'Contentamiento' },
        'En el último capítulo, Pablo agradece la ofrenda, pero aclara que ha aprendido a contentarse en cualquier situación, en abundancia o en necesidad. En ese contexto dice: «Todo lo puedo en Cristo que me fortalece» (Fil 4:13). No es una promesa de éxito en cualquier proyecto, sino la fuerza para vivir con fidelidad tanto en la escasez como en la abundancia.',
        { ir: { t: 'Ver el taller sobre Filipenses 4:13 en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#taller/3' } },
        ESTUDIO
      ],
      pensar: 'Pablo aprendió a contentarse en cualquier situación (Fil 4:11). ¿En qué área de tu vida necesitas aprender ese contentamiento?'
    },
    {
      id: '1timoteo-tito', n: '1 Timoteo y Tito: el orden de la iglesia', ref: '1 Timoteo 1:3; 3:1-15; 4:12; Tito 1:5-9; 2:11-14; 3:5', fecha: [62, 64],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Dos cartas pastorales',
          cab: ['', '1 Timoteo', 'Tito'],
          filas: [
            ['Autor', 'Pablo (1 Ti 1:1)', 'Pablo (Tit 1:1)'],
            ['Destinatario', 'Timoteo, en Éfeso (1 Ti 1:3)', 'Tito, en Creta (Tit 1:5)'],
            ['Fecha', 'Hacia el 62–64 d.C.', 'Hacia el 62–64 d.C.'],
            ['Lugar', 'Macedonia, probablemente', 'Macedonia o Grecia; Pablo piensa invernar en Nicópolis (Tit 3:12)'],
            ['Ocasión', 'Falsos maestros en Éfeso', 'Iglesias nuevas sin ancianos en Creta'],
            ['Tema', 'Cómo conducirse en la casa de Dios', 'Sana doctrina que produce buenas obras'],
            ['Versículo clave', '1 Timoteo 3:15', 'Tito 2:11-13']
          ]
        } },
        bosquejo('Bosquejo de las dos cartas', [
          ['1 Ti 1', 'Contra la falsa doctrina; el testimonio de Pablo'],
          ['1 Ti 2–3', 'La oración, el culto y los requisitos de obispos y diáconos'],
          ['1 Ti 4–6', 'El buen ministro, las viudas, los ancianos, los esclavos y los ricos'],
          ['Tit 1', 'Ancianos en cada ciudad y los falsos maestros de Creta'],
          ['Tit 2–3', 'La gracia que enseña a vivir; salvos por misericordia']
        ]),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[33.5, 17], [42.5, 31]], capas: ['roma-14', 'iglesia-62'], lugares: ['filipos', 'efeso', 'creta-isla', 'nicopolis'], trazos: ['nt-1timoteo', 'nt-tito'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../viajes-pablo/img/vp-creta.webp', alt: 'En el puerto de una ciudad de Creta, Pablo se despide de Tito, un hombre joven y firme, y le entrega un rollo, mientras un barco espera junto al muelle', pie: '«Por esta causa te dejé en Creta» (Tit 1:5).', origen: 'ia' }
      ],
      texto: [
        'Las cartas a Timoteo y a Tito se llaman pastorales porque tratan del cuidado de las iglesias y de sus líderes. No se dirigen a congregaciones, sino a dos colaboradores de confianza encargados de organizarlas.',
        { h: 'El contexto' },
        'Hechos termina con Pablo preso en Roma, pero las pastorales mencionan viajes que no caben en Hechos: Pablo dejó a Timoteo en Éfeso al ir a Macedonia (1 Ti 1:3) y a Tito en Creta (Tit 1:5). La explicación más probable es que Pablo fue liberado hacia el 62, como esperaba (Fil 2:24), y visitó otra vez las iglesias de Oriente. Clemente de Roma, hacia el año 96, dice que Pablo llegó «al límite de Occidente», lo que muchos entienden como España.',
        { h: 'Sana doctrina y buen orden' },
        'En Éfeso, algunos enseñaban fábulas, genealogías y una ley mal entendida. Pablo encarga a Timoteo que los corrija y que sea ejemplo de los creyentes, aunque sea joven (1 Ti 4:12). Le explica cómo conducirse «en la casa de Dios, que es la iglesia del Dios viviente, columna y baluarte de la verdad» (1 Ti 3:15). Las dos cartas dan los requisitos de los obispos o ancianos y de los diáconos, que se refieren más al carácter que a los talentos. Tito recibe la misma tarea en Creta: establecer ancianos en cada ciudad.',
        'La sana doctrina siempre produce una vida transformada: la gracia de Dios se ha manifestado para salvación, «enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente, aguardando la esperanza bienaventurada» (Tit 2:11-13).',
        { posturas: {
          titulo: '¿Escribió Pablo las cartas pastorales?',
          a: { n: 'Las escribió otro, con el nombre de Pablo', t: 'Muchos críticos modernos piensan que las pastorales fueron escritas a fines del siglo I por un discípulo de Pablo que usó su nombre. Señalan diferencias de vocabulario y de estilo, una organización de la iglesia que les parece más tardía y viajes que no caben en Hechos.' },
          b: { n: 'Las escribió Pablo', t: 'La iglesia antigua las recibió sin dudar como cartas de Pablo, y ya se citan a comienzos del siglo II. Las diferencias de estilo se explican por el tema, los destinatarios, la edad de Pablo y el uso de un secretario, quizá Lucas (2 Ti 4:11). Los ancianos y diáconos ya existían en tiempos de Hechos (Hch 14:23; Fil 1:1), y los viajes caben después de la primera prisión.' },
          c: 'Este recurso sigue la segunda postura. Las cartas dicen ser de Pablo y contienen detalles personales difíciles de inventar, como el capote olvidado en Troas (2 Ti 4:13). Una carta escrita con un nombre falso para engañar no sería coherente con su propia enseñanza sobre la verdad. El mismo razonamiento vale para Efesios, Colosenses y 2 Tesalonicenses, también discutidas por algunos críticos.'
        } },
        { ir: { t: 'Ver «Las cartas pastorales» en Los viajes de Pablo', a: '../../viajes-pablo/#cartas/7' } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Los requisitos de los líderes hablan más del carácter que de los talentos (1 Ti 3:1-7). ¿Qué rasgo de esa lista te gustaría que Dios desarrollara en ti?'
    },
    {
      id: '2timoteo', n: '2 Timoteo: he acabado la carrera', ref: '2 Timoteo 1:5-8; 2:2; 3:14-17; 4:1-8, 9-22', fecha: [66, 67],
      visual: [
        ficha('La segunda carta a Timoteo', [
          ['Autor', 'Pablo, preso por segunda vez (2 Ti 1:8, 16-17)'],
          ['Destinatario', 'Timoteo, probablemente en Éfeso'],
          ['Fecha', 'Hacia el 66–67 d.C., poco antes de su muerte'],
          ['Lugar', 'Roma, en una prisión más dura que la primera'],
          ['Ocasión', 'Pablo sabe que va a morir y pide a Timoteo que venga pronto (2 Ti 4:6, 9)'],
          ['Tema', 'Guardar el depósito de la fe y pasarlo a otros, aunque cueste sufrir'],
          ['Versículo clave', '2 Timoteo 4:7; también 3:16']
        ]),
        bosquejo('Bosquejo de 2 Timoteo', [
          ['1', 'No te avergüences: aviva el don de Dios'],
          ['2', 'Esfuérzate: soldado, atleta y labrador; enseña a otros'],
          ['3', 'Persiste: tiempos peligrosos y la Escritura inspirada'],
          ['4', 'Predica la palabra: el testamento de Pablo y sus últimos encargos']
        ], 'Es la última carta de Pablo que conocemos.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'troas', 'efeso', 'mileto'], trazos: ['nt-2timoteo'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../viajes-pablo/img/vp-segunda-prision.webp', alt: 'En una celda de piedra fría y oscura en Roma, Pablo, anciano y encadenado, dicta una carta a Lucas, que escribe a la luz de una pequeña lámpara', pie: '«Sólo Lucas está conmigo» (2 Ti 4:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque yo ya estoy para ser sacrificado, y el tiempo de mi partida está cercano. He peleado la buena batalla, he acabado la carrera, he guardado la fe. Por lo demás, me está guardada la corona de justicia, la cual me dará el Señor, juez justo, en aquel día; y no sólo a mí, sino también a todos los que aman su venida.', ref: '2 Timoteo 4:6-8' }
      ],
      texto: [
        'Segunda de Timoteo es el testamento de Pablo. En el año 64, un gran incendio destruyó buena parte de Roma, y Nerón culpó a los cristianos. Comenzó una persecución sangrienta. Pablo fue arrestado de nuevo, y esta vez no había casa alquilada ni esperanza de libertad. Escribe desde una prisión fría, abandonado por muchos: «Sólo Lucas está conmigo» (2 Ti 4:11).',
        { h: 'Un padre a su hijo' },
        'Timoteo era el hijo espiritual de Pablo, criado en la fe por su abuela Loida y su madre Eunice (2 Ti 1:5). Pablo le pide que avive el fuego del don de Dios, porque «no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio» (2 Ti 1:7). Le recuerda que el soldado, el atleta y el labrador se esfuerzan, y le da un encargo que mira a las generaciones futuras: «Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros» (2 Ti 2:2).',
        { h: 'La Escritura y la predicación' },
        'Pablo advierte que vendrán tiempos peligrosos, y le da a Timoteo un ancla: las Sagradas Escrituras que conoce desde la niñez. «Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia» (2 Ti 3:16). Por eso, su último encargo es: «que prediques la palabra; que instes a tiempo y fuera de tiempo» (2 Ti 4:2).',
        { h: 'La corona' },
        'Pablo sabe que su muerte está cerca: «yo ya estoy para ser sacrificado». Mira atrás sin remordimiento y adelante sin temor: «He peleado la buena batalla, he acabado la carrera, he guardado la fe» (2 Ti 4:6-7). Le espera la corona de justicia, no solo a él, sino a todos los que aman la venida del Señor. Luego, como cualquier anciano, pide que le traigan el capote que dejó en Troas y los libros. Según la tradición, Pablo fue decapitado en Roma, fuera de la ciudad, hacia el año 67.',
        { ir: { t: 'Ver «He acabado la carrera» en Los viajes de Pablo', a: '../../viajes-pablo/#despues/4' } },
        ESTUDIO
      ],
      pensar: 'Pablo encargó a Timoteo pasar la fe a hombres fieles que enseñaran a otros (2 Ti 2:2). ¿A quién estás formando tú en la fe?'
    }
  ];

  window.__NT.pablo = pablo;
})();
/* Introducción al Nuevo Testamento · parte 4: V. Hebreos y las cartas generales, VI. Apocalipsis */
(() => {
  const ORIENTE = [[30.5, 11], [43.5, 39]];
  const LEVANTE = [[29.5, 31.5], [37.8, 38.8]];
  const ASIA = [[36.6, 25.5], [39.8, 30.2]];
  const ficha = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Ficha', tabla: { titulo, cab: ['', ''], filas, nota } });
  const bosquejo = (titulo, filas, nota) => ({ tipo: 'tabla', titulo: 'Bosquejo', tabla: { titulo, cab: ['Capítulos', 'Contenido'], filas, nota } });
  const ESTUDIO = 'Esta carta tendrá su propio estudio de libro en el sitio, hoy en preparación.';

  /* ---------------- V. Hebreos y las cartas generales ---------------- */
  const generales = [
    {
      id: 'hebreos', n: 'Hebreos: Cristo, mejor', ref: 'Hebreos 1:1-4; 4:14-16; 8:6-13; 10:32-39; 11:1; 12:1-2; 13:22-24', fecha: [64, 68],
      visual: [
        ficha('La carta a los Hebreos', [
          ['Autor', 'Desconocido; un maestro del círculo de los apóstoles, amigo de Timoteo (He 2:3; 13:23)'],
          ['Destinatarios', 'Creyentes judíos tentados a volver al sistema del templo'],
          ['Fecha', 'Hacia el 64–68 d.C., antes de la destrucción del templo'],
          ['Lugar', 'No se sabe; saludan «los de Italia» (He 13:24)'],
          ['Ocasión', 'Persecución, cansancio y la tentación de abandonar la fe en Cristo'],
          ['Tema', 'Cristo es superior a todo lo anterior: mejor revelación, mejor sacerdote, mejor pacto, mejor sacrificio'],
          ['Versículo clave', 'Hebreos 4:14; también 12:1-2']
        ], 'El autor llama a su obra «palabra de exhortación» (He 13:22): es un sermón escrito con final de carta.'),
        bosquejo('Bosquejo de Hebreos', [
          ['1–2', 'Cristo, superior a los ángeles; primera advertencia'],
          ['3–4', 'Superior a Moisés y a Josué; el reposo de Dios'],
          ['5–7', 'Sumo sacerdote según el orden de Melquisedec'],
          ['8–10', 'Un mejor pacto, un mejor santuario y un sacrificio una vez para siempre'],
          ['11', 'La fe: la gran nube de testigos'],
          ['12–13', 'Corramos con paciencia; exhortaciones finales']
        ], 'Cinco advertencias recorren la carta: 2:1-4; 3:7–4:13; 5:11–6:12; 10:26-39; 12:25-29.'),
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, teniendo un gran sumo sacerdote que traspasó los cielos, Jesús el Hijo de Dios, retengamos nuestra profesión. Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado. Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro.', ref: 'Hebreos 4:14-16' }
      ],
      texto: [
        'Hebreos comienza como un sermón y termina como una carta. No tiene saludo inicial ni nombre de autor. Su primera frase anuncia el tema: Dios habló antes por los profetas, «en estos postreros días nos ha hablado por el Hijo» (He 1:2). Desde allí, la palabra clave es mejor: Cristo es mejor que los ángeles, que Moisés y que el sacerdocio de Aarón, y trae un mejor pacto, con mejores promesas y un mejor sacrificio.',
        { h: 'Los destinatarios' },
        'Los lectores eran creyentes judíos que habían soportado persecución, cárcel y despojo de sus bienes (He 10:32-34). Ahora estaban cansados, y algunos dejaban de congregarse (He 10:25). Tenían la tentación de volver al sistema del templo, con su sacerdocio y sus sacrificios visibles. El autor les muestra que eso sería volver a la sombra después de haber conocido la realidad. Los sacrificios de animales no podían quitar el pecado; Cristo se ofreció una vez para siempre y vive siempre para interceder (He 7:25; 10:10-14).',
        { h: 'Una fecha antes del 70' },
        'La carta habla del sacerdocio y de los sacrificios como algo que todavía ocurre, y dice que el primer pacto «está próximo a desaparecer» (He 8:13). Si el templo ya hubiera sido destruido, el argumento más fuerte habría sido mencionarlo. Por eso este recurso la fecha antes del año 70.',
        { posturas: {
          titulo: '¿Quién escribió Hebreos?',
          a: { n: 'Pablo', t: 'Las iglesias de Oriente la recibieron como carta de Pablo, y así aparece en muchas Biblias antiguas. Se apoyan en la mención de Timoteo (He 13:23) y en temas comunes con Pablo, como el nuevo pacto y la fe de Abraham.' },
          b: { n: 'Otro maestro del círculo apostólico', t: 'El griego y el estilo son muy distintos de los de Pablo, y el autor dice que recibió el evangelio de los que oyeron al Señor (He 2:3), mientras Pablo insiste en que lo recibió directamente de Cristo (Ga 1:12). Se han propuesto Apolos, varón elocuente y poderoso en las Escrituras (Hch 18:24), como sugirió Lutero; Bernabé, levita, como dijo Tertuliano; Lucas o Priscila.' },
          c: 'Este recurso considera al autor desconocido. Ya en el siglo III, Orígenes dijo que solo Dios sabe quién la escribió. Lo seguro es que pertenecía al círculo de los apóstoles, y que la iglesia reconoció la carta como Escritura inspirada. Su autoridad no depende de conocer el nombre del autor.'
        } },
        { ir: { t: 'Ver «Cristo, nuestro sumo sacerdote» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/1' } },
        ESTUDIO
      ],
      pensar: 'Hebreos anima a correr «puestos los ojos en Jesús, el autor y consumador de la fe» (He 12:2). ¿Qué peso necesitas dejar para seguir corriendo?'
    },
    {
      id: 'santiago', n: 'Santiago: una fe que obra', ref: 'Santiago 1:1-5, 22; 2:14-26; 3:1-12; 5:14-16; Gálatas 1:19; Hechos 15:13-21', fecha: [45, 49],
      visual: [
        ficha('La carta de Santiago', [
          ['Autor', 'Jacobo (Santiago), hermano del Señor y líder de la iglesia de Jerusalén (Stg 1:1; Ga 1:19)'],
          ['Destinatarios', '«Las doce tribus que están en la dispersión»: creyentes judíos fuera de Judea (Stg 1:1)'],
          ['Fecha', 'Hacia el 45–49 d.C.; quizá el libro más antiguo del Nuevo Testamento'],
          ['Lugar', 'Jerusalén'],
          ['Ocasión', 'Creyentes pobres y probados, con favoritismos, divisiones y una fe solo de palabras'],
          ['Tema', 'La fe verdadera se muestra en las obras'],
          ['Versículo clave', 'Santiago 1:22; también 2:17']
        ]),
        bosquejo('Bosquejo de Santiago', [
          ['1', 'Las pruebas, la sabiduría y ser hacedores de la palabra'],
          ['2', 'Sin favoritismo; la fe sin obras está muerta'],
          ['3', 'La lengua y la sabiduría de lo alto'],
          ['4', 'Conflictos, humildad y planes'],
          ['5', 'Los ricos opresores, la paciencia y la oración de fe']
        ], 'En 108 versículos hay unos 54 mandatos: es la carta más práctica del Nuevo Testamento.'),
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-santiago-carta.webp', alt: 'En una casa sencilla de Jerusalén, Jacobo, hermano del Señor, anciano de barba gris con manto de oración, dicta una carta a un joven escriba mientras otros ancianos escuchan', pie: '«Santiago, siervo de Dios y del Señor Jesucristo, a las doce tribus que están en la dispersión» (Stg 1:1).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pablo y Santiago',
          cab: ['', 'Pablo (Ro 3:28)', 'Santiago (Stg 2:24)'],
          filas: [
            ['Pregunta', '¿Cómo es aceptado el pecador por Dios?', '¿Cómo se reconoce una fe verdadera?'],
            ['«Obras»', 'Obras de la ley para ganar la salvación', 'Obras de amor que nacen de la fe'],
            ['«Justificar»', 'Declarar justo ante Dios', 'Mostrar justo ante los hombres'],
            ['Abraham', 'Creyó y le fue contado por justicia (Gn 15:6)', 'Su fe se mostró al ofrecer a Isaac (Gn 22)']
          ],
          nota: 'Pablo combate el legalismo; Santiago, una fe muerta. Los dos enseñan una fe viva que produce obras (Ga 5:6; Ef 2:8-10).'
        } }
      ],
      texto: [
        'La carta se abre con un nombre: Santiago, que es la forma española de Jacobo. En el Nuevo Testamento hay varios Jacobos, pero el autor de esta carta es casi con seguridad Jacobo, el hermano del Señor. No creyó en Jesús durante su ministerio (Jn 7:5), pero el Señor resucitado se le apareció (1 Co 15:7), y llegó a ser el líder de la iglesia de Jerusalén. Presidió el concilio de Hechos 15. El historiador Josefo cuenta que fue apedreado en el año 62. Por su vida de oración, lo llamaban Jacobo el justo.',
        { h: 'Una carta muy temprana' },
        'Santiago no menciona la cuestión de los gentiles ni el concilio de Jerusalén, y describe a sus lectores reunidos en la sinagoga (Stg 2:2, en griego). Por eso muchos la fechan antes del año 50, lo que la haría el libro más antiguo del Nuevo Testamento. Su estilo recuerda a los Proverbios y, sobre todo, al Sermón del monte: hay más ecos de las palabras de Jesús en Santiago que en ninguna otra carta.',
        { h: 'Hacedores de la palabra' },
        'El tema es la fe que se ve en la vida: «sed hacedores de la palabra, y no tan solamente oidores» (Stg 1:22). Santiago habla de las pruebas, de no hacer acepción de personas, de dominar la lengua, de la humildad y de la paciencia. Y enseña a la iglesia a orar por los enfermos: que llamen a los ancianos, que oren por él ungiéndole con aceite en el nombre del Señor, «y la oración de fe salvará al enfermo, y el Señor lo levantará» (Stg 5:14-15).',
        { h: '¿Contradice a Pablo?' },
        'Santiago dice que el hombre es justificado por las obras, y no solamente por la fe (Stg 2:24). Pablo dice que es justificado por la fe sin las obras de la ley (Ro 3:28). Lutero llegó a llamar a Santiago «epístola de paja», aunque nunca la quitó de su Biblia. Pero los dos no se contradicen, como muestra la tabla: responden preguntas distintas y usan las palabras en sentidos distintos. Pablo ataca la idea de ganar la salvación con obras; Santiago, la idea de una fe que no cambia nada. Los dos dirían que somos salvos solo por la fe, pero la fe que salva nunca está sola.',
        ESTUDIO
      ],
      pensar: 'Santiago dice que la fe sin obras está muerta (Stg 2:17). ¿Qué obra concreta podría mostrar hoy que tu fe está viva?'
    },
    {
      id: '1pedro', n: '1 Pedro: esperanza en el sufrimiento', ref: '1 Pedro 1:1-9; 2:9-12, 21-25; 3:15; 4:12-16; 5:1-13', fecha: [63, 64],
      visual: [
        ficha('La primera carta de Pedro', [
          ['Autor', 'El apóstol Pedro, por medio de Silvano (1 P 1:1; 5:12)'],
          ['Destinatarios', 'Los expatriados de la dispersión en Ponto, Galacia, Capadocia, Asia y Bitinia, en su mayoría gentiles convertidos (1 P 1:1, 14; 4:3)'],
          ['Fecha', 'Hacia el 63–64 d.C., poco antes de la persecución de Nerón o al comenzar'],
          ['Lugar', '«Babilonia», nombre que muchos cristianos daban a Roma (1 P 5:13)'],
          ['Ocasión', 'Los creyentes sufrían insultos y hostilidad por su fe'],
          ['Tema', 'La esperanza viva y la gracia de Dios sostienen al creyente en el sufrimiento'],
          ['Versículo clave', '1 Pedro 1:3; también 4:12-13']
        ]),
        bosquejo('Bosquejo de 1 Pedro', [
          ['1:1–2:10', 'Una salvación gloriosa: nacidos de nuevo, santos y pueblo de Dios'],
          ['2:11–4:11', 'Peregrinos en el mundo: buena conducta ante autoridades, amos y familia; el ejemplo de Cristo'],
          ['4:12–5:14', 'El fuego de prueba: sufrir como cristianos; ancianos y jóvenes']
        ]),
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'De Roma, llamada «Babilonia», a Asia Menor.', fecha: 63, estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'r-ponto', 'r-galacia', 'r-capadocia', 'r-asia', 'r-bitinia'], trazos: ['nt-1pedro'] } },
          { t: 'El orden de 1 Pedro 1:1, quizá el recorrido del mensajero.', fecha: 63, estado: { view: [[36.3, 26], [42.6, 39.5]], capas: ['roma-14', 'iglesia-62'], lugares: ['r-ponto', 'r-galacia', 'r-capadocia', 'r-asia', 'r-bitinia'], trazos: ['nt-1pedro-circuito'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/int-pedro-silvano.webp', alt: 'En una casa de Roma, Pedro, de cabello y barba canosos, dicta una carta a Silvano, que escribe en un papiro; Marcos, joven, prepara otra hoja junto a la ventana', pie: '«Por conducto de Silvano… os he escrito brevemente» (1 P 5:12).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Bendito el Dios y Padre de nuestro Señor Jesucristo, que según su grande misericordia nos hizo renacer para una esperanza viva, por la resurrección de Jesucristo de los muertos, para una herencia incorruptible, incontaminada e inmarcesible, reservada en los cielos para vosotros, que sois guardados por el poder de Dios mediante la fe, para alcanzar la salvación que está preparada para ser manifestada en el tiempo postrero. En lo cual vosotros os alegráis, aunque ahora por un poco de tiempo, si es necesario, tengáis que ser afligidos en diversas pruebas, para que sometida a prueba vuestra fe, mucho más preciosa que el oro, el cual aunque perecedero se prueba con fuego, sea hallada en alabanza, gloria y honra cuando sea manifestado Jesucristo,', ref: '1 Pedro 1:3-7' }
      ],
      texto: [
        'Pedro, el pescador de Galilea, el que negó a Jesús tres veces y fue restaurado, escribe ya anciano a creyentes que sufren. Se presenta como «anciano también con ellos, y testigo de los padecimientos de Cristo» (1 P 5:1). Su carta es una de las más cálidas del Nuevo Testamento.',
        { h: 'Peregrinos' },
        'Los destinatarios vivían en cinco regiones del norte y el centro de Asia Menor. Pedro los llama expatriados y peregrinos, no porque hubieran salido de su tierra, sino porque su verdadera patria estaba en el cielo. Eran gentiles que habían dejado su vida anterior (1 P 4:3-4), y sus vecinos los insultaban por no participar en las fiestas y costumbres paganas. Pedro les recuerda quiénes son: «linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios» (1 P 2:9), los mismos títulos que Dios dio a Israel en el Sinaí.',
        { h: 'Esperanza viva' },
        'La carta comienza con una alabanza: Dios «nos hizo renacer para una esperanza viva, por la resurrección de Jesucristo de los muertos» (1 P 1:3). Esa esperanza sostiene en las pruebas, que purifican la fe como el fuego al oro. Pedro anima a no sorprenderse del fuego de prueba (1 P 4:12), a sufrir haciendo el bien siguiendo las pisadas de Cristo, que «llevó él mismo nuestros pecados en su cuerpo sobre el madero» (1 P 2:24), y a estar siempre preparados para presentar defensa de la esperanza que hay en nosotros (1 P 3:15).',
        { h: 'Babilonia y Silvano' },
        'Pedro manda saludos de «la iglesia que está en Babilonia» y de «Marcos mi hijo» (1 P 5:13). Babilonia era, para los judíos y los cristianos, el símbolo de la capital que oprime al pueblo de Dios, y Apocalipsis llama así a Roma. La tradición antigua dice que Pedro estuvo en Roma al final de su vida y murió allí, crucificado, en la persecución de Nerón. Silvano, el mismo Silas que acompañó a Pablo, le sirvió de secretario o de mensajero (1 P 5:12), lo que puede explicar el buen griego de la carta.',
        ESTUDIO
      ],
      pensar: 'Pedro escribió a creyentes insultados por su fe: «estad siempre preparados para presentar defensa… de la esperanza que hay en vosotros» (1 P 3:15). ¿Cómo explicarías tu esperanza a alguien que no cree?'
    },
    {
      id: '2pedro-judas', n: '2 Pedro y Judas: contra los falsos maestros', ref: '2 Pedro 1:12-21; 2:1-3; 3:1-18; Judas 1-4, 14-25', fecha: [64, 70],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Dos cartas hermanas',
          cab: ['', '2 Pedro', 'Judas'],
          filas: [
            ['Autor', 'El apóstol Pedro (2 P 1:1, 16-18)', 'Judas, hermano de Jacobo, hermano del Señor (Jud 1; Mt 13:55)'],
            ['Destinatarios', 'Los mismos de la primera carta (2 P 3:1)', 'Creyentes amenazados por infiltrados'],
            ['Fecha', 'Hacia el 64–67 d.C., poco antes de su muerte (2 P 1:14)', 'Hacia el 65–70 d.C.'],
            ['Lugar', 'Roma, probablemente', 'No se sabe'],
            ['Ocasión', 'Falsos maestros que negaban la venida de Cristo y vivían en libertinaje', 'Hombres impíos que convertían la gracia en libertinaje'],
            ['Tema', 'Crecer en el conocimiento de Cristo y esperar su venida', 'Contender por la fe dada una vez a los santos'],
            ['Versículo clave', '2 Pedro 1:21; 3:18', 'Judas 3, 24-25']
          ],
          nota: 'Gran parte de Judas tiene paralelo en 2 Pedro 2.'
        } },
        bosquejo('Bosquejo de las dos cartas', [
          ['2 P 1', 'Crecer en virtud; la palabra profética más segura'],
          ['2 P 2', 'Los falsos maestros y su juicio'],
          ['2 P 3', 'El día del Señor: la paciencia de Dios y los cielos nuevos'],
          ['Jud 1-16', 'Ejemplos de juicio y retrato de los infiltrados'],
          ['Jud 17-25', 'Conservaos en el amor de Dios; doxología final']
        ]),
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Tenemos también la palabra profética más segura, a la cual hacéis bien en estar atentos como a una antorcha que alumbra en lugar oscuro, hasta que el día esclarezca y el lucero de la mañana salga en vuestros corazones; entendiendo primero esto, que ninguna profecía de la Escritura es de interpretación privada, porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.', ref: '2 Pedro 1:19-21' }
      ],
      texto: [
        'Estas dos cartas breves tratan el mismo peligro: maestros que se habían infiltrado en las iglesias, negaban al Señor con su conducta, se burlaban de su venida y convertían la gracia en excusa para pecar. Las dos responden con firmeza y con esperanza.',
        { h: 'El testamento de Pedro' },
        'Pedro sabe que pronto dejará el cuerpo, como el Señor se lo había anunciado (2 P 1:14; Jn 21:18-19), y quiere dejar a los creyentes algo que recuerden. Les recuerda que no siguieron fábulas: él fue testigo de la majestad de Cristo en el monte de la transfiguración. Y tienen algo todavía más firme, la palabra profética, porque «los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo» (2 P 1:21).',
        'A los que preguntaban dónde estaba la promesa de su venida, Pedro responde que para el Señor un día es como mil años, y que no retarda su promesa, sino que es paciente, «no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento» (2 P 3:9). Al final, menciona las cartas de Pablo junto a «las otras Escrituras» (2 P 3:16).',
        { h: 'Judas, el hermano del Señor' },
        'Judas, como Jacobo, era hermano de Jesús y no creyó en Él hasta después de la resurrección. Quería escribir sobre la salvación común, pero tuvo que escribir para exhortar a contender ardientemente «por la fe que ha sido una vez dada a los santos» (Jud 3). Cita una profecía de Enoc que también aparece en el libro de 1 Enoc (Jud 14-15). Citar una frase verdadera de un libro no lo convierte en Escritura, como Pablo citó a poetas griegos (Hch 17:28). La carta termina con una de las doxologías más hermosas: a aquel que es poderoso para guardaros sin caída… sea gloria (Jud 24-25).',
        { posturas: {
          titulo: '¿Escribió Pedro la segunda carta?',
          a: { n: 'La escribió otro, después de Pedro', t: 'Muchos críticos piensan que 2 Pedro fue escrita a comienzos del siglo II por alguien que usó el nombre del apóstol. Señalan que su griego es distinto del de 1 Pedro, que usa material de Judas y que tardó en ser aceptada en algunas regiones.' },
          b: { n: 'La escribió Pedro', t: 'La carta dice ser de Pedro, testigo de la transfiguración, y la iglesia la reconoció en el canon. La diferencia de estilo se explica si Pedro usó un secretario distinto o escribió él mismo, sin Silvano. Que tardara en aceptarse muestra el cuidado de las iglesias, no que fuera falsa.' },
          c: 'Este recurso sigue la segunda postura, por las mismas razones dadas para las cartas pastorales: una carta que engañara sobre su autor no sería coherente con su enseñanza sobre la verdad.'
        } },
        { ir: { t: 'Ver «1 Enoc y la carta de Judas» en Los libros apócrifos', a: '../../libros-apocrifos/#pseudo/1' } },
        'Las dos cartas tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Judas termina confiando en aquel que es poderoso para guardarnos sin caída (Jud 24). ¿Cómo te ayuda esa confianza frente a las enseñanzas falsas de hoy?'
    },
    {
      id: '1juan', n: '1 Juan: para que sepáis', ref: '1 Juan 1:1-7; 2:1-2, 18-19; 4:1-3, 7-10; 5:11-13', fecha: [85, 95],
      visual: [
        ficha('La primera carta de Juan', [
          ['Autor', 'El apóstol Juan, testigo de la vida de Jesús (1 Jn 1:1-3)'],
          ['Destinatarios', 'Las iglesias de Asia, a las que llama «hijitos»'],
          ['Fecha', 'Hacia el 85–95 d.C.'],
          ['Lugar', 'Éfeso, según la tradición'],
          ['Ocasión', 'Falsos maestros que habían salido de la iglesia negaban que Jesucristo hubiera venido en carne (1 Jn 2:19; 4:2-3)'],
          ['Tema', 'La seguridad de la vida eterna: Dios es luz y Dios es amor'],
          ['Versículo clave', '1 Juan 5:13']
        ]),
        bosquejo('Bosquejo de 1 Juan', [
          ['1:1-4', 'Lo que hemos visto y oído: el Verbo de vida'],
          ['1:5–2:29', 'Dios es luz: andar en la luz, obedecer y no amar al mundo'],
          ['3:1–4:21', 'Dios es amor: hijos de Dios que se aman; probad los espíritus'],
          ['5:1-21', 'La fe que vence al mundo y la seguridad de la vida eterna']
        ], 'Juan vuelve una y otra vez a tres pruebas: creer en Jesús, obedecer sus mandamientos y amar a los hermanos.'),
        { tipo: 'imagen', titulo: 'Imagen', src: '../apocalipsis/img/apo-lectura-iglesia.webp', alt: 'En una casa de una ciudad de Asia del siglo I, un lector de pie lee en voz alta un rollo a un grupo de creyentes sentados, a la luz de lámparas de aceite', pie: '«Estas cosas os he escrito… para que sepáis que tenéis vida eterna» (1 Jn 5:13).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Lo que era desde el principio, lo que hemos oído, lo que hemos visto con nuestros ojos, lo que hemos contemplado, y palparon nuestras manos tocante al Verbo de vida (porque la vida fue manifestada, y la hemos visto, y testificamos, y os anunciamos la vida eterna, la cual estaba con el Padre, y se nos manifestó); lo que hemos visto y oído, eso os anunciamos, para que también vosotros tengáis comunión con nosotros; y nuestra comunión verdaderamente es con el Padre, y con su Hijo Jesucristo. Estas cosas os escribimos, para que vuestro gozo sea cumplido.', ref: '1 Juan 1:1-4' }
      ],
      texto: [
        'Primera de Juan no tiene saludo ni despedida, ni nombra a su autor. Pero su estilo y su vocabulario son los del evangelio de Juan: luz, vida, verdad, amor, permanecer, creer. Comienza como el evangelio, hablando de lo que era desde el principio, y con la fuerza de un testigo: «lo que hemos oído, lo que hemos visto con nuestros ojos, lo que hemos contemplado, y palparon nuestras manos tocante al Verbo de vida» (1 Jn 1:1).',
        { h: 'La ocasión' },
        'Un grupo había salido de las iglesias: «Salieron de nosotros, pero no eran de nosotros» (1 Jn 2:19). Enseñaban que Jesús no había venido realmente en carne, que el pecado no importaba y que ellos tenían un conocimiento superior. Eran precursores del gnosticismo. Ireneo cuenta que en Éfeso Juan se enfrentó a Cerinto, un maestro que separaba al hombre Jesús del Cristo divino. Los que quedaban estaban confundidos y se preguntaban si de verdad eran salvos.',
        { h: 'Tres pruebas' },
        'Juan les da pruebas para reconocer la verdad. La prueba doctrinal: «Todo espíritu que confiesa que Jesucristo ha venido en carne, es de Dios» (1 Jn 4:2). La prueba moral: el que dice que conoce a Dios y no guarda sus mandamientos es mentiroso. La prueba del amor: «El que no ama, no ha conocido a Dios; porque Dios es amor» (1 Jn 4:8). Quien cree en el Hijo, anda en la luz y ama a sus hermanos puede tener seguridad.',
        { h: 'Para que sepáis' },
        'Juan escribió su evangelio para que sus lectores creyeran; escribió esta carta para que los que ya creen sepan que tienen vida eterna (1 Jn 5:13). No es una seguridad para pecar sin cuidado: «estas cosas os escribo para que no pequéis; y si alguno hubiere pecado, abogado tenemos para con el Padre, a Jesucristo el justo» (1 Jn 2:1).',
        ESTUDIO
      ],
      pensar: 'Juan escribió para que los creyentes supieran que tienen vida eterna (1 Jn 5:13). ¿En qué se apoya tu seguridad: en tus sentimientos o en lo que Dios ha dicho de su Hijo?'
    },
    {
      id: '2-3juan', n: '2 y 3 Juan: verdad y hospitalidad', ref: '2 Juan 1-13; 3 Juan 1-15', fecha: [85, 95],
      visual: [
        { tipo: 'tabla', titulo: 'Fichas', tabla: {
          titulo: 'Las dos cartas más breves',
          cab: ['', '2 Juan', '3 Juan'],
          filas: [
            ['Autor', '«El anciano» (2 Jn 1)', '«El anciano» (3 Jn 1)'],
            ['Destinatario', '«La señora elegida y sus hijos»: una iglesia o una mujer y su familia', 'Gayo, un creyente amado y hospitalario'],
            ['Fecha y lugar', 'Hacia el 85–95, desde Éfeso', 'Hacia el 85–95, desde Éfeso'],
            ['Ocasión', 'Maestros itinerantes que negaban la encarnación', 'Diótrefes rechazaba a los misioneros enviados por Juan'],
            ['Tema', 'Andar en la verdad y en el amor; no dar apoyo al error', 'Apoyar a los que salen por el Nombre; imitar lo bueno'],
            ['Versículo clave', '2 Juan 6', '3 Juan 4']
          ],
          nota: 'Cada una cabía en una sola hoja de papiro: unos 13 y 15 versículos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma. Pues mucho me regocijé cuando vinieron los hermanos y dieron testimonio de tu verdad, de cómo andas en la verdad. No tengo yo mayor gozo que este, el oír que mis hijos andan en la verdad. Amado, fielmente te conduces cuando prestas algún servicio a los hermanos, especialmente a los desconocidos, los cuales han dado ante la iglesia testimonio de tu amor; y harás bien en encaminarlos como es digno de su servicio a Dios, para que continúen su viaje. Porque ellos salieron por amor del nombre de El, sin aceptar nada de los gentiles. Nosotros, pues, debemos acoger a tales personas, para que cooperemos con la verdad.', ref: '3 Juan 2-8' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA, capas: ['roma-14', 'iglesia-62'], lugares: ['efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia', 'laodicea'] } }
      ],
      texto: [
        'Segunda y Tercera de Juan son los libros más breves de la Biblia. Cada una cabía en una hoja de papiro. El autor se presenta solo como «el anciano», un título que muestra a la vez su edad y su autoridad sobre las iglesias de Asia. Juan terminó sus días en Éfeso, cuidando como un padre a las congregaciones de la región.',
        { h: 'Los maestros que viajaban' },
        'En el siglo I, los predicadores y misioneros iban de ciudad en ciudad, y las iglesias los recibían en sus casas. Era una gran ayuda para el evangelio, pero también una puerta abierta para los falsos maestros. Las dos cartas tratan esa situación desde lados opuestos.',
        { h: '2 Juan: cuidado con el error' },
        'La segunda carta se dirige a «la señora elegida y a sus hijos». Puede ser una iglesia, descrita como una madre con sus hijos, o una mujer cristiana y su familia. Juan se alegra porque algunos andan en la verdad y les recuerda el mandamiento del amor. Pero les advierte: muchos engañadores no confiesan que Jesucristo ha venido en carne. A quien llega con esa doctrina, no deben recibirlo en casa ni darle la bienvenida (2 Jn 7-10). No se trata de negar el saludo a un vecino, sino de no dar alojamiento y apoyo a un maestro que difunde el error.',
        { h: '3 Juan: abrir la puerta a los fieles' },
        'La tercera carta va dirigida a Gayo, que recibía con generosidad a los hermanos que viajaban por la obra del Señor. Juan lo felicita: «No tengo yo mayor gozo que este, el oír que mis hijos andan en la verdad» (3 Jn 4). En cambio, un tal Diótrefes, «al cual le gusta tener el primer lugar», no recibía a los enviados de Juan y expulsaba de la iglesia a quienes lo hacían (3 Jn 9-10). Juan pone como ejemplo a Demetrio, de quien todos dan buen testimonio.',
        'Juntas, las dos cartas muestran un equilibrio: la verdad sin amor se vuelve dura, y el amor sin verdad se vuelve ingenuo. Hay que apoyar a los que sirven fielmente y no prestar la casa a quienes niegan a Cristo.',
        'Las cartas de Juan tendrán su propio estudio de libro en el sitio, hoy en preparación.'
      ],
      pensar: 'Gayo acogía a los misioneros, «para que cooperemos con la verdad» (3 Jn 8). ¿Cómo puedes apoyar tú a quienes sirven en la obra del Señor?'
    }
  ];

  /* ---------------- VI. Apocalipsis ---------------- */
  const apocalipsis = [
    {
      id: 'apocalipsis', n: 'Apocalipsis: el que viene', ref: 'Apocalipsis 1:1-3, 9-19; 22:12-21', fecha: 95,
      visual: [
        ficha('Apocalipsis', [
          ['Autor', 'El apóstol Juan, desterrado en Patmos (Ap 1:1, 9)'],
          ['Destinatarios', 'Las siete iglesias de Asia, y por medio de ellas toda la iglesia (Ap 1:4, 11)'],
          ['Fecha', 'Hacia el 95 d.C., en tiempos del emperador Domiciano'],
          ['Lugar', 'La isla de Patmos, en el mar Egeo'],
          ['Ocasión', 'Persecución, presión del culto al emperador y tibieza en algunas iglesias'],
          ['Tema', 'Jesucristo vencerá, volverá y hará nuevas todas las cosas'],
          ['Versículo clave', 'Apocalipsis 1:19; también 22:20']
        ]),
        bosquejo('Bosquejo según Apocalipsis 1:19', [
          ['1', '«Las cosas que has visto»: Cristo glorificado entre los candeleros'],
          ['2–3', '«Las que son»: las cartas a las siete iglesias'],
          ['4–22', '«Las que han de ser después de estas»: el trono, los sellos, las trompetas, las copas, la venida de Cristo, el milenio y la nueva creación']
        ], 'El estudio de Apocalipsis del sitio sigue la lectura futurista de los capítulos 4 a 22.'),
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA, capas: ['roma-14', 'iglesia-62'], lugares: ['patmos', 'efeso', 'esmirna', 'pergamo', 'tiatira', 'sardis', 'filadelfia', 'laodicea'], trazos: ['nt-apocalipsis', 'siete-iglesias'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../apocalipsis/img/apo-mensajero-patmos.webp', alt: 'Al amanecer, un mensajero cristiano con un rollo envuelto en tela sube a un pequeño barco de vela en el puerto de piedra de la isla de Patmos, rumbo a Éfeso', pie: 'El libro viajó como una carta a las siete iglesias (Ap 1:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'La revelación de Jesucristo, que Dios le dio, para manifestar a sus siervos las cosas que deben suceder pronto; y la declaró enviándola por medio de su ángel a su siervo Juan, que ha dado testimonio de la palabra de Dios, y del testimonio de Jesucristo, y de todas las cosas que ha visto. Bienaventurado el que lee, y los que oyen las palabras de esta profecía, y guardan las cosas en ella escritas; porque el tiempo está cerca.', ref: 'Apocalipsis 1:1-3' }
      ],
      texto: [
        'El último libro de la Biblia se llama, en griego, apocalipsis, que significa revelación: quitar el velo. Su primera frase dice de quién es: «La revelación de Jesucristo, que Dios le dio, para manifestar a sus siervos las cosas que deben suceder pronto» (Ap 1:1). Es un libro sobre Cristo y sobre el futuro.',
        { h: 'Patmos' },
        'Juan, ya anciano, estaba desterrado en Patmos, una pequeña isla rocosa frente a la costa de Asia, «por causa de la palabra de Dios y el testimonio de Jesucristo» (Ap 1:9). Un día del Señor fue arrebatado en el Espíritu y vio a Cristo glorificado en medio de siete candeleros. Recibió la orden de escribir lo que veía y enviarlo a siete iglesias de Asia, que el mapa muestra en el orden en que un mensajero las recorrería desde Éfeso.',
        { h: 'Tres géneros en un libro' },
        'Apocalipsis es una revelación en visiones y símbolos, como Daniel y Ezequiel. Es también profecía: el único libro del Nuevo Testamento que se presenta así de principio a fin (Ap 1:3; 22:18-19). Y es una carta, con saludo y despedida. Es el único libro de la Biblia que promete una bendición a quien lo lee y lo escucha (Ap 1:3).',
        { h: 'El fin de la historia' },
        'Después de las cartas a las iglesias, Juan sube en visión al trono de Dios y ve al Cordero que fue inmolado tomar el libro sellado. Siguen los juicios de los sellos, las trompetas y las copas, la caída de Babilonia, la venida de Cristo como Rey de reyes, el milenio, el juicio final y la nueva Jerusalén. Así termina la historia que comenzó en Génesis: el árbol de la vida vuelve a estar al alcance del hombre, y Dios habita con su pueblo. La Biblia cierra con una promesa y una oración: «Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús» (Ap 22:20).',
        { posturas: {
          titulo: '¿Cuándo se escribió Apocalipsis?',
          a: { n: 'Hacia el 95, bajo Domiciano', t: 'Ireneo, discípulo de Policarpo, dice que la visión se vio a fines del reinado de Domiciano. La situación de las iglesias, con Laodicea rica después del terremoto del año 60 y Éfeso ya sin su primer amor, encaja mejor con una fecha tardía.' },
          b: { n: 'Hacia el 68, bajo Nerón', t: 'Algunos lo fechan antes de la destrucción del templo, porque Apocalipsis 11 menciona el templo y la ciudad, y porque identifican a la bestia con Nerón. Esta fecha suele ir unida a la lectura preterista, que ve cumplida la mayor parte del libro en el siglo I.' },
          c: 'Este recurso sigue la fecha tardía, como el estudio de Apocalipsis del sitio, y la lectura futurista de los capítulos 4 a 22.'
        } },
        { ir: { t: 'Abrir el estudio de Apocalipsis', a: '../../apocalipsis/' } }
      ],
      pensar: 'La Biblia termina con una oración: «Amén; sí, ven, Señor Jesús» (Ap 22:20). ¿Puedes hacer tuya esa oración hoy?'
    }
  ];

  window.__NT.generales = generales;
  window.__NT.apocalipsis = apocalipsis;
})();
/* Introducción al Nuevo Testamento · parte 5: VII. El Nuevo Testamento como un todo, y armado de RUTA_DATA */
(() => {
  const NT = [30, 100];
  const MEDIT = [[29, 9], [44.5, 40]];

  const conjunto = [
    {
      id: 'cuando', n: 'Cuándo se escribió cada libro', ref: 'Lucas 1:1-4; 1 Corintios 15:3-8; 2 Pedro 1:16', fecha: [45, 95],
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los 27 libros por fecha aproximada',
          cab: ['Fecha aprox.', 'Libro', 'Autor', 'Escrito en'],
          filas: [
            ['45–49', 'Santiago', 'Jacobo, hermano del Señor', 'Jerusalén'],
            ['48–49', 'Gálatas', 'Pablo', 'Antioquía'],
            ['50–51', '1 y 2 Tesalonicenses', 'Pablo', 'Corinto'],
            ['50–60', 'Mateo', 'Mateo', 'Judea o Antioquía'],
            ['55–56', '1 Corintios', 'Pablo', 'Éfeso'],
            ['55–65', 'Marcos', 'Juan Marcos', 'Roma'],
            ['56', '2 Corintios', 'Pablo', 'Macedonia'],
            ['57', 'Romanos', 'Pablo', 'Corinto'],
            ['60–61', 'Lucas', 'Lucas', 'Cesarea o Roma'],
            ['60–61', 'Efesios, Colosenses, Filemón', 'Pablo', 'Roma'],
            ['61–62', 'Filipenses', 'Pablo', 'Roma'],
            ['c. 62', 'Hechos', 'Lucas', 'Roma'],
            ['62–64', '1 Timoteo, Tito', 'Pablo', 'Macedonia'],
            ['63–64', '1 Pedro', 'Pedro', 'Roma'],
            ['64–67', '2 Pedro', 'Pedro', 'Roma'],
            ['64–68', 'Hebreos', 'Desconocido', '¿Italia?'],
            ['65–70', 'Judas', 'Judas, hermano del Señor', 'Desconocido'],
            ['66–67', '2 Timoteo', 'Pablo', 'Roma'],
            ['85–90', 'Juan', 'Juan', 'Éfeso'],
            ['85–95', '1, 2 y 3 Juan', 'Juan', 'Éfeso'],
            ['c. 95', 'Apocalipsis', 'Juan', 'Patmos']
          ],
          nota: 'Fechas aproximadas, las de Cronología del Nuevo Testamento; varias se discuten (ver cada libro).'
        } },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-orden.svg', alt: 'Línea de tiempo del año 40 al 100 con cada libro del Nuevo Testamento ubicado en la fecha aproximada en que se escribió, coloreado según su grupo', pie: 'Cuándo se escribió cada libro: fechas aproximadas.', origen: 'esquema' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: MEDIT, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'corinto', 'efeso', 'roma', 'patmos', 'r-macedonia', 'cesarea'] } }
      ],
      texto: [
        'Leído en orden cronológico, el Nuevo Testamento cuenta su propia historia. La tabla ordena los 27 libros por la fecha aproximada en que se escribieron, y el mapa muestra los lugares desde donde salieron.',
        { h: 'Tres etapas' },
        'Hasta mediados de los años 50, los libros nacen de la misión: cartas de Santiago a los creyentes judíos dispersos, y de Pablo a las iglesias que acababa de fundar. Entre los años 55 y 67, el período más fecundo, se escriben las grandes cartas de Pablo, los tres primeros evangelios, Hechos, las cartas de Pedro, Hebreos y Judas. Es la generación de los apóstoles que se acerca a su fin: Jacobo muere en el 62, y Pedro y Pablo en la persecución de Nerón, entre el 64 y el 67. Por eso esos libros insisten en guardar la fe y pasarla a otros. Después del año 70, cuando el templo ya ha sido destruido, queda el último apóstol: Juan escribe desde Éfeso y Patmos su evangelio, sus cartas y Apocalipsis.',
        { h: 'Cerca de los hechos' },
        'El Nuevo Testamento entero se escribió dentro del siglo I, la mayor parte entre veinte y treinta y cinco años después de la resurrección, cuando muchos testigos todavía vivían. Pablo podía decir que, de los más de quinientos hermanos que vieron al resucitado a la vez, «muchos viven aún» (1 Co 15:6). Pedro afirmaba que no siguieron fábulas artificiosas, sino que vieron con sus propios ojos la majestad de Cristo (2 P 1:16). Para la historia antigua, es una distancia muy corta: las principales biografías de Alejandro Magno que se conservan, las de Plutarco y Arriano, se escribieron más de cuatrocientos años después de su muerte.',
        'Las fechas exactas se discuten, y algunos estudiosos proponen fechas más tardías para varios libros. Este recurso sigue las fechas tradicionales, que concuerdan con lo que los libros dicen de sí mismos y con el hecho de que ninguno describe como pasada la destrucción del templo del año 70, el acontecimiento más grande de la historia judía del siglo I.',
        { ir: { t: 'Ver «¿Por qué casi todo es anterior al 70?» en Cronología del Nuevo Testamento', a: '../../cronologia-nuevo-testamento/#libros/5' } }
      ],
      pensar: 'Los apóstoles escribieron cuando muchos testigos aún vivían. ¿Qué significa para ti que tu fe se apoye en hechos que otros vieron y oyeron?'
    },
    {
      id: 'autores', n: 'Nueve autores, un solo Autor', ref: '2 Timoteo 3:16; 2 Pedro 1:20-21; 3:15-16; Juan 14:26; 16:13', fecha: NT,
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-autores.svg', alt: 'Los nueve autores del Nuevo Testamento con sus libros: Mateo, Marcos, Lucas, Juan, Pablo, el autor de Hebreos, Santiago, Pedro y Judas, unidos por el Espíritu Santo que los inspiró', pie: 'Nueve autores humanos, un solo Espíritu.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los autores y su relación con Jesús',
          cab: ['Autor', 'Quién era', 'Libros'],
          filas: [
            ['Mateo', 'Apóstol, antes publicano', 'Mateo'],
            ['Juan', 'Apóstol, el discípulo amado', 'Juan, 1, 2 y 3 Juan, Apocalipsis'],
            ['Pedro', 'Apóstol, líder de los doce', '1 y 2 Pedro'],
            ['Pablo', 'Apóstol a los gentiles, llamado por el resucitado', '13 cartas'],
            ['Santiago', 'Hermano del Señor, líder en Jerusalén', 'Santiago'],
            ['Judas', 'Hermano del Señor', 'Judas'],
            ['Marcos', 'Compañero de Pedro y de Pablo', 'Marcos'],
            ['Lucas', 'Médico, compañero de Pablo', 'Lucas, Hechos'],
            ['Autor de Hebreos', 'Del círculo de los apóstoles', 'Hebreos']
          ],
          nota: 'Cuatro apóstoles, dos hermanos del Señor y tres colaboradores cercanos de los apóstoles.'
        } }
      ],
      texto: [
        'Los 27 libros tienen nueve autores humanos muy distintos. Un cobrador de impuestos, dos pescadores, un fariseo erudito, un médico gentil, dos hermanos de Jesús que al principio no creyeron en Él, un joven que había abandonado un viaje misionero y un maestro de nombre desconocido. Cada uno escribió con su propio vocabulario, su estilo y su personalidad. Pablo argumenta como un rabino; Lucas investiga como un historiador; Juan contempla; Santiago exhorta como un profeta.',
        { h: 'Cercanos a Jesús' },
        'Como muestra la tabla, todos estuvieron cerca de Jesús o de sus apóstoles. Cuatro fueron apóstoles; dos eran hermanos del Señor; los otros tres fueron colaboradores cercanos de los apóstoles. Esa cercanía fue uno de los criterios con que la iglesia antigua reconoció los libros.',
        { h: 'Un solo Autor' },
        'Detrás de las nueve voces hay una sola: la del Espíritu Santo. Jesús prometió a sus apóstoles que el Espíritu les enseñaría todas las cosas y les recordaría todo lo que Él les había dicho (Jn 14:26), y que los guiaría a toda la verdad (Jn 16:13). Pablo afirma que «toda la Escritura es inspirada por Dios» (2 Ti 3:16), y Pedro, que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo (2 P 1:21). La inspiración no anuló la personalidad de los autores: Dios los usó tal como eran, con su historia y su manera de escribir, para decir exactamente lo que Él quería.',
        'Por eso el Nuevo Testamento tiene una unidad notable. Escrito por nueve personas, en distintos lugares, a lo largo de unos cincuenta años, presenta el mismo Cristo, el mismo evangelio y la misma esperanza.',
        { ir: { t: 'Ver «Los escritos de los apóstoles» en La Palabra de Dios', a: '../../palabra-de-dios/#inspiracion/5' } }
      ],
      pensar: 'Dios usó a un publicano, a pescadores y a un perseguidor para escribir su Palabra. ¿Qué te dice eso sobre cómo puede usarte a ti, con tu historia y tu personalidad?'
    },
    {
      id: 'hilos', n: 'Los hilos que lo unen', ref: 'Hebreos 1:1-3; Hechos 2:33; Efesios 1:22-23; Tito 2:13; Apocalipsis 22:20', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro hilos en los cinco grupos',
          cab: ['', 'Cristo', 'El Espíritu Santo', 'La iglesia', 'La esperanza'],
          filas: [
            ['Evangelios', 'Su vida, muerte y resurrección', 'Lo unge y es prometido (Lc 4:18; Jn 14:16)', 'Llama a los doce: «edificaré mi iglesia» (Mt 16:18)', 'Anuncia su venida (Mt 24:30)'],
            ['Hechos', 'Exaltado a la diestra de Dios', 'Derramado en Pentecostés (Hch 2:4, 33)', 'Nace y se extiende por el mundo', 'Volverá como fue al cielo (Hch 1:11)'],
            ['Cartas de Pablo', 'Cabeza de todo; en Él somos justificados', 'Mora en el creyente, da dones y fruto', 'Cuerpo de Cristo', 'El arrebatamiento y la resurrección (1 Ts 4:16-17)'],
            ['Hebreos y generales', 'Sumo sacerdote; ejemplo en el sufrimiento', 'Inspiró las Escrituras (2 P 1:21)', 'Real sacerdocio, peregrinos', 'El día del Señor y cielos nuevos (2 P 3:13)'],
            ['Apocalipsis', 'El Cordero que vence y reina', 'Habla a las iglesias (Ap 2:7)', 'La esposa del Cordero', 'La nueva Jerusalén (Ap 21–22)']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo; el cual, siendo el resplandor de su gloria, y la imagen misma de su sustancia, y quien sustenta todas las cosas con la palabra de su poder, habiendo efectuado la purificación de nuestros pecados por medio de sí mismo, se sentó a la diestra de la Majestad en las alturas,', ref: 'Hebreos 1:1-3' }
      ],
      texto: [
        'Al recorrer los 27 libros, algunos temas aparecen una y otra vez, como hilos que atraviesan toda la tela. La tabla sigue cuatro de ellos a través de los cinco grupos de libros.',
        { h: 'Cristo, el centro' },
        'El primer hilo es Jesucristo. Los evangelios cuentan lo que hizo; Hechos, lo que sigue haciendo desde el cielo; las cartas explican lo que su obra significa; Apocalipsis muestra su victoria final. Hebreos lo resume: Dios, que antes habló por los profetas, nos ha hablado por el Hijo, el resplandor de su gloria, que efectuó la purificación de nuestros pecados y se sentó a la diestra de la Majestad (He 1:1-3).',
        { h: 'El Espíritu Santo' },
        'El segundo hilo es el Espíritu Santo. Jesús fue concebido por el Espíritu, ungido por Él y lleno de Él. Prometió a sus discípulos que serían bautizados con el Espíritu Santo y recibirían poder (Hch 1:5, 8). En Pentecostés la promesa se cumplió, y a lo largo de Hechos el Espíritu llena, guía, envía y da poder para testificar. Las cartas enseñan que mora en cada creyente, produce su fruto y reparte sus dones para la edificación de la iglesia. El Nuevo Testamento es, de principio a fin, un libro del Espíritu.',
        { h: 'La iglesia' },
        'El tercer hilo es la iglesia. Jesús anunció que la edificaría (Mt 16:18); Hechos cuenta cómo nació y creció; las cartas la describen como cuerpo de Cristo, templo del Espíritu y familia de Dios, y le enseñan a vivir en santidad, unidad y amor. Apocalipsis la muestra como la esposa del Cordero.',
        { h: 'La esperanza' },
        'El cuarto hilo es la esperanza. El Nuevo Testamento mira siempre hacia adelante: Cristo volverá, primero por su iglesia y luego en gloria con ella, para juzgar y reinar. Todos los grupos de libros hablan de esa venida, y la Biblia termina con ella: «Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús» (Ap 22:20).',
        { ir: { t: 'Abrir La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/' } },
        { ir: { t: 'Ver «La esperanza bienaventurada» en Los últimos tiempos', a: '../../escatologia/#panorama/1' } }
      ],
      pensar: 'Cristo, el Espíritu, la iglesia y la esperanza recorren todo el Nuevo Testamento. ¿Cuál de esos cuatro hilos necesitas fortalecer en tu vida cristiana?'
    },
    {
      id: 'leer', n: 'Cómo leer el Nuevo Testamento completo', ref: 'Hechos 17:11; Colosenses 3:16; 2 Timoteo 3:14-17; Apocalipsis 1:3', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Plan', tabla: {
          titulo: 'El Nuevo Testamento en trece semanas',
          cab: ['Semana', 'Lectura', 'Capítulos'],
          filas: [
            ['1', 'Marcos; Gálatas', '22'],
            ['2', 'Mateo 1–20', '20'],
            ['3', 'Mateo 21–28; 1 y 2 Tesalonicenses; Santiago', '21'],
            ['4', 'Lucas 1–21', '21'],
            ['5', 'Lucas 22–24; Hechos 1–17', '20'],
            ['6', 'Hechos 18–28; 1 Corintios 1–9', '20'],
            ['7', '1 Corintios 10–16; 2 Corintios', '20'],
            ['8', 'Romanos; Filipenses', '20'],
            ['9', 'Efesios; Colosenses; Filemón; 1 Timoteo; Tito', '20'],
            ['10', '2 Timoteo; Hebreos; 1 Pedro 1–3', '20'],
            ['11', '1 Pedro 4–5; 2 Pedro; Judas; Juan 1–14', '20'],
            ['12', 'Juan 15–21; 1, 2 y 3 Juan; Apocalipsis 1–6', '20'],
            ['13', 'Apocalipsis 7–22', '16']
          ],
          nota: '260 capítulos en 91 días: unos tres capítulos por día. Las cartas se leen junto a los momentos de Hechos en que se escribieron.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../palabra-de-dios/img/carta-leida.webp', alt: 'Una pequeña congregación del siglo I reunida en el patio de una casa escucha a un hombre que lee en voz alta una carta recién llegada', pie: 'Los primeros cristianos escuchaban las cartas completas, de una sola vez.', origen: 'ia' }
      ],
      texto: [
        'El Nuevo Testamento tiene 260 capítulos. Leyendo unos tres por día, se puede leer completo en trece semanas, como propone la tabla. Leyendo uno por día, en menos de nueve meses. No es una tarea imposible: es una de las mejores inversiones de tiempo que un creyente puede hacer.',
        { h: 'Un orden que ayuda' },
        'El plan no sigue exactamente el orden de la Biblia. Comienza con Marcos, el evangelio más breve, para tener pronto una visión de conjunto de la vida de Jesús. Luego intercala las cartas con los evangelios y con Hechos, más o menos en el orden en que se escribieron: Gálatas y Tesalonicenses al comienzo, Corintios después del capítulo 19 de Hechos, Romanos al final del tercer viaje, las cartas de la prisión y las pastorales después de Hechos. Juan y sus cartas quedan para el final, junto con Apocalipsis, como en la historia.',
        { h: 'Sugerencias' },
        'Lee las cartas breves de una sola vez, como las escuchaban las iglesias. Antes de leer un libro, vuelve a su ficha en este recurso para recordar quién lo escribió, a quién y por qué. Ten a mano un cuaderno para anotar una verdad sobre Dios, un mandamiento para obedecer y una pregunta para estudiar. Pide al Espíritu Santo que te ilumine, porque Él inspiró lo que vas a leer. Y, como los de Berea, escudriña cada día las Escrituras para ver si las cosas son así (Hch 17:11).',
        'Leer en grupo también ayuda. Una familia, un grupo de jóvenes o una célula pueden seguir el mismo plan y conversar una vez por semana sobre lo leído. La palabra de Cristo habita en abundancia cuando se comparte (Col 3:16).',
        { ir: { t: 'Ver «Observar: leer con preguntas» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/2' } }
      ],
      pensar: '«Bienaventurado el que lee» (Ap 1:3). ¿Cuándo comenzarás a leer el Nuevo Testamento completo, y con quién podrías hacerlo?'
    },
    {
      id: 'repaso', n: 'Repaso: ¿qué libro es?', ref: 'Juan 20:31; Hechos 1:8; 1 Tesalonicenses 4:16-17; 2 Timoteo 4:7', fecha: NT,
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-27-libros.svg', alt: 'Los 27 libros del Nuevo Testamento en cinco grupos de colores', pie: 'Los 27 libros del Nuevo Testamento, agrupados como aparecen en la Biblia.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cuatro.svg', alt: 'Cuatro columnas con los cuatro evangelios: Mateo presenta al Rey, Marcos al Siervo, Lucas al Hombre perfecto y Juan al Hijo de Dios', pie: 'Cuatro retratos de Jesús.', origen: 'esquema' }
      ],
      texto: [
        'Para terminar, pon a prueba lo que aprendiste. Cada pregunta describe un libro del Nuevo Testamento. Elige una opción; si te equivocas, la explicación te dirá por qué y podrás intentarlo de nuevo. Puedes volver a la ficha de cualquier libro con el botón de rutas.',
        { ejercicio: {
          pregunta: '1. Su autor dice que lo escribió «para que creáis que Jesús es el Cristo, el Hijo de Dios». ¿Qué libro es?',
          opciones: [
            { t: 'El evangelio de Juan', ok: true, por_que: 'Juan declara su propósito al final del capítulo 20.' },
            { t: 'El evangelio de Mateo', ok: false, por_que: 'Mateo presenta a Jesús como el Mesías prometido, pero esa frase es de Juan (Jn 20:31).' },
            { t: 'La primera carta de Juan', ok: false, por_que: 'Primera de Juan se escribió para que los que creen sepan que tienen vida eterna (1 Jn 5:13).' }
          ],
          explicacion: 'Juan escribió su evangelio para despertar la fe; su primera carta, para dar seguridad a los que ya creen.'
        } },
        { ejercicio: {
          pregunta: '2. Es la carta más urgente de Pablo: no tiene acción de gracias y defiende que el hombre es justificado por la fe y no por las obras de la ley. ¿Cuál es?',
          opciones: [
            { t: 'Romanos', ok: false, por_que: 'Romanos expone la justificación por la fe con calma y orden, y comienza con acción de gracias (Ro 1:8).' },
            { t: 'Gálatas', ok: true, por_que: 'Pablo va directo al problema: «Estoy maravillado…» (Ga 1:6).' },
            { t: 'Efesios', ok: false, por_que: 'Efesios comienza con una gran alabanza (Ef 1:3).' }
          ],
          explicacion: 'Gálatas responde a los judaizantes; Romanos desarrolla el mismo evangelio de manera completa.'
        } },
        { ejercicio: {
          pregunta: '3. Es el único libro del Nuevo Testamento cuyo autor no conocemos. ¿Cuál es?',
          opciones: [
            { t: 'Santiago', ok: false, por_que: 'Lo escribió Jacobo, el hermano del Señor (Stg 1:1).' },
            { t: 'Judas', ok: false, por_que: 'Lo escribió Judas, hermano de Jacobo (Jud 1).' },
            { t: 'Hebreos', ok: true, por_que: 'No tiene saludo con el nombre del autor; ya Orígenes dijo que solo Dios sabe quién la escribió.' }
          ],
          explicacion: 'La autoridad de Hebreos no depende de conocer el nombre de su autor.'
        } },
        { ejercicio: {
          pregunta: '4. Pablo pide a un creyente que reciba a su esclavo fugitivo «como hermano amado». ¿Qué carta es?',
          opciones: [
            { t: 'Tito', ok: false, por_que: 'Tito trata del orden de las iglesias de Creta.' },
            { t: 'Filemón', ok: true, por_que: 'Pablo intercede por Onésimo (Flm 16).' },
            { t: 'Colosenses', ok: false, por_que: 'Colosenses viajó junto con Filemón y menciona a Onésimo (Col 4:9), pero el ruego por él está en Filemón.' }
          ],
          explicacion: 'Filemón muestra cómo el evangelio convierte al amo y al esclavo en hermanos.'
        } },
        { ejercicio: {
          pregunta: '5. Su bosquejo sigue el plan de un versículo: Jerusalén, Judea y Samaria, y hasta lo último de la tierra. ¿Qué libro es?',
          opciones: [
            { t: 'Hechos', ok: true, por_que: 'Hechos 1:8 es el índice del libro.' },
            { t: 'Lucas', ok: false, por_que: 'Lucas termina en Jerusalén; Hechos, su segundo tomo, sigue el plan de Hch 1:8.' },
            { t: 'Romanos', ok: false, por_que: 'Romanos habla de llevar el evangelio a España, pero no sigue ese plan.' }
          ],
          explicacion: 'Hechos cuenta cómo el Espíritu llevó el testimonio de Jerusalén a Roma.'
        } },
        { ejercicio: {
          pregunta: '6. Pablo consuela a una iglesia por sus creyentes que habían muerto y enseña que los vivos serán arrebatados juntamente con ellos. ¿Qué carta es?',
          opciones: [
            { t: '1 Corintios', ok: false, por_que: 'Primera de Corintios enseña la resurrección (1 Co 15), pero el pasaje del arrebatamiento está en 1 Ts 4:13-18.' },
            { t: '2 Timoteo', ok: false, por_que: 'Segunda de Timoteo es el testamento de Pablo.' },
            { t: '1 Tesalonicenses', ok: true, por_que: 'Es el pasaje de 1 Ts 4:13-18.' }
          ],
          explicacion: 'Primera de Tesalonicenses es la enseñanza más clara del arrebatamiento de la iglesia.'
        } },
        { ejercicio: {
          pregunta: '7. Es la última carta de Pablo que conocemos: «He peleado la buena batalla, he acabado la carrera, he guardado la fe». ¿Cuál es?',
          opciones: [
            { t: 'Filipenses', ok: false, por_que: 'Filipenses es de la primera prisión, cuando Pablo esperaba ser liberado (Fil 2:24).' },
            { t: '2 Timoteo', ok: true, por_que: 'Pablo la escribió en su segunda prisión, sabiendo que iba a morir (2 Ti 4:6-7).' },
            { t: 'Hebreos', ok: false, por_que: 'Hebreos habla de correr la carrera (He 12:1), pero su autor es desconocido.' }
          ],
          explicacion: 'Segunda de Timoteo es el testamento de Pablo.'
        } },
        { ejercicio: {
          pregunta: '8. Fue escrito por el hermano del Señor que dirigía la iglesia de Jerusalén y enseña que la fe sin obras está muerta. ¿Qué libro es?',
          opciones: [
            { t: 'Santiago', ok: true, por_que: 'Jacobo, el hermano del Señor, escribió a las doce tribus en la dispersión (Stg 1:1; 2:17).' },
            { t: 'Judas', ok: false, por_que: 'Judas también era hermano del Señor, pero no dirigía la iglesia de Jerusalén ni trata ese tema.' },
            { t: '1 Pedro', ok: false, por_que: 'Pedro escribió desde Roma a creyentes de Asia Menor sobre la esperanza en el sufrimiento.' }
          ],
          explicacion: 'Santiago y Pablo no se contradicen: la fe que salva produce obras.'
        } }
      ],
      pensar: 'Has recorrido los 27 libros del Nuevo Testamento. ¿Cuál quieres leer completo primero, y por qué?'
    }
  ];

  const N = window.__NT;
  delete window.__NT;
  const LINEA = { desde: 25, hasta: 100, hitos: [
    { a: 33, t: 'Cruz y Pentecostés' }, { a: [46, 57], t: 'Viajes de Pablo' }, { a: 64, t: 'Nerón persigue' },
    { a: 70, t: 'Cae el templo' }, { a: 95, t: 'Apocalipsis' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Introducción al Nuevo Testamento',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama', info: 'Qué es el Nuevo Testamento, su mundo, sus géneros, su orden y su canon', estaciones: N.panorama, linea: LINEA },
      { id: 'evangelios', grupo: 'Los libros', n: 'II. Los evangelios', info: 'Mateo, Marcos, Lucas y Juan: cuatro retratos de Jesús', estaciones: N.evangelios, linea: LINEA },
      { id: 'hechos', grupo: 'Los libros', n: 'III. Hechos', info: 'El puente entre los evangelios y las cartas', estaciones: N.hechos, linea: LINEA },
      { id: 'pablo', grupo: 'Los libros', n: 'IV. Las cartas de Pablo', info: 'Trece cartas, de Gálatas a 2 Timoteo, en su contexto', estaciones: N.pablo, linea: LINEA },
      { id: 'generales', grupo: 'Los libros', n: 'V. Hebreos y las cartas generales', info: 'Hebreos, Santiago, Pedro, Juan y Judas', estaciones: N.generales, linea: LINEA },
      { id: 'apocalipsis', grupo: 'Los libros', n: 'VI. Apocalipsis', info: 'La revelación de Jesucristo', estaciones: N.apocalipsis, linea: LINEA },
      { id: 'conjunto', grupo: 'El conjunto', n: 'VII. El Nuevo Testamento como un todo', info: 'Fechas, autores, temas, un plan de lectura y un repaso', estaciones: conjunto, linea: LINEA }
    ]
  };
})();
