(() => {
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = window.__PT_H;

  /* ---------------- VI. Los patriarcas en el mapa ---------------- */
  const mapas = [
    {
      id: 'viaje-abraham', n: 'El viaje completo de Abraham', ref: 'Génesis 11:31–25:10; Hechos 7:2-5; Hebreos 11:8-10', fecha: [-2091, -1991],
      visual: [
        pasos([
          { t: 'De Ur a Harán, remontando el Éufrates: unos 1.000 km (Gn 11:31).', fecha: -2100, estado: { view: V.creciente, capas: [], lugares: ['ur', 'babilonia', 'mari', 'haran'], trazos: ['pt-ur-haran'] } },
          { t: 'De Harán a Siquem, por Alepo, Hamat y Damasco: unos 650 km (Gn 12:4-6).', fecha: -2091, estado: { view: V.ur_canaan, capas: [], lugares: ['haran', 'alepo', 'hamat', 'damasco', 'siquem'], trazos: ['pt-ur-haran', 'pt-haran-canaan'] } },
          { t: 'Por la serranía: Siquem, Betel y el Neguev (Gn 12:6-9).', fecha: -2091, estado: { view: V.canaan, capas: [], lugares: ['siquem', 'betel', 'hai', 'hebron', 'r-neguev'], trazos: ['pt-canaan-sur'] } },
          { t: 'A Egipto y de vuelta a Betel (Gn 12:10–13:4).', fecha: -2090, estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['betel', 'hebron', 'gaza', 'menfis'], trazos: ['pt-egipto', 'pt-egipto-vuelta'] } },
          { t: 'Mamre, en Hebrón, su residencia principal; la persecución de los reyes hasta Hoba (Gn 13:18; 14:14-15).', fecha: -2085, estado: { view: V.norte, capas: [], lugares: ['mamre', 'dan', 'damasco', 'r-hoba', 'salem'], trazos: ['pt-rescate', 'pt-rescate-vuelta'] } },
          { t: 'Gerar, Beerseba y el monte Moriah (Gn 20–22).', fecha: -2050, estado: { view: V.sur, capas: [], lugares: ['mamre', 'r-gerar', 'beerseba', 'moriah'], trazos: ['pt-gerar', 'pt-moriah'] } },
          { t: 'Toda la vida de Abraham en un mapa: unos 2.500 km de camino, y al final, una tumba en Macpela (Gn 23; 25:9-10).', fecha: -1991, estado: { view: V.creciente, capas: [], lugares: ['ur', 'haran', 'damasco', 'siquem', 'betel', 'hebron', 'beerseba', 'menfis'], trazos: ['pt-ur-haran', 'pt-haran-canaan', 'pt-canaan-sur', 'pt-egipto', 'pt-egipto-vuelta', 'pt-rescate', 'pt-gerar', 'pt-moriah'] } }
        ], 'Los viajes de Abraham'),
        tabla({
          titulo: 'Abraham, lugar por lugar',
          cab: ['Lugar', 'Qué pasó', 'Texto'],
          filas: [
            ['Ur de los caldeos', 'Dios lo llama', 'Gn 11:31; Hch 7:2'],
            ['Harán', 'Muere Taré; Abram sale a los 75 años', 'Gn 11:32; 12:4'],
            ['Siquem', 'Promesa de la tierra; primer altar', 'Gn 12:6-7'],
            ['Betel y Hai', 'Altar; separación de Lot', 'Gn 12:8; 13:3-11'],
            ['Egipto', 'Hambre; la mentira sobre Sarai', 'Gn 12:10-20'],
            ['Mamre (Hebrón)', 'Residencia; visita de los tres; intercesión', 'Gn 13:18; 18'],
            ['Dan y Hoba', 'Rescate de Lot', 'Gn 14:14-15'],
            ['Salem', 'Melquisedec', 'Gn 14:18-20'],
            ['Gerar', 'Abimelec', 'Gn 20'],
            ['Beerseba', 'El pozo del juramento', 'Gn 21:31-33'],
            ['Moriah', 'El sacrificio de Isaac', 'Gn 22'],
            ['Macpela', 'Sepultura de Sara y de Abraham', 'Gn 23; 25:9']
          ],
          nota: 'Distancias aproximadas, por los caminos probables de la época.'
        })
      ],
      texto: [
        'Esta ruta reúne en el mapa los viajes de los patriarcas, que las rutas II a V contaron uno por uno. El mapa por pasos recorre la vida de Abraham en siete etapas, y el botón «Ver la evolución» las muestra solas, una tras otra.',
        { h: 'Unos 2.500 kilómetros' },
        'Si se suman los caminos, Abraham recorrió unos 2.500 kilómetros a pie o en asno, al ritmo de sus rebaños: de Ur a Harán, de Harán a Canaán, de un extremo a otro de la tierra prometida, a Egipto y de vuelta, y hasta el norte de Damasco para rescatar a Lot. Un rebaño de ovejas avanza unos diez o quince kilómetros por día, así que el viaje de Harán a Siquem le llevó más de un mes.',
        { h: 'Una tierra recorrida, no poseída' },
        'Dios le había dicho: «Levántate, ve por la tierra a lo largo de ella y a su ancho; porque a ti la daré» (Gn 13:17). Abraham la recorrió de norte a sur, de Dan a Beerseba, los mismos extremos que después marcarán el territorio de Israel. Levantó altares en Siquem, Betel y Hebrón, cavó pozos en Beerseba y compró una tumba en Macpela. Pero no poseyó la tierra. Hebreos dice que habitó en ella «como en tierra ajena» (He 11:9).',
        { h: 'Los lugares de la fe' },
        'La tabla resume los lugares y lo que pasó en cada uno. Varios de ellos volverán a ser importantes en la historia de Israel: Siquem, donde Josué renovará el pacto (Jos 24); Betel, donde Jeroboam pondrá un becerro de oro (1 R 12:29); Hebrón, la primera capital de David (2 S 2:1-4); Beerseba, el límite sur del reino; y Moriah, el monte del templo. Abraham caminó por los lugares que serían la historia de sus hijos.',
        { h: 'Peregrino con un destino' },
        'Lo que movía a Abraham no era la búsqueda de pastos, sino una promesa. «Por la fe Abraham, siendo llamado, obedeció para salir al lugar que había de recibir como herencia; y salió sin saber a dónde iba» (He 11:8). Y Hebreos explica qué esperaba, más allá de Canaán: «la ciudad que tiene fundamentos, cuyo arquitecto y constructor es Dios» (He 11:10).',
        ir('Ver la promesa de la tierra en La tierra de Israel', '../../tierra-de-israel/#plan/1')
      ],
      pensar: 'Abraham caminó miles de kilómetros detrás de una promesa. Si dibujaras el mapa de tu vida espiritual, ¿qué lugares marcarías como altares donde Dios te habló?'
    },
    {
      id: 'canaan-patriarcas', n: 'La Canaán de los patriarcas', ref: 'Génesis 12:6-8; 13:18; 21:33; 26:23-25; 28:19; 33:18-20; 35:1-15', fecha: [-2091, -1876],
      visual: [
        pasos([
          { t: 'Los altares: Siquem, Betel, Hebrón y Beerseba (Gn 12:7-8; 13:18; 26:25; 33:20; 35:7).', estado: { view: V.canaan, capas: [], lugares: ['siquem', 'betel', 'mamre', 'beerseba'] } },
          { t: 'Los pozos: Beerseba, Rehobot, Gerar y Beer-lahai-roi, en el Neguev (Gn 16:14; 21:30; 26:18-22).', estado: { view: V.sur, capas: [], lugares: ['beerseba', 'r-rehobot', 'r-gerar', 'r-beer-lahai-roi'] } },
          { t: 'Las tumbas: Macpela en Hebrón, Raquel junto a Efrata y José en Siquem (Gn 23; 35:19; Jos 24:32).', estado: { view: V.canaan, capas: [], lugares: ['hebron', 'efrata', 'siquem'] } },
          { t: 'Los lugares de los patriarcas, de Dan a Beerseba, sobre el relieve de la tierra.', estado: { view: V.canaan, capas: [], lugares: ['dan', 'dotan', 'siquem', 'betel', 'efrata', 'mamre', 'hebron', 'beerseba', 'r-gerar', 'r-peniel', 'r-mahanaim', 'sucot'] } }
        ], 'Altares, pozos y tumbas'),
        esq('img/esquema-serrania.svg', 'Corte de la tierra de Canaán de oeste a este: la llanura costera con las ciudades de los cananeos y los filisteos, la serranía central con Siquem, Betel y Hebrón, donde vivían los patriarcas con sus tiendas, el valle del Jordán con Sodoma, y las mesetas de Galaad y Edom al oriente', 'Los patriarcas vivieron sobre todo en la serranía central y en el Neguev, lejos de las ciudades de la costa.')
      ],
      texto: [
        'Si se marcan en el mapa los lugares de Génesis 12 a 50, aparece un dibujo claro: casi todos están sobre la serranía central de Canaán, la cadena de montes que corre de norte a sur por el medio del país, y en el Neguev, la región seca del sur. El mapa por pasos los agrupa en altares, pozos y tumbas.',
        { h: 'Lejos de la costa' },
        'Los patriarcas no vivían en las ciudades fuertes de la costa ni en los grandes valles, donde estaban los cananeos con sus carros. Vivían en las alturas, poco pobladas, con pastos de invierno, y bajaban al Neguev con sus rebaños. Había un camino natural que seguía la cresta de la serranía, de Siquem a Betel, a Jerusalén y a Hebrón, hasta Beerseba: es el camino que recorren una y otra vez. El esquema muestra el corte del país de oeste a este.',
        { h: 'Altares' },
        'Abraham levantó altares en Siquem, entre Betel y Hai, y en Hebrón; plantó un tamarisco en Beerseba. Isaac edificó un altar en Beerseba. Jacob levantó una piedra en Betel y un altar en Siquem, y volvió a Betel para cumplir su voto. Los altares marcaban la tierra con el nombre de Jehová, en medio de los altares cananeos.',
        { h: 'Pozos' },
        'En el Neguev, la vida dependía de los pozos. Beer-lahai-roi, Beerseba, Esek, Sitna y Rehobot llevan nombres que recuerdan lo que pasó en cada uno: el Dios que ve, el juramento, la contienda, la enemistad y los lugares amplios. La geografía de Génesis es también una historia de fe.',
        { h: 'Tumbas' },
        'Al final, los patriarcas dejaron tumbas: la cueva de Macpela en Hebrón, la tumba de Raquel junto al camino de Belén, y, siglos después, la de José en Siquem. Eran lo único que poseían en la tierra, y por eso eran también una declaración de fe: sus cuerpos esperaban en la tierra que Dios daría a sus hijos.',
        { ejercicio: {
          pregunta: '¿Dónde vivieron principalmente los patriarcas dentro de Canaán?',
          opciones: [
            { t: 'En las ciudades de la costa del Mediterráneo, junto a los puertos.', ok: false, por_que: 'La costa estaba ocupada por ciudades cananeas fuertes. Los patriarcas casi no aparecen allí.' },
            { t: 'En la serranía central y el Neguev, con sus rebaños, entre Siquem y Beerseba.', ok: true, por_que: 'Siquem, Betel, Hebrón y Beerseba están en la serranía y en el sur; allí levantaban sus tiendas y altares.' },
            { t: 'En el valle del Jordán, junto a Sodoma, por sus buenos pastos.', ok: false, por_que: 'Ese fue el lugar que eligió Lot. Abraham se quedó en la serranía (Gn 13:12).' }
          ],
          explicacion: 'Los patriarcas recorrían el camino de la cresta de la serranía y bajaban al Neguev con sus rebaños. Esos lugares serán después el corazón de Israel y de Judá.'
        } },
        ir('Ver «Cuatro franjas de oeste a este» en La tierra de Israel', '../../tierra-de-israel/#panorama/4')
      ],
      pensar: 'Los patriarcas marcaron la tierra con altares, pozos y tumbas. ¿Qué huellas de tu fe quedarán en los lugares donde vives?'
    },
    {
      id: 'mapa-jacob', n: 'Jacob, de Beerseba a Harán y de vuelta', ref: 'Génesis 28:10; 29:1; 31:17-21; 32:1–33:20; 35:1-27', fecha: [-1929, -1900],
      visual: [
        pasos([
          { t: 'Jacob huye de Beerseba y duerme en Betel: el sueño de la escalera (Gn 28:10-19).', fecha: -1929, estado: { view: V.canaan, capas: [], lugares: ['beerseba', 'hebron', 'betel'], trazos: ['pt-jacob-ida'] } },
          { t: 'Sigue hasta Harán, en Padan-aram: unos 800 km (Gn 29:1-4).', fecha: -1929, estado: { view: V.jacob, capas: [], lugares: ['beerseba', 'betel', 'damasco', 'haran', 'r-padan-aram'], trazos: ['pt-jacob-ida'] } },
          { t: 'Veinte años después, vuelve con su familia y su ganado: Galaad y Mahanaim (Gn 31:21-25; 32:1-2).', fecha: -1909, estado: { view: V.jacob, capas: [], lugares: ['haran', 'damasco', 'r-galaad-mizpa', 'r-mahanaim'], trazos: ['pt-jacob-ida', 'pt-jacob-vuelta'] } },
          { t: 'Peniel, Sucot, Siquem, Betel, Efrata y Mamre (Gn 32:30–35:27).', fecha: -1900, estado: { view: V.canaan, capas: [], lugares: ['r-peniel', 'r-mahanaim', 'sucot', 'siquem', 'betel', 'efrata', 'mamre'], trazos: ['pt-jacob-vuelta'] } }
        ], 'Los viajes de Jacob'),
        tabla({
          titulo: 'Jacob, lugar por lugar',
          cab: ['Lugar', 'Qué pasó', 'Texto'],
          filas: [
            ['Beerseba', 'Sale huyendo de Esaú', 'Gn 28:10'],
            ['Betel', 'La escalera; el voto', 'Gn 28:11-22'],
            ['Harán', 'Veinte años con Labán; once hijos', 'Gn 29–31'],
            ['Galaad', 'Pacto con Labán', 'Gn 31:44-55'],
            ['Mahanaim', 'Ángeles de Dios; «dos campamentos»', 'Gn 32:1-2'],
            ['Peniel (Jaboc)', 'La lucha; el nombre Israel', 'Gn 32:22-32'],
            ['Sucot', 'Casa y cabañas', 'Gn 33:17'],
            ['Siquem', 'Compra un campo; altar; Dina', 'Gn 33:18–34:31'],
            ['Betel', 'Quita los ídolos; Dios confirma el nombre Israel', 'Gn 35:1-15'],
            ['Efrata', 'Nace Benjamín; muere Raquel', 'Gn 35:16-20'],
            ['Mamre', 'Muere Isaac', 'Gn 35:27-29']
          ],
          nota: 'El texto no detalla el camino de ida; el mapa sigue el más probable, por Damasco.'
        })
      ],
      texto: [
        'La vida de Jacob tiene forma de viaje de ida y vuelta: sale de Canaán huyendo, pasa veinte años en Harán y regresa convertido en Israel. El mapa por pasos lo muestra. Los dos extremos del viaje están marcados por encuentros con Dios: Betel a la ida, Mahanaim y Peniel a la vuelta.',
        { h: 'La ida' },
        'Jacob salió de Beerseba solo, con su bastón, y la primera noche que se menciona la pasó en Betel, a unos cien kilómetros. Desde allí, el camino más probable seguía la serranía hacia el norte, cruzaba el Jordán y subía por el oriente hasta Damasco, y luego atravesaba Siria hasta Harán. Eran unos 800 kilómetros, más de un mes de camino a pie. Génesis lo resume en una frase: «Siguió luego Jacob su camino» (Gn 29:1).',
        { h: 'La vuelta' },
        'El regreso fue distinto: Jacob volvía con dos esposas, dos concubinas, once hijos, una hija, siervos y grandes rebaños. Un grupo así avanza despacio. Labán lo alcanzó a los siete días en los montes de Galaad. El camino bajaba por el oriente del Jordán hasta el arroyo de Jaboc, donde están Mahanaim y Peniel, y desde allí Jacob cruzó a Canaán por Sucot hasta Siquem. Después bajó por la serranía, el mismo camino de su abuelo, hasta Betel, Efrata y Mamre.',
        { h: 'Ida y vuelta por Betel' },
        'El viaje de Jacob comienza y termina en Betel. A la ida, Dios le prometió estar con él y hacerlo volver. A la vuelta, Dios le recordó esa promesa cumplida y le confirmó su nuevo nombre (Gn 35:9-15). Entre las dos visitas hay veinte años de lucha, engaños, trabajo duro y una noche junto al Jaboc que cambió su vida. La geografía del viaje de Jacob es el mapa de su transformación.',
        'La tabla resume los lugares. Varios serán importantes después: Mahanaim fue capital de Is-boset y refugio de David cuando huyó de Absalón (2 S 2:8; 17:24); Peniel fue fortificada por Jeroboam (1 R 12:25); y Galaad fue la tierra de las tribus del oriente del Jordán.'
      ],
      pensar: 'La vida de Jacob tiene forma de ida y vuelta, con Dios esperándolo en Betel. ¿A qué «Betel» de tu vida necesitas volver para cumplir lo que prometiste a Dios?'
    },
    {
      id: 'mapa-jose', n: 'José, de Dotán a Egipto', ref: 'Génesis 37:12-36; 39:1; 41:41-46', fecha: [-1898, -1885],
      visual: [
        pasos([
          { t: 'José sale del valle de Hebrón, pasa por Siquem y encuentra a sus hermanos en Dotán: unos 100 km (Gn 37:14-17).', fecha: -1898, estado: { view: V.canaan, capas: [], lugares: ['hebron', 'betel', 'siquem', 'dotan'], trazos: ['pt-jose'] } },
          { t: 'La caravana de ismaelitas baja de Dotán a la costa y sigue el camino del mar hacia Gaza (Gn 37:25).', fecha: -1898, estado: { view: V.egipto_canaan, capas: [], lugares: ['dotan', 'gaza'], trazos: ['pt-jose'] } },
          { t: 'Por el norte del Sinaí, la frontera de Egipto y el delta, hasta la capital: unos 550 km desde Dotán (Gn 37:36).', fecha: -1898, estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['dotan', 'gaza', 'pelusio', 'gosen', 'menfis', 'r-itjtawy'], trazos: ['pt-jose'] } }
        ], 'El camino de José'),
        img('../egipto/img/egipto-nilo.webp', 'El río Nilo con campos verdes en sus orillas, palmeras y barcas de vela, con el desierto al fondo', 'El Nilo regaba Egipto cada año: por eso había grano cuando en Canaán faltaba la lluvia.')
      ],
      texto: [
        'El viaje de José a Egipto comenzó como un encargo de su padre y terminó en la esclavitud. El mapa por pasos lo sigue en tres tramos.',
        { h: 'Por la serranía hasta Dotán' },
        'José salió «del valle de Hebrón» (Gn 37:14) hacia el norte. Fue a Siquem, a unos 80 kilómetros, donde sus hermanos apacentaban las ovejas, pero ya no estaban. Un hombre lo encontró «andando él errante por el campo» (Gn 37:15) y le dijo que se habían ido a Dotán, unos 20 kilómetros más al norte. Dotán estaba en un valle fértil que unía la serranía con la llanura de Jezreel y la costa.',
        { h: 'El camino de las caravanas' },
        'Por Dotán pasaba el camino que venía de Galaad, al oriente del Jordán, y bajaba a la costa. Las caravanas de especias, bálsamo y mirra lo usaban para llegar al camino del mar, la gran ruta que unía Egipto con Siria y Mesopotamia. José, atado entre los camellos, bajó por ese camino hacia Gaza y luego por el norte del Sinaí hasta la frontera de Egipto. Era el mismo camino por el que su bisabuelo Abraham había bajado a Egipto en tiempo de hambre.',
        { h: 'La capital de Egipto' },
        'En el Reino Medio, la capital de Egipto era Itjtawy, cerca de Menfis, en la entrada del valle del Nilo. Allí vivían el faraón y sus oficiales, entre ellos Potifar, capitán de la guardia. En total, José recorrió unos 550 kilómetros desde Dotán, unas tres semanas de caravana. Trece años después, el esclavo que había hecho ese camino atado sería el gobernador que vendería grano a todos los pueblos que lo recorrían en tiempos de hambre.',
        { h: 'Una ruta que se repite' },
        'El camino de Canaán a Egipto aparece una y otra vez en Génesis: Abraham baja por el hambre; José baja como esclavo; los hermanos bajan a comprar grano dos veces; Jacob baja con toda su familia; y el cortejo fúnebre de Jacob sube. Y siglos después, José, el esposo de María, bajará por ese mismo camino con el niño Jesús para huir de Herodes, y Mateo verá allí el cumplimiento de «De Egipto llamé a mi Hijo» (Mt 2:15).',
        ir('Ver «Egipto en el Nuevo Testamento» en Egipto', '../../egipto/#biblia/6')
      ],
      pensar: 'José recorrió atado el camino que después recorrerían su familia y otros pueblos para ser salvados por él. ¿Puede Dios usar el camino más doloroso de tu vida para bendecir a otros?'
    },
    {
      id: 'mapa-egipto', n: 'Jacob baja a Egipto', ref: 'Génesis 42–47; 50:7-14; Éxodo 1:1-7; 12:40-41', fecha: [-1877, -1859],
      visual: [
        pasos([
          { t: 'Los hermanos bajan dos veces a comprar grano, de Hebrón a la capital de Egipto (Gn 42–44).', fecha: -1877, estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['hebron', 'gaza', 'pelusio', 'menfis'], trazos: ['pt-hermanos'] } },
          { t: 'Jacob baja con setenta personas por Beerseba hasta Gosén (Gn 46:1-7, 27-28).', fecha: -1876, estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['hebron', 'beerseba', 'pelusio', 'gosen'], trazos: ['pt-jacob-egipto'] } },
          { t: 'El cortejo fúnebre de Jacob sube de Gosén a Macpela (Gn 50:7-13).', fecha: -1859, estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['gosen', 'pelusio', 'gaza', 'hebron'], trazos: ['pt-entierro'] } },
          { t: 'Israel se queda en Gosén 430 años, hasta el Éxodo (Éx 12:40-41).', fecha: -1446, estado: { view: [[29.6, 30.6], [31.7, 33.4]], capas: ['egipto-1900'], lugares: ['gosen', 'rameses', 'piton', 'on', 'menfis', 'tanis'] } }
        ], 'De Canaán a Gosén'),
        tabla({
          titulo: 'Los viajes entre Canaán y Egipto en Génesis',
          cab: ['Quién', 'Por qué', 'Texto'],
          filas: [
            ['Abram y Sarai', 'Hambre en Canaán', 'Gn 12:10'],
            ['José', 'Vendido como esclavo', 'Gn 37:28'],
            ['Diez hermanos', 'Comprar grano', 'Gn 42:3'],
            ['Once hermanos con Benjamín', 'Comprar grano de nuevo', 'Gn 43:15'],
            ['Jacob y setenta personas', 'Invitados por Faraón; Dios lo manda', 'Gn 46:3-7'],
            ['José, sus hermanos y los egipcios', 'Sepultar a Jacob en Macpela', 'Gn 50:7-14']
          ],
          nota: 'Isaac es el único patriarca que nunca bajó a Egipto: Dios se lo prohibió (Gn 26:2).'
        })
      ],
      texto: [
        'El último gran viaje de Génesis es el de Jacob con toda su familia a Egipto. Es un viaje al revés de lo que se esperaría: la familia de la tierra prometida deja la tierra prometida. El mapa por pasos muestra los viajes de los hermanos, el de Jacob y el regreso del cortejo fúnebre.',
        { h: 'Por qué Egipto' },
        'El hambre empujó a la familia, pero Génesis deja ver otras razones. En Canaán, los hijos de Jacob se estaban mezclando con los cananeos: Judá se había casado con una cananea, y sus hijos se apartaban del camino de Dios. En Egipto, los egipcios despreciaban a los pastores y no se mezclaban con ellos (Gn 43:32; 46:34). En Gosén, aparte, Israel pudo crecer como un pueblo distinto. Dios había anunciado a Abraham que su descendencia viviría en tierra ajena antes de heredar Canaán (Gn 15:13).',
        { h: 'Gosén' },
        'Gosén estaba en el delta oriental del Nilo, la puerta de Egipto para quien venía de Canaán. Tenía buenos pastos y agua, y estaba cerca de la frontera. Siglos después, allí estarán las ciudades de almacenaje que los israelitas edificaron como esclavos, Pitón y Ramesés (Éx 1:11), y desde allí comenzará el Éxodo. El último paso del mapa muestra la región.',
        { h: 'Cuatrocientos treinta años' },
        'La familia que bajó con setenta personas salió de Egipto como un pueblo: «Partieron los hijos de Israel de Ramesés a Sucot, como seiscientos mil hombres de a pie, sin contar los niños» (Éx 12:37). La promesa de una descendencia como las estrellas se había cumplido en Egipto. Faltaba la promesa de la tierra. Génesis termina con Israel en Egipto, y Éxodo comienza con los nombres de los hijos de Israel que entraron en Egipto con Jacob (Éx 1:1). Los dos libros son una sola historia.',
        'La tabla reúne todos los viajes entre Canaán y Egipto en Génesis. El recurso El Éxodo y el desierto, en preparación, seguirá el camino de vuelta.',
        ir('Ver «Moisés y el Éxodo» en Egipto', '../../egipto/#biblia/2')
      ],
      pensar: 'Dios llevó a Israel a Egipto para que creciera como pueblo apartado antes de darle la tierra. ¿Puede ser que una etapa que te parece un retroceso sea en realidad el lugar donde Dios te está formando?'
    },
    {
      id: 'tumbas', n: 'Las tumbas de los patriarcas', ref: 'Génesis 23:17-20; 25:9-10; 35:19-20; 49:29-32; 50:13; Josué 24:32; Hechos 7:15-16', fecha: [-2029, -1406],
      visual: [
        mapa({ view: V.centro, capas: [], lugares: ['hebron', 'efrata', 'siquem', 'betel'] }, 'Las tumbas'),
        tabla({
          titulo: 'Dónde fueron sepultados',
          cab: ['Persona', 'Lugar', 'Texto'],
          filas: [
            ['Sara', 'Cueva de Macpela, Hebrón', 'Gn 23:19'],
            ['Abraham', 'Cueva de Macpela', 'Gn 25:9-10'],
            ['Débora, nodriza de Rebeca', 'Bajo una encina, junto a Betel', 'Gn 35:8'],
            ['Raquel', 'Camino de Efrata (Belén)', 'Gn 35:19-20'],
            ['Isaac y Rebeca', 'Cueva de Macpela', 'Gn 35:29; 49:31'],
            ['Lea', 'Cueva de Macpela', 'Gn 49:31'],
            ['Jacob', 'Cueva de Macpela', 'Gn 50:13'],
            ['José', 'Siquem, en el campo de Jacob', 'Jos 24:32'],
            ['Los hijos de Jacob', 'Esteban dice que fueron trasladados a Siquem', 'Hch 7:15-16']
          ],
          nota: 'Hoy se veneran la tumba de los patriarcas en Hebrón, la tumba de Raquel cerca de Belén y la tumba de José en Nablus; las dos últimas son tradiciones que no se pueden confirmar.'
        }),
        foto('img/pt-macpela.jpg', 'El edificio de la Tumba de los Patriarcas en Hebrón visto desde el sur: un gran recinto rectangular de grandes bloques de piedra con pilastras, de la época de Herodes, almenas y dos minaretes posteriores, con una escalinata en primer plano', 'El recinto de Herodes sobre la cueva de Macpela, en Hebrón; las almenas y los minaretes son posteriores.', 'Foto: Djampa, CC BY-SA 4.0, Wikimedia Commons')
      ],
      texto: [
        'Los patriarcas murieron sin poseer la tierra, pero quisieron ser sepultados en ella. Las tumbas fueron su manera de afirmar que la promesa era verdadera. La tabla reúne los lugares de sepultura que menciona la Biblia.',
        { h: 'Macpela' },
        'La cueva de Macpela, en Hebrón, fue la tumba de la familia. Abraham la compró para Sara, y allí fueron sepultados él mismo, Isaac y Rebeca, Lea y Jacob. Jacob la describe en su lecho de muerte con todo detalle, como si fuera su casa: «la cueva que está en el campo de Macpela, al oriente de Mamre en la tierra de Canaán» (Gn 49:30). Para un hombre que había vivido en Harán y en Egipto, esa cueva era el pedazo de la promesa que ya le pertenecía.',
        'Hacia el siglo I a.C., Herodes el Grande construyó sobre el lugar un enorme recinto de piedra, con muros de bloques gigantes, que todavía se conserva. Es el único edificio de Herodes que sigue en pie casi completo. Con los siglos fue iglesia bizantina, mezquita, iglesia de los cruzados y otra vez mezquita. La foto muestra el recinto.',
        { h: 'Raquel y José' },
        'Raquel no fue sepultada en Macpela, sino junto al camino donde murió, cerca de Belén, y Jacob levantó un pilar sobre su tumba (Gn 35:20). José fue sepultado en Siquem cuando Israel entró en la tierra. La tradición venera hoy la tumba de Raquel a la entrada de Belén y la de José en Nablus, la antigua Siquem, pero ninguna de las dos ubicaciones se puede confirmar.',
        { h: 'Hebrón hoy' },
        'La Tumba de los Patriarcas, que los musulmanes llaman la mezquita de Ibrahim, es sagrada para judíos, musulmanes y cristianos, y está en el centro del conflicto entre israelíes y palestinos. Desde la masacre de 1994, cuando un colono israelí mató a 29 palestinos que oraban en la mezquita, el edificio está dividido en una sección judía y otra musulmana. Desde 1997, Hebrón está dividida en una zona bajo la Autoridad Palestina y otra, que incluye la tumba, bajo control militar israelí. En junio de 2026, el gobierno israelí anunció que asumía la administración de las obras del lugar: para los israelíes que lo apoyan, asegura el acceso de los judíos a un lugar santo; para los palestinos y la municipalidad de Hebrón, es una violación del statu quo y de sus derechos. Esta descripción corresponde a noviembre de 2026 y se revisará periódicamente.',
        'La tumba de los padres de Israel es hoy un lugar de división. Los patriarcas esperaban algo mejor: Hebreos dice que murieron sin recibir lo prometido, «mirándolo de lejos» (He 11:13).'
      ],
      pensar: 'Abraham compró una tumba en la tierra prometida antes de poseer la tierra. ¿Qué decisiones concretas tomas hoy que muestran que crees en las promesas de Dios para el futuro?'
    }
  ];

  /* ---------------- VII. Los patriarcas en toda la Biblia ---------------- */
  const biblia = [
    {
      id: 'dios-patriarcas', n: 'El Dios de Abraham, de Isaac y de Jacob', ref: 'Génesis 14:19; 16:13; 17:1; 21:33; 31:42; Éxodo 3:6, 15; 6:3; Mateo 22:31-32', fecha: [-2091, -1859],
      visual: [
        tabla({
          titulo: 'Los nombres de Dios en la historia de los patriarcas',
          cab: ['Nombre', 'Significado', 'Dónde aparece'],
          filas: [
            ['El Elyón', 'Dios Altísimo, creador de los cielos y de la tierra', 'Melquisedec y Abram (Gn 14:18-22)'],
            ['El Roí', 'El Dios que me ve', 'Agar en el desierto (Gn 16:13)'],
            ['El Shaddai', 'Dios Todopoderoso (omnipotente)', 'A Abram, Isaac y Jacob (Gn 17:1; 28:3; 35:11)'],
            ['El Olam', 'Dios eterno', 'Abraham en Beerseba (Gn 21:33)'],
            ['Jehová-jireh', 'Jehová proveerá', 'Moriah (Gn 22:14)'],
            ['El-Elohe-Israel', 'Dios, el Dios de Israel', 'Jacob en Siquem (Gn 33:20)'],
            ['El-bet-el', 'El Dios de Betel', 'Jacob en Betel (Gn 35:7)'],
            ['El Temor de Isaac', 'El Dios a quien Isaac reverenciaba', 'Jacob ante Labán (Gn 31:42, 53)'],
            ['El Fuerte de Jacob', 'El Poderoso de Jacob; el Pastor, la Roca', 'Jacob bendice a José (Gn 49:24)']
          ],
          nota: 'Cada nombre nace de una experiencia concreta con Dios.'
        }),
        cita('Éxodo 3:6, 15', '@@ex/3/6,15')
      ],
      texto: [
        'Cuando Dios se presentó a Moisés en la zarza, no se presentó como el Creador del universo ni como el Dios de las naciones, sino como «el Dios de tu padre, Dios de Abraham, Dios de Isaac, y Dios de Jacob» (Éx 3:6). Y agregó: «Este es mi nombre para siempre; con él se me recordará por todos los siglos» (Éx 3:15). Dios eligió darse a conocer por su relación con tres hombres concretos.',
        { h: 'Nombres nacidos de la experiencia' },
        'Los patriarcas no tenían una teología escrita. Conocieron a Dios en los momentos de su vida, y cada experiencia dejó un nombre. La tabla los reúne. Melquisedec le enseñó a Abram que Dios es El Elyón, el Altísimo, dueño de cielos y tierra. Agar, sola en el desierto, descubrió a El Roí, el Dios que ve. Abraham, ante la imposibilidad de tener un hijo, conoció a El Shaddai, el Todopoderoso. En Moriah descubrió que Jehová provee. Jacob llamó a Dios «el Temor de Isaac» y «el Fuerte de Jacob».',
        { h: 'El nombre Jehová' },
        'Dios le dijo a Moisés: «aparecí a Abraham, a Isaac y a Jacob como Dios Omnipotente, mas en mi nombre JEHOVÁ no me di a conocer a ellos» (Éx 6:3). Pero el nombre Jehová aparece muchas veces en Génesis, en boca de los patriarcas. La explicación más común es que los patriarcas conocían el nombre, pero no habían experimentado todo lo que significaba: el Dios que cumple su pacto y redime a su pueblo, como lo haría en el Éxodo. Conocían las promesas; Israel conocería el cumplimiento.',
        { h: 'Un Dios personal' },
        'Que Dios sea «el Dios de Abraham, de Isaac y de Jacob» dice algo de Él: no es un poder lejano, sino un Dios que se compromete con personas, con sus familias y sus historias. Cada patriarca tuvo una relación distinta con Él: Abraham, de fe y amistad; Isaac, de paz y continuidad; Jacob, de lucha y transformación. Dios no los obligó a ser iguales.',
        { h: 'Dios de vivos' },
        'Jesús usó este nombre para probar la resurrección. Si Dios, siglos después de la muerte de los patriarcas, se presenta como su Dios, es porque ellos viven para Él: «Dios no es Dios de muertos, sino de vivos» (Mt 22:32). La relación de Dios con los patriarcas no terminó con su muerte.',
        ir('Ver «Elohim y El» en Dios y la Trinidad', '../../dios-y-la-trinidad/#nombres/1')
      ],
      pensar: 'Cada patriarca conoció a Dios de una manera distinta y le dio un nombre por lo que vivió. Si tuvieras que nombrar a Dios por lo que has vivido con Él, ¿qué nombre le darías?'
    },
    {
      id: 'fe-abraham', n: 'La fe de Abraham', ref: 'Génesis 15:6; Romanos 4:1-25; Gálatas 3:6-9, 29; Hebreos 11:8-19; Santiago 2:21-24', fecha: -2081,
      visual: [
        tabla({
          titulo: 'Abraham en el Nuevo Testamento',
          cab: ['Texto', 'Lo que enseña', 'Momento de la vida de Abraham'],
          filas: [
            ['Romanos 4', 'La justificación es por la fe, no por obras ni por la circuncisión', 'Gn 15:6, antes de Gn 17'],
            ['Gálatas 3', 'Los que creen son hijos de Abraham y herederos de la promesa', 'Gn 12:3; 15:6'],
            ['Hebreos 11', 'La fe obedece, espera y confía en que Dios resucita', 'Gn 12; 22'],
            ['Santiago 2', 'La fe verdadera se demuestra en las obras', 'Gn 22, confirmando Gn 15:6'],
            ['Juan 8', 'Abraham se gozó de ver el día de Cristo', 'Toda su vida'],
            ['Lucas 16', 'Lázaro descansa en «el seno de Abraham»', 'Después de su muerte']
          ],
          nota: 'Abraham es el personaje del Antiguo Testamento más citado en el Nuevo después de Moisés.'
        }),
        esq('img/esquema-fe-abraham.svg', 'Línea de la vida de Abraham con tres momentos: Génesis 15, creyó a Jehová, marcado como la fe que justifica (Romanos 4); Génesis 17, la circuncisión, catorce años después, como señal; y Génesis 22, Moriah, unos treinta años después, como la fe que se demuestra en obras (Santiago 2)', 'Pablo y Santiago miran momentos distintos de la misma fe.')
      ],
      texto: [
        'El Nuevo Testamento presenta a Abraham como el modelo de la fe. Pablo, Santiago y el autor de Hebreos lo usan, cada uno con un énfasis distinto. La tabla resume sus enseñanzas.',
        { h: 'Pablo: justificado por la fe' },
        'Pablo argumenta en Romanos 4 que Abraham no fue declarado justo por sus obras: «Creyó Abraham a Dios, y le fue contado por justicia» (Ro 4:3). Y hace una pregunta clave: ¿cuándo pasó eso, antes o después de la circuncisión? Antes: Génesis 15 ocurre al menos catorce años antes de Génesis 17. Por eso Abraham es padre de los creyentes incircuncisos, es decir, de los gentiles, y también de los circuncisos que creen (Ro 4:10-12). En Gálatas agrega que la Escritura, previendo que Dios justificaría a los gentiles por la fe, «dio de antemano la buena nueva a Abraham» (Gá 3:8). Todo el que cree en Cristo es hijo de Abraham (Gá 3:29).',
        { h: 'Santiago: una fe que obra' },
        'Santiago parece decir lo contrario: «¿No fue justificado por las obras Abraham nuestro padre, cuando ofreció a su hijo Isaac sobre el altar?» (Stg 2:21). Pero Santiago mira otro momento. Habla de Génesis 22, unos treinta años después de Génesis 15. La fe que Dios contó por justicia en Génesis 15 se demostró verdadera en Moriah: «la fe actuó juntamente con sus obras, y que la fe se perfeccionó por las obras» (Stg 2:22). El esquema muestra los tres momentos. Pablo enseña cómo somos aceptados por Dios; Santiago, cómo se reconoce una fe verdadera.',
        { h: 'Hebreos: una fe que espera' },
        'Hebreos 11 dedica más espacio a Abraham que a nadie. Destaca una fe que obedece sin saber adónde va, que vive como extranjera esperando una ciudad celestial, que recibe fuerza para lo imposible y que confía en que Dios resucita a los muertos (He 11:8-19). Y dice de todos los patriarcas: «Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos» (He 11:13).',
        { h: 'Una fe con dudas' },
        'La fe de Abraham no fue perfecta. Dudó en Egipto y en Gerar; aceptó el plan de Sarai con Agar; se rió ante la promesa de un hijo. Pero no abandonó la promesa. Pablo dice que «no se debilitó en la fe» al mirar su cuerpo ya como muerto (Ro 4:19). La fe que justifica no es una fe sin luchas, sino una fe que, a pesar de todo, se apoya en Dios.',
        { ejercicio: {
          pregunta: '¿Cómo se armonizan Romanos 4 y Santiago 2 al hablar de Abraham?',
          opciones: [
            { t: 'Se contradicen: Pablo enseña la fe y Santiago las obras, y hay que elegir.', ok: false, por_que: 'Los dos citan Génesis 15:6 y los dos afirman la fe. No hablan de lo mismo ni del mismo momento.' },
            { t: 'Pablo habla de cómo Dios declara justo al que cree (Gn 15); Santiago, de cómo se demuestra que esa fe es verdadera (Gn 22).', ok: true, por_que: 'Génesis 15 y 22 están separados por unos treinta años: la fe que justificó a Abraham se mostró viva cuando obedeció en Moriah.' },
            { t: 'Abraham fue justificado por la circuncisión, que es una obra.', ok: false, por_que: 'Pablo muestra que fue justificado antes de la circuncisión (Ro 4:10). La circuncisión fue señal de una fe que ya tenía.' }
          ],
          explicacion: 'Somos aceptados por Dios solo por la fe, y la fe verdadera nunca está sola: produce obediencia.'
        } }
      ],
      pensar: 'Hebreos dice que los patriarcas murieron «mirando de lejos» lo prometido. ¿Tu fe depende de ver cumplidas las promesas en tu vida, o puedes confiar aunque no veas su cumplimiento?'
    },
    {
      id: 'eleccion', n: 'La elección: Isaac, no Ismael; Jacob, no Esaú', ref: 'Génesis 17:18-21; 21:12-13; 25:23; Malaquías 1:2-3; Romanos 9:6-16; 11:28-32', fecha: -2006,
      visual: [
        tabla({
          titulo: 'Los elegidos y los no elegidos en Génesis',
          cab: ['Elegido para la promesa', 'No elegido', 'Lo que Dios hizo con el no elegido'],
          filas: [
            ['Isaac', 'Ismael', 'Lo bendijo, lo multiplicó y lo hizo padre de doce príncipes (Gn 17:20; 21:13, 18)'],
            ['Jacob', 'Esaú', 'Le dio el monte Seir por heredad y un pueblo con reyes (Gn 36; Dt 2:5)'],
            ['Efraín', 'Manasés', 'También fue bendecido y llegó a ser un pueblo grande (Gn 48:19)'],
            ['José y Judá', 'Rubén', 'Siguió siendo una tribu de Israel (Gn 49:3-4)']
          ],
          nota: 'En Génesis, la elección de uno para llevar la promesa no significa el abandono del otro.'
        })
      ],
      texto: [
        'Una y otra vez, Génesis muestra que Dios elige al que no se esperaba. No elige a Ismael, el primogénito de Abraham, sino a Isaac. No elige a Esaú, el mayor, sino a Jacob. No elige a Manasés, sino a Efraín. La promesa no pasa por el derecho natural del mayor, sino por la decisión libre de Dios.',
        { h: 'Antes que hicieran bien o mal' },
        'Pablo toma este tema en Romanos 9. Quiere explicar por qué muchos israelitas no han creído en Cristo, y si eso significa que la promesa de Dios falló. Responde que no: «no todos los que descienden de Israel son israelitas» (Ro 9:6). Siempre hubo una elección dentro de la familia de Abraham. Con Jacob y Esaú lo muestra con claridad: antes de que nacieran, «no habían aún nacido, ni habían hecho aún ni bien ni mal», Dios dijo que el mayor serviría al menor (Ro 9:11-12). Y cita a Malaquías: «A Jacob amé, mas a Esaú aborrecí» (Ro 9:13).',
        { h: '¿Qué significa «aborrecí»?' },
        'En el lenguaje bíblico, «amar» y «aborrecer» pueden expresar una preferencia, no un sentimiento. Jacob amó a Raquel «más que a Lea», y por eso el texto dice que Lea era «menospreciada» (Gn 29:30-31): la palabra hebrea es la que suele traducirse aborrecer. Jesús dijo que quien no aborrece a su padre y a su madre no puede ser su discípulo (Lc 14:26), y en Mateo lo explica: quien ama a padre o madre «más que a mí» (Mt 10:37). Malaquías, además, habla de los pueblos, Israel y Edom, no solo de dos personas. La tabla muestra que Dios bendijo también a los que no eligió para llevar la promesa.',
        { posturas: {
          titulo: '¿Qué tipo de elección enseña Romanos 9?',
          a: { n: 'Elección para un papel en la historia de la salvación', t: 'Dios eligió a Jacob y a Israel para llevar la promesa y traer al Mesías, no para salvar a Jacob y condenar a Esaú. Pablo habla de pueblos y de propósitos (el mayor servirá al menor), y en el mismo argumento afirma que la salvación personal es para todo el que cree (Ro 10:9-13) y que Dios quiere tener misericordia de todos (Ro 11:32). Los no elegidos fueron bendecidos, y cualquiera de sus descendientes podía unirse al pueblo de Dios.' },
          b: { n: 'Elección incondicional de individuos para salvación', t: 'La tradición calvinista entiende que Romanos 9 enseña que Dios eligió desde la eternidad a ciertas personas para ser salvas, sin mirar su fe ni sus obras, y que Jacob y Esaú son ejemplos de esa elección personal. Destacan que Pablo responde a la objeción «¿hay injusticia en Dios?» (Ro 9:14), que solo tendría sentido si se trata de una elección incondicional.' },
          c: 'Este recurso sigue la primera lectura, que es la de las Asambleas de Dios y de la tradición arminiana: Dios elige libremente a quién usa en su plan, y su soberanía no anula que la salvación se ofrece a todos y se recibe por la fe. Las dos posturas afirman que Dios es soberano y que su elección no depende de los méritos humanos.'
        } },
        'Lo que Génesis muestra con claridad es que la elección es por gracia. Jacob no era mejor que Esaú. Era tan pecador como su hermano, y en muchos sentidos peor. Dios no lo eligió porque lo mereciera, sino para mostrar que su propósito no depende de la fuerza, el mérito ni el orden natural. «No depende del que quiere, ni del que corre, sino de Dios que tiene misericordia» (Ro 9:16).'
      ],
      pensar: 'Dios eligió a Jacob, que no lo merecía. ¿Qué te dice eso sobre tu propia salvación, y sobre la forma en que miras a los que todavía no conocen a Dios?'
    },
    {
      id: 'jose-cristo', n: 'José y Cristo', ref: 'Génesis 37–50; Hechos 7:9-14; Filipenses 2:6-11; Hebreos 2:10', fecha: -1885,
      visual: [
        tabla({
          titulo: 'Paralelos entre José y Jesús',
          cab: ['José', 'Jesús'],
          filas: [
            ['Amado por su padre (Gn 37:3)', '«Este es mi Hijo amado» (Mt 3:17)'],
            ['Enviado por su padre a sus hermanos (Gn 37:13)', 'Enviado por el Padre a los suyos (Jn 1:11)'],
            ['Aborrecido por sus hermanos (Gn 37:4)', '«Sin causa me aborrecieron» (Jn 15:25)'],
            ['Vendido por veinte piezas de plata (Gn 37:28)', 'Vendido por treinta piezas de plata (Mt 26:15)'],
            ['Tentado y sin pecado (Gn 39)', 'Tentado en todo, pero sin pecado (He 4:15)'],
            ['Condenado entre dos culpables: uno es restaurado, el otro muere (Gn 40)', 'Crucificado entre dos malhechores: uno entra al paraíso (Lc 23:39-43)'],
            ['De la cárcel al trono a los 30 años (Gn 41:46)', 'Comienza su ministerio a los 30 años (Lc 3:23)'],
            ['Toda rodilla se dobla ante él (Gn 41:43)', 'Toda rodilla se doblará ante Él (Fil 2:10)'],
            ['Da pan a todas las naciones (Gn 41:57)', '«Yo soy el pan de vida» (Jn 6:35)'],
            ['Perdona a los que lo vendieron (Gn 45:5; 50:20)', '«Padre, perdónalos» (Lc 23:34)']
          ],
          nota: 'El Nuevo Testamento no llama a José «tipo» de Cristo, pero Esteban cuenta su historia como anticipo del rechazo de Jesús (Hch 7:9-14).'
        })
      ],
      texto: [
        'Muchos lectores de Génesis, desde la iglesia antigua, han notado que la vida de José se parece a la de Jesús. La tabla reúne algunos de los paralelos. No son coincidencias que haya que forzar: la historia del hijo amado, rechazado por sus hermanos, que sufre injustamente, es exaltado y salva a los mismos que lo rechazaron, es la forma de la historia de Cristo.',
        { h: 'Lo que dice el Nuevo Testamento' },
        'El Nuevo Testamento no llama a José una figura de Cristo de manera explícita, como hace con Adán (Ro 5:14) o con Melquisedec (He 7:3). Pero Esteban, en su discurso ante el Sanedrín, cuenta la historia de José con intención: los patriarcas, por envidia, lo vendieron, «pero Dios estaba con él», lo libró y lo hizo gobernador; y en la segunda visita «José se dio a conocer a sus hermanos» (Hch 7:9-13). Esteban terminará acusando a sus oyentes de haber entregado y matado al Justo (Hch 7:52). Para Esteban, Israel trató a Jesús como los hermanos trataron a José.',
        { h: 'Humillación y exaltación' },
        'El paralelo más profundo es el camino. José bajó a la cisterna, a la esclavitud y a la cárcel antes de subir al trono. Cristo «se humilló a sí mismo, haciéndose obediente hasta la muerte», y por eso Dios lo exaltó hasta lo sumo, para que en su nombre se doble toda rodilla (Fil 2:8-10). El sufrimiento no fue un accidente en el camino, sino el camino mismo hacia la gloria y la salvación de otros.',
        { h: 'Con cuidado' },
        'Leer a José como figura de Cristo ayuda a ver la unidad de la Biblia, pero hay que hacerlo con cuidado. José no era Cristo: tenía defectos, como la imprudencia de su juventud y la dureza con que administró Egipto. Los paralelos sirven para ver que Dios ya trabajaba con el mismo patrón, no para encontrar un significado escondido en cada detalle. Cómo interpretar la Biblia explica el método, y el recurso Tipos y figuras de Cristo, en preparación, lo desarrollará.',
        ir('Ver «Figuras de Cristo» en La persona y obra de Cristo', '../../persona-y-obra-de-cristo/#antes/5')
      ],
      pensar: 'José llegó al trono pasando por la cisterna y la cárcel, como Cristo llegó a la gloria por la cruz. ¿Cómo cambia tu manera de ver el sufrimiento cuando lo miras desde el camino de Cristo?'
    },
    {
      id: 'abraham-hoy', n: 'Abraham en el judaísmo, el cristianismo y el islam', ref: 'Génesis 12:3; 17:4-5; Juan 8:39, 56-58; Romanos 4:16-17; Gálatas 3:7, 29; Isaías 41:8', fecha: -1991,
      visual: [
        tabla({
          titulo: 'Abraham en tres religiones',
          cab: ['', 'Judaísmo', 'Cristianismo', 'Islam'],
          filas: [
            ['Cómo lo llaman', 'Avraham avinu, «Abraham nuestro padre»', 'Padre de todos los creyentes', 'Ibrahim, profeta y «amigo de Dios» (jalil Allah)'],
            ['Su descendencia', 'El pueblo judío, por Isaac y Jacob', 'Todos los que creen en Cristo, judíos y gentiles', 'Los árabes por Ismael, y los creyentes en un solo Dios'],
            ['El hijo ofrecido', 'Isaac (la Akedá, «la atadura»)', 'Isaac, figura del Hijo dado por Dios', 'La mayoría de los intérpretes: Ismael'],
            ['Su lugar santo', 'Hebrón; Jerusalén, el monte Moriah', 'Ningún lugar: la promesa se cumple en Cristo', 'La Meca: según la tradición, Ibrahim e Ismael edificaron la Kaaba'],
            ['Fuente', 'Génesis y la tradición rabínica', 'Génesis leído a la luz del Nuevo Testamento', 'El Corán y la tradición islámica']
          ],
          nota: 'Las creencias de cada religión se describen según sus propias fuentes y con respeto por sus creyentes.'
        })
      ],
      texto: [
        'Abraham es el único personaje de la historia al que más de tres mil millones de personas llaman padre o modelo de fe. Por eso se habla a veces de las tres «religiones abrahámicas»: el judaísmo, el cristianismo y el islam. La tabla compara cómo lo ve cada una.',
        { h: 'En el judaísmo' },
        'Para el pueblo judío, Abraham es «nuestro padre», el primero que conoció al Dios único y el origen de la nación. La circuncisión, señal del pacto con Abraham, se practica hasta hoy al octavo día. El relato del sacrificio de Isaac, la Akedá, se lee en el año nuevo judío. La tradición rabínica agregó relatos que no están en la Biblia, como el de Abraham rompiendo los ídolos de su padre en Ur.',
        { h: 'En el islam' },
        'El islam honra a Abraham, Ibrahim en árabe, como uno de los grandes profetas, el modelo del creyente que se somete a un solo Dios. Según el Corán y su tradición, Ibrahim e Ismael edificaron la Kaaba en La Meca, y la peregrinación anual recuerda episodios de la vida de Agar, Ismael e Ibrahim. La mayoría de los intérpretes musulmanes enseñan que el hijo ofrecido fue Ismael, y los árabes se consideran sus descendientes. Los musulmanes no aceptan que Jesús sea el Hijo de Dios ni que haya muerto en la cruz.',
        { h: 'En el cristianismo' },
        'Para la fe cristiana, la promesa a Abraham se cumple en Jesucristo, su descendiente, por quien la bendición llega a todas las naciones (Gá 3:16). Jesús dijo: «Abraham vuestro padre se gozó de que había de ver mi día; y lo vio, y se gozó» (Jn 8:56), y a continuación: «Antes que Abraham fuese, yo soy» (Jn 8:58). Ser hijo de Abraham no depende de la sangre, sino de la fe: «sabed, por tanto, que los que son de fe, éstos son hijos de Abraham» (Gá 3:7). Jesús también advirtió que decir «nuestro padre es Abraham» no basta: los verdaderos hijos hacen las obras de Abraham (Jn 8:39).',
        { h: 'Un solo Abraham, dos caminos' },
        'Hablar de tres religiones abrahámicas puede dar la impresión de que todas son caminos iguales hacia el mismo Dios. La Biblia no permite esa conclusión: la promesa a Abraham apunta a Cristo, y «en ningún otro hay salvación» (Hch 4:12). Pero el respeto que estas religiones tienen por Abraham es un punto de encuentro valioso para conversar con judíos y musulmanes, y para mostrarles con amor cómo Dios cumplió en Jesús lo que le prometió a Abraham.',
        { h: 'La promesa sigue' },
        'La historia de los patriarcas no terminó en Génesis. La promesa de una tierra, una descendencia y una bendición para las naciones recorre toda la Biblia, se cumple en Cristo y espera su plenitud en el reino. Los que creen, de toda nación, se sentarán un día «con Abraham e Isaac y Jacob en el reino de los cielos» (Mt 8:11).',
        ir('Ver «Israel y la iglesia: ¿quién hereda las promesas?» en Pactos y dispensaciones', '../../pactos-y-dispensaciones/#cristo/7')
      ],
      pensar: 'Jesús dijo que los verdaderos hijos de Abraham hacen las obras de Abraham. ¿Qué obra de la fe de Abraham, obedecer, esperar o interceder, necesita crecer más en tu vida?'
    }
  ];

  const P = window.__PT;
  delete window.__PT;
  delete window.__PT_H;
  const LINEA = { desde: -2200, hasta: -1780, hitos: [
    { a: -2166, t: 'Nace Abraham' }, { a: -2091, t: 'Sale de Harán' }, { a: -2066, t: 'Nace Isaac' },
    { a: -2006, t: 'Nacen Esaú y Jacob' }, { a: -1991, t: 'Muere Abraham' }, { a: [-1929, -1909], t: 'Jacob en Harán' },
    { a: -1876, t: 'Jacob en Egipto' }, { a: -1805, t: 'Muere José' }
  ] };
  window.RUTA_DATA = {
    titulo: 'Los patriarcas',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio (como La tierra de Israel)
      minZoom: 4.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.PATRIARCAS_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'mundo', grupo: 'Los patriarcas', n: 'I. El mundo de los patriarcas', info: 'Fechas, el Creciente Fértil, Ur y Harán, la vida en tiendas, costumbres e historicidad', estaciones: P.mundo, linea: LINEA },
      { id: 'abraham', grupo: 'Las cuatro generaciones', n: 'II. Abraham', info: 'El llamado, Canaán, Egipto, Lot, Melquisedec, el pacto, Agar, Sodoma, Isaac y Moriah', estaciones: P.abraham, linea: LINEA },
      { id: 'isaac', grupo: 'Las cuatro generaciones', n: 'III. Isaac', info: 'Rebeca, Esaú y Jacob, los pozos, la bendición robada y su legado', estaciones: P.isaac, linea: LINEA },
      { id: 'jacob', grupo: 'Las cuatro generaciones', n: 'IV. Jacob', info: 'Betel, Harán, los doce hijos, Peniel, Esaú, Siquem, Raquel y Edom', estaciones: P.jacob, linea: LINEA },
      { id: 'jose', grupo: 'Las cuatro generaciones', n: 'V. José', info: 'Los sueños, Dotán, Judá y Tamar, Potifar, la cárcel, Faraón, los hermanos y Gosén', estaciones: P.jose, linea: LINEA },
      { id: 'mapas', grupo: 'Mapas', n: 'VI. Los patriarcas en el mapa', info: 'Los viajes de Abraham, Jacob y José, la Canaán de los patriarcas, Egipto y las tumbas', estaciones: mapas, linea: LINEA },
      { id: 'biblia', grupo: 'Temas', n: 'VII. Los patriarcas en toda la Biblia', info: 'Los nombres de Dios, la fe de Abraham, la elección, José y Cristo, y Abraham hoy', estaciones: biblia, linea: LINEA }
    ]
  };
})();
