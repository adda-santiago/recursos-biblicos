/* Lucas · parte 4: ruta IV, Teología, y ruta de mapas */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  // ================== RUTA IV. Teología del libro ==================
  L.teologia = [
    {
      id: 't-cristo', n: 'Cristo en Lucas: Salvador, Señor e Hijo del Hombre', ref: 'Lucas 1:32-35; 2:11; 5:24; 7:16; 9:20; 19:10; 22:69-70; 24:19, 26', fecha: [-5, 33],
      visual: [
        tabla({
          titulo: 'Los títulos de Jesús en Lucas',
          cab: ['Título', 'Pasajes', 'Qué destaca'],
          filas: [
            ['Hijo del Altísimo, Hijo de Dios', '1:32, 35; 3:22; 9:35; 22:70', 'Su relación única con el Padre'],
            ['Salvador', '2:11', 'Su misión: salvar a los perdidos'],
            ['Cristo (Mesías)', '2:11, 26; 9:20; 24:26, 46', 'El Ungido prometido a Israel'],
            ['Señor', '2:11; 7:13; 10:1; 24:3, 34', 'Su autoridad divina'],
            ['Hijo del Hombre', '5:24; 9:22; 19:10; 21:27; 22:69', 'El que sufre, salva y vendrá en gloria'],
            ['Profeta', '4:24; 7:16; 13:33; 24:19', 'El profeta como Moisés (Hch 3:22)'],
            ['Hijo de David, Rey', '1:32; 18:38; 19:38; 23:3', 'El heredero del trono eterno']
          ]
        }),
        cita('Lucas 2:10-11', '@@lc/2/10-11')
      ],
      texto: [
        'Lucas presenta a Jesús con muchos títulos, y cada uno muestra una faceta de su persona y su obra.',
        { h: 'Verdadero Dios' },
        'Desde el anuncio a María, Jesús es «Hijo del Altísimo» e «Hijo de Dios», concebido por el Espíritu Santo (Lc 1:32, 35). El Padre lo declara su Hijo amado en el bautismo y en la transfiguración. Lucas usa a menudo para Jesús el título «Señor», el mismo con que la Biblia griega traducía el nombre de Dios. Jesús perdona pecados, algo que solo Dios puede hacer (Lc 5:21-24), y recibe adoración después de su ascensión (Lc 24:52).',
        { h: 'Verdadero hombre' },
        'Lucas destaca también su humanidad: nace en un pesebre, crece en sabiduría y en estatura (Lc 2:52), ora, se compadece, llora sobre Jerusalén y agoniza en Getsemaní. Es el segundo Adán: la genealogía lo une a toda la humanidad (Lc 3:38), y en el desierto vence donde Adán cayó.',
        { h: 'El Salvador' },
        'El ángel lo anuncia como «un Salvador, que es CRISTO el Señor» (Lc 2:11). Vino «a buscar y a salvar lo que se había perdido» (Lc 19:10). Su salvación incluye el perdón de los pecados, la sanidad y la liberación, y alcanza a todos los que creen.',
        { h: 'El Hijo del Hombre' },
        'Es el título que Jesús prefería para sí. Lo une a su autoridad presente (perdona pecados, es Señor del sábado), a su sufrimiento («es necesario que el Hijo del Hombre padezca», Lc 9:22) y a su gloria futura, cuando venga «en una nube con poder y gran gloria» (Lc 21:27; véase Dn 7:13-14).',
        { h: 'Profeta, sacerdote y rey' },
        'La gente lo reconoce como «un gran profeta» (Lc 7:16), y Él mismo dice que debe morir en Jerusalén como los profetas. Es el Rey que entra en la ciudad y el que reinará sobre la casa de Jacob para siempre. Y es el que intercede, bendice con las manos alzadas como un sacerdote y entrega su vida como sacrificio del nuevo pacto.',
        ir('Ver «Los títulos de Jesús» en La persona y obra de Cristo', R.cristo + '#persona/4'),
        ir('Ver «Los tres oficios del Mesías» en La persona y obra de Cristo', R.cristo + '#oficios/1')
      ],
      pensar: 'De todos los títulos de Jesús en Lucas, ¿cuál describe mejor lo que Él ha sido para ti? ¿Cuál necesitas conocer más?'
    },
    {
      id: 't-espiritu', n: 'El Espíritu Santo: el Ungido y la promesa del Padre', ref: 'Lucas 1:35; 3:16, 21-22; 4:1, 14, 18; 10:21; 11:13; 24:49; Hechos 1:4-8; 2:4, 38-39', fecha: [-7, 33],
      visual: [
        tabla({
          titulo: 'Del Espíritu en Jesús al Espíritu en la iglesia',
          cab: ['En Jesús (Lucas)', 'En los discípulos (Hechos)'],
          filas: [
            ['Concebido por el Espíritu (1:35)', 'Nacidos del Espíritu (Jn 3:5)'],
            ['El Espíritu desciende mientras ora (3:21-22)', 'El Espíritu desciende mientras oran (Hch 1:14; 2:1-4)'],
            ['Lleno del Espíritu (4:1)', 'Fueron todos llenos del Espíritu Santo (Hch 2:4)'],
            ['En el poder del Espíritu (4:14)', 'Recibiréis poder (Hch 1:8)'],
            ['Ungido para predicar y sanar (4:18)', 'Predican con señales y prodigios (Hch 4:30-31)']
          ]
        }),
        cita('Lucas 24:49', '@@lc/24/49')
      ],
      texto: [
        'Lucas une su evangelio y Hechos con el hilo del Espíritu Santo. Lo que el Espíritu hizo en Jesús, lo hace después en sus discípulos.',
        { h: 'Jesús, ungido por el Espíritu' },
        'El Hijo eterno no necesitaba llegar a ser Dios, pero como hombre vivió en dependencia del Espíritu. Fue concebido por el Espíritu; en el bautismo, el Espíritu descendió sobre Él; fue lleno del Espíritu en el desierto y volvió a Galilea en su poder. En Nazaret explicó su ministerio con Isaías 61: «El Espíritu del Señor está sobre mí, por cuanto me ha ungido» (Lc 4:18). Pedro lo resume en casa de Cornelio: «Dios ungió con el Espíritu Santo y con poder a Jesús de Nazaret… porque Dios estaba con él» (Hch 10:38).',
        { h: 'Jesús, el que bautiza en el Espíritu' },
        'Juan anunció que el que vendría «os bautizará en Espíritu Santo y fuego» (Lc 3:16). Jesús prometió que el Padre daría el Espíritu Santo a los que se lo pidieran (Lc 11:13). Y antes de ascender llamó a esa experiencia «la promesa de mi Padre» y la describió como ser «investidos de poder desde lo alto» (Lc 24:49). En Hechos, Jesús la identifica con el bautismo en el Espíritu Santo (Hch 1:5, 8).',
        { h: 'Poder para testificar' },
        'Para Lucas, el bautismo en el Espíritu tiene un propósito: dar poder para ser testigos. Los discípulos ya creían en el Cristo resucitado y habían recibido la comisión, pero debían esperar en Jerusalén. Cuando llegó Pentecostés, «fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas» (Hch 2:4), y Pedro anunció que la promesa es «para todos los que están lejos» (Hch 2:39).',
        { posturas: {
          titulo: '¿El bautismo en el Espíritu ocurre en la conversión?',
          a: { n: 'Una experiencia de poder posterior a la conversión', t: 'En Lucas y Hechos, el bautismo en el Espíritu es una investidura de poder para el servicio, distinta de la regeneración y posterior a ella: los discípulos creían antes de Pentecostés, los samaritanos creyeron y después lo recibieron (Hch 8:12-17), y los de Éfeso también (Hch 19:1-6). Su señal inicial son las otras lenguas. Es la enseñanza que sigue este sitio.' },
          b: { n: 'Parte de la conversión', t: 'Otros entienden que todo creyente es bautizado en el Espíritu al convertirse (1 Co 12:13), y que Pentecostés fue un momento único de la historia; después solo hay llenuras sucesivas.' },
          c: 'Las dos posturas reconocen que todo creyente tiene al Espíritu (Ro 8:9) y que debe ser lleno de Él (Ef 5:18). La primera explica mejor el modelo de Lucas, que es narrador pero también maestro: muestra la experiencia que la iglesia debe esperar.'
        } },
        ir('Ver «El bautismo en el Espíritu Santo» en Hechos', R.hechos + '#teologia/2'),
        ir('Ver «El bautismo en el Espíritu Santo» en El movimiento pentecostal', R.pentecostal + '#doctrina/2'),
        { ir: { t: 'Ver «La promesa del Padre» en El Espíritu Santo', a: '../../espiritu-santo/#bautismo/1' } }
      ],
      pensar: 'Jesús dijo a discípulos que ya creían en Él que esperaran el poder de lo alto. ¿Has recibido esa investidura de poder? Si no, ¿qué te impide pedirla al Padre?'
    },
    {
      id: 't-salvacion', n: 'La salvación: hoy, por la fe, para los perdidos', ref: 'Lucas 1:77; 3:3; 5:20, 32; 7:50; 15:7; 18:13-14; 19:9-10; 23:43; 24:47', fecha: [28, 33],
      visual: [
        tabla({
          titulo: 'Cómo se recibe la salvación en Lucas',
          cab: ['Elemento', 'Ejemplo'],
          filas: [
            ['Arrepentimiento', '«Si no os arrepentís, todos pereceréis» (13:3); el hijo pródigo «volvió en sí» (15:17)'],
            ['Fe', '«Tu fe te ha salvado, vé en paz» (7:50; 8:48; 17:19; 18:42)'],
            ['Humildad', '«Dios, sé propicio a mí, pecador» (18:13)'],
            ['Perdón de pecados', '«Tus pecados te son perdonados» (5:20; 7:48)'],
            ['Vida transformada', 'Zaqueo devuelve lo robado (19:8)'],
            ['Gozo', 'Hay gozo en el cielo por un pecador que se arrepiente (15:7, 10)']
          ]
        }),
        img('lc-fariseo-publicano.webp', 'En un atrio del templo, un fariseo bien vestido ora de pie con las manos en alto mientras, al fondo, un publicano con la cabeza baja se golpea el pecho', 'El publicano volvió a su casa justificado (Lc 18:14).')
      ],
      texto: [
        'La salvación es el tema central de Lucas. Zacarías canta que Juan daría «conocimiento de salvación a su pueblo, para perdón de sus pecados» (Lc 1:77). Y Jesús termina enviando a predicar «el arrepentimiento y el perdón de pecados» a todas las naciones (Lc 24:47).',
        { h: 'Una obra de Dios' },
        'En Lucas la salvación siempre parte de Dios. Es Dios el que «ha visitado y redimido a su pueblo» (Lc 1:68). Jesús es el pastor que busca la oveja, la mujer que barre la casa, el padre que corre. Nadie se salva a sí mismo; el perdido es encontrado.',
        { h: 'Por la fe' },
        'La respuesta humana es el arrepentimiento y la fe. Cuatro veces Jesús dice: «tu fe te ha salvado» (Lc 7:50; 8:48; 17:19; 18:42). El publicano no tenía nada que presentar y solo pidió misericordia, y «descendió a su casa justificado» (Lc 18:14). El ladrón en la cruz no pudo hacer ninguna obra ni bautizarse, y Jesús le prometió el paraíso. La salvación es por gracia, por medio de la fe.',
        { h: 'Hoy' },
        'La salvación tiene un tiempo: «hoy». Llega cuando Jesús llega. «Hoy ha venido la salvación a esta casa» (Lc 19:9). No hay que esperar a ser mejores; hay que recibir al que viene.',
        { h: 'Sanidad y liberación' },
        'La palabra griega que se traduce «salvar» significa también sanar. Jesús dice «tu fe te ha salvado» tanto a la pecadora perdonada como a la mujer sanada del flujo de sangre y al ciego que recupera la vista. En Lucas, la salvación alcanza a toda la persona: perdona el pecado, libera de los demonios y sana el cuerpo. La sanidad divina es parte de la obra de Cristo, aunque la redención completa del cuerpo espera la resurrección.',
        { h: 'Una vida nueva' },
        'La salvación verdadera se nota. Zaqueo no fue salvo por devolver lo robado, sino que devolvió lo robado porque había sido salvo. El perdón produce amor (Lc 7:47) y alegría.',
        ir('Ver «Justificados por la fe» en La persona y obra de Cristo', R.cristo + '#cruz/5'),
        ir('Ver «Sanidad en la expiación» en La persona y obra de Cristo', R.cristo + '#cruz/8')
      ],
      pensar: 'El publicano y el ladrón no tenían nada que ofrecer y fueron salvos por la fe. ¿Confías en la misericordia de Dios o todavía en lo que tú puedes presentarle?'
    },
    {
      id: 't-reino', n: 'El reino de Dios: ya y todavía no', ref: 'Lucas 1:32-33; 4:43; 10:9; 11:20; 17:20-21; 19:11-27; 22:16-18, 29-30; Hechos 1:6-7', fecha: [29, 33],
      visual: [
        esq('../persona-y-obra-de-cristo/img/esquema-reino.svg', 'Esquema del reino de Dios: presente en la primera venida de Cristo y en la iglesia, y manifestado en plenitud en su segunda venida y el milenio', 'El reino que vino y que vendrá.'),
        tabla({
          titulo: 'El reino en Lucas',
          cab: ['El reino ya presente', 'El reino todavía futuro'],
          filas: [
            ['«El reino de Dios ha llegado a vosotros» (11:20)', '«Venga tu reino» (11:2)'],
            ['«El reino de Dios está entre vosotros» (17:21)', 'El noble vuelve con el reino (19:12-15)'],
            ['Sanidades y liberaciones (10:9; 11:20)', 'Los doce juzgarán a las tribus de Israel (22:30)'],
            ['Se predica y se entra en él (16:16)', 'Comer y beber en el reino (22:16-18)'],
            ['Los pobres lo reciben (6:20)', 'Recibirá el trono de David para siempre (1:32-33)']
          ]
        })
      ],
      texto: [
        'Jesús dijo que su misión era anunciar «el evangelio del reino de Dios» (Lc 4:43). El reino es el gobierno de Dios, su poder que salva, sana y vence al mal. En Lucas, ese reino ya llegó con Jesús, pero todavía espera su manifestación plena.',
        { h: 'Ya presente' },
        'Cuando Jesús expulsa demonios, el reino «ha llegado» (Lc 11:20). A los fariseos que pedían señales para calcular su llegada, les dijo que el reino de Dios estaba entre ellos (Lc 17:21): estaba presente en la persona del Rey. Los discípulos lo anuncian y sanan a los enfermos (Lc 10:9), y quien lo recibe como un niño entra en él.',
        { h: 'Todavía futuro' },
        'Pero el reino no se manifestó en toda su plenitud en la primera venida. Por eso Jesús enseña a orar «venga tu reino». La parábola de las minas responde a quienes pensaban «que el reino de Dios se manifestaría inmediatamente» (Lc 19:11): el noble debe ir lejos y volver. En la última cena, Jesús dice que no beberá del fruto de la vid hasta que el reino venga, y promete a los doce que se sentarán en tronos juzgando a las doce tribus de Israel (Lc 22:30).',
        { h: 'Las promesas a Israel' },
        'El ángel prometió que Jesús recibiría «el trono de David su padre» y reinaría sobre la casa de Jacob para siempre (Lc 1:32-33). Esa promesa no se espiritualiza ni se transfiere: se cumplirá cuando Cristo vuelva. Por eso, después de la resurrección, los discípulos preguntaron: «¿restaurarás el reino a Israel en este tiempo?», y Jesús no negó la restauración, sino que dijo que los tiempos los fija el Padre (Hch 1:6-7). Mientras tanto, la iglesia vive la era del Espíritu y de la misión a las naciones, y espera el reino milenial de Cristo.',
        { posturas: {
          titulo: '¿El trono de David es el reinado actual de Cristo?',
          a: { n: 'Un reino futuro sobre la tierra', t: 'Cristo reina ya a la diestra del Padre, pero el trono de David, prometido a Israel, se establecerá en su segunda venida, en el reino milenial (Ap 20:4-6). Así se cumplen literalmente las promesas a David y a Israel.' },
          b: { n: 'Cumplido en la exaltación de Cristo', t: 'Muchos entienden que Jesús ya se sentó en el trono de David al ascender (Hch 2:30-36), y que las promesas del reino se cumplen espiritualmente en la iglesia y finalmente en la nueva creación.' },
          c: 'Hechos 2:30-36 enseña que Cristo ya fue exaltado como Señor, y Hechos 1:6-7 y 3:21 dejan abierta la restauración futura de todas las cosas. Este sitio sigue la primera postura.'
        } },
        ir('Ver «Rey: el reino que vino y que vendrá» en La persona y obra de Cristo', R.cristo + '#oficios/4'),
        ir('Ver «Israel y los pactos de Dios» en Los últimos tiempos', R.escatologia + '#temas/1')
      ],
      pensar: 'Vivimos entre el reino que ya llegó y el que todavía vendrá. ¿Qué señales del reino presente ves en tu vida, y cómo te ayuda a esperar el futuro?'
    },
    {
      id: 't-fin', n: 'Los últimos tiempos en Lucas', ref: 'Lucas 12:35-48; 17:20-37; 18:8; 21:5-36; Hechos 1:11', fecha: [33, 70],
      visual: [
        esq('lc-discurso.svg', 'Línea de tiempo: la destrucción de Jerusalén en el año 70, una flecha larga marcada «los tiempos de los gentiles», y al final las señales en el cielo y la venida del Hijo del Hombre', 'Lucas 21: del año 70 a la venida del Hijo del Hombre.'),
        cita('Lucas 21:34-36', '@@lc/21/34-36')
      ],
      texto: [
        'Lucas registra tres grandes enseñanzas de Jesús sobre el futuro: los siervos que esperan (Lc 12:35-48), los días del Hijo del Hombre (Lc 17:20-37) y el discurso en el templo (Lc 21:5-36). Las tres llaman a estar preparados.',
        { h: 'La venida es segura y visible' },
        'Jesús volverá personalmente. Su venida será como el relámpago que resplandece de un extremo a otro del cielo (Lc 17:24), y lo verán venir «en una nube con poder y gran gloria» (Lc 21:27). Los ángeles lo confirman en la ascensión: «este mismo Jesús… así vendrá como le habéis visto ir al cielo» (Hch 1:11).',
        { h: 'La fecha no se conoce' },
        'El Hijo del Hombre vendrá «a la hora que no penséis» (Lc 12:40). Jesús no dio fechas; dio señales para estar alerta y advirtió contra los que dicen «el tiempo está cerca» para arrastrar a otros (Lc 21:8). Toda predicción con fecha ha fallado.',
        { h: 'Israel y los tiempos de los gentiles' },
        'Lucas distingue con claridad la destrucción de Jerusalén del año 70 y la venida del Hijo del Hombre. Entre ambas se extienden «los tiempos de los gentiles» (Lc 21:24). Pablo enseña algo semejante: el endurecimiento de Israel durará «hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo» (Ro 11:25-26). Jesús anunció que Jerusalén lo vería otra vez cuando dijera «Bendito el que viene en nombre del Señor» (Lc 13:35).',
        { h: 'Arrebatamiento y venida' },
        'Lucas no describe el arrebatamiento de la iglesia con detalle, como Pablo en 1 Tesalonicenses 4:16-17. Pero Jesús promete a sus discípulos que podrán «escapar de todas estas cosas que vendrán, y de estar en pie delante del Hijo del Hombre» (Lc 21:36). La enseñanza del sitio, en línea con el Nuevo Testamento completo, es que la iglesia será arrebatada antes de la gran tribulación, y que después Cristo vendrá en gloria con sus santos para establecer su reino.',
        { h: 'Vivir preparados' },
        'Las enseñanzas sobre el futuro siempre terminan en la vida práctica: no cargar el corazón de glotonería, embriaguez y afanes (Lc 21:34), ser mayordomos fieles, orar en todo tiempo. Jesús pregunta: «cuando venga el Hijo del Hombre, ¿hallará fe en la tierra?» (Lc 18:8).',
        ir('Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', R.escatologia + '#eventos/2'),
        ir('Ver «Los tiempos de los gentiles» en Los últimos tiempos', R.escatologia + '#panorama/6')
      ],
      pensar: '«Cuando venga el Hijo del Hombre, ¿hallará fe en la tierra?» Si Jesús volviera hoy, ¿te encontraría velando y orando?'
    },
    {
      id: 't-oracion', n: 'El Padre que escucha', ref: 'Lucas 10:21-22; 11:1-13; 18:1-8; 22:42; 23:34, 46', fecha: [29, 33],
      visual: [
        cita('Lucas 10:21-22', '@@lc/10/21-22'),
        tabla({
          titulo: 'Lo que Lucas enseña sobre la oración',
          cab: ['Enseñanza', 'Pasaje'],
          filas: [
            ['Dios es Padre y quiere dar', '11:11-13'],
            ['La oración insiste y no desmaya', '11:5-8; 18:1-8'],
            ['La oración nace de la humildad', '18:9-14'],
            ['La oración busca la voluntad del Padre', '22:42'],
            ['La oración vence la tentación', '22:40, 46'],
            ['La oración intercede por otros y aun por los enemigos', '22:32; 23:34'],
            ['La oración prepara la llegada del Espíritu', '3:21-22; 11:13; Hch 1:14']
          ]
        })
      ],
      texto: [
        'Lucas no solo muestra que Jesús oraba; enseña quién es el Dios al que oramos. Jesús lo llama «Padre» en todas sus oraciones, desde la de los doce años en el templo hasta la de la cruz.',
        { h: 'Un Padre que se revela' },
        'Cuando volvieron los setenta, Jesús se regocijó en el Espíritu y dijo: «Yo te alabo, oh Padre, Señor del cielo y de la tierra, porque escondiste estas cosas de los sabios y entendidos, y las has revelado a los niños» (Lc 10:21). Nadie conoce al Padre sino el Hijo, «y aquel a quien el Hijo lo quiera revelar» (Lc 10:22). Por medio de Jesús, sus discípulos pueden conocer a Dios como Padre y hablarle con confianza.',
        { h: 'Un Padre que da' },
        'Las parábolas del amigo a medianoche y de la viuda insistente no presentan a Dios como alguien que hay que convencer. Son comparaciones de contraste: si un amigo cansado o un juez injusto terminan respondiendo, «¿cuánto más» el Padre celestial? (Lc 11:13). Dios no es tacaño ni lejano. La insistencia no lo cambia a Él; nos forma a nosotros en la fe.',
        { h: 'La voluntad del Padre' },
        'En Getsemaní, Jesús mostró el corazón de la oración: «no se haga mi voluntad, sino la tuya» (Lc 22:42). La oración no es un medio para que Dios haga lo que queremos, sino el lugar donde aprendemos a querer lo que Él quiere. Por eso Jesús repitió a sus discípulos: «Orad que no entréis en tentación» (Lc 22:40, 46). Ellos durmieron, y cayeron.',
        { h: 'Oración y Espíritu' },
        'En Lucas, el Espíritu desciende cuando se ora. Jesús estaba orando en el bautismo (Lc 3:21). El Padre da el Espíritu a los que se lo piden (Lc 11:13). Y los discípulos perseveraron en oración diez días antes de Pentecostés (Hch 1:14). La oración y la llenura del Espíritu van juntas.',
        ir('Ir a la ruta Jesús que ora', '#oracion/1'),
        ir('Ver «Una iglesia que ora» en Hechos', R.hechos + '#iglesia/3')
      ],
      pensar: 'Jesús enseña que Dios es un Padre que da buenas cosas, y la mejor es su Espíritu. ¿Cambia tu manera de orar saber que hablas con un Padre así?'
    },
    {
      id: 't-pobres', n: 'Pobres y ricos: la gran inversión', ref: 'Lucas 1:51-53; 6:20-26; 12:13-34; 14:12-24; 16:19-31; 18:18-30; 19:1-10', fecha: [-5, 33],
      visual: [
        img('lc-rico-lazaro.webp', 'Ante la puerta de piedra de una casa lujosa, un mendigo flaco y cubierto de llagas yace en el suelo, mientras se ve el banquete adentro y unos perros se le acercan', 'El rico y Lázaro (Lc 16:19-21).'),
        tabla({
          titulo: 'La gran inversión del reino',
          cab: ['Los de arriba bajan', 'Los de abajo suben'],
          filas: [
            ['«Quitó de los tronos a los poderosos» (1:52)', '«Exaltó a los humildes» (1:52)'],
            ['«A los ricos envió vacíos» (1:53)', '«A los hambrientos colmó de bienes» (1:53)'],
            ['«¡Ay de vosotros, ricos!» (6:24)', '«Bienaventurados vosotros los pobres» (6:20)'],
            ['El que se enaltece será humillado (14:11)', 'El que se humilla será enaltecido (14:11)'],
            ['El rico, en tormentos (16:23)', 'Lázaro, en el seno de Abraham (16:22)'],
            ['El fariseo vuelve sin justificar (18:14)', 'El publicano vuelve justificado (18:14)']
          ]
        })
      ],
      texto: [
        'Una de las enseñanzas más fuertes de Lucas es lo que algunos llaman la gran inversión: en el reino de Dios, los que están arriba bajan y los que están abajo suben. María lo canta antes del nacimiento de Jesús (Lc 1:51-53), y Jesús lo repite en el sermón del llano, en sus parábolas y en sus encuentros.',
        { h: 'No una ideología, sino el carácter de Dios' },
        'Esta enseñanza no divide a las personas en buenos y malos según su dinero. La pobreza no salva, y hubo ricos que recibieron a Jesús, como Zaqueo, José de Arimatea y las mujeres que lo sostenían con sus bienes. Lo que Lucas muestra es que Dios se pone del lado de los humildes, de los que no tienen a quién acudir, y que las riquezas son un peligro porque hacen al hombre sentirse autosuficiente.',
        { h: 'El peligro de las riquezas' },
        'El rico insensato pensó que tenía su vida asegurada (Lc 12:19). El rico de la parábola vivió para sí sin ver a Lázaro (Lc 16:19-21). El joven rico no pudo dejar sus bienes para seguir a Jesús (Lc 18:23). Jesús dice: «¡Cuán difícilmente entrarán en el reino de Dios los que tienen riquezas!» (Lc 18:24). No es imposible, porque lo que es imposible para los hombres es posible para Dios, pero es una advertencia seria.',
        { h: 'La respuesta del discípulo' },
        'El discípulo usa sus bienes con libertad y generosidad: da sin esperar nada (Lc 6:35), invita a los que no pueden devolver (Lc 14:13-14), se hace tesoros en el cielo (Lc 12:33) y administra con fidelidad lo que Dios le confió (Lc 16:10-12). Cuando la iglesia de Jerusalén lo vivió, «no había entre ellos ningún necesitado» (Hch 4:34).',
        { h: 'Contra el evangelio de la prosperidad' },
        'Esta enseñanza contradice a quienes presentan la riqueza como prueba de fe y la pobreza como falta de fe. En Lucas, Dios bendice a sus hijos y suple sus necesidades (Lc 12:30-31), pero el que mide su relación con Dios por sus bienes está más cerca del rico insensato que del publicano.',
        ir('Ver «Ricos y pobres» en El mundo judío', R.mundo + '#vida/6'),
        ir('Ver «Comunión y generosidad» en Hechos', R.hechos + '#iglesia/2')
      ],
      pensar: 'En el reino, el que se humilla es enaltecido. ¿Dónde te está llamando Dios a bajar, para que Él te levante?'
    },
    {
      id: 't-discipulado', n: 'El discipulado: seguir a Jesús en el camino', ref: 'Lucas 5:11, 27-28; 9:23-26, 57-62; 14:25-33; 18:28-30; 24:13-35', fecha: [30, 33],
      visual: [
        tabla({
          titulo: 'Seguir a Jesús en Lucas',
          cab: ['Rasgo', 'Pasaje'],
          filas: [
            ['Dejarlo todo', '5:11, 28; 18:28'],
            ['Negarse a sí mismo y tomar la cruz cada día', '9:23'],
            ['No mirar atrás', '9:62'],
            ['Amar a Jesús más que a la familia y a la propia vida', '14:26'],
            ['Calcular el costo', '14:28-33'],
            ['Escuchar a sus pies', '10:39'],
            ['Servir como Él sirvió', '22:26-27'],
            ['Ser testigos con el poder del Espíritu', '24:48-49']
          ]
        }),
        cita('Lucas 9:57-62', '@@lc/9/57-62')
      ],
      texto: [
        'Lucas es un evangelio en camino. Jesús va a Jerusalén y llama a otros a ir con Él. Seguirle no es solo creer en Él, sino caminar detrás de Él.',
        { h: 'Un llamado radical' },
        'Los primeros discípulos, «dejándolo todo, le siguieron» (Lc 5:11). Leví dejó su banco de tributos. Jesús pide negarse a sí mismo y tomar la cruz «cada día» (Lc 9:23), y advierte a los que quieren seguirle con condiciones: el que pone la mano en el arado y mira atrás no es apto para el reino (Lc 9:62). Ante las multitudes que lo seguían con entusiasmo, les pidió calcular el costo (Lc 14:28).',
        'Estas palabras no son solo para algunos creyentes especiales. Jesús no ofrece un discipulado barato, pero tampoco pide algo que Él no dé primero: Él mismo dejó su gloria, se hizo siervo y fue a la cruz.',
        { h: 'Escuchar y servir' },
        'El discípulo es alguien que se sienta a los pies de Jesús, como María (Lc 10:39), y que oye la palabra y la hace (Lc 8:21). Y es alguien que sirve, porque su Maestro estuvo entre ellos «como el que sirve» (Lc 22:27). En el reino, la grandeza se mide por el servicio.',
        { h: 'Discípulos que fallan' },
        'Lucas no oculta las debilidades de los discípulos: no entienden los anuncios de la pasión, discuten quién es el mayor, se duermen en Getsemaní, Pedro niega a Jesús y los de Emaús pierden la esperanza. Pero Jesús ora por ellos, los restaura y les abre las Escrituras. El discipulado no es para perfectos, sino para los que vuelven y siguen caminando.',
        { h: 'Testigos llenos del Espíritu' },
        'Al final, Jesús llama a los discípulos «testigos» (Lc 24:48). El camino que comenzó en Galilea sigue en Hechos, donde el «Camino» llega a ser el nombre de la fe cristiana (Hch 9:2). Los seguidores de Jesús continúan su obra con el mismo Espíritu que lo ungió a Él.',
        ir('Ver «El costo del discípulo» en la Armonía', R.armonia + '#costo-discipulo'),
        ir('Ir a la ruta De Lucas a Hechos', '#puente/1')
      ],
      pensar: 'Jesús dice que el que pone la mano en el arado no debe mirar atrás. ¿Qué cosas del pasado te están haciendo mirar atrás en tu camino con Él?'
    }
  ];

  // ================== Mapas ==================
  L.mapas = [
    {
      id: 'm-mundo', n: 'El mundo de Lucas', ref: 'Lucas 2:1-2; 3:1-2; 24:47; Hechos 1:8', fecha: [-5, 62],
      visual: [
        pasos([
          { t: 'El imperio de Augusto: «que todo el mundo fuese empadronado» (2:1)', fecha: -5, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'antioquia', 'alejandria', 'jerusalen', 'belen'] } },
          { t: 'Judea en el imperio: Tiberio, Pilato, Herodes y Felipe (3:1)', fecha: 29, estado: { view: V.oriente, capas: ['roma-14', 'hd-antipas', 'hd-felipe', 'hd-provincia'], lugares: ['jerusalen', 'cesarea', 'damasco', 'antioquia', 'alejandria'] } },
          { t: '«En todas las naciones, comenzando desde Jerusalén» (24:47)', fecha: 33, estado: { view: V.mediterraneo, capas: ['roma-14', 'iglesia-35'], lugares: ['jerusalen', 'samaria', 'antioquia', 'roma'] } },
          { t: 'Cuando Lucas escribe: la iglesia de Jerusalén a Roma, hacia el 60', fecha: 60, estado: { view: V.mediterraneo, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'antioquia', 'efeso', 'filipos', 'corinto', 'roma', 'cesarea'] } }
        ]),
        tabla({
          titulo: 'Los gobernantes que nombra Lucas',
          cab: ['Gobernante', 'Cargo', 'Años'],
          filas: [
            ['Augusto', 'Emperador', '27 a.C.–14 d.C.'],
            ['Cirenio (Quirino)', 'Gobernador de Siria', 'Desde el 6 d.C.; antes, otros cargos en Oriente'],
            ['Herodes el Grande', 'Rey de Judea', '37–4 a.C.'],
            ['Tiberio', 'Emperador', '14–37 d.C.'],
            ['Poncio Pilato', 'Prefecto de Judea', '26–36 d.C.'],
            ['Herodes Antipas', 'Tetrarca de Galilea y Perea', '4 a.C.–39 d.C.'],
            ['Felipe', 'Tetrarca de Iturea y Traconite', '4 a.C.–34 d.C.']
          ]
        })
      ],
      texto: [
        'Esta ruta recorre en el mapa los lugares del evangelio de Lucas. Comienza por el cuadro más grande: el imperio romano en que nació Jesús y en que se escribió el libro.',
        { h: 'Un evangelio en el imperio' },
        'Lucas abre la historia de Jesús con un decreto de Augusto que alcanza a «todo el mundo» (Lc 2:1), es decir, a todo el imperio. El emperador gobernaba desde Roma un territorio que iba de Hispania a Siria. Judea era una región pequeña en el extremo oriental, primero bajo el rey Herodes y después dividida entre sus hijos y un gobernador romano.',
        { h: 'Judea, Galilea y el noreste' },
        'Cuando Juan comenzó a predicar, Pilato gobernaba Judea, Samaria e Idumea desde Cesarea; Herodes Antipas, Galilea y Perea; y Felipe, las tierras al norte y al este del mar de Galilea (Lc 3:1). El mapa muestra esa división. Jesús creció en Galilea, bajo Antipas, y murió en Jerusalén, bajo Pilato. Los dos se encontraron en el juicio (Lc 23:6-12).',
        { h: 'Hacia todas las naciones' },
        'El evangelio termina con una mirada al mundo: el perdón de pecados debe predicarse «en todas las naciones, comenzando desde Jerusalén» (Lc 24:47). Cuando Lucas escribió, hacia el 60, ya había iglesias en Siria, Asia Menor, Grecia y Roma, y él mismo había viajado con Pablo por esos caminos. El último paso del mapa muestra la iglesia en ese tiempo.',
        'Las estaciones que siguen bajan a la tierra de Israel: Nazaret y Belén, Galilea, el gran viaje, el camino de Jericó a Jerusalén y Emaús. En cada mapa se puede activar el relieve, que ayuda a entender por qué Lucas dice que se «sube» a Jerusalén y se «desciende» a Jericó o a Capernaúm.',
        ir('Ver «Roma en Judea» en El imperio romano', R.romano + '#historia/3'),
        ir('Ver «El reino dividido entre tres hijos» en La dinastía de Herodes', R.herodes + '#grande/8')
      ],
      pensar: 'El evangelio nació en una provincia pequeña de un imperio enorme, y hoy ha llegado a todo el mundo. ¿Qué te dice eso sobre el poder de la palabra de Dios frente a los poderes humanos?'
    },
    {
      id: 'm-nazaret', n: 'De Nazaret a Belén y al templo', ref: 'Lucas 1:26, 39; 2:1-7, 22, 39-52', fecha: [-6, 8],
      visual: [
        pasos([
          { t: 'Nazaret, «ciudad de Galilea»: el anuncio a María (1:26)', fecha: -6, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen'] } },
          { t: 'María va a «una ciudad de Judá» en la montaña (1:39)', fecha: -6, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'montana-judea', 'jerusalen'] } },
          { t: 'José sube con María a Belén para el censo (2:4)', fecha: -5, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'], trazos: ['jesus-belen'] } },
          { t: 'A los cuarenta días, la presentación en el templo (2:22)', fecha: -5, estado: { view: V.judea, capas: ['nt-judea'], lugares: ['belen', 'jerusalen'] } },
          { t: 'Vuelven a Nazaret (2:39)', fecha: -4, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'], trazos: ['jesus-nazaret'] } },
          { t: 'Cada año, a la Pascua: Jesús a los doce años (2:41-42)', fecha: 8, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'jerusalen'] } }
        ]),
        img('../tierra-de-israel/img/peregrinos.webp', 'Una caravana de familias peregrinas con asnos camina por un camino de montaña hacia Jerusalén', 'Peregrinos camino a la fiesta.')
      ],
      texto: [
        'Los dos primeros capítulos de Lucas se mueven entre Galilea y Judea. El mapa sigue sus pasos.',
        { h: 'Nazaret y la montaña de Judea' },
        'Nazaret era una aldea pequeña de las colinas de la Baja Galilea, que el Antiguo Testamento nunca menciona. Por eso Lucas la explica: «una ciudad de Galilea, llamada Nazaret» (Lc 1:26). Desde allí María fue «a la montaña, a una ciudad de Judá» (Lc 1:39), donde vivían Zacarías y Elisabet. Lucas no da el nombre; una tradición antigua lo ubica en Ein Karem, al oeste de Jerusalén. Era un viaje de unos cuatro o cinco días a pie.',
        { h: 'A Belén' },
        'Por el censo, José subió de Nazaret a Belén, «por cuanto era de la casa y familia de David» (Lc 2:4). Belén está unos ocho kilómetros al sur de Jerusalén, en la serranía de Judá; era la ciudad de David y el lugar anunciado por Miqueas. El camino más directo cruzaba Samaria; muchos galileos preferían bajar por el valle del Jordán y subir por Jericó. En cualquier caso, eran unos 150 kilómetros.',
        { h: 'Al templo y de vuelta' },
        'Belén estaba tan cerca de Jerusalén que la familia pudo subir al templo para la presentación a los cuarenta días. Lucas dice luego que, cumplido todo, volvieron a Nazaret (Lc 2:39). Mateo cuenta además la visita de los magos y la huida a Egipto (Mt 2), que ocurrieron en ese tiempo; Lucas no la narra.',
        { h: 'Peregrinos a la Pascua' },
        'Cada año, la familia subía a Jerusalén para la Pascua (Lc 2:41). Viajaban en caravana, con parientes y vecinos, por eso José y María caminaron un día entero sin notar que Jesús no estaba con ellos. La distancia y la costumbre de los peregrinos explican el relato.',
        ir('Ver «De Belén a Nazaret» en Cronología del Nuevo Testamento', R.crono + '#nacimiento/5'),
        ir('Ver «Las fiestas de peregrinación» en El mundo judío', R.mundo + '#fe/2')
      ],
      pensar: 'José y María subían cada año a Jerusalén con su hijo. ¿Qué costumbres de fe estás formando en tu familia o en quienes te rodean?'
    },
    {
      id: 'm-galilea', n: 'Galilea: Capernaúm y el lago', ref: 'Lucas 4:14-44; 5:1-11; 7:11-17; 8:22-39; 9:10-17', fecha: [29, 32],
      visual: [
        pasos([
          { t: 'Nazaret: rechazado en su tierra (4:16-30)', fecha: 29, estado: { view: V.galilea, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['nazaret', 'capernaum', 'mar-galilea'] } },
          { t: 'Capernaúm: la sinagoga y la casa de Simón (4:31-41)', fecha: 30, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['capernaum', 'magdala', 'betsaida', 'mar-galilea'] } },
          { t: 'Naín: el hijo de la viuda (7:11-17)', fecha: 31, estado: { view: V.galilea, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['nain', 'tabor', 'nazaret', 'capernaum'] } },
          { t: 'El lago y la tierra de los gadarenos (8:22-39)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['capernaum', 'gadara', 'mar-galilea', 'magdala'] } },
          { t: 'Betsaida: los cinco mil (9:10-17)', fecha: 32, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis', 'nt-felipe'], lugares: ['betsaida', 'capernaum', 'mar-galilea', 'corazin'] } }
        ]),
        img('../tierra-de-israel/img/galilea.webp', 'Colinas verdes con campos de cultivo descienden hacia el mar de Galilea, con barcas de pesca en la orilla', 'El mar de Galilea y sus colinas.')
      ],
      texto: [
        'El ministerio en Galilea ocupa de Lucas 4:14 a 9:50. Casi todo ocurre alrededor del lago, en un territorio pequeño gobernado por Herodes Antipas.',
        { h: 'Nazaret y Capernaúm' },
        'Después del rechazo de Nazaret, Jesús bajó a Capernaúm (Lc 4:31). Nazaret está en las colinas, a unos 350 metros sobre el nivel del mar; Capernaúm, junto al lago, unos 200 metros bajo el nivel del mar. Lucas dice literalmente que Jesús «descendió». Capernaúm era un pueblo de pescadores y agricultores sobre el camino que iba de la costa a Damasco, con una sinagoga y una aduana. Allí vivían Pedro y Andrés, y allí estaba el banco de Leví.',
        { h: 'El lago' },
        'Lucas, que conocía el Mediterráneo, llama al mar de Galilea «lago» (Lc 5:1; 8:22). Tiene unos 21 kilómetros de largo y 13 de ancho. Por su ubicación, rodeado de colinas, los vientos bajan de pronto y levantan tormentas. Al otro lado, en la orilla oriental, estaba la Decápolis, una región de ciudades griegas con población mayormente gentil; por eso había allí un hato de cerdos (Lc 8:32).',
        { h: 'Naín y Betsaida' },
        'Naín está unos 40 kilómetros al suroeste de Capernaúm, al pie del monte Moré, frente al Tabor. Muy cerca estaba Sunem, donde Eliseo resucitó al hijo de una mujer (2 R 4:32-37). La multiplicación de los panes ocurrió cerca de Betsaida (Lc 9:10), al norte del lago, en el territorio de Felipe.',
        { h: 'Un ministerio itinerante' },
        'Lucas muestra a Jesús recorriendo «todas las ciudades y aldeas» (Lc 8:1), con los doce y las mujeres que lo servían. El mapa ayuda a ver que eran distancias que se recorrían a pie en uno o dos días.',
        ir('Ver «Galilea y su mar» en La tierra de Israel', R.tierra + '#regiones/6'),
        ir('Ver «Antipas, el constructor de Galilea» en La dinastía de Herodes', R.herodes + '#hijos/3')
      ],
      pensar: 'Jesús eligió como centro de su ministerio un pueblo de pescadores, no la capital. ¿Qué te dice eso sobre los lugares donde Dios quiere obrar hoy?'
    },
    {
      id: 'm-viaje', n: 'El gran viaje a Jerusalén', ref: 'Lucas 9:51-56; 10:38; 13:22; 17:11; 18:31, 35; 19:1, 11, 28', fecha: [32, 33],
      visual: [
        esq('lc-viaje.svg', 'Una línea que va de Galilea a Jerusalén con seis marcas: Lucas 9:51, 13:22, 17:11, 18:31, 19:11 y 19:28, cada una con la frase en que Lucas recuerda que Jesús va a Jerusalén', 'El viaje a Jerusalén: Lucas lo recuerda seis veces.'),
        pasos([
          { t: 'Salida de Galilea: «afirmó su rostro» (9:51)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['capernaum', 'nazaret', 'jerusalen'] } },
          { t: 'Una aldea de samaritanos lo rechaza (9:52-56)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['samaria', 'sicar', 'jerusalen'], trazos: ['jesus-samaria'] } },
          { t: '«Pasaba entre Samaria y Galilea» (17:11)', fecha: 33, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'samaria', 'jerico'] } },
          { t: 'Por el valle del Jordán hasta Jericó (18:35; 19:1)', fecha: 33, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['jerico', 'jerusalen', 'betania'], trazos: ['jesus-jerusalen'] } },
          { t: 'De Jericó a Jerusalén (19:28)', fecha: 33, estado: { view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'betania', 'jerusalen'], trazos: ['c-jerico'] } }
        ])
      ],
      texto: [
        'La sección central de Lucas, de 9:51 a 19:27, es un viaje. Pero no es un itinerario detallado: Lucas da pocos nombres de lugares y no sigue una ruta en línea recta.',
        { h: 'Un viaje con propósito' },
        'Lucas recuerda seis veces que Jesús va hacia Jerusalén, como muestra el esquema. Lo que le importa no es la geografía exacta, sino la dirección: cada parábola y cada encuentro ocurren «en el camino» hacia la cruz. Por eso algunos llaman a esta sección «el camino del discípulo»: Jesús enseña a seguirlo mientras va a morir.',
        { h: 'Por Samaria' },
        'Al salir, Jesús envió mensajeros a una aldea de samaritanos, que no lo recibieron porque iba a Jerusalén (Lc 9:53). Los samaritanos tenían su propio templo en el monte Gerizim y se negaban a ayudar a los peregrinos que iban a Jerusalén. Más adelante, Lucas dice que pasaba «entre Samaria y Galilea» (Lc 17:11), en la frontera entre las dos regiones.',
        { h: 'Por Perea y el Jordán' },
        'Muchos peregrinos galileos evitaban Samaria cruzando el Jordán y bajando por Perea, el territorio de Antipas al este del río. Mateo y Marcos dicen que Jesús pasó por allí (Mt 19:1; Mr 10:1). Los fariseos le advirtieron que Herodes quería matarlo (Lc 13:31), lo que encaja con estar en tierras de Antipas. Juan agrega que Jesús visitó Jerusalén en otras fiestas durante este tiempo (Jn 7:10; 10:22). Lucas resume todo en un solo viaje.',
        { h: 'Jericó' },
        'El viaje termina en Jericó, la ciudad de las palmeras, a unos 250 metros bajo el nivel del mar, junto al Jordán. Allí Jesús sanó al ciego y llamó a Zaqueo. Desde Jericó quedaba la subida final.',
        { posturas: {
          titulo: '¿Un viaje o varios?',
          a: { n: 'Lucas reúne varios viajes en uno', t: 'Juan muestra que Jesús subió a Jerusalén en distintas fiestas durante sus últimos meses. Lucas habría reunido material de ese período en una sola sección, ordenada por temas y orientada hacia la cruz, sin pretender un diario de viaje.' },
          b: { n: 'Un solo viaje largo', t: 'Otros entienden que la sección describe un último recorrido de varios meses por Galilea, Samaria y Perea antes de la Pascua final, con las visitas de Juan intercaladas.' },
          c: 'Las dos lecturas respetan el texto. Lucas dice que escribe «por orden» (Lc 1:3), pero el orden de un historiador antiguo podía ser temático además de cronológico.'
        } },
        ir('Ver «El orden del ministerio» en Cronología', R.crono + '#ministerio/5')
      ],
      pensar: 'Durante todo el viaje, Jesús sabía que iba hacia la cruz, y aun así se detuvo a buscar a un ciego y a un publicano. ¿Qué te enseña eso sobre su amor?'
    },
    {
      id: 'm-jericho', n: 'De Jericó a Jerusalén', ref: 'Lucas 10:30; 18:35–19:46', fecha: 33,
      visual: [
        pasos([
          { t: 'Jericó, unos 250 metros bajo el nivel del mar', fecha: 33, estado: { view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'desierto-judea', 'jerusalen'] } },
          { t: 'La subida por el desierto de Judea: unos 30 kilómetros', fecha: 33, estado: { view: V.judea, capas: ['nt-judea', 'nt-perea'], lugares: ['jerico', 'desierto-judea', 'betania', 'jerusalen'], trazos: ['c-jerico'] } },
          { t: 'Betania y el monte de los Olivos, unos 800 metros sobre el mar', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['betania', 'monte-olivos', 'jerusalen', 'getsemani'] } }
        ]),
        esq('../tierra-de-israel/img/esquema-perfil.svg', 'Perfil del terreno de oeste a este a la altura de Jerusalén: la costa, la serranía de Judá, el desierto que baja abruptamente y el valle del Jordán bajo el nivel del mar', 'El perfil de la tierra de Israel: de Jerusalén a Jericó se bajan más de mil metros.'),
        img('../tierra-de-israel/img/engadi.webp', 'Colinas desnudas y quebradas del desierto de Judea, de color ocre, con un sendero que baja entre las rocas', 'El desierto de Judea.')
      ],
      texto: [
        'El tramo final del viaje es uno de los caminos más impresionantes de la tierra de Israel. En unos 30 kilómetros, se sube desde Jericó, en el valle del Jordán, hasta el monte de los Olivos, frente a Jerusalén: más de mil metros de desnivel.',
        { h: 'Un camino por el desierto' },
        'El camino cruza el desierto de Judea, una zona seca, de colinas peladas y quebradas profundas, donde casi no llueve porque las nubes del Mediterráneo descargan antes en la serranía. Era un lugar ideal para los asaltantes. Por eso la parábola del buen samaritano, que Jesús contó durante el viaje, ocurre aquí: «Un hombre descendía de Jerusalén a Jericó, y cayó en manos de ladrones» (Lc 10:30). Cualquier oyente conocía ese peligro.',
        { h: 'La subida de los peregrinos' },
        'En la Pascua, el camino se llenaba de peregrinos de Galilea y Perea. Subían cantando los salmos de ascenso (Sal 120–134). Jesús hizo ese recorrido con una multitud, después de sanar al ciego y de comer en casa de Zaqueo. Lucas dice: «Dicho esto, iba delante subiendo a Jerusalén» (Lc 19:28). Iba al frente, decidido.',
        { h: 'Betania y el monte de los Olivos' },
        'Al final de la subida, en la ladera oriental del monte de los Olivos, estaban las aldeas de Betfagé y Betania, a unos tres kilómetros de la ciudad. En Betania vivían Marta y María. Desde la cumbre del monte se ve de golpe toda Jerusalén y, en tiempos de Jesús, el templo resplandeciente. Allí lloró Jesús sobre la ciudad (Lc 19:41).',
        'Desde el mismo monte, Jesús ascendería al cielo cuarenta días después (Lc 24:50; Hch 1:12), y la profecía anuncia que sus pies se afirmarán de nuevo sobre él cuando venga (Zac 14:4).',
        ir('Ver «El desierto de Judea y el Neguev» en La tierra de Israel', R.tierra + '#regiones/8'),
        ir('Ver «Distancias y viajes a pie» en La tierra de Israel', R.tierra + '#caminos/6')
      ],
      pensar: 'Jesús «iba delante subiendo a Jerusalén», sabiendo lo que le esperaba allí. ¿Qué paso difícil de obediencia necesitas dar siguiendo su ejemplo?'
    },
    {
      id: 'm-emaus', n: 'El camino a Emaús y la ascensión', ref: 'Lucas 24:13-35, 50-53; Hechos 1:12', fecha: 33,
      visual: [
        pasos([
          { t: 'Jerusalén: la tumba vacía, el domingo de mañana (24:1-12)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'golgota'] } },
          { t: 'A Emaús, a sesenta estadios: unos 11 kilómetros (24:13)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'emaus'], trazos: ['c-emaus'] } },
          { t: 'Esa misma hora, de vuelta a Jerusalén (24:33)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['emaus', 'jerusalen'], trazos: ['c-emaus'] } },
          { t: '«Los sacó fuera hasta Betania»: la ascensión (24:50-51)', fecha: 33, estado: { view: V.jerusalen, capas: ['nt-judea'], lugares: ['jerusalen', 'monte-olivos', 'betania'] } }
        ]),
        img('lc-emaus.webp', 'Al atardecer, en un camino entre colinas de Judea, dos discípulos conversan con un tercer caminante, visto de espaldas, que les explica algo con la mano', 'El camino a Emaús (Lc 24:15).')
      ],
      texto: [
        'El último capítulo de Lucas ocurre en un solo día y en un espacio pequeño: Jerusalén, el camino a Emaús y el monte de los Olivos.',
        { h: '¿Dónde estaba Emaús?' },
        'Lucas dice que Emaús estaba «a sesenta estadios de Jerusalén» (Lc 24:13). Un estadio medía unos 185 metros, así que la distancia era de unos 11 kilómetros: unas dos horas y media a pie. No se sabe con certeza cuál era la aldea. Se han propuesto varios lugares; este sitio la ubica en el-Qubeibeh, al noroeste de Jerusalén, que coincide con la distancia que da Lucas. Otra candidata, Emaús Nicópolis, está a unos 160 estadios, demasiado lejos para ir y volver el mismo día, aunque algunos manuscritos traen esa cifra.',
        { h: 'Ida y vuelta en un día' },
        'Los dos discípulos salieron de Jerusalén y caminaron conversando hasta el atardecer, cuando le pidieron al desconocido que se quedara «porque se hace tarde» (Lc 24:29). Después de reconocerlo al partir el pan, «levantándose en la misma hora, volvieron a Jerusalén» (Lc 24:33), de noche, otros 11 kilómetros. La alegría les dio fuerzas para desandar el camino.',
        { h: 'Betania' },
        'Lucas termina su evangelio contando que Jesús llevó a los discípulos «fuera hasta Betania» y allí, bendiciéndolos, fue llevado al cielo (Lc 24:50-51). En Hechos agrega que la ascensión ocurrió cuarenta días después de la resurrección y en el monte de los Olivos, «el cual está cerca de Jerusalén, camino de un día de reposo» (Hch 1:3, 12). Betania estaba en la ladera de ese monte. Lucas resume en el evangelio lo que en Hechos cuenta con más detalle.',
        'El mapa termina donde empieza Hechos: en Jerusalén, con los discípulos esperando la promesa del Padre.',
        ir('Ver «Distancias y viajes a pie» en La tierra de Israel', R.tierra + '#caminos/6'),
        ir('Ver «La resurrección, los cuarenta días y Pentecostés» en Cronología', R.crono + '#semana/6')
      ],
      pensar: 'Los de Emaús caminaron 11 kilómetros de noche para contar que Jesús vivía. ¿Qué estarías dispuesto a hacer para compartir esa noticia?'
    }
  ];
})();
