/* ==========================================================
   Recursos Bíblicos — Los viajes de Pablo · contenido de las rutas
   Motor: ../assets/js/ruta-estudio.js (formato descrito en su encabezado).
   Geografía: ../assets/js/imperios-geo.js (trazos viaje-1, viaje-2, viaje-3, viaje-roma,
   pablo-antes, pablo-antioquia, pablo-despues; capas iglesia-30 a iglesia-62).
   Citas textuales: Reina-Valera 1960. Recurso general: lo usan Hechos y las cartas de Pablo.
   Fechas aproximadas; rutas de los viajes aproximadas.
   ========================================================== */
(() => {
  const H = '../hechos/img/';
  const OTRA = '../';
  const LEVANTE = [[29.5, 31.5], [37.8, 38.8]];
  const ASIA_MENOR = [[34.2, 29.0], [39.6, 37.2]];
  const EGEO = [[33.5, 20.0], [42.2, 37.0]];
  const MEDITERRANEO = [[28, -2], [46, 40]];
  const ORIENTE = [[30.5, 18.5], [42.5, 38.5]];
  const OCCIDENTE = [[33, 10], [43.5, 30]];

  /* ---------------- Ruta 1 · El recorrido completo ---------------- */
  const recorrido = [
    {
      id: 'tarso-jerusalen', n: 'Tarso y Jerusalén: la formación', ref: 'Hechos 21:39; 22:3; 26:4-5; Filipenses 3:5-6', fecha: [5, 33],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: LEVANTE, capas: ['roma-14'], lugares: ['tarso', 'antioquia', 'damasco', 'jerusalen'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/vp-gamaliel.webp', alt: 'Un joven Saulo, sentado en el suelo junto a otros estudiantes, escucha a Gamaliel, un maestro fariseo anciano que enseña con un rollo abierto en un atrio de Jerusalén', pie: '«Instruido a los pies de Gamaliel» (Hch 22:3).', origen: 'ia' }
      ],
      texto: [
        'Antes de recorrer miles de kilómetros llevando el evangelio, Pablo vivió en dos mundos que lo prepararon para su misión. Esta ruta lo sigue desde su ciudad natal hasta Roma, con un mapa en cada estación.',
        { h: 'Tarso, una ciudad griega' },
        'Pablo nació en Tarso, capital de la provincia de Cilicia, en el sureste de la actual Turquía. Él mismo la describió como «una ciudad no insignificante» (Hch 21:39). Era un centro de comercio, junto al río Cidno y sobre el camino que unía Siria con Asia Menor, y tenía fama por sus escuelas de filosofía. Allí Pablo creció oyendo griego en las calles y conociendo la cultura de los gentiles. Allí aprendió también un oficio, hacer tiendas de pelo de cabra o de cuero, que le permitiría sostenerse en sus viajes (Hch 18:3).',
        'Su familia tenía la ciudadanía romana, algo poco común entre los judíos de provincia. Pablo la tenía de nacimiento (Hch 22:28), y le sería útil más de una vez.',
        { h: 'Jerusalén, una formación judía' },
        'Pero Pablo no era un judío asimilado a la cultura griega. Era «hebreo de hebreos», de la tribu de Benjamín, y en cuanto a la ley, fariseo (Fil 3:5). Siendo joven fue enviado a Jerusalén, donde se formó «a los pies de Gamaliel, estrictamente conforme a la ley de nuestros padres» (Hch 22:3). Gamaliel era uno de los maestros más respetados de su tiempo, el mismo que aconsejó prudencia al sanedrín ante los apóstoles (Hch 5:34-39).',
        'Pablo llegó a destacar entre los de su edad por su celo por las tradiciones de sus padres (Gá 1:14). Ese celo lo llevó a perseguir a la iglesia.',
        'Sin saberlo, Pablo estaba siendo preparado. Conocía las Escrituras como un rabino, hablaba griego como un ciudadano del imperio y tenía los derechos de un romano. Después diría que Dios lo había apartado «desde el vientre de mi madre» (Gá 1:15).'
      ],
      pensar: 'Dios preparó a Pablo con una formación judía, una cultura griega y una ciudadanía romana antes de llamarlo (Gá 1:15). ¿Qué partes de tu historia, aun las de antes de conocer a Cristo, podría usar Dios en tu servicio?'
    },
    {
      id: 'damasco-arabia', n: 'Damasco, Arabia y los años de silencio', ref: 'Hechos 9:1-30; Gálatas 1:15-24; 2 Corintios 11:32-33', fecha: [34, 45],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Camino a Damasco: el encuentro con Cristo (Hch 9:1-19).', fecha: 34,
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-36'], lugares: ['jerusalen', 'damasco'], trazos: ['hch-damasco'] } },
          { t: 'Arabia, Damasco otra vez, Jerusalén y Tarso (Gá 1:17-21; Hch 9:30).', fecha: [34, 37],
            estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-37'], lugares: ['jerusalen', 'damasco', 'petra', 'cesarea', 'tarso'], trazos: ['pablo-antes'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/vp-canasta.webp', alt: 'De noche, unos discípulos bajan a Saulo en un gran canasto de mimbre por una ventana del muro de Damasco, mientras guardias vigilan las puertas a lo lejos', pie: '«Fui descolgado del muro en un canasto» (2 Co 11:33).', origen: 'ia' }
      ],
      texto: [
        'El perseguidor iba camino a Damasco con cartas del sumo sacerdote para traer presos a los creyentes. Cerca de la ciudad, Jesús resucitado se le apareció, y Saulo se convirtió en su siervo. Tres días después fue lleno del Espíritu Santo por medio de Ananías, y en seguida comenzó a predicar en las sinagogas que Jesús era el Hijo de Dios (Hch 9:17-20).',
        { h: 'Lo que cuenta Gálatas' },
        'Hechos resume en pocos versículos lo que ocurrió después, pero Pablo da más detalles en la carta a los Gálatas. No fue a Jerusalén a consultar a los apóstoles, «sino que fui a Arabia, y volví de nuevo a Damasco» (Gá 1:17). Arabia era el reino de los nabateos, al sur y al este de Damasco, cuya capital era Petra. No sabemos qué hizo allí; muchos piensan que fue un tiempo de reflexión y de preparación, y otros, que ya predicaba.',
        'Al volver a Damasco, el gobernador del rey Aretas, el rey nabateo, vigilaba la ciudad para prenderlo, y los discípulos lo bajaron de noche por una ventana del muro en un canasto (2 Co 11:32-33; Hch 9:25). El hombre que había llegado a Damasco con autoridad para encarcelar salió de ella escondido en un canasto.',
        { h: 'Jerusalén y Tarso' },
        '«Después, pasados tres años, subí a Jerusalén para ver a Pedro, y permanecí con él quince días» (Gá 1:18). Bernabé lo presentó a los apóstoles, que le tenían miedo (Hch 9:27). Cuando los judíos helenistas intentaron matarlo, los hermanos lo llevaron a Cesarea y lo enviaron a Tarso (Hch 9:30).',
        'Siguen varios años de los que Hechos no dice nada. Pablo solo escribe: «Después fui a las regiones de Siria y de Cilicia» (Gá 1:21). Las iglesias de Judea oían decir que el que antes los perseguía ahora predicaba la fe, «y glorificaban a Dios en mí» (Gá 1:24). Fueron años sin fama, pero no sin fruto: más tarde hay iglesias en Siria y Cilicia (Hch 15:23, 41).'
      ],
      pensar: 'Pablo pasó años en Arabia, Tarso y Cilicia antes de que Dios lo enviara en sus grandes viajes (Gá 1:17-21). ¿Qué te enseña esto sobre los tiempos de preparación que Dios permite antes de un ministerio más visible?'
    },
    {
      id: 'antioquia', n: 'Antioquía: la base misionera', ref: 'Hechos 11:19-30; 12:25; 13:1-3', fecha: [43, 46],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-44'], lugares: ['tarso', 'antioquia', 'seleucia', 'jerusalen', 'r-siria'], trazos: ['pablo-antioquia'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: H + 'hechos-antioquia-envio.webp', alt: 'Profetas y maestros de la iglesia de Antioquía imponen las manos sobre Pablo y Bernabé, arrodillados', pie: '«Apartadme a Bernabé y a Saulo» (Hch 13:2).', origen: 'ia' }
      ],
      texto: [
        'La historia de los viajes misioneros comienza en Antioquía de Siria, la tercera ciudad del imperio, a orillas del río Orontes. Allí, creyentes de Chipre y de Cirene habían hablado del Señor Jesús a los griegos, y gran número creyó. La iglesia de Jerusalén envió a Bernabé, que vio la gracia de Dios y se regocijó.',
        { h: 'Bernabé busca a Saulo' },
        'Bernabé comprendió que la obra lo superaba. «Después fue Bernabé a Tarso para buscar a Saulo; y hallándole, le trajo a Antioquía» (Hch 11:25-26). Durante un año enseñaron juntos a mucha gente, y allí los discípulos fueron llamados cristianos por primera vez. Para Saulo, después de los años en Tarso, fue el comienzo de un ministerio en equipo.',
        'Cuando el profeta Agabo anunció una gran hambre, la iglesia de Antioquía envió una ayuda a los hermanos de Judea por medio de Bernabé y Saulo (Hch 11:27-30). Muchos estudiosos identifican esta visita con la que Pablo menciona en Gálatas 2, «pasados catorce años», cuando expuso en privado a los líderes de Jerusalén el evangelio que predicaba entre los gentiles. Otros la identifican con el concilio de Hechos 15. Al regresar, llevaron consigo a Juan Marcos (Hch 12:25).',
        { h: 'Enviados por el Espíritu' },
        'En la iglesia de Antioquía había profetas y maestros: Bernabé, Simón el que se llamaba Niger, Lucio de Cirene, Manaén y Saulo. Mientras ministraban al Señor y ayunaban, el Espíritu Santo dijo: «Apartadme a Bernabé y a Saulo para la obra a que los he llamado» (Hch 13:2). Después de ayunar y orar, les impusieron las manos y los despidieron.',
        'Desde entonces, Antioquía fue la base de Pablo. De allí partieron los tres viajes, y a ella regresó al final del primero y del segundo para dar cuenta de lo que Dios había hecho. Una iglesia nacida del testimonio de creyentes anónimos se convirtió en el centro misionero de la iglesia primitiva.',
        'Usa el mapa para ver el camino de Tarso a Antioquía y la visita a Jerusalén con la ayuda para los hermanos.'
      ],
      pensar: 'Los viajes de Pablo comenzaron en una iglesia que ministraba al Señor, ayunaba y escuchaba al Espíritu (Hch 13:2-3). ¿Qué tendría que cambiar en tu congregación para ser una iglesia que envía?'
    },
    {
      id: 'viaje-1', n: 'Primer viaje: Chipre y Galacia', ref: 'Hechos 13:4–14:28', fecha: [46, 48],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'De Seleucia a Chipre: Salamina y Pafos (Hch 13:4-12).', fecha: 46,
            estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-44'], lugares: ['antioquia', 'seleucia', 'salamina-chipre', 'pafos'], trazos: ['viaje-1'] } },
          { t: 'Perge y Antioquía de Pisidia (Hch 13:13-52).', fecha: 47,
            estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-44'], lugares: ['pafos', 'perge', 'antioquia-pisidia', 'r-galacia'], trazos: ['viaje-1'] } },
          { t: 'Iconio, Listra y Derbe, y el regreso confirmando las iglesias (Hch 14).', fecha: 48,
            estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia-pisidia', 'iconio', 'listra', 'derbe', 'atalia', 'antioquia'], trazos: ['viaje-1'] } }
        ] }
      ],
      texto: [
        'El primer viaje duró unos dos años y recorrió unos dos mil kilómetros, por mar y por tierra. Bernabé y Saulo llevaron como ayudante a Juan Marcos.',
        { h: 'Chipre' },
        'Desde Seleucia, el puerto de Antioquía, navegaron a Chipre, la isla de Bernabé. Desembarcaron en Salamina y la recorrieron hasta Pafos, la capital romana, predicando en las sinagogas. En Pafos, el procónsul Sergio Paulo creyó después de que Pablo, lleno del Espíritu Santo, reprendiera al mago Elimas. Desde aquí Lucas lo llama Pablo, y el equipo pasa a ser «Pablo y sus compañeros» (Hch 13:13).',
        { h: 'Galacia del sur' },
        'De Pafos navegaron a Perge, en la costa de Panfilia. Allí Juan Marcos los dejó y volvió a Jerusalén. Pablo y Bernabé subieron a la meseta por los montes Tauro, un camino difícil y peligroso, hasta Antioquía de Pisidia, una colonia romana a más de mil metros de altura. Pablo escribió después a los gálatas que les anunció el evangelio «a causa de una enfermedad del cuerpo» (Gá 4:13); no sabemos cuál fue.',
        'En Antioquía de Pisidia predicó en la sinagoga y, ante el rechazo de los judíos, se volvió a los gentiles. Siguieron a Iconio, donde el Señor confirmaba la palabra con señales; a Listra, donde Pablo sanó a un cojo de nacimiento y luego fue apedreado, y a Derbe, donde hicieron muchos discípulos.',
        { h: 'El regreso' },
        'Podían haber regresado a Tarso por un camino corto desde Derbe. En cambio, volvieron por las mismas ciudades donde habían sido perseguidos, confirmando a los discípulos y constituyendo ancianos en cada iglesia (Hch 14:21-23). Bajaron a Perge, predicaron allí, y desde el puerto de Atalia navegaron a Antioquía.',
        'Reunieron a la iglesia y contaron «cuán grandes cosas había hecho Dios con ellos, y cómo había abierto la puerta de la fe a los gentiles» (Hch 14:27). A esas iglesias de Galacia escribiría Pablo, según muchos, su carta a los Gálatas.'
      ],
      pensar: 'Pablo y Bernabé volvieron por las ciudades donde los habían perseguido para fortalecer a los nuevos creyentes (Hch 14:21-22). ¿Qué estás dispuesto a arriesgar por el bien espiritual de otros?'
    },
    {
      id: 'concilio', n: 'El concilio de Jerusalén', ref: 'Hechos 15:1-35; Gálatas 2:1-10', fecha: 49,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: LEVANTE, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'tiro', 'samaria', 'jerusalen', 'r-siria'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: H + 'hechos-concilio.webp', alt: 'Jacobo habla de pie ante los apóstoles y ancianos reunidos en Jerusalén; Pedro, Pablo y Bernabé escuchan', pie: 'El concilio de Jerusalén (Hch 15).', origen: 'ia' }
      ],
      texto: [
        'Entre el primer y el segundo viaje ocurrió el acontecimiento que definió el futuro de la misión de Pablo. Unos hombres llegados de Judea enseñaban en Antioquía que los gentiles debían circuncidarse para ser salvos. Si tenían razón, todo lo que Pablo había hecho en Galacia estaba equivocado.',
        { h: 'De Antioquía a Jerusalén' },
        'La iglesia de Antioquía envió a Pablo y a Bernabé a Jerusalén. En el camino, al pasar por Fenicia y Samaria, contaban la conversión de los gentiles, «y causaban gran gozo a todos los hermanos» (Hch 15:3). En Jerusalén fueron recibidos por la iglesia, los apóstoles y los ancianos.',
        'Después de una larga discusión, Pedro recordó que Dios había dado el Espíritu Santo a los gentiles igual que a los judíos, y que todos son salvos por la gracia del Señor Jesús. Pablo y Bernabé contaron las señales que Dios había hecho entre los gentiles. Jacobo citó al profeta Amós y propuso no imponerles la ley, sino pedirles que evitaran algunas prácticas que impedirían la comunión con los creyentes judíos.',
        { h: 'Lo que cuenta Pablo' },
        'En Gálatas 2, Pablo narra una reunión en la que los líderes de Jerusalén, Jacobo, Cefas y Juan, «que eran considerados como columnas», le dieron a él y a Bernabé «la diestra en señal de compañerismo, para que nosotros fuésemos a los gentiles, y ellos a la circuncisión» (Gá 2:9). Lo acompañaba Tito, un griego, y no fue obligado a circuncidarse.',
        { posturas: {
          titulo: '¿Gálatas 2 es el concilio de Hechos 15?',
          a: { n: 'Es el concilio', t: 'Gálatas 2 describe la misma reunión de Hechos 15, vista desde la experiencia personal de Pablo: los mismos protagonistas, el mismo tema y la misma conclusión.' },
          b: { n: 'Es una visita anterior', t: 'Gálatas 2 describe la visita de Hechos 11:30, cuando Pablo llevó la ayuda por el hambre. Por eso Pablo no menciona en Gálatas la carta del concilio, que habría zanjado la discusión con los gálatas.' },
          c: 'Las dos posturas son defendidas por estudiosos que creen en la autoridad de la Escritura. Si Gálatas 2 es la visita de Hechos 11, la carta a los Gálatas se escribió antes del concilio y sería la primera carta de Pablo. La ruta Las cartas en su contexto lo explica.'
        } },
        'La carta del concilio fue llevada a Antioquía por Pablo, Bernabé, Judas y Silas. La puerta que Dios había abierto a los gentiles quedaba confirmada.'
      ],
      pensar: 'En el camino a Jerusalén, Pablo y Bernabé llenaban de gozo a las iglesias contando cómo Dios salvaba a los gentiles (Hch 15:3). ¿Qué historias de la obra de Dios podrías contar para animar a otros creyentes?'
    },
    {
      id: 'viaje-2', n: 'Segundo viaje: el evangelio entra en Europa', ref: 'Hechos 15:36–18:22', fecha: [49, 52],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Por Siria y Cilicia hasta Derbe y Listra, donde se une Timoteo (Hch 15:41–16:5).', fecha: 49,
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'tarso', 'derbe', 'listra', 'iconio'], trazos: ['viaje-2'] } },
          { t: 'Asia y Bitinia cerradas; la visión en Troas (Hch 16:6-10).', fecha: 49,
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia-pisidia', 'r-galacia', 'r-asia', 'r-bitinia', 'troas'], trazos: ['viaje-2'] } },
          { t: 'Macedonia: Filipos, Tesalónica y Berea (Hch 16:11–17:15).', fecha: 50,
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-48'], lugares: ['troas', 'samotracia', 'neapolis', 'filipos', 'anfipolis', 'tesalonica', 'berea'], trazos: ['viaje-2'] } },
          { t: 'Acaya: Atenas y Corinto; regreso por Éfeso, Cesarea y Jerusalén (Hch 17:16–18:22).', fecha: [51, 52],
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['atenas', 'corinto', 'efeso', 'cesarea', 'jerusalen', 'antioquia'], trazos: ['viaje-2'] } }
        ] }
      ],
      texto: [
        'El segundo viaje es el más largo en distancia: unos cinco mil kilómetros en tres años. Comenzó con una separación: Bernabé quería llevar a Juan Marcos, Pablo no, y se separaron. Pablo eligió a Silas, profeta de la iglesia de Jerusalén y ciudadano romano, y salieron por tierra.',
        { h: 'Galacia y la visión de Troas' },
        'Recorrieron Siria y Cilicia confirmando las iglesias, y en Listra se les unió Timoteo. Su plan era seguir hacia el oeste, a la provincia de Asia, pero el Espíritu Santo se lo impidió; quisieron ir al norte, a Bitinia, y el Espíritu no se lo permitió (Hch 16:6-7). Llegaron a Troas, junto al mar Egeo, y allí Pablo vio en visión a un varón macedonio que le rogaba que pasara a ayudarles. Aquí se une Lucas, y el relato pasa a «nosotros».',
        { h: 'Macedonia' },
        'En dos días de navegación, pasando por la isla de Samotracia, llegaron a Neápolis, y de allí por la vía Egnatia a Filipos, colonia romana. Nació la primera iglesia de Europa, en casa de Lidia, pero Pablo y Silas fueron azotados y encarcelados. Siguieron por la misma calzada a Tesalónica, la capital de la provincia, donde en pocas semanas se formó una iglesia y estalló un alboroto. De noche partieron a Berea, cuyos judíos escudriñaban las Escrituras.',
        { h: 'Acaya' },
        'Pablo siguió solo a Atenas, la ciudad de los filósofos, donde predicó en el Areópago. Desde allí escribió que, no pudiendo soportarlo más, envió a Timoteo a Tesalónica para confirmar a los creyentes (1 Ts 3:1-2). Luego fue a Corinto, donde se quedó año y medio con Aquila y Priscila. Desde Corinto escribió las cartas a los Tesalonicenses.',
        'Al regresar, pasó por Éfeso, dejó allí a Aquila y Priscila y prometió volver «si Dios quiere» (Hch 18:21). Desembarcó en Cesarea, subió a saludar a la iglesia de Jerusalén y descendió a Antioquía.'
      ],
      pensar: 'Pablo quería ir a Asia y a Bitinia, pero el Espíritu le cerró esas puertas y lo llevó a Europa (Hch 16:6-10). ¿Cómo respondes cuando Dios cambia tus planes?'
    },
    {
      id: 'viaje-3', n: 'Tercer viaje: Éfeso y la ofrenda', ref: 'Hechos 18:23–21:16; Romanos 15:19-26; 2 Corintios 2:12-13; 7:5-6', fecha: [53, 57],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Por Galacia y Frigia hasta Éfeso: casi tres años (Hch 18:23–19:41).', fecha: [53, 56],
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'derbe', 'iconio', 'antioquia-pisidia', 'efeso', 'colosas', 'laodicea'], trazos: ['viaje-3'] } },
          { t: 'Troas, Macedonia, Ilírico y Corinto (Hch 20:1-3; 2 Co 2:12-13; Ro 15:19).', fecha: [56, 57],
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'troas', 'filipos', 'tesalonica', 'berea', 'iliria', 'corinto'], trazos: ['viaje-3'] } },
          { t: 'El regreso a Jerusalén con la ofrenda: Troas, Mileto, Tiro y Cesarea (Hch 20:4–21:16).', fecha: 57,
            estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['filipos', 'troas', 'mitilene', 'mileto', 'cos', 'rodas', 'patara', 'tiro', 'cesarea', 'jerusalen'], trazos: ['viaje-3'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: H + 'hechos-mileto.webp', alt: 'En la playa de Mileto, Pablo ora de rodillas con los ancianos de Éfeso', pie: 'La despedida en Mileto (Hch 20:36-38).', origen: 'ia' }
      ],
      texto: [
        'El tercer viaje tuvo un centro: Éfeso, la capital de la provincia de Asia, la puerta que el Espíritu le había cerrado en el viaje anterior y que ahora se abría de par en par.',
        { h: 'Casi tres años en Éfeso' },
        'Pablo enseñó tres meses en la sinagoga y dos años en la escuela de Tiranno, de modo que toda la provincia oyó la palabra. Escribió desde allí a los corintios: «se me ha abierto puerta grande y eficaz, y muchos son los adversarios» (1 Co 16:9). Los adversarios eran reales: en 1 Corintios habla de haber batallado «en Efeso contra fieras» (1 Co 15:32), y en 2 Corintios de una tribulación en Asia tan grave que perdió la esperanza de conservar la vida (2 Co 1:8). El viaje en Éfeso terminó con el alboroto de los plateros en el teatro.',
        'Desde Éfeso se fundaron otras iglesias de la provincia, como Colosas, Laodicea y Hierápolis, por medio de colaboradores como Epafras (Col 1:7; 4:13).',
        { h: 'Macedonia, Ilírico y Corinto' },
        'Pablo pasó a Troas esperando a Tito, que traía noticias de Corinto. Aunque se le abrió puerta para predicar, no tuvo reposo en su espíritu, y siguió a Macedonia (2 Co 2:12-13). Allí Tito lo alcanzó con buenas noticias, y Pablo escribió 2 Corintios. En algún momento de estos meses llegó hasta Ilírico, en la costa del Adriático (Ro 15:19). Luego pasó tres meses en Grecia, probablemente en Corinto, donde escribió Romanos.',
        { h: 'La ofrenda para Jerusalén' },
        'Durante todo el viaje, Pablo reunió una ofrenda de las iglesias de Macedonia, Acaya y Galacia para los santos pobres de Jerusalén (Ro 15:25-26; 1 Co 16:1-3). Era una expresión de amor y de unidad entre gentiles y judíos. Representantes de varias iglesias viajaron con él para llevarla (Hch 20:4).',
        'El regreso fue una despedida: en Troas, la reunión hasta el alba y la resurrección de Eutico; en Mileto, el discurso a los ancianos de Éfeso; en Tiro y en Cesarea, las advertencias de los profetas. Pablo subió a Jerusalén dispuesto a morir por el nombre del Señor Jesús.'
      ],
      pensar: 'Pablo escribió que en Éfeso se le había abierto «puerta grande y eficaz, y muchos son los adversarios» (1 Co 16:9). ¿Por qué crees que las grandes oportunidades suelen venir acompañadas de oposición?'
    },
    {
      id: 'jerusalen-cesarea', n: 'Arresto en Jerusalén y prisión en Cesarea', ref: 'Hechos 21:17–26:32', fecha: [57, 59],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[30.9, 33.9], [33.0, 36.4]], capas: ['roma-14', 'iglesia-57'], lugares: ['jerusalen', 'cesarea', 'samaria', 'jope'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: H + 'hechos-gradas-antonia.webp', alt: 'Pablo, encadenado entre soldados, habla al pueblo desde las gradas de la fortaleza Antonia', pie: 'Pablo habla al pueblo desde las gradas (Hch 22).', origen: 'ia' }
      ],
      texto: [
        'Pablo llegó a Jerusalén hacia el año 57, para la fiesta de Pentecostés. Fue el comienzo de cinco años de prisión, la parte más larga de su vida que narra Hechos.',
        { h: 'Jerusalén: el arresto' },
        'Jacobo y los ancianos lo recibieron con gozo y le propusieron un gesto de buena voluntad hacia los judíos creyentes: purificarse en el templo con cuatro hombres que tenían un voto. Pero unos judíos de Asia lo reconocieron y alborotaron a la multitud, acusándolo de haber metido griegos en el templo. Pablo habría muerto a manos de la turba si el tribuno romano no lo hubiera rescatado. Desde las gradas de la fortaleza Antonia contó su testimonio al pueblo, y al día siguiente fue llevado ante el sanedrín.',
        'Esa noche, el Señor se le presentó: «Ten ánimo, Pablo, pues como has testificado de mí en Jerusalén, así es necesario que testifiques también en Roma» (Hch 23:11). Cuando se descubrió un plan de más de cuarenta judíos para matarlo, el tribuno lo envió de noche, con una gran escolta, a Cesarea, por Antípatris.',
        { h: 'Cesarea: dos años de espera' },
        'Cesarea Marítima era la capital romana de Judea, una ciudad construida por Herodes el Grande con un puerto artificial. Allí Pablo estuvo preso dos años en el pretorio de Herodes (Hch 23:35; 24:27). Se defendió ante el gobernador Félix, que lo dejó preso esperando un soborno, y ante su sucesor, Festo. Cuando Festo propuso juzgarlo en Jerusalén, Pablo apeló al César. Antes de enviarlo, Festo lo presentó al rey Agripa II, ante quien Pablo dio su defensa más completa.',
        'Algunos estudiosos piensan que Lucas aprovechó estos dos años para reunir información en Judea, entrevistando a testigos de la vida de Jesús y de los comienzos de la iglesia, para su Evangelio y para Hechos (Lc 1:1-3). Es una posibilidad razonable, aunque el texto no lo dice.',
        'Pablo, el viajero incansable, pasó dos años sin moverse de una ciudad. Pero el Señor le había prometido Roma, y la apelación al César fue el camino.'
      ],
      pensar: 'Pablo pasó dos años preso en Cesarea esperando, sin poder viajar ni fundar iglesias (Hch 24:27). ¿Cómo puede un creyente permanecer fiel y útil en los tiempos en que parece que nada avanza?'
    },
    {
      id: 'roma', n: 'El viaje a Roma', ref: 'Hechos 27:1–28:31', fecha: [59, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'De Cesarea a Mira, y a Buenos Puertos en Creta (Hch 27:1-12).', fecha: 59,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-57'], lugares: ['cesarea', 'sidon', 'mira', 'creta'], trazos: ['viaje-roma'] } },
          { t: 'La tempestad: catorce días a la deriva hasta Malta (Hch 27:13-44).', fecha: 59,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-57'], lugares: ['creta', 'malta'], trazos: ['viaje-roma'] } },
          { t: 'De Malta a Siracusa, Puteoli y Roma (Hch 28:11-16).', fecha: 60,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: ['malta', 'siracusa', 'puteoli', 'roma'], trazos: ['viaje-roma'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-naufragio.webp', alt: 'Un barco romano naufraga en medio de una tormenta junto a la costa rocosa de Malta', pie: 'El naufragio en Malta (Hch 27:41-44).', origen: 'ia' }
      ],
      texto: [
        'El último viaje de Pablo que narra Hechos no fue un viaje misionero planificado, sino el traslado de un prisionero. Pero Dios lo usó para cumplir su promesa: Pablo testificaría en Roma.',
        { h: 'De Cesarea a Creta' },
        'Pablo viajó bajo custodia del centurión Julio, con Lucas y Aristarco. Bordearon la costa: Sidón, donde visitó a sus amigos; Chipre por el lado protegido del viento; Mira, en Licia, donde cambiaron a una nave alejandrina cargada de trigo para Italia. Con vientos contrarios llegaron a Buenos Puertos, en Creta. Era otoño, la temporada peligrosa para navegar, y Pablo advirtió que habría pérdidas. Decidieron seguir.',
        { h: 'La tempestad' },
        'Un viento huracanado, el Euroclidón, los arrastró catorce días por el mar. Arrojaron la carga y los aparejos, y perdieron toda esperanza. Entonces Pablo, animado por un ángel, aseguró que nadie moriría. La nave encalló en una bahía de Malta, a unos novecientos kilómetros de Creta, y las doscientas setenta y seis personas llegaron a tierra.',
        { h: 'Malta y la llegada a Roma' },
        'En Malta, Pablo sobrevivió a la mordedura de una víbora y sanó a muchos enfermos de la isla. Tres meses después, en primavera, siguieron en otra nave de Alejandría: Siracusa, en Sicilia; Regio, y Puteoli, el gran puerto del trigo en la bahía de Nápoles, donde encontraron hermanos. Desde allí siguieron a pie por la vía Apia. En el Foro de Apio y en las Tres Tabernas salieron a recibirlo creyentes de Roma, y Pablo dio gracias a Dios y cobró aliento.',
        'En Roma vivió dos años en una casa alquilada, custodiado por un soldado, recibiendo a todos los que venían, «predicando el reino de Dios y enseñando acerca del Señor Jesucristo, abiertamente y sin impedimento» (Hch 28:31). Desde allí escribió varias cartas. La ruta Después de Hechos sigue lo que pasó luego.'
      ],
      pensar: 'Dios cumplió su promesa de llevar a Pablo a Roma, pero por un camino que incluyó prisión, tormenta y naufragio (Hch 23:11; 27). ¿Qué te enseña esto sobre la manera en que Dios cumple sus promesas?'
    },
    {
      id: 'mapa-completo', n: 'Todos los viajes en un mapa', ref: 'Romanos 15:19; 2 Corintios 11:26', fecha: [34, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Antes de los viajes: Damasco, Arabia, Jerusalén, Tarso y Antioquía.', fecha: [34, 45],
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-44'], lugares: ['jerusalen', 'damasco', 'petra', 'tarso', 'antioquia'], trazos: ['pablo-antes', 'pablo-antioquia'] } },
          { t: 'Primer viaje.', fecha: [46, 48],
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'pafos', 'antioquia-pisidia', 'derbe'], trazos: ['viaje-1'] } },
          { t: 'Segundo viaje.', fecha: [49, 52],
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-52'], lugares: ['antioquia', 'troas', 'filipos', 'tesalonica', 'atenas', 'corinto'], trazos: ['viaje-2'] } },
          { t: 'Tercer viaje.', fecha: [53, 57],
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-57'], lugares: ['antioquia', 'efeso', 'troas', 'iliria', 'corinto', 'mileto', 'jerusalen'], trazos: ['viaje-3'] } },
          { t: 'Viaje a Roma.', fecha: [59, 60],
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: ['cesarea', 'creta', 'malta', 'roma'], trazos: ['viaje-roma'] } }
        ] },
        { tipo: 'tabla', titulo: 'Cifras', tabla: {
          titulo: 'Los viajes de Pablo en cifras aproximadas',
          cab: ['Viaje', 'Años', 'Distancia aproximada'],
          filas: [
            ['Primer viaje', 'c. 46–48', 'Unos 2.000 km'],
            ['Segundo viaje', 'c. 49–52', 'Unos 5.000 km'],
            ['Tercer viaje', 'c. 53–57', 'Unos 5.000 km'],
            ['Viaje a Roma', 'c. 59–60', 'Unos 3.500 km']
          ],
          nota: 'Estimaciones según las rutas probables; las cifras varían según los autores.'
        } }
      ],
      texto: [
        'Esta última estación reúne todos los viajes en un solo mapa. Usa «▶ Ver la evolución» para seguirlos en orden, y observa cómo crece el área verde de la iglesia.',
        { h: 'Más de quince mil kilómetros' },
        'Sumando los tres viajes misioneros y el viaje a Roma, Pablo recorrió más de quince mil kilómetros, buena parte a pie. En el siglo I, un viajero a pie hacía unos treinta kilómetros por día por las calzadas romanas, y por mar dependía del viento y de la estación. Pablo describió el costo de esos caminos: «en caminos muchas veces; en peligros de ríos, peligros de ladrones… peligros en el desierto, peligros en el mar» (2 Co 11:26).',
        { h: 'De Jerusalén a Ilírico' },
        'Al final del tercer viaje, Pablo pudo escribir a los romanos que «desde Jerusalén, y por los alrededores hasta Ilírico, todo lo he llenado del evangelio de Cristo» (Ro 15:19). No significa que hubiera predicado en cada pueblo, sino que había establecido iglesias en los centros principales de cada región, desde donde el evangelio se extendería. Su principio era predicar «no donde Cristo ya hubiese sido nombrado, para no edificar sobre fundamento ajeno» (Ro 15:20).',
        { h: 'Un hombre, muchos colaboradores' },
        'El mapa muestra los viajes de Pablo, pero no fue un trabajo solitario. Bernabé, Silas, Timoteo, Lucas, Tito, Priscila y Aquila, Aristarco, Epafras y muchos otros viajaron con él, se quedaron en las iglesias o llevaron el evangelio a lugares donde Pablo nunca fue. Y detrás de todos estaba el Espíritu Santo, que enviaba, guiaba, cerraba puertas y las abría.',
        'Las otras rutas de este recurso muestran las cartas que Pablo escribió en estos viajes, las ciudades principales, lo que sufrió y lo que pasó después de Hechos.'
      ],
      pensar: 'Pablo dijo que había llenado del evangelio la región desde Jerusalén hasta Ilírico (Ro 15:19). ¿Cuál es la región que Dios te ha dado a ti para llenarla del evangelio: tu familia, tu barrio, tu trabajo?'
    }
  ];

  /* ---------------- Ruta 2 · Las cartas en su contexto ---------------- */
  const CARTAS_LUGARES = ['r-galacia', 'tesalonica', 'filipos', 'corinto', 'efeso', 'colosas', 'roma', 'creta-isla'];
  const cartas = [
    {
      id: 'c-panorama', n: 'Trece cartas, un mapa', ref: '2 Pedro 3:15-16; Colosenses 4:16', fecha: [48, 67],
      visual: [
        { tipo: 'tabla', titulo: 'Las cartas', tabla: {
          titulo: 'Las cartas de Pablo en orden aproximado',
          cab: ['Carta', 'Escrita desde', 'Fecha aprox.', 'Momento'],
          filas: [
            ['Gálatas', 'Antioquía (o Éfeso)', 'c. 48–49 (o c. 55)', 'Antes del concilio (o en el tercer viaje)'],
            ['1 y 2 Tesalonicenses', 'Corinto', 'c. 50–51', 'Segundo viaje'],
            ['1 Corintios', 'Éfeso', 'c. 54–55', 'Tercer viaje'],
            ['2 Corintios', 'Macedonia', 'c. 55–56', 'Tercer viaje'],
            ['Romanos', 'Corinto', 'c. 56–57', 'Fin del tercer viaje'],
            ['Efesios, Colosenses, Filemón', 'Roma', 'c. 60–62', 'Primera prisión'],
            ['Filipenses', 'Roma', 'c. 61–62', 'Primera prisión'],
            ['1 Timoteo, Tito', 'Macedonia (?)', 'c. 62–65', 'Después de Hechos'],
            ['2 Timoteo', 'Roma', 'c. 66–67', 'Segunda prisión']
          ],
          nota: 'Fechas aproximadas. El lugar y la fecha de algunas cartas se discuten.'
        } },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-62'], lugares: CARTAS_LUGARES } }
      ],
      texto: [
        'Trece cartas del Nuevo Testamento llevan el nombre de Pablo. Casi todas nacieron en el camino: Pablo las escribía para iglesias que había fundado y que no podía visitar, para responder preguntas, corregir errores, animar en la persecución o preparar una visita. Esta ruta las ubica en el mapa y en la historia de sus viajes.',
        { h: 'Cartas para ser leídas en voz alta' },
        'Las cartas se leían en voz alta ante la iglesia reunida, y circulaban entre iglesias. Pablo pidió a los colosenses que su carta se leyera también en Laodicea (Col 4:16). Generalmente las dictaba a un secretario y las firmaba de su mano: «Mirad con cuán grandes letras os escribo de mi propia mano» (Gá 6:11). Tercio, el que escribió Romanos, incluso envía su propio saludo (Ro 16:22). Las llevaban colaboradores de confianza, como Febe, Tíquico o Epafrodito.',
        { h: 'Escritura inspirada' },
        'Desde temprano, la iglesia reconoció estas cartas como Escritura. Pedro mismo habló de las epístolas de «nuestro amado hermano Pablo», y las puso junto a «las otras Escrituras» (2 P 3:15-16). Pablo escribía a personas concretas sobre problemas concretos, pero el Espíritu Santo lo guiaba para que esas cartas enseñaran a la iglesia de todos los tiempos.',
        { h: 'Cuatro grupos' },
        'Las cartas se suelen agrupar por el momento en que se escribieron. Las primeras, durante los viajes misioneros: Gálatas, 1 y 2 Tesalonicenses, 1 y 2 Corintios y Romanos. Las de la prisión, desde Roma: Efesios, Filipenses, Colosenses y Filemón. Y las pastorales, dirigidas a Timoteo y Tito, escritas después de los hechos que narra Hechos.',
        'Conocer dónde y cuándo se escribió una carta ayuda a entenderla. Las estaciones siguientes recorren cada grupo.'
      ],
      pensar: 'Pablo escribía a iglesias concretas sobre problemas concretos, y Dios usó esas cartas para enseñar a la iglesia de todos los tiempos (2 P 3:15-16). ¿Cómo cambia tu lectura de una carta de Pablo saber a quién y en qué circunstancias fue escrita?'
    },
    {
      id: 'c-galatas', n: 'Gálatas: libres por la gracia', ref: 'Gálatas 1:6-9; 2:1-16; 3:1-5; 4:13-14; 5:1', fecha: [48, 55],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ASIA_MENOR, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia', 'antioquia-pisidia', 'iconio', 'listra', 'derbe', 'r-galacia'], trazos: ['viaje-1'] } }
      ],
      texto: [
        'Gálatas es la carta más apasionada de Pablo. No tiene la acción de gracias con que suele empezar sus cartas: va directo al problema. «Estoy maravillado de que tan pronto os hayáis alejado del que os llamó por la gracia de Cristo, para seguir un evangelio diferente» (Gá 1:6).',
        { h: 'El problema' },
        'Después de la partida de Pablo, llegaron maestros que enseñaban a los creyentes gentiles que debían circuncidarse y guardar la ley de Moisés para ser verdaderos cristianos. Para Pablo eso no era un detalle: era otro evangelio. Si la salvación depende de cumplir la ley, Cristo murió en vano (Gá 2:21). La carta defiende que el hombre es justificado por la fe en Jesucristo, no por las obras de la ley (Gá 2:16).',
        'Pablo pregunta a los gálatas algo que ellos mismos habían vivido: «¿Recibisteis el Espíritu por las obras de la ley, o por el oír con fe?» (Gá 3:2). Habían recibido el Espíritu, y Dios hacía maravillas entre ellos, por la fe, no por cumplir la ley.',
        { posturas: {
          titulo: '¿Cuándo y a quién se escribió Gálatas?',
          a: { n: 'Galacia del sur, c. 48–49', t: 'Los gálatas son las iglesias de Antioquía de Pisidia, Iconio, Listra y Derbe, fundadas en el primer viaje. Pablo escribió desde Antioquía de Siria, poco antes del concilio de Jerusalén, y por eso no menciona su decisión. Sería la primera carta de Pablo.' },
          b: { n: 'Galacia del norte, c. 55', t: 'Los gálatas son los pueblos de origen celta del norte de la provincia, que Pablo habría visitado en el segundo y tercer viaje (Hch 16:6; 18:23). Pablo escribió desde Éfeso o Macedonia, en la época de Romanos, carta que trata los mismos temas.' },
          c: 'Este estudio prefiere la primera postura, porque Hechos solo narra la fundación de iglesias en el sur de Galacia y porque explica bien que la carta no mencione el concilio. El mensaje de la carta es el mismo con cualquiera de las dos fechas.'
        } },
        { h: 'Libertad y Espíritu' },
        'La carta termina con una llamada a vivir en la libertad de Cristo, no para dar ocasión a la carne, sino para servirse por amor. Contra la tentación de volver a la ley, Pablo presenta la vida en el Espíritu: andar en el Espíritu, ser guiados por el Espíritu y dar el fruto del Espíritu: «amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza» (Gá 5:22-23).'
      ],
      pensar: 'Pablo preguntó a los gálatas si habían recibido el Espíritu por las obras de la ley o por el oír con fe (Gá 3:2). ¿Hay áreas de tu vida cristiana en que intentas ganar con esfuerzo lo que Dios da por gracia?'
    },
    {
      id: 'c-tesalonicenses', n: 'Tesalonicenses: la esperanza de su venida', ref: 'Hechos 17:1-10; 1 Tesalonicenses 1:9-10; 2:17–3:6; 4:13-18; 2 Tesalonicenses 2:1-3', fecha: [50, 51],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-52'], lugares: ['filipos', 'tesalonica', 'berea', 'atenas', 'corinto'], trazos: ['viaje-2'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/vp-carta.webp', alt: 'En una casa de Corinto, Pablo dicta una carta a un secretario que escribe en un papiro, mientras Silas y Timoteo escuchan; sobre la mesa hay rollos y una lámpara', pie: 'Pablo dicta una carta con Silas y Timoteo (1 Ts 1:1).', origen: 'ia' }
      ],
      texto: [
        'Las cartas a los Tesalonicenses son probablemente las más antiguas que se conservan de Pablo, junto a Gálatas. Se escribieron desde Corinto, durante el segundo viaje, pocos meses después de fundada la iglesia.',
        { h: 'Una iglesia dejada demasiado pronto' },
        'En Tesalónica, Pablo predicó solo tres días de reposo en la sinagoga, más algunas semanas, antes de que un alboroto lo obligara a salir de noche (Hch 17:2, 10). Dejó una iglesia muy joven, en medio de la persecución. Desde Atenas, sin poder soportarlo más, envió a Timoteo para confirmarlos (1 Ts 3:1-2). Cuando Timoteo volvió a Corinto con buenas noticias de su fe y su amor, Pablo escribió la primera carta.',
        'En ella se nota el corazón de un pastor. Pablo los había tratado como una nodriza que cuida a sus hijos (1 Ts 2:7), y les dice que quiso volver a verlos «una y otra vez; pero Satanás nos estorbó» (1 Ts 2:18).',
        { h: 'Los que durmieron' },
        'Algunos creyentes de Tesalónica habían muerto, y los demás se preguntaban si se perderían la venida del Señor. Pablo les responde con una de las enseñanzas más claras del Nuevo Testamento sobre el arrebatamiento de la iglesia: «el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire» (1 Ts 4:16-17). Y concluye: «alentaos los unos a los otros con estas palabras» (1 Ts 4:18).',
        { h: 'La segunda carta' },
        'Poco después, alguien había confundido a los tesalonicenses haciéndoles creer que el día del Señor ya había llegado. En la segunda carta, Pablo les explica que antes vendrán la apostasía y la manifestación del hombre de pecado (2 Ts 2:1-3). Mientras tanto, los anima a mantenerse firmes y a trabajar con sus manos, sin vivir desordenadamente esperando el fin.',
        'Pablo mencionó a los tesalonicenses que se habían convertido de los ídolos a Dios, para servir al Dios vivo y verdadero, y esperar de los cielos a su Hijo, «quien nos libra de la ira venidera» (1 Ts 1:9-10).'
      ],
      pensar: 'Pablo enseñó la esperanza del arrebatamiento para que los creyentes se alentaran unos a otros (1 Ts 4:18). ¿Cómo puede esta esperanza consolar a quienes han perdido a un ser querido en Cristo?'
    },
    {
      id: 'c-corintios', n: 'Corintios: una iglesia con dones y problemas', ref: '1 Corintios 1:10-12; 12–14; 15; 16:8-9; 2 Corintios 2:12-13; 7:5-7; 12:9-10', fecha: [54, 56],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'troas', 'filipos', 'corinto', 'r-acaya', 'r-macedonia'], trazos: ['viaje-3'] } },
        { tipo: 'tabla', titulo: 'La correspondencia', tabla: {
          titulo: 'Pablo y los corintios',
          cab: ['Momento', 'Dónde', 'Pasaje'],
          filas: [
            ['Funda la iglesia (año y medio)', 'Corinto', 'Hch 18:1-18'],
            ['Una carta anterior, perdida', 'Éfeso', '1 Co 5:9'],
            ['1 Corintios', 'Éfeso', '1 Co 16:8'],
            ['Una visita dolorosa', 'Corinto', '2 Co 2:1; 13:2'],
            ['Una carta con lágrimas', 'Éfeso', '2 Co 2:4'],
            ['Espera a Tito con noticias', 'Troas y Macedonia', '2 Co 2:12-13; 7:5-7'],
            ['2 Corintios', 'Macedonia', '2 Co 9:2-4'],
            ['Tres meses en Grecia', 'Corinto', 'Hch 20:2-3']
          ],
          nota: 'La reconstrucción de las visitas y cartas intermedias es aproximada.'
        } }
      ],
      texto: [
        'Pablo pasó año y medio en Corinto durante el segundo viaje. Varios años después, desde Éfeso, escribió a esa iglesia la carta que conocemos como 1 Corintios. Pero la relación entre Pablo y los corintios fue más larga y complicada: incluyó al menos otra carta que se perdió, una visita dolorosa y una carta escrita «con muchas lágrimas» (2 Co 2:4).',
        { h: '1 Corintios: muchos dones, muchos problemas' },
        'La iglesia de Corinto era rica en dones espirituales: no le faltaba ningún don mientras esperaba la manifestación del Señor (1 Co 1:7). Pero tenía divisiones, inmoralidad, pleitos entre hermanos, desorden en la cena del Señor y confusión sobre la resurrección. Pablo responde a cada problema.',
        'Los capítulos 12 a 14 son la enseñanza más extensa de la Biblia sobre los dones del Espíritu: su diversidad, su unidad en un mismo Espíritu y un mismo cuerpo, la supremacía del amor, y el orden en su uso. Pablo no prohíbe los dones por el desorden: enseña a usarlos bien. «Procurad, pues, los dones mejores» (1 Co 12:31), y «no impidáis el hablar lenguas; pero hágase todo decentemente y con orden» (1 Co 14:39-40). El capítulo 15 defiende la resurrección de Cristo y de los creyentes.',
        { h: '2 Corintios: la fuerza en la debilidad' },
        'Desde Éfeso, Pablo envió a Tito a Corinto. Mientras lo esperaba, pasó a Troas y luego a Macedonia, sin reposo, «de fuera, conflictos; de dentro, temores» (2 Co 7:5). Cuando Tito llegó con noticias de que los corintios se habían arrepentido, Pablo escribió 2 Corintios, su carta más personal. En ella defiende su ministerio frente a unos falsos apóstoles, cuenta sus sufrimientos y revela lo que el Señor le dijo ante su aguijón en la carne: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Co 12:9).'
      ],
      pensar: 'Pablo no prohibió los dones del Espíritu por el desorden en Corinto, sino que enseñó a usarlos con amor y con orden (1 Co 13; 14:39-40). ¿Qué te enseña esto sobre el equilibrio entre la libertad del Espíritu y el orden en la iglesia?'
    },
    {
      id: 'c-romanos', n: 'Romanos: el evangelio para una iglesia que no conocía', ref: 'Romanos 1:8-16; 15:19-33; 16:1-2; Hechos 20:2-3', fecha: [56, 57],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: OCCIDENTE, capas: ['roma-14', 'iglesia-57'], lugares: ['corinto', 'cencrea', 'jerusalen', 'roma', 'hispania', 'iliria'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.', ref: 'Romanos 1:16' }
      ],
      texto: [
        'Romanos es la carta más extensa y sistemática de Pablo. La escribió desde Corinto, durante los tres meses que pasó en Grecia al final del tercer viaje (Hch 20:2-3), a una iglesia que nunca había visitado.',
        { h: 'Un momento de transición' },
        'Pablo estaba en un punto de inflexión. Había terminado su obra en el oriente: «desde Jerusalén, y por los alrededores hasta Ilírico, todo lo he llenado del evangelio de Cristo» (Ro 15:19). Iba a llevar la ofrenda a Jerusalén, sabiendo que corría peligro, y pidió a los romanos que oraran para ser librado de los rebeldes de Judea (Ro 15:30-31). Después pensaba seguir hacia el occidente, a España, y pasar por Roma: «cuando vaya a España, iré a vosotros» (Ro 15:24).',
        'Roma sería su nueva base, como antes lo había sido Antioquía. Por eso Pablo presenta a la iglesia de Roma, de manera ordenada, el evangelio que predicaba.',
        { h: 'El contenido' },
        'La carta explica que todos, judíos y gentiles, han pecado y están destituidos de la gloria de Dios; que somos justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús; que el creyente ha muerto al pecado y vive en el Espíritu; que Dios no ha desechado a Israel, sino que su endurecimiento es parcial y temporal, hasta que haya entrado la plenitud de los gentiles, y entonces todo Israel será salvo (Ro 11:25-26); y cómo debe vivir la iglesia: con amor, humildad y servicio.',
        { h: 'Febe y los saludos' },
        'La carta fue llevada a Roma probablemente por Febe, «diaconisa de la iglesia en Cencrea» (Ro 16:1), el puerto oriental de Corinto. El último capítulo saluda a más de veinte personas por nombre, entre ellas Priscila y Aquila y la iglesia que se reunía en su casa. Pablo no conocía la iglesia de Roma, pero conocía a muchos de sus miembros.',
        'Pablo llegó a Roma unos tres años después, pero no como había planeado: llegó como prisionero.'
      ],
      pensar: 'Pablo escribió que no se avergonzaba del evangelio, «porque es poder de Dios para salvación» (Ro 1:16). ¿En qué situaciones te cuesta más no avergonzarte del evangelio?'
    },
    {
      id: 'c-prision', n: 'Las cartas de la prisión', ref: 'Efesios 3:1; 6:20-21; Filipenses 1:12-14, 21-25; Colosenses 4:7-18; Filemón 1, 10-22', fecha: [60, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGEO, capas: ['roma-14', 'iglesia-62'], lugares: ['efeso', 'colosas', 'laodicea', 'filipos'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: H + 'hechos-pablo-roma.webp', alt: 'Pablo, encadenado a un soldado, enseña a un grupo en una casa alquilada en Roma', pie: '«Embajador en cadenas» (Ef 6:20).', origen: 'ia' }
      ],
      texto: [
        'Cuatro cartas mencionan que Pablo las escribió estando preso: Efesios, Filipenses, Colosenses y Filemón. Por eso se las llama cartas de la prisión. La mayoría de los estudiosos piensa que las escribió durante los dos años en la casa alquilada de Roma (Hch 28:30). Otros proponen Éfeso o Cesarea.',
        { h: 'Tres cartas que viajaron juntas' },
        'Efesios, Colosenses y Filemón parecen haber sido enviadas al mismo tiempo, a la provincia de Asia. Tíquico llevó las cartas a Éfeso y a Colosas (Ef 6:21; Col 4:7), acompañado de Onésimo, un esclavo de Filemón que había huido a Roma, se había convertido por medio de Pablo y ahora volvía a su amo (Col 4:9; Flm 10-12).',
        'Colosenses responde a una enseñanza falsa que desvalorizaba a Cristo, y presenta a Cristo como la imagen del Dios invisible, en quien habita corporalmente toda la plenitud de la Deidad (Col 1:15; 2:9). Efesios, quizá una carta para varias iglesias de Asia, describe a la iglesia como el cuerpo de Cristo, donde judíos y gentiles son un solo pueblo. Filemón es una carta breve y personal: Pablo pide a Filemón que reciba a Onésimo «no ya como esclavo, sino como más que esclavo, como hermano amado» (Flm 16).',
        { h: 'Filipenses: gozo en la prisión' },
        'Filipenses fue escrita a la primera iglesia de Europa, que había enviado una ofrenda por medio de Epafrodito. Es la carta del gozo: la palabra aparece una y otra vez, escrita por un hombre encadenado que no sabía si viviría o moriría. «Porque para mí el vivir es Cristo, y el morir es ganancia» (Fil 1:21).',
        'Pablo cuenta que sus prisiones habían servido para el progreso del evangelio: su causa se había hecho conocida en todo el pretorio, y muchos hermanos, animados por sus cadenas, predicaban con más valor (Fil 1:12-14). Y esperaba ser liberado: «confío en el Señor que yo también iré pronto a vosotros» (Fil 2:24). A Filemón le pidió incluso que le preparara alojamiento (Flm 22).'
      ],
      pensar: 'Encadenado y sin saber si viviría, Pablo escribió la carta del gozo (Fil 1:21; 4:4). ¿De dónde viene un gozo que no depende de las circunstancias?'
    },
    {
      id: 'c-pastorales', n: 'Las cartas pastorales', ref: '1 Timoteo 1:3; 3:1-15; Tito 1:5; 3:12; 2 Timoteo 4:6-21', fecha: [62, 67],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[33, 12], [43, 30]], capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'creta-isla', 'efeso', 'filipos', 'nicopolis', 'troas', 'mileto'], trazos: ['pablo-despues'] } },
        { tipo: 'tabla', titulo: 'Las pastorales', tabla: {
          titulo: 'Las cartas pastorales',
          cab: ['Carta', 'Destinatario', 'Dónde está', 'Tema'],
          filas: [
            ['1 Timoteo', 'Timoteo', 'Éfeso (1 Ti 1:3)', 'Sana doctrina, oración, requisitos de obispos y diáconos'],
            ['Tito', 'Tito', 'Creta (Tit 1:5)', 'Ancianos en cada ciudad, buenas obras'],
            ['2 Timoteo', 'Timoteo', 'Éfeso (?)', 'Fidelidad hasta el fin; última carta de Pablo']
          ]
        } }
      ],
      texto: [
        'Las cartas a Timoteo y a Tito se llaman pastorales porque tratan del cuidado de las iglesias y de sus líderes. No están dirigidas a congregaciones, sino a dos colaboradores de Pablo encargados de organizar iglesias.',
        { h: 'Después de Hechos' },
        'Estas cartas mencionan lugares y viajes que no encajan en el relato de Hechos. Pablo dejó a Timoteo en Éfeso cuando fue a Macedonia (1 Ti 1:3). Dejó a Tito en Creta para establecer ancianos en cada ciudad (Tit 1:5), aunque en Hechos Pablo solo pasó por Creta como prisionero. Pensaba pasar el invierno en Nicópolis, en la costa occidental de Grecia (Tit 3:12). Por eso la mayoría de los estudiosos que aceptan que Pablo las escribió piensan que fue liberado después de los dos años de Roma y siguió viajando. La ruta Después de Hechos lo explica.',
        { h: '1 Timoteo y Tito' },
        'En estas dos cartas, Pablo instruye a sus colaboradores para enfrentar falsas enseñanzas y ordenar la vida de la iglesia: la oración, la conducta en la congregación, el cuidado de las viudas y, sobre todo, los requisitos de los obispos o ancianos y de los diáconos (1 Ti 3:1-13; Tit 1:5-9). La iglesia, dice Pablo, es «columna y baluarte de la verdad» (1 Ti 3:15).',
        { h: '2 Timoteo, la última carta' },
        '2 Timoteo es distinta. Pablo está otra vez preso en Roma, pero esta vez sin esperanza de ser liberado. Algunos lo han abandonado; en su primera defensa nadie estuvo a su lado, pero el Señor estuvo con él (2 Ti 4:16-17). Escribe con urgencia a su hijo en la fe: que venga pronto, antes del invierno, y que le traiga el capote que dejó en Troas y los pergaminos (2 Ti 4:13, 21).',
        'Y deja su testamento: «Porque yo ya estoy para ser sacrificado, y el tiempo de mi partida está cercano. He peleado la buena batalla, he acabado la carrera, he guardado la fe» (2 Ti 4:6-7).'
      ],
      pensar: 'En su última carta, Pablo pidió su capote para el frío y los pergaminos para seguir estudiando (2 Ti 4:13). ¿Qué te enseña que, aun al final de su vida, Pablo siguiera queriendo leer y aprender?'
    }
  ];

  /* ---------------- Ruta 3 · Las ciudades ---------------- */
  const ciudades = [
    {
      id: 'ciu-antioquia', n: 'Antioquía de Siria', ref: 'Hechos 11:19-30; 13:1-3; 14:26-28; 15:30-35; Gálatas 2:11-14', fecha: [40, 53],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[34.5, 34.0], [37.5, 37.6]], capas: ['roma-14', 'iglesia-44'], lugares: ['antioquia', 'seleucia', 'tarso', 'r-siria'] } },
        { tipo: 'tabla', titulo: 'Ficha', tabla: {
          titulo: 'Antioquía de Siria',
          cab: ['Dato', 'Detalle'],
          filas: [
            ['Ubicación', 'Junto al río Orontes, a 25 km del mar; hoy Antakya, Turquía'],
            ['Importancia', 'Capital de la provincia de Siria; tercera ciudad del imperio, después de Roma y Alejandría'],
            ['Población', 'Varios cientos de miles de habitantes, con una gran comunidad judía'],
            ['En Hechos', 'Primera iglesia con muchos gentiles; los discípulos son llamados cristianos'],
            ['Para Pablo', 'Base de sus tres viajes misioneros']
          ]
        } }
      ],
      texto: [
        'Esta ruta recorre las siete ciudades principales de la vida de Pablo. Cada estación presenta la ciudad en el siglo I, lo que ocurrió allí y las cartas relacionadas con ella. La primera es Antioquía, la ciudad desde donde partieron todos los viajes.',
        { h: 'Una gran ciudad' },
        'Antioquía fue fundada hacia el año 300 a.C. por Seleuco I, uno de los generales de Alejandro Magno, y fue la capital del reino seléucida. Cuando Roma tomó Siria, la convirtió en capital de la provincia. En el siglo I era una ciudad rica y cosmopolita, con una calle principal con columnas de varios kilómetros, y famosa también por su vida licenciosa. En las afueras estaba Dafne, un bosque sagrado dedicado a Apolo.',
        'Tenía una gran comunidad judía, y muchos gentiles se habían acercado a la sinagoga. Fue el terreno preparado para que naciera allí la primera iglesia mixta de judíos y gentiles.',
        { h: 'La iglesia de Antioquía' },
        'Creyentes anónimos de Chipre y Cirene llevaron el evangelio a los griegos de Antioquía, y gran número creyó (Hch 11:20-21). Bernabé y Saulo enseñaron allí un año, y los discípulos fueron llamados cristianos por primera vez. La iglesia tenía profetas y maestros de orígenes diversos, era generosa con los necesitados de Judea y, mientras ministraba al Señor y ayunaba, recibió la orden del Espíritu de enviar a Bernabé y a Saulo.',
        'También vivió conflictos. Cuando llegaron hombres de Judea exigiendo la circuncisión, la iglesia envió a Pablo y Bernabé al concilio de Jerusalén. Y en Antioquía, Pablo reprendió públicamente a Pedro porque, por temor a los judíos, había dejado de comer con los creyentes gentiles (Gá 2:11-14).',
        'Antioquía siguió siendo un gran centro cristiano por siglos. A comienzos del siglo II, su obispo Ignacio fue llevado preso a Roma, donde murió como mártir.'
      ],
      pensar: 'En Antioquía, judíos y gentiles formaron una sola iglesia, y por eso Pablo defendió con firmeza que comieran juntos (Gá 2:11-14). ¿Qué barreras entre creyentes de distinto origen o condición necesitan derribarse en la iglesia de hoy?'
    },
    {
      id: 'ciu-filipos', n: 'Filipos', ref: 'Hechos 16:11-40; Filipenses 1:3-8; 4:10-18', fecha: [50, 62],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[39.8, 22.0], [41.6, 25.5]], capas: ['roma-14', 'iglesia-52'], lugares: ['filipos', 'neapolis', 'anfipolis', 'tesalonica', 'samotracia'], trazos: ['viaje-2'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: H + 'hechos-lidia.webp', alt: 'Lidia escucha a Pablo junto al río, en las afueras de Filipos', pie: 'Lidia, la primera creyente de Europa (Hch 16:14).', origen: 'ia' }
      ],
      texto: [
        'Filipos fue la primera ciudad de Europa donde se predicó el evangelio. Estaba en Macedonia, sobre la vía Egnatia, la gran calzada romana que cruzaba los Balcanes, a unos quince kilómetros de su puerto, Neápolis.',
        { h: 'Una pequeña Roma' },
        'La ciudad fue fundada por Filipo II de Macedonia, el padre de Alejandro Magno, y lleva su nombre. En el año 42 a.C., en sus llanuras, Marco Antonio y Octavio derrotaron a los asesinos de Julio César, y después Roma la convirtió en colonia y la pobló con soldados veteranos. Lucas la describe con precisión: «la primera ciudad de la provincia de Macedonia, y una colonia» (Hch 16:12). Sus habitantes tenían los derechos de los ciudadanos romanos y se sentían orgullosos de ello. Por eso los acusadores de Pablo dijeron que enseñaba costumbres que a ellos, siendo romanos, no les era lícito recibir (Hch 16:21).',
        'Había pocos judíos en Filipos; no tenían sinagoga, y un grupo de mujeres se reunía a orar junto al río.',
        { h: 'La iglesia de Filipos' },
        'La iglesia nació con tres conversiones muy distintas: Lidia, una comerciante rica de Tiatira; una muchacha esclava liberada de un espíritu de adivinación, y un carcelero romano y su familia. En la cárcel de Filipos, Pablo y Silas cantaron a medianoche, y Pablo hizo valer su ciudadanía romana ante los magistrados.',
        'Fue la iglesia más cercana al corazón de Pablo. Desde el principio lo sostuvo con ofrendas, aun cuando ninguna otra iglesia lo hacía (Fil 4:15-16), y le envió ayuda a Tesalónica, a Corinto y a la prisión de Roma por medio de Epafrodito. Pablo la visitó otra vez en el tercer viaje.',
        'Desde la prisión, Pablo les escribió la carta del gozo: «Doy gracias a mi Dios siempre que me acuerdo de vosotros» (Fil 1:3). La arqueología ha sacado a la luz el foro de Filipos, el teatro y un tramo de la vía Egnatia, por donde caminó Pablo.'
      ],
      pensar: 'La iglesia de Filipos nació con una comerciante rica, una esclava liberada y un carcelero (Hch 16). ¿Qué dice esto sobre el tipo de personas que Dios reúne en su iglesia?'
    },
    {
      id: 'ciu-tesalonica', n: 'Tesalónica', ref: 'Hechos 17:1-10; 1 Tesalonicenses 1:6-10', fecha: [50, 51],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[39.8, 21.5], [41.6, 25.0]], capas: ['roma-14', 'iglesia-52'], lugares: ['filipos', 'anfipolis', 'tesalonica', 'berea'], trazos: ['viaje-2'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: H + 'hechos-jason-tesalonica.webp', alt: 'Una turba arrastra a Jasón y a algunos creyentes ante los magistrados de Tesalónica', pie: '«Estos que trastornan el mundo entero» (Hch 17:6).', origen: 'ia' }
      ],
      texto: [
        'Tesalónica era la capital de la provincia de Macedonia y su ciudad más poblada. Tenía un gran puerto en el golfo Termaico y estaba sobre la vía Egnatia. Hoy es Salónica, la segunda ciudad de Grecia, y sigue en el mismo lugar.',
        { h: 'Una ciudad libre' },
        'Fundada hacia el 315 a.C. por Casandro, uno de los sucesores de Alejandro, la ciudad tomó el nombre de su esposa Tesalónica, hermana de Alejandro. Roma le concedió el estatuto de ciudad libre: se gobernaba con sus propios magistrados, los politarcas, el mismo título que usa Lucas (Hch 17:6) y que confirman las inscripciones. Tenía una comunidad judía con sinagoga.',
        { h: 'Una iglesia nacida en la persecución' },
        'Pablo predicó tres días de reposo en la sinagoga, mostrando por las Escrituras que el Cristo debía padecer y resucitar. Creyeron algunos judíos, muchos griegos piadosos y no pocas mujeres nobles. Pablo trabajaba con sus manos noche y día para no ser una carga (1 Ts 2:9), y recibió ayuda de Filipos más de una vez (Fil 4:16).',
        'Los judíos que no creyeron alborotaron la ciudad, asaltaron la casa de Jasón y acusaron a los creyentes ante los politarcas de contravenir los decretos de César, «diciendo que hay otro rey, Jesús» (Hch 17:7). Pablo y Silas tuvieron que salir de noche hacia Berea, dejando una iglesia de pocas semanas.',
        'Sin embargo, esa iglesia joven se mantuvo firme. Pablo les escribió que habían recibido la palabra «en medio de gran tribulación, con gozo del Espíritu Santo», y que su fe se había divulgado en Macedonia, en Acaya y en todo lugar (1 Ts 1:6-8). Una iglesia que sufrió desde el primer día se convirtió en ejemplo para otras.',
        'Aristarco y Segundo, compañeros de viaje de Pablo, eran de Tesalónica (Hch 20:4; 27:2).'
      ],
      pensar: 'La iglesia de Tesalónica recibió la palabra «en medio de gran tribulación, con gozo del Espíritu Santo» (1 Ts 1:6). ¿Cómo pueden el sufrimiento y el gozo convivir en la vida de un creyente?'
    },
    {
      id: 'ciu-atenas', n: 'Atenas', ref: 'Hechos 17:15-34; 1 Tesalonicenses 3:1-2', fecha: 51,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-griego/img/grecia-acropolis.webp', alt: 'La Acrópolis de Atenas con el Partenón al atardecer, vista desde la ciudad antigua', pie: 'La Acrópolis de Atenas.', origen: 'ia' },
        { tipo: 'imagen', titulo: 'El Areópago', src: OTRA + 'imperio-griego/img/grecia-pablo-areopago.webp', foco: '62% 50%', alt: 'Pablo predica en el Areópago de Atenas ante filósofos griegos', pie: 'Pablo en el Areópago (Hch 17:22).', origen: 'ia' }
      ],
      texto: [
        'Atenas ya no era en el siglo I la potencia política de la época clásica. Era una ciudad mediana de la provincia de Acaya, cuya capital era Corinto. Pero seguía siendo el centro cultural del mundo griego: la ciudad de Sócrates, Platón y Aristóteles, con escuelas de filosofía a las que acudían estudiantes de todo el imperio.',
        { h: 'Una ciudad llena de ídolos' },
        'Pablo llegó solo, esperando a Silas y a Timoteo. Recorriendo la ciudad, «su espíritu se enardecía viendo la ciudad entregada a la idolatría» (Hch 17:16). Por todas partes había templos, altares y estatuas de dioses. Sobre la Acrópolis se levantaba el Partenón, dedicado a la diosa Atenea.',
        'Lucas observa también una costumbre de la ciudad: los atenienses y los extranjeros que vivían allí «en ninguna otra cosa se interesaban sino en decir o en oír algo nuevo» (Hch 17:21).',
        { h: 'En la plaza y en el Areópago' },
        'Pablo discutía en la sinagoga con los judíos y los piadosos, y cada día en el ágora, la plaza principal, con los que encontraba. Allí se cruzó con filósofos epicúreos, que buscaban la tranquilidad del alma y creían que los dioses no se ocupan de los hombres, y estoicos, que creían en una razón divina que ordena el universo. Lo llevaron al Areópago, el antiguo consejo de la ciudad, que se reunía en la colina de Ares, para que explicara su nueva enseñanza.',
        'Su discurso partió del altar «AL DIOS NO CONOCIDO» y anunció al Dios creador, que manda a todos que se arrepientan y que juzgará al mundo por medio del hombre que resucitó. La mayoría se burló, pero algunos creyeron, entre ellos Dionisio, miembro del Areópago, y una mujer llamada Dámaris.',
        'Hechos no habla de una iglesia fundada en Atenas, y Pablo no les escribió ninguna carta. Pero allí quedó un pequeño grupo de creyentes, y desde Atenas Pablo envió a Timoteo a confirmar a los tesalonicenses (1 Ts 3:1-2).'
      ],
      pensar: 'En Atenas, la mayoría se burló del mensaje de la resurrección, pero algunos creyeron (Hch 17:32-34). ¿Cómo te ayuda este relato a seguir testificando aunque la mayoría no responda?'
    },
    {
      id: 'ciu-corinto', n: 'Corinto', ref: 'Hechos 18:1-18; 1 Corintios 1:26-29; 2:1-5; 6:9-11', fecha: [51, 57],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[36.8, 21.4], [38.6, 24.4]], capas: ['roma-14', 'iglesia-52'], lugares: ['corinto', 'cencrea', 'atenas', 'r-acaya'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/vp-tiendas.webp', alt: 'En un taller de Corinto, Pablo, Aquila y Priscila cosen grandes piezas de cuero y lona para hacer tiendas, rodeados de herramientas, rollos de tela y pieles', pie: 'Pablo trabajaba con Aquila y Priscila haciendo tiendas (Hch 18:3).', origen: 'ia' }
      ],
      texto: [
        'Corinto era la capital de la provincia de Acaya y una de las ciudades más ricas del imperio. Estaba en el istmo que une el Peloponeso con el resto de Grecia, entre dos puertos: Lequeo, hacia el occidente, y Cencrea, hacia el oriente. Los barcos y las mercancías pasaban por ella para evitar la peligrosa vuelta por el sur de Grecia.',
        { h: 'Una ciudad nueva y famosa' },
        'La antigua Corinto griega fue destruida por Roma en el 146 a.C. Julio César la refundó un siglo después como colonia romana, y en tiempos de Pablo era una ciudad próspera, cosmopolita y de gente nueva: libertos, comerciantes, artesanos y marinos de todo el imperio. Sobre la ciudad se alzaba el Acrocorinto, un monte con un templo de Afrodita. Corinto era famosa por su inmoralidad, hasta el punto de que en griego «corintizar» significaba llevar una vida licenciosa. Cada dos años se celebraban cerca los juegos ístmicos, a los que Pablo alude al hablar de la carrera y la corona (1 Co 9:24-25).',
        { h: 'Año y medio' },
        'Pablo llegó con debilidad, temor y temblor (1 Co 2:3), y trabajó haciendo tiendas con Aquila y Priscila. Después de ser rechazado en la sinagoga, enseñó en la casa de Ticio Justo. El Señor lo animó en visión, y se quedó año y medio, más que en ninguna ciudad hasta entonces. El procónsul Galión se negó a juzgarlo. La iglesia estaba formada en su mayoría por gente sencilla: «no sois muchos sabios según la carne, ni muchos poderosos, ni muchos nobles» (1 Co 1:26). Muchos habían salido de una vida de pecado, y Pablo les recordó: «esto erais algunos; mas ya habéis sido lavados» (1 Co 6:11).',
        'Desde Corinto, Pablo escribió las cartas a los Tesalonicenses y, años después, Romanos. A Corinto escribió al menos cuatro cartas, de las que conservamos dos. En las ruinas de la ciudad se han encontrado la tribuna, o bema, del foro y una inscripción que menciona a un Erasto, encargado de obras públicas; algunos lo identifican con el tesorero de la ciudad que envía saludos en Romanos 16:23.'
      ],
      pensar: 'En Corinto, una ciudad famosa por su inmoralidad, Dios tenía «mucho pueblo» (Hch 18:10), y muchos fueron lavados y santificados (1 Co 6:11). ¿Qué esperanza te da esto para tu propia ciudad?'
    },
    {
      id: 'ciu-efeso', n: 'Éfeso', ref: 'Hechos 18:19-21; 19:1-41; 20:17-38; 1 Corintios 16:8-9; Efesios 1:1; Apocalipsis 2:1-7', fecha: [52, 57],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[36.8, 26.0], [39.4, 30.2]], capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'mileto', 'colosas', 'laodicea', 'sardis', 'pergamo'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/vp-efeso.webp', alt: 'El gran teatro de Éfeso lleno de una multitud enfurecida que levanta los brazos y grita, con la calle de mármol que baja al puerto y el templo de Artemisa a lo lejos', pie: '«¡Grande es Diana de los efesios!» (Hch 19:34).', origen: 'ia' }
      ],
      texto: [
        'Éfeso era la capital de la provincia de Asia y una de las ciudades más grandes del imperio, con unos doscientos mil habitantes. Tenía un puerto activo en la desembocadura del río Caístro, calles de mármol, baños, bibliotecas y un teatro para unas veinticinco mil personas. Hoy sus ruinas, en Turquía, están entre las mejor conservadas del mundo antiguo, aunque el mar se retiró y el puerto quedó a kilómetros de la costa.',
        { h: 'La ciudad de Diana' },
        'Éfeso era famosa en todo el mundo por el templo de Artemisa, a quien los romanos llamaban Diana. El templo, cuatro veces más grande que el Partenón, era una de las siete maravillas del mundo antiguo. A él llegaban peregrinos de todas partes, y la venta de imágenes y templecillos de plata era un gran negocio. Éfeso era también un centro de magia: los «escritos efesios» eran fórmulas mágicas conocidas en todo el imperio.',
        { h: 'Casi tres años' },
        'Pablo pasó brevemente por Éfeso al final del segundo viaje y volvió en el tercero, cuando se quedó casi tres años, más que en ninguna otra ciudad (Hch 20:31). Allí doce discípulos recibieron el Espíritu Santo y hablaron en lenguas; la palabra llegó a toda la provincia; Dios hacía milagros extraordinarios; los libros de magia fueron quemados, y el platero Demetrio provocó un tumulto en el teatro. Desde Éfeso escribió 1 Corintios.',
        'El evangelio afectó tanto la religión de la ciudad que el negocio de los plateros se vio amenazado (Hch 19:26-27). Cuando el reino de Dios avanza, cambia también la economía y las costumbres de una ciudad.',
        { h: 'Después de Pablo' },
        'Pablo dejó a Timoteo a cargo de la iglesia de Éfeso (1 Ti 1:3), y le escribió desde la prisión la carta a los Efesios. Según la tradición, el apóstol Juan vivió allí en sus últimos años. Y en Apocalipsis, Jesús elogia a la iglesia de Éfeso por su trabajo y su fidelidad, pero le reprocha haber dejado su primer amor (Ap 2:1-7).'
      ],
      pensar: 'La iglesia de Éfeso, que había comenzado llena del Espíritu, años después recibió el reproche de haber dejado su primer amor (Ap 2:4). ¿Qué puedes hacer para guardar tu primer amor por Cristo?'
    },
    {
      id: 'ciu-roma', n: 'Roma', ref: 'Hechos 28:14-31; Romanos 1:7-15; 16:3-16; Filipenses 1:12-14; 4:22; 2 Timoteo 4:6-8', fecha: [57, 67],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-foro.webp', alt: 'El foro romano en su esplendor, con templos de mármol, arcos y ciudadanos con togas, al atardecer', pie: 'El foro de Roma.', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[38.5, 10.5], [43.0, 17.0]], capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'puteoli', 'siracusa'], trazos: ['viaje-roma'] } }
      ],
      texto: [
        'Roma era la capital del imperio y la ciudad más grande del mundo antiguo, con cerca de un millón de habitantes. Allí vivían el emperador, el senado y una multitud de todos los pueblos del imperio, también decenas de miles de judíos repartidos en varias sinagogas.',
        { h: 'Una iglesia antes de Pablo' },
        'Pablo no fundó la iglesia de Roma. Cuando escribió su carta, hacia el año 57, era ya una iglesia conocida, cuya fe se divulgaba por todo el mundo (Ro 1:8). Es probable que el evangelio llegara por medio de judíos y prosélitos de Roma que estuvieron en Pentecostés (Hch 2:10) y de creyentes que viajaban. El historiador Suetonio cuenta que el emperador Claudio expulsó a los judíos de Roma porque se alborotaban «a instigación de Cresto»; muchos ven aquí una referencia a disputas por Cristo. Así llegaron Aquila y Priscila a Corinto (Hch 18:2).',
        { h: 'Pablo en Roma' },
        'Pablo deseó por años visitar Roma, y llegó como prisionero hacia el año 60. Vivió dos años en una casa alquilada, encadenado a un soldado, recibiendo a todos los que venían. Su prisión hizo conocido el evangelio entre la guardia imperial, y lo saludaban aun «los de la casa de César» (Fil 1:13; 4:22). Desde Roma escribió las cartas de la prisión y, años después, 2 Timoteo.',
        { h: 'Mártires' },
        'En el año 64, un gran incendio destruyó buena parte de Roma. Según el historiador Tácito, Nerón culpó a los cristianos, y muchos fueron ejecutados con crueldad. Según la tradición, Pedro y Pablo murieron en Roma en esos años: Pedro crucificado y Pablo decapitado, como correspondía a un ciudadano romano. La iglesia de Roma, perseguida durante más de dos siglos, se reunía en casas y enterraba a sus muertos en las catacumbas.',
        'La ciudad que crucificó a Jesús por medio de su gobernador y ejecutó a sus apóstoles vio, menos de tres siglos después, al emperador Constantino favorecer la fe cristiana. El evangelio que Pablo llevó encadenado venció sin armas.'
      ],
      pensar: 'Pablo llegó a Roma encadenado, y su prisión hizo que el evangelio llegara aun a la casa de César (Fil 1:13; 4:22). ¿Qué lugares de influencia de tu ciudad podría alcanzar el evangelio por medio de creyentes fieles?'
    }
  ];

  /* ---------------- Ruta 4 · Los sufrimientos de Pablo ---------------- */
  const sufrimientos = [
    {
      id: 's-lista', n: 'La lista de 2 Corintios 11', ref: '2 Corintios 11:23-29; 12:7-10', fecha: 55,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'De los judíos cinco veces he recibido cuarenta azotes menos uno. Tres veces he sido azotado con varas; una vez apedreado; tres veces he padecido naufragio; una noche y un día he estado como náufrago en alta mar.', ref: '2 Corintios 11:24-25' },
        { tipo: 'tabla', titulo: 'En Hechos', tabla: {
          titulo: 'Lo que Hechos narra y lo que no',
          cab: ['Sufrimiento (2 Co 11)', 'Veces', '¿Lo narra Hechos?'],
          filas: [
            ['Cuarenta azotes menos uno, de los judíos', '5', 'No'],
            ['Azotado con varas', '3', 'Una vez: Filipos (Hch 16:22-23)'],
            ['Apedreado', '1', 'Sí: Listra (Hch 14:19)'],
            ['Naufragios', '3', 'No; el de Malta es posterior a la carta'],
            ['Una noche y un día en alta mar', '1', 'No'],
            ['Cárceles', 'Muchas', 'Filipos; después, Jerusalén, Cesarea y Roma'],
            ['Huida en un canasto', '1', 'Sí: Damasco (Hch 9:25; 2 Co 11:32-33)']
          ],
          nota: '2 Corintios se escribió hacia el año 55, antes del arresto en Jerusalén y del naufragio en Malta.'
        } }
      ],
      texto: [
        'En 2 Corintios, Pablo se vio obligado a defender su ministerio ante unos falsos apóstoles que se jactaban de sus credenciales. Para responderles, hizo algo que no le gustaba: hablar de sí mismo. «Como si estuviera loco hablo» (2 Co 11:23). Pero en vez de jactarse de sus éxitos, enumeró sus sufrimientos.',
        { h: 'Una lista impresionante' },
        'Pablo escribió esta lista hacia el año 55, durante el tercer viaje. Ya había recibido cinco veces la pena de la sinagoga, cuarenta azotes menos uno, el máximo que permitía la ley de Moisés (Dt 25:3). Tres veces lo azotaron con varas los magistrados romanos. Una vez fue apedreado. Tres veces naufragó, y pasó una noche y un día en alta mar. Todo eso antes del arresto en Jerusalén, los cinco años de prisión y el naufragio de Malta.',
        'Añadió los peligros de los caminos: ríos, ladrones, enemigos judíos y gentiles, peligros en la ciudad, en el desierto, en el mar y entre falsos hermanos; y el trabajo, la fatiga, los desvelos, el hambre, la sed, el frío y la desnudez (2 Co 11:26-27). Y por encima de todo, «lo que sobre mí se agolpa cada día, la preocupación por todas las iglesias» (2 Co 11:28).',
        { h: 'Lo que Hechos no cuenta' },
        'La comparación con Hechos es reveladora. Lucas narra solo una parte de los sufrimientos de Pablo: una de las tres veces azotado con varas, el apedreamiento de Listra y la huida de Damasco. De los cinco azotes de la sinagoga y de los tres naufragios no dice nada. Hechos es un relato selectivo, y la vida de Pablo fue todavía más dura de lo que el libro muestra.',
        { h: 'Gloriarse en la debilidad' },
        'Pablo terminó con una paradoja: «Si es necesario gloriarse, me gloriaré en lo que es de mi debilidad» (2 Co 11:30). El Señor le había enseñado que su poder se perfecciona en la debilidad, y Pablo concluyó: «cuando soy débil, entonces soy fuerte» (2 Co 12:10). Las estaciones siguientes ubican estos sufrimientos en el mapa.'
      ],
      pensar: 'Pablo se gloriaba en sus debilidades, porque en ellas reposaba sobre él el poder de Cristo (2 Co 12:9-10). ¿Qué debilidad tuya podría convertirse en un lugar donde se vea el poder de Dios?'
    },
    {
      id: 's-mapa', n: 'Los sufrimientos en el mapa', ref: 'Hechos 9:23-25; 14:19; 16:22-24; 1 Corintios 15:32; 2 Corintios 1:8-10', fecha: [34, 57],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Damasco: lo buscan para matarlo y huye en un canasto (Hch 9:23-25; 2 Co 11:32-33).', fecha: 37,
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-37'], lugares: ['damasco', 'jerusalen'] } },
          { t: 'Antioquía de Pisidia, Iconio y Listra: expulsado, amenazado y apedreado (Hch 13:50; 14:5, 19).', fecha: [47, 48],
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-48'], lugares: ['antioquia-pisidia', 'iconio', 'listra'], trazos: ['viaje-1'] } },
          { t: 'Filipos, Tesalónica y Berea: azotes con varas, cárcel y huida (Hch 16:22-24; 17:5-14).', fecha: 50,
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-52'], lugares: ['filipos', 'tesalonica', 'berea'], trazos: ['viaje-2'] } },
          { t: 'Éfeso y Asia: «fieras», peligro de muerte y el tumulto del teatro (1 Co 15:32; 2 Co 1:8-10; Hch 19:23-41).', fecha: [54, 56],
            estado: { view: ORIENTE, capas: ['roma-14', 'iglesia-57'], lugares: ['efeso', 'troas', 'r-asia'], trazos: ['viaje-3'] } },
          { t: 'Jerusalén, Cesarea, el naufragio y Roma: cinco años de prisión (Hch 21–28).', fecha: [57, 62],
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: ['jerusalen', 'cesarea', 'malta', 'roma'], trazos: ['viaje-roma'] } }
        ] }
      ],
      texto: [
        'Algunos de los sufrimientos de Pablo se pueden ubicar en el mapa. Usa los botones bajo el mapa para recorrerlos.',
        { h: 'Damasco y Galacia' },
        'Los sufrimientos comenzaron casi al mismo tiempo que su ministerio. En Damasco, los judíos y el gobernador del rey Aretas vigilaban las puertas para matarlo, y escapó en un canasto. En el primer viaje fue expulsado de Antioquía de Pisidia, tuvo que huir de Iconio ante una amenaza de apedreamiento, y en Listra lo apedrearon y lo arrastraron fuera de la ciudad, dándolo por muerto (Hch 14:19). Años después recordaría a Timoteo, que era de Listra, «persecuciones, padecimientos, como los que me sobrevinieron en Antioquía, en Iconio, en Listra» (2 Ti 3:11).',
        { h: 'Macedonia' },
        'En Filipos, los magistrados lo hicieron azotar con varas y lo encerraron en el calabozo de más adentro, con los pies en el cepo (Hch 16:22-24). En Tesalónica y en Berea tuvo que huir de noche. Pablo escribió a los tesalonicenses que había llegado a ellos «habiendo antes padecido y sido ultrajados en Filipos» (1 Ts 2:2).',
        { h: 'Asia' },
        'En Éfeso, Pablo vivió los peligros más graves de sus viajes. Escribió que batalló en Éfeso «contra fieras» (1 Co 15:32), probablemente una forma de referirse a enemigos feroces. Y contó a los corintios que en Asia fue abrumado más allá de sus fuerzas, «de tal modo que aun perdimos la esperanza de conservar la vida», para que aprendiera a no confiar en sí mismo, sino en Dios que resucita a los muertos (2 Co 1:8-9). Priscila y Aquila expusieron su vida por él (Ro 16:4).',
        { h: 'Los años de prisión' },
        'Después vinieron el arresto en Jerusalén, los golpes de la turba, la conspiración para matarlo, dos años en Cesarea, el naufragio y la prisión en Roma.',
        'Muchos sufrimientos de Pablo no se pueden ubicar: los cinco azotes de la sinagoga, los tres naufragios anteriores a Malta, la noche en alta mar. Solo Dios sabe dónde ocurrieron.'
      ],
      pensar: 'En Asia, Pablo llegó a perder la esperanza de vivir, y aprendió a confiar en «Dios que resucita a los muertos» (2 Co 1:8-9). ¿Qué te ha enseñado Dios en los momentos en que tus fuerzas no alcanzaban?'
    },
    {
      id: 's-aguijon', n: 'El aguijón y la gracia suficiente', ref: '2 Corintios 12:1-10; Gálatas 4:13-15; 6:17', fecha: 55,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.', ref: '2 Corintios 12:9' }
      ],
      texto: [
        'Además de los sufrimientos que venían de afuera, Pablo cargó con algo que llamó «un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera» (2 Co 12:7).',
        { h: 'Después de grandes revelaciones' },
        'Pablo cuenta que catorce años antes había sido arrebatado hasta el tercer cielo, al paraíso, donde oyó palabras inefables (2 Co 12:2-4). Para que esas revelaciones no lo llenaran de orgullo, Dios permitió el aguijón. Tres veces rogó al Señor que se lo quitara, y la respuesta fue: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Co 12:9).',
        { posturas: {
          titulo: '¿Qué era el aguijón?',
          a: { n: 'Una enfermedad física', t: 'Pablo menciona a los gálatas una enfermedad del cuerpo que fue una prueba para ellos, y dice que se habrían sacado los ojos para dárselos (Gá 4:13-15). Muchos piensan en un problema de la vista, en fiebres o en otra dolencia crónica.' },
          b: { n: 'Una oposición constante', t: 'Pablo lo llama «un mensajero de Satanás» (2 Co 12:7). En el Antiguo Testamento, la imagen del aguijón se usa para enemigos que hostigan (Nm 33:55). Podría tratarse de los adversarios que lo perseguían de ciudad en ciudad.' },
          c: 'La Biblia no lo dice, y quizá es mejor así: cada creyente puede reconocer su propio aguijón en las palabras de Pablo. Lo importante es la respuesta de Dios. La enseñanza no contradice la sanidad divina, que Hechos muestra en el ministerio de Pablo; muestra que, cuando Dios no quita una prueba, da gracia suficiente para atravesarla.'
        } },
        { h: 'Las marcas del Señor Jesús' },
        'Al final de Gálatas, Pablo escribió: «yo traigo en mi cuerpo las marcas del Señor Jesús» (Gá 6:17). Las cicatrices de los azotes y del apedreamiento eran como el sello de pertenencia que llevaba un siervo. Su cuerpo mostraba a quién pertenecía.',
        'Pablo no buscaba sufrir ni presentaba el sufrimiento como algo bueno en sí mismo. Oraba por liberación, aceptaba ayuda, apelaba a sus derechos y huía cuando era necesario. Pero cuando el sufrimiento llegaba por causa del evangelio, lo recibía como parte de su llamado. El Señor le había dicho a Ananías desde el principio: «yo le mostraré cuánto le es necesario padecer por mi nombre» (Hch 9:16).'
      ],
      pensar: 'Pablo rogó tres veces que Dios le quitara el aguijón, y Dios le respondió: «Bástate mi gracia» (2 Co 12:8-9). ¿Cómo puedes seguir orando con fe y, al mismo tiempo, descansar en la gracia de Dios cuando la respuesta tarda o es distinta?'
    },
    {
      id: 's-sentido', n: 'Para qué sirvió el sufrimiento', ref: 'Hechos 14:22; 2 Corintios 1:3-7; 4:7-18; Filipenses 1:12-14; Colosenses 1:24', fecha: [34, 67],
      visual: [
        { tipo: 'tabla', titulo: 'Frutos', tabla: {
          titulo: 'Lo que Dios hizo por medio de los sufrimientos de Pablo',
          cab: ['Sufrimiento', 'Fruto', 'Pasaje'],
          filas: [
            ['La cárcel de Filipos', 'La conversión del carcelero y su familia', 'Hch 16:25-34'],
            ['La salida forzada de Tesalónica', 'Las cartas a los Tesalonicenses', '1 Ts 2:17–3:6'],
            ['El peligro de muerte en Asia', 'Aprender a confiar en el Dios que resucita', '2 Co 1:8-10'],
            ['El arresto en Jerusalén', 'Testimonio ante el pueblo, gobernadores y reyes', 'Hch 22–26'],
            ['El naufragio', 'Sanidades y evangelio en Malta', 'Hch 28:1-10'],
            ['La prisión en Roma', 'El evangelio en el pretorio y en la casa de César; cuatro cartas', 'Fil 1:12-14; 4:22']
          ]
        } }
      ],
      texto: [
        'Al mirar los viajes de Pablo con sus sufrimientos, surge una pregunta: ¿por qué permitió Dios que su apóstol sufriera tanto? Las cartas de Pablo y el relato de Hechos dan varias respuestas.',
        { h: 'El evangelio avanzó por medio del sufrimiento' },
        'Muchas veces, el sufrimiento abrió puertas. La cárcel de Filipos llevó a la conversión del carcelero. La salida forzada de Tesalónica produjo las cartas que todavía hoy consuelan a la iglesia. El arresto en Jerusalén llevó el evangelio ante gobernadores y reyes. El naufragio llevó el poder de Dios a la isla de Malta. Y la prisión en Roma, escribió Pablo, sirvió «para el progreso del evangelio» (Fil 1:12).',
        { h: 'Para consolar a otros' },
        'Pablo enseñó que Dios «nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación» (2 Co 1:4). El que ha sufrido y ha sido consolado por Dios puede consolar a otros con más autoridad que quien solo conoce la teoría.',
        { h: 'Para mostrar el poder de Dios' },
        'Pablo comparó a los siervos de Dios con vasos de barro que llevan un tesoro, «para que la excelencia del poder sea de Dios, y no de nosotros» (2 Co 4:7). Y describió su vida así: «que estamos atribulados en todo, mas no angustiados; en apuros, mas no desesperados; perseguidos, mas no desamparados; derribados, pero no destruidos» (2 Co 4:8-9).',
        { h: 'Por una gloria mayor' },
        'Sobre todo, Pablo miraba más allá. «Esta leve tribulación momentánea produce en nosotros un cada vez más excelente y eterno peso de gloria» (2 Co 4:17). Llamó leve y momentáneo a todo lo que enumeró en 2 Corintios 11, porque lo comparaba con la eternidad.',
        'Pablo y Bernabé lo enseñaban a cada nueva iglesia: «Es necesario que a través de muchas tribulaciones entremos en el reino de Dios» (Hch 14:22). No era un mensaje de derrota, sino de esperanza: el sufrimiento tiene un fin, y el reino es seguro.'
      ],
      pensar: 'Pablo llamó a sus sufrimientos «leve tribulación momentánea» al compararlos con el «eterno peso de gloria» (2 Co 4:17). ¿Cómo cambia tu manera de enfrentar las pruebas mirar la eternidad?'
    }
  ];

  /* ---------------- Ruta 5 · Después de Hechos ---------------- */
  const despues = [
    {
      id: 'd-liberado', n: '¿Fue liberado Pablo?', ref: 'Hechos 28:30-31; Filipenses 1:25-26; 2:24; Filemón 22', fecha: 62,
      visual: [
        { tipo: 'tabla', titulo: 'Indicios', tabla: {
          titulo: 'Indicios de una liberación',
          cab: ['Indicio', 'Fuente'],
          filas: [
            ['Pablo esperaba ser liberado', 'Fil 1:25-26; 2:24; Flm 22'],
            ['Las autoridades romanas no hallaron delito en él', 'Hch 25:25; 26:31-32'],
            ['Las cartas pastorales mencionan viajes que no caben en Hechos', '1 Ti 1:3; Tit 1:5; 3:12; 2 Ti 4:13, 20'],
            ['Llegó «al límite del occidente»', 'Clemente de Roma, Carta a los Corintios 5:7 (c. 95)'],
            ['Pablo viajó de Roma a España', 'Canon Muratoriano (fines del siglo II)'],
            ['Fue liberado y luego encarcelado otra vez', 'Eusebio, Historia eclesiástica II.22 (c. 325)']
          ]
        } }
      ],
      texto: [
        'Hechos termina con Pablo en Roma, esperando su juicio. ¿Qué pasó después? El Nuevo Testamento no lo narra, pero las cartas de Pablo y los escritores cristianos antiguos dejan pistas. Esta ruta las reúne. Lo que sigue es una reconstrucción probable, no un relato bíblico.',
        { h: 'Pablo esperaba salir' },
        'En las cartas escritas desde la prisión, Pablo esperaba ser liberado. A los filipenses les dijo: «sé que quedaré, que aún permaneceré con todos vosotros» (Fil 1:25), y «confío en el Señor que yo también iré pronto a vosotros» (Fil 2:24). A Filemón le pidió: «Prepárame también alojamiento; porque espero que por vuestras oraciones os seré concedido» (Flm 22).',
        'Su situación legal era favorable. Festo y Agripa no habían encontrado delito en él, y sus acusadores de Jerusalén quizá nunca se presentaron en Roma. La ley romana no permitía retener indefinidamente a un acusado sin juicio.',
        { posturas: {
          titulo: '¿Uno o dos encarcelamientos en Roma?',
          a: { n: 'Dos encarcelamientos', t: 'Pablo fue liberado hacia el año 62, viajó varios años más y escribió 1 Timoteo y Tito, y luego fue arrestado otra vez y ejecutado hacia el 67, después de escribir 2 Timoteo. Así lo entienden Eusebio y la tradición antigua.' },
          b: { n: 'Un solo encarcelamiento', t: 'Pablo no fue liberado y murió al final de la prisión de Hechos 28. Quienes sostienen esto suelen pensar que las cartas pastorales no fueron escritas por Pablo.' },
          c: 'Este estudio sigue la primera postura, que acepta a Pablo como autor de las pastorales, como dicen las propias cartas, y explica los viajes que mencionan. Las estaciones siguientes la desarrollan, recordando que los detalles son una reconstrucción.'
        } },
        'Si fue así, Hechos termina justo antes de la liberación. Lucas cerró su libro con el evangelio predicado en la capital del imperio, y dejó el resto de la historia sin contar.'
      ],
      pensar: 'Pablo pidió a Filemón que le preparara alojamiento, confiando en que sería liberado por las oraciones de la iglesia (Flm 22). ¿Qué lugar tiene la oración de los hermanos en tu manera de enfrentar las dificultades?'
    },
    {
      id: 'd-viajes', n: 'Los últimos viajes', ref: '1 Timoteo 1:3; Tito 1:5; 3:12; 2 Timoteo 4:13, 20; Romanos 15:24, 28', fecha: [62, 66],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: '¿España? Pablo lo planeaba (Ro 15:24, 28) y la tradición antigua lo afirma.', fecha: 62,
            estado: { view: MEDITERRANEO, capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'hispania'] } },
          { t: 'Creta, Éfeso, Troas, Macedonia y Nicópolis, según las cartas pastorales.', fecha: [63, 66],
            estado: { view: [[33, 12], [43, 30]], capas: ['roma-14', 'iglesia-62'], lugares: ['roma', 'creta-isla', 'mileto', 'efeso', 'troas', 'filipos', 'nicopolis'], trazos: ['pablo-despues'] } }
        ] },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/vp-creta.webp', alt: 'En el puerto de una ciudad de Creta, Pablo se despide de Tito, un hombre joven y firme, y le entrega un rollo, mientras un barco espera junto al muelle', pie: '«Te dejé en Creta» (Tit 1:5).', origen: 'ia' }
      ],
      texto: [
        'Si Pablo fue liberado hacia el año 62, ¿adónde fue? Las cartas pastorales mencionan lugares que permiten reconstruir sus últimos viajes, aunque no el orden exacto.',
        { h: '¿España?' },
        'Pablo había escrito a los romanos que pensaba ir a España (Ro 15:24, 28). Clemente de Roma, hacia el año 95, escribió que Pablo predicó en oriente y en occidente y llegó «al límite del occidente» antes de morir. El Canon Muratoriano, de fines del siglo II, menciona su viaje de Roma a España. Para un escritor en Roma, el límite del occidente era España. Es posible, pero no seguro.',
        { h: 'De vuelta en el oriente' },
        'Las pastorales muestran a Pablo otra vez en el Egeo. Estuvo en Creta y dejó allí a Tito «para que corrigieses lo deficiente, y establecieses ancianos en cada ciudad» (Tit 1:5). Pasó por Éfeso y dejó allí a Timoteo cuando fue a Macedonia (1 Ti 1:3). Estuvo en Mileto, donde dejó enfermo a Trófimo (2 Ti 4:20), y en Troas, en casa de Carpo, donde dejó su capote y sus libros (2 Ti 4:13). Y pensaba pasar el invierno en Nicópolis, en la costa occidental de Grecia (Tit 3:12).',
        'En estos años escribió 1 Timoteo y Tito, dos cartas para organizar las iglesias que ya no podría atender personalmente. Pablo preparaba a la siguiente generación de líderes.',
        { h: 'Una iglesia que madura' },
        'El contraste con los primeros viajes es notable. En el primer viaje, Pablo fundaba iglesias en ciudades donde nadie había oído de Cristo. Ahora visitaba iglesias establecidas, nombraba ancianos, corregía falsas enseñanzas y dejaba colaboradores a cargo. La iglesia había pasado de la siembra a la consolidación. El mapa muestra un recorrido posible; Pablo pudo haber hecho estos viajes en otro orden.'
      ],
      pensar: 'En sus últimos viajes, Pablo dejó colaboradores a cargo de las iglesias y les escribió para formarlos (1 Ti 1:3; Tit 1:5). ¿Por qué es tan importante preparar a la siguiente generación de líderes en la iglesia?'
    },
    {
      id: 'd-segunda-prision', n: 'La segunda prisión', ref: '2 Timoteo 1:8, 15-17; 4:9-18', fecha: [66, 67],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/vp-segunda-prision.webp', alt: 'En una celda de piedra fría y oscura en Roma, Pablo, anciano y encadenado, dicta una carta a Lucas, que escribe a la luz de una pequeña lámpara', pie: '«Sólo Lucas está conmigo» (2 Ti 4:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En mi primera defensa ninguno estuvo a mi lado, sino que todos me desampararon; no les sea tomado en cuenta. Pero el Señor estuvo a mi lado, y me dio fuerzas, para que por mí fuese cumplida la predicación, y que todos los gentiles oyesen.', ref: '2 Timoteo 4:16-17' }
      ],
      texto: [
        'La segunda carta a Timoteo muestra a Pablo otra vez preso en Roma, pero en una situación muy distinta de la de Hechos 28.',
        { h: 'Un tiempo distinto' },
        'Después del incendio de Roma en el año 64, Nerón persiguió a los cristianos. Ser cristiano se había vuelto peligroso. Pablo ya no estaba en una casa alquilada recibiendo visitas: estaba encadenado como un malhechor (2 Ti 2:9), y era difícil encontrarlo. Onesíforo tuvo que buscarlo solícitamente por la ciudad hasta hallarlo, y no se avergonzó de sus cadenas (2 Ti 1:16-17).',
        'Muchos lo habían abandonado. Todos los de Asia se habían apartado de él (2 Ti 1:15). Demas lo dejó, «amando este mundo». Otros colaboradores estaban en misiones: Crescente en Galacia, Tito en Dalmacia, Tíquico en Éfeso. «Sólo Lucas está conmigo» (2 Ti 4:10-12). En su primera defensa ante el tribunal nadie estuvo a su lado, pero el Señor sí, y le dio fuerzas para predicar aun allí.',
        { h: 'Las últimas peticiones' },
        'Pablo pidió a Timoteo que viniera pronto, antes del invierno, y que trajera a Marcos, el mismo que había abandonado el primer viaje, «porque me es útil para el ministerio» (2 Ti 4:11). La reconciliación con Marcos se había completado. Pidió también el capote que dejó en Troas, porque hacía frío, y los libros, sobre todo los pergaminos, quizá copias de las Escrituras (2 Ti 4:13).',
        'Son pedidos muy humanos: compañía, abrigo y lectura. El gran apóstol, al final de su vida, necesitaba a sus amigos y la Palabra de Dios.',
        { h: 'Sin miedo' },
        'Aun así, la carta no es triste. Pablo anima a Timoteo a no avergonzarse del testimonio del Señor, a sufrir penalidades como buen soldado de Jesucristo, a predicar la palabra a tiempo y fuera de tiempo, y a hacer obra de evangelista (2 Ti 1:8; 2:3; 4:2, 5). Y confía: «el Señor me librará de toda obra mala, y me preservará para su reino celestial» (2 Ti 4:18).'
      ],
      pensar: 'Al final de su vida, Pablo pidió que le trajeran a Marcos, a quien antes había rechazado, «porque me es útil para el ministerio» (2 Ti 4:11). ¿Qué te enseña esta reconciliación sobre las relaciones rotas en el servicio a Dios?'
    },
    {
      id: 'd-muerte', n: 'He acabado la carrera', ref: '2 Timoteo 4:6-8; Filipenses 1:21-23; 3:10-14', fecha: 67,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'He peleado la buena batalla, he acabado la carrera, he guardado la fe. Por lo demás, me está guardada la corona de justicia, la cual me dará el Señor, juez justo, en aquel día; y no sólo a mí, sino también a todos los que aman su venida.', ref: '2 Timoteo 4:7-8' },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-catacumbas.webp', alt: 'Cristianos reunidos en secreto en las catacumbas de Roma, orando a la luz de lámparas de aceite', pie: 'La iglesia de Roma siguió adelante en medio de la persecución.', origen: 'ia' }
      ],
      texto: [
        'Pablo sabía que su muerte estaba cerca. «Yo ya estoy para ser sacrificado, y el tiempo de mi partida está cercano» (2 Ti 4:6). La palabra que usa para «sacrificado» evoca la libación, el vino que se derramaba sobre el altar al final de una ofrenda. Pablo veía su muerte como la última ofrenda de una vida entregada a Dios.',
        { h: 'Lo que dice la tradición' },
        'El Nuevo Testamento no narra la muerte de Pablo. Los escritores cristianos antiguos son unánimes en que murió como mártir en Roma, en tiempos de Nerón, que murió en el año 68. Clemente de Roma, hacia el 95, lo menciona junto a Pedro como ejemplo de paciencia hasta la muerte. Según Eusebio y otras fuentes posteriores, fue decapitado, la forma de ejecución que correspondía a un ciudadano romano, y no crucificado como Pedro. La tradición ubica su muerte en las afueras de Roma, junto a la vía Ostiense, y su tumba donde hoy está la basílica de San Pablo Extramuros. Estos detalles vienen de la tradición, no de la Escritura.',
        { h: 'La carrera terminada' },
        'Pablo usó muchas veces la imagen de una carrera. Años antes había dicho a los ancianos de Éfeso que no estimaba preciosa su vida, «con tal que acabe mi carrera con gozo» (Hch 20:24). A los filipenses les escribió que proseguía a la meta, al premio del supremo llamamiento de Dios en Cristo Jesús (Fil 3:14). Ahora podía decir: «he acabado la carrera».',
        'No terminó con amargura, sino con esperanza. Lo esperaba una corona de justicia, no solo a él, sino «a todos los que aman su venida» (2 Ti 4:8). Para Pablo, morir era «partir y estar con Cristo, lo cual es muchísimo mejor» (Fil 1:23).',
        { h: 'El legado' },
        'Pablo dejó iglesias en las principales ciudades del oriente del imperio, colaboradores formados para continuar la obra y trece cartas que la iglesia ha leído durante dos mil años. El perseguidor de Damasco se convirtió en el apóstol de los gentiles, y por medio de su obra el evangelio llegó a pueblos que hoy, como nosotros, viven en lo que entonces era lo último de la tierra.'
      ],
      pensar: 'Pablo terminó su vida diciendo: «He peleado la buena batalla, he acabado la carrera, he guardado la fe» (2 Ti 4:7). ¿Qué necesitas cuidar hoy para poder decir lo mismo al final de tu carrera?'
    }
  ];


  const LINEA = { desde: 25, hasta: 70, hitos: [
    { a: 34, t: 'Conversión' }, { a: 46, t: 'Primer viaje' }, { a: 49, t: 'Concilio' }, { a: 53, t: 'Éfeso' },
    { a: 57, t: 'Arresto' }, { a: 62, t: 'Fin de Hechos' }, { a: 67, t: 'Muerte de Pablo' }
  ] };

  window.RUTA_DATA = {
    titulo: 'Los viajes de Pablo',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Rutas y fronteras de los mapas aproximadas.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'recorrido', grupo: 'Los viajes', n: 'El recorrido completo', info: 'De Tarso y Damasco a los tres viajes, el arresto y Roma', linea: LINEA, estaciones: recorrido },
      { id: 'cartas', grupo: 'Los viajes', n: 'Las cartas en su contexto', info: 'Dónde, cuándo y por qué escribió Pablo cada carta', linea: LINEA, estaciones: cartas },
      { id: 'ciudades', grupo: 'Temas', n: 'Las ciudades', info: 'Antioquía, Filipos, Tesalónica, Atenas, Corinto, Éfeso y Roma', linea: LINEA, estaciones: ciudades },
      { id: 'sufrimientos', grupo: 'Temas', n: 'Los sufrimientos de Pablo', info: '2 Corintios 11 en el mapa y el sentido del sufrimiento', linea: LINEA, estaciones: sufrimientos },
      { id: 'despues', grupo: 'Temas', n: 'Después de Hechos', info: 'La probable liberación, los últimos viajes, la segunda prisión y la muerte de Pablo', linea: LINEA, estaciones: despues }
    ]
  };
})();
