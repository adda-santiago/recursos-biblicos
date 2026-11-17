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
  const HAY = new Set(["esquema-familia.svg", "esquema-fe-abraham.svg", "esquema-patriarcas.svg", "esquema-serrania.svg", "pt-agar-fuente.webp", "pt-bendicion.webp", "pt-beni-hasan.webp", "pt-betel-escalera.webp", "pt-esau-abrazo.webp", "pt-faraon-sarai.webp", "pt-galaad-majano.webp", "pt-guiso.webp", "pt-hermanos-jose.webp", "pt-isaac-bebe.webp", "pt-isaac-campo.webp", "pt-jacob-faraon.webp", "pt-jose-carcel.webp", "pt-jose-potifar.webp", "pt-jose-tunica.webp", "pt-macpela.jpg", "pt-mamre.webp", "pt-peniel.webp", "pt-pozo-beerseba.jpg", "pt-raquel-pozo.webp", "pt-raquel-tumba.webp", "pt-rebeca-pozo.webp", "pt-sodoma.webp", "pt-yo-soy-jose.webp"]);
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
        cita('Génesis 12:1-3', 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré. Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición. Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra.')
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
        { tipo: 'hebreo', titulo: 'Génesis 12:1', ref: 'Génesis 12:1', he: 'וַיֹּאמֶר יְהוָה אֶל־אַבְרָם לֶךְ־לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ וּמִבֵּית אָבִיךָ אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ׃', tr: 'Vayómer Adonái el-Avram: lej-lejá meartsejá umimoladetjá umibet avíja el-haárets ashér arecka.',
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
        cita('Génesis 13:8-11', 'Entonces Abram dijo a Lot: No haya ahora altercado entre nosotros dos, entre mis pastores y los tuyos, porque somos hermanos. ¿No está toda la tierra delante de ti? Yo te ruego que te apartes de mí. Si fueres a la mano izquierda, yo iré a la derecha; y si tú a la derecha, yo iré a la izquierda. Y alzó Lot sus ojos, y vio toda la llanura del Jordán, que toda ella era de riego, como el huerto de Jehová, como la tierra de Egipto en la dirección de Zoar, antes que destruyese Jehová a Sodoma y a Gomorra. Entonces Lot escogió para sí toda la llanura del Jordán; y se fue Lot hacia el oriente, y se apartaron el uno del otro.')
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
        { tipo: 'hebreo', titulo: 'Génesis 15:6', ref: 'Génesis 15:6', he: 'וְהֶאֱמִן בַּיהוָה וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה׃', tr: 'Vehemín badonái vayajshevéha lo tsedacá.',
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
        cita('Génesis 18:23-26', 'Y se acercó Abraham y dijo: ¿Destruirás también al justo con el impío? Quizá haya cincuenta justos dentro de la ciudad: ¿destruirás también y no perdonarás al lugar por amor a los cincuenta justos que estén dentro de él? Lejos de ti el hacer tal, que hagas morir al justo con el impío, y que sea el justo tratado como el impío; nunca tal hagas. El Juez de toda la tierra, ¿no ha de hacer lo que es justo? Entonces respondió Jehová: Si hallare en Sodoma cincuenta justos dentro de la ciudad, perdonaré a todo este lugar por amor a ellos.')
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
        cita('Génesis 22:1-2', 'Aconteció después de estas cosas, que probó Dios a Abraham, y le dijo: Abraham. Y él respondió: Heme aquí. Y dijo: Toma ahora tu hijo, tu único, Isaac, a quien amas, y vete a tierra de Moriah, y ofrécelo allí en holocausto sobre uno de los montes que yo te diré.')
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
(() => {
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = window.__PT_H;

  /* ---------------- III. Isaac ---------------- */
  const isaac = [
    {
      id: 'isaac-rebeca', n: 'Isaac y Rebeca', ref: 'Génesis 24:62-67; 25:19-26; Romanos 9:10-12', fecha: [-2026, -2006],
      visual: [
        img('img/pt-isaac-campo.webp', 'Al caer la tarde, en un campo del Neguev, Isaac, hombre de unos cuarenta años con barba oscura, camina solo meditando; a lo lejos se acerca una caravana de camellos, y en uno de ellos una joven se cubre con el velo', '«Y había salido Isaac a meditar al campo, a la hora de la tarde» (Génesis 24:63).'),
        cita('Génesis 25:21-23', 'Y oró Isaac a Jehová por su mujer, que era estéril; y lo aceptó Jehová, y concibió Rebeca su mujer. Y los hijos luchaban dentro de ella; y dijo: Si es así, ¿para qué vivo yo? Y fue a consultar a Jehová; y le respondió Jehová: Dos naciones hay en tu seno, Y dos pueblos serán divididos desde tus entrañas; El un pueblo será más fuerte que el otro pueblo, Y el mayor servirá al menor.')
      ],
      texto: [
        'Isaac es el patriarca menos conocido. Génesis le dedica pocos capítulos propios, y casi siempre aparece al lado de otro: como el hijo de Abraham o como el padre de Jacob y Esaú. Pero vivió más que ningún otro patriarca, 180 años (Gn 35:28), y fue el eslabón por el que la promesa pasó de Abraham a Israel.',
        { h: 'Un hombre que medita' },
        'La primera vez que lo vemos adulto, Isaac había salido «a meditar al campo, a la hora de la tarde» (Gn 24:63), cerca del pozo de Beer-lahai-roi, en el Neguev. Al alzar los ojos vio venir los camellos. Rebeca, al verlo, se cubrió con el velo, como hacía una novia ante su prometido. Isaac la llevó a la tienda de Sara, la tomó por mujer y la amó. Tenía cuarenta años (Gn 25:20). Es una de las pocas veces que Génesis dice que un hombre amó a su esposa.',
        { h: 'Veinte años de espera' },
        'Rebeca era estéril, como Sara. Isaac no tomó otra mujer ni una sierva. «Y oró Isaac a Jehová por su mujer, que era estéril; y lo aceptó Jehová, y concibió Rebeca su mujer» (Gn 25:21). El texto no lo dice de inmediato, pero al sumar las edades se ve que esperaron veinte años: Isaac tenía sesenta cuando nacieron sus hijos (Gn 25:26). La promesa se transmitió otra vez por un milagro, como respuesta a la oración.',
        { h: 'Dos naciones en tu seno' },
        'El embarazo fue difícil: los niños luchaban dentro de ella. Rebeca fue a consultar a Jehová, y recibió una profecía: «Dos naciones hay en tu seno, y dos pueblos serán divididos desde tus entrañas; el un pueblo será más fuerte que el otro pueblo, y el mayor servirá al menor» (Gn 25:23). Nacieron gemelos. El primero salió rubio, todo velludo como una pelliza, y lo llamaron Esaú. El segundo salió trabado del talón de su hermano, y lo llamaron Jacob (Gn 25:25-26). El nombre suena a «talón» y a «el que suplanta».',
        'Dios anunció el orden antes de que nacieran, antes de que hicieran bien o mal. Pablo usará este dato para mostrar que la elección de Dios no depende de las obras (Ro 9:11-12). La ruta VII estudia cómo entender esa elección.',
        { h: 'Padres con favoritos' },
        'Los niños crecieron muy distintos. Esaú fue diestro en la caza, hombre del campo; Jacob, varón quieto, que habitaba en tiendas. «Y amó Isaac a Esaú, porque comía de su caza; mas Rebeca amaba a Jacob» (Gn 25:28). Cada padre tenía su preferido. Ese favoritismo explicará muchas de las heridas de esta familia.'
      ],
      pensar: 'Isaac oró veinte años por su esposa estéril. ¿Por qué cosa has dejado de orar porque la respuesta tarda?'
    },
    {
      id: 'primogenitura', n: 'Esaú y Jacob: la primogenitura', ref: 'Génesis 25:27-34; Hebreos 12:16-17; Deuteronomio 21:17', fecha: -1980,
      visual: [
        img('img/pt-guiso.webp', 'Dentro de una tienda, Jacob, joven sin barba con túnica clara, revuelve un guiso rojizo de lentejas en una olla de barro sobre el fuego; Esaú, de barba y cabello rojizos, cubierto de polvo y con un arco al hombro, entra agotado y extiende la mano hacia la olla', '«Te ruego que me des a comer de ese guiso rojo, pues estoy muy cansado» (Génesis 25:30).'),
        tabla({
          titulo: 'El derecho de primogenitura',
          cab: ['Qué incluía', 'Textos'],
          filas: [
            ['Doble porción de la herencia', 'Dt 21:17'],
            ['Ser el jefe de la familia a la muerte del padre', 'Gn 27:29, 37'],
            ['En la familia de Abraham: llevar adelante la promesa', 'Gn 26:3-4; 28:13-14'],
            ['Se podía perder por una falta grave', 'Gn 49:3-4; 1 Cr 5:1'],
            ['Se podía vender o ceder, según documentos de la época', 'Gn 25:33']
          ],
          nota: 'La primogenitura no era solo un privilegio material: en esta familia estaba unida a la bendición de Abraham.'
        })
      ],
      texto: [
        'Un día Jacob guisaba un potaje, y Esaú volvió del campo agotado. «Te ruego que me des a comer de ese guiso rojo, pues estoy muy cansado. Por tanto fue llamado su nombre Edom» (Gn 25:30). Edom significa «rojo», y será el nombre del pueblo que desciende de Esaú.',
        { h: 'Un trato desigual' },
        'Jacob vio la oportunidad: «Véndeme en este día tu primogenitura» (Gn 25:31). Esaú respondió con exageración: «He aquí yo me voy a morir; ¿para qué, pues, me servirá la primogenitura?» (Gn 25:32). Jacob le exigió que lo jurara, y Esaú lo juró. Comió pan y el guiso de lentejas, bebió, se levantó y se fue. Y el texto concluye con un juicio: «Así menospreció Esaú la primogenitura» (Gn 25:34).',
        { h: 'Lo que vendió' },
        'El primogénito recibía una doble porción de la herencia (Dt 21:17) y, a la muerte del padre, la autoridad sobre la familia. La tabla resume lo que incluía. Pero en esta familia significaba algo más: el primogénito llevaría adelante la promesa de Dios a Abraham. Esaú cambió eso por un plato de comida, por el apetito de un momento.',
        'Hebreos lo pone como advertencia: que no haya ningún «profano, como Esaú, que por una sola comida vendió su primogenitura» (He 12:16). Profano es el que trata lo santo como algo común. Esaú no era peor que Jacob en muchos sentidos; era más generoso y más franco. Pero no valoraba lo que Dios había prometido. Lo eterno le parecía lejano, y el hambre, inmediata.',
        { h: 'Tampoco Jacob sale bien parado' },
        'El texto no aprueba a Jacob. Tenía la profecía de que el mayor serviría al menor, pero no esperó a que Dios la cumpliera: se aprovechó del cansancio de su hermano para quitarle lo que Dios ya le había prometido. Jacob valoraba la bendición, pero buscaba obtenerla con astucia. Esa manera de vivir le costaría veinte años de destierro. Dios tendrá que transformar a este hombre que agarra el talón de los demás.',
        { ejercicio: {
          pregunta: '¿Por qué Hebreos llama «profano» a Esaú?',
          opciones: [
            { t: 'Porque era cazador y no pastor como su hermano.', ok: false, por_que: 'El oficio no tiene nada de malo. Hebreos no lo critica por cazar.' },
            { t: 'Porque despreció lo sagrado: cambió la promesa de Dios por un deseo inmediato.', ok: true, por_que: 'Profano es quien trata lo santo como común. Esaú vendió la primogenitura, unida a la promesa, por una comida.' },
            { t: 'Porque engañó a su hermano para quedarse con la bendición.', ok: false, por_que: 'Fue Jacob quien engañó. Esaú perdió la primogenitura por su propio desprecio, y la bendición por el engaño de Jacob.' }
          ],
          explicacion: 'Esaú no quería perder la bendición, pero tampoco la valoraba. Hebreos advierte a los creyentes contra esa actitud.'
        } }
      ],
      pensar: 'Esaú cambió algo eterno por algo inmediato. ¿Qué «plato de lentejas» te tienta hoy a descuidar lo que Dios te dio?'
    },
    {
      id: 'pozos', n: 'Los pozos de Gerar y Rehobot', ref: 'Génesis 26:1-33; Isaías 12:3; Juan 4:13-14', fecha: -1990,
      visual: [
        pasos([
          { t: 'Hay hambre en la tierra, e Isaac va a Gerar. Dios le prohíbe bajar a Egipto (Gn 26:1-2).', estado: { view: V.sur, capas: [], lugares: ['r-beer-lahai-roi', 'r-gerar', 'beerseba', 'gaza'], trazos: [] } },
          { t: 'En el valle de Gerar (Gn 26:17-21), Isaac reabre los pozos de Abraham y cava otros. Los pastores de Gerar se los disputan: Esek, «contienda», y Sitna, «enemistad».', estado: { view: V.sur, capas: [], lugares: ['r-gerar', 'beerseba'], trazos: ['pt-isaac'] } },
          { t: 'Se aparta y cava otro pozo, y ya no riñen (Gn 26:22): lo llama Rehobot, «lugares amplios».', estado: { view: V.sur, capas: [], lugares: ['r-gerar', 'r-rehobot', 'beerseba'], trazos: ['pt-isaac'] } },
          { t: 'Sube a Beerseba. Dios se le aparece de noche, e Isaac edifica un altar. Sus siervos encuentran agua: el pozo se llama Seba (Gn 26:23-33).', estado: { view: V.sur, capas: [], lugares: ['r-gerar', 'r-rehobot', 'beerseba', 'hebron'], trazos: ['pt-isaac'] } }
        ], 'Los pozos de Isaac'),
        foto('img/pt-pozo-beerseba.jpg', 'Vista desde arriba del gran pozo de piedra de Tel Beerseba: un pozo cuadrado y profundo de muros de piedras redondeadas, con una escalera y una baranda que bajan hasta una abertura en el fondo', 'El sistema de agua de Tel Beerseba, de la época de los reyes de Judá. Los pozos de los patriarcas eran más sencillos, pero el nombre de la ciudad recuerda el pozo del juramento (Gn 21:31).', 'Foto: Ori~, Wikimedia Commons (uso libre con atribución)')
      ],
      texto: [
        'El único capítulo dedicado solo a Isaac, Génesis 26, parece repetir la vida de su padre: hambre en la tierra, una estadía en Gerar, la misma mentira sobre su esposa, pozos disputados y un pacto con Abimelec en Beerseba. El hijo camina en los pasos del padre, en lo bueno y en lo malo.',
        { h: 'No desciendas a Egipto' },
        'Hubo hambre en la tierra, y Dios se le apareció a Isaac: «No desciendas a Egipto; habita en la tierra que yo te diré» (Gn 26:2). Le repitió las promesas que había hecho a Abraham, la tierra, la descendencia y la bendición para las naciones, «por cuanto oyó Abraham mi voz» (Gn 26:5). Isaac se quedó en Gerar, y sembró en aquella tierra, y cosechó «aquel año ciento por uno» (Gn 26:12). En medio del hambre, Dios lo prosperó tanto que los filisteos le tuvieron envidia y le pidieron que se fuera.',
        { h: 'Cavar los pozos del padre' },
        'Los filisteos habían cegado con tierra todos los pozos que habían cavado los siervos de Abraham. «Volvió a abrir Isaac los pozos de agua que habían abierto en los días de Abraham su padre» (Gn 26:18), y les puso los mismos nombres. No inventó nombres nuevos: recuperó la herencia de su padre. Muchos creyentes han visto aquí una imagen: hay verdades y fuentes que las generaciones anteriores abrieron y que hay que volver a destapar.',
        { h: 'Contienda, enemistad y lugares amplios' },
        'El mapa sigue los pozos de Isaac. Sus siervos cavaron en el valle y hallaron agua viva, y los pastores de Gerar riñeron diciendo «El agua es nuestra». Isaac llamó al pozo Esek, que significa contienda. Cavaron otro, y también riñeron: Sitna, enemistad. Isaac no peleó; se apartó y cavó otro, y ya no hubo disputa. Lo llamó Rehobot, que significa lugares amplios, y dijo: «Porque ahora Jehová nos ha prosperado, y fructificaremos en la tierra» (Gn 26:22). Isaac prefirió ceder antes que pelear, y Dios le abrió espacio.',
        { h: 'En Beerseba' },
        'De allí subió a Beerseba. Esa misma noche Dios se le apareció: «Yo soy el Dios de Abraham tu padre; no temas, porque yo estoy contigo» (Gn 26:24). Isaac edificó un altar, invocó el nombre de Jehová y plantó su tienda. Abimelec vino a hacer un pacto, porque veía «que Jehová está contigo» (Gn 26:28). El mismo día, sus siervos encontraron agua. El hombre que no peleó por los pozos terminó en paz con sus vecinos y con agua en abundancia.'
      ],
      pensar: 'Isaac prefirió apartarse y cavar otro pozo antes que pelear. ¿Hay alguna contienda en tu vida que deberías soltar para dejar que Dios te abra «lugares amplios»?'
    },
    {
      id: 'bendicion', n: 'La bendición robada', ref: 'Génesis 27:1-46; 28:1-5; Hebreos 11:20; 12:17', fecha: -1929,
      visual: [
        img('img/pt-bendicion.webp', 'Dentro de una tienda en penumbra, Isaac, anciano y casi ciego, de barba blanca, palpa las manos de Jacob, cubiertas con pieles de cabrito; Jacob, arrodillado, lleva la ropa de su hermano; sobre una mesa baja, un plato de guisado y pan', '«La voz es la voz de Jacob, pero las manos, las manos de Esaú» (Génesis 27:22).'),
        cita('Génesis 27:27-29', 'Y Jacob se acercó, y le besó; y olió Isaac el olor de sus vestidos, y le bendijo, diciendo: Mira, el olor de mi hijo, Como el olor del campo que Jehová ha bendecido; Dios, pues, te dé del rocío del cielo, Y de las grosuras de la tierra, Y abundancia de trigo y de mosto. Sírvante pueblos, Y naciones se inclinen a ti; Sé señor de tus hermanos, Y se inclinen ante ti los hijos de tu madre. Malditos los que te maldijeren, Y benditos los que te bendijeren.')
      ],
      texto: [
        'Isaac envejeció y se quedó casi ciego. Pensando que iba a morir pronto, llamó a Esaú y le pidió que cazara algo y le preparara un guisado como a él le gustaba, para bendecirlo antes de morir (Gn 27:1-4). Isaac conocía la profecía de que el mayor serviría al menor, pero quería bendecir a su favorito. Vivió todavía muchos años más.',
        { h: 'El plan de Rebeca' },
        'Rebeca escuchó y preparó un plan. Hizo un guisado con dos cabritos, vistió a Jacob con la ropa de Esaú y le cubrió las manos y el cuello con las pieles de los cabritos, porque Esaú era velludo. Jacob tuvo miedo de ser descubierto y recibir maldición, y su madre le respondió: «Hijo mío, sea sobre mí tu maldición» (Gn 27:13).',
        { h: 'Una mentira tras otra' },
        'Jacob entró y dijo: «Yo soy Esaú tu primogénito» (Gn 27:19). Cuando Isaac se extrañó de que hubiera cazado tan rápido, Jacob metió a Dios en la mentira: «Porque Jehová tu Dios hizo que la encontrase delante de mí» (Gn 27:20). Isaac lo palpó y dudó: «La voz es la voz de Jacob, pero las manos, las manos de Esaú» (Gn 27:22). Comió, lo besó, olió su ropa y lo bendijo con la abundancia de la tierra, el señorío sobre las naciones y sobre sus hermanos (Gn 27:27-29). La pestaña muestra la bendición.',
        { h: 'Un grito amargo' },
        'Apenas salió Jacob, llegó Esaú con su guisado. Isaac se estremeció «grandemente» al comprender lo que había pasado, pero no retiró la bendición: «y será bendito» (Gn 27:33). En el mundo antiguo, una bendición solemne del padre no se podía anular, y además Isaac entendió que Dios había confirmado lo que había anunciado antes del nacimiento. Esaú «clamó con una muy grande y muy amarga exclamación» (Gn 27:34). Hebreos dice que buscó con lágrimas la bendición, pero no halló oportunidad de arrepentimiento (He 12:17): no pudo cambiar lo que había hecho al despreciar la primogenitura.',
        { h: 'Todos pierden' },
        'Nadie actúa bien en este capítulo. Isaac quiso bendecir al hijo que Dios no había elegido; Rebeca engañó a su esposo; Jacob mintió a su padre; Esaú, que había despreciado la promesa, la reclamó cuando la perdió, y planeó matar a su hermano. Y todos pagaron: Rebeca tuvo que despedir a Jacob y, por lo que dice el texto, no lo volvió a ver; Jacob huyó y vivió veinte años como siervo; la familia quedó rota.',
        'Sin embargo, Dios cumplió su palabra. No necesitaba el engaño de Rebeca ni la astucia de Jacob; los usó a pesar de ellos. Hebreos destaca el lado de la fe: «Por la fe bendijo Isaac a Jacob y a Esaú respecto a cosas venideras» (He 11:20). Antes de despedir a Jacob, Isaac lo bendijo de nuevo, esta vez sabiendo a quién, y le transmitió conscientemente «la bendición de Abraham» (Gn 28:4).'
      ],
      pensar: 'Rebeca y Jacob quisieron asegurar con engaño lo que Dios ya había prometido. ¿Crees que Dios necesita tu ayuda «por debajo de la mesa» para cumplir su palabra?'
    },
    {
      id: 'isaac-legado', n: 'Isaac, el patriarca discreto', ref: 'Génesis 26:24; 35:27-29; Éxodo 3:6; Gálatas 4:28; Hebreos 11:20', fecha: -1886,
      visual: [
        tabla({
          titulo: 'La vida de Isaac',
          cab: ['Momento', 'Edad', 'Texto'],
          filas: [
            ['Nace en el Neguev, hijo de la promesa', '—', 'Gn 21:1-7'],
            ['Es ofrecido en el monte Moriah', 'Joven', 'Gn 22'],
            ['Se casa con Rebeca', '40 años', 'Gn 25:20'],
            ['Nacen Esaú y Jacob, después de veinte años de oración', '60 años', 'Gn 25:26'],
            ['Entierra a Abraham con Ismael', '75 años', 'Gn 25:7-9'],
            ['Vive en Gerar y Beerseba; los pozos', '—', 'Gn 26'],
            ['Bendice a Jacob', 'Unos 137 años', 'Gn 27'],
            ['Muere en Hebrón; lo sepultan Esaú y Jacob', '180 años', 'Gn 35:28-29']
          ],
          nota: 'Algunas edades se calculan a partir de otros datos de Génesis y son aproximadas.'
        }),
        esq('img/esquema-familia.svg', 'Árbol de la familia de los patriarcas: Taré y sus hijos Abraham, Nacor y Harán; de Abraham, Ismael (con Agar), Isaac (con Sara) y los hijos de Cetura; de Isaac y Rebeca, Esaú y Jacob; de Jacob, con Lea, Raquel, Bilha y Zilpa, los doce hijos y Dina; de José, Manasés y Efraín', 'La familia de los patriarcas, de Taré a los hijos de José.')
      ],
      texto: [
        'Abraham fue el hombre de la fe y Jacob el hombre de la lucha. Isaac parece no tener una gran historia propia. No viajó lejos: es el único patriarca que nunca salió de Canaán. No fundó lugares nuevos: reabrió los pozos de su padre. Su vida tiene menos episodios que la de los otros. Y, sin embargo, Dios se presenta como «Dios de Abraham, Dios de Isaac, y Dios de Jacob» (Éx 3:6). El patriarca discreto está en el centro del nombre de Dios.',
        { h: 'El hijo de la promesa' },
        'Isaac es, ante todo, un regalo. Nació cuando ya era imposible, por la palabra de Dios. Pablo lo usa como modelo de todos los creyentes: «Así que, hermanos, nosotros, como Isaac, somos hijos de la promesa» (Gá 4:28). No somos hijos de Dios por esfuerzo humano, sino por el poder de Dios que cumple lo que promete.',
        { h: 'Un hombre de paz' },
        'Isaac no buscó pleitos. En Gerar cedió los pozos disputados hasta que encontró uno donde no hubo pelea. Con Abimelec hizo un pacto en vez de una guerra. Junto a Ismael, sepultó a su padre (Gn 25:9). Su manera de vivir no fue espectacular, pero fue fiel: oró por su esposa, sembró, cavó pozos, edificó altares, invocó el nombre de Jehová.',
        { h: 'Un hombre con fallas' },
        'Isaac también falló. Repitió la mentira de su padre sobre su esposa (Gn 26:7). Prefirió a uno de sus hijos «porque comía de su caza» (Gn 25:28), y quiso darle la bendición contra lo que Dios había anunciado. El texto no lo idealiza. Pero cuando comprendió lo que había pasado, aceptó la voluntad de Dios y bendijo a Jacob a sabiendas.',
        { h: 'Lleno de días' },
        'Isaac vivió lo suficiente para ver volver a Jacob de Harán, con once hijos, después de veinte años (Gn 35:27). Murió en Hebrón a los 180 años, «viejo y lleno de días», y lo sepultaron Esaú y Jacob, los hermanos reconciliados (Gn 35:29). El árbol de la familia, en la otra pestaña, muestra su lugar entre Abraham y Jacob. La promesa pasó por él sin ruido, pero pasó.',
        'En el reino de Dios, ser un eslabón fiel entre generaciones no es poca cosa. No todos son llamados a salir como Abraham o a luchar como Jacob. Muchos son llamados a conservar, cavar de nuevo los pozos, orar en silencio y entregar la fe intacta a sus hijos.'
      ],
      pensar: 'Isaac no hizo grandes viajes, pero fue el eslabón fiel entre Abraham y Jacob. ¿Qué estás haciendo para que la fe que recibiste llegue intacta a la próxima generación?'
    }
  ];

  /* ---------------- IV. Jacob ---------------- */
  const jacob = [
    {
      id: 'betel', n: 'Betel y la escalera', ref: 'Génesis 28:10-22; Juan 1:47-51', fecha: -1929,
      visual: [
        img('img/pt-betel-escalera.webp', 'De noche, en un campo pedregoso de la serranía, Jacob, joven de barba oscura corta, duerme con la cabeza sobre una piedra; sobre él, una gran escalinata de piedra luminosa sube hasta un cielo abierto, con figuras de ángeles subiendo y bajando, sin alas, envueltas en luz', '«Y he aquí una escalera que estaba apoyada en tierra, y su extremo tocaba en el cielo» (Génesis 28:12).'),
        mapa({ view: V.levante, capas: [], lugares: ['beerseba', 'hebron', 'betel', 'siquem', 'damasco', 'haran'], trazos: ['pt-jacob-ida'] }, 'La huida a Harán')
      ],
      texto: [
        'Esaú había dicho en su corazón que mataría a Jacob cuando muriera su padre (Gn 27:41). Rebeca supo el plan y convenció a Isaac de enviar a Jacob a Harán, a la casa de su hermano Labán, para buscar allí esposa. Jacob salió de Beerseba solo, con un bastón (Gn 32:10). El hombre que había conseguido la primogenitura y la bendición huía con las manos vacías. El mapa muestra el camino: unos 800 kilómetros.',
        { h: 'Una piedra por almohada' },
        'Al llegar a «un cierto lugar», se puso el sol y Jacob durmió allí, con una piedra por cabecera. Estaba en la serranía, a unos cien kilómetros de su casa, en un lugar que entonces se llamaba Luz. Y soñó: «una escalera que estaba apoyada en tierra, y su extremo tocaba en el cielo; y he aquí ángeles de Dios que subían y descendían por ella» (Gn 28:12). La palabra hebrea puede describir también una rampa o una escalinata de piedra, como las de los zigurats. En Babel los hombres quisieron construir una torre que llegara al cielo; aquí Dios abre el camino desde arriba.',
        { h: 'Yo estoy contigo' },
        'En lo alto estaba Jehová, que le habló: le repitió las promesas de Abraham y de Isaac, la tierra, una descendencia como el polvo y la bendición para todas las familias de la tierra. Y agregó una promesa personal para el fugitivo: «He aquí, yo estoy contigo, y te guardaré por dondequiera que fueres, y volveré a traerte a esta tierra» (Gn 28:15). Jacob despertó con temor: «Ciertamente Jehová está en este lugar, y yo no lo sabía… No es otra cosa que casa de Dios, y puerta del cielo» (Gn 28:16-17).',
        { h: 'Betel' },
        'Por la mañana, Jacob levantó la piedra como señal, derramó aceite sobre ella y llamó al lugar Betel (Gn 28:19), que significa «casa de Dios». Era el mismo lugar donde su abuelo Abraham, muchos años antes, había levantado un altar, como cuenta Génesis 12:8. Luego hizo un voto: si Dios estaba con él, lo guardaba y lo hacía volver en paz, Jehová sería su Dios, y le daría el diezmo de todo (Gn 28:20-22). Es un voto con condiciones, el de un creyente que todavía negocia con Dios. Pero es un comienzo.',
        { h: 'La escalera es Cristo' },
        'Jesús le dijo a Natanael: «De aquí adelante veréis el cielo abierto, y a los ángeles de Dios que suben y descienden sobre el Hijo del Hombre» (Jn 1:51). Jesús es la escalera de Jacob: el único camino entre la tierra y el cielo, el lugar donde Dios se encuentra con los hombres. Lo que Jacob vio en sueños, se cumplió en la encarnación.'
      ],
      pensar: 'Jacob dijo: «Jehová está en este lugar, y yo no lo sabía». ¿En qué momento difícil de tu vida descubriste después que Dios estaba contigo?'
    },
    {
      id: 'laban', n: 'En Harán con Labán', ref: 'Génesis 29:1-30; 31:38-42; Oseas 12:12', fecha: [-1929, -1909],
      visual: [
        img('img/pt-raquel-pozo.webp', 'En el campo de Harán, al mediodía, Jacob, joven y fuerte, remueve con esfuerzo una gran piedra de la boca de un pozo, mientras una joven pastora, Raquel, de cabello oscuro bajo un pañuelo, se acerca con un rebaño de ovejas; otros pastores miran sentados', '«Se acercó Jacob y removió la piedra de la boca del pozo, y abrevó el rebaño de Labán» (Génesis 29:10).'),
        tabla({
          titulo: 'Veinte años de servicio',
          cab: ['Años', 'Por qué trabajó', 'Texto'],
          filas: [
            ['7', 'Por Raquel, pero recibió a Lea', 'Gn 29:18-25'],
            ['7 más', 'Por Raquel, recibida después de la semana de bodas de Lea', 'Gn 29:27-30'],
            ['6', 'Por el ganado, con el salario cambiado diez veces', 'Gn 30:25-43; 31:7, 41'],
            ['20', 'En total: «de día me consumía el calor, y de noche la helada»', 'Gn 31:40-41']
          ],
          nota: 'Jacob trabajó como pastor de su tío. En el mundo antiguo, el novio pagaba una dote a la familia de la novia; Jacob la pagó con su trabajo.'
        })
      ],
      texto: [
        'Jacob siguió su camino «a la tierra de los orientales» (Gn 29:1) y llegó a un pozo en el campo cerca de Harán, cubierto con una piedra grande. Los pastores esperaban a que se juntaran todos los rebaños para moverla entre varios. Preguntó por Labán, y le dijeron que su hija Raquel venía con las ovejas. Cuando la vio, Jacob removió él solo la piedra, abrevó el rebaño, besó a Raquel y lloró (Gn 29:10-11). El fugitivo había llegado a la casa de su familia.',
        { h: 'Siete años que parecieron pocos días' },
        'Labán tenía dos hijas: Lea, la mayor, de ojos delicados, y Raquel, «de lindo semblante y de hermoso parecer» (Gn 29:17). Jacob amaba a Raquel y ofreció servir siete años por ella. «Así sirvió Jacob por Raquel siete años; y le parecieron como pocos días, porque la amaba» (Gn 29:20). Como no tenía nada que dar por la novia, pagó la dote con su trabajo.',
        { h: 'El engañador engañado' },
        'Llegó la boda. De noche, Labán le entregó a Lea en lugar de Raquel, cubierta con el velo de novia. Por la mañana, Jacob descubrió el engaño: «¿Por qué, pues, me has engañado?» (Gn 29:25). Labán le dio una explicación que dolía: «No se hace así en nuestro lugar, que se dé la menor antes de la mayor» (Gn 29:26). Jacob, que había engañado a su padre ciego haciéndose pasar por el mayor, ahora era engañado en la oscuridad con la mayor haciéndose pasar por la menor. Cosechaba lo que había sembrado.',
        'Labán le dio también a Raquel una semana después, a cambio de otros siete años de trabajo. Jacob tuvo dos esposas hermanas, algo que la ley de Moisés prohibiría después (Lv 18:18), y el resultado fue una casa llena de rivalidad. Jacob se llegó a Raquel, «y la amó también más que a Lea» (Gn 29:30).',
        { h: 'Veinte años de servicio duro' },
        'La tabla resume el tiempo que Jacob trabajó para Labán: catorce años por sus esposas y seis por el ganado. Cuando al fin se fue, le reprochó a su tío: «de día me consumía el calor, y de noche la helada, y el sueño huía de mis ojos» (Gn 31:40), y le recordó que le había cambiado el salario diez veces (Gn 31:41). Siglos después, Oseas recordará a Israel este tiempo: «Jacob huyó a tierra de Aram, Israel sirvió para adquirir mujer, y por adquirir mujer fue pastor» (Os 12:12).',
        'Dios usó a Labán, un hombre tan astuto como Jacob, para formar el carácter de su sobrino. En Harán, Jacob aprendió a trabajar, a esperar y a ser víctima del mismo engaño que él había practicado. Y Dios cumplió su promesa de Betel: estuvo con él y lo hizo prosperar.'
      ],
      pensar: 'Jacob, el engañador, fue engañado por Labán. ¿Has vivido alguna situación en la que Dios te hizo ver tu propio pecado reflejado en lo que otros te hicieron?'
    },
    {
      id: 'doce-hijos', n: 'Lea, Raquel y los doce hijos', ref: 'Génesis 29:31–30:24; 35:16-26; 49:1-28', fecha: [-1922, -1900],
      visual: [
        tabla({
          titulo: 'Los hijos de Jacob y el significado de sus nombres',
          cab: ['Madre', 'Hijo', 'Lo que dijo la madre'],
          filas: [
            ['Lea', 'Rubén', '«Ha mirado Jehová mi aflicción» (Gn 29:32)'],
            ['Lea', 'Simeón', '«Oyó Jehová que yo era menospreciada» (Gn 29:33)'],
            ['Lea', 'Leví', '«Ahora esta vez se unirá mi marido conmigo» (Gn 29:34)'],
            ['Lea', 'Judá', '«Esta vez alabaré a Jehová» (Gn 29:35)'],
            ['Bilha (sierva de Raquel)', 'Dan', '«Me juzgó Dios» (Gn 30:6)'],
            ['Bilha', 'Neftalí', '«Con luchas de Dios he contendido con mi hermana» (Gn 30:8)'],
            ['Zilpa (sierva de Lea)', 'Gad', '«Vino la ventura» (Gn 30:11)'],
            ['Zilpa', 'Aser', '«Para dicha mía» (Gn 30:13)'],
            ['Lea', 'Isacar', '«Dios me ha dado mi recompensa» (Gn 30:18)'],
            ['Lea', 'Zabulón', '«Ahora morará conmigo mi marido» (Gn 30:20)'],
            ['Lea', 'Dina (hija)', '—'],
            ['Raquel', 'José', '«Añádame Jehová otro hijo» (Gn 30:24)'],
            ['Raquel', 'Benjamín', 'Nace en el camino a Efrata; Raquel muere (Gn 35:18)']
          ],
          nota: 'Los nombres juegan con palabras hebreas parecidas. Las frases son de la Reina-Valera.'
        }),
        esq('img/esquema-familia.svg', 'Árbol de la familia de los patriarcas: Taré y sus hijos Abraham, Nacor y Harán; de Abraham, Ismael (con Agar), Isaac (con Sara) y los hijos de Cetura; de Isaac y Rebeca, Esaú y Jacob; de Jacob, con Lea, Raquel, Bilha y Zilpa, los doce hijos y Dina; de José, Manasés y Efraín', 'Los doce hijos de Jacob serán las doce tribus de Israel.')
      ],
      texto: [
        'Los doce hijos de Jacob, de quienes vienen las doce tribus de Israel, nacieron en medio de una competencia dolorosa entre dos hermanas. Génesis 29 y 30 lo cuentan sin adornos. La tabla reúne los nombres y lo que dijo cada madre al ponerlos: son como un diario íntimo de esa casa.',
        { h: 'Lea, la no amada' },
        '«Y vio Jehová que Lea era menospreciada, y le dio hijos; pero Raquel era estéril» (Gn 29:31). Dios vio a la esposa que su marido no había elegido. Los nombres de sus primeros hijos muestran su herida: Rubén, porque «Ha mirado Jehová mi aflicción; ahora, por tanto, me amará mi marido» (Gn 29:32); Simeón, porque Dios oyó que era menospreciada; Leví, porque esperaba que ahora su marido se uniría a ella. Con el cuarto, algo cambió: «Esta vez alabaré a Jehová; por esto llamó su nombre Judá» (Gn 29:35). Lea dejó de nombrar a sus hijos por el amor que no recibía y comenzó a alabar a Dios. Y de Judá, el hijo de la alabanza, vendrían David y el Mesías.',
        { h: 'Raquel, la amada y estéril' },
        'Raquel tenía el amor de Jacob, pero no hijos. «Dame hijos, o si no, me muero» (Gn 30:1), le dijo a Jacob, y él se enojó: «¿Soy yo acaso Dios?». Entonces hizo como Sarai y dio a su sierva Bilha. Lea respondió dando también a su sierva Zilpa. La casa de Jacob se volvió una competencia de nacimientos: las hermanas se disputaban al marido y hasta se negociaban las noches con él a cambio de unas mandrágoras, una planta que se creía que daba fertilidad (Gn 30:14-16).',
        { h: 'Dios se acordó de Raquel' },
        'Las mandrágoras no sirvieron. Lea tuvo más hijos, y Raquel siguió estéril. Hasta que «se acordó Dios de Raquel, y la oyó Dios, y le concedió hijos» (Gn 30:22). Nació José, el hijo amado. Años después, de vuelta en Canaán, Raquel murió al dar a luz a Benjamín, el único hijo de Jacob nacido en la tierra prometida (Gn 35:16-18).',
        { h: 'Doce tribus de una familia rota' },
        'Dios edificó su pueblo con esta familia herida: dos hermanas rivales, dos siervas usadas como madres sustitutas, un padre que tenía favoritos. Ninguno de los doce era un modelo. Pero sus nombres estarán escritos en las doce puertas de la nueva Jerusalén (Ap 21:12). La gracia de Dios no espera a que una familia sea perfecta para usarla.'
      ],
      pensar: 'Lea dejó de buscar el amor que no recibía y dijo: «Esta vez alabaré a Jehová». ¿Qué cambiaría en ti si dejaras de vivir esperando la aprobación de alguien y comenzaras a alabar a Dios?'
    },
    {
      id: 'regreso', n: 'El regreso: Galaad y Mahanaim', ref: 'Génesis 30:25-43; 31:1-55; 32:1-21', fecha: -1909,
      visual: [
        pasos([
          { t: 'Dios le dice a Jacob: «Vuélvete a la tierra de tus padres». Jacob huye de Harán con su familia y su ganado (Gn 31:3, 17-21).', estado: { view: V.jacob, capas: [], lugares: ['haran', 'r-padan-aram', 'damasco'], trazos: ['pt-jacob-vuelta'] } },
          { t: 'Labán lo alcanza en los montes de Galaad. Hacen un pacto con un majano de piedras (Gn 31:23, 44-49): Galaad, «majano del testimonio», y Mizpa.', estado: { view: V.transjordania, capas: [], lugares: ['damasco', 'r-galaad-mizpa', 'r-mahanaim'], trazos: ['pt-jacob-vuelta'] } },
          { t: 'Le salen al encuentro ángeles de Dios (Gn 32:1-2): Jacob llama al lugar Mahanaim, «dos campamentos».', estado: { view: V.centro, capas: [], lugares: ['r-galaad-mizpa', 'r-mahanaim', 'r-peniel', 'sucot'], trazos: ['pt-jacob-vuelta'] } }
        ], 'De Harán a Galaad'),
        img('img/pt-galaad-majano.webp', 'En lo alto de los montes boscosos de Galaad, Jacob y Labán, este de barba gris, están de pie a cada lado de un montón de piedras recién levantado, con una piedra alta en el centro; detrás, las tiendas, los camellos y los rebaños de Jacob, y sus esposas e hijos', '«Atalaye Jehová entre tú y yo, cuando nos apartemos el uno del otro» (Génesis 31:49).')
      ],
      texto: [
        'Después del nacimiento de José, Jacob quiso volver a su tierra. Labán, que había prosperado gracias a él, le pidió que se quedara y que fijara su salario. Jacob pidió las ovejas y cabras manchadas y oscuras que nacieran en el rebaño, y usó varas peladas de árboles para que nacieran más así (Gn 30:37-39). Era una creencia de la época. Pero Jacob mismo reconocerá después que no fueron sus varas, sino Dios, quien hizo que el ganado de Labán pasara a él (Gn 31:9).',
        { h: 'Vuélvete' },
        'La actitud de Labán y de sus hijos cambió, y Dios le dijo a Jacob: «Vuélvete a la tierra de tus padres, y a tu parentela, y yo estaré contigo» (Gn 31:3). Jacob llamó a Raquel y Lea al campo y les explicó. Por primera vez, las dos hermanas hablan de acuerdo: su padre las había vendido y se había comido su dote (Gn 31:15). Jacob partió a escondidas mientras Labán esquilaba sus ovejas. Raquel, sin que Jacob lo supiera, robó los ídolos de su padre.',
        { h: 'El pacto de Galaad' },
        'Labán lo persiguió siete días y lo alcanzó en los montes de Galaad, al oriente del Jordán. Dios le había advertido en sueños que no le hablara a Jacob «descomedidamente» (Gn 31:24). Labán buscó sus ídolos en todas las tiendas; Raquel los escondió bajo la montura de un camello y se sentó encima, diciendo que no podía levantarse (Gn 31:34-35). Al final, los dos hombres hicieron un pacto: levantaron un majano de piedras como testigo y un límite que ninguno cruzaría para dañar al otro. Labán dijo: «Atalaye Jehová entre tú y yo, cuando nos apartemos el uno del otro» (Gn 31:49). Era una advertencia entre dos desconfiados, aunque hoy muchos la usan como una bendición entre amigos.',
        { h: 'Dos campamentos' },
        'Jacob siguió su camino, «y le salieron al encuentro ángeles de Dios» (Gn 32:1). Al verlos, dijo: «Campamento de Dios es este», y llamó al lugar Mahanaim (Gn 32:2), que significa «dos campamentos». Al salir de Canaán, Jacob había visto ángeles en Betel; al volver, los ve de nuevo. Dios había cumplido su promesa: estuvo con él todo el camino.',
        { h: 'Miedo a Esaú' },
        'Pero adelante estaba Esaú. Jacob le envió mensajeros, y volvieron con una noticia aterradora: Esaú venía a su encuentro con cuatrocientos hombres. Jacob tuvo gran temor, dividió su gente en dos campamentos y oró. Es la primera oración larga de la Biblia: «Menor soy que todas las misericordias y que toda la verdad que has usado para con tu siervo… Líbrame ahora de la mano de mi hermano» (Gn 32:10-11). Y envió por delante regalos para aplacar a su hermano: más de quinientos animales.'
      ],
      pensar: 'Jacob reconoció: «Menor soy que todas las misericordias» de Dios. ¿Puedes repasar los últimos veinte años de tu vida y nombrar las misericordias que Dios tuvo contigo?'
    },
    {
      id: 'r-peniel', n: 'Peniel: la lucha y el nombre Israel', ref: 'Génesis 32:22-32; Oseas 12:3-4', fecha: -1909,
      visual: [
        img('img/pt-peniel.webp', 'De noche, junto al vado de un arroyo entre peñascos, Jacob lucha cuerpo a cuerpo con un hombre misterioso vestido de blanco, cuyo rostro queda en la sombra y la luz; empieza a rayar el alba en el horizonte', '«Y dijo: Déjame, porque raya el alba. Y Jacob le respondió: No te dejaré, si no me bendices» (Génesis 32:26).'),
        mapa({ view: [[31.85, 35.3], [32.55, 36.05]], capas: [], lugares: ['r-peniel', 'r-mahanaim', 'sucot', 'siquem'], trazos: ['pt-jacob-vuelta'] }, 'El vado de Jaboc')
      ],
      texto: [
        'Esa noche Jacob pasó a su familia y todo lo que tenía por el vado de Jaboc, un río que baja de los montes de Galaad hacia el Jordán, «Así se quedó Jacob solo» (Gn 32:24). Solo, de noche, junto al río, con el miedo de encontrarse con su hermano al día siguiente. El mapa muestra el lugar.',
        { h: 'Un varón luchó con él' },
        '«Y luchó con él un varón hasta que rayaba el alba» (Gn 32:24). No se dice quién era. Jacob, que había luchado toda su vida, con su hermano desde el vientre, con su padre, con Labán, ahora luchaba con alguien que no podía vencer. El varón, al ver que no podía con él, le tocó el sitio del encaje de su muslo, y se le descoyuntó. Con un toque lo dejó cojo. Pero Jacob no lo soltó: «No te dejaré, si no me bendices» (Gn 32:26).',
        { h: 'Israel' },
        'El varón le preguntó: «¿Cuál es tu nombre?» (Gn 32:27). La última vez que alguien le había preguntado eso, su padre ciego, Jacob había mentido: «Yo soy Esaú». Ahora tuvo que decir la verdad: «Jacob», el que agarra el talón, el que suplanta. Fue una confesión. Y entonces recibió un nombre nuevo: «No se dirá más tu nombre Jacob, sino Israel; porque has luchado con Dios y con los hombres, y has vencido» (Gn 32:28). Israel puede entenderse como «el que lucha con Dios» o «Dios lucha». Su pueblo llevará ese nombre.',
        'Jacob preguntó el nombre del varón, y él no se lo dijo, pero lo bendijo allí. Jacob comprendió con quién había luchado y llamó al lugar Peniel, «rostro de Dios»: «Vi a Dios cara a cara, y fue librada mi alma» (Gn 32:30). Oseas lo resume: «Venció al ángel, y prevaleció; lloró, y le rogó» (Os 12:4). Su victoria no fue de fuerza, sino de lágrimas y súplica. El ángel es, como en otros pasajes, el mismo Dios que se manifiesta, y muchos ven aquí al Hijo antes de su encarnación.',
        { h: 'Cojeando hacia el sol' },
        '«Y cuando había pasado Peniel, le salió el sol; y cojeaba de su cadera» (Gn 32:31). El hombre que siempre había confiado en su astucia y en sus fuerzas salió de esa noche quebrado y bendecido. Desde entonces caminaría apoyado, más débil y más dependiente. Dios no destruyó a Jacob; lo quebrantó para bendecirlo.',
        { ejercicio: {
          pregunta: '¿Qué significó para Jacob decir su propio nombre cuando el varón se lo preguntó?',
          opciones: [
            { t: 'Era una formalidad para presentarse antes de recibir la bendición.', ok: false, por_que: 'El nombre en la Biblia expresa el carácter. Su nombre recordaba lo que había sido: el que suplanta.' },
            { t: 'Fue reconocer lo que había sido, el engañador, después de haber mentido a su padre sobre su nombre.', ok: true, por_que: 'Ante su padre se hizo pasar por Esaú; ante Dios dijo la verdad, y recibió un nombre nuevo: Israel.' },
            { t: 'Quería saber si el varón lo conocía, para no ser engañado otra vez.', ok: false, por_que: 'El texto no sugiere eso. La pregunta lleva a Jacob a confesar quién era, y Dios le cambia el nombre.' }
          ],
          explicacion: 'Dios no bendijo a Jacob disfrazado de Esaú, sino a Jacob reconociendo quién era. La confesión precede a la nueva identidad.'
        } }
      ],
      pensar: 'Jacob salió de Peniel cojeando, pero bendecido. ¿Hay alguna «cojera» en tu vida que Dios ha usado para que dependas más de Él?'
    },
    {
      id: 'esau', n: 'El encuentro con Esaú', ref: 'Génesis 33:1-17; Mateo 5:23-24; Lucas 15:20', fecha: -1909,
      visual: [
        img('img/pt-esau-abrazo.webp', 'En una llanura al amanecer, Esaú, robusto, de barba y cabello rojizos con canas, corre y abraza a Jacob, que cojea y tiene la cabeza inclinada; detrás de Esaú, una tropa de hombres armados se detiene; detrás de Jacob, sus esposas e hijos esperan con asombro', '«Esaú corrió a su encuentro y le abrazó, y se echó sobre su cuello, y le besó; y lloraron» (Génesis 33:4).'),
        cita('Génesis 33:1-4', 'Alzando Jacob sus ojos, miró, y he aquí venía Esaú, y los cuatrocientos hombres con él; entonces repartió él los niños entre Lea y Raquel y las dos siervas. Y puso las siervas y sus niños delante, luego a Lea y sus niños, y a Raquel y a José los últimos. Y él pasó delante de ellos y se inclinó a tierra siete veces, hasta que llegó a su hermano. Pero Esaú corrió a su encuentro y le abrazó, y se echó sobre su cuello, y le besó; y lloraron.')
      ],
      texto: [
        'Por la mañana, Jacob alzó los ojos y vio venir a Esaú con sus cuatrocientos hombres. Organizó a su familia en filas: delante las siervas con sus hijos, después Lea con los suyos y al final Raquel con José, los más queridos y más protegidos (Gn 33:1-2). Incluso en ese momento, se notan las preferencias de Jacob.',
        { h: 'Siete reverencias' },
        'Pero esta vez Jacob no se escondió detrás de su familia ni de sus regalos: «él pasó delante de ellos y se inclinó a tierra siete veces, hasta que llegó a su hermano» (Gn 33:3). Siete reverencias era la forma de presentarse ante un rey. El hombre que había recibido la bendición de que sus hermanos se inclinarían ante él (Gn 27:29), ahora se inclinaba ante su hermano.',
        { h: 'Esaú corrió' },
        '«Pero Esaú corrió a su encuentro y le abrazó, y se echó sobre su cuello, y le besó; y lloraron» (Gn 33:4). Después de veinte años de rencor y una amenaza de muerte, el encuentro terminó en abrazo y lágrimas. No sabemos qué cambió en Esaú, pero sí sabemos que Jacob había pasado la noche luchando con Dios. Muchos lectores han notado el parecido con el padre de la parábola del hijo pródigo, que vio a su hijo de lejos, «corrió, y se echó sobre su cuello, y le besó» (Lc 15:20).',
        { h: 'Como si hubiera visto el rostro de Dios' },
        'Esaú no quería aceptar los regalos: «Suficiente tengo yo, hermano mío; sea para ti lo que es tuyo» (Gn 33:9). Jacob insistió con una frase notable: «he visto tu rostro, como si hubiera visto el rostro de Dios, pues que con tanto favor me has recibido» (Gn 33:10). La noche anterior había visto el rostro de Dios en Peniel; ahora veía la gracia de Dios en el rostro de su hermano reconciliado. Le pidió que aceptara su presente (Gn 33:11); la palabra hebrea es la misma que significa bendición. De algún modo, Jacob le devolvía a Esaú la bendición que le había quitado.',
        { h: 'Caminos separados' },
        'Esaú le ofreció acompañarlo, pero Jacob se excusó por los niños y el ganado y prometió llegar hasta Seir. No fue: se desvió a Sucot y después a Siquem (Gn 33:16-18). La reconciliación fue real, pero la confianza no se recuperó del todo. Los hermanos vivieron en paz y en lugares distintos. Volvieron a encontrarse para sepultar a su padre (Gn 35:29).',
        'Jesús enseñó que la reconciliación con el hermano es tan urgente que hay que dejar la ofrenda frente al altar e ir primero a reconciliarse (Mt 5:23-24). Jacob no pudo seguir su camino hacia la tierra prometida sin enfrentar a su hermano.'
      ],
      pensar: 'Jacob tuvo que enfrentar a su hermano antes de entrar en la tierra prometida. ¿Hay alguien con quien Dios te está pidiendo que te reconcilies antes de seguir adelante?'
    },
    {
      id: 'siquem-dina', n: 'Siquem y Dina', ref: 'Génesis 33:18–34:31; 49:5-7', fecha: -1900,
      visual: [
        mapa({ view: V.centro, capas: [], lugares: ['r-peniel', 'sucot', 'siquem', 'betel'], trazos: ['pt-jacob-vuelta'] }, 'De Sucot a Siquem'),
        img('../tierra-de-israel/img/pozo-jacob.webp', 'Jesús, de espaldas, sentado junto a un pozo de piedra a mediodía, conversando con una mujer samaritana que sostiene un cántaro; detrás se levanta el monte Gerizim', 'Junto a Siquem, en «la heredad que Jacob dio a su hijo José», Jesús habló con la samaritana (Juan 4:5-6).')
      ],
      texto: [
        'Después de vivir un tiempo en Sucot, donde edificó una casa y cabañas para su ganado, Jacob cruzó el Jordán y llegó «sano y salvo a la ciudad de Siquem, que está en la tierra de Canaán» (Gn 33:18). Compró un terreno a los hijos de Hamor por cien piezas de dinero, plantó su tienda y edificó un altar, al que llamó El-Elohe-Israel (Gn 33:20), que significa «Dios, el Dios de Israel». Usaba por primera vez su nombre nuevo para confesar a su Dios. Siglos después, los huesos de José serían sepultados en ese mismo campo (Jos 24:32), y cerca de allí Jesús hablaría con la samaritana junto al pozo de Jacob (Jn 4:5-6).',
        { h: 'Una historia oscura' },
        'Génesis 34 es uno de los capítulos más difíciles de la Biblia. Dina, la hija de Jacob y Lea, salió a ver a las jóvenes del país. Siquem, hijo de Hamor, príncipe de la ciudad, la vio, la tomó y la deshonró (Gn 34:2). Después quiso casarse con ella, y su padre propuso a Jacob una alianza: que las dos familias se unieran por matrimonios y compartieran la tierra.',
        { h: 'Engaño y venganza' },
        'Los hijos de Jacob respondieron «con palabras engañosas» (Gn 34:13): aceptarían si todos los hombres de la ciudad se circuncidaban. Los de Siquem aceptaron, pensando en las riquezas de Jacob. Al tercer día, cuando estaban doloridos, Simeón y Leví, hermanos de Dina, entraron en la ciudad y mataron a todos los varones, y sus hermanos saquearon la ciudad (Gn 34:25-29). Usaron la señal del pacto de Dios como trampa para una matanza.',
        { h: 'Un padre que calla' },
        'Jacob había callado cuando supo lo que le hicieron a su hija (Gn 34:5). Y cuando sus hijos se vengaron, solo le preocupó su seguridad: «Me habéis turbado con hacerme abominable a los moradores de esta tierra» (Gn 34:30). Ellos respondieron: «¿Había él de tratar a nuestra hermana como a una ramera?» (Gn 34:31). El capítulo termina sin respuesta. Nadie protege a Dina, nadie le pregunta nada, y nadie actúa con justicia.',
        'Génesis no aprueba nada de esto. En su lecho de muerte, Jacob maldecirá la ira de Simeón y Leví: «Maldito su furor, que fue fiero; y su ira, que fue dura» (Gn 49:7). El relato muestra a qué lleva un hogar donde el padre no ejerce su responsabilidad y los hijos toman la justicia por su cuenta. También muestra que la familia de la promesa no era mejor que los pueblos que la rodeaban. Necesitaba ser transformada.',
        'Hablar de este capítulo exige cuidado. La Biblia no esconde la violencia contra las mujeres; la nombra, la llama vileza (Gn 34:7) y deja ver su dolor. El silencio de Jacob es parte de lo que el texto condena.'
      ],
      pensar: 'Jacob calló ante el mal que sufrió su hija. ¿Hay alguien a tu cargo, en tu familia o en tu iglesia, que necesita que tú hables y actúes en lugar de callar?'
    },
    {
      id: 'betel-raquel', n: 'Betel otra vez y la muerte de Raquel', ref: 'Génesis 35:1-29; Jeremías 31:15; Mateo 2:17-18', fecha: -1900,
      visual: [
        pasos([
          { t: 'Dios le dice a Jacob: «Levántate y sube a Bet-el». Jacob purifica su casa y entierra los dioses ajenos bajo una encina, junto a Siquem (Gn 35:1-4).', estado: { view: V.centro, capas: [], lugares: ['siquem', 'betel'], trazos: ['pt-jacob-vuelta'] } },
          { t: 'Al salir de Betel hacia el sur, cerca de Efrata, muere Raquel al dar a luz a Benjamín (Gn 35:16-19).', estado: { view: V.centro, capas: [], lugares: ['betel', 'efrata', 'mamre', 'hebron'], trazos: ['pt-jacob-vuelta'] } },
          { t: 'Jacob llega a Mamre, junto a su padre Isaac, que muere a los 180 años (Gn 35:27-29).', estado: { view: V.canaan, capas: [], lugares: ['siquem', 'betel', 'efrata', 'mamre', 'hebron'], trazos: ['pt-jacob-vuelta'] } }
        ], 'De Siquem a Hebrón'),
        img('img/pt-raquel-tumba.webp', 'Junto al camino de Efrata, en una ladera de colinas, Jacob, de barba gris y apoyado en un bastón, levanta una piedra alta sobre una tumba recién cubierta; a su lado, una nodriza sostiene a un recién nacido envuelto, y los hijos de Jacob observan en silencio', '«Así murió Raquel, y fue sepultada en el camino de Efrata, la cual es Belén» (Génesis 35:19).')
      ],
      texto: [
        'Después de lo de Siquem, Dios le habló a Jacob: «Levántate y sube a Bet-el, y quédate allí; y haz allí un altar al Dios que te apareció cuando huías de tu hermano Esaú» (Gn 35:1). Veinte años antes, Jacob había prometido que si volvía en paz, Jehová sería su Dios. Ya había vuelto, pero no había cumplido su voto.',
        { h: 'Quitad los dioses ajenos' },
        'Antes de subir, Jacob reunió a su familia y a todos los que estaban con él: «Quitad los dioses ajenos que hay entre vosotros, y limpiaos, y mudad vuestros vestidos» (Gn 35:2). En la casa del patriarca había ídolos: los terafines de Raquel y los dioses que habrían traído los siervos de Harán y el botín de Siquem. Le entregaron los ídolos y los zarcillos que llevaban como amuletos, y Jacob los escondió debajo de una encina junto a Siquem. Antes de ir a la casa de Dios, la familia tuvo que limpiarse.',
        { h: 'El Dios de Betel' },
        'En Betel, Jacob edificó un altar y llamó al lugar El-bet-el (Gn 35:7), que significa «el Dios de Betel». Antes había adorado el lugar; ahora adoraba al Dios del lugar. Dios se le apareció de nuevo, le confirmó el nombre Israel y le dijo: «Yo soy el Dios omnipotente: crece y multiplícate; una nación y conjunto de naciones procederán de ti, y reyes saldrán de tus lomos» (Gn 35:11). Jacob levantó una señal de piedra y derramó aceite sobre ella, como la primera vez.',
        { h: 'Benoni y Benjamín' },
        'Siguieron hacia el sur. Cerca de Efrata, Raquel tuvo un parto difícil y murió. Antes de morir llamó al niño Benoni, pero Jacob lo llamó Benjamín (Gn 35:18). Benoni significa «hijo de mi tristeza»; Benjamín, «hijo de la mano derecha». Jacob la sepultó junto al camino y levantó un pilar sobre su tumba. El mapa sigue el camino de Betel a Efrata, que es Belén, y a Hebrón.',
        'Siglos después, cuando los judíos fueron llevados al exilio, Jeremías imaginó a Raquel llorando por sus hijos que no volvían (Jer 31:15). Mateo aplica esas palabras al llanto de las madres de Belén cuando Herodes mató a los niños (Mt 2:18). La tumba de Raquel, junto al camino de Belén, se volvió un lugar de dolor y de esperanza: Jeremías agrega que los hijos volverán.',
        { h: 'La familia completa en Canaán' },
        'El capítulo termina con la lista de los doce hijos de Jacob y con la muerte de Isaac en Hebrón. Esaú y Jacob, reconciliados, lo sepultaron juntos (Gn 35:29). Una generación se cierra. La promesa sigue con Jacob y sus doce hijos, ya todos en la tierra.'
      ],
      pensar: 'Antes de volver a Betel, Jacob pidió a su familia quitar los dioses ajenos. ¿Hay algo en tu casa o en tu corazón que debes quitar para volver a encontrarte con Dios?'
    },
    {
      id: 'edom', n: 'Esaú y Edom', ref: 'Génesis 36:1-43; Números 20:14-21; Deuteronomio 23:7; Abdías 1:10-15; Malaquías 1:2-3', fecha: -1900,
      visual: [
        mapa({ view: [[29.6, 34.2], [32.3, 36.4]], capas: [], lugares: ['r-peniel', 'r-edom', 'bosra', 'petra', 'cades-barnea', 'beerseba', 'hebron'], trazos: ['pt-esau'] }, 'Seir, la tierra de Edom'),
        tabla({
          titulo: 'Edom en la historia bíblica',
          cab: ['Época', 'Qué pasó', 'Textos'],
          filas: [
            ['Patriarcas', 'Esaú se establece en el monte Seir', 'Gn 36:6-8'],
            ['Éxodo', 'Edom niega el paso a Israel por el camino del rey', 'Nm 20:14-21'],
            ['Ley de Moisés', '«No aborrecerás al edomita, porque es tu hermano»', 'Dt 23:7'],
            ['Monarquía', 'David somete a Edom', '2 S 8:14'],
            ['Caída de Jerusalén', 'Edom se alegra y ayuda a los babilonios', 'Abd 1:10-14; Sal 137:7'],
            ['Nuevo Testamento', 'Los idumeos; Herodes el Grande era de origen idumeo', 'Mr 3:8']
          ],
          nota: 'Edom, «rojo», es el otro nombre de Esaú. Seir es la región montañosa al sureste del mar Salado.'
        })
      ],
      texto: [
        'Génesis no se olvida de Esaú. Antes de contar la historia de José, dedica un capítulo entero a sus descendientes, «Esaú, el cual es Edom» (Gn 36:1). Esaú se casó con mujeres cananeas y con una hija de Ismael (Gn 26:34; 28:9), y fue padre de un pueblo grande, con jefes y reyes, mucho antes que Israel.',
        { h: 'El monte Seir' },
        'Como sus bienes y los de Jacob eran demasiados para vivir juntos, Esaú se fue «a otra tierra, separándose de Jacob su hermano», y habitó en el monte de Seir (Gn 36:6-8). Seir es la región montañosa al sureste del mar Salado, de arenisca rojiza, por donde pasaba el camino que unía Arabia con Damasco. Allí se formaría el reino de Edom, con ciudades como Bosra y, mucho después, Petra. El mapa muestra la región.',
        { h: 'Reyes antes que Israel' },
        'El capítulo nombra a los reyes «que reinaron en la tierra de Edom, antes que reinase rey sobre los hijos de Israel» (Gn 36:31). Edom tuvo reyes siglos antes que Israel. La bendición de Isaac a Esaú se cumplió: vivió de la grosura de la tierra y por su espada (Gn 27:39-40). Dios no abandonó a Esaú; le dio un pueblo y una tierra. «yo he dado por heredad a Esaú el monte de Seir» (Dt 2:5), dice Dios a Israel, y le prohíbe tomar esa tierra.',
        { h: 'Hermanos enemistados' },
        'La relación entre los dos pueblos repitió la de los dos hermanos. La tabla la resume. Cuando Israel salió de Egipto, Moisés pidió a Edom permiso para pasar, recordándole que eran hermanos, y Edom se lo negó con un ejército (Nm 20:14-21). Aun así, la ley mandó: «No aborrecerás al edomita, porque es tu hermano» (Dt 23:7). Siglos después, cuando Babilonia destruyó Jerusalén, Edom se alegró y ayudó a los invasores, y el profeta Abdías lo condenó por haber olvidado que era hermano (Abd 1:10-12).',
        'Malaquías resume la historia de los dos pueblos con una frase que Pablo citará: «Amé a Jacob, y a Esaú aborrecí» (Mal 1:2-3). La ruta VII estudia qué quiere decir. En tiempos del Nuevo Testamento, los edomitas se llamaban idumeos, y de esa región vino la familia de Herodes el Grande.',
        ir('Ver «Rodeada de vecinos» en La tierra de Israel', '../../tierra-de-israel/#panorama/7')
      ],
      pensar: 'La enemistad entre Jacob y Esaú se prolongó por siglos entre sus descendientes. ¿Qué heridas de tu familia corres el riesgo de transmitir a tus hijos si no las sanas?'
    }
  ];

  Object.assign(window.__PT, { isaac, jacob });
})();
(() => {
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = window.__PT_H;

  /* ---------------- V. José ---------------- */
  const jose = [
    {
      id: 'sonador', n: 'El soñador y la túnica', ref: 'Génesis 37:1-11; Hechos 7:9', fecha: -1898,
      visual: [
        img('img/pt-jose-tunica.webp', 'Frente a las tiendas de Jacob en Hebrón, José, un muchacho de diecisiete años sin barba, con una túnica larga de mangas largas y franjas de colores, habla con entusiasmo a sus hermanos, hombres adultos de barba que lo miran con desprecio desde junto al rebaño; Jacob, anciano, observa desde la entrada de una tienda', '«Le aborrecían, y no podían hablarle pacíficamente» (Génesis 37:4).'),
        cita('Génesis 37:5-8', 'Y soñó José un sueño, y lo contó a sus hermanos; y ellos llegaron a aborrecerle más todavía. Y él les dijo: Oíd ahora este sueño que he soñado: He aquí que atábamos manojos en medio del campo, y he aquí que mi manojo se levantaba y estaba derecho, y que vuestros manojos estaban alrededor y se inclinaban al mío. Le respondieron sus hermanos: ¿Reinarás tú sobre nosotros, o señorearás sobre nosotros? Y le aborrecieron aun más a causa de sus sueños y sus palabras.')
      ],
      texto: [
        'La última parte de Génesis, del capítulo 37 al 50, es la historia de José. Es la más larga y la más continua del libro, casi una novela, y explica cómo la familia de Jacob llegó a Egipto. Comienza con una frase que encierra toda la historia: «Esta es la historia de la familia de Jacob: José, siendo de edad de diecisiete años, apacentaba las ovejas con sus hermanos» (Gn 37:2).',
        { h: 'El hijo preferido' },
        'Jacob había sufrido el favoritismo de sus padres, y lo repitió. José era hijo de Raquel, la esposa amada, y había nacido en su vejez. «Y amaba Israel a José más que a todos sus hijos… y le hizo una túnica de diversos colores» (Gn 37:3). La expresión hebrea describe probablemente una túnica larga, con mangas hasta las muñecas: no era ropa para trabajar en el campo, sino de quien manda. Era una señal visible de que Jacob lo veía como su heredero. Además, José llevaba a su padre «la mala fama» de sus hermanos (Gn 37:2).',
        { h: 'Dos sueños' },
        'Entonces José soñó, y contó sus sueños. En el primero, él y sus hermanos ataban manojos en el campo, y los manojos de los hermanos se inclinaban ante el suyo. En el segundo, el sol, la luna y once estrellas se inclinaban ante él (Gn 37:7-9). El significado era evidente. Sus hermanos «le aborrecieron aun más a causa de sus sueños y sus palabras» (Gn 37:8), y aun su padre lo reprendió. Pero Jacob «meditaba en esto» (Gn 37:11), como María guardará más tarde las cosas en su corazón.',
        { h: 'Un muchacho inmaduro' },
        'Los sueños venían de Dios, y se cumplirían. Pero José, a los diecisiete años, no tenía la madurez para manejarlos: los contó sin prudencia a los que ya lo envidiaban. Dios le dio una visión del futuro, pero el carácter para llevarla tendría que formarse en años de sufrimiento. Entre el sueño y su cumplimiento pasarían más de veinte años, un pozo, la esclavitud y la cárcel.',
        { h: 'La envidia' },
        'Esteban resume: «Los patriarcas, movidos por envidia, vendieron a José para Egipto; pero Dios estaba con él» (Hch 7:9). La envidia de los hermanos no surgió de la nada: un padre con favoritos, un hermano que los acusaba y unos sueños que los humillaban. Pero la envidia es responsabilidad de quien la alimenta. Lo que comenzó como resentimiento terminaría en un crimen.'
      ],
      pensar: 'José tenía un sueño de Dios, pero le faltaba madurez para manejarlo. ¿Qué te está enseñando Dios mientras esperas el cumplimiento de lo que te mostró?'
    },
    {
      id: 'dotan', n: 'Vendido en Dotán', ref: 'Génesis 37:12-36; 42:21-22; Amós 6:6', fecha: -1898,
      visual: [
        pasos([
          { t: 'Jacob envía a José desde el valle de Hebrón a Siquem, a ver a sus hermanos (Gn 37:13-14).', estado: { view: V.centro, capas: [], lugares: ['hebron', 'betel', 'siquem', 'dotan'], trazos: [] } },
          { t: 'No los encuentra en Siquem: un hombre le dice que se fueron a Dotán, unos 20 km más al norte (Gn 37:15-17).', estado: { view: V.centro, capas: [], lugares: ['hebron', 'siquem', 'dotan'], trazos: ['pt-jose'] } },
          { t: 'En Dotán lo echan en una cisterna y lo venden a una caravana de ismaelitas que bajan a Egipto (Gn 37:24-28).', estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['dotan', 'gaza', 'pelusio', 'menfis'], trazos: ['pt-jose'] } }
        ], 'De Hebrón a Dotán'),
        img('img/pt-jose-cisterna.webp', 'En los campos de Dotán, junto a la boca de una cisterna de piedra, dos de los hermanos sacan a José, despojado de su túnica, mientras otro hermano cuenta monedas de plata con un mercader ismaelita de turbante; atrás, una caravana de camellos cargados con fardos', '«Y le vendieron a los ismaelitas por veinte piezas de plata» (Génesis 37:28).')
      ],
      texto: [
        'Los hermanos de José habían llevado los rebaños lejos, hasta Siquem, a unos 80 kilómetros de Hebrón. Jacob envió a José a ver cómo estaban. No los encontró en Siquem; un hombre le dijo que se habían ido a Dotán, y José fue tras ellos (Gn 37:14-17). Dotán estaba en un valle de pastos, junto al camino de las caravanas que bajaban de Galaad hacia la costa y Egipto. El mapa sigue su recorrido.',
        { h: '«He aquí viene el soñador»' },
        'Lo vieron de lejos, quizá por la túnica, y conspiraron para matarlo: «He aquí viene el soñador. Ahora pues, venid, y matémosle y echémosle en una cisterna, y diremos: Alguna mala bestia lo devoró; y veremos qué será de sus sueños» (Gn 37:19-20). Rubén, el mayor, intentó salvarlo y propuso echarlo vivo en la cisterna, pensando en rescatarlo después. Le quitaron la túnica y lo echaron en una cisterna seca (Gn 37:22-24). Las cisternas de la región tenían forma de botella: de boca estrecha y profundas, era imposible salir sin ayuda.',
        { h: 'Comieron pan' },
        'El texto añade un detalle terrible: «Y se sentaron a comer pan» (Gn 37:25). Años después, ellos mismos recordarán: «vimos la angustia de su alma cuando nos rogaba, y no le escuchamos» (Gn 42:21). Mientras comían, pasó una caravana de ismaelitas que venía de Galaad con especias, bálsamo y mirra rumbo a Egipto. Judá propuso venderlo: «¿Qué provecho hay en que matemos a nuestro hermano?» (Gn 37:26). Lo vendieron por veinte piezas de plata (Gn 37:28), el precio de un esclavo joven en esa época. El texto llama a los mercaderes ismaelitas y también madianitas: eran grupos de comerciantes del desierto emparentados con Abraham.',
        { h: 'La túnica ensangrentada' },
        'Rubén volvió a la cisterna y no encontró a José. Los hermanos mataron un cabrito, tiñeron la túnica en su sangre y se la enviaron a su padre: «Esto hemos hallado; reconoce ahora si es la túnica de tu hijo, o no» (Gn 37:32). Jacob, que había engañado a su padre con pieles de cabrito y la ropa de su hermano, ahora era engañado por sus hijos con la sangre de un cabrito y la ropa de su hijo. Rasgó sus vestidos y no quiso ser consolado: «Descenderé enlutado a mi hijo hasta el Seol» (Gn 37:35).',
        'Mientras tanto, los madianitas vendieron a José en Egipto a Potifar, oficial de Faraón (Gn 37:36). El hijo amado iba camino a la esclavitud. Pero el relato ya deja ver que Dios no ha perdido el control: la historia del soñador apenas comienza.'
      ],
      pensar: 'Los hermanos de José se sentaron a comer mientras él clamaba desde la cisterna. ¿Hay algún sufrimiento cerca de ti ante el cual te has vuelto indiferente?'
    },
    {
      id: 'tamar', n: 'Judá y Tamar', ref: 'Génesis 38:1-30; Rut 4:12, 18-22; Mateo 1:3', fecha: -1890,
      visual: [
        tabla({
          titulo: 'De Judá a David y a Jesús',
          cab: ['Generación', 'Nombre', 'Texto'],
          filas: [
            ['1', 'Judá y Tamar', 'Gn 38:29-30'],
            ['2', 'Fares', 'Rt 4:18'],
            ['3–5', 'Hezrón, Ram, Aminadab', 'Rt 4:19'],
            ['6–7', 'Naasón, Salmón (con Rahab)', 'Rt 4:20; Mt 1:5'],
            ['8', 'Booz (con Rut)', 'Rt 4:21'],
            ['9–10', 'Obed, Isaí', 'Rt 4:22'],
            ['11', 'David', 'Rt 4:22; Mt 1:6'],
            ['…', 'Jesús, «hijo de David»', 'Mt 1:1-16']
          ],
          nota: 'Mateo menciona a Tamar en la genealogía de Jesús (Mt 1:3), junto con Rahab, Rut y la mujer de Urías.'
        }),
        cita('Génesis 38:24-26', 'Sucedió que al cabo de unos tres meses fue dado aviso a Judá, diciendo: Tamar tu nuera ha fornicado, y ciertamente está encinta a causa de las fornicaciones. Y Judá dijo: Sacadla, y sea quemada. Pero ella, cuando la sacaban, envió a decir a su suegro: Del varón cuyas son estas cosas, estoy encinta. También dijo: Mira ahora de quién son estas cosas, el sello, el cordón y el báculo. Entonces Judá los reconoció, y dijo: Más justa es ella que yo, por cuanto no la he dado a Sela mi hijo. Y nunca más la conoció.')
      ],
      texto: [
        'La historia de José se interrumpe de pronto con un capítulo sobre Judá. Parece un desvío, pero no lo es. Judá fue el que propuso vender a José, y aquí lo vemos alejarse de su familia y caer bajo. Cuando vuelva a aparecer en la historia de José, será otro hombre. Génesis 38 cuenta cómo cambió.',
        { h: 'Judá se aparta' },
        '«Aconteció en aquel tiempo, que Judá se apartó de sus hermanos» (Gn 38:1). Se fue a vivir con un adulamita, se casó con una cananea y tuvo tres hijos. Casó al mayor, Er, con una mujer llamada Tamar. Er era malo ante Jehová y murió. Según la costumbre, que la ley de Moisés regularía después (Dt 25:5-6), el hermano debía casarse con la viuda para darle descendencia al difunto. Onán se casó con ella, pero se negó a dar descendencia a su hermano, y también murió. Judá, con miedo de perder a su tercer hijo, Sela, envió a Tamar a la casa de su padre con una promesa que no pensaba cumplir (Gn 38:11).',
        { h: 'La trampa de Tamar' },
        'Pasaron los años y Tamar comprendió que Judá no le daría a Sela. Cuando supo que su suegro, ya viudo, subía a Timnat a esquilar sus ovejas, se quitó la ropa de viuda, se cubrió con un velo y se sentó junto al camino. Judá la tomó por una ramera y se unió a ella, y le dejó como prenda su sello, su cordón y su báculo, que eran como su documento de identidad (Gn 38:18). Tamar quedó embarazada.',
        { h: 'Más justa es ella que yo' },
        'Tres meses después le dijeron a Judá que su nuera había fornicado y estaba encinta. Judá, con dureza, ordenó: «Sacadla, y sea quemada» (Gn 38:24). Tamar envió a decirle: «Del varón cuyas son estas cosas, estoy encinta», con las prendas. Judá las reconoció y dijo: «Más justa es ella que yo, por cuanto no la he dado a Sela mi hijo» (Gn 38:26). Fue la primera vez que Judá reconoció públicamente su culpa. El hombre que había mandado a su padre la túnica de José para que la reconociera (Gn 37:32), ahora tiene que reconocer sus propias prendas.',
        { h: 'En la línea del Mesías' },
        'Tamar tuvo gemelos, Fares y Zara. Fares fue antepasado del rey David, como muestra la tabla, y Mateo nombra a Tamar en la genealogía de Jesús (Mt 1:3). La Biblia no aprueba lo que hizo Tamar ni lo que hizo Judá: el capítulo está lleno de pecado. Pero muestra que Dios trabaja en las historias más quebradas para llevar adelante su promesa. El Mesías vendría de Judá, el hermano que vendió a José, y de Tamar, una extranjera tratada con injusticia.'
      ],
      pensar: 'Judá dijo: «Más justa es ella que yo». ¿Hay alguna injusticia en la que necesitas reconocer tu culpa en lugar de juzgar a otros?'
    },
    {
      id: 'potifar', n: 'En casa de Potifar', ref: 'Génesis 39:1-20; 1 Corintios 10:13; 2 Timoteo 2:22', fecha: -1897,
      visual: [
        img('img/pt-jose-potifar.webp', 'En el patio de una casa egipcia rica, con columnas pintadas y un estanque, José, joven y sin barba, con faldellín blanco de siervo egipcio y cabello corto, sale corriendo y deja su manto en las manos de una mujer egipcia de peluca negra y vestido de lino fino que lo sujeta', '«Y ella lo asió por su ropa… Entonces él dejó su ropa en las manos de ella, y huyó y salió» (Génesis 39:12).'),
        tabla({
          titulo: 'Dios estaba con José',
          cab: ['Lugar', 'Lo que dice el texto', 'Texto'],
          filas: [
            ['Casa de Potifar', '«Mas Jehová estaba con José, y fue varón próspero»', 'Gn 39:2'],
            ['Casa de Potifar', '«Jehová bendijo la casa del egipcio a causa de José»', 'Gn 39:5'],
            ['La cárcel', '«Pero Jehová estaba con José y le extendió su misericordia»', 'Gn 39:21'],
            ['La cárcel', '«Lo que él hacía, Jehová lo prosperaba»', 'Gn 39:23']
          ],
          nota: 'El capítulo comienza y termina con la misma afirmación: Dios estaba con José, en la casa y en la cárcel.'
        })
      ],
      texto: [
        'José llegó a Egipto como esclavo y fue comprado por Potifar, «oficial de Faraón, capitán de la guardia, varón egipcio» (Gn 39:1). Egipto vivía entonces el Reino Medio, una época de prosperidad, con un faraón fuerte y una administración bien organizada. Un muchacho extranjero, sin derechos y lejos de su padre, tuvo que aprender una lengua y una cultura nuevas.',
        { h: 'Jehová estaba con José' },
        'Lo que se repite en el capítulo, y la tabla lo muestra, es que Dios estaba con José. No lo libró de la esclavitud, pero estaba con él en ella. José trabajó bien, y Potifar vio que Dios lo prosperaba: lo hizo mayordomo de toda su casa, y Dios bendijo la casa del egipcio por causa de José (Gn 39:5). Se cumplía en pequeño la promesa a Abraham: en ti serán benditas las familias de la tierra.',
        { h: 'La tentación' },
        '«Y era José de hermoso semblante y bella presencia» (Gn 39:6), y la mujer de Potifar puso sus ojos en él: «Duerme conmigo». Era una tentación fuerte: un joven lejos de su familia, sin nadie que lo viera, ante la mujer de su amo, que podía premiarlo o castigarlo. José se negó. Dio dos razones: no podía traicionar la confianza de su amo, y sobre todo, «¿cómo, pues, haría yo este grande mal, y pecaría contra Dios?» (Gn 39:9). Para José, el pecado no era solo contra Potifar o contra la mujer: era contra Dios.',
        { h: 'Huir' },
        'Ella insistía «cada día», y José ni siquiera aceptaba estar con ella. Un día, cuando no había nadie en la casa, ella lo tomó de la ropa. José no discutió ni se quedó a explicar: dejó la ropa en sus manos y huyó (Gn 39:12). Pablo le escribirá a Timoteo: «Huye también de las pasiones juveniles» (2 Ti 2:22). Hay tentaciones que se resisten, y otras de las que solo se puede huir.',
        { h: 'La segunda túnica' },
        'Por segunda vez, a José le quitaron la ropa y la usaron para mentir sobre él. La mujer lo acusó de intentar violarla, mostrando la ropa como prueba. Potifar se encendió en ira y lo echó en la cárcel, «donde estaban los presos del rey» (Gn 39:20). La pena por ese delito podía ser la muerte; que Potifar solo lo encarcelara quizá muestra que no creyó del todo a su esposa. José hizo lo correcto, y le fue peor. Pero el capítulo termina igual que empezó: «Jehová estaba con José» (Gn 39:21).'
      ],
      pensar: 'José preguntó: «¿Cómo haría yo este grande mal, y pecaría contra Dios?». ¿Ves tus tentaciones como algo entre tú y otra persona, o como algo entre tú y Dios?'
    },
    {
      id: 'carcel', n: 'En la cárcel', ref: 'Génesis 39:21–40:23; Salmos 105:17-19', fecha: -1887,
      visual: [
        img('img/pt-jose-carcel.webp', 'En una cárcel egipcia de muros de adobe con luz que entra por una abertura alta, José, joven, escucha con atención a dos presos egipcios sentados en el suelo, uno vestido como copero de la corte y otro con harina en las manos como panadero; los tres a la luz de una lámpara de aceite', '«¿No son de Dios las interpretaciones? Contádmelo ahora» (Génesis 40:8).'),
        cita('Salmos 105:16-19', 'Trajo hambre sobre la tierra, Y quebrantó todo sustento de pan. Envió un varón delante de ellos; A José, que fue vendido por siervo. Afligieron sus pies con grillos; En cárcel fue puesta su persona. Hasta la hora que se cumplió su palabra, El dicho de Jehová le probó.')
      ],
      texto: [
        'En la cárcel, José volvió a empezar desde abajo, y otra vez Dios le dio gracia. El jefe de la cárcel le confió a todos los presos, «todo lo que se hacía allí, él lo hacía» (Gn 39:22). José no se amargó: trabajó, sirvió y se ocupó de los demás. El Salmo 105, en la otra pestaña, recuerda que «Afligieron sus pies con grillos; En cárcel fue puesta su persona» (Sal 105:18), «hasta la hora que se cumplió su palabra» (Sal 105:19). La palabra de Dios lo probó.',
        { h: 'El copero y el panadero' },
        'Un día llegaron a la cárcel dos altos funcionarios de Faraón que habían caído en desgracia: el jefe de los coperos, que servía el vino al rey y cuidaba que no lo envenenaran, y el jefe de los panaderos. Una mañana, José los vio tristes y les preguntó por qué. Los dos habían tenido un sueño y no había quien se los interpretara. En Egipto había sacerdotes especialistas en interpretar sueños, con libros de sueños y sus significados. José les respondió: «¿No son de Dios las interpretaciones? Contádmelo ahora» (Gn 40:8).',
        { h: 'Tres días' },
        'El copero había soñado con una vid de tres sarmientos que brotaban y daban uvas, que él exprimía en la copa de Faraón. José le dijo que en tres días Faraón lo restituiría a su puesto. El panadero, animado, contó el suyo: tres canastillos de pan sobre su cabeza, y las aves comiendo de ellos. José le dio la mala noticia: en tres días Faraón lo mandaría ahorcar. Al tercer día, que era el cumpleaños de Faraón, todo ocurrió como José dijo (Gn 40:20-22).',
        { h: 'Acuérdate de mí' },
        'José le había pedido al copero: «Acuérdate, pues, de mí cuando tengas ese bien, y te ruego que uses conmigo de misericordia, y hagas mención de mí a Faraón, y me saques de esta casa» (Gn 40:14). Le contó que había sido raptado de la tierra de los hebreos y que no había hecho nada para estar en la cárcel. Pero el capítulo termina con una frase dura: «Y el jefe de los coperos no se acordó de José, sino que le olvidó» (Gn 40:23).',
        'José pasó dos años más en la cárcel (Gn 41:1). Entre la cisterna de Dotán y el palacio de Faraón pasaron trece años. Hubo una espera que parecía inútil y un favor que no se devolvió. Pero el olvido del copero también estaba en las manos de Dios: si José hubiera salido entonces, quizá habría vuelto a Canaán, y no habría estado en Egipto cuando Faraón soñó.'
      ],
      pensar: 'El copero se olvidó de José por dos años. ¿Cómo reaccionas cuando las personas que podían ayudarte se olvidan de ti? ¿Puedes ver la mano de Dios aun en esas demoras?'
    },
    {
      id: 'faraon', n: 'Ante Faraón', ref: 'Génesis 41:1-57; Hechos 7:10', fecha: -1885,
      visual: [
        img('../egipto/img/egipto-jose-anillo.webp', 'En la sala del trono de un palacio egipcio, el faraón pone su anillo en la mano de José, vestido con ropas de lino fino y un collar de oro, ante los cortesanos', '«Entonces Faraón quitó su anillo de su mano, y lo puso en la mano de José» (Génesis 41:42).'),
        tabla({
          titulo: 'José en el Egipto del Reino Medio',
          cab: ['Detalle de Génesis 41', 'Lo que se sabe de Egipto'],
          filas: [
            ['Los «magos» y sabios de Egipto (v. 8)', 'Sacerdotes lectores que interpretaban sueños con manuales; se conserva un libro de sueños de esa época'],
            ['José se afeita y cambia de ropa (v. 14)', 'Los egipcios se afeitaban; los semitas llevaban barba'],
            ['Anillo, ropas de lino y collar de oro (v. 42)', 'Así se investía a un alto funcionario: el sello daba autoridad para firmar'],
            ['El segundo carro y «¡Doblad la rodilla!» (v. 43)', 'Los funcionarios principales iban en carro, precedidos de heraldos'],
            ['Nombre egipcio, Zafnat-panea (v. 45)', 'Los extranjeros en la corte recibían nombres egipcios'],
            ['Esposa hija del sacerdote de On (v. 45)', 'On (Heliópolis) era el gran centro del culto al sol'],
            ['Graneros en las ciudades (v. 48)', 'Egipto almacenaba grano en graneros del estado']
          ],
          nota: 'Los detalles de la historia de José encajan en la vida de la corte egipcia.'
        })
      ],
      texto: [
        'Dos años después, Faraón tuvo dos sueños. En el primero, siete vacas hermosas y gordas subían del Nilo, y detrás siete vacas feas y flacas que se comían a las gordas. En el segundo, siete espigas llenas y hermosas eran devoradas por siete espigas menudas y quemadas por el viento solano (Gn 41:1-7). Ninguno de los magos y sabios de Egipto pudo interpretarlos. Entonces el copero se acordó de José.',
        { h: 'No está en mí' },
        'Sacaron a José de la cárcel a toda prisa; se afeitó y cambió de ropa, como correspondía para presentarse ante el rey de Egipto. Faraón le dijo que había oído que sabía interpretar sueños. José respondió: «No está en mí; Dios será el que dé respuesta propicia a Faraón» (Gn 41:16). El muchacho que había contado sus sueños con orgullo ahora era un hombre que daba la gloria a Dios.',
        { h: 'Siete años de abundancia y siete de hambre' },
        'José explicó que los dos sueños eran uno: Dios mostraba a Faraón lo que iba a hacer. Vendrían siete años de gran abundancia y siete de hambre tan grave que la abundancia sería olvidada. Y que el sueño se repitiera significaba que «la cosa es firme de parte de Dios» (Gn 41:32). Luego, sin que nadie se lo pidiera, José propuso un plan: buscar un hombre prudente y sabio, poner administradores en la tierra y guardar la quinta parte de las cosechas de los años buenos para los años malos.',
        { h: 'Sobre toda la tierra de Egipto' },
        'Faraón preguntó: «¿Acaso hallaremos a otro hombre como éste, en quien esté el espíritu de Dios?» (Gn 41:38). Puso a José sobre su casa y sobre toda la tierra de Egipto, le dio su anillo de sello, ropas de lino finísimo, un collar de oro y su segundo carro, y delante de él pregonaban: «¡Doblad la rodilla!» (Gn 41:43). Le dio un nombre egipcio, Zafnat-panea, y por esposa a Asenat, hija del sacerdote de On. José tenía treinta años (Gn 41:46). La tabla muestra cómo estos detalles encajan en el Egipto de la época.',
        { h: 'Manasés y Efraín' },
        'En los años de abundancia, José juntó grano «como arena del mar» (Gn 41:49) y tuvo dos hijos. Al primero lo llamó Manasés, porque dijo: «Dios me hizo olvidar todo mi trabajo, y toda la casa de mi padre»; al segundo, Efraín, porque dijo: «Dios me hizo fructificar en la tierra de mi aflicción» (Gn 41:51-52). Después vino el hambre, no solo en Egipto: «de toda la tierra venían a Egipto para comprar de José» (Gn 41:57). La bendición de Abraham alcanzaba a las naciones por medio de José.',
        { posturas: {
          titulo: '¿Bajo qué faraón gobernó José?',
          a: { n: 'En el Reino Medio (dinastía XII)', t: 'Con la cronología del texto, José llegó al poder hacia el 1885 a.C., bajo faraones como Sesostris II o Sesostris III. Fue una época de gobierno fuerte, de obras de riego en el Fayum y de reformas que concentraron la tierra en manos del rey (Gn 47:20). En ese tiempo hay registros de semitas viviendo en el delta.' },
          b: { n: 'Bajo los hicsos', t: 'Otros estudiosos lo ubican hacia el 1650 a.C., cuando gobernaban el delta los hicsos, reyes de origen semita. Un faraón semita habría recibido mejor a un hebreo, y su caída explicaría al «nuevo rey que no conocía a José» (Éx 1:8). Esta lectura supone la estancia corta en Egipto o una fecha más tardía del Éxodo.' },
          c: 'Este recurso sigue la primera, que es la que resulta de la cronología del texto, como en Egipto. Génesis no da el nombre del faraón, y ninguna inscripción egipcia conocida menciona a José.'
        } }
      ],
      pensar: 'José dijo: «No está en mí; Dios será el que dé respuesta». Cuando Dios te da un don o un éxito, ¿a quién se lleva el reconocimiento?'
    },
    {
      id: 'hermanos', n: 'Los hermanos bajan a Egipto', ref: 'Génesis 42:1–44:34', fecha: -1877,
      visual: [
        mapa({ view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['hebron', 'gaza', 'pelusio', 'gosen', 'menfis'], trazos: ['pt-hermanos'] }, 'De Hebrón a Egipto'),
        img('img/pt-hermanos-jose.webp', 'En una sala de la administración egipcia, José, con peluca corta egipcia, collar de oro y túnica de lino blanco, sentado en un estrado, mira con el rostro severo a diez hombres de barba, vestidos con mantos de lana de Canaán, que se inclinan con el rostro a tierra; un intérprete egipcio está a su lado', '«Y llegaron los hermanos de José, y se inclinaron a él rostro a tierra» (Génesis 42:6).')
      ],
      texto: [
        'El hambre llegó también a Canaán. Jacob oyó que en Egipto había grano y les dijo a sus hijos: «¿Por qué os estáis mirando?» (Gn 42:1). Envió a los diez hermanos a comprar, pero no a Benjamín, el hijo menor de Raquel, por temor de que le pasara algo. El mapa muestra el camino, unos 400 kilómetros desde Hebrón, más de dos semanas con asnos cargados.',
        { h: 'El primer sueño se cumple' },
        'José era el gobernador que vendía el grano. Sus hermanos llegaron «y se inclinaron a él rostro a tierra» (Gn 42:6). Habían pasado unos veinte años. José los reconoció, pero ellos no a él: tenía ropa egipcia, nombre egipcio, hablaba por intérprete y estaba afeitado. «se acordó José de los sueños que había tenido acerca de ellos» (Gn 42:9). Los manojos se inclinaban.',
        { h: 'Una prueba' },
        'José les habló con dureza y los acusó de ser espías. No lo hizo por venganza, sino para saber si habían cambiado. Les preguntó por su familia, y ellos contaron que eran doce hermanos, que el menor estaba con su padre «y otro no parece» (Gn 42:13). José encarceló a Simeón y les exigió volver con el hermano menor. Entonces, sin saber que José los entendía, los hermanos hablaron entre ellos: «Verdaderamente hemos pecado contra nuestro hermano» (Gn 42:21). Veinte años después, la culpa seguía viva. José se apartó y lloró.',
        { h: 'Benjamín' },
        'Jacob se negó a dejar ir a Benjamín, hasta que el hambre lo obligó. Judá se ofreció como fiador: «Yo te respondo por él; a mí me pedirás cuenta» (Gn 43:9). En el segundo viaje, José los recibió en su casa, les dio de comer y a Benjamín le sirvió una porción cinco veces mayor (Gn 43:34). Quería ver si tenían envidia del hermano preferido, como la habían tenido de él. Luego hizo esconder su copa de plata en el costal de Benjamín, y cuando ya iban de camino, los hizo detener. La copa apareció en el costal del menor. José declaró que Benjamín se quedaría como esclavo, y que los demás podían volver en paz a su padre (Gn 44:17).',
        { h: 'Judá se ofrece' },
        'Era la prueba final: tenían la oportunidad de abandonar al hijo preferido de su padre, como habían hecho con José. Entonces Judá se acercó y pronunció el discurso más largo de Génesis (Gn 44:18-34). Contó el dolor de su padre, que no sobreviviría a perder a Benjamín, y terminó pidiendo: «te ruego, por tanto, que quede ahora tu siervo en lugar del joven por siervo de mi señor, y que el joven vaya con sus hermanos» (Gn 44:33). Judá, el que había propuesto vender a José como esclavo, ahora se ofrecía como esclavo en lugar de su hermano. Los hermanos habían cambiado.'
      ],
      pensar: 'Judá, el que vendió a su hermano, terminó ofreciéndose en lugar de otro hermano. ¿Qué te dice esta historia sobre la capacidad de Dios para transformar a una persona?'
    },
    {
      id: 'yo-soy-jose', n: '«Yo soy José»', ref: 'Génesis 45:1-28; 50:15-21; Romanos 8:28', fecha: -1877,
      visual: [
        img('img/pt-yo-soy-jose.webp', 'En una sala egipcia vacía de sirvientes, José, con ropas egipcias de gobernador, llora en voz alta mientras abraza a Benjamín, un joven de barba corta; los otros hermanos, con mantos de lana de Canaán, retroceden asombrados y temerosos', '«Yo soy José vuestro hermano, el que vendisteis para Egipto» (Génesis 45:4).'),
        cita('Génesis 45:4-8', 'Entonces dijo José a sus hermanos: Acercaos ahora a mí. Y ellos se acercaron. Y él dijo: Yo soy José vuestro hermano, el que vendisteis para Egipto. Ahora, pues, no os entristezcáis, ni os pese de haberme vendido acá; porque para preservación de vida me envió Dios delante de vosotros. Pues ya ha habido dos años de hambre en medio de la tierra, y aún quedan cinco años en los cuales ni habrá arada ni siega. Y Dios me envió delante de vosotros, para preservaros posteridad sobre la tierra, y para daros vida por medio de gran liberación. Así, pues, no me enviasteis acá vosotros, sino Dios, que me ha puesto por padre de Faraón y por señor de toda su casa, y por gobernador en toda la tierra de Egipto.')
      ],
      texto: [
        'José ya no pudo contenerse. Hizo salir a todos los egipcios, y quedó solo con sus hermanos, «al darse a conocer José a sus hermanos. Entonces se dio a llorar a gritos» (Gn 45:1-2), tan fuerte que lo oyeron los egipcios y la casa de Faraón. Luego dijo: «Yo soy José; ¿vive aún mi padre?» (Gn 45:3). Sus hermanos no le podían responder, porque estaban turbados delante de él.',
        { h: 'Dios me envió delante de vosotros' },
        'José los hizo acercarse: «Yo soy José vuestro hermano, el que vendisteis para Egipto. Ahora, pues, no os entristezcáis, ni os pese de haberme vendido acá; porque para preservación de vida me envió Dios delante de vosotros» (Gn 45:4-5). No negó lo que hicieron: «el que vendisteis». Pero vio más allá del pecado de ellos la mano de Dios. Tres veces lo repite: Dios me envió (Gn 45:5, 7, 8). Habían pasado dos años de hambre y faltaban cinco. Dios había puesto a José en Egipto para salvar a la familia de la promesa, y con ella a muchos pueblos.',
        { h: 'Perdón sin venganza' },
        'José abrazó a Benjamín y lloró; besó a todos sus hermanos y lloró sobre ellos, «y después sus hermanos hablaron con él» (Gn 45:15). Los que veinte años antes «no podían hablarle pacíficamente» (Gn 37:4), ahora hablaban con él. Faraón se alegró e invitó a toda la familia a vivir en Egipto. José envió carros a buscar a su padre, con regalos, y a sus hermanos les dio un consejo muy humano: «No riñáis por el camino» (Gn 45:24).',
        { h: 'Vive todavía' },
        'Cuando los hijos llegaron a Hebrón y le dijeron a Jacob que José vivía y gobernaba en Egipto, «el corazón de Jacob se afligió, porque no los creía» (Gn 45:26). Pero cuando vio los carros que José había enviado, su espíritu revivió: «Basta; José mi hijo vive todavía; iré, y le veré antes que yo muera» (Gn 45:28).',
        { h: 'Vosotros pensasteis mal' },
        'Diecisiete años después, cuando murió Jacob, los hermanos tuvieron miedo de que José se vengara. Él lloró y les respondió con la frase que resume toda su historia: «Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo» (Gn 50:20). Es una de las expresiones más claras de la providencia de Dios en la Biblia. El mal que los hombres hacen es mal, y ellos son responsables. Pero Dios es más grande, y lo usa para cumplir su propósito. Pablo lo dirá así: «a los que aman a Dios, todas las cosas les ayudan a bien» (Ro 8:28).'
      ],
      pensar: 'José vio la mano de Dios aun en el mal que le hicieron, y por eso pudo perdonar. ¿Hay alguna herida de tu pasado que necesitas mirar a la luz de Génesis 50:20?'
    },
    {
      id: 'gosen', n: 'Jacob en Gosén', ref: 'Génesis 46:1–47:31; Éxodo 1:1-7; Hebreos 11:9, 13', fecha: -1876,
      visual: [
        pasos([
          { t: 'Jacob sale de Hebrón con toda su casa y llega a Beerseba, donde ofrece sacrificios al Dios de su padre Isaac (Gn 46:1).', estado: { view: V.sur, capas: [], lugares: ['hebron', 'beerseba'], trazos: ['pt-jacob-egipto'] } },
          { t: 'Dios le habla de noche: «No temas de descender a Egipto, porque allí yo haré de ti una gran nación» (Gn 46:3).', estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['hebron', 'beerseba', 'pelusio', 'gosen'], trazos: ['pt-jacob-egipto'] } },
          { t: 'Setenta personas de la casa de Jacob se establecen en Gosén, en el delta oriental del Nilo (Gn 46:27; 47:6).', estado: { view: [[29.6, 30.6], [31.7, 33.4]], capas: ['egipto-1900'], lugares: ['gosen', 'on', 'menfis', 'pelusio', 'tanis', 'r-itjtawy'], trazos: ['pt-jacob-egipto'] } }
        ], 'Jacob baja a Egipto'),
        img('img/pt-jacob-faraon.webp', 'En la sala del trono de un palacio egipcio, Jacob, muy anciano, de barba blanca larga y manto de lana a rayas, apoyado en un bastón, levanta la mano para bendecir al faraón, que lo escucha sentado; José, con ropas egipcias, está de pie junto a su padre', '«Y Jacob bendijo a Faraón» (Génesis 47:7).')
      ],
      texto: [
        'Jacob salió de Hebrón con todo lo que tenía. En Beerseba, el último lugar de Canaán antes del desierto, se detuvo y ofreció sacrificios al Dios de su padre Isaac (Gn 46:1). Isaac había recibido la orden de no bajar a Egipto (Gn 26:2). ¿Podía Jacob hacerlo? Dios le habló esa noche: «No temas de descender a Egipto, porque allí yo haré de ti una gran nación. Yo descenderé contigo a Egipto, y yo también te haré volver» (Gn 46:3-4).',
        { h: 'Setenta personas' },
        'Génesis 46 da la lista de los que bajaron: los hijos de Jacob con sus hijos y nietos. En total, «todas las personas de la casa de Jacob, que entraron en Egipto, fueron setenta» (Gn 46:27). Setenta, el mismo número de las naciones de Génesis 10: la familia elegida era como una pequeña humanidad. Cuatrocientos treinta años después, saldrían de Egipto unos seiscientos mil hombres de a pie, sin contar a los niños (Éx 12:37).',
        { h: 'El encuentro' },
        'José unció su carro y fue a Gosén a recibir a su padre. Cuando lo vio, «se echó sobre su cuello, y lloró sobre su cuello largamente» (Gn 46:29). Jacob le dijo: «Muera yo ahora, ya que he visto tu rostro» (Gn 46:30). El padre que había pasado veintidós años creyendo muerto a su hijo lo tenía otra vez en sus brazos.',
        { h: 'Jacob ante Faraón' },
        'José presentó a cinco de sus hermanos y a su padre ante Faraón. Les recomendó decir que eran pastores, porque los egipcios despreciaban a los pastores de ovejas (Gn 46:34), y así les darían una región aparte. Faraón les concedió Gosén, en el delta oriental, la mejor tierra para el ganado. Cuando Faraón le preguntó la edad, Jacob respondió: «Los días de los años de mi peregrinación son ciento treinta años; pocos y malos han sido los días de los años de mi vida» (Gn 47:9). Y el anciano pastor bendijo al rey de Egipto, dos veces (Gn 47:7, 10). Hebreos dice que el menor es bendecido por el mayor (He 7:7): el peregrino era más grande que el faraón.',
        { h: 'Gosén' },
        'Gosén era la región del delta oriental del Nilo, cerca de la frontera con Canaán, con pastos y agua. El mapa la muestra. Los arqueólogos han encontrado en esa zona, en Tell el-Dab\'a, restos de una población semita que comenzó a crecer en el siglo XIX a.C. Allí Israel creció y se multiplicó «en gran manera» (Gn 47:27; Éx 1:7). Mientras tanto, el hambre seguía, y José administró Egipto con dureza: el pueblo vendió su ganado, sus tierras y a sí mismo a Faraón a cambio de grano, y pagaba un quinto de las cosechas (Gn 47:13-26).',
        ir('Ver «Moisés y el Éxodo» en Egipto', '../../egipto/#biblia/2')
      ],
      pensar: 'Jacob dijo que sus días habían sido «pocos y malos», y aun así bendijo a Faraón. ¿Puedes ser bendición para otros aunque tu propia vida haya sido difícil?'
    },
    {
      id: 'genesis-49', n: 'Las bendiciones de Génesis 49', ref: 'Génesis 48:1-22; 49:1-33; Hebreos 11:21; Apocalipsis 5:5', fecha: -1859,
      visual: [
        tabla({
          titulo: 'Jacob bendice a sus hijos (Génesis 49)',
          cab: ['Hijo', 'Lo que dice Jacob', 'Lo que pasó después'],
          filas: [
            ['Rubén', 'Pierde la primogenitura por su pecado (v. 3-4; 35:22)', 'La primogenitura pasa a José (1 Cr 5:1-2)'],
            ['Simeón y Leví', 'Su ira será dispersada en Israel (v. 5-7)', 'Simeón queda dentro de Judá; Leví, sin territorio, pero como tribu sacerdotal'],
            ['Judá', '«No será quitado el cetro de Judá» (v. 10)', 'De Judá vienen David y el Mesías, el León de la tribu de Judá (Ap 5:5)'],
            ['Zabulón, Isacar, Dan, Gad, Aser, Neftalí', 'Imágenes de su carácter y su tierra (v. 13-21)', 'Su territorio en la repartición de Josué'],
            ['José', 'Rama fructífera; bendiciones del Dios de su padre (v. 22-26)', 'Dos tribus: Efraín y Manasés (Gn 48:5)'],
            ['Benjamín', 'Lobo arrebatador (v. 27)', 'Tribu de Saúl y, siglos después, de Pablo (Fil 3:5)']
          ],
          nota: 'Génesis 49 es un poema profético. Se lee mejor junto con la historia de cada tribu.'
        }),
        cita('Génesis 49:8-10', 'Judá, te alabarán tus hermanos; Tu mano en la cerviz de tus enemigos; Los hijos de tu padre se inclinarán a ti. Cachorro de león, Judá; De la presa subiste, hijo mío. Se encorvó, se echó como león, Así como león viejo: ¿quién lo despertará? No será quitado el cetro de Judá, Ni el legislador de entre sus pies, Hasta que venga Siloh; Y a él se congregarán los pueblos.')
      ],
      texto: [
        'Jacob vivió diecisiete años en Egipto. Cuando se acercó su muerte, hizo jurar a José que no lo sepultaría en Egipto, sino con sus padres en Canaán (Gn 47:29-31). Después vinieron dos escenas de bendición: la de los hijos de José y la de sus propios hijos.',
        { h: 'Las manos cruzadas' },
        'José llevó a sus dos hijos, Manasés y Efraín, para que su padre los bendijera, y los puso de modo que Manasés, el mayor, quedara a la derecha de Jacob. Pero Jacob cruzó los brazos y puso la mano derecha sobre Efraín, el menor. José quiso corregirlo, y Jacob respondió: «Lo sé, hijo mío, lo sé» (Gn 48:19). Otra vez, como con Isaac y Jacob, el menor es preferido. Jacob adoptó a los dos como hijos propios: José recibió una doble porción, dos tribus en Israel (Gn 48:5). Hebreos destaca esta escena como un acto de fe (He 11:21).',
        { h: 'Lo que os ha de acontecer en los días venideros' },
        'Luego Jacob reunió a sus doce hijos: «Juntaos, y os declararé lo que os ha de acontecer en los días venideros» (Gn 49:1). Lo que sigue es un poema profético sobre el futuro de cada tribu. La tabla lo resume. Rubén, el primogénito, perdió su lugar por haberse acostado con la concubina de su padre (Gn 35:22). Simeón y Leví recibieron la condena de su violencia en Siquem.',
        { h: 'El cetro de Judá' },
        'Judá recibió la bendición más importante: «No será quitado el cetro de Judá, ni el legislador de entre sus pies, hasta que venga Siloh; y a él se congregarán los pueblos» (Gn 49:10). Judá sería la tribu real. De ella salieron David y su dinastía, y la tradición judía y cristiana vio en «Siloh» al Mesías, el rey a quien obedecerán los pueblos. Juan lo ve en el cielo: «el León de la tribu de Judá, la raíz de David, ha vencido» (Ap 5:5). El hermano que vendió a José y después se ofreció por Benjamín es el padre de la línea de Cristo.',
        { h: 'José y Benjamín' },
        'A José, Jacob lo llamó «rama fructífera junto a una fuente» (Gn 49:22), atacado por los arqueros pero sostenido por «el Fuerte de Jacob», el Pastor, la Roca de Israel (Gn 49:24). Después, Jacob dio sus últimas instrucciones: que lo sepultaran en la cueva de Macpela, con Abraham y Sara, Isaac y Rebeca, y Lea. Encogió sus pies en la cama, «y expiró, y fue reunido con sus padres» (Gn 49:33).'
      ],
      pensar: 'Jacob, que comenzó como un engañador, terminó su vida bendiciendo con fe. ¿Qué te gustaría decirles a tus hijos o a los que vienen detrás de ti al final de tu vida?'
    },
    {
      id: 'huesos', n: 'La muerte de José y sus huesos', ref: 'Génesis 50:1-26; Éxodo 13:19; Josué 24:32; Hebreos 11:22', fecha: [-1859, -1805],
      visual: [
        pasos([
          { t: 'El cortejo fúnebre de Jacob sube de Egipto con los siervos de Faraón, carros y gente de a caballo (Gn 50:7-9).', estado: { view: V.egipto_canaan, capas: ['egipto-1900'], lugares: ['gosen', 'pelusio', 'gaza', 'hebron'], trazos: ['pt-entierro'] } },
          { t: 'Jacob es sepultado en la cueva de Macpela, en Hebrón (Gn 50:13).', estado: { view: V.centro, capas: [], lugares: ['hebron', 'mamre', 'siquem'], trazos: ['pt-entierro'] } },
          { t: 'Siglos después, los huesos de José son sepultados en Siquem, en el campo que compró Jacob (Jos 24:32).', estado: { view: V.centro, capas: [], lugares: ['hebron', 'siquem'], trazos: [] } }
        ], 'Dos entierros'),
        img('../egipto/img/egipto-embalsamamiento.webp', 'Embalsamadores egipcios preparan un cuerpo envuelto en vendas de lino sobre una mesa de piedra, con vasijas de aceites y natrón', '«Y lo embalsamaron, y fue puesto en un ataúd en Egipto» (Génesis 50:26).')
      ],
      texto: [
        'Cuando Jacob murió, José se echó sobre el rostro de su padre, lloró y lo besó. Mandó a los médicos que lo embalsamaran, según la costumbre egipcia, y los egipcios lo lloraron setenta días, casi como a un faraón (Gn 50:1-3). Luego José pidió permiso para cumplir el juramento y sepultar a su padre en Canaán.',
        { h: 'Un cortejo hacia Canaán' },
        'Subió con él un cortejo enorme: los siervos de Faraón, los ancianos de su casa y de Egipto, toda la casa de José y sus hermanos, con carros y gente de a caballo (Gn 50:7-9). Los cananeos, al ver el duelo, dijeron: «Llanto grande es este de los egipcios» (Gn 50:11). Sepultaron a Jacob en la cueva de Macpela, frente a Mamre. El mapa sigue el camino. El primer viaje de los israelitas de Egipto a Canaán fue un cortejo fúnebre; el segundo, cuatro siglos después, sería el Éxodo.',
        { h: 'Cuidado de vosotros' },
        'Después del entierro, los hermanos tuvieron miedo, y José los tranquilizó con la frase que vimos en «Yo soy José»: Dios encaminó a bien lo que ellos pensaron para mal. Y agregó: «Ahora, pues, no tengáis miedo; yo os sustentaré a vosotros y a vuestros hijos» (Gn 50:21). José vivió ciento diez años, y vio a los nietos de Efraín y a los de Manasés (Gn 50:22-23). Para los egipcios, 110 años era la vida perfecta de un sabio.',
        { h: 'Dios os visitará' },
        'Antes de morir, José dijo a sus hermanos: «Yo voy a morir; mas Dios ciertamente os visitará, y os hará subir de esta tierra a la tierra que juró a Abraham, a Isaac y a Jacob» (Gn 50:24). Y les hizo jurar que llevarían sus huesos cuando salieran. Murió, lo embalsamaron y fue puesto en un ataúd en Egipto (Gn 50:26). Así termina Génesis: con un ataúd en Egipto. Pero es un ataúd que espera.',
        'Hebreos menciona este momento como el gran acto de fe de José: «Por la fe José, al morir, mencionó la salida de los hijos de Israel, y dio mandamiento acerca de sus huesos» (He 11:22). Gobernó Egipto, pero no quiso quedarse allí ni muerto. Cuando Israel salió de Egipto, «tomó también consigo Moisés los huesos de José» (Éx 13:19). Cargaron el ataúd durante los cuarenta años del desierto, y al fin lo sepultaron en Siquem, en el campo que Jacob había comprado (Jos 24:32). La promesa a Abraham se cumplió también para José.'
      ],
      pensar: 'José gobernó Egipto, pero pidió que sus huesos descansaran en la tierra prometida. ¿Dónde está puesta tu esperanza: en lo que lograste aquí, o en lo que Dios prometió?'
    }
  ];

  window.__PT.jose = jose;
})();
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
        cita('Éxodo 3:6, 15', 'Y dijo: Yo soy el Dios de tu padre, Dios de Abraham, Dios de Isaac, y Dios de Jacob. Entonces Moisés cubrió su rostro, porque tuvo miedo de mirar a Dios. … Además dijo Dios a Moisés: Así dirás a los hijos de Israel: Jehová, el Dios de vuestros padres, el Dios de Abraham, Dios de Isaac y Dios de Jacob, me ha enviado a vosotros. Este es mi nombre para siempre; con él se me recordará por todos los siglos.')
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
