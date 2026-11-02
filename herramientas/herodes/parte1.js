/* ==========================================================
   Recursos Bíblicos — La dinastía de Herodes · contenido de las rutas
   FUENTE de public/apps/dinastia-herodes/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/herodes_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica, sin nombrarla.
   Flavio Josefo (Antigüedades judías XIV–XX y La guerra de los judíos I–II), Nicolás de Damasco (a través de
   Josefo), Filón, Dion Casio, Macrobio, Tácito y Suetonio se usan como fuentes históricas, parafraseados,
   sin comillas ni burbuja. Las fechas siguen a Josefo, con la muerte de Herodes en el 4 a.C.; la otra
   postura (1 a.C.) va en la estación II.7.
   Este recurso continúa Entre los Testamentos (nº 86, ruta VI: Antípatro y Herodes en resumen) y El mundo
   judío en tiempos de Jesús (nº 91: Antipas, los herodianos y Agripa I en lo que importa para los
   evangelios); aquí se estudia la familia completa. El árbol interactivo vive en arbol/ (página auxiliar).
   La responsabilidad por la muerte de Jesús: los líderes y la multitud de Jerusalén de esa generación,
   Herodes, Pilato y los gentiles (Hch 4:27), y detrás de todos, los pecados de la humanidad.
   ========================================================== */
(() => {
  const V = {
    palestina: [[30.9, 34.2], [33.45, 36.5]],
    norte: [[32.2, 34.9], [33.95, 36.75]],
    galilea: [[32.45, 34.95], [33.35, 35.95]],
    judea: [[31.2, 34.55], [32.25, 35.65]],
    idumea: [[30.2, 34.2], [32.0, 35.9]],
    sur: [[29.9, 33.5], [32.3, 36.2]],
    mediterraneo: [[24.0, 2.0], [47.5, 40.0]],
    oriente: [[28.5, 26.0], [43.0, 38.5]]
  };
  // Las divisiones del tiempo de Jesús (capas de La tierra de Israel)
  const DIV = ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-idumea', 'nt-perea', 'nt-decapolis', 'nt-felipe'];
  const mapa = (estado, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, estado });
  const pasos = (lista, titulo = 'Mapa') => ({ tipo: 'mapa', titulo, pasos: lista });
  // Imágenes que ya existen en img/ (la lista la escribe herramientas/herodes_citas.py). Una imagen que falta
  // queda sin src y el motor muestra «Ilustración por generar» o «Foto por agregar».
  const HAY = new Set(/*@@IMAGENES*/[]);
  // Imágenes de otros recursos (../otro/img/…) que ya existen; una que todavía no se ha generado queda sin src.
  const EXT = new Set(/*@@EXTERNAS*/[]);
  const EMB = window.IMAGENES_EMBEBIDAS || {};   // demos sin servidor: { 'archivo': 'data:…' }
  const ruta = f => (f.startsWith('../') ? (EXT.has(f) ? { src: EMB[f] || f } : {}) : HAY.has(f) ? { src: EMB[f] || `img/${f}` } : {});
  const img = (src, alt, pie, foco) => ({ tipo: 'imagen', titulo: 'Imagen', ...ruta(src), alt, pie, origen: 'ia', ...(foco ? { foco } : {}) });
  const esq = (src, alt, pie, titulo = 'Esquema') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'esquema' });
  const foto = (src, alt, pie, licencia, titulo = 'Foto') => ({ tipo: 'imagen', titulo, ...ruta(src), alt, pie, origen: 'foto', licencia, completa: true });
  const cita = (ref, texto, titulo = 'Pasaje') => ({ tipo: 'cita', titulo, texto, ref });
  const tabla = (t, titulo = 'Tabla') => ({ tipo: 'tabla', titulo, tabla: t });
  const ir = (t, a) => ({ ir: { t, a } });
  // El árbol interactivo: arbol/#persona abre la ficha de esa persona
  const arbol = (t, persona) => ir(t, 'arbol/' + (persona ? '#' + persona : ''));
  const R = {
    entre: '../../entre-los-testamentos/', mundo: '../../mundo-judio/', templo: '../../templo-herodes/', romano: '../../imperio-romano/',
    tierra: '../../tierra-de-israel/', armonia: '../../evangelios/', hechos: '../../hechos/', pablo: '../../viajes-pablo/',
    medidas: '../../medidas-biblicas/', daniel: '../../daniel/', escatologia: '../../escatologia/', atlas: '../../atlas-biblico/',
    interpretar: '../../interpretar-biblia/'
  };
  window.__HD = { V, DIV, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R };

  // ================== RUTA I. Panorama: una familia en el Nuevo Testamento ==================
  const panorama = [
    {
      id: 'cuantos', n: '¿Cuántos Herodes hay en la Biblia?', ref: 'Mateo 2:1; Lucas 3:1; Hechos 12:1; Hechos 25:13', fecha: [-37, 92],
      visual: [
        esq('hd-cual-herodes.svg', 'Tabla con seis franjas de color: Herodes el Grande, Arquelao, Herodes Antipas, Felipe, Agripa I y Agripa II, con el nombre que les da el texto bíblico, los pasajes donde aparecen y lo que sucede en cada uno', 'Seis gobernantes de una misma familia en el Nuevo Testamento, y cómo reconocer a cada uno.', '¿Cuál Herodes?'),
        tabla({
          titulo: 'Lo que estudia este recurso',
          cab: ['Ruta', 'Qué estudia'],
          filas: [
            ['I. Panorama', 'Quiénes eran, de dónde venían y qué títulos les daba Roma'],
            ['II. Herodes el Grande', 'Su ascenso, sus obras, su familia, los magos, su muerte y el reparto del reino'],
            ['III. Los hijos', 'Arquelao, Felipe y Antipas: Juan el Bautista y Jesús ante Herodes'],
            ['IV. Las mujeres', 'Mariamne, Herodías, Salomé, Berenice y Drusila'],
            ['V. Agripa I y Agripa II', 'La persecución de Hechos 12, Pablo ante Agripa y el fin de la dinastía'],
            ['VI. Los Herodes y la Biblia', 'Cómo distinguirlos, los herodianos, la arqueología y el Rey que permanece']
          ]
        })
      ],
      texto: [
        'Quien lee el Nuevo Testamento de corrido se encuentra con «Herodes» en lugares muy distintos. Un rey Herodes recibe a los magos y manda matar a los niños de Belén (Mt 2). Treinta años después, un Herodes encarcela y decapita a Juan el Bautista (Mr 6:17-29) y recibe a Jesús en su juicio (Lc 23:7-12). Más tarde, un «rey Herodes» mata a Jacobo y encarcela a Pedro (Hch 12:1-4). Y casi al final de Hechos, un rey Agripa escucha la defensa de Pablo (Hch 26).',
        'No es la misma persona. Son por lo menos seis gobernantes de una sola familia, a lo largo de unos ciento treinta años: Herodes el Grande, sus hijos Arquelao, Antipas y Felipe, su nieto Agripa I y su bisnieto Agripa II. «Herodes» era a la vez el nombre del fundador y el nombre de la familia, y varios de sus descendientes lo usaron como título, igual que los emperadores usaban «César».',
        { h: 'Una familia que acompaña toda la historia del Nuevo Testamento' },
        'Herodes el Grande reinaba cuando nació Jesús. Sus hijos gobernaban cuando Jesús creció, predicó y murió. Su nieto persiguió a la iglesia de Jerusalén. Su bisnieto escuchó el evangelio de boca de Pablo y vio, años después, la destrucción del templo que su bisabuelo había construido. Conocer a esta familia ayuda a ubicar cada pasaje en su momento y a entender por qué los personajes actúan como actúan.',
        'Este recurso cuenta su historia con lo que dice el texto bíblico y con lo que aporta Flavio Josefo, el historiador judío del siglo I que escribió con detalle sobre ellos. Josefo se cita con palabras propias, no como Escritura. Cada estación tiene un panel visual; el árbol completo de la familia se puede recorrer en una página aparte, tocando a cada persona.',
        arbol('Abrir el árbol interactivo de la familia'),
        { ejercicio: {
          pregunta: 'El Herodes que manda matar a Jacobo, hermano de Juan, en Hechos 12, ¿es el mismo que mandó matar a los niños de Belén?',
          opciones: [
            { t: 'Sí: Herodes reinó desde el nacimiento de Jesús hasta los primeros años de la iglesia.', ok: false, por_que: 'Herodes el Grande murió poco después del nacimiento de Jesús (Mt 2:19).' },
            { t: 'No: es Herodes Agripa I, nieto de Herodes el Grande.', ok: true, por_que: 'Agripa I reinó del 37 al 44 d.C.; Hechos 12:20-23 narra su muerte en Cesarea.' },
            { t: 'No: es Herodes Antipas, el que decapitó a Juan el Bautista.', ok: false, por_que: 'Antipas fue desterrado por el emperador Calígula en el 39 d.C., antes de los hechos de Hechos 12.' }
          ],
          explicacion: 'Por eso conviene preguntar siempre de qué Herodes habla cada pasaje: la estación VI.1 da las claves para reconocerlos.'
        } }
      ],
      pensar: 'Una misma familia aparece del principio al fin del Nuevo Testamento, y cada generación tuvo que decidir qué hacer con Jesús o con sus seguidores. ¿Qué decisión sobre Jesús está en juego en tu propia familia?'
    },
    {
      id: 'idumea', n: 'Idumea: los hijos de Esaú', ref: 'Génesis 25:23; Génesis 27:40; Abdías 1:10; Marcos 3:8', fecha: [-125, -37],
      visual: [
        pasos([
          { t: 'Edom, al sur del mar Muerto: la tierra de los descendientes de Esaú', fecha: -800, estado: { view: V.sur, capas: ['r-edom'], lugares: ['bosra', 'petra', 'jerusalen', 'hebron'] } },
          { t: 'Después del exilio, los edomitas ocupan el sur de Judá: es la Idumea, con Hebrón y Maresa', fecha: -400, estado: { view: V.idumea, capas: ['nt-idumea'], lugares: ['hebron', 'maresa', 'beerseba', 'jerusalen', 'petra'] } },
          { t: 'Hacia el 125 a.C., Juan Hircano conquista Idumea y obliga a sus habitantes a hacerse judíos', fecha: -125, estado: { view: V.idumea, capas: ['a-hircano'], lugares: ['maresa', 'hebron', 'jerusalen'] } }
        ]),
        cita('Génesis 25:23', '@@gn/25/23')
      ],
      texto: [
        'Herodes no era judío de origen. Su familia venía de Idumea, el nombre griego de Edom, al sur de Judea. Los edomitas descendían de Esaú, el hermano de Jacob. Antes de que nacieran, Dios dijo a Rebeca que dos naciones luchaban en su vientre y que «el mayor servirá al menor» (Gn 25:23). La historia de los dos pueblos estuvo marcada por esa rivalidad: Edom negó el paso a Israel en el desierto (Nm 20:14-21), fue sometido por David y se alegró cuando Babilonia destruyó Jerusalén, por lo que Abdías anunció su juicio (Abd 1:10).',
        { h: 'De Edom a Idumea' },
        'Después del exilio, presionados por los árabes nabateos, que se instalaron en su antiguo territorio de Petra, los edomitas se trasladaron hacia el noroeste y ocuparon el sur de la antigua Judá, con ciudades como Hebrón y Maresa. Así nació la Idumea de los tiempos del Nuevo Testamento. Marcos cuenta que también de Idumea venían multitudes a escuchar a Jesús (Mr 3:8).',
        { h: 'Judíos por la fuerza' },
        'Hacia el año 125 a.C., el gobernante asmoneo Juan Hircano conquistó Idumea. Según Josefo, dio a sus habitantes a elegir: circuncidarse y vivir según la ley de Moisés, o dejar su tierra. La mayoría se quedó y se hizo judía. Desde entonces los idumeos fueron parte del pueblo judío, pero muchos en Jerusalén nunca los vieron como judíos del todo. Cuando un idumeo llegó a ser rey, sus enemigos lo llamaban «medio judío».',
        'Esa conversión forzada no era lo que pedía la ley. Dios había abierto la puerta a los extranjeros que quisieran unirse a su pueblo por voluntad propia, como Rut, y su promesa a Abraham incluía bendición para todas las familias de la tierra. Una fe impuesta con la espada produjo, en este caso, una familia que usó la religión como herramienta de poder.',
        ir('Ver en Entre los Testamentos: Juan Hircano, Idumea y el monte Gerizim', R.entre + '#asmoneos/6'),
        { h: 'Esaú en el trono de Jacob' },
        'Isaac había dicho a Esaú que serviría a su hermano, pero que un día rompería su yugo (Gn 27:40). Con Herodes, por una vuelta de la historia, un descendiente de Esaú se sentó en el trono de Jerusalén. Y ese rey intentaría matar al Hijo de David.'
      ],
      pensar: 'La conversión de los idumeos fue impuesta desde afuera y no cambió el corazón. ¿Qué diferencia hay entre adoptar las costumbres de la fe y nacer de nuevo?'
    },
    {
      id: 'antipatro', n: 'Antípatro: una familia al lado de Roma', ref: 'Daniel 2:21; Proverbios 21:1', fecha: [-67, -43],
      visual: [
        tabla({
          titulo: 'De Antípatro a Herodes',
          cab: ['Año', 'Qué pasó'],
          filas: [
            ['Hacia 70 a.C.', 'Antípatro, gobernador de Idumea como su padre, se hace consejero del asmoneo Hircano II'],
            ['67–63 a.C.', 'Guerra entre los hermanos Hircano II y Aristóbulo II; Antípatro busca apoyo en los nabateos de Petra'],
            ['63 a.C.', 'Pompeyo toma Jerusalén; Hircano queda como sumo sacerdote y Antípatro como el hombre fuerte'],
            ['47 a.C.', 'Antípatro ayuda a Julio César en Egipto; recibe la ciudadanía romana y el cargo de procurador de Judea'],
            ['47 a.C.', 'Sus hijos Fasael y Herodes, gobernadores de Jerusalén y de Galilea'],
            ['43 a.C.', 'Antípatro muere envenenado en un banquete']
          ]
        }),
        mapa({ view: V.oriente, capas: ['roma-14'], lugares: ['jerusalen', 'petra', 'alejandria', 'roma', 'antioquia'] }),
        cita('Daniel 2:21', '@@dn/2/21')
      ],
      texto: [
        'El primer hombre fuerte de la familia fue Antípatro, padre de Herodes. Su padre ya había sido gobernador de Idumea bajo los asmoneos. Antípatro se casó con Cipros, una mujer de la nobleza nabatea de Petra, y por eso Herodes tenía sangre idumea por su padre y árabe por su madre.',
        { h: 'Consejero de un sumo sacerdote débil' },
        'Cuando los hermanos asmoneos Hircano II y Aristóbulo II se disputaron el trono y el sumo sacerdocio, Antípatro se hizo consejero de Hircano, un hombre sin ambiciones, y gobernó en su nombre. En el 63 a.C. el general romano Pompeyo intervino, tomó Jerusalén y entró en el Lugar Santísimo. Judea quedó bajo Roma. Hircano siguió como sumo sacerdote, pero el que tomaba las decisiones era Antípatro.',
        ir('Ver en Entre los Testamentos: Antípatro el idumeo', R.entre + '#roma/2'),
        { h: 'Siempre con el romano más fuerte' },
        'Antípatro entendió que el futuro de Judea se decidía en Roma, y que Roma estaba dividida en guerras civiles. Apoyó a Pompeyo mientras Pompeyo mandaba; cuando Julio César lo venció, se pasó a César y le salvó la vida en Egipto, en el 47 a.C., llegando con tres mil soldados judíos. César lo hizo ciudadano romano, libre de impuestos, y procurador de Judea. Antípatro puso entonces a sus hijos en el gobierno: Fasael en Jerusalén y Herodes, de unos veinticinco años, en Galilea.',
        'Cuatro años después, en el 43 a.C., un rival lo envenenó durante un banquete. Pero el método de Antípatro quedó como herencia de la familia: buscar siempre el favor del que manda en Roma. Sus descendientes lo siguieron durante más de un siglo, con Antonio, con Augusto, con Tiberio, con Calígula y con Claudio.',
        { h: 'Quien quita y pone reyes' },
        'Visto desde la tierra, parecía que el destino de Judea dependía de quién ganara en Roma. Pero Daniel había enseñado que es Dios quien «quita reyes, y pone reyes» (Dn 2:21). Las ambiciones de una familia idumea y las guerras de los generales romanos estaban preparando, sin saberlo, el escenario en que nacería el Mesías.'
      ],
      pensar: 'Antípatro siempre se puso del lado del que tenía más poder. ¿En qué decisiones de tu vida te ves tentado a buscar el favor del más fuerte en lugar de buscar lo que agrada a Dios?'
    },
    {
      id: 'titulos', n: 'Rey, etnarca y tetrarca: los títulos de Roma', ref: 'Lucas 3:1; Mateo 2:22; Mateo 14:1; Marcos 6:14; Hechos 25:13', fecha: [-40, 92],
      visual: [
        tabla({
          titulo: 'Los títulos de la familia',
          cab: ['Título', 'Qué significaba', 'Quién lo tuvo'],
          filas: [
            ['Rey', 'Gobernante de un reino aliado de Roma, nombrado por el Senado o por el emperador', 'Herodes el Grande, Agripa I, Herodes de Calcis, Agripa II'],
            ['Etnarca', '«Gobernante de un pueblo»; más que tetrarca, menos que rey', 'Arquelao (Judea, Samaria e Idumea)'],
            ['Tetrarca', '«Gobernante de una cuarta parte»; usado para cualquier príncipe menor', 'Antipas (Galilea y Perea), Felipe (el noreste), Lisanias (Abilinia)'],
            ['Prefecto o procurador', 'Funcionario romano que gobierna una provincia en nombre del emperador', 'Pilato (prefecto); Félix y Festo (procuradores)']
          ],
          nota: 'Marcos y Mateo llaman «rey» a Antipas en el relato de Juan el Bautista (Mr 6:14; Mt 14:9), como lo llamaba la gente de Galilea; Lucas y Mateo usan su título oficial de tetrarca.'
        }),
        esq('hd-reinados.svg', 'Escala de tiempo del 40 a.C. al 100 d.C. con barras de color para Herodes el Grande, Arquelao, los gobernadores romanos, Antipas, Felipe, Agripa I y Agripa II, y debajo los hechos del Nuevo Testamento: el nacimiento de Jesús, su ministerio, la cruz, Hechos 12, Pablo ante Agripa y la caída del templo', 'Quién gobernó dónde, del 40 a.C. al 100 d.C.', 'Línea de tiempo'),
        cita('Lucas 3:1-2', '@@lc/3/1-2')
      ],
      texto: [
        'Roma gobernaba su imperio de dos maneras. Algunas tierras eran provincias, con un gobernador romano. Otras se dejaban en manos de reyes y príncipes locales, aliados de Roma, que mantenían el orden, cobraban impuestos y defendían las fronteras. A esos aliados se les llama reyes clientes: tenían poder dentro de su territorio, pero no podían hacer la guerra ni la paz sin permiso, ni siquiera nombrar a su sucesor. El emperador confirmaba o anulaba su testamento.',
        { h: 'Tres títulos' },
        'Herodes el Grande fue rey, nombrado por el Senado romano. A su muerte, Augusto no dio ese título a ninguno de sus hijos. Arquelao recibió el de etnarca, que significa «gobernante de un pueblo», con la promesa de ser rey si gobernaba bien; no lo logró. Antipas y Felipe recibieron el de tetrarca, «gobernante de una cuarta parte». Con el tiempo, la palabra se usó para cualquier príncipe de menor rango.',
        'Lucas fecha el comienzo del ministerio de Juan el Bautista con precisión de historiador: el año quince de Tiberio, con Pilato como gobernador de Judea, Herodes Antipas tetrarca de Galilea, su hermano Felipe tetrarca de Iturea y Traconite, y Lisanias tetrarca de Abilinia (Lc 3:1). Es el mapa político exacto de esos años, hacia el 28 o 29 d.C.',
        { h: 'Un título que se gana y se pierde' },
        'El título dependía del favor de Roma. Antipas lo perdió todo cuando pidió ser rey. Su sobrino Agripa I, en cambio, pasó de estar en una cárcel de Roma a ser rey de casi todo el antiguo reino de su abuelo. Para entender a esta familia hay que recordar siempre que su poder era prestado: Roma lo daba y Roma lo quitaba.',
        'Jesús se refirió a esta manera de gobernar cuando dijo que los gobernantes de las naciones se enseñorean de ellas, y que entre sus discípulos no sería así: el que quisiera ser grande sería servidor de todos (Mr 10:42-44).'
      ],
      pensar: 'El poder de los Herodes era prestado por Roma. ¿Qué cambia en tu manera de usar la autoridad que tienes —en tu casa, en tu trabajo o en la iglesia— si recuerdas que te ha sido confiada por Dios?'
    },
    {
      id: 'arbol', n: 'El árbol de la familia en una mirada', ref: 'Mateo 2:22; Lucas 3:1; Marcos 6:17; Hechos 12:1; Hechos 24:24; Hechos 25:13', fecha: [-43, 92],
      visual: [
        esq('hd-arbol.svg', 'Árbol de la familia de Herodes: Antípatro y Cipros; sus hijos Fasael, Herodes, Feroras y Salomé; cinco esposas de Herodes con sus hijos Antípatro, Alejandro, Aristóbulo, Herodes II, Arquelao, Antipas y Felipe; los hijos de Aristóbulo y Berenice: Agripa I, Herodes de Calcis y Herodías; Salomé, hija de Herodías; y los hijos de Agripa I: Agripa II, Berenice y Drusila. Las personas del Nuevo Testamento van en rojo', 'La familia de Herodes. En rojo, las personas que nombra el Nuevo Testamento.', 'Árbol'),
        tabla({
          titulo: 'Los de la familia que aparecen en la Biblia',
          cab: ['Persona', 'Parentesco', 'Pasajes'],
          filas: [
            ['Herodes el Grande', 'El fundador', 'Mt 2:1-22; Lc 1:5'],
            ['Arquelao', 'Hijo de Herodes y Maltace', 'Mt 2:22'],
            ['Herodes Antipas', 'Hijo de Herodes y Maltace', 'Lc 3:1, 19; 13:31-32; 23:7-12; Mr 6:14-29'],
            ['Felipe', 'Hijo de Herodes y Cleopatra', 'Lc 3:1'],
            ['Herodes II («Felipe»)', 'Hijo de Herodes y Mariamne II; primer esposo de Herodías', 'Mr 6:17; Mt 14:3'],
            ['Herodías', 'Nieta de Herodes; esposa de Antipas', 'Mt 14:3-11; Mr 6:17-28; Lc 3:19'],
            ['La hija de Herodías', 'Bisnieta de Herodes (Salomé, según Josefo)', 'Mt 14:6-11; Mr 6:22-28'],
            ['Agripa I', 'Nieto de Herodes y Mariamne', 'Hch 12:1-23'],
            ['Agripa II', 'Hijo de Agripa I', 'Hch 25:13–26:32'],
            ['Berenice', 'Hija de Agripa I', 'Hch 25:13, 23; 26:30'],
            ['Drusila', 'Hija de Agripa I; esposa de Félix', 'Hch 24:24']
          ]
        })
      ],
      texto: [
        'La familia de Herodes es difícil de seguir por tres razones. Primero, Herodes tuvo diez esposas, algunas al mismo tiempo, y muchos hijos. Segundo, los nombres se repiten: hay varios Herodes, dos Mariamnes, dos Salomés, dos Berenices, dos Aristóbulos y dos Antípatros. Tercero, se casaban mucho entre parientes, para mantener el poder dentro de la familia: tíos con sobrinas, primos con primas.',
        { h: 'Cuatro ramas para orientarse' },
        'Para leer el Nuevo Testamento basta con seguir cuatro ramas. La primera son los hijos de Maltace, una samaritana: Arquelao, que heredó Judea, y Antipas, que heredó Galilea. La segunda es Felipe, hijo de Cleopatra de Jerusalén, que heredó el noreste. La tercera son los descendientes de Mariamne, la princesa asmonea: su nieto Agripa I, su nieta Herodías y, de allí, Agripa II, Berenice y Drusila. La cuarta es Herodes II, hijo de otra Mariamne, primer esposo de Herodías.',
        'Las ramas se cruzan. Herodías era hija de Aristóbulo, hijo de Herodes. Se casó primero con su tío Herodes II y después con otro tío, Antipas. Su hija, la muchacha que danzó en el cumpleaños de Antipas, se casó con su tío abuelo Felipe. Por eso Juan el Bautista le decía a Antipas: «No te es lícito tener la mujer de tu hermano» (Mr 6:18).',
        { h: 'Sangre asmonea' },
        'Los descendientes de Mariamne tenían algo que los demás no tenían: sangre de los asmoneos, la familia de los macabeos que había gobernado Judea antes de Herodes. Por eso el pueblo aceptó mejor a Agripa I que a su abuelo. Herodes se casó con Mariamne precisamente para eso, aunque después la hizo morir.',
        arbol('Recorrer el árbol completo, persona por persona'),
        { ejercicio: {
          pregunta: '¿Qué parentesco tenía Herodías con Herodes Antipas antes de casarse con él?',
          opciones: [
            { t: 'Era su hermana.', ok: false, por_que: 'Herodías era hija de Aristóbulo, un medio hermano de Antipas.' },
            { t: 'Era su sobrina y la esposa de su medio hermano.', ok: true, por_que: 'Herodías era nieta de Herodes el Grande y estaba casada con Herodes II, otro hijo de Herodes.' },
            { t: 'No eran parientes: era una princesa extranjera.', ok: false, por_que: 'Era de la misma familia; los Herodes se casaban mucho entre parientes.' }
          ],
          explicacion: 'Juan el Bautista reprendió a Antipas porque había tomado a la mujer de su hermano mientras este vivía (Lv 18:16; Mr 6:18).'
        } }
      ],
      pensar: 'En esta familia los matrimonios se arreglaban para conservar el poder. ¿Qué lugar le das tú al plan de Dios para el matrimonio y la familia cuando lo que conviene parece ser otra cosa?'
    }
  ];

  window.__HD.panorama = panorama;
})();
