/* ==========================================================
   Recursos Bíblicos — La persona y obra de Cristo · contenido de las rutas
   FUENTE de public/apps/persona-y-obra-de-cristo/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/cristo_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   En temas doctrinales prevalece la línea pentecostal clásica.
   Coordinación con otros recursos:
   - La divinidad del Hijo dentro de la Trinidad y los textos Jn 10:30, Is 9:6, Col 1:15,
     Jn 1:1 y Jn 14:28 están en Dios y la Trinidad: aquí se enlazan.
   - Las profecías y los tipos se resumen (I.4 y I.5): su desarrollo va en Profecías mesiánicas
     y su cumplimiento (nº 63) y en Tipos y figuras de Cristo (nº 64), en preparación.
   - La aplicación de la obra de Cristo al creyente va en La salvación (nº 106).
   ========================================================== */
(() => {
  /* ---------------- I. Cristo antes de Belén ---------------- */
  const antes = [
    {
      id: 'quien', n: '¿Quién decís que soy yo?', ref: 'Mateo 16:13-17; Juan 20:30-31; 1 Juan 4:2-3',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cesarea-filipo.webp', alt: 'Jesús, de espaldas, frente a sus discípulos junto a la gran pared de roca de Cesarea de Filipo, con la boca de una cueva y nichos tallados al fondo; Pedro, de pie, le responde con la mano en el pecho', pie: 'En Cesarea de Filipo, rodeado de templos paganos, Jesús preguntó a los suyos quién era Él.', origen: 'ia', foco: '8% 40%' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/16/13-17', ref: 'Mateo 16:13-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las dos partes de la doctrina',
          cab: ['', 'La persona de Cristo', 'La obra de Cristo'],
          filas: [
            ['Pregunta', '¿Quién es Jesús?', '¿Qué hizo y qué hace Jesús?'],
            ['Temas', 'Su preexistencia, su encarnación, sus dos naturalezas, sus títulos', 'Sus oficios, su cruz, su resurrección, su exaltación y su venida'],
            ['Rutas del recurso', 'I a III', 'IV a VII'],
            ['Texto clave', 'Tú eres el Cristo, el Hijo del Dios viviente (Mt 16:16)', 'Cristo murió por nuestros pecados… y resucitó al tercer día (1 Co 15:3-4)']
          ],
          nota: 'Las dos van juntas: lo que Jesús hizo solo tiene valor por quién es Él.'
        } }
      ],
      texto: [
        'Jesús llevó a sus discípulos lejos de las multitudes, hasta Cesarea de Filipo, al pie del monte Hermón. Allí, junto a una gran pared de roca donde se adoraba al dios griego Pan y donde Herodes Filipo había levantado un templo a César, hizo dos preguntas. La primera fue qué decía la gente. Las respuestas eran respetuosas: Juan el Bautista, Elías, Jeremías, un profeta. Pero ninguna alcanzaba. Entonces vino la segunda: «Y vosotros, ¿quién decís que soy yo?» (Mt 16:15).',
        'Pedro respondió: «Tú eres el Cristo, el Hijo del Dios viviente» (Mt 16:16). Jesús le dijo que esa respuesta no venía de la inteligencia humana, sino de una revelación del Padre. La pregunta sigue en pie hoy, y cada persona tiene que responderla. De la respuesta depende todo lo demás.',
        { h: 'Por qué importa' },
        'El cristianismo no es, ante todo, un sistema de ideas, sino la fe en una persona. Juan dice que escribió su evangelio «para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre» (Jn 20:31). Por eso la iglesia primitiva cuidó con tanto celo lo que se enseñaba sobre Jesús. Juan advierte que el espíritu que no confiesa que Jesucristo ha venido en carne no es de Dios (1 Jn 4:2-3), y Pablo teme que los corintios reciban a «otro Jesús» (2 Co 11:4). Un Jesús que no es Dios no puede salvar; un Jesús que no es hombre no puede representarnos ni morir en nuestro lugar.',
        { h: 'Cómo está organizado este recurso' },
        'La teología suele dividir el tema en dos partes, como muestra la tabla. La persona de Cristo responde quién es: las rutas I a III recorren su existencia antes de Belén, su encarnación y la unión de lo divino y lo humano en Él. La obra de Cristo responde qué hizo y qué sigue haciendo: las rutas IV a VII estudian sus oficios de profeta, sacerdote y rey, la cruz, la resurrección, su exaltación y su venida. La ruta VIII lee con calma los textos que suelen usarse para negar su divinidad o su humanidad.',
        'La divinidad del Hijo como persona de la Trinidad ya se estudió en el recurso Dios y la Trinidad. Aquí se da por supuesta y se profundiza en lo que significa para la salvación.',
        { ir: { t: 'Ver «El Hijo es Dios» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/5' } }
      ],
      pensar: 'Si alguien te preguntara hoy quién es Jesús para ti, ¿responderías con lo que dicen otros o con lo que el Padre te ha revelado por su Palabra?'
    },
    {
      id: 'verbo', n: 'El Verbo eterno', ref: 'Juan 1:1-3; 17:5; Colosenses 1:16-17; Miqueas 5:2',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/1/1-3', ref: 'Juan 1:1-3' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Antes de Belén: lo que dice la Escritura',
          cab: ['Texto', 'Qué afirma'],
          filas: [
            ['En el principio era el Verbo (Jn 1:1)', 'Cuando todo comenzó, el Verbo ya existía'],
            ['Todas las cosas por él fueron hechas (Jn 1:3)', 'No es parte de la creación: es el Creador'],
            ['La gloria que tuve contigo antes que el mundo fuese (Jn 17:5)', 'Compartía la gloria del Padre desde la eternidad'],
            ['Antes que Abraham fuese, yo soy (Jn 8:58)', 'No dice «yo era», sino «yo soy»: existencia sin principio'],
            ['Sus salidas son desde el principio, desde los días de la eternidad (Mi 5:2)', 'El que nacería en Belén ya existía'],
            ['Él es antes de todas las cosas, y todas las cosas en él subsisten (Col 1:17)', 'Sostiene ahora el universo'],
            ['Siendo rico, por amor a vosotros se hizo pobre (2 Co 8:9)', 'Su vida terrenal comenzó con una renuncia']
          ],
          nota: 'Jesús es el único ser humano que existió antes de ser concebido.'
        } }
      ],
      texto: [
        'Cada persona comienza a existir cuando es concebida. Jesús no. Su vida como hombre comenzó en el vientre de María, pero Él mismo existía desde antes: desde siempre. Los teólogos llaman a esto la preexistencia de Cristo, y no es un detalle menor. Si Jesús hubiera comenzado a existir en Belén, sería una criatura extraordinaria, pero no Dios.',
        { h: 'El Verbo' },
        'Juan abre su evangelio como Génesis: «En el principio». Pero no dice que en el principio el Verbo fue creado, sino que «era». Cuando todo empezó, Él ya estaba. La palabra griega es Lógos, que la RV 1960 traduce «Verbo»: la palabra que expresa a Dios. Así como nuestras palabras revelan lo que pensamos, el Hijo da a conocer al Padre (Jn 1:18). Juan agrega que el Verbo estaba con Dios, es decir, que es distinto del Padre, y que era Dios, es decir, que comparte su naturaleza.',
        { h: 'El Creador' },
        'El versículo 3 descarta que el Verbo sea la primera criatura: «sin él nada de lo que ha sido hecho, fue hecho» (Jn 1:3). Si Él mismo hubiera sido hecho, se habría hecho a sí mismo. Pablo dice lo mismo con otras palabras: en Él fueron creadas todas las cosas, visibles e invisibles, «todo fue creado por medio de él y para él» (Col 1:16). Hebreos agrega que por medio del Hijo Dios hizo el universo, y que Él sustenta todas las cosas con la palabra de su poder (He 1:2-3). El mismo que calmó la tormenta en Galilea había hecho el viento y el mar.',
        { h: 'Una gloria compartida' },
        'La noche antes de morir, Jesús oró: «glorifícame tú al lado tuyo, con aquella gloria que tuve contigo antes que el mundo fuese» (Jn 17:5). Dios dice por Isaías que no da su gloria a otro (Is 42:8). Que el Hijo la haya tenido desde la eternidad solo se entiende si es Dios. Y Miqueas, al anunciar que el Señor de Israel saldría de Belén, añade algo sorprendente: «sus salidas son desde el principio, desde los días de la eternidad» (Mi 5:2).',
        { ejercicio: {
          pregunta: '¿Por qué Juan 1:3 muestra que el Verbo no es una criatura?',
          opciones: [
            { t: 'Porque dice que todo lo que fue hecho, fue hecho por medio de Él; si Él hubiera sido hecho, se habría creado a sí mismo.', ok: true, por_que: 'Juan excluye al Verbo de la lista de las cosas hechas: Él está del lado del Creador.' },
            { t: 'Porque usa la palabra «Verbo», que siempre significa Dios.', ok: false, por_que: 'La palabra lógos también significa palabra o razón. El argumento está en lo que el versículo dice que hizo el Verbo.' },
            { t: 'Porque dice que el Verbo nació antes que Juan el Bautista.', ok: false, por_que: 'Eso lo dice el versículo 15 y se refiere a su existencia previa, pero no es el argumento del versículo 3.' }
          ],
          explicacion: 'El Verbo existía cuando todo comenzó, hizo todas las cosas y no forma parte de ellas: es eterno.'
        } }
      ],
      pensar: 'El que sostiene el universo con su palabra decidió hacerse un niño dependiente de una madre. ¿Qué te dice esa humildad sobre el valor que Dios te da?'
    },
    {
      id: 'angel', n: 'El ángel de Jehová', ref: 'Génesis 16:7-13; 22:11-18; Éxodo 3:2-6; 23:20-21; Jueces 13:17-22; Josué 5:13-15',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/zarza.webp', alt: 'Moisés, descalzo y arrodillado, se cubre el rostro ante una zarza que arde sin consumirse al pie de un monte del desierto', pie: 'En la zarza «se le apareció el Angel de Jehová» (Éx 3:2), y el que hablaba dijo: «Yo soy el Dios de tu padre».', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las apariciones del ángel de Jehová',
          cab: ['Pasaje', 'A quién', 'Qué muestra'],
          filas: [
            ['Gn 16:7-13', 'Agar, en el desierto', 'Promete multiplicar su descendencia, algo que solo Dios puede hacer; ella lo llama «Dios que ve»'],
            ['Gn 22:11-18', 'Abraham, en Moriah', 'Habla en primera persona como Dios: «por mí mismo he jurado»'],
            ['Éx 3:2-6', 'Moisés, en la zarza', 'El ángel aparece en el fuego y el que habla dice «Yo soy el Dios de tu padre»'],
            ['Éx 23:20-21', 'Israel, en el desierto', 'Puede perdonar o no perdonar, y Dios dice: «mi nombre está en él»'],
            ['Jos 5:13-15', 'Josué, ante Jericó', 'El Príncipe del ejército de Jehová acepta adoración y ordena quitarse el calzado'],
            ['Jue 13:17-22', 'Manoa y su mujer', 'Su nombre es «admirable»; Manoa dice «a Dios hemos visto»']
          ],
          nota: 'Algunos pasajes se discuten: en Josué 5 no se dice «ángel de Jehová», pero la escena es paralela a la zarza.'
        } }
      ],
      texto: [
        'A lo largo del Antiguo Testamento aparece un personaje misterioso: el ángel de Jehová. No es un ángel como los demás. Habla como Dios, actúa como Dios y recibe la adoración que solo Dios merece. Y, sin embargo, se distingue de Jehová, que lo envía. El recurso Dios y la Trinidad lo menciona como uno de los indicios de la pluralidad en Dios. Aquí se estudia con más detalle, porque muchos cristianos ven en él al Hijo antes de su encarnación.',
        { h: 'Habla y actúa como Dios' },
        'La tabla reúne las apariciones principales. Cuando Agar huye al desierto, el ángel le promete: «Multiplicaré tanto tu descendencia, que no podrá ser contada» (Gn 16:10). Ella entiende que ha hablado con Dios mismo. En Moriah, el ángel detiene la mano de Abraham y dice: «por mí mismo he jurado, dice Jehová» (Gn 22:16). En la zarza, el texto dice que se apareció el ángel de Jehová, y quien habla desde el fuego se presenta como el Dios de Abraham, de Isaac y de Jacob (Éx 3:2-6). Manoa pregunta su nombre y el ángel responde que es «admirable» (Jue 13:18), la misma palabra que Isaías usará para el Niño que nos es nacido (Is 9:6).',
        { h: 'Y es distinto de Jehová' },
        'Al mismo tiempo, Dios dice: «yo envío mi Angel delante de ti» y «mi nombre está en él» (Éx 23:20-21). El enviado es distinto del que envía, pero lleva su nombre, es decir, su presencia y su autoridad. Malaquías anuncia que vendrá a su templo «el Señor a quien vosotros buscáis, y el ángel del pacto» (Mal 3:1), un texto que el Nuevo Testamento aplica a la venida de Jesús.',
        { posturas: {
          titulo: '¿Quién es el ángel de Jehová?',
          a: { n: 'Un ángel que habla en nombre de Dios', t: 'Algunos intérpretes lo entienden como un ángel creado que representa a Dios con tanta autoridad que habla en primera persona, como un embajador que dice «el rey dice». Señalan que el Nuevo Testamento nunca identifica a Jesús con el ángel de Jehová, y que en Lucas 1 un «ángel del Señor» es Gabriel.' },
          b: { n: 'Una aparición del Hijo antes de la encarnación', t: 'Muchos padres de la iglesia y teólogos evangélicos lo entienden como una teofanía, o mejor, una cristofanía: el Hijo apareciendo en forma visible antes de hacerse hombre. Recuerdan que nadie ha visto jamás a Dios, pero el Hijo le ha dado a conocer (Jn 1:18), y que el ángel recibe adoración, algo que los ángeles rechazan (Ap 22:8-9).' },
          c: 'Este recurso sigue la segunda postura como la más probable, porque explica a la vez que el ángel sea Dios y que sea distinto de Jehová. Pero la presenta como interpretación, no como enseñanza explícita: el texto no dice que el ángel sea el Hijo. Después de la encarnación ya no aparece el ángel de Jehová con esos rasgos, lo que encaja con esta lectura. En el Nuevo Testamento, «un ángel del Señor» es un ángel creado.'
        } },
        { ir: { t: 'Ver «Indicios en el Antiguo Testamento» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/2' } }
      ],
      pensar: 'El ángel de Jehová salía al encuentro de una esclava que huía, de un padre en su prueba y de un pueblo en el desierto. ¿Qué te dice eso sobre cómo el Hijo busca a las personas?'
    },
    {
      id: 'prometido', n: 'Cristo prometido', ref: 'Génesis 3:15; 12:3; 49:10; Deuteronomio 18:15; 2 Samuel 7:12-16; Isaías 53; Miqueas 5:2',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La promesa se va precisando',
          cab: ['Promesa', 'Lo que agrega', 'Cumplimiento'],
          filas: [
            ['Gn 3:15', 'Vendrá un descendiente de la mujer que vencerá a la serpiente', 'Ga 4:4; He 2:14'],
            ['Gn 12:3; 22:18', 'Será descendiente de Abraham y bendecirá a todas las naciones', 'Ga 3:16'],
            ['Gn 49:10', 'Vendrá de la tribu de Judá', 'He 7:14; Ap 5:5'],
            ['Dt 18:15', 'Será un profeta como Moisés', 'Hch 3:22-26'],
            ['2 S 7:12-16', 'Será hijo de David y su reino no tendrá fin', 'Lc 1:32-33'],
            ['Is 7:14', 'Nacerá de una virgen y será Emanuel', 'Mt 1:22-23'],
            ['Mi 5:2', 'Nacerá en Belén, aunque sus salidas son desde la eternidad', 'Mt 2:5-6'],
            ['Is 53', 'Sufrirá y morirá por los pecados de su pueblo', 'Hch 8:32-35; 1 P 2:24'],
            ['Sal 16:10', 'Su cuerpo no verá corrupción', 'Hch 2:25-32']
          ],
          nota: 'Solo una muestra: el recurso Profecías mesiánicas y su cumplimiento las estudiará una por una.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../entre-los-testamentos/img/simeon-templo.webp', alt: 'Simeón, anciano, sostiene al niño Jesús en sus brazos en un atrio del templo de Jerusalén', pie: 'Simeón había esperado toda su vida «la consolación de Israel» (Lc 2:25).', origen: 'ia' }
      ],
      texto: [
        'La venida de Cristo no tomó a Dios por sorpresa. Fue anunciada siglos antes, y cada anuncio agregó un rasgo nuevo, como un retrato que se completa poco a poco. La tabla muestra cómo la promesa se va precisando: primero un descendiente de la mujer, luego de Abraham, de Judá y de David; un profeta, un rey, un siervo que sufre.',
        { h: 'La primera promesa' },
        'Apenas el ser humano pecó, Dios anunció la derrota de la serpiente: «ésta te herirá en la cabeza, y tú le herirás en el calcañar» (Gn 3:15). Los antiguos llamaron a este versículo el protoevangelio, el primer anuncio del evangelio. El descendiente de la mujer sufriría una herida, pero daría a la serpiente un golpe mortal. Pablo recuerda que Cristo nació «de mujer» (Ga 4:4), y Hebreos dice que por medio de la muerte destruyó al que tenía el imperio de la muerte, el diablo (He 2:14).',
        { h: 'Rey, profeta y siervo' },
        'Con el tiempo, la promesa se concentró en una familia. A David, Dios le juró que su descendiente reinaría para siempre (2 S 7:16), y el ángel Gabriel dijo a María que Dios daría a su hijo el trono de David su padre (Lc 1:32). Moisés anunció un profeta como él, a quien había que oír (Dt 18:15), y Pedro dice que ese profeta es Jesús (Hch 3:22-26). Isaías, por su parte, describió a un siervo despreciado que sería herido por nuestras rebeliones (Is 53:5). Muchos en Israel esperaban un rey glorioso, pero no entendían cómo podía ser también un siervo que sufre. Jesús unió en sí las dos líneas.',
        { h: 'El valor de las profecías' },
        'Los evangelios repiten una y otra vez que algo ocurrió «para que se cumpliese» lo dicho por los profetas. El cumplimiento muestra que Jesús no es un personaje que surgió por azar, sino el centro de un plan que Dios anunció y llevó a cabo. Pedro dice que los profetas indagaban qué tiempo indicaba el Espíritu de Cristo que estaba en ellos, cuando anunciaba los sufrimientos de Cristo y las glorias que vendrían tras ellos (1 P 1:10-11).',
        'Este recurso solo da una muestra. El estudio detallado de las profecías mesiánicas, una por una, con su contexto y su cumplimiento, será el tema de un recurso propio, Profecías mesiánicas y su cumplimiento, hoy en preparación. Las promesas hechas a Abraham y a David se estudian también en Pactos y dispensaciones.',
        { ir: { t: 'Ver «El Hijo de David» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/2' } }
      ],
      pensar: 'Simeón esperó toda su vida hasta tener al Niño en sus brazos. ¿Qué promesas de Dios estás esperando tú, y qué te enseña su fidelidad en las profecías cumplidas?'
    },
    {
      id: 'figuras', n: 'Figuras de Cristo', ref: 'Romanos 5:14; Juan 3:14-15; 1 Corintios 5:7; 10:4; Hebreos 7:1-3; 8:5; Mateo 12:40-42',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Figuras que el Nuevo Testamento declara',
          cab: ['Figura', 'En el Antiguo Testamento', 'Lo que el Nuevo Testamento ve en Cristo'],
          filas: [
            ['Adán', 'Cabeza de la humanidad (Gn 2–3)', 'Figura del que había de venir: el postrer Adán da vida (Ro 5:14; 1 Co 15:45)'],
            ['Melquisedec', 'Rey y sacerdote que bendice a Abram (Gn 14:18-20)', 'Sacerdote para siempre, sin genealogía levítica (He 7:1-3; Sal 110:4)'],
            ['Moisés', 'Profeta, mediador y libertador (Dt 18:15)', 'El profeta anunciado, digno de más gloria que Moisés (Hch 3:22; He 3:1-6)'],
            ['David', 'El rey ungido y pastor de Israel (2 S 7)', 'El Hijo de David, el buen pastor y el rey eterno (Lc 1:32; Jn 10:11)'],
            ['Jonás', 'Tres días en el vientre del pez (Jon 1:17)', 'Tres días en el corazón de la tierra (Mt 12:40)'],
            ['El cordero pascual', 'Su sangre libró a Israel de la muerte (Éx 12)', 'Nuestra pascua, que ya fue sacrificada por nosotros (1 Co 5:7)'],
            ['La serpiente de bronce', 'El que la miraba vivía (Nm 21:8-9)', 'El Hijo levantado en la cruz (Jn 3:14-15)'],
            ['El maná y la roca', 'Pan del cielo y agua en el desierto (Éx 16; 17)', 'El pan de vida y la roca espiritual (Jn 6:32-35; 1 Co 10:4)'],
            ['El tabernáculo y los sacrificios', 'Sombra de las cosas celestiales (Éx 25:40)', 'Cristo entró una vez para siempre con su propia sangre (He 8:5; 9:11-12)']
          ],
          nota: 'Hay figuras que el Nuevo Testamento no declara expresamente (José, Isaac, Booz). Se estudiarán con su método en el recurso Tipos y figuras de Cristo.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../sacerdocio/img/sac-melquisedec.webp', alt: 'Melquisedec, rey de Salem, sale al encuentro de Abram con pan y vino', pie: 'Melquisedec, rey y sacerdote, es figura del sacerdocio eterno de Cristo (Hebreos 7).', origen: 'ia' }
      ],
      texto: [
        'Además de las profecías, que anuncian con palabras, el Antiguo Testamento anuncia a Cristo con personas, hechos e instituciones. A estos anuncios se les llama tipos o figuras. El mismo Nuevo Testamento usa la palabra: Pablo dice que Adán «es figura del que había de venir» (Ro 5:14), y Hebreos dice que los sacerdotes del tabernáculo sirven a lo que es figura y sombra de las cosas celestiales (He 8:5).',
        { h: 'Qué es un tipo' },
        'Un tipo es una persona, un hecho o una institución real del Antiguo Testamento que Dios dispuso para anunciar de antemano a Cristo y su obra. Tres rasgos lo distinguen. Es histórico: Melquisedec existió, la serpiente de bronce se levantó en el desierto. Tiene un parecido real con su cumplimiento: así como el que miraba la serpiente vivía, el que mira con fe al crucificado tiene vida. Y su cumplimiento es mayor: Moisés fue fiel como siervo, pero Cristo es Hijo sobre su casa (He 3:5-6).',
        { h: 'Personas, hechos e instituciones' },
        'La tabla reúne solo las figuras que el Nuevo Testamento declara expresamente. Algunas son personas: Adán, cabeza de una humanidad caída, prefigura a Cristo, cabeza de una humanidad nueva. Melquisedec, rey de justicia y de paz, prefigura a un sacerdote que es también rey. Moisés y David son modelos del profeta y del rey que vendrían. Otras son hechos: Jonás tres días en el pez, la roca que dio agua en el desierto. Otras son instituciones: el cordero de la Pascua, los sacrificios, el sumo sacerdote y el tabernáculo, que Hebreos explica uno por uno.',
        { h: 'Una advertencia' },
        'El peligro está en buscar a Cristo en cada detalle con la imaginación, convirtiendo cualquier objeto en un símbolo. Eso ya no es tipología, sino alegoría. La tipología se apoya en lo que la Escritura indica; la alegoría, en la creatividad del intérprete. El recurso Cómo interpretar la Biblia explica la diferencia.',
        'El tema es tan amplio que tendrá su propio recurso, Tipos y figuras de Cristo, en preparación: personas como José, Josué y Booz, hechos como el arca de Noé y el éxodo, y las instituciones del culto de Israel, con el método para distinguir un tipo legítimo de una alegoría. Mientras tanto, el tabernáculo y el sacerdocio ya tienen sus recursos.',
        { ir: { t: 'Ver «Alegorizar y la tipología» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#errores/3' } },
        { ir: { t: 'Ver «Melquisedec» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/1' } },
        { ejercicio: {
          pregunta: '¿Cuál de estas lecturas es tipología legítima y no alegoría?',
          opciones: [
            { t: 'Ver en la serpiente de bronce una figura de Cristo levantado en la cruz.', ok: true, por_que: 'Jesús mismo hace esa conexión en Juan 3:14-15: es el Nuevo Testamento quien la declara.' },
            { t: 'Ver en los cinco panes de la multiplicación los cinco sentidos que Cristo santifica.', ok: false, por_que: 'Ningún texto bíblico hace esa conexión: es una idea del intérprete, no del autor.' },
            { t: 'Ver en cada clavo del tabernáculo una virtud distinta del creyente.', ok: false, por_que: 'Hebreos ve en el tabernáculo una sombra de la obra de Cristo, pero no asigna significado a cada pieza menor.' }
          ],
          explicacion: 'La tipología se apoya en lo que la Escritura misma indica; la alegoría, en la imaginación del intérprete.'
        } }
      ],
      pensar: 'Dios preparó durante siglos figuras que anunciaran a su Hijo. ¿Qué te dice eso sobre la unidad de toda la Biblia y sobre cómo leer el Antiguo Testamento?'
    },
    {
      id: 'escrituras', n: '«Comenzando desde Moisés»', ref: 'Lucas 24:13-27, 44-47; Juan 5:39-46; Hechos 8:30-35',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../interpretar-biblia/img/camino-a-emaus.webp', alt: 'Dos discípulos caminan al atardecer por un camino de Judea junto a un tercer viajero, de espaldas, que les habla', pie: 'Camino a Emaús, Jesús les declaraba «en todas las Escrituras lo que de él decían» (Lc 24:27).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/24/25-27', ref: 'Lucas 24:25-27' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cristo en las tres partes de la Biblia hebrea (Lc 24:44)',
          cab: ['Parte', 'Ejemplos de lo que anuncia'],
          filas: [
            ['La ley de Moisés', 'La simiente de la mujer, el cordero pascual, el profeta como Moisés, los sacrificios'],
            ['Los profetas', 'El hijo de la virgen, el renuevo de David, el siervo sufriente, el pastor herido'],
            ['Los salmos', 'El rey ungido (Sal 2), el que sufre (Sal 22), el que no ve corrupción (Sal 16), el sacerdote eterno (Sal 110)']
          ],
          nota: 'Jesús nombró las tres partes de la Biblia de Israel: la ley, los profetas y los escritos, que empiezan con los Salmos.'
        } }
      ],
      texto: [
        'El domingo de la resurrección, dos discípulos caminaban tristes hacia Emaús. Habían esperado que Jesús fuera el libertador de Israel, y ahora estaba muerto. Un desconocido se les unió en el camino y les reprochó que no hubieran creído a los profetas: «¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria?» (Lc 24:26). Entonces, «comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían» (Lc 24:27). Después lo reconocieron al partir el pan.',
        { h: 'Toda la Escritura habla de Él' },
        'Esa misma noche, Jesús dijo a los once que era necesario que se cumpliese todo lo que estaba escrito de Él «en la ley de Moisés, en los profetas y en los salmos» (Lc 24:44). Son las tres partes de la Biblia hebrea. Antes ya había dicho a los líderes judíos: «Escudriñad las Escrituras… y ellas son las que dan testimonio de mí» (Jn 5:39), y «si creyeseis a Moisés, me creeríais a mí, porque de mí escribió él» (Jn 5:46).',
        'Esto no significa que cada versículo del Antiguo Testamento sea una profecía de Cristo. Significa que toda la historia que cuenta conduce a Él. La creación, la caída, los pactos, la ley, el sacerdocio, el reino de David y el exilio preparan el camino. Las promesas quedan abiertas, los sacrificios se repiten sin quitar el pecado, los reyes fallan uno tras otro. El Antiguo Testamento termina esperando a alguien.',
        { h: 'Cómo leer el Antiguo Testamento' },
        'Hay dos errores opuestos. Uno es leer el Antiguo Testamento como si Cristo no existiera, como una colección de historias morales: sé valiente como David, fiel como José. El otro es ver a Cristo en todo por medio de la alegoría, ignorando lo que el texto dice en su contexto. La lectura correcta respeta el sentido histórico de cada pasaje y luego pregunta cómo se conecta con la gran historia que se cumple en Cristo: por medio de una promesa, una figura, un tema que crece o una necesidad que solo Él satisface.',
        'Felipe hizo esto con el etíope, que leía Isaías 53 sin entenderlo: «comenzando desde esta escritura, le anunció el evangelio de Jesús» (Hch 8:35). El recurso Cómo interpretar la Biblia dedica una estación a Cristo como centro de la Escritura.',
        { ir: { t: 'Ver «Cristo, centro de la Escritura» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#fundamentos/4' } },
        { ejercicio: {
          pregunta: 'Al decir que las Escrituras dan testimonio de Él, ¿qué afirma Jesús?',
          opciones: [
            { t: 'Que toda la historia del Antiguo Testamento conduce a Él y se cumple en Él.', ok: true, por_que: 'Lucas 24:27 y 44 hablan de «todas las Escrituras» y de sus tres partes.' },
            { t: 'Que cada versículo del Antiguo Testamento es una profecía directa sobre su vida.', ok: false, por_que: 'Muchos pasajes hablan de Cristo por medio de figuras o de la historia que preparan, no como predicciones directas.' },
            { t: 'Que el Antiguo Testamento ya no es necesario después de su venida.', ok: false, por_que: 'Jesús usa el Antiguo Testamento para explicar su muerte y resurrección: lo confirma, no lo descarta.' }
          ],
          explicacion: 'Jesús es la clave para entender el Antiguo Testamento, y el Antiguo Testamento es necesario para entender a Jesús.'
        } }
      ],
      pensar: 'Los discípulos de Emaús dijeron: «¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el camino, y cuando nos abría las Escrituras?» (Lc 24:32). ¿Cuándo fue la última vez que leer el Antiguo Testamento te llevó a adorar a Cristo?'
    }
  ];

  /* ---------------- II. La encarnación ---------------- */
  const encarnacion = [
    {
      id: 'carne', n: 'El Verbo se hizo carne', ref: 'Juan 1:14; Gálatas 4:4-5; Lucas 2:1-20; 1 Timoteo 3:16',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/belen-nacimiento.webp', alt: 'En un establo de piedra, en Belén, una joven madre envuelta en un velo gris azulado contempla a su recién nacido envuelto en pañales y acostado en un pesebre de piedra, mientras José, arrodillado, sostiene una lámpara de aceite', pie: 'El Creador del universo nació como un bebé, envuelto en pañales y acostado en un pesebre (Lc 2:7).', origen: 'ia', foco: '50% 55%' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/1/14', ref: 'Juan 1:14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué significa «encarnación»',
          cab: ['Afirma', 'No afirma'],
          filas: [
            ['El Hijo eterno tomó una naturaleza humana completa: cuerpo y alma', 'Que Dios se transformó en hombre y dejó de ser Dios'],
            ['Se hizo hombre sin dejar de ser Dios', 'Que solo parecía hombre (docetismo)'],
            ['La unión es permanente: sigue siendo hombre glorificado', 'Que fue hombre solo durante treinta y tres años'],
            ['Ocurrió en un momento de la historia, bajo Augusto', 'Que es un mito o un símbolo']
          ],
          nota: 'La palabra viene del latín in carne, «en carne».'
        } }
      ],
      texto: [
        'Juan dice que el Verbo eterno, el que estaba con Dios y era Dios, «fue hecho carne, y habitó entre nosotros» (Jn 1:14). La teología llama a esto la encarnación. Es el milagro más grande de la historia: no que un hombre llegara a ser Dios, que es imposible, sino que Dios, sin dejar de ser Dios, se hizo hombre.',
        { h: '«Carne»' },
        'Juan pudo haber dicho que el Verbo se hizo hombre, pero eligió una palabra más fuerte: carne. En la Biblia, la carne es la humanidad en su fragilidad, lo que se cansa, se enferma y muere (Is 40:6). El Hijo no tomó una humanidad gloriosa, sino débil. Nació como un bebé que necesitaba ser alimentado y cuidado. Creció en un pueblo pequeño de Galilea. Trabajó con sus manos.',
        { h: '«Habitó entre nosotros»' },
        'La palabra que traduce «habitó» significa, literalmente, que puso su tienda o su tabernáculo. Juan está pensando en el tabernáculo del desierto, donde la gloria de Dios llenaba el lugar santísimo (Éx 40:34). Por eso agrega: «y vimos su gloria». Lo que el tabernáculo prefiguraba se cumplió en Jesús: Dios mismo habitando en medio de su pueblo. Mateo lo dice con el nombre que Isaías dio al niño: Emanuel, «Dios con nosotros» (Mt 1:23).',
        { h: 'En el cumplimiento del tiempo' },
        'Pablo escribe que «cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley» (Ga 4:4). La encarnación ocurrió en un momento preciso, preparado por Dios: bajo el gobierno de Augusto, en un mundo unido por los caminos romanos y la lengua griega, en un pueblo que esperaba al Mesías. El recurso Entre los Testamentos describe ese mundo. Lucas fecha el nacimiento con datos históricos, porque no está contando un mito, sino algo que ocurrió.',
        { h: 'Para siempre' },
        'La encarnación no fue un traje que el Hijo se puso por un tiempo. Después de resucitar, Jesús comió con sus discípulos y les mostró sus manos (Lc 24:39-43). Subió al cielo como hombre glorificado, y como hombre volverá (Hch 1:11). Hay un hombre sentado en el trono del universo. Pablo lo resume así: «Dios fue manifestado en carne» (1 Ti 3:16).',
        { ejercicio: {
          pregunta: '¿Qué afirma la doctrina de la encarnación?',
          opciones: [
            { t: 'Que el Hijo eterno tomó una naturaleza humana completa sin dejar de ser Dios.', ok: true, por_que: 'Juan 1:1 y 1:14 hablan del mismo Verbo: el que era Dios fue hecho carne.' },
            { t: 'Que Dios se convirtió en hombre y por un tiempo dejó de ser Dios.', ok: false, por_que: 'Dios no puede dejar de ser lo que es (Mal 3:6). El Hijo agregó una naturaleza humana, no perdió la divina.' },
            { t: 'Que Jesús fue un hombre que, por su santidad, llegó a ser divino.', ok: false, por_que: 'Eso invierte el orden: la Biblia dice que el Verbo que ya era Dios se hizo carne.' }
          ],
          explicacion: 'Sin dejar de ser lo que era, el Hijo llegó a ser lo que no era: verdadero hombre.'
        } }
      ],
      pensar: 'Dios no nos salvó desde lejos, sino haciéndose uno de nosotros. ¿Qué cambia en tu manera de orar saber que el Hijo conoce la vida humana desde adentro?'
    },
    {
      id: 'virgen', n: 'Nacido de una virgen', ref: 'Isaías 7:14; Mateo 1:18-25; Lucas 1:26-38; Gálatas 4:4',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/1/34-35', ref: 'Lucas 1:34-35' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos relatos independientes',
          cab: ['', 'Mateo 1', 'Lucas 1–2'],
          filas: [
            ['Desde quién se cuenta', 'José', 'María'],
            ['Quién anuncia', 'Un ángel, en sueños', 'El ángel Gabriel, en Nazaret'],
            ['Cómo lo dice', 'Lo que en ella es engendrado, del Espíritu Santo es', 'El Espíritu Santo vendrá sobre ti'],
            ['Detalle propio', 'Cita Isaías 7:14 y dice que José no la conoció hasta que dio a luz', 'María pregunta cómo será, pues no conoce varón'],
            ['Lugar', 'Belén, magos, huida a Egipto', 'Nazaret, Belén, pastores, presentación en el templo']
          ],
          nota: 'Dos autores con fuentes distintas afirman lo mismo: Jesús fue concebido sin padre humano.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperio-romano/img/roma-censo-belen.webp', alt: 'Familias judías llegan a Belén para el censo romano', pie: 'El censo de Augusto llevó a José y a María a Belén (Lc 2:1-5).', origen: 'ia' }
      ],
      texto: [
        'Mateo y Lucas cuentan el nacimiento de Jesús desde ángulos distintos, uno desde José y el otro desde María, pero coinciden en lo central: Jesús fue concebido por obra del Espíritu Santo, sin intervención de un hombre. María preguntó al ángel: «¿Cómo será esto? pues no conozco varón» (Lc 1:34). Y José quiso dejarla en secreto hasta que el ángel le explicó que lo engendrado en ella era del Espíritu Santo (Mt 1:19-20).',
        { h: 'Un milagro con sentido' },
        'El nacimiento virginal no es un adorno de la historia. Muestra que la salvación viene de Dios y no del esfuerzo humano: no fue la voluntad de un hombre, sino la iniciativa de Dios. Muestra también que Jesús es verdaderamente hombre, nacido de mujer, y verdaderamente distinto de todos: el Espíritu Santo lo concibió, «por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios» (Lc 1:35). Y explica, en parte, por qué Jesús no heredó la naturaleza caída que pasa de Adán a todos sus descendientes.',
        'Hay que precisar algo: el nacimiento virginal no hace que Jesús sea el Hijo de Dios por primera vez. Él ya era el Hijo eterno antes de ser concebido. La concepción por el Espíritu es la manera en que el Hijo eterno entró en la humanidad.',
        { h: 'La palabra de Isaías' },
        'Mateo cita Isaías 7:14: «He aquí, una virgen concebirá y dará a luz un hijo» (Mt 1:23). La palabra hebrea de Isaías es almah, que se discute.',
        { posturas: {
          titulo: '¿Significa almah «virgen» en Isaías 7:14?',
          a: { n: 'Una joven, no necesariamente virgen', t: 'Algunos señalan que el hebreo tiene una palabra más precisa para virgen, betulah, y que almah significa una joven en edad de casarse. Proponen que la profecía tuvo un primer cumplimiento en tiempos de Acaz, con un niño nacido entonces, y que Mateo la aplica a Jesús en un sentido más pleno.' },
          b: { n: 'Una virgen', t: 'En sus siete apariciones, almah nunca se refiere a una mujer casada, y la traducción griega judía de los siglos III y II a.C., la Septuaginta, la tradujo parthenos, «virgen», mucho antes de Jesús. Isaías habla de una «señal» que el Señor mismo dará, y el niño se llama Emanuel, «Dios con nosotros», un nombre que en Isaías 9:6 recibe títulos divinos.' },
          c: 'Este recurso sigue la segunda lectura, que es la de la RV 1960. Aunque algunos vean un primer cumplimiento parcial en tiempos de Acaz, el nacimiento virginal no depende de una sola palabra: Mateo y Lucas lo cuentan como un hecho, con detalles que excluyen a un padre humano. La doctrina se apoya en lo que dicen los evangelios.'
        } },
        { ejercicio: {
          pregunta: '¿Qué muestra el nacimiento virginal de Jesús?',
          opciones: [
            { t: 'Que la salvación viene de la iniciativa de Dios y que Jesús es verdadero hombre y a la vez distinto de todos.', ok: true, por_que: 'Nació de mujer, como todos, pero fue concebido por el Espíritu Santo (Lc 1:35).' },
            { t: 'Que Jesús llegó a ser Hijo de Dios en el momento de su concepción.', ok: false, por_que: 'El Hijo existía desde la eternidad (Jn 1:1; 17:5). La concepción fue su entrada en la humanidad.' },
            { t: 'Que solo Lucas creía en él y Mateo lo tomó de Lucas.', ok: false, por_que: 'Los dos relatos son independientes: tienen narrador, detalles y lugares distintos, y coinciden en lo esencial.' }
          ],
          explicacion: 'El nacimiento virginal es la puerta por la que el Hijo eterno entró en nuestra historia.'
        } }
      ],
      pensar: 'María respondió: «He aquí la sierva del Señor; hágase conmigo conforme a tu palabra» (Lc 1:38). ¿Qué te enseña su fe ante algo que no podía entender del todo?'
    },
    {
      id: 'despojo', n: '«Se despojó a sí mismo»', ref: 'Filipenses 2:5-11; 2 Corintios 8:9; Juan 17:5',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-humillacion.svg', alt: 'Esquema en forma de V: a la izquierda, el descenso de Cristo desde la forma de Dios hasta la muerte de cruz; a la derecha, su exaltación hasta el nombre sobre todo nombre', pie: 'Los pasos de la humillación y de la exaltación según Filipenses 2:6-11.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@fil/2/5-11', ref: 'Filipenses 2:5-11' }
      ],
      texto: [
        'Pablo escribió a los filipenses para pedirles humildad y unidad, y para eso les puso un ejemplo: el de Cristo. El pasaje, que muchos creen que era un himno de la iglesia primitiva, describe un camino que baja hasta lo más profundo y luego sube hasta lo más alto. El esquema muestra los pasos.',
        { h: 'Lo que era' },
        'Cristo era «en forma de Dios» (Fil 2:6). La palabra forma no indica una apariencia, sino lo que una cosa es en realidad. Siendo Dios, «no estimó el ser igual a Dios como cosa a que aferrarse». No consideró su igualdad con el Padre como un privilegio para retener a toda costa, sino que la puso al servicio de otros.',
        { h: 'Lo que hizo' },
        'Entonces «se despojó a sí mismo» (Fil 2:7). La palabra griega es kenóo, «vaciar», y de ella viene el término kénosis. ¿De qué se vació? Pablo lo explica enseguida: tomó forma de siervo y se hizo semejante a los hombres. No se vació restando algo de su divinidad, sino sumando una humanidad. Y siguió bajando: se humilló, fue obediente hasta la muerte, «y muerte de cruz» (Fil 2:8), la muerte más vergonzosa de su tiempo, reservada a esclavos y rebeldes.',
        { posturas: {
          titulo: '¿De qué se despojó Cristo?',
          a: { n: 'Dejó de lado algunos atributos divinos', t: 'Desde el siglo XIX, algunas teorías llamadas kenóticas enseñan que el Hijo dejó de lado por un tiempo atributos como la omnipotencia, la omnisciencia y la omnipresencia, para poder vivir como un hombre verdadero.' },
          b: { n: 'Renunció a la gloria y al uso independiente de sus atributos', t: 'La mayoría de los teólogos evangélicos, y la línea pentecostal clásica, enseñan que el Hijo no dejó de ser plenamente Dios. Renunció a la gloria visible que tenía con el Padre (Jn 17:5), a su riqueza (2 Co 8:9) y a usar sus atributos por su cuenta, para vivir en dependencia del Padre y en el poder del Espíritu.' },
          c: 'Este recurso sigue la segunda postura. Un Dios que deja de tener sus atributos ya no sería Dios, y la Biblia dice que en Cristo habita corporalmente toda la plenitud de la Deidad (Col 2:9). Durante su vida terrenal, Jesús mostró a veces lo que era: conocía los pensamientos (Mr 2:8), calmó la tempestad, perdonó pecados. Pero eligió no usar su poder para sí mismo, como se ve en la tentación del desierto.'
        } },
        { h: 'Lo que Dios hizo' },
        'Por eso, «Dios también le exaltó hasta lo sumo, y le dio un nombre que es sobre todo nombre» (Fil 2:9). Toda rodilla se doblará y toda lengua confesará que Jesucristo es el Señor. Pablo está citando Isaías 45:23, donde Dios dice que ante Él se doblará toda rodilla. Lo que Isaías dice de Jehová, Pablo lo dice de Jesús. La ruta VI estudia esa exaltación.'
      ],
      pensar: 'Pablo no escribe este pasaje para explicar doctrina, sino para que los creyentes tengan «este sentir que hubo también en Cristo Jesús» (Fil 2:5). ¿A qué derecho o posición te está pidiendo Dios que renuncies por amor a otros?'
    },
    {
      id: 'hombre', n: 'Verdadero hombre', ref: 'Lucas 2:40-52; Juan 4:6; 11:33-35; 19:28; Mateo 4:2; 26:37-38; Hebreos 2:17',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/samaritana.webp', alt: 'Jesús, de espaldas, sentado junto al pozo de Jacob al mediodía, conversa con una mujer samaritana que lleva un cántaro', pie: '«Jesús, cansado del camino, se sentó así junto al pozo» (Jn 4:6).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Jesús vivió una vida humana completa',
          cab: ['Aspecto', 'Lo que dicen los evangelios'],
          filas: [
            ['Cuerpo', 'Nació, creció (Lc 2:52), tuvo hambre (Mt 4:2), sed (Jn 19:28), se cansó (Jn 4:6), durmió (Mr 4:38), murió (Jn 19:30)'],
            ['Mente', 'Crecía en sabiduría (Lc 2:52), hacía preguntas (Mr 5:30), se maravilló (Mt 8:10)'],
            ['Emociones', 'Se conmovió (Jn 11:33), lloró (Jn 11:35), se angustió (Mt 26:37-38), se gozó (Lc 10:21), se enojó (Mr 3:5)'],
            ['Alma y espíritu', 'Mi alma está muy triste (Mt 26:38); entregó el espíritu (Jn 19:30)'],
            ['Vida espiritual', 'Oraba (Mr 1:35), aprendió la obediencia (He 5:8), dependió del Espíritu (Lc 4:1, 14)'],
            ['Relaciones', 'Familia (Mr 6:3), amigos (Jn 11:5), trabajo de artesano (Mr 6:3)']
          ],
          nota: 'Jesús no fue un Dios disfrazado de hombre: fue hombre en todo, menos en el pecado.'
        } }
      ],
      texto: [
        'La iglesia primitiva tuvo que defender la divinidad de Jesús, pero también, y antes, su humanidad. A fines del siglo I ya circulaba la idea de que Jesús solo parecía hombre. Juan respondió con firmeza que el que no confiesa que Jesucristo ha venido en carne no es de Dios (1 Jn 4:2-3). Hoy el peligro suele ser el contrario, pero muchos creyentes piensan en Jesús como si su humanidad fuera solo una apariencia.',
        { h: 'Un cuerpo humano' },
        'La tabla reúne lo que dicen los evangelios. Jesús nació y fue alimentado por su madre. Creció «en sabiduría y en estatura» (Lc 2:52). Tuvo hambre después del ayuno en el desierto, y sed en la cruz. Se cansó del camino y se sentó junto al pozo de Jacob al mediodía. Durmió en una barca en medio de la tormenta. Sangró y murió. Después de resucitar, insistió en que no era un fantasma: «palpad, y ved; porque un espíritu no tiene carne ni huesos» (Lc 24:39).',
        { h: 'Un alma humana' },
        'Jesús también tuvo emociones humanas. Ante la tumba de Lázaro se estremeció, y aunque sabía que lo iba a resucitar, «Jesús lloró» (Jn 11:35). En Getsemaní dijo: «Mi alma está muy triste, hasta la muerte» (Mt 26:38). Se indignó cuando los discípulos impedían que los niños se acercaran (Mr 10:14), se maravilló de la fe de un centurión y se gozó en el Espíritu (Lc 10:21). Tenía una voluntad humana, que sometió a la del Padre: «no sea como yo quiero, sino como tú» (Mt 26:39).',
        { h: 'Por qué importa' },
        'Hebreos explica que Jesús «debía ser en todo semejante a sus hermanos, para venir a ser misericordioso y fiel sumo sacerdote» (He 2:17). Solo un hombre podía representar a los hombres y morir en su lugar. Y solo quien vivió nuestra debilidad puede compadecerse de ella. Cuando un creyente llora, se cansa o tiene miedo, puede saber que el Señor conoce eso desde adentro.',
        'Su humanidad también es un modelo. Jesús oraba temprano, dependía del Padre y vivía lleno del Espíritu. Lo que el Espíritu hizo en Él es lo que quiere formar en nosotros.',
        { ejercicio: {
          pregunta: '¿Por qué era necesario que Jesús fuera verdaderamente hombre?',
          opciones: [
            { t: 'Para representar a los hombres, morir en su lugar y compadecerse de sus debilidades.', ok: true, por_que: 'Hebreos 2:14-18 da estas razones: participó de carne y sangre para morir, y fue tentado para socorrer a los tentados.' },
            { t: 'Para aprender a ser Dios por medio de la experiencia humana.', ok: false, por_que: 'El Hijo ya era Dios desde la eternidad. Aprendió la obediencia como hombre (He 5:8), no a ser Dios.' },
            { t: 'Porque así los apóstoles podían aceptarlo como un maestro más.', ok: false, por_que: 'La razón que da la Escritura es la salvación: solo un hombre podía ser el sustituto de los hombres.' }
          ],
          explicacion: 'Un Salvador que no fuera hombre no podría tomar nuestro lugar ni entender nuestras luchas.'
        } }
      ],
      pensar: 'Jesús lloró ante la tumba de un amigo aunque sabía que lo iba a resucitar. ¿Qué te enseña eso sobre cómo trata Él tu dolor, incluso cuando ya conoce el final?'
    },
    {
      id: 'sin-pecado', n: 'Tentado, pero sin pecado', ref: 'Mateo 4:1-11; Hebreos 4:15; 2 Corintios 5:21; 1 Pedro 2:22; 1 Juan 3:5; Juan 8:46',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tentacion-desierto.webp', alt: 'Jesús, de espaldas, solo y demacrado, de pie sobre una loma rocosa del desierto de Judea, mira hacia un horizonte de colinas áridas bajo una luz dura; a sus pies hay piedras redondas', pie: 'Después de cuarenta días de ayuno, Jesús fue tentado en el desierto y venció con la Palabra (Mt 4:1-11).', origen: 'ia', foco: '50% 45%' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las tres tentaciones del desierto',
          cab: ['Tentación', 'Qué buscaba el diablo', 'Respuesta de Jesús'],
          filas: [
            ['Convertir piedras en pan', 'Que usara su poder para sí mismo, fuera de la voluntad del Padre', 'No solo de pan vivirá el hombre (Dt 8:3)'],
            ['Lanzarse del pináculo del templo', 'Que forzara a Dios a demostrar su cuidado', 'No tentarás al Señor tu Dios (Dt 6:16)'],
            ['Recibir los reinos del mundo', 'Que obtuviera el reino sin la cruz, adorando al diablo', 'Al Señor tu Dios adorarás (Dt 6:13)']
          ],
          nota: 'Israel fue probado cuarenta años en el desierto y cayó; Jesús, cuarenta días, y venció con las palabras de Deuteronomio.'
        } }
      ],
      texto: [
        'El Nuevo Testamento afirma con una sola voz que Jesús nunca pecó. Pablo dice que no conoció pecado (2 Co 5:21); Pedro, que no hizo pecado, ni se halló engaño en su boca (1 P 2:22); Juan, que no hay pecado en él (1 Jn 3:5). Jesús mismo desafió a sus adversarios: «¿Quién de vosotros me redarguye de pecado?» (Jn 8:46). Al mismo tiempo, Hebreos afirma que fue «tentado en todo según nuestra semejanza, pero sin pecado» (He 4:15).',
        { h: 'Las tentaciones del desierto' },
        'Inmediatamente después de su bautismo, el Espíritu llevó a Jesús al desierto. Allí, después de cuarenta días de ayuno, el diablo lo tentó tres veces. La tabla las resume. No eran tentaciones a pecados groseros, sino a cumplir su misión por un camino distinto del que el Padre había trazado: sin depender de Él, sin sufrimiento y sin cruz. Jesús respondió las tres veces con la Escritura, citando el libro de Deuteronomio, y venció donde Israel había caído.',
        'Las tentaciones no terminaron allí. El diablo se apartó «por un tiempo» (Lc 4:13). Pedro mismo intentó apartarlo de la cruz, y Jesús le respondió como al tentador (Mt 16:23). En Getsemaní, la tentación de evitar el sufrimiento llegó a su punto más alto.',
        { h: 'Tentación real' },
        'Si Jesús no podía pecar, ¿fue real la tentación? Sí. La tentación fue real porque su humanidad era real: sintió hambre, deseó no sufrir, experimentó la presión de la prueba. Incluso, quien resiste hasta el final conoce la fuerza de la tentación mejor que quien cede pronto. Jesús soportó toda la presión sin ceder nunca.',
        { posturas: {
          titulo: '¿Podía pecar Jesús?',
          a: { n: 'Podía no pecar', t: 'Algunos teólogos sostienen que Jesús podía pecar, pero no pecó. Así, dicen, la tentación habría sido plenamente real y su victoria, un verdadero mérito humano. Si no podía pecar, preguntan, ¿cómo podría ser nuestro ejemplo?' },
          b: { n: 'No podía pecar', t: 'La mayoría de los teólogos evangélicos, y muchos maestros pentecostales, enseñan que Jesús no pecó y no podía pecar. Jesús es una sola persona, y esa persona es el Hijo eterno: si Jesús hubiera pecado, Dios habría pecado, y Dios no puede ser tentado por el mal (Stg 1:13). La tentación fue real en su humanidad, pero su resultado nunca estuvo en duda.' },
          c: 'Este recurso sigue la segunda postura. Un puente de acero puede ser probado con cargas muy pesadas sin que exista la posibilidad de que se caiga: la prueba es real aunque la caída sea imposible. Las dos posturas coinciden en lo esencial: Jesús fue tentado de verdad, nunca pecó y por eso puede socorrer a los que son tentados (He 2:18).'
        } },
        { ejercicio: {
          pregunta: '¿Qué tienen en común las tres tentaciones del desierto?',
          opciones: [
            { t: 'Proponían a Jesús cumplir su misión por un camino distinto del que el Padre había trazado.', ok: true, por_que: 'Pan sin depender del Padre, una prueba espectacular sin fe, el reino sin la cruz.' },
            { t: 'Eran tentaciones a pecados morales evidentes, como robar o mentir.', ok: false, por_que: 'Ninguna de las tres parece mala a primera vista: el engaño estaba en el camino propuesto.' },
            { t: 'Jesús las venció usando su poder divino en lugar de la Escritura.', ok: false, por_que: 'Respondió las tres veces con «escrito está», como cualquier creyente puede hacer.' }
          ],
          explicacion: 'Jesús venció como hombre lleno del Espíritu, con la Palabra de Dios, y nos mostró cómo vencer.'
        } }
      ],
      pensar: 'Jesús venció la tentación con la Escritura memorizada y entendida. ¿Qué pasajes tienes guardados en el corazón para el día de la prueba?'
    },
    {
      id: 'ungido', n: 'Ungido por el Espíritu', ref: 'Lucas 3:21-22; 4:1, 14-21; Hechos 10:38; Mateo 12:28; Juan 3:34',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../palabra-de-dios/img/jesus-nazaret.webp', alt: 'Jesús, de pie en la sinagoga de Nazaret, lee un rollo ante la congregación', pie: 'En Nazaret, Jesús leyó Isaías 61 y dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/4/18', ref: 'Lucas 4:18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Espíritu Santo en la vida de Jesús',
          cab: ['Momento', 'Obra del Espíritu'],
          filas: [
            ['Concepción', 'El Espíritu Santo vendrá sobre ti (Lc 1:35)'],
            ['Bautismo', 'Descendió sobre él en forma corporal, como paloma (Lc 3:22)'],
            ['Tentación', 'Lleno del Espíritu Santo, fue llevado por el Espíritu al desierto (Lc 4:1)'],
            ['Ministerio', 'Volvió en el poder del Espíritu a Galilea (Lc 4:14)'],
            ['Milagros', 'Por el Espíritu de Dios echo fuera los demonios (Mt 12:28)'],
            ['Cruz', 'Mediante el Espíritu eterno se ofreció a sí mismo (He 9:14)'],
            ['Resurrección', 'Vivificado en espíritu (1 P 3:18); el Espíritu de aquel que levantó de los muertos a Jesús (Ro 8:11)'],
            ['Exaltación', 'Recibió del Padre la promesa del Espíritu y lo derramó (Hch 2:33)']
          ],
          nota: 'El nombre Cristo significa Ungido: Jesús es el hombre ungido con el Espíritu Santo.'
        } }
      ],
      texto: [
        'El título Cristo, en griego, y Mesías, en hebreo, significan lo mismo: Ungido. En Israel se ungía con aceite a los reyes, a los sacerdotes y a veces a los profetas, como señal de que Dios los apartaba y capacitaba. El aceite era figura del Espíritu Santo. Jesús es el Cristo porque fue ungido, no con aceite, sino con el Espíritu Santo mismo.',
        { h: 'Del Jordán a Nazaret' },
        'En el bautismo, el Espíritu descendió sobre Jesús y el Padre habló desde el cielo. Desde ese momento, Lucas insiste en el Espíritu: Jesús fue al desierto «lleno del Espíritu Santo», volvió a Galilea «en el poder del Espíritu», y en la sinagoga de Nazaret leyó Isaías 61: «El Espíritu del Señor está sobre mí, por cuanto me ha ungido» (Lc 4:18). Al terminar, dijo que esa Escritura se cumplía en ese momento. Pedro resumió años después todo el ministerio de Jesús así: «Dios ungió con el Espíritu Santo y con poder a Jesús de Nazaret, y… éste anduvo haciendo bienes y sanando a todos los oprimidos por el diablo» (Hch 10:38).',
        { h: 'Dios y hombre lleno del Espíritu' },
        'Si Jesús era Dios, ¿por qué necesitaba el Espíritu? Porque, como hombre, vivió en dependencia del Padre y en el poder del Espíritu. Él mismo dijo que echaba fuera los demonios «por el Espíritu de Dios» (Mt 12:28). Esto no niega su divinidad: el Hijo eterno nunca dejó de ser Dios. Pero eligió no actuar por su cuenta, sino como el hombre ungido, y así nos mostró lo que el Espíritu puede hacer en una vida humana entregada a Dios.',
        { h: 'Para nosotros' },
        'Jesús prometió a sus discípulos que harían las obras que Él hacía, y aun mayores, porque iba al Padre (Jn 14:12). Antes de ascender les mandó esperar la promesa del Padre: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo» (Hch 1:8). El mismo Espíritu que ungió a Jesús fue derramado sobre la iglesia en Pentecostés. Por eso Juan el Bautista lo presentó como el que bautiza con Espíritu Santo (Jn 1:33). La persona y la obra del Espíritu se estudiarán en el recurso El Espíritu Santo, hoy en preparación.',
        { ir: { t: 'Ver el bautismo de Jesús en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/3' } }
      ],
      pensar: 'Si el mismo Jesús vivió y sirvió en el poder del Espíritu, ¿cuánto más lo necesitamos nosotros? ¿Estás buscando esa llenura para tu vida y tu servicio?'
    },
    {
      id: 'por-que-hombre', n: '¿Por qué Dios se hizo hombre?', ref: 'Hebreos 2:9-18; 1 Timoteo 2:5; Juan 1:18; 1 Juan 3:8; Romanos 5:12-19',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@he/2/14-18', ref: 'Hebreos 2:14-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las razones de la encarnación',
          cab: ['Para…', 'Texto'],
          filas: [
            ['Revelar al Padre', 'El unigénito Hijo… él le ha dado a conocer (Jn 1:18); el que me ha visto a mí, ha visto al Padre (Jn 14:9)'],
            ['Morir en nuestro lugar', 'Para que por la gracia de Dios gustase la muerte por todos (He 2:9)'],
            ['Ser mediador', 'Un solo mediador entre Dios y los hombres, Jesucristo hombre (1 Ti 2:5)'],
            ['Deshacer las obras del diablo', 'Para esto apareció el Hijo de Dios (1 Jn 3:8; He 2:14)'],
            ['Ser sumo sacerdote compasivo', 'Debía ser en todo semejante a sus hermanos (He 2:17-18)'],
            ['Ser el nuevo Adán', 'Por la obediencia de uno, los muchos serán constituidos justos (Ro 5:19)'],
            ['Dejarnos ejemplo', 'Para que sigáis sus pisadas (1 P 2:21)']
          ],
          nota: 'Anselmo de Canterbury tituló así su obra más conocida, hacia 1098: «¿Por qué Dios se hizo hombre?»'
        } }
      ],
      texto: [
        'Hacia el año 1098, el teólogo Anselmo de Canterbury escribió un libro con un título que es una pregunta: ¿Por qué Dios se hizo hombre? Su respuesta, resumida, fue esta: la deuda del pecado la debía pagar el hombre, pero solo Dios podía pagarla; por eso era necesario alguien que fuera a la vez Dios y hombre. La Escritura da varias razones, que la tabla reúne.',
        { h: 'Para revelar a Dios' },
        'Nadie ha visto a Dios jamás, pero el Hijo le ha dado a conocer (Jn 1:18). En Jesús, Dios se hizo visible, audible y cercano. Cuando Felipe pidió ver al Padre, Jesús le respondió: «El que me ha visto a mí, ha visto al Padre» (Jn 14:9). Si queremos saber cómo es Dios, miramos a Jesús: su compasión con los leprosos, su firmeza con los hipócritas, su perdón en la cruz.',
        { h: 'Para salvar' },
        'La razón central es la salvación. Dios no puede morir; por eso el Hijo tomó un cuerpo, «para que por la gracia de Dios gustase la muerte por todos» (He 2:9). Por medio de su muerte destruyó al diablo y libró a los que vivían esclavos del miedo a la muerte (He 2:14-15). Como hombre, puede ser nuestro representante; como Dios, su sacrificio tiene un valor infinito. Por eso es el único mediador: no un tercero entre Dios y los hombres, sino quien une en sí mismo a Dios y al hombre (1 Ti 2:5).',
        { h: 'Para ser el nuevo Adán' },
        'Pablo compara a Cristo con Adán. Por la desobediencia de un hombre entró el pecado en el mundo; por la obediencia de otro hombre, muchos son constituidos justos (Ro 5:19). Jesús vivió la vida de obediencia que Adán no vivió y que nosotros no vivimos, y comenzó una humanidad nueva.',
        { h: 'Para compadecerse y dejarnos ejemplo' },
        'Jesús fue tentado y sufrió, y por eso «es poderoso para socorrer a los que son tentados» (He 2:18). Y nos dejó un ejemplo de vida humana como Dios la quiere, para que sigamos sus pisadas (1 P 2:21).',
        { ejercicio: {
          pregunta: '¿Por qué solo alguien que fuera a la vez Dios y hombre podía salvarnos?',
          opciones: [
            { t: 'Porque como hombre podía representarnos y morir, y como Dios su sacrificio tenía valor infinito.', ok: true, por_que: 'Es el argumento de Hebreos 2 y de 1 Timoteo 2:5, que Anselmo resumió en su obra.' },
            { t: 'Porque un hombre común habría podido salvarnos si hubiera sido suficientemente bueno.', ok: false, por_que: 'Todos pecaron (Ro 3:23). Ningún hombre caído podía pagar por otros.' },
            { t: 'Porque Dios necesitaba aprender a perdonar por medio de la experiencia humana.', ok: false, por_que: 'Dios siempre fue misericordioso. La encarnación hizo posible el sacrificio que satisface su justicia.' }
          ],
          explicacion: 'El Mediador une en su persona las dos partes que el pecado había separado.'
        } }
      ],
      pensar: 'Hebreos dice que Cristo no se avergüenza de llamarnos hermanos (He 2:11). ¿Qué significa para ti que el Hijo de Dios se haya hecho tu hermano?'
    }
  ];

  window.__CRISTO = { antes, encarnacion };
})();
