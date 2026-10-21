/* ==========================================================
   Recursos Bíblicos — Pesos, medidas, monedas y horas bíblicas · contenido de las rutas
   FUENTE de public/apps/medidas-biblicas/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/medidas_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Las equivalencias son aproximadas y coinciden con calculadora/unidades.js.
   ========================================================== */
(() => {
  const longitud = [
    {
      id: 'por-que', n: 'Por qué importan las medidas', ref: 'Deuteronomio 25:13-15; Juan 6:19; Mateo 18:24',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/mercado.webp', alt: 'Un comerciante de Judea del siglo I pesa granos de cebada en una balanza de dos platillos, con pesas de piedra y monedas sobre su mesa en un mercado', pie: 'Balanzas, pesas y medidas: la vida diaria del mundo bíblico.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Unidades', 'Ejemplos'],
          filas: [
            ['I. Longitud y distancia', 'Dedo, palmo, codo, caña, estadio, milla', 'El arca, Goliat, Emaús'],
            ['II. Capacidad y peso', 'Gomer, efa, bato, siclo, mina, talento', 'El maná, el mar de bronce, MENE TEKEL'],
            ['III. Monedas', 'Blanca, cuadrante, denario, dracma, estatero, talento', 'La viuda, el tributo, las treinta piezas'],
            ['IV. El tiempo', 'Horas, vigilias, semanas, meses, años', 'Pentecostés, la cruz, las setenta semanas'],
            ['Taller práctico', 'Todas', 'Seis pasajes paso a paso']
          ],
          nota: 'Las equivalencias modernas son aproximadas. El recurso indica cuándo una medida tiene más de un valor posible.'
        } }
      ],
      texto: [
        'Muchos lectores pasan de largo cuando la Biblia dice que el arca medía «trescientos codos» o que un siervo debía «diez mil talentos». Son palabras conocidas, pero sin una idea de su tamaño el pasaje pierde fuerza. Quien no sabe cuánto es un talento no percibe que esa deuda era imposible de pagar, y quien no sabe cuánto es un estadio no se imagina a los discípulos remando en medio del lago en plena noche.',
        'Las medidas de la Biblia no son un detalle técnico. Forman parte de lo que el autor quería comunicar y de lo que los primeros lectores entendían de inmediato. Cuando Felipe calcula que «doscientos denarios de pan no bastarían» (Jn 6:7), sus oyentes sabían que eso era el sueldo de unos ocho meses de trabajo. Traducir esas cifras a nuestras medidas es parte de leer con atención el contexto, como enseña el recurso Cómo interpretar la Biblia.',
        { h: 'Tres advertencias antes de empezar' },
        'Primero, las equivalencias son aproximadas. Ningún pueblo antiguo tenía un sistema métrico oficial: el codo variaba entre regiones y épocas, y las pesas de piedra encontradas por la arqueología no pesan exactamente lo mismo. Este recurso da un valor de trabajo y, cuando hay diferencias importantes, muestra el rango.',
        'Segundo, el sistema cambió con la historia. Israel usó medidas propias, luego convivió con las de Babilonia y Persia, y en tiempos de Jesús circulaban monedas romanas, griegas y judías a la vez. Por eso un mismo nombre puede tener valores distintos en el Antiguo y en el Nuevo Testamento.',
        'Tercero, el dinero no se convierte por el valor del metal sino por lo que permitía comprar. La forma más fiel de entender un denario no es su peso en plata, sino recordar que era el pago de un día de trabajo (Mt 20:2).',
        { h: 'La calculadora' },
        'Junto con las rutas, el recurso incluye una calculadora para convertir cualquier medida bíblica a unidades actuales, y el dinero a días de trabajo o a la moneda de tu país.',
        { ir: { t: 'Abrir la calculadora de medidas bíblicas', a: 'calculadora/' } },
        { ejercicio: {
          pregunta: '¿Cuál es la mejor manera de entender hoy el valor de una moneda bíblica como el denario?',
          opciones: [
            { t: 'Calcular cuánto vale hoy la plata que contenía.', ok: false, por_que: 'El precio de la plata cambia mucho y no dice cuánto podía comprar una persona en el siglo I.' },
            { t: 'Compararla con lo que se ganaba en un día de trabajo.', ok: true, por_que: 'El mismo Jesús lo presenta así en la parábola de los obreros: un denario era el jornal de un día.' },
            { t: 'Buscar el tipo de cambio entre el denario y el dólar.', ok: false, por_que: 'No existe un tipo de cambio entre una moneda antigua y una moderna. Hay que comparar poder de compra.' }
          ],
          explicacion: 'Las cifras de dinero se entienden mejor en jornales: así se ve si una suma era pequeña, grande o imposible.'
        } }
      ],
      pensar: 'Dios mandó a su pueblo tener «pesa exacta y justa» (Dt 25:15). ¿Por qué crees que algo tan cotidiano como una balanza le importa a Dios?'
    },
    {
      id: 'codo', n: 'El codo y el cuerpo humano', ref: 'Deuteronomio 3:11; Ezequiel 40:5; Mateo 6:27',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-codo.svg', alt: 'Antebrazo y mano con las medidas bíblicas: el dedo (1,9 cm), el palmo menor de cuatro dedos (7,4 cm), el palmo de tres palmos menores (22 cm) y el codo de dos palmos (44,5 cm); debajo, el codo largo de siete palmos menores (52 cm)', pie: 'Las medidas de longitud nacen del cuerpo humano.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Medidas de longitud del Antiguo Testamento',
          cab: ['Medida', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Dedo', '—', '1,9 cm', 'Jer 52:21'],
            ['Palmo menor', '4 dedos', '7,4 cm', '1 R 7:26'],
            ['Palmo', '3 palmos menores', '22 cm', '1 S 17:4'],
            ['Codo común', '2 palmos', '44,5 cm', 'Gn 6:15'],
            ['Codo largo', 'Codo y palmo menor', '52 cm', 'Ez 40:5'],
            ['Caña de Ezequiel', '6 codos largos', '3,1 m', 'Ez 40:5'],
            ['Braza (NT)', 'Brazos extendidos', '1,85 m', 'Hch 27:28']
          ],
          nota: 'El codo común se calcula entre 44 y 46 cm. El túnel de Ezequías mide 533 m y su inscripción dice 1.200 codos: unos 44,4 cm por codo.'
        } },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/foto-codo.jpg', alt: 'Vara de madera de un codo, lisa y algo curvada, hallada en Lisht, Egipto', pie: 'Vara de medir de un codo, Egipto, Reino Medio (hacia 1850–1640 a.C.). The Metropolitan Museum of Art, 15.3.1128.', origen: 'foto', licencia: 'Dominio público (Open Access, The Metropolitan Museum of Art)', completa: true }
      ],
      texto: [
        'Antes de las reglas y las cintas de medir, el ser humano medía con su propio cuerpo. La Biblia conserva ese sistema: el dedo, el ancho de la mano, el palmo de la mano abierta y el codo, que es la distancia entre el codo y la punta del dedo medio. Por eso Moisés, al describir la cama del rey Og, aclara que la midió «según el codo de un hombre» (Dt 3:11): un codo común, el de cualquier persona.',
        'Las medidas se relacionan entre sí de manera sencilla. Cuatro dedos forman un palmo menor, el ancho de la mano. Tres palmos menores forman un palmo, de la punta del pulgar a la del meñique con la mano abierta. Dos palmos forman un codo. Si el codo común mide unos 44,5 cm, el palmo mide 22 cm, el palmo menor 7,4 cm y el dedo menos de 2 cm.',
        { h: 'Un codo más largo' },
        'Junto al codo común existió un codo más largo, de siete palmos menores en lugar de seis. Ezequiel lo describe con precisión: el varón de la visión tenía una caña de medir «de seis codos de a codo y palmo menor» (Ez 40:5), es decir, codos de unos 52 cm. Egipto usaba un codo real parecido, de 52,4 cm, y algunas varas de medir de madera o de piedra se conservan hasta hoy con sus divisiones grabadas.',
        'Saber esto ayuda a leer con cuidado. Cuando un pasaje no aclara qué codo usa, lo más probable es que se trate del común. Por eso este recurso calcula con 44,5 cm y señala el codo largo solo cuando el texto lo indica.',
        { h: 'Cómo se comprobó su tamaño' },
        'La arqueología permite verificarlo. En el túnel que Ezequías mandó excavar en Jerusalén (2 R 20:20) se encontró una inscripción que dice que medía 1.200 codos. El túnel mide unos 533 metros: cada codo resulta de unos 44 cm, muy cerca del valor que se usa.',
        'Jesús usó esta medida en una pregunta inolvidable: «¿Y quién de vosotros podrá, por mucho que se afane, añadir a su estatura un codo?» (Mt 6:27). Nadie puede hacerse cuarenta y cinco centímetros más alto a fuerza de preocuparse. La imagen es tan exagerada que muestra lo inútil del afán.',
        { ejercicio: {
          pregunta: 'Si un objeto mide «tres codos y medio» según el codo común, ¿cuánto mide aproximadamente?',
          opciones: [
            { t: 'Unos 70 centímetros.', ok: false, por_que: 'Eso sería contar el codo como 20 cm, que es menos de lo que mide un palmo.' },
            { t: 'Unos 1,55 metros.', ok: true, por_que: 'Tres codos y medio por 44,5 cm dan unos 156 cm.' },
            { t: 'Unos 3,5 metros.', ok: false, por_que: 'Eso supondría que un codo mide un metro. El codo es la longitud del antebrazo, menos de medio metro.' }
          ],
          explicacion: 'Una regla práctica: dos codos son casi un metro (89 cm). Con eso se puede estimar cualquier medida en codos.'
        } }
      ],
      pensar: 'Las medidas de la Biblia se tomaban del cuerpo humano, la obra de Dios. ¿Qué te dice que el Señor hablara a su pueblo con las medidas de su vida diaria y no con un lenguaje lejano?'
    },
    {
      id: 'arca-tabernaculo', n: 'El arca, el tabernáculo y el templo en metros', ref: 'Génesis 6:15; Éxodo 26:15-16; 1 Reyes 6:2',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-arca.svg', alt: 'Siluetas a la misma escala: el arca de Noé de 133 metros de largo, el templo de Salomón de 27 metros, el tabernáculo de 13 metros, una cancha de fútbol de 105 metros y una persona', pie: 'El arca, el templo y el tabernáculo, dibujados a la misma escala.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/6/14-16', ref: 'Génesis 6:14-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Construcciones bíblicas en metros (codo de 44,5 cm)',
          cab: ['Construcción', 'En codos', 'En metros', 'Referencia'],
          filas: [
            ['El arca de Noé', '300 × 50 × 30', '133 × 22 × 13 m', 'Gn 6:15'],
            ['El arca del pacto', '2,5 × 1,5 × 1,5', '1,1 × 0,7 × 0,7 m', 'Éx 25:10'],
            ['El atrio del tabernáculo', '100 × 50', '44 × 22 m', 'Éx 27:18'],
            ['El tabernáculo', '30 × 10', '13 × 4,5 m', 'Éx 26:15-23'],
            ['El templo de Salomón', '60 × 20 × 30', '27 × 9 × 13 m', '1 R 6:2'],
            ['Las columnas Jaquín y Boaz', '18 de alto', '8 m', '1 R 7:15'],
            ['La cama de Og', '9 × 4', '4 × 1,8 m', 'Dt 3:11']
          ]
        } }
      ],
      texto: [
        'Las medidas del arca de Noé son de las más citadas de la Biblia: «de trescientos codos la longitud del arca, de cincuenta codos su anchura, y de treinta codos su altura» (Gn 6:15). Con el codo común, eso da unos 133 metros de largo, 22 de ancho y 13 de alto, con tres pisos (Gn 6:16). Es más larga que una cancha de fútbol y tan alta como un edificio de cuatro pisos.',
        'Las proporciones también dicen algo. El arca es seis veces más larga que ancha y diez veces más larga que alta. Son proporciones parecidas a las de muchos barcos de carga modernos, pensadas para flotar estables y resistir el oleaje. El arca no necesitaba navegar a ninguna parte: necesitaba mantenerse a flote y proteger a quienes estaban dentro.',
        { h: 'El tabernáculo: pequeño y precioso' },
        'El tabernáculo, en cambio, era sorprendentemente pequeño. El santuario medía unos 13 metros de largo y 4,5 de ancho: menos que una casa mediana. El atrio que lo rodeaba medía unos 44 por 22 metros. Todo se podía desarmar y llevar por el desierto. Su grandeza no estaba en el tamaño, sino en que allí habitaba la presencia de Dios en medio de su pueblo (Éx 25:8).',
        'El templo que construyó Salomón duplicó las medidas del tabernáculo: «sesenta codos de largo y veinte de ancho, y treinta codos de alto» (1 R 6:2), unos 27 por 9 metros, y 13 de altura. Tampoco era un edificio enorme para los estándares de los grandes templos de la época; lo extraordinario era su riqueza, cubierto de oro por dentro (1 R 6:22), y su propósito.',
        { h: 'Medir para comprender' },
        'Convertir las medidas a metros ayuda a imaginar las escenas: Noé y su familia trabajando durante años en una obra de ese tamaño, los levitas desarmando el tabernáculo pieza por pieza, el sumo sacerdote entrando en un Lugar Santísimo de apenas 4,5 metros por lado. El sitio tiene modelos 3D del tabernáculo y del templo de Salomón construidos con estas mismas medidas.',
        { ir: { t: 'Ver el tabernáculo en 3D', a: '../../tabernaculo/' } },
        { ejercicio: {
          pregunta: 'El santuario del templo de Salomón medía sesenta codos de largo. ¿Cuántas veces el largo del tabernáculo es eso?',
          opciones: [
            { t: 'El doble: el tabernáculo medía treinta codos.', ok: true, por_que: 'Treinta codos de largo en el tabernáculo y sesenta en el templo: Salomón duplicó las proporciones.' },
            { t: 'Diez veces: el tabernáculo medía seis codos.', ok: false, por_que: 'El tabernáculo tenía veinte tablas de un codo y medio por cada lado largo, es decir, treinta codos.' },
            { t: 'Lo mismo: el templo copió exactamente al tabernáculo.', ok: false, por_que: 'El templo siguió el modelo del tabernáculo, pero con medidas mayores.' }
          ],
          explicacion: 'Veinte tablas de codo y medio (Éx 26:16-18) dan treinta codos. El templo conservó la forma del tabernáculo y duplicó su tamaño.'
        } }
      ],
      pensar: 'El tabernáculo era pequeño, pero allí habitaba Dios. ¿Qué nos enseña eso sobre lo que hace grande un lugar de reunión del pueblo de Dios?'
    },
    {
      id: 'alturas', n: 'Goliat, Og y la ciudad de Dios', ref: '1 Samuel 17:4-7; Apocalipsis 21:16-17',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-alturas.svg', alt: 'Comparación de alturas: un israelita de la época de 1,60 m, Goliat con cuatro codos y un palmo (2 m) y Goliat con seis codos y un palmo (2,9 m), junto a una puerta', pie: 'La estatura de Goliat según el texto hebreo y según otros manuscritos.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1s/17/4-7', ref: '1 Samuel 17:4-7' }
      ],
      texto: [
        'Cuando la Biblia describe a Goliat, da cifras precisas. Tenía «de altura seis codos y un palmo» (1 S 17:4), unos 2,9 metros. Su cota de malla pesaba cinco mil siclos de bronce, unos 57 kilos, y la punta de su lanza seiscientos siclos de hierro, cerca de 7 kilos (1 S 17:5-7). Todo en la descripción subraya lo mismo: humanamente, el combate estaba perdido antes de empezar.',
        { posturas: {
          titulo: '¿Seis codos o cuatro codos?',
          a: { n: 'Seis codos y un palmo', t: 'Es la lectura del texto hebreo tradicional (masorético), que sigue la Reina-Valera. Da unos 2,9 metros. La Biblia menciona a otros gigantes de esa región y época (Dt 3:11; 2 S 21:16-22), y la descripción de sus armas concuerda con un hombre de esa talla.' },
          b: { n: 'Cuatro codos y un palmo', t: 'La traducción griega antigua (Septuaginta), Josefo y un rollo de Samuel hallado en Qumrán dicen «cuatro codos y un palmo», unos 2 metros. Algunos estudiosos piensan que esta es la lectura original y que la otra cifra surgió al copiar.' },
          c: 'Es una diferencia entre manuscritos, no una contradicción del texto bíblico: la inspiración se refiere a lo que escribió el autor, y la crítica textual compara las copias para recuperarlo. Con cualquiera de las dos cifras, Goliat superaba en más de 40 centímetros a un hombre común, que medía alrededor de 1,60 metros. Ninguna enseñanza depende de esa cifra: la victoria fue de Jehová (1 S 17:47).'
        } },
        { h: 'Las medidas de la nueva Jerusalén' },
        'Al otro extremo de la Biblia, el ángel mide la ciudad de Dios con una caña de oro: «doce mil estadios; la longitud, la altura y la anchura de ella son iguales» (Ap 21:16). Un estadio mide unos 185 metros, así que la ciudad tendría unos 2.200 kilómetros por lado: más que la distancia en línea recta entre Bogotá y Lima.',
        'El muro, en cambio, mide «ciento cuarenta y cuatro codos, de medida de hombre, la cual es de ángel» (Ap 21:17), unos 65 metros. Juan aclara que el ángel usa una medida humana, para que el lector entienda. Las cifras son múltiplos de doce, el número de las tribus y de los apóstoles (Ap 21:12-14): doce mil estadios y doce veces doce codos.',
        'Los intérpretes discuten si estas medidas deben tomarse en sentido literal o si expresan sobre todo perfección y plenitud. En cualquier caso, la conversión muestra algo que el lector antiguo percibía de inmediato: la ciudad que Dios prepara para su pueblo es inmensa, perfecta y segura.',
        { ejercicio: {
          pregunta: 'Si el muro de la nueva Jerusalén mide 144 codos, ¿por qué Juan aclara que es «medida de hombre»?',
          opciones: [
            { t: 'Para que el lector sepa que se trata de una medida conocida que puede entender.', ok: true, por_que: 'El ángel usa la unidad que usan los hombres, de modo que la cifra tiene sentido para el lector.' },
            { t: 'Porque los ángeles son más pequeños que los hombres.', ok: false, por_que: 'El texto no compara tamaños. Dice que la medida humana es la que el ángel empleó.' },
            { t: 'Para indicar que la ciudad fue construida por hombres.', ok: false, por_que: 'La ciudad desciende del cielo, de Dios (Apocalipsis 21:2). La aclaración se refiere a la unidad de medida.' }
          ],
          explicacion: 'Dios revela incluso lo celestial con medidas humanas, para que su pueblo lo pueda comprender.'
        } }
      ],
      pensar: 'David no midió el tamaño de Goliat, sino el del Dios al que servía (1 S 17:45-47). ¿Qué gigante te parece hoy demasiado grande, y qué cambia si lo comparas con Dios?'
    },
    {
      id: 'distancias', n: 'Distancias y caminos', ref: 'Hechos 1:12; Lucas 24:13; Mateo 5:41; Juan 11:18',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-distancias.svg', alt: 'Barras con distancias bíblicas: el camino de un día de reposo (0,9 km), Betania a Jerusalén (2,8 km), la barca de los discípulos (5 km), Emaús (11 km) y el camino de un día (30 km)', pie: 'Distancias de los evangelios y de Hechos, convertidas a kilómetros.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Medidas de distancia',
          cab: ['Medida', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Codo', '—', '44,5 cm', 'Jn 21:8 (doscientos codos: 90 m)'],
            ['Estadio', '400 codos', '185 m', 'Lc 24:13'],
            ['Milla romana', '8 estadios (mil pasos)', '1,48 km', 'Mt 5:41'],
            ['Camino de un día de reposo', '2.000 codos', '0,9 km', 'Hch 1:12'],
            ['Camino de un día', 'Variable', '25 a 35 km', 'Gn 31:23; Lc 2:44']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/24/13-15', ref: 'Lucas 24:13-15' }
      ],
      texto: [
        'Las distancias largas se medían en estadios. El estadio griego, que también usaban los romanos, medía unos 185 metros: la longitud de la pista de carreras que le dio nombre. Cuando Lucas dice que Emaús estaba «a sesenta estadios de Jerusalén» (Lc 24:13), indica unos 11 kilómetros, dos o tres horas de caminata. Es el camino que los dos discípulos hicieron de ida y que, después de reconocer a Jesús, desanduvieron «en la misma hora» (Lc 24:33), de noche.',
        'Betania estaba «como a quince estadios» de Jerusalén (Jn 11:18), menos de tres kilómetros. Por eso Jesús podía enseñar en el templo durante el día y pasar la noche en Betania (Mr 11:11). La cercanía explica también por qué tantos judíos de Jerusalén fueron a consolar a Marta y María.',
        { h: 'La milla y el camino de un sábado' },
        'Los romanos medían en millas: mil pasos dobles, unos 1.480 metros. Un soldado podía obligar a un civil a cargar su equipo durante una milla. Jesús enseñó a responder con generosidad: «a cualquiera que te obligue a llevar carga por una milla, ve con él dos» (Mt 5:41).',
        'Hechos menciona otra medida curiosa: el monte de los Olivos está cerca de Jerusalén, a un «camino de un día de reposo» (Hch 1:12). Los maestros judíos fijaron ese límite en dos mil codos, unos 900 metros, tomando como base la distancia que debía separar al pueblo del arca (Jos 3:4) y los ejidos de las ciudades levíticas (Nm 35:5). No es una ley de la Biblia, sino una costumbre de la época que Lucas usa para que sus lectores calculen la distancia.',
        { h: 'Un día de camino' },
        'Para los viajes largos, la Biblia cuenta en días. Una persona a pie recorría entre 25 y 35 kilómetros diarios, según el terreno. José y María caminaron «camino de un día» antes de notar que Jesús no venía con ellos (Lc 2:44): habían avanzado unos 30 kilómetros, y por eso necesitaron otro día para volver a Jerusalén y uno más para encontrarlo (Lc 2:46).',
        { ejercicio: {
          pregunta: 'Juan 21:8 dice que la barca estaba «como doscientos codos» de la orilla. ¿Qué distancia es esa?',
          opciones: [
            { t: 'Unos 90 metros: lo bastante cerca para ver y oír a Jesús.', ok: true, por_que: 'Doscientos codos de 44,5 cm dan unos 89 metros.' },
            { t: 'Unos 2 kilómetros: en medio del lago.', ok: false, por_que: 'Eso equivaldría a más de diez estadios. Doscientos codos es la mitad de un estadio.' },
            { t: 'Unos 20 metros: a pocos pasos de la playa.', ok: false, por_que: 'Sería contar el codo como 10 cm, menos que un palmo y medio.' }
          ],
          explicacion: 'A unos 90 metros se podía distinguir una figura en la orilla y oír su voz. Por eso Pedro se lanzó al agua y nadó hacia Jesús (Juan 21:7).'
        } }
      ],
      pensar: 'Los discípulos de Emaús volvieron once kilómetros de noche para contar que habían visto al Señor. ¿Qué distancia estás dispuesto a recorrer para compartir el evangelio?'
    },
    {
      id: 'campo', n: 'La tierra y su medida', ref: 'Levítico 27:16; Isaías 5:10; 1 Samuel 14:14',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/yunta-bueyes.webp', alt: 'Un campesino de Israel ara un campo de piedra caliza con una yunta de bueyes y un arado de madera al amanecer', pie: 'La yugada: la tierra que una yunta de bueyes ara en un día.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se medía un campo',
          cab: ['Forma', 'Qué indica', 'Referencia'],
          filas: [
            ['Yugada', 'Lo que ara una yunta de bueyes en un día', '1 S 14:14; Is 5:10'],
            ['Por la siembra', 'La semilla necesaria para sembrarlo (un homer de cebada)', 'Lv 27:16'],
            ['Con cordel', 'Medida y reparto de las heredades', 'Jos 18:4-8; Sal 16:6'],
            ['Con caña', 'Medidas de construcción y del templo', 'Ez 40:5; Ap 11:1']
          ]
        } }
      ],
      texto: [
        'Israel no medía la tierra en metros cuadrados. Usaba dos formas más prácticas. La primera era la yugada: el terreno que una yunta de bueyes podía arar en un día. Su tamaño exacto no se conoce y dependía del suelo, pero se suele estimar en una fracción de hectárea. Por eso, cuando Jonatán y su paje de armas vencieron a unos veinte filisteos «en el espacio de una media yugada de tierra» (1 S 14:14), el lector entendía que todo ocurrió en un terreno pequeño.',
        'La segunda forma era medir el campo por la semilla que se necesitaba para sembrarlo. La ley valoraba un terreno dedicado a Dios según su siembra: «un homer de siembra de cebada se valorará en cincuenta siclos de plata» (Lv 27:16). Un homer, como se verá en la ruta siguiente, eran unos 220 litros de grano.',
        { h: 'Una cosecha que no alcanza' },
        'Estas medidas dan fuerza al juicio que anuncia Isaías contra la viña infructuosa: «diez yugadas de viña producirán un bato, y un homer de semilla producirá un efa» (Is 5:10). Diez jornadas de arado para obtener unos 22 litros de vino; y de un homer de semilla, apenas una décima parte de lo sembrado. Era una cosecha ruinosa: se recogería menos de lo que se había echado en la tierra. Así Dios mostraba que la prosperidad de su pueblo dependía de su bendición y no solo del trabajo.',
        { h: 'El cordel y la heredad' },
        'Para repartir la tierra prometida se usaba el cordel de medir (Jos 18:4-8). De ahí viene una expresión del salmista: «Las cuerdas me cayeron en lugares deleitosos, Y es hermosa la heredad que me ha tocado» (Sal 16:6). Las cuerdas son los cordeles que marcaban los límites de cada parcela. David dice que su parte, medida por Dios, es buena, porque su verdadera heredad es el Señor mismo (Sal 16:5).',
        'En la profecía, medir un lugar con cordel o con caña significa que Dios toma posesión de él, lo delimita y lo protege (Zac 2:1-5; Ap 11:1). Lo que Dios mide es suyo.',
        { ejercicio: {
          pregunta: '¿Qué comunica Isaías 5:10 al decir que un homer de semilla producirá un efa?',
          opciones: [
            { t: 'Que la cosecha sería diez veces mayor que la siembra.', ok: false, por_que: 'Es al revés: el homer es diez veces mayor que el efa. Se cosecharía una décima parte de lo sembrado.' },
            { t: 'Que se cosecharía mucho menos de lo que se sembró.', ok: true, por_que: 'Un homer equivale a diez efas. Sembrar un homer y cosechar un efa es perder nueve décimas partes.' },
            { t: 'Que la cosecha sería exactamente igual a la siembra.', ok: false, por_que: 'Homer y efa no son la misma medida. La relación es de diez a uno (Ezequiel 45:11).' }
          ],
          explicacion: 'Conocer la relación entre las medidas muestra la gravedad del juicio: el campo devolvería solo una décima parte de la semilla.'
        } }
      ],
      pensar: 'David dijo que las cuerdas le cayeron en lugares deleitosos (Sal 16:6). ¿Puedes decir lo mismo de la parte de vida que Dios te ha dado? ¿Por qué?'
    }
  ];
  window.__MEDIDAS = { longitud };
})();
