/* ==========================================================
   Recursos Bíblicos — Los patriarcas · contenido de las rutas
   FUENTE de public/apps/patriarcas/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/patriarcas_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960); las marcadas
   con la marca wlc (dos arrobas + wlc:libro/cap/v), con el hebreo del Códice de Leningrado (herramientas/wlc.py).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Decisiones del responsable al aprobar el bosquejo (13-11-2026):
   - Recurso de historia y geografía (tipo mapa): vida, viajes, lugares y mundo de los patriarcas.
     El comentario capítulo por capítulo queda para el estudio de Génesis (nº 20).
   - Fechas según la cronología del texto, como Egipto y Pactos: Abraham nace hacia 2166 a.C.,
     sale de Harán en 2091, Jacob baja a Egipto en 1876, Éxodo en 1446. Los 430 años se cuentan
     en Egipto; la estancia corta (215 años, Septuaginta y Gálatas 3:17) va en `posturas`.
   - Los patriarcas son personas históricas; las objeciones (camellos, filisteos, crítica de las
     fuentes) se describen con sus respuestas.
   - Ur del sur (Tell el-Muqayyar) prevalece; Urfa, como postura.
   - El ángel de Jehová: como en La persona y obra de Cristo (aparición del Hijo), con la otra lectura.
   - Melquisedec: rey histórico de Salem y figura de Cristo, no cristofanía (postura).
   - Jacob y Esaú (Ro 9): elección para un papel en la historia de la salvación, no condenación
     individual; la lectura calvinista en `posturas`.
   - Sodoma al sur del mar Muerto; Tall el-Hammam, como postura.
   - Se nombra con respeto la tradición islámica sobre Ismael en el sacrificio, frente a Gn 22:2.
   - Los pecados de los patriarcas se cuentan sin aprobarlos.
   ========================================================== */
(() => {
  // Ayudas comunes a todas las partes
  // Imágenes propias que ya existen en img/ (la lista la escribe herramientas/patriarcas_citas.py). Una imagen
  // propia que falta queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(/*@@IMAGENES*/[]);
  const ruta = f => (f.startsWith('img/') && !HAY.has(f.slice(4)) ? {} : { src: f });
  const H = window.__PT_H = {
    img: (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) }),
    esq: (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' }),
    foto: (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true }),
    cita: (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref }),
    tabla: (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t }),
    mapa: (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado }),
    pasos: (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista }),
    ir: (t, a) => ({ ir: { t, a } }),
    V: {
      creciente: [[24.5, 28.5], [38.5, 50.5]],
      mesop: [[29.8, 37.5], [37.6, 47.2]],
      ur_canaan: [[29.5, 33.0], [38.0, 47.0]],
      levante: [[29.2, 31.0], [37.6, 40.2]],
      canaan: [[30.55, 34.1], [33.45, 36.45]],
      sur: [[30.4, 34.1], [32.05, 35.8]],
      centro: [[31.3, 34.5], [32.6, 36.0]],
      norte: [[31.4, 34.6], [34.2, 37.0]],
      egipto: [[28.8, 29.8], [33.0, 36.0]],
      egipto_canaan: [[29.3, 30.8], [33.6, 36.2]],
      jacob: [[30.9, 33.5], [37.5, 41.5]],
      transjordania: [[31.3, 34.9], [33.0, 36.3]]
    }
  };
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = H;

  /* ---------------- I. El mundo de los patriarcas ---------------- */
  const mundo = [
    {
      id: 'babel-abraham', n: 'De Babel a Abraham', ref: 'Génesis 11:1-9, 27-32; 12:1-3; Hechos 7:2-4; Josué 24:2-3', fecha: -2166,
      visual: [
        esq('img/esquema-patriarcas.svg', 'Línea de cuatro generaciones: Abraham, Isaac, Jacob y José, con las fechas aproximadas de su vida entre 2166 y 1805 a.C., los capítulos de Génesis que cuentan cada vida y los lugares principales: Ur y Harán, Hebrón y Beerseba, Betel y Harán, y Egipto', 'Cuatro generaciones, unos 360 años y 39 capítulos de Génesis.'),
        cita('Génesis 12:1-3', '@@gn/12/1-3')
      ],
      texto: [
        'Génesis 11 termina con una humanidad dispersa. En Babel los hombres quisieron hacerse un nombre y llegar al cielo por su propio esfuerzo, y Dios confundió su lengua y los esparció sobre la faz de la tierra (Gn 11:4, 8). Las naciones quedaron repartidas, cada una con su idioma y sus dioses. Y justo después de esa dispersión, el relato se detiene en una familia de Ur de los caldeos: Taré y sus hijos Abram, Nacor y Harán (Gn 11:27).',
        { h: 'Una promesa para todas las familias' },
        'En Babel los hombres dijeron «hagámonos un nombre» (Gn 11:4). En el capítulo siguiente es Dios quien dice a Abram: «engrandeceré tu nombre» (Gn 12:2). Lo que la humanidad no pudo conseguir con una torre, Dios lo regala por gracia a un hombre que confía en Él. Y la promesa no termina en Abram: «serán benditas en ti todas las familias de la tierra» (Gn 12:3). Dios elige a uno para alcanzar a todos. Desde aquí, toda la Biblia sigue el hilo de esa promesa hasta Cristo y hasta las naciones que creen en Él (Gá 3:8).',
        { h: 'Los patriarcas' },
        'Se llama patriarcas («padres principales») a Abraham, Isaac y Jacob, los padres del pueblo de Israel, y en un sentido amplio también a los doce hijos de Jacob (Hch 7:8). Este recurso sigue a cuatro generaciones: Abraham, Isaac, Jacob y José. Su historia ocupa Génesis 12 a 50, casi cuatro de cada cinco capítulos del libro. El esquema muestra las fechas aproximadas, los capítulos y los lugares de cada uno.',
        'Las rutas II a V cuentan cada vida en orden. La ruta VI reúne los viajes en el mapa, y la VII muestra cómo el resto de la Biblia lee a los patriarcas. La I, que comienza aquí, presenta el mundo en que vivieron: las fechas, las ciudades de Mesopotamia, la vida en tiendas, las costumbres de la época y la pregunta de si fueron personas reales.',
        'Este recurso cuenta la vida, los viajes y el mundo de los patriarcas. El comentario de Génesis versículo por versículo irá en su estudio de libro, en preparación, y el pacto con Abraham se estudia completo en Pactos y dispensaciones.',
        ir('Ver «De Babel a Abraham» en La creación y los orígenes', '../../creacion-y-origenes/#babel/6')
      ],
      pensar: 'En Babel los hombres quisieron hacerse un nombre; a Abram, Dios le prometió engrandecer el suyo. ¿Estás buscando construir tu propio nombre, o confías en lo que Dios quiere hacer contigo?'
    },
    {
      id: 'fechas', n: 'Las fechas de los patriarcas', ref: 'Génesis 12:4; 21:5; 25:26; 47:9; Éxodo 12:40-41; 1 Reyes 6:1; Gálatas 3:17', fecha: [-2166, -1805],
      visual: [
        tabla({
          titulo: 'Las fechas de los patriarcas según el texto bíblico',
          cab: ['Hecho', 'Dato bíblico', 'Fecha aproximada'],
          filas: [
            ['El templo de Salomón', 'Cuarto año de Salomón (1 R 6:1)', '966 a.C.'],
            ['El Éxodo', '480 años antes del templo (1 R 6:1)', '1446 a.C.'],
            ['Jacob baja a Egipto', '430 años antes del Éxodo (Éx 12:40-41)', '1876 a.C.'],
            ['Nace Jacob', 'Tenía 130 años al llegar a Egipto (Gn 47:9)', '2006 a.C.'],
            ['Nace Isaac', 'Tenía 60 años cuando nació Jacob (Gn 25:26)', '2066 a.C.'],
            ['Nace Abraham', 'Tenía 100 años cuando nació Isaac (Gn 21:5)', '2166 a.C.'],
            ['Abram sale de Harán', 'Tenía 75 años (Gn 12:4)', '2091 a.C.'],
            ['Muere José', 'A los 110 años (Gn 50:26)', '1805 a.C.']
          ],
          nota: 'Fechas aproximadas, contadas hacia atrás desde el templo de Salomón. Son las que usa todo el sitio (Egipto, Pactos y dispensaciones, La tierra de Israel).'
        })
      ],
      texto: [
        'Génesis no da fechas como las nuestras, pero da edades: cuántos años tenía cada patriarca cuando nació su hijo, cuando llegó a un lugar o cuando murió. Si se encadenan esas cifras con otros datos de la Biblia, se puede calcular cuándo vivieron.',
        { h: 'Contar hacia atrás' },
        'El punto de partida es firme. Salomón comenzó a edificar el templo en el cuarto año de su reinado, que la historia fija hacia el 966 a.C., y el texto dice que eso ocurrió 480 años después de la salida de Egipto (1 R 6:1). El Éxodo fue, entonces, hacia el 1446 a.C. Moisés dice que el tiempo que los hijos de Israel habitaron en Egipto fue de cuatrocientos treinta años (Éx 12:40), así que Jacob bajó a Egipto hacia el 1876 a.C. Jacob le dijo al faraón que tenía ciento treinta años (Gn 47:9), e Isaac tenía sesenta cuando nacieron sus hijos, y Abraham cien cuando nació Isaac. La tabla hace la cuenta: Abraham nació hacia el 2166 a.C. y salió de Harán hacia el 2091.',
        'Estas fechas son aproximadas, pero permiten ubicar a los patriarcas en la historia. Abraham vivió a fines del tercer milenio antes de Cristo, cuando Ur era una gran ciudad; José gobernó en el Egipto del Reino Medio, siglos antes de las grandes pirámides de los Ramsés y siglos después de las de Giza.',
        { posturas: {
          titulo: '¿Cuatrocientos treinta años en Egipto, o desde Abraham?',
          a: { n: 'Los 430 años, todos en Egipto', t: 'Éxodo 12:40 dice que ese fue el tiempo que los israelitas habitaron en Egipto, y Dios había anunciado a Abram que su descendencia sería esclava y oprimida «cuatrocientos años» en tierra ajena (Gn 15:13; Hch 7:6). Con esta lectura, Jacob baja a Egipto hacia el 1876 a.C., y José gobierna en el Reino Medio.' },
          b: { n: 'Los 430 años, desde Abraham', t: 'La traducción griega antigua (la Septuaginta) agrega en Éxodo 12:40 que habitaron en Egipto y también en Canaán, y Pablo cuenta 430 años desde la promesa hasta la ley (Gá 3:17). Con esta lectura, Israel habría estado unos 215 años en Egipto, y Jacob habría bajado hacia el 1660 a.C.' },
          c: 'Este recurso sigue la primera lectura, que es la del texto hebreo y la que usan los demás recursos del sitio. Pablo puede contar desde la última confirmación de la promesa a Jacob, poco antes de bajar a Egipto (Gn 46:3-4), y su argumento no depende de la cifra exacta: la ley vino mucho después de la promesa y no la anula.'
        } },
        'Algunos estudiosos que no aceptan la cronología bíblica ubican a los patriarcas varios siglos después, o niegan que se puedan fechar. La estación «¿Son personajes históricos?» trata esa pregunta.'
      ],
      pensar: 'Dios anunció a Abram cuatrocientos años de espera antes de cumplir la promesa de la tierra (Gn 15:13-16). ¿Qué te enseña esa paciencia de Dios sobre las promesas que todavía esperas?'
    },
    {
      id: 'creciente', n: 'El Creciente Fértil hacia el 2000 a.C.', ref: 'Génesis 11:31; 12:5-6, 10; 15:18-21', fecha: -2100,
      visual: [
        mapa({ view: V.creciente, capas: ['egipto-1900'], lugares: ['ur', 'uruk', 'babilonia', 'mari', 'nuzi', 'ebla', 'haran', 'alepo', 'damasco', 'siquem', 'hebron', 'menfis', 'on'], trazos: [] }, 'El Creciente Fértil'),
        tabla({
          titulo: 'El mundo de Abraham',
          cab: ['Región', 'Hacia el 2000 a.C.', 'En la historia de los patriarcas'],
          filas: [
            ['Sumer (sur de Mesopotamia)', 'Ur, capital de la Tercera Dinastía de Ur; templos, escuelas, comercio por el golfo', 'Ur de los caldeos, ciudad de Taré (Gn 11:31)'],
            ['Alta Mesopotamia y Siria', 'Pueblos amorreos; ciudades como Mari, Harán y Ebla', 'Harán y Padan-aram, tierra de la familia de Abraham'],
            ['Canaán', 'Ciudades pequeñas amuralladas en los valles; pastores en la serranía', 'La tierra prometida (Gn 12:7)'],
            ['Egipto', 'Reino Medio: un solo faraón, obras de riego, comercio con Canaán', 'Refugio en el hambre (Gn 12:10; 42–47)']
          ],
          nota: 'Fechas aproximadas. Los nombres de las regiones son los de la época y los del texto bíblico.'
        })
      ],
      texto: [
        'Los historiadores llaman Creciente Fértil a la franja de tierra cultivable que forma un arco desde el golfo Pérsico, sube por los ríos Tigris y Éufrates, cruza Siria, baja por Canaán y llega hasta el delta del Nilo. Al sur del arco está el desierto de Arabia; al norte, las montañas. Por esa franja pasaban los caminos, los ejércitos, los comerciantes y los pastores. El mapa la muestra, con las ciudades principales de la época de Abraham.',
        { h: 'Un mundo antiguo y civilizado' },
        'Cuando Abraham nació, la escritura ya tenía más de mil años. En Mesopotamia había ciudades con templos escalonados, escuelas de escribas, leyes escritas, contratos, bibliotecas de tablillas de arcilla y un comercio que llegaba hasta la India. Egipto ya había construido las pirámides de Giza, cinco siglos antes. Abraham no era un hombre primitivo: venía de una de las ciudades más desarrolladas del mundo.',
        { h: 'Pueblos en movimiento' },
        'Hacia el 2000 a.C., grandes grupos de pastores que los textos llaman amorreos («los del oeste») se desplazaban por Siria y Mesopotamia, y algunos fundaron reinos en ciudades como Mari y Babilonia. Las tablillas de Mari, en el Éufrates medio, mencionan nombres de personas parecidos a los de la familia de Abraham, y pueblos que vivían entre la ciudad y la estepa. Es el mundo en que se mueve Génesis 11 a 50.',
        { h: 'Canaán entre dos gigantes' },
        'Canaán era una tierra pequeña entre los dos grandes centros del mundo antiguo: Mesopotamia al noreste y Egipto al suroeste. Sus ciudades eran pocas y pequeñas, y la serranía central, donde Abraham levantó sus tiendas, estaba poco poblada. Cuando faltaba la lluvia, la gente bajaba a Egipto, donde el Nilo regaba la tierra cada año sin depender de las nubes. Así lo hicieron Abram (Gn 12:10) y, dos siglos después, Jacob y sus hijos.',
        'Dios eligió para su pueblo una tierra en el cruce de los caminos del mundo, entre los imperios. La Tierra de Israel estudia su geografía con detalle.',
        ir('Ver «Un puente entre continentes» en La tierra de Israel', '../../tierra-de-israel/#panorama/1')
      ],
      pensar: 'Abraham salió de una de las ciudades más avanzadas del mundo para vivir en tiendas. ¿Qué comodidades o seguridades te costaría dejar si Dios te lo pidiera?'
    },
    {
      id: 'ur-haran', n: 'Ur y Harán', ref: 'Génesis 11:27-32; 15:7; Josué 24:2-3; Nehemías 9:7; Hechos 7:2-4', fecha: [-2166, -2091],
      visual: [
        pasos([
          { t: 'Ur de los caldeos, junto al Éufrates, cerca del golfo Pérsico: la ciudad de Taré y de su familia (Gn 11:28).', estado: { view: V.mesop, capas: [], lugares: ['ur', 'uruk', 'babilonia'] } },
          { t: 'Taré sale con Abram, Sarai y Lot rumbo a Canaán, y remonta el Éufrates (Gn 11:31).', estado: { view: V.mesop, capas: [], lugares: ['ur', 'babilonia', 'mari', 'haran'], trazos: ['pt-ur-haran'] } },
          { t: 'Se quedan en Harán, unos 1.000 km al noroeste; allí muere Taré (Gn 11:31-32).', estado: { view: V.mesop, capas: [], lugares: ['ur', 'mari', 'haran', 'r-padan-aram'], trazos: ['pt-ur-haran'] } }
        ], 'De Ur a Harán'),
        foto('../creacion-y-origenes/img/zigurat-ur.jpg', 'El gran zigurat de Ur, en el sur de Irak: una torre escalonada de ladrillo con una gran escalinata central, restaurada en parte', 'El zigurat de Ur, templo del dios luna Nanna, construido hacia el 2100 a.C., en tiempos de Taré.', 'Foto: Hardnfast, CC BY 3.0, Wikimedia Commons')
      ],
      texto: [
        'La historia de Abraham comienza en Ur de los caldeos (Gn 11:28, 31). Ur fue una de las grandes ciudades de Sumer, junto al Éufrates, cerca de donde el río desembocaba entonces en el golfo Pérsico. Hacia el 2100 a.C. era la capital de un reino próspero, con unos 30.000 habitantes, calles, casas de dos pisos, escuelas y un gran zigurat, el templo escalonado del dios luna. La foto muestra lo que queda de él.',
        { h: 'Una familia que servía a otros dioses' },
        'Josué recuerda algo que Génesis no dice: «Vuestros padres habitaron antiguamente al otro lado del río, esto es, Taré, padre de Abraham y de Nacor; y servían a dioses extraños» (Jos 24:2). La familia de Abraham no conocía al Dios verdadero. Esteban dice que el Dios de la gloria apareció a Abraham cuando estaba en Mesopotamia, «antes que morase en Harán» (Hch 7:2). El llamado no fue premio a la piedad de Abraham, sino iniciativa de la gracia de Dios.',
        { h: 'Harán' },
        'Taré salió de Ur con Abram, Sarai y su nieto Lot para ir a Canaán, pero se quedaron en Harán (Gn 11:31). El mapa sigue el camino natural, remontando el Éufrates, unos mil kilómetros. Harán era una ciudad de caravanas en el norte de Mesopotamia, y también un centro del culto a la luna, como Ur. Allí murió Taré, a los 205 años (Gn 11:32). La región alrededor se llama en Génesis Padan-aram, «la llanura de Aram», y allí se quedó a vivir Nacor, hermano de Abram. Isaac y Jacob buscarán esposa en esa misma familia.',
        { posturas: {
          titulo: '¿Dónde estaba Ur de los caldeos?',
          a: { n: 'Ur del sur (Tell el-Muqayyar, Irak)', t: 'Es la identificación más aceptada desde las excavaciones de Leonard Woolley (1922-1934). La ciudad era grande y conocida, y el camino de Ur a Harán sigue el Éufrates. Los «caldeos» son un nombre posterior para el sur de Mesopotamia, que el texto usa para que el lector sepa dónde quedaba.' },
          b: { n: 'Ur del norte (cerca de Urfa, Turquía)', t: 'Una tradición local identifica Ur con Urfa (Şanlıurfa), a unos 40 km de Harán, y algunos estudiosos piensan en otra ciudad llamada Ur en el norte. Así se explicaría por qué la familia se estableció en Harán y llama a esa región «mi tierra» (Gn 24:4).' },
          c: 'Este recurso sigue la primera, que es la más probable. Las dos aceptan que Abraham vino de Mesopotamia y que su familia vivió en Harán, como dicen Génesis y Esteban.'
        } }
      ],
      pensar: 'Dios llamó a Abraham cuando su familia servía a otros dioses. ¿Qué te dice eso sobre tu propio llamado, y sobre las personas que hoy parecen lejos de Dios?'
    },
    {
      id: 'tiendas', n: 'Vida seminómada: tiendas, rebaños y pozos', ref: 'Génesis 12:8; 13:2-7; 18:1-8; 21:25-31; 26:12-22; Hebreos 11:9', fecha: -2050,
      visual: [
        img('../tierra-de-israel/img/tiendas.webp', 'Campamento de tiendas de pelo de cabra negro en una ladera seca de Canaán al atardecer, con rebaños de ovejas y cabras y pastores alrededor', 'Las tiendas de pelo de cabra que Abraham, Isaac y Jacob usaron toda su vida (He 11:9).'),
        tabla({
          titulo: 'Cómo vivían los patriarcas',
          cab: ['Aspecto', 'Qué dice el texto', 'Textos'],
          filas: [
            ['Vivienda', 'Tiendas que se levantaban y se movían con los rebaños', 'Gn 12:8; 13:18; He 11:9'],
            ['Riqueza', 'Ovejas, vacas, asnos, camellos, siervos, plata y oro', 'Gn 12:16; 13:2; 24:35'],
            ['Agua', 'Pozos cavados y disputados con los vecinos', 'Gn 21:25-31; 26:18-22'],
            ['Trabajo', 'Pastoreo y, a veces, siembra', 'Gn 26:12; 37:7'],
            ['Casa', 'Una familia grande con siervos: 318 hombres nacidos en casa de Abram', 'Gn 14:14'],
            ['Culto', 'Altares de piedra en los lugares donde Dios se aparecía', 'Gn 12:7-8; 13:18; 26:25']
          ],
          nota: 'Los patriarcas no eran nómadas del desierto sino seminómadas: se movían con sus rebaños entre las ciudades de Canaán, por la serranía y el Neguev.'
        })
      ],
      texto: [
        'Abraham, Isaac y Jacob vivieron toda su vida en tiendas. La carta a los Hebreos lo destaca: Abraham habitó «como extranjero en la tierra prometida como en tierra ajena, morando en tiendas con Isaac y Jacob» (He 11:9). No compraron casas ni fundaron ciudades. El único terreno que Abraham llegó a poseer fue una cueva para sepultar a su esposa.',
        { h: 'Seminómadas' },
        'No eran beduinos del desierto profundo. Se movían con sus rebaños según las estaciones, entre la serranía central de Canaán y el Neguev, cerca de las ciudades, con las que comerciaban y a veces tenían conflictos. Llegaban a sembrar: Isaac sembró en Gerar y cosechó ciento por uno (Gn 26:12). La tienda típica era de pelo de cabra negro, tejido en franjas, sostenida con postes y cuerdas. La imagen muestra un campamento así.',
        { h: 'La riqueza de un pastor' },
        'La riqueza se contaba en animales y en siervos. Abram «era riquísimo en ganado, en plata y en oro» (Gn 13:2), y su casa era tan grande que pudo armar 318 hombres para rescatar a Lot (Gn 14:14). Sus rebaños y los de Lot llegaron a ser tantos que la tierra no alcanzaba para los dos (Gn 13:6). Un patriarca era como el jefe de un clan: padre, juez, sacerdote de su familia y protector de todos los que vivían bajo sus tiendas.',
        { h: 'El agua' },
        'En una tierra donde no llueve en verano, el agua decidía todo. Los pozos se cavaban hondo, se defendían y se disputaban. Abraham reclamó un pozo que los siervos de Abimelec le habían quitado, y lo selló con un juramento (Gn 21:25-31). Así nació el nombre de Beerseba, que significa «pozo del juramento». Isaac volvió a abrir los pozos de su padre que los filisteos habían cegado, y les puso los mismos nombres (Gn 26:18). La ruta III vuelve a esos pozos.',
        { h: 'Peregrinos' },
        'Las tiendas de los patriarcas no son un detalle pintoresco. Hebreos explica que Abraham vivía así porque «esperaba la ciudad que tiene fundamentos, cuyo arquitecto y constructor es Dios» (He 11:10). Se sabían peregrinos. La tienda era su confesión de fe: lo mejor todavía no había llegado.'
      ],
      pensar: 'Los patriarcas vivieron en tiendas porque esperaban una ciudad mejor. ¿Vives como alguien que está de paso, o como si este mundo fuera tu casa definitiva?'
    },
    {
      id: 'costumbres', n: 'Las costumbres de la época', ref: 'Génesis 15:2-3; 16:1-4; 23:3-20; 25:29-34; 31:19, 30-35; 48:5', fecha: -2000,
      visual: [
        tabla({
          titulo: 'Costumbres de Génesis y documentos antiguos',
          cab: ['Costumbre', 'En Génesis', 'Documentos del mundo antiguo'],
          filas: [
            ['Un siervo como heredero si no hay hijos', 'Eliezer, heredero de Abram (Gn 15:2-3)', 'Contratos de adopción de Nuzi y Mesopotamia'],
            ['La esposa estéril da su sierva al marido', 'Sarai y Agar (Gn 16:1-3); Raquel y Bilha (Gn 30:3)', 'Contratos de matrimonio de Nuzi; leyes de Hammurabi (§ 146)'],
            ['Venta del derecho de primogenitura', 'Esaú lo vende a Jacob (Gn 25:31-33)', 'Un texto de Nuzi registra la venta de una herencia a un hermano'],
            ['Bendición del padre antes de morir', 'Isaac (Gn 27); Jacob (Gn 48–49)', 'Testamentos orales con valor legal'],
            ['Los terafines (ídolos de familia)', 'Raquel los roba a Labán (Gn 31:19)', 'Ídolos domésticos ligados a la familia y quizá a la herencia'],
            ['Compra pública de un terreno', 'Abraham compra Macpela ante los hijos de Het (Gn 23)', 'Contratos de compraventa ante testigos en la puerta de la ciudad']
          ],
          nota: 'Los paralelos son reales, pero varios se discuten: algunos aparecen también en documentos de otros siglos. Ayudan a entender el texto, no a fecharlo con exactitud.'
        }),
        img('img/pt-beni-hasan.webp', 'Un grupo de semitas con vestidos de lana de colores y franjas llega a una aldea egipcia junto al Nilo: hombres con barba y sandalias, mujeres con el cabello sujeto con cintas, niños, asnos cargados con fardos y odres; un escriba egipcio de pelo corto y faldellín blanco los recibe con una tablilla', 'Una familia semita llega a Egipto hacia el 1890 a.C., como la que pintaron los egipcios en la tumba de Jnumhotep en Beni Hasán.')
      ],
      texto: [
        'Algunas escenas de Génesis desconciertan al lector de hoy: Sarai entrega su sierva a Abram para tener un hijo por medio de ella; Esaú vende su primogenitura por un plato de guiso; Raquel roba los ídolos de su padre. Los documentos del mundo antiguo, descubiertos en los siglos XIX y XX, ayudan a entender esas escenas.',
        { h: 'Nuzi, Mari y Hammurabi' },
        'En Nuzi, una ciudad del norte de Mesopotamia, se encontraron miles de tablillas de arcilla con contratos de familia: adopciones, matrimonios, herencias. En Mari, junto al Éufrates, se hallaron unas 20.000 tablillas con cartas y archivos de un reino de la época de los patriarcas. Y las leyes de Hammurabi, rey de Babilonia hacia el 1750 a.C., regulan muchos asuntos de familia. La tabla compara algunas costumbres de Génesis con esos documentos.',
        'Por ejemplo, un contrato de Nuzi establece que si la esposa no tiene hijos, debe dar a su marido una sierva, y los hijos de la sierva serán de la esposa. Es lo que hace Sarai con Agar: «quizá tendré hijos de ella» (Gn 16:2). Otros textos muestran que un hombre sin hijos podía adoptar a un siervo como heredero, como Abram pensaba hacer con Eliezer de Damasco (Gn 15:2-3).',
        { h: 'Lo que estas costumbres no significan' },
        'Que una costumbre fuera legal en su tiempo no significa que Dios la aprobara. Génesis cuenta lo que pasó, no lo que debe hacerse. El arreglo de Sarai con Agar trajo celos, desprecio y una herida en la familia que el texto no esconde (Gn 16:4-6). La poligamia de Jacob produjo rivalidades entre sus esposas y entre sus hijos. La Biblia muestra que los métodos humanos para «ayudar» a Dios a cumplir su promesa siempre terminan mal.',
        { h: 'Una ayuda, no una prueba' },
        'Hace algunas décadas se pensaba que estos paralelos probaban la fecha de los patriarcas. Hoy se sabe que varias de esas costumbres existieron durante muchos siglos, así que no sirven para fechar con exactitud. Su valor es otro: muestran que las escenas de Génesis encajan en el mundo antiguo del segundo milenio antes de Cristo, y no en el de mil años después.',
        { ejercicio: {
          pregunta: '¿Qué enseña Génesis cuando cuenta que Sarai dio a Agar a Abram, según la costumbre de la época?',
          opciones: [
            { t: 'Que Dios aprobaba esa costumbre, porque era legal en aquel tiempo.', ok: false, por_que: 'Génesis cuenta lo que pasó, no lo que debe imitarse. El relato muestra las consecuencias dolorosas de ese arreglo.' },
            { t: 'Que el intento humano de cumplir la promesa por sus propios medios trajo conflicto, aunque Dios cuidó de Agar y de su hijo.', ok: true, por_que: 'El texto muestra los celos y la huida de Agar, y también la misericordia de Dios con ella en el desierto.' },
            { t: 'Que la costumbre no existía y el relato es una invención tardía.', ok: false, por_que: 'Contratos antiguos de Nuzi y las leyes de Hammurabi muestran que esa costumbre sí existía.' }
          ],
          explicacion: 'Las costumbres antiguas explican por qué Sarai actuó así, pero la Biblia no las presenta como modelo. La promesa se cumplió a la manera de Dios, con Isaac.'
        } }
      ],
      pensar: 'Sarai quiso ayudar a Dios a cumplir su promesa con un recurso de su época. ¿En qué área de tu vida estás tentado a forzar con tus propios medios lo que Dios prometió hacer?'
    },
    {
      id: 'historicos', n: '¿Son personajes históricos?', ref: 'Génesis 14:1; 26:1; 37:25; Mateo 8:11; 22:31-32; Lucas 16:22-31; Juan 8:56-58', fecha: -2000,
      visual: [
        tabla({
          titulo: 'Tres objeciones y sus respuestas',
          cab: ['Objeción', 'Respuesta'],
          filas: [
            ['«No hay inscripciones que mencionen a Abraham»', 'Era el jefe de un clan de pastores, no un rey: casi nunca quedan rastros escritos de personas así. La falta de evidencia no prueba que no existiera.'],
            ['«Los camellos no estaban domesticados en tiempos de Abraham»', 'Hay huesos, figuras y textos que muestran camellos domésticos en el segundo milenio a.C., aunque eran pocos y caros: por eso Génesis los cuenta como riqueza (Gn 12:16; 24:10).'],
            ['«Los filisteos llegaron a Canaán hacia el 1175 a.C.»', 'Los «filisteos» de Gerar (Gn 26:1) eran un grupo anterior y distinto de los de la época de los jueces: tenían un rey con nombre semita y hacían pactos, no guerras. Pudieron ser pueblos del mar llegados antes, o el texto los llamó con el nombre que el lector conocía.'],
            ['«Génesis se escribió mil años después, con varias fuentes»', 'La teoría documental de Wellhausen (1878) dividió el Pentateuco en fuentes del siglo X al V a.C. Hoy muchos estudiosos la cuestionan. Jesús y los apóstoles atribuyen la ley a Moisés, que pudo usar registros y relatos de familia transmitidos con cuidado.']
          ],
          nota: 'Las objeciones se presentan con las respuestas que dan los estudiosos que aceptan la historicidad de Génesis.'
        })
      ],
      texto: [
        'Desde el siglo XIX, muchos estudiosos han dicho que Abraham, Isaac y Jacob no existieron, o que son figuras legendarias que representan tribus, creadas mucho después para dar a Israel un origen glorioso. Es una pregunta seria, porque toda la Biblia se apoya en que Dios hizo promesas reales a personas reales.',
        { h: 'Lo que dice la Escritura' },
        'Jesús habló de los patriarcas como personas reales: «vendrán muchos del oriente y del occidente, y se sentarán con Abraham e Isaac y Jacob en el reino de los cielos» (Mt 8:11). Para probar la resurrección, citó que Dios se presentó a Moisés como el Dios de Abraham, de Isaac y de Jacob, y concluyó: «Dios no es Dios de muertos, sino de vivos» (Mt 22:32). Si Abraham no hubiera existido, el argumento de Jesús no tendría sentido. Y Jesús dijo de sí mismo: «Abraham vuestro padre se gozó de que había de ver mi día» (Jn 8:56). Pablo basa la doctrina de la justificación por la fe en lo que pasó con Abraham antes de la circuncisión (Ro 4:10). Este recurso presenta a los patriarcas como personas históricas.',
        { h: 'Las objeciones' },
        'La tabla reúne tres objeciones frecuentes y las respuestas de los estudiosos que aceptan la historicidad de Génesis. Ninguna objeción prueba que los relatos sean inventados. Al contrario, muchos detalles encajan bien en el mundo del segundo milenio antes de Cristo: los nombres de personas, que se parecen a los de los textos de Mari; el precio de un esclavo, veinte piezas de plata, que es el que se pagaba en esa época (Gn 37:28); los contratos de familia; los viajes entre Mesopotamia, Canaán y Egipto; y la imagen de semitas que bajan a Egipto, pintada en Beni Hasán hacia el 1890 a.C.',
        { h: 'Un relato que no esconde nada' },
        'Hay otro argumento. Una leyenda inventada para honrar a los antepasados de un pueblo los habría presentado como héroes sin falta. Génesis hace lo contrario: cuenta las mentiras de Abraham, el favoritismo de Isaac, los engaños de Jacob, la violencia de Simeón y Leví, el pecado de Judá y la crueldad de los hermanos de José. Es el retrato honesto de una familia real, a la que Dios fue fiel a pesar de todo.',
        { ejercicio: {
          pregunta: '¿Por qué importa que Abraham haya sido una persona real?',
          opciones: [
            { t: 'Porque el Nuevo Testamento basa en él enseñanzas centrales, como la justificación por la fe y la resurrección.', ok: true, por_que: 'Pablo argumenta desde lo que le pasó a Abraham (Ro 4), y Jesús argumenta la resurrección desde que Dios es el Dios de Abraham (Mt 22:32).' },
            { t: 'No importa: lo valioso es el ejemplo moral de la historia, aunque no haya ocurrido.', ok: false, por_que: 'La fe bíblica descansa en lo que Dios hizo y prometió de verdad en la historia, no en relatos simbólicos.' },
            { t: 'Porque hay inscripciones de la época que mencionan su nombre.', ok: false, por_que: 'No se conocen inscripciones con su nombre. Su historicidad se apoya en la Escritura y en que los relatos encajan en su época.' }
          ],
          explicacion: 'Las promesas de Dios a Abraham son el fundamento de la historia de la salvación. Si no fueron reales, tampoco lo sería su cumplimiento en Cristo.'
        } }
      ],
      pensar: 'Génesis no esconde los pecados de los patriarcas. ¿Te da esperanza saber que Dios cumplió sus promesas con personas tan imperfectas como tú?'
    }
  ];

  /* ---------------- II. Abraham ---------------- */
  const abraham = [
    {
      id: 'llamado', n: 'El llamado: deja tu tierra', ref: 'Génesis 12:1-5; Hechos 7:2-4; Hebreos 11:8; Isaías 51:2', fecha: -2091,
      visual: [
        img('../tierra-de-israel/img/caravana.webp', 'Una caravana de pastores con camellos y asnos cargados y rebaños de ovejas avanza por una llanura seca hacia el sur al amanecer', '«Y salieron para ir a tierra de Canaán; y a tierra de Canaán llegaron» (Génesis 12:5).'),
        { tipo: 'hebreo', titulo: 'Génesis 12:1', ref: 'Génesis 12:1', he: '@@wlc:gn/12/1', tr: 'Vayómer Adonái el-Avram: lej-lejá meartsejá umimoladetjá umibet avíja el-haárets ashér arecka.',
          palabras: [
            { he: 'וַיֹּאמֶר', tr: 'vayómer', es: 'y dijo' },
            { he: 'יְהוָה', tr: 'Adonái', es: 'Jehová' },
            { he: 'אֶל־אַבְרָם', tr: 'el-Avram', es: 'a Abram' },
            { he: 'לֶךְ־לְךָ', tr: 'lej-lejá', es: 'vete tú' },
            { he: 'מֵאַרְצְךָ', tr: 'meartsejá', es: 'de tu tierra' },
            { he: 'וּמִמּוֹלַדְתְּךָ', tr: 'umimoladetjá', es: 'y de tu parentela' },
            { he: 'וּמִבֵּית', tr: 'umibet', es: 'y de la casa de' },
            { he: 'אָבִיךָ', tr: 'avíja', es: 'tu padre' },
            { he: 'אֶל־הָאָרֶץ', tr: 'el-haárets', es: 'a la tierra' },
            { he: 'אֲשֶׁר', tr: 'ashér', es: 'que' },
            { he: 'אַרְאֶךָּ', tr: 'arecka', es: 'te mostraré' }
          ],
          rv: 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré.' }
      ],
      texto: [
        '«Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré» (Gn 12:1). El llamado de Dios pide tres renuncias, cada una más cercana al corazón: la tierra, la parentela y la casa del padre. Y no dice adónde. Hebreos lo resume: «salió sin saber a dónde iba» (He 11:8).',
        { h: '«Vete tú»' },
        'La pestaña de hebreo muestra el versículo palabra por palabra. La orden es lej-lejá, literalmente «vete tú» o «vete por ti». La misma expresión aparece una sola vez más en Génesis, cuando Dios le pide a Abraham que vaya a la tierra de Moriah con Isaac (Gn 22:2). La vida de fe de Abraham queda enmarcada entre esos dos «vete»: el primero le pide dejar su pasado; el segundo, entregar su futuro.',
        { h: 'Siete promesas' },
        'Junto con la orden vienen las promesas: «Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición» (Gn 12:2). Dios bendecirá a los que lo bendigan y maldecirá a los que lo maldigan, y en él serán benditas todas las familias de la tierra (Gn 12:3). Abram tenía 75 años y una esposa estéril, pero Dios le promete una nación. Cuando llegue a Canaán, Dios agregará la promesa de la tierra (Gn 12:7). Tierra, descendencia y bendición: son las tres promesas que se desarrollan en toda la Biblia.',
        { h: 'Y se fue Abram' },
        'La respuesta es breve: «Y se fue Abram, como Jehová le dijo» (Gn 12:4). No hay discusión ni condiciones. Salió de Harán con Sarai, con Lot, con los bienes que habían ganado y con «las personas que habían adquirido en Harán» (Gn 12:5), es decir, sus siervos. Los antiguos intérpretes judíos vieron en esa frase también a las personas que Abram había ganado para el Dios verdadero. Isaías recordará a Israel que Dios llamó a Abraham cuando era uno solo, y lo bendijo y lo multiplicó (Is 51:2).',
        { h: '¿En Ur o en Harán?' },
        'Génesis cuenta la orden después de la muerte de Taré en Harán, pero el verbo puede leerse «había dicho», como traduce la Reina-Valera. Esteban aclara que Dios se le apareció a Abraham en Mesopotamia, antes de que viviera en Harán (Hch 7:2). Abram recibió el llamado en Ur, comenzó a obedecerlo con su padre y lo terminó de obedecer en Harán, cuando salió solo con los suyos.',
        ir('Ver «Abraham: las promesas» en Pactos y dispensaciones', '../../pactos-y-dispensaciones/#pactos/3')
      ],
      pensar: 'Dios le pidió a Abram salir sin decirle adónde. ¿Qué paso de obediencia estás postergando porque todavía no ves el camino completo?'
    },
    {
      id: 'siquem-betel', n: 'Siquem y Betel: altares en la tierra', ref: 'Génesis 12:6-9; 13:3-4; Hebreos 11:9-10', fecha: -2091,
      visual: [
        pasos([
          { t: 'De Harán, Abram baja hacia Canaán por los caminos de Siria, pasando probablemente por Alepo y Damasco (Gn 12:5).', estado: { view: V.ur_canaan, capas: [], lugares: ['ur', 'haran', 'alepo', 'damasco', 'siquem'], trazos: ['pt-ur-haran', 'pt-haran-canaan'] } },
          { t: 'Siquem, en el corazón de la serranía, junto al encino de More: Dios promete la tierra y Abram edifica su primer altar (Gn 12:6-7).', estado: { view: V.centro, capas: [], lugares: ['siquem', 'betel', 'hai'], trazos: ['pt-haran-canaan'] } },
          { t: 'Entre Betel y Hai, Abram planta su tienda, edifica otro altar e invoca el nombre de Jehová (Gn 12:8).', estado: { view: V.centro, capas: [], lugares: ['siquem', 'betel', 'hai', 'hebron'], trazos: ['pt-canaan-sur'] } },
          { t: 'Luego parte «caminando y yendo hacia el Neguev», el sur seco de Canaán (Gn 12:9).', estado: { view: V.canaan, capas: [], lugares: ['siquem', 'betel', 'hebron', 'beerseba', 'r-neguev'], trazos: ['pt-canaan-sur'] } }
        ], 'Abram en Canaán'),
        img('../tierra-de-israel/img/abraham.webp', 'Abraham, anciano, de pie en una colina rocosa cerca de Betel al atardecer, apoyado en su cayado, mirando sobre los montes y valles de Canaán; sus tiendas y rebaños abajo', 'Entre Betel y Hai, Abram levantó su tienda y un altar (Génesis 12:8).')
      ],
      texto: [
        'Abram entró en Canaán desde el norte y llegó hasta Siquem, «hasta el encino de More» (Gn 12:6). Siquem estaba en un valle estrecho entre dos montes, Ebal y Gerizim, en el centro de la serranía, donde se cruzaban los caminos. Era un lugar conocido: el encino de More, «del maestro», pudo ser un árbol donde se daban oráculos. El texto agrega un dato inquietante: «el cananeo estaba entonces en la tierra». La tierra prometida no estaba vacía.',
        { h: '«A tu descendencia daré esta tierra»' },
        'Allí, en medio de una tierra ocupada, Dios se le apareció a Abram y le dijo: «A tu descendencia daré esta tierra» (Gn 12:7). Es la primera vez que Dios promete la tierra de manera explícita. Abram no tenía hijos ni un metro de terreno. Su respuesta fue edificar un altar. En el mismo lugar donde los cananeos tenían su árbol sagrado, Abram levantó un altar al Dios verdadero.',
        { h: 'Entre Betel y Hai' },
        'Después se trasladó a un monte al oriente de Betel, plantó su tienda con Betel al occidente y Hai al oriente, y «edificó allí altar a Jehová, e invocó el nombre de Jehová» (Gn 12:8). El mapa sigue el recorrido. Betel quedaba unos 30 kilómetros al sur de Siquem, en la cresta de la serranía, desde donde se ve hacia el valle del Jordán. Será un lugar central en la historia de los patriarcas: Abram volverá aquí después de Egipto (Gn 13:3-4), y Jacob verá aquí la escalera que llega al cielo.',
        { h: 'Una tienda y un altar' },
        'Abram se movía por la tierra con dos cosas: su tienda y sus altares. La tienda mostraba que era peregrino; el altar, que adoraba a Dios donde estuviera. Los lugares donde levantó altares, Siquem, Betel y Hebrón, eran los mismos donde Israel se establecería siglos después. Abram iba marcando la tierra con la adoración al Dios que se la había prometido. Después siguió «caminando y yendo hacia el Neguev» (Gn 12:9), la región seca del sur.',
        { posturas: {
          titulo: '¿Qué significa «el cananeo estaba entonces en la tierra»?',
          a: { n: 'Una nota de Moisés para sus lectores', t: 'Moisés escribía para una generación que estaba por entrar a Canaán. La frase recuerda que la tierra ya estaba ocupada cuando Dios la prometió a Abram, y que la promesa se cumpliría a su tiempo (Gn 15:16).' },
          b: { n: 'Una nota de un editor posterior', t: 'Algunos ven en la frase una aclaración agregada cuando ya no había cananeos en la tierra, es decir, después de la conquista. Quienes aceptan la autoría de Moisés admiten que pudo haber pequeñas notas de este tipo, sin que eso cambie el relato.' },
          c: 'La primera lectura encaja con el sentido de la frase: los cananeos estaban «entonces», en el tiempo de Abram, y la tierra le fue prometida igual.'
        } }
      ],
      pensar: 'Abram levantaba un altar en cada lugar donde Dios le hablaba. ¿Qué lugares de tu vida, tu casa, tu trabajo o tu barrio están marcados por la adoración a Dios?'
    },
    {
      id: 'egipto', n: 'El descenso a Egipto', ref: 'Génesis 12:10-20; 13:1-4; 20:1-18', fecha: -2090,
      visual: [
        pasos([
          { t: 'Hay hambre en Canaán, y Abram desciende del Neguev a Egipto (Gn 12:10).', estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['hebron', 'beerseba', 'gaza', 'pelusio', 'gosen', 'menfis'], trazos: ['pt-egipto'] } },
          { t: 'Después de la reprensión del faraón, Abram sube de Egipto «hacia el Neguev» y vuelve hasta Betel, al lugar del altar (Gn 13:1-4).', estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['menfis', 'gosen', 'beerseba', 'hebron', 'betel'], trazos: ['pt-egipto-vuelta'] } }
        ], 'De Canaán a Egipto'),
        img('img/pt-faraon-sarai.webp', 'En la sala de columnas de un palacio egipcio, un faraón del Reino Medio, con tocado de rayas azul y oro y faldellín blanco, señala con enojo a Abram, que baja la cabeza; a su lado Sarai, hermosa, con un velo de lino y vestido de lana, recibe de vuelta su manto; cortesanos egipcios observan', '«¿Qué es esto que has hecho conmigo? ¿Por qué no me declaraste que era tu mujer?» (Génesis 12:18).')
      ],
      texto: [
        'Abram acababa de recibir la promesa de la tierra, y la tierra le falló: «Hubo entonces hambre en la tierra, y descendió Abram a Egipto para morar allá» (Gn 12:10). Canaán dependía de la lluvia, y cuando la lluvia faltaba, el hambre llegaba pronto. Egipto, en cambio, vivía del Nilo, que se desbordaba cada año. El mapa muestra el camino por la costa, unos 300 kilómetros.',
        { h: 'Una media verdad' },
        'Al acercarse a Egipto, Abram tuvo miedo. Sarai era hermosa, y pensó que los egipcios lo matarían para quedarse con ella. Le pidió: «Ahora, pues, di que eres mi hermana, para que me vaya bien por causa tuya» (Gn 12:13). Era una media verdad: Sarai era hija de su padre, pero no de su madre (Gn 20:12). Pero una media verdad dicha para engañar es una mentira. Los príncipes del faraón alabaron a Sarai, ella fue llevada al palacio, y Abram recibió ovejas, vacas, asnos, siervos y camellos.',
        { h: 'Dios protege la promesa' },
        'El hombre que había salido de Ur por fe ahora ponía en riesgo a la madre de la descendencia prometida. Pero Dios intervino: «Jehová hirió a Faraón y a su casa con grandes plagas, por causa de Sarai» (Gn 12:17). El faraón reprendió a Abram con palabras justas y lo despidió. Es una escena vergonzosa: el pagano tiene que corregir al hombre de Dios. Y es también una escena de gracia: Dios protegió su promesa cuando Abram no lo hizo.',
        { h: 'Volver al altar' },
        'Abram subió de Egipto al Neguev, rico en ganado, plata y oro, y volvió «hasta el lugar donde había estado antes su tienda entre Bet-el y Hai, al lugar del altar que había hecho allí antes; e invocó allí Abram el nombre de Jehová» (Gn 13:3-4). Volvió al punto donde se había desviado. En Egipto no se menciona ningún altar.',
        'El relato anticipa la historia de Israel: un hambre en Canaán, una bajada a Egipto, plagas sobre el faraón y una salida con riquezas. Lo que le pasó a Abram le pasaría a su descendencia en el Éxodo. Y el error se repitió: años después, Abraham volvió a decir lo mismo de Sarai en Gerar (Gn 20), y su hijo Isaac haría lo mismo con Rebeca (Gn 26:7).',
        ir('Ver «Abraham y José» en Egipto', '../../egipto/#biblia/1')
      ],
      pensar: 'Abram tuvo miedo justo después de recibir grandes promesas. ¿En qué situación de presión te has sentido tentado a usar una media verdad para protegerte?'
    },
    {
      id: 'lot', n: 'Abram y Lot se separan', ref: 'Génesis 13:5-18; 2 Pedro 2:7-8', fecha: -2088,
      visual: [
        pasos([
          { t: 'Desde el monte al oriente de Betel se ve la llanura del Jordán, verde y regada (Gn 13:10).', estado: { view: V.centro, capas: [], lugares: ['betel', 'hai', 'jerico'] } },
          { t: 'Lot elige la llanura y pone sus tiendas hasta Sodoma (Gn 13:11-12).', estado: { view: V.canaan, capas: [], lugares: ['betel', 'jerico', 'r-sodoma-sur', 'r-zoar'], trazos: ['pt-lot'] } },
          { t: 'Abram se queda en la serranía y se establece en el encinar de Mamre, en Hebrón (Gn 13:18).', estado: { view: V.canaan, capas: [], lugares: ['betel', 'mamre', 'hebron', 'r-sodoma-sur'], trazos: ['pt-lot', 'pt-abram-hebron'] } }
        ], 'Lot y Abram'),
        cita('Génesis 13:8-11', '@@gn/13/8-11')
      ],
      texto: [
        'La riqueza trajo un problema. Abram y su sobrino Lot tenían tantas ovejas, vacas y tiendas que la tierra no alcanzaba para los dos, y comenzaron las peleas entre sus pastores. El texto agrega: «el cananeo y el ferezeo habitaban entonces en la tierra» (Gn 13:7). Dos familias de creyentes peleando por pasto delante de los vecinos paganos.',
        { h: 'La generosidad de Abram' },
        'Abram era el mayor y el jefe del clan; podía elegir primero. Pero dijo: «No haya ahora altercado entre nosotros dos, entre mis pastores y los tuyos, porque somos hermanos» (Gn 13:8). Y le ofreció a Lot la tierra entera para que eligiera: «Si fueres a la mano izquierda, yo iré a la derecha» (Gn 13:9). Abram podía ser generoso porque la tierra no dependía de lo que Lot eligiera, sino de lo que Dios había prometido.',
        { h: 'La elección de Lot' },
        'Lot alzó los ojos y vio la llanura del Jordán, «que toda ella era de riego… como el huerto de Jehová, como la tierra de Egipto» (Gn 13:10). Desde los montes de Betel se ve el valle del Jordán, mucho más bajo, y antes de la destrucción de Sodoma la llanura junto al mar Salado tenía agua y vegetación. Lot eligió con los ojos: buen pasto, cerca de ciudades. Fue poniendo sus tiendas «hasta Sodoma» (Gn 13:12), y el narrador advierte: «los hombres de Sodoma eran malos y pecadores contra Jehová en gran manera» (Gn 13:13). Primero acampó cerca; después viviría dentro de la ciudad (Gn 14:12; 19:1).',
        { h: 'Alza tus ojos' },
        'Cuando Lot se fue, Dios le habló a Abram: «Alza ahora tus ojos, y mira desde el lugar donde estás hacia el norte y el sur, y al oriente y al occidente» (Gn 13:14). Lot había alzado los ojos para elegir; Abram los alza para recibir. Dios le promete toda la tierra que ve, para él y su descendencia, y una descendencia como el polvo de la tierra. Y lo invita a recorrerla a lo largo y a lo ancho. Abram se trasladó al encinar de Mamre, en Hebrón, y edificó allí un altar (Gn 13:18). Hebrón será su residencia principal.',
        'Pedro llama a Lot «justo» y dice que vivía afligido por la conducta de los malvados de Sodoma (2 P 2:7-8). Lot no era un incrédulo, pero eligió un lugar que lo fue alejando de Dios y que le costó casi todo.'
      ],
      pensar: 'Lot eligió con los ojos y terminó viviendo en Sodoma. ¿Qué criterios usas para elegir dónde vivir, dónde trabajar o con quién relacionarte?'
    },
    {
      id: 'melquisedec', n: 'La guerra de los reyes y Melquisedec', ref: 'Génesis 14:1-24; Salmos 110:4; Hebreos 7:1-17', fecha: -2085,
      visual: [
        pasos([
          { t: 'Cuatro reyes del oriente bajan por el camino del rey, al oriente del Jordán, y vencen a los pueblos hasta El-parán (Gn 14:5-7).', estado: { view: V.transjordania, capas: [], lugares: ['damasco', 'r-sodoma-sur', 'r-zoar', 'cades-barnea'], trazos: ['pt-reyes'] } },
          { t: 'Derrotan a los cinco reyes en el valle de Sidim, saquean Sodoma y se llevan a Lot (Gn 14:8-12).', estado: { view: V.transjordania, capas: [], lugares: ['r-sodoma-sur', 'r-zoar', 'mamre'], trazos: ['pt-reyes'] } },
          { t: 'Abram persigue a los reyes con 318 hombres hasta Dan, los ataca de noche y los sigue hasta Hoba, al norte de Damasco (Gn 14:14-15).', estado: { view: V.norte, capas: [], lugares: ['mamre', 'betel', 'siquem', 'dan', 'damasco', 'r-hoba'], trazos: ['pt-rescate'] } },
          { t: 'Al volver, en el valle de Save, Melquisedec, rey de Salem, sale a recibirlo con pan y vino (Gn 14:17-18).', estado: { view: V.norte, capas: [], lugares: ['r-hoba', 'dan', 'siquem', 'salem'], trazos: ['pt-rescate-vuelta'] } }
        ], 'La guerra de los reyes'),
        img('../sacerdocio/img/sac-melquisedec.webp', 'En el valle, al regreso de una batalla, Melquisedec, rey de Salem y sacerdote, sale al encuentro de Abram con pan y vino y lo bendice, mientras los hombres de Abram descansan', '«Entonces Melquisedec, rey de Salem y sacerdote del Dios Altísimo, sacó pan y vino» (Génesis 14:18).')
      ],
      texto: [
        'Génesis 14 es distinto de los capítulos que lo rodean. Habla de reyes, ejércitos y campañas, con nombres de lugares y pueblos. Cuatro reyes del oriente, encabezados por Quedorlaomer, rey de Elam, habían sometido durante doce años a cinco ciudades de la llanura del Jordán, entre ellas Sodoma y Gomorra. En el año trece se rebelaron, y al siguiente los reyes del oriente vinieron a castigarlas (Gn 14:1-4).',
        { h: 'Una campaña por el camino del rey' },
        'El mapa sigue la campaña. Los reyes bajaron por el oriente del Jordán, por el camino que después se llamaría «del rey», venciendo a los pueblos de la región hasta el desierto, y volvieron hacia el mar Salado. En el valle de Sidim, lleno de pozos de asfalto, derrotaron a los cinco reyes, saquearon Sodoma y Gomorra y se llevaron a Lot con sus bienes (Gn 14:10-12).',
        { h: 'Abram el hebreo' },
        'Un fugitivo avisó a «Abram el hebreo» (Gn 14:13), la primera vez que la Biblia usa esa palabra. Abram armó a 318 criados nacidos en su casa, se unió a sus aliados amorreos y persiguió a los reyes hasta Dan, en el extremo norte. Los atacó de noche, los derrotó, los persiguió hasta Hoba, al norte de Damasco, y recuperó todo: a Lot, sus bienes, las mujeres y la gente (Gn 14:14-16). El pastor de Mamre resultó un jefe valiente. No abandonó a su sobrino, aunque Lot lo había dejado.',
        { h: 'Melquisedec' },
        'Al volver, salió a recibirlo un personaje misterioso: «Melquisedec, rey de Salem y sacerdote del Dios Altísimo, sacó pan y vino» (Gn 14:18). Salem es el nombre antiguo de Jerusalén (Sal 76:2). Su nombre significa «rey de justicia», y Salem significa «paz». Bendijo a Abram en nombre del Dios Altísimo, «creador de los cielos y de la tierra», y Abram le dio los diezmos de todo (Gn 14:19-20). Fuera de la familia de Abram, todavía había quien conocía al Dios verdadero.',
        { posturas: {
          titulo: '¿Quién era Melquisedec?',
          a: { n: 'Un rey histórico, figura de Cristo', t: 'Melquisedec fue un rey real de Salem, que adoraba al Dios verdadero. Hebreos dice que fue hecho «semejante al Hijo de Dios» (He 7:3): la Escritura no menciona su genealogía, su nacimiento ni su muerte, y por eso sirve como figura del sacerdocio eterno de Cristo, anunciado en el Salmo 110:4.' },
          b: { n: 'Una aparición de Cristo antes de la encarnación', t: 'Algunos intérpretes piensan que fue el mismo Hijo de Dios, porque Hebreos dice que no tenía padre, ni madre, ni genealogía, y que «permanece sacerdote para siempre» (He 7:3).' },
          c: 'Este recurso sigue la primera lectura. Génesis lo presenta como un rey más de la región, y Hebreos dice que fue «semejante» al Hijo de Dios, no que fuera el Hijo. El silencio sobre su origen es lo que lo convierte en figura.'
        } },
        'Abram no quiso quedarse con nada del rey de Sodoma, «para que no digas: Yo enriquecí a Abram» (Gn 14:23). Recibió la bendición del sacerdote de Dios y rechazó la riqueza del rey de Sodoma.',
        ir('Ver «Melquisedec» en El sacerdocio en Israel', '../../sacerdocio/#cristo/1')
      ],
      pensar: 'Abram rechazó la riqueza del rey de Sodoma para que nadie dijera que otro lo había enriquecido. ¿Hay algún beneficio que deberías rechazar para que se vea que tu provisión viene de Dios?'
    },
    {
      id: 'pacto', n: 'El pacto de Génesis 15: le fue contado por justicia', ref: 'Génesis 15:1-21; Romanos 4:3, 18-22; Gálatas 3:6-9', fecha: -2081,
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 15:6', ref: 'Génesis 15:6', he: '@@wlc:gn/15/6', tr: 'Vehemín badonái vayajshevéha lo tsedacá.',
          palabras: [
            { he: 'וְהֶאֱמִן', tr: 'vehemín', es: 'y creyó' },
            { he: 'בַּיהוָה', tr: 'badonái', es: 'en Jehová' },
            { he: 'וַיַּחְשְׁבֶהָ', tr: 'vayajshevéha', es: 'y se lo contó' },
            { he: 'לּוֹ', tr: 'lo', es: 'a él' },
            { he: 'צְדָקָה', tr: 'tsedacá', es: '(por) justicia' }
          ],
          rv: 'Y creyó a Jehová, y le fue contado por justicia.' },
        img('../pactos-y-dispensaciones/img/abraham-estrellas.webp', 'De noche, fuera de su tienda, Abraham anciano levanta la mirada hacia un cielo cubierto de estrellas sobre las colinas de Canaán', '«Mira ahora los cielos, y cuenta las estrellas, si las puedes contar» (Génesis 15:5).')
      ],
      texto: [
        'Después de la victoria, Abram tuvo miedo, quizá de la venganza de los reyes, y Dios le habló en visión: «No temas, Abram; yo soy tu escudo, y tu galardón será sobremanera grande» (Gn 15:1). Pero Abram respondió con su gran pena: no tenía hijos. Según la costumbre, su heredero sería un siervo, Eliezer de Damasco (Gn 15:2-3).',
        { h: 'Cuenta las estrellas' },
        'Dios le dijo que su heredero sería un hijo suyo. Lo sacó fuera de la tienda, de noche, y le dijo: «Mira ahora los cielos, y cuenta las estrellas, si las puedes contar» (Gn 15:5). Así sería su descendencia. Y entonces viene uno de los versículos más importantes de la Biblia: «Y creyó a Jehová, y le fue contado por justicia» (Gn 15:6). La pestaña de hebreo lo muestra en cinco palabras. Abram no hizo una obra: creyó. Y Dios le contó esa fe como justicia, como si hubiera depositado en su cuenta algo que él no tenía.',
        'Pablo construye sobre este versículo su enseñanza de la justificación por la fe. Abraham fue declarado justo antes de ser circuncidado y siglos antes de la ley; por eso es padre de todos los que creen, judíos y gentiles (Ro 4:9-12). Y su fe no era ingenua: consideró su cuerpo, que estaba ya como muerto, y la esterilidad de Sara, «tampoco dudó, por incredulidad, de la promesa de Dios» (Ro 4:20).',
        { h: 'El horno y la antorcha' },
        'Abram preguntó cómo sabría que heredaría la tierra, y Dios respondió con una ceremonia de pacto que en el mundo antiguo todos entendían. Abram partió por la mitad una becerra, una cabra y un carnero, y puso las mitades en dos filas. Al ponerse el sol, cayó sobre él un sueño profundo, y Dios le anunció el futuro: su descendencia sería extranjera y esclava en tierra ajena cuatrocientos años, y en la cuarta generación volvería, porque «aún no ha llegado a su colmo la maldad del amorreo» (Gn 15:16). Entonces un horno humeante y una antorcha de fuego pasaron entre los animales divididos (Gn 15:17).',
        'En los tratados antiguos, quien pasaba entre los animales partidos se comprometía a morir como ellos si no cumplía. Aquí solo pasa Dios. Abram duerme. El pacto descansa en la fidelidad de Dios, no en la de Abram. Ese día Dios fijó los límites de la tierra, «desde el río de Egipto hasta el río grande, el río Eufrates» (Gn 15:18). Pactos y dispensaciones estudia esta ceremonia en detalle.',
        ir('Ver «Abraham: la ceremonia de Génesis 15» en Pactos y dispensaciones', '../../pactos-y-dispensaciones/#pactos/4'),
        ir('Leer Génesis 15:6 en el interlineal hebreo', '../../interlineal-hebreo/#gn/15/6')
      ],
      pensar: 'Dios le contó a Abram su fe como justicia. ¿Descansas en lo que Cristo hizo por ti, o todavía intentas ganarte la aceptación de Dios con lo que haces?'
    },
    {
      id: 'agar', n: 'Agar e Ismael: el Dios que me ve', ref: 'Génesis 16:1-16; 21:8-21; Gálatas 4:22-31', fecha: -2080,
      visual: [
        pasos([
          { t: 'Agar, maltratada por Sarai, huye de Mamre hacia el sur, por el camino de Shur, rumbo a Egipto (Gn 16:6-7).', estado: { view: V.sur, capas: [], lugares: ['mamre', 'hebron', 'beerseba', 'r-beer-lahai-roi', 'cades-barnea'], trazos: ['pt-agar'] } },
          { t: 'Junto a una fuente en el desierto, el ángel de Jehová la encuentra. Ella llama al pozo Beer-lahai-roi, «pozo del Viviente que me ve» (Gn 16:13-14).', estado: { view: V.sur, capas: [], lugares: ['r-beer-lahai-roi', 'cades-barnea', 'beerseba'], trazos: ['pt-agar'] } }
        ], 'La huida de Agar'),
        img('img/pt-agar-fuente.webp', 'Agar, joven egipcia de piel morena con vestido de lino claro y velo pardo, sentada sola junto a una fuente en el desierto del Neguev, con la cabeza levantada hacia una luz que no se ve; a su lado un odre y un cántaro', '«Tú eres Dios que ve» (Génesis 16:13).')
      ],
      texto: [
        'Pasaron diez años en Canaán y Sarai seguía sin hijos. Entonces propuso lo que la costumbre de la época permitía: «te ruego, pues, que te llegues a mi sierva; quizá tendré hijos de ella» (Gn 16:2). Su sierva era Agar, una egipcia, quizá recibida en el viaje a Egipto. Abram aceptó. La promesa era que tendría un hijo, y parecía razonable buscarlo por un camino conocido.',
        { h: 'Celos y huida' },
        'Agar concibió, y comenzó a mirar con desprecio a su señora. Sarai culpó a Abram, Abram se desentendió, y Sarai la afligió hasta que Agar huyó (Gn 16:4-6). Nadie sale bien parado: el arreglo humano para cumplir la promesa de Dios dividió a la familia. Agar tomó el camino de Shur, que iba del sur de Canaán hacia Egipto, su tierra.',
        { h: 'El Dios que ve' },
        'En el desierto, junto a una fuente, la encontró el ángel de Jehová. Es la primera vez que la Biblia lo menciona, y se le aparece a una esclava extranjera embarazada que huye. Le pregunta de dónde viene y adónde va, le pide que vuelva y le promete una descendencia que no se podrá contar. Su hijo se llamará Ismael, «Dios oye», «porque Jehová ha oído tu aflicción» (Gn 16:11). Agar, asombrada, dio un nombre a Dios: «Tú eres Dios que ve» (Gn 16:13). El pozo se llamó Beer-lahai-roi, «pozo del Viviente que me ve». Es la única persona en la Biblia que le da un nombre a Dios.',
        { h: 'Ismael' },
        'Ismael nació cuando Abram tenía 86 años (Gn 16:16). Trece años después, Dios le dijo a Abraham que el hijo de la promesa no sería Ismael, sino un hijo de Sara. Abraham rogó: «Ojalá Ismael viva delante de ti» (Gn 17:18), y Dios le respondió que también lo bendeciría y haría de él una gran nación, padre de doce príncipes (Gn 17:20; 25:12-16). Cuando nació Isaac, Agar e Ismael fueron despedidos, y de nuevo, en el desierto de Beerseba, cuando el agua se acabó, Dios oyó la voz del muchacho y abrió los ojos de Agar para que viera un pozo (Gn 21:17-19).',
        'Pablo usará esta historia como una alegoría: Agar representa el pacto del Sinaí, que engendra para esclavitud, y Sara el pacto de la promesa, que da libertad (Gá 4:22-26). La diferencia no está en las personas, sino en el camino: el hijo de la carne nació por esfuerzo humano; el de la promesa, por el poder de Dios.',
        ir('Ver «El ángel de Jehová» en La persona y obra de Cristo', '../../persona-y-obra-de-cristo/#antes/3')
      ],
      pensar: 'Dios vio a una esclava extranjera que huía sola por el desierto. ¿Hay alguien a tu alrededor que se siente invisible y a quien Dios quiere que tú también veas?'
    },
    {
      id: 'mamre', n: 'Mamre: visita e intercesión', ref: 'Génesis 17:1-8, 15-19; 18:1-33; Hebreos 13:2; Santiago 2:23', fecha: -2067,
      visual: [
        img('img/pt-mamre.webp', 'Al mediodía, junto a un gran encino en Mamre, Abraham anciano se inclina hasta el suelo ante tres visitantes vestidos de blanco que llegan a pie, mientras Sara observa desde la entrada de una tienda de pelo de cabra negro', '«Y alzó sus ojos y miró, y he aquí tres varones que estaban junto a él» (Génesis 18:2).'),
        cita('Génesis 18:23-26', '@@gn/18/23-26')
      ],
      texto: [
        'Abram tenía 99 años cuando Dios se le apareció y le dijo: «Yo soy el Dios Todopoderoso; anda delante de mí y sé perfecto» (Gn 17:1). Le cambió el nombre: ya no sería Abram, «padre enaltecido», sino Abraham, «padre de muchedumbre de gentes» (Gn 17:5). A Sarai la llamó Sara, «princesa». Le dio la circuncisión como señal del pacto y le anunció que Sara tendría un hijo dentro de un año, y que se llamaría Isaac (Gn 17:19-21). Abraham se rió, y Pactos y dispensaciones estudia ese capítulo.',
        { h: 'Tres visitantes' },
        'Poco después, en el encinar de Mamre, Abraham estaba sentado a la puerta de su tienda en el calor del día, alzó los ojos y vio a tres hombres (Gn 18:1-2). Corrió a recibirlos, se postró y les ofreció lo mejor: agua para los pies, sombra bajo el árbol, panes recién hechos, un becerro tierno, mantequilla y leche. La hospitalidad era sagrada en el mundo de los pastores, y Abraham la practicó en grande. Hebreos recuerda que «por ella algunos, sin saberlo, hospedaron ángeles» (He 13:2). Dos de los visitantes eran ángeles; el tercero, el mismo Jehová (Gn 18:13, 22).',
        { h: '¿Hay para Dios alguna cosa difícil?' },
        'Uno de ellos anunció que al año siguiente Sara tendría un hijo. Sara, detrás de la puerta de la tienda, se rió por dentro: tenía unos noventa años y había dejado de tener la costumbre de las mujeres. El Señor respondió con una pregunta que atraviesa toda la Biblia: «¿Hay para Dios alguna cosa difícil?» (Gn 18:14).',
        { h: 'El amigo que intercede' },
        'Los visitantes se fueron hacia Sodoma, y Dios decidió contarle a Abraham lo que iba a hacer: el clamor contra Sodoma y Gomorra era grande, y su pecado muy grave. Abraham se quedó delante de Jehová y comenzó a interceder. «¿Destruirás también al justo con el impío?» (Gn 18:23). Preguntó si Dios perdonaría la ciudad por cincuenta justos, después por cuarenta y cinco, cuarenta, treinta, veinte y diez. Cada vez Dios dijo que sí. Abraham apeló a la justicia de Dios: «El Juez de toda la tierra, ¿no ha de hacer lo que es justo?» (Gn 18:25).',
        'Santiago llama a Abraham «amigo de Dios» (Stg 2:23). Así trata Dios a un amigo: le cuenta sus planes. Y así responde un amigo de Dios: intercede por otros, aun por una ciudad perversa donde vive su sobrino. La intercesión de Abraham no salvó a Sodoma, porque no había diez justos, pero Dios «se acordó de Abraham, y envió fuera a Lot» (Gn 19:29).',
        ir('Ver «Abraham: la circuncisión y los herederos» en Pactos y dispensaciones', '../../pactos-y-dispensaciones/#pactos/5')
      ],
      pensar: 'Abraham intercedió por una ciudad que no lo merecía. ¿Por qué lugar, ciudad o persona te está llamando Dios a interceder con la misma insistencia?'
    },
    {
      id: 'sodoma', n: 'La destrucción de Sodoma y Gomorra', ref: 'Génesis 19:1-29; Ezequiel 16:49-50; Lucas 17:28-32; Judas 7', fecha: -2067,
      visual: [
        mapa({ view: [[30.7, 34.6], [32.1, 36.2]], capas: [], lugares: ['r-sodoma-sur', 'r-sodoma-norte', 'r-zoar', 'mamre', 'hebron', 'jerico', 'en-gadi'] }, 'Dos hipótesis'),
        img('img/pt-sodoma.webp', 'Al amanecer, sobre la llanura junto al mar Muerto, cae fuego y azufre del cielo sobre ciudades amuralladas que arden; en primer plano, de espaldas, Lot y sus dos hijas huyen hacia los montes por un sendero, y más atrás una figura de mujer se ha vuelto a mirar y se ve gris como de sal', '«Entonces la mujer de Lot miró atrás, a espaldas de él, y se volvió estatua de sal» (Génesis 19:26).')
      ],
      texto: [
        'Los dos ángeles llegaron a Sodoma al caer la tarde, y Lot estaba sentado a la puerta de la ciudad, el lugar de los ancianos y los jueces (Gn 19:1). El hombre que había acampado cerca de Sodoma ahora era parte de su vida pública. Insistió en hospedarlos, como Abraham. Pero esa noche los hombres de la ciudad, «todo el pueblo junto, desde el más joven hasta el más viejo» (Gn 19:4), rodearon la casa y exigieron que les entregara a los visitantes para abusar de ellos.',
        { h: 'El pecado de Sodoma' },
        'El relato muestra el extremo al que había llegado la ciudad: la violencia sexual en grupo contra extranjeros indefensos. Judas dice que Sodoma y Gomorra «habiendo fornicado e ido en pos de vicios contra naturaleza, fueron puestas por ejemplo» (Jud 7). Ezequiel agrega otros pecados: soberbia, abundancia de pan y ocio, y no fortalecer la mano del afligido y del menesteroso (Ez 16:49-50). La ciudad estaba llena de orgullo, egoísmo e inmoralidad.',
        { h: 'Escapa por tu vida' },
        'Los ángeles hirieron con ceguera a los hombres de la puerta y apuraron a Lot. Sus yernos creyeron que bromeaba. Al amanecer, como Lot se demoraba, los ángeles lo tomaron de la mano a él, a su mujer y a sus dos hijas, «según la misericordia de Jehová para con él» (Gn 19:16), y los sacaron. La orden fue clara: «Escapa por tu vida; no mires tras ti» (Gn 19:17). Lot pidió refugiarse en una ciudad pequeña, Zoar. Entonces «Jehová hizo llover sobre Sodoma y sobre Gomorra azufre y fuego de parte de Jehová desde los cielos» (Gn 19:24). La mujer de Lot miró atrás y quedó convertida en estatua de sal. Jesús advertirá: «Acordaos de la mujer de Lot» (Lc 17:32).',
        'Esa mañana Abraham miró desde Mamre hacia la llanura y vio que el humo subía «como el humo de un horno» (Gn 19:28). Lot, que había elegido la llanura más rica, terminó en una cueva de los montes con sus dos hijas, que lo emborracharon para tener hijos de él. De ellos nacieron Moab y Amón (Gn 19:30-38), pueblos vecinos de Israel.',
        { posturas: {
          titulo: '¿Dónde estaban Sodoma y Gomorra?',
          a: { n: 'Al sur del mar Muerto', t: 'Es la ubicación tradicional. La zona de Bab edh-Dhra y Numeira, junto a la península del sur del mar Muerto, tiene ciudades antiguas destruidas y un enorme cementerio. La región está llena de asfalto, azufre y sal, como el valle de Sidim (Gn 14:10), y Zoar se recordó siempre en el sur.' },
          b: { n: 'Al norte del mar Muerto (Tall el-Hammam)', t: 'Algunos arqueólogos, entre ellos Steven Collins, proponen Tall el-Hammam, una gran ciudad al noreste del mar Muerto, porque la llanura que Lot vio desde Betel (Gn 13:10) estaría al norte, y porque la ciudad fue destruida de golpe en la Edad del Bronce Medio.' },
          c: 'Este recurso sigue la ubicación del sur, que es la tradicional y encaja con la geografía del capítulo 14. El mapa muestra las dos hipótesis. Ninguna ubicación es segura, y el relato no depende de ellas.'
        } }
      ],
      pensar: 'Jesús dijo: «Acordaos de la mujer de Lot». ¿Hay algo de tu vida pasada que todavía miras con nostalgia, aunque Dios ya te sacó de ahí?'
    },
    {
      id: 'isaac-nace', n: 'Gerar, el nacimiento de Isaac y Beerseba', ref: 'Génesis 20:1-18; 21:1-7, 22-34; Romanos 4:19-21; Hebreos 11:11-12', fecha: -2066,
      visual: [
        mapa({ view: V.sur, capas: [], lugares: ['mamre', 'hebron', 'r-gerar', 'beerseba', 'r-beer-lahai-roi', 'cades-barnea'], trazos: ['pt-gerar'] }, 'Gerar y Beerseba'),
        img('img/pt-isaac-bebe.webp', 'Dentro de una tienda iluminada por la luz de la tarde, Sara, anciana de cabello blanco bajo un velo crema, ríe con un recién nacido en brazos, mientras Abraham, anciano, la mira emocionado', '«Dios me ha hecho reir, y cualquiera que lo oyere, se reirá conmigo» (Génesis 21:6).')
      ],
      texto: [
        'Después de la destrucción de Sodoma, Abraham se trasladó al sur, hacia el Neguev, y vivió como forastero en Gerar (Gn 20:1). El mapa muestra la región. Allí repitió el error de Egipto: dijo que Sara era su hermana, y Abimelec, rey de Gerar, la tomó. De nuevo Dios intervino, esta vez en un sueño: advirtió a Abimelec, que no se había acercado a ella, y le pidió que la devolviera, porque Abraham era profeta y oraría por él (Gn 20:6-7). Es la primera vez que la Biblia llama profeta a alguien.',
        { h: 'Isaac: risa' },
        '«Visitó Jehová a Sara, como había dicho, e hizo Jehová con Sara como había hablado» (Gn 21:1). El texto subraya que Dios cumplió exactamente: en el tiempo que había dicho. Abraham tenía cien años; Sara, noventa. Nació el hijo de la promesa, y lo llamaron Isaac, «risa». Sara se había reído de incredulidad junto a la tienda (Gn 18:12); ahora se reía de alegría: «Dios me ha hecho reir, y cualquiera que lo oyere, se reirá conmigo» (Gn 21:6). Abraham lo circuncidó al octavo día, como Dios había mandado.',
        'Pablo dice que Abraham, al considerar su cuerpo y la matriz de Sara, ambos sin posibilidad de dar vida, se fortaleció en fe, «plenamente convencido de que era también poderoso para hacer todo lo que había prometido» (Ro 4:21). Hebreos agrega que también Sara, por la fe, recibió fuerza para concebir (He 11:11). Isaac fue un milagro: el hijo de dos ancianos, nacido de la palabra de Dios.',
        { h: 'Ismael es despedido' },
        'El día que destetaron a Isaac, Abraham hizo un gran banquete. Sara vio a Ismael burlándose y exigió que Agar y su hijo se fueran. A Abraham le dolió mucho, porque Ismael era su hijo, pero Dios le confirmó que la descendencia de la promesa vendría por Isaac, y que de Ismael también haría una nación (Gn 21:9-13). Abraham los despidió con pan y un odre de agua, y Dios los cuidó en el desierto de Beerseba.',
        { h: 'El pozo del juramento' },
        'Abimelec reconoció: «Dios está contigo en todo cuanto haces» (Gn 21:22), y pidió un pacto. Abraham reclamó un pozo que los siervos del rey le habían quitado, entregó siete corderas como testimonio de que él lo había cavado, y ambos juraron. El lugar se llamó Beerseba, «porque allí juraron ambos» (Gn 21:31). Abraham plantó allí un tamarisco e invocó el nombre de Jehová, Dios eterno (Gn 21:33). El nombre del lugar significa «pozo del juramento» o «pozo de los siete». Beerseba sería el límite sur de Israel.'
      ],
      pensar: 'Sara se rió primero por incredulidad y después por alegría. ¿Qué promesa de Dios te hace reír de incredulidad hoy, y cómo sería verla cumplida?'
    },
    {
      id: 'moriah', n: 'El monte Moriah', ref: 'Génesis 22:1-19; 2 Crónicas 3:1; Hebreos 11:17-19; Juan 3:16; Romanos 8:32', fecha: -2050,
      visual: [
        img('../dios-y-la-trinidad/img/moriah.webp', 'En la cumbre de un monte rocoso, el anciano Abraham, con el cuchillo todavía en la mano, se vuelve hacia un carnero trabado por los cuernos en un zarzal; junto al altar de piedras, su hijo Isaac, un muchacho', '«Jehová proveerá» (Génesis 22:14).'),
        mapa({ view: [[30.95, 34.4], [32.05, 35.65]], capas: [], lugares: ['beerseba', 'hebron', 'efrata', 'moriah'], trazos: ['pt-moriah'] }, 'Tres días de camino'),
        cita('Génesis 22:1-2', '@@gn/22/1-2')
      ],
      texto: [
        '«Aconteció después de estas cosas, que probó Dios a Abraham» (Gn 22:1). El lector sabe desde el principio que es una prueba; Abraham no lo sabe. Dios le dice: «Toma ahora tu hijo, tu único, Isaac, a quien amas, y vete a tierra de Moriah, y ofrécelo allí en holocausto» (Gn 22:2). Cada palabra aprieta más: tu hijo, tu único, al que amas, Isaac, el de la promesa. Es el segundo «vete» de la vida de Abraham.',
        { h: 'Tres días de camino' },
        'Abraham se levantó muy de mañana y salió con Isaac, dos siervos y la leña. El mapa muestra el camino desde Beerseba, unos 80 kilómetros hacia el norte por la serranía. «Al tercer día alzó Abraham sus ojos, y vio el lugar de lejos» (Gn 22:4). Tres días para pensar, para volverse atrás. Dejó a los siervos y les dijo: «yo y el muchacho iremos hasta allí y adoraremos, y volveremos a vosotros» (Gn 22:5). Dijo «volveremos». Hebreos explica lo que pensaba: que Dios era poderoso para levantar a Isaac aun de entre los muertos (He 11:19).',
        { h: 'Dios se proveerá de cordero' },
        'Isaac cargó la leña, y Abraham el fuego y el cuchillo. En el camino, Isaac preguntó: «He aquí el fuego y la leña; mas ¿dónde está el cordero para el holocausto?» (Gn 22:7). Abraham respondió: «Dios se proveerá de cordero para el holocausto, hijo mío» (Gn 22:8). En la cumbre edificó el altar, ató a Isaac y tomó el cuchillo. Isaac era un muchacho capaz de cargar la leña; pudo resistirse a su padre anciano, y no lo hizo. Entonces el ángel de Jehová lo llamó desde el cielo y lo detuvo: «ya conozco que temes a Dios, por cuanto no me rehusaste tu hijo, tu único» (Gn 22:12). Abraham vio un carnero trabado en un zarzal y lo ofreció en lugar de su hijo. Llamó al lugar «Jehová proveerá» (Gn 22:14).',
        { h: 'El lugar' },
        'Siglos después, Salomón edificó el templo «en el monte Moriah» (2 Cr 3:1), en Jerusalén. El lugar donde Dios proveyó un sustituto para Isaac fue el lugar de los sacrificios de Israel, y cerca de allí murió el Cordero que Dios proveyó para el mundo. Juan escribe que Dios «ha dado a su Hijo unigénito» (Jn 3:16), y Pablo, que Dios «no escatimó ni a su propio Hijo» (Ro 8:32). Lo que Dios detuvo en la mano de Abraham, no lo detuvo en la cruz.',
        { posturas: {
          titulo: '¿Qué hijo ofreció Abraham?',
          a: { n: 'Isaac, según Génesis', t: 'El texto lo nombra: «tu hijo, tu único, Isaac» (Gn 22:2). Ismael ya había sido despedido, e Isaac era el único hijo de la promesa (He 11:17).' },
          b: { n: 'Ismael, según la tradición islámica', t: 'El Corán cuenta el sacrificio sin nombrar al hijo (sura 37), y la mayoría de los intérpretes musulmanes posteriores afirman que fue Ismael, el primogénito, de quien se consideran descendientes los árabes. Los musulmanes recuerdan cada año este hecho en la fiesta del sacrificio.' },
          c: 'Este recurso sigue el texto de Génesis, que es varios siglos anterior y nombra a Isaac. La tradición islámica se describe con respeto, como la entienden sus creyentes. La ruta VII vuelve sobre Abraham en el judaísmo, el cristianismo y el islam.'
        } },
        ir('Ver «Jehová proveerá: los nombres compuestos» en Dios y la Trinidad', '../../dios-y-la-trinidad/#nombres/4')
      ],
      pensar: 'Abraham entregó lo que más amaba, confiando en que Dios proveería. ¿Hay algo o alguien que sostienes con tanta fuerza que te cuesta ponerlo en las manos de Dios?'
    },
    {
      id: 'macpela', n: 'Macpela y una esposa para Isaac', ref: 'Génesis 23:1-20; 24:1-67; 25:1-11; Hechos 7:5, 16', fecha: [-2029, -1991],
      visual: [
        pasos([
          { t: 'Sara muere en Hebrón, a los 127 años, y Abraham compra a los hijos de Het la cueva de Macpela, frente a Mamre (Gn 23).', estado: { view: V.centro, capas: [], lugares: ['hebron', 'mamre', 'beerseba'] } },
          { t: 'El siervo de Abraham viaja con diez camellos a Mesopotamia, a la ciudad de Nacor, en la región de Harán (Gn 24:10).', estado: { view: V.ur_canaan, capas: [], lugares: ['hebron', 'betel', 'damasco', 'haran', 'r-padan-aram'], trazos: ['pt-siervo'] } },
          { t: 'Rebeca vuelve con el siervo y encuentra a Isaac, que vivía en el Neguev, junto al pozo de Beer-lahai-roi (Gn 24:62).', estado: { view: V.canaan, capas: [], lugares: ['hebron', 'beerseba', 'r-beer-lahai-roi'] } }
        ], 'Macpela y Harán'),
        img('img/pt-rebeca-pozo.webp', 'Al atardecer, junto a un pozo de piedra en las afueras de una ciudad de Mesopotamia, una joven de cabello oscuro, Rebeca, con un cántaro al hombro, da de beber con un segundo cántaro a una fila de diez camellos arrodillados; un siervo anciano de barba gris la observa con asombro', '«Bebe, señor mío… También para tus camellos sacaré agua» (Génesis 24:18-19).')
      ],
      texto: [
        'Sara murió en Hebrón a los 127 años, y Abraham hizo duelo y lloró por ella (Gn 23:1-2). Luego se presentó ante los hijos de Het, los habitantes de la ciudad, y les pidió un lugar para sepultarla: «Extranjero y forastero soy entre vosotros» (Gn 23:4). Después de una larga negociación, con la cortesía y el regateo de un mercado oriental, compró a Efrón el heteo el campo con la cueva de Macpela por cuatrocientos siclos de plata, pesados delante de todos en la puerta de la ciudad (Gn 23:16).',
        { h: 'El único terreno' },
        'Era un precio alto, unos 4,5 kilogramos de plata. Pero ese campo fue lo único de la tierra prometida que Abraham poseyó en vida. Esteban lo recuerda: Dios «no le dio herencia en ella, ni aun para asentar un pie» (Hch 7:5). Abraham murió poseyendo una tumba. Allí fueron sepultados Sara, Abraham, Isaac, Rebeca, Lea y Jacob (Gn 49:31; 50:13). La tumba era una inversión en la promesa: los patriarcas querían descansar en la tierra que Dios daría a sus hijos.',
        { h: 'Una esposa para Isaac' },
        'Abraham, ya anciano, hizo jurar a su siervo más antiguo que no tomaría para Isaac una esposa de las cananeas, sino de su parentela en Mesopotamia, y que no llevaría a Isaac allá (Gn 24:3-6). El siervo partió con diez camellos y regalos. Al llegar al pozo de la ciudad de Nacor, al atardecer, oró pidiendo una señal: que la joven a quien pidiera agua le ofreciera también para los camellos. Antes de que terminara de orar, salió Rebeca con su cántaro (Gn 24:15). Dar de beber a diez camellos sedientos es mucho trabajo: cada uno puede beber más de cien litros. Rebeca lo hizo con generosidad.',
        'El siervo resultó ser pariente de Rebeca: ella era nieta de Nacor, el hermano de Abraham. Cuando su familia le preguntó si quería ir con aquel hombre, respondió: «Sí, iré» (Gn 24:58). Como Abraham, dejó su tierra y su parentela. Isaac la recibió en el Neguev, la llevó a la tienda de su madre, «y la amó; y se consoló Isaac después de la muerte de su madre» (Gn 24:67).',
        { h: 'La muerte de Abraham' },
        'Abraham se casó después con Cetura y tuvo otros hijos, pero dio todo a Isaac (Gn 25:1-6). Murió «en buena vejez, anciano y lleno de años» (Gn 25:8), a los 175 años, y sus hijos Isaac e Ismael lo sepultaron juntos en la cueva de Macpela.',
        ir('Ver «El siclo y sus divisiones» en Pesos, medidas, monedas y horas bíblicas', '../../medidas-biblicas/#capacidad/3')
      ],
      pensar: 'El siervo de Abraham oró antes de actuar, y Dios respondió antes de que terminara. ¿Pides la dirección de Dios en las decisiones grandes de tu familia, como el matrimonio?'
    }
  ];

  window.__PT = { mundo, abraham };
})();
