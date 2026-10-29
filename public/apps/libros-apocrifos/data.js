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
  const HAY = new Set(["ben-sira.webp", "esquema-adiciones.svg", "esquema-canones.svg", "judit-betulia.webp", "lector-biblias.webp", "madre-siete-hijos.webp", "mesa-rollos.webp", "nag-hammadi.webp", "susana-daniel.webp", "tobias-rafael.webp", "valera-1602.webp", "zorobabel-dario.webp"]);
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
        'De varios de estos libros se conocía solo una traducción griega, latina o etíope, hasta que aparecieron copias antiguas. En 1896 se identificaron páginas en hebreo de Eclesiástico en la genizá de una sinagoga de El Cairo, un depósito donde se guardaban textos gastados. Desde 1947, las cuevas de Qumrán entregaron fragmentos de Tobías, Eclesiástico, 1 Enoc, Jubileos y otros escritos, y en 1964 apareció en Masada un rollo de Eclesiástico. Mira el mapa paso a paso.'
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
        cita('Romanos 3:1-2', '¿Qué ventaja tiene, pues, el judío? ¿o de qué aprovecha la circuncisión? Mucho, en todas maneras. Primero, ciertamente, que les ha sido confiada la palabra de Dios.'),
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
/* Los libros apócrifos y pseudoepígrafos · ruta II. Los libros históricos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const historicos = [
    {
      id: '1-macabeos', n: '1 Macabeos: la historia de una rebelión', ref: 'Daniel 11:31-35; Juan 10:22-23; Hebreos 11:33-34', fecha: [-175, -134],
      visual: [
        img('../imperio-griego/img/grecia-purificacion-templo.webp', 'Judas Macabeo y sus hombres purifican el templo de Jerusalén y vuelven a encender el candelero', 'La purificación del templo, 164 a.C. Recreación.'),
        pasos([
          { t: 'Antíoco IV profana el templo de Jerusalén (167 a.C.)', fecha: -167, estado: { view: V.judea, lugares: ['jerusalen', 'modin'] } },
          { t: 'Matatías se levanta en Modín y huye a los montes con sus hijos', fecha: -167, estado: { view: V.judea, lugares: ['modin', 'jerusalen', 'desierto-judea'] } },
          { t: 'Judas Macabeo vence a los generales seléucidas y purifica el templo (164 a.C.)', fecha: -164, estado: { view: V.judea, lugares: ['jerusalen', 'modin', 'jope', 'samaria'] } },
          { t: 'Simón logra la independencia de Judea (142 a.C.)', fecha: -142, estado: { view: V.oriente, capas: ['seleucidas-200'], lugares: ['jerusalen', 'antioquia', 'roma'] } }
        ]),
        tabla({
          titulo: 'Bosquejo de 1 Macabeos (16 capítulos)',
          cab: ['Capítulos', 'Contenido', 'Años'],
          filas: [
            ['1', 'Alejandro y sus sucesores; Antíoco IV prohíbe la ley y profana el templo', '175–167 a.C.'],
            ['2', 'Matatías en Modín: la rebelión comienza', '167–166 a.C.'],
            ['3–9', 'Judas Macabeo: victorias, purificación del templo y muerte', '166–160 a.C.'],
            ['9–12', 'Jonatán, sumo sacerdote y jefe del pueblo', '160–143 a.C.'],
            ['13–16', 'Simón: independencia, alianza con Roma y muerte', '143–134 a.C.']
          ]
        })
      ],
      texto: [
        'En el año 167 a.C., el rey seléucida Antíoco IV Epífanes prohibió en Judea la circuncisión, el día de reposo y la lectura de la ley, y levantó un altar pagano sobre el altar del templo de Jerusalén. Daniel lo había anunciado siglos antes: «el pueblo que conoce a su Dios se esforzará y actuará» (Dn 11:32). 1 Macabeos cuenta cómo ocurrió.',
        { h: 'Lo que cuenta' },
        'En la aldea de Modín, un sacerdote llamado Matatías se negó a ofrecer el sacrificio pagano que exigían los oficiales del rey y huyó a los montes con sus cinco hijos. Al morir, su hijo Judas, apodado Macabeo, tomó el mando. Con un ejército pequeño venció a generales mucho más poderosos y, en diciembre del 164 a.C., recuperó el templo, lo purificó, construyó un altar nuevo y lo dedicó con ocho días de fiesta. Después de Judas gobernaron sus hermanos Jonatán y Simón. Bajo Simón, en el 142 a.C., Judea logró su independencia, que duró hasta que Roma llegó en el 63 a.C.',
        { h: 'Por qué es valioso' },
        '1 Macabeos se escribió en hebreo hacia el año 100 a.C. y se conservó en griego. Es la fuente principal sobre estos años y la mayoría de los historiadores lo considera bastante confiable: es sobrio, da fechas y nombres, y coincide en lo esencial con otras fuentes. Sin él no sabríamos casi nada del origen de la fiesta de la Dedicación, que los judíos llaman Janucá. El evangelio de Juan dice que Jesús estaba en el templo durante esa fiesta: «Celebrábase en Jerusalén la fiesta de la dedicación. Era invierno» (Jn 10:22).',
        'También ayuda a entender a los judíos del tiempo de Jesús. Muchos esperaban un Mesías que hiciera lo mismo que los macabeos: expulsar a los extranjeros y restaurar el reino. Por eso algunos quisieron hacer rey a Jesús por la fuerza (Jn 6:15), y los discípulos preguntaron si restauraría el reino a Israel (Hch 1:6).',
        { h: 'Lo que el libro no pretende' },
        'El autor escribe como historiador, no como profeta. Casi nunca nombra a Dios directamente; prefiere decir «el Cielo». Y reconoce, como se vio en la ruta anterior, que en su tiempo no había profeta en Israel. Leído así, como un buen libro de historia, 1 Macabeos es un gran aporte para el estudio de la Biblia.',
        { ejercicio: {
          pregunta: '¿Qué fiesta del evangelio de Juan se explica gracias a 1 Macabeos?',
          opciones: [
            { t: 'La fiesta de los tabernáculos.', ok: false, por_que: 'Esa fiesta está en la ley de Moisés (Lv 23:34) y Juan la menciona en el capítulo 7.' },
            { t: 'La fiesta de la dedicación del templo, en invierno.', ok: true, por_que: 'Recordaba la purificación del templo por Judas Macabeo en el 164 a.C. (Jn 10:22).' },
            { t: 'La Pascua.', ok: false, por_que: 'La Pascua se instituyó en Egipto (Éx 12), siglos antes de los macabeos.' }
          ],
          explicacion: 'La fiesta de la Dedicación no está en la ley de Moisés; nació en el período entre los testamentos, y 1 Macabeos cuenta su origen.'
        } }
      ],
      pensar: 'Los macabeos estuvieron dispuestos a morir antes que abandonar la ley de Dios. ¿Qué cosas de tu fe no estarías dispuesto a negociar, aunque te costara?'
    },
    {
      id: '2-macabeos', n: '2 Macabeos: mártires y resurrección', ref: 'Hebreos 11:35; Hebreos 9:27; Lucas 16:26; 2 Corintios 5:8', fecha: [-180, -161],
      visual: [
        img('madre-siete-hijos.webp', 'En un salón de piedra con columnas, ante el rey seléucida Antíoco IV sentado en su trono, una madre judía de unos cincuenta años, de pie y serena, toma del hombro a su hijo menor, un muchacho de unos catorce años, y le habla en voz baja; detrás, soldados con lanzas', 'La madre anima a su hijo menor a permanecer fiel (2 Macabeos 7). Recreación.'),
        cita('Hebreos 11:35', 'Las mujeres recibieron sus muertos mediante resurrección; mas otros fueron atormentados, no aceptando el rescate, a fin de obtener mejor resurrección.'),
        tabla({
          titulo: '1 y 2 Macabeos comparados',
          cab: ['', '1 Macabeos', '2 Macabeos'],
          filas: [
            ['Lengua original', 'Hebreo', 'Griego'],
            ['Años que cubre', '175–134 a.C.', '180–161 a.C.'],
            ['Estilo', 'Historia sobria', 'Historia con relatos de milagros y discursos'],
            ['Origen', 'Un autor judío de Judea', 'Resumen de una obra de cinco libros de Jasón de Cirene'],
            ['Temas propios', 'La guerra y la independencia', 'El templo, los mártires, la resurrección y la oración por los muertos']
          ]
        })
      ],
      texto: [
        '2 Macabeos no es la continuación del primero. Cuenta en parte los mismos hechos, pero desde otro ángulo. El autor dice que resume en un solo libro una obra de cinco tomos escrita por un tal Jasón de Cirene. Lo escribió en griego, probablemente en Egipto, para animar a los judíos de allí a celebrar la fiesta de la Dedicación y a amar el templo de Jerusalén.',
        { h: 'Los mártires' },
        'Los capítulos más conocidos son el 6 y el 7. Eleazar, un escriba anciano, prefiere morir antes que comer carne de cerdo o fingir que la come. Después, una madre ve morir a sus siete hijos, uno tras otro, porque se niegan a quebrantar la ley ante el rey. Ella anima al menor recordándole que Dios hizo el cielo y la tierra de la nada, y que le devolverá la vida en la resurrección. Hebreos parece aludir a estos relatos cuando dice que «otros fueron atormentados, no aceptando el rescate, a fin de obtener mejor resurrección» (He 11:35).',
        'Estos capítulos muestran que, en el siglo II a.C., muchos judíos creían firmemente en la resurrección de los muertos. Es la fe que los fariseos defendían en tiempos de Jesús y que los saduceos negaban (Hch 23:8).',
        { h: 'La oración por los muertos' },
        'En el capítulo 12, después de una batalla, Judas encuentra bajo las túnicas de sus soldados muertos amuletos dedicados a los ídolos. Hace una colecta y envía dinero a Jerusalén para que se ofrezca un sacrificio por el pecado de ellos, pensando en la resurrección. El autor elogia la acción y dice que es santo orar por los muertos para que sean librados del pecado.',
        { posturas: {
          titulo: '¿Enseña 2 Macabeos 12 que se puede ayudar a los muertos?',
          a: { n: 'Lectura católica', t: 'La Iglesia católica cita este pasaje (Catecismo, 1032) como base para orar y ofrecer sacrificios por los difuntos, para que sean purificados. El Concilio de Trento (1563) enseñó la doctrina del purgatorio.' },
          b: { n: 'Lectura evangélica', t: 'El libro no es Escritura y aquí contradice a la Escritura. La Biblia enseña que está establecido a los hombres «que mueran una sola vez, y después de esto el juicio» (He 9:27), que después de la muerte no se puede pasar de un destino al otro (Lc 16:26) y que el creyente que muere va a estar con el Señor (2 Co 5:8; Fil 1:23).' },
          c: 'El pasaje muestra lo que pensaban algunos judíos del siglo II a.C., no lo que Dios enseña. Los que mueren en Cristo no necesitan ninguna purificación más, porque «la sangre de Jesucristo su Hijo nos limpia de todo pecado» (1 Jn 1:7).'
        } }
      ],
      pensar: 'La madre de los siete hijos esperaba la resurrección sin haber conocido a Cristo. ¿Cómo cambia tu manera de enfrentar el sufrimiento saber que Jesús ya resucitó?'
    },
    {
      id: '3-4-macabeos', n: '3 y 4 Macabeos', ref: 'Daniel 3:16-18; 1 Pedro 4:12-13', fecha: [-217, 50],
      visual: [
        mapa({ view: V.egipto, capas: ['ptolomeos-250'], lugares: ['rafia', 'jerusalen', 'alejandria'] }),
        tabla({
          titulo: 'Dos libros con el mismo nombre y otro tema',
          cab: ['', '3 Macabeos', '4 Macabeos'],
          filas: [
            ['De qué trata', 'La persecución de los judíos de Egipto bajo Ptolomeo IV (hacia 217 a.C.)', 'Un discurso filosófico sobre la razón y las pasiones'],
            ['Escrito', 'Siglo I a.C., en Alejandría', 'Siglo I d.C.'],
            ['¿Habla de los macabeos?', 'No', 'Usa como ejemplo a los mártires de 2 Macabeos 6–7'],
            ['Quién lo lee', 'Las iglesias ortodoxas lo reciben', 'Las Biblias ortodoxas griegas lo ponen en un apéndice']
          ]
        })
      ],
      texto: [
        'Los nombres 3 y 4 Macabeos confunden, porque ninguno de los dos cuenta la historia de Judas Macabeo y sus hermanos. Se llaman así porque se copiaron junto a los otros dos y comparten su tema: la fidelidad de los judíos ante reyes que los persiguen.',
        { h: '3 Macabeos' },
        'El relato ocurre unos cincuenta años antes de la rebelión macabea. Después de vencer a los seléucidas en la batalla de Rafia (217 a.C.), el rey Ptolomeo IV de Egipto visita Jerusalén y quiere entrar al Lugar Santísimo. El sumo sacerdote ora, y el rey cae al suelo paralizado. De vuelta en Egipto, se venga de los judíos: los obliga a registrarse, los encierra en el hipódromo de Alejandría y ordena que los pisoteen elefantes embriagados. Pero dos ángeles aparecen, los elefantes se vuelven contra los soldados, y el rey cambia de actitud y protege a los judíos.',
        'La batalla de Rafia ocurrió de verdad, pero el resto del relato no se puede confirmar con otras fuentes y tiene mucho de novela. Se escribió para animar a los judíos de Egipto a mantenerse fieles a la ley en una ciudad griega que los miraba con desconfianza.',
        { h: '4 Macabeos' },
        '4 Macabeos es un discurso, casi un sermón filosófico. Su tesis es que la razón guiada por la piedad puede dominar las pasiones, incluso el dolor y el miedo. Para probarlo, vuelve a contar la muerte de Eleazar, de los siete hermanos y de su madre, con largos discursos. Usa el lenguaje de la filosofía griega para mostrar que la ley de Moisés forma personas más virtuosas que cualquier escuela de filósofos.',
        'El libro influyó en la manera en que la iglesia antigua habló de sus propios mártires. Los cristianos perseguidos por Roma se vieron reflejados en esos judíos que preferían morir antes que negar a Dios.',
        { h: 'Una fidelidad que la Biblia ya enseñaba' },
        'La Escritura tiene sus propios ejemplos de fidelidad ante reyes que persiguen. Sadrac, Mesac y Abed-nego respondieron a Nabucodonosor: «He aquí nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo» (Dn 3:17), y añadieron que, aunque no los librara, no servirían a sus dioses. La firmeza del creyente no se apoya en la fuerza de su razón, sino en la gracia de Dios y en la esperanza de la gloria (1 P 4:13).'
      ],
      pensar: '4 Macabeos dice que la razón domina las pasiones. La Biblia dice que el fruto del Espíritu incluye el dominio propio (Gá 5:22-23). ¿En qué te apoyas tú para resistir la tentación?'
    },
    {
      id: '1-esdras', n: '1 Esdras y el certamen de los tres guardias', ref: '2 Crónicas 35–36; Esdras 1–10; Nehemías 8:1-12; Hageo 1:1', fecha: [-622, -444],
      visual: [
        img('zorobabel-dario.webp', 'En una sala del palacio persa, con columnas altas y tapices, un joven guardia judío, Zorobabel, habla de pie ante el rey Darío sentado en su trono; a su lado esperan otros dos guardias con lanzas y algunos nobles escuchan', 'Zorobabel ante el rey Darío, según 1 Esdras 3–4. Recreación.'),
        tabla({
          titulo: 'De dónde viene cada parte de 1 Esdras',
          cab: ['1 Esdras', 'Contenido', 'Paralelo en la Biblia'],
          filas: [
            ['Capítulo 1', 'La Pascua de Josías y la caída de Jerusalén', '2 Crónicas 35–36'],
            ['Capítulo 2', 'El decreto de Ciro; cartas contra la reconstrucción', 'Esdras 1; 4:7-24'],
            ['Capítulos 3–4', 'El certamen de los tres guardias', 'Sin paralelo'],
            ['Capítulos 5–7', 'El regreso con Zorobabel y el templo terminado', 'Esdras 2–6'],
            ['Capítulos 8–9', 'Esdras, los matrimonios mixtos y la lectura de la ley', 'Esdras 7–10; Nehemías 8']
          ]
        })
      ],
      texto: [
        '1 Esdras es una versión griega distinta de la historia que cuentan 2 Crónicas, Esdras y Nehemías: va desde la gran Pascua del rey Josías hasta la lectura de la ley por Esdras. En la Biblia griega se llamaba Esdras A, y en la Vulgata, 3 Esdras. Las iglesias ortodoxas lo reciben; la Iglesia católica lo dejó en un apéndice; las iglesias evangélicas no lo incluyen.',
        { h: 'El certamen de los tres guardias' },
        'Lo único que 1 Esdras tiene de propio es un relato famoso. Tres jóvenes de la guardia de Darío compiten para ver quién dice la frase más sabia. El primero afirma que lo más fuerte es el vino, que trastorna a todos los hombres. El segundo dice que es el rey, a quien todos obedecen. El tercero, Zorobabel, dice que las mujeres son más fuertes que el vino y que el rey, pero que por encima de todo está la verdad, que permanece para siempre. La sentencia final, grande es la verdad y prevalece, se hizo proverbial en latín.',
        'Darío declara vencedor a Zorobabel y le ofrece lo que pida. Zorobabel le recuerda el voto de reconstruir Jerusalén y su templo, y el rey lo envía con cartas y ayuda.',
        { h: 'Un problema de orden' },
        'El relato tiene un problema que los lectores notaron desde la antigüedad. Pone a Zorobabel en la corte de Darío antes del primer regreso, que según Esdras ocurrió bajo Ciro, años antes de Darío (Esd 1–2). Además, cuenta las cartas contra la reconstrucción, que Esdras ubica bajo Artajerjes, antes del decreto de Darío. El historiador judío Josefo usó 1 Esdras y tuvo que reordenar los hechos para que encajaran.',
        'Los libros de Esdras y Hageo dan el orden correcto: Zorobabel guió el regreso bajo Ciro, y en el segundo año de Darío Dios levantó a los profetas Hageo y Zacarías para animar a terminar el templo (Hag 1:1; Esd 5:1-2). No hizo falta un concurso de sabiduría: Dios cumplió su palabra «para que se cumpliese la palabra de Jehová por boca de Jeremías» (Esd 1:1).',
        { ejercicio: {
          pregunta: '¿Qué tiene 1 Esdras que no está en la Biblia?',
          opciones: [
            { t: 'El decreto de Ciro que permitió volver a Jerusalén.', ok: false, por_que: 'El decreto está en Esdras 1:1-4 y en 2 Crónicas 36:22-23.' },
            { t: 'El certamen de los tres guardias ante Darío.', ok: true, por_que: 'Es el relato propio del libro; el resto repite, con variantes, a Crónicas, Esdras y Nehemías.' },
            { t: 'La lectura de la ley por Esdras.', ok: false, por_que: 'Está en Nehemías 8, que 1 Esdras repite.' }
          ],
          explicacion: '1 Esdras reúne historias que ya están en la Biblia y les agrega un relato de sabiduría que no encaja con su orden.'
        } }
      ],
      pensar: 'El tercer guardia dijo que la verdad permanece para siempre; Jesús dijo «tu palabra es verdad» (Jn 17:17). ¿Buscas la verdad en la Palabra de Dios antes que en las opiniones de los hombres?'
    },
    {
      id: 'judit', n: 'Judit, una heroína en una historia imposible', ref: 'Jueces 4:17-22; Colosenses 3:9; Daniel 1:8', fecha: [-150, -100],
      visual: [
        img('judit-betulia.webp', 'De noche, a la puerta de una ciudad amurallada en los montes, una mujer judía de unos treinta y cinco años, Judit, vestida con elegancia y un velo fino, sale hacia el campamento enemigo junto a su criada, que lleva una bolsa con comida; a lo lejos brillan las fogatas del ejército', 'Judit sale de Betulia hacia el campamento de Holofernes (Judit 10). Recreación.'),
        tabla({
          titulo: 'Datos que no encajan con la historia',
          cab: ['Lo que dice Judit', 'Lo que dice la historia'],
          filas: [
            ['Nabucodonosor es rey de los asirios y reina en Nínive', 'Nabucodonosor fue rey de Babilonia; Nínive ya había sido destruida en el 612 a.C., antes de su reinado'],
            ['Los judíos acaban de volver del exilio y han purificado el templo', 'El regreso ocurrió en tiempos de Ciro, después de la muerte de Nabucodonosor'],
            ['Holofernes y Bagoas dirigen el ejército', 'Son nombres persas del siglo IV a.C.'],
            ['La ciudad de Betulia, junto a la llanura de Esdrelón', 'No se conoce ninguna ciudad con ese nombre']
          ]
        })
      ],
      texto: [
        'El libro de Judit cuenta que Nabucodonosor envió a su general Holofernes con un ejército enorme a castigar a los pueblos del occidente. Los judíos se preparan para resistir, y Holofernes sitia la pequeña ciudad de Betulia, que domina el paso hacia Jerusalén. Cuando falta el agua, los jefes de la ciudad prometen rendirse en cinco días si Dios no los socorre.',
        { h: 'La heroína' },
        'Entonces aparece Judit, una viuda rica, piadosa y muy hermosa. Reprende a los jefes por poner plazo a Dios, ora, se arregla con sus mejores vestidos y va con su criada al campamento enemigo. Allí engaña a Holofernes diciéndole que le mostrará cómo vencer a los judíos. Durante varios días come solo la comida que lleva consigo, para no contaminarse. La cuarta noche, cuando Holofernes queda borracho en su tienda, Judit le corta la cabeza con su propia espada y vuelve a Betulia. El ejército huye, e Israel se salva.',
        { h: 'Una historia que no ocurrió así' },
        'Desde los primeros versículos, el libro mezcla épocas que no pueden ir juntas, como muestra la tabla. Por eso, incluso muchos estudiosos católicos piensan que Judit no es un relato histórico, sino una novela con mensaje, escrita hacia el 150–100 a.C., quizás en el ambiente de la rebelión macabea. El autor quiso mostrar que Dios salva a su pueblo por medio de una persona débil que confía en Él, como en los días de Débora y Jael (Jue 4).',
        { h: 'Lo bueno y lo dudoso' },
        'El libro muestra una piedad sincera: oración, ayuno, cuidado de la ley de los alimentos y confianza en que Dios no se deja presionar. Pero también presenta como virtud el engaño. En su oración, Judit pide a Dios que haga eficaces sus palabras engañosas, y el libro aprueba sus mentiras sin ninguna reserva.',
        'La Escritura cuenta las mentiras de algunos personajes, como Abraham o Rahab, pero no pone en boca de Dios su aprobación, y el Nuevo Testamento enseña con claridad: «No mintáis los unos a los otros» (Col 3:9). En la Biblia, la fidelidad de Daniel ante la comida del rey se mostró con la verdad: propuso abiertamente una prueba de diez días (Dn 1:8-14).',
        { ejercicio: {
          pregunta: '¿Por qué muchos estudiosos, incluso católicos, piensan que Judit no es un relato histórico?',
          opciones: [
            { t: 'Porque una mujer no podía vencer a un general.', ok: false, por_que: 'La Biblia cuenta hechos así, como el de Jael (Jue 4). El problema no es ese.' },
            { t: 'Porque mezcla épocas imposibles, como a Nabucodonosor reinando en Nínive después del exilio.', ok: true, por_que: 'Los datos del libro no encajan con ninguna época conocida: parece una novela con enseñanza.' },
            { t: 'Porque no se conoce ningún manuscrito antiguo del libro.', ok: false, por_que: 'Hay muchos manuscritos griegos; lo que falta es una copia en hebreo, como las de otros libros en Qumrán.' }
          ],
          explicacion: 'Judit es valiosa para conocer la piedad judía de su época, no como historia.'
        } }
      ],
      pensar: 'Judit pidió a Dios que bendijera sus engaños. ¿Hay situaciones en que te sientes tentado a usar medios incorrectos para lograr algo que crees bueno?'
    }
  ];

  window.__APO.historicos = historicos;
})();
/* Los libros apócrifos y pseudoepígrafos · ruta III. Relatos y adiciones (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const relatos = [
    {
      id: 'tobias', n: 'Tobías, el ángel y el pez', ref: 'Mateo 7:12; Marcos 16:17; Hechos 19:13-16; Efesios 2:8-9', fecha: [-250, -175],
      visual: [
        img('tobias-rafael.webp', 'Por un camino polvoriento entre colinas secas, un joven judío de unos dieciocho años, Tobías, camina con su bastón y un pequeño hato al hombro junto a un compañero de viaje de aspecto sereno, Rafael, vestido como un viajero común; un perro los sigue de cerca', 'Tobías camina hacia Media con su compañero de viaje y su perro (Tobías 5–6). Recreación.'),
        mapa({ view: V.oriente, lugares: ['ninive', 'ecbatana', 'ragues'], trazos: ['apo-tobias'] }),
        cita('Mateo 7:12', 'Así que, todas las cosas que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos; porque esto es la ley y los profetas.')
      ],
      texto: [
        'El libro de Tobías es una historia familiar llena de detalles amables. Tobit, un israelita de la tribu de Neftalí deportado a Nínive por los asirios, es un hombre justo: da limosna, ayuda a los pobres y entierra a los compatriotas que el rey manda matar. Un día queda ciego por un accidente y, desanimado, pide a Dios la muerte. Ese mismo día, en Ecbatana de Media, una joven llamada Sara pide lo mismo, porque un demonio llamado Asmodeo ha matado a sus siete maridos la noche de bodas. Dios escucha a los dos y envía al ángel Rafael.',
        { h: 'El viaje' },
        'Tobit envía a su hijo Tobías a Media a cobrar un dinero que había dejado en depósito. Rafael lo acompaña disfrazado de pariente, con el nombre de Azarías, y el perro de la casa va con ellos. En el río Tigris, un gran pez salta sobre Tobías; el ángel le dice que lo saque y guarde su corazón, su hígado y su hiel. En Ecbatana, Tobías se casa con Sara, quema el corazón y el hígado del pez, y el humo hace huir al demonio, que Rafael ata en Egipto. Al volver a casa, la hiel del pez sana los ojos de Tobit. Entonces Rafael revela quién es: uno de los siete ángeles que presentan ante Dios las oraciones de los santos.',
        { h: 'Lo que tiene de bueno' },
        'El libro, del que se hallaron cinco copias en Qumrán, muestra la vida de los judíos fieles en el exilio: la oración, el respeto a los padres, la generosidad y la confianza en que Dios cuida a los suyos. Tobit aconseja a su hijo no hacer a nadie lo que él aborrece. Es la llamada regla de oro en forma negativa; Jesús la dijo en positivo y fue más lejos: hacer a los demás todo lo que queremos que hagan con nosotros (Mt 7:12).',
        { h: 'Lo que no encaja' },
        'Tobit dice que era joven cuando las tribus del norte se separaron de Jerusalén, hacia el 930 a.C., pero vive la deportación de Neftalí, que ocurrió unos doscientos años después (2 R 15:29). El ángel miente sobre su identidad. Rafael afirma que la limosna libra de la muerte y limpia de todo pecado, algo que la Escritura nunca dice: somos salvos por gracia, por medio de la fe, «no por obras, para que nadie se gloríe» (Ef 2:9).',
        'El humo del hígado del pez para expulsar un demonio se parece más a una receta de magia que a la Biblia. En el Nuevo Testamento, los demonios no huyen por un ritual, sino por la autoridad del nombre de Jesús (Mr 16:17). Cuando unos exorcistas judíos intentaron usar ese nombre como fórmula, sin conocer a Cristo, fracasaron (Hch 19:13-16).'
      ],
      pensar: 'Tobías aprendió a confiar en Dios en medio de la ceguera, el exilio y la pérdida. ¿Qué te enseña la Biblia sobre cómo enfrenta el creyente las fuerzas del mal: con fórmulas o con la autoridad de Cristo?'
    },
    {
      id: 'ester', n: 'Las adiciones a Ester', ref: 'Ester 4:14-16; Ester 2:21-23; Ester 6:1-3; Ester 3:1',
      visual: [
        esq('esquema-adiciones.svg', 'Dos columnas: a la izquierda, los capítulos de Ester con las seis adiciones griegas (A a F) intercaladas; a la derecha, los capítulos de Daniel con la oración de Azarías y el cántico de los tres jóvenes dentro del capítulo 3, y Susana y Bel y el dragón al final', 'Dónde van las adiciones a Ester y Daniel en las Biblias católicas.'),
        cita('Ester 4:14', 'Porque si callas absolutamente en este tiempo, respiro y liberación vendrá de alguna otra parte para los judíos; mas tú y la casa de tu padre pereceréis. ¿Y quién sabe si para esta hora has llegado al reino?'),
        tabla({
          titulo: 'Las seis adiciones a Ester',
          cab: ['Adición', 'Contenido', 'Dónde va'],
          filas: [
            ['A', 'El sueño de Mardoqueo y la conspiración de los eunucos', 'Antes de 1:1'],
            ['B', 'El texto del edicto de Amán contra los judíos', 'Después de 3:13'],
            ['C', 'Las oraciones de Mardoqueo y de Ester', 'Después de 4:17'],
            ['D', 'Ester se presenta ante el rey y se desmaya', 'En lugar de 5:1-2'],
            ['E', 'El edicto del rey a favor de los judíos', 'Después de 8:12'],
            ['F', 'La explicación del sueño y una nota sobre la traducción', 'Después de 10:3']
          ],
          nota: 'Jerónimo las reunió al final del libro; por eso en algunas Biblias católicas aparecen como capítulos 11 a 16.'
        })
      ],
      texto: [
        'El libro de Ester tiene una particularidad única: el texto hebreo nunca menciona a Dios. No hay oraciones explícitas, ni milagros, ni el nombre de Jehová. Y sin embargo, toda la historia muestra a Dios obrando detrás de cada «casualidad»: la elección de Ester, la conspiración que descubre Mardoqueo, el insomnio del rey en la noche decisiva. Mardoqueo lo intuye cuando dice: «¿Y quién sabe si para esta hora has llegado al reino?» (Est 4:14).',
        { h: 'Lo que agregó la versión griega' },
        'La traducción griega de Ester agregó 107 versículos en seis secciones. Abren y cierran el libro con un sueño simbólico de Mardoqueo, copian el texto de los dos edictos del rey, ponen en boca de Mardoqueo y de Ester largas oraciones y hacen más dramática la escena en que Ester se presenta ante el rey. En estas adiciones el nombre de Dios aparece más de cincuenta veces. Una nota al final dice que la traducción la hizo en Jerusalén un tal Lisímaco y que se llevó a Egipto en tiempos de un rey Ptolomeo, en el siglo II o I a.C.',
        { h: 'Por qué se agregaron' },
        'Parece que a los traductores les incomodaba un libro bíblico sin el nombre de Dios y quisieron hacer explícita su presencia. Las oraciones son hermosas y muestran la piedad judía de la época. Pero también introducen contradicciones. En la adición A, Mardoqueo descubre la conspiración y es recompensado de inmediato; en el texto hebreo, el hecho queda olvidado hasta la noche en que el rey no puede dormir (Est 2:21-23; 6:1-3), detalle que es clave en la trama. En la adición E, Amán aparece como macedonio, mientras que el libro lo llama agagueo (Est 3:1).',
        { h: 'Una lección sobre la providencia' },
        'Las adiciones quieren mostrar a Dios, pero el libro hebreo enseña algo más profundo: Dios gobierna la historia aun cuando su nombre no se pronuncia. Muchas veces el creyente vive así, sin señales visibles, en medio de decisiones comunes, y descubre después que Dios estaba obrando. Ester ayunó y pidió a su pueblo que ayunara con ella (Est 4:16); la oración está ahí, aunque el texto no la escriba.',
        { ejercicio: {
          pregunta: '¿Qué caracteriza al libro de Ester en el texto hebreo?',
          opciones: [
            { t: 'Tiene largas oraciones de Ester y Mardoqueo.', ok: false, por_que: 'Esas oraciones son parte de las adiciones griegas (C).' },
            { t: 'Nunca menciona a Dios, aunque muestra su obra detrás de cada hecho.', ok: true, por_que: 'Es la única obra del Antiguo Testamento, junto con Cantares, donde no aparece el nombre de Dios.' },
            { t: 'Explica un sueño simbólico de Mardoqueo.', ok: false, por_que: 'El sueño está en las adiciones A y F.' }
          ],
          explicacion: 'El silencio de Ester sobre Dios es parte de su mensaje: la providencia actúa aunque no se vea.'
        } }
      ],
      pensar: 'Dios guió la historia de Ester sin que su nombre apareciera. ¿Puedes reconocer momentos de tu vida en que Dios obró aunque en ese momento no lo notaste?'
    },
    {
      id: 'daniel', n: 'Las adiciones a Daniel: Azarías, Susana y Bel', ref: 'Daniel 3:23-25; Daniel 6:16-23; Daniel 1:17', fecha: [-150, -100],
      visual: [
        img('susana-daniel.webp', 'En una plaza de Babilonia con columnas y gente reunida, el joven Daniel, de unos dieciocho años, interroga con firmeza a un anciano de barba gris vestido con ropas de juez, mientras otro anciano espera custodiado aparte; al fondo, una mujer joven con velo, Susana, observa con las manos juntas', 'Daniel interroga por separado a los dos ancianos que acusaron a Susana. Recreación.'),
        esq('esquema-adiciones.svg', 'Dos columnas: a la izquierda, los capítulos de Ester con las seis adiciones griegas (A a F) intercaladas; a la derecha, los capítulos de Daniel con la oración de Azarías y el cántico de los tres jóvenes dentro del capítulo 3, y Susana y Bel y el dragón al final', 'Dónde van las adiciones a Ester y Daniel en las Biblias católicas.'),
        cita('Daniel 6:22', 'Mi Dios envió su ángel, el cual cerró la boca de los leones, para que no me hiciesen daño, porque ante él fui hallado inocente; y aun delante de ti, oh rey, yo no he hecho nada malo.')
      ],
      texto: [
        'La Biblia griega también agregó tres textos al libro de Daniel. Las Biblias católicas los incluyen: los dos primeros dentro del capítulo 3 y los otros dos como capítulos 13 y 14, que no existen en el texto hebreo.',
        { h: 'La oración de Azarías y el cántico de los tres jóvenes' },
        'En Daniel 3, los tres amigos de Daniel son echados al horno. El texto griego agrega allí unos sesenta versículos. Azarías, es decir Abed-nego, confiesa los pecados de Israel y pide misericordia. Después los tres alaban a Dios con un largo himno que invita a toda la creación, el sol, la lluvia, los montes y los animales, a bendecir al Señor. La iglesia antigua lo cantó en su liturgia. Es un texto devoto que se apoya en los salmos, pero interrumpe el relato justo cuando el rey se levanta asombrado (Dn 3:24).',
        { h: 'Susana' },
        'Susana es una mujer judía hermosa y fiel. Dos ancianos que son jueces del pueblo la desean y, cuando ella los rechaza, la acusan falsamente de adulterio. Cuando la llevan a morir, el joven Daniel interrumpe el juicio y pide interrogar a los dos por separado. Uno dice que la vio bajo un lentisco y el otro bajo una encina, y así queda probada su mentira. En griego, Daniel responde a cada uno con un juego de palabras con el nombre del árbol. Hacia el año 240, el cristiano Julio Africano escribió a Orígenes que ese juego de palabras solo funciona en griego, prueba de que el relato no se escribió en hebreo con el resto de Daniel.',
        { h: 'Bel y el dragón' },
        'En el último relato, Daniel demuestra al rey de Babilonia que el ídolo Bel no come las ofrendas: esparce ceniza en el piso del templo y al día siguiente aparecen las huellas de los sacerdotes y sus familias, que entraban por una puerta secreta. Después mata a un dragón venerado haciéndole comer pasteles de brea, grasa y pelo. Es echado otra vez al foso de los leones, ahora por seis días, y un ángel lleva al profeta Habacuc desde Judea, tomado del cabello, para que le dé de comer.',
        { h: 'Un contraste con el Daniel bíblico' },
        'En el libro canónico, la fidelidad de Daniel se muestra con oración y con palabras de Dios. Daniel no se libra del foso con astucia, sino porque «Mi Dios envió su ángel, el cual cerró la boca de los leones» (Dn 6:22). Los relatos añadidos tienen gracia y enseñan contra la idolatría, pero convierten al profeta en un detective ingenioso. La sabiduría que Dios dio a Daniel (Dn 1:17) es mucho más que ingenio.'
      ],
      pensar: 'Daniel defendió a Susana de un juicio injusto. ¿Cómo puede un creyente defender hoy al que es acusado falsamente, con verdad y con justicia?'
    },
    {
      id: 'baruc', n: 'Baruc y la Carta de Jeremías', ref: 'Jeremías 36:4; Jeremías 43:5-7; Jeremías 10:3-5; Jeremías 29:1', fecha: [-200, -50],
      visual: [
        img('../exilio/img/exi-carta-jeremias.webp', 'En una habitación sencilla de Jerusalén, el profeta Jeremías dicta una carta a su secretario Baruc, que escribe en un rollo, mientras dos mensajeros esperan para llevarla a Babilonia', 'Jeremías escribe a los cautivos en Babilonia (Jer 29:1). Su carta verdadera está en la Biblia. Recreación.'),
        cita('Jeremías 10:3-5', 'Porque las costumbres de los pueblos son vanidad; porque leño del bosque cortaron, obra de manos de artífice con buril. Con plata y oro lo adornan; con clavos y martillo lo afirman para que no se mueva. Derechos están como palmera, y no hablan; son llevados, porque no pueden andar. No tengáis temor de ellos, porque ni pueden hacer mal, ni para hacer bien tienen poder.'),
        tabla({
          titulo: 'Las partes de Baruc',
          cab: ['Capítulos', 'Contenido', 'Se parece a'],
          filas: [
            ['1:1-14', 'Baruc lee su libro a los cautivos en Babilonia', 'Jeremías 36'],
            ['1:15–3:8', 'Confesión de los pecados de Israel', 'Daniel 9:4-19'],
            ['3:9–4:4', 'Poema de la sabiduría, que se identifica con la ley', 'Job 28; Proverbios 8'],
            ['4:5–5:9', 'Consuelo para Jerusalén', 'Isaías 40–66'],
            ['6 (Carta de Jeremías)', 'Burla de los ídolos de Babilonia', 'Jeremías 10:1-16']
          ]
        })
      ],
      texto: [
        'Baruc, hijo de Nerías, fue el secretario fiel de Jeremías. Escribió en un rollo las profecías que Jeremías le dictaba (Jer 36:4) y lo acompañó en los días más difíciles. Siglos después, alguien escribió un libro con su nombre. Es breve, de cinco capítulos, y en las Biblias católicas lleva añadida como capítulo 6 una supuesta carta de Jeremías.',
        { h: 'Un libro hecho de ecos' },
        'El libro presenta a Baruc en Babilonia, leyendo su obra a los cautivos y a su rey Jeconías. Siguen una confesión de pecados muy parecida a la oración de Daniel 9, un poema que alaba la sabiduría de Dios y la identifica con la ley dada a Israel, y una consolación para Jerusalén que recuerda a los últimos capítulos de Isaías. Uno de sus versículos dice que la sabiduría apareció en la tierra y vivió entre los hombres; algunos padres de la iglesia lo leyeron como una profecía de la encarnación, aunque el autor hablaba de la ley.',
        'Por su lenguaje y sus fuentes, los estudiosos piensan que se escribió entre el 200 y el 50 a.C., mucho después de Baruc. Hay además un problema con su escenario: según el libro de Jeremías, Baruc no fue llevado a Babilonia, sino que lo llevaron a Egipto junto con Jeremías (Jer 43:5-7).',
        { h: 'La Carta de Jeremías' },
        'Jeremías sí escribió una carta a los cautivos, y está en la Biblia (Jer 29). La que se agregó a Baruc es otra: una sátira contra los ídolos de Babilonia, que tienen ojos y no ven, a los que hay que sostener para que no se caigan, que no pueden defenderse del óxido ni de los ladrones. Repite con muchas variaciones lo que Jeremías ya había escrito: «porque leño del bosque cortaron, obra de manos de artífice con buril» (Jer 10:3). En una cueva de Qumrán apareció un pequeño fragmento griego de esta carta, de hacia el año 100 a.C.',
        { h: 'Lo que enseña' },
        'Baruc y la carta enseñan cosas verdaderas: el exilio fue consecuencia del pecado, Dios perdona al que se arrepiente y los ídolos son nada. Pero lo hacen repitiendo lo que los profetas ya habían dicho con autoridad, con un nombre que no es el de su autor. El lector de la Biblia encuentra todo eso, y mejor dicho, en Jeremías, Isaías y Daniel.',
        { ejercicio: {
          pregunta: '¿Qué dato del libro de Jeremías no encaja con el escenario del libro de Baruc?',
          opciones: [
            { t: 'Que Baruc nunca escribió para Jeremías.', ok: false, por_que: 'Baruc sí fue su secretario (Jer 36:4).' },
            { t: 'Que Baruc fue llevado a Egipto con Jeremías, no a Babilonia.', ok: true, por_que: 'Jeremías 43:5-7 cuenta que Johanán llevó a Egipto a Jeremías y a Baruc.' },
            { t: 'Que Jeremías nunca escribió a los cautivos.', ok: false, por_que: 'Sí lo hizo: su carta está en Jeremías 29.' }
          ],
          explicacion: 'El libro usa el nombre de un personaje bíblico, pero su escenario no coincide con lo que la Biblia cuenta de él.'
        } }
      ],
      pensar: 'Los ídolos de Babilonia tenían ojos y no veían. ¿Qué «ídolos» modernos reclaman la confianza que solo Dios merece?'
    },
    {
      id: 'manases', n: 'La Oración de Manasés', ref: '2 Crónicas 33:1-20; 1 Juan 1:9; Lucas 15:18-21',
      visual: [
        cita('2 Crónicas 33:12-13', 'Mas luego que fue puesto en angustias, oró a Jehová su Dios, humillado grandemente en la presencia del Dios de sus padres. Y habiendo orado a él, fue atendido; pues Dios oyó su oración, y lo restauró a Jerusalén, a su reino. Entonces reconoció Manasés que Jehová era Dios.'),
        tabla({
          titulo: 'Manasés en la Biblia y en la oración',
          cab: ['', 'La Biblia', 'La Oración de Manasés'],
          filas: [
            ['Qué dice', 'Manasés oró en su angustia, se humilló y Dios lo restauró', 'Pone por escrito esa oración, en 15 versículos'],
            ['Dónde estaba la oración', 'En las actas de los reyes y en las palabras de los videntes (2 Cr 33:18-19)', 'Se presenta como si fuera esa oración'],
            ['Más antiguas copias', 'Texto hebreo de Crónicas', 'Siglo III d.C. (Didascalia) y siglo V (Códice Alejandrino)'],
            ['Quién la recibe', 'Todas las iglesias', 'Las ortodoxas; la Vulgata la imprimió en un apéndice']
          ]
        })
      ],
      texto: [
        'Manasés fue el rey más malvado de Judá. Reconstruyó los altares paganos, quemó a su propio hijo en sacrificio, practicó la adivinación y llenó Jerusalén de sangre inocente (2 R 21:1-16). Sin embargo, 2 Crónicas cuenta algo que Reyes no dice: cuando los asirios lo llevaron preso a Babilonia con grillos, «oró a Jehová su Dios, humillado grandemente en la presencia del Dios de sus padres» (2 Cr 33:12). Dios lo escuchó y lo devolvió a su reino.',
        { h: 'Una oración que faltaba' },
        'Crónicas dice que esa oración estaba escrita en otros libros, las actas de los reyes de Israel y las palabras de los videntes, que no se conservaron (2 Cr 33:18-19). Un autor judío, probablemente entre el siglo II a.C. y el I d.C., quiso llenar ese hueco y escribió la oración que Manasés pudo haber dicho. Es un texto breve y muy hermoso. Alaba a Dios como creador, reconoce que su misericordia no tiene medida, confiesa que los pecados del rey son más que la arena del mar y pide perdón con humildad.',
        'La oración se copió en algunos manuscritos de la Biblia griega, en una colección de cánticos llamada las Odas, y la iglesia ortodoxa la usa en su liturgia. La Vulgata la imprimió en un apéndice. En Qumrán apareció otra oración atribuida a Manasés, con un texto completamente distinto, señal de que varias personas intentaron imaginar esas palabras.',
        { h: 'El arrepentimiento verdadero' },
        'El valor de la oración está en que expresa bien lo que la Biblia enseña sobre el arrepentimiento. Ningún pecado es demasiado grande para la misericordia de Dios cuando el pecador se humilla y confía en Él. Manasés mostró su arrepentimiento con hechos: quitó los ídolos del templo, restauró el altar de Jehová y mandó a Judá que sirviera a Dios (2 Cr 33:15-16).',
        'Jesús contó la historia del hijo que volvió a su padre diciendo: «Padre, he pecado contra el cielo y contra ti» (Lc 15:21). El Nuevo Testamento promete: «Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9). No necesitamos conocer las palabras exactas de Manasés; necesitamos su corazón humillado.'
      ],
      pensar: 'Si Dios perdonó a Manasés, el peor rey de Judá, ¿hay algo en tu pasado que sigas creyendo que Dios no puede perdonar?'
    }
  ];

  window.__APO.relatos = relatos;
})();
/* Los libros apócrifos y pseudoepígrafos · ruta IV. Los libros de sabiduría (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const sabiduria = [
    {
      id: 'eclesiastico', n: 'Eclesiástico: la sabiduría de Ben Sira', ref: 'Proverbios 1:7; Santiago 1:19; Mateo 6:14-15; Romanos 5:12; Lucas 24:44', fecha: [-190, -132],
      visual: [
        img('ben-sira.webp', 'En una sala sencilla de piedra en Jerusalén, un maestro judío de unos sesenta años, Ben Sira, sentado con un rollo abierto sobre las rodillas, enseña a un grupo de jóvenes sentados en esteras que lo escuchan con atención; por una ventana se ve la luz de la tarde', 'Ben Sira enseña en su casa de estudio en Jerusalén. Recreación.'),
        tabla({
          titulo: 'Eclesiástico en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Autor', 'Jesús, hijo de Sira (Ben Sira), un maestro de Jerusalén'],
            ['Fecha', 'Hacia el 190–180 a.C.; su nieto lo tradujo al griego en Egipto después del 132 a.C.'],
            ['Nombres', 'Sirácida, Sabiduría de Ben Sira; Eclesiástico, «el libro de la iglesia», en latín'],
            ['Contenido', '51 capítulos de proverbios, consejos e himnos; elogio de los padres de Israel (44–50)'],
            ['Copias en hebreo', 'Genizá de El Cairo (1896), Qumrán y un rollo hallado en Masada (1964)'],
            ['Ecos en el Nuevo Testamento', 'Santiago 1:19 (pronto para oír); el perdón al prójimo (Mt 6:14)']
          ]
        }),
        cita('Santiago 1:19', 'Por esto, mis amados hermanos, todo hombre sea pronto para oír, tardo para hablar, tardo para airarse;')
      ],
      texto: [
        'Eclesiástico es el libro más largo de los apócrifos y el único cuyo autor conocemos con seguridad. Jesús hijo de Sira, conocido como Ben Sira, fue un sabio de Jerusalén que enseñaba a los jóvenes en una «casa de instrucción». Escribió en hebreo hacia el 190–180 a.C., poco antes de la crisis de Antíoco IV. Unos cincuenta años después, su nieto lo tradujo al griego en Egipto.',
        { h: 'Un libro como Proverbios' },
        'Ben Sira sigue el estilo de Proverbios. Enseña que el principio de la sabiduría es el temor del Señor, y da consejos para casi todo: la amistad, el trabajo, la familia, el dinero, la salud, la conversación, la mesa, los préstamos, el trato con los poderosos. Identifica la sabiduría con la ley de Moisés. Sus capítulos 44 a 50 hacen un elogio de los grandes hombres de Israel, desde Enoc y Noé hasta el sumo sacerdote Simón, que servía en el templo en sus días.',
        'Algunas frases suenan muy cercanas al Nuevo Testamento. Ben Sira aconseja ser rápido para escuchar y lento para responder, como Santiago: «todo hombre sea pronto para oír, tardo para hablar, tardo para airarse» (Stg 1:19). También enseña a perdonar al prójimo para que Dios nos perdone, como Jesús en Mateo 6:14-15.',
        { h: 'Un testigo de la Biblia hebrea' },
        'El prólogo que escribió el nieto es un testimonio valioso. Dice tres veces que su abuelo había estudiado la ley, los profetas y los otros libros de los padres. Es la misma división en tres partes de la Biblia hebrea que usó Jesús (Lc 24:44). El traductor reconoce además que las cosas dichas en hebreo no tienen la misma fuerza cuando se traducen. Así, el mismo libro distingue entre la Escritura que su abuelo estudiaba y la obra que él escribió.',
        { h: 'Lo que no se puede aceptar' },
        'Junto a mucha sabiduría práctica, el libro tiene afirmaciones que la Escritura no respalda. Dice que la limosna expía los pecados, como el agua apaga el fuego. Atribuye a la mujer el comienzo del pecado y de la muerte, mientras que Pablo dice que el pecado entró al mundo «por un hombre» (Ro 5:12). Y tiene frases muy duras sobre las hijas y las mujeres que no reflejan el trato de Jesús con ellas.',
        { ejercicio: {
          pregunta: '¿Por qué es importante el prólogo de Eclesiástico para el estudio del canon?',
          opciones: [
            { t: 'Porque afirma que Eclesiástico es parte de la ley de Moisés.', ok: false, por_que: 'No dice eso; distingue la obra de su abuelo de la ley.' },
            { t: 'Porque menciona tres veces la ley, los profetas y los otros libros, la división de la Biblia hebrea.', ok: true, por_que: 'Muestra que hacia el 130 a.C. ya se reconocía un conjunto de Escrituras en tres partes.' },
            { t: 'Porque es el texto más antiguo del Nuevo Testamento.', ok: false, por_que: 'Se escribió más de un siglo antes de Cristo.' }
          ],
          explicacion: 'El nieto de Ben Sira es un testigo temprano de la Biblia hebrea que Jesús confirmó.'
        } }
      ],
      pensar: 'Ben Sira enseñaba que el principio de la sabiduría es el temor del Señor (Pr 1:7). ¿Qué decisiones de tu semana estarían distintas si las tomaras con ese temor?'
    },
    {
      id: 'sabiduria', n: 'Sabiduría de Salomón', ref: 'Mateo 27:43; Hebreos 1:3; Romanos 1:20-23; Génesis 2:7; 1 Reyes 3:9', fecha: [-50, 40],
      visual: [
        img('../imperio-griego/img/grecia-filosofos.webp', 'Filósofos griegos conversan bajo un pórtico de columnas', 'Sabiduría se escribió en Alejandría, en diálogo con la filosofía griega. Recreación.'),
        tabla({
          titulo: 'Sabiduría y el Nuevo Testamento',
          cab: ['Sabiduría', 'Qué dice', 'En el Nuevo Testamento'],
          filas: [
            ['2:12-20', 'Los impíos acechan al justo que se llama hijo de Dios: si lo es, Dios lo librará', 'Mateo 27:43'],
            ['7:25-26', 'La sabiduría es resplandor de la luz eterna e imagen de la bondad de Dios', 'Hebreos 1:3; Colosenses 1:15'],
            ['13:1-9', 'Por la grandeza de lo creado se puede conocer al Creador', 'Romanos 1:20'],
            ['14:22-31', 'De la idolatría nacen todos los vicios', 'Romanos 1:21-32']
          ],
          nota: 'Son semejanzas de lenguaje e ideas; el Nuevo Testamento nunca cita a Sabiduría como Escritura.'
        }),
        cita('Mateo 27:43', 'Confió en Dios; líbrele ahora si le quiere; porque ha dicho: Soy Hijo de Dios.')
      ],
      texto: [
        'El libro de la Sabiduría habla en primera persona como si fuera Salomón, el rey que pidió a Dios un corazón entendido (1 R 3:9). Pero se escribió en griego, en Alejandría, unos novecientos años después de Salomón, probablemente en el siglo I a.C. El autor era un judío culto que conocía bien la filosofía griega y quería mostrar a sus hermanos tentados por esa cultura que la verdadera sabiduría viene del Dios de Israel.',
        { h: 'Las tres partes' },
        'La primera parte (1–5) contrasta el destino del justo y el del impío. Los impíos piensan que la vida es corta y que después no hay nada, y por eso persiguen al justo que los incomoda. Pero las almas de los justos están en la mano de Dios. La segunda (6–9) alaba la sabiduría con la voz de Salomón. La tercera (10–19) recorre la historia desde Adán hasta el éxodo, mostrando cómo la sabiduría salvó a Israel, y critica con dureza la idolatría de Egipto.',
        { h: 'Por qué los cristianos lo apreciaron' },
        'Los primeros cristianos encontraron en el capítulo 2 una descripción asombrosa de la pasión de Cristo: los impíos se burlan del justo que dice ser hijo de Dios y lo desafían a que Dios lo libre. En la cruz, los principales sacerdotes dijeron algo parecido: «Confió en Dios; líbrele ahora si le quiere» (Mt 27:43). Hebreos llama a Cristo «el resplandor de su gloria» (He 1:3), con palabras que recuerdan cómo Sabiduría describe a la sabiduría de Dios. Y Romanos 1 desarrolla la misma idea de que la creación muestra al Creador y de que la idolatría lleva a toda clase de pecados.',
        'Un antiguo listado de libros, el fragmento de Muratori, de fines del siglo II, mencionó Sabiduría entre los libros que se leían en la iglesia, como escrito por amigos de Salomón en su honor. Es decir, ya entonces se sabía que no lo había escrito Salomón.',
        { h: 'Lo que viene de la filosofía griega' },
        'En algunas partes el autor adopta ideas de los filósofos que la Biblia no enseña. El supuesto Salomón dice que, siendo bueno, entró en un cuerpo sin mancha, como si el alma existiera antes del cuerpo. La Escritura enseña que el ser humano es una unidad creada por Dios, que formó al hombre del polvo de la tierra y sopló en él aliento de vida (Gn 2:7).',
        { ejercicio: {
          pregunta: '¿Cómo se explica que Hebreos 1:3 se parezca a Sabiduría 7:26?',
          opciones: [
            { t: 'Hebreos cita a Sabiduría como Escritura inspirada.', ok: false, por_que: 'Hebreos no lo cita ni dice «escrito está»; solo usa un lenguaje parecido.' },
            { t: 'El autor de Hebreos usa palabras que sus lectores conocían para decir algo nuevo: que Cristo es el resplandor de la gloria de Dios.', ok: true, por_que: 'Lo que Sabiduría decía de una cualidad de Dios, Hebreos lo dice de una persona, el Hijo eterno.' },
            { t: 'Sabiduría copió a Hebreos.', ok: false, por_que: 'Sabiduría es anterior a Hebreos.' }
          ],
          explicacion: 'El Nuevo Testamento usa el lenguaje de su tiempo y lo llena de un sentido nuevo en Cristo.'
        } }
      ],
      pensar: 'La sabiduría que el libro buscaba se hizo persona en Cristo, «en quien están escondidos todos los tesoros de la sabiduría y del conocimiento» (Col 2:3). ¿Buscas la sabiduría para tu vida en Él?'
    },
    {
      id: 'salmo-adicional', n: 'El salmo adicional de David', ref: '1 Samuel 16:11-13; 1 Samuel 17:45-51; Salmo 78:70-72', fecha: -100,
      visual: [
        cita('1 Samuel 17:45', 'Entonces dijo David al filisteo: Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos, el Dios de los escuadrones de Israel, a quien tú has provocado.'),
        tabla({
          titulo: 'El salmo 151',
          cab: ['', ''],
          filas: [
            ['Dónde está', 'Al final del libro de los Salmos en la Biblia griega, con el título «fuera del número»'],
            ['Qué cuenta', 'David, el menor de sus hermanos, pastor y músico, ungido por Samuel, vence a Goliat'],
            ['Original hebreo', 'Hallado en 1956 en la cueva 11 de Qumrán, en un rollo de salmos, como dos salmos breves'],
            ['Quién lo lee', 'Las iglesias ortodoxas; las Biblias católicas y evangélicas no lo incluyen']
          ]
        })
      ],
      texto: [
        'El libro de los Salmos tiene 150 salmos en todas nuestras Biblias. La Biblia griega agregó uno más al final, con un título curioso: un salmo de David, escrito cuando peleó solo contra Goliat, «fuera del número». Es decir, los mismos traductores reconocían que no pertenecía a la colección de los 150.',
        { h: 'Lo que dice' },
        'En siete versículos, David cuenta su historia: era el pequeño entre sus hermanos y el menor en la casa de su padre; apacentaba las ovejas; sus manos hicieron instrumentos para alabar a Dios. Dios envió a su profeta a ungirlo, aunque sus hermanos eran altos y hermosos. Salió al encuentro del filisteo, que lo maldijo por sus ídolos, y le cortó la cabeza con su propia espada.',
        { h: 'Un hallazgo en Qumrán' },
        'En 1956 apareció en la cueva 11 de Qumrán un gran rollo de salmos copiado en el siglo I d.C. Además de muchos salmos bíblicos, contenía otros textos, entre ellos este salmo en hebreo, en forma de dos composiciones breves, y una parte del último capítulo de Eclesiástico. El hallazgo mostró que el salmo griego se tradujo de un original hebreo y que en Qumrán circulaban colecciones de salmos con textos adicionales.',
        { h: 'El relato verdadero ya está en la Biblia' },
        'Todo lo que el salmo cuenta está en 1 Samuel 16 y 17, y mejor dicho. Allí David no se presenta a sí mismo, sino que el texto muestra cómo Dios mira el corazón y no la apariencia (1 S 16:7). Y allí está su confesión ante Goliat: «Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos» (1 S 17:45).',
        'El salmo adicional sirve para ver cómo el pueblo de Dios recordaba y cantaba la historia de David siglos después. Pero el libro de los Salmos que Jesús y los apóstoles citaron es el de los 150.'
      ],
      pensar: 'David venció a Goliat «en el nombre de Jehová de los ejércitos». ¿Qué gigante enfrentas hoy, y en el nombre de quién lo estás enfrentando?'
    }
  ];

  window.__APO.sabiduria = sabiduria;
})();
/* Los libros apócrifos y pseudoepígrafos · ruta V. Los pseudoepígrafos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const pseudo = [
    {
      id: 'enoc', n: '1 Enoc y la carta de Judas', ref: 'Judas 14-15; Génesis 5:21-24; Génesis 6:1-4; 2 Pedro 2:4; Judas 6; Hechos 17:28', fecha: [-300, 50],
      visual: [
        cita('Judas 14-15', 'De éstos también profetizó Enoc, séptimo desde Adán, diciendo: He aquí, vino el Señor con sus santas decenas de millares, para hacer juicio contra todos, y dejar convictos a todos los impíos de todas sus obras impías que han hecho impíamente, y de todas las cosas duras que los pecadores impíos han hablado contra él.'),
        tabla({
          titulo: 'Las cinco partes de 1 Enoc',
          cab: ['Capítulos', 'Nombre', 'Contenido', 'Fecha aproximada'],
          filas: [
            ['1–36', 'Libro de los Vigilantes', 'Ángeles que se unen a mujeres (Génesis 6) y el juicio de Dios', '300–200 a.C.'],
            ['37–71', 'Libro de las Parábolas', 'El Hijo del Hombre, el Elegido, juzga a los reyes', 'Siglo I a.C. o I d.C.'],
            ['72–82', 'Libro astronómico', 'El sol, la luna y un año de 364 días', '300–200 a.C.'],
            ['83–90', 'Libro de los Sueños', 'La historia de Israel contada con animales', 'Hacia 165 a.C.'],
            ['91–108', 'Carta de Enoc', 'Advertencias a los pecadores y consuelo a los justos', '200–100 a.C.']
          ]
        })
      ],
      texto: [
        'Génesis dice muy poco de Enoc: «Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios» (Gn 5:24). Ese misterio inspiró, siglos después, un libro enorme atribuido a él. 1 Enoc reúne cinco obras distintas, escritas entre el 300 a.C. y el siglo I d.C., en las que Enoc recibe visiones del cielo, de los ángeles, del juicio final y del curso de la historia.',
        { h: 'Los vigilantes' },
        'La primera parte desarrolla el breve relato de Génesis 6:1-4. Cuenta que doscientos ángeles, llamados vigilantes, bajaron al monte Hermón, se unieron a mujeres y enseñaron a los hombres la fabricación de armas, la magia y los adornos. De esas uniones nacieron gigantes que llenaron la tierra de violencia, y Dios mandó el diluvio y encerró a los ángeles en prisiones oscuras hasta el día del juicio.',
        { h: 'La cita de Judas' },
        'Judas, el hermano de Jacobo, cita casi palabra por palabra una frase del primer capítulo del libro: «De éstos también profetizó Enoc, séptimo desde Adán» (Jud 14). También 2 Pedro 2:4 y Judas 6 hablan de ángeles que pecaron y fueron encerrados en prisiones de oscuridad, una idea que el libro desarrolla con detalle.',
        'Que Judas cite una frase verdadera de un libro no convierte ese libro en Escritura. Pablo citó a poetas griegos (Hch 17:28; Tit 1:12) sin que nadie piense que sus obras sean inspiradas. Judas, guiado por el Espíritu, afirma que esa profecía de Enoc es verdadera; no dice nada del resto del libro.',
        { h: 'Un libro que llegó de Etiopía' },
        'La iglesia antigua leyó 1 Enoc con interés, y Tertuliano lo defendió, pero la mayoría lo rechazó y se perdió en Occidente. Solo la iglesia de Etiopía lo conservó completo y lo incluye hasta hoy en su Biblia. En 1773 el viajero escocés James Bruce llevó a Europa tres copias en ge’ez, y en 1821 se publicó la primera traducción al inglés. En Qumrán aparecieron después fragmentos en arameo de unas once copias de casi todas sus partes, menos las Parábolas.',
        { posturas: {
          titulo: '¿Quiénes son los «hijos de Dios» de Génesis 6?',
          a: { n: 'Ángeles caídos', t: 'Es la lectura de 1 Enoc y de muchos autores judíos y cristianos antiguos. Se apoya en que «hijos de Dios» designa a los ángeles en Job 1:6 y 38:7, y en lo que dicen 2 Pedro 2:4 y Judas 6.' },
          b: { n: 'Descendientes de Set', t: 'Desde Agustín, muchos entienden que los hijos de Dios son la línea piadosa de Set, que se mezcló con la descendencia de Caín. Señalan que Jesús dijo que los ángeles no se casan (Mt 22:30).' },
          c: 'La Biblia no da más detalles. Lo que enseña con claridad es que la maldad de los hombres llegó a ser grande en la tierra y que Dios la juzgó con el diluvio (Gn 6:5-8).'
        } }
      ],
      pensar: 'Enoc «caminó con Dios» en una generación corrompida. ¿Qué significa para ti caminar con Dios en medio de tu propia generación?'
    },
    {
      id: 'moises-tradiciones', n: 'La Asunción de Moisés y otras tradiciones', ref: 'Judas 9; 2 Timoteo 3:8; Hebreos 11:37; Deuteronomio 34:5-6; Zacarías 3:2', fecha: [-4, 30],
      visual: [
        cita('Judas 9', 'Pero cuando el arcángel Miguel contendía con el diablo, disputando con él por el cuerpo de Moisés, no se atrevió a proferir juicio de maldición contra él, sino que dijo: El Señor te reprenda.'),
        tabla({
          titulo: 'Tradiciones judías que menciona el Nuevo Testamento',
          cab: ['Pasaje', 'Lo que dice', 'De dónde viene'],
          filas: [
            ['Judas 9', 'Miguel disputa con el diablo por el cuerpo de Moisés', 'Según Orígenes, de la Asunción de Moisés, cuyo final se perdió'],
            ['2 Timoteo 3:8', 'Janes y Jambres resistieron a Moisés', 'Nombres que la tradición judía daba a los magos de Egipto (Éx 7:11)'],
            ['Hebreos 11:37', 'Algunos fieles fueron aserrados', 'La tradición de la muerte de Isaías bajo Manasés, contada en la Ascensión de Isaías'],
            ['1 Corintios 10:4', 'La roca que los seguía', 'Una tradición judía sobre el agua de la roca en el desierto']
          ],
          nota: 'Los autores bíblicos afirman lo que dicen de estas tradiciones; no hacen Escritura a los libros que las contienen.'
        })
      ],
      texto: [
        'Deuteronomio cuenta que Moisés murió en Moab y que Dios mismo lo enterró, «y ninguno conoce el lugar de su sepultura hasta hoy» (Dt 34:6). Ese silencio despertó la imaginación de los judíos. Un libro escrito a comienzos del siglo I d.C., llamado la Asunción o el Testamento de Moisés, presenta las últimas palabras de Moisés a Josué, en las que anuncia la historia de Israel hasta los días de Herodes y sus hijos.',
        { h: 'Un libro que conocemos a medias' },
        'Del libro solo queda una traducción latina incompleta, encontrada en una biblioteca de Milán y publicada en 1861. El final se perdió. Varios padres de la iglesia, como Orígenes, cuentan que en ese final el arcángel Miguel disputaba con el diablo por el cuerpo de Moisés. Judas menciona esa disputa para enseñar humildad: ni siquiera Miguel se atrevió a maldecir al diablo, sino que dijo: «El Señor te reprenda» (Jud 9), las mismas palabras del ángel en Zacarías 3:2.',
        { h: 'Otras tradiciones en el Nuevo Testamento' },
        'Judas no es el único. Pablo nombra a Janes y Jambres, los magos que resistieron a Moisés (2 Ti 3:8), cuyos nombres no están en Éxodo pero sí en la tradición judía. Hebreos dice que algunos creyentes fueron «aserrados» (He 11:37), probablemente pensando en Isaías, que según una antigua tradición murió así en tiempos de Manasés. Los autores del Nuevo Testamento conocían estas historias, como cualquier judío de su época.',
        { h: 'Cómo entenderlo' },
        'El Espíritu Santo guió a los escritores de la Biblia de modo que todo lo que afirman es verdad. Cuando un autor inspirado menciona un hecho conservado por la tradición, ese hecho queda confirmado. Pero eso no da autoridad a todo lo demás que dice la tradición o el libro que la guardó. Es la misma forma en que Pablo aprovechó a un poeta griego en Atenas sin aprobar su religión.',
        { ejercicio: {
          pregunta: 'Judas cita a 1 Enoc y menciona la disputa por el cuerpo de Moisés. ¿Qué se concluye de eso?',
          opciones: [
            { t: 'Que 1 Enoc y la Asunción de Moisés deberían estar en la Biblia.', ok: false, por_que: 'Citar o mencionar algo no es reconocer un libro como Escritura; Pablo citó a poetas paganos.' },
            { t: 'Que los hechos que Judas afirma son verdaderos, aunque los libros que los conservaron no sean Escritura.', ok: true, por_que: 'La inspiración garantiza lo que dice el autor bíblico, no todo el contenido de sus fuentes.' },
            { t: 'Que Judas se equivocó al usar libros no inspirados.', ok: false, por_que: 'Judas es Escritura inspirada; lo que afirma es verdad.' }
          ],
          explicacion: 'Un autor inspirado puede usar material de su tiempo; lo que él afirma tiene la autoridad de Dios.'
        } }
      ],
      pensar: 'Miguel no maldijo al diablo, sino que dejó el juicio en manos del Señor. ¿Cómo enfrentas tú el mal: con tus propias palabras o con la autoridad de Dios?'
    },
    {
      id: 'jubileos', n: 'Jubileos y los Testamentos de los doce patriarcas', ref: 'Deuteronomio 4:2; Apocalipsis 22:18-19; Génesis 49; Colosenses 2:16-17', fecha: [-160, 150],
      visual: [
        img('../de-la-biblia-a-nosotros/img/pastor-qumran.webp', 'Un joven pastor beduino se asoma a la entrada de una cueva en un acantilado del desierto de Judea y descubre en la penumbra unas tinajas de barro', 'En las cuevas de Qumrán se hallaron unas quince copias de Jubileos. Recreación.'),
        cita('Deuteronomio 4:2', 'No añadiréis a la palabra que yo os mando, ni disminuiréis de ella, para que guardéis los mandamientos de Jehová vuestro Dios que yo os ordene.'),
        tabla({
          titulo: 'Dos libros que vuelven a contar el Génesis',
          cab: ['', 'Jubileos', 'Testamentos de los doce patriarcas'],
          filas: [
            ['Qué es', 'Génesis y el comienzo de Éxodo contados de nuevo, por períodos de 49 años', 'Las últimas palabras de cada uno de los doce hijos de Jacob a sus hijos'],
            ['Quién habla', 'Un ángel que dicta a Moisés en el Sinaí', 'Rubén, Simeón, Leví, Judá y los demás'],
            ['Fecha', 'Hacia 160–150 a.C.', 'Base judía; forma final cristiana, siglo II d.C.'],
            ['Tema principal', 'Un calendario solar de 364 días y la ley guardada desde el principio', 'Las virtudes y los vicios; esperanza en un ungido de Leví y de Judá'],
            ['Quién lo lee', 'La iglesia de Etiopía lo tiene en su Biblia', 'Ninguna iglesia lo recibe como Escritura']
          ]
        })
      ],
      texto: [
        'Algunos escritores judíos no se limitaron a explicar la Escritura: la volvieron a escribir, agregando detalles, discursos y fechas. Jubileos y los Testamentos de los doce patriarcas son dos ejemplos de esa manera de leer la Biblia.',
        { h: 'Jubileos: el «pequeño Génesis»' },
        'Jubileos dice ser la revelación que un ángel dictó a Moisés en el monte Sinaí. Cuenta la historia desde la creación hasta el éxodo y la ordena en jubileos, períodos de 49 años. Su autor, que escribió hacia el 160–150 a.C., defendía un calendario solar de 364 días y quería mostrar que los patriarcas ya guardaban las fiestas, el día de reposo y las leyes de pureza antes de Moisés. Por eso hace que Abraham celebre la fiesta de los tabernáculos y que Noé observe Pentecostés.',
        'El libro fue muy apreciado en Qumrán, donde se hallaron unas quince copias en hebreo, porque aquella comunidad usaba el mismo calendario y criticaba al templo de Jerusalén por seguir otro. La iglesia de Etiopía lo incluye en su Biblia.',
        { h: 'Los Testamentos de los doce patriarcas' },
        'Siguiendo el modelo de Génesis 49, donde Jacob bendice a sus hijos antes de morir, este libro pone en boca de cada uno de los doce un discurso de despedida. Rubén advierte contra la inmoralidad, Simeón contra la envidia, José habla del dominio propio. El texto que conocemos lo terminaron de redactar cristianos del siglo II, que le agregaron referencias a Cristo, pero en Qumrán y en la genizá de El Cairo aparecieron textos judíos más antiguos sobre Leví.',
        { h: 'No añadir a la Palabra' },
        'Estos libros enseñan mucho sobre cómo pensaban algunos grupos judíos antes de Jesús. Pero también muestran un peligro: atribuir a Dios o a un ángel lo que en realidad son ideas propias, para dar autoridad a un calendario o a una práctica. Moisés advirtió: «No añadiréis a la palabra que yo os mando, ni disminuiréis de ella» (Dt 4:2), y Apocalipsis cierra la Biblia con la misma advertencia (Ap 22:18-19).',
        'Pablo enseñó que los días de fiesta, las lunas nuevas y los días de reposo eran «sombra de lo que ha de venir; pero el cuerpo es de Cristo» (Col 2:17). Ningún calendario, por antiguo que parezca, puede ocupar el lugar de Cristo en la vida del creyente.'
      ],
      pensar: 'Jubileos atribuyó sus propias ideas a un ángel para darles autoridad. ¿Cómo puedes distinguir hoy entre lo que Dios dice en su Palabra y lo que alguien afirma que Dios le dijo?'
    },
    {
      id: 'salmos-salomon', n: 'Los Salmos de Salomón y la espera del Mesías', ref: 'Lucas 2:11; Lucas 1:32-33; Juan 6:15; Hechos 1:6-8; Juan 18:36', fecha: [-63, -40],
      visual: [
        mapa({ view: V.mediterraneo, lugares: ['jerusalen', 'roma', 'alejandria'] }),
        cita('Lucas 2:11', 'que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor.'),
        tabla({
          titulo: 'El Mesías que esperaban y el Mesías que vino',
          cab: ['Salmos de Salomón 17', 'Jesús, el Cristo'],
          filas: [
            ['Hijo de David', 'Hijo de David (Lc 1:32)'],
            ['Expulsa a los gentiles de Jerusalén', 'Muere por judíos y gentiles y los une en un solo pueblo (Ef 2:14)'],
            ['Rompe a los pecadores como vasija de barro', 'Vino a buscar y a salvar lo que se había perdido (Lc 19:10)'],
            ['Reina en un reino de este mundo', '«Mi reino no es de este mundo» (Jn 18:36), y volverá a reinar sobre la tierra'],
            ['Es llamado Cristo Señor', '«Un Salvador, que es CRISTO el Señor» (Lc 2:11)']
          ]
        })
      ],
      texto: [
        'En el año 63 a.C., el general romano Pompeyo tomó Jerusalén después de un asedio de tres meses, entró al templo y llegó hasta el Lugar Santísimo, donde solo podía entrar el sumo sacerdote una vez al año. Para los judíos piadosos fue una profanación terrible. Poco después, un grupo de ellos, probablemente fariseos, escribió dieciocho salmos para lamentar lo ocurrido y pedir a Dios que cumpliera sus promesas. Se atribuyeron a Salomón, aunque se escribieron casi mil años después de él.',
        { h: 'La esperanza del Hijo de David' },
        'Los salmos 17 y 18 de la colección son la descripción más completa que tenemos de lo que muchos judíos esperaban del Mesías en el siglo antes de Jesús. Piden a Dios que levante al hijo de David como rey, que expulse a los gentiles de Jerusalén, que destruya a los gobernantes injustos, que reúna a las tribus de Israel y que reine con justicia y sabiduría. Al final lo llaman con un título que sorprende al lector cristiano: el Cristo Señor.',
        'Es el mismo título que el ángel usó para anunciar el nacimiento de Jesús a los pastores: «un Salvador, que es CRISTO el Señor» (Lc 2:11). Los pastores entendieron que había llegado el que Israel esperaba.',
        { h: 'Un Mesías distinto' },
        'Esta esperanza ayuda a entender muchas escenas de los evangelios. Cuando Jesús alimentó a la multitud, querían hacerlo rey por la fuerza (Jn 6:15). Después de la resurrección, los discípulos todavía preguntaban: «Señor, ¿restaurarás el reino a Israel en este tiempo?» (Hch 1:6). Jesús no negó que el reino vendría, pero les dijo que primero recibirían el poder del Espíritu Santo para ser sus testigos hasta lo último de la tierra (Hch 1:8).',
        'Jesús es el Hijo de David y el Rey, pero vino primero a morir por los pecadores, judíos y gentiles. El reino que esperaban los Salmos de Salomón no fue cancelado: el Mesías volverá a reinar sobre la tierra desde Jerusalén, como anunciaron los profetas. Pero antes había que resolver el problema más profundo, el pecado, y eso solo podía hacerlo el Cordero de Dios.'
      ],
      pensar: 'Muchos esperaban un Mesías que resolviera sus problemas políticos. ¿Qué esperas tú de Jesús: que cambie tus circunstancias o que reine en tu corazón?'
    },
    {
      id: '4-esdras', n: '4 Esdras: preguntas después de la destrucción', ref: 'Romanos 8:18-23; Apocalipsis 21:1-4; Habacuc 1:13; Lucas 24:44', fecha: [70, 120],
      visual: [
        tabla({
          titulo: 'Los nombres de los libros de Esdras',
          cab: ['Biblia hebrea y evangélica', 'Biblia griega', 'Vulgata latina'],
          filas: [
            ['Esdras', 'Esdras B (con Nehemías)', '1 Esdras'],
            ['Nehemías', 'Esdras B (con Esdras)', '2 Esdras'],
            ['—', 'Esdras A (1 Esdras)', '3 Esdras (apéndice)'],
            ['—', '—', '4 Esdras (apéndice): este libro']
          ],
          nota: 'En las Biblias en inglés, 4 Esdras se llama 2 Esdras. Sus capítulos 1–2 y 15–16 son añadidos cristianos.'
        }),
        cita('Romanos 8:18', 'Pues tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse.')
      ],
      texto: [
        'En el año 70 d.C., los romanos destruyeron Jerusalén y su templo. Unos treinta años después, un judío que había vivido esa catástrofe escribió un libro en el que Esdras, desde Babilonia, después de la primera destrucción, hace a Dios las preguntas que él mismo se hacía: ¿por qué Dios permite que una nación pecadora destruya a su pueblo? ¿Por qué son tan pocos los que se salvan? ¿Cuándo llegará el fin?',
        { h: 'Siete visiones' },
        'El libro tiene siete visiones. En las tres primeras, Esdras discute con el ángel Uriel, que le responde que los caminos de Dios no se pueden comprender del todo y que el fin está cerca. Después Esdras ve a una mujer que llora por su hijo muerto y se transforma en una ciudad gloriosa, la nueva Sion. Ve un águila con muchas alas, que representa a Roma, reprendida por un león, que es el Mesías. Y ve a un hombre que sube del mar, vence a las naciones y reúne a las tribus perdidas.',
        'El libro dice que el Mesías reinará cuatrocientos años, luego morirá, y el mundo volverá a un silencio de siete días antes de la resurrección y el juicio. Es una muestra de cómo algunos judíos imaginaban el fin, muy distinta de la enseñanza de los apóstoles sobre el Cristo que murió, resucitó para siempre y volverá.',
        { h: 'Los noventa y cuatro libros' },
        'En la última visión, Esdras dicta durante cuarenta días noventa y cuatro libros. Dios le manda publicar veinticuatro, para que los lean dignos e indignos, y guardar setenta en secreto para los sabios. Los veinticuatro son la Biblia hebrea, el mismo contenido de nuestro Antiguo Testamento. Así, hacia el año 100, un libro apócrifo da testimonio del canon que Israel reconocía.',
        { h: 'Un libro con añadidos cristianos' },
        'Los cristianos le agregaron dos capítulos al principio y dos al final. De uno de esos añadidos viene la oración por los difuntos que pide para ellos el descanso eterno y la luz perpetua, que la liturgia católica usa en las misas de difuntos. La Iglesia católica no lo considera Escritura; la Vulgata lo imprimió en un apéndice.',
        { h: 'La respuesta del Nuevo Testamento' },
        'Las preguntas de 4 Esdras son las mismas de Habacuc: «¿por qué ves a los menospreciadores, y callas cuando destruye el impío al más justo que él?» (Hab 1:13). El Nuevo Testamento no responde con cálculos sobre el fin, sino con la cruz y la resurrección de Cristo, y con una esperanza segura: «tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse» (Ro 8:18).'
      ],
      pensar: 'El autor de 4 Esdras escribió con el dolor de ver su ciudad destruida. ¿Qué preguntas le haces tú a Dios en medio del sufrimiento, y dónde buscas la respuesta?'
    }
  ];

  window.__APO.pseudo = pseudo;
})();
/* Los libros apócrifos y pseudoepígrafos · ruta VI. Los apócrifos del Nuevo Testamento (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, PALABRA } = window.__APO;

  const nt = [
    {
      id: 'que-son-nt', n: 'Evangelios, hechos, cartas y apocalipsis que no son de los apóstoles', ref: '2 Tesalonicenses 2:2; 2 Tesalonicenses 3:17; Lucas 1:1-4; Gálatas 1:8-9', fecha: [120, 600],
      visual: [
        img('nag-hammadi.webp', 'Al pie de un acantilado rocoso en el valle del Nilo, un campesino egipcio de mediana edad, con galabiya y turbante, se arrodilla junto a una gran tinaja de barro rota y saca de ella unos libros antiguos encuadernados en cuero; a su lado, un hombre más joven sostiene una azada', 'El hallazgo de los códices de Nag Hammadi, en Egipto, en 1945. Recreación.'),
        tabla({
          titulo: 'Los apócrifos del Nuevo Testamento',
          cab: ['Tipo', 'Ejemplos', 'Siglos'],
          filas: [
            ['Evangelios de la infancia', 'Protoevangelio de Santiago; Evangelio de la infancia de Tomás', 'II'],
            ['Evangelios gnósticos', 'Evangelio de Tomás, de Judas, de María y de Felipe', 'II–III'],
            ['Hechos', 'Hechos de Pablo (con Tecla), de Pedro, de Juan, de Andrés y de Tomás', 'II–III'],
            ['Cartas', 'Carta a los Laodicenses; 3 Corintios; cartas de Pablo y Séneca', 'II–IV'],
            ['Apocalipsis', 'Apocalipsis de Pedro; Apocalipsis de Pablo', 'II–IV']
          ],
          nota: 'Se llaman «apócrifos del Nuevo Testamento» porque imitan sus géneros, no porque alguna iglesia los tenga en su Biblia.'
        }),
        pasos([
          { t: 'Egipto conservó muchos de estos textos: Oxirrinco (papiros griegos), Ajmim y Nag Hammadi (1945)', fecha: 1945, estado: { view: V.egipto, lugares: ['h-oxirrinco', 'h-akhmim', 'h-nag-hammadi', 'alejandria'] } },
          { t: 'Lyon (hacia 180) y Cesarea (hacia 325): Ireneo y Eusebio los describen y los rechazan', fecha: 325, estado: { view: V.europa, lugares: ['h-lyon', 'cesarea', 'roma', 'alejandria'] } }
        ])
      ],
      texto: [
        'Así como hubo escritos judíos que imitaron los libros del Antiguo Testamento, después de los apóstoles aparecieron escritos cristianos que imitaron los del Nuevo: evangelios, hechos, cartas y apocalipsis, casi siempre con el nombre de un apóstol o de alguien cercano a Jesús. Se escribieron entre el siglo II y el VI. Ninguna iglesia, ni católica, ni ortodoxa, ni evangélica, los tiene en su Biblia.',
        { h: 'Por qué se escribieron' },
        'Unos nacieron de la curiosidad. Los evangelios dicen poco de la niñez de Jesús, de la vida de María o del destino de los apóstoles, y la gente quería saber más. Otros nacieron de la devoción: relatos de milagros y de mártires para animar a los creyentes. Y otros se escribieron para difundir doctrinas distintas de la de los apóstoles, poniéndolas en boca de Jesús o de un apóstol para darles autoridad.',
        'El problema no era nuevo. Pablo advirtió a los tesalonicenses que no se dejaran perturbar «ni por carta como si fuera nuestra» (2 Ts 2:2), y por eso firmaba sus cartas con su propia mano como señal (2 Ts 3:17). Ya en vida de los apóstoles circulaban escritos falsos con su nombre.',
        { h: 'La iglesia no los escondió' },
        'Se suele decir que la iglesia escondió estos libros. Es al revés: la iglesia los conoció, los leyó y explicó públicamente por qué no eran apostólicos. Ireneo, obispo de Lyon, refutó hacia el año 180 los evangelios gnósticos. Eusebio de Cesarea, hacia el 325, clasificó los escritos que circulaban en reconocidos, discutidos, falsos y heréticos. Las preguntas eran sencillas: ¿viene de un apóstol o de alguien cercano a ellos? ¿Concuerda con el evangelio que las iglesias recibieron desde el principio? ¿Lo leían las iglesias de todas partes?',
        { h: 'Los hallazgos de Egipto' },
        'El clima seco de Egipto conservó muchos de estos textos. En Oxirrinco aparecieron miles de papiros griegos, entre ellos fragmentos del Evangelio de Tomás. En Ajmim se halló parte del Evangelio de Pedro y del Apocalipsis de Pedro. Y en 1945, cerca de Nag Hammadi, unos campesinos encontraron en una tinaja trece códices en copto con más de cincuenta escritos, muchos de ellos gnósticos.',
        'La pregunta de por qué estos escritos no entraron en el canon se estudia en La Palabra de Dios. Esta ruta recorre los más conocidos.',
        ir('Ver en La Palabra de Dios: los escritos que quedaron fuera', PALABRA + '#canon/7')
      ],
      pensar: 'Pablo firmaba sus cartas para que nadie fuera engañado por escritos falsos. ¿Cómo te ayuda conocer la Biblia a reconocer enseñanzas que usan el nombre de Jesús sin venir de Él?'
    },
    {
      id: 'infancia', n: 'Los evangelios de la infancia', ref: 'Mateo 1:18-25; Marcos 6:3; Lucas 2:41-52; Juan 2:11; Isaías 1:3', fecha: [150, 650],
      visual: [
        cita('Lucas 2:51-52', 'Y descendió con ellos, y volvió a Nazaret, y estaba sujeto a ellos. Y su madre guardaba todas estas cosas en su corazón. Y Jesús crecía en sabiduría y en estatura, y en gracia para con Dios y los hombres.'),
        tabla({
          titulo: 'Tradiciones que vienen de los evangelios de la infancia',
          cab: ['Tradición', 'De dónde viene', 'Qué dicen los evangelios'],
          filas: [
            ['Los padres de María se llamaban Joaquín y Ana', 'Protoevangelio de Santiago (siglo II)', 'No dan los nombres'],
            ['María vivió en el templo desde los tres años', 'Protoevangelio de Santiago', 'No lo mencionan'],
            ['José era un viudo anciano con hijos de otro matrimonio', 'Protoevangelio de Santiago', 'Hablan de hermanos y hermanas de Jesús (Mr 6:3)'],
            ['Jesús nació en una cueva', 'Protoevangelio de Santiago', 'Mencionan el pesebre (Lc 2:7)'],
            ['El buey y el asno junto al pesebre', 'Evangelio del Pseudo-Mateo (siglo VII), a partir de Isaías 1:3', 'No los mencionan'],
            ['Jesús niño hacía milagros', 'Evangelio de la infancia de Tomás (siglo II)', 'Su primera señal fue en Caná (Jn 2:11)']
          ]
        })
      ],
      texto: [
        'Mateo y Lucas cuentan el nacimiento de Jesús, y Lucas agrega una sola escena de su niñez: Jesús a los doce años en el templo (Lc 2:41-52). Del resto de su infancia y de la vida de María, los evangelios guardan silencio. Ese silencio despertó la imaginación de muchos cristianos.',
        { h: 'El Protoevangelio de Santiago' },
        'Escrito hacia el año 150, se presenta como obra de Jacobo, el hermano del Señor. Cuenta la historia de María desde antes de su nacimiento. Sus padres, Joaquín y Ana, son ricos y no tienen hijos; un ángel les anuncia una hija. A los tres años, María es llevada a vivir al templo, donde la alimenta un ángel. A los doce, los sacerdotes buscan a un viudo que la cuide y eligen a José, un anciano con hijos. Jesús nace en una cueva cerca de Belén, y una partera comprueba que María sigue siendo virgen.',
        'El libro tuvo una influencia enorme. De él vienen los nombres de los padres de María, la fiesta de su presentación en el templo y la imagen de José como un anciano. También apoyó la creencia de que María permaneció virgen toda su vida y de que los hermanos de Jesús eran hijos de José.',
        { posturas: {
          titulo: '¿Quiénes eran los hermanos de Jesús?',
          a: { n: 'Lectura católica y ortodoxa', t: 'Enseñan que María permaneció virgen toda su vida. Los hermanos serían hijos de un matrimonio anterior de José, como dice el Protoevangelio, o primos de Jesús, como propuso Jerónimo.' },
          b: { n: 'Lectura evangélica', t: 'Mateo dice que José no conoció a María «hasta que dio a luz a su hijo primogénito» (Mt 1:25), y los evangelios nombran a cuatro hermanos de Jesús y mencionan hermanas (Mr 6:3). Lo más natural es entender que eran hijos de José y María, nacidos después de Jesús.' },
          c: 'Las dos lecturas confiesan que Jesús nació de una virgen por obra del Espíritu Santo (Mt 1:20; Lc 1:35). La diferencia está en lo que pasó después, y allí el Protoevangelio no tiene la autoridad de la Escritura.'
        } },
        { h: 'El Evangelio de la infancia de Tomás' },
        'Otro escrito del siglo II cuenta los milagros de Jesús niño: da vida a pájaros de barro, alarga una tabla que su padre cortó mal y castiga con la muerte a un niño que lo empuja. Es un Jesús caprichoso, muy distinto del que pinta Lucas: obediente a sus padres y que «crecía en sabiduría y en estatura» (Lc 2:52). Juan dice además que la primera señal de Jesús fue en Caná (Jn 2:11).'
      ],
      pensar: 'Dios no nos contó todo lo que quisiéramos saber, sino lo que necesitamos para creer (Jn 20:31). ¿Te conformas con lo que la Biblia dice o buscas completar sus silencios con otras fuentes?'
    },
    {
      id: 'gnosticos', n: 'Los evangelios gnósticos: Tomás, Judas y María', ref: 'Juan 1:14; 1 Juan 4:1-3; Colosenses 2:8-9; 1 Timoteo 6:20', fecha: [130, 350],
      visual: [
        cita('1 Juan 4:2-3', 'En esto conoced el Espíritu de Dios: Todo espíritu que confiesa que Jesucristo ha venido en carne, es de Dios; y todo espíritu que no confiesa que Jesucristo ha venido en carne, no es de Dios; y este es el espíritu del anticristo, el cual vosotros habéis oído que viene, y que ahora ya está en el mundo.'),
        tabla({
          titulo: 'Lo que enseñaban los gnósticos y lo que enseña el evangelio',
          cab: ['Gnosticismo', 'El evangelio de los apóstoles'],
          filas: [
            ['La materia y el cuerpo son malos', 'Dios creó todo bueno (Gn 1:31) y el Verbo se hizo carne (Jn 1:14)'],
            ['El Dios del Antiguo Testamento es un dios inferior', 'El Padre de Jesús es el Dios de Abraham, Isaac y Jacob (Hch 3:13)'],
            ['La salvación es un conocimiento secreto para unos pocos', 'La salvación es por la fe en Cristo y se anuncia a todos (Ro 10:12-13)'],
            ['Cristo no tuvo cuerpo real o no sufrió', 'Cristo murió en la cruz y resucitó con su cuerpo (Lc 24:39)']
          ]
        })
      ],
      texto: [
        'En el siglo II se extendió entre algunos grupos cristianos una manera de pensar llamada gnosticismo, de la palabra griega gnosis, «conocimiento». Los gnósticos enseñaban que el mundo material es malo, que el ser humano tiene una chispa divina atrapada en el cuerpo y que se salva por un conocimiento secreto que Jesús habría revelado solo a algunos. Muchos de sus libros se presentan como enseñanzas reservadas de Jesús a un discípulo.',
        { h: 'El Evangelio de Tomás' },
        'Es una colección de 114 dichos atribuidos a Jesús, sin relato de su muerte ni de su resurrección. Algunos dichos se parecen a los de los evangelios; otros son extraños. El último dice que María debe hacerse varón para entrar en el reino. Se escribió en el siglo II; se conocen fragmentos griegos de Oxirrinco y el texto completo en copto de Nag Hammadi.',
        { h: 'El Evangelio de Judas' },
        'Ireneo ya lo mencionaba hacia el 180, pero solo se conoció su texto cuando se publicó en 2006 una copia en copto. Presenta a Judas como el único discípulo que entendió a Jesús, y su traición como un favor: ayudar a Jesús a liberarse de su cuerpo. Es justamente lo contrario del evangelio, en el que la cruz es la entrega voluntaria del Hijo por nuestros pecados.',
        { h: 'El Evangelio de María y el de Felipe' },
        'El Evangelio de María, conservado en fragmentos, presenta a María Magdalena recibiendo revelaciones secretas que los apóstoles no conocían. El de Felipe es una colección de reflexiones gnósticas. Novelas y documentales recientes los usaron para afirmar que Jesús se casó con María Magdalena, algo que esos textos fragmentarios no dicen con claridad y que ninguna fuente antigua confiable sostiene.',
        { h: 'Cómo reconocer otro evangelio' },
        'Juan ya combatía ideas parecidas a fines del siglo I: «todo espíritu que no confiesa que Jesucristo ha venido en carne, no es de Dios» (1 Jn 4:3). Pablo advirtió a Timoteo que evitara «los argumentos de la falsamente llamada ciencia» (1 Ti 6:20), con la palabra gnosis. El evangelio no es un secreto para iniciados: «Aquel Verbo fue hecho carne, y habitó entre nosotros» (Jn 1:14).',
        { ejercicio: {
          pregunta: 'Un documental dice que el Evangelio de Judas revela la verdad oculta sobre Jesús. ¿Qué es lo más exacto?',
          opciones: [
            { t: 'Que es un escrito gnóstico del siglo II, conocido y rechazado por la iglesia antigua, que enseña lo contrario del evangelio.', ok: true, por_que: 'Ireneo lo mencionó hacia el 180; es muy posterior a los testigos de Jesús y presenta la cruz como una liberación del cuerpo.' },
            { t: 'Que es un evangelio tan antiguo como Marcos que la iglesia quiso destruir.', ok: false, por_que: 'Es del siglo II, un siglo después de Marcos, y la iglesia lo conocía y lo refutó públicamente.' },
            { t: 'Que es un invento moderno sin ningún manuscrito antiguo.', ok: false, por_que: 'Existe una copia antigua en copto; lo que se discute es su valor, no su existencia.' }
          ],
          explicacion: 'Responder con datos verdaderos y sin exagerar es la mejor defensa de la fe.'
        } }
      ],
      pensar: 'El evangelio se anuncia abiertamente a todos (Mt 28:19). ¿Desconfías de las enseñanzas que prometen un conocimiento secreto reservado para unos pocos?'
    },
    {
      id: 'hechos-apocrifos', n: 'Los hechos apócrifos: Pablo y Tecla, Pedro y el «Quo vadis»', ref: 'Hechos 1:1-3; Lucas 1:1-4; 1 Timoteo 4:1-3; Hebreos 13:4; Juan 21:18-19; Hechos 8:9-24', fecha: [160, 250],
      visual: [
        cita('1 Timoteo 4:1-3', 'Pero el Espíritu dice claramente que en los postreros tiempos algunos apostatarán de la fe, escuchando a espíritus engañadores y a doctrinas de demonios; por la hipocresía de mentirosos que, teniendo cauterizada la conciencia, prohibirán casarse, y mandarán abstenerse de alimentos que Dios creó para que con acción de gracias participasen de ellos los creyentes y los que han conocido la verdad.'),
        tabla({
          titulo: 'Los principales hechos apócrifos',
          cab: ['Libro', 'Qué cuenta', 'Fecha'],
          filas: [
            ['Hechos de Pablo', 'Viajes de Pablo, la historia de Tecla, una supuesta tercera carta a los Corintios y su martirio en Roma', 'Hacia 160–190'],
            ['Hechos de Pedro', 'Pedro vence a Simón el mago en Roma; el «Quo vadis»; Pedro crucificado cabeza abajo', 'Hacia 180–200'],
            ['Hechos de Juan', 'Milagros de Juan en Éfeso; un Jesús que no tiene cuerpo real', 'Siglo II'],
            ['Hechos de Andrés', 'Predicación y martirio de Andrés en Grecia', 'Siglo II–III'],
            ['Hechos de Tomás', 'Tomás predica en la India', 'Siglo III']
          ]
        })
      ],
      texto: [
        'Lucas escribió el libro de los Hechos después de investigar con diligencia, para que Teófilo conociera «bien la verdad» (Lc 1:3-4). Su relato termina con Pablo preso en Roma, predicando con libertad. ¿Qué pasó después con los apóstoles? En los siglos II y III aparecieron varios libros que respondían esa pregunta con relatos llenos de milagros, viajes y martirios.',
        { h: 'Pablo y Tecla' },
        'Los Hechos de Pablo cuentan cómo una joven de Iconio llamada Tecla escucha a Pablo predicar sobre la pureza, rompe su compromiso de matrimonio y lo sigue. Es condenada a la hoguera y a las fieras, y se salva milagrosamente. El libro incluye una descripción física de Pablo: bajo, calvo, de piernas arqueadas, con cejas juntas y nariz algo grande. Tertuliano, hacia el 200, cuenta que un presbítero de Asia lo escribió por amor a Pablo y fue destituido por haberlo inventado.',
        { h: 'Pedro y el «Quo vadis»' },
        'Los Hechos de Pedro cuentan un duelo en Roma entre Pedro y Simón el mago, el de Hechos 8, que intenta volar y cae. Cuando Pedro huye de la persecución, se encuentra con Jesús en el camino y le pregunta: Señor, ¿adónde vas? Jesús responde que va a Roma a ser crucificado otra vez. Pedro entiende, vuelve y muere crucificado cabeza abajo. La escena es hermosa, pero no es histórica. Lo que la Biblia dice es que Jesús anunció a Pedro con qué muerte glorificaría a Dios (Jn 21:18-19).',
        { h: 'Un mensaje contra el matrimonio' },
        'Muchos de estos libros presentan la vida cristiana perfecta como renuncia al matrimonio. En ellos, los apóstoles convencen a esposas de dejar a sus maridos y a novias de romper sus compromisos. Pablo advirtió que vendrían quienes prohibirían casarse (1 Ti 4:3), y Hebreos enseña: «Honroso sea en todos el matrimonio» (He 13:4).',
        'Algunas tradiciones de estos libros pudieron conservar recuerdos verdaderos, como que Pedro y Pablo murieron en Roma, cosa que también afirman Clemente de Roma y otros autores antiguos. Pero los relatos, en conjunto, son novelas devotas, muy distintas de la sobriedad de Lucas.'
      ],
      pensar: 'Lucas escribió para que conozcamos «bien la verdad» (Lc 1:4). ¿Prefieres los relatos llamativos sobre la fe o la verdad sencilla que Dios dejó escrita?'
    },
    {
      id: 'cartas-falsas', n: 'Cartas con el nombre de Pablo', ref: 'Colosenses 4:16; 2 Tesalonicenses 2:2; 2 Tesalonicenses 3:17; Gálatas 6:11', fecha: [150, 400],
      visual: [
        cita('Colosenses 4:16', 'Cuando esta carta haya sido leída entre vosotros, haced que también se lea en la iglesia de los laodicenses, y que la de Laodicea la leáis también vosotros.'),
        tabla({
          titulo: 'Tres cartas atribuidas a Pablo',
          cab: ['Carta', 'Qué contiene', 'Origen probable'],
          filas: [
            ['A los Laodicenses', 'Veinte versículos en latín armados con frases de Filipenses y Gálatas', 'Siglos II–IV; aparece en muchas Biblias latinas medievales'],
            ['3 Corintios', 'Respuesta de Pablo contra quienes niegan la resurrección del cuerpo', 'Siglo II, dentro de los Hechos de Pablo'],
            ['Correspondencia con Séneca', 'Catorce cartas breves entre Pablo y el filósofo romano', 'Siglo IV']
          ]
        })
      ],
      texto: [
        'Pablo escribió cartas que no se conservaron. Pidió a los colosenses que leyeran también «la de Laodicea» (Col 4:16), y en 1 Corintios 5:9 menciona una carta anterior. Con el tiempo, algunos intentaron llenar esos vacíos.',
        { h: 'La Carta a los Laodicenses' },
        'Es un texto breve, en latín, hecho con frases tomadas de Filipenses y Gálatas, sin ninguna enseñanza propia. Su único fin parece haber sido que existiera la carta de Laodicea. Aun así, se copió en muchas Biblias latinas de la Edad Media, y aparece en algunas de las primeras Biblias impresas en lenguas europeas. La iglesia antigua ya la había rechazado: el fragmento de Muratori, de fines del siglo II, menciona una carta a los laodicenses falsificada.',
        'La carta de Laodicea que pide Colosenses 4:16 probablemente se perdió, o era una carta que circulaba entre varias iglesias, como Efesios. Dios no consideró necesario conservarla para nosotros.',
        { h: '3 Corintios' },
        'Dentro de los Hechos de Pablo hay un intercambio de cartas entre los corintios y Pablo sobre la resurrección del cuerpo. La iglesia armenia la tuvo durante siglos en su Biblia. Defiende una verdad bíblica, pero lo que Pablo enseñó realmente sobre la resurrección ya está en 1 Corintios 15.',
        { h: 'Pablo y Séneca' },
        'En el siglo IV circularon catorce cartas breves entre Pablo y Séneca, el filósofo maestro de Nerón. Jerónimo y Agustín las conocieron. Su estilo latino y sus errores muestran que son una invención, quizá para mostrar que el cristianismo podía estar a la altura de los grandes pensadores romanos.',
        { h: 'La firma de Pablo' },
        'Pablo sabía que podían circular cartas falsas con su nombre. Por eso cerraba sus cartas de su puño y letra: «La salutación es de mi propia mano, de Pablo, que es el signo en toda carta mía» (2 Ts 3:17; Gá 6:11). Las iglesias del siglo II, que guardaron y copiaron sus cartas verdaderas, supieron distinguirlas.',
        { ejercicio: {
          pregunta: 'Colosenses 4:16 menciona una carta «de Laodicea». ¿Qué se puede decir de ella?',
          opciones: [
            { t: 'Es la Carta a los Laodicenses que trae la Biblia latina medieval.', ok: false, por_que: 'Esa carta es una composición tardía armada con frases de Filipenses y Gálatas; la iglesia antigua ya la rechazaba.' },
            { t: 'No se conservó, o era una carta que circulaba entre varias iglesias, quizá Efesios.', ok: true, por_que: 'Son las dos explicaciones más probables. Dios conservó lo que la iglesia necesita.' },
            { t: 'Es la primera carta a los Corintios.', ok: false, por_que: 'Corinto está en Grecia, lejos de Laodicea, en Asia.' }
          ],
          explicacion: 'Que una carta se haya perdido no significa que haya que inventarla.'
        } }
      ],
      pensar: 'Pablo cuidaba que nadie usara su nombre para enseñar otra cosa. ¿Con qué cuidado repites tú lo que dices que «dice la Biblia»?'
    },
    {
      id: 'apocalipsis-pedro-pablo', n: 'Los apocalipsis de Pedro y de Pablo', ref: '2 Corintios 12:1-4; Lucas 16:19-31; Hebreos 9:27; Apocalipsis 22:18-19', fecha: [130, 400],
      visual: [
        cita('2 Corintios 12:2-4', 'Conozco a un hombre en Cristo, que hace catorce años (si en el cuerpo, no lo sé; si fuera del cuerpo, no lo sé; Dios lo sabe) fue arrebatado hasta el tercer cielo. Y conozco al tal hombre (si en el cuerpo, o fuera del cuerpo, no lo sé; Dios lo sabe), que fue arrebatado al paraíso, donde oyó palabras inefables que no le es dado al hombre expresar.'),
        mapa({ view: V.mediterraneo, lugares: ['tarso', 'roma', 'h-akhmim', 'alejandria'] }),
        tabla({
          titulo: 'Dos visiones del más allá',
          cab: ['', 'Apocalipsis de Pedro', 'Apocalipsis de Pablo'],
          filas: [
            ['Fecha', 'Hacia 135', 'Siglos III–IV (dice haber sido hallado en 388)'],
            ['Contenido', 'Jesús muestra a Pedro los castigos del infierno, uno por cada pecado, y la gloria de los justos', 'Pablo visita el cielo y el infierno, guiado por un ángel'],
            ['Cómo se conserva', 'Completo en etíope; un fragmento griego de Ajmim', 'En latín, griego y otras lenguas'],
            ['Qué dijo la iglesia antigua', 'Algunos lo leían; el fragmento de Muratori dice que otros no lo admitían', 'Agustín se burló de él; un decreto del siglo VI lo rechaza'],
            ['Influencia', 'Las imágenes medievales del infierno', 'El infierno de Dante y la idea de un descanso para los condenados']
          ]
        })
      ],
      texto: [
        'Pablo contó que fue arrebatado al tercer cielo, al paraíso, y que allí «oyó palabras inefables que no le es dado al hombre expresar» (2 Co 12:4). No describió lo que vio. Justamente lo que Pablo calló es lo que otros quisieron contar.',
        { h: 'El Apocalipsis de Pedro' },
        'Escrito hacia el año 135, presenta a Jesús mostrando a Pedro el destino de los muertos. Describe castigos que corresponden a cada pecado: los blasfemos colgados de la lengua, los asesinos arrojados a un lugar lleno de serpientes, y así para muchos pecados. Fue bastante leído en el siglo II; el fragmento de Muratori dice que algunos lo aceptaban y otros no permitían leerlo en la iglesia. Con el tiempo quedó fuera, pero sus imágenes alimentaron durante siglos la manera de imaginar el infierno.',
        { h: 'El Apocalipsis de Pablo' },
        'Su prólogo dice que se encontró en el año 388, en tiempos del emperador Teodosio, en una caja de mármol enterrada bajo la casa de Pablo en Tarso. Es la forma típica de dar autoridad a un libro nuevo. Un ángel guía a Pablo: ve salir las almas de justos e injustos al morir, recorre el paraíso y desciende a los lugares de castigo. Al final, por los ruegos de Pablo y del arcángel Miguel, Cristo concede a los condenados un día de descanso cada domingo.',
        'El libro fue muy popular en la Edad Media, en muchas lenguas. Dante lo conocía cuando escribió su viaje por el infierno. Pero Agustín, ya a comienzos del siglo V, se burló de él: si Pablo dijo que no le era dado expresar lo que oyó, ¿cómo iba a contarlo un libro descubierto siglos después?',
        { h: 'Lo que la Biblia sí dice' },
        'La Escritura enseña con seriedad que hay un juicio después de la muerte (He 9:27) y que el destino eterno se decide en esta vida: entre el rico y Lázaro había «una gran sima» que nadie podía cruzar (Lc 16:26). No promete descansos para los condenados ni da mapas detallados del más allá. Apocalipsis termina advirtiendo que nadie añada a sus palabras (Ap 22:18). Lo que necesitamos saber está escrito: «el que cree en el Hijo tiene vida eterna» (Jn 3:36).'
      ],
      pensar: 'Pablo vio el paraíso y guardó silencio sobre lo que oyó. ¿Te basta lo que Dios reveló sobre la vida eterna, o buscas en visiones y relatos lo que la Biblia no dice?'
    }
  ];

  window.__APO.nt = nt;
})();
/* Los libros apócrifos y pseudoepígrafos · ruta VII. Cómo leerlos hoy, y datos del recurso (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, PALABRA } = window.__APO;

  const hoy = [
    {
      id: 'contradicen', n: 'Enseñanzas que contradicen la Escritura', ref: 'Efesios 2:8-9; 1 Juan 1:7; Hebreos 9:27; 1 Timoteo 2:5; Marcos 16:17; Colosenses 3:9',
      visual: [
        tabla({
          titulo: 'Lo que enseñan algunos apócrifos y lo que enseña la Biblia',
          cab: ['Enseñanza', 'Dónde aparece', 'Lo que enseña la Escritura'],
          filas: [
            ['La limosna borra los pecados', 'Tobías 12:9; Eclesiástico 3:30', 'Somos salvos por gracia, por medio de la fe (Ef 2:8-9); la sangre de Cristo limpia de todo pecado (1 Jn 1:7)'],
            ['Orar y ofrecer sacrificios por los muertos para librarlos del pecado', '2 Macabeos 12:43-45', 'Después de la muerte viene el juicio (He 9:27); no hay paso de un destino a otro (Lc 16:26)'],
            ['Los difuntos y los ángeles interceden y presentan nuestras oraciones', '2 Macabeos 15:12-14; Tobías 12:12-15', 'Hay un solo mediador entre Dios y los hombres, Jesucristo (1 Ti 2:5)'],
            ['El humo de un pez ahuyenta al demonio', 'Tobías 6:7-8; 8:2-3', 'Los demonios se echan fuera en el nombre de Jesús (Mr 16:17; Hch 16:18)'],
            ['El alma existe antes del cuerpo', 'Sabiduría 8:19-20', 'Dios formó al hombre del polvo y sopló en él aliento de vida (Gn 2:7)'],
            ['Dios aprueba el engaño por una buena causa', 'Judit 9:10-13; Tobías 5:13', '«No mintáis los unos a los otros» (Col 3:9)']
          ],
          nota: 'Las referencias a los apócrifos siguen la numeración de las Biblias católicas.'
        }),
        cita('1 Juan 1:7', 'pero si andamos en luz, como él está en luz, tenemos comunión unos con otros, y la sangre de Jesucristo su Hijo nos limpia de todo pecado.')
      ],
      texto: [
        'La razón más seria para no recibir estos libros como Escritura es que, en algunos puntos, enseñan lo contrario de lo que enseña el resto de la Biblia. Dios no se contradice: si un libro dice algo opuesto a lo que Dios ya reveló, ese libro no viene de Dios. Los de Berea examinaban cada día las Escrituras para ver si lo que oían era así (Hch 17:11).',
        { h: 'La salvación por obras' },
        'Tobías y Eclesiástico afirman que la limosna limpia los pecados. Dar a los pobres es un mandamiento de Dios y una muestra de la fe verdadera, pero no compra el perdón. La Biblia enseña: «por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios» (Ef 2:8). Solo la sangre de Cristo quita el pecado.',
        { h: 'Los muertos y los intercesores' },
        '2 Macabeos 12 es el texto principal que la Iglesia católica usa para enseñar la oración por los difuntos y la purificación después de la muerte, y 2 Macabeos 15, junto con Tobías 12, se usa para apoyar la intercesión de los santos y los ángeles. La Escritura, en cambio, enseña que el creyente que muere va a estar con el Señor (Fil 1:23) y que Cristo es el único mediador: «hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5). Él vive siempre para interceder por los suyos (He 7:25).',
        'Los católicos sinceros que creen en estas doctrinas lo hacen porque su iglesia recibe estos libros como Escritura. Al conversar con ellos, conviene hacerlo con respeto, con la Biblia abierta y sabiendo que la diferencia empieza por la pregunta de cuáles libros son Palabra de Dios.',
        { h: 'Magia, mentira y filosofía' },
        'Tobías presenta una receta para ahuyentar un demonio con el humo del corazón y el hígado de un pez. El Nuevo Testamento muestra otra cosa: Jesús echaba fuera los demonios con su palabra, y la iglesia recibió autoridad para hacerlo en su nombre, con el poder del Espíritu Santo (Mr 16:17; Hch 16:18). Judit y Tobías aprueban engaños, y Sabiduría toma de la filosofía griega la idea de un alma que existe antes del cuerpo.',
        { ejercicio: {
          pregunta: 'Alguien te dice que dar limosna borra los pecados, porque así lo dice Tobías. ¿Qué responderías desde la Biblia?',
          opciones: [
            { t: 'Que tiene razón, porque dar a los pobres es bueno.', ok: false, por_que: 'Dar es bueno y es un mandamiento, pero la Biblia nunca dice que compre el perdón.' },
            { t: 'Que la generosidad es fruto de la fe, pero que solo la sangre de Cristo limpia del pecado.', ok: true, por_que: 'Efesios 2:8-10 enseña que somos salvos por gracia para hacer buenas obras, no por ellas; 1 Juan 1:7 dice que la sangre de Cristo nos limpia de todo pecado.' },
            { t: 'Que no hay que dar limosna, porque eso es religión de obras.', ok: false, por_que: 'La Biblia manda ser generosos con los pobres (Gá 2:10; Stg 2:15-16); el error está en pensar que eso salva.' }
          ],
          explicacion: 'Las buenas obras son el fruto de la salvación, no su precio.'
        } }
      ],
      pensar: 'Pablo dijo que si alguien anuncia otro evangelio, aunque sea un ángel del cielo, no se le debe creer (Gá 1:8). ¿Conoces el evangelio lo suficiente para reconocer cuando se le agrega algo?'
    },
    {
      id: 'aportes', n: 'Lo que aportan al estudio de la Biblia', ref: 'Juan 10:22-23; Hechos 23:6-8; Mateo 22:23-32; Hechos 17:11', fecha: [-250, 100],
      visual: [
        img('lector-biblias.webp', 'En la mesa de una cocina sencilla de una casa latinoamericana, una mujer de unos cuarenta años compara dos Biblias abiertas, una más gruesa que la otra, con un cuaderno de notas y una taza de café; luz de la mañana por la ventana', 'Comparar Biblias y aprender de dónde vienen sus diferencias. Recreación.'),
        cita('Juan 10:22-23', 'Celebrábase en Jerusalén la fiesta de la dedicación. Era invierno, y Jesús andaba en el templo por el pórtico de Salomón.'),
        tabla({
          titulo: 'Lo que estos libros ayudan a entender',
          cab: ['Tema', 'Libro que ayuda', 'En el Nuevo Testamento'],
          filas: [
            ['La fiesta de la Dedicación', '1 Macabeos 4', 'Juan 10:22'],
            ['La fe en la resurrección', '2 Macabeos 7', 'Hechos 23:6-8; Mateo 22:23-32'],
            ['La espera de un Mesías rey', 'Salmos de Salomón 17', 'Juan 6:15; Hechos 1:6'],
            ['Los ángeles y los demonios', '1 Enoc; Tobías', 'Judas 6, 9; Lucas 1:19'],
            ['La vida judía en una ciudad griega', 'Sabiduría; 3 Macabeos', 'Hechos 6:1; 17:16-34'],
            ['El hebreo detrás del griego', 'Eclesiástico; la Septuaginta', 'El vocabulario del Nuevo Testamento']
          ]
        })
      ],
      texto: [
        'Que estos libros no sean Escritura no significa que no sirvan. Los reformadores lo dijeron con claridad: Lutero los llamó útiles y buenos de leer, y la iglesia anglicana enseñó que se leen como ejemplo de vida e instrucción de costumbres, pero no para establecer doctrina. Son ventanas al mundo en que vivieron Jesús y los apóstoles.',
        { h: 'La historia' },
        'Sin 1 Macabeos sabríamos muy poco de los años entre los testamentos: la crisis bajo Antíoco IV, la rebelión, la purificación del templo y la independencia de Judea. Esos hechos explican por qué Jesús estaba en el templo en invierno, durante la fiesta de la Dedicación (Jn 10:22), y por qué el templo era tan importante para los judíos de su tiempo.',
        { h: 'Las creencias' },
        'Estos libros muestran cómo creció la fe de Israel en la resurrección, en los ángeles y en el juicio final. Cuando Pablo, ante el concilio, dijo que lo juzgaban por la esperanza de la resurrección, los fariseos lo defendieron, porque ellos la creían y los saduceos no (Hch 23:6-8). La madre de 2 Macabeos 7 y los Salmos de Salomón representan la fe de esos fariseos.',
        { h: 'Las esperanzas' },
        'Los Salmos de Salomón, 1 Enoc y 4 Esdras muestran qué esperaban del Mesías. Con ellos se entiende mejor por qué tantos se escandalizaron de un Mesías crucificado (1 Co 1:23), y también qué novedad trajo el evangelio: el Hijo del Hombre vino a dar su vida en rescate por muchos (Mr 10:45).',
        { h: 'La lengua' },
        'Los apóstoles escribieron en el griego que habían usado los judíos de la Septuaginta y de estos libros. Palabras como «justicia», «gracia», «salvación» o «Señor» ya tenían un uso judío antes del Nuevo Testamento. Estudiar estos escritos ayuda a los traductores y a los estudiosos a entender el vocabulario bíblico.',
        { h: 'Cómo leerlos' },
        'Se pueden leer como se lee un buen libro de historia o de piedad antigua: con interés, con discernimiento y siempre comparando con la Escritura, como los de Berea (Hch 17:11). Lo que concuerda con la Biblia se aprovecha; lo que la contradice se deja.'
      ],
      pensar: 'Los de Berea recibieron la palabra con solicitud y escudriñaban las Escrituras (Hch 17:11). ¿Lees otros libros cristianos con esa misma actitud, comparándolos con la Biblia?'
    },
    {
      id: 'ecos', n: 'Ecos en el Nuevo Testamento', ref: 'Judas 9; Judas 14-15; Hebreos 11:35; Hebreos 1:3; Romanos 1:20; Santiago 1:19; Hechos 17:28; Tito 1:12',
      visual: [
        tabla({
          titulo: 'Ecos de los apócrifos y pseudoepígrafos',
          cab: ['Nuevo Testamento', 'Texto que recuerda', 'Tipo de relación'],
          filas: [
            ['Judas 14-15', '1 Enoc 1:9', 'Cita de una frase'],
            ['Judas 9', 'La Asunción de Moisés (final perdido)', 'Mención de una tradición'],
            ['Hebreos 11:35', '2 Macabeos 6–7', 'Alusión a los mártires'],
            ['Hebreos 1:3', 'Sabiduría 7:26', 'Lenguaje parecido'],
            ['Romanos 1:20-32', 'Sabiduría 13–14', 'Ideas parecidas sobre la idolatría'],
            ['Santiago 1:19', 'Eclesiástico 5:11', 'Consejo parecido'],
            ['Mateo 27:43', 'Sabiduría 2:18', 'Escena parecida']
          ],
          nota: 'Ninguno se introduce con «escrito está» ni «dice la Escritura».'
        }),
        cita('Hechos 17:28', 'Porque en él vivimos, y nos movemos, y somos; como algunos de vuestros propios poetas también han dicho: Porque linaje suyo somos.')
      ],
      texto: [
        'Los escritores del Nuevo Testamento eran judíos del siglo I, o como Lucas, conocían bien el mundo judío. Habían escuchado las historias, los dichos y las esperanzas de su pueblo, y a veces su lenguaje recuerda a estos libros. La tabla reúne los casos más conocidos.',
        { h: 'Tres clases de relación' },
        'Hay un caso de cita directa: Judas cita una frase de 1 Enoc como profecía de Enoc. Hay menciones de tradiciones: la disputa de Miguel por el cuerpo de Moisés o los nombres de Janes y Jambres. Y hay muchos más casos de lenguaje o ideas parecidas, como Hebreos 1:3 y Sabiduría 7:26, que no prueban que el autor estuviera leyendo ese libro: muestran que ambos compartían un mismo ambiente.',
        { h: 'Citar no es canonizar' },
        'El Nuevo Testamento cita también a autores paganos. En Atenas, Pablo dijo: «Porque en él vivimos, y nos movemos, y somos; como algunos de vuestros propios poetas también han dicho: Porque linaje suyo somos» (Hch 17:28). En Tito cita a un poeta de Creta (Tit 1:12), y en 1 Corintios 15:33 usa un refrán griego. Nadie piensa por eso que esos poetas sean Escritura. Lo mismo vale para los apócrifos.',
        'La diferencia se ve en la manera de citar. Cuando los apóstoles citan el Antiguo Testamento, dicen «escrito está», «dice la Escritura», «el Espíritu Santo dice» o nombran al profeta. Nunca usan esas fórmulas para un apócrifo.',
        { h: 'Lo que esto enseña' },
        'Dios inspiró a los autores de la Biblia sin borrar su cultura, su lengua ni sus lecturas. El Espíritu Santo los guio para que lo que afirmaran fuera verdad y para que escogieran bien sus palabras. Así como un predicador de hoy puede usar un dicho popular para ilustrar una verdad bíblica, los apóstoles usaron lo que su pueblo conocía para anunciar a Cristo.',
        { ejercicio: {
          pregunta: '¿Qué diferencia hay entre la manera en que el Nuevo Testamento usa el Antiguo y la manera en que usa los apócrifos?',
          opciones: [
            { t: 'Ninguna: los cita a los dos de la misma manera.', ok: false, por_que: 'Al Antiguo Testamento lo cita con «escrito está» o «dice la Escritura»; a los apócrifos, nunca.' },
            { t: 'Al Antiguo Testamento lo cita como Escritura; de los apócrifos solo toma frases, tradiciones o lenguaje, como de otros autores de su tiempo.', ok: true, por_que: 'Es la misma manera en que Pablo cita a poetas griegos en Hechos 17:28 y Tito 1:12.' },
            { t: 'Cita los apócrifos más veces que el Antiguo Testamento.', ok: false, por_que: 'El Nuevo Testamento cita o alude cientos de veces al Antiguo; los ecos de los apócrifos son pocos y casi todos indirectos.' }
          ],
          explicacion: 'Las fórmulas de cita muestran qué libros consideraban Escritura los apóstoles.'
        } }
      ],
      pensar: 'Pablo usó un poema griego para anunciar al Dios verdadero en Atenas. ¿Cómo puedes usar lo que la gente de tu entorno conoce para hablarle de Cristo, sin mezclar el mensaje?'
    },
    {
      id: 'taller', n: 'Taller: ¿lo dice la Biblia o un apócrifo?', ref: 'Hechos 17:11; 2 Timoteo 3:14-17; Habacuc 2:4; Mateo 7:12; Salmo 31:5',
      visual: [
        cita('2 Timoteo 3:16-17', 'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.'),
        tabla({
          titulo: 'Cuatro preguntas para comprobar una frase',
          cab: ['Pregunta', 'Para qué sirve'],
          filas: [
            ['¿Dónde está escrita?', 'Buscarla en una concordancia o en la Biblia del sitio'],
            ['¿Quién lo dice y a quién?', 'Ver su contexto, aunque esté en la Biblia'],
            ['¿Concuerda con el resto de la Escritura?', 'La Biblia no se contradice'],
            ['¿Lleva a Cristo?', 'Toda la Escritura da testimonio de Él (Jn 5:39)']
          ]
        })
      ],
      texto: [
        'Muchas frases circulan como si fueran bíblicas. Algunas lo son; otras vienen de los apócrifos, y otras son refranes populares. Este taller propone reconocerlas. En cada ejercicio, la frase está resumida con palabras propias; las que vienen de los apócrifos no se citan entre comillas porque no forman parte de la Biblia del sitio.',
        { ejercicio: {
          pregunta: 'Frase 1: La limosna libra de la muerte y limpia de todo pecado. ¿De dónde viene?',
          opciones: [
            { t: 'Del libro de Proverbios.', ok: false, por_que: 'Proverbios elogia la generosidad, pero nunca dice que limpie el pecado.' },
            { t: 'De Tobías, un libro apócrifo.', ok: true, por_que: 'Lo dice el ángel Rafael en Tobías 12:9; Eclesiástico 3:30 dice algo parecido.' },
            { t: 'De la carta de Santiago.', ok: false, por_que: 'Santiago enseña que la fe se muestra con obras (Stg 2:14-17), no que las obras quiten el pecado.' }
          ],
          explicacion: 'La frase suena piadosa, pero contradice la salvación por gracia (Ef 2:8-9).'
        } },
        { ejercicio: {
          pregunta: 'Frase 2: El justo vivirá por su fe. ¿De dónde viene?',
          opciones: [
            { t: 'De Habacuc, y los apóstoles la repiten.', ok: true, por_que: 'Está en Habacuc 2:4 y Pablo la cita en Romanos 1:17 y Gálatas 3:11; también Hebreos 10:38.' },
            { t: 'De 2 Macabeos.', ok: false, por_que: '2 Macabeos habla de la fidelidad de los mártires, pero esta frase es de Habacuc.' },
            { t: 'De Lutero.', ok: false, por_que: 'Lutero la redescubrió en Romanos, pero viene de la Biblia.' }
          ],
          explicacion: 'Es una frase central de la Biblia: el justo vive por confiar en Dios.'
        } },
        { ejercicio: {
          pregunta: 'Frase 3: Dios ayuda a quien se ayuda. ¿De dónde viene?',
          opciones: [
            { t: 'De Proverbios.', ok: false, por_que: 'No está en Proverbios ni en ningún libro de la Biblia.' },
            { t: 'De Eclesiástico.', ok: false, por_que: 'Tampoco está en los apócrifos.' },
            { t: 'De ninguno de los dos: es un refrán popular.', ok: true, por_que: 'Es un dicho antiguo de origen griego. La Biblia enseña lo contrario: Dios ayuda al que no puede salvarse a sí mismo (Ro 5:6).' }
          ],
          explicacion: 'Que una frase sea conocida no la hace bíblica.'
        } },
        { ejercicio: {
          pregunta: 'Frase 4: No hagas a nadie lo que tú aborreces. ¿De dónde viene?',
          opciones: [
            { t: 'Es exactamente lo que dijo Jesús en el Sermón del monte.', ok: false, por_que: 'Jesús lo dijo en positivo: haced a los demás todo lo que queréis que hagan con vosotros (Mt 7:12).' },
            { t: 'De Tobías; Jesús enseñó la misma regla en positivo y llegó más lejos.', ok: true, por_que: 'Tobit lo aconseja a su hijo (Tobías 4:15). No hacer daño es poco; Jesús manda hacer el bien activamente.' },
            { t: 'De la ley de Moisés.', ok: false, por_que: 'La ley manda amar al prójimo como a uno mismo (Lv 19:18), pero esta frase no está allí.' }
          ],
          explicacion: 'Algunas enseñanzas de los apócrifos son buenas, pero la palabra de Jesús va más lejos.'
        } },
        { ejercicio: {
          pregunta: 'Frase 5: Las almas de los justos están en la mano de Dios. ¿De dónde viene?',
          opciones: [
            { t: 'Del libro de Sabiduría, aunque la Biblia enseña algo parecido.', ok: true, por_que: 'Es Sabiduría 3:1. La Biblia dice que el creyente que muere está con el Señor (Fil 1:23) y Jesús encomendó su espíritu en las manos del Padre (Lc 23:46; Sal 31:5).' },
            { t: 'Del Salmo 23.', ok: false, por_que: 'El Salmo 23 habla del Señor como pastor, pero no tiene esta frase.' },
            { t: 'De Apocalipsis.', ok: false, por_que: 'Apocalipsis habla de las almas bajo el altar (Ap 6:9), pero no con estas palabras.' }
          ],
          explicacion: 'Cuando un apócrifo dice algo verdadero, la Biblia ya lo dice con autoridad.'
        } },
        { ejercicio: {
          pregunta: 'Frase 6: Es santo y piadoso orar por los muertos para que sean librados de sus pecados. ¿De dónde viene?',
          opciones: [
            { t: 'De 1 Corintios 15.', ok: false, por_que: 'En 1 Corintios 15 Pablo habla de la resurrección, no de orar para librar a los muertos de sus pecados.' },
            { t: 'De 2 Macabeos.', ok: true, por_que: 'Es el comentario del autor en 2 Macabeos 12:45, sobre la ofrenda de Judas por sus soldados muertos.' },
            { t: 'De Hebreos.', ok: false, por_que: 'Hebreos enseña que después de la muerte viene el juicio (He 9:27).' }
          ],
          explicacion: 'De este texto se tomó la base de la oración por los difuntos; la Biblia no la enseña.'
        } },
        { ejercicio: {
          pregunta: 'Frase 7: Los padres de María se llamaban Joaquín y Ana. ¿De dónde viene?',
          opciones: [
            { t: 'Del evangelio de Lucas.', ok: false, por_que: 'Lucas cuenta el anuncio a María, pero no nombra a sus padres.' },
            { t: 'Del Protoevangelio de Santiago, un apócrifo del siglo II.', ok: true, por_que: 'De allí vienen esos nombres y otras tradiciones sobre María.' },
            { t: 'De la genealogía de Mateo.', ok: false, por_que: 'Mateo traza la genealogía de José, no la de los padres de María.' }
          ],
          explicacion: 'Muchas tradiciones conocidas no vienen de la Biblia, sino de los apócrifos del Nuevo Testamento.'
        } }
      ],
      pensar: 'Toda la Escritura es inspirada por Dios y útil para enseñar (2 Ti 3:16). ¿Qué hábito te ayudaría a conocerla tan bien que distingas su voz de cualquier otra?'
    }
  ];

  const A = window.__APO;
  delete window.__APO;
  const LINEA_LIBROS = { desde: -330, hasta: 130, hitos: [
    { a: -250, t: 'Septuaginta' }, { a: -180, t: 'Ben Sira' }, { a: -164, t: 'Dedicación del templo' },
    { a: -63, t: 'Pompeyo en Jerusalén' }, { a: 70, t: 'Caída de Jerusalén' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Los libros apócrifos y pseudoepígrafos',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'que', grupo: 'Los apócrifos', n: 'I. Qué son estos libros', info: 'Tres nombres, qué trae cada Biblia, cuándo y dónde se escribieron, cómo llegaron a las Biblias y por qué no son Escritura', estaciones: A.que,
        linea: { desde: -350, hasta: 1650, hitos: [
          { a: -250, t: 'Septuaginta' }, { a: 405, t: 'Vulgata' }, { a: 1546, t: 'Trento' }
        ] } },
      { id: 'historicos', grupo: 'Los apócrifos', n: 'II. Los libros históricos', info: '1, 2, 3 y 4 Macabeos, 1 Esdras y Judit', estaciones: A.historicos, linea: LINEA_LIBROS },
      { id: 'relatos', grupo: 'Los apócrifos', n: 'III. Relatos y adiciones', info: 'Tobías, las adiciones a Ester y Daniel, Baruc y la Oración de Manasés', estaciones: A.relatos, linea: LINEA_LIBROS },
      { id: 'sabiduria', grupo: 'Los apócrifos', n: 'IV. Los libros de sabiduría', info: 'Eclesiástico, Sabiduría y el salmo adicional de David', estaciones: A.sabiduria, linea: LINEA_LIBROS },
      { id: 'pseudo', grupo: 'Los pseudoepígrafos', n: 'V. Los pseudoepígrafos', info: '1 Enoc, la Asunción de Moisés, Jubileos, los Salmos de Salomón y 4 Esdras', estaciones: A.pseudo, linea: LINEA_LIBROS },
      { id: 'nt', grupo: 'Los apócrifos del Nuevo Testamento', n: 'VI. Los apócrifos del Nuevo Testamento', info: 'Evangelios de la infancia y gnósticos, Hechos, cartas y apocalipsis atribuidos a los apóstoles', estaciones: A.nt,
        linea: { desde: 30, hasta: 450, hitos: [
          { a: 95, t: 'Apocalipsis de Juan' }, { a: 180, t: 'Ireneo' }, { a: 325, t: 'Eusebio' }, { a: 388, t: 'Apocalipsis de Pablo' }
        ] } },
      { id: 'hoy', grupo: 'Para leerlos hoy', n: 'VII. Cómo leerlos hoy', info: 'Lo que contradicen, lo que aportan, sus ecos en el Nuevo Testamento y un taller', estaciones: hoy }
    ]
  };
})();
