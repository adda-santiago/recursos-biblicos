/* ==========================================================
   Recursos Bíblicos — El exilio y los retornos · contenido de las rutas
   Motor: ../assets/js/ruta-estudio.js. Geografía: ../assets/js/imperios-geo.js
   (trazos deportacion-722, repoblacion-samaria, campana-605, deportacion, regreso, caida-539, huida-egipto).
   Recurso complementario: abarca Reyes, Crónicas, los profetas, Esdras, Nehemías, Ester y el Nuevo Testamento.
   Fechas coherentes con los recursos de Asiria, Babilonia y Persia. Citas textuales: Reina-Valera 1960.
   ========================================================== */
(() => {
  const OTRA = '../';
  const AS = OTRA + 'imperio-asirio/img/', BA = OTRA + 'imperio-babilonico/img/', PE = OTRA + 'imperio-persa/img/';
  const ORIENTE = [[27.5, 29.0], [39.5, 50.5]];
  const CRECIENTE = [[29.0, 32.0], [38.5, 48.0]];
  const JUDA = [[30.9, 33.9], [33.0, 36.4]];
  const EGIPTO_JUDA = [[29.0, 29.5], [33.0, 37.0]];

  /* ---------------- Ruta 1 · La historia del exilio ---------------- */
  const historia = [
    {
      id: 'advertencia', n: 'Una advertencia desde Moisés', ref: 'Levítico 26:27-45; Deuteronomio 28:36, 63-68; 30:1-10', fecha: -1400,
      visual: [
        { tipo: 'tabla', titulo: 'El patrón', tabla: {
          titulo: 'Lo que Moisés anunció y lo que ocurrió',
          cab: ['Anuncio', 'Pasaje', 'Cumplimiento'],
          filas: [
            ['Seréis esparcidos entre las naciones', 'Lv 26:33; Dt 28:64', 'Israel en Asiria (722 a.C.); Judá en Babilonia (605–586 a.C.)'],
            ['Un rey os llevará a una nación que no conocisteis', 'Dt 28:36', 'Sedequías llevado a Babilonia (2 R 25:7)'],
            ['La tierra gozará de sus días de reposo', 'Lv 26:34-35', 'Setenta años de desolación (2 Cr 36:21)'],
            ['Si os volvéis a Dios, os hará volver', 'Dt 30:1-5', 'Los retornos desde Persia (538–445 a.C.)'],
            ['Dios no olvidará su pacto', 'Lv 26:44-45', 'Israel preservado como pueblo']
          ]
        } }
      ],
      texto: [
        'El exilio es uno de los acontecimientos centrales de la Biblia. Divide la historia de Israel en un antes y un después, explica gran parte de los libros proféticos y da el marco de Esdras, Nehemías, Ester y Daniel. Este recurso lo recorre en cuatro rutas: la historia del exilio, la vida en el exilio, los retornos y el exilio y el regreso en la profecía.',
        { h: 'Anunciado desde el principio' },
        'El exilio no tomó a Israel por sorpresa. Antes de que el pueblo entrara en la tierra prometida, Moisés le advirtió que la tierra era un regalo condicionado a la fidelidad. Si Israel se volvía a otros dioses, Dios lo esparciría: «a vosotros os esparciré entre las naciones, y desenvainaré espada en pos de vosotros; y vuestra tierra estará asolada» (Lv 26:33). «Y Jehová te esparcirá por todos los pueblos, desde un extremo de la tierra hasta el otro extremo» (Dt 28:64).',
        'Moisés anunció incluso un detalle: la tierra gozaría de los años de reposo que Israel no le había dado (Lv 26:34-35). La ley mandaba dejar descansar la tierra cada siete años, y el pueblo no lo cumplió. Siglos después, el cronista explicó el exilio con esas palabras: la tierra reposó «hasta que los setenta años fueron cumplidos» (2 Cr 36:21).',
        { h: 'Pero no para siempre' },
        'Junto a la advertencia, Moisés dejó una promesa. Si en el exilio el pueblo se arrepentía y se volvía a Dios con todo el corazón, «entonces Jehová hará volver a tus cautivos, y tendrá misericordia de ti, y volverá a recogerte de entre todos los pueblos adonde te hubiere esparcido» (Dt 30:3). Y aun en el peor momento, Dios no rompería su pacto: «Y aun con todo esto, estando ellos en tierra de sus enemigos, yo no los desecharé, ni los abominaré para consumirlos» (Lv 26:44).',
        'Este doble mensaje, juicio por la infidelidad y restauración por la gracia, recorre toda la historia del exilio y de los retornos. Las estaciones siguientes muestran cómo se cumplió.'
      ],
      pensar: 'Dios advirtió a Israel durante siglos antes de enviarlo al exilio, y aun entonces prometió hacerlo volver (Dt 30:1-3). ¿Qué te enseña esto sobre la paciencia de Dios y sobre su disposición a restaurar?'
    },
    {
      id: 'caida-samaria', n: 'Israel cae ante Asiria (722 a.C.)', ref: '2 Reyes 17:1-23; Oseas 9:3; Amós 5:27', fecha: -722,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['asiria-720'], lugares: ['samaria', 'ninive', 'gozan', 'r-media', 'jerusalen'], trazos: ['deportacion-722'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: AS + 'asiria-deportacion-samaria.webp', alt: 'Familias israelitas deportadas salen de Samaria escoltadas por soldados asirios con cascos cónicos', pie: 'Israel llevado cautivo a Asiria (2 R 17:6).', origen: 'ia' }
      ],
      texto: [
        'El primer exilio no fue el de Judá, sino el de Israel, el reino del norte, formado por diez tribus después de la división del reino en tiempos de Roboam.',
        { h: 'Dos siglos de idolatría' },
        'Desde su comienzo, el reino del norte se apartó de Dios. Jeroboam puso becerros de oro en Betel y en Dan para que el pueblo no subiera a adorar a Jerusalén, y ninguno de sus diecinueve reyes volvió al Señor de corazón. Acab y Jezabel introdujeron el culto a Baal. Dios envió profetas una y otra vez: Elías, Eliseo, Amós, Oseas. «Jehová amonestó entonces a Israel y a Judá por medio de todos los profetas y de todos los videntes, diciendo: Volveos de vuestros malos caminos… Mas ellos no obedecieron» (2 R 17:13-14).',
        'Amós anunció: «Os haré, pues, transportar más allá de Damasco» (Am 5:27). Oseas advirtió: «No quedarán en la tierra de Jehová» (Os 9:3).',
        { h: 'La caída de Samaria' },
        'Asiria, la gran potencia del siglo VIII a.C., fue el instrumento del juicio. Tiglat-pileser III ya había deportado a parte de la población de Galilea y de Transjordania hacia el año 733 (2 R 15:29). Cuando el rey Oseas de Israel dejó de pagar tributo y buscó la ayuda de Egipto, Salmanasar V sitió Samaria durante tres años. La ciudad cayó en el 722 a.C., y su sucesor, Sargón II, se atribuyó la conquista en sus inscripciones.',
        '«En el año nueve de Oseas, el rey de Asiria tomó Samaria, y llevó a Israel cautivo a Asiria, y los puso en Halah, en Habor junto al río Gozán, y en las ciudades de los medos» (2 R 17:6). Sargón afirma en sus anales que deportó a 27.290 personas.',
        { h: 'Por qué ocurrió' },
        'El autor de Reyes dedica un capítulo entero a explicar la caída. No fue por la fuerza de Asiria, sino «porque los hijos de Israel pecaron contra Jehová su Dios, que los sacó de tierra de Egipto» (2 R 17:7). Adoraron a otros dioses, hicieron imágenes, practicaron la adivinación y sacrificaron a sus hijos en el fuego. «Jehová, por tanto, se airó en gran manera contra Israel, y los quitó de delante de su rostro; y no quedó sino sólo la tribu de Judá» (2 R 17:18).'
      ],
      pensar: 'Dios advirtió a Israel por medio de profetas durante doscientos años antes del exilio (2 R 17:13-14). ¿Qué advertencias de Dios necesitas escuchar hoy, antes de que sea tarde?'
    },
    {
      id: 'samaritanos', n: 'Las diez tribus y el origen de los samaritanos', ref: '2 Reyes 17:24-41; Esdras 4:1-3; Juan 4:9, 20-22; Lucas 2:36', fecha: -720,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['asiria-720'], lugares: ['samaria', 'babilonia', 'hamat', 'ninive'], trazos: ['repoblacion-samaria'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: AS + 'asiria-samaritanos-espiritu.webp', alt: 'Pedro y Juan imponen las manos sobre creyentes samaritanos, que reciben el Espíritu Santo con gozo', pie: 'Siglos después, el evangelio llegó a Samaria (Hch 8:14-17).', origen: 'ia' }
      ],
      texto: [
        'Asiria no solo deportaba a los pueblos vencidos: también traía a otros a ocupar su lugar. Mezclar poblaciones debilitaba la identidad nacional y hacía más difícil la rebelión.',
        { h: 'Una población nueva' },
        '«Y trajo el rey de Asiria gente de Babilonia, de Cuta, de Ava, de Hamat y de Sefarvaim, y los puso en las ciudades de Samaria, en lugar de los hijos de Israel» (2 R 17:24). Los recién llegados trajeron sus dioses. Cuando los leones atacaron a la población, el rey de Asiria envió a uno de los sacerdotes deportados para que les enseñara a temer a Jehová. El resultado fue una religión mezclada: «Temían a Jehová, y honraban a sus dioses, según la costumbre de las naciones de donde habían sido trasladados» (2 R 17:33).',
        { h: 'El origen de los samaritanos' },
        'De la mezcla entre los israelitas que quedaron en la tierra y los pueblos traídos por Asiria surgieron los samaritanos. Con el tiempo abandonaron la idolatría y adoptaron los cinco libros de Moisés, pero los judíos nunca los reconocieron como parte del pueblo. Cuando los judíos volvieron del exilio, los samaritanos ofrecieron ayudar a reconstruir el templo, y Zorobabel rechazó la oferta (Esd 4:1-3). Desde entonces la enemistad fue constante. En tiempos de Jesús, «judíos y samaritanos no se tratan entre sí» (Jn 4:9). Los samaritanos tenían su propio templo en el monte Gerizim.',
        'Por eso tienen tanta fuerza la parábola del buen samaritano, la conversación de Jesús con la mujer samaritana, y la llegada del evangelio a Samaria en Hechos 8, cuando los samaritanos recibieron el mismo Espíritu Santo que los judíos.',
        { h: '¿Se perdieron las diez tribus?' },
        'Se habla a veces de las «diez tribus perdidas», como si hubieran desaparecido por completo. La Biblia muestra otra cosa. Muchos israelitas del norte se habían trasladado a Judá durante la división del reino y en los años siguientes (2 Cr 11:16; 15:9; 30:1-11). La profetisa Ana, en el templo, era de la tribu de Aser (Lc 2:36). Santiago escribe «a las doce tribus que están en la dispersión» (Stg 1:1), y Apocalipsis cuenta doce mil de cada tribu (Ap 7:4-8). Dios conoce a su pueblo.'
      ],
      pensar: 'Los samaritanos temían a Jehová y, al mismo tiempo, honraban a sus dioses (2 R 17:33). ¿Hay algo en tu vida que compita con Dios por tu corazón?'
    },
    {
      id: 'juda-advertida', n: 'Judá, advertida', ref: '2 Reyes 18–23; 20:16-18; 21:10-15; 23:25-27; Jeremías 7:1-15; 25:1-11', fecha: [-701, -609],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: AS + 'asiria-ezequias.webp', alt: 'El rey Ezequías, arrodillado en el templo de Jerusalén, extiende una carta delante del Señor y ora', pie: 'Ezequías ora ante la amenaza asiria (2 R 19:14).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Reyes', tabla: {
          titulo: 'Los últimos reyes de Judá',
          cab: ['Rey', 'Reinado aprox.', 'Ante Dios', 'Pasaje'],
          filas: [
            ['Ezequías', '715–686 a.C.', 'Fiel; Dios libra a Jerusalén de Asiria', '2 R 18–20'],
            ['Manasés', '686–642 a.C.', 'El peor; se arrepiente al final', '2 R 21; 2 Cr 33'],
            ['Josías', '640–609 a.C.', 'Gran reforma; muere en Meguido', '2 R 22–23'],
            ['Joacaz', '609 a.C.', 'Malo; llevado a Egipto', '2 R 23:31-34'],
            ['Joacim', '609–598 a.C.', 'Malo; quema el rollo de Jeremías', '2 R 23:36–24:6; Jer 36'],
            ['Joaquín', '598–597 a.C.', 'Malo; llevado a Babilonia', '2 R 24:8-16'],
            ['Sedequías', '597–586 a.C.', 'Malo; Jerusalén destruida', '2 R 24:17–25:7']
          ]
        } }
      ],
      texto: [
        'Judá vio caer a su hermano del norte y tuvo más de un siglo para aprender la lección. Dios le dio reyes fieles, profetas y una gran reforma. Pero al final siguió el mismo camino.',
        { h: 'Ezequías y el anuncio de Babilonia' },
        'El rey Ezequías fue fiel, y Dios libró milagrosamente a Jerusalén del ejército asirio de Senaquerib en el 701 a.C. Pero cuando unos enviados del rey de Babilonia lo visitaron, Ezequías les mostró con orgullo todos sus tesoros. Isaías le anunció: «He aquí vienen días en que todo lo que está en tu casa… será llevado a Babilonia, sin quedar nada» (2 R 20:17). En ese momento, Babilonia era una potencia menor bajo el dominio asirio. Isaías anunció el exilio babilónico más de cien años antes.',
        { h: 'Manasés' },
        'El hijo de Ezequías, Manasés, reinó cincuenta y cinco años y fue el rey más perverso de Judá: reconstruyó los altares de Baal, puso imágenes en el templo, practicó la hechicería y derramó mucha sangre inocente. Aunque al final de su vida se arrepintió (2 Cr 33:12-13), el daño estaba hecho. Dios anunció que traería sobre Jerusalén un mal tal que «al que lo oyere le retiñirán ambos oídos» (2 R 21:12).',
        { h: 'Josías: una reforma tardía' },
        'El nieto de Manasés, Josías, encontró en el templo el libro de la ley, rasgó sus vestidos y emprendió la mayor reforma de la historia de Judá: destruyó los ídolos, limpió el templo y celebró una pascua como no se había celebrado desde los jueces. «No hubo otro rey antes de él, que se convirtiese a Jehová de todo su corazón» (2 R 23:25). Sin embargo, el texto agrega: «Con todo eso, Jehová no desistió del ardor con que su gran ira se había encendido contra Judá» (2 R 23:26). La reforma fue sincera en el rey, pero superficial en el pueblo, y no sobrevivió a su muerte en Meguido en el 609 a.C.',
        { h: 'Jeremías' },
        'En esos años Dios levantó a Jeremías, que durante cuarenta años advirtió a Judá. Se paró a la puerta del templo para denunciar a los que confiaban en el edificio mientras vivían en pecado (Jer 7:4). Y anunció con precisión: «servirán estas naciones al rey de Babilonia setenta años» (Jer 25:11).'
      ],
      pensar: 'La reforma de Josías fue sincera en el rey, pero no cambió el corazón del pueblo (2 R 23:25-27). ¿Qué diferencia hay entre un cambio exterior y un arrepentimiento verdadero?'
    },
    {
      id: 'deportacion-605', n: 'La primera deportación (605 a.C.)', ref: 'Daniel 1:1-7; 2 Reyes 24:1; Jeremías 25:1; 46:2', fecha: -605,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['babilonia-570'], lugares: ['carquemis', 'jerusalen', 'babilonia', 'ribla'], trazos: ['campana-605', 'deportacion'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-escuela-escribas.webp', alt: 'Jóvenes judíos aprenden a escribir en tablillas de arcilla en la corte de Babilonia', pie: 'Daniel y sus compañeros en la corte de Babilonia (Dn 1:3-5).', origen: 'ia' }
      ],
      texto: [
        'El exilio de Judá no ocurrió de una sola vez. Hubo tres deportaciones principales, en 605, 597 y 586 a.C. La primera llevó a Babilonia a un grupo pequeño, pero entre ellos estaba un joven que marcaría la historia: Daniel.',
        { h: 'Carquemis' },
        'En el 605 a.C., el príncipe heredero de Babilonia, Nabucodonosor, derrotó al ejército egipcio en Carquemis, junto al Éufrates (Jer 46:2). Con esa victoria, Babilonia se convirtió en la dueña del Medio Oriente, y Judá, que era vasallo de Egipto, pasó a su dominio. Ese mismo año murió su padre, Nabopolasar, y Nabucodonosor volvió a Babilonia para ser coronado.',
        { h: 'Daniel y sus compañeros' },
        '«En el año tercero del reinado de Joacim rey de Judá, vino Nabucodonosor rey de Babilonia a Jerusalén, y la sitió. Y el Señor entregó en sus manos a Joacim rey de Judá, y parte de los utensilios de la casa de Dios» (Dn 1:1-2). Jeremías fecha el mismo año como el cuarto de Joacim (Jer 25:1): la diferencia se explica porque en Babilonia el primer año de un rey se contaba desde el año nuevo siguiente a su ascenso, y en Judá no.',
        'Nabucodonosor llevó a Babilonia a jóvenes de la familia real y de la nobleza, «muchachos en quienes no hubiese tacha alguna, de buen parecer, enseñados en toda sabiduría» (Dn 1:4), para formarlos durante tres años en la lengua y la cultura de los caldeos y ponerlos al servicio del rey. Entre ellos estaban Daniel, Ananías, Misael y Azarías, a quienes se les dieron nombres babilonios: Beltsasar, Sadrac, Mesac y Abed-nego. Se cumplía lo que Isaías había anunciado a Ezequías: algunos de sus descendientes servirían en el palacio del rey de Babilonia (2 R 20:18).',
        { h: 'El comienzo de los setenta años' },
        'Muchos cuentan los setenta años de servidumbre anunciados por Jeremías desde esta primera deportación, en el 605 a.C., hasta el primer retorno, hacia el 538 a.C. La ruta Los retornos explica los dos cálculos posibles.',
        'Joacim se sometió a Babilonia, pero tres años después se rebeló (2 R 24:1). Esa rebelión trajo la segunda deportación.'
      ],
      pensar: 'Daniel fue llevado a una tierra extraña, recibió un nombre pagano y fue educado en otra cultura, pero se propuso en su corazón no contaminarse (Dn 1:8). ¿Cómo puedes mantener tu fidelidad a Dios en un ambiente que no lo honra?'
    },
    {
      id: 'deportacion-597', n: 'La segunda deportación (597 a.C.)', ref: '2 Reyes 24:8-17; Ezequiel 1:1-3; Jeremías 24; 52:28', fecha: -597,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['babilonia-570'], lugares: ['jerusalen', 'babilonia', 'tel-abib', 'ribla', 'carquemis'], trazos: ['deportacion'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-camino-exilio.webp', alt: 'Una larga columna de cautivos de Judá camina junto al Éufrates escoltada por soldados babilonios', pie: 'Los cautivos de Judá camino a Babilonia.', origen: 'ia' }
      ],
      texto: [
        'Joacim murió durante la rebelión, y su hijo Joaquín, de dieciocho años, reinó apenas tres meses. Nabucodonosor sitió Jerusalén, y Joaquín se rindió con su madre, sus siervos y sus príncipes en el 597 a.C.',
        { h: 'La élite de Judá, al exilio' },
        'Esta vez la deportación fue mucho mayor. Nabucodonosor se llevó los tesoros del templo y del palacio, «y llevó en cautiverio a toda Jerusalén, a todos los príncipes, y a todos los hombres valientes, hasta diez mil cautivos, y a todos los artesanos y herreros; no quedó nadie, excepto los pobres del pueblo de la tierra» (2 R 24:14). Babilonia se llevó a los líderes, los soldados y los que sabían fabricar armas, para que Judá no pudiera rebelarse otra vez.',
        'Jeremías da una cifra menor para esta deportación: tres mil veintitrés hombres de Judá (Jer 52:28). Es probable que cuente solo a los varones adultos de Judá, mientras que Reyes incluye a otros grupos, o que se refiera a una etapa distinta de la deportación.',
        { h: 'Ezequiel entre los cautivos' },
        'Entre los deportados iba un joven sacerdote llamado Ezequiel. Cinco años después, junto al río Quebar, un canal de riego cerca de Nipur, en Babilonia, «los cielos se abrieron, y vi visiones de Dios» (Ez 1:1). Ezequiel fue el profeta de los exiliados. Los deportados se establecieron en lugares como Tel-abib, junto al Quebar (Ez 3:15).',
        { h: 'Higos buenos y higos malos' },
        'Los que quedaron en Jerusalén se consideraban afortunados, y pensaban que los deportados eran los castigados. Dios mostró a Jeremías lo contrario en una visión de dos cestas de higos: los higos buenos eran los deportados a Babilonia, a quienes Dios cuidaría y haría volver, «y les daré corazón para que me conozcan» (Jer 24:7); los higos malos eran el rey Sedequías y los que se quedaron, que serían destruidos.',
        'Nabucodonosor puso en el trono a Matanías, tío de Joaquín, y le cambió el nombre por Sedequías (2 R 24:17). Sería el último rey de Judá.'
      ],
      pensar: 'Los que quedaron en Jerusalén creían que eran los bendecidos, pero Dios dijo que su esperanza estaba en los que habían sido llevados al exilio (Jer 24). ¿Cómo puede Dios obrar en tu vida por medio de una pérdida que parecía un castigo?'
    },
    {
      id: 'destruccion-586', n: 'La destrucción de Jerusalén (586 a.C.)', ref: '2 Reyes 25:1-21; Jeremías 39; 52; 2 Crónicas 36:15-21; Lamentaciones 1:1', fecha: -586,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-jerusalen-sitiada.webp', alt: 'Jerusalén sitiada de noche, rodeada por los campamentos y torres de asedio del ejército babilónico', pie: 'Jerusalén sitiada por Babilonia (2 R 25:1-2).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['babilonia-570'], lugares: ['jerusalen', 'ribla', 'babilonia', 'laquis'], trazos: ['deportacion'] } }
      ],
      texto: [
        'Sedequías juró lealtad a Nabucodonosor, pero, presionado por sus príncipes y confiando en Egipto, se rebeló. Fue la última rebelión de Judá.',
        { h: 'El sitio' },
        'En el año noveno de Sedequías, el ejército babilónico rodeó Jerusalén y la sitió durante un año y medio. Las ciudades fortificadas de Judá caían una tras otra; Jeremías menciona que solo quedaban Laquis y Azeca (Jer 34:7). En la ciudad, el hambre se volvió terrible. Jeremías aconsejaba rendirse, y fue acusado de traidor, encarcelado y arrojado a una cisterna.',
        'En el año undécimo de Sedequías, los babilonios abrieron brecha en el muro. Sedequías huyó de noche con sus soldados, pero fue alcanzado en la llanura de Jericó y llevado ante Nabucodonosor en Ribla, en Siria. «Y degolló el rey de Babilonia a los hijos de Sedequías en presencia de éste en Ribla… Y sacó los ojos del rey Sedequías, y le aprisionó con grillos para llevarle a Babilonia» (Jer 39:6-7). Lo último que vio el último rey de Judá fue la muerte de sus hijos.',
        { h: 'El templo en llamas' },
        'Un mes después, Nabuzaradán, capitán de la guardia, llegó a Jerusalén. «Y quemó la casa de Jehová, y la casa del rey, y todas las casas de Jerusalén» (2 R 25:9). Derribaron los muros, se llevaron las columnas de bronce, el mar de bronce y los utensilios del templo, y deportaron al resto de la población, dejando solo a los más pobres para cultivar la tierra. Era el año 586 a.C. El templo de Salomón, que había estado en pie casi cuatrocientos años, fue destruido. La tradición judía recuerda esta destrucción cada año con un ayuno, el 9 del mes de Av.',
        { h: 'No hubo ya remedio' },
        'El cronista resume el sentido de la tragedia: Dios había enviado constantemente a sus mensajeros, «porque él tenía misericordia de su pueblo… Mas ellos hacían escarnio de los mensajeros de Dios, y menospreciaban sus palabras, burlándose de sus profetas, hasta que subió la ira de Jehová contra su pueblo, y no hubo ya remedio» (2 Cr 36:15-16).',
        'El libro de Lamentaciones, que la tradición atribuye a Jeremías, llora la ciudad destruida: «¡Cómo ha quedado sola la ciudad populosa! La grande entre las naciones se ha vuelto como viuda» (Lm 1:1).'
      ],
      pensar: 'El cronista dice que Dios envió mensajeros «constantemente» porque tenía misericordia, hasta que «no hubo ya remedio» (2 Cr 36:15-16). ¿Qué te enseña esto sobre la seriedad de rechazar una y otra vez la voz de Dios?'
    },
    {
      id: 'gedalias-egipto', n: 'Gedalías y la huida a Egipto', ref: 'Jeremías 40–44; 2 Reyes 25:22-26', fecha: [-586, -582],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: EGIPTO_JUDA, capas: ['babilonia-570', 'egipto-570'], lugares: ['jerusalen', 'mizpa', 'belen', 'tafnes', 'menfis'], trazos: ['huida-egipto'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/exi-jeremias-ruinas.webp', alt: 'El profeta Jeremías, anciano, sentado entre las ruinas humeantes de Jerusalén, llora con el rostro entre las manos mientras el sol se pone sobre los muros derribados', pie: 'Jeremías entre las ruinas de Jerusalén.', origen: 'ia' }
      ],
      texto: [
        'Después de la destrucción, Nabucodonosor nombró gobernador de Judá a Gedalías, de una familia de escribas que había protegido a Jeremías. Gedalías se instaló en Mizpa, al norte de Jerusalén.',
        { h: 'Jeremías se queda' },
        'Nabuzaradán liberó a Jeremías de sus cadenas y le dio a elegir: ir a Babilonia, donde sería bien tratado, o quedarse en la tierra. «Si prefieres quedarte, vuélvete a Gedalías… y vive con él en medio del pueblo» (Jer 40:5). Jeremías eligió quedarse con los pobres de Judá.',
        'Por un tiempo hubo paz. Gedalías animó a los que quedaban a servir a Babilonia, a cosechar y a vivir en sus ciudades, y muchos judíos que habían huido a los países vecinos regresaron.',
        { h: 'El asesinato de Gedalías' },
        'Pero Ismael, un miembro de la familia real apoyado por el rey de los amonitas, asesinó a Gedalías, a los judíos que estaban con él y a los soldados babilonios de Mizpa (Jer 41:1-3). Los demás, temiendo la venganza de Babilonia, decidieron huir a Egipto.',
        { h: 'Contra la palabra de Dios' },
        'Antes de partir, los líderes pidieron a Jeremías que consultara a Dios, y prometieron obedecer lo que dijera. Diez días después, la respuesta llegó: «Si os quedareis quietos en esta tierra, os edificaré, y no os destruiré; os plantaré, y no os arrancaré» (Jer 42:10). Si iban a Egipto, la espada y el hambre los alcanzarían allí.',
        'Los líderes acusaron a Jeremías de mentir y se llevaron a todo el remanente, incluidos Jeremías y su secretario Baruc, a Egipto, «porque no obedecieron a la voz de Jehová; y llegaron hasta Tafnes» (Jer 43:7), una ciudad fronteriza en el delta del Nilo. Allí Jeremías siguió profetizando contra la idolatría de los judíos, que ofrecían incienso a «la reina del cielo» (Jer 44:17). Allí termina lo que la Biblia cuenta de su vida.',
        'Hubo una tercera deportación pequeña en el 582 a.C. (Jer 52:30). Así, la tierra quedó casi vacía, como Moisés había anunciado.'
      ],
      pensar: 'Los líderes pidieron la palabra de Dios prometiendo obedecerla, pero cuando no les gustó la respuesta, la rechazaron (Jer 42–43). ¿Buscas la voluntad de Dios dispuesto a obedecerla, o solo esperando que confirme lo que ya decidiste?'
    },
    {
      id: 'joaquin-liberado', n: 'Una luz al final: Joaquín liberado', ref: '2 Reyes 25:27-30; Jeremías 52:31-34; Mateo 1:11-12', fecha: -562,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/exi-joaquin-liberado.webp', alt: 'En el palacio de Babilonia, el rey Evil-merodac, sentado en su trono, recibe con benevolencia a Joaquín, el anciano rey de Judá recién liberado de la cárcel, que lleva ropas nuevas, mientras otros reyes vasallos observan', pie: 'Joaquín liberado de la cárcel (2 R 25:27-28).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Hallazgo', tabla: {
          titulo: 'Las tablillas de las raciones de Babilonia',
          cab: ['Dato', 'Detalle'],
          filas: [
            ['Qué son', 'Tablillas de arcilla con listas de raciones de aceite entregadas a prisioneros y extranjeros en Babilonia'],
            ['Dónde', 'Encontradas en el palacio de Nabucodonosor; hoy en Berlín'],
            ['Qué mencionan', 'Raciones para «Joaquín, rey de la tierra de Judá» y sus cinco hijos'],
            ['Fecha', 'Hacia 592 a.C., durante el cautiverio de Joaquín'],
            ['Qué confirman', 'La presencia del rey de Judá y su familia en Babilonia, como narra 2 Reyes']
          ],
          nota: 'La imagen de esta estación es una recreación de la escena de 2 Reyes 25, no de las tablillas.'
        } }
      ],
      texto: [
        'El libro de Reyes no termina con la destrucción de Jerusalén, sino con una escena pequeña y llena de significado, ocurrida veintiséis años después en Babilonia.',
        { h: 'Joaquín sale de la cárcel' },
        '«Aconteció a los treinta y siete años del cautiverio de Joaquín rey de Judá… que Evil-merodac rey de Babilonia, en el primer año de su reinado, libertó a Joaquín rey de Judá, sacándolo de la cárcel; y le habló con benevolencia, y puso su trono más alto que los tronos de los reyes que estaban con él en Babilonia» (2 R 25:27-28). Era el año 562 a.C. Nabucodonosor acababa de morir, y su hijo Amel-Marduk, el Evil-merodac de la Biblia, liberó al rey cautivo. Joaquín cambió sus vestidos de prisionero y comió a la mesa del rey todos los días de su vida.',
        { h: 'Confirmado por la arqueología' },
        'A comienzos del siglo XX se encontraron en Babilonia unas tablillas de arcilla con listas de raciones de aceite para prisioneros y extranjeros. Entre ellas se menciona a «Joaquín, rey de la tierra de Judá» y a sus hijos. El rey de Judá estuvo realmente en Babilonia, y sus captores lo seguían llamando rey.',
        { h: 'Por qué termina así' },
        'El autor de Reyes eligió terminar su libro con esta escena. Después de tanto juicio, deja una pequeña luz: la línea de David no se había extinguido. Dios había prometido a David que su descendencia reinaría para siempre (2 S 7:16), y aunque no había trono en Jerusalén, el heredero de David estaba vivo y era honrado.',
        'Joaquín, también llamado Jeconías, aparece en la genealogía de Jesús en Mateo: «Josías engendró a Jeconías y a sus hermanos, en el tiempo de la deportación a Babilonia. Después de la deportación a Babilonia, Jeconías engendró a Salatiel, y Salatiel a Zorobabel» (Mt 1:11-12). Su nieto Zorobabel encabezaría el primer retorno, y de su linaje nacería, siglos después, el Mesías.',
        'La historia del exilio no termina en las ruinas. La ruta La vida en el exilio muestra cómo vivió el pueblo en Babilonia, y la ruta Los retornos, cómo Dios cumplió su promesa.'
      ],
      pensar: 'Reyes termina con el heredero de David liberado y sentado a la mesa del rey: una señal de que Dios no había olvidado su promesa (2 R 25:27-30). ¿Qué pequeñas señales de la fidelidad de Dios puedes ver en tus tiempos difíciles?'
    }
  ];

  /* ---------------- Ruta 2 · La vida en el exilio ---------------- */
  const vida = [
    {
      id: 'rios-babilonia', n: 'Junto a los ríos de Babilonia', ref: 'Salmo 137; Lamentaciones 1:1-4; 3:19-33; Isaías 40:1-2', fecha: -586,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-arpas-sauces.webp', alt: 'Cautivos judíos sentados junto a un río de Babilonia, con sus arpas colgadas de los sauces', pie: '«Sobre los sauces en medio de ella colgamos nuestras arpas» (Sal 137:2).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad.', ref: 'Lamentaciones 3:22-23' }
      ],
      texto: [
        'Esta ruta muestra cómo vivió el pueblo de Dios en el exilio, qué aprendió y cómo cambió su fe. Comienza con el dolor.',
        { h: 'Un canto de dolor' },
        'El Salmo 137 recoge la voz de los cautivos: «Junto a los ríos de Babilonia, allí nos sentábamos, y aun llorábamos, acordándonos de Sion. Sobre los sauces en medio de ella colgamos nuestras arpas» (Sal 137:1-2). Babilonia estaba cruzada por el Éufrates y por una red de canales de riego; a su orilla se sentaban los exiliados. Sus captores les pedían, quizá con burla, que cantaran los cánticos de Sion. «¿Cómo cantaremos cántico de Jehová en tierra de extraños?» (Sal 137:4).',
        'Y hacen un juramento: «Si me olvidare de ti, oh Jerusalén, pierda mi diestra su destreza» (Sal 137:5). El exilio no borró el amor por Jerusalén; lo hizo más profundo. El final del salmo, que pide justicia contra Babilonia y Edom, expresa el clamor de un pueblo que había visto morir a sus hijos. No es un modelo para la venganza personal, sino una oración que pone el juicio en las manos de Dios.',
        { h: 'Lamentaciones' },
        'El libro de Lamentaciones son cinco poemas sobre la destrucción de Jerusalén. Cuatro de ellos son acrósticos: cada verso o grupo de versos comienza con una letra sucesiva del alfabeto hebreo, como si el dolor se expresara de la A a la Z. Describen el hambre, la ciudad vacía, el templo profanado y la vergüenza del pueblo.',
        'Pero en el centro del libro, en el capítulo 3, en medio de la oscuridad, aparece la esperanza: «Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad» (Lm 3:22-23). El autor no niega el dolor, pero afirma que Dios sigue siendo fiel.',
        { h: 'Consolaos' },
        'Isaías, más de un siglo antes, había escrito palabras para este momento: «Consolaos, consolaos, pueblo mío, dice vuestro Dios. Hablad al corazón de Jerusalén; decidle a voces que su tiempo es ya cumplido, que su pecado es perdonado» (Is 40:1-2). Los capítulos 40 al 66 de Isaías son un mensaje de consuelo para los exiliados.'
      ],
      pensar: 'En medio de las ruinas, el autor de Lamentaciones pudo decir: «Nuevas son cada mañana; grande es tu fidelidad» (Lm 3:23). ¿Cómo puedes recordar la fidelidad de Dios en medio de tu dolor?'
    },
    {
      id: 'carta-jeremias', n: 'La carta de Jeremías a los cautivos', ref: 'Jeremías 29:1-14; 28:1-4', fecha: -594,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/exi-carta-jeremias.webp', alt: 'En una habitación sencilla de Jerusalén, el profeta Jeremías dicta una carta a su secretario Baruc, que escribe en un rollo, mientras dos mensajeros esperan para llevarla a Babilonia', pie: 'Jeremías escribe a los cautivos en Babilonia (Jer 29:1).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y procurad la paz de la ciudad a la cual os hice transportar, y rogad por ella a Jehová; porque en su paz tendréis vosotros paz.', ref: 'Jeremías 29:7' }
      ],
      texto: [
        'Entre la segunda deportación y la destrucción de Jerusalén, Jeremías envió una carta desde Jerusalén a los deportados en Babilonia. Es una de las cartas más importantes de la Biblia.',
        { h: 'Falsas esperanzas' },
        'En Babilonia y en Jerusalén había profetas que anunciaban un regreso rápido. Hananías profetizó que en dos años Dios rompería el yugo de Babilonia y traería de vuelta a Joaquín y a los utensilios del templo (Jer 28:2-4). Era lo que todos querían oír. Pero era mentira, y Hananías murió ese mismo año, como Jeremías le anunció.',
        { h: 'Echad raíces' },
        'La carta de Jeremías decía lo contrario: el exilio sería largo. «Edificad casas, y habitadlas; y plantad huertos, y comed del fruto de ellos. Casaos, y engendrad hijos e hijas… y multiplicaos ahí, y no os disminuyáis» (Jer 29:5-6). No debían vivir con las maletas hechas, esperando volver mañana, sino construir una vida en Babilonia.',
        'Y algo más sorprendente: «Y procurad la paz de la ciudad a la cual os hice transportar, y rogad por ella a Jehová; porque en su paz tendréis vosotros paz» (Jer 29:7). Debían orar por la ciudad de sus enemigos y buscar su bien. La palabra hebrea para paz, shalom, significa bienestar completo.',
        { h: 'Pensamientos de paz' },
        'Pero la carta no era solo resignación. «Cuando en Babilonia se cumplan los setenta años, yo os visitaré, y despertaré sobre vosotros mi buena palabra, para haceros volver a este lugar. Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis» (Jer 29:10-11).',
        'El conocido versículo 11 fue escrito para personas en el peor momento de su historia, lejos de su tierra, sabiendo que la mayoría no viviría para ver el regreso. Dios tenía un plan, pero ese plan pasaba por setenta años de exilio. Y añade: «me buscaréis y me hallaréis, porque me buscaréis de todo vuestro corazón» (Jer 29:13). En el exilio, sin templo, el pueblo aprendería a buscar a Dios de verdad.'
      ],
      pensar: 'Jeremías mandó a los cautivos buscar la paz de Babilonia y orar por ella (Jer 29:7). ¿Qué significa para ti buscar el bien de la ciudad donde vives, aunque no comparta tu fe?'
    },
    {
      id: 'ezequiel', n: 'Ezequiel: la gloria se va y la gloria vuelve', ref: 'Ezequiel 1; 8–11; 37:1-14; 43:1-7', fecha: [-593, -571],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-ezequiel-quebar.webp', alt: 'El profeta Ezequiel habla a un grupo de deportados judíos junto a un canal de riego en Babilonia', pie: 'Ezequiel entre los cautivos junto al río Quebar (Ez 1:1).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Los huesos secos', src: 'img/exi-huesos-secos.webp', alt: 'En un valle desolado al atardecer, el profeta Ezequiel extiende los brazos mientras un viento poderoso recorre el valle y una gran multitud de personas se levanta llena de vida', pie: '«Huesos secos, oíd palabra de Jehová» (Ez 37:4).', origen: 'ia' }
      ],
      texto: [
        'Ezequiel fue el profeta de los cautivos. Era sacerdote y fue deportado en el 597 a.C. Profetizó en Babilonia durante más de veinte años, antes y después de la destrucción de Jerusalén.',
        { h: 'Dios en Babilonia' },
        'Su primera visión ocurrió junto al río Quebar: un torbellino, seres vivientes con cuatro caras, ruedas llenas de ojos, y sobre ellos un trono con alguien semejante a un hombre, rodeado de un resplandor como el arco iris. «Esta fue la visión de la semejanza de la gloria de Jehová» (Ez 1:28). La gloria de Dios, que los israelitas asociaban con el templo de Jerusalén, se le apareció en tierra pagana. Dios no estaba atado a un lugar.',
        { h: 'La gloria se va' },
        'En los capítulos 8 al 11, Ezequiel es llevado en visión a Jerusalén y ve la idolatría en el mismo templo: imágenes, mujeres que lloran a Tamuz y hombres que adoran al sol de espaldas al santuario. Entonces ve algo terrible: la gloria de Jehová se eleva de encima del umbral de la casa (Ez 10:18), sale por la puerta oriental y se detiene sobre el monte que está al oriente de la ciudad (Ez 11:23). Dios abandonó su templo antes de que Babilonia lo destruyera.',
        'Pero a los exiliados les dio una promesa: «Aunque les he arrojado lejos entre las naciones… con todo eso les seré por un pequeño santuario en las tierras adonde lleguen» (Ez 11:16). Dios mismo sería su santuario en el exilio.',
        { h: 'Los huesos secos' },
        'Cuando llegó la noticia de la caída de Jerusalén, el pueblo decía: «Nuestros huesos se secaron, y pereció nuestra esperanza» (Ez 37:11). Dios llevó a Ezequiel a un valle lleno de huesos secos y le preguntó: «¿vivirán estos huesos?» (Ez 37:3). Cuando Ezequiel profetizó, los huesos se juntaron, se cubrieron de carne, y el espíritu entró en ellos, y vivieron. Dios explicó: «todos estos huesos son la casa de Israel» (Ez 37:11). Los abriría de sus sepulcros y los haría volver a su tierra.',
        { h: 'La gloria vuelve' },
        'Al final del libro, Ezequiel ve un templo nuevo y la gloria de Dios que vuelve por el mismo camino por el que se fue, desde el oriente: «Y la gloria de Jehová entró en la casa por la vía de la puerta que daba al oriente» (Ez 43:4). La interpretación premilenial entiende que este templo de Ezequiel 40 al 48 corresponde al reino milenial de Cristo.'
      ],
      pensar: 'Ezequiel vio la gloria de Dios en Babilonia, lejos del templo (Ez 1:28), y Dios prometió ser un santuario para los exiliados (Ez 11:16). ¿Cómo te consuela saber que la presencia de Dios no depende del lugar donde estés?'
    },
    {
      id: 'daniel-corte', n: 'Daniel en la corte de Babilonia y Persia', ref: 'Daniel 1:8; 2:46-49; 3; 6:10; 9:1-3', fecha: [-605, -536],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/exi-daniel-ventana.webp', alt: 'Daniel, ya anciano, de rodillas junto a una ventana abierta de su casa en Babilonia que mira hacia el occidente, ora con las manos levantadas mientras la luz del sol entra en la habitación', pie: '«Abiertas las ventanas de su cámara que daban hacia Jerusalén» (Dn 6:10).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'El foso', src: PE + 'persia-daniel-foso.webp', alt: 'El profeta Daniel, anciano, de pie en calma dentro del foso de los leones, iluminado por la luz que entra desde arriba', pie: 'Daniel en el foso de los leones (Dn 6:22).', origen: 'ia' }
      ],
      texto: [
        'Daniel vivió todo el exilio. Fue llevado a Babilonia en el 605 a.C., siendo joven, y todavía estaba vivo en el tercer año de Ciro, hacia el 536 a.C. (Dn 10:1). Sirvió a reyes de Babilonia y de Persia, y su vida muestra cómo ser fiel a Dios en un imperio pagano.',
        { h: 'Fiel en lo pequeño' },
        'Desde el principio, Daniel tomó una decisión: «propuso en su corazón no contaminarse con la porción de la comida del rey» (Dn 1:8). Aceptó el idioma, la educación y aun el nombre babilonio, pero no lo que contradecía la ley de Dios. Pidió con respeto una alternativa, y Dios le dio favor.',
        { h: 'Influencia en la corte' },
        'Dios le dio a Daniel sabiduría para interpretar el sueño de Nabucodonosor, y el rey lo puso como gobernador de la provincia de Babilonia y jefe de los sabios (Dn 2:48). Sus tres amigos fueron echados al horno de fuego por no adorar la estatua del rey, y Dios los libró. Nabucodonosor terminó reconociendo al Dios Altísimo (Dn 4:34-37). Daniel interpretó la escritura en la pared la noche en que cayó Babilonia, y sirvió también bajo Darío de Media y Ciro de Persia.',
        { h: 'Las ventanas hacia Jerusalén' },
        'Cuando sus enemigos lograron que el rey prohibiera orar a nadie que no fuera el rey durante treinta días, Daniel siguió con su costumbre: «entró en su casa, y abiertas las ventanas de su cámara que daban hacia Jerusalén, se arrodillaba tres veces al día, y oraba y daba gracias delante de su Dios, como lo solía hacer antes» (Dn 6:10). Oraba hacia una ciudad en ruinas, recordando la oración de Salomón: si el pueblo, en la tierra de sus enemigos, oraba hacia la tierra, la ciudad y la casa, Dios lo oiría (1 R 8:46-50). Dios lo libró de los leones.',
        { h: 'Leyó a Jeremías' },
        'Al final del exilio, en el primer año de Darío, Daniel leyó en el libro de Jeremías que las desolaciones de Jerusalén durarían setenta años (Dn 9:2). Comprendió que el tiempo estaba por cumplirse, y en vez de esperar pasivamente, se puso a orar, confesando el pecado de su pueblo y pidiendo a Dios que hiciera resplandecer su rostro sobre el santuario asolado. La respuesta fue la profecía de las setenta semanas.'
      ],
      pensar: 'Daniel siguió orando hacia Jerusalén tres veces al día, aunque eso le costara la vida (Dn 6:10). ¿Qué hábitos de fe mantienes aunque el ambiente a tu alrededor sea hostil?'
    },
    {
      id: 'fe-renovada', n: 'Una fe renovada en el exilio', ref: 'Ezequiel 11:16; Daniel 9:2; Nehemías 8:1-8; Esdras 7:10; Hechos 13:14-15; 15:21', fecha: [-586, -400],
      visual: [
        { tipo: 'tabla', titulo: 'Cambios', tabla: {
          titulo: 'Cómo cambió la fe de Israel en el exilio',
          cab: ['Antes del exilio', 'Después del exilio'],
          filas: [
            ['Idolatría frecuente', 'Rechazo de los ídolos'],
            ['La fe centrada en el templo y los sacrificios', 'La fe centrada también en la ley, la oración y la reunión del pueblo'],
            ['Pocos conocían la ley', 'Lectura y enseñanza pública de las Escrituras (Neh 8)'],
            ['Profetas y sacerdotes', 'Se suman los escribas, maestros de la ley (Esd 7:10)'],
            ['Hebreo', 'Se extiende el arameo; partes de Esdras y Daniel están escritas en arameo'],
            ['Un pueblo en su tierra', 'Comunidades judías dispersas por el mundo: la diáspora']
          ]
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-griego/img/grecia-sinagoga.webp', alt: 'Una sinagoga del siglo I con hombres sentados en bancos de piedra escuchando la lectura de un rollo', pie: 'La sinagoga, fruto de la vida en el exilio.', origen: 'ia' }
      ],
      texto: [
        'El exilio fue un juicio, pero Dios lo usó para purificar a su pueblo. El Israel que volvió de Babilonia era distinto del que se fue.',
        { h: 'El fin de la idolatría' },
        'Antes del exilio, la idolatría fue el pecado constante de Israel y de Judá. Después del exilio, nunca volvió a ser un problema dominante en el pueblo judío. Al contrario: siglos después, los judíos estaban dispuestos a morir antes que permitir una imagen en el templo. El exilio curó a Israel de los ídolos.',
        { h: 'Sin templo, la Palabra' },
        'En Babilonia no había templo ni sacrificios. Los exiliados tuvieron que aprender a vivir su fe de otra manera: reuniéndose para leer las Escrituras, orar y enseñar. Muchos estudiosos creen que en el exilio tuvo su origen la sinagoga, la reunión del pueblo para escuchar la ley, que en tiempos de Jesús existía en cada ciudad donde había judíos. Fue en las sinagogas donde Jesús enseñó y donde Pablo comenzó su predicación en cada ciudad (Hch 13:14-15). Santiago lo resumió en el concilio: «Moisés desde tiempos antiguos tiene en cada ciudad quien lo predique en las sinagogas» (Hch 15:21).',
        'También en el exilio se reunieron y preservaron los escritos sagrados. Daniel leía el libro de Jeremías (Dn 9:2). Esdras, un escriba formado en Babilonia, «había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos» (Esd 7:10).',
        { h: 'El arameo' },
        'Babilonia y Persia usaban el arameo como lengua común para la administración y el comercio, y los judíos lo adoptaron. Partes de Esdras (Esd 4:8–6:18; 7:12-26) y de Daniel (Dn 2:4–7:28) están escritas en arameo. En tiempos de Jesús era la lengua cotidiana de los judíos de Palestina, y algunas palabras de Jesús se conservan en arameo, como «Talita cumi» (Mr 5:41).',
        { h: 'La diáspora' },
        'La mayoría de los judíos no volvió de Babilonia. Muchos prosperaron allí y se quedaron, y con el tiempo hubo comunidades judías en Persia, Egipto, Asia Menor y Roma. Las tablillas de Al-Yahudu, la «ciudad de Judá» en Babilonia, muestran a familias judías arrendando tierras, comerciando y poniendo a sus hijos nombres con el de Jehová. Esa dispersión preparó el camino del evangelio: el día de Pentecostés había en Jerusalén judíos «de todas las naciones bajo el cielo» (Hch 2:5).'
      ],
      pensar: 'Sin templo, los exiliados aprendieron a reunirse alrededor de la Palabra de Dios. ¿Qué lugar ocupa la Palabra en tu vida cuando te faltan los apoyos habituales de tu fe?'
    },
    {
      id: 'ester', n: 'Ester: los que se quedaron en Persia', ref: 'Ester 2:5-7; 3:8-13; 4:13-16; 8:11-17; 9:20-32', fecha: [-483, -473],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: PE + 'persia-ester-rey.webp', alt: 'La reina Ester, con vestido real, se presenta ante el rey Asuero en su trono, que le extiende el cetro de oro', pie: 'Ester ante el rey Asuero (Est 5:2).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['persia-500'], lugares: ['susa', 'babilonia', 'jerusalen', 'persepolis'] } }
      ],
      texto: [
        'El libro de Ester ocurre en Susa, una de las capitales del imperio persa, durante el reinado de Asuero, el rey que los griegos llamaban Jerjes I (486–465 a.C.). Cronológicamente, sus hechos se ubican entre la dedicación del templo, en Esdras 6, y la llegada de Esdras, en Esdras 7. Muestra la vida de los judíos que no volvieron a Jerusalén.',
        { h: 'Una judía en el palacio' },
        'Mardoqueo era un judío de la tribu de Benjamín, descendiente de los deportados con Joaquín (Est 2:5-6). Había criado a su prima huérfana, Hadasa, cuyo nombre persa era Ester. Cuando el rey buscó una nueva reina, Ester fue elegida, sin revelar que era judía.',
        { h: 'Un decreto de exterminio' },
        'Amán, el primer ministro del rey, odiaba a Mardoqueo porque no se arrodillaba ante él. Para vengarse, convenció al rey de dictar un decreto para exterminar a todos los judíos del imperio en un solo día, el trece del mes de Adar (Est 3:8-13). Era el pueblo entero de Dios, en Persia y en Judá, el que estaba en peligro.',
        { h: '¿Para esta hora?' },
        'Mardoqueo le pidió a Ester que intercediera ante el rey, aunque presentarse sin ser llamada podía costarle la vida. Le dijo: «si callas absolutamente en este tiempo, respiro y liberación vendrá de alguna otra parte para los judíos; mas tú y la casa de tu padre pereceréis. ¿Y quién sabe si para esta hora has llegado al reino?» (Est 4:14). Ester pidió que todos los judíos ayunaran por ella tres días, y respondió: «si perezco, que perezca» (Est 4:16).',
        'El rey la recibió. En una serie de acontecimientos que parecen casualidades, Amán fue colgado en la horca que había preparado para Mardoqueo, Mardoqueo fue exaltado y el rey dio a los judíos permiso para defenderse. El pueblo fue salvado. Desde entonces, los judíos celebran cada año la fiesta de Purim (Est 9:26-28).',
        { h: 'Dios escondido' },
        'En todo el libro de Ester no se menciona ni una vez el nombre de Dios. Pero Dios está presente en cada detalle: en la elección de Ester, en la noche de insomnio del rey (Est 6:1), en el momento justo de cada acontecimiento. Ester enseña que Dios gobierna la historia aun cuando parece ausente, y que protege a su pueblo también en el exilio.'
      ],
      pensar: 'Mardoqueo le preguntó a Ester: «¿quién sabe si para esta hora has llegado al reino?» (Est 4:14). ¿Para qué propósito podría haberte puesto Dios en el lugar donde estás hoy?'
    }
  ];

  /* ---------------- Ruta 3 · Los retornos ---------------- */
  const retornos = [
    {
      id: 'setenta-anos', n: 'Los setenta años', ref: 'Jeremías 25:11-12; 29:10; 2 Crónicas 36:20-23; Daniel 9:1-2; Zacarías 1:12', fecha: [-605, -516],
      visual: [
        { tipo: 'tabla', titulo: 'Cálculos', tabla: {
          titulo: 'Dos maneras de contar los setenta años',
          cab: ['Desde', 'Hasta', 'Años', 'Énfasis'],
          filas: [
            ['605 a.C., primera deportación', '538–536 a.C., primer retorno', 'c. 70', 'La servidumbre a Babilonia (Jer 25:11; 29:10)'],
            ['586 a.C., destrucción del templo', '516 a.C., templo reconstruido', '70', 'La desolación de Jerusalén y del templo (Dn 9:2; Zac 1:12)']
          ],
          nota: 'Ambos cálculos dan unos setenta años; muchos entienden que la profecía se cumplió en los dos sentidos.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque así dijo Jehová: Cuando en Babilonia se cumplan los setenta años, yo os visitaré, y despertaré sobre vosotros mi buena palabra, para haceros volver a este lugar.', ref: 'Jeremías 29:10' }
      ],
      texto: [
        'Esta ruta recorre los tres retornos del exilio, bajo Zorobabel, Esdras y Nehemías. Comienza con la profecía que les puso fecha.',
        { h: 'Una profecía con fecha' },
        'Jeremías no solo anunció el exilio, sino también su duración: «servirán estas naciones al rey de Babilonia setenta años. Y cuando sean cumplidos los setenta años, castigaré al rey de Babilonia» (Jer 25:11-12). Y en su carta a los cautivos: «Cuando en Babilonia se cumplan los setenta años, yo os visitaré… para haceros volver a este lugar» (Jer 29:10).',
        'La mayoría de los que oyeron la profecía no vivirían para ver su cumplimiento. Setenta años es la medida de una vida (Sal 90:10). El regreso sería para sus hijos y sus nietos.',
        { h: '¿Desde cuándo se cuentan?' },
        'La Biblia ofrece dos maneras de contar los setenta años, que se muestran en la tabla. Si se cuentan desde la primera deportación, en el 605 a.C., terminan con la caída de Babilonia en el 539 y el decreto de Ciro y el primer retorno, hacia el 538 a.C.: son los setenta años de servidumbre a Babilonia. Si se cuentan desde la destrucción del templo, en el 586 a.C., terminan con la dedicación del templo reconstruido, en el 516 a.C.: son los setenta años de desolación de Jerusalén. Zacarías, en el 520 a.C., habla de la ira de Dios sobre Jerusalén «con las cuales has estado airado por espacio de setenta años» (Zac 1:12).',
        'Lo notable es que ambos cálculos dan alrededor de setenta años. La profecía se cumplió con precisión.',
        { h: 'Daniel lee y ora' },
        'El cronista dice que el exilio duró «hasta que la tierra hubo gozado de reposo… hasta que los setenta años fueron cumplidos» (2 Cr 36:21). Y Daniel, al leer a Jeremías en el primer año de Darío, poco después de la caída de Babilonia, comprendió que el tiempo había llegado y se puso a orar (Dn 9:2-3). La promesa de Dios no lo llevó a la pasividad, sino a la oración.',
        'Poco después, Dios despertó el espíritu de un rey pagano para cumplirla.'
      ],
      pensar: 'Al descubrir que se acercaba el cumplimiento de una promesa, Daniel no se quedó esperando: se puso a orar (Dn 9:2-3). ¿Qué promesas de Dios te mueven hoy a orar con más fervor?'
    },
    {
      id: 'ciro', n: 'Ciro, el ungido de Dios', ref: 'Isaías 44:24–45:7; Esdras 1:1-11; 2 Crónicas 36:22-23; Daniel 5:30-31', fecha: -539,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: ORIENTE, capas: ['persia-539'], lugares: ['babilonia', 'susa', 'ecbatana', 'pasargada', 'jerusalen'], trazos: ['caida-539'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: PE + 'persia-ciro-decreto.webp', alt: 'El rey Ciro, de pie en su palacio, dicta un decreto a un escriba que escribe en un rollo', pie: 'El decreto de Ciro (Esd 1:1-4).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Hallazgo', tabla: {
          titulo: 'El cilindro de Ciro',
          cab: ['Dato', 'Detalle'],
          filas: [
            ['Qué es', 'Un cilindro de arcilla con una inscripción en acadio'],
            ['Dónde', 'Encontrado en Babilonia en 1879; hoy en el Museo Británico'],
            ['Qué dice', 'Ciro conquistó Babilonia sin batalla y devolvió a sus lugares a pueblos deportados y las imágenes de sus dioses'],
            ['Relación con la Biblia', 'No menciona a los judíos, pero confirma la política de Ciro que describe Esdras 1']
          ],
          nota: 'La imagen de esta estación es una recreación de la escena, no del cilindro.'
        } }
      ],
      texto: [
        'El regreso de los exiliados no lo decidió un rey judío, sino un rey persa. Y su nombre había sido anunciado en la Biblia mucho antes de que naciera.',
        { h: 'Anunciado por nombre' },
        'En Isaías 44 y 45, Dios habla de un rey que se levantaría para liberar a su pueblo y lo llama por su nombre: «que dice de Ciro: Es mi pastor, y cumplirá todo lo que yo quiero, al decir a Jerusalén: Serás edificada; y al templo: Serás fundado» (Is 44:28). Y lo llama su ungido: «Así dice Jehová a su ungido, a Ciro, al cual tomé yo por su mano derecha, para sujetar naciones delante de él» (Is 45:1). Dios añade: «te llamé por tu nombre; te puse sobrenombre, aunque no me conociste» (Is 45:4). Isaías profetizó en el siglo VIII a.C., más de ciento cincuenta años antes de Ciro.',
        { h: 'La caída de Babilonia' },
        'Ciro unió a medos y persas y formó el imperio más grande conocido hasta entonces. En el 539 a.C. tomó Babilonia, prácticamente sin batalla. La noche de su caída, el rey Belsasar celebraba un banquete con los utensilios del templo de Jerusalén cuando una mano escribió en la pared, y Daniel anunció que su reino había sido dado a los medos y a los persas (Dn 5).',
        { h: 'El decreto' },
        '«En el primer año de Ciro rey de Persia, para que se cumpliese la palabra de Jehová por boca de Jeremías, despertó Jehová el espíritu de Ciro rey de Persia» (Esd 1:1). El decreto permitía a los judíos volver a Jerusalén y reconstruir el templo, con ayuda de sus vecinos y con fondos reales. Ciro devolvió además los utensilios de oro y plata que Nabucodonosor había llevado: cinco mil cuatrocientos (Esd 1:7-11).',
        'El cilindro de Ciro, encontrado en Babilonia, confirma que esta fue su política: devolver a los pueblos deportados a sus tierras y permitirles restaurar sus santuarios. Lo que la arqueología presenta como una estrategia política, la Biblia lo presenta como la obra de Dios, que despertó el espíritu de un rey pagano para cumplir su palabra.',
        'Proverbios lo dice así: «Como los repartimientos de las aguas, así está el corazón del rey en la mano de Jehová» (Pr 21:1).'
      ],
      pensar: 'Dios llamó a Ciro por su nombre y lo usó para cumplir su promesa, aunque Ciro no lo conocía (Is 45:4). ¿Qué te enseña esto sobre el control de Dios sobre los gobernantes de tu tiempo?'
    },
    {
      id: 'zorobabel', n: 'Primer retorno: Zorobabel (538 a.C.)', ref: 'Esdras 1–3; 2:64-65; 3:10-13', fecha: -538,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['persia-539'], lugares: ['babilonia', 'carquemis', 'ribla', 'jerusalen'], trazos: ['regreso'] } },
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-reconstruccion-templo.webp', alt: 'Judíos que regresan reconstruyen los cimientos del templo en Jerusalén', pie: 'Los cimientos del templo (Esd 3:10).', origen: 'ia' }
      ],
      texto: [
        'Hacia el 538 a.C., el primer grupo de exiliados emprendió el regreso. Fue el retorno más numeroso de los tres.',
        { h: 'Los que volvieron' },
        'Los guiaba Sesbasar, «príncipe de Judá» (Esd 1:8), y sobre todo Zorobabel, nieto del rey Joaquín y heredero de la línea de David, junto al sumo sacerdote Josué (Esd 2:2; 3:2). Esdras 2 conserva la lista de las familias que volvieron. «Toda la congregación, unida como un solo hombre, era de cuarenta y dos mil trescientos sesenta, sin contar sus siervos y siervas, los cuales eran siete mil trescientos treinta y siete; y tenían doscientos cantores y cantoras» (Esd 2:64-65). En total, unas cincuenta mil personas.',
        'El viaje de unos mil quinientos kilómetros, siguiendo el Éufrates hacia el norte y bajando luego por Siria, tomaba alrededor de cuatro meses (Esd 7:9). Era una minoría: la mayoría de los judíos prefirió quedarse en Babilonia, donde había nacido y prosperado.',
        { h: 'Primero el altar' },
        'Lo primero que hicieron al llegar no fue construir casas ni murallas, sino el altar. En el mes séptimo, «edificaron el altar del Dios de Israel, para ofrecer sobre él holocaustos, como está escrito en la ley de Moisés» (Esd 3:2), aunque tenían miedo de los pueblos vecinos. Volvieron a celebrar la fiesta de los tabernáculos y a ofrecer los sacrificios diarios.',
        { h: 'Risas y llanto' },
        'En el segundo año, echaron los cimientos del templo. Los sacerdotes con trompetas y los levitas con címbalos alababan a Dios, y cantaban: «Porque él es bueno, porque para siempre es su misericordia sobre Israel» (Esd 3:11). Todo el pueblo aclamaba con gran júbilo.',
        'Pero muchos ancianos que habían visto el primer templo, el de Salomón, lloraban en alta voz al ver los cimientos del nuevo, mucho más modesto. Y no se podía distinguir el clamor de los gritos de alegría del llanto, «porque clamaba el pueblo con gran júbilo, y se oía el ruido hasta de lejos» (Esd 3:13). Gozo por lo que Dios estaba haciendo y dolor por lo que se había perdido se mezclaban en la misma escena.'
      ],
      pensar: 'Al volver a una tierra en ruinas, lo primero que reconstruyeron fue el altar (Esd 3:2-3). ¿Qué lugar le das a la adoración cuando tienes que reconstruir algo en tu vida?'
    },
    {
      id: 'templo-reconstruido', n: 'Oposición, profetas y templo (520–516 a.C.)', ref: 'Esdras 4–6; Hageo 1–2; Zacarías 4:6-10', fecha: [-536, -516],
      visual: [
        { tipo: 'tabla', titulo: 'Cronología', tabla: {
          titulo: 'Del primer retorno al templo terminado',
          cab: ['Año aprox.', 'Acontecimiento', 'Pasaje'],
          filas: [
            ['538 a.C.', 'Decreto de Ciro; primer retorno', 'Esd 1–2'],
            ['537 a.C.', 'El altar y los sacrificios', 'Esd 3:1-6'],
            ['536 a.C.', 'Los cimientos del templo', 'Esd 3:8-13'],
            ['536–520 a.C.', 'Oposición; la obra se detiene', 'Esd 4:1-5, 24'],
            ['520 a.C.', 'Profetizan Hageo y Zacarías; se reanuda la obra', 'Esd 5:1-2; Hag 1'],
            ['519 a.C.', 'Darío confirma el decreto de Ciro', 'Esd 6:1-12'],
            ['516 a.C.', 'Dedicación del templo', 'Esd 6:15-18']
          ]
        } }
      ],
      texto: [
        'El entusiasmo de los cimientos duró poco. Pasaron casi veinte años antes de que el templo se terminara.',
        { h: 'La oposición' },
        'Los habitantes de la región, entre ellos los que después serían llamados samaritanos, ofrecieron ayudar en la construcción, porque decían que también buscaban al Dios de Israel. Zorobabel rechazó la oferta (Esd 4:1-3). Entonces se convirtieron en enemigos: «el pueblo de la tierra intimidó al pueblo de Judá, y lo atemorizó para que no edificara. Sobornaron además contra ellos a los consejeros para frustrar sus propósitos» (Esd 4:4-5). La obra se detuvo durante unos dieciséis años.',
        { h: 'Casas artesonadas y un templo en ruinas' },
        'En el 520 a.C., Dios levantó a dos profetas, Hageo y Zacarías. Hageo confrontó al pueblo con una pregunta directa: «¿Es para vosotros tiempo, para vosotros, de habitar en vuestras casas artesonadas, y esta casa está desierta?» (Hag 1:4). El problema ya no era solo la oposición: el pueblo se había acomodado y había puesto sus propios intereses antes que la casa de Dios. Por eso sembraban mucho y recogían poco (Hag 1:6).',
        'El pueblo escuchó, y Dios «despertó… el espíritu de Zorobabel hijo de Salatiel… y el espíritu de todo el resto del pueblo; y vinieron y trabajaron en la casa de Jehová» (Hag 1:14). Para los que se desanimaban al comparar el nuevo templo con el de Salomón, Hageo trajo una promesa: «La gloria postrera de esta casa será mayor que la primera» (Hag 2:9). Esa gloria llegaría cuando el Mesías mismo entrara en ese templo.',
        { h: 'No con ejército, ni con fuerza' },
        'Zacarías animó a Zorobabel con la visión del candelero de oro y una palabra que se ha repetido por siglos: «No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos» (Zac 4:6). La obra no dependería de los recursos humanos, sino del Espíritu de Dios. Y le aseguró: «Las manos de Zorobabel echarán el cimiento de esta casa, y sus manos la acabarán» (Zac 4:9).',
        { h: 'El templo terminado' },
        'Cuando el gobernador persa cuestionó la obra, se buscó en los archivos reales y se encontró el decreto de Ciro. El rey Darío lo confirmó y ordenó apoyar la construcción con fondos reales (Esd 6:1-12). El templo fue terminado en el sexto año de Darío, hacia el 516 a.C., y dedicado con gozo (Esd 6:15-16). Era el segundo templo, el mismo que Herodes ampliaría siglos después y donde enseñaría Jesús.'
      ],
      pensar: 'Hageo preguntó al pueblo si era tiempo de vivir en casas lujosas mientras la casa de Dios estaba en ruinas (Hag 1:4). ¿Qué prioridades de tu vida necesitan reordenarse hoy?'
    },
    {
      id: 'esdras', n: 'Segundo retorno: Esdras (458 a.C.)', ref: 'Esdras 7–10', fecha: -458,
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['persia-500'], lugares: ['babilonia', 'jerusalen', 'susa'], trazos: ['regreso'] } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque Esdras había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos.', ref: 'Esdras 7:10' }
      ],
      texto: [
        'Casi sesenta años después de la dedicación del templo, en el séptimo año del rey Artajerjes I, hacia el 458 a.C., un segundo grupo volvió de Babilonia, encabezado por Esdras.',
        { h: 'Un escriba preparado' },
        'Esdras era sacerdote, descendiente de Aarón, y «escriba diligente en la ley de Moisés» (Esd 7:6). La Biblia resume su vida en un versículo que es un programa para todo maestro de la Palabra: preparó su corazón para inquirir la ley de Jehová, para cumplirla y para enseñarla (Esd 7:10). Primero estudiar, luego obedecer, y solo después enseñar.',
        { h: 'La mano de Dios sobre él' },
        'El rey Artajerjes le dio una carta con amplia autoridad: llevar ofrendas para el templo, nombrar jueces y enseñar la ley de Dios (Esd 7:11-26). Lo acompañaron unos mil quinientos hombres con sus familias, además de levitas y servidores del templo. Llevaban una gran cantidad de oro y plata, y el camino era peligroso, pero Esdras tuvo vergüenza de pedir soldados al rey, porque le había dicho que la mano de Dios estaba sobre los que lo buscan. Por eso proclamó un ayuno junto al río Ahava, «y él nos fue propicio» (Esd 8:21-23). Llegaron a salvo después de cuatro meses de viaje. Una y otra vez el libro repite que «la mano de Jehová su Dios estaba sobre Esdras» (Esd 7:6, 9, 28).',
        { h: 'Una reforma dolorosa' },
        'En Jerusalén, Esdras supo que muchos del pueblo, incluso sacerdotes y levitas, se habían casado con mujeres de los pueblos vecinos que adoraban a otros dioses. Era el mismo pecado que había llevado a Salomón a la idolatría y al pueblo al exilio. Esdras rasgó sus vestidos, se sentó atónito hasta la tarde, y luego se postró y confesó el pecado del pueblo como si fuera propio: «Dios mío, confuso y avergonzado estoy para levantar, oh Dios mío, mi rostro a ti» (Esd 9:6).',
        'Su oración conmovió al pueblo, que se reunió llorando, y decidió hacer un pacto para separarse de esos matrimonios (Esd 10). Fue una medida dolorosa y excepcional, tomada para preservar la fe del remanente que acababa de volver del juicio. El Nuevo Testamento no la repite como norma para los creyentes, sino que manda no unirse en yugo desigual (2 Co 6:14) y, si un creyente ya está casado con un no creyente, no separarse (1 Co 7:12-14).'
      ],
      pensar: 'Esdras preparó su corazón para estudiar la Palabra, para cumplirla y para enseñarla, en ese orden (Esd 7:10). ¿En cuál de esos tres pasos necesitas crecer?'
    },
    {
      id: 'nehemias', n: 'Tercer retorno: Nehemías y los muros (445 a.C.)', ref: 'Nehemías 1–6', fecha: -445,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/exi-nehemias-copero.webp', alt: 'En el palacio de Susa, Nehemías, copero del rey, con el rostro triste, presenta una copa al rey Artajerjes y a la reina, sentados a la mesa, mientras ora en silencio', pie: '«¿Cómo no estará triste mi rostro…?» (Neh 2:3).', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Los muros', src: PE + 'persia-muros-nehemias.webp', alt: 'Constructores judíos levantan el muro de Jerusalén con una herramienta en una mano y una espada en la otra', pie: '«Con una mano trabajaban en la obra, y en la otra tenían la espada» (Neh 4:17).', origen: 'ia' }
      ],
      texto: [
        'Trece años después de Esdras, en el vigésimo año de Artajerjes, hacia el 445 a.C., llegó a Jerusalén el tercer y último grupo, encabezado por Nehemías.',
        { h: 'Un copero que ora' },
        'Nehemías era copero del rey en Susa, un cargo de gran confianza: probaba el vino del rey para protegerlo del veneno. Cuando unos hermanos que llegaban de Judá le contaron que el remanente estaba «en gran mal y afrenta, y el muro de Jerusalén derribado, y sus puertas quemadas a fuego», Nehemías se sentó y lloró, «e hice duelo por algunos días, y ayuné y oré delante del Dios de los cielos» (Neh 1:3-4).',
        'Cuatro meses después, el rey notó su tristeza. Mostrarse triste ante el rey era peligroso. Cuando el rey le preguntó qué pedía, Nehemías hizo una oración relámpago, «Entonces oré al Dios de los cielos», y luego pidió permiso para reconstruir la ciudad (Neh 2:4-5). El rey se lo concedió, con cartas para los gobernadores y madera para las puertas.',
        { h: 'Cincuenta y dos días' },
        'En Jerusalén, Nehemías inspeccionó los muros de noche, y luego reunió al pueblo: «Levantémonos y edifiquemos» (Neh 2:18). Organizó el trabajo por familias y grupos, cada uno a cargo de un tramo del muro, muchos frente a su propia casa (Neh 3).',
        'La oposición fue feroz. Sanbalat, gobernador de Samaria, Tobías el amonita y Gesem el árabe se burlaron, conspiraron y amenazaron con un ataque. Nehemías respondió con oración y vigilancia: los constructores trabajaban «con una mano… en la obra, y en la otra tenían la espada» (Neh 4:17). Enfrentó también problemas internos: los ricos explotaban a los pobres, y Nehemías los obligó a devolver lo que habían tomado (Neh 5).',
        '«Fue terminado, pues, el muro, el veinticinco del mes de Elul, en cincuenta y dos días. Y cuando lo oyeron todos nuestros enemigos… conocieron que por nuestro Dios había sido hecha esta obra» (Neh 6:15-16).',
        { h: 'La séptima semana de Daniel' },
        'Muchos ven en el permiso de Artajerjes a Nehemías, en el 445 o el 444 a.C. según el cálculo, la «orden para restaurar y edificar a Jerusalén» de Daniel 9:25, el punto de partida de las setenta semanas que conducen al Mesías. El recurso Los últimos tiempos lo explica.'
      ],
      pensar: 'Antes de responder al rey, Nehemías oró en silencio al Dios de los cielos (Neh 2:4). ¿Cómo puedes practicar esa oración rápida y confiada en los momentos decisivos de tu día?'
    },
    {
      id: 'renovacion', n: 'La Palabra leída y el pacto renovado', ref: 'Nehemías 8–10; 13; Malaquías 1–4', fecha: [-445, -430],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/exi-esdras-ley.webp', alt: 'En la plaza frente a la puerta de las Aguas de Jerusalén, el escriba Esdras, de pie sobre un púlpito de madera, abre un gran rollo de la ley ante una multitud de hombres, mujeres y niños que se ponen de pie, algunos llorando', pie: 'Esdras lee el libro de la ley (Neh 8:5).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.', ref: 'Nehemías 8:8' }
      ],
      texto: [
        'Con los muros terminados, la restauración llegó a su punto más alto: no en una construcción, sino en la Palabra de Dios.',
        { h: 'Esdras lee la ley' },
        'En el mes séptimo, todo el pueblo se reunió «como un solo hombre» en la plaza frente a la puerta de las Aguas y pidió a Esdras que trajera el libro de la ley de Moisés (Neh 8:1). Esdras subió a un púlpito de madera, abrió el libro, y todo el pueblo se puso de pie. Leyó desde el alba hasta el mediodía, ante hombres, mujeres y todos los que podían entender.',
        'Los levitas ayudaban a comprender: «leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Muchos solo hablaban arameo, y había que traducir y explicar. Es uno de los primeros ejemplos de predicación expositiva en la Biblia.',
        { h: 'El gozo de Jehová' },
        'Al oír la ley, el pueblo lloraba, porque se daba cuenta de cuánto se había apartado de ella. Pero Nehemías y Esdras les dijeron: «Día santo es a Jehová nuestro Dios; no os entristezcáis, ni lloréis… porque el gozo de Jehová es vuestra fuerza» (Neh 8:9-10). Celebraron la fiesta de los tabernáculos como no se había hecho desde los días de Josué.',
        { h: 'Confesión y pacto' },
        'Días después, el pueblo ayunó, confesó sus pecados y los de sus padres, y repasó toda la historia de la fidelidad de Dios y de la infidelidad de Israel (Neh 9). Luego firmó un pacto: no casarse con los pueblos idólatras, guardar el día de reposo, dar los diezmos y sostener el servicio del templo (Neh 10).',
        { h: 'Las recaídas y Malaquías' },
        'Después de doce años como gobernador, Nehemías volvió a la corte. Cuando regresó a Jerusalén, encontró que el sacerdote Eliasib había dado una cámara del templo a Tobías, el enemigo de la obra, que no se daban las porciones a los levitas, que se comerciaba en el día de reposo y que había otra vez matrimonios mixtos (Neh 13). Volvió a reformar con energía.',
        'En esos mismos años profetizó Malaquías, el último profeta del Antiguo Testamento, contra los sacerdotes negligentes, los diezmos retenidos y los divorcios. Y anunció: «He aquí, yo envío mi mensajero, el cual preparará el camino delante de mí; y vendrá súbitamente a su templo el Señor a quien vosotros buscáis» (Mal 3:1). Después siguieron cuatrocientos años de silencio profético, hasta Juan el Bautista.'
      ],
      pensar: 'Al escuchar la Palabra, el pueblo lloró, y sus líderes les recordaron que «el gozo de Jehová es vuestra fuerza» (Neh 8:10). ¿Cómo equilibras el arrepentimiento que produce la Palabra con el gozo de la gracia de Dios?'
    },
    {
      id: 'tres-retornos', n: 'Los tres retornos, lado a lado', ref: 'Esdras 1–10; Nehemías 1–13', fecha: [-538, -432],
      visual: [
        { tipo: 'tabla', titulo: 'Comparación', tabla: {
          titulo: 'Los tres retornos del exilio',
          cab: ['', 'Primer retorno', 'Segundo retorno', 'Tercer retorno'],
          filas: [
            ['Año', 'c. 538 a.C.', 'c. 458 a.C.', 'c. 445 a.C.'],
            ['Rey de Persia', 'Ciro', 'Artajerjes I', 'Artajerjes I'],
            ['Líder', 'Zorobabel (con Sesbasar y Josué)', 'Esdras, sacerdote y escriba', 'Nehemías, copero y gobernador'],
            ['Personas', 'Unas 50.000', 'Unos 1.500 hombres y sus familias', 'Un grupo con escolta real'],
            ['Obra principal', 'El altar y el templo', 'La enseñanza de la ley y la reforma', 'Los muros y la reorganización de la ciudad'],
            ['Profetas', 'Hageo y Zacarías', '—', 'Malaquías'],
            ['Pasaje', 'Esd 1–6', 'Esd 7–10', 'Neh 1–13']
          ]
        } },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: CRECIENTE, capas: ['persia-500'], lugares: ['babilonia', 'susa', 'jerusalen', 'samaria'], trazos: ['regreso'] } }
      ],
      texto: [
        'La tabla compara los tres retornos. Juntos, cubren casi un siglo, desde el decreto de Ciro hasta la segunda gestión de Nehemías.',
        { h: 'Tres obras, un mismo propósito' },
        'Cada retorno restauró algo distinto. Con Zorobabel se restauró la adoración: el altar y el templo. Con Esdras, la Palabra: la enseñanza de la ley y la santidad del pueblo. Con Nehemías, la comunidad: los muros, la seguridad, la justicia social y la organización de la ciudad. Adoración, Palabra y comunidad: las tres son necesarias para que el pueblo de Dios viva como tal.',
        { h: 'Un remanente pequeño' },
        'Los que volvieron fueron pocos comparados con los que se quedaron, y la comunidad de Judá fue durante mucho tiempo pequeña, pobre y dependiente de Persia. No había rey en el trono de David; Judá era una pequeña provincia del imperio. Muchos podían preguntarse si era esa la gran restauración que los profetas habían anunciado.',
        'La respuesta de los profetas fue que no. El regreso de Babilonia fue un cumplimiento real de la promesa de Dios, pero también un anticipo de una restauración mayor. Hageo prometió una gloria mayor para la casa (Hag 2:9); Zacarías anunció al rey que vendría a Jerusalén humilde, montado en un asno (Zac 9:9); Malaquías, al Señor que vendría a su templo (Mal 3:1).',
        { h: 'Preparando la venida del Mesías' },
        'Sin los retornos no habría habido templo, ni Jerusalén, ni pueblo judío en la tierra cuando nació Jesús. Dios preservó a su pueblo, su ciudad y su templo para que se cumplieran las profecías: el Mesías nació en Belén de Judea, de la descendencia de David por medio de Zorobabel, y entró en el templo reconstruido. Las genealogías de Mateo y de Lucas pasan por Zorobabel (Mt 1:12-13; Lc 3:27).',
        'La última ruta de este recurso muestra que la historia de la dispersión y el regreso de Israel no termina en Nehemías.'
      ],
      pensar: 'Los tres retornos restauraron la adoración, la Palabra y la comunidad. ¿Cuál de estas tres áreas necesita hoy más atención en tu vida y en tu congregación?'
    }
  ];

  /* ---------------- Ruta 4 · Dispersión y retorno en la profecía ---------------- */
  const profecia = [
    {
      id: 'nuevo-exodo', n: 'Esparcidos y recogidos: un nuevo éxodo', ref: 'Deuteronomio 30:1-5; Jeremías 16:14-15; 23:7-8; Ezequiel 36:24-28; 37:21-28', fecha: [-586, -445],
      visual: [
        { tipo: 'tabla', titulo: 'Promesas', tabla: {
          titulo: 'Lo que prometen los profetas para el regreso',
          cab: ['Promesa', 'Pasaje', '¿Se cumplió con los retornos de Persia?'],
          filas: [
            ['Volver a la tierra', 'Jer 29:10; Ez 36:24', 'En parte: volvió un remanente'],
            ['Desde todas las naciones, de los cuatro confines', 'Is 11:12; Jer 16:15', 'No: volvieron solo de Babilonia y Persia'],
            ['Un corazón nuevo y el Espíritu de Dios', 'Ez 36:26-27', 'No plenamente'],
            ['Israel y Judá, una sola nación', 'Ez 37:22', 'No'],
            ['Un rey de la casa de David', 'Ez 37:24; Jer 23:5-6', 'No: Judá siguió bajo Persia'],
            ['Nunca más serán arrancados', 'Am 9:15', 'No: hubo otra dispersión en el año 70']
          ],
          nota: 'Por eso la interpretación premilenial espera un cumplimiento final, en los últimos tiempos.'
        } }
      ],
      texto: [
        'Esta última ruta mira el exilio y los retornos a la luz de la profecía. Los profetas anunciaron el regreso de Babilonia, pero sus promesas van mucho más allá.',
        { h: 'Un nuevo éxodo' },
        'Para Israel, el gran acto de salvación de Dios había sido el éxodo de Egipto. Pero Jeremías anunció que vendría algo tan grande que eclipsaría ese recuerdo: «vienen días, dice Jehová, en que no se dirá más: Vive Jehová, que hizo subir a los hijos de Israel de tierra de Egipto; sino: Vive Jehová, que hizo subir a los hijos de Israel de la tierra del norte, y de todas las tierras adonde los había arrojado; y los volveré a su tierra» (Jer 16:14-15).',
        'Isaías describe el regreso como un camino que Dios abre en el desierto (Is 40:3-5; 43:19), y Ezequiel promete algo más profundo que el regreso físico: «os tomaré de las naciones, y os recogeré de todas las tierras, y os traeré a vuestro país. Esparciré sobre vosotros agua limpia… Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros» (Ez 36:24-26).',
        { h: 'Un cumplimiento parcial' },
        'Los retornos bajo Zorobabel, Esdras y Nehemías fueron un cumplimiento real de estas promesas: Dios hizo volver a su pueblo al terminar los setenta años, como dijo. Pero, como muestra la tabla, solo fueron un cumplimiento parcial. Volvió un remanente pequeño, y solo de Babilonia y Persia, no de los cuatro confines de la tierra. Israel y Judá no volvieron a ser una sola nación bajo un rey de David. El pueblo no recibió un corazón nuevo como nación: Nehemías tuvo que reformar las mismas faltas una y otra vez. Y en el año 70 d.C., el pueblo fue esparcido otra vez.',
        { h: 'Un patrón en la historia de Dios' },
        'Muchas profecías bíblicas tienen un cumplimiento cercano, que confirma la palabra del profeta, y un cumplimiento final, más amplio. El regreso de Babilonia fue el cumplimiento cercano: demostró que Dios cumple lo que promete. La interpretación premilenial entiende que el cumplimiento final, el regreso de todo Israel desde todas las naciones, con un corazón nuevo y bajo el reinado del Mesías, todavía espera su momento. Las estaciones siguientes lo explican.'
      ],
      pensar: 'Dios cumplió su promesa de hacer volver a su pueblo de Babilonia, y ese cumplimiento confirmaba sus promesas mayores. ¿Qué cumplimientos de la palabra de Dios en tu vida te dan confianza para esperar los que faltan?'
    },
    {
      id: 'segunda-dispersion', n: 'La segunda dispersión (70 y 135 d.C.)', ref: 'Lucas 19:41-44; 21:20-24; Mateo 23:37–24:2', fecha: [70, 135],
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: OTRA + 'imperio-romano/img/roma-sitio-jerusalen.webp', alt: 'Jerusalén sitiada por las legiones romanas, con el templo de Herodes al fondo y humo sobre la ciudad', pie: 'El sitio de Jerusalén por Roma, año 70.', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', estado: { view: [[24, -2], [46, 46]], capas: ['roma-117'], lugares: ['jerusalen', 'roma', 'alejandria', 'babilonia', 'efeso', 'corinto', 'cirene'] } }
      ],
      texto: [
        'Después de los retornos, el pueblo judío vivió en su tierra durante casi seis siglos, bajo persas, griegos, los reyes asmoneos y Roma. En ese tiempo nació, vivió, murió y resucitó el Mesías. Y en ese tiempo ocurrió una segunda dispersión, más larga y más amplia que la primera.',
        { h: 'Jesús llora sobre Jerusalén' },
        'Al acercarse a Jerusalén pocos días antes de su muerte, Jesús lloró sobre la ciudad y anunció su destrucción: «vendrán días sobre ti, cuando tus enemigos te rodearán con vallado… y te derribarán a tierra, y a tus hijos dentro de ti, y no dejarán en ti piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación» (Lc 19:43-44). Y precisó: «caerán a filo de espada, y serán llevados cautivos a todas las naciones; y Jerusalén será hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan» (Lc 21:24).',
        { h: 'El año 70' },
        'En el 66 d.C., los judíos se rebelaron contra Roma. El general Tito sitió Jerusalén, y en el año 70 la ciudad cayó y el templo fue incendiado y destruido, en el mismo día del año en que la tradición judía recuerda la destrucción del primer templo. El historiador Josefo describe el hambre y las muertes del sitio, y dice que unos noventa y siete mil prisioneros fueron llevados cautivos. Las palabras de Jesús se cumplieron: no quedó piedra sobre piedra del templo.',
        { h: 'El año 135' },
        'Sesenta y cinco años después, una segunda rebelión, encabezada por Simón bar Kojba, fue aplastada por el emperador Adriano. Jerusalén fue reconstruida como una ciudad romana, Aelia Capitolina, y se prohibió a los judíos vivir en ella. La provincia de Judea pasó a llamarse Siria Palestina.',
        { h: 'Por todo el mundo' },
        'Esta vez la dispersión no fue a un solo lugar, sino a todas las naciones, como Moisés había anunciado: «Jehová te esparcirá por todos los pueblos, desde un extremo de la tierra hasta el otro extremo» (Dt 28:64). Durante casi dos mil años, el pueblo judío vivió sin tierra propia, sufriendo persecuciones y expulsiones en muchos países. Y sin embargo, a diferencia de otros pueblos dispersados de la antigüedad, que se mezclaron y desaparecieron, el pueblo judío fue preservado.',
        'Para la interpretación premilenial, esa preservación es una señal de que Dios no ha terminado con Israel. Los tiempos de los gentiles tienen un límite: «hasta que… se cumplan» (Lc 21:24).'
      ],
      pensar: 'Jesús lloró sobre Jerusalén porque «no conociste el tiempo de tu visitación» (Lc 19:44). ¿Estás reconociendo el tiempo en que Dios te está visitando hoy?'
    },
    {
      id: 'regreso-final', n: 'El regreso final', ref: 'Isaías 11:11-12; Ezequiel 37:1-14, 21-28; Amós 9:14-15; Zacarías 12:10; Romanos 11:25-27', fecha: 2026,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Asimismo acontecerá en aquel tiempo, que Jehová alzará otra vez su mano para recobrar el remanente de su pueblo que aún quede en Asiria, Egipto, Patros, Etiopía, Elam, Sinar y Hamat, y en las costas del mar.', ref: 'Isaías 11:11' }
      ],
      texto: [
        'Si los retornos de Persia fueron un cumplimiento parcial, ¿cuándo se cumplirán plenamente las promesas del regreso? La interpretación premilenial responde: en los últimos tiempos.',
        { h: 'Otra vez' },
        'Isaías habla de una segunda vez: «Jehová alzará otra vez su mano para recobrar el remanente de su pueblo que aún quede en Asiria, Egipto, Patros, Etiopía, Elam, Sinar y Hamat, y en las costas del mar. Y levantará pendón a las naciones, y juntará los desterrados de Israel, y reunirá los esparcidos de Judá de los cuatro confines de la tierra» (Is 11:11-12). La primera vez fue el éxodo de Egipto; la segunda incluye a los dispersos de todas las naciones.',
        'Amós promete un regreso definitivo: «Pues los plantaré sobre su tierra, y nunca más serán arrancados de su tierra que yo les di» (Am 9:15).',
        { h: 'Primero el cuerpo, después el espíritu' },
        'La visión de los huesos secos de Ezequiel tiene dos etapas. Primero los huesos se juntan y se cubren de carne y piel, «pero no había en ellos espíritu» (Ez 37:8). Solo después el espíritu entra en ellos y viven. Muchos intérpretes premileniales ven aquí el orden del regreso final: primero una restauración nacional y física de Israel en su tierra, todavía sin fe en su Mesías, y después una restauración espiritual, cuando Dios derrame sobre ellos su Espíritu y «mirarán a mí, a quien traspasaron» (Zac 12:10). Entonces «todo Israel será salvo» (Ro 11:26), en la segunda venida de Cristo.',
        { posturas: {
          titulo: 'El regreso de los judíos a su tierra en la historia moderna',
          a: { n: 'Un paso hacia el cumplimiento', t: 'Muchos maestros premileniales ven en el regreso de judíos a su tierra desde fines del siglo XIX, y en la formación del Estado de Israel en 1948, un comienzo del regreso anunciado por los profetas, en la etapa «sin espíritu» de Ezequiel 37, que prepara el escenario de los eventos del fin.' },
          b: { n: 'Prudencia', t: 'Otros, también premileniales, advierten que el cumplimiento pleno ocurrirá con la conversión de Israel y la venida de Cristo, y que no se debe identificar sin más un Estado moderno, con sus decisiones políticas, con el cumplimiento de la profecía.' },
          c: 'La Biblia anuncia un regreso de Israel a su tierra antes de los eventos finales (Ez 38:8), y el regreso de millones de judíos a ella es un hecho notable. Pero el cumplimiento pleno de las promesas, un pueblo con corazón nuevo bajo el Mesías, ocurrirá cuando Cristo vuelva. La ruta Los eventos del fin del recurso Los últimos tiempos lo explica.'
        } },
        { ir: { t: 'Abrir el recurso Los últimos tiempos', a: '../../escatologia/' } }
      ],
      pensar: 'En la visión de Ezequiel, los huesos se juntaron, pero solo vivieron cuando entró el espíritu (Ez 37:8-10). ¿Qué te enseña esto sobre la diferencia entre una renovación exterior y la vida que solo da el Espíritu de Dios?'
    },
    {
      id: 'peregrinos', n: 'Extranjeros y peregrinos', ref: '1 Pedro 1:1, 17; 2:11-12; Santiago 1:1; Hebreos 11:13-16; Filipenses 3:20; Jeremías 29:7', fecha: 2026,
      visual: [
        { tipo: 'tabla', titulo: 'Lecciones', tabla: {
          titulo: 'Lo que el exilio enseña a la iglesia',
          cab: ['En el exilio', 'Para la iglesia hoy', 'Pasaje'],
          filas: [
            ['Buscad la paz de la ciudad', 'Ser de bendición donde vivimos', 'Jer 29:7; 1 P 2:12'],
            ['Daniel fiel en la corte', 'Servir con excelencia sin transigir', 'Dn 1:8; 6:10'],
            ['¿Cómo cantaremos en tierra de extraños?', 'Mantener la identidad en un mundo ajeno', 'Sal 137:4; 1 P 2:11'],
            ['Sin templo, la Palabra y la oración', 'Una fe que no depende de un edificio', 'Ez 11:16; Jn 4:21-24'],
            ['La esperanza del regreso', 'La esperanza de la patria celestial', 'He 11:13-16; Fil 3:20'],
            ['Salid de Babilonia', 'No conformarse al sistema del mundo', 'Jer 51:6; Ap 18:4; Ro 12:2']
          ]
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: BA + 'babilonia-ciudad-eufrates.webp', alt: 'Babilonia vista desde el Éufrates, con sus murallas y el zigurat al fondo', pie: 'Babilonia, símbolo del mundo donde vive el pueblo de Dios.', origen: 'ia' }
      ],
      texto: [
        'El Nuevo Testamento toma la experiencia del exilio y la aplica a la iglesia. Los creyentes viven en el mundo como exiliados que esperan volver a su verdadera patria.',
        { h: 'Los expatriados de la dispersión' },
        'Pedro comienza su primera carta dirigiéndose «a los expatriados de la dispersión en el Ponto, Galacia, Capadocia, Asia y Bitinia» (1 P 1:1). Escribía a creyentes, muchos de ellos gentiles, que vivían en sus propias ciudades. Pero los llama exiliados, porque su verdadera ciudadanía está en otra parte. Y los exhorta: «Amados, yo os ruego como a extranjeros y peregrinos, que os abstengáis de los deseos carnales que batallan contra el alma; manteniendo buena vuestra manera de vivir entre los gentiles» (1 P 2:11-12).',
        'Pablo lo dice de otra manera: «nuestra ciudadanía está en los cielos, de donde también esperamos al Salvador, al Señor Jesucristo» (Fil 3:20). Y Hebreos describe a los patriarcas como hombres que confesaron que eran extranjeros y peregrinos sobre la tierra, porque anhelaban una patria mejor, la celestial (He 11:13-16).',
        { h: 'Vivir en Babilonia' },
        'La carta de Jeremías a los cautivos ofrece un modelo para la iglesia. No debemos aislarnos ni vivir esperando escapar del mundo: «Edificad casas… procurad la paz de la ciudad… y rogad por ella a Jehová» (Jer 29:5-7). Los creyentes trabajan, forman familias, sirven a su ciudad y oran por sus autoridades (1 Ti 2:1-2).',
        'Pero tampoco debemos asimilarnos. Como Daniel, podemos aprender la lengua y servir en la corte de Babilonia sin contaminarnos con lo que contradice la Palabra de Dios. Y como dice la voz del cielo sobre la Babilonia final: «Salid de ella, pueblo mío, para que no seáis partícipes de sus pecados» (Ap 18:4).',
        { h: 'El regreso a casa' },
        'Los exiliados de Babilonia esperaban volver a Jerusalén. La iglesia espera algo mayor: la nueva Jerusalén que descenderá del cielo, donde Dios morará con su pueblo para siempre (Ap 21:2-3). Como los cautivos que nunca olvidaron Sion, el creyente vive en el mundo sin olvidar adónde pertenece.',
        'La historia del exilio y de los retornos muestra a un Dios que disciplina a su pueblo, pero nunca lo abandona; que cumple cada promesa a su tiempo; y que siempre lleva a los suyos de vuelta a casa.'
      ],
      pensar: 'Pedro llama a los creyentes «extranjeros y peregrinos» (1 P 2:11). ¿En qué se nota en tu vida que tu verdadera ciudadanía está en los cielos?'
    }
  ];

  const LINEA_HISTORIA = { desde: -760, hasta: -540, hitos: [
    { a: -722, t: 'Cae Samaria' }, { a: -701, t: 'Senaquerib' }, { a: -622, t: 'Reforma de Josías' },
    { a: -605, t: '1.ª deportación' }, { a: -586, t: 'Cae el templo' }, { a: -562, t: 'Joaquín liberado' }
  ] };
  const LINEA_VIDA = { desde: -610, hasta: -460, hitos: [
    { a: -605, t: 'Daniel llevado' }, { a: -593, t: 'Ezequiel' }, { a: -586, t: 'Cae el templo' },
    { a: -539, t: 'Cae Babilonia' }, { a: -480, t: 'Ester' }
  ] };
  const LINEA_RETORNOS = { desde: -610, hasta: -420, hitos: [
    { a: -605, t: 'Inicio de los 70 años' }, { a: -586, t: 'Cae el templo' }, { a: -538, t: 'Primer retorno' },
    { a: -516, t: 'Templo reconstruido' }, { a: -458, t: 'Esdras' }, { a: -445, t: 'Nehemías' }
  ] };

  window.RUTA_DATA = {
    titulo: 'El exilio y los retornos',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Fronteras y rutas de los mapas aproximadas.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'historia', grupo: 'La historia', n: 'La historia del exilio', info: 'De la advertencia de Moisés a la caída de Samaria y de Jerusalén, y la liberación de Joaquín', linea: LINEA_HISTORIA, estaciones: historia },
      { id: 'vida', grupo: 'La historia', n: 'La vida en el exilio', info: 'Lamentaciones, la carta de Jeremías, Ezequiel, Daniel, una fe renovada y Ester', linea: LINEA_VIDA, estaciones: vida },
      { id: 'retornos', grupo: 'La historia', n: 'Los retornos', info: 'Los setenta años, Ciro, Zorobabel, el templo, Esdras, Nehemías y la renovación del pacto', linea: LINEA_RETORNOS, estaciones: retornos },
      { id: 'profecia', grupo: 'Temas', n: 'Dispersión y retorno en la profecía', info: 'El nuevo éxodo, la segunda dispersión, el regreso final y la iglesia como peregrina', estaciones: profecia }
    ]
  };
})();
