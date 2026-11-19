/* Ruta IV. Palabras clave de la fe (ver el encabezado de parte1.js). Frecuencias por lema del Nestle 1904. */
(() => {
  const { G } = window.__GG;
  const palabras = [
    {
      id: 'errores', n: 'Estudiar una palabra sin caer en errores', ref: '2 Timoteo 2:15; Hechos 19:32',
      visual: [
        G('2 Timoteo 2:15', '2 Timoteo 2:15', '@@n1904:2ti/2/15', '@@n1904tr:2ti/2/15', '@@n1904t:2ti/2/15',
          ['procura con diligencia', 'a ti mismo', 'aprobado', 'presentar', 'al', 'Dios', 'obrero', 'que no tiene de qué avergonzarse', 'que traza bien', 'la', 'palabra', 'de la', 'verdad'],
          '@@2ti/2/15'),
        { tipo: 'tabla', titulo: 'Seis errores', tabla: {
          titulo: 'Seis errores comunes al estudiar una palabra griega',
          cab: ['Error', 'Ejemplo', 'Por qué es un error'],
          filas: [
            ['Creer que el origen de una palabra es su sentido', 'ἐκκλησία = «los llamados fuera»', 'En el siglo I significaba «asamblea»; Hechos 19:32 la usa para la turba de Éfeso'],
            ['Leer una palabra con un sentido moderno', 'δύναμις = «dinamita»', 'La dinamita se inventó en 1867; Pablo no pensaba en explosivos'],
            ['Meter todos los sentidos en cada uso', 'πνεῦμα = viento, aliento y espíritu a la vez', 'En cada lugar el contexto elige un sentido, salvo un juego de palabras claro'],
            ['Forzar diferencias entre sinónimos', 'λόγος = palabra escrita; ῥῆμα = palabra revelada', 'El Nuevo Testamento usa las dos casi igual (1 P 1:23-25)'],
            ['Exagerar la gramática', 'el aoristo = «una vez para siempre»', 'El aoristo presenta la acción como un todo; no dice si fue única'],
            ['Apelar al «griego original» contra todas las traducciones', '«En el griego dice otra cosa»', 'Si ninguna traducción seria lo muestra, casi siempre es un error'],
          ],
          nota: 'Basado en D. A. Carson, Exegetical Fallacies, y en la misma práctica de los traductores.'
        } }
      ],
      texto: [
        'Pablo le pide a Timoteo que sea un obrero que «usa bien la palabra de verdad». El verbo ὀρθοτομοῦντα significa literalmente «cortar derecho», como quien traza un camino recto o corta una pieza con precisión. Estudiar las palabras griegas de la Biblia es una de las mejores maneras de trazar bien. Pero también es una de las herramientas más mal usadas en la predicación. Esta estación prepara la ruta con seis advertencias.',
        { h: 'El origen no es el sentido' },
        'ἐκκλησία viene de ἐκ, «fuera», y καλέω, «llamar». Por eso se suele predicar que la iglesia es «los llamados fuera». La idea es bíblica, porque según 1 Pedro 2:9 Dios nos llamó de las tinieblas a su luz, pero no es lo que la palabra significaba. En el siglo I, ἐκκλησία era la asamblea de ciudadanos de una ciudad. En Hechos 19:32, Lucas llama ἐκκλησία a la multitud alborotada del teatro de Éfeso. El sentido de una palabra lo da su uso, no su etimología.',
        { h: 'Las palabras no viajan hacia atrás' },
        'Alfred Nobel llamó «dinamita» a su invento en 1867 tomando la palabra griega δύναμις. Pero eso no permite leer «dinamita» en Romanos 1:16. Sería como decir que el evangelio es «poder explosivo» porque una palabra moderna salió de la griega. Pablo no conocía los explosivos. δύναμις significa «poder, capacidad, milagro».',
        { h: 'Un sentido en cada lugar' },
        'Muchas palabras tienen varios sentidos. πνεῦμα puede ser «viento», «aliento» o «espíritu». En cada versículo el autor quiere decir uno, salvo que juegue a propósito con varios, como Jesús en Juan 3:8. Cargar todos los sentidos en cada aparición produce interpretaciones que el autor nunca pensó.',
        { h: 'Sinónimos y gramática' },
        'Los autores bíblicos, como todos, usan sinónimos para variar. No toda diferencia de palabra es una diferencia de doctrina: lo verás con λόγος y ῥῆμα, y con los verbos de amar en Juan 21. Y la gramática tampoco hace milagros: el aoristo no significa «de una vez para siempre», ni el presente «continuamente» en todos los casos.',
        { h: 'Con humildad' },
        'La sexta advertencia resume las demás. Cuando alguien dice «en el griego original dice…» algo que ninguna traducción seria muestra, lo más probable es que esté equivocado. Los traductores de la Reina-Valera y de las demás versiones conocían el griego mucho mejor que un curso básico. Usa lo que aprendes para entender sus decisiones, no para corregirlos a la ligera. Y nunca construyas una doctrina sobre una sola palabra: la doctrina se apoya en el conjunto de la Escritura.',
        { ejercicio: {
          pregunta: '¿Por qué es un error decir que δύναμις en Romanos 1:16 significa «dinamita»?',
          opciones: [
            { t: 'Porque δύναμις no tiene nada que ver con el poder.', ok: false, por_que: 'Sí significa poder. El error está en leerla con el sentido de una palabra moderna.' },
            { t: 'Porque la palabra moderna «dinamita» salió de la griega, pero el sentido no viaja hacia atrás.', ok: true, por_que: 'Es un anacronismo: Pablo no podía pensar en un invento de 1867.' },
            { t: 'Porque Pablo escribió en hebreo, no en griego.', ok: false, por_que: 'Romanos se escribió en griego.' }
          ],
          explicacion: 'El sentido de una palabra bíblica se busca en su uso en la época, no en sus descendientes modernos ni solo en su origen.'
        } }
      ],
      pensar: 'Pablo pide un obrero «que no tiene de qué avergonzarse». ¿Has repetido alguna vez una explicación del griego sin verificarla? ¿Cómo puedes estudiar con más cuidado de aquí en adelante?'
    },
    {
      id: 'amor', n: 'Amor: ἀγάπη, ἀγαπάω y φιλέω', ref: '1 Juan 4:8; Juan 21:15-17; Juan 3:35; Juan 5:20',
      visual: [
        G('1 Juan 4:8', '1 Juan 4:8', '@@n1904:1jn/4/8', '@@n1904tr:1jn/4/8', '@@n1904t:1jn/4/8',
          ['el', 'no', 'que ama', 'no', 'conoció', 'a', 'Dios', 'porque', 'el', 'Dios', 'amor', 'es'],
          '@@1jn/4/8'),
        { tipo: 'tabla', titulo: 'Juan 21', tabla: {
          titulo: 'Los verbos de amar en Juan 21:15-17',
          cab: ['Versículo', 'Jesús pregunta', 'Pedro responde', 'Jesús encarga'],
          filas: [
            ['21:15', 'ἀγαπᾷς με; ¿me amas?', 'φιλῶ σε, te amo', 'Βόσκε τὰ ἀρνία μου, apacienta mis corderos'],
            ['21:16', 'ἀγαπᾷς με; ¿me amas?', 'φιλῶ σε, te amo', 'Ποίμαινε τὰ προβάτιά μου, pastorea mis ovejas'],
            ['21:17', 'φιλεῖς με; ¿me amas?', 'φιλῶ σε, te amo', 'Βόσκε τὰ προβάτιά μου, apacienta mis ovejas'],
          ],
          nota: 'Frecuencias: ἀγάπη 116, ἀγαπάω 143, ἀγαπητός 61, φιλέω 25. La palabra ἔρως no aparece en el Nuevo Testamento.'
        } }
      ],
      texto: [
        'El Nuevo Testamento usa sobre todo dos familias de palabras para el amor. ἀγάπη, «amor», y el verbo ἀγαπάω, «amar», son las más frecuentes. φιλέω, «amar, querer», y φίλος, «amigo», aparecen menos. La palabra ἔρως, del amor de pareja, no aparece nunca.',
        { h: 'Dios es amor' },
        'En 1 Juan 4:8 está la frase más conocida: ὁ θεὸς ἀγάπη ἐστίν. Como viste en la ruta I, θεός tiene artículo y ἀγάπη no: Dios es el sujeto y «amor» describe su naturaleza. Juan saca una conclusión práctica: el que no ama, οὐκ ἔγνω τὸν θεόν, «no ha conocido a Dios». Conocer a Dios y amar van juntos.',
        { h: 'ἀγάπη no es un amor «divino» por definición' },
        'Muchos libros enseñan que ἀγάπη es siempre el amor divino, incondicional, y φιλέω un amor humano, de afecto. Hay algo de verdad: el Nuevo Testamento llenó la palabra ἀγάπη con el contenido del amor de Cristo (1 Co 13). Pero la palabra en sí no garantiza ese sentido. Los hombres «amaron más las tinieblas que la luz», con ἠγάπησαν (Jn 3:19), y Demas abandonó a Pablo «amando este mundo», con ἀγαπήσας (2 Ti 4:10). Lo que define el amor de Dios no es la palabra, sino la cruz: «en esto hemos conocido el amor, en que él puso su vida por nosotros» (1 Jn 3:16).',
        'Además, Juan usa los dos verbos para el amor del Padre al Hijo: ὁ πατὴρ ἀγαπᾷ τὸν υἱόν (Jn 3:35) y ὁ πατὴρ φιλεῖ τὸν υἱόν (Jn 5:20). No hay amor más alto que ese, y está dicho con las dos palabras.',
        { h: '¿Me amas?' },
        'Después de la resurrección, Jesús le pregunta tres veces a Pedro si lo ama. Las dos primeras usa ἀγαπάω; la tercera, φιλέω. Pedro responde siempre con φιλέω. ¿Hay una diferencia intencional?',
        { posturas: {
          titulo: 'ἀγαπάω y φιλέω en Juan 21:15-17',
          a: { n: 'Una diferencia intencional', t: 'Muchos predicadores y comentaristas ven un diálogo con matices: Jesús pregunta por un amor entregado y total (ἀγαπάω); Pedro, humillado por sus negaciones, no se atreve a prometer tanto y responde con un amor de afecto sincero (φιλέω). En la tercera pregunta Jesús baja al verbo de Pedro, y por eso Pedro se entristece.' },
          b: { n: 'Sinónimos usados para variar', t: 'Otros señalan que Juan alterna sinónimos en todo el pasaje: corderos y ovejas (ἀρνία, προβάτια), apacentar y pastorear (βόσκε, ποίμαινε), saber y conocer (οἶδας, γινώσκεις). Juan usa ἀγαπάω y φιλέω para el mismo amor del Padre al Hijo (Jn 3:35; 5:20). Y el texto dice que Pedro se entristeció porque le preguntó «la tercera vez», no por el cambio de verbo.' },
          c: 'Las dos lecturas coinciden en lo esencial: las tres preguntas recuerdan las tres negaciones de Pedro junto al fuego (Jn 18:17-27), y Jesús lo restaura con amor y le confía el cuidado de su rebaño. El amor a Cristo se demuestra cuidando a los que él ama.'
        } },
        { ejercicio: {
          pregunta: '¿Qué muestra que ἀγαπάω no significa siempre un amor divino y perfecto?',
          opciones: [
            { t: 'Que en Juan 3:19 los hombres «amaron más las tinieblas», con ἀγαπάω.', ok: true, por_que: 'El mismo verbo se usa para un amor desviado. El sentido lo da el contexto, no la palabra sola.' },
            { t: 'Que ἀγαπάω no aparece en el Nuevo Testamento.', ok: false, por_que: 'Aparece 143 veces.' },
            { t: 'Que ἀγάπη solo se usa para el amor entre esposos.', ok: false, por_que: 'Para el amor de pareja el griego tenía ἔρως, que el Nuevo Testamento no usa.' }
          ],
          explicacion: 'Lo que define el amor de Dios es lo que Dios hizo en Cristo, no una palabra griega.'
        } }
      ],
      pensar: 'Jesús no le pidió a Pedro que prometiera más, sino que cuidara sus ovejas. ¿A quién te está pidiendo Jesús que cuides como prueba de tu amor por él?'
    },
    {
      id: 'gracia', n: 'Gracia: χάρις', ref: 'Juan 1:16-17; Efesios 2:8; 1 Corintios 12:4',
      visual: [
        G('Juan 1:16', 'Juan 1:16', '@@n1904:jn/1/16', '@@n1904tr:jn/1/16', '@@n1904t:jn/1/16',
          ['porque', 'de', 'la', 'plenitud', 'de él', 'nosotros', 'todos', 'recibimos', 'y', 'gracia', 'sobre', 'gracia'],
          '@@jn/1/16'),
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de χάρις',
          cab: ['Palabra', 'Veces', 'Sentido', 'Ejemplo'],
          filas: [
            ['χάρις', '155', 'gracia, favor; gratitud', 'τῇ χάριτι ἐστε σεσῳσμένοι (Ef 2:8)'],
            ['χάρισμα', '17', 'don de gracia', 'διαιρέσεις χαρισμάτων, diversidad de dones (1 Co 12:4)'],
            ['χαρίζομαι', '23', 'dar gratuitamente; perdonar', 'χαρισάμενος ἡμῖν πάντα τὰ παραπτώματα (Col 2:13)'],
            ['εὐχαριστέω', '38', 'dar gracias', 'εὐχαριστῶ τῷ θεῷ μου (Ro 1:8)'],
            ['χαρά', '59', 'gozo', 'ὁ καρπὸς τοῦ πνεύματός ἐστιν ἀγάπη, χαρά (Gá 5:22)'],
          ],
          nota: 'De χάρις viene «eucaristía», «acción de gracias», y de χάρισμα, «carisma» y «carismático».'
        } }
      ],
      texto: [
        'χάρις aparece 155 veces en el Nuevo Testamento, casi cien de ellas en las cartas de Pablo. En el griego común significaba «favor», «encanto» y también «gratitud». En el Nuevo Testamento se convirtió en una de las palabras centrales del evangelio: el favor inmerecido de Dios hacia el pecador.',
        { h: 'Gracia sobre gracia' },
        'Juan 1:16 dice que de la plenitud del Verbo hecho carne todos hemos recibido χάριν ἀντὶ χάριτος. La preposición ἀντί significa «en lugar de»: una gracia en lugar de otra, una gracia tras otra, como las olas del mar que se suceden sin agotarse. La Reina-Valera traduce «gracia sobre gracia». El versículo siguiente explica: «la ley por medio de Moisés fue dada, pero la gracia y la verdad vinieron por medio de Jesucristo» (Jn 1:17).',
        'Fíjate en las formas de la tercera declinación: χάριν, acusativo, complemento de «recibimos», y χάριτος, genitivo, después de ἀντί. El genitivo muestra la raíz χαριτ-.',
        { h: 'Gracia que salva y gracia que capacita' },
        'En Efesios 2:8 la gracia es el medio de la salvación: τῇ χάριτι, en dativo. Es un don, no un salario: si fuera por obras, ya no sería gracia (Ro 11:6). Pero la gracia no se agota en el perdón. Pablo dice que la gracia de Dios le dio fuerzas para trabajar más que todos (1 Co 15:10), y que la gracia nos va enseñando a vivir sobria, justa y piadosamente (Tit 2:11-12). La gracia salva y también transforma.',
        { h: 'Los dones de la gracia' },
        'De χάρις sale χάρισμα, «don de gracia», la palabra que Pablo usa para los dones del Espíritu en 1 Corintios 12. Los dones espirituales no son premios para los más santos, sino regalos de la gracia de Dios para edificar a la iglesia (1 Co 12:7). El Espíritu los reparte «como él quiere» (1 Co 12:11), y siguen vigentes para la iglesia de hoy.',
        { h: 'Una advertencia' },
        'Es cierto que χάρις, χαρά, «gozo», y χάρισμα vienen de la misma raíz. Es una buena ilustración: la gracia produce gozo y da dones. Pero no conviene construir una enseñanza sobre esa conexión, como si cada vez que aparece «gracia» hubiera que entender «gozo». Cada palabra tiene su propio uso.',
        { ejercicio: {
          pregunta: '¿Qué significa la preposición ἀντί en χάριν ἀντὶ χάριτος?',
          opciones: [
            { t: '«En lugar de»: una gracia que sucede a otra.', ok: true, por_que: 'ἀντί con genitivo significa «en lugar de». La imagen es de una gracia tras otra.' },
            { t: '«Contra»: una gracia que se opone a otra.', ok: false, por_que: 'La gracia no se opone a la gracia. «Contra» se diría con κατά.' },
            { t: '«Sin»: una vida sin gracia.', ok: false, por_que: '«Sin» se diría χωρίς. El versículo habla de abundancia.' }
          ],
          explicacion: 'ἀντί + genitivo: «en lugar de, a cambio de». En Juan 1:16 describe una gracia que nunca se agota.'
        } }
      ],
      pensar: 'De su plenitud todos recibimos gracia sobre gracia. ¿Cuáles son las gracias que Dios te ha dado este año? Haz una lista y dale gracias, εὐχαριστῶ, por cada una.'
    },
    {
      id: 'fe', n: 'Fe y creer: πίστις y πιστεύω', ref: 'Hebreos 11:1; Juan 3:16; Santiago 2:19',
      visual: [
        G('Hebreos 11:1', 'Hebreos 11:1', '@@n1904:he/11/1', '@@n1904tr:he/11/1', '@@n1904t:he/11/1',
          ['es', 'pues', 'la fe', 'de lo que se espera', 'certeza', 'de cosas', 'convicción', 'no', 'que se ven'],
          '@@he/11/1'),
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de πίστις',
          cab: ['Palabra', 'Veces', 'Sentido', 'Construcción frecuente'],
          filas: [
            ['πίστις', '243', 'fe, confianza; fidelidad', 'ἐκ πίστεως, por la fe'],
            ['πιστεύω', '241', 'creer, confiar', 'πιστεύω εἰς αὐτόν, creo en él'],
            ['πιστός', '67', 'fiel; creyente', 'πιστὸς ὁ θεός, fiel es Dios (1 Co 1:9)'],
            ['ἀπιστία', '11', 'incredulidad', 'διὰ τὴν ἀπιστίαν αὐτῶν (Mt 13:58)'],
            ['ἄπιστος', '23', 'incrédulo', 'μὴ γίνου ἄπιστος, no seas incrédulo (Jn 20:27)'],
          ],
          nota: 'En español usamos dos raíces, «fe» y «creer». En griego son la misma: πίστ-.'
        } }
      ],
      texto: [
        'En español decimos «fe» y «creer» con dos raíces distintas, y eso puede hacernos pensar que son cosas diferentes. En griego son la misma familia: πίστις, «fe», y πιστεύω, «creer», casi empatadas en frecuencia, con 243 y 241 apariciones. Tener fe es creer, y creer es tener fe.',
        { h: 'Creer en' },
        'πιστεύω se construye de varias maneras. Con dativo significa creerle a alguien, aceptar lo que dice: «creyó Abraham a Dios» (Ro 4:3). Con ὅτι, creer que algo es verdad: «para que creáis que Jesús es el Cristo» (Jn 20:31). Pero la construcción más característica del Nuevo Testamento es πιστεύω εἰς, con acusativo: «creer en», literalmente «creer hacia» alguien. Aparece decenas de veces en el Evangelio de Juan, como en Juan 3:16: ὁ πιστεύων εἰς αὐτόν. La preposición εἰς, que expresa movimiento hacia dentro, sugiere una fe que se dirige a una persona y descansa en ella. Esta construcción casi no se usaba en el griego anterior; los cristianos la hicieron suya.',
        'Por eso la fe bíblica no es solo aceptar datos. También los demonios creen que Dios es uno, y tiemblan (Stg 2:19). La fe que salva es confianza personal en Cristo.',
        { h: 'La certeza de lo que se espera' },
        'Hebreos 11:1 es una de las descripciones más conocidas de la fe. No tiene verbo principal más que ἔστιν, «es», al comienzo: la fe es ὑπόστασις de lo que se espera y ἔλεγχος de lo que no se ve. ὑπόστασις significa «lo que está debajo», el fundamento, y también se usaba en documentos de propiedad: la fe es como el título que garantiza lo prometido. ἔλεγχος es la prueba que convence. Los dos participios, ἐλπιζομένων y βλεπομένων, están en presente y en voz pasiva: «cosas que se esperan», «cosas que se ven».',
        { h: 'Fe y fidelidad' },
        'πίστις puede significar también «fidelidad», sobre todo cuando se habla de Dios: ¿acaso la incredulidad de algunos anula «la fidelidad de Dios», τὴν πίστιν τοῦ θεοῦ (Ro 3:3)? La fe del creyente se apoya en la fidelidad de Dios, y la fe verdadera produce fidelidad: el fruto del Espíritu incluye πίστις, que la Reina-Valera traduce «fe» (Gá 5:22).',
        { ejercicio: {
          pregunta: '¿Qué sugiere la construcción πιστεύω εἰς αὐτόν, «creer en él»?',
          opciones: [
            { t: 'Una fe que solo acepta datos acerca de Cristo.', ok: false, por_que: 'Para aceptar un dato bastaría πιστεύω ὅτι. Los demonios creen datos y tiemblan.' },
            { t: 'Una fe personal que se dirige a Cristo y descansa en él.', ok: true, por_que: 'εἰς expresa movimiento hacia: la fe se dirige a una persona.' },
            { t: 'Una fe que no necesita conocer a Cristo.', ok: false, por_que: 'La fe bíblica tiene contenido: Jesús es el Cristo, el Hijo de Dios.' }
          ],
          explicacion: 'La fe que salva incluye conocer, aceptar y, sobre todo, confiar personalmente en Cristo.'
        } }
      ],
      pensar: 'La fe es la certeza de lo que se espera. ¿Qué promesa de Dios estás esperando hoy? ¿Descansa tu confianza en la fidelidad de quien la prometió?'
    },
    {
      id: 'justicia', n: 'Justicia y justificar: δικαιοσύνη y δικαιόω', ref: 'Romanos 3:24; Romanos 4:5; Juan 15:25',
      visual: [
        G('Romanos 3:24', 'Romanos 3:24', '@@n1904:ro/3/24', '@@n1904tr:ro/3/24', '@@n1904t:ro/3/24',
          ['siendo justificados', 'gratuitamente', 'por la', 'de él', 'gracia', 'mediante', 'la', 'redención', 'la (que es)', 'en', 'Cristo', 'Jesús'],
          '@@ro/3/24'),
        { tipo: 'tabla', titulo: 'La familia', tabla: {
          titulo: 'La familia de δίκη, «justicia»',
          cab: ['Palabra', 'Veces', 'Sentido'],
          filas: [
            ['δίκαιος', '79', 'justo'],
            ['δικαιοσύνη', '91', 'justicia'],
            ['δικαιόω', '39', 'justificar, declarar justo'],
            ['δικαίωμα', '10', 'ordenanza; acto de justicia'],
            ['ἄδικος, ἀδικία', '12, 25', 'injusto, injusticia'],
          ],
          nota: 'En griego, «justo», «justicia» y «justificar» son una sola familia. El español conserva la relación; otras lenguas, como el inglés, la pierden.'
        } }
      ],
      texto: [
        'δικαιοσύνη, «justicia», y δικαιόω, «justificar», son palabras centrales de Romanos y Gálatas. Las dos vienen de δίκαιος, «justo», como en español «justicia» y «justificar» vienen de «justo». Esta familia describe lo que es recto ante Dios y cómo un pecador llega a estar bien con él.',
        { h: 'Justificar es declarar justo' },
        'En el uso bíblico, δικαιόω no significa «hacer justo» en el sentido de cambiar el carácter, sino «declarar justo», como un juez que absuelve. Es un término de tribunal. La prueba está en que Dios «justifica al impío» (Ro 4:5): no lo declara justo porque ya lo sea, sino porque Cristo pagó por él. El cambio de vida viene también, por obra del Espíritu, y la Biblia lo llama santificación; pero la justificación es la sentencia de Dios a favor del que cree.',
        { h: 'Gratuitamente' },
        'Romanos 3:24 lo dice con tres expresiones. δικαιούμενοι, participio presente pasivo: «siendo justificados»; la pasiva indica que es Dios quien justifica. δωρεάν, «gratuitamente», un adverbio que viene de δωρεά, «regalo». Y τῇ αὐτοῦ χάριτι, «por su gracia», en dativo de medio. El precio no lo paga el pecador: lo pagó Cristo, διὰ τῆς ἀπολυτρώσεως, «mediante la redención», el rescate pagado para liberar a un esclavo.',
        'δωρεάν aparece también en una frase sorprendente: «sin causa me aborrecieron» (Jn 15:25), Ἐμίσησάν με δωρεάν. Cristo fue odiado «gratuitamente», sin motivo; y nosotros somos justificados «gratuitamente», sin mérito. Es la misma palabra.',
        { h: 'La justicia de Dios' },
        'La expresión δικαιοσύνη θεοῦ, «la justicia de Dios» (Ro 1:17; 3:21), tiene un genitivo que se ha entendido de varias maneras: la justicia que Dios es y muestra al ser fiel a sus promesas, y la justicia que Dios da al que cree. Las dos ideas están en Romanos: Dios es justo, y es «el que justifica al que es de la fe de Jesús» (Ro 3:26). Ninguna de las dos lecturas permite pensar que el ser humano se justifica a sí mismo.',
        { ejercicio: {
          pregunta: '¿Qué significa δικαιόω en Romanos 3:24 y 4:5?',
          opciones: [
            { t: 'Declarar justo, como un juez que absuelve.', ok: true, por_que: 'Dios «justifica al impío»: lo declara justo por la obra de Cristo.' },
            { t: 'Hacer justo por las buenas obras propias.', ok: false, por_que: 'Pablo dice que es «gratuitamente, por su gracia», no por obras.' },
            { t: 'Juzgar y condenar.', ok: false, por_que: 'Condenar es κατακρίνω. Justificar es lo contrario: absolver.' }
          ],
          explicacion: 'La justificación es la declaración de Dios a favor del que cree. La santificación, la transformación de la vida, es su fruto.'
        } }
      ],
      pensar: 'Fuiste justificado gratuitamente, sin mérito, porque Cristo fue aborrecido gratuitamente, sin causa. ¿Cómo cambia esto la manera en que tratas a quienes no lo merecen?'
    },
    {
      id: 'iglesia', n: 'Iglesia: ἐκκλησία', ref: 'Mateo 16:18; Hechos 19:32; Hechos 7:38',
      visual: [
        G('Mateo 16:18', 'Mateo 16:18', '@@n1904:mt/16/18', '@@n1904tr:mt/16/18', '@@n1904t:mt/16/18',
          ['y yo', 'también', 'a ti', 'digo', 'que', 'tú', 'eres', 'Pedro', 'y', 'sobre', 'esta', 'la', 'roca', 'edificaré', 'de mí', 'la', 'iglesia', 'y', 'las puertas', 'del Hades', 'no', 'prevalecerán', 'contra ella'],
          '@@mt/16/18'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Los usos de ἐκκλησία (114 veces)',
          cab: ['Uso', 'Ejemplo'],
          filas: [
            ['Asamblea de una ciudad', 'La asamblea de Éfeso (Hch 19:32, 39, 41)'],
            ['El pueblo de Israel reunido', 'La congregación en el desierto (Hch 7:38)'],
            ['Una iglesia local', 'τῇ ἐκκλησίᾳ τοῦ θεοῦ τῇ οὔσῃ ἐν Κορίνθῳ (1 Co 1:2)'],
            ['Una iglesia que se reúne en una casa', 'τὴν κατ’ οἶκον αὐτῶν ἐκκλησίαν (Ro 16:5)'],
            ['Todo el pueblo de Dios', 'Cristo amó a la iglesia (Ef 5:25)'],
          ],
          nota: 'En la Septuaginta, ἐκκλησία traduce a menudo el hebreo קָהָל, qahal, la asamblea de Israel.'
        } }
      ],
      texto: [
        'Como viste al comienzo de esta ruta, ἐκκλησία no significaba «los llamados fuera» en el uso del siglo I, sino «asamblea». ¿Por qué entonces los cristianos eligieron esa palabra para nombrarse?',
        { h: 'La asamblea de Dios' },
        'La respuesta está en la Biblia griega que leían. En la Septuaginta, ἐκκλησία traduce muchas veces la palabra hebrea qahal, la asamblea de Israel reunida delante de Dios en el Sinaí y en las grandes fiestas. Esteban llama ἐκκλησία a Israel en el desierto (Hch 7:38). Al llamarse ἐκκλησία τοῦ θεοῦ, «la iglesia de Dios», los creyentes se reconocían como el pueblo que Dios reúne, ahora en torno a Cristo.',
        'La palabra se usa para una iglesia local, como la de Corinto; para la que se reúne en una casa; y para todo el pueblo de Dios de todos los tiempos, el cuerpo de Cristo. Nunca designa un edificio: el templo de piedra no es la iglesia. La iglesia son las personas.',
        { h: 'Mi iglesia' },
        'Mateo 16:18 es la primera aparición de ἐκκλησία en el Nuevo Testamento. Jesús dice οἰκοδομήσω μου τὴν ἐκκλησίαν, «edificaré mi iglesia». El verbo está en futuro: la iglesia nacería después, con la venida del Espíritu en Pentecostés. Y el pronombre μου, «mía», está adelantado y enfático: es su iglesia, no la de Pedro ni la de nadie más.',
        'Jesús juega con dos palabras: Πέτρος, «Pedro», nombre masculino que significa «piedra», y πέτρα, femenino, «roca, peña». ¿Qué es la roca sobre la que Cristo edifica?',
        { posturas: {
          titulo: '«Sobre esta roca» (Mateo 16:18)',
          a: { n: 'La confesión de Pedro, o Cristo mismo', t: 'Muchos intérpretes evangélicos y pentecostales entienden que la roca es la verdad que Pedro acaba de confesar, «Tú eres el Cristo, el Hijo del Dios viviente» (Mt 16:16), o Cristo mismo, la piedra angular (1 Co 3:11; 1 P 2:6-8). El cambio de Πέτρος a πέτρα marcaría la diferencia entre el apóstol y el fundamento.' },
          b: { n: 'Pedro como apóstol fundador', t: 'Otros evangélicos entienden que la roca es Pedro mismo, como primer confesor y primer apóstol que abrió la puerta del evangelio a judíos y gentiles (Hch 2; 10), dentro del fundamento de los apóstoles y profetas, con Cristo como piedra angular (Ef 2:20). Esto no implica una sucesión de autoridad sobre toda la iglesia.' },
          c: 'Ninguna de las dos lecturas apoya la doctrina de la Iglesia católica, que ve en este versículo el fundamento del papado como sucesión de Pedro en el obispo de Roma (Catecismo, 881-882). El Nuevo Testamento no habla de sucesores de Pedro, y Pedro mismo se llama «anciano también con ellos» (1 P 5:1). El fundamento de la iglesia es Cristo.'
        } },
        { ejercicio: {
          pregunta: '¿Qué significaba ἐκκλησία en el griego común del siglo I?',
          opciones: [
            { t: 'Un edificio religioso.', ok: false, por_que: 'ἐκκλησία nunca designa un edificio en el Nuevo Testamento.' },
            { t: 'Una asamblea, un grupo de personas reunidas.', ok: true, por_que: 'Lucas la usa incluso para la asamblea alborotada de Éfeso.' },
            { t: 'Un grupo secreto de personas apartadas del mundo.', ok: false, por_que: 'La palabra describía asambleas públicas, como la de los ciudadanos de una ciudad.' }
          ],
          explicacion: 'La iglesia es la asamblea del pueblo de Dios reunida en torno a Cristo: personas, no paredes.'
        } }
      ],
      pensar: 'Jesús dijo «mi iglesia». Si la iglesia es suya, ¿cómo cambia eso tu manera de servir en tu congregación y de hablar de ella?'
    },
    {
      id: 'palabra', n: 'Palabra: λόγος y ῥῆμα', ref: 'Romanos 10:17; 1 Pedro 1:23-25; Efesios 6:17',
      visual: [
        G('Romanos 10:17', 'Romanos 10:17', '@@n1904:ro/10/17', '@@n1904tr:ro/10/17', '@@n1904t:ro/10/17',
          ['así que', 'la', 'fe', 'de', 'el oír', 'el', 'y', 'oír', 'por medio de', 'la palabra', 'de Cristo'],
          '@@ro/10/17'),
        { tipo: 'tabla', titulo: 'Comparación', tabla: {
          titulo: 'λόγος y ῥῆμα en los mismos contextos',
          cab: ['Pasaje', 'Con λόγος', 'Con ῥῆμα'],
          filas: [
            ['1 Pedro 1:23-25', '«siendo renacidos… por la palabra de Dios», διὰ λόγου (v. 23)', '«mas la palabra del Señor permanece», τὸ ῥῆμα (v. 25)'],
            ['La Escritura', 'τὸν λόγον τοῦ θεοῦ (Mr 7:13)', 'ῥῆμα θεοῦ, la espada del Espíritu (Ef 6:17)'],
            ['Lo que Jesús dice', 'τὸν ἐμὸν λόγον, mi palabra (Jn 8:51)', 'τὰ ῥήματα ἃ ἐγὼ λελάληκα, las palabras que yo os he hablado (Jn 6:63)'],
            ['El mensaje predicado', 'κήρυξον τὸν λόγον, predica la palabra (2 Ti 4:2)', 'τὸ ῥῆμα τῆς πίστεως ὃ κηρύσσομεν (Ro 10:8)'],
          ],
          nota: 'Frecuencias: λόγος 331, ῥῆμα 67. Las dos significan «palabra, dicho, mensaje»; ῥῆμα también «asunto, cosa».'
        } }
      ],
      texto: [
        'El Nuevo Testamento tiene dos palabras para «palabra»: λόγος, mucho más frecuente, con 331 apariciones, y ῥῆμα, con 67. λόγος es la palabra con que Juan llama a Cristo: ὁ λόγος, «el Verbo» (Jn 1:1). Las dos significan «palabra, dicho, mensaje».',
        { h: 'La enseñanza de la «palabra rhema»' },
        'En la segunda mitad del siglo XX se difundió, sobre todo desde el movimiento de la fe o de la confesión positiva, una enseñanza sobre la diferencia entre estas dos palabras. Maestros como Kenneth Hagin y Kenneth Copeland enseñaron que λόγος es la palabra escrita, general, y ῥῆμα es una palabra específica que Dios «vivifica» para una persona, y que al confesarla con fe se obtiene lo que se declara: sanidad, prosperidad o cualquier promesa aplicada al propio caso. Muchos creyentes sinceros aprendieron esta distinción en sus iglesias.',
        'El problema es que el Nuevo Testamento no hace esa distinción. 1 Pedro 1:23-25 lo muestra con claridad: en el versículo 23 los creyentes renacen διὰ λόγου θεοῦ, «por la palabra de Dios»; en el 25, citando Isaías 40:8, dice que τὸ ῥῆμα κυρίου μένει, «la palabra del Señor permanece»; y termina con ῥῆμα otra vez: «esta es la palabra que por el evangelio os ha sido anunciada» (1 P 1:25). Pedro usa las dos para la misma Palabra predicada. La espada del Espíritu es ῥῆμα θεοῦ (Ef 6:17), y la Escritura es también ὁ λόγος τοῦ θεοῦ (Mr 7:13). La tabla del panel muestra otros pares.',
        { h: 'La fe viene por el oír' },
        'Romanos 10:17 es uno de los textos usados para la enseñanza de la «palabra rhema»: ἡ πίστις ἐξ ἀκοῆς, ἡ δὲ ἀκοὴ διὰ ῥήματος Χριστοῦ, «la fe es por el oír, y el oír, por la palabra de Dios». Pero el contexto habla de la predicación del evangelio: «¿cómo creerán en aquel de quien no han oído? ¿Y cómo oirán sin haber quien les predique?» (Ro 10:14). El ῥῆμα Χριστοῦ es el mensaje acerca de Cristo que los predicadores anuncian, «la palabra de fe que predicamos» (Ro 10:8). La fe nace cuando alguien oye el evangelio, no cuando repite una frase para obtener algo. En lugar de «Cristo», que trae el texto griego, la Reina-Valera sigue los manuscritos que dicen «de Dios».',
        { h: 'Lo que sí enseña la Escritura' },
        'Dios sigue hablando hoy, por su Palabra y por su Espíritu, y la iglesia cree en los dones de revelación, como la profecía, que se juzgan siempre por la Escritura (1 Co 14:29). También es bíblico confesar con la boca lo que se cree en el corazón (Ro 10:9-10). Lo que no es bíblico es convertir una diferencia inexistente entre dos palabras griegas en un método para obtener resultados. La fe descansa en Dios y en su voluntad, no en la fuerza de nuestras palabras.',
        { ejercicio: {
          pregunta: '¿Qué muestra 1 Pedro 1:23-25 sobre λόγος y ῥῆμα?',
          opciones: [
            { t: 'Que λόγος es la Biblia escrita y ῥῆμα una revelación personal distinta.', ok: false, por_que: 'Pedro usa las dos palabras para el mismo mensaje del evangelio predicado.' },
            { t: 'Que el apóstol usa las dos palabras para la misma Palabra de Dios.', ok: true, por_que: 'El versículo 23 dice λόγου y el 25 ῥῆμα, y ambos hablan del evangelio anunciado.' },
            { t: 'Que ῥῆμα es más poderosa que λόγος.', ok: false, por_que: 'El texto no compara su poder: dice que la Palabra de Dios permanece para siempre.' }
          ],
          explicacion: 'λόγος y ῥῆμα son sinónimos en el Nuevo Testamento. Distinguirlas como dos clases de palabra de Dios es forzar el griego.'
        } }
      ],
      pensar: 'La fe viene por oír el mensaje de Cristo. ¿Qué lugar ocupa en tu semana oír la Palabra predicada y leída, y a quién podrías anunciársela tú?'
    },
    {
      id: 'espiritu-poder', n: 'Espíritu y poder: πνεῦμα y δύναμις', ref: 'Juan 3:8; Hechos 1:8; Romanos 15:19',
      visual: [
        G('Juan 3:8', 'Juan 3:8', '@@n1904:jn/3/8', '@@n1904tr:jn/3/8', '@@n1904t:jn/3/8',
          ['el', 'viento (espíritu)', 'donde', 'quiere', 'sopla', 'y', 'el', 'sonido', 'de él', 'oyes', 'pero', 'no', 'sabes', 'de dónde', 'viene', 'y', 'adónde', 'va', 'así', 'es', 'todo', 'el', 'nacido', 'de', 'el', 'Espíritu'],
          '@@jn/3/8'),
        { tipo: 'tabla', titulo: 'Sentidos', tabla: {
          titulo: 'Los sentidos de πνεῦμα (379 veces) y δύναμις (119 veces)',
          cab: ['Palabra', 'Sentido', 'Ejemplo'],
          filas: [
            ['πνεῦμα', 'viento', 'τὸ πνεῦμα ὅπου θέλει πνεῖ (Jn 3:8)'],
            ['πνεῦμα', 'aliento, vida', 'παρέδωκεν τὸ πνεῦμα, entregó el espíritu (Jn 19:30)'],
            ['πνεῦμα', 'el espíritu humano', 'τῷ πνεύματι ἡμῶν, a nuestro espíritu (Ro 8:16)'],
            ['πνεῦμα', 'el Espíritu Santo', 'τὸ πνεῦμα τὸ ἅγιον (Lc 3:22)'],
            ['δύναμις', 'poder, capacidad', 'λήμψεσθε δύναμιν, recibiréis poder (Hch 1:8)'],
            ['δύναμις', 'milagro, obra poderosa', 'δυνάμεις, milagros (Mt 11:20)'],
          ],
          nota: 'En hebreo pasa lo mismo: רוּחַ, rúaj, es viento, aliento y espíritu.'
        } }
      ],
      texto: [
        'πνεῦμα viene del verbo πνέω, «soplar». Por eso significa «viento», «aliento» y «espíritu». Es la misma riqueza que tiene el hebreo רוּחַ. En cada lugar, el contexto dice cuál es el sentido.',
        { h: 'El viento sopla donde quiere' },
        'En Juan 3:8 Jesús juega a propósito con los sentidos de la palabra. Empieza: τὸ πνεῦμα ὅπου θέλει πνεῖ, «el viento sopla de donde quiere»; usa πνεῦμα y el verbo πνεῖ, de la misma raíz. Y termina: «así es todo aquel que es nacido del Espíritu», ἐκ τοῦ πνεύματος. Nicodemo no puede ver el viento, pero oye su sonido y ve sus efectos. Así obra el Espíritu en el nuevo nacimiento: no se le controla ni se le ve, pero se reconocen sus efectos.',
        'Fíjate también en φωνήν, que la Reina-Valera traduce «sonido»: es la misma palabra que significa «voz». Otro juego posible: el viento tiene sonido; el Espíritu tiene voz.',
        { h: 'El Espíritu Santo' },
        'Cuando πνεῦμα se refiere al Espíritu Santo, el Nuevo Testamento suele añadir τὸ ἅγιον, «el santo», o usar el artículo, o el contexto lo deja claro. Como πνεῦμα es neutro, los pronombres que lo siguen suelen ser neutros. Pero eso no hace del Espíritu una «cosa»: es una regla de concordancia gramatical. Juan, al hablar del Consolador, usa a veces el pronombre masculino ἐκεῖνος, «él» (Jn 14:26; 16:13-14), y el Espíritu enseña, recuerda, guía, intercede y se entristece (Ef 4:30). Es una persona divina.',
        { h: 'Recibiréis poder' },
        'δύναμις significa «poder» y, en plural, muchas veces «milagros», obras de poder. Jesús prometió a sus discípulos: λήμψεσθε δύναμιν ἐπελθόντος τοῦ ἁγίου πνεύματος ἐφ’ ὑμᾶς, «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo» (Hch 1:8). Ese poder es para ser testigos. Pablo habla de su ministerio hecho «con potencia de señales y prodigios, en el poder del Espíritu de Dios» (Ro 15:19).',
        'No es necesario decir «dinamita» para hablar de este poder. El Nuevo Testamento ya muestra su grandeza: es el poder que resucitó a Cristo de los muertos (Ef 1:19-20), el que hace del evangelio salvación para todo el que cree (Ro 1:16), y el que sigue obrando hoy por el Espíritu en la iglesia, con señales, dones y vidas transformadas.',
        { ejercicio: {
          pregunta: '¿Por qué Juan 3:8 usa πνεῦμα al comienzo y al final del versículo?',
          opciones: [
            { t: 'Por error del copista.', ok: false, por_que: 'La repetición es intencional y la confirma el verbo πνεῖ, «sopla».' },
            { t: 'Porque Jesús juega con los sentidos de la palabra: viento y Espíritu.', ok: true, por_que: 'El viento invisible, cuyo efecto se percibe, ilustra la obra del Espíritu en el nuevo nacimiento.' },
            { t: 'Porque en griego no existe otra palabra para «viento».', ok: false, por_que: 'Existe ἄνεμος, que aparece 31 veces. Jesús eligió πνεῦμα para el juego de palabras.' }
          ],
          explicacion: 'En Juan 3:8 el juego de palabras es claro y deliberado. En otros textos, el contexto elige un solo sentido.'
        } }
      ],
      pensar: 'El poder prometido en Hechos 1:8 es para ser testigos. ¿Estás buscando la plenitud del Espíritu para hablar de Cristo a otros?'
    },
    {
      id: 'salvacion', n: 'Salvación: σῴζω y σωτηρία', ref: 'Marcos 5:34; Romanos 10:9; Santiago 5:15',
      visual: [
        G('Marcos 5:34', 'Marcos 5:34', '@@n1904:mr/5/34', '@@n1904tr:mr/5/34', '@@n1904t:mr/5/34',
          ['él', 'y', 'dijo', 'a ella', 'hija', 'la', 'fe', 'de ti', 'ha salvado (sanado)', 'a ti', 've', 'en', 'paz', 'y', 'queda', 'sana', 'de', 'el', 'azote', 'de ti'],
          '@@mr/5/34'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Los usos de σῴζω (106 veces)',
          cab: ['Sentido', 'Ejemplo', 'Reina-Valera'],
          filas: [
            ['Librar de un peligro', 'Κύριε, σῶσον, ἀπολλύμεθα (Mt 8:25)', '«¡Señor, sálvanos, que perecemos!»'],
            ['Sanar', 'ἡ πίστις σου σέσωκέν σε (Mr 5:34)', '«tu fe te ha hecho salva»'],
            ['Salvar del pecado', 'σώσει τὸν λαὸν αὐτοῦ ἀπὸ τῶν ἁμαρτιῶν (Mt 1:21)', '«salvará a su pueblo de sus pecados»'],
            ['La salvación futura', 'ὁ δὲ ὑπομείνας εἰς τέλος, οὗτος σωθήσεται (Mt 24:13)', '«el que persevere hasta el fin, éste será salvo»'],
          ],
          nota: 'Familia: σωτηρία, salvación (46); σωτήρ, Salvador (24). El nombre Ἰησοῦς significa «Jehová salva».'
        } }
      ],
      texto: [
        'σῴζω significa «salvar», pero su sentido es más amplio que el que solemos darle. Es librar de un peligro, rescatar, sanar, preservar. En el Nuevo Testamento abarca todo lo que Dios hace para rescatar al ser humano.',
        { h: 'Tu fe te ha hecho salva' },
        'La mujer que padecía flujo de sangre tocó el manto de Jesús y fue sanada. Jesús le dijo: ἡ πίστις σου σέσωκέν σε. El verbo es σῴζω, en perfecto: «te ha salvado», y el resultado permanece. La Reina-Valera traduce «tu fe te ha hecho salva». Y añade: ἴσθι ὑγιὴς ἀπὸ τῆς μάστιγός σου, «queda sana de tu azote». Los evangelistas usan σῴζω muchas veces para las sanidades, como en Marcos 6:56 y 10:52. Santiago también: «la oración de fe salvará al enfermo» (Stg 5:15).',
        'Fíjate en el vocativo: Θυγάτηρ, «hija». Una mujer que durante doce años había sido impura y excluida es llamada «hija» por Jesús. La salvación no fue solo física: fue restaurada en su relación con Dios y con su pueblo, y despedida εἰς εἰρήνην, «en paz».',
        { h: 'Una salvación completa' },
        'Esta amplitud de σῴζω no significa que salvación y sanidad sean lo mismo, ni que todo enfermo que no es sanado carezca de fe. Significa que la obra de Cristo alcanza a la persona entera. El centro es la salvación del pecado: «él salvará a su pueblo de sus pecados» (Mt 1:21). Pero la misma obra de la cruz incluye la sanidad del cuerpo, que Dios concede hoy según su voluntad, y que será completa en la resurrección. Por eso la iglesia sigue orando por los enfermos con fe.',
        { h: 'Pasado, presente y futuro' },
        'σῴζω aparece en todos los tiempos. En pasado: «por gracia sois salvos», σεσῳσμένοι, perfecto (Ef 2:8). En presente: τοῖς σῳζομένοις, «a los que se salvan» (1 Co 1:18), un proceso en curso. En futuro: «serás salvo», σωθήσῃ (Ro 10:9), y «el que persevere hasta el fin, éste será salvo» (Mt 24:13). Dios nos salvó del castigo del pecado, nos está librando de su poder y nos librará de su presencia cuando Cristo vuelva.',
        { ejercicio: {
          pregunta: '¿Qué muestra el uso de σῴζω en Marcos 5:34?',
          opciones: [
            { t: 'Que σῴζω solo se refiere al perdón de los pecados.', ok: false, por_que: 'En este versículo se refiere a la sanidad de la mujer, además de su restauración.' },
            { t: 'Que σῴζω incluye también la sanidad y la restauración de la persona entera.', ok: true, por_que: 'Jesús usa σῴζω para la sanidad física y despide a la mujer en paz.' },
            { t: 'Que la mujer se sanó a sí misma con su fe, sin Jesús.', ok: false, por_que: 'La fe la unió a Jesús; el poder salió de él (Mr 5:30).' }
          ],
          explicacion: 'σῴζω abarca el rescate de toda la persona. El centro es la salvación del pecado, y la obra de Cristo alcanza también al cuerpo.'
        } }
      ],
      pensar: 'Jesús llamó «hija» a una mujer excluida. ¿A quién de tu entorno, excluido o marginado, puedes acercar a Cristo para que experimente su salvación completa?'
    },
    {
      id: 'arrepentimiento', n: 'Arrepentimiento: μετάνοια', ref: 'Marcos 1:15; 2 Corintios 7:10; Hechos 26:20',
      visual: [
        G('Marcos 1:15', 'Marcos 1:15', '@@n1904:mr/1/15', '@@n1904tr:mr/1/15', '@@n1904t:mr/1/15',
          ['y', 'diciendo', 'que', 'se ha cumplido', 'el', 'tiempo', 'y', 'se ha acercado', 'el', 'reino', 'de', 'Dios', 'arrepentíos', 'y', 'creed', 'en', 'el', 'evangelio'],
          '@@mr/1/15'),
        { tipo: 'tabla', titulo: 'Palabras', tabla: {
          titulo: 'Palabras del arrepentimiento y la conversión',
          cab: ['Palabra', 'Veces', 'Sentido', 'Ejemplo'],
          filas: [
            ['μετανοέω', '34', 'arrepentirse, cambiar de mente y de rumbo', 'μετανοεῖτε (Mr 1:15)'],
            ['μετάνοια', '22', 'arrepentimiento', 'frutos dignos de arrepentimiento (Mt 3:8)'],
            ['ἐπιστρέφω', '36', 'volverse, convertirse', 'arrepentíos y convertíos (Hch 3:19)'],
            ['λύπη', '16', 'tristeza', 'la tristeza según Dios produce arrepentimiento (2 Co 7:10)'],
            ['μεταμέλομαι', '6', 'lamentar, sentir remordimiento', 'Judas, arrepentido (Mt 27:3)'],
          ],
          nota: 'El arrepentimiento bíblico une el cambio de mente con el cambio de dirección.'
        } }
      ],
      texto: [
        'Las primeras palabras de Jesús en el Evangelio de Marcos son un anuncio y un llamado. El anuncio, con dos perfectos: πεπλήρωται ὁ καιρός, «el tiempo se ha cumplido», y ἤγγικεν ἡ βασιλεία τοῦ θεοῦ, «el reino de Dios se ha acercado». El llamado, con dos imperativos de presente: μετανοεῖτε καὶ πιστεύετε, «arrepentíos, y creed».',
        { h: 'Cambiar de mente' },
        'μετανοέω está formado por μετά, que en los compuestos expresa cambio, y νοέω, «pensar», de la familia de νοῦς, «mente». Por eso se dice a menudo que el arrepentimiento es «un cambio de mente». Es verdad, pero no toda la verdad: recuerda que el origen de una palabra no agota su sentido. En el Nuevo Testamento, el arrepentimiento es un cambio de mente que cambia el rumbo de la vida. Pedro dice: «arrepentíos y convertíos» (Hch 3:19), usando ἐπιστρέφω, «volverse». Y Pablo predicaba que se arrepintieran y se convirtieran a Dios, «haciendo obras dignas de arrepentimiento» (Hch 26:20).',
        { h: 'No solo tristeza' },
        'El arrepentimiento tampoco es solo sentir pena. Pablo distingue dos clases de tristeza: «la tristeza que es según Dios produce arrepentimiento para salvación», pero «la tristeza del mundo produce muerte» (2 Co 7:10). Judas sintió remordimiento, μεταμεληθείς, y devolvió las monedas (Mt 27:3), pero no se volvió a Cristo. El arrepentimiento verdadero lleva a Dios.',
        { h: 'Arrepentirse y creer' },
        'En Marcos 1:15, los dos imperativos van unidos por καί. No son dos caminos de salvación, sino dos caras de la misma respuesta: volverse del pecado y volverse a Dios confiando en el evangelio. Están en presente, que presenta la acción en desarrollo: el arrepentimiento y la fe empiezan en un momento, pero se vuelven una manera de vivir. Por eso el creyente sigue confesando sus pecados (1 Jn 1:9) y sigue confiando cada día.',
        'Fíjate también en la construcción πιστεύετε ἐν τῷ εὐαγγελίῳ, «creed en el evangelio», con ἐν y dativo. Es una construcción poco común; el Nuevo Testamento prefiere πιστεύω εἰς para la fe en una persona. Aquí el objeto de la fe es la buena noticia que Jesús anuncia.',
        { ejercicio: {
          pregunta: '¿Qué diferencia hay entre la tristeza según Dios y la tristeza del mundo en 2 Corintios 7:10?',
          opciones: [
            { t: 'Ninguna: toda tristeza por el pecado es arrepentimiento.', ok: false, por_que: 'Pablo distingue dos clases de tristeza con resultados opuestos.' },
            { t: 'La tristeza según Dios produce arrepentimiento para salvación; la del mundo, muerte.', ok: true, por_que: 'El arrepentimiento verdadero lleva a Dios; el simple remordimiento, no.' },
            { t: 'La tristeza del mundo es más intensa y por eso es mejor.', ok: false, por_que: 'La intensidad no decide. Decide si la tristeza lleva a volverse a Dios.' }
          ],
          explicacion: 'μετάνοια es más que tristeza y más que una idea: es volverse del pecado a Dios, con frutos visibles.'
        } }
      ],
      pensar: 'Jesús llama a arrepentirse y creer porque el reino se ha acercado. ¿Hay algún área de tu vida en que sabes que necesitas cambiar de rumbo? ¿Qué paso concreto darás hoy?'
    },
    {
      id: 'senor', n: 'Señor: κύριος', ref: 'Filipenses 2:9-11; Romanos 10:9; 1 Corintios 12:3',
      visual: [
        G('Filipenses 2:11', 'Filipenses 2:11', '@@n1904:fil/2/11', '@@n1904tr:fil/2/11', '@@n1904t:fil/2/11',
          ['y', 'toda', 'lengua', 'confiese', 'que', 'SEÑOR', 'JESÚS', 'CRISTO', 'para', 'gloria', 'de Dios', 'Padre'],
          '@@fil/2/11'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Los usos de κύριος (718 veces)',
          cab: ['Uso', 'Ejemplo'],
          filas: [
            ['Dueño, amo', 'ὁ κύριος τοῦ ἀμπελῶνος, el señor de la viña (Mt 21:40)'],
            ['Trato de respeto: «señor»', 'Κύριε, οὔτε ἄντλημα ἔχεις, Señor, no tienes con qué sacarla (Jn 4:11)'],
            ['Dios, en lugar del nombre divino', 'Κύριον τὸν θεόν σου, al Señor tu Dios (Mt 4:7, citando Dt 6:16)'],
            ['Jesús, como Señor divino', 'Κύριος Ἰησοῦς (Ro 10:9; 1 Co 12:3)'],
          ],
          nota: 'En la Septuaginta, κύριος reemplaza casi siempre el nombre de Dios, יהוה, que la Reina-Valera traduce «Jehová».'
        } }
      ],
      texto: [
        'κύριος aparece 718 veces en el Nuevo Testamento y tiene un abanico de sentidos que va desde el trato de cortesía hasta el nombre de Dios.',
        { h: 'De «señor» a «Señor»' },
        'En su uso común, κύριος era el dueño de algo: de una casa, de una viña, de un esclavo. Como vocativo, Κύριε, era una forma respetuosa de dirigirse a alguien, como nuestro «señor». La samaritana le dice Κύριε a Jesús antes de saber quién es (Jn 4:11). No siempre que alguien llama Κύριε a Jesús está confesando su divinidad.',
        'Pero κύριος tenía otro uso, decisivo para los judíos que leían la Biblia en griego. En la Septuaginta, cuando el texto hebreo tenía el nombre de Dios, יהוה, los traductores escribieron κύριος, como en la sinagoga se leía Adonái, «mi Señor», en lugar del nombre. Para un lector judío, ὁ κύριος era el nombre de Dios mismo.',
        { h: 'Jesucristo es el Señor' },
        'Por eso es tan fuerte lo que hacen los apóstoles: aplican a Jesús textos del Antiguo Testamento en que κύριος es Jehová. Pablo cita Joel: «todo aquel que invocare el nombre del Señor, será salvo» (Ro 10:13), y lo aplica a Cristo. En Filipenses 2:9-11 alude a Isaías 45:23, donde Jehová dice: «que a mí se doblará toda rodilla, y jurará toda lengua». Pablo afirma que ante el nombre de Jesús se doblará toda rodilla, y toda lengua confesará: Κύριος Ἰησοῦς Χριστός, «Jesucristo es el Señor».',
        'La frase es tan breve que no lleva verbo: «Señor, Jesucristo». Era la confesión de fe más antigua de la iglesia. «Nadie puede llamar a Jesús Señor, sino por el Espíritu Santo» (1 Co 12:3). Y es la confesión que acompaña a la fe que salva: «si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo» (Ro 10:9).',
        'El verbo ἐξομολογήσηται, «confiese», está en subjuntivo después de ἵνα, en el versículo anterior: es el propósito de Dios al exaltar a su Hijo. Y la meta final es εἰς δόξαν θεοῦ πατρός, «para gloria de Dios Padre». Confesar a Jesús como Señor no le quita gloria al Padre; le da gloria.',
        { ejercicio: {
          pregunta: '¿Por qué era tan significativo llamar κύριος a Jesús?',
          opciones: [
            { t: 'Porque en la Biblia griega κύριος reemplazaba el nombre de Dios, Jehová.', ok: true, por_que: 'Los apóstoles aplican a Jesús textos donde κύριος es Jehová (Ro 10:13; Fil 2:10-11).' },
            { t: 'Porque κύριος solo se usaba para los reyes.', ok: false, por_que: 'Se usaba para dueños y como trato de cortesía, además de para Dios.' },
            { t: 'Porque nadie más fue llamado κύριος en el Nuevo Testamento.', ok: false, por_que: 'Se llama κύριος también a dueños y amos humanos.' }
          ],
          explicacion: 'Cuando la iglesia confiesa «Jesús es el Señor», confiesa su divinidad: el Señor del Antiguo Testamento se reveló en Jesucristo.'
        } }
      ],
      pensar: 'Confesar «Jesús es el Señor» es reconocer que él manda. ¿En qué decisión de esta semana necesitas que Jesús sea Señor de verdad, y no solo de palabra?'
    }
  ];
  window.__GG.palabras = palabras;
})();
