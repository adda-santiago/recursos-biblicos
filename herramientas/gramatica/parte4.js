/* Vocabulario y gramática básica del hebreo bíblico · ruta IV. Palabras clave de la fe (ver encabezado de parte1.js)
   Las cifras de traducción se calcularon cruzando cada aparición en el Códice de Leningrado (OSHB, por número
   de Strong) con su versículo en la RV 1960 del sitio y buscando la palabra española (06-11-2026). Son aproximadas:
   un versículo puede tener la palabra hebrea y no la española, o al revés. */
(() => {
  const P = window.__GRAM.P;

  const palabras = [
    {
      id: 'errores', n: 'Estudiar una palabra sin caer en errores', ref: '2 Timoteo 2:15; Nehemías 8:8',
      visual: [
        { tipo: 'tabla', titulo: 'Errores', tabla: {
          titulo: 'Cinco errores comunes al estudiar una palabra',
          cab: ['Error', 'Ejemplo', 'Por qué falla'],
          filas: [
            ['La raíz manda', '«Como Jerusalén contiene shalom, cada vez que se nombra Jerusalén se habla de paz»', 'El sentido lo da el uso, no el origen. Además, el origen del nombre se discute'],
            ['Todos los sentidos a la vez', '«En Génesis 1:2, רוּחַ es a la vez viento, aliento y Espíritu»', 'Una palabra tiene un sentido en cada lugar. El contexto lo elige'],
            ['El sentido de otra época', '«El Seol es el infierno de fuego»', 'Se carga una palabra con lo que se enseñó después, sin mirar cómo la usaba el autor'],
            ['Dibujos en las letras', '«אָב, padre, es buey + casa: la fuerza de la casa»', 'Las letras ya no eran dibujos cuando se escribió la Biblia. Es una fantasía moderna'],
            ['El hebreo secreto', '«En el original dice algo que ninguna traducción muestra»', 'Si fuera cierto, alguna buena traducción lo mostraría. Pide la fuente'],
          ],
          nota: 'Una regla de oro: nunca construyas una doctrina sobre una sola palabra.'
        } },
        { tipo: 'tabla', titulo: 'Pasos', tabla: {
          titulo: 'Cómo hacer un buen estudio de palabra',
          cab: ['Paso', 'Qué hacer'],
          filas: [
            ['1', 'Identifica la palabra hebrea y su número de Strong (el vocabulario o un interlineal te lo dan)'],
            ['2', 'Lee el versículo completo y su contexto: el párrafo, el capítulo, el libro'],
            ['3', 'Busca la palabra en una concordancia y lee otros pasajes donde aparece, empezando por el mismo libro'],
            ['4', 'Mira cómo la traducen la Reina-Valera y otras versiones en esos lugares'],
            ['5', 'Resume el sentido que tiene en tu pasaje y compáralo con un buen comentario'],
          ],
          nota: 'Las estaciones siguientes aplican estos pasos a nueve palabras clave.'
        } }
      ],
      texto: [
        'Esta ruta estudia diez palabras hebreas que están en el centro de la fe bíblica: misericordia, paz, pacto, ley, espíritu y alma, santo, justicia, fe y redención. Antes de empezar conviene una advertencia, porque los estudios de palabras son a la vez una de las herramientas más útiles y una de las más mal usadas en la predicación.',
        { h: 'Por qué hace falta cuidado' },
        'Cuando alguien dice desde el púlpito «en el hebreo, esta palabra significa…», la congregación escucha con atención, porque suena a conocimiento profundo. Pero muchas de esas afirmaciones son errores. La tabla del panel resume los cinco más comunes. El primero es creer que la raíz o el origen de una palabra deciden su sentido. Ya lo advertimos en la ruta I: las palabras significan lo que sus hablantes quieren decir con ellas, no lo que significaban sus partes hace siglos. El segundo es cargar en un versículo todos los sentidos posibles de una palabra, como si el autor hubiera querido decirlos todos a la vez.',
        'El tercero es leer una palabra con el sentido que tomó en una época posterior. El cuarto, muy difundido en internet, es la idea de que cada letra hebrea es un dibujo con un significado escondido: que la álef es un buey y significa «fuerza», y que por eso אָב, «padre», sería «la fuerza de la casa». Las letras hebreas nacieron, es cierto, de dibujos muy antiguos, pero cuando se escribió la Biblia hacía siglos que eran solo letras, y ningún autor bíblico las usó así. El quinto es apelar a un «hebreo original» que dice algo que ninguna traducción seria muestra.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } },
        { h: 'Un buen estudio' },
        'Un buen estudio de palabra sigue los pasos de la segunda tabla. Empieza por el texto y su contexto, recorre los otros lugares donde aparece la palabra, mira cómo la tradujeron quienes sabían hebreo y llega a una conclusión prudente. En las estaciones de esta ruta verás, para cada palabra, cuántas veces la Reina-Valera la tradujo de una u otra manera. Esa variedad no es un defecto de la traducción: muestra que una palabra hebrea tiene un abanico de sentidos, y que el traductor eligió en cada lugar el que pedía el contexto.',
        { ejercicio: {
          pregunta: 'Alguien enseña que אָב, «padre», significa «la fuerza de la casa», porque la álef era un dibujo de buey y la bet, de una casa. ¿Qué responderías?',
          opciones: [
            { t: 'Que es correcto: el hebreo esconde mensajes en los dibujos de sus letras.', ok: false, por_que: 'Cuando se escribió la Biblia, las letras ya no se leían como dibujos. Ningún autor bíblico las usó así.' },
            { t: 'Que el sentido de אָב se aprende de su uso en la Biblia, no de supuestos dibujos en sus letras.', ok: true, por_que: 'El sentido de una palabra lo da su uso. La interpretación por dibujos es una idea moderna sin fundamento en el texto.' },
            { t: 'Que en realidad significa «la casa del buey».', ok: false, por_que: 'El problema no es qué dibujo se elige, sino el método mismo de buscar dibujos en las letras.' }
          ],
          explicacion: 'Las palabras se entienden por su uso en el contexto, no por la forma antigua de sus letras.'
        } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado… que usa bien la palabra de verdad» (2 Ti 2:15). ¿Has repetido alguna vez una explicación de una palabra hebrea o griega sin comprobarla? ¿Qué harás la próxima vez?'
    },
    {
      id: 'jesed', n: 'Misericordia: חֶסֶד', ref: 'Lamentaciones 3:22; Salmo 136:1; Éxodo 34:6',
      visual: [
        { tipo: 'hebreo', titulo: 'Lamentaciones 3:22', ref: 'Lamentaciones 3:22', he: '@@wlc:lm/3/22', tr: 'Jasdé Adonái ki lo-tamnu, ki lo-jalu rajamav.',
          palabras: P('@@wlcp:lm/3/22', [['jasdé', 'las misericordias de'], ['Adonái', 'Jehová'], ['ki', 'que'], ['lo-tamnu', 'no hemos sido consumidos'], ['ki', 'porque'], ['lo-jalu', 'no se acabaron'], ['rajamav', 'sus compasiones']]),
          rv: '@@lm/3/22' },
        { tipo: 'tabla', titulo: 'Traducciones', tabla: {
          titulo: 'Cómo traduce la Reina-Valera חֶסֶד',
          cab: ['Traducción', 'Veces (aprox.)'],
          filas: [
            ['misericordia, misericordias', '227'],
            ['bondad', '3'],
            ['gracia', '3'],
            ['amor', '2'],
            ['favor, piedad', '2'],
            ['otras', '14'],
          ],
          nota: 'De 251 apariciones. Palabras vecinas: רַחֲמִים, rajamim, «compasiones»; אֱמֶת, emet, «verdad, fidelidad»; חֵן, jen, «gracia».'
        } }
      ],
      texto: [
        'חֶסֶד, jésed, aparece unas 250 veces en el Antiguo Testamento, más de la mitad en los Salmos. La Reina-Valera la traduce casi siempre «misericordia», pero ninguna palabra española la abarca del todo. Otras versiones dicen «amor», «amor leal», «bondad» o «gran amor».',
        { h: 'Amor que cumple' },
        'Al recorrer sus usos se ve un rasgo constante: חֶסֶד es el amor que se mantiene fiel a una relación, sobre todo a un pacto, y que hace más de lo que se debe. Booz alaba la חֶסֶד de Rut, que se quedó con su suegra cuando podía haberla dejado (Rt 3:10). David muestra חֶסֶד a Mefi-boset por el pacto que había hecho con Jonatán (2 S 9:1). Y Dios, al revelar su nombre a Moisés, se presenta como וְרַב־חֶסֶד וֶאֱמֶת, «grande en misericordia y verdad» (Éx 34:6): un Dios cuyo amor no se cansa y cuya palabra no falla.',
        'Por eso חֶסֶד aparece muchas veces junto a אֱמֶת, «verdad, fidelidad», y junto a רַחֲמִים, rajamim, «compasiones», una palabra de la misma familia que רֶחֶם, réjem, «seno materno». Son las dos palabras de Lamentaciones 3:22.',
        { h: 'Para siempre es su misericordia' },
        'El Salmo 136 repite 26 veces el mismo estribillo: כִּי לְעוֹלָם חַסְדּוֹ, ki leolam jasdó, «porque para siempre es su misericordia». חַסְדּוֹ es חֶסֶד con el sufijo «su». Después de cada obra de Dios, de la creación al éxodo y a la conquista, la congregación respondía con esa frase. Era una lección de historia convertida en adoración.',
        { h: 'En medio de las ruinas' },
        'Lamentaciones 3:22 se escribió después de la destrucción de Jerusalén. El poeta ha visto el templo quemado y el pueblo llevado al exilio. Y en el centro del libro dice: חַסְדֵי יְהוָה כִּי לֹא־תָמְנוּ, «las misericordias de Jehová (son la razón por la) que no hemos sido consumidos». חַסְדֵי es el plural constructo, «las misericordias de». El juicio fue real, pero la חֶסֶד de Dios fue mayor.',
        'Cuando Jesús citó a Oseas, «Misericordia quiero, y no sacrificio» (Mt 9:13; Os 6:6), la palabra hebrea detrás de «misericordia» era חֶסֶד: Dios espera de su pueblo el mismo amor fiel que él le muestra.',
        { ir: { t: 'Ver «Misericordioso, fiel y sabio» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#atributos/8' } },
        { ejercicio: {
          pregunta: '¿Qué rasgo de חֶסֶד aparece en casi todos sus usos?',
          opciones: [
            { t: 'Es un sentimiento pasajero de lástima.', ok: false, por_que: 'חֶסֶד no es un sentimiento momentáneo: es una conducta fiel que se mantiene en el tiempo.' },
            { t: 'Es amor fiel a una relación o a un pacto, que hace más de lo que se debe.', ok: true, por_que: 'Así aparece en Rut, en David con Mefi-boset y en la revelación de Dios a Moisés.' },
            { t: 'Es el perdón que Dios da solo en el Nuevo Testamento.', ok: false, por_que: 'חֶסֶד es una palabra del Antiguo Testamento, y describe a Dios desde Éxodo.' }
          ],
          explicacion: 'חֶסֶד es amor leal, ligado al pacto y generoso.'
        } }
      ],
      pensar: '«Nuevas son cada mañana; grande es tu fidelidad» (Lm 3:23). ¿Qué misericordia de Dios puedes reconocer hoy, aunque estés pasando por un tiempo de ruinas?'
    },
    {
      id: 'shalom', n: 'Paz: שָׁלוֹם', ref: 'Isaías 26:3; Números 6:26',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 26:3', ref: 'Isaías 26:3', he: '@@wlc:is/26/3', tr: 'Yetser samuj titsor shalom shalom, ki veja batúaj.',
          palabras: P('@@wlcp:is/26/3', [['yetser', 'el pensamiento'], ['samuj', 'firme (apoyado)'], ['titsor', 'guardarás'], ['shalom', 'paz'], ['shalom', 'paz'], ['ki', 'porque'], ['veja', 'en ti'], ['batúaj', 'confía']]),
          rv: '@@is/26/3' },
        { tipo: 'tabla', titulo: 'Traducciones', tabla: {
          titulo: 'Cómo traduce la Reina-Valera שָׁלוֹם',
          cab: ['Traducción', 'Veces (aprox.)', 'Ejemplo'],
          filas: [
            ['paz', '190', '«y ponga en ti paz» (Nm 6:26)'],
            ['bien, estar bien', '18', '«¿Vuestro padre… lo pasa bien?» (Gn 43:27)'],
            ['salud', '8', 'el bienestar de una persona'],
            ['otras', '21', 'prosperidad, a salvo, amigos'],
          ],
          nota: 'De 237 apariciones. La raíz שׁלם también da שָׁלֵם, «completo, entero», y שִׁלֵּם, «pagar, restituir».'
        } }
      ],
      texto: [
        'שָׁלוֹם, shalom, es quizás la palabra hebrea más conocida en el mundo. Todavía hoy es el saludo de Israel. La Reina-Valera la traduce «paz» en la gran mayoría de los casos, pero su sentido es más amplio que la ausencia de guerra.',
        { h: 'Estar entero' },
        'En sus usos, שָׁלוֹם describe la situación de quien está bien en todos los sentidos: sano, a salvo, en armonía con los demás y con Dios. Cuando José pregunta a sus hermanos por su padre, dice literalmente «¿Hay שָׁלוֹם a vuestro padre?», y la Reina-Valera traduce «¿lo pasa bien?» (Gn 43:27). La misma raíz forma שָׁלֵם, «completo, entero», y el verbo שִׁלֵּם, «restituir, pagar» lo que falta. La palabra apunta a algo completo, sin nada roto ni pendiente.',
        'Por eso la bendición sacerdotal termina pidiendo שָׁלוֹם como resumen de todo lo anterior: «Jehová alce sobre ti su rostro, y ponga en ti paz» (Nm 6:26). Y por eso el Mesías es שַׂר־שָׁלוֹם, «Príncipe de paz» (Is 9:6): el que trae ese bienestar completo.',
        { h: 'Paz, paz' },
        'En Isaías 26:3, la Reina-Valera dice «Tú guardarás en completa paz». El hebreo dice שָׁלוֹם שָׁלוֹם, «paz, paz». Es el recurso de la repetición que viste en la ruta II, el mismo de «santo, santo, santo»: la palabra repetida expresa plenitud. Los traductores lo dijeron en español con «completa paz».',
        'El versículo dice también a quién se le da esa paz. יֵצֶר סָמוּךְ es «el pensamiento apoyado», la mente que se recarga en Dios. Y la razón es כִּי בְךָ בָּטוּחַ, «porque en ti confía». La paz completa no depende de que las circunstancias estén resueltas: depende de dónde se apoya el pensamiento.',
        { h: 'La paz que costó' },
        'Isaías vuelve a usar la palabra en el capítulo del Siervo sufriente: מוּסַר שְׁלוֹמֵנוּ עָלָיו, «el castigo de nuestra paz fue sobre él» (Is 53:5). La paz con Dios, la reconciliación completa, tuvo un precio, y lo pagó otro. Lo estudiarás en el taller.',
        { ejercicio: {
          pregunta: '¿Por qué la Reina-Valera traduce שָׁלוֹם שָׁלוֹם como «completa paz»?',
          opciones: [
            { t: 'Porque el copista escribió la palabra dos veces por error.', ok: false, por_que: 'No es un error: la repetición es un recurso hebreo intencional.' },
            { t: 'Porque en hebreo la repetición expresa plenitud, como «santo, santo, santo».', ok: true, por_que: 'El hebreo no tiene superlativo; repite la palabra. El español lo dice con «completa».' },
            { t: 'Porque son dos clases de paz distintas: con Dios y con los hombres.', ok: false, por_que: 'El texto no distingue dos paces. La repetición intensifica una sola idea.' }
          ],
          explicacion: 'La repetición hebrea intensifica: «paz, paz» es «paz completa».'
        } }
      ],
      pensar: '«Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera» (Is 26:3). ¿En qué se está apoyando hoy tu pensamiento?'
    },
    {
      id: 'berit', n: 'Pacto: בְּרִית', ref: 'Jeremías 31:31; Génesis 15:18',
      visual: [
        { tipo: 'hebreo', titulo: 'Jeremías 31:31', ref: 'Jeremías 31:31', he: '@@wlc:jer/31/31', tr: 'Hiné yamim baim neum-Adonái, vejarati et-bet Yisrael veet-bet Yehudá berit jadashá.',
          palabras: P('@@wlcp:jer/31/31', [['hiné', 'he aquí'], ['yamim', 'días'], ['baim', 'vienen'], ['neum-Adonái', 'dice Jehová'], ['vejarati', 'y cortaré (haré)'], ['et-bet', 'con la casa de'], ['Yisrael', 'Israel'], ['veet-bet', 'y con la casa de'], ['Yehudá', 'Judá'], ['berit', 'un pacto'], ['jadashá', 'nuevo']]),
          rv: '@@jer/31/31' },
        { tipo: 'tabla', titulo: 'Expresiones', tabla: {
          titulo: 'El pacto en el hebreo',
          cab: ['Expresión', 'Se lee', 'Literal', 'Se traduce'],
          filas: [
            ['כָּרַת בְּרִית', 'karat berit', 'cortar un pacto', 'hacer un pacto (Gn 15:18)'],
            ['הֵקִים בְּרִית', 'hekim berit', 'levantar un pacto', 'establecer un pacto (Gn 6:18)'],
            ['זָכַר בְּרִית', 'zajar berit', 'recordar un pacto', 'acordarse del pacto (Éx 2:24)'],
            ['שָׁמַר בְּרִית', 'shamar berit', 'guardar un pacto', 'guardar el pacto (Éx 19:5)'],
            ['אֲרוֹן הַבְּרִית', 'arón habrit', 'el arca del pacto', 'el arca del pacto (Jos 3:6)'],
          ],
          nota: 'La Reina-Valera traduce בְּרִית «pacto» unas 265 veces y «alianza» unas 15, de 284.'
        } }
      ],
      texto: [
        'בְּרִית, berit, «pacto», es una de las palabras que organizan toda la Biblia. Dios hace pacto con Noé, con Abraham, con Israel en el Sinaí, con David, y promete un pacto nuevo. Un pacto es un compromiso solemne que crea una relación con obligaciones y promesas, garantizado por un juramento.',
        { h: 'Cortar un pacto' },
        'El hebreo no dice «hacer un pacto», sino כָּרַת בְּרִית, karat berit, «cortar un pacto». La expresión recuerda la ceremonia en que se partían animales por la mitad y las partes pasaban entre los pedazos, como diciendo «que me pase lo mismo si no cumplo». En Génesis 15, Dios mismo, como una antorcha de fuego, pasó entre los animales partidos, y el texto concluye: «En aquel día hizo Jehová un pacto con Abram» (Gn 15:18), y el verbo es כָּרַת. Solo Dios pasó: la promesa dependía de él.',
        { ir: { t: 'Ver «Abraham: la ceremonia de Génesis 15» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/4' } },
        'Los otros verbos de la tabla muestran que el pacto se establece, se recuerda y se guarda. Cuando Israel sufría en Egipto, Dios «se acordó de su pacto con Abraham» (Éx 2:24), וַיִּזְכֹּר en hebreo. La palabra שָׁמַר, el verbo modelo de la ruta III, se usa también para «guardar el pacto».',
        { h: 'Un pacto nuevo' },
        'Jeremías 31:31 usa casi todo lo que aprendiste. הִנֵּה יָמִים בָּאִים: «he aquí, días que vienen», con el participio plural בָּאִים. וְכָרַתִּי es un perfecto con vav consecutiva, weqatal, que mira al futuro: «y cortaré». אֶת aquí es la preposición «con», no la marca del objeto. Y בְּרִית חֲדָשָׁה es «un pacto nuevo», con el adjetivo femenino después del sustantivo femenino, sin artículo.',
        'La promesa está dirigida a «la casa de Israel y la casa de Judá». Jesús anunció su cumplimiento en la última cena: «Esta copa es el nuevo pacto en mi sangre» (Lc 22:20), y la carta a los Hebreos cita el pasaje completo (He 8:8-12). Por la fe en Cristo, los creyentes de todas las naciones participan de sus bendiciones: el perdón de los pecados y la ley escrita en el corazón por el Espíritu. Y Pablo espera todavía el día en que Israel como pueblo reciba lo prometido (Ro 11:26-27).',
        { ir: { t: 'Ver «El nuevo pacto prometido» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/10' } },
        { ejercicio: {
          pregunta: '¿Por qué el hebreo dice «cortar un pacto»?',
          opciones: [
            { t: 'Porque un pacto termina o «corta» una relación anterior.', ok: false, por_que: 'El pacto crea una relación; no la corta.' },
            { t: 'Por la ceremonia en que se partían animales y las partes pasaban entre ellos (Gn 15; Jer 34:18).', ok: true, por_que: 'El gesto expresaba un juramento solemne: lo que se hizo con los animales caería sobre quien no cumpliera.' },
            { t: 'Porque los pactos se escribían cortando piedra.', ok: false, por_que: 'Algunos pactos se escribieron, pero la expresión viene del rito con los animales.' }
          ],
          explicacion: 'כָּרַת בְּרִית recuerda el rito de los animales partidos: un juramento con la vida.'
        } }
      ],
      pensar: 'En Génesis 15 solo Dios pasó entre los animales partidos: él se comprometió a cumplir. ¿Qué te dice eso sobre la seguridad de las promesas que Dios te ha hecho en Cristo?'
    },
    {
      id: 'tora', n: 'Ley e instrucción: תּוֹרָה', ref: 'Salmo 1:2; Josué 1:8',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 1:2', ref: 'Salmo 1:2', he: '@@wlc:sal/1/2', tr: 'Ki im betorat Adonái jeftsó, uvetorató yehgué yomam valáyla.',
          palabras: P('@@wlcp:sal/1/2', [['ki', 'sino'], ['im', 'que'], ['betorat', 'en la ley de'], ['Adonái', 'Jehová'], ['jeftsó', 'su delicia'], ['uvetorató', 'y en su ley'], ['yehgué', 'medita'], ['yomam', 'de día'], ['valáyla', 'y de noche']]),
          rv: '@@sal/1/2' },
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Qué es «la ley» en el Antiguo Testamento',
          cab: ['Uso', 'Ejemplo'],
          filas: [
            ['La instrucción de un padre o una madre', '«No te olvides de mi ley» (Pr 3:1); «la dirección de tu madre» (Pr 1:8)'],
            ['Una instrucción concreta', '«Esta es la ley del holocausto» (Lv 6:9)'],
            ['La ley dada a Moisés', '«la ley de Moisés» (Jos 8:31)'],
            ['El libro de la ley', '«Nunca se apartará de tu boca este libro de la ley» (Jos 1:8)'],
            ['Toda la enseñanza de Dios', '«La ley de Jehová es perfecta» (Sal 19:7)'],
          ],
          nota: 'La Reina-Valera traduce תּוֹרָה «ley» en unas 218 de sus 222 apariciones.'
        } }
      ],
      texto: [
        'תּוֹרָה, torá, se traduce casi siempre «ley», y así debe ser: en muchos pasajes se refiere a los mandamientos que Dios dio a Israel por medio de Moisés. Pero sus usos muestran que la palabra es más amplia que nuestro «ley», que suena a código penal.',
        { h: 'Instrucción' },
        'En Proverbios, la תּוֹרָה es la enseñanza que un padre o una madre dan a su hijo: «Oye, hijo mío, la instrucción de tu padre, y no desprecies la dirección de tu madre» (Pr 1:8), donde «dirección» es תּוֹרַת. En Levítico es una instrucción concreta: «la ley del holocausto», es decir, las indicaciones para ofrecerlo (Lv 6:9). Y en los Salmos es toda la enseñanza que Dios ha revelado. Los judíos llaman Torá a los cinco libros de Moisés, y también, en sentido amplio, a toda la enseñanza de Dios.',
        'La palabra suele relacionarse con el verbo יָרָה, que en hifil significa «enseñar». Esa relación ayuda a recordarla, pero, como viste en la estación 1, el sentido de תּוֹרָה lo dan sus usos, y sus usos confirman que es, ante todo, instrucción de Dios para vivir.',
        { h: 'Medita de día y de noche' },
        'El Salmo 1:2 describe al hombre bienaventurado: «en la ley de Jehová está su delicia, y en su ley medita de día y de noche». En hebreo, la primera mitad es una oración nominal sin verbo: בְּתוֹרַת יְהוָה חֶפְצוֹ, «en la ley de Jehová, su delicia». Y el verbo de la segunda mitad, יֶהְגֶּה, yehgué, es un imperfecto de הָגָה, que se usa también para el gruñido del león o el arrullo de la paloma (Is 31:4; 38:14). «Meditar», en la Biblia, es repetir la Palabra en voz baja, una y otra vez, hasta que se vuelve parte de uno. Es el mismo verbo de Josué 1:8.',
        { h: 'La ley y la gracia' },
        'El Antiguo Testamento nunca presenta la תּוֹרָה como un camino para ganar la salvación: fue dada a un pueblo ya rescatado de Egipto (Éx 20:2). Jesús no vino a abolirla, sino a cumplirla (Mt 5:17), y en el nuevo pacto Dios la escribe en el corazón (Jer 31:33). El creyente no está bajo la ley de Moisés como pacto, pero la sigue amando como Palabra de Dios que instruye.',
        { ir: { t: 'Ver «¿Qué pasa con el pacto del Sinaí?» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/4' } },
        { ejercicio: {
          pregunta: 'En Proverbios 1:8, ¿qué significa תּוֹרַת אִמֶּךָ, «la torá de tu madre»?',
          opciones: [
            { t: 'Las leyes de Moisés que tu madre conoce.', ok: false, por_que: 'En Proverbios la palabra se usa para la enseñanza de los padres, no para el código del Sinaí.' },
            { t: 'La enseñanza o instrucción que da tu madre.', ok: true, por_que: 'תּוֹרָה es, ante todo, instrucción. La Reina-Valera lo traduce «la dirección de tu madre».' },
            { t: 'Un castigo que impone tu madre.', ok: false, por_que: 'La palabra no tiene sentido de castigo. Es enseñanza.' }
          ],
          explicacion: 'תּוֹרָה es instrucción: de los padres, de los sacerdotes y, sobre todo, de Dios.'
        } }
      ],
      pensar: 'El bienaventurado medita en la ley de Jehová «de día y de noche», repitiéndola en voz baja (Sal 1:2). ¿Qué versículo podrías repetir hoy mientras caminas, trabajas o viajas?'
    },
    {
      id: 'ruaj-nefesh', n: 'Espíritu y alma: רוּחַ y נֶפֶשׁ', ref: 'Génesis 2:7; Ezequiel 37:9',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 2:7', ref: 'Génesis 2:7', he: '@@wlc:gn/2/7', tr: 'Vayitser Adonái Elohim et-haadam afar min-haadamá, vayipaj beapav nishmat jayim, vayehí haadam lenéfesh jayá.',
          palabras: P('@@wlcp:gn/2/7', [['vayitser', 'y formó'], ['Adonái', 'Jehová'], ['Elohim', 'Dios'], ['et-haadam', '(objeto) al hombre'], ['afar', 'polvo'], ['min-haadamá', 'de la tierra'], ['vayipaj', 'y sopló'], ['beapav', 'en su nariz'], ['nishmat', 'aliento de'], ['jayim', 'vida'], ['vayehí', 'y fue'], ['haadam', 'el hombre'], ['lenéfesh', 'un ser (alma)'], ['jayá', 'viviente']]),
          rv: '@@gn/2/7' },
        { tipo: 'tabla', titulo: 'Traducciones', tabla: {
          titulo: 'Cómo traduce la Reina-Valera רוּחַ y נֶפֶשׁ',
          cab: ['Palabra', 'Traducción', 'Veces (aprox.)'],
          filas: [
            ['רוּחַ (378)', 'espíritu', '241'],
            ['', 'viento', '94'],
            ['', 'aliento, soplo, ánimo', '20'],
            ['נֶפֶשׁ (757)', 'alma', '377'],
            ['', 'vida', '169'],
            ['', 'persona', '86'],
            ['', 'ser (viviente), otras', '125'],
          ],
          nota: 'Con artículo y sin artículo, רוּחַ puede ser el viento, el aliento, el espíritu humano o el Espíritu de Dios. El contexto decide.'
        } }
      ],
      texto: [
        'Dos palabras hebreas describen la vida interior del ser humano: רוּחַ, rúaj, y נֶפֶשׁ, néfesh. La Reina-Valera las traduce muchas veces «espíritu» y «alma», pero cada una tiene un abanico de sentidos que conviene conocer.',
        { h: 'רוּחַ: viento, aliento, espíritu' },
        'רוּחַ es aire en movimiento. Según el contexto, es el viento que sopla, el aliento de una persona, el espíritu humano o el Espíritu de Dios. En Ezequiel 37, el profeta juega con esa amplitud: Dios le manda profetizar al רוּחַ, «al espíritu» o «al viento», que venga de los cuatro vientos (רוּחוֹת) y sople sobre los muertos, «y entró espíritu en ellos, y vivieron» (Ez 37:9-10). Una sola palabra une el viento, el aliento y el Espíritu que da vida.',
        'En Génesis 1:2, רוּחַ אֱלֹהִים, «el Espíritu de Dios», se movía sobre las aguas. Y en el Salmo 51:11, David ruega: «no quites de mí tu santo Espíritu», literalmente וְרוּחַ קָדְשְׁךָ, «el espíritu de tu santidad», una cadena constructa como las de la ruta II.',
        { ir: { t: 'Ver «El Espíritu en la creación» en El Espíritu Santo', a: '../../espiritu-santo/#at/1' } },
        { h: 'נֶפֶשׁ: el ser viviente' },
        'נֶפֶשׁ aparece más de 750 veces. En Génesis 2:7, Dios formó al hombre del polvo, sopló en su nariz aliento de vida, וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה, «y fue el hombre un ser viviente». La misma expresión, נֶפֶשׁ חַיָּה, se usa para los animales en Génesis 1:24, donde la Reina-Valera dice «seres vivientes». Por eso נֶפֶשׁ se traduce «alma», pero también «vida» y «persona»: muchas veces designa a la persona entera en cuanto ser vivo, con sus deseos y emociones. «Mi alma» es muchas veces, simplemente, «yo».',
        'Fíjate también en el juego de palabras del versículo: הָאָדָם, «el hombre», fue formado del polvo de הָאֲדָמָה, «la tierra». Su nombre recuerda su origen.',
        { posturas: {
          titulo: '¿Cuántas partes tiene el ser humano?',
          a: { n: 'Tres: espíritu, alma y cuerpo', t: 'Muchos maestros pentecostales y evangélicos distinguen tres dimensiones, apoyándose en textos como 1 Tesalonicenses 5:23 y Hebreos 4:12: el espíritu, que se relaciona con Dios; el alma, sede de la mente y las emociones, y el cuerpo.' },
          b: { n: 'Dos: lo material y lo inmaterial', t: 'Otros entienden que «alma» y «espíritu» son dos nombres para la misma parte inmaterial del ser humano, vista desde ángulos distintos, y que la Biblia los usa muchas veces como sinónimos (Lc 1:46-47).' },
          c: 'Ambas posturas afirman lo que enseña toda la Escritura: el ser humano no se reduce a su cuerpo, y su parte inmaterial sigue consciente después de la muerte (Ec 12:7; Mt 10:28; Fil 1:23). Algunos grupos, como los Testigos de Jehová y los adventistas, se apoyan en el sentido de נֶפֶשׁ como «ser viviente» para negar esa existencia consciente. Pero una sola palabra no decide una doctrina: la decide el conjunto de la Biblia.'
        } },
        { ejercicio: {
          pregunta: 'En Ezequiel 37:9-10, ¿por qué la Reina-Valera traduce רוּחַ unas veces «espíritu» y otras «vientos»?',
          opciones: [
            { t: 'Porque son palabras hebreas distintas.', ok: false, por_que: 'Es la misma palabra, רוּחַ, en singular y en plural.' },
            { t: 'Porque רוּחַ significa viento, aliento y espíritu, y el contexto de cada frase elige el sentido.', ok: true, por_que: 'El profeta aprovecha la amplitud de la palabra: el viento de los cuatro vientos se convierte en el aliento que da vida.' },
            { t: 'Porque en Ezequiel רוּחַ significa siempre «viento».', ok: false, por_que: 'El versículo 10 dice que «entró espíritu en ellos, y vivieron»: no es solo viento.' }
          ],
          explicacion: 'Una palabra puede tener varios sentidos; en cada lugar el contexto elige uno, y a veces el autor juega con ellos.'
        } }
      ],
      pensar: 'El ser humano es polvo con aliento de Dios (Gn 2:7). ¿Qué te recuerda tu origen del polvo, y qué te recuerda el aliento que Dios sopló en ti?'
    },
    {
      id: 'kadosh', n: 'Santo: קָדוֹשׁ', ref: 'Levítico 19:2; Éxodo 3:5',
      visual: [
        { tipo: 'hebreo', titulo: 'Levítico 19:2', ref: 'Levítico 19:2', he: '@@wlc:lv/19/2', tr: 'Dabér el-kol-adat bené-Yisrael veamartá alehem: kedoshim tihyú, ki kadosh aní Adonái Elohejem.',
          palabras: P('@@wlcp:lv/19/2', [['dabér', 'habla'], ['el-kol-adat', 'a toda la congregación de'], ['bené-Yisrael', 'los hijos de Israel'], ['veamartá', 'y dirás'], ['alehem', 'a ellos'], ['kedoshim', 'santos'], ['tihyú', 'seréis'], ['ki', 'porque'], ['kadosh', 'santo'], ['aní', 'yo (soy)'], ['Adonái', 'Jehová'], ['Elohejem', 'vuestro Dios']]),
          rv: '@@lv/19/2' },
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de קדשׁ',
          cab: ['Palabra', 'Se lee', 'Significa', 'Ejemplo'],
          filas: [
            ['קָדוֹשׁ', 'kadosh', 'santo (adjetivo)', '«Santo, santo, santo» (Is 6:3)'],
            ['קֹדֶשׁ', 'kódesh', 'santidad; lo santo', '«tierra santa es» (Éx 3:5)'],
            ['קִדֵּשׁ', 'kidesh', 'santificar, consagrar (piel)', '«y lo santificó» (Gn 2:3)'],
            ['מִקְדָּשׁ', 'mikdash', 'santuario', '«y harán un santuario para mí» (Éx 25:8)'],
            ['קֹדֶשׁ הַקֳּדָשִׁים', 'kódesh hakodashim', 'el lugar santísimo', '(Éx 26:33)'],
          ],
          nota: 'La palabra קֹדֶשׁ aparece unas 470 veces. La Reina-Valera la traduce «santo», «santa», «santuario», «santidad», «sagrado» o «consagrado».'
        } }
      ],
      texto: [
        'La raíz קדשׁ forma una de las familias de palabras más importantes de la Biblia: santo, santidad, santificar, santuario. Su idea central, según sus usos, es la de algo apartado para Dios, separado del uso común.',
        { h: 'Cosas, tiempos y lugares santos' },
        'En el Antiguo Testamento son santas muchas cosas que no tienen moral propia: el día de reposo, que Dios bendijo «y lo santificó» (Gn 2:3); los utensilios del tabernáculo; las vestiduras del sumo sacerdote; la tierra donde estaba Moisés ante la zarza: «el lugar en que tú estás, tierra santa es» (Éx 3:5), literalmente אַדְמַת־קֹדֶשׁ, «tierra de santidad». Son santas porque pertenecen a Dios y están reservadas para él.',
        { h: 'Dios, el Santo' },
        'Pero la fuente de toda santidad es Dios mismo. Isaías lo llama una y otra vez קְדוֹשׁ יִשְׂרָאֵל, «Santo de Israel» (Is 1:4), y los serafines lo proclaman con la triple repetición קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ (Is 6:3), la forma más intensa que tiene el hebreo de decir que Dios es absolutamente santo: distinto, puro, majestuoso, por encima de todo lo creado.',
        { ir: { t: 'Ver «Santo, santo, santo» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#atributos/6' } },
        { h: 'Seréis santos' },
        'Levítico 19:2 dice: קְדֹשִׁים תִּהְיוּ, «santos seréis», con el adjetivo plural delante del verbo para destacarlo, como viste en la ruta I. Y el fundamento es una oración nominal: כִּי קָדוֹשׁ אֲנִי, «porque santo (soy) yo». Lo sorprendente es lo que sigue en el capítulo: dejar las espigas para el pobre y el extranjero, no robar, no mentir, pagar el salario a tiempo, no maldecir al sordo, juzgar con justicia, «amarás a tu prójimo como a ti mismo» (Lv 19:9-18). La santidad bíblica no es solo una separación ritual: es una vida apartada para Dios que se nota en el trato con los demás.',
        'Pedro aplica el mismo mandato a la iglesia: «Sed santos, porque yo soy santo» (1 P 1:16). Y el Espíritu que Dios da a los creyentes se llama, precisamente, Espíritu Santo, el que produce esa santidad en la vida diaria.',
        { ejercicio: {
          pregunta: 'Según sus usos en el Antiguo Testamento, ¿qué idea central tiene la raíz קדשׁ?',
          opciones: [
            { t: 'Algo apartado para Dios, separado del uso común.', ok: true, por_que: 'Por eso pueden ser santos un día, un lugar o un utensilio: pertenecen a Dios. Y Dios es santo en grado absoluto.' },
            { t: 'Solamente una persona sin pecado.', ok: false, por_que: 'La palabra se aplica también a objetos y a tiempos, que no tienen moral propia.' },
            { t: 'Algo antiguo y tradicional.', ok: false, por_que: 'La antigüedad no hace santo a nada. Lo santo es lo que pertenece a Dios.' }
          ],
          explicacion: 'Lo santo es lo apartado para Dios. Dios es el Santo por excelencia, y llama a su pueblo a ser santo.'
        } }
      ],
      pensar: 'Levítico 19 une la santidad con dejar espigas para el pobre y pagar a tiempo al trabajador. ¿En qué trato concreto con otras personas necesitas que se note que perteneces a Dios?'
    },
    {
      id: 'tsedaka', n: 'Justicia: צְדָקָה', ref: 'Génesis 15:6; Romanos 4:3',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 15:6', ref: 'Génesis 15:6', he: '@@wlc:gn/15/6', tr: 'Vehemín badonái, vayajshevéha lo tsedaká.',
          palabras: P('@@wlcp:gn/15/6', [['vehemín', 'y creyó'], ['badonái', 'en Jehová'], ['vayajshevéha', 'y se lo contó'], ['lo', 'a él'], ['tsedaká', 'por justicia']]),
          rv: '@@gn/15/6' },
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de צדק',
          cab: ['Palabra', 'Se lee', 'Significa', 'Ejemplo'],
          filas: [
            ['צֶדֶק', 'tsédek', 'justicia, rectitud', '«Balanzas justas» (Lv 19:36)'],
            ['צְדָקָה', 'tsedaká', 'justicia; acto justo', '«le fue contado por justicia» (Gn 15:6)'],
            ['צַדִּיק', 'tsadik', 'justo', '«el justo por su fe vivirá» (Hab 2:4)'],
            ['הִצְדִּיק', 'hitsdik', 'justificar, declarar justo (hifil)', '«justificará mi siervo justo a muchos» (Is 53:11)'],
          ],
          nota: 'La Reina-Valera traduce צְדָקָה «justicia» en unas 149 de sus 159 apariciones.'
        } }
      ],
      texto: [
        'La familia de צדק, tsedek, nombra la justicia. Su idea básica, en sus usos, es la conformidad con una norma: lo que está como debe estar. Una balanza justa, מֹאזְנֵי צֶדֶק, es la que pesa lo que debe pesar (Lv 19:36). Un juez justo es el que juzga según el derecho. Un hombre justo, צַדִּיק, vive de acuerdo con la voluntad de Dios.',
        { h: 'Justicia que salva' },
        'Cuando se habla de Dios, su צְדָקָה es su fidelidad a lo que él es y a lo que prometió. Por eso, en los profetas y en los Salmos, la justicia de Dios aparece muchas veces junto a su salvación: «Haré que se acerque mi justicia; no se alejará, y mi salvación no se detendrá» (Is 46:13). La justicia de Dios no es solo su derecho a castigar: es también su compromiso de rescatar a los suyos.',
        { h: 'Le fue contado por justicia' },
        'Génesis 15:6 es uno de los versículos más importantes de la Biblia, y en hebreo tiene solo cinco palabras. וְהֶאֱמִן בַּיהוָה, «y creyó en Jehová»: הֶאֱמִן es un hifil de la raíz אמן, que estudiarás en la estación siguiente. וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה: «y se la contó a él por justicia». וַיַּחְשְׁבֶהָ es un wayyiqtol de חָשַׁב, «contar, considerar», con un sufijo femenino, ־ֶהָ, «la», que se refiere a la fe de Abram. Es lenguaje de contabilidad: Dios anotó la fe de Abram en la columna de la justicia.',
        'Abram todavía no estaba circuncidado ni había recibido la ley. Pablo lo usa como prueba de que Dios justifica al que cree, no al que obra para ganarlo: «Creyó Abraham a Dios, y le fue contado por justicia» (Ro 4:3; Gá 3:6). Y Isaías anuncia cómo será posible: «por su conocimiento justificará mi siervo justo a muchos, y llevará las iniquidades de ellos» (Is 53:11). «Justo» es צַדִּיק, y «justificará» es יַצְדִּיק, un hifil: hará justos, declarará justos.',
        { ir: { t: 'Ver «Justificados por la fe» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/5' } },
        { ejercicio: {
          pregunta: 'En Génesis 15:6, ¿qué le «contó» Dios a Abram por justicia?',
          opciones: [
            { t: 'Su obediencia a la ley de Moisés.', ok: false, por_que: 'La ley se dio siglos después de Abram.' },
            { t: 'Su fe: el sufijo femenino de וַיַּחְשְׁבֶהָ se refiere a que creyó en Jehová.', ok: true, por_que: 'El verbo de contar lleva un sufijo «la», que remite al acto de creer de la primera mitad del versículo.' },
            { t: 'Su circuncisión.', ok: false, por_que: 'La circuncisión llega en Génesis 17, después. Pablo destaca este orden en Romanos 4:10.' }
          ],
          explicacion: 'Dios contó la fe de Abram como justicia. Es la base bíblica de la justificación por la fe.'
        } }
      ],
      pensar: 'Dios anotó la fe de Abram en la columna de la justicia (Gn 15:6). ¿Confías en lo que Cristo hizo, o todavía intentas llenar esa columna con tus propias obras?'
    },
    {
      id: 'emuna', n: 'Creer y fidelidad: אָמַן y אֱמוּנָה', ref: 'Habacuc 2:4; Isaías 7:9',
      visual: [
        { tipo: 'hebreo', titulo: 'Habacuc 2:4', ref: 'Habacuc 2:4', he: '@@wlc:hab/2/4', tr: 'Hiné ufelá lo-yashrá nafshó bo, vetsadik beemunató yijyé.',
          palabras: P('@@wlcp:hab/2/4', [['hiné', 'he aquí'], ['ufelá', 'se enorgullece'], ['lo-yashrá', 'no es recta'], ['nafshó', 'su alma'], ['bo', 'en él'], ['vetsadik', 'pero el justo'], ['beemunató', 'por su fe'], ['yijyé', 'vivirá']]),
          rv: '@@hab/2/4' },
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de אמן',
          cab: ['Palabra', 'Se lee', 'Significa', 'Ejemplo'],
          filas: [
            ['אָמֵן', 'amén', 'así es, así sea', '«Y todo el pueblo responderá y dirá: Amén» (Dt 27:15)'],
            ['נֶאֱמָן', 'neemán', 'fiel, firme (nifal)', '«el testimonio de Jehová es fiel» (Sal 19:7)'],
            ['הֶאֱמִין', 'heemín', 'creer, confiar (hifil)', '«y creyó a Jehová» (Gn 15:6)'],
            ['אֱמֶת', 'emet', 'verdad, fidelidad', '«grande en misericordia y verdad» (Éx 34:6)'],
            ['אֱמוּנָה', 'emuná', 'fidelidad, firmeza; fe', '«hubo en sus manos firmeza» (Éx 17:12)'],
          ],
          nota: 'La Reina-Valera traduce אֱמוּנָה «verdad» unas 24 veces y «fidelidad» unas 14, de 49. «Fe», solo en Habacuc 2:4.'
        } }
      ],
      texto: [
        'Cada vez que dices «amén», usas una palabra hebrea. אָמֵן viene de la raíz אמן, que expresa firmeza, estabilidad, algo en lo que uno puede apoyarse. Al decir «amén», el pueblo afirmaba: «esto es firme, así es».',
        { h: 'Una familia firme' },
        'La tabla muestra la familia. En nifal, נֶאֱמָן es lo que es firme y digno de confianza: «fiel». En hifil, הֶאֱמִין es «considerar firme, apoyarse en», es decir, «creer, confiar». אֱמֶת es la verdad, lo que no falla. Y אֱמוּנָה es la firmeza: cuando Moisés levantaba los brazos durante la batalla contra Amalec, Aarón y Hur se los sostuvieron: «así hubo en sus manos firmeza hasta que se puso el sol» (Éx 17:12). La palabra «firmeza» es אֱמוּנָה.',
        { h: 'Si no creyereis, no permaneceréis' },
        'Isaías juega con la raíz en una frase famosa: אִם לֹא תַאֲמִינוּ כִּי לֹא תֵאָמֵנוּ, «Si vosotros no creyereis, de cierto no permaneceréis» (Is 7:9). El primer verbo es un hifil, «creer»; el segundo, un nifal de la misma raíz, «ser firmes». Si no os apoyáis en Dios, no os mantendréis en pie. En español se pierde el juego de palabras; en hebreo suena como un refrán.',
        { h: 'El justo por su fe vivirá' },
        'Habacuc 2:4 es el único lugar donde la Reina-Valera traduce אֱמוּנָה como «fe»: וְצַדִּיק בֶּאֱמוּנָתוֹ יִחְיֶה, «mas el justo por su fe vivirá». בֶּאֱמוּנָתוֹ es בְּ + אֱמוּנָה + el sufijo «su». Pablo cita este versículo dos veces para enseñar que el ser humano es justificado por la fe (Ro 1:17; Gá 3:11), y Hebreos lo cita para animar a perseverar (He 10:38).',
        { posturas: {
          titulo: '¿Fe o fidelidad en Habacuc 2:4?',
          a: { n: 'Fe: confianza en Dios', t: 'La Reina-Valera, siguiendo la cita de Pablo, traduce «fe»: el justo vive por confiar en Dios y en su promesa, no en sus propias fuerzas.' },
          b: { n: 'Fidelidad: firmeza que persevera', t: 'Otras versiones traducen «fidelidad», porque es el sentido más común de אֱמוּנָה: el justo vive manteniéndose firme y leal mientras espera el cumplimiento de la visión (Hab 2:3).' },
          c: 'Las dos lecturas no se oponen. La fe bíblica es confianza que se apoya en Dios, y por eso persevera y se mantiene fiel. Pablo destaca la confianza que justifica; Hebreos, la firmeza que persevera. Las dos están en la raíz אמן.'
        } },
        { ejercicio: {
          pregunta: '¿Qué significa «amén» según su raíz y sus usos?',
          opciones: [
            { t: '«Fin», como el final de una oración.', ok: false, por_que: 'El amén se dice al final, pero no significa «fin».' },
            { t: '«Así es, así sea»: se afirma que algo es firme y verdadero.', ok: true, por_que: 'La raíz אמן expresa firmeza. Con «amén», el pueblo hacía suyo lo que se había dicho (Dt 27:15-26).' },
            { t: '«Te amo», porque viene del verbo «amar».', ok: false, por_que: 'El parecido con «amar» es casual. «Amar» en hebreo es אָהַב.' }
          ],
          explicacion: 'Amén: «es firme, así es». Comparte raíz con creer, verdad y fidelidad.'
        } }
      ],
      pensar: '«Si vosotros no creyereis, de cierto no permaneceréis» (Is 7:9). ¿En qué te estás apoyando para mantenerte en pie en este tiempo?'
    },
    {
      id: 'redencion', n: 'Redención y salvación: גָּאַל y יְשׁוּעָה', ref: 'Job 19:25; Rut 4:14',
      visual: [
        { tipo: 'hebreo', titulo: 'Job 19:25', ref: 'Job 19:25', he: '@@wlc:job/19/25', tr: 'Vaaní yadati goalí jay, veajarón al-afar yakum.',
          palabras: P('@@wlcp:job/19/25', [['vaaní', 'y yo'], ['yadati', 'sé'], ['goalí', 'mi redentor'], ['jay', 'vive'], ['veajarón', 'y al fin (el último)'], ['al-afar', 'sobre el polvo'], ['yakum', 'se levantará']]),
          rv: '@@job/19/25' },
        { tipo: 'tabla', titulo: 'El goel', tabla: {
          titulo: 'Qué hacía el גֹּאֵל, el pariente redentor',
          cab: ['Tarea', 'Pasaje'],
          filas: [
            ['Rescatar la tierra que un pariente pobre había vendido', 'Levítico 25:25'],
            ['Rescatar a un pariente vendido como esclavo', 'Levítico 25:47-49'],
            ['Vengar la sangre de un pariente asesinado («el vengador de la sangre»)', 'Números 35:19'],
            ['Casarse con la viuda para dar descendencia al pariente muerto', 'Rut 3:9-13; 4:5-10'],
            ['Dios es el Redentor de Israel', 'Éxodo 6:6; Isaías 41:14'],
          ],
          nota: 'La Reina-Valera traduce גָּאַל «redimir», «rescatar», «redentor», «vengador» y «pariente». יְשׁוּעָה, casi siempre «salvación».'
        } }
      ],
      texto: [
        'La Biblia hebrea tiene varias palabras para el rescate. Esta estación estudia dos familias: la de גָּאַל, «redimir», y la de יָשַׁע, «salvar».',
        { h: 'El pariente que rescata' },
        'גָּאַל, gaal, es un verbo de la vida familiar. En Israel, si una persona empobrecía y tenía que vender su tierra o venderse como esclava, su pariente más cercano tenía el derecho y el deber de rescatarla pagando el precio. Ese pariente era el גֹּאֵל, goel, participio de גָּאַל: «el que rescata». La tabla muestra sus tareas. El libro de Rut gira en torno a esta figura: Booz es el גֹּאֵל que rescata la heredad de Elimelec y toma a Rut por esposa, y al final las mujeres de Belén bendicen a Dios, «que hizo que no te faltase hoy pariente» (Rt 4:14): la palabra «pariente» es גֹּאֵל.',
        'Dios mismo se presenta así: «os redimiré con brazo extendido» (Éx 6:6), y el verbo es וְגָאַלְתִּי. Isaías lo repite muchas veces: «el Santo de Israel es tu Redentor» (Is 41:14). Llamar a Dios גֹּאֵל es decir que se hizo pariente de su pueblo, que asumió como propia su deuda y su esclavitud.',
        { h: 'Yo sé que mi Redentor vive' },
        'En Job 19:25, en medio de su sufrimiento, Job dice: וַאֲנִי יָדַעְתִּי גֹּאֲלִי חָי, «y yo sé (que) mi redentor vive». El pronombre אֲנִי da énfasis, como viste en la ruta II; יָדַעְתִּי es un perfecto que se traduce en presente, «sé»; y גֹּאֲלִי es el participio con el sufijo «mi». Job no sabe cómo, pero sabe que alguien saldrá en su defensa y que al fin se levantará sobre el polvo. La iglesia ha visto en estas palabras la esperanza en Cristo, el Redentor que vive.',
        'El Nuevo Testamento explica por qué Cristo pudo ser nuestro redentor: como los hijos participaron de carne y sangre, el Hijo de Dios «también participó de lo mismo»: se hizo nuestro pariente para librar a los que estaban en esclavitud (He 2:14-15).',
        { ir: { t: 'Ver «Propiciación, redención, reconciliación» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/4' } },
        { h: 'Salvación: Jesús' },
        'La otra familia es la de יָשַׁע, yashá, «salvar, librar», que se usa casi siempre en hifil: הוֹשִׁיעַ, hoshía, «salvó». De ella vienen יְשׁוּעָה, yeshuá, «salvación», que la Reina-Valera traduce así en casi todas sus apariciones, y el nombre יְהוֹשֻׁעַ, Yehoshúa, «Jehová es salvación», que en griego se dijo Iēsous: Jesús. Por eso el ángel dijo a José: «llamarás su nombre Jesús, porque él salvará a su pueblo de sus pecados» (Mt 1:21).',
        { ejercicio: {
          pregunta: '¿Quién podía ser el גֹּאֵל de una persona en Israel?',
          opciones: [
            { t: 'Cualquier persona rica de la ciudad.', ok: false, por_que: 'El derecho de rescate correspondía a la familia, no a cualquier persona con dinero.' },
            { t: 'Su pariente cercano, que tenía el derecho y el deber de rescatarla.', ok: true, por_que: 'Por eso Booz pudo rescatar a Rut, y por eso el Hijo de Dios se hizo hombre para ser nuestro pariente (He 2:14).' },
            { t: 'Solo el sacerdote.', ok: false, por_que: 'El rescate era una obligación familiar. Los sacerdotes tenían otras funciones.' }
          ],
          explicacion: 'El goel era el pariente que rescataba. Cristo se hizo nuestro pariente para redimirnos.'
        } }
      ],
      pensar: '«Yo sé que mi Redentor vive» (Job 19:25). Job lo dijo cuando lo había perdido todo. ¿Qué cambiaría en tu manera de enfrentar tu dificultad actual si lo dijeras con la misma certeza?'
    }
  ];

  window.__GRAM.palabras = palabras;
})();
