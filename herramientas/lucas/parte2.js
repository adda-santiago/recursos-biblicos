/* Lucas · parte 2: ruta III, Comentario (Lucas 1–9:50) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__LC;
  const L = window.__LC;

  L.comentario = [
    {
      id: 'c1a', n: 'Capítulo 1 (I): el anuncio a Zacarías', ref: 'Lucas 1:1-25; Malaquías 4:5-6', fecha: -7,
      visual: [
        img('../cronologia-nuevo-testamento/img/cr-zacarias-incienso.webp', 'Un sacerdote anciano con vestiduras blancas de lino ofrece incienso en el altar de oro del santuario, iluminado por el candelero', 'Zacarías ofrece el incienso en el Lugar Santo (Lc 1:9).'),
        cita('Lucas 1:13-17', '@@lc/1/13-17'),
        tabla({
          titulo: 'Juan, el que prepara el camino',
          cab: ['Lo que dice el ángel', 'Lo que anunciaba el Antiguo Testamento'],
          filas: [
            ['«Irá delante de él con el espíritu y el poder de Elías» (1:17)', '«Yo os envío el profeta Elías» (Mal 4:5)'],
            ['«Hacer volver los corazones de los padres a los hijos» (1:17)', '«El hará volver el corazón de los padres hacia los hijos» (Mal 4:6)'],
            ['No beberá vino ni sidra (1:15)', 'Como un nazareo consagrado a Dios (Nm 6:3)'],
            ['Nace de padres ancianos y una madre estéril (1:7)', 'Como Isaac (Gn 18:11) y Samuel (1 S 1:2)']
          ]
        })
      ],
      texto: [
        'Después del prólogo, Lucas abre su relato en el lugar más santo de Israel. Zacarías, sacerdote del turno de Abías, y su esposa Elisabet eran «justos delante de Dios», pero no tenían hijos, «porque Elisabet era estéril, y ambos eran ya de edad avanzada» (Lc 1:6-7).',
        { h: 'En el santuario' },
        'Había tantos sacerdotes que ofrecer el incienso en el Lugar Santo era un honor que muchos recibían una sola vez en la vida, por sorteo. Ese día le tocó a Zacarías. Mientras el pueblo oraba afuera, se le apareció un ángel junto al altar. Era Gabriel, el mismo que había hablado a Daniel sobre el tiempo del Mesías (Dn 9:21-25).',
        { h: 'Un hijo con una misión' },
        'El ángel le dijo: «tu oración ha sido oída, y tu mujer Elisabet te dará a luz un hijo, y llamarás su nombre Juan» (Lc 1:13). Juan significa «Dios es misericordioso». Sería lleno del Espíritu Santo desde el vientre de su madre e iría delante del Señor «con el espíritu y el poder de Elías» (Lc 1:17). El último libro del Antiguo Testamento terminaba con esa promesa (Mal 4:5-6). Después de siglos sin profetas, Dios volvía a hablar.',
        { h: 'La duda y el silencio' },
        'Zacarías preguntó: «¿En qué conoceré esto?» (Lc 1:18). Pedía una señal porque le parecía imposible. Gabriel le dio una: quedaría mudo hasta que se cumpliera lo anunciado. Al salir, no pudo dar al pueblo la bendición sacerdotal. Elisabet concibió, y dijo: «Así ha hecho conmigo el Señor en los días en que se dignó quitar mi afrenta entre los hombres» (Lc 1:25).',
        'El evangelio comienza con una pareja fiel, una oración que parecía olvidada y un Dios que responde a su tiempo.',
        ir('Ver «Zacarías y el turno de Abías» en Cronología del Nuevo Testamento', R.crono + '#nacimiento/1'),
        ir('Ver el pasaje en la Armonía', R.armonia + '#anuncio-zacarias')
      ],
      pensar: 'Zacarías y Elisabet siguieron sirviendo a Dios aunque su oración más profunda parecía sin respuesta. ¿Hay alguna oración que hayas dejado de hacer? ¿Qué te enseña este relato?'
    },
    {
      id: 'c1b', n: 'Capítulo 1 (II): el anuncio a María y el Magníficat', ref: 'Lucas 1:26-56; Isaías 7:14; 2 Samuel 7:12-16', fecha: [-7, -6],
      visual: [
        img('lc-elisabet-maria.webp', 'Una joven de velo gris azulado abraza en la puerta de una casa de piedra de las montañas de Judea a una mujer anciana embarazada, que la recibe con alegría', 'María visita a Elisabet (Lc 1:39-45).'),
        cita('Lucas 1:30-35', '@@lc/1/30-35'),
        tabla({
          titulo: 'Dos anuncios',
          cab: ['', 'A Zacarías (1:5-25)', 'A María (1:26-38)'],
          filas: [
            ['Lugar', 'El templo de Jerusalén', 'Nazaret, una aldea de Galilea'],
            ['Persona', 'Un sacerdote anciano', 'Una joven desposada'],
            ['Imposible humano', 'Una mujer estéril y anciana', 'Una virgen'],
            ['Pregunta', '«¿En qué conoceré esto?» (pide una señal)', '«¿Cómo será esto?» (pregunta el modo)'],
            ['Respuesta', 'Queda mudo', '«Hágase conmigo conforme a tu palabra»']
          ]
        })
      ],
      texto: [
        'Seis meses después, Gabriel fue enviado a Nazaret, a una virgen desposada con José, de la casa de David. El contraste con el anuncio anterior es intencional: ya no el templo, sino una aldea sin importancia; ya no un sacerdote, sino una joven sencilla.',
        { h: 'El Hijo del Altísimo' },
        'El ángel anunció que María concebiría y daría a luz un hijo, que llamaría Jesús. Sería «grande», llamado «Hijo del Altísimo», recibiría «el trono de David su padre» y reinaría sobre la casa de Jacob para siempre (Lc 1:32-33). Son las palabras de la promesa a David (2 S 7:12-16). Ese reino eterno incluye el gobierno futuro de Cristo sobre Israel y las naciones, que todavía espera su cumplimiento pleno.',
        'María preguntó cómo sería, puesto que no conocía varón. El ángel respondió: «El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por lo cual también el Santo Ser que nacerá, será llamado Hijo de Dios» (Lc 1:35). Jesús fue concebido sin padre humano, como había anunciado Isaías (Is 7:14). «Porque nada hay imposible para Dios» (Lc 1:37).',
        { h: '«Hágase conmigo»' },
        'María no pidió señales. Respondió: «He aquí la sierva del Señor; hágase conmigo conforme a tu palabra» (Lc 1:38). Su fe es un modelo para todo creyente.',
        { h: 'La visita y el cántico' },
        'María fue a las montañas de Judea a visitar a Elisabet. Al oír su saludo, la criatura saltó en el vientre de Elisabet, y ella, llena del Espíritu Santo, la llamó «la madre de mi Señor» (Lc 1:43). Entonces María cantó el Magníficat (Lc 1:46-55): «Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador». María misma llama a Dios su Salvador: es una creyente que necesita la salvación, bienaventurada porque creyó (Lc 1:45). El cántico celebra al Dios que exalta a los humildes y cumple su promesa a Abraham.',
        ir('Ver «Nacido de una virgen» en La persona y obra de Cristo', R.cristo + '#encarnacion/2'),
        ir('Ir a la ruta Los cánticos de la Navidad', '#canticos/2')
      ],
      pensar: 'María dijo «hágase conmigo conforme a tu palabra» sin saber todo lo que eso le costaría. ¿Qué palabra de Dios necesitas recibir hoy con esa misma disposición?'
    },
    {
      id: 'c1c', n: 'Capítulo 1 (III): el nacimiento de Juan y el Benedictus', ref: 'Lucas 1:57-80; Génesis 17:12; Isaías 9:2; Malaquías 4:2', fecha: -6,
      visual: [
        cita('Lucas 1:68-75', '@@lc/1/68-75'),
        mapa({ view: V.judea, capas: ['nt-judea'], lugares: ['jerusalen', 'belen', 'montana-judea', 'desierto-judea', 'hebron'] }),
        tabla({
          titulo: 'El cántico de Zacarías en dos partes',
          cab: ['Versículos', 'Tema'],
          filas: [
            ['1:68-75', 'Bendito Dios, que cumple su pacto con David y con Abraham'],
            ['1:76-79', 'Tú, niño, serás profeta del Altísimo: preparar el camino del Señor'],
            ['1:80', 'El niño crece y se fortalece en espíritu, en los desiertos']
          ]
        })
      ],
      texto: [
        'Se cumplió el tiempo y Elisabet dio a luz un hijo. Sus vecinos y parientes se alegraron con ella, porque «Dios había engrandecido para con ella su misericordia» (Lc 1:58).',
        { h: '«Juan es su nombre»' },
        'Al octavo día, según la ley (Gn 17:12), vinieron a circuncidar al niño. Querían llamarlo Zacarías, como su padre, pero Elisabet dijo: «No; se llamará Juan» (Lc 1:60). Nadie en la familia se llamaba así. Le preguntaron por señas al padre, y él pidió una tablilla y escribió: «Juan es su nombre» (Lc 1:63). En ese momento se le soltó la lengua y comenzó a bendecir a Dios. La obediencia abrió la boca que la duda había cerrado.',
        'El temor se extendió por toda la montaña de Judea, y todos se preguntaban: «¿Quién, pues, será este niño?» (Lc 1:66).',
        { h: 'El Benedictus' },
        'Lleno del Espíritu Santo, Zacarías profetizó. Su cántico, llamado Benedictus por su primera palabra en latín, tiene dos partes. La primera alaba a Dios porque «ha visitado y redimido a su pueblo» y ha levantado «un poderoso Salvador en la casa de David» (Lc 1:68-69). Llama a recordar «su santo pacto; del juramento que hizo a Abraham» (Lc 1:72-73). Lo que Dios prometió siglos atrás está a punto de cumplirse.',
        'La segunda parte se dirige al niño: «Y tú, niño, profeta del Altísimo serás llamado; porque irás delante de la presencia del Señor, para preparar sus caminos» (Lc 1:76). Juan anunciaría el perdón de los pecados, y después «nos visitó desde lo alto la aurora», para dar luz a los que habitan en tinieblas (Lc 1:78-79; véase Is 9:2; Mal 4:2).',
        { h: 'En el desierto' },
        'El capítulo termina con una nota breve: el niño crecía, se fortalecía en espíritu y estuvo en lugares desiertos hasta el día de su manifestación a Israel (Lc 1:80). Dios lo preparó en lo escondido.',
        ir('Ver el pasaje en la Armonía', R.armonia + '#profecia-zacarias'),
        ir('Ir al cántico de Zacarías en Los cánticos de la Navidad', '#canticos/3')
      ],
      pensar: 'Zacarías recuperó la voz cuando obedeció y escribió el nombre que Dios había dado. ¿Hay alguna obediencia pendiente en tu vida que pueda estar «cerrando tu boca» para la alabanza?'
    },
    {
      id: 'c2a', n: 'Capítulo 2 (I): el nacimiento de Jesús y los pastores', ref: 'Lucas 2:1-20; Miqueas 5:2', fecha: [-6, -5],
      visual: [
        img('lc-pastores.webp', 'De noche, en un campo de pastoreo de las colinas de Belén, unos pastores con mantos de lana se cubren los ojos ante una luz intensa que baja del cielo sobre su rebaño', 'Los pastores en el campo de Belén (Lc 2:8-9).'),
        img('../persona-y-obra-de-cristo/img/belen-nacimiento.webp', 'En un establo excavado en la roca, una joven madre contempla a un recién nacido envuelto en pañales en un pesebre de piedra, junto a José', 'Lo envolvió en pañales y lo acostó en un pesebre (Lc 2:7).'),
        cita('Lucas 2:8-14', '@@lc/2/8-14'),
        pasos([
          { t: 'De Nazaret a Belén: unos 150 kilómetros (Lc 2:4)', fecha: -5, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['nazaret', 'jerusalen', 'belen'], trazos: ['jesus-belen'] } }
        ])
      ],
      texto: [
        'Lucas une el nacimiento de Jesús a la historia del imperio: un edicto de Augusto ordenó empadronar a todo el mundo, y José subió de Nazaret a Belén con María, que estaba encinta (Lc 2:1-5). Un decreto del hombre más poderoso de la tierra llevó a María al lugar que Miqueas había señalado para el nacimiento del Mesías (Mi 5:2).',
        { h: 'En un pesebre' },
        'Mientras estaban allí, María dio a luz a su hijo primogénito, «y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en el mesón» (Lc 2:7). La palabra traducida «mesón» puede referirse a la habitación de huéspedes de una casa. Muchas casas de Belén tenían un espacio para los animales, a veces en una cueva. El Hijo del Altísimo nació en el lugar más humilde.',
        { h: 'Buenas noticias para unos pastores' },
        'Esa noche había pastores velando sus rebaños. Los pastores eran gente pobre y poco considerada, pero a ellos les anunció el ángel: «He aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor» (Lc 2:10-11). Tres títulos en una frase: Salvador, Cristo (el Mesías) y Señor.',
        'Augusto se hacía llamar salvador y portador de la paz. Pero la verdadera paz la anuncia el ejército celestial: «¡Gloria a Dios en las alturas, y en la tierra paz, buena voluntad para con los hombres!» (Lc 2:14).',
        { h: 'Testigos y adoradores' },
        'Los pastores fueron aprisa, hallaron al niño y contaron lo que les habían dicho. Volvieron «glorificando y alabando a Dios» (Lc 2:20). Fueron los primeros evangelistas. María, en cambio, «guardaba todas estas cosas, meditándolas en su corazón» (Lc 2:19).',
        ir('Ver «¿Cuándo nació Jesús?» en Cronología del Nuevo Testamento', R.crono + '#nacimiento/4'),
        ir('Ver «Jesús nace bajo Augusto» en El imperio romano', R.romano + '#biblia/2'),
        ir('Ver el pasaje en la Armonía', R.armonia + '#pastores')
      ],
      pensar: 'Dios anunció el nacimiento de su Hijo primero a unos pastores. ¿Qué te dice eso sobre a quiénes quiere alcanzar Dios, y sobre cómo te ve a ti?'
    },
    {
      id: 'c2b', n: 'Capítulo 2 (II): Simeón, Ana y Jesús a los doce años', ref: 'Lucas 2:21-52; Levítico 12:2-8; Éxodo 13:2', fecha: [-5, 8],
      visual: [
        img('../entre-los-testamentos/img/simeon-templo.webp', 'En un atrio del templo, un anciano de barba blanca sostiene en brazos a un recién nacido y levanta la mirada al cielo, junto a una joven madre', 'Simeón toma al niño en sus brazos (Lc 2:28).'),
        img('../cronologia-nuevo-testamento/img/cr-jesus-doce.webp', 'Un muchacho de unos doce años, visto de espaldas, sentado entre maestros de la ley que lo escuchan en un pórtico del templo', 'Jesús entre los doctores (Lc 2:46).'),
        cita('Lucas 2:46-52', '@@lc/2/46-52')
      ],
      texto: [
        'José y María cumplieron la ley con su hijo. Al octavo día lo circuncidaron y le pusieron el nombre de Jesús. A los cuarenta días subieron al templo para la purificación de María y para presentar al primogénito al Señor (Lv 12:2-8; Éx 13:2). Ofrecieron «un par de tórtolas, o dos palominos» (Lc 2:24), la ofrenda que la ley permitía a los pobres.',
        { h: 'Simeón' },
        'En Jerusalén vivía Simeón, un hombre justo y piadoso que esperaba «la consolación de Israel». El Espíritu Santo estaba sobre él y le había revelado que no moriría sin ver al Ungido del Señor. Movido por el Espíritu, vino al templo, tomó al niño en brazos y bendijo a Dios: «Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación» (Lc 2:29-30).',
        'Luego dijo a María una palabra seria: el niño sería señal de contradicción, para caída y levantamiento de muchos en Israel, «y una espada traspasará tu misma alma» (Lc 2:35). La alegría del nacimiento ya anuncia la cruz.',
        { h: 'Ana' },
        'Llegó también Ana, una profetisa muy anciana, viuda, que «no se apartaba del templo, sirviendo de noche y de día con ayunos y oraciones» (Lc 2:37). Dio gracias a Dios y hablaba del niño a todos los que esperaban la redención en Jerusalén. Un hombre y una mujer, los dos movidos por Dios, dan testimonio de Jesús.',
        { h: 'Jesús a los doce años' },
        'Es el único relato de la niñez de Jesús en los evangelios. En una Pascua, Jesús se quedó en Jerusalén sin que sus padres lo supieran. Lo hallaron después de tres días en el templo, sentado entre los doctores, oyéndoles y preguntándoles. A su madre le respondió: «¿No sabíais que en los negocios de mi Padre me es necesario estar?» (Lc 2:49). Son sus primeras palabras en el evangelio, y en ellas llama a Dios «mi Padre».',
        'Después volvió a Nazaret y estaba sujeto a ellos. «Y Jesús crecía en sabiduría y en estatura, y en gracia para con Dios y los hombres» (Lc 2:52).',
        ir('Ver «Jesús a los doce años y los años en Nazaret» en Cronología', R.crono + '#nacimiento/6'),
        ir('Ver «Crecía en sabiduría» en La persona y obra de Cristo', R.cristo + '#textos/4')
      ],
      pensar: 'Simeón y Ana esperaron muchos años en oración hasta ver la promesa cumplida. ¿Qué promesa de Dios estás esperando, y cómo puedes seguir esperando con fe?'
    },
    {
      id: 'c3', n: 'Capítulo 3: Juan el Bautista, el bautismo y la genealogía', ref: 'Lucas 3:1-38; Isaías 40:3-5; Mateo 1:1-16', fecha: [28, 29],
      visual: [
        img('../dinastia-herodes/img/hd-juan-antipas.webp', 'Juan el Bautista, delgado y vestido con pelo de camello, señala con firmeza a Herodes Antipas, que lo escucha con gesto incómodo en un salón de su palacio', 'Juan reprende a Herodes (Lc 3:19).'),
        esq('lc-genealogias.svg', 'Dos columnas de nombres: la genealogía de Mateo desciende de Abraham por David y Salomón hasta José; la de Lucas sube desde Jesús por Natán, David y Abraham hasta Adán y Dios', 'Las genealogías de Mateo y Lucas: dos caminos desde David.'),
        cita('Lucas 3:21-23', '@@lc/3/21-23')
      ],
      texto: [
        'En el año quince de Tiberio, la palabra de Dios vino a Juan en el desierto. Juan predicaba «el bautismo del arrepentimiento para perdón de pecados» (Lc 3:3), y Lucas cita a Isaías hasta llegar a «verá toda carne la salvación de Dios» (Lc 3:6).',
        { h: 'Frutos de arrepentimiento' },
        'Juan no hablaba de un arrepentimiento solo de palabras. A la multitud le dijo que el que tenía dos túnicas diera al que no tenía; a los publicanos, que no cobraran más de lo ordenado; a los soldados, que no extorsionaran a nadie (Lc 3:11-14). Solo Lucas registra estos consejos concretos. Cuando pensaban que él era el Cristo, Juan anunció a uno más poderoso: «él os bautizará en Espíritu Santo y fuego» (Lc 3:16). Por reprender a Herodes Antipas, terminó en la cárcel (Lc 3:19-20).',
        { h: 'El bautismo de Jesús' },
        'Lucas cuenta el bautismo en pocas palabras y agrega un detalle: Jesús estaba orando cuando el cielo se abrió, el Espíritu Santo descendió sobre Él y vino una voz: «Tú eres mi Hijo amado; en ti tengo complacencia» (Lc 3:22). El Padre habla, el Hijo ora y el Espíritu desciende.',
        { h: 'La genealogía' },
        'Jesús tenía «como de treinta años» (Lc 3:23). Lucas da entonces su genealogía, en orden inverso a la de Mateo, subiendo hasta «Adán, hijo de Dios» (Lc 3:38). Desde David, las dos listas siguen caminos distintos: Mateo pasa por Salomón; Lucas, por Natán, otro hijo de David. ¿Cómo se entiende?',
        { posturas: {
          titulo: '¿Por qué son distintas las dos genealogías?',
          a: { n: 'Lucas da la línea de María', t: 'Mateo, que cuenta el nacimiento desde José, da la línea legal de José por Salomón. Lucas, que lo cuenta desde María, da la línea de ella: Elí sería el padre de María, y José es llamado «hijo de Elí» como yerno. Lucas lo indica al decir que Jesús era «hijo, según se creía, de José» (Lc 3:23). Así Jesús es hijo de David por la sangre, por María, y heredero legal del trono, por José, sin descender físicamente de Jeconías, cuya descendencia no se sentaría en el trono (Jer 22:30).' },
          b: { n: 'Las dos son de José', t: 'Según una explicación antigua (Julio Africano, citado por Eusebio), Jacob y Elí eran medio hermanos. Uno murió sin hijos y el otro tomó a su viuda según la ley del levirato (Dt 25:5-6); así José era hijo natural de uno e hijo legal del otro. Mateo daría la línea natural y Lucas la legal, o al revés.' },
          c: 'Las dos explicaciones afirman lo esencial: Jesús es descendiente de David y heredero legítimo de su trono. La primera es la más difundida en la enseñanza evangélica y pentecostal, y explica mejor por qué Lucas, que narra desde María, da otra lista.'
        } },
        ir('Ver el bautismo en la Armonía', R.armonia + '#bautismo'),
        ir('Ver el Árbol genealógico', R.genealogias)
      ],
      pensar: 'Juan pidió frutos concretos de arrepentimiento: compartir, no robar, no abusar. ¿Qué fruto concreto debería mostrar tu arrepentimiento en tu trabajo o en tu casa?'
    },
    {
      id: 'c4a', n: 'Capítulo 4: la tentación y el sermón de Nazaret', ref: 'Lucas 4:1-30; Isaías 61:1-2; Deuteronomio 8:3; 6:13, 16', fecha: 29,
      visual: [
        img('../palabra-de-dios/img/jesus-nazaret.webp', 'En una sinagoga de piedra de Nazaret, Jesús, visto de espaldas, de pie ante la congregación, sostiene un rollo abierto', 'Jesús lee el rollo de Isaías en Nazaret (Lc 4:17).'),
        cita('Lucas 4:16-21', '@@lc/4/16-21'),
        tabla({
          titulo: 'Las tres tentaciones en Lucas',
          cab: ['Tentación', 'Respuesta de Jesús'],
          filas: [
            ['Convertir la piedra en pan', '«No sólo de pan vivirá el hombre» (Lc 4:4; Dt 8:3)'],
            ['Los reinos del mundo a cambio de adoración', '«Al Señor tu Dios adorarás» (Lc 4:8; Dt 6:13)'],
            ['Lanzarse del pináculo del templo', '«No tentarás al Señor tu Dios» (Lc 4:12; Dt 6:16)']
          ],
          nota: 'Lucas pone la tentación del templo al final: el camino de Jesús termina en Jerusalén.'
        })
      ],
      texto: [
        'Jesús, «lleno del Espíritu Santo», fue llevado por el Espíritu al desierto, donde fue tentado por el diablo cuarenta días (Lc 4:1-2). Israel había sido probado cuarenta años en el desierto y había caído. Jesús, el verdadero Hijo, venció.',
        { h: 'Escrito está' },
        'Las tres tentaciones atacan su identidad: «Si eres Hijo de Dios…». El diablo le ofrece usar su poder para sí, obtener los reinos sin la cruz y forzar a Dios con una demostración espectacular. Jesús responde las tres veces con Deuteronomio. No discute ni usa su poder divino: vence como hombre lleno del Espíritu y de la Palabra. El diablo se apartó «por un tiempo» (Lc 4:13); volverá en la pasión (Lc 22:3, 53).',
        { h: 'El programa de Jesús' },
        'Jesús volvió a Galilea «en el poder del Espíritu» (Lc 4:14) y llegó a Nazaret. En la sinagoga le dieron el libro de Isaías y leyó: «El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres» (Lc 4:18). El pasaje anuncia sanidad, libertad y vista, y «el año agradable del Señor», que recuerda el año del jubileo. Jesús enrolló el libro, se sentó y dijo: «Hoy se ha cumplido esta Escritura delante de vosotros» (Lc 4:21).',
        'Jesús se detuvo antes de la frase siguiente de Isaías, «el día de venganza del Dios nuestro» (Is 61:2). Su primera venida trajo la gracia; el juicio queda para su segunda venida.',
        { h: 'Rechazado en su tierra' },
        'Al principio todos se admiraban, pero preguntaban: «¿No es éste el hijo de José?» (Lc 4:22). Jesús les recordó que Elías fue enviado a una viuda de Sidón y Eliseo limpió a Naamán el sirio. La idea de que Dios bendijera a gentiles los enfureció, y quisieron despeñarlo, pero «él pasó por en medio de ellos, y se fue» (Lc 4:30). El rechazo de Nazaret anuncia el rechazo final, y la gracia a los gentiles anuncia Hechos.',
        ir('Ver la tentación en la Armonía', R.armonia + '#tentacion'),
        ir('Ver «Tentado, pero sin pecado» en La persona y obra de Cristo', R.cristo + '#encarnacion/5')
      ],
      pensar: 'Jesús venció la tentación con la Palabra que conocía de memoria. ¿Qué pasajes de la Escritura tienes guardados en tu corazón para el día de la prueba?'
    },
    {
      id: 'c4b', n: 'Capítulos 4–5: Capernaúm, la pesca y el leproso', ref: 'Lucas 4:31–5:16', fecha: 30,
      visual: [
        img('lc-pesca-milagrosa.webp', 'En el mar de Galilea, al amanecer, un pescador fornido de barba canosa cae de rodillas en una barca repleta de peces, ante un hombre visto de espaldas', 'Pedro cae de rodillas: «Apártate de mí, Señor, porque soy hombre pecador» (Lc 5:8).'),
        foto('../mundo-judio/img/foto-barca-galilea.jpg', 'Restos de un casco de madera de una barca antigua, conservados en un museo', 'La barca de Galilea: una embarcación de pesca del siglo I hallada en 1986 junto al lago.', 'CC BY-SA 4.0, vía Wikimedia Commons'),
        mapa({ view: V.lago, capas: ['nt-galilea'], lugares: ['capernaum', 'magdala', 'betsaida', 'mar-galilea', 'corazin'] })
      ],
      texto: [
        'Rechazado en Nazaret, Jesús se estableció en Capernaúm, junto al mar de Galilea. Allí enseñaba en la sinagoga los sábados, «y se admiraban de su doctrina, porque su palabra era con autoridad» (Lc 4:32).',
        { h: 'Autoridad sobre demonios y enfermedades' },
        'En la sinagoga, un hombre con un espíritu inmundo gritó: «Yo te conozco quién eres, el Santo de Dios» (Lc 4:34). Jesús lo reprendió y el demonio salió. En casa de Simón sanó a su suegra de una gran fiebre, y al ponerse el sol le trajeron enfermos, y Él «poniendo las manos sobre cada uno de ellos, los sanaba» (Lc 4:40). Al día siguiente salió a un lugar desierto, y cuando la gente quiso retenerlo dijo: «Es necesario que también a otras ciudades anuncie el evangelio del reino de Dios» (Lc 4:43).',
        { h: 'La pesca milagrosa' },
        'Solo Lucas cuenta este llamado. Jesús enseñó desde la barca de Simón y luego le dijo que echara las redes. Simón había trabajado toda la noche sin pescar nada, pero respondió: «en tu palabra echaré la red» (Lc 5:5). Las redes se rompían y las barcas casi se hundían. Simón Pedro cayó de rodillas: «Apártate de mí, Señor, porque soy hombre pecador» (Lc 5:8). Ante la santidad de Jesús, el primer efecto es ver el propio pecado. Jesús le contestó: «No temas; desde ahora serás pescador de hombres» (Lc 5:10). Ellos «dejándolo todo, le siguieron» (Lc 5:11).',
        { h: 'El leproso' },
        'Un hombre «lleno de lepra» se postró ante Jesús: «Señor, si quieres, puedes limpiarme» (Lc 5:12). Nadie tocaba a un leproso, pero Jesús extendió la mano, lo tocó y dijo: «Quiero; sé limpio». Lo envió al sacerdote, como mandaba la ley, para que tuviera testimonio de su sanidad y volviera a la comunidad.',
        'La fama crecía y las multitudes venían a oírle y a ser sanadas, «mas él se apartaba a lugares desiertos, y oraba» (Lc 5:16).',
        ir('Ver la pesca en la Armonía', R.armonia + '#pescadores'),
        ir('Ver «Un judío de Galilea: Nazaret y Capernaúm» en El mundo judío', R.mundo + '#jesus/1')
      ],
      pensar: 'Pedro obedeció «en tu palabra» aunque su experiencia le decía que no valía la pena. ¿En qué área de tu vida Jesús te está pidiendo volver a echar la red?'
    },
    {
      id: 'c5', n: 'Capítulo 5: el paralítico, Leví y el vino nuevo', ref: 'Lucas 5:17-39', fecha: 30,
      visual: [
        img('../mundo-judio/img/mj-banquete-levi.webp', 'En el patio de una casa de Capernaúm, publicanos y gente sencilla comen recostados en una gran mesa, mientras unos fariseos miran desde la entrada', 'El banquete en casa de Leví (Lc 5:29-30).'),
        cita('Lucas 5:20-26', '@@lc/5/20-26')
      ],
      texto: [
        'Esta sección reúne cinco controversias en las que Jesús choca con los fariseos y los escribas. Comienzan aquí y siguen en el capítulo 6.',
        { h: '¿Quién puede perdonar pecados?' },
        'Jesús enseñaba en una casa llena, con fariseos y doctores de la ley venidos de todas partes, «y el poder del Señor estaba con él para sanar» (Lc 5:17). Unos hombres trajeron a un paralítico en una camilla y, como no podían entrar, subieron al techo, quitaron las tejas y lo bajaron delante de Jesús. «Al ver él la fe de ellos», le dijo: «Hombre, tus pecados te son perdonados» (Lc 5:20).',
        'Los escribas pensaron: «¿Quién puede perdonar pecados sino sólo Dios?» (Lc 5:21). Tenían razón en la premisa. Jesús respondió con una prueba visible: para que supieran que el Hijo del Hombre tiene potestad en la tierra para perdonar pecados, mandó al paralítico levantarse. El hombre se levantó, tomó su lecho y se fue glorificando a Dios. Jesús reclamó para sí lo que solo Dios puede hacer.',
        { h: 'Leví, el publicano' },
        'Jesús vio a Leví, un publicano, sentado al banco de los tributos, y le dijo: «Sígueme». Lucas agrega: «Y dejándolo todo, se levantó y le siguió» (Lc 5:28). Leví, también llamado Mateo, hizo un gran banquete con muchos publicanos. Los fariseos murmuraban: «¿Por qué coméis y bebéis con publicanos y pecadores?». Jesús respondió: «Los que están sanos no tienen necesidad de médico, sino los enfermos. No he venido a llamar a justos, sino a pecadores al arrepentimiento» (Lc 5:31-32).',
        { h: 'Vino nuevo en odres nuevos' },
        'Luego le preguntaron por qué sus discípulos no ayunaban. Jesús dijo que los invitados no ayunan mientras el esposo está con ellos; ayunarían cuando les fuera quitado. Y con dos imágenes, el remiendo y el vino, mostró que lo que Él traía no cabía en los moldes viejos. Solo Lucas agrega una frase que retrata a los que se aferran a lo conocido: «ninguno que beba del añejo, quiere luego el nuevo» (Lc 5:39).',
        ir('Ver el paralítico en la Armonía', R.armonia + '#paralitico'),
        ir('Ver «Impuestos, publicanos y el tributo al César» en El mundo judío', R.mundo + '#poder/5')
      ],
      pensar: 'Los amigos del paralítico no se detuvieron ante una casa llena: abrieron el techo. ¿A quién podrías llevar tú hasta Jesús, aunque cueste?'
    },
    {
      id: 'c6a', n: 'Capítulo 6 (I): el Señor del sábado y los doce', ref: 'Lucas 6:1-19; 1 Samuel 21:1-6', fecha: 31,
      visual: [
        img('../mundo-judio/img/mj-espigas-sabado.webp', 'Unos discípulos arrancan espigas maduras al pasar por un sembrado de trigo, mientras unos fariseos los observan con desaprobación', 'Las espigas en el día de reposo (Lc 6:1-2).'),
        tabla({
          titulo: 'Los doce apóstoles en Lucas 6:14-16',
          cab: ['Nombre', 'Nota'],
          filas: [
            ['Simón, a quien llamó Pedro', 'Pescador de Capernaúm'],
            ['Andrés, su hermano', 'Discípulo de Juan antes (Jn 1:40)'],
            ['Jacobo y Juan', 'Hijos de Zebedeo, pescadores'],
            ['Felipe y Bartolomé', 'De Betsaida (Jn 1:44)'],
            ['Mateo', 'El publicano Leví'],
            ['Tomás', 'Llamado Dídimo (Jn 11:16)'],
            ['Jacobo hijo de Alfeo', ''],
            ['Simón llamado Zelote', 'Antes, de los nacionalistas'],
            ['Judas hermano de Jacobo', 'Llamado también Tadeo (Mr 3:18)'],
            ['Judas Iscariote', '«que llegó a ser el traidor»']
          ]
        })
      ],
      texto: [
        'Las controversias siguen con dos episodios sobre el día de reposo, el tema que más enfrentó a Jesús con los fariseos.',
        { h: 'Las espigas' },
        'Un sábado, los discípulos arrancaban espigas al pasar por un sembrado, las restregaban con las manos y comían. La ley permitía comer del campo ajeno con la mano (Dt 23:25), pero los fariseos consideraban que restregar espigas era trabajar. Jesús les recordó que David comió los panes de la proposición cuando tuvo hambre (1 S 21:1-6), y declaró: «El Hijo del Hombre es Señor aun del día de reposo» (Lc 6:5). El día que Dios dio al hombre no puede ponerse contra el hombre, y Jesús tiene autoridad sobre él.',
        { h: 'La mano seca' },
        'Otro sábado, en la sinagoga, había un hombre con la mano derecha seca. Los escribas y fariseos lo acechaban para acusarlo. Jesús, que conocía sus pensamientos, preguntó: «¿Es lícito en día de reposo hacer bien, o hacer mal? ¿salvar la vida, o quitarla?» (Lc 6:9). Mandó al hombre extender la mano, y quedó sana. Ellos se llenaron de furor y comenzaron a hablar de qué podrían hacerle a Jesús.',
        { h: 'Una noche de oración' },
        'Antes de elegir a los apóstoles, Jesús «fue al monte a orar, y pasó la noche orando a Dios» (Lc 6:12). Solo Lucas registra esta noche. De madrugada llamó a sus discípulos y escogió a doce, «a los cuales también llamó apóstoles», es decir, enviados. El número doce recuerda a las doce tribus: Jesús está formando el núcleo del pueblo renovado de Dios.',
        'La lista incluye a un publicano, que había servido a Roma, y a un zelote, que había querido expulsarla. Solo Jesús podía unirlos. También incluye al que lo traicionaría.',
        'Al bajar, se detuvo en un lugar llano con una gran multitud de toda Judea y de la costa de Tiro y Sidón, y «poder salía de él y sanaba a todos» (Lc 6:19).',
        ir('Ver «El día de reposo y sus disputas» en El mundo judío', R.mundo + '#fe/4'),
        ir('Ver los doce en la Armonía', R.armonia + '#los-doce')
      ],
      pensar: 'Jesús oró toda una noche antes de elegir a los doce. ¿Oras así antes de las decisiones que afectan a otros?'
    },
    {
      id: 'c6b', n: 'Capítulo 6 (II): el sermón del llano', ref: 'Lucas 6:20-49; Mateo 5–7', fecha: 31,
      visual: [
        img('../mundo-judio/img/mj-sermon-ladera.webp', 'Una gran multitud de campesinos y pescadores escucha sentada en una ladera verde junto al mar de Galilea', 'La multitud escucha a Jesús.'),
        cita('Lucas 6:27-36', '@@lc/6/27-36'),
        tabla({
          titulo: 'Bienaventuranzas y ayes (6:20-26)',
          cab: ['Bienaventurados', '¡Ay de vosotros!'],
          filas: [
            ['Los pobres: vuestro es el reino', 'Los ricos: ya tenéis vuestro consuelo'],
            ['Los que ahora tenéis hambre: seréis saciados', 'Los que ahora estáis saciados: tendréis hambre'],
            ['Los que ahora lloráis: reiréis', 'Los que ahora reís: lamentaréis y lloraréis'],
            ['Cuando os aborrezcan por causa del Hijo del Hombre', 'Cuando todos los hombres hablen bien de vosotros']
          ]
        })
      ],
      texto: [
        'Lucas resume en este sermón la enseñanza de Jesús a sus discípulos. Tiene mucho en común con el sermón del monte de Mateo 5–7, aunque es más breve y Lucas lo sitúa en «un lugar llano» (Lc 6:17). Jesús enseñó estas verdades muchas veces y en muchos lugares; cada evangelista recogió lo que convenía a su libro.',
        { h: 'Bienaventuranzas y ayes' },
        'Lucas registra cuatro bienaventuranzas y cuatro ayes que se corresponden. Jesús habla directamente: «Bienaventurados vosotros los pobres, porque vuestro es el reino de Dios» (Lc 6:20). Los pobres, hambrientos y afligidos que siguen a Jesús son dichosos, porque Dios va a invertir su situación. Los ricos y satisfechos que no necesitan a Dios ya recibieron todo su consuelo.',
        { h: 'Amar a los enemigos' },
        'El centro del sermón es el amor: «Amad a vuestros enemigos, haced bien a los que os aborrecen; bendecid a los que os maldicen, y orad por los que os calumnian» (Lc 6:27-28). Jesús resume la vida del discípulo en la regla de oro: «como queréis que hagan los hombres con vosotros, así también haced vosotros con ellos» (Lc 6:31). Y la funda en el carácter de Dios: «Sed, pues, misericordiosos, como también vuestro Padre es misericordioso» (Lc 6:36). Amar solo a quien nos ama no tiene mérito; el amor del discípulo imita al del Padre, que es benigno «para con los ingratos y malos» (Lc 6:35).',
        { h: 'No juzgar, dar frutos' },
        'Jesús advierte contra el juicio duro que ve la paja en el ojo ajeno y no la viga en el propio (Lc 6:41-42). Y enseña que el árbol se conoce por su fruto: «de la abundancia del corazón habla la boca» (Lc 6:45).',
        { h: 'Sobre la roca' },
        'El sermón termina con una pregunta: «¿Por qué me llamáis, Señor, Señor, y no hacéis lo que yo digo?» (Lc 6:46). El que oye y obedece es como quien cavó hondo y edificó sobre la roca; el que oye y no obedece, como quien edificó sin fundamento.',
        ir('Ver las bienaventuranzas en la Armonía', R.armonia + '#bienaventuranzas')
      ],
      pensar: '«Sed misericordiosos, como también vuestro Padre es misericordioso.» ¿Quién es el «enemigo» al que Jesús te está pidiendo amar y bendecir esta semana?'
    },
    {
      id: 'c7a', n: 'Capítulo 7: el centurión, Naín y Juan', ref: 'Lucas 7:1-35; 1 Reyes 17:17-24; Isaías 35:5-6; 61:1', fecha: 31,
      visual: [
        img('../mundo-judio/img/mj-nain-cortejo.webp', 'Un cortejo fúnebre sale por la puerta de una aldea de Galilea: cuatro hombres llevan un féretro abierto y una viuda llora detrás', 'El cortejo de Naín (Lc 7:12).'),
        mapa({ view: V.galilea, capas: ['nt-galilea'], lugares: ['capernaum', 'nain', 'nazaret', 'tabor', 'mar-galilea', 'maqueronte'] }, 'Mapa'),
        cita('Lucas 7:11-17', '@@lc/7/11-17')
      ],
      texto: [
        'El capítulo 7 responde a una pregunta: ¿quién es Jesús? Lo muestra con poder sobre la enfermedad a distancia y sobre la muerte, y con la pregunta de Juan el Bautista.',
        { h: 'La fe de un gentil' },
        'Un centurión romano de Capernaúm tenía un siervo muy enfermo. Los ancianos de los judíos intercedieron por él: «ama a nuestra nación, y nos edificó una sinagoga» (Lc 7:5). Pero el centurión mandó decir a Jesús que no era digno de que entrara en su casa: «di la palabra, y mi siervo será sano» (Lc 7:7). Como hombre bajo autoridad, entendía que una orden de Jesús bastaba. Jesús se maravilló: «ni aun en Israel he hallado tanta fe» (Lc 7:9). Un gentil es modelo de fe.',
        { h: 'El hijo de la viuda' },
        'Solo Lucas cuenta este milagro. Cerca de la puerta de Naín, Jesús se encontró con un cortejo fúnebre: llevaban al «hijo único de su madre, la cual era viuda» (Lc 7:12). Sin esposo ni hijo, esa mujer quedaba sin sustento ni protección. Lucas dice: «Y cuando el Señor la vio, se compadeció de ella, y le dijo: No llores» (Lc 7:13). Tocó el féretro y dijo: «Joven, a ti te digo, levántate». El muerto se incorporó, y Jesús «lo dio a su madre». La escena recuerda a Elías con el hijo de la viuda de Sarepta (1 R 17:23), y la gente exclamó: «Un gran profeta se ha levantado entre nosotros; y: Dios ha visitado a su pueblo» (Lc 7:16).',
        { h: '¿Eres tú el que había de venir?' },
        'Juan, preso en la fortaleza de Maqueronte, envió a dos discípulos a preguntar si Jesús era el Mesías o si debían esperar a otro. Jesús sanó a muchos delante de ellos y respondió con las palabras de Isaías: los ciegos ven, los cojos andan, los muertos resucitan y «a los pobres es anunciado el evangelio» (Lc 7:22). Luego alabó a Juan: entre los nacidos de mujer no había mayor profeta, pero el más pequeño en el reino de Dios es mayor que él (Lc 7:28). Y lamentó a una generación que no aceptaba ni a Juan ni a Él: «la sabiduría es justificada por todos sus hijos» (Lc 7:35).',
        ir('Ver Naín en la Armonía', R.armonia + '#nain')
      ],
      pensar: 'Jesús «se compadeció» de la viuda antes de que ella le pidiera nada. ¿Qué te dice eso del corazón de Jesús frente a tu propio dolor?'
    },
    {
      id: 'c7b', n: 'Capítulos 7–8: la mujer pecadora y las mujeres que servían', ref: 'Lucas 7:36–8:3', fecha: 31,
      visual: [
        img('lc-pecadora-simon.webp', 'En el patio de la casa de un fariseo, una mujer de velo oscuro llora arrodillada junto a los pies de un invitado reclinado a la mesa, visto de espaldas, mientras el anfitrión la mira con desprecio', 'La mujer pecadora en casa de Simón (Lc 7:37-38).'),
        cita('Lucas 7:44-50', '@@lc/7/44-50'),
        tabla({
          titulo: 'Dos maneras de recibir a Jesús',
          cab: ['Simón el fariseo', 'La mujer pecadora'],
          filas: [
            ['No le dio agua para los pies', 'Regó sus pies con lágrimas y los secó con sus cabellos'],
            ['No le dio beso', 'No cesó de besar sus pies'],
            ['No ungió su cabeza con aceite', 'Ungió sus pies con perfume'],
            ['Se creía con poca deuda', 'Sabía que debía mucho'],
            ['Amó poco', 'Amó mucho']
          ]
        })
      ],
      texto: [
        'Un fariseo llamado Simón invitó a Jesús a comer. Mientras estaban reclinados a la mesa, entró una mujer «que era pecadora» en la ciudad, con un frasco de perfume. Llorando, comenzó a regar los pies de Jesús con sus lágrimas, los secó con sus cabellos, los besaba y los ungía (Lc 7:37-38).',
        { h: 'El juicio de Simón' },
        'Simón pensó: si este fuera profeta, sabría qué clase de mujer lo está tocando. Jesús, que sí sabía, le contó una parábola. Un acreedor tenía dos deudores: uno le debía quinientos denarios y otro cincuenta. Como ninguno podía pagar, perdonó a ambos. «¿Cuál de ellos le amará más?» Simón respondió bien: «Pienso que aquel a quien perdonó más» (Lc 7:43).',
        'Entonces Jesús se volvió a la mujer y comparó la recepción de Simón con la de ella. Simón no le había dado ni el agua, ni el beso, ni el aceite que se ofrecían a un invitado de honor. Ella lo había dado todo. «Sus muchos pecados le son perdonados, porque amó mucho; mas aquel a quien se le perdona poco, poco ama» (Lc 7:47).',
        { h: 'El amor nace del perdón' },
        'Jesús no dice que ella ganó el perdón con su amor; la parábola enseña lo contrario: el amor es la respuesta al perdón recibido. Por eso termina diciéndole: «Tu fe te ha salvado, vé en paz» (Lc 7:50). Fue salva por la fe, y su amor lo demostró. El verdadero problema de Simón no era tener pocos pecados, sino no ver los suyos.',
        { h: 'Mujeres que seguían a Jesús' },
        'Lucas continúa con una nota única: Jesús recorría ciudades y aldeas con los doce y con algunas mujeres que había sanado: María Magdalena, de la que habían salido siete demonios; Juana, mujer de Chuza, intendente de Herodes; Susana «y otras muchas que le servían de sus bienes» (Lc 8:2-3). Mujeres de distinta condición, desde una liberada de demonios hasta la esposa de un funcionario de la corte, sostenían el ministerio de Jesús.',
        ir('Ver el pasaje en la Armonía', R.armonia + '#pecadora'),
        ir('Ir a la ruta Las mujeres en Lucas', '#mujeres/3')
      ],
      pensar: 'Simón no amó mucho porque no se sentía muy perdonado. ¿Cuánto te ha sido perdonado a ti? ¿Cómo se nota eso en tu amor por Jesús?'
    },
    {
      id: 'c8', n: 'Capítulo 8: la palabra que da fruto y el poder de Jesús', ref: 'Lucas 8:4-56', fecha: 31,
      visual: [
        pasos([
          { t: 'Jesús calma la tempestad en el lago (8:22-25)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis'], lugares: ['capernaum', 'mar-galilea', 'gadara', 'magdala'] } },
          { t: 'En la tierra de los gadarenos, frente a Galilea (8:26-39)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea', 'nt-decapolis'], lugares: ['gadara', 'decapolis', 'mar-galilea'] } },
          { t: 'De vuelta: Jairo y la mujer enferma (8:40-56)', fecha: 31, estado: { view: V.lago, capas: ['nt-galilea'], lugares: ['capernaum', 'mar-galilea'] } }
        ]),
        cita('Lucas 8:11-15', '@@lc/8/11-15'),
        tabla({
          titulo: 'Cuatro clases de tierra (8:11-15)',
          cab: ['Tierra', 'Quiénes son'],
          filas: [
            ['Junto al camino', 'Oyen, pero viene el diablo y quita la palabra'],
            ['Sobre la piedra', 'Reciben con gozo, pero en la prueba se apartan'],
            ['Entre espinos', 'Los ahogan los afanes, las riquezas y los placeres'],
            ['Buena tierra', 'Con corazón bueno y recto retienen la palabra y dan fruto con perseverancia']
          ]
        })
      ],
      texto: [
        'Este capítulo une la enseñanza sobre cómo oír la palabra con cuatro milagros que muestran el poder de Jesús sobre la naturaleza, los demonios, la enfermedad y la muerte.',
        { h: 'Cómo oír' },
        'En la parábola del sembrador, la semilla es la palabra de Dios, y el resultado depende de la tierra que la recibe. La buena tierra son los que «con corazón bueno y recto retienen la palabra oída, y dan fruto con perseverancia» (Lc 8:15). Jesús agrega: «Mirad, pues, cómo oís» (Lc 8:18). Y cuando le dicen que su madre y sus hermanos lo buscan, responde: «Mi madre y mis hermanos son los que oyen la palabra de Dios, y la hacen» (Lc 8:21).',
        { h: 'Señor del viento y del mar' },
        'Cruzando el lago, se levantó una tempestad y Jesús dormía. Los discípulos lo despertaron: «¡Maestro, Maestro, que perecemos!» (Lc 8:24). Jesús reprendió al viento y a las olas, y les preguntó: «¿Dónde está vuestra fe?». Ellos se preguntaban: «¿Quién es éste, que aun a los vientos y a las aguas manda, y le obedecen?» (Lc 8:25).',
        { h: 'Señor sobre los demonios' },
        'Al otro lado, en tierra de gentiles, salió a su encuentro un hombre poseído por muchos demonios, que vivía en los sepulcros. Su nombre era Legión. Jesús los expulsó, y los demonios entraron en un hato de cerdos que se precipitó al lago. Luego encontraron al hombre «sentado a los pies de Jesús, vestido, y en su cabal juicio» (Lc 8:35). Jesús lo envió a contar en su casa cuán grandes cosas había hecho Dios con él: el primer misionero a la Decápolis.',
        { h: 'Señor sobre la enfermedad y la muerte' },
        'Jairo, principal de la sinagoga, rogó por su única hija, de doce años, que se moría. En el camino, una mujer enferma de flujo de sangre desde hacía doce años tocó el borde del manto de Jesús y fue sanada. Jesús no la dejó irse escondida: la llamó «Hija» y le dijo que su fe la había salvado (Lc 8:48). Entonces llegó la noticia de que la niña había muerto. Jesús dijo a Jairo: «No temas; cree solamente, y será salva» (Lc 8:50). Tomó la mano de la niña y le dijo: «Muchacha, levántate». Y su espíritu volvió.',
        ir('Ver Jairo en la Armonía', R.armonia + '#jairo')
      ],
      pensar: '«Mirad, pues, cómo oís.» ¿Qué clase de tierra ha sido tu corazón para la palabra de Dios en este último tiempo?'
    },
    {
      id: 'c9a', n: 'Capítulo 9: ¿quién es Jesús?', ref: 'Lucas 9:1-50', fecha: 32,
      visual: [
        img('../persona-y-obra-de-cristo/img/transfiguracion.webp', 'En la cima de un monte, una figura luminosa vestida de blanco resplandeciente, vista de espaldas, se encuentra con dos hombres, mientras tres discípulos se cubren los ojos', 'La transfiguración (Lc 9:28-36).'),
        cita('Lucas 9:18-24', '@@lc/9/18-24'),
        tabla({
          titulo: 'Una pregunta que recorre el capítulo',
          cab: ['Quién pregunta', 'Respuesta'],
          filas: [
            ['Herodes: «¿Quién, pues, es éste?» (9:9)', 'Lo oye, pero no lo conoce'],
            ['Jesús: «¿Quién dice la gente que soy yo?» (9:18)', 'Juan el Bautista, Elías, un profeta'],
            ['Jesús: «¿Y vosotros, quién decís que soy?» (9:20)', 'Pedro: «El Cristo de Dios»'],
            ['La voz del cielo (9:35)', '«Este es mi Hijo amado; a él oíd»']
          ]
        })
      ],
      texto: [
        'El capítulo 9 cierra el ministerio en Galilea con una sola pregunta: ¿quién es Jesús? Herodes, la gente, los discípulos y el Padre dan sus respuestas.',
        { h: 'Los doce enviados y los cinco mil' },
        'Jesús dio a los doce «poder y autoridad sobre todos los demonios, y para sanar enfermedades», y los envió a predicar el reino (Lc 9:1-2). Herodes Antipas oyó hablar de Jesús y se preguntaba quién era, porque él había decapitado a Juan. Al volver los apóstoles, Jesús alimentó a cinco mil hombres con cinco panes y dos pescados, y sobraron doce cestas. El que da pan en el desierto es más que un profeta.',
        { h: 'La confesión de Pedro' },
        'Después de orar a solas, Jesús preguntó a sus discípulos quién decían que era. Pedro respondió: «El Cristo de Dios» (Lc 9:20). Jesús anunció entonces por primera vez que era necesario que el Hijo del Hombre padeciera, fuera desechado, muerto y resucitara al tercer día. Y llamó a seguirlo: «Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame» (Lc 9:23). Solo Lucas dice «cada día»: seguir a Jesús es una entrega diaria.',
        { h: 'La transfiguración' },
        'Unos ocho días después, Jesús subió a orar con Pedro, Juan y Jacobo, y mientras oraba su rostro cambió y su vestido se volvió blanco y resplandeciente. Moisés y Elías aparecieron en gloria y hablaban «de su partida, que iba Jesús a cumplir en Jerusalén» (Lc 9:31). La palabra griega para «partida» es éxodo: la muerte y resurrección de Jesús serían el gran éxodo de su pueblo. La voz del Padre dijo: «Este es mi Hijo amado; a él oíd» (Lc 9:35).',
        { h: 'Discípulos que aún no entendían' },
        'Al bajar, Jesús liberó a un muchacho endemoniado que los discípulos no pudieron sanar. Anunció de nuevo su entrega, pero ellos no lo entendieron, y discutían quién sería el mayor. Jesús puso a un niño junto a sí: «el que es más pequeño entre todos vosotros, ése es el más grande» (Lc 9:48).',
        ir('Ver la confesión de Pedro en la Armonía', R.armonia + '#confesion-pedro'),
        ir('Ver «La transfiguración» en La persona y obra de Cristo', R.cristo + '#oficios/6')
      ],
      pensar: 'Jesús pide tomar la cruz «cada día». ¿Qué significa para ti hoy, concretamente, negarte a ti mismo para seguirle?'
    },
    {
      id: 'c9b', n: 'Capítulos 9–10: rumbo a Jerusalén y los setenta', ref: 'Lucas 9:51–10:24; 2 Reyes 1:10-12', fecha: 32,
      visual: [
        pasos([
          { t: '«Afirmó su rostro para ir a Jerusalén» (9:51)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['nazaret', 'capernaum', 'samaria', 'jerusalen'] } },
          { t: 'Una aldea de samaritanos no lo recibe (9:52-56)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea'], lugares: ['samaria', 'sicar', 'jerusalen'], trazos: ['jesus-samaria'] } },
          { t: 'Los setenta, enviados de dos en dos delante de Él (10:1)', fecha: 32, estado: { view: V.palestina, capas: ['nt-galilea', 'nt-samaria', 'nt-judea', 'nt-perea'], lugares: ['corazin', 'betsaida', 'capernaum', 'tiro', 'sidon', 'jerusalen'] } }
        ]),
        cita('Lucas 10:17-20', '@@lc/10/17-20'),
        esq('lc-viaje.svg', 'Una línea que va de Galilea a Jerusalén con seis marcas: Lucas 9:51, 13:22, 17:11, 18:31, 19:11 y 19:28, cada una con la frase en que Lucas recuerda que Jesús va a Jerusalén', 'El viaje a Jerusalén: Lucas lo recuerda seis veces.')
      ],
      texto: [
        'Aquí comienza la parte central de Lucas. «Cuando se cumplió el tiempo en que él había de ser recibido arriba, afirmó su rostro para ir a Jerusalén» (Lc 9:51). «Ser recibido arriba» incluye la cruz, la resurrección y la ascensión. Jesús va decidido.',
        { h: 'Samaritanos y fuego del cielo' },
        'Una aldea de samaritanos no quiso recibirlo porque iba a Jerusalén. Jacobo y Juan preguntaron: «Señor, ¿quieres que mandemos que descienda fuego del cielo, como hizo Elías, y los consuma?» (Lc 9:54). Jesús los reprendió. Su misión no era destruir, sino salvar.',
        { h: 'El precio de seguirle' },
        'En el camino, tres hombres hablaron de seguir a Jesús. Al primero le advirtió que el Hijo del Hombre no tenía dónde recostar la cabeza. Al segundo, que quería enterrar primero a su padre, le dijo: «Deja que los muertos entierren a sus muertos; y tú ve, y anuncia el reino de Dios» (Lc 9:60). Al tercero, que quería despedirse de los suyos: «Ninguno que poniendo su mano en el arado mira hacia atrás, es apto para el reino de Dios» (Lc 9:62). Seguir a Jesús es la prioridad.',
        { h: 'Los setenta' },
        'Solo Lucas cuenta que Jesús envió a otros setenta discípulos (algunos manuscritos dicen setenta y dos), de dos en dos, a las ciudades adonde Él había de ir. «La mies a la verdad es mucha, mas los obreros pocos; por tanto, rogad al Señor de la mies que envíe obreros a su mies» (Lc 10:2). Los doce recuerdan a las tribus de Israel; los setenta, a las naciones de Génesis 10. La misión ya no es solo de los apóstoles.',
        'Volvieron con gozo: «Señor, aun los demonios se nos sujetan en tu nombre». Jesús vio a Satanás caer del cielo como un rayo y les dio autoridad, pero les dijo que su mayor gozo debía ser otro: «regocijaos de que vuestros nombres están escritos en los cielos» (Lc 10:20). Y Jesús mismo «se regocijó en el Espíritu» (Lc 10:21), porque el Padre revelaba estas cosas a los niños.',
        ir('Ver el viaje en la ruta de mapas', '#mapas/4'),
        ir('Ver «Los samaritanos en tiempos de Jesús» en El mundo judío', R.mundo + '#grupos/7')
      ],
      pensar: 'Los setenta se alegraron del poder; Jesús les recordó que el mayor gozo es tener el nombre escrito en el cielo. ¿Dónde pones tú tu alegría en el servicio a Dios?'
    }
  ];
})();
