/* El alfabeto griego y la lectura · Taller práctico y datos del recurso */
(() => {
  const { P } = window.__ALFA;

  const taller = [
    {
      id: 'juan-1-1', n: 'Juan 1:1: En el principio era el Verbo', ref: 'Juan 1:1-3; Génesis 1:1',
      visual: [
        { tipo: 'griego', titulo: 'Juan 1:1', ref: 'Juan 1:1', gr: '@@n1904:jn/1/1', tr: 'En arjḗ ēn ho Lógos, kai ho Lógos ēn pros ton Theón, kai Theós ēn ho Lógos.',
          palabras: P('@@n1904p:jn/1/1', [['en', 'en'], ['arjḗ', 'principio'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo'], ['kai', 'y'], ['ho', 'el'], ['Lógos', 'Verbo'], ['ēn', 'era'], ['pros', 'con'], ['ton', 'el'], ['Theón', 'Dios'], ['kai', 'y'], ['Theós', 'Dios'], ['ēn', 'era'], ['ho', 'el'], ['Lógos', 'Verbo']]),
          rv: '@@jn/1/1' },
        { tipo: 'tabla', titulo: 'Letra por letra', tabla: {
          titulo: 'Las letras de Juan 1:1',
          cab: ['Palabra', 'Letras', 'Lo que ya sabes'],
          filas: [
            ['Ἐν', 'Ε + ν', 'Espíritu suave: sin h. La ν suena n'],
            ['ἀρχῇ', 'α ρ χ η', 'ρ = r, χ = j, iota suscrita que no se lee'],
            ['ἦν', 'η ν', 'Eta (e larga) con espíritu suave y circunflejo'],
            ['ὁ', 'ο', 'Espíritu áspero: ho'],
            ['Λόγος', 'Λ ο γ ο ς', 'Sigma final; la sílaba fuerte es Λό'],
            ['πρὸς', 'π ρ ο ς', 'La ρ parece p y es r; acento grave'],
            ['Θεόν', 'Θ ε ο ν', 'Theta: th'],
          ],
          nota: 'Si puedes explicar cada fila, ya sabes leer este versículo.'
        } }
      ],
      texto: [
        'El taller junta todo lo que aprendiste. En cada estación vas a leer un versículo completo, palabra por palabra. Primero léelo con las ayudas. Después ocúltalas y léelo en voz alta tres veces, cada vez un poco más rápido.',
        { h: 'Las primeras palabras de Juan' },
        'Juan empieza su evangelio igual que empieza la Biblia: «En el principio» (Gn 1:1). En la Septuaginta, Génesis 1:1 comienza con las mismas dos palabras: ἐν ἀρχῇ. Juan quiere que el lector piense en la creación, y le anuncia que antes de que existiera algo, ya existía el Verbo.',
        'El versículo tiene tres frases, unidas por καί. Cada una dice algo del Verbo. La primera: ἐν ἀρχῇ ἦν ὁ Λόγος, «en el principio era el Verbo»: ya existía cuando todo comenzó. La segunda: ὁ Λόγος ἦν πρὸς τὸν Θεόν, «el Verbo era con Dios»: la preposición πρός indica cercanía y relación, como alguien que está cara a cara con otro. La tercera: Θεὸς ἦν ὁ Λόγος, «el Verbo era Dios».',
        { h: 'Lo que notas al leer en griego' },
        'Al leer en griego, notas cosas que la traducción no puede mostrar del todo. El verbo ἦν, «era», se repite tres veces: no dice que el Verbo «comenzó a ser», sino que «era», continuamente. Y la palabra Λόγος cierra el versículo, después de Θεός, que va primero para recibir el énfasis, como viste en la estación del artículo.',
        '¿Por qué «Verbo»? Λόγος significa «palabra». La Reina-Valera usa «Verbo», del latín verbum, que también significa «palabra». Jesús es la Palabra de Dios: la expresión perfecta de quién es Dios. Lo dice el mismo capítulo: «A Dios nadie le vio jamás; el unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer» (Jn 1:18).',
        { h: 'Para practicar' },
        'Lee la tabla del segundo panel, fila por fila. Si puedes explicar cada letra y cada signo, oculta las ayudas en el primer panel y lee el versículo completo. Es una buena idea aprenderlo de memoria en griego: es corto, es rítmico y es uno de los más importantes de la Biblia.',
        { ejercicio: {
          pregunta: '¿Qué indica la preposición πρός en la frase ὁ Λόγος ἦν πρὸς τὸν Θεόν?',
          opciones: [
            { t: 'Que el Verbo estaba lejos de Dios.', ok: false, por_que: 'πρός indica dirección y cercanía, no distancia.' },
            { t: 'Que el Verbo estaba junto a Dios, en relación con él.', ok: true, por_que: 'πρός indica cercanía y relación: el Verbo estaba cara a cara con Dios.' },
            { t: 'Que el Verbo fue creado por Dios.', ok: false, por_que: 'El versículo dice que el Verbo «era» en el principio. El versículo 3 dice que todas las cosas fueron hechas por él.' }
          ],
          explicacion: 'Juan 1:1 enseña tres verdades: el Verbo es eterno, está en relación con Dios y es Dios.'
        } }
      ],
      pensar: 'El Verbo que estaba con Dios desde el principio se hizo carne para darse a conocer. ¿Qué has conocido de Dios mirando a Jesús en los evangelios?'
    },
    {
      id: 'juan-3-16', n: 'Juan 3:16: De tal manera amó Dios al mundo', ref: 'Juan 3:16-17',
      visual: [
        { tipo: 'griego', titulo: 'Juan 3:16', ref: 'Juan 3:16', gr: '@@n1904:jn/3/16', tr: 'Hútōs gar ēgápēsen ho Theós ton kósmon, hṓste ton Hyión ton monogenḗ édōken, hína pas ho pistéuōn eis autón mē apólētai all’ éjē zōḗn aiṓnion.',
          palabras: P('@@n1904p:jn/3/16', [['hútōs', 'de tal manera'], ['gar', 'porque'], ['ēgápēsen', 'amó'], ['ho', '(el)'], ['Theós', 'Dios'], ['ton', 'al'], ['kósmon', 'mundo'], ['hṓste', 'que'], ['ton', 'al'], ['Hyión', 'Hijo'], ['ton', 'el'], ['monogenḗ', 'unigénito'], ['édōken', 'dio'], ['hína', 'para que'], ['pas', 'todo'], ['ho', 'el (que)'], ['pistéuōn', 'cree'], ['eis', 'en'], ['autón', 'él'], ['mē', 'no'], ['apólētai', 'se pierda'], ['all’', 'sino que'], ['éjē', 'tenga'], ['zōḗn', 'vida'], ['aiṓnion', 'eterna']]),
          rv: '@@jn/3/16' },
        { tipo: 'imagen', titulo: 'Nicodemo', src: 'img/nicodemo-noche.webp', alt: 'Dos hombres conversan de noche en una azotea de Jerusalén a la luz de una lámpara de aceite; uno, mayor y con manto de maestro, escucha con atención', pie: 'Recreación: Nicodemo conversa de noche con Jesús (Jn 3:1-21).', origen: 'ia' }
      ],
      texto: [
        'Juan 3:16 es probablemente el versículo más conocido de la Biblia. Forma parte de la conversación de Jesús con Nicodemo, de noche, en Jerusalén. Leerlo en griego, despacio, te permite ver cómo está construido.',
        { h: 'Cuatro partes' },
        'El versículo tiene cuatro partes. La primera dice quién ama y a quién: οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, «porque de tal manera amó Dios al mundo». La palabra οὕτως, «así, de tal manera», va al comienzo para recibir el énfasis: no solo dice que Dios amó, sino cómo amó.',
        'La segunda dice qué hizo el amor: ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, «que ha dado a su Hijo unigénito». Μονογενής significa «único en su clase»: no hay otro Hijo como él.',
        'La tercera dice para quién: ἵνα πᾶς ὁ πιστεύων εἰς αὐτόν, «para que todo aquel que en él cree». La palabra πᾶς, «todo», abre la puerta a cualquier persona. Y el verbo πιστεύων está en una forma que indica una acción continua: el que «está creyendo».',
        'La cuarta dice el resultado: μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον, «no se pierda, mas tenga vida eterna». Dos destinos opuestos, unidos por ἀλλά, «sino».',
        { h: 'Detalles de lectura' },
        'En este versículo encuentras casi todo lo que aprendiste: el diptongo ου de οὕτως, la eta de ἠγάπησεν, la gamma de μονογενῆ, el espíritu áspero de ὁ y de ἵνα, la ýpsilon con espíritu áspero de Υἱόν, el apóstrofo de ἀλλ’ y la iota suscrita de ἔχῃ.',
        'Una curiosidad: el verbo ἀγαπάω, «amar», es el de la palabra ἀγάπη. En el Nuevo Testamento describe el amor que da, el amor que busca el bien del otro aunque cueste. Juan 3:16 muestra su medida: Dios dio a su Hijo.',
        { ejercicio: {
          pregunta: '¿Por qué la palabra οὕτως va al comienzo del versículo?',
          opciones: [
            { t: 'Porque en griego el adverbio siempre va primero.', ok: false, por_que: 'El orden griego es libre. El adverbio no tiene un lugar fijo.' },
            { t: 'Para darle énfasis: la manera en que Dios amó.', ok: true, por_que: 'Al ir primero, οὕτως subraya el modo del amor de Dios, que se explica después: dio a su Hijo.' },
            { t: 'Porque es la palabra más larga.', ok: false, por_que: 'La longitud no determina el orden.' }
          ],
          explicacion: 'En griego, lo que va al comienzo suele llevar el énfasis.'
        } }
      ],
      pensar: 'Dios no solo dijo que nos amaba: dio a su Hijo. ¿Cómo puedes mostrar con hechos, y no solo con palabras, el amor que has recibido?'
    },
    {
      id: 'padre-nuestro', n: 'El Padre Nuestro: Mateo 6:10-11', ref: 'Mateo 6:9-13',
      visual: [
        { tipo: 'griego', titulo: 'Mateo 6:10', ref: 'Mateo 6:10', gr: '@@n1904:mt/6/10', tr: 'Elthátō hē basiléia su; genēthḗtō to thélēmá su, hōs en uranṓ kai epí gēs;',
          palabras: P('@@n1904p:mt/6/10', [['elthátō', 'venga'], ['hē', 'el'], ['basiléia', 'reino'], ['su', 'tuyo'], ['genēthḗtō', 'hágase'], ['to', 'la'], ['thélēmá', 'voluntad'], ['su', 'tuya'], ['hōs', 'como'], ['en', 'en'], ['uranṓ', 'cielo'], ['kai', 'también'], ['epí', 'sobre'], ['gēs', 'tierra']]),
          rv: '@@mt/6/10' },
        { tipo: 'griego', titulo: 'Mateo 6:11', ref: 'Mateo 6:11', gr: '@@n1904:mt/6/11', tr: 'Ton árton hēmṓn ton epiúsion dos hēmín sḗmeron;',
          palabras: P('@@n1904p:mt/6/11', [['ton', 'el'], ['árton', 'pan'], ['hēmṓn', 'nuestro'], ['ton', 'el'], ['epiúsion', 'de cada día'], ['dos', 'da'], ['hēmín', 'nos'], ['sḗmeron', 'hoy']]),
          rv: '@@mt/6/11' }
      ],
      texto: [
        'En la ruta II leíste el comienzo del Padre Nuestro (Mt 6:9). Ahora vas a leer dos de sus peticiones. Son frases cortas, con palabras que se repiten, ideales para practicar.',
        { h: 'Tres peticiones con la misma forma' },
        'Las tres primeras peticiones tienen la misma forma: un verbo al comienzo y algo de Dios después. Ἁγιασθήτω τὸ ὄνομά σου, «santificado sea tu nombre». Ἐλθάτω ἡ βασιλεία σου, «venga tu reino». Γενηθήτω τὸ θέλημά σου, «hágase tu voluntad». Los tres verbos terminan en -τω, una terminación que expresa un deseo o un mandato: «que sea», «que venga», «que se haga». Y las tres frases terminan con σου, «tuyo». Antes de pedir por nosotros, oramos por el nombre, el reino y la voluntad de Dios.',
        'Lee en voz alta el primer panel. Fíjate en la iota suscrita de οὐρανῷ, que no se pronuncia, y en el punto alto (·) que separa las peticiones.',
        { h: 'El pan de cada día' },
        'El segundo panel tiene la cuarta petición. La palabra ἐπιούσιος es una de las más curiosas del Nuevo Testamento: aparece solo aquí y en el pasaje paralelo de Lucas, y casi en ningún otro escrito griego. Por eso los estudiosos discuten su sentido exacto: «de cada día», «necesario» o «de mañana». La Reina-Valera traduce «de cada día», que es la interpretación más antigua y extendida. En cualquier caso, la petición enseña a depender de Dios día a día, como Israel con el maná.',
        { h: 'Una diferencia entre las ediciones' },
        'Si sigues leyendo hasta el versículo 13, verás que la edición de Nestle termina con ἀπὸ τοῦ πονηροῦ, «del mal», sin la frase «porque tuyo es el reino, y el poder, y la gloria, por todos los siglos. Amén», que sí está en la Reina-Valera. Esa frase falta en los manuscritos más antiguos de Mateo y está en la mayoría de los posteriores. Es una alabanza fiel a toda la Escritura (1 Cr 29:11), y las iglesias la siguen orando. Este tipo de diferencias se estudia en De la Biblia a nosotros.',
        { ir: { t: 'Ver los pasajes discutidos en De la Biblia a nosotros', a: '../../de-la-biblia-a-nosotros/' } },
        { ejercicio: {
          pregunta: '¿Qué tienen en común ἁγιασθήτω, ἐλθάτω y γενηθήτω?',
          opciones: [
            { t: 'Son sustantivos femeninos.', ok: false, por_que: 'Son verbos: santificar, venir, hacerse.' },
            { t: 'Son verbos que terminan en -τω y expresan un deseo: «sea», «venga», «hágase».', ok: true, por_que: 'La terminación -τω expresa un mandato o deseo en tercera persona.' },
            { t: 'Son nombres de ángeles.', ok: false, por_que: 'Son las tres primeras peticiones de la oración.' }
          ],
          explicacion: 'Las tres primeras peticiones tienen la misma forma: un verbo en -τω y algo de Dios, con σου, «tuyo».'
        } }
      ],
      pensar: 'Jesús enseñó a pedir primero por el nombre, el reino y la voluntad de Dios, y después por el pan. ¿Cómo sería tu oración de hoy si siguieras ese orden?'
    },
    {
      id: 'romanos-1-16', n: 'Romanos 1:16: No me avergüenzo del evangelio', ref: 'Romanos 1:16-17',
      visual: [
        { tipo: 'griego', titulo: 'Romanos 1:16', ref: 'Romanos 1:16', gr: '@@n1904:ro/1/16', tr: 'U gar epaisjýnomai to euangélion; dýnamis gar Theú estin eis sōtērían pantí tō pistéuonti, Iudáiō te prṓton kai Héllēni.',
          palabras: P('@@n1904p:ro/1/16', [['u', 'no'], ['gar', 'porque'], ['epaisjýnomai', 'me avergüenzo'], ['to', 'del'], ['euangélion', 'evangelio'], ['dýnamis', 'poder'], ['gar', 'porque'], ['Theú', 'de Dios'], ['estin', 'es'], ['eis', 'para'], ['sōtērían', 'salvación'], ['pantí', 'a todo'], ['tō', 'el (que)'], ['pistéuonti', 'cree'], ['Iudáiō', 'al judío'], ['te', 'tanto'], ['prṓton', 'primeramente'], ['kai', 'y'], ['Héllēni', 'al griego']]),
          rv: '@@ro/1/16' },
        { tipo: 'imagen', titulo: 'La carta', src: '../introduccion-nuevo-testamento/img/int-romanos-tercio.webp', alt: 'Pablo dicta una carta a un escriba que escribe sobre un papiro en una casa de Corinto', pie: 'Recreación: Pablo dicta la carta a los Romanos a Tercio (Ro 16:22).', origen: 'ia' }
      ],
      texto: [
        'Pablo escribió a los Romanos desde Corinto, en el invierno del 56 al 57, a una iglesia que no conocía personalmente. En los versículos 16 y 17 del primer capítulo resume el tema de toda la carta. Leerlo en griego es leer el corazón del evangelio de Pablo.',
        { h: 'Palabra por palabra' },
        'Οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον: «porque no me avergüenzo del evangelio». El verbo ἐπαισχύνομαι es largo; divídelo en sílabas: ἐ-παι-σχύ-νο-μαι. Tiene el diptongo αι dos veces y la ji, que suena j.',
        'Δύναμις γὰρ Θεοῦ ἐστιν: «porque es poder de Dios». La palabra δύναμις, «poder», dio origen a «dinamita» y «dinámico». Pero cuidado: el evangelio no es poder de Dios porque explote como dinamita, sino porque Dios mismo obra en él para salvar. Es la misma palabra que Jesús usa en Hechos 1:8: «recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo».',
        'Εἰς σωτηρίαν παντὶ τῷ πιστεύοντι: «para salvación a todo aquel que cree». Otra vez πᾶς, «todo», y otra vez el verbo πιστεύω, «creer», como en Juan 3:16. Fíjate en la iota suscrita de τῷ.',
        'Ἰουδαίῳ τε πρῶτον καὶ Ἕλληνι: «al judío primeramente, y también al griego». Ἕλλην, «griego», es como los griegos se llamaban a sí mismos. De ahí viene «helenismo».',
        { h: 'Lo que se ve en griego' },
        'La palabra γάρ, «porque», aparece dos veces. Pablo encadena razones: no me avergüenzo, porque el evangelio es poder de Dios, y en el versículo siguiente, porque en él se revela la justicia de Dios. Leer despacio en griego ayuda a seguir el hilo de su argumento.',
        { ejercicio: {
          pregunta: '¿Cómo se divide en sílabas ἐπαισχύνομαι?',
          opciones: [
            { t: 'ἐ-πα-ισ-χύ-νο-μα-ι', ok: false, por_que: 'αι es un diptongo: forma una sola sílaba.' },
            { t: 'ἐ-παι-σχύ-νο-μαι', ok: true, por_que: 'Cinco sílabas: e-pai-sjý-no-mai.' },
            { t: 'ἐπαι-σχύνο-μαι', ok: false, por_que: 'Cada sílaba tiene una sola vocal o diptongo.' }
          ],
          explicacion: 'Divide las palabras largas en sílabas, respetando los diptongos.'
        } }
      ],
      pensar: 'Pablo no se avergonzaba del evangelio, aunque en Roma muchos lo despreciaban. ¿En qué situación te cuesta hablar de Cristo, y cómo te anima saber que el evangelio es poder de Dios?'
    },
    {
      id: 'hechos-2-4', n: 'Hechos 2:4: Fueron todos llenos del Espíritu Santo', ref: 'Hechos 2:1-11; Hechos 1:8',
      fecha: 33,
      visual: [
        { tipo: 'griego', titulo: 'Hechos 2:4', ref: 'Hechos 2:4', gr: '@@n1904:hch/2/4', tr: 'Kai eplḗsthēsan pántes Pnéumatos Hagíu, kai ḗrxanto laléin hetérais glṓssais kathṓs to Pnéuma edídu apofthéngesthai autóis.',
          palabras: P('@@n1904p:hch/2/4', [['kai', 'y'], ['eplḗsthēsan', 'fueron llenos'], ['pántes', 'todos'], ['Pnéumatos', 'del Espíritu'], ['Hagíu', 'Santo'], ['kai', 'y'], ['ḗrxanto', 'comenzaron'], ['laléin', 'a hablar'], ['hetérais', 'en otras'], ['glṓssais', 'lenguas'], ['kathṓs', 'según'], ['to', 'el'], ['Pnéuma', 'Espíritu'], ['edídu', 'daba'], ['apofthéngesthai', 'que hablasen'], ['autóis', 'les']]),
          rv: '@@hch/2/4' },
        { tipo: 'imagen', titulo: 'Pentecostés', src: '../movimiento-pentecostal/img/pentecostes.webp', alt: 'En una sala alta de Jerusalén, unos ciento veinte discípulos, hombres y mujeres, oran juntos; sobre la cabeza de cada uno se posa una pequeña llama', pie: 'Recreación: el día de Pentecostés en Jerusalén (Hch 2:1-4).', origen: 'ia' }
      ],
      texto: [
        'El día de Pentecostés, cincuenta días después de la resurrección, el Espíritu Santo vino sobre los discípulos reunidos en Jerusalén. Hechos 2:4 describe lo que pasó en una sola frase. Leerla en griego te permite ver con precisión cada palabra.',
        { h: 'Palabra por palabra' },
        'Καὶ ἐπλήσθησαν πάντες Πνεύματος Ἁγίου: «y fueron todos llenos del Espíritu Santo». El verbo πίμπλημι, llenar, es el que Lucas usa una y otra vez para hablar de la llenura del Espíritu (Lc 1:15, 41, 67; Hch 4:8, 31; 9:17; 13:9). Y πάντες, «todos»: no solo los apóstoles, sino los ciento veinte.',
        'Καὶ ἤρξαντο λαλεῖν ἑτέραις γλώσσαις: «y comenzaron a hablar en otras lenguas». Γλῶσσα significa «lengua», tanto el órgano como el idioma. Ἕτερος, «otro», «distinto»: eran lenguas distintas de la suya, como muestran los visitantes que oyeron cada uno en su propio idioma (Hch 2:6-11).',
        'Καθὼς τὸ Πνεῦμα ἐδίδου ἀποφθέγγεσθαι αὐτοῖς: «según el Espíritu les daba que hablasen». El verbo ἐδίδου, «daba», está en una forma que indica acción continua: el Espíritu les iba dando las palabras. Y ἀποφθέγγεσθαι es un verbo poco común, que se usa para hablar con claridad y solemnidad, a veces bajo inspiración (Hch 2:14; 26:25). Ellos hablaban, y el Espíritu les daba qué hablar.',
        { h: 'Detalles de lectura' },
        'El versículo es un buen repaso. Tiene dos gammas nasales (ἀποφθέγγεσθαι), dos espíritus ásperos (Ἁγίου, ἑτέραις), una doble sigma (γλώσσαις), el diptongo ευ de Πνεύματος y el diptongo ου de Ἁγίου. Léelo primero con las ayudas y después sin ellas.',
        'Lo que pasó en Pentecostés no quedó en el pasado. Pedro anunció ese mismo día: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39).',
        { ir: { t: 'Ver «El bautismo en el Espíritu Santo» en El Espíritu Santo', a: '../../espiritu-santo/#bautismo/1' } },
        { ir: { t: 'Ver Pentecostés en Hechos de los Apóstoles', a: '../../hechos/' } },
        { ejercicio: {
          pregunta: '¿Qué indica la palabra ἑτέραις en ἑτέραις γλώσσαις?',
          opciones: [
            { t: 'Que hablaban en su propia lengua, pero más fuerte.', ok: false, por_que: 'Ἕτερος significa «otro», «distinto». Eran lenguas distintas de la propia.' },
            { t: 'Que hablaban en lenguas distintas de la suya.', ok: true, por_que: 'Ἕτερος significa otro, distinto. Los visitantes oían a los galileos hablar en sus propios idiomas (Hch 2:7-8).' },
            { t: 'Que hablaban solo en hebreo.', ok: false, por_que: 'El texto dice «otras lenguas», y luego enumera muchas naciones que las oyeron.' }
          ],
          explicacion: 'ἑτέραις γλώσσαις: «en otras lenguas», distintas de la propia, según el Espíritu les daba que hablasen.'
        } }
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es «para todos los que están lejos; para cuantos el Señor nuestro Dios llamare» (Hch 2:39). ¿Estás buscando ser lleno del Espíritu Santo para ser testigo de Cristo?'
    },
    {
      id: 'seguir', n: 'Cómo seguir aprendiendo', ref: 'Hechos 17:11; 2 Timoteo 2:15; Juan 5:39',
      visual: [
        { tipo: 'griego', titulo: 'Juan 8:32', ref: 'Juan 8:32', gr: '@@n1904:jn/8/32', tr: 'Kai gnṓsesthe tēn alḗtheian, kai hē alḗtheia eleutherṓsei hymás.',
          palabras: P('@@n1904p:jn/8/32', [['kai', 'y'], ['gnṓsesthe', 'conoceréis'], ['tēn', 'la'], ['alḗtheian', 'verdad'], ['kai', 'y'], ['hē', 'la'], ['alḗtheia', 'verdad'], ['eleutherṓsei', 'hará libres'], ['hymás', 'os']]),
          rv: '@@jn/8/32' },
        { tipo: 'tabla', titulo: 'Herramientas', tabla: {
          titulo: 'Herramientas para seguir',
          cab: ['Herramienta', 'Para qué sirve'],
          filas: [
            ['La tabla del alfabeto de este recurso', 'Repasar las letras, los diptongos y los signos, y practicar la lectura'],
            ['Vocabulario y gramática básica del griego del NT', 'Recurso siguiente del sitio: las 1.124 palabras más frecuentes, el sustantivo y el verbo'],
            ['Interlineal griego–español (NT)', 'Recurso del sitio (en preparación): el Nuevo Testamento palabra por palabra'],
            ['Concordancia con números de Strong', 'Encontrar todas las veces que aparece una palabra griega'],
            ['Un Nuevo Testamento griego impreso o digital', 'Leer cualquier pasaje en griego'],
          ],
          nota: 'El orden importa: primero leer con soltura, después vocabulario y gramática, y luego el interlineal.'
        } }
      ],
      texto: [
        'Si llegaste hasta aquí, ya puedes leer griego del Nuevo Testamento. Despacio, con ayudas y equivocándote, pero puedes. Lo que sigue es práctica.',
        { h: 'Un hábito de diez minutos' },
        'La lectura se afianza con repetición breve y frecuente. Te sugerimos tres ejercicios. Repasa el alfabeto en el modo de práctica de la tabla hasta reconocer cada letra sin dudar. Vuelve a leer en voz alta los versículos del taller, sin ayudas, hasta que salgan de corrido. Y lee cada día un versículo nuevo de un pasaje que conozcas bien en español: el prólogo de Juan (Jn 1:1-14), las bienaventuranzas (Mt 5:3-12) o 1 Corintios 13.',
        { ir: { t: 'Abrir la tabla del alfabeto griego', a: 'alfabeto/' } },
        { h: 'Lo que viene' },
        'Saber leer es el primer paso. El recurso Vocabulario y gramática básica del griego del NT te enseña las palabras más frecuentes, cómo funcionan los sustantivos y los verbos, y qué significan las terminaciones que viste en el taller. Después, el Interlineal griego–español, en preparación, te permitirá leer cualquier pasaje del Nuevo Testamento con la glosa de cada palabra.',
        { ir: { t: 'Seguir con Vocabulario y gramática básica del griego del NT', a: '../../gramatica-griega/' } },
        'Mientras tanto, una concordancia con los números de Strong es muy útil: a cada palabra griega le asigna un número, y con él puedes encontrar todos los pasajes donde aparece, aunque la traducción la vierta de maneras distintas. Si ya recorriste El alfabeto hebreo, te será fácil: es el mismo método.',
        { ir: { t: 'Repasar El alfabeto hebreo y la lectura', a: '../../alfabeto-hebreo/' } },
        { h: 'Con humildad y con oración' },
        'Conocer algo de griego es una herramienta valiosa, pero no te convierte en experto. Desconfía de las enseñanzas que dicen que «en el griego original» la Biblia dice algo muy distinto de lo que dicen todas las traducciones serias. Usa lo que aprendiste para leer con más atención, para comparar traducciones con respeto y para escuchar mejor a quienes estudiaron más.',
        'Sobre todo, recuerda para qué estudias. Jesús dijo a los que escudriñaban las Escrituras que ellas «dan testimonio de mí» (Jn 5:39). El fin del estudio es conocer mejor a Cristo. En el panel tienes su promesa: «conoceréis la verdad, y la verdad os hará libres» (Jn 8:32). Léela en griego, y hazla tu oración.',
        { ir: { t: 'Ver «Las palabras y la gramática» en Cómo interpretar la Biblia', a: '../../interpretar-biblia/#metodo/5' } }
      ],
      pensar: '«Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad» (2 Ti 2:15). ¿Qué paso concreto vas a dar este mes para seguir creciendo en el estudio de la Palabra?'
    }
  ];

  const A = window.__ALFA;
  delete window.__ALFA;
  window.RUTA_DATA = {
    titulo: 'El alfabeto griego y la lectura',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto griego: Nuevo Testamento de Eberhard Nestle (1904), dominio público, según la edición de biblicalhumanities.org (morfología CC0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'panorama', grupo: 'El alfabeto griego', n: 'I. Panorama', info: 'La lengua del Nuevo Testamento, su origen y cómo se escribía', estaciones: A.panorama },
      { id: 'letras', grupo: 'El alfabeto griego', n: 'II. Las 24 letras', info: 'Forma, nombre, sonido y valor de cada letra, y las abreviaturas sagradas', estaciones: A.letras },
      { id: 'signos', grupo: 'El alfabeto griego', n: 'III. Vocales, diptongos y signos', info: 'Vocales largas y breves, diptongos, espíritus, acentos y puntuación', estaciones: A.signos },
      { id: 'leer', grupo: 'El alfabeto griego', n: 'IV. A leer', info: 'Sílabas, nombres, palabras conocidas, el artículo, la pronunciación y los manuscritos', estaciones: A.leer },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Cinco pasajes famosos, palabra por palabra', estaciones: taller }
    ]
  };
})();
