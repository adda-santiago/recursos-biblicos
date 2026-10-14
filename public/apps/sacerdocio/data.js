/* ==========================================================
   Recursos Bíblicos — El sacerdocio en Israel · contenido de las rutas
   Motor: ../assets/js/ruta-estudio.js (recurso interactivo, sin 3D).
   Complementa a sumo-sacerdote/ (3D: las vestiduras) y tabernaculo/ (3D: recorridos y ceremonias).
   Fechas bíblicas según la cronología del texto (éxodo hacia 1446 a.C.), como el resto del sitio.
   Citas textuales: Reina-Valera 1960.
   ========================================================== */
(() => {
  const OTRA = '../';
  const TH = OTRA + 'templo-herodes/img/', RO = OTRA + 'imperio-romano/img/', EX = OTRA + 'exilio/img/';

  /* ---------------- Ruta I · Los tres órdenes ---------------- */
  const ordenes = [
    {
      id: 'origen', n: 'El origen del sacerdocio', ref: 'Éxodo 19:5-6; 28:1; 32:25-29; Números 3:5-13; Deuteronomio 33:8-10', fecha: -1446,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/sac-consagracion.webp', alt: 'A la entrada del tabernáculo en el desierto, Moisés derrama aceite de la unción sobre la cabeza de Aarón, vestido con las vestiduras del sumo sacerdote, mientras sus cuatro hijos, vestidos de lino blanco, y el pueblo observan', pie: 'Moisés unge a Aarón (Lv 8:12).', origen: 'ia' } ],
      texto: [
        'Este recurso explica el sacerdocio de Israel: quiénes eran los sacerdotes, qué hacían, cómo cambió su historia y cómo se cumple en Cristo. Complementa a dos recursos 3D del sitio: El sumo sacerdote, que muestra sus vestiduras prenda por prenda, y El tabernáculo, que muestra el santuario donde servía.',
        { h: 'Un reino de sacerdotes' },
        'Antes de establecer un sacerdocio especial, Dios dijo a todo Israel en el Sinaí: «vosotros me seréis un reino de sacerdotes, y gente santa» (Éx 19:6). Todo el pueblo debía representar a Dios ante las naciones. Dentro de ese pueblo, Dios eligió a una familia para servir en su santuario.',
        { h: 'Aarón y sus hijos' },
        '«Harás llegar delante de ti a Aarón tu hermano, y a sus hijos consigo, de entre los hijos de Israel, para que sean mis sacerdotes» (Éx 28:1). Aarón, hermano de Moisés, de la tribu de Leví, fue el primer sumo sacerdote, y sus hijos Nadab, Abiú, Eleazar e Itamar, los primeros sacerdotes. Desde entonces, solo los descendientes de Aarón podían ser sacerdotes.',
        { h: 'La tribu de Leví' },
        'Toda la tribu de Leví fue apartada para el servicio del santuario. Cuando el pueblo adoró el becerro de oro, los hijos de Leví se pusieron del lado de Dios (Éx 32:26-29). Y Dios los tomó en lugar de los primogénitos de Israel, que le pertenecían desde que los libró en la última plaga de Egipto: «Yo he tomado a los levitas de entre los hijos de Israel en lugar de todos los primogénitos» (Nm 3:12).',
        'Así se formaron tres órdenes: el sumo sacerdote, uno solo, a la cabeza; los sacerdotes, descendientes de Aarón; y los levitas, el resto de la tribu de Leví, al servicio de los sacerdotes y del santuario.',
        { h: 'Para qué un sacerdote' },
        'Un sacerdote es un mediador: representa al pueblo ante Dios y a Dios ante el pueblo. Ofrece los sacrificios por el pecado, intercede, bendice y enseña la ley. Moisés lo resumió en su bendición a Leví: «Ellos enseñarán tus juicios a Jacob, y tu ley a Israel; pondrán el incienso delante de ti, y el holocausto sobre tu altar» (Dt 33:10). Todo el sistema apuntaba a un problema: el pecado separa al hombre de Dios, y hace falta alguien que medie.'
      ],
      pensar: 'Dios llamó a todo Israel a ser «un reino de sacerdotes» (Éx 19:6), y dentro de él apartó a una familia para servir en el santuario. ¿Qué te enseña esto sobre el llamado de todo creyente y el de quienes sirven en un ministerio especial?'
    },
    {
      id: 'tres-ordenes', n: 'Sumo sacerdote, sacerdote y levita', ref: 'Éxodo 28–29; Levítico 16; 21; Números 3–4; 8; 18:1-7', fecha: -1446,
      visual: [ { tipo: 'tabla', titulo: 'Comparación', tabla: {
        titulo: 'Los tres órdenes del sacerdocio',
        cab: ['', 'Sumo sacerdote', 'Sacerdotes', 'Levitas'],
        filas: [
          ['Quiénes', 'Uno solo: Aarón y luego el primogénito de su línea', 'Los descendientes de Aarón', 'El resto de la tribu de Leví'],
          ['Vestiduras', 'Ocho prendas: cuatro de lino y cuatro de oro y colores (Éx 28)', 'Túnica, cinto, tiara y calzoncillos de lino (Éx 28:40-42)', 'Sin vestiduras sacerdotales en la ley'],
          ['Acceso', 'Lugar santísimo, una vez al año (Lv 16)', 'Lugar santo: candelero, mesa e incienso', 'Atrio; no podían tocar los objetos santos (Nm 4:15)'],
          ['Funciones', 'Día de la Expiación; Urim y Tumim; cabeza del sacerdocio', 'Sacrificios, incienso, lámparas, panes, bendición, enseñanza', 'Transporte, cuidado y guardia del santuario; música; ayuda a los sacerdotes'],
          ['Requisitos', 'Casarse con una virgen de su pueblo; no tocar muertos ni aun de su familia (Lv 21:10-15)', 'Sin defecto físico para ministrar (Lv 21:16-23)', 'Servir de 30 a 50 años al llevar el tabernáculo (Nm 4:3); de 25 en adelante (Nm 8:24)'],
          ['Consagración', 'Unción con aceite sobre la cabeza (Lv 8:12)', 'Rociados con aceite y sangre (Lv 8:30)', 'Purificados y presentados como ofrenda (Nm 8:5-22)']
        ]
      } } ],
      texto: [
        'La tabla compara los tres órdenes del sacerdocio. Cada uno tenía su lugar, y los límites eran estrictos.',
        { h: 'El sumo sacerdote' },
        'A la cabeza estaba el sumo sacerdote, llamado también «el sacerdote ungido» (Lv 4:3). Era uno solo a la vez, y el cargo pasaba de padre a hijo. Llevaba ocho prendas, cuatro de ellas exclusivas: el manto azul, el efod, el pectoral con las doce piedras y la lámina de oro en la mitra. Solo él podía entrar en el lugar santísimo, y solo una vez al año, el Día de la Expiación. El recurso El sumo sacerdote muestra sus vestiduras en 3D.',
        { ir: { t: 'Ver las vestiduras en 3D: El sumo sacerdote', a: '../../sumo-sacerdote/' } },
        'Sus normas de pureza eran las más estrictas: no podía contaminarse ni siquiera por la muerte de su padre o de su madre, y solo podía casarse con una virgen de su pueblo (Lv 21:10-15).',
        { h: 'Los sacerdotes' },
        'Los demás descendientes de Aarón eran sacerdotes. Vestían de lino blanco y servían en el atrio y en el lugar santo: ofrecían los sacrificios en el altar de bronce, quemaban incienso en el altar de oro, encendían las lámparas del candelero y renovaban los panes de la proposición cada día de reposo. También bendecían al pueblo y le enseñaban la ley. Un descendiente de Aarón con algún defecto físico podía comer de las cosas santas, pero no ministrar en el altar (Lv 21:16-23).',
        { h: 'Los levitas' },
        'Los levitas no eran sacerdotes, sino sus ayudantes. Dios mandó a Aarón que los levitas se juntaran con él, «y te servirán» (Nm 18:2). En el desierto, desarmaban, cargaban y armaban el tabernáculo; cada familia levita tenía a su cargo una parte: los coatitas, los objetos santísimos, cubiertos por los sacerdotes; los gersonitas, las cortinas; los meraritas, las tablas y columnas (Nm 4). No podían tocar los objetos santos, bajo pena de muerte (Nm 4:15). En tiempos de David, cuando el arca ya no se trasladaba, los levitas pasaron a ser porteros, tesoreros, cantores y maestros (1 Cr 23–26).'
      ],
      pensar: 'Cada orden del sacerdocio tenía su lugar, y ninguno era innecesario. ¿Qué lugar te ha dado Dios en el servicio de su pueblo, y cómo lo valoras?'
    },
    {
      id: 'consagracion', n: 'La consagración de los sacerdotes', ref: 'Éxodo 29; Levítico 8–9', fecha: -1445,
      visual: [ { tipo: 'tabla', titulo: 'Los pasos', tabla: {
        titulo: 'La consagración de Aarón y sus hijos (Levítico 8)',
        cab: ['Paso', 'Qué se hace', 'Versículos'],
        filas: [
          ['1. Lavamiento', 'Moisés los lava con agua a la entrada del tabernáculo', 'Lv 8:6'],
          ['2. Vestiduras', 'Viste a Aarón con las vestiduras sagradas, y a sus hijos con las de lino', 'Lv 8:7-9, 13'],
          ['3. Unción', 'Unge el tabernáculo, el altar y la cabeza de Aarón', 'Lv 8:10-12'],
          ['4. Expiación', 'Un becerro por el pecado de los sacerdotes', 'Lv 8:14-17'],
          ['5. Holocausto', 'Un carnero quemado entero: entrega total', 'Lv 8:18-21'],
          ['6. Consagración', 'Sangre del segundo carnero en la oreja, el pulgar y el pie derechos', 'Lv 8:22-24'],
          ['7. Siete días', 'No salen de la puerta del tabernáculo durante siete días', 'Lv 8:33-35'],
          ['8. Gloria', 'El octavo día, la gloria de Jehová aparece y el fuego consume el sacrificio', 'Lv 9:23-24']
        ]
      } } ],
      texto: [
        'Nadie podía hacerse sacerdote por iniciativa propia. Aarón y sus hijos fueron consagrados en una ceremonia de siete días, que Dios ordenó en Éxodo 29 y Moisés realizó en Levítico 8.',
        { h: 'Lavados y vestidos' },
        'Primero, Moisés los lavó con agua a la entrada del tabernáculo. Luego vistió a Aarón, prenda por prenda, con las vestiduras del sumo sacerdote, en el mismo orden que recorre el recurso El sumo sacerdote, y vistió a sus hijos con las túnicas, cintos y tiaras de lino. Antes de servir a Dios había que ser limpiado y revestido por él: no podían presentarse con su propia ropa.',
        { h: 'Ungidos' },
        'Moisés ungió con el aceite santo el tabernáculo y todo lo que había en él, y «derramó del aceite de la unción sobre la cabeza de Aarón, y lo ungió para santificarlo» (Lv 8:12). El Salmo 133 recuerda esa imagen: el buen óleo «sobre la cabeza, el cual desciende sobre la barba, la barba de Aarón» (Sal 133:2). Por eso al sumo sacerdote se le llamaba el sacerdote ungido. La palabra hebrea para ungido es mashíaj, de donde viene Mesías.',
        { h: 'Sangre en la oreja, la mano y el pie' },
        'Ofrecieron un becerro por su propio pecado: los sacerdotes también eran pecadores y necesitaban expiación. Luego un carnero en holocausto, quemado entero. Y un segundo carnero, de las consagraciones: Moisés tomó de su sangre y la puso «sobre el lóbulo de la oreja derecha de Aarón, sobre el dedo pulgar de su mano derecha, y sobre el dedo pulgar de su pie derecho» (Lv 8:23). Muchos lo entienden así: el sacerdote debía oír la palabra de Dios, hacer su obra y andar en sus caminos, todo consagrado por la sangre.',
        { h: 'La gloria' },
        'Durante siete días no salieron de la puerta del tabernáculo. Al octavo, Aarón ofreció por primera vez los sacrificios por el pueblo y lo bendijo. Entonces «la gloria de Jehová se apareció a todo el pueblo. Y salió fuego de delante de Jehová, y consumió el holocausto» (Lv 9:23-24). Dios aprobó el sacerdocio que él mismo había establecido.'
      ],
      pensar: 'Los sacerdotes fueron lavados, revestidos y consagrados con sangre en la oreja, la mano y el pie (Lv 8:6-24). ¿Qué significa para ti que tus oídos, tus manos y tus pasos estén consagrados a Dios?'
    },
    {
      id: 'santidad', n: 'Santidad y requisitos', ref: 'Levítico 10:1-11; 21–22; Ezequiel 44:23; Malaquías 2:4-7', fecha: -1445,
      visual: [ { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque los labios del sacerdote han de guardar la sabiduría, y de su boca el pueblo buscará la ley; porque mensajero es de Jehová de los ejércitos.', ref: 'Malaquías 2:7' } ],
      texto: [
        'El sacerdote se acercaba a Dios más que nadie, y por eso se le exigía más que a nadie. «Santos serán a su Dios, y no profanarán el nombre de su Dios» (Lv 21:6).',
        { h: 'Nadab y Abiú' },
        'El mismo día en que comenzó el sacerdocio, ocurrió una tragedia. Nadab y Abiú, los hijos mayores de Aarón, ofrecieron en sus incensarios «fuego extraño, que él nunca les mandó. Y salió fuego de delante de Jehová y los quemó» (Lv 10:1-2). No se sabe con certeza cuál fue su falta: si usaron un fuego que no venía del altar, si entraron donde no debían o si estaban ebrios, porque inmediatamente después Dios prohibió a los sacerdotes beber vino antes de entrar al tabernáculo (Lv 10:9). Moisés explicó: «En los que a mí se acercan me santificaré» (Lv 10:3). Acercarse a Dios es un privilegio que no puede tomarse a la ligera.',
        { h: 'Pureza' },
        'Los sacerdotes no podían tocar cadáveres, salvo de sus parientes más cercanos; el sumo sacerdote, ni siquiera de ellos (Lv 21:1-4, 11). Tenían normas especiales para el matrimonio. Si estaban impuros, no podían comer de las cosas santas hasta purificarse (Lv 22:1-9). La muerte y la impureza representaban las consecuencias del pecado, y el que servía al Dios vivo debía mantenerse lejos de ellas.',
        { h: 'Sin defecto' },
        'Un descendiente de Aarón con un defecto físico, como ceguera o cojera, no podía ofrecer los sacrificios en el altar, aunque sí comer del pan de su Dios (Lv 21:16-23). No era un desprecio a la persona, sino una enseñanza visual: el que se acerca a Dios debe ser perfecto, como los sacrificios debían ser sin defecto. Ningún hombre lo es. Por eso el sistema apuntaba a un sacerdote perfecto, «santo, inocente, sin mancha, apartado de los pecadores» (He 7:26).',
        { h: 'Maestros' },
        'El sacerdote no solo ofrecía sacrificios: enseñaba. Debían «discernir entre lo santo y lo profano, y entre lo inmundo y lo limpio, y para enseñar a los hijos de Israel todos los estatutos» (Lv 10:10-11). Malaquías lo resume: «los labios del sacerdote han de guardar la sabiduría, y de su boca el pueblo buscará la ley» (Mal 2:7). Cuando los sacerdotes fallaron en enseñar, el pueblo se perdió.'
      ],
      pensar: 'Dios dijo: «En los que a mí se acercan me santificaré» (Lv 10:3). ¿Con qué actitud te acercas tú a Dios en la oración y en la adoración?'
    },
    {
      id: 'sustento', n: 'Sin heredad: Jehová es su parte', ref: 'Números 18:20-32; 35:1-8; Deuteronomio 18:1-5; Josué 21; 1 Corintios 9:13-14', fecha: -1406,
      visual: [ { tipo: 'tabla', titulo: 'Sustento', tabla: {
        titulo: 'De qué vivían los sacerdotes y los levitas',
        cab: ['Fuente', 'Para quién', 'Pasaje'],
        filas: [
          ['El diezmo de todo Israel', 'Los levitas', 'Nm 18:21-24'],
          ['El diezmo de los diezmos', 'Los sacerdotes (los levitas daban el diezmo de lo que recibían)', 'Nm 18:26-28'],
          ['Partes de los sacrificios', 'Los sacerdotes', 'Lv 6:16-18, 26; 7:31-34'],
          ['Las primicias y los primogénitos', 'Los sacerdotes', 'Nm 18:12-18'],
          ['Cuarenta y ocho ciudades con sus ejidos', 'Levitas y sacerdotes (trece ciudades para los sacerdotes)', 'Nm 35:1-8; Jos 21']
        ]
      } } ],
      texto: [
        'Cuando se repartió la tierra prometida entre las tribus, Leví no recibió territorio. Dios dijo a Aarón: «De la tierra de ellos no tendrás heredad, ni entre ellos tendrás parte. Yo soy tu parte y tu heredad en medio de los hijos de Israel» (Nm 18:20).',
        { h: 'Los diezmos' },
        'En lugar de tierra, los levitas recibían el diezmo, la décima parte de las cosechas y los rebaños de todo Israel, como pago por su servicio en el santuario (Nm 18:21). A su vez, ellos daban el diezmo de lo que recibían a los sacerdotes (Nm 18:26). Además, los sacerdotes comían partes determinadas de muchos sacrificios y recibían las primicias de los frutos y los primogénitos de los animales.',
        { h: 'Ciudades levíticas' },
        'Aunque no tenían un territorio, los levitas recibieron cuarenta y ocho ciudades repartidas por todas las tribus, con sus campos alrededor para el ganado (Nm 35:1-8; Jos 21). Trece de ellas, cerca de Jerusalén, eran de los sacerdotes. Seis eran ciudades de refugio. Así, los levitas vivían dispersos por todo Israel, donde podían enseñar la ley al pueblo. Lo que Jacob había anunciado como castigo por la violencia de Leví, «los apartaré en Jacob, y los esparciré en Israel» (Gn 49:7), Dios lo transformó en bendición.',
        { h: 'Cuando el pueblo fallaba' },
        'Este sistema dependía de la fidelidad del pueblo. Cuando Israel dejaba de diezmar, los levitas tenían que abandonar el servicio para trabajar sus campos. Nehemías lo encontró al volver a Jerusalén: «las porciones para los levitas no les habían sido dadas, y que los levitas y cantores que hacían el servicio habían huido cada uno a su heredad» (Neh 13:10). Malaquías denunció en esos mismos años que el pueblo robaba a Dios en los diezmos y las ofrendas (Mal 3:8-10).',
        { h: 'En la iglesia' },
        'Pablo aplicó el mismo principio a los que sirven en el evangelio: «¿No sabéis que los que trabajan en las cosas sagradas, comen del templo…? Así también ordenó el Señor a los que anuncian el evangelio, que vivan del evangelio» (1 Co 9:13-14).'
      ],
      pensar: 'Dios dijo a los sacerdotes: «Yo soy tu parte y tu heredad» (Nm 18:20). ¿Qué significa para ti que Dios mismo sea tu herencia, más que cualquier posesión?'
    },
    {
      id: 'turnos', n: 'Los veinticuatro turnos', ref: '1 Crónicas 23–25; 24:1-19; Lucas 1:5-23', fecha: [-1000, 1],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/sac-zacarias.webp', alt: 'Dentro del lugar santo del templo, a la luz del candelero de oro, el anciano sacerdote Zacarías, vestido de lino blanco, ofrece incienso en el altar de oro y se sobresalta al ver a un ángel resplandeciente de pie a la derecha del altar', pie: 'Zacarías ofrece el incienso (Lc 1:9-11).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Los turnos', tabla: {
          titulo: 'Los veinticuatro turnos sacerdotales (1 Crónicas 24:7-18)',
          cab: ['Turnos', 'Familias'],
          filas: [
            ['1–6', 'Joiarib, Jedaías, Harim, Seorim, Malquías, Mijamín'],
            ['7–12', 'Cos, Abías, Jesúa, Secanías, Eliasib, Jaquim'],
            ['13–18', 'Hupa, Jesebeab, Bilga, Imer, Hezir, Afses'],
            ['19–24', 'Petaías, Hezequiel, Jaquín, Gamul, Delaía, Maazías']
          ],
          nota: 'Zacarías, padre de Juan el Bautista, era «de la clase de Abías» (Lc 1:5), el octavo turno.'
        } }
      ],
      texto: [
        'Con el tiempo, los descendientes de Aarón llegaron a ser miles. No todos podían servir a la vez en el santuario. David, al preparar el templo, organizó a los sacerdotes en veinticuatro turnos.',
        { h: 'La organización de David' },
        'David y los sacerdotes Sadoc y Ahimelec repartieron por sorteo a las familias sacerdotales, descendientes de Eleazar y de Itamar, en veinticuatro grupos (1 Cr 24). Cada grupo servía una semana en el templo, dos veces al año, y todos juntos en las grandes fiestas. También organizó a los levitas en grupos de porteros, tesoreros y jueces, y a los cantores en veinticuatro turnos de músicos (1 Cr 25).',
        { h: 'Mil años después: Zacarías' },
        'La organización de David seguía vigente mil años después. Lucas presenta a Zacarías, padre de Juan el Bautista, como un sacerdote «de la clase de Abías» (Lc 1:5), el octavo de los veinticuatro turnos. «Aconteció que ejerciendo Zacarías el sacerdocio delante de Dios según el orden de su clase, conforme a la costumbre del sacerdocio, le tocó en suerte ofrecer el incienso, entrando en el santuario del Señor» (Lc 1:8-9).',
        'Con tantos sacerdotes, ofrecer el incienso en el lugar santo era un privilegio que muchos tenían una sola vez en la vida, y se asignaba por sorteo. Zacarías era ya anciano. Mientras ofrecía el incienso y la multitud oraba afuera, se le apareció el ángel Gabriel a la derecha del altar y le anunció que su esposa Elisabet, estéril, le daría un hijo.',
        { h: 'La oración y el incienso' },
        'La escena muestra el sentido del incienso: mientras el sacerdote lo ofrecía, el pueblo oraba afuera (Lc 1:10). El incienso que subía era una imagen de las oraciones del pueblo. David lo pidió así: «Suba mi oración delante de ti como el incienso» (Sal 141:2). Y en Apocalipsis, las copas de incienso «son las oraciones de los santos» (Ap 5:8).',
        'En ese momento de servicio fiel y rutinario, Dios comenzó a cumplir la promesa del Mesías: el hijo de Zacarías prepararía el camino del Señor.'
      ],
      pensar: 'Dios habló a Zacarías mientras cumplía fielmente su turno de servicio (Lc 1:8-11). ¿Cómo puedes ser fiel en las tareas rutinarias, sabiendo que Dios puede obrar en medio de ellas?'
    }
  ];

  /* ---------------- Ruta II · Las doce piedras ---------------- */
  const piedras = [
    {
      id: 'pectoral', n: 'El pectoral del juicio', ref: 'Éxodo 28:15-30; 39:8-21', fecha: -1446,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/sac-pectoral.webp', alt: 'Primer plano de un pectoral cuadrado de tela de oro, azul, púrpura y carmesí, con doce piedras preciosas de distintos colores engastadas en oro en cuatro hileras de tres, sujeto con cadenillas de oro', pie: 'Recreación del pectoral del juicio (Éx 28:15-21).', origen: 'ia' } ],
      texto: [
        'Esta ruta se detiene en la pieza más rica de las vestiduras del sumo sacerdote: el pectoral, con sus doce piedras. El recurso 3D El sumo sacerdote muestra dónde iba sobre el cuerpo; aquí se explica lo que significaba.',
        { h: 'Cómo era' },
        'El pectoral era una pieza de la misma tela que el efod: oro, azul, púrpura, carmesí y lino torcido, de obra primorosa. Era cuadrado y doble, de un palmo de lado, unos 22 centímetros (Éx 28:16). Al ser doble, formaba una especie de bolsa, donde se guardaban el Urim y el Tumim. Iba atado con cordones de oro a las hombreras del efod y con un cordón azul a sus anillos, de modo que no se separara del efod (Éx 28:22-28).',
        { h: 'Doce piedras' },
        'Sobre el pectoral iban doce piedras preciosas, en cuatro hileras de tres, «montadas en engastes de oro» (Éx 28:20). «Y las piedras serán según los nombres de los hijos de Israel, doce según sus nombres; como grabaduras de sello cada una con su nombre, serán según las doce tribus» (Éx 28:21). Cada tribu tenía su piedra, con su nombre grabado.',
        { h: 'El pectoral del juicio' },
        'Se llamaba «pectoral del juicio» porque contenía el Urim y el Tumim, por medio de los cuales el sumo sacerdote consultaba la decisión de Dios para el pueblo. «Y llevará siempre Aarón el juicio de los hijos de Israel sobre su corazón delante de Jehová» (Éx 28:30).',
        'La imagen de esta estación es una recreación: los colores de las piedras siguen sus nombres en la RV 1960, pero, como se explica en la estación siguiente, no hay certeza sobre qué gemas eran. Tampoco se sabe qué tribu correspondía a cada piedra.'
      ],
      pensar: 'El sumo sacerdote llevaba los nombres de las tribus sobre su corazón cada vez que entraba ante Dios (Éx 28:29). ¿A quiénes llevas tú en tu corazón cuando oras?'
    },
    {
      id: 'tabla-piedras', n: 'Las piedras, una por una', ref: 'Éxodo 28:17-21; Génesis 29:31–30:24; 35:16-18', fecha: -1446,
      visual: [ { tipo: 'tabla', titulo: 'Las piedras', tabla: {
        titulo: 'Las doce piedras del pectoral',
        cab: ['Hilera', 'RV 1960', 'Hebreo', 'Posibles identificaciones', 'Tribu según el orden de nacimiento'],
        filas: [
          ['1', 'Sárdica', 'ódem', 'Cornalina, sardio (rojo)', 'Rubén'],
          ['1', 'Topacio', 'pitdá', 'Topacio, peridoto (amarillo verdoso)', 'Simeón'],
          ['1', 'Carbunclo', 'baréket', 'Esmeralda, granate (brillante)', 'Leví'],
          ['2', 'Esmeralda', 'nófek', 'Turquesa, malaquita, granate', 'Judá'],
          ['2', 'Zafiro', 'sapír', 'Lapislázuli (azul)', 'Dan'],
          ['2', 'Diamante', 'yahalóm', 'Ónice, jade, cristal de roca', 'Neftalí'],
          ['3', 'Jacinto', 'léshem', 'Ámbar, circón', 'Gad'],
          ['3', 'Ágata', 'shebó', 'Ágata', 'Aser'],
          ['3', 'Amatista', 'ajlamá', 'Amatista (violeta)', 'Isacar'],
          ['4', 'Berilo', 'tarshísh', 'Crisólito, topacio, berilo', 'Zabulón'],
          ['4', 'Ónice', 'shóham', 'Ónice, cornalina', 'José'],
          ['4', 'Jaspe', 'yashfé', 'Jaspe', 'Benjamín']
        ],
        nota: 'La columna de tribus sigue una propuesta antigua (orden de nacimiento, como en las piedras de los hombros, Éx 28:10); el texto no indica qué tribu iba en cada piedra.'
      } } ],
      texto: [
        'La tabla presenta las doce piedras en el orden de Éxodo 28:17-20, con su nombre en la RV 1960 y en hebreo, sus posibles identificaciones modernas y una propuesta de la tribu que les correspondía.',
        { h: 'Nombres difíciles' },
        'Identificar las piedras no es sencillo. Los nombres hebreos de las piedras preciosas no siempre coinciden con los nombres modernos, y en la antigüedad las piedras se clasificaban por su color, no por su composición mineral como hoy. Las traducciones antiguas y modernas difieren entre sí. Por ejemplo, la sexta piedra se traduce como «diamante» en la RV 1960, pero es poco probable que lo fuera, porque en tiempos de Moisés no había herramientas para grabar un nombre en un diamante. Algunas identificaciones son bastante seguras, como el jaspe, la ágata y la amatista; otras son discutidas.',
        { h: '¿Qué tribu en cada piedra?' },
        'El texto dice que había una piedra por tribu, pero no dice cuál. Muchos intérpretes antiguos, como el historiador judío Josefo, propusieron que siguieran el orden de nacimiento de los hijos de Jacob, como en las dos piedras de ónice de los hombros, donde los nombres iban «conforme al orden de nacimiento de ellos» (Éx 28:10). La tabla muestra esa propuesta. Otros proponen el orden de los campamentos alrededor del tabernáculo (Nm 2). Es una reconstrucción, no un dato del texto.',
        { h: 'Las doce tribus' },
        'En la lista de los hijos de Jacob están Leví y José. Cuando las tribus recibieron territorio, Leví no tuvo parte, y José se dividió en dos tribus, Efraín y Manasés. Por eso en algunas listas aparecen doce tribus distintas. En el pectoral, como en las piedras de los hombros, aparecen los doce hijos de Jacob.',
        'Lo importante no es la identificación exacta de cada gema, sino que cada tribu, grande o pequeña, tenía su propia piedra preciosa y su nombre grabado sobre el corazón del sumo sacerdote.'
      ],
      pensar: 'Cada tribu tenía su propia piedra, distinta de las demás, y todas eran preciosas. ¿Qué te dice esto sobre el valor que Dios da a cada miembro de su pueblo?'
    },
    {
      id: 'hombros-corazon', n: 'Sobre los hombros y sobre el corazón', ref: 'Éxodo 28:9-12, 29; Isaías 49:16; Cantares 8:6; Hebreos 7:25', fecha: -1446,
      visual: [ { tipo: 'cita', titulo: 'Pasaje', texto: 'Y llevará Aarón los nombres de los hijos de Israel en el pectoral del juicio sobre su corazón, cuando entre en el santuario, por memorial delante de Jehová continuamente.', ref: 'Éxodo 28:29' } ],
      texto: [
        'Los nombres de las tribus aparecían dos veces en las vestiduras del sumo sacerdote: sobre sus hombros y sobre su corazón.',
        { h: 'Sobre los hombros' },
        'En las hombreras del efod iban dos piedras de ónice, con seis nombres grabados en cada una. «Y Aarón llevará los nombres de ellos delante de Jehová sobre sus dos hombros por memorial» (Éx 28:12). Los hombros representan la fuerza para cargar. El sumo sacerdote llevaba a todo el pueblo sobre sí cuando entraba ante Dios.',
        { h: 'Sobre el corazón' },
        'En el pectoral, los nombres estaban otra vez, cada uno en su propia piedra, sobre el corazón de Aarón: «por memorial delante de Jehová continuamente» (Éx 28:29). El corazón representa el amor y el afecto. No bastaba con cargar al pueblo: había que amarlo.',
        'Además, los nombres en las piedras de los hombros iban juntos, seis y seis; en el pectoral, cada tribu tenía su propia piedra. El pueblo entero era llevado con fuerza, y cada uno era amado personalmente.',
        { h: 'Un memorial ante Dios' },
        'Dos veces el texto dice que los nombres son un «memorial» delante de Jehová. Cada vez que el sumo sacerdote entraba en el santuario, presentaba ante Dios los nombres de su pueblo. Era una imagen de la intercesión.',
        { h: 'Nuestro sumo sacerdote' },
        'El Nuevo Testamento presenta a Cristo como el sumo sacerdote que cumple esta imagen. Él «puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos» (He 7:25). Lleva a los suyos sobre sus hombros, como el buen pastor que pone la oveja perdida sobre sus hombros (Lc 15:5), y en su corazón. Dios dice a su pueblo por medio de Isaías: «He aquí que en las palmas de las manos te tengo esculpida» (Is 49:16). El nombre de cada creyente está grabado delante de Dios.'
      ],
      pensar: 'El sumo sacerdote llevaba los nombres del pueblo sobre los hombros y sobre el corazón. ¿Qué significa para ti que Cristo te lleve así ante el Padre?'
    },
    {
      id: 'urim', n: 'El Urim y el Tumim', ref: 'Éxodo 28:30; Levítico 8:8; Números 27:21; 1 Samuel 14:41; 23:9-12; 28:6; Esdras 2:63', fecha: [-1446, -538],
      visual: [ { tipo: 'tabla', titulo: 'Consultas', tabla: {
        titulo: 'El Urim y el Tumim en la Biblia',
        cab: ['Pasaje', 'Qué ocurre'],
        filas: [
          ['Éx 28:30; Lv 8:8', 'Se ponen en el pectoral del juicio'],
          ['Nm 27:21', 'Josué consultará por medio del sacerdote Eleazar «por el juicio del Urim»'],
          ['1 S 14:41', 'Saúl pide una respuesta para descubrir quién había pecado'],
          ['1 S 23:9-12', 'David consulta por medio del efod si Saúl vendrá a Keila'],
          ['1 S 28:6', 'Dios ya no responde a Saúl ni por sueños, ni por Urim, ni por profetas'],
          ['Esd 2:63; Neh 7:65', 'Al volver del exilio no hay sacerdote con Urim y Tumim']
        ]
      } } ],
      texto: [
        'Dentro del pectoral, sobre el corazón del sumo sacerdote, había algo misterioso: el Urim y el Tumim.',
        { h: 'Qué eran' },
        '«Y pondrás en el pectoral del juicio Urim y Tumim, para que estén sobre el corazón de Aarón cuando entre delante de Jehová» (Éx 28:30). Los nombres significan probablemente «luces» y «perfecciones». El texto no los describe: no dice qué forma tenían, de qué material eran ni cómo funcionaban. Muchos piensan que eran dos objetos, como piedras o tablillas, que daban respuestas de sí o no, o que indicaban una opción entre dos. Pero es una suposición. Por eso el recurso 3D El sumo sacerdote marca su lugar en el pectoral sin darles forma: cualquier forma sería inventada.',
        { h: 'Para qué servían' },
        'Servían para conocer la voluntad de Dios en decisiones importantes para el pueblo. Cuando Moisés traspasó el liderazgo a Josué, Dios dijo que Josué se presentaría ante el sacerdote Eleazar, «y le consultará por el juicio del Urim delante de Jehová» (Nm 27:21). David consultó a Dios por medio del efod del sacerdote Abiatar antes de decisiones militares (1 S 23:9-12; 30:7-8).',
        { h: 'Cuando Dios calla' },
        'Cuando el rey Saúl se apartó de Dios, «consultó Saúl a Jehová; pero Jehová no le respondió ni por sueños, ni por Urim, ni por profetas» (1 S 28:6). Desesperado, Saúl fue a consultar a una adivina. El Urim no funcionaba como un instrumento mágico: dependía de la relación con Dios.',
        { h: 'Después del exilio' },
        'La Biblia no menciona su uso después de David. Al volver del exilio, cuando había dudas sobre la genealogía de algunos sacerdotes, el gobernador decidió esperar «hasta que hubiese sacerdote para consultar con Urim y Tumim» (Esd 2:63). Ya no lo había.',
        'Hoy el creyente no necesita el Urim y el Tumim. Tiene la Palabra de Dios completa y el Espíritu Santo, que guía a toda la verdad (Jn 16:13). Pero el principio permanece: las decisiones importantes se toman delante de Dios.'
      ],
      pensar: 'Saúl buscó la respuesta de Dios cuando ya se había apartado de él, y Dios calló (1 S 28:6). ¿Buscas la voluntad de Dios solo en las emergencias, o vives en relación con él?'
    },
    {
      id: 'nueva-jerusalen', n: 'Las piedras de la nueva Jerusalén', ref: 'Apocalipsis 21:9-21; Éxodo 28:17-21; 1 Pedro 2:4-5; Malaquías 3:17', fecha: 2026,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'escatologia/img/esc-nueva-jerusalen.webp', alt: 'La nueva Jerusalén desciende del cielo, una ciudad resplandeciente con muros de piedras preciosas y puertas de perla', pie: 'Los cimientos de piedras preciosas (Ap 21:19-20).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Comparación', tabla: {
          titulo: 'Las piedras del pectoral y los cimientos de la nueva Jerusalén (RV 1960)',
          cab: ['#', 'Pectoral (Éx 28:17-20)', 'Cimientos (Ap 21:19-20)'],
          filas: [
            ['1', 'Sárdica', 'Jaspe'], ['2', 'Topacio', 'Zafiro'], ['3', 'Carbunclo', 'Ágata'], ['4', 'Esmeralda', 'Esmeralda'],
            ['5', 'Zafiro', 'Ónice'], ['6', 'Diamante', 'Cornalina'], ['7', 'Jacinto', 'Crisólito'], ['8', 'Ágata', 'Berilo'],
            ['9', 'Amatista', 'Topacio'], ['10', 'Berilo', 'Crisopraso'], ['11', 'Ónice', 'Jacinto'], ['12', 'Jaspe', 'Amatista']
          ],
          nota: 'Al menos ocho nombres coinciden en ambas listas, aunque en distinto orden; las traducciones varían.'
        } }
      ],
      texto: [
        'Las doce piedras preciosas reaparecen al final de la Biblia, en la visión de la nueva Jerusalén.',
        { h: 'Los cimientos de la ciudad' },
        'Juan vio la santa ciudad que descendía del cielo, con un muro grande y alto, doce puertas con los nombres de las doce tribus de Israel, y doce cimientos con los nombres de los doce apóstoles del Cordero (Ap 21:12-14). «Y los cimientos del muro de la ciudad estaban adornados con toda piedra preciosa» (Ap 21:19): jaspe, zafiro, ágata, esmeralda, ónice, cornalina, crisólito, berilo, topacio, crisopraso, jacinto y amatista.',
        { h: 'Un eco del pectoral' },
        'La tabla compara las dos listas. Aunque el orden es distinto y algunas traducciones varían, al menos ocho nombres coinciden. Muchos ven en esto una conexión deliberada: las piedras que el sumo sacerdote llevaba sobre su corazón, con los nombres del pueblo de Dios, aparecen ahora como los cimientos de la ciudad donde ese pueblo morará con Dios para siempre.',
        'En el tabernáculo, solo el sumo sacerdote podía entrar en la presencia de Dios, una vez al año, llevando los nombres del pueblo en piedras preciosas. En la nueva Jerusalén, toda la ciudad es el lugar santísimo: tiene forma de cubo, como el lugar santísimo del tabernáculo y del templo (Ap 21:16), y todo el pueblo de Dios vive en su presencia. «Y verán su rostro, y su nombre estará en sus frentes» (Ap 22:4), como el sumo sacerdote llevaba en la frente la lámina de oro con la inscripción SANTIDAD A JEHOVÁ.',
        { h: 'Piedras vivas' },
        'Pedro dice que los creyentes son «piedras vivas», edificados como casa espiritual y sacerdocio santo (1 P 2:5). Y Dios dice por medio de Malaquías que, en el día que él prepara, los que le temen serán su «especial tesoro» (Mal 3:17). El pueblo que el sumo sacerdote llevaba representado en piedras preciosas es, para Dios, su verdadero tesoro.'
      ],
      pensar: 'Lo que el sumo sacerdote llevaba sobre su corazón, la nueva Jerusalén lo muestra como sus cimientos. ¿Qué esperanza te da saber que el pueblo de Dios es su tesoro para siempre?'
    }
  ];

  /* ---------------- Ruta III · Historia del sacerdocio ---------------- */
  const historia = [
    {
      id: 'aaron', n: 'Aarón y sus hijos', ref: 'Éxodo 4:14-16; 32:1-6, 21-24; Levítico 10; Números 16–17; 20:23-29; 25:10-13', fecha: [-1446, -1406],
      visual: [ { tipo: 'tabla', titulo: 'Aarón', tabla: {
        titulo: 'Aarón y su familia',
        cab: ['Persona', 'Lo que ocurrió', 'Pasaje'],
        filas: [
          ['Aarón', 'Portavoz de Moisés; hace el becerro de oro; primer sumo sacerdote; muere en el monte Hor', 'Éx 4:14-16; 32; Nm 20:22-29'],
          ['Nadab y Abiú', 'Ofrecen fuego extraño y mueren', 'Lv 10:1-2'],
          ['Eleazar', 'Sucede a Aarón como sumo sacerdote', 'Nm 20:28; 27:21'],
          ['Itamar', 'Dirige el trabajo de los levitas', 'Nm 4:28, 33'],
          ['Finees', 'Hijo de Eleazar; recibe el pacto de un sacerdocio perpetuo', 'Nm 25:10-13']
        ]
      } } ],
      texto: [
        'Esta ruta recorre la historia del sacerdocio de Israel, desde Aarón hasta la destrucción del templo en el año 70.',
        { h: 'Un hombre imperfecto' },
        'Aarón, el primer sumo sacerdote, no era un hombre perfecto. Cuando Moisés estaba en el monte recibiendo las instrucciones sobre el sacerdocio, Aarón cedió a la presión del pueblo e hizo el becerro de oro (Éx 32). Más tarde, con su hermana María, murmuró contra Moisés (Nm 12). Y con Moisés, no honró a Dios en las aguas de Meriba, por lo que ninguno de los dos entró en la tierra prometida (Nm 20:12-13, 24).',
        'Que Dios eligiera a un hombre así para el sumo sacerdocio muestra que el sacerdocio no dependía de la perfección del sacerdote, sino de la elección y la gracia de Dios. Por eso el sumo sacerdote ofrecía sacrificios primero por sí mismo y luego por el pueblo (Lv 16:6; He 7:27).',
        { h: 'La vara que reverdeció' },
        'El sacerdocio de Aarón fue desafiado. Coré, un levita, se rebeló con doscientos cincuenta príncipes, reclamando el sacerdocio para sí, y fueron destruidos (Nm 16). Para terminar con la murmuración, Dios mandó poner en el tabernáculo una vara por cada tribu. Al día siguiente, «la vara de Aarón de la casa de Leví había reverdecido, y echado flores, y arrojado renuevos, y producido almendras» (Nm 17:8). Se guardó en el arca como testimonio (He 9:4).',
        { h: 'La sucesión' },
        'Al final de los cuarenta años, Aarón subió al monte Hor con su hijo Eleazar. Moisés le quitó las vestiduras y se las puso a Eleazar, y Aarón murió allí (Nm 20:28). El sacerdocio pasó de padre a hijo. Finees, hijo de Eleazar, recibió de Dios «el pacto del sacerdocio perpetuo» por su celo (Nm 25:13). De él descenderían los sumos sacerdotes de la línea de Sadoc.'
      ],
      pensar: 'Dios eligió como primer sumo sacerdote a un hombre que había hecho el becerro de oro. ¿Qué te enseña esto sobre la gracia de Dios con los que él llama a servirle?'
    },
    {
      id: 'eli-samuel', n: 'Elí y Samuel', ref: '1 Samuel 1–4; 2:12-17, 22-36; 3:1-21', fecha: [-1100, -1070],
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/sac-eli-samuel.webp', alt: 'De noche, en el santuario de Silo iluminado por la lámpara de Dios, el niño Samuel, en túnica de lino, se acerca a Elí, un anciano sacerdote casi ciego recostado en su lecho', pie: '«Habla, porque tu siervo oye» (1 S 3:10).', origen: 'ia' } ],
      texto: [
        'Siglos después de Aarón, en tiempos de los jueces, el santuario estaba en Silo, y el sumo sacerdote era Elí, de la línea de Itamar. Su historia muestra cómo el sacerdocio podía corromperse.',
        { h: 'Los hijos de Elí' },
        'Elí tenía dos hijos sacerdotes, Ofni y Finees, que «eran hombres impíos, y no tenían conocimiento de Jehová» (1 S 2:12). Tomaban por la fuerza la mejor parte de los sacrificios antes de que se ofreciera la grasa a Dios, y se acostaban con las mujeres que servían a la puerta del tabernáculo. «Era, pues, muy grande delante de Jehová el pecado de los jóvenes; porque los hombres menospreciaban las ofrendas de Jehová» (1 S 2:17). Elí los reprendió con palabras, pero no los quitó del servicio.',
        { h: 'Un niño en el santuario' },
        'En ese mismo santuario creció Samuel, el hijo que Ana había pedido a Dios y había dedicado a su servicio. «La palabra de Jehová escaseaba en aquellos días; no había visión con frecuencia» (1 S 3:1). Una noche, mientras la lámpara de Dios todavía ardía, Dios llamó a Samuel. Elí, ya casi ciego, entendió que era Dios, y le enseñó a responder: «Habla, Jehová, porque tu siervo oye» (1 S 3:9). La primera palabra que Samuel recibió fue el juicio sobre la casa de Elí.',
        { h: 'El juicio' },
        'Un varón de Dios ya había anunciado a Elí: «yo honraré a los que me honran, y los que me desprecian serán tenidos en poco» (1 S 2:30). Anunció que sus dos hijos morirían el mismo día, y que Dios levantaría «un sacerdote fiel, que haga conforme a mi corazón» (1 S 2:35). En la batalla de Afec, los filisteos capturaron el arca y mataron a Ofni y Finees; al oír la noticia, Elí cayó hacia atrás y murió (1 S 4).',
        'Samuel, que no era de la línea de Aarón sino un levita (1 Cr 6:28, 33-34), sirvió como profeta, juez y sacerdote. La profecía sobre la casa de Elí se cumplió completamente en tiempos de Salomón, cuando Abiatar, su descendiente, fue destituido, y el sacerdocio pasó a Sadoc (1 R 2:27).'
      ],
      pensar: 'Dios dijo a Elí: «yo honraré a los que me honran» (1 S 2:30). ¿Qué significa para ti honrar a Dios en el servicio, y no solo en las palabras?'
    },
    {
      id: 'sadoc', n: 'Sadoc y el templo de Salomón', ref: '2 Samuel 8:17; 15:24-29; 1 Reyes 1:32-40; 2:26-27, 35; 1 Crónicas 6:1-15; Ezequiel 44:15', fecha: [-1000, -586],
      visual: [ { tipo: 'tabla', titulo: 'Sadoc', tabla: {
        titulo: 'La línea de Sadoc',
        cab: ['Momento', 'Sumo sacerdote', 'Pasaje'],
        filas: [
          ['Reinado de David', 'Sadoc y Abiatar', '2 S 8:17; 15:24-29'],
          ['Unción de Salomón', 'Sadoc unge a Salomón', '1 R 1:39'],
          ['Salomón destituye a Abiatar', 'Sadoc queda solo', '1 R 2:27, 35'],
          ['Reforma de Josías', 'Hilcías encuentra el libro de la ley', '2 R 22:8'],
          ['Destrucción del templo', 'Seraías, llevado a Ribla', '2 R 25:18-21'],
          ['Regreso del exilio', 'Josué hijo de Josadac', 'Esd 3:2; Hag 1:1']
        ]
      } } ],
      texto: [
        'Con la monarquía, el sacerdocio se concentró en Jerusalén, primero junto al arca y luego en el templo de Salomón.',
        { h: 'Sadoc' },
        'En tiempos de David servían dos sumos sacerdotes: Abiatar, de la línea de Elí, y Sadoc, de la línea de Eleazar y Finees (1 Cr 6:4-8). Ambos fueron fieles a David durante la rebelión de Absalón. Pero cuando David envejeció y su hijo Adonías intentó tomar el trono, Abiatar lo apoyó, y Sadoc se mantuvo fiel. Sadoc ungió a Salomón como rey (1 R 1:39). Salomón destituyó a Abiatar, «para que se cumpliese la palabra de Jehová que había dicho sobre la casa de Elí en Silo» (1 R 2:27), y puso a Sadoc en su lugar.',
        'Desde entonces, los sumos sacerdotes descendieron de Sadoc durante casi ochocientos años. Ezequiel, en su visión del templo futuro, reserva el servicio del altar para «los sacerdotes levitas hijos de Sadoc, que guardaron el ordenamiento del santuario cuando los hijos de Israel se apartaron de mí» (Ez 44:15).',
        { h: 'El templo' },
        'En el templo de Salomón, el sacerdocio alcanzó su mayor esplendor. En la dedicación, cuando los sacerdotes salieron del lugar santo, la nube llenó la casa de Jehová, «y los sacerdotes no pudieron permanecer para ministrar por causa de la nube; porque la gloria de Jehová había llenado la casa» (1 R 8:11). El recurso 3D El templo de Salomón muestra el escenario de su servicio.',
        { h: 'Fieles e infieles' },
        'La historia de los sacerdotes en el reino de Judá fue desigual. Algunos fueron fieles: el sumo sacerdote Joiada protegió al niño rey Joás y lo puso en el trono (2 R 11); Azarías se enfrentó al rey Uzías cuando quiso quemar incienso en el templo (2 Cr 26:16-20); Hilcías encontró el libro de la ley en tiempos de Josías (2 R 22:8). Pero muchos sacerdotes se corrompieron. Jeremías, que era de familia sacerdotal, denunció: «los sacerdotes no dijeron: ¿Dónde está Jehová?» (Jer 2:8). Cuando Jerusalén cayó en el 586 a.C., el sumo sacerdote Seraías fue llevado a Ribla y ejecutado (2 R 25:18-21).'
      ],
      pensar: 'Sadoc permaneció fiel cuando otros apoyaron una rebelión, y su línea sirvió durante siglos. ¿Qué frutos puede tener la fidelidad en los momentos de crisis?'
    },
    {
      id: 'exilio-retorno', n: 'El sacerdocio en el exilio y el retorno', ref: 'Ezequiel 1:3; Esdras 2:36-63; 3:2; 7:1-6; Hageo 1:1; Zacarías 3:1-10; 6:11-13', fecha: [-586, -445],
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: EX + 'exi-esdras-ley.webp', alt: 'El escriba Esdras lee la ley ante el pueblo en la plaza de Jerusalén', pie: 'Esdras, sacerdote y escriba (Neh 8:5).', origen: 'ia' } ],
      texto: [
        'Con el templo destruido, el sacerdocio perdió su lugar de servicio. Pero no desapareció.',
        { h: 'Sacerdotes en Babilonia' },
        'Entre los deportados había sacerdotes. Ezequiel, profeta del exilio, era sacerdote (Ez 1:3). Aunque no podía ofrecer sacrificios, recibió la visión de un templo futuro y de un sacerdocio renovado (Ez 40–48). En el exilio, los sacerdotes conservaron las genealogías y la ley.',
        { h: 'Josué, el sumo sacerdote del retorno' },
        'En el primer retorno, junto a Zorobabel, volvió Josué hijo de Josadac, nieto del último sumo sacerdote. Lo primero que hicieron fue reconstruir el altar (Esd 3:2). Esdras 2 registra que volvieron cuatro mil doscientos ochenta y nueve sacerdotes, pero solo setenta y cuatro levitas. Algunas familias que decían ser sacerdotales no encontraron su registro genealógico y fueron excluidas del sacerdocio «hasta que hubiese sacerdote para consultar con Urim y Tumim» (Esd 2:62-63).',
        { h: 'La visión de Zacarías' },
        'El profeta Zacarías tuvo una visión notable sobre Josué. Lo vio de pie delante del ángel de Jehová, vestido con vestiduras viles, y a Satanás a su derecha para acusarlo. Pero Dios reprendió a Satanás, y mandó quitarle las vestiduras viles: «Mira que he quitado de ti tu pecado, y te he hecho vestir de ropas de gala» (Zac 3:4). Josué representaba al pueblo y al sacerdocio, limpiados por la gracia de Dios. Y Dios añadió: «yo traigo a mi siervo el Renuevo» (Zac 3:8), un título del Mesías.',
        'Más tarde, Zacarías recibió una orden sorprendente: hacer una corona y ponerla sobre la cabeza de Josué, el sumo sacerdote, y anunciar que el Renuevo edificaría el templo de Jehová, «y él llevará gloria, y se sentará y dominará en su trono, y habrá sacerdote a su lado; y consejo de paz habrá entre ambos» (Zac 6:13). Una corona real sobre la cabeza de un sacerdote era una señal: en el Mesías se unirían el oficio de rey y el de sacerdote, como en Melquisedec (Sal 110:4).',
        { h: 'Esdras' },
        'Ochenta años después llegó Esdras, sacerdote descendiente de Aarón y escriba en la ley de Moisés (Esd 7:1-6). Su gran aporte no fue ofrecer sacrificios, sino enseñar la Palabra. Desde entonces, junto al sacerdote del templo, cobró importancia el escriba, maestro de la ley.'
      ],
      pensar: 'En la visión de Zacarías, Dios quitó las vestiduras viles del sumo sacerdote y lo vistió de gala (Zac 3:4). ¿Qué te enseña esta imagen sobre lo que Dios hace con el pecado de los que se acercan a él?'
    },
    {
      id: 'anas-caifas', n: 'Asmoneos, Anás y Caifás', ref: 'Juan 11:47-53; 18:12-24; Mateo 26:57-68; Hechos 4:5-7; 23:1-5', fecha: [-152, 70],
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/sac-caifas.webp', alt: 'De noche, en una sala del palacio del sumo sacerdote en Jerusalén iluminada por antorchas, Caifás, con vestiduras sacerdotales, rasga su manto ante Jesús, que está de pie, atado y sereno, rodeado por miembros del sanedrín', pie: 'Caifás rasga sus vestiduras (Mt 26:65).', origen: 'ia' } ],
      texto: [
        'En los siglos siguientes, el sumo sacerdocio se mezcló cada vez más con la política.',
        { h: 'Bajo los griegos y los asmoneos' },
        'Bajo los reyes seléucidas, el cargo de sumo sacerdote se compraba. Antíoco IV destituyó al sumo sacerdote legítimo, Onías III, y vendió el cargo a quien pagara más. Después de la rebelión de los macabeos, Jonatán, de una familia sacerdotal pero no de la línea de Sadoc, se hizo sumo sacerdote en el 152 a.C. Sus descendientes, los asmoneos, fueron a la vez reyes y sumos sacerdotes durante un siglo. Muchos judíos piadosos rechazaron esa usurpación; la comunidad de Qumrán, junto al mar Muerto, se apartó del templo en parte por eso.',
        { h: 'Bajo Herodes y Roma' },
        'Herodes el Grande y luego los gobernadores romanos nombraban y destituían a los sumos sacerdotes a su antojo. Entre el 37 a.C. y el 70 d.C. hubo casi treinta. Una familia dominaba el cargo: la de Anás, sumo sacerdote del 6 al 15 d.C., cinco de cuyos hijos y su yerno Caifás ocuparon después el puesto. Por eso Lucas dice que Juan el Bautista comenzó su ministerio «siendo sumos sacerdotes Anás y Caifás» (Lc 3:2): Caifás tenía el cargo, pero Anás seguía teniendo el poder.',
        { h: 'Contra el verdadero sumo sacerdote' },
        'Fue esta élite sacerdotal la que condenó a Jesús. Caifás, temiendo que Roma destruyera la nación, dijo al sanedrín: «nos conviene que un hombre muera por el pueblo, y no que toda la nación perezca» (Jn 11:50). Juan comenta que lo dijo como sumo sacerdote, profetizando sin saberlo que Jesús moriría por la nación y por los hijos de Dios dispersos (Jn 11:51-52). Jesús fue llevado primero ante Anás y luego ante Caifás. Cuando Jesús se identificó con el Hijo del Hombre de Daniel, Caifás rasgó sus vestiduras y lo acusó de blasfemia (Mt 26:65), algo que la ley prohibía al sumo sacerdote (Lv 21:10).',
        'En 1990 se encontró en Jerusalén un osario, una caja para huesos, con la inscripción «José hijo de Caifás». Muchos lo identifican con el sumo sacerdote de los Evangelios.',
        'El sumo sacerdote de Israel condenó al Sumo Sacerdote que Dios había enviado.'
      ],
      pensar: 'Caifás dijo que convenía que un hombre muriera por el pueblo, sin entender que estaba anunciando el sacrificio de Cristo (Jn 11:50-52). ¿Qué te enseña esto sobre cómo Dios cumple sus propósitos aun por medio de quienes se le oponen?'
    },
    {
      id: 'fin-templo', n: 'El fin del sacerdocio levítico', ref: 'Mateo 24:1-2; Lucas 21:5-6, 20-24; Hebreos 8:13; 9:8-12', fecha: 70,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: TH + 'hoy-arco-tito.webp', alt: 'El Arco de Tito en Roma, con el relieve de los soldados romanos que llevan el candelero de oro del templo de Jerusalén como botín', pie: 'El Arco de Tito, en Roma: el candelero del templo llevado como botín (81 d.C.).', origen: 'foto' } ],
      texto: [
        'El sacerdocio levítico terminó de la misma manera que Jesús había anunciado: con la destrucción del templo.',
        { h: 'No quedará piedra sobre piedra' },
        'Cuando los discípulos admiraban los edificios del templo, Jesús les dijo: «¿Veis todo esto? De cierto os digo, que no quedará aquí piedra sobre piedra, que no sea derribada» (Mt 24:2). Cuarenta años después, en el año 70, el ejército romano de Tito tomó Jerusalén e incendió el templo. Los sacrificios cesaron. Los objetos del templo fueron llevados a Roma como botín, y el Arco de Tito, que todavía está en pie en el foro romano, muestra en relieve a los soldados que cargan el candelero de oro.',
        { h: 'Un sacerdocio sin templo' },
        'Sin templo y sin altar, el sacerdocio levítico perdió su razón de ser. Las familias sacerdotales siguieron existiendo, y hasta hoy muchos judíos con el apellido Cohen, que significa sacerdote, o Leví, conservan la tradición de su origen. Pero desde el año 70 no ha habido sacrificios en Jerusalén. El judaísmo se reorganizó en torno a la sinagoga, la oración y el estudio de la ley.',
        { h: 'Lo que dice Hebreos' },
        'La carta a los Hebreos, escrita probablemente poco antes del año 70, ya lo había explicado. El primer pacto, con su sacerdocio y sus sacrificios, era una sombra de lo que vendría. «Al decir: Nuevo pacto, ha dado por viejo al primero; y lo que se da por viejo y se envejece, está próximo a desaparecer» (He 8:13). Mientras el primer tabernáculo estuviera en pie, el camino al lugar santísimo no estaba abierto (He 9:8).',
        'Cristo, el sumo sacerdote de los bienes venideros, entró «una vez para siempre en el Lugar Santísimo, habiendo obtenido eterna redención» (He 9:12). El sacerdocio de Aarón cumplió su propósito: preparar al pueblo para entender la obra de Cristo. La ruta siguiente lo explica.',
        'La profecía premilenial espera un templo en los últimos tiempos (Dn 9:27; 2 Ts 2:4), pero ningún sacrificio podrá añadir nada a la obra de Cristo.'
      ],
      pensar: 'El sacerdocio de Aarón terminó, pero su propósito se cumplió en Cristo. ¿Qué te enseña esto sobre la manera en que Dios prepara su plan a lo largo de la historia?'
    }
  ];

  /* ---------------- Ruta IV · Cristo, nuestro sumo sacerdote ---------------- */
  const cristo = [
    {
      id: 'melquisedec', n: 'Melquisedec', ref: 'Génesis 14:17-20; Salmo 110:4; Hebreos 5:5-10; 7:1-17', fecha: -2085,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/sac-melquisedec.webp', alt: 'En el valle, al regreso de una batalla, Melquisedec, rey de Salem y sacerdote, de aspecto noble y vestido con una túnica blanca y un manto real, sale al encuentro de Abram con pan y vino y lo bendice, mientras los hombres de Abram descansan con el botín', pie: 'Melquisedec bendice a Abram (Gn 14:18-19).', origen: 'ia' } ],
      texto: [
        'Esta ruta muestra cómo el sacerdocio de Israel se cumple en Cristo, según la carta a los Hebreos. Comienza con un personaje misterioso que aparece siglos antes de Aarón.',
        { h: 'Un rey sacerdote' },
        'Cuando Abram volvía de rescatar a Lot, le salió al encuentro Melquisedec, «rey de Salem… sacerdote del Dios Altísimo», que sacó pan y vino y lo bendijo. Abram le dio los diezmos de todo (Gn 14:18-20). Es todo lo que dice Génesis. Su nombre significa «rey de justicia», y Salem, probablemente la futura Jerusalén, significa «paz».',
        { h: 'Según el orden de Melquisedec' },
        'Mil años después, David escribió un salmo sobre el Mesías, su Señor, sentado a la diestra de Dios: «Juró Jehová, y no se arrepentirá: Tú eres sacerdote para siempre según el orden de Melquisedec» (Sal 110:4). Era sorprendente: el Mesías, hijo de David, de la tribu de Judá, sería sacerdote, aunque no de la tribu de Leví, sino de un orden distinto y anterior.',
        { h: 'Superior a Leví' },
        'Hebreos 7 explica por qué el sacerdocio de Melquisedec es superior al de Aarón. Abram, el padre de Leví, le dio los diezmos y recibió su bendición, «y sin discusión alguna, el menor es bendecido por el mayor» (He 7:7). En cierto modo, Leví, que todavía estaba en los lomos de Abraham, pagó el diezmo a Melquisedec (He 7:9-10).',
        'Además, Génesis no menciona el padre, la madre, la genealogía, el nacimiento ni la muerte de Melquisedec. Para un sacerdote, cuyo derecho dependía de su genealogía, ese silencio es significativo. Hebreos dice que así fue «hecho semejante al Hijo de Dios, permanece sacerdote para siempre» (He 7:3). No significa que Melquisedec no tuviera padres, sino que el texto lo presenta sin ellos, como figura de Cristo, cuyo sacerdocio no depende de una genealogía, sino del «poder de una vida indestructible» (He 7:16).',
        { posturas: {
          titulo: '¿Quién era Melquisedec?',
          a: { n: 'Un rey cananeo real', t: 'Melquisedec fue un rey histórico de Salem que conocía y adoraba al Dios verdadero, y que la Escritura presenta como tipo, una figura anticipada, de Cristo.' },
          b: { n: 'Una aparición de Cristo', t: 'Algunos piensan que fue una aparición de Cristo antes de su encarnación, por la frase «sin padre, sin madre» (He 7:3).' },
          c: 'La mayoría de los intérpretes sigue la primera postura: Hebreos dice que fue «hecho semejante al Hijo de Dios», no que fuera el Hijo de Dios. Lo importante es que su sacerdocio anticipa el de Cristo.'
        } }
      ],
      pensar: 'Melquisedec, rey de justicia y de paz, salió al encuentro de Abram con pan y vino. ¿Qué te sugiere esta imagen sobre Cristo, que nos ofrece su cuerpo y su sangre?'
    },
    {
      id: 'mejor-sacerdote', n: 'Un sumo sacerdote mejor', ref: 'Hebreos 4:14–5:10; 7:23-28; 8:1-6', fecha: 65,
      visual: [ { tipo: 'tabla', titulo: 'Comparación', tabla: {
        titulo: 'Aarón y Cristo, según Hebreos',
        cab: ['', 'Sacerdotes de la línea de Aarón', 'Cristo'],
        filas: [
          ['Orden', 'De Aarón, por genealogía', 'De Melquisedec, por juramento de Dios (He 7:20-21)'],
          ['Duración', 'Muchos, porque la muerte les impedía continuar', 'Uno, para siempre (He 7:23-24)'],
          ['Carácter', 'Pecadores: ofrecían primero por sí mismos', 'Santo, inocente, sin mancha (He 7:26-27)'],
          ['Sacrificio', 'Animales, cada día y cada año', 'Él mismo, una vez para siempre (He 7:27; 9:12)'],
          ['Santuario', 'Terrenal, figura del verdadero', 'El cielo mismo (He 8:1-2; 9:24)'],
          ['Pacto', 'El primer pacto', 'Un mejor pacto (He 8:6)'],
          ['Resultado', 'No podían quitar los pecados (He 10:4, 11)', 'Salva perpetuamente (He 7:25)']
        ]
      } } ],
      texto: [
        'La carta a los Hebreos fue escrita a creyentes judíos tentados a volver al templo, sus sacerdotes y sus sacrificios. Su argumento central es que Jesús es un sumo sacerdote mejor que los de la línea de Aarón. La tabla resume la comparación.',
        { h: 'Uno que nos entiende' },
        '«Por tanto, teniendo un gran sumo sacerdote que traspasó los cielos, Jesús el Hijo de Dios, retengamos nuestra profesión. Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado» (He 4:14-15). Todo sumo sacerdote era tomado de entre los hombres para poder compadecerse de ellos (He 5:1-2). Jesús se hizo hombre, sufrió y fue tentado, y por eso nos comprende. Pero a diferencia de Aarón, nunca pecó.',
        { h: 'Para siempre' },
        'Los sacerdotes de Aarón eran muchos, porque morían y debían ser reemplazados. «Mas éste, por cuanto permanece para siempre, tiene un sacerdocio inmutable; por lo cual puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos» (He 7:24-25). Cristo no tiene sucesor. Su intercesión no se interrumpe.',
        { h: 'En el santuario verdadero' },
        'El tabernáculo de Moisés fue hecho según el modelo que Dios le mostró en el monte, «figura y sombra de las cosas celestiales» (He 8:5). Cristo no ministra en una copia, sino en el verdadero santuario: «tenemos tal sumo sacerdote, el cual se sentó a la diestra del trono de la Majestad en los cielos» (He 8:1). Los sacerdotes de Aarón nunca se sentaban en el santuario, porque su trabajo nunca terminaba. Cristo se sentó, porque su obra está terminada (He 10:11-12).',
        { h: 'Acerquémonos' },
        'La conclusión práctica es una invitación: «Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro» (He 4:16).'
      ],
      pensar: 'Jesús es un sumo sacerdote que puede compadecerse de nuestras debilidades (He 4:15). ¿Qué debilidad o lucha puedes llevarle hoy con confianza?'
    },
    {
      id: 'un-sacrificio', n: 'Un sacrificio, una vez para siempre', ref: 'Levítico 16; Hebreos 9:6-14, 24-28; 10:1-18', fecha: 30,
      visual: [ { tipo: 'tabla', titulo: 'El Día de la Expiación', tabla: {
        titulo: 'El Día de la Expiación y la obra de Cristo',
        cab: ['El Día de la Expiación (Lv 16)', 'La obra de Cristo (Hebreos 9–10)'],
        filas: [
          ['El sumo sacerdote se quita las vestiduras de gloria y se viste de lino', 'Cristo se despojó y tomó forma de siervo (Fil 2:7)'],
          ['Ofrece primero por su propio pecado', 'No necesita ofrecer por sí mismo (He 7:27)'],
          ['Entra con sangre de animales', 'Entra con su propia sangre (He 9:12)'],
          ['Entra en el lugar santísimo terrenal', 'Entra en el cielo mismo (He 9:24)'],
          ['Una vez al año, cada año', 'Una vez para siempre (He 9:25-26)'],
          ['El macho cabrío lleva los pecados al desierto', 'Cristo llevó nuestros pecados (He 9:28; Is 53:12)'],
          ['Sale y el pueblo espera su regreso', 'Aparecerá por segunda vez para salvar a los que le esperan (He 9:28)']
        ]
      } } ],
      texto: [
        'El momento más importante del año para el sumo sacerdote era el Día de la Expiación, en Levítico 16, el único día en que entraba detrás del velo, en el lugar santísimo. Hebreos lo usa para explicar la obra de Cristo. El recurso 3D El tabernáculo muestra esa ceremonia paso a paso.',
        { ir: { t: 'Abrir el recurso 3D El tabernáculo', a: '../../tabernaculo/' } },
        { h: 'Lo que hacía el sumo sacerdote' },
        'Ese día, el sumo sacerdote dejaba sus vestiduras de oro y se vestía solo de lino. Ofrecía un becerro por su propio pecado y el de su casa. Entraba en el lugar santísimo con incienso, para que la nube cubriera el propiciatorio, y rociaba la sangre sobre él. Luego sacrificaba un macho cabrío por el pecado del pueblo y rociaba su sangre. Finalmente, ponía las manos sobre otro macho cabrío, confesaba sobre él todas las iniquidades del pueblo y lo enviaba al desierto (Lv 16).',
        { h: 'Cada año' },
        'Pero esos sacrificios tenían un límite: «la sangre de los toros y de los machos cabríos no puede quitar los pecados» (He 10:4). Por eso se repetían cada año. Eran un recordatorio constante del pecado (He 10:3), y una figura de lo que vendría.',
        { h: 'Una vez para siempre' },
        'Cristo hizo lo que el sumo sacerdote solo podía representar. «Y no por sangre de machos cabríos ni de becerros, sino por su propia sangre, entró una vez para siempre en el Lugar Santísimo, habiendo obtenido eterna redención» (He 9:12). No entró en un santuario hecho por manos, sino en el cielo mismo, «para presentarse ahora por nosotros ante Dios» (He 9:24). Y no necesita repetir su sacrificio: «con una sola ofrenda hizo perfectos para siempre a los santificados» (He 10:14).',
        'La expresión «una vez para siempre» se repite en Hebreos. Es la gran diferencia: los sacrificios de Aarón se repetían sin fin, y el de Cristo es definitivo. «Pues donde hay remisión de éstos, no hay más ofrenda por el pecado» (He 10:18).',
        { h: 'Saldrá otra vez' },
        'El Día de la Expiación, el pueblo esperaba afuera hasta que el sumo sacerdote saliera del lugar santísimo, señal de que el sacrificio había sido aceptado. Hebreos aplica esa imagen: Cristo «aparecerá por segunda vez, sin relación con el pecado, para salvar a los que le esperan» (He 9:28).'
      ],
      pensar: 'Cristo, «con una sola ofrenda hizo perfectos para siempre a los santificados» (He 10:14). ¿Vives con la seguridad de que su sacrificio es suficiente, o sigues tratando de ganar el perdón de Dios?'
    },
    {
      id: 'velo', n: 'El velo rasgado', ref: 'Éxodo 26:31-33; Mateo 27:50-51; Hebreos 10:19-22', fecha: 30,
      visual: [ { tipo: 'imagen', titulo: 'Imagen', src: 'img/sac-velo.webp', alt: 'Dentro del templo de Jerusalén en penumbra, el enorme velo de azul, púrpura y carmesí, bordado con querubines, se rasga de arriba abajo, dejando ver el lugar santísimo vacío mientras una luz intensa entra por la abertura y los sacerdotes retroceden asombrados', pie: '«El velo del templo se rasgó en dos, de arriba abajo» (Mt 27:51).', origen: 'ia' } ],
      texto: [
        'Entre el lugar santo y el lugar santísimo del tabernáculo y del templo colgaba un velo, una cortina gruesa de azul, púrpura, carmesí y lino torcido, con querubines bordados (Éx 26:31). Separaba la presencia de Dios del resto del santuario. Solo el sumo sacerdote podía cruzarlo, una vez al año.',
        { h: 'De arriba abajo' },
        'En el momento en que Jesús murió en la cruz, ocurrió algo en el templo: «Mas Jesús, habiendo otra vez clamado a gran voz, entregó el espíritu. Y he aquí, el velo del templo se rasgó en dos, de arriba abajo» (Mt 27:50-51). Era la hora del sacrificio de la tarde, cuando los sacerdotes estaban en el lugar santo. El velo no se rasgó de abajo hacia arriba, como si lo hubiera roto un hombre, sino de arriba abajo: fue obra de Dios.',
        { h: 'Un camino nuevo y vivo' },
        'Hebreos explica el significado: «Así que, hermanos, teniendo libertad para entrar en el Lugar Santísimo por la sangre de Jesucristo, por el camino nuevo y vivo que él nos abrió a través del velo, esto es, de su carne… acerquémonos con corazón sincero, en plena certidumbre de fe» (He 10:19-22).',
        'El velo representaba la separación entre Dios y el hombre por causa del pecado. Al morir Cristo, el camino a la presencia de Dios quedó abierto. Hebreos relaciona el velo con la carne de Cristo: así como el velo se rasgó, su cuerpo fue quebrantado en la cruz para abrirnos el camino.',
        { h: 'Para todos' },
        'Lo que antes era privilegio de un solo hombre, una vez al año, con temor y con sangre ajena, ahora es posible para todo creyente, cada día, con confianza, por la sangre de Cristo. Ya no hace falta un sacerdote humano para acercarse a Dios: el creyente tiene acceso directo al Padre por medio de Jesucristo, el único mediador entre Dios y los hombres (1 Ti 2:5).',
        'El recurso 3D El tabernáculo muestra el velo y el lugar santísimo en su lugar.'
      ],
      pensar: 'El camino a la presencia de Dios, que solo el sumo sacerdote podía cruzar una vez al año, está abierto para ti (He 10:19-22). ¿Cómo aprovechas ese acceso cada día?'
    },
    {
      id: 'real-sacerdocio', n: 'Un real sacerdocio', ref: 'Éxodo 19:5-6; 1 Pedro 2:5, 9; Apocalipsis 1:5-6; 5:9-10; 20:6; Romanos 12:1; Hebreos 13:15-16', fecha: 2026,
      visual: [ { tipo: 'tabla', titulo: 'Sacrificios', tabla: {
        titulo: 'Los sacrificios espirituales del creyente',
        cab: ['Sacrificio', 'Pasaje'],
        filas: [
          ['Nuestro cuerpo, como sacrificio vivo', 'Ro 12:1'],
          ['La alabanza, fruto de labios', 'He 13:15'],
          ['Hacer el bien y ayudar a otros', 'He 13:16'],
          ['Las ofrendas para la obra de Dios', 'Fil 4:18'],
          ['La oración, como incienso', 'Sal 141:2; Ap 5:8; 8:3-4'],
          ['Llevar a otros a Dios', 'Ro 15:16']
        ]
      } } ],
      texto: [
        'La historia del sacerdocio termina donde comenzó: en el Sinaí, Dios llamó a todo Israel a ser «un reino de sacerdotes» (Éx 19:6). En Cristo, ese llamado se cumple en todo su pueblo.',
        { h: 'Sacerdocio santo' },
        'Pedro escribió a los creyentes: «vosotros también, como piedras vivas, sed edificados como casa espiritual y sacerdocio santo, para ofrecer sacrificios espirituales aceptables a Dios por medio de Jesucristo» (1 P 2:5). Y repite las palabras del Sinaí: «Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable» (1 P 2:9).',
        'Todo creyente es sacerdote. No en el sentido de mediar por los demás para su salvación, porque solo Cristo es mediador, sino en que todo creyente tiene acceso directo a Dios, le ofrece sacrificios espirituales e intercede por otros.',
        { h: 'Sacrificios espirituales' },
        'Los sacrificios del creyente no son animales, sino su propia vida: «que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional» (Ro 12:1). La alabanza es un sacrificio: «ofrezcamos siempre a Dios, por medio de él, sacrificio de alabanza, es decir, fruto de labios que confiesan su nombre» (He 13:15). También hacer el bien y ayudar a los demás (He 13:16), las ofrendas (Fil 4:18) y la oración, que sube como incienso.',
        { h: 'Reyes y sacerdotes' },
        'Apocalipsis comienza alabando a Cristo, «que nos amó, y nos lavó de nuestros pecados con su sangre, y nos hizo reyes y sacerdotes para Dios, su Padre» (Ap 1:5-6). Y en el milenio, los que tengan parte en la primera resurrección «serán sacerdotes de Dios y de Cristo, y reinarán con él mil años» (Ap 20:6). Lo que Melquisedec anticipó, un rey que es sacerdote, se cumple en Cristo y se extiende a su pueblo.',
        'Desde Aarón hasta la nueva Jerusalén, el sacerdocio enseña lo mismo: Dios quiere habitar con su pueblo, y ha provisto el camino para que nos acerquemos a él.'
      ],
      pensar: 'Pedro dice que todo creyente es parte de un «real sacerdocio» para anunciar las virtudes de Dios (1 P 2:9). ¿Qué sacrificio espiritual puedes ofrecer hoy, y a quién puedes llevar a Dios?'
    }
  ];

  const LINEA = { desde: -1500, hasta: 100, hitos: [
    { a: -1446, t: 'Sinaí: Aarón' }, { a: -1100, t: 'Elí y Samuel' }, { a: -966, t: 'Templo de Salomón' },
    { a: -586, t: 'Cae el templo' }, { a: -516, t: 'Segundo templo' }, { a: -152, t: 'Asmoneos' }, { a: 70, t: 'Fin del templo' }
  ] };

  window.RUTA_DATA = {
    titulo: 'El sacerdocio en Israel',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'ordenes', grupo: 'El sacerdocio', n: 'Los tres órdenes', info: 'Origen, sumo sacerdote, sacerdotes y levitas, consagración, santidad, sustento y turnos', linea: LINEA, estaciones: ordenes },
      { id: 'piedras', grupo: 'El sacerdocio', n: 'Las doce piedras', info: 'El pectoral, las piedras una por una, hombros y corazón, el Urim y Tumim, y la nueva Jerusalén', linea: LINEA, estaciones: piedras },
      { id: 'historia', grupo: 'Historia', n: 'Historia del sacerdocio', info: 'De Aarón a Elí, Sadoc, el exilio, Anás y Caifás y el año 70', linea: LINEA, estaciones: historia },
      { id: 'cristo', grupo: 'Cristo', n: 'Cristo, nuestro sumo sacerdote', info: 'Melquisedec, un sacerdote mejor, un sacrificio para siempre, el velo rasgado y el real sacerdocio', linea: LINEA, estaciones: cristo }
    ]
  };
})();
