/* Pesos, medidas, monedas y horas bíblicas · ruta IV. El tiempo (ver encabezado en parte1.js) */
(() => {
  const tiempo = [
    {
      id: 'dia', n: 'El día bíblico: de tarde a tarde', ref: 'Génesis 1:5; Levítico 23:32; Juan 11:9',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dia.svg', alt: 'Comparación entre el día bíblico, que empieza al ponerse el sol, y el día moderno, que empieza a medianoche; el sábado judío va del viernes al atardecer al sábado al atardecer', pie: 'El día bíblico empieza al ponerse el sol.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/3-5', ref: 'Génesis 1:3-5' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mr/13/33-37', ref: 'Marcos 13:33-37' }
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
