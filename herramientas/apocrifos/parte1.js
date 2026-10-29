/* ==========================================================
   Recursos Bíblicos — Los libros apócrifos y pseudoepígrafos · contenido de las rutas
   FUENTE de public/apps/libros-apocrifos/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/apocrifos_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica, sin nombrarla.
   La pregunta del canon se estudia en La Palabra de Dios; aquí se recorren los libros mismos.
   Los apócrifos no están en la Biblia del sitio: su contenido se parafrasea, sin comillas ni burbuja.
   No escribir referencias que la burbuja tomaría por capítulos inexistentes de la Biblia
   («Daniel 13», «Ester 11», «Salmo 151»): se dice «el capítulo 13 de Daniel en las Biblias católicas».
   ========================================================== */
(() => {
  const V = {
    judea: [[30.9, 33.9], [33.0, 36.4]],
    oriente: [[27.5, 27.0], [39.5, 53.5]],
    mediterraneo: [[25.0, 8.0], [42.0, 46.0]],
    europa: [[28.0, -2.0], [55.0, 42.0]],
    egipto: [[29.0, 28.5], [33.5, 36.5]]
  };
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/apocrifos_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(/*@@IMAGENES*/[]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (f.startsWith('../') ? { src: EMB[f] || f } : HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  const PALABRA = '../../palabra-de-dios/';
  window.__APO = { V, mapa, pasos, img, esq, foto, cita, tabla, ir, PALABRA };

  // ================== RUTA I. Qué son estos libros ==================
  const que = [
    {
      id: 'tres-palabras', n: 'Tres palabras: apócrifo, deuterocanónico y pseudoepígrafo', ref: 'Romanos 3:2; Lucas 24:44; Judas 14-15',
      visual: [
        img('mesa-rollos.webp', 'Sobre una mesa de madera antigua, a la luz de una lámpara de aceite, hay rollos de pergamino abiertos con escritura hebrea y griega, un códice encuadernado en cuero y un tintero con cálamo', 'Los libros de este recurso se copiaron en rollos y códices junto a la Escritura durante siglos. Recreación.'),
        tabla({
          titulo: 'Tres nombres para estos libros',
          cab: ['Palabra', 'Qué significa', 'Quién la usa', 'A qué libros se refiere'],
          filas: [
            ['Apócrifo', '«Oculto», «escondido» (griego apókryphos)', 'Las iglesias evangélicas', 'Los libros que tienen de más las Biblias católicas y ortodoxas: Tobías, Judit, Macabeos, Sabiduría, Eclesiástico, Baruc y las adiciones a Ester y Daniel'],
            ['Deuterocanónico', '«Del segundo canon»: reconocido después', 'La Iglesia católica', 'Los mismos libros, que para ella son Escritura igual que los demás'],
            ['Pseudoepígrafo', '«Con título falso»: atribuido a un personaje antiguo que no lo escribió', 'Los estudiosos de todas las tradiciones', 'Escritos judíos como 1 Enoc, Jubileos o los Salmos de Salomón, que ninguna de las grandes iglesias de Occidente recibe'],
            ['Libros que se leen', 'Traducción del griego anagignoskómena', 'Las iglesias ortodoxas', 'Los deuterocanónicos y algunos más (1 Esdras, 3 Macabeos, la Oración de Manasés, el salmo 151)']
          ],
          nota: 'Cuidado: lo que un católico llama «apócrifos» son los libros que un evangélico llama «pseudoepígrafos».'
        })
      ],
      texto: [
        'Si alguna vez abriste una Biblia católica, habrás notado que tiene más libros que la Reina-Valera. Aparecen nombres que no están en nuestras Biblias, como Tobías, Judit, Sabiduría, Eclesiástico, Baruc y dos libros de los Macabeos; además, Ester y Daniel tienen capítulos más largos. ¿De dónde salieron esos libros? ¿Quién los escribió? ¿Por qué unas iglesias los leen como Escritura y otras no? Este recurso responde esas preguntas recorriendo los libros uno por uno.',
        { h: 'Un mismo grupo de libros, tres nombres' },
        'Las iglesias evangélicas llaman a estos libros apócrifos, una palabra griega que significa «oculto». En la antigüedad se usaba para escritos reservados a unos pocos o de origen dudoso. Jerónimo, el traductor de la Biblia al latín, la aplicó hacia el año 400 a los libros que estaban en la Biblia griega pero no en la hebrea, y los reformadores del siglo XVI la retomaron.',
        'La Iglesia católica los llama deuterocanónicos, es decir, «del segundo canon». El nombre no quiere decir que valgan menos: para ella son tan inspirados como los demás, solo que su lugar en la Biblia se discutió más tiempo. A los otros libros los llama protocanónicos. Las iglesias ortodoxas usan una expresión antigua, «libros que se leen», y su lista es algo más larga.',
        'Hay un tercer grupo: los pseudoepígrafos, palabra que significa «con título falso». Son escritos judíos de la misma época que se presentan como obra de grandes personajes del pasado, como Enoc, Moisés, los doce hijos de Jacob o Salomón. Ninguna de las grandes iglesias de Occidente los recibe, aunque la iglesia de Etiopía incluye dos de ellos en su Biblia.',
        { h: 'Lo que estudia este recurso' },
        'La pregunta de cuáles libros son Escritura se estudia en La Palabra de Dios, en la ruta del canon. Aquí se estudian los libros mismos: qué cuentan, cuándo y dónde se escribieron, qué nos enseñan sobre los judíos que vivieron antes de Jesús y en qué se apartan de la Escritura. Pablo dice que a Israel le fue confiada «la palabra de Dios» (Ro 3:2). Conocer lo que Israel escribió además de esa palabra ayuda a valorarla mejor.',
        ir('Ver en La Palabra de Dios: los libros apócrifos y el canon', PALABRA + '#canon/3'),
        { ejercicio: {
          pregunta: 'Un amigo católico te dice que Tobías es un libro deuterocanónico. ¿Qué quiere decir?',
          opciones: [
            { t: 'Que para su iglesia es Escritura, aunque su lugar en la Biblia se discutió más tiempo.', ok: true, por_que: 'Eso significa «del segundo canon». Para la Iglesia católica tiene la misma autoridad que los demás libros.' },
            { t: 'Que su iglesia lo considera un libro falso y sin valor.', ok: false, por_que: 'Para eso un católico usaría la palabra «apócrifo», y la aplicaría a otros libros, como 1 Enoc.' },
            { t: 'Que es un libro que se lee en la liturgia pero que no es inspirado.', ok: false, por_que: 'Esa es más bien la postura de las iglesias de la Reforma: libros útiles para leer, pero no para fundar la doctrina.' }
          ],
          explicacion: 'Los mismos libros reciben nombres distintos según la tradición. Conocerlos evita malentendidos al conversar.'
        } }
      ],
      pensar: 'Israel recibió y guardó la palabra de Dios para todas las naciones (Ro 3:2). ¿Valoras la Biblia que tienes como un tesoro recibido de otros que la cuidaron antes que tú?'
    },
    {
      id: 'cada-biblia', n: 'Qué libros trae cada Biblia', ref: 'Lucas 24:44; Romanos 3:2',
      visual: [
        esq('esquema-canones.svg', 'Barras que comparan el Antiguo Testamento de tres Biblias: la evangélica, con 39 libros; la católica, con 46, y la ortodoxa griega, con unos 50; las tres comparten los mismos 27 libros del Nuevo Testamento', 'El Antiguo Testamento varía entre las tradiciones; el Nuevo Testamento es el mismo en todas.'),
        tabla({
          titulo: 'Los libros de más en cada tradición',
          cab: ['Libro', 'Evangélica', 'Católica', 'Ortodoxa griega'],
          filas: [
            ['Tobías', '—', 'Sí', 'Sí'],
            ['Judit', '—', 'Sí', 'Sí'],
            ['Adiciones a Ester (107 versículos)', '—', 'Sí', 'Sí'],
            ['Sabiduría', '—', 'Sí', 'Sí'],
            ['Eclesiástico (Sirácida)', '—', 'Sí', 'Sí'],
            ['Baruc, con la Carta de Jeremías', '—', 'Sí', 'Sí'],
            ['Adiciones a Daniel (Azarías, Susana, Bel)', '—', 'Sí', 'Sí'],
            ['1 y 2 Macabeos', '—', 'Sí', 'Sí'],
            ['1 Esdras', '—', 'Apéndice', 'Sí'],
            ['3 Macabeos', '—', '—', 'Sí'],
            ['Oración de Manasés', '—', 'Apéndice', 'Sí'],
            ['Salmo adicional (151)', '—', '—', 'Sí'],
            ['4 Macabeos', '—', '—', 'Apéndice']
          ],
          nota: 'Las iglesias ortodoxas no tienen una lista única. La iglesia de Etiopía, con unos 81 libros, incluye además 1 Enoc y Jubileos.'
        })
      ],
      texto: [
        'La Reina-Valera tiene 66 libros: 39 en el Antiguo Testamento y 27 en el Nuevo. Una Biblia católica tiene 73: los mismos 66 más siete libros completos (Tobías, Judit, 1 y 2 Macabeos, Sabiduría, Eclesiástico y Baruc) y algunas secciones añadidas a Ester y Daniel. Una Biblia ortodoxa griega tiene todavía algunos libros más, y la de la iglesia de Etiopía es la más extensa de todas.',
        { h: 'El Nuevo Testamento es el mismo' },
        'La diferencia está solo en el Antiguo Testamento. Católicos, ortodoxos griegos y evangélicos reciben los mismos 27 libros del Nuevo Testamento. Las discusiones sobre el canon tienen que ver con los escritos judíos de los siglos anteriores a Cristo, no con los evangelios ni las cartas de los apóstoles.',
        { h: 'Los 39 libros evangélicos son los 24 de la Biblia hebrea' },
        'Los 39 libros del Antiguo Testamento evangélico tienen exactamente el mismo contenido que la Biblia hebrea que usan los judíos hasta hoy. Ellos la cuentan como 24 libros, porque juntan los doce profetas menores en uno solo y no separan Samuel, Reyes, Crónicas ni Esdras-Nehemías. Jesús se refirió a esa Biblia por sus tres partes cuando habló de lo que estaba escrito de él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44).',
        'Los libros de más llegaron a las Biblias cristianas a través de la traducción griega del Antiguo Testamento, la Septuaginta, que los judíos de Alejandría usaban y que se copió junto con otros escritos de la época. La próxima estación muestra dónde y cuándo se escribieron, y la siguiente cuenta cómo llegaron a las Biblias.',
        { h: 'Los apéndices' },
        'Algunos libros están en una zona intermedia. La Vulgata, la Biblia latina de la Iglesia católica, imprimió 1 Esdras, 2 Esdras y la Oración de Manasés en un apéndice, después del Nuevo Testamento, para que no se perdieran, pero sin reconocerlos como Escritura. Las Biblias ortodoxas griegas ponen 4 Macabeos en un apéndice.',
        { ejercicio: {
          pregunta: '¿En qué se diferencian la Biblia católica y la evangélica?',
          opciones: [
            { t: 'En el Nuevo Testamento: la católica tiene cartas que la evangélica no tiene.', ok: false, por_que: 'Las dos tienen los mismos 27 libros del Nuevo Testamento.' },
            { t: 'En el Antiguo Testamento: la católica tiene siete libros más y secciones añadidas a Ester y Daniel.', ok: true, por_que: 'Tobías, Judit, 1 y 2 Macabeos, Sabiduría, Eclesiástico y Baruc, además de las adiciones.' },
            { t: 'En nada: solo cambia el orden de los libros.', ok: false, por_que: 'Además del orden, la católica tiene 73 libros y la evangélica 66.' }
          ],
          explicacion: 'Las tres grandes tradiciones comparten el Nuevo Testamento; difieren en los escritos judíos de los siglos anteriores a Cristo.'
        } }
      ],
      pensar: 'Jesús encontró lo que se había escrito de él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44). ¿Qué lugar tiene el Antiguo Testamento en tu lectura de la Biblia?'
    },
    {
      id: 'cuando-donde', n: 'Cuándo y dónde se escribieron', ref: 'Daniel 11:31-32; Malaquías 4:4-6; Gálatas 4:4', fecha: [-300, 100],
      visual: [
        pasos([
          { t: 'Judea bajo los Ptolomeos de Egipto (hacia 250 a.C.): en Alejandría se traduce la ley al griego', fecha: -250, estado: { view: V.mediterraneo, capas: ['ptolomeos-250'], lugares: ['jerusalen', 'alejandria'] } },
          { t: 'Judea bajo los seléucidas (desde 198 a.C.): Ben Sira escribe en Jerusalén; luego vienen la crisis y los macabeos', fecha: -180, estado: { view: V.oriente, capas: ['seleucidas-200'], lugares: ['jerusalen', 'modin', 'antioquia'] } },
          { t: 'Los escenarios de los relatos: Tobías en Nínive y Media; Judit, en una ciudad de Samaria', fecha: -150, estado: { view: V.oriente, lugares: ['ninive', 'ecbatana', 'ragues', 'samaria', 'jerusalen'], trazos: ['apo-tobias'] } },
          { t: 'Bajo Roma (desde 63 a.C.): los Salmos de Salomón, Sabiduría en Alejandría y, después del año 70, 4 Esdras', fecha: -63, estado: { view: V.mediterraneo, lugares: ['jerusalen', 'alejandria', 'roma'] } },
          { t: 'Dónde se hallaron copias antiguas: Qumrán, Masada y la genizá de El Cairo', fecha: 70, estado: { view: V.egipto, lugares: ['qumran', 'masada', 'h-el-cairo', 'jerusalen'] } }
        ]),
        tabla({
          titulo: 'Fecha aproximada, lugar y lengua',
          cab: ['Libro', 'Fecha aproximada', 'Lugar', 'Lengua original'],
          filas: [
            ['Tobías', '250–175 a.C.', 'Judea o la diáspora oriental', 'Arameo o hebreo'],
            ['Eclesiástico', '190–180 a.C.', 'Jerusalén', 'Hebreo'],
            ['1 Enoc (partes antiguas)', '300–150 a.C.', 'Judea', 'Arameo'],
            ['Jubileos', '160–150 a.C.', 'Judea', 'Hebreo'],
            ['Judit', '150–100 a.C.', 'Judea', 'Hebreo'],
            ['Adiciones a Daniel y Ester', '150–100 a.C.', 'Judea o Egipto', 'Griego (algunas, hebreo)'],
            ['2 Macabeos', '125–100 a.C.', 'Egipto', 'Griego'],
            ['1 Macabeos', 'Hacia 100 a.C.', 'Judea', 'Hebreo'],
            ['Salmos de Salomón', '60–40 a.C.', 'Jerusalén', 'Hebreo'],
            ['Sabiduría', '50 a.C.–40 d.C.', 'Alejandría', 'Griego'],
            ['4 Esdras', 'Hacia 100 d.C.', 'Judea o Roma', 'Hebreo']
          ],
          nota: 'Fechas según los estudiosos; ninguno de estos libros trae su fecha. Varios se conservaron solo en traducciones.'
        })
      ],
      texto: [
        'El Antiguo Testamento termina con Malaquías, que escribió hacia el año 430 a.C. y cierra con la promesa de que Dios enviaría al profeta Elías antes del día de Jehová (Mal 4:5). Después de él, Israel no tuvo profetas que hablaran con la autoridad de los anteriores hasta que apareció Juan el Bautista. Pero el pueblo siguió escribiendo. Casi todos los libros de este recurso nacieron en esos siglos, entre el 300 a.C. y el 100 d.C.',
        { h: 'Dos centros: Jerusalén y Alejandría' },
        'Algunos libros se escribieron en Judea, en hebreo o arameo, como Eclesiástico, 1 Macabeos, Judit y las partes antiguas de 1 Enoc. Otros nacieron en Alejandría, la gran ciudad griega de Egipto, donde vivía la comunidad judía más numerosa fuera de la tierra de Israel. Allí se escribió en griego, por ejemplo, el libro de la Sabiduría, y allí también se hizo la Septuaginta, la traducción griega del Antiguo Testamento.',
        { h: 'Libros nacidos en tiempos de crisis' },
        'Estos siglos fueron difíciles. Judea pasó de los persas a Alejandro Magno, después a los Ptolomeos de Egipto y luego a los seléucidas de Siria. Hacia el 167 a.C., el rey Antíoco IV prohibió la ley de Moisés y profanó el templo, como Daniel había anunciado: «profanarán el santuario y la fortaleza, y quitarán el continuo sacrificio, y pondrán la abominación desoladora» (Dn 11:31). La rebelión de los macabeos, la independencia y, desde el 63 a.C., el dominio romano dejaron su huella en muchos de estos libros.',
        'Por eso se los lee para conocer la fe, las preguntas y las esperanzas de los judíos que vivían cuando «vino el cumplimiento del tiempo» (Gá 4:4). Hablan de la ley, del templo, de la resurrección, de los ángeles y del Mesías, temas que encontramos después en los evangelios.',
        { h: 'Copias halladas en el siglo XX' },
        'De varios de estos libros se conocía solo una traducción griega, latina o etíope, hasta que aparecieron copias antiguas. En 1896 se identificaron páginas en hebreo de Eclesiástico en la genizá de una sinagoga de El Cairo, un depósito donde se guardaban textos gastados. Desde 1947, las cuevas de Qumrán entregaron fragmentos de Tobías, Eclesiástico, 1 Enoc, Jubileos y otros escritos, y en 1964 apareció en Masada un rollo de Eclesiástico. Mira el mapa paso a paso.',
        ir('Ver la historia de estos siglos en Entre los Testamentos', '../../entre-los-testamentos/')
      ],
      pensar: 'Durante cuatro siglos Dios no envió profetas, pero preparó al mundo para la venida de su Hijo (Gá 4:4). ¿Cómo te anima saber que Dios sigue obrando aun cuando parece callar?'
    },
    {
      id: 'como-llegaron', n: 'Cómo llegaron a las Biblias', ref: 'Romanos 3:2; Lucas 11:51', fecha: [-250, 1602],
      visual: [
        pasos([
          { t: 'Alejandría (siglos III–I a.C.): la Septuaginta se copia junto con otros escritos judíos en griego', fecha: -250, estado: { view: V.mediterraneo, lugares: ['alejandria', 'jerusalen'] } },
          { t: 'Belén (390–405): Jerónimo traduce del hebreo y separa los libros que no están en la Biblia hebrea', fecha: 400, estado: { view: V.mediterraneo, lugares: ['belen', 'roma'] } },
          { t: 'Hipona (393) y Cartago (397): concilios del norte de África aceptan una lista más amplia, junto con Agustín', fecha: 397, estado: { view: V.mediterraneo, lugares: ['h-hipona', 'cartago', 'roma'] } },
          { t: 'Wittenberg (1534): la Biblia de Lutero agrupa los apócrifos entre los testamentos, «útiles y buenos de leer»', fecha: 1534, estado: { view: V.europa, lugares: ['h-wittenberg'] } },
          { t: 'Trento (1546): el concilio declara Escritura los deuterocanónicos', fecha: 1546, estado: { view: V.europa, lugares: ['h-trento', 'h-wittenberg', 'roma'] } },
          { t: 'Basilea (1569) y Ámsterdam (1602): la Biblia del Oso los intercala; Valera los reúne entre los testamentos', fecha: 1602, estado: { view: V.europa, lugares: ['h-basilea', 'h-amsterdam'] } }
        ]),
        img('../de-la-biblia-a-nosotros/img/jeronimo-belen.webp', 'Jerónimo, un erudito anciano de barba gris, trabaja de noche en una celda de piedra de Belén con un rollo hebreo abierto, un códice griego y una tablilla donde escribe en latín', 'Jerónimo en Belén, traduciendo del hebreo al latín. Recreación.'),
        foto('../de-la-biblia-a-nosotros/img/biblia-del-oso.webp', 'Portada de la Biblia del Oso de 1569, con el grabado de un oso que come miel de un panal en un árbol', 'Portada de la Biblia del Oso (Basilea, 1569), primera Biblia completa en español traducida de las lenguas originales.', 'Dominio público, vía Wikimedia Commons', 'Foto 1569'),
        foto('valera-1602.webp', 'Grabado de la portada de la Biblia de 1602: dentro de un marco ornamentado, un hombre arrodillado planta un árbol joven mientras otro, de pie, lo riega con un cántaro', 'El grabado de la portada de la Biblia del Cántaro (Ámsterdam, 1602), la revisión de Cipriano de Valera que reunió los apócrifos entre los dos testamentos. Suele leerse como una alusión a 1 Corintios 3:6: uno planta y otro riega.', 'CC BY-SA 4.0 · ejemplar de la Biblioteca Nacional de España, vía Wikimedia Commons', 'Foto 1602')
      ],
      texto: [
        'Los judíos de Palestina nunca leyeron estos libros en la sinagoga como Escritura. Su Biblia tenía los mismos libros que nuestro Antiguo Testamento. Jesús habló de toda la historia de los mártires de esa Biblia «desde la sangre de Abel hasta la sangre de Zacarías» (Lc 11:51), es decir, del primer libro, Génesis, al último en el orden hebreo, Crónicas.',
        { h: 'La Biblia griega de los cristianos' },
        'Los primeros cristianos de habla griega leían el Antiguo Testamento en la Septuaginta. Con el tiempo, los códices cristianos, como el Sinaítico y el Vaticano del siglo IV, copiaron junto a los libros del Antiguo Testamento varios de estos escritos, aunque no siempre los mismos. Algunos padres de la iglesia los citaron con aprecio; otros, como Melitón de Sardes hacia el año 170, Atanasio en el 367 y Jerónimo, distinguieron claramente los libros de la Biblia hebrea de los demás.',
        'Jerónimo tradujo el Antiguo Testamento del hebreo al latín en Belén y explicó que esos otros libros la iglesia los lee para edificación, pero no para confirmar la doctrina. Agustín, en cambio, aceptó una lista más amplia, y los concilios de Hipona (393) y Cartago (397) lo siguieron. Durante la Edad Media la Biblia latina los incluyó, aunque muchos maestros seguían notando la diferencia.',
        { h: 'La Reforma y Trento' },
        'En 1534, Lutero publicó su Biblia completa en alemán con estos libros agrupados entre los dos testamentos, bajo un título que los describía como libros que no se igualan a la Sagrada Escritura, pero útiles y buenos de leer. En respuesta, el Concilio de Trento declaró el 8 de abril de 1546 que eran Escritura con la misma autoridad que los demás.',
        { h: 'La Reina-Valera' },
        'Casiodoro de Reina incluyó estos libros en la Biblia del Oso (Basilea, 1569), intercalados donde los ponía la Vulgata. Cipriano de Valera, en su revisión de 1602 impresa en Ámsterdam, los reunió entre los dos testamentos, como Lutero. Así siguieron hasta el siglo XIX, cuando las sociedades bíblicas que difundían la Biblia en el mundo, desde 1826, dejaron de imprimirlos. Por eso las Reina-Valera que llegaron a América Latina ya no los traen.'
      ],
      pensar: 'La Biblia que tienes en tus manos llegó a ti después de siglos de copia, estudio y traducción. ¿Qué te dice eso del cuidado de Dios por su Palabra?'
    },
    {
      id: 'por-que-no', n: 'Por qué no los recibimos como Escritura', ref: 'Romanos 3:2; Lucas 24:44; Mateo 4:4; 2 Timoteo 3:16',
      visual: [
        cita('Romanos 3:1-2', '@@ro/3/1-2'),
        tabla({
          titulo: 'Seis razones para no recibirlos como Escritura',
          cab: ['Razón', 'Lo que muestra'],
          filas: [
            ['Israel no los recibió', 'A Israel le fue confiada la palabra de Dios (Ro 3:2), y su Biblia nunca los incluyó'],
            ['Jesús no los nombró', 'Reconoció la ley, los profetas y los salmos (Lc 24:44), de Abel a Zacarías (Lc 11:51)'],
            ['Los apóstoles no los citan como Escritura', 'Citan casi todo el Antiguo Testamento con «escrito está»; a estos libros, nunca'],
            ['Ellos mismos dicen que no había profetas', '1 Macabeos reconoce tres veces que en su tiempo no había profeta'],
            ['La iglesia antigua dudó', 'Melitón, Atanasio y Jerónimo los separaron de la Biblia hebrea'],
            ['Enseñan cosas que contradicen la Escritura', 'La limosna que borra pecados, ofrendas por los muertos, la magia en Tobías (ruta VII)']
          ]
        })
      ],
      texto: [
        'Las iglesias evangélicas aprecian estos libros como literatura e historia, pero no los reciben como Palabra de Dios. La ruta del canon de La Palabra de Dios explica el tema con detalle; aquí se resumen las razones principales.',
        { h: 'El testimonio de Israel y de Jesús' },
        'Pablo dice que la ventaja de los judíos es que les fue confiada la palabra de Dios (Ro 3:2). Israel guardó un conjunto de libros, y estos no estaban entre ellos. Jesús discutió con fariseos y saduceos sobre muchas cosas, pero nunca sobre qué libros eran Escritura: los dos grupos compartían la misma Biblia, y Jesús la confirmó cuando habló de lo escrito «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44).',
        'Los apóstoles citan casi todos los libros del Antiguo Testamento, muchas veces con la fórmula «escrito está». Los escritores del Nuevo Testamento conocían estos otros libros, y hay ecos de algunos en sus páginas (ruta VII), pero nunca los citan como Escritura.',
        { h: 'Lo que dicen los mismos libros' },
        '1 Macabeos, uno de los más apreciados, cuenta tres veces que en su tiempo no había profeta en Israel: al purificar el templo, los macabeos guardaron las piedras del altar profanado hasta que viniera un profeta que dijera qué hacer con ellas. El autor de 2 Macabeos, al terminar, pide disculpas si su obra resultó pobre, porque hizo lo que pudo. Son palabras honestas, pero no las de alguien que habla de parte de Dios.',
        { posturas: {
          titulo: '¿Son Escritura los libros deuterocanónicos?',
          a: { n: 'Sí, son Escritura', t: 'La Iglesia católica y las ortodoxas los reciben como inspirados. Señalan que estaban en la Septuaginta que usaron los apóstoles, que muchos padres de la iglesia los citaron y que los concilios de Hipona, Cartago y Trento los aceptaron.' },
          b: { n: 'No, son libros humanos', t: 'Las iglesias evangélicas siguen el canon que Israel recibió y que Jesús confirmó. La Septuaginta no tenía una lista fija; los apóstoles nunca citan estos libros como Escritura; Jerónimo y otros los distinguieron, y algunos enseñan doctrinas contrarias al resto de la Biblia.' },
          c: 'Este estudio sigue la segunda postura. Eso no impide leer estos libros con provecho, como se leen otros libros antiguos, ni tratar con respeto a quienes los reciben de otra manera.'
        } },
        ir('Estudiar el canon en La Palabra de Dios', PALABRA + '#canon/3')
      ],
      pensar: 'Jesús respondió a la tentación con «Escrito está» (Mt 4:4). ¿Conoces la Escritura lo suficiente como para distinguir lo que dice la Biblia de lo que solo suena bíblico?'
    }
  ];

  window.__APO.que = que;
})();
