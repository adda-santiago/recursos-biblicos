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
        G('Juan 14:6', 'Juan 14:6', 'λέγει αὐτῷ Ἰησοῦς Ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή· οὐδεὶς ἔρχεται πρὸς τὸν Πατέρα εἰ μὴ δι’ ἐμοῦ.', 'Légei autṓ Iēsús Egṓ eimi hē hodós kai hē alḗtheia kai hē zōḗ; udeís érjetai pros ton Patéra ei mē di’ emú.', [['λέγει', 'légei'], ['αὐτῷ', 'autṓ'], ['Ἰησοῦς', 'Iēsús'], ['Ἐγώ', 'Egṓ'], ['εἰμι', 'eimi'], ['ἡ', 'hē'], ['ὁδὸς', 'hodós'], ['καὶ', 'kai'], ['ἡ', 'hē'], ['ἀλήθεια', 'alḗtheia'], ['καὶ', 'kai'], ['ἡ', 'hē'], ['ζωή', 'zōḗ'], ['οὐδεὶς', 'udeís'], ['ἔρχεται', 'érjetai'], ['πρὸς', 'pros'], ['τὸν', 'ton'], ['Πατέρα', 'Patéra'], ['εἰ', 'ei'], ['μὴ', 'mē'], ['δι’', 'di’'], ['ἐμοῦ', 'emú']],
          ['dice', 'le', 'Jesús', 'yo', 'soy', 'el', 'camino', 'y', 'la', 'verdad', 'y', 'la', 'vida', 'nadie', 'viene', 'a', 'el', 'Padre', 'si', 'no', 'por medio de', 'mí'],
          'Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.'),
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
        G('Juan 3:35', 'Juan 3:35', 'ὁ Πατὴρ ἀγαπᾷ τὸν Υἱόν, καὶ πάντα δέδωκεν ἐν τῇ χειρὶ αὐτοῦ.', 'Ho Patḗr agapá ton Hyión, kai pánta dédōken en tē jeirí autú.', [['ὁ', 'ho'], ['Πατὴρ', 'Patḗr'], ['ἀγαπᾷ', 'agapá'], ['τὸν', 'ton'], ['Υἱόν', 'Hyión'], ['καὶ', 'kai'], ['πάντα', 'pánta'], ['δέδωκεν', 'dédōken'], ['ἐν', 'en'], ['τῇ', 'tē'], ['χειρὶ', 'jeirí'], ['αὐτοῦ', 'autú']],
          ['el', 'Padre', 'ama', 'al', 'Hijo', 'y', 'todas las cosas', 'ha entregado', 'en', 'la', 'mano', 'de él'],
          'El Padre ama al Hijo, y todas las cosas ha entregado en su mano.')
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
        G('Mateo 6:33', 'Mateo 6:33', 'ζητεῖτε δὲ πρῶτον τὴν βασιλείαν καὶ τὴν δικαιοσύνην αὐτοῦ, καὶ ταῦτα πάντα προστεθήσεται ὑμῖν.', 'Zēteíte de prṓton tēn basileían kai tēn dikaiosýnēn autú, kai taúta pánta prostethḗsetai hymín.', [['ζητεῖτε', 'zēteíte'], ['δὲ', 'de'], ['πρῶτον', 'prṓton'], ['τὴν', 'tēn'], ['βασιλείαν', 'basileían'], ['καὶ', 'kai'], ['τὴν', 'tēn'], ['δικαιοσύνην', 'dikaiosýnēn'], ['αὐτοῦ', 'autú'], ['καὶ', 'kai'], ['ταῦτα', 'taúta'], ['πάντα', 'pánta'], ['προστεθήσεται', 'prostethḗsetai'], ['ὑμῖν', 'hymín']],
          ['buscad', 'pero', 'primero', 'el', 'reino', 'y', 'la', 'justicia', 'de él', 'y', 'estas cosas', 'todas', 'será añadido', 'a vosotros'],
          'Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.'),
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
        G('Juan 4:24', 'Juan 4:24', 'Πνεῦμα ὁ Θεός, καὶ τοὺς προσκυνοῦντας ἐν πνεύματι καὶ ἀληθείᾳ δεῖ προσκυνεῖν.', 'Pneúma ho Theós, kai tus proskynúntas en pneúmati kai alētheía dei proskyneín.', [['Πνεῦμα', 'Pneúma'], ['ὁ', 'ho'], ['Θεός', 'Theós'], ['καὶ', 'kai'], ['τοὺς', 'tus'], ['προσκυνοῦντας', 'proskynúntas'], ['ἐν', 'en'], ['πνεύματι', 'pneúmati'], ['καὶ', 'kai'], ['ἀληθείᾳ', 'alētheía'], ['δεῖ', 'dei'], ['προσκυνεῖν', 'proskyneín']],
          ['Espíritu', 'el', 'Dios', 'y', 'a los', 'que adoran', 'en', 'espíritu', 'y', 'verdad', 'es necesario', 'adorar'],
          'Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren.'),
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
            ['Después', 'El Interlineal griego–español (NT)', 'Lecciones 25 a 45, una por semana'],
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
        'Este recurso te prepara para usar bien una concordancia con números de Strong y un interlineal. El número de Strong identifica una palabra griega aunque la traducción la vierta de maneras distintas. Lo verás junto a cada palabra del vocabulario, y también en la ficha de cada palabra del Interlineal griego–español.',
        { ir: { t: 'Abrir el Interlineal griego–español (NT)', a: '../../interlineal-griego/' } },
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
/* Ruta II. El sustantivo y sus compañeros (ver el encabezado de parte1.js) */
(() => {
  const { G } = window.__GG;
  const sustantivo = [
    {
      id: 'casos', n: 'Los cinco casos: quién hace qué', ref: 'Marcos 1:11',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-casos.svg', alt: 'Cinco tarjetas, una por caso: nominativo (el sujeto, ὁ λόγος), genitivo (de quién, τοῦ λόγου), dativo (a quién o con qué, τῷ λόγῳ), acusativo (el complemento directo, τὸν λόγον) y vocativo (a quien se llama, Κύριε), con la pregunta que responde cada uno', pie: 'Cada caso responde una pregunta.', origen: 'esquema' },
        G('Marcos 1:11', 'Marcos 1:11', 'καὶ φωνὴ ἐγένετο ἐκ τῶν οὐρανῶν Σὺ εἶ ὁ Υἱός μου ὁ ἀγαπητός, ἐν σοὶ εὐδόκησα.', 'Kai fōnḗ egéneto ek tōn uranṓn Sy ei ho Hyiós mu ho agapētós, en soi eudókēsa.', [['καὶ', 'kai'], ['φωνὴ', 'fōnḗ'], ['ἐγένετο', 'egéneto'], ['ἐκ', 'ek'], ['τῶν', 'tōn'], ['οὐρανῶν', 'uranṓn'], ['Σὺ', 'Sy'], ['εἶ', 'ei'], ['ὁ', 'ho'], ['Υἱός', 'Hyiós'], ['μου', 'mu'], ['ὁ', 'ho'], ['ἀγαπητός', 'agapētós'], ['ἐν', 'en'], ['σοὶ', 'soi'], ['εὐδόκησα', 'eudókēsa']],
          ['y', 'una voz', 'vino', 'de', 'los', 'cielos', 'tú', 'eres', 'el', 'Hijo', 'de mí', 'el', 'amado', 'en', 'ti', 'me complací'],
          'Y vino una voz de los cielos que decía: Tú eres mi Hijo amado; en ti tengo complacencia.')
      ],
      texto: [
        'El caso es la forma que toma un sustantivo según su función en la frase. El griego del Nuevo Testamento tiene cinco casos. Cada uno responde a una pregunta.',
        { h: 'Los cinco' },
        'El nominativo responde «¿quién?» o «¿qué?»: es el sujeto. En Marcos 1:11, φωνή, «una voz», es el sujeto de «vino», y ὁ υἱός es lo que se dice del sujeto «tú». El genitivo responde «¿de quién?» o «¿de qué?»: ἐκ τῶν οὐρανῶν, «de los cielos», y μου, «de mí», es decir, «mi». El dativo responde «¿a quién?», «¿para quién?» o «¿con qué?»: ἐν σοί, «en ti». El acusativo responde «¿qué?» o «¿a quién?» después del verbo: es el complemento directo. Y el vocativo se usa para llamar a alguien: Κύριε, «¡Señor!».',
        'En todo el Nuevo Testamento, sumando sustantivos, adjetivos y artículos, el acusativo aparece 16.836 veces, el nominativo 16.804, el genitivo 13.521, el dativo 8.193 y el vocativo solo 596.',
        { h: 'Cómo se reconocen' },
        'Cada caso tiene sus terminaciones, que varían según el grupo al que pertenece la palabra, llamado declinación. Lo verás en las estaciones siguientes. Por ahora fíjate en el artículo, que es el mejor ayudante: ὁ en nominativo, τοῦ en genitivo, τῷ en dativo y τόν en acusativo, para el masculino singular. Si una palabra te confunde, mira el artículo que la acompaña.',
        { h: 'Los casos y las preposiciones' },
        'Las preposiciones griegas siempre van con un caso determinado. ἐν va con dativo, εἰς con acusativo, ἐκ con genitivo. Por eso en ἐν σοί el pronombre está en dativo y en ἐκ τῶν οὐρανῶν el sustantivo está en genitivo. Algunas preposiciones cambian de sentido según el caso, como verás en la estación de las preposiciones.',
        'En Marcos 1:11 el Padre habla desde el cielo en el bautismo de Jesús. Con pocas palabras, los casos ordenan todo: la voz viene de los cielos, el Hijo es amado, y en él el Padre se complace.',
        { ejercicio: {
          pregunta: '¿Qué pregunta responde el genitivo?',
          opciones: [
            { t: '¿Quién hace la acción?', ok: false, por_que: 'Esa pregunta la responde el nominativo, el caso del sujeto.' },
            { t: '¿De quién o de qué?', ok: true, por_que: 'El genitivo indica posesión, origen o relación: τοῦ θεοῦ, «de Dios».' },
            { t: '¿A quién se llama?', ok: false, por_que: 'Para llamar a alguien se usa el vocativo: Κύριε, «¡Señor!».' }
          ],
          explicacion: 'Nominativo: quién; genitivo: de quién; dativo: a quién o con qué; acusativo: qué o a quién recibe la acción; vocativo: a quien se llama.'
        } }
      ],
      pensar: '«Tú eres mi Hijo amado; en ti tengo complacencia» (Mr 1:11). Por la fe en Cristo, también tú eres hijo amado de Dios (Gá 3:26). ¿Vives como alguien que es amado por su Padre?'
    },
    {
      id: 'nominativo', n: 'Nominativo y vocativo', ref: 'Mateo 6:9; Juan 20:28',
      visual: [
        G('Mateo 6:9', 'Mateo 6:9', 'οὕτως οὖν προσεύχεσθε ὑμεῖς Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς· Ἁγιασθήτω τὸ ὄνομά σου·', 'Hútōs un proseújesthe hymeís Páter hēmṓn ho en tois uranoís; Hagiasthḗtō to ónomá su;', [['οὕτως', 'hútōs'], ['οὖν', 'un'], ['προσεύχεσθε', 'proseújesthe'], ['ὑμεῖς', 'hymeís'], ['Πάτερ', 'Páter'], ['ἡμῶν', 'hēmṓn'], ['ὁ', 'ho'], ['ἐν', 'en'], ['τοῖς', 'tois'], ['οὐρανοῖς', 'uranoís'], ['Ἁγιασθήτω', 'Hagiasthḗtō'], ['τὸ', 'to'], ['ὄνομά', 'ónomá'], ['σου', 'su']],
          ['así', 'pues', 'orad', 'vosotros', '¡Padre!', 'de nosotros', 'el (que estás)', 'en', 'los', 'cielos', 'sea santificado', 'el', 'nombre', 'de ti'],
          'Vosotros, pues, oraréis así: Padre nuestro que estás en los cielos, santificado sea tu nombre.'),
        { tipo: 'tabla', titulo: 'Formas', tabla: {
          titulo: 'Nominativo y vocativo de algunas palabras',
          cab: ['Nominativo', 'Vocativo', 'Ejemplo'],
          filas: [
            ['πατήρ, padre', 'πάτερ', 'Πάτερ ἡμῶν, «Padre nuestro» (Mt 6:9)'],
            ['κύριος, señor', 'κύριε', 'Κύριε, σὺ οἶδας, «Señor, tú sabes» (Jn 21:15)'],
            ['θυγάτηρ, hija', 'θύγατερ o θυγάτηρ', 'Θυγάτηρ, ἡ πίστις σου… (Mr 5:34)'],
            ['Ἰησοῦς, Jesús', 'Ἰησοῦ', 'Υἱὲ Δαυεὶδ Ἰησοῦ, «Jesús, Hijo de David» (Mr 10:47)'],
            ['θεός, Dios', 'θεός o θεέ', 'Ὁ κύριός μου καὶ ὁ θεός μου (Jn 20:28)'],
          ],
          nota: 'En plural, el vocativo es siempre igual al nominativo.'
        } }
      ],
      texto: [
        'El nominativo es la forma del diccionario: cuando buscas una palabra, la encuentras en nominativo singular. Es el caso del sujeto y también de lo que se dice del sujeto con el verbo «ser».',
        { h: 'Sujeto y predicado' },
        'En Mateo 6:9, τὸ ὄνομα, «el nombre», está en nominativo: es el sujeto de ἁγιασθήτω, «sea santificado». En una frase como ὁ θεὸς ἀγάπη ἐστίν, «Dios es amor», los dos sustantivos están en nominativo: uno es el sujeto y el otro el predicado. Como viste en la ruta I, el artículo ayuda a saber cuál es cuál.',
        'El nominativo también aparece en títulos y saludos, sin verbo: Παῦλος δοῦλος Χριστοῦ Ἰησοῦ, «Pablo, siervo de Jesucristo» (Ro 1:1).',
        { h: 'El vocativo: hablarle a alguien' },
        'El vocativo es el caso de la persona a quien se habla. En el Padrenuestro, Jesús enseña a decir Πάτερ, no πατήρ: «¡Padre!». La diferencia es pequeña, solo una vocal y el acento, pero indica que no hablamos de Dios sino con él. La oración es diálogo.',
        'En muchas palabras el vocativo se distingue del nominativo solo en el singular de la segunda declinación: κύριος se vuelve κύριε. Los ciegos, los leprosos y la mujer sirofenicia se dirigen a Jesús con Κύριε. En otras palabras el vocativo es igual al nominativo, y el contexto decide. En Juan 20:28, Tomás dice Ὁ κύριός μου καὶ ὁ θεός μου, con nominativos y artículo, pero se dirige a Jesús: «¡Señor mío, y Dios mío!». El griego del Nuevo Testamento usa así el nominativo como vocativo con frecuencia.',
        { h: 'La confesión de Tomás' },
        'Algunos han dicho que Tomás no hablaba a Jesús, sino que exclamaba por la sorpresa, como quien dice «¡Dios mío!». Pero Juan escribe que Tomás «respondió» y «le dijo» (εἶπεν αὐτῷ): las palabras van dirigidas a Jesús. Y Jesús no lo corrige, sino que le dice que ha creído (Jn 20:29). Es la confesión más alta del Evangelio de Juan, que había comenzado diciendo que el Verbo era Dios (Jn 1:1).',
        { ejercicio: {
          pregunta: '¿Por qué en Mateo 6:9 se usa Πάτερ y no πατήρ?',
          opciones: [
            { t: 'Porque Πάτερ es el plural de πατήρ.', ok: false, por_que: 'Es singular. El plural es πατέρες.' },
            { t: 'Porque es vocativo: se usa para hablarle directamente al Padre.', ok: true, por_que: 'El vocativo es el caso de la persona a quien se habla. La oración se dirige a Dios.' },
            { t: 'Porque es genitivo: «del Padre».', ok: false, por_que: 'El genitivo de πατήρ es πατρός. Πάτερ es vocativo.' }
          ],
          explicacion: 'El vocativo marca a quién se dirige quien habla. En el Padrenuestro, a Dios como Padre.'
        } }
      ],
      pensar: 'Jesús te enseñó a llamar a Dios Πάτερ, hablándole directamente como hijo. ¿Tu oración es más un hablar acerca de Dios o un hablar con él?'
    },
    {
      id: 'genitivo', n: 'El genitivo: «de»', ref: 'Romanos 1:16; Gálatas 2:16; 2 Corintios 5:14',
      visual: [
        G('Romanos 1:16', 'Romanos 1:16', 'οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον· δύναμις γὰρ Θεοῦ ἐστιν εἰς σωτηρίαν παντὶ τῷ πιστεύοντι, Ἰουδαίῳ τε πρῶτον καὶ Ἕλληνι.', 'U gar epaisjýnomai to euangélion; dýnamis gar Theú estin eis sōtērían pantí tō pisteúonti, Iudaíō te prṓton kai Héllēni.', [['οὐ', 'u'], ['γὰρ', 'gar'], ['ἐπαισχύνομαι', 'epaisjýnomai'], ['τὸ', 'to'], ['εὐαγγέλιον', 'euangélion'], ['δύναμις', 'dýnamis'], ['γὰρ', 'gar'], ['Θεοῦ', 'Theú'], ['ἐστιν', 'estin'], ['εἰς', 'eis'], ['σωτηρίαν', 'sōtērían'], ['παντὶ', 'pantí'], ['τῷ', 'tō'], ['πιστεύοντι', 'pisteúonti'], ['Ἰουδαίῳ', 'Iudaíō'], ['τε', 'te'], ['πρῶτον', 'prṓton'], ['καὶ', 'kai'], ['Ἕλληνι', 'Héllēni']],
          ['no', 'porque', 'me avergüenzo de', 'el', 'evangelio', 'poder', 'porque', 'de Dios', 'es', 'para', 'salvación', 'a todo', 'el', 'que cree', 'al judío', 'tanto', 'primeramente', 'como', 'al griego'],
          'Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Algunos usos del genitivo',
          cab: ['Uso', 'Ejemplo', 'Sentido'],
          filas: [
            ['Posesión', 'τὸν οἶκον τοῦ πατρός μου (Jn 2:16)', 'la casa que es de mi Padre'],
            ['Origen o fuente', 'δύναμις θεοῦ (Ro 1:16)', 'poder que viene de Dios y es suyo'],
            ['Contenido o materia', 'τὸ εὐαγγέλιον τῆς βασιλείας (Mt 4:23)', 'el evangelio que anuncia el reino'],
            ['Descripción', 'σῶμα τῆς ἁμαρτίας (Ro 6:6)', 'el cuerpo dominado por el pecado'],
            ['Con preposición', 'ἐκ πίστεως (Ro 5:1)', 'a partir de la fe, por la fe'],
            ['De comparación', 'μείζων τούτων (1 Co 13:13)', 'mayor que estas'],
          ],
          nota: 'El genitivo es el caso más flexible: el contexto decide qué relación expresa.'
        } }
      ],
      texto: [
        'El genitivo se traduce casi siempre con «de». Pero el «de» español es tan amplio como el genitivo griego: «la casa de Pedro», «un vaso de agua», «el amor de Dios». Cada una de esas frases expresa una relación distinta.',
        { h: 'Poder de Dios' },
        'En Romanos 1:16, Pablo dice que el evangelio es δύναμις θεοῦ, «poder de Dios». θεοῦ está en genitivo. ¿Qué relación expresa? El poder pertenece a Dios y viene de él. No es un poder humano de convencer, sino la fuerza de Dios que obra salvación en todo el que cree.',
        'Fíjate también en las formas: εὐαγγέλιον es acusativo, porque es el complemento de «no me avergüenzo»; δύναμις es nominativo; σωτηρίαν es acusativo después de εἰς, y παντὶ τῷ πιστεύοντι, «a todo el que cree», es dativo. En un solo versículo trabajan cuatro casos.',
        { h: 'Cuando el genitivo admite dos lecturas' },
        'A veces el genitivo deja abiertas dos posibilidades. En «el amor de Cristo nos constriñe» (2 Co 5:14), ¿se trata del amor que Cristo nos tiene o del amor que nosotros le tenemos a él? La mayoría de los comentaristas lo entiende como el amor de Cristo por nosotros, porque Pablo sigue hablando de su muerte por todos. El contexto decide.',
        { posturas: {
          titulo: '«La fe de Jesucristo» (Gálatas 2:16)',
          a: { n: 'Fe en Cristo', t: 'La lectura tradicional entiende πίστις Ἰησοῦ Χριστοῦ como genitivo de objeto: la fe que tiene a Cristo por objeto, la fe que el creyente pone en él. Así traducen muchas versiones: «por la fe en Jesucristo».' },
          b: { n: 'Fe o fidelidad de Cristo', t: 'Otros estudiosos lo entienden como genitivo de sujeto: la fidelidad que Cristo mismo mostró al obedecer al Padre hasta la cruz. La Reina-Valera deja la ambigüedad del griego: «por la fe de Jesucristo».' },
          c: 'Las dos lecturas afirman la justificación por la fe y no por las obras de la ley. Además, el mismo versículo dice sin ambigüedad: «nosotros también hemos creído en Jesucristo». La doctrina no depende de cómo se lea un genitivo.'
        } },
        { ejercicio: {
          pregunta: 'En δύναμις θεοῦ, ¿qué indica el genitivo θεοῦ?',
          opciones: [
            { t: 'Que Dios recibe el poder.', ok: false, por_que: 'Para indicar a quién se da algo se usaría el dativo, θεῷ.' },
            { t: 'Que el poder pertenece a Dios y procede de él.', ok: true, por_que: 'Es un genitivo de posesión y origen: el poder es de Dios.' },
            { t: 'Que el poder es más grande que Dios.', ok: false, por_que: 'El genitivo de comparación se usa con adjetivos como «mayor», y aquí no hay comparación.' }
          ],
          explicacion: 'El genitivo expresa relaciones muy variadas. Hay que preguntarse qué relación tiene sentido en el contexto.'
        } }
      ],
      pensar: 'Pablo no se avergonzaba del evangelio porque es «poder de Dios para salvación». ¿Hay situaciones en que te cuesta hablar de Cristo? ¿Qué cambia si recuerdas de quién es el poder?'
    },
    {
      id: 'dativo', n: 'El dativo: a quién y con qué', ref: 'Gálatas 5:16; Efesios 2:8',
      visual: [
        G('Gálatas 5:16', 'Gálatas 5:16', 'Λέγω δέ, Πνεύματι περιπατεῖτε καὶ ἐπιθυμίαν σαρκὸς οὐ μὴ τελέσητε.', 'Légō de, Pneúmati peripateíte kai epithymían sarkós u mē telésēte.', [['Λέγω', 'Légō'], ['δέ', 'de'], ['Πνεύματι', 'Pneúmati'], ['περιπατεῖτε', 'peripateíte'], ['καὶ', 'kai'], ['ἐπιθυμίαν', 'epithymían'], ['σαρκὸς', 'sarkós'], ['οὐ', 'u'], ['μὴ', 'mē'], ['τελέσητε', 'telésēte']],
          ['digo', 'pues', 'por el Espíritu', 'andad', 'y', 'el deseo', 'de la carne', 'no', 'no (de ningún modo)', 'satisfaréis'],
          'Digo, pues: Andad en el Espíritu, y no satisfagáis los deseos de la carne.'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Algunos usos del dativo',
          cab: ['Uso', 'Ejemplo', 'Sentido'],
          filas: [
            ['Complemento indirecto', 'δίδωμι ὑμῖν (Jn 13:34)', 'os doy, a vosotros'],
            ['Interés', 'ἐμοὶ τὸ ζῆν Χριστός (Fil 1:21)', 'para mí, el vivir es Cristo'],
            ['Medio o instrumento', 'τῇ χάριτι ἐστε σεσῳσμένοι (Ef 2:8)', 'por la gracia sois salvos'],
            ['Esfera', 'πνεύματι περιπατεῖτε (Gá 5:16)', 'andad en el Espíritu, por el Espíritu'],
            ['Con preposición', 'ἐν Χριστῷ (2 Co 5:17)', 'en Cristo, unido a Cristo'],
            ['Tiempo', 'τῇ τρίτῃ ἡμέρᾳ (Mt 16:21)', 'al tercer día'],
          ],
          nota: 'Algunos verbos llevan su complemento en dativo: πιστεύω τῷ θεῷ, «creo a Dios»; ἀκολουθέω αὐτῷ, «le sigo».'
        } }
      ],
      texto: [
        'El dativo responde a las preguntas «¿a quién?», «¿para quién?», «¿con qué?», «¿dónde?» y «¿cuándo?». Es menos frecuente que los otros casos, pero aparece en frases muy importantes del Nuevo Testamento.',
        { h: 'A quién: el complemento indirecto' },
        'El uso más sencillo es el de la persona que recibe algo: δίδωμι ὑμῖν, «os doy». ὑμῖν, «a vosotros», está en dativo. Lo mismo después de verbos como «decir», «mostrar» o «escribir».',
        { h: 'Con qué: el medio' },
        'En Efesios 2:8 Pablo dice τῇ γὰρ χάριτι ἐστε σεσῳσμένοι, «porque por gracia sois salvos». La palabra χάριτι está en dativo: la gracia es el medio por el cual Dios salva. No hay preposición; el caso solo lo dice. Lo estudiarás con más detalle en el taller.',
        { h: 'Andar en el Espíritu' },
        'En Gálatas 5:16, πνεύματι está en dativo sin preposición. La Reina-Valera traduce «Andad en el Espíritu». El dativo puede entenderse como esfera, «en el ámbito del Espíritu», o como medio, «por el Espíritu», guiados y fortalecidos por él. Las dos ideas se complementan: el creyente vive en la esfera del Espíritu y por su poder. Más adelante, Pablo dice: «Si vivimos por el Espíritu, andemos también por el Espíritu» (Gá 5:25), donde la Reina-Valera usa «por» con el mismo dativo.',
        'El versículo termina con una promesa fuerte: οὐ μὴ τελέσητε, «no satisfaréis». La doble negación οὐ μή es la forma más enfática de negar en griego: «de ningún modo». Quien anda en el Espíritu no está condenado a obedecer los deseos de la carne.',
        { h: 'En Cristo' },
        'La preposición ἐν con dativo produce una de las expresiones favoritas de Pablo: ἐν Χριστῷ, «en Cristo», que aparece decenas de veces en sus cartas. Indica la unión del creyente con Cristo: «si alguno está en Cristo, nueva criatura es» (2 Co 5:17).',
        { ejercicio: {
          pregunta: 'En τῇ χάριτι ἐστε σεσῳσμένοι (Efesios 2:8), ¿qué indica el dativo?',
          opciones: [
            { t: 'A quién se da la gracia.', ok: false, por_que: 'Aquí la gracia no es quien recibe, sino el medio de la salvación.' },
            { t: 'El medio: la gracia es aquello por lo cual somos salvos.', ok: true, por_que: 'Es un dativo de medio o instrumento: «por gracia».' },
            { t: 'El momento en que fuimos salvos.', ok: false, por_que: 'El dativo de tiempo se usa con palabras como «día» u «hora». Aquí no hay tiempo.' }
          ],
          explicacion: 'El dativo sin preposición puede indicar el medio o instrumento: lo que hace posible la acción.'
        } }
      ],
      pensar: 'Pablo promete que quien anda en el Espíritu de ningún modo satisfará los deseos de la carne. ¿En qué área de tu vida necesitas depender más del Espíritu que de tu propia fuerza?'
    },
    {
      id: 'acusativo', n: 'El acusativo: el complemento directo', ref: 'Juan 13:34',
      visual: [
        G('Juan 13:34', 'Juan 13:34', 'ἐντολὴν καινὴν δίδωμι ὑμῖν, ἵνα ἀγαπᾶτε ἀλλήλους, καθὼς ἠγάπησα ὑμᾶς ἵνα καὶ ὑμεῖς ἀγαπᾶτε ἀλλήλους.', 'Entolḗn kainḗn dídōmi hymín, hína agapáte allḗlus, kathṓs ēgápēsa hymás hína kai hymeís agapáte allḗlus.', [['ἐντολὴν', 'entolḗn'], ['καινὴν', 'kainḗn'], ['δίδωμι', 'dídōmi'], ['ὑμῖν', 'hymín'], ['ἵνα', 'hína'], ['ἀγαπᾶτε', 'agapáte'], ['ἀλλήλους', 'allḗlus'], ['καθὼς', 'kathṓs'], ['ἠγάπησα', 'ēgápēsa'], ['ὑμᾶς', 'hymás'], ['ἵνα', 'hína'], ['καὶ', 'kai'], ['ὑμεῖς', 'hymeís'], ['ἀγαπᾶτε', 'agapáte'], ['ἀλλήλους', 'allḗlus']],
          ['un mandamiento', 'nuevo', 'doy', 'a vosotros', 'que', 'améis', 'unos a otros', 'como', 'amé', 'a vosotros', 'que', 'también', 'vosotros', 'améis', 'unos a otros'],
          'Un mandamiento nuevo os doy: Que os améis unos a otros; como yo os he amado, que también os améis unos a otros.'),
        { tipo: 'tabla', titulo: 'Usos', tabla: {
          titulo: 'Algunos usos del acusativo',
          cab: ['Uso', 'Ejemplo', 'Sentido'],
          filas: [
            ['Complemento directo', 'ἐντολὴν καινὴν δίδωμι (Jn 13:34)', 'doy un mandamiento nuevo'],
            ['Dos acusativos', 'ὑμᾶς διδάξει πάντα (Jn 14:26)', 'os enseñará todas las cosas'],
            ['Con preposición', 'εἰς τὸν κόσμον (Jn 3:17)', 'al mundo, hacia el mundo'],
            ['Extensión de tiempo', 'ἔμειναν οὐ πολλὰς ἡμέρας (Jn 2:12)', 'estuvieron no muchos días'],
            ['Sujeto de un infinitivo', 'πρὸ τοῦ τὸν κόσμον εἶναι (Jn 17:5)', 'antes que el mundo fuese'],
          ],
          nota: 'En los neutros, el acusativo es igual al nominativo: τὸ ἔργον puede ser sujeto o complemento.'
        } }
      ],
      texto: [
        'El acusativo es el caso del complemento directo: la persona o cosa que recibe la acción del verbo. Es el caso más frecuente del Nuevo Testamento, con 16.836 apariciones entre sustantivos, adjetivos y artículos.',
        { h: 'El mandamiento nuevo' },
        'En Juan 13:34, ἐντολὴν καινήν, «un mandamiento nuevo», está en acusativo: es lo que Jesús da. Fíjate que va al comienzo de la frase, antes del verbo. Como el caso ya dice su función, Jesús puede ponerlo primero para destacarlo: lo nuevo es este mandamiento.',
        'Después vienen dos acusativos de persona: ἀλλήλους, «unos a otros», y ὑμᾶς, «a vosotros». ἀλλήλους es un pronombre recíproco: solo existe en plural y en los casos que no son el nominativo, porque siempre es complemento. En «como yo os he amado», ὑμᾶς es el acusativo de ὑμεῖς, «vosotros».',
        { h: 'Las terminaciones más comunes' },
        'El acusativo singular termina casi siempre en -ν: λόγον, ἡμέραν, γραφήν, προφήτην, πόλιν. En la tercera declinación termina a menudo en -α: πατέρα, σάρκα. El acusativo plural termina en -ους en la segunda declinación (λόγους), en -ας en la primera (ἡμέρας, γραφάς) y en -ας o -εις en la tercera (πατέρας, πόλεις). Y el artículo lo confirma: τόν, τήν, τό; τούς, τάς, τά.',
        { h: 'Un detalle que confunde' },
        'En los sustantivos neutros, el nominativo y el acusativo son iguales: τὸ ἔργον, τὰ ἔργα; τὸ πνεῦμα, τὰ πνεύματα. Cuando veas un neutro, el contexto dirá si es sujeto o complemento. Y una regla curiosa: un sujeto neutro plural suele llevar el verbo en singular. En Mateo 6:33, ταῦτα πάντα προστεθήσεται dice literalmente «todas estas cosas será añadido».',
        { ejercicio: {
          pregunta: 'En ἐντολὴν καινὴν δίδωμι ὑμῖν, ¿en qué caso está ἐντολήν y por qué?',
          opciones: [
            { t: 'En nominativo, porque es el sujeto.', ok: false, por_que: 'El sujeto es «yo», incluido en el verbo δίδωμι. El nominativo sería ἐντολή.' },
            { t: 'En acusativo, porque es lo que Jesús da: el complemento directo.', ok: true, por_que: 'La -ν final y la función lo confirman: Jesús da un mandamiento.' },
            { t: 'En dativo, porque es a quien se da algo.', ok: false, por_que: 'A quienes se da es a «vosotros», ὑμῖν, que sí está en dativo.' }
          ],
          explicacion: 'Dar algo a alguien: lo que se da va en acusativo y quien lo recibe en dativo.'
        } }
      ],
      pensar: 'El mandamiento es nuevo por su medida: «como yo os he amado». ¿A quién de tu iglesia o de tu familia te cuesta amar así? ¿Qué paso concreto puedes dar esta semana?'
    },
    {
      id: 'primera-segunda', n: 'Primera y segunda declinación', ref: '2 Timoteo 3:16',
      visual: [
        { tipo: 'tabla', titulo: 'Segunda', tabla: {
          titulo: 'Segunda declinación: masculinos en -ος y neutros en -ον',
          cab: ['Caso', 'λόγος, palabra (sing.)', 'Plural', 'ἔργον, obra (sing.)', 'Plural'],
          filas: [
            ['Nominativo', 'ὁ λόγος', 'οἱ λόγοι', 'τὸ ἔργον', 'τὰ ἔργα'],
            ['Genitivo', 'τοῦ λόγου', 'τῶν λόγων', 'τοῦ ἔργου', 'τῶν ἔργων'],
            ['Dativo', 'τῷ λόγῳ', 'τοῖς λόγοις', 'τῷ ἔργῳ', 'τοῖς ἔργοις'],
            ['Acusativo', 'τὸν λόγον', 'τοὺς λόγους', 'τὸ ἔργον', 'τὰ ἔργα'],
            ['Vocativo', 'λόγε', 'λόγοι', 'ἔργον', 'ἔργα'],
          ],
          nota: 'Igual que λόγος: ἄνθρωπος, θεός, κύριος, κόσμος, νόμος, οὐρανός. Algunas palabras en -ος son femeninas, como ἡ ὁδός, «el camino».'
        } },
        { tipo: 'tabla', titulo: 'Primera', tabla: {
          titulo: 'Primera declinación: femeninos en -α y en -η, y masculinos en -ης',
          cab: ['Caso', 'ἡμέρα, día', 'γραφή, escritura', 'δόξα, gloria', 'προφήτης, profeta'],
          filas: [
            ['Nom. sing.', 'ἡ ἡμέρα', 'ἡ γραφή', 'ἡ δόξα', 'ὁ προφήτης'],
            ['Gen. sing.', 'τῆς ἡμέρας', 'τῆς γραφῆς', 'τῆς δόξης', 'τοῦ προφήτου'],
            ['Dat. sing.', 'τῇ ἡμέρᾳ', 'τῇ γραφῇ', 'τῇ δόξῃ', 'τῷ προφήτῃ'],
            ['Ac. sing.', 'τὴν ἡμέραν', 'τὴν γραφήν', 'τὴν δόξαν', 'τὸν προφήτην'],
            ['Nom. pl.', 'αἱ ἡμέραι', 'αἱ γραφαί', 'αἱ δόξαι', 'οἱ προφῆται'],
            ['Gen. pl.', 'τῶν ἡμερῶν', 'τῶν γραφῶν', 'τῶν δοξῶν', 'τῶν προφητῶν'],
            ['Dat. pl.', 'ταῖς ἡμέραις', 'ταῖς γραφαῖς', 'ταῖς δόξαις', 'τοῖς προφήταις'],
            ['Ac. pl.', 'τὰς ἡμέρας', 'τὰς γραφάς', 'τὰς δόξας', 'τοὺς προφήτας'],
          ],
          nota: 'El plural es igual en los cuatro modelos. Como προφήτης se declinan μαθητής, «discípulo», y ἐργάτης, «obrero».'
        } },
        G('2 Timoteo 3:16', '2 Timoteo 3:16', 'πᾶσα γραφὴ θεόπνευστος καὶ ὠφέλιμος πρὸς διδασκαλίαν, πρὸς ἐλεγμόν, πρὸς ἐπανόρθωσιν, πρὸς παιδείαν τὴν ἐν δικαιοσύνῃ,', 'Pása grafḗ theópneustos kai ōfélimos pros didaskalían, pros elegmón, pros epanórthōsin, pros paideían tēn en dikaiosýnē,', [['πᾶσα', 'pása'], ['γραφὴ', 'grafḗ'], ['θεόπνευστος', 'theópneustos'], ['καὶ', 'kai'], ['ὠφέλιμος', 'ōfélimos'], ['πρὸς', 'pros'], ['διδασκαλίαν', 'didaskalían'], ['πρὸς', 'pros'], ['ἐλεγμόν', 'elegmón'], ['πρὸς', 'pros'], ['ἐπανόρθωσιν', 'epanórthōsin'], ['πρὸς', 'pros'], ['παιδείαν', 'paideían'], ['τὴν', 'tēn'], ['ἐν', 'en'], ['δικαιοσύνῃ', 'dikaiosýnē']],
          ['toda', 'Escritura', 'inspirada por Dios', 'y', 'útil', 'para', 'enseñanza', 'para', 'reprensión', 'para', 'corrección', 'para', 'instrucción', 'la', 'en', 'justicia'],
          'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia,')
      ],
      texto: [
        'Los sustantivos griegos se agrupan en tres declinaciones, es decir, tres juegos de terminaciones. Las dos primeras son muy regulares y reúnen la mayoría de los sustantivos del Nuevo Testamento.',
        { h: 'La segunda declinación' },
        'Conviene empezar por la segunda, la más fácil. Sus masculinos terminan en -ος, como λόγος, y sus neutros en -ον, como ἔργον. Mira la primera tabla del panel: las terminaciones -ος, -ου, -ῳ, -ον en singular y -οι, -ων, -οις, -ους en plural se repiten en cientos de palabras. Si aprendes λόγος, ya sabes declinar ἄνθρωπος, θεός, κύριος y κόσμος.',
        'Los neutros difieren solo en el nominativo y el acusativo: -ον en singular y -α en plural. Fíjate en la pequeña iota debajo de la omega en el dativo, λόγῳ: es la iota suscrita, que no se pronuncia pero marca el dativo.',
        { h: 'La primera declinación' },
        'La primera declinación reúne sobre todo femeninos terminados en -α o en -η, y algunos masculinos en -ης. Las terminaciones del singular cambian un poco según la vocal: ἡμέρα conserva la α en todo el singular, γραφή conserva la η, y δόξα alterna: -α en nominativo y acusativo, -ης y -ῃ en genitivo y dativo. El plural es igual para todos: -αι, -ων, -αις, -ας.',
        'Los masculinos como προφήτης y μαθητής usan la primera declinación con el artículo masculino. Su genitivo, προφήτου, se parece al de λόγου.',
        { h: 'En 2 Timoteo 3:16' },
        'El versículo del panel está lleno de primera declinación: γραφή, «Escritura»; διδασκαλίαν, «enseñanza»; παιδείαν, «instrucción»; δικαιοσύνῃ, «justicia». Hay también una palabra que solo aparece aquí en el Nuevo Testamento: θεόπνευστος, «inspirada por Dios», literalmente «soplada por Dios». Es un adjetivo compuesto de θεός, «Dios», y πνέω, «soplar», la misma raíz de πνεῦμα. Toda la Escritura procede del aliento de Dios.',
        { ejercicio: {
          pregunta: '¿Qué forma de λόγος corresponde al acusativo plural, «a las palabras»?',
          opciones: [
            { t: 'λόγοι', ok: false, por_que: 'λόγοι es el nominativo plural, «las palabras» como sujeto.' },
            { t: 'λόγους', ok: true, por_que: 'La terminación -ους es la del acusativo plural de la segunda declinación, con el artículo τούς.' },
            { t: 'λόγων', ok: false, por_que: 'λόγων es el genitivo plural, «de las palabras».' }
          ],
          explicacion: 'Segunda declinación masculina, plural: -οι, -ων, -οις, -ους.'
        } }
      ],
      pensar: 'Toda Escritura es «soplada por Dios» y útil para enseñar, redargüir, corregir e instruir. ¿Cuál de estas cuatro funciones de la Palabra necesitas más en este tiempo?'
    },
    {
      id: 'tercera', n: 'La tercera declinación', ref: 'Juan 3:6',
      visual: [
        { tipo: 'tabla', titulo: 'Tercera', tabla: {
          titulo: 'Tercera declinación: cuatro modelos',
          cab: ['Caso', 'σάρξ, carne', 'πνεῦμα, espíritu', 'πόλις, ciudad', 'πατήρ, padre'],
          filas: [
            ['Nom. sing.', 'ἡ σάρξ', 'τὸ πνεῦμα', 'ἡ πόλις', 'ὁ πατήρ'],
            ['Gen. sing.', 'τῆς σαρκός', 'τοῦ πνεύματος', 'τῆς πόλεως', 'τοῦ πατρός'],
            ['Dat. sing.', 'τῇ σαρκί', 'τῷ πνεύματι', 'τῇ πόλει', 'τῷ πατρί'],
            ['Ac. sing.', 'τὴν σάρκα', 'τὸ πνεῦμα', 'τὴν πόλιν', 'τὸν πατέρα'],
            ['Nom. pl.', 'αἱ σάρκες', 'τὰ πνεύματα', 'αἱ πόλεις', 'οἱ πατέρες'],
            ['Gen. pl.', 'τῶν σαρκῶν', 'τῶν πνευμάτων', 'τῶν πόλεων', 'τῶν πατέρων'],
            ['Dat. pl.', 'ταῖς σαρξί(ν)', 'τοῖς πνεύμασι(ν)', 'ταῖς πόλεσι(ν)', 'τοῖς πατράσι(ν)'],
            ['Ac. pl.', 'τὰς σάρκας', 'τὰ πνεύματα', 'τὰς πόλεις', 'τοὺς πατέρας'],
          ],
          nota: 'La raíz se ve en el genitivo: σαρκ-ός, πνευματ-ος. Por eso el diccionario da siempre el nominativo y el genitivo: σάρξ, σαρκός.'
        } },
        G('Juan 3:6', 'Juan 3:6', 'τὸ γεγεννημένον ἐκ τῆς σαρκὸς σάρξ ἐστιν, καὶ τὸ γεγεννημένον ἐκ τοῦ Πνεύματος πνεῦμά ἐστιν.', 'To gegennēménon ek tēs sarkós sarx estin, kai to gegennēménon ek tu Pneúmatos pneúmá estin.', [['τὸ', 'to'], ['γεγεννημένον', 'gegennēménon'], ['ἐκ', 'ek'], ['τῆς', 'tēs'], ['σαρκὸς', 'sarkós'], ['σάρξ', 'sarx'], ['ἐστιν', 'estin'], ['καὶ', 'kai'], ['τὸ', 'to'], ['γεγεννημένον', 'gegennēménon'], ['ἐκ', 'ek'], ['τοῦ', 'tu'], ['Πνεύματος', 'Pneúmatos'], ['πνεῦμά', 'pneúmá'], ['ἐστιν', 'estin']],
          ['lo', 'nacido', 'de', 'la', 'carne', 'carne', 'es', 'y', 'lo', 'nacido', 'de', 'el', 'Espíritu', 'espíritu', 'es'],
          'Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu, espíritu es.')
      ],
      texto: [
        'La tercera declinación es la más variada. Reúne palabras de los tres géneros con nominativos muy distintos: σάρξ, πνεῦμα, πόλις, πατήρ, χάρις, ἀνήρ, γυνή. Pero tiene un truco: su verdadera raíz aparece en el genitivo.',
        { h: 'El genitivo revela la raíz' },
        'En el nominativo σάρξ la raíz σαρκ- está escondida, porque κ más ς se escriben juntas como ξ. En el genitivo σαρκός aparece entera. Lo mismo pasa con πνεῦμα: el genitivo πνεύματος muestra la raíz πνευματ-. Por eso los diccionarios dan siempre dos formas: σάρξ, σαρκός; πνεῦμα, πνεύματος; χάρις, χάριτος.',
        'Una vez que conoces la raíz, las terminaciones son bastante regulares: -ος en el genitivo singular, -ι en el dativo, -α o -ν en el acusativo; -ες, -ων, -σι(ν), -ας en plural. Los neutros, como πνεῦμα, tienen el nominativo y el acusativo iguales: πνεῦμα en singular, πνεύματα en plural.',
        { h: 'Modelos con cambios' },
        'Algunas palabras cambian la vocal de la raíz. πόλις hace πόλεως y πόλει; igual se declinan πίστις, δύναμις y ἀνάστασις (pero no χάρις, que hace χάριτος). πατήρ pierde la ε en algunos casos: πατρός, πατρί, pero πατέρα. Lo mismo hacen μήτηρ y θυγάτηρ. No necesitas memorizar todas las variantes: con el nominativo y el genitivo del diccionario y las terminaciones generales, reconocerás casi todas las formas.',
        { h: 'Carne y espíritu' },
        'Juan 3:6 pone frente a frente dos palabras de la tercera declinación. Primero en genitivo, después de ἐκ: ἐκ τῆς σαρκός, «de la carne»; ἐκ τοῦ πνεύματος, «del Espíritu». Luego en nominativo, como predicado: σάρξ ἐστιν, «carne es»; πνεῦμά ἐστιν, «espíritu es». Jesús le explica a Nicodemo que cada origen produce algo de su misma naturaleza. El nacimiento natural produce vida natural; solo el Espíritu produce vida espiritual. Por eso hay que nacer de nuevo.',
        'Fíjate también en el artículo: en los dos casos es neutro, τό, porque se refiere a «lo nacido», y en ἐκ τοῦ πνεύματος el artículo τοῦ es neutro porque πνεῦμα es neutro.',
        { ejercicio: {
          pregunta: '¿Por qué los diccionarios dan dos formas, como σάρξ, σαρκός?',
          opciones: [
            { t: 'Porque son dos palabras distintas con el mismo sentido.', ok: false, por_que: 'Es una sola palabra: nominativo y genitivo.' },
            { t: 'Porque el genitivo muestra la raíz sobre la que se forman los demás casos.', ok: true, por_que: 'En la tercera declinación la raíz se ve en el genitivo: σαρκ-ός, σαρκ-ί, σάρκ-α.' },
            { t: 'Porque σαρκός es la forma del plural.', ok: false, por_que: 'σαρκός es genitivo singular. El nominativo plural es σάρκες.' }
          ],
          explicacion: 'Aprende los sustantivos de la tercera declinación con su genitivo: así conoces su raíz.'
        } }
      ],
      pensar: '«Lo que es nacido del Espíritu, espíritu es.» ¿Qué señales de la vida nueva que da el Espíritu puedes reconocer hoy en tu vida?'
    },
    {
      id: 'articulo', n: 'El artículo y su ausencia', ref: 'Juan 1:4; Juan 1:1',
      visual: [
        { tipo: 'tabla', titulo: 'El artículo', tabla: {
          titulo: 'El artículo ὁ, ἡ, τό',
          cab: ['Caso', 'Masculino', 'Femenino', 'Neutro'],
          filas: [
            ['Nom. sing.', 'ὁ', 'ἡ', 'τό'],
            ['Gen. sing.', 'τοῦ', 'τῆς', 'τοῦ'],
            ['Dat. sing.', 'τῷ', 'τῇ', 'τῷ'],
            ['Ac. sing.', 'τόν', 'τήν', 'τό'],
            ['Nom. pl.', 'οἱ', 'αἱ', 'τά'],
            ['Gen. pl.', 'τῶν', 'τῶν', 'τῶν'],
            ['Dat. pl.', 'τοῖς', 'ταῖς', 'τοῖς'],
            ['Ac. pl.', 'τούς', 'τάς', 'τά'],
          ],
          nota: 'Es la palabra más frecuente del Nuevo Testamento: 19.783 veces. El griego no tiene artículo indefinido («un, una»).'
        } },
        G('Juan 1:4', 'Juan 1:4', 'ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων.', 'En autṓ zōḗ ēn, kai hē zōḗ ēn to fōs tōn anthrṓpōn.', [['ἐν', 'en'], ['αὐτῷ', 'autṓ'], ['ζωὴ', 'zōḗ'], ['ἦν', 'ēn'], ['καὶ', 'kai'], ['ἡ', 'hē'], ['ζωὴ', 'zōḗ'], ['ἦν', 'ēn'], ['τὸ', 'to'], ['φῶς', 'fōs'], ['τῶν', 'tōn'], ['ἀνθρώπων', 'anthrṓpōn']],
          ['en', 'él', 'vida', 'había', 'y', 'la', 'vida', 'era', 'la', 'luz', 'de los', 'hombres'],
          'En él estaba la vida, y la vida era la luz de los hombres.')
      ],
      texto: [
        'El artículo griego, ὁ, ἡ, τό, se parece a nuestro «el, la, lo», pero no funciona exactamente igual. Aprenderlo bien es una de las inversiones que más rinden: aparece una de cada siete palabras.',
        { h: 'Sin «un»' },
        'El griego no tiene artículo indefinido. Cuando un sustantivo no lleva artículo, el español a veces pone «un»: φωνὴ ἐγένετο, «vino una voz» (Mr 1:11). Otras veces no pone nada, o pone «el» igual. La traducción depende del contexto, no de una regla mecánica.',
        { h: 'La vida y la vida' },
        'Juan 1:4 muestra un uso precioso. Primero dice ἐν αὐτῷ ζωὴ ἦν, «en él había vida», sin artículo: vida, sin más. Luego dice καὶ ἡ ζωὴ ἦν τὸ φῶς, «y la vida era la luz», con artículo: esa vida que acaba de mencionar. El artículo señala algo ya conocido o ya nombrado. Es como cuando en español decimos «un hombre entró; el hombre llevaba una carta».',
        'El artículo también marca lo que es único o conocido por todos: ὁ θεός, «Dios»; ὁ κόσμος, «el mundo». Por eso con nombres propios el griego usa a menudo el artículo, ὁ Ἰησοῦς, que el español no traduce.',
        { h: 'Lo que hace el artículo' },
        'Además de determinar, el artículo convierte en sustantivo casi cualquier cosa. Con un adjetivo: οἱ ἅγιοι, «los santos». Con un participio: ὁ πιστεύων, «el que cree». Con un infinitivo: τὸ ζῆν, «el vivir». Con una frase entera: τὰ ἄνω, «las cosas de arriba» (Col 3:1). Y, como viste en la ruta I, ayuda a distinguir el sujeto del predicado.',
        { h: 'La ausencia del artículo no es «un»' },
        'En Juan 1:1, la última frase dice θεὸς ἦν ὁ λόγος, sin artículo delante de θεός. ¿Significa «un dios»? No. La ausencia del artículo aquí marca que θεός es el predicado, no el sujeto, y que describe la naturaleza del Verbo. Lo estudiarás paso a paso en el taller.',
        { ir: { t: 'Ir al taller: Juan 1:1', a: '#taller/1' } },
        { ejercicio: {
          pregunta: 'En Juan 1:4, ¿por qué la segunda mención de ζωή lleva artículo?',
          opciones: [
            { t: 'Porque se refiere a la vida que acaba de mencionar.', ok: true, por_que: 'El artículo señala lo ya conocido o ya nombrado: «esa vida».' },
            { t: 'Porque en griego el artículo es obligatorio después de καί.', ok: false, por_que: 'No existe esa regla. El artículo aparece por razones de sentido.' },
            { t: 'Porque está en plural.', ok: false, por_que: 'ζωή está en singular, igual que ἡ.' }
          ],
          explicacion: 'Un uso básico del artículo es volver a señalar algo ya mencionado.'
        } }
      ],
      pensar: '«En él estaba la vida, y la vida era la luz de los hombres.» ¿Qué áreas de tu vida necesitan hoy la luz que solo viene de Cristo?'
    },
    {
      id: 'adjetivo', n: 'El adjetivo: atributivo y predicativo', ref: 'Juan 10:11; Romanos 7:12',
      visual: [
        G('Juan 10:11', 'Juan 10:11', 'ἐγώ εἰμι ὁ ποιμὴν ὁ καλός. ὁ ποιμὴν ὁ καλὸς τὴν ψυχὴν αὐτοῦ τίθησιν ὑπὲρ τῶν προβάτων·', 'Egṓ eimi ho poimḗn ho kalós. ho poimḗn ho kalós tēn psyjḗn autú títhēsin hypér tōn probátōn;', [['ἐγώ', 'egṓ'], ['εἰμι', 'eimi'], ['ὁ', 'ho'], ['ποιμὴν', 'poimḗn'], ['ὁ', 'ho'], ['καλός', 'kalós'], ['ὁ', 'ho'], ['ποιμὴν', 'poimḗn'], ['ὁ', 'ho'], ['καλὸς', 'kalós'], ['τὴν', 'tēn'], ['ψυχὴν', 'psyjḗn'], ['αὐτοῦ', 'autú'], ['τίθησιν', 'títhēsin'], ['ὑπὲρ', 'hypér'], ['τῶν', 'tōn'], ['προβάτων', 'probátōn']],
          ['yo', 'soy', 'el', 'pastor', 'el', 'bueno', 'el', 'pastor', 'el', 'bueno', 'la', 'vida', 'de él', 'pone', 'por', 'las', 'ovejas'],
          'Yo soy el buen pastor; el buen pastor su vida da por las ovejas.'),
        { tipo: 'tabla', titulo: 'Posiciones', tabla: {
          titulo: 'Dónde se pone el adjetivo y qué cambia',
          cab: ['Posición', 'Ejemplo', 'Se traduce'],
          filas: [
            ['Atributiva: artículo + adjetivo + sustantivo', 'ὁ καλὸς ποιμήν', 'el buen pastor'],
            ['Atributiva: artículo + sustantivo + artículo + adjetivo', 'ὁ ποιμὴν ὁ καλός (Jn 10:11)', 'el pastor, el bueno'],
            ['Predicativa: el adjetivo fuera del artículo', 'ὁ μὲν νόμος ἅγιος (Ro 7:12)', 'la ley es santa'],
            ['Sustantivada: artículo + adjetivo', 'ἀπὸ τοῦ πονηροῦ (Mt 6:13)', 'del mal, del maligno'],
          ],
          nota: 'El adjetivo concuerda con su sustantivo en caso, número y género: ἐντολὴν καινήν, «un mandamiento nuevo», los dos en acusativo singular femenino.'
        } }
      ],
      texto: [
        'Los adjetivos griegos se declinan como los sustantivos y concuerdan con ellos en caso, número y género. Un adjetivo masculino como ἀγαθός, «bueno», tiene forma femenina ἀγαθή y neutra ἀγαθόν, con las terminaciones de la primera y segunda declinación que ya conoces.',
        { h: 'Lo que dice la posición' },
        'En griego, la posición del adjetivo respecto del artículo cambia el sentido. Si el adjetivo está «dentro» del artículo, es decir, precedido por él, describe al sustantivo: es atributivo. ὁ καλὸς ποιμήν significa «el buen pastor». Si el adjetivo está «fuera» del artículo, afirma algo: es predicativo, y se suple el verbo «ser». ὁ μὲν νόμος ἅγιος significa «la ley a la verdad es santa» (Ro 7:12).',
        { h: 'El pastor, el bueno' },
        'En Juan 10:11 Jesús usa la segunda forma atributiva: ὁ ποιμὴν ὁ καλός, con el artículo repetido. Es como si dijera «el pastor, el bueno». Esa construcción da peso al adjetivo: no es un pastor más, sino el pastor que es verdaderamente bueno. Y lo repite dos veces en el mismo versículo.',
        'La palabra καλός significa «bueno», pero también «hermoso» y «noble». No describe solo la bondad moral, sino una excelencia que se ve. El buen pastor se reconoce por lo que hace: τὴν ψυχὴν αὐτοῦ τίθησιν ὑπὲρ τῶν προβάτων, «su vida da por las ovejas». Fíjate en ὑπέρ con genitivo, «en favor de»: el pastor muere por el bien de sus ovejas.',
        { h: 'Adjetivos que se vuelven sustantivos' },
        'Con el artículo, un adjetivo funciona como sustantivo. ὁ πονηρός es «el malo»; en Mateo 6:13, ἀπὸ τοῦ πονηροῦ puede entenderse «del mal» o «del maligno». οἱ ἅγιοι, «los santos», es el nombre que Pablo da a todos los creyentes de una iglesia (Fil 1:1). τὰ πάντα, «todas las cosas», aparece en textos sobre la creación y la obra de Cristo (Ro 11:36; Col 1:16).',
        { ejercicio: {
          pregunta: '¿Qué significa ὁ νόμος ἅγιος, con el adjetivo fuera del artículo?',
          opciones: [
            { t: 'La ley santa.', ok: false, por_que: 'Para decir «la ley santa» el adjetivo tendría que ir precedido por el artículo: ὁ ἅγιος νόμος.' },
            { t: 'La ley es santa.', ok: true, por_que: 'Fuera del artículo, el adjetivo es predicativo: afirma algo del sustantivo.' },
            { t: 'El santo de la ley.', ok: false, por_que: 'No hay genitivo ni adjetivo sustantivado: ὁ va con νόμος.' }
          ],
          explicacion: 'Dentro del artículo: atributivo («la ley santa»). Fuera del artículo: predicativo («la ley es santa»).'
        } }
      ],
      pensar: 'El buen pastor no solo guía: da su vida por las ovejas. ¿Cómo te mueve a confiar en él saber que ya dio su vida por ti?'
    },
    {
      id: 'preposiciones', n: 'Las preposiciones', ref: 'Romanos 11:36',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-preposiciones.svg', alt: 'Un círculo en el centro y flechas a su alrededor que muestran el sentido espacial de las preposiciones: εἰς entra, ἐκ sale de dentro, ἀπό se aleja, ἐν está dentro, πρός se dirige hacia el borde, παρά está al lado, ἐπί encima, ὑπό debajo, διά atraviesa, περί rodea y μετά acompaña', pie: 'El sentido básico de las preposiciones es espacial.', origen: 'esquema' },
        G('Romanos 11:36', 'Romanos 11:36', 'ὅτι ἐξ αὐτοῦ καὶ δι’ αὐτοῦ καὶ εἰς αὐτὸν τὰ πάντα· αὐτῷ ἡ δόξα εἰς τοὺς αἰῶνας· ἀμήν.', 'Hóti ex autú kai di’ autú kai eis autón ta pánta; autṓ hē dóxa eis tus aiṓnas; amḗn.', [['ὅτι', 'hóti'], ['ἐξ', 'ex'], ['αὐτοῦ', 'autú'], ['καὶ', 'kai'], ['δι’', 'di’'], ['αὐτοῦ', 'autú'], ['καὶ', 'kai'], ['εἰς', 'eis'], ['αὐτὸν', 'autón'], ['τὰ', 'ta'], ['πάντα', 'pánta'], ['αὐτῷ', 'autṓ'], ['ἡ', 'hē'], ['δόξα', 'dóxa'], ['εἰς', 'eis'], ['τοὺς', 'tus'], ['αἰῶνας', 'aiṓnas'], ['ἀμήν', 'amḗn']],
          ['porque', 'de', 'él', 'y', 'por medio de', 'él', 'y', 'para', 'él', 'las', 'cosas todas', 'a él', 'la', 'gloria', 'por', 'los', 'siglos', 'amén'],
          'Porque de él, y por él, y para él, son todas las cosas. A él sea la gloria por los siglos. Amén.'),
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las preposiciones más frecuentes y sus casos',
          cab: ['Preposición', 'Con genitivo', 'Con dativo', 'Con acusativo'],
          filas: [
            ['ἐν (2.743)', '—', 'en, dentro de; con', '—'],
            ['εἰς (1.766)', '—', '—', 'a, hacia, dentro de; para'],
            ['ἐκ (913)', 'de, desde dentro de', '—', '—'],
            ['ἐπί (886)', 'sobre, en', 'sobre, junto a; por', 'sobre, hacia, contra'],
            ['πρός (700)', '—', '—', 'a, hacia, junto a'],
            ['διά (667)', 'por medio de', '—', 'por causa de'],
            ['ἀπό (647)', 'de, desde, lejos de', '—', '—'],
            ['κατά (472)', 'contra; por', '—', 'según; por'],
            ['μετά (470)', 'con', '—', 'después de'],
            ['περί (333)', 'acerca de', '—', 'alrededor de'],
            ['ὑπό (219)', 'por (el agente)', '—', 'debajo de'],
            ['παρά (192)', 'de parte de', 'junto a', 'al lado de; contra'],
          ],
          nota: 'Delante de vocal pierden su última vocal o cambian: δι’ αὐτοῦ, ἐξ αὐτοῦ, μεθ’ ὑμῶν.'
        } }
      ],
      texto: [
        'Las preposiciones son pocas, no cambian de forma y aparecen en todas partes. Las diez más frecuentes suman más de diez mil apariciones. Aprenderlas bien es aprender a ver las relaciones de una frase.',
        { h: 'Del espacio al sentido' },
        'El sentido básico de casi todas las preposiciones es espacial, como muestra el esquema. εἰς es entrar, ἐκ es salir de dentro, ἐν es estar dentro. Desde ese sentido se extienden a otros: εἰς σωτηρίαν, «para salvación», es moverse hacia una meta; ἐκ πίστεως, «por la fe», es lo que sale de la fe como de su fuente.',
        'Cada preposición va con un caso, y algunas con dos o tres. Entonces el caso cambia el sentido. διά con genitivo significa «por medio de»: δι’ αὐτοῦ, «por medio de él». Con acusativo significa «por causa de»: διὰ τοῦτο, «por esto». μετά con genitivo es «con», μεθ’ ὑμῶν; con acusativo es «después de», μετὰ τρεῖς ἡμέρας.',
        { h: 'De él, por él y para él' },
        'Romanos 11:36 cierra el gran capítulo de Pablo sobre el plan de Dios con tres preposiciones. ἐξ αὐτοῦ: todas las cosas vienen de Dios como de su origen. δι’ αὐτοῦ: subsisten y se realizan por medio de él. εἰς αὐτόν: van hacia él como a su meta. Fíjate en los casos: ἐξ y διά con genitivo, αὐτοῦ; εἰς con acusativo, αὐτόν. Tres preposiciones resumen toda la historia: Dios es el principio, el camino y el fin. Por eso termina con una doxología: «a él sea la gloria por los siglos».',
        { h: 'Preposiciones dentro de los verbos' },
        'Muchas preposiciones se unen a los verbos para formar verbos compuestos. ἔρχομαι, «venir», da εἰσέρχομαι, «entrar»; ἐξέρχομαι, «salir»; ἀπέρχομαι, «irse»; προσέρχομαι, «acercarse». Si conoces las preposiciones, entiendes cientos de verbos. Pero cuidado: no siempre el compuesto suma los dos sentidos. ἐπιγινώσκω no siempre significa «conocer más» que γινώσκω; a veces son casi sinónimos.',
        { ejercicio: {
          pregunta: '¿Qué significa διά en διὰ τοῦτο, con acusativo?',
          opciones: [
            { t: 'Por medio de esto.', ok: false, por_que: '«Por medio de» es el sentido de διά con genitivo.' },
            { t: 'Por esto, por causa de esto.', ok: true, por_que: 'Con acusativo, διά indica la causa: διὰ τοῦτο, «por esto».' },
            { t: 'A través de esto.', ok: false, por_que: 'Es el sentido espacial con genitivo, no con acusativo.' }
          ],
          explicacion: 'Las preposiciones que van con más de un caso cambian de sentido según el caso. Por eso hay que mirar la terminación de la palabra que sigue.'
        } }
      ],
      pensar: '«Porque de él, y por él, y para él, son todas las cosas.» Si tu vida viene de Dios, se sostiene por él y va hacia él, ¿qué decisiones de esta semana necesitas ordenar «para él»?'
    },
    {
      id: 'pronombres', n: 'Pronombres personales y αὐτός', ref: 'Mateo 11:28',
      visual: [
        G('Mateo 11:28', 'Mateo 11:28', 'Δεῦτε πρός με πάντες οἱ κοπιῶντες καὶ πεφορτισμένοι, κἀγὼ ἀναπαύσω ὑμᾶς.', 'Deúte pros me pántes hoi kopiṓntes kai pefortisménoi, kagṓ anapaúsō hymás.', [['Δεῦτε', 'Deúte'], ['πρός', 'pros'], ['με', 'me'], ['πάντες', 'pántes'], ['οἱ', 'hoi'], ['κοπιῶντες', 'kopiṓntes'], ['καὶ', 'kai'], ['πεφορτισμένοι', 'pefortisménoi'], ['κἀγὼ', 'kagṓ'], ['ἀναπαύσω', 'anapaúsō'], ['ὑμᾶς', 'hymás']],
          ['venid', 'a', 'mí', 'todos', 'los', 'que trabajan', 'y', 'están cargados', 'y yo', 'haré descansar', 'a vosotros'],
          'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.'),
        { tipo: 'tabla', titulo: 'Pronombres', tabla: {
          titulo: 'Los pronombres personales',
          cab: ['Caso', 'yo', 'nosotros', 'tú', 'vosotros', 'él (masc.)', 'ellos (masc.)'],
          filas: [
            ['Nominativo', 'ἐγώ', 'ἡμεῖς', 'σύ', 'ὑμεῖς', 'αὐτός', 'αὐτοί'],
            ['Genitivo', 'μου, ἐμοῦ', 'ἡμῶν', 'σου, σοῦ', 'ὑμῶν', 'αὐτοῦ', 'αὐτῶν'],
            ['Dativo', 'μοι, ἐμοί', 'ἡμῖν', 'σοι, σοί', 'ὑμῖν', 'αὐτῷ', 'αὐτοῖς'],
            ['Acusativo', 'με, ἐμέ', 'ἡμᾶς', 'σε, σέ', 'ὑμᾶς', 'αὐτόν', 'αὐτούς'],
          ],
          nota: 'Femenino de αὐτός: αὐτή, αὐτῆς, αὐτῇ, αὐτήν; neutro: αὐτό. Las formas cortas (μου, σε) son átonas; las largas (ἐμοῦ, σέ) dan énfasis o van después de preposición.'
        } }
      ],
      texto: [
        'Los pronombres personales se declinan como los sustantivos. Ya los viste en varios versículos; aquí se ordenan.',
        { h: 'Primera y segunda persona' },
        'ἐγώ, «yo», y σύ, «tú», tienen formas muy distintas en el plural: ἡμεῖς, «nosotros», y ὑμεῖς, «vosotros». Ten cuidado con ellas, porque se parecen mucho: solo cambia la primera vocal, ἡ o ὑ. ἡμῶν es «de nosotros, nuestro»; ὑμῶν es «de vosotros, vuestro». Los copistas antiguos también las confundían, y por eso algunos manuscritos difieren en estas palabras.',
        'En Mateo 11:28 hay tres pronombres. με, «a mí», está en acusativo después de πρός. κἀγώ es la unión de καί y ἐγώ: «y yo». Y ὑμᾶς, «a vosotros», es el complemento de ἀναπαύσω, «haré descansar». La invitación es personal: venid a mí, y yo os haré descansar.',
        { h: 'Las formas átonas' },
        'El genitivo, el dativo y el acusativo de «yo» y «tú» tienen dos formas. Las cortas, μου, μοι, με y σου, σοι, σε, son átonas: se apoyan en la palabra anterior, como ὁ πατήρ μου, «mi padre». Las largas, ἐμοῦ, ἐμοί, ἐμέ, se usan para dar énfasis o después de preposición, como en Juan 14:6: δι’ ἐμοῦ, «por medio de mí».',
        { h: 'αὐτός, la palabra de las tres caras' },
        'αὐτός es la tercera palabra más frecuente del Nuevo Testamento, con 5.550 apariciones, y tiene tres usos. El más común es de pronombre de tercera persona en los casos oblicuos: αὐτοῦ, «de él, su»; αὐτῷ, «a él, le»; αὐτόν, «a él, lo». En nominativo puede ser enfático: αὐτὸς γὰρ σώσει, «porque él salvará» (Mt 1:21), él y no otro. Y con artículo significa «el mismo»: en 1 Corintios 12:5, ὁ αὐτὸς κύριος es «el Señor es el mismo».',
        'Como el verbo ya incluye la persona, el griego usa el nominativo ἐγώ, σύ o αὐτός solo cuando quiere destacar. Recuerda esa regla: un pronombre de sujeto expreso casi siempre está ahí por alguna razón.',
        { ejercicio: {
          pregunta: '¿Qué diferencia hay entre ἡμῶν y ὑμῶν?',
          opciones: [
            { t: 'Ninguna: son dos maneras de escribir la misma palabra.', ok: false, por_que: 'Son palabras distintas, aunque se parezcan.' },
            { t: 'ἡμῶν significa «de nosotros» y ὑμῶν «de vosotros».', ok: true, por_que: 'La primera vocal distingue la persona: ἡ- para «nosotros», ὑ- para «vosotros».' },
            { t: 'ἡμῶν es singular y ὑμῶν es plural.', ok: false, por_que: 'Las dos son plurales y genitivas.' }
          ],
          explicacion: 'ἡμεῖς, ἡμῶν, ἡμῖν, ἡμᾶς: nosotros. ὑμεῖς, ὑμῶν, ὑμῖν, ὑμᾶς: vosotros.'
        } }
      ],
      pensar: '«Venid a mí… y yo os haré descansar.» ¿Qué carga estás llevando hoy que necesitas traer personalmente a Jesús?'
    },
    {
      id: 'demostrativos', n: 'Demostrativos, relativos e interrogativos', ref: 'Marcos 4:41; Juan 17:3',
      visual: [
        G('Marcos 4:41', 'Marcos 4:41', 'καὶ ἐφοβήθησαν φόβον μέγαν, καὶ ἔλεγον πρὸς ἀλλήλους Τίς ἄρα οὗτός ἐστιν, ὅτι καὶ ὁ ἄνεμος καὶ ἡ θάλασσα ὑπακούει αὐτῷ;', 'Kai efobḗthēsan fóbon mégan, kai élegon pros allḗlus Tis ára hútós estin, hóti kai ho ánemos kai hē thálassa hypakúei autṓ?', [['καὶ', 'kai'], ['ἐφοβήθησαν', 'efobḗthēsan'], ['φόβον', 'fóbon'], ['μέγαν', 'mégan'], ['καὶ', 'kai'], ['ἔλεγον', 'élegon'], ['πρὸς', 'pros'], ['ἀλλήλους', 'allḗlus'], ['Τίς', 'Tis'], ['ἄρα', 'ára'], ['οὗτός', 'hútós'], ['ἐστιν', 'estin'], ['ὅτι', 'hóti'], ['καὶ', 'kai'], ['ὁ', 'ho'], ['ἄνεμος', 'ánemos'], ['καὶ', 'kai'], ['ἡ', 'hē'], ['θάλασσα', 'thálassa'], ['ὑπακούει', 'hypakúei'], ['αὐτῷ', 'autṓ']],
          ['y', 'temieron', 'temor', 'grande', 'y', 'decían', 'a', 'unos a otros', '¿quién', 'pues', 'este', 'es', 'que', 'aun', 'el', 'viento', 'y', 'el', 'mar', 'obedece', 'a él?'],
          'Entonces temieron con gran temor, y se decían el uno al otro: ¿Quién es éste, que aun el viento y el mar le obedecen?'),
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pronombres que señalan, unen y preguntan',
          cab: ['Pronombre', 'Clase', 'Formas frecuentes', 'Ejemplo'],
          filas: [
            ['οὗτος, este', 'Demostrativo cercano', 'οὗτος, αὕτη, τοῦτο; ταῦτα', 'οὗτός ἐστιν ὁ υἱός μου (Mt 3:17)'],
            ['ἐκεῖνος, aquel', 'Demostrativo lejano', 'ἐκεῖνος, ἐκείνη, ἐκεῖνο', 'ἐν ἐκείνῃ τῇ ἡμέρᾳ (Jn 14:20)'],
            ['ὅς, que, el cual', 'Relativo', 'ὅς, ἥ, ὅ; ὅν, ἥν; οἵ', 'ὃν ἀπέστειλας (Jn 17:3)'],
            ['τίς, ¿quién?', 'Interrogativo (con acento)', 'τίς, τί; τίνα', 'τίς ἄρα οὗτός ἐστιν; (Mr 4:41)'],
            ['τις, alguien', 'Indefinido (sin acento propio)', 'τις, τι; τινα', 'ἐάν τις διψᾷ (Jn 7:37)'],
          ],
          nota: 'El relativo ὅς se distingue del artículo ὁ por el acento y, en varias formas, por el espíritu y la letra inicial: ὅν (relativo) frente a τόν (artículo).'
        } }
      ],
      texto: [
        'Además de los personales, el griego tiene pronombres para señalar, para unir frases y para preguntar. Todos se declinan.',
        { h: 'Este y aquel' },
        'οὗτος, «este», señala lo cercano o lo que se acaba de decir. Su forma cambia bastante: masculino οὗτος, femenino αὕτη, neutro τοῦτο, y en plural ταῦτα, «estas cosas». ἐκεῖνος, «aquel», señala lo lejano: ἐν ἐκείνῃ τῇ ἡμέρᾳ, «en aquel día». Cuando un demostrativo acompaña a un sustantivo, el sustantivo lleva artículo y el demostrativo queda fuera de él: οὗτος ὁ ἄνθρωπος, «este hombre».',
        { h: '¿Quién es este?' },
        'En Marcos 4:41, después de que Jesús calma la tempestad, los discípulos se preguntan: τίς ἄρα οὗτός ἐστιν; «¿Quién es este?». En una sola frase hay un interrogativo, τίς, y un demostrativo, οὗτος. Y la respuesta implícita está en el final: hasta el viento y el mar le obedecen, αὐτῷ, en dativo, porque ὑπακούω lleva su complemento en ese caso. Solo Dios manda sobre el mar (Sal 89:9). Marcos quiere que el lector se haga la misma pregunta.',
        'Fíjate también en φόβον μέγαν ἐφοβήθησαν: «temieron un temor grande». El griego repite la raíz en el verbo y en el complemento para intensificar: tuvieron muchísimo miedo. El temor que sienten después del milagro es mayor que el que sentían durante la tormenta.',
        { h: 'El relativo' },
        'El pronombre relativo ὅς, ἥ, ὅ une una frase con otra, como «que» o «el cual». Concuerda en género y número con la palabra a la que se refiere, pero su caso depende de su función en su propia frase. En Juan 17:3, ὃν ἀπέστειλας, «a quien has enviado», ὅν es masculino porque se refiere a Jesucristo, y acusativo porque es el complemento de «enviaste».',
        { h: 'Con acento o sin él' },
        'τίς con acento agudo es interrogativo: «¿quién?». τις sin acento propio es indefinido: «alguien, alguno». El acento distingue «¿quién tiene sed?» de «si alguno tiene sed» (Jn 7:37). La pregunta se marca además con el signo griego de interrogación, que parece un punto y coma: τί;',
        { ejercicio: {
          pregunta: 'En Marcos 4:41, ¿por qué αὐτῷ está en dativo?',
          opciones: [
            { t: 'Porque el verbo ὑπακούω, «obedecer», lleva su complemento en dativo.', ok: true, por_que: 'Algunos verbos rigen dativo: se obedece «a» alguien.' },
            { t: 'Porque es el sujeto de la frase.', ok: false, por_que: 'El sujeto es «el viento y el mar», en nominativo.' },
            { t: 'Porque va después de una preposición.', ok: false, por_que: 'En esta frase αὐτῷ no tiene preposición delante.' }
          ],
          explicacion: 'Verbos como ὑπακούω, πιστεύω o ἀκολουθέω llevan su complemento en dativo.'
        } }
      ],
      pensar: 'Los discípulos se preguntaron: «¿Quién es este, que aun el viento y el mar le obedecen?». ¿Qué tormenta de tu vida necesita escuchar hoy la voz de Jesús?'
    }
  ];
  window.__GG.sustantivo = sustantivo;
})();
/* Ruta III. El verbo (ver el encabezado de parte1.js). Cifras del Nestle 1904: 28.352 formas verbales. */
(() => {
  const { G } = window.__GG;
  const verbo = [
    {
      id: 'partes', n: 'Las partes de una forma verbal', ref: 'Juan 11:35',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-verbo.svg', alt: 'La forma ἐλύσαμεν dividida en cuatro piezas de colores: el aumento ἐ, la raíz λυ, la marca del aoristo σα y la terminación μεν; debajo, qué dice cada pieza: pasado, desatar, aoristo, nosotros', pie: 'Una forma verbal se arma con piezas.', origen: 'esquema' },
        G('Juan 11:35', 'Juan 11:35', 'ἐδάκρυσεν ὁ Ἰησοῦς.', 'Edákrysen ho Iēsús.', [['ἐδάκρυσεν', 'edákrysen'], ['ὁ', 'ho'], ['Ἰησοῦς', 'Iēsús']],
          ['lloró', 'el', 'Jesús'],
          'Jesús lloró.'),
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
        G('Mateo 7:7', 'Mateo 7:7', 'Αἰτεῖτε, καὶ δοθήσεται ὑμῖν· ζητεῖτε, καὶ εὑρήσετε· κρούετε, καὶ ἀνοιγήσεται ὑμῖν.', 'Aiteíte, kai dothḗsetai hymín; zēteíte, kai heurḗsete; krúete, kai anoigḗsetai hymín.', [['Αἰτεῖτε', 'Aiteíte'], ['καὶ', 'kai'], ['δοθήσεται', 'dothḗsetai'], ['ὑμῖν', 'hymín'], ['ζητεῖτε', 'zēteíte'], ['καὶ', 'kai'], ['εὑρήσετε', 'heurḗsete'], ['κρούετε', 'krúete'], ['καὶ', 'kai'], ['ἀνοιγήσεται', 'anoigḗsetai'], ['ὑμῖν', 'hymín']],
          ['pedid', 'y', 'será dado', 'a vosotros', 'buscad', 'y', 'hallaréis', 'llamad', 'y', 'será abierto', 'a vosotros'],
          'Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.')
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
        G('Juan 5:17', 'Juan 5:17', 'ὁ δὲ ἀπεκρίνατο αὐτοῖς Ὁ Πατήρ μου ἕως ἄρτι ἐργάζεται, κἀγὼ ἐργάζομαι·', 'Ho de apekrínato autoís Ho Patḗr mu héōs árti ergázetai, kagṓ ergázomai;', [['ὁ', 'ho'], ['δὲ', 'de'], ['ἀπεκρίνατο', 'apekrínato'], ['αὐτοῖς', 'autoís'], ['Ὁ', 'Ho'], ['Πατήρ', 'Patḗr'], ['μου', 'mu'], ['ἕως', 'héōs'], ['ἄρτι', 'árti'], ['ἐργάζεται', 'ergázetai'], ['κἀγὼ', 'kagṓ'], ['ἐργάζομαι', 'ergázomai']],
          ['él', 'pero', 'respondió', 'a ellos', 'el', 'Padre', 'de mí', 'hasta', 'ahora', 'trabaja', 'y yo', 'trabajo'],
          'Y Jesús les respondió: Mi Padre hasta ahora trabaja, y yo trabajo.'),
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
        G('Hechos 2:47', 'Hechos 2:47', 'αἰνοῦντες τὸν Θεὸν καὶ ἔχοντες χάριν πρὸς ὅλον τὸν λαόν. ὁ δὲ Κύριος προσετίθει τοὺς σῳζομένους καθ’ ἡμέραν ἐπὶ τὸ αὐτό.', 'Ainúntes ton Theón kai éjontes járin pros hólon ton laón. ho de Kýrios prosetíthei tus sōzoménus kath’ hēméran epí to autó.', [['αἰνοῦντες', 'ainúntes'], ['τὸν', 'ton'], ['Θεὸν', 'Theón'], ['καὶ', 'kai'], ['ἔχοντες', 'éjontes'], ['χάριν', 'járin'], ['πρὸς', 'pros'], ['ὅλον', 'hólon'], ['τὸν', 'ton'], ['λαόν', 'laón'], ['ὁ', 'ho'], ['δὲ', 'de'], ['Κύριος', 'Kýrios'], ['προσετίθει', 'prosetíthei'], ['τοὺς', 'tus'], ['σῳζομένους', 'sōzoménus'], ['καθ’', 'kath’'], ['ἡμέραν', 'hēméran'], ['ἐπὶ', 'epí'], ['τὸ', 'to'], ['αὐτό', 'autó']],
          ['alabando', 'a', 'Dios', 'y', 'teniendo', 'favor', 'con', 'todo', 'el', 'pueblo', 'el', 'y', 'Señor', 'añadía', 'a los', 'que eran salvados', 'cada', 'día', 'a', 'lo', 'mismo'],
          'alabando a Dios, y teniendo favor con todo el pueblo. Y el Señor añadía cada día a la iglesia los que habían de ser salvos.'),
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
        G('Mateo 1:21', 'Mateo 1:21', 'τέξεται δὲ υἱὸν καὶ καλέσεις τὸ ὄνομα αὐτοῦ Ἰησοῦν· αὐτὸς γὰρ σώσει τὸν λαὸν αὐτοῦ ἀπὸ τῶν ἁμαρτιῶν αὐτῶν.', 'Téxetai de hyión kai kaléseis to ónoma autú Iēsún; autós gar sṓsei ton laón autú apó tōn hamartiṓn autṓn.', [['τέξεται', 'téxetai'], ['δὲ', 'de'], ['υἱὸν', 'hyión'], ['καὶ', 'kai'], ['καλέσεις', 'kaléseis'], ['τὸ', 'to'], ['ὄνομα', 'ónoma'], ['αὐτοῦ', 'autú'], ['Ἰησοῦν', 'Iēsún'], ['αὐτὸς', 'autós'], ['γὰρ', 'gar'], ['σώσει', 'sṓsei'], ['τὸν', 'ton'], ['λαὸν', 'laón'], ['αὐτοῦ', 'autú'], ['ἀπὸ', 'apó'], ['τῶν', 'tōn'], ['ἁμαρτιῶν', 'hamartiṓn'], ['αὐτῶν', 'autṓn']],
          ['dará a luz', 'y', 'un hijo', 'y', 'llamarás', 'el', 'nombre', 'de él', 'Jesús', 'él', 'porque', 'salvará', 'al', 'pueblo', 'de él', 'de', 'los', 'pecados', 'de ellos'],
          'Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados.'),
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
        G('Juan 1:11', 'Juan 1:11', 'εἰς τὰ ἴδια ἦλθεν, καὶ οἱ ἴδιοι αὐτὸν οὐ παρέλαβον.', 'Eis ta ídia ḗlthen, kai hoi ídioi autón u parélabon.', [['εἰς', 'eis'], ['τὰ', 'ta'], ['ἴδια', 'ídia'], ['ἦλθεν', 'ḗlthen'], ['καὶ', 'kai'], ['οἱ', 'hoi'], ['ἴδιοι', 'ídioi'], ['αὐτὸν', 'autón'], ['οὐ', 'u'], ['παρέλαβον', 'parélabon']],
          ['a', 'lo', 'suyo', 'vino', 'y', 'los', 'suyos', 'a él', 'no', 'recibieron'],
          'A lo suyo vino, y los suyos no le recibieron.'),
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
        G('Mateo 4:4', 'Mateo 4:4', 'ὁ δὲ ἀποκριθεὶς εἶπεν Γέγραπται Οὐκ ἐπ’ ἄρτῳ μόνῳ ζήσεται ὁ ἄνθρωπος, ἀλλ’ ἐπὶ παντὶ ῥήματι ἐκπορευομένῳ διὰ στόματος Θεοῦ.', 'Ho de apokritheís eípen Gégraptai Uk ep’ ártō mónō zḗsetai ho ánthrōpos, all’ epí pantí rhḗmati ekporeuoménō diá stómatos Theú.', [['ὁ', 'ho'], ['δὲ', 'de'], ['ἀποκριθεὶς', 'apokritheís'], ['εἶπεν', 'eípen'], ['Γέγραπται', 'Gégraptai'], ['Οὐκ', 'Uk'], ['ἐπ’', 'ep’'], ['ἄρτῳ', 'ártō'], ['μόνῳ', 'mónō'], ['ζήσεται', 'zḗsetai'], ['ὁ', 'ho'], ['ἄνθρωπος', 'ánthrōpos'], ['ἀλλ’', 'all’'], ['ἐπὶ', 'epí'], ['παντὶ', 'pantí'], ['ῥήματι', 'rhḗmati'], ['ἐκπορευομένῳ', 'ekporeuoménō'], ['διὰ', 'diá'], ['στόματος', 'stómatos'], ['Θεοῦ', 'Theú']],
          ['él', 'pero', 'respondiendo', 'dijo', 'escrito está', 'no', 'de', 'pan', 'solo', 'vivirá', 'el', 'hombre', 'sino', 'de', 'toda', 'palabra', 'que sale', 'por', 'boca', 'de Dios'],
          'Él respondió y dijo: Escrito está: No sólo de pan vivirá el hombre, sino de toda palabra que sale de la boca de Dios.'),
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
        G('Romanos 12:2', 'Romanos 12:2', 'καὶ μὴ συνσχηματίζεσθε τῷ αἰῶνι τούτῳ, ἀλλὰ μεταμορφοῦσθε τῇ ἀνακαινώσει τοῦ νοός, εἰς τὸ δοκιμάζειν ὑμᾶς τί τὸ θέλημα τοῦ Θεοῦ, τὸ ἀγαθὸν καὶ εὐάρεστον καὶ τέλειον.', 'Kai mē synsjēmatízesthe tō aiṓni tútō, allá metamorfústhe tē anakainṓsei tu noós, eis to dokimázein hymás ti to thélēma tu Theú, to agathón kai euáreston kai téleion.', [['καὶ', 'kai'], ['μὴ', 'mē'], ['συνσχηματίζεσθε', 'synsjēmatízesthe'], ['τῷ', 'tō'], ['αἰῶνι', 'aiṓni'], ['τούτῳ', 'tútō'], ['ἀλλὰ', 'allá'], ['μεταμορφοῦσθε', 'metamorfústhe'], ['τῇ', 'tē'], ['ἀνακαινώσει', 'anakainṓsei'], ['τοῦ', 'tu'], ['νοός', 'noós'], ['εἰς', 'eis'], ['τὸ', 'to'], ['δοκιμάζειν', 'dokimázein'], ['ὑμᾶς', 'hymás'], ['τί', 'ti'], ['τὸ', 'to'], ['θέλημα', 'thélēma'], ['τοῦ', 'tu'], ['Θεοῦ', 'Theú'], ['τὸ', 'to'], ['ἀγαθὸν', 'agathón'], ['καὶ', 'kai'], ['εὐάρεστον', 'euáreston'], ['καὶ', 'kai'], ['τέλειον', 'téleion']],
          ['y', 'no', 'os conforméis', 'al', 'siglo', 'este', 'sino', 'sed transformados', 'por la', 'renovación', 'de la', 'mente', 'para', 'lo', 'comprobar', 'vosotros', 'cuál', 'la', 'voluntad', 'de', 'Dios', 'la', 'buena', 'y', 'agradable', 'y', 'perfecta'],
          'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.'),
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
        G('Romanos 6:1', 'Romanos 6:1', 'Τί οὖν ἐροῦμεν; ἐπιμένωμεν τῇ ἁμαρτίᾳ, ἵνα ἡ χάρις πλεονάσῃ;', 'Ti un erúmen? epiménōmen tē hamartía, hína hē járis pleonásē?', [['Τί', 'Ti'], ['οὖν', 'un'], ['ἐροῦμεν', 'erúmen'], ['ἐπιμένωμεν', 'epiménōmen'], ['τῇ', 'tē'], ['ἁμαρτίᾳ', 'hamartía'], ['ἵνα', 'hína'], ['ἡ', 'hē'], ['χάρις', 'járis'], ['πλεονάσῃ', 'pleonásē']],
          ['¿qué', 'pues', 'diremos?', '¿perseveraremos', 'en el', 'pecado', 'para que', 'la', 'gracia', 'abunde?'],
          '¿Qué, pues, diremos? ¿Perseveraremos en el pecado para que la gracia abunde?'),
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
        G('Filipenses 1:21', 'Filipenses 1:21', 'Ἐμοὶ γὰρ τὸ ζῆν Χριστὸς καὶ τὸ ἀποθανεῖν κέρδος.', 'Emoí gar to zēn Jristós kai to apothaneín kérdos.', [['Ἐμοὶ', 'Emoí'], ['γὰρ', 'gar'], ['τὸ', 'to'], ['ζῆν', 'zēn'], ['Χριστὸς', 'Jristós'], ['καὶ', 'kai'], ['τὸ', 'to'], ['ἀποθανεῖν', 'apothaneín'], ['κέρδος', 'kérdos']],
          ['para mí', 'porque', 'el', 'vivir', 'Cristo', 'y', 'el', 'morir', 'ganancia'],
          'Porque para mí el vivir es Cristo, y el morir es ganancia.'),
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
        G('Juan 6:47', 'Juan 6:47', 'ἀμὴν ἀμὴν λέγω ὑμῖν, ὁ πιστεύων ἔχει ζωὴν αἰώνιον.', 'Amḗn amḗn légō hymín, ho pisteúōn éjei zōḗn aiṓnion.', [['ἀμὴν', 'amḗn'], ['ἀμὴν', 'amḗn'], ['λέγω', 'légō'], ['ὑμῖν', 'hymín'], ['ὁ', 'ho'], ['πιστεύων', 'pisteúōn'], ['ἔχει', 'éjei'], ['ζωὴν', 'zōḗn'], ['αἰώνιον', 'aiṓnion']],
          ['de cierto', 'de cierto', 'digo', 'a vosotros', 'el', 'que cree', 'tiene', 'vida', 'eterna'],
          'De cierto, de cierto os digo: El que cree en mí, tiene vida eterna.'),
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
        G('Romanos 5:1', 'Romanos 5:1', 'Δικαιωθέντες οὖν ἐκ πίστεως εἰρήνην ἔχωμεν πρὸς τὸν Θεὸν διὰ τοῦ Κυρίου ἡμῶν Ἰησοῦ Χριστοῦ,', 'Dikaiōthéntes un ek písteōs eirḗnēn éjōmen pros ton Theón diá tu Kyríu hēmṓn Iēsú Jristú,', [['Δικαιωθέντες', 'Dikaiōthéntes'], ['οὖν', 'un'], ['ἐκ', 'ek'], ['πίστεως', 'písteōs'], ['εἰρήνην', 'eirḗnēn'], ['ἔχωμεν', 'éjōmen'], ['πρὸς', 'pros'], ['τὸν', 'ton'], ['Θεὸν', 'Theón'], ['διὰ', 'diá'], ['τοῦ', 'tu'], ['Κυρίου', 'Kyríu'], ['ἡμῶν', 'hēmṓn'], ['Ἰησοῦ', 'Iēsú'], ['Χριστοῦ', 'Jristú']],
          ['habiendo sido justificados', 'pues', 'por', 'fe', 'paz', 'tenemos (o tengamos)', 'con', 'el', 'Dios', 'por medio de', 'el', 'Señor', 'de nosotros', 'Jesús', 'Cristo'],
          'Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo;'),
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
        G('Juan 8:58', 'Juan 8:58', 'εἶπεν αὐτοῖς Ἰησοῦς Ἀμὴν ἀμὴν λέγω ὑμῖν, πρὶν Ἀβραὰμ γενέσθαι ἐγὼ εἰμί.', 'Eípen autoís Iēsús Amḗn amḗn légō hymín, prin Abraám genésthai egṓ eimí.', [['εἶπεν', 'eípen'], ['αὐτοῖς', 'autoís'], ['Ἰησοῦς', 'Iēsús'], ['Ἀμὴν', 'Amḗn'], ['ἀμὴν', 'amḗn'], ['λέγω', 'légō'], ['ὑμῖν', 'hymín'], ['πρὶν', 'prin'], ['Ἀβραὰμ', 'Abraám'], ['γενέσθαι', 'genésthai'], ['ἐγὼ', 'egṓ'], ['εἰμί', 'eimí']],
          ['dijo', 'a ellos', 'Jesús', 'de cierto', 'de cierto', 'digo', 'a vosotros', 'antes que', 'Abraham', 'llegara a existir', 'yo', 'soy'],
          'Jesús les dijo: De cierto, de cierto os digo: Antes que Abraham fuese, yo soy.'),
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
        G('Juan 20:31', 'Juan 20:31', 'ταῦτα δὲ γέγραπται ἵνα πιστεύητε ὅτι Ἰησοῦς ἐστιν ὁ Χριστὸς ὁ Υἱὸς τοῦ Θεοῦ, καὶ ἵνα πιστεύοντες ζωὴν ἔχητε ἐν τῷ ὀνόματι αὐτοῦ.', 'Taúta de gégraptai hína pisteúēte hóti Iēsús estin ho Jristós ho Hyiós tu Theú, kai hína pisteúontes zōḗn éjēte en tō onómati autú.', [['ταῦτα', 'taúta'], ['δὲ', 'de'], ['γέγραπται', 'gégraptai'], ['ἵνα', 'hína'], ['πιστεύητε', 'pisteúēte'], ['ὅτι', 'hóti'], ['Ἰησοῦς', 'Iēsús'], ['ἐστιν', 'estin'], ['ὁ', 'ho'], ['Χριστὸς', 'Jristós'], ['ὁ', 'ho'], ['Υἱὸς', 'Hyiós'], ['τοῦ', 'tu'], ['Θεοῦ', 'Theú'], ['καὶ', 'kai'], ['ἵνα', 'hína'], ['πιστεύοντες', 'pisteúontes'], ['ζωὴν', 'zōḗn'], ['ἔχητε', 'éjēte'], ['ἐν', 'en'], ['τῷ', 'tō'], ['ὀνόματι', 'onómati'], ['αὐτοῦ', 'autú']],
          ['estas cosas', 'pero', 'han sido escritas', 'para que', 'creáis', 'que', 'Jesús', 'es', 'el', 'Cristo', 'el', 'Hijo', 'de', 'Dios', 'y', 'para que', 'creyendo', 'vida', 'tengáis', 'en', 'el', 'nombre', 'de él'],
          'Pero éstas se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre.'),
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
/* Ruta IV. Palabras clave de la fe (ver el encabezado de parte1.js). Frecuencias por lema del Nestle 1904. */
(() => {
  const { G } = window.__GG;
  const palabras = [
    {
      id: 'errores', n: 'Estudiar una palabra sin caer en errores', ref: '2 Timoteo 2:15; Hechos 19:32',
      visual: [
        G('2 Timoteo 2:15', '2 Timoteo 2:15', 'σπούδασον σεαυτὸν δόκιμον παραστῆσαι τῷ Θεῷ, ἐργάτην ἀνεπαίσχυντον, ὀρθοτομοῦντα τὸν λόγον τῆς ἀληθείας.', 'Spúdason seautón dókimon parastḗsai tō Theṓ, ergátēn anepaísjynton, orthotomúnta ton lógon tēs alētheías.', [['σπούδασον', 'spúdason'], ['σεαυτὸν', 'seautón'], ['δόκιμον', 'dókimon'], ['παραστῆσαι', 'parastḗsai'], ['τῷ', 'tō'], ['Θεῷ', 'Theṓ'], ['ἐργάτην', 'ergátēn'], ['ἀνεπαίσχυντον', 'anepaísjynton'], ['ὀρθοτομοῦντα', 'orthotomúnta'], ['τὸν', 'ton'], ['λόγον', 'lógon'], ['τῆς', 'tēs'], ['ἀληθείας', 'alētheías']],
          ['procura con diligencia', 'a ti mismo', 'aprobado', 'presentar', 'al', 'Dios', 'obrero', 'que no tiene de qué avergonzarse', 'que traza bien', 'la', 'palabra', 'de la', 'verdad'],
          'Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.'),
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
        G('1 Juan 4:8', '1 Juan 4:8', 'ὁ μὴ ἀγαπῶν οὐκ ἔγνω τὸν Θεόν, ὅτι ὁ Θεὸς ἀγάπη ἐστίν.', 'Ho mē agapṓn uk égnō ton Theón, hóti ho Theós agápē estín.', [['ὁ', 'ho'], ['μὴ', 'mē'], ['ἀγαπῶν', 'agapṓn'], ['οὐκ', 'uk'], ['ἔγνω', 'égnō'], ['τὸν', 'ton'], ['Θεόν', 'Theón'], ['ὅτι', 'hóti'], ['ὁ', 'ho'], ['Θεὸς', 'Theós'], ['ἀγάπη', 'agápē'], ['ἐστίν', 'estín']],
          ['el', 'no', 'que ama', 'no', 'conoció', 'a', 'Dios', 'porque', 'el', 'Dios', 'amor', 'es'],
          'El que no ama, no ha conocido a Dios; porque Dios es amor.'),
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
        G('Juan 1:16', 'Juan 1:16', 'ὅτι ἐκ τοῦ πληρώματος αὐτοῦ ἡμεῖς πάντες ἐλάβομεν, καὶ χάριν ἀντὶ χάριτος·', 'Hóti ek tu plērṓmatos autú hēmeís pántes elábomen, kai járin antí járitos;', [['ὅτι', 'hóti'], ['ἐκ', 'ek'], ['τοῦ', 'tu'], ['πληρώματος', 'plērṓmatos'], ['αὐτοῦ', 'autú'], ['ἡμεῖς', 'hēmeís'], ['πάντες', 'pántes'], ['ἐλάβομεν', 'elábomen'], ['καὶ', 'kai'], ['χάριν', 'járin'], ['ἀντὶ', 'antí'], ['χάριτος', 'járitos']],
          ['porque', 'de', 'la', 'plenitud', 'de él', 'nosotros', 'todos', 'recibimos', 'y', 'gracia', 'sobre', 'gracia'],
          'Porque de su plenitud tomamos todos, y gracia sobre gracia.'),
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
        G('Hebreos 11:1', 'Hebreos 11:1', 'Ἔστιν δὲ πίστις ἐλπιζομένων ὑπόστασις, πραγμάτων ἔλεγχος οὐ βλεπομένων.', 'Éstin de pístis elpizoménōn hypóstasis, pragmátōn élenjos u blepoménōn.', [['Ἔστιν', 'Éstin'], ['δὲ', 'de'], ['πίστις', 'pístis'], ['ἐλπιζομένων', 'elpizoménōn'], ['ὑπόστασις', 'hypóstasis'], ['πραγμάτων', 'pragmátōn'], ['ἔλεγχος', 'élenjos'], ['οὐ', 'u'], ['βλεπομένων', 'blepoménōn']],
          ['es', 'pues', 'la fe', 'de lo que se espera', 'certeza', 'de cosas', 'convicción', 'no', 'que se ven'],
          'Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.'),
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
        G('Romanos 3:24', 'Romanos 3:24', 'δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι διὰ τῆς ἀπολυτρώσεως τῆς ἐν Χριστῷ Ἰησοῦ·', 'Dikaiúmenoi dōreán tē autú járiti diá tēs apolytrṓseōs tēs en Jristṓ Iēsú;', [['δικαιούμενοι', 'dikaiúmenoi'], ['δωρεὰν', 'dōreán'], ['τῇ', 'tē'], ['αὐτοῦ', 'autú'], ['χάριτι', 'járiti'], ['διὰ', 'diá'], ['τῆς', 'tēs'], ['ἀπολυτρώσεως', 'apolytrṓseōs'], ['τῆς', 'tēs'], ['ἐν', 'en'], ['Χριστῷ', 'Jristṓ'], ['Ἰησοῦ', 'Iēsú']],
          ['siendo justificados', 'gratuitamente', 'por la', 'de él', 'gracia', 'mediante', 'la', 'redención', 'la (que es)', 'en', 'Cristo', 'Jesús'],
          'siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús,'),
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
        G('Mateo 16:18', 'Mateo 16:18', 'κἀγὼ δέ σοι λέγω ὅτι σὺ εἶ Πέτρος, καὶ ἐπὶ ταύτῃ τῇ πέτρᾳ οἰκοδομήσω μου τὴν ἐκκλησίαν, καὶ πύλαι Ἅιδου οὐ κατισχύσουσιν αὐτῆς.', 'Kagṓ de soi légō hóti sy ei Pétros, kai epí taútē tē pétra oikodomḗsō mu tēn ekklēsían, kai pýlai Haídu u katisjýsusin autḗs.', [['κἀγὼ', 'kagṓ'], ['δέ', 'de'], ['σοι', 'soi'], ['λέγω', 'légō'], ['ὅτι', 'hóti'], ['σὺ', 'sy'], ['εἶ', 'ei'], ['Πέτρος', 'Pétros'], ['καὶ', 'kai'], ['ἐπὶ', 'epí'], ['ταύτῃ', 'taútē'], ['τῇ', 'tē'], ['πέτρᾳ', 'pétra'], ['οἰκοδομήσω', 'oikodomḗsō'], ['μου', 'mu'], ['τὴν', 'tēn'], ['ἐκκλησίαν', 'ekklēsían'], ['καὶ', 'kai'], ['πύλαι', 'pýlai'], ['Ἅιδου', 'Haídu'], ['οὐ', 'u'], ['κατισχύσουσιν', 'katisjýsusin'], ['αὐτῆς', 'autḗs']],
          ['y yo', 'también', 'a ti', 'digo', 'que', 'tú', 'eres', 'Pedro', 'y', 'sobre', 'esta', 'la', 'roca', 'edificaré', 'de mí', 'la', 'iglesia', 'y', 'las puertas', 'del Hades', 'no', 'prevalecerán', 'contra ella'],
          'Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.'),
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
        G('Romanos 10:17', 'Romanos 10:17', 'ἄρα ἡ πίστις ἐξ ἀκοῆς, ἡ δὲ ἀκοὴ διὰ ῥήματος Χριστοῦ.', 'Ára hē pístis ex akoḗs, hē de akoḗ diá rhḗmatos Jristú.', [['ἄρα', 'ára'], ['ἡ', 'hē'], ['πίστις', 'pístis'], ['ἐξ', 'ex'], ['ἀκοῆς', 'akoḗs'], ['ἡ', 'hē'], ['δὲ', 'de'], ['ἀκοὴ', 'akoḗ'], ['διὰ', 'diá'], ['ῥήματος', 'rhḗmatos'], ['Χριστοῦ', 'Jristú']],
          ['así que', 'la', 'fe', 'de', 'el oír', 'el', 'y', 'oír', 'por medio de', 'la palabra', 'de Cristo'],
          'Así que la fe es por el oír, y el oír, por la palabra de Dios.'),
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
        G('Juan 3:8', 'Juan 3:8', 'τὸ πνεῦμα ὅπου θέλει πνεῖ, καὶ τὴν φωνὴν αὐτοῦ ἀκούεις, ἀλλ’ οὐκ οἶδας πόθεν ἔρχεται καὶ ποῦ ὑπάγει· οὕτως ἐστὶν πᾶς ὁ γεγεννημένος ἐκ τοῦ Πνεύματος.', 'To pneúma hópu thélei pnei, kai tēn fōnḗn autú akúeis, all’ uk oídas póthen érjetai kai pu hypágei; hútōs estín pas ho gegennēménos ek tu Pneúmatos.', [['τὸ', 'to'], ['πνεῦμα', 'pneúma'], ['ὅπου', 'hópu'], ['θέλει', 'thélei'], ['πνεῖ', 'pnei'], ['καὶ', 'kai'], ['τὴν', 'tēn'], ['φωνὴν', 'fōnḗn'], ['αὐτοῦ', 'autú'], ['ἀκούεις', 'akúeis'], ['ἀλλ’', 'all’'], ['οὐκ', 'uk'], ['οἶδας', 'oídas'], ['πόθεν', 'póthen'], ['ἔρχεται', 'érjetai'], ['καὶ', 'kai'], ['ποῦ', 'pu'], ['ὑπάγει', 'hypágei'], ['οὕτως', 'hútōs'], ['ἐστὶν', 'estín'], ['πᾶς', 'pas'], ['ὁ', 'ho'], ['γεγεννημένος', 'gegennēménos'], ['ἐκ', 'ek'], ['τοῦ', 'tu'], ['Πνεύματος', 'Pneúmatos']],
          ['el', 'viento (espíritu)', 'donde', 'quiere', 'sopla', 'y', 'el', 'sonido', 'de él', 'oyes', 'pero', 'no', 'sabes', 'de dónde', 'viene', 'y', 'adónde', 'va', 'así', 'es', 'todo', 'el', 'nacido', 'de', 'el', 'Espíritu'],
          'El viento sopla de donde quiere, y oyes su sonido; mas ni sabes de dónde viene, ni a dónde va; así es todo aquel que es nacido del Espíritu.'),
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
        G('Marcos 5:34', 'Marcos 5:34', 'ὁ δὲ εἶπεν αὐτῇ Θυγάτηρ, ἡ πίστις σου σέσωκέν σε· ὕπαγε εἰς εἰρήνην, καὶ ἴσθι ὑγιὴς ἀπὸ τῆς μάστιγός σου.', 'Ho de eípen autḗ Thygátēr, hē pístis su sésōkén se; hýpage eis eirḗnēn, kai ísthi hygiḗs apó tēs mástigós su.', [['ὁ', 'ho'], ['δὲ', 'de'], ['εἶπεν', 'eípen'], ['αὐτῇ', 'autḗ'], ['Θυγάτηρ', 'Thygátēr'], ['ἡ', 'hē'], ['πίστις', 'pístis'], ['σου', 'su'], ['σέσωκέν', 'sésōkén'], ['σε', 'se'], ['ὕπαγε', 'hýpage'], ['εἰς', 'eis'], ['εἰρήνην', 'eirḗnēn'], ['καὶ', 'kai'], ['ἴσθι', 'ísthi'], ['ὑγιὴς', 'hygiḗs'], ['ἀπὸ', 'apó'], ['τῆς', 'tēs'], ['μάστιγός', 'mástigós'], ['σου', 'su']],
          ['él', 'y', 'dijo', 'a ella', 'hija', 'la', 'fe', 'de ti', 'ha salvado (sanado)', 'a ti', 've', 'en', 'paz', 'y', 'queda', 'sana', 'de', 'el', 'azote', 'de ti'],
          'Y él le dijo: Hija, tu fe te ha hecho salva; vé en paz, y queda sana de tu azote.'),
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
        G('Marcos 1:15', 'Marcos 1:15', 'καὶ λέγων ὅτι Πεπλήρωται ὁ καιρὸς καὶ ἤγγικεν ἡ βασιλεία τοῦ Θεοῦ· μετανοεῖτε καὶ πιστεύετε ἐν τῷ εὐαγγελίῳ.', 'Kai légōn hóti Peplḗrōtai ho kairós kai ḗngiken hē basileía tu Theú; metanoeíte kai pisteúete en tō euangelíō.', [['καὶ', 'kai'], ['λέγων', 'légōn'], ['ὅτι', 'hóti'], ['Πεπλήρωται', 'Peplḗrōtai'], ['ὁ', 'ho'], ['καιρὸς', 'kairós'], ['καὶ', 'kai'], ['ἤγγικεν', 'ḗngiken'], ['ἡ', 'hē'], ['βασιλεία', 'basileía'], ['τοῦ', 'tu'], ['Θεοῦ', 'Theú'], ['μετανοεῖτε', 'metanoeíte'], ['καὶ', 'kai'], ['πιστεύετε', 'pisteúete'], ['ἐν', 'en'], ['τῷ', 'tō'], ['εὐαγγελίῳ', 'euangelíō']],
          ['y', 'diciendo', 'que', 'se ha cumplido', 'el', 'tiempo', 'y', 'se ha acercado', 'el', 'reino', 'de', 'Dios', 'arrepentíos', 'y', 'creed', 'en', 'el', 'evangelio'],
          'diciendo: El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.'),
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
        G('Filipenses 2:11', 'Filipenses 2:11', 'καὶ πᾶσα γλῶσσα ἐξομολογήσηται ὅτι ΚΥΡΙΟΣ ΙΗΣΟΥΣ ΧΡΙΣΤΟΣ εἰς δόξαν Θεοῦ Πατρός.', 'Kai pása glṓssa exomologḗsētai hóti KYRIOS IĒSUS JRISTOS eis dóxan Theú Patrós.', [['καὶ', 'kai'], ['πᾶσα', 'pása'], ['γλῶσσα', 'glṓssa'], ['ἐξομολογήσηται', 'exomologḗsētai'], ['ὅτι', 'hóti'], ['ΚΥΡΙΟΣ', 'KYRIOS'], ['ΙΗΣΟΥΣ', 'IĒSUS'], ['ΧΡΙΣΤΟΣ', 'JRISTOS'], ['εἰς', 'eis'], ['δόξαν', 'dóxan'], ['Θεοῦ', 'Theú'], ['Πατρός', 'Patrós']],
          ['y', 'toda', 'lengua', 'confiese', 'que', 'SEÑOR', 'JESÚS', 'CRISTO', 'para', 'gloria', 'de Dios', 'Padre'],
          'y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.'),
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
/* Taller práctico y armado de RUTA_DATA (ver el encabezado de parte1.js) */
(() => {
  const { G } = window.__GG;
  const taller = [
    {
      id: 'juan-1-1', n: 'Juan 1:1: «el Verbo era Dios»', ref: 'Juan 1:1-3; Juan 1:18',
      visual: [
        G('Juan 1:1', 'Juan 1:1', 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.', 'En arjḗ ēn ho Lógos, kai ho Lógos ēn pros ton Theón, kai Theós ēn ho Lógos.', [['Ἐν', 'En'], ['ἀρχῇ', 'arjḗ'], ['ἦν', 'ēn'], ['ὁ', 'ho'], ['Λόγος', 'Lógos'], ['καὶ', 'kai'], ['ὁ', 'ho'], ['Λόγος', 'Lógos'], ['ἦν', 'ēn'], ['πρὸς', 'pros'], ['τὸν', 'ton'], ['Θεόν', 'Theón'], ['καὶ', 'kai'], ['Θεὸς', 'Theós'], ['ἦν', 'ēn'], ['ὁ', 'ho'], ['Λόγος', 'Lógos']],
          ['en', 'principio', 'era', 'el', 'Verbo', 'y', 'el', 'Verbo', 'era', 'con', 'el', 'Dios', 'y', 'Dios', 'era', 'el', 'Verbo'],
          'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.'),
        { tipo: 'tabla', titulo: 'Tres maneras', tabla: {
          titulo: 'Tres maneras de escribir la última frase',
          cab: ['Si Juan hubiera escrito…', 'Significaría', '¿Lo escribió?'],
          filas: [
            ['ὁ λόγος ἦν ὁ θεός, con artículo en los dos', 'El Verbo y Dios Padre son la misma persona', 'No: ya dijo que el Verbo estaba «con» Dios'],
            ['ὁ λόγος ἦν θεῖος, con el adjetivo «divino»', 'El Verbo tenía algo divino, sin ser Dios', 'No'],
            ['θεὸς ἦν ὁ λόγος', 'El Verbo era Dios en su naturaleza, sin ser la persona del Padre', 'Sí'],
          ],
          nota: 'θεός sin artículo y antes del verbo es el predicado: dice qué es el Verbo.'
        } }
      ],
      texto: [
        'Con lo que has aprendido puedes leer el primer versículo del Evangelio de Juan forma por forma. Es breve, de palabras sencillas, y una de las afirmaciones más profundas de toda la Biblia.',
        { h: 'Era' },
        'Ἐν ἀρχῇ, «en el principio», con dativo después de ἐν, recuerda Génesis 1:1. El verbo es ἦν, imperfecto de εἰμί: «era». Juan no dice que el Verbo «comenzó a ser» en el principio, sino que ya era. Lo verás claro en el versículo 3, donde de la creación usa otro verbo: πάντα δι’ αὐτοῦ ἐγένετο, «todas las cosas por él fueron hechas». El Verbo era; las cosas llegaron a ser. Es el mismo contraste de Juan 8:58.',
        { h: 'Con Dios' },
        'καὶ ὁ λόγος ἦν πρὸς τὸν θεόν: «y el Verbo era con Dios». πρός con acusativo indica dirección y cercanía: junto a Dios, en comunión con él, cara a cara. El artículo τόν delante de θεόν señala a Dios Padre. El Verbo es distinto del Padre: está con él.',
        { h: 'Dios era el Verbo' },
        'La tercera frase dice θεὸς ἦν ὁ λόγος. Recuerda la ruta I: el sustantivo con artículo, ὁ λόγος, es el sujeto; el que no lo tiene, θεός, es el predicado. Por eso se traduce «el Verbo era Dios», aunque θεός vaya primero. Y va primero para destacarlo: lo que Dios es, eso era el Verbo.',
        'La tabla del panel muestra por qué Juan escribió exactamente así. Con artículo en los dos, habría dicho que el Verbo es la misma persona del Padre, lo que contradice la frase anterior; ese es el error que hoy enseñan los pentecostales unicitarios. Con el adjetivo θεῖος, «divino», habría dicho menos. Con θεός sin artículo y adelantado, dice todo: el Verbo es Dios en su naturaleza y es distinto del Padre.',
        { h: '¿«Un dios»?' },
        'La Traducción del Nuevo Mundo, de los Testigos de Jehová, dice «la Palabra era un dios», porque θεός no tiene artículo. Pero el griego no tiene artículo indefinido, y la falta de artículo no equivale a «un». En el mismo capítulo, Juan escribe θεοῦ y θεόν sin artículo para referirse al único Dios verdadero: Juan el Bautista fue enviado παρὰ θεοῦ, «de Dios» (Jn 1:6), y θεὸν οὐδεὶς ἑώρακεν πώποτε, «a Dios nadie le vio jamás» (Jn 1:18). Nadie traduce allí «un dios». Además, hablar de «un dios» junto al Dios verdadero sería politeísmo, algo impensable para un judío como Juan. Muchos Testigos de Jehová leen la Biblia con sinceridad; este versículo es una buena puerta para conversar con respeto sobre quién es Jesús.',
        { ir: { t: 'Ver la doctrina de la Trinidad en Dios y la Trinidad', a: '../../dios-y-la-trinidad/' } },
        { ejercicio: {
          pregunta: 'En θεὸς ἦν ὁ λόγος, ¿qué indica que «el Verbo» es el sujeto?',
          opciones: [
            { t: 'Que ὁ λόγος va al final.', ok: false, por_que: 'En griego la posición no decide el sujeto.' },
            { t: 'Que ὁ λόγος lleva artículo y θεός no.', ok: true, por_que: 'En una frase con «ser», el sustantivo con artículo suele ser el sujeto.' },
            { t: 'Que θεός está en genitivo.', ok: false, por_que: 'θεός está en nominativo. El genitivo sería θεοῦ.' }
          ],
          explicacion: 'El Verbo es el sujeto; «Dios» es lo que se afirma de él, adelantado para destacarlo.'
        } }
      ],
      pensar: 'El Verbo que era Dios se hizo carne y habitó entre nosotros (Jn 1:14). ¿Qué te dice de Dios que haya querido acercarse tanto a ti?'
    },
    {
      id: 'juan-3-16', n: 'Juan 3:16: «de tal manera amó Dios»', ref: 'Juan 3:16-17',
      visual: [
        G('Juan 3:16', 'Juan 3:16', 'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον.', 'Hútōs gar ēgápēsen ho Theós ton kósmon, hṓste ton Hyión ton monogenḗ édōken, hína pas ho pisteúōn eis autón mē apólētai all’ éjē zōḗn aiṓnion.', [['Οὕτως', 'Hútōs'], ['γὰρ', 'gar'], ['ἠγάπησεν', 'ēgápēsen'], ['ὁ', 'ho'], ['Θεὸς', 'Theós'], ['τὸν', 'ton'], ['κόσμον', 'kósmon'], ['ὥστε', 'hṓste'], ['τὸν', 'ton'], ['Υἱὸν', 'Hyión'], ['τὸν', 'ton'], ['μονογενῆ', 'monogenḗ'], ['ἔδωκεν', 'édōken'], ['ἵνα', 'hína'], ['πᾶς', 'pas'], ['ὁ', 'ho'], ['πιστεύων', 'pisteúōn'], ['εἰς', 'eis'], ['αὐτὸν', 'autón'], ['μὴ', 'mē'], ['ἀπόληται', 'apólētai'], ['ἀλλ’', 'all’'], ['ἔχῃ', 'éjē'], ['ζωὴν', 'zōḗn'], ['αἰώνιον', 'aiṓnion']],
          ['así', 'porque', 'amó', 'el', 'Dios', 'al', 'mundo', 'que', 'al', 'Hijo', 'el', 'único', 'dio', 'para que', 'todo', 'el', 'que cree', 'en', 'él', 'no', 'se pierda', 'sino', 'tenga', 'vida', 'eterna'],
          'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.'),
        { tipo: 'tabla', titulo: 'Análisis', tabla: {
          titulo: 'Los verbos de Juan 3:16',
          cab: ['Forma', 'Análisis', 'De', 'Sentido'],
          filas: [
            ['ἠγάπησεν', 'aoristo indicativo activo, 3.ª sing.', 'ἀγαπάω', 'amó'],
            ['ἔδωκεν', 'aoristo indicativo activo, 3.ª sing.', 'δίδωμι', 'dio'],
            ['πιστεύων', 'participio presente activo, nom. masc. sing.', 'πιστεύω', 'que cree'],
            ['ἀπόληται', 'aoristo subjuntivo medio, 3.ª sing.', 'ἀπόλλυμι', 'se pierda'],
            ['ἔχῃ', 'presente subjuntivo activo, 3.ª sing.', 'ἔχω', 'tenga'],
          ],
          nota: 'Dos aoristos para lo que Dios hizo; un participio presente para el que cree; dos subjuntivos para el propósito.'
        } }
      ],
      texto: [
        'Es el versículo más conocido del Nuevo Testamento. Léelo en voz alta en griego con las ayudas, y después recórrelo con la tabla del panel.',
        { h: 'Así amó Dios' },
        'Οὕτως significa «así, de esta manera». La Reina-Valera traduce «de tal manera», que destaca la intensidad. Muchos estudiosos señalan que οὕτως apunta sobre todo al modo: Dios amó así, de esta manera, y la frase con ὥστε explica cuál: dando a su Hijo. Las dos lecturas se complementan: la manera en que Dios amó muestra cuánto amó.',
        'ἠγάπησεν es aoristo: presenta el amor de Dios como un hecho completo en la historia, que culminó en la cruz. τὸν κόσμον, acusativo, es el objeto del amor: el mundo, que en Juan es la humanidad apartada de Dios, la misma que «no le conoció» (Jn 1:10). Dios amó a quienes no lo amaban.',
        { h: 'Dio a su Hijo único' },
        'ὥστε introduce el resultado. Normalmente va con infinitivo; aquí va con un indicativo, ἔδωκεν, «dio», que subraya que el resultado ocurrió de verdad. τὸν υἱὸν τὸν μονογενῆ tiene el artículo repetido, como ὁ ποιμὴν ὁ καλός: «el Hijo, el único». μονογενής se ha traducido «unigénito»; muchos estudiosos la relacionan con γένος, «clase», y entienden «único en su clase». Las dos traducciones dicen lo esencial: no hay otro Hijo como él.',
        { h: 'Para que todo el que cree' },
        'ἵνα introduce el propósito, con dos subjuntivos. πᾶς ὁ πιστεύων εἰς αὐτόν, «todo el que cree en él», combina lo que viste en la ruta III y en la IV: un participio con artículo y la construcción πιστεύω εἰς. La puerta está abierta a «todo» el que cree. μὴ ἀπόληται, «no se pierda», es un aoristo de ἀπόλλυμι: la perdición vista como un hecho final. ἀλλ’ ἔχῃ ζωὴν αἰώνιον, «sino que tenga vida eterna», está en presente: la vida eterna es una posesión que comienza ahora.',
        'El versículo siguiente aclara el propósito de Dios: «no envió Dios a su Hijo al mundo para condenar al mundo, sino para que el mundo sea salvo por él» (Jn 3:17).',
        { ejercicio: {
          pregunta: '¿Por qué ἀπόληται y ἔχῃ están en subjuntivo?',
          opciones: [
            { t: 'Porque van después de ἵνα, «para que», y expresan el propósito de Dios.', ok: true, por_que: 'ἵνα + subjuntivo es la construcción normal de propósito.' },
            { t: 'Porque Juan duda de que alguien pueda salvarse.', ok: false, por_que: 'El subjuntivo aquí no expresa duda, sino propósito.' },
            { t: 'Porque son futuros.', ok: false, por_que: 'Son subjuntivos: lo muestran la η de ἀπόληται y la ῃ de ἔχῃ.' }
          ],
          explicacion: 'Dios dio a su Hijo con un propósito: que el que cree no se pierda, sino que tenga vida eterna.'
        } }
      ],
      pensar: 'Dios amó al mundo que no lo amaba. ¿Hay alguien a quien te cuesta amar porque no te ama? ¿Qué te enseña Juan 3:16 sobre cómo tratarlo?'
    },
    {
      id: 'efesios-2', n: 'Efesios 2:8-9: «por gracia sois salvos»', ref: 'Efesios 2:8-10',
      visual: [
        G('Efesios 2:8', 'Efesios 2:8', 'τῇ γὰρ χάριτί ἐστε σεσῳσμένοι διὰ πίστεως· καὶ τοῦτο οὐκ ἐξ ὑμῶν, Θεοῦ τὸ δῶρον·', 'Tē gar járití este sesōsménoi diá písteōs; kai túto uk ex hymṓn, Theú to dṓron;', [['τῇ', 'tē'], ['γὰρ', 'gar'], ['χάριτί', 'járití'], ['ἐστε', 'este'], ['σεσῳσμένοι', 'sesōsménoi'], ['διὰ', 'diá'], ['πίστεως', 'písteōs'], ['καὶ', 'kai'], ['τοῦτο', 'túto'], ['οὐκ', 'uk'], ['ἐξ', 'ex'], ['ὑμῶν', 'hymṓn'], ['Θεοῦ', 'Theú'], ['τὸ', 'to'], ['δῶρον', 'dṓron']],
          ['por la', 'porque', 'gracia', 'sois', 'salvados', 'por medio de', 'fe', 'y', 'esto', 'no', 'de', 'vosotros', 'de Dios', 'el', 'don'],
          'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios;'),
        G('Efesios 2:9', 'Efesios 2:9', 'οὐκ ἐξ ἔργων, ἵνα μή τις καυχήσηται.', 'Uk ex érgōn, hína mē tis kaujḗsētai.', [['οὐκ', 'uk'], ['ἐξ', 'ex'], ['ἔργων', 'érgōn'], ['ἵνα', 'hína'], ['μή', 'mē'], ['τις', 'tis'], ['καυχήσηται', 'kaujḗsētai']],
          ['no', 'por', 'obras', 'para que', 'no', 'nadie', 'se gloríe'],
          'no por obras, para que nadie se gloríe.')
      ],
      texto: [
        'Efesios 2:8-9 resume el evangelio de la gracia en dos versículos. Casi cada palabra enseña algo de gramática.',
        { h: 'Salvados por gracia' },
        'τῇ γὰρ χάριτι: dativo de medio, como viste en la ruta II. La gracia es el medio por el cual Dios salva. ἐστε σεσῳσμένοι es una construcción con εἰμί, «sois», y un participio perfecto pasivo de σῴζω, «salvados». La forma equivale a un perfecto: «habéis sido salvados, y lo estáis». Fue Dios quien salvó (pasiva) y el resultado permanece (perfecto).',
        { h: 'Por medio de la fe' },
        'διὰ πίστεως: διά con genitivo, «por medio de». La fe no es la causa de la salvación ni un mérito, sino el canal por el que se recibe. La causa es la gracia de Dios; el medio, la fe.',
        { h: '¿Qué es «esto»?' },
        'καὶ τοῦτο οὐκ ἐξ ὑμῶν, θεοῦ τὸ δῶρον: «y esto no de vosotros, pues es don de Dios». τοῦτο es neutro. χάρις y πίστις son femeninos, así que «esto» no se refiere solo a una de esas palabras, sino a todo lo dicho: la salvación por gracia mediante la fe. Todo es regalo. Fíjate también en el orden: θεοῦ va primero, enfático: de Dios es el don.',
        { h: 'No por obras' },
        'El versículo 9 añade οὐκ ἐξ ἔργων, «no por obras», y el propósito: ἵνα μή τις καυχήσηται, «para que nadie se gloríe». καυχήσηται es aoristo subjuntivo de καυχάομαι, un verbo con forma media. Nadie podrá decir delante de Dios: «me lo gané».',
        'Pero las obras no desaparecen. El versículo 10 dice: αὐτοῦ γάρ ἐσμεν ποίημα, «somos hechura suya», κτισθέντες… ἐπὶ ἔργοις ἀγαθοῖς, «creados… para buenas obras». Las obras no son la raíz de la salvación, sino su fruto. Por cierto, de ποίημα viene «poema», y a veces se predica que somos «el poema de Dios». Es una imagen bonita, pero ποίημα significa «obra, lo hecho»; recuerda el error de leer una palabra con un sentido moderno.',
        { ejercicio: {
          pregunta: '¿Por qué se entiende que τοῦτο, «esto», se refiere a toda la salvación y no solo a la fe?',
          opciones: [
            { t: 'Porque τοῦτο es neutro y πίστις es femenino.', ok: true, por_que: 'Si se refiriera solo a la fe, lo esperable sería el femenino αὕτη. El neutro abarca todo lo dicho.' },
            { t: 'Porque τοῦτο está en plural.', ok: false, por_que: 'τοῦτο es singular. El plural es ταῦτα.' },
            { t: 'Porque la fe no existe en Efesios.', ok: false, por_que: 'La fe está en el mismo versículo: διὰ πίστεως.' }
          ],
          explicacion: 'La salvación entera, por gracia y mediante la fe, es don de Dios.'
        } }
      ],
      pensar: 'Eres salvo por gracia y creado para buenas obras. ¿Qué obra buena tiene Dios preparada para ti esta semana?'
    },
    {
      id: 'mateo-28', n: 'Mateo 28:19-20: «id, y haced discípulos»', ref: 'Mateo 28:18-20',
      visual: [
        G('Mateo 28:19', 'Mateo 28:19', 'πορευθέντες οὖν μαθητεύσατε πάντα τὰ ἔθνη, βαπτίζοντες αὐτοὺς εἰς τὸ ὄνομα τοῦ Πατρὸς καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος,', 'Poreuthéntes un mathēteúsate pánta ta éthnē, baptízontes autús eis to ónoma tu Patrós kai tu Hyiú kai tu Hagíu Pneúmatos,', [['πορευθέντες', 'poreuthéntes'], ['οὖν', 'un'], ['μαθητεύσατε', 'mathēteúsate'], ['πάντα', 'pánta'], ['τὰ', 'ta'], ['ἔθνη', 'éthnē'], ['βαπτίζοντες', 'baptízontes'], ['αὐτοὺς', 'autús'], ['εἰς', 'eis'], ['τὸ', 'to'], ['ὄνομα', 'ónoma'], ['τοῦ', 'tu'], ['Πατρὸς', 'Patrós'], ['καὶ', 'kai'], ['τοῦ', 'tu'], ['Υἱοῦ', 'Hyiú'], ['καὶ', 'kai'], ['τοῦ', 'tu'], ['Ἁγίου', 'Hagíu'], ['Πνεύματος', 'Pneúmatos']],
          ['yendo', 'pues', 'haced discípulos', 'a todas', 'las', 'naciones', 'bautizando', 'los', 'en', 'el', 'nombre', 'del', 'Padre', 'y', 'del', 'Hijo', 'y', 'del', 'Santo', 'Espíritu'],
          'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;'),
        G('Mateo 28:20', 'Mateo 28:20', 'διδάσκοντες αὐτοὺς τηρεῖν πάντα ὅσα ἐνετειλάμην ὑμῖν· καὶ ἰδοὺ ἐγὼ μεθ’ ὑμῶν εἰμι πάσας τὰς ἡμέρας ἕως τῆς συντελείας τοῦ αἰῶνος.', 'Didáskontes autús tēreín pánta hósa eneteilámēn hymín; kai idú egṓ meth’ hymṓn eimi pásas tas hēméras héōs tēs synteleías tu aiṓnos.', [['διδάσκοντες', 'didáskontes'], ['αὐτοὺς', 'autús'], ['τηρεῖν', 'tēreín'], ['πάντα', 'pánta'], ['ὅσα', 'hósa'], ['ἐνετειλάμην', 'eneteilámēn'], ['ὑμῖν', 'hymín'], ['καὶ', 'kai'], ['ἰδοὺ', 'idú'], ['ἐγὼ', 'egṓ'], ['μεθ’', 'meth’'], ['ὑμῶν', 'hymṓn'], ['εἰμι', 'eimi'], ['πάσας', 'pásas'], ['τὰς', 'tas'], ['ἡμέρας', 'hēméras'], ['ἕως', 'héōs'], ['τῆς', 'tēs'], ['συντελείας', 'synteleías'], ['τοῦ', 'tu'], ['αἰῶνος', 'aiṓnos']],
          ['enseñando', 'les', 'a guardar', 'todas las cosas', 'que', 'mandé', 'a vosotros', 'y', 'he aquí', 'yo', 'con', 'vosotros', 'estoy', 'todos', 'los', 'días', 'hasta', 'el', 'fin', 'del', 'siglo'],
          'enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.')
      ],
      texto: [
        'La Gran Comisión tiene un solo verbo principal y tres participios que lo rodean. Ver esa estructura ayuda a entender qué manda Jesús y cómo.',
        { h: 'El verbo principal' },
        'El único imperativo es μαθητεύσατε, aoristo de μαθητεύω: «haced discípulos». La Reina-Valera traduce «doctrinad», en el sentido antiguo de «enseñar y formar». El objeto es πάντα τὰ ἔθνη, «todas las naciones», acusativo neutro plural: el discipulado no tiene fronteras.',
        { h: '¿«Id» o «yendo»?' },
        'πορευθέντες es un participio de aoristo, «habiendo ido, yendo». A veces se predica que, por ser participio, significa «mientras vais por la vida», como si ir fuera opcional. Pero en la narración griega, un participio de aoristo antes de un imperativo suele tomar la fuerza del imperativo: es la acción que hay que hacer primero. Por eso todas las traducciones dicen «id». Mateo lo usa así en otros lugares: πορευθέντες μάθετε, «id, pues, y aprended» (Mt 9:13). La misión exige salir.',
        { h: 'Bautizando y enseñando' },
        'βαπτίζοντες y διδάσκοντες son participios de presente: describen cómo se hacen discípulos. Se bautiza a los que creen y se les enseña a guardar todo lo que Jesús mandó. Fíjate que no dice solo «enseñándoles todo», sino τηρεῖν πάντα, «a guardar», a obedecer. El discipulado es obediencia, no solo información.',
        'La fórmula del bautismo es εἰς τὸ ὄνομα, «en el nombre», en singular, del Padre, del Hijo y del Espíritu Santo, cada uno con su artículo: un solo nombre y tres personas distintas.',
        { h: 'Todos los días' },
        'El final es una promesa: ἐγὼ μεθ’ ὑμῶν εἰμι πάσας τὰς ἡμέρας. Ya conoces todas estas formas: ἐγώ enfático, μετά con genitivo, «con», εἰμί en presente, y πάσας τὰς ἡμέρας, un acusativo de extensión de tiempo: «durante todos los días», sin excepción. ἰδού, «he aquí», es una forma de ὁράω que llama la atención: ¡mira!',
        { ejercicio: {
          pregunta: '¿Cuál es el verbo principal de Mateo 28:19-20?',
          opciones: [
            { t: 'πορευθέντες, «id».', ok: false, por_que: 'Es un participio, aunque aquí toma la fuerza del imperativo.' },
            { t: 'μαθητεύσατε, «haced discípulos».', ok: true, por_que: 'Es el único imperativo. Los participios dependen de él.' },
            { t: 'βαπτίζοντες, «bautizando».', ok: false, por_que: 'Es un participio de presente que describe cómo se hacen discípulos.' }
          ],
          explicacion: 'Ir, bautizar y enseñar giran en torno a un mandato central: hacer discípulos de todas las naciones.'
        } }
      ],
      pensar: 'El mandato es hacer discípulos, no solo convertidos. ¿A quién estás ayudando tú a aprender a guardar lo que Jesús mandó?'
    },
    {
      id: 'hechos-pentecostes', n: 'Hechos 1:8 y 2:4: poder y lenguas', ref: 'Hechos 1:8; Hechos 2:1-4; Hechos 10:44-46; Hechos 19:6',
      visual: [
        G('Hechos 1:8', 'Hechos 1:8', 'ἀλλὰ λήμψεσθε δύναμιν ἐπελθόντος τοῦ Ἁγίου Πνεύματος ἐφ’ ὑμᾶς, καὶ ἔσεσθέ μου μάρτυρες ἔν τε Ἱερουσαλὴμ καὶ ἐν πάσῃ τῇ Ἰουδαίᾳ καὶ Σαμαρίᾳ καὶ ἕως ἐσχάτου τῆς γῆς.', 'Allá lḗmpsesthe dýnamin epelthóntos tu Hagíu Pneúmatos ef’ hymás, kai ésesthé mu mártyres en te Hierusalḗm kai en pásē tē Iudaía kai Samaría kai héōs esjátu tēs gēs.', [['ἀλλὰ', 'allá'], ['λήμψεσθε', 'lḗmpsesthe'], ['δύναμιν', 'dýnamin'], ['ἐπελθόντος', 'epelthóntos'], ['τοῦ', 'tu'], ['Ἁγίου', 'Hagíu'], ['Πνεύματος', 'Pneúmatos'], ['ἐφ’', 'ef’'], ['ὑμᾶς', 'hymás'], ['καὶ', 'kai'], ['ἔσεσθέ', 'ésesthé'], ['μου', 'mu'], ['μάρτυρες', 'mártyres'], ['ἔν', 'en'], ['τε', 'te'], ['Ἱερουσαλὴμ', 'Hierusalḗm'], ['καὶ', 'kai'], ['ἐν', 'en'], ['πάσῃ', 'pásē'], ['τῇ', 'tē'], ['Ἰουδαίᾳ', 'Iudaía'], ['καὶ', 'kai'], ['Σαμαρίᾳ', 'Samaría'], ['καὶ', 'kai'], ['ἕως', 'héōs'], ['ἐσχάτου', 'esjátu'], ['τῆς', 'tēs'], ['γῆς', 'gēs']],
          ['pero', 'recibiréis', 'poder', 'habiendo venido', 'el', 'Santo', 'Espíritu', 'sobre', 'vosotros', 'y', 'seréis', 'de mí', 'testigos', 'en', 'tanto', 'Jerusalén', 'como', 'en', 'toda', 'la', 'Judea', 'y', 'Samaria', 'y', 'hasta', 'lo último', 'de la', 'tierra'],
          'pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.'),
        G('Hechos 2:4', 'Hechos 2:4', 'καὶ ἐπλήσθησαν πάντες Πνεύματος Ἁγίου, καὶ ἤρξαντο λαλεῖν ἑτέραις γλώσσαις καθὼς τὸ Πνεῦμα ἐδίδου ἀποφθέγγεσθαι αὐτοῖς.', 'Kai eplḗsthēsan pántes Pneúmatos Hagíu, kai ḗrxanto laleín hetérais glṓssais kathṓs to Pneúma edídu apofthéngesthai autoís.', [['καὶ', 'kai'], ['ἐπλήσθησαν', 'eplḗsthēsan'], ['πάντες', 'pántes'], ['Πνεύματος', 'Pneúmatos'], ['Ἁγίου', 'Hagíu'], ['καὶ', 'kai'], ['ἤρξαντο', 'ḗrxanto'], ['λαλεῖν', 'laleín'], ['ἑτέραις', 'hetérais'], ['γλώσσαις', 'glṓssais'], ['καθὼς', 'kathṓs'], ['τὸ', 'to'], ['Πνεῦμα', 'Pneúma'], ['ἐδίδου', 'edídu'], ['ἀποφθέγγεσθαι', 'apofthéngesthai'], ['αὐτοῖς', 'autoís']],
          ['y', 'fueron llenos', 'todos', 'de Espíritu', 'Santo', 'y', 'comenzaron', 'a hablar', 'en otras', 'lenguas', 'según', 'el', 'Espíritu', 'daba', 'expresarse', 'a ellos'],
          'Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.')
      ],
      texto: [
        'Estos dos versículos son la promesa y su cumplimiento. Léelos juntos, forma por forma.',
        { h: 'La promesa' },
        'λήμψεσθε es futuro de λαμβάνω, «recibiréis», con forma media, como muchos futuros de verbos frecuentes. δύναμιν, acusativo de δύναμις: «poder». Luego viene un genitivo absoluto, como anunciaba la ruta III: ἐπελθόντος τοῦ ἁγίου πνεύματος ἐφ’ ὑμᾶς. El participio de aoristo ἐπελθόντος y su sujeto, τοῦ πνεύματος, están en genitivo, separados del resto de la frase: «cuando haya venido sobre vosotros el Espíritu Santo». El poder llega con la venida del Espíritu.',
        'καὶ ἔσεσθέ μου μάρτυρες: futuro de εἰμί, «seréis», y el genitivo μου adelantado: «mis testigos». El poder tiene un propósito: dar testimonio de Cristo en círculos que se amplían, de Jerusalén a lo último de la tierra. El libro de Hechos sigue ese orden.',
        { h: 'El cumplimiento' },
        'En Hechos 2:4, ἐπλήσθησαν es aoristo pasivo de πίμπλημι: «fueron llenos». La pasiva indica que la obra es de Dios, y πάντες, «todos», que nadie quedó fuera. Πνεύματος ἁγίου está en genitivo, el caso de aquello de lo que algo se llena.',
        'καὶ ἤρξαντο λαλεῖν ἑτέραις γλώσσαις: aoristo medio de ἄρχομαι más infinitivo, «comenzaron a hablar», y un dativo, «en otras lenguas». ἕτερος, «otro, distinto», indica lenguas distintas de las suyas, que los oyentes reconocieron como sus idiomas, según Hechos 2:6-11.',
        'El final es delicado: καθὼς τὸ πνεῦμα ἐδίδου ἀποφθέγγεσθαι αὐτοῖς. ἐδίδου es imperfecto de δίδωμι: el Espíritu les «daba», de manera continua, que se expresaran. Los discípulos hablaban; el Espíritu daba la expresión. ἀποφθέγγεσθαι es un verbo de habla solemne o inspirada; Lucas lo usa también para el discurso de Pedro (Hch 2:14).',
        { h: 'Un patrón en Hechos' },
        'Lo que pasó en Pentecostés se repite en otros momentos de Hechos: en casa de Cornelio, los oyentes «hablaban en lenguas, y que magnificaban a Dios» (Hch 10:46), y en Éfeso, cuando Pablo les impuso las manos, «hablaban en lenguas, y profetizaban» (Hch 19:6). En los dos textos, el verbo λαλέω está en imperfecto. La promesa del Padre es para la iglesia de todos los tiempos (Hch 2:39), y la experiencia del bautismo en el Espíritu Santo, con la señal de hablar en otras lenguas, sigue a disposición de todo creyente que la busca.',
        { ir: { t: 'Estudiar el bautismo en el Espíritu en El Espíritu Santo', a: '../../espiritu-santo/' } },
        { ejercicio: {
          pregunta: '¿Qué indica el imperfecto ἐδίδου en Hechos 2:4?',
          opciones: [
            { t: 'Que el Espíritu les dio a hablar una sola palabra.', ok: false, por_que: 'El imperfecto presenta una acción en desarrollo, no un hecho puntual.' },
            { t: 'Que el Espíritu les iba dando que se expresaran mientras hablaban.', ok: true, por_que: 'El imperfecto describe la acción continua del Espíritu durante todo el hablar.' },
            { t: 'Que el Espíritu les dará lenguas en el futuro.', ok: false, por_que: 'El aumento ἐ- indica pasado.' }
          ],
          explicacion: 'Los discípulos hablaban y el Espíritu les daba continuamente la expresión: una obra conjunta.'
        } }
      ],
      pensar: 'El poder del Espíritu es para ser testigos. ¿Has buscado ser lleno del Espíritu Santo? ¿Dónde está tu «Jerusalén», el primer lugar donde Dios te llama a testificar?'
    },
    {
      id: 'juan-19-30', n: 'Juan 19:30: «consumado es»', ref: 'Juan 19:28-30; Juan 10:18',
      visual: [
        G('Juan 19:30', 'Juan 19:30', 'ὅτε οὖν ἔλαβεν τὸ ὄξος ὁ Ἰησοῦς εἶπεν Τετέλεσται, καὶ κλίνας τὴν κεφαλὴν παρέδωκεν τὸ πνεῦμα.', 'Hóte un élaben to óxos ho Iēsús eípen Tetélestai, kai klínas tēn kefalḗn parédōken to pneúma.', [['ὅτε', 'hóte'], ['οὖν', 'un'], ['ἔλαβεν', 'élaben'], ['τὸ', 'to'], ['ὄξος', 'óxos'], ['ὁ', 'ho'], ['Ἰησοῦς', 'Iēsús'], ['εἶπεν', 'eípen'], ['Τετέλεσται', 'Tetélestai'], ['καὶ', 'kai'], ['κλίνας', 'klínas'], ['τὴν', 'tēn'], ['κεφαλὴν', 'kefalḗn'], ['παρέδωκεν', 'parédōken'], ['τὸ', 'to'], ['πνεῦμα', 'pneúma']],
          ['cuando', 'pues', 'tomó', 'el', 'vinagre', 'el', 'Jesús', 'dijo', 'ha sido consumado', 'y', 'inclinando', 'la', 'cabeza', 'entregó', 'el', 'espíritu'],
          'Cuando Jesús hubo tomado el vinagre, dijo: Consumado es. Y habiendo inclinado la cabeza, entregó el espíritu.')
      ],
      texto: [
        'La última palabra de Jesús en la cruz, según Juan, es un solo verbo: τετέλεσται. Ya puedes analizarlo con el método de la ruta III.',
        { h: 'Análisis' },
        'Reduplicación τε-; sin -κ-; terminación -ται. Es un perfecto medio o pasivo, indicativo, tercera persona del singular, de τελέω, «terminar, cumplir, llevar a su fin». Literalmente: «ha sido llevado a su fin», y queda terminado. La Reina-Valera traduce «Consumado es».',
        'El perfecto es la clave. Jesús no dice solo «se terminó», lo que diría el aoristo ἐτελέσθη, sino que la obra quedó completa y su resultado permanece. Nada hay que añadir a lo que Cristo hizo en la cruz.',
        { h: '¿Qué fue consumado?' },
        'Dos versículos antes, Juan usa la misma forma: «sabiendo Jesús que ya todo estaba consumado», πάντα τετέλεσται, «dijo, para que la Escritura se cumpliese: Tengo sed» (Jn 19:28). Lo consumado es la obra que el Padre le dio, anunciada en las Escrituras. Jesús había dicho en su oración: τὸ ἔργον τελειώσας, «he acabado la obra que me diste que hiciese» (Jn 17:4).',
        'Se repite a menudo que en los recibos de impuestos de la época se escribía esta palabra con el sentido de «pagado». Es cierto que τελέω se usaba para pagar impuestos, como en Mateo 17:24 y Romanos 13:6, y la idea de una deuda pagada armoniza con la enseñanza bíblica de la cruz (Col 2:14). Pero conviene no apoyar la predicación en ese dato, que se cita sin pruebas claras. El mismo Juan explica la palabra: es el cumplimiento de la obra y de la Escritura.',
        { h: 'Entregó el espíritu' },
        'κλίνας τὴν κεφαλήν, «habiendo inclinado la cabeza», es un participio de aoristo: una acción anterior al verbo principal. παρέδωκεν τὸ πνεῦμα, «entregó el espíritu», es aoristo activo de παραδίδωμι. Jesús no fue vencido por la muerte: entregó su vida él mismo. Lo había dicho: «Nadie me la quita, sino que yo de mí mismo la pongo» (Jn 10:18). Aquí πνεῦμα significa el espíritu humano de Jesús, su vida, como en la ruta IV.',
        { ejercicio: {
          pregunta: '¿Qué aporta el perfecto τετέλεσται que no aportaría el aoristo?',
          opciones: [
            { t: 'Que la obra quedó completa y su resultado permanece.', ok: true, por_que: 'El perfecto mira el resultado vigente de una acción terminada.' },
            { t: 'Que la obra se repetirá cada año.', ok: false, por_que: 'El perfecto no indica repetición. La obra de Cristo fue hecha una vez (He 9:28).' },
            { t: 'Que la obra todavía no ha empezado.', ok: false, por_que: 'La reduplicación indica una acción terminada.' }
          ],
          explicacion: 'Consumado es: la obra de la cruz está completa y sigue siendo suficiente.'
        } }
      ],
      pensar: 'Si la obra de Cristo quedó consumada, ¿estás intentando añadirle algo para sentirte aceptado por Dios? ¿Qué significa para ti descansar en lo que él terminó?'
    },
    {
      id: 'seguir', n: 'Cómo seguir', ref: '2 Pedro 3:18; Hechos 17:11; 2 Timoteo 2:15',
      visual: [
        G('2 Pedro 3:18', '2 Pedro 3:18', 'αὐξάνετε δὲ ἐν χάριτι καὶ γνώσει τοῦ Κυρίου ἡμῶν καὶ Σωτῆρος Ἰησοῦ Χριστοῦ. αὐτῷ ἡ δόξα καὶ νῦν καὶ εἰς ἡμέραν αἰῶνος.', 'Auxánete de en járiti kai gnṓsei tu Kyríu hēmṓn kai Sōtḗros Iēsú Jristú. autṓ hē dóxa kai nyn kai eis hēméran aiṓnos.', [['αὐξάνετε', 'auxánete'], ['δὲ', 'de'], ['ἐν', 'en'], ['χάριτι', 'járiti'], ['καὶ', 'kai'], ['γνώσει', 'gnṓsei'], ['τοῦ', 'tu'], ['Κυρίου', 'Kyríu'], ['ἡμῶν', 'hēmṓn'], ['καὶ', 'kai'], ['Σωτῆρος', 'Sōtḗros'], ['Ἰησοῦ', 'Iēsú'], ['Χριστοῦ', 'Jristú'], ['αὐτῷ', 'autṓ'], ['ἡ', 'hē'], ['δόξα', 'dóxa'], ['καὶ', 'kai'], ['νῦν', 'nyn'], ['καὶ', 'kai'], ['εἰς', 'eis'], ['ἡμέραν', 'hēméran'], ['αἰῶνος', 'aiṓnos']],
          ['creced', 'pero', 'en', 'gracia', 'y', 'conocimiento', 'del', 'Señor', 'de nosotros', 'y', 'Salvador', 'Jesús', 'Cristo', 'a él', 'la', 'gloria', 'tanto', 'ahora', 'como', 'hasta', 'el día', 'de la eternidad'],
          'Antes bien, creced en la gracia y el conocimiento de nuestro Señor y Salvador Jesucristo. A él sea gloria ahora y hasta el día de la eternidad. Amén.'),
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Cómo seguir creciendo',
          cab: ['Herramienta', 'Para qué'],
          filas: [
            ['El vocabulario de este recurso', 'Una lección por semana hasta completar las 45, y repasar con el modo de práctica'],
            ['Interlineal griego–español (NT)', 'Recurso del sitio: el Nuevo Testamento palabra por palabra, con su análisis'],
            ['Concordancia con números de Strong', 'Encontrar todas las apariciones de una palabra griega'],
            ['Un diccionario griego–español del Nuevo Testamento', 'Ver todos los sentidos de una palabra y sus usos'],
            ['Una gramática del griego del Nuevo Testamento', 'Profundizar lo que aquí es una introducción'],
            ['Vocabulario y gramática básica del hebreo bíblico', 'El paso equivalente para el Antiguo Testamento'],
          ],
          nota: 'Lo más útil es la práctica breve y constante: un versículo por día, con el método de las seis preguntas.'
        } }
      ],
      texto: [
        'Si llegaste hasta aquí, ya sabes mucho más griego del que sabías al empezar. Puedes reconocer los casos, distinguir un aoristo de un presente, encontrar un participio y entender por qué un comentario dice que un verbo es «perfecto pasivo». Lo que sigue es práctica.',
        { h: 'Un hábito sencillo' },
        'Elige un libro breve que conozcas bien en español, como 1 Juan o Filipenses, y lee un versículo por día en griego. Primero en voz alta. Después busca las palabras que no conozcas en el vocabulario. Por último, aplica a cada verbo el método de las seis preguntas. Al terminar el libro, notarás la diferencia.',
        { ir: { t: 'Abrir el vocabulario', a: 'vocabulario/' } },
        { h: 'Lo que viene' },
        'El paso siguiente en el sitio es el Interlineal griego–español del Nuevo Testamento, que muestra cada palabra con su glosa y su análisis, como el interlineal hebreo. Con lo que aprendiste aquí podrás sacarle todo el provecho; su ruta «Cómo usar este recurso» te enseña a evitar los errores más comunes. Mientras tanto, si estudias también el Antiguo Testamento, el recurso de hebreo sigue el mismo camino.',
        { ir: { t: 'Abrir el Interlineal griego–español (NT)', a: '../../interlineal-griego/' } },
        { ir: { t: 'Ver Vocabulario y gramática básica del hebreo bíblico', a: '../../gramatica-hebrea/' } },
        { h: 'Crecer en gracia y en conocimiento' },
        'Pedro termina su segunda carta con un imperativo de presente: αὐξάνετε, «creced», un crecimiento continuo. Y dice en qué: ἐν χάριτι καὶ γνώσει, «en la gracia y el conocimiento», dos dativos con una sola preposición. El conocimiento es τοῦ κυρίου ἡμῶν καὶ σωτῆρος Ἰησοῦ Χριστοῦ: un artículo para dos títulos, «nuestro Señor y Salvador Jesucristo», la misma persona.',
        'Ese es el propósito de todo este estudio. No aprendemos griego para saber más que otros, sino para conocer mejor a Cristo y para servir mejor a su iglesia. El conocimiento sin gracia envanece; la gracia sin conocimiento se queda corta. Pedro pide las dos.',
        { ir: { t: 'Repasar «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } },
        { ejercicio: {
          pregunta: 'En 2 Pedro 3:18, ¿qué indica el imperativo de presente αὐξάνετε?',
          opciones: [
            { t: 'Un crecimiento que debe continuar, como proceso.', ok: true, por_que: 'El presente presenta la acción en desarrollo: seguid creciendo.' },
            { t: 'Un crecimiento que ya terminó.', ok: false, por_que: 'Para algo terminado se usaría el perfecto.' },
            { t: 'Un crecimiento que ocurrirá solo en el cielo.', ok: false, por_que: 'Es un mandato para la vida presente.' }
          ],
          explicacion: 'La vida cristiana es crecimiento continuo en gracia y en el conocimiento de Cristo.'
        } }
      ],
      pensar: '«Creced en la gracia y el conocimiento de nuestro Señor y Salvador Jesucristo.» ¿Qué paso concreto darás este mes para seguir creciendo, y con quién compartirás lo que aprendiste?'
    }
  ];

  const GG = window.__GG;
  delete window.__GG;
  window.RUTA_DATA = {
    titulo: 'Vocabulario y gramática básica del griego del NT',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto griego: Nuevo Testamento de Eberhard Nestle (1904), dominio público, según la edición de biblicalhumanities.org (morfología, lemas y números de Strong CC0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'Vocabulario y gramática', n: 'I. Panorama', info: 'Cómo funciona el griego: terminaciones, clases de palabras, orden y frecuencia', estaciones: GG.panorama },
      { id: 'sustantivo', grupo: 'Vocabulario y gramática', n: 'II. El sustantivo y sus compañeros', info: 'Los cinco casos, las tres declinaciones, el artículo, el adjetivo, las preposiciones y los pronombres', estaciones: GG.sustantivo },
      { id: 'verbo', grupo: 'Vocabulario y gramática', n: 'III. El verbo', info: 'Aspecto, tiempos, voces, modos, infinitivo, participio y un método para analizar', estaciones: GG.verbo },
      { id: 'palabras', grupo: 'Vocabulario y gramática', n: 'IV. Palabras clave de la fe', info: 'Diez palabras griegas estudiadas sin caer en los errores comunes', estaciones: GG.palabras },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Seis pasajes famosos, forma por forma', estaciones: taller }
    ]
  };
})();
