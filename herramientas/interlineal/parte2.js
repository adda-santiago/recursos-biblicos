/* ==========================================================
   Interlineal hebreo–español (AT) · contenido (parte 2: rutas III, IV, taller y RUTA_DATA)
   ========================================================== */
(() => {
  const I = window.__INT;
  const V = I.V;

  const errores = [
    {
      id: 'glosa', n: 'La glosa no es «el verdadero significado»', ref: 'Génesis 1:2; Juan 3:8',
      visual: [
        I.GN12 && V(I.GN12),
        { tipo: 'tabla', titulo: 'Una palabra, varios sentidos', tabla: {
          titulo: 'רוּחַ en el Antiguo Testamento',
          cab: ['Pasaje', 'Sentido en el contexto', 'RV 1960'],
          filas: [
            ['Génesis 1:2', 'el Espíritu de Dios', 'Espíritu'],
            ['Génesis 8:1', 'el aire en movimiento', 'viento'],
            ['Génesis 6:17', 'el aliento de vida', 'espíritu de vida'],
            ['1 Samuel 1:15', 'el ánimo, el estado interior', 'espíritu'],
            ['Isaías 11:2', 'el Espíritu de Jehová', 'Espíritu']
          ],
          nota: 'La glosa del interlineal es siempre «espíritu». El contexto dice cuál de estos sentidos tiene en cada versículo.'
        } }
      ].filter(Boolean),
      texto: [
        'El error más común al usar un interlineal es tomar la glosa como si fuera el significado exacto de la palabra en ese versículo. La glosa es una etiqueta para reconocer la palabra: su sentido básico. El sentido en cada pasaje lo da el contexto.',
        { h: 'Un ejemplo: רוּחַ' },
        'La palabra רוּחַ aparece unas 380 veces en el Antiguo Testamento. Su glosa en el interlineal es «espíritu». Pero, como muestra la tabla, puede ser el viento, el aliento, el ánimo de una persona o el Espíritu de Dios. Si alguien leyera Génesis 8:1 en el interlineal y concluyera que Dios hizo pasar «un espíritu» sobre la tierra para secar las aguas, se equivocaría: el contexto habla del viento que seca las aguas del diluvio. La Reina-Valera traduce «viento», y está bien.',
        'Jesús juega con esa misma amplitud en griego cuando dice a Nicodemo que el viento sopla de donde quiere, y así es todo aquel que es nacido del Espíritu (Jn 3:8). Las palabras con varios sentidos no son un problema: son parte de la riqueza de la lengua. El problema aparece cuando se elige un sentido sin mirar el contexto.',
        { h: 'Cómo evitarlo' },
        'Antes de sacar una conclusión de una glosa, lee la Reina-Valera y el pasaje completo. Si quieres saber qué sentidos tiene una palabra, mira cómo se traduce en otros versículos: la ficha te da el número de Strong y cuántas veces aparece, y un diccionario o una concordancia te muestran todos los usos.',
        { ejercicio: {
          pregunta: 'En un versículo, la glosa de una palabra es «alma», y la Reina-Valera traduce «vida». ¿Qué concluyes?',
          opciones: [
            { t: 'Que la palabra tiene varios sentidos y el traductor eligió el que exige ese contexto.', ok: true, por_que: 'Es lo que pasa con נֶפֶשׁ, que puede ser alma, vida, persona o deseo.' },
            { t: 'Que la Reina-Valera se equivocó.', ok: false, por_que: 'La glosa no es el sentido en cada versículo; la traducción mira el contexto.' },
            { t: 'Que el versículo enseña algo distinto de lo que dice la traducción.', ok: false, por_que: 'Una glosa por sí sola no puede corregir una traducción hecha con todo el contexto.' }
          ],
          explicacion: 'La glosa ayuda a reconocer; el contexto decide el sentido.'
        } }
      ],
      pensar: '«El viento sopla de donde quiere… así es todo aquel que es nacido del Espíritu» (Jn 3:8). ¿Qué señales de la obra del Espíritu ves hoy en tu vida, aunque no puedas verlo a él?'
    },
    {
      id: 'etimologia', n: 'La falacia etimológica', ref: 'Génesis 1:1',
      visual: [ V(I.GN11) ],
      texto: [
        'Un segundo error es buscar el significado de una palabra en su origen, en su raíz o en las palabras que la forman, en lugar de mirar cómo se usaba en la época del texto. Se llama falacia etimológica. Es tan antigua como el estudio de las palabras, y abunda en las prédicas que dicen «en el hebreo original, esta palabra significa…».',
        { h: 'Un ejemplo en español' },
        'La palabra española «salario» viene del latín de la sal. Nadie diría que quien cobra su salario recibe sal. El origen de una palabra es interesante, pero el significado lo da el uso. Con el hebreo pasa lo mismo, aunque la distancia nos haga olvidarlo.',
        { h: 'Un ejemplo bíblico: בָּרָא' },
        'El verbo בָּרָא, «crear», tiene como sujeto solo a Dios en todo el Antiguo Testamento. Eso es un dato del uso, y es importante. Pero a veces se oye que בָּרָא «significa crear de la nada» porque así lo dirían sus letras o su raíz. El verbo en sí no lo dice: en Génesis 1:27, Dios «creó» al hombre, y Génesis 2:7 cuenta que lo formó del polvo. La doctrina de la creación de la nada es verdadera, pero se apoya en la enseñanza de toda la Escritura (He 11:3; Ro 4:17), no en la etimología de una palabra.',
        { h: 'Las letras con significado secreto' },
        'Una forma extrema de esta falacia es dar un significado a cada letra hebrea (que la א sería «buey» y por eso «fuerza», y así con todas) y leer mensajes ocultos en las palabras. Es atractivo, pero no es cómo funciona ninguna lengua. Ningún israelita leía así su Biblia. El vocabulario del sitio advierte contra esto en su ruta de palabras clave.',
        { ir: { t: 'Ver «Cómo estudiar una palabra» en Vocabulario y gramática', a: '../../gramatica-hebrea/#palabras/1' } },
        { ejercicio: {
          pregunta: '¿Cuál es la mejor manera de saber qué significa una palabra hebrea en un versículo?',
          opciones: [
            { t: 'Mirar el contexto y cómo se usa la palabra en otros pasajes.', ok: true, por_que: 'El significado lo da el uso, y el contexto elige entre los sentidos posibles.' },
            { t: 'Buscar el significado de cada una de sus letras.', ok: false, por_que: 'Las letras no tienen significado propio en una palabra; eso no es cómo funciona el hebreo.' },
            { t: 'Buscar el significado original de su raíz.', ok: false, por_que: 'La raíz ayuda a relacionar palabras, pero el sentido lo da el uso.' }
          ],
          explicacion: 'Uso y contexto, no origen.'
        } }
      ],
      pensar: '«Por la fe entendemos haber sido constituido el universo por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía» (He 11:3). ¿Por qué es mejor apoyar una doctrina en toda la Escritura que en una sola palabra?'
    },
    {
      id: 'totalidad', n: 'Todos los sentidos a la vez', ref: 'Deuteronomio 6:5',
      visual: [ { tipo: 'hebreo', titulo: 'Deuteronomio 6:5 en el interlineal', ref: 'Deuteronomio 6:5', he: '@@wlc:dt/6/5', tr: '@@inttr:dt/6/5', palabras: '@@int:dt/6/5', rv: '@@dt/6/5' } ],
      texto: [
        'El tercer error es el contrario del primero: cargar en un versículo todos los sentidos que una palabra tiene en el diccionario. Se oye así: «esta palabra significa alma, vida, deseo, garganta y persona; así que aquí significa todo eso». Los estudiosos lo llaman transferencia ilegítima de la totalidad. Una palabra, en un lugar, dice normalmente una cosa.',
        { h: 'Un ejemplo: נֶפֶשׁ' },
        'En Deuteronomio 6:5, Israel debe amar a Dios «de todo tu corazón, y de toda tu alma, y con todas tus fuerzas». La palabra para «alma» es נֶפֶשׁ, que en otros pasajes es «vida», «persona», «deseo» o incluso «garganta». En este versículo no significa «garganta», aunque el diccionario lo registre. Significa el ser entero, la vida misma, como enseña el paralelo con «corazón» y «fuerzas».',
        { h: 'Un detalle del interlineal' },
        'Mira la última palabra del versículo. El interlineal glosa מְאֹדֶךָ como «tu fuerza». Esa palabra casi siempre es un adverbio, «muy», y su glosa en el vocabulario es «muy». Aquí, con un sufijo, funciona como sustantivo: «tu mucho», «todo lo que eres y tienes». La Reina-Valera traduce «todas tus fuerzas». Es un caso en que el interlineal hace una excepción y lo advierte la ficha, porque la glosa básica no se entendería.',
        { ejercicio: {
          pregunta: 'Alguien dice que en Deuteronomio 6:5 נֶפֶשׁ significa a la vez alma, vida, deseo, garganta y persona. ¿Qué error comete?',
          opciones: [
            { t: 'Carga todos los sentidos del diccionario en un solo versículo.', ok: true, por_que: 'Es la transferencia ilegítima de la totalidad: en cada lugar la palabra dice lo que el contexto pide.' },
            { t: 'La falacia etimológica.', ok: false, por_que: 'No busca el origen de la palabra, sino que suma todos sus usos.' },
            { t: 'Ninguno: en hebreo las palabras significan todo a la vez.', ok: false, por_que: 'Ninguna lengua funciona así, tampoco el hebreo.' }
          ],
          explicacion: 'Un sentido por contexto. Los demás sentidos están en otros versículos.'
        } }
      ],
      pensar: '«Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas» (Dt 6:5). Jesús lo llamó el primero y grande mandamiento (Mt 22:37-38). ¿Qué parte de tu vida todavía no has entregado a ese amor?'
    },
    {
      id: 'orden', n: 'Forzar el orden hebreo', ref: 'Génesis 1:3; Salmo 23:1',
      visual: [ V(I.GN13), V(I.SAL231) ],
      texto: [
        'Un interlineal muestra las palabras en el orden del hebreo. Algunos lectores concluyen que ese orden es «el verdadero» y que las traducciones lo cambian sin razón, o que el orden hebreo encierra un énfasis que debe trasladarse al español. A veces es así, pero la mayoría de las veces no.',
        { h: 'El orden normal del hebreo' },
        'En la prosa hebrea, el orden normal es verbo, sujeto, objeto: «y dijo Dios». En español el orden normal es sujeto, verbo, objeto: «Dios dijo». Cuando la Reina-Valera traduce «Y dijo Dios», conserva el orden hebreo porque en español también se puede decir así; otras veces lo cambia porque en español sonaría extraño. No pierde nada, porque en hebreo ese orden no tenía un énfasis especial: era la manera normal de contar.',
        { h: 'Cuando el orden sí dice algo' },
        'El énfasis aparece cuando el hebreo se aparta de su orden normal. En el Salmo 23:1, la oración no tiene verbo: «Jehová, mi pastor». El nombre de Dios va primero y la frase lo pone en el centro. En Génesis 1:1, el complemento de tiempo, «en el principio», va antes del verbo y abre toda la Biblia. Para notar estos casos hay que conocer primero el orden normal, y eso se aprende leyendo mucho.',
        { h: 'Una regla práctica' },
        'No busques un mensaje en el orden de cada versículo. Si un comentario serio señala un énfasis por el orden de las palabras, el interlineal te permite verlo con tus ojos. Si nadie lo señala, lo más probable es que el orden sea el normal.',
        { ejercicio: {
          pregunta: 'En el interlineal, Génesis 1:3 dice «y decir · Dios». ¿Qué conclusión es correcta?',
          opciones: [
            { t: 'Es el orden normal del relato hebreo, verbo y sujeto, sin énfasis especial.', ok: true, por_que: 'Así empiezan cientos de frases en la narración hebrea.' },
            { t: 'El hebreo pone el verbo primero para enfatizar que Dios habla.', ok: false, por_que: 'Es el orden normal; el énfasis estaría en una alteración de ese orden.' },
            { t: 'La traducción debe decir «decir Dios».', ok: false, por_que: 'Eso no es español; la traducción usa la forma y el orden del español.' }
          ],
          explicacion: 'Primero hay que conocer el orden normal; solo así se nota cuando cambia.'
        } }
      ],
      pensar: 'En el Salmo 23, David empieza por Dios y después habla de sí mismo. ¿En tus oraciones empiezas por Dios o por tus necesidades? ¿Qué cambiaría si siguieras el orden de David?'
    },
    {
      id: 'en-el-hebreo', n: '«En el hebreo dice…»', ref: 'Isaías 7:14',
      visual: [ { tipo: 'hebreo', titulo: 'Isaías 7:14 en el interlineal', ref: 'Isaías 7:14', he: '@@wlc:is/7/14', tr: '@@inttr:is/7/14', palabras: '@@int:is/7/14', rv: '@@is/7/14' } ],
      texto: [
        'Con un interlineal en la mano, es fácil sentir que uno puede corregir a todas las traducciones. Hay que tener cuidado: las traducciones las hicieron equipos que dedicaron años al hebreo. Si alguien encuentra en el interlineal un sentido que ninguna traducción reconocida da, lo más probable es que el error esté en la lectura, no en las traducciones.',
        { h: 'Un caso conocido: עַלְמָה' },
        'En Isaías 7:14, la Reina-Valera traduce «la virgen concebirá». La palabra hebrea es עַלְמָה, que el interlineal glosa «doncella»: una joven en edad de casarse. Algunos argumentan que, si Isaías hubiera querido decir «virgen», habría usado בְּתוּלָה, y que por eso el versículo no habla de un nacimiento virginal. Otros responden que עַלְמָה nunca se usa en el Antiguo Testamento para una mujer casada, y que en esa cultura una doncella era una virgen.',
        { posturas: {
          titulo: '¿«Doncella» o «virgen» en Isaías 7:14?',
          a: { n: 'Profecía del nacimiento virginal', t: 'עַלְמָה designa a una joven soltera, que en Israel se entendía virgen. La traducción griega de los judíos, siglos antes de Cristo, puso παρθένος, «virgen», y Mateo 1:22-23 cita ese texto y dice que se cumplió en Jesús. La señal tiene un cumplimiento pleno en el Mesías, Emanuel, «Dios con nosotros».' },
          b: { n: 'Solo una joven de la época de Isaías', t: 'עַלְמָה significa solo «joven», sin decir nada sobre su virginidad; la señal se refiere a un niño nacido en tiempos del rey Acaz.' },
          c: 'Las dos posturas parten de la misma palabra; las separa la manera de leer el contexto y el Nuevo Testamento. Este sitio sigue la primera, junto con la Reina-Valera y la fe de la iglesia, porque Mateo la cita con autoridad. Aun quien piense que la profecía tuvo un primer cumplimiento en tiempos de Acaz puede reconocer su cumplimiento pleno en Cristo.'
        } },
        { h: 'Lo que enseña este caso' },
        'El interlineal muestra la palabra; no decide sola la interpretación. Para entender un pasaje discutido hay que leer el contexto, ver cómo se usa la palabra en otros lugares y escuchar al resto de la Escritura, que para un cristiano incluye cómo el Nuevo Testamento lee el Antiguo.'
      ],
      pensar: '«He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros» (Mt 1:23). ¿Qué significa para ti hoy que Dios esté contigo en Cristo?'
    },
    {
      id: 'elohim', n: 'Formas que engañan: el plural de אֱלֹהִים', ref: 'Génesis 1:1, 26; Deuteronomio 6:4',
      visual: [
        { tipo: 'hebreo', titulo: 'Deuteronomio 6:4 en el interlineal', ref: 'Deuteronomio 6:4', he: '@@wlc:dt/6/4', tr: '@@inttr:dt/6/4', palabras: '@@int:dt/6/4', rv: '@@dt/6/4' },
        { tipo: 'tabla', titulo: 'Un plural con verbo singular', tabla: {
          titulo: 'אֱלֹהִים en la morfología',
          cab: ['Palabra', 'Morfología', 'Concordancia'],
          filas: [
            ['בָּרָא', 'qal perf. 3ms', 'el verbo está en singular'],
            ['אֱלֹהִים', 'sust. mp', 'el sustantivo está en plural'],
            ['אֱלֹהִים אֲחֵרִים (Éx 20:3)', 'sust. mp + adj. mp', 'aquí sí es plural: «dioses ajenos»']
          ],
          nota: 'El interlineal glosa אֱלֹהִים siempre como «Dios»; la morfología muestra que la forma es plural.'
        } }
      ],
      texto: [
        'La fila de morfología a veces muestra datos que sorprenden. El caso más conocido es אֱלֹהִים, la palabra más común para «Dios». Su forma es plural, pero cuando se refiere al Dios de Israel lleva el verbo en singular: בָּרָא אֱלֹהִים, «creó Dios», no «crearon dioses». El interlineal la glosa siempre «Dios», y la morfología dice «sust. mp».',
        { h: 'Qué dice el plural' },
        'Los gramáticos lo llaman plural de majestad o de plenitud: una forma plural para expresar grandeza. El hebreo lo usa también con otras palabras, como «señor» (אֲדֹנִים) cuando habla de un solo amo. Cuando אֱלֹהִים se refiere a los dioses de las naciones, lleva verbos y adjetivos en plural, como en Éxodo 20:3, «dioses ajenos».',
        { posturas: {
          titulo: '¿El plural de אֱלֹהִים enseña la Trinidad?',
          a: { n: 'Es una pista compatible', t: 'Muchos creyentes ven en el plural, y en textos como «Hagamos al hombre» (Gn 1:26), una apertura del Antiguo Testamento que se aclara con la revelación del Hijo y del Espíritu.' },
          b: { n: 'No prueba nada por sí solo', t: 'El plural de majestad se explica por la gramática del hebreo; los judíos lo leyeron siempre junto con «Jehová uno es» (Dt 6:4).' },
          c: 'Las dos observaciones son compatibles. La doctrina de la Trinidad se apoya en todo el testimonio de la Escritura, en especial del Nuevo Testamento, como enseña el recurso Dios y la Trinidad; el plural de אֱלֹהִים armoniza con ella, pero no hace falta cargar sobre él todo el peso.'
        } },
        { ir: { t: 'Ver Dios y la Trinidad', a: '../../dios-y-la-trinidad/' } },
        { ejercicio: {
          pregunta: 'La morfología dice que אֱלֹהִים es plural, pero el verbo está en singular. ¿Cómo se traduce Génesis 1:1?',
          opciones: [
            { t: '«creó Dios», porque el verbo singular muestra que se habla de un solo Dios.', ok: true, por_que: 'La concordancia con el verbo decide la traducción.' },
            { t: '«crearon los dioses», porque la palabra es plural.', ok: false, por_que: 'El verbo singular no lo permite.' },
            { t: 'No se puede saber.', ok: false, por_que: 'La gramática lo deja claro: el verbo singular concuerda con un solo sujeto.' }
          ],
          explicacion: 'Forma plural, sentido singular: la concordancia lo muestra.'
        } }
      ],
      pensar: '«Oye, Israel: Jehová nuestro Dios, Jehová uno es» (Dt 6:4). ¿Cómo vives la verdad de que hay un solo Dios cuando tantas cosas compiten por tu confianza?'
    }
  ];

  const traduccion = [
    {
      id: 'comparar', n: 'Comparar con la Reina-Valera', ref: 'Rut 1:16',
      visual: [ { tipo: 'hebreo', titulo: 'Rut 1:16 en el interlineal', ref: 'Rut 1:16', he: '@@wlc:rt/1/16', tr: '@@inttr:rt/1/16', palabras: '@@int:rt/1/16', rv: '@@rt/1/16' } ],
      texto: [
        'El paso final del interlineal es volver a la traducción. Leer una línea de glosas y después la Reina-Valera te muestra qué decisiones tomó el traductor, y casi siempre te hará valorar mejor su trabajo.',
        { h: 'Lo que la traducción agrega' },
        'Mira Rut 1:16. Las glosas dicen: «no · encontrar · en mí · para dejarte · para volver · de después de ti». La Reina-Valera dice: «No me ruegues que te deje, y me aparte de ti». El verbo פָּגַע tiene como glosa básica «encontrar» o «salir al encuentro»; con la preposición «en» significa «insistir», «rogar», y así lo tradujo la Reina-Valera. El traductor también convirtió «de después de ti» en «de ti», porque en español no se dice «volverse de detrás de alguien». También agregó «que» para unir las frases. Son palabras que el español necesita y el hebreo no.',
        { h: 'Lo que la traducción omite' },
        'La traducción omite lo que el español no necesita: la marca אֵת, algunas «y» del relato, el artículo cuando sobra. No omite sentido; omite palabras que en español serían ruido.',
        { h: 'Cómo comparar' },
        'Recorre la línea hebrea y busca en la traducción dónde quedó cada palabra. Marca las que la traducción no tiene y las que agrega. Pregúntate por qué. Si una decisión no te queda clara, compara con otra traducción: si coinciden, probablemente es la forma natural de decirlo en español.',
        { ejercicio: {
          pregunta: 'La traducción tiene una palabra que no está en las glosas. ¿Qué es lo más probable?',
          opciones: [
            { t: 'Que el español la necesita para expresar lo que el hebreo dice con su gramática.', ok: true, por_que: 'Un «que», un artículo o un pronombre suelen estar implícitos en la forma hebrea.' },
            { t: 'Que el traductor añadió algo a la Palabra de Dios.', ok: false, por_que: 'Expresar en español lo que el hebreo dice no es añadir a la Palabra.' },
            { t: 'Que el interlineal está incompleto.', ok: false, por_que: 'El interlineal muestra todas las palabras hebreas; la diferencia está en la gramática de cada lengua.' }
          ],
          explicacion: 'Cada lengua dice lo mismo con piezas distintas.'
        } }
      ],
      pensar: '«Tu pueblo será mi pueblo, y tu Dios mi Dios» (Rt 1:16). Rut eligió pertenecer al pueblo de Dios. ¿Qué significa para ti hoy pertenecer al pueblo de Dios?'
    },
    {
      id: 'modismos', n: 'Los modismos hebreos', ref: 'Génesis 6:8; 18:2',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 6:8 en el interlineal', ref: 'Génesis 6:8', he: '@@wlc:gn/6/8', tr: '@@inttr:gn/6/8', palabras: '@@int:gn/6/8', rv: '@@gn/6/8' },
        { tipo: 'tabla', titulo: 'Giros que se repiten', tabla: {
          titulo: 'Modismos hebreos y su traducción',
          cab: ['Palabra por palabra', 'Sentido', 'RV 1960 (ejemplo)'],
          filas: [
            ['hallar gracia en los ojos de', 'agradar, recibir favor', 'Noé halló gracia ante los ojos de Jehová (Gn 6:8)'],
            ['a rostros de', 'delante de', 'delante de Jehová'],
            ['alzar los ojos y ver', 'mirar', 'alzó sus ojos y miró (Gn 18:2)'],
            ['largo de narices', 'lento para la ira', 'tardo para la ira (Éx 34:6)'],
            ['hijo de … años', 'de … años de edad', 'era Noé de seiscientos años (Gn 7:6)'],
            ['cortar un pacto', 'hacer un pacto', 'hizo un pacto (Gn 15:18)']
          ],
          nota: 'El interlineal glosa לִפְנֵי directamente como «delante de», porque «a rostros de» no se entendería.'
        } }
      ],
      texto: [
        'Toda lengua tiene modismos: expresiones cuyo sentido no es la suma de sus palabras. En español decimos «tomar el pelo» sin hablar de pelo. El hebreo tiene los suyos, y el interlineal los muestra tal como son.',
        { h: 'Algunos ejemplos' },
        'En Génesis 6:8, Noé «halló gracia ante los ojos de Jehová». Palabra por palabra, el hebreo dice «halló gracia en los ojos de Jehová»: es la manera hebrea de decir que alguien recibe el favor de otro. La Reina-Valera conserva el giro porque se entiende. Otras veces lo cambia: «largo de narices» es la expresión hebrea para «paciente», porque la nariz que se enciende es la imagen de la ira; la Reina-Valera traduce «tardo para la ira» (Éx 34:6).',
        'Un modismo muy frecuente es לִפְנֵי, literalmente «a la faz de», que significa «delante de». Aparece más de mil veces. El interlineal lo glosa directamente «delante de», porque la glosa palabra por palabra confundiría.',
        { h: 'Para qué sirve conocerlos' },
        'Conocer los modismos evita dos errores: leer literalmente lo que es una figura, y creer que la traducción «cambió» el texto cuando solo dijo en español lo que el hebreo dice con su giro. También enriquece la lectura: «halló gracia en los ojos de Jehová» pinta la mirada favorable de Dios sobre Noé.',
        { ejercicio: {
          pregunta: 'En el interlineal ves «largo de narices» en Éxodo 34:6. ¿Qué significa?',
          opciones: [
            { t: 'Lento para enojarse, paciente.', ok: true, por_que: 'Es un modismo: la nariz encendida representa la ira, y una nariz «larga» tarda en encenderse.' },
            { t: 'Que Dios tiene forma humana.', ok: false, por_que: 'Es una figura del lenguaje, no una descripción física.' },
            { t: 'Que Dios es orgulloso.', ok: false, por_que: 'El contexto habla de misericordia y paciencia.' }
          ],
          explicacion: 'Un modismo se traduce por su sentido, no palabra por palabra.'
        } }
      ],
      pensar: '«Noé halló gracia ante los ojos de Jehová» (Gn 6:8). En medio de un mundo corrompido, Noé vivió bajo la mirada favorable de Dios. ¿Qué significa para ti hallar gracia delante de Dios por medio de Cristo?'
    },
    {
      id: 'nombre', n: 'El nombre de Dios en el interlineal', ref: 'Éxodo 3:15',
      visual: [ { tipo: 'hebreo', titulo: 'Éxodo 3:15 en el interlineal', ref: 'Éxodo 3:15', he: '@@wlc:ex/3/15', tr: '@@inttr:ex/3/15', palabras: '@@int:ex/3/15', rv: '@@ex/3/15' } ],
      texto: [
        'El nombre propio de Dios en el Antiguo Testamento son cuatro consonantes: יהוה. Aparece más de 6.500 veces. En Éxodo 3:15, Dios lo da a Moisés como su nombre para siempre.',
        { h: 'Cómo se leía' },
        'Con el tiempo, por reverencia, los judíos dejaron de pronunciarlo. Al leer en voz alta decían אֲדֹנָי, Adonái, «Señor». Los masoretas pusieron en las cuatro consonantes las vocales de Adonái, para que el lector supiera qué decir. Por eso la transliteración del interlineal dice Adonái: es lo que el texto indica leer. Donde el texto ya dice «Adonái» junto al nombre, los masoretas pusieron las vocales de Elohim, y el interlineal translitera Elohím.',
        { h: 'Cómo se traduce' },
        'Las primeras traducciones españolas combinaron las consonantes del nombre con las vocales de Adonái y formaron «Jehová». La Reina-Valera usa esa forma, y el interlineal la sigue en la glosa. Otras traducciones ponen «el SEÑOR» o «Yahvé». Por eso, en el interlineal verás Adonái arriba y Jehová abajo: no es un error, son dos cosas distintas, la lectura y la traducción.',
        { posturas: {
          titulo: '¿Jehová o Yahvé?',
          a: { n: 'Jehová', t: 'Es la forma de la tradición de la Reina-Valera y de los himnos de la iglesia hispana; combina las consonantes con las vocales que el texto masorético indica.' },
          b: { n: 'Yahvé', t: 'Muchos estudiosos piensan que la pronunciación antigua era parecida a «Yahvé», por testimonios antiguos y por formas abreviadas como «Yah».' },
          c: 'La pronunciación original no se conoce con certeza. Las dos formas nombran al mismo Dios, y lo importante es lo que el nombre revela: el Dios que es, que estuvo con su pueblo y que cumple sus promesas (Éx 3:14-15).'
        } }
      ],
      pensar: '«Este es mi nombre para siempre; con él se me recordará por todos los siglos» (Éx 3:15). ¿Qué te dice del carácter de Dios que se haya dado a conocer con un nombre propio?'
    },
    {
      id: 'metodo', n: 'Un método en cinco pasos', ref: 'Josué 1:8',
      visual: [
        { tipo: 'hebreo', titulo: 'Josué 1:8 en el interlineal', ref: 'Josué 1:8', he: '@@wlc:jos/1/8', tr: '@@inttr:jos/1/8', palabras: '@@int:jos/1/8', rv: '@@jos/1/8' },
        { tipo: 'tabla', titulo: 'Los cinco pasos', tabla: {
          titulo: 'Cómo estudiar un versículo con el interlineal',
          cab: ['Paso', 'Qué haces'],
          filas: [
            ['1. Leer la traducción', 'Lee el pasaje completo en la Reina-Valera y escribe tu pregunta'],
            ['2. Leer la línea', 'Recorre el hebreo de derecha a izquierda, en voz alta, con la glosa'],
            ['3. Abrir la ficha', 'En las palabras clave, mira las piezas, la forma y el número de Strong'],
            ['4. Comparar', 'Vuelve a la traducción: qué agregó, qué omitió, qué decidió'],
            ['5. Confirmar', 'Mira otros usos de la palabra y un buen comentario antes de concluir']
          ],
          nota: 'El orden importa: se empieza y se termina en la traducción.'
        } }
      ],
      texto: [
        'Este método resume lo aprendido. Sirve para preparar un estudio bíblico, para seguir un comentario o para meditar en un versículo.',
        { h: '1 y 2. Traducción y línea' },
        'Empieza siempre por la traducción, leyendo el pasaje completo, no solo el versículo. Escribe qué quieres averiguar: ¿qué palabra está detrás de «meditar»? Después recorre la línea hebrea. En Josué 1:8, el verbo traducido «meditarás» es הָגָה, el mismo del Salmo 1:2.',
        { h: '3. La ficha' },
        'Abre la ficha de la palabra que te interesa. Verás su lema, su forma y cuántas veces aparece. Si quieres ver otros usos, anota el número de Strong y búscalo en una concordancia, o busca la palabra en el vocabulario si es una de las 751.',
        { h: '4 y 5. Comparar y confirmar' },
        'Vuelve a la traducción con lo aprendido. Antes de enseñar algo a otros, confírmalo: mira la palabra en otros pasajes, compara traducciones y consulta un comentario. Si tu conclusión no la da ninguna traducción ni ningún comentario serio, revísala de nuevo.',
        { ir: { t: 'Abrir Josué 1:8 en el interlineal', a: 'interlineal/#jos/1/8', marco: true } },
        { ejercicio: {
          pregunta: '¿Por qué el método empieza y termina en la traducción?',
          opciones: [
            { t: 'Porque el interlineal ayuda a entender el texto, pero no reemplaza la lectura del pasaje en una traducción.', ok: true, por_que: 'El contexto y el sentido completo se leen mejor en la traducción; el interlineal ilumina detalles.' },
            { t: 'Porque las traducciones siempre tienen razón y el hebreo no importa.', ok: false, por_que: 'El hebreo importa: por eso existe el interlineal. Pero se usa junto con la traducción.' },
            { t: 'Porque así es más rápido.', ok: false, por_que: 'El motivo es entender bien, no la rapidez.' }
          ],
          explicacion: 'Traducción → interlineal → traducción: del todo a la parte y de vuelta al todo.'
        } }
      ],
      pensar: '«Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él» (Jos 1:8). ¿Cómo puede el estudio cuidadoso de una palabra convertirse en meditación y obediencia, y no solo en conocimiento?'
    }
  ];

  const taller = [
    {
      id: 'gn1', n: 'Génesis 1:1, palabra por palabra', ref: 'Génesis 1:1',
      visual: [ V(I.GN11) ],
      texto: [
        'Aplica el método al primer versículo de la Biblia. Ábrelo también en la página del interlineal y toca cada palabra.',
        { ir: { t: 'Abrir Génesis 1:1 en el interlineal', a: 'interlineal/#gn/1/1', marco: true } },
        'Hay siete palabras. בְּרֵאשִׁית es la preposición «en» con el sustantivo «principio», sin artículo; la traducción agrega «el» porque en español se necesita. בָּרָא es un verbo qal en perfecto, tercera persona masculina singular: «creó». אֱלֹהִים es «Dios», plural en forma y singular en sentido, como muestra el verbo. אֵת marca el complemento directo y no se traduce. הַשָּׁמַיִם es «los cielos», con artículo; la palabra hebrea solo existe en plural. וְאֵת es «y» con la marca del complemento. הָאָרֶץ es «la tierra».',
        { h: 'Compara con la Reina-Valera' },
        'Ahora vuelve a la traducción: «En el principio creó Dios los cielos y la tierra». El orden cambió una sola vez, al poner el verbo antes del sujeto, que en español también es natural; se agregó el artículo «el» delante de «principio»; y se omitieron las dos marcas del complemento directo. Ninguna de esas decisiones cambia el sentido. La expresión «los cielos y la tierra» es un modo hebreo de decir «todo lo que existe»: los dos extremos nombran el conjunto. Con ese dato, el versículo afirma que no hay nada que Dios no haya creado.',
        { ejercicio: {
          pregunta: '¿Cuántas palabras hebreas de Génesis 1:1 no tienen una palabra correspondiente en la Reina-Valera?',
          opciones: [
            { t: 'Dos: las dos marcas אֵת del complemento directo.', ok: true, por_que: 'אֵת y la אֵת de וְאֵת no se traducen; la «y» de וְאֵת sí.' },
            { t: 'Ninguna.', ok: false, por_que: 'Las dos marcas del complemento directo no tienen equivalente en español.' },
            { t: 'Cuatro.', ok: false, por_que: 'Cuenta de nuevo: solo las marcas del complemento quedan sin palabra.' }
          ],
          explicacion: 'Lo que no se traduce como palabra, se expresa con el orden del español.'
        } }
      ],
      pensar: 'La Biblia empieza afirmando que todo lo que existe tiene un Creador. ¿Cómo cambia tu manera de cuidar la creación, tu cuerpo y tu tiempo saber que todo es de Dios (Sal 24:1)?'
    },
    {
      id: 'dt64', n: 'Deuteronomio 6:4, la Shemá', ref: 'Deuteronomio 6:4',
      visual: [ { tipo: 'hebreo', titulo: 'Deuteronomio 6:4 en el interlineal', ref: 'Deuteronomio 6:4', he: '@@wlc:dt/6/4', tr: '@@inttr:dt/6/4', palabras: '@@int:dt/6/4', rv: '@@dt/6/4' } ],
      texto: [
        'La Shemá («oye») es la confesión de fe de Israel, y Jesús la citó como el comienzo del primer mandamiento (Mr 12:29). Tiene solo seis palabras.',
        { ir: { t: 'Abrir Deuteronomio 6:4 en el interlineal', a: 'interlineal/#dt/6/4', marco: true } },
        'שְׁמַע es un imperativo: «oye». יִשְׂרָאֵל es el nombre propio. Después vienen cuatro palabras sin ningún verbo: יְהוָה, «Jehová» (se lee Adonái); אֱלֹהֵינוּ, «Dios» en constructo con el sufijo «nuestro»; otra vez יְהוָה; y אֶחָד, «uno». La oración sin verbo deja abiertas dos maneras de traducir: «Jehová nuestro Dios, Jehová uno es», como la Reina-Valera, o «Jehová es nuestro Dios, solo Jehová».',
        { h: 'Lo que dice la palabra אֶחָד' },
        'La glosa de אֶחָד es «uno», el número. Algunos maestros afirman que esta palabra significa siempre una «unidad compuesta» y otros que significa «único y solitario». Las dos afirmaciones cargan demasiado sobre una palabra: אֶחָד es simplemente «uno», y en Génesis 2:24 se usa para el hombre y la mujer que llegan a ser «una sola carne». El versículo confiesa que solo Jehová es Dios, frente a los dioses de las naciones. La plenitud de quién es ese Dios único se revela en toda la Escritura, y el Nuevo Testamento la confiesa en el Padre, el Hijo y el Espíritu Santo.',
        { ejercicio: {
          pregunta: '¿Qué dice la ficha de אֱלֹהֵינוּ?',
          opciones: [
            { t: 'Sustantivo masculino plural en constructo, con sufijo de 1.ª persona común plural: «nuestro Dios».', ok: true, por_que: 'El sufijo «nuestro» va pegado a una forma constructa.' },
            { t: 'Verbo en primera persona plural: «adoramos».', ok: false, por_que: 'No hay verbo en la frase; es un sustantivo con sufijo.' },
            { t: 'Adjetivo «uno».', ok: false, por_que: '«Uno» es la última palabra, אֶחָד.' }
          ],
          explicacion: 'Sustantivo + sufijo posesivo: «nuestro Dios».'
        } }
      ],
      pensar: 'Israel debía repetir la Shemá en la casa, en el camino, al acostarse y al levantarse (Dt 6:7). ¿Qué verdad sobre Dios necesitas repetir tú cada día?'
    },
    {
      id: 'sal23', n: 'Salmo 23:1-2', ref: 'Salmo 23:1-2',
      visual: [ V(I.SAL231), { tipo: 'hebreo', titulo: 'Salmo 23:2 en el interlineal', ref: 'Salmo 23:2', he: '@@wlc:sal/23/2', tr: '@@inttr:sal/23/2', palabras: '@@int:sal/23/2', rv: '@@sal/23/2' } ],
      texto: [
        'El Salmo 23 es uno de los pasajes más conocidos del Antiguo Testamento. En el interlineal, el versículo 1 empieza con el título, מִזְמוֹר לְדָוִד, «salmo de David». La Reina-Valera lo pone en letra pequeña, sin número; aquí coincide la numeración porque el título y la primera frase forman un solo versículo.',
        { ir: { t: 'Abrir el Salmo 23 en el interlineal', a: 'interlineal/#sal/23/1', marco: true } },
        'Busca en el versículo 1 las palabras רֹעִי, «mi pastor» (participio con sufijo), y אֶחְסָר, «me faltará» (imperfecto, primera persona). En el versículo 2, יַרְבִּיצֵנִי es un hifil, causativo, con el sufijo de objeto «me»: «me hace descansar». יְנַהֲלֵנִי es un piel con el mismo sufijo: «me pastorea», «me conduce». La glosa da el infinitivo; la ficha y la traducción completan el sentido.',
        { h: 'Una oración sin verbo' },
        'La primera frase del salmo, יְהוָה רֹעִי, no tiene verbo: «Jehová, mi pastor». El hebreo no necesita el verbo «ser» en presente, y el español sí; por eso la Reina-Valera agrega «es». Sin verbo, la frase es una afirmación sin tiempo. La segunda frase, לֹא אֶחְסָר, tiene un imperfecto, «no me faltará», que mira hacia adelante: la confianza en el pastor se proyecta al futuro. Una frase sin tiempo y otra hacia el futuro: eso es lo que la línea del interlineal te permite ver.',
        { ejercicio: {
          pregunta: 'La glosa de יַרְבִּיצֵנִי dice «recostarse a mí». ¿Qué te dice la morfología «hifil»?',
          opciones: [
            { t: 'Que es causativo: el pastor hace que la oveja se recueste.', ok: true, por_que: 'El hifil expresa causa: «me hace descansar».' },
            { t: 'Que la oveja se recuesta por sí misma.', ok: false, por_que: 'Eso sería un qal; el hifil indica que otro causa la acción.' },
            { t: 'Que es pasivo: «soy recostado».', ok: false, por_que: 'El pasivo del hifil es el hofal.' }
          ],
          explicacion: 'La forma verbal muestra al pastor que cuida activamente.'
        } }
      ],
      pensar: '«En lugares de delicados pastos me hará descansar» (Sal 23:2). El pastor hace descansar a la oveja. ¿Le permites a Dios darte descanso, o vives como si todo dependiera de ti?'
    },
    {
      id: 'is53', n: 'Isaías 53:5', ref: 'Isaías 53:5',
      visual: [ { tipo: 'hebreo', titulo: 'Isaías 53:5 en el interlineal', ref: 'Isaías 53:5', he: '@@wlc:is/53/5', tr: '@@inttr:is/53/5', palabras: '@@int:is/53/5', rv: '@@is/53/5' } ],
      texto: [
        'Isaías 53 describe al Siervo de Jehová que sufre por otros, y el Nuevo Testamento lo aplica a Cristo (1 P 2:24). El versículo 5 es el centro del capítulo.',
        { ir: { t: 'Abrir Isaías 53:5 en el interlineal', a: 'interlineal/#is/53/5', marco: true } },
        'Mira cómo el versículo une al Siervo con «nosotros»: מִפְּשָׁעֵנוּ, «por nuestras rebeliones», y מֵעֲוֺנֹתֵינוּ, «por nuestros pecados», llevan la preposición מִ y el sufijo «nuestro». La preposición, que en otros lugares es «de» o «desde», aquí expresa la causa: fue herido a causa de nuestras rebeliones. שְׁלוֹמֵנוּ es «nuestra paz»; וּבַחֲבֻרָתוֹ, «y por su llaga», con el sufijo «su (de él)»; y נִרְפָּא־לָנוּ, «fuimos curados», un nifal, pasivo, seguido de «a nosotros».',
        { h: 'Los verbos del sufrimiento' },
        'Los verbos que describen lo que sufre el Siervo están en formas pasivas: מְחֹלָל, «herido», y מְדֻכָּא, «molido», son participios de binyanim pasivos. El interlineal da su glosa básica en infinitivo, pero la morfología muestra que el Siervo no se hiere a sí mismo: recibe el golpe. El versículo pone frente a frente lo que él recibió y lo que nosotros recibimos: él fue herido y molido; a nosotros nos tocó la paz y la sanidad. Pedro lo resume diciendo que por su herida fuimos sanados (1 P 2:24).',
        { ejercicio: {
          pregunta: '¿Qué hace la preposición מִ en מִפְּשָׁעֵנוּ?',
          opciones: [
            { t: 'Indica la causa: «por nuestras rebeliones», «a causa de ellas».', ok: true, por_que: 'La glosa básica es «de», pero el contexto pide el sentido causal, y así traduce la Reina-Valera.' },
            { t: 'Indica el lugar de donde sale: «desde nuestras rebeliones».', ok: false, por_que: 'El contexto habla de la causa del sufrimiento, no de un lugar.' },
            { t: 'No significa nada.', ok: false, por_que: 'Es una preposición con sentido; aquí causal.' }
          ],
          explicacion: 'La misma glosa básica, «de», toma en el contexto el sentido de causa.'
        } }
      ],
      pensar: '«El castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados» (Is 53:5). Lee el versículo poniendo tu nombre en cada «nuestro». ¿Qué te dice de lo que Cristo hizo por ti?'
    },
    {
      id: 'jl3', n: 'Joel 2:28 (Joel 3:1 en hebreo)', ref: 'Joel 2:28',
      visual: [ { tipo: 'hebreo', titulo: 'Joel 3:1 hebreo (Joel 2:28 en la RV 1960)', ref: 'Joel 2:28', he: '@@wlc:jl/3/1', tr: '@@inttr:jl/3/1', palabras: '@@int:jl/3/1', rv: '@@jl/2/28' } ],
      texto: [
        'La promesa de Joel es la que Pedro citó el día de Pentecostés (Hch 2:16-18). En la Biblia hebrea es Joel 3:1; en la Reina-Valera, Joel 2:28. El interlineal la muestra en Joel 3 y avisa debajo cuál es el número en la Reina-Valera.',
        { ir: { t: 'Abrir Joel 3:1 en el interlineal', a: 'interlineal/#jl/3/1', marco: true } },
        'Busca אֶשְׁפּוֹךְ, «derramaré» (imperfecto, primera persona), y רוּחִי, «mi Espíritu», con el sufijo «mi». La promesa es para כָּל־בָּשָׂר, «toda carne»: no solo para profetas, reyes o sacerdotes, sino para hijos e hijas, ancianos y jóvenes. Las formas וְנִבְּאוּ, «y profetizarán», y יַחֲלֹמוּן, «soñarán», muestran a quiénes alcanza el derramamiento.',
        { ejercicio: {
          pregunta: 'Lees Joel 2:28 en una prédica y no lo encuentras en el interlineal en Joel 2. ¿Dónde está?',
          opciones: [
            { t: 'En Joel 3:1, porque la Biblia hebrea numera distinto.', ok: true, por_que: 'Joel 2:28-32 de la RV 1960 corresponde a Joel 3:1-5 en hebreo.' },
            { t: 'No está en el hebreo.', ok: false, por_que: 'Está; solo cambia el número.' },
            { t: 'En Joel 4.', ok: false, por_que: 'Joel 4 hebreo corresponde a Joel 3 de la RV 1960.' }
          ],
          explicacion: 'Mismo texto, otra numeración. La página lo avisa debajo de cada versículo.'
        } },
        { h: 'Cómo seguir' },
        'Con este recurso tienes las herramientas para leer el Antiguo Testamento de cerca: el alfabeto, el vocabulario, la gramática y el interlineal. Usa el interlineal cada vez que estudies un pasaje: una palabra por día, en voz alta, comparando siempre con la traducción.',
        { ir: { t: 'Abrir el interlineal', a: 'interlineal/', marco: true } }
      ],
      pensar: '«Derramaré mi Espíritu sobre toda carne» (Jl 2:28). Pedro dijo que esa promesa es para nosotros y para nuestros hijos (Hch 2:39). ¿Has buscado la plenitud del Espíritu que Dios prometió?'
    }
  ];

  delete window.__INT;
  window.RUTA_DATA = {
    titulo: 'Interlineal hebreo–español (AT)',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0), con su morfología; léxico de Strong de Open Scriptures (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    volver: { t: 'Volver al interlineal', a: 'interlineal/' },
    rutas: [
      { id: 'que-es', grupo: 'Interlineal', n: 'I. Qué es un interlineal', info: 'Cómo está hecho, qué puede y qué no puede hacer, y cómo usar la página', estaciones: I.queEs },
      { id: 'leer', grupo: 'Interlineal', n: 'II. Cómo leer una línea', info: 'Dirección, prefijos, sufijos, constructo, verbo, morfología, ketiv y qere', estaciones: I.leer },
      { id: 'errores', grupo: 'Interlineal', n: 'III. Errores comunes', info: 'Glosa y sentido, etimología, todos los sentidos, el orden, «en el hebreo dice»', estaciones: errores },
      { id: 'traduccion', grupo: 'Interlineal', n: 'IV. Del interlineal a la traducción', info: 'Comparar, modismos, el nombre de Dios y un método en cinco pasos', estaciones: traduccion },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes famosos con el interlineal', estaciones: taller }
    ]
  };
})();
