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
  const HAY = new Set(["foto-cesarea-acueducto.jpg", "foto-herodion.jpg", "foto-maqueronte.jpg", "foto-masada-palacio.jpg", "foto-moneda-agripa.jpg", "foto-sarcofago-herodes.jpg", "hd-agripa-cadenas.webp", "hd-agripa-cesarea.webp", "hd-agripa2-discurso.webp", "hd-arbol.svg", "hd-arquelao-pascua.webp", "hd-cual-herodes.svg", "hd-felipe-paneas.webp", "hd-funeral-herodes.webp", "hd-herodes-rodas.webp", "hd-herodes-senado.webp", "hd-juan-antipas.webp", "hd-magos-herodes.webp", "hd-mariamne.webp", "hd-reinados.svg"]);
  // Imágenes de otros recursos (../otro/img/…) que ya existen; una que todavía no se ha generado queda sin src.
  const EXT = new Set(["../entre-los-testamentos/img/herodes-obras.webp", "../hechos/img/hechos-pablo-agripa.webp", "../hechos/img/hechos-pedro-carcel.webp", "../imperio-persa/img/persia-magos-oriente.webp", "../mundo-judio/img/mj-antipas-banquete.webp"]);
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
        cita('Génesis 25:23', 'y le respondió Jehová: Dos naciones hay en tu seno, Y dos pueblos serán divididos desde tus entrañas; El un pueblo será más fuerte que el otro pueblo, Y el mayor servirá al menor.')
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
        cita('Daniel 2:21', 'El muda los tiempos y las edades; quita reyes, y pone reyes; da la sabiduría a los sabios, y la ciencia a los entendidos.')
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
        cita('Lucas 3:1-2', 'En el año decimoquinto del imperio de Tiberio César, siendo gobernador de Judea Poncio Pilato, y Herodes tetrarca de Galilea, y su hermano Felipe tetrarca de Iturea y de la provincia de Traconite, y Lisanias tetrarca de Abilinia, y siendo sumos sacerdotes Anás y Caifás, vino palabra de Dios a Juan, hijo de Zacarías, en el desierto.')
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
/* La dinastía de Herodes · ruta II. Herodes el Grande (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA II. Herodes el Grande ==================
  const grande = [
    {
      id: 'rey', n: 'De gobernador de Galilea a «rey de los judíos»', ref: 'Mateo 2:1-2; Lucas 1:5; Juan 19:11', fecha: [-47, -37],
      visual: [
        img('hd-herodes-senado.webp', 'En la curia del Senado romano, con columnas de mármol y senadores con toga sentados en gradas, un joven Herodes de unos treinta y tres años, con manto oscuro de viaje, está de pie en el centro mientras Marco Antonio, con coraza, y el joven Octavio, con toga, lo presentan a los senadores', 'El Senado romano declara rey de Judea a Herodes, en el año 40 a.C., con el apoyo de Marco Antonio y Octavio. Recreación.'),
        pasos([
          { t: '40 a.C.: los partos invaden Judea; Herodes deja a su familia en Masada y busca ayuda en Petra, que se la niega', fecha: -40, estado: { view: V.sur, capas: [], lugares: ['jerusalen', 'masada', 'petra'], trazos: [] } },
          { t: 'Pasa por Egipto y Rodas y llega a Roma, donde el Senado lo declara rey de Judea', fecha: -40, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['jerusalen', 'petra', 'alejandria', 'rodas', 'roma'], trazos: ['hd-huida-40'] } },
          { t: '39 a.C.: desembarca en Tolemaida con el título de rey, pero sin reino: tiene que conquistarlo', fecha: -39, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'tolemaida'], trazos: ['hd-regreso-39'] } },
          { t: '37 a.C.: después de un sitio de cinco meses, toma Jerusalén con ayuda de las legiones romanas', fecha: -37, estado: { view: V.palestina, capas: ['hd-herodes-37'], lugares: ['tolemaida', 'samaria', 'jerusalen', 'masada', 'jerico'] } }
        ]),
        cita('Mateo 2:1-2', 'Cuando Jesús nació en Belén de Judea en días del rey Herodes, vinieron del oriente a Jerusalén unos magos, diciendo: ¿Dónde está el rey de los judíos, que ha nacido? Porque su estrella hemos visto en el oriente, y venimos a adorarle.')
      ],
      texto: [
        'Herodes nació hacia el año 73 a.C. A los veinticinco años, su padre Antípatro lo hizo gobernador de Galilea. Allí persiguió a una banda de salteadores y ejecutó a su jefe sin juicio. Citado ante el Sanedrín de Jerusalén, se presentó vestido de púrpura y con soldados, y los jueces no se atrevieron a condenarlo. Ya entonces se veía cómo iba a gobernar.',
        { h: 'Un rey sin reino' },
        'En el año 40 a.C., los partos, el gran enemigo de Roma en el oriente, invadieron Siria y Judea y pusieron en el trono a Antígono, el último príncipe asmoneo. Fasael, el hermano de Herodes, cayó prisionero y murió. Herodes escapó de noche con su familia, la dejó en la fortaleza de Masada y fue a pedir ayuda a los nabateos de Petra, que no lo recibieron. Siguió a Egipto, donde rechazó un puesto que le ofrecía Cleopatra, y en pleno invierno se embarcó hacia Roma.',
        'Allí Marco Antonio, que había sido amigo de su padre, y el joven Octavio lo presentaron al Senado. Los senadores, que necesitaban a alguien fiel a Roma contra los partos, lo declararon rey de Judea. Josefo cuenta que Herodes salió del Senado entre los dos hombres más poderosos de Roma, y que esa noche Antonio dio un banquete en su honor.',
        { h: 'Conquistar su propio reino' },
        'Herodes volvió en el 39 a.C. con un título y sin reino. Le tomó dos años y medio de guerra conquistarlo. Liberó a su familia en Masada, tomó Galilea y, en el 37 a.C., con las legiones romanas del general Sosio, sitió Jerusalén durante cinco meses. Durante el sitio se casó con Mariamne, una princesa asmonea, para presentarse como heredero legítimo. Cuando la ciudad cayó, los soldados mataron sin piedad; Herodes tuvo que pagar a los romanos para que no saquearan el templo. Antígono fue enviado a Antioquía y decapitado.',
        'Así llegó al trono el hombre que Mateo llama «el rey Herodes». Reinaría treinta y tres años. Cuando los magos llegaron preguntando por «el rey de los judíos, que ha nacido» (Mt 2:2), tocaron el punto más sensible de su vida: él había recibido ese título de Roma y lo había conquistado con la espada. Jesús lo tenía por nacimiento.',
        ir('Ver en Entre los Testamentos: Herodes, rey de los judíos', R.entre + '#roma/3')
      ],
      pensar: 'Herodes recibió de Roma el título de rey y tuvo que conquistarlo por la fuerza; Jesús nació Rey. Frente a Pilato dijo que ninguna autoridad tendría contra él «si no te fuese dada de arriba» (Jn 19:11). ¿Qué te da paz al saber que ningún poder humano está fuera del gobierno de Dios?'
    },
    {
      id: 'asmoneos', n: 'Asegurar el trono: el fin de los asmoneos', ref: 'Hebreos 5:4; Hebreos 7:23-24; Juan 11:49-51', fecha: [-37, -28],
      visual: [
        tabla({
          titulo: 'Los asmoneos que Herodes eliminó',
          cab: ['Persona', 'Parentesco', 'Qué pasó'],
          filas: [
            ['Antígono', 'Último rey asmoneo', 'Decapitado en Antioquía por orden de Antonio (37 a.C.)'],
            ['Aristóbulo III', 'Hermano de Mariamne; sumo sacerdote a los 17 años', 'Ahogado en una piscina de Jericó (35 a.C.)'],
            ['Hircano II', 'Abuelo de Mariamne; antiguo sumo sacerdote', 'Ejecutado a los ochenta años (30 a.C.)'],
            ['Mariamne', 'Su esposa', 'Ejecutada (29 a.C.); ver II.5'],
            ['Alejandra', 'Madre de Mariamne', 'Ejecutada (28 a.C.)'],
            ['Alejandro y Aristóbulo', 'Sus hijos con Mariamne', 'Estrangulados en Sebaste (7 a.C.)']
          ]
        }, 'Asmoneos'),
        tabla({
          titulo: 'Un sumo sacerdocio en manos del rey',
          cab: ['Antes de Herodes', 'Desde Herodes'],
          filas: [
            ['El cargo pasaba de padre a hijo y era de por vida', 'El rey (y después Roma) nombraba y destituía sumos sacerdotes a voluntad'],
            ['Los asmoneos fueron a la vez reyes y sumos sacerdotes', 'Herodes, que no era sacerdote, separó los dos cargos'],
            ['Una sola familia', 'Ocho sumos sacerdotes en treinta y tres años, sobre todo de la familia de Boeto, traída de Alejandría'],
            ['Las vestiduras, en el templo', 'Las vestiduras del Día de la Expiación, guardadas por el rey en la fortaleza Antonia']
          ]
        }, 'Sumo sacerdocio'),
        cita('Hebreos 7:23-24', 'Y los otros sacerdotes llegaron a ser muchos, debido a que por la muerte no podían continuar; mas éste, por cuanto permanece para siempre, tiene un sacerdocio inmutable;')
      ],
      texto: [
        'Herodes se sentó en el trono, pero no se sentía seguro. Los judíos estaban acostumbrados a ser gobernados por los asmoneos, la familia de los macabeos que había liberado al pueblo de los griegos. Herodes era un idumeo nombrado por Roma. Para ganar legitimidad se casó con Mariamne, nieta de dos príncipes asmoneos. Y para que nadie le disputara el trono, eliminó uno por uno a todos los varones de esa familia.',
        { h: 'Un sumo sacerdote demasiado popular' },
        'Herodes nombró sumo sacerdote a Ananel, un sacerdote traído de Babilonia, sin vínculos con nadie. La madre de Mariamne, Alejandra, logró por medio de Cleopatra de Egipto que el cargo pasara a su hijo Aristóbulo III, hermano de Mariamne, de diecisiete años. En la fiesta de los Tabernáculos, cuando el joven subió al altar con las vestiduras de sumo sacerdote, la multitud lo aclamó con lágrimas: veían en él al heredero de los macabeos. Poco después, en un baño en los palacios de Jericó, unos compañeros de Herodes lo hundieron en el agua como si fuera un juego hasta ahogarlo. Herodes lloró en el funeral. Nadie le creyó.',
        'El anciano Hircano II, que había vuelto del destierro en Babilonia, fue ejecutado en el 30 a.C. con una acusación de conspiración. Tenía unos ochenta años.',
        { h: 'Un cargo sagrado convertido en instrumento' },
        'Herodes cambió para siempre el sumo sacerdocio. Ya no era un cargo de por vida que pasaba de padre a hijo, como mandaba la ley, sino un nombramiento del rey, que lo daba y lo quitaba según su conveniencia. Los gobernadores romanos siguieron haciendo lo mismo. Por eso en tiempos de Jesús había varios exsumos sacerdotes vivos al mismo tiempo, como Anás, y por eso el cargo estaba en manos de unas pocas familias ricas, ligadas al poder.',
        'Hebreos recuerda que nadie toma para sí esa honra, sino el que es llamado por Dios (He 5:4), y que los sumos sacerdotes de Israel eran muchos porque la muerte les impedía continuar. Cristo, en cambio, «por cuanto permanece para siempre, tiene un sacerdocio inmutable» (He 7:24). Ningún rey puede destituirlo.',
        ir('Ver El sacerdocio en Israel', '../../sacerdocio/')
      ],
      pensar: 'Herodes usó el sacerdocio para asegurar su poder. ¿Qué te enseña el sacerdocio de Cristo, que nadie puede quitarle ni comprar, cuando te acercas a Dios por medio de él?'
    },
    {
      id: 'augusto', n: 'Con Antonio y con Augusto', ref: 'Lucas 2:1; Proverbios 21:1; Daniel 2:21', fecha: [-36, -20],
      visual: [
        img('hd-herodes-rodas.webp', 'En una sala con columnas de un palacio de la isla de Rodas, el rey Herodes, de unos cuarenta y dos años, sin diadema, de pie frente a Octavio, un joven romano de unos treinta y dos años sentado con toga, a quien entrega su diadema real de tela blanca; oficiales romanos observan', 'Herodes se presenta sin diadema ante Octavio en Rodas, en el 30 a.C., y le ofrece la misma lealtad que había tenido con Antonio. Recreación.'),
        pasos([
          { t: '37 a.C.: el reino que Herodes conquista', fecha: -37, estado: { view: V.palestina, capas: ['hd-herodes-37'], lugares: ['jerusalen', 'jerico', 'masada', 'samaria'] } },
          { t: '30 a.C.: Augusto le devuelve Jericó y le da Samaria, Gaza, Jope, Gadara, Hipos y la Torre de Estratón', fecha: -30, estado: { view: V.palestina, capas: ['hd-herodes-30'], lugares: ['jerusalen', 'jerico', 'gaza', 'jope', 'samaria', 'cesarea', 'gadara'] } },
          { t: '23 y 20 a.C.: suma Traconite, Batanea, Auranítide y la región de Paneas, al noreste', fecha: -20, estado: { view: V.palestina, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'cesarea', 'paneas', 'samaria'] } }
        ]),
        cita('Lucas 2:1', 'Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado.')
      ],
      texto: [
        'Durante los primeros años de su reinado, Herodes dependió de Marco Antonio, que gobernaba el oriente romano. El problema era Cleopatra, la reina de Egipto, amante de Antonio, que quería recuperar las tierras que alguna vez habían sido de los Ptolomeos, incluida Judea. Antonio le regaló los famosos palmares y bálsamos de Jericó, y Herodes tuvo que arrendárselos a ella para seguir cultivándolos.',
        { h: 'La batalla de Accio' },
        'En el año 31 a.C., Octavio derrotó a Antonio y Cleopatra en la batalla naval de Accio, en Grecia. Los dos se suicidaron poco después. Herodes había apoyado al perdedor. Ese mismo año, además, un terremoto mató a miles en Judea.',
        'En la primavera del 30 a.C., Herodes viajó a Rodas para presentarse ante el vencedor. Josefo cuenta que se quitó la diadema y habló con franqueza: había sido leal a Antonio hasta el final, y ofrecía a Octavio la misma lealtad. Octavio le devolvió la diadema y confirmó su reino. Después lo amplió: le devolvió Jericó, le dio Samaria, las ciudades de la costa y algunas de la Decápolis; años más tarde, las tierras al noreste del mar de Galilea.',
        { h: 'Amigo de César' },
        'Octavio recibió en el 27 a.C. el título de Augusto, que en griego se traduce Sebastós. Herodes se dedicó a honrarlo. Reconstruyó Samaria con el nombre de Sebaste, llamó Cesarea a la nueva ciudad del puerto, levantó templos dedicados a Roma y a Augusto en Sebaste, Cesarea y Paneas, en zonas de población pagana, e instituyó juegos en su honor. Se daba el título de amigo de César y amigo de los romanos.',
        'Es el Augusto de Lucas 2:1, el que promulgó el edicto «que todo el mundo fuese empadronado». El hombre más poderoso del mundo y su rey cliente en Judea parecían controlar la historia. Pero el edicto de Augusto llevó a José y a María a Belén, donde había de nacer el Mesías según la profecía (Mi 5:2). El corazón del rey está en la mano de Dios (Pr 21:1).',
        ir('Ver en El imperio romano: Jesús nace bajo Augusto', R.romano + '#biblia/2')
      ],
      pensar: 'Herodes cambió de lealtad según quién ganaba. Dios, en cambio, usó a Augusto para cumplir su promesa en Belén. ¿Qué situación de tu vida que parece decidida por «los poderosos» puedes poner hoy en las manos de Dios?'
    },
    {
      id: 'constructor', n: 'El gran constructor', ref: 'Juan 2:20; Marcos 13:1-2; Hechos 23:35; Salmo 127:1', fecha: [-27, -4],
      visual: [
        img('../entre-los-testamentos/img/herodes-obras.webp', 'En lo alto de una colina artificial en forma de cono, en el desierto de Judea, el rey Herodes revisa planos sobre una mesa con su arquitecto mientras cientos de obreros levantan los muros circulares de la fortaleza del Herodión', 'Herodes supervisa la construcción del Herodión. Recreación.'),
        mapa({ view: V.palestina, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'cesarea', 'samaria', 'masada', 'herodion', 'maqueronte', 'jerico', 'paneas', 'hebron'] }),
        foto('foto-cesarea-acueducto.jpg', 'Restos del acueducto alto de Cesarea: un largo muro de piedra con su canal en lo alto, que se extiende entre arbustos junto a casas modernas', 'El acueducto alto de Cesarea, que llevaba agua desde las fuentes del monte Carmelo a la ciudad que Herodes construyó junto al mar.', 'CC BY-SA 2.0 · Carole Raddato, vía Wikimedia Commons'),
        foto('foto-herodion.jpg', 'Vista aérea del Herodión: una colina en forma de cono truncado en el desierto, con los muros circulares de la fortaleza y sus torres en la cima', 'El Herodión, palacio y fortaleza de Herodes al sur de Belén, donde fue sepultado.', 'Dominio público · Asaf T., vía Wikimedia Commons'),
        tabla({
          titulo: 'Las grandes obras de Herodes',
          cab: ['Obra', 'Dónde', 'En la Biblia'],
          filas: [
            ['El templo y su explanada', 'Jerusalén, desde el 20 o 19 a.C.', 'Jn 2:20; Mr 13:1'],
            ['La fortaleza Antonia', 'Jerusalén, junto al templo', 'Hch 21:34 («la fortaleza»)'],
            ['El palacio con tres torres', 'Jerusalén, en el oeste', 'Probablemente el pretorio de Pilato'],
            ['Cesarea y su puerto', 'En la costa, 22–10 a.C.', 'Hch 10; 12:19; 23:35'],
            ['Sebaste', 'Samaria, 27 a.C.', 'Hch 8:5 (la ciudad de Samaria)'],
            ['Palacios de invierno', 'Jericó', 'Lc 19:1-10 (la Jericó de Zaqueo)'],
            ['Masada, Herodión, Maqueronte', 'Fortalezas del desierto', 'Maqueronte, prisión de Juan según Josefo']
          ]
        }, 'Obras')
      ],
      texto: [
        'Herodes fue uno de los mayores constructores de la antigüedad. Su reino se llenó de obras que todavía impresionan a los arqueólogos, y muchas son el escenario del Nuevo Testamento.',
        { h: 'Cesarea, una ciudad nueva junto al mar' },
        'En la costa, donde no había puerto natural, Herodes construyó Cesarea entre el 22 y el 10 a.C. Sus ingenieros hundieron en el mar enormes bloques de un concreto que fraguaba bajo el agua y crearon un puerto artificial, Sebastós, de los más grandes del Mediterráneo. La ciudad tenía templo a Augusto, teatro, hipódromo, acueducto y un palacio sobre el mar. Allí Pedro llevó el evangelio a Cornelio (Hch 10), allí murió Agripa I (Hch 12:23) y allí Pablo estuvo preso dos años, custodiado «en el pretorio de Herodes» (Hch 23:35), el mismo palacio.',
        { h: 'Fortalezas y palacios en el desierto' },
        'Herodes vivía con miedo a una rebelión o a una invasión, y llenó el desierto de refugios: Masada, sobre una meseta junto al mar Muerto, con un palacio colgado del acantilado; Maqueronte, al otro lado del mar Muerto; y el Herodión, una colina que levantó con tierra en forma de cono, cerca de Belén, para que fuera su palacio y su tumba. En Jericó tenía palacios de invierno con jardines y piscinas.',
        { h: 'El templo' },
        'Su obra mayor fue la reconstrucción del templo de Jerusalén, que comenzó hacia el 20 o 19 a.C. Duplicó la explanada con muros de piedras gigantescas, y para no ofender a los judíos hizo que mil sacerdotes aprendieran albañilería y construyeran el santuario. Las obras siguieron después de su muerte: en tiempos de Jesús llevaban cuarenta y seis años (Jn 2:20), y terminaron hacia el 64 d.C., solo seis años antes de su destrucción.',
        ir('Recorrer en 3D El templo de Herodes', R.templo),
        { h: 'Piedras que no quedaron' },
        'Herodes pagó todo esto con impuestos muy pesados. Pero también supo ayudar: en una gran hambruna, hacia el 25 a.C., fundió el oro y la plata de su palacio para comprar trigo en Egipto. Sus discípulos admiraban esas piedras, pero Jesús les dijo: «No quedará piedra sobre piedra, que no sea derribada» (Mr 13:2).'
      ],
      pensar: '«Si Jehová no edificare la casa, En vano trabajan los que la edifican» (Sal 127:1). Herodes construyó para su fama y la de César. ¿Para la gloria de quién estás edificando tu vida, tu trabajo y tu familia?'
    },
    {
      id: 'familia', n: 'Una familia en guerra', ref: 'Santiago 3:16; Proverbios 14:30; Mateo 16:26', fecha: [-29, -4],
      visual: [
        img('hd-mariamne.webp', 'En una sala del palacio de Herodes en Jerusalén, iluminada por lámparas, la reina Mariamne, joven princesa asmonea de porte digno, de pie y erguida entre dos guardias, mira de frente al rey Herodes, sentado en su trono con expresión dura y atormentada; al fondo, cortesanos observan desde las sombras', 'Mariamne ante Herodes, poco antes de ser condenada a muerte en el 29 a.C. Recreación.'),
        tabla({
          titulo: 'Las muertes en la casa de Herodes',
          cab: ['Año', 'Quién', 'Por qué, según Josefo'],
          filas: [
            ['29 a.C.', 'Mariamne, su esposa', 'Acusada de infidelidad e intento de envenenamiento por Salomé, hermana de Herodes'],
            ['28 a.C.', 'Alejandra, su suegra', 'Acusada de conspirar para tomar el poder durante una enfermedad del rey'],
            ['25 a.C.', 'Costobaro, esposo de Salomé', 'Acusado por su propia esposa de proteger a enemigos del rey'],
            ['7 a.C.', 'Alejandro y Aristóbulo, sus hijos', 'Acusados por su medio hermano Antípatro y por Salomé de querer matar a su padre'],
            ['4 a.C.', 'Antípatro, su hijo mayor', 'Descubierto conspirando para envenenar a Herodes; ejecutado cinco días antes de la muerte del rey']
          ]
        }),
        cita('Santiago 3:16', 'Porque donde hay celos y contención, allí hay perturbación y toda obra perversa.')
      ],
      texto: [
        'Josefo dedica páginas enteras a las intrigas del palacio de Herodes. Es una historia de celos, sospechas y crímenes dentro de una misma familia, que muestra adónde lleva el miedo a perder el poder.',
        { h: 'Mariamne' },
        'Herodes amaba a Mariamne, la princesa asmonea con la que se casó durante el sitio de Jerusalén, y ella lo despreciaba: no le perdonaba la muerte de su hermano Aristóbulo ni la de su abuelo Hircano. Salomé, la hermana de Herodes, y su madre odiaban a Mariamne porque los miraba en menos por su origen. Las acusaciones de Salomé convencieron a Herodes de que su esposa le era infiel y quería envenenarlo. En el 29 a.C., Mariamne fue juzgada y ejecutada. Josefo dice que caminó a la muerte con dignidad, y que Herodes enloqueció de dolor: la llamaba por los pasillos como si estuviera viva y ordenaba a los sirvientes que la buscaran.',
        { h: 'Padre contra hijos' },
        'Los dos hijos de Mariamne, Alejandro y Aristóbulo, fueron educados en Roma, cerca de la corte de Augusto. Al volver, el pueblo los quería por su sangre asmonea. Herodes trajo entonces a palacio a Antípatro, el hijo de su primera esposa, Doris, que con ayuda de Salomé alimentó durante años las sospechas del padre. Augusto mismo trató de reconciliarlos, pero en el 7 a.C. Herodes hizo estrangular a los dos jóvenes en Sebaste, la ciudad donde se había casado con su madre.',
        'Antípatro no disfrutó su victoria: en el 4 a.C. se descubrió que planeaba envenenar a su padre. Herodes, ya moribundo, lo hizo ejecutar cinco días antes de morir él mismo.',
        { h: '«Mejor ser cerdo de Herodes»' },
        'Un escritor romano, Macrobio, cuenta que Augusto, al saber de estas muertes, comentó que era mejor ser cerdo de Herodes que hijo de Herodes. En griego el chiste juega con dos palabras parecidas, cerdo e hijo; y tiene sentido porque Herodes, que guardaba la ley en público, no comía cerdo.',
        'Santiago describe esta clase de vida: «donde hay celos y contención, allí hay perturbación y toda obra perversa» (Stg 3:16). Herodes tuvo poder, riquezas y fama, y perdió a su esposa, a sus hijos y la paz de su alma (Mt 16:26).',
        arbol('Ver a Mariamne y a sus hijos en el árbol', 'mariamne')
      ],
      pensar: 'La envidia y la sospecha destruyeron la familia de Herodes. «la envidia es carcoma de los huesos» (Pr 14:30). ¿Hay algún celo o sospecha en tu familia que necesites llevar a Dios en oración antes de que crezca?'
    },
    {
      id: 'magos', n: 'Los magos y los niños de Belén', ref: 'Mateo 2:1-18; Miqueas 5:2; Jeremías 31:15; Éxodo 1:22', fecha: [-6, -4],
      visual: [
        img('hd-magos-herodes.webp', 'En una sala del palacio de Herodes en Jerusalén, a la luz de lámparas de aceite, el anciano rey Herodes, enfermo y desconfiado, recibe en secreto a tres sabios del oriente con ropas persas de viaje; un escriba sostiene un rollo abierto y un consejero se inclina para hablar al oído del rey', 'Herodes recibe en secreto a los magos y les pregunta por el tiempo de la aparición de la estrella (Mateo 2:7). Recreación.'),
        img('../imperio-persa/img/persia-magos-oriente.webp', 'Magos del oriente en camino, con camellos y ropas persas', 'Los magos del oriente. Recreación.'),
        mapa({ view: V.judea, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'belen', 'herodion', 'rama'], trazos: ['huida-egipto'] }),
        cita('Mateo 2:16-18', 'Herodes entonces, cuando se vio burlado por los magos, se enojó mucho, y mandó matar a todos los niños menores de dos años que había en Belén y en todos sus alrededores, conforme al tiempo que había inquirido de los magos. Entonces se cumplió lo que fue dicho por el profeta Jeremías, cuando dijo: Voz fue oída en Ramá, Grande lamentación, lloro y gemido; Raquel que llora a sus hijos, Y no quiso ser consolada, porque perecieron.')
      ],
      texto: [
        'Mateo cuenta que, cuando Jesús nació en Belén «en días del rey Herodes», llegaron a Jerusalén unos magos del oriente preguntando: «¿Dónde está el rey de los judíos, que ha nacido?» (Mt 2:1-2). Herodes tenía entonces unos setenta años, estaba enfermo y acababa de ejecutar a dos de sus hijos por sospechar de ellos.',
        { h: '«Se turbó, y toda Jerusalén con él»' },
        'La reacción de Herodes es la que se esperaría del hombre que conocemos por Josefo: «el rey Herodes se turbó, y toda Jerusalén con él» (Mt 2:3). La ciudad sabía lo que podía pasar cuando el rey se sentía amenazado. Herodes consultó a los principales sacerdotes y a los escribas, que conocían la profecía de Miqueas: el Mesías nacería en Belén (Mi 5:2). Entonces llamó a los magos en secreto, averiguó el tiempo de la estrella y les pidió que le avisaran, fingiendo que también quería adorar al niño.',
        { h: 'Los niños de Belén' },
        'Avisados en sueños, los magos volvieron por otro camino, y José huyó con el niño y su madre a Egipto. Cuando Herodes se vio burlado, mandó matar «a todos los niños menores de dos años que había en Belén y en todos sus alrededores» (Mt 2:16). Belén era una aldea pequeña: los estudiosos calculan que los niños de esa edad no pasarían de unos veinte. Para Mateo, el llanto de esas madres cumplía las palabras de Jeremías sobre Raquel que llora a sus hijos (Jer 31:15).',
        'La escena recuerda a otro rey que mandó matar a los niños de Israel: el faraón de Egipto (Éx 1:22). Moisés se salvó de él y llegó a ser el libertador de su pueblo; Jesús se salvó de Herodes para ser el Salvador del mundo.',
        { posturas: {
          titulo: '¿Por qué Josefo no menciona la matanza de Belén?',
          a: { n: 'Un hecho histórico pequeño', t: 'Para Josefo, que contó las muertes de esposas, hijos y nobles, la muerte de unos pocos niños en una aldea no era noticia. El hecho coincide con todo lo que sabemos del carácter de Herodes en sus últimos años.' },
          b: { n: 'Un relato con sentido simbólico', t: 'Algunos estudiosos piensan que Mateo construyó el episodio a partir del relato del faraón y de Moisés, para presentar a Jesús como el nuevo Moisés, y que no ocurrió como hecho.' },
          c: 'Mateo presenta el episodio como historia, con lugares y personas reales, y el silencio de una sola fuente no lo desmiente. El paralelo con Moisés es intencional, pero muestra cómo Dios repite sus caminos en la historia; no convierte el relato en una invención.'
        } },
        ir('Ver los pasajes del nacimiento en la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'Herodes quiso eliminar al Rey verdadero y no pudo. «El que mora en los cielos se reirá» (Sal 2:4). ¿Qué te dice esta historia cuando ves que los poderosos se oponen a Cristo en tu tiempo?'
    },
    {
      id: 'muerte', n: 'La muerte y el testamento de Herodes', ref: 'Mateo 2:19-20; Lucas 12:20; Salmo 49:16-17', fecha: -4,
      visual: [
        img('hd-funeral-herodes.webp', 'Un gran cortejo fúnebre real avanza por un camino del desierto de Judea hacia la colina cónica del Herodión: soldados con armadura, la guardia de tracios, germanos y gálatas, servidores con perfumes, y en el centro un féretro de oro adornado con piedras preciosas y cubierto con un manto de púrpura, sobre el que reposa una corona; el cuerpo no se ve', 'El funeral de Herodes, según la descripción de Josefo: un féretro de oro cubierto de púrpura, llevado hacia el Herodión. Recreación.'),
        foto('foto-sarcofago-herodes.jpg', 'Sarcófago de piedra caliza rojiza con decoración de rosetas, reconstruido a partir de fragmentos, en una sala de museo', 'El sarcófago hallado en 2007 en la ladera del Herodión, que Ehud Netzer atribuyó a Herodes. Museo de Israel, Jerusalén.', 'CC BY-SA 4.0 · Oren Rozen, vía Wikimedia Commons'),
        cita('Mateo 2:19-20', 'Pero después de muerto Herodes, he aquí un ángel del Señor apareció en sueños a José en Egipto, diciendo: Levántate, toma al niño y a su madre, y vete a tierra de Israel, porque han muerto los que procuraban la muerte del niño.')
      ],
      texto: [
        'En sus últimos meses, Herodes estaba gravemente enfermo. Josefo describe fiebre, comezón insoportable, dolores intestinales, hinchazón y llagas con gusanos. Buscó alivio en las aguas termales de Calirroe, junto al mar Muerto, sin resultado, y volvió a su palacio de Jericó.',
        { h: 'Crueldad hasta el final' },
        'Ni siquiera enfermo dejó de matar. Unos jóvenes, animados por dos maestros de la ley, bajaron con hachas el águila de oro que Herodes había puesto sobre la puerta del templo, porque la ley prohíbe las imágenes. Herodes los hizo quemar vivos. Después ordenó encerrar en el hipódromo de Jericó a los hombres principales de todo el reino, y mandó que, cuando él muriera, los mataran: así habría llanto en el país el día de su muerte. Su hermana Salomé los dejó libres. Cinco días antes de morir, ejecutó a su hijo Antípatro.',
        'Herodes murió en Jericó a los setenta años, en la primavera, poco antes de la Pascua. Mateo lo dice con sencillez: «después de muerto Herodes», un ángel avisó a José que volviera, «porque han muerto los que procuraban la muerte del niño» (Mt 2:19-20).',
        { h: 'Un funeral y una tumba' },
        'Josefo describe un funeral magnífico: un féretro de oro con piedras preciosas, el cuerpo cubierto de púrpura con corona y cetro, la guardia y el ejército, y quinientos servidores con perfumes, camino al Herodión. En 2007, el arqueólogo Ehud Netzer, que lo buscó durante treinta y cinco años, anunció el hallazgo de la tumba en la ladera del Herodión, con un sarcófago de piedra rojiza hecho pedazos. Algunos arqueólogos discuten la identificación. Netzer murió en 2010 al caer en el mismo lugar que excavaba.',
        { posturas: {
          titulo: '¿Cuándo murió Herodes?',
          a: { n: 'En el 4 a.C.', t: 'La fecha más aceptada, según los años de reinado que da Josefo, un eclipse de luna que menciona poco antes de su muerte y las fechas de sus hijos. Jesús habría nacido hacia el 6 o el 5 a.C.' },
          b: { n: 'En el 1 a.C.', t: 'Algunos estudiosos proponen otro eclipse y otra cuenta de los años; ubican el nacimiento de Jesús hacia el 3 o 2 a.C.' },
          c: 'En los dos casos Jesús nació «en días del rey Herodes», como dice el evangelio (Mt 2:1). El desfase con el año 1 viene de un cálculo del monje Dionisio el Exiguo, en el siglo VI.'
        } }
      ],
      pensar: 'Herodes murió rodeado de oro y nadie lo lloró. Jesús dijo del rico necio: «esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será?» (Lc 12:20). ¿Qué estás preparando que sí vaya a permanecer?'
    },
    {
      id: 'reparto', n: 'El reino dividido entre tres hijos', ref: 'Mateo 2:22; Lucas 19:12-15, 27; Lucas 3:1', fecha: [-4, 6],
      visual: [
        pasos([
          { t: '4 a.C.: el reino de Herodes a su muerte', fecha: -4, estado: { view: V.palestina, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'cesarea', 'jerico', 'paneas'] } },
          { t: 'Arquelao, etnarca de Judea, Samaria e Idumea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao'], lugares: ['jerusalen', 'samaria', 'cesarea', 'hebron'] } },
          { t: 'Antipas, tetrarca de Galilea y Perea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao', 'hd-antipas'], lugares: ['jerusalen', 'seforis', 'nazaret', 'maqueronte'] } },
          { t: 'Felipe, tetrarca de Batanea, Traconite, Auranítide e Iturea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao', 'hd-antipas', 'hd-felipe'], lugares: ['jerusalen', 'seforis', 'paneas', 'betsaida'] } }
        ]),
        tabla({
          titulo: 'El testamento de Herodes y la decisión de Augusto',
          cab: ['Heredero', 'Recibió', 'Título'],
          filas: [
            ['Arquelao', 'Judea, Samaria e Idumea, con Jerusalén y Cesarea', 'Etnarca (Herodes pedía rey)'],
            ['Antipas', 'Galilea y Perea', 'Tetrarca'],
            ['Felipe', 'Batanea, Traconite, Auranítide, Gaulanítide e Iturea', 'Tetrarca'],
            ['Salomé, hermana de Herodes', 'Las ciudades de Jamnia, Azoto y Fasaelis', 'Señora de esas ciudades']
          ]
        }),
        cita('Lucas 19:12-15', 'Dijo, pues: Un hombre noble se fue a un país lejano, para recibir un reino y volver. Y llamando a diez siervos suyos, les dio diez minas, y les dijo: Negociad entre tanto que vengo. Pero sus conciudadanos le aborrecían, y enviaron tras él una embajada, diciendo: No queremos que éste reine sobre nosotros. Aconteció que vuelto él, después de recibir el reino, mandó llamar ante él a aquellos siervos a los cuales había dado el dinero, para saber lo que había negociado cada uno.')
      ],
      texto: [
        'Herodes cambió su testamento varias veces. En el último dejó su reino a tres hijos: Arquelao como rey de Judea, Antipas como tetrarca de Galilea y Perea, y Felipe como tetrarca del noreste. Pero el testamento de un rey cliente no valía hasta que lo confirmara el emperador, y todos viajaron a Roma.',
        { h: 'Un viaje a Roma para recibir un reino' },
        'Antes de partir, Arquelao enfrentó una revuelta en el templo durante la Pascua y la reprimió con el ejército: murieron unos tres mil judíos. En Roma, Antipas reclamó el trono con un testamento anterior que lo nombraba a él. Y llegó una embajada de cincuenta judíos, apoyada por miles de judíos de Roma, para pedir a Augusto que no les diera ningún Herodes como rey y uniera Judea a la provincia de Siria. Mientras tanto, en Judea estallaron rebeliones en varias partes, y Varo, el gobernador de Siria, las aplastó: según Josefo, crucificó a dos mil hombres alrededor de Jerusalén.',
        'Augusto respetó en lo esencial el testamento, pero no dio a nadie el título de rey: Arquelao sería etnarca, y rey solo si lo merecía.',
        { h: 'Una parábola con trasfondo conocido' },
        'Treinta años después, subiendo de Jericó, la ciudad del palacio de Arquelao, Jesús contó la parábola de «un hombre noble» que «se fue a un país lejano, para recibir un reino y volver», mientras sus conciudadanos enviaban tras él una embajada diciendo: «No queremos que éste reine sobre nosotros» (Lc 19:12-14). Sus oyentes reconocían la historia. Pero Jesús la usó para hablar de sí mismo: él también se iría para recibir el reino y volvería, y ese día pediría cuentas a sus siervos y juzgaría a los que rechazaron su reinado (Lc 19:15, 27).',
        { h: 'José evita Judea' },
        'Al volver de Egipto, José supo «que Arquelao reinaba en Judea en lugar de Herodes su padre, tuvo temor de ir allá» y se fue a Galilea, a Nazaret (Mt 2:22-23). Así el reparto del reino de Herodes ayudó a que Jesús creciera en Galilea, como Dios lo había dispuesto.',
        ir('Ver en el mapa de El mundo judío quién gobernaba en tiempos de Jesús', R.mundo + '#panorama/2')
      ],
      pensar: 'Jesús tomó una historia conocida para enseñar que él volverá como Rey y pedirá cuentas. Si hoy volviera, ¿qué encontraría en lo que te ha confiado?'
    }
  ];

  window.__HD.grande = grande;
})();
/* La dinastía de Herodes · ruta III. Los hijos (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA III. Los hijos: Arquelao, Felipe y Antipas ==================
  const hijos = [
    {
      id: 'arquelao', n: 'Arquelao, etnarca de Judea', ref: 'Mateo 2:22-23; Hechos 5:37; Lucas 2:2', fecha: [-4, 6],
      visual: [
        img('hd-arquelao-pascua.webp', 'En los atrios del templo de Jerusalén, llenos de peregrinos en la Pascua, el joven Arquelao, de unos veinte años, con manto púrpura y diadema de tela blanca, rodeado de su guardia, habla desde una plataforma elevada a una multitud agitada que levanta los brazos; al fondo, el santuario de piedra blanca y oro', 'Arquelao en el templo durante la Pascua del 4 a.C., poco antes de reprimir la revuelta con el ejército. Recreación.'),
        pasos([
          { t: '4 a.C.: Arquelao recibe Judea, Samaria e Idumea, con Jerusalén y Cesarea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao'], lugares: ['jerusalen', 'cesarea', 'samaria', 'jerico', 'hebron'] } },
          { t: '6 d.C.: Augusto lo destierra a Viena, en la Galia; su territorio pasa a ser provincia romana, con un prefecto en Cesarea', fecha: 6, estado: { view: V.palestina, capas: ['hd-provincia'], lugares: ['jerusalen', 'cesarea', 'samaria'] } }
        ]),
        cita('Mateo 2:19-23', 'Pero después de muerto Herodes, he aquí un ángel del Señor apareció en sueños a José en Egipto, diciendo: Levántate, toma al niño y a su madre, y vete a tierra de Israel, porque han muerto los que procuraban la muerte del niño. Entonces él se levantó, y tomó al niño y a su madre, y vino a tierra de Israel. Pero oyendo que Arquelao reinaba en Judea en lugar de Herodes su padre, tuvo temor de ir allá; pero avisado por revelación en sueños, se fue a la región de Galilea, y vino y habitó en la ciudad que se llama Nazaret, para que se cumpliese lo que fue dicho por los profetas, que habría de ser llamado nazareno.')
      ],
      texto: [
        'Arquelao era hijo de Herodes y de Maltace, una samaritana. Tenía unos dieciocho años cuando murió su padre, y heredó la parte más importante del reino: Judea con Jerusalén y el templo, Samaria e Idumea. Su gobierno comenzó con sangre. En la primera Pascua, la multitud del templo le pidió castigar a los consejeros de su padre que habían quemado a los jóvenes del águila, y bajar los impuestos. Arquelao respondió enviando al ejército: murieron unos tres mil peregrinos, y se suspendió la fiesta.',
        { h: 'Diez años de mal gobierno' },
        'Augusto le dio el título de etnarca, con la promesa de hacerlo rey si gobernaba bien. No lo logró. Josefo dice que trató con brutalidad a judíos y samaritanos. Cambió tres veces de sumo sacerdote. Y causó escándalo al casarse con Glafira, que había sido esposa de su medio hermano Alejandro y tenía hijos de él: la ley prohibía tomar a la mujer del hermano (Lv 18:16). Construyó palacios en Jericó y fundó una aldea con su propio nombre, Arquelaida.',
        'Por eso José, al volver de Egipto, «oyendo que Arquelao reinaba en Judea en lugar de Herodes su padre, tuvo temor de ir allá» (Mt 2:22). Avisado por Dios en sueños, se fue a Galilea, donde gobernaba su hermano Antipas, y se estableció en Nazaret.',
        { h: 'El destierro y el censo' },
        'En el año 6 d.C., una delegación de judíos y samaritanos —que rara vez se ponían de acuerdo en algo— viajó a Roma a acusarlo. Augusto lo llamó, lo escuchó y lo desterró a Viena, en la Galia, donde murió. Judea, Samaria e Idumea pasaron a ser una provincia romana gobernada por un prefecto que vivía en Cesarea. El primero fue Coponio; el quinto, veinte años después, Poncio Pilato.',
        'Para fijar los impuestos de la nueva provincia, Quirinio, el gobernador de Siria, hizo un censo. Contra ese censo se levantó Judas el galileo, que enseñaba que pagar tributo a Roma era aceptar a otro señor en lugar de Dios (Hch 5:37). De esa idea nacieron los zelotes. La pregunta que años después los fariseos y los herodianos le hicieron a Jesús —«¿Es lícito dar tributo a César, o no?»— venía de aquí.',
        ir('Ver en El mundo judío: el prefecto romano, de Coponio a Pilato', R.mundo + '#poder/1')
      ],
      pensar: 'José obedeció la voz de Dios y por eso Jesús creció en Nazaret. ¿Cómo te ayuda esta historia a confiar en que Dios guía tus pasos aun a través de las malas decisiones de los gobernantes?'
    },
    {
      id: 'felipe', n: 'Felipe, el tetrarca del noreste', ref: 'Lucas 3:1; Mateo 16:13-16; Juan 1:44; Lucas 9:10', fecha: [-4, 34],
      visual: [
        img('hd-felipe-paneas.webp', 'Junto a la gran gruta de Paneas, al pie del monte Hermón, de donde brota una de las fuentes del Jordán, el tetrarca Felipe, un hombre sereno de unos cuarenta años con manto azul oscuro, recorre las obras de la nueva ciudad de Cesarea; frente a la roca se ve un templo de mármol blanco y obreros con piedras', 'Felipe el tetrarca en Paneas, la ciudad que reconstruyó con el nombre de Cesarea. Recreación.'),
        mapa({ view: V.norte, capas: ['hd-felipe', 'hd-antipas'], lugares: ['paneas', 'cesarea-filipo', 'betsaida', 'capernaum', 'hermon', 'gamla', 'tiberias'] }),
        cita('Mateo 16:13-16', 'Viniendo Jesús a la región de Cesarea de Filipo, preguntó a sus discípulos, diciendo: ¿Quién dicen los hombres que es el Hijo del Hombre? Ellos dijeron: Unos, Juan el Bautista; otros, Elías; y otros, Jeremías, o alguno de los profetas. El les dijo: Y vosotros, ¿quién decís que soy yo? Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del Dios viviente.')
      ],
      texto: [
        'Felipe era hijo de Herodes y de Cleopatra de Jerusalén. Heredó las tierras del noreste, al este y al norte del mar de Galilea, que Lucas llama «Iturea» y «la provincia de Traconite» (Lc 3:1): una región de mesetas volcánicas, aldeas de pastores y gente en su mayoría siria, árabe y griega. Gobernó treinta y siete años, del 4 a.C. al 34 d.C., y fue el más tranquilo de los hijos de Herodes.',
        { h: 'Un príncipe que juzgaba en el camino' },
        'Josefo dice que Felipe gobernó con moderación y que viajaba por su territorio con unos pocos acompañantes, llevando consigo su silla de juez: si alguien necesitaba justicia, la armaban allí mismo y él oía la causa. Como sus súbditos eran mayormente gentiles, fue el primer gobernante judío que acuñó monedas con la imagen del emperador y con la suya propia, algo que su padre y su hermano Antipas nunca hicieron.',
        { h: 'Dos ciudades del evangelio' },
        'Felipe reconstruyó dos ciudades que aparecen en los evangelios. Junto a la gruta de Paneas, en una de las fuentes del Jordán, donde se adoraba al dios griego Pan, levantó una ciudad que llamó Cesarea en honor del emperador; para distinguirla de la del mar, se la conocía como Cesarea de Filipo. Allí, rodeado de templos paganos, Jesús preguntó a sus discípulos quién decían ellos que era él, y Pedro respondió: «Tú eres el Cristo, el Hijo del Dios viviente» (Mt 16:16).',
        'También engrandeció Betsaida, a la orilla norte del lago, y la llamó Julias en honor de la familia del emperador. Betsaida era la ciudad de Andrés, Pedro y Felipe el apóstol (Jn 1:44). Cuando Antipas mató a Juan el Bautista, Jesús cruzó el lago y se retiró a un lugar desierto cerca de Betsaida (Mt 14:13; Lc 9:10): dejaba el territorio de Antipas por el de Felipe. Allí alimentó a los cinco mil.',
        'Felipe se casó con Salomé, la hija de Herodías. Murió sin hijos, y su territorio pasó por unos años a la provincia de Siria, hasta que Calígula se lo dio en el 37 d.C. a su sobrino Agripa I.',
        arbol('Ver a Felipe en el árbol', 'felipe')
      ],
      pensar: 'En Cesarea de Filipo, una ciudad dedicada a César y al dios Pan, Pedro confesó que Jesús es el Cristo. ¿Dónde te toca a ti confesar tu fe en Jesús en medio de otros señores y otros dioses?'
    },
    {
      id: 'antipas', n: 'Antipas, el constructor de Galilea', ref: 'Lucas 3:1; Lucas 8:3; Hechos 13:1; Juan 6:23; Lucas 7:24-25', fecha: [-4, 39],
      visual: [
        img('../mundo-judio/img/mj-antipas-banquete.webp', 'En un salón de un palacio herodiano de Galilea, decorado con mosaicos y columnas, Herodes Antipas reclinado en un diván preside un banquete con nobles galileos, oficiales y tribunos', 'Herodes Antipas da una cena a «sus príncipes y tribunos y a los principales de Galilea» (Marcos 6:21). Recreación.'),
        mapa({ view: V.galilea, capas: ['hd-antipas'], lugares: ['seforis', 'nazaret', 'tiberias', 'magdala', 'capernaum', 'cana', 'nain'] }),
        tabla({
          titulo: 'Herodes Antipas en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Padres', 'Herodes el Grande y Maltace, samaritana; hermano de Arquelao'],
            ['Gobernó', 'Galilea y Perea, del 4 a.C. al 39 d.C. (43 años)'],
            ['Título', 'Tetrarca; la gente lo llamaba rey (Mr 6:14)'],
            ['Capitales', 'Séforis y, desde hacia el 20 d.C., Tiberíades'],
            ['Esposas', 'Una hija de Aretas IV, rey nabateo; después, Herodías'],
            ['En su corte', 'Chuza, su intendente, esposo de Juana (Lc 8:3); Manaén, criado con él (Hch 13:1)'],
            ['Monedas', 'Sin imágenes humanas, con palmas y cañas, para no ofender a los judíos']
          ]
        })
      ],
      texto: [
        'Herodes Antipas, hermano de Arquelao, gobernó Galilea y Perea durante cuarenta y tres años. Es el «Herodes» de los evangelios durante toda la vida adulta de Jesús: Jesús creció en su territorio, predicó en sus aldeas y murió después de pasar por su presencia.',
        { h: 'Séforis, a una hora de Nazaret' },
        'En el 4 a.C., durante las revueltas que siguieron a la muerte de Herodes, los romanos de Varo quemaron Séforis, la ciudad principal de Galilea. Antipas la reconstruyó y la hizo su capital, «el adorno de toda Galilea», según Josefo. Séforis estaba a unos seis kilómetros de Nazaret. Algunos piensan que José y Jesús, como artesanos, pudieron trabajar en su reconstrucción; los evangelios no lo dicen, y nunca mencionan que Jesús entrara en Séforis.',
        { h: 'Tiberíades, una ciudad sobre tumbas' },
        'Hacia el año 20 d.C., Antipas fundó a orillas del lago una nueva capital y la llamó Tiberíades, en honor del emperador Tiberio. La construyó sobre un antiguo cementerio, y por eso los judíos que guardaban las leyes de pureza no querían vivir allí; Antipas tuvo que poblarla con gente pobre, libertos y extranjeros. Juan menciona barcas que venían de Tiberias (Jn 6:23), pero los evangelios tampoco cuentan que Jesús entrara en ella. Jesús enseñó en las aldeas y en Capernaúm, no en las ciudades del tetrarca.',
        { h: 'Un príncipe hábil y cuidadoso' },
        'Antipas fue más prudente que su padre y que Arquelao. Sus monedas no llevaban imágenes humanas. Subía a Jerusalén para las fiestas, como en la Pascua en que Pilato le envió a Jesús (Lc 23:7). Su corte llegó a tocar al evangelio: Juana, esposa de Chuza, el intendente de Herodes, ayudaba a Jesús con sus bienes (Lc 8:3), y Manaén, que se había criado con Herodes el tetrarca, llegó a ser profeta y maestro en la iglesia de Antioquía (Hch 13:1).',
        'Cuando Jesús preguntó a la gente qué había salido a ver al desierto —«¿Una caña sacudida por el viento?… ¿A un hombre cubierto de vestiduras delicadas?» (Lc 7:24-25)—, el contraste era claro: Juan no era como los que «viven en deleites, en los palacios de los reyes». Algunos estudiosos piensan que la caña alude a las monedas de Antipas, que llevaban una caña; es una sugerencia, no algo seguro.'
      ],
      pensar: 'Juana venía de la casa de Herodes y Manaén se crió con él; los dos siguieron a Cristo. ¿Qué te enseña esto sobre el alcance del evangelio en los lugares de poder y sobre las personas que tú darías por perdidas?'
    },
    {
      id: 'juan', n: 'Antipas, Herodías y Juan el Bautista', ref: 'Marcos 6:17-29; Lucas 3:19-20; Mateo 14:3-12; Levítico 18:16', fecha: [28, 36],
      visual: [
        img('hd-juan-antipas.webp', 'En un patio de piedra de la fortaleza de Maqueronte, sobre los montes de Moab, Juan el Bautista, flaco y tostado, con vestido de pelo de camello, encadenado entre dos soldados, habla con firmeza al tetrarca Herodes Antipas, que lo escucha perplejo; detrás de Antipas, Herodías, con un velo fino y joyas de oro, mira a Juan con odio', '«No te es lícito tener la mujer de tu hermano» (Marcos 6:18). Juan el Bautista ante Herodes Antipas y Herodías. Recreación.'),
        mapa({ view: V.palestina, capas: ['hd-antipas'], lugares: ['maqueronte', 'tiberias', 'betabara', 'enon', 'petra', 'jerusalen'] }),
        foto('foto-maqueronte.jpg', 'Ruinas de piedra excavadas en la cima de la colina de Maqueronte, con una gran cisterna abierta y, al fondo, los montes áridos de Moab', 'Restos de la fortaleza de Maqueronte, en Perea, donde según Josefo Juan el Bautista estuvo preso y fue ejecutado.', 'CC BY-SA 2.0 · Carole Raddato, vía Wikimedia Commons'),
        cita('Marcos 6:17-20', 'Porque el mismo Herodes había enviado y prendido a Juan, y le había encadenado en la cárcel por causa de Herodías, mujer de Felipe su hermano; pues la había tomado por mujer. Porque Juan decía a Herodes: No te es lícito tener la mujer de tu hermano. Pero Herodías le acechaba, y deseaba matarle, y no podía; porque Herodes temía a Juan, sabiendo que era varón justo y santo, y le guardaba a salvo; y oyéndole, se quedaba muy perplejo, pero le escuchaba de buena gana.')
      ],
      texto: [
        'Antipas estuvo casado muchos años con una hija de Aretas IV, el rey nabateo de Petra, un matrimonio que aseguraba la paz en la frontera sur de Perea. En un viaje a Roma se hospedó en casa de su medio hermano Herodes II y se enamoró de su esposa, Herodías, que era además sobrina de ambos. Acordaron casarse: ella dejaría a su marido y él a su esposa. La hija de Aretas se enteró, pidió ir a Maqueronte, en la frontera, y desde allí huyó con su padre.',
        { h: '«No te es lícito»' },
        'Juan el Bautista no calló. Le decía a Antipas: «No te es lícito tener la mujer de tu hermano» (Mr 6:18). La ley de Moisés lo prohibía (Lv 18:16; 20:21). Lucas agrega que Juan lo reprendía también por «todas las maldades que Herodes había hecho» (Lc 3:19). Antipas lo hizo encarcelar. Josefo, que no menciona la reprensión, dice que lo hizo por temor a que la influencia de Juan sobre el pueblo terminara en una rebelión, y que lo llevó a Maqueronte.',
        { h: 'Un hombre dividido' },
        'Marcos muestra a un Antipas dividido. Herodías quería matar a Juan, «y no podía; porque Herodes temía a Juan, sabiendo que era varón justo y santo, y le guardaba a salvo; y oyéndole, se quedaba muy perplejo, pero le escuchaba de buena gana» (Mr 6:19-20). Le gustaba oírlo, pero no estaba dispuesto a dejar su pecado.',
        'En la fiesta de su cumpleaños, ante los principales de Galilea, Antipas hizo un juramento imprudente a la hija de Herodías, y ella, aconsejada por su madre, pidió la cabeza de Juan. «El rey se entristeció mucho; pero a causa del juramento, y de los que estaban con él a la mesa, no quiso desecharla» (Mr 6:26). Pesó más su orgullo ante los invitados que su conciencia.',
        { h: 'El juicio de la historia' },
        'Pocos años después, hacia el 36 d.C., Aretas atacó a Antipas y destruyó su ejército. Josefo cuenta que muchos judíos vieron en esa derrota el castigo de Dios por la muerte de Juan, «llamado el Bautista», un hombre bueno que exhortaba a los judíos a practicar la justicia. Es una de las pocas menciones de Juan fuera de la Biblia, y confirma lo que dicen los evangelios.',
        arbol('Ver a Herodías en el árbol', 'herodias')
      ],
      pensar: 'Antipas escuchaba a Juan con gusto, pero no se arrepintió, y terminó cediendo ante la presión de los demás. ¿Hay algo que Dios te ha mostrado y que todavía postergas por lo que dirán los que te rodean?'
    },
    {
      id: 'jesus', n: 'Antipas y Jesús: «aquella zorra»', ref: 'Lucas 9:7-9; Lucas 13:31-33; Marcos 8:15; Lucas 23:6-12; Hechos 4:27', fecha: [29, 30],
      visual: [
        img('../mundo-judio/img/mj-antipas-jesus.webp', 'En una sala del palacio asmoneo de Jerusalén, Herodes Antipas, sentado, observa con curiosidad burlona a Jesús, que está de pie en silencio, visto de espaldas, mientras soldados de Antipas lo rodean y sacerdotes lo acusan', 'Jesús ante Herodes Antipas en Jerusalén (Lucas 23:8-11). Recreación.'),
        cita('Lucas 23:6-12', 'Entonces Pilato, oyendo decir, Galilea, preguntó si el hombre era galileo. Y al saber que era de la jurisdicción de Herodes, le remitió a Herodes, que en aquellos días también estaba en Jerusalén. Herodes, viendo a Jesús, se alegró mucho, porque hacía tiempo que deseaba verle; porque había oído muchas cosas acerca de él, y esperaba verle hacer alguna señal. Y le hacía muchas preguntas, pero él nada le respondió. Y estaban los principales sacerdotes y los escribas acusándole con gran vehemencia. Entonces Herodes con sus soldados le menospreció y escarneció, vistiéndole de una ropa espléndida; y volvió a enviarle a Pilato. Y se hicieron amigos Pilato y Herodes aquel día; porque antes estaban enemistados entre sí.'),
        cita('Lucas 13:31-33', 'Aquel mismo día llegaron unos fariseos, diciéndole: Sal, y vete de aquí, porque Herodes te quiere matar. Y les dijo: Id, y decid a aquella zorra: He aquí, echo fuera demonios y hago curaciones hoy y mañana, y al tercer día termino mi obra. Sin embargo, es necesario que hoy y mañana y pasado mañana siga mi camino; porque no es posible que un profeta muera fuera de Jerusalén.', 'Lucas 13')
      ],
      texto: [
        'Antipas oyó hablar de Jesús cuando su fama se extendió por Galilea. Lucas dice que «estaba perplejo», porque unos decían que Juan había resucitado, y que Antipas dijo: «A Juan yo le hice decapitar; ¿quién, pues, es éste, de quien oigo tales cosas? Y procuraba verle» (Lc 9:7-9). Marcos y Mateo cuentan que su conciencia lo atormentaba: pensaba que Jesús era Juan vuelto de los muertos (Mr 6:16).',
        { h: '«Id, y decid a aquella zorra»' },
        'Más tarde, mientras Jesús enseñaba camino a Jerusalén, unos fariseos le dijeron: «Sal, y vete de aquí, porque Herodes te quiere matar» (Lc 13:31). Jesús respondió: «Id, y decid a aquella zorra: He aquí, echo fuera demonios y hago curaciones hoy y mañana, y al tercer día termino mi obra» (Lc 13:32). La zorra era, para los judíos, un animal astuto y destructivo, pero pequeño al lado del león. Jesús no le temía: su vida no estaba en manos de Antipas, sino que seguiría el camino que el Padre le había trazado hasta Jerusalén.',
        'Jesús advirtió también a sus discípulos: «guardaos de la levadura de los fariseos, y de la levadura de Herodes» (Mr 8:15). La levadura de Herodes era la de quienes ponen el poder y la conveniencia política por encima de Dios.',
        { h: 'Jesús ante Herodes' },
        'En la última Pascua, Antipas estaba en Jerusalén. Cuando Pilato supo que Jesús era galileo, se lo envió, quizás como cortesía o para librarse del caso. «Herodes, viendo a Jesús, se alegró mucho», porque esperaba verle hacer alguna señal (Lc 23:8). Le hizo muchas preguntas, «pero él nada le respondió» (Lc 23:9). Jesús, que había hablado con Pilato, guardó silencio ante el hombre que había matado a Juan y que solo buscaba un espectáculo.',
        'Entonces Antipas y sus soldados se burlaron de él, lo vistieron con una ropa espléndida y lo devolvieron a Pilato. «Y se hicieron amigos Pilato y Herodes aquel día» (Lc 23:12). Pilato reconoció después que ni él ni Herodes habían hallado en Jesús nada digno de muerte (Lc 23:15).',
        'La iglesia de Jerusalén vio en esta escena el cumplimiento del Salmo 2: «se unieron en esta ciudad contra tu santo Hijo Jesús, a quien ungiste, Herodes y Poncio Pilato» (Hch 4:27), para hacer lo que Dios había determinado.',
        ir('Ver en El mundo judío: Herodes Antipas y Felipe', R.mundo + '#poder/2')
      ],
      pensar: 'Antipas quería ver a Jesús para ver una señal, no para creer, y Jesús no le habló. ¿Con qué actitud te acercas tú a Jesús: buscando algo que te asombre, o dispuesto a obedecer lo que te diga?'
    },
    {
      id: 'fin', n: 'El fin de Antipas', ref: 'Lucas 1:52; Salmo 146:3-4; Proverbios 16:18', fecha: [36, 39],
      visual: [
        pasos([
          { t: '36 d.C.: Aretas IV, el padre de la primera esposa de Antipas, lo ataca desde Petra y destruye su ejército', fecha: 36, estado: { view: V.sur, capas: ['hd-antipas'], lugares: ['petra', 'maqueronte', 'tiberias'] } },
          { t: '37 d.C.: Calígula nombra rey a Agripa I, hermano de Herodías, sobre la antigua tetrarquía de Felipe', fecha: 37, estado: { view: V.palestina, capas: ['hd-antipas', 'hd-agripa1-37'], lugares: ['tiberias', 'paneas', 'jerusalen'] } },
          { t: '39 d.C.: Antipas va a Roma a pedir el título de rey; Calígula lo destierra a Lugdunum, en la Galia', fecha: 39, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['tiberias', 'puteoli', 'roma', 'h-lugdunum'], trazos: ['hd-antipas-39'] } },
          { t: '40 d.C.: sus tierras, Galilea y Perea, pasan a Agripa I', fecha: 40, estado: { view: V.palestina, capas: ['hd-agripa1-40'], lugares: ['tiberias', 'paneas', 'maqueronte', 'jerusalen'] } }
        ]),
        cita('Salmo 146:3-4', 'No confiéis en los príncipes, Ni en hijo de hombre, porque no hay en él salvación. Pues sale su aliento, y vuelve a la tierra; En ese mismo día perecen sus pensamientos.')
      ],
      texto: [
        'Antipas gobernó más tiempo que nadie de su familia, salvo su padre. Pero su final fue humillante, y lo provocó su propia ambición.',
        { h: 'La derrota' },
        'Aretas IV, el rey nabateo, nunca le perdonó que hubiera repudiado a su hija para casarse con Herodías. Hacia el 36 d.C., una disputa de límites le dio la excusa, y su ejército destruyó al de Antipas. Antipas pidió ayuda al emperador Tiberio, que ordenó al gobernador de Siria castigar a Aretas; pero Tiberio murió en el 37, y la campaña se suspendió.',
        { h: 'Los celos de Herodías' },
        'Ese mismo año, el nuevo emperador, Calígula, dio la antigua tetrarquía de Felipe y el título de rey a su amigo Agripa, hermano de Herodías. Agripa había vivido años antes de la caridad de Antipas, que le había dado un cargo menor en Tiberíades. Ahora el pobre de la familia era rey, y el tetrarca seguía siendo tetrarca. Herodías no lo soportó, y presionó a su esposo para que fuera a Roma a pedir también el título de rey.',
        'Antipas viajó en el 39 d.C. y encontró a Calígula en Bayas, cerca de Puteoli. Pero Agripa había enviado antes una carta acusándolo de haber conspirado contra Roma y de tener armas guardadas para setenta mil soldados. Antipas no pudo negar lo de las armas. Calígula le quitó su tetrarquía y sus bienes, se los dio a Agripa, y lo desterró a Lugdunum, la actual Lyon, en la Galia.',
        'Calígula ofreció a Herodías quedarse con sus bienes, por ser hermana de Agripa. Josefo cuenta que ella se negó y prefirió acompañar a su marido en el destierro. Allí desaparecen los dos de la historia.',
        { h: 'El que quita de los tronos' },
        'Antipas había matado a Juan para no quedar mal ante sus invitados, y se había burlado de Jesús. Terminó sus días lejos de su tierra, sin título y sin reino, por pedir más de lo que tenía. María había cantado que Dios «quitó de los tronos a los poderosos, y exaltó a los humildes» (Lc 1:52). Y el salmista advierte: «No confiéis en los príncipes, ni en hijo de hombre» (Sal 146:3).',
        arbol('Ver a Antipas en el árbol', 'antipas')
      ],
      pensar: 'Antipas lo perdió todo por desear un título más. ¿Qué ambición, aunque parezca pequeña, podría llevarte a perder lo que Dios ya te ha dado?'
    }
  ];

  window.__HD.hijos = hijos;
})();
/* La dinastía de Herodes · ruta IV. Las mujeres de la casa de Herodes (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA IV. Las mujeres de la casa de Herodes ==================
  const mujeres = [
    {
      id: 'mariamne', n: 'Mariamne y Salomé: la reina y la intrigante', ref: 'Proverbios 31:30; Proverbios 14:30; 1 Pedro 3:3-4', fecha: [-37, 10],
      visual: [
        img('hd-mariamne.webp', 'En una sala del palacio de Herodes, la reina Mariamne, joven princesa asmonea de porte digno, de pie entre dos guardias, mira de frente al rey Herodes en su trono', 'Mariamne ante Herodes, poco antes de su condena. Recreación.'),
        tabla({
          titulo: 'Dos mujeres en la corte de Herodes',
          cab: ['', 'Mariamne', 'Salomé'],
          filas: [
            ['Origen', 'Princesa asmonea, nieta de Hircano II y de Aristóbulo II', 'Idumea, hermana de Herodes'],
            ['Relación con el rey', 'Su segunda esposa, desde el 37 a.C.', 'Su hermana y consejera'],
            ['Cómo la describe Josefo', 'Hermosa, casta, orgullosa de su linaje; despreciaba a la familia de Herodes', 'Celosa, astuta, hábil para acusar'],
            ['Su final', 'Ejecutada en el 29 a.C.', 'Murió hacia el 10 d.C., dueña de Jamnia, Azoto y Fasaelis, que dejó a Livia, la esposa de Augusto'],
            ['Su descendencia', 'Su nieto Agripa I y su nieta Herodías; su bisnieto Agripa II', 'Su hija Berenice fue la madre de Agripa I y de Herodías']
          ]
        }),
        cita('Proverbios 31:30', 'Engañosa es la gracia, y vana la hermosura; La mujer que teme a Jehová, ésa será alabada.')
      ],
      texto: [
        'Dos mujeres marcaron la corte de Herodes en sus primeros años: Mariamne, su esposa, y Salomé, su hermana. Sus nombres aparecen en Josefo una y otra vez, y entre las dos se juega buena parte de la tragedia de la familia.',
        { h: 'Mariamne, la última princesa asmonea' },
        'Mariamne era nieta de los dos hermanos que se habían disputado el trono antes de Roma, Hircano II y Aristóbulo II. Por sus venas corría la sangre de los macabeos, y el pueblo la veía como la verdadera reina. Josefo la describe como una mujer de gran belleza y de conducta irreprochable, pero orgullosa: no ocultaba su desprecio por la familia idumea de su esposo, ni le perdonaba la muerte de su hermano y de su abuelo. Herodes la amó con pasión, y aun después de matarla puso su nombre a una de las tres grandes torres de su palacio en Jerusalén.',
        'Lo que Herodes no pudo destruir fue su descendencia. Los nietos de Mariamne —Agripa I y Herodías— y su bisnieto Agripa II son los Herodes de Hechos y de los evangelios. El pueblo aceptó mejor a Agripa I precisamente porque era «nieto de Mariamne».',
        { h: 'Salomé, la hermana del rey' },
        'Salomé fue la figura más constante de la corte: vivió más que su hermano y lo sobrevivió casi quince años. Josefo la muestra detrás de casi todas las acusaciones: contra Mariamne, contra la madre de Mariamne, contra su propio segundo esposo, Costobaro, a quien denunció y que fue ejecutado, y contra los hijos de Mariamne. Quiso casarse con un consejero árabe y Herodes se lo impidió. Al final, sin embargo, fue ella la que dejó libres a los notables encerrados en el hipódromo de Jericó, cuando Herodes había ordenado matarlos el día de su muerte.',
        'Salomé recibió en herencia tres ciudades, que al morir dejó a Livia, la esposa de Augusto. Su hija Berenice se casó con Aristóbulo, hijo de Mariamne; así, la sangre de la reina y la de la intrigante se unieron en los nietos de ambas.',
        { h: 'Belleza, linaje y temor de Dios' },
        'Ninguna de las dos aparece en la Biblia, pero sus vidas ilustran lo que dice Proverbios: «Engañosa es la gracia, y vana la hermosura; la mujer que teme a Jehová, ésa será alabada» (Pr 31:30). La belleza y el linaje de Mariamne no la libraron; la astucia de Salomé le dio poder, pero dejó tras de sí una familia destruida.',
        arbol('Ver a Mariamne y a Salomé en el árbol', 'mariamne')
      ],
      pensar: 'Pedro enseña que el adorno que vale delante de Dios es «el interno, el del corazón» (1 P 3:4). ¿Qué estás cultivando con más cuidado: lo que los demás ven, o lo que Dios ve?'
    },
    {
      id: 'herodias', n: 'Herodías, la reina ambiciosa', ref: 'Mateo 14:3-11; Marcos 6:17-28; Lucas 3:19; Mateo 11:14; 1 Reyes 21:25', fecha: [-15, 39],
      visual: [
        img('hd-juan-antipas.webp', 'Juan el Bautista encadenado habla con firmeza al tetrarca Herodes Antipas; detrás de él, Herodías mira a Juan con odio', 'Herodías, detrás de Antipas, escucha la reprensión de Juan el Bautista. Recreación.'),
        tabla({
          titulo: 'La vida de Herodías',
          cab: ['Etapa', 'Qué pasó'],
          filas: [
            ['Nacimiento', 'Hija de Aristóbulo (hijo de Herodes y Mariamne) y de Berenice; hermana de Agripa I'],
            ['Primer matrimonio', 'Con su tío Herodes II, hijo de Herodes y Mariamne II; tuvieron una hija, Salomé'],
            ['Segundo matrimonio', 'Con otro tío, Antipas, que repudió a su esposa nabatea'],
            ['Juan el Bautista', 'Lo odiaba por su reprensión; pidió su cabeza por medio de su hija (Mt 14:8)'],
            ['Ambición', 'Celosa de su hermano Agripa, empujó a Antipas a pedir en Roma el título de rey'],
            ['Final', 'Desterrada con Antipas a Lugdunum, en la Galia (39 d.C.)']
          ]
        }),
        cita('Mateo 14:3-11', 'Porque Herodes había prendido a Juan, y le había encadenado y metido en la cárcel, por causa de Herodías, mujer de Felipe su hermano; porque Juan le decía: No te es lícito tenerla. Y Herodes quería matarle, pero temía al pueblo; porque tenían a Juan por profeta. Pero cuando se celebraba el cumpleaños de Herodes, la hija de Herodías danzó en medio, y agradó a Herodes, por lo cual éste le prometió con juramento darle todo lo que pidiese. Ella, instruida primero por su madre, dijo: Dame aquí en un plato la cabeza de Juan el Bautista. Entonces el rey se entristeció; pero a causa del juramento, y de los que estaban con él a la mesa, mandó que se la diesen, y ordenó decapitar a Juan en la cárcel. Y fue traída su cabeza en un plato, y dada a la muchacha; y ella la presentó a su madre.')
      ],
      texto: [
        'Herodías era nieta de Herodes el Grande y de Mariamne. Su padre, Aristóbulo, fue uno de los hijos que Herodes mandó estrangular cuando ella era niña. Se casó con su tío Herodes II, a quien Marcos y Mateo llaman Felipe (Mr 6:17), y tuvieron una hija. Herodes II había sido nombrado heredero en uno de los testamentos de su padre, pero lo borró después; vivía como un particular rico, sin territorio.',
        { h: 'Una mujer que quería ser reina' },
        'Cuando Antipas, tetrarca de Galilea, se enamoró de ella, Herodías aceptó dejar a su marido. Josefo lo dice con claridad: lo hizo para confundir las leyes de su pueblo, al casarse con el hermano de su marido estando este vivo. La ley lo prohibía (Lv 18:16). Juan el Bautista lo denunció públicamente, y Herodías no se lo perdonó. Marcos dice que ella «le acechaba, y deseaba matarle, y no podía» (Mr 6:19), hasta que encontró la ocasión en el cumpleaños de Antipas. Mateo precisa que la hija pidió la cabeza de Juan «instruida primero por su madre» (Mt 14:8).',
        { h: 'Jezabel y Elías' },
        'Los evangelios presentan a Juan como el Elías que había de venir (Mt 11:14). La historia se repite: Elías tuvo que enfrentar a Acab, un rey débil, y a Jezabel, la reina que lo incitaba a lo malo (1 R 21:25) y que juró matar al profeta (1 R 19:2). Juan enfrentó a Antipas, un tetrarca vacilante que lo escuchaba con gusto, y a Herodías, que no descansó hasta verlo muerto.',
        { h: 'La ambición que lo arruinó todo' },
        'La misma ambición terminó con ella. Cuando su hermano Agripa, que años antes había dependido de la caridad de Antipas, fue nombrado rey, Herodías empujó a su esposo a ir a Roma a pedir lo mismo. El viaje terminó en el destierro de los dos. Josefo, que no la quería, reconoce que tuvo un gesto de lealtad: rechazó el perdón del emperador y acompañó a Antipas.',
        { ejercicio: {
          pregunta: '¿Por qué Juan el Bautista decía que el matrimonio de Antipas con Herodías no era lícito?',
          opciones: [
            { t: 'Porque Herodías no era judía.', ok: false, por_que: 'Herodías era de la familia de Herodes y se consideraba judía.' },
            { t: 'Porque era la mujer de su hermano, que todavía vivía.', ok: true, por_que: 'La ley prohibía tomar a la mujer del hermano (Lv 18:16; 20:21); Juan lo dijo con esas palabras (Mr 6:18).' },
            { t: 'Porque un tetrarca no podía casarse sin permiso de Roma.', ok: false, por_que: 'El problema que señalaba Juan era moral y de la ley de Dios, no político.' }
          ],
          explicacion: 'Juan no hizo diferencia entre el pueblo y el gobernante: la ley de Dios valía también para el tetrarca.'
        } }
      ],
      pensar: 'Herodías prefirió deshacerse de la voz que la reprendía antes que cambiar. ¿Cómo reaccionas cuando la Palabra de Dios, o alguien que te ama, pone el dedo en algo que no quieres dejar?'
    },
    {
      id: 'salome', n: 'Salomé, la hija de Herodías', ref: 'Marcos 6:21-28; Mateo 14:6-11; Marcos 5:42', fecha: [29, 60],
      visual: [
        tabla({
          titulo: 'Lo que dice la Biblia y lo que dice Josefo',
          cab: ['Fuente', 'Qué sabemos'],
          filas: [
            ['Marcos y Mateo', 'No dan su nombre: la llaman «la hija de Herodías» y «la muchacha». Danzó en el cumpleaños de Antipas y, aconsejada por su madre, pidió la cabeza de Juan'],
            ['Josefo', 'Da su nombre, Salomé; dice que se casó con su tío abuelo Felipe el tetrarca, y después con su primo Aristóbulo, rey de Calcis, con quien tuvo tres hijos'],
            ['Monedas', 'Se conservan monedas de Aristóbulo de Calcis con la imagen de su esposa Salomé'],
            ['El arte posterior', 'Pintores, escritores y músicos la convirtieron en un personaje de seducción; los evangelios no dicen nada de eso']
          ]
        }),
        cita('Marcos 6:21-28', 'Pero venido un día oportuno, en que Herodes, en la fiesta de su cumpleaños, daba una cena a sus príncipes y tribunos y a los principales de Galilea, entrando la hija de Herodías, danzó, y agradó a Herodes y a los que estaban con él a la mesa; y el rey dijo a la muchacha: Pídeme lo que quieras, y yo te lo daré. Y le juró: Todo lo que me pidas te daré, hasta la mitad de mi reino. Saliendo ella, dijo a su madre: ¿Qué pediré? Y ella le dijo: La cabeza de Juan el Bautista. Entonces ella entró prontamente al rey, y pidió diciendo: Quiero que ahora mismo me des en un plato la cabeza de Juan el Bautista. Y el rey se entristeció mucho; pero a causa del juramento, y de los que estaban con él a la mesa, no quiso desecharla. Y en seguida el rey, enviando a uno de la guardia, mandó que fuese traída la cabeza de Juan. El guarda fue, le decapitó en la cárcel, y trajo su cabeza en un plato y la dio a la muchacha, y la muchacha la dio a su madre.')
      ],
      texto: [
        'La joven que danzó en el cumpleaños de Herodes Antipas es una de las figuras más conocidas del relato de Juan el Bautista, aunque los evangelios ni siquiera dicen su nombre. Marcos y Mateo la llaman «la hija de Herodías» y «la muchacha». El nombre Salomé lo da Josefo, que la menciona en su lista de la familia sin contar el episodio.',
        { h: 'Una muchacha en manos de su madre' },
        'La palabra griega que usan los evangelios para ella es la misma que Marcos usa para la hija de Jairo, que «tenía doce años» (Mr 5:42): una muchacha joven, quizás de unos doce a catorce años. El relato pone el peso no en ella sino en los adultos. Antipas hizo un juramento imprudente ante sus invitados. Ella no sabía qué pedir y salió a preguntar a su madre: «¿Qué pediré?» (Mr 6:24). Fue Herodías la que tomó la decisión. Mateo lo resume: lo pidió «instruida primero por su madre» (Mt 14:8).',
        'Con los siglos, el arte la transformó en un personaje de seducción, y algunas obras le atribuyeron sentimientos y escenas que la Biblia no cuenta. Al leer el pasaje conviene quedarse con lo que dice el texto: una madre que usó a su hija para vengarse, y un gobernante que prefirió quedar bien con sus invitados antes que con su conciencia.',
        { h: 'Después de la danza' },
        'Josefo cuenta que Salomé se casó con Felipe el tetrarca, hermano de Antipas y mucho mayor que ella. Al morir Felipe sin hijos, en el 34 d.C., se casó con su primo Aristóbulo, hijo de Herodes de Calcis, que llegó a ser rey de Armenia Menor y de Calcis. Tuvieron tres hijos. En monedas de Aristóbulo aparece su retrato, con el título de reina. Es una de las pocas mujeres de la familia de cuyo rostro queda un testimonio.',
        { h: 'Lo que los padres enseñan' },
        'La Biblia no juzga a la muchacha; muestra lo que una madre puede sembrar en una hija. Herodías transmitió a Salomé su odio y su manera de usar a las personas. Del mismo modo, la fe sincera de Loida pasó a Eunice y de Eunice a Timoteo (2 Ti 1:5).',
        arbol('Ver a Salomé en el árbol', 'salome')
      ],
      pensar: 'La hija de Herodías preguntó a su madre qué pedir, y su madre le enseñó a pedir la muerte de un justo. ¿Qué están aprendiendo de ti los más jóvenes que te observan y te preguntan?'
    },
    {
      id: 'berenice', n: 'Berenice y Drusila: dos hermanas en Hechos', ref: 'Hechos 24:24-25; Hechos 25:13, 23; Hechos 26:30-31', fecha: [44, 79],
      visual: [
        img('../hechos/img/hechos-pablo-agripa.webp', 'Pablo encadenado se defiende ante el rey Agripa y Berenice, sentados con gran pompa en la sala de audiencias de Cesarea', 'Pablo ante el rey Agripa y Berenice (Hechos 25–26). Recreación.'),
        tabla({
          titulo: 'Las dos hijas de Agripa I',
          cab: ['', 'Berenice', 'Drusila'],
          filas: [
            ['Nació', 'Hacia el 28 d.C.', 'Hacia el 38 d.C.'],
            ['Matrimonios', 'Marco Julio Alejandro; su tío Herodes de Calcis; Polemón, rey de Cilicia', 'Aziz, rey de Emesa; después, el gobernador Félix'],
            ['En Hechos', 'Acompaña a su hermano Agripa II cuando escucha a Pablo (Hch 25:13, 23; 26:30)', 'Escucha a Pablo con Félix «acerca de la fe en Jesucristo» (Hch 24:24)'],
            ['Después', 'En el 66 intercede ante el gobernador Floro por los judíos; luego apoya a Roma y se relaciona con Tito', 'Su hijo Agripa muere en la erupción del Vesubio, en el 79']
          ]
        }),
        cita('Hechos 24:24-25', 'Algunos días después, viniendo Félix con Drusila su mujer, que era judía, llamó a Pablo, y le oyó acerca de la fe en Jesucristo. Pero al disertar Pablo acerca de la justicia, del dominio propio y del juicio venidero, Félix se espantó, y dijo: Ahora vete; pero cuando tenga oportunidad te llamaré.')
      ],
      texto: [
        'Las dos hijas de Agripa I aparecen en los últimos capítulos de Hechos, cuando Pablo, preso en Cesarea, se defiende ante los gobernadores romanos y ante el rey Agripa II. Las dos escucharon el evangelio de su boca.',
        { h: 'Drusila y Félix' },
        'Drusila era la menor. Era muy joven cuando la casaron con Aziz, rey de Emesa, en Siria, que aceptó circuncidarse para casarse con ella. Poco después, Félix, el gobernador romano de Judea, la convenció de dejar a su marido y casarse con él, aunque Félix era gentil. Josefo dice que ella lo hizo, en parte, para librarse de los celos de su hermana Berenice, que la envidiaba por su belleza.',
        'Lucas cuenta que, algunos días después de la primera defensa de Pablo, Félix vino «con Drusila su mujer, que era judía», y oyó a Pablo «acerca de la fe en Jesucristo» (Hch 24:24). Pablo no les habló de cosas abstractas: «al disertar Pablo acerca de la justicia, del dominio propio y del juicio venidero, Félix se espantó» (Hch 24:25). Era justamente lo que faltaba en ese matrimonio. Félix despidió a Pablo y lo dejó preso dos años, esperando que le diera dinero. El hijo que tuvieron, Agripa, murió años después en la erupción del Vesubio.',
        { h: 'Berenice' },
        'Berenice, la mayor, se casó primero con un judío rico de Alejandría y después con su propio tío, Herodes de Calcis. Al quedar viuda vivió muchos años junto a su hermano Agripa II, y circularon rumores de una relación entre ellos que Josefo y un poeta romano recogen. Para acallarlos se casó con Polemón, rey de Cilicia, pero lo dejó pronto y volvió con su hermano.',
        'Lucas cuenta que «el rey Agripa y Berenice vinieron a Cesarea para saludar a Festo», el nuevo gobernador, y que al día siguiente entraron en la audiencia «con mucha pompa» para oír a Pablo (Hch 25:13, 23). Al final, se levantaron con el gobernador y reconocieron que Pablo no había hecho «ninguna cosa digna ni de muerte ni de prisión» (Hch 26:31).',
        'Años después, en el 66, Berenice se presentó descalza ante el gobernador Floro para rogarle que no siguiera matando judíos en Jerusalén, sin éxito. Cuando estalló la guerra se puso del lado de Roma y se unió al general Tito, el que destruiría el templo. Tito la llevó a Roma, pero al ser emperador la despidió.',
        arbol('Ver a Berenice y Drusila en el árbol', 'berenice')
      ],
      pensar: 'Félix se espantó al oír de justicia, dominio propio y juicio, pero dejó la decisión para «cuando tenga oportunidad». Pablo escribió: «he aquí ahora el día de salvación» (2 Co 6:2). ¿Hay alguna decisión ante Dios que estés postergando?'
    }
  ];

  window.__HD.mujeres = mujeres;
})();
/* La dinastía de Herodes · ruta V. Agripa I y Agripa II (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA V. Agripa I y Agripa II ==================
  const agripas = [
    {
      id: 'agripa1', n: 'Agripa I: de la cárcel al trono', ref: 'Daniel 2:21; Lucas 1:52; Salmo 75:6-7', fecha: [-10, 41],
      visual: [
        img('hd-agripa-cadenas.webp', 'En el patio de un pretorio de Roma, en el año 37 d.C., Herodes Agripa, un hombre de unos cuarenta y siete años, con barba recortada y túnica de prisionero, recibe con asombro de manos de un oficial de la guardia del emperador una pesada cadena de oro, mientras un soldado le quita las cadenas de hierro de las muñecas', 'Calígula libera a Agripa de la cárcel y le regala una cadena de oro del mismo peso que la de hierro que había llevado, según Josefo. Recreación.'),
        pasos([
          { t: '37 d.C.: Calígula da a Agripa la antigua tetrarquía de Felipe, con el título de rey', fecha: 37, estado: { view: V.palestina, capas: ['hd-agripa1-37'], lugares: ['paneas', 'betsaida', 'abilinia', 'jerusalen'] } },
          { t: '40 d.C.: recibe también Galilea y Perea, tras el destierro de Antipas', fecha: 40, estado: { view: V.palestina, capas: ['hd-agripa1-40'], lugares: ['tiberias', 'paneas', 'maqueronte', 'jerusalen'] } },
          { t: '41 d.C.: Claudio le da Judea y Samaria: reina sobre todo el antiguo reino de su abuelo', fecha: 41, estado: { view: V.palestina, capas: ['mj-agripa'], lugares: ['jerusalen', 'cesarea', 'tiberias', 'paneas'] } }
        ]),
        tabla({
          titulo: 'Agripa I en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombre', 'Marco Julio Agripa; en Hechos, «el rey Herodes»'],
            ['Padres', 'Aristóbulo, hijo de Herodes y Mariamne, y Berenice, hija de Salomé'],
            ['Nació y murió', 'Hacia el 10 a.C.; murió en Cesarea en el 44 d.C.'],
            ['Se crió', 'En Roma, junto a Druso, hijo de Tiberio, y a Claudio, el futuro emperador'],
            ['Reinó', 'Del 37 al 44 d.C.; sobre todo el país desde el 41'],
            ['Esposa e hijos', 'Cipros; Agripa II, Berenice, Mariamne y Drusila']
          ]
        })
      ],
      texto: [
        'Agripa era hijo de Aristóbulo, uno de los hijos de Mariamne que Herodes mandó estrangular en el 7 a.C., cuando Agripa tenía unos tres años. Su abuelo lo envió a Roma, donde se crió en la casa imperial, como compañero de Druso, el hijo del emperador Tiberio, y de Claudio. Allí aprendió a vivir como un noble romano y a gastar como tal.',
        { h: 'Deudas, fracasos y una cárcel' },
        'Cuando Druso murió, en el 23 d.C., Agripa perdió su protección y quedó lleno de deudas. Volvió a su tierra pobre y desanimado. Su hermana Herodías convenció a Antipas de darle un cargo menor en Tiberíades, pero los dos cuñados se pelearon. Agripa pasó por Siria, pidió préstamos aquí y allá, huyó de sus acreedores y volvió a Roma en el 36.',
        'Allí se hizo amigo de Gayo, a quien llamamos Calígula, sobrino nieto de Tiberio. Un día, paseando en carro, Agripa le dijo que ojalá Tiberio muriera pronto para que Gayo fuera emperador. Un sirviente lo denunció, y Tiberio lo hizo encadenar. Estuvo seis meses preso.',
        { h: 'Una cadena de oro' },
        'En marzo del 37 murió Tiberio y Calígula fue emperador. Josefo cuenta que hizo sacar a Agripa de la cárcel, le puso una diadema y le dio una cadena de oro del mismo peso que la cadena de hierro que había llevado. Le dio la antigua tetrarquía de Felipe con el título de rey; en el 40, las tierras de Antipas. Y cuando en el 41 asesinaron a Calígula, Agripa ayudó a Claudio, su amigo de infancia, a ser aceptado como emperador, y Claudio le dio Judea y Samaria. En cuatro años, el deudor encarcelado había llegado a reinar sobre todo lo que había sido de su abuelo.',
        { h: 'La estatua en el templo' },
        'Agripa hizo algo que los judíos nunca olvidaron. En el 40, Calígula, que se creía dios, ordenó poner una estatua suya en el templo de Jerusalén. El país estuvo a punto de levantarse en armas. Según Josefo y Filón, Agripa intercedió personalmente ante el emperador y logró que suspendiera la orden. Poco después Calígula fue asesinado.',
        'La historia de Agripa parece la de un hombre con suerte. La Biblia enseña a verla de otra manera: Dios «quita reyes, y pone reyes» (Dn 2:21). Pero el que recibe tanto, también responderá por lo que hace con ello.',
        arbol('Ver a Agripa I en el árbol', 'agripa1')
      ],
      pensar: 'Agripa pasó de la cárcel al trono en un día. ¿Cómo usas tú las puertas que Dios te abre: para tu propia gloria o para la de él?'
    },
    {
      id: 'persecucion', n: 'Agripa I persigue a la iglesia', ref: 'Hechos 12:1-19; Mateo 20:22-23', fecha: 44,
      visual: [
        img('../hechos/img/hechos-pedro-carcel.webp', 'Un ángel despierta a Pedro, que duerme entre dos soldados encadenado en la cárcel de Jerusalén, mientras una luz llena la celda', 'Un ángel libra a Pedro de la cárcel de Agripa (Hechos 12:7). Recreación.'),
        cita('Hechos 12:1-11', 'En aquel mismo tiempo el rey Herodes echó mano a algunos de la iglesia para maltratarles. Y mató a espada a Jacobo, hermano de Juan. Y viendo que esto había agradado a los judíos, procedió a prender también a Pedro. Eran entonces los días de los panes sin levadura. Y habiéndole tomado preso, le puso en la cárcel, entregándole a cuatro grupos de cuatro soldados cada uno, para que le custodiasen; y se proponía sacarle al pueblo después de la pascua. Así que Pedro estaba custodiado en la cárcel; pero la iglesia hacía sin cesar oración a Dios por él. Y cuando Herodes le iba a sacar, aquella misma noche estaba Pedro durmiendo entre dos soldados, sujeto con dos cadenas, y los guardas delante de la puerta custodiaban la cárcel. Y he aquí que se presentó un ángel del Señor, y una luz resplandeció en la cárcel; y tocando a Pedro en el costado, le despertó, diciendo: Levántate pronto. Y las cadenas se le cayeron de las manos. Le dijo el ángel: Cíñete, y átate las sandalias. Y lo hizo así. Y le dijo: Envuélvete en tu manto, y sígueme. Y saliendo, le seguía; pero no sabía que era verdad lo que hacía el ángel, sino que pensaba que veía una visión. Habiendo pasado la primera y la segunda guardia, llegaron a la puerta de hierro que daba a la ciudad, la cual se les abrió por sí misma; y salidos, pasaron una calle, y luego el ángel se apartó de él. Entonces Pedro, volviendo en sí, dijo: Ahora entiendo verdaderamente que el Señor ha enviado su ángel, y me ha librado de la mano de Herodes, y de todo lo que el pueblo de los judíos esperaba.'),
        tabla({
          titulo: 'Un rey «muy judío»',
          cab: ['Lo que hizo Agripa I', 'Según'],
          filas: [
            ['Ofrecía sacrificios en el templo y vivía en Jerusalén', 'Josefo'],
            ['Colgó en el templo la cadena de oro que le dio Calígula', 'Josefo'],
            ['Comenzó un tercer muro al norte de Jerusalén, que Claudio le ordenó detener', 'Josefo'],
            ['Leyó la ley en la fiesta de los Tabernáculos y lloró al leer que el rey debía ser de entre sus hermanos (Dt 17:15); el pueblo gritó que él era su hermano', 'La Mishná, escrita hacia el 200 d.C.: un recuerdo que hay que tomar con cautela'],
            ['Mató a Jacobo y encarceló a Pedro para agradar a los líderes judíos', 'Hechos 12:1-3']
          ]
        }, 'El rey')
      ],
      texto: [
        'A diferencia de su abuelo, Agripa supo ganarse a los judíos. Por su sangre asmonea lo veían como uno de los suyos. Vivía con gusto en Jerusalén, cumplía las costumbres de la ley, ofrecía sacrificios y defendía los intereses de su pueblo ante Roma. Josefo lo describe como un rey generoso y piadoso. Pero un rey que vive del aplauso del pueblo puede llegar a hacer cualquier cosa para conservarlo.',
        { h: 'La muerte de Jacobo' },
        'Hechos 12 cuenta que, en esos años, «el rey Herodes echó mano a algunos de la iglesia para maltratarles. Y mató a espada a Jacobo, hermano de Juan» (Hch 12:1-2). Jacobo, uno de los tres más cercanos a Jesús, fue el primero de los doce en morir por su fe. Jesús le había dicho que bebería de su vaso (Mt 20:23).',
        '«Y viendo que esto había agradado a los judíos, procedió a prender también a Pedro» (Hch 12:3). Lucas muestra el motivo: no era convicción religiosa, sino popularidad. Agripa encarceló a Pedro durante la fiesta de los panes sin levadura, con cuatro grupos de cuatro soldados, y pensaba presentarlo al pueblo después de la Pascua, quizás para un juicio público como el de Jesús.',
        { h: 'La iglesia oraba' },
        'Frente al poder del rey, la iglesia solo tenía una arma: «la iglesia hacía sin cesar oración a Dios por él» (Hch 12:5). La noche antes del juicio, Pedro dormía entre dos soldados, sujeto con dos cadenas. Un ángel lo despertó, las cadenas cayeron, las puertas se abrieron, y Pedro llegó a la casa de María, la madre de Marcos, donde muchos estaban reunidos orando. Tanto oraban, y tan poco esperaban la respuesta, que cuando la muchacha Rode anunció que Pedro estaba en la puerta, le dijeron: «Estás loca» (Hch 12:15).',
        'Agripa buscó a Pedro, no lo halló y mandó ejecutar a los guardias. Después bajó a Cesarea.',
        ir('Ver en Hechos: capítulo 12, Herodes, Pedro y la oración', R.hechos + '#comentario/13'),
        ir('Ver en El mundo judío: Agripa I y la persecución', R.mundo + '#despues/3')
      ],
      pensar: 'Dios permitió la muerte de Jacobo y libró a Pedro; las dos cosas ocurrieron en el mismo capítulo, y la iglesia siguió orando. ¿Cómo te ayuda esto a orar con fe aun cuando no sabes cuál será la respuesta?'
    },
    {
      id: 'muerte1', n: 'La muerte de Agripa I en Cesarea', ref: 'Hechos 12:19-24; Isaías 42:8; Daniel 4:30-31', fecha: 44,
      visual: [
        img('hd-agripa-cesarea.webp', 'En el teatro de Cesarea junto al mar, al amanecer, el rey Agripa I, de pie en la tribuna con un manto tejido enteramente de plata que brilla con los primeros rayos del sol, habla a una multitud en las gradas que levanta las manos y lo aclama; delegados de Tiro y Sidón se inclinan ante él', 'Agripa I en el teatro de Cesarea, con su manto de plata, según Josefo; la multitud gritaba: «¡Voz de Dios, y no de hombre!» (Hechos 12:22). Recreación.'),
        tabla({
          titulo: 'Dos relatos de la misma muerte',
          cab: ['', 'Hechos 12:20-23', 'Josefo, Antigüedades XIX'],
          filas: [
            ['Lugar', 'Cesarea', 'Cesarea, en unos juegos en honor del emperador'],
            ['Ocasión', 'Recibe a los de Tiro y Sidón, que piden paz', 'El segundo día de los juegos, al amanecer'],
            ['Vestido', '«vestido de ropas reales»', 'Un manto hecho todo de plata, que brillaba al sol'],
            ['La aclamación', '«¡Voz de Dios, y no de hombre!»', 'Los aduladores lo llaman dios'],
            ['Su falta', '«no dio la gloria a Dios»', 'No reprendió a los aduladores ni rechazó la adulación'],
            ['Su muerte', 'Herido por un ángel; «expiró comido de gusanos»', 'Dolores de vientre violentos; muere a los cinco días, a los 54 años']
          ]
        }, 'Comparación'),
        cita('Hechos 12:20-24', 'Y Herodes estaba enojado contra los de Tiro y de Sidón; pero ellos vinieron de acuerdo ante él, y sobornado Blasto, que era camarero mayor del rey, pedían paz, porque su territorio era abastecido por el del rey. Y un día señalado, Herodes, vestido de ropas reales, se sentó en el tribunal y les arengó. Y el pueblo aclamaba gritando: ¡Voz de Dios, y no de hombre! Al momento un ángel del Señor le hirió, por cuanto no dio la gloria a Dios; y expiró comido de gusanos. Pero la palabra del Señor crecía y se multiplicaba.')
      ],
      texto: [
        'Pocos meses después, en el 44 d.C., Agripa murió en Cesarea. Su muerte la cuentan dos fuentes independientes: Lucas en Hechos 12 y Josefo en sus Antigüedades. Las dos coinciden en lo esencial, y cada una aporta detalles que la otra no tiene.',
        { h: 'Lo que cuenta Lucas' },
        'Agripa estaba enojado con las ciudades de Tiro y Sidón, que dependían de los alimentos de su reino. Sus delegados ganaron el favor de Blasto, el camarero del rey, y pidieron paz. «Y un día señalado, Herodes, vestido de ropas reales, se sentó en el tribunal y les arengó. Y el pueblo aclamaba gritando: ¡Voz de Dios, y no de hombre!» (Hch 12:21-22). Lucas da la causa de lo que siguió: «Al momento un ángel del Señor le hirió, por cuanto no dio la gloria a Dios; y expiró comido de gusanos» (Hch 12:23).',
        { h: 'Lo que cuenta Josefo' },
        'Josefo cuenta que Agripa celebraba en Cesarea unos juegos en honor del emperador. El segundo día entró al teatro al amanecer con un manto tejido enteramente de plata, que brillaba de manera asombrosa con los rayos del sol. Sus aduladores empezaron a gritar que era un dios, y le pedían que les fuera propicio. El rey no los reprendió. En ese momento le vino un dolor violento en el vientre; lo llevaron a su palacio y murió a los cinco días, a los cincuenta y cuatro años, en el séptimo año de su reinado.',
        { h: 'La gloria que pertenece a Dios' },
        'El historiador judío y el evangelista ven lo mismo desde dos lugares. Josefo, que admiraba a Agripa, cuenta los hechos. Lucas da su sentido: Dios no comparte su gloria con nadie (Is 42:8). Nabucodonosor había sido humillado cuando se atribuyó a sí mismo la grandeza de Babilonia (Dn 4:30-31). Agripa aceptó en silencio que lo llamaran dios.',
        'Lucas cierra con una frase que es un contraste: el rey que había matado a Jacobo y encarcelado a Pedro murió, «pero la palabra del Señor crecía y se multiplicaba» (Hch 12:24).'
      ],
      pensar: 'Agripa no reprendió a los que lo adulaban. ¿Cómo reaccionas cuando te alaban? ¿Hay algún reconocimiento que estés recibiendo para ti y que debieras devolver a Dios?'
    },
    {
      id: 'agripa2', n: 'Agripa II, el último rey de la familia', ref: 'Hechos 25:13; Hechos 26:3; Marcos 6:3; Gálatas 1:19', fecha: [44, 66],
      visual: [
        pasos([
          { t: '44 d.C.: muere Agripa I; su hijo tiene diecisiete años y Claudio devuelve todo el país a los procuradores romanos', fecha: 44, estado: { view: V.palestina, capas: ['mj-provincia'], lugares: ['jerusalen', 'cesarea'] } },
          { t: 'Hacia el 50 d.C.: Agripa II recibe el pequeño reino de Calcis, en el Líbano, y el cuidado del templo', fecha: 50, estado: { view: V.norte, capas: ['mj-provincia'], lugares: ['calcis', 'damasco', 'paneas', 'jerusalen'] } },
          { t: '53 d.C.: cambia Calcis por la antigua tetrarquía de Felipe y Abilinia; Nerón le suma Tiberíades y Tariquea', fecha: 55, estado: { view: V.norte, capas: ['hd-agripa2'], lugares: ['paneas', 'abilinia', 'betsaida', 'tiberias', 'magdala', 'gamla'] } }
        ]),
        tabla({
          titulo: 'Agripa II en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombre', 'Marco Julio Agripa; en Hechos, «el rey Agripa»'],
            ['Nació', 'Hacia el 27 d.C., hijo de Agripa I'],
            ['Reinó', 'En Calcis desde el 50; en el noreste desde el 53, hasta su muerte, hacia el 92–100'],
            ['El templo', 'Por encargo de Roma, nombraba y destituía al sumo sacerdote y guardaba sus vestiduras'],
            ['Capital', 'Cesarea de Filipo, que rebautizó Neronías en honor de Nerón'],
            ['Su hermana', 'Berenice vivió muchos años a su lado (Hch 25:13)']
          ]
        })
      ],
      texto: [
        'Cuando murió Agripa I, su hijo del mismo nombre tenía diecisiete años y vivía en Roma, en la corte de Claudio. El emperador pensó que era demasiado joven para gobernar un país tan difícil, y todo el reino volvió a ser provincia romana, gobernada por procuradores. Agripa II nunca reinó sobre Judea.',
        { h: 'Un rey del norte con poder en el templo' },
        'Hacia el 50 d.C., al morir su tío Herodes de Calcis, Claudio le dio a Agripa II ese pequeño reino en el Líbano y, lo más importante, el cuidado del templo de Jerusalén: él nombraba y destituía al sumo sacerdote. En el 53 cambió Calcis por la antigua tetrarquía de Felipe, al noreste del mar de Galilea, y Nerón le agregó después algunas ciudades de Galilea y Perea. Rebautizó Cesarea de Filipo con el nombre de Neronías.',
        'Por eso, cuando el gobernador Festo tuvo que decidir qué hacer con Pablo, consultó a Agripa, y Pablo pudo decirle: «tú conoces todas las costumbres y cuestiones que hay entre los judíos» (Hch 26:3). Agripa era el experto judío de la corte romana.',
        { h: 'Jacobo, el hermano del Señor' },
        'Josefo cuenta un episodio que toca directamente a la iglesia. En el 62 d.C., entre la muerte del procurador Festo y la llegada del siguiente, el sumo sacerdote Anás, hijo del Anás de los evangelios, reunió al Sanedrín e hizo apedrear a Jacobo, a quien Josefo llama el hermano de Jesús, el llamado Cristo, junto con otros. Muchos judíos protestaron, y Agripa II destituyó a Anás después de solo tres meses en el cargo. Es el Jacobo que dirigía la iglesia de Jerusalén y escribió la carta de Santiago, uno de los hermanos de Jesús (Mr 6:3; Gá 1:19).',
        { h: 'Un rey entre dos mundos' },
        'Agripa II vivió entre dos mundos. Era judío, sabía de la ley y de los profetas, cuidaba el templo; al terminar las obras del templo en el 64 hizo pavimentar con piedra blanca las calles de Jerusalén para dar trabajo a los obreros. Pero era también un príncipe romano. Se construyó un comedor en su palacio desde el que podía mirar lo que se hacía en el templo, y los sacerdotes levantaron un muro para taparle la vista.',
        arbol('Ver a Agripa II en el árbol', 'agripa2')
      ],
      pensar: 'Agripa II conocía la ley, los profetas y las costumbres de su pueblo, pero eso no lo hizo creyente. ¿Qué diferencia hay entre saber mucho de la Biblia y rendirse a Cristo?'
    },
    {
      id: 'pablo', n: 'Pablo ante Agripa y Berenice', ref: 'Hechos 25:13-27; Hechos 26:1-32', fecha: [59, 60],
      visual: [
        img('../hechos/img/hechos-pablo-agripa.webp', 'Pablo encadenado se defiende ante el rey Agripa y Berenice, sentados con gran pompa en la sala de audiencias de Cesarea, junto al gobernador Festo', 'Pablo ante el rey Agripa y Berenice en Cesarea (Hechos 26). Recreación.'),
        cita('Hechos 26:24-32', 'Diciendo él estas cosas en su defensa, Festo a gran voz dijo: Estás loco, Pablo; las muchas letras te vuelven loco. Mas él dijo: No estoy loco, excelentísimo Festo, sino que hablo palabras de verdad y de cordura. Pues el rey sabe estas cosas, delante de quien también hablo con toda confianza. Porque no pienso que ignora nada de esto; pues no se ha hecho esto en algún rincón. ¿Crees, oh rey Agripa, a los profetas? Yo sé que crees. Entonces Agripa dijo a Pablo: Por poco me persuades a ser cristiano. Y Pablo dijo: ¡Quisiera Dios que por poco o por mucho, no solamente tú, sino también todos los que hoy me oyen, fueseis hechos tales cual yo soy, excepto estas cadenas! Cuando había dicho estas cosas, se levantó el rey, y el gobernador, y Berenice, y los que se habían sentado con ellos; y cuando se retiraron aparte, hablaban entre sí, diciendo: Ninguna cosa digna ni de muerte ni de prisión ha hecho este hombre. Y Agripa dijo a Festo: Podía este hombre ser puesto en libertad, si no hubiera apelado a César.'),
        tabla({
          titulo: 'Cuatro generaciones frente a Jesús',
          cab: ['Generación', 'Quién', 'Qué hizo'],
          filas: [
            ['1', 'Herodes el Grande', 'Quiso matar al niño Jesús (Mt 2:16)'],
            ['2', 'Herodes Antipas', 'Mató a Juan y se burló de Jesús (Mr 6:27; Lc 23:11)'],
            ['3', 'Agripa I', 'Mató a Jacobo y encarceló a Pedro (Hch 12:2-4)'],
            ['4', 'Agripa II', 'Escuchó el evangelio y dijo: «Por poco me persuades a ser cristiano» (Hch 26:28)']
          ]
        }, 'Generaciones')
      ],
      texto: [
        'Hacia el año 59 o 60, Pablo llevaba dos años preso en Cesarea, en el palacio que había construido Herodes el Grande (Hch 23:35). El nuevo gobernador, Porcio Festo, no entendía de qué lo acusaban, y Pablo había apelado al emperador. Cuando Agripa II y su hermana Berenice llegaron a saludar a Festo, el gobernador les expuso el caso, y Agripa dijo: «Yo también quisiera oír a ese hombre» (Hch 25:22).',
        { h: 'Con mucha pompa' },
        'Al día siguiente, Agripa y Berenice entraron en la sala de audiencias «con mucha pompa», con los tribunos y los hombres principales de Cesarea (Hch 25:23). Por un lado, el bisnieto de Herodes el Grande con todo su esplendor; por otro, un preso encadenado. Pablo comenzó con respeto: se tenía por dichoso de defenderse delante de alguien que conocía bien las costumbres de los judíos (Hch 26:2-3).',
        'Pablo no se defendió con argumentos legales. Contó su vida: cómo había perseguido a los cristianos, cómo Jesús se le apareció en el camino a Damasco y lo envió a los gentiles, y cómo no había dicho nada fuera de lo que Moisés y los profetas anunciaron: que el Cristo había de padecer y resucitar (Hch 26:22-23). Festo lo interrumpió a gritos: «Estás loco, Pablo» (Hch 26:24). Pablo se volvió entonces al rey: «¿Crees, oh rey Agripa, a los profetas? Yo sé que crees» (Hch 26:27).',
        { h: '«Por poco»' },
        'Agripa respondió: «Por poco me persuades a ser cristiano» (Hch 26:28). La frase griega es difícil de traducir; algunos la entienden como una evasiva irónica: «¿En tan poco tiempo pretendes hacerme cristiano?». En cualquier caso, Agripa no dio el paso. Pablo le contestó que quisiera Dios que, por poco o por mucho, él y todos los presentes fueran como él, «excepto estas cadenas» (Hch 26:29).',
        'Agripa se levantó y terminó la audiencia, pero reconoció que Pablo era inocente: «Podía este hombre ser puesto en libertad, si no hubiera apelado a César» (Hch 26:32). Así, el último de los Herodes que aparece en la Biblia escuchó con claridad el evangelio que su bisabuelo había querido ahogar en Belén.',
        ir('Ver en Hechos: capítulo 26, ante el rey Agripa', R.hechos + '#comentario/27')
      ],
      pensar: 'Agripa estuvo «por poco» de creer. ¿Hay algo que te mantiene a ti, o a alguien que amas, «por poco» cerca de Cristo, pero sin entregarse?'
    },
    {
      id: 'fin', n: 'Agripa II en la guerra y el fin de la dinastía', ref: 'Lucas 19:41-44; Lucas 21:20-24; Daniel 2:44', fecha: [66, 100],
      visual: [
        img('hd-agripa2-discurso.webp', 'Desde lo alto de la terraza de un palacio de Jerusalén, en el año 66 d.C., el rey Agripa II, de unos cuarenta años, con manto púrpura, habla con gesto suplicante a una gran multitud agitada reunida en una plaza abajo; a su lado, de pie y visible para todos, su hermana Berenice; al fondo, el templo', 'Agripa II, con Berenice a su lado, ruega a los habitantes de Jerusalén que no se rebelen contra Roma (año 66). Recreación.'),
        pasos([
          { t: '66 d.C.: Agripa intenta detener la rebelión en Jerusalén; los rebeldes queman su palacio', fecha: 66, estado: { view: V.palestina, capas: ['mj-provincia', 'hd-agripa2'], lugares: ['jerusalen', 'cesarea', 'paneas'] } },
          { t: '67 d.C.: acompaña a Vespasiano en Galilea; es herido en el sitio de Gamla', fecha: 67, estado: { view: V.galilea, capas: ['mj-galilea-67', 'hd-agripa2'], lugares: ['tolemaida', 'jotapata', 'tiberias', 'magdala', 'gamla'], trazos: ['mj-vespasiano-67'] } },
          { t: '70 d.C.: Tito destruye Jerusalén y el templo que Herodes había construido', fecha: 70, estado: { view: V.judea, capas: ['mj-provincia'], lugares: ['cesarea', 'jerusalen'], trazos: ['mj-tito-70'] } },
          { t: 'Hacia el 92–100 d.C.: muere Agripa II sin hijos; su reino pasa a la provincia de Siria', fecha: 95, estado: { view: V.norte, capas: ['hd-agripa2'], lugares: ['paneas', 'tiberias', 'betsaida'] } }
        ]),
        cita('Lucas 19:41-44', 'Y cuando llegó cerca de la ciudad, al verla, lloró sobre ella, diciendo: ¡Oh, si también tú conocieses, a lo menos en este tu día, lo que es para tu paz! Mas ahora está encubierto de tus ojos. Porque vendrán días sobre ti, cuando tus enemigos te rodearán con vallado, y te sitiarán, y por todas partes te estrecharán, y te derribarán a tierra, y a tus hijos dentro de ti, y no dejarán en ti piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación.')
      ],
      texto: [
        'En el 66 d.C., los abusos del procurador Floro encendieron Jerusalén. Agripa II llegó de Alejandría, reunió al pueblo en una plaza junto a su palacio y, con Berenice a su lado, le rogó que no se levantara contra Roma. Josefo pone en su boca un largo discurso: les recordó que pueblos mucho más poderosos se habían sometido a Roma, y que una guerra terminaría con la destrucción de la ciudad y del templo. Al principio lo escucharon; después lo insultaron, le tiraron piedras y lo echaron de la ciudad. Los rebeldes quemaron su palacio y el de Berenice.',
        { h: 'Del lado de Roma' },
        'Agripa se puso entonces del lado de Roma. Sus tropas acompañaron a Vespasiano en Galilea, y él mismo fue herido por una piedra en el sitio de Gamla, una ciudad de su propio reino. En el 70, Tito, el hijo de Vespasiano, sitió Jerusalén. El templo que había construido su bisabuelo, y que Agripa había cuidado, fue incendiado y destruido. Se cumplieron las palabras de Jesús: «no dejarán en ti piedra sobre piedra, por cuanto no conociste el tiempo de tu visitación» (Lc 19:44).',
        ir('Ver en El mundo judío: la gran rebelión y la caída del templo', R.mundo + '#despues/4'),
        { h: 'El fin de la dinastía' },
        'Después de la guerra, Roma premió la lealtad de Agripa con más territorio. Vivió en Roma con honores y mantuvo correspondencia con Josefo, que le leía su historia de la guerra; Josefo conservó dos de sus cartas. Murió hacia el 92 o el 100 d.C., según distintas fuentes, sin hijos. Su reino fue incorporado a la provincia de Siria. Con él terminó la dinastía que había fundado su bisabuelo ciento treinta años antes.',
        'Cuando Agripa murió, la palabra que había escuchado de Pablo ya se había extendido por todo el imperio: había iglesias en Antioquía, en Asia, en Grecia, en Roma. La familia que había intentado matar al niño de Belén, que había decapitado a su precursor, que se había burlado de él y que había matado a su apóstol, desapareció de la historia. El reino que Dios había anunciado por Daniel «no será jamás destruido» (Dn 2:44).'
      ],
      pensar: 'Agripa II vio caer el templo y terminar su familia, mientras la iglesia crecía. ¿Qué te enseña esta historia sobre lo que permanece y lo que pasa?'
    }
  ];

  window.__HD.agripas = agripas;
})();
/* La dinastía de Herodes · ruta VI. Los Herodes y la Biblia, y datos del recurso (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA VI. Los Herodes y la Biblia ==================
  const biblia = [
    {
      id: 'distinguir', n: 'Cómo distinguir a cada Herodes', ref: 'Mateo 2:1; Mateo 14:1; Lucas 3:1; Hechos 12:1; Hechos 25:13', fecha: [-37, 92],
      visual: [
        esq('hd-cual-herodes.svg', 'Tabla con seis franjas de color: Herodes el Grande, Arquelao, Herodes Antipas, Felipe, Agripa I y Agripa II, con el nombre que les da el texto bíblico, los pasajes y lo que sucede', 'Seis gobernantes de una misma familia en el Nuevo Testamento.', '¿Cuál Herodes?'),
        tabla({
          titulo: 'Cuatro preguntas para saber de qué Herodes se trata',
          cab: ['Pregunta', 'Qué ayuda a decidir'],
          filas: [
            ['¿En qué libro y en qué momento de la historia estoy?', 'Mateo 2 y Lucas 1: Herodes el Grande. Los evangelios durante el ministerio de Jesús: Antipas. Hechos 12: Agripa I. Hechos 25–26: Agripa II'],
            ['¿Qué título le da el texto?', '«Rey» en Mateo 2 y Hechos; «tetrarca» es siempre Antipas o Felipe'],
            ['¿Dónde ocurre?', 'Galilea y Perea: Antipas. El noreste del lago: Felipe. Judea antes del 4 a.C.: Herodes el Grande; entre el 4 a.C. y el 6 d.C.: Arquelao'],
            ['¿Quién más está en la escena?', 'Juan el Bautista o Pilato: Antipas. Jacobo y Pedro: Agripa I. Festo y Berenice: Agripa II']
          ]
        }, 'Método')
      ],
      texto: [
        'Con todo lo estudiado, ya es posible reconocer a cada Herodes cuando aparece en la Biblia. El texto rara vez da el nombre completo; a veces solo dice «Herodes» o «el rey». Pero casi siempre deja pistas: el libro, el momento, el título, el lugar y las otras personas de la escena.',
        'Practica con estos ejercicios. Antes de responder, pregúntate en qué momento de la historia ocurre cada pasaje.',
        { ejercicio: {
          pregunta: 'Lucas 1:5 dice que Zacarías vivía «en los días de Herodes, rey de Judea». ¿De qué Herodes se trata?',
          opciones: [
            { t: 'Herodes el Grande.', ok: true, por_que: 'Juan el Bautista nació unos meses antes que Jesús, en los últimos años de Herodes el Grande (Mt 2:1).' },
            { t: 'Arquelao.', ok: false, por_que: 'Arquelao gobernó Judea después de la muerte de su padre, y nunca tuvo el título de rey.' },
            { t: 'Agripa I.', ok: false, por_que: 'Agripa I reinó en Judea en los años 41 a 44, cuando Juan el Bautista ya había muerto.' }
          ],
          explicacion: 'El nacimiento de Juan y el de Jesús ocurren en el reinado de Herodes el Grande, antes del 4 a.C.'
        } },
        { ejercicio: {
          pregunta: 'En Lucas 13:31, unos fariseos advierten a Jesús que «Herodes te quiere matar». ¿Quién es?',
          opciones: [
            { t: 'Herodes el Grande, que ya había intentado matarlo en Belén.', ok: false, por_que: 'Herodes el Grande murió cuando Jesús era niño (Mt 2:19).' },
            { t: 'Herodes Antipas, tetrarca de Galilea y Perea.', ok: true, por_que: 'Jesús estaba en su territorio y responde: «decid a aquella zorra» (Lc 13:32).' },
            { t: 'Felipe, tetrarca de Iturea.', ok: false, por_que: 'Los evangelios nunca muestran a Felipe en conflicto con Jesús.' }
          ],
          explicacion: 'Durante el ministerio de Jesús, el «Herodes» de los evangelios es casi siempre Antipas.'
        } },
        { ejercicio: {
          pregunta: '¿Por qué Hechos 12 llama «el rey Herodes» a Agripa I, si su nombre era Agripa?',
          opciones: [
            { t: 'Porque Lucas se equivocó de persona.', ok: false, por_que: 'Los datos de Lucas coinciden con los de Josefo: Cesarea, la aclamación, la muerte repentina.' },
            { t: 'Porque «Herodes» era también el nombre de la familia y un título, como «César».', ok: true, por_que: 'Josefo lo llama Agripa; sus monedas lo llaman «el gran rey Agripa»; el nombre Herodes identificaba la dinastía.' },
            { t: 'Porque Agripa I era hijo de Herodes el Grande.', ok: false, por_que: 'Era su nieto, hijo de Aristóbulo.' }
          ],
          explicacion: 'Lucas usa el nombre familiar, como la gente de su tiempo; en Hechos 25 llama «Agripa» al hijo para distinguirlo.'
        } },
        arbol('Repasar en el árbol interactivo')
      ],
      pensar: 'Leer con atención al momento y al contexto evita muchos errores al estudiar la Biblia. ¿Qué pasaje que has leído hace poco podrías entender mejor si te preguntaras en qué momento de la historia ocurrió?'
    },
    {
      id: 'herodianos', n: 'Los herodianos y la levadura de Herodes', ref: 'Marcos 3:6; Marcos 12:13-17; Mateo 22:15-22; Marcos 8:15', fecha: [28, 30],
      visual: [
        tabla({
          titulo: 'Los herodianos en los evangelios',
          cab: ['Pasaje', 'Qué hacen', 'Con quién'],
          filas: [
            ['Marcos 3:6', 'Toman consejo para destruir a Jesús, después de una sanidad en sábado', 'Los fariseos'],
            ['Marcos 12:13; Mateo 22:16', 'Le preguntan si es lícito dar tributo a César', 'Los fariseos'],
            ['Marcos 8:15', 'Jesús advierte contra «la levadura de Herodes»', '(Junto a la de los fariseos)']
          ]
        }),
        cita('Marcos 12:13-17', 'Y le enviaron algunos de los fariseos y de los herodianos, para que le sorprendiesen en alguna palabra. Viniendo ellos, le dijeron: Maestro, sabemos que eres hombre veraz, y que no te cuidas de nadie; porque no miras la apariencia de los hombres, sino que con verdad enseñas el camino de Dios. ¿Es lícito dar tributo a César, o no? ¿Daremos, o no daremos? Mas él, percibiendo la hipocresía de ellos, les dijo: ¿Por qué me tentáis? Traedme la moneda para que la vea. Ellos se la trajeron; y les dijo: ¿De quién es esta imagen y la inscripción? Ellos le dijeron: De César. Respondiendo Jesús, les dijo: Dad a César lo que es de César, y a Dios lo que es de Dios. Y se maravillaron de él.')
      ],
      texto: [
        'Los evangelios mencionan un grupo llamado «los herodianos», que no aparece en ningún otro escrito antiguo. Por su nombre, eran partidarios de la familia de Herodes, probablemente de Antipas en Galilea: personas influyentes que apoyaban su gobierno y la alianza con Roma, y quizás esperaban que un Herodes volviera a reinar sobre todo el país, como ocurrió después con Agripa I.',
        { h: 'Una alianza extraña' },
        'Lo sorprendente es con quién se unen. Los fariseos eran estrictos con la ley y desconfiaban de los Herodes, que vivían como príncipes romanos. Los herodianos eran gente de la corte. En condiciones normales no tenían nada en común. Pero se pusieron de acuerdo contra Jesús. Después de que Jesús sanó a un hombre en sábado, «salidos los fariseos, tomaron consejo con los herodianos contra él para destruirle» (Mr 3:6). Y en Jerusalén, en la última semana, le enviaron «algunos de los fariseos y de los herodianos, para que le sorprendiesen en alguna palabra» (Mr 12:13).',
        { h: 'Una trampa sobre el tributo' },
        'La pregunta era una trampa perfecta: «¿Es lícito dar tributo a César, o no?» (Mr 12:14). Si Jesús decía que sí, los fariseos lo acusarían ante el pueblo de aceptar a Roma; si decía que no, los herodianos lo denunciarían como rebelde. Jesús pidió una moneda con la imagen del César y respondió: «Dad a César lo que es de César, y a Dios lo que es de Dios» (Mr 12:17). La moneda llevaba la imagen del emperador; el ser humano lleva la imagen de Dios y le pertenece entero.',
        ir('Ver en El mundo judío: los herodianos', R.mundo + '#grupos/6'),
        { h: 'La levadura de Herodes' },
        'Jesús advirtió: «guardaos de la levadura de los fariseos, y de la levadura de Herodes» (Mr 8:15). La levadura es algo pequeño que lo penetra todo. La de los fariseos era la hipocresía religiosa; la de Herodes, una manera de vivir que pone el poder, la conveniencia y el favor de los poderosos por encima de la verdad. Es la levadura que movió a Antipas a matar a Juan para quedar bien con sus invitados, y a Agripa I a matar a Jacobo para agradar al pueblo.',
        'Los herodianos y los fariseos muestran también algo que se repite en la historia: grupos que no tienen nada en común pueden unirse cuando Cristo los incomoda.'
      ],
      pensar: 'La levadura de Herodes es dejar que el poder y la conveniencia decidan por encima de la verdad. ¿En qué decisiones de tu vida podría estar actuando esa levadura sin que lo notes?'
    },
    {
      id: 'salmo2', n: '«Se reunieron los reyes de la tierra»', ref: 'Salmo 2:1-12; Hechos 4:24-31', fecha: [30, 44],
      visual: [
        cita('Hechos 4:24-28', 'Y ellos, habiéndolo oído, alzaron unánimes la voz a Dios, y dijeron: Soberano Señor, tú eres el Dios que hiciste el cielo y la tierra, el mar y todo lo que en ellos hay; que por boca de David tu siervo dijiste: ¿Por qué se amotinan las gentes, Y los pueblos piensan cosas vanas? Se reunieron los reyes de la tierra, Y los príncipes se juntaron en uno Contra el Señor, y contra su Cristo. Porque verdaderamente se unieron en esta ciudad contra tu santo Hijo Jesús, a quien ungiste, Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel, para hacer cuanto tu mano y tu consejo habían antes determinado que sucediera.'),
        cita('Salmo 2:1-4', '¿Por qué se amotinan las gentes, Y los pueblos piensan cosas vanas? Se levantarán los reyes de la tierra, Y príncipes consultarán unidos Contra Jehová y contra su ungido, diciendo: Rompamos sus ligaduras, Y echemos de nosotros sus cuerdas. El que mora en los cielos se reirá; El Señor se burlará de ellos.', 'Salmo 2'),
        tabla({
          titulo: 'Los Herodes contra el Ungido, y lo que Dios hizo',
          cab: ['Lo que hicieron', 'Lo que Dios hizo'],
          filas: [
            ['Herodes el Grande quiso matar al niño (Mt 2:16)', 'Lo guardó en Egipto y lo llevó a Nazaret (Mt 2:13-23)'],
            ['Antipas mató a Juan (Mr 6:27)', 'Jesús siguió su camino hasta Jerusalén (Lc 13:33)'],
            ['Antipas se burló de Jesús (Lc 23:11)', 'Lo resucitó y lo hizo Señor y Cristo (Hch 2:36)'],
            ['Agripa I mató a Jacobo y encarceló a Pedro (Hch 12:2-4)', 'Libró a Pedro, y la palabra crecía (Hch 12:7-11, 24)'],
            ['Agripa II oyó el evangelio y no creyó (Hch 26:28)', 'El evangelio llegó a Roma (Hch 28:30-31)']
          ]
        }, 'Contraste')
      ],
      texto: [
        'Después de que el Sanedrín amenazó a Pedro y a Juan, la iglesia de Jerusalén se reunió a orar. Su oración comenzó con las palabras del Salmo 2: «¿Por qué se amotinan las gentes, y los pueblos piensan cosas vanas? Se reunieron los reyes de la tierra, y los príncipes se juntaron en uno contra el Señor, y contra su Cristo» (Hch 4:25-26).',
        { h: 'Un salmo cumplido en Jerusalén' },
        'La iglesia vio ese salmo cumplido en lo que acababa de pasar: «verdaderamente se unieron en esta ciudad contra tu santo Hijo Jesús, a quien ungiste, Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel» (Hch 4:27). El Herodes de esta oración es Antipas, el tetrarca que recibió a Jesús en su juicio. Herodes y Pilato, que antes estaban enemistados, se hicieron amigos ese día (Lc 23:12).',
        'La responsabilidad por la muerte de Jesús está repartida en esta frase: los gobernantes judíos y romanos, los gentiles y el pueblo de Jerusalén de esa generación. Detrás de todos, los pecados de toda la humanidad, por los que Cristo murió. Por eso nadie puede culpar a un pueblo entero de otras épocas: todos necesitamos el perdón que se ofrece en la cruz.',
        { h: '«Para hacer cuanto tu mano… había antes determinado»' },
        'Lo más asombroso de la oración es lo que sigue: se unieron «para hacer cuanto tu mano y tu consejo habían antes determinado que sucediera» (Hch 4:28). Los gobernantes creían que estaban decidiendo el destino de Jesús; en realidad, cumplían el plan de Dios para la salvación del mundo. Ninguno de ellos dejó de ser responsable de lo que hizo; pero ninguno pudo impedir lo que Dios se había propuesto.',
        'Durante cuatro generaciones, la familia de Herodes se opuso al Ungido de Dios, y cada vez Dios tuvo la última palabra. El Salmo 2 termina con una invitación a los reyes: «Honrad al Hijo… Bienaventurados todos los que en él confían» (Sal 2:12).',
        { h: 'La oración de la iglesia' },
        'La iglesia no pidió que Dios destruyera a sus enemigos, ni que los librara de toda persecución. Pidió: «concede a tus siervos que con todo denuedo hablen tu palabra» (Hch 4:29). Y el lugar tembló, «y todos fueron llenos del Espíritu Santo, y hablaban con denuedo la palabra de Dios» (Hch 4:31).'
      ],
      pensar: 'Frente a la oposición de los gobernantes, la iglesia pidió denuedo para seguir hablando la Palabra, y el Espíritu Santo los llenó. ¿Qué le pedirías hoy a Dios frente a la oposición que enfrentas por tu fe?'
    },
    {
      id: 'arqueologia', n: 'Lo que encontró la arqueología', ref: 'Lucas 19:40; Juan 2:20; Hechos 23:35', fecha: [-37, 92],
      visual: [
        tabla({
          titulo: 'Huellas de los Herodes',
          cab: ['Hallazgo', 'Dónde', 'Qué muestra'],
          filas: [
            ['El muro occidental y los muros del monte del templo', 'Jerusalén', 'Las piedras de la explanada de Herodes, algunas de más de cien toneladas'],
            ['Palacios de Masada, Herodión, Jericó y Maqueronte', 'Desierto de Judea y Perea', 'El lujo y el temor del rey; Maqueronte, lugar de la muerte de Juan según Josefo'],
            ['El puerto, el teatro y el palacio de Cesarea', 'Costa', 'El «pretorio de Herodes» donde Pablo estuvo preso (Hch 23:35)'],
            ['Una ánfora de vino con su nombre en latín', 'Masada', 'Vino enviado desde Italia «para el rey Herodes de Judea», hacia el 19 a.C.'],
            ['La tumba y el sarcófago', 'Herodión, 2007', 'Atribuidos a Herodes por Ehud Netzer; la identificación se discute'],
            ['Monedas de cada gobernante', 'Todo el país', 'Herodes y Antipas sin imágenes humanas; Felipe y los Agripas con la del emperador y la suya propia'],
            ['Séforis, Tiberíades y Cesarea de Filipo', 'Galilea y el norte', 'Las ciudades que construyeron Antipas y Felipe']
          ]
        }),
        foto('foto-masada-palacio.jpg', 'El palacio norte de Masada, con sus tres terrazas escalonadas colgadas del borde del acantilado, sobre el desierto y el mar Muerto', 'El palacio de Herodes en el extremo norte de Masada, construido en tres terrazas sobre el acantilado.', 'CC BY-SA 4.0 · Andrew Shiva / Wikipedia, vía Wikimedia Commons'),
        foto('foto-moneda-agripa.jpg', 'Pequeña moneda de bronce con un toldo o sombrilla real de un lado y tres espigas de cebada del otro', 'Moneda de Agripa I acuñada en Jerusalén, con un toldo real y tres espigas: sin imágenes humanas, para no ofender a los judíos de la ciudad.', 'CC BY-SA 3.0 · Classical Numismatic Group, Inc., vía Wikimedia Commons')
      ],
      texto: [
        'Pocas familias del mundo antiguo han dejado tantas huellas como la de Herodes. Sus obras siguen en pie, y cada año la arqueología agrega algo nuevo.',
        { h: 'Piedras que hablan' },
        'Las piedras más conocidas son las del muro occidental de Jerusalén, el «muro de los lamentos», que no es parte del templo sino del muro de contención de la explanada que construyó Herodes. Algunos bloques pesan más de cien toneladas. Al pie del muro aún se ven las piedras que los romanos derribaron en el año 70. En Masada, el Herodión, Jericó y Maqueronte se han excavado los palacios del rey, con baños, mosaicos y frescos; en Cesarea, el teatro, el hipódromo, el palacio junto al mar y los restos del puerto.',
        { h: 'Un nombre en una ánfora' },
        'En Masada se encontraron ánforas de vino importado de Italia con inscripciones en latín. Una de ellas, fechada por el nombre de los cónsules romanos en el 19 a.C., dice que el vino era para el rey Herodes de Judea. Es una de las pocas veces que su nombre aparece escrito en un objeto de su tiempo. En el Herodión, como vimos, Ehud Netzer encontró en 2007 la que identificó como su tumba.',
        { h: 'Monedas con y sin rostro' },
        'Las monedas de la familia cuentan su historia. Herodes el Grande, Arquelao y Antipas acuñaron monedas sin rostros humanos, con símbolos como cascos, anclas, palmas o cañas, para no ofender a los judíos, que entendían que la ley prohibía las imágenes. Felipe, que gobernaba gentiles, puso la imagen del emperador y la suya. Agripa I hizo las dos cosas: en Jerusalén, monedas sin rostro; en Cesarea y Paneas, monedas con su imagen y la del emperador. Agripa II siguió acuñando hasta los años 90.',
        'Nada de esto prueba la fe; pero todo muestra que los evangelios y Hechos hablan de personas, lugares y tiempos reales. Cuando los discípulos admiraban las piedras del templo, Jesús les dijo que no quedaría piedra sobre piedra. Las piedras que quedaron dan testimonio de que sus palabras se cumplieron.',
        ir('Ver en El imperio romano: la evidencia arqueológica', R.romano + '#biblia/7')
      ],
      pensar: 'Las piedras de Herodes siguen en pie, pero su reino desapareció. ¿Qué parte de lo que haces hoy quedará cuando todo lo demás pase?'
    },
    {
      id: 'rey', n: 'Reinos que pasan y el Rey que permanece', ref: 'Daniel 2:44; Lucas 1:32-33; Juan 18:36-37; 1 Juan 2:17; Apocalipsis 11:15; Apocalipsis 19:16', fecha: [-37, 100],
      visual: [
        esq('hd-reinados.svg', 'Escala de tiempo del 40 a.C. al 100 d.C. con los reinados de la familia de Herodes y los hechos del Nuevo Testamento', 'Ciento treinta años de la familia de Herodes, al lado de la historia del evangelio.', 'Línea de tiempo'),
        cita('Lucas 1:30-33', 'Entonces el ángel le dijo: María, no temas, porque has hallado gracia delante de Dios. Y ahora, concebirás en tu vientre, y darás a luz un hijo, y llamarás su nombre JESÚS. Este será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin.'),
        tabla({
          titulo: 'Dos reinos',
          cab: ['El reino de los Herodes', 'El reino de Cristo'],
          filas: [
            ['Recibido del Senado y del emperador', 'Dado por Dios: «el Señor Dios le dará el trono de David» (Lc 1:32)'],
            ['Conquistado con legiones romanas', 'Ganado por la cruz y la resurrección'],
            ['Defendido con fortalezas y con la muerte de rivales', '«Mi reino no es de este mundo» (Jn 18:36)'],
            ['Dividido entre los hijos y perdido por ambición', '«Su reino no tendrá fin» (Lc 1:33)'],
            ['Terminó hacia el 100 d.C., sin herederos', 'Se extiende hasta lo último de la tierra y se manifestará en gloria cuando Cristo vuelva']
          ]
        }, 'Dos reinos')
      ],
      texto: [
        'La historia de la familia de Herodes empezó con un hombre que recibió del Senado romano el título de «rey de los judíos» y que lo conquistó con la espada. Terminó, ciento treinta años después, con un rey sin hijos que murió lejos de Jerusalén, cuando el templo de su bisabuelo ya no existía.',
        'En medio de esa historia nació otro Rey. A María el ángel le anunció que Dios daría a su hijo «el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin» (Lc 1:32-33). Los magos lo buscaron como «el rey de los judíos» (Mt 2:2); Pilato hizo escribir ese título sobre su cruz (Jn 19:19). Jesús no conquistó su reino con legiones: dijo que su reino no es de este mundo (Jn 18:36), y lo ganó entregando su vida.',
        { h: 'Lo que pasa y lo que permanece' },
        'Herodes construyó para que su nombre durara. Sus hijos pelearon por su herencia. Sus nietos buscaron el favor de los emperadores. Todos pasaron. Juan lo dice así: «el mundo pasa, y sus deseos; pero el que hace la voluntad de Dios permanece para siempre» (1 Jn 2:17). Pedro, al que Agripa I quiso matar, escribió: «Toda carne es como hierba, y toda la gloria del hombre como flor de la hierba. La hierba se seca, y la flor se cae; mas la palabra del Señor permanece para siempre» (1 P 1:24-25).',
        { h: 'El Rey que volverá' },
        'Daniel había anunciado que en los días de los reinos de este mundo Dios levantaría «un reino que no será jamás destruido» (Dn 2:44). Ese reino ya comenzó en los que reciben a Cristo, y se manifestará en plenitud cuando él vuelva. Como en la parábola del hombre noble que fue a recibir un reino y volvió (Lc 19:12), Cristo fue al Padre y vendrá otra vez. Entonces se oirá en el cielo: «Los reinos del mundo han venido a ser de nuestro Señor y de su Cristo; y él reinará por los siglos de los siglos» (Ap 11:15). Y llevará escrito su nombre: «REY DE REYES Y SEÑOR DE SEÑORES» (Ap 19:16).',
        'Cada Herodes tuvo que decidir qué hacer con Jesús. Herodes el Grande quiso eliminarlo. Antipas quiso verlo hacer una señal. Agripa II estuvo «por poco». La misma pregunta llega hoy a cada lector de esta historia.',
        ir('Ver Los últimos tiempos: el regreso de Cristo y su reino', R.escatologia)
      ],
      pensar: 'Los Herodes pasaron y Cristo reina. ¿Qué lugar le das hoy al Rey que permanece: el de un personaje de la historia, o el de tu Señor?'
    }
  ];

  const E = window.__HD;
  const LINEA = { desde: -75, hasta: 100, hitos: [
    { a: -63, t: 'Pompeyo' }, { a: -40, t: 'Herodes, rey' }, { a: -20, t: 'El templo' }, { a: -4, t: 'Muere Herodes' },
    { a: [27, 30], t: 'Ministerio de Jesús' },
    { a: 44, t: 'Muere Agripa I' }, { a: 59, t: 'Pablo ante Agripa' }, { a: 70, t: 'Cae el templo' }, { a: 95, t: 'Fin de la dinastía' }
  ] };
  window.RUTA_DATA = {
    titulo: 'La dinastía de Herodes',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio (como La tierra de Israel)
      minZoom: 3.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.MUNDO_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'panorama', grupo: 'Panorama', n: 'I. Panorama: una familia en el Nuevo Testamento', info: 'Cuántos Herodes, Idumea, Antípatro, los títulos de Roma y el árbol', estaciones: E.panorama, linea: LINEA },
      { id: 'grande', grupo: 'La familia', n: 'II. Herodes el Grande', info: 'El ascenso, los asmoneos, Augusto, las obras, la familia, los magos, la muerte y el reparto', estaciones: E.grande, linea: LINEA },
      { id: 'hijos', grupo: 'La familia', n: 'III. Los hijos: Arquelao, Felipe y Antipas', info: 'Judea, el noreste y Galilea; Juan el Bautista y Jesús ante Herodes', estaciones: E.hijos, linea: LINEA },
      { id: 'mujeres', grupo: 'La familia', n: 'IV. Las mujeres de la casa de Herodes', info: 'Mariamne y Salomé, Herodías, la hija de Herodías, Berenice y Drusila', estaciones: E.mujeres, linea: LINEA },
      { id: 'agripas', grupo: 'La familia', n: 'V. Agripa I y Agripa II', info: 'De la cárcel al trono, Hechos 12, Pablo ante Agripa y el fin de la dinastía', estaciones: E.agripas, linea: LINEA },
      { id: 'biblia', grupo: 'Los Herodes y la Biblia', n: 'VI. Los Herodes y la Biblia', info: 'Cómo distinguirlos, los herodianos, el Salmo 2, la arqueología y el Rey que permanece', estaciones: biblia, linea: LINEA }
    ]
  };
})();
