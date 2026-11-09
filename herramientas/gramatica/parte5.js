/* Vocabulario y gramática básica del hebreo bíblico · Taller práctico y RUTA_DATA (ver encabezado de parte1.js) */
(() => {
  const P = window.__GRAM.P;

  const taller = [
    {
      id: 'sea-la-luz', n: 'Génesis 1:3: «Sea la luz»', ref: 'Génesis 1:3; 2 Corintios 4:6',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 1:3', ref: 'Génesis 1:3', he: '@@wlc:gn/1/3', tr: 'Vayómer Elohim: yehí or! Vayehí-or.',
          palabras: P('@@wlcp:gn/1/3', [['vayómer', 'y dijo'], ['Elohim', 'Dios'], ['yehí', 'sea'], ['or', 'luz'], ['vayehí-or', 'y fue la luz']]),
          rv: '@@gn/1/3' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Palabra por palabra',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['וַיֹּאמֶר', 'Qal imperfecto con vav consecutiva, 3.ª m. sg., de אָמַר: «y dijo»', 'III.4'],
            ['אֱלֹהִים', 'Sustantivo masculino plural, con verbo en singular: «Dios»', 'II.1'],
            ['יְהִי', 'Qal yusivo, 3.ª m. sg., de הָיָה (final he, acortado): «sea»', 'III.5 y III.11'],
            ['אוֹר', 'Sustantivo masculino singular, sin artículo: «luz»', 'II.3'],
            ['וַיְהִי־אוֹר', 'Qal imperfecto con vav consecutiva de הָיָה + sustantivo: «y fue la luz»', 'III.4'],
          ],
          nota: 'Cinco palabras, tres formas del verbo «ser».'
        } }
      ],
      texto: [
        'El taller aplica lo que aprendiste a seis pasajes muy conocidos. En cada uno, primero intenta analizar las palabras tú mismo con el método de la ruta III y el vocabulario; después compara con la tabla del panel.',
        { h: 'Cinco palabras' },
        'Génesis 1:3 tiene cinco palabras en hebreo y doce en la Reina-Valera. Empieza con el verbo de la narración, וַיֹּאמֶר, «y dijo», un wayyiqtol que hace avanzar el relato. El sujeto, אֱלֹהִים, tiene forma plural, pero el verbo está en singular: es el único Dios verdadero, como viste en la ruta II.',
        'Después viene lo que Dios dijo, en dos palabras: יְהִי אוֹר, «sea luz». יְהִי es el yusivo de הָיָה, «ser», la forma de la voluntad en tercera persona. Como הָיָה es un verbo de final he, su yusivo se acorta: no יִהְיֶה, sino יְהִי. Y אוֹר va sin artículo: todavía no existía ninguna luz a la que referirse.',
        { h: 'Dicho y hecho' },
        'La última palabra repite la orden con otra forma del mismo verbo: וַיְהִי־אוֹר, «y fue luz». Del yusivo al wayyiqtol: lo que Dios quiere, sucede. La gramática muestra la teología del pasaje. Dios no lucha contra la oscuridad ni necesita materiales: habla, y su palabra se cumple. Por eso el salmista dice: «Porque él dijo, y fue hecho; El mandó, y existió» (Sal 33:9).',
        'Pablo vio en este versículo una imagen de la conversión: «Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones» (2 Co 4:6). La misma palabra que creó la luz en el principio la hace brillar hoy en quien cree.',
        { ejercicio: {
          pregunta: '¿Por qué en Génesis 1:3 se escribe יְהִי y no יִהְיֶה?',
          opciones: [
            { t: 'Porque יְהִי es un yusivo acortado: «que sea», y no un simple futuro.', ok: true, por_que: 'En los verbos de final he, el yusivo pierde la terminación. La forma corta expresa la voluntad de Dios.' },
            { t: 'Porque es un error de copia.', ok: false, por_que: 'Es una forma gramatical normal, que se repite en todo el capítulo.' },
            { t: 'Porque יְהִי es un sustantivo que significa «luz».', ok: false, por_que: '«Luz» es אוֹר, la palabra siguiente.' }
          ],
          explicacion: 'Yusivo acortado de un verbo de final he: יְהִי, «sea».'
        } }
      ],
      pensar: '«Dijo Dios: Sea la luz; y fue la luz» (Gn 1:3). ¿Qué área oscura de tu vida necesita hoy que Dios hable su palabra?'
    },
    {
      id: 'abram', n: 'Génesis 12:1-2: el llamado de Abram', ref: 'Génesis 12:1-2; Hechos 7:2-4',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 12:1', ref: 'Génesis 12:1', he: '@@wlc:gn/12/1', tr: 'Vayómer Adonái el-Avram: lej-lejá mearetsjá umimoladtejá umibet avija el-haárets asher arejá.',
          palabras: P('@@wlcp:gn/12/1', [['vayómer', 'y dijo'], ['Adonái', 'Jehová'], ['el-Avram', 'a Abram'], ['lej-lejá', 'vete'], ['mearetsjá', 'de tu tierra'], ['umimoladtejá', 'y de tu parentela'], ['umibet', 'y de la casa de'], ['avija', 'tu padre'], ['el-haárets', 'a la tierra'], ['asher', 'que'], ['arejá', 'te mostraré']]),
          rv: '@@gn/12/1' },
        { tipo: 'hebreo', titulo: 'Génesis 12:2', ref: 'Génesis 12:2', he: '@@wlc:gn/12/2', tr: 'Veeesjá legoy gadol vaavarejejá vaagadlá shmeja, veheyé berajá.',
          palabras: P('@@wlcp:gn/12/2', [['veeesjá', 'y te haré'], ['legoy', 'una nación'], ['gadol', 'grande'], ['vaavarejejá', 'y te bendeciré'], ['vaagadlá', 'y engrandeceré'], ['shmeja', 'tu nombre'], ['veheyé', 'y sé'], ['berajá', 'bendición']]),
          rv: '@@gn/12/2' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas clave',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['לֶךְ־לְךָ', 'Qal imperativo m. sg. de הָלַךְ + לְ con sufijo «ti»: «vete (tú)»', 'III.5'],
            ['מֵאַרְצְךָ', 'מִן + אֶרֶץ + sufijo «tu»: «de tu tierra»', 'II.4 y II.9'],
            ['וּמִבֵּית אָבִיךָ', 'ו + מִן + constructo de בַּיִת + אָב con sufijo: «y de la casa de tu padre»', 'II.7'],
            ['אַרְאֶךָּ', 'Hifil imperfecto 1.ª sg. de רָאָה + sufijo: «te haré ver, te mostraré»', 'III.10'],
            ['וַאֲבָרֶכְךָ', 'Piel imperfecto 1.ª sg. de בָּרַךְ + sufijo, con vav: «y te bendeciré»', 'III.9'],
            ['וַאֲגַדְּלָה', 'Piel cohortativo 1.ª sg. de גָּדַל: «y engrandeceré»', 'III.5 y III.9'],
            ['וֶהְיֵה', 'Qal imperativo m. sg. de הָיָה, con vav: «y sé»', 'III.5'],
          ],
          nota: 'Una orden en el versículo 1, cinco promesas y otra orden en el versículo 2.'
        } }
      ],
      texto: [
        'El llamado de Abram es el comienzo de la historia de Israel y, por medio de ella, de la promesa para todas las naciones (Gn 12:3). La gramática de estos dos versículos muestra cómo se combinan la orden de Dios y sus promesas.',
        { h: 'La orden' },
        'El versículo 1 empieza con un wayyiqtol, וַיֹּאמֶר, que la Reina-Valera traduce «había dicho». Normalmente se traduciría «y dijo». Pero Esteban cuenta, en Hechos 7:2-4, que Dios llamó a Abraham estando en Mesopotamia, antes de Harán, y por eso los traductores entendieron que el llamado ya había ocurrido. El contexto de toda la Escritura ayuda a traducir.',
        'La orden es לֶךְ־לְךָ, lej-lejá: un imperativo de הָלַךְ, «ir», con la preposición לְ y el sufijo «ti», literalmente «vete para ti». Después vienen tres complementos con מִן, cada vez más cercanos y más difíciles de dejar: «de tu tierra», «de tu parentela», «de la casa de tu padre». Y el destino no tiene nombre: אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ, «a la tierra que te mostraré». אַרְאֶךָּ es un hifil de רָאָה, «ver»: «te haré ver». Abram tenía que salir sin conocer el destino, como recuerda Hebreos 11:8.',
        { h: 'Las promesas' },
        'El versículo 2 encadena promesas con la vav: «te haré», «te bendeciré», «engrandeceré tu nombre». וַאֲגַדְּלָה es un cohortativo de piel, con la terminación ־ָה: expresa la determinación de Dios. Los constructores de Babel habían dicho «hagámonos un nombre» (Gn 11:4); aquí es Dios quien promete engrandecer el nombre de Abram.',
        'Y la última palabra sorprende: וֶהְיֵה בְּרָכָה es un imperativo, «¡y sé bendición!». La Reina-Valera lo traduce «y serás bendición», porque en este contexto el imperativo expresa la consecuencia segura de las promesas. Abram es bendecido para que sea bendición.',
        { ejercicio: {
          pregunta: '¿Qué forma es אַרְאֶךָּ, «te mostraré»?',
          opciones: [
            { t: 'Qal perfecto: «vi».', ok: false, por_que: 'El perfecto tendría terminación (רָאִיתִי, «vi»). Aquí hay un prefijo א de primera persona.' },
            { t: 'Hifil imperfecto de primera persona de רָאָה, con sufijo «te»: «te haré ver».', ok: true, por_que: 'El hifil de «ver» es causativo: «hacer ver, mostrar». La א es «yo» y ־ךָּ, «te».' },
            { t: 'Sustantivo: «tu tierra».', ok: false, por_que: '«Tu tierra» es אַרְצְךָ, que aparece antes en el mismo versículo.' }
          ],
          explicacion: 'Prefijo א + raíz רָאָה (final he) + sufijo: hifil imperfecto, «te mostraré».'
        } }
      ],
      pensar: 'Abram tuvo que salir hacia «la tierra que te mostraré», sin conocerla (Gn 12:1). ¿Qué paso de obediencia te está pidiendo Dios aunque todavía no veas el resultado?'
    },
    {
      id: 'yo-soy', n: 'Éxodo 3:14: «Yo soy el que soy»', ref: 'Éxodo 3:12-15; Juan 8:58',
      visual: [
        { tipo: 'hebreo', titulo: 'Éxodo 3:14', ref: 'Éxodo 3:14', he: '@@wlc:ex/3/14', tr: 'Vayómer Elohim el-Moshé: Ehyé asher ehyé. Vayómer: ko tomar livné Yisrael: Ehyé shlajani alejem.',
          palabras: P('@@wlcp:ex/3/14', [['vayómer', 'y dijo'], ['Elohim', 'Dios'], ['el-Moshé', 'a Moisés'], ['ehyé', 'YO SOY (seré)'], ['asher', 'el que'], ['ehyé', 'soy (seré)'], ['vayómer', 'y dijo'], ['ko', 'así'], ['tomar', 'dirás'], ['livné', 'a los hijos de'], ['Yisrael', 'Israel'], ['ehyé', 'YO SOY'], ['shlajani', 'me envió'], ['alejem', 'a vosotros']]),
          rv: '@@ex/3/14' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas clave',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['אֶהְיֶה', 'Qal imperfecto 1.ª sg. de הָיָה: «soy, seré, estaré»', 'III.3'],
            ['אֲשֶׁר', 'Relativo: «el que»', 'II.10'],
            ['כֹּה תֹאמַר', 'Adverbio + qal imperfecto 2.ª m. sg. de אָמַר, con valor de mandato: «así dirás»', 'III.3'],
            ['לִבְנֵי יִשְׂרָאֵל', 'לְ + constructo plural de בֵּן + nombre propio: «a los hijos de Israel»', 'II.7'],
            ['שְׁלָחַנִי', 'Qal perfecto 3.ª m. sg. de שָׁלַח + sufijo ־נִי, «me»: «me envió»', 'III.2 y III.12'],
            ['אֲלֵיכֶם', 'אֶל + sufijo ־כֶם, «vosotros»: «a vosotros»', 'II.9'],
          ],
          nota: 'En el versículo siguiente, Dios se nombra יְהוָה, en tercera persona (Éx 3:15).'
        } }
      ],
      texto: [
        'Cuando Moisés preguntó a Dios por su nombre, recibió una de las respuestas más profundas de la Escritura: אֶהְיֶה אֲשֶׁר אֶהְיֶה, ehyé asher ehyé, «YO SOY EL QUE SOY».',
        { h: 'Un imperfecto de הָיָה' },
        'אֶהְיֶה es una forma que ya conoces: el imperfecto de primera persona de הָיָה, «ser, estar». La א es «yo»; la terminación ־ֶה es la del verbo de final he. Como el imperfecto mira la acción como no terminada, puede traducirse «soy», «seré» o «estaré». Unos versículos antes, Dios le había dicho a Moisés con la misma forma: כִּי־אֶהְיֶה עִמָּךְ, «yo estaré contigo» (Éx 3:12).',
        'En el versículo siguiente, Dios se presenta con su nombre, יְהוָה, «Jehová, el Dios de vuestros padres» (Éx 3:15). Muchos ven en ese nombre la tercera persona de la misma idea: si Dios dice de sí mismo «Yo soy», su pueblo dice de él «Él es». Las palabras son distintas, pero el versículo 14 explica el versículo 15.',
        { ir: { t: 'Ver «Jehová, Yo soy el que soy» en Dios y la Trinidad', a: '../../dios-y-la-trinidad/#nombres/2' } },
        { posturas: {
          titulo: '¿«Soy» o «seré»?',
          a: { n: 'Yo soy: el Dios que existe por sí mismo', t: 'La traducción griega antigua del Antiguo Testamento dijo «Yo soy el que es», y así lo entendió la mayoría de la tradición cristiana: Dios existe por sí mismo, no depende de nada y no cambia. Jesús dijo «Antes que Abraham fuese, yo soy» (Jn 8:58), y sus oyentes entendieron que se atribuía el nombre de Dios.' },
          b: { n: 'Seré: el Dios que estará presente', t: 'Otros destacan el sentido de futuro y de presencia del imperfecto: «Seré el que seré», «estaré como el que estaré», en relación con «yo estaré contigo» del versículo 12. Dios se dará a conocer en lo que hará por su pueblo.' },
          c: 'Las dos lecturas se complementan. El Dios que existe por sí mismo y no cambia es precisamente el que puede prometer estar presente con su pueblo en todo lo que venga. El imperfecto hebreo deja abiertas las dos cosas.'
        } },
        { ejercicio: {
          pregunta: '¿Qué significa שְׁלָחַנִי, shlajani?',
          opciones: [
            { t: '«Me envió».', ok: true, por_que: 'Perfecto qal de שָׁלַח, «enviar», con el sufijo de objeto ־נִי, «me».' },
            { t: '«Envié».', ok: false, por_que: '«Envié» sería שָׁלַחְתִּי, con la terminación ־תִּי.' },
            { t: '«Envíame».', ok: false, por_que: 'El imperativo con sufijo sería שְׁלָחֵנִי, con otras vocales. El contexto también pide un hecho cumplido: «YO SOY me envió».' }
          ],
          explicacion: 'Perfecto + ־נִי = «me» hizo la acción. שְׁלָחַנִי, «me envió».'
        } }
      ],
      pensar: 'Dios le dijo a Moisés «yo estaré contigo» antes de decirle «Yo soy el que soy» (Éx 3:12-14). ¿Qué tarea te ha confiado Dios en la que necesitas recordar que él estará contigo?'
    },
    {
      id: 'pastor', n: 'Salmo 23:1-3: el Pastor', ref: 'Salmo 23:1-3; Juan 10:11',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 23:2', ref: 'Salmo 23:2', he: '@@wlc:sal/23/2', tr: 'Binot déshe yarbitseni, al-mé menujot yenahaleni.',
          palabras: P('@@wlcp:sal/23/2', [['binot', 'en praderas de'], ['déshe', 'hierba tierna'], ['yarbitseni', 'me hace recostar'], ['al-mé', 'junto a aguas de'], ['menujot', 'reposo'], ['yenahaleni', 'me conduce']]),
          rv: '@@sal/23/2' },
        { tipo: 'hebreo', titulo: 'Salmo 23:3', ref: 'Salmo 23:3', he: '@@wlc:sal/23/3', tr: 'Nafshí yeshovev, yanjeni vemaaguelé-tsédek lemáan shmó.',
          palabras: P('@@wlcp:sal/23/3', [['nafshí', 'mi alma'], ['yeshovev', 'hace volver'], ['yanjeni', 'me guía'], ['vemaaguelé-tsédek', 'por sendas de justicia'], ['lemáan', 'por causa de'], ['shmó', 'su nombre']]),
          rv: '@@sal/23/3' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas de los versículos 1 a 3',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['רֹעִי', 'Qal participio de רָעָה + sufijo «mi»: «el que me apacienta, mi pastor»', 'III.6'],
            ['לֹא אֶחְסָר', 'Negación + qal imperfecto 1.ª sg. de חָסֵר: «no me faltará»', 'III.3'],
            ['יַרְבִּיצֵנִי', 'Hifil imperfecto 3.ª m. sg. de רָבַץ + ־נִי: «me hace recostar»', 'III.10'],
            ['עַל־מֵי מְנֻחוֹת', 'עַל + constructo de מַיִם + plural femenino: «junto a aguas de reposo»', 'II.4 y II.7'],
            ['יְנַהֲלֵנִי', 'Piel imperfecto de נָהַל + ־נִי: «me conduce»', 'III.9'],
            ['נַפְשִׁי יְשׁוֹבֵב', 'Sustantivo + «mi»; forma intensiva de שׁוּב: «hace volver mi alma»', 'II.9 y III.11'],
            ['לְמַעַן שְׁמוֹ', 'Preposición + שֵׁם + «su»: «por amor de su nombre»', 'II.9'],
          ],
          nota: 'Todos los verbos son imperfectos: el cuidado del pastor no es un hecho aislado, es lo que hace siempre.'
        } }
      ],
      texto: [
        'En El alfabeto hebreo leíste en voz alta los primeros versículos del Salmo 23. Ahora puedes entender cada una de sus formas.',
        { h: 'El pastor y la oveja' },
        'El salmo empieza con una oración nominal: יְהוָה רֹעִי, «Jehová, mi pastor». רֹעִי es un participio, «el que me apacienta», con el sufijo «mi». Y la consecuencia, לֹא אֶחְסָר, es un imperfecto de primera persona: «no me faltará», ni hoy ni mañana.',
        'En los versículos 2 y 3, todos los verbos tienen a Jehová como sujeto y a David como objeto, con el sufijo ־נִי, «me»: יַרְבִּיצֵנִי, «me hace recostar»; יְנַהֲלֵנִי, «me conduce»; יַנְחֵנִי, «me guía». La oveja no hace nada por sí misma: todo lo hace el pastor. יַרְבִּיצֵנִי es un hifil, causativo: una oveja solo se recuesta cuando está saciada y sin temor, y el pastor es quien crea esas condiciones.',
        { h: 'Aguas de reposo' },
        'עַל־מֵי מְנֻחוֹת, «junto a aguas de reposo», combina dos cosas que estudiaste: מֵי es el estado constructo de מַיִם, «aguas de», y מְנֻחוֹת es un sustantivo femenino plural de la raíz נוח, «reposar», con la que se relaciona el nombre de Noé, נֹחַ. No son aguas turbulentas, sino tranquilas, donde la oveja puede beber sin peligro.',
        { h: 'Hace volver mi alma' },
        'נַפְשִׁי יְשׁוֹבֵב, «confortará mi alma», es literalmente «mi alma hace volver». יְשׁוֹבֵב es una forma intensiva del verbo hueco שׁוּב, «volver», el mismo verbo del arrepentimiento. El pastor no solo da descanso: trae de vuelta a la oveja que se desvió. Y lo hace לְמַעַן שְׁמוֹ, «por amor de su nombre»: su reputación de buen pastor está en juego. Jesús dijo: «Yo soy el buen pastor; el buen pastor su vida da por las ovejas» (Jn 10:11).',
        { ejercicio: {
          pregunta: '¿Qué indica el sufijo ־נִי en יַרְבִּיצֵנִי, יְנַהֲלֵנִי y יַנְחֵנִי?',
          opciones: [
            { t: 'Que el sujeto es «yo».', ok: false, por_que: 'El sujeto es Jehová: los tres verbos tienen el prefijo י de tercera persona.' },
            { t: 'Que el objeto es «me»: el pastor hace algo con la oveja.', ok: true, por_que: '־נִי es el sufijo de objeto de primera persona: «me hace recostar», «me conduce», «me guía».' },
            { t: 'Que son verbos en plural.', ok: false, por_que: 'El plural del imperfecto lleva la terminación ־וּ. ־נִי es un sufijo pronominal.' }
          ],
          explicacion: 'En un verbo, ־נִי es «me». En el Salmo 23, Jehová es el que actúa y David el que recibe.'
        } }
      ],
      pensar: 'En el Salmo 23, todos los verbos tienen a Jehová como sujeto: la oveja recibe. ¿Te cuesta dejarte guiar? ¿En qué necesitas dejar que el Pastor haga lo que tú no puedes?'
    },
    {
      id: 'herido', n: 'Isaías 53:5: herido por nuestras rebeliones', ref: 'Isaías 53:4-6; 1 Pedro 2:24',
      visual: [
        { tipo: 'hebreo', titulo: 'Isaías 53:5', ref: 'Isaías 53:5', he: '@@wlc:is/53/5', tr: 'Vehú mejolal mipeshaenu, medukká meavonotenu, musar shlomenu alav, uvajavurató nirpá-lanu.',
          palabras: P('@@wlcp:is/53/5', [['vehú', 'mas él'], ['mejolal', 'fue herido (traspasado)'], ['mipeshaenu', 'por nuestras rebeliones'], ['medukká', 'molido'], ['meavonotenu', 'por nuestras iniquidades'], ['musar', 'el castigo de'], ['shlomenu', 'nuestra paz'], ['alav', 'sobre él'], ['uvajavurató', 'y por su llaga'], ['nirpá-lanu', 'fuimos curados']]),
          rv: '@@is/53/5' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Palabra por palabra',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['וְהוּא', 'ו + pronombre «él», con énfasis: «mas él»', 'II.8'],
            ['מְחֹלָל', 'Participio pasivo intensivo de חָלַל: «traspasado, herido»', 'III.6 y III.9'],
            ['מִפְּשָׁעֵנוּ', 'מִן («por causa de») + פֶּשַׁע en plural, escrito sin yod, + «nuestras»', 'II.4 y II.9'],
            ['מְדֻכָּא', 'Pual participio de דָּכָא: «molido, quebrantado»', 'III.9'],
            ['מוּסַר שְׁלוֹמֵנוּ', 'Constructo de מוּסָר + שָׁלוֹם con «nuestra»: «el castigo de nuestra paz»', 'II.7 y IV.3'],
            ['עָלָיו', 'עַל + sufijo «él»: «sobre él»', 'II.9'],
            ['נִרְפָּא־לָנוּ', 'Nifal perfecto 3.ª m. sg. de רָפָא + «a nosotros»: «hubo curación para nosotros»', 'III.9'],
          ],
          nota: 'Cuatro veces «nuestro» o «nosotros» (־ֵנוּ, ־נוּ); tres veces «él» (הוּא, ־ָיו, ־וֹ).'
        } }
      ],
      texto: [
        'Isaías 53 es el cuarto cántico del Siervo de Jehová, y el pasaje del Antiguo Testamento que más claramente anuncia la muerte sustitutiva de Cristo. El Nuevo Testamento lo cita una y otra vez (Hch 8:32-35; 1 P 2:22-25). El versículo 5 tiene diez palabras hebreas, y su gramática enseña la sustitución.',
        { h: 'Él y nosotros' },
        'Fíjate en los sufijos. Cuatro veces aparece ־ֵנוּ o ־נוּ, «nuestro» o «nosotros»: מִפְּשָׁעֵנוּ, «por nuestras rebeliones»; מֵעֲוֺנֹתֵינוּ, «por nuestras iniquidades»; שְׁלוֹמֵנוּ, «nuestra paz»; לָנוּ, «para nosotros». Y tres veces aparece «él»: וְהוּא, עָלָיו, וּבַחֲבֻרָתוֹ. El versículo alterna entre lo nuestro y lo suyo: lo que era nuestro, la rebelión y la iniquidad, cayó sobre él; lo que era suyo, la paz y la sanidad, llegó a nosotros.',
        'El pronombre independiente וְהוּא, al comienzo, es enfático, como viste en la ruta II. El versículo anterior había dicho: «nosotros le tuvimos por azotado, por herido de Dios» (Is 53:4). Ahora el profeta corrige: «Mas él…». No sufría por sus pecados, sino por los nuestros. La preposición מִן aquí tiene sentido de causa: «a causa de».',
        { h: 'Formas pasivas' },
        'Los dos primeros verbos son participios pasivos de formas intensivas: מְחֹלָל, «traspasado», y מְדֻכָּא, «molido», un pual. El Siervo no es el que hiere: es el que recibe los golpes. Y el castigo, מוּסָר, el mismo sustantivo que en Proverbios significa «disciplina», está en estado constructo con שָׁלוֹם: «el castigo de nuestra paz», el castigo que produjo nuestra paz.',
        { h: 'Por su llaga' },
        'La última palabra es un nifal perfecto: נִרְפָּא־לָנוּ, literalmente «hubo curación para nosotros». Pedro la aplica al perdón del pecado: «por cuya herida fuisteis sanados» (1 P 2:24). Mateo aplica el versículo anterior a las sanidades del ministerio de Jesús: «El mismo tomó nuestras enfermedades, y llevó nuestras dolencias» (Mt 8:17). La obra de Cristo en la cruz alcanza al ser humano completo.',
        { ir: { t: 'Ver «Sanidad en la expiación» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/8' } },
        { ejercicio: {
          pregunta: '¿Qué recurso gramatical usa Isaías 53:5 para enseñar la sustitución?',
          opciones: [
            { t: 'Alterna los sufijos de «nosotros» con los de «él»: lo nuestro cae sobre él y lo suyo llega a nosotros.', ok: true, por_que: 'Los sufijos ־ֵנוּ y ־וֹ, ־ָיו, y el pronombre enfático הוּא, construyen el intercambio.' },
            { t: 'Usa solo verbos en imperativo.', ok: false, por_que: 'No hay imperativos: hay participios pasivos y un nifal perfecto.' },
            { t: 'Repite tres veces la palabra «santo».', ok: false, por_que: 'Esa repetición está en Isaías 6:3, no aquí.' }
          ],
          explicacion: 'Los sufijos pronominales muestran el intercambio: nuestras rebeliones sobre él, su paz para nosotros.'
        } }
      ],
      pensar: '«Mas él herido fue por nuestras rebeliones» (Is 53:5). Lee el versículo poniendo tu nombre en cada «nuestro». ¿Qué te dice?'
    },
    {
      id: 'derramare', n: 'Joel 2:28: «Derramaré mi Espíritu»', ref: 'Joel 2:28-29; Hechos 2:16-18',
      visual: [
        { tipo: 'hebreo', titulo: 'Joel 2:28', ref: 'Joel 2:28', he: '@@wlc:jl/3/1', tr: 'Vehayá ajaré-jen eshpoj et-rují al-kol-basar, venibeú bnejem uvnotejem, ziknejem jalomot yajalomun, bajurejem jezyonot yiru.',
          palabras: P('@@wlcp:jl/3/1', [['vehayá', 'y será (acontecerá)'], ['ajaré-jen', 'después de esto'], ['eshpoj', 'derramaré'], ['et-rují', '(objeto) mi Espíritu'], ['al-kol-basar', 'sobre toda carne'], ['venibeú', 'y profetizarán'], ['bnejem', 'vuestros hijos'], ['uvnotejem', 'y vuestras hijas'], ['ziknejem', 'vuestros ancianos'], ['jalomot', 'sueños'], ['yajalomun', 'soñarán'], ['bajurejem', 'vuestros jóvenes'], ['jezyonot', 'visiones'], ['yiru', 'verán']]),
          rv: '@@jl/2/28' },
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Las formas clave',
          cab: ['Palabra', 'Análisis', 'Ruta'],
          filas: [
            ['וְהָיָה', 'Qal perfecto de הָיָה con vav consecutiva (weqatal): «y acontecerá»', 'III.4'],
            ['אֶשְׁפּוֹךְ', 'Qal imperfecto 1.ª sg. de שָׁפַךְ: «derramaré»', 'III.3'],
            ['אֶת־רוּחִי', 'Marca del objeto + רוּחַ con «mi»: «mi Espíritu»', 'II.5 y IV.6'],
            ['עַל־כָּל־בָּשָׂר', 'עַל + constructo de כֹּל + בָּשָׂר: «sobre toda carne», sobre todo ser humano', 'II.7'],
            ['וְנִבְּאוּ', 'Nifal perfecto 3.ª pl. de נָבָא con vav consecutiva: «y profetizarán»', 'III.4 y III.9'],
            ['בְּנֵיכֶם וּבְנוֹתֵיכֶם', 'Plurales con «vuestros, vuestras»: «vuestros hijos y vuestras hijas»', 'II.1 y II.9'],
            ['חֲלֹמוֹת יַחֲלֹמוּן', 'Sustantivo + verbo de la misma raíz: «soñarán sueños»', 'III.7'],
          ],
          nota: 'En la Biblia hebrea este versículo es el primero del capítulo 3 de Joel: el hebreo divide Joel en cuatro capítulos y la Reina-Valera en tres.'
        } }
      ],
      texto: [
        'El último pasaje del taller es la promesa que Pedro citó el día de Pentecostés: «Esto es lo dicho por el profeta Joel» (Hch 2:16). Para la iglesia pentecostal es un texto fundamental, y su gramática ayuda a leerlo con precisión.',
        { h: 'Una numeración distinta' },
        'Antes de empezar, fíjate en la referencia. En la Reina-Valera, este versículo es Joel 2:28. En la Biblia hebrea es el primer versículo del capítulo 3, porque el hebreo divide el libro en cuatro capítulos y nuestras Biblias en tres. No es un error de nadie: es una división distinta, que se hizo siglos después de que el libro se escribió. Si buscas este versículo en una Biblia hebrea, en un interlineal o en un comentario técnico, lo encontrarás como el capítulo 3, versículo 1. (Por eso aquí no lo escribimos con la forma de una referencia: la burbuja te mostraría otro versículo de la Reina-Valera.) Lo mismo pasa con varios salmos y con otros pasajes, como viste con el Salmo 19 e Isaías 9.',
        { h: 'Promesa del futuro' },
        'La promesa empieza con וְהָיָה, un weqatal: «y acontecerá». El verbo principal, אֶשְׁפּוֹךְ, es un imperfecto de primera persona de שָׁפַךְ, «derramar», el verbo que se usa para el agua o la sangre que se vierten en abundancia. Dios no promete unas gotas, sino un derramamiento. Su objeto, marcado con אֶת, es רוּחִי, «mi Espíritu», con el sufijo «mi».',
        'עַל־כָּל־בָּשָׂר, «sobre toda carne», es una cadena constructa que en el Antiguo Testamento designa a todos los seres humanos. Los sufijos ־כֶם, «vuestros», enumeran a quiénes alcanza: hijos e hijas, ancianos y jóvenes, y en el versículo siguiente, siervos y siervas (Jl 2:29). Ni el sexo, ni la edad, ni la condición social quedan fuera.',
        { h: 'Profetizarán' },
        'וְנִבְּאוּ, «y profetizarán», es un nifal de נָבָא con vav consecutiva, la raíz de נָבִיא, «profeta». En el Antiguo Testamento, el Espíritu venía sobre algunos: profetas, jueces, reyes. Moisés había deseado: «Ojalá todo el pueblo de Jehová fuese profeta» (Nm 11:29). Joel anuncia que ese deseo se cumplirá.',
        'Pedro lo vio cumplido en Pentecostés y dijo que la promesa es «para vosotros… y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). El derramamiento que comenzó en Jerusalén sigue alcanzando hoy a quienes lo piden.',
        { ir: { t: 'Ver «La promesa del derramamiento» en El Espíritu Santo', a: '../../espiritu-santo/#at/5' } },
        { ejercicio: {
          pregunta: '¿Por qué una Biblia hebrea pone este versículo en el capítulo 3 de Joel, y no en el 2?',
          opciones: [
            { t: 'Porque la Reina-Valera agregó versículos.', ok: false, por_que: 'El texto es el mismo. Solo cambia dónde empieza cada capítulo.' },
            { t: 'Porque la división en capítulos es distinta: el hebreo divide Joel en cuatro capítulos y la Reina-Valera en tres.', ok: true, por_que: 'Las divisiones en capítulos se hicieron mucho después y no siempre coinciden entre las tradiciones.' },
            { t: 'Porque en la Biblia hebrea es otra profecía distinta.', ok: false, por_que: 'Es el mismo versículo, con otra numeración.' }
          ],
          explicacion: 'Joel 2:28 en la Reina-Valera es el capítulo 3, versículo 1, en la Biblia hebrea. El texto no cambia; cambia la división.'
        } }
      ],
      pensar: 'Dios prometió derramar su Espíritu sobre hijos e hijas, ancianos y jóvenes (Jl 2:28). ¿Has pedido tú esa promesa para tu vida? ¿Por quién de tu familia podrías orar para que la reciba?'
    },
    {
      id: 'seguir', n: 'Cómo seguir', ref: 'Salmo 119:97; 2 Timoteo 3:16-17',
      visual: [
        { tipo: 'hebreo', titulo: 'Salmo 119:97', ref: 'Salmo 119:97', he: '@@wlc:sal/119/97', tr: 'Ma-ahavti torateja! Kol-hayom hi sijatí.',
          palabras: P('@@wlcp:sal/119/97', [['ma-ahavti', '¡cuánto amo!'], ['torateja', 'tu ley'], ['kol-hayom', 'todo el día'], ['hi', 'ella (es)'], ['sijatí', 'mi meditación']]),
          rv: '@@sal/119/97' },
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Herramientas para seguir',
          cab: ['Herramienta', 'Para qué sirve'],
          filas: [
            ['El vocabulario de este recurso', 'Una lección de 25 palabras por semana, hasta las 751'],
            ['Interlineal hebreo–español', 'Recurso siguiente del sitio, en preparación: cada palabra hebrea con su análisis y su traducción'],
            ['Concordancia con números de Strong', 'Encontrar todas las veces que aparece una palabra hebrea'],
            ['Un diccionario de hebreo bíblico', 'Ver todos los sentidos de una palabra; en español, el de Luis Alonso Schökel'],
            ['Una Biblia hebrea', 'Leer el texto masorético; la edición de estudio más usada es la Biblia Hebraica Stuttgartensia'],
          ],
          nota: 'Repasa cada semana una estación de este recurso mientras avanzas en el vocabulario.'
        } }
      ],
      texto: [
        'Has llegado al final del recurso. Empezaste con cuatro palabras del Salmo 119:18 que no podías explicar, y ahora puedes analizar un versículo como el Salmo 119:97 casi por tu cuenta.',
        { h: 'Un último análisis' },
        'Inténtalo. מָה־אָהַבְתִּי: el interrogativo מָה, que en las exclamaciones significa «¡cuánto!», y un perfecto qal de primera persona de אָהַב, «amar», que con verbos de sentimiento se traduce en presente: «¡cuánto amo!». תוֹרָתֶךָ: תּוֹרָה con el sufijo «tu». כָּל־הַיּוֹם: constructo de כֹּל con el artículo, «todo el día». הִיא: el pronombre «ella», sujeto de una oración nominal. Y שִׂיחָתִי: un sustantivo femenino con el sufijo «mi», «mi meditación». «¡Oh, cuánto amo yo tu ley! Todo el día es ella mi meditación».',
        { h: 'Lo que viene' },
        'El paso siguiente en el sitio es el Interlineal hebreo–español, que pondrá cada palabra del texto hebreo junto a su análisis y su traducción. Con lo que aprendiste aquí podrás entender lo que el interlineal te muestra y usarlo con criterio. Mientras tanto, sigue con el vocabulario: una lección por semana, en voz alta, con la práctica.',
        { ir: { t: 'Abrir el vocabulario', a: 'vocabulario/' } },
        { h: 'El propósito' },
        'Recuerda por qué empezaste. El hebreo no es un fin en sí mismo ni un adorno para la predicación. Es una ayuda para escuchar con más atención lo que Dios dijo. «Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra» (2 Ti 3:16-17). Que el estudio te lleve a amar la Palabra, como el salmista, y a vivirla.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } },
        { ejercicio: {
          pregunta: 'En מָה־אָהַבְתִּי, ¿por qué el perfecto אָהַבְתִּי se traduce en presente, «amo»?',
          opciones: [
            { t: 'Porque con verbos de sentimiento o de conocimiento el perfecto expresa un estado presente.', ok: true, por_que: 'Como יָדַעְתִּי, «sé», el perfecto de אָהַב presenta un amor ya establecido que sigue vigente.' },
            { t: 'Porque el perfecto siempre es presente.', ok: false, por_que: 'El perfecto suele traducirse en pasado. Con algunos verbos de estado se traduce en presente.' },
            { t: 'Porque la מָה lo convierte en futuro.', ok: false, por_que: 'מָה es «¡cuánto!» en la exclamación; no cambia el aspecto del verbo.' }
          ],
          explicacion: 'Perfecto de un verbo de estado: el estado ya existe y sigue. «¡Cuánto amo!».'
        } }
      ],
      pensar: '«¡Oh, cuánto amo yo tu ley! Todo el día es ella mi meditación» (Sal 119:97). ¿Qué paso concreto vas a dar este mes para que la Palabra sea tu meditación de cada día?'
    }
  ];

  const G = window.__GRAM;
  delete window.__GRAM;
  window.RUTA_DATA = {
    titulo: 'Vocabulario y gramática básica del hebreo bíblico',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0); frecuencias y números de Strong de la morfología y el léxico de Open Scriptures.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Vocabulario y gramática', n: 'I. Panorama', info: 'Cómo funciona el hebreo: raíces, clases de palabras, orden y frecuencia', estaciones: G.panorama },
      { id: 'sustantivo', grupo: 'Vocabulario y gramática', n: 'II. El sustantivo y sus compañeros', info: 'Género y número, artículo, preposiciones, adjetivo, constructo, pronombres, sufijos y números', estaciones: G.sustantivo },
      { id: 'verbo', grupo: 'Vocabulario y gramática', n: 'III. El verbo', info: 'Perfecto (qatal), imperfecto (yiqtol), vav consecutiva, mandatos, participio, infinitivo y los siete binyanim', estaciones: G.verbo },
      { id: 'palabras', grupo: 'Vocabulario y gramática', n: 'IV. Palabras clave de la fe', info: 'Diez palabras hebreas estudiadas sin caer en los errores comunes', estaciones: G.palabras },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Seis pasajes famosos, forma por forma', estaciones: taller }
    ]
  };
})();
