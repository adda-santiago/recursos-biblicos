/* ==========================================================
   Recursos Bíblicos — Vocabulario y gramática básica del griego del NT · contenido de las rutas
   FUENTE de public/apps/gramatica-griega/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/gramatica_griega_citas.py
   Marcas que el script reemplaza (dos arrobas y luego):
     libro/capítulo/versículos         → texto de la RV 1960 del sitio (public/biblia/rv1960)
     n1904:libro/capítulo/versículos   → griego del Nuevo Testamento de Nestle 1904 (herramientas/n1904.py)
     n1904t:libro/capítulo/versículo   → pares [palabra griega, transliteración] del versículo
     n1904tr:libro/capítulo/versículos → transliteración sencilla del pasaje (herramientas/griego_tr.py)
   Pronunciación erasmiana y transliteración sencilla, como en El alfabeto griego y la lectura.
   Las cifras de frecuencia salen de herramientas/gramatica_griega_lista.py (Nestle 1904: 137.779 palabras,
   5.401 lemas). Motor: ../assets/js/ruta-estudio.js.
   ========================================================== */
(() => {
  // Palabras de un versículo con su transliteración (del script) y su sentido (a mano), en orden de lectura
  const P = (pares, es) => {
    if (pares.length !== es.length) throw new Error(`P: ${pares.length} palabras y ${es.length} glosas (${pares.map(p => p[0]).join(' ')})`);
    return pares.map((p, i) => ({ gr: p[0], tr: p[1], es: es[i] }));
  };
  // Visual griego de un versículo: G('jn/3/16', 'Juan 3:16', [glosas])
  const G = (titulo, ref, gr, trl, pares, es, rv) => ({ tipo: 'griego', titulo, ref, gr, tr: trl, palabras: P(pares, es), rv });
  window.__GG = { P, G };

  const panorama = [
    {
      id: 'leer-entender', n: 'De leer a entender', ref: 'Juan 14:6; Hechos 8:30-31; Nehemías 8:8',
      visual: [
        G('Juan 14:6', 'Juan 14:6', '@@n1904:jn/14/6', '@@n1904tr:jn/14/6', '@@n1904t:jn/14/6',
          ['dice', 'le', 'Jesús', 'yo', 'soy', 'el', 'camino', 'y', 'la', 'verdad', 'y', 'la', 'vida', 'nadie', 'viene', 'a', 'el', 'Padre', 'si', 'no', 'por medio de', 'mí'],
          '@@jn/14/6'),
        { tipo: 'tabla', titulo: 'Lo que aprenderás', tabla: {
          titulo: 'Lo que vas a aprender en este recurso',
          cab: ['Ruta', 'Qué aprendes', 'Al terminar podrás'],
          filas: [
            ['I. Panorama', 'Cómo funciona el griego: terminaciones, clases de palabras, orden y frecuencia', 'Saber qué mirar en una palabra griega'],
            ['II. El sustantivo y sus compañeros', 'Los cinco casos, las declinaciones, el artículo, el adjetivo, las preposiciones y los pronombres', 'Decir qué función cumple cada sustantivo en la frase'],
            ['III. El verbo', 'El aspecto, los tiempos, las voces, los modos, el infinitivo y el participio', 'Analizar una forma verbal con un método de seis preguntas'],
            ['IV. Palabras clave de la fe', 'Diez palabras estudiadas sin caer en los errores comunes', 'Hacer un estudio de palabras responsable'],
            ['Taller práctico', 'Seis pasajes famosos, forma por forma', 'Leer un versículo entendiendo cada terminación'],
            ['Vocabulario', 'Las 1.124 palabras que aparecen diez veces o más', 'Reconocer el 92 % de las palabras del Nuevo Testamento']
          ],
          nota: 'Conviene haber recorrido antes El alfabeto griego y la lectura: aquí se da por sabido leer las letras, los espíritus y los acentos.'
        } }
      ],
      texto: [
        'En El alfabeto griego y la lectura aprendiste a leer en voz alta el griego del Nuevo Testamento. Ya puedes pronunciar Ἐγώ εἰμι ἡ ὁδός, «Yo soy el camino». Este recurso da el paso siguiente: entender cómo están hechas esas palabras y qué te dice cada terminación.',
        'Leer y entender son cosas distintas. Felipe le preguntó al eunuco etíope: «¿Entiendes lo que lees?», y él contestó: «¿Y cómo podré, si alguno no me enseñare?» (Hch 8:30-31). El eunuco sabía leer; le faltaba quien le explicara. En tiempos de Esdras, los levitas leían la ley «y ponían el sentido, de modo que entendiesen la lectura» (Neh 8:8). Este recurso quiere ayudarte a poner el sentido.',
        { h: 'Qué cambia cuando entiendes la forma' },
        'Mira el versículo del panel. En español, «el camino» y «la verdad» se distinguen de «Jesús» por el orden de la frase. En griego, ὁδός, ἀλήθεια y ζωή terminan como terminan porque son el sujeto o lo que se dice del sujeto; Πατέρα termina en -α porque es el destino del verbo «venir», y ἐμοῦ termina en -οῦ porque va después de διά, «por medio de». Cada terminación es una pequeña señal. Cuando aprendas a leerlas, la frase se ordenará sola.',
        'Al terminar el recurso no traducirás el Nuevo Testamento sin ayuda. Eso lleva años. Pero podrás hacer tres cosas valiosas: reconocer de qué palabra viene cada forma y buscarla en un diccionario; entender lo que dicen los comentarios cuando hablan de «aoristo», «genitivo» o «participio»; y evaluar con más criterio las enseñanzas que se apoyan en «el griego original».',
        { h: 'El camino del recurso' },
        'El recurso tiene cuatro rutas y un taller. La ruta I explica cómo funciona la lengua. La II trata el sustantivo y todo lo que lo acompaña. La III, el verbo, que es el corazón del griego. La IV estudia diez palabras clave de la fe y advierte contra los errores más comunes. El taller aplica todo a seis pasajes muy conocidos. Además, el vocabulario reúne las 1.124 palabras que aparecen diez veces o más, en 45 lecciones con práctica.',
        { ejercicio: {
          pregunta: '¿Qué podrás hacer al terminar este recurso?',
          opciones: [
            { t: 'Traducir cualquier pasaje del Nuevo Testamento sin diccionario.', ok: false, por_que: 'Eso requiere años de estudio. Este recurso es una introducción.' },
            { t: 'Reconocer las formas de las palabras, entender los términos de los comentarios y evaluar mejor lo que se dice del griego.', ok: true, por_que: 'Esos son los objetivos realistas de un curso básico, y ya son de gran ayuda para el estudio.' },
            { t: 'Corregir la Reina-Valera donde traduce mal.', ok: false, por_que: 'Un curso básico no da autoridad para corregir a traductores expertos. Da herramientas para entender por qué traducen como traducen.' }
          ],
          explicacion: 'Entender la forma de las palabras es un paso intermedio entre leer el alfabeto y traducir. Abre la puerta a las herramientas de estudio.'
        } }
      ],
      pensar: 'El eunuco leía Isaías sin entenderlo, y Dios envió a Felipe para explicárselo. ¿Quién te ha ayudado a ti a entender la Escritura, y a quién podrías ayudar tú?'
    },
    {
      id: 'terminaciones', n: 'Una lengua de terminaciones', ref: 'Juan 3:35; 1 Juan 4:19',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-terminaciones.svg', alt: 'La frase «el Padre ama al Hijo» escrita en griego en tres órdenes distintos; en los tres, ὁ πατήρ termina en nominativo y τὸν υἱόν en acusativo, y el sentido no cambia', pie: 'Las terminaciones, no el orden, dicen quién ama a quién.', origen: 'esquema' },
        G('Juan 3:35', 'Juan 3:35', '@@n1904:jn/3/35', '@@n1904tr:jn/3/35', '@@n1904t:jn/3/35',
          ['el', 'Padre', 'ama', 'al', 'Hijo', 'y', 'todas las cosas', 'ha entregado', 'en', 'la', 'mano', 'de él'],
          '@@jn/3/35')
      ],
      texto: [
        'En español sabemos quién hace qué por el orden de las palabras. «El Padre ama al Hijo» y «el Hijo ama al Padre» tienen las mismas palabras y dicen cosas distintas. El griego funciona de otra manera: lo dice con las terminaciones.',
        'En Juan 3:35, ὁ πατήρ, «el Padre», está en la forma del sujeto, que se llama nominativo. τὸν υἱόν, «al Hijo», está en la forma del complemento directo, el acusativo: la -ν final y el artículo τόν lo delatan. Por eso el griego puede escribir τὸν υἱὸν ἀγαπᾷ ὁ πατήρ, con el Hijo al comienzo, y sigue diciendo «el Padre ama al Hijo». El esquema del panel muestra tres órdenes posibles con el mismo sentido.',
        { h: 'Palabras que cambian de forma' },
        'Una lengua así se llama flexiva: sus palabras cambian de terminación según la función que cumplen. El español conserva algo de esto en los pronombres: decimos «yo te amo» y «tú me amas», no «yo tú amo». En 1 Juan 4:19 el griego hace lo mismo: ἡμεῖς, «nosotros», es el sujeto, y ἡμᾶς, «nos», es el complemento. «Nosotros le amamos a él, porque él nos amó primero.»',
        'En griego cambian de forma los sustantivos, los adjetivos, los artículos, los pronombres y, sobre todo, los verbos. Un verbo griego puede tener más de cien formas, y cada una dice a la vez quién hace la acción, cuántos son, cómo se mira la acción y si es un hecho, un mandato o un deseo. Las palabras que no cambian, como καί, «y», o ἐν, «en», son pocas y muy frecuentes.',
        { h: 'Qué significa para ti' },
        'Esto tiene una consecuencia práctica: en griego no basta con saber qué significa una palabra; hay que mirar cómo termina. λόγος, λόγου, λόγῳ, λόγον y λόγοι son la misma palabra, «palabra», en funciones distintas. El diccionario la trae una sola vez, en su forma básica, y tú tienes que reconocerla en las demás. Las rutas II y III te enseñan a hacerlo.',
        'La buena noticia es que el sistema es muy regular. Unas pocas terminaciones se repiten en miles de palabras. Aprendidas las de λόγος, ya reconoces las de ἄνθρωπος, κόσμος, θεός y cientos más.',
        { ejercicio: {
          pregunta: 'En la frase griega τὸν υἱὸν ἀγαπᾷ ὁ πατήρ, ¿quién ama a quién?',
          opciones: [
            { t: 'El Hijo ama al Padre, porque «Hijo» va primero.', ok: false, por_que: 'En griego el orden no decide quién es el sujeto. τὸν υἱόν está en acusativo: es el que recibe el amor.' },
            { t: 'El Padre ama al Hijo, porque ὁ πατήρ está en nominativo y τὸν υἱόν en acusativo.', ok: true, por_que: 'Las terminaciones mandan: el nominativo es el sujeto y el acusativo es el complemento directo.' },
            { t: 'No se puede saber sin el contexto.', ok: false, por_que: 'Sí se puede: las formas lo dicen claramente.' }
          ],
          explicacion: 'Las terminaciones de los casos dicen quién hace la acción y quién la recibe, aunque cambie el orden de las palabras.'
        } }
      ],
      pensar: '«Nosotros le amamos a él, porque él nos amó primero» (1 Jn 4:19). En la frase griega, Dios es el sujeto del primer amor. ¿Qué cambia en tu manera de amar saber que Dios tomó la iniciativa?'
    },
    {
      id: 'clases', n: 'Clases de palabras', ref: 'Mateo 6:33',
      visual: [
        G('Mateo 6:33', 'Mateo 6:33', '@@n1904:mt/6/33', '@@n1904tr:mt/6/33', '@@n1904t:mt/6/33',
          ['buscad', 'pero', 'primero', 'el', 'reino', 'y', 'la', 'justicia', 'de él', 'y', 'estas cosas', 'todas', 'será añadido', 'a vosotros'],
          '@@mt/6/33'),
        { tipo: 'tabla', titulo: 'Las clases', tabla: {
          titulo: 'Las palabras del Nuevo Testamento griego, por clase',
          cab: ['Clase', 'Veces', 'Parte del texto', 'Cambia de forma', 'Ejemplos'],
          filas: [
            ['Sustantivo', '28.394', '20,6 %', 'Sí: caso, número', 'λόγος, ἡμέρα, ἔργον'],
            ['Verbo', '28.352', '20,6 %', 'Sí: muchísimo', 'λέγω, ἔρχομαι, πιστεύω'],
            ['Artículo', '19.783', '14,4 %', 'Sí: caso, número, género', 'ὁ, ἡ, τό'],
            ['Conjunción', '17.501', '12,7 %', 'No', 'καί, δέ, γάρ, ἵνα, εἰ'],
            ['Pronombre', '16.299', '11,8 %', 'Sí', 'ἐγώ, σύ, αὐτός, οὗτος, ὅς'],
            ['Preposición', '10.568', '7,7 %', 'No', 'ἐν, εἰς, ἐκ, ἐπί'],
            ['Adjetivo', '8.564', '6,2 %', 'Sí', 'πᾶς, ἅγιος, μέγας'],
            ['Adverbio, partícula e interjección', '8.318', '6,0 %', 'No', 'οὐ, μή, νῦν, ὡς']
          ],
          nota: 'Cifras del Nuevo Testamento de Nestle 1904 (137.779 palabras), según su análisis morfológico.'
        } }
      ],
      texto: [
        'Antes de estudiar las formas conviene saber qué clases de palabras hay, porque cada clase se comporta distinto. La tabla del panel cuenta las 137.779 palabras del Nuevo Testamento griego según su clase.',
        { h: 'Las que cambian y las que no' },
        'Los sustantivos nombran personas, cosas e ideas: βασιλεία, «reino»; δικαιοσύνη, «justicia». Cambian según su caso y su número. Los adjetivos, como πᾶς, «todo», y los pronombres, como αὐτοῦ, «de él», cambian igual que los sustantivos a los que acompañan o reemplazan.',
        'El artículo, ὁ, ἡ, τό, merece mención aparte: es la palabra más frecuente del Nuevo Testamento, con 19.783 apariciones, una de cada siete palabras. Como cambia según el sustantivo que acompaña, es el mejor ayudante para reconocer casos. En Mateo 6:33, τήν delante de βασιλείαν y de δικαιοσύνην avisa que los dos sustantivos son femeninos, singulares y complementos directos.',
        'Los verbos son la clase más rica en formas. ζητεῖτε, «buscad», es un mandato dirigido a varias personas; προστεθήσεται, «será añadido», es un futuro en voz pasiva. Una sola palabra griega dice lo que el español dice con dos o tres.',
        'Las palabras que no cambian son las conjunciones (καί, «y»; δέ, «pero»; γάρ, «porque»), las preposiciones (ἐν, «en»; εἰς, «hacia»), los adverbios (πρῶτον, «primero»; νῦν, «ahora») y las partículas, como οὐ y μή, «no». Son pocas, aparecen en todas partes y se aprenden pronto.',
        { h: 'Dos detalles que confunden al comienzo' },
        'Primero, algunas conjunciones nunca van al comienzo de la frase. δέ y γάρ se colocan en segundo lugar: ζητεῖτε δέ significa «pero buscad», aunque el «pero» aparezca después. Segundo, el griego puede omitir el verbo «ser» cuando se entiende: μακάριοι οἱ πτωχοί, «bienaventurados los pobres», no tiene verbo, igual que el español del versículo.',
        { ejercicio: {
          pregunta: 'En Mateo 6:33, ¿qué clase de palabra es δέ y dónde se coloca?',
          opciones: [
            { t: 'Es un verbo y va siempre al final.', ok: false, por_que: 'δέ no es verbo: no cambia de forma y une frases.' },
            { t: 'Es una conjunción que se coloca en segundo lugar en su frase.', ok: true, por_que: 'δέ significa «pero, y» y nunca va primero: ζητεῖτε δέ, «pero buscad».' },
            { t: 'Es un artículo femenino.', ok: false, por_que: 'El artículo femenino es ἡ, τῆς, τῇ, τήν. δέ es una conjunción.' }
          ],
          explicacion: 'δέ y γάρ son conjunciones pospositivas: se traducen al comienzo de la frase, pero en griego van en segundo lugar.'
        } }
      ],
      pensar: 'Jesús promete que «todas estas cosas os serán añadidas» si buscamos primero su reino. ¿Qué lugar ocupa hoy el reino de Dios en el orden de tus prioridades?'
    },
    {
      id: 'orden', n: 'Orden y énfasis', ref: 'Juan 4:24; 1 Juan 4:8',
      visual: [
        G('Juan 4:24', 'Juan 4:24', '@@n1904:jn/4/24', '@@n1904tr:jn/4/24', '@@n1904t:jn/4/24',
          ['Espíritu', 'el', 'Dios', 'y', 'a los', 'que adoran', 'en', 'espíritu', 'y', 'verdad', 'es necesario', 'adorar'],
          '@@jn/4/24'),
        { tipo: 'tabla', titulo: 'Posiciones', tabla: {
          titulo: 'Qué puede indicar la posición de una palabra',
          cab: ['Posición', 'Ejemplo', 'Efecto'],
          filas: [
            ['Verbo al comienzo', 'ἐδάκρυσεν ὁ Ἰησοῦς (Jn 11:35)', 'Orden más común en la narración: no indica énfasis especial'],
            ['Complemento antes del verbo', 'εἰρήνην ἀφίημι ὑμῖν, «la paz os dejo» (Jn 14:27)', 'Destaca lo que se adelanta'],
            ['Predicado al comienzo, sin artículo', 'πνεῦμα ὁ θεός (Jn 4:24)', 'Destaca qué clase de ser es el sujeto'],
            ['Pronombre de sujeto expreso', 'ἐγώ εἰμι (Jn 14:6)', 'El verbo ya dice «yo»: el pronombre añade énfasis'],
            ['Palabra al final', 'καὶ θεὸς ἦν ὁ λόγος (Jn 1:1)', 'Puede cerrar con fuerza'],
          ],
          nota: 'El énfasis es una herramienta de lectura, no una regla automática: el contexto siempre decide.'
        } }
      ],
      texto: [
        'Si las terminaciones dicen quién hace qué, ¿para qué sirve el orden en griego? Sirve para destacar. Como el sentido básico está en las terminaciones, el autor puede mover las palabras para poner el acento donde quiere.',
        { h: '«Dios es Espíritu»' },
        'Juan 4:24 comienza con πνεῦμα, «espíritu», y después dice ὁ θεός, «Dios». No hay verbo; se sobrentiende «es». ¿Cómo sabemos cuál es el sujeto? Por el artículo: ὁ θεός lo lleva y πνεῦμα no. En una frase con «ser», el sustantivo con artículo suele ser el sujeto, y el que no lo tiene es lo que se dice de él. Por eso la Reina-Valera traduce «Dios es Espíritu», aunque en griego «Espíritu» vaya primero.',
        'Y ¿por qué va primero? Para destacar la naturaleza de Dios: no es un Dios atado a un monte o a un templo, como discutían judíos y samaritanos, sino que es espíritu, y por eso se le adora «en espíritu y en verdad». Lo mismo ocurre en 1 Juan 4:8: ὁ θεὸς ἀγάπη ἐστίν, «Dios es amor». ὁ θεός tiene artículo; ἀγάπη no. Dios no es igual al amor, como si el amor fuera dios; el amor describe cómo es Dios.',
        { h: 'Pronombres que no hacen falta' },
        'El verbo griego ya lleva la persona en su terminación: εἰμί significa «soy». Cuando Jesús dice ἐγώ εἰμι, «yo soy», el pronombre ἐγώ no es necesario para entender; está ahí para subrayar: «yo, y no otro, soy el camino». Lo mismo con ἡμεῖς en 1 Juan 4:19. Cuando veas un pronombre de sujeto expreso, pregúntate qué contraste o qué énfasis quiere marcar el autor.',
        { h: 'Con prudencia' },
        'El orden griego es libre, pero no caprichoso, y tampoco cada cambio es un mensaje secreto. En la narración el verbo suele ir primero sin que eso signifique nada especial. Los estudiosos discuten muchos casos. Usa el énfasis para leer con atención, no para construir doctrinas sobre la posición de una palabra.',
        { ejercicio: {
          pregunta: 'En πνεῦμα ὁ θεός, ¿cómo sabemos que «Dios» es el sujeto y no «Espíritu»?',
          opciones: [
            { t: 'Porque «Espíritu» va primero.', ok: false, por_que: 'En griego el orden no decide el sujeto. Va primero para destacarlo.' },
            { t: 'Porque ὁ θεός lleva artículo y πνεῦμα no.', ok: true, por_que: 'En las frases con «ser», el sustantivo con artículo suele ser el sujeto.' },
            { t: 'Porque «Dios» siempre es el sujeto de cualquier frase.', ok: false, por_que: 'No es una regla gramatical. Lo decide la forma de las palabras.' }
          ],
          explicacion: 'El artículo ayuda a distinguir el sujeto del predicado cuando los dos están en nominativo. Volverás a usar esta regla en Juan 1:1.'
        } }
      ],
      pensar: 'Jesús dijo que el Padre busca adoradores «en espíritu y en verdad». ¿Tu adoración depende de un lugar o de un ambiente, o nace de un corazón que se acerca a Dios así como él es?'
    },
    {
      id: 'frecuencia', n: 'Aprender por frecuencia', ref: 'Mateo 5:18; Isaías 28:10',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-frecuencia.svg', alt: 'Curva que sube rápido: las 100 palabras más frecuentes cubren dos tercios del Nuevo Testamento griego, 310 palabras cubren el 80 % y 1.124 palabras el 92 %', pie: 'Pocas palabras cubren gran parte del texto.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Cifras', tabla: {
          titulo: 'Cuánto texto cubren las palabras más frecuentes',
          cab: ['Palabras aprendidas', 'Aparecen al menos', 'Parte del Nuevo Testamento'],
          filas: [
            ['10', '1.766 veces', '37,6 %'],
            ['100', '158 veces', '66,2 %'],
            ['310', '50 veces', '79,9 %'],
            ['464', '30 veces', '84,2 %'],
            ['1.124 (el vocabulario de este recurso)', '10 veces', '92,0 %'],
            ['5.401 (todas)', 'una vez', '100 %']
          ],
          nota: '1.932 palabras aparecen una sola vez en todo el Nuevo Testamento. Para esas basta el diccionario o el interlineal.'
        } }
      ],
      texto: [
        'El Nuevo Testamento griego tiene 137.779 palabras, pero solo 5.401 palabras distintas. Y no todas pesan lo mismo: diez palabras, como ὁ, καί, αὐτός y λέγω, ya son más de un tercio del texto. Por eso este recurso enseña el vocabulario por frecuencia: primero las que más aparecen.',
        { h: 'La curva' },
        'El esquema muestra qué pasa a medida que aprendes palabras. Con las primeras cien, reconoces dos de cada tres palabras de cualquier página. Con 310, las que aparecen cincuenta veces o más, llegas al 80 %. Con las 1.124 del vocabulario de este recurso, las que aparecen diez veces o más, reconoces el 92 %. Después la curva se aplana: hacen falta miles de palabras para cubrir el último 8 %.',
        'Esto no quiere decir que las palabras raras importen menos. Θεόπνευστος, «inspirada por Dios», aparece una sola vez (2 Ti 3:16), y es fundamental. Pero cuando conoces las frecuentes, puedes concentrar el diccionario en las pocas que faltan.',
        { h: 'Cómo se contaron' },
        'Las cifras se calcularon con el Nuevo Testamento de Nestle 1904, el texto griego que usa el sitio, que trae para cada palabra su forma de diccionario, llamada lema. Se cuenta por lema: λόγος, λόγου y λόγοις suman todas para λόγος. Algunas decisiones de los editores afectan los números; por ejemplo, εἶδον, «vi», se cuenta con ὁράω, «ver». Otras ediciones dan cifras un poco distintas.',
        { h: 'Las más frecuentes enseñan gramática' },
        'Las palabras de arriba de la lista son, sobre todo, palabras de función: el artículo, las conjunciones, las preposiciones y los pronombres. Aprenderlas es aprender gramática. Pero también aparecen pronto las palabras de la fe: θεός (1.311 veces), Ἰησοῦς (913), κύριος (718), πνεῦμα (379), πίστις (243), ἀγάπη (116). El vocabulario del Nuevo Testamento gira en torno a Dios y a su Hijo.',
        'Jesús dijo que ni una jota ni una tilde pasará de la ley (Mt 5:18). Cada palabra cuenta. Empezar por las frecuentes es un método, no un desprecio de las demás: es «mandato sobre mandato, renglón tras renglón» (Is 28:10).',
        { ejercicio: {
          pregunta: '¿Por qué conviene aprender primero las palabras más frecuentes?',
          opciones: [
            { t: 'Porque las palabras raras no son importantes.', ok: false, por_que: 'Algunas palabras que aparecen una sola vez, como θεόπνευστος, son fundamentales.' },
            { t: 'Porque con pocas palabras se reconoce gran parte del texto, y el diccionario queda para las que faltan.', ok: true, por_que: 'Con cien palabras se cubren dos tercios del texto; con 1.124, el 92 %.' },
            { t: 'Porque las frecuentes son las únicas que están en el diccionario.', ok: false, por_que: 'El diccionario trae todas las palabras. La frecuencia solo ordena el aprendizaje.' }
          ],
          explicacion: 'Aprender por frecuencia rinde mucho al principio: cada palabra nueva de la lista cubre mucho texto.'
        } }
      ],
      pensar: 'Dios, Jesús, Señor y Espíritu están entre las palabras más frecuentes del Nuevo Testamento. ¿Son también las más frecuentes en tus conversaciones y en tus pensamientos?'
    },
    {
      id: 'como-usar', n: 'Cómo usar el recurso y el vocabulario', ref: 'Hechos 17:11; Salmo 119:11; 2 Timoteo 2:15',
      visual: [
        { tipo: 'tabla', titulo: 'Plan', tabla: {
          titulo: 'Un plan de doce semanas',
          cab: ['Semanas', 'Rutas del recurso', 'Vocabulario'],
          filas: [
            ['1', 'I. Panorama', 'Lecciones 1 y 2'],
            ['2–4', 'II. El sustantivo y sus compañeros', 'Lecciones 3 a 8'],
            ['5–8', 'III. El verbo', 'Lecciones 9 a 16'],
            ['9–10', 'IV. Palabras clave de la fe', 'Lecciones 17 a 20'],
            ['11–12', 'Taller práctico', 'Lecciones 21 a 24, y repaso'],
            ['Después', 'El Interlineal griego–español, cuando se publique', 'Lecciones 25 a 45, una por semana'],
          ],
          nota: 'El plan es una sugerencia. Lo importante es la constancia: quince minutos al día rinden más que dos horas una vez al mes.'
        } }
      ],
      texto: [
        'Este recurso se puede recorrer de muchas maneras, pero rinde más si se sigue un orden y se practica un poco cada día.',
        { h: 'Las estaciones' },
        'Cada estación tiene un panel visual y un texto. Cuando el panel muestra un versículo, léelo primero en voz alta con las ayudas: la transliteración y el sentido de cada palabra. Después usa el botón para ocultar las ayudas y vuelve a leerlo. Toca las referencias bíblicas para ver el texto en tu versión. Haz los ejercicios: no guardan nada ni dan nota, pero te muestran enseguida si entendiste. Y no te saltes «Para pensar»: el estudio del griego es para conocer mejor a Dios.',
        { h: 'El vocabulario' },
        'El vocabulario del recurso tiene 1.124 palabras, de la más frecuente a la menos, en 45 lecciones de veinticinco. Cada palabra trae su transliteración, su sentido en español, su clase, cuántas veces aparece, su número de Strong y el primer versículo donde aparece. El modo de práctica te muestra una palabra y cuatro sentidos para elegir, o al revés.',
        'Aprende las palabras en voz alta, con su artículo si son sustantivos: ὁ λόγος, ἡ ἡμέρα, τὸ ἔργον. Así aprendes también su género. Los verbos se aprenden en la forma del diccionario, la primera persona del presente: λύω, «desato». El vocabulario tiene además las tablas modelo del artículo, de los sustantivos y del verbo λύω, para consultar mientras recorres las rutas II y III.',
        { ir: { t: 'Abrir el vocabulario', a: 'vocabulario/' } },
        { h: 'Un consejo sobre las herramientas' },
        'Este recurso te prepara para usar bien una concordancia con números de Strong y un interlineal. El número de Strong identifica una palabra griega aunque la traducción la vierta de maneras distintas. Lo verás junto a cada palabra del vocabulario.',
        'Por último, estudia con otros si puedes. Los de Berea escudriñaban «cada día» las Escrituras, y lo hacían juntos (Hch 17:11). Un compañero de estudio te ayuda a no abandonar y a corregir errores.',
        { ejercicio: {
          pregunta: '¿Por qué conviene aprender los sustantivos con su artículo, como ὁ λόγος o ἡ ἡμέρα?',
          opciones: [
            { t: 'Porque el artículo dice el género del sustantivo.', ok: true, por_que: 'ὁ es masculino, ἡ femenino y τό neutro. Saber el género ayuda a reconocer las formas.' },
            { t: 'Porque sin el artículo la palabra no significa nada.', ok: false, por_que: 'La palabra tiene su sentido; el artículo añade información sobre el género y la determinación.' },
            { t: 'Porque en griego el artículo es obligatorio delante de todo sustantivo.', ok: false, por_que: 'Muchos sustantivos aparecen sin artículo, como verás en la ruta II.' }
          ],
          explicacion: 'El artículo es la mejor etiqueta del género. Aprenderlo junto con la palabra ahorra trabajo después.'
        } }
      ],
      pensar: '«En mi corazón he guardado tus dichos, para no pecar contra ti» (Sal 119:11). ¿Qué hábito diario podrías empezar esta semana para guardar la Palabra en tu corazón?'
    }
  ];
  window.__GG.panorama = panorama;
})();
