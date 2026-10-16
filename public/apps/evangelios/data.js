/* ==========================================================
   Armonía de los evangelios · datos (demo: sección 1)
   Basado en el libro «Evangelios sinópticos. Armonía de los evangelios» de Cristóbal Alarcón.
   El texto bíblico NO está aquí: se lee de public/biblia/ en la versión elegida (Citas.capitulo).
   Cada pasaje:
     id, sec (sección), t (título), sim (símbolos), refs { mt, mr, lc, jn: 'cap:v-v' | 'cap:v-cap:v' },
     rojo:  palabras de Jesús  [libro, 'cap:v', desde, hasta]  (desde/hasta: frases del texto RV 1960;
            sin desde = todo el versículo; sin hasta = hasta el final del versículo)
     excl:  versos o frases exclusivos de un evangelio en un pasaje paralelo (mismo formato)
     marcas: [libro, 'cap:v', frase, letra] → la letra se inserta después de la frase y remite al comentario
     com:   [[letra, texto], ...]   conc: concordancias
   ========================================================== */
window.ARMONIA = {
  titulo: 'Armonía de los evangelios',
  secciones: [
    { id: 's1', n: 'Nacimiento y preparación de Jesucristo' },
    { id: 's2', n: 'Mensaje y ministerio de Jesucristo', pendiente: true }
  ],
  simbolos: {
    '👑': 'Mesianismo o cumplimiento profético',
    '🕊️': 'Espíritu Santo',
    '✝️': 'Plan de salvación',
    '🙌': 'Milagros y sanidades',
    '😈': 'Liberación o confrontación con el mal',
    '📖': 'Enseñanza, doctrina, sermones',
    '🌾': 'Parábolas',
    '⚔️': 'Conflictos con líderes religiosos',
    '🙏': 'Oración',
    '👨‍👩‍👧': 'Familia, nacimiento, infancia'
  },
  pasajes: [
    { id: 'proposito-lucas', sec: 's1', t: 'Propósito del evangelio de Lucas', sim: ['📖'], refs: { lc: '1:1-4' },
      marcas: [['lc', '1:1', 'ciertísimas', 'A'], ['lc', '1:2', 'ministros de la palabra', 'B'], ['lc', '1:3', 'oh excelentísimo Teófilo', 'C']],
      com: [
        ['A', 'Lucas explica que ya era necesario tener un registro ordenado de los hechos de Jesús. Al decir «cosas que entre nosotros han sido ciertísimas» se refiere a que las profecías del Antiguo Testamento se habían cumplido en la persona de Jesús, a que las narraciones sobre Cristo son verídicas y a que el plan redentor de Dios ya se cumplió en la vida, muerte y resurrección de Jesús.'],
        ['B', 'Lucas no fue testigo de los hechos de Jesús, pero como buen historiador se entrevistó con muchos testigos oculares: los apóstoles, personas que fueron sanadas en sus milagros y oyentes de sus sermones.'],
        ['C', 'Lucas es el único escritor de la Biblia que no es judío (Col 4:14). Por su vocabulario y su forma narrativa, este evangelio está escrito para quienes no son israelitas y quieren conocer a Cristo. Está dedicado a Teófilo, quien probablemente lo difundió en el mundo no judío. Bueno es que, como Lucas, escudriñemos con diligencia las Escrituras, para que el enemigo no siembre duda en nuestros corazones y podamos ser victoriosos en Cristo.']
      ],
      conc: ['Dt 19:15', 'Col 4:14', 'Hch 1:1-3'] },

    { id: 'verbo', sec: 's1', t: 'Dios hecho hombre', sim: ['👑', '📖'], refs: { jn: '1:1-18' },
      marcas: [['jn', '1:1', 'el Verbo era Dios', 'A'], ['jn', '1:12', 'hijos de Dios', 'B'], ['jn', '1:14', 'habitó entre nosotros', 'C']],
      com: [
        ['A', 'Juan comienza antes de Belén: «En el principio» repite las primeras palabras de Génesis. El Verbo, la Palabra, existía antes de la creación, estaba con Dios y era Dios. Es la declaración más clara de la divinidad de Cristo en el Nuevo Testamento.'],
        ['B', 'Ser hijo de Dios no viene por linaje («no… de sangre»), ni por esfuerzo humano («ni de voluntad de carne»), sino por recibir a Cristo y creer en su nombre. Es el nuevo nacimiento que Jesús explicará a Nicodemo (Jn 3:3-6).'],
        ['C', 'La palabra «habitó» significa literalmente «puso su tienda»: recuerda al tabernáculo, donde la gloria de Dios moraba en medio de Israel. En Jesús, la gloria de Dios vino a habitar en carne humana, «lleno de gracia y de verdad».']
      ],
      conc: ['Gn 1:1', 'Éx 40:34', '1 Jn 1:1-3', 'Col 1:15-17', 'Fil 2:6-8'] },

    { id: 'genealogia', sec: 's1', t: 'Los antepasados de Jesús', sim: ['👑', '👨‍👩‍👧'], refs: { mt: '1:1-17', lc: '3:23-38' },
      marcas: [['mt', '1:1', 'hijo de Abraham', 'A'], ['mt', '1:5', 'de Rut a Obed', 'B'], ['lc', '3:38', 'hijo de Dios', 'C']],
      com: [
        ['A', 'Mateo, que escribe para judíos, abre su evangelio presentando a Jesús como heredero de las dos grandes promesas: hijo de David, el rey (2 S 7:12-16), e hijo de Abraham, en quien serían benditas todas las familias de la tierra (Gn 12:3). Su genealogía baja de Abraham a Jesús.'],
        ['B', 'Mateo incluye a cuatro mujeres además de María: Tamar, Rahab, Rut y la mujer de Urías. Varias eran extranjeras y algunas tenían historias de pecado. La genealogía del Mesías ya anuncia la gracia: Dios incluye a los que el mundo excluye.'],
        ['C', 'Lucas, que escribe para gentiles, sube desde Jesús hasta Adán, «hijo de Dios»: Jesús es el Salvador de toda la humanidad, no solo de Israel. Las diferencias entre ambas listas se explican, según muchos, porque Mateo sigue la línea legal de José y Lucas probablemente la de María.']
      ],
      conc: ['Gn 12:3', '2 S 7:12-16', 'Is 11:1', 'Rt 4:18-22'] },

    { id: 'anuncio-zacarias', sec: 's1', t: 'Un ángel anuncia el nacimiento de Juan a Zacarías', sim: ['👨‍👩‍👧', '👑', '🕊️'], refs: { lc: '1:5-25' },
      marcas: [['lc', '1:6', 'irreprensibles', 'A'], ['lc', '1:15', 'será lleno del Espíritu Santo, aun desde el vientre de su madre', 'B'], ['lc', '1:20', 'quedarás mudo', 'C']],
      com: [
        ['A', 'Zacarías y Elisabet eran justos e irreprensibles, y sin embargo no tenían hijos, algo que en su cultura se veía como deshonra. La fidelidad no siempre trae la respuesta inmediata, pero Dios no se olvida: el nombre Zacarías significa «Dios se acuerda».'],
        ['B', 'Juan sería lleno del Espíritu Santo desde el vientre de su madre. Lucas destaca desde el comienzo la obra del Espíritu Santo, que llenará también a Elisabet (1:41), a Zacarías (1:67), a Jesús (4:1) y, en Hechos, a la iglesia.'],
        ['C', 'Zacarías pidió una señal porque dudó, y la señal fue quedar mudo hasta que se cumpliera la palabra. Aun en la disciplina, Dios cumplió su promesa. Cuando Zacarías volvió a hablar, lo primero que hizo fue bendecir a Dios (1:64).']
      ],
      conc: ['Mal 3:1', 'Mal 4:5-6', 'Nm 6:3', '1 Cr 24:10'] },

    { id: 'anuncio-maria', sec: 's1', t: 'Un ángel anuncia el nacimiento de Jesús a María', sim: ['👑', '🕊️', '👨‍👩‍👧'], refs: { lc: '1:26-38' },
      marcas: [['lc', '1:32', 'el trono de David su padre', 'A'], ['lc', '1:35', 'El Espíritu Santo vendrá sobre ti', 'B'], ['lc', '1:38', 'He aquí la sierva del Señor', 'C']],
      com: [
        ['A', 'Gabriel anuncia que el hijo de María recibirá el trono de David y reinará para siempre: es el cumplimiento de la promesa hecha a David (2 S 7:16). El reino de Cristo «no tendrá fin».'],
        ['B', 'La concepción de Jesús es obra del Espíritu Santo. Jesús no tuvo padre humano: nació de una virgen, como anunció Isaías (Is 7:14). Por eso es «Hijo de Dios» en un sentido único.'],
        ['C', 'Zacarías, sacerdote, dudó; María, una joven de un pueblo humilde, creyó. Su respuesta es un modelo de fe y entrega: «hágase conmigo conforme a tu palabra». Y Elisabet la llamará bienaventurada «porque creyó» (1:45).']
      ],
      conc: ['Is 7:14', '2 S 7:12-16', 'Is 9:6-7', 'Gn 18:14'] },

    { id: 'visita-elisabet', sec: 's1', t: 'María visita a Elisabet', sim: ['🕊️', '👨‍👩‍👧'], refs: { lc: '1:39-56' },
      marcas: [['lc', '1:41', 'Elisabet fue llena del Espíritu Santo', 'A'], ['lc', '1:47', 'en Dios mi Salvador', 'B'], ['lc', '1:52', 'Quitó de los tronos a los poderosos', 'C']],
      com: [
        ['A', 'Al oír el saludo de María, la criatura saltó en el vientre de Elisabet, y ella fue llena del Espíritu Santo y profetizó. El Espíritu le reveló que María llevaba en su vientre a «mi Señor».'],
        ['B', 'En su cántico, el Magníficat, María llama a Dios «mi Salvador». María también necesitaba un Salvador, y se alegra en Dios por su misericordia.'],
        ['C', 'El cántico de María recuerda el de Ana (1 S 2:1-10) y anuncia un reino que invierte los valores del mundo: Dios exalta a los humildes, derriba a los poderosos, sacia a los hambrientos y despide vacíos a los ricos.']
      ],
      conc: ['1 S 2:1-10', 'Gn 17:7', 'Sal 103:17'] },

    { id: 'nace-juan', sec: 's1', t: 'Nace Juan el Bautista', sim: ['👨‍👩‍👧'], refs: { lc: '1:57-66' },
      marcas: [['lc', '1:63', 'Juan es su nombre', 'A'], ['lc', '1:66', 'la mano del Señor estaba con él', 'B']],
      com: [
        ['A', 'Los parientes querían ponerle el nombre de su padre, como era costumbre. Pero Elisabet y Zacarías obedecieron la palabra del ángel: Juan, que significa «Dios es misericordioso». La obediencia de Zacarías desató su lengua.'],
        ['B', 'Toda la región se preguntaba qué sería este niño. Dios estaba preparando al mensajero que anunciaría al Mesías.']
      ],
      conc: ['Lc 1:13', 'Lc 1:20'] },

    { id: 'profecia-zacarias', sec: 's1', t: 'Profecía de Zacarías', sim: ['🕊️', '👑'], refs: { lc: '1:67-80' },
      marcas: [['lc', '1:67', 'fue lleno del Espíritu Santo, y profetizó', 'A'], ['lc', '1:69', 'un poderoso Salvador', 'B'], ['lc', '1:76', 'profeta del Altísimo serás llamado', 'C']],
      com: [
        ['A', 'Lleno del Espíritu Santo, Zacarías profetiza. El Benedictus es un cántico que celebra que Dios ha visitado a su pueblo, como prometió a Abraham y a David.'],
        ['B', 'El «cuerno de salvación» o poderoso Salvador de la casa de David es Jesús, que todavía no había nacido. Zacarías habla primero del Mesías y solo después de su propio hijo.'],
        ['C', 'Juan sería profeta del Altísimo e iría delante del Señor para preparar sus caminos, como anunciaron Isaías y Malaquías. Su misión: dar conocimiento de salvación por el perdón de los pecados.']
      ],
      conc: ['Is 40:3', 'Mal 3:1', 'Gn 22:16-18', 'Is 9:2'] },

    { id: 'nacimiento-jesus', sec: 's1', t: 'El nacimiento de Jesús / Un ángel se aparece a José', sim: ['👑', '👨‍👩‍👧', '🕊️'], refs: { mt: '1:18-25', lc: '2:1-7' },
      marcas: [['mt', '1:21', 'él salvará a su pueblo de sus pecados', 'A'], ['mt', '1:23', 'Dios con nosotros', 'B'], ['lc', '2:7', 'no había lugar para ellos en el mesón', 'C']],
      com: [
        ['A', 'El nombre Jesús, Yeshúa, significa «Jehová salva». Desde antes de su nacimiento se anuncia su misión: salvar a su pueblo de sus pecados.'],
        ['B', 'Mateo cita Isaías 7:14: el niño es Emanuel, «Dios con nosotros». Mateo cierra su evangelio con la misma promesa: «yo estoy con vosotros todos los días» (Mt 28:20).'],
        ['C', 'Lucas ubica el nacimiento en la historia: un decreto de Augusto llevó a José y María a Belén, la ciudad de David, donde el profeta Miqueas había anunciado que nacería el Mesías (Mi 5:2). El Rey de reyes nació en un pesebre, porque no hubo lugar para él.']
      ],
      conc: ['Is 7:14', 'Mi 5:2', 'Mt 28:20', 'Gá 4:4'] },

    { id: 'pastores', sec: 's1', t: 'Los pastores visitan a Jesús', sim: ['👑'], refs: { lc: '2:8-20' },
      marcas: [['lc', '2:10', 'para todo el pueblo', 'A'], ['lc', '2:11', 'un Salvador, que es CRISTO el Señor', 'B'], ['lc', '2:19', 'guardaba todas estas cosas', 'C']],
      com: [
        ['A', 'Los primeros en recibir la noticia fueron pastores, gente sencilla y poco considerada. La buena noticia es para todo el pueblo.'],
        ['B', 'El ángel reúne tres títulos: Salvador, Cristo (el Mesías) y Señor. El niño del pesebre es el Mesías prometido y es el Señor.'],
        ['C', 'Los pastores fueron, vieron y contaron lo que habían oído. María, en cambio, guardaba todo en su corazón y lo meditaba. Ambas respuestas son necesarias: anunciar y meditar.']
      ],
      conc: ['Mi 5:2', 'Is 9:6', 'Lc 2:51'] },

    { id: 'presentacion', sec: 's1', t: 'María y José llevan a Jesús al templo', sim: ['👑', '🕊️', '👨‍👩‍👧'], refs: { lc: '2:21-40' },
      marcas: [['lc', '2:24', 'Un par de tórtolas, o dos palominos', 'A'], ['lc', '2:25', 'el Espíritu Santo estaba sobre él', 'B'], ['lc', '2:32', 'Luz para revelación a los gentiles', 'C']],
      com: [
        ['A', 'La ley permitía a los pobres ofrecer dos tórtolas o palominos en lugar de un cordero (Lv 12:8). José y María eran pobres: el que es rico se hizo pobre por amor de nosotros (2 Co 8:9).'],
        ['B', 'Simeón era un hombre justo sobre quien estaba el Espíritu Santo; el Espíritu le había revelado que vería al Cristo, y el Espíritu lo llevó al templo en el momento preciso.'],
        ['C', 'Simeón anuncia que Jesús será luz para los gentiles y gloria de Israel, y advierte a María que una espada traspasaría su alma. La anciana profetisa Ana, de la tribu de Aser, también habló del niño a los que esperaban la redención.']
      ],
      conc: ['Lv 12:2-8', 'Éx 13:2', 'Is 49:6', '2 Co 8:9'] },

    { id: 'magos', sec: 's1', t: 'Visitantes del Oriente', sim: ['👑'], refs: { mt: '2:1-12' },
      marcas: [['mt', '2:2', 'el rey de los judíos', 'A'], ['mt', '2:6', 'Y tú, Belén', 'B'], ['mt', '2:11', 'oro, incienso y mirra', 'C']],
      com: [
        ['A', 'Los magos eran sabios del oriente, probablemente de Persia o Babilonia, donde Daniel había sido jefe de los sabios siglos antes. Gentiles que buscaban al rey de los judíos para adorarlo.'],
        ['B', 'Los principales sacerdotes y escribas sabían dónde nacería el Mesías, porque lo dice Miqueas 5:2, pero no fueron a buscarlo. Conocer la Escritura sin buscar a Cristo no basta.'],
        ['C', 'Sus regalos tienen un significado que la iglesia ha visto desde antiguo: oro para el Rey, incienso para Dios y mirra, usada en la sepultura, para el que moriría por nosotros.']
      ],
      conc: ['Mi 5:2', 'Nm 24:17', 'Sal 72:10-11', 'Is 60:3, 6'] },

    { id: 'huida-egipto', sec: 's1', t: 'La huida a Egipto', sim: ['👑', '👨‍👩‍👧'], refs: { mt: '2:13-18' },
      marcas: [['mt', '2:15', 'De Egipto llamé a mi Hijo', 'A'], ['mt', '2:18', 'Raquel que llora a sus hijos', 'B']],
      com: [
        ['A', 'Mateo cita Oseas 11:1, que hablaba de Israel saliendo de Egipto. Jesús revive la historia de su pueblo: como Israel, desciende a Egipto y es llamado a salir. Él es el verdadero Israel, el Hijo fiel.'],
        ['B', 'Herodes, que asesinó incluso a miembros de su propia familia, mandó matar a los niños de Belén. Mateo recuerda a Raquel llorando por sus hijos (Jer 31:15), en el mismo capítulo de Jeremías que anuncia el nuevo pacto.']
      ],
      conc: ['Os 11:1', 'Jer 31:15', 'Éx 1:22'] },

    { id: 'regreso-nazaret', sec: 's1', t: 'El regreso a Nazaret', sim: ['👑', '👨‍👩‍👧'], refs: { mt: '2:19-23' },
      marcas: [['mt', '2:23', 'habría de ser llamado nazareno', 'A']],
      com: [
        ['A', 'Nazaret era una aldea pequeña y despreciada (Jn 1:46). Mateo dice que se cumplió lo dicho por los profetas, en plural: no cita un versículo exacto, sino un tema profético. Muchos lo relacionan con el «renuevo» (en hebreo, nétser) de Isaías 11:1, y con el Mesías despreciado de Isaías 53.']
      ],
      conc: ['Is 11:1', 'Is 53:3', 'Jn 1:46'] },

    { id: 'jesus-doce', sec: 's1', t: 'Jesús dialoga con los maestros de la ley', sim: ['👨‍👩‍👧', '📖'], refs: { lc: '2:41-52' },
      rojo: [['lc', '2:49', '¿Por qué me buscabais?']],
      marcas: [['lc', '2:46', 'oyéndoles y preguntándoles', 'A'], ['lc', '2:49', 'en los negocios de mi Padre', 'B'], ['lc', '2:52', 'Jesús crecía en sabiduría', 'C']],
      com: [
        ['A', 'A los doce años, Jesús estaba en el templo escuchando y preguntando a los maestros, y todos se maravillaban de su inteligencia. El recurso 3D El templo de Herodes muestra los atrios donde enseñaban los maestros de la ley.'],
        ['B', 'Son las primeras palabras de Jesús registradas en los evangelios. Ante «tu padre y yo», Jesús habla de «mi Padre»: ya tenía conciencia de su relación única con Dios.'],
        ['C', 'Jesús volvió a Nazaret y estaba sujeto a sus padres. Creció de forma completa: en sabiduría, en estatura y en gracia para con Dios y los hombres.']
      ],
      conc: ['Éx 23:14-17', 'Dt 16:16', '1 S 2:26'] },

    { id: 'juan-prepara', sec: 's1', t: 'Juan el Bautista le prepara el camino a Jesús', sim: ['👑', '📖', '🕊️'], refs: { mt: '3:1-12', mr: '1:1-8', lc: '3:1-18', jn: '1:19-28' },
      excl: [['lc', '3:1'], ['lc', '3:2'], ['lc', '3:5'], ['lc', '3:6'], ['lc', '3:10'], ['lc', '3:11'], ['lc', '3:12'], ['lc', '3:13'], ['lc', '3:14'], ['lc', '3:15'], ['mr', '1:1']],
      marcas: [['mt', '3:2', 'Arrepentíos', 'A'], ['lc', '3:11', 'El que tiene dos túnicas', 'B'], ['mt', '3:11', 'él os bautizará en Espíritu Santo y fuego', 'C']],
      com: [
        ['A', 'Los cuatro evangelios presentan a Juan como la voz que clama en el desierto, anunciada por Isaías 40:3. Su mensaje: arrepentirse, porque el reino de los cielos se ha acercado.'],
        ['B', 'Solo Lucas registra lo que Juan respondió a quienes preguntaban «¿qué haremos?»: compartir, no extorsionar, no abusar del poder. El arrepentimiento verdadero se nota en la vida diaria.'],
        ['C', 'Juan bautizaba en agua, pero anunció que Jesús bautizaría en Espíritu Santo y fuego. Esta promesa, registrada en los cuatro evangelios, se cumplió en Pentecostés (Hch 1:5; 2:4) y sigue vigente para todos los creyentes (Hch 2:39).']
      ],
      conc: ['Is 40:3-5', 'Mal 3:1', 'Hch 1:5', 'Hch 2:4, 39'] },

    { id: 'bautismo', sec: 's1', t: 'Juan bautiza a Jesús', sim: ['🕊️', '👑'], refs: { mt: '3:13-17', mr: '1:9-11', lc: '3:21-22' },
      rojo: [['mt', '3:15', 'Deja ahora', 'toda justicia.']],
      excl: [['mt', '3:14'], ['mt', '3:15'], ['lc', '3:21', 'y orando', 'y orando'], ['lc', '3:22', 'en forma corporal', 'en forma corporal']],
      marcas: [['mt', '3:15', 'toda justicia', 'A'], ['lc', '3:21', 'y orando', 'B'], ['mt', '3:17', 'Este es mi Hijo amado', 'C']],
      com: [
        ['A', 'Solo Mateo registra la resistencia de Juan. Jesús no tenía pecado del cual arrepentirse, pero se bautizó para identificarse con su pueblo y cumplir toda justicia.'],
        ['B', 'Solo Lucas señala que Jesús estaba orando cuando el cielo se abrió y el Espíritu descendió. Lucas destaca la oración de Jesús en los momentos decisivos de su ministerio.'],
        ['C', 'En el bautismo se manifiesta la Trinidad: el Hijo en el agua, el Espíritu que desciende como paloma y la voz del Padre que lo declara su Hijo amado, con palabras del Salmo 2:7 y de Isaías 42:1.']
      ],
      conc: ['Sal 2:7', 'Is 42:1', 'Is 11:2', 'Hch 10:38'] },

    { id: 'tentacion', sec: 's1', t: 'Satanás tienta a Jesús en el desierto', sim: ['😈', '🕊️'], refs: { mt: '4:1-11', mr: '1:12-13', lc: '4:1-13' },
      rojo: [['mt', '4:4', 'Escrito está:'], ['mt', '4:7', 'Escrito está también'], ['mt', '4:10', 'Vete, Satanás'], ['lc', '4:4', 'Escrito está:'], ['lc', '4:8', 'Vete de mí'], ['lc', '4:12', 'Dicho está']],
      excl: [['mr', '1:13', 'y estaba con las fieras', 'y estaba con las fieras'], ['lc', '4:13', 'por un tiempo', 'por un tiempo']],
      marcas: [['lc', '4:1', 'lleno del Espíritu Santo', 'A'], ['mt', '4:4', 'Escrito está', 'B'], ['lc', '4:13', 'por un tiempo', 'C']],
      com: [
        ['A', 'Jesús fue llevado por el Espíritu al desierto, lleno del Espíritu Santo, y volvió «en el poder del Espíritu» (Lc 4:14). Mateo y Lucas ordenan las dos últimas tentaciones de manera distinta; Mateo sigue probablemente el orden cronológico y Lucas termina en Jerusalén, el centro de su evangelio.'],
        ['B', 'Las tres veces Jesús respondió con la Escritura, citando Deuteronomio 8:3, 6:16 y 6:13. Donde Israel cayó en el desierto durante cuarenta años, Jesús venció en cuarenta días. La Palabra es la espada del Espíritu (Ef 6:17).'],
        ['C', 'Lucas aclara que el diablo se apartó de él «por un tiempo»: volvería en la pasión. Hebreos dice que Jesús fue tentado en todo según nuestra semejanza, pero sin pecado, y por eso puede socorrer a los que son tentados (He 2:18; 4:15).']
      ],
      conc: ['Dt 8:3', 'Dt 6:16', 'Dt 6:13', 'He 4:15', 'Ef 6:17'] },

    { id: 'cordero', sec: 's1', t: 'Juan el Bautista declara que Jesús es el Mesías', sim: ['👑', '✝️', '🕊️'], refs: { jn: '1:29-34' },
      marcas: [['jn', '1:29', 'el Cordero de Dios', 'A'], ['jn', '1:33', 'ése es el que bautiza con el Espíritu Santo', 'B']],
      com: [
        ['A', 'Juan presenta a Jesús como el Cordero de Dios que quita el pecado del mundo: el cumplimiento de los corderos de la pascua y de los sacrificios del templo, y del siervo que fue llevado «como cordero al matadero» (Is 53:7).'],
        ['B', 'La señal que Dios dio a Juan fue ver descender el Espíritu y permanecer sobre él: «ése es el que bautiza con el Espíritu Santo». Jesús es a la vez el Cordero que quita el pecado y el que bautiza con el Espíritu.']
      ],
      conc: ['Éx 12:3-13', 'Is 53:7', '1 P 1:19', 'Ap 5:6'] },

    { id: 'primeros-discipulos', sec: 's1', t: 'Los primeros discípulos siguen a Jesús', sim: ['👑'], refs: { jn: '1:35-51' },
      rojo: [['jn', '1:38', '¿Qué buscáis?', '¿Qué buscáis?'], ['jn', '1:39', 'Venid y ved.', 'Venid y ved.'], ['jn', '1:42', 'Tú eres Simón'], ['jn', '1:43', 'Sígueme.'], ['jn', '1:47', 'He aquí un verdadero'], ['jn', '1:48', 'Antes que Felipe'], ['jn', '1:50', '¿Porque te dije'], ['jn', '1:51', 'De cierto']],
      marcas: [['jn', '1:41', 'Hemos hallado al Mesías', 'A'], ['jn', '1:42', 'tú serás llamado Cefas', 'B'], ['jn', '1:51', 'el Hijo del Hombre', 'C']],
      com: [
        ['A', 'Andrés, después de pasar un día con Jesús, lo primero que hizo fue buscar a su hermano Simón y llevarlo a Jesús. El evangelio se extiende de persona a persona.'],
        ['B', 'Jesús cambia el nombre de Simón: Cefas, en arameo, y Pedro, en griego, significan «piedra». Jesús ve no solo lo que somos, sino lo que llegaremos a ser por su gracia.'],
        ['C', 'Jesús alude a la escalera de Jacob en Betel (Gn 28:12): él mismo es el camino que une el cielo y la tierra. Se llama «el Hijo del Hombre», el título de Daniel 7:13.']
      ],
      conc: ['Gn 28:12', 'Dn 7:13', 'Dt 18:15'] },

    { id: 'cana', sec: 's1', t: 'Jesús convierte el agua en vino', sim: ['🙌'], refs: { jn: '2:1-12' },
      rojo: [['jn', '2:4', '¿Qué tienes conmigo'], ['jn', '2:7', 'Llenad estas tinajas de agua.', 'Llenad estas tinajas de agua.'], ['jn', '2:8', 'Sacad ahora', 'maestresala.']],
      marcas: [['jn', '2:5', 'Haced todo lo que os dijere', 'A'], ['jn', '2:6', 'seis tinajas de piedra', 'B'], ['jn', '2:11', 'Este principio de señales', 'C']],
      com: [
        ['A', 'Las últimas palabras de María registradas en los evangelios son un buen consejo para todo creyente: «Haced todo lo que os dijere».'],
        ['B', 'Las tinajas eran para el agua de la purificación de los judíos. Jesús transforma el agua de los ritos en el vino nuevo del reino, y lo hace en abundancia: unos seiscientos litros.'],
        ['C', 'Juan llama a los milagros de Jesús «señales»: apuntan a quién es él. Esta fue la primera, y en ella Jesús manifestó su gloria, y sus discípulos creyeron en él.']
      ],
      conc: ['Is 25:6', 'Am 9:13', 'Jn 20:30-31'] }
  ]
};

/* ---------- Dónde y cuándo, la Escritura citada, para pensar y enlaces (por pasaje) ----------
   lugar: { vista, lugares, trazos }  (lugares y trazos de imperios-geo.js)
   cuando: { etapa, fecha }  (etapa de ARMONIA.etapas; sin etapa = antes del nacimiento)
   escritura: [{ tipo: 'cumple' | 'cita' | 'alude', libro, cv, nombre, en }]  → el texto del Antiguo Testamento se muestra completo
   pensar: pregunta; ir: [{ t, a }] botones a otros recursos */
(() => {
  const A = window.ARMONIA;
  A.vistas = {
    israel: [[30.9, 34.0], [33.3, 36.3]],
    galilea: [[32.45, 34.95], [33.1, 35.85]],
    judea: [[31.45, 34.85], [32.05, 35.75]],
    egipto: [[28.3, 30.2], [33.0, 36.2]],
    oriente: [[28.5, 29.5], [36.5, 52.5]]
  };
  A.etapas = [
    { id: 'infancia', n: 'Nacimiento e infancia', fecha: 'c. 6–4 a.C.' },
    { id: 'juventud', n: 'Juventud en Nazaret', fecha: 'c. 4 a.C.–28 d.C.' },
    { id: 'preparacion', n: 'Preparación', fecha: 'c. 29 d.C.' },
    { id: 'judea', n: 'Primer año', fecha: 'c. 29–30' },
    { id: 'galilea', n: 'Ministerio en Galilea', fecha: 'c. 30–32' },
    { id: 'viaje', n: 'Hacia Jerusalén', fecha: 'c. 32–33' },
    { id: 'pasion', n: 'Semana Santa', fecha: '33 d.C.' },
    { id: 'resurreccion', n: 'Resurrección y ascensión', fecha: '33 d.C.' }
  ];
  A.notaFechas = 'Fechas aproximadas. Jesús nació antes de la muerte de Herodes el Grande (4 a.C.); Juan comenzó en el año 15 de Tiberio (Lc 3:1, c. 28–29 d.C.); el ministerio duró unos tres años y medio, con la crucifixión hacia el 33 d.C., como en Daniel y Los últimos tiempos. Otros autores fechan la crucifixión en el 30 d.C.';
  const E = {
    'proposito-lucas': { cuando: { texto: 'Lucas escribe hacia el 60 d.C.' },
      pensar: 'Lucas investigó con diligencia para que Teófilo conociera bien la verdad (Lc 1:3-4). ¿Con qué diligencia estudias tú la vida de Jesús?',
      ir: [{ t: 'Hechos, la segunda parte de la obra de Lucas', a: '../../hechos/' }] },
    'verbo': { cuando: { texto: 'Antes de la creación: el Verbo eterno' },
      escritura: [{ tipo: 'alude', libro: 'gn', cv: '1:1', nombre: 'Génesis 1:1', en: 'Juan 1:1' }],
      pensar: '«A todos los que le recibieron… les dio potestad de ser hechos hijos de Dios» (Jn 1:12). ¿Has recibido a Cristo de esa manera?',
      ir: [{ t: 'El tabernáculo: Dios que habita entre su pueblo', a: '../../tabernaculo/' }] },
    'genealogia': { cuando: { texto: 'De Abraham y de Adán hasta Jesús' },
      pensar: 'La genealogía del Mesías incluye a extranjeras y a personas con historias de pecado. ¿Qué te dice esto sobre la gracia de Dios con tu propia historia?',
      ir: [{ t: 'Árbol genealógico', a: '../../arbol-genealogico/' }] },
    'anuncio-zacarias': { lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: { etapa: 'infancia', fecha: 'c. 7–6 a.C.' },
      escritura: [{ tipo: 'cumple', libro: 'mal', cv: '4:5-6', nombre: 'Malaquías 4:5-6', en: 'Lucas 1:17' }],
      pensar: 'Zacarías y Elisabet fueron fieles durante años sin recibir lo que pedían (Lc 1:6-7). ¿Cómo perseveras en la fidelidad cuando la respuesta tarda?',
      ir: [{ t: 'El sacerdocio: los veinticuatro turnos', a: '../../sacerdocio/' }, { t: 'El templo de Herodes', a: '../../templo-herodes/' }] },
    'anuncio-maria': { lugar: { vista: 'galilea', lugares: ['nazaret', 'r-galilea'] }, cuando: { etapa: 'infancia', fecha: 'c. 6 a.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '7:14', nombre: 'Isaías 7:14', en: 'Lucas 1:31-35' }, { tipo: 'cumple', libro: '2s', cv: '7:16', nombre: '2 Samuel 7:16', en: 'Lucas 1:32-33' }],
      pensar: 'María respondió: «hágase conmigo conforme a tu palabra» (Lc 1:38). ¿Qué palabra de Dios necesitas recibir hoy con esa misma disposición?' },
    'visita-elisabet': { lugar: { vista: 'israel', lugares: ['nazaret', 'montana-judea', 'jerusalen'] }, cuando: { etapa: 'infancia', fecha: 'c. 6 a.C.' },
      pensar: 'Elisabet fue llena del Espíritu Santo al oír el saludo de María (Lc 1:41). ¿Cómo puede tu presencia llevar a otros a encontrarse con Cristo?' },
    'nace-juan': { lugar: { vista: 'judea', lugares: ['montana-judea', 'jerusalen'] }, cuando: { etapa: 'infancia', fecha: 'c. 6 a.C.' },
      pensar: 'Zacarías volvió a hablar cuando obedeció la palabra del ángel (Lc 1:63-64). ¿Qué obediencia pendiente podría estar frenando tu alabanza?' },
    'profecia-zacarias': { lugar: { vista: 'judea', lugares: ['montana-judea', 'jerusalen'] }, cuando: { etapa: 'infancia', fecha: 'c. 6 a.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '40:3', nombre: 'Isaías 40:3', en: 'Lucas 1:76' }, { tipo: 'cumple', libro: 'mal', cv: '3:1', nombre: 'Malaquías 3:1', en: 'Lucas 1:76' }],
      pensar: 'Zacarías habló primero del Salvador y después de su propio hijo (Lc 1:68-76). ¿Ocupa Cristo el primer lugar en lo que más amas?' },
    'nacimiento-jesus': { lugar: { vista: 'israel', lugares: ['nazaret', 'belen', 'jerusalen'], trazos: ['jesus-belen'] }, cuando: { etapa: 'infancia', fecha: 'c. 6–5 a.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '7:14', nombre: 'Isaías 7:14', en: 'Mateo 1:22-23' }, { tipo: 'cumple', libro: 'mi', cv: '5:2', nombre: 'Miqueas 5:2', en: 'Lucas 2:4-7' }],
      pensar: 'No hubo lugar para ellos en el mesón (Lc 2:7). ¿Hay lugar para Jesús en tu vida, o está ocupado por otras cosas?',
      ir: [{ t: 'El imperio romano: Augusto', a: '../../imperio-romano/' }] },
    'pastores': { lugar: { vista: 'judea', lugares: ['belen', 'jerusalen'] }, cuando: { etapa: 'infancia', fecha: 'c. 6–5 a.C.' },
      pensar: 'Los pastores fueron, vieron y contaron; María guardaba todo en su corazón (Lc 2:17-19). ¿Cuál de las dos respuestas necesitas practicar más?' },
    'presentacion': { lugar: { vista: 'judea', lugares: ['belen', 'jerusalen'] }, cuando: { etapa: 'infancia', fecha: 'c. 6–5 a.C.' },
      escritura: [{ tipo: 'cita', libro: 'ex', cv: '13:2', nombre: 'Éxodo 13:2', en: 'Lucas 2:23' }, { tipo: 'cita', libro: 'lv', cv: '12:8', nombre: 'Levítico 12:8', en: 'Lucas 2:24' }, { tipo: 'cumple', libro: 'is', cv: '49:6', nombre: 'Isaías 49:6', en: 'Lucas 2:32' }],
      pensar: 'Simeón esperó toda su vida y el Espíritu lo llevó al templo en el momento preciso (Lc 2:25-27). ¿Cómo esperas tú las promesas de Dios?',
      ir: [{ t: 'El templo de Herodes', a: '../../templo-herodes/' }, { t: 'El sacerdocio en Israel', a: '../../sacerdocio/' }] },
    'magos': { lugar: { vista: 'oriente', lugares: ['babilonia', 'r-persia', 'jerusalen', 'belen'] }, cuando: { etapa: 'infancia', fecha: 'c. 5–4 a.C.' },
      escritura: [{ tipo: 'cumple', libro: 'mi', cv: '5:2', nombre: 'Miqueas 5:2', en: 'Mateo 2:5-6' }, { tipo: 'alude', libro: 'nm', cv: '24:17', nombre: 'Números 24:17', en: 'Mateo 2:2' }],
      pensar: 'Los escribas sabían dónde nacería el Mesías, pero no fueron a buscarlo (Mt 2:4-6). ¿De qué sirve conocer la Biblia si no nos lleva a Cristo?',
      ir: [{ t: 'Daniel, jefe de los sabios de Babilonia', a: '../../daniel/' }] },
    'huida-egipto': { lugar: { vista: 'egipto', lugares: ['belen', 'r-egipto', 'gaza'], trazos: ['jesus-egipto'] }, cuando: { etapa: 'infancia', fecha: 'c. 5–4 a.C.' },
      escritura: [{ tipo: 'cumple', libro: 'os', cv: '11:1', nombre: 'Oseas 11:1', en: 'Mateo 2:15' }, { tipo: 'cumple', libro: 'jer', cv: '31:15', nombre: 'Jeremías 31:15', en: 'Mateo 2:17-18' }],
      pensar: 'José obedeció de inmediato, de noche (Mt 2:14). ¿Qué tan rápido respondes cuando Dios te muestra lo que debes hacer?',
      ir: [{ t: 'Egipto en la Biblia', a: '../../egipto/' }] },
    'regreso-nazaret': { lugar: { vista: 'egipto', lugares: ['r-egipto', 'nazaret', 'jerusalen'], trazos: ['jesus-nazaret'] }, cuando: { etapa: 'juventud', fecha: 'c. 4 a.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '11:1', nombre: 'Isaías 11:1', en: 'Mateo 2:23' }],
      pensar: 'El Hijo de Dios creció en una aldea despreciada (Jn 1:46). ¿Qué te enseña esto sobre el valor que Dios da a los lugares humildes?' },
    'jesus-doce': { lugar: { vista: 'israel', lugares: ['nazaret', 'jerusalen'] }, cuando: { etapa: 'juventud', fecha: 'c. 8 d.C.' },
      pensar: 'Jesús crecía en sabiduría, en estatura y en gracia para con Dios y los hombres (Lc 2:52). ¿En cuál de esas áreas necesitas crecer?',
      ir: [{ t: 'El templo de Herodes en 3D', a: '../../templo-herodes/' }] },
    'juan-prepara': { lugar: { vista: 'judea', lugares: ['desierto-judea', 'betabara', 'jerusalen'] }, cuando: { etapa: 'preparacion', fecha: 'c. 28–29 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '40:3-5', nombre: 'Isaías 40:3-5', en: 'Mateo 3:3; Lucas 3:4-6' }, { tipo: 'cumple', libro: 'mal', cv: '3:1', nombre: 'Malaquías 3:1', en: 'Marcos 1:2' }],
      pensar: 'Juan anunció que Jesús bautizaría en Espíritu Santo y fuego (Mt 3:11). ¿Has recibido esa promesa? ¿La estás buscando?',
      ir: [{ t: 'Hechos: el bautismo en el Espíritu Santo', a: '../../hechos/' }, { t: 'El imperio romano: Tiberio', a: '../../imperio-romano/' }] },
    'bautismo': { lugar: { vista: 'israel', lugares: ['nazaret', 'betabara', 'jerusalen'] }, cuando: { etapa: 'preparacion', fecha: 'c. 29 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'sal', cv: '2:7', nombre: 'Salmo 2:7', en: 'Mateo 3:17' }, { tipo: 'alude', libro: 'is', cv: '42:1', nombre: 'Isaías 42:1', en: 'Mateo 3:17' }],
      pensar: 'Jesús comenzó su ministerio orando y lleno del Espíritu (Lc 3:21-22). ¿Cómo comienzas tú cada etapa de tu servicio a Dios?' },
    'tentacion': { lugar: { vista: 'judea', lugares: ['desierto-judea', 'jerusalen', 'betabara'] }, cuando: { etapa: 'preparacion', fecha: 'c. 29 d.C.' },
      escritura: [{ tipo: 'cita', libro: 'dt', cv: '8:3', nombre: 'Deuteronomio 8:3', en: 'Mateo 4:4' }, { tipo: 'cita', libro: 'dt', cv: '6:16', nombre: 'Deuteronomio 6:16', en: 'Mateo 4:7' }, { tipo: 'cita', libro: 'dt', cv: '6:13', nombre: 'Deuteronomio 6:13', en: 'Mateo 4:10' }, { tipo: 'cita', libro: 'sal', cv: '91:11-12', nombre: 'Salmo 91:11-12', en: 'Mateo 4:6 (citado por el diablo)' }],
      pensar: 'Jesús respondió cada tentación con la Escritura (Mt 4:4-10). ¿Qué versículos tienes guardados en tu corazón para los momentos de tentación?',
      ir: [{ t: 'El templo de Herodes: el pináculo', a: '../../templo-herodes/' }] },
    'cordero': { lugar: { vista: 'judea', lugares: ['betabara', 'jerusalen'] }, cuando: { etapa: 'preparacion', fecha: 'c. 29 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '53:7', nombre: 'Isaías 53:7', en: 'Juan 1:29' }],
      pensar: 'Juan señaló a Jesús y dijo: «He aquí el Cordero de Dios» (Jn 1:29). ¿A quién puedes señalarle hoy a Jesús?',
      ir: [{ t: 'El sacerdocio: un sacrificio una vez para siempre', a: '../../sacerdocio/' }, { t: 'El tabernáculo: los sacrificios', a: '../../tabernaculo/' }] },
    'primeros-discipulos': { lugar: { vista: 'israel', lugares: ['betabara', 'betsaida', 'r-galilea', 'mar-galilea'] }, cuando: { etapa: 'preparacion', fecha: 'c. 29 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'gn', cv: '28:12', nombre: 'Génesis 28:12', en: 'Juan 1:51' }],
      pensar: 'Felipe no discutió con Natanael: le dijo «Ven y ve» (Jn 1:46). ¿A quién podrías invitar a conocer a Jesús?',
      ir: [{ t: 'Daniel: el Hijo del Hombre', a: '../../daniel/' }] },
    'cana': { lugar: { vista: 'galilea', lugares: ['cana', 'nazaret', 'capernaum', 'mar-galilea'] }, cuando: { etapa: 'judea', fecha: 'c. 29 d.C.' },
      pensar: '«Haced todo lo que os dijere» (Jn 2:5). ¿Qué te ha dicho Jesús que todavía no has hecho?' }
  };
  A.pasajes.forEach(p => Object.assign(p, E[p.id] || {}));

  /* ---------- Glosario: se marca la primera aparición de cada término en cada columna ---------- */
  A.glosario = [
    { t: 'Clase de Abías', f: ['clase de Abías'], d: 'Uno de los veinticuatro turnos en que David organizó a los sacerdotes (1 Cr 24:10). Cada turno servía una semana en el templo, dos veces al año.' },
    { t: 'Incienso', f: ['incienso'], d: 'Resina aromática que se quemaba en el altar de oro del lugar santo, mañana y tarde. Era una imagen de la oración del pueblo (Sal 141:2).' },
    { t: 'Herodes', f: ['Herodes'], d: 'Nombre de varios gobernantes. Herodes el Grande, rey de Judea del 37 al 4 a.C., amplió el templo y mandó matar a los niños de Belén. Su hijo Herodes Antipas fue tetrarca de Galilea en tiempos de Juan el Bautista y de Jesús.' },
    { t: 'Augusto César', f: ['Augusto César'], d: 'Primer emperador de Roma (27 a.C.–14 d.C.). Su decreto de censo llevó a José y María a Belén.' },
    { t: 'Censo', f: ['empadronado', 'empadronados', 'empadronarse', 'censo'], d: 'Registro de la población para fines de impuestos. Cada uno debía inscribirse en la ciudad de su familia; por eso José, de la casa de David, fue a Belén.' },
    { t: 'Mesón', f: ['mesón'], d: 'Lugar de alojamiento para viajeros. También puede referirse a la habitación de huéspedes de una casa. No había lugar allí, y el niño fue puesto en un pesebre.' },
    { t: 'Pesebre', f: ['pesebre'], d: 'Comedero de los animales, a menudo tallado en piedra. Muchas casas de Belén tenían una parte para los animales, a veces en una cueva.' },
    { t: 'Tórtolas y palominos', f: ['tórtolas', 'palominos'], d: 'La ofrenda que la ley permitía a los pobres para la purificación después de un parto, en lugar de un cordero (Lv 12:8).' },
    { t: 'Magos', f: ['magos'], d: 'Sabios del oriente, probablemente de Persia o Babilonia, que estudiaban los astros. En Babilonia, Daniel había sido jefe de los sabios (Dn 2:48).' },
    { t: 'Pascua', f: ['pascua'], d: 'Fiesta anual que recordaba la liberación de Egipto. Todo varón israelita debía subir a Jerusalén para celebrarla (Dt 16:16).' },
    { t: 'Doctores de la ley', f: ['doctores'], d: 'Maestros que estudiaban, enseñaban e interpretaban la ley de Moisés. Enseñaban en los atrios del templo.' },
    { t: 'Fariseos', f: ['fariseos'], d: 'Grupo religioso judío muy estricto en el cumplimiento de la ley y de las tradiciones de los ancianos. Creían en la resurrección y en los ángeles.' },
    { t: 'Saduceos', f: ['saduceos'], d: 'Grupo religioso judío ligado a las familias sacerdotales y al templo. Solo aceptaban la autoridad de los libros de Moisés y no creían en la resurrección (Hch 23:8).' },
    { t: 'Tetrarca', f: ['tetrarca'], d: 'Gobernante de una parte de un reino, bajo la autoridad de Roma. A la muerte de Herodes el Grande, su reino se dividió entre sus hijos.' },
    { t: 'Tiberio César', f: ['Tiberio César'], d: 'Segundo emperador de Roma (14–37 d.C.). Su año quince, cuando comenzó Juan el Bautista, corresponde aproximadamente al 28–29 d.C.' },
    { t: 'Poncio Pilato', f: ['Poncio Pilato'], d: 'Gobernador romano de Judea del 26 al 36 d.C. Condenó a Jesús a la crucifixión.' },
    { t: 'Anás y Caifás', f: ['Anás'], d: 'Anás fue sumo sacerdote del 6 al 15 d.C. y siguió siendo el hombre más influyente del sacerdocio. Su yerno Caifás tenía el cargo en tiempos de Jesús (18–36 d.C.).' },
    { t: 'Publicanos', f: ['publicanos'], d: 'Cobradores de impuestos al servicio de Roma. Eran despreciados por colaborar con el invasor y porque muchos cobraban de más.' },
    { t: 'Langostas', f: ['langostas'], d: 'Insecto que la ley permitía comer (Lv 11:22). Era alimento de los pobres del desierto.' },
    { t: 'Aventador', f: ['aventador'], d: 'Pala o horquilla con que se lanzaba al aire el grano trillado: el viento se llevaba la paja y el trigo caía limpio. Imagen del juicio.' },
    { t: 'Levitas', f: ['levitas'], d: 'Miembros de la tribu de Leví que ayudaban a los sacerdotes en el servicio del templo.' },
    { t: 'Elías', f: ['Elías'], d: 'Profeta del siglo IX a.C. Malaquías anunció que Dios enviaría a Elías antes del día de Jehová (Mal 4:5). Jesús dijo que Juan era el Elías que había de venir (Mt 11:14).' },
    { t: 'Rabí', f: ['Rabí'], d: 'Título de respeto para un maestro de la ley: «Maestro».' },
    { t: 'Mesías', f: ['Mesías'], d: 'Del hebreo mashíaj, «ungido»; en griego, Cristo. El rey prometido de la descendencia de David.' },
    { t: 'Cefas', f: ['Cefas'], d: 'Palabra aramea que significa «piedra»; en griego, Pedro.' },
    { t: 'Tinajas de purificación', f: ['tinajas'], d: 'Grandes vasijas de piedra para el agua de los lavamientos rituales. La piedra no se contaminaba según la ley. Cada una contenía unos 80 a 120 litros.' },
    { t: 'Maestresala', f: ['maestresala'], d: 'El encargado de dirigir el banquete de bodas y de probar el vino.' },
    { t: 'Hora décima', f: ['hora décima'], d: 'Los judíos contaban las horas desde la salida del sol: la hora décima eran las cuatro de la tarde.' },
    { t: 'Pináculo del templo', f: ['pináculo'], d: 'Parte más alta del templo, probablemente la esquina sureste del pórtico real, sobre el valle del Cedrón.' },
    { t: 'Denario', f: ['denario'], d: 'Moneda romana de plata. Era el salario de un día de trabajo (Mt 20:2).' },
    { t: 'Sinagoga', f: ['sinagoga'], d: 'Lugar de reunión de los judíos para leer y enseñar las Escrituras y orar. Había una en cada ciudad.' }
  ];
})();

/* ---------- Sección 2 · Tanda 1: pasajes 22 a 45 (primer año en Judea y Samaria; comienzo en Galilea) ---------- */
(() => {
  const A = window.ARMONIA;
  const s2 = [
    { id: 'purifica-templo-1', sec: 's2', t: 'Jesús purifica el templo', sim: ['⚔️', '👑'], refs: { jn: '2:13-25' },
      marcas: [['jn', '2:16', 'casa de mercado', 'A'], ['jn', '2:19', 'Destruid este templo', 'B'], ['jn', '2:23', 'muchos creyeron en su nombre', 'C']],
      com: [
        ['A', 'En el atrio de los gentiles se vendían animales y se cambiaba dinero para el impuesto del templo. El único lugar donde las naciones podían orar se había convertido en un mercado. Jesús, con celo por la casa de su Padre, echó fuera a los vendedores. Juan ubica esta purificación al comienzo del ministerio; los otros evangelios registran otra al final, en la última semana (pasaje 162).'],
        ['B', 'Los líderes le pidieron una señal, y Jesús habló del templo de su cuerpo: lo destruirían y él lo levantaría en tres días. Los discípulos lo entendieron después de la resurrección. Desde entonces, el lugar de la presencia de Dios no es un edificio: es Cristo, y por su Espíritu, su iglesia (1 Co 3:16).'],
        ['C', 'Muchos creyeron al ver sus señales, pero Jesús no se fiaba de ellos, porque conocía lo que había en el hombre. No basta con admirar los milagros: Jesús busca una fe que lo reciba como Señor.']
      ],
      conc: ['Sal 69:9', 'Mal 3:1-3', '1 Co 3:16', 'Mt 26:61'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: { etapa: 'judea', fecha: 'Pascua, c. 30 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '69:9', nombre: 'Salmo 69:9', en: 'Juan 2:17' }],
      pensar: 'Jesús purificó el templo con celo por la casa de su Padre (Jn 2:16-17). Si tu cuerpo es templo del Espíritu Santo, ¿qué necesita purificar Jesús en ti?',
      ir: [{ t: 'El templo de Herodes en 3D', a: '../../templo-herodes/' }] },

    { id: 'nicodemo', sec: 's2', t: 'Nicodemo visita a Jesús de noche', sim: ['📖', '✝️', '🕊️'], refs: { jn: '3:1-21' },
      marcas: [['jn', '3:3', 'el que no naciere de nuevo', 'A'], ['jn', '3:5', 'naciere de agua y del Espíritu', 'B'], ['jn', '3:16', 'de tal manera amó Dios al mundo', 'C']],
      com: [
        ['A', 'Nicodemo era fariseo, maestro de Israel y miembro del sanedrín. Vino de noche, quizá por temor. Jesús fue directo: para ver el reino de Dios hay que nacer de nuevo, o «de arriba». No se trata de reformarse, sino de recibir una vida nueva que viene de Dios.'],
        ['B', 'El nuevo nacimiento es obra del Espíritu Santo. Ningún esfuerzo humano lo produce; el Espíritu, como el viento, sopla donde quiere. Es la regeneración, que ocurre cuando el pecador cree en Cristo. Las Escrituras distinguen esta obra del Espíritu en la conversión de la promesa posterior del bautismo en el Espíritu Santo para recibir poder (Hch 1:8; 8:14-17).'],
        ['C', 'El versículo más conocido de la Biblia resume el evangelio: el amor de Dios, el don de su Hijo, la fe como única condición y la vida eterna como resultado. Jesús compara su muerte con la serpiente que Moisés levantó en el desierto: el que miraba, vivía; el que cree en el Hijo levantado en la cruz, no se pierde.']
      ],
      conc: ['Nm 21:8-9', 'Ez 36:25-27', 'Tit 3:5', '1 P 1:23', 'Jn 7:50-51; 19:39'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: { etapa: 'judea', fecha: 'c. 30 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'nm', cv: '21:8-9', nombre: 'Números 21:8-9', en: 'Juan 3:14-15' }, { tipo: 'alude', libro: 'ez', cv: '36:26-27', nombre: 'Ezequiel 36:26-27', en: 'Juan 3:5' }],
      pensar: 'Jesús le dijo a un maestro religioso que necesitaba nacer de nuevo (Jn 3:3). ¿Has nacido de nuevo, o solo conoces la religión?',
      ir: [{ t: 'Hechos: el Espíritu Santo', a: '../../hechos/' }] },

    { id: 'juan-testifica', sec: 's2', t: 'Juan el Bautista habla más de Jesús', sim: ['👑', '🕊️'], refs: { jn: '3:22-36' },
      marcas: [['jn', '3:29', 'el amigo del esposo', 'A'], ['jn', '3:30', 'Es necesario que él crezca', 'B'], ['jn', '3:34', 'no da el Espíritu por medida', 'C']],
      com: [
        ['A', 'Los discípulos de Juan estaban preocupados porque todos se iban con Jesús. Juan respondió con una imagen de boda: él no era el esposo, sino el amigo del esposo, que se alegra al oír su voz. La esposa pertenece a Cristo.'],
        ['B', '«Es necesario que él crezca, pero que yo mengüe». Es una de las frases más humildes de la Biblia. Juan entendió su papel: preparar el camino y apartarse. Todo ministerio verdadero apunta a Cristo y no a sí mismo.'],
        ['C', 'Dios no dio el Espíritu a Jesús por medida, sino en plenitud. El que tiene el Espíritu sin medida es el que bautiza con el Espíritu Santo (Jn 1:33). Lo que Cristo recibió en plenitud, lo derrama sobre los que creen en él.']
      ],
      conc: ['Is 42:1', 'Is 61:1', 'Hch 10:38', 'Jn 1:33'],
      lugar: { vista: 'israel', lugares: ['enon', 'betabara', 'jerusalen'] }, cuando: { etapa: 'judea', fecha: 'c. 30 d.C.' },
      pensar: '«Es necesario que él crezca, pero que yo mengüe» (Jn 3:30). ¿En qué área de tu vida o tu servicio necesitas menguar para que Cristo crezca?' },

    { id: 'juan-carcel', sec: 's2', t: 'Herodes encierra a Juan en la cárcel', sim: ['⚔️'], refs: { lc: '3:19-20' },
      marcas: [['lc', '3:19', 'Herodías, mujer de Felipe su hermano', 'A'], ['lc', '3:20', 'encerró a Juan en la cárcel', 'B']],
      com: [
        ['A', 'Herodes Antipas, tetrarca de Galilea y Perea, se había casado con Herodías, la mujer de su hermano Felipe, algo que la ley de Moisés prohibía (Lv 18:16). Juan lo reprendió públicamente. El profeta no suavizó la palabra de Dios ante el poder.'],
        ['B', 'Según el historiador Josefo, Juan fue encarcelado en la fortaleza de Maqueronte, al este del mar Muerto. Lucas adelanta aquí el encarcelamiento para cerrar la historia de Juan antes de comenzar el ministerio de Jesús. Su muerte se narra en el pasaje 90.']
      ],
      conc: ['Lv 18:16', 'Mt 14:3-5', 'Mr 6:17-20'],
      lugar: { vista: 'israel', lugares: ['maqueronte', 'r-galilea', 'perea'] }, cuando: { etapa: 'judea', fecha: 'c. 30 d.C.' },
      pensar: 'Juan reprendió el pecado del gobernante aunque le costó la libertad (Lc 3:19-20). ¿Tienes el valor de decir la verdad aunque te cueste?' },

    { id: 'samaritana', sec: 's2', t: 'Jesús habla con una mujer junto a un pozo', sim: ['🕊️', '👑'], refs: { jn: '4:1-26' },
      marcas: [['jn', '4:9', 'judíos y samaritanos no se tratan entre sí', 'A'], ['jn', '4:14', 'una fuente de agua que salte para vida eterna', 'B'], ['jn', '4:24', 'en espíritu y en verdad', 'C'], ['jn', '4:26', 'Yo soy, el que habla contigo', 'D']],
      com: [
        ['A', 'Jesús cruzó tres barreras al hablar con esta mujer: era samaritana, enemiga de los judíos desde los tiempos del exilio; era mujer, y un maestro no hablaba a solas con una mujer en público; y tenía una vida moral quebrada. Jesús «le era necesario pasar por Samaria» (4:4): tenía una cita con ella.'],
        ['B', 'Jesús ofrece agua viva, que sacia para siempre. En Juan 7:38-39 explica que se refería al Espíritu que recibirían los que creyesen en él. El Espíritu no es un pozo del que hay que sacar con esfuerzo, sino una fuente que brota desde adentro.'],
        ['C', 'La mujer quiso desviar la conversación a una discusión religiosa: ¿Gerizim o Jerusalén? Jesús anunció que la adoración verdadera no depende de un lugar, sino de adorar al Padre en espíritu y en verdad. Dios busca adoradores así.'],
        ['D', 'A una samaritana despreciada, Jesús le reveló con toda claridad que él era el Mesías: «Yo soy, el que habla contigo». En griego, «Yo soy» recuerda el nombre de Dios revelado a Moisés (Éx 3:14).']
      ],
      conc: ['2 R 17:24-41', 'Is 12:3', 'Jn 7:37-39', 'Éx 3:14'],
      lugar: { vista: 'israel', lugares: ['betabara', 'sicar', 'cana'], trazos: ['jesus-samaria'] }, cuando: { etapa: 'judea', fecha: 'c. 30 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'is', cv: '12:3', nombre: 'Isaías 12:3', en: 'Juan 4:14' }],
      pensar: 'Jesús ofreció agua viva a una mujer que todos rechazaban (Jn 4:10). ¿Estás bebiendo de esa fuente, o sigues buscando agua donde no sacia?',
      ir: [{ t: 'El exilio: el origen de los samaritanos', a: '../../exilio/' }] },

    { id: 'cosecha', sec: 's2', t: 'Jesús habla de la cosecha espiritual', sim: ['📖'], refs: { jn: '4:27-38' },
      marcas: [['jn', '4:29', 'Venid, ved a un hombre', 'A'], ['jn', '4:34', 'Mi comida es que haga la voluntad del que me envió', 'B'], ['jn', '4:35', 'ya están blancos para la siega', 'C']],
      com: [
        ['A', 'La mujer dejó su cántaro y corrió a la ciudad. La que evitaba a la gente se convirtió en la primera evangelista de Samaria. Su mensaje era sencillo: «Venid, ved».'],
        ['B', 'Mientras los discípulos se preocupaban por la comida, Jesús hablaba de otro alimento: hacer la voluntad del Padre y acabar su obra. Lo que sostiene al siervo de Dios es cumplir su propósito.'],
        ['C', 'Los campos estaban verdes, pero Jesús veía a los samaritanos que venían por el camino: la cosecha espiritual ya estaba lista. Uno siembra y otro siega; todos trabajan para el mismo Señor y se alegran juntos.']
      ],
      conc: ['Mt 9:37-38', '1 Co 3:6-9', 'Gá 6:9'],
      lugar: { vista: 'israel', lugares: ['sicar'] }, cuando: { etapa: 'judea', fecha: 'c. 30 d.C.' },
      pensar: 'Jesús dijo: «Alzad vuestros ojos y mirad los campos» (Jn 4:35). ¿A quiénes de tu entorno ves como campos listos para la cosecha?' },

    { id: 'samaritanos-creen', sec: 's2', t: 'Muchos samaritanos creen en Jesús', sim: ['👑'], refs: { jn: '4:39-42' },
      marcas: [['jn', '4:41', 'creyeron muchos más por la palabra de él', 'A'], ['jn', '4:42', 'el Salvador del mundo', 'B']],
      com: [
        ['A', 'Muchos creyeron primero por el testimonio de la mujer, y muchos más cuando escucharon a Jesús mismo. El testimonio personal abre la puerta; la palabra de Cristo afirma la fe.'],
        ['B', 'Los samaritanos llegaron a una confesión que los propios judíos tardaron en comprender: Jesús es el Salvador del mundo, no solo de Israel. Anticipa el avance del evangelio en Samaria en Hechos 8.']
      ],
      conc: ['Hch 8:4-8, 14-17', '1 Jn 4:14'],
      lugar: { vista: 'israel', lugares: ['sicar'] }, cuando: { etapa: 'judea', fecha: 'c. 30 d.C.' },
      pensar: 'Los samaritanos dijeron: «nosotros mismos hemos oído» (Jn 4:42). ¿Tu fe se apoya en lo que otros te han contado o en tu propio encuentro con Cristo?',
      ir: [{ t: 'Hechos: el evangelio en Samaria', a: '../../hechos/' }] },

    { id: 'predica-galilea', sec: 's2', t: 'Jesús predica en Galilea', sim: ['📖', '🕊️', '👑'], refs: { mt: '4:12-17', mr: '1:14-15', lc: '4:14-15', jn: '4:43-45' },
      excl: [['lc', '4:14', 'en el poder del Espíritu', 'en el poder del Espíritu'], ['mt', '4:13'], ['mt', '4:14'], ['mt', '4:15'], ['mt', '4:16']],
      marcas: [['lc', '4:14', 'en el poder del Espíritu', 'A'], ['mt', '4:16', 'vio gran luz', 'B'], ['mr', '1:15', 'arrepentíos, y creed en el evangelio', 'C']],
      com: [
        ['A', 'Lucas destaca que Jesús volvió a Galilea «en el poder del Espíritu». Venía lleno del Espíritu desde el Jordán (Lc 4:1) y había vencido en el desierto. Su ministerio fue un ministerio en el poder del Espíritu Santo, el mismo poder que prometió a sus discípulos (Hch 1:8).'],
        ['B', 'Mateo ve en el ministerio de Jesús en Galilea el cumplimiento de Isaías 9: la región de Zabulón y Neftalí, la primera en sufrir la invasión asiria, sería la primera en ver la luz del Mesías. Jesús se estableció en Capernaum.'],
        ['C', 'El mensaje central de Jesús: el tiempo se ha cumplido, el reino de Dios se ha acercado; arrepentíos y creed en el evangelio. Arrepentimiento y fe son las dos caras de la respuesta al evangelio.']
      ],
      conc: ['Is 9:1-2', 'Hch 1:8', 'Hch 10:38', 'Gá 4:4'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'nazaret', 'mar-galilea', 'r-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '9:1-2', nombre: 'Isaías 9:1-2', en: 'Mateo 4:14-16' }],
      pensar: 'Jesús ministró «en el poder del Espíritu» (Lc 4:14). ¿Dependes de ese mismo poder en tu vida y tu servicio?' },

    { id: 'hijo-funcionario', sec: 's2', t: 'Jesús sana al hijo de un oficial del rey', sim: ['🙌'], refs: { jn: '4:46-54' },
      marcas: [['jn', '4:48', 'Si no viereis señales y prodigios', 'A'], ['jn', '4:50', 'el hombre creyó la palabra que Jesús le dijo', 'B'], ['jn', '4:53', 'creyó él con toda su casa', 'C']],
      com: [
        ['A', 'Un oficial del rey Herodes bajó de Capernaum a Caná, unos 30 kilómetros, para rogar por su hijo moribundo. Jesús probó su fe: ¿buscaba solo una señal, o confiaba en él?'],
        ['B', 'Jesús no fue a su casa; solo le dio una palabra: «Ve, tu hijo vive». El hombre creyó la palabra antes de ver el resultado. La sanidad divina no depende de la distancia, sino de la autoridad de la palabra de Cristo.'],
        ['C', 'A la misma hora en que Jesús habló, el niño fue sanado. El milagro llevó a toda la familia a creer. Esta fue la segunda señal de Jesús en Caná.']
      ],
      conc: ['Sal 107:20', 'Mt 8:8', 'Hch 16:31'],
      lugar: { vista: 'galilea', lugares: ['cana', 'capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      pensar: 'El oficial creyó la palabra de Jesús antes de ver el milagro (Jn 4:50). ¿Qué promesa de Dios estás llamado a creer hoy, aunque todavía no veas el resultado?' },

    { id: 'nazaret-rechazo', sec: 's2', t: 'Rechazan a Jesús en Nazaret', sim: ['🕊️', '👑', '⚔️'], refs: { mt: '13:53-58', mr: '6:1-6', lc: '4:16-30' },
      excl: [['lc', '4:17'], ['lc', '4:18'], ['lc', '4:19'], ['lc', '4:20'], ['lc', '4:21']],
      marcas: [['lc', '4:18', 'El Espíritu del Señor está sobre mí', 'A'], ['lc', '4:21', 'Hoy se ha cumplido esta Escritura', 'B'], ['mr', '6:5', 'no pudo hacer allí ningún milagro', 'C']],
      com: [
        ['A', 'En la sinagoga de su pueblo, Jesús leyó Isaías 61: «El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres». Es el programa de su ministerio: predicar, sanar, liberar y proclamar el año de gracia. Todo, por la unción del Espíritu Santo.'],
        ['B', 'Jesús cerró el libro antes de leer «el día de venganza del Dios nuestro» (Is 61:2) y declaró: «Hoy se ha cumplido esta Escritura». Su primera venida trajo el año de la gracia; el día de la venganza corresponde a su segunda venida.'],
        ['C', 'Los de Nazaret lo conocían como el hijo del carpintero, y se escandalizaron. Por su incredulidad, Jesús no hizo allí muchos milagros. Lucas añade que intentaron despeñarlo. La incredulidad cierra la puerta a lo que Dios quiere hacer.']
      ],
      conc: ['Is 61:1-2', 'Hch 10:38', '1 R 17:8-16', '2 R 5:1-14'],
      lugar: { vista: 'galilea', lugares: ['nazaret', 'capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '61:1-2', nombre: 'Isaías 61:1-2', en: 'Lucas 4:18-21' }],
      pensar: 'En Nazaret, la familiaridad con Jesús se volvió incredulidad (Mr 6:3-6). ¿Te has acostumbrado tanto a Jesús que ya no esperas que obre?',
      ir: [{ t: 'Los últimos tiempos: el día de venganza', a: '../../escatologia/' }] },

    { id: 'pescadores', sec: 's2', t: 'Cuatro pescadores siguen a Jesús', sim: ['🙌', '📖'], refs: { mt: '4:18-22', mr: '1:16-20', lc: '5:1-11' },
      excl: [['lc', '5:4'], ['lc', '5:5'], ['lc', '5:6'], ['lc', '5:7'], ['lc', '5:8']],
      marcas: [['mt', '4:19', 'pescadores de hombres', 'A'], ['lc', '5:5', 'mas en tu palabra echaré la red', 'B'], ['lc', '5:8', 'Apártate de mí, Señor, porque soy hombre pecador', 'C']],
      com: [
        ['A', 'Pedro, Andrés, Jacobo y Juan ya conocían a Jesús desde el Jordán (Jn 1:35-42). Ahora los llama a dejarlo todo y seguirlo. Jesús no cambia su oficio: lo transforma. Los que pescaban peces pescarán hombres.'],
        ['B', 'Solo Lucas narra la pesca milagrosa. Pedro, pescador experto, había trabajado toda la noche sin resultado. Obedeció a un maestro que no era pescador: «en tu palabra echaré la red». La obediencia a la palabra de Jesús produce lo que la experiencia humana no puede.'],
        ['C', 'Ante el milagro, Pedro no pidió más peces: cayó de rodillas y reconoció su pecado. Ver la gloria de Jesús revela nuestra necesidad. Jesús respondió: «No temas».']
      ],
      conc: ['Jer 16:16', 'Is 6:5', 'Jn 21:1-11'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'mar-galilea', 'betsaida'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      pensar: 'Pedro obedeció aunque no entendía: «en tu palabra echaré la red» (Lc 5:5). ¿Qué te está pidiendo Jesús que hagas en su palabra?' },

    { id: 'espiritu-inmundo', sec: 's2', t: 'Un hombre que tenía un espíritu inmundo', sim: ['😈', '📖'], refs: { mr: '1:21-28', lc: '4:31-37' },
      marcas: [['mr', '1:22', 'como quien tiene autoridad', 'A'], ['mr', '1:24', 'Sé quién eres, el Santo de Dios', 'B'], ['mr', '1:27', 'manda aun a los espíritus inmundos, y le obedecen', 'C']],
      com: [
        ['A', 'En la sinagoga de Capernaum, la gente se admiraba de la enseñanza de Jesús, porque no repetía las opiniones de otros maestros, como los escribas: enseñaba con autoridad propia.'],
        ['B', 'Los demonios reconocen a Jesús y tiemblan ante él (Stg 2:19). Pero Jesús los hace callar: no acepta el testimonio de los espíritus inmundos.'],
        ['C', 'Con una sola palabra, Jesús expulsó al demonio. La liberación de los oprimidos por el diablo fue parte central de su ministerio (Hch 10:38), y Jesús dio la misma autoridad a sus discípulos: «En mi nombre echarán fuera demonios» (Mr 16:17). La iglesia sigue ejerciendo esa autoridad en el nombre de Jesús.']
      ],
      conc: ['Hch 10:38', 'Mr 16:17', 'Lc 10:17-19', 'Stg 2:19'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'mar-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      pensar: 'Los espíritus inmundos obedecían la palabra de Jesús (Mr 1:27). ¿Qué te enseña esto sobre la autoridad que el creyente tiene en el nombre de Jesús?' },

    { id: 'suegra-pedro', sec: 's2', t: 'Jesús sana a la suegra de Pedro y a otros más', sim: ['🙌', '😈'], refs: { mt: '8:14-17', mr: '1:29-34', lc: '4:38-41' },
      excl: [['mt', '8:17']],
      marcas: [['lc', '4:39', 'reprendió a la fiebre', 'A'], ['mt', '8:17', 'El mismo tomó nuestras enfermedades', 'B'], ['lc', '4:40', 'poniendo las manos sobre cada uno de ellos', 'C']],
      com: [
        ['A', 'Lucas, el médico, observa que era «una gran fiebre» y que Jesús la reprendió. La sanidad fue inmediata y completa: la mujer se levantó y los servía. Una sanidad verdadera devuelve a la persona a su vida y a su servicio.'],
        ['B', 'Mateo explica estas sanidades con Isaías 53:4: «El mismo tomó nuestras enfermedades, y llevó nuestras dolencias». El capítulo de la cruz incluye la sanidad. Por eso la sanidad divina es parte del evangelio: está provista en la obra redentora de Cristo y es privilegio de todos los creyentes (Stg 5:14-15; 1 P 2:24).'],
        ['C', 'Al ponerse el sol, terminado el día de reposo, le trajeron a todos los enfermos. Jesús ponía las manos sobre cada uno. No sanaba en masa de manera impersonal: atendía a cada persona.']
      ],
      conc: ['Is 53:4-5', '1 P 2:24', 'Stg 5:14-15', 'Mr 16:18'],
      lugar: { vista: 'galilea', lugares: ['capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '53:4', nombre: 'Isaías 53:4', en: 'Mateo 8:17' }],
      pensar: 'Mateo dice que Jesús tomó nuestras enfermedades (Mt 8:17). ¿Cómo influye esta verdad en tu manera de orar por los enfermos?',
      ir: [{ t: 'Hechos: señales y milagros', a: '../../hechos/' }] },

    { id: 'toda-galilea', sec: 's2', t: 'Jesús predica en toda Galilea', sim: ['🙏', '📖', '🙌'], refs: { mt: '4:23-25', mr: '1:35-39', lc: '4:42-44' },
      excl: [['mr', '1:35']],
      marcas: [['mr', '1:35', 'se fue a un lugar desierto, y allí oraba', 'A'], ['lc', '4:43', 'para esto he sido enviado', 'B'], ['mt', '4:23', 'sanando toda enfermedad y toda dolencia', 'C']],
      com: [
        ['A', 'Después de un día lleno de sanidades, Jesús se levantó muy de mañana, siendo aún muy oscuro, y fue a orar a solas. El poder de su ministerio público nacía de su comunión privada con el Padre.'],
        ['B', 'Todos lo buscaban en Capernaum, pero Jesús no se quedó donde lo aplaudían. Sabía para qué había sido enviado: anunciar el reino de Dios en otras ciudades. La oración le daba claridad sobre su misión.'],
        ['C', 'Mateo resume el ministerio de Jesús en tres verbos: enseñaba, predicaba y sanaba. Su fama se extendió hasta Siria, y le traían enfermos, endemoniados, lunáticos y paralíticos. La predicación del reino iba acompañada de señales.']
      ],
      conc: ['Mr 16:20', 'Hch 10:38', 'Lc 5:16'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'r-galilea', 'mar-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      pensar: 'Jesús se levantaba de madrugada para orar (Mr 1:35). ¿Qué lugar tiene la oración a solas en tu día?' },

    { id: 'leproso', sec: 's2', t: 'Jesús sana a un leproso', sim: ['🙌', '🙏'], refs: { mt: '8:1-4', mr: '1:40-45', lc: '5:12-16' },
      excl: [['mr', '1:41', 'teniendo misericordia de él', 'teniendo misericordia de él'], ['lc', '5:16']],
      marcas: [['mr', '1:41', 'le tocó', 'A'], ['mt', '8:3', 'Quiero', 'B'], ['lc', '5:16', 'se apartaba a lugares desiertos, y oraba', 'C']],
      com: [
        ['A', 'La lepra obligaba a vivir aislado y a gritar «¡Inmundo!» (Lv 13:45-46). Nadie tocaba a un leproso. Jesús, movido a misericordia, extendió la mano y lo tocó. Antes de sanar su cuerpo, sanó su soledad.'],
        ['B', 'El leproso no dudaba del poder de Jesús, sino de su voluntad: «Si quieres, puedes limpiarme». Jesús respondió: «Quiero; sé limpio». Esta respuesta muestra la disposición de Cristo a sanar.'],
        ['C', 'Jesús lo envió al sacerdote, como mandaba la ley, para que fuera restaurado a la comunidad. La fama de Jesús creció, pero él se apartaba a lugares desiertos para orar.']
      ],
      conc: ['Lv 13:45-46', 'Lv 14:1-32', 'He 13:8'],
      lugar: { vista: 'galilea', lugares: ['r-galilea', 'capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      escritura: [{ tipo: 'cita', libro: 'lv', cv: '14:2-4', nombre: 'Levítico 14:2-4', en: 'Mateo 8:4' }],
      pensar: 'Jesús tocó al leproso que nadie tocaba (Mr 1:41). ¿A quién podrías acercarte hoy con la compasión de Cristo?',
      ir: [{ t: 'El sacerdocio en Israel', a: '../../sacerdocio/' }] },

    { id: 'paralitico', sec: 's2', t: 'Jesús sana a un paralítico', sim: ['🙌', '✝️', '⚔️'], refs: { mt: '9:1-8', mr: '2:1-12', lc: '5:17-26' },
      excl: [['mr', '2:3'], ['mr', '2:4'], ['lc', '5:17', 'el poder del Señor estaba con él para sanar', 'el poder del Señor estaba con él para sanar']],
      marcas: [['mr', '2:4', 'descubrieron el techo', 'A'], ['mr', '2:5', 'Al ver Jesús la fe de ellos', 'B'], ['mr', '2:10', 'potestad en la tierra para perdonar pecados', 'C']],
      com: [
        ['A', 'Cuatro amigos llevaron al paralítico, y como no podían entrar por la multitud, abrieron el techo de la casa y lo bajaron. Lucas añade que «el poder del Señor estaba con él para sanar».'],
        ['B', 'Jesús vio la fe de los que lo trajeron. La fe de otros puede llevar a alguien a la presencia de Cristo. La intercesión y el esfuerzo de los amigos tienen valor ante Dios.'],
        ['C', 'Jesús perdonó primero sus pecados, y los escribas pensaron que blasfemaba, porque solo Dios puede perdonar. Jesús demostró su autoridad divina sanando al hombre. La sanidad confirmó el perdón: el Hijo del Hombre tiene autoridad sobre el pecado y sobre la enfermedad.']
      ],
      conc: ['Sal 103:3', 'Is 43:25', 'Stg 5:15'],
      lugar: { vista: 'galilea', lugares: ['capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      pensar: 'Cuatro amigos abrieron un techo para llevar a su amigo a Jesús (Mr 2:4). ¿A quién estás llevando tú a Jesús con tu oración y tu esfuerzo?' },

    { id: 'casa-mateo', sec: 's2', t: 'Jesús come con pecadores en la casa de Mateo', sim: ['✝️', '⚔️'], refs: { mt: '9:9-13', mr: '2:13-17', lc: '5:27-32' },
      excl: [['mt', '9:13', 'Id, pues, y aprended lo que significa: Misericordia quiero, y no sacrificio', 'Misericordia quiero, y no sacrificio']],
      marcas: [['mt', '9:9', 'Sígueme', 'A'], ['mt', '9:12', 'Los sanos no tienen necesidad de médico', 'B'], ['mt', '9:13', 'Misericordia quiero, y no sacrificio', 'C']],
      com: [
        ['A', 'Mateo, también llamado Leví, era publicano: cobraba impuestos para Roma y era despreciado como traidor y ladrón. Jesús lo llamó con una sola palabra, y Mateo lo dejó todo. El que contaba monedas escribiría el primer evangelio.'],
        ['B', 'Mateo hizo un banquete y llamó a sus amigos publicanos y pecadores. Los fariseos criticaron que Jesús comiera con ellos. Jesús respondió que el médico va a los enfermos: él vino a llamar a los pecadores al arrepentimiento.'],
        ['C', 'Solo Mateo registra la cita de Oseas 6:6. Dios prefiere la misericordia a los ritos religiosos sin amor. Los fariseos guardaban las formas, pero despreciaban a los que Dios quería salvar.']
      ],
      conc: ['Os 6:6', 'Lc 19:10', '1 Ti 1:15'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'mar-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      escritura: [{ tipo: 'cita', libro: 'os', cv: '6:6', nombre: 'Oseas 6:6', en: 'Mateo 9:13' }],
      pensar: 'Jesús comió con publicanos y pecadores (Mt 9:10-11). ¿Hay personas a las que evitas porque crees que no merecen el evangelio?' },

    { id: 'ayuno', sec: 's2', t: 'Le preguntan a Jesús sobre el ayuno', sim: ['📖', '🌾', '⚔️'], refs: { mt: '9:14-17', mr: '2:18-22', lc: '5:33-39' },
      excl: [['lc', '5:39']],
      marcas: [['mt', '9:15', 'el esposo les será quitado, y entonces ayunarán', 'A'], ['mt', '9:17', 'echan el vino nuevo en odres nuevos', 'B']],
      com: [
        ['A', 'Los discípulos de Juan y los fariseos ayunaban con frecuencia. Jesús explicó que mientras el esposo estuviera presente era tiempo de fiesta, pero vendría el día en que les sería quitado, y entonces ayunarían. El ayuno sigue siendo parte de la vida de la iglesia (Mt 6:16-18; Hch 13:2-3).'],
        ['B', 'Con dos imágenes, el remiendo nuevo en vestido viejo y el vino nuevo en odres viejos, Jesús enseñó que su mensaje no cabe en las formas religiosas viejas. El vino nuevo del reino, la vida del Espíritu, requiere odres nuevos. Lucas añade que muchos prefieren el vino viejo: la costumbre se resiste a lo nuevo de Dios.']
      ],
      conc: ['Is 62:5', 'Hch 13:2-3', '2 Co 5:17'],
      lugar: { vista: 'galilea', lugares: ['capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 30 d.C.' },
      pensar: 'El vino nuevo necesita odres nuevos (Mt 9:17). ¿Qué costumbres o formas tuyas podrían estar impidiendo que Dios haga algo nuevo?' },

    { id: 'betesda', sec: 's2', t: 'Jesús sana a un paralítico junto al estanque', sim: ['🙌', '⚔️'], refs: { jn: '5:1-18' },
      marcas: [['jn', '5:5', 'treinta y ocho años', 'A'], ['jn', '5:6', '¿Quieres ser sano?', 'B'], ['jn', '5:14', 'no peques más', 'C']],
      com: [
        ['A', 'En el estanque de Betesda, junto a la puerta de las ovejas en Jerusalén, yacía una multitud de enfermos esperando el movimiento del agua. Uno llevaba treinta y ocho años enfermo. La arqueología ha encontrado el estanque, con sus cinco pórticos, como lo describe Juan.'],
        ['B', 'La pregunta de Jesús parece obvia, pero no lo es: después de tantos años, el hombre se había resignado y solo veía obstáculos: «no tengo quien me meta en el estanque». Jesús no lo metió en el agua: le dio una palabra: «Levántate, toma tu lecho, y anda».'],
        ['C', 'Los líderes se preocuparon más por la regla del día de reposo que por el hombre sanado. Jesús lo encontró después en el templo y le advirtió que no pecara más. Y defendió su obra diciendo que trabajaba como su Padre, haciéndose igual a Dios.']
      ],
      conc: ['Neh 3:1', 'Jn 9:1-3', 'Mr 2:27'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: { etapa: 'galilea', fecha: 'Una fiesta, c. 31 d.C.' },
      pensar: 'Jesús le preguntó al paralítico: «¿Quieres ser sano?» (Jn 5:6). ¿Hay algo en tu vida a lo que te has resignado y Jesús quiere cambiar?' },

    { id: 'hijo-de-dios', sec: 's2', t: 'Jesús afirma ser el Hijo de Dios', sim: ['📖', '👑'], refs: { jn: '5:19-30' },
      marcas: [['jn', '5:24', 'ha pasado de muerte a vida', 'A'], ['jn', '5:25', 'los muertos oirán la voz del Hijo de Dios', 'B'], ['jn', '5:29', 'resurrección de vida', 'C']],
      com: [
        ['A', 'Jesús afirma que el Padre le ha dado todo el juicio, y que el que oye su palabra y cree no vendrá a condenación, sino que ya ha pasado de muerte a vida. La vida eterna comienza en el momento de creer.'],
        ['B', 'Hay una resurrección espiritual que ocurre ahora: los muertos en pecado que oyen la voz del Hijo reciben vida (Ef 2:1-5).'],
        ['C', 'Y habrá una resurrección futura de todos los que están en los sepulcros: unos para vida, otros para condenación. Jesús retoma Daniel 12:2. Apocalipsis 20 muestra que entre ambas resurrecciones habrá mil años.']
      ],
      conc: ['Dn 12:2', 'Ef 2:1-5', 'Ap 20:4-6, 11-15'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: { etapa: 'galilea', fecha: 'c. 31 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'dn', cv: '12:2', nombre: 'Daniel 12:2', en: 'Juan 5:28-29' }],
      pensar: 'Jesús dijo que el que cree «ha pasado de muerte a vida» (Jn 5:24). ¿Vives con la seguridad de esa vida que ya comenzó?',
      ir: [{ t: 'Los últimos tiempos: las resurrecciones', a: '../../escatologia/' }, { t: 'Daniel 12', a: '../../daniel/' }] },

    { id: 'testimonios', sec: 's2', t: 'Jesús presenta sus testigos', sim: ['📖', '⚔️', '👑'], refs: { jn: '5:31-47' },
      marcas: [['jn', '5:36', 'las mismas obras que yo hago', 'A'], ['jn', '5:39', 'Escudriñad las Escrituras', 'B'], ['jn', '5:46', 'de mí escribió él', 'C']],
      com: [
        ['A', 'Jesús presenta cuatro testigos de quién es: Juan el Bautista, las obras que el Padre le dio para hacer, el Padre mismo y las Escrituras. Sus milagros no eran espectáculo: eran testimonio de que el Padre lo había enviado.'],
        ['B', 'Los líderes estudiaban las Escrituras pensando que en ellas tenían la vida eterna, pero no querían venir a Cristo, de quien ellas daban testimonio. Se puede conocer mucho la Biblia sin conocer al autor.'],
        ['C', 'Moisés escribió de Cristo: en la promesa de un profeta como él (Dt 18:15), en el cordero de la pascua, en el tabernáculo y los sacrificios. Todo el Antiguo Testamento apunta a Jesús (Lc 24:27).']
      ],
      conc: ['Dt 18:15', 'Lc 24:27, 44', '2 Ti 3:15'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: { etapa: 'galilea', fecha: 'c. 31 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'dt', cv: '18:15', nombre: 'Deuteronomio 18:15', en: 'Juan 5:46' }],
      pensar: 'Jesús dijo que las Escrituras dan testimonio de él (Jn 5:39). ¿Cuando lees la Biblia, buscas encontrarte con Cristo?',
      ir: [{ t: 'El tabernáculo: figura de Cristo', a: '../../tabernaculo/' }] },

    { id: 'espigas', sec: 's2', t: 'Los discípulos arrancan espigas en el día de reposo', sim: ['⚔️', '📖'], refs: { mt: '12:1-8', mr: '2:23-28', lc: '6:1-5' },
      excl: [['mr', '2:27'], ['mt', '12:5'], ['mt', '12:6'], ['mt', '12:7']],
      marcas: [['mt', '12:3', '¿No habéis leído lo que hizo David', 'A'], ['mr', '2:27', 'El día de reposo fue hecho por causa del hombre', 'B'], ['mt', '12:8', 'el Hijo del Hombre es Señor del día de reposo', 'C']],
      com: [
        ['A', 'Arrancar espigas con la mano era permitido (Dt 23:25), pero los fariseos lo consideraban trabajar en el día de reposo. Jesús les recordó que David, con hambre, comió los panes de la proposición que solo podían comer los sacerdotes (1 S 21:1-6).'],
        ['B', 'Solo Marcos registra esta frase: el día de reposo fue hecho para bendición del hombre, no el hombre para el día de reposo. Los fariseos habían convertido el regalo de Dios en una carga.'],
        ['C', 'La declaración más fuerte: el Hijo del Hombre es Señor del día de reposo. Mateo añade que aquí había uno mayor que el templo. Jesús se presenta con autoridad sobre la ley que Dios mismo había dado.']
      ],
      conc: ['1 S 21:1-6', 'Dt 23:25', 'Os 6:6', 'Col 2:16-17'],
      lugar: { vista: 'galilea', lugares: ['r-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 31 d.C.' },
      escritura: [{ tipo: 'cita', libro: '1s', cv: '21:6', nombre: '1 Samuel 21:6', en: 'Mateo 12:3-4' }, { tipo: 'cita', libro: 'os', cv: '6:6', nombre: 'Oseas 6:6', en: 'Mateo 12:7' }],
      pensar: 'El día de reposo fue hecho para el hombre (Mr 2:27). ¿Vives el descanso y la adoración como un regalo de Dios o como una carga?' },

    { id: 'mano-seca', sec: 's2', t: 'Jesús sana la mano de un hombre en el día de reposo', sim: ['🙌', '⚔️'], refs: { mt: '12:9-14', mr: '3:1-6', lc: '6:6-11' },
      excl: [['mr', '3:5', 'mirándolos alrededor con enojo, entristecido por la dureza de sus corazones', 'mirándolos alrededor con enojo, entristecido por la dureza de sus corazones'], ['mt', '12:11'], ['mt', '12:12']],
      marcas: [['mr', '3:4', '¿Es lícito en los días de reposo hacer bien, o hacer mal', 'A'], ['mr', '3:5', 'entristecido por la dureza de sus corazones', 'B'], ['mr', '3:6', 'tomaron consejo con los herodianos', 'C']],
      com: [
        ['A', 'Lo vigilaban para acusarlo. Jesús puso al hombre en medio y preguntó si era lícito hacer bien o mal en el día de reposo. Callaron. Para ellos, una regla valía más que una persona.'],
        ['B', 'Marcos registra la emoción de Jesús: los miró con enojo, entristecido por la dureza de sus corazones. Jesús sintió ira santa ante la indiferencia religiosa frente al sufrimiento. Luego dijo: «Extiende tu mano», y la mano fue restaurada.'],
        ['C', 'El milagro no los llevó a creer. Los fariseos, que despreciaban a los herodianos, se unieron a ellos para planear cómo matar a Jesús. Desde muy temprano se trama la cruz.']
      ],
      conc: ['Ef 4:26', 'Lc 13:15-16', 'Lc 14:5'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'r-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 31 d.C.' },
      pensar: 'Jesús se entristeció por la dureza de los corazones (Mr 3:5). ¿Qué te entristece más: el sufrimiento de las personas o que se rompan tus reglas?' },

    { id: 'multitud-sigue', sec: 's2', t: 'Una gran multitud sigue a Jesús', sim: ['👑', '🙌', '😈'], refs: { mt: '12:15-21', mr: '3:7-12' },
      excl: [['mt', '12:17'], ['mt', '12:18'], ['mt', '12:19'], ['mt', '12:20'], ['mt', '12:21'], ['mr', '3:9']],
      marcas: [['mt', '12:18', 'Pondré mi Espíritu sobre él', 'A'], ['mt', '12:20', 'La caña cascada no quebrará', 'B'], ['mr', '3:11', 'Tú eres el Hijo de Dios', 'C']],
      com: [
        ['A', 'Mateo cita Isaías 42, el primer cántico del Siervo del Señor: el Siervo escogido, en quien Dios pone su Espíritu. Jesús es el Siervo ungido que traerá justicia a las naciones.'],
        ['B', 'El Siervo no aplastará la caña cascada ni apagará el pábilo que humea. Jesús trata con ternura a los quebrantados y a los que tienen una fe débil. No vino a destruir a los débiles, sino a levantarlos.'],
        ['C', 'Venían de Galilea, Judea, Idumea, del otro lado del Jordán y de Tiro y Sidón. Los espíritus inmundos se postraban y gritaban que era el Hijo de Dios, pero Jesús les mandaba que no lo dieran a conocer.']
      ],
      conc: ['Is 42:1-4', 'Mt 11:28-30'],
      lugar: { vista: 'israel', lugares: ['mar-galilea', 'r-galilea', 'tiro-sidon', 'jerusalen', 'perea'] }, cuando: { etapa: 'galilea', fecha: 'c. 31 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '42:1-4', nombre: 'Isaías 42:1-4', en: 'Mateo 12:17-21' }],
      pensar: 'Jesús no quiebra la caña cascada (Mt 12:20). ¿Cómo te consuela saber que Jesús trata con ternura tu debilidad?' }
  ];
  s2.forEach(p => A.pasajes.push(p));
})();

/* ---------- Sección 2 · Tanda 2: pasajes 46 a 70 (los doce, el Sermón del Monte, ministerio en Galilea) ---------- */
(() => {
  const A = window.ARMONIA;
  const G = { vista: 'galilea', lugares: ['capernaum', 'mar-galilea'] };
  const SM = { etapa: 'galilea', fecha: 'c. 31 d.C.' };
  const ps = [
    { id: 'los-doce', sec: 's2', t: 'Jesús elige a los doce apóstoles', sim: ['🙏', '📖'], refs: { mr: '3:13-19', lc: '6:12-16' },
      excl: [['lc', '6:12'], ['mr', '3:14'], ['mr', '3:15']],
      marcas: [['lc', '6:12', 'pasó la noche orando a Dios', 'A'], ['mr', '3:14', 'para que estuviesen con él', 'B'], ['mr', '3:15', 'para echar fuera demonios', 'C']],
      com: [
        ['A', 'Antes de la decisión más importante de su ministerio, Jesús pasó la noche orando. Si el Hijo de Dios oró toda la noche antes de elegir a sus apóstoles, ¡cuánto más necesitamos nosotros orar antes de nuestras decisiones!'],
        ['B', 'Marcos registra el doble propósito del llamado: primero, estar con él; después, ser enviados a predicar. El ministerio nace de la comunión con Cristo, no de la actividad.'],
        ['C', 'Jesús les dio autoridad para sanar enfermedades y echar fuera demonios. La predicación del reino iba acompañada de poder. Entre los doce estaba también Judas Iscariote, el que lo entregó: estar cerca de Jesús no garantiza un corazón fiel.']
      ],
      conc: ['Mt 10:2-4', 'Hch 1:13', 'Hch 1:21-26', 'Mr 16:17-18'],
      lugar: G, cuando: SM,
      pensar: 'Jesús llamó a los doce primero «para que estuviesen con él» (Mr 3:14). ¿Tu servicio a Dios nace de tu tiempo con él?',
      ir: [{ t: 'Hechos de los Apóstoles', a: '../../hechos/' }] },

    { id: 'bienaventuranzas', sec: 's2', t: 'Jesús anuncia las bienaventuranzas', sim: ['📖'], refs: { mt: '5:1-12', lc: '6:17-26' },
      excl: [['lc', '6:24'], ['lc', '6:25'], ['lc', '6:26']],
      marcas: [['mt', '5:3', 'Bienaventurados los pobres en espíritu', 'A'], ['mt', '5:6', 'hambre y sed de justicia', 'B'], ['lc', '6:24', 'Mas ¡ay de vosotros, ricos!', 'C']],
      com: [
        ['A', 'Comienza el Sermón del Monte (Mateo 5 a 7), la enseñanza más extensa de Jesús. «Bienaventurado» significa dichoso, feliz por la bendición de Dios. La primera bienaventuranza es la puerta de todas: el reino es de los que reconocen su pobreza espiritual y su necesidad de Dios.'],
        ['B', 'Las bienaventuranzas describen el carácter del ciudadano del reino: humilde, que llora por el pecado, manso, hambriento de justicia, misericordioso, limpio de corazón, pacificador y dispuesto a sufrir por Cristo. Los que tienen hambre y sed de justicia serán saciados: Dios llena al que lo busca de verdad.'],
        ['C', 'Lucas ubica el sermón en un lugar llano y añade cuatro ayes, que contrastan con las bienaventuranzas: ¡ay de los ricos, de los saciados, de los que ríen y de los alabados por todos! Muchos piensan que Jesús predicó estas enseñanzas varias veces y en distintos lugares.']
      ],
      conc: ['Is 57:15', 'Is 61:1-3', 'Sal 37:11', '1 P 4:14'],
      lugar: G, cuando: SM,
      escritura: [{ tipo: 'alude', libro: 'sal', cv: '37:11', nombre: 'Salmo 37:11', en: 'Mateo 5:5' }],
      pensar: '¿Cuál de las bienaventuranzas (Mt 5:3-10) describe mejor lo que Dios está formando en ti, y cuál te cuesta más?' },

    { id: 'sal-luz', sec: 's2', t: 'Jesús enseña sobre la sal y la luz', sim: ['📖'], refs: { mt: '5:13-16' },
      marcas: [['mt', '5:13', 'Vosotros sois la sal de la tierra', 'A'], ['mt', '5:14', 'Vosotros sois la luz del mundo', 'B'], ['mt', '5:16', 'glorifiquen a vuestro Padre que está en los cielos', 'C']],
      com: [
        ['A', 'La sal preservaba los alimentos de la corrupción y les daba sabor. El creyente detiene la corrupción moral a su alrededor y da sabor a la vida. Pero la sal que pierde su sabor ya no sirve: un cristiano que se iguala al mundo pierde su influencia.'],
        ['B', 'Jesús, que es la luz del mundo (Jn 8:12), dice a sus discípulos: vosotros sois la luz del mundo. Su luz brilla a través de ellos. Una ciudad sobre un monte no se puede esconder, ni se enciende una lámpara para ponerla debajo de un almud.'],
        ['C', 'El propósito de las buenas obras no es que nos admiren a nosotros, sino que los demás glorifiquen al Padre. La luz no llama la atención sobre sí misma, sino que ilumina.']
      ],
      conc: ['Jn 8:12', 'Fil 2:15', 'Ef 5:8-9', 'Col 4:6'],
      lugar: G, cuando: SM,
      pensar: 'Jesús dijo «vosotros sois», no «deberíais ser» (Mt 5:13-14). ¿Dónde te ha puesto Dios para ser sal y luz?' },

    { id: 'la-ley', sec: 's2', t: 'Jesús enseña sobre la ley', sim: ['📖'], refs: { mt: '5:17-20' },
      marcas: [['mt', '5:17', 'no he venido para abrogar, sino para cumplir', 'A'], ['mt', '5:18', 'ni una jota ni una tilde', 'B'], ['mt', '5:20', 'mayor que la de los escribas y fariseos', 'C']],
      com: [
        ['A', 'Jesús no vino a anular la ley y los profetas, sino a cumplirlos: los obedeció perfectamente, cumplió sus profecías y realizó lo que sus sacrificios y figuras anunciaban.'],
        ['B', 'La jota era la letra más pequeña del alfabeto hebreo, y la tilde un pequeño trazo que distingue una letra de otra. La Palabra de Dios es confiable hasta en sus detalles más pequeños.'],
        ['C', 'Los fariseos eran los más estrictos en guardar la ley exterior. Jesús pide una justicia mayor: no más reglas, sino un corazón transformado. Esa justicia no se alcanza por esfuerzo; Dios la da en Cristo (Ro 3:21-22) y el Espíritu la produce en el creyente (Ro 8:4).']
      ],
      conc: ['Ro 3:21-22', 'Ro 8:3-4', 'Ro 10:4', 'Sal 119:89'],
      lugar: G, cuando: SM,
      pensar: 'Jesús pide una justicia mayor que la de los fariseos (Mt 5:20). ¿Tu obediencia es solo exterior, o nace de un corazón transformado?' },

    { id: 'el-odio', sec: 's2', t: 'Jesús enseña acerca del enojo', sim: ['📖'], refs: { mt: '5:21-26' },
      marcas: [['mt', '5:22', 'cualquiera que se enoje contra su hermano', 'A'], ['mt', '5:24', 'reconcíliate primero con tu hermano', 'B']],
      com: [
        ['A', 'Comienzan seis contrastes: «Oísteis que fue dicho… Pero yo os digo». Jesús no contradice la ley, sino la interpretación superficial que se quedaba en el acto externo. El mandamiento «No matarás» también condena el enojo y el desprecio que hay en el corazón.'],
        ['B', 'La reconciliación es más urgente que la ofrenda. Dios no recibe la adoración de quien tiene una cuenta pendiente con su hermano y no hace nada por arreglarla.']
      ],
      conc: ['Éx 20:13', '1 Jn 3:15', 'Ef 4:26-27', 'Ro 12:18'],
      lugar: G, cuando: SM,
      escritura: [{ tipo: 'cita', libro: 'ex', cv: '20:13', nombre: 'Éxodo 20:13', en: 'Mateo 5:21' }],
      pensar: '«Reconcíliate primero con tu hermano» (Mt 5:24). ¿Hay alguien con quien necesitas reconciliarte antes de seguir adorando?' },

    { id: 'adulterio', sec: 's2', t: 'Jesús enseña acerca del adulterio', sim: ['📖'], refs: { mt: '5:27-30' },
      marcas: [['mt', '5:28', 'para codiciarla', 'A'], ['mt', '5:29', 'sácalo, y échalo de ti', 'B']],
      com: [
        ['A', 'La ley prohibía el adulterio. Jesús va a la raíz: el adulterio comienza en el corazón, con la mirada que codicia. La pureza sexual empieza en los pensamientos.'],
        ['B', 'Jesús no manda mutilarse, sino tomar medidas radicales contra el pecado. Lo que nos hace caer, aunque nos parezca tan valioso como un ojo o una mano, debe ser cortado. El pecado es más serio de lo que pensamos.']
      ],
      conc: ['Éx 20:14', 'Job 31:1', 'Pr 4:23', '2 Ti 2:22'],
      lugar: G, cuando: SM,
      escritura: [{ tipo: 'cita', libro: 'ex', cv: '20:14', nombre: 'Éxodo 20:14', en: 'Mateo 5:27' }],
      pensar: 'Jesús llama a tomar medidas radicales contra lo que nos hace caer (Mt 5:29-30). ¿Qué necesitas cortar de tu vida?' },

    { id: 'divorcio-1', sec: 's2', t: 'Jesús enseña acerca del divorcio', sim: ['📖', '👨‍👩‍👧'], refs: { mt: '5:31-32' },
      marcas: [['mt', '5:32', 'a no ser por causa de fornicación', 'A']],
      com: [
        ['A', 'En tiempos de Jesús, algunos maestros permitían el divorcio por cualquier motivo, con solo dar a la mujer un certificado (Dt 24:1). Jesús defiende el matrimonio como un pacto permanente y menciona una sola excepción: la fornicación, la infidelidad sexual. Jesús amplía esta enseñanza en el pasaje 145 (Mt 19).']
      ],
      conc: ['Dt 24:1-4', 'Mal 2:14-16', 'Mt 19:3-9'],
      lugar: G, cuando: SM,
      escritura: [{ tipo: 'cita', libro: 'dt', cv: '24:1', nombre: 'Deuteronomio 24:1', en: 'Mateo 5:31' }],
      pensar: '¿Cómo refleja tu manera de ver el matrimonio la fidelidad de Dios a su pacto?' },

    { id: 'juramento', sec: 's2', t: 'Jesús enseña sobre los juramentos', sim: ['📖'], refs: { mt: '5:33-37' },
      marcas: [['mt', '5:34', 'No juréis en ninguna manera', 'A'], ['mt', '5:37', 'Sí, sí; no, no', 'B']],
      com: [
        ['A', 'Algunos maestros distinguían entre juramentos que obligaban y otros que no, según por qué se juraba: por el cielo, por la tierra, por Jerusalén. Se usaban para engañar con apariencia de verdad.'],
        ['B', 'Jesús pide algo más simple y más profundo: que la palabra del creyente sea tan confiable que no necesite juramento. Un sí que es sí y un no que es no.']
      ],
      conc: ['Lv 19:12', 'Nm 30:2', 'Stg 5:12'],
      lugar: G, cuando: SM,
      escritura: [{ tipo: 'cita', libro: 'lv', cv: '19:12', nombre: 'Levítico 19:12', en: 'Mateo 5:33' }],
      pensar: '¿Pueden confiar los demás en tu palabra sin que necesites jurar?' },

    { id: 'venganza', sec: 's2', t: 'Jesús enseña sobre la venganza', sim: ['📖'], refs: { mt: '5:38-42' },
      marcas: [['mt', '5:38', 'Ojo por ojo, y diente por diente', 'A'], ['mt', '5:39', 'vuélvele también la otra', 'B'], ['mt', '5:41', 've con él dos', 'C']],
      com: [
        ['A', 'La ley del ojo por ojo era para los jueces: ponía un límite justo al castigo e impedía la venganza desproporcionada. No autorizaba la venganza personal.'],
        ['B', 'Una bofetada en la mejilla derecha, con el dorso de la mano, era un insulto. Jesús enseña a no responder con la misma moneda. No se trata de dejar que el mal triunfe, sino de no dejar que nos domine el deseo de venganza.'],
        ['C', 'Un soldado romano podía obligar a un judío a cargar su equipo una milla. Jesús enseña a ir más allá de lo obligado. El amor convierte una imposición en una oportunidad de servir.']
      ],
      conc: ['Éx 21:24', 'Ro 12:17-21', '1 P 2:21-23'],
      lugar: G, cuando: SM,
      escritura: [{ tipo: 'cita', libro: 'ex', cv: '21:24', nombre: 'Éxodo 21:24', en: 'Mateo 5:38' }],
      pensar: 'Jesús enseñó a ir la segunda milla (Mt 5:41). ¿En qué situación concreta puedes responder hoy al mal con el bien?' },

    { id: 'amar-enemigos', sec: 's2', t: 'Jesús enseña a amar a los enemigos', sim: ['📖'], refs: { mt: '5:43-48', lc: '6:27-36' },
      excl: [['lc', '6:34'], ['lc', '6:35'], ['lc', '6:36']],
      marcas: [['mt', '5:44', 'Amad a vuestros enemigos', 'A'], ['mt', '5:45', 'hace salir su sol sobre malos y buenos', 'B'], ['mt', '5:48', 'Sed, pues, vosotros perfectos', 'C']],
      com: [
        ['A', 'La ley mandaba amar al prójimo (Lv 19:18); algunos añadían «y aborrecerás a tu enemigo», aunque la ley no lo dice. Jesús manda amar, bendecir, hacer bien y orar por los enemigos. Es imposible sin el amor que el Espíritu Santo derrama en nuestros corazones (Ro 5:5).'],
        ['B', 'Dios da el sol y la lluvia a buenos y malos. Amar a los enemigos es parecerse al Padre. Amar solo a los que nos aman no tiene nada de especial: también los publicanos lo hacen.'],
        ['C', 'Perfecto significa completo, maduro. Lucas lo expresa así: «Sed, pues, misericordiosos, como también vuestro Padre es misericordioso». La meta del creyente es reflejar el carácter de Dios.']
      ],
      conc: ['Lv 19:18', 'Ro 5:5', 'Ro 12:14, 20', 'Lc 23:34'],
      lugar: G, cuando: SM,
      escritura: [{ tipo: 'cita', libro: 'lv', cv: '19:18', nombre: 'Levítico 19:18', en: 'Mateo 5:43' }],
      pensar: 'Jesús manda orar por los que nos persiguen (Mt 5:44). ¿Por quién necesitas comenzar a orar hoy?' },

    { id: 'dar', sec: 's2', t: 'Jesús enseña acerca de dar a los necesitados', sim: ['📖'], refs: { mt: '6:1-4' },
      marcas: [['mt', '6:1', 'para ser vistos de ellos', 'A'], ['mt', '6:3', 'no sepa tu izquierda lo que hace tu derecha', 'B']],
      com: [
        ['A', 'Jesús pasa de la ley a la piedad: la limosna, la oración y el ayuno. En los tres advierte lo mismo: no hacerlo para ser vistos. El que busca el aplauso de los hombres ya tiene su recompensa, y no recibirá la del Padre.'],
        ['B', 'Dar con tanta discreción que ni uno mismo lleve la cuenta. El Padre que ve en lo secreto recompensará en público.']
      ],
      conc: ['Pr 19:17', '2 Co 9:7', 'Hch 20:35'],
      lugar: G, cuando: SM,
      pensar: '¿Das para ayudar o para que te vean? ¿Qué cambiaría si nadie supiera lo que das?' },

    { id: 'oracion', sec: 's2', t: 'Jesús enseña sobre la oración: el Padre nuestro', sim: ['🙏', '📖'], refs: { mt: '6:5-15' },
      marcas: [['mt', '6:6', 'entra en tu aposento', 'A'], ['mt', '6:9', 'Padre nuestro que estás en los cielos', 'B'], ['mt', '6:15', 'si no perdonáis', 'C']],
      com: [
        ['A', 'La oración no es una actuación pública ni una repetición mecánica de palabras. Jesús enseña a orar en lo secreto, a solas con el Padre, que ve en lo secreto. El aposento era el cuarto interior, el más privado de la casa.'],
        ['B', 'El Padre nuestro es un modelo de oración: comienza con Dios (su nombre, su reino, su voluntad) y luego presenta nuestras necesidades (el pan, el perdón, la protección). Orar a Dios como Padre es el privilegio de los que han nacido de nuevo, y el Espíritu nos enseña a clamar «¡Abba, Padre!» (Ro 8:15).'],
        ['C', 'Jesús subraya una petición: el perdón. Quien ha recibido el perdón de Dios debe perdonar. Negarse a perdonar estorba la comunión con el Padre.']
      ],
      conc: ['Lc 11:1-4', 'Ro 8:15, 26', 'Mt 18:21-35', 'Mr 11:25'],
      lugar: G, cuando: SM,
      pensar: 'El Padre nuestro pone primero el nombre, el reino y la voluntad de Dios (Mt 6:9-10). ¿En qué orden pones las cosas cuando oras?' },

    { id: 'el-ayuno', sec: 's2', t: 'Jesús enseña sobre el ayuno', sim: ['📖', '🙏'], refs: { mt: '6:16-18' },
      marcas: [['mt', '6:16', 'Cuando ayunéis', 'A'], ['mt', '6:17', 'unge tu cabeza y lava tu rostro', 'B']],
      com: [
        ['A', 'Jesús dice «cuando ayunéis», no «si ayunáis»: da por sentado que sus discípulos ayunarán. El ayuno acompañado de oración ha sido parte de la vida de la iglesia desde el principio (Hch 13:2-3; 14:23).'],
        ['B', 'Los hipócritas desfiguraban su rostro para que todos supieran que ayunaban. Jesús enseña lo contrario: arreglarse como siempre, para que el ayuno sea entre el creyente y su Padre.']
      ],
      conc: ['Is 58:3-7', 'Hch 13:2-3', 'Hch 14:23'],
      lugar: G, cuando: SM,
      pensar: '¿Qué lugar tiene el ayuno en tu vida de oración?' },

    { id: 'tesoros', sec: 's2', t: 'Jesús enseña acerca de los tesoros', sim: ['📖'], refs: { mt: '6:19-23' },
      marcas: [['mt', '6:20', 'haceos tesoros en el cielo', 'A'], ['mt', '6:21', 'allí estará también vuestro corazón', 'B'], ['mt', '6:22', 'La lámpara del cuerpo es el ojo', 'C']],
      com: [
        ['A', 'Los tesoros de la tierra se deterioran o se pierden: la polilla, el orín y los ladrones. Los tesoros del cielo, invertidos en el reino de Dios, son seguros para siempre.'],
        ['B', 'El corazón sigue al tesoro. Donde ponemos nuestro dinero, nuestro tiempo y nuestras fuerzas, allí está lo que de verdad amamos.'],
        ['C', 'Un ojo «bueno», sencillo, que mira con generosidad y con un solo propósito, llena de luz toda la vida. Un ojo «maligno», codicioso, llena de oscuridad.']
      ],
      conc: ['1 Ti 6:17-19', 'Col 3:1-2', 'Lc 12:33-34'],
      lugar: G, cuando: SM,
      pensar: 'Donde esté tu tesoro, allí estará tu corazón (Mt 6:21). ¿Dónde está tu tesoro?' },

    { id: 'afanes', sec: 's2', t: 'Jesús enseña acerca de la ansiedad', sim: ['📖'], refs: { mt: '6:24-34' },
      marcas: [['mt', '6:24', 'No podéis servir a Dios y a las riquezas', 'A'], ['mt', '6:26', 'Mirad las aves del cielo', 'B'], ['mt', '6:33', 'buscad primeramente el reino de Dios y su justicia', 'C']],
      com: [
        ['A', 'Nadie puede servir a dos señores. Las riquezas, en arameo mamón, se presentan como un amo que compite con Dios por el corazón.'],
        ['B', 'Las aves no siembran ni siegan, y el Padre las alimenta; los lirios no trabajan, y se visten mejor que Salomón. Si Dios cuida así de ellos, ¿cómo no cuidará de sus hijos? La ansiedad es falta de confianza en el Padre.'],
        ['C', 'La respuesta a la ansiedad no es la despreocupación, sino una prioridad: buscar primero el reino de Dios y su justicia. Las demás cosas vendrán por añadidura. Y cada día tiene su propio afán.']
      ],
      conc: ['Fil 4:6-7', '1 P 5:7', 'Sal 37:25', 'Lc 12:22-31'],
      lugar: G, cuando: SM,
      pensar: '«Buscad primeramente el reino de Dios» (Mt 6:33). ¿Qué ocupa el primer lugar en tu agenda y en tus preocupaciones?' },

    { id: 'no-juzgar', sec: 's2', t: 'Jesús enseña acerca de juzgar a otros', sim: ['📖'], refs: { mt: '7:1-6', lc: '6:37-42' },
      excl: [['lc', '6:38'], ['lc', '6:39'], ['lc', '6:40']],
      marcas: [['mt', '7:1', 'No juzguéis, para que no seáis juzgados', 'A'], ['mt', '7:3', 'la viga que está en tu propio ojo', 'B'], ['lc', '6:38', 'Dad, y se os dará', 'C']],
      com: [
        ['A', 'Jesús no prohíbe distinguir el bien del mal; unos versos después manda reconocer a los falsos profetas por sus frutos. Lo que prohíbe es el juicio hipócrita y sin misericordia, que condena a los demás sin mirarse a sí mismo.'],
        ['B', 'La imagen es exagerada a propósito: alguien con una viga en el ojo quiere sacar una paja del ojo de su hermano. Primero hay que dejar que Dios trate nuestro pecado; entonces podremos ayudar a otros con humildad.'],
        ['C', 'Lucas añade una promesa: «Dad, y se os dará; medida buena, apretada, remecida y rebosando». Con la misma medida con que medimos a otros, en el juicio y en la generosidad, seremos medidos.']
      ],
      conc: ['Ro 2:1', 'Gá 6:1', 'Stg 4:11-12', '2 Co 9:6'],
      lugar: G, cuando: SM,
      pensar: 'Jesús pide sacar primero la viga del propio ojo (Mt 7:5). ¿Qué necesitas que Dios trate en ti antes de corregir a otros?' },

    { id: 'pedir', sec: 's2', t: 'Jesús habla de pedir, buscar y llamar', sim: ['🙏', '📖'], refs: { mt: '7:7-12' },
      marcas: [['mt', '7:7', 'Pedid, y se os dará', 'A'], ['mt', '7:11', '¿cuánto más vuestro Padre que está en los cielos dará buenas cosas', 'B'], ['mt', '7:12', 'así también haced vosotros con ellos', 'C']],
      com: [
        ['A', 'Pedir, buscar y llamar: tres verbos que en griego indican una acción continua. Jesús anima a perseverar en la oración. El Padre responde.'],
        ['B', 'Si un padre terrenal, siendo malo, da buenas cosas a sus hijos, ¡cuánto más el Padre celestial! En el pasaje paralelo, Lucas dice: «¿cuánto más vuestro Padre celestial dará el Espíritu Santo a los que se lo pidan?» (Lc 11:13). El don del Espíritu es el mejor regalo que el Padre da a quienes lo piden.'],
        ['C', 'La regla de oro resume la ley y los profetas: tratar a los demás como queremos ser tratados.']
      ],
      conc: ['Lc 11:9-13', 'Stg 1:5-6', 'Stg 4:2-3', 'Ro 13:8-10'],
      lugar: G, cuando: SM,
      pensar: 'El Padre da el Espíritu Santo a los que se lo piden (Lc 11:13). ¿Has pedido con perseverancia la plenitud del Espíritu?',
      ir: [{ t: 'Hechos: la promesa del Espíritu', a: '../../hechos/' }] },

    { id: 'puerta-estrecha-1', sec: 's2', t: 'Jesús enseña acerca de la puerta estrecha', sim: ['📖'], refs: { mt: '7:13-14' },
      marcas: [['mt', '7:13', 'Entrad por la puerta estrecha', 'A'], ['mt', '7:14', 'pocos son los que la hallan', 'B']],
      com: [
        ['A', 'Hay dos puertas y dos caminos. La puerta ancha y el camino espacioso son fáciles y populares, pero llevan a la perdición. La puerta estrecha y el camino angosto llevan a la vida. Jesús mismo es la puerta (Jn 10:9).'],
        ['B', 'El evangelio no es una opción entre muchas: es una decisión entre dos destinos. Seguir a Cristo implica renunciar a lo que el mundo ofrece, pero conduce a la vida eterna.']
      ],
      conc: ['Jn 10:9', 'Jn 14:6', 'Lc 13:23-24', 'Dt 30:19'],
      lugar: G, cuando: SM,
      pensar: '¿Por cuál de los dos caminos estás andando, y qué lo demuestra?' },

    { id: 'frutos', sec: 's2', t: 'Jesús enseña acerca de los frutos', sim: ['📖'], refs: { mt: '7:15-20', lc: '6:43-45' },
      excl: [['lc', '6:45']],
      marcas: [['mt', '7:15', 'Guardaos de los falsos profetas', 'A'], ['mt', '7:16', 'Por sus frutos los conoceréis', 'B'], ['lc', '6:45', 'de la abundancia del corazón habla la boca', 'C']],
      com: [
        ['A', 'Los falsos profetas vienen con vestidos de ovejas: parecen parte del pueblo de Dios, pero por dentro son lobos rapaces. La advertencia es especialmente actual para una iglesia que cree en los dones y en la profecía: todo debe ser examinado (1 Ts 5:20-21; 1 Jn 4:1).'],
        ['B', 'El árbol se conoce por sus frutos: el carácter, la doctrina y la conducta. No basta con los dones o el carisma; el fruto del Espíritu (Gá 5:22-23) muestra quién es de Dios.'],
        ['C', 'Lucas añade que la boca habla de lo que abunda en el corazón. Las palabras revelan lo que hay dentro.']
      ],
      conc: ['1 Jn 4:1', '1 Ts 5:20-21', 'Gá 5:22-23', '2 P 2:1'],
      lugar: G, cuando: SM,
      pensar: '¿Qué fruto ven los demás en tu vida? ¿Qué dicen tus palabras sobre tu corazón (Lc 6:45)?' },

    { id: 'roca-arena', sec: 's2', t: 'Jesús enseña a edificar sobre la roca', sim: ['📖'], refs: { mt: '7:21-29', lc: '6:46-49' },
      excl: [['mt', '7:22'], ['mt', '7:23'], ['mt', '7:28'], ['mt', '7:29']],
      marcas: [['mt', '7:21', 'el que hace la voluntad de mi Padre', 'A'], ['mt', '7:22', '¿no profetizamos en tu nombre', 'B'], ['mt', '7:24', 'edificó su casa sobre la roca', 'C']],
      com: [
        ['A', 'Decir «Señor, Señor» no basta. Entrar en el reino es para los que hacen la voluntad del Padre. La fe verdadera se demuestra en la obediencia.'],
        ['B', 'Una advertencia solemne: algunos profetizaron, echaron demonios e hicieron milagros en el nombre de Jesús, y él les dirá: «Nunca os conocí». Los dones del Espíritu son reales y necesarios, pero no reemplazan una relación personal con Cristo ni una vida de obediencia. Dios mide la vida por el fruto, no solo por los dones.'],
        ['C', 'Las dos casas parecían iguales hasta que llegó la tormenta. La diferencia estaba en el fundamento: oír y hacer, o solo oír. Al terminar el sermón, la gente se admiraba porque Jesús enseñaba con autoridad.']
      ],
      conc: ['Stg 1:22-25', '1 Co 13:1-3', '1 Co 3:11', 'Lc 6:46'],
      lugar: G, cuando: SM,
      pensar: 'Jesús comparó al que oye y no hace con quien edifica sobre la arena (Mt 7:26). ¿Qué enseñanza del Sermón del Monte necesitas poner en práctica?' },

    { id: 'centurion', sec: 's2', t: 'Un centurión romano demuestra su fe', sim: ['🙌'], refs: { mt: '8:5-13', lc: '7:1-10' },
      excl: [['lc', '7:3'], ['lc', '7:4'], ['lc', '7:5'], ['mt', '8:11'], ['mt', '8:12']],
      marcas: [['mt', '8:8', 'solamente dí la palabra', 'A'], ['mt', '8:10', 'ni aun en Israel he hallado tanta fe', 'B'], ['mt', '8:11', 'vendrán muchos del oriente y del occidente', 'C']],
      com: [
        ['A', 'El centurión, oficial romano al mando de unos cien soldados, entendía la autoridad: él daba órdenes y se cumplían. Por eso creyó que Jesús, con una sola palabra, podía sanar a su siervo a distancia. Lucas cuenta que envió a ancianos judíos que hablaron bien de él, porque había edificado la sinagoga.'],
        ['B', 'Jesús se maravilló de su fe. Un gentil, sin las ventajas de Israel, creyó más que muchos del pueblo de Dios. Y el siervo fue sanado en aquella misma hora.'],
        ['C', 'Solo Mateo registra el anuncio de que vendrán muchos de todas las naciones a sentarse con Abraham, Isaac y Jacob en el reino. La fe de este gentil anticipa la iglesia formada por todas las naciones.']
      ],
      conc: ['Sal 107:20', 'Is 2:2-3', 'Hch 10:1-2'],
      lugar: G, cuando: SM,
      pensar: 'El centurión creyó que bastaba una palabra de Jesús (Mt 8:8). ¿Qué situación tuya necesita una sola palabra de Cristo?',
      ir: [{ t: 'El imperio romano', a: '../../imperio-romano/' }] },

    { id: 'nain', sec: 's2', t: 'Jesús resucita al hijo de la viuda de Naín', sim: ['🙌'], refs: { lc: '7:11-17' },
      marcas: [['lc', '7:13', 'se compadeció de ella', 'A'], ['lc', '7:14', 'Joven, a ti te digo, levántate', 'B'], ['lc', '7:16', 'Dios ha visitado a su pueblo', 'C']],
      com: [
        ['A', 'Una viuda llevaba a enterrar a su único hijo. Sin esposo ni hijo, quedaba sola y sin sustento. Nadie le pidió nada a Jesús: él se compadeció y tomó la iniciativa. Lucas lo llama «el Señor», y es la primera vez que lo hace en su narración.'],
        ['B', 'Jesús tocó el féretro, algo que hacía impuro a un judío, y habló al muerto. El joven se sentó y comenzó a hablar. Es la primera de las tres resurrecciones que hizo Jesús, junto con la hija de Jairo y Lázaro.'],
        ['C', 'Naín estaba cerca de Sunem, donde Eliseo resucitó al hijo de otra mujer (2 R 4). La gente reconoció que un gran profeta se había levantado: Dios había visitado a su pueblo.']
      ],
      conc: ['1 R 17:17-24', '2 R 4:32-37', 'Jn 11:25'],
      lugar: { vista: 'galilea', lugares: ['nain', 'nazaret', 'capernaum'] }, cuando: SM,
      escritura: [{ tipo: 'alude', libro: '1r', cv: '17:23', nombre: '1 Reyes 17:23', en: 'Lucas 7:15' }],
      pensar: 'Jesús se compadeció de la viuda sin que ella le pidiera nada (Lc 7:13). ¿Qué te dice esto del corazón de Jesús hacia los que sufren?' },

    { id: 'duda-juan', sec: 's2', t: 'Jesús responde a la pregunta de Juan', sim: ['👑', '🙌', '📖'], refs: { mt: '11:1-19', lc: '7:18-35' },
      excl: [['lc', '7:21'], ['lc', '7:29'], ['lc', '7:30'], ['mt', '11:12'], ['mt', '11:13'], ['mt', '11:14'], ['mt', '11:15']],
      marcas: [['mt', '11:3', '¿Eres tú aquel que había de venir', 'A'], ['mt', '11:5', 'Los ciegos ven', 'B'], ['mt', '11:11', 'el más pequeño en el reino de los cielos', 'C']],
      com: [
        ['A', 'Juan estaba en la cárcel y envió a preguntar si Jesús era el Mesías. El hombre que lo había señalado como el Cordero de Dios ahora dudaba. Quizá esperaba un Mesías que trajera juicio de inmediato. La duda no lo descalificó: Jesús lo llamó el mayor de los nacidos de mujer.'],
        ['B', 'Jesús no respondió con un argumento, sino con hechos que cumplían Isaías 35 y 61: los ciegos ven, los cojos andan, los leprosos son limpiados, los sordos oyen, los muertos resucitan y a los pobres se les anuncia el evangelio. Las señales confirman que Jesús es el Mesías.'],
        ['C', 'Juan fue el mayor de los profetas, el mensajero anunciado por Malaquías. Pero el más pequeño en el reino es mayor que él, porque vive en la era del cumplimiento, del nuevo pacto y del Espíritu derramado.']
      ],
      conc: ['Is 35:5-6', 'Is 61:1', 'Mal 3:1', 'Mal 4:5'],
      lugar: { vista: 'israel', lugares: ['maqueronte', 'capernaum', 'r-galilea'] }, cuando: SM,
      escritura: [{ tipo: 'cumple', libro: 'mal', cv: '3:1', nombre: 'Malaquías 3:1', en: 'Mateo 11:10' }, { tipo: 'alude', libro: 'is', cv: '35:5-6', nombre: 'Isaías 35:5-6', en: 'Mateo 11:5' }],
      pensar: 'Juan llevó su duda a Jesús (Mt 11:2-3). ¿Qué haces con tus dudas: las escondes o las llevas a Cristo?' },

    { id: 'pecadora', sec: 's2', t: 'Una mujer pecadora unge los pies de Jesús', sim: ['✝️'], refs: { lc: '7:36-50' },
      marcas: [['lc', '7:38', 'los enjugaba con sus cabellos', 'A'], ['lc', '7:47', 'porque amó mucho', 'B'], ['lc', '7:50', 'Tu fe te ha salvado, vé en paz', 'C']],
      com: [
        ['A', 'En casa de Simón el fariseo, una mujer conocida como pecadora entró, lloró a los pies de Jesús, los secó con sus cabellos, los besó y los ungió con perfume. Simón pensó que si Jesús fuera profeta sabría quién era ella.'],
        ['B', 'Jesús contó la historia de dos deudores perdonados y comparó a Simón con la mujer: él no le dio agua, ni beso, ni aceite; ella hizo todo eso. El que mucho ha sido perdonado, mucho ama. El amor no es la causa del perdón, sino su evidencia.'],
        ['C', 'Jesús le declaró perdonados sus pecados y le dijo que su fe la había salvado. Los invitados se preguntaban quién era este que perdona pecados. Esta unción es distinta de la de María en Betania, en la última semana (Jn 12:1-8).']
      ],
      conc: ['Is 1:18', 'Ro 5:20', 'Jn 12:1-8'],
      lugar: G, cuando: SM,
      pensar: 'El que mucho ha sido perdonado, mucho ama (Lc 7:47). ¿Cuánto te ha perdonado Dios, y cómo lo demuestras?' },

    { id: 'mujeres', sec: 's2', t: 'Mujeres acompañan a Jesús y a los discípulos', sim: ['📖'], refs: { lc: '8:1-3' },
      marcas: [['lc', '8:2', 'de la que habían salido siete demonios', 'A'], ['lc', '8:3', 'le servían de sus bienes', 'B']],
      com: [
        ['A', 'Entre las que seguían a Jesús había mujeres sanadas y liberadas, como María Magdalena, de quien habían salido siete demonios. Ella estaría al pie de la cruz y sería la primera en ver al Señor resucitado (Jn 20:11-18).'],
        ['B', 'Juana, mujer de un alto funcionario de Herodes, Susana y otras sostenían el ministerio de Jesús con sus bienes. Lucas destaca el lugar de las mujeres en el ministerio de Jesús, algo inusual en su tiempo.']
      ],
      conc: ['Mr 15:40-41', 'Lc 24:10', 'Jn 20:11-18', 'Hch 1:14'],
      lugar: G, cuando: SM,
      pensar: 'Estas mujeres servían a Jesús con lo que tenían (Lc 8:3). ¿Cómo estás sirviendo a Cristo con tus recursos y tus dones?' }
  ];
  ps.forEach(p => { delete p._; A.pasajes.push(p); });
})();

/* ---------- Sección 2 · Tanda 3: pasajes 71 a 103 (parábolas, milagros, fin del ministerio en Galilea) ---------- */
(() => {
  const A = window.ARMONIA;
  const G = { vista: 'galilea', lugares: ['capernaum', 'mar-galilea'] };
  const C = { etapa: 'galilea', fecha: 'c. 31–32 d.C.' };
  const ps = [
    { id: 'beelzebu', t: 'Acusan a Jesús de echar demonios por Beelzebú', sim: ['😈', '🕊️', '⚔️'], refs: { mt: '12:22-37', mr: '3:20-30' },
      marcas: [['mt', '12:28', 'por el Espíritu de Dios echo fuera los demonios', 'A'], ['mt', '12:29', 'si primero no le ata', 'B'], ['mt', '12:31', 'la blasfemia contra el Espíritu no les será perdonada', 'C'], ['mt', '12:34', 'de la abundancia del corazón habla la boca', 'D']],
      com: [
        ['A', 'Los fariseos no podían negar la liberación del endemoniado ciego y mudo, así que la atribuyeron a Beelzebú, príncipe de los demonios. Jesús mostró lo absurdo: un reino dividido no puede permanecer. Y declaró que echaba fuera los demonios por el Espíritu de Dios: la liberación es señal de que el reino de Dios ha llegado.'],
        ['B', 'Jesús es el más fuerte que entra en la casa del hombre fuerte, lo ata y saquea sus bienes. Satanás es fuerte, pero Cristo es más fuerte. La liberación de los cautivos es fruto de su victoria.'],
        ['C', 'La blasfemia contra el Espíritu Santo no es un pecado de ignorancia ni una palabra dicha en un momento de debilidad. Es atribuir de manera consciente y persistente al diablo la obra evidente del Espíritu Santo, rechazando la luz hasta endurecer el corazón. El que teme haberla cometido muestra con ese mismo temor que su corazón aún es sensible a Dios. Es también una advertencia seria para no llamar «del diablo» lo que el Espíritu hace.'],
        ['D', 'El árbol se conoce por su fruto, y el corazón por las palabras. Jesús advierte que de toda palabra ociosa daremos cuenta en el día del juicio.']
      ],
      conc: ['Is 49:24-25', 'Lc 11:20', 'He 6:4-6', '1 Jn 3:8'],
      lugar: G, cuando: C,
      pensar: 'Los fariseos llamaron obra del diablo a lo que hacía el Espíritu (Mt 12:24, 28). ¿Cómo puedes ser cuidadoso al juzgar las obras del Espíritu Santo?' },

    { id: 'senal-jonas', t: 'Los fariseos piden una señal', sim: ['⚔️', '👑'], refs: { mt: '12:38-45' },
      marcas: [['mt', '12:40', 'tres días y tres noches', 'A'], ['mt', '12:42', 'he aquí más que Salomón en este lugar', 'B'], ['mt', '12:45', 'siete espíritus peores que él', 'C']],
      com: [
        ['A', 'Los fariseos pedían una señal, aunque ya habían visto muchas. Jesús les dio una sola: la de Jonás. Como Jonás estuvo en el vientre del gran pez, el Hijo del Hombre estaría en el corazón de la tierra y resucitaría. La resurrección es la señal definitiva.'],
        ['B', 'Los ninivitas se arrepintieron con la predicación de Jonás, y la reina del Sur vino desde lejos para oír a Salomón. Aquí estaba uno mayor que Jonás y que Salomón, y no lo escuchaban.'],
        ['C', 'Una casa barrida y adornada, pero vacía, vuelve a ser ocupada. La reforma moral sin Cristo deja el corazón expuesto. No basta con sacar el mal: hay que ser llenos del Espíritu Santo.']
      ],
      conc: ['Jon 1:17', 'Jon 3:5', '1 R 10:1-9', 'Ef 5:18'],
      lugar: G, cuando: C,
      escritura: [{ tipo: 'alude', libro: 'jon', cv: '1:17', nombre: 'Jonás 1:17', en: 'Mateo 12:40' }],
      pensar: 'Una casa vacía vuelve a ser ocupada (Mt 12:44-45). ¿Con qué estás llenando tu vida después de que Dios te libró?' },

    { id: 'familia', t: 'Jesús dice quiénes son su verdadera familia', sim: ['👨‍👩‍👧', '📖'], refs: { mt: '12:46-50', mr: '3:31-35', lc: '8:19-21' },
      marcas: [['mt', '12:49', 'He aquí mi madre y mis hermanos', 'A'], ['mt', '12:50', 'todo aquel que hace la voluntad de mi Padre', 'B']],
      com: [
        ['A', 'Su madre y sus hermanos querían hablarle. Marcos cuenta que antes habían dicho que estaba fuera de sí (Mr 3:21). Jesús señaló a sus discípulos y los llamó su familia. Sus hermanos no creían en él todavía (Jn 7:5), pero después de la resurrección estarían en el aposento alto (Hch 1:14).'],
        ['B', 'La familia de Jesús se forma por la obediencia al Padre, no por la sangre. Jesús no desprecia a su madre: en la cruz la encomendará a Juan. Pero el vínculo espiritual es más profundo que el natural.']
      ],
      conc: ['Mr 3:21', 'Jn 7:5', 'Hch 1:14', 'He 2:11'],
      lugar: G, cuando: C,
      pensar: 'Jesús llama familia a los que hacen la voluntad del Padre (Mt 12:50). ¿Cómo vives tu pertenencia a la familia de Dios?' },

    { id: 'sembrador', t: 'Jesús narra la parábola del sembrador', sim: ['🌾'], refs: { mt: '13:1-9', mr: '4:1-9', lc: '8:4-8' },
      marcas: [['mt', '13:3', 'les habló muchas cosas por parábolas', 'A'], ['mt', '13:8', 'cuál a ciento, cuál a sesenta, y cuál a treinta', 'B']],
      com: [
        ['A', 'Desde una barca, Jesús comenzó a enseñar por parábolas: historias de la vida diaria que revelan verdades del reino a los que tienen oídos para oír, y las ocultan a los que no quieren escuchar. La del sembrador es la clave para entender las demás (Mr 4:13).'],
        ['B', 'La semilla es la misma; lo que cambia es la tierra. El sembrador siembra con generosidad, aun donde parece inútil. La buena tierra da fruto abundante, aunque no todos en la misma medida.']
      ],
      conc: ['Is 55:10-11', 'Sal 78:2'],
      lugar: G, cuando: C,
      pensar: '«El que tiene oídos para oír, oiga» (Mt 13:9). ¿Cómo estás escuchando la Palabra?' },

    { id: 'sembrador-explica', t: 'Jesús explica la parábola del sembrador', sim: ['🌾', '📖'], refs: { mt: '13:10-23', mr: '4:10-25', lc: '8:9-18' },
      excl: [['mt', '13:14'], ['mt', '13:15'], ['mt', '13:16'], ['mt', '13:17']],
      marcas: [['mt', '13:11', 'los misterios del reino de los cielos', 'A'], ['mt', '13:19', 'viene el malo, y arrebata lo que fue sembrado', 'B'], ['mt', '13:23', 'el que oye y entiende la palabra', 'C']],
      com: [
        ['A', 'A los discípulos les es dado conocer los misterios del reino; a los que endurecen el corazón se les cumple Isaías 6:9-10: oyen y no entienden. Las parábolas revelan y juzgan al mismo tiempo.'],
        ['B', 'Cuatro clases de tierra: junto al camino, donde el maligno arrebata la palabra; pedregales, donde la fe superficial no resiste la persecución; espinos, donde los afanes y las riquezas ahogan la palabra; y buena tierra, que da fruto.'],
        ['C', 'La buena tierra oye, entiende, retiene la palabra con corazón bueno y da fruto con perseverancia (Lc 8:15). Marcos y Lucas añaden: «Mirad, pues, cómo oís».']
      ],
      conc: ['Is 6:9-10', 'Jn 15:5', 'Stg 1:21-22'],
      lugar: G, cuando: C,
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '6:9-10', nombre: 'Isaías 6:9-10', en: 'Mateo 13:14-15' }],
      pensar: '¿Qué clase de tierra es tu corazón hoy? ¿Qué piedras o espinos necesita quitar Dios?' },

    { id: 'semilla-crece', t: 'La parábola de la semilla que crece', sim: ['🌾'], refs: { mr: '4:26-29' },
      marcas: [['mr', '4:27', 'sin que él sepa cómo', 'A'], ['mr', '4:29', 'se mete la hoz', 'B']],
      com: [
        ['A', 'Solo Marcos registra esta parábola. El sembrador siembra, duerme y se levanta, y la semilla brota y crece sin que él sepa cómo. El crecimiento del reino es obra de Dios, no del esfuerzo humano.'],
        ['B', 'Primero hierba, luego espiga, después grano lleno. El reino crece por etapas, en silencio, hasta la cosecha final.']
      ],
      conc: ['1 Co 3:6-7', 'Stg 5:7', 'Ap 14:15'],
      lugar: G, cuando: C,
      pensar: 'La semilla crece aunque el sembrador no sepa cómo (Mr 4:27). ¿Confías en que Dios hace crecer lo que siembras?' },

    { id: 'cizana', t: 'La parábola del trigo y la cizaña', sim: ['🌾'], refs: { mt: '13:24-30' },
      marcas: [['mt', '13:25', 'sembró cizaña entre el trigo', 'A'], ['mt', '13:30', 'Dejad crecer juntamente lo uno y lo otro hasta la siega', 'B']],
      com: [
        ['A', 'La cizaña es una planta muy parecida al trigo mientras crece; solo se distingue cuando da fruto. El enemigo siembra lo falso entre lo verdadero.'],
        ['B', 'Los siervos querían arrancar la cizaña, pero el señor los detuvo: podían dañar el trigo. La separación será al final, en la siega. Jesús explica esta parábola en el pasaje 80.']
      ],
      conc: ['Mt 13:36-43', 'Ap 14:14-16'],
      lugar: G, cuando: C,
      pensar: 'El juicio final pertenece a Dios (Mt 13:30). ¿Cómo influye esto en tu manera de ver a los demás?' },

    { id: 'mostaza', t: 'La parábola de la semilla de mostaza', sim: ['🌾'], refs: { mt: '13:31-32', mr: '4:30-34' },
      marcas: [['mt', '13:32', 'la más pequeña de todas las semillas', 'A'], ['mr', '4:34', 'a sus discípulos en particular les declaraba todo', 'B']],
      com: [
        ['A', 'La mostaza era proverbial por su pequeña semilla, y la planta podía alcanzar unos tres metros. El reino comenzó con un carpintero y doce discípulos, y crecería hasta cubrir la tierra.'],
        ['B', 'Jesús hablaba a las multitudes en parábolas, según podían oír, y a solas explicaba todo a sus discípulos. La intimidad con Jesús abre el entendimiento.']
      ],
      conc: ['Dn 2:35, 44', 'Ez 17:22-24', 'Zac 4:10'],
      lugar: G, cuando: C,
      escritura: [{ tipo: 'alude', libro: 'dn', cv: '2:35', nombre: 'Daniel 2:35', en: 'Mateo 13:31-32' }],
      pensar: '«No menosprecies el día de las pequeñeces» (Zac 4:10). ¿Qué comienzo pequeño está usando Dios en tu vida?',
      ir: [{ t: 'Daniel: la piedra que llena la tierra', a: '../../daniel/' }] },

    { id: 'levadura', t: 'La parábola de la levadura', sim: ['🌾', '👑'], refs: { mt: '13:33-35' },
      marcas: [['mt', '13:33', 'hasta que todo fue leudado', 'A'], ['mt', '13:35', 'Abriré en parábolas mi boca', 'B']],
      com: [
        ['A', 'Una pequeña cantidad de levadura transforma toda la masa. El reino obra desde dentro, de manera silenciosa, hasta transformar todo.'],
        ['B', 'Mateo ve en las parábolas el cumplimiento del Salmo 78:2: cosas escondidas desde la fundación del mundo se revelan ahora.']
      ],
      conc: ['Sal 78:2', '1 Co 2:7'],
      lugar: G, cuando: C,
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '78:2', nombre: 'Salmo 78:2', en: 'Mateo 13:35' }],
      pensar: '¿Qué área de tu vida necesita ser transformada desde dentro por el reino de Dios?' },

    { id: 'cizana-explica', t: 'Jesús explica la parábola de la cizaña', sim: ['🌾', '📖'], refs: { mt: '13:36-43' },
      marcas: [['mt', '13:38', 'El campo es el mundo', 'A'], ['mt', '13:43', 'los justos resplandecerán como el sol', 'B']],
      com: [
        ['A', 'El sembrador es el Hijo del Hombre; el campo, el mundo; la buena semilla, los hijos del reino; la cizaña, los hijos del malo; el enemigo, el diablo; la siega, el fin del siglo; los segadores, los ángeles.'],
        ['B', 'Al fin del siglo, los ángeles recogerán a los que hacen iniquidad, y los justos resplandecerán como el sol en el reino de su Padre, como anunció Daniel 12:3.']
      ],
      conc: ['Dn 12:3', 'Ap 20:11-15'],
      lugar: G, cuando: C,
      escritura: [{ tipo: 'alude', libro: 'dn', cv: '12:3', nombre: 'Daniel 12:3', en: 'Mateo 13:43' }],
      pensar: 'Los justos resplandecerán como el sol (Mt 13:43). ¿Cómo te anima esta esperanza a vivir hoy?',
      ir: [{ t: 'Los últimos tiempos', a: '../../escatologia/' }] },

    { id: 'tesoro', t: 'La parábola del tesoro escondido', sim: ['🌾'], refs: { mt: '13:44' },
      marcas: [['mt', '13:44', 'gozoso por ello va y vende todo lo que tiene', 'A']],
      com: [['A', 'Un hombre encuentra un tesoro en un campo y, gozoso, vende todo para comprarlo. No lo hace con tristeza, sino con alegría: el reino vale más que todo lo demás.']],
      conc: ['Fil 3:7-8'], lugar: G, cuando: C,
      pensar: '¿Ves el reino de Dios como una pérdida o como un tesoro que vale más que todo?' },

    { id: 'perla', t: 'La parábola de la perla de gran precio', sim: ['🌾'], refs: { mt: '13:45-46' },
      marcas: [['mt', '13:46', 'una perla preciosa', 'A']],
      com: [['A', 'El mercader buscaba buenas perlas, y al hallar una de gran precio vendió todo para comprarla. El tesoro fue encontrado por sorpresa; la perla, después de una búsqueda. De las dos maneras se llega a Cristo, y en ambas el valor del reino justifica dejarlo todo.']],
      conc: ['Pr 3:13-15'], lugar: G, cuando: C,
      pensar: '¿Qué has dejado, o qué te cuesta dejar, por el valor de conocer a Cristo?' },

    { id: 'red', t: 'La parábola de la red', sim: ['🌾'], refs: { mt: '13:47-52' },
      marcas: [['mt', '13:49', 'apartarán a los malos de entre los justos', 'A'], ['mt', '13:52', 'cosas nuevas y cosas viejas', 'B']],
      com: [
        ['A', 'La red recoge toda clase de peces, y al final se separan los buenos de los malos. Como la cizaña, enseña que el juicio vendrá al fin del siglo.'],
        ['B', 'El escriba docto en el reino saca de su tesoro cosas nuevas y viejas: une la enseñanza del Antiguo Testamento con su cumplimiento en Cristo.']
      ],
      conc: ['Mt 25:31-33'], lugar: G, cuando: C,
      pensar: '¿Cómo te ayuda la Escritura antigua a entender lo nuevo que Dios hace en Cristo?' },

    { id: 'tempestad', t: 'Jesús calma la tempestad', sim: ['🙌'], refs: { mt: '8:23-27', mr: '4:35-41', lc: '8:22-25' },
      excl: [['mr', '4:38', 'sobre un cabezal', 'sobre un cabezal']],
      marcas: [['mr', '4:38', '¿no tienes cuidado que perecemos?', 'A'], ['mr', '4:39', 'Calla, enmudece', 'B'], ['mr', '4:41', '¿Quién es éste', 'C']],
      com: [
        ['A', 'El mar de Galilea, rodeado de montes, es conocido por sus tormentas repentinas. Pescadores expertos temían morir, y Jesús dormía. Le reprocharon que no le importara, pero estaban en la barca con él.'],
        ['B', 'Jesús reprendió al viento y al mar como se reprende a un enemigo, y hubo gran bonanza. Luego reprendió la falta de fe de sus discípulos: «¿Por qué estáis así amedrentados?».'],
        ['C', 'Solo Dios manda a los vientos y al mar (Sal 107:29). Los discípulos se preguntaron quién era Jesús. Su miedo a la tormenta se convirtió en temor reverente ante él.']
      ],
      conc: ['Sal 89:9', 'Sal 107:29', 'Is 43:2'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'mar-galilea', 'gadara'] }, cuando: C,
      escritura: [{ tipo: 'alude', libro: 'sal', cv: '107:29', nombre: 'Salmo 107:29', en: 'Marcos 4:39' }],
      pensar: 'Jesús estaba en la barca durante la tormenta (Mr 4:38). ¿Qué tormenta enfrentas, y cómo cambia saber que él está contigo?' },

    { id: 'gadareno', t: 'Jesús libera al endemoniado gadareno', sim: ['😈', '🙌'], refs: { mt: '8:28-34', mr: '5:1-20', lc: '8:26-39' },
      excl: [['mr', '5:3'], ['mr', '5:4'], ['mr', '5:5']],
      marcas: [['mr', '5:9', 'Legión me llamo', 'A'], ['mr', '5:15', 'vestido y en su juicio cabal', 'B'], ['mr', '5:19', 'Vete a tu casa, a los tuyos', 'C']],
      com: [
        ['A', 'Mateo menciona dos endemoniados; Marcos y Lucas se centran en uno, quizá el más conocido. Vivía entre los sepulcros, nadie podía atarlo, y se hería con piedras. Una legión romana tenía unos seis mil soldados: estaba bajo una opresión extrema. Pero los demonios se postraron ante Jesús y le rogaron.'],
        ['B', 'El hombre que nadie podía dominar estaba sentado, vestido y en su juicio cabal. La liberación es completa. Los del pueblo, en cambio, tuvieron miedo y pidieron a Jesús que se fuera: valoraron más sus cerdos que a un hombre libre.'],
        ['C', 'El hombre quiso ir con Jesús, pero Jesús lo envió a contar a los suyos lo que el Señor había hecho. Fue el primer misionero en la Decápolis, región gentil.']
      ],
      conc: ['Lc 4:18', 'Col 2:15', 'Mr 16:17'],
      lugar: { vista: 'galilea', lugares: ['gadara', 'mar-galilea', 'decapolis', 'capernaum'] }, cuando: C,
      pensar: 'Jesús envió al hombre liberado a contar lo que Dios había hecho (Mr 5:19). ¿A quién puedes contarle hoy lo que el Señor hizo contigo?' },

    { id: 'ciegos-mudo', t: 'Jesús sana a dos ciegos y a un mudo', sim: ['🙌', '😈'], refs: { mt: '9:27-34' },
      marcas: [['mt', '9:28', '¿Creéis que puedo hacer esto?', 'A'], ['mt', '9:33', 'echado fuera el demonio, el mudo habló', 'B']],
      com: [
        ['A', 'Los ciegos clamaban «¡Ten misericordia de nosotros, Hijo de David!», un título mesiánico. Jesús les preguntó si creían, les tocó los ojos y dijo: «Conforme a vuestra fe os sea hecho».'],
        ['B', 'Algunas enfermedades tienen origen en la opresión demoníaca, como la mudez de este hombre; otras no. Jesús discernía y actuaba en cada caso. La multitud se maravillaba; los fariseos insistían en su acusación.']
      ],
      conc: ['Is 35:5-6', 'Mt 12:22-24'], lugar: G, cuando: C,
      pensar: 'Jesús preguntó: «¿Creéis que puedo hacer esto?» (Mt 9:28). ¿Qué responderías tú hoy?' },

    { id: 'obreros', t: 'Jesús pide orar por obreros para la cosecha', sim: ['🙏', '📖'], refs: { mt: '9:35-38' },
      marcas: [['mt', '9:36', 'como ovejas que no tienen pastor', 'A'], ['mt', '9:38', 'Rogad, pues, al Señor de la mies', 'B']],
      com: [
        ['A', 'Jesús veía a las multitudes desamparadas y dispersas, y tuvo compasión. Toda misión verdadera nace de la compasión de Cristo.'],
        ['B', 'La solución a la falta de obreros comienza con la oración. Los mismos que oran, en el pasaje siguiente, son enviados.']
      ],
      conc: ['Ez 34:5', 'Lc 10:2', 'Hch 13:2-3'], lugar: G, cuando: C,
      pensar: '¿Estás orando por obreros para la cosecha? ¿Estás dispuesto a ser respuesta a esa oración?' },

    { id: 'envia-doce', t: 'Jesús envía a los doce', sim: ['📖', '🙌', '😈'], refs: { mt: '10:1-16', mr: '6:7-13', lc: '9:1-6' },
      excl: [['mr', '6:13', 'ungían con aceite a muchos enfermos', 'ungían con aceite a muchos enfermos']],
      marcas: [['mt', '10:1', 'les dio autoridad sobre los espíritus inmundos', 'A'], ['mt', '10:8', 'de gracia recibisteis, dad de gracia', 'B'], ['mr', '6:13', 'ungían con aceite a muchos enfermos', 'C']],
      com: [
        ['A', 'Jesús dio a los doce su misma autoridad sobre los demonios y las enfermedades, y los envió de dos en dos a las ovejas perdidas de Israel. La misión de la iglesia es la continuación de la misión de Cristo, con su autoridad.'],
        ['B', 'Sanar, limpiar, resucitar y echar fuera demonios: todo de gracia, sin cobrar. Los dones de Dios no se venden. Debían ir con lo mínimo, confiando en que Dios proveería por medio de los que los recibieran.'],
        ['C', 'Marcos registra que ungían con aceite a los enfermos y los sanaban, práctica que Santiago confirma para la iglesia (Stg 5:14-15).']
      ],
      conc: ['Stg 5:14-15', 'Hch 8:18-20', 'Lc 10:1-9'],
      lugar: { vista: 'galilea', lugares: ['r-galilea', 'capernaum', 'nazaret'] }, cuando: C,
      pensar: '«De gracia recibisteis, dad de gracia» (Mt 10:8). ¿Qué has recibido de Dios que puedes dar a otros?' },

    { id: 'persecucion', t: 'Jesús prepara a los discípulos para la persecución', sim: ['📖', '🕊️'], refs: { mt: '10:17-42' },
      marcas: [['mt', '10:20', 'el Espíritu de vuestro Padre que habla en vosotros', 'A'], ['mt', '10:31', 'más valéis vosotros que muchos pajarillos', 'B'], ['mt', '10:39', 'el que pierde su vida por causa de mí, la hallará', 'C']],
      com: [
        ['A', 'Jesús advierte que sus discípulos serán llevados ante gobernantes y reyes. Pero no deben preocuparse por qué decir: el Espíritu del Padre hablará en ellos. Así ocurrió con Pedro, lleno del Espíritu Santo ante el concilio (Hch 4:8), y con Esteban (Hch 6:10).'],
        ['B', 'No hay que temer a los que matan el cuerpo. El Padre cuida de los pajarillos y tiene contados los cabellos de nuestra cabeza.'],
        ['C', 'Seguir a Cristo cuesta: tomar la cruz, amarlo más que a la familia, perder la vida por él. Pero el que la pierde por su causa, la halla. Y ni un vaso de agua fría dado a un discípulo quedará sin recompensa.']
      ],
      conc: ['Hch 4:8-13', 'Hch 6:10', 'Lc 12:11-12', '2 Ti 3:12'],
      lugar: G, cuando: C,
      pensar: 'El Espíritu del Padre hablará por los suyos (Mt 10:20). ¿Cómo te da valor esta promesa para dar testimonio?',
      ir: [{ t: 'Hechos: el testimonio en la persecución', a: '../../hechos/' }] },

    { id: 'muerte-juan', t: 'Herodes manda matar a Juan el Bautista', sim: ['⚔️'], refs: { mt: '14:1-12', mr: '6:14-29', lc: '9:7-9' },
      marcas: [['mr', '6:20', 'Herodes temía a Juan, sabiendo que era varón justo y santo', 'A'], ['mr', '6:26', 'a causa del juramento', 'B'], ['mt', '14:12', 'fueron y dieron las nuevas a Jesús', 'C']],
      com: [
        ['A', 'Herodes Antipas respetaba a Juan y le gustaba escucharlo, pero no cambió. Escuchar con agrado la Palabra no es lo mismo que obedecerla.'],
        ['B', 'En su cumpleaños, Herodes prometió a la hija de Herodías lo que pidiera. Por orgullo y por no quedar mal ante los invitados, mandó decapitar a Juan. Un juramento imprudente y el temor al qué dirán llevaron al crimen.'],
        ['C', 'Los discípulos de Juan sepultaron su cuerpo y fueron a contárselo a Jesús. Cuando Herodes oyó de los milagros de Jesús, pensó que Juan había resucitado: su conciencia no lo dejaba en paz.']
      ],
      conc: ['Ap 2:10', 'He 11:36-38'],
      lugar: { vista: 'israel', lugares: ['maqueronte', 'r-galilea', 'perea'] }, cuando: C,
      pensar: 'Herodes oía con agrado a Juan, pero no cambió (Mr 6:20). ¿Escuchas la Palabra solo con agrado o con obediencia?' },

    { id: 'cinco-mil', t: 'Jesús alimenta a cinco mil', sim: ['🙌'], refs: { mt: '14:13-21', mr: '6:30-44', lc: '9:10-17', jn: '6:1-15' },
      excl: [['jn', '6:9', 'Aquí está un muchacho', 'cebada'], ['jn', '6:15']],
      marcas: [['mr', '6:34', 'tuvo compasión de ellos', 'A'], ['jn', '6:9', 'cinco panes de cebada y dos pececillos', 'B'], ['mt', '14:20', 'doce cestas llenas', 'C']],
      com: [
        ['A', 'Es el único milagro, aparte de la resurrección, que registran los cuatro evangelios. Jesús buscaba descanso con sus discípulos, pero al ver la multitud tuvo compasión y les enseñó.'],
        ['B', 'Solo Juan cuenta que los panes eran de un muchacho, panes de cebada, el pan de los pobres. Jesús tomó lo poco que había, dio gracias, lo partió y lo multiplicó. Lo que ponemos en sus manos, él lo multiplica.'],
        ['C', 'Comieron cinco mil hombres, sin contar mujeres y niños, y sobraron doce cestas, una por cada discípulo. Juan añade que quisieron hacerlo rey por la fuerza, y Jesús se retiró al monte.']
      ],
      conc: ['2 R 4:42-44', 'Sal 23:1', 'Fil 4:19'],
      lugar: { vista: 'galilea', lugares: ['betsaida', 'mar-galilea', 'capernaum'] }, cuando: { etapa: 'galilea', fecha: 'Cerca de la Pascua, c. 32 d.C.' },
      escritura: [{ tipo: 'alude', libro: '2r', cv: '4:43-44', nombre: '2 Reyes 4:43-44', en: 'Mateo 14:20' }],
      pensar: 'Jesús multiplicó cinco panes y dos peces de un muchacho (Jn 6:9). ¿Qué tienes en tus manos que puedes poner en las de Jesús?' },

    { id: 'sobre-el-agua', t: 'Jesús camina sobre el agua', sim: ['🙌', '🙏'], refs: { mt: '14:22-33', mr: '6:45-52', jn: '6:16-21' },
      excl: [['mt', '14:28'], ['mt', '14:29'], ['mt', '14:30'], ['mt', '14:31']],
      marcas: [['mt', '14:23', 'subió al monte a orar aparte', 'A'], ['mt', '14:27', 'yo soy, no temáis', 'B'], ['mt', '14:30', 'al ver el fuerte viento, tuvo miedo', 'C']],
      com: [
        ['A', 'Después del gran milagro, Jesús despidió a la multitud y subió solo a orar. Mientras oraba, veía a sus discípulos remando con dificultad contra el viento (Mr 6:48).'],
        ['B', 'En la cuarta vigilia, entre las tres y las seis de la mañana, Jesús vino caminando sobre el mar. «Yo soy» recuerda el nombre de Dios. Solo Dios anda sobre las olas del mar (Job 9:8).'],
        ['C', 'Solo Mateo narra que Pedro caminó sobre el agua mientras miraba a Jesús, y comenzó a hundirse al mirar el viento. Jesús lo tomó de la mano. Los de la barca lo adoraron diciendo: «Verdaderamente eres Hijo de Dios».']
      ],
      conc: ['Job 9:8', 'Sal 77:19', 'He 12:2'],
      lugar: { vista: 'galilea', lugares: ['mar-galilea', 'betsaida', 'capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'job', cv: '9:8', nombre: 'Job 9:8', en: 'Mateo 14:25' }],
      pensar: 'Pedro se hundió cuando dejó de mirar a Jesús (Mt 14:30). ¿Hacia dónde está mirando tu fe en este tiempo?' },

    { id: 'pan-de-vida', t: 'Jesús es el pan de vida', sim: ['📖', '👑'], refs: { jn: '6:22-40' },
      marcas: [['jn', '6:27', 'Trabajad, no por la comida que perece', 'A'], ['jn', '6:35', 'Yo soy el pan de vida', 'B'], ['jn', '6:37', 'al que a mí viene, no le echo fuera', 'C']],
      com: [
        ['A', 'La multitud buscó a Jesús en Capernaum, pero porque comieron pan y se saciaron. Jesús los llamó a buscar la comida que permanece para vida eterna. La obra de Dios es creer en el que él ha enviado.'],
        ['B', 'Primero de los siete «Yo soy» del evangelio de Juan. Como el maná en el desierto, Jesús es el pan que descendió del cielo, pero el que lo come no tendrá hambre jamás.'],
        ['C', 'Una promesa para todo el que se acerca: Jesús no rechaza a nadie que viene a él. La voluntad del Padre es que todo el que cree tenga vida eterna, y Jesús lo resucitará en el día postrero.']
      ],
      conc: ['Éx 16:4, 15', 'Sal 78:24', 'Jn 6:47-51'],
      lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      escritura: [{ tipo: 'cita', libro: 'sal', cv: '78:24', nombre: 'Salmo 78:24', en: 'Juan 6:31' }],
      pensar: '«Al que a mí viene, no le echo fuera» (Jn 6:37). ¿Qué te impide acercarte a Jesús con confianza?' },

    { id: 'pan-del-cielo', t: 'Los judíos no aceptan que Jesús venga del cielo', sim: ['📖', '✝️'], refs: { jn: '6:41-59' },
      marcas: [['jn', '6:44', 'si el Padre que me envió no le trajere', 'A'], ['jn', '6:51', 'el pan que yo daré es mi carne', 'B']],
      com: [
        ['A', 'Murmuraban porque conocían a su familia. Jesús explicó que nadie viene a él si el Padre no lo atrae. La salvación comienza en la iniciativa de Dios.'],
        ['B', 'Jesús habla de dar su carne por la vida del mundo: anuncia su muerte en la cruz. Comer su carne y beber su sangre es apropiarse por la fe de su sacrificio y vivir en comunión con él. La Cena del Señor recuerda esa verdad.']
      ],
      conc: ['1 Co 10:16', '1 Co 11:23-26', 'Jn 6:63'], lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '¿Vives cada día alimentándote de Cristo por la fe y por su Palabra?' },

    { id: 'abandonan', t: 'Muchos discípulos abandonan a Jesús', sim: ['📖', '🕊️'], refs: { jn: '6:60-71' },
      marcas: [['jn', '6:63', 'El espíritu es el que da vida', 'A'], ['jn', '6:68', 'Señor, ¿a quién iremos?', 'B']],
      com: [
        ['A', 'Muchos se escandalizaron. Jesús aclaró que no hablaba de comer literalmente su carne: el Espíritu es el que da vida, y sus palabras son espíritu y vida.'],
        ['B', 'Muchos se volvieron atrás. Jesús preguntó a los doce si también querían irse. Pedro respondió con una de las confesiones más hermosas: «Señor, ¿a quién iremos? Tú tienes palabras de vida eterna».']
      ],
      conc: ['2 Co 3:6', 'Hch 5:20'], lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '«Señor, ¿a quién iremos?» (Jn 6:68). Cuando seguir a Jesús es difícil, ¿qué te mantiene a su lado?' },

    { id: 'pureza', t: 'Jesús habla de la pureza interior', sim: ['⚔️', '📖'], refs: { mt: '15:1-20', mr: '7:1-23' },
      marcas: [['mt', '15:6', 'habéis invalidado el mandamiento de Dios por vuestra tradición', 'A'], ['mt', '15:8', 'Este pueblo de labios me honra', 'B'], ['mr', '7:21', 'de dentro, del corazón de los hombres', 'C']],
      com: [
        ['A', 'Los fariseos criticaban que los discípulos no se lavaban las manos según la tradición de los ancianos. Jesús les mostró que ellos anulaban el mandamiento de honrar a los padres con la excusa de una ofrenda (corbán).'],
        ['B', 'Jesús citó Isaías 29:13: honrar a Dios con los labios mientras el corazón está lejos. La religión de apariencias es vana.'],
        ['C', 'Lo que contamina al hombre no entra por la boca, sino que sale del corazón: malos pensamientos, adulterios, homicidios, avaricias, engaño, soberbia. Por eso necesitamos un corazón nuevo.']
      ],
      conc: ['Is 29:13', 'Jer 17:9', 'Ez 36:26', 'Ro 14:17'],
      lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      escritura: [{ tipo: 'cita', libro: 'is', cv: '29:13', nombre: 'Isaías 29:13', en: 'Mateo 15:8-9' }],
      pensar: '¿Hay tradiciones o costumbres que pesan más en tu vida que la Palabra de Dios?' },

    { id: 'confesion-pedro', t: 'Pedro confiesa que Jesús es el Cristo', sim: ['👑'], refs: { mt: '16:13-20', mr: '8:27-30', lc: '9:18-20' },
      excl: [['mt', '16:17'], ['mt', '16:18'], ['mt', '16:19'], ['lc', '9:18', 'mientras Jesús oraba aparte', 'mientras Jesús oraba aparte']],
      marcas: [['mt', '16:16', 'Tú eres el Cristo, el Hijo del Dios viviente', 'A'], ['mt', '16:17', 'no te lo reveló carne ni sangre', 'B'], ['mt', '16:18', 'sobre esta roca edificaré mi iglesia', 'C']],
      com: [
        ['A', 'En Cesarea de Filipo, junto a un santuario del dios Pan y a un templo dedicado al emperador, Jesús preguntó quién decía la gente que era él, y luego: «¿Y vosotros?». Pedro respondió por todos.'],
        ['B', 'Reconocer a Jesús como el Cristo no es fruto de la inteligencia humana: es revelación del Padre.'],
        ['C', 'Solo Mateo registra estas palabras. Pedro (Petros) significa piedra; la roca (petra) sobre la que Jesús edifica su iglesia es Cristo mismo, confesado como el Hijo de Dios (1 Co 3:11; Ef 2:20; 1 P 2:4-8, donde Pedro mismo llama a Cristo la piedra). Pedro usó las llaves al abrir la puerta del evangelio a los judíos en Pentecostés y a los gentiles en casa de Cornelio. Las puertas del Hades no prevalecerán contra la iglesia.']
      ],
      conc: ['1 Co 3:11', 'Ef 2:20', '1 P 2:4-8', 'Hch 2:14-41', 'Hch 10:34-48'],
      lugar: { vista: 'galilea', lugares: ['cesarea-filipo', 'betsaida', 'mar-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: 'Jesús pregunta: «¿Y vosotros, quién decís que soy yo?» (Mt 16:15). ¿Cuál es tu respuesta personal?',
      ir: [{ t: 'Hechos: Pedro abre la puerta del evangelio', a: '../../hechos/' }] },

    { id: 'anuncio-muerte-1', t: 'Jesús anuncia su muerte por primera vez', sim: ['✝️'], refs: { mt: '16:21-28', mr: '8:31-9:1', lc: '9:21-27' },
      marcas: [['mt', '16:21', 'ser muerto, y resucitar al tercer día', 'A'], ['mt', '16:23', '¡Quítate de delante de mí, Satanás!', 'B'], ['mt', '16:24', 'niéguese a sí mismo, y tome su cruz', 'C']],
      com: [
        ['A', 'Desde la confesión de Pedro, Jesús comenzó a anunciar claramente su muerte y su resurrección. El Mesías no venía a tomar un trono político, sino a ir a la cruz.'],
        ['B', 'Pedro, que acababa de recibir revelación del Padre, quiso impedir la cruz. Jesús lo reprendió con dureza: detrás de esa idea estaba la misma tentación del desierto, un reino sin cruz.'],
        ['C', 'Seguir a Jesús significa negarse a uno mismo y tomar la cruz cada día (Lc 9:23). ¿De qué sirve ganar el mundo entero y perder el alma?']
      ],
      conc: ['Is 53:10-12', 'Gá 2:20', 'Fil 3:7-10'],
      lugar: { vista: 'galilea', lugares: ['cesarea-filipo'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '«¿Qué aprovechará al hombre, si ganare todo el mundo, y perdiere su alma?» (Mt 16:26). ¿Qué estás dispuesto a dejar por seguir a Cristo?' },

    { id: 'transfiguracion', t: 'La transfiguración de Jesús', sim: ['👑', '🙏'], refs: { mt: '17:1-13', mr: '9:2-13', lc: '9:28-36' },
      excl: [['lc', '9:29', 'Y entre tanto que oraba', 'oraba'], ['lc', '9:31'], ['lc', '9:32']],
      marcas: [['mt', '17:2', 'resplandeció su rostro como el sol', 'A'], ['lc', '9:31', 'hablaban de su partida', 'B'], ['mt', '17:5', 'a él oíd', 'C']],
      com: [
        ['A', 'Jesús llevó a Pedro, Jacobo y Juan a un monte alto. Mientras oraba, su rostro resplandeció y sus vestidos se volvieron blancos como la luz. Por un momento vieron la gloria que Jesús tenía antes de que el mundo fuese y que mostrará en su segunda venida (2 P 1:16-18).'],
        ['B', 'Moisés, representante de la ley, y Elías, de los profetas, hablaban con Jesús de su «partida», en griego éxodo, que iba a cumplir en Jerusalén. La cruz era el nuevo éxodo.'],
        ['C', 'Pedro quiso hacer tres enramadas, como si los tres fueran iguales. La nube cubrió el monte y el Padre habló: «Este es mi Hijo amado… a él oíd». Moisés y Elías desaparecieron, y quedó solo Jesús.']
      ],
      conc: ['Éx 34:29-35', 'Dt 18:15', '2 P 1:16-18', 'Mal 4:5'],
      lugar: { vista: 'galilea', lugares: ['cesarea-filipo', 'mar-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      escritura: [{ tipo: 'cumple', libro: 'dt', cv: '18:15', nombre: 'Deuteronomio 18:15', en: 'Mateo 17:5' }],
      pensar: 'El Padre dijo: «a él oíd» (Mt 17:5). ¿Qué te está diciendo Jesús que necesitas escuchar?' },

    { id: 'muchacho-endemoniado', t: 'Jesús sana a un muchacho endemoniado', sim: ['😈', '🙌', '🙏'], refs: { mt: '17:14-21', mr: '9:14-29', lc: '9:37-43' },
      excl: [['mr', '9:21'], ['mr', '9:22'], ['mr', '9:23'], ['mr', '9:24']],
      marcas: [['mr', '9:23', 'al que cree todo le es posible', 'A'], ['mr', '9:24', 'ayuda mi incredulidad', 'B'], ['mr', '9:29', 'Este género con nada puede salir, sino con oración y ayuno', 'C']],
      com: [
        ['A', 'Al bajar del monte, Jesús encontró a sus discípulos discutiendo, sin haber podido liberar a un muchacho. El padre dijo «si puedes hacer algo». Jesús le devolvió la pregunta: el problema no era el poder de Jesús, sino la fe.'],
        ['B', 'La respuesta del padre es la oración de muchos: «Creo; ayuda mi incredulidad». Jesús no rechaza una fe débil que se entrega a él con sinceridad.'],
        ['C', 'Los discípulos preguntaron por qué ellos no pudieron. Jesús señaló su poca fe (Mt 17:20) y la necesidad de oración y ayuno. Hay batallas espirituales que requieren una vida de oración constante, no solo una oración en el momento.']
      ],
      conc: ['Ef 6:12', 'Stg 5:16', 'Mt 17:20'],
      lugar: { vista: 'galilea', lugares: ['cesarea-filipo', 'mar-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '«Creo; ayuda mi incredulidad» (Mr 9:24). ¿Qué área de tu fe necesita esa oración hoy?' },

    { id: 'anuncio-muerte-2', t: 'Jesús anuncia su muerte por segunda vez', sim: ['✝️'], refs: { mt: '17:22-23', mr: '9:30-32', lc: '9:44-45' },
      marcas: [['mr', '9:32', 'ellos no entendían esta palabra', 'A']],
      com: [['A', 'Jesús repitió el anuncio de que sería entregado, muerto y resucitado. Los discípulos se entristecieron, pero no entendían y tenían miedo de preguntar. La cruz no encajaba en sus expectativas.']],
      conc: ['Is 53:5-8', 'Lc 24:25-27'],
      lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: 'Los discípulos tenían miedo de preguntar (Mr 9:32). ¿Hay algo de la Palabra que no entiendes y no te has atrevido a preguntar?' },

    { id: 'el-mayor', t: 'Los discípulos discuten quién es el mayor', sim: ['📖'], refs: { mt: '18:1-6', mr: '9:33-37', lc: '9:46-48' },
      marcas: [['mt', '18:3', 'si no os volvéis y os hacéis como niños', 'A'], ['mr', '9:35', 'será el postrero de todos, y el servidor de todos', 'B']],
      com: [
        ['A', 'Mientras Jesús hablaba de su cruz, los discípulos discutían quién era el mayor. Jesús puso a un niño en medio: el reino es de los que dependen de Dios con sencillez y humildad.'],
        ['B', 'En el reino, el que quiere ser primero debe ser el servidor de todos. Y advierte con severidad contra el que hace tropezar a uno de estos pequeños que creen en él.']
      ],
      conc: ['Mt 20:26-28', 'Fil 2:3-8', '1 P 5:5'], lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '¿Buscas ser grande o ser servidor? ¿Qué lo demuestra en tu vida diaria?' },

    { id: 'en-mi-nombre', t: 'El que no es contra nosotros, por nosotros es', sim: ['📖', '😈'], refs: { mr: '9:38-41', lc: '9:49-50' },
      marcas: [['mr', '9:38', 'en tu nombre echaba fuera demonios', 'A'], ['mr', '9:40', 'el que no es contra nosotros, por nosotros es', 'B']],
      com: [
        ['A', 'Juan vio a alguien que echaba fuera demonios en el nombre de Jesús y se lo prohibió porque no era del grupo. El nombre de Jesús tiene poder aun fuera del círculo de los doce.'],
        ['B', 'Jesús corrigió el celo exclusivista de sus discípulos. Dios obra por medio de otros que no son de nuestro grupo; lo importante es que el nombre de Cristo sea honrado.']
      ],
      conc: ['Nm 11:26-29', 'Fil 1:15-18', 'Hch 19:13-16'], lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '¿Te alegras cuando Dios usa a otros fuera de tu grupo o congregación?' }
  ];
  ps.forEach(p => { p.sec = 's2'; A.pasajes.push(p); });
})();

/* ---------- Sección 2 · Tanda 4a: pasajes 104 a 131 (el camino a Jerusalén) ---------- */
(() => {
  const A = window.ARMONIA;
  const V = { vista: 'israel', lugares: ['r-galilea', 'perea', 'jerusalen'] };
  const C = { etapa: 'viaje', fecha: 'c. 32–33 d.C.' };
  const ps = [
    { id: 'costo-seguir', t: 'Jesús habla del costo de seguirle', sim: ['📖'], refs: { mt: '8:18-22', lc: '9:51-62' },
      excl: [['lc', '9:51'], ['lc', '9:52'], ['lc', '9:53'], ['lc', '9:54'], ['lc', '9:55'], ['lc', '9:56'], ['lc', '9:61'], ['lc', '9:62']],
      marcas: [['lc', '9:51', 'afirmó su rostro para ir a Jerusalén', 'A'], ['lc', '9:55', 'Vosotros no sabéis de qué espíritu sois', 'B'], ['lc', '9:58', 'no tiene dónde recostar la cabeza', 'C'], ['lc', '9:62', 'Ninguno que poniendo su mano en el arado mira hacia atrás', 'D']],
      com: [
        ['A', 'Aquí comienza la sección central de Lucas (9:51 a 19:27): el largo camino de Jesús hacia Jerusalén y la cruz. «Afirmó su rostro»: una decisión firme, sabiendo lo que le esperaba.'],
        ['B', 'Una aldea samaritana no lo recibió, y Jacobo y Juan quisieron hacer descender fuego del cielo, como Elías. Jesús los reprendió. El poder de Dios no está para la venganza, sino para salvar.'],
        ['C', 'A uno que se ofreció a seguirlo, Jesús le advirtió que él no tenía ni dónde dormir. Seguir a Cristo no promete comodidad.'],
        ['D', 'Otros pusieron excusas: enterrar primero al padre, despedirse de la familia. Jesús pide una entrega sin reservas: el que pone la mano en el arado y mira hacia atrás no es apto para el reino.']
      ],
      conc: ['2 R 1:10-12', 'Is 50:7', '1 R 19:19-21', 'Fil 3:13-14'],
      lugar: { vista: 'israel', lugares: ['r-galilea', 'sicar', 'jerusalen'], trazos: ['jesus-jerusalen'] }, cuando: C,
      pensar: '¿Hay algo que te hace mirar hacia atrás en tu seguimiento de Cristo (Lc 9:62)?' },

    { id: 'setenta', t: 'Jesús envía a los setenta', sim: ['📖', '🙌'], refs: { mt: '11:20-24', lc: '10:1-16' },
      marcas: [['lc', '10:2', 'La mies a la verdad es mucha', 'A'], ['lc', '10:9', 'sanad a los enfermos', 'B'], ['lc', '10:13', '¡Ay de ti, Corazín!', 'C']],
      com: [
        ['A', 'Además de los doce, Jesús envió a setenta discípulos de dos en dos delante de él. La misión no era solo de los apóstoles: Jesús envió a otros, y los envía hoy.'],
        ['B', 'El encargo era sanar a los enfermos y anunciar que el reino de Dios se había acercado. La predicación del reino y la sanidad van juntas.'],
        ['C', 'Corazín, Betsaida y Capernaum vieron más milagros que nadie, y no se arrepintieron. Su juicio será más severo que el de Tiro, Sidón y Sodoma. A mayor luz recibida, mayor responsabilidad.']
      ],
      conc: ['Nm 11:16-17, 24-25', 'Mt 9:37-38', 'Mr 16:15-18'],
      lugar: { vista: 'galilea', lugares: ['corazin', 'betsaida', 'capernaum', 'tiro-sidon'] }, cuando: C,
      pensar: 'Corazín y Betsaida vieron milagros y no se arrepintieron (Lc 10:13). ¿Qué responsabilidad te da todo lo que Dios te ha mostrado?' },

    { id: 'setenta-vuelven', t: 'Los setenta regresan', sim: ['😈', '🕊️', '🙏'], refs: { mt: '11:25-30', lc: '10:17-24' },
      excl: [['lc', '10:17'], ['lc', '10:18'], ['lc', '10:19'], ['lc', '10:20'], ['mt', '11:28'], ['mt', '11:29'], ['mt', '11:30']],
      marcas: [['lc', '10:17', 'aun los demonios se nos sujetan en tu nombre', 'A'], ['lc', '10:20', 'vuestros nombres están escritos en los cielos', 'B'], ['lc', '10:21', 'se regocijó en el Espíritu', 'C'], ['mt', '11:28', 'Venid a mí todos los que estáis trabajados y cargados', 'D']],
      com: [
        ['A', 'Volvieron con gozo: los demonios se sujetaban en el nombre de Jesús. Jesús vio a Satanás caer del cielo como un rayo, y les dio potestad para hollar serpientes y escorpiones y sobre toda fuerza del enemigo.'],
        ['B', 'Pero el gozo mayor no debe ser el poder sobre los demonios, sino la salvación: que sus nombres están escritos en los cielos.'],
        ['C', 'Lucas registra que Jesús se regocijó en el Espíritu y alabó al Padre, porque reveló estas cosas a los niños y las escondió de los sabios. El gozo en el Espíritu es parte de la vida del reino.'],
        ['D', 'Mateo conserva la invitación más tierna de Jesús: venir a él para hallar descanso. Su yugo es fácil y su carga ligera.']
      ],
      conc: ['Ap 12:9', 'Mr 16:17-18', 'Ro 14:17', 'Jer 6:16'],
      lugar: { vista: 'galilea', lugares: ['capernaum', 'mar-galilea'] }, cuando: C,
      pensar: 'Jesús dijo que el mayor gozo es que nuestros nombres estén escritos en los cielos (Lc 10:20). ¿Dónde pones tu gozo?' },

    { id: 'buen-samaritano', t: 'La parábola del buen samaritano', sim: ['🌾'], refs: { lc: '10:25-37' },
      marcas: [['lc', '10:29', '¿Y quién es mi prójimo?', 'A'], ['lc', '10:33', 'fue movido a misericordia', 'B'], ['lc', '10:37', 'Ve, y haz tú lo mismo', 'C']],
      com: [
        ['A', 'Un intérprete de la ley respondió bien: amar a Dios y al prójimo. Pero, queriendo justificarse, preguntó quién era su prójimo, como buscando un límite.'],
        ['B', 'El sacerdote y el levita pasaron de largo; el samaritano, el despreciado, se detuvo, curó al herido, lo llevó al mesón y pagó por él. El camino de Jerusalén a Jericó bajaba unos mil metros por el desierto y era famoso por los asaltantes.'],
        ['C', 'Jesús invirtió la pregunta: no «¿quién es mi prójimo?», sino «¿de quién me hago prójimo?». El prójimo es todo el que necesita misericordia.']
      ],
      conc: ['Lv 19:18', 'Dt 6:5', 'Stg 2:15-17', '1 Jn 3:17-18'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'jerico'] }, cuando: C,
      escritura: [{ tipo: 'cita', libro: 'dt', cv: '6:5', nombre: 'Deuteronomio 6:5', en: 'Lucas 10:27' }, { tipo: 'cita', libro: 'lv', cv: '19:18', nombre: 'Levítico 19:18', en: 'Lucas 10:27' }],
      pensar: '¿Junto a quién estás pasando de largo? ¿A quién puedes hacerte prójimo esta semana?' },

    { id: 'marta-maria', t: 'Jesús visita a Marta y María', sim: ['📖'], refs: { lc: '10:38-42' },
      marcas: [['lc', '10:39', 'sentándose a los pies de Jesús', 'A'], ['lc', '10:42', 'María ha escogido la buena parte', 'B']],
      com: [
        ['A', 'En Betania, María se sentó a los pies de Jesús a escuchar, la postura del discípulo. Marta estaba afanada con muchos quehaceres.'],
        ['B', 'Servir es bueno, pero Marta servía con afán y reproche. Una sola cosa es necesaria: escuchar a Jesús. El servicio que no nace de estar a sus pies se vuelve carga.']
      ],
      conc: ['Jn 11:1-5', 'Sal 27:4'],
      lugar: { vista: 'judea', lugares: ['betania', 'jerusalen'] }, cuando: C,
      pensar: '¿Te pareces más a Marta o a María en este tiempo de tu vida?' },

    { id: 'ensenanos-orar', t: 'Jesús enseña a orar a sus discípulos', sim: ['🙏', '🕊️'], refs: { mt: '6:9-15; 7:7-11', lc: '11:1-13' },
      marcas: [['lc', '11:1', 'Señor, enséñanos a orar', 'A'], ['lc', '11:8', 'por su importunidad', 'B'], ['lc', '11:13', 'dará el Espíritu Santo a los que se lo pidan', 'C']],
      com: [
        ['A', 'Al ver orar a Jesús, los discípulos le pidieron que les enseñara. No pidieron que les enseñara a predicar o a hacer milagros, sino a orar. Lucas da una forma más breve del Padre nuestro.'],
        ['B', 'La parábola del amigo a medianoche enseña la perseverancia en la oración. No porque Dios sea reacio, sino porque la insistencia muestra la fe y el deseo del corazón.'],
        ['C', 'La conclusión de Lucas es una de las promesas más importantes sobre el Espíritu: si los padres saben dar buenas dádivas a sus hijos, ¡cuánto más el Padre dará el Espíritu Santo a los que se lo pidan! Una invitación a buscar con perseverancia el bautismo y la plenitud del Espíritu.']
      ],
      conc: ['Hch 1:4, 14', 'Hch 2:4', 'Hch 4:31', 'Ef 5:18'],
      lugar: V, cuando: C,
      pensar: 'Jesús promete que el Padre da el Espíritu Santo a los que se lo piden (Lc 11:13). ¿Estás pidiendo con perseverancia?',
      ir: [{ t: 'Hechos: Pentecostés', a: '../../hechos/' }] },

    { id: 'acusaciones', t: 'Acusan a Jesús de echar demonios por Beelzebú', sim: ['😈', '⚔️'], refs: { lc: '11:14-16' },
      marcas: [['lc', '11:15', 'Por Beelzebú, príncipe de los demonios', 'A']],
      com: [['A', 'Lucas narra una liberación parecida a la de Mateo 12 (pasaje 71), quizá en otra ocasión, ya en el camino a Jerusalén. Unos atribuían el poder de Jesús a Beelzebú y otros pedían una señal del cielo. La respuesta de Jesús sigue en los pasajes siguientes.']],
      conc: ['Mt 12:22-24'], lugar: V, cuando: C,
      pensar: 'Ante una obra evidente de Dios, unos acusaron y otros pidieron más señales (Lc 11:15-16). ¿Cómo respondes tú a lo que Dios hace?' },

    { id: 'casa-dividida', t: 'Una casa dividida contra sí misma', sim: ['😈', '🕊️'], refs: { mt: '12:22-30', mr: '3:22-27', lc: '11:17-23' },
      excl: [['lc', '11:20', 'el dedo de Dios', 'el dedo de Dios']],
      marcas: [['lc', '11:20', 'por el dedo de Dios echo yo fuera los demonios', 'A'], ['lc', '11:22', 'viene otro más fuerte que él', 'B'], ['lc', '11:23', 'El que no es conmigo, contra mí es', 'C']],
      com: [
        ['A', 'Mateo dice «por el Espíritu de Dios»; Lucas, «por el dedo de Dios», la expresión que usaron los magos de Egipto ante las plagas (Éx 8:19). La liberación muestra que el reino de Dios ha llegado.'],
        ['B', 'El hombre fuerte armado guarda su palacio, pero cuando viene otro más fuerte, le quita las armas y reparte el botín. En la cruz, Cristo despojó a los principados y potestades (Col 2:15).'],
        ['C', 'Frente a Cristo no hay neutralidad: o se recoge con él o se desparrama.']
      ],
      conc: ['Éx 8:19', 'Col 2:15', 'He 2:14'],
      lugar: V, cuando: C,
      escritura: [{ tipo: 'alude', libro: 'ex', cv: '8:19', nombre: 'Éxodo 8:19', en: 'Lucas 11:20' }],
      pensar: '«El que no es conmigo, contra mí es» (Lc 11:23). ¿Estás recogiendo con Cristo o desparramando?',
      ir: [{ t: 'Egipto: las plagas', a: '../../egipto/' }] },

    { id: 'espiritu-vuelve', t: 'El espíritu inmundo que vuelve', sim: ['😈'], refs: { mt: '12:43-45', lc: '11:24-26' },
      marcas: [['lc', '11:25', 'la halla barrida y adornada', 'A']],
      com: [['A', 'Una vida limpia pero vacía queda expuesta. La liberación debe ir seguida de una vida llena de Cristo y del Espíritu Santo, de la Palabra y de la comunión con la iglesia. El vacío espiritual es peligroso.']],
      conc: ['Ef 5:18', 'Col 3:16', '2 P 2:20-22'], lugar: V, cuando: C,
      pensar: '¿Con qué estás llenando el espacio que Dios ha limpiado en tu vida?' },

    { id: 'verdaderos-bienaventurados', t: 'Los verdaderamente bienaventurados', sim: ['📖'], refs: { lc: '11:27-28' },
      marcas: [['lc', '11:28', 'los que oyen la palabra de Dios, y la guardan', 'A']],
      com: [['A', 'Una mujer exclamó que dichosa era la madre de Jesús. Jesús no lo negó, pero señaló una dicha mayor, al alcance de todos: oír la palabra de Dios y guardarla.']],
      conc: ['Lc 1:45', 'Stg 1:25'], lugar: V, cuando: C,
      pensar: '¿Qué palabra de Dios estás guardando y practicando esta semana?' },

    { id: 'senal-jonas-2', t: 'La generación perversa pide señal', sim: ['⚔️', '👑'], refs: { mt: '12:38-41', lc: '11:29-32' },
      marcas: [['lc', '11:30', 'Jonás fue señal a los ninivitas', 'A']],
      com: [['A', 'Como en Mateo 12 (pasaje 72), Jesús responde que la única señal será la de Jonás: su muerte y resurrección. Los ninivitas y la reina del Sur se levantarán en el juicio contra una generación que tuvo delante a alguien mayor que Jonás y que Salomón.']],
      conc: ['Jon 3:5-10', '1 R 10:1-9', '1 Co 15:3-4'], lugar: V, cuando: C,
      pensar: 'Tenemos más luz que los ninivitas. ¿Cómo estás respondiendo al mensaje de Cristo?' },

    { id: 'lampara-cuerpo', t: 'La lámpara del cuerpo', sim: ['📖'], refs: { mt: '6:22-23', lc: '11:33-36' },
      marcas: [['lc', '11:35', 'la luz que en ti hay, sea tinieblas', 'A']],
      com: [['A', 'Nadie enciende una luz para esconderla. El ojo es la lámpara del cuerpo: si mira con sencillez y busca a Dios, toda la vida se llena de luz. Jesús advierte que podemos creer tener luz y estar en tinieblas.']],
      conc: ['Sal 119:105', 'Jn 8:12', '2 Co 4:6'], lugar: V, cuando: C,
      pensar: '¿Qué estás permitiendo que entre por tus ojos? ¿Te llena de luz o de tinieblas?' },

    { id: 'ayes-fariseos', t: 'Jesús denuncia a los fariseos y a los intérpretes de la ley', sim: ['⚔️'], refs: { mt: '23:1-36', lc: '11:37-54' },
      marcas: [['mt', '23:3', 'dicen, y no hacen', 'A'], ['mt', '23:23', 'la justicia, la misericordia y la fe', 'B'], ['mt', '23:27', 'sepulcros blanqueados', 'C']],
      com: [
        ['A', 'Lucas sitúa estas palabras en una comida en casa de un fariseo; Mateo reúne en el capítulo 23 la gran denuncia de la última semana. Jesús condena una religión que impone cargas pesadas a otros, busca el reconocimiento y no practica lo que enseña.'],
        ['B', 'Diezmaban hasta las hierbas del huerto, y descuidaban lo más importante de la ley: la justicia, la misericordia y la fe. Jesús no desprecia el diezmo («Esto era necesario hacer»), pero lo pone en su lugar.'],
        ['C', 'Por fuera limpios y hermosos, por dentro llenos de muerte. La apariencia de santidad sin un corazón transformado es hipocresía.']
      ],
      conc: ['Mi 6:8', 'Is 1:11-17', '2 Ti 3:5'],
      lugar: V, cuando: C,
      pensar: 'Jesús llamó a no descuidar la justicia, la misericordia y la fe (Mt 23:23). ¿Qué lugar tienen en tu vida espiritual?' },

    { id: 'levadura-fariseos', t: 'La levadura de los fariseos', sim: ['📖'], refs: { lc: '12:1-3' },
      marcas: [['lc', '12:1', 'que es la hipocresía', 'A']],
      com: [['A', 'La hipocresía es como levadura: poca, pero se extiende y lo contamina todo. Nada hay oculto que no haya de saberse: lo dicho en lo secreto será proclamado desde las azoteas.']],
      conc: ['1 Co 5:6-8', 'Gá 5:9'], lugar: V, cuando: C,
      pensar: '¿Hay diferencia entre lo que eres en público y en privado?' },

    { id: 'a-quien-temer', t: 'A quién se debe temer', sim: ['📖'], refs: { mt: '10:26-31', lc: '12:4-7' },
      marcas: [['lc', '12:5', 'Temed a aquel que después de haber quitado la vida', 'A'], ['lc', '12:7', 'aun los cabellos de vuestra cabeza están todos contados', 'B']],
      com: [
        ['A', 'Los hombres solo pueden matar el cuerpo. El temor de Dios, que tiene autoridad sobre el destino eterno, libra de todos los demás temores.'],
        ['B', 'El mismo Dios que debe ser temido cuida de cada pajarillo y tiene contados nuestros cabellos. Temor reverente y confianza filial van juntos.']
      ],
      conc: ['Pr 1:7', 'Sal 56:4', 'Is 8:12-13'], lugar: V, cuando: C,
      pensar: '¿Qué temores humanos te paralizan? ¿Cómo los cambia el temor de Dios?' },

    { id: 'confesar', t: 'El que me confesare delante de los hombres', sim: ['🕊️', '📖'], refs: { lc: '12:8-12' },
      marcas: [['lc', '12:8', 'todo aquel que me confesare delante de los hombres', 'A'], ['lc', '12:10', 'al que blasfemare contra el Espíritu Santo', 'B'], ['lc', '12:12', 'el Espíritu Santo os enseñará en la misma hora', 'C']],
      com: [
        ['A', 'Confesar a Cristo delante de los hombres es reconocerlo públicamente como Señor. El Hijo del Hombre lo confesará delante de los ángeles de Dios.'],
        ['B', 'Lucas repite la advertencia sobre la blasfemia contra el Espíritu Santo (ver el pasaje 71): rechazar de manera consciente y persistente su testimonio.'],
        ['C', 'Cuando los lleven ante autoridades, no deben preocuparse: el Espíritu Santo les enseñará en ese momento lo que deben decir. El Espíritu da poder para testificar (Hch 1:8).']
      ],
      conc: ['Ro 10:9-10', 'Hch 1:8', 'Hch 4:8, 31'], lugar: V, cuando: C,
      pensar: 'El Espíritu Santo enseña qué decir en la hora de testificar (Lc 12:12). ¿Confías en él cuando debes hablar de Cristo?' },

    { id: 'rico-insensato', t: 'La parábola del rico insensato', sim: ['🌾'], refs: { lc: '12:13-21' },
      marcas: [['lc', '12:15', 'guardaos de toda avaricia', 'A'], ['lc', '12:20', 'Necio, esta noche vienen a pedirte tu alma', 'B'], ['lc', '12:21', 'no es rico para con Dios', 'C']],
      com: [
        ['A', 'Alguien pidió a Jesús que intercediera en una herencia. Jesús no aceptó ser juez, pero advirtió contra la avaricia: la vida no consiste en la abundancia de los bienes.'],
        ['B', 'El rico hablaba consigo mismo: «mis frutos, mis graneros, mi alma». No contaba con Dios. Esa misma noche murió.'],
        ['C', 'No era rico para con Dios: había acumulado para sí y no había invertido en lo eterno.']
      ],
      conc: ['Sal 49:16-20', 'Stg 4:13-15', '1 Ti 6:6-10'], lugar: V, cuando: C,
      pensar: '¿Eres rico para con Dios? ¿Dónde estás invirtiendo lo que tienes?' },

    { id: 'ansiedad-2', t: 'El afán y la ansiedad', sim: ['📖'], refs: { mt: '6:25-34', lc: '12:22-31' },
      marcas: [['lc', '12:25', '¿Y quién de vosotros podrá con afanarse añadir a su estatura un codo?', 'A'], ['lc', '12:31', 'buscad el reino de Dios', 'B']],
      com: [
        ['A', 'Lucas repite la enseñanza del Sermón del Monte (pasaje 60) en el camino a Jerusalén. Jesús enseñaba las mismas verdades en distintos lugares. La ansiedad no añade nada a la vida.'],
        ['B', 'El Padre sabe lo que necesitamos. La respuesta a la ansiedad es buscar primero su reino.']
      ],
      conc: ['Fil 4:6-7', '1 P 5:7'], lugar: V, cuando: C,
      pensar: '¿Qué preocupación necesitas entregar al Padre hoy?' },

    { id: 'tesoro-cielo', t: 'Tesoro en el cielo', sim: ['📖'], refs: { mt: '6:19-21', lc: '12:32-34' },
      marcas: [['lc', '12:32', 'No temáis, manada pequeña', 'A']],
      com: [['A', 'Una de las palabras más tiernas de Jesús: «No temáis, manada pequeña, porque a vuestro Padre le ha placido daros el reino». Por eso podemos ser generosos: vender, dar limosna y hacer bolsas que no envejecen.']],
      conc: ['Mt 6:19-21', '1 Ti 6:18-19'], lugar: V, cuando: C,
      pensar: 'Al Padre le ha placido darte el reino (Lc 12:32). ¿Cómo cambia eso tu relación con lo que posees?' },

    { id: 'siervo-vigilante', t: 'El siervo vigilante', sim: ['🌾', '👑'], refs: { lc: '12:35-40' },
      marcas: [['lc', '12:35', 'vuestras lámparas encendidas', 'A'], ['lc', '12:37', 'se ceñirá, y hará que se sienten a la mesa', 'B'], ['lc', '12:40', 'a la hora que no penséis', 'C']],
      com: [
        ['A', 'Lomos ceñidos y lámparas encendidas: listos para la acción, sin dormirse. Así deben esperar los siervos el regreso de su señor.'],
        ['B', 'Una imagen sorprendente: el señor, al encontrar a sus siervos velando, se pondrá a servirlos. Cristo recompensará a los que lo esperan.'],
        ['C', 'El Hijo del Hombre vendrá a la hora que no se espera. La segunda venida de Cristo es inminente: puede ocurrir en cualquier momento, y la iglesia debe vivir preparada.']
      ],
      conc: ['Mt 25:1-13', '1 Ts 5:2-6', 'Tit 2:13', 'Ap 22:12'],
      lugar: V, cuando: C,
      pensar: 'Si Cristo volviera hoy, ¿te encontraría velando?',
      ir: [{ t: 'Los últimos tiempos: el arrebatamiento', a: '../../escatologia/' }] },

    { id: 'siervo-infiel', t: 'El siervo fiel y el infiel', sim: ['🌾'], refs: { mt: '24:45-51', lc: '12:41-48' },
      excl: [['lc', '12:47'], ['lc', '12:48']],
      marcas: [['lc', '12:42', 'el mayordomo fiel y prudente', 'A'], ['lc', '12:48', 'a todo aquel a quien se haya dado mucho, mucho se le demandará', 'B']],
      com: [
        ['A', 'El mayordomo fiel cuida de los demás siervos mientras su señor tarda. El infiel piensa que su señor tarda y abusa de los demás. La espera de Cristo se vive en fidelidad y servicio.'],
        ['B', 'Lucas añade un principio: a quien mucho se le dio, mucho se le demandará. Los que conocen la voluntad de su señor tienen mayor responsabilidad.']
      ],
      conc: ['1 Co 4:2', 'Stg 3:1'], lugar: V, cuando: C,
      pensar: '¿Qué te ha confiado Dios, y cómo lo estás administrando?' },

    { id: 'division', t: 'Jesús trae división', sim: ['🕊️', '📖'], refs: { mt: '10:34-36', lc: '12:49-53' },
      marcas: [['lc', '12:49', 'Fuego vine a echar en la tierra', 'A'], ['lc', '12:50', 'De un bautismo tengo que ser bautizado', 'B']],
      com: [
        ['A', 'Jesús vino a encender un fuego: el fuego del juicio que separa y purifica, y el del Espíritu Santo que anunció Juan el Bautista (Lc 3:16) y que descendió en Pentecostés en lenguas como de fuego (Hch 2:3).'],
        ['B', 'Antes, Jesús debía pasar por el bautismo de su sufrimiento en la cruz, y se angustiaba hasta que se cumpliera. Seguirlo traerá división aun en las familias.']
      ],
      conc: ['Lc 3:16', 'Hch 2:3', 'Mr 10:38', 'Mi 7:6'], lugar: V, cuando: C,
      pensar: 'Jesús vino a encender fuego en la tierra (Lc 12:49). ¿Arde ese fuego del Espíritu en tu corazón?' },

    { id: 'senales-tiempo', t: '¿Cómo no reconocéis este tiempo?', sim: ['⚔️', '👑'], refs: { mt: '16:1-4', mr: '8:11-13', lc: '12:54-56' },
      marcas: [['lc', '12:56', '¿y cómo no distinguís este tiempo?', 'A']],
      com: [['A', 'Sabían predecir el tiempo por las nubes y el viento, pero no reconocían el tiempo de Dios: el Mesías estaba entre ellos. Hoy también es necesario discernir los tiempos a la luz de la Palabra.']],
      conc: ['Lc 19:44', '1 Cr 12:32', 'Ro 13:11-12'], lugar: V, cuando: C,
      pensar: '¿Sabes discernir lo que Dios está haciendo en este tiempo?' },

    { id: 'adversario', t: 'Ponte de acuerdo con tu adversario', sim: ['📖'], refs: { mt: '5:25-26', lc: '12:57-59' },
      marcas: [['lc', '12:58', 'procura en el camino arreglarte con él', 'A']],
      com: [['A', 'Mientras hay camino, hay oportunidad. Jesús aplica la imagen de un pleito a la relación con Dios: hay que arreglar la cuenta antes de llegar ante el Juez.']],
      conc: ['Is 55:6', '2 Co 6:2'], lugar: V, cuando: C,
      pensar: '¿Hay algo que debes arreglar con Dios o con alguien mientras todavía hay tiempo?' },

    { id: 'arrepentios', t: 'Arrepentíos o pereceréis', sim: ['📖'], refs: { lc: '13:1-5' },
      marcas: [['lc', '13:3', 'si no os arrepentís, todos pereceréis igualmente', 'A']],
      com: [['A', 'Le contaron de unos galileos asesinados por Pilato. Jesús mencionó también a los dieciocho que murieron al caer la torre de Siloé. Las tragedias no prueban que las víctimas fueran más pecadoras: son un llamado para todos al arrepentimiento.']],
      conc: ['Hch 17:30', '2 P 3:9', 'Jn 9:2-3'], lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: C,
      pensar: '¿Ves las tragedias como juicio sobre otros o como un llamado para ti?' },

    { id: 'higuera-esteril', t: 'La parábola de la higuera estéril', sim: ['🌾'], refs: { lc: '13:6-9' },
      marcas: [['lc', '13:8', 'Señor, déjala todavía este año', 'A']],
      com: [['A', 'Tres años buscando fruto sin hallarlo. El viñador intercede: un año más, cavando y abonando. Es la paciencia de Dios, que da tiempo para el arrepentimiento. Pero la paciencia tiene un límite.']],
      conc: ['Is 5:1-7', 'Ro 2:4', '2 P 3:9'], lugar: V, cuando: C,
      pensar: 'Dios ha tenido paciencia contigo. ¿Qué fruto espera encontrar en tu vida?' },

    { id: 'mujer-encorvada', t: 'Jesús sana a una mujer encorvada', sim: ['🙌', '😈', '⚔️'], refs: { lc: '13:10-17' },
      marcas: [['lc', '13:11', 'tenía espíritu de enfermedad', 'A'], ['lc', '13:16', 'que Satanás había atado dieciocho años', 'B']],
      com: [
        ['A', 'En una sinagoga, en día de reposo, había una mujer encorvada desde hacía dieciocho años por un espíritu de enfermedad. Jesús la llamó, le puso las manos y le dijo: «Mujer, eres libre de tu enfermedad». Y se enderezó y glorificaba a Dios.'],
        ['B', 'Jesús reveló el origen espiritual de esta enfermedad: Satanás la había atado. Ante la indignación del principal de la sinagoga, Jesús respondió que, si desataban un buey en el día de reposo, cuánto más debía ser desatada una hija de Abraham.']
      ],
      conc: ['Hch 10:38', '1 Jn 3:8'], lugar: V, cuando: C,
      pensar: 'Jesús llamó libre a una mujer atada durante dieciocho años (Lc 13:12, 16). ¿Qué atadura necesitas entregarle?' },

    { id: 'mostaza-2', t: 'La parábola de la semilla de mostaza', sim: ['🌾'], refs: { mt: '13:31-32', mr: '4:30-32', lc: '13:18-19' },
      marcas: [['lc', '13:19', 'creció, y se hizo árbol grande', 'A']],
      com: [['A', 'Lucas ubica esta parábola en el camino a Jerusalén (ver el pasaje 78). Jesús la repitió: de un comienzo pequeño, el reino crece hasta dar refugio a muchos.']],
      conc: ['Mt 13:31-32'], lugar: V, cuando: C,
      pensar: '¿Qué te enseña esta parábola sobre la paciencia con el crecimiento del reino?' }
  ];
  ps.forEach(p => { p.sec = 's2'; A.pasajes.push(p); });
})();

/* ---------- Sección 2 · Tanda 4b: pasajes 132 a 159 (el camino a Jerusalén, hasta Jericó) ---------- */
(() => {
  const A = window.ARMONIA;
  const V = { vista: 'israel', lugares: ['perea', 'jerico', 'jerusalen'] };
  const C = { etapa: 'viaje', fecha: 'c. 32–33 d.C.' };
  const ps = [
    { id: 'levadura-2', t: 'La parábola de la levadura', sim: ['🌾'], refs: { mt: '13:33', lc: '13:20-21' },
      marcas: [['lc', '13:21', 'hasta que todo hubo fermentado', 'A']],
      com: [['A', 'Jesús repite en el camino la parábola de la levadura (ver el pasaje 79): el reino transforma desde dentro, de manera silenciosa, hasta alcanzarlo todo.']],
      conc: ['Mt 13:33'], lugar: V, cuando: C,
      pensar: '¿Cómo puede el reino de Dios transformar tu entorno a través de tu vida?' },

    { id: 'puerta-estrecha-2', t: 'La puerta estrecha', sim: ['📖'], refs: { mt: '7:13-23', lc: '13:22-30' },
      marcas: [['lc', '13:24', 'Esforzaos a entrar por la puerta angosta', 'A'], ['lc', '13:27', 'no sé de dónde sois', 'B'], ['lc', '13:29', 'vendrán del oriente y del occidente', 'C']],
      com: [
        ['A', 'Alguien preguntó si eran pocos los que se salvan. Jesús no respondió con una cifra, sino con un llamado personal: esforzaos a entrar. La salvación es por gracia, pero exige una decisión seria.'],
        ['B', 'Llegará el momento en que la puerta se cierre. Algunos dirán que comieron con él y oyeron su enseñanza, pero no lo conocieron de verdad.'],
        ['C', 'Vendrán de los cuatro puntos cardinales a sentarse en el reino de Dios, y habrá postreros que serán primeros.']
      ],
      conc: ['Jn 10:9', 'Mt 25:10-12', 'Ap 7:9'], lugar: V, cuando: C,
      pensar: 'Jesús dijo «esforzaos a entrar» (Lc 13:24). ¿Has entrado tú por la puerta?' },

    { id: 'lamento-jerusalen', t: 'Jesús lamenta por Jerusalén', sim: ['👑', '⚔️'], refs: { mt: '23:37-39', lc: '13:31-35' },
      excl: [['lc', '13:31'], ['lc', '13:32'], ['lc', '13:33']],
      marcas: [['lc', '13:32', 'Id, y decid a aquella zorra', 'A'], ['lc', '13:34', 'como la gallina a sus polluelos', 'B'], ['lc', '13:35', 'Bendito el que viene en nombre del Señor', 'C']],
      com: [
        ['A', 'Unos fariseos le advirtieron que Herodes quería matarlo. Jesús no huyó: su camino lo llevaba a Jerusalén, y nada lo detendría antes de tiempo.'],
        ['B', 'Una de las imágenes más tiernas de la Biblia: Jesús quiso juntar a Jerusalén como la gallina a sus polluelos, y no quisieron. Dios llama; el hombre puede resistir.'],
        ['C', 'Jesús anuncia que no lo verán hasta que digan «Bendito el que viene en nombre del Señor» (Sal 118:26). Lo dirán en la entrada triunfal, y en un sentido pleno cuando Israel reconozca a su Mesías en su segunda venida (Ro 11:26; Zac 12:10).']
      ],
      conc: ['Sal 118:26', 'Zac 12:10', 'Ro 11:25-27'],
      lugar: V, cuando: C,
      escritura: [{ tipo: 'cita', libro: 'sal', cv: '118:26', nombre: 'Salmo 118:26', en: 'Lucas 13:35' }],
      pensar: 'Jesús quiso juntar a Jerusalén «y no quisiste» (Lc 13:34). ¿Hay un área de tu vida donde estás resistiendo su cuidado?',
      ir: [{ t: 'Los últimos tiempos: Israel', a: '../../escatologia/' }] },

    { id: 'hidropico', t: 'Jesús sana a un hidrópico', sim: ['🙌', '⚔️'], refs: { lc: '14:1-6' },
      marcas: [['lc', '14:3', '¿Es lícito sanar en el día de reposo?', 'A']],
      com: [['A', 'En casa de un fariseo, en día de reposo, lo acechaban. Delante de él había un hombre hidrópico, con el cuerpo hinchado de líquido. Jesús preguntó, nadie respondió, y lo sanó. Si sacaban a un buey del pozo en día de reposo, ¿cómo no sanar a un hombre?']],
      conc: ['Lc 6:9', 'Lc 13:15-16'], lugar: V, cuando: C,
      pensar: '¿Te importan más las reglas que las personas que necesitan a Dios?' },

    { id: 'convidados', t: 'Los convidados a las bodas', sim: ['📖'], refs: { lc: '14:7-14' },
      marcas: [['lc', '14:11', 'el que se humilla, será enaltecido', 'A'], ['lc', '14:13', 'llama a los pobres, los mancos, los cojos y los ciegos', 'B']],
      com: [
        ['A', 'Jesús observó cómo los invitados escogían los primeros puestos. En el reino, el que se enaltece será humillado y el que se humilla será enaltecido.'],
        ['B', 'Al anfitrión le enseñó a invitar a los que no pueden devolver el favor. La recompensa vendrá en la resurrección de los justos.']
      ],
      conc: ['Pr 25:6-7', 'Stg 4:10', '1 P 5:6'], lugar: V, cuando: C,
      pensar: '¿A quién podrías mostrar bondad sin esperar nada a cambio?' },

    { id: 'gran-cena', t: 'La parábola de la gran cena', sim: ['🌾', '✝️'], refs: { lc: '14:15-24' },
      marcas: [['lc', '14:18', 'todos a una comenzaron a excusarse', 'A'], ['lc', '14:23', 'fuérzalos a entrar', 'B']],
      com: [
        ['A', 'Los invitados pusieron excusas: un campo, unos bueyes, un casamiento. Cosas buenas en sí mismas, pero que se volvieron más importantes que la invitación de Dios.'],
        ['B', 'El señor mandó traer a los pobres, mancos, ciegos y cojos, y luego a los de los caminos y vallados. «Fuérzalos» significa insistir con urgencia y amor. El evangelio es para todos, y la casa de Dios debe llenarse.']
      ],
      conc: ['Mt 22:1-14', 'Ap 19:9', '2 Co 5:20'], lugar: V, cuando: C,
      pensar: '¿Qué excusas pone la gente hoy para no aceptar la invitación de Dios? ¿Y tú?' },

    { id: 'costo-discipulo', t: 'Lo que cuesta seguir a Cristo', sim: ['📖'], refs: { lc: '14:25-33' },
      marcas: [['lc', '14:26', 'y no aborrece a su padre', 'A'], ['lc', '14:28', 'calcula los gastos', 'B']],
      com: [
        ['A', '«Aborrecer» es una forma semítica de decir «amar menos» (comparar con Mt 10:37). Cristo debe ocupar el primer lugar, por encima de los afectos más cercanos y de la propia vida.'],
        ['B', 'Como quien construye una torre o un rey que va a la guerra, el discípulo debe calcular el costo. Jesús no busca seguidores entusiastas por un día, sino discípulos que lleguen hasta el final.']
      ],
      conc: ['Mt 10:37-38', 'Fil 3:7-8'], lugar: V, cuando: C,
      pensar: '¿Has calculado lo que significa seguir a Cristo hasta el final?' },

    { id: 'sal-insipida', t: 'Cuando la sal pierde su sabor', sim: ['📖'], refs: { mt: '5:13', mr: '9:50', lc: '14:34-35' },
      marcas: [['mr', '9:50', 'Tened sal en vosotros mismos', 'A']],
      com: [['A', 'Jesús repitió la imagen de la sal en distintos contextos. Marcos añade: tened sal en vosotros mismos y paz los unos con los otros. Un discípulo sin compromiso pierde su utilidad.']],
      conc: ['Col 4:6'], lugar: V, cuando: C,
      pensar: '¿Sigue tu vida dando sabor y preservando el bien a tu alrededor?' },

    { id: 'oveja-perdida', t: 'La parábola de la oveja perdida', sim: ['🌾', '✝️'], refs: { mt: '18:10-14', lc: '15:1-7' },
      marcas: [['lc', '15:2', 'Este a los pecadores recibe, y con ellos come', 'A'], ['lc', '15:7', 'habrá más gozo en el cielo por un pecador que se arrepiente', 'B']],
      com: [
        ['A', 'Lucas 15 reúne tres parábolas de lo perdido como respuesta a la murmuración de los fariseos. Su acusación era, sin saberlo, el resumen del evangelio.'],
        ['B', 'El pastor deja las noventa y nueve y busca a la perdida hasta encontrarla. Cada persona importa a Dios, y el cielo se alegra por cada pecador que se arrepiente.']
      ],
      conc: ['Ez 34:11-16', 'Jn 10:11', 'Lc 19:10'], lugar: V, cuando: C,
      pensar: '¿A quién está buscando Dios a través de ti?' },

    { id: 'moneda-perdida', t: 'La parábola de la moneda perdida', sim: ['🌾'], refs: { lc: '15:8-10' },
      marcas: [['lc', '15:8', 'barre la casa, y busca con diligencia', 'A']],
      com: [['A', 'La mujer enciende la lámpara, barre y busca con diligencia hasta encontrar su dracma, una moneda del valor de un día de trabajo. Así busca Dios a los perdidos, y hay gozo delante de los ángeles por un pecador que se arrepiente.']],
      conc: ['Lc 19:10'], lugar: V, cuando: C,
      pensar: '¿Buscas a los perdidos con la diligencia con que Dios los busca?' },

    { id: 'hijo-prodigo', t: 'La parábola del hijo pródigo', sim: ['🌾', '✝️', '👨‍👩‍👧'], refs: { lc: '15:11-32' },
      marcas: [['lc', '15:17', 'volviendo en sí', 'A'], ['lc', '15:20', 'corrió, y se echó sobre su cuello, y le besó', 'B'], ['lc', '15:28', 'se enojó, y no quería entrar', 'C']],
      com: [
        ['A', 'Pedir la herencia en vida era como desear la muerte del padre. El hijo lo malgastó todo y terminó cuidando cerdos, lo más bajo para un judío. «Volviendo en sí»: el arrepentimiento comienza cuando reconocemos nuestra condición y decidimos volver al Padre.'],
        ['B', 'El padre lo vio de lejos, porque lo esperaba. Corrió, algo indigno para un anciano en esa cultura, lo abrazó y lo besó antes de que terminara su confesión. Le dio el mejor vestido, anillo y calzado: restauración completa. Así recibe Dios al que vuelve.'],
        ['C', 'El hermano mayor, que nunca se fue, también estaba lejos del corazón del padre. Era la imagen de los fariseos que murmuraban. La parábola queda abierta: ¿entrará a la fiesta?']
      ],
      conc: ['Is 55:7', 'Sal 103:12-13', 'Ro 5:8'], lugar: V, cuando: C,
      pensar: '¿Te pareces más al hijo menor o al mayor? ¿Qué te dice el corazón del padre?' },

    { id: 'mayordomo-infiel', t: 'La parábola del mayordomo infiel', sim: ['🌾'], refs: { lc: '16:1-15' },
      marcas: [['lc', '16:8', 'por haber hecho sagazmente', 'A'], ['lc', '16:10', 'El que es fiel en lo muy poco', 'B'], ['lc', '16:13', 'No podéis servir a Dios y a las riquezas', 'C']],
      com: [
        ['A', 'El señor no alabó la deshonestidad del mayordomo, sino su previsión: usó lo que tenía para asegurar su futuro. Los hijos de este siglo son más astutos con lo temporal que los hijos de luz con lo eterno.'],
        ['B', 'El que es fiel en lo poco, como el dinero, será confiado con lo mucho, las verdaderas riquezas.'],
        ['C', 'Los fariseos, que eran avaros, se burlaban. Jesús les dijo que lo que los hombres tienen por sublime, delante de Dios es abominación.']
      ],
      conc: ['1 Ti 6:17-19', 'Mt 6:24', 'Lc 12:33'], lugar: V, cuando: C,
      pensar: '¿Eres fiel en lo poco? ¿Cómo usas tu dinero pensando en la eternidad?' },

    { id: 'ley-reino', t: 'La ley y el reino de Dios', sim: ['📖'], refs: { lc: '16:16-17' },
      marcas: [['lc', '16:16', 'La ley y los profetas eran hasta Juan', 'A']],
      com: [['A', 'Juan marca un cambio de época: desde entonces se anuncia el reino de Dios, y todos se esfuerzan por entrar. Pero la ley no pierde valor: es más fácil que pasen el cielo y la tierra que se frustre una tilde de ella. Se cumple en Cristo.']],
      conc: ['Mt 5:17-18', 'Mt 11:12-13'], lugar: V, cuando: C,
      pensar: '¿Qué significa para ti vivir en el tiempo del reino que Juan anunció?' },

    { id: 'divorcio-2', t: 'Jesús enseña sobre el divorcio', sim: ['📖', '👨‍👩‍👧'], refs: { mt: '19:1-12', mr: '10:1-12', lc: '16:18' },
      marcas: [['mt', '19:6', 'lo que Dios juntó, no lo separe el hombre', 'A'], ['mt', '19:8', 'Por la dureza de vuestro corazón', 'B']],
      com: [
        ['A', 'Los fariseos lo probaron con una pregunta discutida: ¿es lícito divorciarse por cualquier causa? Jesús volvió al principio, a la creación (Gn 1:27; 2:24): el matrimonio es una unión de un hombre y una mujer hecha por Dios.'],
        ['B', 'Moisés permitió el divorcio por la dureza del corazón, no porque fuera el plan de Dios. Jesús señala la excepción de la fornicación y llama a la fidelidad. Los discípulos se sorprendieron por la exigencia.']
      ],
      conc: ['Gn 1:27', 'Gn 2:24', 'Mal 2:14-16', '1 Co 7:10-15'],
      lugar: { vista: 'israel', lugares: ['perea', 'jerico'] }, cuando: C,
      escritura: [{ tipo: 'cita', libro: 'gn', cv: '2:24', nombre: 'Génesis 2:24', en: 'Mateo 19:5' }],
      pensar: '¿Cómo reflejan tus relaciones el diseño de Dios desde el principio?' },

    { id: 'rico-lazaro', t: 'El rico y Lázaro', sim: ['📖'], refs: { lc: '16:19-31' },
      marcas: [['lc', '16:22', 'llevado por los ángeles al seno de Abraham', 'A'], ['lc', '16:26', 'una gran sima está puesta', 'B'], ['lc', '16:31', 'Si no oyen a Moisés y a los profetas', 'C']],
      com: [
        ['A', 'El rico vivía en banquetes; Lázaro, cuyo nombre significa «Dios ayuda», mendigaba a su puerta. Al morir, Lázaro fue consolado y el rico atormentado. Jesús muestra que después de la muerte hay conciencia, consuelo o tormento.'],
        ['B', 'Entre ambos lugares hay una sima infranqueable. El destino eterno se decide en esta vida.'],
        ['C', 'El rico pidió que alguien volviera de los muertos para advertir a sus hermanos. Abraham respondió que tenían a Moisés y a los profetas. Si no creen a la Escritura, tampoco creerán aunque alguien resucite, como sucedió cuando Jesús resucitó a otro Lázaro (Jn 11–12) y aun con su propia resurrección.']
      ],
      conc: ['He 9:27', '2 Co 5:8', 'Jn 12:10-11'], lugar: V, cuando: C,
      pensar: '¿Está tu vida decidida a la luz de la eternidad?' },

    { id: 'tropiezos', t: 'Ocasiones de caer y el perdón', sim: ['📖'], refs: { mt: '18:6-7; 18:21-22', mr: '9:42', lc: '17:1-4' },
      marcas: [['mt', '18:22', 'aun hasta setenta veces siete', 'A'], ['lc', '17:4', 'siete veces al día', 'B']],
      com: [
        ['A', 'Pedro pensó que perdonar siete veces era generoso. Jesús respondió: setenta veces siete, es decir, sin llevar la cuenta.'],
        ['B', 'Lucas lo expresa así: aunque peque siete veces al día y siete veces vuelva arrepentido, perdónalo. Y advierte con seriedad contra el que hace tropezar a otros.']
      ],
      conc: ['Ef 4:32', 'Col 3:13', 'Mt 18:23-35'], lugar: V, cuando: C,
      pensar: '¿Hay alguien a quien has dejado de perdonar porque ya «perdiste la cuenta»?' },

    { id: 'aumentanos-fe', t: 'Auméntanos la fe', sim: ['📖'], refs: { lc: '17:5-6' },
      marcas: [['lc', '17:6', 'como un grano de mostaza', 'A']],
      com: [['A', 'Ante la exigencia de perdonar tanto, los apóstoles pidieron más fe. Jesús respondió que no se trata de la cantidad de fe, sino de en quién está puesta: una fe pequeña en un Dios grande puede mover lo imposible.']],
      conc: ['Mt 17:20', 'Mr 11:22-24', 'He 11:6'], lugar: V, cuando: C,
      pensar: '¿En quién está puesta tu fe, más que cuánta fe tienes?' },

    { id: 'deber-siervo', t: 'El deber del siervo', sim: ['📖'], refs: { lc: '17:7-10' },
      marcas: [['lc', '17:10', 'Siervos inútiles somos', 'A']],
      com: [['A', 'Un siervo no espera agradecimiento por hacer lo que le corresponde. El servicio a Dios no es un favor que le hacemos, ni nos da derecho a reclamar: es nuestro deber. La recompensa es gracia.']],
      conc: ['Ro 12:1', '1 Co 4:7'], lugar: V, cuando: C,
      pensar: '¿Sirves a Dios esperando reconocimiento o con humildad?' },

    { id: 'diez-leprosos', t: 'Diez leprosos son limpiados', sim: ['🙌'], refs: { lc: '17:11-19' },
      marcas: [['lc', '17:14', 'mientras iban, fueron limpiados', 'A'], ['lc', '17:16', 'y éste era samaritano', 'B']],
      com: [
        ['A', 'Jesús los envió a mostrarse a los sacerdotes antes de estar sanos: debían obedecer creyendo. En el camino fueron limpiados.'],
        ['B', 'Solo uno volvió a dar gracias, y era samaritano. «¿Y los nueve, dónde están?». Los diez fueron sanados, pero solo uno oyó «tu fe te ha salvado»: recibió algo más que la sanidad del cuerpo.']
      ],
      conc: ['Lv 14:2-4', 'Sal 103:2', '1 Ts 5:18'],
      lugar: { vista: 'israel', lugares: ['r-galilea', 'sicar', 'perea'] }, cuando: C,
      pensar: '«¿Y los nueve, dónde están?» (Lc 17:17). ¿Has vuelto a dar gracias por lo que Dios ha hecho?' },

    { id: 'venida-reino', t: 'La venida del reino', sim: ['👑'], refs: { mt: '24:23-28; 24:36-41', lc: '17:20-37' },
      marcas: [['lc', '17:21', 'el reino de Dios está entre vosotros', 'A'], ['lc', '17:26', 'Como fue en los días de Noé', 'B'], ['lc', '17:34', 'el uno será tomado, y el otro será dejado', 'C']],
      com: [
        ['A', 'Los fariseos preguntaban cuándo vendría el reino. Jesús respondió que ya estaba entre ellos, en su persona. El reino tiene un presente y un futuro.'],
        ['B', 'La venida del Hijo del Hombre será repentina, como el diluvio en días de Noé y el fuego en días de Lot: la gente comía, bebía, se casaba, compraba y vendía, sin esperar nada.'],
        ['C', 'Uno será tomado y otro dejado. Muchos estudiosos dispensacionalistas relacionan esta separación repentina con el arrebatamiento de la iglesia (1 Ts 4:16-17); otros, con el juicio en la venida de Cristo. En ambos casos el llamado es el mismo: estar preparados.']
      ],
      conc: ['Gn 6–7', 'Gn 19', '1 Ts 4:16-17', '1 Co 15:51-52'],
      lugar: V, cuando: C,
      pensar: '«Acordaos de la mujer de Lot» (Lc 17:32). ¿Hay algo que te ata a mirar atrás?',
      ir: [{ t: 'Los últimos tiempos', a: '../../escatologia/' }] },

    { id: 'viuda-juez', t: 'La parábola de la viuda y el juez injusto', sim: ['🌾', '🙏'], refs: { lc: '18:1-8' },
      marcas: [['lc', '18:1', 'la necesidad de orar siempre, y no desmayar', 'A'], ['lc', '18:8', '¿hallará fe en la tierra?', 'B']],
      com: [
        ['A', 'Lucas da el propósito antes de la parábola: orar siempre y no desmayar. Si un juez injusto atendió a una viuda por su insistencia, ¡cuánto más Dios hará justicia a sus escogidos que claman a él día y noche!'],
        ['B', 'Jesús termina con una pregunta: cuando venga el Hijo del Hombre, ¿hallará fe en la tierra? La oración perseverante es la fe que espera.']
      ],
      conc: ['1 Ts 5:17', 'Ro 12:12', 'Ap 6:10'], lugar: V, cuando: C,
      pensar: '¿Por qué cosa has dejado de orar porque la respuesta tarda?' },

    { id: 'fariseo-publicano', t: 'La parábola del fariseo y el publicano', sim: ['🌾', '🙏', '✝️'], refs: { lc: '18:9-14' },
      marcas: [['lc', '18:11', 'te doy gracias porque no soy como los otros hombres', 'A'], ['lc', '18:13', 'Dios, sé propicio a mí, pecador', 'B']],
      com: [
        ['A', 'El fariseo oraba consigo mismo: más que hablar con Dios, se alababa y se comparaba. Ayunaba y diezmaba, pero confiaba en su propia justicia.'],
        ['B', 'El publicano no se atrevía a alzar los ojos; se golpeaba el pecho y pedía misericordia. «Sé propicio» es la palabra del propiciatorio: pedía la expiación. Este volvió justificado. Dios justifica al que reconoce su pecado.']
      ],
      conc: ['Sal 51:17', 'Ro 3:23-26', 'Stg 4:6'], lugar: V, cuando: C,
      pensar: '¿Oras como el fariseo o como el publicano?',
      ir: [{ t: 'El tabernáculo: el propiciatorio', a: '../../tabernaculo/' }] },

    { id: 'ninos', t: 'Jesús bendice a los niños', sim: ['👨‍👩‍👧'], refs: { mt: '19:13-15', mr: '10:13-16', lc: '18:15-17' },
      excl: [['mr', '10:14', 'se indignó', 'se indignó'], ['mr', '10:16']],
      marcas: [['mr', '10:14', 'Dejad a los niños venir a mí', 'A'], ['mr', '10:16', 'poniendo las manos sobre ellos, los bendecía', 'B']],
      com: [
        ['A', 'Los discípulos reprendían a los que traían niños. Marcos dice que Jesús se indignó. Los niños importan a Jesús, y el reino es de los que lo reciben como ellos: con confianza y dependencia.'],
        ['B', 'Jesús los tomó en sus brazos, les puso las manos y los bendijo. Llevar a los niños a Jesús desde pequeños es parte del llamado de la iglesia y de la familia.']
      ],
      conc: ['Dt 6:6-7', '2 Ti 3:15', 'Sal 127:3'],
      lugar: { vista: 'israel', lugares: ['perea', 'jerico'] }, cuando: C,
      pensar: '¿Cómo estás ayudando a los niños de tu entorno a acercarse a Jesús?' },

    { id: 'joven-rico', t: 'El joven rico', sim: ['📖'], refs: { mt: '19:16-30', mr: '10:17-31', lc: '18:18-30' },
      excl: [['mr', '10:21', 'mirándole, le amó', 'mirándole, le amó']],
      marcas: [['mr', '10:21', 'mirándole, le amó', 'A'], ['mr', '10:25', 'pasar un camello por el ojo de una aguja', 'B'], ['mr', '10:27', 'todas las cosas son posibles para Dios', 'C']],
      com: [
        ['A', 'Un joven rico e importante preguntó qué hacer para heredar la vida eterna. Había guardado los mandamientos desde su juventud. Solo Marcos dice que Jesús lo miró y lo amó. Luego le pidió lo único que no estaba dispuesto a dar: sus riquezas. Se fue triste.'],
        ['B', 'Para un rico es tan difícil entrar al reino como para un camello pasar por el ojo de una aguja: humanamente imposible. Las riquezas tienden a ocupar el lugar de Dios.'],
        ['C', 'Lo que es imposible para los hombres es posible para Dios. Y nadie que deje algo por Cristo y el evangelio quedará sin recompensa, en este tiempo y en la vida eterna.']
      ],
      conc: ['1 Ti 6:9-10', 'Fil 3:7-8', 'Mt 6:24'],
      lugar: { vista: 'israel', lugares: ['perea', 'jerico'] }, cuando: C,
      pensar: 'Jesús miró al joven y lo amó, y le pidió lo que más le costaba (Mr 10:21). ¿Qué te está pidiendo Jesús a ti?' },

    { id: 'anuncio-muerte-3', t: 'Jesús anuncia su muerte por tercera vez', sim: ['✝️'], refs: { mt: '20:17-19', mr: '10:32-34', lc: '18:31-34' },
      marcas: [['lc', '18:31', 'se cumplirán todas las cosas escritas por los profetas', 'A'], ['mr', '10:32', 'Jesús iba delante', 'B']],
      com: [
        ['A', 'El tercer anuncio es el más detallado: será entregado a los gentiles, escarnecido, escupido, azotado, muerto, y resucitará al tercer día. Todo lo escrito por los profetas se cumplirá.'],
        ['B', 'Marcos pinta la escena: Jesús iba delante, camino a Jerusalén, y los discípulos lo seguían asombrados y con miedo. Lucas añade que no entendían nada de esto.']
      ],
      conc: ['Is 50:6', 'Is 53:3-12', 'Sal 22:6-8'],
      lugar: { vista: 'israel', lugares: ['jerico', 'jerusalen'], trazos: ['jesus-jerusalen'] }, cuando: C,
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '50:6', nombre: 'Isaías 50:6', en: 'Marcos 10:34' }],
      pensar: 'Jesús iba delante, camino a la cruz (Mr 10:32). ¿Lo sigues aunque no entiendas todo?' },

    { id: 'bartimeo', t: 'Un ciego de Jericó recibe la vista', sim: ['🙌', '👑'], refs: { mt: '20:29-34', mr: '10:46-52', lc: '18:35-43' },
      excl: [['mr', '10:46', 'Bartimeo el ciego, hijo de Timeo', 'Bartimeo el ciego, hijo de Timeo'], ['mr', '10:50']],
      marcas: [['mr', '10:47', 'Hijo de David, ten misericordia de mí', 'A'], ['mr', '10:50', 'arrojando su capa', 'B'], ['mr', '10:52', 'seguía a Jesús en el camino', 'C']],
      com: [
        ['A', 'Mateo menciona dos ciegos; Marcos y Lucas, uno, al que Marcos llama por su nombre: Bartimeo. Clamó a Jesús como «Hijo de David», un título mesiánico, y cuanto más lo hacían callar, más gritaba.'],
        ['B', 'Al oír que Jesús lo llamaba, arrojó su capa, quizá lo único que tenía, se levantó y vino. Jesús le preguntó qué quería. Pidió ver.'],
        ['C', 'Recobró la vista y siguió a Jesús en el camino, el camino a Jerusalén y a la cruz. El que recibe un milagro de Jesús es llamado a seguirlo.']
      ],
      conc: ['Is 35:5', 'Is 42:7', 'Sal 146:8'],
      lugar: { vista: 'judea', lugares: ['jerico', 'jerusalen'] }, cuando: { etapa: 'viaje', fecha: 'Días antes de la Pascua, 33 d.C.' },
      pensar: 'Bartimeo arrojó su capa para ir a Jesús (Mr 10:50). ¿Qué necesitas soltar para acercarte a él?' },

    { id: 'zaqueo', t: 'Jesús y Zaqueo', sim: ['✝️'], refs: { lc: '19:1-10' },
      marcas: [['lc', '19:5', 'hoy es necesario que pose yo en tu casa', 'A'], ['lc', '19:8', 'la mitad de mis bienes doy a los pobres', 'B'], ['lc', '19:10', 'a buscar y a salvar lo que se había perdido', 'C']],
      com: [
        ['A', 'Zaqueo era jefe de los publicanos en Jericó, rico y despreciado. Pequeño de estatura, subió a un sicómoro para ver a Jesús. Jesús se detuvo, lo llamó por su nombre y se invitó a su casa.'],
        ['B', 'Nadie le exigió nada. El encuentro con Jesús produjo un cambio inmediato: dar la mitad a los pobres y devolver cuatro veces lo robado, más de lo que pedía la ley (Lv 6:5). El arrepentimiento verdadero repara.'],
        ['C', 'El versículo que resume la misión de Jesús en Lucas: el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.']
      ],
      conc: ['Lv 6:1-5', 'Ez 34:16', '2 Co 5:17'],
      lugar: { vista: 'judea', lugares: ['jerico', 'jerusalen'] }, cuando: { etapa: 'viaje', fecha: 'Días antes de la Pascua, 33 d.C.' },
      pensar: 'Jesús llamó a Zaqueo por su nombre (Lc 19:5). ¿Qué cambió en tu vida desde que Jesús entró en tu casa?' },

    { id: 'diez-minas', t: 'La parábola de las diez minas', sim: ['🌾', '👑'], refs: { lc: '19:11-27' },
      marcas: [['lc', '19:11', 'pensaban que el reino de Dios se manifestaría inmediatamente', 'A'], ['lc', '19:13', 'Negociad entre tanto que vengo', 'B'], ['lc', '19:17', 'en lo poco has sido fiel', 'C']],
      com: [
        ['A', 'Cerca de Jerusalén, muchos esperaban que el reino se manifestara de inmediato. Jesús contó esta parábola para enseñar que habría un tiempo de espera: el noble se iría a un país lejano a recibir el reino y luego volvería.'],
        ['B', 'Cada siervo recibió una mina, unos cien días de salario, con una orden: negociar hasta que él volviera. El tiempo de espera es tiempo de trabajo fiel.'],
        ['C', 'Al volver, el rey recompensó la fidelidad con autoridad sobre ciudades, y el siervo que guardó la mina sin usarla perdió lo que tenía. Hoy es el tiempo de invertir lo que Dios nos ha dado.']
      ],
      conc: ['Mt 25:14-30', '1 Co 4:2', 'Ap 22:12'],
      lugar: { vista: 'judea', lugares: ['jerico', 'jerusalen'] }, cuando: { etapa: 'viaje', fecha: 'Días antes de la Pascua, 33 d.C.' },
      pensar: '«Negociad entre tanto que vengo» (Lc 19:13). ¿Qué estás haciendo con lo que el Señor te ha confiado?' }
  ];
  ps.forEach(p => { p.sec = 's2'; A.pasajes.push(p); });
})();

/* ---------- Sección 2 · Tanda 5: pasajes 160 a 194 (Semana Santa, pasión, resurrección y ascensión) ---------- */
(() => {
  const A = window.ARMONIA;
  const J = { vista: 'judea', lugares: ['jerusalen', 'betania'] };
  const SS = f => ({ etapa: 'pasion', fecha: f });
  const R = f => ({ etapa: 'resurreccion', fecha: f });
  const ps = [
    { id: 'entrada-triunfal', t: 'La entrada triunfal en Jerusalén', sim: ['👑'], refs: { mt: '21:1-11', mr: '11:1-11', lc: '19:28-40', jn: '12:12-19' },
      excl: [['lc', '19:39'], ['lc', '19:40'], ['jn', '12:16']],
      marcas: [['mt', '21:5', 'Manso, y sentado sobre una asna', 'A'], ['mt', '21:9', '¡Hosanna al Hijo de David!', 'B'], ['lc', '19:40', 'las piedras clamarían', 'C']],
      com: [
        ['A', 'Jesús entró en Jerusalén montado en un pollino, cumpliendo Zacarías 9:9. Un rey que venía en un caballo traía guerra; en un asno, paz. Jesús vino como Rey manso. Era el domingo de la última semana, y la ciudad se llenaba de peregrinos para la Pascua.'],
        ['B', 'La multitud tendía mantos y ramas, y clamaba con el Salmo 118: «¡Hosanna!», que significa «¡Salva ahora!». Reconocían al Hijo de David, aunque muchos esperaban un libertador político.'],
        ['C', 'Los fariseos pidieron que reprendiera a sus discípulos. Jesús respondió que si ellos callaran, las piedras clamarían. La alabanza a Cristo no puede ser silenciada.']
      ],
      conc: ['Zac 9:9', 'Sal 118:25-26', 'Dn 9:25'],
      lugar: { vista: 'judea', lugares: ['betania', 'jerusalen'] }, cuando: SS('Domingo, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'zac', cv: '9:9', nombre: 'Zacarías 9:9', en: 'Mateo 21:4-5; Juan 12:14-15' }, { tipo: 'cita', libro: 'sal', cv: '118:26', nombre: 'Salmo 118:26', en: 'Mateo 21:9' }],
      pensar: 'Jesús entró como Rey manso (Mt 21:5). ¿Le das la bienvenida como Rey en todas las áreas de tu vida?',
      ir: [{ t: 'Daniel: las setenta semanas', a: '../../daniel/' }] },

    { id: 'llora-jerusalen', t: 'Jesús llora por Jerusalén', sim: ['👑', '⚔️'], refs: { lc: '19:41-44' },
      marcas: [['lc', '19:41', 'lloró sobre ella', 'A'], ['lc', '19:44', 'no conociste el tiempo de tu visitación', 'B']],
      com: [
        ['A', 'En medio de la aclamación, al ver la ciudad, Jesús lloró. No lloró por sí mismo, sino por Jerusalén, que no reconocía lo que le daba paz.'],
        ['B', 'Anunció que sus enemigos la rodearían con vallado y no dejarían piedra sobre piedra. Se cumplió en el año 70, cuando el ejército romano de Tito sitió y destruyó Jerusalén.']
      ],
      conc: ['Dn 9:26', 'Lc 21:20-24'],
      lugar: J, cuando: SS('Domingo, 33 d.C.'),
      pensar: 'Jesús lloró por una ciudad que no reconoció su visitación (Lc 19:44). ¿Por quién lloras tú en oración?',
      ir: [{ t: 'El sacerdocio: el fin del templo en el año 70', a: '../../sacerdocio/' }] },

    { id: 'purifica-templo-2', t: 'La purificación del templo', sim: ['⚔️', '👑'], refs: { mt: '21:12-17', mr: '11:15-19', lc: '19:45-48' },
      excl: [['mt', '21:14'], ['mt', '21:15'], ['mt', '21:16'], ['mr', '11:16']],
      marcas: [['mr', '11:17', 'casa de oración para todas las naciones', 'A'], ['mt', '21:14', 'vinieron a él en el templo ciegos y cojos, y los sanó', 'B']],
      com: [
        ['A', 'Por segunda vez, ahora al final de su ministerio, Jesús echó a los mercaderes del templo (ver el pasaje 22). Citó Isaías 56:7 y Jeremías 7:11: la casa de oración para todas las naciones se había convertido en cueva de ladrones. Marcos registra «para todas las naciones»: el comercio ocupaba el atrio de los gentiles.'],
        ['B', 'Una vez purificado el templo, vinieron a él ciegos y cojos, y los sanó, y los niños clamaban «¡Hosanna!». Donde Cristo limpia, hay sanidad y alabanza.']
      ],
      conc: ['Is 56:7', 'Jer 7:11', 'Sal 8:2', 'Mal 3:1-3'],
      lugar: J, cuando: SS('Lunes, 33 d.C.'),
      escritura: [{ tipo: 'cita', libro: 'is', cv: '56:7', nombre: 'Isaías 56:7', en: 'Marcos 11:17' }, { tipo: 'cita', libro: 'jer', cv: '7:11', nombre: 'Jeremías 7:11', en: 'Marcos 11:17' }, { tipo: 'cita', libro: 'sal', cv: '8:2', nombre: 'Salmo 8:2', en: 'Mateo 21:16' }],
      pensar: 'Después de limpiar el templo, Jesús sanó a los enfermos (Mt 21:14). ¿Qué necesita limpiar Jesús en tu iglesia y en ti para que haya sanidad y alabanza?',
      ir: [{ t: 'El templo de Herodes en 3D', a: '../../templo-herodes/' }] },

    { id: 'autoridad', t: 'La autoridad de Jesús', sim: ['⚔️'], refs: { mt: '21:23-27', mr: '11:27-33', lc: '20:1-8' },
      marcas: [['mr', '11:28', '¿Con qué autoridad haces estas cosas', 'A'], ['mr', '11:30', 'El bautismo de Juan, ¿era del cielo, o de los hombres?', 'B']],
      com: [
        ['A', 'Los principales sacerdotes, escribas y ancianos, los que formaban el sanedrín, le pidieron cuentas en el templo. Querían una respuesta para acusarlo.'],
        ['B', 'Jesús respondió con otra pregunta sobre Juan. Si decían «del cielo», tendrían que explicar por qué no le creyeron; si decían «de los hombres», temían al pueblo. Prefirieron decir «no sabemos». Quien no quiere obedecer la verdad tampoco recibe más luz.']
      ],
      conc: ['Jn 5:30', 'Mt 28:18'], lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: '¿Reconoces la autoridad de Jesús, o, como los líderes, prefieres no comprometerte?' },

    { id: 'labradores', t: 'La parábola de los labradores malvados', sim: ['🌾', '👑', '⚔️'], refs: { mt: '21:33-44', mr: '12:1-11', lc: '20:9-18' },
      marcas: [['mr', '12:6', 'teniendo aún un hijo suyo, amado', 'A'], ['mr', '12:10', 'La piedra que desecharon los edificadores', 'B']],
      com: [
        ['A', 'Una parábola transparente, basada en Isaías 5: la viña es Israel, los siervos enviados son los profetas, y el hijo amado es Jesús. Los labradores lo matan para quedarse con la herencia. Jesús anuncia su propia muerte a manos de los líderes.'],
        ['B', 'Jesús cita el Salmo 118:22: la piedra desechada vino a ser cabeza del ángulo. El rechazado sería exaltado por Dios. Los líderes entendieron que hablaba de ellos.']
      ],
      conc: ['Is 5:1-7', 'Sal 118:22-23', 'Hch 4:11', '1 P 2:7'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '118:22-23', nombre: 'Salmo 118:22-23', en: 'Marcos 12:10-11' }],
      pensar: 'La piedra que los edificadores desecharon es la principal (Mr 12:10). ¿Es Cristo la piedra principal de tu vida?' },

    { id: 'tributo', t: 'La cuestión del tributo', sim: ['⚔️'], refs: { mt: '21:45-46; 22:15-22', mr: '12:12-17', lc: '20:19-26' },
      marcas: [['mr', '12:13', 'para que le sorprendiesen en alguna palabra', 'A'], ['mr', '12:17', 'Dad a César lo que es de César, y a Dios lo que es de Dios', 'B']],
      com: [
        ['A', 'Fariseos y herodianos, enemigos entre sí, se unieron para atraparlo: si decía que no pagaran el tributo, lo acusarían ante Roma; si decía que sí, perdería al pueblo.'],
        ['B', 'Jesús pidió un denario, con la imagen y la inscripción del emperador. Lo que lleva la imagen de César, a César; y lo que lleva la imagen de Dios, el ser humano, a Dios. El creyente cumple sus deberes civiles, pero su vida pertenece a Dios.']
      ],
      conc: ['Ro 13:1-7', 'Gn 1:27', 'Hch 5:29'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: 'Tú llevas la imagen de Dios (Gn 1:27). ¿Le estás dando lo que le pertenece?',
      ir: [{ t: 'El imperio romano', a: '../../imperio-romano/' }] },

    { id: 'resurreccion-pregunta', t: 'La pregunta sobre la resurrección', sim: ['⚔️', '📖'], refs: { mt: '22:23-33', mr: '12:18-27', lc: '20:27-40' },
      marcas: [['mr', '12:24', 'ignoráis las Escrituras, y el poder de Dios', 'A'], ['mr', '12:26', 'Yo soy el Dios de Abraham', 'B']],
      com: [
        ['A', 'Los saduceos, que no creían en la resurrección, inventaron el caso de una mujer casada con siete hermanos. Jesús les dijo que erraban por ignorar dos cosas: las Escrituras y el poder de Dios. En la resurrección no se casan, sino que son como los ángeles.'],
        ['B', 'Jesús citó un texto de Moisés, el único que los saduceos aceptaban: Dios dijo «Yo soy», no «yo era», el Dios de Abraham, Isaac y Jacob. Él no es Dios de muertos, sino de vivos.']
      ],
      conc: ['Éx 3:6', 'Dn 12:2', '1 Co 15:12-22', 'Hch 23:8'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      escritura: [{ tipo: 'cita', libro: 'ex', cv: '3:6', nombre: 'Éxodo 3:6', en: 'Marcos 12:26' }],
      pensar: 'Jesús dijo que los saduceos ignoraban las Escrituras y el poder de Dios (Mr 12:24). ¿Conoces las dos cosas en tu vida?' },

    { id: 'hijo-de-david', t: '¿De quién es hijo el Cristo?', sim: ['👑'], refs: { mt: '22:41-46', mr: '12:35-37', lc: '20:41-44' },
      marcas: [['mr', '12:36', 'Dijo el Señor a mi Señor', 'A']],
      com: [['A', 'Ahora es Jesús quien pregunta. Si el Cristo es hijo de David, ¿cómo lo llama David «mi Señor» en el Salmo 110, inspirado por el Espíritu Santo? Solo hay una respuesta: el Mesías es hijo de David por su humanidad y Señor de David por su divinidad. Nadie se atrevió a preguntarle más.']],
      conc: ['Sal 110:1', 'Ro 1:3-4', 'Hch 2:34-36', 'Ap 22:16'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '110:1', nombre: 'Salmo 110:1', en: 'Marcos 12:36' }],
      pensar: 'Jesús es hijo de David y Señor de David (Mr 12:35-37). ¿Qué significa para ti que Cristo sea a la vez hombre y Dios?',
      ir: [{ t: 'El sacerdocio: el Salmo 110 y Melquisedec', a: '../../sacerdocio/' }] },

    { id: 'escribas', t: 'Jesús denuncia a los escribas', sim: ['⚔️'], refs: { mr: '12:38-40', lc: '20:45-47' },
      marcas: [['mr', '12:40', 'devoran las casas de las viudas', 'A']],
      com: [['A', 'Amaban las ropas largas, los saludos, los primeros asientos y las oraciones largas para ser vistos, y al mismo tiempo se aprovechaban de las viudas. Recibirán mayor condenación: el abuso disfrazado de piedad es especialmente grave ante Dios.']],
      conc: ['Stg 1:27', 'Is 10:1-2'], lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: '¿Buscas el reconocimiento en tu servicio a Dios, o el bien de los más débiles?' },

    { id: 'ofrenda-viuda', t: 'La ofrenda de la viuda', sim: ['📖'], refs: { mr: '12:41-44', lc: '21:1-4' },
      marcas: [['mr', '12:42', 'dos blancas, o sea un cuadrante', 'A'], ['mr', '12:44', 'todo lo que tenía, todo su sustento', 'B']],
      com: [
        ['A', 'Jesús, sentado frente al arca de las ofrendas en el atrio de las mujeres, miraba cómo ofrendaban. Una viuda pobre echó dos blancas, las monedas más pequeñas que existían.'],
        ['B', 'Jesús dijo que ella dio más que todos, porque los ricos dieron de lo que les sobraba, y ella dio todo su sustento. Dios no mide la ofrenda por la cantidad, sino por el corazón y el sacrificio.']
      ],
      conc: ['2 Co 8:1-5', '2 Co 9:7'], lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: 'Dios mide la ofrenda por lo que cuesta (Mr 12:44). ¿Das de lo que te sobra o con sacrificio?',
      ir: [{ t: 'El templo de Herodes: el atrio de las mujeres', a: '../../templo-herodes/' }] },

    { id: 'destruccion-templo', t: 'Jesús anuncia la destrucción del templo', sim: ['👑'], refs: { mt: '24:1-2', mr: '13:1-2', lc: '21:5-6' },
      marcas: [['mr', '13:2', 'No quedará piedra sobre piedra', 'A']],
      com: [['A', 'Los discípulos admiraban las enormes piedras del templo de Herodes, algunas de varios metros de largo. Jesús anunció que no quedaría piedra sobre piedra. Se cumplió literalmente en el año 70.']],
      conc: ['Dn 9:26', 'Lc 19:44'], lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: '¿En qué cosas visibles y aparentemente firmes pones tu seguridad?',
      ir: [{ t: 'El templo de Herodes: lo que queda hoy', a: '../../templo-herodes/' }] },

    { id: 'senales-fin', t: 'Señales antes del fin', sim: ['👑', '📖'], refs: { mt: '24:3-28', mr: '13:3-23', lc: '21:7-24' },
      excl: [['lc', '21:20'], ['lc', '21:24']],
      marcas: [['mt', '24:3', 'qué señal habrá de tu venida, y del fin del siglo?', 'A'], ['mt', '24:15', 'la abominación desoladora', 'B'], ['lc', '21:24', 'hasta que los tiempos de los gentiles se cumplan', 'C']],
      com: [
        ['A', 'En el monte de los Olivos, los discípulos preguntaron cuándo sería la destrucción del templo y cuál sería la señal de su venida y del fin del siglo. Jesús respondió entrelazando ambos acontecimientos: el cercano, el año 70, y el final, su segunda venida.'],
        ['B', 'Jesús citó a Daniel: la abominación desoladora en el lugar santo. Antíoco IV fue un anticipo (167 a.C.); muchos ven un cumplimiento cercano en el año 70; y, según la interpretación pretribulacional, tendrá su cumplimiento final en la gran tribulación, cuando el anticristo se siente en el templo (Dn 9:27; 2 Ts 2:3-4).'],
        ['C', 'Lucas registra el sitio de Jerusalén por ejércitos y la dispersión de su pueblo, «hasta que los tiempos de los gentiles se cumplan». Dios no ha terminado con Israel.']
      ],
      conc: ['Dn 9:27', 'Dn 11:31', 'Dn 12:11', '2 Ts 2:3-4', 'Ro 11:25-26'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'betania'] }, cuando: SS('Martes, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'dn', cv: '9:27', nombre: 'Daniel 9:27', en: 'Mateo 24:15' }],
      pensar: 'Jesús advirtió: «Mirad que nadie os engañe» (Mt 24:4). ¿Cómo te guardas del engaño en tiempos de confusión?',
      ir: [{ t: 'Daniel: la abominación desoladora', a: '../../daniel/' }, { t: 'Los últimos tiempos', a: '../../escatologia/' }] },

    { id: 'venida-hijo-hombre', t: 'La venida del Hijo del Hombre', sim: ['👑'], refs: { mt: '24:29-35; 24:42-44', mr: '13:24-37', lc: '21:25-38' },
      marcas: [['mt', '24:30', 'viniendo sobre las nubes del cielo, con poder y gran gloria', 'A'], ['lc', '21:28', 'erguíos y levantad vuestra cabeza', 'B'], ['mt', '24:42', 'Velad, pues', 'C']],
      com: [
        ['A', 'Después de la tribulación, el Hijo del Hombre vendrá sobre las nubes con poder y gran gloria, como vio Daniel (Dn 7:13). Todo ojo lo verá. Es la venida visible de Cristo a la tierra, que la escatología pretribulacional distingue del arrebatamiento de la iglesia, que ocurre antes de la tribulación.'],
        ['B', 'Para el creyente, estas señales no son motivo de terror, sino de esperanza: «vuestra redención está cerca».'],
        ['C', 'Del día y la hora nadie sabe. Por eso, velar: vivir preparados, en oración y fidelidad, porque el Hijo del Hombre vendrá a la hora que no pensamos.']
      ],
      conc: ['Dn 7:13-14', 'Zac 14:4', 'Hch 1:11', 'Ap 1:7', '1 Ts 4:16-17'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'betania'] }, cuando: SS('Martes, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'dn', cv: '7:13', nombre: 'Daniel 7:13', en: 'Mateo 24:30' }],
      pensar: '«Erguíos y levantad vuestra cabeza» (Lc 21:28). ¿Vives la venida de Cristo con temor o con esperanza?',
      ir: [{ t: 'Los últimos tiempos: la segunda venida', a: '../../escatologia/' }] },

    { id: 'complot', t: 'El complot para matar a Jesús', sim: ['⚔️', '✝️'], refs: { mt: '26:1-16', mr: '14:1-11', lc: '22:1-6', jn: '11:47-53' },
      excl: [['jn', '11:49'], ['jn', '11:50'], ['jn', '11:51'], ['jn', '11:52']],
      marcas: [['mr', '14:3', 'un vaso de alabastro de perfume de nardo puro', 'A'], ['mt', '26:15', 'treinta piezas de plata', 'B'], ['jn', '11:50', 'nos conviene que un hombre muera por el pueblo', 'C']],
      com: [
        ['A', 'En Betania, en casa de Simón el leproso, una mujer, María según Juan 12:3, derramó un perfume de gran valor sobre Jesús. Algunos lo llamaron desperdicio. Jesús dijo que lo había ungido para la sepultura, y que esta obra se contaría en todo el mundo.'],
        ['B', 'Judas fue a los principales sacerdotes y vendió a Jesús por treinta piezas de plata, el precio de un esclavo (Éx 21:32), como anunció Zacarías 11:12.'],
        ['C', 'Caifás aconsejó que muriera un hombre por el pueblo. Juan explica que, sin saberlo, profetizó que Jesús moriría por la nación y por los hijos de Dios dispersos.']
      ],
      conc: ['Zac 11:12-13', 'Éx 21:32', 'Jn 12:1-8'],
      lugar: J, cuando: SS('Miércoles, 33 d.C.'),
      escritura: [{ tipo: 'alude', libro: 'zac', cv: '11:12', nombre: 'Zacarías 11:12', en: 'Mateo 26:15' }],
      pensar: 'María lo dio todo; Judas vendió a Jesús por treinta monedas (Mr 14:3; Mt 26:15). ¿Cuánto vale Jesús para ti?',
      ir: [{ t: 'El sacerdocio: Anás y Caifás', a: '../../sacerdocio/' }] },

    { id: 'santa-cena', t: 'La institución de la Cena del Señor', sim: ['✝️'], refs: { mt: '26:17-29', mr: '14:12-25', lc: '22:7-23', jn: '13:21-30' },
      excl: [['lc', '22:19', 'haced esto en memoria de mí', 'haced esto en memoria de mí'], ['jn', '13:23'], ['jn', '13:26'], ['jn', '13:30']],
      marcas: [['lc', '22:19', 'Esto es mi cuerpo, que por vosotros es dado', 'A'], ['lc', '22:20', 'el nuevo pacto en mi sangre', 'B'], ['jn', '13:30', 'y era ya de noche', 'C']],
      com: [
        ['A', 'En la cena de la Pascua, que recordaba la liberación de Egipto por la sangre del cordero, Jesús tomó el pan, dio gracias, lo partió y dijo: «Esto es mi cuerpo». Él es el verdadero Cordero de la pascua (1 Co 5:7).'],
        ['B', 'La copa es el nuevo pacto en su sangre, anunciado por Jeremías 31:31-34. La Cena del Señor es una ordenanza que la iglesia celebra en memoria de su muerte, anunciándola hasta que él venga (1 Co 11:26).'],
        ['C', 'Jesús anunció que uno lo entregaría. Juan cuenta que le dio a Judas el bocado, y Judas salió. «Y era ya de noche»: la noche de la traición, y la noche del alma de Judas.']
      ],
      conc: ['Éx 12:1-14', 'Jer 31:31-34', '1 Co 5:7', '1 Co 11:23-26'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'jer', cv: '31:31', nombre: 'Jeremías 31:31', en: 'Lucas 22:20' }],
      pensar: 'Cada vez que participas de la Cena, anuncias la muerte del Señor hasta que él venga (1 Co 11:26). ¿Con qué corazón lo haces?',
      ir: [{ t: 'El tabernáculo: el cordero', a: '../../tabernaculo/' }] },

    { id: 'grandeza-servicio', t: 'La grandeza en el servicio', sim: ['📖'], refs: { lc: '22:24-30' },
      marcas: [['lc', '22:27', 'yo estoy entre vosotros como el que sirve', 'A']],
      com: [['A', 'En la misma noche de la Cena, los discípulos discutían quién sería el mayor. Jesús, que esa noche les lavó los pies (Jn 13:1-17), les recordó que en el reino el mayor es el que sirve. Y les prometió que se sentarían a su mesa en su reino.']],
      conc: ['Jn 13:12-17', 'Fil 2:5-8', 'Mr 10:45'], lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      pensar: 'Jesús está entre nosotros «como el que sirve» (Lc 22:27). ¿A quién puedes servir esta semana como él?' },

    { id: 'negacion-anunciada', t: 'Jesús anuncia la negación de Pedro', sim: ['🙏'], refs: { mt: '26:31-35', mr: '14:27-31', lc: '22:31-34', jn: '13:36-38' },
      excl: [['lc', '22:31'], ['lc', '22:32']],
      marcas: [['lc', '22:32', 'yo he rogado por ti, que tu fe no falte', 'A'], ['mt', '26:31', 'Heriré al pastor', 'B'], ['mt', '26:33', 'Aunque todos se escandalicen de ti, yo nunca', 'C']],
      com: [
        ['A', 'Solo Lucas registra que Satanás pidió zarandear a los discípulos como a trigo, y que Jesús oró por Pedro. Jesús sabía que Pedro caería, pero oró para que su fe no fallara, y le encargó: «tú, una vez vuelto, confirma a tus hermanos».'],
        ['B', 'Jesús citó Zacarías 13:7: el pastor sería herido y las ovejas dispersadas. Pero prometió reunirse con ellos en Galilea después de resucitar.'],
        ['C', 'Pedro confiaba en su propia firmeza. Esa misma noche negaría a Jesús tres veces antes del canto del gallo.']
      ],
      conc: ['Zac 13:7', 'Ro 8:34', 'He 7:25', 'Jn 21:15-19'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'getsemani'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'zac', cv: '13:7', nombre: 'Zacarías 13:7', en: 'Mateo 26:31' }],
      pensar: 'Jesús oró por Pedro antes de que cayera (Lc 22:32). ¿Te consuela saber que Cristo intercede por ti?',
      ir: [{ t: 'El sacerdocio: Cristo intercede', a: '../../sacerdocio/' }] },

    { id: 'bolsa-espada', t: 'Bolsa, alforja y espada', sim: ['👑'], refs: { lc: '22:35-38' },
      marcas: [['lc', '22:37', 'Y fue contado con los inicuos', 'A'], ['lc', '22:38', 'Basta', 'B']],
      com: [
        ['A', 'Antes los había enviado sin nada, y no les faltó. Ahora les advierte que vienen tiempos de oposición. Y cita Isaías 53:12: sería contado entre los transgresores, como ocurrió al ser crucificado entre dos malhechores.'],
        ['B', 'Los discípulos tomaron la palabra «espada» literalmente y mostraron dos. Jesús respondió «Basta», cerrando el tema. En Getsemaní reprendió a Pedro por usar la espada: su reino no avanza con armas.']
      ],
      conc: ['Is 53:12', 'Mr 15:27-28', 'Jn 18:36'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '53:12', nombre: 'Isaías 53:12', en: 'Lucas 22:37' }],
      pensar: 'El reino de Cristo no avanza con espadas (Jn 18:36). ¿Con qué armas libras tus batallas espirituales?' },

    { id: 'getsemani', t: 'Jesús ora en Getsemaní', sim: ['🙏', '✝️'], refs: { mt: '26:30; 26:36-46', mr: '14:26; 14:32-42', lc: '22:39-46', jn: '18:1' },
      excl: [['lc', '22:43'], ['lc', '22:44']],
      marcas: [['mr', '14:36', 'Abba, Padre', 'A'], ['lc', '22:44', 'era su sudor como grandes gotas de sangre', 'B'], ['mt', '26:41', 'Velad y orad, para que no entréis en tentación', 'C']],
      com: [
        ['A', 'En el huerto de Getsemaní, «prensa de aceite», Jesús oró con angustia. Llamó a Dios «Abba», la palabra familiar del hijo a su padre, y pidió que pasara la copa, pero se sometió: «no lo que yo quiero, sino lo que tú». La copa era el juicio de Dios sobre el pecado, que él iba a beber por nosotros.'],
        ['B', 'Lucas, el médico, registra que un ángel lo fortalecía y que su sudor era como grandes gotas de sangre. La agonía fue real.'],
        ['C', 'Tres veces encontró dormidos a sus discípulos. «El espíritu a la verdad está dispuesto, pero la carne es débil». La oración es la defensa ante la tentación.']
      ],
      conc: ['He 5:7-9', 'Is 51:17', 'Ro 8:15', 'Mt 6:10'],
      lugar: { vista: 'judea', lugares: ['getsemani', 'jerusalen'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      pensar: '«No lo que yo quiero, sino lo que tú» (Mr 14:36). ¿Qué necesitas rendir hoy a la voluntad del Padre?' },

    { id: 'arresto', t: 'El arresto de Jesús', sim: ['✝️', '👑'], refs: { mt: '26:47-56', mr: '14:43-52', lc: '22:47-53', jn: '18:2-11' },
      excl: [['lc', '22:51'], ['jn', '18:6'], ['jn', '18:10', 'Malco', 'Malco']],
      marcas: [['jn', '18:6', 'retrocedieron, y cayeron a tierra', 'A'], ['lc', '22:51', 'tocando su oreja, le sanó', 'B'], ['mt', '26:53', 'más de doce legiones de ángeles', 'C']],
      com: [
        ['A', 'Judas llegó con una compañía de soldados y le dio un beso, señal de amistad usada para traicionar. Cuando Jesús dijo «Yo soy», retrocedieron y cayeron a tierra. Nadie le quitó la vida: él la entregó (Jn 10:18).'],
        ['B', 'Pedro cortó la oreja de Malco, siervo del sumo sacerdote. Jesús, en el momento de su arresto, sanó al que venía a prenderlo. Su último milagro antes de la cruz fue un acto de amor hacia un enemigo.'],
        ['C', 'Podía pedir al Padre más de doce legiones de ángeles, pero así debía cumplirse la Escritura. Entonces todos los discípulos huyeron.']
      ],
      conc: ['Jn 10:17-18', 'Sal 41:9', 'Zac 13:7'],
      lugar: { vista: 'judea', lugares: ['getsemani', 'jerusalen'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      escritura: [{ tipo: 'alude', libro: 'sal', cv: '41:9', nombre: 'Salmo 41:9', en: 'Juan 13:18; Mateo 26:50' }],
      pensar: 'Jesús sanó al que venía a arrestarlo (Lc 22:51). ¿Cómo tratas a quienes te hacen daño?' },

    { id: 'pedro-niega', t: 'Pedro niega a Jesús', sim: ['🙏'], refs: { mt: '26:57-58; 26:69-75', mr: '14:53-54; 14:66-72', lc: '22:54-62', jn: '18:12-18; 18:25-27' },
      excl: [['lc', '22:61', 'Entonces, vuelto el Señor, miró a Pedro', 'miró a Pedro']],
      marcas: [['lc', '22:54', 'Pedro le seguía de lejos', 'A'], ['lc', '22:61', 'vuelto el Señor, miró a Pedro', 'B'], ['lc', '22:62', 'lloró amargamente', 'C']],
      com: [
        ['A', 'Llevaron a Jesús primero ante Anás y luego a la casa de Caifás. Pedro lo siguió, pero de lejos, y se calentó junto al fuego con los criados. La caída comenzó con la distancia.'],
        ['B', 'Tres veces negó conocerlo, la última con juramentos. Cantó el gallo, y Lucas registra que el Señor se volvió y miró a Pedro. No fue una mirada de condena, sino de amor que lo llevó al arrepentimiento.'],
        ['C', 'Pedro salió y lloró amargamente. Judas sintió remordimiento y se quitó la vida; Pedro se arrepintió y fue restaurado (Jn 21). La diferencia no estuvo en la gravedad de la caída, sino en volver a Jesús.']
      ],
      conc: ['2 Co 7:10', 'Jn 21:15-19', 'Sal 51:17'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      pensar: 'La mirada de Jesús llevó a Pedro al arrepentimiento (Lc 22:61-62). ¿Has experimentado esa mirada de amor después de fallar?' },

    { id: 'escarnecido', t: 'Jesús escarnecido y golpeado', sim: ['✝️'], refs: { mt: '26:67-68', mr: '14:65', lc: '22:63-65' },
      marcas: [['mr', '14:65', 'comenzaron a escupirle', 'A']],
      com: [['A', 'Le escupieron, le vendaron los ojos y lo golpeaban diciendo: «Profetiza». Se cumplía Isaías 50:6: «Di mi cuerpo a los heridores… no escondí mi rostro de injurias y de esputos». El Señor de la gloria soportó la humillación por nosotros.']],
      conc: ['Is 50:6', 'Is 53:3', '1 P 2:23'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Jueves por la noche, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '50:6', nombre: 'Isaías 50:6', en: 'Marcos 14:65' }],
      pensar: 'Jesús soportó la humillación sin responder (1 P 2:23). ¿Cómo te ayuda su ejemplo cuando eres injuriado?' },

    { id: 'concilio', t: 'Jesús ante el concilio', sim: ['👑', '⚔️'], refs: { mt: '26:59-66', mr: '14:55-64', lc: '22:66-71', jn: '18:19-24' },
      marcas: [['mr', '14:56', 'sus testimonios no concordaban', 'A'], ['mr', '14:62', 'Yo soy', 'B'], ['mr', '14:63', 'el sumo sacerdote, rasgando su vestidura', 'C']],
      com: [
        ['A', 'El sanedrín buscaba testimonios contra Jesús para condenarlo a muerte, pero los testigos falsos no concordaban. Jesús callaba, como el cordero llevado al matadero (Is 53:7).'],
        ['B', 'Bajo juramento, el sumo sacerdote le preguntó si era el Cristo, el Hijo del Bendito. Jesús respondió «Yo soy», y añadió que lo verían sentado a la diestra del poder de Dios y viniendo en las nubes del cielo, uniendo el Salmo 110:1 y Daniel 7:13.'],
        ['C', 'Caifás rasgó sus vestiduras, algo que la ley prohibía al sumo sacerdote (Lv 21:10), y lo acusó de blasfemia. Todos lo condenaron. El sumo sacerdote de Israel condenó al Sumo Sacerdote que Dios había enviado.']
      ],
      conc: ['Is 53:7', 'Sal 110:1', 'Dn 7:13', 'Lv 21:10'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Viernes al amanecer, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'dn', cv: '7:13', nombre: 'Daniel 7:13', en: 'Marcos 14:62' }, { tipo: 'cumple', libro: 'is', cv: '53:7', nombre: 'Isaías 53:7', en: 'Marcos 14:61' }],
      pensar: 'Jesús confesó la verdad aunque le costó la vida (Mr 14:62). ¿Qué te enseña su valentía?',
      ir: [{ t: 'Daniel: el Hijo del Hombre', a: '../../daniel/' }, { t: 'El sacerdocio: Caifás', a: '../../sacerdocio/' }] },

    { id: 'ante-pilato', t: 'Jesús ante Pilato', sim: ['👑'], refs: { mt: '27:1-2; 27:11-14', mr: '15:1-5', lc: '23:1-5', jn: '18:28-37' },
      excl: [['jn', '18:36'], ['jn', '18:37']],
      marcas: [['jn', '18:28', 'para no contaminarse', 'A'], ['jn', '18:36', 'Mi reino no es de este mundo', 'B'], ['jn', '18:37', 'para dar testimonio a la verdad', 'C']],
      com: [
        ['A', 'El sanedrín no podía ejecutar a nadie, así que llevaron a Jesús al gobernador romano. No entraron al pretorio para no contaminarse y poder comer la pascua, mientras entregaban a muerte al inocente.'],
        ['B', 'Ante Pilato acusaron a Jesús de hacerse rey. Jesús explicó que su reino no es de este mundo: no proviene de él ni se impone con sus métodos.'],
        ['C', 'Jesús vino a dar testimonio de la verdad. Pilato respondió con escepticismo: «¿Qué es la verdad?», teniendo delante a la Verdad (Jn 14:6).']
      ],
      conc: ['Jn 14:6', '1 Ti 6:13', 'Is 53:7'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Viernes por la mañana, 33 d.C.'),
      pensar: 'Pilato tenía delante la Verdad y preguntó «¿Qué es la verdad?» (Jn 18:38). ¿Escuchas la voz de Cristo?',
      ir: [{ t: 'El imperio romano: Poncio Pilato', a: '../../imperio-romano/' }] },

    { id: 'ante-herodes', t: 'Jesús ante Herodes', sim: ['⚔️'], refs: { lc: '23:6-12' },
      marcas: [['lc', '23:8', 'esperaba verle hacer alguna señal', 'A'], ['lc', '23:12', 'se hicieron amigos Pilato y Herodes', 'B']],
      com: [
        ['A', 'Al saber que Jesús era galileo, Pilato lo envió a Herodes Antipas, que estaba en Jerusalén por la fiesta. Herodes, el que mató a Juan el Bautista, quería ver un milagro, como un espectáculo. Jesús no le respondió ni una palabra.'],
        ['B', 'Herodes y sus soldados lo menospreciaron y escarnecieron, y lo vistieron con una ropa espléndida. Ese día Pilato y Herodes, que eran enemigos, se hicieron amigos. Se cumplía el Salmo 2:2 (Hch 4:26-27).']
      ],
      conc: ['Sal 2:1-2', 'Hch 4:26-27', 'Lc 9:9'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Viernes por la mañana, 33 d.C.'),
      escritura: [{ tipo: 'alude', libro: 'sal', cv: '2:2', nombre: 'Salmo 2:2', en: 'Lucas 23:12; Hechos 4:26-27' }],
      pensar: 'Herodes buscaba un espectáculo, no a Cristo (Lc 23:8). ¿Buscas a Jesús por lo que hace o por quién es?' },

    { id: 'sentencia', t: 'Jesús es sentenciado a muerte', sim: ['✝️'], refs: { mt: '27:15-26', mr: '15:6-15', lc: '23:13-25', jn: '18:38-40; 19:1-16' },
      excl: [['mt', '27:19'], ['mt', '27:24'], ['mt', '27:25'], ['jn', '19:5'], ['jn', '19:11']],
      marcas: [['mt', '27:21', 'A Barrabás', 'A'], ['jn', '19:5', '¡He aquí el hombre!', 'B'], ['mt', '27:24', 'Inocente soy yo de la sangre de este justo', 'C']],
      com: [
        ['A', 'Pilato ofreció soltar a Jesús o a Barrabás, un homicida. El pueblo pidió a Barrabás. Es una imagen del evangelio: el culpable queda libre y el inocente muere en su lugar.'],
        ['B', 'Pilato lo hizo azotar. Los soldados le pusieron una corona de espinas y un manto de púrpura. Pilato lo presentó: «¡He aquí el hombre!», esperando que el castigo bastara. Clamaron: «¡Crucifícale!».'],
        ['C', 'Pilato sabía que Jesús era inocente; su esposa le había advertido por un sueño. Se lavó las manos ante la multitud, pero no se libró de su responsabilidad: por miedo a perder su posición, entregó al justo.']
      ],
      conc: ['Is 53:5-6', '2 Co 5:21', '1 P 2:24', 'Is 52:14'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Viernes por la mañana, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '53:5', nombre: 'Isaías 53:5', en: 'Juan 19:1' }],
      pensar: 'Barrabás quedó libre porque Jesús ocupó su lugar (Mt 27:26). ¿Te ves a ti mismo en Barrabás?' },

    { id: 'crucifixion', t: 'La crucifixión y muerte de Jesús', sim: ['✝️', '👑', '🙏'], refs: { mt: '27:32-56', mr: '15:21-41', lc: '23:26-49', jn: '19:17-30' },
      excl: [['lc', '23:34'], ['lc', '23:43'], ['lc', '23:46'], ['jn', '19:26'], ['jn', '19:27'], ['jn', '19:28'], ['jn', '19:30']],
      marcas: [['lc', '23:34', 'Padre, perdónalos', 'A'], ['lc', '23:43', 'hoy estarás conmigo en el paraíso', 'B'], ['mt', '27:46', 'Dios mío, Dios mío, ¿por qué me has desamparado?', 'C'], ['jn', '19:30', 'Consumado es', 'D'], ['mt', '27:51', 'el velo del templo se rasgó en dos', 'E']],
      com: [
        ['A', 'Simón de Cirene cargó la cruz. En el Gólgota, «lugar de la Calavera», crucificaron a Jesús entre dos malhechores. Las siete palabras de la cruz están repartidas en los cuatro evangelios. La primera fue una oración por sus verdugos.'],
        ['B', 'Uno de los malhechores reconoció su culpa y la inocencia de Jesús, y le pidió que se acordara de él. Jesús le prometió el paraíso ese mismo día. La salvación es por gracia, por la fe, aun en el último momento.'],
        ['C', 'Desde el mediodía hubo tinieblas sobre toda la tierra. A la hora novena, Jesús clamó con el Salmo 22. En la cruz, el Hijo cargó el pecado del mundo y sufrió el abandono que nosotros merecíamos (2 Co 5:21). El Salmo 22 describe además la burla, las manos y los pies horadados y el sorteo de sus vestidos.'],
        ['D', '«Consumado es» (en griego, tetélestai) se escribía en los recibos: «pagado por completo». La obra de la redención quedó terminada. Jesús encomendó su espíritu al Padre y entregó la vida.'],
        ['E', 'El velo del templo se rasgó de arriba abajo: el camino a la presencia de Dios quedó abierto (He 10:19-20). El centurión confesó: «Verdaderamente éste era Hijo de Dios».']
      ],
      conc: ['Sal 22:1, 16-18', 'Is 53:4-12', '2 Co 5:21', 'He 10:19-20', 'Jn 1:29'],
      lugar: { vista: 'judea', lugares: ['golgota', 'jerusalen'] }, cuando: SS('Viernes, de la hora tercera a la novena, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '22:1', nombre: 'Salmo 22:1', en: 'Mateo 27:46' }, { tipo: 'cumple', libro: 'sal', cv: '22:18', nombre: 'Salmo 22:18', en: 'Juan 19:24' }, { tipo: 'cumple', libro: 'is', cv: '53:12', nombre: 'Isaías 53:12', en: 'Marcos 15:27-28; Lucas 23:34' }],
      pensar: '«Consumado es» (Jn 19:30). ¿Descansas en la obra terminada de Cristo, o sigues intentando pagar lo que él ya pagó?',
      ir: [{ t: 'El sacerdocio: el velo rasgado', a: '../../sacerdocio/' }, { t: 'El tabernáculo: el velo', a: '../../tabernaculo/' }] },

    { id: 'sepultura', t: 'Jesús es sepultado', sim: ['✝️', '👑'], refs: { mt: '27:57-61', mr: '15:42-47', lc: '23:50-56', jn: '19:38-42' },
      excl: [['jn', '19:39']],
      marcas: [['mr', '15:43', 'José de Arimatea', 'A'], ['jn', '19:39', 'Nicodemo', 'B'], ['mt', '27:60', 'en su sepulcro nuevo', 'C']],
      com: [
        ['A', 'José de Arimatea, miembro noble del concilio que no había consentido en la condena, se atrevió a pedir el cuerpo a Pilato. Hasta entonces había sido discípulo en secreto.'],
        ['B', 'Juan añade que Nicodemo, el que vino de noche (Jn 3), trajo unas cien libras de mirra y áloe. La cruz sacó a la luz a los discípulos escondidos.'],
        ['C', 'Lo pusieron en un sepulcro nuevo, cavado en la peña, y rodaron una gran piedra. Se cumplía Isaías 53:9: con los ricos fue en su muerte. Las mujeres observaron dónde lo ponían, y reposaron el día de reposo.']
      ],
      conc: ['Is 53:9', '1 Co 15:3-4', 'Jn 3:1-2'],
      lugar: { vista: 'judea', lugares: ['golgota', 'jerusalen'] }, cuando: SS('Viernes por la tarde, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '53:9', nombre: 'Isaías 53:9', en: 'Mateo 27:57-60' }],
      pensar: 'José y Nicodemo dejaron de ser discípulos en secreto (Jn 19:38-39). ¿Hay algo que te impide confesar abiertamente a Cristo?' },

    { id: 'resurreccion', t: 'La resurrección', sim: ['👑', '✝️'], refs: { mt: '28:1-10', mr: '16:1-8', lc: '24:1-12', jn: '20:1-10' },
      excl: [['mt', '28:2'], ['mt', '28:3'], ['mt', '28:4'], ['lc', '24:5', '¿Por qué buscáis entre los muertos al que vive?', '¿Por qué buscáis entre los muertos al que vive?']],
      marcas: [['mt', '28:6', 'No está aquí, pues ha resucitado, como dijo', 'A'], ['lc', '24:5', '¿Por qué buscáis entre los muertos al que vive?', 'B'], ['jn', '20:8', 'y vio, y creyó', 'C']],
      com: [
        ['A', 'El primer día de la semana, muy de mañana, las mujeres fueron al sepulcro con especias aromáticas. La piedra había sido removida y el sepulcro estaba vacío. El ángel anunció: «No está aquí, pues ha resucitado, como dijo». La resurrección es el fundamento de la fe cristiana (1 Co 15:14-17).'],
        ['B', 'Los cuatro evangelios coinciden en lo esencial: el sepulcro vacío, el anuncio angélico y las mujeres como primeras testigos, algo que nadie habría inventado en una cultura que no aceptaba el testimonio de mujeres. Los detalles complementarios, como el número de ángeles o de mujeres, son propios de testigos independientes.'],
        ['C', 'Pedro y Juan corrieron al sepulcro. Juan vio los lienzos puestos allí, y el sudario enrollado aparte, y creyó. Jesús había vencido la muerte.']
      ],
      conc: ['Sal 16:10', '1 Co 15:3-8, 14-20', 'Ro 1:4', 'Hch 2:24-32'],
      lugar: { vista: 'judea', lugares: ['golgota', 'jerusalen'] }, cuando: R('Domingo al amanecer, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '16:10', nombre: 'Salmo 16:10', en: 'Hechos 2:27-31' }],
      pensar: '«¿Por qué buscáis entre los muertos al que vive?» (Lc 24:5). ¿Vives como quien sigue a un Cristo vivo?' },

    { id: 'emaus', t: 'El camino a Emaús', sim: ['👑', '📖'], refs: { mr: '16:12-13', lc: '24:13-35' },
      marcas: [['lc', '24:27', 'comenzando desde Moisés, y siguiendo por todos los profetas', 'A'], ['lc', '24:32', '¿No ardía nuestro corazón en nosotros', 'B'], ['lc', '24:31', 'les fueron abiertos los ojos', 'C']],
      com: [
        ['A', 'Dos discípulos caminaban tristes hacia Emaús. Jesús se acercó sin que lo reconocieran y, comenzando por Moisés y todos los profetas, les explicó lo que de él decían las Escrituras. Toda la Biblia habla de Cristo.'],
        ['B', 'Cuando Jesús abre las Escrituras, el corazón arde. La Palabra explicada por el Señor resucitado, por su Espíritu, produce fuego en el corazón.'],
        ['C', 'Al partir el pan, lo reconocieron, y él desapareció. Volvieron esa misma noche a Jerusalén a contar lo sucedido.']
      ],
      conc: ['Lc 24:44-45', 'Jn 5:39', '1 Co 15:5'],
      lugar: { vista: 'judea', lugares: ['emaus', 'jerusalen'] }, cuando: R('Domingo por la tarde, 33 d.C.'),
      pensar: '«¿No ardía nuestro corazón…?» (Lc 24:32). ¿Arde tu corazón cuando lees la Escritura con Jesús?' },

    { id: 'aparece-discipulos', t: 'Jesús se aparece a los discípulos', sim: ['👑', '🕊️'], refs: { lc: '24:36-43', jn: '20:19-23' },
      excl: [['jn', '20:21'], ['jn', '20:22'], ['jn', '20:23'], ['lc', '24:42'], ['lc', '24:43']],
      marcas: [['lc', '24:39', 'un espíritu no tiene carne ni huesos', 'A'], ['jn', '20:21', 'Como me envió el Padre, así también yo os envío', 'B'], ['jn', '20:22', 'Recibid el Espíritu Santo', 'C']],
      com: [
        ['A', 'Con las puertas cerradas por miedo, Jesús se puso en medio y dijo: «Paz a vosotros». Pensaban que veían un espíritu, pero les mostró sus manos y sus pies, y comió delante de ellos. Resucitó con un cuerpo real, glorificado.'],
        ['B', 'Jesús los envió como el Padre lo había enviado a él: la misión de la iglesia continúa la misión de Cristo.'],
        ['C', 'Jesús sopló sobre ellos y dijo: «Recibid el Espíritu Santo». Muchos ven aquí el momento en que los discípulos nacieron de nuevo por el Espíritu, en la nueva creación (como Dios sopló sobre Adán, Gn 2:7). Pero Jesús les mandó esperar en Jerusalén la promesa del Padre: el bautismo en el Espíritu Santo, para recibir poder, que llegó en Pentecostés (Hch 1:4-8; 2:4). Son dos experiencias distintas.']
      ],
      conc: ['Gn 2:7', 'Hch 1:4-8', 'Hch 2:1-4', '1 Co 15:5'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: R('Domingo por la noche, 33 d.C.'),
      pensar: 'Jesús sopló el Espíritu y luego mandó esperar el poder de lo alto (Jn 20:22; Lc 24:49). ¿Has recibido el bautismo en el Espíritu Santo?',
      ir: [{ t: 'Hechos: Pentecostés', a: '../../hechos/' }] },

    { id: 'tomas', t: 'Jesús se aparece a Tomás', sim: ['👑'], refs: { mr: '16:14', jn: '20:24-31' },
      marcas: [['jn', '20:28', '¡Señor mío, y Dios mío!', 'A'], ['jn', '20:29', 'bienaventurados los que no vieron, y creyeron', 'B'], ['jn', '20:31', 'para que creáis que Jesús es el Cristo', 'C']],
      com: [
        ['A', 'Tomás no estaba la primera vez y exigió ver y tocar las heridas. Ocho días después, Jesús le mostró sus manos y su costado. Tomás hizo la confesión más alta de los evangelios: «¡Señor mío, y Dios mío!».'],
        ['B', 'Jesús pronunció una bienaventuranza para todos los que creerían después sin haberlo visto: para nosotros.'],
        ['C', 'Juan explica el propósito de su evangelio: que creamos que Jesús es el Cristo, el Hijo de Dios, y creyendo tengamos vida en su nombre.']
      ],
      conc: ['1 P 1:8', 'Jn 1:1', 'Ro 10:9'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: R('Ocho días después, 33 d.C.'),
      pensar: 'Jesús llamó bienaventurados a los que creen sin ver (Jn 20:29). ¿Puedes decir con Tomás: «Señor mío, y Dios mío»?' },

    { id: 'gran-comision', t: 'Jesús presenta la Gran Comisión', sim: ['👑', '🕊️', '🙌'], refs: { mt: '28:16-20', mr: '16:15-18' },
      marcas: [['mt', '28:18', 'Toda potestad me es dada', 'A'], ['mt', '28:19', 'haced discípulos a todas las naciones', 'B'], ['mr', '16:17', 'estas señales seguirán a los que creen', 'C']],
      com: [
        ['A', 'En un monte de Galilea, Jesús declaró que toda autoridad en el cielo y en la tierra le había sido dada. La misión de la iglesia se apoya en esa autoridad.'],
        ['B', 'El mandato: ir, hacer discípulos de todas las naciones, bautizarlos en el nombre del Padre, del Hijo y del Espíritu Santo, y enseñarles a guardar todo lo que él mandó. Y la promesa: «yo estoy con vosotros todos los días».'],
        ['C', 'Marcos registra las señales que seguirán a los que creen: echar fuera demonios en su nombre, hablar nuevas lenguas, quedar protegidos del daño y sanar a los enfermos por la imposición de manos. Hechos muestra estas señales en la iglesia. Algunos manuscritos antiguos terminan Marcos en 16:8, pero el pasaje está en la gran mayoría de los manuscritos y en la RV 1960, y su contenido concuerda con Hechos (Hch 2:4; 28:3-6; 3:6-8).']
      ],
      conc: ['Hch 1:8', 'Hch 2:4', 'Hch 28:3-6', '1 Co 12:7-11'],
      lugar: { vista: 'galilea', lugares: ['r-galilea', 'mar-galilea'] }, cuando: R('En Galilea, 33 d.C.'),
      pensar: 'Jesús prometió estar con nosotros todos los días mientras cumplimos su comisión (Mt 28:20). ¿Cuál es tu parte en esa misión?',
      ir: [{ t: 'Hechos: las señales en la iglesia', a: '../../hechos/' }] },

    { id: 'promesa-padre', t: 'Jesús se aparece a los discípulos en Jerusalén', sim: ['🕊️', '📖'], refs: { lc: '24:44-49' },
      marcas: [['lc', '24:44', 'en la ley de Moisés, en los profetas y en los salmos', 'A'], ['lc', '24:47', 'en todas las naciones, comenzando desde Jerusalén', 'B'], ['lc', '24:49', 'hasta que seáis investidos de poder desde lo alto', 'C']],
      com: [
        ['A', 'Jesús abrió el entendimiento de los discípulos para que comprendieran las Escrituras: la ley, los profetas y los salmos, las tres partes de la Biblia hebrea, hablaban de él.'],
        ['B', 'El mensaje: arrepentimiento y perdón de pecados en su nombre, a todas las naciones, comenzando desde Jerusalén. Es el plan que se cumple en Hechos (Hch 1:8).'],
        ['C', 'Antes de ir, debían quedarse en Jerusalén hasta ser investidos de poder desde lo alto: la promesa del Padre, el bautismo en el Espíritu Santo. La misión requiere el poder del Espíritu. Se cumplió en Pentecostés, y la promesa es para todos los creyentes (Hch 2:39).']
      ],
      conc: ['Jl 2:28-29', 'Hch 1:4-8', 'Hch 2:1-4, 38-39'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: R('40 días después de la resurrección, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'jl', cv: '2:28-29', nombre: 'Joel 2:28-29', en: 'Lucas 24:49; Hechos 2:16-18' }],
      pensar: 'Jesús mandó esperar hasta ser investidos de poder (Lc 24:49). ¿Estás buscando ese poder para cumplir tu llamado?',
      ir: [{ t: 'Hechos: Pentecostés', a: '../../hechos/' }] },

    { id: 'ascension', t: 'La ascensión', sim: ['👑', '🙌'], refs: { mr: '16:19-20', lc: '24:50-53' },
      marcas: [['lc', '24:51', 'fue llevado arriba al cielo', 'A'], ['mr', '16:19', 'se sentó a la diestra de Dios', 'B'], ['mr', '16:20', 'confirmando la palabra con las señales que la seguían', 'C']],
      com: [
        ['A', 'Jesús llevó a sus discípulos hasta Betania, alzó las manos y los bendijo, y mientras los bendecía fue llevado al cielo. Lucas termina su evangelio como lo comenzó: en el templo, con alabanza. Hechos 1 narra la ascensión con más detalle y la promesa de que volverá de la misma manera.'],
        ['B', 'Cristo se sentó a la diestra de Dios, el lugar de autoridad, como anunció el Salmo 110:1. Desde allí intercede por los suyos y derramó el Espíritu Santo (Hch 2:33).'],
        ['C', 'Los discípulos salieron a predicar en todas partes, y el Señor obraba con ellos, confirmando la palabra con las señales que la seguían. Así termina el evangelio y comienza la historia de la iglesia, que continúa hasta hoy.']
      ],
      conc: ['Sal 110:1', 'Hch 1:9-11', 'Hch 2:33', 'He 1:3'],
      lugar: { vista: 'judea', lugares: ['betania', 'jerusalen'] }, cuando: R('40 días después de la resurrección, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '110:1', nombre: 'Salmo 110:1', en: 'Marcos 16:19' }],
      pensar: 'El Señor obraba con ellos, confirmando la palabra con señales (Mr 16:20). ¿Esperas que Cristo obre así por medio de ti?',
      ir: [{ t: 'Hechos de los Apóstoles', a: '../../hechos/' }, { t: 'Los últimos tiempos: su regreso', a: '../../escatologia/' }] }
  ];
  ps.forEach(p => { p.sec = 's2'; A.pasajes.push(p); });
  A.secciones.forEach(s => delete s.pendiente);
})();

/* ---------- Pasajes que faltaban en la armonía del libro: se insertan en su lugar cronológico ---------- */
window.ARMONIA.insertar = function (tras, lista) {
  const A = window.ARMONIA;
  let ancla = tras;
  lista.forEach(p => {
    const i = A.pasajes.findIndex(x => x.id === ancla);
    if (i < 0) throw new Error('No existe el pasaje ' + ancla);
    p.sec = p.sec || 's2'; p.nuevo = true;
    A.pasajes.splice(i + 1, 0, p); ancla = p.id;
  });
};

/* Faltantes · Galilea */
(() => {
  const A = window.ARMONIA, I = A.insertar;
  const G = { vista: 'galilea', lugares: ['capernaum', 'mar-galilea'] };
  const C = { etapa: 'galilea', fecha: 'c. 31–32 d.C.' };
  I('gadareno', [
    { id: 'jairo', t: 'La hija de Jairo y la mujer que tocó el manto', sim: ['🙌'], refs: { mt: '9:18-26', mr: '5:21-43', lc: '8:40-56' },
      excl: [['mr', '5:26'], ['mr', '5:41', 'Talita cumi', 'Talita cumi']],
      marcas: [['mr', '5:28', 'Si tocare tan solamente su manto', 'A'], ['mr', '5:34', 'Hija, tu fe te ha hecho salva', 'B'], ['mr', '5:36', 'No temas, cree solamente', 'C']],
      com: [
        ['A', 'Jairo, principal de la sinagoga, rogó por su hija moribunda. Camino a su casa, una mujer con un flujo de sangre de doce años, que había gastado todo en médicos, tocó el borde del manto de Jesús. Su enfermedad la hacía impura según la ley, y no podía tocar a nadie. Fue sanada al instante, y Jesús sintió que había salido poder de él.'],
        ['B', 'Jesús no la dejó irse en secreto: la llamó «hija» delante de todos. No solo sanó su cuerpo, sino que la restauró públicamente y le dio paz.'],
        ['C', 'Mientras tanto, avisaron a Jairo que su hija había muerto. Jesús le dijo: «No temas, cree solamente». Tomó a la niña de la mano y le dijo «Talita cumi», «Niña, a ti te digo, levántate», y ella se levantó. La demora que parecía fatal sirvió para un milagro mayor.']
      ],
      conc: ['Lv 15:25-27', 'Nm 15:38-40', 'Mal 4:2', 'Mr 6:56'],
      lugar: G, cuando: C,
      pensar: '«No temas, cree solamente» (Mr 5:36). ¿Qué noticia te está diciendo que ya es demasiado tarde?' }
  ]);
  I('sobre-el-agua', [
    { id: 'genesaret', t: 'Jesús sana a todos los que le tocan', sim: ['🙌'], refs: { mt: '14:34-36', mr: '6:53-56' },
      marcas: [['mr', '6:56', 'todos los que le tocaban quedaban sanos', 'A']],
      com: [['A', 'Al llegar a la tierra de Genesaret, la gente reconoció a Jesús y le traía enfermos en camillas de todas partes. Le rogaban que les dejase tocar el borde de su manto, como la mujer del flujo de sangre, y todos los que le tocaban quedaban sanos. El libro de la armonía titula así el pasaje siguiente; aquí se ubica el texto que le corresponde.']],
      conc: ['Mal 4:2', 'Hch 5:15-16', 'Hch 19:11-12'],
      lugar: { vista: 'galilea', lugares: ['magdala', 'capernaum', 'mar-galilea'] }, cuando: C,
      pensar: 'Bastaba tocar el borde de su manto (Mr 6:56). ¿Cómo te acercas tú a Jesús con tus necesidades?' }
  ]);
  I('pureza', [
    { id: 'sirofenicia', t: 'La fe de la mujer sirofenicia', sim: ['🙌', '😈'], refs: { mt: '15:21-28', mr: '7:24-30' },
      marcas: [['mt', '15:22', 'Mi hija es gravemente atormentada por un demonio', 'A'], ['mt', '15:27', 'los perrillos comen de las migajas', 'B'], ['mt', '15:28', 'grande es tu fe', 'C']],
      com: [
        ['A', 'Jesús se retiró a la región de Tiro y Sidón, territorio gentil. Una mujer cananea clamó por su hija, atormentada por un demonio. Al principio Jesús no le respondió.'],
        ['B', 'Jesús le dijo que primero debía saciar a los hijos, Israel. Ella no se ofendió: aceptó la imagen y pidió solo las migajas. Su humildad y su insistencia mostraron una fe extraordinaria.'],
        ['C', 'Jesús alabó su gran fe, y su hija fue liberada a distancia desde aquella hora. Una gentil recibió lo que muchos en Israel rechazaban: anticipo de la gracia para todas las naciones.']
      ],
      conc: ['Ro 1:16', 'Ro 15:8-9', 'Mt 8:10-11'],
      lugar: { vista: 'israel', lugares: ['tiro-sidon', 'r-galilea', 'capernaum'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: 'La mujer insistió con humildad aunque parecía que Jesús no respondía (Mt 15:23-27). ¿Perseveras cuando Dios parece callar?' },
    { id: 'sordomudo', t: 'Jesús sana a un sordomudo y a muchos más', sim: ['🙌', '🙏'], refs: { mt: '15:29-31', mr: '7:31-37' },
      marcas: [['mr', '7:33', 'tomándole aparte de la gente', 'A'], ['mr', '7:34', 'levantando los ojos al cielo, gimió', 'B'], ['mr', '7:37', 'bien lo ha hecho todo', 'C']],
      com: [
        ['A', 'En la Decápolis, región gentil, le trajeron un sordo y tartamudo. Jesús lo apartó de la multitud y le habló con gestos que él podía entender: le tocó los oídos y la lengua.'],
        ['B', 'Jesús miró al cielo, gimió y dijo «Efata», «Sé abierto». El gemido muestra su compasión por el sufrimiento humano y su dependencia del Padre.'],
        ['C', 'La gente se maravilló: «bien lo ha hecho todo; hace a los sordos oír, y a los mudos hablar», como anunció Isaías 35:5-6. Mateo añade que sanó a cojos, ciegos, mudos y mancos, y glorificaban al Dios de Israel.']
      ],
      conc: ['Is 35:5-6', 'Ro 8:26'],
      lugar: { vista: 'galilea', lugares: ['decapolis', 'mar-galilea', 'tiro-sidon'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      escritura: [{ tipo: 'alude', libro: 'is', cv: '35:5-6', nombre: 'Isaías 35:5-6', en: 'Marcos 7:37' }],
      pensar: 'Jesús trató al sordomudo de una manera personal (Mr 7:33). ¿Cómo te ha tratado Jesús de manera personal?' },
    { id: 'cuatro-mil', t: 'Jesús alimenta a cuatro mil', sim: ['🙌'], refs: { mt: '15:32-39', mr: '8:1-10' },
      marcas: [['mr', '8:2', 'Tengo compasión de la gente', 'A'], ['mr', '8:8', 'siete canastas', 'B']],
      com: [
        ['A', 'Una multitud llevaba tres días con Jesús y no tenía qué comer. Esta vez, en la Decápolis, la mayoría probablemente eran gentiles. La compasión de Jesús no tiene fronteras.'],
        ['B', 'Con siete panes y unos pececillos alimentó a cuatro mil, y sobraron siete canastas. Es un milagro distinto del de los cinco mil: Jesús mismo los distingue (Mr 8:19-20).']
      ],
      conc: ['Mr 8:19-20', 'Sal 145:15-16'],
      lugar: { vista: 'galilea', lugares: ['decapolis', 'mar-galilea', 'magdala'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: 'Los discípulos olvidaron pronto el milagro anterior (Mr 8:4). ¿Recuerdas lo que Dios ya hizo cuando enfrentas una nueva necesidad?' },
    { id: 'levadura-herodes', t: 'La levadura de los fariseos y de Herodes', sim: ['📖', '⚔️'], refs: { mt: '16:5-12', mr: '8:14-21' },
      marcas: [['mr', '8:15', 'la levadura de los fariseos, y de la levadura de Herodes', 'A'], ['mr', '8:21', '¿Cómo aún no entendéis?', 'B']],
      com: [
        ['A', 'Jesús advirtió contra la levadura de los fariseos y de Herodes: la doctrina y la hipocresía religiosa, y la mundanalidad política. Los discípulos pensaron que hablaba de pan.'],
        ['B', 'Jesús les recordó las doce cestas y las siete canastas. Preocuparse por el pan después de dos multiplicaciones era no entender quién estaba con ellos en la barca.']
      ],
      conc: ['Lc 12:1', '1 Co 5:6-8'],
      lugar: { vista: 'galilea', lugares: ['mar-galilea', 'betsaida'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '«¿Cómo aún no entendéis?» (Mr 8:21). ¿Qué lección de Dios te cuesta aprender?' },
    { id: 'ciego-betsaida', t: 'Jesús sana a un ciego en Betsaida', sim: ['🙌'], refs: { mr: '8:22-26' },
      marcas: [['mr', '8:24', 'Veo los hombres como árboles', 'A'], ['mr', '8:25', 'vio de lejos y claramente a todos', 'B']],
      com: [
        ['A', 'Es el único milagro de Jesús en dos etapas. Después del primer toque, el hombre veía borroso. No fue falta de poder: Jesús quiso enseñar algo.'],
        ['B', 'Después del segundo toque, vio con claridad. Marcos lo pone justo antes de la confesión de Pedro: los discípulos también veían a Jesús todavía a medias, y necesitaban otro toque para entender su cruz.']
      ],
      conc: ['Fil 1:6', '1 Co 13:12'],
      lugar: { vista: 'galilea', lugares: ['betsaida', 'mar-galilea'] }, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: 'Jesús completó lo que había comenzado (Mr 8:25). ¿En qué área necesitas un segundo toque de Jesús para ver con claridad?' }
  ]);
  I('anuncio-muerte-2', [
    { id: 'impuesto-templo', t: 'El impuesto del templo', sim: ['🙌', '📖'], refs: { mt: '17:24-27' },
      marcas: [['mt', '17:26', 'Luego los hijos están exentos', 'A'], ['mt', '17:27', 'hallarás un estatero', 'B']],
      com: [
        ['A', 'Los que cobraban el impuesto anual del templo, las dos dracmas, preguntaron si Jesús lo pagaba. Jesús explicó a Pedro que los hijos del rey no pagan tributo: él es el Hijo del dueño del templo.'],
        ['B', 'Aun así, para no ofender, mandó a Pedro pescar: en la boca del primer pez hallaría un estatero, una moneda que pagaba por los dos. Jesús renunció a su derecho para no ser tropiezo.']
      ],
      conc: ['Éx 30:13-16', '1 Co 9:19', 'Ro 14:13'],
      lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: 'Jesús renunció a un derecho para no ser tropiezo (Mt 17:27). ¿Qué derecho podrías ceder por amor a otros?' }
  ]);
  I('en-mi-nombre', [
    { id: 'tropiezos-galilea', t: 'Si tu mano te es ocasión de caer', sim: ['📖'], refs: { mt: '18:8-9', mr: '9:43-49' },
      marcas: [['mr', '9:43', 'Si tu mano te fuere ocasión de caer, córtala', 'A'], ['mr', '9:49', 'todos serán salados con fuego', 'B']],
      com: [
        ['A', 'Jesús repite una enseñanza del Sermón del Monte: el pecado debe tratarse con radicalidad. Es mejor perder lo más querido que perder la vida eterna. Jesús habla con seriedad del infierno, donde el gusano no muere y el fuego nunca se apaga (Is 66:24).'],
        ['B', 'Como los sacrificios se salaban (Lv 2:13), el discípulo será probado y purificado. Tened sal en vosotros y paz unos con otros.']
      ],
      conc: ['Is 66:24', 'Lv 2:13', 'Mt 5:29-30'],
      lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      escritura: [{ tipo: 'cita', libro: 'is', cv: '66:24', nombre: 'Isaías 66:24', en: 'Marcos 9:48' }],
      pensar: '¿Qué estás dispuesto a cortar para no apartarte de Dios?' },
    { id: 'hermano-peca', t: 'Si tu hermano peca contra ti', sim: ['📖', '🙏'], refs: { mt: '18:15-20' },
      marcas: [['mt', '18:15', 'repréndele estando tú y él solos', 'A'], ['mt', '18:19', 'si dos de vosotros se pusieren de acuerdo', 'B'], ['mt', '18:20', 'allí estoy yo en medio de ellos', 'C']],
      com: [
        ['A', 'Jesús da un camino para resolver las ofensas en la iglesia: primero a solas, luego con uno o dos testigos, y después ante la iglesia. El propósito es ganar al hermano, no exponerlo.'],
        ['B', 'La promesa de la oración de acuerdo: si dos se ponen de acuerdo en la tierra acerca de algo que pidan, les será hecho por el Padre.'],
        ['C', 'Donde dos o tres están congregados en su nombre, Cristo está en medio. Su presencia no depende del tamaño de la reunión.']
      ],
      conc: ['Gá 6:1', 'Dt 19:15', 'Hch 4:24-31'],
      lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '¿Buscas resolver las ofensas a solas y con el deseo de ganar a tu hermano (Mt 18:15)?' },
    { id: 'siervo-sin-misericordia', t: 'La parábola del siervo sin misericordia', sim: ['🌾', '✝️'], refs: { mt: '18:23-35' },
      marcas: [['mt', '18:24', 'diez mil talentos', 'A'], ['mt', '18:33', '¿No debías tú también tener misericordia', 'B']],
      com: [
        ['A', 'Un siervo debía diez mil talentos, una deuda imposible de pagar: el salario de muchas vidas. El rey le perdonó todo. Así es nuestra deuda de pecado con Dios.'],
        ['B', 'Ese mismo siervo no perdonó a un compañero que le debía cien denarios, unos cien días de salario. El perdonado que no perdona muestra que no ha comprendido la gracia que recibió.']
      ],
      conc: ['Ef 4:32', 'Col 3:13', 'Mt 6:14-15'],
      lugar: G, cuando: { etapa: 'galilea', fecha: 'c. 32 d.C.' },
      pensar: '¿Qué deuda pequeña de otros te cuesta perdonar, comparada con lo que Dios te perdonó?' }
  ]);
})();

/* Faltantes · Camino a Jerusalén (Juan 7 a 11 y otros) */
(() => {
  const A = window.ARMONIA, I = A.insertar;
  const JE = { vista: 'judea', lugares: ['jerusalen', 'monte-olivos'] };
  const OT = { etapa: 'viaje', fecha: 'Fiesta de los tabernáculos, otoño de c. 32 d.C.' };
  I('costo-seguir', [
    { id: 'hermanos-incredulos', t: 'Los hermanos de Jesús no creen en él', sim: ['👨‍👩‍👧'], refs: { jn: '7:1-9' },
      marcas: [['jn', '7:5', 'ni aun sus hermanos creían en él', 'A'], ['jn', '7:6', 'Mi tiempo aún no ha llegado', 'B']],
      com: [
        ['A', 'Se acercaba la fiesta de los tabernáculos, en el otoño. Los hermanos de Jesús lo animaban, con ironía, a mostrarse en Judea. No creían en él. Después de la resurrección, Jacobo y los demás creerían, y Jacobo sería líder de la iglesia de Jerusalén (1 Co 15:7; Hch 15:13).'],
        ['B', 'Jesús vivía según el tiempo del Padre, no según la presión de otros. Su hora llegaría en la Pascua.']
      ],
      conc: ['Hch 1:14', '1 Co 15:7', 'Ec 3:1'],
      lugar: { vista: 'galilea', lugares: ['r-galilea', 'capernaum'] }, cuando: OT,
      pensar: 'Ni sus hermanos creían en él (Jn 7:5). ¿Cómo te anima esto a seguir orando por tu familia?' },
    { id: 'fiesta-tabernaculos', t: 'Jesús en la fiesta de los tabernáculos', sim: ['📖', '⚔️'], refs: { jn: '7:10-36' },
      marcas: [['jn', '7:16', 'Mi doctrina no es mía, sino de aquel que me envió', 'A'], ['jn', '7:17', 'El que quiera hacer la voluntad de Dios', 'B']],
      com: [
        ['A', 'Jesús subió en secreto, y a la mitad de la fiesta enseñaba en el templo. Los judíos se admiraban de que supiera letras sin haber estudiado con los maestros. Su enseñanza venía del Padre.'],
        ['B', 'Para conocer si su doctrina es de Dios hay una condición: querer hacer la voluntad de Dios. La disposición a obedecer abre el entendimiento.']
      ],
      conc: ['Lv 23:33-43', 'Dt 18:18'],
      lugar: JE, cuando: OT,
      pensar: '«El que quiera hacer la voluntad de Dios, conocerá» (Jn 7:17). ¿Estás dispuesto a obedecer antes de entenderlo todo?',
      ir: [{ t: 'El templo de Herodes', a: '../../templo-herodes/' }] },
    { id: 'rios-agua-viva', t: 'Ríos de agua viva', sim: ['🕊️', '👑'], refs: { jn: '7:37-53' },
      marcas: [['jn', '7:37', 'Si alguno tiene sed, venga a mí y beba', 'A'], ['jn', '7:38', 'ríos de agua viva', 'B'], ['jn', '7:39', 'Esto dijo del Espíritu', 'C']],
      com: [
        ['A', 'En el último y gran día de la fiesta, cada día un sacerdote derramaba agua del estanque de Siloé junto al altar, recordando el agua de la roca en el desierto y las promesas de Isaías. Entonces Jesús se puso en pie y alzó la voz: el que tenga sed, que venga a él.'],
        ['B', 'El que cree en él tendrá ríos de agua viva que correrán de su interior. No un vaso para sí, sino ríos que fluyen hacia otros.'],
        ['C', 'Juan explica: hablaba del Espíritu que recibirían los que creyesen en él, porque aún no había venido el Espíritu, pues Jesús no había sido glorificado. Esta promesa se cumplió en Pentecostés, después de la glorificación de Cristo (Hch 2:33), y sigue vigente para todo creyente sediento.']
      ],
      conc: ['Is 44:3', 'Is 58:11', 'Ez 47:1-9', 'Hch 2:33', 'Ap 22:17'],
      lugar: JE, cuando: OT,
      escritura: [{ tipo: 'alude', libro: 'is', cv: '44:3', nombre: 'Isaías 44:3', en: 'Juan 7:38-39' }],
      pensar: 'Jesús dijo: «Si alguno tiene sed, venga a mí y beba» (Jn 7:37). ¿Tienes sed del Espíritu Santo?',
      ir: [{ t: 'Hechos: Pentecostés', a: '../../hechos/' }] },
    { id: 'mujer-adultera', t: 'La mujer sorprendida en adulterio', sim: ['✝️', '⚔️'], refs: { jn: '8:1-11' },
      marcas: [['jn', '8:7', 'El que de vosotros esté sin pecado sea el primero en arrojar la piedra', 'A'], ['jn', '8:11', 'Ni yo te condeno; vete, y no peques más', 'B']],
      com: [
        ['A', 'Los escribas y fariseos trajeron a una mujer sorprendida en adulterio para tentar a Jesús. Si la perdonaba, contradecía la ley; si la condenaba, contradecía su mensaje y desafiaba a Roma. Jesús escribió en tierra, y luego invitó a tirar la primera piedra al que estuviera sin pecado. Se fueron uno a uno, comenzando por los más viejos.'],
        ['B', 'Jesús, el único sin pecado, no la condenó, pero la llamó a dejar su pecado. Gracia y verdad juntas. Algunos manuscritos antiguos no incluyen este pasaje; está en la RV 1960 y la iglesia lo ha recibido como parte de la historia de Jesús.']
      ],
      conc: ['Jn 3:17', 'Ro 8:1', 'Lv 20:10'],
      lugar: JE, cuando: OT,
      pensar: 'Jesús no condenó a la mujer, pero la llamó a no pecar más (Jn 8:11). ¿Recibes su gracia y su llamado a la vez?' },
    { id: 'luz-del-mundo', t: 'Jesús, la luz del mundo', sim: ['📖', '👑'], refs: { jn: '8:12-30' },
      marcas: [['jn', '8:12', 'Yo soy la luz del mundo', 'A'], ['jn', '8:28', 'Cuando hayáis levantado al Hijo del Hombre', 'B']],
      com: [
        ['A', 'Durante la fiesta se encendían grandes candelabros en el atrio de las mujeres, que iluminaban Jerusalén y recordaban la columna de fuego. Allí Jesús dijo: «Yo soy la luz del mundo; el que me sigue, no andará en tinieblas».'],
        ['B', 'Cuando lo levantaran en la cruz, entenderían que «Yo soy». La cruz revela quién es Jesús.']
      ],
      conc: ['Éx 13:21', 'Is 9:2', 'Is 49:6', 'Jn 1:4-9'],
      lugar: JE, cuando: OT,
      pensar: '¿Estás siguiendo la luz de Cristo o caminando en tus propias tinieblas?' },
    { id: 'verdad-libres', t: 'La verdad os hará libres', sim: ['📖', '⚔️', '👑'], refs: { jn: '8:31-59' },
      marcas: [['jn', '8:32', 'la verdad os hará libres', 'A'], ['jn', '8:36', 'si el Hijo os libertare, seréis verdaderamente libres', 'B'], ['jn', '8:58', 'Antes que Abraham fuese, yo soy', 'C']],
      com: [
        ['A', 'La libertad verdadera viene de permanecer en la palabra de Cristo. Los judíos replicaron que eran hijos de Abraham y nunca habían sido esclavos.'],
        ['B', 'Todo el que comete pecado es esclavo del pecado. Solo el Hijo puede libertar de verdad.'],
        ['C', 'La declaración más fuerte: «Antes que Abraham fuese, yo soy». Jesús se aplicó el nombre de Dios (Éx 3:14). Entendieron bien lo que decía, y tomaron piedras para apedrearlo.']
      ],
      conc: ['Éx 3:14', 'Ro 6:17-18', 'Gá 5:1'],
      lugar: JE, cuando: OT,
      escritura: [{ tipo: 'alude', libro: 'ex', cv: '3:14', nombre: 'Éxodo 3:14', en: 'Juan 8:58' }],
      pensar: '«Si el Hijo os libertare, seréis verdaderamente libres» (Jn 8:36). ¿De qué te ha libertado Cristo, y qué necesitas todavía entregarle?' },
    { id: 'ciego-nacimiento', t: 'Jesús sana a un ciego de nacimiento', sim: ['🙌', '⚔️'], refs: { jn: '9:1-41' },
      marcas: [['jn', '9:3', 'para que las obras de Dios se manifiesten en él', 'A'], ['jn', '9:25', 'habiendo yo sido ciego, ahora veo', 'B'], ['jn', '9:38', 'Creo, Señor; y le adoró', 'C']],
      com: [
        ['A', 'Los discípulos preguntaron quién había pecado para que naciera ciego. Jesús rechazó esa lógica: no toda enfermedad es castigo por un pecado personal. Esta ceguera sería ocasión para que se manifestaran las obras de Dios. Jesús hizo lodo, lo puso en sus ojos y lo envió al estanque de Siloé, que significa «Enviado».'],
        ['B', 'Los fariseos interrogaron al hombre y a sus padres. Él no sabía responder todo, pero sabía una cosa: «habiendo yo sido ciego, ahora veo». El testimonio personal es irrefutable.'],
        ['C', 'Lo expulsaron de la sinagoga, pero Jesús lo buscó. El que fue sanado de sus ojos terminó viendo también con el corazón y adoró a Jesús. Los que decían ver quedaron ciegos.']
      ],
      conc: ['Is 35:5', 'Is 42:7', 'Jn 8:12', '2 Co 4:4-6'],
      lugar: JE, cuando: OT,
      pensar: '«Una cosa sé: que habiendo yo sido ciego, ahora veo» (Jn 9:25). ¿Cuál es tu testimonio de lo que Jesús hizo contigo?' },
    { id: 'buen-pastor', t: 'Jesús, el buen pastor', sim: ['📖', '✝️'], refs: { jn: '10:1-21' },
      marcas: [['jn', '10:9', 'Yo soy la puerta', 'A'], ['jn', '10:10', 'para que tengan vida, y para que la tengan en abundancia', 'B'], ['jn', '10:11', 'el buen pastor su vida da por las ovejas', 'C']],
      com: [
        ['A', 'Jesús es la puerta del redil: el único acceso a la salvación. Los que vinieron antes, presentándose como salvadores, eran ladrones.'],
        ['B', 'El ladrón viene para hurtar, matar y destruir; Jesús vino para dar vida en abundancia. La vida abundante es la vida plena en comunión con Dios, por el Espíritu.'],
        ['C', 'El buen pastor da su vida por las ovejas, las conoce por nombre y ellas oyen su voz. Tiene otras ovejas que no son de este redil, los gentiles, y habrá un rebaño y un pastor. Nadie le quita la vida: él la pone y la vuelve a tomar.']
      ],
      conc: ['Sal 23', 'Ez 34:11-16, 23', 'He 13:20', '1 P 5:4'],
      lugar: JE, cuando: OT,
      escritura: [{ tipo: 'cumple', libro: 'ez', cv: '34:23', nombre: 'Ezequiel 34:23', en: 'Juan 10:11, 16' }],
      pensar: '«Mis ovejas oyen mi voz» (Jn 10:27). ¿Estás escuchando la voz del buen pastor?' }
  ]);
  I('marta-maria', [
    { id: 'dedicacion', t: 'Jesús en la fiesta de la Dedicación', sim: ['👑', '⚔️'], refs: { jn: '10:22-42' },
      marcas: [['jn', '10:28', 'no perecerán jamás, ni nadie las arrebatará de mi mano', 'A'], ['jn', '10:30', 'Yo y el Padre uno somos', 'B'], ['jn', '10:40', 'al otro lado del Jordán', 'C']],
      com: [
        ['A', 'Era invierno, en la fiesta de la Dedicación (Janucá), que recordaba la purificación del templo por los macabeos después de la profanación de Antíoco IV (ver Daniel). En el pórtico de Salomón le pidieron que dijera claramente si era el Cristo. Jesús habló de la seguridad de sus ovejas en su mano y en la del Padre.'],
        ['B', '«Yo y el Padre uno somos»: uno en esencia, no solo en propósito. Volvieron a tomar piedras, acusándolo de hacerse Dios.'],
        ['C', 'Jesús se retiró al otro lado del Jordán, donde Juan había bautizado, y muchos creyeron allí.']
      ],
      conc: ['Dn 8:9-14', 'Dn 11:31', 'Ro 8:38-39'],
      lugar: { vista: 'israel', lugares: ['jerusalen', 'betabara', 'perea'] }, cuando: { etapa: 'viaje', fecha: 'Fiesta de la Dedicación, invierno de c. 32 d.C.' },
      pensar: 'Nadie arrebatará a las ovejas de la mano de Jesús (Jn 10:28). ¿Cómo te da seguridad esta promesa?',
      ir: [{ t: 'Daniel: Antíoco y la purificación del templo', a: '../../daniel/' }] }
  ]);
  I('deber-siervo', [
    { id: 'lazaro', t: 'Jesús resucita a Lázaro', sim: ['🙌', '👑'], refs: { jn: '11:1-46' },
      marcas: [['jn', '11:4', 'Esta enfermedad no es para muerte', 'A'], ['jn', '11:25', 'Yo soy la resurrección y la vida', 'B'], ['jn', '11:35', 'Jesús lloró', 'C'], ['jn', '11:43', '¡Lázaro, ven fuera!', 'D']],
      com: [
        ['A', 'Marta y María avisaron que Lázaro, a quien Jesús amaba, estaba enfermo. Jesús se quedó dos días más. Su demora no era falta de amor: quería mostrar la gloria de Dios en algo mayor que una sanidad.'],
        ['B', 'Lázaro llevaba cuatro días muerto. Marta creía en la resurrección del día postrero; Jesús le reveló que la resurrección es una persona: él mismo. El que cree en él, aunque muera, vivirá.'],
        ['C', 'El versículo más corto de la Biblia muestra el corazón de Jesús: lloró ante el dolor de sus amigos, aunque sabía que iba a resucitar a Lázaro.'],
        ['D', 'Jesús oró al Padre y llamó a Lázaro por su nombre, y el muerto salió con las vendas. Muchos creyeron; otros fueron a contarlo a los fariseos, y desde ese día acordaron matarlo (Jn 11:47-53, pasaje del complot).']
      ],
      conc: ['1 Co 15:20-26', '1 Ts 4:13-18', 'He 4:15'],
      lugar: { vista: 'judea', lugares: ['betania', 'jerusalen', 'perea'] }, cuando: { etapa: 'viaje', fecha: 'c. 33 d.C.' },
      pensar: '«Yo soy la resurrección y la vida… ¿Crees esto?» (Jn 11:25-26). ¿Cuál es tu respuesta?' },
    { id: 'efrain', t: 'Jesús se retira a Efraín', sim: ['⚔️'], refs: { jn: '11:54-57' },
      marcas: [['jn', '11:54', 'a una ciudad llamada Efraín', 'A']],
      com: [['A', 'Después de la resurrección de Lázaro y la decisión del concilio, Jesús ya no andaba abiertamente entre los judíos. Se retiró a Efraín, junto al desierto, con sus discípulos, hasta que se acercara la Pascua. Los principales sacerdotes ordenaron que quien supiera dónde estaba lo denunciara.']],
      conc: ['Jn 7:30', 'Jn 13:1'],
      lugar: { vista: 'judea', lugares: ['efrain', 'jerusalen', 'betania'] }, cuando: { etapa: 'viaje', fecha: 'Antes de la Pascua, 33 d.C.' },
      pensar: 'Jesús se apartó a esperar la hora del Padre (Jn 11:54). ¿Sabes esperar el tiempo de Dios?' }
  ]);
  I('joven-rico', [
    { id: 'obreros-vina', t: 'La parábola de los obreros de la viña', sim: ['🌾', '✝️'], refs: { mt: '20:1-16' },
      marcas: [['mt', '20:12', 'los has hecho iguales a nosotros', 'A'], ['mt', '20:15', '¿O tienes tú envidia, porque yo soy bueno?', 'B']],
      com: [
        ['A', 'Un padre de familia contrató obreros a distintas horas del día, y al final pagó a todos un denario, el salario de un día. Los primeros se quejaron. La parábola responde a la pregunta de Pedro sobre la recompensa (Mt 19:27).'],
        ['B', 'El señor no fue injusto con nadie: fue generoso con los últimos. La salvación es por gracia, no por antigüedad ni mérito. Los postreros serán primeros.']
      ],
      conc: ['Ro 4:4-5', 'Ef 2:8-9', 'Lc 23:42-43'],
      lugar: { vista: 'israel', lugares: ['perea', 'jerico'] }, cuando: { etapa: 'viaje', fecha: 'c. 33 d.C.' },
      pensar: '¿Te alegras de la gracia que Dios da a otros, o comparas tu recompensa?' }
  ]);
  I('anuncio-muerte-3', [
    { id: 'santiago-juan', t: 'La petición de Jacobo y Juan', sim: ['📖', '✝️'], refs: { mt: '20:20-28', mr: '10:35-45' },
      marcas: [['mr', '10:38', '¿Podéis beber del vaso que yo bebo', 'A'], ['mr', '10:45', 'para dar su vida en rescate por muchos', 'B']],
      com: [
        ['A', 'Justo después del anuncio de la cruz, Jacobo y Juan, con su madre según Mateo, pidieron los primeros lugares en su gloria. Jesús les preguntó si podían beber su vaso. Jacobo sería el primer apóstol mártir (Hch 12:2).'],
        ['B', 'Entre los gentiles, los grandes se enseñorean; entre los discípulos, el grande es el servidor. El Hijo del Hombre no vino para ser servido, sino para servir y dar su vida en rescate por muchos. Es el resumen de la misión de Jesús.']
      ],
      conc: ['Is 53:10-12', 'Fil 2:5-8', '1 Ti 2:5-6', 'Hch 12:2'],
      lugar: { vista: 'israel', lugares: ['jerico', 'jerusalen'] }, cuando: { etapa: 'viaje', fecha: 'Días antes de la Pascua, 33 d.C.' },
      pensar: 'Jesús vino «para servir, y para dar su vida en rescate por muchos» (Mr 10:45). ¿Buscas un lugar o buscas servir?' }
  ]);
})();

/* Faltantes · Semana Santa, la última noche, la pasión y la resurrección */
(() => {
  const A = window.ARMONIA, I = A.insertar;
  const J = { vista: 'judea', lugares: ['jerusalen', 'betania', 'monte-olivos'] };
  const SS = f => ({ etapa: 'pasion', fecha: f });
  const R = f => ({ etapa: 'resurreccion', fecha: f });
  const NOCHE = SS('Jueves por la noche, 33 d.C.');
  I('diez-minas', [
    { id: 'uncion-betania', t: 'María unge a Jesús en Betania', sim: ['✝️', '👑'], refs: { jn: '12:1-11' },
      marcas: [['jn', '12:3', 'la casa se llenó del olor del perfume', 'A'], ['jn', '12:7', 'para el día de mi sepultura ha guardado esto', 'B'], ['jn', '12:10', 'acordaron dar muerte también a Lázaro', 'C']],
      com: [
        ['A', 'Seis días antes de la Pascua, en Betania, hicieron una cena para Jesús. Marta servía, Lázaro estaba a la mesa, y María derramó una libra de nardo puro sobre los pies de Jesús y los secó con sus cabellos. Mateo y Marcos narran esta misma unción junto al complot (pasaje del complot).'],
        ['B', 'Judas criticó el gasto: valía trescientos denarios, el salario de casi un año. Juan aclara que era ladrón. Jesús defendió a María: había guardado el perfume para su sepultura. La adoración extravagante a Cristo nunca es un desperdicio.'],
        ['C', 'Muchos venían a ver a Lázaro resucitado y creían en Jesús, y los principales sacerdotes acordaron matarlo también.']
      ],
      conc: ['Mt 26:6-13', 'Mr 14:3-9', 'Cnt 1:12'],
      lugar: { vista: 'judea', lugares: ['betania', 'jerusalen'] }, cuando: SS('Seis días antes de la Pascua, 33 d.C.'),
      pensar: 'María dio lo más valioso que tenía (Jn 12:3). ¿Qué estás dispuesto a derramar en adoración a Jesús?' }
  ]);
  I('llora-jerusalen', [
    { id: 'higuera-maldita', t: 'Jesús maldice la higuera sin fruto', sim: ['📖'], refs: { mt: '21:18-19', mr: '11:12-14' },
      marcas: [['mr', '11:13', 'nada halló sino hojas', 'A']],
      com: [['A', 'El lunes por la mañana, camino a Jerusalén, Jesús tuvo hambre. Una higuera con hojas prometía fruto, pero no tenía. Es una parábola en acción: Israel, y en particular el templo que iba a purificar ese mismo día, tenía apariencia de vida religiosa, pero sin fruto para Dios.']],
      conc: ['Jer 8:13', 'Os 9:10', 'Lc 13:6-9'],
      lugar: J, cuando: SS('Lunes por la mañana, 33 d.C.'),
      pensar: 'La higuera tenía hojas, pero no fruto (Mr 11:13). ¿Hay en tu vida más apariencia que fruto?' }
  ]);
  I('purifica-templo-2', [
    { id: 'higuera-seca', t: 'La higuera seca: la fe y la oración', sim: ['🙏', '📖'], refs: { mt: '21:20-22', mr: '11:20-26' },
      marcas: [['mr', '11:22', 'Tened fe en Dios', 'A'], ['mr', '11:24', 'creed que lo recibiréis, y os vendrá', 'B'], ['mr', '11:25', 'perdonad, si tenéis algo contra alguno', 'C']],
      com: [
        ['A', 'El martes por la mañana, la higuera estaba seca desde las raíces. Jesús lo usó para enseñar sobre la fe: tened fe en Dios. Una fe que no duda puede mover montes.'],
        ['B', 'Todo lo que pidamos orando, creyendo que lo recibiremos, nos vendrá. La oración de fe es una enseñanza central de Jesús y de la iglesia que cree en sus promesas, siempre en sumisión a la voluntad de Dios (1 Jn 5:14-15).'],
        ['C', 'Pero la fe que ora debe ir acompañada de un corazón que perdona. El rencor estorba la oración.']
      ],
      conc: ['1 Jn 5:14-15', 'Stg 1:6-7', 'Mt 17:20', 'Mt 6:14-15'],
      lugar: J, cuando: SS('Martes por la mañana, 33 d.C.'),
      pensar: '«Tened fe en Dios» (Mr 11:22). ¿Qué monte necesitas enfrentar con fe y con un corazón que perdona?' }
  ]);
  I('autoridad', [
    { id: 'dos-hijos', t: 'La parábola de los dos hijos', sim: ['🌾', '⚔️'], refs: { mt: '21:28-32' },
      marcas: [['mt', '21:29', 'después, arrepentido, fue', 'A'], ['mt', '21:31', 'los publicanos y las rameras van delante de vosotros', 'B']],
      com: [
        ['A', 'Un hijo dijo «no quiero», pero después se arrepintió y fue a trabajar. El otro dijo «sí, señor», pero no fue. Lo que cuenta no es lo que se dice, sino lo que se hace.'],
        ['B', 'Los publicanos y las rameras creyeron a Juan y se arrepintieron; los líderes religiosos, que decían sí a Dios, no lo hicieron. Por eso los primeros entran al reino antes que ellos.']
      ],
      conc: ['Lc 7:29-30', 'Stg 1:22'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: '¿Eres de los que dicen «sí» a Dios y no van, o de los que se arrepienten y obedecen?' }
  ]);
  I('labradores', [
    { id: 'bodas-rey', t: 'La parábola de las bodas del hijo del rey', sim: ['🌾', '👑'], refs: { mt: '22:1-14' },
      marcas: [['mt', '22:9', 'llamad a las bodas a cuantos halléis', 'A'], ['mt', '22:12', '¿cómo entraste aquí, sin estar vestido de boda?', 'B']],
      com: [
        ['A', 'Los invitados rechazaron la invitación del rey e incluso maltrataron a sus siervos. Entonces el rey mandó invitar a todos los que se encontraran por los caminos, malos y buenos. El evangelio se abre a todos.'],
        ['B', 'Un invitado entró sin el vestido de boda, que el anfitrión proveía. Nadie entra al banquete con su propia ropa: necesitamos el vestido de la justicia de Cristo (Is 61:10; Ap 19:8). Muchos son llamados, y pocos escogidos.']
      ],
      conc: ['Is 61:10', 'Ap 19:7-9', 'Lc 14:15-24'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: '¿Estás vestido con la justicia de Cristo o confías en tu propia ropa?' }
  ]);
  I('resurreccion-pregunta', [
    { id: 'gran-mandamiento', t: 'El gran mandamiento', sim: ['📖'], refs: { mt: '22:34-40', mr: '12:28-34' },
      excl: [['mr', '12:32'], ['mr', '12:33'], ['mr', '12:34']],
      marcas: [['mr', '12:29', 'Oye, Israel; el Señor nuestro Dios, el Señor uno es', 'A'], ['mr', '12:31', 'Amarás a tu prójimo como a ti mismo', 'B'], ['mr', '12:34', 'No estás lejos del reino de Dios', 'C']],
      com: [
        ['A', 'Un escriba preguntó cuál era el primer mandamiento. Jesús citó el Shemá (Dt 6:4-5), la confesión que todo judío recitaba cada día: amar a Dios con todo el corazón, el alma, la mente y las fuerzas.'],
        ['B', 'El segundo es semejante: amar al prójimo como a uno mismo (Lv 19:18). De estos dos mandamientos dependen toda la ley y los profetas.'],
        ['C', 'Marcos registra que el escriba respondió con sabiduría, y Jesús le dijo que no estaba lejos del reino. Cerca no es lo mismo que dentro.']
      ],
      conc: ['Dt 6:4-5', 'Lv 19:18', 'Ro 13:8-10', '1 Jn 4:20-21'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      escritura: [{ tipo: 'cita', libro: 'dt', cv: '6:4-5', nombre: 'Deuteronomio 6:4-5', en: 'Marcos 12:29-30' }],
      pensar: '«No estás lejos del reino de Dios» (Mr 12:34). ¿Estás cerca o dentro?' }
  ]);
  I('ofrenda-viuda', [
    { id: 'griegos', t: 'Unos griegos buscan a Jesús', sim: ['✝️', '👑'], refs: { jn: '12:20-36' },
      marcas: [['jn', '12:21', 'Señor, quisiéramos ver a Jesús', 'A'], ['jn', '12:24', 'si el grano de trigo no cae en la tierra y muere', 'B'], ['jn', '12:32', 'a todos atraeré a mí mismo', 'C']],
      com: [
        ['A', 'Unos griegos que habían subido a adorar en la fiesta pidieron ver a Jesús. Para Jesús, era la señal de que había llegado su hora: las naciones lo buscaban.'],
        ['B', 'El grano de trigo debe morir para llevar mucho fruto. La muerte de Cristo daría vida a multitudes, y el mismo principio rige la vida del discípulo.'],
        ['C', 'Jesús sintió la turbación de su alma, y el Padre habló desde el cielo. Levantado en la cruz, atraería a todos a sí mismo, de todas las naciones.']
      ],
      conc: ['Is 52:13', 'Jn 3:14', 'Jn 10:16'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      pensar: '«Quisiéramos ver a Jesús» (Jn 12:21). ¿Ven los demás a Jesús en tu vida?' },
    { id: 'incredulidad', t: 'La incredulidad del pueblo', sim: ['👑'], refs: { jn: '12:37-50' },
      marcas: [['jn', '12:38', '¿quién ha creído a nuestro anuncio?', 'A'], ['jn', '12:43', 'amaban más la gloria de los hombres que la gloria de Dios', 'B']],
      com: [
        ['A', 'A pesar de tantas señales, no creían, para que se cumpliera Isaías 53:1 y 6:10. Juan cierra así la primera parte de su evangelio, el libro de las señales.'],
        ['B', 'Aun de los gobernantes muchos creyeron, pero no lo confesaban por miedo a ser expulsados de la sinagoga. Amaban más la aprobación de los hombres que la de Dios.']
      ],
      conc: ['Is 53:1', 'Is 6:9-10', 'Ro 10:16'],
      lugar: J, cuando: SS('Martes, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'is', cv: '53:1', nombre: 'Isaías 53:1', en: 'Juan 12:38' }],
      pensar: '¿Te importa más la gloria de los hombres o la de Dios (Jn 12:43)?' }
  ]);
  I('venida-hijo-hombre', [
    { id: 'diez-virgenes', t: 'La parábola de las diez vírgenes', sim: ['🌾', '👑', '🕊️'], refs: { mt: '25:1-13' },
      marcas: [['mt', '25:4', 'tomaron aceite en sus vasijas', 'A'], ['mt', '25:10', 'las que estaban preparadas entraron con él a las bodas', 'B'], ['mt', '25:13', 'Velad, pues', 'C']],
      com: [
        ['A', 'Las diez esperaban al esposo, y todas se durmieron. La diferencia estaba en el aceite: las prudentes llevaban reserva. El aceite es, en la Biblia, imagen frecuente del Espíritu Santo: no se presta ni se improvisa, se cultiva en una vida de comunión.'],
        ['B', 'A medianoche llegó el esposo. Las prudentes entraron, y se cerró la puerta. Las insensatas llegaron tarde. La venida de Cristo será repentina, y la preparación es personal.'],
        ['C', 'La conclusión: velad, porque no sabéis el día ni la hora. Una iglesia que espera al esposo vive llena del Espíritu y lista para su venida.']
      ],
      conc: ['Zac 4:1-6', 'Ef 5:18', '1 Ts 4:16-17', 'Ap 19:7'],
      lugar: { vista: 'judea', lugares: ['monte-olivos', 'jerusalen'] }, cuando: SS('Martes, 33 d.C.'),
      pensar: '¿Tienes aceite en tu vasija? ¿Estás preparado para la venida del Señor?',
      ir: [{ t: 'Los últimos tiempos: el arrebatamiento', a: '../../escatologia/' }] },
    { id: 'talentos', t: 'La parábola de los talentos', sim: ['🌾'], refs: { mt: '25:14-30' },
      marcas: [['mt', '25:15', 'a cada uno conforme a su capacidad', 'A'], ['mt', '25:21', 'sobre poco has sido fiel', 'B'], ['mt', '25:25', 'escondí tu talento en la tierra', 'C']],
      com: [
        ['A', 'Un hombre repartió sus bienes entre sus siervos: cinco talentos, dos y uno, a cada uno según su capacidad. Un talento era una gran suma. Dios da a cada uno dones distintos.'],
        ['B', 'Los que negociaron recibieron la misma alabanza: «Bien, buen siervo y fiel… entra en el gozo de tu señor». Dios no premia la cantidad, sino la fidelidad.'],
        ['C', 'El que escondió su talento por miedo lo perdió. No hacer nada con lo que Dios nos dio es infidelidad. Los dones del Espíritu son para usarlos en servicio (1 P 4:10).']
      ],
      conc: ['Lc 19:11-27', '1 P 4:10', '1 Co 12:7', 'Ro 12:6-8'],
      lugar: { vista: 'judea', lugares: ['monte-olivos', 'jerusalen'] }, cuando: SS('Martes, 33 d.C.'),
      pensar: '¿Qué talento o don te ha dado Dios, y estás negociando con él o lo tienes enterrado?' },
    { id: 'juicio-naciones', t: 'El juicio de las naciones', sim: ['👑', '📖'], refs: { mt: '25:31-46' },
      marcas: [['mt', '25:31', 'se sentará en su trono de gloria', 'A'], ['mt', '25:40', 'a uno de estos mis hermanos más pequeños', 'B']],
      com: [
        ['A', 'Cuando el Hijo del Hombre venga en su gloria, se sentará en su trono y reunirá a las naciones, separándolas como el pastor separa las ovejas de los cabritos. En la escatología pretribulacional, este juicio ocurre en su venida gloriosa, al final de la tribulación y antes del milenio.'],
        ['B', 'El criterio es el trato a «mis hermanos más pequeños»: dar de comer, de beber, recibir, vestir, visitar. Lo que se hace con ellos, se hace con Cristo. Las obras revelan la fe verdadera.']
      ],
      conc: ['Dn 7:13-14', 'Zac 14:4-5', 'Stg 2:14-17', 'Ap 20:4'],
      lugar: { vista: 'judea', lugares: ['monte-olivos', 'jerusalen'] }, cuando: SS('Martes, 33 d.C.'),
      pensar: '«A mí lo hicisteis» (Mt 25:40). ¿Ves a Cristo en los más pequeños que te rodean?',
      ir: [{ t: 'Los últimos tiempos', a: '../../escatologia/' }] }
  ]);
  I('complot', [
    { id: 'lavamiento', t: 'Jesús lava los pies de sus discípulos', sim: ['📖', '✝️'], refs: { jn: '13:1-20' },
      marcas: [['jn', '13:1', 'los amó hasta el fin', 'A'], ['jn', '13:8', 'Si no te lavare, no tendrás parte conmigo', 'B'], ['jn', '13:15', 'ejemplo os he dado', 'C']],
      com: [
        ['A', 'Comienza la segunda parte del evangelio de Juan: la hora de Jesús ha llegado. Sabiendo que volvía al Padre, amó a los suyos hasta el fin, hasta el extremo.'],
        ['B', 'Jesús se quitó el manto, se ciñó una toalla y lavó los pies de sus discípulos, tarea de esclavos. Pedro se negó, y luego quiso que le lavara todo. El que está lavado, por la sangre de Cristo, solo necesita lavarse los pies: la limpieza diaria del andar.'],
        ['C', 'Jesús dio ejemplo: si el Señor y Maestro lavó los pies, sus discípulos deben servirse unos a otros. Y anunció, con el Salmo 41:9, que uno de ellos lo entregaría.']
      ],
      conc: ['Fil 2:5-8', '1 Jn 1:7-9', 'Sal 41:9'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: NOCHE,
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '41:9', nombre: 'Salmo 41:9', en: 'Juan 13:18' }],
      pensar: 'Jesús lavó los pies aun de Judas (Jn 13:5, 11). ¿A quién te cuesta servir con humildad?' }
  ]);
  I('grandeza-servicio', [
    { id: 'mandamiento-nuevo', t: 'Un mandamiento nuevo', sim: ['📖'], refs: { jn: '13:31-35' },
      marcas: [['jn', '13:34', 'Un mandamiento nuevo os doy', 'A'], ['jn', '13:35', 'En esto conocerán todos que sois mis discípulos', 'B']],
      com: [
        ['A', 'Cuando Judas salió, Jesús dijo: «Ahora es glorificado el Hijo del Hombre». Y dio un mandamiento nuevo: amarse unos a otros como él los amó. Lo nuevo es la medida: el amor de Cristo, que da la vida.'],
        ['B', 'La señal distintiva de los discípulos no son los dones ni el conocimiento, sino el amor mutuo.']
      ],
      conc: ['1 Jn 3:16', '1 Jn 4:7-11', '1 Co 13'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: NOCHE,
      pensar: '¿Reconocería alguien que eres discípulo de Cristo por tu amor a los hermanos?' }
  ]);
  I('bolsa-espada', [
    { id: 'camino-verdad', t: 'Yo soy el camino, la verdad y la vida', sim: ['📖', '👑'], refs: { jn: '14:1-14' },
      marcas: [['jn', '14:2', 'voy, pues, a preparar lugar para vosotros', 'A'], ['jn', '14:6', 'Yo soy el camino, y la verdad, y la vida', 'B'], ['jn', '14:12', 'aun mayores hará', 'C']],
      com: [
        ['A', 'Comienza el discurso del aposento alto (Juan 14 a 17). Jesús consuela a sus discípulos: en la casa del Padre hay muchas moradas, y él va a preparar lugar. Y vendrá otra vez a tomarlos consigo: la promesa de su venida por su iglesia.'],
        ['B', 'Tomás preguntó por el camino, y Jesús respondió: «Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí». Felipe pidió ver al Padre: el que ha visto a Jesús ha visto al Padre.'],
        ['C', 'El que cree en Jesús hará las obras que él hace, y aun mayores, porque él va al Padre. Las obras mayores se hicieron posibles por la venida del Espíritu Santo, y alcanzan a todo el mundo por medio de la iglesia. Y todo lo que pidamos en su nombre, él lo hará.']
      ],
      conc: ['1 Ts 4:16-17', 'Hch 4:12', 'Hch 5:12-16', 'Mr 16:17-20'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: NOCHE,
      pensar: '«El que en mí cree, las obras que yo hago, él las hará también» (Jn 14:12). ¿Crees esta promesa para tu vida?',
      ir: [{ t: 'Los últimos tiempos: la venida por su iglesia', a: '../../escatologia/' }] },
    { id: 'otro-consolador', t: 'La promesa del Espíritu Santo', sim: ['🕊️', '📖'], refs: { jn: '14:15-31' },
      marcas: [['jn', '14:16', 'os dará otro Consolador', 'A'], ['jn', '14:17', 'mora con vosotros, y estará en vosotros', 'B'], ['jn', '14:26', 'él os enseñará todas las cosas', 'C'], ['jn', '14:27', 'La paz os dejo', 'D']],
      com: [
        ['A', 'Jesús prometió «otro Consolador», en griego Paracleto: el que es llamado al lado para ayudar, abogado, consejero. «Otro» de la misma clase que Jesús: el Espíritu Santo es una persona divina, no una fuerza.'],
        ['B', 'El Espíritu estaba con los discípulos, en la persona de Jesús, y estaría en ellos. Y estaría para siempre. El mundo no lo puede recibir, pero los que aman a Jesús y guardan sus mandamientos lo conocen.'],
        ['C', 'El Espíritu enseña todas las cosas y recuerda lo que Jesús dijo. Por él, los apóstoles escribieron los evangelios con fidelidad, y por él el creyente entiende la Palabra.'],
        ['D', 'Jesús deja su paz, no como el mundo la da. Su partida no era abandono: no los dejaría huérfanos; vendría a ellos.']
      ],
      conc: ['Hch 1:8', 'Hch 2:4', 'Ro 8:9-16', '1 Jn 2:27'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: NOCHE,
      pensar: 'El Espíritu Santo es el Consolador que está con nosotros para siempre (Jn 14:16). ¿Lo conoces como persona, como ayudador y como maestro?',
      ir: [{ t: 'Hechos: la venida del Espíritu', a: '../../hechos/' }] },
    { id: 'vid-verdadera', t: 'Yo soy la vid verdadera', sim: ['📖'], refs: { jn: '15:1-17' },
      marcas: [['jn', '15:5', 'separados de mí nada podéis hacer', 'A'], ['jn', '15:8', 'que llevéis mucho fruto', 'B'], ['jn', '15:13', 'que uno ponga su vida por sus amigos', 'C']],
      com: [
        ['A', 'Jesús es la vid; los discípulos, los pámpanos; el Padre, el labrador. El fruto depende de permanecer unidos a la vid. Sin Cristo no podemos hacer nada.'],
        ['B', 'El Padre poda los pámpanos que llevan fruto para que lleven más. Las pruebas no son castigo, sino cuidado del labrador. El fruto glorifica al Padre.'],
        ['C', 'El amor más grande es dar la vida por los amigos, y Jesús nos llama amigos. No lo elegimos nosotros a él: él nos eligió para llevar fruto que permanezca.']
      ],
      conc: ['Is 5:1-7', 'Gá 5:22-23', 'Sal 80:8'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'monte-olivos'] }, cuando: NOCHE,
      pensar: '«Separados de mí nada podéis hacer» (Jn 15:5). ¿Cómo permaneces cada día en Cristo?' },
    { id: 'odio-mundo', t: 'El mundo os aborrecerá', sim: ['📖', '🕊️'], refs: { jn: '15:18-16:4' },
      marcas: [['jn', '15:20', 'Si a mí me han perseguido, también a vosotros os perseguirán', 'A'], ['jn', '15:26', 'él dará testimonio acerca de mí', 'B']],
      com: [
        ['A', 'Los discípulos no son del mundo, por eso el mundo los aborrecerá, como aborreció a Jesús sin causa (Sal 69:4). La persecución no es señal de que algo anda mal, sino de pertenecer a Cristo.'],
        ['B', 'El Consolador, el Espíritu de verdad que procede del Padre, dará testimonio de Cristo, y los discípulos también darán testimonio. El Espíritu da poder para testificar en medio de la oposición (Hch 1:8; 4:31).']
      ],
      conc: ['Sal 69:4', 'Hch 4:31', '2 Ti 3:12', '1 P 4:12-14'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'monte-olivos'] }, cuando: NOCHE,
      escritura: [{ tipo: 'cumple', libro: 'sal', cv: '69:4', nombre: 'Salmo 69:4', en: 'Juan 15:25' }],
      pensar: 'El Espíritu da testimonio de Cristo por medio de los creyentes (Jn 15:26-27). ¿Dependes de él al dar testimonio?' },
    { id: 'obra-espiritu', t: 'La obra del Espíritu Santo', sim: ['🕊️', '📖'], refs: { jn: '16:5-15' },
      marcas: [['jn', '16:7', 'Os conviene que yo me vaya', 'A'], ['jn', '16:8', 'convencerá al mundo de pecado, de justicia y de juicio', 'B'], ['jn', '16:13', 'él os guiará a toda la verdad', 'C']],
      com: [
        ['A', 'Sorprendente: a los discípulos les convenía que Jesús se fuera, porque así vendría el Consolador. Con Jesús en la carne, su presencia estaba en un lugar; con el Espíritu, Cristo está con todos los suyos en todo lugar.'],
        ['B', 'El Espíritu convence al mundo de pecado, porque no creen en Cristo; de justicia, porque Cristo va al Padre; y de juicio, porque el príncipe de este mundo ya ha sido juzgado. Ninguna predicación produce convicción sin el Espíritu.'],
        ['C', 'El Espíritu guía a toda la verdad, no habla por su propia cuenta y glorifica a Cristo. Toda manifestación verdadera del Espíritu exalta a Jesús.']
      ],
      conc: ['Hch 2:37', '1 Co 2:10-14', '1 Co 12:3'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'monte-olivos'] }, cuando: NOCHE,
      pensar: 'El Espíritu glorifica a Cristo (Jn 16:14). ¿Glorifica a Jesús lo que llamas obra del Espíritu en tu vida y en tu iglesia?' },
    { id: 'tristeza-gozo', t: 'Vuestra tristeza se convertirá en gozo', sim: ['📖', '🙏'], refs: { jn: '16:16-33' },
      marcas: [['jn', '16:20', 'vuestra tristeza se convertirá en gozo', 'A'], ['jn', '16:24', 'pedid, y recibiréis, para que vuestro gozo sea cumplido', 'B'], ['jn', '16:33', 'yo he vencido al mundo', 'C']],
      com: [
        ['A', 'Un poco y no lo verían, y otra vez un poco y lo verían: la muerte y la resurrección. Como la mujer que da a luz, su tristeza se volvería gozo, y nadie se lo quitaría.'],
        ['B', 'Desde entonces podrían pedir al Padre en el nombre de Jesús. Orar en su nombre es acercarse con su autoridad y según su voluntad, y el Padre responde.'],
        ['C', 'En el mundo tendrán aflicción, pero Jesús ha vencido al mundo. La paz del creyente no depende de las circunstancias, sino de la victoria de Cristo.']
      ],
      conc: ['Is 66:7-14', 'Ro 8:37', '1 Jn 5:4'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'monte-olivos'] }, cuando: NOCHE,
      pensar: '«Confiad, yo he vencido al mundo» (Jn 16:33). ¿Qué aflicción necesitas mirar a la luz de su victoria?' },
    { id: 'oracion-sacerdotal', t: 'Jesús ora por sus discípulos', sim: ['🙏', '✝️'], refs: { jn: '17:1-26' },
      marcas: [['jn', '17:3', 'esta es la vida eterna', 'A'], ['jn', '17:17', 'Santifícalos en tu verdad', 'B'], ['jn', '17:21', 'para que todos sean uno', 'C']],
      com: [
        ['A', 'La oración más larga de Jesús registrada, llamada oración sacerdotal. Primero ora por sí mismo: que el Padre lo glorifique. La vida eterna es conocer al único Dios verdadero y a Jesucristo, a quien él envió.'],
        ['B', 'Luego ora por sus discípulos: que el Padre los guarde del mal, que estén en el mundo sin ser del mundo, y que los santifique en la verdad de su palabra.'],
        ['C', 'Finalmente ora por todos los que creerían por la palabra de ellos, por nosotros: que sean uno, como el Padre y el Hijo, para que el mundo crea. La unidad de la iglesia es testimonio de Cristo.']
      ],
      conc: ['He 7:25', 'Ro 8:34', 'Ef 4:3-6', 'Jn 13:35'],
      lugar: { vista: 'judea', lugares: ['jerusalen', 'monte-olivos'] }, cuando: NOCHE,
      pensar: 'Jesús oró por ti antes de ir a la cruz (Jn 17:20). ¿Cómo te anima saber que él sigue intercediendo?',
      ir: [{ t: 'El sacerdocio: Cristo, nuestro sumo sacerdote', a: '../../sacerdocio/' }] }
  ]);
  I('concilio', [
    { id: 'muerte-judas', t: 'La muerte de Judas', sim: ['👑'], refs: { mt: '27:3-10' },
      marcas: [['mt', '27:3', 'devolvió arrepentido las treinta piezas de plata', 'A'], ['mt', '27:8', 'Campo de sangre', 'B']],
      com: [
        ['A', 'Al ver que Jesús era condenado, Judas sintió remordimiento, devolvió el dinero y reconoció que había entregado sangre inocente. Pero no volvió a Jesús: fue y se ahorcó. El remordimiento sin fe lleva a la desesperación; el arrepentimiento que mira a Cristo lleva a la vida (2 Co 7:10).'],
        ['B', 'Los sacerdotes compraron con ese dinero el campo del alfarero para sepultar extranjeros, llamado Campo de sangre (Hacéldama, Hch 1:18-19). Mateo lo relaciona con Zacarías 11:12-13 y con Jeremías, que compró un campo y visitó al alfarero (Jer 18–19; 32).']
      ],
      conc: ['Zac 11:12-13', 'Jer 32:6-9', 'Hch 1:18-19', '2 Co 7:10'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Viernes al amanecer, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'zac', cv: '11:12-13', nombre: 'Zacarías 11:12-13', en: 'Mateo 27:9-10' }],
      pensar: 'Pedro y Judas fallaron, pero solo uno volvió a Jesús (Mt 26:75; 27:5). ¿Qué haces con tus caídas?' }
  ]);
  I('sentencia', [
    { id: 'burla-soldados', t: 'Los soldados se burlan de Jesús', sim: ['✝️', '👑'], refs: { mt: '27:27-31', mr: '15:16-20' },
      marcas: [['mt', '27:29', 'una corona tejida de espinas', 'A'], ['mt', '27:29', '¡Salve, Rey de los judíos!', 'B']],
      com: [
        ['A', 'Toda la compañía se reunió en el pretorio. Le pusieron un manto escarlata, una corona de espinas y una caña como cetro. Las espinas, señal de la maldición sobre la tierra (Gn 3:18), coronaron al que llevaba la maldición por nosotros (Gá 3:13).'],
        ['B', 'Se arrodillaban burlándose: «¡Salve, Rey de los judíos!». Sin saberlo, proclamaban la verdad. Un día toda rodilla se doblará de verdad (Fil 2:10-11).']
      ],
      conc: ['Gn 3:18', 'Gá 3:13', 'Is 53:3', 'Fil 2:10-11'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: SS('Viernes por la mañana, 33 d.C.'),
      pensar: 'Se burlaban llamándolo rey, y lo era (Mt 27:29). ¿Doblas tu rodilla ante él de verdad?' }
  ]);
  I('crucifixion', [
    { id: 'costado', t: 'Le traspasaron el costado', sim: ['✝️', '👑'], refs: { jn: '19:31-37' },
      marcas: [['jn', '19:34', 'al instante salió sangre y agua', 'A'], ['jn', '19:36', 'No será quebrado hueso suyo', 'B'], ['jn', '19:37', 'Mirarán al que traspasaron', 'C']],
      com: [
        ['A', 'Para que los cuerpos no quedaran en la cruz el día de reposo, quebraban las piernas de los crucificados. Jesús ya había muerto, y un soldado le abrió el costado con una lanza: salió sangre y agua. Juan, testigo ocular, insiste en que lo vio: Jesús murió de verdad.'],
        ['B', 'No le quebraron ningún hueso, como al cordero de la pascua (Éx 12:46; Sal 34:20). Jesús es nuestro Cordero pascual.'],
        ['C', 'Y se cumplió Zacarías 12:10: «Mirarán al que traspasaron», profecía que tendrá su cumplimiento final cuando Israel vea a su Mesías en su segunda venida (Ap 1:7).']
      ],
      conc: ['Éx 12:46', 'Sal 34:20', 'Zac 12:10', 'Ap 1:7', '1 Jn 5:6'],
      lugar: { vista: 'judea', lugares: ['golgota', 'jerusalen'] }, cuando: SS('Viernes por la tarde, 33 d.C.'),
      escritura: [{ tipo: 'cumple', libro: 'ex', cv: '12:46', nombre: 'Éxodo 12:46', en: 'Juan 19:36' }, { tipo: 'cumple', libro: 'zac', cv: '12:10', nombre: 'Zacarías 12:10', en: 'Juan 19:37' }],
      pensar: 'Juan dio testimonio «para que vosotros también creáis» (Jn 19:35). ¿Qué produce en ti contemplar al traspasado?' }
  ]);
  I('sepultura', [
    { id: 'guardia', t: 'La guardia del sepulcro', sim: ['⚔️'], refs: { mt: '27:62-66' },
      marcas: [['mt', '27:63', 'Después de tres días resucitaré', 'A'], ['mt', '27:66', 'sellando la piedra', 'B']],
      com: [
        ['A', 'Los principales sacerdotes y fariseos recordaban mejor que los discípulos que Jesús había anunciado su resurrección. Pidieron a Pilato asegurar el sepulcro.'],
        ['B', 'Sellaron la piedra y pusieron guardia. Sin quererlo, aseguraron la prueba de la resurrección: ni sello romano ni soldados pudieron retener a Jesús en la tumba.']
      ],
      conc: ['Mt 12:40', 'Mt 16:21', 'Hch 2:24'],
      lugar: { vista: 'judea', lugares: ['golgota', 'jerusalen'] }, cuando: SS('Sábado, 33 d.C.'),
      pensar: 'Ni el sello ni la guardia pudieron detener la resurrección (Mt 27:66). ¿Qué te parece imposible para el poder de Dios?' }
  ]);
  I('resurreccion', [
    { id: 'maria-magdalena', t: 'Jesús se aparece a María Magdalena', sim: ['👑'], refs: { mr: '16:9-11', jn: '20:11-18' },
      marcas: [['jn', '20:16', '¡Raboni!', 'A'], ['jn', '20:17', 'Subo a mi Padre y a vuestro Padre', 'B']],
      com: [
        ['A', 'María se quedó llorando junto al sepulcro. Vio a dos ángeles, y luego a Jesús, sin reconocerlo; pensó que era el hortelano. Cuando Jesús la llamó por su nombre, lo reconoció. La primera persona que vio al Señor resucitado fue una mujer de la que había echado siete demonios (Mr 16:9).'],
        ['B', 'Jesús la envió a sus hermanos con el mensaje: «Subo a mi Padre y a vuestro Padre, a mi Dios y a vuestro Dios». Por la resurrección, sus discípulos son ahora sus hermanos e hijos del Padre. María fue la primera en anunciar: «¡He visto al Señor!».']
      ],
      conc: ['Lc 8:2', 'Jn 10:3', 'He 2:11-12'],
      lugar: { vista: 'judea', lugares: ['golgota', 'jerusalen'] }, cuando: R('Domingo por la mañana, 33 d.C.'),
      pensar: 'María reconoció a Jesús cuando la llamó por su nombre (Jn 20:16). ¿Has oído a Jesús llamarte por tu nombre?' },
    { id: 'soborno-guardia', t: 'El soborno de la guardia', sim: ['⚔️'], refs: { mt: '28:11-15' },
      marcas: [['mt', '28:13', 'Sus discípulos vinieron de noche, y lo hurtaron', 'A']],
      com: [['A', 'Los guardias contaron a los principales sacerdotes lo ocurrido. En lugar de creer, les dieron mucho dinero para que dijeran que los discípulos habían robado el cuerpo mientras ellos dormían. La explicación se contradecía a sí misma: si dormían, ¿cómo lo supieron? Los discípulos, además, dieron la vida por anunciar la resurrección.']],
      conc: ['Hch 4:1-3, 33', '1 Co 15:3-8'],
      lugar: { vista: 'judea', lugares: ['jerusalen'] }, cuando: R('Domingo, 33 d.C.'),
      pensar: 'Los líderes prefirieron una mentira antes que creer (Mt 28:12-13). ¿Qué te impide aceptar del todo la verdad de la resurrección?' }
  ]);
  I('tomas', [
    { id: 'tiberias', t: 'Jesús se aparece junto al mar de Tiberias', sim: ['🙌', '👑'], refs: { jn: '21:1-14' },
      marcas: [['jn', '21:3', 'aquella noche no pescaron nada', 'A'], ['jn', '21:7', '¡Es el Señor!', 'B'], ['jn', '21:11', 'ciento cincuenta y tres', 'C']],
      com: [
        ['A', 'En Galilea, Pedro volvió a pescar con otros seis discípulos. Toda la noche, nada, como en el primer llamado (Lc 5:5).'],
        ['B', 'Al amanecer, un hombre en la orilla les dijo que echaran la red a la derecha. La red se llenó, y Juan reconoció: «¡Es el Señor!». Pedro se echó al agua para llegar a él.'],
        ['C', 'Ciento cincuenta y tres peces grandes, y la red no se rompió. Jesús les había preparado brasas, pescado y pan. El Resucitado sirve el desayuno a sus discípulos cansados.']
      ],
      conc: ['Lc 5:1-11', 'Jn 6:11'],
      lugar: { vista: 'galilea', lugares: ['mar-galilea', 'capernaum', 'magdala'] }, cuando: R('En Galilea, 33 d.C.'),
      pensar: 'Sin Jesús no pescaron nada; con su palabra, la red se llenó (Jn 21:3-6). ¿En qué estás trabajando sin consultarle?' },
    { id: 'apacienta', t: 'Jesús restaura a Pedro', sim: ['📖', '✝️'], refs: { jn: '21:15-25' },
      marcas: [['jn', '21:15', '¿me amas más que éstos?', 'A'], ['jn', '21:17', 'Señor, tú lo sabes todo; tú sabes que te amo', 'B'], ['jn', '21:19', 'Sígueme', 'C']],
      com: [
        ['A', 'Junto a un fuego de brasas, como aquel donde Pedro lo negó (Jn 18:18), Jesús le preguntó tres veces si lo amaba. Tres negaciones, tres confesiones.'],
        ['B', 'Pedro ya no se comparó con los demás ni presumió de su fidelidad. Apeló al conocimiento de Jesús. Y Jesús le confió su rebaño: «Apacienta mis ovejas». La restauración incluye un llamado.'],
        ['C', 'Jesús le anunció cómo glorificaría a Dios con su muerte y le repitió el primer llamado: «Sígueme». Cuando Pedro preguntó por Juan, Jesús le respondió: «¿qué a ti? Sígueme tú». Juan cierra su evangelio diciendo que, si se escribieran todas las cosas que hizo Jesús, no cabrían los libros en el mundo.']
      ],
      conc: ['Jn 18:15-27', '1 P 5:1-4', 'Hch 2:14-41'],
      lugar: { vista: 'galilea', lugares: ['mar-galilea', 'capernaum'] }, cuando: R('En Galilea, 33 d.C.'),
      pensar: 'Jesús restauró a Pedro y le dio un llamado (Jn 21:15-17). ¿Crees que Jesús puede restaurarte y volver a usarte?',
      ir: [{ t: 'Hechos: Pedro en Pentecostés', a: '../../hechos/' }] }
  ]);
})();

/* Glosario de los pasajes agregados */
window.ARMONIA.glosario.push(
  { t: 'Fiesta de los tabernáculos', f: ['fiesta de los tabernáculos'], d: 'Fiesta de otoño en que Israel vivía siete días en enramadas, recordando el camino por el desierto (Lv 23:33-43). Se derramaba agua de Siloé junto al altar y se encendían grandes candelabros en el templo.' },
  { t: 'Fiesta de la Dedicación', f: ['fiesta de la dedicación'], d: 'Fiesta de invierno (Janucá) que recordaba la purificación del templo por los macabeos en el 164 a.C., después de la profanación de Antíoco IV.' },
  { t: 'Consolador', f: ['Consolador'], d: 'En griego, Paracleto: el que es llamado al lado para ayudar, abogado, consejero. Es el nombre que Jesús da al Espíritu Santo (Jn 14:16, 26; 15:26; 16:7).' },
  { t: 'Siloé', f: ['Siloé'], d: 'Estanque al sur de Jerusalén, alimentado por el túnel de Ezequías. Su nombre significa «Enviado» (Jn 9:7).' },
  { t: 'Dracmas y estatero', f: ['dos dracmas', 'estatero'], d: 'Las dos dracmas eran el impuesto anual para el templo (Éx 30:13). El estatero equivalía a cuatro dracmas: pagaba el impuesto de dos personas.' },
  { t: 'Talento', f: ['talentos', 'talento'], d: 'Unidad de peso y de dinero de gran valor, equivalente a unos seis mil denarios: el salario de muchos años de trabajo.' },
  { t: 'Hosanna', f: ['Hosanna'], d: 'Palabra hebrea que significa «¡Salva ahora!» (Sal 118:25). Se convirtió en un grito de alabanza.' },
  { t: 'Pretorio', f: ['pretorio'], d: 'La residencia oficial del gobernador romano en Jerusalén, donde Pilato juzgó a Jesús.' },
  { t: 'Gólgota', f: ['Gólgota'], d: 'Palabra aramea que significa «lugar de la Calavera»; en latín, Calvario. Estaba fuera de los muros de Jerusalén.' },
  { t: 'Nardo', f: ['nardo'], d: 'Perfume muy costoso, importado de la India. Una libra valía unos trescientos denarios, casi el salario de un año.' }
);

/* ---------- Itinerario de Jesús: dónde está en cada pasaje (solo cuando se mueve) ----------
   Lista de nodos de caminos.js, en orden. Comienza en el bautismo. Si un pasaje no se mueve, no figura.
   El recorrido entre dos puntos sigue la red de caminos (camino más corto). Aproximado. */
window.ARMONIA.itinerario = {
  'bautismo': ['nazaret', 'betabara'], 'tentacion': ['desierto-judea'], 'cordero': ['betabara'],
  'cana': ['cana', 'capernaum'], 'purifica-templo-1': ['jerusalen'], 'juan-testifica': ['betabara'],
  'samaritana': ['sicar'], 'predica-galilea': ['r-galilea'], 'hijo-funcionario': ['cana'],
  'nazaret-rechazo': ['nazaret', 'capernaum'], 'toda-galilea': ['r-galilea'], 'paralitico': ['capernaum'],
  'betesda': ['jerusalen'], 'espigas': ['r-galilea'], 'mano-seca': ['capernaum'], 'multitud-sigue': ['mar-galilea', 'capernaum'],
  'nain': ['nain'], 'mujeres': ['r-galilea'], 'beelzebu': ['capernaum'],
  'tempestad': ['mar-galilea', 'kursi'], 'gadareno': ['capernaum'], 'obreros': ['r-galilea'], 'envia-doce': ['capernaum'],
  'cinco-mil': ['betsaida'], 'sobre-el-agua': ['mar-galilea'], 'genesaret': ['magdala'], 'pan-de-vida': ['capernaum'],
  'sirofenicia': ['tiro-sidon'], 'sordomudo': ['decapolis'], 'cuatro-mil': ['magdala'],
  'levadura-herodes': ['mar-galilea'], 'ciego-betsaida': ['betsaida'], 'confesion-pedro': ['cesarea-filipo'],
  'anuncio-muerte-2': ['r-galilea'], 'impuesto-templo': ['capernaum'],
  'fiesta-tabernaculos': ['sicar', 'jerusalen'], 'marta-maria': ['betania'], 'dedicacion': ['jerusalen', 'betabara'],
  'ensenanos-orar': ['perea'], 'lazaro': ['betania'], 'efrain': ['efrain'], 'diez-leprosos': ['escitopolis'],
  'venida-reino': ['perea'], 'bartimeo': ['jerico'], 'uncion-betania': ['betania'],
  'entrada-triunfal': ['monte-olivos', 'jerusalen', 'betania'], 'higuera-maldita': ['jerusalen'], 'purifica-templo-2': ['betania'],
  'higuera-seca': ['jerusalen'], 'senales-fin': ['monte-olivos'], 'complot': ['betania'], 'lavamiento': ['jerusalen'],
  'getsemani': ['getsemani'], 'pedro-niega': ['jerusalen'], 'crucifixion': ['golgota'],
  'emaus': ['emaus', 'jerusalen'], 'tiberias': ['capernaum'], 'gran-comision': ['r-galilea'], 'promesa-padre': ['jerusalen'], 'ascension': ['betania']
};
