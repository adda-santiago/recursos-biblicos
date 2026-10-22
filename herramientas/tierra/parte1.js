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
  const HAY = new Set(/*@@IMAGENES*/[]);
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
