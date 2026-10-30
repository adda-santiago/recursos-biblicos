/* El mundo judío en tiempos de Jesús · ruta II. El poder (ver encabezado en parte1.js) */
(() => {
  const { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__MJ;

  // ================== RUTA II. El poder ==================
  const poder = [
    {
      id: 'prefecto', n: 'El prefecto romano, de Coponio a Pilato', ref: 'Lucas 3:1; Lucas 13:1-3; Mateo 27:19; Juan 19:12; Hechos 4:27', fecha: [6, 41],
      visual: [
        foto('foto-piedra-pilato.jpg', 'Bloque de piedra caliza al aire libre con letras latinas talladas en tres líneas, donde se leen TIBERIEVM y PILATVS', 'Réplica de la inscripción de Pilato en Cesarea, donde fue hallada en 1961: Poncio Pilato, prefecto de Judea, dedica un edificio al emperador Tiberio. El original está en el Museo de Israel, en Jerusalén.', 'CC BY-SA 2.0 · Marion Doss, vía Wikimedia Commons'),
        tabla({
          titulo: 'Los gobernadores romanos de Judea',
          cab: ['Años', 'Gobernador', 'En la Biblia o en la historia'],
          filas: [
            ['6–9 d.C.', 'Coponio', 'El primer prefecto; llega con el censo de Quirinio'],
            ['9–15 d.C.', 'Marco Ambíbulo y Annio Rufo', 'Pocos datos'],
            ['15–26 d.C.', 'Valerio Grato', 'Cambia cuatro veces de sumo sacerdote hasta nombrar a Caifás'],
            ['26–36 d.C.', 'Poncio Pilato', 'Gobierna durante el ministerio de Jesús y lo condena a muerte'],
            ['36–41 d.C.', 'Marcelo y Marulo', 'Después, Agripa I reina sobre toda la tierra (41–44)'],
            ['44–66 d.C.', 'Procuradores (Félix, Festo y otros)', 'Félix y Festo juzgan a Pablo (Hechos 23–25)']
          ]
        }),
        cita('Lucas 13:1-3', '@@lc/13/1-3')
      ],
      texto: [
        'Desde el año 6 d.C., Judea, Samaria e Idumea dejaron de tener un rey y pasaron a ser gobernadas por un funcionario romano de rango ecuestre, es decir, de la clase de los caballeros, no de los senadores. Hasta el año 41 su título era prefecto; desde el 44, procurador. Los evangelios lo llaman simplemente «el gobernador».',
        { h: 'Lo que hacía un prefecto' },
        'El prefecto residía en Cesarea, la ciudad que Herodes había construido junto al mar, con un puerto, un teatro y un templo dedicado a Augusto. Mandaba sobre unos pocos miles de soldados, cobraba los tributos para Roma, nombraba y destituía al sumo sacerdote, guardaba las vestiduras sacerdotales del Día de la Expiación y era el único que podía condenar a muerte. En las fiestas subía a Jerusalén con sus tropas para vigilar a las multitudes de peregrinos.',
        { h: 'Poncio Pilato' },
        'Pilato gobernó diez años, del 26 al 36. Las fuentes judías lo describen como un hombre duro y poco atento a la sensibilidad de los judíos. Josefo cuenta que hizo entrar de noche en Jerusalén los estandartes de sus soldados con la imagen del emperador, y que solo los retiró cuando una multitud se dejó caer al suelo dispuesta a morir antes que aceptar imágenes en la ciudad santa. También tomó dinero del tesoro del templo para construir un acueducto, y reprimió con violencia la protesta. Filón agrega que colgó en Jerusalén unos escudos dedicados al emperador, que tuvo que retirar por orden de Tiberio.',
        'Lucas menciona otro episodio que no aparece en otras fuentes: unos galileos «cuya sangre Pilato había mezclado con los sacrificios de ellos» (Lc 13:1). Jesús usó la noticia para llamar al arrepentimiento, no para atacar a Roma.',
        'En el año 36, Pilato atacó a un grupo de samaritanos reunidos en el monte Gerizim; el gobernador de Siria lo envió a Roma para que respondiera ante el emperador, y no volvió a Judea.',
        { h: 'Un gobernador que temía' },
        'En el juicio de Jesús, Pilato aparece indeciso: su esposa le advierte que no tenga nada que ver con «ese justo» (Mt 27:19), él declara tres veces que no halla delito en Jesús, pero cede cuando la multitud le grita: «Si a éste sueltas, no eres amigo de César» (Jn 19:12). Un gobernador con denuncias en su contra no podía arriesgarse a que lo acusaran de proteger a un rival del emperador.',
        'En 1961, unos arqueólogos italianos hallaron en el teatro de Cesarea una piedra con su nombre y su título: prefecto de Judea. Es el único objeto de su tiempo que lo nombra.',
        ir('Ver El imperio romano: Jesús ante Roma', R.romano + '#biblia/3')
      ],
      pensar: 'Pilato sabía que Jesús era inocente, pero pesó más su temor a perder su cargo. ¿En qué situaciones el temor a lo que otros piensen puede llevarte a callar o a ceder ante lo que sabes que es injusto?'
    },
    {
      id: 'antipas', n: 'Herodes Antipas y Felipe', ref: 'Lucas 3:19-20; Marcos 6:17-29; Lucas 9:7-9; Lucas 13:31-33; Lucas 8:3; Mateo 16:13', fecha: [-4, 39],
      visual: [
        img('mj-antipas-banquete.webp', 'En un salón de un palacio herodiano de Galilea, decorado con mosaicos y columnas, Herodes Antipas reclinado en un diván preside un banquete con nobles galileos, oficiales y tribunos, mientras sirvientes llevan bandejas y copas de vino a la luz de lámparas', 'Herodes Antipas da una cena a «sus príncipes y tribunos y a los principales de Galilea» (Marcos 6:21). Recreación.'),
        mapa({ view: V.palestina, capas: ['nt-galilea', 'nt-perea', 'nt-felipe'], lugares: ['tiberias', 'seforis', 'maqueronte', 'cesarea-filipo', 'betsaida', 'nazaret', 'capernaum'] }),
        cita('Lucas 13:31-33', '@@lc/13/31-33')
      ],
      texto: [
        'Cuando los evangelios hablan de «Herodes» durante el ministerio de Jesús, se refieren a Herodes Antipas, hijo de Herodes el Grande, que gobernó Galilea y Perea del año 4 a.C. al 39 d.C. No tenía el título de rey sino el de tetrarca, que significa gobernante de una cuarta parte. Su vida y la de su familia se estudian en La dinastía de Herodes (en preparación); aquí basta con lo que importa para leer los evangelios.',
        { h: 'Un constructor de ciudades' },
        'Antipas reconstruyó Séforis, a unos seis kilómetros de Nazaret, destruida por los romanos después de la muerte de su padre. Más tarde fundó una nueva capital a orillas del lago y la llamó Tiberíades, en honor del emperador. La construyó sobre un antiguo cementerio, por lo que muchos judíos piadosos se negaban a vivir allí; los evangelios nunca dicen que Jesús entrara en ella.',
        { h: 'Juan el Bautista y Herodías' },
        'Antipas se divorció de su esposa, hija del rey de los nabateos, y se casó con Herodías, que había sido esposa de su medio hermano. Juan el Bautista le dijo públicamente: «No te es lícito tenerla» (Mt 14:4). Antipas lo encarceló; Josefo dice que en la fortaleza de Maqueronte, al este del mar Muerto. Marcos cuenta que Herodes «temía a Juan, sabiendo que era varón justo y santo», y que lo escuchaba con gusto, pero que en el banquete de su cumpleaños, por un juramento imprudente, mandó decapitarlo (Mr 6:20-28).',
        { h: 'Antipas y Jesús' },
        'Cuando oyó hablar de los milagros de Jesús, Antipas se inquietó: «A Juan yo le hice decapitar; ¿quién, pues, es éste?» (Lc 9:9). En otra ocasión, unos fariseos advirtieron a Jesús que Herodes quería matarlo. Jesús respondió: «Id, y decid a aquella zorra» que su obra seguiría hasta el final (Lc 13:32). Había gente de su corte entre los seguidores de Jesús, como Juana, «mujer de Chuza intendente de Herodes» (Lc 8:3). En la Pascua de la crucifixión, Pilato le envió a Jesús; Antipas esperaba ver una señal, y como Jesús no le respondió, lo ridiculizó y lo devolvió (Lc 23:8-11).',
        'En el año 39, Antipas viajó a Roma a pedir el título de rey; su sobrino Agripa lo acusó ante el emperador Calígula, que lo desterró a la Galia.',
        { h: 'Felipe, el tetrarca del norte' },
        'Su medio hermano Felipe gobernó las regiones del noreste, de población mayormente gentil, del 4 a.C. al 34 d.C. Reconstruyó Paneas, junto a las fuentes del Jordán, y la llamó Cesarea; para distinguirla de la de la costa se la conocía como Cesarea de Filipo. Allí Jesús preguntó a sus discípulos: «¿Quién dicen los hombres que es el Hijo del Hombre?» (Mt 16:13).'
      ],
      pensar: 'Antipas escuchaba con gusto a Juan, pero no estuvo dispuesto a cambiar su vida, y terminó matándolo por no quedar mal ante sus invitados. ¿Qué diferencia hay entre escuchar la Palabra con agrado y obedecerla?'
    },
    {
      id: 'sumos-sacerdotes', n: 'Anás, Caifás y el sumo sacerdocio', ref: 'Juan 18:12-14, 19-24; Lucas 3:2; Hechos 4:5-6; Juan 11:49-52; Mateo 26:57, 65', fecha: [6, 66],
      visual: [
        img('../sacerdocio/img/sac-caifas.webp', 'De noche, en una sala del palacio del sumo sacerdote en Jerusalén iluminada por antorchas, Caifás, con vestiduras sacerdotales, rasga su manto ante Jesús, que está de pie, atado y sereno, rodeado por miembros del sanedrín', 'Caifás rasga sus vestiduras (Mateo 26:65). Recreación.'),
        foto('foto-osario-caifas.jpg', 'Caja funeraria de piedra caliza con tapa curva, decorada en su frente con rosetas y hojas talladas, en una vitrina de museo', 'Osario hallado en 1990 en una tumba familiar al sur de Jerusalén. En uno de sus costados, que no se ve en la foto, lleva grabado el nombre «Yehosef bar Qayafa», José hijo de Caifás. Muchos estudiosos lo atribuyen al sumo sacerdote. Museo de Israel.', 'CC BY-SA 3.0 · deror_avi, vía Wikimedia Commons'),
        tabla({
          titulo: 'La familia de Anás en el sumo sacerdocio',
          cab: ['Sumo sacerdote', 'Años', 'Relación con Anás'],
          filas: [
            ['Anás', '6–15 d.C.', 'Nombrado por Quirinio; sigue influyendo después de su destitución'],
            ['Eleazar', '16–17 d.C.', 'Hijo'],
            ['Caifás (José)', '18–36 d.C.', 'Yerno (Juan 18:13)'],
            ['Jonatán', '36–37 d.C.', 'Hijo'],
            ['Teófilo', '37–41 d.C.', 'Hijo'],
            ['Matías', 'c. 43 d.C.', 'Hijo'],
            ['Anás el joven', '62 d.C.', 'Hijo; hace ejecutar a Santiago, hermano del Señor']
          ],
          nota: 'Fechas aproximadas, según Josefo.'
        }),
        cita('Juan 18:12-14', '@@jn/18/12-14')
      ],
      texto: [
        'En la ley de Moisés, el sumo sacerdote servía de por vida, y el cargo pasaba de padre a hijo en la familia de Aarón. En tiempos de Jesús ya no era así. Herodes el Grande, y después los gobernadores romanos, nombraban y destituían al sumo sacerdote a su gusto, eligiéndolo entre unas pocas familias sacerdotales ricas de Jerusalén. Entre el año 37 a.C. y el 70 d.C. hubo veintiocho sumos sacerdotes.',
        { h: 'Anás, el patriarca' },
        'La familia más poderosa fue la de Anás. Fue nombrado en el año 6 por Quirinio, el gobernador de Siria, y destituido en el 15, pero cinco de sus hijos y su yerno Caifás ocuparon después el cargo. Por eso, aunque ya no era sumo sacerdote, seguía siendo el hombre fuerte del templo, y los evangelios y Hechos lo siguen llamando así (Lc 3:2; Hch 4:6). Cuando arrestaron a Jesús, lo llevaron «primeramente a Anás; porque era suegro de Caifás» (Jn 18:13).',
        { h: 'Caifás, el sumo sacerdote de la cruz' },
        'José, llamado Caifás, fue sumo sacerdote del 18 al 36, más tiempo que ningún otro en el siglo I. Eso indica que supo mantener buenas relaciones con los gobernadores romanos, incluido Pilato, con quien coincidió diez años. Los dos fueron destituidos casi al mismo tiempo.',
        'Juan cuenta que, después de la resurrección de Lázaro, el concilio temió que todos creyeran en Jesús y que los romanos destruyeran el templo y la nación. Caifás respondió que convenía «que un hombre muera por el pueblo, y no que toda la nación perezca» (Jn 11:50). Hablaba de un cálculo político, pero sin saberlo anunció la verdad del evangelio: Jesús moriría por la nación, «y no solamente por la nación, sino también para congregar en uno a los hijos de Dios que estaban dispersos» (Jn 11:52).',
        { h: 'Un sacerdocio rico y poderoso' },
        'Las familias de los sumos sacerdotes controlaban el templo, sus tesoros y su comercio. Josefo cuenta que, en los años 50 y 60, algunos enviaban a sus siervos a quitar por la fuerza los diezmos que correspondían a los sacerdotes pobres. La arqueología ha excavado en la parte alta de Jerusalén grandes casas de familias sacerdotales, con mosaicos, frescos y varios baños rituales.',
        'En 1990 apareció en una tumba de Jerusalén un osario, una caja de piedra para guardar los huesos, con el nombre de José hijo de Caifás. Muchos estudiosos creen que es el del sumo sacerdote que juzgó a Jesús, aunque no hay certeza.',
        ir('Ver El sacerdocio en Israel: Asmoneos, Anás y Caifás', R.sacerdocio + '#historia/5')
      ],
      pensar: 'Caifás tomó una decisión por conveniencia política, pero Dios usó sus palabras para anunciar la salvación. ¿Qué te enseña esto sobre la soberanía de Dios aun en las decisiones injustas de los hombres?'
    },
    {
      id: 'sanedrin', n: 'El Sanedrín en tiempos de Jesús', ref: 'Juan 11:47-53; Marcos 14:53-64; Lucas 22:66-71; Lucas 23:50-51; Hechos 5:27-40; Hechos 23:1-10', fecha: [6, 66],
      visual: [
        img('../hechos/img/hechos-pedro-sanedrin.webp', 'Pedro y Juan, de pie y serenos, ante el sanedrín reunido en semicírculo, con el sumo sacerdote y ancianos vestidos con mantos', 'Pedro y Juan ante el Sanedrín (Hechos 4). Recreación.'),
        tabla({
          titulo: 'El Sanedrín en el Nuevo Testamento',
          cab: ['Ocasión', 'Pasaje', 'Lo que ocurre'],
          filas: [
            ['Después de la resurrección de Lázaro', 'Juan 11:47-53', 'Acuerdan matar a Jesús'],
            ['La noche del arresto y al amanecer', 'Marcos 14:53-64; Lucas 22:66', 'Condenan a Jesús por blasfemia y lo entregan a Pilato'],
            ['Pedro y Juan sanan a un cojo', 'Hechos 4:5-21', 'Les prohíben hablar en el nombre de Jesús'],
            ['Los apóstoles son arrestados', 'Hechos 5:17-40', 'Gamaliel aconseja dejarlos; los azotan'],
            ['Esteban', 'Hechos 6:12–7:58', 'Lo acusan y lo apedrean'],
            ['Pablo', 'Hechos 22:30–23:10', 'Fariseos y saduceos se dividen por la resurrección']
          ]
        }),
        esq('esquema-poder.svg', 'Esquema de quién gobernaba hacia el año 28, con el sumo sacerdote y el Sanedrín bajo el prefecto romano', 'El Sanedrín juzgaba según la ley, pero no podía ejecutar sin el prefecto romano.'),
        cita('Juan 11:47-53', '@@jn/11/47-53')
      ],
      texto: [
        'El origen del Sanedrín y su composición se estudian en Entre los Testamentos. En tiempos de Jesús era el consejo supremo de los judíos en Jerusalén, presidido por el sumo sacerdote y formado por los principales sacerdotes, los escribas y los ancianos.',
        ir('Ver Entre los Testamentos: el Sanedrín', R.entre + '#nacio/6'),
        { h: 'Un tribunal bajo Roma' },
        'Bajo el gobierno de los prefectos, el Sanedrín tenía bastante poder: juzgaba los asuntos religiosos, administraba Jerusalén, tenía su propia guardia del templo y podía mandar a azotar o encarcelar. Pero la pena de muerte quedaba reservada al gobernador romano (Jn 18:31). La única excepción conocida era la de un gentil que entrara en los atrios interiores del templo, y la inscripción que lo advertía se ha encontrado.',
        { h: 'El juicio de Jesús' },
        'Los evangelios cuentan dos momentos: una reunión de noche en casa de Caifás, donde se buscaron testigos falsos y Jesús declaró ser el Cristo, el Hijo de Dios, que vendría «sentado a la diestra del poder de Dios» (Mr 14:62); y una reunión al amanecer, que confirmó la sentencia y lo entregó a Pilato (Lc 22:66-71). El cargo ante el Sanedrín fue de blasfemia; ante Pilato, de hacerse rey.',
        { posturas: {
          titulo: '¿Fue ilegal el juicio de Jesús?',
          a: { n: 'Un juicio contrario a la ley', t: 'La Mishná da reglas para los juicios de pena de muerte: no podían hacerse de noche, ni en víspera de sábado o de fiesta, y la sentencia debía esperar al día siguiente. Según estas reglas, el juicio de Jesús habría violado muchas normas, lo que mostraría la urgencia y la injusticia de sus jueces.' },
          b: { n: 'No se sabe si esas reglas regían entonces', t: 'La Mishná se escribió hacia el año 200, cuando el Sanedrín ya no existía, y refleja el ideal de los maestros fariseos más que la práctica del tribunal saduceo de Caifás. No hay forma de saber si esas reglas estaban vigentes en el año 30.' },
          c: 'Lo que los evangelios dejan claro, sin depender de la Mishná, es que se buscaron testigos falsos (Mr 14:55-56), que la decisión estaba tomada antes del juicio (Jn 11:53) y que Jesús era inocente. Su condena no fue un error judicial, sino parte del plan de Dios para nuestra salvación (Hch 2:23).'
        } },
        { h: 'Un consejo dividido' },
        'No todos los miembros estuvieron de acuerdo. José de Arimatea, «miembro del concilio, varón bueno y justo», no había consentido en la decisión (Lc 23:50-51), y Nicodemo había defendido a Jesús (Jn 7:50-51). Años después, el fariseo Gamaliel aconsejó dejar en paz a los apóstoles: si su obra era de Dios, «no la podréis destruir» (Hch 5:39).'
      ],
      pensar: 'José de Arimatea formaba parte del consejo que condenó a Jesús, pero «no había consentido en el acuerdo». ¿Qué te enseña su ejemplo sobre mantenerse fiel cuando la mayoría a tu alrededor decide lo contrario?'
    },
    {
      id: 'impuestos', n: 'Impuestos, publicanos y el tributo al César', ref: 'Mateo 9:9-11; Lucas 3:12-13; Lucas 19:1-8; Mateo 17:24-27; Mateo 22:15-21; Romanos 13:7', fecha: [6, 66],
      visual: [
        img('mj-mateo-banco.webp', 'En la orilla del mar de Galilea, junto a un camino a la entrada de Capernaúm, Mateo, un publicano judío de unos treinta años, está sentado tras una mesa de madera con monedas, una balanza y tablillas de cuentas, mientras unos comerciantes con burros cargados esperan para pagar; Jesús, visto de espaldas, se ha detenido frente a él', '«Vio a un hombre llamado Mateo, que estaba sentado al banco de los tributos públicos» (Mateo 9:9). Recreación.'),
        tabla({
          titulo: 'Lo que pagaba un judío en tiempos de Jesús',
          cab: ['Impuesto', 'A quién', 'En la Biblia'],
          filas: [
            ['Tributo personal y sobre la tierra', 'Roma (en Judea) o Herodes Antipas (en Galilea)', 'El tributo al César (Mateo 22:17); el censo (Lucas 2:1-3; Hechos 5:37)'],
            ['Peajes y aduanas', 'Cobrados por publicanos que compraban el derecho de cobrarlos', 'Mateo en Capernaúm (Mateo 9:9); Zaqueo en Jericó (Lucas 19:2)'],
            ['Medio siclo del templo', 'El templo, una vez al año, cada varón judío', 'Las dos dracmas (Mateo 17:24)'],
            ['Diezmos y primicias', 'Los sacerdotes y levitas', 'Los fariseos diezmaban hasta la menta (Mateo 23:23)']
          ]
        }),
        cita('Lucas 3:12-13', '@@lc/3/12-13')
      ],
      texto: [
        'Un campesino de Galilea o de Judea pagaba impuestos a varios señores a la vez: al gobierno, al templo y a los sacerdotes. Sumados, se llevaban una parte importante de la cosecha de una familia que apenas vivía de lo que producía.',
        { h: 'El tributo a Roma' },
        'En Judea, desde el año 6, se pagaba un tributo directo a Roma: un impuesto por persona y otro sobre la tierra. Para fijarlo, Quirinio hizo un censo, y eso provocó la rebelión de Judas el galileo (II.7). En Galilea, en cambio, los impuestos se pagaban a Herodes Antipas. Por eso la pregunta que le hicieron a Jesús en Jerusalén era una trampa: «¿Es lícito dar tributo a César, o no?» (Mt 22:17). Si decía que sí, el pueblo lo rechazaría; si decía que no, podían acusarlo ante el gobernador. La respuesta de Jesús se estudia en VI.4.',
        { h: 'Los publicanos' },
        'Los peajes y las aduanas no los cobraban funcionarios, sino particulares que compraban el derecho de cobrarlos y se quedaban con lo que recaudaban por encima de lo pactado. Era fácil abusar. Los publicanos de los evangelios eran judíos que cobraban para Roma o para Herodes, y por eso el pueblo los consideraba traidores y ladrones, y los ponía al lado de los pecadores y las prostitutas (Mt 21:31). Capernaúm, donde Jesús llamó a Mateo, estaba en el camino que pasaba del territorio de Antipas al de Felipe; Jericó, donde vivía Zaqueo, «jefe de los publicanos, y rico» (Lc 19:2), era un cruce de caminos y un centro de comercio del bálsamo.',
        'Juan el Bautista no les pidió a los publicanos que dejaran su oficio, sino que fueran honestos: «No exijáis más de lo que os está ordenado» (Lc 3:13). Jesús fue más allá: comió con ellos y llamó a uno de ellos a ser apóstol. Zaqueo, al recibirlo en su casa, prometió dar la mitad de sus bienes a los pobres y devolver cuadruplicado lo que había defraudado (Lc 19:8).',
        { h: 'El impuesto del templo' },
        'Cada varón judío mayor de veinte años pagaba una vez al año medio siclo para el templo, según Éxodo 30:13. Se pagaba en moneda de Tiro, por la pureza de su plata. Cuando los cobradores preguntaron a Pedro si su Maestro pagaba «las dos dracmas», Jesús le explicó que los hijos del Rey están libres, pero pagó «para no ofenderles», con el estatero que Pedro halló en la boca de un pez (Mt 17:24-27).',
        ir('Ver Pesos, medidas, monedas y horas bíblicas: las monedas', R.medidas + '#monedas/1')
      ],
      pensar: 'Jesús llamó a un cobrador de impuestos que todos despreciaban, y Zaqueo cambió su manera de usar el dinero al encontrarse con él. ¿Qué muestra tu manera de ganar, gastar y dar el dinero sobre lo que Jesús ha hecho en tu vida?'
    },
    {
      id: 'soldados', n: 'Soldados, centuriones y la fortaleza Antonia', ref: 'Lucas 3:14; Lucas 7:1-10; Mateo 5:41; Mateo 27:27-32; Marcos 15:39; Hechos 21:31-40; Hechos 10:1-2', fecha: [6, 66],
      visual: [
        img('../imperio-romano/img/roma-centurion.webp', 'Un centurión romano con su casco de cresta transversal y su vara de vid', 'Un centurión, oficial al mando de unos ochenta soldados. Recreación.'),
        img('../hechos/img/hechos-gradas-antonia.webp', 'El apóstol Pablo, encadenado entre soldados romanos, habla con la mano levantada desde las gradas de la fortaleza Antonia a una multitud en el atrio del templo', 'Desde la fortaleza Antonia, los soldados vigilaban los atrios del templo (Hechos 21:31-40). Recreación.'),
        cita('Lucas 7:2-5', '@@lc/7/2-5')
      ],
      texto: [
        'En Judea no había legiones romanas. Las cuatro legiones de la región estaban en Siria, bajo el mando del gobernador de esa provincia. El prefecto de Judea contaba con tropas auxiliares, unos tres mil hombres reclutados en su mayoría entre los habitantes no judíos de Cesarea y de Sebaste, la antigua Samaria. Los judíos estaban exentos del servicio militar romano, y estos soldados, que conocían la región y no simpatizaban con los judíos, explican en parte la dureza con que trataron a Jesús.',
        { h: 'La fortaleza Antonia' },
        'Herodes había construido en la esquina noroeste del monte del templo una fortaleza a la que llamó Antonia, en honor de Marco Antonio. Desde sus torres, una cohorte de soldados vigilaba los atrios, sobre todo en las fiestas, cuando Jerusalén se llenaba de peregrinos. Por eso, cuando la multitud quiso matar a Pablo en el templo, el tribuno pudo bajar enseguida con sus soldados y llevarlo por las gradas a la fortaleza (Hch 21:31-35).',
        { h: 'Centuriones en los evangelios y en Hechos' },
        'El centurión era el oficial que mandaba una centuria, de unos ochenta soldados. Los que aparecen en el Nuevo Testamento suelen dejar buena impresión. En Capernaúm, un centurión, probablemente al servicio de Herodes Antipas, pidió a Jesús que sanara a su siervo; los ancianos judíos dijeron de él: «ama a nuestra nación, y nos edificó una sinagoga» (Lc 7:5). Jesús se maravilló de su fe. Al pie de la cruz, otro centurión exclamó: «Verdaderamente este hombre era Hijo de Dios» (Mr 15:39). Y Cornelio, en Cesarea, fue el primer gentil en recibir el Espíritu Santo con su casa (Hch 10).',
        { h: 'Una milla más' },
        'Un soldado romano podía obligar a un civil a cargar su equipaje durante una milla. Así obligaron a Simón de Cirene a llevar la cruz de Jesús (Mt 27:32). Jesús enseñó a sus discípulos a responder a esa imposición con generosidad: «a cualquiera que te obligue a llevar carga por una milla, ve con él dos» (Mt 5:41). Y cuando unos soldados preguntaron a Juan el Bautista qué debían hacer, les respondió: «No hagáis extorsión a nadie, ni calumniéis; y contentaos con vuestro salario» (Lc 3:14).',
        { ejercicio: {
          pregunta: '¿Por qué los ancianos judíos de Capernaúm intercedieron ante Jesús por un centurión?',
          opciones: [
            { t: 'Porque temían que el centurión los castigara si Jesús no lo ayudaba.', ok: false, por_que: 'El texto no habla de temor, sino de aprecio.' },
            { t: 'Porque el centurión amaba a la nación judía y les había construido una sinagoga.', ok: true, por_que: 'Así lo dicen ellos mismos ante Jesús (Lucas 7:4-5).' },
            { t: 'Porque el centurión se había hecho judío y estaba circuncidado.', ok: false, por_que: 'Seguía siendo gentil; él mismo dice que no es digno de que Jesús entre en su casa (Lucas 7:6).' }
          ],
          explicacion: 'Entre los soldados extranjeros también había hombres que temían a Dios; Jesús encontró en uno de ellos una fe que no había hallado en Israel (Lucas 7:9).'
        } }
      ],
      pensar: 'Jesús enseñó a responder a una exigencia injusta caminando la segunda milla. ¿Cómo puedes aplicar ese principio cuando alguien te exige más de lo que te corresponde?'
    },
    {
      id: 'agitadores', n: 'Agitadores y falsos mesías', ref: 'Hechos 5:34-39; Hechos 21:38; Lucas 23:18-19; Juan 6:15; Juan 18:36; Mateo 24:4-5, 23-26', fecha: [6, 66],
      visual: [
        img('mj-censo-galileos.webp', 'En la plaza de una aldea de Galilea en el año 6 d.C., un grupo de campesinos judíos con mantos sencillos se niega a inscribirse ante funcionarios romanos sentados tras una mesa con tablillas de censo; un hombre de barba oscura habla con el puño en alto, mientras soldados auxiliares con lanzas observan tensos', 'Muchos judíos rechazaron el censo romano del año 6 d.C.; Judas el galileo encabezó una rebelión (Hechos 5:37). Recreación con personas anónimas.'),
        tabla({
          titulo: 'Rebeldes y profetas del siglo I',
          cab: ['Quién', 'Cuándo', 'Qué hizo', 'Fuente'],
          filas: [
            ['Judas el galileo', '6 d.C.', 'Llama a rechazar el censo: solo Dios es Señor de Israel', 'Hechos 5:37; Josefo'],
            ['Barrabás', 'c. 30 d.C.', 'Preso por una sedición en la ciudad y por homicidio', 'Lucas 23:19'],
            ['Teudas', 'antes del 34 (Hechos) o c. 45 (Josefo)', 'Promete abrir el Jordán; muere con sus seguidores', 'Hechos 5:36; Josefo'],
            ['El egipcio', 'c. 55 d.C.', 'Reúne a miles en el monte de los Olivos; huye ante Félix', 'Hechos 21:38; Josefo'],
            ['Los sicarios', 'Desde c. 50 d.C.', 'Asesinan con puñales en medio de las multitudes', 'Hechos 21:38; Josefo']
          ]
        }),
        cita('Hechos 5:35-39', '@@hch/5/35-39')
      ],
      texto: [
        'Cuando el Sanedrín quiso matar a los apóstoles, Gamaliel recordó dos casos que todos conocían: Teudas, que «diciendo que era alguien» reunió a unos cuatrocientos hombres, y Judas el galileo, que «en los días del censo» arrastró a mucho pueblo. Los dos murieron y sus seguidores se dispersaron (Hch 5:36-37). El siglo I estuvo lleno de hombres así.',
        { h: 'Judas el galileo y la «cuarta filosofía»' },
        'En el año 6, cuando Quirinio hizo el censo para cobrar el tributo, Judas el galileo enseñó que pagar impuestos a Roma era aceptar a un señor distinto de Dios, y llamó a la rebelión. Josefo dice que fundó una cuarta escuela, además de fariseos, saduceos y esenios, que solo reconocía a Dios como rey. La rebelión fracasó, pero sus ideas siguieron vivas: dos de sus hijos fueron crucificados hacia el año 47, y un descendiente suyo encabezó a los rebeldes que tomaron Masada en el año 66.',
        { h: 'Profetas que prometían señales' },
        'Otros no tomaron las armas, sino que prometieron milagros. Josefo cuenta que un tal Teudas convenció a una multitud de seguirlo al Jordán, porque las aguas se abrirían ante él, y que un egipcio reunió a miles en el monte de los Olivos, prometiendo que los muros de Jerusalén caerían. Por eso el tribuno confundió a Pablo con «aquel egipcio que levantó una sedición» (Hch 21:38). Jesús había advertido: «se levantarán falsos Cristos, y falsos profetas, y harán grandes señales» (Mt 24:24).',
        { posturas: {
          titulo: '¿Un error de fechas en Hechos 5:36?',
          a: { n: 'Dos personas distintas', t: 'Josefo sitúa a un Teudas hacia el año 45, unos diez años después del discurso de Gamaliel. Teudas era un nombre común, y en tiempos de agitación hubo muchos cabecillas. Gamaliel se refiere a un Teudas anterior a Judas el galileo, que Josefo no menciona.' },
          b: { n: 'El error sería de Josefo', t: 'Otros piensan que Josefo, que escribió sesenta años después y comete otros errores de cronología, pudo confundir las fechas. Lucas, que investigó con cuidado (Lc 1:3), sitúa a Teudas antes que Judas.' },
          c: 'En ningún caso hay motivo para dudar de la exactitud de Lucas, que en muchos otros detalles ha sido confirmado por la historia y la arqueología.'
        } },
        { h: 'Jesús no fue uno más' },
        'Barrabás, el preso que la multitud prefirió, estaba en la cárcel «por sedición en la ciudad, y por un homicidio» (Lc 23:19). Los dos crucificados junto a Jesús son llamados con una palabra que también se usaba para los bandidos rebeldes. Jesús murió como si fuera uno de ellos, pero no lo era. Cuando la multitud quiso hacerlo rey por la fuerza, «volvió a retirarse al monte él solo» (Jn 6:15), y ante Pilato declaró: «Mi reino no es de este mundo» (Jn 18:36).'
      ],
      pensar: 'Gamaliel dijo que lo que es de los hombres se desvanece, pero lo que es de Dios no puede ser destruido. ¿Qué cosas de tu vida y de tu servicio dependen de tus fuerzas, y cuáles descansan en lo que Dios está haciendo?'
    }
  ];

  window.__MJ.poder = poder;
})();
