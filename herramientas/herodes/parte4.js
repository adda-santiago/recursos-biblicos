/* La dinastía de Herodes · ruta IV. Las mujeres de la casa de Herodes (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA IV. Las mujeres de la casa de Herodes ==================
  const mujeres = [
    {
      id: 'mariamne', n: 'Mariamne y Salomé: la reina y la intrigante', ref: 'Proverbios 31:30; Proverbios 14:30; 1 Pedro 3:3-4', fecha: [-37, 10],
      visual: [
        img('hd-mariamne.webp', 'En una sala del palacio de Herodes, la reina Mariamne, joven princesa asmonea de porte digno, de pie entre dos guardias, mira de frente al rey Herodes en su trono', 'Mariamne ante Herodes, poco antes de su condena. Recreación.'),
        tabla({
          titulo: 'Dos mujeres en la corte de Herodes',
          cab: ['', 'Mariamne', 'Salomé'],
          filas: [
            ['Origen', 'Princesa asmonea, nieta de Hircano II y de Aristóbulo II', 'Idumea, hermana de Herodes'],
            ['Relación con el rey', 'Su segunda esposa, desde el 37 a.C.', 'Su hermana y consejera'],
            ['Cómo la describe Josefo', 'Hermosa, casta, orgullosa de su linaje; despreciaba a la familia de Herodes', 'Celosa, astuta, hábil para acusar'],
            ['Su final', 'Ejecutada en el 29 a.C.', 'Murió hacia el 10 d.C., dueña de Jamnia, Azoto y Fasaelis, que dejó a Livia, la esposa de Augusto'],
            ['Su descendencia', 'Su nieto Agripa I y su nieta Herodías; su bisnieto Agripa II', 'Su hija Berenice fue la madre de Agripa I y de Herodías']
          ]
        }),
        cita('Proverbios 31:30', '@@pr/31/30')
      ],
      texto: [
        'Dos mujeres marcaron la corte de Herodes en sus primeros años: Mariamne, su esposa, y Salomé, su hermana. Sus nombres aparecen en Josefo una y otra vez, y entre las dos se juega buena parte de la tragedia de la familia.',
        { h: 'Mariamne, la última princesa asmonea' },
        'Mariamne era nieta de los dos hermanos que se habían disputado el trono antes de Roma, Hircano II y Aristóbulo II. Por sus venas corría la sangre de los macabeos, y el pueblo la veía como la verdadera reina. Josefo la describe como una mujer de gran belleza y de conducta irreprochable, pero orgullosa: no ocultaba su desprecio por la familia idumea de su esposo, ni le perdonaba la muerte de su hermano y de su abuelo. Herodes la amó con pasión, y aun después de matarla puso su nombre a una de las tres grandes torres de su palacio en Jerusalén.',
        'Lo que Herodes no pudo destruir fue su descendencia. Los nietos de Mariamne —Agripa I y Herodías— y su bisnieto Agripa II son los Herodes de Hechos y de los evangelios. El pueblo aceptó mejor a Agripa I precisamente porque era «nieto de Mariamne».',
        { h: 'Salomé, la hermana del rey' },
        'Salomé fue la figura más constante de la corte: vivió más que su hermano y lo sobrevivió casi quince años. Josefo la muestra detrás de casi todas las acusaciones: contra Mariamne, contra la madre de Mariamne, contra su propio segundo esposo, Costobaro, a quien denunció y que fue ejecutado, y contra los hijos de Mariamne. Quiso casarse con un consejero árabe y Herodes se lo impidió. Al final, sin embargo, fue ella la que dejó libres a los notables encerrados en el hipódromo de Jericó, cuando Herodes había ordenado matarlos el día de su muerte.',
        'Salomé recibió en herencia tres ciudades, que al morir dejó a Livia, la esposa de Augusto. Su hija Berenice se casó con Aristóbulo, hijo de Mariamne; así, la sangre de la reina y la de la intrigante se unieron en los nietos de ambas.',
        { h: 'Belleza, linaje y temor de Dios' },
        'Ninguna de las dos aparece en la Biblia, pero sus vidas ilustran lo que dice Proverbios: «Engañosa es la gracia, y vana la hermosura; la mujer que teme a Jehová, ésa será alabada» (Pr 31:30). La belleza y el linaje de Mariamne no la libraron; la astucia de Salomé le dio poder, pero dejó tras de sí una familia destruida.',
        arbol('Ver a Mariamne y a Salomé en el árbol', 'mariamne')
      ],
      pensar: 'Pedro enseña que el adorno que vale delante de Dios es «el interno, el del corazón» (1 P 3:4). ¿Qué estás cultivando con más cuidado: lo que los demás ven, o lo que Dios ve?'
    },
    {
      id: 'herodias', n: 'Herodías, la reina ambiciosa', ref: 'Mateo 14:3-11; Marcos 6:17-28; Lucas 3:19; Mateo 11:14; 1 Reyes 21:25', fecha: [-15, 39],
      visual: [
        img('hd-juan-antipas.webp', 'Juan el Bautista encadenado habla con firmeza al tetrarca Herodes Antipas; detrás de él, Herodías mira a Juan con odio', 'Herodías, detrás de Antipas, escucha la reprensión de Juan el Bautista. Recreación.'),
        tabla({
          titulo: 'La vida de Herodías',
          cab: ['Etapa', 'Qué pasó'],
          filas: [
            ['Nacimiento', 'Hija de Aristóbulo (hijo de Herodes y Mariamne) y de Berenice; hermana de Agripa I'],
            ['Primer matrimonio', 'Con su tío Herodes II, hijo de Herodes y Mariamne II; tuvieron una hija, Salomé'],
            ['Segundo matrimonio', 'Con otro tío, Antipas, que repudió a su esposa nabatea'],
            ['Juan el Bautista', 'Lo odiaba por su reprensión; pidió su cabeza por medio de su hija (Mt 14:8)'],
            ['Ambición', 'Celosa de su hermano Agripa, empujó a Antipas a pedir en Roma el título de rey'],
            ['Final', 'Desterrada con Antipas a Lugdunum, en la Galia (39 d.C.)']
          ]
        }),
        cita('Mateo 14:3-11', '@@mt/14/3-11')
      ],
      texto: [
        'Herodías era nieta de Herodes el Grande y de Mariamne. Su padre, Aristóbulo, fue uno de los hijos que Herodes mandó estrangular cuando ella era niña. Se casó con su tío Herodes II, a quien Marcos y Mateo llaman Felipe (Mr 6:17), y tuvieron una hija. Herodes II había sido nombrado heredero en uno de los testamentos de su padre, pero lo borró después; vivía como un particular rico, sin territorio.',
        { h: 'Una mujer que quería ser reina' },
        'Cuando Antipas, tetrarca de Galilea, se enamoró de ella, Herodías aceptó dejar a su marido. Josefo lo dice con claridad: lo hizo para confundir las leyes de su pueblo, al casarse con el hermano de su marido estando este vivo. La ley lo prohibía (Lv 18:16). Juan el Bautista lo denunció públicamente, y Herodías no se lo perdonó. Marcos dice que ella «le acechaba, y deseaba matarle, y no podía» (Mr 6:19), hasta que encontró la ocasión en el cumpleaños de Antipas. Mateo precisa que la hija pidió la cabeza de Juan «instruida primero por su madre» (Mt 14:8).',
        { h: 'Jezabel y Elías' },
        'Los evangelios presentan a Juan como el Elías que había de venir (Mt 11:14). La historia se repite: Elías tuvo que enfrentar a Acab, un rey débil, y a Jezabel, la reina que lo incitaba a lo malo (1 R 21:25) y que juró matar al profeta (1 R 19:2). Juan enfrentó a Antipas, un tetrarca vacilante que lo escuchaba con gusto, y a Herodías, que no descansó hasta verlo muerto.',
        { h: 'La ambición que lo arruinó todo' },
        'La misma ambición terminó con ella. Cuando su hermano Agripa, que años antes había dependido de la caridad de Antipas, fue nombrado rey, Herodías empujó a su esposo a ir a Roma a pedir lo mismo. El viaje terminó en el destierro de los dos. Josefo, que no la quería, reconoce que tuvo un gesto de lealtad: rechazó el perdón del emperador y acompañó a Antipas.',
        { ejercicio: {
          pregunta: '¿Por qué Juan el Bautista decía que el matrimonio de Antipas con Herodías no era lícito?',
          opciones: [
            { t: 'Porque Herodías no era judía.', ok: false, por_que: 'Herodías era de la familia de Herodes y se consideraba judía.' },
            { t: 'Porque era la mujer de su hermano, que todavía vivía.', ok: true, por_que: 'La ley prohibía tomar a la mujer del hermano (Lv 18:16; 20:21); Juan lo dijo con esas palabras (Mr 6:18).' },
            { t: 'Porque un tetrarca no podía casarse sin permiso de Roma.', ok: false, por_que: 'El problema que señalaba Juan era moral y de la ley de Dios, no político.' }
          ],
          explicacion: 'Juan no hizo diferencia entre el pueblo y el gobernante: la ley de Dios valía también para el tetrarca.'
        } }
      ],
      pensar: 'Herodías prefirió deshacerse de la voz que la reprendía antes que cambiar. ¿Cómo reaccionas cuando la Palabra de Dios, o alguien que te ama, pone el dedo en algo que no quieres dejar?'
    },
    {
      id: 'salome', n: 'Salomé, la hija de Herodías', ref: 'Marcos 6:21-28; Mateo 14:6-11; Marcos 5:42', fecha: [29, 60],
      visual: [
        tabla({
          titulo: 'Lo que dice la Biblia y lo que dice Josefo',
          cab: ['Fuente', 'Qué sabemos'],
          filas: [
            ['Marcos y Mateo', 'No dan su nombre: la llaman «la hija de Herodías» y «la muchacha». Danzó en el cumpleaños de Antipas y, aconsejada por su madre, pidió la cabeza de Juan'],
            ['Josefo', 'Da su nombre, Salomé; dice que se casó con su tío abuelo Felipe el tetrarca, y después con su primo Aristóbulo, rey de Calcis, con quien tuvo tres hijos'],
            ['Monedas', 'Se conservan monedas de Aristóbulo de Calcis con la imagen de su esposa Salomé'],
            ['El arte posterior', 'Pintores, escritores y músicos la convirtieron en un personaje de seducción; los evangelios no dicen nada de eso']
          ]
        }),
        cita('Marcos 6:21-28', '@@mr/6/21-28')
      ],
      texto: [
        'La joven que danzó en el cumpleaños de Herodes Antipas es una de las figuras más conocidas del relato de Juan el Bautista, aunque los evangelios ni siquiera dicen su nombre. Marcos y Mateo la llaman «la hija de Herodías» y «la muchacha». El nombre Salomé lo da Josefo, que la menciona en su lista de la familia sin contar el episodio.',
        { h: 'Una muchacha en manos de su madre' },
        'La palabra griega que usan los evangelios para ella es la misma que Marcos usa para la hija de Jairo, que «tenía doce años» (Mr 5:42): una muchacha joven, quizás de unos doce a catorce años. El relato pone el peso no en ella sino en los adultos. Antipas hizo un juramento imprudente ante sus invitados. Ella no sabía qué pedir y salió a preguntar a su madre: «¿Qué pediré?» (Mr 6:24). Fue Herodías la que tomó la decisión. Mateo lo resume: lo pidió «instruida primero por su madre» (Mt 14:8).',
        'Con los siglos, el arte la transformó en un personaje de seducción, y algunas obras le atribuyeron sentimientos y escenas que la Biblia no cuenta. Al leer el pasaje conviene quedarse con lo que dice el texto: una madre que usó a su hija para vengarse, y un gobernante que prefirió quedar bien con sus invitados antes que con su conciencia.',
        { h: 'Después de la danza' },
        'Josefo cuenta que Salomé se casó con Felipe el tetrarca, hermano de Antipas y mucho mayor que ella. Al morir Felipe sin hijos, en el 34 d.C., se casó con su primo Aristóbulo, hijo de Herodes de Calcis, que llegó a ser rey de Armenia Menor y de Calcis. Tuvieron tres hijos. En monedas de Aristóbulo aparece su retrato, con el título de reina. Es una de las pocas mujeres de la familia de cuyo rostro queda un testimonio.',
        { h: 'Lo que los padres enseñan' },
        'La Biblia no juzga a la muchacha; muestra lo que una madre puede sembrar en una hija. Herodías transmitió a Salomé su odio y su manera de usar a las personas. Del mismo modo, la fe sincera de Loida pasó a Eunice y de Eunice a Timoteo (2 Ti 1:5).',
        arbol('Ver a Salomé en el árbol', 'salome')
      ],
      pensar: 'La hija de Herodías preguntó a su madre qué pedir, y su madre le enseñó a pedir la muerte de un justo. ¿Qué están aprendiendo de ti los más jóvenes que te observan y te preguntan?'
    },
    {
      id: 'berenice', n: 'Berenice y Drusila: dos hermanas en Hechos', ref: 'Hechos 24:24-25; Hechos 25:13, 23; Hechos 26:30-31', fecha: [44, 79],
      visual: [
        img('../hechos/img/hechos-pablo-agripa.webp', 'Pablo encadenado se defiende ante el rey Agripa y Berenice, sentados con gran pompa en la sala de audiencias de Cesarea', 'Pablo ante el rey Agripa y Berenice (Hechos 25–26). Recreación.'),
        tabla({
          titulo: 'Las dos hijas de Agripa I',
          cab: ['', 'Berenice', 'Drusila'],
          filas: [
            ['Nació', 'Hacia el 28 d.C.', 'Hacia el 38 d.C.'],
            ['Matrimonios', 'Marco Julio Alejandro; su tío Herodes de Calcis; Polemón, rey de Cilicia', 'Aziz, rey de Emesa; después, el gobernador Félix'],
            ['En Hechos', 'Acompaña a su hermano Agripa II cuando escucha a Pablo (Hch 25:13, 23; 26:30)', 'Escucha a Pablo con Félix «acerca de la fe en Jesucristo» (Hch 24:24)'],
            ['Después', 'En el 66 intercede ante el gobernador Floro por los judíos; luego apoya a Roma y se relaciona con Tito', 'Su hijo Agripa muere en la erupción del Vesubio, en el 79']
          ]
        }),
        cita('Hechos 24:24-25', '@@hch/24/24-25')
      ],
      texto: [
        'Las dos hijas de Agripa I aparecen en los últimos capítulos de Hechos, cuando Pablo, preso en Cesarea, se defiende ante los gobernadores romanos y ante el rey Agripa II. Las dos escucharon el evangelio de su boca.',
        { h: 'Drusila y Félix' },
        'Drusila era la menor. Era muy joven cuando la casaron con Aziz, rey de Emesa, en Siria, que aceptó circuncidarse para casarse con ella. Poco después, Félix, el gobernador romano de Judea, la convenció de dejar a su marido y casarse con él, aunque Félix era gentil. Josefo dice que ella lo hizo, en parte, para librarse de los celos de su hermana Berenice, que la envidiaba por su belleza.',
        'Lucas cuenta que, algunos días después de la primera defensa de Pablo, Félix vino «con Drusila su mujer, que era judía», y oyó a Pablo «acerca de la fe en Jesucristo» (Hch 24:24). Pablo no les habló de cosas abstractas: «al disertar Pablo acerca de la justicia, del dominio propio y del juicio venidero, Félix se espantó» (Hch 24:25). Era justamente lo que faltaba en ese matrimonio. Félix despidió a Pablo y lo dejó preso dos años, esperando que le diera dinero. El hijo que tuvieron, Agripa, murió años después en la erupción del Vesubio.',
        { h: 'Berenice' },
        'Berenice, la mayor, se casó primero con un judío rico de Alejandría y después con su propio tío, Herodes de Calcis. Al quedar viuda vivió muchos años junto a su hermano Agripa II, y circularon rumores de una relación entre ellos que Josefo y un poeta romano recogen. Para acallarlos se casó con Polemón, rey de Cilicia, pero lo dejó pronto y volvió con su hermano.',
        'Lucas cuenta que «el rey Agripa y Berenice vinieron a Cesarea para saludar a Festo», el nuevo gobernador, y que al día siguiente entraron en la audiencia «con mucha pompa» para oír a Pablo (Hch 25:13, 23). Al final, se levantaron con el gobernador y reconocieron que Pablo no había hecho «ninguna cosa digna ni de muerte ni de prisión» (Hch 26:31).',
        'Años después, en el 66, Berenice se presentó descalza ante el gobernador Floro para rogarle que no siguiera matando judíos en Jerusalén, sin éxito. Cuando estalló la guerra se puso del lado de Roma y se unió al general Tito, el que destruiría el templo. Tito la llevó a Roma, pero al ser emperador la despidió.',
        arbol('Ver a Berenice y Drusila en el árbol', 'berenice')
      ],
      pensar: 'Félix se espantó al oír de justicia, dominio propio y juicio, pero dejó la decisión para «cuando tenga oportunidad». Pablo escribió: «he aquí ahora el día de salvación» (2 Co 6:2). ¿Hay alguna decisión ante Dios que estés postergando?'
    }
  ];

  window.__HD.mujeres = mujeres;
})();
