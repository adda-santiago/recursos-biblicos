/* ==========================================================================
   lugares.js — Atlas bíblico · Recursos Bíblicos
   ==========================================================================
   Un lugar por ubicación; lo que ocurrió ahí va en sus «eventos».
   La lógica del mapa vive en index.html; la lista «Para aprender más» se
   genera en recursos.js (no se edita a mano: herramientas/atlas_recursos.mjs).

   {
     id:  'jerusalen',                 // fijo: lo usan los enlaces y recursos.js
     n:   'Jerusalén',
     lat: 31.778, lng: 35.235,
     alias: ['Getsemaní', 'Gólgota'],  // otros nombres o sitios dentro del lugar (búsqueda)
     geo: ['jerusalen', 'golgota'],    // ids de imperios-geo.js que corresponden a este lugar
     eventos: [{
       t:  'Título breve',
       ty: 'ciudad',                   // ciudad, historia, batalla, milagro, predicacion, profecia, pacto
       ep: ['monarquia-unida'],        // épocas de la taxonomía del sitio (DIRECTRICES §9)
       li: ['2 Samuel'],               // libros (también sirven para buscar)
       r:  '2 S 5:6-9',                // referencias (burbuja de citas)
       d:  'Qué ocurrió ahí.'
     }]
   }
   ========================================================================== */

window.ATLAS_LUGARES = [
// --- Creación y patriarcas ---
{ id:'monte-ararat', n:'Monte Ararat', lat:39.70, lng:44.30, eventos:[
  { t:'El arca reposa', ty:'historia', ep:['creacion'], li:['Génesis'], r:'Gn 8:4', d:'Lugar tradicional donde reposó el arca de Noé tras el diluvio. El texto dice «los montes de Ararat», una región, no un pico preciso.' }]},
{ id:'ur', n:'Ur de los Caldeos', lat:30.9625, lng:46.1053, geo:['ur'], eventos:[
  { t:'Ciudad natal de Abraham', ty:'ciudad', ep:['patriarcas'], li:['Génesis'], r:'Gn 11:31', d:'Ciudad natal de Abraham en Mesopotamia, de donde partió por llamado de Dios hacia una tierra desconocida.' }]},
{ id:'haran', n:'Harán', lat:36.8563, lng:39.0335, geo:['haran'], eventos:[
  { t:'Escala de la familia de Abraham', ty:'ciudad', ep:['patriarcas'], li:['Génesis'], r:'Gn 11:31-32', d:'Lugar donde la familia de Abraham se detuvo antes de continuar hacia Canaán; allí murió Taré, su padre.' }]},
{ id:'siquem', n:'Siquem', lat:32.2137, lng:35.2797, alias:['Sicar','Pozo de Jacob','Ebal','Gerizim'], geo:['sicar'], eventos:[
  { t:'Primer altar de Abraham', ty:'pacto', ep:['patriarcas'], li:['Génesis'], r:'Gn 12:6-7', d:'Primer lugar donde Abraham construyó un altar en Canaán, cuando Dios le prometió dar esa tierra a su descendencia.' },
  { t:'Bendiciones y maldiciones', ty:'pacto', ep:['jueces'], li:['Deuteronomio','Josué'], r:'Dt 27; Jos 8:30-35', d:'En los montes gemelos Ebal y Gerizim, junto a Siquem, Israel proclamó públicamente las bendiciones y maldiciones del pacto.' },
  { t:'Renovación del pacto', ty:'pacto', ep:['jueces'], li:['Josué'], r:'Jos 24', d:'Al final de su vida, Josué reunió aquí a las tribus para renovar el pacto: «yo y mi casa serviremos a Jehová».' },
  { t:'La mujer samaritana', ty:'predicacion', ep:['vida-de-jesus'], li:['Juan'], r:'Jn 4', d:'Junto al pozo de Jacob, cerca de Sicar, Jesús conversó con la mujer samaritana y se reveló como el Mesías.' }]},
{ id:'betel', n:'Betel', lat:31.9306, lng:35.2164, eventos:[
  { t:'La escalera de Jacob', ty:'profecia', ep:['patriarcas'], li:['Génesis'], r:'Gn 28:10-19', d:'Lugar donde Jacob soñó con una escalera que llegaba al cielo y despertó llamando «casa de Dios» a ese sitio.' }]},
{ id:'hebron', n:'Hebrón', lat:31.5326, lng:35.0998, alias:['Mamre','Macpela'], eventos:[
  { t:'Los visitantes de Abraham', ty:'profecia', ep:['patriarcas'], li:['Génesis'], r:'Gn 18', d:'En el encinar de Mamre, junto a Hebrón, Abraham recibió a tres visitantes celestiales que anunciaron el nacimiento de Isaac.' },
  { t:'Sepultura de los patriarcas', ty:'ciudad', ep:['patriarcas'], li:['Génesis'], r:'Gn 23', d:'Abraham compró aquí la cueva de Macpela, donde fueron sepultados Abraham, Isaac y Jacob.' },
  { t:'Primera capital de David', ty:'ciudad', ep:['monarquia-unida'], li:['2 Samuel'], r:'2 S 5:3', d:'David reinó en Hebrón sobre Judá siete años y medio antes de ser ungido rey de todo Israel.' }]},
{ id:'sodoma', n:'Sodoma', lat:31.06, lng:35.40, eventos:[
  { t:'Destrucción de Sodoma', ty:'historia', ep:['patriarcas'], li:['Génesis'], r:'Gn 19', d:'Ciudad destruida por fuego debido a su maldad; su ubicación tradicional se sitúa al sur del mar Muerto, aunque se discute.' }]},
{ id:'beerseba', n:'Beerseba', lat:31.2589, lng:34.7913, eventos:[
  { t:'El pozo del juramento', ty:'pacto', ep:['patriarcas'], li:['Génesis'], r:'Gn 21:31; Jue 20:1', d:'Lugar de pactos entre los patriarcas y los filisteos; marcaba el límite sur de la tierra de Israel («desde Dan hasta Beerseba»).' }]},
{ id:'peniel', n:'Peniel', lat:32.35, lng:35.55, eventos:[
  { t:'Jacob lucha y es llamado Israel', ty:'historia', ep:['patriarcas'], li:['Génesis'], r:'Gn 32:22-30', d:'Lugar junto al río Jaboc donde Jacob luchó toda la noche y recibió el nuevo nombre de Israel.' }]},
{ id:'gosen', n:'Gosén', lat:30.80, lng:31.60, geo:['gosen'], eventos:[
  { t:'Israel en Egipto', ty:'ciudad', ep:['patriarcas','exodo'], li:['Génesis','Éxodo'], r:'Gn 47:6', d:'Región fértil del delta del Nilo donde se asentó la familia de Jacob y donde los israelitas se multiplicaron antes del éxodo.' }]},

{ id:'galaad', n:'Montes de Galaad', lat:32.25, lng:35.75, alias:['Galaad'], eventos:[
  { t:'Jacob y Labán', ty:'pacto', ep:['patriarcas'], li:['Génesis'], r:'Gn 31:21-25, 44-49', d:'Región montañosa al este del Jordán. Jacob huyó hasta el monte de Galaad, donde Labán lo alcanzó y ambos hicieron pacto con un majano de piedras.' }]},
{ id:'seir', n:'Monte Seir', lat:30.45, lng:35.55, alias:['Seir','Edom'], geo:['r-edom','bosra'], eventos:[
  { t:'La tierra de Esaú', ty:'historia', ep:['patriarcas','exodo'], li:['Génesis','Deuteronomio'], r:'Gn 36:8; Dt 2:4-5', d:'Serranía al sureste del mar Muerto donde habitó Esaú, padre de los edomitas. En el camino a Canaán, Israel pasó junto a su territorio sin tomarlo.' }]},

// --- Éxodo y desierto ---
{ id:'mar-rojo', n:'Cruce del mar Rojo', lat:29.97, lng:32.55, alias:['Mar Rojo'], eventos:[
  { t:'Las aguas se abren', ty:'milagro', ep:['exodo'], li:['Éxodo'], r:'Éx 14', d:'Lugar tradicional donde las aguas se abrieron para que Israel escapara del ejército egipcio. El punto exacto del cruce se discute.' }]},
{ id:'monte-sinai', n:'Monte Sinaí', lat:28.5392, lng:33.9734, alias:['Horeb'], geo:['sinai'], eventos:[
  { t:'La ley y el pacto', ty:'pacto', ep:['exodo'], li:['Éxodo'], r:'Éx 19–20', d:'Monte donde Dios entregó los Diez Mandamientos a Moisés y estableció el pacto con Israel. Ubicación tradicional; hay otras propuestas.' },
  { t:'El silbo apacible', ty:'profecia', ep:['monarquia-dividida'], li:['1 Reyes'], r:'1 R 19', d:'En Horeb, el monte de Dios, Elías, huyendo de Jezabel, escuchó la voz de Dios no en el viento ni en el fuego, sino en un silbo apacible.' }]},
{ id:'cades-barnea', n:'Cades-barnea', lat:30.69, lng:34.42, eventos:[
  { t:'Los doce espías', ty:'historia', ep:['exodo'], li:['Números'], r:'Nm 13–14', d:'Campamento israelita desde donde se enviaron los doce espías a explorar Canaán; escenario de la rebelión que costó cuarenta años en el desierto.' }]},
{ id:'monte-nebo', n:'Monte Nebo', lat:31.7667, lng:35.7269, eventos:[
  { t:'Moisés ve la tierra', ty:'historia', ep:['exodo'], li:['Deuteronomio'], r:'Dt 34', d:'Monte desde donde Moisés contempló la Tierra Prometida antes de morir, sin poder entrar en ella.' }]},

// --- Conquista y jueces ---
{ id:'jerico', n:'Jericó', lat:31.8667, lng:35.4497, geo:['jerico'], eventos:[
  { t:'Caen los muros', ty:'milagro', ep:['jueces'], li:['Josué'], r:'Jos 6', d:'Primera ciudad conquistada en Canaán; sus muros cayeron tras siete días de marcha alrededor de la ciudad.' },
  { t:'Bartimeo y Zaqueo', ty:'milagro', ep:['vida-de-jesus'], li:['Lucas'], r:'Lc 18:35–19:10', d:'En su último viaje a Jerusalén, Jesús sanó a un ciego junto al camino y entró en casa de Zaqueo, el jefe de los publicanos.' }]},
{ id:'gilgal', n:'Gilgal', lat:31.8833, lng:35.4667, eventos:[
  { t:'Primer campamento en Canaán', ty:'historia', ep:['jueces'], li:['Josué'], r:'Jos 4–5', d:'Primer campamento de Israel en Canaán tras cruzar el río Jordán; allí levantaron doce piedras como memorial.' }]},
{ id:'hai', n:'Hai', lat:31.9333, lng:35.2833, alias:['Ai'], eventos:[
  { t:'Derrota y conquista de Hai', ty:'batalla', ep:['jueces'], li:['Josué'], r:'Jos 7–8', d:'Escenario de la primera derrota israelita por el pecado oculto de Acán, y luego de su conquista.' }]},
{ id:'gabaon', n:'Gabaón', lat:31.8483, lng:35.1811, eventos:[
  { t:'El sol se detiene', ty:'milagro', ep:['jueces'], li:['Josué'], r:'Jos 10', d:'Lugar de la batalla en la que Josué pidió que el sol se detuviera, y el día se prolongó.' }]},
{ id:'silo', n:'Silo', lat:32.0558, lng:35.2897, eventos:[
  { t:'El tabernáculo en Silo', ty:'ciudad', ep:['jueces'], li:['Josué','Jueces','1 Samuel'], r:'Jos 18:1; 1 S 1–4', d:'Sede del tabernáculo y centro de adoración de Israel antes del templo de Jerusalén; allí creció Samuel.' }]},
{ id:'timnat', n:'Timnat', lat:31.7833, lng:34.9667, alias:['Timná'], eventos:[
  { t:'Sansón y los filisteos', ty:'historia', ep:['jueces'], li:['Jueces'], r:'Jue 14', d:'Escenario del matrimonio de Sansón y del inicio de su enfrentamiento con los filisteos.' }]},
{ id:'gaza', n:'Gaza', lat:31.5017, lng:34.4668, geo:['gaza'], eventos:[
  { t:'La muerte de Sansón', ty:'historia', ep:['jueces'], li:['Jueces'], r:'Jue 16', d:'Ciudad filistea donde Sansón, en su último acto de fuerza, derribó las columnas del templo de Dagón.' }]},
{ id:'meguido', n:'Meguido', lat:32.5814, lng:35.1834, alias:['Armagedón'], geo:['meguido'], eventos:[
  { t:'Fortaleza del valle', ty:'batalla', ep:['jueces','monarquia-dividida'], li:['Jueces','2 Reyes'], r:'Jue 5:19; 2 R 23:29', d:'Fortaleza estratégica en el valle de Jezreel, escenario de numerosas batallas; allí murió el rey Josías.' },
  { t:'Armagedón', ty:'profecia', ep:['ultimos-tiempos'], li:['Apocalipsis'], r:'Ap 16:16', d:'El nombre Armagedón se relaciona con el monte de Meguido, lugar donde se reúnen los reyes para la batalla final.' }]},
{ id:'dan', n:'Dan', lat:33.2489, lng:35.6519, eventos:[
  { t:'El límite norte', ty:'ciudad', ep:['jueces'], li:['Jueces'], r:'Jue 18', d:'Ciudad en el extremo norte de Israel; junto a Beerseba marcaba los límites tradicionales de la tierra.' }]},
{ id:'tabor', n:'Monte Tabor', lat:32.687, lng:35.390, eventos:[
  { t:'Débora y Barac', ty:'batalla', ep:['jueces'], li:['Jueces'], r:'Jue 4:6-14', d:'Barac reunió diez mil hombres en el monte Tabor y descendió contra el ejército de Sísara, según la palabra de la profetisa Débora.' },
  { t:'La transfiguración (tradición)', ty:'milagro', ep:['vida-de-jesus'], li:['Mateo','Marcos','Lucas'], r:'Mt 17:1-8', d:'Los evangelios hablan de «un monte alto». La tradición lo identifica con el Tabor; otros proponen el Hermón, cerca de Cesarea de Filipo.' }]},
{ id:'hermon', n:'Monte Hermón', lat:33.416, lng:35.857, alias:['Sirión','Senir'], eventos:[
  { t:'El límite norte', ty:'historia', ep:['exodo','jueces'], li:['Deuteronomio','Josué','Salmos'], r:'Dt 3:8-9; Jos 11:17; Sal 133:3', d:'El monte más alto de la región, de unos 2.800 m, marcaba el límite norte de la conquista. Sus nieves alimentan las fuentes del Jordán; el Salmo 133 habla del «rocío de Hermón».' }]},
{ id:'rama', n:'Ramá', lat:31.9161, lng:35.1997, eventos:[
  { t:'La casa de Samuel', ty:'ciudad', ep:['jueces'], li:['1 Samuel'], r:'1 S 1:19; 7:17', d:'Ciudad natal y residencia del profeta y juez Samuel.' }]},

// --- Monarquía ---
{ id:'valle-ela', n:'Valle de Ela', lat:31.6975, lng:34.9636, eventos:[
  { t:'David y Goliat', ty:'batalla', ep:['monarquia-unida'], li:['1 Samuel'], r:'1 S 17', d:'Lugar del célebre combate entre el joven David y el gigante filisteo Goliat.' }]},
{ id:'gilboa', n:'Monte Gilboa', lat:32.50, lng:35.4167, eventos:[
  { t:'La muerte de Saúl', ty:'batalla', ep:['monarquia-unida'], li:['1 Samuel'], r:'1 S 31', d:'Monte donde el rey Saúl y sus hijos murieron en batalla frente a los filisteos.' }]},
{ id:'ezion-geber', n:'Ezión-geber', lat:29.5328, lng:34.9878, eventos:[
  { t:'El puerto de Salomón', ty:'ciudad', ep:['monarquia-unida'], li:['1 Reyes'], r:'1 R 9:26', d:'Puerto de Salomón en el mar Rojo, base de sus flotas comerciales hacia Ofir.' }]},
{ id:'jerusalen', n:'Jerusalén', lat:31.778, lng:35.235, alias:['Sion','Monte Moriah','Getsemaní','Gólgota','Calvario','Monte de los Olivos'], geo:['jerusalen','getsemani','golgota','monte-olivos'], eventos:[
  { t:'Abraham en el monte Moriah', ty:'pacto', ep:['patriarcas'], li:['Génesis','2 Crónicas'], r:'Gn 22:2; 2 Cr 3:1', d:'Dios pidió a Abraham que ofreciera a Isaac «sobre uno de los montes» de la tierra de Moriah. Segunda de Crónicas sitúa el templo de Salomón en el monte Moriah.' },
  { t:'David toma la ciudad', ty:'ciudad', ep:['monarquia-unida'], li:['2 Samuel'], r:'2 S 5:6-9', d:'David conquistó la fortaleza de Sion a los jebuseos y la hizo capital de Israel: la ciudad de David.' },
  { t:'El templo de Salomón', ty:'pacto', ep:['monarquia-unida'], li:['1 Reyes'], r:'1 R 6–8', d:'Salomón construyó el templo y lo dedicó; la gloria de Jehová llenó la casa.' },
  { t:'Destrucción de la ciudad y del templo', ty:'batalla', ep:['exilio'], li:['2 Reyes','Jeremías'], r:'2 R 25:8-10', d:'Los babilonios quemaron el templo y derribaron los muros de Jerusalén en el año 586 a.C., y llevaron cautivo al pueblo.' },
  { t:'Reconstrucción del muro', ty:'historia', ep:['retorno'], li:['Nehemías'], r:'Neh 6:15', d:'Bajo Nehemías, los que volvieron del exilio reconstruyeron el muro en cincuenta y dos días.' },
  { t:'Getsemaní', ty:'historia', ep:['vida-de-jesus'], li:['Mateo','Marcos','Lucas','Juan'], r:'Mt 26:36-46', d:'Huerto en el monte de los Olivos donde Jesús oró en angustia antes de ser arrestado.' },
  { t:'El Gólgota', ty:'historia', ep:['vida-de-jesus'], li:['Mateo','Marcos','Lucas','Juan'], r:'Jn 19:17-18', d:'Lugar de la crucifixión de Jesús, fuera de los muros de la ciudad. Su ubicación tradicional es la iglesia del Santo Sepulcro.' },
  { t:'Pentecostés', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 2', d:'El Espíritu Santo descendió sobre los discípulos, que hablaron en otras lenguas, y Pedro predicó el primer sermón de la iglesia: se añadieron unas tres mil personas.' }]},
{ id:'belen', n:'Belén', lat:31.7054, lng:35.2024, geo:['belen'], eventos:[
  { t:'La ciudad de David', ty:'ciudad', ep:['jueces','monarquia-unida'], li:['Rut','1 Samuel'], r:'Rt 1:19; 1 S 16:1-13', d:'Ciudad de Rut y Booz y ciudad natal de David, donde Samuel lo ungió como rey.' },
  { t:'La profecía de Miqueas', ty:'profecia', ep:['monarquia-dividida'], li:['Miqueas'], r:'Mi 5:2', d:'El profeta Miqueas anunció que de Belén saldría el que sería Señor en Israel.' },
  { t:'Nace Jesús', ty:'historia', ep:['vida-de-jesus'], li:['Mateo','Lucas'], r:'Lc 2:1-20; Mt 2:1', d:'Jesús nació en Belén, como había sido anunciado; los pastores y los magos vinieron a verlo.' }]},
{ id:'samaria', n:'Samaria', lat:32.2778, lng:35.1917, geo:['samaria'], eventos:[
  { t:'Capital del reino del norte', ty:'ciudad', ep:['monarquia-dividida'], li:['1 Reyes','2 Reyes'], r:'1 R 16:24; 2 R 17', d:'Capital del reino del norte de Israel, fundada por Omri; cayó ante el imperio asirio en el año 722 a.C.' },
  { t:'El evangelio llega a Samaria', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 8:5-17', d:'Felipe predicó a Cristo en Samaria; luego Pedro y Juan oraron por los creyentes y recibieron el Espíritu Santo.' }]},
{ id:'jezreel', n:'Jezreel', lat:32.5561, lng:35.3247, eventos:[
  { t:'La viña de Nabot', ty:'ciudad', ep:['monarquia-dividida'], li:['1 Reyes','2 Reyes'], r:'1 R 21; 2 R 9', d:'Residencia real del rey Acab y la reina Jezabel; escenario de la muerte de ella.' }]},
{ id:'carmelo', n:'Monte Carmelo', lat:32.7317, lng:34.9709, eventos:[
  { t:'Elías y los profetas de Baal', ty:'milagro', ep:['monarquia-dividida'], li:['1 Reyes'], r:'1 R 18', d:'Lugar del enfrentamiento del profeta Elías con los profetas de Baal, donde Dios respondió con fuego del cielo.' }]},
{ id:'ramot-galaad', n:'Ramot de Galaad', lat:32.60, lng:35.90, eventos:[
  { t:'La muerte de Acab', ty:'batalla', ep:['monarquia-dividida'], li:['1 Reyes','2 Reyes'], r:'1 R 22', d:'Escenario de repetidas batallas entre Israel y Siria; allí murió el rey Acab.' }]},
{ id:'laquis', n:'Laquis', lat:31.5658, lng:34.8514, geo:['laquis'], eventos:[
  { t:'El asedio de Senaquerib', ty:'batalla', ep:['monarquia-dividida'], li:['2 Reyes','Isaías'], r:'2 R 18:13-17', d:'Fortaleza clave de Judá, asediada y conquistada por el ejército asirio de Senaquerib.' }]},
{ id:'carquemis', n:'Carquemis', lat:36.8267, lng:38.0117, geo:['carquemis'], eventos:[
  { t:'Babilonia vence a Egipto', ty:'batalla', ep:['monarquia-dividida'], li:['2 Crónicas','Jeremías'], r:'2 Cr 35:20; Jer 46:2', d:'Batalla decisiva entre Egipto y Babilonia (605 a.C.) que reconfiguró el equilibrio de poder en la región.' }]},
{ id:'ninive', n:'Nínive', lat:36.36, lng:43.15, geo:['ninive'], eventos:[
  { t:'Jonás predica', ty:'predicacion', ep:['monarquia-dividida'], li:['Jonás','Nahúm'], r:'Jon 3', d:'Capital del imperio asirio; ciudad a la que el profeta Jonás fue enviado a predicar arrepentimiento.' }]},
{ id:'jope', n:'Jope', lat:32.0533, lng:34.75, geo:['jope'], eventos:[
  { t:'Jonás huye', ty:'ciudad', ep:['monarquia-dividida'], li:['Jonás'], r:'Jon 1:3', d:'Puerto desde el cual Jonás intentó huir por mar hacia Tarsis.' },
  { t:'Pedro y Tabita', ty:'milagro', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 9:36-43; 10:9-16', d:'Pedro resucitó a Tabita y, en la azotea de la casa de Simón el curtidor, tuvo la visión del lienzo.' }]},
{ id:'damasco', n:'Damasco', lat:33.5138, lng:36.2765, alias:['Camino a Damasco'], geo:['damasco'], eventos:[
  { t:'Capital de Siria', ty:'ciudad', ep:['monarquia-dividida'], li:['2 Reyes'], r:'2 R 5', d:'Capital de Siria (Aram), frecuente adversaria y a veces aliada de los reinos de Israel y Judá.' },
  { t:'La conversión de Saulo', ty:'historia', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 9:1-19', d:'Cerca de Damasco, Saulo de Tarso, que iba a perseguir a los cristianos, se encontró con Jesús resucitado.' }]},

// --- Exilio y retorno ---
{ id:'babilonia', n:'Babilonia', lat:32.5364, lng:44.4208, alias:['Babel'], geo:['babilonia'], eventos:[
  { t:'La ciudad del exilio', ty:'ciudad', ep:['exilio'], li:['2 Reyes','Daniel','Jeremías'], r:'2 R 25; Dn 1–6', d:'Capital del imperio que destruyó Jerusalén y su templo en 586 a.C. y llevó a Judá al exilio; escenario de los relatos de Daniel. La torre de Babel (Gn 11) se ubica en la llanura de Sinar.' }]},
{ id:'quebar', n:'Río Quebar', lat:32.13, lng:45.23, alias:['Tel-abib'], geo:['tel-abib'], eventos:[
  { t:'La visión de Ezequiel', ty:'profecia', ep:['exilio'], li:['Ezequiel'], r:'Ez 1', d:'Junto a este canal, entre los deportados de Tel-abib, el profeta Ezequiel tuvo su visión de la gloria de Dios.' }]},
{ id:'susa', n:'Susa', lat:32.1888, lng:48.2582, geo:['susa'], eventos:[
  { t:'La ciudad de Ester', ty:'ciudad', ep:['retorno'], li:['Ester','Nehemías','Daniel'], r:'Est 1; Neh 1:1', d:'Capital de invierno del imperio persa; escenario del libro de Ester y lugar donde Nehemías servía al rey.' }]},

// --- Vida de Jesús ---
{ id:'nazaret', n:'Nazaret', lat:32.7009, lng:35.2035, geo:['nazaret'], eventos:[
  { t:'Donde creció Jesús', ty:'ciudad', ep:['vida-de-jesus'], li:['Mateo','Lucas'], r:'Lc 1:26; 2:39', d:'Pueblo de Galilea donde Jesús creció, y por el cual sería llamado nazareno.' }]},
{ id:'cana', n:'Caná', lat:32.7472, lng:35.34, geo:['cana'], eventos:[
  { t:'El agua en vino', ty:'milagro', ep:['vida-de-jesus'], li:['Juan'], r:'Jn 2:1-11', d:'Lugar de la primera señal de Jesús: convertir el agua en vino durante una boda.' }]},
{ id:'capernaum', n:'Capernaum', lat:32.8807, lng:35.5753, geo:['capernaum'], eventos:[
  { t:'Centro del ministerio en Galilea', ty:'milagro', ep:['vida-de-jesus'], li:['Mateo','Marcos','Lucas'], r:'Mt 4:13; Mc 1:21', d:'Centro del ministerio de Jesús en Galilea; escenario de numerosas sanidades y enseñanzas.' }]},
{ id:'mar-galilea', n:'Mar de Galilea', lat:32.80, lng:35.59, alias:['Lago de Genesaret','Tiberias'], geo:['mar-galilea'], eventos:[
  { t:'La tempestad y las aguas', ty:'milagro', ep:['vida-de-jesus'], li:['Mateo','Marcos','Lucas','Juan'], r:'Mt 8:23-27; 14:22-33', d:'Lago donde Jesús calmó una tempestad, caminó sobre las aguas y llamó a varios de sus discípulos pescadores.' }]},
{ id:'bienaventuranzas', n:'Monte de las Bienaventuranzas', lat:32.8756, lng:35.5586, alias:['Sermón del monte'], eventos:[
  { t:'El Sermón del monte', ty:'predicacion', ep:['vida-de-jesus'], li:['Mateo'], r:'Mt 5–7', d:'Lugar tradicional del Sermón del monte, el discurso más extenso de Jesús registrado en los evangelios.' }]},
{ id:'cesarea-filipo', n:'Cesarea de Filipo', lat:33.2494, lng:35.6931, geo:['cesarea-filipo','paneas','panion'], eventos:[
  { t:'La confesión de Pedro', ty:'predicacion', ep:['vida-de-jesus'], li:['Mateo'], r:'Mt 16:13-20', d:'Lugar donde Pedro confesó a Jesús como «el Cristo, el Hijo del Dios viviente».' }]},
{ id:'betania', n:'Betania', lat:31.7719, lng:35.2556, geo:['betania'], eventos:[
  { t:'La resurrección de Lázaro', ty:'milagro', ep:['vida-de-jesus'], li:['Juan'], r:'Jn 11', d:'Aldea cercana a Jerusalén donde Jesús resucitó a su amigo Lázaro, que llevaba cuatro días muerto.' }]},
{ id:'emaus', n:'Emaús', lat:31.84, lng:35.14, geo:['emaus'], eventos:[
  { t:'El camino de Emaús', ty:'historia', ep:['vida-de-jesus'], li:['Lucas'], r:'Lc 24:13-35', d:'Aldea a sesenta estadios de Jerusalén donde Jesús resucitado se dio a conocer a dos discípulos al partir el pan. Ubicación aproximada.' }]},

// --- Iglesia primitiva ---
{ id:'cesarea', n:'Cesarea', lat:32.50, lng:34.8933, alias:['Cesarea Marítima'], geo:['cesarea'], eventos:[
  { t:'Cornelio y Pablo preso', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 10; 23–26', d:'Puerto romano donde Pedro predicó al centurión Cornelio, abriendo el evangelio a los gentiles; más tarde, prisión de Pablo durante dos años.' }]},
{ id:'tarso', n:'Tarso', lat:36.90, lng:34.8833, geo:['tarso'], eventos:[
  { t:'Ciudad natal de Pablo', ty:'ciudad', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 9:11; 22:3', d:'Ciudad natal del apóstol Pablo, importante centro cultural de Cilicia.' }]},
{ id:'antioquia', n:'Antioquía de Siria', lat:36.20, lng:36.15, geo:['antioquia'], eventos:[
  { t:'Llamados cristianos', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 11:26; 13:1-3', d:'Donde a los discípulos se les llamó cristianos por primera vez; de aquí salieron los viajes misioneros de Pablo.' }]},
{ id:'antioquia-pisidia', n:'Antioquía de Pisidia', lat:38.30, lng:31.19, geo:['antioquia-pisidia'], eventos:[
  { t:'El sermón en la sinagoga', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 13:14-52', d:'Donde Pablo predicó su primer sermón registrado en detalle, ante judíos y gentiles en la sinagoga.' }]},
{ id:'iconio', n:'Iconio', lat:37.8667, lng:32.4833, geo:['iconio'], eventos:[
  { t:'Primer viaje misionero', ty:'ciudad', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 14:1-7', d:'Ciudad de Asia Menor evangelizada por Pablo y Bernabé durante su primer viaje misionero.' }]},
{ id:'listra', n:'Listra', lat:37.58, lng:32.45, geo:['listra'], eventos:[
  { t:'El cojo sanado', ty:'milagro', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 14:8-20', d:'Donde Pablo sanó a un hombre cojo de nacimiento y, poco después, fue apedreado por la multitud.' }]},
{ id:'derbe', n:'Derbe', lat:37.35, lng:33.35, geo:['derbe'], eventos:[
  { t:'Fin del primer viaje', ty:'ciudad', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 14:20-21', d:'Ciudad del sur de Galacia visitada por Pablo al final de su primer viaje misionero.' }]},
{ id:'filipos', n:'Filipos', lat:41.0138, lng:24.2875, geo:['filipos'], eventos:[
  { t:'Lidia y el carcelero', ty:'milagro', ep:['iglesia-primitiva'], li:['Hechos','Filipenses'], r:'Hch 16', d:'Primera iglesia fundada en Europa; allí Pablo y Silas fueron encarcelados y liberados por un terremoto.' }]},
{ id:'tesalonica', n:'Tesalónica', lat:40.6401, lng:22.9444, geo:['tesalonica'], eventos:[
  { t:'Tres sábados en la sinagoga', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos','1 Tesalonicenses'], r:'Hch 17:1-9', d:'Ciudad donde Pablo predicó en la sinagoga tres sábados y formó una iglesia firme pese a la persecución.' }]},
{ id:'berea', n:'Berea', lat:40.5297, lng:22.2003, geo:['berea'], eventos:[
  { t:'Escudriñaban las Escrituras', ty:'ciudad', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 17:10-15', d:'Ciudad elogiada porque sus habitantes examinaban cada día las Escrituras para comprobar la predicación de Pablo.' }]},
{ id:'atenas', n:'Atenas', lat:37.9715, lng:23.7257, alias:['Areópago'], geo:['atenas'], eventos:[
  { t:'Pablo en el Areópago', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 17:16-34', d:'Donde Pablo predicó ante los filósofos griegos en el Areópago, citando incluso a sus poetas.' }]},
{ id:'corinto', n:'Corinto', lat:37.9061, lng:22.8781, geo:['corinto','cencrea'], eventos:[
  { t:'Un año y medio en Corinto', ty:'ciudad', ep:['iglesia-primitiva'], li:['Hechos','1 Corintios','2 Corintios'], r:'Hch 18:1-18', d:'Ciudad portuaria y comercial donde Pablo pasó un año y medio fundando una de sus iglesias más influyentes.' }]},
{ id:'efeso', n:'Éfeso', lat:37.9396, lng:27.3417, geo:['efeso'], eventos:[
  { t:'Milagros extraordinarios', ty:'milagro', ep:['iglesia-primitiva'], li:['Hechos','Efesios'], r:'Hch 19', d:'Centro de un ministerio de Pablo de tres años, marcado por sanidades extraordinarias y una quema pública de libros de magia.' },
  { t:'La primera de las siete iglesias', ty:'profecia', ep:['iglesia-primitiva'], li:['Apocalipsis'], r:'Ap 2:1-7', d:'Primera de las siete iglesias de Asia a las que Cristo escribe en el Apocalipsis: «has dejado tu primer amor».' }]},
{ id:'mileto', n:'Mileto', lat:37.5297, lng:27.2861, geo:['mileto'], eventos:[
  { t:'Despedida de los ancianos', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 20:17-38', d:'Lugar del discurso de despedida de Pablo a los ancianos de la iglesia de Éfeso.' }]},
{ id:'creta', n:'Creta', lat:35.24, lng:24.81, alias:['Buenos Puertos'], geo:['creta','creta-isla'], eventos:[
  { t:'Tito en Creta', ty:'ciudad', ep:['iglesia-primitiva'], li:['Hechos','Tito'], r:'Hch 27:7-13; Tit 1:5', d:'Isla donde el barco de Pablo buscó refugio antes del naufragio, y donde más tarde dejó a Tito para organizar la iglesia.' }]},
{ id:'malta', n:'Malta', lat:35.8997, lng:14.5146, geo:['malta'], eventos:[
  { t:'Naufragio y sanidades', ty:'milagro', ep:['iglesia-primitiva'], li:['Hechos'], r:'Hch 28:1-10', d:'Isla donde Pablo naufragó, sobrevivió a la mordida de una víbora y sanó a los enfermos del lugar.' }]},
{ id:'roma', n:'Roma', lat:41.9028, lng:12.4964, geo:['roma'], eventos:[
  { t:'Pablo en Roma', ty:'predicacion', ep:['iglesia-primitiva'], li:['Hechos','Romanos'], r:'Hch 28:16-31', d:'Capital del imperio romano y destino final del viaje de Pablo, donde predicó el evangelio durante dos años bajo arresto domiciliario.' }]},
{ id:'patmos', n:'Patmos', lat:37.3086, lng:26.5453, geo:['patmos'], eventos:[
  { t:'La revelación a Juan', ty:'profecia', ep:['iglesia-primitiva','ultimos-tiempos'], li:['Apocalipsis'], r:'Ap 1:9', d:'Isla del mar Egeo donde el apóstol Juan, desterrado, recibió la visión del libro del Apocalipsis.' }]}
];
