(() => {
  const MESOP = [[28.6, 37.5], [40.6, 50.5]];   // Mesopotamia y las montañas de Armenia

  /* ---------------- IV. El Edén y la primera pareja ---------------- */
  const eden = [
    {
      id: 'polvo', n: 'Del polvo y con el aliento de Dios', ref: 'Génesis 2:4-7; Job 33:4; Eclesiastés 12:7; 1 Corintios 15:45-49',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/2/4-7', ref: 'Génesis 2:4-7' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos relatos que se complementan',
          cab: ['', 'Génesis 1:1–2:3', 'Génesis 2:4-25'],
          filas: [
            ['Nombre de Dios', 'Dios (Elohim): el Creador poderoso', 'Jehová Dios: el Dios del pacto, cercano'],
            ['Enfoque', 'Todo el universo, en orden de días', 'El ser humano, en el huerto'],
            ['Cómo crea', 'Por su palabra: «Y dijo Dios»', 'Con sus manos: forma, sopla, planta, toma'],
            ['El ser humano', 'Corona de la obra, a imagen de Dios', 'Formado del polvo, compañero de Dios'],
            ['Lo que destaca', 'La grandeza de Dios', 'La relación de Dios con el hombre'],
          ],
          nota: 'Como una foto panorámica y un acercamiento del mismo paisaje.'
        } }
      ],
      texto: [
        'En Génesis 2:4 comienza una nueva sección. La frase «Estos son los orígenes» (en hebreo, toledot, «generaciones» o «historia») aparece diez veces en Génesis y marca cada parte del libro. Aquí da paso a un segundo relato de la creación, que no repite el primero: lo mira de cerca.',
        { h: 'Dos miradas, una historia' },
        'Algunos han dicho que Génesis 1 y 2 son dos relatos contradictorios. Una lectura atenta muestra que se complementan, como explica la tabla. El primero es una vista panorámica: todo el universo, día por día, con Dios que habla y las cosas existen. El segundo es un acercamiento: el huerto, el hombre, la mujer, y un Dios que se inclina a formar con sus manos. Por eso cambia también el nombre: en el capítulo 2 aparece por primera vez Jehová Dios, el nombre del Dios que hace pacto con su pueblo.',
        { h: 'Polvo y aliento' },
        '«Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente» (Gn 2:7). El verbo «formó» es el que se usa para el alfarero que modela el barro (Jer 18:6). En hebreo hay un juego de palabras: el hombre es adam y la tierra de la que fue tomado es adamá. Su nombre le recuerda de dónde viene.',
        'Pero el ser humano no es solo polvo. Dios sopla en él su aliento, y entonces llega a ser un ser viviente. Ningún animal recibe ese soplo directo en el relato. Elihú lo reconoce: «El espíritu de Dios me hizo, Y el soplo del Omnipotente me dio vida» (Job 33:4). El ser humano está hecho de tierra y de cielo: tiene un cuerpo que vuelve al polvo y un espíritu que vuelve a Dios (Ec 12:7).',
        { h: 'El primer Adán y el postrer Adán' },
        'Pablo cita este versículo y lo pone frente a Cristo: «Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante» (1 Co 15:45). El primer Adán recibió la vida; Cristo, el último Adán, la da. Y así como hemos traído la imagen del terrenal, traeremos también la imagen del celestial (1 Co 15:49): la resurrección completará lo que comenzó en el Edén.',
        { ejercicio: {
          pregunta: '¿Qué enseña el juego de palabras entre adam (hombre) y adamá (tierra)?',
          opciones: [
            { t: 'Que el ser humano fue tomado de la tierra y está unido a ella, aunque recibió de Dios el aliento de vida.', ok: true, por_que: 'Correcto: su nombre recuerda su origen humilde, y el soplo de Dios, su dignidad.' },
            { t: 'Que el ser humano es solo materia, igual que los animales.', ok: false, por_que: 'El versículo dice además que Dios sopló en él aliento de vida, algo que no se dice de los animales.' },
            { t: 'Que Adán fue el nombre de un pueblo, no de una persona.', ok: false, por_que: 'Adam puede significar «ser humano», pero Génesis 4 y 5, Lucas 3:38 y Romanos 5 hablan de Adán como una persona concreta.' }
          ],
          explicacion: 'Polvo y aliento: humildad y dignidad a la vez. Así es el ser humano según Génesis.'
        } }
      ],
      pensar: 'Eres polvo, pero Dios sopló en ti su aliento. ¿Cuál de las dos verdades olvidas más: tu fragilidad o tu dignidad?'
    },
    {
      id: 'huerto', n: 'El huerto de Edén', ref: 'Génesis 2:8-14; Ezequiel 28:13; Apocalipsis 2:7; 22:1-2',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-eden.webp', alt: 'Un huerto exuberante al amanecer, con árboles frutales, flores y hierba alta; un río cristalino atraviesa el huerto y más allá se divide en cuatro brazos que se pierden en la distancia; en el centro, un gran árbol iluminado; no hay personas', pie: '«Y salía de Edén un río para regar el huerto, y de allí se repartía en cuatro brazos» (Génesis 2:10).', origen: 'ia' },
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Génesis nombra cuatro ríos: el Pisón, el Gihón, el Hidekel (el Tigris, «al oriente de Asiria») y el Éufrates. Solo los dos últimos se identifican con seguridad.',
            estado: { view: MESOP, capas: [], lugares: ['ninive', 'asur', 'babilonia', 'ur'] } },
          { t: 'Hipótesis del sur: el Edén estaría cerca de la desembocadura del Tigris y el Éufrates, en el golfo Pérsico, donde estaba Eridu, la ciudad que los sumerios consideraban la más antigua.',
            estado: { view: MESOP, capas: [], lugares: ['r-eden-sur', 'eridu', 'ur', 'babilonia'] } },
          { t: 'Hipótesis del norte: el Edén estaría en las montañas de Armenia, donde nacen el Tigris y el Éufrates, cerca del lago Van.',
            estado: { view: MESOP, capas: [], lugares: ['r-eden-norte', 'monte-ararat', 'ninive'] } }
        ] }
      ],
      texto: [
        '«Y Jehová Dios plantó un huerto en Edén, al oriente; y puso allí al hombre que había formado» (Gn 2:8). Edén probablemente significa «delicia», y la traducción griega del Antiguo Testamento llamó al huerto paradeisos, de donde viene nuestra palabra «paraíso». Dios no puso al hombre en un desierto, sino en un lugar preparado con belleza y abundancia: árboles deliciosos a la vista y buenos para comer.',
        { h: 'Dos árboles en el centro' },
        'En medio del huerto había dos árboles especiales: «el árbol de vida» y «el árbol de la ciencia del bien y del mal» (Gn 2:9). El primero representaba la vida que Dios daba. El segundo, el límite que Dios ponía: el ser humano podía disfrutar de todo, pero no decidir por sí mismo qué es bueno y qué es malo. El árbol de vida vuelve a aparecer al final de la Biblia, en la ciudad de Dios, con sus hojas «para la sanidad de las naciones» (Ap 22:2). Lo que se perdió en el Edén será restaurado.',
        { h: '¿Dónde estaba el Edén?' },
        'Génesis da una descripción geográfica: un río salía de Edén y se dividía en cuatro brazos (Gn 2:10-14). El Hidekel es el Tigris y el cuarto es el Éufrates, dos ríos bien conocidos. El Pisón rodeaba la tierra de Havila, donde había oro, y el Gihón, la tierra de Cus. Esos dos no se han identificado con seguridad. El mapa muestra las dos hipótesis más comunes.',
        { posturas: {
          titulo: '¿Se puede ubicar hoy el Edén?',
          a: { n: 'En algún lugar de Mesopotamia o de Armenia', t: 'El texto menciona el Tigris y el Éufrates porque quiere que el lector sepa que el Edén fue un lugar real. Algunos lo ubican al sur, cerca del golfo Pérsico, y otros al norte, donde nacen los ríos. El Pisón y el Gihón podrían ser ríos hoy secos o desaparecidos.' },
          b: { n: 'Ya no se puede ubicar', t: 'Otros piensan que el diluvio cambió la geografía de la tierra, de modo que los ríos que hoy llevan esos nombres no siguen el mismo curso que en el principio. Los que vinieron después pudieron dar a los nuevos ríos los nombres de los antiguos.' },
          c: 'Las dos lecturas coinciden en que el Edén fue un lugar real, no un símbolo. Su ubicación exacta es incierta, y el mapa la muestra como hipótesis.'
        } },
        'Ezequiel llama al Edén «el huerto de Dios» (Ez 28:13). Era el lugar donde Dios se encontraba con el ser humano, como después lo sería el tabernáculo. Por eso muchos intérpretes ven en el Edén el primer santuario de la Biblia: allí había querubines (Gn 3:24), oro y piedras preciosas, y un acceso por el oriente, como en el tabernáculo y el templo.'
      ],
      pensar: 'El árbol de vida que se perdió en el Edén espera a los vencedores en el paraíso de Dios (Ap 2:7). ¿Cómo cambia tu manera de enfrentar las pérdidas saber que Dios restaurará lo que el pecado quitó?'
    },
    {
      id: 'trabajo', n: 'Para que lo labrara y lo guardase', ref: 'Génesis 2:15-17; 1:28; Colosenses 3:23-24; Efesios 4:28',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/2/15-17', ref: 'Génesis 2:15-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Dios dio al ser humano en el Edén',
          cab: ['Don', 'Texto', 'Lo que enseña'],
          filas: [
            ['Un lugar', 'Gn 2:8', 'Dios provee un hogar'],
            ['Un trabajo', 'Gn 2:15', 'El trabajo es bueno, anterior al pecado'],
            ['Una libertad', 'Gn 2:16', '«De todo árbol del huerto podrás comer»'],
            ['Un límite', 'Gn 2:17', 'La obediencia es parte de la relación con Dios'],
            ['Una compañía', 'Gn 2:18-22', 'El ser humano no fue hecho para estar solo'],
            ['Una tarea mayor', 'Gn 1:28', 'Llenar la tierra y gobernarla para Dios'],
          ],
          nota: 'Los teólogos llaman mandato cultural a la tarea de Génesis 1:28 y 2:15.'
        } }
      ],
      texto: [
        '«Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase» (Gn 2:15). Antes del pecado, antes de las espinas y los cardos, el ser humano ya tenía trabajo. El trabajo no es un castigo: es parte del diseño bueno de Dios.',
        { h: 'Labrar y guardar' },
        'Los dos verbos son significativos. «Labrar» (avad) es trabajar la tierra, cultivarla, servirla. «Guardar» (shamar) es cuidar, proteger, vigilar. Los mismos dos verbos se usan juntos después para el servicio de los levitas en el tabernáculo (Nm 3:7-8). El trabajo de Adán era a la vez cultivo y culto: al cuidar el huerto, servía a Dios.',
        'Lo que cambió con la caída no fue la existencia del trabajo, sino su carácter. Después del pecado, la tierra produce espinos y el trabajo se vuelve fatiga: «Con el sudor de tu rostro comerás el pan» (Gn 3:19). Pero el trabajo en sí sigue siendo una manera de honrar a Dios. Pablo escribe: «todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres» (Col 3:23).',
        { h: 'Una gran libertad y un pequeño límite' },
        'El mandato de Dios comienza con una libertad enorme: «De todo árbol del huerto podrás comer» (Gn 2:16). Solo un árbol estaba prohibido. Dios no es un tirano que niega placeres, sino un Padre generoso que pone un límite por amor. La advertencia era seria: «el día que de él comieres, ciertamente morirás» (Gn 2:17). Ese límite hacía posible que la relación con Dios fuera de confianza y obediencia libre, no de programación.',
        { h: 'Mayordomos de la tierra' },
        'En Génesis 1:28 Dios ordena llenar la tierra, sojuzgarla y señorear sobre los animales. No es permiso para explotarla, sino encargo para administrarla como lo haría su dueño. «De Jehová es la tierra y su plenitud» (Sal 24:1). Cultivar, construir, criar hijos, crear arte, investigar la naturaleza y cuidar el medio ambiente son formas de cumplir ese encargo. La ruta VIII vuelve sobre el cuidado de la creación.',
        { ir: { t: 'Ver «En el Edén» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/1' } }
      ],
      pensar: 'Adán labraba el huerto como un servicio a Dios. ¿Ves tu trabajo diario, sea cual sea, como una manera de servir al Señor?'
    },
    {
      id: 'mujer', n: 'Ayuda idónea: la creación de la mujer', ref: 'Génesis 2:18-23; Salmos 33:20; 1 Corintios 11:11-12; 1 Pedro 3:7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/2/18-23', ref: 'Génesis 2:18-23' }
      ],
      texto: [
        'Siete veces Génesis 1 dice que algo era bueno. En Génesis 2, por primera vez, Dios dice que algo no lo es: «No es bueno que el hombre esté solo; le haré ayuda idónea para él» (Gn 2:18). Adán vive en un huerto perfecto, en comunión con Dios, y aun así le falta algo. El ser humano fue creado para la relación con otros como él.',
        { h: 'Adán nombra a los animales' },
        'Antes de crear a la mujer, Dios trae los animales a Adán «para que viese cómo las había de llamar» (Gn 2:19). Dar nombre era una forma de ejercer el dominio que Dios le había encargado, y también de conocer y clasificar. Adán fue el primer científico: observó, distinguió y nombró. Pero el ejercicio tenía otro propósito: «mas para Adán no se halló ayuda idónea para él» (Gn 2:20). Al ver a cada animal, Adán descubre que ninguno es como él.',
        { h: '«Ayuda idónea»' },
        'La expresión hebrea es ézer kenegdó, que significa literalmente «una ayuda como frente a él», es decir, que le corresponde, a su altura. La palabra ézer no indica inferioridad. En el Antiguo Testamento se usa sobre todo para Dios mismo: «Nuestra ayuda y nuestro escudo es él» (Sal 33:20). La mujer no es una sirvienta ni un complemento menor, sino una compañera igual en dignidad, que comparte con el hombre la imagen de Dios y la tarea de gobernar la tierra.',
        { h: 'Hueso de mis huesos' },
        'Dios hace caer sobre Adán un sueño profundo, toma una de sus costillas y forma a la mujer. La palabra traducida «costilla» también puede significar «lado». Muchos predicadores han observado que Dios no la tomó de la cabeza para que dominara al hombre, ni de los pies para que él la pisara, sino de su costado, para que fuera su igual, cerca de su corazón. Cuando Adán la ve, exclama con alegría: «Esto es ahora hueso de mis huesos y carne de mi carne» (Gn 2:23). Por fin hay alguien como él.',
        'En hebreo hay otro juego de palabras: el varón es ish y la mujer, ishá. La RV 1960 lo conserva: «ésta será llamada Varona, porque del varón fue tomada» (Gn 2:23). Pablo enseña que hay un orden en la creación (1 Co 11:8-9), pero agrega enseguida que «en el Señor, ni el varón es sin la mujer, ni la mujer sin el varón» (1 Co 11:11). Pedro llama a las esposas «coherederas de la gracia de la vida» (1 P 3:7).',
        { ejercicio: {
          pregunta: '¿Qué indica la palabra hebrea ézer, traducida «ayuda», sobre la mujer?',
          opciones: [
            { t: 'Que la mujer es una compañera que corresponde al hombre, pues la misma palabra se usa para Dios como ayuda de su pueblo.', ok: true, por_que: 'Correcto: ézer no implica inferioridad; Dios mismo es llamado ézer de Israel.' },
            { t: 'Que la mujer fue creada para servir al hombre como una sirvienta.', ok: false, por_que: 'Si ézer significara inferioridad, no podría usarse para Dios. La mujer comparte la imagen de Dios por igual (Gn 1:27).' },
            { t: 'Que la mujer fue una idea posterior, porque Dios se olvidó de crearla.', ok: false, por_que: 'El relato muestra un propósito: Dios hace que Adán sienta su soledad para que reciba a la mujer como un regalo.' }
          ],
          explicacion: 'Hombre y mujer son iguales en dignidad y distintos en su creación; los dos llevan la imagen de Dios.'
        } }
      ],
      pensar: '«No es bueno que el hombre esté solo.» ¿A quién necesitas acercarte, o a quién necesitas acompañar, para vivir el diseño de Dios para las relaciones?'
    },
    {
      id: 'matrimonio', n: 'Una sola carne', ref: 'Génesis 2:24-25; Mateo 19:3-9; Efesios 5:25-33; Hebreos 13:4',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/2/24-25', ref: 'Génesis 2:24-25' },
        { tipo: 'cita', titulo: 'Mateo 19', texto: '@@mt/19/4-6', ref: 'Mateo 19:4-6' }
      ],
      texto: [
        'El relato de la creación de la mujer termina con un comentario del narrador que se convierte en la definición bíblica del matrimonio: «Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne» (Gn 2:24). Este versículo se cita cuatro veces en el Nuevo Testamento. Es uno de los fundamentos de la ética cristiana.',
        { h: 'Tres movimientos' },
        'El versículo describe tres pasos. Primero, dejar: el hombre deja a su padre y a su madre. El matrimonio crea una familia nueva, con una lealtad que está por encima de la familia de origen. Segundo, unirse: el verbo hebreo significa pegarse, adherirse con firmeza, y se usa también para la fidelidad a Dios (Dt 10:20). Es un pacto, no un arreglo temporal. Tercero, ser una sola carne: la unión completa de dos personas, en cuerpo, vida y propósito, que incluye la intimidad sexual dentro del pacto.',
        { h: 'Lo que Jesús enseñó desde el principio' },
        'Cuando los fariseos preguntaron a Jesús sobre el divorcio, Él no comenzó con la ley de Moisés, sino con la creación: «¿No habéis leído que el que los hizo al principio, varón y hembra los hizo…?» (Mt 19:4). Unió Génesis 1:27 y 2:24 y concluyó: «lo que Dios juntó, no lo separe el hombre» (Mt 19:6). Para Jesús, el diseño de la creación es la norma: un hombre y una mujer, unidos de por vida. Moisés lo permitió por la dureza del corazón, «mas al principio no fue así» (Mt 19:8).',
        { h: 'Un misterio mayor' },
        'Pablo cita Génesis 2:24 y agrega: «Grande es este misterio; mas yo digo esto respecto de Cristo y de la iglesia» (Ef 5:32). Desde el principio, el matrimonio fue pensado como una imagen del amor de Cristo por su pueblo. Por eso el esposo debe amar a su esposa como Cristo amó a la iglesia y se entregó por ella (Ef 5:25).',
        { h: 'Desnudos sin vergüenza' },
        'El capítulo termina diciendo que «estaban ambos desnudos, Adán y su mujer, y no se avergonzaban» (Gn 2:25). Antes del pecado no había nada que esconder, ni ante Dios ni el uno ante el otro: confianza total, inocencia total. El capítulo siguiente cuenta cómo esa inocencia se perdió, y el primer efecto del pecado será precisamente la vergüenza y el deseo de cubrirse (Gn 3:7).',
        { ejercicio: {
          pregunta: 'Cuando le preguntaron sobre el divorcio, ¿a qué texto acudió Jesús primero?',
          opciones: [
            { t: 'Al relato de la creación en Génesis 1 y 2, para mostrar el diseño original de Dios.', ok: true, por_que: 'Correcto: Jesús dijo «al principio no fue así» y basó su enseñanza en Génesis 1:27 y 2:24.' },
            { t: 'A la ley del divorcio en Deuteronomio 24, para explicar cuándo es permitido.', ok: false, por_que: 'Fueron los fariseos quienes citaron a Moisés. Jesús explicó que esa ley se dio por la dureza del corazón.' },
            { t: 'A la costumbre de su tiempo, para adaptarse a la cultura.', ok: false, por_que: 'Jesús fue más allá de la cultura de su tiempo y volvió al propósito del Creador.' }
          ],
          explicacion: 'Para entender el matrimonio, Jesús nos lleva al Edén: allí está el diseño de Dios.'
        } }
      ],
      pensar: 'El matrimonio es una imagen del amor de Cristo por su iglesia. Si eres casado, ¿qué refleja tu matrimonio de ese amor? Si no lo eres, ¿cómo puedes honrar el diseño de Dios en tus relaciones?'
    },
    {
      id: 'caida', n: 'Del huerto al destierro', ref: 'Génesis 3:1-24; Romanos 5:12; 8:20; Apocalipsis 12:9',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../pactos-y-dispensaciones/img/eden-salida.webp', alt: 'Adán y Eva, vestidos con túnicas de piel, caminan con la cabeza baja fuera del huerto de Edén, mientras detrás de ellos una luz como espada encendida guarda la entrada entre los árboles', pie: '«Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió» (Génesis 3:21).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/3/15', ref: 'Génesis 3:15' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que cambió con el pecado',
          cab: ['Antes', 'Después', 'Texto'],
          filas: [
            ['Comunión con Dios', 'Miedo y escondite', 'Gn 3:8-10'],
            ['Desnudos sin vergüenza', 'Vergüenza y acusación mutua', 'Gn 3:7, 12'],
            ['Trabajo como servicio', 'Fatiga, espinos y cardos', 'Gn 3:17-19'],
            ['Árbol de vida al alcance', 'Expulsión del huerto', 'Gn 3:22-24'],
            ['Vida', 'Muerte: «al polvo volverás»', 'Gn 3:19; Ro 5:12'],
          ],
          nota: 'En medio del juicio, Dios promete un descendiente de la mujer que vencerá a la serpiente (Gn 3:15).'
        } }
      ],
      texto: [
        'Génesis 3 cuenta cómo el mundo bueno que Dios creó se quebró. Este recurso solo lo resume, porque la caída, la naturaleza del pecado y sus consecuencias tienen su propio estudio en El ser humano y el pecado, en preparación. Pero sin este capítulo no se entiende el resto de Génesis 1 a 11.',
        { h: 'La serpiente y la duda' },
        'La serpiente, que Apocalipsis identifica con la serpiente antigua, que «se llama diablo y Satanás» (Ap 12:9), comienza con una pregunta: «¿Conque Dios os ha dicho…?» (Gn 3:1). Primero siembra la duda sobre la palabra de Dios, después la niega («No moriréis») y por último calumnia el carácter de Dios: Él no quiere que ustedes sean como Él. Eva come del fruto y da a su marido, que estaba con ella. Los dos desobedecen.',
        { h: 'Las consecuencias' },
        'La tabla muestra lo que cambió. La comunión se convirtió en miedo, la inocencia en vergüenza, el trabajo en fatiga, y la vida en muerte. La creación entera fue afectada: «maldita será la tierra por tu causa» (Gn 3:17). Pablo resume: «el pecado entró en el mundo por un hombre, y por el pecado la muerte» (Ro 5:12). Las rutas V a VII mostrarán cómo el pecado se extiende: un hermano mata a otro, la violencia llena la tierra, y la humanidad se une contra Dios en Babel.',
        { h: 'Gracia en medio del juicio' },
        'Pero Dios no abandonó a su creación. Antes de pronunciar las consecuencias, promete a la serpiente que la simiente de la mujer «te herirá en la cabeza, y tú le herirás en el calcañar» (Gn 3:15). Es el primer anuncio del evangelio, que los antiguos llamaron protoevangelio: un descendiente de Eva vencería al enemigo, aunque sufriendo. Dios mismo vistió a Adán y Eva con túnicas de pieles (Gn 3:21), lo que implica la muerte de un animal para cubrir su vergüenza, una sombra de los sacrificios que vendrían.',
        'La expulsión del huerto también fue una misericordia: Dios no quiso que vivieran para siempre en su estado de pecado (Gn 3:22). El camino al árbol de vida quedó guardado por querubines, hasta que Cristo, el postrer Adán, lo abriera de nuevo.',
        { ir: { t: 'Ver «Inocencia y conciencia» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#dispensaciones/3' } }
      ],
      pensar: 'La serpiente comenzó con una duda: «¿Conque Dios os ha dicho…?». ¿Qué palabra de Dios estás tentado a poner en duda hoy?'
    }
  ];

  /* ---------------- V. De Caín a Noé ---------------- */
  const cain = [
    {
      id: 'cain-abel', n: 'Caín y Abel', ref: 'Génesis 4:1-16; Hebreos 11:4; 12:24; 1 Juan 3:11-12; Mateo 23:35',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-cain-abel.webp', alt: 'Dos hermanos en un campo al atardecer ante dos altares de piedra: el pastor, a la izquierda, ofrece un cordero y el humo de su altar sube recto; el labrador, a la derecha, con frutos de la tierra, mira de reojo a su hermano con el rostro sombrío', pie: '«Y miró Jehová con agrado a Abel y a su ofrenda; pero no miró con agrado a Caín y a la ofrenda suya» (Génesis 4:4-5).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/4/3-10', ref: 'Génesis 4:3-10' }
      ],
      texto: [
        'Fuera del Edén, la vida continúa. Eva da a luz a Caín, cuyo nombre suena como «he adquirido», y después a Abel, que significa «soplo» o «vapor», como anticipando lo breve de su vida. Abel fue pastor de ovejas y Caín, labrador de la tierra (Gn 4:2). Las dos ocupaciones eran buenas, y continuaban el trabajo que Dios había encargado.',
        { h: 'Dos ofrendas' },
        'Los dos hermanos traen una ofrenda a Jehová. Caín trae del fruto de la tierra; Abel, «de los primogénitos de sus ovejas, de lo más gordo de ellas» (Gn 4:4). Dios mira con agrado a Abel y a su ofrenda, pero no a Caín. ¿Por qué? El texto no lo explica directamente, y los intérpretes señalan varias pistas. Abel trajo lo primero y lo mejor; de Caín solo se dice que trajo «del fruto». Hebreos agrega la clave: «Por la fe Abel ofreció a Dios más excelente sacrificio que Caín» (He 11:4). Y Juan explica que las obras de Caín eran malas y las de su hermano justas (1 Jn 3:12). Dios mira primero a la persona y después a la ofrenda: el problema de Caín estaba en su corazón.',
        { h: 'El pecado a la puerta' },
        'Dios no rechaza a Caín sin más: le habla, le advierte y lo invita a cambiar. «Si bien hicieres, ¿no serás enaltecido? y si no hicieres bien, el pecado está a la puerta; con todo esto, a ti será su deseo, y tú te enseñorearás de él» (Gn 4:7). El pecado aparece como una fiera agazapada que quiere dominarlo. Caín no escucha. Lleva a su hermano al campo y lo mata.',
        { h: '¿Soy yo acaso guarda de mi hermano?' },
        'Como con Adán, Dios pregunta: «¿Dónde está Abel tu hermano?». Caín responde con una mentira y una burla: «No sé. ¿Soy yo acaso guarda de mi hermano?» (Gn 4:9). Pero la sangre de Abel clama desde la tierra. Caín es condenado a vagar, y aun así Dios le pone una señal para protegerlo: incluso al asesino lo alcanza la misericordia.',
        'Jesús llamó a Abel «el justo», el primer mártir de la historia (Mt 23:35). Y Hebreos dice que la sangre de Jesús «habla mejor que la de Abel» (He 12:24): la sangre de Abel clamaba por justicia; la de Cristo clama por perdón.'
      ],
      pensar: '«El pecado está a la puerta… y tú te enseñorearás de él.» ¿Qué enojo o envidia está agazapado a la puerta de tu corazón, y qué te dice Dios hoy para que lo domines?'
    },
    {
      id: 'linajes', n: 'Dos linajes: Caín y Set', ref: 'Génesis 4:16-26; 5:1-3',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-linajes.svg', alt: 'Dos columnas que descienden de Adán: a la izquierda, el linaje de Caín hasta Lamec y sus hijos Jabal, Jubal, Tubal-caín y Naama, con la ciudad, la música, el metal y la violencia; a la derecha, el linaje de Set hasta Noé, con la invocación del nombre de Jehová y Enoc que caminó con Dios', pie: 'Dos líneas desde Adán: una construye una cultura sin Dios; la otra invoca su nombre.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/4/19-26', ref: 'Génesis 4:19-26' }
      ],
      texto: [
        'Después del asesinato de Abel, Génesis sigue dos líneas de descendientes de Adán. El esquema las pone una al lado de la otra. Una es la de Caín, que se aleja de la presencia de Dios. La otra es la de Set, el hijo que Dios dio a Eva «en lugar de Abel» (Gn 4:25).',
        { h: 'La línea de Caín: progreso sin Dios' },
        'Caín se establece en la tierra de Nod, al oriente de Edén, y edifica una ciudad (Gn 4:16-17). Entre sus descendientes aparecen los inventores de la cultura: Jabal, padre de los ganaderos nómadas; Jubal, padre de los músicos de arpa y flauta; y Tubal-caín, artífice del bronce y el hierro (Gn 4:20-22). Génesis no condena la ganadería, la música ni la metalurgia: son parte del encargo de Dios de llenar y administrar la tierra, y más tarde se usarán para su gloria. Pero en la línea de Caín ese progreso va acompañado de violencia y orgullo.',
        'Lamec, el séptimo desde Adán por esa línea, es el primer bígamo de la Biblia y compone un canto de venganza: si Caín sería vengado siete veces, Lamec lo sería «setenta veces siete» (Gn 4:24). Siglos después, Jesús usará la misma cifra al revés: perdonar «setenta veces siete» (Mt 18:22). El evangelio invierte la lógica de Lamec.',
        { h: 'La línea de Set: los que invocan' },
        'La otra línea comienza de manera sencilla. Set tiene un hijo, Enós, «Entonces los hombres comenzaron a invocar el nombre de Jehová» (Gn 4:26). Mientras una familia construye ciudades y armas, otra ora. Por esa línea, que continúa en Génesis 5, llegará Noé, después Abraham, David y, finalmente, Jesús (Lc 3:23-38).',
        { h: 'Dos maneras de vivir' },
        'Agustín de Hipona vio en estas dos líneas el comienzo de lo que llamó las dos ciudades: la ciudad de los hombres, que se ama a sí misma hasta despreciar a Dios, y la ciudad de Dios, que ama a Dios hasta despreciarse a sí misma. Las dos conviven en la historia y comparten la misma tierra, los mismos inventos y la misma cultura. La diferencia está en a quién sirven. El creyente no rechaza la cultura, sino que la pone al servicio de Dios.',
        { ejercicio: {
          pregunta: '¿Qué enseña Génesis 4 sobre la música, la ganadería y el trabajo con metales, que aparecen en la línea de Caín?',
          opciones: [
            { t: 'Que son buenos dones de la creación, aunque en esa línea se desarrollaron lejos de Dios.', ok: true, por_que: 'Correcto: el problema no son los inventos, sino el corazón que los usa. David usará el arpa para alabar a Dios.' },
            { t: 'Que son malos en sí mismos, porque vienen de los descendientes de Caín.', ok: false, por_que: 'La Biblia usa la música y el metal en el culto: el tabernáculo tenía bronce y Levítico ordena tocar trompetas. Nada de eso es malo en sí.' },
            { t: 'Que los descendientes de Set no podían usar ninguno de esos inventos.', ok: false, por_que: 'El texto no lo dice. Noé, de la línea de Set, construyó un arca con gran habilidad técnica.' }
          ],
          explicacion: 'La cultura es parte del encargo de Dios; lo que la hace santa o profana es a quién sirve.'
        } }
      ],
      pensar: 'Una línea construyó ciudades; la otra invocó el nombre de Jehová. ¿En qué estás invirtiendo más tiempo: en construir tu propio nombre o en invocar el de Dios?'
    },
    {
      id: 'genealogias', n: 'Las genealogías y los años de vida', ref: 'Génesis 5:1-32; 11:10-26; 6:3; Salmos 90:10; Lucas 3:34-38',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-longevidad.svg', alt: 'Gráfico de barras con los años de vida de los patriarcas: de Adán (930) y Matusalén (969) antes del diluvio, a Sem (600), Arfaxad (438), Peleg (239), Taré (205) y Abraham (175) después; las barras bajan con claridad después del diluvio', pie: 'Los años de vida según la RV 1960 (texto hebreo). Después del diluvio, las edades bajan de manera constante.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Génesis 5: de Adán a Noé',
          cab: ['Nombre', 'Edad al engendrar', 'Años de vida'],
          filas: [
            ['Adán', '130', '930'], ['Set', '105', '912'], ['Enós', '90', '905'], ['Cainán', '70', '910'],
            ['Mahalaleel', '65', '895'], ['Jared', '162', '962'], ['Enoc', '65', '365 (traspuesto)'],
            ['Matusalén', '187', '969'], ['Lamec', '182', '777'], ['Noé', '500', '950'],
          ],
          nota: 'Diez generaciones de Adán a Noé, y diez de Sem a Abraham (Gn 11). La Septuaginta da cifras algo distintas.'
        } }
      ],
      texto: [
        'Génesis 5 es una genealogía: «Este es el libro de las generaciones de Adán» (Gn 5:1). Muchos lectores la saltan, pero tiene un mensaje. Cada entrada sigue el mismo patrón: vivió tantos años, engendró, vivió tantos años más, «y murió». La frase se repite como una campana. La advertencia de Dios en el Edén se cumplió: todos mueren. Solo una vez el ritmo se rompe, con Enoc, que no murió.',
        { h: '¿Vivieron tanto tiempo?' },
        'Las edades llaman la atención: Adán vivió 930 años y Matusalén, 969. Después del diluvio, las edades bajan de manera constante, como muestra el esquema, hasta llegar a los 175 de Abraham y los 120 de Moisés. Siglos después, el Salmo 90 dice que nuestros días son «setenta años, Y si en los más robustos son ochenta años» (Sal 90:10).',
        'Los intérpretes que toman las cifras de manera literal ofrecen varias explicaciones: el ser humano estaba más cerca de la perfección original, el mundo antes del diluvio era distinto, y Dios había anunciado que acortaría la vida humana (Gn 6:3). Otros proponen que las cifras tienen además un sentido simbólico o honorífico, como en algunas listas antiguas. Las listas de reyes de Sumeria, por ejemplo, atribuyen a los reyes anteriores al diluvio reinados de decenas de miles de años, mucho más que Génesis. Frente a ellas, las cifras bíblicas son sobrias y siguen un patrón que tiene sentido.',
        { posturas: {
          titulo: '¿Se pueden sumar las genealogías para calcular la edad del mundo?',
          a: { n: 'Genealogías cerradas', t: 'Las listas de Génesis 5 y 11 dan la edad de cada padre cuando engendra al siguiente, algo que no hacen otras genealogías bíblicas. Eso permite sumar las cifras y calcular los años desde Adán hasta Abraham, como hizo Ussher. Es la base de la lectura de la tierra joven.' },
          b: { n: 'Genealogías con huecos', t: 'Otras genealogías bíblicas omiten generaciones: Mateo 1:8 salta tres reyes. La palabra «engendró» puede significar «fue antepasado de». Lucas 3:36 agrega a Cainán entre Arfaxad y Sala, un nombre que no está en el texto hebreo de Génesis 11 sino en la Septuaginta. Por eso algunos piensan que estas listas son selectivas, y que no pretenden dar una cronología completa.' },
          c: 'Las dos posturas aceptan que estas personas existieron y que la historia de Génesis es real. La diferencia está en si las listas son completas. Las cifras de los manuscritos (hebreo, samaritano y griego) también varían, lo que obliga a la prudencia antes de dar una fecha exacta de la creación.'
        } },
        { h: 'Una línea que lleva a Cristo' },
        'Lucas copia esta genealogía al revés, desde Jesús hasta «Adán, hijo de Dios» (Lc 3:38). Para el evangelista, estas listas no son números fríos: son la historia de la promesa de Génesis 3:15, transmitida de generación en generación hasta que nació el descendiente de la mujer.',
        { ir: { t: 'Ver el linaje en el Árbol genealógico', a: '../../arbol-genealogico/' } }
      ],
      pensar: 'Cada nombre de Génesis 5 termina con «y murió». ¿Qué te gustaría que dijera de ti la línea de tu vida, además de cuántos años viviste?'
    },
    {
      id: 'enoc', n: 'Enoc caminó con Dios', ref: 'Génesis 5:21-24; Hebreos 11:5-6; Judas 14-15; 1 Tesalonicenses 4:16-17',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cr-enoc.webp', alt: 'Un hombre anciano de barba gris camina solo por un sendero en lo alto de una colina al amanecer, apoyado en un bastón, con la mirada hacia la luz que se abre entre las nubes', pie: '«Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios» (Génesis 5:24).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/11/5-6', ref: 'Hebreos 11:5-6' }
      ],
      texto: [
        'En medio de la genealogía de Génesis 5, donde todos mueren, aparece un hombre distinto. «Y caminó Enoc con Dios, después que engendró a Matusalén, trescientos años» (Gn 5:22). Y su historia no termina con «y murió», sino con un misterio: «Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios» (Gn 5:24).',
        { h: 'Caminar con Dios' },
        'Caminar con alguien supone ir en la misma dirección, al mismo ritmo y en conversación. La expresión describe una relación diaria y constante, no una experiencia aislada. Llama la atención que Enoc no se retiró del mundo para hacerlo: tuvo hijos e hijas, vivió una vida familiar normal, y caminó con Dios durante tres siglos. Es la misma frase que se dirá de Noé (Gn 6:9).',
        'Hebreos explica qué hacía especial a Enoc: «antes que fuese traspuesto, tuvo testimonio de haber agradado a Dios» (He 11:5). Y agrega una frase que se ha vuelto un principio para todo creyente: «sin fe es imposible agradar a Dios» (He 11:6). Enoc creyó que Dios existía y que recompensa a los que lo buscan.',
        { h: 'Un profeta antes del diluvio' },
        'Judas cita una profecía de Enoc, «séptimo desde Adán», que anuncia la venida del Señor con sus santos para juzgar a los impíos (Jud 14-15). Las palabras que cita también aparecen en el libro de 1 Enoc, una obra judía escrita siglos antes de Cristo que no forma parte de la Escritura. Judas toma de ella una profecía verdadera, guiado por el Espíritu, sin aprobar todo el libro, como Pablo citó a poetas griegos (Hch 17:28).',
        { h: 'Llevado antes del juicio' },
        'Enoc vivió en un mundo que se corrompía rápidamente, y fue llevado por Dios antes del diluvio. Noé, en cambio, atravesó el juicio protegido en el arca. Muchos intérpretes ven en los dos una figura de lo que vendrá: así como Enoc fue tomado antes del juicio, la iglesia será arrebatada para estar con el Señor (1 Ts 4:17), y así como Noé y su familia fueron preservados a través de las aguas, Dios preservará a un remanente de Israel durante la tribulación. Es una figura, no una prueba, pero muestra la coherencia de la esperanza bíblica.',
        { ir: { t: 'Ver «1 Enoc y la carta de Judas» en Los libros apócrifos y pseudoepígrafos', a: '../../libros-apocrifos/#pseudo/1' } },
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } }
      ],
      pensar: 'Enoc caminó con Dios mientras criaba hijos y vivía en un mundo corrupto. ¿Qué te impide caminar con Dios en tu vida diaria, y no solo los domingos?'
    },
    {
      id: 'hijos-de-dios', n: '«Los hijos de Dios» y las hijas de los hombres', ref: 'Génesis 6:1-4; Job 1:6; 2 Pedro 2:4-5; Judas 6-7; Mateo 22:30',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/6/1-4', ref: 'Génesis 6:1-4' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres lecturas de Génesis 6:1-4',
          cab: ['Lectura', '«Los hijos de Dios» son…', 'Apoyos', 'Dificultades'],
          filas: [
            ['Ángeles caídos', 'Ángeles que se unieron con mujeres', 'Job 1:6; 38:7; 2 P 2:4; Jud 6-7; tradición judía antigua', 'Jesús dice que los ángeles no se casan (Mt 22:30)'],
            ['Linaje de Set', 'Los descendientes de Set, que se mezclaron con los de Caín', 'El contexto de los dos linajes (Gn 4–5)', 'El texto no menciona a Set ni a Caín'],
            ['Reyes o poderosos', 'Gobernantes que tomaban las mujeres que querían', 'En el mundo antiguo los reyes se llamaban hijos de los dioses', 'La expresión no se usa así en el resto de la Biblia'],
          ],
          nota: 'Los padres de la iglesia más antiguos siguieron la primera; desde el siglo IV, muchos siguieron la segunda.'
        } }
      ],
      texto: [
        'Génesis 6:1-4 es uno de los pasajes más difíciles de la Biblia. En cuatro versículos habla de «los hijos de Dios» que tomaron mujeres de entre «las hijas de los hombres», de unos «gigantes» (en hebreo, nefilim) y de «los valientes que desde la antigüedad fueron varones de renombre». Después Dios anuncia que limitará la vida humana a ciento veinte años. ¿Qué ocurrió?',
        { h: 'Tres lecturas' },
        'La tabla resume las tres interpretaciones principales. La primera entiende que «los hijos de Dios» eran ángeles caídos que se unieron con mujeres. En el libro de Job, «los hijos de Dios» son seres celestiales que se presentan ante Él (Job 1:6). Pedro y Judas hablan de ángeles que pecaron, que no guardaron su dignidad y abandonaron su propia morada, y que están guardados en prisiones de oscuridad (2 P 2:4; Jud 6), y los mencionan junto al diluvio y a Sodoma. Así lo leyeron muchos intérpretes judíos antiguos y los primeros padres de la iglesia.',
        'La segunda entiende que «los hijos de Dios» eran los descendientes de Set, la línea piadosa, que se casaron con las descendientes de Caín y se corrompieron. Encaja con el contexto de los capítulos 4 y 5. La siguieron Agustín, Lutero, Calvino y muchos evangélicos. La tercera ve en ellos a reyes y poderosos.',
        { posturas: {
          titulo: '¿Ángeles o descendientes de Set?',
          a: { n: 'Ángeles caídos', t: 'La expresión «hijos de Dios» se usa en el Antiguo Testamento para seres celestiales (Job 1:6; 2:1; 38:7). 2 Pedro 2:4-5 y Judas 6-7 hablan de ángeles que pecaron de una manera particular, en relación con el diluvio y con un pecado sexual. Mateo 22:30 dice que los ángeles en el cielo no se casan, pero no que los caídos no pudieran pecar así.' },
          b: { n: 'El linaje de Set', t: 'Los ángeles son espíritus y Jesús dice que no se casan (Mt 22:30). El juicio que sigue cae sobre los seres humanos, no sobre ángeles (Gn 6:3, 5-7). El pasaje continúa la historia de los dos linajes: cuando el pueblo de Dios se mezcla con los que no lo invocan, la corrupción se extiende.' },
          c: 'Las dos lecturas tienen defensores serios y fieles a la Escritura. Las dos coinciden en lo principal: la humanidad cruzó límites que Dios había puesto, la maldad se multiplicó y el juicio se volvió inevitable. Ninguna doctrina importante depende de este pasaje.'
        } },
        { h: 'Ciento veinte años' },
        '«No contenderá mi espíritu con el hombre para siempre… mas serán sus días ciento veinte años» (Gn 6:3). Algunos entienden que Dios limitó la duración de la vida humana; otros, que dio ciento veinte años de plazo antes del diluvio, el tiempo de paciencia en que Noé construyó el arca (1 P 3:20). Las dos lecturas muestran a un Dios paciente que no juzga sin advertir.'
      ],
      pensar: 'Ante un pasaje difícil, es fácil querer una respuesta segura o perder el interés. ¿Cómo puedes estudiar con humildad lo que no entiendes del todo, sin dejar de obedecer lo que sí está claro?'
    },
    {
      id: 'violencia', n: 'La tierra llena de violencia', ref: 'Génesis 6:5-13; Mateo 24:37-39; Lucas 17:26-27; 2 Pedro 2:5',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/6/5-9', ref: 'Génesis 6:5-9' },
        { tipo: 'cita', titulo: 'Mateo 24', texto: '@@mt/24/37-39', ref: 'Mateo 24:37-39' }
      ],
      texto: [
        'Génesis 6 describe un mundo que llegó al límite. «Y vio Jehová que la maldad de los hombres era mucha en la tierra, y que todo designio de los pensamientos del corazón de ellos era de continuo solamente el mal» (Gn 6:5). Fíjate en las palabras: «todo», «de continuo», «solamente». El pecado que comenzó con un fruto y siguió con un asesinato había llenado la tierra.',
        { h: 'El dolor de Dios' },
        'La reacción de Dios sorprende: «Y se arrepintió Jehová de haber hecho hombre en la tierra, y le dolió en su corazón» (Gn 6:6). Dios no cambia de opinión como un ser humano que se equivocó (Nm 23:19); el lenguaje expresa su dolor real ante el pecado, como un padre que sufre por un hijo rebelde. El juicio que vendrá no es la reacción fría de un juez, sino la decisión dolorosa de un Creador herido.',
        'El texto usa dos veces la palabra «violencia» (Gn 6:11, 13). La corrupción no era solo religiosa o sexual, sino social: los fuertes oprimían a los débiles, y la vida humana había perdido su valor. Lamec había cantado su venganza; ahora toda la tierra vivía como él.',
        { h: 'Pero Noé…' },
        'Entonces aparece una de las frases más luminosas de la Biblia: «Pero Noé halló gracia ante los ojos de Jehová» (Gn 6:8). Es la primera vez que aparece la palabra «gracia» en la Escritura. Noé no se salvó por ser mejor que los demás, sino porque Dios le mostró favor. Y esa gracia produjo fruto: Noé era «varón justo», «perfecto en sus generaciones», y «con Dios caminó Noé» (Gn 6:9), como Enoc. Pedro lo llama «pregonero de justicia» (2 P 2:5): mientras construía el arca, también advertía a su generación.',
        { h: 'Como en los días de Noé' },
        'Jesús usó esta época para describir su segunda venida: «Mas como en los días de Noé, así será la venida del Hijo del Hombre» (Mt 24:37). Lo que describe no es solo la maldad, sino la indiferencia: la gente comía, bebía, se casaba y daba en casamiento, «y no entendieron hasta que vino el diluvio y se los llevó a todos» (Mt 24:39). La vida normal continuaba, sin atender a la advertencia de Dios. La ruta VI estudia el juicio y la salvación del diluvio.',
        { ejercicio: {
          pregunta: 'Según Jesús en Mateo 24, ¿qué caracterizaba a la gente en los días de Noé?',
          opciones: [
            { t: 'Vivían ocupados en la vida diaria sin prestar atención a la advertencia de Dios, hasta que vino el juicio.', ok: true, por_que: 'Correcto: comer, beber y casarse no es malo, pero vivían como si Dios no fuera a intervenir.' },
            { t: 'Estaban todos reunidos en templos paganos adorando ídolos.', ok: false, por_que: 'Jesús no menciona ídolos; destaca que la vida seguía su curso normal sin atender a Dios.' },
            { t: 'Esperaban con temor el diluvio, pero no sabían dónde refugiarse.', ok: false, por_que: 'Al contrario: «no entendieron hasta que vino el diluvio». No esperaban nada.' }
          ],
          explicacion: 'El peligro de los días de Noé, y de los nuestros, es vivir como si el Señor no fuera a venir.'
        } }
      ],
      pensar: 'En los días de Noé, la gente seguía su rutina sin escuchar la advertencia. ¿Hay algo que Dios te ha estado advirtiendo y que has postergado por estar ocupado?'
    }
  ];

  Object.assign(window.__CREACION, { eden, cain });
})();
