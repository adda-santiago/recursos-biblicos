/* De la Biblia a nosotros · ruta II. El texto del Antiguo Testamento (ver encabezado en parte1.js) */
(() => {
  const antiguo = [
    {
      id: 'mas-antiguos', n: 'Los textos bíblicos más antiguos', ref: 'Números 6:24-26; Deuteronomio 5:6-21; 6:4-9',
      fecha: [-600, -100],
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@nm/6/24-26', ref: 'Números 6:24-26' },
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
        { tipo: 'cita', titulo: 'Salmo 40', texto: '@@sal/40/6-8', ref: 'Salmo 40:6-8' },
        { tipo: 'cita', titulo: 'Hebreos 10', texto: '@@he/10/5-7', ref: 'Hebreos 10:5-7' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@is/40/6-8', ref: 'Isaías 40:6-8' },
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
