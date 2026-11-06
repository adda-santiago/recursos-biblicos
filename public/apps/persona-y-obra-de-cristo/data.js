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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Viniendo Jesús a la región de Cesarea de Filipo, preguntó a sus discípulos, diciendo: ¿Quién dicen los hombres que es el Hijo del Hombre? Ellos dijeron: Unos, Juan el Bautista; otros, Elías; y otros, Jeremías, o alguno de los profetas. El les dijo: Y vosotros, ¿quién decís que soy yo? Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del Dios viviente. Entonces le respondió Jesús: Bienaventurado eres, Simón, hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos.', ref: 'Mateo 16:13-17' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por él fueron hechas, y sin él nada de lo que ha sido hecho, fue hecho.', ref: 'Juan 1:1-3' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces él les dijo: ¡Oh insensatos, y tardos de corazón para creer todo lo que los profetas han dicho! ¿No era necesario que el Cristo padeciera estas cosas, y que entrara en su gloria? Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.', ref: 'Lucas 24:25-27' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.', ref: 'Juan 1:14' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces María dijo al ángel: ¿Cómo será esto? pues no conozco varón. Respondiendo el ángel, le dijo: El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios.', ref: 'Lucas 1:34-35' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús, el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres; y estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz. Por lo cual Dios también le exaltó hasta lo sumo, y le dio un nombre que es sobre todo nombre, para que en el nombre de Jesús se doble toda rodilla de los que están en los cielos, y en la tierra, y debajo de la tierra; y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.', ref: 'Filipenses 2:5-11' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres; Me ha enviado a sanar a los quebrantados de corazón; A pregonar libertad a los cautivos, Y vista a los ciegos; A poner en libertad a los oprimidos;', ref: 'Lucas 4:18' },
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
        'Jesús prometió a sus discípulos que harían las obras que Él hacía, y aun mayores, porque iba al Padre (Jn 14:12). Antes de ascender les mandó esperar la promesa del Padre: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo» (Hch 1:8). El mismo Espíritu que ungió a Jesús fue derramado sobre la iglesia en Pentecostés. Por eso Juan el Bautista lo presentó como el que bautiza con Espíritu Santo (Jn 1:33). La persona y la obra del Espíritu se estudian en el recurso El Espíritu Santo.',
        { ir: { t: 'Ver el bautismo de Jesús en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/3' } },
        { ir: { t: 'Ver «Ungido en el Jordán» en El Espíritu Santo', a: '../../espiritu-santo/#jesus/2' } }
      ],
      pensar: 'Si el mismo Jesús vivió y sirvió en el poder del Espíritu, ¿cuánto más lo necesitamos nosotros? ¿Estás buscando esa llenura para tu vida y tu servicio?'
    },
    {
      id: 'por-que-hombre', n: '¿Por qué Dios se hizo hombre?', ref: 'Hebreos 2:9-18; 1 Timoteo 2:5; Juan 1:18; 1 Juan 3:8; Romanos 5:12-19',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Así que, por cuanto los hijos participaron de carne y sangre, él también participó de lo mismo, para destruir por medio de la muerte al que tenía el imperio de la muerte, esto es, al diablo, y librar a todos los que por el temor de la muerte estaban durante toda la vida sujetos a servidumbre. Porque ciertamente no socorrió a los ángeles, sino que socorrió a la descendencia de Abraham. Por lo cual debía ser en todo semejante a sus hermanos, para venir a ser misericordioso y fiel sumo sacerdote en lo que a Dios se refiere, para expiar los pecados del pueblo. Pues en cuanto él mismo padeció siendo tentado, es poderoso para socorrer a los que son tentados.', ref: 'Hebreos 2:14-18' },
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
/* La persona y obra de Cristo · ruta III. Dios y hombre en una persona (ver encabezado en parte1.js) */
(() => {
  const ORIENTE = [[29.5, 22], [42.5, 40]]; // Egipto, Asia Menor y Siria
  const IMP = ['roma-117'];
  const NT = [30, 95];

  /* ---------------- III. Dios y hombre en una persona ---------------- */
  const persona = [
    {
      id: 'verdadero-dios', n: 'Verdadero Dios: lo que Jesús reclamó', ref: 'Marcos 2:5-12; Mateo 12:6-8; 25:31-32; Juan 5:17-23; 10:28; 20:28', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Jesús dijo e hizo como solo Dios puede',
          cab: ['Jesús…', 'Texto', 'Por qué solo Dios'],
          filas: [
            ['Perdona pecados', 'Hijo, tus pecados te son perdonados (Mr 2:5)', '¿Quién puede perdonar pecados, sino sólo Dios? (Mr 2:7)'],
            ['Es Señor del día de reposo', 'El Hijo del Hombre es Señor del día de reposo (Mt 12:8)', 'Dios instituyó el sábado (Gn 2:3; Éx 20:11)'],
            ['Es mayor que el templo', 'Uno mayor que el templo está aquí (Mt 12:6)', 'El templo era la casa de Dios'],
            ['Juzgará a las naciones', 'Se sentará en su trono de gloria (Mt 25:31-32)', 'Dios es el juez de toda la tierra (Gn 18:25)'],
            ['Da vida eterna', 'Yo les doy vida eterna (Jn 10:28)', 'Solo Dios tiene vida en sí mismo (Jn 5:26)'],
            ['Pide la misma honra que el Padre', 'Para que todos honren al Hijo como honran al Padre (Jn 5:23)', 'Dios no da su gloria a otro (Is 42:8)'],
            ['Acepta adoración', 'Le adoraron (Mt 14:33; 28:9); ¡Señor mío, y Dios mío! (Jn 20:28)', 'Solo a Dios se adora (Mt 4:10)']
          ],
          nota: 'La lista de los textos donde se llama Dios a Jesús está en Dios y la Trinidad, estación «El Hijo es Dios».'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Al ver Jesús la fe de ellos, dijo al paralítico: Hijo, tus pecados te son perdonados. Estaban allí sentados algunos de los escribas, los cuales cavilaban en sus corazones: ¿Por qué habla éste así? Blasfemias dice. ¿Quién puede perdonar pecados, sino sólo Dios? Y conociendo luego Jesús en su espíritu que cavilaban de esta manera dentro de sí mismos, les dijo: ¿Por qué caviláis así en vuestros corazones? ¿Qué es más fácil, decir al paralítico: Tus pecados te son perdonados, o decirle: Levántate, toma tu lecho y anda? Pues para que sepáis que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados (dijo al paralítico):', ref: 'Marcos 2:5-10' }
      ],
      texto: [
        'El Nuevo Testamento llama Dios a Jesús varias veces: Tomás lo confiesa «¡Señor mío, y Dios mío!» (Jn 20:28), Pablo lo llama «Dios sobre todas las cosas» (Ro 9:5) y Tito lo espera como «nuestro gran Dios y Salvador» (Tit 2:13). Esos textos se estudian en el recurso Dios y la Trinidad. Esta estación mira otra clase de evidencia, a veces más impresionante: lo que Jesús mismo dijo e hizo, aun sin decir expresamente «yo soy Dios».',
        { h: 'Un paralítico en Capernaúm' },
        'Cuatro hombres abrieron el techo de una casa para bajar a un paralítico delante de Jesús. Lo esperable era que lo sanara. Pero Jesús dijo primero: «Hijo, tus pecados te son perdonados» (Mr 2:5). Los escribas entendieron muy bien lo que eso implicaba: «¿Quién puede perdonar pecados, sino sólo Dios?» (Mr 2:7). Cualquiera puede perdonar una ofensa contra sí mismo, pero Jesús perdonaba pecados cometidos contra Dios, como si Él fuera el ofendido. Para mostrar que tenía esa autoridad, sanó al paralítico delante de todos.',
        { h: 'La autoridad del Hijo' },
        'La tabla reúne otros ejemplos. Jesús se declaró Señor del día de reposo, que Dios había instituido. Dijo que en Él había algo mayor que el templo, la casa de Dios. Anunció que se sentaría en el trono de su gloria para juzgar a todas las naciones, y que el destino eterno de cada persona dependería de su relación con Él (Mt 7:21-23; 25:31-46). Prometió dar vida eterna. Exigió que lo amaran más que a padre y madre (Mt 10:37). Mientras los profetas decían «así dice Jehová», Jesús decía «De cierto os digo». Y, según Juan 5:23, pidió para sí la misma honra que se da al Padre.',
        { h: 'Las reacciones' },
        'Sus adversarios entendieron estas afirmaciones. Cuando sanó en sábado y llamó a Dios su propio Padre, procuraban matarlo, porque se hacía igual a Dios (Jn 5:18). Cuando dijo «Yo y el Padre uno somos», tomaron piedras para apedrearlo por blasfemia (Jn 10:30-33). Y en el juicio fue condenado a muerte porque, ante el sumo sacerdote, se identificó con el Hijo del Hombre que vendría en las nubes del cielo (Mr 14:61-64). Jesús no murió por decir que había que amar al prójimo, sino por lo que afirmaba de sí mismo.',
        { ir: { t: 'Ver «El Hijo es Dios» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#trinidad/5' } },
        { ejercicio: {
          pregunta: '¿Por qué los escribas acusaron a Jesús de blasfemia cuando perdonó al paralítico?',
          opciones: [
            { t: 'Porque perdonar pecados contra Dios es algo que solo Dios puede hacer.', ok: true, por_que: 'Ellos mismos lo dicen: «¿Quién puede perdonar pecados, sino sólo Dios?» (Mr 2:7).' },
            { t: 'Porque lo hizo en día de reposo.', ok: false, por_que: 'Marcos 2 no dice que fuera sábado; la objeción es otra.' },
            { t: 'Porque no ofreció un sacrificio en el templo.', ok: false, por_que: 'La objeción no fue ritual: fue que Jesús se atribuyó una prerrogativa divina.' }
          ],
          explicacion: 'Jesús reclamó para sí lo que solo Dios puede hacer, y lo confirmó con un milagro.'
        } }
      ],
      pensar: 'Jesús dijo «De cierto os digo» con una autoridad que ningún profeta se atribuyó. ¿Tienen sus palabras esa autoridad en tus decisiones de cada día?'
    },
    {
      id: 'yo-soy', n: 'Los siete «Yo soy» de Juan', ref: 'Juan 6:35; 8:12; 10:9, 11; 11:25; 14:6; 15:1', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los siete «Yo soy» con imagen',
          cab: ['Yo soy…', 'Texto', 'Contexto', 'Promesa'],
          filas: [
            ['el pan de vida', 'Jn 6:35', 'Después de multiplicar los panes; el maná del desierto', 'Nunca tendrá hambre'],
            ['la luz del mundo', 'Jn 8:12; 9:5', 'Fiesta de los Tabernáculos, con sus grandes candelabros; sana a un ciego', 'Tendrá la luz de la vida'],
            ['la puerta', 'Jn 10:7, 9', 'El redil de las ovejas', 'Será salvo y hallará pastos'],
            ['el buen pastor', 'Jn 10:11, 14', 'Los malos pastores de Israel (Ez 34)', 'Su vida da por las ovejas'],
            ['la resurrección y la vida', 'Jn 11:25', 'Ante la tumba de Lázaro', 'Aunque esté muerto, vivirá'],
            ['el camino, y la verdad, y la vida', 'Jn 14:6', 'La última cena; Tomás no sabe el camino', 'Nadie viene al Padre, sino por mí'],
            ['la vid verdadera', 'Jn 15:1, 5', 'Camino a Getsemaní; Israel era la viña de Dios (Is 5)', 'El que permanece en mí lleva mucho fruto']
          ],
          nota: 'Cada «Yo soy» responde a una necesidad humana: alimento, luz, salvación, cuidado, vida, dirección y fruto.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/lazaro.webp', alt: 'Ante la entrada de una tumba excavada en la roca en Betania, con la piedra removida, Lázaro, vivo y envuelto en vendas de lino, aparece en la abertura; Jesús, de espaldas, alza la mano frente a la tumba, y Marta y María, abrazadas, lloran de asombro junto a un grupo de vecinos', pie: '«Yo soy la resurrección y la vida» (Jn 11:25): Jesús lo dijo y lo demostró ante la tumba de Lázaro.', origen: 'ia', foco: '20% 40%' }
      ],
      texto: [
        'El evangelio de Juan registra siete afirmaciones de Jesús que comienzan con «Yo soy» y terminan con una imagen tomada de la vida diaria o de la historia de Israel. Cada una revela algo de quién es Jesús y de lo que da a quien cree en Él. La tabla las reúne.',
        { h: 'Pan, luz y puerta' },
        'Después de alimentar a cinco mil personas, la multitud le recordó que Moisés les había dado maná en el desierto. Jesús respondió: «Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre» (Jn 6:35). Él es lo que el maná prefiguraba: el alimento del alma. En la fiesta de los Tabernáculos, cuando grandes candelabros iluminaban el templo, dijo: «Yo soy la luz del mundo» (Jn 8:12), y luego dio vista a un ciego de nacimiento. Y cuando habló del redil, se presentó como la puerta: no una de muchas, sino la única entrada por la que las ovejas son salvas.',
        { h: 'Pastor, resurrección y camino' },
        'Ezequiel había denunciado a los pastores de Israel que se apacentaban a sí mismos, y Dios prometió que Él mismo buscaría a sus ovejas (Ez 34:11). Jesús dijo: «Yo soy el buen pastor; el buen pastor su vida da por las ovejas» (Jn 10:11). Ante Marta, que lloraba a su hermano, dijo: «Yo soy la resurrección y la vida» (Jn 11:25), y llamó a Lázaro fuera de la tumba. En la última cena, cuando Tomás confesó que no sabía el camino, respondió: «Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí» (Jn 14:6).',
        { h: 'La vid' },
        'Israel era la viña que Dios había plantado y que dio uvas silvestres (Is 5:1-7). Jesús dijo: «Yo soy la vid verdadera» (Jn 15:1). Él es el verdadero Israel, el que da el fruto que Dios esperaba, y sus discípulos son los pámpanos que dan fruto si permanecen en Él.',
        { h: 'Exclusivos y personales' },
        'Estas afirmaciones son exclusivas: Jesús no dice que muestra un camino, sino que Él es el camino. Y son personales: el pan se come, la puerta se cruza, en la vid se permanece. No basta con saber quién es Jesús; hay que venir a Él. La estación siguiente estudia otros «Yo soy» en Juan, sin imagen, que son aún más asombrosos.',
        { ejercicio: {
          pregunta: '¿Qué tienen en común los siete «Yo soy» con imagen?',
          opciones: [
            { t: 'Cada uno presenta a Jesús como la respuesta a una necesidad humana y llama a una relación personal con Él.', ok: true, por_que: 'Pan para el hambre, luz para la oscuridad, vida para la muerte: y en cada caso hay que venir, seguir, entrar o permanecer.' },
            { t: 'Son parábolas que Jesús contó sobre otras personas.', ok: false, por_que: 'No son relatos sobre otros: Jesús habla de sí mismo en primera persona.' },
            { t: 'Todos aparecen también en Mateo, Marcos y Lucas.', ok: false, por_que: 'Esta forma de «Yo soy» con imagen es propia del evangelio de Juan.' }
          ],
          explicacion: 'Jesús no solo da pan, luz y vida: Él es el pan, la luz y la vida.'
        } }
      ],
      pensar: '¿Cuál de los siete «Yo soy» describe mejor lo que necesitas de Jesús en esta etapa de tu vida? ¿Qué significa venir a Él en esa área?'
    },
    {
      id: 'yo-soy-absoluto', n: '«Antes que Abraham fuese, yo soy»', ref: 'Juan 8:24, 28, 56-59; 13:19; 18:4-6; Éxodo 3:14; Isaías 43:10-13', fecha: NT,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Abraham vuestro padre se gozó de que había de ver mi día; y lo vio, y se gozó. Entonces le dijeron los judíos: Aún no tienes cincuenta años, ¿y has visto a Abraham? Jesús les dijo: De cierto, de cierto os digo: Antes que Abraham fuese, yo soy.', ref: 'Juan 8:56-58' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Yo soy» sin imagen, en Juan',
          cab: ['Texto', 'Lo que dice Jesús', 'Eco en el Antiguo Testamento'],
          filas: [
            ['Jn 8:24', 'Si no creéis que yo soy, en vuestros pecados moriréis', 'Para que… entendáis que yo mismo soy (Is 43:10)'],
            ['Jn 8:28', 'Cuando hayáis levantado al Hijo del Hombre, entonces conoceréis que yo soy', 'Yo soy el mismo (Is 41:4; 48:12)'],
            ['Jn 8:58', 'Antes que Abraham fuese, yo soy', 'YO SOY EL QUE SOY (Éx 3:14)'],
            ['Jn 13:19', 'Os lo digo antes que suceda, para que cuando suceda, creáis que yo soy', 'Anuncio lo por venir desde el principio (Is 46:10)'],
            ['Jn 18:5-6', 'Yo soy… retrocedieron, y cayeron a tierra', 'La gloria de Dios hace caer a los hombres (Ez 1:28)']
          ],
          nota: 'En griego, «yo soy» es egó eimí. Así tradujo la Septuaginta el nombre de Dios en Éxodo 3:14 y las frases de Isaías.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/zarza.webp', alt: 'Moisés, descalzo y arrodillado, se cubre el rostro ante una zarza que arde sin consumirse', pie: 'En la zarza, Dios se presentó como «YO SOY» (Éx 3:14).', origen: 'ia' }
      ],
      texto: [
        'Además de los siete «Yo soy» con imagen, Juan registra otras frases en las que Jesús dice simplemente «yo soy», sin agregar nada. En español suenan como algo normal, pero en el contexto de Juan tienen un peso enorme, porque recuerdan el nombre con que Dios se reveló a Moisés.',
        { h: 'El nombre de la zarza' },
        'Cuando Moisés preguntó a Dios cuál era su nombre, Dios respondió: «YO SOY EL QUE SOY» (Éx 3:14). Siglos después, Dios repitió por Isaías una fórmula parecida para afirmar que solo Él es Dios: «para que me conozcáis y creáis, y entendáis que yo mismo soy; antes de mí no fue formado dios» (Is 43:10). La traducción griega que usaban los judíos en tiempos de Jesús, la Septuaginta, expresó esas frases con las palabras egó eimí, «yo soy». Son las mismas que Jesús usa en Juan.',
        { h: 'Antes que Abraham' },
        'En una discusión con líderes judíos, Jesús dijo que Abraham se había gozado de ver su día. Ellos le respondieron con burla: no tenía cincuenta años, ¿y había visto a Abraham? Entonces Jesús dijo: «De cierto, de cierto os digo: Antes que Abraham fuese, yo soy» (Jn 8:58). Si solo hubiera querido decir que existía antes que Abraham, habría dicho «yo era». Pero dijo «yo soy»: Abraham comenzó a existir; Jesús simplemente es, sin principio. Sus oyentes entendieron: tomaron piedras para arrojárselas, la pena por blasfemia (Jn 8:59; Lv 24:16).',
        { h: 'En Getsemaní' },
        'La noche del arresto, una compañía de soldados llegó al huerto con antorchas y armas. Jesús preguntó a quién buscaban. Respondieron: «A Jesús nazareno». Él dijo: «Yo soy». Juan cuenta que entonces «retrocedieron, y cayeron a tierra» (Jn 18:6). Por un instante, el que se entregaba voluntariamente dejó ver quién era. Después se dejó prender.',
        { h: 'Creer que Él es' },
        'Jesús advirtió: «si no creéis que yo soy, en vuestros pecados moriréis» (Jn 8:24). La fe que salva no es creer que Jesús fue un buen hombre o un gran profeta, sino creer que Él es quien dice ser.',
        { ejercicio: {
          pregunta: '¿Por qué los oyentes de Juan 8:58 quisieron apedrear a Jesús?',
          opciones: [
            { t: 'Porque al decir «yo soy» se atribuyó una existencia eterna y el nombre divino de Éxodo 3:14.', ok: true, por_que: 'La lapidación era la pena por blasfemia (Lv 24:16): entendieron que Jesús se hacía Dios.' },
            { t: 'Porque dijo que era mayor que Moisés.', ok: false, por_que: 'En ese pasaje la comparación es con Abraham, y la reacción viene inmediatamente después del «yo soy».' },
            { t: 'Porque dijo que tenía menos de cincuenta años.', ok: false, por_que: 'Eso lo dijeron ellos, burlándose de Él.' }
          ],
          explicacion: 'Jesús no dijo «yo era antes que Abraham», sino «yo soy»: la forma de hablar de Dios.'
        } }
      ],
      pensar: 'Los soldados cayeron a tierra ante el «Yo soy» de Jesús, y aun así Él se dejó llevar. ¿Qué te dice eso sobre la libertad y el amor con que fue a la cruz?'
    },
    {
      id: 'titulos', n: 'Los títulos de Jesús', ref: 'Mateo 1:21-23; 16:16; Marcos 10:45; 14:61-62; Daniel 7:13-14; Romanos 10:9; Filipenses 2:11', fecha: NT,
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los títulos principales',
          cab: ['Título', 'Significado', 'Texto clave'],
          filas: [
            ['Jesús', 'Forma griega de Josué, «Jehová salva»', 'Él salvará a su pueblo de sus pecados (Mt 1:21)'],
            ['Cristo, Mesías', 'Ungido: el rey, sacerdote y profeta esperado', 'Tú eres el Cristo (Mt 16:16)'],
            ['Hijo del Hombre', 'El título que Jesús prefería: hombre humilde y a la vez rey celestial de Daniel 7', 'Vino… para dar su vida en rescate (Mr 10:45)'],
            ['Hijo de Dios', 'Relación única y eterna con el Padre', 'Mi Hijo amado (Mt 3:17); el unigénito (Jn 3:16)'],
            ['Señor (Kýrios)', 'El nombre con que la Septuaginta traduce Jehová', 'Jesucristo es el Señor (Fil 2:11)'],
            ['Hijo de David', 'El heredero del trono prometido', 'Hijo de David, ten misericordia de mí (Mr 10:47)'],
            ['Emanuel', 'Dios con nosotros', 'Mt 1:23; Is 7:14'],
            ['Cordero de Dios', 'El sacrificio que quita el pecado', 'He aquí el Cordero de Dios (Jn 1:29)'],
            ['Verbo, Lógos', 'La Palabra que revela a Dios', 'Jn 1:1, 14; Ap 19:13']
          ],
          nota: 'Hay muchos más: Salvador, Rey de reyes, el Santo, el Alfa y la Omega, el León de Judá, la Estrella resplandeciente de la mañana.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../daniel/img/dan-anciano-dias.webp', alt: 'Visión del Anciano de días sentado en un trono de fuego', pie: 'Daniel vio a «uno como un hijo de hombre» que venía con las nubes hasta el Anciano de días (Dn 7:13).', origen: 'ia' }
      ],
      texto: [
        'En la Biblia, un nombre o un título dice algo de quien lo lleva. Jesús recibe decenas de títulos en el Nuevo Testamento. La tabla reúne los principales; esta estación se detiene en cuatro.',
        { h: 'Cristo' },
        'Cristo no es un apellido, sino un título: el Ungido, el Mesías prometido. Cuando Pedro confesó «Tú eres el Cristo» (Mr 8:29), estaba diciendo que Jesús era el rey esperado por Israel. Curiosamente, Jesús pidió a sus discípulos que no lo divulgaran (Mr 8:30), porque muchos esperaban un Mesías político que expulsara a los romanos. Jesús tenía que enseñarles primero que el Mesías debía sufrir.',
        { h: 'Hijo del Hombre' },
        'Era el título que Jesús usaba con más frecuencia para hablar de sí mismo, más de ochenta veces en los evangelios. Podía significar simplemente «un ser humano», y así velaba su identidad. Pero Jesús lo llenó con el sentido de Daniel 7, donde «uno como un hijo de hombre» viene con las nubes del cielo hasta el Anciano de días y recibe un reino eterno sobre todos los pueblos (Dn 7:13-14). En el juicio, Jesús lo dijo sin velos: «veréis al Hijo del Hombre sentado a la diestra del poder de Dios, y viniendo en las nubes del cielo» (Mr 14:62). El sumo sacerdote rasgó sus vestiduras. Y Jesús unió a ese rey glorioso con el siervo que sufre: «el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos» (Mr 10:45).',
        { h: 'Hijo de Dios' },
        'En el Antiguo Testamento, Israel y el rey podían ser llamados hijos de Dios en un sentido amplio. Pero Jesús es el Hijo en un sentido único: el unigénito (Jn 3:16), que conoce al Padre como nadie (Mt 11:27) y que comparte su naturaleza. Por eso, cuando Jesús llamaba a Dios su propio Padre, sus adversarios entendían que se hacía igual a Dios (Jn 5:18). Dios y la Trinidad estudia lo que significa que sea Hijo sin ser creado.',
        { h: 'Señor' },
        'La palabra griega Kýrios podía usarse como un trato de respeto, como «señor» en español. Pero la Septuaginta la usaba para traducir el nombre de Dios, Jehová. Cuando la iglesia confesaba «Jesucristo es el Señor» (Fil 2:11), estaba aplicando a Jesús el nombre de Dios. Pablo cita Joel 2:32, «todo aquel que invocare el nombre del Señor será salvo», refiriéndose a Jesús (Ro 10:9-13). Por eso, nadie puede llamar a Jesús Señor sino por el Espíritu Santo (1 Co 12:3).',
        { ejercicio: {
          pregunta: '¿Por qué el título «Hijo del Hombre» no se refiere solo a la humanidad de Jesús?',
          opciones: [
            { t: 'Porque Jesús lo usa con el sentido de Daniel 7, donde el hijo de hombre recibe un reino eterno sobre todos los pueblos.', ok: true, por_que: 'En Marcos 14:62 Jesús une el título con las nubes del cielo y la diestra de Dios, como en Daniel.' },
            { t: 'Porque en la Biblia «hombre» siempre significa Dios.', ok: false, por_que: 'La expresión puede significar simplemente «ser humano»; su peso viene del uso de Daniel 7.' },
            { t: 'Porque nunca lo usó para hablar de su sufrimiento.', ok: false, por_que: 'Lo usó muchas veces para anunciar su pasión, como en Marcos 10:45.' }
          ],
          explicacion: 'El Hijo del Hombre es a la vez el siervo que da su vida y el rey celestial que viene con las nubes.'
        } }
      ],
      pensar: 'Llamar «Señor» a Jesús es reconocer su divinidad y someterse a su autoridad. ¿Hay alguna área de tu vida donde lo llamas Señor con los labios, pero no con los hechos (Lc 6:46)?'
    },
    {
      id: 'dos-naturalezas', n: 'Dos naturalezas, una persona', ref: 'Juan 1:14; Romanos 1:3-4; 9:5; Filipenses 2:6-7; Colosenses 2:9; 1 Timoteo 2:5', fecha: NT,
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dos-naturalezas.svg', alt: 'Esquema: una sola persona, el Hijo eterno, con dos naturalezas, divina y humana, unidas sin confusión, sin cambio, sin división y sin separación, y los cuatro errores que la iglesia rechazó', pie: 'La fórmula del Concilio de Calcedonia (451) y los errores que excluye.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que pertenece a cada naturaleza, en la misma persona',
          cab: ['Como hombre', 'Como Dios'],
          filas: [
            ['Durmió en la barca (Mr 4:38)', 'Calmó el viento y el mar (Mr 4:39)'],
            ['Tuvo hambre (Mt 21:18)', 'Alimentó a cinco mil (Mt 14:21)'],
            ['Lloró ante la tumba de Lázaro (Jn 11:35)', 'Resucitó a Lázaro (Jn 11:43-44)'],
            ['Nació en Belén (Mt 2:1)', 'Sus salidas son desde la eternidad (Mi 5:2)'],
            ['Murió en la cruz (Jn 19:30)', 'Tiene poder para volver a tomar su vida (Jn 10:18)'],
            ['Del linaje de David según la carne (Ro 1:3)', 'Dios sobre todas las cosas (Ro 9:5)']
          ],
          nota: 'No hay dos Jesús: el mismo que durmió es el que calmó la tormenta.'
        } }
      ],
      texto: [
        'Si Jesús es verdadero Dios y verdadero hombre, surge una pregunta: ¿cómo se relacionan las dos cosas? ¿Hay dos personas en Jesús? ¿Se mezclaron lo divino y lo humano en algo intermedio? La iglesia tardó siglos en encontrar las palabras, y la estación siguiente cuenta esa historia. Aquí se presenta el resultado, que los teólogos llaman la unión hipostática, de la palabra griega hipóstasis, «persona».',
        { h: 'Una sola persona' },
        'En Jesús hay una sola persona: el Hijo eterno de Dios. No hay un hombre Jesús y, al lado, un Hijo de Dios que lo habita. El que nació en Belén es el mismo que estaba con Dios en el principio. Por eso los evangelios hablan siempre de un solo sujeto: el mismo Jesús que duerme en la barca, se levanta y reprende al viento. La tabla muestra esos contrastes. No dice que una parte de Jesús durmió y otra calmó el mar, sino que Jesús, el único, hizo las dos cosas.',
        { h: 'Dos naturalezas' },
        'Esa única persona tiene dos naturalezas completas: la divina, que tuvo siempre, y la humana, que tomó en la encarnación. Naturaleza significa el conjunto de lo que hace que algo sea lo que es. Jesús tiene todo lo que hace a Dios ser Dios, porque en Él habita corporalmente toda la plenitud de la Deidad (Col 2:9). Y tiene todo lo que hace al hombre ser hombre: cuerpo, alma, mente, emociones y voluntad humana. Por eso Pablo puede decir en una misma frase que Cristo vino de Israel «según la carne» y que «es Dios sobre todas las cosas» (Ro 9:5).',
        { h: 'Las cuatro negaciones' },
        'En el año 451, el Concilio de Calcedonia confesó que Cristo es reconocido en dos naturalezas «sin confusión, sin cambio, sin división, sin separación». Las dos primeras palabras protegen la distinción: la divinidad no se convirtió en humanidad ni se mezclaron en una tercera cosa. Las dos últimas protegen la unidad: no son dos personas ni pueden separarse. La misma definición dice que Cristo es perfecto en divinidad y perfecto en humanidad, con alma racional y cuerpo. El esquema muestra los errores que así quedan excluidos.',
        'Esto es un misterio, y conviene reconocerlo con humildad. La fórmula de Calcedonia no explica cómo ocurre la unión; pone límites para no decir algo falso. Como un cerco alrededor de un pozo profundo, no muestra el fondo, pero evita que uno caiga.',
        { h: 'Por qué importa' },
        'Si Jesús fuera solo Dios, no podría morir por los hombres. Si fuera solo hombre, su muerte no tendría valor infinito. Si fueran dos personas, la que murió en la cruz no sería Dios. Solo una persona divina con naturaleza humana puede ser el «solo mediador entre Dios y los hombres, Jesucristo hombre» (1 Ti 2:5).',
        { ejercicio: {
          pregunta: 'Según la doctrina bíblica, ¿quién murió en la cruz?',
          opciones: [
            { t: 'El Hijo eterno de Dios, en su naturaleza humana.', ok: true, por_que: 'Una sola persona, el Hijo, murió según la carne; por eso Hechos 20:28 habla de la iglesia que Dios ganó «por su propia sangre».' },
            { t: 'Solo el hombre Jesús, mientras el Hijo de Dios se había apartado de él.', ok: false, por_que: 'Eso divide a Cristo en dos personas, el error que la iglesia rechazó en Éfeso (431).' },
            { t: 'La naturaleza divina, que murió y dejó de existir por tres días.', ok: false, por_que: 'Dios es inmortal (1 Ti 6:16). El Hijo murió en su humanidad: su cuerpo y su alma se separaron.' }
          ],
          explicacion: 'Lo que hace una naturaleza lo hace la persona: por eso podemos decir que el Señor de la gloria fue crucificado (1 Co 2:8).'
        } }
      ],
      pensar: 'El mismo que tuvo hambre multiplicó el pan. ¿Cómo te ayuda saber que tu Salvador es a la vez plenamente poderoso y plenamente comprensivo?'
    },
    {
      id: 'controversias', n: 'Las controversias: de los docetas a Calcedonia', ref: '1 Juan 4:2-3; 2 Juan 7; Colosenses 2:8-9; Juan 1:14',
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Siglos I y II: los docetas niegan que Jesús tuviera un cuerpo real; los ebionitas, que fuera Dios.', fecha: [90, 200],
            estado: { view: ORIENTE, capas: IMP, lugares: ['efeso', 'antioquia', 'alejandria', 'jerusalen'] } },
          { t: '325, Nicea: el Hijo es «de la misma sustancia» que el Padre, contra Arrio.', fecha: 325,
            estado: { view: ORIENTE, capas: IMP, lugares: ['nicea', 'alejandria'] } },
          { t: '381, Constantinopla: Cristo tiene un alma y una mente humanas, contra Apolinar.', fecha: 381,
            estado: { view: ORIENTE, capas: IMP, lugares: ['constantinopla', 'h-laodicea-siria'] } },
          { t: '431, Éfeso: Cristo es una sola persona, contra la enseñanza atribuida a Nestorio.', fecha: 431,
            estado: { view: ORIENTE, capas: IMP, lugares: ['efeso', 'constantinopla', 'alejandria', 'antioquia'] } },
          { t: '451, Calcedonia: una persona en dos naturalezas, contra Eutiques.', fecha: 451,
            estado: { view: ORIENTE, capas: IMP, lugares: ['h-calcedonia', 'constantinopla', 'roma'] } }
        ] },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Errores sobre Cristo y respuesta de la iglesia',
          cab: ['Error', 'Qué enseñaba', 'Respuesta'],
          filas: [
            ['Docetismo (siglos I–II)', 'Jesús solo parecía hombre; su cuerpo era una apariencia', '1 Jn 4:2-3; Ignacio de Antioquía'],
            ['Ebionismo (siglo II)', 'Jesús era solo un hombre justo, adoptado por Dios en el bautismo', 'Jn 1:1; Ireneo de Lyon'],
            ['Arrianismo (siglo IV)', 'El Hijo es la primera y más alta criatura', 'Nicea (325)'],
            ['Apolinarismo (siglo IV)', 'El Verbo ocupaba el lugar de la mente humana de Jesús', 'Constantinopla (381)'],
            ['Nestorianismo (siglo V)', 'Dos personas unidas: el Hijo de Dios y el hombre Jesús', 'Éfeso (431)'],
            ['Eutiquianismo (siglo V)', 'Después de la unión, una sola naturaleza mezclada', 'Calcedonia (451)']
          ],
          nota: 'El nestorianismo y el eutiquianismo se conocen sobre todo por sus adversarios; se discute cuánto enseñaron Nestorio y Eutiques lo que se les atribuye.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/calcedonia.webp', alt: 'Cientos de obispos con túnicas claras y mantos oscuros reunidos en una gran basílica con columnas de mármol; en el centro, un obispo anciano lee de pie, ante un atril, una declaración escrita en un rollo, y junto a una mesa se sientan los comisionados del emperador', pie: 'En Calcedonia, frente a Constantinopla, unos quinientos obispos confesaron a Cristo en dos naturalezas y una persona.', origen: 'ia' }
      ],
      texto: [
        'Desde el principio hubo quienes enseñaban un Cristo distinto del de los apóstoles. Los errores sobre su persona siempre van hacia uno de dos lados: niegan su divinidad o niegan su humanidad. Y cuando ambas se aceptan, la dificultad está en cómo se unen. El mapa recorre los pasos principales y la tabla los resume.',
        { h: 'Los primeros siglos' },
        'Ya en el Nuevo Testamento aparece el docetismo, de una palabra griega que significa «parecer». Influidos por la idea griega de que la materia es mala, algunos enseñaban que el Hijo de Dios no pudo tener un cuerpo real: solo parecía hombre. Juan responde que el que no confiesa que Jesucristo ha venido en carne no es de Dios (1 Jn 4:2-3). Hacia el año 110, Ignacio de Antioquía, camino al martirio, escribió que si Cristo solo había sufrido en apariencia, él estaba encadenado en vano. En el extremo opuesto, los ebionitas, un grupo judeocristiano, enseñaban que Jesús era un hombre justo al que Dios adoptó como Hijo en su bautismo.',
        { h: 'Nicea y Constantinopla' },
        'En el siglo IV, Arrio enseñó que el Hijo era la primera criatura, y el Concilio de Nicea (325) confesó que es de la misma sustancia que el Padre. Esa historia se cuenta en Dios y la Trinidad. Poco después, Apolinar, obispo de Laodicea de Siria, defendió la divinidad de Cristo, pero enseñó que el Verbo ocupaba en Jesús el lugar de la mente humana. Gregorio Nacianceno le respondió con un principio que se hizo famoso: lo que no fue asumido no fue sanado. Si Cristo no tuvo una mente humana, no salvó nuestra mente. El Concilio de Constantinopla (381) rechazó esa enseñanza.',
        { h: 'Éfeso y Calcedonia' },
        'En el siglo V, la discusión se centró en la unión. A Nestorio, patriarca de Constantinopla, se le acusó de dividir a Cristo en dos personas, el Hijo de Dios y el hombre Jesús, unidos solo por la voluntad. El Concilio de Éfeso (431) afirmó que Cristo es una sola persona. Allí se aprobó llamar a María Theotókos, «la que dio a luz a Dios», un título pensado para afirmar que el niño que nació de ella era Dios mismo, no para exaltar a María. Poco después, el monje Eutiques fue al otro extremo: después de la unión, dijo, en Cristo hay una sola naturaleza, en la que la humanidad se disolvió como una gota en el mar.',
        'En el año 451, unos quinientos obispos se reunieron en Calcedonia, frente a Constantinopla, al otro lado del Bósforo. Su definición, estudiada en la estación anterior, confesó a Cristo en dos naturalezas, sin confusión ni cambio, sin división ni separación. Las iglesias evangélicas aceptan la definición de Calcedonia porque resume con fidelidad lo que enseña la Escritura.',
        { ir: { t: 'Ver «Arrio y el Concilio de Nicea» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#historia/2' } },
        { ejercicio: {
          pregunta: '¿Qué quiso decir Gregorio Nacianceno con «lo que no fue asumido no fue sanado»?',
          opciones: [
            { t: 'Que si Cristo no tomó una humanidad completa, con mente y alma, no pudo salvar al hombre completo.', ok: true, por_que: 'Era su respuesta a Apolinar, que negaba la mente humana de Cristo.' },
            { t: 'Que Cristo no sanó a todos los enfermos de su tiempo.', ok: false, por_que: 'La frase no habla de los milagros, sino de la encarnación.' },
            { t: 'Que la naturaleza divina de Cristo necesitaba ser sanada.', ok: false, por_que: 'Dios no necesita sanidad: el argumento es sobre la humanidad que el Hijo tomó para salvarla.' }
          ],
          explicacion: 'Cristo tomó todo lo humano, menos el pecado, para redimir todo lo humano.'
        } }
      ],
      pensar: 'Los errores sobre Cristo casi siempre empiezan por quitar algo: su divinidad o su humanidad. ¿Por qué crees que es tan fácil caer en uno de los dos extremos?'
    },
    {
      id: 'errores-hoy', n: 'Errores sobre Cristo hoy', ref: '2 Corintios 11:3-4; 1 Juan 2:22-23; 4:1-3; Gálatas 1:6-9; Juan 8:24',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que enseñan sobre Jesús',
          cab: ['Grupo', 'Qué enseña sobre Jesús', 'Qué responde la Escritura'],
          filas: [
            ['Testigos de Jehová', 'Es el arcángel Miguel, la primera criatura de Jehová, «un dios»; murió en un madero y resucitó como espíritu; volvió de manera invisible en 1914', 'El Creador de todo (Jn 1:3); los ángeles le adoran (He 1:6); resucitó con su cuerpo (Lc 24:39)'],
            ['Iglesia de Jesucristo de los Santos de los Últimos Días (mormones)', 'Es el primogénito espiritual del Padre Celestial, un ser exaltado con cuerpo; todos los espíritus, incluido Lucifer, son hijos espirituales de ese Padre', 'El Creador no es hermano de una criatura (Col 1:16); hay un solo Dios (Is 43:10)'],
            ['Pentecostales unicitarios', 'Jesús es el Padre, el Hijo y el Espíritu; el Hijo es solo la humanidad de Jesús', 'El Hijo estaba con el Padre antes del mundo (Jn 17:5)'],
            ['Islam', 'Isa es un gran profeta, nacido de una virgen y Mesías, pero no Hijo de Dios; no fue crucificado, sino que así les pareció', 'Murió y resucitó (1 Co 15:3-4); es el Hijo (Mt 3:17)'],
            ['Nueva Era', 'Cristo es una conciencia o energía universal; Jesús fue un maestro que la alcanzó, como otros', 'Jesús es el Cristo (1 Jn 2:22); el único camino (Jn 14:6)'],
            ['Escepticismo popular', 'Jesús fue solo un buen maestro moral, y lo demás es leyenda', 'Afirmó ser Dios (Jn 8:58); la iglesia lo adoró desde el principio (Fil 2:6-11)']
          ],
          nota: 'Se describe la doctrina oficial de cada grupo, no a todos sus miembros. Los unicitarios se estudian también en Dios y la Trinidad.'
        } },
        { tipo: 'tabla', titulo: 'Fuentes', tabla: {
          titulo: 'Jesús en fuentes no cristianas del siglo I y II',
          cab: ['Autor', 'Obra y fecha', 'Qué dice, en resumen'],
          filas: [
            ['Flavio Josefo, historiador judío', 'Antigüedades judías 20.200, hacia 93', 'Menciona a Jacobo, hermano de Jesús llamado Cristo, ejecutado en Jerusalén en 62'],
            ['Flavio Josefo', 'Antigüedades judías 18.63-64', 'Describe a Jesús como maestro crucificado bajo Pilato; el párrafo tiene añadidos cristianos posteriores, pero la mayoría de los historiadores acepta un núcleo original'],
            ['Tácito, historiador romano', 'Anales 15.44, hacia 116', 'Cristo fue ejecutado por el procurador Poncio Pilato en tiempos de Tiberio'],
            ['Plinio el Joven, gobernador', 'Cartas 10.96, hacia 112', 'Los cristianos se reunían un día fijo y cantaban himnos a Cristo como a un dios']
          ],
          nota: 'Ningún historiador serio niega hoy que Jesús existió y fue crucificado bajo Pilato. La pregunta es quién era.'
        } }
      ],
      texto: [
        'Pablo temía que los corintios fueran engañados por alguien que les predicara «otro Jesús» (2 Co 11:4). Hoy también hay quienes hablan de Jesús con respeto, pero enseñan un Jesús distinto del de la Biblia. Esta estación describe lo que enseñan algunos grupos, según sus doctrinas oficiales y con respeto por sus miembros, muchos de los cuales son personas sinceras.',
        { h: 'Grupos que nacieron en el cristianismo' },
        'Los Testigos de Jehová enseñan que Jesús es el arcángel Miguel, la primera criatura de Jehová, por medio de la cual fue creado todo lo demás, y traducen Juan 1:1 «la Palabra era un dios». Enseñan también que murió en un madero, que resucitó como espíritu y que regresó de manera invisible en 1914. La Iglesia de Jesucristo de los Santos de los Últimos Días, conocida como iglesia mormona, enseña que Jesús es el primogénito espiritual del Padre Celestial, un ser exaltado que tiene cuerpo. Como enseña que todos los espíritus, incluido Lucifer, son hijos espirituales de ese Padre, en su doctrina Jesús es, en ese sentido, hermano espiritual de Lucifer. Los pentecostales unicitarios aceptan la divinidad de Jesús, pero niegan que el Hijo sea una persona distinta del Padre.',
        { h: 'Otras religiones y corrientes' },
        'El islam honra a Jesús, Isa, como un gran profeta nacido de una virgen y lo llama Mesías, pero niega que sea Hijo de Dios. El Corán dice que no lo mataron ni lo crucificaron, sino que así les pareció. Sin cruz no hay expiación, y sin resurrección no hay evangelio (1 Co 15:14). La Nueva Era, por su parte, separa a Jesús del Cristo: Cristo sería una conciencia universal que Jesús alcanzó y que cualquiera podría alcanzar. Juan responde: «¿Quién es el mentiroso, sino el que niega que Jesús es el Cristo?» (1 Jn 2:22).',
        { h: '¿Solo un buen maestro?' },
        'Mucha gente dice que Jesús fue un gran maestro moral, pero no Dios. El problema es que un buen maestro no afirma que perdona pecados, que existía antes de Abraham y que juzgará al mundo. Si Jesús dijo esas cosas y no eran verdad, no sería un buen maestro, sino un engañador o alguien que vivía fuera de la realidad. La única otra posibilidad es que dijera la verdad. El escritor británico C. S. Lewis popularizó este argumento en su libro Mero cristianismo.',
        'La segunda tabla muestra que historiadores judíos y romanos de los siglos I y II, que no eran cristianos, confirman que Jesús existió, que fue crucificado bajo Poncio Pilato y que sus seguidores lo adoraban como a Dios desde muy temprano.',
        { h: 'Cómo responder' },
        'Ante estas enseñanzas, el creyente no necesita miedo ni agresividad, sino conocimiento y amor. Pedro manda estar siempre preparados para presentar defensa, «con mansedumbre y reverencia» (1 P 3:15). La mejor preparación es conocer bien al Cristo de la Escritura.',
        { ir: { t: 'Ver «Errores que vuelven» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#historia/4' } },
        { ejercicio: {
          pregunta: 'Alguien te dice: «Jesús fue un gran maestro, pero nunca dijo ser Dios». ¿Cuál es la mejor respuesta?',
          opciones: [
            { t: 'Mostrar lo que Jesús afirmó de sí mismo, como perdonar pecados y decir «antes que Abraham fuese, yo soy», y cómo reaccionaron sus oyentes.', ok: true, por_que: 'Sus contemporáneos entendieron que se hacía igual a Dios (Jn 5:18; 10:33) y por eso lo acusaron de blasfemia.' },
            { t: 'Decirle que eso no se puede discutir y que debe creer sin preguntar.', ok: false, por_que: 'Pedro manda presentar defensa con razones (1 P 3:15), con mansedumbre.' },
            { t: 'Aceptar que fue solo un maestro, para no ofender.', ok: false, por_que: 'Jesús no dejó abierta esa posibilidad: un maestro que afirma ser Dios sin serlo no es un buen maestro.' }
          ],
          explicacion: 'La pregunta no es si Jesús fue bueno, sino si dijo la verdad sobre sí mismo.'
        } }
      ],
      pensar: 'Pablo temía que los creyentes fueran apartados de «la sincera fidelidad a Cristo» (2 Co 11:3). ¿Qué haces para conocer al Cristo de la Biblia lo suficiente como para reconocer a uno falso?'
    }
  ];

  window.__CRISTO.persona = persona;
})();
/* La persona y obra de Cristo · rutas IV. Profeta, sacerdote y rey y V. La cruz (ver encabezado en parte1.js) */
(() => {
  /* ---------------- IV. Profeta, sacerdote y rey ---------------- */
  const oficios = [
    {
      id: 'tres-oficios', n: 'Los tres oficios del Mesías', ref: 'Deuteronomio 18:15-18; Salmo 110:1-4; Zacarías 6:12-13; Hebreos 1:1-3',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-oficios.svg', alt: 'Esquema de los tres oficios de Cristo: profeta, sacerdote y rey, con lo que hizo en el pasado, lo que hace ahora y lo que hará', pie: 'Los tres oficios en el tiempo: lo que Cristo hizo, lo que hace y lo que hará.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres oficios ungidos en Israel',
          cab: ['Oficio', 'Función', 'Ejemplos en Israel', 'Cristo'],
          filas: [
            ['Profeta', 'Habla a los hombres de parte de Dios', 'Moisés, Samuel, Elías, Isaías', 'La Palabra hecha carne (Jn 1:14; He 1:1-2)'],
            ['Sacerdote', 'Representa a los hombres delante de Dios', 'Aarón y sus hijos', 'Se ofreció a sí mismo e intercede (He 7:25-27)'],
            ['Rey', 'Gobierna al pueblo en nombre de Dios', 'David, Josías, Ezequías', 'El Hijo de David que reinará para siempre (Lc 1:32-33)']
          ],
          nota: 'En Israel nadie podía tener los tres oficios: cuando el rey Uzías quiso ofrecer incienso, fue herido de lepra (2 Cr 26:16-21).'
        } }
      ],
      texto: [
        'En el antiguo Israel había tres clases de personas que eran ungidas con aceite para un servicio especial: los profetas, los sacerdotes y los reyes. Cada uno tenía una función distinta, como muestra la tabla. El profeta hablaba de parte de Dios al pueblo; el sacerdote se presentaba ante Dios en favor del pueblo; el rey gobernaba al pueblo en nombre de Dios. Desde la Reforma, los teólogos han usado estos tres oficios para ordenar la obra de Cristo, el Ungido por excelencia.',
        { h: 'Separados en Israel' },
        'En Israel estos oficios estaban separados con cuidado. Los sacerdotes venían de la tribu de Leví y de la familia de Aarón; los reyes, después de David, de la tribu de Judá. Un rey no podía ofrecer sacrificios: cuando Saúl lo hizo, perdió el reino (1 S 13:8-14), y cuando Uzías quiso quemar incienso en el templo, fue herido de lepra. Ninguno de ellos podía, además, cumplir su oficio de manera perfecta: los profetas eran hombres con debilidades, los sacerdotes tenían que ofrecer por sus propios pecados y los reyes, incluso los mejores, fallaron.',
        { h: 'Unidos en Cristo' },
        'Los profetas anunciaron a alguien que reuniría lo que estaba separado. Moisés anunció un profeta como él (Dt 18:15). El salmo 110 habla de un rey sentado a la diestra de Dios que es a la vez «sacerdote para siempre según el orden de Melquisedec» (Sal 110:4). Y Zacarías vio a un hombre llamado el Renuevo que edificaría el templo y se sentaría a gobernar en su trono, y habría consejo de paz entre ambos oficios (Zac 6:12-13). En Jesús se cumplen las tres líneas.',
        { h: 'Pasado, presente y futuro' },
        'El esquema muestra que los tres oficios no pertenecen solo al pasado. Como profeta, Jesús enseñó en la tierra y sigue hablando por su Palabra y su Espíritu. Como sacerdote, se ofreció una vez en la cruz y ahora intercede por nosotros. Como rey, venció en la cruz y la resurrección, reina ahora sobre su iglesia, y reinará visiblemente sobre la tierra cuando vuelva. Las tres estaciones siguientes estudian cada oficio.',
        'Los tres oficios también describen lo que necesitamos. Por la ignorancia, necesitamos un profeta que nos enseñe; por la culpa, un sacerdote que nos reconcilie; por la esclavitud del pecado, un rey que nos gobierne y nos libre.',
        { ejercicio: {
          pregunta: '¿Por qué es significativo que Cristo reúna los tres oficios?',
          opciones: [
            { t: 'Porque en Israel estaban separados y nadie podía ejercerlos todos ni cumplirlos con perfección.', ok: true, por_que: 'Saúl y Uzías fueron castigados por invadir el oficio sacerdotal; el Salmo 110 y Zacarías 6 anunciaban a alguien que los uniría.' },
            { t: 'Porque así cumplió con las tres tribus principales de Israel.', ok: false, por_que: 'Los oficios no se repartían en tres tribus: los profetas podían venir de cualquier tribu.' },
            { t: 'Porque Jesús fue ungido con aceite tres veces durante su ministerio.', ok: false, por_que: 'Jesús fue ungido con el Espíritu Santo, no con aceite ritual (Hch 10:38).' }
          ],
          explicacion: 'Lo que en Israel estaba repartido entre muchos y siempre incompleto, en Cristo está unido y es perfecto.'
        } }
      ],
      pensar: 'Necesitamos a Cristo como profeta que nos enseña, sacerdote que nos reconcilia y rey que nos gobierna. ¿Cuál de los tres te cuesta más aceptar en la práctica?'
    },
    {
      id: 'profeta', n: 'Profeta: Dios nos ha hablado por el Hijo', ref: 'Deuteronomio 18:15-19; Hebreos 1:1-2; Mateo 7:28-29; Lucas 13:33; Hechos 3:22-23; Juan 16:12-15',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-sermon-ladera.webp', alt: 'Jesús, de espaldas, enseña sentado en la ladera de un monte junto al mar de Galilea a una multitud', pie: 'La gente se admiraba de su doctrina, porque les enseñaba «como quien tiene autoridad» (Mt 7:29).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo;', ref: 'Hebreos 1:1-2' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cristo, el profeta como Moisés y mayor que él',
          cab: ['Moisés', 'Jesús'],
          filas: [
            ['Salvado de niño de la matanza ordenada por el faraón (Éx 1–2)', 'Salvado de niño de la matanza ordenada por Herodes (Mt 2)'],
            ['Cuarenta años en el desierto', 'Cuarenta días en el desierto'],
            ['Dio la ley desde el monte Sinaí', 'Enseñó desde un monte: «Pero yo os digo» (Mt 5:22)'],
            ['Dio maná del cielo', 'Es el pan de vida (Jn 6)'],
            ['Mediador del antiguo pacto', 'Mediador del nuevo pacto (He 9:15)'],
            ['Fiel como siervo en la casa de Dios', 'Fiel como Hijo sobre su casa (He 3:5-6)']
          ],
          nota: 'El paralelo es especialmente claro en Mateo, que escribe para lectores judíos.'
        } }
      ],
      texto: [
        'Moisés anunció a Israel: «Profeta de en medio de ti, de tus hermanos, como yo, te levantará Jehová tu Dios; a él oiréis» (Dt 18:15). Después de él surgieron muchos profetas, pero el libro de Deuteronomio termina diciendo que nunca más se levantó un profeta como Moisés, a quien Jehová conociera cara a cara (Dt 34:10). La promesa quedó abierta. En tiempos de Jesús, la gente preguntaba a Juan el Bautista si él era «el profeta» (Jn 1:21), y después de la multiplicación de los panes muchos dijeron de Jesús: «Este verdaderamente es el profeta que había de venir al mundo» (Jn 6:14). Pedro lo confirmó en el templo: Jesús es el profeta que Moisés anunció (Hch 3:22-26).',
        { h: 'Más que un profeta' },
        'Jesús hizo lo que hacían los profetas: anunció la Palabra de Dios, llamó al arrepentimiento, denunció la injusticia y predijo el futuro, incluida la destrucción del templo. Y fue tratado como los profetas: rechazado en su pueblo (Lc 4:24) y muerto en Jerusalén, que «matas a los profetas» (Mt 23:37). Pero Hebreos muestra la diferencia: Dios habló antes por los profetas, «en estos postreros días nos ha hablado por el Hijo» (He 1:2). Los profetas traían la palabra de Dios; Jesús es la Palabra de Dios. Los profetas decían «así dice Jehová»; Jesús decía «Pero yo os digo». Por eso la gente se admiraba, porque les enseñaba como quien tiene autoridad, y no como los escribas (Mt 7:29).',
        { h: 'La última palabra' },
        'Si Dios habló por el Hijo «en estos postreros días», el Hijo es la palabra final y suprema de Dios. No habrá otra revelación que lo supere ni lo corrija. Esto no niega los dones del Espíritu, que Jesús prometió y que siguen vigentes: el Espíritu de verdad guía a la verdad, pero no habla por su propia cuenta, sino que toma de lo de Cristo y lo hace saber (Jn 16:13-15). Toda profecía en la iglesia se juzga a la luz de la Palabra de Cristo. La relación entre el canon cerrado y los dones vigentes se estudia en el recurso La Palabra de Dios.',
        { h: 'Oírle' },
        'Moisés dijo «a él oiréis», y la voz del Padre en el monte de la transfiguración repitió lo mismo: «a él oíd» (Mt 17:5). Pedro advierte que quien no oiga a ese profeta será desarraigado del pueblo (Hch 3:23). El profeta sigue hablando hoy por medio de su Palabra.',
        { ejercicio: {
          pregunta: 'Según Hebreos 1:1-2, ¿en qué se diferencia Jesús de los profetas del Antiguo Testamento?',
          opciones: [
            { t: 'Los profetas traían la palabra de Dios; el Hijo es la palabra final y suprema de Dios.', ok: true, por_que: 'Dios habló «muchas veces y de muchas maneras» por los profetas, pero «en estos postreros días» por el Hijo.' },
            { t: 'Los profetas hablaban de juicio y Jesús solo de amor.', ok: false, por_que: 'Jesús también anunció juicio, por ejemplo sobre Jerusalén y sobre los que lo rechazan (Mt 23).' },
            { t: 'Jesús no hizo predicciones sobre el futuro, a diferencia de los profetas.', ok: false, por_que: 'Jesús predijo su muerte y resurrección, la caída del templo y su segunda venida.' }
          ],
          explicacion: 'En Cristo, Dios dijo todo lo que necesitamos saber para la salvación.'
        } }
      ],
      pensar: 'El Padre dijo de su Hijo: «a él oíd». ¿Qué espacio real tiene en tu semana escuchar lo que Cristo dice en su Palabra?'
    },
    {
      id: 'sacerdote', n: 'Sacerdote: el que ofrece y se ofrece', ref: 'Hebreos 4:14-16; 7:23-27; 9:11-14, 24-28; 10:11-14; Juan 17',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../sacerdocio/img/sac-velo.webp', alt: 'El gran velo del templo rasgado de arriba abajo, con la luz entrando al Lugar Santísimo', pie: 'Al morir Jesús, el velo del templo se rasgó «de arriba abajo» (Mt 27:51).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los sacerdotes de Aarón y Cristo',
          cab: ['Sacerdotes levíticos', 'Cristo'],
          filas: [
            ['Muchos, porque la muerte les impedía continuar (He 7:23)', 'Uno solo, que permanece para siempre (He 7:24)'],
            ['Ofrecían primero por sus propios pecados (He 7:27)', 'Santo, inocente, sin mancha (He 7:26)'],
            ['Ofrecían sangre de animales (He 9:13)', 'Ofreció su propia sangre (He 9:12)'],
            ['Cada día y cada año (He 10:11)', 'Una vez para siempre (He 10:12)'],
            ['Entraban al tabernáculo hecho de mano (He 9:24)', 'Entró en el cielo mismo (He 9:24)'],
            ['Se quedaban de pie: su trabajo nunca terminaba (He 10:11)', 'Se sentó a la diestra de Dios: su obra está terminada (He 10:12)']
          ],
          nota: 'El recurso El sacerdocio en Israel dedica una ruta a Cristo como sumo sacerdote.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'mas éste, por cuanto permanece para siempre, tiene un sacerdocio inmutable; por lo cual puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos. Porque tal sumo sacerdote nos convenía: santo, inocente, sin mancha, apartado de los pecadores, y hecho más sublime que los cielos; que no tiene necesidad cada día, como aquellos sumos sacerdotes, de ofrecer primero sacrificios por sus propios pecados, y luego por los del pueblo; porque esto lo hizo una vez para siempre, ofreciéndose a sí mismo.', ref: 'Hebreos 7:24-27' }
      ],
      texto: [
        'Un sacerdote es alguien que se presenta delante de Dios en favor de otros. En Israel, los sacerdotes ofrecían sacrificios para la expiación del pecado e intercedían por el pueblo. Una vez al año, en el Día de la Expiación, el sumo sacerdote entraba al Lugar Santísimo con sangre para rociarla sobre el propiciatorio (Lv 16). La carta a los Hebreos, escrita a creyentes judíos tentados a volver al templo, explica que todo eso era sombra de lo que Cristo haría.',
        { h: 'Sacerdote y sacrificio' },
        'La gran novedad es que Cristo es a la vez el sacerdote y el sacrificio. Los sacerdotes ofrecían animales; Cristo «se ofreció a sí mismo sin mancha a Dios» (He 9:14). Y lo hizo una sola vez. Hebreos insiste en ello: los sacerdotes ofrecían cada día los mismos sacrificios, que nunca pueden quitar los pecados, «pero Cristo, habiendo ofrecido una vez para siempre un solo sacrificio por los pecados, se ha sentado a la diestra de Dios» (He 10:12). En el tabernáculo no había sillas: el trabajo del sacerdote nunca terminaba. Cristo se sentó, porque su obra estaba consumada.',
        { h: 'Un sacerdocio mejor' },
        'Jesús no era de la tribu de Leví, sino de Judá. ¿Cómo puede ser sacerdote? Hebreos responde con el salmo 110: es sacerdote para siempre según el orden de Melquisedec, un sacerdocio anterior y superior al de Aarón. La tabla compara los dos. Los sacerdotes de Aarón morían; Cristo vive para siempre. Ellos ofrecían por sus propios pecados; Él no tenía pecado. Ellos entraban en un santuario terrenal; Él entró en el cielo mismo.',
        { h: 'El que intercede' },
        'La obra sacerdotal de Cristo no terminó en la cruz. Ahora está en el cielo «para presentarse ahora por nosotros ante Dios» (He 9:24), y «puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos» (He 7:25). Juan lo llama nuestro abogado para con el Padre (1 Jn 2:1). Por eso Hebreos invita: «Acerquémonos, pues, confiadamente al trono de la gracia» (He 4:16). El velo que separaba el Lugar Santísimo se rasgó cuando Jesús murió, y el camino a la presencia de Dios quedó abierto para todo creyente.',
        { ir: { t: 'Ver la ruta «Cristo, nuestro sumo sacerdote» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/2' } },
        { ejercicio: {
          pregunta: '¿Qué significa que Cristo «se ha sentado» a la diestra de Dios después de ofrecer su sacrificio (He 10:12)?',
          opciones: [
            { t: 'Que su sacrificio está terminado y no necesita repetirse.', ok: true, por_que: 'Los sacerdotes levíticos estaban siempre de pie, porque su trabajo no terminaba (He 10:11).' },
            { t: 'Que dejó de interceder por los creyentes.', ok: false, por_que: 'Hebreos 7:25 dice que vive siempre para interceder: lo terminado es el sacrificio, no la intercesión.' },
            { t: 'Que descansa hasta que llegue el momento de ofrecer otro sacrificio.', ok: false, por_que: 'Hebreos insiste en que se ofreció «una vez para siempre» (He 10:10-14).' }
          ],
          explicacion: 'La cruz fue suficiente: nadie puede añadirle nada, y nadie necesita repetirla.'
        } }
      ],
      pensar: 'Cristo vive para interceder por ti. ¿Cómo cambia tu manera de acercarte a Dios saber que tienes un sumo sacerdote que te comprende y que está orando por ti?'
    },
    {
      id: 'rey', n: 'Rey: el reino que vino y que vendrá', ref: 'Lucas 1:32-33; Mateo 4:17; 12:28; Juan 18:36; Colosenses 1:13; Hechos 1:6-7; 3:19-21; Apocalipsis 11:15; 20:4-6',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-reino.svg', alt: 'Línea del tiempo del reino de Cristo: prometido a David, anunciado por Jesús, rechazado por los líderes de Israel, presente en la iglesia en forma espiritual, y establecido visiblemente en el milenio y para siempre', pie: 'Las etapas del reino de Cristo, según la lectura premilenial.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-multitud-rey.webp', alt: 'Una multitud de galileos rodea a Jesús, de espaldas, con intención de hacerlo rey', pie: 'Después de la multiplicación de los panes, quisieron hacerlo rey por la fuerza, y Él se retiró (Jn 6:15).', origen: 'ia' }
      ],
      texto: [
        'El ángel Gabriel dijo a María que Dios daría a su hijo «el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin» (Lc 1:32-33). Jesús comenzó su ministerio anunciando: «Arrepentíos, porque el reino de los cielos se ha acercado» (Mt 4:17). Y murió bajo un letrero que decía «Este es Jesús, el Rey de los judíos» (Mt 27:37). ¿En qué sentido es Rey, y cuándo reina?',
        { h: 'El reino que llegó' },
        'Con Jesús, el reino de Dios irrumpió en la historia. Cuando echaba fuera demonios por el Espíritu de Dios, el reino había llegado (Mt 12:28). Pero no era el reino que muchos esperaban. Cuando la multitud quiso hacerlo rey por la fuerza, se retiró (Jn 6:15), y ante Pilato dijo: «Mi reino no es de este mundo» (Jn 18:36). Su reino no viene de este mundo ni se establece con sus métodos.',
        { h: 'El reino hoy' },
        'Hoy Cristo reina desde la diestra del Padre. Todo creyente ha sido trasladado al «reino de su amado Hijo» (Col 1:13). El reino está presente donde Cristo es obedecido como Señor y se manifiesta cuando el evangelio libera a los cautivos. Pero todavía no se ve en su plenitud: el mal sigue activo y Satanás todavía es el dios de este siglo (2 Co 4:4).',
        { h: 'El reino que vendrá' },
        'Antes de ascender, los discípulos preguntaron: «Señor, ¿restaurarás el reino a Israel en este tiempo?» (Hch 1:6). Jesús no les dijo que la pregunta estuviera equivocada, sino que no les tocaba saber cuándo. Pedro anunció después que el cielo debía recibir a Jesús «hasta los tiempos de la restauración de todas las cosas» (Hch 3:21). Cuando Cristo vuelva, los reinos del mundo vendrán a ser suyos (Ap 11:15), y reinará con los suyos mil años (Ap 20:4-6), antes del reino eterno.',
        { posturas: {
          titulo: '¿Es el reino de Cristo solo espiritual o también futuro y visible?',
          a: { n: 'Solo espiritual y presente', t: 'El amilenialismo enseña que el reino de Cristo es su gobierno espiritual desde el cielo y en la iglesia, y que los mil años de Apocalipsis 20 son símbolo de toda la era de la iglesia. Las promesas a Israel se cumplirían espiritualmente en la iglesia.' },
          b: { n: 'Presente en forma espiritual y futuro en forma visible', t: 'El premilenialismo enseña que el reino ya está presente en forma espiritual, pero que se establecerá visiblemente en la tierra cuando Cristo vuelva, con un reinado de mil años en el que se cumplirán las promesas hechas a Israel y a David.' },
          c: 'Este recurso sigue la segunda postura, en su forma dispensacionalista. Los profetas anunciaron un reino con paz entre las naciones y justicia en la tierra (Is 2:2-4; 11:1-9) que todavía no se ha visto. Jesús dijo a Jerusalén que no lo vería más hasta que dijera «Bendito el que viene en el nombre del Señor» (Mt 23:39): el rechazo de sus líderes no anuló la promesa, sino que la postergó. El recurso Los últimos tiempos estudia el milenio.'
        } },
        { ir: { t: 'Ver «El milenio» en Los últimos tiempos', a: '../../escatologia/#eventos/20' } }
      ],
      pensar: 'Si Cristo ya es Rey, su reino comienza en quienes lo obedecen. ¿Qué señales de su reinado se ven hoy en tu casa, tu trabajo y tu iglesia?'
    },
    {
      id: 'milagros', n: 'Sus milagros: señales del reino', ref: 'Mateo 11:2-6; Juan 2:11; 20:30-31; Hechos 2:22; Marcos 1:40-42; Lucas 7:11-17',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los milagros de Jesús por su clase',
          cab: ['Clase', 'Ejemplos', 'Qué muestran'],
          filas: [
            ['Sanidades', 'Ciegos, leprosos, paralíticos, la mujer del flujo de sangre', 'Compasión y poder sobre la enfermedad'],
            ['Liberaciones', 'El gadareno, la hija de la sirofenicia, el muchacho lunático', 'El reino de Dios vence al de Satanás (Mt 12:28)'],
            ['Sobre la naturaleza', 'Calma la tempestad, camina sobre el mar, multiplica panes', 'El Creador gobierna su creación'],
            ['Resurrecciones', 'La hija de Jairo, el hijo de la viuda de Naín, Lázaro', 'Señor de la vida y la muerte'],
            ['Señales de Juan', 'Siete señales, del agua en vino a Lázaro', 'Para que creáis que Jesús es el Cristo (Jn 20:31)']
          ],
          nota: 'Los evangelios registran unos treinta y cinco milagros, pero dicen que hubo muchos más (Jn 20:30; 21:25).'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../mundo-judio/img/mj-leproso.webp', alt: 'Jesús, de espaldas, extiende la mano y toca a un leproso arrodillado ante Él', pie: 'Jesús tocó al leproso, a quien nadie tocaba, y quedó limpio (Mr 1:41-42).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y al oír Juan, en la cárcel, los hechos de Cristo, le envió dos de sus discípulos, para preguntarle: ¿Eres tú aquel que había de venir, o esperaremos a otro? Respondiendo Jesús, les dijo: Id, y haced saber a Juan las cosas que oís y veis. Los ciegos ven, los cojos andan, los leprosos son limpiados, los sordos oyen, los muertos son resucitados, y a los pobres es anunciado el evangelio;', ref: 'Mateo 11:2-5' }
      ],
      texto: [
        'Cuando Juan el Bautista, preso en la fortaleza de Maqueronte, envió a preguntar si Jesús era el que había de venir, Jesús no respondió con un sí o un no. Mandó decirle lo que veían: «Los ciegos ven, los cojos andan, los leprosos son limpiados, los sordos oyen, los muertos son resucitados» (Mt 11:5). Juan conocía a Isaías, que había anunciado esas señales para los días del Mesías (Is 35:5-6; 61:1). Los milagros eran la respuesta.',
        { h: 'Señales' },
        'El evangelio de Juan llama a los milagros señales, porque señalan algo más allá de sí mismos. Al convertir el agua en vino en Caná, Jesús «manifestó su gloria; y sus discípulos creyeron en él» (Jn 2:11). Cada señal revela quién es Jesús: el que multiplica el pan es el pan de vida; el que da vista al ciego es la luz del mundo; el que resucita a Lázaro es la resurrección y la vida. Pedro dijo en Pentecostés que Jesús fue un varón aprobado por Dios «con las maravillas, prodigios y señales que Dios hizo entre vosotros por medio de él» (Hch 2:22).',
        { h: 'El reino en acción' },
        'Los milagros mostraban que el reino de Dios había llegado y estaba deshaciendo las obras del diablo. La enfermedad, la posesión demoníaca y la muerte son consecuencias de un mundo caído; en los milagros de Jesús se ve un anticipo de lo que será la creación restaurada. Por eso no son solo pruebas de su poder, sino también expresiones de su compasión. Jesús tocó al leproso, a quien la ley mandaba mantener aparte; se detuvo ante el cortejo fúnebre de Naín porque se compadeció de la madre viuda (Lc 7:13); lloró con Marta y María antes de resucitar a su hermano.',
        { h: 'Los milagros hoy' },
        'Jesús envió a sus discípulos a predicar el reino y sanar enfermos (Lc 9:2), y prometió que los que creyeran harían las obras que Él hacía (Jn 14:12). El libro de Hechos muestra a la iglesia haciendo señales en el nombre de Jesús. La línea pentecostal clásica cree que el Señor sigue sanando y obrando milagros por el poder del Espíritu, como parte del evangelio. Al mismo tiempo, los milagros no son un espectáculo: Jesús se negó a hacer señales para satisfacer la curiosidad de Herodes o de los fariseos (Lc 23:8-9; Mt 12:38-39), y sus milagros siempre apuntaban a Él y llamaban a la fe.',
        { ejercicio: {
          pregunta: '¿Por qué Jesús respondió a Juan el Bautista describiendo sus milagros?',
          opciones: [
            { t: 'Porque esos milagros eran las señales que Isaías había anunciado para los días del Mesías.', ok: true, por_que: 'Isaías 35:5-6 y 61:1 hablan de ciegos que ven, cojos que saltan y buenas nuevas a los pobres.' },
            { t: 'Porque no quería admitir que era el Mesías.', ok: false, por_que: 'Su respuesta sí afirma que es el Mesías, pero de una manera que Juan, conocedor de Isaías, entendería.' },
            { t: 'Porque Juan dudaba de que Jesús pudiera hacer milagros.', ok: false, por_que: 'La pregunta de Juan era si Jesús era «aquel que había de venir», no si podía hacer milagros.' }
          ],
          explicacion: 'Los milagros de Jesús cumplen las profecías y muestran que el reino de Dios llegó con Él.'
        } }
      ],
      pensar: 'Los milagros de Jesús eran poder y compasión juntos. ¿Oras por los enfermos con fe en su poder y con la misma compasión que Él tenía?'
    },
    {
      id: 'transfiguracion', n: 'La transfiguración', ref: 'Mateo 17:1-9; Marcos 9:2-8; Lucas 9:28-36; 2 Pedro 1:16-18',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/transfiguracion.webp', alt: 'En la cima de un monte, de noche, Jesús de espaldas resplandece con vestidos blancos como la luz; a sus lados se distinguen Moisés y Elías envueltos en luz, y en primer plano Pedro, Jacobo y Juan, postrados, se cubren los ojos', pie: 'En el monte, el rostro de Jesús resplandeció «como el sol» (Mt 17:2).', origen: 'ia', foco: '50% 40%' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Seis días después, Jesús tomó a Pedro, a Jacobo y a Juan su hermano, y los llevó aparte a un monte alto; y se transfiguró delante de ellos, y resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz. Y he aquí les aparecieron Moisés y Elías, hablando con él. Entonces Pedro dijo a Jesús: Señor, bueno es para nosotros que estemos aquí; si quieres, hagamos aquí tres enramadas: una para ti, otra para Moisés, y otra para Elías. Mientras él aún hablaba, una nube de luz los cubrió; y he aquí una voz desde la nube, que decía: Este es mi Hijo amado, en quien tengo complacencia; a él oíd. Al oír esto los discípulos, se postraron sobre sus rostros, y tuvieron gran temor. Entonces Jesús se acercó y los tocó, y dijo: Levantaos, y no temáis. Y alzando ellos los ojos, a nadie vieron sino a Jesús solo. Cuando descendieron del monte, Jesús les mandó, diciendo: No digáis a nadie la visión, hasta que el Hijo del Hombre resucite de los muertos.', ref: 'Mateo 17:1-9' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que vieron y oyeron',
          cab: ['Detalle', 'Significado'],
          filas: [
            ['Su rostro y sus vestidos resplandecieron', 'Se dejó ver la gloria que tenía y que velaba su humanidad'],
            ['Moisés y Elías', 'La ley y los profetas dan testimonio de Él'],
            ['Hablaban de su partida en Jerusalén (Lc 9:31)', 'La gloria pasa por la cruz'],
            ['La nube de luz', 'La presencia de Dios, como en el Sinaí y el tabernáculo'],
            ['Este es mi Hijo amado… a él oíd', 'Superior a Moisés y a Elías: el profeta a quien hay que oír'],
            ['Jesús solo', 'Moisés y Elías desaparecen; queda Cristo']
          ],
          nota: 'La tradición ubica el monte en el Tabor; muchos estudiosos prefieren el Hermón, cerca de Cesarea de Filipo.'
        } }
      ],
      texto: [
        'Seis días después de la confesión de Pedro en Cesarea de Filipo, Jesús llevó a Pedro, a Jacobo y a Juan a un monte alto. Allí «se transfiguró delante de ellos, y resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz» (Mt 17:2). La palabra griega es la misma de la que viene «metamorfosis»: un cambio de forma visible.',
        { h: 'La gloria velada' },
        'Durante su vida terrenal, la gloria del Hijo estaba velada por su humanidad común. La gente veía a un artesano de Nazaret. En el monte, por un momento, los tres discípulos vieron lo que había detrás del velo. Juan recordaría después: «vimos su gloria, gloria como del unigénito del Padre» (Jn 1:14). Y Pedro escribiría que no siguió fábulas artificiosas, sino que vio con sus propios ojos su majestad en el monte santo (2 P 1:16-18).',
        { h: 'Moisés y Elías' },
        'Junto a Jesús aparecieron Moisés y Elías. Moisés representaba la ley y Elías a los profetas: toda la Escritura de Israel daba testimonio de Él. Los dos habían tenido encuentros con Dios en un monte, el Sinaí u Horeb, y ninguno de los dos tenía una tumba conocida. Lucas agrega un detalle importante: hablaban de su partida, literalmente su «éxodo», que iba a cumplir en Jerusalén (Lc 9:31). La gloria del monte no evitaba la cruz, sino que la anunciaba.',
        { h: '«A él oíd»' },
        'Pedro, sin saber qué decir, propuso hacer tres enramadas, una para cada uno, como si Moisés, Elías y Jesús estuvieran al mismo nivel. Entonces una nube de luz los cubrió y la voz del Padre dijo: «Este es mi Hijo amado, en quien tengo complacencia; a él oíd» (Mt 17:5). Cuando alzaron los ojos, «a nadie vieron sino a Jesús solo» (Mt 17:8). La ley y los profetas cumplieron su papel de señalarlo; ahora la voz que hay que oír es la del Hijo.',
        { h: 'Un anticipo' },
        'Jesús había dicho justo antes que algunos de sus discípulos no morirían hasta ver al Hijo del Hombre viniendo en su reino (Mt 16:28). La transfiguración fue un anticipo de la gloria con que volverá. Y es también una promesa para los creyentes: Pablo usa la misma palabra para decir que somos transformados de gloria en gloria en su misma imagen (2 Co 3:18), y que Cristo transformará nuestro cuerpo para que sea semejante al cuerpo de su gloria (Fil 3:21).'
      ],
      pensar: 'Los discípulos bajaron del monte y encontraron un muchacho atormentado y discípulos impotentes (Mt 17:14-21). ¿Cómo te prepara la presencia de Dios para servir en los valles de la vida?'
    }
  ];

  /* ---------------- V. La cruz ---------------- */
  const cruz = [
    {
      id: 'necesaria', n: '¿Por qué tenía que morir Cristo?', ref: 'Marcos 8:31; Lucas 24:26; Romanos 3:23-26; 6:23; Hebreos 9:22; Mateo 26:36-44',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/getsemani.webp', alt: 'De noche, entre olivos antiguos de tronco retorcido, Jesús, de espaldas, ora arrodillado con las manos sobre una roca; a lo lejos, bajo la luna llena, se ven las murallas de Jerusalén y el templo, y más cerca tres discípulos se han dormido sentados junto a un olivo', pie: 'En Getsemaní: «Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú» (Mt 26:39).', origen: 'ia', foco: '50% 55%' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'por cuanto todos pecaron, y están destituidos de la gloria de Dios, siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús, a quien Dios puso como propiciación por medio de la fe en su sangre, para manifestar su justicia, a causa de haber pasado por alto, en su paciencia, los pecados pasados, con la mira de manifestar en este tiempo su justicia, a fin de que él sea el justo, y el que justifica al que es de la fe de Jesús.', ref: 'Romanos 3:23-26' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Por qué la cruz era necesaria',
          cab: ['Porque…', 'Texto'],
          filas: [
            ['Todos pecaron', 'Todos pecaron, y están destituidos de la gloria de Dios (Ro 3:23)'],
            ['El pecado merece la muerte', 'La paga del pecado es muerte (Ro 6:23)'],
            ['Dios es justo y no puede pasar por alto el pecado', 'A fin de que él sea el justo, y el que justifica (Ro 3:26)'],
            ['Sin sangre no hay perdón', 'Sin derramamiento de sangre no se hace remisión (He 9:22)'],
            ['Los sacrificios de animales no bastaban', 'La sangre de los toros… no puede quitar los pecados (He 10:4)'],
            ['Dios lo había decidido y anunciado', 'Le era necesario al Hijo del Hombre padecer mucho (Mr 8:31)']
          ],
          nota: 'La palabra «necesario» aparece una y otra vez cuando Jesús habla de su muerte.'
        } }
      ],
      texto: [
        'Desde la confesión de Pedro, Jesús comenzó a enseñar a sus discípulos que «le era necesario al Hijo del Hombre padecer mucho… y ser muerto, y resucitar después de tres días» (Mr 8:31). Pedro lo reprendió, y Jesús le respondió con dureza. En Getsemaní oró tres veces que, si era posible, pasara de Él esa copa. No fue posible. ¿Por qué? ¿No podía Dios simplemente perdonar?',
        { h: 'El problema del pecado' },
        'La respuesta comienza con el pecado. «Todos pecaron, y están destituidos de la gloria de Dios» (Ro 3:23). El pecado no es solo un error o una debilidad: es rebelión contra un Dios santo, y su consecuencia es la muerte, la separación de Dios. Además, Dios es justo. Un juez que dejara libre a un culpable sin más sería un juez injusto. Si Dios pasara por alto el pecado, dejaría de ser justo; si castigara a todos los pecadores, nadie se salvaría.',
        { h: 'La solución de Dios' },
        'Pablo explica la solución en un texto que la tabla y el pasaje reproducen. Dios puso a Cristo «como propiciación por medio de la fe en su sangre, para manifestar su justicia» (Ro 3:25). En la cruz, Dios castigó el pecado, de modo que su justicia quedó a salvo, y al mismo tiempo perdonó al pecador. Así puede ser «el justo, y el que justifica al que es de la fe de Jesús» (Ro 3:26). La cruz es el lugar donde se encuentran la justicia y el amor de Dios, como se vio en Dios y la Trinidad.',
        { h: 'Los sacrificios anunciaban la cruz' },
        'Durante siglos, Israel ofreció sacrificios. La ley enseñaba que sin derramamiento de sangre no hay perdón (He 9:22), porque la vida está en la sangre y una vida debía darse por otra (Lv 17:11). Pero la sangre de toros y machos cabríos no podía quitar el pecado de verdad (He 10:4): solo lo cubría hasta que llegara el sacrificio verdadero. Dios había tenido paciencia con los pecados pasados, mirando hacia la cruz (Ro 3:25).',
        { h: 'Por amor' },
        'La cruz no fue un accidente ni una derrota. Pedro dijo en Pentecostés que Jesús fue entregado «por el determinado consejo y anticipado conocimiento de Dios» (Hch 2:23). Pero tampoco fue un castigo impuesto a un Hijo que no quería. Jesús dijo: «nadie me la quita, sino que yo de mí mismo la pongo» (Jn 10:18). Fue el Dios trino quien, por amor, decidió salvarnos a ese precio.',
        { ejercicio: {
          pregunta: 'Según Romanos 3:26, ¿qué logra Dios en la cruz?',
          opciones: [
            { t: 'Ser justo y, al mismo tiempo, justificar al que cree en Jesús.', ok: true, por_que: 'La cruz satisface la justicia de Dios y le permite perdonar sin dejar de ser justo.' },
            { t: 'Mostrar que el pecado no era tan grave como parecía.', ok: false, por_que: 'La cruz muestra lo contrario: el pecado es tan grave que costó la muerte del Hijo.' },
            { t: 'Cambiar su ley para que el pecado ya no merezca castigo.', ok: false, por_que: 'La ley no cambió: el castigo cayó sobre Cristo en lugar del pecador.' }
          ],
          explicacion: 'En la cruz, Dios no rebajó su justicia ni su amor: los cumplió los dos.'
        } }
      ],
      pensar: 'Jesús oró tres veces en Getsemaní y aun así fue a la cruz. ¿Qué te dice eso sobre lo grave de tu pecado y lo grande de su amor?'
    },
    {
      id: 'crucifixion', n: 'La crucifixión en la historia', ref: 'Marcos 15:15-41; Juan 19:16-37; Deuteronomio 21:22-23; Gálatas 3:13; 1 Corintios 1:18-25',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/golgota.webp', alt: 'Vista lejana, al mediodía bajo un cielo oscurecido, de una colina rocosa fuera de las murallas de Jerusalén con tres cruces de madera y siluetas a contraluz; en primer plano, un grupo de mujeres con velos mira desde lejos', pie: 'Las mujeres que habían seguido a Jesús desde Galilea miraban «de lejos» (Mr 15:40).', origen: 'ia', foco: '50% 50%' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El viernes de la crucifixión, según los evangelios',
          cab: ['Hora aprox.', 'Hecho', 'Texto'],
          filas: [
            ['Madrugada', 'Juicio ante el Sanedrín y negación de Pedro', 'Mr 14:53-72'],
            ['Temprano', 'Juicio ante Pilato y ante Herodes Antipas; azotes', 'Mr 15:1-15; Lc 23:6-12'],
            ['Hora tercera (9 de la mañana)', 'Lo crucifican', 'Mr 15:25'],
            ['Hora sexta a novena (mediodía a 3 de la tarde)', 'Tinieblas sobre la tierra', 'Mr 15:33'],
            ['Hora novena (3 de la tarde)', '«Dios mío, Dios mío…», «Consumado es» y muere', 'Mr 15:34-37; Jn 19:30'],
            ['Tarde', 'José de Arimatea lo sepulta antes del sábado', 'Mr 15:42-46']
          ],
          nota: 'Juan 19:14 menciona la hora sexta durante el juicio; se explica en el recurso Pesos, medidas, monedas y horas bíblicas.'
        } }
      ],
      texto: [
        'La crucifixión era la forma de ejecución más cruel y humillante del mundo romano. El orador romano Cicerón la llamó el suplicio más cruel y terrible, y dijo que la sola palabra cruz debía estar lejos de los oídos de un ciudadano romano. Se reservaba para esclavos, rebeldes y criminales de las provincias. Se hacía en público, junto a los caminos, para que sirviera de advertencia.',
        { h: 'Lo que sufrió Jesús' },
        'Los evangelios cuentan los hechos con sobriedad, sin detenerse en los detalles del dolor. Jesús fue azotado por soldados romanos, burlado con una corona de espinas y un manto de púrpura, y obligado a cargar el madero hasta que, debilitado, otro tuvo que llevarlo. Fue crucificado entre dos malhechores, en un lugar llamado Gólgota, fuera de la ciudad (He 13:12). Allí estuvo unas seis horas. Los que pasaban lo insultaban, los principales sacerdotes se burlaban y los soldados se repartían sus vestidos. Al final, clamó a gran voz y entregó el espíritu.',
        { h: 'Maldito el colgado en un madero' },
        'Para un judío, la cruz era además una maldición. La ley decía que el cuerpo de un ejecutado colgado en un madero no debía pasar la noche allí, «porque maldito por Dios es el colgado» (Dt 21:23). Por eso, un Mesías crucificado parecía una contradicción: Pablo dice que era tropezadero para los judíos, y para los griegos, locura (1 Co 1:23). Pero Pablo descubrió el sentido de esa maldición: «Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición» (Ga 3:13). Él cargó la maldición que nos correspondía. El recurso El mundo judío en tiempos de Jesús explica por qué la cruz era un escándalo.',
        { h: '¿Quién mató a Jesús?' },
        'Pedro responde en Hechos: los líderes y la multitud de Jerusalén de esa generación, Herodes, Pilato y los gentiles (Hch 2:23, 36; 4:27). Nunca se puede culpar al pueblo judío de otras épocas, como se hizo con terribles consecuencias en la historia. Y detrás de todos ellos, los pecados de toda la humanidad. Pero la Biblia también dice que nadie le quitó la vida: Él la puso por sí mismo (Jn 10:18), y Dios lo entregó por todos nosotros (Ro 8:32).',
        { h: 'Un hecho histórico' },
        'La crucifixión de Jesús es uno de los hechos mejor atestiguados de la antigüedad: la mencionan los cuatro evangelios, las cartas de Pablo, el historiador judío Josefo y el historiador romano Tácito. En 1968 se encontró en Jerusalén el talón de un hombre del siglo I, llamado Yehohanán, atravesado por un clavo: la prueba arqueológica de cómo se crucificaba en tiempos de Jesús.',
        { ir: { t: 'Ver «Un Mesías crucificado» en El mundo judío en tiempos de Jesús', a: '../../mundo-judio/#jesus/7' } },
        { ir: { t: 'Ver la última semana en la Armonía de los evangelios', a: '../../evangelios/' } }
      ],
      pensar: 'Pablo dijo: «me propuse no saber entre vosotros cosa alguna sino a Jesucristo, y a éste crucificado» (1 Co 2:2). ¿Qué lugar tiene la cruz en tu fe y en tu predicación?'
    },
    {
      id: 'sustitucion', n: 'Sacrificio y sustitución', ref: 'Isaías 53:4-12; 2 Corintios 5:21; 1 Pedro 2:24; 3:18; Gálatas 3:13; Juan 1:29; Génesis 22:13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados. Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros.', ref: 'Isaías 53:4-6' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../dios-y-la-trinidad/img/moriah.webp', alt: 'En el monte Moriah, Abraham e Isaac junto a un altar de piedras; un carnero está trabado en un zarzal', pie: 'En Moriah, Dios proveyó un carnero «en lugar de su hijo» (Gn 22:13).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: '«Por nosotros»: el lenguaje de la sustitución',
          cab: ['Texto', 'Lo que dice'],
          filas: [
            ['Is 53:5', 'Él herido fue por nuestras rebeliones'],
            ['Is 53:6', 'Jehová cargó en él el pecado de todos nosotros'],
            ['Mr 10:45', 'Dar su vida en rescate por muchos'],
            ['2 Co 5:21', 'Al que no conoció pecado, por nosotros lo hizo pecado'],
            ['Ga 3:13', 'Hecho por nosotros maldición'],
            ['1 P 2:24', 'Llevó él mismo nuestros pecados en su cuerpo sobre el madero'],
            ['1 P 3:18', 'El justo por los injustos, para llevarnos a Dios']
          ],
          nota: 'En griego, las preposiciones hypér y antí significan «a favor de» y «en lugar de».'
        } }
      ],
      texto: [
        'Setecientos años antes de la cruz, Isaías describió a un siervo de Jehová que sufriría de una manera única. El pasaje, Isaías 52:13 a 53:12, es el texto del Antiguo Testamento más citado en el Nuevo para explicar la muerte de Jesús. Lo central es que el siervo no sufre por sus propios pecados, sino por los de otros: «Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él» (Is 53:5).',
        { h: 'En nuestro lugar' },
        'Esto es lo que la teología llama sustitución: Cristo murió en nuestro lugar, recibiendo el castigo que nosotros merecíamos. La tabla muestra que el Nuevo Testamento lo dice una y otra vez. Pablo escribe que Dios, «al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él» (2 Co 5:21). Es un intercambio: Él tomó nuestro pecado y nos da su justicia. Pedro dice que llevó él mismo nuestros pecados en su cuerpo sobre el madero, «el justo por los injustos» (1 P 3:18).',
        { h: 'Figuras de la sustitución' },
        'Dios había enseñado la idea de la sustitución desde mucho antes. En el monte Moriah, cuando Abraham estaba por sacrificar a Isaac, Dios proveyó un carnero que fue ofrecido «en lugar de su hijo» (Gn 22:13). En la Pascua, el cordero moría y su sangre en los postes protegía al primogénito. En el Día de la Expiación, el sumo sacerdote ponía las manos sobre la cabeza de un macho cabrío y confesaba sobre él los pecados del pueblo (Lv 16:21). Por eso Juan el Bautista presentó a Jesús como «el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29).',
        { h: 'Una objeción' },
        'Algunos objetan que es injusto castigar a un inocente en lugar de los culpables. La objeción tendría fuerza si Dios hubiera tomado a un tercero cualquiera y lo hubiera castigado contra su voluntad. Pero Cristo no es un tercero: es Dios mismo, el ofendido, que en la persona del Hijo carga con la ofensa. Y no fue obligado: se entregó voluntariamente por amor (Ga 2:20). Además, como nuevo Adán y cabeza de su pueblo, nos representa: lo que Él hizo cuenta para los que están unidos a Él por la fe.',
        { h: 'Por mí' },
        'Pablo no habla de la cruz como una teoría lejana, sino como algo personal: «el Hijo de Dios, el cual me amó y se entregó a sí mismo por mí» (Ga 2:20). La sustitución no es solo una doctrina para entender; es una verdad para recibir con gratitud.',
        { ejercicio: {
          pregunta: '¿Qué intercambio describe 2 Corintios 5:21?',
          opciones: [
            { t: 'Cristo cargó nuestro pecado y nosotros recibimos su justicia.', ok: true, por_que: 'Dios lo hizo pecado por nosotros «para que nosotros fuésemos hechos justicia de Dios en él».' },
            { t: 'Cristo se volvió pecador y nosotros nos volvimos divinos.', ok: false, por_que: 'Cristo no cometió pecado: cargó el nuestro. Y nosotros no nos volvemos Dios, sino justos ante Él.' },
            { t: 'Cristo cambió su santidad por nuestro arrepentimiento.', ok: false, por_que: 'El texto habla de pecado y justicia, no de arrepentimiento: la iniciativa y el costo son de Dios.' }
          ],
          explicacion: 'Lo que era nuestro, el pecado, pasó a Cristo; lo que es suyo, la justicia, pasa a nosotros.'
        } }
      ],
      pensar: 'Isaías dice: «Todos nosotros nos descarriamos como ovejas… mas Jehová cargó en él el pecado de todos nosotros» (Is 53:6). Lee el versículo poniendo tu nombre donde dice «nosotros». ¿Qué produce en ti?'
    },
    {
      id: 'vocabulario', n: 'Propiciación, redención, reconciliación', ref: 'Romanos 3:24-25; 5:10-11; 1 Juan 2:2; 4:10; Efesios 1:7; 1 Pedro 1:18-19; 2 Corintios 5:18-21',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cruz.svg', alt: 'Esquema en cuatro cuadros: el templo y la propiciación, el mercado y la redención, el tribunal y la justificación, la familia y la reconciliación, cada uno con su problema y lo que Cristo hizo', pie: 'Cuatro imágenes del mundo antiguo para explicar lo que Cristo hizo en la cruz.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las palabras de la cruz',
          cab: ['Palabra', 'Imagen', 'El problema', 'Lo que hizo Cristo', 'Texto'],
          filas: [
            ['Propiciación', 'El templo', 'La ira justa de Dios contra el pecado', 'Satisfizo su justicia con su sangre', 'Ro 3:25; 1 Jn 4:10'],
            ['Redención', 'El mercado de esclavos', 'La esclavitud del pecado', 'Pagó el precio de nuestra libertad', 'Ef 1:7; 1 P 1:18-19'],
            ['Justificación', 'El tribunal', 'La culpa ante el juez', 'Fuimos declarados justos', 'Ro 5:1; 3:24'],
            ['Reconciliación', 'La familia', 'La enemistad con Dios', 'Hizo la paz', '2 Co 5:18-19; Ro 5:10']
          ],
          nota: 'Cada palabra mira la cruz desde un ángulo distinto: ninguna sola lo dice todo.'
        } }
      ],
      texto: [
        'El Nuevo Testamento usa varias palabras para explicar lo que Cristo hizo en la cruz. Cada una viene de un ámbito de la vida antigua y describe la salvación desde un ángulo distinto, como las caras de un diamante. El esquema y la tabla las resumen.',
        { h: 'Propiciación: el templo' },
        'Juan escribe que Dios «envió a su Hijo en propiciación por nuestros pecados» (1 Jn 4:10). Propiciar significa aplacar o satisfacer la ira de alguien. En las religiones paganas, los hombres ofrecían sacrificios para calmar a dioses caprichosos. La Biblia es muy distinta: Dios no tiene arrebatos de enojo, sino una oposición justa y santa al pecado; y no son los hombres quienes lo aplacan, sino Dios mismo quien provee la propiciación. En la Septuaginta, la misma palabra se usa para el propiciatorio, la tapa del arca donde se rociaba la sangre en el Día de la Expiación. Cristo es el lugar y el sacrificio donde la justicia de Dios queda satisfecha.',
        { h: 'Redención: el mercado' },
        'Redimir es comprar la libertad de alguien pagando un precio. En el mundo antiguo, un esclavo podía ser liberado si alguien pagaba su rescate. Jesús dijo que vino a dar su vida en rescate por muchos (Mr 10:45). Pedro recuerda que fuimos rescatados «no con cosas corruptibles, como oro o plata, sino con la sangre preciosa de Cristo» (1 P 1:18-19). Éramos esclavos del pecado, y Cristo pagó el precio. Por eso, dice Pablo, «no sois vuestros… habéis sido comprados por precio» (1 Co 6:19-20).',
        { h: 'Justificación: el tribunal' },
        'Justificar es un término legal: declarar justo a alguien ante un tribunal. El pecador está culpable ante Dios, pero por la fe en Cristo es declarado justo, no porque lo merezca, sino porque Cristo cargó su culpa. La estación siguiente se dedica a esta palabra.',
        { h: 'Reconciliación: la familia' },
        'Reconciliar es restablecer una relación rota. El pecado nos hizo enemigos de Dios (Ro 5:10). En la cruz, «Dios estaba en Cristo reconciliando consigo al mundo, no tomándoles en cuenta a los hombres sus pecados» (2 Co 5:19). Es notable quién toma la iniciativa: no somos nosotros quienes convencemos a Dios, sino Dios quien busca reconciliarse con nosotros. Y nos ha dado el ministerio de la reconciliación: rogar a otros que se reconcilien con Dios.',
        { ejercicio: {
          pregunta: '¿En qué se diferencia la propiciación bíblica de los sacrificios paganos?',
          opciones: [
            { t: 'En la Biblia es Dios mismo quien provee la propiciación, y su ira es una oposición santa al pecado, no un capricho.', ok: true, por_que: '1 Juan 4:10: Dios «envió a su Hijo en propiciación»; la iniciativa es del amor de Dios.' },
            { t: 'En la Biblia no existe la ira de Dios, solo su amor.', ok: false, por_que: 'Romanos 1:18 y 5:9 hablan de la ira de Dios; la cruz nos salva de ella.' },
            { t: 'En la Biblia los hombres aplacan a Dios con sus buenas obras.', ok: false, por_que: 'Nadie puede aplacar a Dios con sus obras: Cristo es la propiciación.' }
          ],
          explicacion: 'El Dios que se ofende es el mismo que provee el sacrificio: eso es amor.'
        } }
      ],
      pensar: '«No sois vuestros… habéis sido comprados por precio» (1 Co 6:19-20). ¿Qué decisiones concretas cambiarían si vivieras cada día sabiendo cuánto le costaste a Cristo?'
    },
    {
      id: 'justificados', n: 'Justificados por la fe', ref: 'Romanos 3:21-28; 4:1-8; 5:1; Gálatas 2:16; Habacuc 2:4; Filipenses 3:9',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo;', ref: 'Romanos 5:1' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Qué es y qué no es la justificación',
          cab: ['Es', 'No es'],
          filas: [
            ['Una declaración de Dios: el creyente es justo ante Él', 'Un proceso por el que el creyente se va haciendo justo (eso es la santificación)'],
            ['Por la justicia de Cristo, contada al creyente', 'Por los méritos propios o las obras de la ley'],
            ['Recibida por la fe', 'Ganada por el esfuerzo'],
            ['Completa desde el primer momento', 'Parcial, que se completa con el tiempo'],
            ['El fundamento de la paz con Dios', 'Un permiso para seguir pecando (Ro 6:1-2)']
          ],
          nota: 'El desarrollo completo de la justificación, la regeneración y la santificación va en el recurso La salvación, en preparación.'
        } }
      ],
      texto: [
        'Si la cruz satisface la justicia de Dios, ¿cómo llega ese beneficio a una persona? Pablo responde: por la fe. «Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo» (Ro 5:1). Esta estación presenta la justificación en relación con la obra de Cristo; cómo se aplica la salvación al creyente se estudiará en detalle en el recurso La salvación, hoy en preparación.',
        { h: 'Declarado justo' },
        'Justificar es declarar justo, como un juez que dicta sentencia. Pablo afirma algo que parecía escandaloso: Dios «justifica al impío» (Ro 4:5). No es que Dios declare inocente a un culpable sin más, lo que sería injusto. La base es la cruz: Cristo cargó la culpa y Dios cuenta al creyente la justicia de Cristo. Pablo lo ilustra con Abraham, que creyó a Dios «y le fue contado por justicia» (Ro 4:3), antes de circuncidarse y antes de la ley.',
        { h: 'Por la fe, no por las obras' },
        'La justificación no se gana: se recibe. «Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley» (Ro 3:28). La fe no es una obra que merezca algo, sino la mano vacía que recibe el regalo. Por eso nadie puede jactarse (Ef 2:8-9). Martín Lutero redescubrió esta verdad al estudiar Romanos y el texto de Habacuc que Pablo cita: «el justo por la fe vivirá» (Ro 1:17). El recurso Historia de la Iglesia II cuenta esa historia.',
        { h: 'Fe que obra' },
        'Santiago dice que la fe sin obras está muerta y que Abraham fue justificado por las obras cuando ofreció a Isaac (Stg 2:17-24). No contradice a Pablo. Pablo habla de cómo somos declarados justos delante de Dios; Santiago, de cómo se muestra delante de los hombres que la fe es verdadera. La fe que salva es la que transforma la vida: somos salvos por la fe sola, pero la fe que salva nunca está sola.',
        { h: 'Paz con Dios' },
        'El primer fruto de la justificación es la paz con Dios. El creyente ya no vive con miedo a la condenación, porque «ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). Su seguridad no depende de cómo se sintió hoy, sino de lo que Cristo hizo.',
        { ir: { t: 'Ver la Reforma en Historia de la Iglesia II', a: '../../historia-iglesia-2/' } },
        { ejercicio: {
          pregunta: '¿Cómo se relacionan Pablo (justificados por la fe) y Santiago (justificados por las obras)?',
          opciones: [
            { t: 'Pablo habla de cómo somos declarados justos ante Dios; Santiago, de cómo se demuestra que la fe es verdadera.', ok: true, por_que: 'Santiago combate una fe de palabras que no cambia la vida (Stg 2:14-17), no la justificación por la fe.' },
            { t: 'Se contradicen, y hay que elegir a uno de los dos.', ok: false, por_que: 'Ambos son Palabra de Dios y usan el ejemplo de Abraham con propósitos distintos.' },
            { t: 'Santiago enseña que las obras son la causa de la salvación.', ok: false, por_que: 'Santiago enseña que las obras son la evidencia de una fe viva, no la causa de la salvación.' }
          ],
          explicacion: 'Somos salvos por la fe sola, pero la fe que salva nunca está sola.'
        } }
      ],
      pensar: '«Ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). ¿Vives con la paz de quien ya fue declarado justo, o con el miedo de quien todavía intenta ganarse a Dios?'
    }
  ];

  window.__CRISTO.oficios = oficios;
  window.__CRISTO.cruz = cruz;
})();
/* La persona y obra de Cristo · ruta V. La cruz (cont.) y VI. Resucitado y exaltado (ver encabezado en parte1.js) */
(() => {
  /* ---------------- V. La cruz (continuación) ---------------- */
  const cruz2 = [
    {
      id: 'victoria', n: 'Victoria sobre Satanás', ref: 'Génesis 3:15; Colosenses 2:13-15; Hebreos 2:14-15; Juan 12:31-32; 1 Juan 3:8; Apocalipsis 12:10-11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y a vosotros, estando muertos en pecados y en la incircuncisión de vuestra carne, os dio vida juntamente con él, perdonándoos todos los pecados, anulando el acta de los decretos que había contra nosotros, que nos era contraria, quitándola de en medio y clavándola en la cruz, y despojando a los principados y a las potestades, los exhibió públicamente, triunfando sobre ellos en la cruz.', ref: 'Colosenses 2:13-15' },
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperio-romano/img/roma-triunfo-tito.webp', alt: 'Desfile triunfal romano: el general vencedor en su carro, seguido de los cautivos y los despojos de guerra', pie: 'Pablo usa la imagen del desfile triunfal romano: Cristo exhibió públicamente a los poderes vencidos (Col 2:15).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que la cruz hizo con el enemigo',
          cab: ['El enemigo tenía…', 'En la cruz…', 'Texto'],
          filas: [
            ['El acta de los decretos contra nosotros', 'Fue clavada en la cruz y anulada', 'Col 2:14'],
            ['El poder de acusar', 'El acusador fue lanzado fuera', 'Ap 12:10-11'],
            ['El imperio de la muerte', 'Fue destruido por medio de la muerte', 'He 2:14'],
            ['Esclavos que vivían con temor', 'Fueron librados', 'He 2:15'],
            ['El dominio de este mundo', 'El príncipe de este mundo fue echado fuera', 'Jn 12:31'],
            ['Sus obras', 'Fueron deshechas', '1 Jn 3:8']
          ],
          nota: 'La victoria es completa, pero su manifestación final espera la venida de Cristo (Ap 20:10).'
        } }
      ],
      texto: [
        'La primera promesa del evangelio fue una declaración de guerra: el descendiente de la mujer heriría a la serpiente en la cabeza (Gn 3:15). La cruz fue el lugar de esa batalla. A primera vista, parecía que el diablo había ganado: el Hijo de Dios colgaba muerto de un madero. Pero fue exactamente al revés.',
        { h: 'El desfile triunfal' },
        'Pablo usa una imagen que sus lectores conocían bien. Cuando un general romano vencía en una gran guerra, Roma le concedía un triunfo: un desfile por las calles en el que el vencedor iba en su carro y detrás marchaban los reyes cautivos y los despojos, expuestos a la vista de todos. Pablo dice que en la cruz Cristo, «despojando a los principados y a las potestades, los exhibió públicamente, triunfando sobre ellos» (Col 2:15). Lo que parecía la derrota de Jesús fue, en realidad, la derrota pública de los poderes del mal.',
        { h: 'Cómo los venció' },
        'El versículo anterior explica cómo. El diablo tenía un arma contra nosotros: nuestros pecados, «el acta de los decretos que había contra nosotros». Cristo la anuló «clavándola en la cruz» (Col 2:14). Al quitar la culpa, quitó al acusador su argumento. Por eso Apocalipsis dice que los creyentes vencen al acusador «por medio de la sangre del Cordero» (Ap 12:11). Hebreos agrega que por medio de la muerte destruyó al que tenía el imperio de la muerte, y libró a los que por temor a la muerte vivían como esclavos (He 2:14-15). El que muere en Cristo ya no muere en la culpa ni en el poder del enemigo.',
        { h: 'Una victoria para vivir' },
        'Esta verdad tiene consecuencias prácticas. El creyente no pelea para conseguir la victoria, sino desde la victoria que Cristo ya ganó. Jesús dio a sus discípulos autoridad sobre los demonios (Lc 10:17-19), y la iglesia primitiva echaba fuera espíritus malos en su nombre (Hch 16:18). Al mismo tiempo, la guerra espiritual no consiste en ritos ni fórmulas, sino en vestirse de toda la armadura de Dios: la verdad, la justicia, el evangelio, la fe, la salvación, la Palabra y la oración (Ef 6:10-18). El enemigo sigue activo, pero es un enemigo vencido. Su derrota final llegará cuando sea lanzado al lago de fuego (Ap 20:10).',
        { ejercicio: {
          pregunta: 'Según Colosenses 2:14-15, ¿cómo venció Cristo a los poderes del mal en la cruz?',
          opciones: [
            { t: 'Quitando nuestra culpa, que era el arma con que el enemigo nos acusaba.', ok: true, por_que: 'El acta de los decretos contra nosotros fue clavada en la cruz: sin culpa, el acusador pierde su poder.' },
            { t: 'Con un combate físico contra Satanás en el momento de morir.', ok: false, por_que: 'El texto no describe un combate físico: la victoria está en el perdón de los pecados.' },
            { t: 'Haciendo que Satanás dejara de existir en ese momento.', ok: false, por_que: 'Satanás sigue activo (1 P 5:8); su destino final está anunciado para el fin (Ap 20:10).' }
          ],
          explicacion: 'La sangre de Cristo quita la culpa, y con ella el derecho del acusador sobre el creyente.'
        } }
      ],
      pensar: 'Si Cristo ya venció en la cruz, ¿estás peleando tus batallas espirituales desde el miedo o desde su victoria?'
    },
    {
      id: 'por-quien', n: '¿Por quién murió Cristo?', ref: 'Juan 3:16; 1 Juan 2:2; 1 Timoteo 2:4-6; 2 Pedro 3:9; Juan 10:11, 15; Efesios 5:25',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y él es la propiciación por nuestros pecados; y no solamente por los nuestros, sino también por los de todo el mundo.', ref: '1 Juan 2:2' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los textos de cada lado',
          cab: ['Murió por todos', 'Murió por los suyos'],
          filas: [
            ['De tal manera amó Dios al mundo (Jn 3:16)', 'Su vida da por las ovejas (Jn 10:11)'],
            ['Por los de todo el mundo (1 Jn 2:2)', 'Cristo amó a la iglesia, y se entregó a sí mismo por ella (Ef 5:25)'],
            ['Se dio a sí mismo en rescate por todos (1 Ti 2:6)', 'Él salvará a su pueblo de sus pecados (Mt 1:21)'],
            ['Para que por la gracia de Dios gustase la muerte por todos (He 2:9)', 'La iglesia del Señor, la cual él ganó por su propia sangre (Hch 20:28)'],
            ['Aun negarán al Señor que los rescató (2 P 2:1)', 'Para llevar los pecados de muchos (He 9:28)']
          ],
          nota: 'Los dos grupos de textos son verdad: la pregunta es cómo se relacionan.'
        } }
      ],
      texto: [
        'Todos los cristianos evangélicos creen que la muerte de Cristo tiene valor suficiente para salvar a todo el mundo, y que solo se salvan los que creen. La pregunta que divide a algunos es otra: ¿cuál fue la intención de Dios al enviar a Cristo a la cruz? ¿Murió por todos los seres humanos, o solo por los que Dios eligió para salvación?',
        { posturas: {
          titulo: '¿Murió Cristo por todos o solo por los elegidos?',
          a: { n: 'Expiación limitada o particular', t: 'La tradición reformada, que sigue a Calvino y al Sínodo de Dort (1619), enseña que Cristo murió con la intención de salvar a los elegidos, y que su muerte asegura con certeza su salvación. Si Cristo hubiera pagado por los pecados de todos, dicen, todos se salvarían, porque Dios no cobraría dos veces la misma deuda. Leen «el mundo» y «todos» como personas de toda clase y nación, no cada individuo.' },
          b: { n: 'Expiación ilimitada o universal', t: 'La tradición arminiana y wesleyana, y con ella la línea pentecostal clásica, enseña que Cristo murió por todos los seres humanos sin excepción, y que la salvación se aplica a los que creen. Dios quiere que todos sean salvos (1 Ti 2:4) y no quiere que ninguno perezca (2 P 3:9). Juan dice que Cristo es la propiciación no solo por nuestros pecados, «sino también por los de todo el mundo» (1 Jn 2:2), y Pedro habla de falsos maestros que niegan al Señor que los rescató (2 P 2:1).' },
          c: 'Este recurso sigue la segunda postura. Los textos que dicen que Cristo murió por sus ovejas o por su iglesia no niegan que muriera por otros: muestran su amor especial por los suyos, como un esposo que da su vida por su esposa sin que eso signifique que no ame a nadie más. La muerte de Cristo hace posible la salvación de todos y la asegura para todos los que creen. Así se puede predicar a cualquier persona con verdad: «Cristo murió por ti».'
        } },
        { h: 'Lo que tienen en común' },
        'Es importante no exagerar la diferencia. Ninguna de las dos posturas enseña que todos se salvarán, y las dos predican el evangelio a toda criatura. Los reformados también creen que la invitación es sincera y universal, y los arminianos también creen que nadie viene a Cristo sin la obra de la gracia de Dios. Grandes misioneros y evangelistas han salido de ambas tradiciones. Spurgeon era calvinista; Wesley, arminiano.',
        { h: 'Por qué importa para la misión' },
        'La convicción de que Cristo murió por todos impulsa la evangelización. Si Dios amó al mundo de tal manera, ninguna persona está fuera del alcance de su amor: ni el más pecador, ni el más lejano, ni el de otra cultura. Pablo dice que el amor de Cristo nos constriñe, porque «uno murió por todos» (2 Co 5:14), y por eso somos embajadores que ruegan a todos: «Reconciliaos con Dios» (2 Co 5:20).',
        { ejercicio: {
          pregunta: '¿En qué están de acuerdo las dos posturas sobre el alcance de la expiación?',
          opciones: [
            { t: 'En que la muerte de Cristo tiene valor suficiente para todos, que solo se salvan los que creen y que el evangelio debe predicarse a todos.', ok: true, por_que: 'La diferencia está en la intención de la cruz, no en su valor ni en el mandato de predicar.' },
            { t: 'En que al final todos los seres humanos se salvarán.', ok: false, por_que: 'Ninguna de las dos enseña el universalismo: las dos afirman que solo se salvan los que creen.' },
            { t: 'En que no hace falta predicar el evangelio a todas las naciones.', ok: false, por_que: 'Las dos tradiciones han producido grandes misioneros y obedecen la gran comisión.' }
          ],
          explicacion: 'Cristo murió por todos, y la salvación es de todos los que creen.'
        } }
      ],
      pensar: 'Si Cristo murió por todos, no hay nadie a quien no puedas decirle «Cristo murió por ti». ¿A quién necesitas decírselo esta semana?'
    },
    {
      id: 'sanidad', n: 'Sanidad en la expiación', ref: 'Isaías 53:4-5; Mateo 8:16-17; 1 Pedro 2:24; Santiago 5:14-16; Romanos 8:23; 2 Timoteo 4:20',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y cuando llegó la noche, trajeron a él muchos endemoniados; y con la palabra echó fuera a los demonios, y sanó a todos los enfermos; para que se cumpliese lo dicho por el profeta Isaías, cuando dijo: El mismo tomó nuestras enfermedades, y llevó nuestras dolencias.', ref: 'Mateo 8:16-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los textos lado a lado',
          cab: ['Isaías 53', 'Su uso en el Nuevo Testamento'],
          filas: [
            ['Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores (Is 53:4)', 'El mismo tomó nuestras enfermedades, y llevó nuestras dolencias (Mt 8:17), aplicado a sanidades físicas'],
            ['Por su llaga fuimos nosotros curados (Is 53:5)', 'Por cuya herida fuisteis sanados (1 P 2:24), en un contexto que habla del pecado'],
            ['Habiendo él llevado el pecado de muchos (Is 53:12)', 'Llevó él mismo nuestros pecados en su cuerpo sobre el madero (1 P 2:24)']
          ],
          nota: 'El hebreo de Isaías 53:4 usa palabras que en otros pasajes significan enfermedad y dolor físico (Dt 28:61; Jer 6:7).'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../movimiento-pentecostal/img/carpa-sanidad.webp', alt: 'Culto en una carpa evangelística; un grupo de creyentes ora con imposición de manos por un enfermo', pie: 'La oración por los enfermos ha sido parte del culto pentecostal desde sus comienzos (Stg 5:14-15).', origen: 'ia' }
      ],
      texto: [
        'Las Asambleas de Dios incluyen la sanidad divina entre sus verdades fundamentales: la sanidad divina es parte integral del evangelio, la liberación de la enfermedad ha sido provista en la expiación y es privilegio de todos los creyentes. Esta estación examina sus textos, la otra lectura y el equilibrio pastoral que la acompaña.',
        { h: 'Los textos' },
        'Isaías 53 dice del siervo: «Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores… y por su llaga fuimos nosotros curados» (Is 53:4-5). Las palabras hebreas del versículo 4 se usan en otros pasajes para enfermedades y dolores físicos. Mateo, al contar que Jesús sanó a todos los enfermos en Capernaúm, dice que lo hizo «para que se cumpliese lo dicho por el profeta Isaías, cuando dijo: El mismo tomó nuestras enfermedades, y llevó nuestras dolencias» (Mt 8:17). Es decir, el mismo Nuevo Testamento aplica Isaías 53 a la sanidad del cuerpo.',
        { h: 'Por qué la sanidad está en la cruz' },
        'La enfermedad y la muerte entraron al mundo por el pecado (Ro 5:12), y la salvación que Cristo trae alcanza a toda la persona: Jesús perdona y sana a la vez (Mr 2:5-12), y la palabra griega sózo significa tanto salvar como sanar (Mr 5:34). Por eso Santiago enseña a orar por los enfermos con la promesa de que «la oración de fe salvará al enfermo, y el Señor lo levantará» (Stg 5:15). Como el perdón, es un regalo de la gracia.',
        { posturas: {
          titulo: '¿Está la sanidad del cuerpo provista en la expiación?',
          a: { n: 'Solo en sentido final', t: 'Muchos evangélicos no pentecostales enseñan que la cruz asegura la sanidad completa, pero en la resurrección del cuerpo (Ro 8:23). Señalan que 1 Pedro 2:24 aplica Isaías 53:5 al pecado, y que Mateo 8:17 se cumplió en el ministerio de Jesús, antes de la cruz. Dios puede sanar hoy cuando quiere, pero no lo ha prometido en cada caso.' },
          b: { n: 'Provista en la expiación para hoy', t: 'La línea pentecostal clásica enseña que la sanidad fue provista en la cruz y está disponible ahora por la fe, como anticipo de la redención final del cuerpo. Mateo aplica Isaías 53:4 a enfermedades físicas, y la oración por los enfermos es un mandato para la iglesia de todos los tiempos (Stg 5:14-16; Mr 16:18).' },
          c: 'Este recurso sigue la segunda postura, que es la de las Asambleas de Dios. Las dos lecturas coinciden en algo importante: la cruz es la fuente de toda bendición, incluida la resurrección del cuerpo, y Dios sigue sanando hoy.'
        } },
        { h: 'El equilibrio pastoral' },
        'Que la sanidad esté provista no significa que todos sean sanados ahora. Pablo dejó a Trófimo enfermo en Mileto (2 Ti 4:20), recomendó a Timoteo un remedio para su estómago (1 Ti 5:23) y aceptó que el Señor no le quitara su aguijón (2 Co 12:7-9). Usar médicos y medicinas no es falta de fe; Lucas era médico. Y nunca se debe culpar a un enfermo de su enfermedad por falta de fe. Así se distingue esta enseñanza de la «confesión positiva» y del evangelio de la prosperidad, que prometen salud garantizada a cambio de fe o de dinero.',
        { ir: { t: 'Ver «El evangelio de la prosperidad» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#discernimiento/1' } }
      ],
      pensar: 'Oramos con fe porque Cristo llevó nuestras enfermedades, y seguimos confiando cuando la sanidad no llega porque la redención del cuerpo es segura. ¿Cómo puedes vivir las dos verdades a la vez, en tu vida y al acompañar a otros?'
    },
    {
      id: 'teorias', n: 'Cómo se ha explicado la cruz en la historia', ref: 'Marcos 10:45; Romanos 3:25-26; Colosenses 2:15; 1 Pedro 2:21-24; 1 Juan 4:9-10',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las principales explicaciones de la expiación',
          cab: ['Explicación', 'Quién y cuándo', 'Qué subraya', 'Límite'],
          filas: [
            ['Recapitulación', 'Ireneo de Lyon, hacia 180', 'Cristo recorre la vida humana y obedece donde Adán falló', 'Explica la encarnación más que la cruz'],
            ['Rescate', 'Orígenes y otros padres, siglos III–IV', 'Cristo fue el precio que nos liberó del poder del diablo', 'Algunos llegaron a decir que el pago se hizo al diablo'],
            ['Satisfacción', 'Anselmo de Canterbury, hacia 1098', 'Cristo restaura el honor de Dios ofendido por el pecado', 'Piensa en el honor de un señor feudal más que en la ley'],
            ['Influencia moral', 'Pedro Abelardo, siglo XII', 'La cruz muestra el amor de Dios y mueve al pecador a amarle', 'Por sí sola no explica por qué era necesaria'],
            ['Sustitución penal', 'Lutero y Calvino, siglo XVI', 'Cristo recibió en nuestro lugar el castigo del pecado', 'Si se aísla, puede olvidar la victoria y el ejemplo'],
            ['Gubernamental', 'Hugo Grocio, 1617', 'Dios muestra en la cruz la seriedad de su ley', 'Debilita la idea de un pago real'],
            ['Cristo vencedor', 'Gustaf Aulén le dio nombre en 1931', 'La cruz es la victoria sobre el pecado, la muerte y el diablo', 'Necesita explicar cómo se logra la victoria']
          ],
          nota: 'Las fechas son aproximadas. Las explicaciones no siempre se excluyen: muchas recogen un aspecto verdadero.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'En esto se mostró el amor de Dios para con nosotros, en que Dios envió a su Hijo unigénito al mundo, para que vivamos por él. En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros, y envió a su Hijo en propiciación por nuestros pecados.', ref: '1 Juan 4:9-10' }
      ],
      texto: [
        'La iglesia nunca definió la doctrina de la expiación en un concilio, como hizo con la Trinidad o con las dos naturalezas de Cristo. A lo largo de los siglos, los teólogos propusieron distintas explicaciones de cómo la muerte de Cristo nos salva. La tabla resume las principales.',
        { h: 'Los primeros siglos' },
        'Ireneo de Lyon, hacia el año 180, enseñó que Cristo recapituló, es decir, volvió a recorrer la historia humana: donde Adán desobedeció junto a un árbol, Cristo obedeció en un madero. Otros padres de la iglesia hablaron de la cruz como un rescate, tomando las palabras de Jesús en Marcos 10:45. Algunos llevaron la imagen demasiado lejos, preguntando a quién se pagó el rescate, y respondieron que al diablo. La Biblia no dice eso: el rescate es el precio de nuestra libertad, no un pago al enemigo.',
        { h: 'De la Edad Media a la Reforma' },
        'Anselmo de Canterbury, hacia 1098, explicó la cruz como satisfacción: el pecado ofende el honor de Dios, y solo el Dios-hombre podía dar una satisfacción infinita. Poco después, Pedro Abelardo subrayó que la cruz muestra el amor de Dios y despierta nuestro amor. Los reformadores, Lutero y Calvino, desarrollaron la idea de Anselmo a partir de la Escritura: Cristo no solo restauró un honor ofendido, sino que recibió en nuestro lugar el castigo que la ley de Dios exige. Es la sustitución penal.',
        { h: 'Cómo leerlas hoy' },
        'Muchas de estas explicaciones recogen un aspecto verdadero de lo que la Biblia enseña. La cruz es una victoria sobre los poderes del mal (Col 2:15), una demostración del amor de Dios (1 Jn 4:9-10), un ejemplo para los creyentes (1 P 2:21) y un rescate (Mr 10:45). Pero el aspecto que explica todos los demás es la sustitución: Cristo venció al diablo porque quitó la culpa; la cruz muestra el amor de Dios porque Cristo murió en nuestro lugar. Sin la sustitución, la cruz sería un ejemplo conmovedor, pero no una salvación. Por eso este recurso pone la sustitución en el centro, sin olvidar las otras dimensiones.',
        { ejercicio: {
          pregunta: '¿Por qué la sola idea de la influencia moral no basta para explicar la cruz?',
          opciones: [
            { t: 'Porque no explica por qué era necesario que Cristo muriera; un ejemplo de amor no quita la culpa.', ok: true, por_que: 'La cruz muestra el amor de Dios precisamente porque Cristo murió en nuestro lugar (Ro 5:8).' },
            { t: 'Porque la cruz no tiene nada que ver con el amor de Dios.', ok: false, por_que: '1 Juan 4:9-10 dice que en la cruz se mostró el amor de Dios: la influencia moral recoge una verdad.' },
            { t: 'Porque fue propuesta en la Edad Media.', ok: false, por_que: 'La fecha de una idea no la hace verdadera ni falsa; lo que importa es si explica lo que dice la Escritura.' }
          ],
          explicacion: 'La cruz es amor, victoria y ejemplo, porque antes es sustitución.'
        } }
      ],
      pensar: 'Cada explicación de la cruz destaca una faceta distinta. ¿Cuál de ellas te ha conmovido más en tu vida cristiana, y cuál necesitas conocer mejor?'
    }
  ];

  /* ---------------- VI. Resucitado y exaltado ---------------- */
  const exaltado = [
    {
      id: 'descenso', n: '«Descendió a los infiernos»', ref: 'Lucas 23:43, 46; Hechos 2:27-31; Efesios 4:8-10; 1 Pedro 3:18-20; 4:6; Mateo 12:40',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que dice la Escritura sobre los tres días',
          cab: ['Texto', 'Qué dice'],
          filas: [
            ['Lc 23:43', 'Al malhechor arrepentido: hoy estarás conmigo en el paraíso'],
            ['Lc 23:46', 'Padre, en tus manos encomiendo mi espíritu'],
            ['Mt 12:40', 'Tres días y tres noches en el corazón de la tierra'],
            ['Hch 2:27, 31', 'Su alma no fue dejada en el Hades, ni su carne vio corrupción'],
            ['Ef 4:9', 'Había descendido primero a las partes más bajas de la tierra'],
            ['1 P 3:18-20', 'Vivificado en espíritu, fue y predicó a los espíritus encarcelados que desobedecieron en los días de Noé']
          ],
          nota: 'El Credo de los Apóstoles dice «descendió a los infiernos», pero la frase se agregó tarde, en el siglo IV, y en latín inferos significa «el lugar de los muertos», no el infierno de castigo.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque también Cristo padeció una sola vez por los pecados, el justo por los injustos, para llevarnos a Dios, siendo a la verdad muerto en la carne, pero vivificado en espíritu; en el cual también fue y predicó a los espíritus encarcelados, los que en otro tiempo desobedecieron, cuando una vez esperaba la paciencia de Dios en los días de Noé, mientras se preparaba el arca, en la cual pocas personas, es decir, ocho, fueron salvadas por agua.', ref: '1 Pedro 3:18-20' }
      ],
      texto: [
        'Entre la muerte de Jesús el viernes y su resurrección el domingo, su cuerpo estuvo en la tumba. ¿Y su alma? Muchos cristianos confiesan en el Credo de los Apóstoles que Cristo «descendió a los infiernos». La frase ha producido muchas preguntas. Esta estación reúne lo que dice la Biblia, que no es mucho, y las principales maneras de entenderlo.',
        { h: 'Lo que es claro' },
        'Jesús murió de verdad: su cuerpo fue sepultado y su espíritu se separó del cuerpo, como ocurre con toda persona que muere. En la cruz dijo: «Padre, en tus manos encomiendo mi espíritu» (Lc 23:46), y al malhechor arrepentido le prometió: «hoy estarás conmigo en el paraíso» (Lc 23:43). Pedro, citando el salmo 16, dice que su alma no fue dejada en el Hades, el lugar de los muertos, ni su carne vio corrupción (Hch 2:31). Su obra de expiación terminó en la cruz: «Consumado es» (Jn 19:30). No siguió sufriendo por nuestros pecados después de morir.',
        { h: 'Lo que se discute' },
        'Pedro escribe que Cristo, «vivificado en espíritu», fue y «predicó a los espíritus encarcelados» que desobedecieron en los días de Noé (1 P 3:18-20). Es uno de los pasajes más difíciles del Nuevo Testamento. Pablo dice que Cristo había descendido primero «a las partes más bajas de la tierra» (Ef 4:9).',
        { posturas: {
          titulo: '¿Qué significa 1 Pedro 3:19?',
          a: { n: 'Cristo predicó por medio de Noé', t: 'Una lectura entiende que el Espíritu de Cristo predicó por medio de Noé a la gente de su tiempo, que ahora está encarcelada en el lugar de los muertos (2 P 2:5 llama a Noé «pregonero de justicia»). No habría un descenso de Cristo entre su muerte y su resurrección.' },
          b: { n: 'Cristo proclamó su victoria en el mundo de los muertos', t: 'Otra lectura, muy extendida, entiende que entre su muerte y su resurrección, o al resucitar, Cristo proclamó su victoria a espíritus rebeldes, quizá los ángeles caídos de Génesis 6. La palabra «predicó» significaría proclamar, no ofrecer una segunda oportunidad de salvación.' },
          c: 'Este recurso considera que las dos lecturas son posibles y que ninguna doctrina debe apoyarse en este pasaje oscuro. Lo que el pasaje no enseña es una segunda oportunidad después de la muerte: Hebreos 9:27 dice que está establecido morir una sola vez, y después el juicio. Algunos maestros también enseñaron que Cristo sufrió en el infierno a manos de los demonios para completar la salvación; esa idea contradice el «Consumado es» y la promesa del paraíso.'
        } },
        { ejercicio: {
          pregunta: '¿Qué enseñanza contradice claramente la Escritura sobre los días entre la cruz y la resurrección?',
          opciones: [
            { t: 'Que Cristo siguió sufriendo por nuestros pecados en el infierno después de morir.', ok: true, por_que: 'Jesús dijo «Consumado es» (Jn 19:30) y prometió al malhechor el paraíso ese mismo día (Lc 23:43).' },
            { t: 'Que el cuerpo de Jesús estuvo en la tumba.', ok: false, por_que: 'Eso es lo que dicen los evangelios: fue sepultado por José de Arimatea.' },
            { t: 'Que su alma no fue dejada en el Hades.', ok: false, por_que: 'Eso lo dice Pedro en Hechos 2:31, citando el Salmo 16.' }
          ],
          explicacion: 'La expiación terminó en la cruz; lo que siguió fue la victoria.'
        } }
      ],
      pensar: 'Jesús prometió a un malhechor arrepentido: «hoy estarás conmigo en el paraíso». ¿Qué consuelo te da esa promesa frente a tu propia muerte o la de quienes amas?'
    },
    {
      id: 'tumba-vacia', n: 'La tumba vacía y las apariciones', ref: 'Mateo 28:1-10; Marcos 16:1-8; Lucas 24; Juan 20–21; 1 Corintios 15:3-8',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tumba-vacia.webp', alt: 'Al amanecer, en un huerto con olivos, la entrada de una tumba excavada en la roca con una gran piedra redonda corrida a un lado; tres mujeres con velos y frascos de especias se detienen asombradas ante la abertura vacía', pie: 'Las mujeres fueron al sepulcro el primer día de la semana, muy de mañana, y encontraron la piedra removida (Mr 16:1-4).', origen: 'ia', foco: '50% 55%' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las apariciones del resucitado',
          cab: ['A quién', 'Dónde', 'Texto'],
          filas: [
            ['María Magdalena', 'Junto al sepulcro', 'Jn 20:11-18; Mr 16:9'],
            ['Las otras mujeres', 'Camino de la ciudad', 'Mt 28:9-10'],
            ['Pedro (Cefas)', 'Jerusalén', 'Lc 24:34; 1 Co 15:5'],
            ['Dos discípulos', 'Camino a Emaús', 'Lc 24:13-35'],
            ['Los discípulos sin Tomás', 'Jerusalén, de noche', 'Lc 24:36-43; Jn 20:19-23'],
            ['Los once con Tomás', 'Jerusalén, ocho días después', 'Jn 20:26-29'],
            ['Siete discípulos', 'Junto al mar de Galilea', 'Jn 21:1-23'],
            ['Más de quinientos hermanos a la vez', 'Probablemente en Galilea', '1 Co 15:6'],
            ['Jacobo, el hermano del Señor', 'Sin lugar indicado', '1 Co 15:7'],
            ['Los apóstoles, en la ascensión', 'Monte de los Olivos', 'Hch 1:3-11'],
            ['Pablo', 'Camino a Damasco', 'Hch 9:3-6; 1 Co 15:8']
          ],
          nota: 'Durante cuarenta días se presentó vivo «con muchas pruebas indubitables» (Hch 1:3).'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras; y que apareció a Cefas, y después a los doce. Después apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen. Después apareció a Jacobo; después a todos los apóstoles; y al último de todos, como a un abortivo, me apareció a mí.', ref: '1 Corintios 15:3-8' }
      ],
      texto: [
        'El domingo por la mañana, unas mujeres que habían seguido a Jesús desde Galilea fueron al sepulcro a ungir su cuerpo. Se preguntaban quién les quitaría la gran piedra de la entrada. Al llegar, la piedra estaba removida y el cuerpo no estaba. Un ángel les dijo: «No está aquí, pues ha resucitado, como dijo» (Mt 28:6). Así comienza el acontecimiento central de la fe cristiana.',
        { h: 'La tumba vacía' },
        'Los cuatro evangelios cuentan que la tumba estaba vacía. Pedro y Juan corrieron al sepulcro y vieron los lienzos puestos allí y el sudario enrollado aparte (Jn 20:6-7): no parecía un robo, porque nadie se habría detenido a desenvolver el cuerpo. Las autoridades judías no negaron que la tumba estuviera vacía; pagaron a los soldados para que dijeran que los discípulos habían robado el cuerpo mientras ellos dormían (Mt 28:11-15). Un detalle es significativo: los primeros testigos fueron mujeres, cuyo testimonio en aquella cultura tenía poco valor legal. Nadie que inventara la historia habría elegido esos testigos.',
        { h: 'Las apariciones' },
        'Pero la tumba vacía, por sí sola, no produjo la fe. Lo que transformó a los discípulos fue ver a Jesús vivo. La tabla reúne las apariciones. Jesús se apareció a personas solas y a grupos, en casas y al aire libre, en Jerusalén y en Galilea, de día y de noche. Comió con ellos, se dejó tocar y les habló durante cuarenta días. A Tomás, que dudaba, le dijo: «Pon aquí tu dedo, y mira mis manos» (Jn 20:27).',
        { h: 'Un testimonio temprano' },
        'Pablo escribió 1 Corintios hacia el año 55, pero en el capítulo 15 transmite un resumen que él mismo había recibido, probablemente pocos años después de la cruz: que Cristo murió, fue sepultado, resucitó al tercer día y apareció a Cefas, a los doce, a más de quinientos hermanos a la vez, a Jacobo y a todos los apóstoles (1 Co 15:3-7). Pablo agrega que muchos de esos quinientos todavía vivían: cualquiera podía preguntarles.',
        { h: 'Un cuerpo glorificado' },
        'Jesús no resucitó como un espíritu ni volvió a la misma vida mortal, como Lázaro, que después volvió a morir. Resucitó con su mismo cuerpo, con las marcas de los clavos, pero transformado: ya no podía morir, aparecía y desaparecía, no era siempre reconocido de inmediato. Es el primero de una nueva creación.'
      ],
      pensar: 'María Magdalena reconoció a Jesús cuando Él la llamó por su nombre (Jn 20:16). ¿Qué significa para ti que el Resucitado te conoce y te llama por tu nombre?'
    },
    {
      id: 'alternativas', n: 'Las explicaciones alternativas', ref: 'Mateo 27:62-66; 28:11-15; Hechos 2:24-32; 4:18-20; 1 Corintios 15:12-19',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las explicaciones alternativas y sus problemas',
          cab: ['Explicación', 'Qué propone', 'Problema'],
          filas: [
            ['El robo', 'Los discípulos robaron el cuerpo', 'Había guardia y sello (Mt 27:66); los discípulos sufrieron y murieron por lo que sabían que era mentira'],
            ['La tumba equivocada', 'Las mujeres fueron a otra tumba', 'José de Arimatea y las autoridades sabían dónde estaba; bastaba mostrar el cuerpo'],
            ['El desmayo', 'Jesús no murió, solo se desmayó y se recuperó', 'Los soldados romanos sabían matar; la lanza en el costado (Jn 19:34); un herido moribundo no inspira fe en la resurrección'],
            ['Las alucinaciones', 'Los discípulos tuvieron visiones', 'Las alucinaciones son individuales, no de quinientos a la vez; no explican la tumba vacía'],
            ['La leyenda', 'La historia creció con los años', 'El resumen de 1 Corintios 15 es de pocos años después; los testigos vivían']
          ],
          nota: 'El recurso Apologética: preguntas y evidencias, en preparación, desarrollará estas preguntas.'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-pedro-sanedrin.webp', alt: 'Pedro y Juan, de pie ante el Sanedrín, hablan con firmeza', pie: 'Los mismos que habían huido proclamaron la resurrección ante el Sanedrín: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20).', origen: 'ia' }
      ],
      texto: [
        'Desde el principio se buscaron explicaciones para la tumba vacía que no fueran la resurrección. La primera la registra el mismo Mateo: las autoridades dijeron que los discípulos habían robado el cuerpo (Mt 28:13). A lo largo de la historia se han propuesto otras. La tabla resume las principales y sus problemas. El recurso Apologética, hoy en preparación, tratará estas preguntas con más detalle.',
        { h: 'Los hechos que hay que explicar' },
        'Cualquier explicación tiene que dar cuenta de varios hechos que reconocen incluso muchos historiadores no creyentes. Jesús murió crucificado. Fue sepultado en una tumba conocida. Al tercer día la tumba estaba vacía. Sus discípulos, que habían huido aterrados, afirmaron haberlo visto vivo y cambiaron de manera radical: dejaron el miedo y predicaron en la misma Jerusalén donde lo habían crucificado. Jacobo, el hermano de Jesús, que no creía en Él (Jn 7:5), llegó a ser líder de la iglesia. Saulo, un perseguidor, se convirtió en apóstol. Y judíos que guardaban el sábado comenzaron a reunirse el primer día de la semana.',
        { h: 'Por qué no bastan' },
        'Si los discípulos robaron el cuerpo, sabían que la resurrección era mentira, y sin embargo sufrieron cárcel, azotes y muerte por anunciarla. Hay quienes mueren por una mentira que creen verdad, pero nadie muere por lo que sabe que es mentira. Si Jesús solo se desmayó, un hombre medio muerto, sin atención médica, no habría convencido a nadie de que había vencido la muerte. Si fueron alucinaciones, la tumba seguía ocupada, y las autoridades habrían mostrado el cuerpo. Y la leyenda necesita tiempo, pero el resumen de 1 Corintios 15 circulaba pocos años después de la cruz, cuando los testigos todavía vivían.',
        { h: 'La fe y la evidencia' },
        'Las evidencias no reemplazan la fe ni obligan a nadie a creer: Jesús dijo que algunos no creerían «aunque alguno se levantare de los muertos» (Lc 16:31). Pero muestran que la fe cristiana no es un salto al vacío. Lucas dice que Jesús se presentó vivo «con muchas pruebas indubitables» (Hch 1:3). La resurrección es un hecho de la historia que pide una respuesta personal.',
        { ejercicio: {
          pregunta: '¿Por qué la teoría del robo del cuerpo es difícil de sostener?',
          opciones: [
            { t: 'Porque los discípulos sufrieron y murieron por anunciar algo que, si hubieran robado el cuerpo, sabrían que era falso.', ok: true, por_que: 'Nadie entrega su vida por lo que sabe que es mentira; los apóstoles prefirieron la cárcel antes que callar (Hch 4:20).' },
            { t: 'Porque la tumba nunca estuvo vacía.', ok: false, por_que: 'Las mismas autoridades reconocieron que estaba vacía al inventar la historia del robo (Mt 28:13).' },
            { t: 'Porque Jesús no fue sepultado.', ok: false, por_que: 'Los cuatro evangelios y 1 Corintios 15:4 afirman que fue sepultado.' }
          ],
          explicacion: 'El cambio de los discípulos es uno de los argumentos más fuertes a favor de la resurrección.'
        } }
      ],
      pensar: 'Los apóstoles dijeron: «no podemos dejar de decir lo que hemos visto y oído» (Hch 4:20). ¿Qué te impide a ti hablar de lo que Cristo ha hecho en tu vida?'
    },
    {
      id: 'significado', n: 'Qué significa la resurrección', ref: '1 Corintios 15:12-28, 42-57; Romanos 1:4; 4:25; 6:4-11; 8:11; Hechos 17:31',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'y si Cristo no resucitó, vuestra fe es vana; aún estáis en vuestros pecados. Entonces también los que durmieron en Cristo perecieron. Si en esta vida solamente esperamos en Cristo, somos los más dignos de conmiseración de todos los hombres. Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho.', ref: '1 Corintios 15:17-20' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que la resurrección significa',
          cab: ['Para…', 'Significa', 'Texto'],
          filas: [
            ['Cristo', 'Fue declarado Hijo de Dios con poder', 'Ro 1:4'],
            ['La cruz', 'El sacrificio fue aceptado: resucitó para nuestra justificación', 'Ro 4:25'],
            ['El creyente hoy', 'Vida nueva: andamos en vida nueva', 'Ro 6:4'],
            ['El cuerpo del creyente', 'Resucitará como el de Cristo: Él es las primicias', '1 Co 15:20-23'],
            ['El mundo', 'Dios juzgará al mundo por el hombre que resucitó', 'Hch 17:31'],
            ['La muerte', 'Ha sido vencida: ¿Dónde está, oh muerte, tu aguijón?', '1 Co 15:55']
          ],
          nota: 'Pablo dice que, sin resurrección, la fe es vana y aún estamos en nuestros pecados (1 Co 15:17).'
        } }
      ],
      texto: [
        'En Corinto había creyentes que negaban la resurrección de los muertos. Pablo les responde en el capítulo más largo dedicado al tema en todo el Nuevo Testamento. Su argumento comienza con una pregunta: si los muertos no resucitan, entonces Cristo tampoco resucitó. Y si Cristo no resucitó, todo se derrumba: «vuestra fe es vana; aún estáis en vuestros pecados» (1 Co 15:17). La fe cristiana se juega entera en este hecho.',
        { h: 'Para Cristo' },
        'La resurrección confirmó quién era Jesús. Pablo dice que fue «declarado Hijo de Dios con poder… por la resurrección de entre los muertos» (Ro 1:4). No llegó a ser Hijo de Dios al resucitar, pero la resurrección lo demostró ante todos. Pedro predicó en Pentecostés que Dios había hecho Señor y Cristo a este Jesús a quien ellos crucificaron (Hch 2:36). Lo que el mundo condenó como blasfemia, Dios lo vindicó.',
        { h: 'Para la salvación' },
        'Cristo «fue entregado por nuestras transgresiones, y resucitado para nuestra justificación» (Ro 4:25). La resurrección es el recibo que muestra que el pago fue aceptado. Un Cristo muerto sería un Cristo vencido, y su sacrificio, inútil. Además, el creyente participa de la resurrección de Cristo ya ahora: fue sepultado con Él en el bautismo, para andar en vida nueva (Ro 6:4). El mismo poder que levantó a Cristo de los muertos actúa en los que creen (Ef 1:19-20).',
        { h: 'Las primicias' },
        'Pablo usa una imagen del culto de Israel: «Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho» (1 Co 15:20). Las primicias eran la primera gavilla de la cosecha, que se ofrecía a Dios como anticipo y garantía de que vendría el resto (Lv 23:10-11). La resurrección de Cristo es la garantía de la resurrección de los suyos: «luego los que son de Cristo, en su venida» (1 Co 15:23). El cuerpo resucitado será incorruptible, glorioso, poderoso y espiritual, como el de Cristo (1 Co 15:42-44).',
        { h: 'Victoria sobre la muerte' },
        'Pablo termina con un grito de triunfo: «¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?» (1 Co 15:55). Para el creyente, la muerte ya no es el final, sino un sueño del que despertará. Por eso concluye: «estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano» (1 Co 15:58).',
        { ejercicio: {
          pregunta: '¿Qué enseña la imagen de las «primicias» en 1 Corintios 15:20-23?',
          opciones: [
            { t: 'Que la resurrección de Cristo es el anticipo y la garantía de la resurrección de los creyentes.', ok: true, por_que: 'Las primicias eran la primera gavilla, que garantizaba el resto de la cosecha (Lv 23:10-11).' },
            { t: 'Que Cristo fue el único que resucitará.', ok: false, por_que: 'Primicias implica que vendrá el resto: «luego los que son de Cristo, en su venida».' },
            { t: 'Que los creyentes ya resucitaron espiritualmente y no habrá resurrección del cuerpo.', ok: false, por_que: 'Pablo enseña una resurrección corporal futura (1 Co 15:42-44); Himeneo y Fileto erraban al decir que ya había ocurrido (2 Ti 2:18).' }
          ],
          explicacion: 'Lo que Dios hizo con Cristo es lo que hará con todos los que son de Él.'
        } }
      ],
      pensar: 'Pablo saca una conclusión práctica: vuestro trabajo en el Señor no es en vano (1 Co 15:58). ¿Qué servicio a Dios estás tentado a abandonar, y cómo te anima la resurrección a seguir?'
    },
    {
      id: 'ascension', n: 'La ascensión', ref: 'Lucas 24:50-53; Hechos 1:1-11; Juan 14:2-3; 16:7; Efesios 4:8-10; Hebreos 4:14',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-ascension.webp', alt: 'Los apóstoles en el monte de los Olivos miran al cielo mientras una nube oculta a Jesús que asciende', pie: '«Este mismo Jesús… así vendrá como le habéis visto ir al cielo» (Hch 1:11).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y habiendo dicho estas cosas, viéndolo ellos, fue alzado, y le recibió una nube que le ocultó de sus ojos. Y estando ellos con los ojos puestos en el cielo, entre tanto que él se iba, he aquí se pusieron junto a ellos dos varones con vestiduras blancas, los cuales también les dijeron: Varones galileos, ¿por qué estáis mirando al cielo? Este mismo Jesús, que ha sido tomado de vosotros al cielo, así vendrá como le habéis visto ir al cielo.', ref: 'Hechos 1:9-11' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Por qué la ascensión fue buena para nosotros',
          cab: ['Al ascender, Cristo…', 'Texto'],
          filas: [
            ['Fue a preparar lugar para los suyos', 'Jn 14:2-3'],
            ['Envió al Espíritu Santo', 'Os conviene que yo me vaya (Jn 16:7); Hch 2:33'],
            ['Dio dones a los hombres', 'Ef 4:8-11'],
            ['Entró como precursor y sumo sacerdote', 'He 4:14; 6:19-20'],
            ['Llevó nuestra humanidad al trono de Dios', 'He 2:9; Ef 2:6'],
            ['Dejó una promesa: volverá de la misma manera', 'Hch 1:11']
          ],
          nota: 'Lucas cuenta la ascensión dos veces: al final de su evangelio y al comienzo de Hechos.'
        } }
      ],
      texto: [
        'Cuarenta días después de resucitar, Jesús llevó a sus discípulos al monte de los Olivos, cerca de Betania. Les prometió el poder del Espíritu Santo y les mandó ser sus testigos hasta lo último de la tierra. Y entonces, «viéndolo ellos, fue alzado, y le recibió una nube que le ocultó de sus ojos» (Hch 1:9). Dos varones con vestiduras blancas les dijeron que el mismo Jesús volvería de la misma manera.',
        { h: 'Un hecho, no un símbolo' },
        'Lucas cuenta la ascensión como un acontecimiento visible: los discípulos vieron a Jesús subir. No fue una manera poética de decir que Jesús «se fue al corazón de los creyentes». El mismo Jesús, con su cuerpo resucitado, dejó la tierra y entró en la presencia del Padre. La nube recuerda la nube de gloria que acompañó a Israel en el desierto y llenó el tabernáculo: Jesús entró en la gloria de Dios.',
        { h: 'Os conviene que yo me vaya' },
        'Los discípulos podrían haber sentido la ascensión como una pérdida. Pero Lucas dice que volvieron a Jerusalén «con gran gozo» (Lc 24:52). Jesús les había explicado: «Os conviene que yo me vaya; porque si no me fuera, el Consolador no vendría a vosotros» (Jn 16:7). Mientras estaba en la tierra, Jesús podía estar en un solo lugar. Por medio del Espíritu, su presencia está con cada creyente en todo lugar. Diez días después de la ascensión llegó Pentecostés.',
        { h: 'Nuestra humanidad en el cielo' },
        'La ascensión significa también que hay un hombre glorificado en el trono del universo. Jesús no dejó su humanidad al subir: la llevó consigo. Hebreos dice que tenemos «un gran sumo sacerdote que traspasó los cielos» (He 4:14), y que entró detrás del velo como precursor nuestro (He 6:20). Donde está la cabeza, estará el cuerpo. Por eso Pablo dice que Dios nos hizo sentar con Él en los lugares celestiales (Ef 2:6).',
        { h: 'La promesa' },
        'La ascensión deja una promesa: «Este mismo Jesús… así vendrá como le habéis visto ir al cielo» (Hch 1:11). Se fue personal, corporal y visiblemente, y así volverá. Mientras tanto, los ángeles corrigen a los discípulos: no es tiempo de quedarse mirando al cielo, sino de ir a Jerusalén a esperar el poder y luego ser testigos.'
      ],
      pensar: 'Los ángeles preguntaron: «¿por qué estáis mirando al cielo?» (Hch 1:11). ¿Cómo se equilibra en tu vida la esperanza de su venida con la tarea de ser su testigo ahora?'
    },
    {
      id: 'diestra', n: 'A la diestra del Padre', ref: 'Salmo 110:1; Hechos 2:32-36; Romanos 8:34; Efesios 1:20-23; Hebreos 1:3; 7:25; 1 Juan 2:1',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperios-historia/img/integrador-pentecostes.webp', alt: 'Los discípulos reunidos en Jerusalén reciben el Espíritu Santo como lenguas de fuego', pie: 'Exaltado a la diestra de Dios, Jesús recibió del Padre la promesa del Espíritu y «ha derramado esto que vosotros veis y oís» (Hch 2:33).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'A este Jesús resucitó Dios, de lo cual todos nosotros somos testigos. Así que, exaltado por la diestra de Dios, y habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís. Porque David no subió a los cielos; pero él mismo dice: Dijo el Señor a mi Señor: Siéntate a mi diestra, Hasta que ponga a tus enemigos por estrado de tus pies. Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo.', ref: 'Hechos 2:32-36' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Cristo hace desde la diestra',
          cab: ['Cristo…', 'Texto'],
          filas: [
            ['Reina sobre todo principado y autoridad', 'Ef 1:20-22; 1 P 3:22'],
            ['Intercede por los suyos', 'Ro 8:34; He 7:25'],
            ['Es nuestro abogado cuando pecamos', '1 Jn 2:1'],
            ['Derrama el Espíritu Santo y bautiza con Él', 'Hch 2:33; Mt 3:11'],
            ['Da dones a la iglesia', 'Ef 4:8-12'],
            ['Espera hasta que sus enemigos sean puestos por estrado de sus pies', 'Sal 110:1; He 10:12-13']
          ],
          nota: 'El Salmo 110:1 es el versículo del Antiguo Testamento más citado en el Nuevo.'
        } }
      ],
      texto: [
        '«Jehová dijo a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies» (Sal 110:1). Es el versículo del Antiguo Testamento que más veces se cita o se menciona en el Nuevo. Jesús lo usó para mostrar que el Mesías era más que hijo de David (Mr 12:35-37), y los apóstoles lo usaron una y otra vez para explicar dónde está Jesús ahora y qué está haciendo.',
        { h: 'Sentado: la obra está hecha' },
        'Estar sentado a la diestra de un rey significaba compartir su autoridad y su honor. Hebreos dice que Cristo, después de efectuar la purificación de nuestros pecados, «se sentó a la diestra de la Majestad en las alturas» (He 1:3). Está sentado porque su sacrificio está terminado. Y reina: Dios lo sentó «sobre todo principado y autoridad y poder y señorío, y sobre todo nombre que se nombra» (Ef 1:21). Nada en el universo está fuera de su autoridad.',
        { h: 'Intercede' },
        'Desde la diestra, Cristo intercede por los suyos. Pablo pregunta: «¿Quién es el que condenará? Cristo es el que murió; más aun, el que también resucitó, el que además está a la diestra de Dios, el que también intercede por nosotros» (Ro 8:34). Cuando un creyente peca, «abogado tenemos para con el Padre, a Jesucristo el justo» (1 Jn 2:1). Antes de negarlo, Pedro escuchó que Jesús había rogado por él para que su fe no faltara (Lc 22:32). Así ora Cristo hoy por cada uno de los suyos.',
        { h: 'Derrama el Espíritu' },
        'En Pentecostés, Pedro explicó lo que estaba ocurriendo: Jesús, «exaltado por la diestra de Dios, y habiendo recibido del Padre la promesa del Espíritu Santo, ha derramado esto que vosotros veis y oís» (Hch 2:33). El bautismo en el Espíritu Santo es obra del Cristo exaltado. Juan el Bautista lo había anunciado: «él os bautizará en Espíritu Santo y fuego» (Mt 3:11). El derramamiento del Espíritu, con las lenguas como señal, es la prueba de que Jesús está vivo y reina. Es una de las convicciones centrales del pentecostalismo: Jesús sigue bautizando con el Espíritu Santo a los que creen.',
        { h: 'Hasta que' },
        'El salmo dice «hasta que». Cristo reina, pero sus enemigos todavía no han sido puestos completamente bajo sus pies. «El postrer enemigo que será destruido es la muerte» (1 Co 15:26). La historia avanza hacia ese día.',
        { ejercicio: {
          pregunta: 'Según Hechos 2:33, ¿qué muestra el derramamiento del Espíritu en Pentecostés?',
          opciones: [
            { t: 'Que Jesús fue exaltado a la diestra de Dios y, desde allí, derramó el Espíritu prometido.', ok: true, por_que: 'Pedro une la exaltación de Jesús con el derramamiento: es su obra como Cristo exaltado.' },
            { t: 'Que los discípulos habían alcanzado un nivel espiritual por su propio esfuerzo.', ok: false, por_que: 'El Espíritu es «la promesa del Padre», un don recibido, no un logro humano.' },
            { t: 'Que Jesús había dejado de actuar y el Espíritu lo reemplazó.', ok: false, por_que: 'Es Jesús quien derrama el Espíritu: el Espíritu no lo reemplaza, sino que lo hace presente.' }
          ],
          explicacion: 'Pentecostés es la prueba de que Jesús vive, reina y sigue bautizando con el Espíritu Santo.'
        } }
      ],
      pensar: 'Cristo intercede por ti y te ofrece la llenura del Espíritu. ¿Vives con la conciencia de que tienes un abogado en el cielo y un poder prometido para servir en la tierra?'
    },
    {
      id: 'cabeza', n: 'Cabeza de la iglesia', ref: 'Mateo 16:18; Efesios 1:22-23; 4:11-16; 5:23-27; Colosenses 1:18; Apocalipsis 1:12-20',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../hechos/img/hechos-casa-iglesia.webp', alt: 'Una iglesia del siglo I reunida en una casa: hombres, mujeres y niños escuchan la lectura de las Escrituras y parten el pan', pie: 'La iglesia es el cuerpo de Cristo, y Él es la cabeza (Col 1:18).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Imágenes de Cristo y su iglesia',
          cab: ['Cristo es…', 'La iglesia es…', 'Texto'],
          filas: [
            ['La cabeza', 'Su cuerpo', 'Ef 1:22-23; Col 1:18'],
            ['El esposo', 'Su esposa', 'Ef 5:25-27; Ap 19:7'],
            ['La piedra angular', 'Un templo santo', 'Ef 2:20-22; 1 P 2:4-5'],
            ['El buen pastor', 'Su rebaño', 'Jn 10:14-16; 1 P 5:4'],
            ['La vid', 'Los pámpanos', 'Jn 15:5'],
            ['El constructor', 'Su obra: edificaré mi iglesia', 'Mt 16:18']
          ],
          nota: 'Cada imagen subraya un aspecto: vida, amor, solidez, cuidado, fruto y propiedad.'
        } }
      ],
      texto: [
        'En Cesarea de Filipo, después de la confesión de Pedro, Jesús dijo: «edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella» (Mt 16:18). Es la primera vez que aparece la palabra iglesia en los evangelios. La iglesia es obra de Cristo, le pertenece y Él la gobierna. El Nuevo Testamento usa varias imágenes para describir esa relación; la tabla reúne las principales.',
        { h: 'La cabeza y el cuerpo' },
        'La imagen más característica de Pablo es la del cuerpo. Cristo es «la cabeza del cuerpo que es la iglesia» (Col 1:18). En el pensamiento antiguo, la cabeza era la fuente de la dirección y de la vida. La iglesia recibe de Cristo su crecimiento (Ef 4:15-16), y cada creyente es un miembro con una función propia. Ningún líder humano es la cabeza de la iglesia: los apóstoles, profetas, evangelistas, pastores y maestros son dones que Cristo da para edificar el cuerpo (Ef 4:11-12), pero la cabeza es solo Él.',
        { h: 'El esposo' },
        'Pablo también presenta a Cristo como el esposo que amó a la iglesia «y se entregó a sí mismo por ella, para santificarla» (Ef 5:25-26). La cruz fue el precio de su amor por su esposa, y su meta es presentársela a sí mismo gloriosa, sin mancha ni arruga. Apocalipsis anuncia las bodas del Cordero (Ap 19:7). Esta imagen dice que la relación de Cristo con su pueblo no es solo de autoridad, sino de amor.',
        { h: 'En medio de los candeleros' },
        'Cuando Juan vio a Cristo glorificado en Patmos, lo vio andando en medio de siete candeleros de oro, que representaban a las siete iglesias (Ap 1:12-20). Cristo conocía cada iglesia: sus obras, sus luchas, sus pecados. Las elogió, las corrigió y les hizo promesas. Así sigue presente en su iglesia hoy, por medio de su Espíritu: la conoce, la cuida y la purifica. El recurso Apocalipsis estudia esas cartas.',
        'Que Cristo sea la cabeza significa que la iglesia no es un club ni una empresa, sino un cuerpo vivo que le obedece. La pregunta de toda iglesia no es qué queremos hacer, sino qué quiere la cabeza.',
        { ir: { t: 'Ver la ruta de las siete iglesias en Apocalipsis', a: '../../apocalipsis/' } }
      ],
      pensar: 'Si eres un miembro del cuerpo de Cristo, tienes una función. ¿Cuál es tu lugar en su cuerpo, y estás recibiendo de Él la vida para cumplirlo?'
    }
  ];

  window.__CRISTO.cruz = window.__CRISTO.cruz.concat(cruz2);
  window.__CRISTO.exaltado = exaltado;
})();
/* La persona y obra de Cristo · rutas VII. Cristo hoy y el que viene y VIII. Textos difíciles (ver encabezado en parte1.js) */
(() => {
  /* ---------------- VII. Cristo hoy y el que viene ---------------- */
  const viene = [
    {
      id: 'evangelio-completo', n: 'Salvador, Bautizador, Sanador y Rey que viene', ref: 'Hechos 4:12; Mateo 3:11; 8:16-17; Hechos 1:11; Hebreos 13:8',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-evangelio.svg', alt: 'Esquema de cuatro cuadros alrededor del nombre de Jesús: Salvador, que bautiza con el Espíritu Santo, Sanador y Rey que viene, cada uno con su texto bíblico y la ruta del recurso donde se estudia', pie: 'Las cuatro verdades del evangelio completo, centradas en Cristo.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Jesucristo es el mismo ayer, y hoy, y por los siglos.', ref: 'Hebreos 13:8' }
      ],
      texto: [
        'A fines del siglo XIX, varios predicadores del movimiento de santidad resumieron su mensaje en cuatro afirmaciones sobre Jesús. Las Asambleas de Dios y otras iglesias pentecostales recibieron ese resumen y lo llamaron el evangelio completo: Jesús salva, Jesús bautiza con el Espíritu Santo, Jesús sana y Jesús viene otra vez. Lo notable es que las cuatro son afirmaciones sobre Cristo. El evangelio completo no es una lista de experiencias, sino la presentación de un Cristo completo.',
        { h: 'Salvador' },
        'Lo primero es la salvación. Pedro dijo ante el Sanedrín: «en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos» (Hch 4:12). Todo lo demás descansa sobre la cruz y la resurrección, que se estudiaron en las rutas V y VI.',
        { h: 'El que bautiza con el Espíritu' },
        'Juan el Bautista presentó a Jesús con dos títulos: el Cordero de Dios que quita el pecado del mundo (Jn 1:29) y el que bautiza con el Espíritu Santo (Jn 1:33). Las dos obras son suyas. Desde la diestra del Padre, Jesús derramó el Espíritu en Pentecostés (Hch 2:33), y la promesa sigue vigente para todos los que el Señor llame (Hch 2:39). La línea pentecostal clásica enseña que el bautismo en el Espíritu es una experiencia distinta de la conversión, que da poder para el testimonio y cuya señal inicial es hablar en otras lenguas. El recurso El Espíritu Santo estudia la doctrina.',
        { h: 'Sanador' },
        'Jesús sanó a los enfermos durante su ministerio, y Mateo dice que así cumplió la profecía: «El mismo tomó nuestras enfermedades, y llevó nuestras dolencias» (Mt 8:17). La estación «Sanidad en la expiación» explicó por qué la línea pentecostal clásica enseña que la sanidad está provista en la cruz.',
        { h: 'Rey que viene' },
        'Finalmente, el mismo Jesús que ascendió volverá (Hch 1:11). La esperanza de su venida mantiene a la iglesia despierta y en misión. La estación siguiente la resume.',
        { h: 'El mismo' },
        '«Jesucristo es el mismo ayer, y hoy, y por los siglos» (He 13:8). El Jesús que salvó, sanó y llenó con el Espíritu a los creyentes del Nuevo Testamento es el mismo hoy. El recurso El movimiento pentecostal cuenta cómo esta convicción impulsó uno de los movimientos cristianos más grandes de la historia.',
        { ir: { t: 'Ver «El evangelio completo» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#doctrina/1' } },
        { ir: { t: 'Ver «La promesa del Padre» en El Espíritu Santo', a: '../../espiritu-santo/#bautismo/1' } }
      ],
      pensar: 'Si Jesucristo es el mismo ayer, y hoy, y por los siglos, ¿esperas de Él hoy lo que hizo en el Nuevo Testamento: salvar, llenar con el Espíritu, sanar y preparar a su pueblo para su venida?'
    },
    {
      id: 'segunda-venida', n: 'Viene otra vez', ref: 'Juan 14:1-3; Hechos 1:11; 1 Tesalonicenses 4:13-18; Tito 2:11-14; Apocalipsis 19:11-16; 22:20',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../escatologia/img/esc-segunda-venida.webp', alt: 'Cristo vuelve en gloria entre las nubes, con el rostro oculto por la luz', pie: 'El mismo Jesús que ascendió volverá en gloria (Hch 1:11; Ap 19:11-16).', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La venida de Cristo en dos fases, según la lectura pretribulacional',
          cab: ['', 'El arrebatamiento', 'La venida en gloria'],
          filas: [
            ['Para quién', 'Viene por su iglesia', 'Viene con su iglesia'],
            ['Dónde', 'En el aire (1 Ts 4:17)', 'Sobre la tierra, al monte de los Olivos (Zac 14:4)'],
            ['Cuándo', 'Antes de la tribulación, en cualquier momento', 'Al final de la tribulación'],
            ['Quién lo ve', 'La iglesia', 'Todo ojo le verá (Ap 1:7)'],
            ['Para qué', 'Reunir y transformar a los suyos (1 Co 15:51-52)', 'Juzgar, vencer al anticristo y reinar (Ap 19:11-20:6)']
          ],
          nota: 'El recurso Los últimos tiempos explica el esquema completo y las otras posturas.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor.', ref: '1 Tesalonicenses 4:16-17' }
      ],
      texto: [
        'La noche antes de morir, Jesús prometió a sus discípulos: «vendré otra vez, y os tomaré a mí mismo, para que donde yo estoy, vosotros también estéis» (Jn 14:3). Cuando ascendió, los ángeles confirmaron que volvería de la misma manera. La segunda venida no es un tema secundario: el Nuevo Testamento la menciona unas trescientas veces, y la Biblia termina con la oración «sí, ven, Señor Jesús» (Ap 22:20).',
        { h: 'Personal, visible y gloriosa' },
        'Cristo no volverá solo en un sentido espiritual, ni su venida se cumplió en la caída de Jerusalén o en Pentecostés. Volverá personalmente, «este mismo Jesús», visiblemente, «como le habéis visto ir al cielo» (Hch 1:11), y con gloria: el que vino en humildad, montado en un asno, volverá como Rey de reyes y Señor de señores (Ap 19:16).',
        { h: 'Dos fases' },
        'Siguiendo la escatología dispensacionalista, este recurso entiende que la venida de Cristo tiene dos fases, como muestra la tabla. Primero, el arrebatamiento de la iglesia: el Señor descenderá del cielo, los muertos en Cristo resucitarán primero, y los creyentes que estén vivos serán arrebatados para recibirlo en el aire (1 Ts 4:16-17). Después de la tribulación, Cristo vendrá con su iglesia sobre la tierra para vencer al anticristo, juzgar a las naciones y establecer su reino de mil años. El recurso Los últimos tiempos estudia cada evento y presenta las otras posturas.',
        { ir: { t: 'Ver «El arrebatamiento de la iglesia» en Los últimos tiempos', a: '../../escatologia/#eventos/2' } },
        { ir: { t: 'Ver «La segunda venida de Cristo» en Los últimos tiempos', a: '../../escatologia/#eventos/18' } },
        { h: 'Sin fijar fechas' },
        'Jesús advirtió que nadie sabe el día ni la hora (Mt 24:36). Todas las predicciones con fecha han fallado. Lo que Jesús pidió no fue calcular, sino velar: estar preparados porque vendrá cuando no se espera (Mt 24:44).',
        { h: 'La esperanza bienaventurada' },
        'Pablo llama a la venida de Cristo «la esperanza bienaventurada» (Tit 2:13). Esa esperanza consuela a los que lloran a sus muertos (1 Ts 4:18), purifica a los que esperan (1 Jn 3:3) e impulsa la misión, porque el evangelio debe predicarse en todo el mundo antes del fin (Mt 24:14).'
      ],
      pensar: '«Todo aquel que tiene esta esperanza en él, se purifica a sí mismo, así como él es puro» (1 Jn 3:3). ¿Qué cambiaría en tu vida esta semana si supieras que Cristo vuelve pronto?'
    },
    {
      id: 'en-cristo', n: '«En Cristo»: la unión con Cristo', ref: 'Juan 15:1-8; Romanos 6:3-11; 8:1; 2 Corintios 5:17; Gálatas 2:20; Efesios 1:3-14; Colosenses 3:1-4',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que tenemos «en Cristo»',
          cab: ['En Cristo…', 'Texto'],
          filas: [
            ['Fuimos escogidos antes de la fundación del mundo', 'Ef 1:4'],
            ['Tenemos redención por su sangre, el perdón de pecados', 'Ef 1:7'],
            ['No hay condenación', 'Ro 8:1'],
            ['Somos nueva criatura', '2 Co 5:17'],
            ['Somos bendecidos con toda bendición espiritual', 'Ef 1:3'],
            ['Morimos al pecado y vivimos para Dios', 'Ro 6:11'],
            ['Fuimos sellados con el Espíritu Santo', 'Ef 1:13'],
            ['Nada nos podrá separar del amor de Dios', 'Ro 8:39'],
            ['Seremos vivificados en la resurrección', '1 Co 15:22']
          ],
          nota: 'La expresión «en Cristo», con sus variantes «en él» y «en el Señor», aparece más de ciento cincuenta veces en las cartas de Pablo.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Permaneced en mí, y yo en vosotros. Como el pámpano no puede llevar fruto por sí mismo, si no permanece en la vid, así tampoco vosotros, si no permanecéis en mí. Yo soy la vid, vosotros los pámpanos; el que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer.', ref: 'Juan 15:4-5' }
      ],
      texto: [
        'Si se buscara una sola expresión para resumir la vida cristiana según Pablo, sería esta: «en Cristo». La usa una y otra vez. Todo lo que Cristo hizo llega al creyente porque está unido a Él. La teología llama a esto la unión con Cristo.',
        { h: 'Lo que Cristo hizo, cuenta para mí' },
        'Pablo enseña que el creyente fue unido a Cristo en su muerte y en su resurrección. «Somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos… así también nosotros andemos en vida nueva» (Ro 6:4). Por eso puede decir: «Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí» (Ga 2:20). Lo que le pasó a Cristo, la cabeza, cuenta para todo su cuerpo. Su muerte es mi muerte al pecado; su resurrección es mi vida nueva; su justicia es mi justicia. Por eso «ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1).',
        { h: 'Nueva criatura' },
        'La unión con Cristo no es solo un cambio de situación legal, sino de vida. «De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas» (2 Co 5:17). Cristo vive en el creyente por medio del Espíritu Santo, y lo va transformando a su imagen.',
        { h: 'Permanecer' },
        'Jesús describió esta unión con la imagen de la vid: «Permaneced en mí, y yo en vosotros» (Jn 15:4). El pámpano no produce fruto por esfuerzo propio, sino recibiendo la savia de la vid. Separados de Él, nada podemos hacer. Permanecer en Cristo significa vivir en una relación constante con Él: guardar sus palabras, obedecer sus mandamientos y amar como Él amó (Jn 15:7-12).',
        { h: 'Una vida escondida' },
        'Pablo dice a los colosenses que su vida «está escondida con Cristo en Dios», y que cuando Cristo se manifieste, ellos también serán manifestados con Él en gloria (Col 3:3-4). Por eso deben buscar las cosas de arriba. La unión con Cristo une el pasado (morimos con Él), el presente (vivimos en Él) y el futuro (seremos glorificados con Él). Cómo se aplica la salvación al creyente se estudiará en el recurso La salvación, hoy en preparación.',
        { ejercicio: {
          pregunta: '¿Por qué Pablo puede decir «con Cristo estoy juntamente crucificado» (Ga 2:20)?',
          opciones: [
            { t: 'Porque el creyente está unido a Cristo, y lo que Cristo hizo cuenta para él: su muerte es su muerte al pecado.', ok: true, por_que: 'Romanos 6:3-11 explica que fuimos unidos a Cristo en su muerte y en su resurrección.' },
            { t: 'Porque Pablo también fue crucificado físicamente.', ok: false, por_que: 'Pablo habla de una realidad espiritual: su vida vieja quedó en la cruz con Cristo.' },
            { t: 'Porque el creyente debe sufrir para pagar parte de sus pecados.', ok: false, por_que: 'Cristo pagó todo. La unión con Él no añade un pago, sino que nos da lo que Él ganó.' }
          ],
          explicacion: 'Unidos a Cristo, su historia se vuelve nuestra historia.'
        } }
      ],
      pensar: 'Un pámpano no se esfuerza por dar fruto: permanece en la vid. ¿Qué te ayuda a permanecer en Cristo cada día, y qué te aleja de Él?'
    },
    {
      id: 'senor', n: '«Jesucristo es el Señor»', ref: 'Filipenses 2:9-11; Romanos 10:9-13; 1 Corintios 12:3; Lucas 6:46; Mateo 7:21-27; 28:18-20',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../imperio-romano/img/roma-culto-emperador.webp', alt: 'Ciudadanos de una ciudad romana ofrecen incienso ante la estatua del emperador en un templo', pie: 'En el Imperio romano, decir «Jesús es el Señor» era negarse a decir «César es el señor».', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo. Porque con el corazón se cree para justicia, pero con la boca se confiesa para salvación.', ref: 'Romanos 10:9-10' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Confesar a Jesús como Señor',
          cab: ['Significa', 'Texto'],
          filas: [
            ['Creer que es Dios', 'Kýrios traduce el nombre de Jehová (Fil 2:10-11; Is 45:23)'],
            ['Recibir la salvación', 'Si confesares con tu boca que Jesús es el Señor… serás salvo (Ro 10:9)'],
            ['Una obra del Espíritu', 'Nadie puede llamar a Jesús Señor, sino por el Espíritu Santo (1 Co 12:3)'],
            ['Obedecerle', '¿Por qué me llamáis, Señor, Señor, y no hacéis lo que yo digo? (Lc 6:46)'],
            ['Pertenecerle', 'Ya sea que vivamos, o que muramos, del Señor somos (Ro 14:8)'],
            ['Seguirle en su misión', 'Toda potestad me es dada… por tanto, id (Mt 28:18-19)']
          ],
          nota: 'La confesión más antigua de la iglesia tiene solo tres palabras en griego: Kýrios Iesoús, «Jesús es Señor».'
        } }
      ],
      texto: [
        'La confesión de fe más antigua de la iglesia era muy breve: «Jesús es el Señor». Pablo dice que si alguien confiesa con su boca que Jesús es el Señor y cree en su corazón que Dios le levantó de los muertos, será salvo (Ro 10:9). Este recurso termina donde termina el himno de Filipenses 2: con toda lengua confesando «que Jesucristo es el Señor, para gloria de Dios Padre» (Fil 2:11).',
        { h: 'Una confesión peligrosa' },
        'En el Imperio romano, decir «Jesús es el Señor» podía costar la vida. Los ciudadanos debían honrar al emperador con incienso y declarar que César era señor. Hacia el año 155, el anciano Policarpo, obispo de Esmirna, fue llevado ante el procónsul, que le pidió que maldijera a Cristo para salvar su vida. Según el relato de su martirio, respondió que había servido a Cristo ochenta y seis años y que Él nunca le había hecho ningún mal: ¿cómo iba a blasfemar contra su Rey, que lo había salvado? Fue quemado vivo. Para los primeros cristianos, la confesión no era una fórmula, sino una lealtad por la que valía la pena morir.',
        { h: 'Señor de verdad' },
        'Jesús advirtió que no basta con decir «Señor, Señor»: «¿Por qué me llamáis, Señor, Señor, y no hacéis lo que yo digo?» (Lc 6:46). Llamarlo Señor es reconocer su autoridad sobre cada área de la vida: el dinero, las relaciones, el tiempo, el cuerpo, las decisiones. No se puede recibir a Jesús como Salvador y rechazarlo como Señor. Al terminar el Sermón del monte, Jesús comparó al que oye sus palabras y las hace con un hombre que edificó su casa sobre la roca (Mt 7:24-27).',
        { h: 'El Señor que envía' },
        'Antes de ascender, el Señor resucitado dijo: «Toda potestad me es dada en el cielo y en la tierra. Por tanto, id, y haced discípulos a todas las naciones» (Mt 28:18-19). Su señorío es la base de la misión. Y prometió: «yo estoy con vosotros todos los días, hasta el fin del mundo» (Mt 28:20).',
        { h: 'Al final de este recurso' },
        'Este estudio comenzó con la pregunta de Jesús en Cesarea de Filipo: «Y vosotros, ¿quién decís que soy yo?». A lo largo de las rutas hemos visto que es el Verbo eterno, el Hijo encarnado, verdadero Dios y verdadero hombre, el profeta, sacerdote y rey, el crucificado por nuestros pecados, el resucitado, el exaltado que derrama el Espíritu y el Rey que viene. La respuesta que la Escritura espera no es solo un conocimiento correcto, sino la confesión de Tomás: «¡Señor mío, y Dios mío!» (Jn 20:28).',
        { ejercicio: {
          pregunta: 'Según Lucas 6:46, ¿qué implica llamar a Jesús «Señor»?',
          opciones: [
            { t: 'Obedecer lo que Él dice, reconociendo su autoridad sobre toda la vida.', ok: true, por_que: 'Jesús reprocha a quienes lo llaman Señor sin hacer lo que Él dice.' },
            { t: 'Usar el título correcto en la oración.', ok: false, por_que: 'Jesús dice que no basta con decir «Señor, Señor» (Mt 7:21).' },
            { t: 'Solo reconocer que es un gran maestro.', ok: false, por_que: 'Kýrios aplicado a Jesús es el nombre de Dios: implica adoración y obediencia.' }
          ],
          explicacion: 'Confesar a Jesús como Señor es creer quién es y entregarle la vida.'
        } }
      ],
      pensar: 'Policarpo prefirió morir antes que negar a su Rey. ¿Qué te cuesta hoy confesar que Jesucristo es el Señor, y estás dispuesto a pagarlo?'
    }
  ];

  /* ---------------- VIII. Textos difíciles sobre Cristo ---------------- */
  const textos = [
    {
      id: 'ni-el-hijo', n: '«Ni aun… el Hijo» sabe el día', ref: 'Marcos 13:32; Mateo 24:36; Juan 16:30; 21:17; Filipenses 2:7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero de aquel día y de la hora nadie sabe, ni aun los ángeles que están en el cielo, ni el Hijo, sino el Padre.', ref: 'Marcos 13:32' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Jesús sabía y lo que dijo no saber',
          cab: ['Mostró un conocimiento divino', 'Dijo no saber o preguntó'],
          filas: [
            ['Conocía los pensamientos (Mr 2:8; Lc 6:8)', 'El día y la hora de su venida (Mr 13:32)'],
            ['Sabía lo que había en el hombre (Jn 2:24-25)', '¿Quién ha tocado mis vestidos? (Mr 5:30)'],
            ['Conocía la vida de la samaritana (Jn 4:17-18)', '¿Dónde le pusisteis? (Jn 11:34)'],
            ['Predijo la negación de Pedro (Mt 26:34)', 'Crecía en sabiduría (Lc 2:52)'],
            ['Señor, tú lo sabes todo (Jn 21:17)', '']
          ],
          nota: 'Algunas preguntas de Jesús eran pedagógicas, pero Marcos 13:32 es una afirmación clara.'
        } }
      ],
      texto: [
        'Hablando de su venida, Jesús dijo: «Pero de aquel día y de la hora nadie sabe, ni aun los ángeles que están en el cielo, ni el Hijo, sino el Padre» (Mr 13:32). Los que niegan la divinidad de Cristo usan este versículo como prueba: si Jesús no sabía algo, no podía ser Dios, porque Dios lo sabe todo. ¿Cómo se entiende?',
        { h: 'Las dos naturalezas' },
        'La clave está en lo que se estudió en la ruta III: Jesús es una sola persona con dos naturalezas. Como Dios, lo sabe todo; Pedro le dijo después de la resurrección: «Señor, tú lo sabes todo» (Jn 21:17). Como hombre, tenía una mente humana que crecía en sabiduría (Lc 2:52) y que no abarcaba todo. Al hacerse hombre, el Hijo se despojó a sí mismo (Fil 2:7): no dejó de ser Dios, pero eligió vivir dentro de los límites de una mente humana y recibir del Padre lo que debía saber y decir (Jn 12:49). La tabla muestra que, en su vida terrenal, Jesús mostró a veces un conocimiento divino y otras veces habló desde su conocimiento humano.',
        'Así, Jesús podía decir con verdad que, en su condición de siervo, no conocía el día. No era parte de lo que el Padre le había dado a revelar durante su ministerio. Después de su resurrección y glorificación, el Señor exaltado sigue diciendo que los tiempos y las sazones están en la potestad del Padre (Hch 1:7), pero ya no habla de su propia ignorancia.',
        { h: 'Lo que el versículo afirma' },
        'Es interesante notar el orden del versículo: nadie sabe, ni los hombres, ni los ángeles, ni el Hijo, sino el Padre. Jesús se coloca por encima de los ángeles, en una escala que va de las criaturas al Padre. Y se llama a sí mismo «el Hijo», en sentido absoluto, como en Mateo 11:27, donde dice que nadie conoce al Hijo sino el Padre, ni al Padre sino el Hijo. Lejos de negar su divinidad, el versículo supone su relación única con el Padre.',
        { ejercicio: {
          pregunta: '¿Cómo se entiende que Jesús dijera que «ni el Hijo» sabía el día de su venida?',
          opciones: [
            { t: 'Hablaba desde su naturaleza humana, en la que se despojó a sí mismo y recibía del Padre lo que debía revelar.', ok: true, por_que: 'Como hombre crecía en sabiduría (Lc 2:52); como Dios, lo sabe todo (Jn 21:17).' },
            { t: 'Demuestra que Jesús es una criatura y no es Dios.', ok: false, por_que: 'El mismo versículo pone al Hijo por encima de los ángeles, y otros textos muestran su conocimiento divino (Jn 2:24-25; 16:30).' },
            { t: 'Jesús fingía no saber para que no le preguntaran.', ok: false, por_que: 'Jesús no mentía. Su afirmación era verdadera en su condición humana.' }
          ],
          explicacion: 'Lo que es verdad de una naturaleza se dice de la persona: el Hijo, como hombre, no conocía el día.'
        } }
      ],
      pensar: 'Si ni siquiera el Hijo, en su humildad, quiso conocer lo que el Padre se reservó, ¿por qué hay creyentes tan ansiosos por calcular fechas? ¿Qué te pide Jesús en lugar de calcular?'
    },
    {
      id: 'bueno', n: '«¿Por qué me llamas bueno?»', ref: 'Marcos 10:17-22; Lucas 18:18-23; Juan 8:46; 10:11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Al salir él para seguir su camino, vino uno corriendo, e hincando la rodilla delante de él, le preguntó: Maestro bueno, ¿qué haré para heredar la vida eterna? Jesús le dijo: ¿Por qué me llamas bueno? Ninguno hay bueno, sino sólo uno, Dios.', ref: 'Marcos 10:17-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos maneras de leer la pregunta',
          cab: ['Lectura', 'Qué entiende', 'Problema'],
          filas: [
            ['Jesús niega ser bueno', 'Jesús se distingue de Dios y admite no ser bueno', 'Contradice Juan 8:46 y 10:11, donde Jesús se declara sin pecado y «el buen pastor»'],
            ['Jesús hace pensar al joven', 'Si solo Dios es bueno y me llamas bueno, ¿te das cuenta de lo que dices?', 'Encaja con el resto del diálogo: Jesús le pide que lo siga a Él']
          ],
          nota: 'Jesús no dice «no soy bueno», sino «¿por qué me llamas bueno?».'
        } }
      ],
      texto: [
        'Un hombre rico corrió hacia Jesús, se arrodilló y le preguntó: «Maestro bueno, ¿qué haré para heredar la vida eterna?». Jesús le respondió: «¿Por qué me llamas bueno? Ninguno hay bueno, sino sólo uno, Dios» (Mr 10:17-18). Algunos leen esta respuesta como si Jesús negara ser bueno y, por tanto, ser Dios.',
        { h: 'Una pregunta, no una negación' },
        'Jesús no dice «no soy bueno». Hace una pregunta. Y la pregunta lleva al hombre a pensar: si solo Dios es bueno, y tú me llamas bueno, ¿te das cuenta de lo que estás diciendo? El joven usaba «bueno» como un cumplido de cortesía, como quien saluda a un rabino respetado. Jesús lo obliga a tomar en serio la palabra. Si de verdad es bueno, entonces es Dios; y si es Dios, el hombre debe obedecerle.',
        { h: 'El resto del diálogo' },
        'Eso es precisamente lo que ocurre después. El joven dice que ha guardado los mandamientos desde su juventud. Jesús, mirándolo, lo amó y le dijo: vende lo que tienes, dalo a los pobres, «y ven, sígueme» (Mr 10:21). El joven se fue triste, porque tenía muchas posesiones. Jesús le pidió la obediencia que se debe a Dios: dejarlo todo y seguirlo a Él. Ningún simple maestro tiene derecho a pedir eso.',
        { h: 'Lo que Jesús dice de sí mismo' },
        'En otros lugares, Jesús se declara sin pecado: «¿Quién de vosotros me redarguye de pecado?» (Jn 8:46). Dice: «Yo soy el buen pastor» (Jn 10:11). Y el Nuevo Testamento entero afirma que no conoció pecado (2 Co 5:21; He 4:15). Si Jesús hubiera querido decir que no era bueno, se contradiría a sí mismo y contradiría a los apóstoles.',
        'El pasaje enseña también algo sobre la salvación. El joven preguntó qué debía hacer. Jesús le mostró que nadie es bueno sino Dios, es decir, que él tampoco lo era. La vida eterna no se gana guardando mandamientos, sino siguiendo a Cristo.',
        { ejercicio: {
          pregunta: '¿Qué buscaba Jesús al preguntar «¿Por qué me llamas bueno?»?',
          opciones: [
            { t: 'Que el joven pensara en lo que decía: si solo Dios es bueno, llamarlo bueno era reconocerlo como Dios.', ok: true, por_que: 'Después, Jesús le pide que lo siga, una obediencia que solo se debe a Dios.' },
            { t: 'Confesar que Él también tenía pecados.', ok: false, por_que: 'Jesús se declara sin pecado en Juan 8:46, y el Nuevo Testamento lo confirma (He 4:15).' },
            { t: 'Rechazar los saludos respetuosos.', ok: false, por_que: 'Jesús no rechaza el trato respetuoso en otras ocasiones; aquí usa la palabra para llevar al joven a una verdad.' }
          ],
          explicacion: 'Jesús no niega su bondad: invita al joven a sacar la conclusión.'
        } }
      ],
      pensar: 'El joven rico llamó «bueno» a Jesús, pero no quiso seguirlo. ¿Hay algo que te impide pasar de admirar a Jesús a seguirlo de verdad?'
    },
    {
      id: 'desamparado', n: '«¿Por qué me has desamparado?»', ref: 'Mateo 27:45-46; Marcos 15:34; Salmo 22; 2 Corintios 5:21; Gálatas 3:13; Lucas 23:46',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cerca de la hora novena, Jesús clamó a gran voz, diciendo: Elí, Elí, ¿lama sabactani? Esto es: Dios mío, Dios mío, ¿por qué me has desamparado?', ref: 'Mateo 27:46' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El Salmo 22 y la cruz',
          cab: ['Salmo 22', 'La crucifixión'],
          filas: [
            ['Dios mío, Dios mío, ¿por qué me has desamparado? (v. 1)', 'El clamor de Jesús (Mt 27:46)'],
            ['Todos los que me ven me escarnecen; menean la cabeza (v. 7)', 'Los que pasaban le injuriaban, meneando la cabeza (Mt 27:39)'],
            ['Se encomendó a Jehová; líbrele él (v. 8)', 'Confió en Dios; líbrele ahora (Mt 27:43)'],
            ['Horadaron mis manos y mis pies (v. 16)', 'Le crucificaron (Mt 27:35)'],
            ['Repartieron entre sí mis vestidos, y sobre mi ropa echaron suertes (v. 18)', 'Repartieron sus vestidos, echando suertes (Mt 27:35)'],
            ['Anunciaré tu nombre a mis hermanos… cuando clamó a él, le oyó (v. 22, 24)', 'La resurrección y el anuncio a los hermanos (Jn 20:17; He 2:12)']
          ],
          nota: 'El salmo termina en victoria: todos los confines de la tierra se volverán a Jehová (v. 27).'
        } },
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/golgota.webp', alt: 'Vista lejana de tres cruces sobre una colina bajo un cielo oscurecido al mediodía', pie: 'Desde la hora sexta hasta la novena hubo tinieblas sobre toda la tierra (Mt 27:45).', origen: 'ia' }
      ],
      texto: [
        'Después de tres horas de tinieblas, Jesús clamó a gran voz: «Elí, Elí, ¿lama sabactani? Esto es: Dios mío, Dios mío, ¿por qué me has desamparado?» (Mt 27:46). Es la única de las palabras de la cruz que Mateo y Marcos conservan en la lengua original. Algunos preguntan: si Jesús es Dios, ¿cómo pudo Dios abandonarse a sí mismo? Otros concluyen que Jesús perdió la fe en el último momento.',
        { h: 'Las palabras de un salmo' },
        'Jesús estaba citando el comienzo del Salmo 22, un salmo de David. En aquel tiempo, citar el primer verso de un salmo era una manera de evocarlo entero. Y el Salmo 22 describe, con detalles sorprendentes, lo que estaba ocurriendo en la cruz, como muestra la tabla: las burlas, los que meneaban la cabeza, las manos y los pies horadados, los vestidos repartidos a suertes. El salmo comienza con angustia, pero termina con confianza y victoria: Dios no escondió su rostro del afligido, sino que lo oyó, y todos los confines de la tierra se volverán a Él. Jesús, al citarlo, no perdió la fe: dice «Dios mío», y oró con la Escritura en el momento de mayor dolor.',
        { h: 'Un abandono real' },
        'Pero el clamor no era una actuación. Jesús experimentó algo real y terrible. En la cruz, Él, que no conoció pecado, fue hecho pecado por nosotros (2 Co 5:21) y llevó la maldición que nos correspondía (Ga 3:13). La consecuencia del pecado es la separación de Dios, y Jesús la experimentó en nuestro lugar. Habacuc dice que Dios es muy limpio de ojos para ver el mal (Hab 1:13). Por eso Jesús, que siempre había vivido en comunión con el Padre, sintió el peso de su juicio sobre el pecado.',
        { h: 'Lo que no significa' },
        'Esto no significa que la Trinidad se rompiera, ni que el Hijo dejara de ser Dios, ni que el Padre dejara de amarlo. Jesús hizo la voluntad del Padre hasta el final, y el Padre se complacía en su obediencia. El desamparo fue la experiencia del juicio sobre el pecado, no un divorcio entre las personas divinas. Y no fue la última palabra de Jesús. Poco después dijo: «Consumado es» (Jn 19:30), y luego: «Padre, en tus manos encomiendo mi espíritu» (Lc 23:46). Murió confiando en su Padre.',
        { ejercicio: {
          pregunta: '¿Qué muestra el hecho de que Jesús citara el Salmo 22 en la cruz?',
          opciones: [
            { t: 'Que oraba con la Escritura y que la cruz cumplía un salmo que termina en victoria y confianza.', ok: true, por_que: 'El salmo describe las burlas y los vestidos repartidos, y termina con «cuando clamó a él, le oyó» (Sal 22:24).' },
            { t: 'Que había perdido la fe en Dios.', ok: false, por_que: 'Jesús dice «Dios mío» (Mt 27:46), y poco después encomienda su espíritu al Padre.' },
            { t: 'Que la Trinidad dejó de existir por unas horas.', ok: false, por_que: 'Dios no puede dejar de ser lo que es. El desamparo fue la experiencia del juicio sobre el pecado que Jesús cargaba.' }
          ],
          explicacion: 'Jesús fue desamparado para que nosotros nunca lo seamos (He 13:5).'
        } }
      ],
      pensar: 'Jesús clamó «¿por qué?» y siguió diciendo «Dios mío». ¿Qué te enseña eso sobre cómo orar en los momentos en que sientes que Dios está lejos?'
    },
    {
      id: 'crecia', n: '«Crecía en sabiduría»', ref: 'Lucas 2:40-52; Hebreos 5:7-9; Isaías 11:1-3',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y aconteció que tres días después le hallaron en el templo, sentado en medio de los doctores de la ley, oyéndoles y preguntándoles. Y todos los que le oían, se maravillaban de su inteligencia y de sus respuestas. Cuando le vieron, se sorprendieron; y le dijo su madre: Hijo, ¿por qué nos has hecho así? He aquí, tu padre y yo te hemos buscado con angustia. Entonces él les dijo: ¿Por qué me buscabais? ¿No sabíais que en los negocios de mi Padre me es necesario estar?', ref: 'Lucas 2:46-49' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro áreas de crecimiento (Lc 2:52)',
          cab: ['Crecía en…', 'Área', 'Qué muestra'],
          filas: [
            ['Sabiduría', 'Mente', 'Aprendía como todo niño: de sus padres, de la sinagoga y de las Escrituras'],
            ['Estatura', 'Cuerpo', 'Se desarrollaba físicamente de manera normal'],
            ['Gracia para con Dios', 'Vida espiritual', 'Vivía en una relación creciente con su Padre'],
            ['Gracia para con los hombres', 'Relaciones', 'Era apreciado en su pueblo']
          ],
          nota: 'Lucas es el único evangelio que cuenta algo de la niñez de Jesús.'
        } }
      ],
      texto: [
        'Lucas dice que «Jesús crecía en sabiduría y en estatura, y en gracia para con Dios y los hombres» (Lc 2:52). Y Hebreos agrega que, aunque era Hijo, «por lo que padeció aprendió la obediencia» (He 5:8). ¿Cómo puede crecer en sabiduría el que es Dios y lo sabe todo? ¿Cómo puede aprender la obediencia quien nunca desobedeció?',
        { h: 'Un crecimiento humano real' },
        'Estos textos confirman que la humanidad de Jesús era completa. No era un adulto disfrazado de niño, ni un bebé que hablaba como un sabio. Tuvo que aprender a caminar, a hablar, a leer las Escrituras y a trabajar con sus manos. Su mente humana se desarrolló como la de cualquier niño. A los doce años, en el templo, escuchaba a los maestros y les hacía preguntas, y ellos se maravillaban de su inteligencia (Lc 2:46-47). No sabía de todo desde el principio, en su naturaleza humana: crecía.',
        { h: 'Sin dejar de ser Dios' },
        'Al mismo tiempo, el que crecía era el Hijo eterno. Como en Marcos 13:32, la clave son las dos naturalezas: lo que es propio de la naturaleza humana, como crecer y aprender, se dice verdaderamente de la persona del Hijo, sin que su naturaleza divina cambie. El niño de Nazaret era, a la vez, el que sostenía el universo. Es un misterio, pero no una contradicción. Ya a los doce años mostró conciencia de su relación única con Dios: «¿No sabíais que en los negocios de mi Padre me es necesario estar?» (Lc 2:49).',
        { h: 'Aprender la obediencia' },
        'Aprender la obediencia no significa que Jesús pasara de desobedecer a obedecer. Significa que experimentó lo que cuesta obedecer en un mundo caído, sobre todo en el sufrimiento. Una cosa es estar dispuesto a obedecer, y otra es obedecer cuando la obediencia lleva a Getsemaní y a la cruz. Jesús obedeció en cada etapa, y su obediencia se probó hasta el extremo. Así llegó a ser «perfeccionado», es decir, plenamente preparado para ser autor de eterna salvación (He 5:9).',
        'Esto da esperanza al creyente. Jesús no es un Salvador que no entiende el proceso de crecer, de aprender y de obedecer con dolor. Él lo vivió.',
        { ejercicio: {
          pregunta: 'Según Hebreos 5:8, ¿qué significa que Jesús «aprendió la obediencia»?',
          opciones: [
            { t: 'Que experimentó lo que cuesta obedecer en el sufrimiento, y obedeció hasta el extremo.', ok: true, por_que: 'Hebreos lo une al sufrimiento: «por lo que padeció aprendió la obediencia».' },
            { t: 'Que antes había desobedecido y luego corrigió su conducta.', ok: false, por_que: 'Jesús nunca pecó (He 4:15). Aprendió por experiencia lo que es obedecer sufriendo.' },
            { t: 'Que dejó de ser Dios mientras aprendía.', ok: false, por_que: 'El Hijo no dejó de ser Dios: aprendió en su naturaleza humana.' }
          ],
          explicacion: 'Jesús creció y aprendió como hombre, sin pecado y sin dejar de ser Dios.'
        } }
      ],
      pensar: 'Jesús creció en sabiduría, en estatura y en gracia con Dios y con los hombres. ¿En cuál de esas cuatro áreas necesitas crecer más, siguiendo su ejemplo?'
    },
    {
      id: 'principio', n: '«El principio de la creación de Dios»', ref: 'Apocalipsis 3:14; 1:8, 17; 21:6; 22:13; Colosenses 1:15-18; Juan 1:3',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y escribe al ángel de la iglesia en Laodicea: He aquí el Amén, el testigo fiel y verdadero, el principio de la creación de Dios, dice esto:', ref: 'Apocalipsis 3:14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La palabra arjé, «principio», en el Apocalipsis',
          cab: ['Texto', 'Quién habla', 'Qué dice'],
          filas: [
            ['Ap 1:8', 'El Señor Dios, el Todopoderoso', 'Yo soy el Alfa y la Omega, principio y fin'],
            ['Ap 21:6', 'El que estaba sentado en el trono', 'Yo soy el Alfa y la Omega, el principio y el fin'],
            ['Ap 22:13', 'Jesús, que viene pronto (22:12, 16)', 'Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último'],
            ['Ap 3:14', 'Cristo, a la iglesia de Laodicea', 'El principio de la creación de Dios']
          ],
          nota: 'Si «principio» en Apocalipsis 22:13 significa que Jesús es eterno, como Dios en 1:8, no puede significar en 3:14 que fue creado.'
        } }
      ],
      texto: [
        'En la carta a Laodicea, Cristo se presenta como «el Amén, el testigo fiel y verdadero, el principio de la creación de Dios» (Ap 3:14). Los Testigos de Jehová citan este versículo, junto con «el primogénito de toda creación» (Col 1:15), como prueba de que Jesús fue la primera criatura de Dios. ¿Qué significa «principio»?',
        { h: 'Arjé: origen, fuente, gobernante' },
        'La palabra griega es arjé. Puede significar comienzo, el primero de una serie. Pero también significa origen o fuente, de donde viene algo, y gobierno o autoridad: de la misma raíz vienen palabras como arcángel, el jefe de los ángeles, y monarca. En Colosenses, Pablo llama a Cristo «el principio, el primogénito de entre los muertos» (Col 1:18), y unos versículos antes ha dicho que en Él fueron creadas todas las cosas (Col 1:16). Cristo es el principio de la creación porque es su origen y su Señor, no su primera parte.',
        { h: 'El Alfa y la Omega' },
        'El mismo libro del Apocalipsis aclara el sentido. Como muestra la tabla, Dios se presenta como «el Alfa y la Omega, principio y fin» (Ap 1:8; 21:6). Al final del libro, Jesús, el que viene pronto, dice exactamente lo mismo de sí mismo: «Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último» (Ap 22:13). Ahí «principio» no puede significar que fue creado, porque está unido a «fin»: el que es el principio y el fin de todas las cosas es eterno. Sería extraño que Juan usara la misma palabra en el mismo libro con sentidos opuestos.',
        { h: 'La carta a Laodicea' },
        'Además, el contexto de la carta tiene sentido con este significado. Laodicea era una ciudad rica y orgullosa, que se creía autosuficiente. Cristo se presenta como el origen y el Señor de toda la creación, que puede ver la verdadera pobreza de la iglesia y ofrecerle el oro refinado en fuego. Juan comenzó su evangelio diciendo que todas las cosas fueron hechas por medio del Verbo, y que sin Él nada de lo que ha sido hecho fue hecho (Jn 1:3). Si el Verbo hubiera sido hecho, se habría hecho a sí mismo.',
        { ir: { t: 'Ver «Primogénito» y «un solo mediador» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#textos/4' } },
        { ejercicio: {
          pregunta: '¿Cómo ayuda Apocalipsis 22:13 a entender «el principio de la creación de Dios» (Ap 3:14)?',
          opciones: [
            { t: 'Jesús se llama «el principio y el fin», como Dios en Apocalipsis 1:8: «principio» indica que es eterno y origen de todo.', ok: true, por_que: 'El mismo título se da a Dios y a Jesús en el mismo libro; no puede significar que Jesús fue creado.' },
            { t: 'Muestra que Jesús fue creado al principio y será destruido al fin.', ok: false, por_que: 'Nadie lee así Apocalipsis 1:8, donde Dios dice lo mismo de sí mismo.' },
            { t: 'No tiene relación, porque son cartas distintas.', ok: false, por_que: 'Son parte del mismo libro y del mismo autor, que usa la misma palabra arjé.' }
          ],
          explicacion: 'Cristo es el principio de la creación porque es su origen y su Señor.'
        } }
      ],
      pensar: 'Laodicea se creía rica y no tenía necesidad de nada. ¿Qué te dice que el Señor de toda la creación vea tu verdadera condición y aun así llame a tu puerta (Ap 3:20)?'
    },
    {
      id: 'sujetara', n: '«El Hijo mismo se sujetará»', ref: '1 Corintios 15:24-28; Juan 5:19-23; 14:28; Filipenses 2:6-11; Hebreos 1:8',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Luego el fin, cuando entregue el reino al Dios y Padre, cuando haya suprimido todo dominio, toda autoridad y potencia. Porque preciso es que él reine hasta que haya puesto a todos sus enemigos debajo de sus pies. Y el postrer enemigo que será destruido es la muerte. Porque todas las cosas las sujetó debajo de sus pies. Y cuando dice que todas las cosas han sido sujetadas a él, claramente se exceptúa aquel que sujetó a él todas las cosas. Pero luego que todas las cosas le estén sujetas, entonces también el Hijo mismo se sujetará al que le sujetó a él todas las cosas, para que Dios sea todo en todos.', ref: '1 Corintios 15:24-28' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Igualdad de naturaleza y orden de funciones',
          cab: ['Igual al Padre en naturaleza', 'Sujeto al Padre en su misión'],
          filas: [
            ['Siendo en forma de Dios (Fil 2:6)', 'Haciéndose obediente hasta la muerte (Fil 2:8)'],
            ['Para que todos honren al Hijo como honran al Padre (Jn 5:23)', 'No puede el Hijo hacer nada por sí mismo (Jn 5:19)'],
            ['Tu trono, oh Dios, por el siglo del siglo (He 1:8)', 'Entregará el reino al Dios y Padre (1 Co 15:24)'],
            ['Yo y el Padre uno somos (Jn 10:30)', 'El Padre mayor es que yo (Jn 14:28)']
          ],
          nota: 'En una familia, un hijo puede obedecer a su padre sin ser menos humano que él.'
        } }
      ],
      texto: [
        'Pablo describe el final de la historia: Cristo reinará hasta poner a todos sus enemigos bajo sus pies, y el último enemigo destruido será la muerte. Entonces entregará el reino al Dios y Padre, «entonces también el Hijo mismo se sujetará al que le sujetó a él todas las cosas, para que Dios sea todo en todos» (1 Co 15:28). Algunos concluyen que el Hijo es inferior al Padre. ¿Cómo se entiende?',
        { h: 'Naturaleza y función' },
        'La distinción clave es entre naturaleza y función. En su naturaleza, el Hijo es igual al Padre: es Dios, comparte su gloria y merece la misma honra (Jn 5:23). En su misión de salvación, el Hijo se sujeta voluntariamente al Padre: fue enviado, hizo su voluntad y obedeció hasta la muerte. La tabla muestra que el Nuevo Testamento dice las dos cosas, a veces en el mismo pasaje. Un hijo que obedece a su padre no es menos humano que él; un empleado que obedece a su jefe no vale menos como persona. La sujeción no implica inferioridad de naturaleza.',
        { h: 'La entrega del reino' },
        'Lo que el Hijo entrega al Padre al final es el reino mediador que recibió para cumplir la salvación: la tarea de vencer a todos los enemigos y restaurar la creación. Cuando la misión esté cumplida, el Hijo la presentará al Padre, como un general que entrega al rey el territorio reconquistado. Eso no significa que el Hijo deje de reinar: el reino de David es eterno (Lc 1:33) y el trono de Dios y del Cordero está en la nueva Jerusalén (Ap 22:1-3). Significa que se completa la obra que el Padre le encomendó, y que el orden de la Trinidad se manifiesta plenamente.',
        { h: '«Para que Dios sea todo en todos»' },
        'La meta no es que el Hijo quede disminuido, sino que Dios, el Dios trino, sea todo en todos. El propósito de toda la obra de Cristo es la gloria de Dios Padre (Fil 2:11). El Hijo nunca buscó su propia gloria, sino la del Padre, y el Padre lo exaltó hasta lo sumo. Este orden de amor y entrega mutua es lo que el Hijo vino a revelar. El texto «el Padre mayor es que yo» (Jn 14:28) se estudia en Dios y la Trinidad con la misma clave.',
        { ir: { t: 'Ver «El Padre mayor es que yo» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#textos/1' } },
        { ejercicio: {
          pregunta: '¿Cómo se entiende que «el Hijo mismo se sujetará» al Padre (1 Co 15:28)?',
          opciones: [
            { t: 'Como la sujeción voluntaria del Hijo en su misión, sin que sea inferior al Padre en su naturaleza.', ok: true, por_que: 'El Hijo es igual en naturaleza (Fil 2:6; Jn 5:23) y se sujeta en su función de Mediador (Fil 2:8).' },
            { t: 'Como prueba de que el Hijo es una criatura inferior.', ok: false, por_que: 'La sujeción de funciones no implica inferioridad de naturaleza, como un hijo que obedece a su padre.' },
            { t: 'Como el fin del reinado de Cristo.', ok: false, por_que: 'Su reino no tendrá fin (Lc 1:33); el trono es «de Dios y del Cordero» (Ap 22:3).' }
          ],
          explicacion: 'El Hijo es igual al Padre y se sujeta a Él por amor, para que Dios sea todo en todos.'
        } },
        { ejercicio: {
          pregunta: 'Al terminar este recurso, ¿cuál es la mejor síntesis de lo que la Biblia enseña sobre Jesucristo?',
          opciones: [
            { t: 'Es el Hijo eterno de Dios, que se hizo hombre, murió por nuestros pecados, resucitó, reina a la diestra del Padre, derrama el Espíritu y volverá.', ok: true, por_que: 'Resume su persona (rutas I a III) y su obra (rutas IV a VII).' },
            { t: 'Fue un gran profeta y maestro moral que Dios adoptó como Hijo.', ok: false, por_que: 'Eso es el ebionismo y el escepticismo moderno: niegan su preexistencia y su divinidad.' },
            { t: 'Fue Dios, que solo parecía hombre para enseñarnos.', ok: false, por_que: 'Eso es el docetismo: niega su verdadera humanidad, su muerte y su resurrección corporal.' }
          ],
          explicacion: 'Verdadero Dios y verdadero hombre, Salvador y Señor: a Él sea la gloria por los siglos.'
        } }
      ],
      pensar: 'El Hijo, siendo igual al Padre, eligió sujetarse por amor. ¿Qué te enseña su ejemplo sobre la autoridad, la obediencia y la humildad en tu familia, tu trabajo y tu iglesia?'
    }
  ];

  const C = window.__CRISTO;
  delete window.__CRISTO;
  window.RUTA_DATA = {
    titulo: 'La persona y obra de Cristo',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'antes', grupo: 'La persona de Cristo', n: 'I. Cristo antes de Belén', info: 'El Verbo eterno, el ángel de Jehová, las promesas y las figuras', estaciones: C.antes },
      { id: 'encarnacion', grupo: 'La persona de Cristo', n: 'II. La encarnación', info: 'Nacido de una virgen, verdadero hombre, sin pecado y ungido por el Espíritu', estaciones: C.encarnacion },
      { id: 'persona', grupo: 'La persona de Cristo', n: 'III. Dios y hombre en una persona', info: 'Lo que reclamó, los «Yo soy», sus títulos, las dos naturalezas y los errores', estaciones: C.persona,
        linea: { desde: 0, hasta: 500, hitos: [
          { a: [30, 95], t: 'Nuevo Testamento' }, { a: [110, 200], t: 'Docetas y ebionitas' },
          { a: [325, 381], t: 'Nicea y Constantinopla' }, { a: [431, 451], t: 'Éfeso y Calcedonia' }
        ] } },
      { id: 'oficios', grupo: 'La obra de Cristo', n: 'IV. Profeta, sacerdote y rey', info: 'Los tres oficios del Mesías, sus milagros y la transfiguración', estaciones: C.oficios },
      { id: 'cruz', grupo: 'La obra de Cristo', n: 'V. La cruz', info: 'Por qué murió, la sustitución, la victoria, la sanidad y la historia de la doctrina', estaciones: C.cruz },
      { id: 'exaltado', grupo: 'La obra de Cristo', n: 'VI. Resucitado y exaltado', info: 'La tumba vacía, la ascensión y su obra a la diestra del Padre', estaciones: C.exaltado },
      { id: 'viene', grupo: 'La obra de Cristo', n: 'VII. Cristo hoy y el que viene', info: 'El evangelio completo, su venida, la unión con Cristo y su señorío', estaciones: viene },
      { id: 'textos', grupo: 'Textos difíciles', n: 'VIII. Textos difíciles sobre Cristo', info: 'Los pasajes que parecen negar su divinidad o su humanidad, leídos en su contexto', estaciones: textos }
    ]
  };
})();
