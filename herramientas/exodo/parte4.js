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
        cita('Números 33:1-4', '@@nm/33/1-4')
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
        cita('Deuteronomio 2:1-8', '@@dt/2/1-8')
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
        cita('Deuteronomio 26:5-9', '@@dt/26/5-9')
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
        cita('Salmo 114', '@@sal/114/1-8')
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
        cita('Isaías 43:16-19', '@@is/43/16-19'),
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
        cita('1 Corintios 10:1-12', '@@1co/10/1-12'),
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
        cita('Apocalipsis 15:2-4', '@@ap/15/2-4'),
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
