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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/18/31-33', ref: 'Juan 18:31-33' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2ti/2/2', ref: '2 Timoteo 2:2' }
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
        { tipo: 'cita', titulo: 'Marcos 16', texto: '@@mr/16/9-20', ref: 'Marcos 16:9-20' },
        { tipo: 'cita', titulo: '1 Juan 5', texto: '@@1jn/5/7-8', ref: '1 Juan 5:7-8' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1p/1/23-25', ref: '1 Pedro 1:23-25' },
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
