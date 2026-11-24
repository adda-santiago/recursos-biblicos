/* ==========================================================
   Recursos Bíblicos — El Éxodo y el desierto · contenido de las rutas
   FUENTE de public/apps/exodo-desierto/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/exodo_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Decisiones del responsable al aprobar el bosquejo (20-11-2026):
   - Recurso de historia y geografía (tipo mapa), nº 21: de Egipto al Sinaí y a las llanuras de Moab
     (Éxodo 1 – Números 36; Deuteronomio 1–3 y 34). El contenido de la ley (nº 22), las fiestas (nº 26),
     el campamento en 3D (nº 30), la conquista (nº 31) y el comentario de cada libro quedan para sus recursos.
   - Fecha del Éxodo hacia 1446 a.C. (1 R 6:1), como Egipto y Los patriarcas; la fecha tardía, en `posturas`.
   - Faraón del Éxodo: Amenhotep II como el más probable; Tutmosis III, el de la huida de Moisés
     (cronología egipcia alta). Ramsés II, como postura.
   - El cruce del mar: el recurso NO fija el lugar; lagos Amargos, golfo de Suez y golfo de Áqaba
     se muestran como tres lecturas (mapa con selector).
   - Monte Sinaí: Jebel Musa (tradicional) prevalece; Jabal al-Lawz, Har Karkom y Jebel Hilal, como posturas.
   - Los 600.000 hombres de a pie se leen literalmente (unos dos millones de personas);
     «elef» como clanes o tropas, en `posturas`.
   - Las plagas, el mar y el maná son milagros; las explicaciones naturales se presentan como
     medios que Dios pudo usar, nunca como negación del milagro.
   - Endurecimiento de Faraón: Faraón se endurece primero y Dios lo confirma en su decisión (`posturas`).
   - Balaam: un adivino pagano a quien Dios usó, no un profeta de Israel.
   ========================================================== */
(() => {
  // Ayudas comunes a todas las partes
  // Imágenes propias que ya existen en img/ (la lista la escribe herramientas/exodo_citas.py). Una imagen
  // propia que falta queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(["esquema-campamento.svg", "ex-aaron-hor.webp", "ex-amalec.webp", "ex-ancianos.webp", "ex-ante-faraon.webp", "ex-arquilla.webp", "ex-balaam-asna.webp", "ex-becerro.webp", "ex-codornices.webp", "ex-columna.webp", "ex-core.webp", "ex-cruce-mar.webp", "ex-deir-alla.jpg", "ex-desierto-calor.webp", "ex-espias-uvas.webp", "ex-estela-merneptah.jpg", "ex-faraon-trono.webp", "ex-fuego-altar.webp", "ex-hendidura.webp", "ex-jebel-musa.jpg", "ex-mana.webp", "ex-mara.webp", "ex-maria-pandero.webp", "ex-meriba.webp", "ex-moises-pozo.webp", "ex-multitud.webp", "ex-nebo.webp", "ex-pascua.webp", "ex-salida.webp", "ex-serpiente-bronce.webp", "ex-sinai-monte.webp", "ex-tabernaculo-campamento.webp", "ex-tablas.webp", "ex-tinieblas.webp", "ex-transfiguracion.webp", "ex-vara-almendro.webp", "ex-zarza.webp"]);
  const ruta = f => (f.startsWith('img/') && !HAY.has(f.slice(4)) ? {} : { src: f });
  const H = window.__EX_H = {
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
      delta: [[29.7, 31.0], [31.3, 33.0]],
      egipto: [[24.8, 29.0], [32.0, 35.6]],
      cruce: [[28.5, 30.9], [31.4, 35.4]],
      sinai: [[27.8, 32.2], [31.0, 35.7]],
      todo: [[27.8, 30.9], [33.2, 36.4]],
      madian: [[28.1, 31.3], [31.2, 35.8]],
      cades: [[28.3, 33.4], [31.5, 35.6]],
      espias: [[30.3, 34.1], [33.6, 36.3]],
      arabia: [[28.2, 33.6], [30.9, 36.3]],
      transjordania: [[29.3, 34.2], [32.8, 36.5]],
      moab: [[31.1, 35.25], [32.75, 36.4]],
      balaam: [[30.8, 34.3], [37.0, 39.0]]
    }
  };
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = H;

  /* ---------------- I. El mundo del Éxodo ---------------- */
  const mundo = [
    {
      id: 'de-jose-a-moises', n: 'De José a Moisés', ref: 'Génesis 15:13-14; 46:3-4; 50:24-26; Éxodo 1:1-14; Hechos 7:15-19', fecha: [-1876, -1526],
      visual: [
        mapa({ view: V.delta, capas: [], lugares: ['gosen', 'ramses', 'piton', 'on', 'menfis', 'tanis'], trazos: [] }, 'Gosén'),
        cita('Éxodo 1:7-11', 'Y los hijos de Israel fructificaron y se multiplicaron, y fueron aumentados y fortalecidos en extremo, y se llenó de ellos la tierra. Entretanto, se levantó sobre Egipto un nuevo rey que no conocía a José; y dijo a su pueblo: He aquí, el pueblo de los hijos de Israel es mayor y más fuerte que nosotros. Ahora, pues, seamos sabios para con él, para que no se multiplique, y acontezca que viniendo guerra, él también se una a nuestros enemigos y pelee contra nosotros, y se vaya de la tierra. Entonces pusieron sobre ellos comisarios de tributos que los molestasen con sus cargas; y edificaron para Faraón las ciudades de almacenaje, Pitón y Ramesés.')
      ],
      texto: [
        'Génesis termina con una familia en Egipto y un ataúd que espera. José, antes de morir, hizo jurar a sus hermanos: «Dios ciertamente os visitará, y haréis llevar de aquí mis huesos» (Gn 50:25). Éxodo comienza donde Génesis terminó: con los nombres de los hijos de Jacob que bajaron a Egipto, setenta personas en total (Éx 1:1-5). Entre el último versículo de Génesis y el capítulo 1 de Éxodo pasaron casi tres siglos.',
        { h: 'Una familia que se volvió nación' },
        'En la tierra de Gosén, la zona oriental del delta del Nilo, los descendientes de Jacob «fructificaron y se multiplicaron» (Éx 1:7). El verbo recuerda el mandato de la creación y la promesa a Abraham: Dios estaba cumpliendo lo que había dicho, aun en tierra extranjera. Cuando bajó Jacob, eran una familia; cuando salieron, eran un pueblo de doce tribus.',
        { h: 'Un rey que no conocía a José' },
        '«Se levantó sobre Egipto un nuevo rey que no conocía a José» (Éx 1:8). La frase marca un cambio de dinastía. Hacia el 1550 a.C., el faraón Ahmosis expulsó del delta a los hicsos, reyes extranjeros de origen semita, y fundó el Reino Nuevo. Para los nuevos faraones, una población semita numerosa en la frontera oriental era un peligro: podía unirse a los enemigos que venían de Asia (Éx 1:10). La respuesta fue la servidumbre: capataces, ladrillos, y la construcción de las ciudades de almacenaje Pitón y Ramesés (Éx 1:11).',
        { h: 'La promesa que esperaba' },
        'Nada de esto tomó a Dios por sorpresa. Cuatro siglos antes había dicho a Abram que su descendencia sería extranjera en tierra ajena, sería esclava y oprimida, y que después saldría «con gran riqueza» (Gn 15:13-14). A Jacob, al bajar a Egipto, le prometió: «Yo descenderé contigo a Egipto, y yo también te haré volver» (Gn 46:4). La opresión no anulaba la promesa: era el escenario en que Dios la iba a cumplir.',
        'Este recurso sigue esa historia desde la opresión en Egipto hasta las llanuras de Moab, frente a Jericó: unos ochenta años de la vida de Moisés antes del Éxodo y cuarenta años en el desierto. La vida de José y de los patriarcas está en su propio recurso.',
        ir('Ver «Jacob en Gosén» en Los patriarcas', '../../patriarcas/#jose/9')
      ],
      pensar: 'Pasaron casi tres siglos entre la promesa a Jacob y la salida de Egipto, y la última parte fue la más dura. ¿Qué te enseña esta historia sobre las promesas de Dios que parecen demorarse justo cuando las cosas empeoran?'
    },
    {
      id: 'fecha', n: 'La fecha del Éxodo', ref: '1 Reyes 6:1; Jueces 11:26; Éxodo 1:11; 12:40-41; Hechos 13:19-20', fecha: -1446,
      visual: [
        tabla({
          titulo: 'Las fechas del Éxodo según el texto bíblico',
          cab: ['Hecho', 'Dato bíblico', 'Fecha aproximada'],
          filas: [
            ['Nace Moisés', 'Tenía 80 años ante Faraón (Éx 7:7)', '1526 a.C.'],
            ['Moisés huye a Madián', 'A los 40 años (Hch 7:23-29)', '1486 a.C.'],
            ['La zarza y el regreso a Egipto', 'Cuarenta años después (Hch 7:30)', '1446 a.C.'],
            ['El Éxodo', '480 años antes del templo de Salomón (1 R 6:1)', '1446 a.C.'],
            ['Llegada al Sinaí', 'El tercer mes (Éx 19:1)', '1446 a.C.'],
            ['El tabernáculo levantado', 'Primer día del segundo año (Éx 40:17)', '1445 a.C.'],
            ['Partida del Sinaí y los espías', 'Segundo mes del segundo año (Nm 10:11)', '1445 a.C.'],
            ['Muere Aarón', 'Año cuarenta, mes quinto (Nm 33:38)', '1407 a.C.'],
            ['Muere Moisés; Israel en Moab', 'A los 120 años (Dt 34:7)', '1406 a.C.']
          ],
          nota: 'Fechas aproximadas, contadas hacia atrás desde el templo de Salomón (hacia 966 a.C.). Son las que usa todo el sitio.'
        })
      ],
      texto: [
        'La Biblia da un dato que permite fechar el Éxodo con bastante precisión. Salomón comenzó a edificar el templo «en el año cuatrocientos ochenta después que los hijos de Israel salieron de Egipto, el cuarto año del principio del reino de Salomón» (1 R 6:1). Ese cuarto año fue hacia el 966 a.C., de modo que el Éxodo ocurrió hacia el 1446 a.C. La tabla aplica el mismo método al resto de la vida de Moisés.',
        { h: 'Tres veces cuarenta' },
        'Con estas fechas, la vida de Moisés se divide en tres períodos de cuarenta años, como resume Esteban en Hechos 7: cuarenta años en la corte de Egipto (Hch 7:23), cuarenta años como pastor en Madián (Hch 7:30) y cuarenta años guiando a Israel en el desierto (Hch 7:36). Murió a los ciento veinte años (Dt 34:7). El primer período lo formó como hombre de Egipto; el segundo lo quebró y lo preparó; el tercero fue el de su servicio.',
        { h: 'Un segundo dato' },
        'Jefté, juez de Israel, discute con el rey de Amón y le recuerda que Israel lleva «trescientos años» habitando las ciudades de Hesbón y el Arnón (Jue 11:26). Jefté vivió hacia el 1100 a.C.; trescientos años antes es el 1400 a.C., justo cuando Israel conquistó esa región al final del desierto. Las dos cifras apuntan en la misma dirección.',
        { posturas: {
          titulo: '¿El Éxodo en el siglo XV o en el XIII antes de Cristo?',
          a: { n: 'Fecha temprana: hacia 1446 a.C. (la de este recurso)', t: 'Se apoya en 1 Reyes 6:1 y Jueces 11:26. El faraón del Éxodo habría sido Amenhotep II. La destrucción de Jericó y de Hazor hacia el 1400 a.C., que algunos arqueólogos proponen, encaja con la conquista cuarenta años después. El nombre «Ramesés» en Éxodo 1:11 no obliga a una fecha tardía: Génesis 47:11 ya llama así a la región en tiempos de José, siglos antes de cualquier faraón Ramsés; es el nombre que el lugar tenía cuando se copió el texto.' },
          b: { n: 'Fecha tardía: hacia 1260 a.C.', t: 'Muchos estudiosos, también creyentes, la prefieren porque Ramsés II (1279–1213 a.C.) construyó la ciudad de Pi-Ramsés en el delta, y Éxodo 1:11 nombra Ramesés. La estela de Merneptah ya menciona a Israel en Canaán hacia el 1208 a.C., lo que deja tiempo para una conquista en el siglo XIII. Leen los 480 años de 1 Reyes 6:1 como doce generaciones simbólicas de cuarenta años.' },
          c: 'Las dos posturas aceptan que el Éxodo fue un hecho histórico. Este recurso sigue la fecha que se obtiene de los números del texto, que es también la de Egipto, Los patriarcas y los demás recursos del sitio. Leer los 480 años como símbolo no tiene apoyo en el pasaje, que da un dato cronológico con mes y año.'
        } },
        { ejercicio: {
          pregunta: '¿Qué dato bíblico es la base principal para fechar el Éxodo hacia el 1446 a.C.?',
          opciones: [
            { t: 'Los 480 años entre la salida de Egipto y el comienzo del templo de Salomón.', ok: true, por_que: 'Primera de Reyes 6:1 da el número, y el cuarto año de Salomón se fecha hacia el 966 a.C.' },
            { t: 'El nombre de la ciudad de Ramesés, construida por los israelitas.', ok: false, por_que: 'Ese nombre es el argumento principal de la fecha tardía, y no obliga a ella: Génesis 47:11 ya lo usa en tiempos de José.' },
            { t: 'Una inscripción egipcia que cuenta la salida de los hebreos.', ok: false, por_que: 'No se conoce ninguna inscripción egipcia que narre el Éxodo. Los faraones no registraban sus derrotas.' }
          ],
          explicacion: 'La fecha temprana sale de la cronología que el propio texto bíblico da. Jueces 11:26 la confirma con otro dato independiente.'
        } }
      ],
      pensar: 'El texto bíblico ubica el Éxodo con año y mes, como un hecho de la historia y no como una leyenda. ¿Por qué es importante para tu fe que Dios haya actuado en hechos reales, en un lugar y un tiempo concretos?'
    },
    {
      id: 'faraones', n: 'Los faraones de Moisés', ref: 'Éxodo 1:8-22; 2:5-10, 15, 23; 5:1-2; 12:29; Hebreos 11:23-27', fecha: [-1526, -1446],
      visual: [
        tabla({
          titulo: 'Los faraones del Reino Nuevo en la vida de Moisés',
          cab: ['Faraón', 'Reinado (aprox.)', 'En la historia de Moisés'],
          filas: [
            ['Ahmosis', '1570–1546 a.C.', 'Expulsa a los hicsos: quizá el «nuevo rey que no conocía a José» (Éx 1:8)'],
            ['Tutmosis I', '1526–1512 a.C.', 'Reinaba cuando nació Moisés; quizá el decreto contra los niños (Éx 1:22)'],
            ['Hatshepsut', '1503–1483 a.C.', 'Hija de Tutmosis I; una antigua propuesta la identifica con la «hija de Faraón» (Éx 2:5)'],
            ['Tutmosis III', '1504–1450 a.C.', 'Gran conquistador; Moisés huye de él (Éx 2:15), y su muerte abre el regreso (Éx 2:23; 4:19)'],
            ['Amenhotep II', '1453–1419 a.C.', 'El faraón del Éxodo, según la fecha temprana'],
            ['Tutmosis IV', '1419–1386 a.C.', 'Su «estela del sueño» sugiere que no era el heredero mayor'],
            ['Ramsés II', '1279–1213 a.C.', 'El faraón del Éxodo, según la fecha tardía']
          ],
          nota: 'Fechas según la cronología egipcia «alta», que encaja con la fecha temprana del Éxodo. Los egiptólogos discuten estas fechas en unos veinticinco años. Las identificaciones con personajes bíblicos son propuestas, no datos del texto.'
        }),
        img('img/ex-faraon-trono.webp', 'Un faraón del Reino Nuevo con la corona azul de guerra, sentado en un trono dorado en una sala de columnas, rodeado de cortesanos y escribas', 'El faraón era rey y dios para los egipcios. Contra él se levantó la palabra de Jehová.')
      ],
      texto: [
        'La Biblia nunca dice el nombre del faraón del Éxodo. «Faraón» significa «casa grande», el palacio, y se usaba como título del rey. El texto no necesita el nombre: lo importante es que el hombre más poderoso del mundo se enfrentó al Dios de unos esclavos y perdió.',
        { h: 'Cuatro faraones en la vida de Moisés' },
        'Con la fecha del Éxodo hacia el 1446 a.C., Moisés nació hacia el 1526, en tiempos de Tutmosis I, un rey guerrero que llevó el ejército hasta el Éufrates. Una antigua propuesta identifica a la hija de Faraón que adoptó a Moisés con Hatshepsut, hija de Tutmosis I, que después gobernó como faraón; es posible, pero el texto no lo dice, y Tutmosis I tuvo más hijas.',
        'Moisés huyó a los cuarenta años, hacia el 1486, cuando gobernaba Tutmosis III, el mayor conquistador de la historia de Egipto. El texto dice que, «después de muchos días, murió el rey de Egipto» (Éx 2:23), y que Dios dijo a Moisés: «han muerto todos los que procuraban tu muerte» (Éx 4:19). Tutmosis III murió hacia el 1450, muy poco antes del regreso de Moisés.',
        { h: 'Amenhotep II' },
        'El faraón del Éxodo habría sido entonces su hijo, Amenhotep II, un rey que se jactaba de su fuerza física y de sus campañas en Canaán. Llama la atención que sus campañas militares en Asia cesaron temprano en su reinado, y que su sucesor, Tutmosis IV, dejó una inscripción junto a la Esfinge según la cual el dios le prometió el trono en un sueño: algunos ven ahí un indicio de que el primogénito había muerto. Es un indicio, no una prueba.',
        { posturas: {
          titulo: '¿Amenhotep II o Ramsés II?',
          a: { n: 'Amenhotep II (la de este recurso)', t: 'Encaja con la fecha que da 1 Reyes 6:1 y con la muerte de Tutmosis III poco antes del llamado de Moisés. Las películas suelen mostrar a Ramsés II, pero eso no viene del texto bíblico.' },
          b: { n: 'Ramsés II', t: 'Quienes sostienen la fecha tardía lo identifican con el faraón de la opresión o del Éxodo, por la ciudad de Ramesés (Éx 1:11) y por las grandes obras que hizo en el delta.' },
          c: 'La identificación depende de la fecha del Éxodo. Este recurso sigue la fecha temprana, y por eso Amenhotep II. Ninguna de las dos cambia lo que el texto enseña: Dios juzgó a Faraón y a los dioses de Egipto (Éx 12:12).'
        } }
      ],
      pensar: 'La Biblia recuerda el nombre de las parteras Sifra y Fúa (Éx 1:15), pero no el de Faraón. ¿Qué te dice eso sobre lo que Dios considera grande y digno de memoria?'
    },
    {
      id: 'reino-nuevo', n: 'Egipto en tiempos de Moisés', ref: 'Éxodo 1:11-14; 5:6-19; Hechos 7:22; Hebreos 11:26', fecha: -1500,
      visual: [
        img('../egipto/img/egipto-ladrillos.webp', 'Trabajadores semitas fabrican ladrillos de barro y paja junto a un canal del Nilo, vigilados por capataces egipcios', '«Y amargaron su vida con dura servidumbre, en hacer barro y ladrillo» (Éx 1:14).'),
        mapa({ view: V.egipto, capas: ['egipto-1450'], lugares: ['ramses', 'piton', 'on', 'menfis', 'tebas', 'gosen'], trazos: [] }, 'Egipto hacia 1450 a.C.'),
        tabla({
          titulo: 'El Egipto que Moisés conoció',
          cab: ['Aspecto', 'En el Reino Nuevo', 'En el relato bíblico'],
          filas: [
            ['El poder', 'Un imperio desde Nubia hasta el Éufrates', 'Faraón, el hombre más poderoso del mundo'],
            ['La educación', 'Escuelas de escribas en la corte; varias lenguas y escrituras', 'Moisés, «enseñado… en toda la sabiduría de los egipcios» (Hch 7:22)'],
            ['El trabajo', 'Ladrillos de barro y paja; extranjeros en obras del Estado', 'Pitón y Ramesés; la paja retirada (Éx 1:11; 5:7)'],
            ['La religión', 'Cientos de dioses; Faraón, hijo del dios sol', 'Las plagas, juicio sobre «todos los dioses de Egipto» (Éx 12:12)'],
            ['Los extranjeros', 'Esclavos asiáticos con nombres semitas en las listas de casas egipcias', 'Israel en Gosén, y con ellos «grande multitud de toda clase de gentes» (Éx 12:38)']
          ],
          nota: 'Para la historia completa de Egipto y su relación con la Biblia, ver el recurso Egipto.'
        })
      ],
      texto: [
        'El Egipto del Éxodo era la potencia más grande de su tiempo. Los faraones del Reino Nuevo dominaban Nubia al sur y Canaán y Siria al norte, construían templos gigantescos en Tebas y tenían una administración de escribas que lo registraba todo. Moisés creció en ese mundo, en la casa de la hija de Faraón.',
        { h: 'Ladrillos de barro y paja' },
        'Los grandes templos eran de piedra, pero casi todo lo demás se hacía con ladrillos de barro del Nilo secados al sol: casas, palacios, murallas y almacenes. La paja picada mezclada con el barro hacía que el ladrillo no se agrietara. Por eso la orden de Faraón fue tan cruel: «De aquí en adelante no daréis paja al pueblo para hacer ladrillo, como hasta ahora; vayan ellos y recojan por sí mismos la paja» (Éx 5:7), sin bajar la cantidad de ladrillos.',
        'La tumba de Rekmira, un alto funcionario de Tutmosis III, tiene una pintura famosa: trabajadores extranjeros, algunos de piel clara y barba como los semitas, sacan barro de un estanque, lo amasan, lo ponen en moldes y apilan ladrillos, mientras capataces con varas los vigilan. Es una escena del mismo siglo de Moisés.',
        { h: 'Nombres semitas en Egipto' },
        'Un papiro egipcio conservado en el Museo de Brooklyn, de poco antes de esta época, enumera a los sirvientes de una casa: más de la mitad son «asiáticos», con nombres semitas, y uno de ellos es una mujer llamada Shiphra, el mismo nombre de una de las parteras hebreas de Éxodo 1:15, Sifra. No se trata de la misma persona, pero muestra que esos nombres eran comunes entre los semitas que vivían en Egipto.',
        { h: 'Pitón y Ramesés' },
        'Éxodo 1:11 dice que los israelitas edificaron para Faraón las ciudades de almacenaje Pitón y Ramesés. Ramesés estaba en el delta oriental, en el lugar de la antigua Avaris, hoy Tell el-Dab\'a, donde los arqueólogos han encontrado una gran población semita durante siglos. Pitón suele ubicarse en el valle de Tumilat, el camino natural hacia el desierto por el que salieron los israelitas.',
        ir('Ver «Moisés y el Éxodo» en Egipto', '../../egipto/#biblia/2')
      ],
      pensar: 'Moisés tuvo la mejor educación de su época, y aun así Dios lo preparó cuarenta años más en el desierto. ¿Qué parte de tu preparación crees que Dios está haciendo hoy lejos de los lugares donde tú esperarías?'
    },
    {
      id: 'cuantos', n: '¿Cuántos salieron de Egipto?', ref: 'Éxodo 12:37-38; 38:26; Números 1:46; 26:51; Deuteronomio 10:22', fecha: -1446,
      visual: [
        tabla({
          titulo: 'Las cifras del pueblo en el desierto',
          cab: ['Momento', 'Hombres de veinte años arriba', 'Texto'],
          filas: [
            ['La salida de Egipto', 'Como seiscientos mil hombres de a pie, sin contar los niños', 'Éx 12:37'],
            ['El impuesto del santuario', '603.550', 'Éx 38:26'],
            ['El primer censo, en el Sinaí', '603.550 (sin los levitas)', 'Nm 1:46'],
            ['Los levitas, varones de un mes arriba', '22.000', 'Nm 3:39'],
            ['El segundo censo, en Moab', '601.730', 'Nm 26:51'],
            ['Total estimado del pueblo', 'Unos dos millones de personas con mujeres, niños y ancianos', 'Cálculo']
          ],
          nota: 'Las cifras bíblicas cuentan a los hombres aptos para la guerra. La población total es una estimación.'
        }),
        img('img/ex-multitud.webp', 'Una enorme multitud de familias israelitas con rebaños, carretas y bultos avanza por una llanura del desierto al amanecer, en columnas que se pierden en el horizonte', '«Como seiscientos mil hombres de a pie, sin contar los niños» (Éx 12:37).')
      ],
      texto: [
        'El texto dice que salieron de Ramesés «como seiscientos mil hombres de a pie, sin contar los niños» (Éx 12:37). El censo del Sinaí da una cifra exacta: 603.550 hombres de veinte años arriba, aptos para la guerra (Nm 1:46). Si se suman las mujeres, los niños, los ancianos y los levitas, el pueblo llegaba a unos dos millones de personas. A ellos se agregó «grande multitud de toda clase de gentes» (Éx 12:38): egipcios y otros extranjeros que salieron con Israel.',
        { h: 'De setenta a dos millones' },
        '¿Es posible ese crecimiento? Setenta personas bajaron a Egipto (Gn 46:27), y vivieron allí 430 años. Con familias de seis o siete hijos que llegaban a adultos, la población se duplica cada veinticinco o treinta años: en cuatro siglos, la cifra es alcanzable. El texto subraya precisamente eso: se multiplicaron «en extremo» (Éx 1:7), y por eso Faraón tuvo miedo.',
        { h: 'Una multitud en el desierto' },
        'Dos millones de personas con sus rebaños necesitan diariamente agua y comida en cantidades enormes. El desierto del Sinaí no podía darlas. Por eso el relato insiste en que Dios los sustentó: el maná cada mañana durante cuarenta años, el agua de la roca, y vestidos que no se gastaron (Dt 8:3-4). La cifra grande no es un problema para el texto; es la razón de los milagros.',
        { posturas: {
          titulo: '¿Seiscientos mil hombres, o seiscientos grupos?',
          a: { n: 'Lectura literal (la de este recurso)', t: 'Las cifras se repiten de manera coherente en Éxodo y Números, se suman por tribus con exactitud y coinciden con el impuesto de medio siclo (Éx 38:25-26). Es la lectura natural del texto y la que siguieron el judaísmo y la iglesia durante siglos.' },
          b: { n: 'La palabra «mil» como clan o tropa', t: 'La palabra hebrea elef significa «mil», pero en algunos pasajes también «familia» o «clan» (Jue 6:15) y quizá «unidad militar». Algunos estudiosos creyentes leen las cifras de Números 1 como cantidades de unidades y de hombres, y llegan a un pueblo de unas veinte a cien mil personas, más fácil de imaginar en el desierto.' },
          c: 'La segunda lectura busca resolver un problema real, pero no explica el total de 603.550, que suma las tribus como cifras comunes, ni el impuesto pagado por cada hombre. Este recurso sigue la lectura literal. Las dos coinciden en que Dios sacó de Egipto a un pueblo numeroso y lo sustentó en el desierto.'
        } }
      ],
      pensar: 'Dos millones de personas dependieron cuarenta años del pan que caía cada mañana. ¿Qué parte de tu vida está diseñada para no necesitar a Dios cada día?'
    },
    {
      id: 'arqueologia', n: 'Lo que dice la arqueología', ref: 'Éxodo 1:11; 12:40; Deuteronomio 26:5-8', fecha: [-1450, -1208],
      visual: [
        foto('img/ex-estela-merneptah.jpg', 'La estela de Merneptah, una losa de granito negro con jeroglíficos y una escena del faraón ante los dioses en la parte superior, en el Museo Egipcio de El Cairo', 'Estela de Merneptah, hacia 1208 a.C., Museo Egipcio de El Cairo. Una línea dice: «Israel está asolado, su semilla ya no existe».', 'Foto: Webscribe, CC BY-SA 3.0, Wikimedia Commons'),
        tabla({
          titulo: 'Hallazgos relacionados con el Éxodo',
          cab: ['Hallazgo', 'Qué muestra', 'Valor'],
          filas: [
            ['Tell el-Dab\'a (Avaris)', 'Una gran población semita en el delta oriental durante siglos', 'Confirma el escenario de Gosén'],
            ['Pintura de la tumba de Rekmira', 'Extranjeros fabrican ladrillos bajo capataces, siglo XV a.C.', 'Ilustra Éxodo 1 y 5'],
            ['Papiro de Brooklyn 35.1446', 'Sirvientes asiáticos con nombres semitas en una casa egipcia', 'Nombres como Sifra (Éx 1:15)'],
            ['Inscripciones de Soleb y Amara', 'Nómadas «shasu de Yhw», hacia 1400–1250 a.C.', 'Quizá la mención más antigua del nombre divino'],
            ['Estela de Merneptah', '«Israel» como pueblo en Canaán, hacia 1208 a.C.', 'Israel ya estaba en la tierra'],
            ['Papiro Ipuwer', 'Lamentos por un Egipto en caos, con el río «hecho sangre»', 'Muy discutido; probablemente más antiguo']
          ],
          nota: 'La arqueología no puede probar ni negar un milagro, pero sí muestra si el escenario de un relato es verosímil.'
        })
      ],
      texto: [
        'Mucha gente ha oído que «no hay ninguna prueba del Éxodo». Es verdad que no se ha encontrado una inscripción egipcia que cuente la salida de los hebreos, ni restos de su campamento en el Sinaí. Pero esa ausencia se explica, y hay más evidencia indirecta de la que suele decirse.',
        { h: 'Lo que no se encuentra' },
        'Los faraones grababan victorias, no derrotas: ninguno habría hecho escribir que sus esclavos se fueron y su ejército se ahogó. Casi todos los papiros del delta se perdieron por la humedad, a diferencia de los del sur, que se conservaron en la arena. Y un pueblo que vive en tiendas durante cuarenta años, sin construir casas ni usar cerámica fina, deja muy pocos restos; el Sinaí tampoco conserva rastros de otros nómadas de la misma época.',
        { h: 'Lo que sí se encuentra' },
        'En Tell el-Dab\'a, la antigua Avaris, los arqueólogos encontraron siglos de población semita en el delta oriental, la región de Gosén. Pinturas y papiros del siglo XV a.C. muestran a extranjeros fabricando ladrillos y a sirvientes asiáticos con nombres semitas. Inscripciones egipcias de Soleb y Amara, en Nubia, mencionan una tierra de nómadas «shasu de Yhw»: muchos estudiosos ven allí el nombre de Jehová asociado a pastores de la región de Edom y el Sinaí.',
        { h: 'Israel en Canaán' },
        'La foto muestra la estela de Merneptah, hijo de Ramsés II, grabada hacia el 1208 a.C. Entre los pueblos que el faraón dice haber vencido en Canaán aparece Israel, y el jeroglífico lo marca como pueblo, no como ciudad. Es la mención más antigua de Israel fuera de la Biblia. Muestra que, poco después del 1200 a.C., Israel ya estaba establecido en la tierra, como un pueblo que Egipto conocía.',
        { h: 'Cómo leer la evidencia' },
        'La fe en el Éxodo no depende de la arqueología. Depende del testimonio de la Escritura, que lo presenta como el hecho fundante de Israel, repetido en la ley, los salmos y los profetas, y que Jesús y los apóstoles trataron como historia. La arqueología sirve para mostrar que el escenario es verosímil, y lo es.'
      ],
      pensar: 'Algunos dicen que si no hay una inscripción, el Éxodo no ocurrió. ¿Cómo responderías con respeto a alguien que piensa así, sin exagerar ni esconder lo que sabemos?'
    },
    {
      id: 'escenario', n: 'El escenario: del delta a Moab', ref: 'Éxodo 13:17-18; 15:22; 16:1; Números 10:12; 13:21; 20:1; Deuteronomio 1:1-2; 8:15', fecha: -1446,
      visual: [
        mapa({ view: V.todo, capas: ['r-edom', 'r-moab', 'r-amon'], lugares: ['ramses', 'gosen', 'sinai', 'cades-barnea', 'ezion-geber', 'monte-nebo', 'r-madian', 'beerseba', 'jerusalen'], trazos: [] }, 'El escenario'),
        tabla({
          titulo: 'Los desiertos del Éxodo',
          cab: ['Desierto', 'Dónde', 'En el relato'],
          filas: [
            ['Shur (o Etam)', 'Al este del delta, frente a Egipto', 'Tres días sin agua después del mar (Éx 15:22; Nm 33:8)'],
            ['Sin', 'Llanura costera del oeste del Sinaí', 'El maná y las codornices (Éx 16:1)'],
            ['Sinaí', 'Junto al monte, en el sur de la península', 'Casi un año acampados (Éx 19:1–Nm 10:11)'],
            ['Parán', 'Meseta central del Sinaí, al sur de Cades', 'Desde allí salen los espías (Nm 10:12; 13:3)'],
            ['Zin', 'Al norte de Parán, junto al Neguev', 'Cades; muere María (Nm 20:1)'],
            ['Arabá', 'Gran depresión del mar Muerto al golfo de Áqaba', 'El rodeo de Edom (Dt 2:8)'],
            ['Moab', 'Meseta al este del mar Muerto', 'Las llanuras de Moab, frente a Jericó (Nm 22:1)']
          ],
          nota: 'Los límites de cada desierto son aproximados.'
        })
      ],
      texto: [
        'El Éxodo ocurre en un triángulo de tierra entre África y Asia: la península del Sinaí, con el mar Mediterráneo al norte, el golfo de Suez al oeste y el golfo de Áqaba al este. El mapa muestra el escenario completo, desde el delta del Nilo hasta las llanuras de Moab, frente a Jericó.',
        { h: 'Tres paisajes' },
        'El norte de la península es una franja de dunas y lagunas junto al mar, por donde pasaba el camino militar de Egipto a Canaán. El centro es una gran meseta de piedra caliza, el desierto de Tih («el extravío», en árabe), seca y pedregosa. El sur es un macizo de montañas de granito rojo y negro que superan los dos mil metros, con valles estrechos y algunas fuentes: allí la tradición ubica el monte Sinaí.',
        { h: 'Un desierto con nombres' },
        'La Biblia no habla de «el desierto» en general, sino de varios desiertos con nombre: Shur, Sin, Sinaí, Parán y Zin. La tabla los ubica. Al noreste está Cades-barnea, un oasis en la frontera sur de Canaán donde Israel pasó buena parte de los cuarenta años. Al este, el valle del Arabá baja desde el mar Muerto hasta el golfo de Áqaba, y al otro lado se levantan las montañas de Edom.',
        { h: 'Un desierto «grande y espantoso»' },
        'Moisés lo describió al final del viaje: «desierto grande y espantoso, lleno de serpientes ardientes, y de escorpiones, y de sed, donde no había agua» (Dt 8:15). Las temperaturas superan los cuarenta grados de día y bajan mucho de noche, la lluvia es casi nula y las fuentes son pocas y lejanas. Nadie elegiría ese camino para dos millones de personas. Dios lo eligió para que su pueblo aprendiera a depender de Él (Dt 8:2-3).',
        'Al final del viaje, Israel quedó al este del Jordán, en las tierras de Moab y de los amorreos, frente a la tierra prometida. Esa geografía se estudia en La tierra de Israel.',
        ir('Ver «El desierto de Judea y el Neguev» en La tierra de Israel', '../../tierra-de-israel/#regiones/8')
      ],
      pensar: 'Dios llevó a su pueblo por el desierto más duro, no por el camino más corto. ¿Qué «desierto» de tu vida podría ser el camino que Dios eligió para enseñarte a depender de Él?'
    }
  ];

  /* ---------------- II. Moisés y la liberación ---------------- */
  const liberacion = [
    {
      id: 'nacimiento', n: 'La opresión y el nacimiento de Moisés', ref: 'Éxodo 1:15–2:10; Hechos 7:20-22; Hebreos 11:23', fecha: -1526,
      visual: [
        img('img/ex-arquilla.webp', 'Una arquilla de juncos calafateada flota entre los carrizos a orillas del Nilo; una niña hebrea la observa escondida entre las cañas, y a lo lejos se acercan las doncellas de una princesa egipcia', '«Tomó una arquilla de juncos y la calafateó con asfalto y brea, y colocó en ella al niño» (Éx 2:3).'),
        cita('Éxodo 2:1-10', 'Un varón de la familia de Leví fue y tomó por mujer a una hija de Leví, la que concibió, y dio a luz un hijo; y viéndole que era hermoso, le tuvo escondido tres meses. Pero no pudiendo ocultarle más tiempo, tomó una arquilla de juncos y la calafateó con asfalto y brea, y colocó en ella al niño y lo puso en un carrizal a la orilla del río. Y una hermana suya se puso a lo lejos, para ver lo que le acontecería. Y la hija de Faraón descendió a lavarse al río, y paseándose sus doncellas por la ribera del río, vio ella la arquilla en el carrizal, y envió una criada suya a que la tomase. Y cuando la abrió, vio al niño; y he aquí que el niño lloraba. Y teniendo compasión de él, dijo: De los niños de los hebreos es éste. Entonces su hermana dijo a la hija de Faraón: ¿Iré a llamarte una nodriza de las hebreas, para que te críe este niño? Y la hija de Faraón respondió: Ve. Entonces fue la doncella, y llamó a la madre del niño, a la cual dijo la hija de Faraón: Lleva a este niño y críamelo, y yo te lo pagaré. Y la mujer tomó al niño y lo crió. Y cuando el niño creció, ella lo trajo a la hija de Faraón, la cual lo prohijó, y le puso por nombre Moisés, diciendo: Porque de las aguas lo saqué.')
      ],
      texto: [
        'La opresión fue en aumento. Primero vinieron los capataces y los trabajos forzados; después, una orden secreta a las parteras hebreas de matar a los niños varones al nacer; por último, una orden pública a todo el pueblo egipcio: «Echad al río a todo hijo que nazca» (Éx 1:22). El río que daba vida a Egipto se convirtió en tumba de los hijos de Israel.',
        { h: 'Dos parteras que temieron a Dios' },
        'La primera resistencia vino de dos mujeres: Sifra y Fúa. «Las parteras temieron a Dios, y no hicieron como les mandó el rey de Egipto» (Éx 1:17). Desobedecieron al hombre más poderoso del mundo para obedecer a Dios, y Dios «hizo bien» a las parteras y prosperó sus familias. El nombre del faraón se perdió; el de ellas quedó escrito para siempre.',
        { h: 'Una arquilla en el río' },
        'Un matrimonio de la tribu de Leví, Amram y Jocabed (Éx 6:20), tuvo un hijo y lo escondió tres meses. Hebreos dice que lo hicieron «por la fe», porque vieron que el niño era hermoso y no temieron el decreto del rey (He 11:23). Cuando ya no pudieron esconderlo, Jocabed hizo una arquilla de juncos, la calafateó con asfalto y la puso entre los carrizos del Nilo. La palabra hebrea para «arquilla» es la misma que el arca de Noé: otra vez, Dios salvaba a través del agua a quien iba a salvar a muchos.',
        { h: 'Criado en el palacio' },
        'La hija de Faraón bajó a bañarse, vio la arquilla, oyó llorar al niño y tuvo compasión. María, la hermana mayor, que vigilaba de lejos, ofreció buscarle una nodriza hebrea, y trajo a su propia madre. Así, Jocabed crió a su hijo con salario de Faraón, y le enseñó quién era. Después, la princesa lo adoptó y le puso por nombre Moisés, «porque de las aguas lo saqué» (Éx 2:10). El nombre se parece al egipcio mose, «hijo» o «nacido» (como en Tutmosis), y en hebreo suena a mashá, «sacar».',
        'El decreto que debía destruir a Israel terminó metiendo al futuro libertador en la casa del faraón. Dios no impidió la orden; la usó.'
      ],
      pensar: 'Sifra, Fúa, Jocabed, María y la hija de Faraón: cinco mujeres que actuaron con valentía y compasión, y Dios las usó para salvar a su pueblo. ¿Qué acto pequeño de fe o de misericordia podría estar pidiéndote Dios hoy?'
    },
    {
      id: 'madian', n: 'De la corte a Madián', ref: 'Éxodo 2:11-25; Hechos 7:23-30; Hebreos 11:24-27', fecha: [-1486, -1446],
      visual: [
        mapa({ view: V.madian, capas: [], lugares: ['ramses', 'r-madian', 'sinai', 'ezion-geber'], trazos: ['ex-moises-madian'] }, 'La huida a Madián'),
        img('img/ex-moises-pozo.webp', 'Un egipcio joven con ropa de lino de la corte defiende a siete pastoras junto a un pozo en el desierto de Madián, mientras unos pastores se alejan', 'Moisés defiende a las hijas de Jetro junto al pozo (Éx 2:16-17).')
      ],
      texto: [
        'Moisés creció como príncipe egipcio. Esteban dice que «fue enseñado Moisés en toda la sabiduría de los egipcios; y era poderoso en sus palabras y obras» (Hch 7:22). Pero no olvidó quién era. A los cuarenta años salió a ver a sus hermanos y vio a un egipcio que golpeaba a un hebreo. Miró a todos lados, mató al egipcio y lo escondió en la arena (Éx 2:11-12).',
        { h: 'Una decisión de fe, un método equivocado' },
        'Hebreos ve en ese momento una decisión de fe: Moisés «rehusó llamarse hijo de la hija de Faraón, escogiendo antes ser maltratado con el pueblo de Dios, que gozar de los deleites temporales del pecado» (He 11:24-25). Eligió a su pueblo por encima del palacio. Pero su método fue suyo: quiso librar a Israel con su fuerza, a escondidas, un hebreo a la vez. Al día siguiente, otro hebreo le reprochó: «¿Quién te ha puesto a ti por príncipe y juez sobre nosotros?» (Éx 2:14). Su pueblo no lo entendió (Hch 7:25), y Faraón quiso matarlo.',
        { h: 'Cuarenta años de pastor' },
        'Moisés huyó a la tierra de Madián, al este del golfo de Áqaba. Los madianitas eran descendientes de Abraham por Cetura (Gn 25:2), pastores y comerciantes del desierto. Junto a un pozo defendió a las siete hijas de Reuel, también llamado Jetro, sacerdote de Madián, de unos pastores que las echaban. Se quedó con la familia, se casó con Séfora y tuvo un hijo, Gersón: «Forastero soy en tierra ajena» (Éx 2:22).',
        'El príncipe de Egipto pasó cuarenta años cuidando ovejas ajenas en el desierto. Allí aprendió lo que el palacio no le había enseñado: los caminos, las fuentes y los pastos del Sinaí, la paciencia, la mansedumbre y la vida en tiendas. Todo eso lo iba a necesitar para guiar a dos millones de personas por el mismo desierto.',
        { h: 'Dios oyó' },
        'Mientras tanto, en Egipto, murió el rey, pero la servidumbre siguió. Los hijos de Israel gemían y clamaban, «y oyó Dios el gemido de ellos, y se acordó de su pacto con Abraham, Isaac y Jacob. Y miró Dios a los hijos de Israel, y los reconoció Dios» (Éx 2:24-25). Cuatro verbos: oyó, se acordó, miró, reconoció. Dios estaba a punto de actuar.'
      ],
      pensar: 'Moisés quiso hacer la obra de Dios con sus propias manos y tuvo que esperar cuarenta años. ¿Hay algo que estés intentando lograr para Dios con tu propia fuerza y a tu propio tiempo?'
    },
    {
      id: 'zarza', n: 'La zarza ardiente', ref: 'Éxodo 3:1–4:17; Hechos 7:30-35; Marcos 12:26', fecha: -1446,
      visual: [
        { tipo: 'hebreo', titulo: 'Éxodo 3:14', ref: 'Éxodo 3:14', he: 'וַיֹּאמֶר אֱלֹהִים אֶל־מֹשֶׁה אֶהְיֶה אֲשֶׁר אֶהְיֶה וַיֹּאמֶר כֹּה תֹאמַר לִבְנֵי יִשְׂרָאֵל אֶהְיֶה שְׁלָחַנִי אֲלֵיכֶם׃', tr: 'Vayómer Elohim el-Moshé: Ehyé asher ehyé. Vayómer: ko tomar livné Yisrael: Ehyé shlajani alejem.',
          palabras: [
            { he: 'וַיֹּאמֶר', tr: 'vayómer', es: 'y dijo' }, { he: 'אֱלֹהִים', tr: 'Elohim', es: 'Dios' }, { he: 'אֶל־מֹשֶׁה', tr: 'el-Moshé', es: 'a Moisés' },
            { he: 'אֶהְיֶה', tr: 'ehyé', es: 'YO SOY (seré)' }, { he: 'אֲשֶׁר', tr: 'asher', es: 'el que' }, { he: 'אֶהְיֶה', tr: 'ehyé', es: 'soy (seré)' },
            { he: 'וַיֹּאמֶר', tr: 'vayómer', es: 'y dijo' }, { he: 'כֹּה', tr: 'ko', es: 'así' }, { he: 'תֹאמַר', tr: 'tomar', es: 'dirás' },
            { he: 'לִבְנֵי', tr: 'livné', es: 'a los hijos de' }, { he: 'יִשְׂרָאֵל', tr: 'Yisrael', es: 'Israel' }, { he: 'אֶהְיֶה', tr: 'ehyé', es: 'YO SOY' },
            { he: 'שְׁלָחַנִי', tr: 'shlajani', es: 'me envió' }, { he: 'אֲלֵיכֶם', tr: 'alejem', es: 'a vosotros' }
          ],
          rv: 'Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.' },
        img('img/ex-zarza.webp', 'Un pastor anciano descalzo, de espaldas y con el cayado en la mano, se cubre el rostro ante una zarza que arde con una llama intensa sin consumirse, al pie de una montaña de granito rojo al atardecer', '«Él miró, y vio que la zarza ardía en fuego, y la zarza no se consumía» (Éx 3:2).')
      ],
      texto: [
        'Moisés tenía ochenta años y apacentaba las ovejas de su suegro cuando llegó «hasta Horeb, monte de Dios» (Éx 3:1). Allí vio una zarza que ardía sin consumirse. Cuando se acercó a mirar, Dios lo llamó por su nombre desde la zarza: «No te acerques; quita tu calzado de tus pies, porque el lugar en que tú estás, tierra santa es» (Éx 3:5).',
        'El texto dice que quien se le apareció fue el Ángel de Jehová (Éx 3:2), y que desde la zarza habló Dios mismo. Muchos intérpretes, desde la iglesia antigua, ven en este Ángel que habla como Dios una aparición del Hijo antes de su encarnación; la estación sobre el ángel de Jehová en La persona y obra de Cristo estudia esa lectura.',
        { h: 'He descendido para librarlos' },
        'Lo primero que Dios dice es que ha visto, ha oído y conoce el sufrimiento de su pueblo, y que ha descendido para librarlo y llevarlo a una buena tierra (Éx 3:7-8). Después viene el encargo: «Ven, por tanto, ahora, y te enviaré a Faraón» (Éx 3:10). El hombre que a los cuarenta años quiso ir solo, a los ochenta no quería ir.',
        { h: 'Cinco excusas' },
        'Moisés presentó cinco objeciones: ¿Quién soy yo? ¿Cuál es tu nombre? ¿Y si no me creen? Soy torpe para hablar. Envía a otro. Dios respondió a cada una: «Yo estaré contigo», le reveló su nombre, le dio señales (la vara, la mano leprosa, el agua hecha sangre), le recordó quién hizo la boca del hombre, y finalmente, con enojo, le dio a Aarón como portavoz (Éx 3:11–4:17).',
        { h: 'YO SOY EL QUE SOY' },
        'La pestaña en hebreo muestra la respuesta a la segunda pregunta: ehyé asher ehyé, «YO SOY EL QUE SOY». Ehyé es una forma del verbo «ser» que puede traducirse «soy» o «seré»: Dios es el que existe por sí mismo y el que estará presente con su pueblo. En el versículo siguiente, el nombre aparece en tercera persona, יהוה, que la Reina-Valera traduce Jehová: «Este es mi nombre para siempre» (Éx 3:15). Jesús tomó ese «Yo soy» para sí (Jn 8:58).',
        ir('Estudiar Éxodo 3:14 palabra por palabra en Vocabulario y gramática del hebreo', '../../gramatica-hebrea/#taller/3'),
        ir('Ver «Jehová, Yo soy el que soy» en Dios y la Trinidad', '../../dios-y-la-trinidad/#nombres/2')
      ],
      pensar: 'A cada excusa de Moisés, Dios no respondió con un elogio sobre sus capacidades, sino con «yo estaré contigo». ¿Qué excusa estás dando hoy, y cómo responde a ella la presencia de Dios?'
    },
    {
      id: 'ante-faraon', n: 'Moisés ante Faraón', ref: 'Éxodo 4:18–7:13; 2 Timoteo 3:8', fecha: -1446,
      visual: [
        img('img/ex-ante-faraon.webp', 'Dos ancianos hebreos de barba blanca, con mantos de lana sencillos y un cayado, de pie ante el trono de un faraón egipcio en un salón de columnas pintadas; a los lados, sacerdotes egipcios con la cabeza rapada observan', '«¿Quién es Jehová, para que yo oiga su voz y deje ir a Israel?» (Éx 5:2).'),
        mapa({ view: V.madian, capas: [], lugares: ['r-madian', 'sinai', 'ramses'], trazos: ['ex-moises-vuelta'] }, 'El regreso a Egipto'),
        cita('Éxodo 6:6-8', 'Por tanto, dirás a los hijos de Israel: Yo soy JEHOVÁ; y yo os sacaré de debajo de las tareas pesadas de Egipto, y os libraré de su servidumbre, y os redimiré con brazo extendido, y con juicios grandes; y os tomaré por mi pueblo y seré vuestro Dios; y vosotros sabréis que yo soy Jehová vuestro Dios, que os sacó de debajo de las tareas pesadas de Egipto. Y os meteré en la tierra por la cual alcé mi mano jurando que la daría a Abraham, a Isaac y a Jacob; y yo os la daré por heredad. Yo JEHOVÁ.', 'Siete promesas')
      ],
      texto: [
        'Moisés volvió a Egipto con su familia y la vara de Dios en la mano. En el desierto se encontró con Aarón, su hermano, que venía a buscarlo, y juntos reunieron a los ancianos de Israel. El pueblo creyó, y «se inclinaron y adoraron» (Éx 4:31).',
        { h: '¿Quién es Jehová?' },
        'Entonces se presentaron ante Faraón: «Jehová el Dios de Israel dice así: Deja ir a mi pueblo a celebrarme fiesta en el desierto» (Éx 5:1). La respuesta fue la pregunta que el resto del relato va a contestar: «¿Quién es Jehová, para que yo oiga su voz y deje ir a Israel? Yo no conozco a Jehová» (Éx 5:2). Al final de las plagas, Faraón y todo Egipto iban a saber quién es Jehová (Éx 7:5; 14:18).',
        { h: 'Peor que antes' },
        'La primera consecuencia fue mala: Faraón retiró la paja y exigió la misma cantidad de ladrillos. Los capataces hebreos fueron azotados, y culparon a Moisés y a Aarón. Moisés llevó su queja a Dios: «¿Para qué me enviaste?» (Éx 5:22). A veces, el primer paso de obediencia empeora las cosas antes de mejorarlas.',
        { h: 'Siete promesas' },
        'Dios respondió con una de las declaraciones más ricas de la ley. La pestaña muestra el pasaje: «Yo os sacaré… os libraré… os redimiré… os tomaré por mi pueblo… seré vuestro Dios… os meteré en la tierra… os la daré por heredad» (Éx 6:6-8). El verbo «redimir» (gaal) es el del pariente redentor que rescata a su familiar esclavo. Dios se presenta como el pariente de Israel que paga para liberarlo.',
        { h: 'La vara y los magos' },
        'Ante Faraón, la vara de Aarón se convirtió en serpiente. Los magos de Egipto hicieron lo mismo «con sus encantamientos», pero la vara de Aarón devoró sus varas (Éx 7:10-12). La serpiente era un símbolo del poder del faraón, y aparecía en su corona. Pablo da los nombres que la tradición judía conservó de esos magos, Janes y Jambres, como ejemplo de quienes resisten a la verdad (2 Ti 3:8). Satanás puede imitar algunas señales, pero no puede vencer a Dios.'
      ],
      pensar: 'Después de obedecer, la situación de Israel empeoró y Moisés le preguntó a Dios «¿para qué me enviaste?». ¿Cómo te ayuda este episodio cuando obedeces a Dios y las cosas no salen como esperabas?'
    },
    {
      id: 'plagas', n: 'Las diez plagas y los dioses de Egipto', ref: 'Éxodo 7:14–11:10; 12:12; Números 33:4; Salmos 78:43-51; 105:26-36', fecha: -1446,
      visual: [
        tabla({
          titulo: 'Las diez plagas',
          cab: ['Plaga', 'Texto', '¿Afecta a Israel?', 'Dioses de Egipto relacionados'],
          filas: [
            ['1. El agua hecha sangre', 'Éx 7:14-25', 'Sí', 'Hapi, el Nilo; Osiris'],
            ['2. Ranas', 'Éx 8:1-15', 'Sí', 'Heqet, diosa con cabeza de rana'],
            ['3. Piojos', 'Éx 8:16-19', 'Sí', 'Geb, la tierra; los magos: «Dedo de Dios es éste»'],
            ['4. Moscas', 'Éx 8:20-32', 'No: Gosén queda aparte', 'Khepri, con cabeza de escarabajo'],
            ['5. Peste del ganado', 'Éx 9:1-7', 'No', 'Apis, el toro sagrado; Hathor, la vaca'],
            ['6. Úlceras', 'Éx 9:8-12', 'No', 'Sejmet y los dioses de la salud'],
            ['7. Granizo', 'Éx 9:13-35', 'No', 'Nut, el cielo; Set, las tormentas'],
            ['8. Langostas', 'Éx 10:1-20', 'No', 'Dioses de la cosecha'],
            ['9. Tinieblas', 'Éx 10:21-29', 'No: luz en sus casas', 'Ra, el sol, el dios mayor'],
            ['10. Muerte de los primogénitos', 'Éx 11–12', 'Solo sin la sangre del cordero', 'Faraón, considerado hijo de Ra']
          ],
          nota: 'El texto no nombra los dioses de cada plaga; dice que Dios ejecutó sus juicios «en todos los dioses de Egipto» (Éx 12:12). La relación con cada dios es una lectura muy difundida, más clara en unas plagas que en otras.'
        }),
        img('img/ex-tinieblas.webp', 'Una ciudad egipcia del Reino Nuevo en una oscuridad densa al mediodía, con un templo del sol apenas visible; en el barrio de los hebreos, al fondo, las casas tienen lámparas encendidas y una luz cálida en las puertas', '«Mas todos los hijos de Israel tenían luz en sus habitaciones» (Éx 10:23).')
      ],
      texto: [
        'Durante varios meses, Dios golpeó a Egipto con diez plagas. Las tres primeras afectaron a todos; desde la cuarta, Dios dijo: «yo apartaré la tierra de Gosén» (Éx 8:22), y las plagas cayeron solo sobre los egipcios. La tabla las resume.',
        { h: 'Juicio sobre los dioses' },
        'Las plagas no fueron castigos al azar. Dios dijo: «ejecutaré mis juicios en todos los dioses de Egipto. Yo Jehová» (Éx 12:12). El Nilo, adorado como fuente de vida, se volvió sangre. Las ranas, símbolo de fertilidad, se volvieron una plaga. El ganado sagrado murió. El sol, el dios más alto, se apagó tres días. Y el primogénito de Faraón, el heredero del rey que se creía dios, murió. Cada plaga mostró que los dioses de Egipto no podían proteger a su pueblo.',
        { h: 'Los magos se rinden' },
        'Los magos imitaron las dos primeras plagas, pero no pudieron quitarlas. En la tercera no pudieron hacer nada, y dijeron a Faraón: «Dedo de Dios es éste» (Éx 8:19). En la sexta, las úlceras les impedían estar de pie delante de Moisés (Éx 9:11).',
        { h: 'Para que sepan' },
        'La frase que más se repite es «para que sepas que yo soy Jehová». Las plagas eran juicio, pero también revelación: Israel, Egipto y las naciones iban a saber quién es el Dios verdadero (Éx 9:16). Algunos egipcios lo entendieron: en la séptima plaga, los que temieron la palabra de Jehová guardaron a sus siervos y su ganado (Éx 9:20).',
        { posturas: {
          titulo: '¿Milagros o fenómenos naturales?',
          a: { n: 'Milagros de Dios (la de este recurso)', t: 'Las plagas llegan cuando Moisés las anuncia y se van cuando ora, una tras otra, con intensidad nunca vista, y respetan la tierra de Gosén. Eso no lo explica la naturaleza: es la mano de Dios.' },
          b: { n: 'Fenómenos naturales encadenados', t: 'Algunos autores proponen una cadena natural: una crecida del Nilo con algas rojas que matan los peces, las ranas que huyen del río, los insectos que se multiplican en sus cadáveres, las enfermedades del ganado, y luego tormentas, langostas y una tormenta de arena.' },
          c: 'Dios puede usar medios naturales, como usó un «recio viento oriental» para abrir el mar (Éx 14:21). Pero el anuncio previo, el momento exacto, la intensidad, la distinción entre Gosén y Egipto, y sobre todo la muerte solo de los primogénitos, hacen de las plagas un milagro. Una explicación natural puede describir cómo; no puede reemplazar a Quién.'
        } },
        { ejercicio: {
          pregunta: '¿Qué mostró que las plagas venían de Dios y no eran solo desgracias naturales?',
          opciones: [
            { t: 'Que fueron muy graves.', ok: false, por_que: 'Egipto conocía crecidas, plagas de insectos y tormentas. La gravedad sola no prueba el origen.' },
            { t: 'Que llegaron y se fueron por la palabra de Moisés, y desde la cuarta no tocaron a Israel.', ok: true, por_que: 'Moisés las anunciaba con día y hora, y Dios las quitaba cuando Moisés oraba (Éx 8:10-13; 9:5-6). La tierra de Gosén quedó aparte (Éx 8:22-23).' },
            { t: 'Que los magos no pudieron imitar ninguna.', ok: false, por_que: 'Los magos imitaron las dos primeras (Éx 7:22; 8:7), aunque no pudieron quitarlas.' }
          ],
          explicacion: 'El texto muestra el control de Dios sobre cada plaga: el anuncio, el momento, el límite y la distinción entre su pueblo y Egipto.'
        } }
      ],
      pensar: 'Egipto confiaba en el Nilo, en el sol y en su faraón, y Dios mostró que ninguno podía salvarlo. ¿En qué «dioses» modernos confía la gente que te rodea, y en cuáles estás tentado a confiar tú?'
    },
    {
      id: 'corazon', n: 'El corazón endurecido de Faraón', ref: 'Éxodo 4:21; 7:13-14; 8:15, 32; 9:12, 34-35; 10:1, 20; 14:4, 8; Romanos 9:17-18', fecha: -1446,
      visual: [
        tabla({
          titulo: 'Quién endurece el corazón de Faraón',
          cab: ['Momento', 'Faraón se endurece', 'Dios endurece'],
          filas: [
            ['Antes de las plagas', '—', 'Anuncio: «yo endureceré su corazón» (Éx 4:21; 7:3)'],
            ['La vara y plagas 1 a 5', 'Su corazón «se endureció»; él «endureció su corazón» (Éx 7:13, 22; 8:15, 19, 32; 9:7)', '—'],
            ['Plaga 6: úlceras', '—', '«Jehová endureció el corazón de Faraón» (Éx 9:12)'],
            ['Plaga 7: granizo', '«Se obstinó en pecar» (Éx 9:34-35)', '—'],
            ['Plagas 8 a 10', '—', 'Dios endurece (Éx 10:1, 20, 27; 11:10)'],
            ['En el mar', '—', 'Dios endurece a Faraón y a los egipcios (Éx 14:4, 8, 17)']
          ],
          nota: 'En las cinco primeras plagas, el texto dice que Faraón endureció su corazón; a partir de la sexta, que Dios lo endureció.'
        })
      ],
      texto: [
        'Diez veces el texto dice que el corazón de Faraón se endureció. Unas veces el sujeto es Faraón; otras veces, Dios. El pasaje plantea una pregunta difícil: si Dios endureció a Faraón, ¿cómo podía Faraón ser culpable?',
        { h: 'Lo que dice el texto' },
        'Antes de las plagas, Dios anuncia lo que va a pasar: «yo endureceré su corazón» (Éx 4:21). Pero cuando el relato comienza, durante las cinco primeras plagas, el texto dice que el corazón de Faraón se endureció o que él mismo lo endureció: «viendo Faraón que le habían dado reposo, endureció su corazón y no los escuchó» (Éx 8:15). Solo en la sexta plaga se dice por primera vez: «Jehová endureció el corazón de Faraón» (Éx 9:12). Y aún después, en el granizo, Faraón «se obstinó en pecar» (Éx 9:34).',
        { h: 'Un juicio sobre una decisión' },
        'El orden del relato sugiere que Dios no forzó a un hombre bien dispuesto a rebelarse. Faraón ya era un opresor que había matado a los niños de Israel, y rechazó una y otra vez la palabra de Dios. Dios lo dejó endurecerse, y luego lo confirmó en la decisión que él mismo había tomado. Es el mismo principio que Pablo describe con las naciones que rechazaron a Dios: «Dios los entregó» a lo que habían escogido (Ro 1:24).',
        'Pablo cita el caso de Faraón en Romanos 9:17: Dios lo levantó «para mostrar en ti mi poder, y para que mi nombre sea anunciado por toda la tierra». Dios usó incluso la dureza de Faraón para que su nombre fuera conocido entre las naciones.',
        { posturas: {
          titulo: '¿Dios endureció primero a Faraón, o lo confirmó en su decisión?',
          a: { n: 'Dios confirma la decisión de Faraón (la de este recurso)', t: 'El relato muestra primero el endurecimiento de Faraón (plagas 1 a 5) y después el de Dios. El anuncio de Éxodo 4:21 es lo que Dios sabía que pasaría y cómo iba a usarlo. Faraón es responsable de su rebelión, y el endurecimiento divino es un juicio sobre ella.' },
          b: { n: 'Dios endurece soberanamente', t: 'Otros intérpretes, en la tradición reformada, leen Éxodo 4:21 y Romanos 9:18 («de quien quiere, endurece») como una decisión soberana de Dios anterior a la de Faraón. Faraón sigue siendo culpable, porque actuó según su propio deseo, pero la causa última del endurecimiento está en el propósito de Dios.' },
          c: 'Las dos posturas afirman que Dios es soberano y que Faraón fue responsable. La primera, que sigue el orden del relato, es la que prevalece en este recurso y la más común en la enseñanza pentecostal. La advertencia vale para todos: «Si oyereis hoy su voz, no endurezcáis vuestros corazones» (He 3:7-8).'
        } }
      ],
      pensar: 'Faraón se ablandaba cuando sufría la plaga y se endurecía cuando venía el alivio. ¿Te ha pasado buscar a Dios en la crisis y olvidarlo cuando pasa? ¿Qué dice eso del corazón?'
    },
    {
      id: 'pascua', n: 'La Pascua', ref: 'Éxodo 11:1–12:30, 43-51; 13:1-16; 1 Corintios 5:7; Juan 1:29; 19:36; 1 Pedro 1:18-19', fecha: -1446,
      visual: [
        img('img/ex-pascua.webp', 'Una familia hebrea de pie, vestida para el viaje, con el cayado en la mano, come de prisa un cordero asado con panes sin levadura y hierbas en una casa de adobe iluminada por lámparas; en el dintel de la puerta se ve sangre', '«Lo comeréis así: ceñidos vuestros lomos, vuestro calzado en vuestros pies, y vuestro bordón en vuestra mano» (Éx 12:11).'),
        cita('Éxodo 12:12-14', 'Pues yo pasaré aquella noche por la tierra de Egipto, y heriré a todo primogénito en la tierra de Egipto, así de los hombres como de las bestias; y ejecutaré mis juicios en todos los dioses de Egipto. Yo Jehová. Y la sangre os será por señal en las casas donde vosotros estéis; y veré la sangre y pasaré de vosotros, y no habrá en vosotros plaga de mortandad cuando hiera la tierra de Egipto. Y este día os será en memoria, y lo celebraréis como fiesta solemne para Jehová durante vuestras generaciones; por estatuto perpetuo lo celebraréis.'),
        tabla({
          titulo: 'La Pascua y Cristo',
          cab: ['En Egipto', 'En Cristo'],
          filas: [
            ['Un cordero sin defecto, macho, de un año (Éx 12:5)', '«Un cordero sin mancha y sin contaminación» (1 P 1:19)'],
            ['Su sangre en el dintel protege a la casa (Éx 12:13)', 'Su sangre nos libra de la ira (Ro 5:9)'],
            ['No se le quiebra ningún hueso (Éx 12:46)', '«No será quebrado hueso suyo» (Jn 19:36)'],
            ['Se sacrifica el 14 de nisán (Éx 12:6)', 'Cristo muere en la Pascua (Jn 19:14)'],
            ['Pan sin levadura siete días (Éx 12:15)', '«Celebremos la fiesta… con panes sin levadura, de sinceridad y de verdad» (1 Co 5:8)']
          ],
          nota: '«Nuestra pascua, que es Cristo, ya fue sacrificada por nosotros» (1 Co 5:7).'
        })
      ],
      texto: [
        'La décima plaga era la más terrible: la muerte de todo primogénito de Egipto, desde el hijo de Faraón hasta el hijo de la esclava. Dios había advertido: «Israel es mi hijo, mi primogénito… he aquí yo voy a matar a tu hijo, tu primogénito» (Éx 4:22-23). Faraón había matado a los hijos de Israel; ahora el juicio caería sobre los suyos.',
        { h: 'Un cordero por familia' },
        'Pero esta vez Israel no quedaba a salvo por vivir en Gosén. Dios dio instrucciones precisas: el día diez del primer mes, cada familia tomaría un cordero sin defecto; el día catorce, al atardecer, lo sacrificaría, pondría su sangre en los postes y el dintel de la puerta, y lo comería asado esa noche, con panes sin levadura y hierbas amargas, vestida para el viaje. «Veré la sangre y pasaré de vosotros» (Éx 12:13). La palabra «pascua», pésaj en hebreo, significa «pasar por encima».',
        'A medianoche, Dios hirió a los primogénitos de Egipto, «y hubo un gran clamor en Egipto, porque no había casa donde no hubiese un muerto» (Éx 12:30). En las casas marcadas con sangre, nadie murió. Lo que salvó a Israel no fue ser mejor que Egipto, sino la sangre de un sustituto.',
        { h: 'Un nuevo calendario' },
        'Dios dijo: «Este mes os será principio de los meses» (Éx 12:2). La liberación se convirtió en el comienzo del año de Israel, y la Pascua en una fiesta perpetua que cada generación debía explicar a sus hijos (Éx 12:26-27). Los primogénitos de Israel, salvados esa noche, pertenecían desde entonces a Dios y debían ser redimidos (Éx 13:2, 13-15).',
        { h: 'Cristo, nuestra Pascua' },
        'Mil cuatrocientos años después, Jesús celebró la Pascua con sus discípulos, tomó el pan y la copa, y dio a la fiesta su sentido final: su cuerpo y su sangre del nuevo pacto. Murió en la Pascua, como el Cordero de Dios que quita el pecado del mundo (Jn 1:29). La tabla muestra los paralelos. La fiesta de la Pascua y su celebración en la historia de Israel se estudiarán en Las fiestas de Israel, en preparación.'
      ],
      pensar: 'Esa noche, la única diferencia entre una casa y otra fue la sangre en la puerta. ¿En qué estás confiando para estar a salvo delante de Dios?'
    },
    {
      id: 'salida', n: 'La salida: de Ramesés a Sucot', ref: 'Éxodo 12:31-42; 13:17-22; Génesis 15:14; 50:25; Números 33:3-6; Salmos 105:37-38', fecha: -1446,
      visual: [
        pasos([
          { t: 'Ramesés: el pueblo sale «con mano poderosa», el día quince del primer mes, a la vista de los egipcios (Nm 33:3).', fecha: -1446, estado: { view: V.delta, capas: [], lugares: ['ramses', 'gosen'], trazos: [] } },
          { t: 'De Ramesés a Sucot, por el valle de Tumilat (Éx 12:37).', fecha: -1446, estado: { view: V.delta, capas: [], lugares: ['ramses', 'r-sucot-egipto', 'piton'], trazos: ['ex-salida'] } },
          { t: 'Etam, «al confín del desierto» (Nm 33:6).', fecha: -1446, estado: { view: V.delta, capas: [], lugares: ['ramses', 'r-sucot-egipto', 'r-etam'], trazos: ['ex-salida'] } }
        ], 'La salida'),
        img('img/ex-salida.webp', 'De madrugada, columnas de familias hebreas salen de una ciudad egipcia de adobe con sus rebaños y carretas; algunos llevan un ataúd de madera envuelto en tela sobre los hombros', 'Los hijos de Israel se llevaron los huesos de José (Éx 13:19).')
      ],
      texto: [
        'Esa misma noche, Faraón llamó a Moisés y a Aarón: «Salid de en medio de mi pueblo… id, servid a Jehová, como habéis dicho» (Éx 12:31). Los egipcios apuraban a los israelitas para que se fueran pronto, y no hubo tiempo ni para que leudara el pan. Por eso, cada año, Israel comería pan sin levadura durante siete días.',
        { h: 'Con gran riqueza' },
        'Antes de salir, los israelitas pidieron a los egipcios objetos de plata, de oro y vestidos, «y Jehová dio gracia al pueblo delante de los egipcios… así despojaron a los egipcios» (Éx 12:36). Se cumplía lo que Dios había prometido a Abraham: «después de esto saldrán con gran riqueza» (Gn 15:14). Después de cuatro siglos de trabajo sin paga, Dios les dio su salario. Parte de ese oro se usaría para el tabernáculo, y parte, tristemente, para el becerro de oro.',
        { h: 'Al día exacto' },
        'El texto subraya la fecha: «pasados los cuatrocientos treinta años, en el mismo día todas las huestes de Jehová salieron de la tierra de Egipto» (Éx 12:41). Dios no se atrasó ni un día. Esa noche se llama «noche de guardar para Jehová» (Éx 12:42): Dios vigiló para sacarlos, y su pueblo vigilaría cada año para recordarlo.',
        { h: 'Los huesos de José' },
        'Moisés se llevó los huesos de José, cumpliendo el juramento que los hijos de Israel le habían hecho casi cuatrocientos años antes (Éx 13:19; Gn 50:25). Hebreos cuenta esa petición de José entre los actos de fe (He 11:22): murió en Egipto, pero no quería quedarse allí. Los huesos acompañaron a Israel por todo el desierto, hasta ser sepultados en Siquem (Jos 24:32).',
        { h: 'Ramesés, Sucot y Etam' },
        'El mapa sigue las tres primeras etapas. Desde Ramesés, en el delta oriental, el pueblo fue hacia el este por el valle de Tumilat, un corredor de tierra fértil que lleva al desierto, y acampó en Sucot, cuyo nombre significa «cabañas». De allí siguió a Etam, en el borde del desierto. El Salmo 105 resume la escena: «Los sacó con plata y oro; y no hubo en sus tribus enfermo. Egipto se alegró de que salieran» (Sal 105:37-38).'
      ],
      pensar: 'Israel salió de Egipto con los huesos de José, una promesa de casi cuatro siglos cumplida al día. ¿Qué promesa de Dios estás cargando tú, esperando verla cumplida?'
    }
  ];

  window.__EX = { mundo, liberacion };
})();
(() => {
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = window.__EX_H;

  /* ---------------- III. Del mar al Sinaí ---------------- */
  const mar = [
    {
      id: 'camino', n: 'Por qué no el camino de los filisteos', ref: 'Éxodo 13:17-20; 14:1-4; Números 33:5-7', fecha: -1446,
      visual: [
        mapa({ view: V.cruce, capas: [], lugares: ['ramses', 'r-sile', 'pelusio', 'gaza', 'r-sucot-egipto', 'r-etam'], trazos: ['ex-camino-filisteos', 'ex-salida'] }, 'Dos caminos'),
        cita('Éxodo 13:17-18', 'Y luego que Faraón dejó ir al pueblo, Dios no los llevó por el camino de la tierra de los filisteos, que estaba cerca; porque dijo Dios: Para que no se arrepienta el pueblo cuando vea la guerra, y se vuelva a Egipto. Mas hizo Dios que el pueblo rodease por el camino del desierto del Mar Rojo. Y subieron los hijos de Israel de Egipto armados.')
      ],
      texto: [
        'El camino más corto de Egipto a Canaán seguía la costa del Mediterráneo, de Silé a Gaza: unos 250 kilómetros, menos de dos semanas a pie. Los egipcios lo llamaban «el camino de Horus», y la Biblia, «el camino de la tierra de los filisteos». El mapa lo muestra en contraste con el camino que tomó Israel.',
        { h: 'Un camino lleno de fortalezas' },
        'Ese camino era la ruta militar del imperio. Los faraones del Reino Nuevo lo habían llenado de fortalezas con guarniciones, pozos vigilados y almacenes, desde Silé, en la frontera, hasta Gaza, que era una base egipcia. Los relieves del templo de Karnak muestran una cadena de esos fuertes. Un pueblo de esclavos recién liberados, con mujeres, niños y rebaños, habría tenido que pasar entre soldados egipcios desde el primer día.',
        'Dios conocía a su pueblo: «Para que no se arrepienta el pueblo cuando vea la guerra, y se vuelva a Egipto» (Éx 13:17). Por eso los llevó por el desierto. El camino más corto no era el mejor, y el camino de Dios no era el más rápido. Israel no estaba preparado para pelear; tenía que aprender primero a confiar.',
        { h: 'Volverse atrás' },
        'Desde Etam, Dios dio una orden extraña: «Di a los hijos de Israel que den la vuelta y acampen delante de Pi-hahirot, entre Migdol y el mar hacia Baal-zefón» (Éx 14:2). En lugar de seguir hacia el desierto, Israel retrocedió y acampó con el mar por delante. Para cualquier observador, era un error: el pueblo quedaba encerrado entre el desierto y el agua. Y eso fue exactamente lo que pensó Faraón: «Encerrados están en la tierra, el desierto los ha encerrado» (Éx 14:3).',
        'Dios usó la aparente torpeza de Israel para atraer al ejército de Faraón a su juicio, «y sabrán los egipcios que yo soy Jehová» (Éx 14:4). Ninguno de los nombres de Éxodo 14:2 está identificado con certeza: Migdol significa «torre», y Baal-zefón era un santuario de un dios cananeo. Por eso el lugar del cruce se discute, como muestra la estación siguiente.'
      ],
      pensar: 'Dios llevó a Israel por el camino largo y luego lo hizo volver hacia el mar. ¿Alguna vez una orden de Dios te pareció un error y después entendiste su propósito?'
    },
    {
      id: 'columna', n: 'La columna de nube y de fuego', ref: 'Éxodo 13:21-22; 14:19-20, 24; 40:34-38; Números 9:15-23; Nehemías 9:12, 19; 1 Corintios 10:1-2', fecha: [-1446, -1406],
      visual: [
        img('img/ex-columna.webp', 'De noche, en un campamento de tiendas en el desierto, una enorme columna de fuego se eleva hacia el cielo e ilumina las tiendas y a la multitud que la contempla', '«De noche en una columna de fuego para alumbrarles» (Éx 13:21).'),
        cita('Números 9:15-23', 'El día que el tabernáculo fue erigido, la nube cubrió el tabernáculo sobre la tienda del testimonio; y a la tarde había sobre el tabernáculo como una apariencia de fuego, hasta la mañana. Así era continuamente: la nube lo cubría de día, y de noche la apariencia de fuego. Cuando se alzaba la nube del tabernáculo, los hijos de Israel partían; y en el lugar donde la nube paraba, allí acampaban los hijos de Israel. Al mandato de Jehová los hijos de Israel partían, y al mandato de Jehová acampaban; todos los días que la nube estaba sobre el tabernáculo, permanecían acampados. Cuando la nube se detenía sobre el tabernáculo muchos días, entonces los hijos de Israel guardaban la ordenanza de Jehová, y no partían. Y cuando la nube estaba sobre el tabernáculo pocos días, al mandato de Jehová acampaban, y al mandato de Jehová partían. Y cuando la nube se detenía desde la tarde hasta la mañana, o cuando a la mañana la nube se levantaba, ellos partían; o si había estado un día, y a la noche la nube se levantaba, entonces partían. O si dos días, o un mes, o un año, mientras la nube se detenía sobre el tabernáculo permaneciendo sobre él, los hijos de Israel seguían acampados, y no se movían; mas cuando ella se alzaba, ellos partían. Al mandato de Jehová acampaban, y al mandato de Jehová partían, guardando la ordenanza de Jehová como Jehová lo había dicho por medio de Moisés.')
      ],
      texto: [
        'Desde Sucot, Israel no caminó solo: «Jehová iba delante de ellos de día en una columna de nube para guiarlos por el camino, y de noche en una columna de fuego para alumbrarles, a fin de que anduviesen de día y de noche» (Éx 13:21). Y el texto agrega: «Nunca se apartó de delante del pueblo» (Éx 13:22). Durante cuarenta años, la columna fue la señal visible de la presencia de Dios.',
        { h: 'Guía, protección y presencia' },
        'La columna guiaba: cuando se alzaba, el pueblo partía; cuando se detenía, acampaba, aunque fuera por dos días, un mes o un año (Nm 9:22). Nadie decidía la ruta por su cuenta. La columna protegía: en la noche del mar se puso entre Israel y el ejército egipcio, «y era nube y tinieblas para aquéllos, y alumbraba a Israel de noche» (Éx 14:20). Y la columna era presencia: el texto dice que Jehová iba en ella, y la llama también «el ángel de Dios» (Éx 14:19). Cuando se terminó el tabernáculo, la nube lo cubrió y la gloria de Jehová lo llenó (Éx 40:34).',
        { h: 'Una lección para cada día' },
        'Números 9, que muestra la pestaña de pasaje, repite siete veces que Israel partía o acampaba «al mandato de Jehová». Es una descripción de lo que significa ser guiado por Dios: no un plan de cuarenta años entregado de una vez, sino obediencia cada mañana. Siglos después, los levitas lo recordaban en oración: «Con columna de nube los guiaste de día, y con columna de fuego de noche, para alumbrarles el camino por donde habían de ir» (Neh 9:12).',
        { h: 'El Espíritu que guía' },
        'El Nuevo Testamento no usa la columna como un adorno. Pablo dice que los israelitas «todos estuvieron bajo la nube… y todos en Moisés fueron bautizados en la nube y en el mar» (1 Co 10:1-2). Y en lugar de una columna afuera, el creyente tiene al Espíritu adentro: «todos los que son guiados por el Espíritu de Dios, éstos son hijos de Dios» (Ro 8:14). Isaías ya decía que en el desierto Dios puso en medio de su pueblo «su santo espíritu» y que «el Espíritu de Jehová los pastoreó» (Is 63:11, 14). El Dios que guió a Israel con fuego es el que guía hoy a su iglesia con su Espíritu.',
        ir('Ver «El Espíritu en el Antiguo Testamento» en El Espíritu Santo', '../../espiritu-santo/#at/1')
      ],
      pensar: 'Israel no sabía cuánto tiempo iba a quedarse en cada lugar: dependía de la nube. ¿Estás dispuesto a moverte o a quedarte según Dios lo indique, aunque no conozcas el plan completo?'
    },
    {
      id: 'cruce', n: 'El cruce del mar', ref: 'Éxodo 14:5-31; Salmos 77:16-20; 106:7-12; Isaías 51:10; Hebreos 11:29', fecha: -1446,
      visual: [
        { tipo: 'mapa', titulo: '¿Dónde cruzaron?', selector: { etiqueta: 'Hipótesis', clave: 'exodo-cruce', opciones: [
          { id: 'lagos', t: 'Lagos Amargos y lago Timsah', estado: { view: V.cruce, capas: [], lugares: ['ramses', 'r-etam', 'r-cruce-lagos', 'sinai'], trazos: ['ex-salida', 'ex-cruce-lagos'] },
            nota: 'Los lagos del istmo de Suez, entre el delta y el desierto, a pocos días de Ramesés. Encaja con las tres jornadas hasta el mar y con el sentido «mar de juncos». En la Antigüedad estaban unidos al golfo de Suez por canales y pantanos.' },
          { id: 'suez', t: 'Golfo de Suez', estado: { view: V.cruce, capas: [], lugares: ['ramses', 'r-etam', 'mar-rojo', 'r-mara', 'sinai'], trazos: ['ex-salida', 'ex-cruce-suez'] },
            nota: 'El brazo occidental del mar Rojo, en su extremo norte. Es la lectura tradicional del «mar Rojo» y encaja con la ruta del sur hacia Jebel Musa. El agua era más profunda que en los lagos.' },
          { id: 'aqaba', t: 'Golfo de Áqaba (Nuweiba)', estado: { view: V.cruce, capas: [], lugares: ['ramses', 'r-etam', 'r-cruce-aqaba', 'r-madian', 'r-sinai-lawz'], trazos: ['ex-salida', 'ex-cruce-aqaba', 'ex-arabia-lawz'] },
            nota: 'El brazo oriental del mar Rojo, cruzado en la playa de Nuweiba hacia Arabia. Lo defienden quienes ubican el Sinaí en Madián (Jabal al-Lawz). Exige atravesar toda la península antes del cruce, lo que es difícil de conciliar con las primeras etapas de Números 33.' }
        ] } },
        img('img/ex-cruce-mar.webp', 'De noche, bajo un fuerte viento, una multitud de familias israelitas con rebaños cruza por el fondo seco del mar entre dos muros de agua altos y oscuros; detrás de ellos, una columna de fuego ilumina el camino', '«Los hijos de Israel entraron por en medio del mar, en seco, teniendo las aguas como muro a su derecha y a su izquierda» (Éx 14:22).')
      ],
      texto: [
        'Cuando Faraón supo que el pueblo había huido, se arrepintió y salió tras ellos con seiscientos carros escogidos y todos los carros de Egipto (Éx 14:7). Los israelitas vieron llegar al ejército, con el mar a sus espaldas, y clamaron con miedo: «¿No había sepulcros en Egipto, que nos has sacado para que muramos en el desierto?» (Éx 14:11).',
        { h: 'Estad firmes, y ved' },
        'La respuesta de Moisés es una de las grandes frases de la fe: «No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros… Jehová peleará por vosotros, y vosotros estaréis tranquilos» (Éx 14:13-14). Moisés extendió su mano, y «hizo Jehová que el mar se retirase por recio viento oriental toda aquella noche; y volvió el mar en seco, y las aguas quedaron divididas» (Éx 14:21). Dios usó el viento, pero el resultado fue un camino entre dos muros de agua. Los egipcios entraron detrás, sus carros se trabaron, y al amanecer el mar volvió: «no quedó de ellos ni uno» (Éx 14:28).',
        { h: '¿Mar Rojo o mar de juncos?' },
        'El hebreo llama a ese mar yam suf. Suf significa «junco» o «caña», la misma palabra de los carrizos donde Jocabed escondió a Moisés (Éx 2:3). La traducción griega antigua lo tradujo «mar Rojo», y así lo hace el Nuevo Testamento (He 11:29) y la Reina-Valera. Pero en la Biblia yam suf nombra también el golfo de Áqaba (1 R 9:26), de modo que puede designar todo el mar Rojo con sus dos brazos, y no solo un pantano.',
        { posturas: {
          titulo: '¿Un pantano de juncos o un mar profundo?',
          a: { n: 'Un mar con aguas profundas', t: 'El texto habla de muros de agua a la derecha y a la izquierda, y de un ejército entero que se ahoga. Yam suf nombra el mar Rojo en otros pasajes. Un pantano poco profundo no explica el relato.' },
          b: { n: 'Un mar de juncos, en los lagos del istmo', t: 'Suf es una planta de agua dulce o salobre, y los lagos del istmo de Suez estaban llenos de juncos. Quienes lo sostienen no niegan el milagro: el viento abrió un paso en aguas que tenían profundidad suficiente para ahogar a un ejército.' },
          c: 'El recurso no fija el lugar del cruce. El mapa muestra las tres propuestas principales, cada una con su explicación. Lo que el texto sí afirma, sin discusión, es que el cruce fue un milagro: el mar se abrió en el momento preciso, el pueblo pasó en seco y el ejército de Faraón quedó sepultado en el agua.'
        } },
        'Desde entonces, el cruce del mar quedó como el gran ejemplo del poder salvador de Dios. Los salmos y los profetas lo recuerdan una y otra vez (Sal 77:19; Is 51:10), y Hebreos lo cuenta entre los actos de fe: «Por la fe pasaron el Mar Rojo como por tierra seca» (He 11:29).'
      ],
      pensar: 'Moisés dijo «estad firmes, y ved» antes de que el mar se abriera. ¿En qué situación necesitas hoy estar firme y esperar ver la salvación de Dios, en lugar de huir o desesperarte?'
    },
    {
      id: 'cantico', n: 'El cántico de Moisés y de María', ref: 'Éxodo 15:1-21; Apocalipsis 15:2-4', fecha: -1446,
      visual: [
        cita('Éxodo 15:1-11', 'Entonces cantó Moisés y los hijos de Israel este cántico a Jehová, y dijeron: Cantaré yo a Jehová, porque se ha magnificado grandemente; Ha echado en el mar al caballo y al jinete. Jehová es mi fortaleza y mi cántico, Y ha sido mi salvación. Este es mi Dios, y lo alabaré; Dios de mi padre, y lo enalteceré. Jehová es varón de guerra; Jehová es su nombre. Echó en el mar los carros de Faraón y su ejército; Y sus capitanes escogidos fueron hundidos en el Mar Rojo. Los abismos los cubrieron; Descendieron a las profundidades como piedra. Tu diestra, oh Jehová, ha sido magnificada en poder; Tu diestra, oh Jehová, ha quebrantado al enemigo. Y con la grandeza de tu poder has derribado a los que se levantaron contra ti. Enviaste tu ira; los consumió como a hojarasca. Al soplo de tu aliento se amontonaron las aguas; Se juntaron las corrientes como en un montón; Los abismos se cuajaron en medio del mar. El enemigo dijo: Perseguiré, apresaré, repartiré despojos; Mi alma se saciará de ellos; Sacaré mi espada, los destruirá mi mano. Soplaste con tu viento; los cubrió el mar; Se hundieron como plomo en las impetuosas aguas. ¿Quién como tú, oh Jehová, entre los dioses? ¿Quién como tú, magnífico en santidad, Terrible en maravillosas hazañas, hacedor de prodigios?'),
        img('img/ex-maria-pandero.webp', 'Una mujer hebrea anciana, de cabello blanco bajo un velo, toca un pandero y danza con alegría a la orilla del mar al amanecer, seguida por muchas mujeres con panderos', '«María la profetisa, hermana de Aarón, tomó un pandero en su mano» (Éx 15:20).')
      ],
      texto: [
        'La primera reacción de Israel del otro lado del mar fue cantar. «Entonces cantó Moisés y los hijos de Israel este cántico a Jehová» (Éx 15:1). Es el primer cántico de la Biblia, y uno de los poemas hebreos más antiguos que se conservan. La pestaña de pasaje muestra su primera parte.',
        { h: 'Un canto a Dios, no al pueblo' },
        'El cántico no celebra la valentía de Israel ni la habilidad de Moisés. Todo el protagonismo es de Dios: «Jehová es mi fortaleza y mi cántico, y ha sido mi salvación» (Éx 15:2). Jehová es «varón de guerra» (Éx 15:3) que pelea por su pueblo. La pregunta del versículo 11 es el centro del canto: «¿Quién como tú, oh Jehová, entre los dioses? ¿Quién como tú, magnífico en santidad, terrible en maravillosas hazañas, hacedor de prodigios?». Después de las plagas y del mar, la respuesta es obvia: nadie.',
        { h: 'Del pasado al futuro' },
        'La segunda parte del cántico mira hacia adelante: los pueblos de Canaán, Edom y Moab temblarán al oír lo que Dios hizo (Éx 15:14-16), y Dios llevará a su pueblo para plantarlo «en el monte de tu heredad, en el lugar de tu morada» (Éx 15:17). Termina con una afirmación que abarca toda la historia: «Jehová reinará eternamente y para siempre» (Éx 15:18). El cruce del mar era el comienzo, no el final.',
        { h: 'María la profetisa' },
        'Entonces María, la hermana de Moisés y de Aarón, tomó un pandero, y todas las mujeres salieron tras ella con panderos y danzas, respondiendo: «Cantad a Jehová, porque en extremo se ha engrandecido» (Éx 15:21). El texto la llama «profetisa» (Éx 15:20): es la primera mujer con ese título en la Biblia. Siglos después, el profeta Miqueas la nombra junto a sus hermanos entre los guías que Dios dio a Israel (Mi 6:4). La adoración con música, danza y alegría delante de Dios tiene aquí su primer ejemplo.',
        { h: 'El cántico que se volverá a cantar' },
        'En Apocalipsis, los vencedores están de pie junto a un mar de vidrio mezclado con fuego, y cantan «el cántico de Moisés siervo de Dios, y el cántico del Cordero» (Ap 15:3). El primer éxodo terminó con un canto junto al mar; la redención final también. La ruta VII vuelve sobre este cántico.',
        ir('Ver «El cántico de Moisés y del Cordero» en la ruta VII', '#biblia/6')
      ],
      pensar: 'Israel cantó antes de tener comida, agua o tierra: solo porque Dios lo había salvado. ¿Qué lugar tiene la alabanza en tu vida cuando todavía no ves resuelto todo lo demás?'
    },
    {
      id: 'mara-elim', n: 'Mara y Elim: Jehová tu sanador', ref: 'Éxodo 15:22-27; Números 33:8-9; Salmos 103:2-3', fecha: -1446,
      visual: [
        mapa({ view: V.sinai, capas: [], lugares: ['mar-rojo', 'r-mara', 'r-elim', 'sinai'], trazos: ['ex-sur-sinai'] }, 'Mara y Elim'),
        img('img/ex-mara.webp', 'Un anciano hebreo echa un trozo de madera en un pozo de agua turbia en el desierto, mientras una multitud sedienta y cansada lo rodea con cántaros vacíos', '«Jehová le mostró un árbol; y lo echó en las aguas, y las aguas se endulzaron» (Éx 15:25).')
      ],
      texto: [
        'Tres días después del cántico, la alegría se acabó. El pueblo caminó por el desierto de Shur sin encontrar agua, y cuando por fin llegó a una fuente, «no pudieron beber las aguas de Mara, porque eran amargas» (Éx 15:23). Mara significa «amarga». El mismo pueblo que había cantado junto al mar murmuró contra Moisés: «¿Qué hemos de beber?» (Éx 15:24).',
        { h: 'Un árbol en el agua' },
        'Moisés no murmuró: clamó a Jehová. Dios le mostró un árbol, Moisés lo echó en las aguas, y se endulzaron. Allí, dice el texto, Dios les dio estatutos y los probó (Éx 15:25). La prueba no era el agua amarga, sino lo que el pueblo haría frente a ella. Muchos lectores cristianos han visto en ese madero que endulza lo amargo una imagen de la cruz, aunque el texto no lo dice.',
        { h: 'Jehová tu sanador' },
        'En Mara, Dios se reveló con un nombre nuevo: «Si oyeres atentamente la voz de Jehová tu Dios… ninguna enfermedad de las que envié a los egipcios te enviaré a ti; porque yo soy Jehová tu sanador» (Éx 15:26). En hebreo, Adonái rofeja: Jehová que te sana. Es una de las primeras promesas de sanidad de la Biblia, y está unida a la obediencia y a la confianza en Dios.',
        'La sanidad divina es parte del mensaje del evangelio completo: el mismo Jehová que sanaba en el desierto sanó a los enfermos en el ministerio de Jesús, y la sanidad está provista en su obra en la cruz (Is 53:4-5; Mt 8:16-17). El salmista une el perdón y la salud en la misma alabanza: Dios es quien «perdona todas tus iniquidades, el que sana todas tus dolencias» (Sal 103:3). La estación sobre la sanidad en La persona y obra de Cristo explica esa doctrina y su equilibrio pastoral.',
        { h: 'Doce fuentes y setenta palmeras' },
        'Después de Mara, Dios los llevó a Elim, «donde había doce fuentes de aguas, y setenta palmeras; y acamparon allí junto a las aguas» (Éx 15:27). Una fuente para cada tribu. El camino de Dios incluye Mara y también Elim. La tradición ubica Mara en Ain Hawara y Elim en el valle de Gharandel, en la costa occidental del Sinaí, en la ruta del sur; las dos ubicaciones son probables, no seguras.',
        ir('Ver «Sanidad en la expiación» en La persona y obra de Cristo', '../../persona-y-obra-de-cristo/#cruz/8')
      ],
      pensar: 'Israel llegó a Mara antes que a Elim. Cuando la vida te pone frente a aguas amargas, ¿murmuras como el pueblo o clamas como Moisés?'
    },
    {
      id: 'mana', n: 'El maná y las codornices', ref: 'Éxodo 16; Números 11:7-9; Deuteronomio 8:2-3, 16; Josué 5:12; Juan 6:30-35, 48-51', fecha: -1446,
      visual: [
        img('img/ex-mana.webp', 'Al amanecer, familias israelitas se agachan a recoger con cestas pequeños granos blancos que cubren el suelo del desierto alrededor del campamento, como escarcha', '«Una cosa menuda, redonda, menuda como una escarcha sobre la tierra» (Éx 16:14).'),
        tabla({
          titulo: 'Las reglas del maná',
          cab: ['Regla', 'Lo que enseñaba', 'Texto'],
          filas: [
            ['Un gomer por persona cada día', 'Dios da lo suficiente para hoy', 'Éx 16:16-18'],
            ['No guardar para el día siguiente', 'Confiar en la provisión de mañana', 'Éx 16:19-20'],
            ['Doble porción el sexto día', 'El reposo es un regalo', 'Éx 16:22-26'],
            ['Nada cae el séptimo día', 'Obedecer aunque parezca absurdo', 'Éx 16:27-30'],
            ['Un gomer guardado ante el testimonio', 'Recordar a las generaciones futuras', 'Éx 16:32-34'],
            ['Cesó al entrar en Canaán', 'Dios provee de distintas maneras', 'Jos 5:12']
          ],
          nota: 'Un gomer es la décima parte de un efa (Éx 16:36), unos 2,2 litros.'
        })
      ],
      texto: [
        'Un mes después de salir de Egipto, en el desierto de Sin, el pueblo volvió a murmurar, esta vez por comida: «Ojalá hubiéramos muerto por mano de Jehová en la tierra de Egipto, cuando nos sentábamos a las ollas de carne» (Éx 16:3). La memoria de la esclavitud ya se había vuelto nostalgia.',
        { h: 'Pan del cielo' },
        'Dios respondió con gracia: «He aquí yo os haré llover pan del cielo» (Éx 16:4). Esa tarde llegaron codornices que cubrieron el campamento, y a la mañana siguiente, cuando se fue el rocío, el suelo estaba cubierto de una cosa menuda y blanca. Los israelitas preguntaron: man hu, «¿qué es esto?», y de ahí vino el nombre maná. Tenía el sabor «de hojuelas con miel» (Éx 16:31). Lo comieron cuarenta años, hasta llegar a la tierra de Canaán (Éx 16:35).',
        { h: 'Una escuela diaria' },
        'El maná era alimento y también una escuela. Dios dijo que lo daba «para que yo lo pruebe si anda en mi ley, o no» (Éx 16:4). La tabla resume sus reglas: lo justo para cada día, nada guardado para mañana, el doble el sexto día y nada el séptimo. Es la primera vez que la Biblia menciona el día de reposo como una práctica de Israel, antes de los diez mandamientos. Moisés explicó el sentido al final del viaje: Dios los sustentó con maná «para hacerte saber que no sólo de pan vivirá el hombre, mas de todo lo que sale de la boca de Jehová vivirá el hombre» (Dt 8:3). Jesús citó ese versículo en su propio desierto (Mt 4:4).',
        { posturas: {
          titulo: '¿Qué era el maná?',
          a: { n: 'Un alimento milagroso (la de este recurso)', t: 'Caía cada mañana alrededor del campamento, en cantidad suficiente para dos millones de personas, durante cuarenta años y en cualquier etapa del viaje. Se pudría si se guardaba, salvo el día sexto; no caía el séptimo; y dejó de caer el día después de la Pascua en Gilgal (Jos 5:10-12).' },
          b: { n: 'Un producto natural del desierto', t: 'Algunos autores lo identifican con las gotas dulces que dejan unos insectos sobre los tamariscos del Sinaí, que los beduinos todavía llaman man y recogen al amanecer.' },
          c: 'Esa sustancia existe, pero se produce solo algunas semanas al año, en cantidades de unos pocos kilos, y no se comporta como el maná del relato. Dios pudo usar algo parecido a un alimento conocido, pero la cantidad, la regularidad, la doble porción, el reposo y el final repentino solo se explican como provisión milagrosa.'
        } },
        { h: 'El verdadero pan del cielo' },
        'Jesús tomó el maná como figura de sí mismo: «No os dio Moisés el pan del cielo, mas mi Padre os da el verdadero pan del cielo… Yo soy el pan de vida» (Jn 6:32, 35). Los que comieron maná murieron; el que come del pan vivo vivirá para siempre (Jn 6:49-51).'
      ],
      pensar: 'El maná no se podía guardar: había que recogerlo cada mañana. ¿Cómo es tu relación diaria con Dios y su Palabra: buscas «el pan de hoy», o vives de lo que recogiste hace tiempo?'
    },
    {
      id: 'refidim', n: 'Refidim: la peña, Amalec y Jetro', ref: 'Éxodo 17–18; Deuteronomio 25:17-19; 1 Corintios 10:4', fecha: -1446,
      visual: [
        mapa({ view: V.sinai, capas: [], lugares: ['r-desierto-sin', 'r-dofca', 'r-refidim', 'sinai'], trazos: ['ex-sur-sinai'] }, 'Refidim'),
        img('img/ex-amalec.webp', 'En la cima de una colina rocosa del desierto, un anciano hebreo sentado sobre una piedra alza los brazos con un cayado mientras otros dos hombres ancianos sostienen sus manos; abajo, en el valle, se libra una batalla', '«Aarón y Hur sostenían sus manos, el uno de un lado y el otro de otro» (Éx 17:12).')
      ],
      texto: [
        'En Refidim, la última etapa antes del Sinaí, ocurrieron tres hechos que preparan lo que vendrá: el agua de la peña, la primera batalla de Israel y la visita de Jetro.',
        { h: 'La peña golpeada' },
        'Otra vez faltó el agua, y otra vez el pueblo discutió con Moisés, al punto de casi apedrearlo. Dios le ordenó tomar la vara e ir delante del pueblo: «He aquí que yo estaré delante de ti allí sobre la peña en Horeb; y golpearás la peña, y saldrán de ella aguas» (Éx 17:6). Moisés llamó al lugar Masah y Meriba, «prueba» y «contienda», porque el pueblo tentó a Dios diciendo: «¿Está, pues, Jehová entre nosotros, o no?» (Éx 17:7). Pablo dice que bebían «de la roca espiritual que los seguía, y la roca era Cristo» (1 Co 10:4): Cristo, golpeado una vez, da el agua de vida a su pueblo.',
        { h: 'La primera batalla' },
        'Entonces vino Amalec, un pueblo del Neguev descendiente de Esaú (Gn 36:12). Deuteronomio cuenta que atacó por la retaguardia a los débiles y cansados (Dt 25:18). Moisés mandó a un joven, Josué, a pelear, mientras él subía a la cumbre del collado con la vara de Dios en la mano. «Cuando alzaba Moisés su mano, Israel prevalecía; mas cuando él bajaba su mano, prevalecía Amalec» (Éx 17:11). Cuando se cansó, Aarón y Hur le sostuvieron las manos hasta que se puso el sol. Es la primera vez que aparece Josué, el futuro sucesor de Moisés.',
        'Moisés edificó un altar y lo llamó «Jehová-nisi» (Éx 17:15), que significa Jehová es mi estandarte. La victoria no vino de la espada de Josué ni de los brazos de Moisés, sino de Dios. Y la intercesión necesita compañeros: ni siquiera Moisés pudo sostener las manos solo.',
        { h: 'El consejo de Jetro' },
        'Jetro, el suegro de Moisés, vino a encontrarlo con Séfora y sus hijos. Al oír lo que Dios había hecho, dijo: «Ahora conozco que Jehová es más grande que todos los dioses» (Éx 18:11), y ofreció sacrificios. Al día siguiente vio a Moisés juzgando al pueblo desde la mañana hasta la tarde, y le dijo: «No está bien lo que haces… no podrás hacerlo tú solo» (Éx 18:17-18). Le aconsejó elegir hombres capaces, temerosos de Dios, para juzgar los casos pequeños. Moisés escuchó el consejo de un madianita. Un buen líder sabe delegar y sabe recibir consejo.'
      ],
      pensar: 'Moisés necesitó a Aarón y a Hur para sostener sus manos, y a Jetro para aprender a delegar. ¿A quién estás sosteniendo tú en oración, y quién te sostiene a ti?'
    }
  ];

  /* ---------------- IV. Un año en el Sinaí ---------------- */
  const sinai = [
    {
      id: 'donde-sinai', n: '¿Dónde está el monte Sinaí?', ref: 'Éxodo 3:1; 19:1-2; Deuteronomio 1:2; 1 Reyes 19:8; Gálatas 4:25', fecha: -1446,
      visual: [
        { tipo: 'mapa', titulo: 'Cuatro propuestas', selector: { etiqueta: 'Propuesta', clave: 'exodo-sinai', opciones: [
          { id: 'musa', t: 'Jebel Musa, sur del Sinaí (tradicional)', estado: { view: V.sinai, capas: [], lugares: ['sinai', 'r-refidim', 'r-hazerot', 'cades-barnea'], trazos: ['ex-sur-sinai', 'ex-sinai-cades'] },
            nota: 'La ubicación de la tradición cristiana desde el siglo IV, con el monasterio de Santa Catalina al pie. Tiene una gran llanura para el campamento (er-Raha) y está a unas once jornadas de Cades-barnea (Dt 1:2).' },
          { id: 'lawz', t: 'Jabal al-Lawz, en Arabia', estado: { view: V.arabia, capas: [], lugares: ['r-sinai-lawz', 'r-madian', 'r-cruce-aqaba', 'cades-barnea'], trazos: ['ex-cruce-aqaba', 'ex-arabia-lawz'] },
            nota: 'Un monte de Arabia Saudita, en la antigua Madián, popularizado desde los años ochenta. Se apoya en que Moisés pastoreaba en Madián cerca del monte de Dios y en Gálatas 4:25. Sus defensores señalan una cima ennegrecida y unas rocas grabadas, cuyo origen no se ha estudiado con rigor.' },
          { id: 'karkom', t: 'Har Karkom, en el Neguev', estado: { view: V.cades, capas: [], lugares: ['r-sinai-karkom', 'cades-barnea', 'r-cruce-lagos'], trazos: ['ex-cruce-lagos', 'ex-ruta-karkom'] },
            nota: 'Una montaña del Neguev con cientos de grabados rupestres y lugares de culto antiguos. Propuesta por el arqueólogo Emmanuel Anati, que la fecha en un período muy anterior al del Éxodo bíblico.' },
          { id: 'hilal', t: 'Jebel Hilal, en el norte del Sinaí', estado: { view: V.cades, capas: [], lugares: ['r-sinai-hilal', 'r-sirbonis', 'cades-barnea'], trazos: ['ex-cruce-norte', 'ex-ruta-hilal'] },
            nota: 'Un monte cerca de Cades-barnea, propuesto por quienes sitúan el cruce en el lago Sirbonis, junto al Mediterráneo. Queda a uno o dos días de Cades, lo que no encaja con las once jornadas de Deuteronomio 1:2.' }
        ] } },
        foto('img/ex-jebel-musa.jpg', 'El monasterio de Santa Catalina, un recinto amurallado de piedra rojiza con cipreses, al pie de las laderas de granito del Jebel Musa, en el sur de la península del Sinaí', 'El monasterio de Santa Catalina, del siglo VI, al pie del Jebel Musa, el monte Sinaí de la tradición.', 'Foto: Berthold Werner, CC BY-SA 3.0, Wikimedia Commons')
      ],
      texto: [
        'La Biblia llama al monte de la ley con dos nombres: Sinaí y Horeb (Éx 3:1; Dt 5:2). Allí llegó Israel «en el mes tercero de la salida» de Egipto (Éx 19:1), y allí acampó casi un año. Pero el texto no da coordenadas, y después de Elías, que caminó cuarenta días hasta «Horeb, el monte de Dios» (1 R 19:8), ningún israelita vuelve a visitarlo. El lugar se perdió en la memoria de Israel, quizá a propósito: la presencia de Dios no quedó atada a un monte, sino al tabernáculo que viajó con su pueblo.',
        { h: 'La tradición: Jebel Musa' },
        'Desde el siglo IV, los cristianos identificaron el Sinaí con Jebel Musa, «el monte de Moisés», en el sur de la península, de 2.285 metros. Al pie se construyó en el siglo VI el monasterio de Santa Catalina, que todavía existe. A su favor tiene una gran llanura frente al monte, donde cabría un campamento enorme, fuentes de agua en la región y la distancia de Deuteronomio 1:2: «Once jornadas hay desde Horeb… hasta Cades-barnea», unos trescientos kilómetros. El mapa permite comparar las cuatro propuestas principales.',
        { posturas: {
          titulo: '¿En la península del Sinaí o en Arabia?',
          a: { n: 'Jebel Musa (la de este recurso)', t: 'Encaja con la ruta del sur de Números 33, con las once jornadas hasta Cades-barnea y con una tradición de diecisiete siglos. En tiempos de Pablo, los romanos llamaban «Arabia» a una región amplia que incluía el Sinaí y el Neguev, gobernada por los nabateos; por eso Gálatas 4:25 no obliga a buscarlo al este del golfo de Áqaba.' },
          b: { n: 'Jabal al-Lawz, en la antigua Madián', t: 'Moisés pastoreaba las ovejas de su suegro madianita cuando llegó al monte de Dios (Éx 3:1), y Pablo dice que el Sinaí está «en Arabia» (Gá 4:25). Por eso algunos lo buscan en Madián, al este del golfo de Áqaba, y ubican el cruce del mar en Nuweiba.' },
          c: 'Moisés llevó el rebaño «a través del desierto» (Éx 3:1), lo que puede significar lejos de los campamentos de Madián. Y Jetro tuvo que viajar para visitar a Moisés en el monte de Dios y después «se fue a su tierra» (Éx 18:27), lo que sugiere que el Sinaí no estaba en Madián. Este recurso sigue la ubicación tradicional, sin dejar de mostrar las otras.'
        } },
        'Lo que importa del Sinaí no es dónde está, sino lo que pasó allí: Dios habló con su pueblo, hizo un pacto con él y vino a habitar en medio de ellos. Esas son las estaciones que siguen.'
      ],
      pensar: 'El monte donde Dios habló quedó sin una ubicación segura, pero sus palabras se conservaron completas. ¿Por qué crees que Dios preservó su Palabra con tanto cuidado y no el lugar donde la dio?'
    },
    {
      id: 'pacto', n: 'El pacto del Sinaí', ref: 'Éxodo 19:1–24:11; Deuteronomio 5:2-3; Hebreos 12:18-24; Mateo 26:28', fecha: -1446,
      visual: [
        cita('Éxodo 19:3-6', 'Y Moisés subió a Dios; y Jehová lo llamó desde el monte, diciendo: Así dirás a la casa de Jacob, y anunciarás a los hijos de Israel: Vosotros visteis lo que hice a los egipcios, y cómo os tomé sobre alas de águilas, y os he traído a mí. Ahora, pues, si diereis oído a mi voz, y guardareis mi pacto, vosotros seréis mi especial tesoro sobre todos los pueblos; porque mía es toda la tierra. Y vosotros me seréis un reino de sacerdotes, y gente santa. Estas son las palabras que dirás a los hijos de Israel.'),
        tabla({
          titulo: 'Un pacto con la forma de los tratados de su tiempo',
          cab: ['Parte de un tratado antiguo', 'En el pacto del Sinaí'],
          filas: [
            ['El rey se presenta', '«Yo soy Jehová tu Dios»'],
            ['Lo que el rey hizo por su vasallo', '«Que te saqué de la tierra de Egipto, de casa de servidumbre» (Éx 20:2)'],
            ['Las condiciones', 'Los diez mandamientos y el libro del pacto (Éx 20–23)'],
            ['El documento guardado en el santuario', 'Las tablas dentro del arca (Éx 25:16; Dt 10:5)'],
            ['La lectura pública', 'Moisés lee el libro del pacto (Éx 24:7)'],
            ['Bendiciones y maldiciones', 'Levítico 26 y Deuteronomio 28'],
            ['La ratificación', 'La sangre del pacto y la comida ante Dios (Éx 24:8-11)']
          ],
          nota: 'La forma se parece a la de los tratados hititas de los siglos XV y XIV a.C., los de la época de Moisés.'
        }),
        img('img/ex-sinai-monte.webp', 'Una enorme multitud de israelitas de pie en una llanura al pie de una montaña de granito envuelta en una nube oscura, con relámpagos y humo que sube de la cima', '«Todo el monte Sinaí humeaba, porque Jehová había descendido sobre él en fuego» (Éx 19:18).')
      ],
      texto: [
        'Tres meses después de salir de Egipto, Israel acampó frente al monte. Lo primero que Dios dijo no fue una lista de leyes, sino un recuerdo: «Vosotros visteis lo que hice a los egipcios, y cómo os tomé sobre alas de águilas, y os he traído a mí» (Éx 19:4). La ley vino después de la redención. Dios no salvó a Israel porque guardara la ley; le dio la ley porque ya lo había salvado.',
        { h: 'Un reino de sacerdotes' },
        'Luego vino la propuesta del pacto: si escuchan mi voz y guardan mi pacto, «vosotros seréis mi especial tesoro sobre todos los pueblos… y vosotros me seréis un reino de sacerdotes, y gente santa» (Éx 19:5-6). Israel debía ser para el mundo lo que un sacerdote es para su pueblo: un mediador que acerca a los demás a Dios. Pedro aplica las mismas palabras a la iglesia (1 P 2:9).',
        { h: 'Fuego, nube y trompeta' },
        'Al tercer día, Dios descendió sobre el monte con truenos, relámpagos, una espesa nube y un sonido de bocina muy fuerte, y todo el monte se estremecía (Éx 19:16-18). El pueblo tuvo miedo y pidió que Dios no les hablara directamente: «Habla tú con nosotros, y nosotros oiremos; pero no hable Dios con nosotros, para que no muramos» (Éx 20:19). Moisés pasó a ser el mediador del pacto.',
        { h: 'La sangre del pacto' },
        'Moisés escribió las palabras de Jehová, edificó un altar con doce columnas, ofreció sacrificios y leyó el libro del pacto. El pueblo respondió: «Haremos todas las cosas que Jehová ha dicho, y obedeceremos» (Éx 24:7). Entonces Moisés roció la sangre sobre el pueblo: «He aquí la sangre del pacto que Jehová ha hecho con vosotros» (Éx 24:8). Jesús, en la última cena, usó palabras parecidas para la copa: «esto es mi sangre del nuevo pacto» (Mt 26:28).',
        'Este recurso cuenta lo que pasó en el Sinaí. Qué es el pacto mosaico, cómo se relaciona con los pactos con Abraham y David y qué pasa con él en el nuevo pacto se estudia en Pactos y dispensaciones.',
        ir('Ver «El Sinaí: el pacto con Israel» en Pactos y dispensaciones', '../../pactos-y-dispensaciones/#pactos/6')
      ],
      pensar: 'En el Sinaí, Dios primero recordó lo que había hecho por Israel y después le dio sus mandamientos. ¿Obedeces a Dios para ganar su favor, o porque ya te salvó?'
    },
    {
      id: 'mandamientos', n: 'Los diez mandamientos', ref: 'Éxodo 20:1-17; 31:18; 32:15-16; Deuteronomio 5:6-22; Mateo 22:36-40; Romanos 13:8-10', fecha: -1446,
      visual: [
        tabla({
          titulo: 'Las diez palabras',
          cab: ['', 'Mandamiento', 'En el Nuevo Testamento'],
          filas: [
            ['1', 'No tendrás dioses ajenos delante de mí', 'Mt 4:10; 1 Co 8:6'],
            ['2', 'No te harás imagen para adorarla', '1 Jn 5:21; Hch 17:29'],
            ['3', 'No tomarás el nombre de Jehová en vano', 'Mt 5:33-37; Stg 5:12'],
            ['4', 'Acuérdate del día de reposo', 'Mr 2:27; Col 2:16-17; He 4:9-10'],
            ['5', 'Honra a tu padre y a tu madre', 'Ef 6:1-3'],
            ['6', 'No matarás', 'Mt 5:21-22; Ro 13:9'],
            ['7', 'No cometerás adulterio', 'Mt 5:27-28; Ro 13:9'],
            ['8', 'No hurtarás', 'Ef 4:28; Ro 13:9'],
            ['9', 'No hablarás falso testimonio', 'Ef 4:25; Col 3:9'],
            ['10', 'No codiciarás', 'Ro 7:7; 13:9']
          ],
          nota: 'En hebreo, la Biblia los llama las diez palabras (Éx 34:28). La forma de numerarlos varía entre el judaísmo, las iglesias católica y luterana, y las demás iglesias protestantes; aquí se sigue esta última.'
        }),
        img('img/ex-tablas.webp', 'Un anciano hebreo de barba blanca desciende por un sendero rocoso de una montaña con dos tablas de piedra en los brazos; su rostro está iluminado por un resplandor suave', 'Las tablas, «escritas con el dedo de Dios» (Éx 31:18).')
      ],
      texto: [
        'En el Sinaí, Dios habló al pueblo diez palabras con su propia voz (Dt 5:22) y después las escribió en dos tablas de piedra, «escritas con el dedo de Dios» (Éx 31:18). Son el centro de la ley de Moisés y el resumen de toda la vida delante de Dios. La tabla las enumera.',
        { h: 'Primero, la redención' },
        'Los mandamientos empiezan con una presentación: «Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre» (Éx 20:2). Las diez palabras no son las condiciones para ser liberado, sino la forma de vivir de un pueblo ya liberado. Por eso el mandamiento del reposo, en Deuteronomio, se apoya en el recuerdo de Egipto: «acuérdate que fuiste siervo en tierra de Egipto» (Dt 5:15).',
        { h: 'Dos tablas' },
        'Los cuatro primeros mandamientos se refieren a la relación con Dios: un solo Dios, sin imágenes, con reverencia por su nombre y con tiempo dedicado a Él. Los seis siguientes, a la relación con el prójimo: la familia, la vida, el matrimonio, los bienes, la verdad y el deseo del corazón. Jesús resumió las dos tablas en dos mandamientos: amar a Dios con todo el corazón y al prójimo como a uno mismo (Mt 22:37-40).',
        { h: 'La ley y el Espíritu' },
        'Según la tradición judía, la ley se dio en el Sinaí cincuenta días después de la Pascua, en la fiesta que en griego se llamó Pentecostés. Por eso es significativo lo que pasó en el Pentecostés de Hechos 2. En el Sinaí hubo fuego, viento y una voz; en Jerusalén, viento, lenguas de fuego y el Espíritu. Después del becerro de oro murieron tres mil del pueblo (Éx 32:28); el día de Pentecostés se añadieron a la iglesia «como tres mil personas» (Hch 2:41). Pablo contrasta las dos alianzas: la ley escrita en piedra y el Espíritu que escribe en el corazón, «porque la letra mata, mas el espíritu vivifica» (2 Co 3:6).',
        'Cómo se aplica la ley de Moisés al creyente, cuáles son sus partes y qué significa que Cristo la cumplió se estudiará en La ley de Moisés, en preparación. El día de reposo se trata en el taller de Pactos y dispensaciones.',
        ir('Ver «Éxodo 20:8: el día de reposo» en Pactos y dispensaciones', '../../pactos-y-dispensaciones/#taller/3')
      ],
      pensar: 'Los mandamientos comienzan con «Yo soy Jehová tu Dios, que te saqué». ¿Cómo cambia tu manera de obedecer cuando recuerdas primero lo que Dios hizo por ti?'
    },
    {
      id: 'becerro', n: 'El becerro de oro', ref: 'Éxodo 32; Deuteronomio 9:7-21; Salmos 106:19-23; Hechos 7:39-41; 1 Corintios 10:7', fecha: -1446,
      visual: [
        img('img/ex-becerro.webp', 'Al pie de una montaña, una multitud de israelitas danza y celebra alrededor de un becerro de oro sobre un pedestal, junto a un altar humeante; en un sendero de la montaña, un anciano con dos tablas de piedra mira la escena con indignación', '«Israel, estos son tus dioses, que te sacaron de la tierra de Egipto» (Éx 32:4).'),
        cita('Éxodo 32:1-6', 'Viendo el pueblo que Moisés tardaba en descender del monte, se acercaron entonces a Aarón, y le dijeron: Levántate, haznos dioses que vayan delante de nosotros; porque a este Moisés, el varón que nos sacó de la tierra de Egipto, no sabemos qué le haya acontecido. Y Aarón les dijo: Apartad los zarcillos de oro que están en las orejas de vuestras mujeres, de vuestros hijos y de vuestras hijas, y traédmelos. Entonces todo el pueblo apartó los zarcillos de oro que tenían en sus orejas, y los trajeron a Aarón; y él los tomó de las manos de ellos, y le dio forma con buril, e hizo de ello un becerro de fundición. Entonces dijeron: Israel, estos son tus dioses, que te sacaron de la tierra de Egipto. Y viendo esto Aarón, edificó un altar delante del becerro; y pregonó Aarón, y dijo: Mañana será fiesta para Jehová. Y al día siguiente madrugaron, y ofrecieron holocaustos, y presentaron ofrendas de paz; y se sentó el pueblo a comer y a beber, y se levantó a regocijarse.')
      ],
      texto: [
        'Moisés subió al monte y estuvo allí cuarenta días y cuarenta noches. Abajo, el pueblo se impacientó: «Levántate, haznos dioses que vayan delante de nosotros; porque a este Moisés… no sabemos qué le haya acontecido» (Éx 32:1). Aarón pidió los zarcillos de oro, los fundió e hizo un becerro. Pocas semanas después de oír la voz de Dios en el monte, Israel quebraba los dos primeros mandamientos.',
        { h: 'Un Dios a su medida' },
        'El becerro no representaba a otro dios lejano. El pueblo dijo: «Israel, estos son tus dioses, que te sacaron de la tierra de Egipto», y Aarón anunció: «Mañana será fiesta para Jehová» (Éx 32:4-5). Querían adorar a Jehová, pero en una forma que pudieran ver y controlar, como los egipcios adoraban al toro Apis. Es el pecado de rehacer a Dios a la medida de uno. Pablo cita la escena como advertencia para la iglesia: «Se sentó el pueblo a comer y a beber, y se levantó a jugar» (1 Co 10:7).',
        { h: 'Las tablas rotas' },
        'Dios informó a Moisés de lo que pasaba y le dijo que iba a consumir al pueblo y hacer de Moisés una nación grande. Moisés intercedió y apeló a la gloria del nombre de Dios y a sus promesas a Abraham, Isaac y Jacob, y «Jehová se arrepintió del mal que dijo que había de hacer a su pueblo» (Éx 32:14). Pero cuando Moisés bajó y vio el becerro y las danzas, arrojó las tablas y las quebró al pie del monte: el pacto ya estaba roto. Quemó el becerro, lo molió hasta hacerlo polvo, lo esparció en el agua y se lo dio a beber al pueblo.',
        { h: '¿Quién está por Jehová?' },
        'Aarón dio una excusa casi cómica: echó el oro en el fuego «y salió este becerro» (Éx 32:24). Moisés se puso a la puerta del campamento y dijo: «¿Quién está por Jehová? Júntese conmigo» (Éx 32:26). Los levitas respondieron, y ese día murieron como tres mil hombres. La tribu de Leví, que se puso del lado de Dios en la crisis, fue después apartada para el servicio del santuario (Dt 10:8).',
        { ejercicio: {
          pregunta: '¿Cuál fue el pecado principal del becerro de oro, según el relato?',
          opciones: [
            { t: 'Adorar a los dioses de Canaán.', ok: false, por_que: 'El pueblo todavía no había llegado a Canaán, y relacionó el becerro con el Dios que los sacó de Egipto.' },
            { t: 'Querer adorar a Jehová con una imagen hecha a su medida, en lugar de como Él había mandado.', ok: true, por_que: 'Aarón anunció una «fiesta para Jehová» (Éx 32:5). Quebraron el segundo mandamiento: no hacer imagen para adorarla (Éx 20:4-5).' },
            { t: 'Usar el oro que habían traído de Egipto.', ok: false, por_que: 'El oro de Egipto también se usó, bien, para el tabernáculo (Éx 35:22). El problema no fue el oro, sino el ídolo.' }
          ],
          explicacion: 'El becerro muestra que se puede usar el nombre de Dios y, al mismo tiempo, adorar algo que uno mismo fabricó.'
        } }
      ],
      pensar: 'El pueblo se impacientó porque Moisés «tardaba», y fabricó algo visible. ¿Qué haces cuando Dios parece tardar: esperas en Él o buscas algo que puedas ver y controlar?'
    },
    {
      id: 'gloria', n: 'Moisés intercede y ve la gloria', ref: 'Éxodo 32:30–34:35; Números 14:17-19; 2 Corintios 3:7-18; Juan 1:14-18', fecha: -1446,
      visual: [
        cita('Éxodo 34:5-8', 'Y Jehová descendió en la nube, y estuvo allí con él, proclamando el nombre de Jehová. Y pasando Jehová por delante de él, proclamó: ¡Jehová! ¡Jehová! fuerte, misericordioso y piadoso; tardo para la ira, y grande en misericordia y verdad; que guarda misericordia a millares, que perdona la iniquidad, la rebelión y el pecado, y que de ningún modo tendrá por inocente al malvado; que visita la iniquidad de los padres sobre los hijos y sobre los hijos de los hijos, hasta la tercera y cuarta generación. Entonces Moisés, apresurándose, bajó la cabeza hacia el suelo y adoró.'),
        img('img/ex-hendidura.webp', 'Un anciano hebreo de barba blanca se cubre en la hendidura de una peña de granito en la cima de una montaña, mientras una luz brillante y blanca pasa delante de la roca al amanecer; no se ve ninguna figura en la luz', '«Te pondré en una hendidura de la peña, y te cubriré con mi mano hasta que haya pasado» (Éx 33:22).')
      ],
      texto: [
        'Después del becerro, Moisés volvió a subir al monte para interceder. Su oración es una de las más audaces de la Biblia: «que perdones ahora su pecado, y si no, ráeme ahora de tu libro que has escrito» (Éx 32:32). Moisés estaba dispuesto a perderlo todo por su pueblo. Pablo diría algo parecido siglos después por los judíos (Ro 9:3).',
        { h: 'Si tu presencia no ha de ir' },
        'Dios anunció que daría la tierra a Israel, pero que Él no iría en medio de ellos, para no consumirlos en el camino (Éx 33:3). Para Moisés, eso era inaceptable. Mientras tanto, Moisés levantaba una tienda fuera del campamento, el tabernáculo de reunión, donde «hablaba Jehová a Moisés cara a cara, como habla cualquiera a su compañero» (Éx 33:11). Allí insistió: «Si tu presencia no ha de ir conmigo, no nos saques de aquí» (Éx 33:15). La tierra prometida sin la presencia de Dios no valía la pena. Y Dios respondió: «Mi presencia irá contigo, y te daré descanso» (Éx 33:14).',
        { h: 'Muéstrame tu gloria' },
        'Entonces Moisés pidió algo más: «Te ruego que me muestres tu gloria» (Éx 33:18). Dios le respondió que nadie puede ver su rostro y vivir, pero lo puso en una hendidura de la peña, lo cubrió con su mano y pasó delante de él. Lo que Moisés recibió no fue una imagen, sino una revelación del carácter de Dios, que muestra la pestaña de pasaje: «¡Jehová! ¡Jehová! fuerte, misericordioso y piadoso; tardo para la ira, y grande en misericordia y verdad» (Éx 34:6). Esta descripción se repite después en los Salmos, en los profetas y en las oraciones de Israel (Nm 14:18; Sal 103:8; Jl 2:13; Jon 4:2).',
        { h: 'El rostro que resplandecía' },
        'Dios renovó el pacto y escribió de nuevo las tablas. Moisés bajó del monte sin saber que la piel de su rostro resplandecía (Éx 34:29), y tuvo que cubrirse con un velo. Pablo explica que esa gloria se iba apagando, y que la gloria del nuevo pacto es mayor: «nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor» (2 Co 3:18). Juan dice que lo que Moisés no pudo ver, lo vimos en Cristo: «vimos su gloria, gloria como del unigénito del Padre, lleno de gracia y de verdad» (Jn 1:14).'
      ],
      pensar: 'Moisés prefirió quedarse en el desierto con la presencia de Dios antes que entrar en la tierra sin ella. ¿Qué lugar tiene en tus decisiones la pregunta: «¿irá Dios conmigo en esto?»?'
    },
    {
      id: 'tabernaculo', n: 'El tabernáculo levantado', ref: 'Éxodo 25:8-9; 31:1-11; 35:4–36:7; 40:17-38; Juan 1:14; Hebreos 8:5; 9:11', fecha: -1445,
      visual: [
        img('img/ex-tabernaculo-campamento.webp', 'Vista desde una colina de un gran campamento de tiendas en el desierto, ordenado en cuatro grupos alrededor de un patio rectangular de cortinas blancas con una tienda en el centro, sobre la que se posa una nube', 'El tabernáculo en medio del campamento, con la nube sobre él (Éx 40:34-38).'),
        cita('Éxodo 40:33-38', 'Finalmente erigió el atrio alrededor del tabernáculo y del altar, y puso la cortina a la entrada del atrio. Así acabó Moisés la obra. Entonces una nube cubrió el tabernáculo de reunión, y la gloria de Jehová llenó el tabernáculo. Y no podía Moisés entrar en el tabernáculo de reunión, porque la nube estaba sobre él, y la gloria de Jehová lo llenaba. Y cuando la nube se alzaba del tabernáculo, los hijos de Israel se movían en todas sus jornadas; pero si la nube no se alzaba, no se movían hasta el día en que ella se alzaba. Porque la nube de Jehová estaba de día sobre el tabernáculo, y el fuego estaba de noche sobre él, a vista de toda la casa de Israel, en todas sus jornadas.')
      ],
      texto: [
        'Mientras estaba en el monte, Moisés recibió el modelo del santuario: «Y harán un santuario para mí, y habitaré en medio de ellos» (Éx 25:8). El Dios que se había manifestado en la cumbre del Sinaí quería vivir en el centro del campamento, y viajar con su pueblo.',
        { h: 'Una ofrenda voluntaria' },
        'La construcción comenzó con una ofrenda. Moisés pidió oro, plata, bronce, telas, pieles, madera de acacia, aceite y piedras preciosas a todo «generoso de corazón» (Éx 35:5). Era el oro que Dios les había dado al salir de Egipto. El pueblo trajo tanto que los artesanos tuvieron que pedir a Moisés que los detuviera: «el pueblo trae mucho más de lo que se necesita» (Éx 36:5). La misma generosidad que antes se había usado para el becerro se usó ahora para la casa de Dios.',
        { h: 'Bezaleel, lleno del Espíritu' },
        'Dios eligió a Bezaleel, de la tribu de Judá, y dijo: «lo he llenado del Espíritu de Dios, en sabiduría y en inteligencia, en ciencia y en todo arte» (Éx 31:3), junto con Aholiab y otros artesanos sabios de corazón. Es la primera persona de la Biblia de quien se dice que fue llena del Espíritu de Dios, y la llenura fue para trabajar con oro, madera, piedra y telas. El Espíritu capacita para el servicio en todas sus formas.',
        { h: 'La gloria llena la casa' },
        '«En el día primero del primer mes, en el segundo año, el tabernáculo fue erigido» (Éx 40:17), casi un año después de salir de Egipto. Cuando Moisés terminó la obra, la nube cubrió el tabernáculo y la gloria de Jehová lo llenó, tanto que Moisés no podía entrar (Éx 40:34-35). El libro de Éxodo comienza con Israel esclavo en Egipto y termina con Dios habitando en medio de su pueblo libre.',
        'Juan escribe que el Verbo «fue hecho carne, y habitó entre nosotros» (Jn 1:14), con un verbo griego que significa literalmente que puso su tienda entre nosotros. El tabernáculo era una sombra de Cristo y del santuario celestial (He 8:5). Sus partes, sus muebles y las ceremonias de su servicio se pueden recorrer en el modelo 3D del sitio.',
        ir('Recorrer el tabernáculo en 3D', '../../tabernaculo/'),
        ir('Ver «Artesanos, ancianos y jueces» en El Espíritu Santo', '../../espiritu-santo/#at/2')
      ],
      pensar: 'Dios llenó del Espíritu a Bezaleel para trabajar con sus manos en la obra de Dios. ¿Qué capacidades tuyas podría usar el Espíritu Santo para servir a su iglesia?'
    },
    {
      id: 'sacerdocio', n: 'El sacerdocio y Levítico en el Sinaí', ref: 'Éxodo 28–29; Levítico 1:1; 8–10; 16; 27:34; Números 3:5-13', fecha: -1445,
      visual: [
        tabla({
          titulo: 'Lo que Dios dio en el Sinaí',
          cab: ['Texto', 'Contenido', 'Cuándo'],
          filas: [
            ['Éxodo 19–24', 'El pacto, los diez mandamientos y el libro del pacto', 'Tercer mes del primer año'],
            ['Éxodo 25–31', 'El modelo del tabernáculo y del sacerdocio', 'En el monte, cuarenta días'],
            ['Éxodo 35–40', 'La construcción del tabernáculo', 'Hasta el primer mes del segundo año'],
            ['Levítico 1–27', 'Sacrificios, consagración de los sacerdotes, pureza, Día de la Expiación, fiestas y santidad', 'Primer mes del segundo año'],
            ['Números 1–10', 'Censo, campamento, levitas, segunda Pascua y partida', 'Primer y segundo mes del segundo año']
          ],
          nota: 'Israel acampó junto al Sinaí unos once meses: desde el tercer mes del primer año (Éx 19:1) hasta el día veinte del segundo mes del segundo año (Nm 10:11).'
        }),
        img('img/ex-fuego-altar.webp', 'En el patio del tabernáculo, un fuego brillante desciende sobre el altar de bronce y consume el sacrificio; un anciano sumo sacerdote y otro anciano con cayado alzan las manos, y una multitud se postra rostro en tierra', '«Salió fuego de delante de Jehová, y consumió el holocausto… y viéndolo todo el pueblo, alabaron, y se postraron sobre sus rostros» (Lv 9:24).')
      ],
      texto: [
        'Casi un tercio del Pentateuco ocurre en un solo lugar: el desierto del Sinaí. Desde Éxodo 19 hasta Números 10, Israel no se movió. La tabla muestra lo que Dios dio en esos once meses. Levítico entero cae dentro de este tiempo: termina diciendo que esos son los mandamientos que Jehová dio a Moisés «en el monte de Sinaí» (Lv 27:34).',
        { h: 'Un pueblo santo con un santuario' },
        'El tabernáculo necesitaba quién sirviera en él. Dios eligió a Aarón y a sus hijos como sacerdotes, y a toda la tribu de Leví para ayudarlos (Nm 3:5-10). Los levitas tomaron el lugar de los primogénitos de Israel, que pertenecían a Dios desde la noche de la Pascua (Nm 3:12-13). Moisés consagró a los sacerdotes durante siete días, con baños, vestiduras, unción y sacrificios (Lv 8), y al octavo día salió fuego de delante de Jehová y consumió el holocausto sobre el altar, y todo el pueblo se postró (Lv 9:24).',
        { h: 'Fuego extraño' },
        'Ese mismo día, dos hijos de Aarón, Nadab y Abiú, ofrecieron incienso con «fuego extraño, que él nunca les mandó. Y salió fuego de delante de Jehová y los quemó» (Lv 10:1-2). El mismo fuego que había aceptado el sacrificio juzgó la desobediencia. Moisés explicó: «En los que a mí se acercan me santificaré» (Lv 10:3). La presencia de Dios en medio del pueblo era una bendición inmensa, y también una responsabilidad.',
        { h: 'Levítico y el desierto' },
        'Levítico se suele leer como un libro de reglas sin historia, pero fue la enseñanza de Dios a un pueblo de exesclavos acampado en el desierto: cómo acercarse a un Dios santo, cómo ser limpios, cómo celebrar sus fiestas y cómo vivir como su pueblo. Su centro es el Día de la Expiación (Lv 16), cuando el sumo sacerdote entraba una vez al año al Lugar Santísimo con sangre. Hebreos explica que Cristo entró «una vez para siempre» con su propia sangre (He 9:12). Las funciones de los sacerdotes y los levitas se estudian en El sacerdocio en Israel; los sacrificios y las fiestas tendrán sus propios recursos.',
        ir('Ver «Aarón y sus hijos» en El sacerdocio en Israel', '../../sacerdocio/#historia/1')
      ],
      pensar: 'El fuego de Dios aceptó el sacrificio y, el mismo día, juzgó la ligereza de Nadab y Abiú. ¿Con qué actitud te acercas a Dios en la adoración: con reverencia o como algo rutinario?'
    },
    {
      id: 'campamento', n: 'El censo y el orden del campamento', ref: 'Números 1–4; 26:51', fecha: -1445,
      visual: [
        tabla({
          titulo: 'El campamento de Israel (Números 2)',
          cab: ['Lado', 'Tribu principal', 'Tribus', 'Hombres de guerra'],
          filas: [
            ['Oriente', 'Judá', 'Judá, Isacar y Zabulón', '186.400'],
            ['Sur', 'Rubén', 'Rubén, Simeón y Gad', '151.450'],
            ['Occidente', 'Efraín', 'Efraín, Manasés y Benjamín', '108.100'],
            ['Norte', 'Dan', 'Dan, Aser y Neftalí', '157.600'],
            ['Centro', 'Leví', 'Moisés, Aarón y los sacerdotes al oriente; los levitas por familias en los otros lados', '22.000 varones (Nm 3:39)'],
            ['Total', '', 'Doce tribus', '603.550 (Nm 2:32)']
          ],
          nota: 'Al partir, Judá marchaba primero, y el tabernáculo, desarmado y llevado por los levitas, iba en el centro de la columna (Nm 2:9, 17).'
        }),
        esq('img/esquema-campamento.svg', 'Esquema del campamento de Israel: el tabernáculo en el centro, rodeado por las familias de los levitas y Moisés y Aarón; alrededor, las doce tribus en cuatro grupos de tres: Judá, Isacar y Zabulón al oriente; Rubén, Simeón y Gad al sur; Efraín, Manasés y Benjamín al occidente; Dan, Aser y Neftalí al norte', 'El campamento según Números 2 y 3.')
      ],
      texto: [
        'Antes de partir del Sinaí, Dios ordenó contar a todos los hombres de veinte años arriba, aptos para la guerra, tribu por tribu (Nm 1:2-3). El resultado fue 603.550, sin contar a los levitas, que se censaron aparte porque no iban a la guerra sino al servicio del santuario. Por este censo, y por el segundo en Moab, la tradición llamó al libro «Números». En hebreo se llama Bemidbar, «En el desierto».',
        { h: 'Dios en el centro' },
        'Números 2 describe cómo se ordenaba el campamento. El tabernáculo estaba en el centro. Lo rodeaban las familias de los levitas, y al oriente, frente a la entrada, Moisés, Aarón y los sacerdotes. Alrededor, a cierta distancia, acampaban las doce tribus en cuatro grupos de tres, cada uno con su estandarte, como muestran la tabla y el esquema. Judá, la tribu más numerosa y de la que vendría el rey, estaba al oriente, en el lugar de honor.',
        'El orden no era solo práctico. Dios estaba en el centro de la vida del pueblo, y todos podían ver la nube sobre el tabernáculo desde cualquier tienda. Ninguna tribu estaba más cerca que otra del Dios que habitaba en medio de ellas.',
        { h: 'Un pueblo en marcha' },
        'Cuando la nube se alzaba, las trompetas daban la señal y el campamento se ponía en movimiento en un orden fijo: primero Judá con sus tribus, luego los gersonitas y meraritas con las cortinas y las tablas del tabernáculo, después Rubén, luego los coatitas con los objetos santos, después Efraín y por último Dan, que cerraba la marcha (Nm 10:14-28). Cada familia de levitas sabía qué llevar (Nm 4). Dos millones de personas, con su santuario desarmado, se movían como un solo pueblo.',
        { h: 'Dos censos, dos generaciones' },
        'Treinta y ocho años después, en las llanuras de Moab, Dios mandó un segundo censo: 601.730 hombres (Nm 26:51). Casi la misma cifra, pero con una diferencia que el texto subraya: de los contados en el Sinaí no quedó ninguno, excepto Caleb y Josué (Nm 26:64-65). La ruta V explica por qué. El campamento se podrá recorrer en un modelo 3D del sitio, en preparación.'
      ],
      pensar: 'En el campamento, la presencia de Dios estaba en el centro y se veía desde cada tienda. ¿Qué ocupa el centro de tu vida, y qué cambiaría si Dios estuviera allí?'
    },
    {
      id: 'partida', n: 'La partida del Sinaí', ref: 'Números 9:1-14; 10:1-36; Salmos 68:1', fecha: -1445,
      visual: [
        mapa({ view: V.sinai, capas: [], lugares: ['sinai', 'r-hazerot', 'cades-barnea'], trazos: ['ex-sinai-cades'] }, 'Del Sinaí a Parán'),
        cita('Números 10:29-36', 'Entonces dijo Moisés a Hobab, hijo de Ragüel madianita, su suegro: Nosotros partimos para el lugar del cual Jehová ha dicho: Yo os lo daré. Ven con nosotros, y te haremos bien; porque Jehová ha prometido el bien a Israel. Y él le respondió: Yo no iré, sino que me marcharé a mi tierra y a mi parentela. Y él le dijo: Te ruego que no nos dejes; porque tú conoces los lugares donde hemos de acampar en el desierto, y nos serás en lugar de ojos. Y si vienes con nosotros, cuando tengamos el bien que Jehová nos ha de hacer, nosotros te haremos bien. Así partieron del monte de Jehová camino de tres días; y el arca del pacto de Jehová fue delante de ellos camino de tres días, buscándoles lugar de descanso. Y la nube de Jehová iba sobre ellos de día, desde que salieron del campamento. Cuando el arca se movía, Moisés decía: Levántate, oh Jehová, y sean dispersados tus enemigos, y huyan de tu presencia los que te aborrecen. Y cuando ella se detenía, decía: Vuelve, oh Jehová, a los millares de millares de Israel.')
      ],
      texto: [
        'Después de casi un año en el Sinaí, Israel se preparó para seguir. Antes de salir celebraron la Pascua, la primera desde Egipto (Nm 9:1-5). Algunos hombres que estaban impuros por haber tocado un muerto no pudieron celebrarla, y preguntaron qué hacer. Dios respondió con una provisión de gracia: podrían celebrarla un mes después (Nm 9:6-12). Dios no quería que nadie quedara fuera de la fiesta de la redención.',
        { h: 'Las trompetas de plata' },
        'Dios mandó hacer dos trompetas de plata labrada. Servían para reunir a la congregación, para anunciar la partida de cada grupo, para la guerra y para las fiestas: «seréis recordados por Jehová vuestro Dios» (Nm 10:9). El sonido de la trompeta ordenaba la marcha de dos millones de personas y recordaba que el pueblo pertenecía a Dios.',
        { h: 'La nube se alzó' },
        '«En el año segundo, en el mes segundo, a los veinte días del mes, la nube se alzó del tabernáculo del testimonio» (Nm 10:11). El pueblo partió en el orden que Dios había establecido, y la nube se detuvo en el desierto de Parán, la gran meseta al norte del Sinaí. El mapa muestra el camino hacia Cades-barnea, en la frontera de Canaán.',
        { h: 'Ven con nosotros' },
        'Moisés invitó a su cuñado Hobab, un madianita que conocía el desierto: «Ven con nosotros, y te haremos bien; porque Jehová ha prometido el bien a Israel» (Nm 10:29). Le pidió que fuera sus ojos en el desierto. No había contradicción entre seguir la nube y aprovechar la experiencia de un guía. Los descendientes de Hobab, los ceneos, vivieron después entre los israelitas (Jue 1:16).',
        { h: 'Levántate, oh Jehová' },
        'Cada vez que el arca partía, Moisés oraba: «Levántate, oh Jehová, y sean dispersados tus enemigos, y huyan de tu presencia los que te aborrecen». Y cuando se detenía: «Vuelve, oh Jehová, a los millares de millares de Israel» (Nm 10:35-36). David convirtió esa oración en el comienzo del Salmo 68. El viaje desde el Sinaí empezaba con la mejor actitud. Pocos días después, todo iba a cambiar.'
      ],
      pensar: 'Moisés comenzaba y terminaba cada etapa del viaje con una oración. ¿Cómo podrías empezar y terminar tus días con una oración parecida?'
    }
  ];

  Object.assign(window.__EX, { mar, sinai });
})();
(() => {
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = window.__EX_H;

  /* ---------------- V. Cuarenta años en el desierto ---------------- */
  const desierto = [
    {
      id: 'codornices', n: 'Tabera y las codornices', ref: 'Números 11:1-15, 18-23, 31-35; Salmos 78:17-31; 106:13-15; 1 Corintios 10:6', fecha: -1445,
      visual: [
        cita('Números 11:4-6', 'Y la gente extranjera que se mezcló con ellos tuvo un vivo deseo, y los hijos de Israel también volvieron a llorar y dijeron: ¡Quién nos diera a comer carne! Nos acordamos del pescado que comíamos en Egipto de balde, de los pepinos, los melones, los puerros, las cebollas y los ajos; y ahora nuestra alma se seca; pues nada sino este maná ven nuestros ojos.'),
        img('img/ex-codornices.webp', 'Al atardecer, una enorme bandada de codornices cae sobre un campamento de tiendas en el desierto; hombres y mujeres corren a recogerlas y las amontonan', '«Vino un viento de Jehová, y trajo codornices del mar» (Nm 11:31).')
      ],
      texto: [
        'Apenas tres días después de salir del Sinaí, el pueblo volvió a quejarse. Números 11 cuenta dos episodios seguidos que muestran un cambio peligroso: en el camino al Sinaí, Dios había respondido a las quejas con paciencia; ahora, después del pacto, las respondió con juicio.',
        { h: 'Tabera' },
        '«Aconteció que el pueblo se quejó a oídos de Jehová; y lo oyó Jehová, y ardió su ira, y se encendió en ellos fuego de Jehová, y consumió uno de los extremos del campamento» (Nm 11:1). El pueblo clamó a Moisés, Moisés oró, y el fuego se extinguió. Llamaron al lugar Tabera, «incendio».',
        { h: 'Las ollas de Egipto' },
        'Luego la queja vino de «la gente extranjera que se mezcló con ellos», y se contagió a los israelitas: «¡Quién nos diera a comer carne! Nos acordamos del pescado que comíamos en Egipto de balde, de los pepinos, los melones, los puerros, las cebollas y los ajos» (Nm 11:4-5). La memoria de Egipto había olvidado los látigos y recordaba solo el menú. El maná, el pan del cielo, ya les resultaba aburrido.',
        { h: 'Moisés al límite' },
        'Moisés también llegó al límite: «No puedo yo solo soportar a todo este pueblo, que me es pesado en demasía» (Nm 11:14), y le pidió a Dios que le quitara la vida. Dios respondió de dos maneras: daría al pueblo carne «hasta que os salga por las narices» (Nm 11:20), y daría a Moisés ayuda para llevar la carga, como cuenta la estación siguiente. Ante la duda de Moisés, Dios preguntó: «¿Acaso se ha acortado la mano de Jehová?» (Nm 11:23).',
        { h: 'Kibrot-hataava' },
        'Un viento trajo codornices del mar, que cubrieron el campamento un día de camino a la redonda. Las codornices cruzan el Sinaí cada primavera y otoño en su migración, y llegan agotadas a la costa: Dios usó un fenómeno conocido, pero en una cantidad y un momento que solo Él podía dar. El pueblo recogió durante dos días y una noche, y quien menos recogió juntó diez montones. Pero «aún estaba la carne entre los dientes de ellos… cuando la ira de Jehová se encendió en el pueblo» (Nm 11:33), y hubo una plaga. El lugar se llamó Kibrot-hataava, «tumbas de la codicia». El salmista resume: «Él les dio lo que pidieron; mas envió mortandad sobre ellos» (Sal 106:15). Pablo pone este episodio como advertencia: «para que no codiciemos cosas malas, como ellos codiciaron» (1 Co 10:6).'
      ],
      pensar: 'El pueblo recordaba los pepinos de Egipto y olvidaba los látigos. ¿Hay algo de tu vida antes de Cristo que recuerdas con nostalgia, olvidando lo que realmente te costaba?'
    },
    {
      id: 'ancianos', n: 'Los setenta ancianos: «Ojalá todo el pueblo fuese profeta»', ref: 'Números 11:16-17, 24-30; Joel 2:28-29; Hechos 2:16-18', fecha: -1445,
      visual: [
        cita('Números 11:24-29', 'Y salió Moisés y dijo al pueblo las palabras de Jehová; y reunió a los setenta varones de los ancianos del pueblo, y los hizo estar alrededor del tabernáculo. Entonces Jehová descendió en la nube, y le habló; y tomó del espíritu que estaba en él, y lo puso en los setenta varones ancianos; y cuando posó sobre ellos el espíritu, profetizaron, y no cesaron. Y habían quedado en el campamento dos varones, llamados el uno Eldad y el otro Medad, sobre los cuales también reposó el espíritu; estaban éstos entre los inscritos, pero no habían venido al tabernáculo; y profetizaron en el campamento. Y corrió un joven y dio aviso a Moisés, y dijo: Eldad y Medad profetizan en el campamento. Entonces respondió Josué hijo de Nun, ayudante de Moisés, uno de sus jóvenes, y dijo: Señor mío Moisés, impídelos. Y Moisés le respondió: ¿Tienes tú celos por mí? Ojalá todo el pueblo de Jehová fuese profeta, y que Jehová pusiera su espíritu sobre ellos.'),
        img('img/ex-ancianos.webp', 'Setenta ancianos hebreos de barba gris, de pie en semicírculo alrededor de una tienda de cortinas en el desierto, con las manos alzadas y el rostro transformado por el gozo, mientras una nube luminosa desciende sobre la tienda', '«Cuando posó sobre ellos el espíritu, profetizaron» (Nm 11:25).')
      ],
      texto: [
        'Cuando Moisés dijo que no podía llevar solo la carga del pueblo, Dios no le quitó la responsabilidad, pero tampoco lo dejó solo: «Reúneme setenta varones de los ancianos de Israel… y tomaré del espíritu que está en ti, y pondré en ellos; y llevarán contigo la carga del pueblo, y no la llevarás tú solo» (Nm 11:16-17).',
        { h: 'El Espíritu sobre los setenta' },
        'Moisés reunió a los setenta alrededor del tabernáculo, «entonces Jehová descendió en la nube… y tomó del espíritu que estaba en él, y lo puso en los setenta varones ancianos; y cuando posó sobre ellos el espíritu, profetizaron, y no cesaron» (Nm 11:25). La señal de que el Espíritu había venido sobre ellos fue que profetizaron: hablaron bajo la inspiración del Espíritu, de una manera visible y audible para todos. No recibieron un cargo administrativo, sino una capacitación espiritual para servir.',
        { h: 'Eldad y Medad' },
        'Dos de los elegidos, Eldad y Medad, no habían ido al tabernáculo y se quedaron en el campamento, pero el Espíritu vino también sobre ellos, y profetizaron allí. Un joven corrió a avisarle a Moisés, y Josué, celoso por la autoridad de su señor, le pidió: «Señor mío Moisés, impídelos» (Nm 11:28).',
        { h: 'La respuesta de Moisés' },
        'La respuesta de Moisés es una de las grandes frases del Antiguo Testamento: «¿Tienes tú celos por mí? Ojalá todo el pueblo de Jehová fuese profeta, y que Jehová pusiera su espíritu sobre ellos» (Nm 11:29). Moisés no quería el monopolio del Espíritu. Deseaba lo que en su tiempo era una excepción: que todo el pueblo de Dios recibiera el Espíritu y hablara de parte de Él.',
        { h: 'El deseo de Moisés, cumplido' },
        'Siglos después, el profeta Joel anunció que ese deseo se cumpliría: «derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas» (Jl 2:28). El día de Pentecostés, Pedro explicó lo que estaba pasando con esas mismas palabras: «Derramaré de mi Espíritu sobre toda carne» (Hch 2:17). Lo que en el desierto fue para setenta ancianos, en la iglesia es para todos los creyentes: hombres y mujeres, jóvenes y ancianos. La promesa del bautismo en el Espíritu Santo es el cumplimiento del deseo de Moisés.',
        ir('Ver «Artesanos, ancianos y jueces» en El Espíritu Santo', '../../espiritu-santo/#at/2'),
        ir('Ver «La promesa del derramamiento» en El Espíritu Santo', '../../espiritu-santo/#at/5')
      ],
      pensar: 'Moisés deseó que todo el pueblo de Dios recibiera el Espíritu. ¿Deseas tú esa plenitud del Espíritu para ti y para los creyentes de tu iglesia, o te conformas con que la tengan unos pocos?'
    },
    {
      id: 'maria-aaron', n: 'María y Aarón contra Moisés', ref: 'Números 12; Deuteronomio 24:9; Hebreos 3:2-6', fecha: -1445,
      visual: [
        mapa({ view: V.sinai, capas: [], lugares: ['sinai', 'r-hazerot', 'cades-barnea'], trazos: ['ex-sinai-cades'] }, 'Hazerot'),
        cita('Números 12:5-9', 'Entonces Jehová descendió en la columna de la nube, y se puso a la puerta del tabernáculo, y llamó a Aarón y a María; y salieron ambos. Y él les dijo: Oíd ahora mis palabras. Cuando haya entre vosotros profeta de Jehová, le apareceré en visión, en sueños hablaré con él. No así a mi siervo Moisés, que es fiel en toda mi casa. Cara a cara hablaré con él, y claramente, y no por figuras; y verá la apariencia de Jehová. ¿Por qué, pues, no tuvisteis temor de hablar contra mi siervo Moisés? Entonces la ira de Jehová se encendió contra ellos; y se fue.')
      ],
      texto: [
        'En Hazerot, el siguiente campamento, la crisis vino desde dentro de la familia de Moisés. «María y Aarón hablaron contra Moisés a causa de la mujer cusita que había tomado» (Nm 12:1). La mujer cusita era una esposa de origen africano; puede tratarse de Séfora, a quien llaman así por su piel oscura, o de una segunda esposa después de su muerte. El texto no lo aclara.',
        { h: 'El verdadero motivo' },
        'Pero la esposa era solo la excusa. El verdadero motivo aparece en la frase siguiente: «¿Solamente por Moisés ha hablado Jehová? ¿No ha hablado también por nosotros?» (Nm 12:2). María era profetisa y Aarón era sumo sacerdote: los dos tenían un lugar importante. Lo que les molestaba era que Moisés tuviera uno mayor. El texto agrega una frase breve y terrible: «Y lo oyó Jehová».',
        { h: 'El hombre más manso' },
        'Antes de contar cómo respondió Dios, el texto dice algo de Moisés: «Y aquel varón Moisés era muy manso, más que todos los hombres que había sobre la tierra» (Nm 12:3). La mansedumbre no es debilidad: es fuerza bajo control, la capacidad de no defenderse a sí mismo y dejar la defensa en manos de Dios. Moisés no respondió a sus hermanos; Dios lo hizo.',
        { h: 'Cara a cara' },
        'Dios llamó a los tres al tabernáculo y explicó la diferencia. A los profetas les hablaba en visiones y sueños, «no así a mi siervo Moisés, que es fiel en toda mi casa. Cara a cara hablaré con él, y claramente, y no por figuras» (Nm 12:7-8). Hebreos usa esta frase para comparar a Moisés con Cristo: Moisés fue fiel como siervo en la casa de Dios, y Cristo como Hijo sobre su casa (He 3:5-6).',
        { h: 'La intercesión' },
        'Cuando la nube se apartó, María estaba leprosa, blanca como la nieve. Aarón suplicó a Moisés, y Moisés, el ofendido, oró por su hermana: «Te ruego, oh Dios, que la sanes ahora» (Nm 12:13). Dios la sanó, pero María tuvo que quedar siete días fuera del campamento, y el pueblo no partió hasta que ella volvió. Deuteronomio recuerda el episodio como advertencia (Dt 24:9). El que fue atacado oró por quien lo atacó.'
      ],
      pensar: 'Moisés no se defendió de las críticas de sus hermanos, y después oró por la sanidad de María. ¿Cómo respondes cuando te critican injustamente, sobre todo las personas cercanas?'
    },
    {
      id: 'espias', n: 'Los doce espías en Cades-barnea', ref: 'Números 13; 32:8-13; Deuteronomio 1:19-33; Josué 14:6-14', fecha: -1445,
      visual: [
        pasos([
          { t: 'De Hazerot a Cades-barnea, en el desierto de Parán (Nm 12:16; 13:26).', fecha: -1445, estado: { view: V.cades, capas: [], lugares: ['sinai', 'r-hazerot', 'cades-barnea'], trazos: ['ex-sinai-cades'] } },
          { t: 'Los espías suben por el Neguev hasta Hebrón (Nm 13:22).', fecha: -1445, estado: { view: V.espias, capas: [], lugares: ['cades-barnea', 'beerseba', 'hebron'], trazos: [] } },
          { t: 'Recorren la tierra hasta Rehob, a la entrada de Hamat, y vuelven por el valle de Escol: cuarenta días (Nm 13:21-25).', fecha: -1445, estado: { view: V.espias, capas: [], lugares: ['cades-barnea', 'hebron', 'r-escol', 'siquem', 'r-rehob'], trazos: ['ex-espias'] } }
        ], 'Los espías'),
        img('img/ex-espias-uvas.webp', 'Dos hombres hebreos caminan por un sendero de colinas cargando sobre los hombros una vara de la que cuelga un enorme racimo de uvas; detrás, otros hombres llevan granadas e higos', '«Cortaron un sarmiento con un racimo de uvas, el cual trajeron dos en un palo» (Nm 13:23).')
      ],
      texto: [
        'Desde Cades-barnea, un oasis en la frontera sur de Canaán, Moisés envió doce hombres, uno por tribu, a reconocer la tierra. Entre ellos estaban Caleb, de Judá, y Oseas hijo de Nun, de Efraín, a quien Moisés le cambió el nombre por Josué, que significa Jehová salva (Nm 13:16). Debían ver cómo era la tierra, si sus ciudades eran fuertes y si su gente era mucha o poca.',
        { h: 'Cuarenta días por la tierra' },
        'Los espías subieron por el Neguev hasta Hebrón, donde estaban sepultados Abraham, Isaac y Jacob, y recorrieron toda la tierra hasta Rehob, en el norte. El mapa por pasos muestra el recorrido. A la vuelta pasaron por el valle de Escol, cerca de Hebrón, y cortaron un racimo de uvas tan grande que lo llevaron entre dos en un palo, junto con granadas e higos. Al cabo de cuarenta días volvieron a Cades.',
        { h: 'Dos informes' },
        'El informe empezó bien: «la que ciertamente fluye leche y miel; y este es el fruto de ella». Pero siguió con un «mas»: «el pueblo que habita aquella tierra es fuerte, y las ciudades muy grandes y fortificadas; y también vimos allí a los hijos de Anac» (Nm 13:27-28). Caleb hizo callar al pueblo: «Subamos luego, y tomemos posesión de ella; porque más podremos nosotros que ellos» (Nm 13:30). Pero diez de los espías insistieron, y exageraron: «éramos nosotros, a nuestro parecer, como langostas; y así les parecíamos a ellos» (Nm 13:33).',
        { h: 'Los mismos hechos, dos miradas' },
        'Los doce vieron lo mismo: una tierra buena, ciudades fortificadas y hombres de gran estatura. La diferencia no estuvo en los hechos, sino en con qué los compararon. Diez compararon a los gigantes consigo mismos; Caleb y Josué los compararon con Dios. Por eso, de Caleb dijo Dios que «hubo en él otro espíritu, y decidió ir en pos de mí» (Nm 14:24). Cuarenta y cinco años después, Caleb, con ochenta y cinco años, pidió como herencia precisamente Hebrón, la ciudad de los gigantes (Jos 14:10-14).'
      ],
      pensar: 'Diez espías se vieron como langostas; Caleb vio a un Dios más grande que los gigantes. Frente al desafío que tienes hoy, ¿con qué lo estás comparando: con tus fuerzas o con Dios?'
    },
    {
      id: 'rebelion', n: 'La rebelión y los cuarenta años', ref: 'Números 14; Deuteronomio 1:34-46; Salmos 95:8-11; Hebreos 3:7-19', fecha: -1445,
      visual: [
        cita('Números 14:26-35', 'Y Jehová habló a Moisés y a Aarón, diciendo: ¿Hasta cuándo oiré esta depravada multitud que murmura contra mí, las querellas de los hijos de Israel, que de mí se quejan? Diles: Vivo yo, dice Jehová, que según habéis hablado a mis oídos, así haré yo con vosotros. En este desierto caerán vuestros cuerpos; todo el número de los que fueron contados de entre vosotros, de veinte años arriba, los cuales han murmurado contra mí. Vosotros a la verdad no entraréis en la tierra, por la cual alcé mi mano y juré que os haría habitar en ella; exceptuando a Caleb hijo de Jefone, y a Josué hijo de Nun. Pero a vuestros niños, de los cuales dijisteis que serían por presa, yo los introduciré, y ellos conocerán la tierra que vosotros despreciasteis. En cuanto a vosotros, vuestros cuerpos caerán en este desierto. Y vuestros hijos andarán pastoreando en el desierto cuarenta años, y ellos llevarán vuestras rebeldías, hasta que vuestros cuerpos sean consumidos en el desierto. Conforme al número de los días, de los cuarenta días en que reconocisteis la tierra, llevaréis vuestras iniquidades cuarenta años, un año por cada día; y conoceréis mi castigo. Yo Jehová he hablado; así haré a toda esta multitud perversa que se ha juntado contra mí; en este desierto serán consumidos, y ahí morirán.'),
        mapa({ view: V.cades, capas: [], lugares: ['cades-barnea', 'r-horma', 'beerseba'], trazos: ['ex-horma'] }, 'La derrota en Horma')
      ],
      texto: [
        'Esa noche, todo el pueblo lloró. Y a la mañana: «¡Ojalá muriéramos en la tierra de Egipto; o en este desierto ojalá muriéramos!… Designemos un capitán, y volvámonos a Egipto» (Nm 14:2-4). Josué y Caleb rasgaron sus vestidos y suplicaron: «ni temáis al pueblo de esta tierra… con nosotros está Jehová; no los temáis» (Nm 14:9). La respuesta fue querer apedrearlos.',
        { h: 'Hasta cuándo' },
        'Entonces la gloria de Jehová apareció en el tabernáculo. Dios dijo: «¿Hasta cuándo no me creerán, con todas las señales que he hecho en medio de ellos?» (Nm 14:11). El problema no era la falta de pruebas: habían visto las plagas, el mar, el maná, el agua de la roca y el Sinaí. Era la incredulidad. Hebreos lo resume: «no pudieron entrar a causa de incredulidad» (He 3:19).',
        { h: 'Moisés intercede otra vez' },
        'Como en el becerro, Dios propuso destruir al pueblo y hacer de Moisés una nación más grande. Y como entonces, Moisés intercedió, recordando a Dios su propia descripción en el Sinaí: «Jehová, tardo para la ira y grande en misericordia, que perdona la iniquidad» (Nm 14:18). «Perdona ahora la iniquidad de este pueblo según la grandeza de tu misericordia» (Nm 14:19). Dios respondió: «Yo lo he perdonado conforme a tu dicho» (Nm 14:20).',
        { h: 'Perdón y consecuencias' },
        'Pero el perdón no anuló las consecuencias. Esa generación, la de los mayores de veinte años, no entraría en la tierra: «En este desierto caerán vuestros cuerpos» (Nm 14:29). Vagarían cuarenta años, «un año por cada día» de los cuarenta que tardó la exploración (Nm 14:34), hasta que muriera la generación incrédula. Sus hijos, los que ellos dijeron que serían presa, serían los que entrarían. Solo Caleb y Josué, de los mayores, verían la tierra. Los otros diez espías murieron de plaga.',
        { h: 'Demasiado tarde' },
        'Al día siguiente, el pueblo cambió de opinión y quiso subir a conquistar la tierra. Moisés les advirtió que Dios no estaba con ellos y que el arca no saldría del campamento. Subieron igual, y los amalecitas y los cananeos los derrotaron y los persiguieron hasta Horma (Nm 14:40-45). La obediencia fuera de tiempo también es desobediencia. El mapa muestra el lugar de la derrota.',
        { ejercicio: {
          pregunta: '¿Por qué esa generación no entró en la tierra prometida, según Números 14 y Hebreos 3?',
          opciones: [
            { t: 'Porque Dios no quiso perdonarlos.', ok: false, por_que: 'Dios dijo expresamente «Yo lo he perdonado conforme a tu dicho» (Nm 14:20). El perdón no quitó las consecuencias.' },
            { t: 'Porque no creyeron a Dios después de todas las señales que habían visto.', ok: true, por_que: 'Dios preguntó hasta cuándo no le creerían (Nm 14:11), y Hebreos concluye que «no pudieron entrar a causa de incredulidad» (He 3:19).' },
            { t: 'Porque los gigantes eran demasiado fuertes para ellos.', ok: false, por_que: 'Cuarenta años después, sus hijos derrotaron a esos mismos pueblos. El problema no estaba en el enemigo, sino en la falta de fe.' }
          ],
          explicacion: 'Hebreos usa esta historia para advertir a los creyentes: oír la voz de Dios y endurecer el corazón impide entrar en el reposo que Dios promete (He 3:7–4:11).'
        } }
      ],
      pensar: 'Israel quiso obedecer un día después de que Dios había hablado, y fracasó. ¿Hay algo que Dios te pidió y que estás postergando, como si siempre fuera a haber tiempo?'
    },
    {
      id: 'core', n: 'La rebelión de Coré', ref: 'Números 16; 26:9-11; Salmos 106:16-18; Judas 11', fecha: [-1444, -1408],
      visual: [
        cita('Números 16:1-11', 'Coré hijo de Izhar, hijo de Coat, hijo de Leví, y Datán y Abiram hijos de Eliab, y On hijo de Pelet, de los hijos de Rubén, tomaron gente, y se levantaron contra Moisés con doscientos cincuenta varones de los hijos de Israel, príncipes de la congregación, de los del consejo, varones de renombre. Y se juntaron contra Moisés y Aarón y les dijeron: ¡Basta ya de vosotros! Porque toda la congregación, todos ellos son santos, y en medio de ellos está Jehová; ¿por qué, pues, os levantáis vosotros sobre la congregación de Jehová? Cuando oyó esto Moisés, se postró sobre su rostro; y habló a Coré y a todo su séquito, diciendo: Mañana mostrará Jehová quién es suyo, y quién es santo, y hará que se acerque a él; al que él escogiere, él lo acercará a sí. Haced esto: tomaos incensarios, Coré y todo su séquito, y poned fuego en ellos, y poned en ellos incienso delante de Jehová mañana; y el varón a quien Jehová escogiere, aquel será el santo; esto os baste, hijos de Leví. Dijo más Moisés a Coré: Oíd ahora, hijos de Leví: ¿Os es poco que el Dios de Israel os haya apartado de la congregación de Israel, acercándoos a él para que ministréis en el servicio del tabernáculo de Jehová, y estéis delante de la congregación para ministrarles, y que te hizo acercar a ti, y a todos tus hermanos los hijos de Leví contigo? ¿Procuráis también el sacerdocio? Por tanto, tú y todo tu séquito sois los que os juntáis contra Jehová; pues Aarón, ¿qué es, para que contra él murmuréis?'),
        img('img/ex-core.webp', 'En el desierto, frente a un grupo de tiendas, la tierra se abre en una grieta enorme y profunda; un grupo de hombres con incensarios retrocede aterrado y la multitud huye; al fondo, un anciano con un cayado alza la mano', '«Abrió la tierra su boca, y los tragó» (Nm 16:32).')
      ],
      texto: [
        'Durante los años del desierto hubo otra rebelión, esta vez contra el liderazgo de Moisés y el sacerdocio de Aarón. La encabezó Coré, un levita de la familia de Coat, primo de Moisés y de Aarón, junto con Datán y Abiram, de la tribu de Rubén, y doscientos cincuenta príncipes de la congregación.',
        { h: 'Todos son santos' },
        'Su argumento sonaba espiritual: «¡Basta ya de vosotros! Porque toda la congregación, todos ellos son santos, y en medio de ellos está Jehová; ¿por qué, pues, os levantáis vosotros sobre la congregación de Jehová?» (Nm 16:3). Era una verdad usada como arma. Israel era un pueblo santo, pero eso no significaba que cualquiera pudiera tomar el lugar que Dios había dado a otro. Moisés lo vio claro: «¿Os es poco que el Dios de Israel os haya apartado… para que ministréis en el servicio del tabernáculo de Jehová…? ¿Procuráis también el sacerdocio?» (Nm 16:9-10). Coré ya tenía un servicio santo; quería el de Aarón.',
        { h: 'El juicio' },
        'Datán y Abiram se negaron a venir y acusaron a Moisés de haberlos sacado de «una tierra que destila leche y miel», refiriéndose a Egipto (Nm 16:13). Moisés pidió una señal: si esos hombres morían de muerte natural, Jehová no lo había enviado. «Abrió la tierra su boca, y los tragó a ellos, a sus casas, a todos los hombres de Coré» (Nm 16:32), y salió fuego que consumió a los doscientos cincuenta que ofrecían incienso. Los hijos de Coré no murieron (Nm 26:11): sus descendientes fueron cantores del templo y escribieron varios salmos (Sal 42; 84).',
        { h: 'Entre los muertos y los vivos' },
        'Al día siguiente, el pueblo murmuró contra Moisés y Aarón, acusándolos de haber matado al pueblo de Jehová, y comenzó una plaga. Moisés mandó a Aarón tomar su incensario y correr en medio de la congregación para hacer expiación, «y se puso entre los muertos y los vivos; y cesó la mortandad» (Nm 16:48). El sumo sacerdote que Coré rechazaba fue el que salvó al pueblo. Murieron catorce mil setecientos.',
        'Judas, en el Nuevo Testamento, nombra a Coré entre los ejemplos de los que se rebelan contra la autoridad que Dios ha puesto: «perecieron en la contradicción de Coré» (Jud 11). La envidia del ministerio de otro sigue siendo un peligro en la iglesia.'
      ],
      pensar: 'Coré tenía un servicio santo, pero codiciaba el de Aarón. ¿Valoras el lugar y los dones que Dios te dio, o miras con envidia el ministerio de otros?'
    },
    {
      id: 'vara', n: 'La vara de Aarón', ref: 'Números 17–18; Hebreos 9:4', fecha: [-1444, -1408],
      visual: [
        img('img/ex-vara-almendro.webp', 'Dentro de una tienda de cortinas, iluminada por la luz de la mañana, una vara de madera apoyada junto a otras once ha florecido con hojas verdes, flores blancas de almendro y almendras maduras', '«La vara de Aarón… había reverdecido, y echado flores, y arrojado renuevos, y producido almendras» (Nm 17:8).'),
        tabla({
          titulo: 'Lo que guardaba el arca del pacto',
          cab: ['Objeto', 'Qué recordaba', 'Texto'],
          filas: [
            ['Las tablas del pacto', 'La ley de Dios y su pacto', 'Éx 25:16; Dt 10:5'],
            ['Una urna de oro con maná', 'La provisión diaria de Dios en el desierto', 'Éx 16:33-34'],
            ['La vara de Aarón que reverdeció', 'El sacerdocio elegido por Dios', 'Nm 17:10']
          ],
          nota: 'Hebreos 9:4 nombra los tres objetos. En tiempos de Salomón, el arca solo contenía las tablas (1 R 8:9).'
        })
      ],
      texto: [
        'Después de la rebelión de Coré, Dios quiso terminar la discusión sobre el sacerdocio de una vez. Mandó que cada tribu entregara una vara con el nombre de su príncipe escrito, y que en la de Leví se escribiera el nombre de Aarón. Las doce varas se pusieron en el tabernáculo, delante del testimonio. Dios dijo: «Y florecerá la vara del varón que yo escoja» (Nm 17:5).',
        { h: 'Una vara seca que florece' },
        'Al día siguiente, Moisés entró y vio que la vara de Aarón «había reverdecido, y echado flores, y arrojado renuevos, y producido almendras» (Nm 17:8). En una sola noche, un palo seco había pasado por todas las etapas de la vida de un árbol. Moisés sacó las varas y las mostró a todos; cada príncipe tomó la suya, y nada había cambiado en ninguna, salvo en la de Aarón.',
        'El almendro es el primer árbol que florece en Israel al final del invierno, y su nombre en hebreo, shaqued, suena como la palabra vigilante (Jer 1:11-12). La señal decía que Dios estaba vigilando para cumplir su palabra, y que la vida del sacerdocio venía de Él, no de la ambición humana. Dios mandó guardar la vara delante del testimonio, como señal para los rebeldes.',
        { h: 'Vida que sale de la muerte' },
        'Muchos lectores cristianos han visto en la vara seca que reverdece una figura de la resurrección de Cristo, el sumo sacerdote que Dios eligió y confirmó levantándolo de los muertos. Hebreos dice que Cristo no se glorificó a sí mismo haciéndose sumo sacerdote, sino que fue llamado por Dios, «como lo fue Aarón» (He 5:4-5), y que su sacerdocio es «según el poder de una vida indestructible» (He 7:16).',
        { h: 'Un servicio y una herencia' },
        'Números 18 completa el episodio: los sacerdotes y los levitas cargarían con la responsabilidad del santuario, y como no tendrían tierra, recibirían los diezmos y las ofrendas del pueblo. «Yo soy tu parte y tu heredad en medio de los hijos de Israel» (Nm 18:20), dijo Dios a Aarón. La estación sobre el sumo sacerdote, el sacerdote y el levita en El sacerdocio en Israel explica esas funciones.',
        ir('Ver «Sumo sacerdote, sacerdote y levita» en El sacerdocio en Israel', '../../sacerdocio/#ordenes/2')
      ],
      pensar: 'La vara de Aarón no floreció por su esfuerzo, sino porque Dios lo eligió. ¿Qué fruto en tu vida o ministerio es evidente que no viene de ti, sino de Dios?'
    },
    {
      id: 'meriba', n: 'Meriba y el pecado de Moisés', ref: 'Números 20:1-13; 27:12-14; Deuteronomio 3:23-27; 32:48-52; Salmos 106:32-33; 1 Corintios 10:4', fecha: -1407,
      visual: [
        cita('Números 20:7-12', 'Y habló Jehová a Moisés, diciendo: Toma la vara, y reúne la congregación, tú y Aarón tu hermano, y hablad a la peña a vista de ellos; y ella dará su agua, y les sacarás aguas de la peña, y darás de beber a la congregación y a sus bestias. Entonces Moisés tomó la vara de delante de Jehová, como él le mandó. Y reunieron Moisés y Aarón a la congregación delante de la peña, y les dijo: ¡Oíd ahora, rebeldes! ¿Os hemos de hacer salir aguas de esta peña? Entonces alzó Moisés su mano y golpeó la peña con su vara dos veces; y salieron muchas aguas, y bebió la congregación, y sus bestias. Y Jehová dijo a Moisés y a Aarón: Por cuanto no creísteis en mí, para santificarme delante de los hijos de Israel, por tanto, no meteréis esta congregación en la tierra que les he dado.'),
        img('img/ex-meriba.webp', 'Un anciano hebreo de barba blanca, enojado, golpea con su vara una gran peña en el desierto, y brota un chorro abundante de agua; la multitud y los animales se apresuran a beber', '«Alzó Moisés su mano y golpeó la peña con su vara dos veces» (Nm 20:11).')
      ],
      texto: [
        'El relato salta casi cuarenta años. «Llegaron los hijos de Israel, toda la congregación, al desierto de Zin, en el mes primero, y acampó el pueblo en Cades; y allí murió María, y allí fue sepultada» (Nm 20:1). Es el primer mes del año cuarenta. La generación que salió de Egipto estaba terminando de morir, y Moisés acababa de enterrar a su hermana.',
        { h: 'La misma queja' },
        'No había agua, y la nueva generación dijo lo mismo que sus padres: «¡Ojalá hubiéramos muerto cuando perecieron nuestros hermanos delante de Jehová!» (Nm 20:3). Moisés y Aarón se postraron delante del tabernáculo, y la gloria de Jehová apareció. Dios dio una instrucción precisa: «Toma la vara… y hablad a la peña a vista de ellos; y ella dará su agua» (Nm 20:8).',
        { h: 'Golpear en lugar de hablar' },
        'Moisés tomó la vara, reunió al pueblo y dijo: «¡Oíd ahora, rebeldes! ¿Os hemos de hacer salir aguas de esta peña?» (Nm 20:10). Y golpeó la peña dos veces. Salió agua en abundancia, porque Dios fue fiel a su pueblo, pero Moisés había fallado. El salmista lo explica: el pueblo hizo rebelar su espíritu, «y habló precipitadamente con sus labios» (Sal 106:33).',
        'El pecado tuvo varias partes. Moisés desobedeció la orden de hablar a la peña. Habló con ira y llamó «rebeldes» a un pueblo al que Dios estaba tratando con paciencia. Y dijo «¿os hemos de hacer salir aguas?», como si el milagro dependiera de él y de Aarón. Dios lo resumió: «no creísteis en mí, para santificarme delante de los hijos de Israel» (Nm 20:12). El líder representaba a Dios ante el pueblo, y lo representó mal.',
        { h: 'Una consecuencia dura' },
        'Por eso, ni Moisés ni Aarón entrarían en la tierra. Parece un castigo severo para un hombre que había sido fiel cuarenta años, pero muestra que la responsabilidad crece con el llamado: el que conoce a Dios cara a cara tiene que representarlo con fidelidad. Moisés le pidió a Dios que lo dejara entrar, y Dios le respondió: «Basta, no me hables más de este asunto» (Dt 3:26). Aun así, Dios lo llevó al Nebo para que la viera.',
        'Pablo dice que la roca que seguía a Israel en el desierto «era Cristo» (1 Co 10:4). Muchos lectores ven aquí una figura: la roca fue golpeada una vez en Refidim (Éx 17:6), como Cristo fue herido una vez en la cruz; después, bastaba con hablarle. Cristo no necesita ser sacrificado de nuevo: a Él se le pide, y da el agua de vida.'
      ],
      pensar: 'Moisés falló al final de una larga carrera, en un momento de cansancio, duelo e ira. ¿Qué te enseña su caída sobre la necesidad de cuidar tu corazón incluso después de muchos años de servir a Dios?'
    },
    {
      id: 'edom-aaron', n: 'Edom niega el paso y muere Aarón', ref: 'Números 20:14-29; 33:37-39; Deuteronomio 2:1-8; 10:6; Abdías 10-12', fecha: -1407,
      visual: [
        pasos([
          { t: 'Desde Cades, Moisés pide a Edom pasar por el camino real (Nm 20:14-17).', fecha: -1407, estado: { view: V.transjordania, capas: ['r-edom', 'r-moab'], lugares: ['cades-barnea', 'bosra', 'petra'], trazos: [] } },
          { t: 'Edom sale con mucho pueblo y mano fuerte; Israel se desvía (Nm 20:20-21).', fecha: -1407, estado: { view: V.transjordania, capas: ['r-edom', 'r-moab'], lugares: ['cades-barnea', 'bosra'], trazos: [] } },
          { t: 'De Cades al monte Hor, en la frontera de Edom, donde muere Aarón (Nm 20:22-29; 33:37-39).', fecha: -1407, estado: { view: V.transjordania, capas: ['r-edom'], lugares: ['cades-barnea', 'r-monte-hor'], trazos: ['ex-cades-hor'] } }
        ], 'Edom y el monte Hor'),
        img('img/ex-aaron-hor.webp', 'En la cima de una montaña rocosa del desierto al atardecer, un anciano hebreo quita las vestiduras de sumo sacerdote a otro anciano que está muy débil y se las pone a un hombre más joven', '«Moisés desnudó a Aarón de sus vestiduras, y se las vistió a Eleazar su hijo» (Nm 20:28).')
      ],
      texto: [
        'Para entrar en Canaán desde el este, Israel tenía que pasar por las tierras de Edom, al sureste del mar Muerto. Moisés envió mensajeros al rey de Edom con un mensaje fraterno: «Así dice Israel tu hermano» (Nm 20:14). Los edomitas descendían de Esaú, el hermano de Jacob. Israel prometió no pasar por los campos ni las viñas, ni beber agua de los pozos sin pagarla: «por el camino real iremos, sin apartarnos a diestra ni a siniestra» (Nm 20:17).',
        { h: 'El camino real' },
        'El camino real era la gran ruta comercial que recorría la meseta de Transjordania de norte a sur, desde Damasco hasta el golfo de Áqaba, pasando por Bosra, la capital de Edom. Edom se negó y salió contra Israel con mucho pueblo y mano fuerte. Dios había dicho que no pelearan con Edom: «no os daré de su tierra ni aun lo que cubre la planta de un pie; porque yo he dado por heredad a Esaú el monte de Seir» (Dt 2:5). Israel se desvió. La enemistad entre Edom e Israel duraría siglos, y el profeta Abdías la denunciaría (Abd 10-12).',
        { h: 'La muerte de Aarón' },
        'Desde Cades, Israel llegó al monte Hor, «en la extremidad del país de Edom» (Nm 33:37). Dios mandó a Moisés que subiera con Aarón y su hijo Eleazar a la cumbre, a vista de toda la congregación. Allí Moisés quitó a Aarón las vestiduras de sumo sacerdote y se las puso a Eleazar, «y Aarón murió allí en la cumbre del monte» (Nm 20:28). Tenía ciento veintitrés años, y era el día primero del mes quinto del año cuarenta (Nm 33:38-39). Todo Israel hizo duelo por él treinta días.',
        'Las vestiduras pasaron a otro, porque el sacerdocio de Aarón no podía durar: los sacerdotes morían y otros ocupaban su lugar. Hebreos señala ese límite para mostrar la grandeza de Cristo: «los otros sacerdotes llegaron a ser muchos, debido a que por la muerte no podían continuar; mas éste, por cuanto permanece para siempre, tiene un sacerdocio inmutable» (He 7:23-24).',
        { h: '¿Dónde está el monte Hor?' },
        'La tradición lo ubica en el Jebel Harun, «monte de Aarón», junto a Petra, donde hay un pequeño santuario musulmán sobre la cumbre. Otros prefieren un monte más cercano a Cades, porque el texto lo sitúa en la frontera de Edom y no dentro de su territorio. El mapa marca la ubicación tradicional, como aproximada.'
      ],
      pensar: 'Aarón tuvo fallas graves, como el becerro de oro, y aun así Dios lo sostuvo en su servicio hasta el final. ¿Qué te dice esto de la gracia de Dios con sus siervos imperfectos?'
    },
    {
      id: 'serpiente', n: 'La serpiente de bronce', ref: 'Números 21:4-9; 2 Reyes 18:4; Juan 3:14-16', fecha: -1407,
      visual: [
        img('img/ex-serpiente-bronce.webp', 'En un campamento del desierto, una serpiente de bronce brillante enroscada en lo alto de un asta de madera; alrededor, personas mordidas, tendidas en el suelo o sostenidas por sus familias, levantan la mirada hacia ella', '«Cualquiera que fuere mordido y mirare a ella, vivirá» (Nm 21:8).'),
        cita('Números 21:4-9', 'Después partieron del monte de Hor, camino del Mar Rojo, para rodear la tierra de Edom; y se desanimó el pueblo por el camino. Y habló el pueblo contra Dios y contra Moisés: ¿Por qué nos hiciste subir de Egipto para que muramos en este desierto? Pues no hay pan ni agua, y nuestra alma tiene fastidio de este pan tan liviano. Y Jehová envió entre el pueblo serpientes ardientes, que mordían al pueblo; y murió mucho pueblo de Israel. Entonces el pueblo vino a Moisés y dijo: Hemos pecado por haber hablado contra Jehová, y contra ti; ruega a Jehová que quite de nosotros estas serpientes. Y Moisés oró por el pueblo. Y Jehová dijo a Moisés: Hazte una serpiente ardiente, y ponla sobre una asta; y cualquiera que fuere mordido y mirare a ella, vivirá. Y Moisés hizo una serpiente de bronce, y la puso sobre una asta; y cuando alguna serpiente mordía a alguno, miraba a la serpiente de bronce, y vivía.')
      ],
      texto: [
        'Del monte Hor, Israel salió «camino del Mar Rojo, para rodear la tierra de Edom; y se desanimó el pueblo por el camino» (Nm 21:4). El rodeo los obligaba a bajar por el Arabá, el valle seco y caluroso entre el mar Muerto y el golfo de Áqaba, alejándose otra vez de la tierra prometida. El pueblo habló contra Dios y contra Moisés, y despreció el maná: «nuestra alma tiene fastidio de este pan tan liviano» (Nm 21:5).',
        { h: 'Serpientes ardientes' },
        'Entonces «Jehová envió entre el pueblo serpientes ardientes, que mordían al pueblo; y murió mucho pueblo de Israel» (Nm 21:6). «Ardientes» describe probablemente el efecto del veneno, que quema, o el color de las serpientes. El Arabá tiene todavía varias especies venenosas. Esta vez el pueblo reconoció su pecado y pidió a Moisés que orara.',
        { h: 'Mirar y vivir' },
        'La respuesta de Dios fue extraña: no quitó las serpientes, sino que mandó a Moisés hacer una serpiente y ponerla sobre un asta, «y cualquiera que fuere mordido y mirare a ella, vivirá» (Nm 21:8). Moisés la hizo de bronce. La sanidad no venía de un remedio ni de un esfuerzo, sino de mirar con fe lo que Dios había provisto. La misma figura de la serpiente, que traía la muerte, se convirtió en señal de vida.',
        { h: 'Así es necesario que el Hijo del Hombre sea levantado' },
        'Jesús usó esta historia para explicar su muerte a Nicodemo: «Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna» (Jn 3:14-15). El versículo siguiente es Juan 3:16. Así como los israelitas mordidos solo tenían que mirar la serpiente, el pecador solo tiene que mirar con fe a Cristo levantado en la cruz. Y la sanidad del cuerpo que recibieron los israelitas es también una figura de la sanidad que Cristo provee en su obra.',
        { h: 'Cuando la señal se vuelve ídolo' },
        'Siete siglos después, los israelitas le quemaban incienso a la serpiente de bronce, que habían conservado. El rey Ezequías la hizo pedazos y la llamó Nehustán, que suena como cosa de bronce (2 R 18:4). Lo que Dios había usado como medio de bendición se había convertido en objeto de culto. En el valle de Timna, en el Arabá, los arqueólogos encontraron una pequeña serpiente de cobre en un santuario de las minas, de una época cercana: muestra que la imagen era conocida en esa región, aunque no se trata de la de Moisés.'
      ],
      pensar: 'Los israelitas mordidos no tenían que hacer nada más que mirar. ¿Estás intentando ganar con tu esfuerzo lo que Dios solo te pide recibir mirando con fe a Cristo?'
    },
    {
      id: 'sehon-og', n: 'Sehón y Og: las primeras victorias', ref: 'Números 21:10-35; 32; Deuteronomio 2:9–3:17; Josué 2:10; Salmos 136:17-22', fecha: -1406,
      visual: [
        pasos([
          { t: 'El rodeo de Edom: por Ezión-geber y el borde del desierto, hasta el arroyo de Zered (Nm 21:10-12; Dt 2:8-13).', fecha: -1407, estado: { view: V.transjordania, capas: ['r-edom', 'r-moab', 'r-amon'], lugares: ['r-monte-hor', 'ezion-geber', 'r-zered'], trazos: ['ex-rodeo-edom'] } },
          { t: 'Israel cruza el Arnón y vence a Sehón, rey de los amorreos, en Jahaza; toma Hesbón (Nm 21:13-26).', fecha: -1406, estado: { view: V.moab, capas: ['r-moab', 'r-amon'], lugares: ['r-arnon', 'dibon', 'r-jahaz', 'hesbon'], trazos: ['ex-moab'] } },
          { t: 'Israel sube hacia Basán y vence a Og en Edrei (Nm 21:33-35).', fecha: -1406, estado: { view: V.moab, capas: ['r-moab', 'r-amon', 'r-basan', 'r-galaad'], lugares: ['hesbon', 'edrei'], trazos: ['ex-moab', 'ex-og'] } },
          { t: 'Las tierras de Sehón y Og quedan para Rubén, Gad y la media tribu de Manasés (Nm 32; Dt 3:12-17).', fecha: -1406, estado: { view: V.moab, capas: ['r-galaad', 'r-basan', 'r-moab'], lugares: ['hesbon', 'edrei', 'r-llanuras-moab'], trazos: [] } }
        ], 'De Zered a Basán'),
        tabla({
          titulo: 'Los pueblos de Transjordania',
          cab: ['Pueblo', 'Origen', 'Qué hizo Israel', 'Texto'],
          filas: [
            ['Edom', 'Esaú', 'Lo rodeó; Dios se lo había dado a Esaú', 'Dt 2:4-8'],
            ['Moab', 'Lot', 'Pasó por el borde sin pelear', 'Dt 2:9'],
            ['Amón', 'Lot', 'No entró en su tierra', 'Dt 2:19'],
            ['Amorreos de Sehón', 'Pueblo de Canaán', 'Lo venció y tomó su tierra', 'Nm 21:21-31'],
            ['Basán de Og', 'Amorreos, restos de los gigantes', 'Lo venció y tomó su tierra', 'Nm 21:33-35; Dt 3:11']
          ],
          nota: 'Dios respetó la herencia que había dado a los descendientes de Esaú y de Lot.'
        })
      ],
      texto: [
        'Cuarenta años antes, el pueblo había retrocedido ante los gigantes; ahora, la nueva generación iba a ver sus primeras victorias. El mapa por pasos sigue el camino desde el monte Hor, rodeando Edom, hasta las tierras al este del Jordán.',
        { h: 'Pueblos que no debían atacar' },
        'Deuteronomio 2 explica algo que podría sorprender: Dios prohibió a Israel pelear con Edom, Moab y Amón. Los tres eran parientes de Israel, descendientes de Esaú y de Lot, y Dios les había dado su tierra como herencia: «no te daré posesión de su tierra; porque yo he dado a Ar por heredad a los hijos de Lot» (Dt 2:9). El Dios de Israel es también el Señor de las naciones, y respeta lo que les ha dado.',
        { h: 'Sehón, rey de Hesbón' },
        'Al norte del arroyo Arnón gobernaba Sehón, rey de los amorreos, que había quitado esa tierra a Moab. Israel le pidió paso pacífico, como a Edom. Sehón se negó y salió a pelear en Jahaza. Israel lo venció y tomó su tierra «desde Arnón hasta Jaboc» (Nm 21:24), con su capital, Hesbón. Era la primera tierra que Israel poseía después de cuatrocientos años.',
        { h: 'Og, el último de los gigantes' },
        'Luego Israel subió hacia el norte, a Basán, una meseta fértil famosa por sus robles y su ganado. Su rey, Og, salió a pelear en Edrei. Dios dijo a Moisés: «No le tengas miedo, porque en tu mano lo he entregado» (Nm 21:34). Deuteronomio cuenta que Og era el último de los refaítas, los gigantes, y que su cama de hierro medía nueve codos de largo y cuatro de ancho, unos cuatro metros por uno ochenta (Dt 3:11). Los mismos gigantes que asustaron a la generación anterior fueron vencidos por sus hijos.',
        { h: 'La fama que precedió a Israel' },
        'Estas victorias se cantaron en Israel durante siglos (Sal 136:19-20), y se oyeron en Canaán. Cuando los espías entraron en Jericó, Rahab les dijo: «hemos oído… lo que habéis hecho a los dos reyes de los amorreos que estaban al otro lado del Jordán, a Sehón y a Og» (Jos 2:10). Las tribus de Rubén y Gad, que tenían mucho ganado, pidieron quedarse en esas tierras, y Moisés se las dio con la condición de que sus guerreros cruzaran el Jordán para ayudar a sus hermanos (Nm 32).',
        ir('Ver la cama de Og en codos en Pesos, medidas, monedas y horas', '../../medidas-biblicas/#longitud/2')
      ],
      pensar: 'Los gigantes que espantaron a los padres fueron vencidos por los hijos. ¿Qué «gigante» que te paralizó en el pasado podrías enfrentar hoy con la fe que Dios te ha dado?'
    },
    {
      id: 'balaam', n: 'Balaam y Baal-peor', ref: 'Números 22–25; 31:8, 16; Deuteronomio 23:4-5; Miqueas 6:5; 2 Pedro 2:15-16; Judas 11; Apocalipsis 2:14', fecha: -1406,
      visual: [
        mapa({ view: V.balaam, capas: ['r-moab', 'r-amon'], lugares: ['r-petor', 'alepo', 'damasco', 'r-jahaz', 'r-llanuras-moab'], trazos: ['ex-balaam'] }, 'De Petor a Moab'),
        img('img/ex-balaam-asna.webp', 'En un camino angosto entre viñedos con muros de piedra, una asna se echa al suelo bajo su jinete, un adivino anciano de manto oscuro con una vara alzada; delante, un ángel resplandeciente con una espada en la mano cierra el paso', '«Jehová abrió los ojos de Balaam, y vio al ángel de Jehová que estaba en el camino» (Nm 22:31).'),
        foto('img/ex-deir-alla.jpg', 'Dibujo de los fragmentos de yeso de la inscripción de Deir Alla, unidos como un rompecabezas, con renglones numerados de letras antiguas en tinta negra y algunas palabras en tinta roja', 'Dibujo de la inscripción de Deir Alla (hacia 800 a.C.), escrita en tinta sobre el yeso de una pared. Su primera línea, en rojo, nombra a «Balaam hijo de Beor, vidente de los dioses».', 'Dibujo: Disdero, CC BY-SA 4.0, Wikimedia Commons', 'Dibujo')
      ],
      texto: [
        'Israel acampó en las llanuras de Moab, al este del Jordán, frente a Jericó (Nm 22:1). Balac, rey de Moab, tuvo miedo de ese pueblo que había vencido a Sehón y a Og. No podía vencerlo con las armas, así que buscó otro camino: una maldición. Mandó a buscar a Balaam hijo de Beor, un adivino famoso de Petor, junto al Éufrates, a unos 600 kilómetros.',
        { h: 'Un adivino pagano' },
        'Balaam no era un profeta de Israel. La Biblia lo llama «adivino» (Jos 13:22), usaba agüeros (Nm 24:1) y trabajaba por paga. Pero conocía el nombre de Jehová, y Dios le habló: «No vayas con ellos, ni maldigas al pueblo, porque bendito es» (Nm 22:12). Cuando Balac le ofreció más honra y dinero, Balaam volvió a preguntar. Dios le permitió ir, pero en el camino le salió al encuentro el ángel de Jehová con una espada. La asna lo vio y se apartó tres veces, y Balaam la azotó, hasta que «Jehová abrió la boca al asna» (Nm 22:28). Pedro lo resume: una bestia muda «refrenó la locura del profeta» (2 P 2:16).',
        { h: 'Cuatro bendiciones' },
        'Desde tres alturas distintas, Balac ofreció sacrificios y pidió una maldición, y tres veces Balaam bendijo a Israel: «¿Por qué maldeciré yo al que Dios no maldijo?» (Nm 23:8); «Dios no es hombre, para que mienta» (Nm 23:19); «¡Cuán hermosas son tus tiendas, oh Jacob!» (Nm 24:5). En el cuarto oráculo, Balaam miró al futuro lejano: «Saldrá ESTRELLA de Jacob, y se levantará cetro de Israel» (Nm 24:17). Israel entendió esa estrella como el rey que vendría, primero David y finalmente el Mesías.',
        { h: 'El consejo de Balaam' },
        'Lo que Balaam no pudo hacer con maldiciones, lo logró con un consejo. En Sitim, las mujeres moabitas invitaron a los israelitas a los sacrificios de sus dioses, y el pueblo cometió inmoralidad y se inclinó a Baal-peor (Nm 25:1-3). Más tarde se supo que fue «por consejo de Balaam» (Nm 31:16). Murieron veinticuatro mil en la plaga, hasta que Finees, nieto de Aarón, actuó con celo por Dios. Balaam murió después a espada en la guerra contra Madián (Nm 31:8). El Nuevo Testamento lo recuerda como ejemplo del que ama «el premio de la maldad» (2 P 2:15) y del que enseña a poner tropiezo al pueblo de Dios (Ap 2:14).',
        { h: 'Balaam fuera de la Biblia' },
        'En 1967, en Deir Alla, en el valle del Jordán, se encontró un texto escrito con tinta sobre una pared de yeso, de hacia el 800 a.C., que menciona a «Balaam hijo de Beor», un vidente de los dioses que recibe una visión de noche. Es una tradición pagana sobre el mismo personaje, y muestra que su fama duró siglos en la región.'
      ],
      pensar: 'Balaam no pudo maldecir a Israel, pero sí lo hizo caer con la tentación. ¿Qué te enseña esto sobre dónde están los peligros más grandes para el pueblo de Dios: afuera o adentro?'
    },
    {
      id: 'nebo', n: 'Moisés en el monte Nebo', ref: 'Números 27:12-23; Deuteronomio 1:1-5; 31–34; Josué 1:1-2; Judas 9; Lucas 9:28-31', fecha: -1406,
      visual: [
        mapa({ view: V.moab, capas: [], lugares: ['monte-nebo', 'r-llanuras-moab', 'r-sitim', 'jerico', 'jerusalen', 'hebron', 'dan', 'beerseba'], trazos: [] }, 'Lo que vio Moisés'),
        img('img/ex-nebo.webp', 'Un anciano hebreo de barba y cabello blancos, de espaldas, apoyado en su cayado en la cumbre de una montaña, contempla al atardecer el valle del Jordán, el oasis de Jericó y las colinas de Canaán que se pierden en la distancia', '«Te he permitido verla con tus ojos, mas no pasarás allá» (Dt 34:4).')
      ],
      texto: [
        'En las llanuras de Moab terminó el viaje de cuarenta años. Moisés tenía ciento veinte años. Antes de morir hizo lo más importante que un líder puede hacer al final: preparar a quienes seguirían.',
        { h: 'Un sucesor' },
        'Cuando Dios le anunció que moriría sin entrar, Moisés no pidió por sí mismo, sino por el pueblo: «Ponga Jehová… un varón sobre la congregación… para que la congregación de Jehová no sea como ovejas sin pastor» (Nm 27:16-17). Dios eligió a Josué, «varón en el cual hay espíritu» (Nm 27:18). Moisés le impuso las manos delante del sacerdote Eleazar y de todo el pueblo. Josué había sido su ayudante desde Refidim, y había esperado cuarenta años.',
        { h: 'El libro de Deuteronomio' },
        'En las llanuras de Moab, Moisés pronunció los discursos que forman el libro de Deuteronomio: recordó el camino desde Horeb, repitió la ley a la nueva generación, renovó el pacto, escribió la ley y la entregó a los sacerdotes, y bendijo a las tribus. «Deuteronomio» significa «segunda ley»: no una ley distinta, sino la misma enseñada otra vez a los hijos de los que la recibieron en el Sinaí. Su estudio irá en el recurso del libro.',
        { h: 'Desde el Pisga' },
        '«Subió Moisés de los campos de Moab al monte Nebo, a la cumbre del Pisga, que está enfrente de Jericó; y le mostró Jehová toda la tierra» (Dt 34:1): Galaad y Dan al norte, el Neguev al sur, la llanura de Jericó a sus pies, y en un día claro, hasta el mar. El mapa marca lo que se ve desde allí. Dios le dijo: «Esta es la tierra de que juré a Abraham, a Isaac y a Jacob… Te he permitido verla con tus ojos, mas no pasarás allá» (Dt 34:4).',
        { h: 'Dios lo enterró' },
        'Moisés murió allí, «conforme al dicho de Jehová», y Dios mismo lo enterró en un valle de Moab, «y ninguno conoce el lugar de su sepultura hasta hoy» (Dt 34:5-6). Murió con plena salud: «sus ojos nunca se oscurecieron, ni perdió su vigor» (Dt 34:7). Israel lloró treinta días. El libro termina con su epitafio: «nunca más se levantó profeta en Israel como Moisés, a quien haya conocido Jehová cara a cara» (Dt 34:10).',
        { h: 'Al fin, en la tierra' },
        'Moisés no entró en la tierra prometida en vida. Pero muchos siglos después, en un monte alto de Galilea, Moisés y Elías aparecieron con Jesús transfigurado, «y hablaban de su partida, que iba Jesús a cumplir en Jerusalén» (Lc 9:31). En griego, «partida» es exodos. Moisés estaba en la tierra, hablando con Cristo del verdadero éxodo. La conquista de la tierra bajo Josué se estudiará en La conquista y las doce tribus, en preparación.',
        ir('Ver «La transfiguración» en La persona y obra de Cristo', '../../persona-y-obra-de-cristo/#oficios/6')
      ],
      pensar: 'Moisés vio la tierra pero no entró, y aun así terminó bien: preparó a su sucesor y bendijo al pueblo. ¿A quién estás preparando tú para que siga la obra de Dios cuando tú ya no estés?'
    }
  ];

  window.__EX.desierto = desierto;
})();
(() => {
  const { img, esq, foto, cita, tabla, mapa, pasos, ir, V } = window.__EX_H;

  /* ---------------- VI. El Éxodo en el mapa ---------------- */
  const mapas = [
    {
      id: 'viaje-completo', n: 'El viaje completo', ref: 'Éxodo 12:37–19:2; Números 10:11–22:1; 33:1-49; Deuteronomio 1:1-3; 2:1-14', fecha: [-1446, -1406],
      visual: [
        pasos([
          { t: 'De Ramesés a Etam, por el valle de Tumilat: unos 70 km (Éx 12:37; 13:20).', fecha: -1446, estado: { view: V.delta, capas: [], lugares: ['ramses', 'r-sucot-egipto', 'r-etam'], trazos: ['ex-salida'] } },
          { t: 'El cruce del mar y el camino del sur hasta el Sinaí, según la ruta tradicional: unos 350 km en tres meses (Éx 14–19).', fecha: -1446, estado: { view: V.sinai, capas: [], lugares: ['r-etam', 'mar-rojo', 'r-mara', 'r-elim', 'r-refidim', 'sinai'], trazos: ['ex-salida', 'ex-cruce-suez', 'ex-sur-sinai'] } },
          { t: 'Casi un año acampados en el Sinaí (Éx 19:1–Nm 10:11).', fecha: -1445, estado: { view: V.sinai, capas: [], lugares: ['sinai'], trazos: ['ex-sur-sinai'] } },
          { t: 'Del Sinaí a Cades-barnea por Hazerot: once jornadas, unos 300 km (Dt 1:2; Nm 10–13).', fecha: -1445, estado: { view: V.cades, capas: [], lugares: ['sinai', 'r-hazerot', 'cades-barnea'], trazos: ['ex-sur-sinai', 'ex-sinai-cades'] } },
          { t: 'Treinta y ocho años en torno a Cades, con un viaje hasta Ezión-geber (Nm 33:18-36; Dt 2:14).', fecha: [-1445, -1407], estado: { view: V.cades, capas: [], lugares: ['cades-barnea', 'ezion-geber'], trazos: ['ex-sinai-cades', 'ex-38-anos'] } },
          { t: 'Del monte Hor, rodeando Edom, hasta el Arnón (Nm 21:4-13; Dt 2:8).', fecha: -1407, estado: { view: V.transjordania, capas: ['r-edom', 'r-moab'], lugares: ['cades-barnea', 'r-monte-hor', 'ezion-geber', 'r-zered', 'r-arnon'], trazos: ['ex-cades-hor', 'ex-rodeo-edom'] } },
          { t: 'Hesbón, Basán y las llanuras de Moab, frente a Jericó (Nm 21:21–22:1).', fecha: -1406, estado: { view: V.moab, capas: ['r-moab'], lugares: ['dibon', 'hesbon', 'edrei', 'monte-nebo', 'r-llanuras-moab', 'jerico'], trazos: ['ex-moab', 'ex-og'] } },
          { t: 'Todo el viaje: de Ramesés a las llanuras de Moab, unos 1.500 kilómetros en cuarenta años, por la ruta tradicional.', fecha: [-1446, -1406], estado: { view: V.todo, capas: [], lugares: ['ramses', 'sinai', 'cades-barnea', 'ezion-geber', 'r-monte-hor', 'hesbon', 'monte-nebo'], trazos: ['ex-salida', 'ex-cruce-suez', 'ex-sur-sinai', 'ex-sinai-cades', 'ex-38-anos', 'ex-cades-hor', 'ex-rodeo-edom', 'ex-moab'] } }
        ], 'El viaje completo')
      ],
      texto: [
        'Esta ruta reúne en el mapa el viaje que las rutas II a V contaron paso a paso. El mapa por pasos lo recorre en ocho etapas, siguiendo la ruta tradicional: el cruce por el golfo de Suez y el monte Sinaí en Jebel Musa. El botón «Ver la evolución» las muestra solas, una tras otra.',
        { h: 'Un viaje de once días que duró cuarenta años' },
        'Deuteronomio comienza con un dato que es casi una ironía: «Once jornadas hay desde Horeb, camino del monte de Seir, hasta Cades-barnea» (Dt 1:2). Desde Cades, la tierra prometida estaba a la vista. Pero el viaje que podía haber durado unas semanas desde el Sinaí terminó tomando cuarenta años. El mapa lo muestra con claridad: después de llegar a Cades en el segundo año, el pueblo dio vueltas por el desierto durante treinta y ocho años antes de seguir.',
        { h: 'Tres partes desiguales' },
        'El viaje tiene tres partes muy distintas. La primera, de Egipto al Sinaí, duró tres meses y estuvo llena de milagros: el mar, el maná, el agua de la roca. La segunda, en el Sinaí, duró casi un año y fue la de la ley, el pacto y el tabernáculo. La tercera, del Sinaí a Moab, duró treinta y nueve años, y casi todo lo que se cuenta de ella son crisis: quejas, rebeliones, juicios y muertes. Los treinta y ocho años de espera ocupan muy pocos capítulos de Números.',
        { h: 'Unos 1.500 kilómetros' },
        'Si se suman los caminos de la ruta tradicional, Israel recorrió unos 1.500 kilómetros en cuarenta años, aunque gran parte del tiempo lo pasó acampado. Un pueblo con niños, ancianos y rebaños avanza unos quince o veinte kilómetros por día de marcha. Las distancias y los tiempos son aproximados, como el trazado de los caminos: casi ninguna etapa está identificada con certeza, como muestra la estación siguiente.',
        'Cada lugar del mapa se puede tocar en el Atlas bíblico, que muestra lo que pasó allí y los recursos del sitio que lo estudian.',
        ir('Abrir el monte Sinaí en el Atlas bíblico', '../../atlas-biblico/#monte-sinai')
      ],
      pensar: 'El viaje de Horeb a Cades era de once días, y duró cuarenta años por la incredulidad. ¿Hay algún área de tu vida donde estés dando vueltas en el desierto por no confiar en Dios?'
    },
    {
      id: 'etapas', n: 'Las etapas de Números 33', ref: 'Números 33:1-49', fecha: [-1446, -1406],
      visual: [
        tabla({
          titulo: 'Los campamentos de Israel según Números 33',
          cab: ['Tramo', 'Campamentos', 'Identificación'],
          filas: [
            ['De Egipto al mar (vv. 5-8)', 'Ramesés, Sucot, Etam, Pi-hahirot', 'Ramesés y Sucot, probables; Pi-hahirot, desconocido'],
            ['Del mar al Sinaí (vv. 8-15)', 'Mara, Elim, junto al mar Rojo, desierto de Sin, Dofca, Alús, Refidim, desierto de Sinaí', 'Según la ruta tradicional; Dofca quizá Serabit el-Jadim, región de minas egipcias'],
            ['Del Sinaí al desierto (vv. 16-17)', 'Kibrot-hataava, Hazerot', 'Hazerot, quizá Ain Jadra'],
            ['Los años del desierto (vv. 18-35)', 'Ritma, Rimón-peres, Libna, Rissa, Ceelata, monte de Sefer, Harada, Macelot, Tahat, Tara, Mitca, Hasmona, Moserot, Bene-jaacán, monte de Gidgad, Jotbata, Abrona, Ezión-geber', 'Casi todos desconocidos; Ezión-geber, junto al golfo de Áqaba'],
            ['Cades y el monte Hor (vv. 36-40)', 'Desierto de Zin, que es Cades; monte de Hor', 'Cades, Ain el-Qudeirat; Hor, discutido'],
            ['De Hor a Moab (vv. 41-49)', 'Zalmona, Punón, Obot, Ije-abarim, Dibón-gad, Almón-diblataim, montes de Abarim, campos de Moab', 'Punón, Feinán (minas de cobre); Dibón, probable']
          ],
          nota: 'Ramesés y cuarenta y un campamentos: cuarenta y dos lugares. Las identificaciones son las más difundidas, y casi todas son aproximadas.'
        }),
        cita('Números 33:1-4', 'Estas son las jornadas de los hijos de Israel, que salieron de la tierra de Egipto por sus ejércitos, bajo el mando de Moisés y Aarón. Moisés escribió sus salidas conforme a sus jornadas por mandato de Jehová. Estas, pues, son sus jornadas con arreglo a sus salidas. De Ramesés salieron en el mes primero, a los quince días del mes primero; el segundo día de la pascua salieron los hijos de Israel con mano poderosa, a vista de todos los egipcios, mientras enterraban los egipcios a los que Jehová había herido de muerte de entre ellos, a todo primogénito; también había hecho Jehová juicios contra sus dioses.')
      ],
      texto: [
        'Números 33 es una lista: «Estas son las jornadas de los hijos de Israel, que salieron de la tierra de Egipto por sus ejércitos» (Nm 33:1). El texto dice que Moisés escribió las salidas de cada jornada por mandato de Jehová (Nm 33:2). Es un diario de viaje de cuarenta años, resumido en cuarenta y dos lugares: Ramesés y cuarenta y un campamentos.',
        { h: 'Una lista que parece aburrida' },
        'Para muchos lectores, Números 33 es uno de los capítulos más difíciles de leer: una sucesión de «salieron de… y acamparon en…». Pero esa lista dice algo importante. Cada nombre fue un lugar donde Dios guió, proveyó y protegió a su pueblo. Algunos recuerdan hechos conocidos: Mara, Elim, Refidim, Kibrot-hataava. De la mayoría no sabemos nada más que el nombre. Dios recordaba cada parada del camino, aun las que nadie más recordaría.',
        { h: 'Lo que sabemos y lo que no' },
        'La tabla agrupa los campamentos en seis tramos y muestra cuáles se han identificado. La verdad es que casi ninguno está ubicado con certeza. Los nombres de los pueblos nómadas no se conservan como los de las ciudades, y el Sinaí estuvo casi deshabitado durante siglos. Las identificaciones del mapa dependen de la ruta que se elija para el cruce del mar y para el monte Sinaí, como explica la estación siguiente.',
        'Llama la atención el tramo central: dieciocho campamentos entre Hazerot y Ezión-geber, de los que el texto no cuenta nada. Son los años en que la generación que salió de Egipto fue muriendo. La Biblia no llena ese silencio con relatos: lo deja como un vacío en la historia del pueblo.',
        { h: 'Cuidado con las lecturas alegóricas' },
        'Desde la antigüedad, algunos maestros cristianos leyeron las cuarenta y dos etapas como un mapa simbólico del alma, con un significado espiritual para cada nombre. Puede ser una meditación edificante, pero no es lo que el texto enseña. Números 33 presenta un viaje real, con lugares reales, y su mensaje es sencillo: Dios llevó a su pueblo paso a paso hasta el borde de la promesa, sin abandonarlo en ningún campamento.'
      ],
      pensar: 'Números 33 recuerda cuarenta y dos lugares, la mayoría sin ninguna historia. ¿Qué te dice eso sobre los días comunes de tu vida, en los que parece que no pasa nada?'
    },
    {
      id: 'rutas', n: 'Las rutas propuestas', ref: 'Éxodo 13:17-18; 14:2; 15:22; 19:1-2; Números 33:5-15; Deuteronomio 1:2; Gálatas 4:25', fecha: -1446,
      visual: [
        { tipo: 'mapa', titulo: 'Cuatro rutas', selector: { etiqueta: 'Ruta', clave: 'exodo-ruta', opciones: [
          { id: 'sur', t: 'Ruta del sur (tradicional)', estado: { view: V.sinai, capas: [], lugares: ['ramses', 'mar-rojo', 'r-mara', 'r-elim', 'r-refidim', 'sinai', 'cades-barnea'], trazos: ['ex-salida', 'ex-cruce-suez', 'ex-sur-sinai', 'ex-sinai-cades'] },
            nota: 'Cruce por el golfo de Suez o por los lagos Amargos, y bajada por la costa occidental del Sinaí hasta Jebel Musa. Es la que sigue este recurso para el monte Sinaí.' },
          { id: 'central', t: 'Ruta central', estado: { view: V.cades, capas: [], lugares: ['ramses', 'r-cruce-lagos', 'r-sinai-karkom', 'cades-barnea'], trazos: ['ex-salida', 'ex-cruce-lagos', 'ex-ruta-karkom'] },
            nota: 'Cruce por los lagos Amargos y marcha por el centro de la península hasta un monte del Neguev o de Parán, como Har Karkom, cerca de Cades.' },
          { id: 'norte', t: 'Ruta del norte', estado: { view: V.cades, capas: [], lugares: ['ramses', 'r-sile', 'r-sirbonis', 'r-sinai-hilal', 'cades-barnea'], trazos: ['ex-cruce-norte', 'ex-ruta-hilal'] },
            nota: 'Cruce junto al lago Sirbonis, en la costa del Mediterráneo, y un monte Sinaí en el norte, como Jebel Hilal. Choca con Éxodo 13:17, que dice que Dios no los llevó por el camino de los filisteos.' },
          { id: 'arabia', t: 'Ruta de Arabia', estado: { view: V.arabia, capas: [], lugares: ['ramses', 'r-cruce-aqaba', 'r-madian', 'r-sinai-lawz', 'cades-barnea'], trazos: ['ex-salida', 'ex-cruce-aqaba', 'ex-arabia-lawz'] },
            nota: 'Travesía de la península, cruce del golfo de Áqaba en Nuweiba y un monte Sinaí en Madián, como Jabal al-Lawz.' }
        ] } },
        tabla({
          titulo: 'Comparación de las rutas',
          cab: ['Ruta', 'A favor', 'En contra'],
          filas: [
            ['Sur', 'Tradición antigua; encaja con las once jornadas de Dt 1:2; fuentes y oasis en la costa', 'Ningún nombre de la ruta está confirmado'],
            ['Central', 'Cercanía a Cades; montes con restos de culto antiguo', 'No encaja con las once jornadas; los restos son de otra época'],
            ['Norte', 'Distancia corta; el lago Sirbonis era peligroso para los carros', 'Contradice Éx 13:17; no encaja con Dt 1:2'],
            ['Arabia', 'El monte de Dios cerca de Madián; Gá 4:25', 'Exige cruzar toda la península antes del mar; Jetro vuelve a su tierra (Éx 18:27)']
          ],
          nota: 'Las cuatro rutas son reconstrucciones. El texto bíblico no da coordenadas.'
        })
      ],
      texto: [
        'Las estaciones anteriores mostraron por separado las propuestas para el cruce del mar y para el monte Sinaí. Juntas forman cuatro rutas principales para el Éxodo, que el selector del mapa permite comparar. La tabla resume los argumentos de cada una.',
        { h: 'Por qué hay tantas propuestas' },
        'El texto bíblico da muchos nombres de lugares, pero casi ninguno sobrevivió. Los pocos que se pueden identificar con seguridad están al principio y al final del viaje: Ramesés en el delta, Ezión-geber en el golfo de Áqaba, Cades-barnea en la frontera de Canaán, y las ciudades de Moab. Todo lo que está en medio, incluido el monte Sinaí, depende de cómo se interpreten las pistas del texto: distancias, días de camino, nombres que se parecen a nombres árabes modernos y tradiciones antiguas.',
        { h: 'La ruta que sigue este recurso' },
        'Este recurso usa la ruta del sur para el monte Sinaí, como es tradicional, y deja abiertas las propuestas sobre el cruce del mar. La razón principal es el dato de Deuteronomio 1:2: once jornadas desde Horeb hasta Cades-barnea. Desde Jebel Musa hay unos trescientos kilómetros, que encajan con once días de marcha de un pueblo grande. Desde los montes del norte o del centro, la distancia es mucho menor.',
        { h: 'Lo que no cambia' },
        'Elegir una ruta u otra cambia el dibujo del mapa, pero no la historia. En cualquiera de ellas, Israel salió de Egipto por el poder de Dios, cruzó el mar en seco, recibió la ley en el monte de Dios, comió maná, vagó cuarenta años y llegó a Moab. Conviene desconfiar de quienes presentan una ruta como «descubrimiento» que prueba la Biblia, y también de quienes dicen que, como no se sabe la ruta, el Éxodo no ocurrió. La fe en el relato no depende de la ubicación exacta de cada campamento.',
        { ejercicio: {
          pregunta: '¿Por qué el recurso prefiere la ruta del sur para el monte Sinaí?',
          opciones: [
            { t: 'Porque se encontraron allí restos del campamento de Israel.', ok: false, por_que: 'No se han encontrado restos seguros del campamento de Israel en ninguna de las rutas propuestas.' },
            { t: 'Porque encaja con la distancia de once jornadas hasta Cades-barnea y con una tradición muy antigua.', ok: true, por_que: 'Deuteronomio 1:2 da esa distancia, y desde Jebel Musa hay unos trescientos kilómetros. La tradición cristiana lo ubica allí desde el siglo IV.' },
            { t: 'Porque es la ruta más corta entre Egipto y Canaán.', ok: false, por_que: 'La más corta es la del norte, por la costa, y el texto dice que Dios no los llevó por allí (Éx 13:17).' }
          ],
          explicacion: 'Las rutas se comparan por cómo encajan con los datos del texto. La del sur es la que mejor encaja con las distancias, aunque sus nombres de lugares no están confirmados.'
        } }
      ],
      pensar: 'Hay quienes presentan una ruta del Éxodo como prueba definitiva de la Biblia, y quienes dicen que como no se sabe la ruta, no ocurrió. ¿Cómo puedes tener una fe firme sin depender de ninguno de esos extremos?'
    },
    {
      id: 'cades', n: 'Treinta y ocho años en torno a Cades', ref: 'Números 13:26; 20:1; 33:18-36; Deuteronomio 1:46; 2:1, 14-16; Josué 5:4-7', fecha: [-1445, -1407],
      visual: [
        pasos([
          { t: 'Cades-barnea: la frontera sur de Canaán, en el desierto de Zin (Nm 13:26; 34:4).', fecha: -1445, estado: { view: V.cades, capas: ['r-neguev'], lugares: ['cades-barnea', 'beerseba', 'hebron'], trazos: [] } },
          { t: '«Estuvisteis en Cades por muchos días» (Dt 1:46).', fecha: -1444, estado: { view: V.cades, capas: [], lugares: ['cades-barnea'], trazos: ['ex-sinai-cades'] } },
          { t: '«Rodeamos el monte de Seir por mucho tiempo» (Dt 2:1): un viaje hasta Ezión-geber y de vuelta (Nm 33:30-36).', fecha: [-1444, -1407], estado: { view: V.cades, capas: ['r-edom'], lugares: ['cades-barnea', 'ezion-geber'], trazos: ['ex-38-anos'] } },
          { t: 'De vuelta en Cades en el año cuarenta: muere María (Nm 20:1).', fecha: -1407, estado: { view: V.cades, capas: [], lugares: ['cades-barnea'], trazos: ['ex-sinai-cades', 'ex-38-anos'] } }
        ], 'Cades-barnea'),
        tabla({
          titulo: 'Cades-barnea en la Biblia',
          cab: ['Hecho', 'Texto'],
          filas: [
            ['Abraham habita entre Cades y Shur', 'Gn 20:1'],
            ['Los espías salen y vuelven', 'Nm 13:26'],
            ['La rebelión y el juicio de los cuarenta años', 'Nm 14'],
            ['Muere María', 'Nm 20:1'],
            ['Meriba: el pecado de Moisés', 'Nm 20:13; 27:14'],
            ['Moisés envía mensajeros a Edom', 'Nm 20:14'],
            ['Límite sur de la tierra de Israel', 'Nm 34:4; Ez 47:19']
          ],
          nota: 'Cades significa «santo». También se llama En-mispat (Gn 14:7) y Meriba de Cades (Ez 47:19).'
        })
      ],
      texto: [
        'Si hay un lugar que resume los cuarenta años, es Cades-barnea. Allí volvieron los espías, allí el pueblo se rebeló y recibió la sentencia, y allí estaba otra vez, treinta y ocho años después, cuando murió María y Moisés golpeó la peña. Deuteronomio cuenta el tiempo con precisión: «los días que anduvimos de Cades-barnea hasta cuando pasamos el arroyo de Zered fueron treinta y ocho años; hasta que se acabó toda la generación de los hombres de guerra» (Dt 2:14).',
        { h: 'Un oasis en la frontera' },
        'Cades se identifica casi siempre con Ain el-Qudeirat, el manantial más abundante del norte del Sinaí, en un valle verde rodeado de desierto, a unos ochenta kilómetros al sur de Beerseba. Allí se encontraron restos de varias fortalezas israelitas, la más antigua del siglo X a.C., en tiempos de Salomón: muestran que el lugar fue importante como puesto de frontera. De la época de Moisés no se han hallado restos, lo que es esperable en un campamento de tiendas.',
        { h: '¿Dónde estuvieron los treinta y ocho años?' },
        'El texto no da muchos detalles. Deuteronomio dice que estuvieron «en Cades por muchos días» (Dt 1:46), y que luego rodearon el monte de Seir «por mucho tiempo» (Dt 2:1). Números 33 menciona dieciocho campamentos y un viaje hasta Ezión-geber, en el golfo de Áqaba, antes de volver a Cades. Lo más probable es que el pueblo se moviera con sus rebaños por el desierto de Parán y de Zin, buscando pastos y agua, teniendo Cades como base. El mapa muestra esa reconstrucción.',
        { h: 'Una generación que muere' },
        'Esos años fueron un largo funeral. Cada uno de los más de seiscientos mil hombres contados en el Sinaí murió en el desierto, excepto Caleb y Josué. Son, en promedio, más de cuarenta muertes por día durante treinta y ocho años. El Salmo 90, que su título atribuye a Moisés, parece nacer de esa experiencia: «Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría» (Sal 90:12). Pero mientras unos morían, otros nacían y crecían: la generación que entraría en la tierra se formó en ese desierto, comiendo maná y aprendiendo a seguir la nube.'
      ],
      pensar: 'Los años del desierto fueron un tiempo de juicio para una generación y de formación para otra. ¿Qué está formando Dios en ti durante tu temporada de desierto?'
    },
    {
      id: 'hor-moab', n: 'Del monte Hor a las llanuras de Moab', ref: 'Números 20:22–22:1; 33:37-49; Deuteronomio 2:1–3:17', fecha: [-1407, -1406],
      visual: [
        { tipo: 'mapa', titulo: '¿Por dónde rodearon Edom?', selector: { etiqueta: 'Lectura', clave: 'exodo-edom', opciones: [
          { id: 'sur', t: 'Por el sur, hasta Ezión-geber', estado: { view: V.transjordania, capas: ['r-edom', 'r-moab', 'r-amon'], lugares: ['r-monte-hor', 'ezion-geber', 'r-zered', 'r-arnon', 'hesbon', 'r-llanuras-moab'], trazos: ['ex-cades-hor', 'ex-rodeo-edom', 'ex-moab'] },
            nota: 'Bajando por el Arabá «camino del Mar Rojo» (Nm 21:4) hasta Ezión-geber y subiendo por el borde oriental del desierto, fuera de Edom y de Moab (Dt 2:8).' },
          { id: 'punon', t: 'Por el Arabá y Punón', estado: { view: V.transjordania, capas: ['r-edom', 'r-moab', 'r-amon'], lugares: ['r-monte-hor', 'r-punon', 'r-zered', 'dibon', 'hesbon', 'r-llanuras-moab'], trazos: ['ex-cades-hor', 'ex-moab'] },
            nota: 'Según Números 33:41-44, desde el monte Hor por Zalmona, Punón y Obot hasta Ije-abarim, en la frontera de Moab. Algunos lo leen como un paso por el norte de Edom, entre el Arabá y la meseta.' }
        ] } },
        cita('Deuteronomio 2:1-8', 'Luego volvimos y salimos al desierto, camino del Mar Rojo, como Jehová me había dicho; y rodeamos el monte de Seir por mucho tiempo. Y Jehová me habló, diciendo: Bastante habéis rodeado este monte; volveos al norte. Y manda al pueblo, diciendo: Pasando vosotros por el territorio de vuestros hermanos los hijos de Esaú, que habitan en Seir, ellos tendrán miedo de vosotros; mas vosotros guardaos mucho. No os metáis con ellos, porque no os daré de su tierra ni aun lo que cubre la planta de un pie; porque yo he dado por heredad a Esaú el monte de Seir. Compraréis de ellos por dinero los alimentos, y comeréis; y también compraréis de ellos el agua, y beberéis; pues Jehová tu Dios te ha bendecido en toda obra de tus manos; él sabe que andas por este gran desierto; estos cuarenta años Jehová tu Dios ha estado contigo, y nada te ha faltado. Y nos alejamos del territorio de nuestros hermanos los hijos de Esaú, que habitaban en Seir, por el camino del Arabá desde Elat y Ezión-geber; y volvimos, y tomamos el camino del desierto de Moab.')
      ],
      texto: [
        'La última etapa del viaje llevó a Israel desde la frontera de Edom hasta las llanuras de Moab, frente a Jericó. Las estaciones de la ruta V contaron lo que pasó en el camino: la muerte de Aarón, las serpientes, las victorias sobre Sehón y Og, y Balaam. Esta estación mira el camino en el mapa.',
        { h: 'Dos descripciones del mismo camino' },
        'El texto describe este tramo de dos maneras. Números 21 y Deuteronomio 2 dicen que Israel salió del monte Hor «camino del Mar Rojo, para rodear la tierra de Edom» (Nm 21:4), y pasó por Elat y Ezión-geber antes de subir por el camino del desierto de Moab (Dt 2:8). Números 33, en cambio, nombra Zalmona, Punón y Obot, en el Arabá al norte del golfo. El selector del mapa muestra las dos lecturas.',
        'No se trata de una contradicción. Números 33 es una lista de campamentos, no de todos los caminos recorridos, y el pueblo pudo pasar por los dos lugares en distintos momentos. Además, la ubicación del monte Hor y de la frontera de Edom en esa época se discute. Lo que el texto deja claro es que Israel no atravesó el territorio de Edom ni el de Moab, porque Dios se lo había prohibido.',
        { h: 'Punón y el cobre' },
        'Punón se identifica con Feinán, en el lado oriental del Arabá, uno de los centros de minería de cobre más grandes del mundo antiguo. Toda la región del Arabá, desde Feinán hasta Timna, cerca de Ezión-geber, estaba llena de minas y hornos de fundición. Es significativo que la serpiente de bronce, hecha de una aleación de cobre, aparezca en el relato justamente en esta etapa del viaje.',
        { h: 'Los arroyos' },
        'Deuteronomio marca el avance cruzando dos arroyos que bajan hacia el mar Muerto por cañones profundos. El Zered, hoy Wadi el-Hasa, era la frontera entre Edom y Moab; cruzarlo marcó el fin de los treinta y ocho años (Dt 2:13-14). El Arnón, hoy Wadi el-Mujib, era la frontera norte de Moab; al cruzarlo, Israel entró en la tierra de Sehón y comenzó la conquista. Un antiguo canto citado en Números lo recuerda: «Lo que hizo en el Mar Rojo, y en los arroyos de Arnón» (Nm 21:14).'
      ],
      pensar: 'Israel tuvo que rodear Edom en lugar de atravesarlo, aunque eso alargó el camino. ¿Has tenido que tomar un camino más largo por respetar algo que Dios estableció? ¿Qué aprendiste?'
    },
    {
      id: 'sobrevivir', n: 'Cómo sobrevivir en el desierto', ref: 'Éxodo 15:22; 16:35; 17:1-6; Números 20:2-11; Deuteronomio 2:7; 8:2-4, 15-16; 29:5; Nehemías 9:19-21', fecha: [-1446, -1406],
      visual: [
        tabla({
          titulo: 'Lo que necesitaba el pueblo en el desierto',
          cab: ['Necesidad', 'Cantidad aproximada por día', 'Cómo la cubrió Dios'],
          filas: [
            ['Agua para beber', 'Unos 4 a 6 millones de litros para dos millones de personas', 'Fuentes, pozos y el agua de la roca (Éx 17:6; Nm 20:11; 21:16)'],
            ['Agua para el ganado', 'Mucho más que para las personas', '«Bebió la congregación, y sus bestias» (Nm 20:11)'],
            ['Alimento', 'Unos 4,4 millones de litros de maná (un gomer por persona)', 'Maná cada mañana durante cuarenta años (Éx 16:35)'],
            ['Ropa y calzado', 'Cuarenta años de uso', '«Vuestros vestidos no se han envejecido sobre vosotros» (Dt 29:5)'],
            ['Salud', 'Calor extremo, marchas, serpientes', '«No hubo en sus tribus enfermo» al salir (Sal 105:37)'],
            ['Guía y protección', 'Día y noche', 'La columna de nube y de fuego (Neh 9:19)']
          ],
          nota: 'Cantidades estimadas con las cifras del texto y la medida del gomer (unos 2,2 litros). Sirven para mostrar la escala del cuidado de Dios, no como datos exactos.'
        }),
        img('img/ex-desierto-calor.webp', 'Una larga caravana de familias israelitas con rebaños avanza bajo un sol abrasador por un valle de roca y arena entre montañas peladas del desierto del Sinaí; el aire tiembla por el calor', '«Desierto grande y espantoso… y de sed, donde no había agua» (Dt 8:15).')
      ],
      texto: [
        'El desierto del Sinaí recibe menos de cien milímetros de lluvia al año, y en algunas zonas casi nada. En verano, la temperatura supera los cuarenta grados a la sombra, que casi no existe; en invierno, las noches en las montañas del sur pueden bajar de cero. Hoy, unas pocas decenas de miles de beduinos viven en toda la península con sus rebaños, moviéndose entre fuentes y pozos que conocen de memoria.',
        { h: 'La escala del problema' },
        'Dos millones de personas con su ganado no podían sobrevivir allí con lo que el desierto daba. La tabla hace algunas cuentas aproximadas: solo para beber, el pueblo necesitaba millones de litros de agua cada día, más que cualquier fuente del Sinaí. Ninguna planificación humana habría podido sostener a esa multitud durante cuarenta años. Por eso el relato no oculta la dificultad: la usa para mostrar el cuidado de Dios.',
        { h: 'Nada te ha faltado' },
        'Al final del viaje, Moisés lo resumió: «estos cuarenta años Jehová tu Dios ha estado contigo, y nada te ha faltado» (Dt 2:7). Y otra vez: «Tu vestido nunca se envejeció sobre ti, ni el pie se te ha hinchado en estos cuarenta años» (Dt 8:4). Los levitas, siglos después, oraban lo mismo, y agregaban algo más: «enviaste tu buen Espíritu para enseñarles, y no retiraste tu maná de su boca, y agua les diste para su sed» (Neh 9:20).',
        { h: 'Para que supieras' },
        'Moisés también explicó por qué Dios eligió ese camino: para afligirlos, para probarlos «para saber lo que había en tu corazón», y para enseñarles a vivir de cada palabra que sale de la boca de Dios (Dt 8:2-3). Y agrega algo que suele olvidarse: todo eso fue «para a la postre hacerte bien» (Dt 8:16). El desierto no fue un castigo sin sentido, sino una escuela donde un pueblo de esclavos aprendió a depender de Dios.',
        { ejercicio: {
          pregunta: 'Según Deuteronomio 8, ¿para qué llevó Dios a Israel por el desierto?',
          opciones: [
            { t: 'Para castigarlos hasta que todos murieran.', ok: false, por_que: 'La generación incrédula murió en el desierto, pero Moisés habla a la nueva generación y dice que el propósito era «a la postre hacerte bien» (Dt 8:16).' },
            { t: 'Para probar su corazón y enseñarles a vivir de la palabra de Dios.', ok: true, por_que: 'Moisés dice que Dios los afligió y los probó para saber lo que había en su corazón, y para enseñarles que no solo de pan vive el hombre (Dt 8:2-3).' },
            { t: 'Porque Moisés no conocía bien el camino a Canaán.', ok: false, por_que: 'Moisés había vivido cuarenta años en esa región, y la nube guiaba al pueblo. El camino lo eligió Dios (Éx 13:17-18).' }
          ],
          explicacion: 'El desierto fue una escuela de dependencia. Jesús citó Deuteronomio 8:3 cuando fue tentado en el desierto (Mt 4:4).'
        } }
      ],
      pensar: 'Moisés dijo que en cuarenta años de desierto nada les faltó. Si miras hacia atrás en tu vida, ¿en qué momentos difíciles puedes decir lo mismo?'
    }
  ];

  /* ---------------- VII. El Éxodo en toda la Biblia ---------------- */
  const biblia = [
    {
      id: 'que-te-saque', n: '«Yo soy Jehová tu Dios, que te saqué de Egipto»', ref: 'Éxodo 20:2; Levítico 11:45; Deuteronomio 6:20-23; 26:5-9; Josué 24:17; Jueces 6:8; Oseas 13:4; Amós 2:10; Miqueas 6:4', fecha: -1446,
      visual: [
        tabla({
          titulo: 'El Éxodo en la memoria de Israel',
          cab: ['Dónde', 'Cómo se recuerda', 'Texto'],
          filas: [
            ['Los diez mandamientos', 'Presentación de Dios', 'Éx 20:2'],
            ['La santidad', '«Que os hago subir de la tierra de Egipto… seréis, pues, santos»', 'Lv 11:45'],
            ['La enseñanza a los hijos', '«Nosotros éramos siervos de Faraón en Egipto»', 'Dt 6:20-23'],
            ['Las primicias', 'Una confesión de fe que repetía cada familia', 'Dt 26:5-9'],
            ['La renovación del pacto', 'Josué y el pueblo en Siquem', 'Jos 24:17'],
            ['Los jueces', 'Un profeta en tiempos de Gedeón', 'Jue 6:8'],
            ['Los profetas', 'Oseas, Amós y Miqueas', 'Os 13:4; Am 2:10; Mi 6:4']
          ],
          nota: 'La frase «te saqué de la tierra de Egipto» o sus variantes aparece más de cien veces en el Antiguo Testamento.'
        }),
        cita('Deuteronomio 26:5-9', 'Entonces hablarás y dirás delante de Jehová tu Dios: Un arameo a punto de perecer fue mi padre, el cual descendió a Egipto y habitó allí con pocos hombres, y allí creció y llegó a ser una nación grande, fuerte y numerosa; y los egipcios nos maltrataron y nos afligieron, y pusieron sobre nosotros dura servidumbre. Y clamamos a Jehová el Dios de nuestros padres; y Jehová oyó nuestra voz, y vio nuestra aflicción, nuestro trabajo y nuestra opresión; y Jehová nos sacó de Egipto con mano fuerte, con brazo extendido, con grande espanto, y con señales y con milagros; y nos trajo a este lugar, y nos dio esta tierra, tierra que fluye leche y miel.')
      ],
      texto: [
        'Si se le preguntaba a un israelita quién era su Dios, la respuesta no era una definición filosófica, sino una historia: el Dios que nos sacó de Egipto. Así se presentó Dios en el Sinaí: «Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre» (Éx 20:2). Y así lo recordó Israel durante toda su historia. La tabla muestra algunos de esos lugares.',
        { h: 'Una confesión de fe' },
        'Cuando un israelita llevaba las primicias de su cosecha al santuario, debía decir una confesión de fe que muestra la pestaña de pasaje: «Un arameo a punto de perecer fue mi padre… y los egipcios nos maltrataron… y clamamos a Jehová… y Jehová nos sacó de Egipto con mano fuerte, con brazo extendido» (Dt 26:5-8). La fe de Israel se recitaba como un relato de lo que Dios había hecho.',
        { h: 'Para que lo cuenten a sus hijos' },
        'La ley mandaba que cada generación contara el Éxodo a la siguiente. Cuando los hijos preguntaran qué significaban la Pascua, los primogénitos o los mandamientos, los padres debían responder con la historia: «Nosotros éramos siervos de Faraón en Egipto, y Jehová nos sacó de Egipto con mano poderosa» (Dt 6:21). Hasta hoy, en la cena de Pascua, las familias judías relatan la salida de Egipto.',
        { h: 'La base de la obediencia y de la ética' },
        'El Éxodo era también el fundamento de la conducta. Israel debía ser santo porque Dios lo había sacado de Egipto (Lv 11:45). Debía amar al extranjero porque había sido extranjero en Egipto (Dt 10:19). Debía dar descanso a sus siervos porque había sido siervo (Dt 5:15). Debía liberar a los esclavos hebreos en el séptimo año, y no despedirlos con las manos vacías, porque Dios lo había rescatado (Dt 15:12-15). La memoria de la redención formaba la manera de tratar a los demás.',
        { h: 'Cuando se olvida' },
        'Por eso, cuando Israel se apartaba de Dios, los profetas le recordaban el Éxodo. Oseas: «Mas yo soy Jehová tu Dios desde la tierra de Egipto; no conocerás, pues, otro dios fuera de mí, ni otro salvador sino a mí» (Os 13:4). Miqueas: «yo te hice subir de la tierra de Egipto, y de la casa de servidumbre te redimí» (Mi 6:4). El pecado de Israel era, en el fondo, un olvido de su propia historia.'
      ],
      pensar: 'Israel conocía a Dios por lo que había hecho en su historia. Si alguien te preguntara quién es tu Dios, ¿qué historia de su obra en tu vida podrías contar?'
    },
    {
      id: 'salmos', n: 'El Éxodo en los Salmos', ref: 'Salmos 77:16-20; 78; 95:7-11; 105:23-45; 106:7-33; 114; 136:10-16', fecha: -1446,
      visual: [
        tabla({
          titulo: 'Los salmos del Éxodo',
          cab: ['Salmo', 'Cómo cuenta el Éxodo', 'Para qué'],
          filas: [
            ['77', 'El camino de Dios en el mar', 'Consuelo en la angustia'],
            ['78', 'Las maravillas y las rebeliones del desierto', 'Enseñar a la nueva generación a no ser como sus padres'],
            ['95', 'Masah y Meriba', 'Advertencia: «No endurezcáis vuestro corazón»'],
            ['105', 'Las plagas, la nube, el maná y el agua', 'Alabanza por la fidelidad de Dios a su pacto'],
            ['106', 'Las quejas, el becerro, Coré, Baal-peor, Meriba', 'Confesión de los pecados del pueblo'],
            ['114', 'El mar huyó y el Jordán se volvió atrás', 'Alabanza; se cantaba en la Pascua'],
            ['136', 'Del mar Rojo a Sehón y Og', '«Porque para siempre es su misericordia»']
          ],
          nota: 'Los salmos 113 a 118 se cantaban en la Pascua; probablemente son el himno que Jesús y sus discípulos cantaron después de la última cena (Mt 26:30).'
        }),
        cita('Salmo 114', 'Cuando salió Israel de Egipto, La casa de Jacob del pueblo extranjero, Judá vino a ser su santuario, E Israel su señorío. El mar lo vio, y huyó; El Jordán se volvió atrás. Los montes saltaron como carneros, Los collados como corderitos. ¿Qué tuviste, oh mar, que huiste? ¿Y tú, oh Jordán, que te volviste atrás? Oh montes, ¿por qué saltasteis como carneros, Y vosotros, collados, como corderitos? A la presencia de Jehová tiembla la tierra, A la presencia del Dios de Jacob, El cual cambió la peña en estanque de aguas, Y en fuente de aguas la roca.')
      ],
      texto: [
        'El Éxodo es uno de los temas más cantados del libro de los Salmos. Israel no solo lo recordaba en la ley y en los profetas: lo cantaba en el culto. La tabla reúne los salmos que cuentan la historia, y muestra que cada uno la usa con un propósito distinto.',
        { h: 'Alabanza' },
        'Algunos salmos celebran el Éxodo como la gran obra de Dios. El Salmo 114, que muestra la pestaña de pasaje, es un poema breve y lleno de imágenes: cuando Israel salió de Egipto, «el mar lo vio, y huyó; el Jordán se volvió atrás. Los montes saltaron como carneros» (Sal 114:3-4). Toda la creación reacciona ante la presencia de Dios. El Salmo 136 cuenta la historia con un estribillo que se repite veintiséis veces: «Al que dividió el Mar Rojo en partes, porque para siempre es su misericordia» (Sal 136:13).',
        { h: 'Confesión' },
        'Otros salmos usan el Éxodo para confesar el pecado. El Salmo 106 repasa cada rebelión del desierto, de las aguas de Meriba al becerro y a Baal-peor, y reconoce: «Pecamos nosotros, como nuestros padres» (Sal 106:6). El Salmo 78 cuenta la historia a la nueva generación «a fin de que pongan en Dios su confianza… y no sean como sus padres, generación contumaz y rebelde» (Sal 78:7-8).',
        { h: 'Advertencia' },
        'El Salmo 95 comienza como una invitación a la alabanza y termina con una advertencia: «Si oyereis hoy su voz, no endurezcáis vuestro corazón, como en Meriba, como en el día de Masah en el desierto» (Sal 95:7-8). Dios dice que estuvo cuarenta años disgustado con aquella generación, y juró que no entrarían en su reposo. Hebreos toma este salmo y lo aplica a la iglesia, como muestra la estación «Estas cosas les acontecieron como ejemplo».',
        { h: 'Esperanza' },
        'En el Salmo 77, el salmista está en angustia y siente que Dios lo ha olvidado. Su consuelo es recordar el Éxodo: «En el mar fue tu camino, y tus sendas en las muchas aguas; y tus pisadas no fueron conocidas. Condujiste a tu pueblo como ovejas por mano de Moisés y de Aarón» (Sal 77:19-20). Dios abrió camino donde no había camino, y sus pisadas no se veían, pero estaba allí.'
      ],
      pensar: 'El salmista del Salmo 77 se consoló recordando que Dios abrió camino en el mar, aunque sus pisadas no se veían. ¿Qué obra de Dios en el pasado te puede sostener en una angustia presente?'
    },
    {
      id: 'nuevo-exodo', n: 'El nuevo éxodo en los profetas', ref: 'Isaías 11:15-16; 40:3-5; 43:16-21; 51:9-11; 52:11-12; Jeremías 16:14-15; 23:7-8; Oseas 2:14-15; 11:1; Mateo 2:15; 3:3', fecha: -1446,
      visual: [
        cita('Isaías 43:16-19', 'Así dice Jehová, el que abre camino en el mar, y senda en las aguas impetuosas; el que saca carro y caballo, ejército y fuerza; caen juntamente para no levantarse; fenecen, como pábilo quedan apagados. No os acordéis de las cosas pasadas, ni traigáis a memoria las cosas antiguas. He aquí que yo hago cosa nueva; pronto saldrá a luz; ¿no la conoceréis? Otra vez abriré camino en el desierto, y ríos en la soledad.'),
        tabla({
          titulo: 'El primer éxodo y el nuevo éxodo',
          cab: ['El Éxodo de Egipto', 'El nuevo éxodo anunciado', 'Texto'],
          filas: [
            ['Dios abre camino en el mar', '«Otra vez abriré camino en el desierto, y ríos en la soledad»', 'Is 43:16-19'],
            ['Israel sale de prisa, de noche', '«No saldréis apresurados… porque Jehová irá delante de vosotros»', 'Is 52:12'],
            ['Un camino en el desierto hacia Canaán', '«Preparad camino a Jehová»', 'Is 40:3'],
            ['El seco cruce del mar', 'Dios secará la lengua del mar de Egipto para el remanente', 'Is 11:15-16'],
            ['Israel, el hijo llamado de Egipto', 'Jesús, el Hijo llamado de Egipto', 'Os 11:1; Mt 2:15'],
            ['Juramento por el Dios del Éxodo', 'Juramento por el Dios que trae a Israel de todas las tierras', 'Jer 16:14-15; 23:7-8']
          ],
          nota: 'Los profetas anuncian el regreso del exilio, la obra del Mesías y la restauración final de Israel como un nuevo éxodo.'
        })
      ],
      texto: [
        'Cuando Israel perdió su tierra y fue llevado al exilio, los profetas no inventaron un lenguaje nuevo para hablar de la salvación futura. Usaron el del Éxodo. Dios, que había sacado a su pueblo de Egipto, lo iba a sacar otra vez: de Babilonia, de las naciones, del pecado. Los estudiosos llaman a este tema «el nuevo éxodo».',
        { h: 'Algo nuevo, como lo antiguo' },
        'Isaías lo dice con una paradoja que muestra la pestaña de pasaje. Primero recuerda al Dios «que abre camino en el mar» (Is 43:16) y que destruyó carros y caballos. Luego dice: «No os acordéis de las cosas pasadas… He aquí que yo hago cosa nueva… Otra vez abriré camino en el desierto, y ríos en la soledad» (Is 43:18-19). La nueva salvación sería tan grande que haría olvidar la primera, pero tendría su misma forma.',
        { h: 'Preparad camino' },
        'Isaías 40 anuncia una voz que clama en el desierto: «Preparad camino a Jehová» (Is 40:3). Es el camino por el que Dios volvería a guiar a su pueblo, como en el desierto del Sinaí. Los cuatro evangelios aplican estas palabras a Juan el Bautista, que preparó el camino de Jesús junto al Jordán, en el desierto (Mt 3:3). El nuevo éxodo comenzó con Cristo.',
        { h: 'De Egipto llamé a mi Hijo' },
        'Oseas recordó el amor de Dios por Israel: «Cuando Israel era muchacho, yo lo amé, y de Egipto llamé a mi hijo» (Os 11:1). Mateo vio en el regreso de Jesús niño desde Egipto el cumplimiento de esas palabras (Mt 2:15). Jesús revive la historia de Israel: sale de Egipto, pasa por las aguas en su bautismo, es probado cuarenta días en el desierto y responde con Deuteronomio. Donde Israel fracasó, el Hijo fue fiel.',
        { h: 'Un éxodo todavía futuro' },
        'Jeremías anunció un tiempo en que no se juraría más «Vive Jehová que hizo subir a los hijos de Israel de la tierra de Egipto», sino por el Dios que los trajo «de todas las tierras adonde yo los había echado; y habitarán en su tierra» (Jer 23:7-8). El regreso de Babilonia fue un cumplimiento parcial; la reunión final de Israel en su tierra, con un corazón nuevo, espera la venida del Mesías. El exilio y los retornos y Los últimos tiempos estudian esa esperanza.',
        ir('Ver los retornos y las promesas en El exilio y los retornos', '../../exilio/')
      ],
      pensar: 'Los profetas esperaban un nuevo éxodo más grande que el primero. ¿De qué esclavitud te sacó Cristo, y hacia qué promesa te está llevando?'
    },
    {
      id: 'cristo', n: 'Cristo, nuestra Pascua y el pan del cielo', ref: 'Lucas 9:31; Juan 1:14, 29; 3:14-15; 6:31-35; 19:36; 1 Corintios 5:7; 10:4; Hebreos 3:1-6; Hechos 3:22; 7:37', fecha: -1446,
      visual: [
        tabla({
          titulo: 'El Éxodo cumplido en Cristo',
          cab: ['En el Éxodo', 'En Cristo', 'Texto'],
          filas: [
            ['El cordero de la Pascua', '«Nuestra pascua, que es Cristo, ya fue sacrificada»', '1 Co 5:7; Jn 1:29'],
            ['La sangre en las puertas', 'La sangre del nuevo pacto', 'Éx 12:13; Lc 22:20'],
            ['El maná', '«Yo soy el pan de vida»', 'Éx 16; Jn 6:35'],
            ['El agua de la roca', '«La roca era Cristo»', 'Éx 17:6; 1 Co 10:4'],
            ['La serpiente levantada', 'El Hijo del Hombre levantado', 'Nm 21:9; Jn 3:14'],
            ['El tabernáculo y la gloria', '«Habitó entre nosotros… y vimos su gloria»', 'Éx 40:34; Jn 1:14'],
            ['Moisés, profeta y mediador', 'El profeta como Moisés; el mediador del nuevo pacto', 'Dt 18:15; Hch 3:22; He 9:15'],
            ['La columna de fuego', '«Yo soy la luz del mundo»', 'Éx 13:21; Jn 8:12']
          ],
          nota: 'Estas correspondencias las establece el propio Nuevo Testamento. Otras figuras del Éxodo se estudiarán en Tipos y figuras de Cristo, en preparación.'
        }),
        img('img/ex-transfiguracion.webp', 'En la cumbre de un monte al anochecer, dos hombres de aspecto antiguo, uno anciano de barba blanca y otro enjuto de manto de pelo, rodeados de luz, conversan con una figura central de espaldas envuelta en un resplandor blanco; abajo, tres discípulos se cubren los ojos', '«Hablaban de su partida, que iba Jesús a cumplir en Jerusalén» (Lc 9:31).')
      ],
      texto: [
        'En el monte de la transfiguración, Moisés y Elías hablaron con Jesús «de su partida, que iba Jesús a cumplir en Jerusalén» (Lc 9:31). La palabra griega que Lucas usa para «partida» es exodos. La muerte, la resurrección y la ascensión de Jesús son el gran éxodo, del cual el de Egipto era una sombra.',
        { h: 'Cristo, nuestra Pascua' },
        'Jesús murió en la Pascua. Juan el Bautista lo había presentado como «el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29), y Juan el evangelista observa que no le quebraron las piernas en la cruz, «para que se cumpliese la Escritura: No será quebrado hueso suyo» (Jn 19:36), la regla del cordero pascual (Éx 12:46). Pablo lo dice sin rodeos: «nuestra pascua, que es Cristo, ya fue sacrificada por nosotros» (1 Co 5:7). Así como la sangre del cordero libró a los primogénitos de Israel, la sangre de Cristo libra del juicio a quien confía en Él.',
        { h: 'El pan, el agua y la serpiente' },
        'Jesús mismo tomó las figuras del desierto para explicar quién era. Después de multiplicar los panes, la gente le recordó que Moisés les había dado maná, y Jesús respondió: «Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre» (Jn 6:35). A Nicodemo le explicó su muerte con la serpiente de bronce (Jn 3:14-15). Pablo agregó la roca que daba agua: «la roca era Cristo» (1 Co 10:4). Todo lo que sostuvo a Israel en el desierto apuntaba a lo que Cristo da a su pueblo.',
        { h: 'Un profeta como Moisés' },
        'Moisés había anunciado: «Profeta de en medio de ti, de tus hermanos, como yo, te levantará Jehová tu Dios; a él oiréis» (Dt 18:15). Pedro y Esteban afirmaron que ese profeta es Jesús (Hch 3:22; 7:37). Pero Jesús es más que Moisés: Moisés fue fiel como siervo en la casa de Dios; Cristo, como Hijo (He 3:5-6). Moisés vio la gloria de Dios de espaldas; en Cristo, «vimos su gloria» (Jn 1:14), porque Él mismo es el Dios que se reveló a Moisés.',
        ir('Ver «Figuras de Cristo» en La persona y obra de Cristo', '../../persona-y-obra-de-cristo/#antes/5')
      ],
      pensar: 'Todo lo que sostuvo a Israel en el desierto, el cordero, el pan, el agua y la luz, se cumple en Cristo. ¿Cuál de estas imágenes describe mejor lo que Cristo es para ti hoy?'
    },
    {
      id: 'ejemplos', n: '«Estas cosas les acontecieron como ejemplo»', ref: '1 Corintios 10:1-13; Hebreos 3:7–4:11; Judas 5', fecha: [-1446, -1406],
      visual: [
        cita('1 Corintios 10:1-12', 'Porque no quiero, hermanos, que ignoréis que nuestros padres todos estuvieron bajo la nube, y todos pasaron el mar; y todos en Moisés fueron bautizados en la nube y en el mar, y todos comieron el mismo alimento espiritual, y todos bebieron la misma bebida espiritual; porque bebían de la roca espiritual que los seguía, y la roca era Cristo. Pero de los más de ellos no se agradó Dios; por lo cual quedaron postrados en el desierto. Mas estas cosas sucedieron como ejemplos para nosotros, para que no codiciemos cosas malas, como ellos codiciaron. Ni seáis idólatras, como algunos de ellos, según está escrito: Se sentó el pueblo a comer y a beber, y se levantó a jugar. Ni forniquemos, como algunos de ellos fornicaron, y cayeron en un día veintitrés mil. Ni tentemos al Señor, como también algunos de ellos le tentaron, y perecieron por las serpientes. Ni murmuréis, como algunos de ellos murmuraron, y perecieron por el destructor. Y estas cosas les acontecieron como ejemplo, y están escritas para amonestarnos a nosotros, a quienes han alcanzado los fines de los siglos. Así que, el que piensa estar firme, mire que no caiga.'),
        tabla({
          titulo: 'Las advertencias de Pablo en 1 Corintios 10',
          cab: ['Lo que hicieron', 'Dónde', 'La advertencia'],
          filas: [
            ['Codiciaron', 'Kibrot-hataava (Nm 11)', '«Para que no codiciemos cosas malas»'],
            ['Fueron idólatras', 'El becerro de oro (Éx 32)', '«Ni seáis idólatras»'],
            ['Cometieron inmoralidad', 'Baal-peor (Nm 25)', '«Ni forniquemos»'],
            ['Tentaron al Señor', 'Las serpientes (Nm 21)', '«Ni tentemos al Señor»'],
            ['Murmuraron', 'Coré y la plaga (Nm 16)', '«Ni murmuréis»']
          ],
          nota: 'Pablo concluye: «el que piensa estar firme, mire que no caiga» (1 Co 10:12), y promete que Dios dará la salida en la tentación (1 Co 10:13).'
        })
      ],
      texto: [
        'Dos pasajes del Nuevo Testamento toman la historia del desierto como advertencia directa para la iglesia: 1 Corintios 10 y Hebreos 3–4. Los dos parten de lo mismo: los israelitas que salieron de Egipto vivieron experiencias espirituales extraordinarias, y aun así la mayoría no entró en la tierra.',
        { h: 'Bautizados en la nube y en el mar' },
        'Pablo escribe a una iglesia llena de dones espirituales que se sentía segura. Les recuerda que todos los israelitas «estuvieron bajo la nube, y todos pasaron el mar; y todos en Moisés fueron bautizados en la nube y en el mar, y todos comieron el mismo alimento espiritual, y todos bebieron la misma bebida espiritual» (1 Co 10:1-4). Habían tenido su propio bautismo y su propia cena del Señor. «Pero de los más de ellos no se agradó Dios; por lo cual quedaron postrados en el desierto» (1 Co 10:5).',
        'La tabla muestra los cinco pecados que Pablo enumera, cada uno con su episodio del desierto. Y luego explica por qué se escribieron: «estas cosas les acontecieron como ejemplo, y están escritas para amonestarnos a nosotros, a quienes han alcanzado los fines de los siglos» (1 Co 10:11). Haber tenido experiencias con Dios no es garantía de perseverar. Por eso: «el que piensa estar firme, mire que no caiga» (1 Co 10:12). Pero la advertencia termina con una promesa: Dios es fiel y no dejará que seamos tentados más de lo que podemos resistir, sino que dará la salida (1 Co 10:13).',
        { h: 'Hoy, si oyereis su voz' },
        'Hebreos cita el Salmo 95 y lo aplica a sus lectores, cristianos de origen judío tentados a volver atrás: «Si oyereis hoy su voz, no endurezcáis vuestros corazones, como en la provocación» (He 3:7-8). Los que salieron de Egipto no entraron en el reposo de Dios «a causa de incredulidad» (He 3:19). Pero «queda un reposo para el pueblo de Dios» (He 4:9), un reposo que no es Canaán sino la vida plena con Dios. Por eso la exhortación: «Procuremos, pues, entrar en aquel reposo, para que ninguno caiga en semejante ejemplo de desobediencia» (He 4:11).',
        { h: 'Exhortarse cada día' },
        'Hebreos da también el remedio: «exhortaos los unos a los otros cada día, entre tanto que se dice: Hoy; para que ninguno de vosotros se endurezca por el engaño del pecado» (He 3:13). La generación del desierto se contagió la queja y la incredulidad; la iglesia debe contagiarse la fe. Caleb y Josué muestran que es posible caminar en el mismo desierto que los demás y, sin embargo, ser «perfectos en pos de Jehová» (Nm 32:12).',
        { ejercicio: {
          pregunta: '¿Qué enseña Pablo en 1 Corintios 10 con la historia del desierto?',
          opciones: [
            { t: 'Que los sacramentos y las experiencias espirituales garantizan la salvación final.', ok: false, por_que: 'Es lo contrario: todos los israelitas pasaron el mar y comieron el maná, y la mayoría cayó en el desierto (1 Co 10:5).' },
            { t: 'Que haber vivido experiencias con Dios no impide caer, y por eso hay que velar y confiar en la fidelidad de Dios.', ok: true, por_que: 'Pablo advierte «el que piensa estar firme, mire que no caiga» y promete que Dios dará la salida en la tentación (1 Co 10:12-13).' },
            { t: 'Que la historia del Éxodo es una alegoría sin base histórica.', ok: false, por_que: 'Pablo dice que estas cosas «les acontecieron»: las trata como hechos reales que sirven de ejemplo (1 Co 10:11).' }
          ],
          explicacion: 'La historia del desierto llama a la perseverancia: la fe se demuestra en la obediencia de cada día, con la confianza puesta en un Dios fiel.'
        } }
      ],
      pensar: 'Los israelitas tuvieron grandes experiencias espirituales y aun así cayeron por la incredulidad y la queja. ¿Qué te ayuda a perseverar en la fe más allá de las experiencias?'
    },
    {
      id: 'cantico-cordero', n: 'El cántico de Moisés y del Cordero', ref: 'Apocalipsis 15:1-4; 8:6–9:21; 16:1-21; Éxodo 15:1-18', fecha: -1446,
      visual: [
        cita('Apocalipsis 15:2-4', 'Vi también como un mar de vidrio mezclado con fuego; y a los que habían alcanzado la victoria sobre la bestia y su imagen, y su marca y el número de su nombre, en pie sobre el mar de vidrio, con las arpas de Dios. Y cantan el cántico de Moisés siervo de Dios, y el cántico del Cordero, diciendo: Grandes y maravillosas son tus obras, Señor Dios Todopoderoso; justos y verdaderos son tus caminos, Rey de los santos. ¿Quién no te temerá, oh Señor, y glorificará tu nombre? pues sólo tú eres santo; por lo cual todas las naciones vendrán y te adorarán, porque tus juicios se han manifestado.'),
        tabla({
          titulo: 'Las plagas de Egipto y las del Apocalipsis',
          cab: ['En Egipto', 'En Apocalipsis'],
          filas: [
            ['Agua hecha sangre (Éx 7:20)', 'El mar y los ríos se vuelven sangre (Ap 8:8; 16:3-4)'],
            ['Úlceras (Éx 9:10)', 'Úlcera maligna sobre los que tienen la marca (Ap 16:2)'],
            ['Granizo y fuego (Éx 9:23)', 'Granizo y fuego mezclados con sangre (Ap 8:7; 16:21)'],
            ['Langostas (Éx 10:13)', 'Langostas que salen del abismo (Ap 9:3)'],
            ['Tinieblas (Éx 10:22)', 'Tinieblas sobre el trono de la bestia (Ap 16:10)'],
            ['Ranas (Éx 8:6)', 'Espíritus inmundos a manera de ranas (Ap 16:13)'],
            ['Faraón endurece su corazón', '«No se arrepintieron de sus obras» (Ap 16:11)']
          ],
          nota: 'Apocalipsis describe los juicios del fin con las imágenes de las plagas de Egipto. La interpretación de estos juicios se estudia en Apocalipsis y en Los últimos tiempos.'
        })
      ],
      texto: [
        'La historia del Éxodo no termina en el desierto ni en el Nuevo Testamento. Reaparece en el último libro de la Biblia, cuando Dios lleve a cabo la redención final de su pueblo y el juicio final sobre los poderes que lo oprimen.',
        { h: 'Las plagas del fin' },
        'Las trompetas y las copas del Apocalipsis usan las imágenes de las plagas de Egipto: aguas convertidas en sangre, úlceras, granizo con fuego, langostas, tinieblas y espíritus como ranas. La tabla compara las dos series. Así como Dios juzgó a Faraón y a los dioses de Egipto para liberar a Israel, en la tribulación juzgará a la bestia y al sistema que persigue a los suyos. Y así como Faraón endureció su corazón, los hombres de ese tiempo «no se arrepintieron de sus obras» (Ap 16:11). Este recurso no entra en la interpretación de esos juicios, que se estudia en Apocalipsis y en Los últimos tiempos.',
        { h: 'Junto al mar de vidrio' },
        'Antes de las siete copas, Juan ve «como un mar de vidrio mezclado con fuego», y de pie sobre él a los que habían vencido a la bestia, con arpas de Dios. Y cantan «el cántico de Moisés siervo de Dios, y el cántico del Cordero» (Ap 15:2-3). La escena recuerda la orilla del mar Rojo, cuando Israel, recién liberado, cantó a Dios mientras el ejército de Faraón quedaba bajo las aguas.',
        { h: 'Un solo cántico' },
        'No son dos cánticos distintos, sino uno: el cántico de la redención, que Moisés comenzó junto al mar y que el Cordero completa. Su contenido es solo Dios: «Grandes y maravillosas son tus obras, Señor Dios Todopoderoso; justos y verdaderos son tus caminos, Rey de los santos» (Ap 15:3). Y termina con lo que anunciaba el cántico de Moisés: todas las naciones vendrán y adorarán delante de Él (Ap 15:4). El Dios que sacó a Israel de Egipto es el que reinará «eternamente y para siempre» (Éx 15:18).',
        { h: 'El último éxodo' },
        'Toda la Biblia puede leerse como la historia de un éxodo: Dios saca a su pueblo de la esclavitud, lo guía por el desierto y lo lleva a la tierra donde habitará con él. En Egipto, la esclavitud era de Faraón; en la cruz, Cristo nos libró de la esclavitud del pecado y de la muerte; en su venida, nos llevará a la tierra prometida definitiva, donde «el tabernáculo de Dios» estará con los hombres (Ap 21:3). El desierto tiene un final.',
        ir('Ver «Capítulo 15: El cántico de Moisés y del Cordero» en Apocalipsis', '../../apocalipsis/#comentario/19'),
        ir('Ver «Las siete copas de la ira» en Los últimos tiempos', '../../escatologia/#eventos/14')
      ],
      pensar: 'Israel cantó junto al mar Rojo; los redimidos cantarán junto al mar de vidrio. ¿Qué parte de ese cántico de redención puedes cantar ya hoy con tu vida?'
    }
  ];

  const P = window.__EX;
  delete window.__EX;
  delete window.__EX_H;
  const LINEA = { desde: -1530, hasta: -1400, hitos: [
    { a: -1526, t: 'Nace Moisés' }, { a: -1486, t: 'Huye a Madián' }, { a: -1446, t: 'El Éxodo y el Sinaí' },
    { a: [-1445, -1407], t: 'Los años en el desierto' }, { a: -1406, t: 'Muere Moisés en el Nebo' }
  ] };
  window.RUTA_DATA = {
    titulo: 'El Éxodo y el desierto',
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
      rotulos: window.EXODO_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'mundo', grupo: 'El Éxodo', n: 'I. El mundo del Éxodo', info: 'De José a Moisés, la fecha, los faraones, Egipto, cuántos salieron, la arqueología y el escenario', estaciones: P.mundo, linea: LINEA },
      { id: 'liberacion', grupo: 'El viaje', n: 'II. Moisés y la liberación', info: 'El nacimiento, Madián, la zarza, Faraón, las plagas, el corazón endurecido, la Pascua y la salida', estaciones: P.liberacion, linea: LINEA },
      { id: 'mar', grupo: 'El viaje', n: 'III. Del mar al Sinaí', info: 'El camino, la columna, el cruce del mar, el cántico, Mara, el maná y Refidim', estaciones: P.mar, linea: LINEA },
      { id: 'sinai', grupo: 'El viaje', n: 'IV. Un año en el Sinaí', info: 'El monte, el pacto, los mandamientos, el becerro, la gloria, el tabernáculo, el sacerdocio, el censo y la partida', estaciones: P.sinai, linea: LINEA },
      { id: 'desierto', grupo: 'El viaje', n: 'V. Cuarenta años en el desierto', info: 'Las codornices, los setenta, los espías, Cades, Coré, Meriba, Edom, la serpiente, Sehón y Og, Balaam y el Nebo', estaciones: P.desierto, linea: LINEA },
      { id: 'mapas', grupo: 'Mapas', n: 'VI. El Éxodo en el mapa', info: 'El viaje completo, Números 33, las rutas propuestas, Cades, el camino a Moab y la vida en el desierto', estaciones: mapas, linea: LINEA },
      { id: 'biblia', grupo: 'Temas', n: 'VII. El Éxodo en toda la Biblia', info: 'La memoria de Israel, los Salmos, los profetas, Cristo, las advertencias y el cántico del Cordero', estaciones: biblia, linea: LINEA }
    ]
  };
})();
