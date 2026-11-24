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
  const HAY = new Set(/*@@IMAGENES*/[]);
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
        cita('Éxodo 1:7-11', '@@ex/1/7-11')
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
        cita('Éxodo 2:1-10', '@@ex/2/1-10')
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
          rv: '@@ex/3/14' },
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
        cita('Éxodo 6:6-8', '@@ex/6/6-8', 'Siete promesas')
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
        cita('Éxodo 12:12-14', '@@ex/12/12-14'),
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
