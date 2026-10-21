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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Hazte un arca de madera de gofer; harás aposentos en el arca, y la calafatearás con brea por dentro y por fuera. Y de esta manera la harás: de trescientos codos la longitud del arca, de cincuenta codos su anchura, y de treinta codos su altura. Una ventana harás al arca, y la acabarás a un codo de elevación por la parte de arriba; y pondrás la puerta del arca a su lado; y le harás piso bajo, segundo y tercero.', ref: 'Génesis 6:14-16' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Salió entonces del campamento de los filisteos un paladín, el cual se llamaba Goliat, de Gat, y tenía de altura seis codos y un palmo. Y traía un casco de bronce en su cabeza, y llevaba una cota de malla; y era el peso de la cota cinco mil siclos de bronce. Sobre sus piernas traía grebas de bronce, y jabalina de bronce entre sus hombros. El asta de su lanza era como un rodillo de telar, y tenía el hierro de su lanza seiscientos siclos de hierro; e iba su escudero delante de él.', ref: '1 Samuel 17:4-7' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y he aquí, dos de ellos iban el mismo día a una aldea llamada Emaús, que estaba a sesenta estadios de Jerusalén. E iban hablando entre sí de todas aquellas cosas que habían acontecido. Sucedió que mientras hablaban y discutían entre sí, Jesús mismo se acercó, y caminaba con ellos.', ref: 'Lucas 24:13-15' }
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
/* Pesos, medidas, monedas y horas bíblicas · ruta II. Capacidad y peso (ver encabezado en parte1.js) */
(() => {
  const capacidad = [
    {
      id: 'aridos', n: 'Medidas para el grano: gomer, efa y homer', ref: 'Éxodo 16:16-18, 36; Rut 2:17; Mateo 13:33',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-capacidad.svg', alt: 'Escalera de medidas de capacidad: 1 homer o coro (220 L) = 10 efas; 1 efa (22 L) = 3 seahs = 10 gomeres; 1 seah (7,3 L) = 6 cabs; 1 cab (1,2 L) = 4 logs; 1 log (0,3 L)', pie: 'Cómo se relacionan las medidas de capacidad.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Medidas de áridos (grano y harina)',
          cab: ['Medida', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Cab', '4 logs', '1,2 L', '2 R 6:25'],
            ['Gomer', 'Décima parte de un efa', '2,2 L', 'Éx 16:16'],
            ['Seah («medida»)', 'Tercera parte de un efa', '7,3 L', 'Gn 18:6; Mt 13:33'],
            ['Efa', '10 gomeres', '22 L', 'Rt 2:17'],
            ['Homer o coro', '10 efas', '220 L', 'Ez 45:11; Lc 16:7']
          ],
          nota: 'El efa se calcula entre 22 y 36 litros; este recurso usa 22 L, el valor que dan las vasijas inscritas halladas en Judá.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tres-medidas.webp', alt: 'Una mujer judía del siglo I mezcla levadura en una gran artesa de madera con tres medidas de harina, en el patio de una casa de piedra', pie: '«Tres medidas de harina» (Mt 13:33): unos 22 litros, pan para muchas personas.', origen: 'ia' }
      ],
      texto: [
        'Para el grano y la harina, Israel usaba medidas de capacidad. La más conocida es el efa, de unos 22 litros: algo más que un balde grande. Su décima parte era el gomer, unos 2,2 litros, y diez efas formaban un homer, la carga que podía llevar un asno, unos 220 litros. Ezequiel resume la relación: el bato tiene «la décima parte del homer, y la décima parte del homer el efa» (Ez 45:11).',
        { h: 'El maná de cada día' },
        'Estas medidas aparecen en el relato del maná. Dios mandó recoger «un gomer por cabeza» (Éx 16:16), poco más de dos litros diarios por persona, y el narrador aclara al final: «un gomer es la décima parte de un efa» (Éx 16:36). Quien recogía mucho no tenía de sobra, y quien recogía poco no tenía menos (Éx 16:18). La medida enseñaba a confiar en la provisión diaria de Dios, como Jesús enseñó a pedir el pan de cada día (Mt 6:11).',
        { h: 'Rut, Abraham y la levadura' },
        'Cuando Rut espigó todo un día en el campo de Booz, reunió «como un efa de cebada» (Rt 2:17): unos 22 litros, una cantidad muy generosa para una espigadora. Era una señal de la bondad de Booz, que había mandado dejar caer espigas para ella (Rt 2:16).',
        'La «medida» de muchos pasajes es el seah, la tercera parte de un efa, unos 7,3 litros. Abraham pidió a Sara «tres medidas de flor de harina» para recibir a sus visitantes (Gn 18:6): un efa completo, pan para un banquete. Jesús usó la misma cantidad en una parábola: la levadura que una mujer escondió «en tres medidas de harina, hasta que todo fue leudado» (Mt 13:33). Con unos 22 litros de harina se hace pan para más de cien personas. La parábola no habla de una masa casera pequeña, sino de una gran hornada: así crece el reino de Dios a partir de algo escondido.',
        { ejercicio: {
          pregunta: 'Si un israelita recogía un gomer de maná al día, ¿cuánto recogía en una semana de seis días de recolección?',
          opciones: [
            { t: 'Seis gomeres, algo más de la mitad de un efa.', ok: true, por_que: 'Seis gomeres son seis décimas de efa, unos 13 litros.' },
            { t: 'Seis efas, más de un homer.', ok: false, por_que: 'El gomer es la décima parte del efa, no un efa entero.' },
            { t: 'Un solo gomer, porque guardaba lo que sobraba.', ok: false, por_que: 'El maná guardado se agusanaba, salvo el del sexto día, en que se recogía doble (Éxodo 16:20-22).' }
          ],
          explicacion: 'En realidad el sexto día se recogían dos gomeres por persona, para el sábado (Éxodo 16:22): siete gomeres por semana, siempre la medida justa.'
        } }
      ],
      pensar: 'Dios dio el maná por medida, ni más ni menos. ¿Qué te enseña esa medida diaria sobre cómo confiar en Dios para tus necesidades?'
    },
    {
      id: 'liquidos', n: 'Medidas para líquidos: log, hin y bato', ref: 'Éxodo 29:40; 1 Reyes 7:23-26; 2 Crónicas 4:5',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Medidas de líquidos',
          cab: ['Medida', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Log', '—', '0,3 L', 'Lv 14:10'],
            ['Hin', '12 logs', '3,7 L', 'Éx 29:40'],
            ['Bato', '6 hines (igual que el efa)', '22 L', '1 R 7:26; Lc 16:6'],
            ['Coro', '10 batos', '220 L', 'Ez 45:14'],
            ['Cántaro (metretes, NT)', '—', '39 L', 'Jn 2:6']
          ],
          nota: 'En el Nuevo Testamento, «barriles» (Lc 16:6) traduce batos, y «cántaros» (Jn 2:6), una medida griega de unos 39 litros.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Hizo fundir asimismo un mar de diez codos de un lado al otro, perfectamente redondo; su altura era de cinco codos, y lo ceñía alrededor un cordón de treinta codos. Y rodeaban aquel mar por debajo de su borde alrededor unas bolas como calabazas, diez en cada codo, que ceñían el mar alrededor en dos filas, las cuales habían sido fundidas cuando el mar fue fundido. Y descansaba sobre doce bueyes; tres miraban al norte, tres miraban al occidente, tres miraban al sur, y tres miraban al oriente; sobre estos se apoyaba el mar, y las ancas de ellos estaban hacia la parte de adentro. El grueso del mar era de un palmo menor, y el borde era labrado como el borde de un cáliz o de flor de lis; y cabían en él dos mil batos.', ref: '1 Reyes 7:23-26' }
      ],
      texto: [
        'Los líquidos se medían con una escala paralela. El log, unos 300 mililitros, era la medida de aceite que traía el leproso purificado (Lv 14:10). El hin, unos 3,7 litros, se usaba en las ofrendas diarias: con cada cordero se ofrecía harina amasada «con la cuarta parte de un hin de aceite» y como libación «la cuarta parte de un hin de vino» (Éx 29:40), casi un litro de cada uno. El bato tenía la misma capacidad que el efa (Ez 45:11), unos 22 litros.',
        'Las raciones de Ezequiel durante el asedio simbólico de Jerusalén muestran la escasez: el agua se bebería por medida, «la sexta parte de un hin» (Ez 4:11), poco más de medio litro al día.',
        { h: 'El mar de bronce' },
        'Frente al templo, Salomón puso un gran depósito de bronce para que los sacerdotes se lavaran (2 Cr 4:6). Medía diez codos de diámetro y cinco de alto, unos 4,5 metros de ancho y 2,2 de alto. El libro de Reyes dice que cabían en él «dos mil batos» (1 R 7:26), unos 44.000 litros, mientras Crónicas dice «tres mil batos» (2 Cr 4:5).',
        { posturas: {
          titulo: '¿Dos mil o tres mil batos?',
          a: { n: 'Dos medidas diferentes', t: 'Reyes daría la cantidad de agua que se mantenía de ordinario, y Crónicas la capacidad total del depósito lleno hasta el borde. También pudo cambiar el valor del bato entre la época de Reyes y la del cronista, que escribe después del exilio.' },
          b: { n: 'Un error al copiar', t: 'Los números se copiaban con facilidad de manera equivocada, y en otros pasajes paralelos de Reyes y Crónicas hay diferencias de cifras que la mayoría explica así. Según esta postura, uno de los dos números se alteró en la transmisión del texto.' },
          c: 'Ninguna de las dos explicaciones pone en duda la veracidad de la Escritura, cuya inspiración corresponde a lo que escribieron los autores. Lo que el pasaje enseña no depende de la cifra exacta: el templo tenía un lavacro de proporciones enormes, porque quienes servían a Dios debían presentarse purificados.'
        } },
        { h: 'Las tinajas de Caná' },
        'En el Nuevo Testamento aparecen medidas griegas y romanas. En las bodas de Caná había seis tinajas de piedra, «en cada una de las cuales cabían dos o tres cántaros» (Jn 2:6). El cántaro traduce una medida griega de unos 39 litros, de modo que cada tinaja contenía entre 80 y 120 litros. El taller práctico de este recurso calcula cuánto vino dio Jesús en esa boda.',
        { ejercicio: {
          pregunta: 'La libación diaria era la cuarta parte de un hin de vino con cada cordero. ¿Cuánto es aproximadamente?',
          opciones: [
            { t: 'Casi un litro.', ok: true, por_que: 'Un hin tiene unos 3,7 litros; su cuarta parte, unos 0,9 litros.' },
            { t: 'Unos cinco litros.', ok: false, por_que: 'Eso sería más de un hin completo.' },
            { t: 'Unos veinte litros.', ok: false, por_que: 'Esa es la capacidad de un bato, que equivale a seis hines.' }
          ],
          explicacion: 'El hin era una medida de uso doméstico. Las ofrendas diarias eran cantidades modestas, pero constantes, mañana y tarde (Éxodo 29:38-41).'
        } }
      ],
      pensar: 'El sacerdote debía lavarse antes de servir. ¿Qué significa para ti presentarte limpio delante de Dios antes de servirle (He 10:22)?'
    },
    {
      id: 'siclo', n: 'El siclo y sus divisiones', ref: 'Éxodo 30:13; 38:25-26; 1 Samuel 13:21',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pesas.svg', alt: 'Escalera de pesas: gera (0,57 g), beka o medio siclo (5,7 g), pim (7,8 g), siclo (11,4 g), mina de 50 siclos (570 g) y talento de 3.000 siclos (34 kg)', pie: 'Del gera al talento: el sistema de pesas de Israel.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pesas del Antiguo Testamento',
          cab: ['Pesa', 'Equivale a', 'Aprox.', 'Ejemplo'],
          filas: [
            ['Gera', 'Veinteava parte del siclo', '0,57 g', 'Éx 30:13'],
            ['Beka (medio siclo)', '10 geras', '5,7 g', 'Gn 24:22; Éx 38:26'],
            ['Pim', 'Dos tercios de siclo', '7,8 g', '1 S 13:21'],
            ['Siclo', '20 geras', '11,4 g', 'Gn 23:16'],
            ['Mina', '50 siclos (60 en Ezequiel)', '570 g', 'Esd 2:69; Ez 45:12'],
            ['Talento', '60 minas, 3.000 siclos', '34 kg', 'Éx 38:25']
          ],
          nota: 'El siclo se calcula entre 11 y 12 gramos según las pesas de piedra halladas en Judá.'
        } }
      ],
      texto: [
        'La palabra siclo viene de un verbo hebreo que significa pesar. Antes de que existieran las monedas, el siclo no era una moneda sino un peso: unos 11,4 gramos. La plata y el oro se pesaban en una balanza contra pesas de piedra o de metal, y esa era la forma de pagar.',
        'El siclo se dividía en veinte geras. Medio siclo, la beka, era la ofrenda que cada israelita contado en el censo daba para el santuario: «medio siclo, conforme al siclo del santuario. El siclo es de veinte geras» (Éx 30:13). Los ricos no daban más ni los pobres menos (Éx 30:15): todos eran rescatados por el mismo precio.',
        { h: 'Una cuenta en el desierto' },
        'Éxodo permite comprobar cuántos siclos tenía un talento. Los hombres contados fueron 603.550, y cada uno dio medio siclo (Éx 38:26). Eso suma 301.775 siclos. El texto dice que la plata fue «cien talentos y mil setecientos setenta y cinco siclos» (Éx 38:25). Si cien talentos más 1.775 siclos son 301.775 siclos, entonces cada talento tiene exactamente 3.000 siclos. El propio texto bíblico conserva la clave del sistema.',
        { h: 'Una palabra que se entendió gracias a la arqueología' },
        'Durante siglos, los traductores no supieron qué significaba la palabra «pim» en 1 Samuel 13:21, donde se cuenta lo que cobraban los filisteos por afilar las herramientas de los israelitas. Algunas versiones antiguas la tradujeron por conjetura. A comienzos del siglo XX se encontraron en Judá pequeñas pesas de piedra con la palabra pim grabada, que pesan unos 7,8 gramos: dos tercios de un siclo. Hoy se sabe que el texto habla de un precio, y que los filisteos cobraban caro, porque tenían el monopolio del hierro (1 S 13:19-20).',
        'Es un buen ejemplo de cómo la arqueología no corrige la Biblia, sino que ayuda a entender palabras que el tiempo había hecho oscuras.',
        { ejercicio: {
          pregunta: 'Según Éxodo 38:25-26, ¿cuántos siclos tenía un talento?',
          opciones: [
            { t: '60 siclos.', ok: false, por_que: 'Sesenta es el número de minas en un talento, no de siclos.' },
            { t: '1.000 siclos.', ok: false, por_que: 'Con esa cifra, cien talentos serían 100.000 siclos, muy lejos de los 301.775 que reunió el censo.' },
            { t: '3.000 siclos.', ok: true, por_que: '603.550 medios siclos son 301.775 siclos; menos 1.775 quedan 300.000, que son cien talentos de 3.000 siclos.' }
          ],
          explicacion: 'La cuenta del censo confirma el sistema: 3.000 siclos por talento, unos 34 kilos.'
        } }
      ],
      pensar: 'En el rescate del censo todos daban lo mismo, ricos y pobres (Éx 30:15). ¿Qué te enseña eso sobre el valor de cada persona delante de Dios y sobre el precio de nuestro rescate (1 P 1:18-19)?'
    },
    {
      id: 'balanza', n: 'Balanza justa y pesas falsas', ref: 'Levítico 19:35-36; Amós 8:4-6; Daniel 5:25-28',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/balanza.webp', alt: 'Primer plano de una balanza de bronce de dos platillos sobre una mesa de madera, con plata en un platillo y pesas de piedra pulida en el otro, en un mercado antiguo', pie: 'La balanza: la caja registradora del mundo antiguo.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'No tendrás en tu bolsa pesa grande y pesa chica, ni tendrás en tu casa efa grande y efa pequeño. Pesa exacta y justa tendrás; efa cabal y justo tendrás, para que tus días sean prolongados sobre la tierra que Jehová tu Dios te da. Porque abominación es a Jehová tu Dios cualquiera que hace esto, y cualquiera que hace injusticia.', ref: 'Deuteronomio 25:13-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'MENE, TEKEL, UPARSIN: pesas convertidas en sentencia',
          cab: ['Palabra', 'Como pesa', 'Como verbo', 'Interpretación de Daniel'],
          filas: [
            ['MENE', 'Mina', 'Contar', 'Contó Dios tu reino, y le ha puesto fin'],
            ['TEKEL', 'Siclo', 'Pesar', 'Pesado has sido en balanza, y fuiste hallado falto'],
            ['PERES (UPARSIN)', 'Media mina', 'Dividir', 'Tu reino ha sido roto, y dado a los medos y a los persas']
          ],
          nota: 'Daniel 5:25-28. «U» significa «y»; «parsin» es el plural de peres.'
        } }
      ],
      texto: [
        'En un mercado antiguo, el comprador y el vendedor dependían de la balanza. Si las pesas estaban alteradas, el engaño era casi imposible de descubrir. Por eso la ley de Dios insiste: «Balanzas justas, pesas justas y medidas justas tendréis» (Lv 19:36). Deuteronomio prohíbe tener dos juegos de pesas, uno grande para comprar y uno chico para vender: «No tendrás en tu bolsa pesa grande y pesa chica» (Dt 25:13).',
        'Proverbios lo dice con fuerza: «El peso falso es abominación a Jehová; Mas la pesa cabal le agrada» (Pr 11:1). Dios no se interesa solo por lo que ocurre en el culto, sino también por el comercio diario. La honestidad en lo pequeño es parte de la santidad.',
        { h: 'La denuncia de los profetas' },
        'Amós retrata a los comerciantes que esperaban con impaciencia el fin del sábado para volver a vender, pensando en cómo achicar la medida, subir el precio y falsear «con engaño la balanza» (Am 8:5). Miqueas pregunta si Dios puede dar por inocente «al que tiene balanza falsa y bolsa de pesas engañosas» (Mi 6:11). Para los profetas, el fraude comercial era una señal de que el pueblo se había apartado de Dios.',
        'Las pesas halladas por la arqueología en Judá muestran pequeñas diferencias de peso. Algunas se deben a la fabricación y al desgaste; otras pudieron ser intencionales. La Biblia no idealiza a su pueblo: muestra que la tentación de engañar estaba en cada mercado.',
        { h: 'Pesado en la balanza' },
        'La escritura misteriosa que apareció en el palacio de Belsasar usó nombres de pesas: «MENE, MENE, TEKEL, UPARSIN» (Dn 5:25). Leídas como sustantivos, son una mina, un siclo y medias minas. Daniel las leyó como verbos: contar, pesar, dividir. Al rey le dijo: «Pesado has sido en balanza, y fuiste hallado falto» (Dn 5:27). Aquella misma noche Babilonia cayó (Dn 5:30). El juicio de Dios usa la misma imagen que el mercado: Él pesa con exactitud.',
        { ejercicio: {
          pregunta: '¿Qué prohíbe Deuteronomio 25:13-14 al hablar de pesa grande y pesa chica?',
          opciones: [
            { t: 'Tener pesas de distintos tamaños para distintas mercaderías.', ok: false, por_que: 'Era normal tener pesas de varios valores. Lo prohibido era tener dos juegos falsos para el mismo valor.' },
            { t: 'Usar una medida para comprar y otra para vender, y así ganar con engaño.', ok: true, por_que: 'La pesa grande servía para recibir más al comprar, y la chica para entregar menos al vender.' },
            { t: 'Comerciar con extranjeros que usaban otras pesas.', ok: false, por_que: 'El texto no habla de extranjeros, sino de la honradez de cada israelita en su propia bolsa y su propia casa.' }
          ],
          explicacion: 'La ley exige una sola medida, exacta y justa, en todos los tratos. Dios promete bendición a quien obra así (Deuteronomio 25:15).'
        } }
      ],
      pensar: 'Dios pesa las acciones (1 S 2:3) y aborrece la pesa falsa. ¿Hay algún trato en tu trabajo o tus estudios donde sientas la tentación de usar «dos medidas»?'
    },
    {
      id: 'talentos', n: 'Minas y talentos: las grandes sumas', ref: '1 Reyes 10:14; 2 Reyes 18:14; Ester 3:9',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Talentos en el Antiguo Testamento',
          cab: ['Pasaje', 'Cantidad', 'Peso aprox.', 'Qué muestra'],
          filas: [
            ['Éx 25:39', '1 talento de oro', '34 kg', 'El candelero y sus utensilios'],
            ['2 S 12:30', 'Corona de 1 talento de oro', '34 kg', 'Corona ceremonial de Rabá'],
            ['1 R 10:14', '666 talentos de oro al año', '22,8 t', 'La riqueza de Salomón'],
            ['2 R 18:14', '300 de plata y 30 de oro', '10 t y 1 t', 'El tributo de Ezequías a Asiria'],
            ['Est 3:9', '10.000 talentos de plata', '340 t', 'El soborno de Amán'],
            ['1 Cr 29:7', '5.000 de oro y 10.000 de plata', '170 t y 340 t', 'Ofrendas para el templo']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El peso del oro que Salomón tenía de renta cada año, era seiscientos sesenta y seis talentos de oro; sin lo de los mercaderes, y lo de la contratación de especias, y lo de todos los reyes de Arabia, y de los principales de la tierra. Hizo también el rey Salomón doscientos escudos grandes de oro batido; seiscientos siclos de oro gastó en cada escudo. Asimismo hizo trescientos escudos de oro batido, en cada uno de los cuales gastó tres libras de oro; y el rey los puso en la casa del bosque del Líbano.', ref: '1 Reyes 10:14-17' }
      ],
      texto: [
        'Para cantidades grandes se usaban la mina y el talento. La mina tenía cincuenta siclos, unos 570 gramos, aunque Ezequiel la fija en sesenta siclos, sumando veinte, veinticinco y quince (Ez 45:12). El talento era la carga que podía llevar un hombre: sesenta minas, tres mil siclos, unos 34 kilos.',
        { h: 'El candelero de oro' },
        'El candelero del tabernáculo, con todos sus utensilios, se hizo «de un talento de oro fino» (Éx 25:39). Unos 34 kilos de oro macizo, trabajado a martillo en una sola pieza (Éx 25:31). La conversión permite imaginar el peso y el valor de la luz que alumbraba el Lugar Santo.',
        { h: 'La riqueza de Salomón' },
        'Salomón recibía cada año «seiscientos sesenta y seis talentos de oro» (1 R 10:14): más de 22 toneladas. Además, hizo doscientos escudos grandes de oro y trescientos más pequeños (1 R 10:16-17). El autor describe una prosperidad extraordinaria, cumplimiento de la promesa de Dios (1 R 3:13). Pero el lector atento recuerda que la ley prohibía al rey amontonar oro (Dt 17:17), y el capítulo siguiente cuenta cómo esa riqueza acompañó su caída (1 R 11:1-6).',
        { h: 'Tributos y sobornos' },
        'Otras cifras muestran la presión de los imperios. Asiria impuso a Ezequías trescientos talentos de plata y treinta de oro (2 R 18:14): unas once toneladas de metal, que obligaron al rey a vaciar el tesoro y a quitar el oro de las puertas del templo (2 R 18:15-16). Amán ofreció al rey de Persia diez mil talentos de plata para destruir a los judíos (Est 3:9): unas 340 toneladas, una suma gigantesca, una parte muy grande de lo que el imperio recaudaba en un año, según las cifras de Heródoto. El odio de Amán estaba dispuesto a pagar cualquier precio.',
        'Con estas cifras en mente se entiende mejor la deuda de «diez mil talentos» de la parábola de Jesús (Mt 18:24), que se estudia en la ruta de las monedas y en el taller práctico.',
        { ejercicio: {
          pregunta: 'Un talento pesaba unos 34 kilos. ¿Qué indica entonces que Amán ofreciera diez mil talentos?',
          opciones: [
            { t: 'Que ofrecía una suma enorme, de cientos de toneladas de plata.', ok: true, por_que: 'Diez mil por 34 kilos son unas 340 toneladas.' },
            { t: 'Que ofrecía lo que un obrero ganaba en un año.', ok: false, por_que: 'Un obrero no ganaba ni una pequeña fracción de un solo talento en un año.' },
            { t: 'Que la cifra no se puede convertir porque el talento era solo una moneda simbólica.', ok: false, por_que: 'El talento era un peso real, que se pesaba en balanza. Por eso Amán dice que lo pesará (Ester 3:9).' }
          ],
          explicacion: 'Las cifras extremas del libro de Ester subrayan el peligro en que estaba el pueblo de Dios, y por eso también la grandeza de su liberación.'
        } }
      ],
      pensar: 'Salomón tuvo más oro que nadie, pero su corazón se desvió (1 R 11:4). ¿Qué lugar ocupa el dinero en tu corazón, y cómo puedes cuidarlo?'
    },
    {
      id: 'pesos-historias', n: 'Lo que pesaba: cabellos, perfumes y granizo', ref: '2 Samuel 14:26; Juan 12:3-5; 19:39; Apocalipsis 6:6; 16:21',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pesos y medidas en los relatos',
          cab: ['Pasaje', 'Lo que dice', 'Equivale a'],
          filas: [
            ['2 S 14:26', 'El cabello de Absalón, 200 siclos', '2,3 kg'],
            ['Ez 4:10', 'Pan de 20 siclos al día', '230 g'],
            ['Jn 12:3', 'Una libra de nardo', '327 g'],
            ['Jn 19:39', 'Cien libras de mirra y áloes', '33 kg'],
            ['Ap 6:6', 'Dos libras de trigo por un denario', '2 L de trigo por el jornal de un día'],
            ['Ap 16:21', 'Granizo del peso de un talento', '34 kg']
          ],
          nota: 'La libra romana pesaba unos 327 g. En Ap 6:6, «libra» traduce una medida de capacidad griega de algo más de un litro.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces María tomó una libra de perfume de nardo puro, de mucho precio, y ungió los pies de Jesús, y los enjugó con sus cabellos; y la casa se llenó del olor del perfume. Y dijo uno de sus discípulos, Judas Iscariote hijo de Simón, el que le había de entregar: ¿Por qué no fue este perfume vendido por trescientos denarios, y dado a los pobres?', ref: 'Juan 12:3-5' }
      ],
      texto: [
        'Algunos relatos usan los pesos para destacar un detalle. Absalón se cortaba el cabello una vez al año, y «pesaba el cabello de su cabeza doscientos siclos de peso real» (2 S 14:26), más de dos kilos. El narrador subraya su belleza y su vanidad; el lector recuerda ese cabello cuando, años después, Absalón queda colgado de una encina por la cabeza (2 S 18:9).',
        { h: 'La libra del Nuevo Testamento' },
        'En los evangelios, la libra es la libra romana, de unos 327 gramos. María de Betania derramó sobre Jesús «una libra de perfume de nardo puro, de mucho precio» (Jn 12:3). Judas calculó enseguida su valor: trescientos denarios (Jn 12:5), el sueldo de casi un año de trabajo. Lo que para Judas era un desperdicio, Jesús lo recibió como un acto de amor que anticipaba su sepultura (Jn 12:7).',
        'Después de la crucifixión, Nicodemo trajo «un compuesto de mirra y de áloes, como cien libras» (Jn 19:39): unos 33 kilos de especias, una cantidad digna de la sepultura de un rey. El hombre que había venido de noche a ver a Jesús (Jn 3:1-2) ahora se mostraba públicamente.',
        { h: 'Dos libras de trigo por un denario' },
        'En Apocalipsis 6:6, «libra» no es un peso sino una medida griega de capacidad, de algo más de un litro: la ración de trigo de una persona para un día. La voz anuncia «Dos libras de trigo por un denario» (Ap 6:6). Si un denario era el sueldo de un día, un trabajador gastaría todo su jornal solo para comprar el pan de un día. Es el lenguaje de una hambruna, que acompaña al jinete del caballo negro.',
        'Más adelante, en el juicio de la séptima copa, cae «un enorme granizo como del peso de un talento» (Ap 16:21): piedras de hielo de unos 34 kilos. La conversión muestra el carácter devastador de ese juicio, y el texto añade que, aun así, los hombres blasfemaron contra Dios en vez de arrepentirse.',
        { ejercicio: {
          pregunta: '¿Qué comunica la voz de Apocalipsis 6:6 al decir «Dos libras de trigo por un denario»?',
          opciones: [
            { t: 'Que el trigo estaría barato y abundante.', ok: false, por_que: 'Un denario era el sueldo de un día entero de trabajo; pagar eso por tan poco trigo es un precio de hambruna.' },
            { t: 'Que el sueldo de un día alcanzaría apenas para comer ese día.', ok: true, por_que: 'Dos «libras» son unos dos litros de trigo: comida para uno o dos días, a cambio de todo el jornal.' },
            { t: 'Que habría que pagar los impuestos en trigo y no en dinero.', ok: false, por_que: 'El texto habla del precio del alimento, no de impuestos.' }
          ],
          explicacion: 'Convertir el precio a jornales revela el sentido: escasez extrema, en la que el trabajo de un día apenas alcanza para comer.'
        } }
      ],
      pensar: 'Judas midió el perfume en denarios; María lo midió en amor. ¿Con qué medida calculas lo que le das a Jesús?'
    }
  ];
  window.__MEDIDAS.capacidad = capacidad;
})();
/* Pesos, medidas, monedas y horas bíblicas · ruta III. Monedas (ver encabezado en parte1.js) */
(() => {
  const monedas = [
    {
      id: 'plata-pesada', n: 'Antes de las monedas: plata pesada', ref: 'Génesis 23:16; Jeremías 32:9-10; Esdras 2:69',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/jeremias-compra.webp', alt: 'En el patio de la cárcel de Jerusalén, el profeta Jeremías pesa plata en una balanza delante de su primo Hanameel, mientras Baruc sostiene un documento sellado y unos testigos observan', pie: 'Jeremías compra el campo de Anatot y pesa diecisiete siclos de plata (Jer 32:9-12).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y compré la heredad de Hanameel, hijo de mi tío, la cual estaba en Anatot, y le pesé el dinero; diecisiete siclos de plata. Y escribí la carta y la sellé, y la hice certificar con testigos, y pesé el dinero en balanza. Tomé luego la carta de venta, sellada según el derecho y costumbre, y la copia abierta. Y di la carta de venta a Baruc hijo de Nerías, hijo de Maasías, delante de Hanameel el hijo de mi tío, y delante de los testigos que habían suscrito la carta de venta, delante de todos los judíos que estaban en el patio de la cárcel.', ref: 'Jeremías 32:9-12' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Del metal pesado a la moneda',
          cab: ['Época', 'Cómo se pagaba', 'Referencia'],
          filas: [
            ['Patriarcas', 'Plata pesada en balanza', 'Gn 23:16'],
            ['Reyes y profetas', 'Plata pesada; pesas de piedra', 'Jer 32:9-10'],
            ['Siglo VI a.C.', 'Aparecen las primeras monedas en Lidia (Asia Menor)', '—'],
            ['Imperio persa', 'Dárico de oro («dracmas de oro»)', 'Esd 2:69; Neh 7:70'],
            ['Época griega y romana', 'Monedas acuñadas: dracma, denario, siclo de Tiro', 'Mt 22:19; Lc 15:8']
          ]
        } }
      ],
      texto: [
        'Durante la mayor parte del Antiguo Testamento no hubo monedas. Cuando Abraham compró la cueva de Macpela para sepultar a Sara, «pesó Abraham a Efrón el dinero que dijo, en presencia de los hijos de Het, cuatrocientos siclos de plata, de buena ley entre mercaderes» (Gn 23:16). El dinero era plata en trozos, anillos o lingotes, y se pesaba delante de testigos. «De buena ley» significa que era plata pura, aceptada en el comercio.',
        'Siglos después, Jeremías compró un campo en Anatot de la misma manera: «le pesé el dinero; diecisiete siclos de plata» (Jer 32:9). Escribió una escritura de venta, la selló, la hizo firmar por testigos y pesó la plata en la balanza (Jer 32:10). Jerusalén estaba sitiada y el profeta preso, pero Dios le mandó comprar ese campo como señal: «Aún se comprarán casas, heredades y viñas en esta tierra» (Jer 32:15). La compra era un acto de fe en la promesa del regreso.',
        { h: 'Las primeras monedas' },
        'Las monedas aparecieron en Lidia, en Asia Menor, hacia el siglo VII o VI a.C.: piezas de metal con un peso fijo y una marca oficial, que se contaban en vez de pesarse. Los persas las difundieron por su imperio. Por eso, en los libros del regreso del exilio aparecen las primeras monedas de la Biblia: el pueblo dio para la obra del templo «sesenta y un mil dracmas de oro» (Esd 2:69). La palabra traduce probablemente el dárico, la moneda de oro de los reyes persas.',
        'Cuando las monedas se generalizaron, los nombres antiguos siguieron en uso. El siclo, que había sido un peso, pasó a ser también una moneda de plata. Por eso al leer «siclo» hay que preguntarse de qué época habla el texto.',
        { ejercicio: {
          pregunta: '¿Por qué Abraham y Jeremías «pesan» el dinero en vez de contarlo?',
          opciones: [
            { t: 'Porque desconfiaban de los vendedores.', ok: false, por_que: 'Pesar no era una señal de desconfianza: era la forma normal de pagar en esa época.' },
            { t: 'Porque todavía no existían las monedas, y la plata se pagaba según su peso.', ok: true, por_que: 'Las monedas aparecieron recién hacia el siglo VI a.C.; antes, el siclo era una unidad de peso.' },
            { t: 'Porque la ley de Moisés prohibía contar el dinero.', ok: false, por_que: 'No existe tal prohibición. Abraham vivió además antes de la ley de Moisés.' }
          ],
          explicacion: 'Saber cuándo aparecen las monedas evita imaginar a Abraham con una bolsa de monedas acuñadas: pagaba con plata pesada en balanza.'
        } }
      ],
      pensar: 'Jeremías compró un campo en una ciudad a punto de caer, porque creyó en la promesa de Dios. ¿En qué decisión concreta puedes mostrar hoy que confías en lo que Dios ha prometido?'
    },
    {
      id: 'monedas-nt', n: 'Las monedas del Nuevo Testamento', ref: 'Marcos 12:42; Mateo 10:29; Lucas 15:8; Mateo 17:24-27',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-monedas.svg', alt: 'Escalera de monedas del Nuevo Testamento: 2 blancas forman un cuadrante; 4 cuadrantes, un cuarto o as; 16 cuartos, un denario o dracma; 2 dracmas, el impuesto del templo; 4 dracmas, un estatero o siclo de Tiro; 100 dracmas, una mina; 6.000 denarios, un talento', pie: 'De la blanca al talento: las equivalencias del dinero en tiempos de Jesús.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Monedas y cuentas del Nuevo Testamento',
          cab: ['Nombre en la RV 1960', 'Origen', 'Valor', 'Ejemplo'],
          filas: [
            ['Blanca (lepton)', 'Judío', '1/128 de denario', 'Mr 12:42'],
            ['Cuadrante', 'Romano', '2 blancas', 'Mt 5:26'],
            ['Cuarto (as)', 'Romano', '1/16 de denario', 'Mt 10:29'],
            ['Denario', 'Romano', 'Jornal de un día', 'Mt 20:2'],
            ['Dracma', 'Griego', '1 denario', 'Lc 15:8'],
            ['Dos dracmas', 'Griego', 'Medio siclo', 'Mt 17:24'],
            ['Estatero', 'Griego / Tiro', '4 dracmas', 'Mt 17:27'],
            ['Mina', 'Cuenta griega', '100 dracmas', 'Lc 19:13'],
            ['Talento', 'Cuenta', '6.000 denarios', 'Mt 25:15']
          ],
          nota: 'La mina y el talento no eran monedas sino unidades de cuenta para sumas grandes.'
        } }
      ],
      texto: [
        'En tiempos de Jesús circulaban en Judea tres clases de monedas a la vez. Roma acuñaba el denario de plata y monedas de bronce como el as y el cuadrante. Las ciudades griegas del oriente, como Tiro, acuñaban dracmas y tetradracmas. Y en Judea se usaban pequeñas monedas de bronce locales. La Reina-Valera traduce sus nombres con palabras de la época de los traductores, como «blanca» y «cuarto», que eran monedas españolas pequeñas.',
        { h: 'De la más pequeña a la más grande' },
        'La moneda más pequeña era la blanca, el lepton griego: una pieza de bronce de apenas un centímetro. Dos blancas formaban un cuadrante (Mr 12:42), y cuatro cuadrantes un as, que la Reina-Valera llama «cuarto». Por un cuarto se vendían dos pajarillos (Mt 10:29), y por dos cuartos, cinco (Lc 12:6): el vendedor regalaba uno al que compraba más. Jesús dice que ni siquiera ese pajarillo de regalo está olvidado delante de Dios.',
        'Dieciséis ases formaban un denario, la moneda de plata romana. El denario equivalía a la dracma griega, la moneda que buscaba la mujer de la parábola (Lc 15:8). Ambas eran el sueldo de un día de trabajo.',
        'Para pagar el impuesto anual del templo, que era medio siclo (Éx 30:13), se usaba la didracma, «las dos dracmas» (Mt 17:24). Cuando los cobradores preguntaron a Pedro si su Maestro pagaba, Jesús lo envió a pescar, y en la boca del pez encontró un estatero (Mt 17:27): una moneda de cuatro dracmas, justo lo necesario para pagar por dos personas. Jesús dijo: «dáselo por mí y por ti».',
        { h: 'Unidades de cuenta' },
        'La mina y el talento ya no eran monedas, sino formas de expresar grandes sumas, como decimos hoy «un millón». Una mina valía cien dracmas, y un talento, seis mil. En la parábola de las minas, cada siervo recibe una mina (Lc 19:13), unos cuatro meses de sueldo; en la de los talentos, un solo talento (Mt 25:15) equivalía al trabajo de casi veinte años.',
        { ejercicio: {
          pregunta: '¿Por qué el estatero que halló Pedro alcanzaba para pagar el impuesto de dos personas?',
          opciones: [
            { t: 'Porque valía cuatro dracmas, y el impuesto era de dos dracmas por persona.', ok: true, por_que: 'El impuesto era medio siclo, las dos dracmas. El estatero, de cuatro dracmas, cubría a Jesús y a Pedro.' },
            { t: 'Porque era una moneda de oro de mucho valor.', ok: false, por_que: 'El estatero de Tiro era de plata. Su valor coincidía exactamente con el impuesto de dos personas.' },
            { t: 'Porque Pedro y Jesús pagaban medio impuesto cada uno.', ok: false, por_que: 'Cada uno pagaba el impuesto completo de medio siclo; el estatero equivalía a un siclo entero.' }
          ],
          explicacion: 'La precisión del milagro muestra que Jesús conocía la necesidad exacta. Dios provee lo que hace falta, ni más ni menos.'
        } }
      ],
      pensar: 'Jesús dijo que ni el pajarillo de regalo está olvidado por Dios (Lc 12:6-7). ¿Qué parte de tu vida sientes que vale «menos que un cuarto»? ¿Qué te dice Jesús sobre ella?'
    },
    {
      id: 'denario', n: 'El denario: el sueldo de un día', ref: 'Mateo 20:1-16; Mateo 22:15-22',
      visual: [
        { tipo: 'imagen', titulo: 'Foto', alt: 'Denario de plata del emperador Tiberio, con su retrato de perfil en el anverso y la figura de una mujer sentada en el reverso', pie: 'Denario de Tiberio, emperador en tiempos del ministerio de Jesús.', origen: 'foto', licencia: 'por verificar', completa: true },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/obreros-vina.webp', alt: 'Al atardecer, junto a una viña de Judea, un mayordomo entrega un denario de plata a cada uno de los jornaleros cansados que hacen fila', pie: '«Recibieron cada uno un denario» (Mt 20:9).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dinos, pues, qué te parece: ¿Es lícito dar tributo a César, o no? Pero Jesús, conociendo la malicia de ellos, les dijo: ¿Por qué me tentáis, hipócritas? Mostradme la moneda del tributo. Y ellos le presentaron un denario. Entonces les dijo: ¿De quién es esta imagen, y la inscripción? Le dijeron: De César. Y les dijo: Dad, pues, a César lo que es de César, y a Dios lo que es de Dios.', ref: 'Mateo 22:17-21' }
      ],
      texto: [
        'El denario es la moneda que más se menciona en los evangelios, y su valor se conoce por la misma Biblia. En la parábola de los obreros, el dueño de la viña sale temprano a contratar trabajadores, «habiendo convenido con los obreros en un denario al día» (Mt 20:2). Un denario era el pago justo por una jornada de doce horas bajo el sol.',
        'La parábola continúa: el dueño sale a la hora tercera, a la sexta, a la novena y hasta a la undécima, y al final paga a todos lo mismo, un denario. Los primeros reclaman, y el dueño responde que no les hace ningún agravio: les pagó lo convenido (Mt 20:13). Con eso Jesús enseña que la salvación no se gana por las horas trabajadas, sino que es un regalo de la generosidad de Dios. Quien conoce el valor del denario entiende que los últimos recibieron el sustento de un día completo, aunque habían trabajado una sola hora.',
        { h: 'La imagen de César' },
        'Cuando los fariseos y los herodianos quisieron atrapar a Jesús con la pregunta del tributo, Él pidió: «Mostradme la moneda del tributo» (Mt 22:19), y le trajeron un denario. Los denarios de la época de Tiberio llevaban el rostro del emperador y una inscripción que lo llamaba hijo del divino Augusto. Jesús preguntó: «¿De quién es esta imagen, y la inscripción?» (Mt 22:20).',
        'La respuesta, «Dad, pues, a César lo que es de César, y a Dios lo que es de Dios» (Mt 22:21), tiene dos partes. La moneda lleva la imagen de César, y se le puede devolver. Pero el ser humano lleva la imagen de Dios (Gn 1:27), y por eso pertenece entero a Él. El creyente cumple sus deberes con el Estado (Ro 13:7) sin darle lo que solo corresponde a Dios: su adoración y su vida.',
        { ejercicio: {
          pregunta: 'En la parábola de los obreros, ¿qué recibió el que trabajó solo una hora?',
          opciones: [
            { t: 'La doceava parte de un denario, en proporción a su trabajo.', ok: false, por_que: 'Eso sería lo esperable según el trabajo, pero el texto dice que recibió un denario completo (Mateo 20:9).' },
            { t: 'Un denario, el pago de un día entero.', ok: true, por_que: 'El dueño le pagó lo mismo que a los primeros: un denario, el sustento de un día completo.' },
            { t: 'Más que los primeros, por haber esperado todo el día.', ok: false, por_que: 'Todos recibieron lo mismo. La queja de los primeros era que los igualaron con los últimos (Mateo 20:12).' }
          ],
          explicacion: 'La gracia de Dios no se calcula en horas de trabajo: da a cada uno el sustento completo, por pura generosidad (Mateo 20:15).'
        } }
      ],
      pensar: 'La moneda llevaba la imagen de César; tú llevas la imagen de Dios. ¿Qué significa en tu vida diaria «dar a Dios lo que es de Dios»?'
    },
    {
      id: 'templo', n: 'El siclo de Tiro y las treinta piezas de plata', ref: 'Mateo 21:12-13; Mateo 26:14-16; Zacarías 11:12-13',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cambistas.webp', alt: 'Cambistas sentados detrás de mesas de madera en el atrio del templo de Jerusalén, con balanzas y montones de monedas de plata, mientras peregrinos esperan para cambiar dinero', pie: 'Los cambistas del templo cambiaban monedas romanas y griegas por siclos de Tiro.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y les dije: Si os parece bien, dadme mi salario; y si no, dejadlo. Y pesaron por mi salario treinta piezas de plata. Y me dijo Jehová: Echalo al tesoro; ¡hermoso precio con que me han apreciado! Y tomé las treinta piezas de plata, y las eché en la casa de Jehová al tesoro.', ref: 'Zacarías 11:12-13' }
      ],
      texto: [
        'Para pagar el impuesto anual del templo, las autoridades exigían una moneda de plata de calidad garantizada: el siclo de Tiro, una ciudad fenicia de la costa. Su plata era la más pura de la región, y por eso se aceptaba aunque llevara la imagen de Melcart, el dios de Tiro, y un águila. Los peregrinos que llegaban con denarios romanos u otras monedas debían cambiarlas en el templo, pagando una comisión.',
        'Así se entiende la escena de los evangelios. Jesús entró en el templo y «volcó las mesas de los cambistas» (Mt 21:12), y echó fuera a los que vendían palomas. Juan añade que «esparció las monedas de los cambistas» (Jn 2:15). Lo que debía ser un lugar de oración para todas las naciones se había convertido en un mercado (Mr 11:17). El atrio de los gentiles, el único espacio donde un extranjero podía orar, estaba ocupado por el comercio.',
        { h: 'Treinta piezas de plata' },
        'Judas preguntó a los principales sacerdotes cuánto le darían por entregar a Jesús, «Y ellos le asignaron treinta piezas de plata» (Mt 26:15). Lo más probable es que fueran siclos de Tiro, la plata del tesoro del templo. Treinta siclos equivalían a ciento veinte denarios: el sueldo de casi cinco meses.',
        'La cifra tiene un trasfondo bíblico. Según la ley, treinta siclos era la indemnización que se pagaba por un esclavo muerto por un buey (Éx 21:32): el precio de un siervo. Y en Zacarías, el pastor que el pueblo rechaza recibe como salario «treinta piezas de plata», que el profeta arroja en la casa de Jehová (Zac 11:12-13). Mateo muestra que la traición a Jesús cumplió esa profecía: Judas devolvió la plata, la arrojó en el templo y con ella se compró el campo del alfarero (Mt 27:3-10).',
        'Los sacerdotes pagaron por el Hijo de Dios el precio de un esclavo. Pero ese siervo menospreciado es el que dio su vida en rescate por muchos (Mr 10:45).',
        { ejercicio: {
          pregunta: '¿Por qué las treinta piezas de plata eran un precio cargado de sentido?',
          opciones: [
            { t: 'Porque era la suma más alta que se había pagado nunca por una persona.', ok: false, por_que: 'Al contrario: era una suma modesta, el sueldo de casi cinco meses.' },
            { t: 'Porque era el precio que la ley fijaba por un esclavo y el salario despreciado del pastor en Zacarías.', ok: true, por_que: 'Éxodo 21:32 fija treinta siclos por un siervo, y Zacarías 11:12-13 llama «hermoso precio» con ironía a esa misma suma.' },
            { t: 'Porque treinta era el número de los discípulos de Jesús.', ok: false, por_que: 'Los apóstoles eran doce. El sentido de la cifra viene de la ley y de la profecía.' }
          ],
          explicacion: 'Conocer el valor y el trasfondo de las treinta piezas muestra el desprecio de los que entregaron a Jesús y el cumplimiento exacto de la profecía.'
        } }
      ],
      pensar: 'Judas vendió a Jesús por el precio de un esclavo. ¿Hay algo por lo que hoy podrías estar tentado a cambiar tu fidelidad a Cristo?'
    },
    {
      id: 'viuda', n: 'Las dos blancas de la viuda', ref: 'Marcos 12:41-44; Lucas 21:1-4',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/viuda.webp', alt: 'Una viuda pobre, vestida con un manto oscuro gastado, deja caer dos pequeñas monedas de bronce en un cofre de ofrendas con forma de trompeta en el atrio del templo; a lo lejos, Jesús sentado la observa de espaldas', pie: '«Echó dos blancas, o sea un cuadrante» (Mr 12:42).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Estando Jesús sentado delante del arca de la ofrenda, miraba cómo el pueblo echaba dinero en el arca; y muchos ricos echaban mucho. Y vino una viuda pobre, y echó dos blancas, o sea un cuadrante. Entonces llamando a sus discípulos, les dijo: De cierto os digo que esta viuda pobre echó más que todos los que han echado en el arca; porque todos han echado de lo que les sobra; pero ésta, de su pobreza echó todo lo que tenía, todo su sustento.', ref: 'Marcos 12:41-44' }
      ],
      texto: [
        'En el atrio de las mujeres había trece cofres para las ofrendas, con bocas en forma de trompeta. Jesús se sentó frente a ellos y miraba cómo el pueblo echaba dinero: «muchos ricos echaban mucho» (Mr 12:41). Entonces llegó una viuda pobre y echó «dos blancas, o sea un cuadrante» (Mr 12:42).',
        'Marcos, que escribía para lectores romanos, explica el valor de la moneda judía con una moneda romana: dos leptos son un cuadrante. Y un cuadrante es la sesenta y cuatroava parte de un denario. Si un denario era el sueldo de una jornada de doce horas, la ofrenda de la viuda equivalía a lo que se ganaba en unos diez minutos de trabajo. Era la ofrenda más pequeña que se podía dar en monedas.',
        { h: 'Dio más que todos' },
        'Jesús llamó a sus discípulos y les dijo: «esta viuda pobre echó más que todos los que han echado en el arca» (Mr 12:43). La razón: «todos han echado de lo que les sobra; pero ésta, de su pobreza echó todo lo que tenía, todo su sustento» (Mr 12:44). Dios no mide la ofrenda por la cantidad, sino por lo que cuesta al que la da y por la fe que expresa.',
        'Un detalle confirma la entrega de la viuda: tenía dos monedas y podía haber guardado una. Dio las dos. No conservó nada para sí, confiando en que Dios la sostendría. Poco antes, Jesús había denunciado a los escribas que «devoran las casas de las viudas» (Mr 12:40); ahora muestra a una viuda que, en su pobreza, es más rica en fe que todos ellos.',
        'Esta historia no enseña que la cantidad no importe ni que solo los pobres den bien. Enseña que Dios ve el corazón, y que la generosidad verdadera se mide por la proporción y la confianza, no por la cifra. Pablo lo dice así: «cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre» (2 Co 9:7).',
        { ejercicio: {
          pregunta: '¿Por qué Marcos explica que dos blancas son «un cuadrante»?',
          opciones: [
            { t: 'Para que sus lectores, que conocían el dinero romano, entendieran lo poco que valía la ofrenda.', ok: true, por_que: 'Marcos traduce el valor de la moneda judía a la moneda romana que conocían sus lectores.' },
            { t: 'Porque la viuda pagó con una moneda romana llamada blanca.', ok: false, por_que: 'La blanca o lepton era una moneda judía. El cuadrante es la equivalencia romana que Marcos añade.' },
            { t: 'Porque la ley exigía ofrendar al menos un cuadrante.', ok: false, por_que: 'No había un mínimo legal para las ofrendas voluntarias del templo.' }
          ],
          explicacion: 'Un cuadrante era 1/64 de denario: unos minutos de trabajo. Jesús dijo que esa ofrenda valía más que la de todos los ricos.'
        } }
      ],
      pensar: 'La viuda pudo guardar una de sus dos monedas, y no lo hizo. ¿Qué te enseña su ejemplo sobre la forma en que das a Dios?'
    },
    {
      id: 'cuanto-hoy', n: '¿Cuánto es hoy? El dinero en días de trabajo', ref: 'Mateo 18:23-35; Juan 6:7; Lucas 10:35',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-jornales.svg', alt: 'Barras que convierten sumas bíblicas a días de trabajo: dos denarios (2 días), cien denarios (unos cuatro meses), doscientos denarios (unos ocho meses), trescientos denarios (un año), una mina (unos cuatro meses) y un talento (unos veinte años)', pie: 'Las sumas de los evangelios, medidas en días de trabajo.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Sumas de los evangelios en jornales',
          cab: ['Pasaje', 'Suma', 'Días de trabajo', 'Aprox.'],
          filas: [
            ['Lc 10:35', '2 denarios', '2', 'Dos días'],
            ['Lc 7:41', '50 y 500 denarios', '50 y 500', 'Dos meses y casi dos años'],
            ['Mt 18:28', '100 denarios', '100', 'Unos cuatro meses'],
            ['Jn 6:7', '200 denarios', '200', 'Unos ocho meses'],
            ['Jn 12:5', '300 denarios', '300', 'Un año de trabajo'],
            ['Lc 19:13', '1 mina', '100', 'Unos cuatro meses'],
            ['Mt 25:15', '1 talento', '6.000', 'Unos 20 años'],
            ['Mt 18:24', '10.000 talentos', '60 millones', 'Unos 200.000 años']
          ],
          nota: 'Se cuentan unos 300 días de trabajo por año, descontando sábados y fiestas.'
        } }
      ],
      texto: [
        'Una pregunta frecuente es cuánto valdría hoy un denario o un talento. No sirve convertirlo por el precio actual de la plata, porque el valor del metal cambia y no dice cuánto podía comprar una persona. La forma más fiel es usar la medida que da la propia Biblia: un denario era el pago de un día de trabajo (Mt 20:2). Con esa base, cualquier suma de los evangelios se puede traducir a días, meses o años de trabajo.',
        { h: 'Un método sencillo' },
        'Primero, convierte la suma a denarios: una mina son 100 denarios y un talento, 6.000. Segundo, cada denario es un día de trabajo. Tercero, si quieres una cifra en tu moneda, multiplica por lo que gana hoy un trabajador por un día de trabajo en tu país. Así, cada lector de Latinoamérica puede hacer la cuenta con su propio salario, y el resultado tendrá el mismo peso que tenía para los oyentes de Jesús.',
        'Por ejemplo, el buen samaritano dejó al mesonero «dos denarios» (Lc 10:35): el pago de dos días de trabajo, suficiente para varios días de alojamiento y cuidado, y además prometió pagar lo que faltara. Felipe calculó que «doscientos denarios de pan no bastarían» (Jn 6:7) para la multitud: unos ocho meses de sueldo, una cantidad que los discípulos no tenían.',
        { h: 'Una deuda imposible' },
        'La comparación más impactante está en la parábola del siervo que no perdonó. El rey perdonó a un siervo que le debía «diez mil talentos» (Mt 18:24). Un talento eran seis mil denarios; diez mil talentos, sesenta millones de denarios. Un obrero tendría que trabajar unos doscientos mil años para pagarla. Jesús eligió a propósito una cifra imposible: así es nuestra deuda de pecado delante de Dios.',
        'Ese mismo siervo, recién perdonado, ahogaba a un compañero que le debía «cien denarios» (Mt 18:28): unos cuatro meses de sueldo, una deuda real pero pagable. La diferencia entre las dos deudas es de seiscientas mil veces. Quien ha sido perdonado de tanto, no puede negarse a perdonar lo poco (Mt 18:33).',
        { ir: { t: 'Calcular sumas bíblicas en tu moneda', a: 'calculadora/' } },
        { ejercicio: {
          pregunta: 'Si en tu país un día de trabajo se paga con 30 unidades de tu moneda, ¿cuánto serían los trescientos denarios del perfume de María?',
          opciones: [
            { t: '300 unidades.', ok: false, por_que: 'Eso supone que un denario vale una unidad de tu moneda. Hay que multiplicar por el sueldo de un día.' },
            { t: '9.000 unidades: el sueldo de un año.', ok: true, por_que: '300 denarios son 300 días de trabajo; por 30 unidades al día, 9.000.' },
            { t: '30 unidades.', ok: false, por_que: 'Eso sería el valor de un solo denario, no de trescientos.' }
          ],
          explicacion: 'El perfume costaba el sueldo de un año. Con esa cifra se entiende la reacción de Judas y la grandeza de la ofrenda de María (Juan 12:3-8).'
        } }
      ],
      pensar: 'Tu deuda con Dios era de diez mil talentos, y Él la perdonó. ¿A quién te cuesta perdonarle una deuda de «cien denarios»?'
    }
  ];
  window.__MEDIDAS.monedas = monedas;
})();
/* Pesos, medidas, monedas y horas bíblicas · ruta IV. El tiempo (ver encabezado en parte1.js) */
(() => {
  const tiempo = [
    {
      id: 'dia', n: 'El día bíblico: de tarde a tarde', ref: 'Génesis 1:5; Levítico 23:32; Juan 11:9',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dia.svg', alt: 'Comparación entre el día bíblico, que empieza al ponerse el sol, y el día moderno, que empieza a medianoche; el sábado judío va del viernes al atardecer al sábado al atardecer', pie: 'El día bíblico empieza al ponerse el sol.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y dijo Dios: Sea la luz; y fue la luz. Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas. Y llamó Dios a la luz Día, y a las tinieblas llamó Noche. Y fue la tarde y la mañana un día.', ref: 'Génesis 1:3-5' }
      ],
      texto: [
        'Para nosotros, un día nuevo empieza a medianoche. En la Biblia, el día empezaba al ponerse el sol. Así se cuenta desde la creación: «Y fue la tarde y la mañana un día» (Gn 1:5). Primero la tarde, luego la mañana. La ley lo aplica a las fiestas: el Día de la Expiación se guardaba desde la tarde del noveno día, «de tarde a tarde guardaréis vuestro reposo» (Lv 23:32).',
        'Por eso el sábado judío comienza el viernes al atardecer y termina el sábado al atardecer. Esto explica la prisa con que bajaron el cuerpo de Jesús de la cruz el viernes por la tarde: el día de reposo «estaba para comenzar» (Lc 23:54), y no podían dejar los cuerpos en la cruz durante el sábado (Jn 19:31).',
        { h: 'Un día de doce horas' },
        'La parte luminosa del día se dividía en doce horas. Jesús lo dice con naturalidad: «¿No tiene el día doce horas?» (Jn 11:9). La primera hora comenzaba al salir el sol, y la duodécima terminaba al ponerse. Como el sol sale más temprano en verano y más tarde en invierno, las horas no tenían todas el mismo largo: en verano eran más largas y en invierno más cortas. Solo cerca de los equinoccios, en marzo y en septiembre, cada hora duraba sesenta minutos.',
        'Para convertir una hora bíblica a nuestro reloj, basta sumar seis: la hora tercera es hacia las nueve de la mañana, la sexta hacia el mediodía y la novena hacia las tres de la tarde. Es una aproximación, pero suficiente para imaginar la escena.',
        { h: 'Sin relojes de bolsillo' },
        'La gente no tenía relojes. Se orientaba por la posición del sol, por la sombra y por los momentos del culto en el templo, como el sacrificio de la mañana y el de la tarde. Por eso los evangelios suelen decir «como la hora sexta» o «cerca de la hora novena»: son horas aproximadas, sin la precisión de minutos que hoy esperamos.',
        { ejercicio: {
          pregunta: 'Si Jesús murió un viernes cerca de la hora novena, ¿por qué había prisa por sepultarlo?',
          opciones: [
            { t: 'Porque el día de reposo comenzaba al ponerse el sol, pocas horas después.', ok: true, por_que: 'La hora novena es hacia las tres de la tarde. El sábado empezaba al atardecer, unas tres horas después.' },
            { t: 'Porque el día de reposo comenzaba a medianoche del sábado.', ok: false, por_que: 'En el cómputo judío el día empieza al atardecer, no a medianoche.' },
            { t: 'Porque la ley prohibía sepultar después de la hora sexta.', ok: false, por_que: 'No existía esa ley. La prisa se debía a que comenzaba el sábado (Lucas 23:54).' }
          ],
          explicacion: 'Saber que el día bíblico empieza al atardecer explica muchos detalles del relato de la sepultura.'
        } }
      ],
      pensar: 'En la Biblia el día comienza con la noche y avanza hacia la luz. ¿Qué esperanza te da esa manera de contar los días cuando atraviesas un tiempo oscuro?'
    },
    {
      id: 'horas', n: 'Las horas del día en los evangelios y en Hechos', ref: 'Hechos 2:15; Hechos 3:1; Juan 4:6; Marcos 15:25-34',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-horas.svg', alt: 'Reloj de veinticuatro horas: las doce horas del día, de la primera (hacia las 7) a la duodécima (hacia las 18), con la tercera, sexta, novena y undécima señaladas, y las cuatro vigilias de la noche', pie: 'Las horas del día y las vigilias de la noche, aproximadas a nuestro reloj.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Horas del día en la Biblia',
          cab: ['Hora', 'Aprox.', 'Qué ocurre'],
          filas: [
            ['Tercera', '9:00', 'Pentecostés: Pedro predica (Hch 2:15)'],
            ['Sexta', '12:00', 'Jesús junto al pozo de Sicar (Jn 4:6); Pedro ora en la azotea (Hch 10:9)'],
            ['Novena', '15:00', 'Hora de la oración; Pedro y Juan suben al templo (Hch 3:1); visión de Cornelio (Hch 10:3)'],
            ['Décima', '16:00', 'Dos discípulos se quedan con Jesús (Jn 1:39)'],
            ['Undécima', '17:00', 'Los últimos obreros de la viña (Mt 20:6)']
          ]
        } }
      ],
      texto: [
        'Con la equivalencia de las horas, varias escenas se vuelven más vivas. En el día de Pentecostés, cuando algunos se burlaron diciendo que los discípulos estaban llenos de mosto, Pedro respondió: «éstos no están ebrios, como vosotros suponéis, puesto que es la hora tercera del día» (Hch 2:15). Eran las nueve de la mañana, la hora del sacrificio matutino y de la oración. Nadie se emborrachaba a esa hora, y menos en una fiesta. Lo que veían era el cumplimiento de la promesa de Joel: el Espíritu derramado sobre toda carne (Hch 2:16-17).',
        'La hora novena, las tres de la tarde, era «la de la oración» (Hch 3:1), la hora del sacrificio de la tarde. A esa hora Pedro y Juan subían al templo cuando sanaron al cojo, y a esa hora oraba Cornelio cuando un ángel le habló (Hch 10:3, 30). La iglesia primitiva conservó los momentos de oración del pueblo de Dios.',
        'Jesús llegó al pozo de Sicar cansado del camino, «como la hora sexta» (Jn 4:6): el mediodía, la hora del calor más fuerte, cuando nadie iba a sacar agua. La samaritana fue al pozo a una hora en que no encontraría a otras mujeres, y allí la esperaba Jesús.',
        { h: 'Las horas de la cruz' },
        'Marcos ordena el día de la crucifixión por horas: lo crucificaron a la hora tercera (Mr 15:25), hubo tinieblas desde la hora sexta hasta la novena (Mr 15:33), y a la hora novena Jesús clamó y murió (Mr 15:34-37). Juan, en cambio, dice que Pilato presentó a Jesús al pueblo «como la hora sexta» (Jn 19:14).',
        { posturas: {
          titulo: '¿Hora tercera u hora sexta?',
          a: { n: 'Juan cuenta desde la medianoche', t: 'Según esta explicación, Juan, que escribe en Asia para lectores del mundo romano, cuenta las horas desde la medianoche, como en los documentos legales de Roma. La hora sexta de Juan serían las seis de la mañana, cuando terminaba el juicio, antes de la crucifixión a la hora tercera de Marcos, las nueve.' },
          b: { n: 'Horas aproximadas por bloques', t: 'Según otra explicación, ambos cuentan desde el amanecer, pero sin relojes la gente nombraba el día por bloques de tres horas: tercera, sexta y novena. Marcos ubica la crucifixión en el bloque de la hora tercera, a media mañana, y Juan dice que el juicio terminó «como» la hora sexta, cerca del mediodía.' },
          c: 'Las dos explicaciones son coherentes con el texto y muestran que los evangelistas no se contradicen: ambos sitúan el juicio y la crucifixión en la mañana, y las tinieblas desde el mediodía hasta la muerte de Jesús, hacia las tres de la tarde, la hora del sacrificio de la tarde.'
        } },
        { ejercicio: {
          pregunta: '¿Por qué el argumento de Pedro en Hechos 2:15 era convincente para sus oyentes?',
          opciones: [
            { t: 'Porque a las nueve de la mañana nadie estaba ebrio, y menos en una fiesta.', ok: true, por_que: 'La hora tercera era la del sacrificio de la mañana y la oración. La burla no tenía sentido a esa hora.' },
            { t: 'Porque a la hora tercera de la noche todos dormían.', ok: false, por_que: 'Pedro habla de la hora tercera del día, contada desde el amanecer.' },
            { t: 'Porque en Pentecostés estaba prohibido beber vino.', ok: false, por_que: 'Pedro no apela a una prohibición sino a la hora: era muy temprano.' }
          ],
          explicacion: 'La hora explica el argumento de Pedro: lo que veían no era embriaguez, sino el Espíritu Santo derramado.'
        } }
      ],
      pensar: 'Pedro y Juan tenían una hora de oración, y en ese camino Dios obró un milagro (Hch 3:1-8). ¿Tienes un momento fijo para orar cada día?'
    },
    {
      id: 'vigilias', n: 'Las vigilias de la noche', ref: 'Marcos 13:35; Mateo 14:25; Jueces 7:19; Éxodo 14:24',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las vigilias de la noche',
          cab: ['Sistema', 'Vigilia', 'Aprox.', 'Referencia'],
          filas: [
            ['Antiguo Testamento (tres)', 'Primera: al comenzar las vigilias', '18:00 a 22:00', 'Lm 2:19'],
            ['', 'Media: la guardia de la medianoche', '22:00 a 2:00', 'Jue 7:19'],
            ['', 'De la mañana', '2:00 a 6:00', 'Éx 14:24'],
            ['Nuevo Testamento (cuatro, romano)', 'Primera: al anochecer', '18:00 a 21:00', 'Mr 13:35'],
            ['', 'Segunda: medianoche', '21:00 a 24:00', 'Lc 12:38'],
            ['', 'Tercera: canto del gallo', '0:00 a 3:00', 'Mr 13:35'],
            ['', 'Cuarta: la mañana', '3:00 a 6:00', 'Mt 14:25']
          ],
          nota: 'Hechos también cuenta horas de la noche: la hora tercera de la noche (Hch 23:23) es hacia las nueve.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Mirad, velad y orad; porque no sabéis cuándo será el tiempo. Es como el hombre que yéndose lejos, dejó su casa, y dio autoridad a sus siervos, y a cada uno su obra, y al portero mandó que velase. Velad, pues, porque no sabéis cuándo vendrá el señor de la casa; si al anochecer, o a la medianoche, o al canto del gallo, o a la mañana; para que cuando venga de repente, no os halle durmiendo. Y lo que a vosotros digo, a todos lo digo: Velad.', ref: 'Marcos 13:33-37' }
      ],
      texto: [
        'La noche se dividía en vigilias, los turnos de los centinelas. En el Antiguo Testamento eran tres. Gedeón atacó el campamento madianita «al principio de la guardia de la medianoche, cuando acababan de renovar los centinelas» (Jue 7:19): los nuevos guardias apenas empezaban, todavía sin acostumbrar la vista a la oscuridad. En el mar Rojo, Dios trastornó al ejército egipcio en la vigilia de la mañana (Éx 14:24), la última antes del amanecer.',
        'En tiempos del Nuevo Testamento, los judíos usaban también el sistema romano de cuatro vigilias de tres horas. Jesús las nombra una por una al exhortar a velar: «si al anochecer, o a la medianoche, o al canto del gallo, o a la mañana» (Mr 13:35). Cada vigilia era un momento posible para el regreso del señor de la casa; por eso el siervo debía estar despierto en todas.',
        { h: 'La cuarta vigilia' },
        'Después de la multiplicación de los panes, los discípulos remaron toda la noche contra el viento. «Mas a la cuarta vigilia de la noche, Jesús vino a ellos andando sobre el mar» (Mt 14:25): entre las tres y las seis de la mañana, después de horas de esfuerzo. Jesús los había visto remar con fatiga (Mr 6:48) y llegó en el momento de mayor cansancio. El taller práctico vuelve sobre esta escena con las distancias del lago.',
        { h: 'El canto del gallo' },
        'La tercera vigilia se llamaba «canto del gallo», porque los gallos cantan en la madrugada. Jesús advirtió a Pedro que, antes de que el gallo cantara dos veces, lo negaría tres veces (Mr 14:30). Las negaciones ocurrieron durante la noche del juicio, en esa vigilia, mientras Jesús era interrogado. Al canto del gallo, Pedro recordó la palabra del Señor y lloró (Mr 14:72).',
        'Las vigilias recuerdan que la noche no es un tiempo vacío para Dios. El salmista dice: «Me anticipé al alba, y clamé; Esperé en tu palabra. Se anticiparon mis ojos a las vigilias de la noche, Para meditar en tus mandatos» (Sal 119:147-148).',
        { ejercicio: {
          pregunta: 'Mateo 14:25 dice que Jesús vino a los discípulos «a la cuarta vigilia». ¿Qué hora era aproximadamente?',
          opciones: [
            { t: 'Entre las nueve y la medianoche.', ok: false, por_que: 'Esa es la segunda vigilia del sistema romano.' },
            { t: 'Entre las tres y las seis de la mañana.', ok: true, por_que: 'La cuarta vigilia romana era la última de la noche, antes del amanecer.' },
            { t: 'Hacia las cuatro de la tarde.', ok: false, por_que: 'Las vigilias son turnos de la noche, no horas del día.' }
          ],
          explicacion: 'Los discípulos llevaban muchas horas remando. Jesús llegó en lo más difícil de la noche, antes de que amaneciera.'
        } }
      ],
      pensar: 'Jesús llegó a la barca en la cuarta vigilia, después de una noche entera de lucha. ¿Qué «noche» estás atravesando, y qué te dice esta escena sobre la forma en que Jesús viene a los suyos?'
    },
    {
      id: 'semana', n: 'La semana, el sábado y el tercer día', ref: 'Éxodo 20:8-11; Mateo 12:40; Mateo 28:1; Hechos 20:7',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-tres-dias.svg', alt: 'Cuenta inclusiva de los tres días: viernes (muerte y sepultura antes del atardecer), sábado (en el sepulcro) y domingo (resurrección al amanecer): primer, segundo y tercer día', pie: 'La cuenta inclusiva: viernes, sábado y domingo son tres días.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se contaban los días',
          cab: ['Pasaje', 'Lo que dice', 'Cómo se cuenta'],
          filas: [
            ['Est 4:16; 5:1', 'Ayunar tres días, noche y día; al tercer día entra al rey', 'El tercer día cuenta como día completo'],
            ['Mt 16:21', 'Resucitar al tercer día', 'Viernes, sábado y domingo'],
            ['Mt 27:63-64', 'Después de tres días; guardar el sepulcro hasta el tercer día', 'Las dos expresiones equivalen'],
            ['Lc 24:21', 'Hoy es ya el tercer día', 'Domingo, contando desde el viernes']
          ]
        } }
      ],
      texto: [
        'La semana de siete días es una de las herencias más visibles de la Biblia en nuestra vida. No sigue el movimiento de ningún astro: se funda en la creación y en el mandamiento: «Seis días trabajarás, y harás toda tu obra; mas el séptimo día es reposo para Jehová tu Dios» (Éx 20:9-10). Los días no tenían nombre propio sino número: primer día, segundo día, y el séptimo, el sábado o día de reposo. El viernes se llamaba la preparación (Mr 15:42).',
        'Jesús resucitó «al amanecer del primer día de la semana» (Mt 28:1). Desde entonces, los cristianos se reunieron ese día para partir el pan (Hch 20:7) y apartar sus ofrendas (1 Co 16:2). El domingo es el día del Señor (Ap 1:10), en memoria de la resurrección.',
        { h: 'Tres días y tres noches' },
        'Jesús dijo que estaría «en el corazón de la tierra tres días y tres noches» (Mt 12:40), y también que resucitaría «al tercer día» (Mt 16:21). Si murió el viernes por la tarde y resucitó el domingo al amanecer, ¿cómo se cuentan los tres días?',
        { posturas: {
          titulo: '¿Cómo se cuentan los tres días?',
          a: { n: 'Cuenta inclusiva: viernes a domingo', t: 'En la Biblia, una parte de un día se contaba como un día completo, y «tres días y tres noches» era una forma de decir tres días. Ester ayuna «tres días, noche y día» y entra a ver al rey «al tercer día» (Est 4:16; 5:1). Los evangelios dicen que Jesús murió en la preparación, la víspera del sábado (Mr 15:42; Lc 23:54), y el domingo los discípulos dicen «hoy es ya el tercer día» (Lc 24:21). Es la postura de la mayoría de los cristianos.' },
          b: { n: 'Tres días completos: miércoles o jueves', t: 'Otros entienden «tres días y tres noches» como setenta y dos horas. Señalan que aquel sábado era «de gran solemnidad» (Jn 19:31), y que el primer día de la fiesta de los panes sin levadura era un día de santa convocación, sin trabajo (Lv 23:7). Habría habido dos sábados esa semana, y la crucifixión habría ocurrido el miércoles o el jueves.' },
          c: 'Ambas posturas confiesan lo esencial: Jesús murió realmente, fue sepultado y resucitó al tercer día conforme a las Escrituras (1 Co 15:3-4), el primer día de la semana. Este recurso sigue la cuenta inclusiva, que explica la expresión «al tercer día» y la cronología de los evangelios.'
        } },
        { ejercicio: {
          pregunta: 'Según la cuenta inclusiva, ¿cuáles son los tres días de Mateo 16:21?',
          opciones: [
            { t: 'Domingo, lunes y martes.', ok: false, por_que: 'Jesús resucitó el domingo, el primer día de la semana; el domingo es el tercer día, no el primero.' },
            { t: 'Viernes, sábado y domingo.', ok: true, por_que: 'Viernes es el primer día (muerte y sepultura), sábado el segundo y domingo el tercero.' },
            { t: 'Solo el sábado, que cuenta tres veces por ser día de reposo.', ok: false, por_que: 'No existe esa forma de contar. Cada día cuenta una vez, aunque sea solo una parte.' }
          ],
          explicacion: 'Con la cuenta inclusiva, el viernes por la tarde ya es el primer día, y el domingo al amanecer es el tercero.'
        } }
      ],
      pensar: 'El primer día de la semana, el de la resurrección, se convirtió en el día de reunión de la iglesia. ¿Cómo vives tú el día del Señor?'
    },
    {
      id: 'calendario', n: 'El calendario de Israel y sus fiestas', ref: 'Éxodo 12:2; Levítico 23; Deuteronomio 11:14',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-calendario.svg', alt: 'Calendario circular de Israel con los doce meses, sus nombres bíblicos, su equivalencia aproximada con los meses actuales, las fiestas de Levítico 23 y las estaciones del campo: lluvia temprana, siembra, lluvia tardía, siega y vendimia', pie: 'El año de Israel: meses, fiestas y estaciones.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los meses en la Biblia',
          cab: ['N.º', 'Nombre', 'Aprox.', 'Fiestas y pasajes'],
          filas: [
            ['1', 'Abib o Nisán', 'Marzo-abril', 'Pascua, panes sin levadura, primicias (Éx 13:4; Neh 2:1)'],
            ['2', 'Zif (Iyar)', 'Abril-mayo', 'Comienza el templo (1 R 6:1)'],
            ['3', 'Siván', 'Mayo-junio', 'Pentecostés o fiesta de las semanas (Est 8:9)'],
            ['4', 'Tamuz', 'Junio-julio', 'Siega del trigo'],
            ['5', 'Ab', 'Julio-agosto', 'Uvas e higos'],
            ['6', 'Elul', 'Agosto-septiembre', 'Se termina el muro (Neh 6:15)'],
            ['7', 'Etanim o Tisri', 'Septiembre-octubre', 'Trompetas, Expiación, Tabernáculos (1 R 8:2)'],
            ['8', 'Bul (Hesván)', 'Octubre-noviembre', 'Lluvia temprana; se termina el templo (1 R 6:38)'],
            ['9', 'Quisleu', 'Noviembre-diciembre', 'Dedicación, en invierno (Neh 1:1; Jn 10:22)'],
            ['10', 'Tebet', 'Diciembre-enero', 'Ester llega al palacio (Est 2:16)'],
            ['11', 'Sebat', 'Enero-febrero', 'Visiones de Zacarías (Zac 1:7)'],
            ['12', 'Adar', 'Febrero-marzo', 'Purim (Est 9:21); se termina el segundo templo (Esd 6:15)']
          ],
          nota: 'Los meses van de luna nueva a luna nueva. Abib, Zif, Etanim y Bul son los nombres antiguos; los demás se usaron desde el exilio. Las equivalencias corresponden al hemisferio norte.'
        } }
      ],
      texto: [
        'El calendario de Israel era lunar: cada mes comenzaba con la luna nueva y duraba veintinueve o treinta días. Doce meses lunares suman unos 354 días, once menos que el año solar. Para que las fiestas no se movieran de estación, cada dos o tres años se agregaba un mes trece, un segundo Adar. Así la Pascua caía siempre en primavera, con la siega de la cebada.',
        'Dios fijó el comienzo del año religioso en el mes de la salida de Egipto: «Este mes os será principio de los meses» (Éx 12:2). Ese mes se llamó Abib, que significa espigas verdes (Éx 13:4), y después del exilio, Nisán. Al mismo tiempo, el año agrícola y civil comenzaba en otoño, en el séptimo mes, con la fiesta de las trompetas.',
        { h: 'Los nombres de los meses' },
        'La Biblia usa dos grupos de nombres. Los más antiguos, cananeos, aparecen en la época de Salomón: Zif, Etanim y Bul (1 R 6:1, 38; 8:2). Después del exilio se adoptaron los nombres babilónicos, que todavía usa el calendario judío: Nisán, Siván, Elul, Quisleu, Tebet, Sebat y Adar aparecen en Ester, Nehemías, Esdras y Zacarías. Muchas veces el texto da el número del mes y su nombre, como «el mes primero, que es el mes de Nisán» (Est 3:7).',
        { h: 'Las estaciones y las fiestas' },
        'Las fiestas de Levítico 23 siguen el ritmo del campo. La Pascua y las primicias, en el primer mes, coinciden con la siega de la cebada; Pentecostés, cincuenta días después, con la del trigo; y las fiestas del séptimo mes, con la cosecha de la fruta y la vendimia. Las lluvias marcaban el año: «la temprana y la tardía» (Dt 11:14), la primera en otoño, para sembrar, y la segunda en primavera, para que madurara el grano.',
        'Un lector de América Latina debe recordar algo: estas estaciones corresponden al hemisferio norte. La Pascua en Israel cae en primavera, mientras en Chile, Argentina o el sur de Brasil es otoño. Al leer «Era invierno» en la fiesta de la dedicación (Jn 10:22), hay que pensar en diciembre en Jerusalén: frío y lluvia.',
        { ejercicio: {
          pregunta: '¿Por qué el calendario de Israel agregaba un mes trece algunos años?',
          opciones: [
            { t: 'Para que las fiestas siguieran coincidiendo con las estaciones y las cosechas.', ok: true, por_que: 'Doce meses lunares quedan unos once días cortos; sin el mes extra, la Pascua se iría moviendo por todo el año.' },
            { t: 'Para celebrar una fiesta adicional cada tres años.', ok: false, por_que: 'El mes extra no tenía una fiesta propia: era un segundo Adar para ajustar el calendario.' },
            { t: 'Porque el año religioso y el civil tenían distinta cantidad de meses.', ok: false, por_que: 'Ambos tenían los mismos meses; solo empezaban en distinto momento del año.' }
          ],
          explicacion: 'Las fiestas estaban ligadas a la cosecha: la Pascua a la cebada y Pentecostés al trigo. El ajuste del calendario mantenía esa relación.'
        } }
      ],
      pensar: 'Las fiestas de Israel unían el calendario del campo con la memoria de lo que Dios había hecho. ¿Qué fechas de tu año te ayudan a recordar las obras de Dios en tu vida?'
    },
    {
      id: 'anos', n: 'Años, jubileos y el tiempo de la profecía', ref: 'Levítico 25:8-10; Lucas 3:1; Apocalipsis 11:2-3; 12:6, 14',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-profetico.svg', alt: 'Equivalencias del tiempo profético: tiempo, tiempos y medio tiempo (tres años y medio) = cuarenta y dos meses = mil doscientos sesenta días, con meses de treinta días; dos mitades forman la semana setenta de Daniel', pie: 'Tres expresiones para el mismo período en Daniel y Apocalipsis.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Ciclos de años en la ley',
          cab: ['Ciclo', 'Qué ocurría', 'Referencia'],
          filas: [
            ['Año sabático (cada 7 años)', 'La tierra descansaba; se perdonaban las deudas', 'Lv 25:2-7; Dt 15:1-2'],
            ['Jubileo (año 50)', 'Libertad a los esclavos; cada familia volvía a su heredad', 'Lv 25:8-13'],
            ['Semana de años', 'Siete años; base de las setenta semanas de Daniel', 'Lv 25:8; Dn 9:24-27']
          ]
        } }
      ],
      texto: [
        'Los años tampoco se contaban como hoy. No había una era común como el «después de Cristo», que se inventó en el siglo VI. Los acontecimientos se fechaban por el reinado de un rey: «En el año decimoquinto del imperio de Tiberio César» (Lc 3:1), o por un suceso conocido, como «dos años antes del terremoto» (Am 1:1). Lucas sitúa con cuidado el comienzo del ministerio de Juan el Bautista en la historia de su tiempo, hacia el año 28 o 29 d.C.',
        { h: 'Sábados de años y jubileo' },
        'La ley organizó también los años en semanas. Cada séptimo año la tierra descansaba y se perdonaban las deudas entre israelitas. Y después de «siete semanas de años», el año cincuenta era jubileo: «pregonaréis libertad en la tierra a todos sus moradores» (Lv 25:10). Los esclavos quedaban libres y cada familia recuperaba su heredad. Jesús anunció en Nazaret el «año agradable del Señor» (Lc 4:19), usando el lenguaje del jubileo para hablar de la libertad que Él trae.',
        { h: 'El tiempo en la profecía' },
        'Daniel y Apocalipsis describen un mismo período de tres maneras. Daniel habla de «tiempo, y tiempos, y medio tiempo» (Dn 7:25): un año, dos años y medio año. Apocalipsis menciona «cuarenta y dos meses» (Ap 11:2) y «mil doscientos sesenta días» (Ap 11:3; 12:6). Las tres cifras coinciden si se cuentan meses de treinta días: tres años y medio son cuarenta y dos meses, y cuarenta y dos meses de treinta días son mil doscientos sesenta días. Por eso muchos intérpretes hablan de un año profético de 360 días.',
        'Ese período corresponde a la mitad de la semana setenta de Daniel, una semana de años: siete años, en cuya mitad se hará cesar el sacrificio (Dn 9:27). Esta lectura, futurista, ubica esos siete años en la tribulación que precede a la venida gloriosa de Cristo. Los recursos Daniel y Los últimos tiempos desarrollan el tema. Aquí basta notar que conocer cómo se medía el tiempo ayuda a leer las cifras proféticas con cuidado, sin especulaciones ni fechas, porque del día y la hora nadie sabe (Mt 24:36).',
        { ir: { t: 'Estudiar el esquema de los últimos tiempos', a: '../../escatologia/' } },
        { ejercicio: {
          pregunta: '¿Qué tienen en común «tiempo, y tiempos, y medio tiempo», «cuarenta y dos meses» y «mil doscientos sesenta días»?',
          opciones: [
            { t: 'Son tres períodos distintos que se suman.', ok: false, por_que: 'Si se suman se perdería la coincidencia. Las tres expresiones describen el mismo lapso.' },
            { t: 'Las tres equivalen a tres años y medio, con meses de treinta días.', ok: true, por_que: 'Tres años y medio son 42 meses, y 42 meses de 30 días son 1.260 días.' },
            { t: 'Solo la de días es literal; las otras son simbólicas.', ok: false, por_que: 'Las tres se corresponden exactamente, lo que indica que se refieren al mismo período.' }
          ],
          explicacion: 'Las equivalencias muestran la unidad de la profecía bíblica: Daniel y Apocalipsis hablan del mismo tiempo con distintas palabras.'
        } }
      ],
      pensar: 'Dios cuenta los tiempos con exactitud, pero no nos reveló el día ni la hora (Mt 24:36). ¿Cómo te ayuda eso a vivir preparado sin caer en especulaciones?'
    }
  ];
  window.__MEDIDAS.tiempo = tiempo;
})();
/* Pesos, medidas, monedas y horas bíblicas · Taller práctico y definición de las rutas (ver encabezado en parte1.js) */
(() => {
  const taller = [
    {
      id: 'cana', n: 'Las tinajas de Caná', ref: 'Juan 2:1-11',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tinajas.webp', alt: 'Seis grandes tinajas de piedra caliza alineadas junto a un muro en el patio de una casa de Galilea durante una boda, mientras dos sirvientes vierten agua en ellas con cántaros', pie: '«Seis tinajas de piedra para agua» (Jn 2:6).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y estaban allí seis tinajas de piedra para agua, conforme al rito de la purificación de los judíos, en cada una de las cuales cabían dos o tres cántaros. Jesús les dijo: Llenad estas tinajas de agua. Y las llenaron hasta arriba. Entonces les dijo: Sacad ahora, y llevadlo al maestresala. Y se lo llevaron. Cuando el maestresala probó el agua hecha vino, sin saber él de dónde era, aunque lo sabían los sirvientes que habían sacado el agua, llamó al esposo, y le dijo: Todo hombre sirve primero el buen vino, y cuando ya han bebido mucho, entonces el inferior; mas tú has reservado el buen vino hasta ahora.', ref: 'Juan 2:6-10' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Paso', 'Dato', 'Resultado'],
          filas: [
            ['1. La unidad', 'Cántaro (metretes griego)', 'Unos 39 litros'],
            ['2. Una tinaja', 'Dos o tres cántaros', 'Entre 78 y 117 litros'],
            ['3. Las seis', 'Seis tinajas llenas hasta arriba', 'Entre 470 y 700 litros'],
            ['4. En botellas', 'Botellas de 0,75 L', 'Entre 600 y 900 botellas']
          ]
        } }
      ],
      texto: [
        'Este taller aplica lo aprendido a pasajes concretos. En cada estación se siguen los mismos pasos: identificar la unidad, buscar su equivalencia, hacer la cuenta y preguntarse qué agrega el resultado a la comprensión del texto.',
        'En una boda en Caná de Galilea faltó el vino. Había allí «seis tinajas de piedra para agua, conforme al rito de la purificación de los judíos, en cada una de las cuales cabían dos o tres cántaros» (Jn 2:6). Jesús mandó llenarlas de agua, y los sirvientes las llenaron «hasta arriba» (Jn 2:7).',
        { h: 'Paso 1 y 2: la unidad y la equivalencia' },
        'La palabra «cántaro» traduce el metretes, una medida griega de líquidos de unos 39 litros. Cada tinaja contenía dos o tres de esas medidas: entre 78 y 117 litros. Las tinajas de piedra se usaban porque, según las normas de pureza de la época, la piedra no se contaminaba como la cerámica. Se han encontrado vasijas de piedra de este tipo en excavaciones de Galilea y Jerusalén.',
        { h: 'Paso 3: la cuenta' },
        'Seis tinajas por 78 litros dan unos 470 litros; por 117, unos 700. Jesús transformó en vino entre 470 y 700 litros de agua: el equivalente a varios cientos de botellas.',
        { h: 'Paso 4: qué agrega' },
        'El resultado muestra la abundancia del milagro. Jesús no proveyó lo justo para salir del paso, sino más de lo que la fiesta podía consumir, y de la mejor calidad: el maestresala dijo que habían guardado «el buen vino hasta ahora» (Jn 2:10). Los profetas habían descrito la era del Mesías con imágenes de vino abundante (Am 9:13; Jl 3:18). Juan llama a este milagro la primera de las señales con que Jesús «manifestó su gloria; y sus discípulos creyeron en él» (Jn 2:11).',
        'Además, el agua estaba destinada a la purificación ritual. Jesús la transformó en el vino de la fiesta: anticipo de que Él trae lo que los ritos no podían dar.',
        { ejercicio: {
          pregunta: '¿Qué muestra principalmente la cantidad de vino que Jesús proveyó en Caná?',
          opciones: [
            { t: 'Que la boda tenía miles de invitados.', ok: false, por_que: 'El texto no dice cuántos invitados había. La cantidad excede lo que la fiesta necesitaba.' },
            { t: 'La abundancia generosa de Jesús, señal de que había llegado el tiempo del Mesías.', ok: true, por_que: 'Cientos de litros del mejor vino: una provisión que sobrepasa la necesidad y manifiesta su gloria.' },
            { t: 'Que Jesús quería que los invitados se embriagaran.', ok: false, por_que: 'La Biblia condena la embriaguez (Efesios 5:18). La abundancia es una señal de la bendición mesiánica, no una invitación al exceso.' }
          ],
          explicacion: 'Convertir los cántaros a litros revela el carácter del milagro: Jesús da en abundancia, y lo mejor queda para el final.'
        } }
      ],
      pensar: 'Los sirvientes llenaron las tinajas «hasta arriba», sin saber qué pasaría. ¿Qué obediencia sencilla te pide hoy el Señor, aunque todavía no veas el resultado?'
    },
    {
      id: 'barca', n: 'La barca en medio del lago', ref: 'Juan 6:16-21; Mateo 14:22-33',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cuarta-vigilia.webp', alt: 'Antes del amanecer, una barca de pesca de madera lucha contra las olas en el mar de Galilea; los discípulos reman con esfuerzo y Pedro mira asombrado hacia una figura que camina sobre el agua, vista de espaldas', pie: '«A la cuarta vigilia de la noche, Jesús vino a ellos andando sobre el mar» (Mt 14:25).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Al anochecer, descendieron sus discípulos al mar, y entrando en una barca, iban cruzando el mar hacia Capernaum. Estaba ya oscuro, y Jesús no había venido a ellos. Y se levantaba el mar con un gran viento que soplaba. Cuando habían remado como veinticinco o treinta estadios, vieron a Jesús que andaba sobre el mar y se acercaba a la barca; y tuvieron miedo. Mas él les dijo: Yo soy; no temáis. Ellos entonces con gusto le recibieron en la barca, la cual llegó en seguida a la tierra adonde iban.', ref: 'Juan 6:16-21' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Dato', 'Equivalencia', 'Resultado'],
          filas: [
            ['Ya oscuro (Jn 6:17)', 'Primera vigilia', 'Después de las 18:00'],
            ['Cuarta vigilia (Mt 14:25)', '3:00 a 6:00', 'Al menos nueve horas en el agua'],
            ['25 o 30 estadios (Jn 6:19)', 'Estadio de 185 m', 'Entre 4,6 y 5,5 km'],
            ['Ancho del lago', 'Unos 12 km', 'En medio del mar']
          ]
        } }
      ],
      texto: [
        'Después de alimentar a la multitud, Jesús mandó a los discípulos cruzar el lago en barca mientras Él subía al monte a orar. Juan y Mateo dan datos que, juntos, permiten reconstruir la noche.',
        { h: 'El tiempo' },
        'Los discípulos entraron en la barca cuando «Estaba ya oscuro» (Jn 6:17), al comienzo de la noche. Jesús llegó «a la cuarta vigilia de la noche» (Mt 14:25), entre las tres y las seis de la mañana. Es decir, llevaban al menos nueve horas en el agua, con el viento en contra (Mt 14:24). Marcos agrega que Jesús los vio «remar con gran fatiga» (Mr 6:48).',
        { h: 'La distancia' },
        'Juan dice que habían remado «como veinticinco o treinta estadios» (Jn 6:19). Con el estadio de 185 metros, eso son entre 4,6 y 5,5 kilómetros. El mar de Galilea mide unos 21 kilómetros de largo y unos 12 de ancho. Después de toda la noche, los discípulos estaban más o menos en el centro del lago, lejos de cualquier orilla: Mateo dice que la barca estaba «en medio del mar» (Mt 14:24).',
        { h: 'Qué agrega' },
        'Las cifras muestran la situación: nueve horas para avanzar cinco kilómetros, una distancia que con buen tiempo se recorre remando en una o dos horas. Estaban agotados, sin avanzar y lejos de tierra. Justo entonces llegó Jesús caminando sobre el agua. El que había orado toda la noche en el monte no se había olvidado de ellos.',
        'Las palabras de Jesús son las mismas en Juan y en Mateo: «Yo soy; no temáis» (Jn 6:20). Y Juan cierra con otro detalle: en cuanto lo recibieron en la barca, «la cual llegó en seguida a la tierra adonde iban» (Jn 6:21). Lo que no lograron en toda la noche, ocurrió en un instante con Jesús a bordo.',
        { ejercicio: {
          pregunta: 'Combinando Juan 6:19 y Mateo 14:25, ¿qué se puede concluir?',
          opciones: [
            { t: 'Que los discípulos avanzaron unos cinco kilómetros en más de nueve horas, en medio del lago.', ok: true, por_que: 'Veinticinco o treinta estadios son unos cinco kilómetros, y la cuarta vigilia indica que habían pasado casi toda la noche remando.' },
            { t: 'Que estaban a pocos metros de la orilla cuando llegó Jesús.', ok: false, por_que: 'Cinco kilómetros en un lago de doce de ancho los dejaba en medio del mar.' },
            { t: 'Que la travesía duró menos de una hora.', ok: false, por_que: 'Salieron al oscurecer y Jesús llegó en la cuarta vigilia, después de las tres de la mañana.' }
          ],
          explicacion: 'Las medidas de tiempo y distancia, leídas juntas, muestran el agotamiento de los discípulos y la oportunidad de la llegada de Jesús.'
        } }
      ],
      pensar: 'Remaron toda la noche y avanzaron poco; con Jesús en la barca llegaron enseguida. ¿En qué esfuerzo tuyo necesitas recibir a Jesús «en la barca»?'
    },
    {
      id: 'panes', n: 'Doscientos denarios de pan', ref: 'Juan 6:5-13; Marcos 6:35-44',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cuando alzó Jesús los ojos, y vio que había venido a él gran multitud, dijo a Felipe: ¿De dónde compraremos pan para que coman éstos? Pero esto decía para probarle; porque él sabía lo que había de hacer. Felipe le respondió: Doscientos denarios de pan no bastarían para que cada uno de ellos tomase un poco. Uno de sus discípulos, Andrés, hermano de Simón Pedro, le dijo: Aquí está un muchacho, que tiene cinco panes de cebada y dos pececillos; mas ¿qué es esto para tantos? Entonces Jesús dijo: Haced recostar la gente. Y había mucha hierba en aquel lugar; y se recostaron como en número de cinco mil varones. Y tomó Jesús aquellos panes, y habiendo dado gracias, los repartió entre los discípulos, y los discípulos entre los que estaban recostados; asimismo de los peces, cuanto querían. Y cuando se hubieron saciado, dijo a sus discípulos: Recoged los pedazos que sobraron, para que no se pierda nada. Recogieron, pues, y llenaron doce cestas de pedazos, que de los cinco panes de cebada sobraron a los que habían comido.', ref: 'Juan 6:5-13' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Dato', 'Equivalencia', 'Resultado'],
          filas: [
            ['200 denarios', '1 denario = 1 jornal', '200 días de trabajo'],
            ['200 días de trabajo', 'Unos 25 días de trabajo al mes', 'Unos ocho meses de sueldo'],
            ['Cinco mil hombres (Mt 14:21)', 'Más mujeres y niños', 'Tal vez diez mil personas o más'],
            ['200 denarios ÷ 5.000', '128 blancas por denario', 'Unas cinco blancas por hombre: un bocado']
          ]
        } }
      ],
      texto: [
        'Ante la multitud hambrienta, Jesús preguntó a Felipe: «¿De dónde compraremos pan para que coman éstos?» (Jn 6:5). Juan aclara que lo decía para probarlo, porque Él sabía lo que iba a hacer. Felipe hizo la cuenta: «Doscientos denarios de pan no bastarían para que cada uno de ellos tomase un poco» (Jn 6:7).',
        { h: 'Paso 1: la suma en jornales' },
        'Doscientos denarios son doscientos días de trabajo, unos ocho meses de sueldo. En Marcos, los discípulos preguntan si deben ir a comprar pan por esa suma (Mr 6:37), como quien dice que es imposible: no tenían ese dinero, y aunque lo tuvieran, no había dónde comprar tanto pan en un lugar desierto.',
        { h: 'Paso 2: la multitud' },
        'Eran unos cinco mil hombres, «sin contar las mujeres y los niños» (Mt 14:21). La multitud podía duplicar esa cifra. Repartidos entre cinco mil hombres, doscientos denarios darían a cada uno el valor de unas cinco blancas: un pedazo de pan. Por eso Felipe dice que no bastaría ni para que cada uno tomara «un poco».',
        { h: 'Paso 3: lo que había' },
        'Andrés encontró a un muchacho con «cinco panes de cebada y dos pececillos» (Jn 6:9). La cebada era el pan de los pobres, más barato que el trigo. Andrés mismo pregunta: «¿qué es esto para tantos?». La cuenta humana termina ahí: siete meses de sueldo no alcanzarían, y lo que hay es el almuerzo de un niño.',
        { h: 'Qué agrega' },
        'Jesús tomó los panes, dio gracias y los repartió, y todos comieron «cuanto querían» (Jn 6:11). Sobraron doce cestas (Jn 6:13). Convertir los doscientos denarios a jornales muestra que el problema no era un mal cálculo de los discípulos: era humanamente imposible. El milagro manifiesta que Jesús es el pan de vida (Jn 6:35), el que satisface por completo a quien viene a Él.',
        { ejercicio: {
          pregunta: '¿Qué quería decir Felipe con su respuesta en Juan 6:7?',
          opciones: [
            { t: 'Que con ocho meses de sueldo se podía alimentar bien a todos.', ok: false, por_que: 'Felipe dice lo contrario: esa suma no bastaría ni para un poco por persona.' },
            { t: 'Que ni siquiera una suma enorme, que no tenían, alcanzaría para un bocado por persona.', ok: true, por_que: 'Doscientos denarios eran unos ocho meses de trabajo, y aun así solo darían un pedazo a cada uno.' },
            { t: 'Que el pan en Galilea era muy barato.', ok: false, por_que: 'El cálculo de Felipe muestra que alimentar a la multitud costaba muchísimo.' }
          ],
          explicacion: 'Felipe hizo bien la cuenta humana. Jesús quería enseñarle que hay una provisión que supera todas las cuentas.'
        } }
      ],
      pensar: 'Felipe calculó lo que costaba; Andrés presentó lo poco que había. ¿Qué «cinco panes» puedes poner hoy en las manos de Jesús?'
    },
    {
      id: 'samaritano', n: 'El camino a Jericó y los dos denarios', ref: 'Lucas 10:30-37',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-jerico.svg', alt: 'Perfil del camino de Jerusalén a Jericó: unos 27 kilómetros con un descenso de más de mil metros, desde unos 750 metros sobre el nivel del mar hasta unos 250 metros bajo el nivel del mar, por el desierto de Judea', pie: 'De Jerusalén a Jericó: el camino «descendía» de verdad.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Respondiendo Jesús, dijo: Un hombre descendía de Jerusalén a Jericó, y cayó en manos de ladrones, los cuales le despojaron; e hiriéndole, se fueron, dejándole medio muerto. Aconteció que descendió un sacerdote por aquel camino, y viéndole, pasó de largo. Asimismo un levita, llegando cerca de aquel lugar, y viéndole, pasó de largo. Pero un samaritano, que iba de camino, vino cerca de él, y viéndole, fue movido a misericordia; y acercándose, vendó sus heridas, echándoles aceite y vino; y poniéndole en su cabalgadura, lo llevó al mesón, y cuidó de él. Otro día al partir, sacó dos denarios, y los dio al mesonero, y le dijo: Cuídamele; y todo lo que gastes de más, yo te lo pagaré cuando regrese.', ref: 'Lucas 10:30-35' }
      ],
      texto: [
        'Jesús comenzó la parábola con una frase que sus oyentes conocían bien: «Un hombre descendía de Jerusalén a Jericó» (Lc 10:30). La palabra «descendía» no es un adorno. Jerusalén está a unos 750 metros sobre el nivel del mar, y Jericó a unos 250 metros bajo el nivel del mar. En unos 27 kilómetros, el camino baja más de mil metros por el desierto de Judea, entre cerros áridos y quebradas: un lugar ideal para asaltantes.',
        { h: 'Paso 1: la distancia y el tiempo' },
        'Veintisiete kilómetros son casi un día de camino, unas siete u ocho horas a pie. El herido quedó «medio muerto» en un camino solitario. El sacerdote y el levita, que probablemente volvían a Jericó después de servir en el templo, lo vieron y pasaron de largo.',
        { h: 'Paso 2: el costo del samaritano' },
        'El samaritano vendó sus heridas, lo subió a su cabalgadura y lo llevó a un mesón. Al día siguiente, «sacó dos denarios, y los dio al mesonero» (Lc 10:35): dos días de su propio trabajo. Esa suma alcanzaba para varios días de alojamiento y comida, y además se comprometió a pagar lo que se gastara de más. Para un viajero era un gasto considerable, entregado a un desconocido y, más aún, a un judío, de un pueblo que despreciaba a los samaritanos (Jn 4:9).',
        { h: 'Paso 3: qué agrega' },
        'Las cifras muestran que el amor al prójimo tiene un costo concreto: tiempo, riesgo en un camino peligroso, dinero y compromiso a futuro. El samaritano no dio lo que le sobraba ni lo que no le costaba. Jesús terminó con una orden: «Ve, y haz tú lo mismo» (Lc 10:37).',
        'El sitio tiene un Atlas bíblico donde se puede ubicar el camino entre Jerusalén y Jericó en el mapa.',
        { ir: { t: 'Ver el camino en el Atlas bíblico', a: '../../atlas-biblico/' } },
        { ejercicio: {
          pregunta: '¿Qué indican los dos denarios que el samaritano dejó al mesonero?',
          opciones: [
            { t: 'Una propina simbólica, sin mucho valor.', ok: false, por_que: 'Dos denarios eran dos días de trabajo. No era una suma insignificante.' },
            { t: 'Dos días de su propio sueldo, entregados por un desconocido, con la promesa de pagar más.', ok: true, por_que: 'El samaritano pagó de su bolsillo el equivalente a dos jornadas y se comprometió a cubrir todo lo demás.' },
            { t: 'El impuesto que debían pagar los samaritanos al entrar a Judea.', ok: false, por_que: 'El texto dice que el dinero era para el cuidado del herido en el mesón.' }
          ],
          explicacion: 'La misericordia del samaritano se mide en tiempo, riesgo y dinero. Así es el amor que Jesús pide a sus discípulos.'
        } }
      ],
      pensar: '¿Quién es el «hombre medio muerto» que ves en tu camino esta semana? ¿Qué te costaría detenerte?'
    },
    {
      id: 'talentos-parabola', n: 'Los talentos: una fortuna en manos de siervos', ref: 'Mateo 25:14-30',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque el reino de los cielos es como un hombre que yéndose lejos, llamó a sus siervos y les entregó sus bienes. A uno dio cinco talentos, y a otro dos, y a otro uno, a cada uno conforme a su capacidad; y luego se fue lejos. Y el que había recibido cinco talentos fue y negoció con ellos, y ganó otros cinco talentos Asimismo el que había recibido dos, ganó también otros dos. Pero el que había recibido uno fue y cavó en la tierra, y escondió el dinero de su señor.', ref: 'Mateo 25:14-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Siervo', 'Talentos', 'En denarios', 'Años de trabajo'],
          filas: [
            ['Primero', '5', '30.000', 'Unos 100'],
            ['Segundo', '2', '12.000', 'Unos 40'],
            ['Tercero', '1', '6.000', 'Unos 20']
          ],
          nota: 'Un talento = 6.000 denarios; unos 300 días de trabajo por año.'
        } }
      ],
      texto: [
        'En español, «talento» significa habilidad, precisamente por esta parábola. Pero en tiempos de Jesús, un talento era una suma de dinero, y una muy grande. Para entender la parábola hay que devolverle a la palabra su sentido original.',
        { h: 'Paso 1: convertir a denarios' },
        'El señor dio «A uno dio cinco talentos, y a otro dos, y a otro uno, a cada uno conforme a su capacidad» (Mt 25:15). Un talento eran seis mil denarios. El primer siervo recibió treinta mil denarios; el segundo, doce mil; el tercero, seis mil.',
        { h: 'Paso 2: convertir a años' },
        'Si un trabajador ganaba un denario por día y trabajaba unos trescientos días al año, un solo talento equivalía a unos veinte años de trabajo. El primer siervo recibió el sueldo de toda una vida, multiplicado. Y el que recibió menos, el tercero, tenía en sus manos más dinero del que la mayoría de la gente vería en su vida entera.',
        { h: 'Paso 3: qué agrega' },
        'La conversión corrige una lectura común. A veces se piensa que el tercer siervo recibió «poco» y por eso tuvo excusas. En realidad recibió una fortuna, y la enterró. Su falta no fue tener poco, sino no hacer nada con lo mucho que se le confió, por temor y por una idea equivocada de su señor (Mt 25:24-25).',
        'Los otros dos siervos negociaron y duplicaron lo recibido, y escucharon las mismas palabras: «Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré» (Mt 25:21, 23). Para el señor, cinco talentos eran «poco»: así de grande es lo que el Señor reserva a sus siervos fieles. Los dones, oportunidades y responsabilidades que Dios da a cada creyente, incluidos los dones del Espíritu (1 P 4:10), son una riqueza que se nos confía para hacerla producir hasta que Él vuelva.',
        { ejercicio: {
          pregunta: 'Si un talento equivalía a unos veinte años de trabajo, ¿qué muestra eso del tercer siervo?',
          opciones: [
            { t: 'Que recibió tan poco que no valía la pena negociar.', ok: false, por_que: 'Recibió seis mil denarios, una fortuna. La conversión desmiente esa idea.' },
            { t: 'Que recibió una gran riqueza y aun así no hizo nada con ella.', ok: true, por_que: 'Su problema no fue la cantidad, sino el miedo y la pereza (Mateo 25:26).' },
            { t: 'Que el señor fue injusto al darle menos que a los demás.', ok: false, por_que: 'El señor dio a cada uno según su capacidad, y a todos les confió mucho.' }
          ],
          explicacion: 'Lo que Dios confía a cada uno es valioso. La fidelidad se mide por lo que hacemos con lo recibido, sea mucho o «poco».'
        } }
      ],
      pensar: '¿Qué «talento» te ha confiado Dios que está enterrado? ¿Qué paso concreto puedes dar para ponerlo a trabajar en su obra?'
    },
    {
      id: 'pentecostes', n: 'Cincuenta días y la hora tercera', ref: 'Levítico 23:15-16; Hechos 1:3-5; 2:1-4, 15',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pentecostes.svg', alt: 'Línea de cincuenta días: la Pascua y la muerte de Jesús, la resurrección el día de las primicias, cuarenta días de apariciones, la ascensión, diez días de espera en oración y el día de Pentecostés, cincuenta días después de las primicias', pie: 'De las primicias a Pentecostés: cincuenta días.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y contaréis desde el día que sigue al día de reposo, desde el día en que ofrecisteis la gavilla de la ofrenda mecida; siete semanas cumplidas serán. Hasta el día siguiente del séptimo día de reposo contaréis cincuenta días; entonces ofreceréis el nuevo grano a Jehová.', ref: 'Levítico 23:15-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Día', 'Qué ocurre', 'Referencia'],
          filas: [
            ['Día 1', 'Primicias: Jesús resucita, el día siguiente al sábado', 'Lv 23:10-11; 1 Co 15:20'],
            ['Días 1 a 40', 'Jesús se aparece a sus discípulos', 'Hch 1:3'],
            ['Día 40', 'Ascensión desde el monte de los Olivos', 'Hch 1:9-12'],
            ['Días 41 a 49', 'Los discípulos esperan unánimes en oración', 'Hch 1:14'],
            ['Día 50', 'Pentecostés: el Espíritu es derramado a la hora tercera', 'Hch 2:1-4, 15']
          ]
        } }
      ],
      texto: [
        'La última estación del taller junta varias medidas de tiempo para leer el día de Pentecostés. El nombre mismo es una medida: Pentecostés significa «quincuagésimo» en griego, el día cincuenta.',
        { h: 'Paso 1: la cuenta de la ley' },
        'La ley mandaba contar desde el día en que se ofrecía la gavilla de las primicias, el día siguiente al sábado de la semana de Pascua: «Hasta el día siguiente del séptimo día de reposo contaréis cincuenta días» (Lv 23:16). Siete semanas completas y un día. Por eso también se la llamaba la fiesta de las semanas.',
        { h: 'Paso 2: la cuenta de los evangelios y Hechos' },
        'Jesús resucitó el primer día de la semana, el día siguiente al sábado: el día de las primicias. Pablo lo dice así: Cristo resucitó como «primicias de los que durmieron» (1 Co 15:20). Durante cuarenta días se apareció a sus discípulos (Hch 1:3), y luego ascendió desde el monte de los Olivos. Quedaban unos diez días hasta el día cincuenta. Los discípulos los pasaron esperando la promesa del Padre, como Jesús les había mandado (Hch 1:4-5), perseverando «unánimes en oración y ruego» (Hch 1:14).',
        { h: 'Paso 3: la hora' },
        '«Cuando llegó el día de Pentecostés, estaban todos unánimes juntos» (Hch 2:1). El Espíritu Santo descendió, y todos fueron llenos y comenzaron a hablar en otras lenguas (Hch 2:4). Pedro explicó a la multitud que no estaban ebrios, porque era «la hora tercera del día» (Hch 2:15): las nueve de la mañana, la hora del sacrificio y la oración de la mañana.',
        { h: 'Qué agrega' },
        'Las medidas de tiempo muestran que Pentecostés no fue un hecho aislado. Así como la Pascua se cumplió en la cruz y las primicias en la resurrección, la fiesta de la cosecha del trigo se cumplió con la primera gran cosecha del evangelio: unas tres mil personas añadidas a la iglesia en un día (Hch 2:41). Dios cumplió su calendario con exactitud. Y la promesa del Espíritu no quedó encerrada en esa fecha: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hch 2:39).',
        { ir: { t: 'Seguir estudiando el libro de Hechos', a: '../../hechos/' } },
        { ejercicio: {
          pregunta: '¿Cuántos días esperaron aproximadamente los discípulos entre la ascensión y Pentecostés?',
          opciones: [
            { t: 'Unos diez días.', ok: true, por_que: 'Jesús se apareció durante cuarenta días; Pentecostés era el día cincuenta. Quedaban unos diez.' },
            { t: 'Cincuenta días.', ok: false, por_que: 'Los cincuenta días se cuentan desde las primicias, el día de la resurrección, no desde la ascensión.' },
            { t: 'Tres días.', ok: false, por_que: 'Tres días es la cuenta de la sepultura a la resurrección, no de la ascensión a Pentecostés.' }
          ],
          explicacion: 'Cincuenta días desde la resurrección, menos cuarenta de apariciones, dejan unos diez días de espera en oración antes del derramamiento del Espíritu.'
        } }
      ],
      pensar: 'Los discípulos esperaron unidos en oración la promesa del Padre. ¿Cómo estás buscando tú la llenura del Espíritu Santo para tu vida y tu servicio?'
    }
  ];

  const M = window.__MEDIDAS;
  delete window.__MEDIDAS;
  window.RUTA_DATA = {
    titulo: 'Pesos, medidas, monedas y horas bíblicas',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'longitud', grupo: 'Las medidas de la Biblia', n: 'I. Longitud y distancia', info: 'Del dedo al estadio: el codo, las construcciones, los gigantes y los caminos', estaciones: M.longitud },
      { id: 'capacidad', grupo: 'Las medidas de la Biblia', n: 'II. Capacidad y peso', info: 'Gomer, efa y bato; el siclo, la mina y el talento; la balanza justa', estaciones: M.capacidad },
      { id: 'monedas', grupo: 'Las medidas de la Biblia', n: 'III. Monedas y dinero', info: 'De la plata pesada al denario: cuánto valía cada suma en días de trabajo', estaciones: M.monedas },
      { id: 'tiempo', grupo: 'Las medidas de la Biblia', n: 'IV. El tiempo', info: 'Horas, vigilias, semanas, meses, fiestas y el tiempo de la profecía', estaciones: M.tiempo },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Seis pasajes leídos con las medidas en la mano', estaciones: taller }
    ]
  };
})();
