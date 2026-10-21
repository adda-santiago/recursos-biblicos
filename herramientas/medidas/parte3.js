/* Pesos, medidas, monedas y horas bíblicas · ruta III. Monedas (ver encabezado en parte1.js) */
(() => {
  const monedas = [
    {
      id: 'plata-pesada', n: 'Antes de las monedas: plata pesada', ref: 'Génesis 23:16; Jeremías 32:9-10; Esdras 2:69',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/jeremias-compra.webp', alt: 'En el patio de la cárcel de Jerusalén, el profeta Jeremías pesa plata en una balanza delante de su primo Hanameel, mientras Baruc sostiene un documento sellado y unos testigos observan', pie: 'Jeremías compra el campo de Anatot y pesa diecisiete siclos de plata (Jer 32:9-12).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jer/32/9-12', ref: 'Jeremías 32:9-12' },
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
        { tipo: 'imagen', titulo: 'Foto', src: 'img/foto-denario.jpg', alt: 'Denario de plata del emperador Tiberio, con su retrato de perfil en el anverso y la figura de una mujer sentada en el reverso', pie: 'Denario de Tiberio, emperador en tiempos del ministerio de Jesús.', origen: 'foto', licencia: 'por verificar', completa: true },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/obreros-vina.webp', alt: 'Al atardecer, junto a una viña de Judea, un mayordomo entrega un denario de plata a cada uno de los jornaleros cansados que hacen fila', pie: '«Recibieron cada uno un denario» (Mt 20:9).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/22/17-21', ref: 'Mateo 22:17-21' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@zac/11/12-13', ref: 'Zacarías 11:12-13' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mr/12/41-44', ref: 'Marcos 12:41-44' }
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
