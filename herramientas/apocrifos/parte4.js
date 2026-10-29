/* Los libros apócrifos y pseudoepígrafos · ruta IV. Los libros de sabiduría (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir } = window.__APO;

  const sabiduria = [
    {
      id: 'eclesiastico', n: 'Eclesiástico: la sabiduría de Ben Sira', ref: 'Proverbios 1:7; Santiago 1:19; Mateo 6:14-15; Romanos 5:12; Lucas 24:44', fecha: [-190, -132],
      visual: [
        img('ben-sira.webp', 'En una sala sencilla de piedra en Jerusalén, un maestro judío de unos sesenta años, Ben Sira, sentado con un rollo abierto sobre las rodillas, enseña a un grupo de jóvenes sentados en esteras que lo escuchan con atención; por una ventana se ve la luz de la tarde', 'Ben Sira enseña en su casa de estudio en Jerusalén. Recreación.'),
        tabla({
          titulo: 'Eclesiástico en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Autor', 'Jesús, hijo de Sira (Ben Sira), un maestro de Jerusalén'],
            ['Fecha', 'Hacia el 190–180 a.C.; su nieto lo tradujo al griego en Egipto después del 132 a.C.'],
            ['Nombres', 'Sirácida, Sabiduría de Ben Sira; Eclesiástico, «el libro de la iglesia», en latín'],
            ['Contenido', '51 capítulos de proverbios, consejos e himnos; elogio de los padres de Israel (44–50)'],
            ['Copias en hebreo', 'Genizá de El Cairo (1896), Qumrán y un rollo hallado en Masada (1964)'],
            ['Ecos en el Nuevo Testamento', 'Santiago 1:19 (pronto para oír); el perdón al prójimo (Mt 6:14)']
          ]
        }),
        cita('Santiago 1:19', '@@stg/1/19')
      ],
      texto: [
        'Eclesiástico es el libro más largo de los apócrifos y el único cuyo autor conocemos con seguridad. Jesús hijo de Sira, conocido como Ben Sira, fue un sabio de Jerusalén que enseñaba a los jóvenes en una «casa de instrucción». Escribió en hebreo hacia el 190–180 a.C., poco antes de la crisis de Antíoco IV. Unos cincuenta años después, su nieto lo tradujo al griego en Egipto.',
        { h: 'Un libro como Proverbios' },
        'Ben Sira sigue el estilo de Proverbios. Enseña que el principio de la sabiduría es el temor del Señor, y da consejos para casi todo: la amistad, el trabajo, la familia, el dinero, la salud, la conversación, la mesa, los préstamos, el trato con los poderosos. Identifica la sabiduría con la ley de Moisés. Sus capítulos 44 a 50 hacen un elogio de los grandes hombres de Israel, desde Enoc y Noé hasta el sumo sacerdote Simón, que servía en el templo en sus días.',
        'Algunas frases suenan muy cercanas al Nuevo Testamento. Ben Sira aconseja ser rápido para escuchar y lento para responder, como Santiago: «todo hombre sea pronto para oír, tardo para hablar, tardo para airarse» (Stg 1:19). También enseña a perdonar al prójimo para que Dios nos perdone, como Jesús en Mateo 6:14-15.',
        { h: 'Un testigo de la Biblia hebrea' },
        'El prólogo que escribió el nieto es un testimonio valioso. Dice tres veces que su abuelo había estudiado la ley, los profetas y los otros libros de los padres. Es la misma división en tres partes de la Biblia hebrea que usó Jesús (Lc 24:44). El traductor reconoce además que las cosas dichas en hebreo no tienen la misma fuerza cuando se traducen. Así, el mismo libro distingue entre la Escritura que su abuelo estudiaba y la obra que él escribió.',
        { h: 'Lo que no se puede aceptar' },
        'Junto a mucha sabiduría práctica, el libro tiene afirmaciones que la Escritura no respalda. Dice que la limosna expía los pecados, como el agua apaga el fuego. Atribuye a la mujer el comienzo del pecado y de la muerte, mientras que Pablo dice que el pecado entró al mundo «por un hombre» (Ro 5:12). Y tiene frases muy duras sobre las hijas y las mujeres que no reflejan el trato de Jesús con ellas.',
        { ejercicio: {
          pregunta: '¿Por qué es importante el prólogo de Eclesiástico para el estudio del canon?',
          opciones: [
            { t: 'Porque afirma que Eclesiástico es parte de la ley de Moisés.', ok: false, por_que: 'No dice eso; distingue la obra de su abuelo de la ley.' },
            { t: 'Porque menciona tres veces la ley, los profetas y los otros libros, la división de la Biblia hebrea.', ok: true, por_que: 'Muestra que hacia el 130 a.C. ya se reconocía un conjunto de Escrituras en tres partes.' },
            { t: 'Porque es el texto más antiguo del Nuevo Testamento.', ok: false, por_que: 'Se escribió más de un siglo antes de Cristo.' }
          ],
          explicacion: 'El nieto de Ben Sira es un testigo temprano de la Biblia hebrea que Jesús confirmó.'
        } }
      ],
      pensar: 'Ben Sira enseñaba que el principio de la sabiduría es el temor del Señor (Pr 1:7). ¿Qué decisiones de tu semana estarían distintas si las tomaras con ese temor?'
    },
    {
      id: 'sabiduria', n: 'Sabiduría de Salomón', ref: 'Mateo 27:43; Hebreos 1:3; Romanos 1:20-23; Génesis 2:7; 1 Reyes 3:9', fecha: [-50, 40],
      visual: [
        img('../imperio-griego/img/grecia-filosofos.webp', 'Filósofos griegos conversan bajo un pórtico de columnas', 'Sabiduría se escribió en Alejandría, en diálogo con la filosofía griega. Recreación.'),
        tabla({
          titulo: 'Sabiduría y el Nuevo Testamento',
          cab: ['Sabiduría', 'Qué dice', 'En el Nuevo Testamento'],
          filas: [
            ['2:12-20', 'Los impíos acechan al justo que se llama hijo de Dios: si lo es, Dios lo librará', 'Mateo 27:43'],
            ['7:25-26', 'La sabiduría es resplandor de la luz eterna e imagen de la bondad de Dios', 'Hebreos 1:3; Colosenses 1:15'],
            ['13:1-9', 'Por la grandeza de lo creado se puede conocer al Creador', 'Romanos 1:20'],
            ['14:22-31', 'De la idolatría nacen todos los vicios', 'Romanos 1:21-32']
          ],
          nota: 'Son semejanzas de lenguaje e ideas; el Nuevo Testamento nunca cita a Sabiduría como Escritura.'
        }),
        cita('Mateo 27:43', '@@mt/27/43')
      ],
      texto: [
        'El libro de la Sabiduría habla en primera persona como si fuera Salomón, el rey que pidió a Dios un corazón entendido (1 R 3:9). Pero se escribió en griego, en Alejandría, unos novecientos años después de Salomón, probablemente en el siglo I a.C. El autor era un judío culto que conocía bien la filosofía griega y quería mostrar a sus hermanos tentados por esa cultura que la verdadera sabiduría viene del Dios de Israel.',
        { h: 'Las tres partes' },
        'La primera parte (1–5) contrasta el destino del justo y el del impío. Los impíos piensan que la vida es corta y que después no hay nada, y por eso persiguen al justo que los incomoda. Pero las almas de los justos están en la mano de Dios. La segunda (6–9) alaba la sabiduría con la voz de Salomón. La tercera (10–19) recorre la historia desde Adán hasta el éxodo, mostrando cómo la sabiduría salvó a Israel, y critica con dureza la idolatría de Egipto.',
        { h: 'Por qué los cristianos lo apreciaron' },
        'Los primeros cristianos encontraron en el capítulo 2 una descripción asombrosa de la pasión de Cristo: los impíos se burlan del justo que dice ser hijo de Dios y lo desafían a que Dios lo libre. En la cruz, los principales sacerdotes dijeron algo parecido: «Confió en Dios; líbrele ahora si le quiere» (Mt 27:43). Hebreos llama a Cristo «el resplandor de su gloria» (He 1:3), con palabras que recuerdan cómo Sabiduría describe a la sabiduría de Dios. Y Romanos 1 desarrolla la misma idea de que la creación muestra al Creador y de que la idolatría lleva a toda clase de pecados.',
        'Un antiguo listado de libros, el fragmento de Muratori, de fines del siglo II, mencionó Sabiduría entre los libros que se leían en la iglesia, como escrito por amigos de Salomón en su honor. Es decir, ya entonces se sabía que no lo había escrito Salomón.',
        { h: 'Lo que viene de la filosofía griega' },
        'En algunas partes el autor adopta ideas de los filósofos que la Biblia no enseña. El supuesto Salomón dice que, siendo bueno, entró en un cuerpo sin mancha, como si el alma existiera antes del cuerpo. La Escritura enseña que el ser humano es una unidad creada por Dios, que formó al hombre del polvo de la tierra y sopló en él aliento de vida (Gn 2:7).',
        { ejercicio: {
          pregunta: '¿Cómo se explica que Hebreos 1:3 se parezca a Sabiduría 7:26?',
          opciones: [
            { t: 'Hebreos cita a Sabiduría como Escritura inspirada.', ok: false, por_que: 'Hebreos no lo cita ni dice «escrito está»; solo usa un lenguaje parecido.' },
            { t: 'El autor de Hebreos usa palabras que sus lectores conocían para decir algo nuevo: que Cristo es el resplandor de la gloria de Dios.', ok: true, por_que: 'Lo que Sabiduría decía de una cualidad de Dios, Hebreos lo dice de una persona, el Hijo eterno.' },
            { t: 'Sabiduría copió a Hebreos.', ok: false, por_que: 'Sabiduría es anterior a Hebreos.' }
          ],
          explicacion: 'El Nuevo Testamento usa el lenguaje de su tiempo y lo llena de un sentido nuevo en Cristo.'
        } }
      ],
      pensar: 'La sabiduría que el libro buscaba se hizo persona en Cristo, «en quien están escondidos todos los tesoros de la sabiduría y del conocimiento» (Col 2:3). ¿Buscas la sabiduría para tu vida en Él?'
    },
    {
      id: 'salmo-adicional', n: 'El salmo adicional de David', ref: '1 Samuel 16:11-13; 1 Samuel 17:45-51; Salmo 78:70-72', fecha: -100,
      visual: [
        cita('1 Samuel 17:45', '@@1s/17/45'),
        tabla({
          titulo: 'El salmo 151',
          cab: ['', ''],
          filas: [
            ['Dónde está', 'Al final del libro de los Salmos en la Biblia griega, con el título «fuera del número»'],
            ['Qué cuenta', 'David, el menor de sus hermanos, pastor y músico, ungido por Samuel, vence a Goliat'],
            ['Original hebreo', 'Hallado en 1956 en la cueva 11 de Qumrán, en un rollo de salmos, como dos salmos breves'],
            ['Quién lo lee', 'Las iglesias ortodoxas; las Biblias católicas y evangélicas no lo incluyen']
          ]
        })
      ],
      texto: [
        'El libro de los Salmos tiene 150 salmos en todas nuestras Biblias. La Biblia griega agregó uno más al final, con un título curioso: un salmo de David, escrito cuando peleó solo contra Goliat, «fuera del número». Es decir, los mismos traductores reconocían que no pertenecía a la colección de los 150.',
        { h: 'Lo que dice' },
        'En siete versículos, David cuenta su historia: era el pequeño entre sus hermanos y el menor en la casa de su padre; apacentaba las ovejas; sus manos hicieron instrumentos para alabar a Dios. Dios envió a su profeta a ungirlo, aunque sus hermanos eran altos y hermosos. Salió al encuentro del filisteo, que lo maldijo por sus ídolos, y le cortó la cabeza con su propia espada.',
        { h: 'Un hallazgo en Qumrán' },
        'En 1956 apareció en la cueva 11 de Qumrán un gran rollo de salmos copiado en el siglo I d.C. Además de muchos salmos bíblicos, contenía otros textos, entre ellos este salmo en hebreo, en forma de dos composiciones breves, y una parte del último capítulo de Eclesiástico. El hallazgo mostró que el salmo griego se tradujo de un original hebreo y que en Qumrán circulaban colecciones de salmos con textos adicionales.',
        { h: 'El relato verdadero ya está en la Biblia' },
        'Todo lo que el salmo cuenta está en 1 Samuel 16 y 17, y mejor dicho. Allí David no se presenta a sí mismo, sino que el texto muestra cómo Dios mira el corazón y no la apariencia (1 S 16:7). Y allí está su confesión ante Goliat: «Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos» (1 S 17:45).',
        'El salmo adicional sirve para ver cómo el pueblo de Dios recordaba y cantaba la historia de David siglos después. Pero el libro de los Salmos que Jesús y los apóstoles citaron es el de los 150.'
      ],
      pensar: 'David venció a Goliat «en el nombre de Jehová de los ejércitos». ¿Qué gigante enfrentas hoy, y en el nombre de quién lo estás enfrentando?'
    }
  ];

  window.__APO.sabiduria = sabiduria;
})();
