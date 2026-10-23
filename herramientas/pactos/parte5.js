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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/12/1-3', ref: 'Génesis 12:1-3' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@dt/28/1-14', ref: 'Deuteronomio 28:1-14' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ex/31/12-17', ref: 'Éxodo 31:12-17' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mal/3/7-12', ref: 'Malaquías 3:7-12' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/5/17-20', ref: 'Mateo 5:17-20' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ga/5/1-6', ref: 'Gálatas 5:1-6' },
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
