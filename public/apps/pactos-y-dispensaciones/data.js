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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque cuando Dios hizo la promesa a Abraham, no pudiendo jurar por otro mayor, juró por sí mismo, diciendo: De cierto te bendeciré con abundancia y te multiplicaré grandemente. Y habiendo esperado con paciencia, alcanzó la promesa. Porque los hombres ciertamente juran por uno mayor que ellos, y para ellos el fin de toda controversia es el juramento para confirmación. Por lo cual, queriendo Dios mostrar más abundantemente a los herederos de la promesa la inmutabilidad de su consejo, interpuso juramento; para que por dos cosas inmutables, en las cuales es imposible que Dios mienta, tengamos un fortísimo consuelo los que hemos acudido para asirnos de la esperanza puesta delante de nosotros.', ref: 'Hebreos 6:13-18' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Así ha dicho Jehová, que da el sol para luz del día, las leyes de la luna y de las estrellas para luz de la noche, que parte el mar, y braman sus ondas; Jehová de los ejércitos es su nombre: Si faltaren estas leyes delante de mí, dice Jehová, también la descendencia de Israel faltará para no ser nación delante de mí eternamente. Así ha dicho Jehová: Si los cielos arriba se pueden medir, y explorarse abajo los fundamentos de la tierra, también yo desecharé toda la descendencia de Israel por todo lo que hicieron, dice Jehová.', ref: 'Jeremías 31:35-37' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo David: ¿Ha quedado alguno de la casa de Saúl, a quien haga yo misericordia por amor de Jonatán? Y había un siervo de la casa de Saúl, que se llamaba Siba, al cual llamaron para que viniese a David. Y el rey le dijo: ¿Eres tú Siba? Y él respondió: Tu siervo. El rey le dijo: ¿No ha quedado nadie de la casa de Saúl, a quien haga yo misericordia de Dios? Y Siba respondió al rey: Aún ha quedado un hijo de Jonatán, lisiado de los pies. Entonces el rey le preguntó: ¿Dónde está? Y Siba respondió al rey: He aquí, está en casa de Maquir hijo de Amiel, en Lodebar. Entonces envió el rey David, y le trajo de la casa de Maquir hijo de Amiel, de Lodebar. Y vino Mefi-boset, hijo de Jonatán hijo de Saúl, a David, y se postró sobre su rostro e hizo reverencia. Y dijo David: Mefi-boset. Y él respondió: He aquí tu siervo. Y le dijo David: No tengas temor, porque yo a la verdad haré contigo misericordia por amor de Jonatán tu padre, y te devolveré todas las tierras de Saúl tu padre; y tú comerás siempre a mi mesa.', ref: '2 Samuel 9:1-7' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Jehová Dios dijo a la serpiente: Por cuanto esto hiciste, maldita serás entre todas las bestias y entre todos los animales del campo; sobre tu pecho andarás, y polvo comerás todos los días de tu vida. Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar. A la mujer dijo: Multiplicaré en gran manera los dolores en tus preñeces; con dolor darás a luz los hijos; y tu deseo será para tu marido, y él se enseñoreará de ti. Y al hombre dijo: Por cuanto obedeciste a la voz de tu mujer, y comiste del árbol de que te mandé diciendo: No comerás de él; maldita será la tierra por tu causa; con dolor comerás de ella todos los días de tu vida. Espinos y cardos te producirá, y comerás plantas del campo. Con el sudor de tu rostro comerás el pan hasta que vuelvas a la tierra, porque de ella fuiste tomado; pues polvo eres, y al polvo volverás. Y llamó Adán el nombre de su mujer, Eva, por cuanto ella era madre de todos los vivientes. Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió.', ref: 'Génesis 3:14-21' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y habló Dios a Noé y a sus hijos con él, diciendo: He aquí que yo establezco mi pacto con vosotros, y con vuestros descendientes después de vosotros; y con todo ser viviente que está con vosotros; aves, animales y toda bestia de la tierra que está con vosotros, desde todos los que salieron del arca hasta todo animal de la tierra. Estableceré mi pacto con vosotros, y no exterminaré ya más toda carne con aguas de diluvio, ni habrá más diluvio para destruir la tierra. Y dijo Dios: Esta es la señal del pacto que yo establezco entre mí y vosotros y todo ser viviente que está con vosotros, por siglos perpetuos: Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra. Y sucederá que cuando haga venir nubes sobre la tierra, se dejará ver entonces mi arco en las nubes. Y me acordaré del pacto mío, que hay entre mí y vosotros y todo ser viviente de toda carne; y no habrá más diluvio de aguas para destruir toda carne. Estará el arco en las nubes, y lo veré, y me acordaré del pacto perpetuo entre Dios y todo ser viviente, con toda carne que hay sobre la tierra. Dijo, pues, Dios a Noé: Esta es la señal del pacto que he establecido entre mí y toda carne que está sobre la tierra.', ref: 'Génesis 9:8-17' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré. Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición. Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra. Y se fue Abram, como Jehová le dijo; y Lot fue con él. Y era Abram de edad de setenta y cinco años cuando salió de Harán. Tomó, pues, Abram a Sarai su mujer, y a Lot hijo de su hermano, y todos sus bienes que habían ganado y las personas que habían adquirido en Harán, y salieron para ir a tierra de Canaán; y a tierra de Canaán llegaron. Y pasó Abram por aquella tierra hasta el lugar de Siquem, hasta el encino de More; y el cananeo estaba entonces en la tierra. Y apareció Jehová a Abram, y le dijo: A tu descendencia daré esta tierra. Y edificó allí un altar a Jehová, quien le había aparecido.', ref: 'Génesis 12:1-7' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Después de estas cosas vino la palabra de Jehová a Abram en visión, diciendo: No temas, Abram; yo soy tu escudo, y tu galardón será sobremanera grande. Y respondió Abram: Señor Jehová, ¿qué me darás, siendo así que ando sin hijo, y el mayordomo de mi casa es ese damasceno Eliezer? Dijo también Abram: Mira que no me has dado prole, y he aquí que será mi heredero un esclavo nacido en mi casa. Luego vino a él palabra de Jehová, diciendo: No te heredará éste, sino un hijo tuyo será el que te heredará. Y lo llevó fuera, y le dijo: Mira ahora los cielos, y cuenta las estrellas, si las puedes contar. Y le dijo: Así será tu descendencia. Y creyó a Jehová, y le fue contado por justicia. Y le dijo: Yo soy Jehová, que te saqué de Ur de los caldeos, para darte a heredar esta tierra. Y él respondió: Señor Jehová, ¿en qué conoceré que la he de heredar? Y le dijo: Tráeme una becerra de tres años, y una cabra de tres años, y un carnero de tres años, una tórtola también, y un palomino. Y tomó él todo esto, y los partió por la mitad, y puso cada mitad una enfrente de la otra; mas no partió las aves. Y descendían aves de rapiña sobre los cuerpos muertos, y Abram las ahuyentaba. Mas a la caída del sol sobrecogió el sueño a Abram, y he aquí que el temor de una grande oscuridad cayó sobre él. Entonces Jehová dijo a Abram: Ten por cierto que tu descendencia morará en tierra ajena, y será esclava allí, y será oprimida cuatrocientos años. Mas también a la nación a la cual servirán, juzgaré yo; y después de esto saldrán con gran riqueza. Y tú vendrás a tus padres en paz, y serás sepultado en buena vejez. Y en la cuarta generación volverán acá; porque aún no ha llegado a su colmo la maldad del amorreo hasta aquí. Y sucedió que puesto el sol, y ya oscurecido, se veía un horno humeando, y una antorcha de fuego que pasaba por entre los animales divididos. En aquel día hizo Jehová un pacto con Abram, diciendo: A tu descendencia daré esta tierra, desde el río de Egipto hasta el río grande, el río Eufrates; la tierra de los ceneos, los cenezeos, los admoneos, los heteos, los ferezeos, los refaítas, los amorreos, los cananeos, los gergeseos y los jebuseos.', ref: 'Génesis 15' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Era Abram de edad de noventa y nueve años, cuando le apareció Jehová y le dijo: Yo soy el Dios Todopoderoso; anda delante de mí y sé perfecto. Y pondré mi pacto entre mí y ti, y te multiplicaré en gran manera. Entonces Abram se postró sobre su rostro, y Dios habló con él, diciendo: He aquí mi pacto es contigo, y serás padre de muchedumbre de gentes. Y no se llamará más tu nombre Abram, sino que será tu nombre Abraham, porque te he puesto por padre de muchedumbre de gentes. Y te multiplicaré en gran manera, y haré naciones de ti, y reyes saldrán de ti. Y estableceré mi pacto entre mí y ti, y tu descendencia después de ti en sus generaciones, por pacto perpetuo, para ser tu Dios, y el de tu descendencia después de ti. Y te daré a ti, y a tu descendencia después de ti, la tierra en que moras, toda la tierra de Canaán en heredad perpetua; y seré el Dios de ellos. Dijo de nuevo Dios a Abraham: En cuanto a ti, guardarás mi pacto, tú y tu descendencia después de ti por sus generaciones. Este es mi pacto, que guardaréis entre mí y vosotros y tu descendencia después de ti: Será circuncidado todo varón de entre vosotros. Circuncidaréis, pues, la carne de vuestro prepucio, y será por señal del pacto entre mí y vosotros. Y de edad de ocho días será circuncidado todo varón entre vosotros por vuestras generaciones; el nacido en casa, y el comprado por dinero a cualquier extranjero, que no fuere de tu linaje. Debe ser circuncidado el nacido en tu casa, y el comprado por tu dinero; y estará mi pacto en vuestra carne por pacto perpetuo. Y el varón incircunciso, el que no hubiere circuncidado la carne de su prepucio, aquella persona será cortada de su pueblo; ha violado mi pacto.', ref: 'Génesis 17:1-14' },
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
/* Pactos y dispensaciones · ruta II. Los pactos de Dios (6-11) (ver encabezado en parte1.js) */
(() => {
  const pactos2 = [
    {
      id: 'sinai', n: 'El Sinaí: el pacto con Israel', ref: 'Éxodo 19:3-8; 24:3-8; 31:12-17; Gálatas 3:17-19', fecha: -1446,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/sinai-sangre.webp', alt: 'Al pie del monte Sinaí, junto a un altar de piedra con doce columnas de piedra alrededor, Moisés anciano rocía con un hisopo la sangre de un tazón sobre una multitud de israelitas', pie: '«He aquí la sangre del pacto que Jehová ha hecho con vosotros» (Éxodo 24:8).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Moisés subió a Dios; y Jehová lo llamó desde el monte, diciendo: Así dirás a la casa de Jacob, y anunciarás a los hijos de Israel: Vosotros visteis lo que hice a los egipcios, y cómo os tomé sobre alas de águilas, y os he traído a mí. Ahora, pues, si diereis oído a mi voz, y guardareis mi pacto, vosotros seréis mi especial tesoro sobre todos los pueblos; porque mía es toda la tierra. Y vosotros me seréis un reino de sacerdotes, y gente santa. Estas son las palabras que dirás a los hijos de Israel. Entonces vino Moisés, y llamó a los ancianos del pueblo, y expuso en presencia de ellos todas estas palabras que Jehová le había mandado. Y todo el pueblo respondió a una, y dijeron: Todo lo que Jehová ha dicho, haremos. Y Moisés refirió a Jehová las palabras del pueblo.', ref: 'Éxodo 19:3-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El pacto del Sinaí en resumen',
          cab: ['Elemento', 'En el Sinaí'],
          filas: [
            ['Partes', 'Jehová y la nación de Israel, rescatada de Egipto'],
            ['Promesa', 'Israel sería especial tesoro, reino de sacerdotes y gente santa'],
            ['Condición', '«si diereis oído a mi voz, y guardareis mi pacto»'],
            ['Contenido', 'Los mandamientos, los estatutos y el culto del tabernáculo'],
            ['Sangre', 'Rociada sobre el altar y sobre el pueblo'],
            ['Señal', 'El día de reposo (Éx 31:13-17)'],
            ['Duración', 'Hasta que viniese la simiente (Gá 3:19); reemplazado por el nuevo pacto (He 8:13)']
          ]
        } }
      ],
      texto: [
        'Tres meses después de salir de Egipto, Israel acampó frente al monte Sinaí. Allí Dios hizo con la nación el pacto que ocupa el centro del Antiguo Testamento. Moisés subió al monte, y Dios le dio un mensaje para el pueblo que comienza con lo que ya había hecho: «Vosotros visteis lo que hice a los egipcios, y cómo os tomé sobre alas de águilas, y os he traído a mí» (Éx 19:4).',
        { h: 'Un pacto con una condición' },
        'Luego vino la propuesta: «Ahora, pues, si diereis oído a mi voz, y guardareis mi pacto, vosotros seréis mi especial tesoro sobre todos los pueblos; porque mía es toda la tierra. Y vosotros me seréis un reino de sacerdotes, y gente santa» (Éx 19:5-6). Es un pacto condicional, como se vio en la ruta I. El pueblo respondió a una voz: «Todo lo que Jehová ha dicho, haremos» (Éx 19:8).',
        'Dios dio entonces los Diez Mandamientos y las leyes del libro del pacto (Éx 20–23). Moisés las leyó al pueblo, que volvió a comprometerse, y el pacto se selló con sangre: «Entonces Moisés tomó la sangre y roció sobre el pueblo, y dijo: He aquí la sangre del pacto que Jehová ha hecho con vosotros sobre todas estas cosas» (Éx 24:8). Después vinieron las instrucciones del tabernáculo, el sacerdocio y los sacrificios, y la señal del pacto, el día de reposo (Éx 31:13-17).',
        { h: 'Para qué fue dado' },
        'El pacto del Sinaí no anuló el pacto con Abraham. Pablo lo dice con claridad: «la ley que vino cuatrocientos treinta años después, no lo abroga, para invalidar la promesa» (Gá 3:17). Tampoco fue un camino de salvación por obras: se dio a un pueblo ya redimido, e incluía sacrificios para el perdón de los pecados. Su propósito fue apartar a Israel como nación santa, mostrar la santidad de Dios, revelar el pecado (Ro 3:20) y guiar a Israel hasta Cristo como un ayo (Gá 3:24).',
        'También tuvo un límite en el tiempo. Pablo pregunta: «¿para qué sirve la ley? Fue añadida a causa de las transgresiones, hasta que viniese la simiente a quien fue hecha la promesa» (Gá 3:19). Israel quebrantó el pacto muchas veces, y por medio de Jeremías Dios anunció un nuevo pacto, «No como el pacto que hice con sus padres» (Jer 31:32). El contenido de la ley, sus mandamientos y su vigencia se estudian en un recurso propio, La ley de Moisés.',
        { ejercicio: {
          pregunta: '¿Anuló el pacto del Sinaí las promesas hechas a Abraham?',
          opciones: [
            { t: 'Sí, porque la ley reemplazó a la promesa.', ok: false, por_que: 'Gálatas 3:17 dice expresamente que la ley no abroga el pacto ratificado antes.' },
            { t: 'No: la ley vino después y no invalidó la promesa.', ok: true, por_que: 'La promesa a Abraham sigue en pie; la ley se añadió por un tiempo, hasta Cristo.' },
            { t: 'Solo para los gentiles, no para Israel.', ok: false, por_que: 'Pablo habla de la relación entre la ley y la promesa en general, sin esa distinción.' }
          ],
          explicacion: 'El pacto del Sinaí se añadió a la promesa, no la reemplazó.'
        } }
      ],
      pensar: 'Israel prometió obedecer todo lo que Dios había dicho, y no pudo cumplirlo. ¿Qué te enseña esto sobre la diferencia entre buenas intenciones y la obra del Espíritu en el corazón?'
    },
    {
      id: 'tierra', n: 'El pacto de la tierra', ref: 'Deuteronomio 29:1, 10-15; 30:1-10; Levítico 26:40-45; Ezequiel 36:24-28', fecha: -1406,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Sucederá que cuando hubieren venido sobre ti todas estas cosas, la bendición y la maldición que he puesto delante de ti, y te arrepintieres en medio de todas las naciones adonde te hubiere arrojado Jehová tu Dios, y te convirtieres a Jehová tu Dios, y obedecieres a su voz conforme a todo lo que yo te mando hoy, tú y tus hijos, con todo tu corazón y con toda tu alma, entonces Jehová hará volver a tus cautivos, y tendrá misericordia de ti, y volverá a recogerte de entre todos los pueblos adonde te hubiere esparcido Jehová tu Dios. Aun cuando tus desterrados estuvieren en las partes más lejanas que hay debajo del cielo, de allí te recogerá Jehová tu Dios, y de allá te tomará; y te hará volver Jehová tu Dios a la tierra que heredaron tus padres, y será tuya; y te hará bien, y te multiplicará más que a tus padres. Y circuncidará Jehová tu Dios tu corazón, y el corazón de tu descendencia, para que ames a Jehová tu Dios con todo tu corazón y con toda tu alma, a fin de que vivas. Y pondrá Jehová tu Dios todas estas maldiciones sobre tus enemigos, y sobre tus aborrecedores que te persiguieron. Y tú volverás, y oirás la voz de Jehová, y pondrás por obra todos sus mandamientos que yo te ordeno hoy. Y te hará Jehová tu Dios abundar en toda obra de tus manos, en el fruto de tu vientre, en el fruto de tu bestia, y en el fruto de tu tierra, para bien; porque Jehová volverá a gozarse sobre ti para bien, de la manera que se gozó sobre tus padres, cuando obedecieres a la voz de Jehová tu Dios, para guardar sus mandamientos y sus estatutos escritos en este libro de la ley; cuando te convirtieres a Jehová tu Dios con todo tu corazón y con toda tu alma.', ref: 'Deuteronomio 30:1-10' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que anuncia Deuteronomio 29 y 30',
          cab: ['Etapa', 'Qué dice el texto', 'Pasaje'],
          filas: [
            ['Desobediencia', 'Israel abandonaría el pacto', 'Dt 29:24-26'],
            ['Dispersión', 'Dios los arrancaría de su tierra y los echaría a otra', 'Dt 29:27-28'],
            ['Arrepentimiento', 'Volverían a Jehová en medio de las naciones', 'Dt 30:1-2'],
            ['Regreso', 'Dios los recogería aun de las partes más lejanas', 'Dt 30:3-5'],
            ['Corazón nuevo', 'Dios circuncidaría su corazón para que le amen', 'Dt 30:6'],
            ['Bendición', 'Prosperidad en la tierra y juicio sobre sus enemigos', 'Dt 30:7-9']
          ],
          nota: 'La enseñanza dispensacional lo llama pacto palestino o pacto de la tierra.'
        } }
      ],
      texto: [
        'Cuarenta años después del Sinaí, en las llanuras de Moab, frente a la tierra prometida, Moisés reunió a la nueva generación. Antes de cruzar el Jordán, Dios hizo con ellos otro pacto: «Estas son las palabras del pacto que Jehová mandó a Moisés que celebrase con los hijos de Israel en la tierra de Moab, además del pacto que concertó con ellos en Horeb» (Dt 29:1). Horeb es otro nombre del Sinaí.',
        { h: 'Un pacto sobre la tierra' },
        'Este pacto se centra en la posesión de la tierra. Moisés anuncia, con una claridad sorprendente, lo que pasaría: Israel abandonaría a Dios, sería arrancado de su tierra y esparcido entre las naciones (Dt 29:24-28). Pero no termina ahí. «Sucederá que cuando hubieren venido sobre ti todas estas cosas… y te convirtieres a Jehová tu Dios… entonces Jehová hará volver a tus cautivos, y tendrá misericordia de ti, y volverá a recogerte de entre todos los pueblos» (Dt 30:1-3).',
        'La promesa llega lejos: «Aun cuando tus desterrados estuvieren en las partes más lejanas que hay debajo del cielo, de allí te recogerá Jehová tu Dios» (Dt 30:4). Y llega hondo: «circuncidará Jehová tu Dios tu corazón, y el corazón de tu descendencia, para que ames a Jehová tu Dios con todo tu corazón y con toda tu alma» (Dt 30:6). El regreso a la tierra va unido a un cambio interior que solo Dios puede hacer.',
        { h: 'Condicional e incondicional a la vez' },
        'Este pacto combina las dos clases vistas en la ruta I. El disfrute de la tierra depende de la obediencia de cada generación: por eso hubo exilio. Pero la promesa final no depende de Israel, porque es Dios quien circuncidará su corazón. Levítico 26 dice lo mismo: aun en tierra de sus enemigos, Dios no los desechará, «invalidando mi pacto con ellos» (Lv 26:44).',
        'Los profetas retomaron esta promesa. Ezequiel anuncia que Dios tomará a Israel de las naciones, lo traerá a su tierra, le dará un corazón nuevo y pondrá su Espíritu dentro de él (Ez 36:24-28). El regreso del exilio en Babilonia fue un cumplimiento parcial; la lectura que sigue este estudio espera el cumplimiento completo en el futuro, cuando Israel se vuelva a su Mesías. Esa esperanza, con sus posturas, se estudia en La tierra de Israel.',
        { ir: { t: 'Ver «La promesa futura» en La tierra de Israel', a: '../../tierra-de-israel/#plan/6' } },
        { ejercicio: {
          pregunta: 'Según Deuteronomio 30:6, ¿qué haría Dios además de devolver a Israel a su tierra?',
          opciones: [
            { t: 'Les daría un nuevo código de leyes más fácil de cumplir.', ok: false, por_que: 'El texto no habla de leyes nuevas, sino de un cambio en el corazón.' },
            { t: 'Circuncidaría su corazón para que le amen con todo su ser.', ok: true, por_que: 'Es la misma promesa que reaparece en el nuevo pacto de Jeremías 31 y Ezequiel 36.' },
            { t: 'Haría que no necesitaran obedecer más.', ok: false, por_que: 'Dios cambia el corazón para que puedan amarle y obedecerle, no para eliminar la obediencia.' }
          ],
          explicacion: 'La restauración que Dios promete no es solo geográfica: es también un corazón nuevo.'
        } }
      ],
      pensar: 'Moisés anunció la dispersión de Israel antes de que entraran a la tierra, y también su regreso. ¿Qué te enseña sobre la paciencia de Dios con quienes se apartan de Él?'
    },
    {
      id: 'sacerdotal', n: 'El pacto sacerdotal', ref: 'Números 25:10-13; Malaquías 2:4-7; Jeremías 33:17-22; Hebreos 7:11-17', fecha: -1407,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces Jehová habló a Moisés, diciendo: Finees hijo de Eleazar, hijo del sacerdote Aarón, ha hecho apartar mi furor de los hijos de Israel, llevado de celo entre ellos; por lo cual yo no he consumido en mi celo a los hijos de Israel. Por tanto diles: He aquí yo establezco mi pacto de paz con él; y tendrá él, y su descendencia después de él, el pacto del sacerdocio perpetuo, por cuanto tuvo celo por su Dios e hizo expiación por los hijos de Israel.', ref: 'Números 25:10-13' },
        { tipo: 'cita', titulo: 'Malaquías', texto: 'Y sabréis que yo os envié este mandamiento, para que fuese mi pacto con Leví, ha dicho Jehová de los ejércitos. Mi pacto con él fue de vida y de paz, las cuales cosas yo le di para que me temiera; y tuvo temor de mí, y delante de mi nombre estuvo humillado. La ley de verdad estuvo en su boca, e iniquidad no fue hallada en sus labios; en paz y en justicia anduvo conmigo, y a muchos hizo apartar de la iniquidad. Porque los labios del sacerdote han de guardar la sabiduría, y de su boca el pueblo buscará la ley; porque mensajero es de Jehová de los ejércitos.', ref: 'Malaquías 2:4-7' }
      ],
      texto: [
        'Entre los grandes pactos de la Biblia hay uno que suele pasarse por alto: el pacto de Dios con el sacerdocio. No tiene el alcance de los pactos con Abraham o con David, pero ayuda a entender cómo Dios aseguró el servicio de su santuario y cómo ese servicio apuntaba a Cristo.',
        { h: 'Finees' },
        'Al final del viaje por el desierto, en Sitim, muchos israelitas se entregaron a la idolatría y a la inmoralidad con las mujeres de Moab, y una mortandad cayó sobre el pueblo. Finees, nieto de Aarón, actuó con celo por Dios y detuvo la plaga (Nm 25:1-9). Entonces Dios dijo: «He aquí yo establezco mi pacto de paz con él; y tendrá él, y su descendencia después de él, el pacto del sacerdocio perpetuo, por cuanto tuvo celo por su Dios e hizo expiación por los hijos de Israel» (Nm 25:12-13).',
        'Malaquías recuerda este pacto con Leví siglos después, para reprender a los sacerdotes de su tiempo: «Mi pacto con él fue de vida y de paz… La ley de verdad estuvo en su boca» (Mal 2:5-6). Los sacerdotes debían guardar el conocimiento de Dios y enseñarlo, «porque mensajero es de Jehová de los ejércitos» (Mal 2:7). Pero habían corrompido el pacto de Leví.',
        { h: 'Unido al pacto con David' },
        'Por medio de Jeremías, Dios pone juntos el pacto con David y el pacto con los sacerdotes: si alguien pudiera invalidar el pacto de Dios con el día y con la noche, «podrá también invalidarse mi pacto con mi siervo David… y mi pacto con los levitas y sacerdotes, mis ministros» (Jer 33:20-21). Un rey y un sacerdote: las dos funciones que Israel necesitaba.',
        { h: 'Un sacerdote mejor' },
        'El Nuevo Testamento muestra que esas dos funciones se unen en una sola persona. Jesús no era de la tribu de Leví, sino de Judá. Hebreos explica que Dios lo hizo sacerdote «según el orden de Melquisedec» (He 7:17), un orden anterior a Aarón, que une al rey y al sacerdote, y que no termina con la muerte. Cuando cambió el sacerdocio, cambió también la ley que lo regulaba (He 7:12). El pacto con Leví cumplió su papel; el sacerdocio de Cristo lo supera. Todo esto se estudia en detalle en El sacerdocio en Israel.',
        { ir: { t: 'Ver «Melquisedec» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/1' } },
        { ejercicio: {
          pregunta: '¿Por qué Hebreos dice que Jesús es sacerdote según el orden de Melquisedec y no de Aarón?',
          opciones: [
            { t: 'Porque Jesús descendía de Aarón por parte de su madre.', ok: false, por_que: 'Hebreos 7:14 dice que nuestro Señor vino de la tribu de Judá.' },
            { t: 'Porque es un sacerdocio que une al rey y al sacerdote, y que no termina.', ok: true, por_que: 'Melquisedec era rey y sacerdote, y Cristo vive para siempre para interceder (He 7:24-25).' },
            { t: 'Porque el sacerdocio levítico nunca tuvo valor.', ok: false, por_que: 'Tuvo valor como sombra y preparación; Hebreos dice que era imperfecto, no inútil.' }
          ],
          explicacion: 'En Cristo se unen el trono de David y un sacerdocio eterno.'
        } }
      ],
      pensar: 'Malaquías dice que el sacerdote debía guardar la sabiduría y enseñarla. En el nuevo pacto, todos los creyentes son sacerdotes (1 P 2:9). ¿A quién estás llevando el conocimiento de Dios?'
    },
    {
      id: 'david', n: 'David: un trono para siempre', ref: '2 Samuel 7:1-17; Salmo 89:3-4, 28-37; Isaías 9:6-7; Lucas 1:30-33', fecha: -995,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/david-natan.webp', alt: 'En una sala sencilla de su palacio de cedro en Jerusalén, el rey David, sentado, escucha con emoción al profeta Natán, que de pie le habla con la mano levantada; por la ventana se ve la tienda donde estaba el arca', pie: '«Y será afirmada tu casa y tu reino para siempre delante de tu rostro» (2 Samuel 7:16).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ahora, pues, dirás así a mi siervo David: Así ha dicho Jehová de los ejércitos: Yo te tomé del redil, de detrás de las ovejas, para que fueses príncipe sobre mi pueblo, sobre Israel; y he estado contigo en todo cuanto has andado, y delante de ti he destruido a todos tus enemigos, y te he dado nombre grande, como el nombre de los grandes que hay en la tierra. Además, yo fijaré lugar a mi pueblo Israel y lo plantaré, para que habite en su lugar y nunca más sea removido, ni los inicuos le aflijan más, como al principio, desde el día en que puse jueces sobre mi pueblo Israel; y a ti te daré descanso de todos tus enemigos. Asimismo Jehová te hace saber que él te hará casa. Y cuando tus días sean cumplidos, y duermas con tus padres, yo levantaré después de ti a uno de tu linaje, el cual procederá de tus entrañas, y afirmaré su reino. El edificará casa a mi nombre, y yo afirmaré para siempre el trono de su reino. Yo le seré a él padre, y él me será a mí hijo. Y si él hiciere mal, yo le castigaré con vara de hombres, y con azotes de hijos de hombres; pero mi misericordia no se apartará de él como la aparté de Saúl, al cual quité de delante de ti. Y será afirmada tu casa y tu reino para siempre delante de tu rostro, y tu trono será estable eternamente.', ref: '2 Samuel 7:8-16' },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/estela-tel-dan.jpg', alt: 'Fragmento de piedra basáltica con escritura aramea; una de sus líneas menciona la «casa de David»', pie: 'La estela de Tel Dan (siglo IX a.C.), en arameo, menciona la «casa de David». Museo de Israel, Jerusalén.', origen: 'foto', licencia: 'Foto: Oren Rozen (2016), CC BY-SA 4.0, vía Wikimedia Commons' }
      ],
      texto: [
        'Cuando David ya reinaba en Jerusalén y tenía paz con sus enemigos, se sintió incómodo: él vivía en una casa de cedro mientras el arca de Dios estaba en una tienda. Quiso edificarle una casa a Dios. Pero esa noche Dios habló al profeta Natán con un mensaje sorprendente: no sería David quien le edificaría una casa a Dios, sino Dios quien le edificaría una casa a David (2 S 7:11).',
        { h: 'Las promesas' },
        'La palabra «casa» tiene aquí dos sentidos: un templo y una dinastía. Dios prometió a David un hijo que edificaría el templo, y algo mucho mayor: «yo afirmaré para siempre el trono de su reino» (2 S 7:13). «Y será afirmada tu casa y tu reino para siempre delante de tu rostro, y tu trono será estable eternamente» (2 S 7:16). Son tres promesas para siempre: una casa, un reino y un trono.',
        'También es un pacto incondicional. Si los hijos de David pecaban, Dios los disciplinaría, «pero mi misericordia no se apartará de él como la aparté de Saúl» (2 S 7:15). El salmo 89 lo celebra con juramento: «No olvidaré mi pacto, Ni mudaré lo que ha salido de mis labios. Una vez he jurado por mi santidad, Y no mentiré a David» (Sal 89:34-35). David mismo, al final de su vida, dijo que Dios había hecho con él «pacto perpetuo, Ordenado en todas las cosas, y será guardado» (2 S 23:5).',
        { h: 'Un trono vacío y una esperanza' },
        'La historia pareció contradecir la promesa. Los reyes de Judá fueron infieles, y en el año 586 a.C. Babilonia destruyó Jerusalén y se llevó al último rey. Durante siglos no hubo descendiente de David en el trono. Pero los profetas siguieron anunciando a un rey de la casa de David: un niño que se sentaría «sobre el trono de David y sobre su reino» y cuyo imperio no tendría límite (Is 9:7).',
        'Cuando el ángel Gabriel anunció a María el nacimiento de Jesús, usó las palabras del pacto: «el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin» (Lc 1:32-33). La ruta III muestra cómo Cristo cumple esta promesa.',
        'La arqueología también conservó el nombre de esa dinastía. La estela de Tel Dan, escrita en arameo por un rey enemigo de Israel en el siglo IX a.C., menciona la «casa de David», la misma expresión de 2 Samuel 7.',
        { ejercicio: {
          pregunta: '¿Qué dos sentidos tiene la palabra «casa» en 2 Samuel 7?',
          opciones: [
            { t: 'El palacio de David y el palacio de Salomón.', ok: false, por_que: 'El juego de palabras está entre la casa que David quería edificar a Dios y la casa que Dios le edificaría a él.' },
            { t: 'Un templo para Dios y una dinastía para David.', ok: true, por_que: 'David quería edificar un templo; Dios le prometió una descendencia que reinaría para siempre.' },
            { t: 'La tienda del arca y la ciudad de Jerusalén.', ok: false, por_que: 'La tienda es la ocasión del deseo de David, pero la promesa es sobre su descendencia.' }
          ],
          explicacion: 'Dios convierte el deseo de David de darle una casa en una promesa de darle a él una casa eterna.'
        } }
      ],
      pensar: 'David quería hacer algo grande para Dios, y Dios le respondió prometiendo hacer algo mucho más grande por él. ¿Qué te enseña esto sobre el servicio y la gracia?'
    },
    {
      id: 'nuevo-prometido', n: 'El nuevo pacto prometido', ref: 'Jeremías 31:31-34; Ezequiel 36:24-28; Isaías 59:20-21; Ezequiel 37:24-28', fecha: -587,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../exilio/img/exi-carta-jeremias.webp', alt: 'En una habitación sencilla de Jerusalén, el profeta Jeremías dicta a su secretario Baruc, que escribe en un rollo', pie: '«Escríbete en un libro todas las palabras que te he hablado» (Jeremías 30:2).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'He aquí que vienen días, dice Jehová, en los cuales haré nuevo pacto con la casa de Israel y con la casa de Judá. No como el pacto que hice con sus padres el día que tomé su mano para sacarlos de la tierra de Egipto; porque ellos invalidaron mi pacto, aunque fui yo un marido para ellos, dice Jehová. Pero este es el pacto que haré con la casa de Israel después de aquellos días, dice Jehová: Daré mi ley en su mente, y la escribiré en su corazón; y yo seré a ellos por Dios, y ellos me serán por pueblo. Y no enseñará más ninguno a su prójimo, ni ninguno a su hermano, diciendo: Conoce a Jehová; porque todos me conocerán, desde el más pequeño de ellos hasta el más grande, dice Jehová; porque perdonaré la maldad de ellos, y no me acordaré más de su pecado.', ref: 'Jeremías 31:31-34' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las promesas del nuevo pacto',
          cab: ['Promesa', 'Jeremías', 'Ezequiel'],
          filas: [
            ['La ley escrita en el corazón', 'Jer 31:33', 'Ez 36:26'],
            ['Una relación personal con Dios', 'Jer 31:33-34', 'Ez 36:28'],
            ['Todos conocerán a Jehová', 'Jer 31:34', '—'],
            ['El perdón completo de los pecados', 'Jer 31:34', 'Ez 36:25'],
            ['El Espíritu de Dios dentro de ellos', '—', 'Ez 36:27; 37:14'],
            ['Israel restaurado en su tierra', 'Jer 31:38-40; 32:37-41', 'Ez 36:24, 28; 37:25']
          ]
        } }
      ],
      texto: [
        'Jeremías vivió los peores años de Judá. Vio cómo el pueblo quebrantaba el pacto del Sinaí, anunció el juicio durante cuarenta años y presenció la destrucción de Jerusalén. Pero en medio de esa oscuridad, Dios le mandó escribir un libro de consuelo (Jer 30–33). En su centro está la promesa más importante del Antiguo Testamento.',
        { h: 'No como el pacto antiguo' },
        '«He aquí que vienen días, dice Jehová, en los cuales haré nuevo pacto con la casa de Israel y con la casa de Judá. No como el pacto que hice con sus padres el día que tomé su mano para sacarlos de la tierra de Egipto; porque ellos invalidaron mi pacto» (Jer 31:31-32). El problema del pacto del Sinaí no estaba en la ley, que era santa, sino en el corazón del pueblo, que no podía cumplirla.',
        { h: 'Lo nuevo del nuevo pacto' },
        'El nuevo pacto resuelve ese problema desde adentro: «Daré mi ley en su mente, y la escribiré en su corazón; y yo seré a ellos por Dios, y ellos me serán por pueblo» (Jer 31:33). La ley ya no estaría en tablas de piedra, frente al pueblo, sino dentro de cada uno. Todos conocerían a Dios personalmente, desde el más pequeño hasta el más grande, y Dios dice: «perdonaré la maldad de ellos, y no me acordaré más de su pecado» (Jer 31:34).',
        'Ezequiel, contemporáneo de Jeremías, añade cómo ocurrirá: «Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros… Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos» (Ez 36:26-27). El Espíritu Santo es el corazón del nuevo pacto: Él escribe la ley de Dios en el interior y da el poder para vivirla. Isaías también lo une a la promesa del Espíritu y de la palabra que no faltarán de la boca del pueblo (Is 59:21).',
        { h: 'Con la casa de Israel y la casa de Judá' },
        'Jeremías dice que este pacto se hará con Israel y Judá, y lo une a la permanencia de Israel como nación, tan segura como el sol y la luna (Jer 31:35-37). Al mismo tiempo, el Nuevo Testamento enseña que la iglesia ya participa del nuevo pacto por medio de Cristo. Cómo se relacionan las dos cosas se estudia en la ruta III.',
        { ejercicio: {
          pregunta: 'Según Jeremías 31, ¿cuál era el problema del pacto antiguo que el nuevo pacto resuelve?',
          opciones: [
            { t: 'Que la ley de Dios era mala y había que reemplazarla por otra.', ok: false, por_que: 'La ley era santa (Ro 7:12). El problema estaba en el pueblo, que invalidó el pacto.' },
            { t: 'Que el pueblo no podía cumplirlo; ahora Dios escribirá su ley en el corazón.', ok: true, por_que: 'El nuevo pacto cambia el interior: ley en el corazón, perdón completo y el Espíritu dentro.' },
            { t: 'Que el pacto antiguo era solo para los sacerdotes.', ok: false, por_que: 'El pacto del Sinaí se hizo con toda la nación.' }
          ],
          explicacion: 'Lo nuevo del nuevo pacto es un corazón transformado por el Espíritu.'
        } }
      ],
      pensar: 'El nuevo pacto promete que la ley de Dios estará escrita en el corazón. ¿Obedeces a Dios como quien cumple una regla de afuera o como quien ama lo que Él ama?'
    },
    {
      id: 'conjunto', n: 'Los pactos en conjunto', ref: 'Romanos 9:4-5; Efesios 2:12; Gálatas 3:15-22; 2 Corintios 1:20',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pactos.svg', alt: 'Esquema de los pactos de la Biblia en orden: Noé, Abraham con sus tres promesas de tierra, descendencia y bendición, el Sinaí añadido por un tiempo, el pacto de la tierra, David y el nuevo pacto; todas las líneas convergen en Cristo', pie: 'Los pactos de Dios, de Noé a Cristo.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los pactos de Dios',
          cab: ['Pacto', 'Con quién', 'Promesa central', 'Clase', 'Señal'],
          filas: [
            ['Noé', 'Toda la humanidad y la tierra', 'No más diluvio', 'Incondicional', 'Arco iris'],
            ['Abraham', 'Abraham y su descendencia', 'Tierra, descendencia y bendición', 'Incondicional', 'Circuncisión'],
            ['Sinaí', 'La nación de Israel', 'Especial tesoro y reino de sacerdotes', 'Condicional', 'Día de reposo'],
            ['La tierra', 'Israel en Moab', 'Dispersión y regreso, corazón circuncidado', 'Mixto', '—'],
            ['Sacerdotal', 'Finees y los sacerdotes', 'Sacerdocio perpetuo', 'Incondicional', '—'],
            ['David', 'David y su casa', 'Casa, reino y trono para siempre', 'Incondicional', '—'],
            ['Nuevo pacto', 'Israel y Judá; la iglesia participa', 'Ley en el corazón, perdón, el Espíritu', 'Incondicional', 'La Cena del Señor']
          ]
        } }
      ],
      texto: [
        'Después de recorrer los pactos uno por uno, conviene verlos juntos. No son acuerdos sueltos, uno después de otro, como si Dios cambiara de idea en cada época. Forman una historia, y cada pacto se apoya en los anteriores.',
        { h: 'Un tronco y sus ramas' },
        'El pacto con Noé es el escenario: asegura que la tierra seguirá existiendo mientras Dios lleva adelante su plan. El pacto con Abraham es el tronco: sus tres promesas, tierra, descendencia y bendición, contienen todo lo que sigue. El pacto de la tierra desarrolla la primera promesa. El pacto con David desarrolla la segunda: la descendencia de Abraham tendrá un rey para siempre. Y el nuevo pacto desarrolla la tercera: la bendición del perdón y del Espíritu, que alcanzará a las naciones.',
        'El pacto del Sinaí ocupa un lugar distinto. Pablo dice que fue «añadida», es decir, puesta junto a la promesa por un tiempo, «hasta que viniese la simiente a quien fue hecha la promesa» (Gá 3:19). Cumplió su función y dio paso al nuevo pacto.',
        { h: 'Todos convergen en Cristo' },
        'El esquema muestra que todas las líneas llegan a una persona. Cristo es la simiente de Abraham (Gá 3:16), el Hijo de David (Lc 1:32), el que cumplió la ley (Mt 5:17), el sacerdote para siempre (He 7:17) y el mediador del nuevo pacto (He 9:15). Pablo lo resume: «todas las promesas de Dios son en él Sí, y en él Amén» (2 Co 1:20).',
        'Pablo también dice que los pactos pertenecen a Israel: «de los cuales son la adopción, la gloria, el pacto, la promulgación de la ley, el culto y las promesas» (Ro 9:4). Y recuerda a los efesios que antes de Cristo estaban «ajenos a los pactos de la promesa, sin esperanza y sin Dios en el mundo» (Ef 2:12). Los gentiles no tenían ningún derecho propio a esos pactos; llegaron a participar de ellos por gracia, en Cristo. Esa es la pregunta de la ruta siguiente.',
        { ejercicio: {
          pregunta: '¿Qué pacto es el «tronco» del que se desarrollan los demás pactos de promesa?',
          opciones: [
            { t: 'El pacto del Sinaí.', ok: false, por_que: 'El Sinaí fue añadido por un tiempo; no es la raíz de las promesas.' },
            { t: 'El pacto con Abraham.', ok: true, por_que: 'Sus promesas de tierra, descendencia y bendición se amplían en el pacto de la tierra, el de David y el nuevo pacto.' },
            { t: 'El pacto con Noé.', ok: false, por_que: 'El pacto con Noé preserva la tierra, pero las promesas de salvación comienzan con Abraham.' }
          ],
          explicacion: 'Los pactos de promesa desarrollan las tres promesas hechas a Abraham y se cumplen en Cristo.'
        } }
      ],
      pensar: 'Todas las promesas de Dios son «Sí» en Cristo (2 Co 1:20). ¿Qué promesa de Dios necesitas recordar hoy que ya está asegurada en Él?'
    }
  ];

  window.__PACTOS.pactos = window.__PACTOS.pactos.concat(pactos2);
})();
/* Pactos y dispensaciones · ruta III. Los pactos se cumplen en Cristo (ver encabezado en parte1.js) */
(() => {
  const cristo = [
    {
      id: 'simiente', n: 'La descendencia de Abraham', ref: 'Gálatas 3:6-9, 13-16, 26-29; Romanos 4:13-17; Mateo 1:1',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición (porque está escrito: Maldito todo el que es colgado en un madero), para que en Cristo Jesús la bendición de Abraham alcanzase a los gentiles, a fin de que por la fe recibiésemos la promesa del Espíritu. Hermanos, hablo en términos humanos: Un pacto, aunque sea de hombre, una vez ratificado, nadie lo invalida, ni le añade. Ahora bien, a Abraham fueron hechas las promesas, y a su simiente. No dice: Y a las simientes, como si hablase de muchos, sino como de uno: Y a tu simiente, la cual es Cristo.', ref: 'Gálatas 3:13-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Quiénes son la descendencia de Abraham',
          cab: ['Sentido', 'Quiénes', 'Pasaje'],
          filas: [
            ['Natural', 'Israel, los descendientes de Abraham, Isaac y Jacob', 'Gn 17:7-8; Ro 9:4-5; 11:1'],
            ['Natural y espiritual', 'Los israelitas que creen como creyó Abraham', 'Ro 9:6-8; 11:5'],
            ['Cristo, la simiente', 'Jesús, el descendiente prometido', 'Gá 3:16; Mt 1:1'],
            ['Espiritual', 'Todos los que son de Cristo, judíos o gentiles', 'Gá 3:7, 29; Ro 4:16']
          ],
          nota: 'Los sentidos no se excluyen: el Nuevo Testamento usa los cuatro y el contexto indica cuál.'
        } }
      ],
      texto: [
        'El Nuevo Testamento comienza presentando a Jesús como «hijo de David, hijo de Abraham» (Mt 1:1). Con esas dos palabras, Mateo une a Jesús con los dos grandes pactos de promesa. Esta ruta muestra cómo Cristo cumple cada uno.',
        { h: 'La simiente' },
        'En Gálatas 3, Pablo hace una observación sobre la promesa a Abraham: «No dice: Y a las simientes, como si hablase de muchos, sino como de uno: Y a tu simiente, la cual es Cristo» (Gá 3:16). La palabra simiente puede ser colectiva, pero Pablo ve en ella a un descendiente en particular, el que traería la bendición prometida a las naciones. Ya Génesis 3:15 hablaba de una simiente de la mujer que vencería a la serpiente.',
        'Por eso la bendición de Abraham llega a los gentiles por medio de Cristo: «Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición… para que en Cristo Jesús la bendición de Abraham alcanzase a los gentiles, a fin de que por la fe recibiésemos la promesa del Espíritu» (Gá 3:13-14). Notable: Pablo identifica la bendición de Abraham con la promesa del Espíritu.',
        { h: 'Herederos según la promesa' },
        'Pablo saca una conclusión para los creyentes: «Y si vosotros sois de Cristo, ciertamente linaje de Abraham sois, y herederos según la promesa» (Gá 3:29). Quien está unido a Cristo, la simiente, participa de las bendiciones prometidas a Abraham: la justificación por la fe, el Espíritu y la herencia. Abraham es así «padre de todos nosotros» (Ro 4:16), de los que creen, sean judíos o gentiles.',
        'Esto no significa que la descendencia natural de Abraham haya perdido su lugar. La tabla muestra que la Biblia usa la expresión en varios sentidos. Pablo, en la misma carta a los Romanos, sigue llamando israelitas a sus parientes según la carne y dice que de ellos son los pactos y las promesas (Ro 9:3-5). Los gentiles son hijos de Abraham por la fe; Israel sigue siendo la descendencia natural a la que Dios hizo promesas nacionales.',
        { ejercicio: {
          pregunta: 'Según Gálatas 3:29, ¿cómo llega un gentil a ser descendencia de Abraham?',
          opciones: [
            { t: 'Circuncidándose y guardando la ley de Moisés.', ok: false, por_que: 'Pablo escribe Gálatas precisamente contra esa idea.' },
            { t: 'Perteneciendo a Cristo por la fe.', ok: true, por_que: 'Cristo es la simiente; quien es de Cristo es linaje de Abraham y heredero según la promesa.' },
            { t: 'Naciendo en una familia cristiana.', ok: false, por_que: 'La descendencia espiritual no se hereda por nacimiento, sino por la fe.' }
          ],
          explicacion: 'La bendición de Abraham llega a las naciones por la fe en Cristo, la simiente prometida.'
        } }
      ],
      pensar: 'Pablo dice que en Cristo eres heredero según la promesa hecha a Abraham. ¿Vives como heredero o como alguien que todavía tiene que ganarse la herencia?'
    },
    {
      id: 'hijo-david', n: 'El Hijo de David', ref: 'Lucas 1:30-33; Hechos 2:29-36; 15:13-18; Apocalipsis 22:16',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Varones hermanos, se os puede decir libremente del patriarca David, que murió y fue sepultado, y su sepulcro está con nosotros hasta el día de hoy. Pero siendo profeta, y sabiendo que con juramento Dios le había jurado que de su descendencia, en cuanto a la carne, levantaría al Cristo para que se sentase en su trono, viéndolo antes, habló de la resurrección de Cristo, que su alma no fue dejada en el Hades, ni su carne vio corrupción. A este Jesús resucitó Dios, de lo cual todos nosotros somos testigos. Así que, exaltado por la diestra de Dios, y habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís. Porque David no subió a los cielos; pero él mismo dice: Dijo el Señor a mi Señor: Siéntate a mi diestra, Hasta que ponga a tus enemigos por estrado de tus pies. Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo.', ref: 'Hechos 2:29-36' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las promesas a David y su cumplimiento',
          cab: ['Promesa (2 S 7)', 'Ya cumplida en Cristo', 'Por cumplirse'],
          filas: [
            ['Un descendiente de David', 'Jesús nació de la casa de David (Lc 1:27; Ro 1:3)', '—'],
            ['Hijo de Dios', '«Yo seré a él Padre, Y él me será a mí hijo» (He 1:5)', '—'],
            ['Un reino para siempre', 'Resucitado, no ve corrupción; reina a la diestra del Padre (Hch 2:30-36)', 'Reinará sobre la casa de Jacob (Lc 1:33)'],
            ['Un trono estable', 'Sentado en el trono de su Padre (Ap 3:21)', 'Se sentará en su trono de gloria (Mt 25:31)']
          ],
          nota: 'Ya y todavía no: Cristo reina hoy desde el cielo, y reinará visiblemente cuando vuelva.'
        } }
      ],
      texto: [
        'Las promesas a David se cumplen en Jesús de manera sorprendente. Jesús nació de la casa de David, como anunció Gabriel: «el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre» (Lc 1:32-33). Durante su ministerio, los ciegos y las multitudes lo llamaban Hijo de David. Pero fue crucificado sin haber reinado en Jerusalén. ¿Cómo se cumplió entonces la promesa?',
        { h: 'Resucitado para sentarse en su trono' },
        'Pedro responde en Pentecostés. David murió y su sepulcro está en Jerusalén, pero «siendo profeta, y sabiendo que con juramento Dios le había jurado que de su descendencia, en cuanto a la carne, levantaría al Cristo para que se sentase en su trono» (Hch 2:30), habló de la resurrección de Cristo. La resurrección es la garantía de que el Hijo de David vive para siempre, como exigía la promesa. Y Pedro concluye que Jesús, exaltado a la diestra de Dios, derramó el Espíritu (Hch 2:33).',
        { h: 'Ya, pero todavía no' },
        'Hoy Cristo reina sentado a la diestra del Padre (Hch 2:34-36; He 1:3). Pero el Nuevo Testamento también espera un reinado visible. Jesús dijo que cuando venga en su gloria «se sentará en su trono de gloria» (Mt 25:31), y en Apocalipsis distingue entre su trono y el trono de su Padre (Ap 3:21). Cuando los discípulos le preguntaron si restauraría el reino a Israel, Jesús no negó la promesa: dijo que no les tocaba saber los tiempos (Hch 1:6-7).',
        'En el concilio de Jerusalén, Jacobo citó a Amós: «Después de esto volveré Y reedificaré el tabernáculo de David, que está caído» (Hch 15:16). Lo usó para mostrar que la entrada de los gentiles estaba anunciada. La lectura que sigue este estudio entiende que el reino de Cristo ya comenzó en el plano espiritual con la iglesia, y que se manifestará plenamente cuando Cristo vuelva y reine mil años sobre la tierra desde Jerusalén.',
        { ir: { t: 'Ver «El milenio» en Los últimos tiempos', a: '../../escatologia/#eventos/20' } },
        { ejercicio: {
          pregunta: 'Según Pedro en Hechos 2, ¿qué muestra que Jesús cumple la promesa de un trono eterno para el hijo de David?',
          opciones: [
            { t: 'Que fue coronado rey en Jerusalén por el pueblo.', ok: false, por_que: 'Jesús fue crucificado. Pedro no habla de una coronación terrenal.' },
            { t: 'Que resucitó, no vio corrupción y fue exaltado a la diestra de Dios.', ok: true, por_que: 'Un reino para siempre exige un rey que viva para siempre: la resurrección lo garantiza.' },
            { t: 'Que la promesa a David fue anulada y reemplazada.', ok: false, por_que: 'Pedro dice que Dios lo había jurado y que lo cumplió en Cristo.' }
          ],
          explicacion: 'El Hijo de David resucitado reina hoy desde el cielo y reinará visiblemente cuando vuelva.'
        } }
      ],
      pensar: 'Cristo ya reina a la diestra del Padre. ¿Qué área de tu vida necesita reconocer hoy que Él es el Rey?'
    },
    {
      id: 'mediador', n: 'Mediador de un mejor pacto', ref: 'Lucas 22:14-20; 1 Corintios 11:23-26; Hebreos 8:6-13; 9:11-15; 10:15-18',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/ultima-cena.webp', alt: 'En un aposento alto iluminado por lámparas de aceite, Jesús, visto de espaldas, levanta una copa de vino frente a sus discípulos reclinados alrededor de una mesa baja; Pedro y Juan, cerca de Él, lo miran atentos', pie: '«Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama» (Lucas 22:20).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero ahora tanto mejor ministerio es el suyo, cuanto es mediador de un mejor pacto, establecido sobre mejores promesas. Porque si aquel primero hubiera sido sin defecto, ciertamente no se hubiera procurado lugar para el segundo. Porque reprendiéndolos dice: He aquí vienen días, dice el Señor, En que estableceré con la casa de Israel y la casa de Judá un nuevo pacto; No como el pacto que hice con sus padres El día que los tomé de la mano para sacarlos de la tierra de Egipto; Porque ellos no permanecieron en mi pacto, Y yo me desentendí de ellos, dice el Señor. Por lo cual, este es el pacto que haré con la casa de Israel Después de aquellos días, dice el Señor: Pondré mis leyes en la mente de ellos, Y sobre su corazón las escribiré; Y seré a ellos por Dios, Y ellos me serán a mí por pueblo; Y ninguno enseñará a su prójimo, Ni ninguno a su hermano, diciendo: Conoce al Señor; Porque todos me conocerán, Desde el menor hasta el mayor de ellos. Porque seré propicio a sus injusticias, Y nunca más me acordaré de sus pecados y de sus iniquidades. Al decir: Nuevo pacto, ha dado por viejo al primero; y lo que se da por viejo y se envejece, está próximo a desaparecer.', ref: 'Hebreos 8:6-13' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El pacto del Sinaí y el nuevo pacto en Hebreos',
          cab: ['', 'Pacto del Sinaí', 'Nuevo pacto'],
          filas: [
            ['Mediador', 'Moisés', 'Jesucristo (He 9:15; 12:24)'],
            ['Sangre', 'De machos cabríos y becerros', 'La de Cristo, una vez para siempre (He 9:12)'],
            ['Sacerdocio', 'Levítico, muchos sacerdotes que morían', 'Cristo, sacerdote para siempre (He 7:23-25)'],
            ['Ley', 'Escrita en tablas de piedra', 'Escrita en el corazón (He 8:10)'],
            ['Perdón', 'Sacrificios que se repetían cada año', '«nunca más me acordaré de sus pecados» (He 10:17)'],
            ['Acceso a Dios', 'Solo el sumo sacerdote, una vez al año', 'Todo creyente, con libertad (He 10:19-22)']
          ]
        } }
      ],
      texto: [
        'La noche antes de su muerte, Jesús celebró la Pascua con sus discípulos. Después de cenar, tomó la copa y dijo: «Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama» (Lc 22:20). Los discípulos conocían de memoria las palabras de Moisés en el Sinaí, «He aquí la sangre del pacto» (Éx 24:8), y la promesa de Jeremías de un nuevo pacto. Jesús unió las dos: el nuevo pacto anunciado se inauguraba con su sangre.',
        { h: 'Un pacto que necesita una muerte' },
        'Hebreos explica por qué. La palabra griega para pacto, diathéke, también significa testamento, y un testamento solo entra en vigor cuando muere quien lo hizo (He 9:16-17). Cristo murió, y por eso es «mediador de un nuevo pacto, para que interviniendo muerte para la remisión de las transgresiones que había bajo el primer pacto, los llamados reciban la promesa de la herencia eterna» (He 9:15). Su sangre perdona aun los pecados de quienes vivieron bajo el pacto antiguo y creyeron.',
        { h: 'Un pacto mejor' },
        'Hebreos repite la palabra «mejor»: Cristo es «mediador de un mejor pacto, establecido sobre mejores promesas» (He 8:6). La tabla resume las diferencias. El pacto antiguo tenía sacerdotes que morían y sacrificios que se repetían; el nuevo tiene un sacerdote que vive para siempre y un sacrificio hecho una sola vez. El antiguo tenía la ley en piedra; el nuevo la escribe en el corazón. Por eso Hebreos concluye: «Al decir: Nuevo pacto, ha dado por viejo al primero» (He 8:13).',
        { h: 'Cada vez que celebramos la Cena' },
        'La Cena del Señor es la señal del nuevo pacto. Pablo transmite las palabras de Jesús: «Esta copa es el nuevo pacto en mi sangre; haced esto todas las veces que la bebiereis, en memoria de mí» (1 Co 11:25). Cada vez que la iglesia participa, recuerda el pacto que la une a Dios, anuncia la muerte del Señor y espera su regreso (1 Co 11:26). No es un rito vacío: es la mesa del pacto.',
        { ir: { t: 'Ver «Un sumo sacerdote mejor» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/2' } },
        { ejercicio: {
          pregunta: '¿Qué relación tienen las palabras de Jesús en la última cena con el Antiguo Testamento?',
          opciones: [
            { t: 'Ninguna: Jesús inventó un rito nuevo sin relación con la historia de Israel.', ok: false, por_que: 'Sus palabras retoman Éxodo 24:8 y Jeremías 31:31.' },
            { t: 'Unen la sangre del pacto del Sinaí con el nuevo pacto prometido por Jeremías.', ok: true, por_que: 'Jesús anuncia que el nuevo pacto se inaugura con su propia sangre.' },
            { t: 'Repiten el pacto del Sinaí sin cambios.', ok: false, por_que: 'Jesús habla de un nuevo pacto, no de renovar el antiguo.' }
          ],
          explicacion: 'En la última cena, Jesús inaugura con su sangre el nuevo pacto anunciado por los profetas.'
        } }
      ],
      pensar: 'Cada vez que participas de la Cena del Señor, recuerdas el pacto sellado con la sangre de Cristo. ¿Cómo puedes prepararte para vivirla así la próxima vez?'
    },
    {
      id: 'ley-creyente', n: '¿Qué pasa con el pacto del Sinaí?', ref: 'Mateo 5:17-18; Romanos 7:4-6, 12; 8:3-4; 10:4; Gálatas 3:23-25; 2 Corintios 3:6-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces, ¿para qué sirve la ley? Fue añadida a causa de las transgresiones, hasta que viniese la simiente a quien fue hecha la promesa; y fue ordenada por medio de ángeles en mano de un mediador. Y el mediador no lo es de uno solo; pero Dios es uno. ¿Luego la ley es contraria a las promesas de Dios? En ninguna manera; porque si la ley dada pudiera vivificar, la justicia fuera verdaderamente por la ley. Mas la Escritura lo encerró todo bajo pecado, para que la promesa que es por la fe en Jesucristo fuese dada a los creyentes. Pero antes que viniese la fe, estábamos confinados bajo la ley, encerrados para aquella fe que iba a ser revelada. De manera que la ley ha sido nuestro ayo, para llevarnos a Cristo, a fin de que fuésemos justificados por la fe. Pero venida la fe, ya no estamos bajo ayo,', ref: 'Gálatas 3:19-25' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que el Nuevo Testamento dice de la ley',
          cab: ['La ley es…', 'Pero el creyente…', 'Pasajes'],
          filas: [
            ['Santa, justa y buena', 'Ya no está bajo la ley como pacto', 'Ro 7:12; 6:14'],
            ['Un ayo que llevaba a Cristo', 'Venida la fe, ya no está bajo ayo', 'Gá 3:24-25'],
            ['Cumplida por Cristo', 'Está bajo la ley de Cristo', 'Mt 5:17; 1 Co 9:21; Gá 6:2'],
            ['Débil por la carne', 'Cumple su justicia andando en el Espíritu', 'Ro 8:3-4'],
            ['Útil para enseñar y redargüir', 'La lee como Palabra de Dios, inspirada', '1 Ti 1:8; 2 Ti 3:16-17']
          ]
        } }
      ],
      texto: [
        'Si el nuevo pacto reemplazó al del Sinaí, surge una pregunta práctica: ¿qué hace un cristiano con la ley de Moisés? ¿Debe guardar el día de reposo, los alimentos limpios y las fiestas? ¿Puede ignorar los Diez Mandamientos? El Nuevo Testamento responde con dos verdades que hay que sostener juntas.',
        { h: 'La ley es buena y Cristo la cumplió' },
        'Jesús dijo: «No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17). Pablo afirma que «la ley a la verdad es santa, y el mandamiento santo, justo y bueno» (Ro 7:12). La ley sigue siendo Palabra de Dios, útil para enseñar (2 Ti 3:16), y revela su carácter santo. Ningún cristiano debe despreciarla.',
        { h: 'Pero no estamos bajo el pacto del Sinaí' },
        'Al mismo tiempo, Pablo dice: «no estáis bajo la ley, sino bajo la gracia» (Ro 6:14), y «venida la fe, ya no estamos bajo ayo» (Gá 3:25). El ayo era el esclavo que cuidaba a un niño hasta su mayoría de edad. La ley cumplió esa función con Israel hasta Cristo. Hebreos dice que, al cambiar el sacerdocio, cambió también la ley (He 7:12), y que el primer pacto quedó viejo (He 8:13). El creyente no está bajo el pacto del Sinaí como sistema, con sus sacrificios, su calendario, sus leyes de pureza y su señal.',
        { posturas: {
          titulo: '¿Qué parte de la ley obliga al cristiano?',
          a: { n: 'La ley moral sigue vigente como norma', t: 'La teología reformada divide la ley en moral, ceremonial y civil. Las leyes ceremoniales y civiles terminaron, pero la ley moral, resumida en los Diez Mandamientos, sigue obligando al creyente como regla de vida; muchos incluyen el día de reposo, trasladado al domingo.' },
          b: { n: 'El creyente está bajo la ley de Cristo', t: 'El pacto del Sinaí terminó como un todo, pero su justicia se cumple en el creyente que anda en el Espíritu (Ro 8:4). El cristiano está bajo «la ley de Cristo» (1 Co 9:21): los mandamientos de Jesús y los apóstoles, que repiten los principios morales eternos de la ley, como no matar, no adulterar y no robar, y los resumen en el amor (Ro 13:8-10).' },
          c: 'Este estudio sigue la segunda postura. Las dos coinciden en que el cristiano no se salva por la ley y en que debe vivir en santidad. La diferencia está en el día de reposo: el Nuevo Testamento repite nueve de los Diez Mandamientos, pero no manda guardar el sábado, y Pablo deja en libertad sobre los días (Ro 14:5; Col 2:16-17). El taller práctico vuelve sobre este punto.'
        } },
        'La conclusión práctica es liberadora y exigente a la vez. Liberadora, porque nadie puede imponer al creyente las ordenanzas del Sinaí como condición para agradar a Dios. Exigente, porque el Espíritu Santo produce una obediencia más profunda que la de la letra: Jesús pidió una justicia mayor que la de los escribas y fariseos (Mt 5:20), que alcanza el enojo, la mirada y el corazón.',
        { ir: { t: 'Ver «La ley» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#generos/3' } },
        { ejercicio: {
          pregunta: '¿Cuál de estas afirmaciones resume mejor lo que enseña el Nuevo Testamento sobre la ley de Moisés?',
          opciones: [
            { t: 'La ley es mala y el cristiano debe olvidarla.', ok: false, por_que: 'Pablo dice que la ley es santa, justa y buena (Ro 7:12).' },
            { t: 'La ley es buena, Cristo la cumplió, y el creyente vive su justicia por el Espíritu sin estar bajo el pacto del Sinaí.', ok: true, por_que: 'Así se unen Mateo 5:17, Romanos 7:12, Romanos 6:14 y Romanos 8:4.' },
            { t: 'El cristiano debe guardar toda la ley para mantener su salvación.', ok: false, por_que: 'Gálatas 5:4 dice que quienes buscan justificarse por la ley caen de la gracia.' }
          ],
          explicacion: 'El creyente honra la ley como Palabra de Dios y cumple su justicia andando en el Espíritu.'
        } }
      ],
      pensar: 'Jesús pidió una justicia mayor que la de los fariseos, que cumplían la letra de la ley. ¿En qué área de tu vida obedeces por fuera, pero Dios quiere cambiarte por dentro?'
    },
    {
      id: 'espiritu', n: 'El Espíritu, promesa del nuevo pacto', ref: 'Ezequiel 36:26-27; Joel 2:28-29; Hechos 1:4-5; 2:16-18, 38-39; 2 Corintios 3:3-6; Gálatas 3:14',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperios-historia/img/integrador-pentecostes.webp', alt: 'El día de Pentecostés en Jerusalén: los discípulos llenos del Espíritu Santo hablan a una multitud de judíos de muchas naciones', pie: '«Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hechos 2:39).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'siendo manifiesto que sois carta de Cristo expedida por nosotros, escrita no con tinta, sino con el Espíritu del Dios vivo; no en tablas de piedra, sino en tablas de carne del corazón. Y tal confianza tenemos mediante Cristo para con Dios; no que seamos competentes por nosotros mismos para pensar algo como de nosotros mismos, sino que nuestra competencia proviene de Dios, el cual asimismo nos hizo ministros competentes de un nuevo pacto, no de la letra, sino del espíritu; porque la letra mata, mas el espíritu vivifica.', ref: '2 Corintios 3:3-6' }
      ],
      texto: [
        'El nuevo pacto no es solo un perdón. Su gran novedad es el Espíritu Santo. Ezequiel lo había anunciado: «Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos» (Ez 36:27). Joel añadió que el Espíritu no se derramaría solo sobre profetas, sacerdotes y reyes, como en el Antiguo Testamento, sino «sobre toda carne», hijos e hijas, ancianos y jóvenes, siervos y siervas (Jl 2:28-29).',
        { h: 'La promesa del Padre' },
        'Antes de ascender, Jesús mandó a sus discípulos que no se fueran de Jerusalén, «sino que esperasen la promesa del Padre… Porque Juan ciertamente bautizó con agua, mas vosotros seréis bautizados con el Espíritu Santo dentro de no muchos días» (Hch 1:4-5). En Pentecostés, cincuenta días después de la Pascua, el Espíritu fue derramado y los discípulos hablaron en otras lenguas. Pedro explicó: «esto es lo dicho por el profeta Joel» (Hch 2:16).',
        'Al terminar su predicación, Pedro dijo a la multitud: «Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). La promesa del Espíritu no quedó en el primer siglo: alcanza a todas las generaciones que el Señor llama.',
        { h: 'Ministros de un nuevo pacto' },
        'Pablo describe a los creyentes de Corinto como una carta de Cristo «escrita no con tinta, sino con el Espíritu del Dios vivo; no en tablas de piedra, sino en tablas de carne del corazón» (2 Co 3:3). Es la promesa de Jeremías hecha realidad. Y se llama a sí mismo ministro «de un nuevo pacto, no de la letra, sino del espíritu; porque la letra mata, mas el espíritu vivifica» (2 Co 3:6). La letra de la ley mostraba el pecado y condenaba; el Espíritu da vida y poder para obedecer.',
        'Por eso Pablo une la bendición de Abraham con el Espíritu: Cristo nos redimió «a fin de que por la fe recibiésemos la promesa del Espíritu» (Gá 3:14). El Espíritu que mora en el creyente, lo sella para el día de la redención y lo llena de poder para testificar es la garantía de que el nuevo pacto ya está en vigor. La persona y la obra del Espíritu Santo se estudiarán en un recurso propio.',
        { ir: { t: 'Ver «La promesa del Espíritu» en Hechos', a: '../../hechos/#espiritu/1' } },
        { ejercicio: {
          pregunta: '¿Qué tenía de nuevo la promesa de Joel 2:28 respecto del Antiguo Testamento?',
          opciones: [
            { t: 'Que por primera vez el Espíritu de Dios actuaría en el mundo.', ok: false, por_que: 'El Espíritu actuó desde la creación y en muchos personajes del Antiguo Testamento.' },
            { t: 'Que el Espíritu se derramaría sobre toda clase de personas, no solo sobre unos pocos.', ok: true, por_que: 'Joel menciona hijos e hijas, ancianos y jóvenes, siervos y siervas: toda carne.' },
            { t: 'Que el Espíritu se daría solo a los sacerdotes del templo.', ok: false, por_que: 'Es justo lo contrario: la promesa rompe esa limitación.' }
          ],
          explicacion: 'En el nuevo pacto, el Espíritu es para todo el pueblo de Dios, hoy como en Pentecostés.'
        } }
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es para todos los que el Señor llama. ¿Has buscado ser lleno del Espíritu Santo como los discípulos en Pentecostés?'
    },
    {
      id: 'gentiles', n: 'Los gentiles y los pactos', ref: 'Efesios 2:11-22; 3:4-6; Romanos 11:11-24; Hechos 10:44-48',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-olivo.svg', alt: 'Un olivo con la raíz marcada como «los patriarcas y las promesas», ramas naturales que representan a Israel, algunas desgajadas por incredulidad, y ramas de olivo silvestre injertadas que representan a los gentiles creyentes', pie: 'El olivo de Romanos 11: los gentiles injertados en la raíz de las promesas.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, acordaos de que en otro tiempo vosotros, los gentiles en cuanto a la carne, erais llamados incircuncisión por la llamada circuncisión hecha con mano en la carne. En aquel tiempo estabais sin Cristo, alejados de la ciudadanía de Israel y ajenos a los pactos de la promesa, sin esperanza y sin Dios en el mundo. Pero ahora en Cristo Jesús, vosotros que en otro tiempo estabais lejos, habéis sido hechos cercanos por la sangre de Cristo. Porque él es nuestra paz, que de ambos pueblos hizo uno, derribando la pared intermedia de separación, aboliendo en su carne las enemistades, la ley de los mandamientos expresados en ordenanzas, para crear en sí mismo de los dos un solo y nuevo hombre, haciendo la paz, y mediante la cruz reconciliar con Dios a ambos en un solo cuerpo, matando en ella las enemistades. Y vino y anunció las buenas nuevas de paz a vosotros que estabais lejos, y a los que estaban cerca; porque por medio de él los unos y los otros tenemos entrada por un mismo Espíritu al Padre. Así que ya no sois extranjeros ni advenedizos, sino conciudadanos de los santos, y miembros de la familia de Dios,', ref: 'Efesios 2:11-19' }
      ],
      texto: [
        'Para un judío del primer siglo, la idea de que los gentiles participaran de los pactos de Israel sin hacerse judíos era impensable. Pablo recuerda a los creyentes de Éfeso cómo estaban antes: «sin Cristo, alejados de la ciudadanía de Israel y ajenos a los pactos de la promesa, sin esperanza y sin Dios en el mundo» (Ef 2:12). No tenían ningún derecho a las promesas.',
        { h: 'Hechos cercanos por la sangre de Cristo' },
        '«Pero ahora en Cristo Jesús, vosotros que en otro tiempo estabais lejos, habéis sido hechos cercanos por la sangre de Cristo» (Ef 2:13). Cristo derribó la pared que separaba a judíos y gentiles, «aboliendo en su carne las enemistades, la ley de los mandamientos expresados en ordenanzas, para crear en sí mismo de los dos un solo y nuevo hombre» (Ef 2:15). Ahora los gentiles creyentes son conciudadanos de los santos y miembros de la familia de Dios.',
        'Pablo llama a esto un misterio, algo que Dios no había revelado antes con claridad: «que los gentiles son coherederos y miembros del mismo cuerpo, y copartícipes de la promesa en Cristo Jesús por medio del evangelio» (Ef 3:6). El Antiguo Testamento anunciaba la bendición de las naciones; lo nuevo es que judíos y gentiles formarían un solo cuerpo, la iglesia, en igualdad.',
        { h: 'El olivo' },
        'En Romanos 11, Pablo usa una imagen que el esquema dibuja. El olivo representa al pueblo de Dios arraigado en las promesas hechas a los patriarcas. Algunas ramas naturales, israelitas, fueron desgajadas por su incredulidad. En su lugar se injertaron ramas de olivo silvestre, los gentiles creyentes, que ahora participan «de la raíz y de la rica savia del olivo» (Ro 11:17).',
        'Pablo advierte a los gentiles contra el orgullo: «no te jactes contra las ramas; y si te jactas, sabe que no sustentas tú a la raíz, sino la raíz a ti» (Ro 11:18). Las ramas silvestres están en pie por la fe, no por mérito, y Dios puede volver a injertar las ramas naturales si no permanecen en incredulidad (Ro 11:20-24). La iglesia gentil vive de promesas que Dios hizo a Israel; por eso no puede mirar a Israel con desprecio.',
        { ejercicio: {
          pregunta: 'En el olivo de Romanos 11, ¿qué representan las ramas de olivo silvestre injertadas?',
          opciones: [
            { t: 'A los israelitas que no creyeron.', ok: false, por_que: 'Esos son las ramas naturales desgajadas por incredulidad.' },
            { t: 'A los gentiles que creen en Cristo y participan de las promesas.', ok: true, por_que: 'Pablo se dirige a los gentiles: «tú, siendo olivo silvestre, has sido injertado».' },
            { t: 'A los patriarcas, la raíz del árbol.', ok: false, por_que: 'La raíz sostiene a las ramas; las ramas injertadas dependen de ella.' }
          ],
          explicacion: 'Los gentiles creyentes viven de una raíz que no es suya: las promesas de Dios a los patriarcas.'
        } }
      ],
      pensar: 'Pablo dice que no sustentas tú a la raíz, sino la raíz a ti. ¿Cómo debería influir esto en tu actitud hacia el pueblo judío?'
    },
    {
      id: 'israel-iglesia', n: 'Israel y la iglesia: ¿quién hereda las promesas?', ref: 'Romanos 9:1-6; 11:1-2, 25-32; Gálatas 6:16; Hechos 1:6-7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque no quiero, hermanos, que ignoréis este misterio, para que no seáis arrogantes en cuanto a vosotros mismos: que ha acontecido a Israel endurecimiento en parte, hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo, como está escrito: Vendrá de Sion el Libertador, Que apartará de Jacob la impiedad. Y este será mi pacto con ellos, Cuando yo quite sus pecados. Así que en cuanto al evangelio, son enemigos por causa de vosotros; pero en cuanto a la elección, son amados por causa de los padres. Porque irrevocables son los dones y el llamamiento de Dios. Pues como vosotros también en otro tiempo erais desobedientes a Dios, pero ahora habéis alcanzado misericordia por la desobediencia de ellos, así también éstos ahora han sido desobedientes, para que por la misericordia concedida a vosotros, ellos también alcancen misericordia. Porque Dios sujetó a todos en desobediencia, para tener misericordia de todos.', ref: 'Romanos 11:25-32' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Israel y la iglesia en el Nuevo Testamento',
          cab: ['', 'Israel', 'La iglesia'],
          filas: [
            ['Origen', 'El llamado de Abraham', 'Pentecostés (Hch 2)'],
            ['Quiénes la forman', 'Los descendientes de Jacob', 'Judíos y gentiles creyentes, un solo cuerpo (Ef 2:15-16)'],
            ['Promesas propias', 'Nación, tierra, trono de David', 'Bendiciones espirituales en Cristo (Ef 1:3)'],
            ['En el nuevo pacto', 'Lo recibirá como nación cuando vuelva a su Mesías (Ro 11:26-27)', 'Ya participa de sus bendiciones (2 Co 3:6)'],
            ['Su futuro', 'Restauración en el reino (Hch 1:6; Ro 11:12)', 'Arrebatada para estar con el Señor (1 Ts 4:17)']
          ],
          nota: 'Distintos no significa enemigos: en Cristo, el judío creyente es miembro de la iglesia.'
        } }
      ],
      texto: [
        'Las estaciones anteriores llevan a una pregunta que divide a los intérpretes: si la iglesia participa de las bendiciones de los pactos, ¿quedan todavía promesas para Israel como nación? ¿O la iglesia es el nuevo Israel, que hereda todo lo prometido?',
        { posturas: {
          titulo: '¿La iglesia reemplazó a Israel?',
          a: { n: 'La iglesia es el nuevo Israel', t: 'Esta lectura, llamada teología del reemplazo o de la sustitución, sostiene que Israel perdió su lugar al rechazar a Cristo y que todas las promesas, incluidas la tierra y el trono, se cumplen ahora en la iglesia de manera espiritual. Cita Gálatas 6:16, «el Israel de Dios», y Gálatas 3:29.' },
          b: { n: 'Dios cumplirá también sus promesas a Israel', t: 'La iglesia participa de las bendiciones espirituales de los pactos, pero no reemplaza a Israel. Dios cumplirá las promesas nacionales cuando Israel se vuelva a su Mesías. Pablo dice que Dios no ha desechado a su pueblo (Ro 11:1-2) y que «todo Israel será salvo» (Ro 11:26).' },
          c: 'Este estudio sigue la segunda lectura. En Romanos 9 a 11, Pablo llama Israel a los descendientes de Jacob, no a la iglesia: habla de sus parientes según la carne y los distingue de los gentiles. En Gálatas 6:16, «el Israel de Dios» se refiere probablemente a los judíos que creen en Cristo. Y Pablo afirma que los israelitas, aunque hoy en su mayoría rechazan el evangelio, «en cuanto a la elección, son amados por causa de los padres. Porque irrevocables son los dones y el llamamiento de Dios» (Ro 11:28-29).'
        } },
        { h: 'Un endurecimiento en parte' },
        'Pablo explica el presente con una palabra precisa: «ha acontecido a Israel endurecimiento en parte, hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo» (Ro 11:25-26). En parte, porque siempre ha habido judíos que creen, como el mismo Pablo. Hasta, porque tiene un final. Y la salvación de Israel está unida al nuevo pacto: «Y este será mi pacto con ellos, Cuando yo quite sus pecados» (Ro 11:27).',
        { h: 'Dos pueblos, un mismo Salvador' },
        'Distinguir a Israel y la iglesia no significa que haya dos caminos de salvación. Judíos y gentiles se salvan de la misma manera: por gracia, mediante la fe en Jesucristo (Hch 4:12; Ro 10:12-13). La diferencia está en el papel de cada uno en el plan de Dios. La iglesia, nacida en Pentecostés, es el cuerpo de Cristo en esta etapa; Israel conserva las promesas nacionales que Dios le juró. La cuarta ruta muestra cómo esta distinción ordena la lectura de toda la historia bíblica.',
        { ir: { t: 'Ver «Israel y los pactos de Dios» en Los últimos tiempos', a: '../../escatologia/#temas/1' } },
        { ejercicio: {
          pregunta: 'En Romanos 11:26, ¿a quién se refiere Pablo con «todo Israel será salvo»?',
          opciones: [
            { t: 'A la iglesia, que es el nuevo Israel.', ok: false, por_que: 'En todo el pasaje, Israel se distingue de los gentiles: el endurecimiento de Israel dura hasta que entren los gentiles.' },
            { t: 'Al pueblo judío, que se volverá a su Mesías cuando termine el endurecimiento parcial.', ok: true, por_que: 'El versículo 25 habla del endurecimiento de Israel «hasta» la plenitud de los gentiles, y el 28 dice que son amados por causa de los padres.' },
            { t: 'A cada israelita de todas las épocas, crea o no en Cristo.', ok: false, por_que: 'Pablo habla de la salvación por el Libertador que quita los pecados, según el nuevo pacto (Ro 11:26-27).' }
          ],
          explicacion: 'Dios no ha desechado a Israel: su endurecimiento es parcial y temporal.'
        } }
      ],
      pensar: 'Pablo sufría por sus parientes que no creían (Ro 9:1-3). ¿Oras por la salvación del pueblo judío y de las personas que todavía no conocen a Cristo?'
    }
  ];

  window.__PACTOS.cristo = cristo;
})();
/* Pactos y dispensaciones · ruta IV. Las dispensaciones (ver encabezado en parte1.js) */
(() => {
  const ETAPA = (nombre, desde, hasta, resp, falla, juicio, gracia) => ({ tipo: 'tabla', titulo: 'Tabla', tabla: {
    titulo: `La dispensación ${nombre}`,
    cab: ['', ''],
    filas: [['Desde', desde], ['Hasta', hasta], ['Responsabilidad', resp], ['Fracaso', falla], ['Juicio', juicio], ['La gracia de Dios', gracia]],
    nota: 'En cada etapa, la salvación es por gracia mediante la fe; lo que cambia es la responsabilidad que Dios da.'
  } });

  const dispensaciones = [
    {
      id: 'que-es', n: 'Qué es una dispensación', ref: 'Lucas 16:1-2; 1 Corintios 9:17; Efesios 1:9-10; 3:2, 9; Colosenses 1:25',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La palabra oikonomía en el Nuevo Testamento',
          cab: ['Pasaje', 'Traducción en la RV 1960', 'Sentido'],
          filas: [
            ['Lc 16:2-4', 'mayordomía', 'La administración de los bienes de un señor'],
            ['1 Co 9:17', 'comisión', 'El encargo de predicar dado a Pablo'],
            ['Ef 1:10', 'dispensación', 'La administración final: reunir todo en Cristo'],
            ['Ef 3:2', 'administración', 'La gracia de Dios confiada a Pablo para los gentiles'],
            ['Ef 3:9', 'dispensación', 'El misterio escondido desde los siglos'],
            ['Col 1:25', 'administración', 'El ministerio de anunciar la palabra']
          ],
          nota: 'De oikos, «casa», y nómos, «ley» o «norma»: la manera de ordenar una casa. De ahí viene también la palabra «economía».'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo también a sus discípulos: Había un hombre rico que tenía un mayordomo, y éste fue acusado ante él como disipador de sus bienes. Entonces le llamó, y le dijo: ¿Qué es esto que oigo acerca de ti? Da cuenta de tu mayordomía, porque ya no podrás más ser mayordomo.', ref: 'Lucas 16:1-2' }
      ],
      texto: [
        'Las tres primeras rutas estudiaron los pactos. Esta estudia las dispensaciones, otra manera de ordenar la historia bíblica que se relaciona con los pactos pero no es lo mismo. Los pactos son compromisos de Dios; las dispensaciones son las etapas en que Dios administra su plan.',
        { h: 'Una palabra del Nuevo Testamento' },
        'La palabra viene del griego oikonomía, formada por oikos, casa, y nómos, norma. Significa la administración de una casa. Jesús la usa en la parábola del mayordomo infiel: el señor le dice «Da cuenta de tu mayordomía, porque ya no podrás más ser mayordomo» (Lc 16:2). Un mayordomo administraba los bienes de su señor con ciertas responsabilidades y debía rendir cuentas.',
        'Pablo usa la misma palabra para hablar del plan de Dios. Dios se propuso «reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos» (Ef 1:10). Y habla de «la administración de la gracia de Dios que me fue dada para con vosotros» (Ef 3:2), y de «la dispensación del misterio escondido desde los siglos en Dios» (Ef 3:9). La tabla reúne los pasajes: la RV 1960 traduce la misma palabra como mayordomía, comisión, dispensación o administración.',
        { h: 'Una definición' },
        'Una dispensación es una manera particular en que Dios administra su relación con la humanidad en una etapa de la historia. En cada una, Dios revela algo de su voluntad y da una responsabilidad; las personas fallan; viene un juicio; y Dios abre una nueva etapa con más revelación. No son caminos de salvación distintos, sino etapas de la revelación progresiva de un mismo plan.',
        'Pensar en dispensaciones ayuda a responder preguntas que todo lector de la Biblia se hace. ¿Por qué Israel ofrecía sacrificios de animales y nosotros no? ¿Por qué Abraham no guardaba el sábado y Moisés sí? ¿Por qué Jesús envió a los doce solo a Israel (Mt 10:5-6) y después a todas las naciones (Mt 28:19)? Dios no cambió, pero su manera de administrar su casa sí.',
        { ir: { t: 'Ver «Sentido literal y revelación progresiva» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/7' } },
        { ejercicio: {
          pregunta: '¿Qué significa la palabra griega oikonomía, traducida «dispensación»?',
          opciones: [
            { t: 'Un período de mil años.', ok: false, por_que: 'La palabra no indica una duración, sino una forma de administrar.' },
            { t: 'La administración o el orden de una casa.', ok: true, por_que: 'Viene de oikos, casa, y nómos, norma; Jesús la usa para la tarea de un mayordomo.' },
            { t: 'Un camino distinto de salvación.', ok: false, por_que: 'Las dispensaciones no son caminos de salvación, sino etapas de un mismo plan.' }
          ],
          explicacion: 'Una dispensación es la manera en que Dios administra su casa en una etapa de la historia.'
        } }
      ],
      pensar: 'Pablo veía su ministerio como una administración que Dios le había confiado (Ef 3:2). ¿Qué te ha confiado Dios a ti para administrar en esta etapa de tu vida?'
    },
    {
      id: 'una-salvacion', n: 'Una sola salvación, varias administraciones', ref: 'Génesis 15:6; Romanos 3:21-26; 4:1-8; Hebreos 11:4-7, 13; Hechos 10:43',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿Qué, pues, diremos que halló Abraham, nuestro padre según la carne? Porque si Abraham fue justificado por las obras, tiene de qué gloriarse, pero no para con Dios. Porque ¿qué dice la Escritura? Creyó Abraham a Dios, y le fue contado por justicia. Pero al que obra, no se le cuenta el salario como gracia, sino como deuda; mas al que no obra, sino cree en aquel que justifica al impío, su fe le es contada por justicia. Como también David habla de la bienaventuranza del hombre a quien Dios atribuye justicia sin obras, diciendo: Bienaventurados aquellos cuyas iniquidades son perdonadas, Y cuyos pecados son cubiertos. Bienaventurado el varón a quien el Señor no inculpa de pecado.', ref: 'Romanos 4:1-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que cambia y lo que no cambia',
          cab: ['No cambia en ninguna etapa', 'Cambia de una etapa a otra'],
          filas: [
            ['La salvación es por gracia (Ef 2:8)', 'Cuánto ha revelado Dios de su plan'],
            ['Se recibe por la fe (He 11:6)', 'Qué responsabilidad concreta da Dios'],
            ['Se basa en la muerte de Cristo (Ro 3:25; He 9:15)', 'Las señales y las formas de culto'],
            ['Dios es el mismo (Mal 3:6)', 'Con quién trata especialmente: la humanidad, Israel, la iglesia']
          ]
        } }
      ],
      texto: [
        'Antes de recorrer las dispensaciones hay que despejar un error común. Algunos piensan que en el Antiguo Testamento las personas se salvaban guardando la ley, y en el Nuevo, por la fe. Si fuera así, habría dos o más caminos de salvación. La Biblia enseña otra cosa.',
        { h: 'Abraham y David' },
        'Pablo toma dos ejemplos del Antiguo Testamento para demostrar que la salvación siempre fue por fe. El primero es Abraham: «¿qué dice la Escritura? Creyó Abraham a Dios, y le fue contado por justicia» (Ro 4:3). El segundo es David, que vivió bajo la ley y aun así habló de la bienaventuranza del hombre «a quien Dios atribuye justicia sin obras» (Ro 4:6). Uno vivió antes de la ley y otro bajo la ley: los dos fueron justificados por la fe.',
        'Hebreos 11 recorre la historia desde Abel hasta los profetas, y repite una y otra vez «por la fe». Abel, Enoc, Noé, Abraham, Moisés y Rahab agradaron a Dios por la fe, porque «sin fe es imposible agradar a Dios» (He 11:6). Ninguno se salvó por cumplir perfectamente un sistema.',
        { h: 'La cruz alcanza hacia atrás' },
        '¿En qué se basaba el perdón antes de Cristo? Los sacrificios del Antiguo Testamento no podían quitar los pecados por sí mismos (He 10:4). Dios perdonaba a los creyentes de antes en vista del sacrificio de Cristo, que todavía no había ocurrido. Pablo dice que Dios, en su paciencia, había pasado por alto los pecados pasados, y que en la cruz mostró su justicia (Ro 3:25-26). Hebreos dice que la muerte de Cristo fue «para la remisión de las transgresiones que había bajo el primer pacto» (He 9:15).',
        'Lo que sí cambió fue el contenido de la fe. Abel creyó lo que Dios le había revelado hasta entonces; Abraham creyó la promesa de una descendencia; un israelita creía en el Dios del pacto y ofrecía los sacrificios que Él mandaba; nosotros creemos en Cristo crucificado y resucitado. La fe siempre responde a la revelación disponible, y la revelación fue creciendo.',
        'Algunos maestros dispensacionalistas de comienzos del siglo XX escribieron frases que parecían enseñar otro camino de salvación bajo la ley. Sus sucesores las corrigieron, y hoy la enseñanza dispensacional afirma con claridad que en toda dispensación la salvación es por gracia, mediante la fe, sobre la base de la obra de Cristo.',
        { ejercicio: {
          pregunta: '¿Cómo se salvaba una persona en el Antiguo Testamento?',
          opciones: [
            { t: 'Cumpliendo la ley de Moisés sin fallar.', ok: false, por_que: 'Nadie cumplía la ley sin fallar; por eso existían los sacrificios. Pablo dice que por las obras de la ley nadie será justificado (Ro 3:20).' },
            { t: 'Por gracia, mediante la fe en lo que Dios había revelado, sobre la base de la obra futura de Cristo.', ok: true, por_que: 'Abraham y David fueron justificados por la fe (Ro 4), y la muerte de Cristo alcanzó los pecados cometidos bajo el primer pacto (He 9:15).' },
            { t: 'Ofreciendo suficientes sacrificios para pagar sus pecados.', ok: false, por_que: 'Hebreos 10:4 dice que la sangre de los toros y de los machos cabríos no puede quitar los pecados.' }
          ],
          explicacion: 'En todas las dispensaciones, la salvación es por gracia, mediante la fe, gracias a Cristo.'
        } }
      ],
      pensar: 'Abraham, David y tú se salvan de la misma manera. ¿Qué te dice esto sobre la unidad del pueblo de Dios a lo largo de la historia?'
    },
    {
      id: 'inocencia-conciencia', n: 'Inocencia y conciencia', ref: 'Génesis 1:26–3:24; 4:1-26; 6:5-8; Romanos 2:14-16',
      visual: [
        ETAPA('de la inocencia', 'La creación del hombre (Gn 1:26)', 'La caída (Gn 3)', 'No comer del árbol de la ciencia del bien y del mal (Gn 2:16-17)', 'Adán y Eva desobedecieron (Gn 3:6)', 'Expulsión del huerto y muerte (Gn 3:16-24)', 'La promesa de la simiente y las túnicas de pieles (Gn 3:15, 21)'),
        ETAPA('de la conciencia', 'La caída (Gn 3)', 'El diluvio (Gn 7)', 'Obedecer la conciencia y ofrecer el sacrificio aceptable (Gn 4:4-7)', 'La maldad del hombre llegó a ser «de continuo solamente el mal» (Gn 6:5)', 'El diluvio (Gn 7)', 'Noé halló gracia ante los ojos de Jehová (Gn 6:8)')
      ],
      texto: [
        'La enseñanza dispensacional clásica distingue siete etapas, que se recorren en esta y las próximas estaciones. Las tablas de cada estación muestran el mismo patrón: una responsabilidad, un fracaso, un juicio y una nueva expresión de la gracia de Dios.',
        { h: 'La inocencia' },
        'La primera etapa va desde la creación hasta la caída. Adán y Eva fueron creados sin pecado, en comunión directa con Dios, en un ambiente perfecto. Su responsabilidad era sencilla: cuidar el huerto y no comer de un solo árbol. Tenían todo a su favor, y aun así desobedecieron. La lección de esta etapa es que ni un ambiente perfecto garantiza la obediencia de una criatura libre que desconfía de Dios.',
        'El juicio fue la expulsión del huerto y la entrada de la muerte. Pero antes del juicio vino la promesa de la simiente que vencería a la serpiente (Gn 3:15), y Dios vistió a Adán y Eva con túnicas de pieles. La primera dispensación termina con la gracia.',
        { h: 'La conciencia' },
        'Desde la caída hasta el diluvio, el ser humano vivió sin una ley escrita, guiado por su conciencia, que ahora conocía el bien y el mal. Pablo dice que aun los gentiles sin ley muestran «la obra de la ley escrita en sus corazones, dando testimonio su conciencia» (Ro 2:15). Dios también había revelado la manera de acercarse a Él con sacrificios: Abel ofreció un sacrificio aceptable y Caín no (Gn 4:4-5). Dios advirtió a Caín que el pecado estaba a la puerta (Gn 4:7).',
        'El resultado fue el primer homicidio, la arrogancia de Lamec y una violencia cada vez mayor. Al final, «vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal» (Gn 6:5). La conciencia sola no detuvo el pecado. Vino el diluvio. Pero en medio de esa generación hubo quienes caminaron con Dios: Enoc, y Noé, que «halló gracia ante los ojos de Jehová» (Gn 6:8).',
        'Estas etapas no se borran del todo cuando llega la siguiente. La conciencia sigue actuando hoy en cada persona, y el ser humano sigue fallando como Adán. Cada dispensación agrega una nueva prueba, no elimina lo que Dios ya había revelado.',
        { ejercicio: {
          pregunta: '¿Qué enseña la etapa de la inocencia sobre el ser humano?',
          opciones: [
            { t: 'Que el pecado se debe solo a un ambiente malo.', ok: false, por_que: 'Adán y Eva estaban en un ambiente perfecto y aun así pecaron.' },
            { t: 'Que ni siquiera un ambiente perfecto garantiza la obediencia.', ok: true, por_que: 'El problema no estaba en el huerto, sino en la desconfianza hacia la palabra de Dios.' },
            { t: 'Que Dios no les dio suficiente información.', ok: false, por_que: 'El mandamiento era claro y la consecuencia también (Gn 2:17).' }
          ],
          explicacion: 'Cada etapa muestra que el ser humano necesita la gracia de Dios, no solo mejores condiciones.'
        } }
      ],
      pensar: 'Dios advirtió a Caín que el pecado estaba a la puerta y que debía dominarlo (Gn 4:7). ¿Qué puerta necesitas cerrar hoy?'
    },
    {
      id: 'gobierno-promesa', n: 'Gobierno humano y promesa', ref: 'Génesis 9:1-7; 11:1-9; 12:1-3; Éxodo 1:8-14; 19:8',
      visual: [
        ETAPA('del gobierno humano', 'El diluvio (Gn 8)', 'Babel (Gn 11)', 'Llenar la tierra y castigar el homicidio (Gn 9:1, 6)', 'Se unieron para no ser esparcidos y hacerse un nombre (Gn 11:4)', 'La confusión de las lenguas (Gn 11:7-9)', 'El llamado de Abraham (Gn 12:1-3)'),
        ETAPA('de la promesa', 'El llamado de Abraham (Gn 12)', 'El Sinaí (Éx 19)', 'Creer la promesa y permanecer en la tierra', 'Descendieron a Egipto y terminaron esclavos; en el Sinaí cambiaron la promesa por la ley (Éx 19:8)', 'La esclavitud en Egipto (Éx 1)', 'El éxodo y el pacto con Israel (Éx 12–14; 19)')
      ],
      texto: [
        'Después del diluvio, Dios dio a la humanidad una nueva responsabilidad, y luego, al fracasar esta, comenzó a trabajar por medio de un solo hombre y su familia.',
        { h: 'El gobierno humano' },
        'En el pacto con Noé, Dios mandó llenar la tierra y estableció la pena por el homicidio: «El que derramare sangre de hombre, por el hombre su sangre será derramada» (Gn 9:6). Por primera vez Dios delegaba en la sociedad la autoridad de juzgar. Pablo enseña que esa autoridad sigue vigente: las autoridades civiles son servidoras de Dios para castigar el mal (Ro 13:1-4).',
        'La humanidad volvió a fallar. En lugar de esparcirse por la tierra, se reunió en la llanura de Sinar y dijo: «edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra» (Gn 11:4). Era un gobierno humano unido contra el mandato de Dios, buscando su propia gloria. Dios confundió su lengua y los esparció.',
        { h: 'La promesa' },
        'Entonces Dios cambió de estrategia. En lugar de tratar con todas las naciones a la vez, llamó a Abraham y le dio las promesas que la ruta II estudió: tierra, descendencia y bendición. Por eso esta etapa se llama dispensación de la promesa. Abraham, Isaac, Jacob y sus hijos vivieron como extranjeros en Canaán, confiando en lo que Dios había dicho. La responsabilidad era creer y permanecer en la tierra.',
        'Los patriarcas tuvieron una fe real, pero también fallaron. Abraham bajó a Egipto en tiempo de hambre y mintió sobre Sara; Jacob engañó a su padre; los hijos de Jacob vendieron a José. Finalmente toda la familia descendió a Egipto, y con los años sus descendientes terminaron esclavos. En el Sinaí, cuando Dios les propuso un pacto condicional, el pueblo respondió con confianza en sí mismo: «Todo lo que Jehová ha dicho, haremos» (Éx 19:8). Muchos maestros ven ahí el paso de la promesa a la ley.',
        'Pero la promesa no terminó. Las etapas cambian; las promesas de Dios permanecen. Pablo insiste en que la ley, que vino después, no anuló la promesa (Gá 3:17). La dispensación de la promesa terminó como forma de administración, pero el pacto con Abraham sigue en pie hasta hoy.',
        { ejercicio: {
          pregunta: '¿Por qué la etapa que comienza con Abraham se llama «de la promesa»?',
          opciones: [
            { t: 'Porque Abraham prometió obedecer la ley.', ok: false, por_que: 'La ley vino siglos después. Las promesas las hizo Dios, no Abraham.' },
            { t: 'Porque Dios trató con Abraham y su familia sobre la base de lo que les prometió.', ok: true, por_que: 'La responsabilidad era creer la promesa de tierra, descendencia y bendición.' },
            { t: 'Porque en esa etapa terminaron todas las promesas de Dios.', ok: false, por_que: 'El pacto con Abraham sigue vigente; lo que terminó fue esa forma de administración.' }
          ],
          explicacion: 'Las dispensaciones cambian; las promesas de Dios permanecen.'
        } }
      ],
      pensar: 'Los constructores de Babel querían hacerse un nombre; a Abraham, Dios le prometió engrandecer su nombre (Gn 12:2). ¿Buscas hacerte un nombre o confías en lo que Dios hará contigo?'
    },
    {
      id: 'ley', n: 'La ley', ref: 'Éxodo 19:3-8; 2 Reyes 17:7-23; Romanos 3:19-20; Gálatas 3:19-24; Juan 1:17',
      visual: [
        ETAPA('de la ley', 'El Sinaí (Éx 19)', 'La muerte de Cristo; para la iglesia, Pentecostés (Hch 2)', 'Guardar el pacto del Sinaí con todos sus mandamientos (Éx 19:5)', 'Idolatría y desobediencia; rechazo del Mesías (2 R 17:15; Jn 1:11)', 'El exilio en Asiria y Babilonia; la destrucción de Jerusalén en el año 70', 'Los profetas, el sistema de sacrificios y, al final, el Mesías'),
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces, ¿para qué sirve la ley? Fue añadida a causa de las transgresiones, hasta que viniese la simiente a quien fue hecha la promesa; y fue ordenada por medio de ángeles en mano de un mediador. Y el mediador no lo es de uno solo; pero Dios es uno. ¿Luego la ley es contraria a las promesas de Dios? En ninguna manera; porque si la ley dada pudiera vivificar, la justicia fuera verdaderamente por la ley. Mas la Escritura lo encerró todo bajo pecado, para que la promesa que es por la fe en Jesucristo fuese dada a los creyentes. Pero antes que viniese la fe, estábamos confinados bajo la ley, encerrados para aquella fe que iba a ser revelada. De manera que la ley ha sido nuestro ayo, para llevarnos a Cristo, a fin de que fuésemos justificados por la fe.', ref: 'Gálatas 3:19-24' }
      ],
      texto: [
        'La dispensación de la ley es la más larga y la mejor documentada de la Biblia. Va desde el Sinaí hasta la muerte de Cristo, unos quince siglos, y ocupa la mayor parte del Antiguo Testamento. Durante ese tiempo Dios trató especialmente con la nación de Israel por medio del pacto del Sinaí.',
        { h: 'Para qué sirvió la ley' },
        'La ley tenía varios propósitos. Apartaba a Israel como nación santa entre las naciones. Revelaba la santidad de Dios y lo que Él espera. Ofrecía, por medio del tabernáculo, el sacerdocio y los sacrificios, un camino para que un pueblo pecador se acercara a un Dios santo. Y, sobre todo, mostraba el pecado: «por medio de la ley es el conocimiento del pecado» (Ro 3:20). La ley era un espejo que mostraba la mancha, no un jabón que la quitaba.',
        'Pablo resume su función con la imagen del ayo: «la ley ha sido nuestro ayo, para llevarnos a Cristo, a fin de que fuésemos justificados por la fe» (Gá 3:24). Cada sacrificio, cada fiesta y cada detalle del tabernáculo preparaba para el Mesías que había de venir.',
        { h: 'El fracaso y la gracia' },
        'La historia de Israel bajo la ley es, en gran parte, una historia de infidelidad. Poco después del Sinaí, el pueblo hizo un becerro de oro. Durante los jueces y los reyes, se fue tras dioses ajenos una y otra vez. El libro de Reyes explica la caída de Samaria así: «desecharon sus estatutos, y el pacto que él había hecho con sus padres» (2 R 17:15). Vinieron el exilio en Asiria y en Babilonia. Y cuando llegó el Mesías, «A lo suyo vino, y los suyos no le recibieron» (Jn 1:11).',
        'Pero en toda esa historia Dios mostró su gracia: envió jueces y profetas, perdonó una y otra vez, preservó un remanente fiel y cumplió su promesa enviando a su Hijo «nacido bajo la ley» (Gá 4:4). Juan resume el paso a la etapa siguiente: «Pues la ley por medio de Moisés fue dada, pero la gracia y la verdad vinieron por medio de Jesucristo» (Jn 1:17).',
        { h: '¿Cuándo terminó?' },
        'La dispensación de la ley terminó como forma de administración con la muerte de Cristo, que rasgó el velo del templo (Mt 27:51). La iglesia nace en Pentecostés, cincuenta días después. El templo siguió en pie unos cuarenta años más, y muchos creyentes judíos siguieron asistiendo a él, hasta que Roma lo destruyó en el año 70.',
        { ejercicio: {
          pregunta: '¿Cuál de estos fue un propósito de la ley, según Pablo?',
          opciones: [
            { t: 'Dar a Israel un camino para salvarse por sus propias obras.', ok: false, por_que: 'Pablo dice que por las obras de la ley nadie será justificado (Ro 3:20).' },
            { t: 'Mostrar el pecado y llevar a Cristo, como un ayo.', ok: true, por_que: 'Romanos 3:20 y Gálatas 3:24 describen esos dos propósitos.' },
            { t: 'Reemplazar para siempre la promesa hecha a Abraham.', ok: false, por_que: 'Gálatas 3:17 dice que la ley no invalidó la promesa.' }
          ],
          explicacion: 'La ley mostraba el pecado y preparaba el camino para Cristo.'
        } }
      ],
      pensar: 'La ley muestra el pecado como un espejo, pero no lo limpia. ¿Has tratado alguna vez de limpiarte con el espejo, en lugar de ir a Cristo?'
    },
    {
      id: 'gracia', n: 'La gracia: la iglesia', ref: 'Hechos 2:1-4; Efesios 3:1-11; Romanos 11:25; Tito 2:11-14; 1 Tesalonicenses 4:13-18',
      visual: [
        ETAPA('de la gracia', 'Pentecostés (Hch 2)', 'El arrebatamiento de la iglesia (1 Ts 4:16-17)', 'Creer en Cristo y vivir en santidad por el Espíritu, llevando el evangelio a todas las naciones (Jn 3:36; Mt 28:19-20)', 'Muchos rechazan el evangelio; apostasía en los postreros días (2 Ti 3:1-5; 4:3-4)', 'La tribulación sobre el mundo incrédulo (2 Ts 2:3-12)', 'El evangelio predicado en todo el mundo; la iglesia arrebatada antes de la ira (1 Ts 1:10)'),
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por esta causa yo Pablo, prisionero de Cristo Jesús por vosotros los gentiles; si es que habéis oído de la administración de la gracia de Dios que me fue dada para con vosotros; que por revelación me fue declarado el misterio, como antes lo he escrito brevemente, leyendo lo cual podéis entender cuál sea mi conocimiento en el misterio de Cristo, misterio que en otras generaciones no se dio a conocer a los hijos de los hombres, como ahora es revelado a sus santos apóstoles y profetas por el Espíritu: que los gentiles son coherederos y miembros del mismo cuerpo, y copartícipes de la promesa en Cristo Jesús por medio del evangelio, del cual yo fui hecho ministro por el don de la gracia de Dios que me ha sido dado según la operación de su poder. A mí, que soy menos que el más pequeño de todos los santos, me fue dada esta gracia de anunciar entre los gentiles el evangelio de las inescrutables riquezas de Cristo, y de aclarar a todos cuál sea la dispensación del misterio escondido desde los siglos en Dios, que creó todas las cosas; para que la multiforme sabiduría de Dios sea ahora dada a conocer por medio de la iglesia a los principados y potestades en los lugares celestiales, conforme al propósito eterno que hizo en Cristo Jesús nuestro Señor,', ref: 'Efesios 3:1-11' }
      ],
      texto: [
        'La dispensación en que vivimos comenzó en Pentecostés, cuando el Espíritu Santo fue derramado sobre los discípulos y nació la iglesia. Se la llama dispensación de la gracia o de la iglesia. No porque antes no hubiera gracia, sino porque ahora la gracia de Dios se manifiesta de una manera nueva y plena en Cristo, y porque Dios está formando un pueblo nuevo, el cuerpo de Cristo.',
        { h: 'Lo nuevo de esta etapa' },
        'Pablo llama a la iglesia un misterio, algo «que en otras generaciones no se dio a conocer a los hijos de los hombres» (Ef 3:5): que judíos y gentiles formen un solo cuerpo en Cristo, en igualdad. Además, el Espíritu Santo mora en cada creyente, como prometía el nuevo pacto. El evangelio ya no se anuncia solo a Israel, sino a todas las naciones. Y no hay templo de piedra, sacrificios de animales ni sacerdocio especial: la iglesia es el templo, Cristo es el sacrificio y todos los creyentes son sacerdotes.',
        { h: 'Responsabilidad y peligro' },
        'La responsabilidad en esta etapa es creer en Cristo y vivir para Él. La gracia no es permiso para pecar: «la gracia de Dios se ha manifestado para salvación a todos los hombres, enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente» (Tit 2:11-12). La iglesia tiene además una misión: hacer discípulos de todas las naciones, con el poder del Espíritu, hasta lo último de la tierra (Hch 1:8).',
        'El Nuevo Testamento anuncia que esta etapa también terminará con un fracaso general de la humanidad. En los postreros días vendrán tiempos peligrosos, muchos no sufrirán la sana doctrina (2 Ti 4:3) y habrá apostasía (2 Ts 2:3). Pero el fracaso del mundo no es el fracaso de la iglesia verdadera: Cristo prometió edificarla, y las puertas del Hades no prevalecerán contra ella (Mt 16:18).',
        { h: 'Un final distinto' },
        'Según la lectura que sigue este estudio, la dispensación de la iglesia termina de un modo único: con el arrebatamiento. «Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire» (1 Ts 4:17). La iglesia no pasará por la ira de Dios (1 Ts 1:10; 5:9). Después vendrá la tribulación, que en las setenta semanas de Daniel corresponde a la semana que falta, y en la que Dios vuelve a tratar especialmente con Israel. Todo esto se estudia en Los últimos tiempos.',
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } },
        { ejercicio: {
          pregunta: '¿Por qué se llama a la etapa actual «dispensación de la gracia», si siempre hubo gracia?',
          opciones: [
            { t: 'Porque antes de Cristo Dios no mostraba gracia a nadie.', ok: false, por_que: 'Dios mostró gracia a Adán, a Noé, a Abraham y a Israel.' },
            { t: 'Porque la gracia se manifiesta ahora plenamente en Cristo y Dios forma un pueblo nuevo, la iglesia.', ok: true, por_que: 'Juan 1:17 contrasta la ley dada por Moisés con la gracia y la verdad venidas por Jesucristo.' },
            { t: 'Porque ahora la obediencia ya no importa.', ok: false, por_que: 'Tito 2:11-12 dice que la gracia enseña a vivir sobria, justa y piadosamente.' }
          ],
          explicacion: 'La gracia no es nueva, pero en Cristo se manifiesta de manera plena.'
        } }
      ],
      pensar: 'La gracia de Dios nos enseña a renunciar a la impiedad (Tit 2:12). ¿Qué te está enseñando la gracia de Dios en esta temporada?'
    },
    {
      id: 'reino', n: 'El reino', ref: 'Apocalipsis 20:1-15; Isaías 2:2-4; 11:1-10; Zacarías 14:9, 16; Mateo 25:31-34; 1 Corintios 15:24-28',
      visual: [
        ETAPA('del reino', 'La segunda venida de Cristo (Ap 19:11-16)', 'El juicio final (Ap 20:11-15)', 'Obedecer al Rey, que reina en justicia (Is 11:3-5)', 'Al soltar a Satanás, las naciones se rebelan (Ap 20:7-9)', 'Fuego del cielo y el gran trono blanco (Ap 20:9-15)', 'Cielos nuevos y tierra nueva, donde mora la justicia (Ap 21:1-4)'),
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Saldrá una vara del tronco de Isaí, y un vástago retoñará de sus raíces. Y reposará sobre él el Espíritu de Jehová; espíritu de sabiduría y de inteligencia, espíritu de consejo y de poder, espíritu de conocimiento y de temor de Jehová. Y le hará entender diligente en el temor de Jehová. No juzgará según la vista de sus ojos, ni argüirá por lo que oigan sus oídos; sino que juzgará con justicia a los pobres, y argüirá con equidad por los mansos de la tierra; y herirá la tierra con la vara de su boca, y con el espíritu de sus labios matará al impío. Y será la justicia cinto de sus lomos, y la fidelidad ceñidor de su cintura. Morará el lobo con el cordero, y el leopardo con el cabrito se acostará; el becerro y el león y la bestia doméstica andarán juntos, y un niño los pastoreará. La vaca y la osa pacerán, sus crías se echarán juntas; y el león como el buey comerá paja. Y el niño de pecho jugará sobre la cueva del áspid, y el recién destetado extenderá su mano sobre la caverna de la víbora. No harán mal ni dañarán en todo mi santo monte; porque la tierra será llena del conocimiento de Jehová, como las aguas cubren el mar. Acontecerá en aquel tiempo que la raíz de Isaí, la cual estará puesta por pendón a los pueblos, será buscada por las gentes; y su habitación será gloriosa.', ref: 'Isaías 11:1-10' }
      ],
      texto: [
        'La última dispensación es el reino de Cristo sobre la tierra, que Apocalipsis 20 describe como un período de mil años. En ella se cumplen de manera visible las promesas de los pactos: el Hijo de David reina desde Jerusalén, Israel está restaurado en su tierra con un corazón nuevo y las naciones son bendecidas.',
        { h: 'Lo que anunciaron los profetas' },
        'Los profetas describieron ese reino con imágenes de paz y justicia. Las naciones subirán a Jerusalén para aprender los caminos de Dios, y «volverán sus espadas en rejas de arado» (Is 2:4). El Mesías, retoño del tronco de Isaí, juzgará con justicia a los pobres, y aun la naturaleza será transformada: «Morará el lobo con el cordero» (Is 11:6). «Y Jehová será rey sobre toda la tierra» (Zac 14:9). Satanás estará atado y no engañará a las naciones (Ap 20:2-3).',
        { h: 'La última prueba' },
        'Lo sorprendente es que, aun en ese reino perfecto, con Cristo presente y Satanás atado, habrá rebelión. Al final de los mil años Satanás será suelto por un poco de tiempo y engañará a las naciones, que rodearán el campamento de los santos y la ciudad amada; pero descenderá fuego del cielo y los consumirá (Ap 20:7-9). La última dispensación demuestra lo que todas las anteriores fueron mostrando: el problema del ser humano no es su ambiente, sino su corazón, y solo la gracia de Dios puede cambiarlo.',
        'Después viene el juicio ante el gran trono blanco y la creación de cielos nuevos y tierra nueva (Ap 20:11–21:4). Pablo describe ese momento final: Cristo entregará el reino al Padre, «para que Dios sea todo en todos» (1 Co 15:28). Es la «dispensación del cumplimiento de los tiempos», en que Dios reúne todas las cosas en Cristo (Ef 1:10).',
        { h: 'Un reino ya presente' },
        'Esto no significa que hoy Cristo no reine. Él reina a la diestra del Padre, y quienes creen en Él ya han sido trasladados «al reino de su amado Hijo» (Col 1:13). El reino de los mil años es la manifestación visible y terrenal de ese reino. El orden de los eventos del fin, las posturas sobre el milenio y sus pasajes se estudian con detalle en Los últimos tiempos.',
        { ir: { t: 'Ver «El milenio» en Los últimos tiempos', a: '../../escatologia/#eventos/20' } },
        { ejercicio: {
          pregunta: '¿Qué muestra la rebelión del final del milenio (Apocalipsis 20:7-9)?',
          opciones: [
            { t: 'Que el reino de Cristo fracasó.', ok: false, por_que: 'La rebelión es aplastada de inmediato; el reino de Cristo no fracasa.' },
            { t: 'Que el problema del ser humano está en su corazón, no en su ambiente.', ok: true, por_que: 'Aun con Cristo presente y Satanás atado mil años, hay quienes se rebelan cuando son tentados.' },
            { t: 'Que Satanás es más fuerte que Cristo.', ok: false, por_que: 'Fuego del cielo consume a los rebeldes y Satanás es lanzado al lago de fuego (Ap 20:9-10).' }
          ],
          explicacion: 'Todas las dispensaciones muestran la necesidad de la gracia; la última lo confirma.'
        } }
      ],
      pensar: 'En el reino, Jehová será rey sobre toda la tierra (Zac 14:9). ¿Cómo cambia tu manera de vivir hoy saber hacia dónde va la historia?'
    },
    {
      id: 'juntos', n: 'Pactos y dispensaciones juntos', ref: 'Efesios 1:9-10; Hebreos 1:1-2; Gálatas 4:4-5',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pactos-dispensaciones.svg', alt: 'Línea del tiempo de toda la historia bíblica dividida en siete dispensaciones, de la inocencia al reino, con los pactos marcados en el momento en que se hicieron: Noé, Abraham, el Sinaí, David y el nuevo pacto, y la cruz y Pentecostés en el centro', pie: 'Las siete dispensaciones y los pactos de Dios en una sola línea.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Las siete', src: 'img/esquema-dispensaciones.svg', alt: 'Siete escalones, uno por dispensación, con su responsabilidad, su fracaso y su juicio, y una flecha de la gracia de Dios que atraviesa todos', pie: 'En cada etapa: responsabilidad, fracaso, juicio y gracia.', origen: 'esquema' }
      ],
      texto: [
        'Esta estación pone juntos los dos temas del recurso. Los pactos y las dispensaciones se confunden a menudo, pero responden a preguntas distintas.',
        { h: 'Dos preguntas distintas' },
        'Los pactos responden a la pregunta: ¿qué ha prometido Dios y a quién? Son compromisos que Dios asume y que, en su mayoría, siguen vigentes aunque cambie la época. El pacto con Noé rige hoy; el pacto con Abraham sigue en pie; el pacto con David espera su cumplimiento visible; el nuevo pacto está en vigor desde la cruz.',
        'Las dispensaciones responden a otra pregunta: ¿cómo administra Dios su relación con la humanidad en cada etapa? Son períodos sucesivos, cada uno con su forma de culto y su responsabilidad. Cuando termina una dispensación, termina esa forma de administración, pero no las promesas de Dios.',
        { h: 'Cómo se relacionan' },
        'El esquema muestra que varias dispensaciones comienzan con un pacto. La del gobierno humano comienza con el pacto con Noé; la de la promesa, con el pacto con Abraham; la de la ley, con el pacto del Sinaí; la de la gracia, con la inauguración del nuevo pacto en la cruz y el don del Espíritu en Pentecostés; y la del reino traerá el cumplimiento visible de los pactos con Abraham, con David y del nuevo pacto para Israel.',
        'Hay pactos que atraviesan varias dispensaciones. El pacto con Abraham estaba vigente durante la ley, sigue vigente durante la gracia y se cumplirá en el reino. Por eso Pablo podía decir que la ley no anuló la promesa (Gá 3:17). Y hay un pacto que coincide con una sola dispensación: el del Sinaí, que comenzó y terminó con la dispensación de la ley.',
        { h: 'Un solo plan' },
        'Lo más importante del esquema es lo que lo une todo. «Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo» (He 1:1-2). Las muchas veces y maneras son las etapas; el Hijo es el centro. Todo el plan de Dios avanza hacia el momento en que reúna «todas las cosas en Cristo» (Ef 1:10).',
        { ejercicio: {
          pregunta: '¿Cuál es la diferencia principal entre un pacto y una dispensación?',
          opciones: [
            { t: 'No hay diferencia: son dos nombres para lo mismo.', ok: false, por_que: 'Un pacto es un compromiso de Dios; una dispensación es una etapa de su administración.' },
            { t: 'El pacto es una promesa de Dios que puede seguir vigente en varias etapas; la dispensación es una etapa en la forma en que Dios administra su plan.', ok: true, por_que: 'Por eso el pacto con Abraham atraviesa la ley, la gracia y el reino.' },
            { t: 'Los pactos son del Antiguo Testamento y las dispensaciones del Nuevo.', ok: false, por_que: 'Hay un nuevo pacto, y las dispensaciones abarcan toda la Biblia.' }
          ],
          explicacion: 'Los pactos dicen qué ha prometido Dios; las dispensaciones, cómo administra su plan en cada etapa.'
        } }
      ],
      pensar: 'Dios ha hablado de muchas maneras, pero su palabra final es el Hijo (He 1:1-2). ¿Ocupa Cristo el centro de tu manera de leer toda la Biblia?'
    },
    {
      id: 'historia', n: 'De dónde viene esta manera de leer', ref: '2 Timoteo 2:15; Efesios 1:10; Hechos 17:11',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Momentos en la historia de los pactos y las dispensaciones',
          cab: ['Fecha', 'Quién', 'Qué aportó'],
          filas: [
            ['Hacia 180', 'Ireneo de Lyon', 'Habla de varios pactos dados por Dios en la historia (Adán, Noé, Moisés y el evangelio)'],
            ['1646', 'Confesión de Westminster', 'Hace del pacto de obras y el pacto de gracia parte de la confesión de las iglesias presbiterianas'],
            ['1648', 'Johannes Cocceius', 'Organiza toda la teología en torno a los pactos de Dios'],
            ['Siglos XVII y XVIII', 'Pierre Poiret, Isaac Watts', 'Proponen divisiones de la historia en etapas o dispensaciones'],
            ['Hacia 1830', 'John Nelson Darby', 'Desarrolla el dispensacionalismo: distinción entre Israel y la iglesia, arrebatamiento antes de la tribulación'],
            ['1909', 'C. I. Scofield', 'La Biblia anotada de Scofield difunde las siete dispensaciones en todo el mundo'],
            ['1947–1948', 'Lewis Sperry Chafer', 'Teología sistemática dispensacional; el seminario de Dallas'],
            ['1965', 'Charles Ryrie', 'Resume el dispensacionalismo en tres rasgos esenciales'],
            ['1993', 'Craig Blaising y Darrell Bock', 'Formulan el dispensacionalismo progresivo']
          ],
          nota: 'Las fechas de obras antiguas son aproximadas.'
        } }
      ],
      texto: [
        'Es honesto reconocer que la palabra dispensacionalismo y el esquema de las siete dispensaciones son del siglo XIX. Eso no los hace verdaderos ni falsos: hay que examinarlos con la Escritura, como los de Berea examinaban lo que oían (Hch 17:11). Esta estación cuenta brevemente de dónde vienen.',
        { h: 'La iglesia antigua' },
        'La idea de que Dios trató con la humanidad en etapas distintas es antigua. Ireneo de Lyon, hacia el año 180, escribió que Dios dio varios pactos a lo largo de la historia: uno con Adán, otro con Noé, otro por medio de Moisés y el último por el evangelio. Muchos autores antiguos distinguían entre la época antes de la ley, bajo la ley y bajo la gracia. Lo que no hubo en los primeros siglos fue un sistema completo.',
        { h: 'La teología del pacto' },
        'Después de la Reforma, teólogos reformados como Johannes Cocceius ordenaron toda la teología en torno a dos grandes pactos: un pacto de obras con Adán y un pacto de gracia que abarca a todos los creyentes de todas las épocas. La Confesión de Westminster lo hizo parte de la fe de las iglesias presbiterianas. En este sistema, Israel y la iglesia son un solo pueblo de Dios en dos etapas, y las promesas a Israel se cumplen en la iglesia.',
        { h: 'El dispensacionalismo' },
        'En el siglo XIX, John Nelson Darby, uno de los iniciadores de los Hermanos de Plymouth en Gran Bretaña, desarrolló un sistema distinto. Insistió en leer las profecías en su sentido normal, en distinguir a Israel de la iglesia y en que la iglesia sería arrebatada antes de la tribulación. Sus ideas se difundieron en Estados Unidos por medio de conferencias bíblicas y, sobre todo, de la Biblia anotada de C. I. Scofield (1909), que presentaba las siete dispensaciones en sus notas. Millones de creyentes aprendieron así a ordenar la historia bíblica.',
        'Esta manera de leer llegó a las iglesias evangélicas de América Latina con los misioneros del siglo XX, junto con la Biblia de Scofield en español. Los primeros pentecostales adoptaron su esquema profético, pero no todas sus conclusiones, como se verá en la estación sobre los dones del Espíritu.',
        { h: 'Lo esencial' },
        'En 1965, Charles Ryrie resumió el dispensacionalismo en tres rasgos: la distinción entre Israel y la iglesia, la interpretación normal o literal de toda la Escritura, y la gloria de Dios como propósito final de la historia, no solo la salvación del ser humano. El número exacto de dispensaciones no es lo esencial.',
        { ejercicio: {
          pregunta: 'Que el sistema dispensacional se haya formulado en el siglo XIX, ¿significa que es falso?',
          opciones: [
            { t: 'Sí: todo lo que no enseñaron los primeros cristianos con esas palabras es un error.', ok: false, por_que: 'Con ese criterio habría que rechazar también la teología del pacto, formulada en el siglo XVII.' },
            { t: 'No: un sistema se juzga por si explica bien la Escritura, no por su fecha.', ok: true, por_que: 'Como los de Berea, hay que examinarlo con la Biblia (Hch 17:11).' },
            { t: 'No, porque los apóstoles enseñaron las siete dispensaciones con esos mismos nombres.', ok: false, por_que: 'Los nombres y el número de las dispensaciones son posteriores; la palabra oikonomía sí es bíblica.' }
          ],
          explicacion: 'Todo sistema teológico es una herramienta humana que debe someterse a la Escritura.'
        } }
      ],
      pensar: 'Los de Berea escudriñaban cada día las Escrituras para ver si lo que oían era así (Hch 17:11). ¿Revisas con la Biblia lo que aprendes, aun en este recurso?'
    },
    {
      id: 'tres-lecturas', n: 'Tres lecturas hoy', ref: 'Romanos 11:1-2, 25-29; Gálatas 3:29; 6:16; Efesios 2:14-16; Hechos 15:14-18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres maneras de ordenar la historia de la salvación',
          cab: ['', 'Teología del pacto', 'Dispensacionalismo progresivo', 'Dispensacionalismo clásico'],
          filas: [
            ['Israel y la iglesia', 'Un solo pueblo; la iglesia es el Israel verdadero', 'Distintos, pero unidos en un mismo plan', 'Dos pueblos con propósitos distintos'],
            ['Promesas nacionales a Israel', 'Se cumplen espiritualmente en la iglesia', 'Se cumplirán en el reino futuro', 'Se cumplirán en el reino futuro'],
            ['El reino de David', 'Cristo reina hoy en la iglesia', 'Ya inaugurado; se completará en el milenio', 'Futuro, en el milenio'],
            ['El nuevo pacto', 'Se cumple en la iglesia', 'Uno solo: la iglesia ya participa, Israel lo recibirá', 'La iglesia participa de sus bendiciones; Israel lo recibirá'],
            ['El milenio', 'Por lo general amilenial', 'Premilenial', 'Premilenial, con arrebatamiento antes de la tribulación'],
            ['Lectura de la profecía', 'Con frecuencia espiritual o simbólica', 'Literal, con más continuidad entre las etapas', 'Literal']
          ],
          nota: 'Son generalizaciones: dentro de cada lectura hay matices.'
        } }
      ],
      texto: [
        'Hoy los creyentes evangélicos que estudian estos temas suelen seguir una de tres grandes lecturas. Todas creen en la autoridad de la Biblia, en la salvación por gracia mediante la fe y en la segunda venida de Cristo. Difieren en cómo se relacionan Israel y la iglesia, y en cómo se cumplen las promesas de los pactos.',
        { h: 'Teología del pacto' },
        'La teología del pacto, propia de las iglesias reformadas y presbiterianas, ve un solo pacto de gracia que atraviesa toda la historia. Israel fue la forma del pueblo de Dios en el Antiguo Testamento, y la iglesia es su forma en el Nuevo. Las promesas a Israel, incluida la tierra, se cumplen espiritualmente en Cristo y en la iglesia. Su fortaleza es mostrar la unidad del plan de Dios y del pueblo de Dios.',
        { h: 'Dispensacionalismo clásico' },
        'El dispensacionalismo clásico, el de Darby, Scofield y Chafer, subraya la distinción entre Israel y la iglesia y la interpretación literal de las profecías. Espera un reino futuro de mil años en que Dios cumplirá a Israel todo lo prometido, y el arrebatamiento de la iglesia antes de la tribulación. Su fortaleza es tomar en serio las promesas a Israel tal como fueron dadas.',
        { h: 'Dispensacionalismo progresivo' },
        'Desde la década de 1990, algunos dispensacionalistas proponen una lectura progresiva. Mantienen la distinción entre Israel y la iglesia y el reino futuro, pero subrayan que el reino de David ya fue inaugurado con la resurrección y la exaltación de Cristo (Hch 2:30-36), y que hay un solo nuevo pacto, del que la iglesia participa ya y que Israel recibirá. Su fortaleza es unir el «ya» y el «todavía no».',
        { posturas: {
          titulo: '¿Cómo se cumplen las promesas de los pactos?',
          a: { n: 'Se cumplen en la iglesia', t: 'Para la teología del pacto, Cristo es el verdadero Israel y la iglesia, unida a Él, hereda todas las promesas. La tierra prometida se amplía a la nueva creación (Ro 4:13) y el trono de David es el reinado de Cristo desde el cielo.' },
          b: { n: 'Se cumplen en la iglesia y en Israel', t: 'Para el dispensacionalismo, la iglesia recibe ahora las bendiciones espirituales de los pactos, y Dios cumplirá además a Israel, en el reino futuro, las promesas nacionales que le juró, porque sus dones son irrevocables (Ro 11:29).' },
          c: 'Este estudio sigue la segunda postura, con la esperanza de un reino futuro y del arrebatamiento antes de la tribulación, y reconoce el aporte de la lectura progresiva: el reino de Cristo ya comenzó y se manifestará plenamente cuando vuelva. Creyentes sinceros sostienen las otras lecturas; las diferencias no deben romper la comunión.'
        } },
        { ir: { t: 'Ver «Cuatro maneras de entender el milenio» en Los últimos tiempos', a: '../../escatologia/#panorama/3' } },
        { ejercicio: {
          pregunta: '¿En qué se diferencian principalmente la teología del pacto y el dispensacionalismo?',
          opciones: [
            { t: 'En si la salvación es por gracia o por obras.', ok: false, por_que: 'Ambas enseñan la salvación por gracia mediante la fe.' },
            { t: 'En la relación entre Israel y la iglesia, y en cómo se cumplen las promesas a Israel.', ok: true, por_que: 'Para una, la iglesia hereda todas las promesas; para la otra, Dios cumplirá también a Israel lo prometido.' },
            { t: 'En si Cristo volverá o no.', ok: false, por_que: 'Las tres lecturas esperan la segunda venida de Cristo.' }
          ],
          explicacion: 'La gran pregunta es si Dios tiene todavía un plan para Israel como nación.'
        } }
      ],
      pensar: 'Creyentes que aman la Biblia llegan a conclusiones distintas en estos temas. ¿Cómo puedes sostener tus convicciones con firmeza y, a la vez, con amor por quienes piensan distinto?'
    },
    {
      id: 'dones', n: 'Dispensaciones y dones del Espíritu', ref: 'Hechos 2:16-18, 38-39; 1 Corintios 1:4-8; 12:4-11; 13:8-12; Efesios 4:11-13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará. Porque en parte conocemos, y en parte profetizamos; mas cuando venga lo perfecto, entonces lo que es en parte se acabará. Cuando yo era niño, hablaba como niño, pensaba como niño, juzgaba como niño; mas cuando ya fui hombre, dejé lo que era de niño. Ahora vemos por espejo, oscuramente; mas entonces veremos cara a cara. Ahora conozco en parte; pero entonces conoceré como fui conocido.', ref: '1 Corintios 13:8-12' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Cuando venga lo perfecto»: tres lecturas',
          cab: ['Lo perfecto es…', 'Consecuencia', 'Dificultad'],
          filas: [
            ['El canon completo del Nuevo Testamento', 'Los dones cesaron hacia fines del siglo I', 'Pablo dice que entonces veremos «cara a cara» y conoceremos como fuimos conocidos'],
            ['La madurez de la iglesia', 'Los dones disminuyen al crecer la iglesia', 'El pasaje no habla de una iglesia madura, sino del fin de lo parcial'],
            ['La venida de Cristo y el estado final', 'Los dones continúan hasta que Cristo vuelva', 'Es la lectura más natural del «cara a cara» (1 Co 13:12; 1 Jn 3:2)']
          ]
        } }
      ],
      texto: [
        'Esta estación toca un punto donde la historia del dispensacionalismo y la fe pentecostal se cruzan. Muchos maestros dispensacionalistas de fines del siglo XIX y comienzos del XX enseñaban que las señales y los dones milagrosos del Espíritu, como las lenguas, la profecía y las sanidades, pertenecieron solo a la época de los apóstoles. Según ellos, servían para confirmar el mensaje mientras se escribía el Nuevo Testamento, y cesaron cuando este estuvo completo. A esa postura se la llama cesacionismo.',
        'Cuando a comienzos del siglo XX se extendió el avivamiento pentecostal, con el bautismo en el Espíritu Santo y el hablar en lenguas, muchos de esos maestros lo rechazaron. Los pentecostales, en cambio, aceptaron el esquema profético dispensacional, con el arrebatamiento y el milenio, pero no aceptaron que los dones hubieran cesado.',
        { posturas: {
          titulo: '¿Cesaron los dones del Espíritu?',
          a: { n: 'Cesaron con los apóstoles', t: 'Las señales acreditaban a los apóstoles y su mensaje (He 2:3-4; 2 Co 12:12). Con el canon completo, «lo perfecto» de 1 Corintios 13:10, ya no son necesarias, y la iglesia se edifica con la Escritura.' },
          b: { n: 'Continúan hasta la venida de Cristo', t: 'Pedro dijo que la promesa del Espíritu es «para cuantos el Señor nuestro Dios llamare» (Hch 2:39). Pablo dice que a los corintios nada les faltaba en ningún don mientras esperaban «la manifestación de nuestro Señor Jesucristo» (1 Co 1:7), y que lo parcial termina cuando veamos «cara a cara» (1 Co 13:12).' },
          c: 'Este estudio sigue la segunda postura. Joel unió el derramamiento del Espíritu con «los postreros días» (Hch 2:17), y toda la era de la iglesia es parte de esos días. Ningún pasaje dice que los dones terminarían al completarse el canon. La distinción entre dispensaciones no obliga al cesacionismo: la dispensación de la iglesia comenzó con el Espíritu derramado y termina con la venida del Señor.'
        } },
        { h: 'Canon cerrado, dones vigentes' },
        'Afirmar que los dones continúan no significa que haya nueva revelación al nivel de la Escritura. El canon está cerrado, y toda profecía de hoy se juzga por la Palabra escrita (1 Co 14:29; 1 Ts 5:20-21). La profecía en la iglesia edifica, exhorta y consuela (1 Co 14:3); no añade doctrina. Así se evitan dos errores: negar la obra presente del Espíritu y poner experiencias por encima de la Biblia.',
        { ir: { t: 'Ver «Llenuras y dones del Espíritu» en Hechos', a: '../../hechos/#teologia/3' } },
        { ejercicio: {
          pregunta: 'Según 1 Corintios 1:7, ¿hasta cuándo esperaba Pablo que los dones estuvieran presentes en la iglesia?',
          opciones: [
            { t: 'Hasta que terminara de escribirse el Nuevo Testamento.', ok: false, por_que: 'El versículo no menciona el canon, sino la manifestación de Cristo.' },
            { t: 'Mientras la iglesia espera la manifestación de nuestro Señor Jesucristo.', ok: true, por_que: 'Pablo une el ejercicio de los dones con la espera de la venida de Cristo.' },
            { t: 'Solo mientras vivieran los apóstoles.', ok: false, por_que: 'Pablo escribe a una iglesia, no a apóstoles, y mira hacia la venida del Señor.' }
          ],
          explicacion: 'Los dones del Espíritu acompañan a la iglesia en toda la dispensación de la gracia, hasta que Cristo vuelva.'
        } }
      ],
      pensar: 'Pablo dice que a la iglesia no le falta ningún don mientras espera al Señor (1 Co 1:7). ¿Estás buscando y usando los dones del Espíritu para edificar a otros?'
    },
    {
      id: 'errores', n: 'Errores al dividir la Biblia', ref: '2 Timoteo 2:15; 3:16-17; Mateo 5:1-12; Romanos 15:4; 1 Corintios 10:11',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Errores frecuentes y cómo corregirlos',
          cab: ['Error', 'Qué dice', 'Corrección bíblica'],
          filas: [
            ['Ultradispensacionalismo', 'La iglesia comienza en Hechos 9, 13 o 28; el bautismo en agua y la Cena no son para hoy', 'La iglesia nace en Pentecostés (Hch 2:41-47; 11:15); Pablo practicó y enseñó el bautismo y la Cena (Hch 19:5; 1 Co 11:23-26)'],
            ['«Los evangelios no son para nosotros»', 'El Sermón del monte y las enseñanzas de Jesús son solo para Israel o para el reino', 'Jesús mandó enseñar a las naciones a guardar todo lo que Él mandó (Mt 28:20)'],
            ['Desprecio del Antiguo Testamento', 'Como estamos en otra dispensación, el Antiguo Testamento ya no sirve', 'Lo escrito antes se escribió para nuestra enseñanza (Ro 15:4; 1 Co 10:11; 2 Ti 3:16)'],
            ['Varios caminos de salvación', 'Bajo la ley se salvaban por obras', 'Siempre por gracia mediante la fe (Ro 4:1-8)'],
            ['Sistema sobre el texto', 'Forzar un pasaje para que calce en el esquema', 'El esquema es una herramienta; manda el texto']
          ]
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.', ref: '2 Timoteo 2:15' }
      ],
      texto: [
        'Pablo pidió a Timoteo que fuera un obrero «que usa bien la palabra de verdad» (2 Ti 2:15). La Reina-Valera de 1909 decía «que traza bien», y la versión inglesa del rey Jacobo, «que divide bien»; muchos dispensacionalistas usaron ese versículo como lema. Distinguir las etapas del plan de Dios es parte de usar bien la Palabra. Pero cualquier herramienta, mal usada, produce errores. Esta estación reúne los más frecuentes.',
        { h: 'El ultradispensacionalismo' },
        'Algunos llevaron la división de la Biblia al extremo. E. W. Bullinger, a fines del siglo XIX, enseñó que la iglesia, el cuerpo de Cristo, no comenzó en Pentecostés sino en Hechos 28, y que el bautismo en agua y la Cena del Señor no corresponden a esta dispensación. Otros ubican el comienzo en Hechos 9 o 13. Pero Pedro se refiere a Pentecostés como el principio, cuando el Espíritu cayó sobre ellos (Hch 11:15), Pablo bautizó a los creyentes y transmitió la Cena «hasta que él venga» (1 Co 11:26). La mayoría de los dispensacionalistas rechaza estas enseñanzas.',
        { h: '«Eso no es para nosotros»' },
        'Otro error es decir que el Sermón del monte o los evangelios no tienen aplicación para la iglesia, porque Jesús hablaba a Israel antes de la cruz. Es cierto que hay que leer cada pasaje en su contexto, y que algunas instrucciones eran para un momento particular, como el envío de los doce solo a Israel (Mt 10:5-6). Pero Jesús mandó a sus discípulos enseñar a todas las naciones «que guarden todas las cosas que os he mandado» (Mt 28:20). Las bienaventuranzas, la oración del Padre nuestro y el mandamiento del amor son para la iglesia.',
        { h: 'Despreciar el Antiguo Testamento' },
        'También es un error pensar que el Antiguo Testamento ya no sirve porque pertenece a otras dispensaciones. Pablo dice: «las cosas que se escribieron antes, para nuestra enseñanza se escribieron» (Ro 15:4). Los relatos de Israel en el desierto fueron escritos «para amonestarnos a nosotros» (1 Co 10:11). La pregunta correcta no es si un pasaje es para mí, sino cómo se aplica a mí, que vivo en el nuevo pacto. El taller práctico ejercita esa pregunta.',
        { ir: { t: 'Ver «¿Esa promesa es para mí?» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#errores/5' } },
        { ejercicio: {
          pregunta: '¿Qué responde mejor a quien dice que el Sermón del monte no es para la iglesia?',
          opciones: [
            { t: 'Que tiene razón, porque Jesús hablaba solo a judíos antes de la cruz.', ok: false, por_que: 'Jesús mandó enseñar a las naciones todo lo que Él había mandado (Mt 28:20).' },
            { t: 'Que hay que leerlo en su contexto, pero Jesús mandó enseñar a las naciones a guardar lo que Él enseñó.', ok: true, por_que: 'El contexto importa, pero las enseñanzas de Jesús son para sus discípulos de todas las épocas.' },
            { t: 'Que todo lo que dice la Biblia se aplica igual a todos, sin importar el contexto.', ok: false, por_que: 'Ese es el error contrario: algunas instrucciones eran para un momento particular, como Mateo 10:5-6.' }
          ],
          explicacion: 'Distinguir las etapas sirve para aplicar bien la Biblia, no para dejar de aplicarla.'
        } }
      ],
      pensar: 'Toda la Escritura es útil para enseñar y para instruir en justicia (2 Ti 3:16). ¿Hay partes de la Biblia que has dejado de leer porque pensabas que no eran para ti?'
    }
  ];

  window.__PACTOS.dispensaciones = dispensaciones;
})();
/* Pactos y dispensaciones · Taller práctico y armado de RUTA_DATA (ver encabezado en parte1.js) */
(() => {
  // Las cuatro preguntas del taller, con la respuesta de cada pasaje
  const PREGUNTAS = (titulo, r1, r2, r3, r4) => ({ tipo: 'tabla', titulo: 'Las 4 preguntas', tabla: {
    titulo,
    cab: ['Pregunta', 'Respuesta'],
    filas: [
      ['1. ¿A quién se dijo?', r1],
      ['2. ¿Bajo qué pacto o en qué etapa?', r2],
      ['3. ¿Qué principio permanece?', r3],
      ['4. ¿Cómo se vive en el nuevo pacto?', r4]
    ],
    nota: 'Leer un pasaje dentro de su pacto no le quita autoridad: permite aplicarlo bien.'
  } });

  const taller = [
    {
      id: 'genesis-12-3', n: 'Génesis 12:3', ref: 'Génesis 12:1-3; 27:29; Números 24:9; Gálatas 3:8-9; Romanos 11:17-18; 15:27',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré. Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición. Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra.', ref: 'Génesis 12:1-3' },
        PREGUNTAS('Génesis 12:3, paso a paso',
          'A Abraham, y luego a su descendencia: Isaac la repite a Jacob y Balaam a Israel (Gn 27:29; Nm 24:9)',
          'El pacto con Abraham, que es incondicional y sigue vigente',
          'Dios protege a su pueblo y bendice a las naciones por medio de él; Cristo es la simiente en quien llega la bendición',
          'Los creyentes reciben la bendición de Abraham por la fe (Gá 3:9) y deben gratitud y amor al pueblo judío (Ro 11:18; 15:27)')
      ],
      texto: [
        'Este taller aplica lo aprendido a pasajes que se citan mucho y que suelen leerse fuera de su pacto. Cada estación usa cuatro preguntas, que aparecen en la tabla: a quién se dijo el texto, bajo qué pacto o en qué etapa, qué principio permanece y cómo se vive en el nuevo pacto.',
        { h: 'El pasaje' },
        '«Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra» (Gn 12:3). En muchas iglesias se cita este versículo para enseñar que Dios bendice a quienes bendicen a Israel. ¿Es una aplicación correcta?',
        { h: 'A quién se dijo' },
        'La promesa se hizo a Abraham, y la Biblia la extiende a su descendencia. Isaac bendijo a Jacob con las mismas palabras: «Malditos los que te maldijeren, Y benditos los que te bendijeren» (Gn 27:29), y Balaam, contratado para maldecir a Israel, terminó repitiéndolas (Nm 24:9). La historia confirma el principio: Egipto, que oprimió a Israel, fue juzgado; Rahab, que protegió a los espías, fue salvada. El pacto con Abraham es incondicional y sigue vigente, como se vio en la ruta II.',
        { h: 'Qué principio permanece' },
        'Dios sigue teniendo un propósito para la descendencia de Abraham, y quien la desprecia se pone en contra de ese propósito. Pablo advierte a los creyentes gentiles: «no te jactes contra las ramas» (Ro 11:18), y dice que son deudores de Israel, porque participaron de sus bienes espirituales (Ro 15:27). El antisemitismo, que ha causado tanto sufrimiento en la historia, incluso en nombre de Cristo, es incompatible con la fe cristiana. El salmista invita a orar por la paz de Jerusalén (Sal 122:6).',
        { h: 'Lo que el texto no dice' },
        'Al mismo tiempo, el versículo no convierte cualquier decisión política de un Estado moderno en un mandato bíblico, ni enseña que los judíos se salven sin Cristo. Pablo, que amaba a su pueblo, oraba por su salvación (Ro 10:1). Y la parte final del versículo es la más importante: la bendición de todas las familias de la tierra, que llega por la fe en Cristo (Gá 3:8-9). Bendecir a Israel incluye desearle lo mejor que Dios ofrece: su Mesías.',
        { ejercicio: {
          pregunta: '¿Cuál es la aplicación más fiel de Génesis 12:3 para un creyente hoy?',
          opciones: [
            { t: 'Que Dios bendice económicamente a quien apoya cualquier decisión del Estado de Israel.', ok: false, por_que: 'El texto no habla de decisiones de gobiernos modernos ni promete riqueza por respaldarlas.' },
            { t: 'Amar al pueblo judío, rechazar el desprecio contra él, orar por su paz y por su salvación en Cristo.', ok: true, por_que: 'Así se unen el pacto vigente con Abraham, Romanos 11:18, Salmo 122:6 y Romanos 10:1.' },
            { t: 'Que el versículo ya no tiene ninguna aplicación porque se dijo a Abraham.', ok: false, por_que: 'El pacto con Abraham sigue vigente, y Pablo aplica su promesa a los gentiles (Gá 3:8-9).' }
          ],
          explicacion: 'Leer el pasaje dentro de su pacto evita tanto el desprecio como el uso político del texto.'
        } }
      ],
      pensar: 'La mayor bendición que puedes desear para cualquier pueblo es que conozca a Cristo. ¿Por qué pueblos o personas estás orando para que reciban esa bendición?'
    },
    {
      id: 'deuteronomio-28', n: 'Deuteronomio 28', ref: 'Deuteronomio 28:1-15; Gálatas 3:13-14; Efesios 1:3; Filipenses 4:11-19; 1 Timoteo 6:6-10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Acontecerá que si oyeres atentamente la voz de Jehová tu Dios, para guardar y poner por obra todos sus mandamientos que yo te prescribo hoy, también Jehová tu Dios te exaltará sobre todas las naciones de la tierra. Y vendrán sobre ti todas estas bendiciones, y te alcanzarán, si oyeres la voz de Jehová tu Dios. Bendito serás tú en la ciudad, y bendito tú en el campo. Bendito el fruto de tu vientre, el fruto de tu tierra, el fruto de tus bestias, la cría de tus vacas y los rebaños de tus ovejas. Benditas serán tu canasta y tu artesa de amasar. Bendito serás en tu entrar, y bendito en tu salir. Jehová derrotará a tus enemigos que se levantaren contra ti; por un camino saldrán contra ti, y por siete caminos huirán de delante de ti. Jehová te enviará su bendición sobre tus graneros, y sobre todo aquello en que pusieres tu mano; y te bendecirá en la tierra que Jehová tu Dios te da. Te confirmará Jehová por pueblo santo suyo, como te lo ha jurado, cuando guardares los mandamientos de Jehová tu Dios, y anduvieres en sus caminos. Y verán todos los pueblos de la tierra que el nombre de Jehová es invocado sobre ti, y te temerán. Y te hará Jehová sobreabundar en bienes, en el fruto de tu vientre, en el fruto de tu bestia, y en el fruto de tu tierra, en el país que Jehová juró a tus padres que te había de dar. Te abrirá Jehová su buen tesoro, el cielo, para enviar la lluvia a tu tierra en su tiempo, y para bendecir toda obra de tus manos. Y prestarás a muchas naciones, y tú no pedirás prestado. Te pondrá Jehová por cabeza, y no por cola; y estarás encima solamente, y no estarás debajo, si obedecieres los mandamientos de Jehová tu Dios, que yo te ordeno hoy, para que los guardes y cumplas, y si no te apartares de todas las palabras que yo te mando hoy, ni a diestra ni a siniestra, para ir tras dioses ajenos y servirles.', ref: 'Deuteronomio 28:1-14' },
        PREGUNTAS('Deuteronomio 28, paso a paso',
          'A la nación de Israel, a punto de entrar en Canaán',
          'El pacto del Sinaí, renovado en Moab: bendiciones y maldiciones nacionales en la tierra',
          'Dios bendice la obediencia y disciplina la desobediencia; su provisión viene de Él',
          'Bendiciones espirituales en Cristo (Ef 1:3), provisión de lo necesario (Fil 4:19) y libertad de la maldición de la ley (Gá 3:13)')
      ],
      texto: [
        'Deuteronomio 28 es uno de los capítulos más citados en ciertas predicaciones: «Bendito serás tú en la ciudad, y bendito tú en el campo» (Dt 28:3). Se lo usa para prometer riqueza, salud y éxito a quien obedezca, o a quien dé una ofrenda. Y la segunda mitad, con sus maldiciones, se usa a veces para enseñar que un creyente puede estar bajo maldiciones que debe romper.',
        { h: 'A quién y bajo qué pacto' },
        'El capítulo es parte del pacto que Moisés renovó con Israel en Moab, antes de entrar a la tierra. Sus bendiciones son nacionales y concretas: lluvia a su tiempo, cosechas, ganado, victoria sobre los enemigos, prosperidad «en el país que Jehová juró a tus padres que te había de dar» (Dt 28:11). Las maldiciones también: sequía, derrotas y, al final, el exilio. Es el lenguaje del pacto del Sinaí, condicional, aplicado a una nación en su tierra. Y la historia de Israel lo cumplió: hubo prosperidad bajo reyes fieles, y hubo exilio.',
        { h: 'Qué principio permanece' },
        'Hay verdades que no cambian. Dios bendice la obediencia y disciplina la desobediencia (He 12:5-11). Toda provisión viene de Él, y es bueno pedirle por la salud, el trabajo y el pan de cada día. Pero el nuevo pacto no promete riqueza a quien obedece. Pablo aprendió a vivir humildemente y a tener abundancia (Fil 4:12), y dijo: «gran ganancia es la piedad acompañada de contentamiento» (1 Ti 6:6). Jesús y los apóstoles fueron pobres, y la Biblia dice que quienes quieren vivir piadosamente padecerán persecución (2 Ti 3:12).',
        { h: 'Cómo se vive en el nuevo pacto' },
        'Las bendiciones del nuevo pacto son, ante todo, espirituales: Dios «nos bendijo con toda bendición espiritual en los lugares celestiales en Cristo» (Ef 1:3). Dios promete suplir lo que nos falta (Fil 4:19), no hacernos ricos. Y respecto de las maldiciones, Pablo es claro: «Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición» (Gá 3:13). El creyente no vive bajo las maldiciones del pacto del Sinaí. Si sufre, no es porque arrastre una maldición que deba romper con un rito, sino porque vive en un mundo caído, porque Dios lo disciplina como a un hijo o porque es perseguido por causa de Cristo.',
        { ejercicio: {
          pregunta: 'Un predicador promete que todo creyente que obedezca será rico, citando Deuteronomio 28:11. ¿Qué error comete?',
          opciones: [
            { t: 'Ninguno: el versículo es Palabra de Dios y se aplica igual hoy.', ok: false, por_que: 'Es Palabra de Dios, pero sus promesas materiales eran para Israel en su tierra, bajo el pacto del Sinaí.' },
            { t: 'Aplica a la iglesia promesas nacionales del pacto del Sinaí, que el nuevo pacto no repite.', ok: true, por_que: 'El nuevo pacto promete bendiciones espirituales y provisión, no riqueza; Pablo conoció la necesidad y la abundancia.' },
            { t: 'Que Dios no se interesa por las necesidades materiales de sus hijos.', ok: false, por_que: 'Dios sí se interesa: Filipenses 4:19 promete suplir lo que falta.' }
          ],
          explicacion: 'El principio de que Dios bendice la obediencia permanece; la forma de esa bendición cambia con el pacto.'
        } }
      ],
      pensar: 'Pablo aprendió a contentarse en la abundancia y en la necesidad (Fil 4:11-12). ¿Tu confianza en Dios depende de lo que tienes?'
    },
    {
      id: 'exodo-20-8', n: 'Éxodo 20:8: el día de reposo', ref: 'Éxodo 20:8-11; 31:13-17; Nehemías 9:13-14; Colosenses 2:16-17; Romanos 14:5-6; Hebreos 4:9-10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Habló además Jehová a Moisés, diciendo: Tú hablarás a los hijos de Israel, diciendo: En verdad vosotros guardaréis mis días de reposo; porque es señal entre mí y vosotros por vuestras generaciones, para que sepáis que yo soy Jehová que os santifico. Así que guardaréis el día de reposo, porque santo es a vosotros; el que lo profanare, de cierto morirá; porque cualquiera que hiciere obra alguna en él, aquella persona será cortada de en medio de su pueblo. Seis días se trabajará, mas el día séptimo es día de reposo consagrado a Jehová; cualquiera que trabaje en el día de reposo, ciertamente morirá. Guardarán, pues, el día de reposo los hijos de Israel, celebrándolo por sus generaciones por pacto perpetuo. Señal es para siempre entre mí y los hijos de Israel; porque en seis días hizo Jehová los cielos y la tierra, y en el séptimo día cesó y reposó.', ref: 'Éxodo 31:12-17' },
        PREGUNTAS('El día de reposo, paso a paso',
          'A los hijos de Israel: «señal es para siempre entre mí y los hijos de Israel» (Éx 31:17)',
          'El pacto del Sinaí, del que el sábado es la señal; no se manda a los patriarcas antes de Éxodo 16',
          'El ritmo de trabajo y descanso es un regalo de Dios (Mr 2:27); el pueblo de Dios necesita tiempo para adorarle',
          'El reposo verdadero está en Cristo (He 4:9-10); la iglesia se reúne el primer día, el día de la resurrección, con libertad de conciencia (Ro 14:5)'),
        { tipo: 'tabla', titulo: 'Los mandamientos', tabla: {
          titulo: 'Los Diez Mandamientos en el Nuevo Testamento',
          cab: ['Mandamiento', 'Repetido en el Nuevo Testamento'],
          filas: [
            ['No tendrás dioses ajenos', 'Hch 14:15; 1 Co 8:4-6'],
            ['No te harás imagen', '1 Jn 5:21; 1 Co 10:14'],
            ['No tomarás el nombre de Dios en vano', 'Stg 5:12; Mt 5:33-37'],
            ['Acuérdate del día de reposo', 'No se repite como mandamiento; Col 2:16-17'],
            ['Honra a tu padre y a tu madre', 'Ef 6:1-3'],
            ['No matarás', 'Ro 13:9'],
            ['No cometerás adulterio', 'Ro 13:9; 1 Co 6:9-10'],
            ['No hurtarás', 'Ro 13:9; Ef 4:28'],
            ['No dirás falso testimonio', 'Ef 4:25; Col 3:9'],
            ['No codiciarás', 'Ro 7:7; 13:9']
          ]
        } }
      ],
      texto: [
        '«Acuérdate del día de reposo para santificarlo» (Éx 20:8). El cuarto mandamiento es parte de los Diez, y algunos cristianos sostienen que la iglesia debe guardar el sábado, el séptimo día, como Israel. ¿Qué responde una lectura que toma en cuenta los pactos?',
        { h: 'Una enseñanza que el lector va a encontrar' },
        'La Iglesia Adventista del Séptimo Día, nacida en Estados Unidos en el siglo XIX y con muchos miembros en América Latina, enseña en sus creencias oficiales que el sábado, desde la puesta del sol del viernes hasta la del sábado, es el día de reposo que Dios mandó para todos los tiempos, y que guardarlo es señal de lealtad a Dios. Enseña además que, en los últimos días, la imposición del domingo se relacionará con la marca de la bestia. Otros grupos más pequeños sostienen enseñanzas parecidas. Muchos de sus miembros son personas sinceras que confiesan a Jesucristo como Salvador; la diferencia está en cómo leen los pactos.',
        { h: 'La señal del pacto del Sinaí' },
        'Génesis dice que Dios reposó el séptimo día y lo santificó (Gn 2:3), pero no registra ningún mandato de guardarlo a Adán, a Noé ni a Abraham. El primer mandato aparece en el desierto, con el maná (Éx 16:23-29). Nehemías lo confirma al orar: «les ordenaste el día de reposo santo para ti, y por mano de Moisés tu siervo les prescribiste mandamientos» (Neh 9:14). Y Dios lo llama la señal de su pacto con Israel: «Señal es para siempre entre mí y los hijos de Israel» (Éx 31:17). Como se vio en la ruta I, cada señal pertenece a su pacto.',
        { posturas: {
          titulo: '¿Debe el cristiano guardar el sábado?',
          a: { n: 'Sí: es un mandamiento eterno', t: 'El sábado se estableció en la creación, está en los Diez Mandamientos escritos por el dedo de Dios y Jesús lo guardó. Ningún pasaje lo cambió al domingo, y el reposo del séptimo día sigue obligando a todos los creyentes.' },
          b: { n: 'No como ley: el reposo se cumple en Cristo', t: 'El sábado fue la señal del pacto del Sinaí, que terminó. El Nuevo Testamento repite nueve de los Diez Mandamientos, pero no el cuarto. Pablo dice que nadie juzgue a los creyentes «en cuanto a días de fiesta, luna nueva o días de reposo, todo lo cual es sombra de lo que ha de venir; pero el cuerpo es de Cristo» (Col 2:16-17), y deja la observancia de días a la conciencia (Ro 14:5).' },
          c: 'Este estudio sigue la segunda postura. Los primeros cristianos se reunían el primer día de la semana, el día de la resurrección (Hch 20:7; 1 Co 16:2), y Juan lo llama «el día del Señor» (Ap 1:10). El domingo no es un sábado cristiano impuesto por ley, sino el día en que la iglesia, desde el principio, celebra a Cristo resucitado. Y el reposo que el sábado anunciaba es Cristo mismo: «queda un reposo para el pueblo de Dios» (He 4:9).'
        } },
        'El principio, sin embargo, permanece. Jesús enseñó que «El día de reposo fue hecho por causa del hombre» (Mr 2:27): el descanso es un regalo de Dios, y el creyente necesita apartar tiempo para adorar, congregarse y descansar en Él. Un cristiano que guarda el sábado por convicción, sin imponerlo ni condicionar la salvación a él, puede hacerlo con libertad (Ro 14:5-6).',
        { ejercicio: {
          pregunta: '¿Qué indica que el sábado pertenece al pacto del Sinaí de manera especial?',
          opciones: [
            { t: 'Que Dios reposó el séptimo día de la creación.', ok: false, por_que: 'Dios reposó en la creación, pero el mandato a las personas aparece recién con Israel en el desierto.' },
            { t: 'Que Dios lo llama señal entre Él y los hijos de Israel, y no se repite como mandamiento en el Nuevo Testamento.', ok: true, por_que: 'Éxodo 31:13-17 lo llama señal del pacto con Israel; Colosenses 2:16-17 lo llama sombra.' },
            { t: 'Que los cristianos nunca descansan.', ok: false, por_que: 'El principio del descanso permanece; lo que cambia es la ley del séptimo día como señal del pacto.' }
          ],
          explicacion: 'Cada señal pertenece a su pacto: el sábado al Sinaí, la Cena al nuevo pacto.'
        } }
      ],
      pensar: 'Jesús dijo que el día de reposo fue hecho para el ser humano (Mr 2:27). ¿Apartas tiempo cada semana para descansar en Dios y adorarle con su pueblo?'
    },
    {
      id: 'malaquias-3-10', n: 'Malaquías 3:10: el diezmo', ref: 'Malaquías 3:7-12; Génesis 14:18-20; 28:20-22; Mateo 23:23; 1 Corintios 9:13-14; 16:2; 2 Corintios 9:6-8',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../sacerdocio/img/sac-melquisedec.webp', alt: 'En el valle, al regreso de una batalla, Melquisedec, rey de Salem y sacerdote, sale al encuentro de Abram con pan y vino y lo bendice, mientras los hombres de Abram descansan con el botín', pie: '«Y le dio Abram los diezmos de todo» (Génesis 14:20).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Desde los días de vuestros padres os habéis apartado de mis leyes, y no las guardasteis. Volveos a mí, y yo me volveré a vosotros, ha dicho Jehová de los ejércitos. Mas dijisteis: ¿En qué hemos de volvernos? ¿Robará el hombre a Dios? Pues vosotros me habéis robado. Y dijisteis: ¿En qué te hemos robado? En vuestros diezmos y ofrendas. Malditos sois con maldición, porque vosotros, la nación toda, me habéis robado. Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde. Reprenderé también por vosotros al devorador, y no os destruirá el fruto de la tierra, ni vuestra vid en el campo será estéril, dice Jehová de los ejércitos. Y todas las naciones os dirán bienaventurados; porque seréis tierra deseable, dice Jehová de los ejércitos.', ref: 'Malaquías 3:7-12' },
        PREGUNTAS('Malaquías 3:10, paso a paso',
          'A Israel después del exilio, «la nación toda» (Mal 3:9), que había descuidado los diezmos del templo',
          'El pacto del Sinaí; pero el diezmo ya existía antes de la ley (Gn 14:20; 28:22)',
          'Todo es de Dios; honrarle con lo primero de lo que se recibe; sostener su obra y a sus siervos',
          'Dar con generosidad, con regularidad y en proporción a lo recibido, con alegría y no por miedo (1 Co 16:2; 2 Co 9:7)')
      ],
      texto: [
        '«Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde» (Mal 3:10). Pocos versículos se citan tanto en las iglesias. ¿Cómo se lee dentro de su pacto?',
        { h: 'El contexto de Malaquías' },
        'Malaquías profetizó hacia el año 430 a.C., después del regreso del exilio. El templo estaba reconstruido, pero el pueblo y los sacerdotes se habían enfriado. Ofrecían animales defectuosos, se divorciaban de sus esposas y habían dejado de traer los diezmos con que se sostenían los levitas (Neh 13:10-12). Dios los acusa: «¿Robará el hombre a Dios? Pues vosotros me habéis robado… En vuestros diezmos y ofrendas» (Mal 3:8). El alfolí era el depósito del templo. La palabra se dirige a la nación bajo el pacto del Sinaí.',
        { h: 'Antes de la ley' },
        'Pero el diezmo no comenzó con Moisés. Abraham dio a Melquisedec «los diezmos de todo» (Gn 14:20), siglos antes de la ley, en gratitud por la victoria que Dios le había dado. Jacob prometió en Betel: «de todo lo que me dieres, el diezmo apartaré para ti» (Gn 28:22). La ley lo reguló después para sostener a los levitas, celebrar las fiestas y socorrer al extranjero, al huérfano y a la viuda (Nm 18:21; Dt 14:28-29). Jesús, hablando a los fariseos, aprobó que diezmaran, aunque les reprochó olvidar «la justicia, la misericordia y la fe» (Mt 23:23).',
        { posturas: {
          titulo: '¿Sigue vigente el diezmo?',
          a: { n: 'Sí, como norma para la iglesia', t: 'El diezmo es anterior a la ley, como el ejemplo de Abraham, padre de los creyentes. Jesús lo aprobó, y Hebreos recuerda que Abraham diezmó a Melquisedec, figura de Cristo (He 7:4-10). Por eso muchas iglesias enseñan el diezmo como la medida bíblica para sostener la obra de Dios.' },
          b: { n: 'No se fija un porcentaje', t: 'El Nuevo Testamento no manda un porcentaje. Enseña a dar con regularidad, en proporción a lo recibido y con generosidad, como los macedonios, que dieron aun más allá de sus fuerzas (2 Co 8:1-5).' },
          c: 'Este estudio enseña el diezmo como una práctica buena y bíblica, que precede a la ley y que el Nuevo Testamento confirma con su enseñanza sobre la generosidad. Muchas iglesias lo siguen como el punto de partida de su ofrenda. Lo que el nuevo pacto cambia es el motivo: el creyente no da por temor a una maldición, porque Cristo lo redimió de la maldición de la ley (Gá 3:13), ni como una inversión para obtener ganancias, sino con gratitud y alegría, «porque Dios ama al dador alegre» (2 Co 9:7).'
        } },
        'El principio permanece: todo es de Dios, y honrarle con lo que recibimos es un acto de fe y de adoración. El Señor ordenó «a los que anuncian el evangelio, que vivan del evangelio» (1 Co 9:14), y la iglesia sostiene así a sus pastores y su misión. Dios sigue siendo fiel con quien da, aunque su bendición no siempre sea dinero: «el que siembra generosamente, generosamente también segará» (2 Co 9:6).',
        { ejercicio: {
          pregunta: '¿Qué cambia en el nuevo pacto respecto de Malaquías 3:10?',
          opciones: [
            { t: 'Que el creyente ya no necesita dar nada.', ok: false, por_que: 'El Nuevo Testamento enseña a dar con regularidad y generosidad (1 Co 16:2; 2 Co 9:6-7).' },
            { t: 'Que el creyente da con gratitud y alegría, no por temor a una maldición ni como inversión.', ok: true, por_que: 'Cristo nos redimió de la maldición de la ley (Gá 3:13), y Dios ama al dador alegre (2 Co 9:7).' },
            { t: 'Que dar el diezmo garantiza ganancias económicas mayores.', ok: false, por_que: 'Dios promete ser fiel con quien da, pero su bendición no es una transacción financiera.' }
          ],
          explicacion: 'El diezmo es una buena práctica bíblica; el nuevo pacto cambia el corazón con que se da.'
        } }
      ],
      pensar: 'Abraham dio el diezmo en gratitud por lo que Dios había hecho. ¿Tu ofrenda nace del agradecimiento, de la costumbre o del temor?'
    },
    {
      id: 'mateo-5-17', n: 'Mateo 5:17-19', ref: 'Mateo 5:17-20; Marcos 7:14-19; Romanos 10:4; Hebreos 7:18-19; 8:13; Gálatas 4:9-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir. Porque de cierto os digo que hasta que pasen el cielo y la tierra, ni una jota ni una tilde pasará de la ley, hasta que todo se haya cumplido. De manera que cualquiera que quebrante uno de estos mandamientos muy pequeños, y así enseñe a los hombres, muy pequeño será llamado en el reino de los cielos; mas cualquiera que los haga y los enseñe, éste será llamado grande en el reino de los cielos. Porque os digo que si vuestra justicia no fuere mayor que la de los escribas y fariseos, no entraréis en el reino de los cielos.', ref: 'Mateo 5:17-20' },
        PREGUNTAS('Mateo 5:17-19, paso a paso',
          'A los discípulos y a la multitud en Galilea, antes de la cruz',
          'Jesús, «nacido bajo la ley» (Gá 4:4), enseña dentro del pacto del Sinaí y anuncia su cumplimiento',
          'La Escritura no puede ser quebrantada; Cristo cumple todo lo que la ley y los profetas anunciaron',
          'El creyente honra la ley como Palabra de Dios, la lee a la luz de Cristo y vive una justicia mayor por el Espíritu')
      ],
      texto: [
        '«No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar, sino para cumplir» (Mt 5:17). Este versículo se usa a veces para enseñar que los cristianos deben guardar toda la ley de Moisés: el sábado, las fiestas de Israel y las leyes sobre los alimentos. Algunos movimientos recientes, que se presentan como un regreso a las raíces hebreas de la fe, insisten en esa enseñanza. ¿Qué dice el texto en su contexto?',
        { h: 'Cumplir, no abrogar' },
        'Jesús no vino a anular la ley ni a declararla equivocada. Vino a cumplirla. La cumplió obedeciéndola perfectamente, siendo el único que nunca pecó. La cumplió llevando a su meta todo lo que anunciaba: los sacrificios se cumplen en su cruz, el sacerdocio en su intercesión, las fiestas en su obra. Y la cumplió revelando su sentido más profundo: en el resto del capítulo, Jesús muestra que el mandamiento no matarás alcanza al enojo, y no adulterarás alcanza a la mirada (Mt 5:21-28).',
        'Jesús añade que ni una jota ni una tilde pasará de la ley «hasta que todo se haya cumplido» (Mt 5:18). Toda la ley se cumplirá; ninguna parte quedará sin cumplirse. Pero cumplir no es lo mismo que mantener vigente para siempre cada ordenanza. Cuando una promesa se cumple, la sombra da paso a la realidad.',
        { h: 'Lo que el mismo Nuevo Testamento muestra' },
        'El propio Jesús, poco después, declaró limpios todos los alimentos: Marcos comenta que al decir que lo que entra en el cuerpo no contamina al hombre, Jesús estaba «haciendo limpios todos los alimentos» (Mr 7:19). Hebreos dice que el mandamiento anterior queda abrogado por su debilidad e ineficacia, «pues nada perfeccionó la ley» (He 7:18-19), y que el primer pacto envejeció (He 8:13). Pablo se preocupa por los gálatas, que volvían a guardar «los días, los meses, los tiempos y los años» (Gá 4:10), como si eso los hiciera mejores cristianos.',
        { h: 'Una justicia mayor' },
        'Lo que Jesús pide en este pasaje no es más ceremonias, sino una justicia mayor: «si vuestra justicia no fuere mayor que la de los escribas y fariseos, no entraréis en el reino de los cielos» (Mt 5:20). Los fariseos cumplían con cuidado la letra, pero su corazón estaba lejos. La justicia mayor es la del corazón transformado por el Espíritu, que cumple «la justicia de la ley» (Ro 8:4) amando a Dios y al prójimo.',
        { ejercicio: {
          pregunta: '¿Qué quiso decir Jesús con «no he venido para abrogar, sino para cumplir»?',
          opciones: [
            { t: 'Que todos los cristianos deben guardar las fiestas y las leyes de alimentos de Israel.', ok: false, por_que: 'El mismo Jesús declaró limpios todos los alimentos (Mr 7:19), y Hebreos dice que el primer pacto envejeció.' },
            { t: 'Que Él lleva a su cumplimiento todo lo que la ley anunciaba y revela su sentido más profundo.', ok: true, por_que: 'Lo obedeció perfectamente, cumplió sus sombras y mostró que alcanza el corazón (Mt 5:21-28).' },
            { t: 'Que la ley era un error que había que corregir.', ok: false, por_que: 'Jesús dice explícitamente que no vino a abrogarla; la ley es santa (Ro 7:12).' }
          ],
          explicacion: 'Cristo es el cumplimiento de la ley: en Él, la sombra da paso a la realidad.'
        } }
      ],
      pensar: 'Jesús mostró que la ley alcanza al enojo y a la mirada (Mt 5:21-28). ¿En qué pensamientos o actitudes necesitas que el Espíritu cumpla en ti la justicia de Dios?'
    },
    {
      id: 'hechos-15', n: 'Hechos 15 y Gálatas 5: la circuncisión', ref: 'Hechos 15:1-29; Gálatas 2:3-5; 5:1-6; 6:15; Hechos 16:3; 1 Corintios 7:19',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-concilio.webp', alt: 'Los apóstoles y los ancianos de Jerusalén reunidos en una sala, escuchando a Jacobo, que habla de pie, mientras Pedro, Pablo y Bernabé están sentados entre ellos', pie: '«Ha parecido bien al Espíritu Santo, y a nosotros, no imponeros ninguna carga más» (Hechos 15:28).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Estad, pues, firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de esclavitud. He aquí, yo Pablo os digo que si os circuncidáis, de nada os aprovechará Cristo. Y otra vez testifico a todo hombre que se circuncida, que está obligado a guardar toda la ley. De Cristo os desligasteis, los que por la ley os justificáis; de la gracia habéis caído. Pues nosotros por el Espíritu aguardamos por fe la esperanza de la justicia; porque en Cristo Jesús ni la circuncisión vale algo, ni la incircuncisión, sino la fe que obra por el amor.', ref: 'Gálatas 5:1-6' },
        PREGUNTAS('Hechos 15 y Gálatas 5, paso a paso',
          'A creyentes gentiles a quienes algunos exigían circuncidarse y guardar la ley de Moisés',
          'La dispensación de la iglesia: la circuncisión era la señal del pacto con Abraham para Israel',
          'La salvación es por gracia; nadie puede añadir requisitos al evangelio',
          'Libertad en Cristo, sin imponer ritos para ser salvo, y amor que evita escandalizar a otros (Hch 15:28-29; 16:3)')
      ],
      texto: [
        'Esta última estación del taller reúne todo lo aprendido. El primer gran conflicto de la iglesia fue precisamente una pregunta sobre los pactos: ¿debían los gentiles que creían en Cristo circuncidarse y guardar la ley de Moisés?',
        { h: 'El problema' },
        'Algunos creyentes judíos de Judea llegaron a Antioquía y enseñaban: «Si no os circuncidáis conforme al rito de Moisés, no podéis ser salvos» (Hch 15:1). Para ellos, los gentiles debían hacerse judíos para ser parte del pueblo de Dios. Pablo y Bernabé se opusieron, y el asunto se llevó a los apóstoles y ancianos en Jerusalén.',
        { h: 'La decisión' },
        'Pedro recordó que Dios había dado el Espíritu Santo a los gentiles en casa de Cornelio sin que se circuncidaran, y preguntó: «¿por qué tentáis a Dios, poniendo sobre la cerviz de los discípulos un yugo que ni nuestros padres ni nosotros hemos podido llevar? Antes creemos que por la gracia del Señor Jesús seremos salvos, de igual modo que ellos» (Hch 15:10-11). Jacobo mostró con Amós que la entrada de los gentiles estaba anunciada. La carta del concilio dijo: «ha parecido bien al Espíritu Santo, y a nosotros, no imponeros ninguna carga más que estas cosas necesarias» (Hch 15:28): apartarse de la idolatría, de la sangre y de la inmoralidad, para cuidar la comunión con los creyentes judíos.',
        { h: 'Gálatas: no añadir nada a Cristo' },
        'En Gálatas, Pablo es aún más tajante: «si os circuncidáis, de nada os aprovechará Cristo» (Gá 5:2). No condena la circuncisión en sí: él mismo circuncidó a Timoteo para no escandalizar a los judíos a quienes iban a predicar (Hch 16:3). Lo que condena es convertirla en requisito para ser salvo. Quien busca justificarse por la ley queda obligado a cumplirla toda y cae de la gracia (Gá 5:3-4). «Porque en Cristo Jesús ni la circuncisión vale algo, ni la incircuncisión, sino la fe que obra por el amor» (Gá 5:6).',
        'El principio va mucho más allá de la circuncisión. Cada vez que alguien añade al evangelio un requisito para ser salvo, sea un día, un alimento, una costumbre o un rito, repite el error de Antioquía. Y cada vez que un creyente usa su libertad sin amor, olvida la carta del concilio. Distinguir los pactos y las dispensaciones sirve para esto: para estar firmes en la libertad con que Cristo nos hizo libres (Gá 5:1), y para usarla en amor.',
        { ejercicio: {
          pregunta: '¿Por qué Pablo circuncidó a Timoteo (Hechos 16:3), pero se negó a circuncidar a Tito (Gálatas 2:3)?',
          opciones: [
            { t: 'Porque cambió de opinión sobre la circuncisión.', ok: false, por_que: 'Las dos decisiones responden al mismo principio, en situaciones distintas.' },
            { t: 'Porque con Timoteo buscaba no escandalizar a los judíos, y con Tito algunos exigían la circuncisión como requisito.', ok: true, por_que: 'Pablo cede por amor cuando el evangelio no está en juego, y no cede cuando se quiere añadir un requisito para la salvación.' },
            { t: 'Porque Tito era judío y Timoteo griego.', ok: false, por_que: 'Es al revés: Tito era griego (Gá 2:3), y Timoteo tenía madre judía (Hch 16:1).' }
          ],
          explicacion: 'La libertad cristiana cede por amor, pero nunca acepta añadir requisitos al evangelio.'
        } },
        { ejercicio: {
          pregunta: 'Al terminar este recurso, ¿qué resume mejor la relación entre los pactos y Cristo?',
          opciones: [
            { t: 'Cada pacto fue un camino de salvación distinto, y Cristo es uno más.', ok: false, por_que: 'En todas las etapas la salvación fue por gracia, mediante la fe, sobre la base de la obra de Cristo.' },
            { t: 'Todas las promesas de los pactos son en Cristo «Sí» y «Amén», y Dios cumplirá cada una, a la iglesia y a Israel.', ok: true, por_que: 'Cristo es la simiente de Abraham, el Hijo de David y el mediador del nuevo pacto (2 Co 1:20).' },
            { t: 'Los pactos del Antiguo Testamento ya no tienen relación con los creyentes.', ok: false, por_que: 'Los creyentes son herederos de la promesa a Abraham (Gá 3:29) y participan del nuevo pacto anunciado por Jeremías.' }
          ],
          explicacion: 'Dios es fiel a cada palabra que juró, y todas sus promesas convergen en Cristo.'
        } }
      ],
      pensar: 'Pablo dijo: «Estad, pues, firmes en la libertad con que Cristo nos hizo libres» (Gá 5:1). ¿Hay algo que estés añadiendo a Cristo para sentirte aceptado por Dios?'
    }
  ];

  const P = window.__PACTOS;
  delete window.__PACTOS;
  window.RUTA_DATA = {
    titulo: 'Pactos y dispensaciones',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'pacto', grupo: 'Los pactos', n: 'I. ¿Qué es un pacto?', info: 'La palabra, los tratados antiguos, sus partes, las dos clases de pactos y los pactos entre personas', estaciones: P.pacto },
      { id: 'pactos', grupo: 'Los pactos', n: 'II. Los pactos de Dios', info: 'Del Edén y Noé al nuevo pacto, pasando por Abraham, el Sinaí, la tierra, el sacerdocio y David', estaciones: P.pactos,
        linea: { desde: -2200, hasta: 100, hitos: [
          { a: -2091, t: 'Abraham' }, { a: -1446, t: 'Sinaí' }, { a: -1406, t: 'Moab' },
          { a: -995, t: 'David' }, { a: -587, t: 'Jeremías' }, { a: 30, t: 'La Cena' }
        ] } },
      { id: 'cristo', grupo: 'Los pactos', n: 'III. Los pactos se cumplen en Cristo', info: 'La simiente de Abraham, el Hijo de David, el nuevo pacto, la ley, el Espíritu, los gentiles e Israel', estaciones: P.cristo },
      { id: 'dispensaciones', grupo: 'Las dispensaciones', n: 'IV. Las dispensaciones', info: 'Qué son, las siete etapas, su historia, las tres lecturas de hoy, los dones del Espíritu y los errores', estaciones: P.dispensaciones },
      { id: 'taller', grupo: 'Las dispensaciones', n: 'Taller práctico', info: 'Pasajes muy citados, leídos dentro de su pacto', estaciones: taller }
    ]
  };
})();
