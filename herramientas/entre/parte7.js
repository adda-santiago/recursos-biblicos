/* Entre los Testamentos · ruta VIII. «Cuando vino el cumplimiento del tiempo», y datos del recurso (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const cumplimiento = [
    {
      id: 'lengua-caminos', n: 'Una lengua común, caminos y paz', ref: 'Gálatas 4:4; Hechos 17:26-27; Hechos 21:37; Juan 19:20', fecha: [-27, 60],
      visual: [
        img('../imperio-romano/img/roma-calzada.webp', 'Una calzada romana pavimentada con grandes piedras que atraviesa el campo, con un mojón y viajeros a pie', 'Las calzadas romanas unieron el imperio. Recreación.'),
        mapa({ view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'jerusalen', 'antioquia', 'efeso', 'corinto', 'alejandria', 'tarso'] }),
        tabla({
          titulo: 'Lo que el mundo tenía cuando nació Jesús',
          cab: ['Preparación', 'De dónde vino', 'Cómo sirvió al evangelio'],
          filas: [
            ['Una lengua común', 'La conquista de Alejandro (III.2)', 'El Nuevo Testamento se escribió en griego y se leyó de Roma a Persia'],
            ['Un solo imperio', 'Las conquistas de Roma (VI.1 y VI.5)', 'Los apóstoles cruzaron fronteras sin pasaportes'],
            ['Caminos y mares seguros', 'La paz de Augusto', 'Pablo recorrió miles de kilómetros en sus viajes'],
            ['Leyes y ciudadanía', 'El derecho romano', 'Pablo apeló a sus derechos de ciudadano (Hch 16:37; 25:11)']
          ]
        })
      ],
      texto: [
        'Pablo escribió a los gálatas: «Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley» (Gá 4:4). Jesús no nació en cualquier momento. Dios había preparado el mundo durante siglos, y mucho de esa preparación ocurrió en los años que recorre este recurso.',
        { h: 'Una lengua' },
        'Gracias a Alejandro y a sus sucesores, el griego se hablaba en todo el oriente del Mediterráneo, en Egipto, en Siria y hasta en Roma. Un mensaje escrito en griego podía leerse en Antioquía, en Corinto o en Roma sin traducción. Cuando el tribuno romano arrestó a Pablo en el templo, se sorprendió de que le hablara en griego (Hch 21:37); Pablo, judío de Tarso, hablaba griego y arameo, y era ciudadano romano. Los veintisiete libros del Nuevo Testamento se escribieron en esa lengua común.',
        { h: 'Caminos y paz' },
        'Gracias a Roma, por primera vez en la historia todo el Mediterráneo estaba bajo un solo gobierno. La paz de Augusto terminó con las guerras entre reinos y con buena parte de la piratería. Las calzadas romanas, con sus mojones y sus posadas, unían las ciudades del imperio; los barcos llevaban mercaderías y viajeros de un puerto a otro. Por esos caminos y esos mares viajaron los apóstoles. Pablo pudo ir de Jerusalén a Antioquía, Galacia, Macedonia, Grecia, Asia y Roma sin cruzar una sola frontera.',
        { h: 'Un Dios que gobierna la historia' },
        'Ni Alejandro ni Augusto pensaban en el evangelio cuando conquistaron el mundo. Pero Dios usó sus ambiciones para cumplir su propósito. Pablo lo dijo en Atenas: Dios «de una sangre ha hecho todo el linaje de los hombres» y «les ha prefijado el orden de los tiempos, y los límites de su habitación; para que busquen a Dios» (Hch 17:26-27).',
        'El título de la cruz, escrito «en hebreo, en griego y en latín» (Jn 19:20), resume esa preparación: la lengua de la Escritura, la lengua del mundo y la lengua del imperio anunciaron juntas quién era el crucificado.'
      ],
      pensar: 'Dios usó a conquistadores que no lo conocían para preparar el camino de su Hijo. ¿Qué te dice eso sobre los acontecimientos de tu tiempo que parecen no tener que ver con Dios?'
    },
    {
      id: 'diaspora-temerosos', n: 'Una diáspora con sinagogas en todo el imperio', ref: 'Hechos 13:14-16; Hechos 13:26; Hechos 10:1-2; Hechos 16:13-14; Hechos 17:1-4', fecha: [-250, 60],
      visual: [
        img('../imperios-historia/img/integrador-pentecostes.webp', 'El día de Pentecostés en Jerusalén: los discípulos llenos del Espíritu Santo hablan a una multitud de judíos de muchas naciones', 'Pentecostés: judíos de todas las naciones oyen el evangelio en su propia lengua (Hechos 2). Recreación.'),
        cita('Hechos 13:26', '@@hch/13/26'),
        tabla({
          titulo: 'Tres clases de personas en las sinagogas',
          cab: ['Grupo', 'Quiénes eran', 'Ejemplos en Hechos'],
          filas: [
            ['Judíos', 'Descendientes de Abraham, nacidos en la tierra de Israel o en la diáspora', 'Los judíos de Antioquía de Pisidia (Hch 13:14-16)'],
            ['Prosélitos', 'Gentiles convertidos al judaísmo, circuncidados', 'Nicolás de Antioquía (Hch 6:5); los prosélitos de Pentecostés (Hch 2:10)'],
            ['Temerosos de Dios', 'Gentiles que adoraban al Dios de Israel y asistían a la sinagoga, sin circuncidarse', 'Cornelio (Hch 10:2), Lidia (Hch 16:14), los griegos piadosos de Tesalónica (Hch 17:4)']
          ]
        })
      ],
      texto: [
        'Cuando Pablo llegaba a una ciudad, buscaba primero la sinagoga. Allí encontraba un auditorio preparado: judíos que conocían las Escrituras y esperaban al Mesías, y gentiles que habían aprendido a adorar al Dios de Israel. Esa red de comunidades, extendida por todo el imperio, se formó en los siglos que estudia este recurso.',
        { h: 'Judíos en todas partes' },
        'En el siglo I, los judíos que vivían fuera de la tierra de Israel eran más que los que vivían en ella. Había comunidades en Alejandría, Antioquía, Damasco, Asia Menor, Grecia, Cirene, Roma y Babilonia (III.3). Guardaban el día de reposo, se reunían en sus sinagogas, leían la Escritura en griego y peregrinaban a Jerusalén en las fiestas. Por eso, en Pentecostés, la multitud que oyó a los apóstoles venía de quince regiones distintas (Hch 2:9-11), y muchos volvieron a sus ciudades llevando la noticia.',
        { h: 'Los gentiles que temían a Dios' },
        'Muchos paganos se sintieron atraídos por la fe judía: un solo Dios, creador de todo, una ley moral clara, una Escritura antigua. Algunos se convertían por completo, se circuncidaban y pasaban a ser prosélitos. Otros, más numerosos, asistían a la sinagoga, oraban al Dios de Israel y daban limosnas, sin llegar a circuncidarse: los llamados temerosos de Dios. Pablo se dirigía a ellos expresamente: «Varones hermanos, hijos del linaje de Abraham, y los que entre vosotros teméis a Dios, a vosotros es enviada la palabra de esta salvación» (Hch 13:26).',
        'Cornelio, el centurión de Cesarea, era uno de ellos: «piadoso y temeroso de Dios con toda su casa, y que hacía muchas limosnas al pueblo, y oraba a Dios siempre» (Hch 10:2). También Lidia, la vendedora de púrpura de Tiatira, «que adoraba a Dios» (Hch 16:14). Fueron los primeros gentiles en recibir el evangelio, y el puente por el que la fe en Cristo pasó a las naciones.',
        { h: 'Preparados por la Palabra' },
        'Esos hombres y mujeres ya conocían a Abraham, a Moisés, a David y a los profetas. Cuando oyeron que Jesús era el Cristo prometido, tenían las Escrituras para comprobarlo. Los de Berea, que recibieron la palabra con toda solicitud, escudriñaban cada día las Escrituras para ver si estas cosas eran así (Hch 17:11). La traducción griega de la Biblia (III.4) y la sinagoga (VII.1) habían hecho su trabajo.'
      ],
      pensar: 'Cornelio buscaba a Dios con lo poco que conocía, y Dios le envió a Pedro con el evangelio. ¿Conoces a alguien que busca a Dios y necesita que alguien le hable de Cristo?'
    },
    {
      id: 'esperaban', n: 'Un pueblo que esperaba', ref: 'Lucas 2:25-38; Lucas 1:68-79; Marcos 15:43; Isaías 40:1-2', fecha: [-5, 30],
      visual: [
        img('simeon-templo.webp', 'En un atrio del templo de Jerusalén, un anciano judío de barba blanca, Simeón, sostiene en brazos a un bebé envuelto en pañales y levanta el rostro al cielo con alegría, mientras una joven madre judía, María, y su esposo José, un carpintero de unos treinta años que lleva dos tórtolas en una jaula de mimbre, lo miran asombrados', 'Simeón toma en brazos al niño Jesús en el templo (Lucas 2:25-32). Recreación.'),
        cita('Lucas 2:25-32', '@@lc/2/25-32')
      ],
      texto: [
        'Al comienzo de su evangelio, Lucas presenta a un grupo de personas sencillas que esperaban el cumplimiento de las promesas de Dios. No eran sumos sacerdotes ni reyes. Eran un sacerdote anciano y su esposa, Zacarías y Elisabet; una joven de Nazaret, María; un carpintero, José; unos pastores de Belén; un anciano llamado Simeón y una viuda profetisa llamada Ana. Después de cuatro siglos sin profetas, el Espíritu Santo volvió a hablar, y lo hizo a través de ellos.',
        { h: 'Simeón' },
        'Simeón era un hombre «justo y piadoso, esperaba la consolación de Israel; y el Espíritu Santo estaba sobre él» (Lc 2:25). La consolación de Israel era la que Isaías había anunciado: «Consolaos, consolaos, pueblo mío, dice vuestro Dios» (Is 40:1). Dios le había revelado que no moriría antes de ver al Ungido del Señor. Cuando José y María llevaron al niño al templo, Simeón lo tomó en sus brazos y bendijo a Dios: «Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación» (Lc 2:29-30).',
        'Simeón vio en ese niño lo que el pueblo esperaba y algo más: una luz para revelación a los gentiles y gloria de Israel (Lc 2:32). Las dos esperanzas que este recurso ha seguido, la del pueblo judío y la de las naciones dispersas, se encontraban en ese bebé.',
        { h: 'Ana y los que esperaban' },
        'Ana, una viuda de ochenta y cuatro años, que servía en el templo de noche y de día con ayunos y oraciones, llegó en ese momento, daba gracias a Dios y hablaba del niño «a todos los que esperaban la redención en Jerusalén» (Lc 2:38). Había un grupo, entonces, que esperaba. Treinta años después, otro de ellos, José de Arimatea, «que también esperaba el reino de Dios» (Mr 15:43), sepultaría el cuerpo de Jesús.',
        { h: 'Un remanente fiel' },
        'En medio de un período de reyes violentos, sacerdotes corruptos y grupos enfrentados, Dios se había guardado un remanente que oraba, leía las Escrituras y esperaba. El cántico de Zacarías lo expresa: Dios había visitado y redimido a su pueblo, «para hacer misericordia con nuestros padres, y acordarse de su santo pacto» (Lc 1:72). Las promesas no habían caducado durante los siglos de silencio.'
      ],
      pensar: 'Simeón y Ana esperaron en oración durante años y vieron el cumplimiento. ¿Qué promesa de Dios estás esperando tú, y cómo la esperas: con oración o con impaciencia?'
    },
    {
      id: 'dios-obra', n: 'Dios obra aunque no hable por profetas', ref: 'Gálatas 4:4-5; Hebreos 1:1-2; Isaías 55:10-11; Romanos 15:4', fecha: [-430, -5],
      visual: [
        img('../imperio-romano/img/roma-censo-belen.webp', 'José y María, ella embarazada, llegan a Belén entre una multitud de viajeros que acuden a empadronarse ante funcionarios romanos', 'José y María llegan a Belén por el censo de Augusto. Recreación.'),
        cita('Gálatas 4:4-5', '@@ga/4/4-5'),
        tabla({
          titulo: 'Lo que Dios preparó entre los testamentos',
          cab: ['Preparación', 'Ruta'],
          filas: [
            ['Un pueblo fiel a un solo Dios, sin idolatría', 'II.4 y IV.5'],
            ['Las Escrituras completas y traducidas al griego', 'II.4 y III.4'],
            ['Sinagogas en cada ciudad', 'VII.1 y VIII.2'],
            ['Gentiles que temían al Dios de Israel', 'VIII.2'],
            ['Una lengua común', 'III.2 y VIII.1'],
            ['Un imperio con caminos y paz', 'VI.5 y VIII.1'],
            ['La fe en la resurrección', 'IV.5 y VII.3'],
            ['Un pueblo que esperaba al Mesías', 'VII.8 y VIII.3'],
            ['Las profecías de Daniel cumplidas', 'I.5 y ruta IV']
          ]
        })
      ],
      texto: [
        'El recorrido termina donde empezó: en el silencio entre Malaquías y Mateo. Ahora se puede ver con más claridad que ese silencio no fue vacío. Durante cuatrocientos años, Dios no envió profetas, pero no dejó de obrar.',
        { h: 'Lo que Dios hizo en silencio' },
        'Dios cumplió en estos siglos lo que había anunciado por Daniel: los imperios llegaron y cayeron en el orden previsto, y el rey que profanó el santuario no pudo destruir al pueblo que conocía a su Dios. Preservó a ese pueblo a través de la helenización, la persecución y la guerra. Hizo que su Palabra se tradujera a la lengua del mundo y se leyera cada sábado en cientos de sinagogas. Llevó a gentiles de muchas naciones a adorar al Dios de Israel. Y despertó en muchos corazones la esperanza de que el Ungido estaba por llegar.',
        'Cuando todo estuvo listo, «cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley, para que redimiese a los que estaban bajo la ley, a fin de que recibiésemos la adopción de hijos» (Gá 4:4-5).',
        { h: 'La palabra final' },
        'Hebreos comienza diciendo que Dios habló «muchas veces y de muchas maneras en otro tiempo a los padres por los profetas», y que «en estos postreros días nos ha hablado por el Hijo» (He 1:1-2). El silencio de los profetas terminó con la voz de Juan el Bautista, y la profecía alcanzó su cumplimiento en Jesucristo, la Palabra hecha carne. Por eso la iglesia no espera un nuevo Malaquías ni un libro nuevo: tiene en Cristo y en la Escritura completa la revelación de Dios, y el Espíritu Santo que la ilumina.',
        { h: 'Para quienes esperan hoy' },
        'La historia entre los testamentos es también una enseñanza para la iglesia. Hay épocas en que Dios parece callar y en que los acontecimientos del mundo parecen no tener que ver con su reino. Pero «las cosas que se escribieron antes, para nuestra enseñanza se escribieron, a fin de que por la paciencia y la consolación de las Escrituras, tengamos esperanza» (Ro 15:4). El mismo Dios que preparó el mundo para la primera venida de su Hijo está preparando su regreso.',
        { ejercicio: {
          pregunta: '¿Cuál es la mejor conclusión sobre los cuatrocientos años entre los testamentos?',
          opciones: [
            { t: 'Fueron un tiempo perdido, en que Dios se olvidó de su pueblo.', ok: false, por_que: 'Dios cumplió en ellos sus profecías y preparó al mundo para la venida de su Hijo.' },
            { t: 'Dios no envió profetas, pero gobernó la historia y preparó todo para enviar a su Hijo en el cumplimiento del tiempo.', ok: true, por_que: 'Es lo que enseña Gálatas 4:4 y lo que muestra la historia del período.' },
            { t: 'Los libros escritos en ese tiempo completan la Biblia.', ok: false, por_que: 'Son útiles como historia, pero no son Escritura; la revelación final de Dios es su Hijo (He 1:1-2).' }
          ],
          explicacion: 'El silencio de los profetas no fue el silencio de Dios.'
        } }
      ],
      pensar: 'Dios preparó durante siglos la primera venida de su Hijo, y está preparando la segunda. ¿Vives tú como alguien que espera a Cristo?'
    }
  ];

  const E = window.__ET;
  delete window.__ET;
  const LINEA = { desde: -450, hasta: 75, hitos: [
    { a: -430, t: 'Malaquías' }, { a: -332, t: 'Alejandro' }, { a: -301, t: 'Ipso' }, { a: -200, t: 'Panión' },
    { a: -167, t: 'Antíoco IV' }, { a: -142, t: 'Independencia' }, { a: -63, t: 'Pompeyo' }, { a: -37, t: 'Herodes' },
    { a: -5, t: 'Nace Jesús' }, { a: 70, t: 'Cae el templo' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Entre los Testamentos',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama', info: 'De Malaquías a Mateo, las fuentes, Daniel y los cinco períodos', estaciones: E.panorama, linea: LINEA },
      { id: 'persa', grupo: 'La historia, período por período', n: 'II. El final del período persa', info: 'Yehud, Elefantina, los samaritanos y la ley en el centro (430–332 a.C.)', estaciones: E.persa, linea: LINEA },
      { id: 'ptolomeos', grupo: 'La historia, período por período', n: 'III. Alejandro y los Ptolomeos', info: 'Alejandro, el helenismo, Alejandría, la Septuaginta y los Tobíadas (332–198 a.C.)', estaciones: E.ptolomeos, linea: LINEA },
      { id: 'crisis', grupo: 'La historia, período por período', n: 'IV. Los seléucidas y la crisis', info: 'Panión, el sumo sacerdocio comprado, Antíoco IV, la abominación y los mártires (198–164 a.C.)', estaciones: E.crisis, linea: LINEA },
      { id: 'asmoneos', grupo: 'La historia, período por período', n: 'V. Los macabeos y los asmoneos', info: 'Matatías, Judas, la Dedicación, la independencia y la guerra entre hermanos (167–63 a.C.)', estaciones: E.asmoneos, linea: LINEA },
      { id: 'roma', grupo: 'La historia, período por período', n: 'VI. Roma y Herodes', info: 'Pompeyo, Antípatro, Herodes, el templo y Augusto (63–4 a.C.)', estaciones: E.roma, linea: LINEA },
      { id: 'nacio', grupo: 'El mundo que recibió a Jesús', n: 'VII. Lo que nació en estos siglos', info: 'La sinagoga, los escribas, fariseos, saduceos, esenios, el Sanedrín, los libros y la esperanza del Mesías', estaciones: E.nacio, linea: LINEA },
      { id: 'cumplimiento', grupo: 'El mundo que recibió a Jesús', n: 'VIII. «Cuando vino el cumplimiento del tiempo»', info: 'Cómo Dios preparó el mundo para la venida de su Hijo', estaciones: cumplimiento, linea: LINEA }
    ]
  };
})();
