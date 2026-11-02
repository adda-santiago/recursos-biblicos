/* La dinastía de Herodes · ruta V. Agripa I y Agripa II (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA V. Agripa I y Agripa II ==================
  const agripas = [
    {
      id: 'agripa1', n: 'Agripa I: de la cárcel al trono', ref: 'Daniel 2:21; Lucas 1:52; Salmo 75:6-7', fecha: [-10, 41],
      visual: [
        img('hd-agripa-cadenas.webp', 'En el patio de un pretorio de Roma, en el año 37 d.C., Herodes Agripa, un hombre de unos cuarenta y siete años, con barba recortada y túnica de prisionero, recibe con asombro de manos de un oficial de la guardia del emperador una pesada cadena de oro, mientras un soldado le quita las cadenas de hierro de las muñecas', 'Calígula libera a Agripa de la cárcel y le regala una cadena de oro del mismo peso que la de hierro que había llevado, según Josefo. Recreación.'),
        pasos([
          { t: '37 d.C.: Calígula da a Agripa la antigua tetrarquía de Felipe, con el título de rey', fecha: 37, estado: { view: V.palestina, capas: ['hd-agripa1-37'], lugares: ['paneas', 'betsaida', 'abilinia', 'jerusalen'] } },
          { t: '40 d.C.: recibe también Galilea y Perea, tras el destierro de Antipas', fecha: 40, estado: { view: V.palestina, capas: ['hd-agripa1-40'], lugares: ['tiberias', 'paneas', 'maqueronte', 'jerusalen'] } },
          { t: '41 d.C.: Claudio le da Judea y Samaria: reina sobre todo el antiguo reino de su abuelo', fecha: 41, estado: { view: V.palestina, capas: ['mj-agripa'], lugares: ['jerusalen', 'cesarea', 'tiberias', 'paneas'] } }
        ]),
        tabla({
          titulo: 'Agripa I en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombre', 'Marco Julio Agripa; en Hechos, «el rey Herodes»'],
            ['Padres', 'Aristóbulo, hijo de Herodes y Mariamne, y Berenice, hija de Salomé'],
            ['Nació y murió', 'Hacia el 10 a.C.; murió en Cesarea en el 44 d.C.'],
            ['Se crió', 'En Roma, junto a Druso, hijo de Tiberio, y a Claudio, el futuro emperador'],
            ['Reinó', 'Del 37 al 44 d.C.; sobre todo el país desde el 41'],
            ['Esposa e hijos', 'Cipros; Agripa II, Berenice, Mariamne y Drusila']
          ]
        })
      ],
      texto: [
        'Agripa era hijo de Aristóbulo, uno de los hijos de Mariamne que Herodes mandó estrangular en el 7 a.C., cuando Agripa tenía unos tres años. Su abuelo lo envió a Roma, donde se crió en la casa imperial, como compañero de Druso, el hijo del emperador Tiberio, y de Claudio. Allí aprendió a vivir como un noble romano y a gastar como tal.',
        { h: 'Deudas, fracasos y una cárcel' },
        'Cuando Druso murió, en el 23 d.C., Agripa perdió su protección y quedó lleno de deudas. Volvió a su tierra pobre y desanimado. Su hermana Herodías convenció a Antipas de darle un cargo menor en Tiberíades, pero los dos cuñados se pelearon. Agripa pasó por Siria, pidió préstamos aquí y allá, huyó de sus acreedores y volvió a Roma en el 36.',
        'Allí se hizo amigo de Gayo, a quien llamamos Calígula, sobrino nieto de Tiberio. Un día, paseando en carro, Agripa le dijo que ojalá Tiberio muriera pronto para que Gayo fuera emperador. Un sirviente lo denunció, y Tiberio lo hizo encadenar. Estuvo seis meses preso.',
        { h: 'Una cadena de oro' },
        'En marzo del 37 murió Tiberio y Calígula fue emperador. Josefo cuenta que hizo sacar a Agripa de la cárcel, le puso una diadema y le dio una cadena de oro del mismo peso que la cadena de hierro que había llevado. Le dio la antigua tetrarquía de Felipe con el título de rey; en el 40, las tierras de Antipas. Y cuando en el 41 asesinaron a Calígula, Agripa ayudó a Claudio, su amigo de infancia, a ser aceptado como emperador, y Claudio le dio Judea y Samaria. En cuatro años, el deudor encarcelado había llegado a reinar sobre todo lo que había sido de su abuelo.',
        { h: 'La estatua en el templo' },
        'Agripa hizo algo que los judíos nunca olvidaron. En el 40, Calígula, que se creía dios, ordenó poner una estatua suya en el templo de Jerusalén. El país estuvo a punto de levantarse en armas. Según Josefo y Filón, Agripa intercedió personalmente ante el emperador y logró que suspendiera la orden. Poco después Calígula fue asesinado.',
        'La historia de Agripa parece la de un hombre con suerte. La Biblia enseña a verla de otra manera: Dios «quita reyes, y pone reyes» (Dn 2:21). Pero el que recibe tanto, también responderá por lo que hace con ello.',
        arbol('Ver a Agripa I en el árbol', 'agripa1')
      ],
      pensar: 'Agripa pasó de la cárcel al trono en un día. ¿Cómo usas tú las puertas que Dios te abre: para tu propia gloria o para la de él?'
    },
    {
      id: 'persecucion', n: 'Agripa I persigue a la iglesia', ref: 'Hechos 12:1-19; Mateo 20:22-23', fecha: 44,
      visual: [
        img('../hechos/img/hechos-pedro-carcel.webp', 'Un ángel despierta a Pedro, que duerme entre dos soldados encadenado en la cárcel de Jerusalén, mientras una luz llena la celda', 'Un ángel libra a Pedro de la cárcel de Agripa (Hechos 12:7). Recreación.'),
        cita('Hechos 12:1-11', '@@hch/12/1-11'),
        tabla({
          titulo: 'Un rey «muy judío»',
          cab: ['Lo que hizo Agripa I', 'Según'],
          filas: [
            ['Ofrecía sacrificios en el templo y vivía en Jerusalén', 'Josefo'],
            ['Colgó en el templo la cadena de oro que le dio Calígula', 'Josefo'],
            ['Comenzó un tercer muro al norte de Jerusalén, que Claudio le ordenó detener', 'Josefo'],
            ['Leyó la ley en la fiesta de los Tabernáculos y lloró al leer que el rey debía ser de entre sus hermanos (Dt 17:15); el pueblo gritó que él era su hermano', 'La Mishná, escrita hacia el 200 d.C.: un recuerdo que hay que tomar con cautela'],
            ['Mató a Jacobo y encarceló a Pedro para agradar a los líderes judíos', 'Hechos 12:1-3']
          ]
        }, 'El rey')
      ],
      texto: [
        'A diferencia de su abuelo, Agripa supo ganarse a los judíos. Por su sangre asmonea lo veían como uno de los suyos. Vivía con gusto en Jerusalén, cumplía las costumbres de la ley, ofrecía sacrificios y defendía los intereses de su pueblo ante Roma. Josefo lo describe como un rey generoso y piadoso. Pero un rey que vive del aplauso del pueblo puede llegar a hacer cualquier cosa para conservarlo.',
        { h: 'La muerte de Jacobo' },
        'Hechos 12 cuenta que, en esos años, «el rey Herodes echó mano a algunos de la iglesia para maltratarles. Y mató a espada a Jacobo, hermano de Juan» (Hch 12:1-2). Jacobo, uno de los tres más cercanos a Jesús, fue el primero de los doce en morir por su fe. Jesús le había dicho que bebería de su vaso (Mt 20:23).',
        '«Y viendo que esto había agradado a los judíos, procedió a prender también a Pedro» (Hch 12:3). Lucas muestra el motivo: no era convicción religiosa, sino popularidad. Agripa encarceló a Pedro durante la fiesta de los panes sin levadura, con cuatro grupos de cuatro soldados, y pensaba presentarlo al pueblo después de la Pascua, quizás para un juicio público como el de Jesús.',
        { h: 'La iglesia oraba' },
        'Frente al poder del rey, la iglesia solo tenía una arma: «la iglesia hacía sin cesar oración a Dios por él» (Hch 12:5). La noche antes del juicio, Pedro dormía entre dos soldados, sujeto con dos cadenas. Un ángel lo despertó, las cadenas cayeron, las puertas se abrieron, y Pedro llegó a la casa de María, la madre de Marcos, donde muchos estaban reunidos orando. Tanto oraban, y tan poco esperaban la respuesta, que cuando la muchacha Rode anunció que Pedro estaba en la puerta, le dijeron: «Estás loca» (Hch 12:15).',
        'Agripa buscó a Pedro, no lo halló y mandó ejecutar a los guardias. Después bajó a Cesarea.',
        ir('Ver en Hechos: capítulo 12, Herodes, Pedro y la oración', R.hechos + '#comentario/13'),
        ir('Ver en El mundo judío: Agripa I y la persecución', R.mundo + '#despues/3')
      ],
      pensar: 'Dios permitió la muerte de Jacobo y libró a Pedro; las dos cosas ocurrieron en el mismo capítulo, y la iglesia siguió orando. ¿Cómo te ayuda esto a orar con fe aun cuando no sabes cuál será la respuesta?'
    },
    {
      id: 'muerte1', n: 'La muerte de Agripa I en Cesarea', ref: 'Hechos 12:19-24; Isaías 42:8; Daniel 4:30-31', fecha: 44,
      visual: [
        img('hd-agripa-cesarea.webp', 'En el teatro de Cesarea junto al mar, al amanecer, el rey Agripa I, de pie en la tribuna con un manto tejido enteramente de plata que brilla con los primeros rayos del sol, habla a una multitud en las gradas que levanta las manos y lo aclama; delegados de Tiro y Sidón se inclinan ante él', 'Agripa I en el teatro de Cesarea, con su manto de plata, según Josefo; la multitud gritaba: «¡Voz de Dios, y no de hombre!» (Hechos 12:22). Recreación.'),
        tabla({
          titulo: 'Dos relatos de la misma muerte',
          cab: ['', 'Hechos 12:20-23', 'Josefo, Antigüedades XIX'],
          filas: [
            ['Lugar', 'Cesarea', 'Cesarea, en unos juegos en honor del emperador'],
            ['Ocasión', 'Recibe a los de Tiro y Sidón, que piden paz', 'El segundo día de los juegos, al amanecer'],
            ['Vestido', '«vestido de ropas reales»', 'Un manto hecho todo de plata, que brillaba al sol'],
            ['La aclamación', '«¡Voz de Dios, y no de hombre!»', 'Los aduladores lo llaman dios'],
            ['Su falta', '«no dio la gloria a Dios»', 'No reprendió a los aduladores ni rechazó la adulación'],
            ['Su muerte', 'Herido por un ángel; «expiró comido de gusanos»', 'Dolores de vientre violentos; muere a los cinco días, a los 54 años']
          ]
        }, 'Comparación'),
        cita('Hechos 12:20-24', '@@hch/12/20-24')
      ],
      texto: [
        'Pocos meses después, en el 44 d.C., Agripa murió en Cesarea. Su muerte la cuentan dos fuentes independientes: Lucas en Hechos 12 y Josefo en sus Antigüedades. Las dos coinciden en lo esencial, y cada una aporta detalles que la otra no tiene.',
        { h: 'Lo que cuenta Lucas' },
        'Agripa estaba enojado con las ciudades de Tiro y Sidón, que dependían de los alimentos de su reino. Sus delegados ganaron el favor de Blasto, el camarero del rey, y pidieron paz. «Y un día señalado, Herodes, vestido de ropas reales, se sentó en el tribunal y les arengó. Y el pueblo aclamaba gritando: ¡Voz de Dios, y no de hombre!» (Hch 12:21-22). Lucas da la causa de lo que siguió: «Al momento un ángel del Señor le hirió, por cuanto no dio la gloria a Dios; y expiró comido de gusanos» (Hch 12:23).',
        { h: 'Lo que cuenta Josefo' },
        'Josefo cuenta que Agripa celebraba en Cesarea unos juegos en honor del emperador. El segundo día entró al teatro al amanecer con un manto tejido enteramente de plata, que brillaba de manera asombrosa con los rayos del sol. Sus aduladores empezaron a gritar que era un dios, y le pedían que les fuera propicio. El rey no los reprendió. En ese momento le vino un dolor violento en el vientre; lo llevaron a su palacio y murió a los cinco días, a los cincuenta y cuatro años, en el séptimo año de su reinado.',
        { h: 'La gloria que pertenece a Dios' },
        'El historiador judío y el evangelista ven lo mismo desde dos lugares. Josefo, que admiraba a Agripa, cuenta los hechos. Lucas da su sentido: Dios no comparte su gloria con nadie (Is 42:8). Nabucodonosor había sido humillado cuando se atribuyó a sí mismo la grandeza de Babilonia (Dn 4:30-31). Agripa aceptó en silencio que lo llamaran dios.',
        'Lucas cierra con una frase que es un contraste: el rey que había matado a Jacobo y encarcelado a Pedro murió, «pero la palabra del Señor crecía y se multiplicaba» (Hch 12:24).'
      ],
      pensar: 'Agripa no reprendió a los que lo adulaban. ¿Cómo reaccionas cuando te alaban? ¿Hay algún reconocimiento que estés recibiendo para ti y que debieras devolver a Dios?'
    },
    {
      id: 'agripa2', n: 'Agripa II, el último rey de la familia', ref: 'Hechos 25:13; Hechos 26:3; Marcos 6:3; Gálatas 1:19', fecha: [44, 66],
      visual: [
        pasos([
          { t: '44 d.C.: muere Agripa I; su hijo tiene diecisiete años y Claudio devuelve todo el país a los procuradores romanos', fecha: 44, estado: { view: V.palestina, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea'] } },
          { t: 'Hacia el 50 d.C.: Agripa II recibe el pequeño reino de Calcis, en el Líbano, y el cuidado del templo', fecha: 50, estado: { view: V.norte, capas: ['mj-provincia'], lugares: ['calcis', 'damasco', 'paneas', 'jerusalen'] } },
          { t: '53 d.C.: cambia Calcis por la antigua tetrarquía de Felipe y Abilinia; Nerón le suma Tiberíades y Tariquea', fecha: 55, estado: { view: V.norte, capas: ['hd-agripa2'], lugares: ['paneas', 'abilinia', 'betsaida', 'tiberias', 'magdala', 'gamla'] } }
        ]),
        tabla({
          titulo: 'Agripa II en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombre', 'Marco Julio Agripa; en Hechos, «el rey Agripa»'],
            ['Nació', 'Hacia el 27 d.C., hijo de Agripa I'],
            ['Reinó', 'En Calcis desde el 50; en el noreste desde el 53, hasta su muerte, hacia el 92–100'],
            ['El templo', 'Por encargo de Roma, nombraba y destituía al sumo sacerdote y guardaba sus vestiduras'],
            ['Capital', 'Cesarea de Filipo, que rebautizó Neronías en honor de Nerón'],
            ['Su hermana', 'Berenice vivió muchos años a su lado (Hch 25:13)']
          ]
        })
      ],
      texto: [
        'Cuando murió Agripa I, su hijo del mismo nombre tenía diecisiete años y vivía en Roma, en la corte de Claudio. El emperador pensó que era demasiado joven para gobernar un país tan difícil, y todo el reino volvió a ser provincia romana, gobernada por procuradores. Agripa II nunca reinó sobre Judea.',
        { h: 'Un rey del norte con poder en el templo' },
        'Hacia el 50 d.C., al morir su tío Herodes de Calcis, Claudio le dio a Agripa II ese pequeño reino en el Líbano y, lo más importante, el cuidado del templo de Jerusalén: él nombraba y destituía al sumo sacerdote. En el 53 cambió Calcis por la antigua tetrarquía de Felipe, al noreste del mar de Galilea, y Nerón le agregó después algunas ciudades de Galilea y Perea. Rebautizó Cesarea de Filipo con el nombre de Neronías.',
        'Por eso, cuando el gobernador Festo tuvo que decidir qué hacer con Pablo, consultó a Agripa, y Pablo pudo decirle: «tú conoces todas las costumbres y cuestiones que hay entre los judíos» (Hch 26:3). Agripa era el experto judío de la corte romana.',
        { h: 'Jacobo, el hermano del Señor' },
        'Josefo cuenta un episodio que toca directamente a la iglesia. En el 62 d.C., entre la muerte del procurador Festo y la llegada del siguiente, el sumo sacerdote Anás, hijo del Anás de los evangelios, reunió al Sanedrín e hizo apedrear a Jacobo, a quien Josefo llama el hermano de Jesús, el llamado Cristo, junto con otros. Muchos judíos protestaron, y Agripa II destituyó a Anás después de solo tres meses en el cargo. Es el Jacobo que dirigía la iglesia de Jerusalén y escribió la carta de Santiago, uno de los hermanos de Jesús (Mr 6:3; Gá 1:19).',
        { h: 'Un rey entre dos mundos' },
        'Agripa II vivió entre dos mundos. Era judío, sabía de la ley y de los profetas, cuidaba el templo; al terminar las obras del templo en el 64 hizo pavimentar con piedra blanca las calles de Jerusalén para dar trabajo a los obreros. Pero era también un príncipe romano. Se construyó un comedor en su palacio desde el que podía mirar lo que se hacía en el templo, y los sacerdotes levantaron un muro para taparle la vista.',
        arbol('Ver a Agripa II en el árbol', 'agripa2')
      ],
      pensar: 'Agripa II conocía la ley, los profetas y las costumbres de su pueblo, pero eso no lo hizo creyente. ¿Qué diferencia hay entre saber mucho de la Biblia y rendirse a Cristo?'
    },
    {
      id: 'pablo', n: 'Pablo ante Agripa y Berenice', ref: 'Hechos 25:13-27; Hechos 26:1-32', fecha: [59, 60],
      visual: [
        img('../hechos/img/hechos-pablo-agripa.webp', 'Pablo encadenado se defiende ante el rey Agripa y Berenice, sentados con gran pompa en la sala de audiencias de Cesarea, junto al gobernador Festo', 'Pablo ante el rey Agripa y Berenice en Cesarea (Hechos 26). Recreación.'),
        cita('Hechos 26:24-32', '@@hch/26/24-32'),
        tabla({
          titulo: 'Cuatro generaciones frente a Jesús',
          cab: ['Generación', 'Quién', 'Qué hizo'],
          filas: [
            ['1', 'Herodes el Grande', 'Quiso matar al niño Jesús (Mt 2:16)'],
            ['2', 'Herodes Antipas', 'Mató a Juan y se burló de Jesús (Mr 6:27; Lc 23:11)'],
            ['3', 'Agripa I', 'Mató a Jacobo y encarceló a Pedro (Hch 12:2-4)'],
            ['4', 'Agripa II', 'Escuchó el evangelio y dijo: «Por poco me persuades a ser cristiano» (Hch 26:28)']
          ]
        }, 'Generaciones')
      ],
      texto: [
        'Hacia el año 59 o 60, Pablo llevaba dos años preso en Cesarea, en el palacio que había construido Herodes el Grande (Hch 23:35). El nuevo gobernador, Porcio Festo, no entendía de qué lo acusaban, y Pablo había apelado al emperador. Cuando Agripa II y su hermana Berenice llegaron a saludar a Festo, el gobernador les expuso el caso, y Agripa dijo: «Yo también quisiera oír a ese hombre» (Hch 25:22).',
        { h: 'Con mucha pompa' },
        'Al día siguiente, Agripa y Berenice entraron en la sala de audiencias «con mucha pompa», con los tribunos y los hombres principales de Cesarea (Hch 25:23). Por un lado, el bisnieto de Herodes el Grande con todo su esplendor; por otro, un preso encadenado. Pablo comenzó con respeto: se tenía por dichoso de defenderse delante de alguien que conocía bien las costumbres de los judíos (Hch 26:2-3).',
        'Pablo no se defendió con argumentos legales. Contó su vida: cómo había perseguido a los cristianos, cómo Jesús se le apareció en el camino a Damasco y lo envió a los gentiles, y cómo no había dicho nada fuera de lo que Moisés y los profetas anunciaron: que el Cristo había de padecer y resucitar (Hch 26:22-23). Festo lo interrumpió a gritos: «Estás loco, Pablo» (Hch 26:24). Pablo se volvió entonces al rey: «¿Crees, oh rey Agripa, a los profetas? Yo sé que crees» (Hch 26:27).',
        { h: '«Por poco»' },
        'Agripa respondió: «Por poco me persuades a ser cristiano» (Hch 26:28). La frase griega es difícil de traducir; algunos la entienden como una evasiva irónica: «¿En tan poco tiempo pretendes hacerme cristiano?». En cualquier caso, Agripa no dio el paso. Pablo le contestó que quisiera Dios que, por poco o por mucho, él y todos los presentes fueran como él, «excepto estas cadenas» (Hch 26:29).',
        'Agripa se levantó y terminó la audiencia, pero reconoció que Pablo era inocente: «Podía este hombre ser puesto en libertad, si no hubiera apelado a César» (Hch 26:32). Así, el último de los Herodes que aparece en la Biblia escuchó con claridad el evangelio que su bisabuelo había querido ahogar en Belén.',
        ir('Ver en Hechos: capítulo 26, ante el rey Agripa', R.hechos + '#comentario/27')
      ],
      pensar: 'Agripa estuvo «por poco» de creer. ¿Hay algo que te mantiene a ti, o a alguien que amas, «por poco» cerca de Cristo, pero sin entregarse?'
    },
    {
      id: 'fin', n: 'Agripa II en la guerra y el fin de la dinastía', ref: 'Lucas 19:41-44; Lucas 21:20-24; Daniel 2:44', fecha: [66, 100],
      visual: [
        img('hd-agripa2-discurso.webp', 'Desde lo alto de la terraza de un palacio de Jerusalén, en el año 66 d.C., el rey Agripa II, de unos cuarenta años, con manto púrpura, habla con gesto suplicante a una gran multitud agitada reunida en una plaza abajo; a su lado, de pie y visible para todos, su hermana Berenice; al fondo, el templo', 'Agripa II, con Berenice a su lado, ruega a los habitantes de Jerusalén que no se rebelen contra Roma (año 66). Recreación.'),
        pasos([
          { t: '66 d.C.: Agripa intenta detener la rebelión en Jerusalén; los rebeldes queman su palacio', fecha: 66, estado: { view: V.palestina, capas: ['mj-provincia', 'hd-agripa2'], lugares: ['jerusalen', 'cesarea', 'paneas'] } },
          { t: '67 d.C.: acompaña a Vespasiano en Galilea; es herido en el sitio de Gamla', fecha: 67, estado: { view: V.galilea, capas: ['mj-galilea-67', 'hd-agripa2'], lugares: ['tolemaida', 'jotapata', 'tiberias', 'magdala', 'gamla'], trazos: ['mj-vespasiano-67'] } },
          { t: '70 d.C.: Tito destruye Jerusalén y el templo que Herodes había construido', fecha: 70, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['cesarea', 'jerusalen'], trazos: ['mj-tito-70'] } },
          { t: 'Hacia el 92–100 d.C.: muere Agripa II sin hijos; su reino pasa a la provincia de Siria', fecha: 95, estado: { view: V.norte, capas: ['hd-agripa2'], lugares: ['paneas', 'tiberias', 'betsaida'] } }
        ]),
        cita('Lucas 19:41-44', '@@lc/19/41-44')
      ],
      texto: [
        'En el 66 d.C., los abusos del procurador Floro encendieron Jerusalén. Agripa II llegó de Alejandría, reunió al pueblo en una plaza junto a su palacio y, con Berenice a su lado, le rogó que no se levantara contra Roma. Josefo pone en su boca un largo discurso: les recordó que pueblos mucho más poderosos se habían sometido a Roma, y que una guerra terminaría con la destrucción de la ciudad y del templo. Al principio lo escucharon; después lo insultaron, le tiraron piedras y lo echaron de la ciudad. Los rebeldes quemaron su palacio y el de Berenice.',
        { h: 'Del lado de Roma' },
        'Agripa se puso entonces del lado de Roma. Sus tropas acompañaron a Vespasiano en Galilea, y él mismo fue herido por una piedra en el sitio de Gamla, una ciudad de su propio reino. En el 70, Tito, el hijo de Vespasiano, sitió Jerusalén. El templo que había construido su bisabuelo, y que Agripa había cuidado, fue incendiado y destruido. Se cumplieron las palabras de Jesús: «no dejarán en ti piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación» (Lc 19:44).',
        ir('Ver en El mundo judío: la gran rebelión y la caída del templo', R.mundo + '#despues/4'),
        { h: 'El fin de la dinastía' },
        'Después de la guerra, Roma premió la lealtad de Agripa con más territorio. Vivió en Roma con honores y mantuvo correspondencia con Josefo, que le leía su historia de la guerra; Josefo conservó dos de sus cartas. Murió hacia el 92 o el 100 d.C., según distintas fuentes, sin hijos. Su reino fue incorporado a la provincia de Siria. Con él terminó la dinastía que había fundado su bisabuelo ciento treinta años antes.',
        'Cuando Agripa murió, la palabra que había escuchado de Pablo ya se había extendido por todo el imperio: había iglesias en Antioquía, en Asia, en Grecia, en Roma. La familia que había intentado matar al niño de Belén, que había decapitado a su precursor, que se había burlado de él y que había matado a su apóstol, desapareció de la historia. El reino que Dios había anunciado por Daniel «no será jamás destruido» (Dn 2:44).'
      ],
      pensar: 'Agripa II vio caer el templo y terminar su familia, mientras la iglesia crecía. ¿Qué te enseña esta historia sobre lo que permanece y lo que pasa?'
    }
  ];

  window.__HD.agripas = agripas;
})();
