/* ==========================================================
   Recursos Bíblicos — La tierra de Israel · contenido de las rutas
   FUENTE de public/apps/tierra-de-israel/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/tierra_citas.py
   Las seis partes forman UNA sola función: parte1 la abre y parte6 la cierra.
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Geografía: tierra-geo.js (generado por geo/tierra.py) sobre imperios-geo.js.
   Distancias y superficies: calculadas en geo/tierra.py; medidas bíblicas según la
   calculadora del sitio (codo de 44,5 cm, estadio de 185 m).
   ========================================================== */
(() => {
  // ---------- Ayudas ----------
  const V = {
    levante: [[28.6, 30.9], [37.4, 41.0]],
    amplia: [[29.3, 33.2], [34.2, 37.6]],
    tierra: [[30.95, 34.15], [33.45, 36.35]],
    norte: [[32.35, 34.75], [33.45, 36.05]],
    centro: [[31.55, 34.55], [32.75, 35.85]],
    sur: [[30.4, 34.15], [31.95, 35.75]],
    juda: [[31.25, 34.6], [32.0, 35.6]],
    sefela: [[31.45, 34.68], [31.98, 35.2]],
    costa: [[31.1, 34.15], [33.15, 35.45]],
    trans: [[29.5, 34.9], [33.45, 36.8]],
    rift: [[29.4, 34.4], [33.45, 36.2]],
    jesus: [[31.1, 34.3], [33.5, 36.6]],
    siglo20: [[29.2, 32.3], [33.6, 36.4]]
  };
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/tierra_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(["abraham.webp", "arco-tito.jpg", "basilica.webp", "calendario-gezer.jpg", "caravana.webp", "carmelo.webp", "cisterna.webp", "costa.webp", "engadi.webp", "esquema-alturas.svg", "esquema-ano-agricola.svg", "esquema-dos-tierras.svg", "esquema-jordan.svg", "esquema-lluvia.svg", "esquema-lluvias.svg", "esquema-perfil.svg", "esquema-tell.svg", "esquema-vientos.svg", "galilea.webp", "jordan.webp", "lindero.webp", "mapa-madaba.jpg", "masada.webp", "nebo.webp", "pastor.webp", "peregrinos.webp", "pozo-jacob.webp", "puerta.webp", "rocio.webp", "sefela.webp", "terrazas.webp", "tiendas.webp"]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  const DATOS = window.TIERRA_DATOS || {};
  const miles = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Caja que encierra varias capas de la geografía (para encuadrar la comparación con cada país)
  const G = window.IMPERIOS_GEO || { polys: {}, capas: {} };
  const cajaDe = ids => {
    let s = 90, o = 180, n = -90, e = -180;
    ids.forEach(id => (G.capas[id] ? G.capas[id].polys : []).forEach(pid => (G.polys[pid] || []).forEach(anillo => anillo.forEach(([la, lo]) => {
      s = Math.min(s, la); n = Math.max(n, la); o = Math.min(o, lo); e = Math.max(e, lo);
    }))));
    return s < n ? [[s - 0.1, o - 0.1], [n + 0.1, e + 0.1]] : V.tierra;
  };

  // ---------- «Compara con tu país» (I.3) ----------
  const AREA = DATOS.area_tierra || 15700;
  const relacion = r => {
    if (r < 0.85) return null;
    if (r <= 1.12) return 'casi del mismo tamaño que';
    if (r <= 1.35) return 'un poco más grande que';
    if (r <= 1.8) return 'casi una vez y media';
    if (r <= 2.6) return 'más del doble de';
    if (r <= 3.6) return 'unas tres veces';
    return `unas ${Math.round(r)} veces`;
  };
  const opcionesPais = (window.TIERRA_COMPARA || []).map(c => {
    const nombre = c.texto.charAt(0).toUpperCase() + c.texto.slice(1);
    const rel = relacion(c.razon);
    const nota = rel
      ? `${nombre} (unos ${miles(c.km2)} km²) es ${rel} la tierra entre Dan y Beerseba (unos ${miles(AREA)} km²).`
      : `La tierra entre Dan y Beerseba (unos ${miles(AREA)} km²) es casi ${c.razon < 0.6 ? 'el doble' : 'una vez y media'} de ${c.texto} (unos ${miles(c.km2)} km²).`;
    return { id: c.id, t: c.pais, region: c.region, nota,
      estado: { view: cajaDe(['t-tierra', `cmp-${c.id}`]), capas: ['t-tierra', `cmp-${c.id}`], lugares: ['dan', 'beerseba'] } };
  });

  // ================== RUTA I. Panorama de la tierra ==================
  const panorama = [
    {
      id: 'puente', n: 'Un puente entre continentes', ref: 'Ezequiel 5:5; Génesis 12:1-7; Isaías 19:23-25',
      visual: [
        mapa({ view: V.levante, capas: ['t-israel'], lugares: ['menfis', 'damasco', 'ninive', 'babilonia', 'carquemis', 'jerusalen'], trazos: ['c-mar', 'c-real'] }),
        tabla({
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Qué estudia'],
          filas: [
            ['I. Panorama de la tierra', 'Ubicación, nombres, tamaño, forma, alturas, historia y vecinos'],
            ['II. Las regiones', 'De la costa al desierto y de Galilea a Edom, región por región'],
            ['III. Clima, agua y vida', 'Lluvias, rocío, vientos, fuentes, cosechas y pastores'],
            ['IV. Caminos, ciudades y distancias', 'Rutas internacionales, caminos interiores, pasos, puertas y viajes a pie'],
            ['V. La tierra después de la Biblia', 'Del año 70 a hoy: romanos, bizantinos, islam, cruzados, otomanos y el siglo XX'],
            ['VI. La tierra en el plan de Dios', 'La promesa, sus límites, la obediencia, el futuro y la patria celestial']
          ],
          nota: 'Los contornos de los mapas son aproximados. Las cifras de superficie y distancia se calcularon con los mismos datos geográficos para todo el recurso.'
        })
      ],
      texto: [
        'Quien mira un mapa del mundo antiguo descubre algo sorprendente: la tierra que Dios prometió a Abraham es una franja angosta apretada entre el mar Mediterráneo y el desierto de Arabia. Al suroeste estaba Egipto, el gran reino del Nilo; al noreste, Mesopotamia, con Asiria y Babilonia; al norte, los hititas de Anatolia y los arameos de Siria. Entre esos mundos no había otro paso cómodo. Al occidente cerraba el mar, que los israelitas temían y casi no navegaban, y al oriente cerraba el desierto, que solo cruzaban las caravanas preparadas. Por eso todos los caminos entre África y Asia pasaban por la tierra de Canaán.',
        'Dios mismo describe esa posición: «Esta es Jerusalén; la puse en medio de las naciones y de las tierras alrededor de ella» (Ez 5:5). No es un detalle geográfico sin importancia. Un pueblo puesto en el cruce de los caminos sería visto por todos. Su fidelidad o su infidelidad no pasarían en secreto, y la fama del Dios de Israel podría llegar con los comerciantes hasta lugares muy lejanos (1 R 10:1).',
        { h: 'Un camino para ejércitos y comerciantes' },
        'La misma ubicación que facilitaba el testimonio traía peligros. Por el camino del mar y por el camino real, que se estudian en la ruta IV, pasaban caravanas con especias, metales y tejidos, pero también ejércitos. Faraones como Tutmosis III, Necao y Sisac marcharon por aquí hacia el norte; reyes asirios y babilonios bajaron por aquí hacia Egipto. Casi todos los imperios que aparecen en la Biblia dejaron su huella en esta tierra, y por eso la historia de Israel es inseparable de la historia de sus vecinos.',
        'Isaías ve un día en que esa calzada de guerra se volverá camino de adoración: «En aquel tiempo habrá una calzada de Egipto a Asiria» y los tres pueblos adorarán juntos a Dios, con Israel en medio como «bendición en medio de la tierra» (Is 19:23-24). El puente entre continentes tiene, en el plan de Dios, un propósito que va más allá del comercio.',
        { h: 'Cómo usar este recurso' },
        'Las seis rutas de este recurso recorren la tierra desde distintos ángulos: su forma y sus regiones, su clima, sus caminos, su historia después de la Biblia y su lugar en las promesas de Dios. Los mapas tienen relieve: el botón «Relieve» lo quita para ver mejor las capas de color. Muchos lugares tienen su ficha en el Atlas bíblico, y las rutas de viaje (los patriarcas, el éxodo, la conquista) tendrán sus propios recursos.',
        ir('Abrir el Atlas bíblico', '../../atlas-biblico/'),
        ir('Ver los imperios que rodearon a Israel', '../../imperios-historia/')
      ],
      pensar: 'Dios puso a su pueblo en el lugar más transitado del mundo antiguo, a la vista de todas las naciones. ¿Qué te dice eso sobre el lugar donde Dios te ha puesto a ti para ser su testigo?'
    },
    {
      id: 'nombres', n: 'Los nombres de la tierra', ref: 'Génesis 12:5; 40:15; 1 Samuel 13:19; Zacarías 2:12; Isaías 62:4',
      visual: [
        tabla({
          titulo: 'Nombres de la tierra en la Biblia y en la historia',
          cab: ['Nombre', 'Origen o sentido', 'Primeras menciones'],
          filas: [
            ['Canaán', 'Por Canaán, hijo de Cam, cuyos descendientes la habitaban', 'Gn 10:15-19; 12:5'],
            ['Tierra de los hebreos', 'Así la llama José en Egipto', 'Gn 40:15'],
            ['Tierra de Israel', 'Por el pueblo que la recibió; común desde los jueces', '1 S 13:19; Mt 2:20-21'],
            ['Judá, Judea', 'Por la tribu y el reino del sur; Judea es la forma griega y romana', '2 R 23:27; Lc 1:5'],
            ['Tierra que fluye leche y miel', 'Abundancia de ganado y de frutos', 'Éx 3:8; Nm 13:27'],
            ['Tierra prometida', 'La tierra de la promesa a los patriarcas', 'He 11:9'],
            ['Tierra santa', 'La heredad de Dios, apartada para Él', 'Zac 2:12'],
            ['Beula y tierra gloriosa', 'Nombres proféticos: «desposada» y «hermosa»', 'Is 62:4; Dn 11:16'],
            ['Palestina', 'Del nombre de los filisteos; usado por autores griegos y oficial en Roma desde el año 135', 'Heródoto; Adriano']
          ],
          nota: 'Cuando la Reina-Valera 1909 dice Palestina en el Antiguo Testamento (Éx 15:14; Jl 3:4), se refiere a la tierra de los filisteos, como traduce la RV 1960, no a toda la tierra.'
        }),
        mapa({ view: V.amplia, capas: ['h-canaan'], lugares: ['sidon', 'tiro', 'gaza', 'dan', 'beerseba', 'jerusalen'] }, 'Canaán')
      ],
      texto: [
        'Una misma tierra ha tenido muchos nombres, y cada uno cuenta una parte de su historia. El más antiguo en la Biblia es Canaán: la tierra de los descendientes de Canaán, el hijo de Cam, que se extendían «desde Sidón, en dirección a Gerar, hasta Gaza» (Gn 10:19). Cuando Abram llegó, «a tierra de Canaán llegaron» (Gn 12:5), y el nombre siguió en uso hasta la conquista.',
        'Cuando el pueblo de Israel se estableció en ella, la tierra empezó a llevar su nombre. En tiempos de Saúl ya se hablaba de «toda la tierra de Israel» (1 S 13:19), y el ángel le dice a José que vuelva con el niño Jesús «a tierra de Israel» (Mt 2:20). Después de la división del reino, el sur se llamó Judá, y tras el exilio, los persas, los griegos y los romanos llamaron Judea a la región alrededor de Jerusalén. De esa palabra viene «judío».',
        { h: 'Nombres que describen una relación' },
        'Otros nombres no señalan un territorio sino una relación con Dios. Es la tierra prometida (He 11:9), porque se recibe por promesa y no por conquista humana. Es la tierra que «fluye leche y miel» (Éx 3:8), una imagen de abundancia para un pueblo que salía de la esclavitud. Zacarías la llama tierra santa (Zac 2:12), porque Dios mismo la considera su heredad. Isaías anuncia que se llamará Beula, «desposada», porque el Señor se complacerá en ella (Is 62:4), y Daniel la llama «la tierra gloriosa» (Dn 11:16).',
        { h: 'El nombre Palestina' },
        'El nombre Palestina viene de los filisteos, el pueblo del mar que ocupó la costa sur hacia el siglo XII a.C. Historiadores griegos como Heródoto, en el siglo V a.C., usaron «Palestina» para la costa y luego para toda la región. Tras la rebelión judía de Bar Kojba, el emperador Adriano llamó a la provincia Siria Palestina (hacia el año 135 d.C.), un cambio que muchos historiadores entienden como un intento de borrar el nombre de Judea. Desde entonces el nombre se usó en la geografía cristiana y europea, y en el siglo XX lo tomó el mandato británico. Hoy lo usan los palestinos para su territorio, mientras que el Estado de Israel lleva el nombre bíblico. Este recurso usa los nombres de cada época y, para la tierra en general, «la tierra de Israel», que es el nombre bíblico.',
        'Conocer estos nombres ayuda a leer con atención: un mismo lugar puede aparecer como Canaán en Génesis, como Israel en Samuel y como Judea en los evangelios, y una nota de mapa que dice «Palestina en tiempos de Jesús» habla de la misma tierra.'
      ],
      pensar: 'Dios llama a esta tierra «mi tierra» y «tierra santa», y a la vez promete que su pueblo heredará una patria mejor. ¿Qué significa para ti que el Señor dé nombres nuevos a lo que le pertenece (Is 62:4; Ap 2:17)?'
    },
    {
      id: 'tamano', n: 'Pequeña en tamaño', ref: 'Jueces 20:1; 1 Reyes 4:25; Deuteronomio 7:7',
      visual: [
        { tipo: 'mapa', titulo: 'Compara con tu país', selector: { etiqueta: 'Tu país', clave: 'tierra-pais', opciones: opcionesPais } },
        mapa({ view: V.tierra, capas: ['t-tierra', 't-trans'], lugares: ['dan', 'beerseba', 'jerusalen'] }, 'Dan y Beerseba')
      ],
      texto: [
        'La Biblia mide la tierra con una expresión que se repite: «desde Dan hasta Beerseba» (Jue 20:1; 1 S 3:20; 1 R 4:25). Dan era la ciudad del extremo norte, junto a las fuentes del Jordán, al pie del monte Hermón; Beerseba era el último pueblo grande del sur, donde comenzaba el desierto. Entre ambas hay unos ' + (DATOS.dan_beerseba_km || 236) + ' kilómetros en línea recta: una distancia que hoy se recorre en auto en tres horas y que entonces exigía unos ocho días de camino.',
        'El ancho es todavía menor. En Galilea, del mar Mediterráneo al mar de Galilea hay apenas ' + (DATOS.ancho_galilea_km || 46) + ' kilómetros; a la altura del mar Muerto, de la costa de Gaza a la orilla del mar hay unos ' + (DATOS.ancho_sur_km || 94) + '. Desde los montes de Judea, en un día claro, se puede ver a la vez el brillo del Mediterráneo al oeste y las montañas de Moab al este.',
        { h: '¿Cuánto mide?' },
        'Calculada con los mismos datos que se usan en los mapas de este recurso, la tierra al oeste del Jordán, de Dan a Beerseba, tiene unos ' + miles(AREA) + ' kilómetros cuadrados. Las tribus de Rubén, Gad y la media tribu de Manasés recibieron además territorio al este del Jordán (Nm 32), unos ' + miles(DATOS.area_trans || 8400) + ' kilómetros cuadrados más. Y el Neguev y el desierto del sur, poco poblados, agregan otro tanto que las cifras bíblicas casi nunca cuentan.',
        'La pestaña «Compara con tu país» dibuja sobre la tierra de Israel, a la misma escala, una región de tu país de tamaño parecido. Elige tu país en la lista para verlo.',
        { h: 'Pequeña, pero central' },
        'Que la tierra prometida sea tan pequeña no es un descuido. Dios mismo le recuerda a Israel que no lo eligió por ser grande ni numeroso, «pues vosotros erais el más insignificante de todos los pueblos» (Dt 7:7). La tierra se parece al pueblo: pequeña a los ojos del mundo, pero escogida para un propósito que alcanza a todas las naciones. En esta franja angosta reinaron David y Salomón, hablaron los profetas, nació, murió y resucitó Jesús, y comenzó la iglesia. La importancia de un lugar en la historia de la salvación no depende de su tamaño.',
        { ejercicio: {
          pregunta: '¿Qué indica la expresión bíblica «desde Dan hasta Beerseba»?',
          opciones: [
            { t: 'Los límites de la tierra según la promesa hecha a Abraham.', ok: false, por_que: 'La promesa a Abraham habla de límites más amplios, «desde el río de Egipto hasta el río grande» (Gn 15:18). La ruta VI lo estudia.' },
            { t: 'Todo el territorio habitado por Israel, del extremo norte al extremo sur.', ok: true, por_que: 'Dan era la ciudad del norte y Beerseba la del sur: la expresión equivale a «todo Israel» (1 S 3:20).' },
            { t: 'El camino que recorrían los peregrinos para subir a Jerusalén.', ok: false, por_que: 'No describe un camino sino los dos extremos del territorio, que se mencionan juntos para decir «todo el país».' }
          ],
          explicacion: 'Dan y Beerseba marcan los extremos de la tierra habitada por Israel, unos 236 km en línea recta. La expresión se usa para hablar de todo el pueblo, como en «todo Israel, desde Dan hasta Beerseba» (1 S 3:20).'
        } }
      ],
      pensar: 'Dios escogió una tierra pequeña y un pueblo pequeño para bendecir a todas las familias de la tierra (Gn 12:3). ¿En qué área de tu vida sientes que eres «poco» para lo que Dios te pide, y qué te enseña esta tierra sobre eso?'
    },
    {
      id: 'franjas', n: 'Cuatro franjas de oeste a este', ref: 'Deuteronomio 1:7; Josué 11:16; Deuteronomio 11:11',
      visual: [
        mapa({ view: V.tierra, capas: ['f-costa', 'f-serrania', 'f-valle', 'f-meseta'] }, 'Las cuatro franjas'),
        esq('esquema-perfil.svg', 'Perfil del terreno de oeste a este a la altura de Jerusalén: la llanura costera junto al Mediterráneo, la Sefela, los montes de Judea con Jerusalén a unos 750 m, el desierto que baja hasta Jericó y el Jordán, a casi 400 m bajo el nivel del mar, el mar Muerto y la subida a la meseta de Moab con el monte Nebo', 'Perfil de oeste a este, a la altura de Jerusalén (alturas exageradas para que se vean).', 'Perfil')
      ],
      texto: [
        'Si se cruza la tierra de oeste a este, se atraviesan cuatro franjas que corren paralelas de norte a sur. Esta forma sencilla explica buena parte de la historia bíblica: dónde se construían las ciudades, por dónde pasaban los caminos, dónde se refugiaba el pueblo y por qué ciertos lugares se repiten una y otra vez. Moisés las enumera cuando describe la tierra: «en el Arabá, en el monte, en los valles, en el Neguev, y junto a la costa del mar» (Dt 1:7).',
        { h: '1. La llanura costera' },
        'Junto al Mediterráneo hay una franja plana de arena, dunas y tierras fértiles, angosta en el norte y más ancha hacia el sur. Era la tierra de los filisteos y la ruta de los ejércitos y de las caravanas. Israel casi nunca la dominó por completo.',
        { h: '2. La serranía central' },
        'Detrás de la llanura, pasando por las colinas bajas de la Sefela, se levanta una cadena de montes que forma la columna vertebral del país: Galilea, Samaria y Judá. Las alturas van de 600 a 1.000 metros. Aquí vivió la mayor parte de Israel, porque los montes eran fáciles de defender. En sus cumbres están Jerusalén, Belén, Hebrón, Betel y Siquem. Dios describe la tierra justamente como «tierra de montes y de vegas, que bebe las aguas de la lluvia del cielo» (Dt 11:11).',
        { h: '3. El valle del Jordán' },
        'Al este de los montes, el suelo cae de golpe a una gran fosa, parte de la falla que va desde Siria hasta África. Por ella corre el Jordán, del lago Hula al mar de Galilea y de ahí al mar Muerto, el punto más bajo de la superficie terrestre. Al sur del mar Muerto la fosa sigue como el Arabá hasta el golfo de Áqaba.',
        { h: '4. La meseta de Transjordania' },
        'Al otro lado del valle se alza otra pared que lleva a una meseta alta: Basán, Galaad, Amón, Moab y Edom. Por ella corría el camino real, y más al este empieza el desierto de Arabia.',
        'El perfil del esquema muestra estas cuatro franjas a la altura de Jerusalén. En poco más de cien kilómetros el terreno sube del nivel del mar a unos 800 metros, cae a casi 400 metros bajo el nivel del mar y vuelve a subir a más de 700. Pocos lugares del mundo reúnen tanto contraste en tan poco espacio.',
        { ejercicio: {
          pregunta: 'Si viajas desde la costa del Mediterráneo hasta Jericó, ¿qué franjas atraviesas y en qué orden?',
          opciones: [
            { t: 'La llanura costera, la serranía central y el valle del Jordán.', ok: true, por_que: 'Exacto: se sube desde la costa, se cruzan los montes de Judea y se baja hasta Jericó, en el valle del Jordán.' },
            { t: 'La serranía central, la llanura costera y la meseta de Transjordania.', ok: false, por_que: 'La llanura costera está junto al mar, al comienzo del viaje, y la meseta queda al otro lado del Jordán.' },
            { t: 'La llanura costera, el valle del Jordán y la serranía central.', ok: false, por_que: 'Los montes están entre la costa y el valle: hay que cruzarlos antes de bajar al Jordán.' }
          ],
          explicacion: 'Las franjas corren de norte a sur y se cruzan de oeste a este: costa, serranía, valle del Jordán y meseta. Jericó está en el valle, a unos 250 metros bajo el nivel del mar.'
        } }
      ],
      pensar: 'Israel vivió sobre todo en los montes, entre la llanura de los ejércitos y el desierto. ¿Qué te enseña el Salmo 125:2 sobre la seguridad del que confía en Dios?'
    },
    {
      id: 'alturas', n: 'Del Hermón al mar Muerto', ref: 'Salmo 122:4; Lucas 10:30; Salmo 133:3; Salmo 121:1',
      visual: [
        esq('esquema-alturas.svg', 'Alturas de la tierra de Israel: el monte Hermón (2.814 m), el monte Merón (1.208 m), el monte Ebal (940 m), el Gerizim (881 m), Hebrón (unos 930 m), el monte de los Olivos (818 m), Jerusalén (unos 750 m), el monte Nebo (unos 700 m), el Tabor (575 m), el Carmelo (546 m), el mar de Galilea (unos 210 m bajo el nivel del mar), Jericó (unos 250 m bajo el nivel del mar) y el mar Muerto (unos 435 m bajo el nivel del mar)', 'Alturas aproximadas sobre y bajo el nivel del mar.', 'Alturas'),
        mapa({ view: V.tierra, lugares: ['hermon', 'tabor', 'carmelo', 'jerusalen', 'jerico', 'monte-nebo', 'hebron', 'siquem'] }, 'Mapa')
      ],
      texto: [
        'En la Biblia casi nunca se «va» a Jerusalén: se «sube». «Allá subieron las tribus, las tribus de JAH» (Sal 122:4), dice uno de los cánticos que cantaban los peregrinos, y los salmos 120 al 134 se llaman precisamente «cánticos graduales» o «de las subidas». En cambio, de Jerusalén a Jericó se «desciende»: «Un hombre descendía de Jerusalén a Jericó, y cayó en manos de ladrones» (Lc 10:30). No son maneras de hablar. Jerusalén está a unos 750 metros sobre el nivel del mar, y Jericó, a solo 22 kilómetros en línea recta, a unos 250 metros bajo el nivel del mar. El camino baja más de mil metros.',
        { h: 'Los extremos' },
        'En el extremo norte, el monte Hermón alcanza 2.814 metros. Tiene nieve en invierno y sus aguas alimentan las fuentes del Jordán. El salmista compara la unidad de los hermanos con «el rocío de Hermón, que desciende sobre los montes de Sion» (Sal 133:3). En el otro extremo, la superficie del mar Muerto está hoy a unos 435 metros bajo el nivel del mar, el punto más bajo de la tierra firme, y baja casi un metro por año porque se aprovecha el agua del Jordán. En tiempos bíblicos estaba bastante más alto.',
        { h: 'Montes con historia' },
        'Entre esos extremos hay montes que aparecen una y otra vez en la Biblia. El Ebal y el Gerizim, junto a Siquem, donde Israel escuchó las bendiciones y las maldiciones del pacto (Dt 27:12-13; Jos 8:33). El Tabor, que se levanta solitario en el valle de Jezreel, donde Barac reunió a su ejército (Jue 4:6). El Carmelo, donde Elías desafió a los profetas de Baal (1 R 18). El monte de los Olivos, frente al templo, desde donde Jesús ascendió y adonde volverá (Hch 1:11-12; Zac 14:4). Y en Transjordania, el Nebo, desde el que Moisés vio la tierra antes de morir (Dt 34:1-4).',
        'Los montes eran también lugares de peligro espiritual: en los «lugares altos» Israel imitó el culto cananeo (1 R 14:23). Por eso el salmista aclara de dónde viene la ayuda: «Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene de Jehová, que hizo los cielos y la tierra» (Sal 121:1-2). Al subir hacia Jerusalén, los peregrinos veían los montes, pero ponían su confianza en el Creador de los montes.',
        { h: 'Una diferencia de clima' },
        'Las alturas cambian todo: en invierno puede nevar en Jerusalén mientras en Jericó, a media hora de auto, la gente anda en manga corta. Herodes tenía un palacio de invierno en Jericó precisamente por eso. La ruta III estudia cómo esas diferencias determinan la lluvia, la vegetación y la vida diaria.'
      ],
      pensar: 'Subir a Jerusalén costaba esfuerzo, y los peregrinos lo hacían cantando. ¿Qué «cánticos de las subidas» acompañan tu propio camino hacia la presencia de Dios?'
    },
    {
      id: 'historia', n: 'La tierra a lo largo de la historia', ref: 'Números 34:1-12; 1 Reyes 4:21; 12:16-20; Lucas 3:1',
      visual: [
        pasos([
          { t: 'Canaán: la tierra prometida a los patriarcas, según sus límites en Números 34.', fecha: -1400, estado: { view: V.amplia, capas: ['h-canaan'], lugares: ['sidon', 'gaza', 'cades-barnea', 'hebron'] } },
          { t: 'David y Salomón: Israel en el centro y reinos tributarios hasta el Éufrates (1 R 4:21).', fecha: -960, estado: { view: [[29.2, 33.3], [36.5, 39.2]], capas: ['h-salomon', 'h-salomon-vas'], lugares: ['jerusalen', 'damasco', 'ezion-geber'] } },
          { t: 'El reino dividido: Israel al norte, con capital en Samaria, y Judá al sur, con Jerusalén.', fecha: -850, estado: { view: V.tierra, capas: ['h-israel-850', 'h-juda-850'], lugares: ['samaria', 'jerusalen', 'dan', 'betel'] } },
          { t: 'Después del exilio: Yehud, una pequeña provincia persa alrededor de Jerusalén.', fecha: -445, estado: { view: V.centro, capas: ['h-yehud'], lugares: ['jerusalen', 'betel', 'jerico', 'belen'] } },
          { t: 'El reino asmoneo: los macabeos recuperan casi toda la tierra.', fecha: -76, estado: { view: V.tierra, capas: ['h-asmoneo'], lugares: ['jerusalen', 'samaria', 'gaza'] } },
          { t: 'El reino de Herodes el Grande, aliado de Roma, al nacer Jesús.', fecha: -4, estado: { view: V.jesus, capas: ['h-herodes'], lugares: ['jerusalen', 'belen', 'masada', 'cesarea'] } },
          { t: 'En tiempos de Jesús: Galilea, Samaria, Judea, Perea, Decápolis y la tetrarquía de Felipe.', fecha: 29, estado: { view: V.jesus, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-idumea', 'nt-perea', 'nt-decapolis', 'nt-felipe'], lugares: ['nazaret', 'capernaum', 'jerusalen'] } },
          { t: 'Desde el año 135: la provincia romana de Siria Palestina.', fecha: 135, estado: { view: V.tierra, capas: ['h-palaestina'], lugares: ['jerusalen', 'cesarea'] } }
        ], 'La tierra en cada época')
      ],
      texto: [
        'Las fronteras de la tierra cambiaron muchas veces a lo largo de la historia bíblica. El mapa de esta estación tiene ocho pasos: tócalos uno a uno o usa «Ver la evolución» para recorrerlos. Los contornos son aproximados, porque las fronteras antiguas no se marcaban con la precisión de hoy.',
        { h: 'De Canaán al reino dividido' },
        'Dios describió a Moisés los límites de Canaán: desde el desierto de Zin y Cades-barnea en el sur, por la costa del Mediterráneo, hasta la entrada de Hamat en el norte y el Jordán al oriente (Nm 34:1-12). Israel conquistó gran parte, pero no toda, en tiempos de Josué y los jueces. La mayor extensión llegó con David y Salomón: Israel ocupaba el centro, y los reinos vecinos le pagaban tributo «desde el Eufrates hasta la tierra de los filisteos y el límite con Egipto» (1 R 4:21). Después de Salomón, el reino se dividió: diez tribus formaron el reino de Israel al norte y Judá quedó al sur con Jerusalén (1 R 12:16-20). Asiria destruyó Israel en 722 a.C. y Babilonia destruyó Judá en 586 a.C.',
        { h: 'Después del exilio' },
        'Los judíos que volvieron de Babilonia vivieron en Yehud, una provincia persa tan pequeña que cabía en un día de camino alrededor de Jerusalén. Bajo los griegos, la rebelión de los macabeos (167 a.C.) dio origen al reino asmoneo, que llegó a abarcar casi toda la tierra. En el año 63 a.C. Roma tomó el control, y Herodes el Grande gobernó como rey aliado entre el 37 y el 4 a.C.',
        { h: 'En tiempos de Jesús' },
        'Cuando Jesús comenzó su ministerio, la tierra estaba repartida: Galilea y Perea eran de Herodes Antipas; Felipe gobernaba el noreste; Judea, Samaria e Idumea estaban bajo un prefecto romano, Poncio Pilato; y las ciudades griegas de la Decápolis eran casi independientes (Lc 3:1). Por eso los evangelios mencionan regiones con autoridades distintas. Tras la última rebelión judía, en el año 135, Roma rebautizó la provincia como Siria Palestina.',
        'La historia posterior, desde los romanos hasta hoy, se estudia en la ruta V.',
        ir('Ir a la ruta V: La tierra después de la Biblia', '#despues/1'),
        ir('Ver la línea de los reyes, jueces y profetas de Israel', '../../linea-reyes/')
      ],
      pensar: 'Reinos crecieron y cayeron sobre esta tierra, pero la palabra de Dios sobre ella permaneció. ¿Qué te enseña esto sobre lo pasajero de los poderes humanos (Dn 2:44)?'
    },
    {
      id: 'vecinos', n: 'Rodeada de vecinos', ref: 'Jueces 3:1-4; Amós 1:3–2:3; Salmo 83:5-8',
      visual: [
        mapa({ view: V.amplia, capas: ['r-filistea', 'r-amon', 'r-moab', 'r-edom'], lugares: ['tiro', 'sidon', 'damasco', 'gaza', 'rabat-amon', 'bosra', 'cades-barnea'] }, 'Mapa'),
        tabla({
          titulo: 'Los vecinos cercanos de Israel',
          cab: ['Pueblo', 'Dónde', 'Relación con Israel', 'Pasajes'],
          filas: [
            ['Fenicios', 'Al norte, en la costa: Tiro y Sidón', 'Comercio y alianzas; Jezabel trajo el culto a Baal', '1 R 5:1-12; 16:31'],
            ['Arameos', 'Al noreste, con Damasco', 'Guerras frecuentes en tiempos de los reyes', '1 R 20; 2 R 6–8'],
            ['Amonitas', 'Al este, en Rabá de Amón', 'Parientes por Lot; enemigos en los jueces y en tiempos de Saúl', 'Gn 19:38; 1 S 11'],
            ['Moabitas', 'Al este del mar Muerto', 'Parientes por Lot; Rut era moabita', 'Gn 19:37; Rt 1:4; 2 R 3'],
            ['Edomitas', 'Al sureste, en los montes de Seir', 'Descendientes de Esaú; enemistad antigua', 'Gn 36:8; Abd 1:10-14'],
            ['Filisteos', 'Al suroeste, en la costa', 'Rivales desde los jueces hasta David', 'Jue 13–16; 1 S 17'],
            ['Egipto', 'Al suroeste, más allá del Sinaí', 'Refugio, esclavitud, aliado y amenaza', 'Gn 12:10; Éx 1; Is 31:1'],
            ['Asiria y Babilonia', 'Al noreste, en Mesopotamia', 'Imperios que llevaron al pueblo al exilio', '2 R 17; 25']
          ],
          nota: 'Los pueblos vecinos tendrán su propio recurso; los imperios ya tienen el suyo.'
        })
      ],
      texto: [
        'Israel nunca estuvo solo en su tierra. Al norte, en la costa, vivían los fenicios de Tiro y Sidón, el gran pueblo de navegantes del mundo antiguo. Al noreste estaban los arameos, con su capital en Damasco. Al este, al otro lado del Jordán, estaban Amón y Moab, y al sureste, Edom. En la costa del suroeste vivían los filisteos. Y más lejos, como dos grandes polos, Egipto al suroeste y los imperios de Mesopotamia al noreste.',
        { h: 'Parientes y enemigos' },
        'Muchos de esos vecinos eran parientes. Amón y Moab descendían de Lot, sobrino de Abraham (Gn 19:36-38), y Edom descendía de Esaú, el hermano de Jacob (Gn 36:8). Dios mandó a Israel no pelear con ellos cuando salía de Egipto, porque les había dado su propia tierra (Dt 2:4-9, 19). Sin embargo, la historia está llena de guerras entre estos pueblos hermanos, y el libro de Abdías denuncia a Edom por alegrarse de la caída de Jerusalén (Abd 1:10-14).',
        { h: 'Prueba y tentación' },
        'Los vecinos fueron para Israel una prueba constante. El libro de Jueces dice que Dios dejó algunas naciones en la tierra «para probar con ellos a Israel, para saber si obedecerían a los mandamientos de Jehová» (Jue 3:4). La amenaza más seria no eran sus ejércitos sino sus dioses: Baal y Asera de los cananeos y fenicios, Quemos de Moab, Moloc de Amón. Salomón edificó altares a esos dioses por sus esposas extranjeras (1 R 11:7), y Jezabel de Sidón llevó el culto a Baal al reino del norte (1 R 16:31).',
        { h: 'Las naciones bajo la mirada de Dios' },
        'Los profetas muestran que el Dios de Israel también juzga a las naciones vecinas. Amós comienza su libro con mensajes contra Damasco, Gaza, Tiro, Edom, Amón y Moab antes de hablar de Judá y de Israel (Am 1:3–2:3). Pero también hay esperanza para ellos: Rut la moabita entró en la familia de David y del Mesías (Rt 4:17; Mt 1:5), y Jesús sanó a la hija de una mujer de la región de Tiro y Sidón (Mr 7:24-30). Dios quería que Israel fuera luz para esos pueblos, no que los imitara.',
        ir('Estudiar los imperios en la historia bíblica', '../../imperios-historia/'),
        ir('Estudiar Egipto', '../../egipto/'),
        ir('Estudiar el imperio asirio', '../../imperio-asirio/'),
        { ejercicio: {
          pregunta: '¿Por qué Dios mandó a Israel no pelear contra Edom, Moab y Amón cuando venía del desierto?',
          opciones: [
            { t: 'Porque eran pueblos más fuertes que Israel.', ok: false, por_que: 'El texto no da esa razón. Israel venció a reyes más fuertes, como Og de Basán (Dt 3:1-3).' },
            { t: 'Porque Dios les había dado su tierra como heredad a ellos.', ok: true, por_que: 'Así lo dice Deuteronomio 2: Dios dio el monte de Seir a Esaú y Ar a los hijos de Lot.' },
            { t: 'Porque adoraban al mismo Dios que Israel.', ok: false, por_que: 'Moab y Amón adoraban a Quemos y a Moloc. La razón era otra: el parentesco y la herencia que Dios les dio.' }
          ],
          explicacion: 'Edom descendía de Esaú, y Moab y Amón de Lot. Dios les había dado su territorio (Dt 2:5, 9, 19): el Señor es dueño de toda la tierra y asigna a cada pueblo su lugar.'
        } }
      ],
      pensar: 'Israel debía ser diferente de sus vecinos sin dejar de ser luz para ellos. ¿Cómo vives tú esa tensión entre no imitar al mundo y amar a quienes te rodean (Jn 17:15-18)?'
    }
  ];
  // ================== RUTA II. Las regiones ==================
  const TODAS = ['r-filistea', 'r-saron', 'r-aco', 'r-sefela', 'r-juda', 'r-desierto', 'r-neguev', 'r-efrain', 'r-carmelo', 'r-jezreel', 'r-galilea-baja', 'r-galilea-alta', 'r-jordan', 'r-basan', 'r-galaad', 'r-amon', 'r-moab', 'r-edom'];
  const region = (capas, view, lugares, trazos) => mapa({ view, capas, vecinos: TODAS.filter(c => !capas.includes(c)), lugares, trazos });

  const regiones = [
    {
      id: 'costa', n: 'La llanura costera', ref: 'Josué 13:2-3; Cantares 2:1; Jonás 1:3; Hechos 9:32–10:48',
      visual: [
        region(['r-filistea', 'r-saron', 'r-aco'], V.costa, ['gaza', 'ascalon', 'asdod', 'ecron', 'gat', 'jope', 'afec', 'cesarea', 'dor', 'tolemaida']),
        img('costa.webp', 'La costa rocosa del antiguo puerto de Jope al amanecer, con pequeñas barcas de madera amarradas junto a las rocas y casas de piedra sobre la colina', 'Jope, el único puerto natural de la costa sur de Israel.')
      ],
      texto: [
        'La costa de la tierra de Israel es casi recta: no tiene grandes bahías ni puertos naturales, salvo unos pocos lugares como Jope, Dor y la bahía de Aco. Detrás de la playa hay una franja de dunas y, más adentro, una llanura fértil que se ensancha hacia el sur. La llanura tiene tres partes.',
        { h: 'Filistea' },
        'Al sur, entre Jope y Gaza, vivían los filisteos, uno de los «pueblos del mar» que llegaron desde el Egeo hacia el siglo XII a.C. Tenían cinco ciudades principales, cada una con su príncipe: Gaza, Asdod, Ascalón, Gat y Ecrón (Jos 13:3). Sabían trabajar el hierro, y durante un tiempo Israel dependía de ellos hasta para afilar sus herramientas (1 S 13:19-20). Desde esta llanura subían hacia los montes por los valles de la Sefela, como se ve en la estación siguiente.',
        { h: 'Sarón' },
        'Más al norte, entre el río Yarcón y el monte Carmelo, estaba la llanura de Sarón. En tiempos bíblicos tenía bosques de robles, pantanos y pastos, y era famosa por sus flores: «Yo soy la rosa de Sarón, y el lirio de los valles» (Cnt 2:1). Isaías la pone como imagen de la gloria que Dios dará al desierto (Is 35:2). Herodes el Grande construyó aquí Cesarea, con un puerto artificial de piedra y cemento que asombró al mundo antiguo.',
        { h: 'La llanura de Aco' },
        'Al norte del Carmelo, la bahía de Aco (la Tolemaida del Nuevo Testamento) era la salida de Galilea al mar. Pertenecía a la tribu de Aser, que no logró expulsar a sus habitantes (Jue 1:31).',
        { h: 'Un pueblo de los montes frente al mar' },
        'Israel casi nunca dominó la costa. Era tierra de filisteos y fenicios, y por ella pasaba el camino del mar de los ejércitos y las caravanas. El mar mismo era para los israelitas un lugar de peligro: Jonás bajó a Jope para huir de Dios en un barco (Jon 1:3), y los salmos describen el mar embravecido como imagen del caos que solo Dios domina (Sal 93:3-4).',
        'Sin embargo, en esta costa comenzó una nueva etapa de la historia de la salvación. En Jope, Pedro tuvo la visión del lienzo con animales (Hch 10:9-16), y en Cesarea entró en casa del centurión Cornelio, donde el Espíritu Santo descendió sobre los gentiles (Hch 10:44-46). Desde el puerto de Cesarea, Pablo partió hacia Roma (Hch 27:1). La costa que Israel miraba con temor se volvió la puerta del evangelio hacia las naciones.',
        ir('Estudiar el libro de Hechos', '../../hechos/')
      ],
      pensar: 'Pedro tuvo que salir de lo conocido para entrar en casa de un gentil, y allí vio al Espíritu Santo descender sobre ellos (Hch 10:44-48). ¿Hay «costas» que miras con temor y a las que Dios podría estar enviándote?'
    },
    {
      id: 'sefela', n: 'La Sefela, tierra de frontera', ref: '1 Samuel 17:1-3; Jueces 14:1-5; 1 Reyes 10:27; Jeremías 34:7',
      visual: [
        region(['r-sefela'], V.sefela, ['laquis', 'azeca', 'soco', 'valle-ela', 'bet-semes', 'timnat', 'gat', 'ecron', 'gezer', 'ajalon'], ['c-ela']),
        img('sefela.webp', 'Colinas bajas y redondeadas de la Sefela en primavera, con un valle de trigo verde, sicómoros dispersos y un pastor anónimo con algunas ovejas', 'La Sefela: colinas bajas entre la llanura de los filisteos y los montes de Judá.')
      ],
      texto: [
        'Entre la llanura costera y los montes de Judá hay una franja de colinas bajas, de 150 a 450 metros de altura, que la Biblia llama la Sefela, palabra hebrea que significa tierra baja; la RV 1960 a veces la traduce «los llanos» (Jos 10:40). Tiene unos 15 kilómetros de ancho y está cortada por valles que corren de este a oeste. Esos valles eran los caminos naturales para subir desde la costa hacia Jerusalén y Hebrón, y por eso la Sefela fue durante siglos la frontera disputada entre Israel y los filisteos.',
        { h: 'Los valles de la Sefela' },
        'Cada valle tiene su historia. En el valle de Ajalón, Josué persiguió a los reyes amorreos y pidió: «Sol, detente en Gabaón; y tú, luna, en el valle de Ajalón» (Jos 10:12). En el valle de Sorec vivía Dalila, y en Timnat Sansón mató al león y se casó con una filistea (Jue 14:1-5; 16:4). Por el valle que pasa por Bet-semes volvió el arca de Dios desde Ecrón, en una carreta tirada por dos vacas (1 S 6:12).',
        'El más conocido es el valle de Ela. Allí los filisteos acamparon entre Soco y Azeca, «y los filisteos estaban sobre un monte a un lado, e Israel estaba sobre otro monte al otro lado, y el valle entre ellos» (1 S 17:3). Si los filisteos ganaban, tenían abierto el camino hacia Belén y los montes de Judá. Por eso la victoria de David sobre Goliat no fue solo un duelo: defendió el corazón del país.',
        { h: 'Sicómoros y ciudades fortificadas' },
        'La Sefela era tierra de olivos, viñas y sicómoros, una higuera silvestre de madera resistente. Para decir cuán rico fue el reinado de Salomón, la Biblia dice que hizo los cedros tan abundantes «como cabrahigos de la Sefela» (1 R 10:27). Amós, antes de ser profeta, dijo de sí mismo: «soy boyero, y recojo higos silvestres» (Am 7:14).',
        'Los reyes de Judá fortificaron la Sefela para proteger el reino. La más importante de sus ciudades era Laquis, la segunda de Judá. Senaquerib de Asiria la sitió en 701 a.C. y mandó grabar la victoria en los muros de su palacio en Nínive. Más de un siglo después, cuando Babilonia avanzaba, Laquis y Azeca eran las últimas ciudades fortificadas que quedaban en pie (Jer 34:7). Unas cartas escritas en trozos de cerámica halladas en Laquis, del mismo tiempo, mencionan que ya no se veían las señales de fuego de Azeca.',
        ir('Estudiar el imperio asirio', '../../imperio-asirio/')
      ],
      pensar: 'La batalla de David se libró en la frontera, antes de que el enemigo llegara al corazón del país. ¿Qué fronteras de tu vida espiritual necesitas defender a tiempo, confiando en el nombre del Señor (1 S 17:45)?'
    },
    {
      id: 'juda', n: 'La serranía de Judá', ref: 'Salmo 125:2; Génesis 23:17-20; Isaías 5:1-2; Miqueas 5:2',
      visual: [
        region(['r-juda'], V.juda, ['jerusalen', 'belen', 'hebron', 'gabaon', 'rama', 'quiriat-jearim', 'betar']),
        img('terrazas.webp', 'Laderas de los montes de Judea con terrazas de piedra, viñas, olivos y una pequeña torre de vigilancia de piedra, al atardecer, con un pueblo de casas de piedra a lo lejos', 'Viñas en terrazas en los montes de Judea, como la viña de Isaías 5.')
      ],
      texto: [
        'Al sur de Jerusalén, la serranía central se ensancha en una meseta alta de piedra caliza: los montes de Judá. Aquí están las alturas mayores de la serranía del sur, con más de 1.000 metros cerca de Hebrón. Es una tierra de piedra, con poca tierra cultivable en las laderas, que los campesinos convirtieron en terrazas con muros de piedra seca para retener el suelo y la lluvia. En ellas plantaban viñas, olivos e higueras.',
        { h: 'La viña en el monte' },
        'Isaías describe exactamente ese trabajo: «Tenía mi amado una viña en una ladera fértil. La había cercado y despedregado y plantado de vides escogidas; había edificado en medio de ella una torre, y hecho también en ella un lagar» (Is 5:1-2). Despedregar una ladera, levantar muros y construir una torre de vigilancia era la tarea de años. Por eso la decepción del dueño, que esperaba uvas y recibió uvas silvestres, es tan fuerte.',
        { h: 'Ciudades de la serranía' },
        'Hebrón es una de las ciudades más antiguas. Allí vivieron Abraham, Isaac y Jacob, y allí Abraham compró la cueva de Macpela para sepultar a Sara, el primer pedazo de la tierra prometida que fue suyo (Gn 23:17-20). David reinó siete años en Hebrón antes de tomar Jerusalén (2 S 5:5). Belén, a unos 9 kilómetros de Jerusalén, era la aldea de Rut, de Booz y de David, y el lugar donde había de nacer el Mesías: «Pero tú, Belén Efrata, pequeña para estar entre las familias de Judá, de ti me saldrá el que será Señor en Israel» (Mi 5:2).',
        { h: 'Jerusalén entre montes' },
        'Jerusalén está en el borde norte de los montes de Judá, sobre dos colinas rodeadas de valles profundos: el Cedrón al este y el Hinom al sur y al oeste. Más allá, otros montes más altos la rodean, como el monte de los Olivos. El salmista ve en ese paisaje una imagen de la protección de Dios: «Como Jerusalén tiene montes alrededor de ella, así Jehová está alrededor de su pueblo desde ahora y para siempre» (Sal 125:2). La ciudad era fácil de defender y estaba en el límite entre Judá y Benjamín, lo que la hacía neutral entre las tribus. David la escogió como capital (2 S 5:6-9).',
        'Desde la serranía de Judá, el terreno cae bruscamente hacia el este, al desierto de Judea, que se estudia más adelante en esta ruta.',
        ir('Recorrer el templo de Herodes en 3D', '../../templo-herodes/')
      ],
      pensar: 'Dios hizo todo para su viña y esperaba fruto (Is 5:4). Jesús retoma esta imagen en Juan 15:1-8. ¿Qué fruto busca hoy el Señor en tu vida?'
    },
    {
      id: 'samaria', n: 'Samaria y la serranía de Efraín', ref: 'Génesis 12:6-7; Josué 8:30-35; 1 Samuel 1:3; 1 Reyes 16:24; Juan 4:4-26',
      visual: [
        region(['r-efrain'], V.centro, ['siquem', 'betel', 'silo', 'samaria', 'hai']),
        img('pozo-jacob.webp', 'Jesús, de espaldas, sentado junto a un pozo de piedra a mediodía, conversando con una mujer samaritana que sostiene un cántaro; detrás se levanta el monte Gerizim', 'Junto al pozo de Jacob, al pie del monte Gerizim (Jn 4).')
      ],
      texto: [
        'Al norte de Jerusalén, los montes se vuelven más abiertos y fértiles. Esta es la serranía de Efraín, el territorio de las tribus de Efraín y Manasés, los hijos de José. Sus valles anchos permiten cultivar trigo, y sus colinas, olivos. Por la cresta de los montes corría el camino principal de norte a sur, y en él se encontraban algunos de los lugares más importantes del Antiguo Testamento.',
        { h: 'Siquem, Betel y Silo' },
        'Siquem fue la primera parada de Abraham en Canaán. Allí Dios le dijo: «A tu descendencia daré esta tierra», y Abraham edificó un altar (Gn 12:6-7). La ciudad está en el paso entre dos montes, el Ebal y el Gerizim. Josué reunió allí a todo Israel para leer la ley: la mitad del pueblo frente a un monte y la otra mitad frente al otro, para escuchar las bendiciones y las maldiciones (Jos 8:33-35). Al final de su vida, Josué renovó el pacto en Siquem: «yo y mi casa serviremos a Jehová» (Jos 24:15).',
        'Betel, «casa de Dios», es el lugar donde Jacob vio la escalera que llegaba al cielo (Gn 28:10-19). Silo fue durante siglos el lugar del tabernáculo, donde Ana oró por un hijo y Samuel creció sirviendo a Dios (1 S 1–3).',
        { h: 'Samaria, la capital del norte' },
        'Cuando el reino se dividió, la serranía de Efraín fue el corazón del reino de Israel. El rey Omri compró un monte y edificó en él la ciudad de Samaria (1 R 16:24), que fue la capital hasta su caída ante Asiria en 722 a.C. Los asirios trajeron otros pueblos a la región, que se mezclaron con los israelitas que quedaron (2 R 17:24-41). De ahí salieron los samaritanos, que en tiempos de Jesús adoraban en el monte Gerizim y no se trataban con los judíos.',
        { h: 'Le era necesario pasar por Samaria' },
        'Muchos judíos de Galilea evitaban Samaria y bajaban por el valle del Jordán para ir a Jerusalén. Pero de Jesús dice Juan: «Y le era necesario pasar por Samaria» (Jn 4:4). Junto al pozo de Jacob, al pie del Gerizim, habló con una mujer samaritana que le dijo: «Nuestros padres adoraron en este monte, y vosotros decís que en Jerusalén es el lugar donde se debe adorar» (Jn 4:20). Jesús respondió que llegaba la hora en que los verdaderos adoradores adorarían al Padre en espíritu y en verdad (Jn 4:23). Después de Pentecostés, Felipe predicó en Samaria y muchos creyeron y recibieron el Espíritu Santo (Hch 8:5-17).',
        ir('Ver la armonía de los evangelios', '../../evangelios/')
      ],
      pensar: 'Jesús no evitó Samaria; fue a buscar a quien otros evitaban. ¿Quién es la «samaritana» que Dios pone en tu camino esta semana?'
    },
    {
      id: 'carmelo', n: 'El Carmelo y el valle de Jezreel', ref: '1 Reyes 18:19-46; Jueces 4–7; 1 Samuel 31:1-8; Apocalipsis 16:16',
      visual: [
        region(['r-carmelo', 'r-jezreel'], V.norte, ['carmelo', 'meguido', 'jezreel', 'sunem', 'tabor', 'gilboa', 'bet-sean', 'nazaret']),
        img('carmelo.webp', 'Vista desde la cumbre del monte Carmelo sobre el ancho valle de Jezreel con campos verdes y amarillos; a lo lejos, sobre el mar, sube una pequeña nube oscura en un cielo despejado y seco', '«Una pequeña nube como la palma de la mano de un hombre, que sube del mar» (1 R 18:44).')
      ],
      texto: [
        'La serranía central se interrumpe al norte de Samaria por una gran llanura en forma de triángulo: el valle de Jezreel, también llamado Esdrelón. Es la tierra más fértil del país y el único paso fácil entre la costa y el valle del Jordán. Por eso es también el mayor campo de batalla de la historia bíblica. En su borde occidental se levanta el monte Carmelo, una cadena boscosa de unos 25 kilómetros que entra en el mar como una proa.',
        { h: 'Elías en el Carmelo' },
        'El Carmelo, verde todo el año, era un lugar sagrado para los adoradores de Baal, el dios cananeo de la lluvia y la tormenta. Por eso Elías desafió allí a los profetas de Baal después de tres años de sequía (1 R 18:19-40). La prueba era quién enviaba fuego del cielo. Cuando el fuego de Jehová consumió el sacrificio, el pueblo exclamó: «¡Jehová es el Dios, Jehová es el Dios!» (1 R 18:39). Después Elías oró siete veces, hasta que su criado vio «una pequeña nube como la palma de la mano de un hombre, que sube del mar» (1 R 18:44). Elías corrió delante del carro de Acab hasta Jezreel, a unos 25 kilómetros, y llegó la lluvia.',
        { h: 'Un valle de batallas' },
        'En el valle de Jezreel, Débora y Barac vencieron a Sísara cuando el torrente Cisón se desbordó: «Los barrió el torrente de Cisón, el antiguo torrente, el torrente de Cisón» (Jue 5:21). Al pie del monte Moré, Gedeón venció a los madianitas con trescientos hombres (Jue 7). En el monte Gilboa, al borde del valle, murieron Saúl y Jonatán (1 S 31). En Meguido, que custodiaba el paso hacia la costa, el rey Josías murió enfrentando al faraón Necao (2 R 23:29). En Jezreel, Acab tenía su palacio y codició la viña de Nabot (1 R 21).',
        { h: 'Armagedón' },
        'El nombre «Armagedón» (Ap 16:16) significa probablemente «monte de Meguido». Juan ve allí reunidos a los reyes de la tierra para la batalla del gran día de Dios. Así como el valle de Jezreel fue el lugar de tantas batallas decisivas, la profecía lo presenta como el escenario donde las naciones se reunirán contra Dios al final, antes de la venida de Cristo en gloria (Ap 19:11-21).',
        'En medio de estas batallas, el valle también tiene escenas de paz: desde Nazaret, en la colina del norte, Jesús creció mirando esta llanura, y en la aldea de Naín, al pie del monte Moré, resucitó al hijo de una viuda (Lc 7:11-15).',
        ir('Estudiar Los últimos tiempos', '../../escatologia/')
      ],
      pensar: 'Elías oró siete veces antes de ver la nube pequeña. ¿Qué te enseña su perseverancia en la oración (Stg 5:17-18)?'
    },
    {
      id: 'galilea', n: 'Galilea y su mar', ref: 'Isaías 9:1-2; Mateo 4:12-25; Lucas 5:1-11; Juan 1:46',
      visual: [
        region(['r-galilea-baja', 'r-galilea-alta'], V.norte, ['nazaret', 'cana', 'capernaum', 'magdala', 'betsaida', 'tiberias', 'hazor', 'tabor', 'cesarea-filipo']),
        img('galilea.webp', 'Una barca de pesca de madera del siglo I en el mar de Galilea al amanecer, con pescadores anónimos recogiendo una red; detrás, las colinas verdes de la orilla y la niebla sobre el agua', 'El mar de Galilea al amanecer.')
      ],
      texto: [
        'Al norte del valle de Jezreel se extiende Galilea, la región más verde y lluviosa de la tierra de Israel. Tiene dos partes: la Baja Galilea, con colinas suaves y valles anchos, y la Alta Galilea, más montañosa, con el monte Merón de 1.208 metros. Al este, Galilea baja hacia un lago de agua dulce de unos 21 kilómetros de largo y 12 de ancho: el mar de Galilea, a unos 210 metros bajo el nivel del mar. En la Biblia tiene varios nombres: mar de Cineret (Nm 34:11), lago de Genesaret (Lc 5:1) y mar de Tiberias (Jn 21:1).',
        { h: 'Galilea de los gentiles' },
        'Galilea estaba lejos de Jerusalén y abierta a los caminos internacionales. Fue la primera región de Israel que cayó ante Asiria, en 732 a.C. (2 R 15:29), y por eso Isaías la llamó «Galilea de los gentiles». Pero a esa tierra humillada le prometió una luz: «El pueblo que andaba en tinieblas vio gran luz» (Is 9:2). En tiempos de Jesús, Galilea tenía muchos judíos, pero también ciudades griegas cercanas, y los de Jerusalén la miraban con desconfianza: «¿De Nazaret puede salir algo de bueno?» (Jn 1:46).',
        { h: 'El escenario del ministerio de Jesús' },
        'Jesús creció en Nazaret, una aldea pequeña en las colinas que miran al valle de Jezreel. Al comenzar su ministerio se trasladó a Capernaum, junto al lago, y Mateo ve en ello el cumplimiento de la profecía de Isaías (Mt 4:13-16). La mayor parte de su enseñanza y sus milagros ocurrió en un círculo de pocos kilómetros alrededor del lago: Capernaum, Betsaida, Corazín, Magdala y Caná. Llamó a pescadores del lago (Lc 5:1-11), calmó una tempestad (Mr 4:35-41), multiplicó los panes (Jn 6:1-14) y caminó sobre el agua (Mt 14:22-33).',
        'El lago está rodeado de montes y recibe vientos fríos que bajan de golpe desde las alturas, sobre todo por las tardes. Por eso se levantan tempestades repentinas, como la que asustó a los discípulos, que eran pescadores experimentados.',
        { h: 'Una tierra que da fruto' },
        'Josefo, historiador judío del siglo I, describe la orilla del lago como una tierra tan fértil que daba frutos de distintos climas a la vez. Había industria de pescado salado en Magdala, cuyo nombre griego, Tariquea, viene de la palabra griega para el pescado en salazón. Cerca de este lago llamó Jesús a sus primeros discípulos a ser pescadores de hombres (Mr 1:17), y aquí, después de resucitar, restauró a Pedro (Jn 21).',
        ir('Recorrer los pasajes en la armonía de los evangelios', '../../evangelios/')
      ],
      pensar: 'Jesús comenzó su ministerio en la región despreciada, no en el centro religioso. ¿Qué te dice eso sobre los lugares y las personas que Dios escoge para mostrar su luz?'
    },
    {
      id: 'jordan', n: 'El valle del Jordán y el mar Muerto', ref: 'Génesis 13:10; Josué 3:14-17; 2 Reyes 5:14; Mateo 3:13-17; Ezequiel 47:8-10',
      visual: [
        region(['r-jordan'], V.rift, ['dan', 'hula', 'bet-sean', 'jerico', 'gilgal', 'betabara', 'qumran', 'en-gadi', 'masada', 'ezion-geber']),
        esq('esquema-jordan.svg', 'Perfil del valle del Jordán de norte a sur: las fuentes en Dan al pie del Hermón, el lago Hula, el mar de Galilea a unos 210 m bajo el nivel del mar, el río Jordán que serpentea hasta el mar Muerto a unos 435 m bajo el nivel del mar, y el Arabá que sube a unos 200 m y baja al golfo de Áqaba', 'El valle del Jordán y el Arabá, de norte a sur.', 'Perfil'),
        img('jordan.webp', 'El río Jordán, de agua barrosa y verde, serpenteando entre una espesura de tamariscos, cañas y sauces, con las colinas áridas del valle al fondo bajo el sol de la mañana', 'La «espesura del Jordán» (Jer 12:5).')
      ],
      texto: [
        'El Jordán es el río de la Biblia. Nace al pie del monte Hermón, en tres fuentes principales (una de ellas en Dan y otra en Cesarea de Filipo), pasa por el lago Hula y entra en el mar de Galilea. Desde ahí baja hacia el sur, serpenteando por el fondo de la fosa, hasta el mar Muerto. En línea recta son unos 105 kilómetros, pero el río da tantas vueltas que su curso es mucho más largo. Su nombre significa probablemente «el que desciende», y con razón: en todo su recorrido baja casi 700 metros.',
        { h: 'Un río pequeño en un valle profundo' },
        'Quien espera un gran río se sorprende: en muchos lugares el Jordán tiene apenas unos metros de ancho. Lo importante no es su tamaño sino su posición. Corre por el fondo de la fosa del Jordán, entre dos paredes de montes, y las orillas tienen una espesura de tamariscos y cañas donde vivían leones (Jer 49:19). Jeremías usa esa imagen para hablar de una prueba difícil: «¿cómo harás en la espesura del Jordán?» (Jer 12:5). En primavera, con las lluvias y el deshielo del Hermón, el río se desbordaba: «el Jordán suele desbordarse por todas sus orillas todo el tiempo de la siega» (Jos 3:15). Justo en esa época Dios detuvo sus aguas para que Israel entrara a la tierra.',
        { h: 'Escenas en el Jordán' },
        'Lot miró «toda la llanura del Jordán, que toda ella era de riego, como el huerto de Jehová» (Gn 13:10), y escogió esa tierra rica junto a Sodoma. Elías y Eliseo cruzaron el río en seco (2 R 2:8, 14). Naamán el sirio se sumergió siete veces y quedó limpio (2 R 5:14). Juan el Bautista bautizaba en el Jordán, y allí fue bautizado Jesús, cuando el Espíritu descendió sobre Él y el Padre habló desde el cielo (Mt 3:13-17).',
        { h: 'El mar Salado' },
        'El Jordán termina en el mar Muerto, que la Biblia llama mar Salado (Gn 14:3) o mar del Arabá. No tiene salida: el agua solo se evapora, y por eso su salinidad es casi diez veces la del océano. No hay peces ni plantas. Junto a sus orillas estaban En-gadi, Qumrán, donde se hallaron los rollos del mar Muerto, y la fortaleza de Masada.',
        'Ezequiel vio en visión un río que salía del templo y bajaba hasta este mar, y sus aguas quedaban sanas: «y vivirá todo lo que entrare en este río» (Ez 47:9). Junto al mar muerto habría pescadores tendiendo redes (Ez 47:10). Es una imagen poderosa de la vida que Dios puede traer donde todo parece muerto.',
        ir('Leer sobre los manuscritos del mar Muerto', '../../de-la-biblia-a-nosotros/')
      ],
      pensar: 'El río de Ezequiel trae vida al mar donde nada vive. ¿Qué parte de tu vida necesita el río de Dios, y qué te enseña Juan 7:37-39 sobre ese río?'
    },
    {
      id: 'desierto', n: 'El desierto de Judea y el Neguev', ref: '1 Samuel 23:29–24:22; Mateo 3:1; 4:1-11; Génesis 21:31-33; Salmo 126:4',
      visual: [
        region(['r-desierto', 'r-neguev'], V.sur, ['jerusalen', 'belen', 'hebron', 'en-gadi', 'qumran', 'masada', 'arad', 'beerseba', 'cades-barnea']),
        img('engadi.webp', 'Una cascada que cae por una garganta de roca en el oasis de En-gadi, rodeada de vegetación verde en medio del desierto pardo; dos íbices junto al agua y, al fondo, el mar Muerto azul', 'En-gadi: agua en medio del desierto de Judea.')
      ],
      texto: [
        'Al este de los montes de Judá, el terreno cae en pocos kilómetros desde unos 800 metros hasta el mar Muerto. Ese declive es el desierto de Judea. No es un desierto de dunas, sino una tierra de colinas peladas, barrancos profundos y acantilados, porque los montes de Judá le quitan la lluvia: las nubes que vienen del Mediterráneo descargan su agua en las alturas y pasan secas hacia el este. Jerusalén recibe unos 550 milímetros de lluvia al año; Jericó, a 22 kilómetros, menos de 200.',
        { h: 'Un lugar de refugio y de prueba' },
        'El desierto de Judea fue refugio de perseguidos. David huyó de Saúl a sus cuevas y fortalezas, y en las de En-gadi perdonó la vida a Saúl (1 S 24). En-gadi es un oasis con fuentes y cascadas al pie de los acantilados, frente al mar Muerto. El título del Salmo 63 lo sitúa «en el desierto de Judá»: «Mi alma tiene sed de ti, mi carne te anhela, en tierra seca y árida donde no hay aguas» (Sal 63:1).',
        'También fue lugar de preparación. Juan el Bautista vino «predicando en el desierto de Judea» (Mt 3:1), y Jesús fue llevado por el Espíritu al desierto para ser tentado durante cuarenta días (Mt 4:1-11). En Qumrán, junto al mar Muerto, un grupo judío vivió apartado y copió los rollos que hoy son los manuscritos bíblicos más antiguos. Siglos después, monjes cristianos construyeron monasterios en estos barrancos.',
        { h: 'El Neguev' },
        'Al sur de Hebrón comienza el Neguev, que en hebreo significa «seco» y también «el sur». En la Biblia, el Neguev es sobre todo la región de Beerseba y Arad, una estepa con lluvias escasas donde se podía pastorear y, en años buenos, sembrar cebada. Abraham, Isaac y Jacob vivieron largos períodos aquí. En Beerseba, Abraham cavó un pozo, plantó un tamarisco e invocó allí el nombre de Jehová Dios eterno (Gn 21:33). Más al sur, el desierto se vuelve más duro, hasta Cades-barnea, donde Israel acampó durante los años del desierto (Nm 20:1).',
        { h: 'Los arroyos del Neguev' },
        'En el Neguev, los cauces pasan casi todo el año secos. Pero cuando llueve en los montes, el agua baja de golpe y los llena en minutos. Los que volvían del exilio usaron esa imagen para pedir a Dios una restauración repentina: «Haz volver nuestra cautividad, oh Jehová, como los arroyos del Neguev» (Sal 126:4). Y los profetas anunciaron un tiempo en que el desierto florecería: «Se alegrarán el desierto y la soledad; el yermo se gozará y florecerá como la rosa» (Is 35:1).',
        { ejercicio: {
          pregunta: '¿Por qué el desierto de Judea es tan seco, si está a pocos kilómetros de Jerusalén?',
          opciones: [
            { t: 'Porque está bajo el nivel del mar y el calor evapora toda la lluvia.', ok: false, por_que: 'Solo su extremo oriental está bajo el nivel del mar. La causa principal es otra: la lluvia casi no llega.' },
            { t: 'Porque los montes de Judá retienen la lluvia de las nubes que vienen del Mediterráneo.', ok: true, por_que: 'Las nubes descargan en las alturas del oeste y llegan secas al lado oriental: se llama «sombra de lluvia».' },
            { t: 'Porque los vientos del norte se llevan las nubes hacia Siria.', ok: false, por_que: 'Las lluvias vienen del oeste, del mar. El viento del norte trae tiempo seco y frío (Pr 25:23), pero no explica el desierto.' }
          ],
          explicacion: 'Las nubes del Mediterráneo suben por los montes de Judá, se enfrían y dejan allí su lluvia. Al bajar hacia el este, el aire queda seco. Por eso Jerusalén recibe unos 550 mm al año y Jericó menos de 200.'
        } }
      ],
      pensar: 'David, Juan el Bautista y Jesús pasaron por el desierto antes de cumplir su misión. ¿Qué te enseña el desierto sobre la manera en que Dios prepara a sus siervos (Os 2:14)?'
    },
    {
      id: 'transjordania', n: 'Al otro lado del Jordán', ref: 'Números 32:1-33; Deuteronomio 34:1-4; Amós 4:1; Jeremías 8:22; Marcos 5:1-20',
      visual: [
        pasos([
          { t: 'En el Antiguo Testamento: Basán, Galaad, Amón, Moab y Edom.', estado: { view: V.trans, capas: ['r-basan', 'r-galaad', 'r-amon', 'r-moab', 'r-edom'], lugares: ['edrei', 'ramot-galaad', 'jabes', 'rabat-amon', 'hesbon', 'monte-nebo', 'dibon', 'kir-hareset', 'bosra', 'petra'] } },
          { t: 'En el Nuevo Testamento: la tetrarquía de Felipe, la Decápolis y Perea.', estado: { view: V.jesus, capas: ['nt-felipe', 'nt-decapolis', 'nt-perea'], lugares: ['cesarea-filipo', 'gadara', 'betabara', 'maqueronte'] } }
        ]),
        img('nebo.webp', 'Moisés, anciano, de pie en la cumbre del monte Nebo, apoyado en su cayado, mirando hacia el valle del Jordán y la tierra prometida en la distancia brumosa', 'Moisés mira la tierra desde el monte Nebo (Dt 34:1-4).')
      ],
      texto: [
        'Al este del Jordán se levanta la meseta de Transjordania, más alta y más lluviosa en su borde occidental que el valle, y que hacia el este se convierte en el desierto de Arabia. La Biblia la llama «al otro lado del Jordán». La cruzan varios ríos de este a oeste que la dividen en regiones: el Yarmuc, el Jaboc, el Arnón y el Zered.',
        { h: 'Las regiones' },
        'Al norte, Basán era una meseta volcánica de tierras fértiles y pastos famosos. Amós llama «vacas de Basán» a las mujeres ricas de Samaria que oprimían a los pobres (Am 4:1). Más al sur, Galaad tenía bosques y era famosa por su bálsamo medicinal: «¿No hay bálsamo en Galaad? ¿No hay allí médico?» (Jer 8:22). A Galaad huyó Jacob de Labán (Gn 31:21), y en el Jaboc luchó con el ángel (Gn 32:22-30). Amón, con su capital Rabá (la actual Amán), estaba al borde del desierto. Moab ocupaba la meseta al este del mar Muerto, una tierra buena para trigo y ovejas: el rey Mesa de Moab pagaba a Israel un tributo de cien mil corderos (2 R 3:4). Y al sur, Edom ocupaba los montes rojizos de Seir.',
        { h: 'Rubén, Gad y Manasés' },
        'Cuando Israel venció a los reyes Sehón y Og, las tribus de Rubén y Gad, que tenían mucho ganado, pidieron quedarse al este del Jordán, junto con la mitad de Manasés (Nm 32). Moisés aceptó con la condición de que cruzaran a pelear con sus hermanos. Por estar separadas por el valle, estas tribus fueron las primeras en ser llevadas cautivas por Asiria (1 Cr 5:26).',
        { h: 'Moisés en el Nebo' },
        'Desde la cumbre del monte Nebo, frente a Jericó, Dios mostró a Moisés toda la tierra, desde Galaad hasta Dan y hasta el mar occidental, y le dijo: «Esta es la tierra de que juré a Abraham, a Isaac y a Jacob, diciendo: A tu descendencia la daré. Te he permitido verla con tus ojos, mas no pasarás allá» (Dt 34:4).',
        { h: 'En tiempos de Jesús' },
        'En el Nuevo Testamento, la Transjordania se dividía en otras regiones. Al norte, la tetrarquía de Felipe, con Cesarea de Filipo, donde Pedro confesó que Jesús era el Cristo (Mt 16:13-16). En el centro, la Decápolis, diez ciudades de cultura griega, donde Jesús liberó al endemoniado gadareno, que luego «comenzó a publicar en Decápolis cuán grandes cosas había hecho Jesús con él» (Mr 5:20). Y al sur, Perea, por donde pasaban los peregrinos de Galilea, y donde Jesús enseñó en sus últimos meses (Mr 10:1). En la fortaleza de Maqueronte, en Perea, Herodes Antipas mandó decapitar a Juan el Bautista, según Josefo.'
      ],
      pensar: 'Moisés vio la tierra pero no entró en ella; siglos después estuvo en ella con Jesús en el monte de la transfiguración (Mt 17:3). ¿Qué te enseña esto sobre la fidelidad de Dios más allá de nuestros errores?'
    }
  ];
  // ================== RUTA III. Clima, agua y vida ==================
  const clima = [
    {
      id: 'lluvia-cielo', n: 'Una tierra que bebe la lluvia del cielo', ref: 'Deuteronomio 11:10-17; 28:12, 23-24',
      visual: [
        cita('Deuteronomio 11:10-12', 'La tierra a la cual entras para tomarla no es como la tierra de Egipto de donde habéis salido, donde sembrabas tu semilla, y regabas con tu pie, como huerto de hortaliza. La tierra a la cual pasáis para tomarla es tierra de montes y de vegas, que bebe las aguas de la lluvia del cielo; tierra de la cual Jehová tu Dios cuida; siempre están sobre ella los ojos de Jehová tu Dios, desde el principio del año hasta el fin.'),
        esq('esquema-dos-tierras.svg', 'Dos maneras de regar: en Egipto, el Nilo se desborda cada año y los campesinos riegan con canales y norias movidas con el pie; en Canaán, las nubes del Mediterráneo traen la lluvia sobre los montes y la tierra depende del cielo', 'Egipto se riega desde abajo; la tierra prometida, desde arriba.', 'Dos tierras'),
        esq('esquema-lluvia.svg', 'Lluvia anual aproximada en distintos lugares de la tierra de Israel: más de 1.000 mm en el monte Hermón, unos 700 en la Alta Galilea, unos 550 en Jerusalén y en la costa, unos 350 en Gaza, unos 200 en Beerseba, menos de 200 en Jericó, unos 50 junto al mar Muerto y unos 25 en Eilat', 'Llueve más en el norte y en las alturas; menos hacia el sur y el este.', 'Lluvia')
      ],
      texto: [
        'Cuando Israel estaba por entrar en la tierra, Moisés le advirtió que iba a un lugar muy distinto de Egipto. «La tierra a la cual entras para tomarla no es como la tierra de Egipto de donde habéis salido, donde sembrabas tu semilla, y regabas con tu pie, como huerto de hortaliza» (Dt 11:10). En Egipto casi no llueve, pero el Nilo se desborda cada verano y deja la tierra húmeda y fértil. El campesino solo tenía que llevar el agua por canales, a veces moviendo con el pie una rueda o una compuerta. El agua venía de abajo y era segura.',
        'La tierra prometida, en cambio, «es tierra de montes y de vegas, que bebe las aguas de la lluvia del cielo; tierra de la cual Jehová tu Dios cuida; siempre están sobre ella los ojos de Jehová tu Dios, desde el principio del año hasta el fin» (Dt 11:11-12). No hay un gran río para regar: el Jordán corre en el fondo de la fosa, demasiado bajo para llevar su agua a los campos de los montes. Todo depende de la lluvia.',
        { h: 'Una lección de fe' },
        'Esta diferencia no era solo agrícola. En Egipto, el hombre podía sentir que controlaba su cosecha. En Canaán, cada año el campesino miraba al cielo y dependía de Dios. Por eso la lluvia aparece en la Biblia como bendición del pacto: «Te abrirá Jehová su buen tesoro, el cielo, para enviar la lluvia a tu tierra en su tiempo» (Dt 28:12). Y la sequía es una advertencia: si el pueblo se volvía a otros dioses, «los cielos que están sobre tu cabeza serán de bronce, y la tierra que está debajo de ti, de hierro» (Dt 28:23).',
        'Así se entiende la tentación de Baal. Los cananeos creían que Baal, dios de la tormenta, traía la lluvia. Para un campesino que vivía de la lluvia, adorar a Baal era una forma de asegurarse la cosecha. Por eso el conflicto de Elías con los profetas de Baal empieza con una sequía (1 R 17:1): Dios mostró que Él, y no Baal, gobierna el cielo.',
        { h: 'Dónde llueve más' },
        'Las lluvias llegan del oeste, con las nubes del Mediterráneo, y caen sobre todo en invierno. Llueve más en el norte que en el sur, y más en las alturas que en los valles. El monte Hermón recibe más de 1.000 milímetros al año, y Jerusalén unos 550, lo mismo que algunas ciudades de Europa. Pero en Beerseba caen unos 200 milímetros, y junto al mar Muerto, unos 50. Por eso el norte es verde y el sur es estepa y desierto, y una sequía de un par de años podía obligar a una familia a emigrar, como la de Elimelec y Noemí, que se fue de Belén a Moab (Rt 1:1).'
      ],
      pensar: 'La tierra prometida enseñaba a mirar al cielo cada año. ¿En qué cosas buscas la seguridad que Israel tenía en Egipto, y qué significa para ti vivir de la lluvia que Dios envía (Mt 6:31-33)?'
    },
    {
      id: 'lluvias', n: 'La lluvia temprana y la tardía', ref: 'Deuteronomio 11:14; Joel 2:23-29; Hechos 2:16-21; Santiago 5:7-8; Oseas 6:3',
      visual: [
        esq('esquema-lluvias.svg', 'El año de las lluvias en la tierra de Israel: la lluvia temprana en octubre y noviembre ablanda la tierra para arar y sembrar; las lluvias fuertes de invierno, de diciembre a febrero; la lluvia tardía en marzo y abril llena el grano antes de la siega; y el verano seco de mayo a septiembre, sin una gota de lluvia', 'Las estaciones de la lluvia y el trabajo del campo.', 'El año'),
        cita('Joel 2:23', 'Vosotros también, hijos de Sion, alegraos y gozaos en Jehová vuestro Dios; porque os ha dado la primera lluvia a su tiempo, y hará descender sobre vosotros lluvia temprana y tardía como al principio.')
      ],
      texto: [
        'En la tierra de Israel no llueve todo el año. Hay dos estaciones bien marcadas: un verano largo y seco, de mayo a septiembre, en que no cae ni una gota, y un invierno lluvioso, de octubre a abril. La Biblia distingue tres momentos dentro de la temporada de lluvias, y los campesinos los esperaban con ansiedad.',
        { h: 'Tres lluvias' },
        'La lluvia temprana (en hebreo, yoré) llega en octubre y noviembre, después del largo verano. Ablanda la tierra endurecida para que se pueda arar y sembrar el trigo y la cebada. Las lluvias de invierno, de diciembre a febrero, son las más abundantes y llenan las cisternas. La lluvia tardía (malqosh) cae en marzo y abril, justo antes de la siega, y hace que el grano se llene y madure. Sin ella, la cosecha se perdía aunque hubiera llovido mucho en invierno. Por eso Dios promete: «yo daré la lluvia de vuestra tierra a su tiempo, la temprana y la tardía» (Dt 11:14).',
        { h: 'Una imagen del Espíritu' },
        'Los profetas usaron estas lluvias como imagen de la bendición de Dios. Oseas dice que el Señor «vendrá a nosotros como la lluvia, como la lluvia tardía y temprana a la tierra» (Os 6:3). Joel, después de anunciar una plaga de langostas, promete: «os ha dado la primera lluvia a su tiempo, y hará descender sobre vosotros lluvia temprana y tardía como al principio» (Jl 2:23). Y a continuación agrega: «Y después de esto derramaré mi Espíritu sobre toda carne» (Jl 2:28). El derramamiento de la lluvia y el del Espíritu van juntos.',
        'El día de Pentecostés, Pedro explicó lo que estaba pasando con esas palabras: «esto es lo dicho por el profeta Joel: Y en los postreros días, dice Dios, derramaré de mi Espíritu sobre toda carne» (Hch 2:16-17). Pentecostés cayó al terminar la siega del trigo, después de la lluvia tardía. Muchos creyentes pentecostales han visto en esta imagen un llamado a esperar y pedir, también hoy, un derramamiento abundante del Espíritu, como la lluvia que el campesino necesita para su cosecha.',
        { h: 'La paciencia del labrador' },
        'Santiago usa la misma imagen para hablar de la venida del Señor: «Mirad cómo el labrador espera el precioso fruto de la tierra, aguardando con paciencia hasta que reciba la lluvia temprana y la tardía. Tened también vosotros paciencia, y afirmad vuestros corazones; porque la venida del Señor se acerca» (Stg 5:7-8). El campesino no puede apurar la lluvia, pero tampoco deja de trabajar: siembra, espera y confía.',
        { ejercicio: {
          pregunta: '¿Por qué era tan importante la lluvia tardía de marzo y abril?',
          opciones: [
            { t: 'Porque ablandaba la tierra para poder arar.', ok: false, por_que: 'Esa es la función de la lluvia temprana, en otoño, al comienzo de la temporada.' },
            { t: 'Porque llenaba el grano antes de la siega.', ok: true, por_que: 'La lluvia tardía cae poco antes de la cosecha y hace que el trigo y la cebada maduren bien.' },
            { t: 'Porque llenaba las cisternas para el verano.', ok: false, por_que: 'Las cisternas se llenaban sobre todo con las lluvias fuertes del invierno.' }
          ],
          explicacion: 'Sin la lluvia tardía, una buena siembra podía terminar en una cosecha pobre. Por eso Joel, Oseas y Santiago la usan como imagen de una bendición que completa la obra de Dios.'
        } }
      ],
      pensar: 'Joel une la lluvia que hace madurar el grano con el derramamiento del Espíritu Santo. ¿Estás pidiendo y esperando esa lluvia en tu vida y en tu iglesia (Lc 11:13; Zac 10:1)?'
    },
    {
      id: 'rocio', n: 'Rocío, vientos y sequía', ref: 'Salmo 133:3; Oseas 14:5; Jueces 6:36-40; Lucas 12:54-55; 1 Reyes 17:1',
      visual: [
        esq('esquema-vientos.svg', 'Los vientos de la tierra de Israel: el viento del oeste, del mar, trae las nubes y la lluvia; el viento del norte, frío y seco, ahuyenta la lluvia; el viento del sur trae calor; y el viento solano, del este, sopla del desierto caliente y seco y marchita las plantas', 'Cada viento trae un tiempo distinto (Lc 12:54-55).', 'Vientos'),
        img('rocio.webp', 'Gotas de rocío sobre hojas de vid y racimos verdes al amanecer en una viña de Galilea; al fondo, entre la neblina, la cumbre nevada del monte Hermón', 'El rocío de la mañana riega la tierra en el verano seco.')
      ],
      texto: [
        'Si en verano no llueve, ¿cómo sobreviven las viñas y los cultivos de verano? La respuesta es el rocío. En las noches de verano, el aire húmedo que viene del mar se enfría y deja gotas sobre las plantas. En algunas zonas de la costa y de los montes hay rocío más de doscientas noches al año, y es suficiente para que maduren las uvas, los higos y las granadas. Por eso el rocío es en la Biblia una bendición tan valorada como la lluvia: Isaac bendice a Jacob con «el rocío del cielo, y de las grosuras de la tierra» (Gn 27:28).',
        'El rocío es también una imagen de la gracia de Dios, que llega en silencio y renueva: «Yo seré a Israel como rocío; él florecerá como lirio» (Os 14:5). El salmista compara la unidad de los hermanos con «el rocío de Hermón, que desciende sobre los montes de Sion» (Sal 133:3). Y Gedeón pidió una señal con un vellón de lana: primero mojado de rocío con la tierra seca, y luego seco con la tierra mojada (Jue 6:36-40).',
        { h: 'Los vientos' },
        'Los campesinos sabían leer el viento. El viento del oeste, del mar, trae nubes y lluvia. Jesús lo recuerda: «Cuando veis la nube que sale del poniente, luego decís: Agua viene; y así sucede. Y cuando sopla el viento del sur, decís: Hará calor; y lo hace» (Lc 12:54-55). El viento del norte es frío y seco: «El viento del norte ahuyenta la lluvia» (Pr 25:23).',
        'El más temido era el viento solano u oriental, que sopla desde el desierto en primavera y otoño. Es caliente y seco, levanta polvo y puede marchitar una cosecha en pocos días. Hoy se le llama jamsín o siroco. En el sueño de Faraón, las espigas menudas estaban «abatidas del viento solano» (Gn 41:6), y Dios preparó «un recio viento solano» que hizo desfallecer a Jonás (Jon 4:8). Pero el mismo viento solano, enviado por Dios, abrió el mar Rojo para que Israel pasara (Éx 14:21).',
        { h: 'La sequía' },
        'Cuando faltaban la lluvia y el rocío, venía el hambre. Elías anunció a Acab: «no habrá lluvia ni rocío en estos años, sino por mi palabra» (1 R 17:1). Santiago agrega que la sequía duró «tres años y seis meses» y que terminó porque Elías oró (Stg 5:17-18). En una tierra que dependía del cielo, la sequía era una llamada al arrepentimiento, y la oración de un hombre justo podía abrir los cielos.'
      ],
      pensar: 'El rocío llega sin ruido y sostiene la vida en el tiempo más seco. ¿Cómo has visto la gracia de Dios sostenerte en tus temporadas de sequía?'
    },
    {
      id: 'agua', n: 'Fuentes, pozos y cisternas', ref: 'Jeremías 2:13; Génesis 26:18-22; 2 Reyes 20:20; Juan 4:6-14; 7:37-38',
      visual: [
        img('cisterna.webp', 'En el patio de una casa de piedra de Judea, una mujer anónima saca agua con un cántaro atado a una cuerda desde la boca redonda de una cisterna excavada en la roca y revocada; luz suave de la mañana', 'Una cisterna doméstica excavada en la roca.'),
        cita('Jeremías 2:13', 'Porque dos males ha hecho mi pueblo: me dejaron a mí, fuente de agua viva, y cavaron para sí cisternas, cisternas rotas que no retienen agua.')
      ],
      texto: [
        'En una tierra donde no llueve la mitad del año, guardar el agua era cuestión de vida o muerte. Las ciudades antiguas se construían junto a una fuente, y cuando no la había, la gente aprendió a cavar pozos y cisternas. La Biblia está llena de escenas junto al agua, porque allí se encontraba la gente, se cuidaban los rebaños y se resolvían conflictos.',
        { h: 'Fuentes' },
        'Una fuente es agua que brota sola de la tierra. Es «agua viva», porque corre. Jerusalén nació junto a la fuente de Gihón, en el valle del Cedrón. Allí ungieron a Salomón como rey (1 R 1:38-39). Cuando los asirios amenazaban la ciudad, el rey Ezequías hizo un túnel de unos 530 metros en la roca para llevar el agua de Gihón al estanque de Siloé, dentro de las murallas (2 R 20:20; 2 Cr 32:30). El túnel todavía existe, y una inscripción hallada en él cuenta cómo se encontraron los dos grupos de picadores que venían de lados opuestos. Al estanque de Siloé envió Jesús al ciego de nacimiento a lavarse (Jn 9:7).',
        { h: 'Pozos' },
        'Donde no hay fuente, se cava un pozo hasta llegar al agua subterránea. Los pozos de los patriarcas eran tan valiosos que provocaban peleas: los pastores de Gerar disputaron con los de Isaac por los pozos, hasta que Isaac abrió uno en paz y lo llamó Rehobot, que significa lugares amplios (Gn 26:18-22). El pozo de Jacob, junto a Sicar, todavía tenía agua en tiempos de Jesús. Allí Jesús pidió de beber a una samaritana y le ofreció «agua viva»: «el que bebiere del agua que yo le daré, no tendrá sed jamás» (Jn 4:14).',
        { h: 'Cisternas' },
        'La mayoría de las casas y aldeas dependían de cisternas: depósitos excavados en la roca y revocados con cal, que se llenaban con el agua de lluvia de los techos y los patios. Desde que se inventó un buen revoque impermeable, hacia el tiempo de la conquista, se pudieron fundar aldeas en los montes lejos de las fuentes. Pero una cisterna con grietas pierde el agua. Una cisterna seca podía servir de cárcel: en una echaron sus hermanos a José (Gn 37:24), y en otra, llena de barro, hundieron a Jeremías (Jer 38:6).',
        'Dios usa esta imagen para describir el pecado de su pueblo: «me dejaron a mí, fuente de agua viva, y cavaron para sí cisternas, cisternas rotas que no retienen agua» (Jer 2:13). Cambiar una fuente que corre por un depósito agrietado es una locura. Así es dejar a Dios por los ídolos.'
      ],
      pensar: 'Jesús dijo: «Si alguno tiene sed, venga a mí y beba» y prometió ríos de agua viva por el Espíritu (Jn 7:37-39). ¿De qué fuente estás bebiendo, y hay alguna «cisterna rota» que debas dejar?'
    },
    {
      id: 'cosechas', n: 'El año agrícola y las siete especies', ref: 'Deuteronomio 8:7-10; Levítico 23:9-22; Rut 1:22–2:23',
      visual: [
        esq('esquema-ano-agricola.svg', 'El año agrícola de Israel: de septiembre a noviembre, la cosecha de la aceituna y la lluvia temprana; de noviembre a enero, la siembra de trigo y cebada; en marzo y abril, la siega de la cebada y la Pascua con las primicias; en mayo y junio, la siega del trigo y Pentecostés; en verano, la poda, la vendimia, los higos y las granadas; y en otoño, la fiesta de los Tabernáculos al recoger los frutos', 'El año del campo y las fiestas de Israel.', 'El año'),
        tabla({
          titulo: 'Las siete especies de la tierra (Dt 8:8)',
          cab: ['Especie', 'Cosecha', 'Uso', 'En la Biblia'],
          filas: [
            ['Trigo', 'Mayo y junio', 'Pan de cada día', 'Pentecostés (Éx 34:22); Jn 12:24'],
            ['Cebada', 'Abril', 'Pan de los pobres y forraje', 'Rt 1:22; Jn 6:9'],
            ['Vid', 'Agosto y septiembre', 'Uvas, pasas y vino', 'Is 5:1-7; Jn 15:1'],
            ['Higuera', 'Junio a septiembre', 'Higos frescos y secos', 'Mi 4:4; Mr 11:13'],
            ['Granado', 'Septiembre y octubre', 'Fruta y adorno', 'Éx 28:33; Cnt 4:3'],
            ['Olivo', 'Octubre y noviembre', 'Aceite para comer, alumbrar y ungir', 'Éx 27:20; Sal 52:8'],
            ['Miel', 'Todo el año', 'Miel de dátiles y de abejas', 'Éx 3:8; Jue 14:8']
          ],
          nota: 'La «miel» de Dt 8:8 se entiende casi siempre como miel de dátiles; la miel de abejas silvestres también aparece en la Biblia.'
        }),
        foto('calendario-gezer.jpg', 'El calendario de Gézer: una pequeña tablilla de piedra caliza con siete líneas de escritura hebrea antigua que enumeran los meses del trabajo agrícola', 'Calendario de Gézer, siglo X a.C. (Museo Arqueológico de Estambul).', 'Osama Shukir Muhammed Amin FRCP(Glasg), CC BY-SA 4.0, Wikimedia Commons')
      ],
      texto: [
        'Moisés describe la tierra prometida con una lista: «tierra de trigo y cebada, de vides, higueras y granados; tierra de olivos, de aceite y de miel» (Dt 8:8). Son las llamadas «siete especies», los productos principales de la tierra. Cada una tenía su momento en el año, y ese ritmo del campo marcaba también el ritmo de la adoración.',
        { h: 'El año del campesino' },
        'El año comenzaba en otoño. Con la lluvia temprana se araba y se sembraba trigo y cebada. En invierno se cuidaban los campos y se podaban las viñas. En primavera, hacia abril, se segaba la cebada, y unas siete semanas después, el trigo. En verano maduraban las uvas, los higos y las granadas. Y al final, con las primeras lluvias, se recogían las aceitunas y se prensaban para sacar el aceite.',
        'Una pequeña tablilla de piedra hallada en Gézer, del siglo X a.C., resume este ciclo. Es uno de los textos hebreos más antiguos que se conocen, y enumera los meses de la recolección, la siembra, la siembra tardía, el corte del lino, la siega de la cebada, la siega y la medida del grano, la poda y los frutos del verano. Tal vez era un ejercicio de escritura de un estudiante.',
        { h: 'Las fiestas y la cosecha' },
        'Las tres grandes fiestas de Israel coincidían con las cosechas. En la Pascua, al comenzar la siega de la cebada, el sacerdote mecía la primera gavilla delante de Dios (Lv 23:10-11). Siete semanas después, en Pentecostés, se presentaban los primeros panes de trigo (Lv 23:15-17). Y en otoño, al recoger los frutos, se celebraba la fiesta de los Tabernáculos (Lv 23:39). Así, cada cosecha recordaba que la tierra y sus frutos venían de Dios. El libro de Rut ocurre entre la siega de la cebada y la del trigo (Rt 1:22; 2:23).',
        'En el Nuevo Testamento, estas fiestas se cumplen en Cristo y en la iglesia: Jesús resucitó el día de las primicias (1 Co 15:20), y el Espíritu Santo fue derramado en Pentecostés, la fiesta de la cosecha del trigo (Hch 2:1-4). Jesús mismo usó estas imágenes: «A la verdad la mies es mucha, mas los obreros pocos» (Mt 9:37).',
        { h: 'Cada uno debajo de su parra' },
        'La imagen bíblica de la paz es un hombre sentado «debajo de su vid y debajo de su higuera» (Mi 4:4), comiendo el fruto de su propio trabajo. Así describe la Biblia los días de Salomón (1 R 4:25) y así describe Miqueas el reino futuro del Mesías.',
        ir('Estudiar el calendario de Israel en Pesos, medidas y horas', '../../medidas-biblicas/#tiempo/5'),
        { ejercicio: {
          pregunta: '¿Qué cosecha se celebraba en Pentecostés?',
          opciones: [
            { t: 'La de la cebada.', ok: false, por_que: 'La primera gavilla de cebada se ofrecía en la fiesta de las primicias, durante la Pascua.' },
            { t: 'La del trigo.', ok: true, por_que: 'Pentecostés era la fiesta de las semanas, cuando se ofrecían los primeros panes del trigo nuevo (Éx 34:22).' },
            { t: 'La de las uvas y las aceitunas.', ok: false, por_que: 'Esos frutos se recogían a fines del verano y en otoño, en la fiesta de los Tabernáculos.' }
          ],
          explicacion: 'Pentecostés llegaba cincuenta días después de las primicias de la cebada, al terminar la siega del trigo. En ese día Dios derramó el Espíritu Santo y se recogió la primera gran cosecha de la iglesia (Hch 2:41).'
        } }
      ],
      pensar: 'Cada cosecha de Israel tenía su fiesta para dar gracias a Dios. ¿Qué «cosechas» de tu vida necesitas reconocer hoy como regalo del Señor?'
    },
    {
      id: 'pastores', n: 'Pastores y rebaños', ref: 'Salmo 23; Amós 1:1; Lucas 2:8-20; Juan 10:1-16; Ezequiel 34:11-16',
      visual: [
        img('pastor.webp', 'Un pastor anónimo de Judea, con manto de lana y cayado, camina delante de un rebaño de ovejas y cabras negras por una ladera seca y ondulada del desierto de Judea, al atardecer', 'El pastor va delante y las ovejas lo siguen (Jn 10:4).'),
        cita('Juan 10:3-4', 'A éste abre el portero, y las ovejas oyen su voz; y a sus ovejas llama por nombre, y las saca. Y cuando ha sacado fuera todas las propias, va delante de ellas; y las ovejas le siguen, porque conocen su voz.')
      ],
      texto: [
        'Donde no se podía sembrar, se pastoreaba. Las colinas secas del desierto de Judea, las estepas del Neguev y las mesetas de Transjordania eran tierra de rebaños de ovejas y cabras. Los patriarcas fueron pastores, Moisés pastoreó cuarenta años en Madián, David cuidaba las ovejas de su padre en Belén, y Amós era «uno de los pastores de Tecoa» (Am 1:1).',
        { h: 'La vida del pastor' },
        'En invierno y primavera, los rebaños aprovechaban los pastos que brotaban con la lluvia en el borde del desierto. En verano, cuando todo se secaba, el pastor los llevaba a los campos ya segados o a lugares más altos. Por eso el pastor tenía que conocer la tierra: dónde había agua, dónde pasto, dónde peligro. El Salmo 23 refleja ese conocimiento: «En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará» (Sal 23:2). Las ovejas no beben en aguas que corren rápido; el buen pastor busca un remanso.',
        'El pastor llevaba un cayado largo para guiar y una vara corta para defender (Sal 23:4), una honda, como David (1 S 17:40), y un saco con comida. Por la noche reunía el rebaño en un redil de piedra en una ladera o en una cueva, y él mismo dormía en la entrada. De noche, los pastores se turnaban para vigilar: «Había pastores en la misma región, que velaban y guardaban las vigilias de la noche sobre su rebaño» (Lc 2:8). A esos hombres sencillos, cerca de Belén, llegó primero el anuncio del nacimiento de Jesús.',
        { h: 'El pastor va delante' },
        'En Israel, el pastor no arreaba las ovejas desde atrás, sino que iba delante y las llamaba, y ellas lo seguían porque conocían su voz. Jesús usa esa costumbre para describirse: «a sus ovejas llama por nombre, y las saca. Y cuando ha sacado fuera todas las propias, va delante de ellas; y las ovejas le siguen, porque conocen su voz» (Jn 10:3-4). Cuando varios rebaños pasaban la noche en el mismo redil, en la mañana cada pastor llamaba y solo sus ovejas salían.',
        { h: 'Dios, el pastor de Israel' },
        'Por eso la imagen del pastor es una de las más usadas en la Biblia para hablar de Dios y de los líderes del pueblo. Ezequiel denuncia a los malos pastores que se apacentaban a sí mismos, y promete: «Yo mismo iré a buscar mis ovejas, y las reconoceré» (Ez 34:11). Jesús cumple esa promesa: «Yo soy el buen pastor; el buen pastor su vida da por las ovejas» (Jn 10:11). Y Pedro llama a los ancianos de la iglesia a apacentar la grey de Dios hasta que aparezca «el Príncipe de los pastores» (1 P 5:2-4).'
      ],
      pensar: 'Las ovejas siguen al pastor porque conocen su voz. ¿Cómo estás aprendiendo a reconocer la voz de Jesús en medio de tantas otras voces?'
    }
  ];
  // ================== RUTA IV. Caminos, ciudades y distancias ==================
  const caminos = [
    {
      id: 'internacionales', n: 'Los caminos internacionales', ref: 'Isaías 9:1; Números 20:17; 21:21-23; Génesis 37:25; 1 Reyes 9:15',
      visual: [
        mapa({ view: [[29.3, 32.4], [33.8, 36.8]], lugares: ['gaza', 'meguido', 'hazor', 'damasco', 'rabat-amon', 'bosra', 'ezion-geber', 'kir-hareset', 'hesbon'], trazos: ['c-mar', 'c-real'] }),
        img('caravana.webp', 'Una caravana de camellos cargados con fardos de especias y telas avanza por un camino de tierra junto a la costa del Mediterráneo, con mercaderes anónimos con turbantes y mantos, y una colina con una ciudad amurallada al fondo', 'Una caravana por el camino de la costa.')
      ],
      texto: [
        'Dos grandes caminos internacionales cruzaban la región de norte a sur. No eran carreteras pavimentadas como las romanas, que llegaron mucho después, sino rutas usadas durante siglos, que seguían los pasos más fáciles, las fuentes de agua y las ciudades donde se podía descansar.',
        { h: 'El camino del mar' },
        'El primero salía de Egipto, cruzaba el norte del Sinaí por la costa y subía por la llanura de los filisteos pasando por Gaza, Ascalón y Asdod. Al llegar al monte Carmelo cruzaba la serranía por el paso de Meguido, atravesaba el valle de Jezreel, bordeaba el mar de Galilea, pasaba por Hazor y seguía hacia Damasco y Mesopotamia. Isaías lo llama «el camino del mar» (Is 9:1), y los romanos, más tarde, Vía Maris. Por eso las ciudades que lo controlaban, como Hazor, Meguido y Gezer, fueron fortificadas por Salomón (1 R 9:15).',
        'Dios no llevó a Israel por este camino cuando salió de Egipto, aunque era el más corto: «para que no se arrepienta el pueblo cuando vea la guerra, y se vuelva a Egipto» (Éx 13:17). Las fortalezas egipcias y las ciudades filisteas lo vigilaban.',
        { h: 'El camino real' },
        'El segundo corría por la meseta de Transjordania: desde el golfo de Áqaba, por Edom, Moab, Hesbón y Rabá de Amón, hasta Damasco. La Biblia lo llama «el camino real». Moisés pidió permiso al rey de Edom para pasar por él: «por el camino real iremos, sin apartarnos a diestra ni a siniestra, hasta que hayamos pasado tu territorio» (Nm 20:17). Edom se negó, y lo mismo hizo después Sehón, rey de Hesbón, a quien Israel venció (Nm 21:21-24). Por este camino subían las caravanas de incienso y especias de Arabia.',
        { h: 'Comerciantes y ejércitos' },
        'Por estos caminos pasaban las caravanas de camellos con especias, metales, tejidos y esclavos. A José lo vendieron sus hermanos a una de ellas: «una compañía de ismaelitas que venía de Galaad, y sus camellos traían aromas, bálsamo y mirra, e iban a llevarlo a Egipto» (Gn 37:25). Por ellos pasaban también los ejércitos de los faraones y de los reyes de Asiria y Babilonia.',
        'Controlar estos caminos daba riqueza y poder, y en tiempos de Salomón, Israel cobraba a los mercaderes que pasaban (1 R 10:15). Pero también hacía de la tierra un lugar disputado: quien quería dominar el mundo antiguo necesitaba pasar por aquí.'
      ],
      pensar: 'Dios no llevó a Israel por el camino más corto, sino por el que podía soportar (Éx 13:17-18). ¿Hay algún «rodeo» en tu vida que hoy puedas ver como cuidado de Dios?'
    },
    {
      id: 'interiores', n: 'Los caminos interiores', ref: 'Génesis 12:6-9; Lucas 2:41-45; 9:51-53; 10:30-35; Juan 4:3-4; Lucas 24:13',
      visual: [
        pasos([
          { t: 'El camino de la cresta une Beerseba, Hebrón, Belén, Jerusalén, Betel, Silo y Siquem.', estado: { view: [[31.1, 34.5], [32.75, 35.75]], lugares: ['beerseba', 'hebron', 'belen', 'jerusalen', 'betel', 'silo', 'siquem', 'jezreel'], trazos: ['c-cresta'] } },
          { t: 'De Galilea a Jerusalén: por Samaria (unos tres días) o por el valle del Jordán.', estado: { view: [[31.6, 34.9], [32.85, 35.8]], lugares: ['nazaret', 'jezreel', 'siquem', 'betel', 'jerusalen', 'bet-sean', 'jerico'], trazos: ['c-samaria', 'c-jordan'] } },
          { t: 'La subida de Jericó a Jerusalén: 22 km y más de 1.000 m de desnivel.', estado: { view: [[31.68, 35.12], [31.95, 35.52]], lugares: ['jerusalen', 'betania', 'jerico'], trazos: ['c-jerico'] } },
          { t: 'El camino a Emaús, a unos sesenta estadios de Jerusalén.', estado: { view: [[31.7, 35.05], [31.9, 35.3]], lugares: ['jerusalen', 'emaus'], trazos: ['c-emaus'] } }
        ])
      ],
      texto: [
        'Además de los grandes caminos internacionales, la tierra tenía una red de caminos interiores que unían las aldeas y las ciudades. Por ellos caminaban los patriarcas con sus rebaños, los peregrinos que subían a las fiestas, los profetas y, más tarde, Jesús y sus discípulos.',
        { h: 'El camino de la cresta' },
        'El más importante corría de norte a sur por lo alto de la serranía central, siguiendo la línea de las cumbres para evitar los valles profundos. Unía Beerseba, Hebrón, Belén, Jerusalén, Betel, Silo y Siquem. Es el camino de los patriarcas: Abraham llegó a Siquem, siguió a Betel y continuó hacia el Neguev (Gn 12:6-9). Casi todas las ciudades de la historia de Israel en los montes están junto a este camino.',
        { h: 'De Galilea a Jerusalén' },
        'Los judíos de Galilea subían a Jerusalén tres veces al año para las fiestas. Tenían dos caminos. El más directo pasaba por Samaria y tomaba unos tres días. Muchos preferían bajar al valle del Jordán, seguir hacia el sur hasta Jericó y subir desde allí a Jerusalén, para no pasar por tierra samaritana. Lucas cuenta que en una ocasión los samaritanos no quisieron recibir a Jesús «porque su aspecto era como de ir a Jerusalén» (Lc 9:53). Sin embargo, Juan dice que a Jesús «le era necesario pasar por Samaria» (Jn 4:4).',
        'Los peregrinos viajaban en grupos grandes de familias y vecinos, cantando los salmos de las subidas. Por eso María y José pudieron caminar un día entero sin darse cuenta de que Jesús, con doce años, se había quedado en Jerusalén: «pensando que estaba entre la compañía, anduvieron camino de un día» (Lc 2:44).',
        { h: 'La subida de Jericó' },
        'De Jericó a Jerusalén hay solo 22 kilómetros en línea recta, pero el camino sube más de 1.000 metros por el desierto de Judea, entre barrancos donde se escondían ladrones. Es el escenario de la parábola del buen samaritano (Lc 10:30-35). Por ese camino subió Jesús en su último viaje a Jerusalén, pasando por Jericó, donde sanó a Bartimeo y entró en casa de Zaqueo (Lc 18:35–19:10).',
        { h: 'El camino a Emaús' },
        'El domingo de la resurrección, dos discípulos caminaban hacia Emaús, «que estaba a sesenta estadios de Jerusalén» (Lc 24:13), unos 11 kilómetros. Jesús caminó con ellos y les explicó las Escrituras, y lo reconocieron al partir el pan. Esa misma noche volvieron a Jerusalén.',
        ir('Ver el recorrido de Jesús en la armonía de los evangelios', '../../evangelios/')
      ],
      pensar: 'Los discípulos de Emaús caminaban tristes sin saber que Jesús iba con ellos (Lc 24:15-16). ¿En qué camino de tu vida necesitas reconocer que el Señor camina a tu lado?'
    },
    {
      id: 'pasos', n: 'Pasos que decidieron batallas', ref: 'Josué 10:6-14; 1 Samuel 17:1-3; 2 Reyes 23:29-30; Apocalipsis 16:16',
      visual: [
        pasos([
          { t: 'La subida de Bet-horón: Josué persigue a los amorreos desde Gabaón hacia el valle de Ajalón.', estado: { view: [[31.75, 34.88], [31.95, 35.28]], lugares: ['gabaon', 'bet-horon', 'ajalon', 'gezer'], trazos: ['c-bethoron'] } },
          { t: 'El valle de Ela: el camino de los filisteos desde Gat hacia Belén.', estado: { view: [[31.6, 34.78], [31.78, 35.25]], lugares: ['gat', 'azeca', 'soco', 'valle-ela', 'belen'], trazos: ['c-ela'] } },
          { t: 'El paso de Aruna, junto a Meguido: la puerta entre la costa y el valle de Jezreel.', estado: { view: [[32.3, 34.8], [32.7, 35.4]], lugares: ['meguido', 'aruna', 'jezreel'], trazos: ['c-aruna'] } }
        ]),
        tabla({
          titulo: 'Batallas en los pasos de la tierra',
          cab: ['Paso', 'Batalla', 'Referencia'],
          filas: [
            ['Bet-horón', 'Josué vence a los cinco reyes amorreos', 'Jos 10:10-14'],
            ['Bet-horón', 'Los filisteos atacan a Saúl por este camino', '1 S 13:17-18'],
            ['Valle de Ela', 'David vence a Goliat', '1 S 17'],
            ['Valle de Sorec', 'Los filisteos y Sansón', 'Jue 16'],
            ['Meguido', 'Débora y Barac junto a «las aguas de Meguido»', 'Jue 5:19'],
            ['Meguido', 'Muere el rey Josías frente al faraón Necao', '2 R 23:29-30'],
            ['Meguido', 'Armagedón, la batalla final', 'Ap 16:16']
          ],
          nota: 'Fuera de la Biblia, el faraón Tutmosis III venció en Meguido a una coalición cananea hacia 1457 a.C., y el general británico Allenby, que venció allí a los otomanos en 1918, recibió después el título de vizconde de Meguido.'
        })
      ],
      texto: [
        'En una tierra de montes, quien controla los pasos controla el país. Los ejércitos que venían de la costa no podían subir a los montes por cualquier lado: tenían que usar los pocos valles y subidas por donde pasaban los carros y los bagajes. Por eso las mismas batallas se repiten una y otra vez en los mismos lugares.',
        { h: 'La subida de Bet-horón' },
        'Al noroeste de Jerusalén, un camino sube desde el valle de Ajalón por una cresta estrecha, pasando por dos aldeas llamadas Bet-horón de abajo y Bet-horón de arriba. Es el acceso más directo desde la costa hacia Gabaón y Jerusalén. Por aquí persiguió Josué a los cinco reyes amorreos que habían atacado Gabaón. Mientras huían por la bajada de Bet-horón, Dios hizo caer granizo sobre ellos, y Josué pidió: «Sol, detente en Gabaón; y tú, luna, en el valle de Ajalón» (Jos 10:12). Siglos después, por el mismo camino, subieron los filisteos contra Saúl (1 S 13:17-18).',
        { h: 'El valle de Ela' },
        'Más al sur, el valle de Ela sube desde la tierra de los filisteos, cerca de Gat, hacia los montes de Belén. Los filisteos acamparon allí para abrirse camino hacia el corazón de Judá. David, un joven pastor de Belén, defendió ese paso con una honda y cinco piedras, con la convicción de que «de Jehová es la batalla» (1 S 17:47).',
        { h: 'El paso de Meguido' },
        'En el norte, el camino del mar debía cruzar la cadena del Carmelo para pasar de la llanura de Sarón al valle de Jezreel. El paso más usado salía junto a la ciudad de Meguido, que lo custodiaba. Por eso Meguido fue una de las ciudades más fortificadas de la región y escenario de muchas batallas. Allí murió el rey Josías, que quiso detener al faraón Necao cuando subía a ayudar a los asirios (2 R 23:29-30), y su muerte fue llorada por todo Judá (2 Cr 35:24-25).',
        'El libro de Apocalipsis toma este nombre para el lugar donde se reunirán los ejércitos al final: «Armagedón», el monte de Meguido (Ap 16:16). El paso de tantas batallas humanas será el escenario de la última, que no ganarán los ejércitos sino el Rey de reyes (Ap 19:11-16).',
        { ejercicio: {
          pregunta: '¿Por qué tantas batallas ocurrieron en Bet-horón, el valle de Ela y Meguido?',
          opciones: [
            { t: 'Porque eran lugares sagrados para los cananeos.', ok: false, por_que: 'La razón no es religiosa sino geográfica: eran los pasos por donde se podía cruzar.' },
            { t: 'Porque eran pasos obligados entre la costa y los montes.', ok: true, por_que: 'Los ejércitos con carros solo podían subir por ciertos valles; quien los controlaba defendía o abría el país.' },
            { t: 'Porque tenían las fuentes de agua más grandes de la tierra.', ok: false, por_que: 'Había agua, pero no es lo que los hacía decisivos. Lo importante era que unían la costa con el interior.' }
          ],
          explicacion: 'La geografía explica la historia: en una tierra de montes, los valles que suben desde la costa son las puertas del país. Por eso se luchó tantas veces en los mismos lugares.'
        } }
      ],
      pensar: 'David venció en el valle de Ela porque sabía que «de Jehová es la batalla» (1 S 17:47). ¿Qué batalla estás enfrentando hoy con tus propias fuerzas en lugar de confiar en el Señor?'
    },
    {
      id: 'ciudades', n: 'Ciudades, tells y puertas', ref: 'Rut 4:1-11; Deuteronomio 21:19; Proverbios 31:23; Josué 8:28; Mateo 16:18',
      visual: [
        esq('esquema-tell.svg', 'Corte de un tell: una colina artificial formada por capas de ciudades construidas una sobre otra, con la roca natural abajo, una ciudad cananea, una ciudad israelita con su muralla y su puerta, una capa de ceniza por una destrucción, una ciudad persa y una ciudad romana arriba', 'Un tell: siglos de ciudades, una encima de otra.', 'Tell'),
        img('puerta.webp', 'Ancianos de una ciudad israelita, anónimos, sentados en los bancos de piedra junto a la puerta de la ciudad, escuchando un caso; una puerta de cuatro cámaras con muros gruesos y gente que entra con burros cargados', 'En la puerta de la ciudad se reunían los ancianos y se hacía justicia.')
      ],
      texto: [
        'Las ciudades de la tierra de Israel eran pequeñas para nuestros ojos. Muchas tenían apenas unas hectáreas y unos cientos o pocos miles de habitantes. Se construían en una colina, cerca de una fuente y de un camino, y se rodeaban de una muralla. Afuera estaban los campos, las viñas y las aldeas dependientes.',
        { h: 'El tell' },
        'Cuando una ciudad era destruida por la guerra, un terremoto o un incendio, no se buscaba otro lugar: se reconstruía encima de las ruinas, que se nivelaban. Con los siglos, las capas de una ciudad sobre otra formaban una colina artificial de lados empinados y cima plana. En árabe se llama «tell», y en hebreo «tel». La Biblia usa la palabra: Josué quemó Hai «y la redujo a un montón de escombros» (Jos 8:28), en hebreo un «tel». Hoy muchas ciudades israelíes llevan ese nombre, como Tel Aviv.',
        'Los arqueólogos excavan los tells capa por capa. Cada estrato es una época, con sus casas, su cerámica y a veces una capa de ceniza que marca una destrucción. En tells como Meguido, Hazor o Laquis se han encontrado más de veinte niveles de ocupación, desde mucho antes de Abraham hasta la época romana.',
        { h: 'La puerta de la ciudad' },
        'La parte más importante de una ciudad era su puerta. No era una simple abertura en la muralla, sino un edificio con varias cámaras a cada lado y bancos de piedra. Allí se reunían los ancianos, se hacían los negocios, se resolvían los juicios y se proclamaban las noticias. Booz «subió a la puerta y se sentó allí» para arreglar ante diez ancianos el derecho de redimir la heredad de Elimelec y casarse con Rut (Rt 4:1-11). La mujer virtuosa de Proverbios tiene un marido «conocido en las puertas, cuando se sienta con los ancianos de la tierra» (Pr 31:23).',
        'Por eso «la puerta» llegó a significar el poder de una ciudad. Dios promete a Abraham que su descendencia «poseerá las puertas de sus enemigos» (Gn 22:17), y Jesús dice de su iglesia que «las puertas del Hades no prevalecerán contra ella» (Mt 16:18). En la nueva Jerusalén, las doce puertas nunca se cerrarán (Ap 21:25).',
        { h: 'Los lugares altos' },
        'Junto a muchas ciudades había un «lugar alto», un santuario en una colina con un altar y piedras sagradas. Israel los heredó de los cananeos y los usó para adorar a otros dioses. Reyes fieles como Ezequías y Josías los quitaron, porque Dios había mandado adorarle en el lugar que Él escogiera (Dt 12:2-5; 2 R 18:4).'
      ],
      pensar: 'En la puerta se hacía justicia a la viuda y al extranjero (Am 5:15). ¿Cómo puedes ser tú alguien que defiende al débil en los lugares donde se toman decisiones?'
    },
    {
      id: 'refugio', n: 'Ciudades de refugio y ciudades levitas', ref: 'Números 35:1-34; Deuteronomio 19:1-13; Josué 20–21; Hebreos 6:18',
      visual: [
        mapa({ view: V.tierra, capas: ['t-tierra', 't-trans'], lugares: ['cedes', 'siquem', 'hebron', 'beser', 'ramot-galaad', 'golan-ciudad'] }),
        tabla({
          titulo: 'Las seis ciudades de refugio (Josué 20:7-8)',
          cab: ['Ciudad', 'Región', 'Lado del Jordán', 'Sentido que suele darse al nombre'],
          filas: [
            ['Cedes', 'Galilea, Neftalí', 'Oeste', 'Santuario, lugar santo'],
            ['Siquem', 'Monte de Efraín', 'Oeste', 'Hombro'],
            ['Hebrón (Quiriat-arba)', 'Montes de Judá', 'Oeste', 'Comunión, unión'],
            ['Beser', 'Desierto de la llanura, Rubén', 'Este', 'Fortaleza'],
            ['Ramot de Galaad', 'Galaad, Gad', 'Este', 'Alturas'],
            ['Golán', 'Basán, Manasés', 'Este', 'Incierto (tal vez «circuito»)']
          ],
          nota: 'El significado de los nombres es tradicional y en algunos casos discutido; sirve como ilustración, no como base de doctrina.'
        })
      ],
      texto: [
        'Antes de entrar en la tierra, Dios mandó apartar seis ciudades de refugio, tres a cada lado del Jordán, repartidas de norte a sur (Nm 35:9-15). En la ley antigua, cuando alguien moría a manos de otro, un pariente cercano, el «vengador de la sangre», tenía la responsabilidad de hacer justicia. Pero si la muerte había sido accidental, el que la causó podía huir a una ciudad de refugio y estar seguro allí hasta que fuera juzgado ante la congregación (Nm 35:24-25). Las ciudades no protegían al asesino culpable (Dt 19:11-13), sino al que había matado sin intención.',
        { h: 'Al alcance de todos' },
        'La ubicación de estas ciudades muestra el cuidado de Dios. Están repartidas de modo que ninguna parte de la tierra quedara demasiado lejos de una de ellas: al oeste del Jordán, Cedes en Galilea, Siquem en el centro y Hebrón en el sur; al este, Golán en Basán, Ramot en Galaad y Beser en la meseta de Moab (Jos 20:7-8). Además, Dios mandó cuidar el acceso: «Arreglarás los caminos, y dividirás en tres partes la tierra que Jehová tu Dios te dará en heredad, y será para que todo homicida huya allí» (Dt 19:3). La tradición judía cuenta que los caminos hacia estas ciudades tenían señales que decían «refugio».',
        'El refugiado debía quedarse en la ciudad hasta la muerte del sumo sacerdote. Entonces podía volver a su casa libre (Nm 35:25-28). La muerte del sumo sacerdote marcaba el fin de su condena.',
        { h: 'Las ciudades levitas' },
        'Las ciudades de refugio formaban parte de las cuarenta y ocho ciudades que las demás tribus dieron a los levitas, la tribu de los sacerdotes, que no recibió un territorio propio (Jos 21:41). Así, los levitas quedaron repartidos por toda la tierra para enseñar la ley al pueblo (Dt 33:10).',
        { h: 'Cristo, nuestro refugio' },
        'La carta a los Hebreos usa esta imagen para hablar de la seguridad del creyente en Cristo: «tengamos un fortísimo consuelo los que hemos acudido para asirnos de la esperanza puesta delante de nosotros» (He 6:18). La palabra «acudido» describe a alguien que corre a refugiarse. A diferencia del refugiado de la ley, que esperaba la muerte del sumo sacerdote, el creyente tiene un Sumo Sacerdote que murió por él y vive para siempre para interceder (He 7:24-25).',
        ir('Estudiar El sacerdocio en Israel', '../../sacerdocio/')
      ],
      pensar: 'Dios quiso que el refugio estuviera cerca y que el camino estuviera despejado. ¿Cómo puedes ayudar a que otros encuentren el camino hacia Cristo, su refugio?'
    },
    {
      id: 'distancias', n: 'Distancias y viajes a pie', ref: 'Lucas 2:41-45; 24:13; Juan 11:18; Hechos 1:12; 23:23-33',
      visual: [
        tabla({
          titulo: 'Algunas distancias de la Biblia',
          cab: ['De… a…', 'Línea recta', 'A pie, aprox.', 'Pasaje'],
          filas: [
            ['Dan – Beerseba', '236 km', '8 a 10 días', 'Jue 20:1'],
            ['Nazaret – Jerusalén', '103 km', '3 a 4 días', 'Lc 2:4, 41-44'],
            ['Capernaum – Nazaret', '40 km', '1 día y medio', 'Mt 4:13'],
            ['Jerusalén – Siquem (Sicar)', '49 km', '2 días', 'Jn 4:3-5'],
            ['Jerusalén – Jope', '55 km', '2 días', 'Hch 9:36–10:23'],
            ['Jerusalén – Cesarea', '87 km', '2 a 3 días', 'Hch 23:23-33'],
            ['Jerusalén – Gaza', '79 km', '3 días', 'Hch 8:26'],
            ['Jerusalén – Hebrón', '30 km', '1 día', '2 S 2:1-4'],
            ['Jerusalén – Jericó', '22 km', '1 día de subida', 'Lc 10:30'],
            ['Jerusalén – Emaús', '11 km (60 estadios)', '3 horas', 'Lc 24:13'],
            ['Jerusalén – Belén', '9 km', '2 horas', 'Lc 2:15'],
            ['Jerusalén – Betania', '3 km (15 estadios)', '45 minutos', 'Jn 11:18'],
            ['Camino de un día de reposo', 'unos 890 m (2.000 codos)', 'Algo más de 10 minutos', 'Hch 1:12']
          ],
          nota: 'Distancias en línea recta calculadas con las coordenadas del recurso. Los caminos de montaña son más largos; se calcula una jornada de 25 a 35 km.'
        }),
        img('peregrinos.webp', 'Un grupo grande de peregrinos judíos del siglo I, familias anónimas con niños, ancianos y burros cargados, camina por un camino de piedra entre colinas hacia Jerusalén, que se ve a lo lejos sobre un monte', 'Peregrinos que suben a Jerusalén para la fiesta.')
      ],
      texto: [
        'En tiempos bíblicos casi todos viajaban a pie. Los ricos podían ir en burro o en mula, y los oficiales en carro o a caballo, pero la mayoría caminaba. Un caminante podía hacer entre 25 y 35 kilómetros al día por terreno plano, menos en los montes. Por eso la Biblia mide muchas veces las distancias en días de camino: Labán persiguió a Jacob «camino de siete días» (Gn 31:23), y María y José anduvieron «camino de un día» antes de notar que Jesús no estaba con ellos (Lc 2:44).',
        { h: 'Las distancias de los evangelios' },
        'La tabla muestra algunas distancias en línea recta, calculadas con los mapas de este recurso, y el tiempo aproximado a pie. Al leerlas, muchos pasajes se vuelven más concretos. De Nazaret a Jerusalén hay unos 103 kilómetros en línea recta, pero el camino real era más largo: María, embarazada, hizo ese viaje hacia Belén en varios días. Betania, donde vivían Lázaro y sus hermanas, estaba «como a quince estadios» de Jerusalén (Jn 11:18), menos de una hora a pie: por eso Jesús podía alojarse allí durante la semana de la pasión y subir cada día al templo.',
        'Los discípulos de Emaús caminaron unos 11 kilómetros de ida y, esa misma noche, volvieron a Jerusalén para contar que habían visto al Señor (Lc 24:13, 33). Cuando Pablo fue llevado preso a Cesarea, los soldados lo sacaron de noche y lo llevaron hasta Antípatris, a unos 60 kilómetros por el camino, y al día siguiente siguieron hasta Cesarea (Hch 23:31-33).',
        { h: 'El camino de un día de reposo' },
        'Hechos dice que el monte de los Olivos estaba cerca de Jerusalén, «camino de un día de reposo» (Hch 1:12). Era la distancia que la tradición judía permitía caminar en sábado, 2.000 codos, unos 890 metros según los valores de este sitio. No es una ley de Moisés sino una interpretación de los maestros, basada en la distancia entre el arca y el pueblo en Josué 3:4.',
        { h: 'Haz tus propias cuentas' },
        'La calculadora del recurso Pesos, medidas, monedas y horas bíblicas convierte estadios, millas y codos a kilómetros y metros. Puedes usarla junto con esta tabla para entender cualquier distancia que aparezca en tu lectura.',
        ir('Abrir la calculadora de medidas bíblicas', '../../medidas-biblicas/'),
        { ejercicio: {
          pregunta: 'Según Juan 11:18, Betania estaba a unos quince estadios de Jerusalén. ¿Cuánto es eso aproximadamente?',
          opciones: [
            { t: 'Unos 3 kilómetros, menos de una hora a pie.', ok: true, por_que: 'Un estadio mide unos 185 m: quince estadios son casi 2,8 km.' },
            { t: 'Unos 15 kilómetros, medio día de camino.', ok: false, por_que: 'Un estadio no es un kilómetro, sino unos 185 metros.' },
            { t: 'Unos 300 metros, una caminata de cinco minutos.', ok: false, por_que: 'Eso sería un estadio y medio. Quince estadios son casi diez veces más.' }
          ],
          explicacion: 'Con el estadio de 185 m que usa el sitio, 15 estadios son unos 2,8 km. Por eso Jesús podía pasar la noche en Betania y subir cada día al templo durante su última semana.'
        } }
      ],
      pensar: 'Los discípulos de Emaús caminaron de noche 11 kilómetros de vuelta para contar que Jesús vivía. ¿Qué distancia estás dispuesto a recorrer para compartir esa noticia?'
    }
  ];
  // ================== RUTA V. La tierra después de la Biblia ==================
  // Hechos fechados; donde hay disputa se presentan las dos perspectivas, sin opinión política.
  // La estación 6 describe la situación al 21 de octubre de 2026 y se revisa periódicamente (DIRECTRICES, Pendientes).
  const despues = [
    {
      id: 'destruccion', n: 'Destrucción y dispersión', ref: 'Lucas 19:41-44; 21:20-24; Mateo 24:1-2', fecha: [66, 135],
      visual: [
        pasos([
          { t: 'La gran rebelión (66–73): Roma destruye Jerusalén y el templo en el año 70.', fecha: 70, estado: { view: V.tierra, capas: ['h-iudaea'], lugares: ['jerusalen', 'masada', 'cesarea', 'maqueronte', 'pela'] } },
          { t: 'La rebelión de Bar Kojba (132–135) termina con la caída de Betar.', fecha: 135, estado: { view: V.juda, capas: ['h-iudaea'], lugares: ['jerusalen', 'betar', 'belen', 'hebron'] } },
          { t: 'Jerusalén pasa a ser Aelia Capitolina, en la provincia de Siria Palestina.', fecha: 136, estado: { view: V.tierra, capas: ['h-palaestina'], lugares: ['aelia', 'cesarea', 'tiberias'] } }
        ]),
        img('masada.webp', 'El campamento de una legión romana al pie de una gran meseta rocosa en el desierto junto al mar Muerto, con una rampa de tierra que sube hasta la fortaleza en lo alto; soldados romanos anónimos y tiendas de cuero', 'El asedio romano de Masada (73 o 74 d.C.).'),
        foto('arco-tito.jpg', 'Relieve del Arco de Tito en Roma: soldados romanos llevan en procesión el candelabro de siete brazos y otros objetos del templo de Jerusalén', 'El botín del templo en el Arco de Tito, Roma (hacia el año 81).', 'Jebulon, CC0 (dominio público), Wikimedia Commons')
      ],
      texto: [
        'Pocos días antes de morir, al ver Jerusalén desde el monte de los Olivos, Jesús lloró sobre ella y anunció: «vendrán días sobre ti, cuando tus enemigos te rodearán con vallado, y te sitiarán, y por todas partes te estrecharán, y te derribarán a tierra, y a tus hijos dentro de ti, y no dejarán en ti piedra sobre piedra» (Lc 19:43-44). Unos cuarenta años después, esas palabras se cumplieron.',
        { h: 'El año 70' },
        'En el año 66, los judíos de Judea se rebelaron contra Roma. El general Vespasiano recuperó Galilea, y cuando fue proclamado emperador, su hijo Tito sitió Jerusalén. Tras meses de hambre y luchas internas, la ciudad cayó en el verano del año 70. El templo de Herodes fue incendiado y destruido, y la ciudad arrasada. El historiador judío Josefo, testigo de la guerra, describe miles de muertos y miles de cautivos vendidos como esclavos. En Roma, el Arco de Tito todavía muestra a los soldados llevando el candelabro del templo como botín. El último foco de resistencia, la fortaleza de Masada junto al mar Muerto, cayó en el 73 o 74.',
        'Según el historiador cristiano Eusebio, los creyentes de Jerusalén recordaron la advertencia de Jesús —«cuando viereis a Jerusalén rodeada de ejércitos… los que estén en Judea, huyan a los montes» (Lc 21:20-21)— y se refugiaron en Pela, al otro lado del Jordán.',
        { h: 'Bar Kojba y Aelia Capitolina' },
        'Sesenta años después hubo una segunda rebelión. Entre 132 y 135, un líder llamado Simón Bar Kosiba, a quien muchos llamaron Bar Kojba, «hijo de la estrella», y a quien el rabino Akiva reconoció como mesías, se levantó contra el emperador Adriano. La guerra terminó con la caída de la fortaleza de Betar, al suroeste de Jerusalén. Roma reconstruyó Jerusalén como una ciudad pagana llamada Aelia Capitolina, con templos a sus dioses, y prohibió a los judíos entrar en ella. La provincia de Judea pasó a llamarse Siria Palestina.',
        { h: 'Hollada por los gentiles' },
        'Para el pueblo judío comenzó un largo período de dispersión por el mundo, aunque nunca dejó de haber comunidades judías en la tierra, sobre todo en Galilea, donde los rabinos compilaron la Mishná y el Talmud de Jerusalén. Jesús había dicho: «Jerusalén será hollada por los gentiles, hasta que los tiempos de los gentiles se cumplan» (Lc 21:24). Esas últimas palabras, «hasta que», dejan abierta una esperanza que la ruta VI estudia.',
        ir('Recorrer el templo de Herodes en 3D', '../../templo-herodes/'),
        ir('Estudiar el imperio romano', '../../imperio-romano/')
      ],
      pensar: 'Jesús lloró por la ciudad que lo rechazaba (Lc 19:41). ¿Qué te enseña su llanto sobre la manera de mirar a quienes no han reconocido «el tiempo de su visitación»?'
    },
    {
      id: 'bizantina', n: 'Tierra Santa cristiana', ref: 'Hebreos 13:14; Juan 4:21-24', fecha: [324, 638],
      visual: [
        mapa({ view: V.tierra, capas: ['h-bizancio'], lugares: ['jerusalen', 'belen', 'madaba', 'cesarea', 'tiberias', 'monte-nebo'] }),
        img('basilica.webp', 'Peregrinos cristianos anónimos del siglo V, con mantos y bastones de viaje, entran en una gran basílica bizantina de piedra con columnas y mosaicos dorados, iluminada por lámparas de aceite', 'Peregrinos en una basílica de Tierra Santa (siglo V).'),
        foto('mapa-madaba.jpg', 'Detalle del mosaico del mapa de Madaba: Jerusalén vista desde arriba, con sus murallas, sus puertas, una gran calle con columnas y la iglesia del Santo Sepulcro', 'Jerusalén en el mapa de Madaba, mosaico del siglo VI (Madaba, Jordania).', 'Carole Raddato, CC BY-SA 2.0, Wikimedia Commons')
      ],
      texto: [
        'En el año 324, Constantino quedó como único emperador de Roma. Había favorecido a los cristianos desde 313, y su conversión cambió también la historia de la tierra. Por primera vez, la tierra donde vivió Jesús quedó bajo un gobierno cristiano, y empezó a llamarse comúnmente Tierra Santa.',
        { h: 'Iglesias en los lugares de la historia bíblica' },
        'Hacia el año 326, Elena, la madre de Constantino, visitó la tierra. El emperador mandó construir grandes basílicas en los lugares que la tradición de los cristianos de Jerusalén señalaba: la iglesia del Santo Sepulcro, sobre el lugar de la crucifixión y la tumba de Jesús, consagrada en 335; la iglesia de la Natividad en Belén, sobre la cueva del nacimiento; y la del monte de los Olivos. Para construir el Santo Sepulcro se derribó un templo pagano que Adriano había levantado allí. Muchos estudiosos piensan que esta ubicación, entonces fuera de las murallas del siglo I, es muy probablemente la verdadera.',
        { h: 'Peregrinos, monjes y traductores' },
        'Desde entonces llegaron peregrinos de todo el imperio. Un viajero de Burdeos dejó en 333 un itinerario, y una mujer llamada Egeria escribió hacia el año 383 un diario que describe cómo se celebraban la Semana Santa y las fiestas en Jerusalén. En Belén se estableció Jerónimo, que vivió allí desde 386 hasta su muerte en 420 y tradujo la Biblia al latín desde el hebreo y el griego, la versión llamada Vulgata. En el desierto de Judea se fundaron monasterios en los barrancos, como el de Mar Saba, fundado en 483 y habitado hasta hoy.',
        'En el siglo VI se hizo en Madaba, en Moab, un mosaico con el mapa de Tierra Santa, con Jerusalén en el centro. Es el mapa más antiguo de la región que se conserva, y muestra la ciudad con su gran calle de columnas y la iglesia del Santo Sepulcro.',
        { h: 'Un tiempo de luz y de sombra' },
        'En este período, la mayoría de la población de la tierra llegó a ser cristiana. Pero los judíos, que siguieron viviendo sobre todo en Galilea, sufrieron leyes cada vez más duras, y en 614 muchos apoyaron a los persas, que invadieron la tierra, saquearon Jerusalén y quemaron iglesias. El emperador Heraclio recuperó la región en 629, pero pocos años después llegó otro poder del desierto.',
        'Jesús había enseñado que llegaría la hora en que los verdaderos adoradores no dependerían de un monte ni de un lugar, sino que adorarían «en espíritu y en verdad» (Jn 4:23). Los lugares santos ayudan a recordar la historia, pero la fe cristiana no está atada a ellos: «no tenemos aquí ciudad permanente, sino que buscamos la por venir» (He 13:14).',
        ir('Conocer a Jerónimo en De la Biblia a nosotros', '../../de-la-biblia-a-nosotros/')
      ],
      pensar: 'Los peregrinos querían caminar donde caminó Jesús. ¿Qué significa para ti seguir sus pasos hoy, dondequiera que vivas (1 P 2:21)?'
    },
    {
      id: 'islam-cruzadas', n: 'Bajo el islam y las cruzadas', ref: 'Mateo 26:52; Juan 18:36; Romanos 12:17-21', fecha: [636, 1516],
      visual: [
        pasos([
          { t: 'Desde 636–638, la tierra forma parte del califato, dividida en Yund Filastín y Yund al-Urdun.', fecha: 638, estado: { view: V.tierra, capas: ['h-califato'], lugares: ['jerusalen', 'ramla', 'tiberias', 'cesarea'] } },
          { t: 'Desde 1099, los cruzados fundan el reino latino de Jerusalén.', fecha: 1099, estado: { view: [[29.3, 33.8], [34.2, 36.6]], capas: ['h-cruzados'], lugares: ['jerusalen', 'acre', 'hattin', 'kerak', 'beirut'] } },
          { t: 'Desde 1260, los mamelucos de Egipto gobiernan la tierra; en 1291 cae Acre, el último bastión cruzado.', fecha: 1291, estado: { view: V.tierra, capas: ['h-mamelucos'], lugares: ['jerusalen', 'acre', 'ain-jalut', 'safed'] } }
        ]),
        tabla({
          titulo: 'Fechas de este período',
          cab: ['Año', 'Hecho'],
          filas: [
            ['636', 'Batalla del Yarmuc: los ejércitos árabes vencen a Bizancio'],
            ['638', 'Jerusalén se rinde al califa Omar'],
            ['691–692', 'Se termina la Cúpula de la Roca en el monte del templo'],
            ['1009', 'El califa al-Hakim manda destruir la iglesia del Santo Sepulcro'],
            ['1099', 'Los cruzados toman Jerusalén (15 de julio)'],
            ['1187', 'Saladino vence en los Cuernos de Hattín y recupera Jerusalén'],
            ['1260', 'Los mamelucos vencen a los mongoles en Ain Jalut'],
            ['1291', 'Cae Acre, fin de los reinos cruzados en la tierra'],
            ['1516–1517', 'Los otomanos conquistan la región']
          ]
        })
      ],
      texto: [
        'En la primera mitad del siglo VII nació el islam en Arabia. Pocos años después de la muerte de Mahoma, los ejércitos árabes avanzaron sobre el imperio bizantino. En 636 lo vencieron en el río Yarmuc, al este del mar de Galilea, y hacia 638 Jerusalén se rindió al califa Omar, que permitió a los cristianos conservar sus iglesias a cambio de un impuesto. La tierra se organizó en dos distritos, Yund Filastín, con capital en Ramla, y Yund al-Urdun, con capital en Tiberias.',
        { h: 'La Cúpula de la Roca' },
        'En el monte del templo, abandonado desde el año 70, el califa Abd al-Malik terminó en 691 o 692 la Cúpula de la Roca, sobre la roca que la tradición judía identifica con el monte Moriah. Poco después se construyó la mezquita de al-Aqsa en el extremo sur de la explanada. La tradición islámica relaciona este lugar con el viaje nocturno de Mahoma. Desde entonces, el monte del templo es también un lugar santo del islam, y lo sigue siendo hoy.',
        'Durante los siglos siguientes, el árabe se volvió la lengua de la región y una parte creciente de la población se hizo musulmana, aunque siguieron existiendo comunidades cristianas, judías y samaritanas.',
        { h: 'Las cruzadas' },
        'En 1009, el califa al-Hakim mandó destruir la iglesia del Santo Sepulcro, y más tarde los turcos selyúcidas dificultaron las peregrinaciones. En 1095, el papa Urbano II llamó a una guerra para recuperar Jerusalén. Los cruzados la tomaron el 15 de julio de 1099 y mataron a gran parte de sus habitantes musulmanes y judíos. Fundaron el reino latino de Jerusalén, que duró casi un siglo. En 1187, Saladino los venció en los Cuernos de Hattín, cerca del mar de Galilea, y recuperó Jerusalén. Los cruzados se mantuvieron en la costa, con capital en Acre, hasta que cayó en 1291.',
        'Las cruzadas son una herida en la historia del cristianismo. Se hicieron en nombre de la cruz, pero Jesús había dicho: «Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían» (Jn 18:36), y a Pedro le ordenó: «Vuelve tu espada a su lugar» (Mt 26:52). El evangelio se extiende por el testimonio y el amor, no por la espada.',
        { h: 'Los mamelucos' },
        'En 1260, los mamelucos, soldados que gobernaban Egipto, vencieron a los mongoles en Ain Jalut, junto a la fuente de Harod, en el valle de Jezreel, el mismo lugar donde Gedeón reunió a su ejército (Jue 7:1). Gobernaron la tierra hasta 1516. En ese tiempo la costa quedó casi despoblada, porque destruyeron los puertos para que los cruzados no volvieran.'
      ],
      pensar: 'Pablo enseñó a vencer el mal con el bien (Ro 12:21). ¿Qué te enseña la historia de las cruzadas sobre el peligro de defender la fe con las armas del mundo?'
    },
    {
      id: 'otomano', n: 'El imperio otomano', ref: 'Isaías 11:11-12; Jeremías 16:14-15; Amós 9:14', fecha: [1517, 1917],
      visual: [
        mapa({ view: [[29.3, 32.5], [37.5, 42.0]], capas: ['h-otomano'], lugares: ['jerusalen', 'damasco', 'safed', 'tiberias', 'hebron', 'acre', 'jope'] }),
        tabla({
          titulo: 'Fechas de este período',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1517', 'El sultán Selim I conquista la región y Egipto'],
            ['1537–1541', 'Solimán el Magnífico reconstruye las murallas de Jerusalén que se ven hoy'],
            ['1867', 'Mark Twain visita la tierra y la describe pobre y casi despoblada'],
            ['1882', 'Primera gran ola de inmigración judía (la primera aliá)'],
            ['1896–1897', 'Theodor Herzl publica «El Estado judío» y reúne el Primer Congreso Sionista en Basilea'],
            ['1909', 'Se funda Tel Aviv junto a Jafa'],
            ['1917', 'Las tropas británicas toman Beerseba (31 de octubre) y Jerusalén (9 a 11 de diciembre)']
          ],
          nota: 'Hacia 1914 vivían en la región unas 700.000 personas: la gran mayoría árabes musulmanes y cristianos, y unos 60.000 a 85.000 judíos (las cifras varían según la fuente).'
        })
      ],
      texto: [
        'En 1516 y 1517, el sultán otomano Selim I conquistó Siria, la tierra de Israel y Egipto. Durante cuatrocientos años, hasta 1917, la región fue una provincia lejana del imperio otomano, gobernada desde Damasco o desde Sidón, y dividida en distritos. Su hijo, Solimán el Magnífico, reconstruyó entre 1537 y 1541 las murallas de Jerusalén, las mismas que rodean hoy la ciudad antigua.',
        { h: 'Una tierra pobre' },
        'En los siglos siguientes, la tierra perdió población y riqueza. Los impuestos eran altos, los caminos inseguros por los asaltos de beduinos y muchas tierras bajas se convirtieron en pantanos. Los viajeros europeos del siglo XIX describían aldeas pobres, campos abandonados y una Jerusalén pequeña, de unos pocos miles de habitantes. El escritor estadounidense Mark Twain, que la visitó en 1867, la describió como una tierra triste y desolada. Muchos lectores de la Biblia vieron en ese abandono el cumplimiento de las advertencias de Levítico 26:32-33.',
        { h: 'Los judíos en la tierra' },
        'Durante todo este tiempo hubo comunidades judías en la tierra, sobre todo en las cuatro ciudades santas del judaísmo: Jerusalén, Hebrón, Safed y Tiberias. En Safed, en el siglo XVI, se reunió un importante grupo de maestros judíos. En el siglo XIX la comunidad judía de Jerusalén llegó a ser la más numerosa de la ciudad, y en 1860 se construyó el primer barrio fuera de las murallas.',
        'A partir de 1882, a causa de las persecuciones en Rusia y Rumania, llegaron grupos de judíos para fundar colonias agrícolas. En 1896, el periodista Theodor Herzl publicó «El Estado judío», y en 1897 reunió en Basilea el primer congreso del movimiento sionista, que buscaba un hogar nacional para el pueblo judío en la tierra de sus padres. En 1909 se fundó Tel Aviv. La población, sin embargo, seguía siendo en su gran mayoría árabe.',
        'En ese mismo siglo, muchos cristianos evangélicos de Gran Bretaña y Estados Unidos, al leer profecías como Isaías 11:11-12 y Amós 9:14-15, comenzaron a hablar del regreso de los judíos a su tierra como algo que Dios había prometido.',
        { h: 'El fin del imperio' },
        'En la Primera Guerra Mundial, el imperio otomano se alió con Alemania. Las tropas británicas avanzaron desde Egipto, tomaron Beerseba el 31 de octubre de 1917 y entraron en Jerusalén en diciembre. El general Allenby entró en la ciudad a pie, por respeto a su carácter sagrado. Terminaban cuatro siglos de gobierno otomano.'
      ],
      pensar: 'Dios prometió que la tierra «gozará sus días de reposo» mientras su pueblo estuviera lejos (Lv 26:34). ¿Qué te enseña la historia de esta tierra sobre la paciencia de Dios con sus promesas?'
    },
    {
      id: 'siglo20', n: 'Del mandato británico a 1948', ref: 'Ezequiel 37:21; Romanos 11:1-2; Efesios 2:14-16; Deuteronomio 10:18-19', fecha: [1917, 1949],
      visual: [
        pasos([
          { t: 'El mandato británico de Palestina (1922–1948); al este, el emirato de Transjordania.', fecha: 1922, estado: { view: V.siglo20, capas: ['h-mandato', 'h-transjordania'], lugares: ['jerusalen', 'tel-aviv', 'amman', 'acre', 'gaza'] } },
          { t: 'El plan de partición de la ONU (29 de noviembre de 1947): un Estado judío, un Estado árabe y Jerusalén bajo régimen internacional.', fecha: 1947, estado: { view: [[29.4, 33.9], [33.4, 35.9]], capas: ['p47-judio', 'p47-arabe', 'p47-corpus'], lugares: ['jerusalen', 'tel-aviv', 'jope', 'gaza', 'beerseba', 'acre'] } },
          { t: 'Las líneas del armisticio de 1949: Israel; Cisjordania bajo Jordania; la Franja de Gaza bajo Egipto.', fecha: 1949, estado: { view: [[29.4, 33.9], [33.4, 35.9]], capas: ['x-israel', 'x-cisjordania49', 'x-gaza49'], lugares: ['jerusalen', 'tel-aviv', 'gaza', 'beerseba', 'eilat'] } }
        ]),
        tabla({
          titulo: 'Fechas de este período',
          cab: ['Fecha', 'Hecho'],
          filas: [
            ['2 de noviembre de 1917', 'Declaración Balfour: Gran Bretaña apoya «un hogar nacional para el pueblo judío» en Palestina, sin perjuicio de los derechos de las comunidades no judías'],
            ['1922', 'La Sociedad de las Naciones aprueba el mandato británico; Transjordania queda aparte'],
            ['1929; 1936–1939', 'Disturbios y revuelta árabe contra la inmigración judía y el mandato'],
            ['1939', 'El Libro Blanco británico limita la inmigración judía'],
            ['1939–1945', 'El Holocausto: unos seis millones de judíos asesinados en Europa'],
            ['29 de noviembre de 1947', 'La Asamblea General de la ONU aprueba la partición (resolución 181: 33 votos a favor, 13 en contra y 10 abstenciones)'],
            ['14 de mayo de 1948', 'David Ben-Gurión proclama el Estado de Israel; al día siguiente lo atacan los ejércitos de varios Estados árabes'],
            ['1948–1949', 'Guerra; unos 700.000 árabes palestinos huyen o son expulsados; armisticios de 1949']
          ]
        })
      ],
      texto: [
        'Con el fin del imperio otomano, Gran Bretaña recibió de la Sociedad de las Naciones el mandato para administrar Palestina, con el encargo de facilitar el establecimiento de un hogar nacional judío, tal como había prometido en la Declaración Balfour de 1917, y a la vez proteger los derechos civiles y religiosos de los habitantes árabes. Al este del Jordán se formó un territorio aparte, el emirato de Transjordania, que en 1946 se convirtió en el reino de Jordania.',
        { h: 'Dos pueblos y una misma tierra' },
        'Durante el mandato llegaron cientos de miles de judíos, sobre todo de Europa oriental, que compraron tierras, drenaron pantanos, fundaron kibutz y ciudades. La población árabe también creció. Los dirigentes árabes se opusieron a la inmigración y al proyecto de un Estado judío, y hubo disturbios en 1920, 1921 y 1929, y una revuelta entre 1936 y 1939. En 1939, Gran Bretaña limitó la inmigración judía. Justo entonces, en Europa, la Alemania nazi asesinaba a unos seis millones de judíos en el Holocausto.',
        { h: 'La partición y la guerra' },
        'En 1947, Gran Bretaña entregó el problema a las Naciones Unidas. El 29 de noviembre de 1947, la Asamblea General aprobó un plan para dividir el territorio en un Estado judío y otro árabe, con Jerusalén bajo un régimen internacional. Los dirigentes judíos lo aceptaron; los dirigentes árabes y los Estados árabes lo rechazaron. Estalló una guerra civil, y el 14 de mayo de 1948, el día antes de que terminara el mandato, David Ben-Gurión proclamó la independencia del Estado de Israel. Al día siguiente lo atacaron los ejércitos de Egipto, Jordania, Siria, Irak y Líbano.',
        'La guerra terminó con los armisticios de 1949. Israel quedó con más territorio que el del plan de partición; Jordania tomó Cisjordania y la parte oriental de Jerusalén, con la ciudad antigua, y Egipto la Franja de Gaza. Unos 700.000 árabes palestinos huyeron o fueron expulsados de sus hogares, y no se les permitió volver. En los años siguientes, cientos de miles de judíos dejaron o fueron expulsados de países árabes y musulmanes, y la mayoría se estableció en Israel.',
        { posturas: {
          titulo: 'Dos memorias de 1948',
          a: { n: 'Para Israel y el pueblo judío', t: 'Es la independencia: el regreso a la tierra de los padres después de casi dos mil años de dispersión y pocos años después del Holocausto, aprobado por la ONU y defendido en una guerra contra varios ejércitos. Se recuerda cada año como Día de la Independencia.' },
          b: { n: 'Para los palestinos', t: 'Es la Nakba, «la catástrofe»: la pérdida de hogares, aldeas y tierras, y el comienzo de un problema de refugiados que, con sus descendientes, sigue sin resolverse. Se recuerda cada 15 de mayo.' },
          c: 'Las dos memorias se refieren a hechos reales y ninguna se entiende sin la otra. Este recurso no toma posición política. Un creyente puede reconocer la fidelidad de Dios con Israel, porque «No ha desechado Dios a su pueblo» (Ro 11:2), y a la vez amar, orar y obrar por la paz de judíos y árabes, recordando que Dios ama al extranjero (Dt 10:18-19) y que en Cristo se derriba la pared de enemistad (Ef 2:14-16).'
        } }
      ],
      pensar: 'Jesús dijo: «Bienaventurados los pacificadores» (Mt 5:9). ¿Cómo puedes orar hoy por la paz de Jerusalén (Sal 122:6) pensando en las personas concretas, judías y árabes, que viven allí?'
    },
    {
      id: 'hoy', n: 'De 1948 a hoy', ref: 'Salmo 122:6-9; Lucas 21:24; Mateo 5:9', fecha: [1949, 2026],
      visual: [
        pasos([
          { t: 'Después de la guerra de 1967: Israel controla Cisjordania, Jerusalén oriental, la Franja de Gaza, el Golán y el Sinaí.', fecha: 1967, estado: { view: V.siglo20, capas: ['x-israel', 'x-cisjordania', 'x-gaza', 'x-golan', 'x-sinai'], lugares: ['jerusalen', 'tel-aviv', 'gaza', 'eilat'] } },
          { t: 'Hoy (octubre de 2026): Israel; Cisjordania, con zonas de la Autoridad Palestina y zonas bajo control israelí; la Franja de Gaza; y el Golán.', fecha: 2026, estado: { view: [[29.4, 33.9], [33.45, 36.1]], capas: ['x-israel', 'x-cisjordania-hoy', 'x-gaza-hoy', 'x-golan-hoy'], lugares: ['jerusalen', 'tel-aviv', 'gaza', 'eilat'] } }
        ]),
        tabla({
          titulo: 'Fechas desde 1948',
          cab: ['Fecha', 'Hecho'],
          filas: [
            ['5 a 10 de junio de 1967', 'Guerra de los Seis Días; Jerusalén queda bajo control israelí'],
            ['1973', 'Guerra de Yom Kipur'],
            ['1979; 1982', 'Paz con Egipto; Israel devuelve el Sinaí'],
            ['1980; 1981', 'Ley de Jerusalén; Israel aplica su ley en el Golán'],
            ['1987; 2000', 'Primera y segunda intifada palestina'],
            ['1993–1995', 'Acuerdos de Oslo; nace la Autoridad Palestina'],
            ['1994', 'Paz con Jordania'],
            ['2005; 2007', 'Israel se retira de Gaza; Hamás toma el control de la Franja'],
            ['2020', 'Acuerdos de Abraham con Emiratos, Baréin, Marruecos y Sudán'],
            ['7 de octubre de 2023', 'Ataque de Hamás: unas 1.200 personas muertas y 251 secuestradas; comienza la guerra en Gaza'],
            ['10 de octubre de 2025', 'Alto el fuego en Gaza; vuelven los rehenes vivos'],
            ['2026', 'Guerra con Irán (desde el 28 de febrero) y con Hezbolá en el Líbano (desde el 2 de marzo); tregua en el Líbano desde el 16 de abril']
          ],
          nota: 'Situación descrita al 21 de octubre de 2026. Este texto se revisa periódicamente.'
        })
      ],
      texto: [
        'Desde 1948, la historia de la tierra ha estado marcada por guerras, acuerdos de paz y un conflicto entre israelíes y palestinos que sigue sin resolverse. Esta estación resume los hechos principales con sus fechas, sin tomar posición política, y describe la situación a octubre de 2026.',
        { h: '1967 y Jerusalén' },
        'En junio de 1967, tras semanas de tensión con Egipto, Siria y Jordania, Israel ganó en seis días una guerra que le dio el control de la península del Sinaí, la Franja de Gaza, Cisjordania con Jerusalén oriental y los altos del Golán. Por primera vez desde el año 70, la ciudad antigua de Jerusalén y el monte del templo quedaron bajo un gobierno judío, aunque Israel dejó la administración de la explanada en manos de una fundación islámica. En 1980 declaró a Jerusalén unida como su capital, pero la mayoría de los países mantienen sus embajadas en Tel Aviv; los palestinos reclaman Jerusalén oriental como capital de su Estado.',
        { h: 'Oslo, Gaza y el 7 de octubre' },
        'Los acuerdos de Oslo (1993–1995) crearon la Autoridad Palestina, que gobierna parte de Cisjordania, mientras otras zonas siguen bajo control israelí, con asentamientos israelíes. En 2005 Israel se retiró de Gaza, y en 2007 el movimiento islamista Hamás tomó el control de la Franja. El 7 de octubre de 2023, Hamás atacó el sur de Israel: murieron unas 1.200 personas y 251 fueron llevadas como rehenes. Israel respondió con una guerra en Gaza que causó una enorme destrucción; según el Ministerio de Salud de Gaza, dependiente de Hamás, los muertos palestinos superaban los 70.000 a fines de 2025.',
        { h: 'La situación a octubre de 2026' },
        'El 10 de octubre de 2025 comenzó un alto el fuego en Gaza dentro de un plan de veinte puntos promovido por Estados Unidos, y volvieron los rehenes vivos; el último cuerpo fue recuperado en enero de 2026. Un año después, el alto el fuego se mantiene pero es frágil: la segunda fase, que incluye el desarme de Hamás y la retirada israelí, sigue estancada, y las tropas israelíes controlan parte de la Franja. En 2026 hubo además una guerra con Irán, desde el 28 de febrero, y combates con Hezbolá en el Líbano, con una tregua desde el 16 de abril.',
        'Israel tiene unos 10,3 millones de habitantes (septiembre de 2026): cerca del 78 % judíos y otros, y cerca del 22 % árabes. Allí vive casi la mitad de los judíos del mundo. Más de cinco millones de palestinos viven en Cisjordania y Gaza. En 2025, Francia, el Reino Unido, Canadá, Australia y otros países reconocieron al Estado de Palestina, al que reconocen 157 de los 193 miembros de la ONU.',
        { h: 'Cómo lo mira un creyente' },
        'Los cristianos ven estos hechos de maneras distintas, como explica la ruta VI. Pero todos pueden obedecer el mandato del salmo: «Pedid por la paz de Jerusalén» (Sal 122:6), y recordar que Dios ama a israelíes y palestinos, y que hay creyentes en Jesús en ambos pueblos.',
        ir('Ver qué enseña la Biblia sobre el futuro de la tierra', '#plan/6')
      ],
      pensar: 'Orar por la paz de Jerusalén es orar por personas con nombre y familia. ¿Por quiénes concretamente puedes orar hoy, en Israel, en Gaza y en Cisjordania?'
    }
  ];
  // ================== RUTA VI. La tierra en el plan de Dios ==================
  const plan = [
    {
      id: 'promesa', n: 'La promesa a Abraham', ref: 'Génesis 12:1-7; 13:14-17; 15:7-21; 17:8; Salmo 105:8-11',
      visual: [
        img('abraham.webp', 'Abraham, anciano, de pie en una colina rocosa cerca de Betel al atardecer, apoyado en su cayado, mirando hacia el norte, el sur, el oriente y el occidente sobre los montes y valles de Canaán; sus tiendas y rebaños abajo', '«Alza ahora tus ojos, y mira desde el lugar donde estás» (Gn 13:14).'),
        cita('Génesis 17:8', 'Y te daré a ti, y a tu descendencia después de ti, la tierra en que moras, toda la tierra de Canaán en heredad perpetua; y seré el Dios de ellos.'),
        mapa({ view: [[31.1, 34.6], [32.5, 35.6]], lugares: ['siquem', 'betel', 'hai', 'hebron', 'beerseba'], trazos: ['c-cresta'] }, 'Los altares de Abraham')
      ],
      texto: [
        'La historia de la tierra en la Biblia comienza con una orden y una promesa. Dios dijo a Abram: «Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré» (Gn 12:1). Abram obedeció sin saber adónde iba (He 11:8). Cuando llegó a Siquem, en el centro de Canaán, Dios le apareció y le dijo: «A tu descendencia daré esta tierra» (Gn 12:7). Abram respondió edificando un altar, y lo mismo hizo en Betel y en Hebrón. Así, el primer modo de «tomar posesión» de la tierra fue la adoración.',
        { h: 'Una promesa repetida y confirmada' },
        'Dios repitió la promesa varias veces. Cuando Lot escogió la llanura del Jordán, Dios le dijo a Abram: «Alza ahora tus ojos, y mira desde el lugar donde estás hacia el norte y el sur, y al oriente y al occidente. Porque toda la tierra que ves, la daré a ti y a tu descendencia para siempre» (Gn 13:14-15). En Génesis 15, Dios hizo un pacto solemne con Abram: partió unos animales, y una antorcha de fuego, señal de su presencia, pasó sola entre los pedazos mientras Abram dormía (Gn 15:17-18). En aquel tiempo, quien pasaba entre los animales partidos se comprometía bajo pena de muerte. Que solo Dios pasara significa que Él tomó sobre sí todo el compromiso.',
        'En Génesis 17, Dios cambió el nombre de Abram por Abraham y confirmó: «te daré a ti, y a tu descendencia después de ti, la tierra en que moras, toda la tierra de Canaán en heredad perpetua; y seré el Dios de ellos» (Gn 17:8). La misma promesa fue repetida a Isaac (Gn 26:3) y a Jacob (Gn 28:13). El salmista la llama «pacto sempiterno» (Sal 105:10-11).',
        { h: 'Extranjero en la tierra prometida' },
        'Sin embargo, Abraham nunca poseyó la tierra. Esteban lo recuerda: Dios «no le dio herencia en ella, ni aun para asentar un pie; pero le prometió que se la daría en posesión, y a su descendencia después de él, cuando él aún no tenía hijo» (Hch 7:5). Lo único que Abraham compró fue una cueva para sepultar a Sara (Gn 23). Vivió en tiendas, como extranjero, creyendo una promesa que no vio cumplida. Por eso la carta a los Hebreos dice que habitó «en la tierra prometida como en tierra ajena» (He 11:9).',
        { h: 'La tierra y la bendición' },
        'La promesa de la tierra va unida a otras dos: una descendencia numerosa y la bendición para todas las naciones: «serán benditas en ti todas las familias de la tierra» (Gn 12:3). La tierra no era un fin en sí misma, sino el lugar donde Dios formaría un pueblo y desde donde llegaría la bendición a todo el mundo, en Cristo, la descendencia de Abraham (Gá 3:8, 16).'
      ],
      pensar: 'Abraham respondió a la promesa levantando altares. ¿Dónde estás levantando tú «altares» de adoración en los lugares que Dios te ha dado?'
    },
    {
      id: 'por-que', n: '¿Por qué esta tierra?', ref: 'Deuteronomio 11:10-12; 7:7-8; Ezequiel 5:5; Hechos 17:26-27; Salmo 20:7; Gálatas 4:4',
      visual: [
        tabla({
          titulo: 'Razones que el texto bíblico sugiere',
          cab: ['La tierra es…', 'Lo que enseña', 'Pasajes'],
          filas: [
            ['Dependiente de la lluvia', 'Que el pueblo viva mirando a Dios y no a sus recursos', 'Dt 11:10-12; 8:10-18'],
            ['Pequeña', 'Que Dios no elige por grandeza, sino por amor y fidelidad', 'Dt 7:7-8; 1 Co 1:27-29'],
            ['Central', 'Que el pueblo sea testigo ante las naciones', 'Ez 5:5; Is 43:10; 49:6'],
            ['Asignada por Dios', 'Que Dios gobierna la historia y los límites de los pueblos', 'Dt 32:8; Hch 17:26-27'],
            ['Vulnerable', 'Que el pueblo confíe en Dios y no en ejércitos ni alianzas', 'Sal 20:7; Is 31:1'],
            ['El escenario del Mesías', 'Que la redención ocurra a la vista del mundo, en el tiempo señalado', 'Mi 5:2; Gá 4:4']
          ],
          nota: 'Son razones que se desprenden de los pasajes; la Biblia no da una explicación única de por qué Dios escogió esta tierra.'
        }),
        mapa({ view: V.levante, capas: ['t-israel'], vecinos: ['egipto-1274', 'asiria-730'], lugares: ['jerusalen', 'menfis', 'babilonia', 'ninive'] }, 'En medio de las naciones')
      ],
      texto: [
        'Hay tierras más grandes, más fértiles y más seguras que la de Israel. Egipto tenía el Nilo; Mesopotamia, dos grandes ríos; el norte, bosques y lluvia abundante. ¿Por qué Dios escogió esta franja angosta, seca en el sur, rodeada de imperios y cruzada por ejércitos? La Biblia no responde con una sola frase, pero varios pasajes, leídos juntos, sugieren algunas razones. Conviene tomarlas como lo que el texto deja ver, no como una explicación completa de los propósitos de Dios.',
        { h: 'Una tierra que enseña a depender' },
        'La razón más clara está en Deuteronomio 11. La tierra prometida no se riega como Egipto, desde un río que el hombre controla, sino que «bebe las aguas de la lluvia del cielo; tierra de la cual Jehová tu Dios cuida» (Dt 11:11-12). Dios escogió una tierra donde cada cosecha recordara que todo depende de Él. Moisés advirtió que la abundancia podía hacer que el pueblo olvidara a Dios y dijera: «Mi poder y la fuerza de mi mano me han traído esta riqueza» (Dt 8:17).',
        { h: 'Pequeña y vulnerable' },
        'Dios no escogió a Israel por ser grande: «No por ser vosotros más que todos los pueblos os ha querido Jehová y os ha escogido, pues vosotros erais el más insignificante de todos los pueblos» (Dt 7:7). La tierra se parece al pueblo. Además, su posición entre imperios la hacía vulnerable. Una y otra vez Israel tuvo que elegir entre confiar en Dios o buscar alianzas con Egipto o Asiria. Los profetas condenaron a los que «descienden a Egipto por ayuda, y confían en caballos» (Is 31:1). El salmista resume la lección: «Estos confían en carros, y aquéllos en caballos; mas nosotros del nombre de Jehová nuestro Dios tendremos memoria» (Sal 20:7).',
        { h: 'En medio de las naciones' },
        'Dios puso a Jerusalén «en medio de las naciones» (Ez 5:5). Israel debía ser testigo de Dios ante los pueblos que pasaban por sus caminos (Is 43:10), y su vocación era ser «luz de las naciones» (Is 49:6). Pablo explica en Atenas que Dios mismo fijó «los límites de su habitación» a los pueblos, «para que busquen a Dios» (Hch 17:26-27). La ubicación de Israel formaba parte de ese plan.',
        { h: 'El escenario de la redención' },
        'Finalmente, esta tierra fue el lugar escogido para que naciera el Mesías: «Pero tú, Belén Efrata… de ti me saldrá el que será Señor en Israel» (Mi 5:2). Jesús nació, murió y resucitó en una provincia del imperio romano conectada con todo el mundo conocido, «cuando vino el cumplimiento del tiempo» (Gá 4:4). Desde Jerusalén, el evangelio salió por los caminos de esa tierra hasta lo último de la tierra (Hch 1:8).',
        { ejercicio: {
          pregunta: '¿Qué razón da Deuteronomio 11:10-12 para mostrar que la tierra prometida es distinta de Egipto?',
          opciones: [
            { t: 'Que es más fértil y tiene más agua que Egipto.', ok: false, por_que: 'El texto no dice que tenga más agua; dice que el agua viene de otro lugar: del cielo.' },
            { t: 'Que depende de la lluvia del cielo y del cuidado de Dios.', ok: true, por_que: 'Así lo dice el pasaje: es tierra «que bebe las aguas de la lluvia del cielo» y sobre la cual están los ojos de Jehová.' },
            { t: 'Que no necesita trabajo humano para dar fruto.', ok: false, por_que: 'El campesino seguía arando y sembrando. La diferencia es que su cosecha dependía de la lluvia que Dios enviaba.' }
          ],
          explicacion: 'Egipto se regaba con el Nilo; la tierra prometida, con la lluvia. Dios escogió una tierra que enseñara a su pueblo a depender de Él cada año.'
        } }
      ],
      pensar: 'Dios escogió una tierra que obligaba a mirar al cielo. ¿Qué circunstancias de tu vida, que parecen desventajas, podrían ser el lugar donde Dios te enseña a depender de Él?'
    },
    {
      id: 'limites', n: 'Los límites de la tierra', ref: 'Génesis 15:18-21; Números 34:1-12; Josué 21:43-45; 1 Reyes 4:21; Ezequiel 47:13–48:29',
      visual: [
        pasos([
          { t: 'La promesa a Abraham: «desde el río de Egipto hasta el río grande, el río Eufrates» (Gn 15:18).', estado: { view: [[28.8, 31.8], [37.0, 41.0]], capas: ['h-promesa'], lugares: ['rio-egipto', 'carquemis', 'jerusalen'] } },
          { t: 'Los límites que Dios dio a Moisés para el reparto de Canaán (Nm 34).', estado: { view: V.amplia, capas: ['h-canaan'], lugares: ['rio-egipto', 'cades-barnea', 'hamat', 'jerusalen'] } },
          { t: 'Salomón domina desde el Éufrates hasta el límite con Egipto, con reinos tributarios (1 R 4:21).', estado: { view: [[28.8, 31.8], [37.0, 41.0]], capas: ['h-salomon', 'h-salomon-vas'], lugares: ['jerusalen', 'damasco', 'carquemis'] } },
          { t: 'La tierra repartida en la visión de Ezequiel (Ez 47:13–48:29).', estado: { view: V.amplia, capas: ['h-ezequiel'], lugares: ['hamat', 'damasco', 'jerusalen', 'cades-barnea'] } }
        ]),
        cita('Génesis 15:18', 'En aquel día hizo Jehová un pacto con Abram, diciendo: A tu descendencia daré esta tierra, desde el río de Egipto hasta el río grande, el río Eufrates;')
      ],
      texto: [
        'La Biblia describe los límites de la tierra de varias maneras, y no siempre con las mismas palabras. Leer esos pasajes con atención ayuda a entender qué se prometió, qué se cumplió y qué queda por cumplirse.',
        { h: 'Los límites de la promesa' },
        'A Abraham, Dios le prometió la tierra «desde el río de Egipto hasta el río grande, el río Eufrates» (Gn 15:18), habitada entonces por diez pueblos. Es la descripción más amplia. Éxodo 23:31 da límites parecidos: del mar Rojo al mar de los filisteos, y del desierto al Éufrates. En cambio, Números 34 fija con detalle los límites de Canaán para el reparto entre las tribus: del desierto de Zin y Cades-barnea al sur, hasta la entrada de Hamat al norte, y del Mediterráneo al Jordán. Son límites más pequeños, porque describen la tierra que Israel debía conquistar y repartir en ese momento.',
        '¿Qué es «el río de Egipto»? La mayoría de los estudiosos lo identifica con el Wadi el-Arish, un cauce seco en el norte del Sinaí que marcaba la frontera con Egipto (Nm 34:5; Is 27:12). Otros piensan que se refiere a un brazo del Nilo. El mapa usa la primera identificación.',
        { h: '¿Se cumplió la promesa?' },
        'Al final de la conquista, Josué afirma: «De esta manera dio Jehová a Israel toda la tierra que había jurado dar a sus padres, y la poseyeron y habitaron en ella… No faltó palabra de todas las buenas promesas que Jehová había hecho» (Jos 21:43, 45). Y en tiempos de Salomón, el reino llegó hasta el Éufrates (1 R 4:21). Sin embargo, el mismo libro de Josué reconoce que quedaba «aún mucha tierra por poseer» (Jos 13:1), y Salomón dominaba esos territorios como reinos tributarios, no como tierra de Israel.',
        { posturas: {
          titulo: '¿Está cumplida la promesa de los límites?',
          a: { n: 'Cumplida en Josué y Salomón', t: 'Algunos intérpretes entienden que Josué 21:43-45, 1 Reyes 4:21 y Nehemías 9:8 muestran que la promesa territorial se cumplió por completo en la historia de Israel, y que lo que queda es su sentido espiritual en Cristo.' },
          b: { n: 'Cumplimiento parcial y futuro', t: 'Otros entienden que Josué afirma la fidelidad de Dios en lo que dio hasta entonces, pero que Israel nunca poseyó la tierra completa como heredad, y que los profetas, siglos después de Salomón, siguen anunciando una posesión futura y permanente (Ez 47–48; Am 9:15).' },
          c: 'Este recurso sigue la segunda lectura. Dios fue fiel en cada etapa (Jos 21:45), pero la promesa a Abraham, «heredad perpetua» (Gn 17:8), espera su cumplimiento pleno en el reino del Mesías, cuando Israel habite seguro en toda la tierra prometida. La ruta continúa con esa esperanza en la estación 6.'
        } }
      ],
      pensar: '«No faltó palabra de todas las buenas promesas» (Jos 21:45). ¿Qué promesas de Dios ya viste cumplidas en tu vida, y cuáles esperas todavía con fe?'
    },
    {
      id: 'tierra-mia', n: '«La tierra mía es»', ref: 'Levítico 25:1-28; 1 Reyes 21:1-3; Rut 4:1-10; Jeremías 32:6-15',
      visual: [
        cita('Levítico 25:23', 'La tierra no se venderá a perpetuidad, porque la tierra mía es; pues vosotros forasteros y extranjeros sois para conmigo.'),
        img('lindero.webp', 'Una piedra de lindero antigua, alta y tosca, entre dos parcelas de olivos en una ladera de Samaria, con un muro bajo de piedras y un campesino anónimo que trabaja al fondo', 'Una piedra marca el límite entre dos heredades (Dt 19:14).')
      ],
      texto: [
        'En la ley de Moisés hay una frase que cambia la manera de ver la tierra: «La tierra no se venderá a perpetuidad, porque la tierra mía es; pues vosotros forasteros y extranjeros sois para conmigo» (Lv 25:23). Israel recibió la tierra, pero no como dueño absoluto. El dueño era Dios, y el pueblo vivía en ella como un inquilino que debe rendir cuentas.',
        { h: 'Una heredad para cada familia' },
        'Cuando Josué repartió la tierra, cada tribu recibió su territorio y cada familia su heredad (Jos 13–21). Esa porción no era solo un bien económico: era el lugar de la familia en el pueblo de Dios, y debía pasar de padres a hijos. Por eso estaba prohibido mover las piedras que marcaban los linderos: «no reducirás los límites de la propiedad de tu prójimo, que fijaron los antiguos» (Dt 19:14).',
        { h: 'El año sabático y el jubileo' },
        'Como la tierra era de Dios, también tenía su descanso. Cada siete años, el campo debía quedar sin sembrar, y lo que creciera solo era para los pobres y los animales (Lv 25:1-7). Y cada cincuenta años se celebraba el jubileo: «pregonaréis libertad en la tierra a todos sus moradores» (Lv 25:10). En ese año, cada familia volvía a su heredad. Si alguien había tenido que vender su campo por pobreza, en realidad solo había vendido las cosechas hasta el jubileo. Además, un pariente cercano, el redentor, podía rescatar la tierra antes de ese año (Lv 25:25). Así actuó Booz en el libro de Rut (Rt 4:1-10).',
        { h: 'Nabot y la viña' },
        'Esta ley explica por qué Nabot se negó a vender su viña al rey Acab: «Guárdeme Jehová de que yo te dé a ti la heredad de mis padres» (1 R 21:3). Para Acab, era un buen negocio; para Nabot, era fidelidad a Dios. Jezabel mandó matar a Nabot con testigos falsos, y Elías anunció el juicio de Dios sobre la casa de Acab (1 R 21:17-24).',
        { h: 'Una compra en medio del asedio' },
        'Cuando Babilonia sitiaba Jerusalén y todo parecía perdido, Dios mandó a Jeremías comprar el campo de su primo en Anatot, como redentor. Jeremías pagó, firmó la escritura y la guardó en una vasija de barro, porque Dios había dicho: «Aún se comprarán casas, heredades y viñas en esta tierra» (Jer 32:15). La ley de la heredad se volvió una profecía de esperanza.',
        ir('Ver la compra de Jeremías en Pesos, medidas y monedas', '../../medidas-biblicas/#monedas/1')
      ],
      pensar: 'Si «De Jehová es la tierra y su plenitud» (Sal 24:1), lo que tienes también es suyo. ¿Cómo cambia tu manera de usar tus bienes saber que eres administrador y no dueño?'
    },
    {
      id: 'obediencia', n: 'Una posesión ligada a la obediencia', ref: 'Levítico 18:24-28; 26:32-45; Deuteronomio 28:63-68; 30:1-5; 2 Crónicas 36:20-21',
      visual: [
        pasos([
          { t: '722 a.C.: Asiria deporta a las tribus del reino de Israel.', fecha: -722, estado: { view: [[29.5, 33.5], [37.8, 46.5]], capas: ['asiria-720'], lugares: ['samaria', 'ninive', 'gozan'], trazos: ['deportacion-722'] } },
          { t: '586 a.C.: Babilonia destruye Jerusalén y lleva cautivo a Judá.', fecha: -586, estado: { view: [[29.5, 33.5], [37.8, 46.5]], capas: ['babilonia-570'], lugares: ['jerusalen', 'babilonia', 'ribla'], trazos: ['deportacion'] } },
          { t: '538 a.C.: Persia permite el regreso a la tierra.', fecha: -538, estado: { view: [[29.5, 33.5], [37.8, 50.0]], capas: ['persia-530'], lugares: ['babilonia', 'jerusalen', 'susa'], trazos: ['regreso'] } }
        ]),
        cita('2 Crónicas 36:21', 'Para que se cumpliese la palabra de Jehová por la boca de Jeremías, hasta que la tierra hubo gozado de reposo; porque todo el tiempo de su asolamiento reposó, hasta que los setenta años fueron cumplidos.')
      ],
      texto: [
        'La promesa de la tierra a Abraham fue incondicional: Dios la juró por sí mismo (Gn 15:17-18; He 6:13). Pero el disfrute de la tierra por cada generación dependía de su obediencia. Esta distinción es clave para entender toda la historia de Israel: la tierra pertenecía al pueblo por promesa, pero el pueblo podía perderla temporalmente por su pecado.',
        { h: 'La tierra que vomita' },
        'Levítico usa una imagen fuerte. Los cananeos habían contaminado la tierra con sus prácticas, y la tierra los «vomitó». Israel debía cuidarse: «no sea que la tierra os vomite por haberla contaminado, como vomitó a la nación que la habitó antes de vosotros» (Lv 18:28). La tierra no era neutral: era la tierra de Dios, y no toleraba indefinidamente la idolatría, la injusticia y la sangre inocente.',
        'Deuteronomio 28 presenta las bendiciones de la obediencia y las maldiciones de la desobediencia. La última de ellas es el exilio: «seréis arrancados de sobre la tierra a la cual entráis para tomar posesión de ella. Y Jehová te esparcirá por todos los pueblos» (Dt 28:63-64).',
        { h: 'El reposo de la tierra' },
        'Así ocurrió. Asiria deportó al reino del norte en 722 a.C., y Babilonia llevó a Judá en 586 a.C. El cronista explica el exilio con una razón sorprendente: el pueblo no había dado a la tierra sus años de descanso, y Dios se los cobró. Fue «para que se cumpliese la palabra de Jehová por la boca de Jeremías, hasta que la tierra hubo gozado de reposo; porque todo el tiempo de su asolamiento reposó, hasta que los setenta años fueron cumplidos» (2 Cr 36:21). Lo había anunciado Levítico 26:34-35.',
        { h: 'La puerta de regreso' },
        'Pero el castigo no era el final. Moisés mismo anunció que, si el pueblo se volvía a Dios desde el destierro, Dios lo haría volver: «Aun cuando tus desterrados estuvieren en las partes más lejanas que hay debajo del cielo, de allí te recogerá Jehová tu Dios» (Dt 30:4). Y en Levítico, después de las advertencias, Dios dice que se acordará de su pacto con Jacob, Isaac y Abraham, «y haré memoria de la tierra» (Lv 26:42). En 538 a.C., el rey Ciro de Persia permitió a los judíos volver, y comenzó la reconstrucción.',
        ir('Estudiar El exilio y los retornos', '../../exilio/')
      ],
      pensar: 'Dios disciplinó a su pueblo, pero no rompió su pacto (Lv 26:44). ¿Cómo te ayuda esto a entender la disciplina de Dios en tu propia vida (He 12:5-11)?'
    },
    {
      id: 'futuro', n: 'La promesa futura', ref: 'Ezequiel 36:24-28; 37:21-28; Amós 9:14-15; Isaías 11:11-12; Romanos 11:25-29; Zacarías 12:10',
      visual: [
        cita('Amós 9:14-15', 'Y traeré del cautiverio a mi pueblo Israel, y edificarán ellos las ciudades asoladas, y las habitarán; plantarán viñas, y beberán el vino de ellas, y harán huertos, y comerán el fruto de ellos. Pues los plantaré sobre su tierra, y nunca más serán arrancados de su tierra que yo les di, ha dicho Jehová Dios tuyo.'),
        mapa({ view: V.amplia, capas: ['h-ezequiel'], lugares: ['jerusalen', 'hamat', 'cades-barnea', 'damasco'] }, 'La tierra en Ezequiel')
      ],
      texto: [
        'Después del regreso de Babilonia, los profetas siguieron anunciando una restauración de Israel en su tierra mayor que la que habían visto. Las promesas hablan de un regreso desde todas las naciones, de un pueblo unido bajo un solo rey de la casa de David, de un corazón nuevo y de una posesión que no tendrá fin.',
        { h: 'Lo que anunciaron los profetas' },
        'Isaías dice que el Señor alzará «otra vez su mano para recobrar el remanente de su pueblo», y lo reunirá de los cuatro confines de la tierra (Is 11:11-12). Ezequiel ve los huesos secos que reciben vida y anuncia: «yo tomo a los hijos de Israel de entre las naciones a las cuales fueron, y los recogeré de todas partes, y los traeré a su tierra» (Ez 37:21), y promete que David, es decir el Mesías, será su rey para siempre (Ez 37:24-25). Amós termina con una promesa sin condición: «los plantaré sobre su tierra, y nunca más serán arrancados de su tierra que yo les di» (Am 9:15). Estas promesas van unidas a una renovación espiritual: «os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros» (Ez 36:26), y «mirarán a mí, a quien traspasaron» (Zac 12:10).',
        'El regreso de Persia, en el siglo VI a.C., fue un cumplimiento parcial: volvió una parte pequeña del pueblo, a una provincia bajo dominio extranjero, sin rey de la casa de David. Por eso los profetas posteriores, como Zacarías, siguieron esperando lo que faltaba.',
        { h: 'Israel en el Nuevo Testamento' },
        'Pablo enseña que el endurecimiento de Israel es parcial y temporal, «hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo» (Ro 11:25-26), «porque irrevocables son los dones y el llamamiento de Dios» (Ro 11:29). Jesús habló de una Jerusalén hollada por los gentiles «hasta que» se cumplan sus tiempos (Lc 21:24), y los discípulos preguntaron si restauraría el reino a Israel; Jesús no negó la esperanza, sino que dijo que los tiempos los pone el Padre (Hch 1:6-7).',
        { posturas: {
          titulo: '¿Tiene Israel un futuro en su tierra?',
          a: { n: 'Lectura futurista', t: 'Las promesas a Israel sobre la tierra se cumplirán literalmente: Israel será reunido, se volverá a su Mesías y habitará en su tierra durante el reino milenial de Cristo (Ap 20:1-6). La iglesia participa de las bendiciones de Abraham sin reemplazar a Israel.' },
          b: { n: 'Cumplimiento en Cristo y la iglesia', t: 'Las promesas de la tierra se cumplen espiritualmente en Cristo y en su pueblo, judíos y gentiles, y finalmente en la tierra nueva; no esperan un cumplimiento territorial para la nación de Israel.' },
          c: 'Este recurso sigue la lectura futurista, que respeta el sentido de las promesas para quienes las recibieron y la irrevocabilidad del llamamiento de Israel (Ro 11:29). Muchos creyentes ven en el regreso de los judíos a la tierra en el siglo XX un comienzo del cumplimiento de estas profecías. Aun así, la Biblia une la restauración plena al arrepentimiento nacional y a la venida del Mesías (Zac 12:10; Ro 11:26), y no permite fijar fechas ni identificar cada decisión política de un Estado moderno con la voluntad de Dios.'
        } },
        ir('Estudiar Los últimos tiempos', '../../escatologia/'),
        { ejercicio: {
          pregunta: 'Según Ezequiel 36 y Zacarías 12, ¿qué acompaña la restauración final de Israel en su tierra?',
          opciones: [
            { t: 'Una victoria militar sobre todas las naciones vecinas.', ok: false, por_que: 'Los profetas hablan de la intervención de Dios, pero lo que se destaca es un cambio en el corazón del pueblo.' },
            { t: 'Un corazón nuevo y el reconocimiento del Mesías traspasado.', ok: true, por_que: 'Ezequiel promete un corazón y un espíritu nuevos (Ez 36:26), y Zacarías anuncia que mirarán a aquel a quien traspasaron (Zac 12:10).' },
            { t: 'La reconstrucción de la torre de Babel en Jerusalén.', ok: false, por_que: 'No hay ninguna profecía así. Babel representa el orgullo humano, lo contrario de la restauración de Dios.' }
          ],
          explicacion: 'La restauración que anuncian los profetas no es solo geográfica sino espiritual: Israel volverá a su tierra y a su Dios, y reconocerá a Jesús como el Mesías.'
        } }
      ],
      pensar: 'Pablo sentía «gran tristeza y continuo dolor» por su pueblo y oraba por su salvación (Ro 9:2; 10:1). ¿Oras tú por la salvación del pueblo judío?'
    },
    {
      id: 'patria', n: 'Una patria mejor', ref: 'Hebreos 11:8-16; Mateo 5:5; Romanos 4:13; Apocalipsis 21:1-4',
      visual: [
        img('tiendas.webp', 'Abraham, anciano, de pie fuera de su tienda de pelo de cabra en la noche, mirando un cielo lleno de estrellas sobre las colinas de Canaán; las tiendas y los camellos de su campamento a su alrededor', '«Mira ahora los cielos, y cuenta las estrellas» (Gn 15:5).'),
        cita('Hebreos 11:13-16', 'Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos, y creyéndolo, y saludándolo, y confesando que eran extranjeros y peregrinos sobre la tierra. Porque los que esto dicen, claramente dan a entender que buscan una patria; pues si hubiesen estado pensando en aquella de donde salieron, ciertamente tenían tiempo de volver. Pero anhelaban una mejor, esto es, celestial; por lo cual Dios no se avergüenza de llamarse Dios de ellos; porque les ha preparado una ciudad.')
      ],
      texto: [
        'La carta a los Hebreos mira la historia de los patriarcas desde un ángulo sorprendente. Abraham, Isaac y Jacob vivieron en tiendas, como extranjeros, en la misma tierra que se les había prometido, y murieron sin poseerla. Pero no vivieron frustrados: «Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos, y creyéndolo, y saludándolo, y confesando que eran extranjeros y peregrinos sobre la tierra» (He 11:13).',
        { h: 'Una ciudad con fundamentos' },
        'Hebreos explica qué esperaban: Abraham «esperaba la ciudad que tiene fundamentos, cuyo arquitecto y constructor es Dios» (He 11:10). Y agrega: «anhelaban una mejor, esto es, celestial; por lo cual Dios no se avergüenza de llamarse Dios de ellos; porque les ha preparado una ciudad» (He 11:16). La tierra de Canaán era real y la promesa sobre ella sigue en pie, como vimos en la estación anterior. Pero los patriarcas entendieron que la promesa apuntaba más alto: a vivir con Dios en una patria que no se acaba.',
        { h: 'Herederos del mundo' },
        'El Nuevo Testamento amplía el horizonte de la promesa. Pablo dice que Abraham y su descendencia recibieron la promesa «de que sería heredero del mundo» (Ro 4:13). Jesús promete: «Bienaventurados los mansos, porque ellos recibirán la tierra por heredad» (Mt 5:5), retomando el Salmo 37:11. La promesa hecha a Abraham sobre una franja de tierra se convierte en la promesa de una creación renovada, donde todos los que creen, judíos y gentiles, son hijos de Abraham por la fe (Gá 3:7, 29).',
        { h: 'Un cielo nuevo y una tierra nueva' },
        'La Biblia termina donde empezó: con Dios habitando con los hombres en una tierra sin pecado. Juan ve «un cielo nuevo y una tierra nueva» y la nueva Jerusalén que desciende del cielo, y oye una voz: «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios» (Ap 21:3). Las promesas de la tierra, de Abraham a los profetas, encuentran su meta final en esa ciudad donde no habrá más muerte, ni llanto, ni dolor (Ap 21:4).',
        { h: 'Peregrinos hoy' },
        'Por eso el creyente vive como peregrino. Ama la tierra donde vive, trabaja por su bien y ora por ella (Jer 29:7), pero sabe que su ciudadanía está en los cielos (Fil 3:20). Estudiar la tierra de Israel es estudiar el escenario donde Dios cumplió sus promesas en la historia; mirar más allá de ella es recordar que esas promesas no terminan allí. El Dios que fue fiel con Abraham en una tierra concreta será fiel con todos sus hijos en la patria mejor.',
        ir('Estudiar el libro de Apocalipsis', '../../apocalipsis/')
      ],
      pensar: 'Los patriarcas vivieron como «extranjeros y peregrinos», mirando de lejos lo prometido. ¿Qué cambia en tus prioridades de esta semana si vives como ciudadano de esa patria mejor?'
    }
  ];

  // ================== Ensamblado ==================
  window.RUTA_DATA = {
    titulo: 'La tierra de Israel',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio
      minZoom: 4.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.TIERRA_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'panorama', grupo: 'Geografía', n: 'I. Panorama de la tierra', info: 'Ubicación, nombres, tamaño, franjas, alturas, historia y vecinos', estaciones: panorama },
      { id: 'regiones', grupo: 'Geografía', n: 'II. Las regiones', info: 'De la costa al desierto y de Galilea a Edom', estaciones: regiones },
      { id: 'clima', grupo: 'Geografía', n: 'III. Clima, agua y vida', info: 'Lluvias, rocío, vientos, fuentes, cosechas y pastores', estaciones: clima },
      { id: 'caminos', grupo: 'Geografía', n: 'IV. Caminos, ciudades y distancias', info: 'Rutas internacionales, caminos interiores, pasos, puertas y viajes a pie', estaciones: caminos },
      { id: 'despues', grupo: 'Historia', n: 'V. La tierra después de la Biblia', info: 'Del año 70 a hoy: romanos, bizantinos, islam, cruzados, otomanos y el siglo XX', estaciones: despues,
        linea: { desde: 0, hasta: 2030, hitos: [
          { a: 70, t: 'Cae Jerusalén' }, { a: [324, 636], t: 'Bizancio' }, { a: [1099, 1291], t: 'Cruzadas' },
          { a: [1517, 1917], t: 'Otomanos' }, { a: 1948, t: 'Israel' }
        ] } },
      { id: 'plan', grupo: 'Teología', n: 'VI. La tierra en el plan de Dios', info: 'La promesa, sus límites, la obediencia, el futuro y la patria celestial', estaciones: plan }
    ]
  };
})();
