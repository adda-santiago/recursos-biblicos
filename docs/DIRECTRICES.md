# Directrices del proyecto — Recursos bíblicos interactivos

Versión 2.42 · 30 de octubre de 2026

Este documento es la **única** fuente de verdad del proyecto. Cualquier decisión nueva que contradiga algo de aquí se registra en la bitácora (§23) y se actualiza la sección correspondiente. Si el código y este documento no coinciden, se corrige uno de los dos; no se deja la diferencia. Mientras una diferencia esté en proceso de corregirse, la sección lo indica como **pendiente de implementar**. El proyecto de Claude guarda una copia idéntica de este archivo; no hay otro documento de contexto que lo complemente o lo contradiga.

**Cambio de la versión 2.42:** recurso nº 91 de la ola 6, El mundo judío en tiempos de Jesús (historia y geografía), con siete rutas y 49 estaciones: panorama, el poder (Pilato, Antipas, Anás y Caifás, el Sanedrín, impuestos, soldados y rebeldes), los grupos judíos, la fe vivida, la vida diaria, Jesús en su mundo y de Jesús al año 70 (la iglesia de Jerusalén, Agripa I, la rebelión, la caída del templo y Yavne, con el gancho hacia Historia de la Iglesia I). Continúa Entre los Testamentos, que suma siete botones `ir` hacia sus estaciones. Usa el relieve y las capas de La tierra de Israel (con `mapa-detalle-palestina.js`, que con relieve no tapa el mar) y su geografía propia `geo/mundo_judio.py` → `mundo-judio/mundo-geo.js`. La responsabilidad por la muerte de Jesús se presenta según Hechos 2–4: los líderes y la multitud de Jerusalén de esa generación, Herodes, Pilato y los gentiles, y detrás de todos los pecados de la humanidad; nunca culpa colectiva de los judíos de otras épocas. Lo que solo cuenta la Mishná se presenta con cautela (§20). Se corrigen dos erratas de la RV 1960 del sitio (Mt 4:15 y Mr 7:18).

**Cambio de la versión 2.41:** recurso nº 86 de la ola 5, Entre los Testamentos (historia y geografía), con ocho rutas y 46 estaciones: un panorama con «De Malaquías a Mateo» en dos estaciones, cinco rutas de historia período por período (el final del período persa, Alejandro y los Ptolomeos, la crisis seléucida, los macabeos y los asmoneos, Roma y Herodes), lo que nació en esos siglos (la sinagoga, los escribas, los fariseos, los saduceos, los esenios, el Sanedrín, los libros y la esperanza del Mesías, solo en su origen) y «Cuando vino el cumplimiento del tiempo». Línea de tiempo del 450 a.C. al 75 d.C. Usa el mapa de los imperios, reutiliza las capas de épocas de `tierra-de-israel/tierra-geo.js` y suma su geografía propia `geo/entre_testamentos.py` → `entre-los-testamentos/entre-geo.js` (tres etapas del territorio asmoneo recortadas con la costa de tierra-geo, lugares y campañas de Antíoco IV y Pompeyo). No usa `mapa-detalle-palestina.js`, que tapa el mar en zoom medio sin relieve (pendiente, §20). Suma botones `ir` hacia el recurso desde El imperio griego y desde tres estaciones de Los libros apócrifos.

**Cambio de la versión 2.40:** recurso nuevo en la ola 5, Los libros apócrifos y pseudoepígrafos (nº 85, historia y geografía), que se agrega al plan antes de Entre los Testamentos: el plan pasa a 136 recursos y los números desde el 85 se corren en uno (Entre los Testamentos es el 86, Historia de la Iglesia I el 132, El movimiento pentecostal el 134). Siete rutas y 33 estaciones: qué son estos libros y cómo llegaron a las Biblias, los libros históricos, los relatos y adiciones, los de sabiduría, los pseudoepígrafos, los apócrifos del Nuevo Testamento y cómo leerlos hoy. La pregunta del canon sigue en La Palabra de Dios, que suma dos botones `ir` hacia el recurso. Los apócrifos no están en la Biblia del sitio: su contenido se parafrasea, sin comillas, y no se escriben referencias que la burbuja tomaría por capítulos inexistentes (§15). La doctrina católica (purgatorio, intercesión de los santos, Trento, el Protoevangelio de Santiago) se describe según sus documentos oficiales y con respeto por sus miembros. Geografía propia `geo/apocrifos.py` → `libros-apocrifos/apocrifos-geo.js`.

**Cambio de la versión 2.39:** segundo recurso de la ola 9 adelantado, El movimiento pentecostal (historia y geografía), con siete rutas y 49 estaciones: las raíces (de Pentecostés a Topeka), Azusa y la primera expansión, la organización y las controversias, América Latina, la renovación y las nuevas olas, lo que enseñan los pentecostales y los desafíos de hoy. Usa el mapa base del mundo y su geografía propia (`geo/pentecostal.py` → `movimiento-pentecostal/pentecostal-geo.js`, sin polígonos). Nombra a los maestros y grupos de cada desvío (prosperidad, nueva reforma apostólica, Toronto) por su enseñanza y por hechos documentados, y presenta el evangelio de la prosperidad como contrario a la sana doctrina. Una denominación se puede mencionar brevemente como un caso entre otros dentro de una historia general (§1): la estación de Chile nombra a las Asambleas de Dios Autónomas. Historia de la Iglesia II suma tres botones `ir` hacia el recurso. Se restituye en el repositorio la versión unificada de este documento (la copia del repositorio había quedado en una 2.37 sin Historia de la Iglesia II).

**Cambio de la versión 2.38:** séptimo recurso de la ola 0, Pactos y dispensaciones (teología sistemática), con cuatro rutas y un taller práctico (41 estaciones): qué es un pacto, los pactos de Dios del Edén al nuevo pacto, su cumplimiento en Cristo y las siete dispensaciones, con la teología del pacto y el dispensacionalismo clásico y progresivo en bloques `posturas`. El taller nombra a la Iglesia Adventista del Séptimo Día al tratar el día de reposo, con respeto por sus miembros, y enseña el diezmo como práctica anterior a la ley que se da con gratitud, no por temor. Los últimos tiempos suma dos botones `ir` hacia el recurso.

**Cambio de la versión 2.37:** Historia de la Iglesia se divide en dos recursos (I, del siglo I a la Reforma; II, de la Reforma a hoy) y el plan pasa a 135 recursos. Primer recurso de la ola 9 adelantado: Historia de la Iglesia II, con ocho rutas y 60 estaciones, que sale del mundo bíblico y por eso usa un mapa base del mundo (`geo/mundo.py` → `assets/js/mapa-mundo.js`, §7) y su geografía propia (`geo/historia_iglesia.py` → `historia-iglesia-2/historia-geo.js`). Sus lugares posteriores a la Biblia llevan el prefijo `h-` y el atlas bíblico no los agrega (§20, Atlas bíblico). Nueva época «Historia de la iglesia» (`historia-iglesia`) para los recursos posteriores al Nuevo Testamento (§9). Regla nueva: el número de rutas y estaciones de un recurso depende de la extensión y la complejidad de su tema (§20, Ruta de estudio).

**Cambio de la versión 2.36:** sexto recurso de la ola 0, Dios y la Trinidad (teología propia), con seis rutas y 37 estaciones: conocer a Dios, sus nombres, sus atributos, la Trinidad, la doctrina en la historia (de la iglesia primitiva a Nicea, Constantinopla y los errores de hoy) y los textos difíciles. Los errores actuales se describen nombrando a los grupos que los enseñan (pentecostales unicitarios, Testigos de Jehová, mormones), con respeto por sus miembros. Los «Yo soy» de Jesús quedan para La persona y obra de Cristo. Geografía propia de los concilios (`geo/trinidad.py` → `dios-y-la-trinidad/trinidad-geo.js`). Cuando Claude propone una foto real, entrega el enlace directo a la página donde se descarga, en la respuesta y en el PROMPTS-FLOW.md (§25). Se corrigen dos erratas de la RV 1960 del sitio (Éx 17:15 y 2 Ti 2:13).

**Cambio de la versión 2.35:** quinto recurso de la ola 0, La tierra de Israel (historia y geografía), con seis rutas y 41 estaciones: panorama, regiones, clima, caminos, la tierra después de la Biblia (del año 70 a octubre de 2026) y la tierra en el plan de Dios. Sus mapas usan el relieve de la NASA del atlas (con un nivel más de detalle en la región) y su geografía propia (`geo/tierra.py` → `tierra-de-israel/tierra-geo.js`), que extiende `imperios-geo.js` sin modificarlo. El motor de mapas suma relieve con botón, rótulos propios, capas de color propio o solo contorno y caminos sin flecha (§7). El motor de rutas suma el visual con selector («Compara con tu país», que se recuerda en el dispositivo) y el botón `ir` a otra estación del mismo recurso (`#ruta/n`); en celular, las pestañas ya no tapan la barra de pasos (§20). El atlas muestra siempre los nombres de los lugares, ocultando los que chocan con uno más importante, y «Para aprender más» lee también las geografías propias de los recursos (§20, Atlas bíblico). Jesús puede mostrarse de frente (personaje Jesús-adulto) cuando su rostro es el centro de la escena (§20, Imágenes).

**Cambio de la versión 2.34:** el Atlas bíblico se rehace como mapa de consulta (§20, Atlas bíblico): búsqueda por lugar, sitio o libro, una sola época con el imperio de fondo, tipos plegables y un lugar por ubicación con todos sus eventos. Los recorridos (patriarcas, éxodo, conquista, exilio, Jesús, Pablo) salen a sus propios recursos y el botón «Recorridos» los reúne. Cada lugar muestra «Para aprender más»: las estaciones del sitio donde aparece, generadas por `herramientas/atlas_recursos.mjs`, que se corre antes de cada ZIP. El `#` de una ficha pasa a la app: `/{slug}/#ruta/3` abre esa estación y `/atlas-biblico/#jerusalen`, ese lugar (§6). El atlas ofrece tipo de mapa (Mapa, Físico y Satélite; Acuarela y Atlas cuando se activen sus cuentas), con respaldo de teselas propias de la NASA, como única excepción a «sin teselas externas» (§5).

**Cambio de la versión 2.33:** cuarto recurso de la ola 0, Pesos, medidas, monedas y horas bíblicas, con cuatro rutas y un taller práctico (30 estaciones) y una calculadora propia (`medidas-biblicas/calculadora/`). Una herramienta de estudio puede incluir una página auxiliar dentro de su carpeta, abierta con un botón `ir`, y las equivalencias de medidas del sitio son las de la calculadora (§20). Si un objeto real no tiene foto con licencia libre verificada, la estación se queda sin esa foto (§20, Imágenes).

**Cambio de la versión 2.32:** las portadas se generan en 16:9 y las escenas en 4:3 (§20, §25). Tercer recurso de la ola 0, De la Biblia a nosotros (manuscritos, crítica textual y traducciones), con cuatro rutas y 26 estaciones. Las fotos de manuscritos y portadas se pueden mostrar enteras, sin recorte (`completa: true`). Toda foto real (`origen: 'foto'`) lleva el botón «Ampliar», que la abre a pantalla completa con zoom y arrastre. Los pasajes copiados de la Biblia del sitio admiten otra versión (`@@rv1909:libro/capítulo/versículos`). Las personas históricas con nombre que no son bíblicas (Jerónimo, Casiodoro de Reina) también se crean como personajes de Flow (§20).

**Cambio de la versión 2.31:** segundo recurso de la ola 0, La Palabra de Dios (revelación, inspiración, canon y autoridad de la Escritura), con cuatro rutas y 27 estaciones. Registro de personajes de Flow en la hoja «Personajes Flow» de la planilla del plan, que se consulta antes de escribir los prompts. Las imágenes «cinematográficas realistas» se piden como fotograma fotorrealista de película, nunca como ilustración (§20, §25).

**Cambio de la versión 2.30:** este documento absorbe el antiguo archivo de contexto (`CONTEXTO-RECURSOS-BIBLICOS.md`) y queda como documento único: público y línea teológica (§1), forma de trabajo con Claude (§25), plan de publicación (§20) y texto de la solicitud de la RV 1960 (anexo A). Nuevo enfoque «Herramientas de estudio», exento de época (§8, §9). Nuevo bloque de ejercicios de opción múltiple en las rutas de estudio (§20). Primer recurso de la ola 0: Cómo interpretar la Biblia, con cinco rutas y 35 estaciones; los pasajes largos del panel visual usan letra menor y se desplazan. Google Fonts y Leaflet desde cdnjs se aceptan como servicios externos (§5).

**Cambio de la versión 2.0:** el proyecto deja de ser una plataforma escolar con fines comerciales y pasa a ser un recurso de la iglesia para el estudio bíblico, sin anuncios ni planes pagados.

**Cambio de la versión 2.1:** nombre visible *Recursos Bíblicos*; taxonomía bíblica implementada (testamento, época, libro); las fichas pasan a `/{slug}/`.

**Cambio de la versión 2.2:** cuando un recurso tiene más de una ruta, se eligen en un selector de ruta (lista desplegable) en lugar de pestañas y acordeones (§20).

**Cambio de la versión 2.29:** tercer estudio de libro, Apocalipsis, con las rutas I a IV, la ruta de mapas Las siete iglesias de Asia y dos rutas de temas; los pasajes de las pestañas se copian de la RV 1960 del sitio al armar los datos (§9, §20).

**Cambio de la versión 2.28:** recorrido de Jesús en el mapa ampliado de la armonía (red de caminos del siglo I, itinerario por pasaje), capa de detalle de Palestina en alta resolución y nuevas opciones del motor de mapas; Emaús a 60 estadios (§7, §20).

**Cambio de la versión 2.27:** la armonía de los evangelios pasa a 246 pasajes y cubre todos los versículos de los cuatro evangelios (§20).

**Cambio de la versión 2.26:** nueva plantilla Armonía de los evangelios (`public/apps/evangelios/`), con 194 pasajes; tabla común de palabras de Jesús; `Citas.capitulo()`; varias erratas de la RV 1960 corregidas (§20).
**Cambio de la versión 2.25:** las rutas pendientes del templo de Herodes se reasignan: «Jesús y la iglesia en el templo» se hará con los Evangelios; «Historia del segundo templo» queda absorbida por otros recursos (§20).

**Cambio de la versión 2.24:** en el tabernáculo, el sumo sacerdote se distingue del sacerdote común (vestiduras de gloria o de lino), el Día de la Expiación se completa (Lv 16:23-28) y las ceremonias tienen indicador de estado (quién oficia, con qué vestiduras y dónde está) (§20).

**Cambio de la versión 2.23:** nueva faceta obligatoria `enfoque` (estudio de libro, teología bíblica, teología sistemática, historia y geografía), primera en los filtros; la búsqueda pone primero el recurso cuyo título coincide con lo buscado (§8, §9, §14).

**Cambio de la versión 2.22:** criterio para elegir motor: el 3D solo para lo que necesita simulación en el espacio; lo explicativo va en rutas interactivas. Nuevo recurso interactivo El sacerdocio en Israel; las rutas pendientes del sumo sacerdote se redistribuyen (§7, §20).

**Cambio de la versión 2.21:** segundo estudio de libro, Daniel, con la misma estructura que Hechos (rutas I a IV, mapas y temas), apoyado en los imperios, el exilio y Los últimos tiempos (§9, §20).

**Cambio de la versión 2.20:** recurso complementario El exilio y los retornos, en cuatro rutas (historia, vida en el exilio, retornos y profecía) (§9).

**Cambio de la versión 2.19:** recurso complementario Los últimos tiempos (esquema escatológico), con esquemas propios en SVG; nueva época «Los últimos tiempos» en la taxonomía (§9, §20).

**Cambio de la versión 2.18:** primer recurso general, Los viajes de Pablo, que usan Hechos y las cartas; las rutas de estudio pueden enlazar a otro recurso con un botón (`ir`) (§20).

**Cambio de la versión 2.17:** primer estudio de un libro bíblico, Hechos de los Apóstoles, con las cuatro rutas fijas de estudio del libro más rutas de mapas y de temas; el mapa compartido suma la capa «La iglesia», que muestra en verde cómo se extiende la iglesia sobre los imperios (§9, §20).

**Cambio de la versión 2.16:** diseño común de los modelos 3D: columna de texto a la izquierda, rutas en un panel con el botón flotante «Rutas» (como en las rutas de estudio) e imágenes entre párrafos ampliables (`visor-3d.css` y `visor-3d.js`, §20); el templo de Herodes suma la ruta «Lo que queda hoy»; todas las apps 3D cargan Three.js desde el sitio.

**Cambio de la versión 2.15:** nuevo recurso 3D, El templo de Herodes, con las rutas Recorrido por el monte del templo y Templo de Salomón y templo de Herodes; Three.js r128 pasa a servirse desde el propio sitio (`public/apps/assets/js/`).

**Cambio de la versión 2.14:** recurso integrador «Los imperios en la historia bíblica»; los recursos pueden reutilizar imágenes de otras apps.

**Cambio de la versión 2.13:** sexto recurso de imperios, El imperio romano; se completa la serie de los seis imperios.

**Cambio de la versión 2.12:** quinto recurso de imperios, El imperio griego, con los reinos helenísticos en la geografía compartida.

**Cambio de la versión 2.11:** las tarjetas de la portada muestran una imagen de portada por recurso en lugar del emoji, y esa imagen es la vista previa al compartir el enlace (§8, §14).

**Cambio de la versión 2.10:** las rutas de estudio señalan el contenido que el alumno todavía no ha visto: pestañas pendientes destacadas y mapas por pasos con puntos de avance y reproducción automática (§20).

**Cambio de la versión 2.9:** cuarto recurso de imperios, El imperio asirio; las citas textuales de cada recurso se contrastan automáticamente con la RV 1960 antes de publicar.

**Cambio de la versión 2.8:** tercer recurso de imperios, Egipto, con capas del Reino Nuevo, los hititas y los Ptolomeos en la geografía compartida.

**Cambio de la versión 2.7:** la burbuja de citas llega a todas las apps bíblicas existentes, y en la ficha la barra del visor (pantalla completa, restaurar vista, guardar y compartir) pasa arriba del recurso (§6, §15).

**Cambio de la versión 2.6:** segundo recurso de imperios, El imperio persa; la burbuja de citas marca los versículos omitidos y reconoce rangos entre capítulos (§15).

**Cambio de la versión 2.5:** la Biblia completa vive en el sitio (`public/biblia/`, un archivo por capítulo) en varias versiones, y la persona elige la versión en la cabecera o en la propia burbuja de citas (§5, §11, §15).

**Cambio de la versión 2.4:** nuevo tipo de recurso, la *ruta de estudio* para leer (motor compartido `ruta-estudio.js`), con componentes compartidos: burbuja de citas bíblicas, línea de tiempo, mapa de imperios y mapa base vectorial sin servicios externos (§5, §15, §20). Primer recurso: El imperio babilónico.

---

## 1. Propósito y alcance

Biblioteca de modelos 3D, mapas, líneas de tiempo y árboles genealógicos interactivos para los miembros de la iglesia que quieren profundizar en el estudio de la Biblia. Es un proyecto de la iglesia, sin fines comerciales.

**Para quién.** Para miembros de distintas iglesias, no solo de la propia, y para cualquier persona de habla hispana: la perspectiva es latinoamericana, no solo chilena. Por eso el sitio no incluye contenido propio de una denominación (por ejemplo, la historia de la ADDA) ni filtros por la malla de un instituto bíblico. Dentro de una historia general, una denominación se puede mencionar brevemente como un caso entre otros (desde la v2.39; por ejemplo, las Asambleas de Dios Autónomas en la estación de Chile de El movimiento pentecostal). La malla de cinco años del instituto bíblico de la iglesia (Teología Bíblica del AT y del NT, Teología Sistemática, Teología y Ministerio, Griego y Hebreo) sirve solo como referencia para detectar recursos que faltan.

**Línea teológica.** Pentecostal clásica, en la línea de las Asambleas de Dios, con escatología dispensacionalista (futurista, premilenial y pretribulacional). Cuando dos posturas teológicas son defendibles, se muestran ambas y prevalece la de las Asambleas de Dios. El contenido nunca menciona explícitamente esa línea: la aplica.

**Objetivo.** Recursos de estudio para cada uno de los 66 libros de la Biblia, más los recursos de apoyo que esos estudios necesitan (fundamentos, historia, geografía, teología, lenguas, hermenéutica y ministerio). El orden está en el plan de publicación (§20).

Queda dentro del alcance: recursos visuales interactivos sobre la Biblia y su contexto (geografía, historia, arqueología, personajes), cada uno con su ficha escrita y su ruta de aprendizaje; búsqueda; exploración por testamento, libro y época; pantalla completa para proyectar en reuniones; compartir.

**Antecedente.** El proyecto nace de Fuego y Palabra (`crist-alarc/Fuego-y-Palabra`). Este repositorio es la fuente oficial de todas sus apps (§24).

**Recursos no bíblicos.** El ADN, el motor de combustión, los viajes de Colón y la Segunda Guerra Mundial se crearon cuando el proyecto apuntaba a colegios. Quedan ocultos (`publicado: false`), sin borrarse, por si se retoman en otro proyecto.

Queda fuera: anuncios y cualquier forma de monetización, evaluaciones calificadas, foros o comentarios públicos, contenido generado por usuarios. Las cuentas de usuario también quedan fuera por ahora: una futura sección para leer la Biblia completa con comentarios propios y «Guardar» a nivel de usuario necesitaría base de datos y perfiles, y se evaluará primero en un documento de visión de la app de estudio bíblico (§21). Los ejercicios de opción múltiple de las rutas (§20) no son evaluaciones calificadas: no registran puntaje ni guardan respuestas.

## 2. Público y casos de uso

| Usuario | Situación | Qué necesita |
|---|---|---|
| Miembro estudiando por su cuenta | Lee la Biblia en casa, desde el celular o el computador, y quiere ver el contexto: lugar, época, personajes | Buscar por libro, pasaje o personaje; ficha con citas y fuentes; recursos que se entiendan sin alguien que los explique |
| Líder de estudio o grupo pequeño | Prepara una reunión y a veces proyecta | Pantalla completa, restaurar vista, compartir por WhatsApp |
| Predicador o maestro | Usa un recurso como apoyo visual en una prédica o clase | Lo mismo que el líder, y enlace directo a una estación o a un lugar del atlas (§6) |

## 3. Principios de producto

1. **Contenido sobre adornos.** La interfaz existe para mostrar el recurso; todo control debe justificar su lugar.
2. **Estudio primero.** La mayoría de los usuarios estudia solo. La ficha escrita y la ruta de aprendizaje pesan tanto como el visor, porque nadie va a estar al lado explicando. La pantalla completa se mantiene para cuando se proyecta.
3. **Rigor visible.** Cada recurso declara sus fuentes, su licencia y su estado de revisión. La ficha distingue lo que dice el texto bíblico, lo que aporta la arqueología o la historia, y lo que es reconstrucción o interpretación.
4. **Nadie necesita cuenta.** Todo se usa sin registrarse.
5. **Sin anuncios ni fines comerciales.** Sin excepciones (§10).
6. **Estructura normalizada desde el inicio.** Todo recurso nuevo nace con el esquema y el contrato de visor; no se refactoriza después.
7. **Demanda antes que oferta.** Los recursos nuevos se priorizan con las búsquedas sin resultado y las solicitudes del buzón, no por intuición.

## 4. Marca e identidad visual

**Decidido:** el sitio tiene identidad bíblica; ya no se busca una marca neutra.

**Nombre visible:** *Recursos Bíblicos*, con 📖 como favicon. Vive solo en `src/config/sitio.ts` (`SITIO.nombre` y `SITIO.emoji`); no se escribe en ningún otro lugar.

**Logo:** la cabecera muestra un símbolo de tamaño fijo junto al nombre. Mientras no haya logo, el símbolo es el emoji. Para usar un logo, se sube el archivo a `public/` (formato cuadrado, SVG o PNG de al menos 128 × 128 px) y se escribe su nombre en `SITIO.logo` (por ejemplo, `'logo.svg'`). No hay que tocar la cabecera.

**Publicación:** organización de GitHub `adda-santiago`, repositorio `recursos-biblicos`, sitio en `https://adda-santiago.github.io/recursos-biblicos/`.

**Cuidado con los nombres de organización y repositorio:** definen la URL del sitio mientras no haya dominio propio. Renombrar cualquiera de los dos rompe los enlaces compartidos. Antes de difundir el sitio masivamente en la iglesia, conviene decidir si se usará un dominio propio (§19).

Identidad actual (se mantiene):

| Elemento | Valor |
|---|---|
| Tipografía de contenido | Newsreader (serif) |
| Tipografía de controles | Inter (sans) |
| Tokens | `src/styles/tokens.css`: `--bg`, `--surface`, `--surface-2`, `--ink`, `--ink-2`, `--muted`, `--line`, `--line-strong`, `--accent`, `--serif`, `--sans`, escala `--text-*`, `--space-*`, `--measure`, `--radius` |
| Acento | Único (`--accent`), para foco, estados activos y enlaces subrayados |
| Modo oscuro | Por `prefers-color-scheme`, con `data-theme="light"` como anulación |

Reglas:

- Los **colores que codifican datos** no se reemplazan por tokens neutros: reino (`--judah`, `--israel`), evaluación (`--good`, `--bad`, `--mixed`), época y tipo. Cada nueva app que codifique categorías con color declara sus propias variables y las documenta en su CSS.
- Estética minimalista: listas con líneas finas, sin tarjetas con sombra, sin degradados decorativos.
- Accesibilidad mínima: foco visible, contraste AA, `prefers-reduced-motion` respetado, textos alternativos en todo recurso visual.
- Las apps legadas conservan sus CSS con fallback `:where()` para que rendericen aunque `tokens.css` no cargue primero.

## 5. Arquitectura técnica

### Stack

| Capa | Herramienta | Motivo |
|---|---|---|
| Generador del sitio | Astro 5 (estático) | Genera HTML por recurso (SEO), valida el esquema de contenido, carga JS solo donde hace falta |
| Búsqueda | Pagefind | Índice estático generado en el build, sin servidor, con filtros por faceta |
| Visor 3D simple | `<model-viewer>` (Google) | Hotspots, carga diferida, gestos táctiles, AR y Draco incluidos |
| Visor 3D complejo | Three.js | Escenas compuestas, recorridos, comparaciones a escala |
| Mapas | Leaflet. Recursos nuevos: mapa base vectorial propio (Natural Earth, `mapa-base.js`); apps legadas: teselas Esri. Excepción: el atlas ofrece mapas de terceros como opción, con respaldo propio (§20, Atlas bíblico) | Sin clave de API y, en los recursos nuevos, sin depender de un servicio externo |
| Hosting | GitHub Pages, organización `adda-santiago`, repositorio `recursos-biblicos` | Gratis y permanente: sin uso comercial no hace falta otro hosting. Sitio de proyecto en la subcarpeta `/recursos-biblicos/` |
| Modelos pesados (`.glb`) | Almacenamiento externo con CDN | Pendiente hasta el primer modelo pesado (§22) |
| CI/CD | GitHub Actions (`.github/workflows/publicar.yml`) | Build, validación del esquema y despliegue |
| Tipografías y bibliotecas | Google Fonts (Newsreader, Inter) y Leaflet desde cdnjs | Servicios externos confiables, aceptados (v2.30). Las apps declaran tipografías de respaldo del sistema |

**Qué puede venir de fuera y qué no.** El contenido nunca depende de otro sitio: texto bíblico, mapas base, imágenes, datos y Three.js se sirven desde el propio sitio, porque en algunas redes los sitios externos están bloqueados. Las tipografías de Google Fonts y Leaflet desde cdnjs son la única excepción aceptada; si no cargan, el recurso debe seguir siendo legible. No se agregan otros servicios externos sin registrarlo en la bitácora.

No hay base de datos ni servidor propio. El contenido vive en archivos Markdown dentro del repositorio; Git actúa como base de datos, con historial y reversión.

### Estructura del repositorio

```
/
├─ astro.config.mjs          site/base desde variables de entorno
├─ docs/DIRECTRICES.md       este documento
├─ public/
│  ├─ apps/                  apps legadas, sin cambios de lógica
│  │  ├─ assets/css/         tokens.css, app.css y CSS por app (legado); ruta-estudio.css
│  │  ├─ assets/js/          componentes compartidos (§20, Ruta de estudio):
│  │  │                      ruta-estudio.js, citas.js,
│  │  │                      linea-tiempo.js, mapa-imperios.js, imperios-geo.js, mapa-base.js
│  │  ├─ visor-bridge.js     contrato visor ↔ app (§6)
│  │  ├─ atlas/ linea-reyes/ genealogias/   (apps legadas 2D)
│  │  ├─ tabernaculo/ templo-salomon/ templo-herodes/ sumo-sacerdote/   (3D, §7 y §20)
│  │  ├─ evangelios/         plantilla de armonía (§7)
│  │  ├─ imperio-*/ egipto/ imperios-historia/ exilio/ escatologia/ sacerdocio/
│  │  │  viajes-pablo/ hechos/ daniel/ apocalipsis/ interpretar-biblia/ palabra-de-dios/
│  │  │  de-la-biblia-a-nosotros/ medidas-biblicas/ tierra-de-israel/ historia-iglesia-2/ dios-y-la-trinidad/
│  │  │  pactos-y-dispensaciones/ movimiento-pentecostal/ libros-apocrifos/ entre-los-testamentos/ mundo-judio/   (rutas de estudio: index.html, data.js, img/;
│  │  │                      tierra-de-israel/ suma tierra-geo.js, historia-iglesia-2/ suma historia-geo.js
│  │  │                      movimiento-pentecostal/ suma pentecostal-geo.js, libros-apocrifos/ suma apocrifos-geo.js
│  │  │                      y entre-los-testamentos/ suma entre-geo.js (y carga tierra-geo.js), mundo-judio/ suma mundo-geo.js (y carga tierra-geo.js),
│  │  │                      su geografía propia;
│  │  │                      medidas-biblicas/ suma calculadora/, página auxiliar, §20)
│  │  ├─ adn/ motor-combustion/ viajes-colon/ segunda-guerra-mundial/   (fichas ocultas, §1)
│  ├─ biblia/                texto bíblico: versiones.json, indice.json y {versión}/{libro}/{capítulo}.json
│  └─ robots.txt             sin efecto mientras el sitio esté en subcarpeta (§19)
├─ geo/imperios.py          genera assets/js/imperios-geo.js (fronteras aproximadas recortadas con Natural Earth)
├─ geo/palestina.py         genera assets/js/mapa-detalle-palestina.js (Natural Earth 1:10m)
├─ geo/tierra.py            genera tierra-de-israel/tierra-geo.js (regiones, épocas, caminos y «Compara con tu país»)
├─ geo/mundo.py             genera assets/js/mapa-mundo.js (mapa base del mundo, Natural Earth 1:50m)
├─ geo/historia_iglesia.py  genera historia-iglesia-2/historia-geo.js (confesiones hacia 1600, lugares h- y viajes)
├─ geo/pentecostal.py       genera movimiento-pentecostal/pentecostal-geo.js (lugares h- y viajes; no usa Natural Earth)
├─ geo/apocrifos.py         genera libros-apocrifos/apocrifos-geo.js (lugares de los libros y de sus hallazgos; no usa Natural Earth)
├─ geo/entre_testamentos.py genera entre-los-testamentos/entre-geo.js (etapas asmoneas recortadas con la costa de tierra-geo, lugares y campañas; requiere shapely)
├─ geo/mundo_judio.py       genera mundo-judio/mundo-geo.js (reino de Agripa I, provincia de los procuradores, lugares del siglo I y la guerra del 66–73; no usa Natural Earth)
├─ herramientas/biblia/     generar.py: genera public/biblia/ desde las fuentes (fuentes/ no se sube al repositorio)
├─ herramientas/            verificar_citas.py (citas textuales contra la RV 1960), esquemas_*.py (SVG propios),
│                           <recurso>/parte*.js + <recurso>_citas.py (estudios grandes, §20; apocalipsis, interpretar, palabra, manuscritos, medidas, tierra, trinidad, historia2, pactos, pentecostal, apocrifos, entre, mundo),
│                           atlas_recursos.mjs (genera atlas/recursos.js, §20)
├─ src/
│  ├─ config/sitio.ts        nombre, buzón, analítica (anuncios: inactivo, a eliminar)
│  ├─ data/taxonomia.ts      vocabulario controlado (§9)
│  ├─ content.config.ts      esquema obligatorio de recurso (§8)
│  ├─ content/recursos/*.md  un archivo por recurso = ficha + metadatos
│  ├─ lib/                   url, storage, analitica (anuncios y cuenta: inactivos, a eliminar)
│  ├─ components/            Visor, Compartir, ItemRecurso (EspacioAnuncio: inactivo, a eliminar)
│  ├─ layouts/Base.astro
│  ├─ pages/                 portada, [slug] (ficha), [asignatura]/[slug] (redirecciones), embed/[slug], explorar, buzón, privacidad, 404
│  └─ styles/                tokens.css, global.css
└─ .github/workflows/        publicar.yml, desempaquetar.yml
```

### Rutas públicas

Todas cuelgan de la base `/recursos-biblicos/`.

| Ruta | Contenido | Indexable |
|---|---|---|
| `/?q=&enfoque=&testamento=&epoca=&libro=&tipo=&tag=&guardados=1` | Portada = catálogo completo: recién agregados, filtros y búsqueda. Valores múltiples separados por coma | Sí |
| `/explorar/` | Redirección a la portada (enlaces antiguos) | No |
| `/{slug}/` | Ficha: visor + artículo + fuentes | Sí (única página indexada por Pagefind) |
| `/religion/{slug}/` | Redirección a `/{slug}/` (URL de las fichas hasta la v2.0) | No |
| `/embed/{slug}/` | Visor limpio para insertar | No (`noindex`, canonical a la ficha) |
| `/apps/{app}/` | App legada cruda | No (`<meta name="robots" content="noindex">` en cada app) |
| `/buzon/`, `/privacidad/` | Páginas de servicio | Sí |

Reglas de rutas:

- **Nunca escribir rutas absolutas a mano.** Todo pasa por `ruta()`, `rutaRecurso()` y `rutaEmbed()` de `src/lib/url.ts`. Las URL completas (canonical, compartir, embed) se arman con `new URL(ruta(...), Astro.site)`, nunca concatenando texto.
- El `slug` es el nombre del archivo Markdown. Puede cambiar, pero si cambia se agrega una redirección estática en `public/{ruta-antigua}/index.html`. GitHub Pages no permite redirecciones 301.
- Hay slugs reservados porque chocan con páginas o carpetas del sitio (`apps`, `embed`, `buzon`, `privacidad`, `explorar`, `pagefind`, `404`, `_astro`, `religion`). La lista vive en `SLUGS_RESERVADOS` (`src/data/taxonomia.ts`) y el build falla si una ficha publicada usa uno.
- El `uid` no cambia jamás (§8).

### Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local con recarga (la búsqueda usa el catálogo local; Pagefind solo existe tras el build) |
| `npm run build` | Compila a `dist/` y genera el índice de Pagefind |
| `npm run preview` | Sirve `dist/` para probar el resultado final |

## 6. Contrato del visor (obligatorio)

Todo recurso se muestra con `src/components/Visor.astro`, sin importar el motor. El contrato es:

| Función | Comportamiento | Implementación |
|---|---|---|
| Pantalla completa | Botón principal, siempre visible. Deja solo el recurso y la barra mínima | Fullscreen API sobre el contenedor del visor; en iPhone (sin Fullscreen API para elementos que no son video) usa respaldo CSS `.pseudo-completa`. Esc sale |
| Restaurar vista | Vuelve a la cámara o encuadre inicial | Legado: `postMessage({tipo:'fyp:restaurar'})`. model-viewer: reasigna órbita, objetivo y campo de visión |
| Guardar | Marca el recurso en este dispositivo | `almacen.alternarFavorito(uid)` |
| Compartir | Enlace, WhatsApp, Google Classroom, Microsoft Teams, compartir nativo en móvil, código de inserción | `Compartir.astro`. WhatsApp es el canal principal |
| Pantalla de carga | Texto que dice qué se está cargando; nunca queda pegada (tope de 15 s) | Se oculta con `load` o con el mensaje `fyp:lista` |

La pantalla completa cumple el papel del "modo pizarra": no se agrega un segundo botón para lo mismo.

La barra con estas acciones va **arriba del recurso** en la ficha y en pantalla completa, para que quede a la vista sin desplazarse; en el embed (`/embed/`) va abajo, para dar prioridad al recurso dentro de la plataforma que lo inserta.

El visor nunca contiene anuncios ni elementos ajenos al recurso.

### Protocolo `visor-bridge.js` (apps legadas en iframe)

- Mensajes aceptados: `{ tipo: 'fyp:restaurar' }`, solo desde el mismo origen.
- Mensajes emitidos: `{ tipo: 'fyp:lista' }` al terminar de cargar.
- Cada app legada declara `window.fypReset = () => {...}`. Si no lo hace, el puente intenta `#t-home` o `#zoom-reset`; si no hay nada, recarga la app.
- Dentro del iframe, el puente agrega la clase `en-visor` a `<html>` y oculta la marca interna de la app.
- Mensajes nuevos se agregan aquí antes de implementarse.

**Enlace directo** (desde la v2.34). El `#` de la dirección de una ficha pasa al `src` del iframe (`Visor.astro`): `/{slug}/#ruta/3` abre la estación 3 de esa ruta en una ruta de estudio, `/evangelios/#samaritana` un pasaje de la armonía y `/atlas-biblico/#jerusalen` un lugar del atlas. Así se enlaza una estación desde otro recurso o se comparte con un grupo. Queda pendiente que la dirección de la ficha se actualice al avanzar dentro de la app.

## 7. Motores y convenciones 3D

### Elección de motor

| Motor | Cuándo usarlo | Estado |
|---|---|---|
| `legado` | Apps que corren como página propia en `public/apps/` | En uso: atlas, línea de reyes, genealogías, tabernáculo, templo de Salomón, templo de Herodes, sumo sacerdote (y las apps de las fichas ocultas) |
| `model-viewer` | Un solo `.glb` con hotspots (un objeto: arca, altar, lámpara, utensilio) | Implementado en el visor, **sin probar aún con un modelo real** |
| `three` | Escenas compuestas, recorridos narrativos, comparaciones, modelos procedurales | Reservado. El build falla a propósito si un recurso lo declara antes de implementarlo |

**Plantilla de armonía (`public/apps/evangelios/`).** Para estudiar textos paralelos con el texto bíblico en pantalla. Dos tercios para las columnas (de 1 a 4, en orden Mateo, Marcos, Lucas, Juan) y un tercio para el comentario, con divisor ajustable que siempre parte en dos tercios. Reglas:
- El texto bíblico no se copia en los datos: se lee de `public/biblia/` con `Citas.capitulo(versión, libro, capítulo)`, en la versión elegida. Las referencias de cada evangelio admiten varios tramos (`'26:57-58; 26:69-75'`).
- Palabras de Jesús en rojo desde `palabras-jesus.js` (tabla común de los cuatro evangelios: 1 = verso completo, ':' = desde los dos puntos, o tramos exactos). Un pasaje puede fijar su propio rojo y tiene prioridad.
- Lo exclusivo de un evangelio en un pasaje paralelo va en negrita, sin rombos. Las marcas A, B, C… se insertan después de una frase exacta de la RV 1960 y enlazan con su comentario; no hay límite de letras.
- Cada pasaje lleva símbolos, dónde y cuándo (mapa con lugares y trazos de `imperios-geo.js`, y etapa de la vida de Jesús), la Escritura citada con su texto (profecía cumplida, cita o alusión), para pensar y enlaces. Sin mapa, el título dice solo «Cuándo».
- El glosario es común a la armonía y marca la primera aparición de cada término en cada columna. Las referencias del texto que ya está en pantalla no se abren como burbuja.
- Todas las frases (marcas, exclusivos, rojo) se validan contra la RV 1960 antes de publicar.
- **Recorrido de Jesús** (opción del mapa ampliado): línea punteada desde el bautismo hasta el pasaje actual, un color por etapa en líneas paralelas para que no se tapen, cruces del lago en barca con otro trazo, distancia acumulada, leyenda para mostrar u ocultar etapas, barra para avanzar de pasaje sin cerrar el mapa, y nombres de ciudades que al tocarlos muestran sus pasajes. Datos: `caminos.js` (red de caminos aproximados del siglo I: nodos y tramos con su trazado; los cruces en barca se marcan `barca`), `ARMONIA.itinerario` en `data.js` (dónde está Jesús en cada pasaje en que se mueve; si no se mueve, no figura) y `ruta-jesus.js` (camino más corto por la red, suavizado). Al agregar un pasaje con desplazamiento de Jesús, se agrega su entrada al itinerario.
- Sin el recorrido activo, los lugares del pasaje en el mapa ampliado también se pueden tocar y muestran todos los pasajes de la armonía en ese lugar.

**¿3D o interactivo?** Un modelo 3D con ruta de aprendizaje solo se justifica cuando el tema necesita una simulación en el espacio: un recorrido por el santuario, una ceremonia que avanza de un lugar a otro, un mecanismo que se mueve o una pieza que se arma. En esos casos puede haber varias rutas 3D sobre el mismo modelo. Lo que se explica con texto, tablas, imágenes y mapas (comparaciones, listas, historia, teología) va en un recurso de rutas interactivas (`ruta-estudio.js`), que puede enlazar al 3D con un botón `ir`. Ejemplo: las vestiduras del sumo sacerdote van en 3D; los órdenes del sacerdocio y las doce piedras, en El sacerdocio en Israel.

**Motor de mapas: opciones.** `MapaImperios.crear(contenedor, { detalle, maxZoom, zoomEncuadre, alTocarLugar })`. Sin opciones se comporta como siempre (zoom máximo 9, encuadre hasta 8). `detalle` superpone una geografía regional de alta resolución, como `MAPA_DETALLE` de `mapa-detalle-palestina.js` (generado por `geo/palestina.py` desde Natural Earth 1:10m, con el mar Muerto unido como en el siglo I y el lago Hula, desecado en el siglo XX). `alTocarLugar(id, latlng)` hace tocables los lugares. Los datos `geo/ne_*.geojson` se descargan aparte y no van al repositorio.

Desde la v2.35: `minZoom` y `maxBounds` limitan cuánto se puede alejar y desplazar el mapa (La tierra de Israel no deja salir de la zona con teselas de relieve); `rotulos` reemplaza los rótulos fijos de la geografía compartida; `relieve: { url, max, bounds, attr, detalle }` pone teselas de relieve entre el mapa base y las capas, con un botón «Relieve» para quitarlas (las teselas se dibujan un píxel más grandes y sin la mezcla `plus-lighter` de Leaflet 1.9, que dejaba rendijas). En la geografía, una capa puede tener `color` propio en lugar de un imperio, `borde: true` (solo contorno punteado), `sinRotulo` y `sinLeyenda`, y un trazo puede ser un camino (`sinFlecha`, `color`). La leyenda y los rótulos del mapa no se vuelven burbujas de citas. Un recurso puede tener su geografía propia en un archivo `*-geo.js` en su carpeta, generado por un script en `geo/`, que agrega sus capas, lugares y trazos a `IMPERIOS_GEO` al cargarse (referencia: `tierra-de-israel/tierra-geo.js`). Así `imperios-geo.js` no crece con capas que usa un solo recurso.

**Mapa base del mundo** (desde la v2.37). `mapa-base.js` cubre solo el mundo bíblico (0–56° N, 5° O–80° E). Los recursos cuya historia llega a otros continentes cargan en su lugar `assets/js/mapa-mundo.js` (mismo formato, `window.MAPA_BASE`, generado por `geo/mundo.py` desde Natural Earth 1:50m, sin la Antártida) y bajan `minZoom` a 1,5. Una página carga uno de los dos, nunca ambos. Los lugares posteriores a la Biblia de una geografía propia llevan el prefijo `h-` (también Roma, como `h-roma`), para que el atlas bíblico no los agregue ni enlace sus estaciones (referencia: `historia-iglesia-2/historia-geo.js`).

Las apps legadas no se reescriben por reescribir. Se migran a `three` nativo solo cuando necesitan algo que el iframe impide (por ejemplo, hotspots controlados desde la ficha).

### Convenciones de escena

- Escenas bíblicas e históricas: **1 unidad = 1 codo (≈ 45 cm)**. Ejes: **+x oriente, −z norte, +y arriba**.
- Si una escena usa otra escala, la declara en `visor.escala`.
- Toda escena declara su escala en el campo `visor.escala` de la ficha.
- Three.js: las apps legadas usan r128. Todas lo cargan desde `public/apps/assets/js/three.min.js` y `OrbitControls.js`, no desde un CDN (los recursos no dependen de sitios externos). Todo desarrollo nuevo en `three` usa una versión actual vía ES modules; no se agregan funciones nuevas sobre r128.

### Presupuesto de rendimiento (criterio propio, a validar con uso real)

| Métrica | Objetivo |
|---|---|
| Peso de un `.glb` en carga inicial | ≤ 5 MB con Draco (geometría) y KTX2 (texturas) |
| Texturas | ≤ 2048 px por lado; 1024 px por defecto |
| Primera interacción en celular gama media con 4G | Póster visible de inmediato; modelo interactivo en pocos segundos |
| Carga del 3D | Diferida: póster primero, modelo al interactuar o al entrar en pantalla |

Estos valores son una estimación inicial, no un benchmark publicado. Se ajustan con mediciones reales.

## 8. Modelo de contenido

Cada recurso es un archivo `src/content/recursos/{slug}.md`. El esquema está en `src/content.config.ts` y **el build falla si un recurso no lo cumple**.

| Campo | Obligatorio | Regla |
|---|---|---|
| `uid` | Sí | Minúsculas, números y guiones. **Inmutable.** Los favoritos lo referencian |
| `titulo` | Sí | Como lo buscaría un miembro de la iglesia ("El tabernáculo", no "Modelo 3D #12") |
| `resumen` | Sí | ≤ 180 caracteres. Se usa en búsqueda, listas y meta descripción |
| `emoji` | No | Un emoji representativo; se usa solo si el recurso no tiene `imagen` |
| `imagen` | Sí, en todo recurso publicado nuevo | Portada 16:9 en `public/portadas/`: `{slug}.webp` (1200 px), `{slug}-640.webp` (tarjetas) y `{slug}.jpg` (vista previa al compartir). En la ficha se escribe `portadas/{slug}.webp`. Cada recurso nuevo incluye su prompt de portada para Flow, cinematográfico, con el tema al centro |
| `testamento` | Sí, si está publicado | Uno o ambos de `TESTAMENTOS` (§9) |
| `epocas` | Sí, si está publicado, salvo enfoque `herramientas-estudio` | Uno o más de `EPOCAS` (§9). Un recurso de herramientas de estudio (hermenéutica, lenguas, interlineal, medidas, taller de sermón) puede ir sin época |
| `libros` | No | Valores de `LIBROS` (§9). Libros donde el tema es central, no toda mención |
| `tipo` | Sí | Valor de `TIPOS` |
| `enfoque` | Sí, si está publicado | Valor de `ENFOQUES` (§9). El build falla si un recurso publicado no lo declara |
| `tags` | No | Minúsculas con guiones, sin `#`. No repiten lo que ya dicen testamento, época o libro |
| `visor.motor` | Sí | `legado`, `model-viewer` o `three` |
| `visor.ruta` / `visor.modelo` / `visor.poster` | Según motor | Carpeta en `public/apps/`, o URL absoluta (con `https://`) del `.glb` y su póster. Una ruta que empiece con `/` se rompe en la subcarpeta |
| `visor.escala` | Recomendado | Obligatorio para todo 3D nuevo |
| `hotspots` | No | `id`, `titulo`, `texto`, `posicion [x,y,z]` |
| `licencia.contenido` | Sí | Licencia del texto y la app |
| `licencia.modelo`, `licencia.atribucion` | Si el modelo o las teselas son de terceros | Texto exacto que exige la licencia |
| `fuentes` | Sí (≥ 1) | Citas bíblicas, bibliografía o repositorio de origen |
| `revision.estado` | Sí | `borrador` o `revisado` |
| `revision.revisor`, `revision.fecha` | Al pasar a `revisado` | Quién revisó y cuándo |
| `fechaPublicacion` | Sí | Fecha en que el recurso se publica (`AAAA-MM-DD`). Ordena "Recién agregados" |
| `orden` | No | Orden editorial en el catálogo |
| `publicado` | No | `false` oculta el recurso sin borrarlo. Si no está, el recurso se publica |

Los campos de la etapa escolar (`asignatura`, `niveles`, `oa`, `coleccion`) ya no existen en el esquema. Si quedan en una ficha oculta, el build los ignora.

## 9. Taxonomía

Vocabulario controlado en `src/data/taxonomia.ts`. Agregar un valor es una decisión editorial: se registra en la bitácora. El orden de cada lista es el orden en que se muestran los filtros.

| Faceta | Valores | Regla |
|---|---|---|
| `testamento` | `antiguo`, `nuevo` | Un recurso puede tener ambos |
| `epocas` | `creacion`, `patriarcas`, `exodo`, `jueces`, `monarquia-unida`, `monarquia-dividida`, `exilio`, `retorno`, `intertestamentario`, `vida-de-jesus`, `iglesia-primitiva`, `historia-iglesia`, `ultimos-tiempos` | Uno o más (ninguno, si el enfoque es `herramientas-estudio`). Coinciden con las franjas del árbol genealógico (`public/apps/genealogias/epocas.js`), que junta en una sola franja la vida de Jesús y la iglesia primitiva. `historia-iglesia` (desde la v2.37) es la época posterior al Nuevo Testamento, para los recursos de historia de la iglesia, misiones y movimientos; no tiene franja en el árbol. Un recurso transversal (atlas, genealogías) lleva todas las que recorre |
| `libros` | Los 66 libros del canon protestante, con identificador fijo en minúsculas y guiones (`genesis`, `1-reyes`, `cantares`, `apocalipsis`) | Libros donde el tema del recurso es central, no toda mención |
| `tipo` | modelo 3D, mapa, línea de tiempo, árbol genealógico, interactivo | El formato del recurso |
| `enfoque` | `estudio-libro`, `teologia-biblica`, `teologia-sistematica`, `historia-geografia`, `herramientas-estudio` | Cómo estudia la Biblia el recurso; uno por recurso. Es la primera faceta de la portada |
| `tags` | Libres, en minúsculas con guiones | Antes de crear uno, revisar si ya existe una variante. No se usan para testamento, época ni libro |

**Enfoques.** Responden a la pregunta «¿cómo estudia la Biblia este recurso?», no a su formato (eso es `tipo`):

| Enfoque | Qué responde | Recursos |
|---|---|---|
| Estudio de libro | ¿Qué enseña este libro? Introducción, panorama, comentario y teología de un libro | Hechos, Daniel, Apocalipsis, Armonía de los evangelios |
| Teología bíblica | ¿Cómo se desarrolla este tema a lo largo de la revelación, de Génesis a Apocalipsis? | El sacerdocio en Israel, El sumo sacerdote, El tabernáculo, El templo de Salomón, El templo de Herodes, El exilio y los retornos |
| Teología sistemática | ¿Qué enseña toda la Biblia sobre esta doctrina, ordenada como sistema? | La Palabra de Dios, Dios y la Trinidad, Pactos y dispensaciones, Los últimos tiempos |
| Historia y geografía | ¿Cuándo, dónde y en qué mundo ocurrió? | Atlas bíblico, La tierra de Israel, Árbol genealógico, Reyes, jueces y profetas, Los viajes de Pablo, Egipto, los seis imperios, Los imperios en la historia bíblica, Historia de la Iglesia II, El movimiento pentecostal, Los libros apócrifos y pseudoepígrafos, Entre los Testamentos, El mundo judío en tiempos de Jesús |
| Herramientas de estudio | ¿Cómo leo, interpreto y enseño la Biblia por mi cuenta? | Cómo interpretar la Biblia, De la Biblia a nosotros, Pesos, medidas, monedas y horas bíblicas; después, lenguas (hebreo y griego), interlineales, taller de sermón |

Un recurso 3D no es un enfoque: el tabernáculo es teología bíblica en formato 3D. Los recursos no bíblicos están ocultos (`publicado: false`) y no llevan enfoque. Se pueden agregar más enfoques cuando un grupo de recursos no calce en ninguno; cada uno se registra en la bitácora.

Asignación actual:

| Recurso | Testamento | Épocas | Libros |
|---|---|---|---|
| Atlas bíblico | Antiguo, Nuevo | Todas (creación a últimos tiempos) | Génesis, Éxodo, Josué, Jueces, 1 Samuel, 1 y 2 Reyes, Mateo, Lucas, Juan, Hechos |
| Reyes, jueces y profetas | Antiguo | Conquista y jueces a retorno | Jueces, 1 y 2 Samuel, 1 y 2 Reyes, 1 y 2 Crónicas |
| Árbol genealógico | Antiguo, Nuevo | Creación a vida de Jesús | Génesis, Rut, 1 Crónicas, Mateo, Lucas |
| El tabernáculo | Antiguo, Nuevo | Éxodo y desierto | Éxodo, Levítico, Números, Hebreos |
| El templo de Salomón | Antiguo | Monarquía unida | 1 Reyes, 2 Crónicas |
| El templo de Herodes | Nuevo, Antiguo | Intertestamentario, vida de Jesús, iglesia primitiva | Mateo, Marcos, Lucas, Juan, Hechos, Hebreos, Esdras, Hageo |
| El sumo sacerdote | Antiguo | Éxodo y desierto | Éxodo, Levítico, Números |
| Armonía de los evangelios | Nuevo, Antiguo | Vida de Jesús | Mateo, Marcos, Lucas, Juan |
| Los imperios en la historia bíblica | Antiguo, Nuevo | Éxodo a iglesia primitiva | Daniel, Isaías, Jeremías, Habacuc, Lucas, Hechos, Apocalipsis y otros |
| El imperio romano | Antiguo, Nuevo | Intertestamentario, vida de Jesús, iglesia primitiva | Daniel, Mateo, Lucas, Juan, Hechos, Romanos, Filipenses, Apocalipsis |
| El imperio griego | Antiguo, Nuevo | Retorno, intertestamentario, vida de Jesús, iglesia primitiva | Daniel, Zacarías, Joel, Juan, Hechos, 1 Corintios, Gálatas |
| El imperio asirio | Antiguo, Nuevo | Monarquía dividida, exilio | 2 Reyes, 2 Crónicas, Isaías, Oseas, Amós, Jonás, Miqueas, Nahúm, Sofonías, Mateo, Hechos |
| Egipto | Antiguo, Nuevo | Patriarcas, éxodo, monarquía unida y dividida, exilio, intertestamentario, vida de Jesús | Génesis, Éxodo, 1 y 2 Reyes, Isaías, Jeremías, Ezequiel, Oseas, Mateo, Hechos |
| El imperio persa | Antiguo, Nuevo | Exilio, retorno, intertestamentario | 2 Crónicas, Esdras, Nehemías, Ester, Isaías, Daniel, Hageo, Zacarías, Malaquías, Hechos |
| El imperio babilónico | Antiguo, Nuevo | Monarquía dividida, exilio, retorno | 2 Reyes, 2 Crónicas, Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel, Habacuc, Apocalipsis |
| Hechos de los Apóstoles | Nuevo | Iglesia primitiva | Hechos, Lucas, Joel, Romanos, 1 Corintios, Gálatas, 1 Tesalonicenses |
| Los viajes de Pablo | Nuevo | Iglesia primitiva | Hechos y las trece cartas de Pablo |
| Los últimos tiempos | Antiguo, Nuevo | Los últimos tiempos | Daniel, Ezequiel, Isaías, Jeremías, Joel, Zacarías, Mateo, Juan, Romanos, 1 Corintios, 1 y 2 Tesalonicenses, 2 Pedro, Apocalipsis |
| El exilio y los retornos | Antiguo, Nuevo | Monarquía dividida, exilio, retorno | Levítico, Deuteronomio, 2 Reyes, 2 Crónicas, Esdras, Nehemías, Ester, Salmos, Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel, Amós, Hageo, Zacarías, Malaquías, Lucas, 1 Pedro |
| El sacerdocio en Israel | Antiguo, Nuevo | Éxodo, jueces, monarquía unida, retorno, vida de Jesús | Éxodo, Levítico, Números, 1 Samuel, 1 Crónicas, Esdras, Zacarías, Malaquías, Salmos, Lucas, Hebreos, 1 Pedro, Apocalipsis |
| Daniel | Antiguo, Nuevo | Exilio, retorno, intertestamentario, últimos tiempos | Daniel, Jeremías, Ezequiel, Isaías, 2 Reyes, Nehemías, Ester, Mateo, 2 Tesalonicenses, Apocalipsis |
| Apocalipsis | Nuevo, Antiguo | Iglesia primitiva, últimos tiempos | Apocalipsis, Daniel, Ezequiel, Zacarías, Isaías, Génesis, Mateo, 1 y 2 Tesalonicenses |
| Cómo interpretar la Biblia | Antiguo, Nuevo | Ninguna (herramientas de estudio) | Nehemías, Jeremías, Lucas, Hechos, 1 Corintios, 2 Timoteo, 2 Pedro |
| La Palabra de Dios | Antiguo, Nuevo | Éxodo, retorno, intertestamentario, iglesia primitiva (formación del canon) | Deuteronomio, Salmos, Jeremías, Lucas, Juan, Hechos, 1 Corintios, 2 Timoteo, Hebreos, 2 Pedro, Judas, Apocalipsis |
| De la Biblia a nosotros | Antiguo, Nuevo | Ninguna (herramientas de estudio) | Números, Deuteronomio, Nehemías, Isaías, Jeremías, Marcos, Juan, Hechos, 2 Timoteo, 1 Pedro, 1 Juan, Apocalipsis |
| Pesos, medidas, monedas y horas bíblicas | Antiguo, Nuevo | Ninguna (herramientas de estudio) | Génesis, Éxodo, Levítico, Deuteronomio, 1 Samuel, 1 Reyes, Ester, Ezequiel, Daniel, Mateo, Marcos, Lucas, Juan, Hechos, Apocalipsis |
| La tierra de Israel | Antiguo, Nuevo | Patriarcas a últimos tiempos | Génesis, Números, Deuteronomio, Josué, Jueces, 1 Samuel, 1 Reyes, Salmos, Isaías, Ezequiel, Joel, Amós, Lucas, Juan, Hechos, Hebreos |
| Historia de la Iglesia II (de la Reforma a hoy) | Nuevo | Historia de la iglesia | Habacuc, Mateo, Hechos, Romanos, Gálatas |
| Pactos y dispensaciones | Antiguo, Nuevo | Creación, patriarcas, éxodo, monarquía unida, exilio, vida de Jesús, iglesia primitiva, últimos tiempos | Génesis, Éxodo, Deuteronomio, 2 Samuel, Salmos, Jeremías, Ezequiel, Malaquías, Mateo, Lucas, Hechos, Romanos, 2 Corintios, Gálatas, Efesios, Hebreos |
| El movimiento pentecostal | Nuevo, Antiguo | Iglesia primitiva, historia de la iglesia | Joel, Lucas, Hechos, 1 Corintios, Gálatas, 1 Tesalonicenses, 1 Timoteo, 1 Juan |
| Los libros apócrifos y pseudoepígrafos | Antiguo, Nuevo | Exilio, retorno, intertestamentario, iglesia primitiva, historia de la iglesia | 2 Crónicas, Ester, Daniel, 2 Corintios, Colosenses, 2 Tesalonicenses, Hebreos, Judas |
| Entre los Testamentos | Antiguo, Nuevo | Retorno, intertestamentario, vida de Jesús | Nehemías, Daniel, Zacarías, Malaquías, Mateo, Lucas, Juan, Gálatas |
| El mundo judío en tiempos de Jesús | Nuevo, Antiguo | Vida de Jesús, iglesia primitiva | Mateo, Marcos, Lucas, Juan, Hechos, Levítico, Deuteronomio, Romanos, Gálatas |

## 10. Sin fines comerciales

El proyecto no tiene anuncios, planes pagados ni ninguna forma de monetización.

- El código heredado de la etapa comercial (`src/lib/anuncios.ts`, `EspacioAnuncio`, `SITIO.anuncios`, la llamada a `iniciarAnuncios()` en `Base.astro`) queda inactivo con `SITIO.anuncios.habilitados = false` y **se elimina** en la limpieza pendiente (§20).
- No se agregan scripts de terceros con fines publicitarios ni de seguimiento.

## 11. Usuarios

No hay cuentas. Una futura versión con lectura de la Biblia completa, comentarios propios y «Guardar» a nivel de usuario necesitaría base de datos y perfiles: queda postergada hasta redactar el documento de visión de la app de estudio bíblico (§21).

- "Guardar" marca recursos solo en el dispositivo, a través de `almacen` (`src/lib/storage.ts`, `localStorage` con prefijo `fyp:v1:`).
- Ningún componente usa `localStorage` directamente; todo pasa por `almacen`.
- `almacen` guarda también la **versión de la Biblia** elegida (`version-biblia`). La leen y escriben la cabecera del sitio y `citas.js` en las apps, con la misma clave y formato; es una excepción a la regla anterior, porque las apps del iframe no pueden importar `almacen`. La otra es el registro de lo ya visto en las rutas de estudio (§20), que es solo del dispositivo.
- Los favoritos guardan `uid`, nunca títulos ni rutas, para sobrevivir a cambios de slug.
- `src/lib/cuenta.ts` queda inactivo y se elimina en la limpieza pendiente (§20).
- Si en el futuro hiciera falta sincronizar entre dispositivos, se evalúa como decisión nueva en la bitácora.

## 12. Analítica

Anónima, sin cookies de seguimiento ni datos personales. Proveedor sugerido: GoatCounter (se activa con `SITIO.analitica.goatcounter`). Eventos definidos en `src/lib/analitica.ts`:

| Evento | Para qué sirve |
|---|---|
| `abrir-recurso` | Uso por recurso |
| `pantalla-completa` | Proxy de uso en reuniones y prédicas |
| `restaurar-vista` | Si es muy alto, la navegación del modelo confunde |
| `compartir`, `copiar-embed` | Canales de difusión |
| `busqueda` | Qué se busca |
| `busqueda-sin-resultados` | **Lista de recursos nuevos por hacer** |
| `filtrar` | Qué facetas se usan (`faceta/valor`) |
| `guardar-favorito` | Qué recursos se marcan para volver a ellos |

No se agregan eventos sin documentarlos en esta tabla.

## 13. Privacidad

- No se recolectan datos personales. El buzón pide correo opcional y advierte no escribir datos personales de terceros.
- Si en algún momento se recolectaran datos personales, revisar antes la Ley 21.719 de protección de datos personales (Chile) y su fecha de vigencia.
- El proyecto no usa infraestructura corporativa de terceros (por ejemplo, el tenant de Microsoft de un empleador) para formularios, automatizaciones ni datos.

## 14. Portada y búsqueda

La portada es el catálogo completo, a ancho de pantalla:

| Zona | Comportamiento |
|---|---|
| Cabecera fija | Marca (símbolo + nombre en serif grande), buscador (presente en todas las páginas; desde otra página envía a la portada con `?q=`) y Sugerencias |
| Panel de filtros | Columna izquierda desde arriba, a la altura de "Recién agregados". Enfoque, testamento, época, libro, tipo y etiquetas. En libro y etiquetas, 8 opciones visibles y el resto tras "Ver más"; "Solo mis guardados" si el visitante guardó algo. Fijo al hacer scroll en escritorio; plegable en celular, antes de "Recién agregados". Cada opción muestra cuántos recursos quedarían |
| Recién agregados | Columna derecha, arriba del catálogo. Los 4 recursos con `fechaPublicacion` más reciente. Se oculta mientras hay búsqueda o filtros activos, para que los resultados queden arriba. En celular, carrusel horizontal |
| Catálogo | Rejilla de tarjetas (imagen o emoji, tipo, título, resumen). En celular, tarjetas horizontales compactas |

Reglas de filtrado: **O** dentro de una misma faceta, **Y** entre facetas distintas. La búsqueda y los filtros se combinan. Con búsqueda, el orden es por relevancia; sin ella, por `orden`. Todo el estado vive en la URL, así que una vista filtrada se puede compartir.

Las tarjetas se generan en el HTML (SEO y uso sin JavaScript); el navegador solo las oculta o reordena.

- Pagefind indexa solo el `<article data-pagefind-body>` de cada ficha. Filtros: los de §9.
- La portada filtra los resultados de Pagefind para exigir que cada término aparezca por su raíz en el texto: evita falsos positivos por coincidencias parciales.
- Después, la portada reordena: primero el recurso cuyo título coincide con la consulta (sin artículos ni «libro de», «estudio de»), luego los que lo contienen, y al final el resto por relevancia. Si la consulta pide un «libro», el estudio de libro va antes que los demás.
- En `npm run dev` (sin índice) se usa una búsqueda local sobre el catálogo, insensible a tildes.
- Búsqueda sin resultados: mensaje con enlace al buzón con la consulta precargada, y evento de analítica.
- Variantes de nombres bíblicos (Salomón/Salomon, Jerusalén/Jerusalem, Nabucodonosor/Nebucadnezar): a medida que aparezcan en las búsquedas sin resultado, se agregan como texto de la ficha o como tags.

## 15. Ficha escrita y SEO

Cada ficha tiene un artículo propio. Estructura recomendada de secciones H2:

1. **Qué muestra** (el modelo, mapa o línea de tiempo)
2. **Las partes / el contenido** (H3 por parte o sección)
3. **Qué dice el texto bíblico** (pasajes principales, citados)
4. **Cómo usarlo** (botones; sugerencias para estudio personal y para grupos)
5. **Qué es reconstrucción / limitaciones** (supuestos, fechas aproximadas, debates)

Además, cada ficha incluye automáticamente: JSON-LD `LearningResource`, canonical, Open Graph, fuentes, licencia, estado de revisión y enlace para reportar errores.

Reglas: el artículo explica lo que se ve; no repite el resumen ni rellena para alcanzar un largo. Las citas bíblicas usan Reina-Valera 1960 salvo indicación en contrario. La RV 1960 tiene derechos de autor: toda app y toda ficha que la cite incluye el crédito «Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.» Las citas se copian de una fuente que identifique la edición; si no se puede confirmar el texto exacto, se parafrasea en vez de citar entre comillas. Donde hay interpretaciones distintas entre tradiciones o estudiosos, la ficha lo dice.

**Citas en burbuja.** En todos los recursos (atlas, genealogías, línea de reyes, tabernáculo, templo de Salomón, sumo sacerdote y las rutas de estudio; cada app carga `../assets/js/citas.js`), cada referencia bíblica se puede tocar y muestra el texto en una burbuja (`assets/js/citas.js`): un versículo o un rango muestra esos versículos; un capítulo sin versículo («Daniel 5», «Jeremías 50–51») muestra el capítulo completo. El texto vive en el propio sitio, nunca en un enlace externo: los recursos no dependen de otros sitios, que pueden estar bloqueados en redes laborales. Las burbujas funcionan en las apps y también en el artículo de cada ficha.

**Texto bíblico del sitio** (`public/biblia/`, generado por `herramientas/biblia/generar.py`):

- Un archivo por capítulo y versión: `{versión}/{libro}/{capítulo}.json`. La burbuja descarga solo el capítulo que necesita y lo guarda en memoria. Los libros usan los mismos códigos que `citas.js` (`gn`, `2r`, `dn`…).
- `versiones.json`: nombre, abreviatura, crédito y versión por defecto. Agregar una versión es sumar su fuente al generador; el selector la muestra solo.
- `indice.json`: versículos por capítulo de cada versión. Valida las citas: una referencia inexistente no se vuelve burbuja. Antes de publicar, `Citas.faltantes()` en la consola debe devolver una lista vacía.
- Versiones: **RV 1960** (por defecto; derechos de las SBU, permiso en trámite), **RV 1909** y **RV 1865** (dominio público). La Biblia del Oso (1569) se descartó: su fuente trae Daniel y Ester con las adiciones griegas y otra numeración de los Salmos.
- Cada edición numera algunos versículos de otra manera (Jonás 1:17 es 2:1 en la RV 1909). La burbuja lo explica en vez de quedar vacía; el generador deja la lista en `herramientas/biblia/informe.txt`.
- Las citas textuales dentro de los párrafos de un recurso van siempre en RV 1960; la versión elegida cambia solo el texto de la burbuja.
- **Libros que no están en la Biblia del sitio** (desde la v2.40; apócrifos, pseudoepígrafos, apócrifos del Nuevo Testamento): su contenido se resume con palabras propias, sin comillas, y sus referencias siguen la numeración de las Biblias católicas. No se escribe una referencia que la burbuja tomaría por un capítulo inexistente de la Biblia («Daniel 13», «Ester 11», «Salmo 151»): se dice «el capítulo 13 de Daniel en las Biblias católicas» o «el salmo adicional».
- **Elegir la versión:** selector en la cabecera del sitio y en la propia burbuja. Es una preferencia del dispositivo (§11).
- **Lectura en la burbuja:** cuando una cita salta versículos dentro de un capítulo (Dn 8:3-8, 20-22), los tramos se separan con la marca «versículos omitidos»; un cambio de capítulo lleva su subtítulo. Se reconocen rangos entre capítulos (Is 44:28–45:4) y versículos que siguen a capítulos (Daniel 1–7; 9:2). La cabecera de la burbuja queda fija al desplazar el texto.
- **Citas textuales en los párrafos:** cada frase entre comillas «…» seguida de su referencia se contrasta automáticamente con el texto de la RV 1960 antes de publicar; una cita que no coincide se corrige o se reformula como paráfrasis sin comillas.
- **Defectos de la fuente:** las correcciones se registran en `CORRECCIONES` de `herramientas/biblia/generar.py`, para que se apliquen cada vez que se regenera el texto.

## 16. Compartir e insertar

- Opciones: copiar enlace, WhatsApp (canal principal), Google Classroom, Microsoft Teams y compartir nativo del sistema en móvil.
- Código de inserción: `<iframe src="{url absoluta}/embed/{slug}/" … allow="fullscreen" allowfullscreen loading="lazy">`. El embed conserva pantalla completa, restaurar vista y compartir, y enlaza a la ficha completa. Se mantiene porque ya funciona, aunque deja de ser prioridad.
- Los enlaces compartidos deben durar: todo cambio de ruta lleva redirección, y un cambio de organización, repositorio o dominio se planifica (§19).

## 17. Buzón de retroalimentación

- Formulario externo (Tally o Google Forms), configurado en `SITIO.buzonUrl`.
- La página `/buzon/` traspasa `?recurso={uid}` y `?q={búsqueda}` al formulario para que llegue precargado.
- Categorías sugeridas: sugerir recurso nuevo, reportar error de contenido (bíblico, histórico o geográfico), problema técnico, cómo lo uso.
- Prioridad de atención: errores de contenido primero.

## 18. Licencias, fuentes y rigor

- Todo recurso declara `fuentes` y `licencia`. Sin ellas, no compila.
- Modelos de terceros: solo con licencia explícita que permita el uso (CC0, CC-BY o dominio público). Repositorios candidatos: Smithsonian 3D (gran parte CC0), Sketchfab filtrado por licencia CC. Se revisa la licencia de cada modelo individualmente y se copia la atribución exacta.
- Antes de construir un modelo nuevo se evalúa la certeza de la evidencia (textual o arqueológica) junto con su complejidad. Lo incierto se muestra como tal en la ficha.
- **Licencia excepcional aceptada:** geometría de mapas derivada de historical-basemaps (GPL-3.0), limitada al archivo de mapas del recurso que la usa y documentada con su propio archivo de licencia junto a él (hoy `segunda-guerra-mundial/LICENCIA-MAPAS.txt`). No se extiende a la geografía compartida (`imperios-geo.js`), que se genera desde Natural Earth.
- Imágenes: ilustraciones generadas con IA (Google Flow) o fotos de dominio público o licencia libre verificada (§20, Imágenes).
- Revisión: todo recurso nace como `borrador`. Pasa a `revisado` cuando alguien distinto del autor lo revisa, idealmente alguien con formación bíblica.

## 19. Hosting y despliegue

| Etapa | Destino | Configuración (`.github/workflows/publicar.yml`) |
|---|---|---|
| Actual | GitHub Pages, repo `adda-santiago/recursos-biblicos` | `SITE_URL=https://adda-santiago.github.io`, `BASE_PATH=/recursos-biblicos/` |
| Con dominio propio (opcional) | GitHub Pages + dominio | `SITE_URL=https://tudominio.cl`, `BASE_PATH=/`, dominio en Settings → Pages |

Reglas:

1. **Decidir si habrá dominio propio antes de difundir el sitio masivamente.** Pasar de `github.io` a un dominio cambia todas las URL.
2. GitHub Pages no permite redirecciones 301: todo cambio de ruta lleva una página de redirección estática.
3. Límites publicados de Pages: 1 GB de sitio y 100 GB/mes de transferencia (límites blandos).
4. Los `.glb` pesados no se guardan en Git: van a almacenamiento externo con CDN y se referencian por URL absoluta.
5. Mientras el sitio esté en subcarpeta (`/recursos-biblicos/`), `robots.txt` no tiene efecto: los buscadores solo lo leen en la raíz del dominio. Las apps legadas se excluyen con `<meta name="robots" content="noindex">` en su `index.html`. Con dominio propio en la raíz, `robots.txt` vuelve a funcionar.
6. En el plan gratuito, Pages exige repositorio público.
7. Sin computador propio, todo se edita desde el navegador (github.com o github.dev, tecla `.` en el repositorio). La validación la hace GitHub Actions: si un recurso no cumple el esquema, el flujo falla y el sitio publicado no cambia.
8. **Carga masiva por ZIP.** Subir por la web pierde la estructura de carpetas. Para cargar o actualizar muchos archivos, se sube un `.zip` a la raíz del repositorio: el flujo `desempaquetar.yml` lo descomprime conservando las carpetas, lo borra, confirma los cambios y lanza `publicar.yml`. Cada archivo del ZIP **reemplaza completo** al del repositorio: nunca se incluyen fragmentos. Los ZIP no pueden modificar `.github/` (GitHub no permite que un flujo edite flujos): los archivos de `.github/workflows/` se crean o editan a mano desde la web. **Se sube un ZIP a la vez** y se espera a que `desempaquetar.yml` termine: dos ejecuciones simultáneas chocan al confirmar (error «fetch first»). Un ZIP tampoco puede borrar archivos: los que quedan obsoletos se eliminan a mano en GitHub.

## 20. Flujos de trabajo

### Plan de publicación

- El orden de todos los recursos (136: 66 estudios de libro y 70 recursos de apoyo) vive en la planilla de Google **«Orden publicación recursos»** (hoja «Orden de publicación», con un resumen de avance por ola y por categoría). Columnas: número, ola, bloque, recurso, categoría, tipo, «Se apoya en» y estado.
- Las olas siguen el canon y las dependencias: 0 Fundamentos, 1 Hebreo y Pentateuco, 2 Conquista y monarquía, 3 Libros poéticos, 4 Profetas preexílicos y exílicos, 5 Retorno y cierre del AT, 6 Griego, introducción al NT y evangelios, 7 Cartas de Pablo y misiones, 8 Cartas generales, 9 Después del NT y ministerio.
- **Regla de dependencias:** un recurso de apoyo se publica antes que los estudios que se apoyan en él. Si al preparar un estudio aparece un tema que serviría a varios libros, se propone como recurso aparte; si se acepta, se crea primero, se agrega a la planilla y el estudio lo referencia con un botón `ir`.
- **Estados** (los valores exactos que cuentan las fórmulas del Resumen): Pendiente → En desarrollo (opcional, mientras se construye) → Demo en revisión (al entregar el demo) → Publicado (al entregar el ZIP). Claude actualiza la columna Estado de la planilla en cada entrega.
- La planilla es la referencia del avance; las fichas `publicado: false` (recursos no bíblicos) no figuran en ella.

### Agregar un recurso nuevo

1. Revisar el buzón y las búsquedas sin resultado para confirmar la demanda.
2. Evaluar certeza de la evidencia y complejidad (§18). Elegir motor (§7).
3. Conseguir o construir el modelo. Verificar licencia. Comprimir (Draco, KTX2) y generar póster.
4. Crear `src/content/recursos/{slug}.md` con todos los campos obligatorios y `revision.estado: borrador`.
5. Escribir la ficha con la estructura de §15.
6. Verificar que GitHub Actions termine sin errores. Probar en escritorio, celular (táctil) y proyección (pantalla completa, restaurar vista).
7. Pedir revisión y pasar a `revisado` con revisor y fecha.

### Incorporar una app existente

1. Copiar la carpeta a `public/apps/{slug}/` (nombre sin espacios ni tildes).
2. Cambiar el enlace de marca a `../../`, agregar `<script src="../visor-bridge.js"></script>` antes de `</body>` y `<meta name="robots" content="noindex">` en el `<head>`.
3. Revisar que la app no use rutas que empiecen con `/`: dentro de la subcarpeta se rompen. Usar rutas relativas.
4. Declarar `window.fypReset` con la vista inicial.
5. Crear la ficha en `src/content/recursos/` con `visor.motor: legado` y `visor.ruta: {slug}`.

### Ruta de aprendizaje (obligatoria en todo modelo 3D)

**Todo modelo 3D nuevo incluye una ruta de aprendizaje.** Un modelo sin ruta no se publica. Todas comparten un diseño común (`assets/css/visor-3d.css`):

- **Columna de texto a la izquierda**, de 29rem (el ancho que tenía la ficha flotante): cabecera con la marca y el nombre del recurso, cuerpo desplazable con la ruta, el título, la referencia, las filas de datos, la explicación y «Para pensar», y la navegación Anterior/Siguiente fija abajo. La escena ocupa el resto. En celular, la escena va arriba y el texto debajo.
- **Botón flotante «Rutas»** en la esquina superior izquierda de la escena. Abre un panel lateral con solo los nombres de las rutas, agrupados; la ruta actual va marcada. No se listan las estaciones, para no confundir pasos con rutas: elegir una ruta lleva a su primer paso, y los pasos se recorren con Anterior/Siguiente. La brújula va abajo a la izquierda.
- **Imágenes entre párrafos.** En `desc`, una imagen se escribe `{ img, alt, pie, origen: 'ia' | 'foto', licencia }`. Se muestra a todo el ancho de la columna, con su pie y su origen, y al tocarla se agranda.
- Las apps anteriores (tabernáculo, templo de Salomón, sumo sacerdote, ADN, motor de combustión) conservan su estructura interna y cargan `assets/js/visor-3d.js` después de `app.js`: el script mueve la ficha a la columna, oculta el panel lateral y arma el panel de rutas con las opciones de su selector. Las apps nuevas escriben esa estructura directamente (referencia: `templo-herodes/`).

Reglas:

- **Rutas.** Si el recurso tiene dos o más rutas (el recorrido principal más procesos, ceremonias, viajes, etc.), se eligen en el panel del botón «Rutas». Nunca se apilan rutas una tras otra. En las apps anteriores el panel se arma a partir de su lista desplegable (`<select id="ruta">`), que queda oculta.
  - Las opciones se agrupan con `<optgroup>`: *Recorrido* para la ruta principal y un grupo con nombre según el contenido para las demás (*Ceremonias*, *Procesos*, *Viajes*). El nombre de la opción no lleva conteo de pasos.
  - Bajo el selector, una línea breve con la referencia de la ruta (`info` o `ref`; en mapas, el color del recorrido).
  - En código, cada ruta es `{ id, grupo, n, info, steps }` dentro de `ROUTES`. Elegir una ruta va a su primer paso; tocar un objeto de la escena o «Vista general» devuelve el selector a la ruta principal.
  - Con una sola ruta no hay selector: solo la lista.
  - Referencia: `tabernaculo/`. Mismo patrón en `adn/`, `motor-combustion/` y `viajes-colon/`.
- El contenido va en `data.js`, separado del motor (`app.js`), para poder revisar o corregir textos sin tocar el 3D.
- Cada estación cierra con una pregunta **Para pensar**, sin la respuesta escrita en la misma ficha. Sirve tanto para el estudio personal como para conversar en grupo.
- La ruta va de lo simple a lo complejo: piezas, ensamblaje, escala y contexto histórico.
- Las piezas que se muestran separadas de la escena principal usan materiales propios, para no atenuarse cuando se resalta una categoría.
- Lo que el modelo simplifica se declara en la sección «Qué es reconstrucción / limitaciones» de la ficha.
- Si el modelo representa un proceso que avanza en el tiempo, la escena muestra un indicador de estado con lo que está pasando en ese momento, y cada paso de Procesos repite solo su tramo.
- Las estaciones pueden mostrar grupos auxiliares (nombres, medidas) y fijar un tramo de animación; los botones de la escena permiten activarlos también a mano.
- **Mapas con recorridos** (viajes, rutas, campañas: el éxodo, los viajes de Pablo) usan el mismo patrón con Leaflet: el grupo de rutas del selector se llama según el contenido (por ejemplo, Viajes), la cámara es el encuadre del mapa (`view` como límites sur-oeste y norte-este), cada paso redibuja solo su tramo y el indicador de estado muestra recorrido, fecha, lugar y avance. Referencia técnica: `viajes-colon/` (ficha oculta, la app sigue en el repositorio).

### Ruta de estudio (recursos para leer)

Distinta de la **presentación** (`segunda-guerra-mundial/`), que un profesor usa para enseñar con texto breve: la ruta de estudio es para que la persona aprenda sola, y por eso el texto es extendido. Referencia: `imperio-babilonico/`.

- **Motor compartido.** `assets/js/ruta-estudio.js` y `assets/css/ruta-estudio.css`. Cada recurso tiene solo `index.html`, `data.js` (`window.RUTA_DATA`, formato descrito en el encabezado del motor) e `img/`. Un bloque `{ ir: { t, a } }` en el texto muestra un botón que abre otro recurso en la página completa (`a` es una ruta relativa, p. ej. `../../viajes-pablo/`). Excepción a la estructura de cuatro archivos: con varios recursos del mismo tipo, copiar el motor en cada carpeta haría que las copias se desalinearan.
- **Lámina.** En escritorio, panel visual a la izquierda (imagen, mapa, tabla o pasaje, con pestañas si hay varios) y texto con desplazamiento propio a la derecha; en celular, visual arriba y texto debajo. Navegación Anterior/Siguiente y enlace propio por estación (`#ruta/numero`).
- **Contenido por descubrir.** Una pestaña que el alumno no ha abierto se ve como un botón por tocar: borde y texto de acento y una flecha («Mapa ›»). Si tiene pasos, lo indica («Mapa · 5 pasos»). En la primera visita a la estación, la pestaña late tres veces (unos 2,7 s) y aparece una nota guía que se cierra sola. Los mapas por pasos muestran puntos de avance que se pueden tocar, y el botón «▶ Ver la evolución» los recorre solos, uno cada 3,5 s, con pausa. En la primera visita, «›» y «Ver la evolución» también laten. El motor recuerda en el dispositivo qué estaciones y pestañas ya se vieron (clave `fyp:v1:visto:<ruta de la app>`); `?reiniciar-vistos` en la dirección las vuelve a mostrar. Con «reducir movimiento» activado no hay pulsos.
- **Selector de rutas** como botón flotante en la esquina, que abre y oculta un panel con las rutas y sus estaciones; las rutas en preparación aparecen deshabilitadas.
- **Línea de tiempo inferior** opcional por ruta (`linea-tiempo.js`): hitos y un marcador que se desliza a la fecha de cada estación o de cada paso del mapa.
- **Mapas** con `mapa-imperios.js`: capas por imperio y período, lugares, trazos animados y pasos dentro de una estación. Geografía compartida en `imperios-geo.js`, generada por `geo/imperios.py`. La capa «La iglesia» (`iglesia-30` a `iglesia-62`, color `--iglesia`) es acumulativa por etapas, se dibuja siempre encima de los imperios y marca zonas aproximadas alrededor de los lugares donde Hechos registra creyentes o iglesias; para ajustar una zona se edita la lista `ETAPAS_IGLESIA`. Para regenerar hace falta `geo/ne_50m_land.geojson` (Natural Earth), que no se sube al repositorio.
- **Estudio de un libro bíblico.** Cuatro rutas fijas: I. Introducción y trasfondo (isagógica: contexto histórico, cultural y geográfico; autoría y destinatarios; motivo u ocasión; género literario), II. Visión panorámica (estructura y bosquejo, palabras y versículos clave, temas principales), III. Comentario capítulo por capítulo (una estación por capítulo; un capítulo largo se divide) y IV. Teología del libro (con escatología dispensacionalista, neumatología y cristología cuando el libro las toca). Después van las rutas de mapas y de temas propias del libro, agrupadas en el selector como «Estudio del libro», «Mapas» y «Temas». Primer recurso: Hechos de los Apóstoles.
- **Pasajes copiados de la Biblia del sitio.** En los estudios grandes, el contenido puede escribirse en partes (`herramientas/<recurso>/parte*.js`) con las pestañas de pasaje marcadas `'@@libro/capítulo/versículos'`; un script (referencia: `herramientas/apocalipsis_citas.py`) arma el `data.js` y copia el texto exacto de `public/biblia/rv1960`. Así el pasaje mostrado nunca difiere de la versión. Con prefijo de versión (`'@@rv1909:mt/6/11'`) se copia de otra versión del sitio, por ejemplo para comparar revisiones. Para corregir el texto se editan las partes y se vuelve a correr el script, no el `data.js`.
- **Recursos generales.** Cuando un tema sirve a varios libros (por ejemplo, los viajes de Pablo para Hechos y las cartas), se crea como recurso aparte y el estudio del libro lo resume en una ruta puente.
- **Selector en el mapa** (desde la v2.35). Un visual `{ tipo: 'mapa', selector: { etiqueta, clave, opciones: [{ id, t, region, estado, nota }] } }` muestra bajo el mapa una lista que cambia lo que se dibuja y una nota. La elección se recuerda en el dispositivo (`fyp:v1:sel:<clave>`); la primera vez se elige la opción cuyo `region` coincide con el país del idioma del navegador. Primer uso: «Compara con tu país» en La tierra de Israel, que dibuja sobre la tierra, a la misma escala, una región de tamaño parecido de cada país de habla hispana (y de Estados Unidos), con superficies calculadas con los mismos datos.
- **Enlace a otra estación del mismo recurso:** `{ ir: { t, a: '#ruta/n' } }` salta sin salir de la app (los demás `ir` abren la ficha completa con `target="_top"`).
- **Historia reciente** (desde la v2.35). Los hechos posteriores a 1948 se cuentan con fechas y con las dos perspectivas, israelí y palestina, sin opinión política; la estación que describe la situación actual lleva la fecha de redacción y se revisa periódicamente (Pendientes), igual que «El monte hoy».
- **Ejercicios de opción múltiple** (desde la v2.30, para las herramientas de estudio y donde ayuden a fijar un método). Un bloque `{ ejercicio: { pregunta, opciones: [{ t, ok, por_que }], explicacion } }` dentro de `texto`: la persona elige una opción y ve de inmediato si acertó, con la retroalimentación de esa opción (`por_que`) y la explicación general. Puede reintentar. No hay puntaje, no se guardan respuestas y no se califica (§1). Las opciones incorrectas deben ser errores plausibles de lectura, no absurdos. Formato exacto en el encabezado de `ruta-estudio.js`. Primer uso: Cómo interpretar la Biblia (36 ejercicios).
- **Taller práctico.** En las herramientas de estudio, una ruta final aplica el método a pasajes concretos, paso a paso, con ejercicios. Prefiere pasajes muy citados que suelen leerse fuera de contexto.
- **Páginas auxiliares de una herramienta** (desde la v2.33). Una herramienta de estudio puede incluir una página propia dentro de su carpeta, por ejemplo `medidas-biblicas/calculadora/`, que se abre con un botón `ir` (`a: 'calculadora/'`) y vuelve a la ficha del recurso. Es una página sencilla con `tokens.css`, `noindex`, el crédito de la RV 1960 si cita la Biblia y `citas.js` para las referencias; no usa `localStorage` ni servicios externos. La calculadora de medidas convierte longitudes, capacidades, pesos, dinero (a días de trabajo y a la moneda del lector, por salario y no por el precio de la plata) y horas y vigilias (según la época del año). **Equivalencias únicas del sitio:** codo común de 44,5 cm (codo largo de 52 cm), estadio de 185 m, efa y bato de 22 L, siclo de 11,4 g, mina de 50 siclos, talento de 3.000 siclos, libra romana de 327 g y denario igual a un día de trabajo (300 días al año). Viven en `medidas-biblicas/calculadora/unidades.js`; todo recurso que convierta medidas usa esos valores, y si alguno cambia se corrige ahí, en las rutas del recurso y en `herramientas/esquemas_medidas.py`.
- **Extensión del recurso** (desde la v2.37): el número de rutas y de estaciones no se fija de antemano ni se copia de otro recurso. Cada recurso tiene las que necesita según la extensión y la complejidad de su tema. La única estructura fija son las cuatro rutas I a IV de los estudios de libro, que igual tienen tantas estaciones como el libro necesite.
- **Texto:** entre 250 y 450 palabras por estación; si necesita más, se divide. Cada estación cierra con **Para pensar**, siempre desde el texto bíblico y la línea doctrinal pentecostal clásica de las Asambleas de Dios, sin mencionarla.
- **Historia y texto bíblico.** Cuando una fuente histórica parece diferir del relato bíblico, o dos textos bíblicos dan datos distintos, se usa el bloque de dos posturas (`posturas`) con ambas versiones y cómo se entienden; nunca se presenta el texto bíblico como error. En temas doctrinales prevalece la línea de las Asambleas de Dios.
- **Recursos complementarios** (cada imperio, el exilio, el esquema escatológico) hablan de todos los libros donde aparece el tema, no solo del libro que los originó. Los recursos históricos incluyen además su legado (aportes, costumbres, inventos), verificado.
- **Imágenes:** imágenes fotorrealistas generadas con IA, como fotogramas de una película histórica (nunca ilustración, pintura ni render), con el tema al centro; `foco` ajusta el recorte. **Formato:** las escenas de las estaciones se generan en 4:3 (1200×896, el panel visual) y la portada del recurso en 16:9 (1200×675, tarjetas y vista previa al compartir); el prompt de cada imagen dice cuál corresponde. Un objeto arqueológico real nunca se representa con una imagen generada: se usa una foto con licencia verificada o una escena que no se confunda con evidencia. Si no se encuentra una foto con licencia libre verificada (por ejemplo, una pesa o una moneda concreta), la estación queda sin esa foto: no se reemplaza por una foto de otro objeto parecido ni por una imagen generada, y una foto con derechos reservados no se publica aunque esté en internet. Los prompts para Google Flow van en inglés y completos (estilo, formato 4:3 y restricciones dentro del prompt). Toda persona bíblica con nombre que aparece en una escena es un personaje de Flow, aunque se use por primera vez: se crea con un prompt de referencia (foto de estudio de una persona real con vestuario), y cada prompt de escena la nombra igual que en Flow e indica cuáles adjuntar. Lo mismo vale para las personas históricas con nombre que no son bíblicas (Jerónimo, Casiodoro de Reina), que se registran en la misma hoja. Las personas anónimas (una multitud, un pastor) se declaran anónimas en el prompt. El registro de personajes vive en la hoja «Personajes Flow» de la planilla del plan (nombre en Flow, persona bíblica, etapa, rasgos fijos, recursos y estado); se consulta antes de escribir los prompts y se actualiza en cada recurso. Jesús tiene dos personajes: Jesús-adulto-espalda (de espaldas o de tres cuartos posterior, sin rostro) y, desde la v2.35, Jesús-adulto (de frente, con rasgos de un judío galileo del siglo I y siempre el mismo). Por defecto se usa el de espaldas; el de frente se usa solo cuando el rostro o la expresión de Jesús es el centro de la escena (la mirada a Pedro, el llanto sobre Jerusalén, la mirada al joven rico), y no se mezclan los dos en la misma escena. En las visiones de gloria su rostro sigue oculto por la luz. Si un personaje aparece en distintas etapas de su vida, se crea un personaje de Flow por etapa, con su propio nombre (Daniel-joven y Daniel-anciano, José-joven y José-adulto), y la escena usa el de la etapa que corresponde. Las fotos de manuscritos, portadas de libros antiguos y otros objetos que deben verse enteros llevan `completa: true`: el motor las muestra sin recorte, con su pie. Toda foto (`origen: 'foto'`) muestra además el botón «Ampliar»: la abre a pantalla completa, con zoom (botones, rueda, doble toque o pellizco) y arrastre, para ver el detalle. Por eso las fotos se guardan con su resolución original. La portada se genera directamente en 16:9 y no se recorta: Claude solo la optimiza a 1200×675, con su `-640.webp` y su `.jpg`. Los diagramas propios (esquemas, líneas proféticas) se dibujan en SVG con un script en `herramientas/` y se declaran con `origen: 'esquema'`: el motor los muestra completos, sin recorte, con el pie «Esquema del recurso».

### Atlas bíblico (mapa de consulta)

El atlas responde «¿dónde queda y qué pasó ahí?». No cuenta viajes ni campañas: esos van en su propio recurso (§20, Plan de publicación) y el atlas los reúne en el botón «Recorridos». Referencia: `public/apps/atlas/`.

- **Motor:** `mapa-imperios.js` con el mapa base propio y la capa de detalle de Palestina. Marcadores, búsqueda y fichas en `atlas.js`; estilos en `atlas.css`.
- **Tipo de mapa** (botón abajo a la derecha con menú; se recuerda en el dispositivo), elegidos por el responsable el 21 de octubre: **Mapa** (el propio, por defecto), **Físico** (Esri `World_Physical_Map`: relieve, vegetación y desierto, sin calles; detalle propio solo hasta zoom 8, después se ve ampliado), **Satélite** (Esri `World_Imagery`), **Acuarela** (Stamen Watercolor, de Stadia Maps) y **Atlas** (Thunderforest Atlas). Es la única excepción a «sin teselas externas» (§5). Acuarela y Atlas necesitan cuenta, así que solo aparecen cuando se activan en `MAPAS_CUENTAS` (`atlas.js`): Stadia con el dominio del sitio autorizado en su panel (plan gratuito para uso no comercial, sin clave en el código) y Thunderforest con su clave (plan gratuito de 150.000 teselas al mes; la clave queda visible en el código público). Si un servidor no responde tras tres teselas fallidas, se usan las teselas de la NASA alojadas en `atlas/relieve/` (Blue Marble con relieve sombreado, dominio público; zoom 3 a 7, más detalle entre Roma y Persia) y un aviso lo explica. Las teselas propias salen del paquete npm `@freetiler/nasa-bluemarble`; no se editan a mano. Desde la v2.35 hay además zoom 8 para la tierra de Israel (`relieve/8/151–154/101–106`, del repositorio GitHub del mismo paquete), que usa La tierra de Israel; el atlas sigue usando hasta el zoom 7.
- **Controles:** buscador (lugar, alias o sitio dentro del lugar, título de un evento o libro; un libro filtra el mapa y aparece como filtro activo), una época a la vez (con el imperio de esa época de fondo, que se puede ocultar) y tipos plegables. No hay listas de casillas por libro ni por período.
- **Datos (`lugares.js`, a mano):** un lugar por ubicación (también montes y serranías: Hermón, Tabor, Seir, Galaad), con `id` fijo, `alias`, los ids de `imperios-geo.js` que le corresponden (`geo`) y sus `eventos` (título, tipo, épocas de la taxonomía, libros, referencia y descripción). Tipos: ciudad, evento histórico, batalla, milagro, predicación, revelación y profecía, pacto y culto. Dos sitios a menos de unos 2 km (Getsemaní y el Gólgota en Jerusalén, Mamre en Hebrón) se reúnen como eventos del mismo lugar.
- **Nombres** (desde la v2.35): siempre visibles; los que chocan con uno más importante se ocultan (prioridad: el lugar abierto, luego los del atlas por número de eventos y enlaces, luego los grises), y al pasar el cursor por un punto se ve su nombre aunque esté tapado (`ordenarEtiquetas` en `atlas.js`).
- **Para aprender más (`recursos.js`, generado):** `node herramientas/atlas_recursos.mjs` recorre los `data.js` de las rutas de estudio (lugares de sus mapas y estaciones cuyo título nombra el lugar), los pasajes de la armonía y una lista manual de recursos 3D (`MANUAL`), y escribe para cada lugar las estaciones con su enlace directo (§6). Ordena primero las estaciones que nombran el lugar y, con una época elegida, las de esa época. Los lugares de `imperios-geo.js` (y de las geografías propias `*-geo.js` de los recursos) que usan los recursos y no están en `lugares.js` se agregan como puntos grises; un lugar con el mismo `id` que uno del atlas se reconoce aunque no figure en su `geo`. Los lugares con prefijo `h-` (posteriores a la Biblia, §7) no se agregan. **Se corre antes de cada ZIP** (§25), para que cada recurso nuevo aparezca en el atlas. Un recurso 3D o legado nuevo se agrega a `MANUAL`.
- **Recorridos:** lista `RECORRIDOS` del mismo script, con el slug que tendrá cada recurso de mapas del plan (`tierra-de-israel`, `patriarcas`, `exodo-desierto`, `conquista-tribus`, `vida-de-david`, `jerusalen-historia`, `expansion-cristianismo`). Mientras la ficha no exista o esté oculta, aparece «En preparación»; al publicarse con ese slug, se activa sola. Si un recurso se publica con otro slug, se corrige la lista.
- **Enlaces:** desde el atlas, `../../{slug}/#ruta/n` con `target="_top"`, para abrir la ficha completa.

### Pendientes

- **Historia de la Iglesia II, cifras actuales:** las estaciones VII.9 y la ruta VIII usan cifras con fecha (Status of Global Christianity 2026, Lista Mundial de la Persecución 2026, Wycliffe agosto de 2025, censos de Brasil 2022 y Chile 2024, Latinobarómetro 2024). Revisarlas cuando salgan las ediciones nuevas (la Lista Mundial, cada enero; Status of Global Christianity, cada año), en las partes y en `herramientas/esquemas_historia2.py`.
- **Historia de la Iglesia II y los recursos que faltan:** cuando se publique Historia de la Iglesia I (nº 132), agregar su botón `ir` en I.1 (Quinientos años de historia) y II.1 (Europa hacia 1500), que hoy la mencionan «en preparación». Hacer lo mismo con Pactos y dispensaciones (nº 9) en V.9. Los botones hacia El movimiento pentecostal (nº 134) ya están en I.1, VI.1 y VII.6 (v2.39).
- **El movimiento pentecostal, cifras y fotos:** las estaciones IV.2, IV.9 y V.7 usan cifras con fecha (Status of Global Christianity 2026, Fraternidad Mundial de las Asambleas de Dios 2025, Pew Research Center 2014, Latinobarómetro 2024, censos de Brasil 2022 y Chile 2024); revisarlas con las de Historia de la Iglesia II. Las fotos de Parham, Seymour, La fe apostólica, Barratt, Ramabai y Hoover están integradas con licencia verificada; IV.3 (Brasil) queda sin foto, porque la de Daniel Berg tiene uso restringido en Wikipedia (si hiciera falta, se generaría una escena con IA).
- **El movimiento pentecostal y El Espíritu Santo:** cuando se publique El Espíritu Santo (nº 11), agregar su botón `ir` en I.1 «La promesa y Pentecostés», VI.1 «El evangelio completo», VI.2 «El bautismo en el Espíritu Santo» y VI.3 «Los dones del Espíritu hoy», que hoy lo mencionan «en preparación». Cuando se publique Historia de la Iglesia I (nº 132), enlazarla desde I.3 «Los dones a lo largo de la historia de la iglesia».
- **Entre los Testamentos y los recursos que faltan:** los botones hacia El mundo judío en tiempos de Jesús ya están en la ruta VII (v2.42). Cuando se publiquen La dinastía de Herodes (nº 92) y La sinagoga de Magdala (nº 94), agregar sus botones `ir` en VI.3 «Herodes, rey de los judíos» y VII.1 «La sinagoga», que hoy los mencionan «en preparación».
- **El mundo judío en tiempos de Jesús, imágenes:** falta regenerar la escena `mj-antipas-jesus.webp` (VI.6; la variante A duplicaba a Jesús y la B mostraba su rostro; prompt corregido en `herramientas/mundo/PROMPTS-FLOW.md`) y quedan sin foto la tumba con piedra rodante (V.9) y el talón de Yehohanán (VI.7). La foto de la piedra de Magdala (IV.3) es de 2012 en el sitio; confirmar si muestra el original o una réplica.
- **El mundo judío y los recursos que faltan:** cuando se publiquen La dinastía de Herodes (nº 92), La sinagoga de Magdala (nº 94), Las fiestas de Israel (nº 26), Cronología del Nuevo Testamento (nº 95) e Historia de la Iglesia I (nº 132), agregar sus botones `ir` en II.2, IV.3, IV.2, el esquema de los gobernantes y VII.5, que hoy los mencionan «en preparación».
- **Entre los Testamentos, foto del Herodión (VI.3):** la propuesta resultó ser un letrero con el plano del palacio y se descartó; la estación queda con la escena de la construcción. Candidata: `File:Herodium_from_above_2.jpg` en Wikimedia Commons, licencia por confirmar.
- **`mapa-detalle-palestina.js` tapa el mar:** en zoom medio (≈7–9), si el recurso no carga el relieve de La tierra de Israel, la capa de detalle pinta tierra sobre el Mediterráneo. Entre los Testamentos no la usa. Corregir la capa antes de volver a usarla en otro recurso sin relieve.
- **Los libros apócrifos y pseudoepígrafos, fotos:** integrada la portada de la Biblia del Cántaro (1602). Quedan sin foto 1 Enoc (V.1) y los evangelios gnósticos (VI.3): las fotos propuestas resultaron ser una tapa moderna y una reconstrucción con errores. Candidata para VI.3: `File:Nag_Hammadi_Codex_II.jpg` en Wikimedia Commons, licencia por verificar.
- **Pactos y dispensaciones:** cuando se publiquen La ley de Moisés (nº 22) y El Espíritu Santo (nº 11), agregar sus botones `ir` en las estaciones II.6 «El Sinaí», III.4 «¿Qué pasa con el pacto del Sinaí?» y III.5 «El Espíritu, promesa del nuevo pacto».
- **Dios y la Trinidad, La persona y obra de Cristo y El Espíritu Santo:** cuando se publiquen los recursos nº 10 y nº 11, agregar sus botones `ir` en las estaciones IV.5 «El Hijo es Dios» y IV.6 «El Espíritu Santo es Dios y es persona» de Dios y la Trinidad, y enlazar desde ellos la ruta IV.
- **La tierra de Israel, estación «De 1948 a hoy» (V.6):** describe la situación al 21 de octubre de 2026 (alto el fuego en Gaza, tregua en el Líbano, reconocimientos de Palestina, población). Revisar las noticias y actualizarla periódicamente, junto con la tabla de fechas.
- **La tierra de Israel y Los pueblos vecinos de Israel:** cuando se publique Los pueblos vecinos (nº 35), agregar su botón `ir` en la estación I.7 «Rodeada de vecinos».
- **`geo/imperios.py` desalineado:** al regenerarlo no reproduce el `imperios-geo.js` publicado (faltan lugares como `r-capadocia`, agregados a mano después). Antes de volver a correrlo, pasar esos lugares al script.
- **Estudios de las cartas de Pablo:** cuando se creen, enlazar desde ellos la estación correspondiente de Los viajes de Pablo (ruta Las cartas en su contexto) con el bloque `ir`.
- **Archivos obsoletos del atlas (borrar a mano en GitHub):** `public/apps/atlas/fronteras.js`, `public/apps/atlas/viajes.js` y `public/apps/assets/css/atlas.css`. Un ZIP no puede borrarlos (§19, regla 8).
- **Atlas: activar Acuarela y Atlas.** Crear cuenta en Stadia Maps y autorizar el dominio del sitio, y crear cuenta en Thunderforest; luego `stadia: true` y la clave en `MAPAS_CUENTAS` (`atlas.js`).
- **Atlas: lugares sin eventos propios.** Los grises vienen de los recursos y no tienen descripción; los más consultados (Esmirna, Pérgamo, Tiro, Betsaida, Magdala) se pueden pasar a `lugares.js` con sus eventos.
- **`citas.js` y los dos puntos:** una referencia seguida de dos puntos («Jl 2:28-32: el derramamiento…») se corta y no se reconoce completa. Mientras no se corrija el motor, en el contenido la referencia va en su propia celda o seguida de otro signo.
- **Permiso de la Sociedad Bíblica (RV 1960):** El imperio babilónico cita unos 1.450 versículos, incluidos libros completos (Lamentaciones, Habacuc). Se publica igual, porque el sitio está en etapa de desarrollo y sirve también para mostrar el proyecto a la Sociedad Bíblica; si el permiso no se concede, se ajustan las burbujas antes de difundir el sitio.
- **Títulos de los Salmos en la RV 1909:** la fuente los trae pegados al versículo 1 («Salmo de David. JEHOVÁ es mi pastor»).
- **`noindex` en las apps legadas** (§19, regla 5): falta en `genealogias/`, `linea-reyes/`, `tabernaculo/` y `templo-salomon/` (y en las apps de las fichas ocultas).
- **Limpieza del código comercial:** eliminar `anuncios.ts`, `cuenta.ts`, `EspacioAnuncio`, `SITIO.anuncios` y la llamada a `iniciarAnuncios()`.
- **Tabernáculo:** las rutas de servicio y de expiación ya existen como ceremonias (Servicio diario y Día de la Expiación). El sumo sacerdote (3D) queda solo con Las vestiduras; Sumo sacerdote, sacerdote y levita y Las doce piedras están en el recurso interactivo El sacerdocio en Israel.
- **Crédito de la RV 1960 en las apps existentes** (§15): falta en `genealogias/`, `linea-reyes/`, `tabernaculo/` y `templo-salomon/`, que usan la burbuja de citas.
- **Sistema de diseño** (hecho en Claude Design a partir de `tokens.css`, `global.css` y estas directrices). Brechas: contraste WCAG de `--muted` y `--surface-2` en modo claro, y de `--line-strong` sobre `--surface` en el contorno de controles (no llega a 3:1); colores de datos sin sincronizar entre apps (`--judah`, `--israel`); faltan íconos SVG propios; no hay logo ni isotipo (§4, §22).
- **Armonía de los evangelios.** Publicada en borrador con 246 pasajes que cubren los 3.779 versículos de los cuatro evangelios, en orden cronológico: los 194 del libro de Cristóbal Alarcón y 52 agregados en su lugar (se insertan con `ARMONIA.insertar(tras, lista)` y llevan `nuevo: true` solo como dato interno, sin marca visible). Pendiente: revisión de los comentarios.
- **Recursos derivados de la armonía (pendientes):** un recurso interactivo de recorridos temáticos (parábolas, milagros, los «Yo soy», oraciones de Jesús, las siete palabras, apariciones del resucitado, la Semana Santa día por día) y un estudio de libro para cada evangelio (Mateo, Marcos, Lucas y Juan), con las rutas I a IV, conectados con la armonía.
- **Templo de Herodes y los Evangelios.** La ruta 3D «Jesús y la iglesia en el templo» (presentación, Jesús a los doce años, la purificación, el pórtico de Salomón, la ofrenda de la viuda, la Puerta la Hermosa, las gradas de la Antonia) se construirá junto con los estudios de los Evangelios, enlazada desde ellos y desde Hechos con botones `ir`. «Historia del segundo templo» no será ruta 3D: su contenido ya está en El exilio y los retornos, Daniel y El sacerdocio, y lo que falta (Herodes y la ampliación del templo) irá en los Evangelios.
- **El monte hoy (templo de Herodes, estación 9):** la situación del statu quo cambia con frecuencia; revisar las noticias y actualizar el texto, que hoy describe octubre de 2026.
- **Viajes de Colón** (`viajes-colon/`, oculto) usa todavía el panel lateral con selector; pasarlo al diseño común si se vuelve a publicar o si se crea otro recurso de mapa con recorridos sobre esa base.
- **Pesos, medidas, monedas y horas bíblicas:** falta la foto del denario de Tiberio con licencia libre verificada (candidata: `File:Tiberius,_Denar,_Lyon,_CNG.jpg` en Wikimedia Commons, licencia por confirmar). Mientras tanto, la pestaña muestra «Foto por agregar». La escena de la cuarta vigilia muestra a Jesús con los pies hundidos en el agua; se puede regenerar.
- Revisar la respuesta en celular de las apps legadas con barra lateral fija: dentro del visor, en pantallas angostas, quedan apretadas. Solución de fondo: panel lateral colapsable por defecto bajo cierto ancho. Es prioritario, porque el estudio personal ocurre sobre todo en el celular.

## 21. Roadmap

| Fase | Alcance | Criterio de salida |
|---|---|---|
| 0. Plataforma mínima | Astro, visor con contrato, Pagefind, apps bíblicas incorporadas, compartir, embed, buzón | **Hecho en v1.1**, salvo buzón sin URL; Herodes, en v2.15 |
| 1. Reorientación a la iglesia | Despliegue en `adda-santiago` (hecho), nombre visible (hecho), taxonomía bíblica (hecho), limpieza del código comercial | Sitio publicado en la URL nueva con facetas bíblicas |
| 2. Contenido | Recursos según el plan de publicación (§20): 34 de 136 publicados al 30 de octubre de 2026 (Historia de la Iglesia II y El movimiento pentecostal se adelantaron de la ola 9); se sigue con la ola 0 (Fundamentos). Además, lo que pidan el buzón y las búsquedas sin resultado | Usado por miembros y líderes de la iglesia |
| Futuro | Documento de visión de la app de estudio bíblico: Biblia completa en el sitio, comentarios propios, «Guardar» por usuario (requiere base de datos y perfiles), estudio de la Armonía con texto en pantalla. Ideas 3D: escala del campamento, Templo de Salomón, sinagoga de Magdala, Jerusalén del siglo I | Se decide tras el documento de visión |
| 3. Crecimiento | Analítica activa, PWA con modo sin conexión, dirección de la ficha que sigue la estación abierta (§6) | Uso sostenido medible |

## 22. Decisiones abiertas

| Decisión | Opciones | Estado |
|---|---|---|
| Dominio propio | Seguir en `github.io` / dominio de la iglesia | Pendiente; decidir antes de difundir masivamente |
| Logo | Imagen propia junto al nombre en la cabecera | Pendiente; la cabecera ya lo admite (`SITIO.logo`, §4) |
| Permiso de la RV 1960 | Autorización para citar más de ~500 versículos, ofrecer el selector de versión y alojar el texto completo en el sitio. Solicitud enviada en octubre de 2026 por el formulario web de la Sociedad Bíblica de Chile; contacto cristobal.alarcon@hotmail.com; texto en el anexo A. Mientras tanto, la RV 1960 queda en el repositorio como está (decisión del 20-10-2026). Si no se concede, se borra `public/biblia/rv1960/`, la RV 1909 pasa a ser la versión por defecto en `versiones.json` y se cambia el crédito de las fichas | En trámite; resolver antes de difundir masivamente |
| Hosting alternativo | Seguir en GitHub Pages / plan gratuito de administrable.cl (250 MB) | GitHub Pages; la alternativa queda en evaluación (el repositorio ya pesa cerca de 95 MB) |
| Proveedor del buzón | Tally / Google Forms | Pendiente |
| Almacenamiento de `.glb` | Cloudflare R2 / otro | Pendiente hasta el primer modelo pesado |
| Destino final de los recursos no bíblicos | Mantener ocultos / borrar / mover a otro repositorio | Ocultos por ahora |

## 23. Bitácora de decisiones

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-09-30 | Migración a Astro estático con apps legadas en iframe y contrato de visor común | Escalar a cientos de recursos con SEO sin reescribir las apps existentes |
| 2026-09-30 | Pagefind como motor de búsqueda | Estático, sin servidor, con facetas |
| 2026-09-30 | Taxonomía controlada con niveles Mineduc y OA | Evitar degradación de tags libres; alinear con cómo planifica el profesor |
| 2026-09-30 | Pantalla completa absorbe el "modo pizarra" | Dos botones para la misma acción confunden |
| 2026-09-30 | Sin anuncios en visor ni en embed; anuncios solo en producción con dominio propio | Docencia sin interrupciones, políticas de AdSense y de GitHub Pages |
| 2026-09-30 | Cuentas solo para profesores, preparadas vía `storage` y `cuenta` | Plan sin anuncios futuro sin cargar datos de menores |
| 2026-09-30 | Repositorio nuevo en organización de GitHub, separado de Fuego y Palabra | El proyecto excede el alcance bíblico; la organización da URL en raíz y permite sumar colaboradores |
| 2026-09-30 | Marca propia neutra; Fuego y Palabra pasa a ser colección de Religión | Los colegios laicos y otras asignaturas no deben heredar una marca religiosa |
| 2026-09-30 | Este repositorio es la fuente oficial de las apps bíblicas; el de Fuego y Palabra queda congelado | Evitar dos copias que se desalinean |
| 2026-09-30 | Nombre provisional Aula Visual | Permite avanzar; el nombre vive en un solo archivo |
| 2026-10-01 | Portada a ancho completo: buscador en la cabecera, recién agregados, filtros por faceta y catálogo completo; `/explorar/` se integra a la portada | Mostrar más recursos sin navegar; una sola puerta de entrada al catálogo |
| 2026-10-01 | Campo obligatorio `fechaPublicacion` | Ordenar "Recién agregados" con un dato explícito, no inferido |
| 2026-10-01 | Primer recurso fuera de Religión: El ADN (Biología), con ruta de aprendizaje y replicación | Validar que la plataforma escala a otras asignaturas con el mismo contrato de visor |
| 2026-10-01 | Patrón "ruta de aprendizaje" con pregunta Para pensar por estación | Convertir el modelo en secuencia didáctica, no solo en objeto para mirar |
| 2026-10-01 | La ruta de aprendizaje pasa a ser obligatoria en todo modelo 3D nuevo | Consistencia didáctica; el usuario encuentra siempre la misma estructura |
| 2026-10-01 | Motor de combustión interna (Tecnología): corte, ciclo Otto animado con indicador de estado y comparación con el diésel | Primer recurso de Tecnología; valida el patrón de ruta en un mecanismo que se mueve |
| 2026-10-01 | El motor de combustión pasa a cuatro cilindros en línea (orden 1-3-4-2) con corte en escalón e indicador del tiempo de cada cilindro | Mostrar cómo se reparten las explosiones y por qué un motor de varios cilindros gira más parejo |
| 2026-10-02 | Primer recurso de Historia: los viajes de Colón (mapa Leaflet con ruta de aprendizaje de diez estaciones y los cuatro viajes paso a paso) | Validar el patrón de ruta en un mapa |
| 2026-10-02 | La ruta de aprendizaje se extiende a los mapas con recorridos | Misma estructura en todos los recursos que se recorren por pasos |
| 2026-10-02 | Primer código de OA cargado en una ficha (HI05 OA 01), verificado en curriculumnacional.cl | Aplicar la regla de OA verificados |
| 2026-10-06 | El repositorio vuelve a ser público | GitHub Pages en plan gratuito exige repositorio público |
| 2026-10-06 | Organización `adda-santiago`, repositorio `recursos-biblicos`; el sitio pasa a subcarpeta (`BASE_PATH=/recursos-biblicos/`) | El proyecto pasa a ser un recurso de la iglesia, sin fines comerciales |
| 2026-10-06 | Se descarta la monetización (anuncios y plan sin anuncios) y las cuentas de usuario | No es rentable a corto plazo; sin plan pagado, las cuentas pierden su motivo principal |
| 2026-10-06 | Público: miembros de la iglesia que quieren profundizar en el estudio de la Biblia | Define el uso principal: estudio personal, con proyección ocasional en reuniones |
| 2026-10-06 | Se abandona la marca neutra; el sitio tiene identidad bíblica | La neutralidad respondía a colegios laicos, que ya no son el público |
| 2026-10-06 | ADN, motor de combustión y viajes de Colón quedan ocultos (`publicado: false`) | No corresponden al propósito; se conservan por si se retoman en otro proyecto |
| 2026-10-06 | Taxonomía bíblica (testamento, libro, época, tipo) reemplaza asignatura, niveles y OA; pendiente de implementar | Facetas que corresponden a cómo se estudia la Biblia |
| 2026-10-06 | GitHub Pages pasa a ser el hosting permanente; se descarta Hostinger | Sin uso comercial no hay restricción de Pages ni necesidad de AdSense |
| 2026-10-06 | Apps legadas excluidas de buscadores con `meta robots noindex` | `robots.txt` no aplica en un sitio de proyecto en subcarpeta |
| 2026-10-06 | `visor.modelo` y `visor.poster` deben ser URL absolutas | Una ruta que empiece con `/` se rompe en la subcarpeta |
| 2026-10-06 | Nombre visible: *Recursos Bíblicos* | Coincide con el propósito y con el nombre del repositorio |
| 2026-10-06 | La Segunda Guerra Mundial queda oculta (`publicado: false`) | No corresponde al propósito bíblico |
| 2026-10-06 | Taxonomía bíblica implementada: testamento, época y libro reemplazan asignatura, niveles, OA y colección | Facetas que corresponden a cómo se estudia la Biblia; con un solo valor, "Sección" y "Colección" no filtraban nada |
| 2026-10-06 | Épocas alineadas con las franjas del árbol genealógico, separando la iglesia primitiva | Un solo vocabulario de épocas en el sitio y en las apps |
| 2026-10-06 | Las fichas pasan de `/religion/{slug}/` a `/{slug}/`, con páginas de redirección desde la URL antigua | Sin asignaturas, el segmento sobraba; se cambia ahora, antes de difundir enlaces |
| 2026-10-06 | Testamento y época obligatorios en todo recurso publicado | Evitar fichas que no aparezcan en ningún filtro |
| 2026-10-06 | Filtros en la columna izquierda desde arriba de la portada, junto a "Recién agregados" | Los filtros quedaban bajo los recién agregados y obligaban a bajar para usarlos |
| 2026-10-06 | Selector de ruta (lista desplegable agrupada) reemplaza las pestañas y los acordeones en todo recurso con más de una ruta; aplicado en tabernáculo, ADN, motor de combustión y viajes de Colón | Con varias rutas apiladas una tras otra se perdían; el selector muestra una ruta a la vez y funciona igual en celular, teclado y proyección |
| 2026-10-06 | Nombre del sitio más grande, en serif, con un símbolo de tamaño fijo preparado para un logo (`SITIO.logo`) | Dar presencia a la marca y poder incorporar el logo sin rediseñar la cabecera |
| 2026-10-07 | Las citas bíblicas pasan a la Reina-Valera 1960 por defecto, con crédito de las Sociedades Bíblicas Unidas | Indicación del responsable del proyecto |
| 2026-10-07 | Nuevo recurso: El sumo sacerdote (`sumo-sacerdote/`), con la ruta Vestimenta (11 estaciones en el orden de Lv 8:7-9) y alternancia entre vestiduras de oro y de lino | Explicar el sacerdocio a partir de lo que se ve, prenda por prenda |
| 2026-10-07 | Primera figura humana detallada: Aarón como anciano con barba, sin rostro de retrato; lo que no dice el texto se declara como representación en la ficha | Dar realismo sin atribuir rasgos que el texto no da (Éx 7:7; Sal 133:2) |
| 2026-10-08 | Nuevo tipo de recurso: ruta de estudio para leer, distinta de la presentación para enseñar; motor compartido `ruta-estudio.js` | Las rutas sirven al estudio personal y necesitan texto extendido; un solo motor evita copias desalineadas |
| 2026-10-08 | Componentes compartidos en `public/apps/assets/js/`: citas, línea de tiempo, mapa de imperios y geografía | Los usarán los seis imperios, el integrador, el exilio y el estudio de Daniel |
| 2026-10-08 | Toda cita bíblica se puede tocar y muestra el texto en una burbuja; los capítulos citados muestran el capítulo completo | Leer el pasaje sin salir del recurso |
| 2026-10-08 | Los recursos no dependen de sitios externos: texto bíblico y mapa base viven en el propio sitio | Algunas redes laborales bloquean otros sitios |
| 2026-10-08 | Mapa base vectorial de Natural Earth para los recursos nuevos | Sin teselas externas, funciona con internet débil y respeta el modo oscuro |
| 2026-10-08 | Bloque de dos posturas cuando la historia o dos textos parecen diferir; en doctrina prevalece la línea de las Asambleas de Dios | Mostrar la evidencia sin contradecir el texto bíblico |
| 2026-10-08 | Nuevo recurso: El imperio babilónico, con las rutas Historia, Sociedad y religión, y El imperio y la Biblia | Primer recurso complementario para el estudio de Daniel, Reyes, Crónicas y los profetas |
| 2026-10-08 | Los recursos nuevos se publican (`publicado: true`) aunque haya permisos en trámite | El sitio está en desarrollo y sirve para mostrar el proyecto, incluso a la Sociedad Bíblica |
| 2026-10-08 | La Biblia completa vive en el sitio, un archivo por capítulo y versión (`public/biblia/`), generada por `herramientas/biblia/generar.py` | El objetivo es tener recursos para cada libro; cargar por capítulo mantiene liviana cada página y no depende de sitios externos |
| 2026-10-08 | Versiones iniciales: RV 1960 (por defecto, permiso en trámite), RV 1909 y RV 1865 (dominio público); se agregarán otras de dominio público o con licencia | La arquitectura permite sumar versiones sin tocar los recursos |
| 2026-10-08 | Selector de versión en la cabecera del sitio y en la burbuja, guardado como preferencia del dispositivo | La persona elige su versión una vez y la ve en todo el sitio |
| 2026-10-08 | Se sube un ZIP a la vez | Dos ejecuciones simultáneas de `desempaquetar.yml` chocaron al confirmar |
| 2026-10-09 | Nuevo recurso: El imperio persa, con las rutas Historia, Sociedad y religión, y El imperio y la Biblia | Segundo recurso complementario para Daniel, Esdras, Nehemías, Ester y los profetas del regreso |
| 2026-10-09 | Marca de «versículos omitidos» y rangos entre capítulos en la burbuja de citas | Que el lector vea cuándo una cita salta versículos y lea completos los pasajes que cruzan capítulos |
| 2026-10-09 | Las apps pueden reutilizar imágenes de otras apps (`../otra-app/img/…`) | Evitar generar dos veces la misma ilustración |
| 2026-10-09 | La burbuja de citas se agrega a todas las apps bíblicas existentes | Que toda referencia del sitio se pueda leer en el mismo lugar |
| 2026-10-09 | En la ficha, la barra del visor va arriba del recurso; en el embed sigue abajo | Las acciones quedan a la vista sin bajar; en el embed la prioridad es el recurso |
| 2026-10-09 | Nuevo recurso: Egipto, con las rutas Historia, Sociedad y religión, y Egipto y la Biblia; fechas bíblicas según la cronología del texto (Éxodo hacia 1446 a.C.) | Tercer recurso complementario; cubre de Génesis al Nuevo Testamento |
| 2026-10-09 | Nuevo recurso: El imperio asirio, con las rutas Historia, Sociedad y religión, y Asiria y la Biblia | Cuarto recurso complementario; cubre Reyes, Isaías, Jonás, Nahúm y los profetas del siglo VIII |
| 2026-10-09 | Verificación automática de las citas textuales contra la RV 1960 | Detectó y corrigió diez citas con diferencias en los cuatro recursos de imperios |
| 2026-10-09 | Señales de contenido por descubrir en las rutas de estudio: pestañas destacadas con pulso y nota guía, puntos de avance y «Ver la evolución» en los mapas por pasos | Muchos alumnos no descubrían las pestañas ni los pasos del mapa y se perdían parte del recurso |
| 2026-10-10 | Imagen de portada por recurso en las tarjetas y en la vista previa al compartir (Open Graph), con versión liviana para tarjetas y JPG para WhatsApp | Las tarjetas con emoji no transmitían el contenido; una imagen invita a entrar y mejora cómo se ve el enlace compartido |
| 2026-10-10 | Nuevo recurso: El imperio griego, con las rutas Historia, Sociedad y cultura, y Grecia y la Biblia; 1 y 2 Macabeos solo como fuentes históricas | Quinto recurso complementario; cubre Daniel 8 y 11 y el período entre los testamentos |
| 2026-10-10 | Nuevo recurso: El imperio romano, con las rutas Historia, Sociedad, ley y religión, y Roma y la Biblia; se completan los seis imperios | Sexto recurso complementario; cubre el Nuevo Testamento y la forma final del cuarto reino de Daniel |
| 2026-10-10 | Recurso integrador «Los imperios en la historia bíblica», con las rutas La sucesión de los imperios, Los imperios en la profecía y Dios y las naciones | Puerta de entrada a la serie y puente hacia el estudio de Daniel; reutiliza imágenes de los seis recursos |
| 2026-10-11 | Nuevo recurso 3D: El templo de Herodes, con las rutas Recorrido por el monte del templo y Templo de Salomón y templo de Herodes | Es el templo del Nuevo Testamento; estaba pendiente desde la migración |
| 2026-10-11 | Reconstrucción del templo de Herodes: plataforma según la arqueología, atrios y santuario según la Mishná (Middot), pórticos y Antonia según Josefo; codo de 45 cm | Combinar las fuentes según su fuerza en cada parte; el mismo codo permite comparar a escala con el tabernáculo y Salomón |
| 2026-10-11 | Botón «Templo de Salomón»: superposición a escala alineada en el Lugar Santísimo | Mismo recurso didáctico que el botón Tabernáculo del templo de Salomón |
| 2026-10-11 | Three.js r128 y OrbitControls se sirven desde `public/apps/assets/js/` en las apps nuevas | Cumplir la regla de no depender de sitios externos (2026-10-08) |
| 2026-10-11 | Diseño común de los modelos 3D: columna de texto a la izquierda con el ancho de la antigua ficha flotante, rutas en un panel con botón flotante y brújula abajo; las apps anteriores se adaptan con `visor-3d.js` sin reescribir su lógica | Recuperar el espacio del panel lateral para el modelo y unificar la experiencia con las rutas de estudio |
| 2026-10-11 | El panel «Rutas» de los modelos 3D muestra solo los nombres de las rutas, sin sus estaciones | Con las estaciones listadas no se distinguía entre paso y ruta |
| 2026-10-11 | Imágenes entre los párrafos de una estación, ampliables al tocarlas | La columna de texto es angosta; la imagen acompaña la lectura y se puede ver en detalle |
| 2026-10-11 | Templo de Herodes: ruta «Lo que queda hoy» y botón del mismo nombre; lo desaparecido se ve translúcido y la Cúpula de la Roca y al-Aqsa se dibujan con líneas rojas, como el templo de Salomón | Mostrar qué parte del monte sigue en pie sin mezclar el templo con edificios de otra época |
| 2026-10-11 | La estación «El monte hoy» describe el statu quo con hechos fechados, sin tomar posición política | El tema es disputado y cambia con frecuencia |
| 2026-10-11 | Marca visible «Recursos Bíblicos» también dentro de las apps del tabernáculo, el templo de Salomón, el ADN y el motor de combustión | Todavía decían «Fuego y Palabra» o «Aula Visual» |
| 2026-10-12 | Hechos de los Apóstoles: primer estudio de un libro, con las rutas fijas I a IV, dos rutas de mapas y seis de temas (120 estaciones) | Llevar el modelo de las rutas de estudio a los libros de la Biblia; Hechos es la base del estudio pentecostal del Espíritu Santo |
| 2026-10-12 | Capa «La iglesia» en el mapa compartido, en verde sobre los imperios y acumulativa por etapas | Mostrar cómo crece la iglesia dentro del imperio romano, estación por estación |
| 2026-10-12 | Los viajes de Pablo como recurso general aparte; Hechos los resume en una ruta puente | Lo necesitan también los estudios de las cartas de Pablo |
| 2026-10-12 | Personajes recurrentes creados en Google Flow y prompts de escena que los nombran | Que Pablo, Pedro y los demás se vean iguales en todas las imágenes |
| 2026-10-12 | Corregida la errata «Espíritu Santolo» en Hechos 15:8 (RV 1960); no hay otras del mismo tipo | Error de origen en el texto bíblico del sitio |
| 2026-10-12 | Los viajes de Pablo: recurso general con cinco rutas (recorrido, cartas, ciudades, sufrimientos, después de Hechos) | Base común para Hechos y los estudios de las cartas |
| 2026-10-12 | Bloque `ir` en el motor de rutas para enlazar recursos | Que un estudio pueda abrir un recurso general sin repetir su contenido |
| 2026-10-12 | Los viajes después de Hechos se presentan como reconstrucción probable, con dos posturas sobre uno o dos encarcelamientos | La Escritura no los narra; se apoyan en las pastorales y la tradición |
| 2026-10-13 | Los últimos tiempos: recurso complementario del esquema escatológico, en cuatro rutas (panorama, eventos en orden, temas, geografía) | Base común para Daniel, Apocalipsis y las cartas; sigue la línea premilenial y pretribulacional |
| 2026-10-13 | Nueva época de la taxonomía: «Los últimos tiempos» (`ultimos-tiempos`) | Los recursos sobre profecía futura no encajaban en ninguna época histórica |
| 2026-10-13 | Esquemas propios en SVG (`origen: 'esquema'`), generados con `herramientas/esquemas_escatologia.py` | Un diagrama exacto y editable comunica la secuencia profética mejor que una ilustración |
| 2026-10-13 | La profecía no fija fechas; las identificaciones modernas (Gog, Babilonia, la higuera) se presentan como posturas | Mt 24:36; las predicciones con fecha han fallado siempre |
| 2026-10-14 | El exilio y los retornos: recurso complementario con cuatro rutas, coherente en fechas con los recursos de Asiria, Babilonia y Persia | Base común para Reyes, los profetas, Esdras, Nehemías, Ester y Daniel |
| 2026-10-14 | Los retornos de Persia se presentan como cumplimiento parcial de las promesas del regreso, cuyo cumplimiento final es escatológico | Las promesas de Is 11:11-12, Ez 37 y Am 9:15 exceden lo ocurrido en 538–445 a.C. |
| 2026-10-14 | Un personaje de Flow por cada etapa de vida (Daniel-joven, Daniel-anciano…) | Un mismo personaje con edades muy distintas no puede salir igual en todas las escenas |
| 2026-10-14 | Daniel: estudio de libro con nueve rutas (I a IV, dos de mapas, tres de temas) | Mismo modelo que Hechos; las rutas fijas I a IV se mantienen en todos los libros |
| 2026-10-14 | En Daniel se sigue la autoría del siglo VI a.C. y el cuarto reino como Roma; la fecha del siglo II se presenta como postura | Mt 24:15 y las profecías posteriores al 165 a.C. (Dn 9:26) |
| 2026-10-14 | El motor 3D se usa solo para lo que necesita simulación en el espacio (recorridos, ceremonias, mecanismos), y puede tener varias rutas; lo que se explica con texto, tablas, imágenes y mapas va en rutas interactivas | Cada motor para lo que hace mejor; evitar rutas 3D que no aprovechan el modelo |
| 2026-10-14 | El sacerdocio en Israel: recurso interactivo con cuatro rutas; Labores y Día de la Expiación pasan a rutas 3D del tabernáculo | Aplicación del criterio anterior a las rutas pendientes del sumo sacerdote |
| 2026-10-14 | Nueva faceta `enfoque`: estudio de libro, teología bíblica, teología sistemática, historia y geografía | Quien quiere estudiar un libro o un tema no tenía cómo llegar directo; «Reconstrucción» y «Consulta» se descartaron por describir formato o ser demasiado amplias |
| 2026-10-14 | La búsqueda pone primero el recurso cuyo título coincide con la consulta, y ante «libro de…», el estudio de libro | «libro de Hechos» mostraba muchos recursos antes que el estudio de Hechos |
| 2026-10-14 | Tabernáculo: tres figuras en las ceremonias (sacerdote común de lino; sumo sacerdote con vestiduras de gloria; sumo sacerdote de lino en la Expiación), dos pasos nuevos en el Día de la Expiación (Lv 16:23-28) e indicador de estado | Las rutas de Labores y Expiación ya existían como ceremonias; faltaba distinguir al sumo sacerdote, completar Levítico 16 y mostrar dónde ocurre cada paso |
| 2026-10-15 | «Jesús y la iglesia en el templo» se construye con los Evangelios; «Historia del segundo templo» no se hace como ruta | Las escenas del templo tienen sentido dentro de la historia de los Evangelios; la historia ya está repartida en otros recursos |
| 2026-10-15 | Armonía de los evangelios: plantilla nueva de columnas paralelas con comentario, basada en el libro de Cristóbal Alarcón; 194 pasajes | Formato propio para estudiar los evangelios en paralelo, con el texto en pantalla |
| 2026-10-15 | Palabras de Jesús en rojo desde una tabla común (World English Bible, dominio público, ajustada a la RV 1960) | Marcar 1.954 versos a mano no es viable; la fuente marca verso por verso y los diálogos se revisan |
| 2026-10-15 | Erratas corregidas en la RV 1960 del sitio: Mt 3:3, Mt 5:16, Lc 4:18, Lc 8:22, Lc 12:25, Lc 24:19 y Hch 1:20 | Aparecieron al poner el texto en pantalla en la armonía |
| 2026-10-16 | Se agregan 52 pasajes que faltaban en la armonía (Jairo, la sirofenicia, los cuatro mil, Juan 7 a 11, Mateo 25, el discurso del aposento alto, Juan 21 y otros), en su lugar cronológico | La armonía debe cubrir todos los evangelios en orden cronológico |
| 2026-10-16 | Recorrido de Jesús como opción del mapa ampliado: por los caminos de la época (no en línea recta), suavizado, desde el bautismo, con colores por etapa en paralelo, distancia, leyenda y ciudades que muestran sus pasajes | Ver cuánto caminó Jesús y cómo todo converge en Jerusalén; el mapa pequeño queda como referencia del dónde |
| 2026-10-16 | Capa de detalle de Palestina (Natural Earth 1:10m) solo para la armonía, con el mar de Galilea, el mar Muerto del siglo I y el lago Hula | El mapa base 1:50m no tenía los lagos ni el detalle necesario para seguir los recorridos |
| 2026-10-16 | Emaús se ubica a unos 11 km de Jerusalén (El-Qubeibeh, aproximado) en lugar de Nicópolis | Lucas 24:13 indica «sesenta estadios» |
| 2026-10-19 | Apocalipsis: estudio de libro con siete rutas (I a IV, Las siete iglesias de Asia y dos de temas), apoyado en Los últimos tiempos; lectura futurista, premilenial y pretribulacional | Mismo modelo que Hechos y Daniel; la cronología de los eventos del fin vive en un solo recurso y aquí se resume |
| 2026-10-19 | La geografía compartida suma Esmirna, Tiatira, Filadelfia y Hierápolis, y el trazo «siete-iglesias» | La ruta de las siete iglesias y los mapas de las cartas |
| 2026-10-19 | En las visiones, Cristo glorificado se ilustra con el rostro oculto por la luz | Evitar representar su rostro en escenas de gloria (Ap 1:16), en línea con el criterio de no confundir ilustración con revelación |
| 2026-10-20 | Este documento es el único documento de referencia; absorbe el archivo de contexto del traspaso desde la cuenta de trabajo y el proyecto de Claude guarda una copia idéntica | Dos documentos que se complementan terminan contradiciéndose; el contexto ya estaba desfasado respecto del repositorio |
| 2026-10-20 | Público: varias iglesias e hispanohablantes en general, con perspectiva latinoamericana; sin contenido denominacional propio ni filtros por la malla del instituto | El sitio sirve a quien quiera estudiar la Biblia, no a una sola congregación |
| 2026-10-20 | Nuevo enfoque `herramientas-estudio`, exento de la época obligatoria | Hermenéutica, lenguas, interlineales, medidas y taller de sermón no calzaban en los cuatro enfoques ni pertenecen a una época |
| 2026-10-20 | Bloque de ejercicios de opción múltiple en `ruta-estudio.js`, con retroalimentación por opción, sin puntaje ni registro | Las herramientas de estudio se aprenden practicando; un ejercicio sin calificación no contradice §1 |
| 2026-10-20 | Google Fonts y Leaflet desde cdnjs se aceptan como servicios externos; el contenido sigue sin depender de otros sitios | Son servicios confiables y estables; lo que no puede fallar (texto bíblico, mapas base, datos) ya está en el sitio |
| 2026-10-20 | La RV 1960 completa se mantiene en el repositorio mientras se tramita el permiso | El sitio está en desarrollo y sirve para mostrar el proyecto a la Sociedad Bíblica |
| 2026-10-20 | Claude actualiza el estado de la planilla del plan de publicación en cada entrega | El avance queda al día sin trabajo manual |
| 2026-10-20 | Primer recurso de la ola 0: Cómo interpretar la Biblia (publicado el mismo día), con rutas I. Fundamentos, II. El método, III. Los géneros literarios, IV. Errores comunes y Taller práctico; imágenes mixtas (esquemas SVG y pocas escenas de Flow) | Es la base de los demás recursos de fundamentos y de los estudios de libro |
| 2026-10-20 | El panel de pasaje de las rutas usa letra menor sobre ~400 caracteres y se desplaza si no cabe | Los pasajes del taller (seis a nueve versículos) se cortaban por arriba |
| 2026-10-20 | La Palabra de Dios: recurso de teología sistemática con las rutas I. La revelación, II. La inspiración, III. El canon (con línea de tiempo) y IV. Autoridad y suficiencia; inspiración verbal y plenaria, inerrancia y canon hebreo para el AT, con las posturas contrarias en bloques `posturas` | Segundo recurso de la ola 0; base de De la Biblia a nosotros y de Dios y la Trinidad |
| 2026-10-20 | Canon cerrado y dones del Espíritu vigentes: la profecía de hoy edifica y se juzga por la Escritura, sin su autoridad | Postura continuista de las Asambleas de Dios frente al cesacionismo |
| 2026-10-20 | Corregida la errata «nuesto» en 1 Corintios 1:7 (RV 1960), registrada en `CORRECCIONES` | Apareció al revisar las citas de La Palabra de Dios |
| 2026-10-20 | Hoja «Personajes Flow» en la planilla del plan como registro de personajes; toda persona bíblica con nombre en una escena es un personaje de Flow | Varios prompts nombraban personas sin crear ni adjuntar su personaje |
| 2026-10-20 | Las imágenes se piden como fotograma fotorrealista de película, no como «illustration» | Con «cinematic realistic illustration», Flow generaba ilustraciones |
| 2026-10-20 | De la Biblia a nosotros: herramienta de estudio con las rutas I. Cómo se escribió y se copió, II. El texto del Antiguo Testamento, III. El texto del Nuevo Testamento y IV. Las traducciones; Textus Receptus y texto crítico, y los pasajes discutidos, en bloques `posturas` | Tercer recurso de la ola 0; explica cómo llegó la Biblia hasta la Reina-Valera y responde a quien dice que la Biblia «se cambió» |
| 2026-10-20 | El sitio usa la Reina-Valera 1960 sin exigir una sola edición del texto griego; ninguna doctrina se enseña desde un pasaje discutido | Las Asambleas de Dios no fijan una edición ni una traducción única; la Trinidad y las señales se apoyan en pasajes que todos los manuscritos comparten |
| 2026-10-20 | Opción `completa: true` en las imágenes de las rutas de estudio | Las fotos de manuscritos (P52, Biblia del Oso, Gran rollo de Isaías) se cortaban con el recorte de las ilustraciones |
| 2026-10-20 | La portada de cada recurso se genera en Flow directamente en 16:9; las escenas siguen en 4:3 | Evita recortar la portada y perder lo que queda en los bordes |
| 2026-10-20 | Lupa en las fotos reales de las rutas de estudio: botón «Ampliar», pantalla completa, zoom y arrastre | Los manuscritos tienen detalles que no se ven en el panel (sugerencia de revisión) |
| 2026-10-20 | Prefijo de versión en los pasajes copiados de la Biblia del sitio | Comparar un mismo versículo en las revisiones de 1865, 1909 y 1960 |
| 2026-10-20 | Las personas históricas con nombre que no son bíblicas también son personajes de Flow | Jerónimo y Casiodoro de Reina volverán a aparecer en recursos de historia de la Biblia y de la iglesia |
| 2026-10-20 | Corregida la comilla sobrante en Números 6:26 (RV 1960), registrada en `CORRECCIONES` | Apareció al copiar la bendición sacerdotal en De la Biblia a nosotros |
| 2026-10-20 | Pesos, medidas, monedas y horas bíblicas: herramienta de estudio con las rutas I. Longitud y distancia, II. Capacidad y peso, III. Monedas y dinero, IV. El tiempo y Taller práctico (30 estaciones, 15 esquemas SVG); la estatura de Goliat, el mar de bronce, las horas de la crucifixión y los tres días, en bloques `posturas`; el tiempo profético con meses de 30 días, sin fijar fechas | Cuarto recurso de la ola 0; las cifras de la Biblia se entienden mejor convertidas a medidas actuales y a días de trabajo |
| 2026-10-20 | Página auxiliar `calculadora/` dentro del recurso, abierta con un botón `ir`; sus equivalencias (`unidades.js`) son las del sitio | Una herramienta de estudio necesita algo que el lector use mientras lee cualquier libro; un solo juego de valores evita cifras distintas entre recursos |
| 2026-10-20 | El dinero bíblico se convierte por salario (un denario = un día de trabajo), no por el precio de la plata | Es la equivalencia que da la misma Biblia (Mt 20:2) y la que permite a cada lector calcular en la moneda de su país |
| 2026-10-20 | Sin foto con licencia libre verificada, la estación queda sin foto (pesa «pim», siclo de Tiro, blanca); el denario queda pendiente porque la foto disponible tiene derechos reservados | Una foto de otro objeto o con derechos reservados no cumple §18; el texto y los esquemas cubren la explicación |
| 2026-10-20 | El Atlas bíblico pasa a ser un mapa de consulta: búsqueda, una época a la vez, tipos plegables y un lugar por ubicación con sus eventos; sin teselas externas | Siete grupos de filtros y unas 75 casillas confundían; nueve lugares (Getsemaní, Gólgota, Emaús y otros) nunca aparecían por un tipo sin registrar |
| 2026-10-20 | Los recorridos del atlas (éxodo, exilio, viajes de Pablo) salen a sus recursos; el botón «Recorridos» los reúne y marca «En preparación» los que faltan | Los recursos de mapas del plan los explican paso a paso; el atlas no debe repetirlos. Todos ya figuraban en la planilla, no se agregaron filas |
| 2026-10-20 | «Para aprender más» en cada lugar del atlas, generado por `herramientas/atlas_recursos.mjs` desde los datos de los recursos | Que la lista crezca sola con cada publicación, sin mantenerla a mano |
| 2026-10-21 | El atlas vuelve a ofrecer tipo de mapa: Mapa, Físico y Satélite (Esri), y Acuarela (Stadia) y Atlas (Thunderforest) cuando se activen sus cuentas; respaldo con teselas propias de la NASA | Sin relieve no se encuentran las zonas montañosas; los estilos los eligió el responsable; el respaldo propio mantiene el atlas usable si un servidor falla |
| 2026-10-21 | La tierra de Israel: recurso de historia y geografía con seis rutas y 41 estaciones (geografía, historia hasta hoy y teología de la tierra); la historia desde Jesús hasta hoy va como ruta del mismo recurso | El tema del recurso es la tierra; la estación de la promesa futura necesita ese trasfondo |
| 2026-10-21 | «Compara con tu país»: una región de tamaño parecido por cada país de habla hispana, a la misma escala y con superficies calculadas con los mismos datos | Pedido del responsable: el público es latinoamericano y cada lector entiende mejor el tamaño con su propio país |
| 2026-10-21 | Los mapas de La tierra de Israel usan el relieve de la NASA del sitio (con zoom 8 en la región) | Sin relieve no se entienden las franjas ni los valles; las teselas son propias y de dominio público |
| 2026-10-21 | Desde 1948, hechos fechados con las perspectivas israelí y palestina, sin opinión política; la profecía sobre la tierra se trata en la ruta de teología, con la lectura futurista y su alternativa en un bloque `posturas` | Tema disputado que cambia con frecuencia; no confundir historia con interpretación profética ni con política |
| 2026-10-21 | Geografía propia por recurso (`*-geo.js`) que extiende `imperios-geo.js` sin modificarlo | Evita que la geografía compartida crezca con capas de un solo recurso y que el script de imperios, hoy desalineado, deba regenerarse |
| 2026-10-21 | Jesús puede mostrarse de frente (personaje Jesús-adulto) cuando su rostro es el centro de la escena; por defecto sigue de espaldas | Decisión del responsable: hay escenas de los evangelios (la mirada a Pedro, el llanto sobre Jerusalén) que necesitan la expresión de Jesús; un solo personaje fijo evita que cambie de cara entre recursos |
| 2026-10-21 | La tierra de Israel: fotos del calendario de Gézer (Osama Shukir Muhammed Amin, CC BY-SA 4.0), del Arco de Tito (Jebulon, CC0) y del mapa de Madaba (Carole Raddato, CC BY-SA 2.0), con licencia verificada en Wikimedia Commons | Objetos arqueológicos reales: solo con foto de licencia libre (§20, Imágenes) |
| 2026-10-21 | Atlas: nombres siempre visibles, ocultando los que chocan con uno más importante (aprobado el 21 de octubre) | Desde el zoom 7 recién aparecían los nombres y el mapa no se podía leer de lejos |
| 2026-10-22 | El número de rutas y estaciones de cada recurso depende de la extensión y complejidad de su tema, no de un número fijo; solo los estudios de libro mantienen las rutas I a IV | Decisión del responsable: cada recurso tiene lo que necesita |
| 2026-10-22 | Historia de la Iglesia se divide en dos recursos: I (del siglo I a la Reforma) y II (de la Reforma a hoy); el plan pasa a 135 recursos | Cinco siglos de historia en cada uno ya son un recurso extenso |
| 2026-10-22 | Historia de la Iglesia II se crea antes que la I y que la ola 0 termine; sus botones hacia los recursos que faltan quedan como texto «en preparación» | Decisión del responsable |
| 2026-10-22 | Azusa y Valparaíso, una estación cada uno en Historia de la Iglesia II; el detalle irá en El movimiento pentecostal | Decisión del responsable: evitar repetir el recurso nº 133 |
| 2026-10-22 | Mapa base del mundo (`mapa-mundo.js`) para los recursos que salen del mundo bíblico | `mapa-base.js` no incluye América, el sur de África ni el este de Asia |
| 2026-10-22 | Época `historia-iglesia` para los recursos posteriores al Nuevo Testamento | Ninguna época bíblica describía cinco siglos de historia de la iglesia, y el esquema exige una época |
| 2026-10-22 | Prefijo `h-` para los lugares posteriores a la Biblia; el atlas bíblico no los agrega | Wittenberg o Valparaíso no deben aparecer como lugares del atlas bíblico |
| 2026-10-20 | El `#` de la ficha pasa a la app (`/{slug}/#ruta/3`, `/atlas-biblico/#jerusalen`) | Enlazar una estación o un lugar desde otro recurso; reemplaza al candidato `fyp:ir-a` |
| 2026-10-22 | Dios y la Trinidad nombra a los grupos que enseñan hoy cada error (pentecostales unicitarios, Testigos de Jehová, mormones), describiendo su doctrina oficial y con respeto por sus miembros | Decisión del responsable: el lector se encuentra con esos grupos y necesita reconocer sus enseñanzas |
| 2026-10-22 | Los «Yo soy» de Jesús salen de Dios y la Trinidad y van a La persona y obra de Cristo; la ruta de textos difíciles lleva ejercicios | Decisión del responsable al aprobar el bosquejo |
| 2026-10-22 | Erratas de la RV 1960 del sitio: Éx 17:15 («Jehová- nisi») y 2 Ti 2:13 (traía pegado el título «Un obrero aprobado»), corregidas en `CORRECCIONES` de `herramientas/biblia/generar.py` | Se detectaron al citar los pasajes |
| 2026-10-22 | Dios y la Trinidad: fotos de la estela de Mesa (Tangopaso, dominio público) y del icono de Nicea (autor desconocido, PD-Art), con licencia verificada en Wikimedia Commons | Objetos reales: solo con foto de licencia libre (§20, Imágenes) |
| 2026-10-22 | Toda foto real propuesta va con el enlace directo a la página donde se descarga, en la respuesta y en el PROMPTS-FLOW.md del recurso | Pedido del responsable: indicar solo dónde buscar obliga a buscar de nuevo |
| 2026-10-22 | Pactos y dispensaciones va en el enfoque teología sistemática, con cuatro rutas y un taller | Decisión del responsable al aprobar el bosquejo; ordena la doctrina de los pactos y las dispensaciones como sistema |
| 2026-10-22 | El recurso distingue a Israel de la iglesia, espera el cumplimiento futuro de las promesas a Israel y sostiene la vigencia de los dones frente al cesacionismo de muchos dispensacionalistas clásicos; las otras lecturas van en bloques `posturas` | Línea del proyecto (§1): escatología premilenial y pretribulacional, y continuismo |
| 2026-10-22 | El taller nombra a la Iglesia Adventista del Séptimo Día al tratar el día de reposo, describiendo su doctrina oficial con respeto por sus miembros | Decisión del responsable, como en Dios y la Trinidad |
| 2026-10-22 | El diezmo se enseña como práctica buena y bíblica, anterior a la ley y confirmada por la enseñanza de la generosidad del Nuevo Testamento, que se da con gratitud y no por temor a una maldición | Decisión del responsable al aprobar el bosquejo |
| 2026-10-22 | Los últimos tiempos enlaza con botones `ir` a Pactos y dispensaciones desde «Las dispensaciones» y «Israel y los pactos de Dios» | El esquema y los pactos se estudian completos en el recurso nuevo |
| 2026-10-22 | El movimiento pentecostal se crea antes que El Espíritu Santo (nº 11) y que Historia de la Iglesia I; sus botones hacia ellos quedan como texto «en preparación» y la doctrina se limita a la identidad pentecostal (ruta VI) | Decisión del responsable; evita adelantar el contenido del recurso nº 11 |
| 2026-10-23 | El movimiento pentecostal: fotos con licencia verificada en Wikimedia Commons (Parham, Seymour y La fe apostólica, PD-US; Barratt, dominio público; Ramabai, PD-US; Hoover, Biblioteca Nacional de Chile, PD-old-70); la de Daniel Berg (pt.wikipedia, «conteúdo restrito») no se publica y IV.3 queda sin foto | §20, Imágenes; decisión del responsable |
| 2026-10-22 | El movimiento pentecostal: siete rutas y 49 estaciones, enfoque historia y geografía, con mapa base del mundo y geografía propia `pentecostal-geo.js` | Bosquejo aprobado por el responsable |
| 2026-10-22 | El evangelio de la prosperidad se presenta como contrario a la sana doctrina: para el pentecostalismo clásico es hacer negocio con el evangelio (2 P 2:3; 1 Ti 6:5) | Indicación del responsable al aprobar el bosquejo |
| 2026-10-22 | La ruta de desafíos nombra a los maestros y grupos de cada desvío (Kenyon, Hagin y Copeland, la Iglesia Universal del Reino de Dios, Wagner, Toronto, Branham, los escándalos de 1987 y 1988), describiendo su enseñanza y hechos documentados, con respeto por sus miembros | Decisión del responsable, como en Dios y la Trinidad |
| 2026-10-22 | Una denominación se puede mencionar brevemente como un caso entre otros dentro de una historia general; la estación de Chile nombra a las Asambleas de Dios Autónomas, nacidas de misioneros suecos (Santiago, 1939) | Decisión del responsable; §1 sigue excluyendo la historia propia de una denominación |
| 2026-10-27 | Los libros apócrifos y pseudoepígrafos, recurso aparte (nº 85, ola 5), antes de Entre los Testamentos; el plan pasa a 136 recursos | Decisión del responsable: hay varios libros de ese período y merecen su propio recurso; la pregunta del canon queda en La Palabra de Dios |
| 2026-10-27 | Entre los Testamentos: «De Malaquías a Mateo» como estación propia del panorama; los grupos e instituciones (fariseos, saduceos, sinagoga, Sanedrín) solo en su origen, y su actuación en los evangelios en El mundo judío en tiempos de Jesús (nº 91) | Decisión del responsable al aprobar el bosquejo |
| 2026-10-27 | 1 y 2 Macabeos se citan como fuente histórica, nunca como Escritura, parafraseados y sin burbuja; los «cuatrocientos años de silencio» son silencio profético, no silencio de Dios | Decisión del responsable; línea del canon hebreo (§1) |
| 2026-10-27 | El recurso de los apócrifos nombra a la Iglesia católica y su doctrina oficial (Catecismo, 1032; Trento) al tratar la oración por los muertos y la intercesión, con respeto por sus miembros | Decisión del responsable, como en Dios y la Trinidad |
| 2026-10-27 | Los apócrifos del Nuevo Testamento (evangelios de la infancia y gnósticos, hechos, cartas y apocalipsis de Pedro y de Pablo) se suman como ruta VI del mismo recurso | Pedido del responsable: el lector espera encontrarlos bajo el nombre «apócrifos» |
| 2026-10-29 | Los libros apócrifos: foto de la portada de la Biblia del Cántaro (ejemplar de la Biblioteca Nacional de España, CC BY-SA 4.0, Wikimedia Commons); se descartan la tapa finlandesa de 1 Enoc y la reconstrucción del Evangelio de Tomás | §20, Imágenes: la foto debe mostrar el objeto real |
| 2026-10-29 | Entre los Testamentos: ocho rutas y 46 estaciones, enfoque historia y geografía, con línea de tiempo y geografía propia `entre-geo.js`; las etapas del territorio asmoneo se recortan con la costa de `tierra-geo.js` | Bosquejo aprobado por el responsable |
| 2026-10-29 | Entre los Testamentos: fotos con licencia verificada en Wikimedia Commons (papiro de Elefantina, dominio público; Pascua samaritana, CC BY 2.0; moneda de Alejandro Janeo, CC BY-SA 4.0; réplica de la inscripción de Teodoto, CC BY-SA 3.0); se descarta la del Herodión, que era un letrero con el plano | Revisión de las páginas de licencia enviadas por el responsable |
| 2026-10-29 | `mapa-detalle-palestina.js` no se usa en recursos sin relieve hasta corregir que tapa el mar en zoom medio | Defecto encontrado al preparar Entre los Testamentos |
| 2026-10-22 | Posturas del recurso: obra consumada frente a tres obras de gracia, lenguas como evidencia inicial, subsecuencia del bautismo en el Espíritu, continuismo, guerra espiritual (con la armadura de Dios, sin mapeo de espíritus territoriales), oficios apostólicos y manifestaciones extrañas | Línea pentecostal clásica de las Asambleas de Dios (§1), con las otras lecturas en bloques `posturas` |
| 2026-10-30 | El mundo judío en tiempos de Jesús: siete rutas y 49 estaciones, enfoque historia y geografía, con relieve, línea de tiempo del 8 a.C. al 75 d.C. y geografía propia `mundo-geo.js`; termina brevemente en Yavne, con el gancho hacia Historia de la Iglesia I | Bosquejo aprobado por el responsable |
| 2026-10-30 | La responsabilidad por la muerte de Jesús se presenta según Hechos 2:23, 36; 3:13-17 y 4:27: los líderes y la multitud de Jerusalén de esa generación, Herodes, Pilato y los gentiles, y detrás de todos los pecados de la humanidad; nunca culpa colectiva de los judíos de otras épocas | Decisión del responsable al aprobar el bosquejo |
| 2026-10-30 | Lo que solo cuenta la Mishná (escrita hacia el 200 d.C.) se presenta con cautela, en bloques `posturas` cuando importa (la legalidad del juicio de Jesús) | Decisión del responsable al aprobar el bosquejo |
| 2026-10-30 | Fotos con licencia verificada en Wikimedia Commons: réplica de la inscripción de Pilato (CC BY-SA 2.0), osario de Caifás (CC BY-SA 3.0), Gamla (dominio público), advertencia del templo (CC BY-SA 3.0), piedra de Magdala (CC BY-SA 3.0), mikve de Jerusalén (CC BY-SA 3.0) y barca de Galilea (CC BY-SA 4.0) | §20, Imágenes |
| 2026-10-30 | Erratas de la RV 1960 del sitio: Mt 4:15 («alilea») y Mr 7:18 (faltaba un espacio), corregidas en `CORRECCIONES` | Se detectaron al citar los pasajes |

## 24. Relación con el repositorio Fuego y Palabra

- `crist-alarc/Fuego-y-Palabra` queda **congelado**: no se le hacen mejoras. Toda corrección a las apps bíblicas se hace aquí.
- Su sitio sigue publicado para no romper enlaces existentes.
- Cuando este sitio esté estable en `adda-santiago`, se reemplaza el contenido de ese repositorio por páginas de redirección hacia las fichas nuevas (misma técnica de §19, regla 2), y se deja un README que apunte aquí.

## 25. Forma de trabajo con Claude

Reglas para trabajar con Claude en este proyecto (antes vivían en el archivo de contexto del proyecto de Claude).

### Proceso

- Se trabaja en español.
- Claude lee el repositorio directo desde GitHub (`adda-santiago/recursos-biblicos`, público); no hace falta subir un ZIP del código. Antes de construir, estudia el código existente para seguir los patrones establecidos.
- **Recurso nuevo:** primero un **demo publicado** (enlace) para revisar y cerrar; recién después el **ZIP** para cargar a GitHub (§19, regla 8).
- **Entregas completas:** código funcional y ZIP con archivos enteros, nunca fragmentos. Cada recurso se entrega completo de una vez: todas sus rutas, el demo, los prompts de imágenes y el de portada; no estación por estación.
- Los ZIP de recursos nuevos van con `publicado: true` en la ficha, aunque haya permisos en trámite: el sitio es una versión de desarrollo.
- **Revisión de recursos publicados:** los hallazgos se acumulan y se compilan en **un solo ZIP** cuando se avisa que terminó la revisión.
- **Verificar el build antes de empaquetar:** un error de YAML en una ficha rompe todo el sitio. Antes de cada ZIP: `node herramientas/atlas_recursos.mjs` (actualiza «Para aprender más» del atlas), `npm run build` sin errores, `Citas.faltantes()` vacío y las citas textuales contrastadas con la RV 1960 (`herramientas/verificar_citas.py`).
- Cada entrega que cambia una regla actualiza este documento en el mismo ZIP (versión, línea de cambio y bitácora), y el proyecto de Claude recibe la misma copia.
- Claude actualiza el estado del recurso en la planilla del plan de publicación (§20).

### Contenido

- Citas bíblicas en **Reina-Valera 1960**, salvo indicación contraria (§15). Toda cita se puede tocar y muestra el pasaje en la burbuja; una cita de capítulo completo muestra el capítulo entero.
- «Para pensar»: siempre desde el punto de vista bíblico y la línea pentecostal clásica, sin mencionarla (§1).
- Historia frente al relato bíblico: se aclaran los puntos y se muestran ambas posturas sin contradecir la Biblia (bloque `posturas`). Entre dos posturas teológicas, prevalece la de las Asambleas de Dios.
- Recursos complementarios: hablan de todos los libros donde aparece el tema. Recursos históricos: incluyen su legado (inventos, costumbres, aportes).
- Presentación (para que un maestro enseñe) ≠ ruta de estudio (para que la persona aprenda sola): en las rutas el texto es extendido.

### Imágenes (Google Flow)

- Claude pide las imágenes que necesita entregando el prompt en **inglés**, completo y listo para copiar y pegar, sin nada que agregar (fotograma fotorrealista de película, 4:3 para las escenas y 16:9 para la portada, restricciones dentro del prompt). El prompt empieza con «Photorealistic film still…» y termina excluyendo ilustración, pintura, concept art, arte digital y render 3D: la palabra «illustration» al comienzo hace que Flow dibuje. Cada recurso incluye además el prompt de su portada.
- Personajes como personajes de Flow: antes de escribir los prompts, Claude revisa la hoja «Personajes Flow»; reutiliza los que existen, entrega el prompt de los nuevos, indica cuáles van en cada imagen, los nombra en el prompt de escena y actualiza la hoja. Un personaje por etapa de vida (§20, Imágenes).
- Las imágenes se suben al chat (sueltas o en un ZIP, con dos variantes por escena cuando las haya), no a GitHub. Claude elige la variante, las optimiza (WebP, recortes, versiones -640 y .jpg de la portada) y las integra en el ZIP.
- **Fotos reales:** Claude entrega, para cada foto, el enlace directo a la página del archivo donde se descarga (de preferencia Wikimedia Commons o colecciones de museos con acceso abierto), en la respuesta y en el PROMPTS-FLOW.md del recurso; no basta con indicar dónde buscar. La persona las descarga y las sube al chat con su licencia. Claude verifica la licencia antes de integrarlas; si no se puede verificar o tiene derechos reservados, no se publica (§20, Imágenes).

## Anexo A. Solicitud de permiso de la RV 1960

Enviada en octubre de 2026 por el formulario web de la Sociedad Bíblica de Chile. Contacto: cristobal.alarcon@hotmail.com. Reutilizable para pedir otras versiones.

> Les escribo para solicitar autorización para usar el texto de la Reina-Valera 1960 en Recursos Bíblicos, un sitio web de estudio bíblico que desarrollo para mi congregación.
>
> **El proyecto.** Recursos Bíblicos reúne material visual e interactivo para profundizar en el estudio de la Biblia: mapas, líneas de tiempo, genealogías, modelos 3D (por ejemplo, el Tabernáculo, el Templo de Salomón y la vestimenta del sumo sacerdote) y estudios guiados por libro. Cada recurso se acompaña de una ficha explicativa con sus fuentes y referencias bíblicas. El objetivo a mediano plazo es contar con recursos de estudio para cada libro de la Biblia.
>
> **Público.** Está dirigido a miembros de iglesia y a cualquier persona de habla hispana que quiera estudiar la Biblia con mayor profundidad. Su uso es libre y gratuito, sin registro.
>
> **Carácter no comercial.** El sitio no tiene fines de lucro: no muestra publicidad, no cobra por acceso ni por ninguna función, y no vende productos, en algún momento se podría pedir ofrendas para sostener el sitio web.
>
> **Uso que solicito.** Actualmente uso la Reina-Valera 1909, por ser de dominio público, pero la RV 1960 es la versión que nuestra congregación y la mayoría de los lectores de habla hispana usan y reconocen. Quisiera: (1) Citar pasajes de la RV 1960 dentro de los recursos y estudios, en una cantidad que, al cubrir progresivamente todos los libros, superará el límite de citas que la versión permite sin autorización escrita. (2) Ofrecer un selector de versión, para que el lector elija entre la RV 1960 y versiones de dominio público al leer los pasajes de cada recurso. (3) Más adelante, incorporar una sección de lectura de la Biblia completa dentro del sitio.
>
> **Compromisos.** Me comprometo a reproducir el texto sin alteraciones, a incluir en cada página donde aparezca la nota de derechos de autor que ustedes indiquen, a no ofrecer el texto como archivo descargable ni para redistribución, y a retirarlo si el permiso se revoca o si así me lo solicitan. Estoy disponible para ajustar el alcance según sus condiciones.
>
> Quedo atento a sus indicaciones y agradezco de antemano su consideración. Que la paz de Cristo esté en sus vidas.
>
> Cristóbal Alarcón — cristobal.alarcon@hotmail.com
