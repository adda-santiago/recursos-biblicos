/* ==========================================================
   Recursos Bíblicos — Pactos y dispensaciones · contenido de las rutas
   FUENTE de public/apps/pactos-y-dispensaciones/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/pactos_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica, sin nombrarla.
   El contenido de la ley de Moisés va en La ley de Moisés; los eventos del fin, en Los últimos tiempos;
   la tierra prometida, en La tierra de Israel. Aquí se tratan como pactos y como etapas del plan de Dios.
   ========================================================== */
(() => {
  /* ---------------- I. ¿Qué es un pacto? ---------------- */
  const pacto = [
    {
      id: 'dios-pactos', n: 'Un Dios que hace pactos', ref: 'Génesis 6:18; Deuteronomio 7:9; Salmo 111:9; Lucas 1:72-73',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/abraham-estrellas.webp', alt: 'De noche, fuera de su tienda, Abraham anciano levanta la mirada hacia un cielo cubierto de estrellas sobre las colinas de Canaán', pie: '«Mira ahora los cielos, y cuenta las estrellas» (Génesis 15:5).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las palabras del pacto en la Biblia',
          cab: ['Idioma', 'Palabra', 'Qué significa', 'Ejemplo'],
          filas: [
            ['Hebreo', 'berit', 'Compromiso solemne que une a dos partes, con promesas y obligaciones', 'Gn 6:18; 15:18; Jer 31:31'],
            ['Hebreo', 'karat berit', '«Cortar un pacto»: se sellaba con un sacrificio', 'Gn 15:18; Jer 34:18'],
            ['Griego', 'diathéke', 'Disposición que establece una parte; también «testamento»', 'Lc 22:20; Gá 3:17; He 9:15-17'],
            ['Español', 'pacto, testamento', 'La RV 1960 usa casi siempre «pacto»; «Antiguo» y «Nuevo Testamento» vienen de la misma palabra', '2 Co 3:6, 14']
          ],
          nota: 'La palabra «pacto» aparece más de 280 veces en la Biblia, desde Noé hasta Apocalipsis.'
        } }
      ],
      texto: [
        'La primera vez que la Biblia usa la palabra pacto, Dios está hablando con Noé antes del diluvio: «Mas estableceré mi pacto contigo» (Gn 6:18). Desde ahí, la palabra recorre toda la Escritura. Dios hace pacto con Noé, con Abraham, con Israel en el Sinaí, con David, y anuncia por medio de Jeremías un nuevo pacto. Jesús levanta la copa en la última cena y dice que es «el nuevo pacto en mi sangre» (Lc 22:20). Hasta el nombre de las dos partes de la Biblia, Antiguo y Nuevo Testamento, viene de la palabra pacto.',
        { h: 'Qué es un pacto' },
        'Un pacto es un compromiso solemne que une a dos partes. Tiene promesas, puede tener obligaciones, se confirma con un juramento o un sacrificio, y a menudo lleva una señal visible que lo recuerda. No es un simple contrato comercial, en el que cada uno da algo a cambio de otra cosa: es una relación con lealtad de por medio. Por eso la Biblia compara el pacto de Dios con Israel con un matrimonio (Jer 31:32).',
        'Lo extraordinario es que sea Dios quien hace pactos. Nadie lo obliga. Él toma la iniciativa, se compromete con su propia palabra y se ata a sí mismo con promesas. Moisés lo resume así: «Conoce, pues, que Jehová tu Dios es Dios, Dios fiel, que guarda el pacto y la misericordia a los que le aman y guardan sus mandamientos, hasta mil generaciones» (Dt 7:9).',
        { h: 'Por qué estudiar los pactos' },
        'Los pactos son la columna vertebral de la historia bíblica. Ordenan la relación de Dios con la humanidad, con Israel y con la iglesia, y explican por qué unas promesas ya se cumplieron, otras se cumplen hoy en Cristo y otras esperan su cumplimiento futuro. Cuando Zacarías, el padre de Juan el Bautista, alaba a Dios por el nacimiento del Mesías, dice que Dios vino «Para hacer misericordia con nuestros padres, Y acordarse de su santo pacto» (Lc 1:72).',
        'Este recurso tiene cuatro rutas y un taller. La primera explica qué es un pacto. La segunda recorre los pactos de Dios uno por uno. La tercera muestra cómo se cumplen en Cristo. La cuarta estudia las dispensaciones, las etapas en que Dios ha administrado su plan. El taller aplica todo a pasajes que suelen leerse fuera de su pacto.',
        { ejercicio: {
          pregunta: '¿Qué distingue un pacto bíblico de un simple contrato?',
          opciones: [
            { t: 'Que en un pacto cada parte paga exactamente lo que recibe.', ok: false, por_que: 'Eso describe un contrato comercial. En los pactos bíblicos Dios da mucho más de lo que recibe.' },
            { t: 'Que es una relación de lealtad, con promesas, juramento y a menudo una señal, en la que Dios toma la iniciativa.', ok: true, por_que: 'Dios se compromete por su propia voluntad y se ata a su palabra; por eso la Biblia lo compara con un matrimonio.' },
            { t: 'Que un pacto nunca tiene obligaciones para las personas.', ok: false, por_que: 'Algunos pactos tienen obligaciones, como el del Sinaí. Lo propio del pacto es la relación de lealtad, no la ausencia de obligaciones.' }
          ],
          explicacion: 'Un pacto es una relación que Dios establece y garantiza con su propia fidelidad.'
        } }
      ],
      pensar: 'Dios se ató a sí mismo con promesas que nadie le exigió. ¿Qué te dice eso de la clase de relación que Él quiere tener contigo?'
    },
    {
      id: 'mundo-antiguo', n: 'Cómo se hacía un pacto en el mundo antiguo', ref: 'Génesis 15:9-18; Jeremías 34:18-19; Éxodo 24:3-8; 20:1-17',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-tratado.svg', alt: 'Seis bloques de un tratado de vasallaje antiguo, del preámbulo a las bendiciones y maldiciones, puestos junto a los pasajes de Éxodo y Deuteronomio que siguen el mismo orden', pie: 'Las partes de un tratado antiguo y su eco en el pacto del Sinaí.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/tratado-kadesh.jpg', alt: 'Tablilla de arcilla cubierta de escritura cuneiforme con el tratado de paz entre el rey hitita Hattusili III y el faraón Ramsés II', pie: 'El tratado entre hititas y egipcios (hacia 1259 a.C.), en acadio. Museo del Antiguo Oriente, Estambul.', origen: 'foto', licencia: 'Foto: Osama Shukir Muhammed Amin (2018), CC BY-SA 4.0, vía Wikimedia Commons' }
      ],
      texto: [
        'Dios habló a su pueblo en formas que ellos conocían. En el mundo antiguo, los pactos eran parte de la vida diaria: entre vecinos, entre familias y, sobre todo, entre reyes. Los arqueólogos han encontrado decenas de tratados de los hititas, los asirios y otros pueblos, escritos en tablillas de arcilla. Al compararlos con la Biblia, se ve que el pacto de Dios con Israel usa una estructura que cualquier persona de la época reconocía.',
        { h: 'El tratado entre un gran rey y su vasallo' },
        'El tipo más conocido es el tratado de vasallaje: un gran rey se comprometía a proteger a un rey menor, y este le debía lealtad exclusiva. El esquema muestra sus partes: un preámbulo que presenta al gran rey; una historia de lo que el rey ya había hecho por el vasallo; las obligaciones; la orden de guardar el documento y leerlo en público; los testigos; y las bendiciones por cumplir y las maldiciones por romper el pacto.',
        'El paralelo con la Biblia es claro. Los Diez Mandamientos comienzan con un preámbulo y una historia: «Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre» (Éx 20:2). Recién después vienen las obligaciones. Las tablas se guardaban en el arca, el libro se leía al pueblo, y Deuteronomio termina con bendiciones y maldiciones (Dt 28) y con los cielos y la tierra como testigos (Dt 30:19). Israel no obedecía para ser rescatado: obedecía porque ya había sido rescatado.',
        { h: 'Cortar un pacto' },
        'En hebreo, hacer un pacto se dice «cortar un pacto». Las partes partían animales por la mitad y caminaban entre las mitades, como diciendo: que me pase lo mismo si no cumplo. Jeremías lo recuerda cuando Dios acusa a los que traspasaron su pacto «dividiendo en dos partes el becerro y pasando por medio de ellas» (Jer 34:18). Esa ceremonia está detrás de una de las escenas más importantes de la Biblia, en Génesis 15, que se estudia en la ruta II.',
        'Los pactos también se sellaban con sangre. En el Sinaí, Moisés roció la sangre de los sacrificios sobre el altar y sobre el pueblo, y dijo: «He aquí la sangre del pacto que Jehová ha hecho con vosotros sobre todas estas cosas» (Éx 24:8). Jesús usó casi las mismas palabras en la última cena.',
        { ejercicio: {
          pregunta: 'Los Diez Mandamientos comienzan recordando la salida de Egipto. ¿Qué enseña ese orden?',
          opciones: [
            { t: 'Que Israel debía obedecer para que Dios lo sacara de Egipto.', ok: false, por_que: 'La liberación ya había ocurrido cuando se dio la ley. La obediencia era respuesta, no condición del rescate.' },
            { t: 'Que la obediencia de Israel era la respuesta a lo que Dios ya había hecho por ellos.', ok: true, por_que: 'Como en los tratados antiguos, primero se recuerda el favor del rey y después vienen las obligaciones.' },
            { t: 'Que la historia de Egipto no tiene relación con los mandamientos.', ok: false, por_que: 'El prólogo histórico es la base del pacto: Dios pide lealtad a quien ya rescató.' }
          ],
          explicacion: 'En el pacto, la gracia va primero y la obediencia la sigue.'
        } }
      ],
      pensar: 'Dios le recordó a Israel lo que había hecho por ellos antes de darles sus mandamientos. ¿Qué ha hecho Dios por ti que hoy motiva tu obediencia?'
    },
    {
      id: 'partes', n: 'Las partes de un pacto', ref: 'Génesis 9:12-17; 17:9-11; Éxodo 31:13-17; Hebreos 6:13-18; 1 Corintios 11:25',
      visual: [
        { tipo: 'tabla', titulo: 'Señales', tabla: {
          titulo: 'Los pactos de Dios y sus señales',
          cab: ['Pacto', 'Señal', 'Qué recuerda', 'Pasaje'],
          filas: [
            ['Noé', 'El arco iris', 'Dios no destruirá la tierra con un diluvio', 'Gn 9:12-17'],
            ['Abraham', 'La circuncisión', 'Una descendencia apartada para Dios', 'Gn 17:9-11'],
            ['Sinaí', 'El día de reposo', 'Jehová santifica a su pueblo', 'Éx 31:13-17'],
            ['Nuevo pacto', 'La copa de la Cena del Señor', 'La sangre de Cristo derramada por nosotros', '1 Co 11:25']
          ],
          nota: 'La señal no es el pacto: lo recuerda y lo hace visible.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/6/13-18', ref: 'Hebreos 6:13-18' }
      ],
      texto: [
        'Aunque cada pacto de la Biblia es distinto, casi todos tienen los mismos elementos. Reconocerlos ayuda a leer cada pacto con orden y a no confundirlos entre sí.',
        { h: 'Partes, promesas y obligaciones' },
        'Primero están las partes: quién hace el pacto y con quién. Dios hace pacto con Noé y con toda la tierra, con Abraham y su descendencia, con la nación de Israel, con la casa de David. Saber con quién se hizo un pacto evita aplicar a uno lo que se prometió a otro. Después están las promesas, lo que Dios se compromete a hacer, y en algunos pactos las obligaciones, lo que se espera de la otra parte.',
        { h: 'Juramento y sangre' },
        'Muchos pactos se confirman con un juramento. Hebreos explica que, cuando Dios prometió a Abraham, «no pudiendo jurar por otro mayor, juró por sí mismo» (He 6:13). Dios no necesita jurar para decir la verdad, pero lo hizo para darnos seguridad: hay «dos cosas inmutables, en las cuales es imposible que Dios mienta» (He 6:18), su promesa y su juramento.',
        'Otros pactos se sellan con sangre. La sangre representa una vida entregada y muestra la seriedad del compromiso. En el Sinaí fue la sangre de animales; en el nuevo pacto, la sangre de Cristo.',
        { h: 'La señal' },
        'Por último, muchos pactos tienen una señal visible. La tabla las reúne. El arco iris recuerda la promesa a Noé; la circuncisión marcaba a la descendencia de Abraham; el día de reposo era la señal entre Dios e Israel en el pacto del Sinaí; y la copa de la Cena del Señor recuerda el nuevo pacto. Cada señal pertenece a su pacto. Este detalle será importante en el taller práctico, al estudiar el día de reposo.',
        { ejercicio: {
          pregunta: '¿Por qué juró Dios a Abraham, si Él siempre dice la verdad?',
          opciones: [
            { t: 'Porque sin juramento su promesa no tendría valor.', ok: false, por_que: 'La palabra de Dios es verdadera siempre. El juramento no la vuelve más cierta.' },
            { t: 'Para dar a los herederos de la promesa una seguridad todavía mayor.', ok: true, por_que: 'Hebreos 6:17-18 dice que Dios interpuso juramento para que tengamos un fortísimo consuelo.' },
            { t: 'Porque Abraham dudaba y había que convencerlo.', ok: false, por_que: 'Hebreos no da ese motivo: el juramento es para consuelo de todos los herederos de la promesa.' }
          ],
          explicacion: 'Dios se compromete con palabra y juramento para que su pueblo descanse en su fidelidad.'
        } }
      ],
      pensar: 'Hebreos dice que la promesa y el juramento de Dios nos dan un «fortísimo consuelo» (He 6:18). ¿En qué situación de tu vida necesitas descansar hoy en la fidelidad de Dios?'
    },
    {
      id: 'condicionales', n: 'Incondicionales y condicionales', ref: 'Génesis 15:17-18; Éxodo 19:5-6; Levítico 26:40-45; Jeremías 31:35-37; Romanos 11:29',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos clases de pactos',
          cab: ['', 'Pactos de promesa (incondicionales)', 'Pacto de la ley (condicional)'],
          filas: [
            ['Cuáles son', 'Noé, Abraham, la tierra, David y el nuevo pacto', 'El pacto del Sinaí'],
            ['Cómo se expresa', '«Yo haré», «yo daré», «yo estableceré»', '«Si diereis oído a mi voz… vosotros seréis»'],
            ['De qué depende', 'De la fidelidad de Dios', 'De la obediencia de Israel'],
            ['Si el pueblo falla', 'Dios disciplina a esa generación, pero la promesa sigue en pie', 'Vienen las maldiciones del pacto'],
            ['Pasajes', 'Gn 15:17-18; 2 S 7:14-16; Jer 31:35-37', 'Éx 19:5-6; Dt 28']
          ],
          nota: 'En los pactos de promesa, la obediencia determina quién disfruta las bendiciones en cada generación, no si Dios cumplirá.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jer/31/35-37', ref: 'Jeremías 31:35-37' }
      ],
      texto: [
        'Al leer los pactos de la Biblia se nota una diferencia importante. En algunos, Dios habla solo en primera persona: yo haré, yo daré, yo estableceré. En otros aparece una condición: si ustedes obedecen, entonces. Por eso muchos maestros distinguen entre pactos incondicionales, o de promesa, y pactos condicionales.',
        { h: 'Los pactos de promesa' },
        'El pacto con Abraham es el ejemplo más claro. En la ceremonia de Génesis 15, solo Dios pasa entre los animales partidos; Abraham está dormido. El cumplimiento depende de Dios. Lo mismo ocurre con el pacto con David: si sus hijos pecan, Dios los castigará, «pero mi misericordia no se apartará de él» (2 S 7:15). Y por medio de Jeremías, Dios dice que Israel dejaría de ser nación delante de Él solo si faltaran las leyes del sol, de la luna y de las estrellas (Jer 31:35-36).',
        { h: 'El pacto condicional' },
        'El pacto del Sinaí, en cambio, comienza con una condición: «si diereis oído a mi voz, y guardareis mi pacto, vosotros seréis mi especial tesoro» (Éx 19:5). Tiene bendiciones por obedecer y maldiciones por desobedecer, y la historia de Israel muestra que el pueblo lo quebrantó una y otra vez (Jer 11:10). Aun así, en medio de las maldiciones, Dios dice que no desechará a su pueblo, porque se acordará del pacto con sus padres (Lv 26:42-45).',
        { posturas: {
          titulo: '¿Dependen de la obediencia de Israel las promesas a Israel?',
          a: { n: 'Sí: las promesas se perdieron o pasaron a la iglesia', t: 'Algunos sostienen que todos los pactos tenían condiciones implícitas y que, al rechazar Israel a su Mesías, las promesas nacionales quedaron anuladas o se cumplen ahora solo en la iglesia.' },
          b: { n: 'No: Dios cumplirá lo que prometió', t: 'Las promesas a Abraham y a David se confirmaron con juramento y no dependen de Israel. La desobediencia trae disciplina sobre cada generación, pero no anula la promesa: «irrevocables son los dones y el llamamiento de Dios» (Ro 11:29).' },
          c: 'Este estudio sigue la segunda lectura, que respeta la diferencia entre las palabras «yo haré» y «si obedecéis». Una generación desobediente perdía el disfrute de la bendición, como la que murió en el desierto, pero la promesa pasaba intacta a la siguiente. La ruta III vuelve sobre Israel y la iglesia.'
        } },
        { ejercicio: {
          pregunta: '¿Qué indica, en el texto de un pacto, que es condicional?',
          opciones: [
            { t: 'Que menciona a Dios.', ok: false, por_que: 'Todos los pactos bíblicos mencionan a Dios; eso no los distingue.' },
            { t: 'Que su cumplimiento depende de un «si» dirigido a la otra parte.', ok: true, por_que: 'El pacto del Sinaí dice «si diereis oído a mi voz»; los de promesa dicen «yo haré».' },
            { t: 'Que tiene una señal visible.', ok: false, por_que: 'Tanto los pactos de promesa como el condicional tienen señales.' }
          ],
          explicacion: 'La forma del pacto, «yo haré» o «si obedecéis», muestra de quién depende su cumplimiento.'
        } }
      ],
      pensar: 'Dios disciplinó a Israel muchas veces, pero nunca rompió su promesa. ¿Cómo te ayuda esto a entender la disciplina de Dios en tu propia vida?'
    },
    {
      id: 'entre-personas', n: 'Pactos entre personas', ref: 'Génesis 21:22-32; 1 Samuel 18:1-4; 20:14-17; 2 Samuel 9:1-7; Malaquías 2:14',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pactos humanos en la Biblia',
          cab: ['Pacto', 'Qué se comprometieron', 'Pasaje'],
          filas: [
            ['Abraham y Abimelec', 'Paz entre vecinos y derecho al pozo de Beerseba', 'Gn 21:22-32'],
            ['Jacob y Labán', 'No cruzar el majano para hacerse daño', 'Gn 31:44-54'],
            ['Josué y los gabaonitas', 'Respetar su vida, aunque el pacto se hizo con engaño', 'Jos 9:15-20'],
            ['Jonatán y David', 'Amistad leal, también con sus descendientes', '1 S 18:3; 20:14-17'],
            ['El matrimonio', 'Fidelidad entre esposo y esposa delante de Dios', 'Pr 2:17; Mal 2:14']
          ],
          nota: 'Los pactos humanos ayudan a entender los de Dios: la palabra dada obliga, aunque cueste.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2s/9/1-7', ref: '2 Samuel 9:1-7' }
      ],
      texto: [
        'No todos los pactos de la Biblia son entre Dios y las personas. Muchos son entre personas, y ayudan a entender qué significaba para un israelita la palabra pacto.',
        { h: 'Vecinos, familias y naciones' },
        'Abraham hizo pacto con Abimelec, rey de Gerar, para vivir en paz y asegurar su derecho al pozo de Beerseba: «Y tomó Abraham ovejas y vacas, y dio a Abimelec; e hicieron ambos pacto» (Gn 21:27). Jacob y Labán levantaron un montón de piedras como testigo de que ninguno cruzaría para dañar al otro (Gn 31:44-54). Y cuando los gabaonitas engañaron a Josué para obtener un pacto, Israel lo respetó igual, porque se había jurado en el nombre de Jehová (Jos 9:19-20). Siglos después, Saúl lo quebrantó y Dios lo juzgó (2 S 21:1-2). Un pacto obligaba aunque costara.',
        { h: 'Jonatán y David' },
        'El ejemplo más hermoso es el pacto entre Jonatán y David: «E hicieron pacto Jonatán y David, porque él le amaba como a sí mismo» (1 S 18:3). Jonatán le pidió a David que no quitara su misericordia de su casa para siempre (1 S 20:14-15). Años después, cuando David ya era rey, preguntó si quedaba alguien de la casa de Saúl para hacerle misericordia por amor de Jonatán. Así encontró a Mefi-boset, hijo de Jonatán, cojo de los pies, y lo sentó a su mesa como uno de sus hijos (2 S 9:1-13). Mefi-boset no había hecho nada para merecerlo: recibió la bondad por causa de un pacto hecho antes de él.',
        { h: 'El matrimonio' },
        'La Biblia también llama pacto al matrimonio. Malaquías reprende a los hombres que abandonaban a sus esposas, y les recuerda que Dios fue testigo «entre ti y la mujer de tu juventud, contra la cual has sido desleal, siendo ella tu compañera, y la mujer de tu pacto» (Mal 2:14). Por eso los profetas describen la infidelidad de Israel como un adulterio contra Dios, y la fidelidad de Dios como la de un esposo que no abandona.',
        { ejercicio: {
          pregunta: '¿Qué enseña la historia de Mefi-boset sobre los pactos?',
          opciones: [
            { t: 'Que la bondad se recibe según los méritos de cada uno.', ok: false, por_que: 'Mefi-boset no tenía méritos: era nieto del enemigo de David y estaba lisiado.' },
            { t: 'Que alguien puede recibir bondad por causa de un pacto hecho por otro antes que él.', ok: true, por_que: 'David honró el pacto con Jonatán en su hijo; así Dios bendice a los suyos por causa del pacto hecho en Cristo.' },
            { t: 'Que los pactos se terminaban al morir quien los había hecho.', ok: false, por_que: 'El pacto de Jonatán incluía a su descendencia, y David lo cumplió después de la muerte de Jonatán.' }
          ],
          explicacion: 'Un pacto puede alcanzar a quienes no estuvieron presentes cuando se hizo.'
        } }
      ],
      pensar: 'Mefi-boset comió a la mesa del rey por un pacto que él no había hecho. ¿Qué paralelo encuentras con tu lugar en la mesa del Señor?'
    }
  ];

  /* ---------------- II. Los pactos de Dios (1-5) ---------------- */
  const pactos = [
    {
      id: 'eden', n: 'En el Edén', ref: 'Génesis 1:26-28; 2:15-17; 3:14-21; Oseas 6:7; Romanos 5:12-21',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/eden-salida.webp', alt: 'Adán y Eva, vestidos con túnicas de piel, caminan con la cabeza baja fuera del huerto de Edén, mientras detrás de ellos una luz como espada encendida guarda la entrada entre los árboles', pie: '«Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió» (Génesis 3:21).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/3/14-21', ref: 'Génesis 3:14-21' }
      ],
      texto: [
        'La historia de la relación de Dios con la humanidad comienza en el huerto. Dios creó al hombre y a la mujer a su imagen, los bendijo y les encargó llenar la tierra, sojuzgarla y señorear sobre los animales (Gn 1:26-28). Los puso en el huerto de Edén «para que lo labrara y lo guardase» (Gn 2:15), y les dio un solo mandamiento: no comer del árbol de la ciencia del bien y del mal, «porque el día que de él comieres, ciertamente morirás» (Gn 2:17).',
        'Génesis no usa la palabra pacto en estos capítulos, pero hay una relación establecida por Dios, con un encargo, un mandamiento y una consecuencia. Por eso muchos maestros hablan de un pacto edénico antes de la caída.',
        { posturas: {
          titulo: '¿Hubo un pacto en el Edén?',
          a: { n: 'Un «pacto de obras»', t: 'La teología reformada enseña que Dios hizo con Adán un pacto de obras: vida eterna por la obediencia perfecta, muerte por la desobediencia. Se apoya en «Mas ellos, cual Adán, traspasaron el pacto» (Os 6:7), y en el paralelo entre Adán y Cristo de Romanos 5:12-21.' },
          b: { n: 'Una relación sin nombre de pacto', t: 'Otros señalan que Génesis no dice pacto, y que la expresión de Oseas 6:7 puede traducirse como hombres o referirse a la ciudad de Adam junto al Jordán (Jos 3:16), donde Israel habría pecado. Prefieren hablar de la relación de Dios con Adán sin darle forma de pacto.' },
          c: 'Las dos lecturas coinciden en lo esencial: Dios puso a Adán bajo un mandamiento, Adán desobedeció y su caída alcanzó a toda la humanidad (Ro 5:12). La enseñanza dispensacional clásica llama a esta etapa la dispensación de la inocencia y habla de un pacto edénico, antes de la caída, y uno adámico, después.'
        } },
        { h: 'Una promesa después de la caída' },
        'Después de la desobediencia, Dios anunció las consecuencias: dolor en el parto, una tierra que daría espinos y cardos, trabajo con el sudor del rostro y la muerte (Gn 3:16-19). Esas condiciones siguen hasta hoy. Pero en medio del juicio dio una promesa. A la serpiente le dijo: «Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar» (Gn 3:15).',
        'Los cristianos llaman a este versículo el protoevangelio, el primer anuncio del evangelio. Un descendiente de la mujer vencería a la serpiente, aunque saldría herido. Pablo lo ve cumplido en Cristo y en su iglesia: «el Dios de paz aplastará en breve a Satanás bajo vuestros pies» (Ro 16:20). Y antes de sacarlos del huerto, Dios mismo los vistió con túnicas de pieles. Desde el principio, la gracia acompañó al juicio.',
        { ejercicio: {
          pregunta: '¿Por qué se llama protoevangelio a Génesis 3:15?',
          opciones: [
            { t: 'Porque es el primer versículo que habla del pecado.', ok: false, por_que: 'El pecado ya se narra antes, en Génesis 3:6. Lo nuevo del versículo 15 es la promesa.' },
            { t: 'Porque anuncia que un descendiente de la mujer vencería a la serpiente.', ok: true, por_que: 'Es la primera promesa de redención, cumplida en Cristo, que venció a Satanás en la cruz.' },
            { t: 'Porque explica por qué existen las serpientes venenosas.', ok: false, por_que: 'El versículo habla de la serpiente que engañó a Eva y de su derrota final, no de zoología.' }
          ],
          explicacion: 'La primera buena noticia de la Biblia se da en el mismo momento del primer juicio.'
        } }
      ],
      pensar: 'Dios anunció la salvación en el mismo momento en que pronunció el juicio por el pecado. ¿Qué te dice eso del corazón de Dios cuando fallamos?'
    },
    {
      id: 'noe', n: 'Noé: la tierra preservada', ref: 'Génesis 8:20–9:17; Isaías 54:9-10; 2 Pedro 3:5-7',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/noe-arco.webp', alt: 'Noé, anciano, de pie junto a un altar de piedras humeante en la ladera de una montaña, levanta la vista hacia un arco iris; su familia y algunos animales lo rodean, y el arca de madera se ve más abajo', pie: '«Mi arco he puesto en las nubes, el cual será por señal del pacto» (Génesis 9:13).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/9/8-17', ref: 'Génesis 9:8-17' }
      ],
      texto: [
        'Después del diluvio, lo primero que hizo Noé fue edificar un altar y ofrecer holocaustos. Dios respondió con una promesa para toda la tierra: «Mientras la tierra permanezca, no cesarán la sementera y la siega, el frío y el calor, el verano y el invierno, y el día y la noche» (Gn 8:22). Luego hizo un pacto con Noé, con sus hijos, con su descendencia y con todo ser viviente.',
        { h: 'Lo que Dios prometió' },
        'La promesa central es sencilla: «no exterminaré ya más toda carne con aguas de diluvio, ni habrá más diluvio para destruir la tierra» (Gn 9:11). Es un pacto universal: no se hace con un pueblo en particular sino con toda la humanidad y aun con los animales. Y es incondicional: Dios no pone ninguna condición para cumplirlo. Isaías lo usa como ejemplo de una promesa firme: así como Dios juró que las aguas de Noé no pasarían más sobre la tierra, así juró no enojarse para siempre con su pueblo (Is 54:9-10).',
        { h: 'Lo que Dios encargó' },
        'Junto a la promesa, Dios renovó el encargo dado a Adán: «Fructificad y multiplicaos, y llenad la tierra» (Gn 9:1). Permitió al hombre comer carne, pero sin su sangre (Gn 9:3-4). Y estableció el valor de la vida humana: «El que derramare sangre de hombre, por el hombre su sangre será derramada; porque a imagen de Dios es hecho el hombre» (Gn 9:6). Muchos ven aquí el comienzo del gobierno humano: Dios encarga a la sociedad castigar el homicidio. Por eso la enseñanza dispensacional llama a esta etapa la dispensación del gobierno humano.',
        { h: 'La señal' },
        'La señal del pacto es el arco iris. Lo notable es que Dios dice que Él mismo lo mirará: «Estará el arco en las nubes, y lo veré, y me acordaré del pacto perpetuo» (Gn 9:16). El arco iris no es solo para que nosotros recordemos; es la señal de que Dios no olvida.',
        'Este pacto sigue vigente. Cada vez que hay siembra y cosecha, invierno y verano, Dios está cumpliendo su palabra a Noé. Pedro aclara que la tierra no será destruida otra vez por agua, pero que está guardada para el fuego en el día del juicio (2 P 3:5-7). La paciencia de Dios con el mundo es tiempo para el arrepentimiento.',
        { ejercicio: {
          pregunta: '¿Con quién hizo Dios el pacto de Génesis 9?',
          opciones: [
            { t: 'Solo con Noé, porque era justo.', ok: false, por_que: 'El texto incluye a sus hijos, a su descendencia y a todo ser viviente (Gn 9:9-10).' },
            { t: 'Con Noé, toda su descendencia y todo ser viviente de la tierra.', ok: true, por_que: 'Es el pacto más amplio de la Biblia: alcanza a toda la humanidad y a los animales.' },
            { t: 'Solo con Israel, el pueblo escogido.', ok: false, por_que: 'Israel no existía todavía. El pacto con Noé es universal.' }
          ],
          explicacion: 'El pacto con Noé es universal e incondicional, y sigue vigente mientras la tierra permanezca.'
        } }
      ],
      pensar: 'Dios dice que Él mismo mira el arco iris para acordarse de su pacto. ¿Qué cosas de la creación te recuerdan hoy la fidelidad de Dios?'
    },
    {
      id: 'abraham-promesas', n: 'Abraham: las promesas', ref: 'Génesis 12:1-7; 13:14-17; 22:15-18; Gálatas 3:8', fecha: -2091,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../tierra-de-israel/img/abraham.webp', alt: 'Abraham, anciano, de pie en una colina rocosa cerca de Betel al atardecer, apoyado en su cayado, mirando sobre los montes y valles de Canaán; sus tiendas y rebaños abajo', pie: '«Alza ahora tus ojos, y mira desde el lugar donde estás» (Génesis 13:14).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Las promesas', tabla: {
          titulo: 'Las tres promesas a Abraham',
          cab: ['Promesa', 'Qué dice', 'Se amplía en', 'Cumplimiento'],
          filas: [
            ['Una tierra', '«a la tierra que te mostraré»', 'El pacto de la tierra (Dt 29–30)', 'Josué, en parte; plenamente en el reino futuro'],
            ['Una descendencia', '«haré de ti una nación grande»', 'El pacto con David (2 S 7)', 'Israel; Cristo, la simiente (Gá 3:16)'],
            ['Una bendición', '«serán benditas en ti todas las familias de la tierra»', 'El nuevo pacto (Jer 31)', 'La salvación de los gentiles en Cristo (Gá 3:8, 14)']
          ],
          nota: 'Los pactos que vienen después desarrollan alguna de estas tres promesas.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/12/1-7', ref: 'Génesis 12:1-7' }
      ],
      texto: [
        'Después de Babel, cuando la humanidad se había dispersado por la tierra, Dios llamó a un hombre. Abram vivía en Harán con su familia, y Dios le dijo: «Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré» (Gn 12:1). Con ese llamado comienza una nueva etapa del plan de Dios: en lugar de tratar con todas las naciones a la vez, Dios forma un pueblo por medio del cual llegará la bendición a todas.',
        { h: 'Tres promesas' },
        'El pacto con Abraham tiene tres promesas, que la tabla resume. La primera es una tierra: Dios le mostró Canaán y le dijo que la daría a su descendencia (Gn 12:7; 13:14-17). La segunda es una descendencia: haría de él una nación grande, numerosa como el polvo de la tierra y como las estrellas del cielo. La tercera es una bendición universal: «Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra» (Gn 12:3).',
        'Estas tres promesas son la semilla de casi todo lo que sigue en la Biblia. Los pactos posteriores las desarrollan: el pacto de la tierra amplía la primera, el pacto con David amplía la segunda, y el nuevo pacto amplía la tercera. Por eso este pacto es el centro de la historia de los pactos.',
        { h: 'El evangelio anunciado a Abraham' },
        'Pablo dice algo asombroso de Génesis 12:3: «Y la Escritura, previendo que Dios había de justificar por la fe a los gentiles, dio de antemano la buena nueva a Abraham, diciendo: En ti serán benditas todas las naciones» (Gá 3:8). La salvación de los gentiles no fue un cambio de planes: estaba prometida desde el principio. Cuando un latinoamericano cree en Cristo, Dios está cumpliendo lo que prometió a Abraham hace cuatro mil años.',
        'La tierra prometida, sus límites y su lugar en el plan de Dios se estudian en otro recurso del sitio.',
        { ir: { t: 'Ver «La promesa a Abraham» en La tierra de Israel', a: '../../tierra-de-israel/#plan/1' } },
        { ejercicio: {
          pregunta: 'Según Gálatas 3:8, ¿qué anunció Dios de antemano a Abraham?',
          opciones: [
            { t: 'Que sus descendientes conquistarían Egipto.', ok: false, por_que: 'El pacto nunca prometió Egipto. La promesa que Pablo cita es la bendición de las naciones.' },
            { t: 'Que Dios justificaría por la fe a los gentiles.', ok: true, por_que: 'Pablo llama a Génesis 12:3 «la buena nueva» dada de antemano a Abraham.' },
            { t: 'Que la ley de Moisés salvaría a todas las naciones.', ok: false, por_que: 'Pablo dice lo contrario: la bendición llega por la fe, no por la ley (Gá 3:11).' }
          ],
          explicacion: 'La bendición de las naciones en Cristo estaba incluida en el pacto con Abraham.'
        } }
      ],
      pensar: 'Dios prometió a Abraham que en él serían benditas todas las familias de la tierra. ¿Cómo has sido tú bendecido por esa promesa, y cómo puedes ser canal de esa bendición para otros?'
    },
    {
      id: 'abraham-ceremonia', n: 'Abraham: la ceremonia de Génesis 15', ref: 'Génesis 15:1-21; Romanos 4:1-5, 18-22', fecha: -2081,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/pacto-animales.webp', alt: 'Al anochecer, en un campo de Canaán, animales partidos por la mitad están puestos en dos filas; entre ellas pasa una antorcha de fuego y un horno humeante, mientras Abraham duerme a un lado, apoyado en una roca', pie: '«Una antorcha de fuego que pasaba por entre los animales divididos» (Génesis 15:17).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/15/1-21', ref: 'Génesis 15' }
      ],
      texto: [
        'Pasaron los años y Abram no tenía hijos. Cuando Dios le dijo que su galardón sería sobremanera grande, Abram respondió con una queja: su heredero sería un siervo de su casa. Entonces Dios lo sacó fuera de la tienda y le dijo: «Mira ahora los cielos, y cuenta las estrellas, si las puedes contar. Y le dijo: Así será tu descendencia» (Gn 15:5).',
        { h: 'Creyó a Jehová' },
        'El versículo siguiente es uno de los más importantes de la Biblia: «Y creyó a Jehová, y le fue contado por justicia» (Gn 15:6). Abram no hizo ninguna obra: creyó la promesa, y Dios lo declaró justo. Pablo construye sobre este versículo toda su enseñanza de la justificación por la fe (Ro 4:3). Lo importante es el orden: Abram fue declarado justo antes de la circuncisión y siglos antes de la ley (Ro 4:10). Así fue siempre la salvación: por gracia, mediante la fe.',
        { h: 'Solo Dios pasó' },
        'Abram preguntó cómo sabría que heredaría la tierra. Dios le mandó traer una becerra, una cabra, un carnero, una tórtola y un palomino. Abram partió los animales por la mitad y puso cada mitad frente a la otra, y espantó las aves de rapiña que bajaban sobre los cuerpos. Era la ceremonia de cortar un pacto, que se vio en la ruta I: las partes pasaban entre los animales partidos, comprometiéndose a sufrir la misma suerte si no cumplían.',
        'Pero esa noche ocurrió algo inesperado. Abram cayó en un sueño profundo, y Dios le anunció que su descendencia sería esclava en tierra ajena por cuatrocientos años y luego volvería. Entonces, «puesto el sol, y ya oscurecido, se veía un horno humeando, y una antorcha de fuego que pasaba por entre los animales divididos» (Gn 15:17). El fuego, señal de la presencia de Dios, pasó solo. Abram no pasó. Dios se comprometió consigo mismo y cargó solo con la responsabilidad del pacto.',
        '«En aquel día hizo Jehová un pacto con Abram, diciendo: A tu descendencia daré esta tierra, desde el río de Egipto hasta el río grande, el río Eufrates» (Gn 15:18). Por eso este pacto es incondicional: su cumplimiento descansa en Dios, que no puede mentir.',
        { ir: { t: 'Ver «Los límites de la tierra» en La tierra de Israel', a: '../../tierra-de-israel/#plan/3' } },
        { ejercicio: {
          pregunta: '¿Qué significa que en Génesis 15 solo pasara entre los animales la antorcha de fuego?',
          opciones: [
            { t: 'Que Abram se negó a participar en la ceremonia.', ok: false, por_que: 'Abram estaba en un sueño profundo que Dios mismo le dio (Gn 15:12).' },
            { t: 'Que Dios asumió solo el compromiso de cumplir el pacto.', ok: true, por_que: 'En la ceremonia, quien pasaba se comprometía. Pasó solo Dios: el pacto depende de Él.' },
            { t: 'Que el pacto se anuló porque faltó una de las partes.', ok: false, por_que: 'El versículo 18 dice que en aquel día Dios hizo el pacto con Abram.' }
          ],
          explicacion: 'El pacto con Abraham descansa en la fidelidad de Dios, no en la de Abraham.'
        } }
      ],
      pensar: 'Abram fue declarado justo por creer la promesa, sin haber hecho ninguna obra. ¿Estás descansando en lo que Dios prometió o en lo que tú puedes hacer?'
    },
    {
      id: 'abraham-herederos', n: 'Abraham: la circuncisión y los herederos', ref: 'Génesis 17:1-21; 22:15-18; 26:2-5; 28:13-15; Hechos 7:8', fecha: -2067,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/17/1-14', ref: 'Génesis 17:1-14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El pacto confirmado a cada generación',
          cab: ['A quién', 'Qué le dijo Dios', 'Pasaje'],
          filas: [
            ['Abraham, a los 99 años', 'Pacto perpetuo, nuevo nombre y la circuncisión como señal', 'Gn 17:1-14'],
            ['Abraham, en el monte Moriah', 'Juramento: «en tu simiente serán benditas todas las naciones»', 'Gn 22:15-18'],
            ['Isaac, no Ismael', '«confirmaré mi pacto con él»', 'Gn 17:19-21; 26:2-5'],
            ['Jacob, no Esaú', 'La tierra y la bendición de las familias de la tierra', 'Gn 28:13-15; 35:11-12'],
            ['Las doce tribus', 'Herederos del pacto de la circuncisión', 'Hch 7:8; Sal 105:8-11']
          ],
          nota: 'Dios elige por qué línea pasa la promesa: Isaac y Jacob, no por mérito, sino por gracia (Ro 9:7-13).'
        } }
      ],
      texto: [
        'Trece años después del nacimiento de Ismael, cuando Abram tenía noventa y nueve años, Dios se le apareció otra vez y confirmó el pacto. Le cambió el nombre: ya no sería Abram, «padre enaltecido», sino Abraham, «padre de muchedumbre de gentes» (Gn 17:5). Y le dio una señal.',
        { h: 'La señal de la circuncisión' },
        '«Este es mi pacto, que guardaréis entre mí y vosotros y tu descendencia después de ti: Será circuncidado todo varón de entre vosotros» (Gn 17:10). La circuncisión se hacía al octavo día, y marcaba en la carne que ese niño pertenecía al pueblo del pacto. Era una señal permanente, «por pacto perpetuo» (Gn 17:13), y quien la despreciaba quedaba fuera del pueblo.',
        'Pero desde el Antiguo Testamento, Dios mostró que la señal externa no bastaba. Moisés dijo: «Circuncidad, pues, el prepucio de vuestro corazón» (Dt 10:16), y prometió que un día Dios mismo circuncidaría el corazón de su pueblo (Dt 30:6). Pablo enseña que la verdadera circuncisión es «la del corazón, en espíritu, no en letra» (Ro 2:29), y que Abraham fue declarado justo antes de ser circuncidado: la señal confirmaba una fe que ya existía (Ro 4:11).',
        { h: 'Los herederos' },
        'El pacto no se heredaba por la sangre de Abraham sin más. Abraham pidió que Ismael viviera delante de Dios, y Dios lo bendijo, pero le respondió: «Sara tu mujer te dará a luz un hijo, y llamarás su nombre Isaac; y confirmaré mi pacto con él como pacto perpetuo» (Gn 17:19). Lo mismo ocurrió en la generación siguiente: la promesa pasó a Jacob, no a Esaú (Gn 28:13-15).',
        'Después de que Abraham estuvo dispuesto a ofrecer a Isaac en el monte Moriah, Dios le juró por sí mismo que lo bendeciría y que en su simiente serían benditas todas las naciones (Gn 22:16-18). Ese juramento es el que cita Hebreos 6. Siglos después, el salmista celebra que Dios «Se acordó para siempre de su pacto» (Sal 105:8), el que hizo con Abraham, juró a Isaac y estableció a Jacob.',
        { ejercicio: {
          pregunta: 'Según Pablo en Romanos 4, ¿cuándo fue declarado justo Abraham?',
          opciones: [
            { t: 'Después de circuncidarse, como recompensa por obedecer.', ok: false, por_que: 'Pablo dice lo contrario: fue declarado justo estando aún incircunciso (Ro 4:10).' },
            { t: 'Antes de la circuncisión, cuando creyó la promesa.', ok: true, por_que: 'Génesis 15:6 ocurre años antes de Génesis 17. La circuncisión fue sello de una justicia que ya tenía por la fe.' },
            { t: 'Cuando recibió la ley en el Sinaí.', ok: false, por_que: 'Abraham vivió siglos antes de la ley de Moisés.' }
          ],
          explicacion: 'La señal del pacto confirmaba una fe que ya existía; no producía la justicia.'
        } }
      ],
      pensar: 'Dios pedía una circuncisión del corazón, no solo de la carne. ¿Hay prácticas religiosas en tu vida que se han vuelto solo externas?'
    }
  ];

  window.__PACTOS = { pacto, pactos };
})();
