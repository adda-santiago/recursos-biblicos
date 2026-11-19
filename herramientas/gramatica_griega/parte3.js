/* Ruta III. El verbo (ver el encabezado de parte1.js). Cifras del Nestle 1904: 28.352 formas verbales. */
(() => {
  const { G } = window.__GG;
  const verbo = [
    {
      id: 'partes', n: 'Las partes de una forma verbal', ref: 'Juan 11:35',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-verbo.svg', alt: 'La forma ἐλύσαμεν dividida en cuatro piezas de colores: el aumento ἐ, la raíz λυ, la marca del aoristo σα y la terminación μεν; debajo, qué dice cada pieza: pasado, desatar, aoristo, nosotros', pie: 'Una forma verbal se arma con piezas.', origen: 'esquema' },
        G('Juan 11:35', 'Juan 11:35', '@@n1904:jn/11/35', '@@n1904tr:jn/11/35', '@@n1904t:jn/11/35',
          ['lloró', 'el', 'Jesús'],
          '@@jn/11/35'),
        { tipo: 'tabla', titulo: 'Lo que dice', tabla: {
          titulo: 'Lo que dice una forma verbal griega',
          cab: ['Rasgo', 'Opciones', 'Dónde se ve'],
          filas: [
            ['Persona', '1.ª, 2.ª, 3.ª', 'La terminación'],
            ['Número', 'singular, plural', 'La terminación'],
            ['Tiempo y aspecto', 'presente, imperfecto, futuro, aoristo, perfecto, pluscuamperfecto', 'El aumento, las marcas -σ-, -κ-, la reduplicación'],
            ['Voz', 'activa, media, pasiva', 'La terminación y la marca -θη-'],
            ['Modo', 'indicativo, subjuntivo, imperativo, optativo; infinitivo y participio', 'La vocal de unión y la terminación'],
          ],
          nota: 'De las 28.352 formas verbales del Nuevo Testamento, 15.619 son indicativos y 6.651 participios.'
        } }
      ],
      texto: [
        'El versículo más corto de la Reina-Valera, «Jesús lloró», tiene en griego tres palabras: ἐδάκρυσεν ὁ Ἰησοῦς. La primera es un verbo que, solo, ya dice «él lloró». En esa palabra hay cuatro piezas, y cada una informa algo.',
        { h: 'Las piezas' },
        'ἐ- es el aumento: una vocal que se pone delante de la raíz y avisa que la acción está en el pasado. δακρυ- es la raíz, que lleva el significado: «llorar», la misma de δάκρυον, «lágrima». -σ- es la marca del aoristo, el tiempo que presenta la acción como un todo. Y -εν es la terminación: tercera persona del singular, «él». Juntas: «él lloró».',
        'El esquema del panel muestra lo mismo con el verbo modelo λύω, «desatar»: ἐ-λύ-σα-μεν, «nosotros desatamos». Si cambias la terminación, cambias la persona: ἐλύσατε, «vosotros desatasteis». Si quitas el aumento y la -σα-, cambias el tiempo: λύομεν, «desatamos» en presente.',
        { h: 'Cinco preguntas en una palabra' },
        'Cada forma verbal griega responde a la vez cinco preguntas: quién (persona), cuántos (número), cómo se mira la acción (tiempo y aspecto), si el sujeto actúa o recibe la acción (voz) y si es un hecho, una posibilidad o un mandato (modo). En español repartimos esa información entre el pronombre, el verbo y a veces un auxiliar. El griego la concentra.',
        'Por eso un verbo puede tener tantas formas. No hace falta memorizarlas todas. Lo que hace falta es saber qué pieza mirar para cada pregunta. Al final de esta ruta encontrarás un método de seis preguntas para analizar cualquier verbo.',
        { h: 'Jesús lloró' },
        'El aoristo ἐδάκρυσεν presenta el llanto de Jesús ante la tumba de Lázaro como un hecho. Juan usa aquí un verbo distinto del que usa para el llanto ruidoso de María y de los judíos (κλαίω, Jn 11:33): el de Jesús es un llanto de lágrimas. Sabía que iba a resucitar a su amigo, y aun así lloró. El Hijo de Dios se hizo verdaderamente hombre y sintió el dolor de la muerte con quienes amaba.',
        { ejercicio: {
          pregunta: 'En ἐδάκρυσεν, ¿qué indica la ἐ- inicial?',
          opciones: [
            { t: 'Que el verbo está en plural.', ok: false, por_que: 'El número lo indica la terminación, -εν, que es singular.' },
            { t: 'Que la acción está en el pasado: es el aumento.', ok: true, por_que: 'El aumento se usa en los tiempos pasados del indicativo: imperfecto, aoristo y pluscuamperfecto.' },
            { t: 'Que es una pregunta.', ok: false, por_que: 'En griego la pregunta se marca con el signo ; al final, no con una letra del verbo.' }
          ],
          explicacion: 'Aumento (pasado), raíz (significado), marca de tiempo y terminación (persona y número): las piezas de la forma verbal.'
        } }
      ],
      pensar: 'Jesús lloró aunque sabía que iba a resucitar a Lázaro. ¿Qué te dice eso de cómo te acompaña él en tus pérdidas?'
    },
    {
      id: 'aspecto', n: 'El aspecto: cómo mira la acción', ref: 'Mateo 7:7',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-aspecto.svg', alt: 'Tres maneras de mirar una acción: el aoristo la ve completa desde fuera, como un punto o una foto; el presente y el imperfecto la ven desde dentro, en desarrollo, como una línea o un video; el perfecto ve una acción terminada cuyo resultado sigue, como un punto del que sale una línea', pie: 'El aspecto no dice cuándo, sino cómo se mira la acción.', origen: 'esquema' },
        G('Mateo 7:7', 'Mateo 7:7', '@@n1904:mt/7/7', '@@n1904tr:mt/7/7', '@@n1904t:mt/7/7',
          ['pedid', 'y', 'será dado', 'a vosotros', 'buscad', 'y', 'hallaréis', 'llamad', 'y', 'será abierto', 'a vosotros'],
          '@@mt/7/7')
      ],
      texto: [
        'En español los tiempos del verbo dicen sobre todo cuándo ocurre la acción: «amé», «amo», «amaré». En griego los tiempos dicen además algo que el español marca menos: cómo se mira la acción. Eso se llama aspecto.',
        { h: 'Tres aspectos' },
        'El aoristo mira la acción completa, desde fuera, como una foto: «lloró», «vino», «amó». No dice si duró un instante o años; solo la presenta como un todo. El presente y el imperfecto miran la acción desde dentro, en desarrollo, como un video: «está llorando», «venía», «amaba». El perfecto mira una acción terminada cuyo resultado sigue vigente: γέγραπται, «está escrito», porque se escribió y sigue escrito.',
        'En el indicativo, el aumento añade el tiempo pasado: el imperfecto es un presente en el pasado, y el aoristo indicativo es casi siempre un pasado. Pero fuera del indicativo, en los mandatos, los subjuntivos, los infinitivos y los participios, el aoristo y el presente casi no indican tiempo: indican aspecto.',
        { h: 'Pedid, buscad, llamad' },
        'En Mateo 7:7 Jesús usa tres imperativos de presente: αἰτεῖτε, ζητεῖτε, κρούετε. El presente presenta la acción en desarrollo, como algo que se hace de manera continua o repetida. Por eso muchos maestros lo parafrasean: «seguid pidiendo, seguid buscando, seguid llamando». Esa lectura armoniza con lo que Jesús enseña en otros lugares sobre orar siempre y no desmayar (Lc 18:1).',
        'Pero conviene no exagerar. El presente es la forma normal de dar una instrucción general, y no todo imperativo de presente significa «hazlo una y otra vez». El contexto es el que confirma el matiz. Aquí lo confirma: el versículo siguiente dice «todo aquel que pide, recibe», y Lucas pone el mismo dicho después de la parábola del amigo que insiste a medianoche (Lc 11:5-10).',
        { h: 'Una advertencia' },
        'El aspecto es la idea más importante y a la vez la más malentendida del verbo griego. Muchos sermones afirman que el aoristo significa «una vez para siempre». No es así: el aoristo presenta la acción como un todo, pero no dice nada sobre si se repite o si sus efectos duran. Lo verás con más detalle en la estación del aoristo y en la ruta IV.',
        { ejercicio: {
          pregunta: '¿Qué indica el aspecto de un verbo griego?',
          opciones: [
            { t: 'Solo el momento en que ocurre la acción: pasado, presente o futuro.', ok: false, por_que: 'Eso es el tiempo. El aspecto es cómo se mira la acción.' },
            { t: 'Cómo se presenta la acción: completa, en desarrollo o con un resultado que permanece.', ok: true, por_que: 'Aoristo: completa; presente e imperfecto: en desarrollo; perfecto: resultado vigente.' },
            { t: 'Si la acción es buena o mala.', ok: false, por_que: 'El aspecto es gramatical, no moral.' }
          ],
          explicacion: 'El aspecto es la manera en que el autor elige presentar la acción. El contexto confirma su importancia en cada caso.'
        } }
      ],
      pensar: 'Jesús te invita a pedir, buscar y llamar, con la promesa de que el Padre da buenas cosas. ¿Hay algo por lo que dejaste de orar porque la respuesta tardaba?'
    },
    {
      id: 'presente', n: 'El presente', ref: 'Juan 5:17',
      visual: [
        G('Juan 5:17', 'Juan 5:17', '@@n1904:jn/5/17', '@@n1904tr:jn/5/17', '@@n1904t:jn/5/17',
          ['él', 'pero', 'respondió', 'a ellos', 'el', 'Padre', 'de mí', 'hasta', 'ahora', 'trabaja', 'y yo', 'trabajo'],
          '@@jn/5/17'),
        { tipo: 'tabla', titulo: 'λύω', tabla: {
          titulo: 'Presente de indicativo de λύω, desatar',
          cab: ['Persona', 'Activa', 'Media y pasiva'],
          filas: [
            ['1.ª sing.', 'λύω, desato', 'λύομαι, soy desatado'],
            ['2.ª sing.', 'λύεις, desatas', 'λύῃ, eres desatado'],
            ['3.ª sing.', 'λύει, desata', 'λύεται, es desatado'],
            ['1.ª pl.', 'λύομεν, desatamos', 'λυόμεθα, somos desatados'],
            ['2.ª pl.', 'λύετε, desatáis', 'λύεσθε, sois desatados'],
            ['3.ª pl.', 'λύουσι(ν), desatan', 'λύονται, son desatados'],
          ],
          nota: 'El presente aparece 11.575 veces en el Nuevo Testamento, casi tanto como el aoristo (11.804).'
        } }
      ],
      texto: [
        'El presente es el tiempo del diccionario: λύω, «desato». Es también, con el aoristo, el más frecuente del Nuevo Testamento. En el indicativo indica una acción en el presente, vista en desarrollo.',
        { h: 'Las terminaciones' },
        'Las terminaciones activas del presente son -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν). Fíjate en la vocal que une la raíz con la terminación: ο delante de μ y ν, ε en los demás casos. Esa vocal de unión aparece en muchos tiempos y te ayuda a reconocerlos. Las terminaciones medias y pasivas son -ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται; las verás otra vez en la estación de la voz.',
        'Muchos verbos frecuentes tienen la raíz terminada en vocal y la juntan con la de la terminación. Se llaman verbos contractos: ἀγαπάω se usa como ἀγαπῶ, «amo», y ἀγαπᾷ, «ama»; ποιέω, como ποιῶ, ποιεῖ; πληρόω, como πληροῖ. El diccionario trae la forma sin contraer.',
        { h: 'Mi Padre trabaja hasta ahora' },
        'En Juan 5:17 Jesús responde a quienes lo acusaban de sanar en sábado. Usa dos presentes: ἐργάζεται, «trabaja», y ἐργάζομαι, «trabajo». Las formas son medias, -εται y -ομαι, pero el sentido es activo; lo verás en la estación de la voz. Con ἕως ἄρτι, «hasta ahora», el presente muestra una obra que nunca se ha detenido: Dios sostiene el mundo y obra cada día, también en sábado. Y Jesús se pone al mismo nivel: «y yo trabajo». El versículo siguiente dice que por eso querían matarlo, porque «decía que Dios era su propio Padre, haciéndose igual a Dios» (Jn 5:18).',
        { h: 'Otros usos del presente' },
        'El presente puede expresar una verdad general: ὁ θεὸς ἀγάπη ἐστίν, «Dios es amor». También puede contar algo pasado con viveza, como en español: λέγει αὐτῷ, «le dice», es muy frecuente en Juan para narrar un diálogo pasado. Y puede expresar algo inminente: en Apocalipsis 22:20, ἔρχομαι ταχύ, «vengo en breve».',
        { ejercicio: {
          pregunta: '¿Qué forma de λύω significa «desatamos»?',
          opciones: [
            { t: 'λύει', ok: false, por_que: 'λύει es la tercera persona del singular: «desata».' },
            { t: 'λύομεν', ok: true, por_que: '-ομεν es la terminación de la primera persona del plural.' },
            { t: 'λύουσι', ok: false, por_que: 'λύουσι es la tercera persona del plural: «desatan».' }
          ],
          explicacion: 'Presente activo: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν).'
        } }
      ],
      pensar: '«Mi Padre hasta ahora trabaja.» ¿Dónde puedes ver hoy la obra de Dios en tu vida y en tu iglesia, aunque a veces parezca que todo está quieto?'
    },
    {
      id: 'imperfecto', n: 'El imperfecto', ref: 'Hechos 2:47; Hechos 2:42',
      visual: [
        G('Hechos 2:47', 'Hechos 2:47', '@@n1904:hch/2/47', '@@n1904tr:hch/2/47', '@@n1904t:hch/2/47',
          ['alabando', 'a', 'Dios', 'y', 'teniendo', 'favor', 'con', 'todo', 'el', 'pueblo', 'el', 'y', 'Señor', 'añadía', 'a los', 'que eran salvados', 'cada', 'día', 'a', 'lo', 'mismo'],
          '@@hch/2/47'),
        { tipo: 'tabla', titulo: 'λύω', tabla: {
          titulo: 'Imperfecto de indicativo de λύω',
          cab: ['Persona', 'Activa', 'Media y pasiva'],
          filas: [
            ['1.ª sing.', 'ἔλυον, desataba', 'ἐλυόμην'],
            ['2.ª sing.', 'ἔλυες, desatabas', 'ἐλύου'],
            ['3.ª sing.', 'ἔλυε(ν), desataba', 'ἐλύετο'],
            ['1.ª pl.', 'ἐλύομεν, desatábamos', 'ἐλυόμεθα'],
            ['2.ª pl.', 'ἐλύετε, desatabais', 'ἐλύεσθε'],
            ['3.ª pl.', 'ἔλυον, desataban', 'ἐλύοντο'],
          ],
          nota: 'Aparece 1.688 veces. ἔλυον puede ser «yo desataba» o «ellos desataban»: el contexto decide.'
        } }
      ],
      texto: [
        'El imperfecto es el presente trasladado al pasado: mira una acción pasada desde dentro, mientras ocurría. Corresponde bastante bien al pretérito imperfecto español: «desataba», «hablaba», «añadía».',
        { h: 'Cómo se forma' },
        'Se forma con el aumento ἐ- delante de la raíz del presente y unas terminaciones propias: ἔλυον, ἔλυες, ἔλυε(ν), ἐλύομεν, ἐλύετε, ἔλυον. Si la raíz empieza con vocal, el aumento la alarga: ἀκούω da ἤκουον, «oía»; ἐρωτάω da ἠρώτων, «preguntaba». En los verbos compuestos con preposición, el aumento va entre la preposición y la raíz: προσ-ε-τίθει, de προστίθημι.',
        { h: 'La iglesia que crecía' },
        'Hechos 2:47 termina el retrato de la primera iglesia con un imperfecto: ὁ δὲ κύριος προσετίθει, «y el Señor añadía». No fue un solo día de conversiones en Pentecostés; Lucas describe un crecimiento continuo: καθ’ ἡμέραν, «cada día». Y lo atribuye al Señor: la iglesia crecía porque él añadía.',
        'Los versículos anteriores usan la misma manera de contar: los creyentes «perseveraban» en la doctrina de los apóstoles (Hch 2:42), «vendían» sus propiedades y «repartían» a los que tenían necesidad (Hch 2:45). Son hábitos, no hechos aislados. El imperfecto pinta la vida diaria de una comunidad llena del Espíritu.',
        'Fíjate también en τοὺς σῳζομένους, un participio de presente pasivo: «los que eran salvados», personas que estaban recibiendo la salvación. La Reina-Valera traduce «los que habían de ser salvos», mirando la acción desde su resultado. Es una buena muestra de cómo los traductores eligen entre matices posibles.',
        { h: 'Otros usos' },
        'El imperfecto también expresa una acción que se intentaba sin llegar a terminar: en Lucas 1:59, ἐκάλουν αὐτὸ… Ζαχαρίαν: querían llamarlo Zacarías. Y expresa costumbre: en Marcos 15:6, Pilato «en el día de la fiesta les soltaba un preso», ἀπέλυεν, en imperfecto.',
        { ejercicio: {
          pregunta: '¿Qué matiz da el imperfecto προσετίθει en Hechos 2:47?',
          opciones: [
            { t: 'Que el Señor añadió creyentes una sola vez, en Pentecostés.', ok: false, por_que: 'Para presentar un solo hecho, Lucas habría usado el aoristo. Además añade «cada día».' },
            { t: 'Que el Señor seguía añadiendo creyentes día tras día.', ok: true, por_que: 'El imperfecto presenta una acción pasada en desarrollo o repetida.' },
            { t: 'Que el Señor añadirá creyentes en el futuro.', ok: false, por_que: 'El aumento ἐ- indica pasado. El futuro llevaría la marca -σ- sin aumento.' }
          ],
          explicacion: 'El imperfecto describe una acción pasada continua, repetida o habitual.'
        } }
      ],
      pensar: 'La iglesia crecía porque el Señor añadía cada día. ¿Qué hábitos de la primera iglesia te desafían a ti y a tu congregación?'
    },
    {
      id: 'futuro', n: 'El futuro', ref: 'Mateo 1:21',
      visual: [
        G('Mateo 1:21', 'Mateo 1:21', '@@n1904:mt/1/21', '@@n1904tr:mt/1/21', '@@n1904t:mt/1/21',
          ['dará a luz', 'y', 'un hijo', 'y', 'llamarás', 'el', 'nombre', 'de él', 'Jesús', 'él', 'porque', 'salvará', 'al', 'pueblo', 'de él', 'de', 'los', 'pecados', 'de ellos'],
          '@@mt/1/21'),
        { tipo: 'tabla', titulo: 'λύω', tabla: {
          titulo: 'Futuro de indicativo de λύω',
          cab: ['Persona', 'Activa', 'Pasiva'],
          filas: [
            ['1.ª sing.', 'λύσω, desataré', 'λυθήσομαι, seré desatado'],
            ['2.ª sing.', 'λύσεις, desatarás', 'λυθήσῃ'],
            ['3.ª sing.', 'λύσει, desatará', 'λυθήσεται'],
            ['1.ª pl.', 'λύσομεν, desataremos', 'λυθησόμεθα'],
            ['2.ª pl.', 'λύσετε, desataréis', 'λυθήσεσθε'],
            ['3.ª pl.', 'λύσουσι(ν), desatarán', 'λυθήσονται'],
          ],
          nota: 'La marca del futuro es -σ- entre la raíz y las terminaciones del presente. La pasiva suma -θη-.'
        } }
      ],
      texto: [
        'El futuro es el tiempo más fácil de reconocer. Se forma con la raíz, una -σ- y las mismas terminaciones del presente: λύω, «desato»; λύσω, «desataré». Aparece 1.626 veces en el Nuevo Testamento.',
        { h: 'Cuando la -σ- se esconde' },
        'Si la raíz termina en consonante, la σ se combina con ella. Con κ, γ o χ se forma ξ: ἄγω, «llevo», da ἄξω. Con π, β o φ se forma ψ: πέμπω, «envío», da πέμψω. Con τ, δ o θ, la consonante desaparece: πείθω da πείσω. Los verbos contractos alargan su vocal antes de la σ: ἀγαπάω da ἀγαπήσω, «amaré»; ποιέω da ποιήσω, «haré».',
        'Algunos verbos muy frecuentes forman el futuro con terminaciones medias aunque su sentido sea activo: ἔσομαι, «seré», de εἰμί; λήμψομαι, «recibiré», de λαμβάνω; ζήσομαι, «viviré», de ζάω. Y unos pocos tienen futuros irregulares que conviene aprender como palabras: ἐρῶ, «diré», de λέγω; ὄψομαι, «veré», de ὁράω.',
        { h: 'Él salvará a su pueblo' },
        'En Mateo 1:21 el ángel le anuncia a José tres futuros. τέξεται, «dará a luz», es un futuro medio de τίκτω. καλέσεις, «llamarás», tiene la -σ- a la vista. Y σώσει, «salvará», de σῴζω, es la razón del nombre: Ἰησοῦς es la forma griega del hebreo Yehoshúa, «Jehová salva».',
        'El futuro de la promesa va acompañado de un pronombre enfático: αὐτὸς γὰρ σώσει, «porque él salvará». El verbo ya decía «él»; αὐτός lo subraya: él, y no otro. Y el objeto de la salvación se precisa con ἀπὸ τῶν ἁμαρτιῶν αὐτῶν, «de sus pecados». No promete solo una liberación política, como esperaban muchos, sino la liberación del pecado.',
        { h: 'Futuros que mandan' },
        'A veces el futuro se usa como mandato, sobre todo al citar la ley del Antiguo Testamento en la Septuaginta: ἀγαπήσεις τὸν πλησίον σου, «amarás a tu prójimo» (Mt 22:39). Es un futuro, pero tiene la fuerza de un imperativo.',
        { ejercicio: {
          pregunta: '¿Qué forma de σῴζω, «salvar», aparece en Mateo 1:21 y en qué tiempo está?',
          opciones: [
            { t: 'σώσει, futuro: «salvará».', ok: true, por_que: 'La -σ- entre la raíz y la terminación -ει marca el futuro: él salvará.' },
            { t: 'σώσει, aoristo: «salvó».', ok: false, por_que: 'El aoristo indicativo llevaría aumento: ἔσωσε.' },
            { t: 'σώσει, presente: «salva».', ok: false, por_que: 'El presente no tiene la -σ- añadida: σῴζει.' }
          ],
          explicacion: 'Futuro = raíz + σ + terminaciones del presente, sin aumento.'
        } }
      ],
      pensar: 'El nombre de Jesús es una promesa: «él salvará a su pueblo de sus pecados». ¿Hay algún pecado del que todavía necesitas pedirle que te libre?'
    },
    {
      id: 'aoristo', n: 'El aoristo', ref: 'Juan 1:11; Juan 1:12',
      visual: [
        G('Juan 1:11', 'Juan 1:11', '@@n1904:jn/1/11', '@@n1904tr:jn/1/11', '@@n1904t:jn/1/11',
          ['a', 'lo', 'suyo', 'vino', 'y', 'los', 'suyos', 'a él', 'no', 'recibieron'],
          '@@jn/1/11'),
        { tipo: 'tabla', titulo: 'λύω', tabla: {
          titulo: 'Aoristo de indicativo de λύω y de λαμβάνω',
          cab: ['Persona', 'Primer aoristo: λύω', 'Segundo aoristo: λαμβάνω', 'Aoristo pasivo: λύω'],
          filas: [
            ['1.ª sing.', 'ἔλυσα, desaté', 'ἔλαβον, tomé', 'ἐλύθην, fui desatado'],
            ['2.ª sing.', 'ἔλυσας', 'ἔλαβες', 'ἐλύθης'],
            ['3.ª sing.', 'ἔλυσε(ν)', 'ἔλαβε(ν)', 'ἐλύθη'],
            ['1.ª pl.', 'ἐλύσαμεν', 'ἐλάβομεν', 'ἐλύθημεν'],
            ['2.ª pl.', 'ἐλύσατε', 'ἐλάβετε', 'ἐλύθητε'],
            ['3.ª pl.', 'ἔλυσαν', 'ἔλαβον', 'ἐλύθησαν'],
          ],
          nota: 'Es el tiempo más frecuente del Nuevo Testamento: 11.804 formas. El segundo aoristo cambia la raíz y usa las terminaciones del imperfecto.'
        } }
      ],
      texto: [
        'El aoristo es el tiempo de la narración. Cuando el Nuevo Testamento cuenta lo que pasó, usa casi siempre el aoristo: «vino», «dijo», «tomó», «murió», «resucitó». Es el tiempo más frecuente, con 11.804 formas.',
        { h: 'Dos maneras de formarlo' },
        'El primer aoristo se forma con el aumento, la raíz y la marca -σα-: ἔ-λυ-σα, «desaté». En la tercera persona del singular la α se vuelve ε: ἔλυσε(ν). Con las raíces terminadas en consonante pasa lo mismo que en el futuro: πέμπω da ἔπεμψα.',
        'El segundo aoristo no usa -σα-: cambia la raíz y toma las terminaciones del imperfecto. λαμβάνω, «tomar», da ἔλαβον, «tomé». ἔρχομαι, «venir», da ἦλθον, «vine». No hay una regla para prever esas raíces: se aprenden con el verbo, como en español se aprende que «tener» hace «tuve». Por eso los diccionarios dan las partes principales de cada verbo.',
        'El aoristo pasivo tiene su propia marca, -θη-: ἐλύθην, «fui desatado»; ἐγερθείς, «habiendo sido levantado». Cuando veas -θη- o -θε-, piensa en un aoristo o un futuro pasivos.',
        { h: 'Vino a lo suyo' },
        'Juan 1:11 tiene dos aoristos: ἦλθεν, «vino», y παρέλαβον, «recibieron». Los dos son segundos aoristos, de ἔρχομαι y de παραλαμβάνω. Juan resume en dos hechos toda la historia del ministerio de Jesús entre su pueblo: vino, y no lo recibieron. El aoristo no cuenta los detalles; da el cuadro completo.',
        'Fíjate en el juego entre τὰ ἴδια, neutro, «lo suyo», su casa, su tierra, y οἱ ἴδιοι, masculino, «los suyos», su pueblo. Y el versículo siguiente abre la puerta: «a todos los que le recibieron… les dio potestad de ser hechos hijos de Dios» (Jn 1:12), con otros dos aoristos, ἔλαβον y ἔδωκεν.',
        { h: 'Lo que el aoristo no dice' },
        'El aoristo no significa «de una vez para siempre», ni «en un instante», ni «sin repetirse». Presenta la acción como un todo, sin entrar en su desarrollo. Una acción de un segundo y una de cuarenta años pueden contarse en aoristo: en «En cuarenta y seis años fue edificado este templo» (Jn 2:20), el verbo οἰκοδομήθη está en aoristo. Si una acción fue única o definitiva, eso lo dice el contexto o el sentido del verbo, no el aoristo.',
        { ejercicio: {
          pregunta: '¿Cuál de estas afirmaciones sobre el aoristo es correcta?',
          opciones: [
            { t: 'El aoristo siempre indica una acción que ocurrió una sola vez y para siempre.', ok: false, por_que: 'Es un error frecuente. Juan 2:20 usa el aoristo para cuarenta y seis años de construcción.' },
            { t: 'El aoristo presenta la acción como un todo, sin describir su desarrollo.', ok: true, por_que: 'Esa es su función: mirar la acción completa, como una foto.' },
            { t: 'El aoristo solo se usa para acciones del futuro.', ok: false, por_que: 'En el indicativo, el aoristo es casi siempre pasado.' }
          ],
          explicacion: 'El aoristo es el aspecto «sin marcar»: presenta el hecho completo. El contexto dice si fue breve, largo, único o repetido.'
        } }
      ],
      pensar: '«A lo suyo vino, y los suyos no le recibieron. Mas a todos los que le recibieron… les dio potestad de ser hechos hijos de Dios.» ¿Has recibido tú personalmente a Cristo? ¿A quién podrías invitar a recibirlo?'
    },
    {
      id: 'perfecto', n: 'El perfecto: lo hecho que permanece', ref: 'Mateo 4:4; 1 Corintios 15:4',
      visual: [
        G('Mateo 4:4', 'Mateo 4:4', '@@n1904:mt/4/4', '@@n1904tr:mt/4/4', '@@n1904t:mt/4/4',
          ['él', 'pero', 'respondiendo', 'dijo', 'escrito está', 'no', 'de', 'pan', 'solo', 'vivirá', 'el', 'hombre', 'sino', 'de', 'toda', 'palabra', 'que sale', 'por', 'boca', 'de Dios'],
          '@@mt/4/4'),
        { tipo: 'tabla', titulo: 'λύω', tabla: {
          titulo: 'Perfecto de indicativo de λύω',
          cab: ['Persona', 'Activa', 'Media y pasiva'],
          filas: [
            ['1.ª sing.', 'λέλυκα, he desatado', 'λέλυμαι, he sido desatado'],
            ['2.ª sing.', 'λέλυκας', 'λέλυσαι'],
            ['3.ª sing.', 'λέλυκε(ν)', 'λέλυται'],
            ['1.ª pl.', 'λελύκαμεν', 'λελύμεθα'],
            ['2.ª pl.', 'λελύκατε', 'λέλυσθε'],
            ['3.ª pl.', 'λελύκασι(ν)', 'λέλυνται'],
          ],
          nota: 'Aparece 1.571 veces. Marcas: la reduplicación (λε-) al comienzo y, en la activa, la -κ-.'
        } }
      ],
      texto: [
        'El perfecto griego mira una acción terminada cuyo resultado continúa. Es como decir «está hecho»: se hizo en el pasado y sigue así.',
        { h: 'Cómo se reconoce' },
        'Su marca más clara es la reduplicación: se repite la primera consonante de la raíz con una ε. λύω da λέ-λυκα; γράφω da γέ-γραφα. Si la raíz empieza con vocal, se alarga como en el aumento: ἐλπίζω da ἤλπικα. La activa suele tener además una -κ-: λέλυ-κ-α. La media y pasiva añade las terminaciones directamente: λέλυ-ται, γέγραπ-ται.',
        { h: 'Escrito está' },
        'Cuando el diablo tienta a Jesús en el desierto, Jesús responde tres veces con γέγραπται, «Escrito está», en Mateo 4:4, 7 y 10. Es un perfecto pasivo de γράφω. No dice solo que alguien lo escribió alguna vez, lo que diría el aoristo ἐγράφη. Dice que fue escrito y sigue escrito, vigente y con autoridad. Jesús vence la tentación apoyándose en una Palabra que permanece.',
        'La respuesta de Mateo 4:4 cita Deuteronomio 8:3: el hombre no vive solo de pan, ἀλλ’ ἐπὶ παντὶ ῥήματι ἐκπορευομένῳ διὰ στόματος θεοῦ, «sino de toda palabra que sale de la boca de Dios». El participio ἐκπορευομένῳ está en presente: la palabra de Dios sigue saliendo de su boca, viva.',
        { h: 'Resucitó y vive' },
        'Pablo usa el perfecto en el resumen del evangelio de 1 Corintios 15:3-4. Dice que Cristo «murió» y «fue sepultado», dos aoristos, hechos completos. Pero de la resurrección dice ἐγήγερται, perfecto: «ha sido resucitado» y sigue resucitado. La muerte terminó; la resurrección continúa. Cristo vive hoy.',
        'Otros perfectos famosos: τετέλεσται, «consumado es» (Jn 19:30), que verás en el taller; σεσῳσμένοι, «salvos», en Efesios 2:8; y πεπλήρωται, «se ha cumplido», en Marcos 1:15.',
        { h: 'El pluscuamperfecto' },
        'Existe también un pluscuamperfecto, el perfecto en el pasado: «había desatado», ἐλελύκειν. Es muy raro: solo 88 formas en todo el Nuevo Testamento. Con reconocerlo basta.',
        { ejercicio: {
          pregunta: '¿Por qué Jesús dice γέγραπται, en perfecto, y no ἐγράφη, en aoristo?',
          opciones: [
            { t: 'Porque el perfecto indica que lo escrito sigue vigente y con autoridad.', ok: true, por_que: 'El perfecto mira el resultado que permanece: está escrito, y así sigue.' },
            { t: 'Porque el perfecto es el futuro de γράφω.', ok: false, por_que: 'El futuro sería γράψω. γέγραπται tiene reduplicación: es perfecto.' },
            { t: 'Porque en griego no existe el aoristo pasivo de γράφω.', ok: false, por_que: 'Sí existe, ἐγράφη, y el Nuevo Testamento lo usa. Jesús eligió el perfecto.' }
          ],
          explicacion: 'Perfecto: acción completada con un resultado que continúa. γέγραπται es la fórmula para citar la Escritura como autoridad vigente.'
        } }
      ],
      pensar: 'Jesús enfrentó la tentación con «escrito está». ¿Qué pasajes de la Escritura tienes guardados para responder en tus momentos de prueba?'
    },
    {
      id: 'voz', n: 'Activa, media y pasiva', ref: 'Romanos 12:2',
      visual: [
        G('Romanos 12:2', 'Romanos 12:2', '@@n1904:ro/12/2', '@@n1904tr:ro/12/2', '@@n1904t:ro/12/2',
          ['y', 'no', 'os conforméis', 'al', 'siglo', 'este', 'sino', 'sed transformados', 'por la', 'renovación', 'de la', 'mente', 'para', 'lo', 'comprobar', 'vosotros', 'cuál', 'la', 'voluntad', 'de', 'Dios', 'la', 'buena', 'y', 'agradable', 'y', 'perfecta'],
          '@@ro/12/2'),
        { tipo: 'tabla', titulo: 'Las voces', tabla: {
          titulo: 'Las tres voces',
          cab: ['Voz', 'El sujeto…', 'Ejemplo', 'Formas'],
          filas: [
            ['Activa', 'hace la acción', 'λύω, desato', '20.739 (73 %)'],
            ['Media', 'hace la acción con participación propia, para sí o sobre sí', 'λύομαι, me desato, desato para mí', 'En muchos tiempos, igual que la pasiva'],
            ['Pasiva', 'recibe la acción', 'λύομαι, soy desatado', 'Con la media: 7.613 (27 %)'],
          ],
          nota: 'En el presente, el imperfecto y el perfecto, la media y la pasiva tienen las mismas formas: el contexto decide. En el aoristo y el futuro, la pasiva tiene la marca -θη-.'
        } }
      ],
      texto: [
        'La voz dice qué relación tiene el sujeto con la acción. El español tiene activa y pasiva; el griego tiene además una tercera voz, la media.',
        { h: 'Activa y pasiva' },
        'En la activa, el sujeto hace la acción: λύω, «desato». En la pasiva, el sujeto la recibe: λύομαι, «soy desatado». Cuando se nombra quién hace la acción en una pasiva, se usa ὑπό con genitivo: ἐβαπτίσθη ὑπὸ Ἰωάνου, «fue bautizado por Juan» (Mr 1:9).',
        { h: 'La voz media' },
        'En la media, el sujeto hace la acción, pero con una participación especial: para sí, sobre sí o con interés propio. νίπτω es «lavar», νίπτομαι es «lavarse». αἰτέω es «pedir», y αἰτέομαι puede ser «pedir para mí». Muchas veces la diferencia es sutil y el español no la marca.',
        'En el presente, el imperfecto y el perfecto, las formas medias y pasivas son idénticas. Por eso λύεται puede significar «se desata» o «es desatado». Solo en el aoristo y en el futuro la pasiva tiene su propia marca, -θη-.',
        { h: 'Verbos con forma media y sentido activo' },
        'Hay verbos muy frecuentes que solo tienen formas medias o pasivas, pero se traducen en activa: ἔρχομαι, «vengo»; πορεύομαι, «voy»; γίνομαι, «llego a ser»; ἀποκρίνομαι, «respondo». Tradicionalmente se los llama deponentes, porque parecían haber «depuesto» la forma activa. Hoy muchos gramáticos prefieren verlos como verdaderos medios: verbos en que el sujeto está muy involucrado en su propia acción. Para leer, basta saber que se traducen en activa.',
        { h: 'Dejaos transformar' },
        'Romanos 12:2 tiene dos imperativos de presente en voz media o pasiva. μὴ συνσχηματίζεσθε: «no os conforméis», no os dejéis moldear por este siglo, como un material que toma la forma del molde. Y μεταμορφοῦσθε: «transformaos», o mejor, sed transformados. Es el mismo verbo de la transfiguración de Jesús en Mateo 17:2.',
        'La forma pasiva es significativa: la transformación no es solo un esfuerzo propio, sino una obra de Dios que el creyente recibe. Pero es un imperativo, un mandato: hay que entregarse a esa obra. El medio está en el dativo, τῇ ἀνακαινώσει τοῦ νοός, «por medio de la renovación de vuestro entendimiento». Dios transforma a quien deja que su Palabra renueve su manera de pensar.',
        { ejercicio: {
          pregunta: '¿Cómo se traduce ἔρχεται, de ἔρχομαι, que tiene forma media?',
          opciones: [
            { t: '«Es venido», en pasiva.', ok: false, por_que: 'ἔρχομαι tiene forma media pero sentido activo.' },
            { t: '«Viene», en activa.', ok: true, por_que: 'Los verbos llamados deponentes tienen forma media o pasiva y se traducen en activa.' },
            { t: '«Se viene a sí mismo».', ok: false, por_que: 'No todo verbo medio es reflexivo. ἔρχομαι significa simplemente «venir».' }
          ],
          explicacion: 'Para traducir, mira el diccionario: si el verbo aparece en -ομαι, normalmente se traduce en activa.'
        } }
      ],
      pensar: '«No os conforméis a este siglo, sino transformaos.» ¿Qué molde del mundo actual está presionando tu manera de pensar, y qué parte de la Palabra necesitas para renovarla?'
    },
    {
      id: 'modos', n: 'Indicativo, subjuntivo, imperativo y optativo', ref: 'Romanos 6:1-2',
      visual: [
        G('Romanos 6:1', 'Romanos 6:1', '@@n1904:ro/6/1', '@@n1904tr:ro/6/1', '@@n1904t:ro/6/1',
          ['¿qué', 'pues', 'diremos?', '¿perseveraremos', 'en el', 'pecado', 'para que', 'la', 'gracia', 'abunde?'],
          '@@ro/6/1'),
        { tipo: 'tabla', titulo: 'Los modos', tabla: {
          titulo: 'Los modos del verbo griego',
          cab: ['Modo', 'Presenta la acción como…', 'Ejemplo', 'Formas'],
          filas: [
            ['Indicativo', 'un hecho', 'ἠγάπησεν, amó (Jn 3:16)', '15.619'],
            ['Subjuntivo', 'posible, deseada o con propósito', 'ἵνα… μὴ ἀπόληται, para que no se pierda', '1.859'],
            ['Imperativo', 'un mandato o un ruego', 'μετανοεῖτε, arrepentíos (Mr 1:15)', '1.871'],
            ['Optativo', 'un deseo o una posibilidad remota', 'μὴ γένοιτο, en ninguna manera (Ro 6:2)', '67'],
            ['Infinitivo', 'una acción como sustantivo', 'τὸ ζῆν, el vivir (Fil 1:21)', '2.285'],
            ['Participio', 'una acción como adjetivo', 'ὁ πιστεύων, el que cree (Jn 6:47)', '6.651'],
          ],
          nota: 'La marca del subjuntivo es la vocal de unión alargada: λύομεν (indicativo), λύωμεν (subjuntivo).'
        } }
      ],
      texto: [
        'El modo dice cómo presenta el que habla la acción: como un hecho, como una posibilidad, como un mandato o como un deseo.',
        { h: 'Indicativo: lo que es' },
        'El indicativo presenta la acción como real: «Dios amó», «Jesús vino», «el Señor añadía». Es el único modo que tiene aumento y el único que indica claramente el tiempo. Más de la mitad de los verbos del Nuevo Testamento están en indicativo.',
        { h: 'Subjuntivo: lo que podría ser' },
        'El subjuntivo presenta la acción como posible, deseada o como propósito. Se reconoce por la vocal larga en la terminación: λύωμεν en lugar de λύομεν; λύῃ en lugar de λύει. Aparece sobre todo después de ἵνα, «para que», de ἐάν, «si», y de ὅταν, «cuando».',
        'En Romanos 6:1 Pablo usa un subjuntivo para una pregunta deliberativa: ἐπιμένωμεν τῇ ἁμαρτίᾳ; «¿perseveraremos en el pecado?», es decir, «¿vamos a seguir pecando?». Y otro después de ἵνα: ἵνα ἡ χάρις πλεονάσῃ, «para que la gracia abunde». Es la objeción de quien piensa que, si la gracia es mayor que el pecado, se puede pecar sin cuidado.',
        { h: 'Optativo: ¡ni pensarlo!' },
        'La respuesta de Pablo en el versículo 2 es μὴ γένοιτο. γένοιτο es un optativo, el modo del deseo: «que no suceda». La Reina-Valera traduce «En ninguna manera». Es el rechazo más fuerte que Pablo tiene; lo usa unas quince veces, casi todas en Romanos y Gálatas. El optativo, muy usado en el griego clásico, ya era raro en la época del Nuevo Testamento: solo 67 formas. Otro ejemplo es la bendición de 1 Tesalonicenses 5:23: «el mismo Dios de paz os santifique por completo», ἁγιάσαι.',
        { h: 'Imperativo: haz' },
        'El imperativo da órdenes, consejos o ruegos. Tiene segunda y tercera persona: λῦε, «desata tú»; λυέτω, «que él desate». En presente presenta la acción en desarrollo; en aoristo, como un todo. Lo verás en Mateo 28:19 y en otros pasajes. Cuando el ruego se dirige a Dios, se traduce con respeto: ἁγιασθήτω τὸ ὄνομά σου, «santificado sea tu nombre».',
        { ejercicio: {
          pregunta: '¿Qué modo es γένοιτο en μὴ γένοιτο?',
          opciones: [
            { t: 'Indicativo, porque afirma un hecho.', ok: false, por_que: 'El indicativo sería ἐγένετο. γένοιτο expresa un deseo.' },
            { t: 'Optativo, el modo del deseo: «¡que no suceda!».', ok: true, por_que: 'La -οι- antes de la terminación es la marca del optativo.' },
            { t: 'Imperativo, una orden a los lectores.', ok: false, por_que: 'El imperativo de segunda persona sería γενοῦ o γένεσθε. Aquí es un deseo.' }
          ],
          explicacion: 'Indicativo: hecho; subjuntivo: posibilidad y propósito; imperativo: mandato; optativo: deseo.'
        } }
      ],
      pensar: '«¿Perseveraremos en el pecado para que la gracia abunde? En ninguna manera.» ¿Has usado alguna vez la gracia de Dios como excusa? ¿Qué te dice la respuesta de Pablo?'
    },
    {
      id: 'infinitivo', n: 'El infinitivo', ref: 'Filipenses 1:21',
      visual: [
        G('Filipenses 1:21', 'Filipenses 1:21', '@@n1904:fil/1/21', '@@n1904tr:fil/1/21', '@@n1904t:fil/1/21',
          ['para mí', 'porque', 'el', 'vivir', 'Cristo', 'y', 'el', 'morir', 'ganancia'],
          '@@fil/1/21'),
        { tipo: 'tabla', titulo: 'Formas', tabla: {
          titulo: 'Infinitivos de λύω',
          cab: ['Tiempo', 'Activa', 'Media', 'Pasiva'],
          filas: [
            ['Presente', 'λύειν', 'λύεσθαι', 'λύεσθαι'],
            ['Aoristo', 'λῦσαι', 'λύσασθαι', 'λυθῆναι'],
            ['Perfecto', 'λελυκέναι', 'λελύσθαι', 'λελύσθαι'],
          ],
          nota: 'Terminaciones típicas: -ειν, -αι, -σθαι, -ναι. Hay 2.285 infinitivos en el Nuevo Testamento.'
        } }
      ],
      texto: [
        'El infinitivo es la forma del verbo que funciona como sustantivo: «vivir», «morir», «amar». En griego no tiene persona ni número, pero sí tiempo (aspecto) y voz.',
        { h: 'Cómo se reconoce' },
        'Las terminaciones del infinitivo son pocas y muy reconocibles: -ειν en el presente activo, λύειν; -σαι en el aoristo activo, λῦσαι; -σθαι en la voz media, λύεσθαι; -ναι en el aoristo pasivo y en el perfecto, λυθῆναι, λελυκέναι. Y uno muy frecuente: εἶναι, «ser».',
        { h: 'Para mí el vivir es Cristo' },
        'En Filipenses 1:21 Pablo pone dos infinitivos con artículo neutro, τὸ ζῆν y τὸ ἀποθανεῖν: «el vivir» y «el morir». El artículo los convierte en sustantivos y los hace sujetos de la frase. No hay verbo «ser»: el griego lo omite. Literalmente: «para mí, el vivir, Cristo; y el morir, ganancia».',
        'Los dos infinitivos tienen aspectos distintos. ζῆν es presente: la vida como un proceso continuo, día a día. ἀποθανεῖν es aoristo: la muerte como un hecho completo, un paso. Pablo escribe desde la cárcel, sin saber si será liberado o ejecutado. Su vida entera es Cristo; y morir, pasar de una vez a estar con él, sería ganancia (Fil 1:23).',
        'El dativo ἐμοί, al comienzo, es enfático: «para mí», sea lo que sea para otros.',
        { h: 'Otros usos' },
        'El infinitivo completa el sentido de otros verbos: δύναμαι ποιεῖν, «puedo hacer»; θέλω ἐλθεῖν, «quiero venir»; ἤρξαντο λαλεῖν, «comenzaron a hablar» (Hch 2:4). Con δεῖ forma la expresión de lo necesario: en Juan 4:24, δεῖ προσκυνεῖν, «es necesario que adoren».',
        'Con preposición y artículo forma frases de tiempo, causa o propósito. En Romanos 12:2, εἰς τὸ δοκιμάζειν, «para que comprobéis», expresa propósito. En Mateo 13:4, ἐν τῷ σπείρειν αὐτόν, literalmente «en el sembrar él», expresa tiempo: «mientras sembraba». En estos casos el sujeto del infinitivo va en acusativo.',
        { ejercicio: {
          pregunta: 'En Filipenses 1:21, ¿por qué τὸ ζῆν está en presente y τὸ ἀποθανεῖν en aoristo?',
          opciones: [
            { t: 'Porque vivir es en el presente y morir será en el pasado.', ok: false, por_que: 'Fuera del indicativo, el presente y el aoristo no indican sobre todo tiempo, sino aspecto.' },
            { t: 'Porque el vivir se presenta como un proceso continuo y el morir como un hecho completo.', ok: true, por_que: 'El presente mira la acción en desarrollo; el aoristo, como un todo.' },
            { t: 'Porque ζάω no tiene infinitivo aoristo.', ok: false, por_que: 'La elección es de aspecto, no de falta de formas.' }
          ],
          explicacion: 'En los infinitivos, el presente y el aoristo comunican aspecto. El contexto confirma el matiz.'
        } }
      ],
      pensar: '«Para mí el vivir es Cristo.» Si alguien mirara tu agenda de esta semana, ¿qué diría que es «el vivir» para ti?'
    },
    {
      id: 'participio-adjetivo', n: 'El participio como adjetivo y sustantivo', ref: 'Juan 6:47; Juan 3:36',
      visual: [
        G('Juan 6:47', 'Juan 6:47', '@@n1904:jn/6/47', '@@n1904tr:jn/6/47', '@@n1904t:jn/6/47',
          ['de cierto', 'de cierto', 'digo', 'a vosotros', 'el', 'que cree', 'tiene', 'vida', 'eterna'],
          '@@jn/6/47'),
        { tipo: 'tabla', titulo: 'Formas', tabla: {
          titulo: 'Participios de λύω (nominativo singular)',
          cab: ['Tiempo y voz', 'Masculino', 'Femenino', 'Neutro', 'Sentido'],
          filas: [
            ['Presente activo', 'λύων', 'λύουσα', 'λῦον', 'que desata, desatando'],
            ['Presente medio o pasivo', 'λυόμενος', 'λυομένη', 'λυόμενον', 'que es desatado'],
            ['Aoristo activo', 'λύσας', 'λύσασα', 'λῦσαν', 'que desató, habiendo desatado'],
            ['Aoristo pasivo', 'λυθείς', 'λυθεῖσα', 'λυθέν', 'que fue desatado'],
            ['Perfecto activo', 'λελυκώς', 'λελυκυῖα', 'λελυκός', 'que ha desatado'],
          ],
          nota: 'El participio se declina como un adjetivo. Marcas típicas: -ντ- (λύοντος) y -μεν- (λυόμενος).'
        } }
      ],
      texto: [
        'El participio es un adjetivo hecho de un verbo. Como verbo, tiene tiempo (aspecto) y voz, y puede tener complementos. Como adjetivo, se declina en caso, número y género. El Nuevo Testamento usa 6.651 participios: casi uno de cada cuatro verbos.',
        { h: 'Las marcas' },
        'El participio activo de presente termina en -ων, -ουσα, -ον, y en los demás casos muestra la marca -ντ-: λύοντος, λύοντι, λύοντα. El participio medio o pasivo tiene la marca -μεν-: λυόμενος, «que es desatado». Si ves -ντ- o -μεν- en medio de un verbo, piensa en un participio.',
        { h: 'El que cree' },
        'Con el artículo, el participio funciona como sustantivo. ὁ πιστεύων es «el que cree», literalmente «el creyente». Juan usa esta construcción muchas veces para describir a quien recibe la vida: ὁ πιστεύων ἔχει ζωὴν αἰώνιον, «el que cree en mí, tiene vida eterna» (Jn 6:47; también Jn 3:36). La Reina-Valera sigue los manuscritos que añaden «en mí»; el sentido es el mismo.',
        'Fíjate en dos detalles. El participio está en presente: describe a la persona como alguien que está creyendo, alguien cuya vida se caracteriza por la fe. La fe bíblica no es solo un momento del pasado, sino una confianza viva. Y el verbo principal también está en presente: ἔχει, «tiene». La vida eterna no es solo una promesa para después de la muerte; el que cree ya la tiene.',
        { h: 'Participio atributivo' },
        'Como cualquier adjetivo, el participio puede describir a un sustantivo cuando va dentro del artículo: en Juan 6:51, ὁ ἄρτος ὁ ζῶν, «el pan vivo», literalmente el pan, el que vive. O sin artículo, como una frase de relativo: «toda palabra que sale de la boca de Dios», παντὶ ῥήματι ἐκπορευομένῳ (Mt 4:4).',
        { h: 'Cómo traducirlo' },
        'El español tiene menos participios, así que el participio griego con artículo se traduce casi siempre con una frase de relativo: «el que cree», «los que trabajan», «lo que fue dicho». Recuerda que el tiempo del participio es sobre todo aspecto: un participio de aoristo presenta la acción como un todo, y uno de presente, en desarrollo.',
        { ejercicio: {
          pregunta: '¿Cómo se traduce ὁ πιστεύων?',
          opciones: [
            { t: '«Él creyó».', ok: false, por_que: 'Eso sería el aoristo indicativo ἐπίστευσεν. ὁ πιστεύων es un participio con artículo.' },
            { t: '«El que cree».', ok: true, por_que: 'El artículo convierte el participio en sustantivo: la persona que cree.' },
            { t: '«Creed».', ok: false, por_que: 'Eso sería el imperativo πιστεύετε.' }
          ],
          explicacion: 'Artículo + participio = «el que…». Es una de las construcciones más frecuentes del Nuevo Testamento.'
        } }
      ],
      pensar: '«El que cree tiene vida eterna.» ¿Vives con la seguridad de quien ya tiene la vida que Cristo da, o con la duda de quien espera ganársela?'
    },
    {
      id: 'participio-adverbial', n: 'El participio adverbial', ref: 'Romanos 5:1',
      visual: [
        G('Romanos 5:1', 'Romanos 5:1', '@@n1904:ro/5/1', '@@n1904tr:ro/5/1', '@@n1904t:ro/5/1',
          ['habiendo sido justificados', 'pues', 'por', 'fe', 'paz', 'tenemos (o tengamos)', 'con', 'el', 'Dios', 'por medio de', 'el', 'Señor', 'de nosotros', 'Jesús', 'Cristo'],
          '@@ro/5/1'),
        { tipo: 'tabla', titulo: 'Sentidos', tabla: {
          titulo: 'Qué puede expresar un participio sin artículo',
          cab: ['Relación', 'Se traduce', 'Ejemplo'],
          filas: [
            ['Tiempo', 'cuando, después de, mientras', 'ἀναστάς, «levantándose», cuando se levantó (Mr 1:35)'],
            ['Causa', 'porque, puesto que', 'Δικαιωθέντες, «justificados», puesto que fuimos justificados (Ro 5:1)'],
            ['Modo o medio', 'gerundio: «-ando, -iendo»', 'βαπτίζοντες… διδάσκοντες (Mt 28:19-20)'],
            ['Concesión', 'aunque', 'ὃς ἐν μορφῇ θεοῦ ὑπάρχων, «el cual, siendo en forma de Dios» (Fil 2:6)'],
            ['Genitivo absoluto', 'cuando, una vez que', 'ἐπελθόντος τοῦ ἁγίου πνεύματος, «cuando haya venido… el Espíritu Santo» (Hch 1:8)'],
          ],
          nota: 'La relación no está escrita: el lector la deduce del contexto. Por eso las traducciones difieren a veces.'
        } }
      ],
      texto: [
        'Cuando el participio no lleva artículo y acompaña a un verbo principal, funciona como un adverbio: dice cuándo, por qué o cómo ocurre la acción. Es uno de los rasgos más característicos del griego.',
        { h: 'Justificados, pues' },
        'Romanos 5:1 comienza con un participio de aoristo pasivo: Δικαιωθέντες, «habiendo sido justificados». La marca -θε- dice que es pasivo, y la -ντ- dice que es participio. El aoristo presenta la justificación como un hecho completo. El verbo principal viene después: «tenemos paz para con Dios». ¿Qué relación hay entre los dos? La justificación es la causa y la base de la paz: porque hemos sido justificados por la fe, tenemos paz con Dios.',
        'La paz de este versículo no es primero un sentimiento, sino una relación: antes éramos enemigos de Dios (Ro 5:10), y ahora hemos sido reconciliados. Y esa paz tiene un mediador: διὰ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ, «por medio de nuestro Señor Jesucristo».',
        { h: 'Una diferencia de manuscritos' },
        'El texto de Nestle 1904, que muestra el panel, trae ἔχωμεν, subjuntivo: «tengamos paz». Otros manuscritos traen ἔχομεν, indicativo: «tenemos paz». Las dos palabras se pronunciaban casi igual, y los copistas que escribían al dictado podían confundirlas. La Reina-Valera y la mayoría de las ediciones modernas leen «tenemos», que encaja mejor con el argumento de Pablo. Ninguna de las dos lecturas cambia la doctrina: la paz con Dios es fruto de la justificación.',
        { h: 'El participio no dice la relación' },
        'El griego no escribe «porque», «cuando» o «aunque» delante del participio adverbial. El lector debe deducirlo. Un participio de aoristo suele indicar algo anterior al verbo principal: en Marcos 1:35, ἀναστὰς ἐξῆλθεν, «levantándose… salió», es decir, después de levantarse salió. Un participio de presente suele indicar algo simultáneo: «bautizándolos… enseñándoles».',
        'Un caso especial es el genitivo absoluto: un participio y su sujeto en genitivo, sin relación gramatical con el resto de la frase. Lo verás en Hechos 1:8: ἐπελθόντος τοῦ ἁγίου πνεύματος, «cuando haya venido sobre vosotros el Espíritu Santo».',
        { ejercicio: {
          pregunta: 'En Romanos 5:1, ¿qué relación tiene el participio Δικαιωθέντες con «tenemos paz»?',
          opciones: [
            { t: 'De concesión: aunque fuimos justificados, tenemos paz.', ok: false, por_que: 'No hay oposición entre la justificación y la paz: una produce la otra.' },
            { t: 'De causa: porque hemos sido justificados, tenemos paz con Dios.', ok: true, por_que: 'La justificación por la fe es la base de la paz con Dios.' },
            { t: 'De propósito: para ser justificados, tengamos paz.', ok: false, por_que: 'El participio de aoristo presenta la justificación como ya ocurrida, no como una meta.' }
          ],
          explicacion: 'El participio adverbial expresa tiempo, causa, modo o concesión. El contexto decide cuál.'
        } }
      ],
      pensar: 'La paz con Dios no depende de cómo te sientes hoy, sino de lo que Cristo hizo. ¿Qué cambia en tu manera de orar saber que ya tienes paz con Dios?'
    },
    {
      id: 'eimi-mi', n: 'εἰμί y los verbos en -μι', ref: 'Juan 8:58',
      visual: [
        G('Juan 8:58', 'Juan 8:58', '@@n1904:jn/8/58', '@@n1904tr:jn/8/58', '@@n1904t:jn/8/58',
          ['dijo', 'a ellos', 'Jesús', 'de cierto', 'de cierto', 'digo', 'a vosotros', 'antes que', 'Abraham', 'llegara a existir', 'yo', 'soy'],
          '@@jn/8/58'),
        { tipo: 'tabla', titulo: 'εἰμί', tabla: {
          titulo: 'El verbo εἰμί, ser',
          cab: ['Persona', 'Presente', 'Imperfecto', 'Futuro'],
          filas: [
            ['1.ª sing.', 'εἰμί, soy', 'ἤμην, era', 'ἔσομαι, seré'],
            ['2.ª sing.', 'εἶ, eres', 'ἦς, eras', 'ἔσῃ, serás'],
            ['3.ª sing.', 'ἐστί(ν), es', 'ἦν, era', 'ἔσται, será'],
            ['1.ª pl.', 'ἐσμέν, somos', 'ἦμεν, éramos', 'ἐσόμεθα, seremos'],
            ['2.ª pl.', 'ἐστέ, sois', 'ἦτε, erais', 'ἔσεσθε, seréis'],
            ['3.ª pl.', 'εἰσί(ν), son', 'ἦσαν, eran', 'ἔσονται, serán'],
          ],
          nota: 'Infinitivo: εἶναι. Participio: ὤν, οὖσα, ὄν, «siendo, el que es». εἰμί aparece 2.457 veces.'
        } },
        { tipo: 'tabla', titulo: 'Verbos en -μι', tabla: {
          titulo: 'Tres verbos en -μι frecuentes',
          cab: ['Verbo', 'Presente', 'Aoristo', 'Compuestos'],
          filas: [
            ['δίδωμι, dar (414)', 'δίδωμι, δίδως, δίδωσι(ν)', 'ἔδωκα, di', 'παραδίδωμι, entregar; ἀποδίδωμι, devolver'],
            ['τίθημι, poner (99)', 'τίθημι, τίθης, τίθησι(ν)', 'ἔθηκα, puse', 'ἐπιτίθημι, imponer; προστίθημι, añadir'],
            ['ἵστημι, estar de pie (153)', 'ἵστημι, ἵστης, ἵστησι(ν)', 'ἔστησα y ἔστην', 'ἀνίστημι, levantar(se), resucitar'],
          ],
          nota: 'Los verbos en -μι suelen reduplicar la raíz en el presente con ι: δι-δω-, τι-θη-.'
        } }
      ],
      texto: [
        'Casi todos los verbos griegos terminan en -ω en la primera persona del presente. Pero hay un grupo pequeño y muy frecuente que termina en -μι. El más importante es εἰμί, «ser».',
        { h: 'El verbo ser' },
        'εἰμί es irregular, como «ser» en español, y conviene aprenderlo de memoria: εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν). No tiene voz pasiva ni aoristo. Su imperfecto, ἦν, «era», es el verbo de Juan 1:1: ἐν ἀρχῇ ἦν ὁ λόγος, «en el principio era el Verbo». Y su participio, ὁ ὤν, «el que es», traduce en la Septuaginta el «Yo soy el que soy» de Éxodo 3:14, y aparece en Apocalipsis: ὁ ὢν καὶ ὁ ἦν καὶ ὁ ἐρχόμενος, «el que es y que era y que ha de venir» (Ap 1:8).',
        { h: 'Antes que Abraham fuese' },
        'En Juan 8:58 Jesús pone frente a frente dos verbos. De Abraham dice γενέσθαι, infinitivo aoristo de γίνομαι, «llegar a ser, nacer»: Abraham comenzó a existir en un momento. De sí mismo dice ἐγὼ εἰμί, presente de εἰμί: «yo soy». No dice «yo era» ni «yo llegué a ser», sino «yo soy», como quien existe sin comienzo.',
        'Los oyentes entendieron la afirmación: en el versículo siguiente «tomaron entonces piedras para arrojárselas» (Jn 8:59), como se hacía con un blasfemo. Jesús se había aplicado el nombre con que Dios se reveló a Moisés. El contraste entre γίνομαι y εἰμί también aparece en el prólogo de Juan: el Verbo «era» (ἦν) en el principio, y todas las cosas «fueron hechas» (ἐγένετο) por medio de él (Jn 1:1-3).',
        { h: 'Los otros verbos en -μι' },
        'Los demás verbos en -μι son pocos, pero muy usados, sobre todo en compuestos. δίδωμι, «dar», aparece 414 veces, y παραδίδωμι, «entregar», 119 más. Sus terminaciones del presente son -μι, -ς, -σι(ν), y reduplican la raíz con ι: δι-δω-μι, τι-θη-μι. En el aoristo, δίδωμι y τίθημι usan -κα en lugar de -σα: ἔδωκα, «di»; ἔθηκα, «puse». ἔδωκεν es el «dio» de Juan 3:16.',
        { ejercicio: {
          pregunta: 'En Juan 8:58, ¿qué contraste marca Jesús con γενέσθαι y εἰμί?',
          opciones: [
            { t: 'Que Abraham llegó a existir en un momento, mientras que él existe sin comienzo.', ok: true, por_que: 'γίνομαι es «llegar a ser»; εἰμί en presente afirma una existencia continua.' },
            { t: 'Que Abraham era más importante que Jesús.', ok: false, por_que: 'El versículo afirma lo contrario: Jesús es antes que Abraham.' },
            { t: 'Que Jesús nació antes que Abraham, en el siglo anterior.', ok: false, por_que: 'Jesús no habla de un nacimiento anterior, sino de su existencia eterna: «yo soy».' }
          ],
          explicacion: 'El contraste entre γίνομαι (comenzar a existir) y εἰμί (ser) recorre el Evangelio de Juan para mostrar la eternidad del Hijo.'
        } }
      ],
      pensar: 'Jesús dijo «antes que Abraham fuese, yo soy». ¿Qué seguridad te da saber que el Señor en quien confías existe desde siempre y para siempre?'
    },
    {
      id: 'analizar', n: 'Cómo analizar un verbo', ref: 'Juan 20:31',
      visual: [
        G('Juan 20:31', 'Juan 20:31', '@@n1904:jn/20/31', '@@n1904tr:jn/20/31', '@@n1904t:jn/20/31',
          ['estas cosas', 'pero', 'han sido escritas', 'para que', 'creáis', 'que', 'Jesús', 'es', 'el', 'Cristo', 'el', 'Hijo', 'de', 'Dios', 'y', 'para que', 'creyendo', 'vida', 'tengáis', 'en', 'el', 'nombre', 'de él'],
          '@@jn/20/31'),
        { tipo: 'tabla', titulo: 'Método', tabla: {
          titulo: 'Seis preguntas para analizar un verbo',
          cab: ['Pregunta', 'Qué mirar', 'En γέγραπται'],
          filas: [
            ['1. ¿Tiene aumento o reduplicación?', 'ἐ- al comienzo o la consonante repetida', 'γε-: reduplicación'],
            ['2. ¿Qué marca de tiempo tiene?', '-σ- (futuro, aoristo), -κ- (perfecto), -θη- (pasiva)', 'Reduplicación sin -κ-: perfecto medio o pasivo'],
            ['3. ¿Qué terminación tiene?', 'Persona y número', '-ται: tercera persona del singular, media o pasiva'],
            ['4. ¿Qué modo es?', 'Vocal larga (subjuntivo), -ντ- o -μεν- (participio), -ειν, -σαι, -ναι (infinitivo)', 'Indicativo'],
            ['5. ¿De qué verbo viene?', 'Quita las piezas y busca la raíz en el diccionario', 'γράφω, escribir'],
            ['6. ¿Qué significa aquí?', 'Traduce y comprueba con el contexto', '«ha sido escrito, está escrito»'],
          ],
          nota: 'Con práctica, las seis preguntas se responden en segundos. Al comienzo, escríbelas.'
        } }
      ],
      texto: [
        'Has visto las piezas del verbo griego. Ahora se trata de usarlas. Esta estación propone un método de seis preguntas para analizar cualquier forma verbal, y lo aplica a un versículo que resume el propósito del Evangelio de Juan.',
        { h: 'Las seis preguntas' },
        'Mira la tabla del panel. Las tres primeras preguntas buscan las marcas: el aumento o la reduplicación al comienzo, la marca de tiempo en el medio y la terminación al final. La cuarta mira el modo. La quinta quita todas esas piezas para encontrar el verbo del diccionario. Y la sexta vuelve al versículo: ¿qué significa esta forma aquí?',
        { h: 'Juan 20:31, verbo por verbo' },
        'γέγραπται: reduplicación γε-, sin -κ-, terminación -ται. Perfecto medio o pasivo, indicativo, tercera persona del singular, de γράφω. Como el sujeto es ταῦτα, «estas cosas», neutro plural, el verbo va en singular: «estas cosas han sido escritas», y siguen escritas.',
        'πιστεύητε: sin aumento; la vocal larga η en la terminación -ητε indica subjuntivo; presente activo, segunda persona del plural, de πιστεύω. Va después de ἵνα: «para que creáis». Algunos manuscritos traen aquí πιστεύσητε, aoristo. Con el presente, el propósito sería que los lectores sigan creyendo; con el aoristo, que lleguen a creer. Juan escribió para las dos cosas: para que crean y para que perseveren.',
        'ἐστιν: presente de εἰμί, «es». El contenido de la fe: que Jesús es el Cristo, el Hijo de Dios.',
        'πιστεύοντες: la marca -ντ- indica participio; presente activo, nominativo masculino plural, de πιστεύω. Es un participio adverbial: «creyendo», es decir, por medio de creer.',
        'ἔχητε: de nuevo la vocal larga, subjuntivo presente, segunda del plural, de ἔχω, después de ἵνα: «para que tengáis». ¿Qué cosa? ζωήν, acusativo, «vida». ¿Dónde? ἐν τῷ ὀνόματι αὐτοῦ, «en su nombre».',
        { h: 'De la forma al sentido' },
        'El análisis no es un fin en sí mismo. Al recorrer el versículo forma por forma, aparece su estructura: lo escrito está ahí para producir fe, y la fe para producir vida. Ese es el propósito de todo el Evangelio, y también de tu estudio.',
        { ejercicio: {
          pregunta: '¿Qué indica la η en la terminación de πιστεύητε?',
          opciones: [
            { t: 'Que es un aoristo pasivo.', ok: false, por_que: 'El aoristo pasivo tendría la marca -θη- y aumento: ἐπιστεύθητε.' },
            { t: 'Que es subjuntivo: la vocal de unión se alarga.', ok: true, por_que: 'πιστεύετε es indicativo o imperativo; πιστεύητε, con η, es subjuntivo, como corresponde después de ἵνα.' },
            { t: 'Que es un perfecto.', ok: false, por_que: 'El perfecto tendría reduplicación: πεπίστευκα.' }
          ],
          explicacion: 'Después de ἵνα, «para que», el verbo va en subjuntivo, que se reconoce por la vocal larga (ω, η).'
        } }
      ],
      pensar: 'Juan escribió «para que creáis… y para que creyendo, tengáis vida en su nombre». ¿Qué está produciendo en ti la lectura de la Escritura: información, o fe y vida?'
    }
  ];
  window.__GG.verbo = verbo;
})();
