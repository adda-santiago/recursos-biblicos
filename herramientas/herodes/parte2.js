/* La dinastía de Herodes · ruta II. Herodes el Grande (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, arbol, R } = window.__HD;

  // ================== RUTA II. Herodes el Grande ==================
  const grande = [
    {
      id: 'rey', n: 'De gobernador de Galilea a «rey de los judíos»', ref: 'Mateo 2:1-2; Lucas 1:5; Juan 19:11', fecha: [-47, -37],
      visual: [
        img('hd-herodes-senado.webp', 'En la curia del Senado romano, con columnas de mármol y senadores con toga sentados en gradas, un joven Herodes de unos treinta y tres años, con manto oscuro de viaje, está de pie en el centro mientras Marco Antonio, con coraza, y el joven Octavio, con toga, lo presentan a los senadores', 'El Senado romano declara rey de Judea a Herodes, en el año 40 a.C., con el apoyo de Marco Antonio y Octavio. Recreación.'),
        pasos([
          { t: '40 a.C.: los partos invaden Judea; Herodes deja a su familia en Masada y busca ayuda en Petra, que se la niega', fecha: -40, estado: { view: V.sur, capas: [], lugares: ['jerusalen', 'masada', 'petra'], trazos: [] } },
          { t: 'Pasa por Egipto y Rodas y llega a Roma, donde el Senado lo declara rey de Judea', fecha: -40, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['jerusalen', 'petra', 'alejandria', 'rodas', 'roma'], trazos: ['hd-huida-40'] } },
          { t: '39 a.C.: desembarca en Tolemaida con el título de rey, pero sin reino: tiene que conquistarlo', fecha: -39, estado: { view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'tolemaida'], trazos: ['hd-regreso-39'] } },
          { t: '37 a.C.: después de un sitio de cinco meses, toma Jerusalén con ayuda de las legiones romanas', fecha: -37, estado: { view: V.palestina, capas: ['hd-herodes-37'], lugares: ['tolemaida', 'samaria', 'jerusalen', 'masada', 'jerico'] } }
        ]),
        cita('Mateo 2:1-2', '@@mt/2/1-2')
      ],
      texto: [
        'Herodes nació hacia el año 73 a.C. A los veinticinco años, su padre Antípatro lo hizo gobernador de Galilea. Allí persiguió a una banda de salteadores y ejecutó a su jefe sin juicio. Citado ante el Sanedrín de Jerusalén, se presentó vestido de púrpura y con soldados, y los jueces no se atrevieron a condenarlo. Ya entonces se veía cómo iba a gobernar.',
        { h: 'Un rey sin reino' },
        'En el año 40 a.C., los partos, el gran enemigo de Roma en el oriente, invadieron Siria y Judea y pusieron en el trono a Antígono, el último príncipe asmoneo. Fasael, el hermano de Herodes, cayó prisionero y murió. Herodes escapó de noche con su familia, la dejó en la fortaleza de Masada y fue a pedir ayuda a los nabateos de Petra, que no lo recibieron. Siguió a Egipto, donde rechazó un puesto que le ofrecía Cleopatra, y en pleno invierno se embarcó hacia Roma.',
        'Allí Marco Antonio, que había sido amigo de su padre, y el joven Octavio lo presentaron al Senado. Los senadores, que necesitaban a alguien fiel a Roma contra los partos, lo declararon rey de Judea. Josefo cuenta que Herodes salió del Senado entre los dos hombres más poderosos de Roma, y que esa noche Antonio dio un banquete en su honor.',
        { h: 'Conquistar su propio reino' },
        'Herodes volvió en el 39 a.C. con un título y sin reino. Le tomó dos años y medio de guerra conquistarlo. Liberó a su familia en Masada, tomó Galilea y, en el 37 a.C., con las legiones romanas del general Sosio, sitió Jerusalén durante cinco meses. Durante el sitio se casó con Mariamne, una princesa asmonea, para presentarse como heredero legítimo. Cuando la ciudad cayó, los soldados mataron sin piedad; Herodes tuvo que pagar a los romanos para que no saquearan el templo. Antígono fue enviado a Antioquía y decapitado.',
        'Así llegó al trono el hombre que Mateo llama «el rey Herodes». Reinaría treinta y tres años. Cuando los magos llegaron preguntando por «el rey de los judíos, que ha nacido» (Mt 2:2), tocaron el punto más sensible de su vida: él había recibido ese título de Roma y lo había conquistado con la espada. Jesús lo tenía por nacimiento.',
        ir('Ver en Entre los Testamentos: Herodes, rey de los judíos', R.entre + '#roma/3')
      ],
      pensar: 'Herodes recibió de Roma el título de rey y tuvo que conquistarlo por la fuerza; Jesús nació Rey. Frente a Pilato dijo que ninguna autoridad tendría contra él «si no te fuese dada de arriba» (Jn 19:11). ¿Qué te da paz al saber que ningún poder humano está fuera del gobierno de Dios?'
    },
    {
      id: 'asmoneos', n: 'Asegurar el trono: el fin de los asmoneos', ref: 'Hebreos 5:4; Hebreos 7:23-24; Juan 11:49-51', fecha: [-37, -28],
      visual: [
        tabla({
          titulo: 'Los asmoneos que Herodes eliminó',
          cab: ['Persona', 'Parentesco', 'Qué pasó'],
          filas: [
            ['Antígono', 'Último rey asmoneo', 'Decapitado en Antioquía por orden de Antonio (37 a.C.)'],
            ['Aristóbulo III', 'Hermano de Mariamne; sumo sacerdote a los 17 años', 'Ahogado en una piscina de Jericó (35 a.C.)'],
            ['Hircano II', 'Abuelo de Mariamne; antiguo sumo sacerdote', 'Ejecutado a los ochenta años (30 a.C.)'],
            ['Mariamne', 'Su esposa', 'Ejecutada (29 a.C.); ver II.5'],
            ['Alejandra', 'Madre de Mariamne', 'Ejecutada (28 a.C.)'],
            ['Alejandro y Aristóbulo', 'Sus hijos con Mariamne', 'Estrangulados en Sebaste (7 a.C.)']
          ]
        }, 'Asmoneos'),
        tabla({
          titulo: 'Un sumo sacerdocio en manos del rey',
          cab: ['Antes de Herodes', 'Desde Herodes'],
          filas: [
            ['El cargo pasaba de padre a hijo y era de por vida', 'El rey (y después Roma) nombraba y destituía sumos sacerdotes a voluntad'],
            ['Los asmoneos fueron a la vez reyes y sumos sacerdotes', 'Herodes, que no era sacerdote, separó los dos cargos'],
            ['Una sola familia', 'Ocho sumos sacerdotes en treinta y tres años, sobre todo de la familia de Boeto, traída de Alejandría'],
            ['Las vestiduras, en el templo', 'Las vestiduras del Día de la Expiación, guardadas por el rey en la fortaleza Antonia']
          ]
        }, 'Sumo sacerdocio'),
        cita('Hebreos 7:23-24', '@@he/7/23-24')
      ],
      texto: [
        'Herodes se sentó en el trono, pero no se sentía seguro. Los judíos estaban acostumbrados a ser gobernados por los asmoneos, la familia de los macabeos que había liberado al pueblo de los griegos. Herodes era un idumeo nombrado por Roma. Para ganar legitimidad se casó con Mariamne, nieta de dos príncipes asmoneos. Y para que nadie le disputara el trono, eliminó uno por uno a todos los varones de esa familia.',
        { h: 'Un sumo sacerdote demasiado popular' },
        'Herodes nombró sumo sacerdote a Ananel, un sacerdote traído de Babilonia, sin vínculos con nadie. La madre de Mariamne, Alejandra, logró por medio de Cleopatra de Egipto que el cargo pasara a su hijo Aristóbulo III, hermano de Mariamne, de diecisiete años. En la fiesta de los Tabernáculos, cuando el joven subió al altar con las vestiduras de sumo sacerdote, la multitud lo aclamó con lágrimas: veían en él al heredero de los macabeos. Poco después, en un baño en los palacios de Jericó, unos compañeros de Herodes lo hundieron en el agua como si fuera un juego hasta ahogarlo. Herodes lloró en el funeral. Nadie le creyó.',
        'El anciano Hircano II, que había vuelto del destierro en Babilonia, fue ejecutado en el 30 a.C. con una acusación de conspiración. Tenía unos ochenta años.',
        { h: 'Un cargo sagrado convertido en instrumento' },
        'Herodes cambió para siempre el sumo sacerdocio. Ya no era un cargo de por vida que pasaba de padre a hijo, como mandaba la ley, sino un nombramiento del rey, que lo daba y lo quitaba según su conveniencia. Los gobernadores romanos siguieron haciendo lo mismo. Por eso en tiempos de Jesús había varios exsumos sacerdotes vivos al mismo tiempo, como Anás, y por eso el cargo estaba en manos de unas pocas familias ricas, ligadas al poder.',
        'Hebreos recuerda que nadie toma para sí esa honra, sino el que es llamado por Dios (He 5:4), y que los sumos sacerdotes de Israel eran muchos porque la muerte les impedía continuar. Cristo, en cambio, «por cuanto permanece para siempre, tiene un sacerdocio inmutable» (He 7:24). Ningún rey puede destituirlo.',
        ir('Ver El sacerdocio en Israel', '../../sacerdocio/')
      ],
      pensar: 'Herodes usó el sacerdocio para asegurar su poder. ¿Qué te enseña el sacerdocio de Cristo, que nadie puede quitarle ni comprar, cuando te acercas a Dios por medio de él?'
    },
    {
      id: 'augusto', n: 'Con Antonio y con Augusto', ref: 'Lucas 2:1; Proverbios 21:1; Daniel 2:21', fecha: [-36, -20],
      visual: [
        img('hd-herodes-rodas.webp', 'En una sala con columnas de un palacio de la isla de Rodas, el rey Herodes, de unos cuarenta y dos años, sin diadema, de pie frente a Octavio, un joven romano de unos treinta y dos años sentado con toga, a quien entrega su diadema real de tela blanca; oficiales romanos observan', 'Herodes se presenta sin diadema ante Octavio en Rodas, en el 30 a.C., y le ofrece la misma lealtad que había tenido con Antonio. Recreación.'),
        pasos([
          { t: '37 a.C.: el reino que Herodes conquista', fecha: -37, estado: { view: V.palestina, capas: ['hd-herodes-37'], lugares: ['jerusalen', 'jerico', 'masada', 'samaria'] } },
          { t: '30 a.C.: Augusto le devuelve Jericó y le da Samaria, Gaza, Jope, Gadara, Hipos y la Torre de Estratón', fecha: -30, estado: { view: V.palestina, capas: ['hd-herodes-30'], lugares: ['jerusalen', 'jerico', 'gaza', 'jope', 'samaria', 'cesarea', 'gadara'] } },
          { t: '23 y 20 a.C.: suma Traconite, Batanea, Auranítide y la región de Paneas, al noreste', fecha: -20, estado: { view: V.palestina, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'cesarea', 'paneas', 'samaria'] } }
        ]),
        cita('Lucas 2:1', '@@lc/2/1')
      ],
      texto: [
        'Durante los primeros años de su reinado, Herodes dependió de Marco Antonio, que gobernaba el oriente romano. El problema era Cleopatra, la reina de Egipto, amante de Antonio, que quería recuperar las tierras que alguna vez habían sido de los Ptolomeos, incluida Judea. Antonio le regaló los famosos palmares y bálsamos de Jericó, y Herodes tuvo que arrendárselos a ella para seguir cultivándolos.',
        { h: 'La batalla de Accio' },
        'En el año 31 a.C., Octavio derrotó a Antonio y Cleopatra en la batalla naval de Accio, en Grecia. Los dos se suicidaron poco después. Herodes había apoyado al perdedor. Ese mismo año, además, un terremoto mató a miles en Judea.',
        'En la primavera del 30 a.C., Herodes viajó a Rodas para presentarse ante el vencedor. Josefo cuenta que se quitó la diadema y habló con franqueza: había sido leal a Antonio hasta el final, y ofrecía a Octavio la misma lealtad. Octavio le devolvió la diadema y confirmó su reino. Después lo amplió: le devolvió Jericó, le dio Samaria, las ciudades de la costa y algunas de la Decápolis; años más tarde, las tierras al noreste del mar de Galilea.',
        { h: 'Amigo de César' },
        'Octavio recibió en el 27 a.C. el título de Augusto, que en griego se traduce Sebastós. Herodes se dedicó a honrarlo. Reconstruyó Samaria con el nombre de Sebaste, llamó Cesarea a la nueva ciudad del puerto, levantó templos dedicados a Roma y a Augusto en Sebaste, Cesarea y Paneas, en zonas de población pagana, e instituyó juegos en su honor. Se daba el título de amigo de César y amigo de los romanos.',
        'Es el Augusto de Lucas 2:1, el que promulgó el edicto «que todo el mundo fuese empadronado». El hombre más poderoso del mundo y su rey cliente en Judea parecían controlar la historia. Pero el edicto de Augusto llevó a José y a María a Belén, donde había de nacer el Mesías según la profecía (Mi 5:2). El corazón del rey está en la mano de Dios (Pr 21:1).',
        ir('Ver en El imperio romano: Jesús nace bajo Augusto', R.romano + '#biblia/2')
      ],
      pensar: 'Herodes cambió de lealtad según quién ganaba. Dios, en cambio, usó a Augusto para cumplir su promesa en Belén. ¿Qué situación de tu vida que parece decidida por «los poderosos» puedes poner hoy en las manos de Dios?'
    },
    {
      id: 'constructor', n: 'El gran constructor', ref: 'Juan 2:20; Marcos 13:1-2; Hechos 23:35; Salmo 127:1', fecha: [-27, -4],
      visual: [
        img('../entre-los-testamentos/img/herodes-obras.webp', 'En lo alto de una colina artificial en forma de cono, en el desierto de Judea, el rey Herodes revisa planos sobre una mesa con su arquitecto mientras cientos de obreros levantan los muros circulares de la fortaleza del Herodión', 'Herodes supervisa la construcción del Herodión. Recreación.'),
        mapa({ view: V.palestina, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'cesarea', 'samaria', 'masada', 'herodion', 'maqueronte', 'jerico', 'paneas', 'hebron'] }),
        foto('foto-cesarea-acueducto.jpg', 'Restos del acueducto alto de Cesarea: un largo muro de piedra con su canal en lo alto, que se extiende entre arbustos junto a casas modernas', 'El acueducto alto de Cesarea, que llevaba agua desde las fuentes del monte Carmelo a la ciudad que Herodes construyó junto al mar.', 'CC BY-SA 2.0 · Carole Raddato, vía Wikimedia Commons'),
        foto('foto-herodion.jpg', 'Vista aérea del Herodión: una colina en forma de cono truncado en el desierto, con los muros circulares de la fortaleza y sus torres en la cima', 'El Herodión, palacio y fortaleza de Herodes al sur de Belén, donde fue sepultado.', 'Dominio público · Asaf T., vía Wikimedia Commons'),
        tabla({
          titulo: 'Las grandes obras de Herodes',
          cab: ['Obra', 'Dónde', 'En la Biblia'],
          filas: [
            ['El templo y su explanada', 'Jerusalén, desde el 20 o 19 a.C.', 'Jn 2:20; Mr 13:1'],
            ['La fortaleza Antonia', 'Jerusalén, junto al templo', 'Hch 21:34 («la fortaleza»)'],
            ['El palacio con tres torres', 'Jerusalén, en el oeste', 'Probablemente el pretorio de Pilato'],
            ['Cesarea y su puerto', 'En la costa, 22–10 a.C.', 'Hch 10; 12:19; 23:35'],
            ['Sebaste', 'Samaria, 27 a.C.', 'Hch 8:5 (la ciudad de Samaria)'],
            ['Palacios de invierno', 'Jericó', 'Lc 19:1-10 (la Jericó de Zaqueo)'],
            ['Masada, Herodión, Maqueronte', 'Fortalezas del desierto', 'Maqueronte, prisión de Juan según Josefo']
          ]
        }, 'Obras')
      ],
      texto: [
        'Herodes fue uno de los mayores constructores de la antigüedad. Su reino se llenó de obras que todavía impresionan a los arqueólogos, y muchas son el escenario del Nuevo Testamento.',
        { h: 'Cesarea, una ciudad nueva junto al mar' },
        'En la costa, donde no había puerto natural, Herodes construyó Cesarea entre el 22 y el 10 a.C. Sus ingenieros hundieron en el mar enormes bloques de un concreto que fraguaba bajo el agua y crearon un puerto artificial, Sebastós, de los más grandes del Mediterráneo. La ciudad tenía templo a Augusto, teatro, hipódromo, acueducto y un palacio sobre el mar. Allí Pedro llevó el evangelio a Cornelio (Hch 10), allí murió Agripa I (Hch 12:23) y allí Pablo estuvo preso dos años, custodiado «en el pretorio de Herodes» (Hch 23:35), el mismo palacio.',
        { h: 'Fortalezas y palacios en el desierto' },
        'Herodes vivía con miedo a una rebelión o a una invasión, y llenó el desierto de refugios: Masada, sobre una meseta junto al mar Muerto, con un palacio colgado del acantilado; Maqueronte, al otro lado del mar Muerto; y el Herodión, una colina que levantó con tierra en forma de cono, cerca de Belén, para que fuera su palacio y su tumba. En Jericó tenía palacios de invierno con jardines y piscinas.',
        { h: 'El templo' },
        'Su obra mayor fue la reconstrucción del templo de Jerusalén, que comenzó hacia el 20 o 19 a.C. Duplicó la explanada con muros de piedras gigantescas, y para no ofender a los judíos hizo que mil sacerdotes aprendieran albañilería y construyeran el santuario. Las obras siguieron después de su muerte: en tiempos de Jesús llevaban cuarenta y seis años (Jn 2:20), y terminaron hacia el 64 d.C., solo seis años antes de su destrucción.',
        ir('Recorrer en 3D El templo de Herodes', R.templo),
        { h: 'Piedras que no quedaron' },
        'Herodes pagó todo esto con impuestos muy pesados. Pero también supo ayudar: en una gran hambruna, hacia el 25 a.C., fundió el oro y la plata de su palacio para comprar trigo en Egipto. Sus discípulos admiraban esas piedras, pero Jesús les dijo: «No quedará piedra sobre piedra, que no sea derribada» (Mr 13:2).'
      ],
      pensar: '«Si Jehová no edificare la casa, En vano trabajan los que la edifican» (Sal 127:1). Herodes construyó para su fama y la de César. ¿Para la gloria de quién estás edificando tu vida, tu trabajo y tu familia?'
    },
    {
      id: 'familia', n: 'Una familia en guerra', ref: 'Santiago 3:16; Proverbios 14:30; Mateo 16:26', fecha: [-29, -4],
      visual: [
        img('hd-mariamne.webp', 'En una sala del palacio de Herodes en Jerusalén, iluminada por lámparas, la reina Mariamne, joven princesa asmonea de porte digno, de pie y erguida entre dos guardias, mira de frente al rey Herodes, sentado en su trono con expresión dura y atormentada; al fondo, cortesanos observan desde las sombras', 'Mariamne ante Herodes, poco antes de ser condenada a muerte en el 29 a.C. Recreación.'),
        tabla({
          titulo: 'Las muertes en la casa de Herodes',
          cab: ['Año', 'Quién', 'Por qué, según Josefo'],
          filas: [
            ['29 a.C.', 'Mariamne, su esposa', 'Acusada de infidelidad e intento de envenenamiento por Salomé, hermana de Herodes'],
            ['28 a.C.', 'Alejandra, su suegra', 'Acusada de conspirar para tomar el poder durante una enfermedad del rey'],
            ['25 a.C.', 'Costobaro, esposo de Salomé', 'Acusado por su propia esposa de proteger a enemigos del rey'],
            ['7 a.C.', 'Alejandro y Aristóbulo, sus hijos', 'Acusados por su medio hermano Antípatro y por Salomé de querer matar a su padre'],
            ['4 a.C.', 'Antípatro, su hijo mayor', 'Descubierto conspirando para envenenar a Herodes; ejecutado cinco días antes de la muerte del rey']
          ]
        }),
        cita('Santiago 3:16', '@@stg/3/16')
      ],
      texto: [
        'Josefo dedica páginas enteras a las intrigas del palacio de Herodes. Es una historia de celos, sospechas y crímenes dentro de una misma familia, que muestra adónde lleva el miedo a perder el poder.',
        { h: 'Mariamne' },
        'Herodes amaba a Mariamne, la princesa asmonea con la que se casó durante el sitio de Jerusalén, y ella lo despreciaba: no le perdonaba la muerte de su hermano Aristóbulo ni la de su abuelo Hircano. Salomé, la hermana de Herodes, y su madre odiaban a Mariamne porque los miraba en menos por su origen. Las acusaciones de Salomé convencieron a Herodes de que su esposa le era infiel y quería envenenarlo. En el 29 a.C., Mariamne fue juzgada y ejecutada. Josefo dice que caminó a la muerte con dignidad, y que Herodes enloqueció de dolor: la llamaba por los pasillos como si estuviera viva y ordenaba a los sirvientes que la buscaran.',
        { h: 'Padre contra hijos' },
        'Los dos hijos de Mariamne, Alejandro y Aristóbulo, fueron educados en Roma, cerca de la corte de Augusto. Al volver, el pueblo los quería por su sangre asmonea. Herodes trajo entonces a palacio a Antípatro, el hijo de su primera esposa, Doris, que con ayuda de Salomé alimentó durante años las sospechas del padre. Augusto mismo trató de reconciliarlos, pero en el 7 a.C. Herodes hizo estrangular a los dos jóvenes en Sebaste, la ciudad donde se había casado con su madre.',
        'Antípatro no disfrutó su victoria: en el 4 a.C. se descubrió que planeaba envenenar a su padre. Herodes, ya moribundo, lo hizo ejecutar cinco días antes de morir él mismo.',
        { h: '«Mejor ser cerdo de Herodes»' },
        'Un escritor romano, Macrobio, cuenta que Augusto, al saber de estas muertes, comentó que era mejor ser cerdo de Herodes que hijo de Herodes. En griego el chiste juega con dos palabras parecidas, cerdo e hijo; y tiene sentido porque Herodes, que guardaba la ley en público, no comía cerdo.',
        'Santiago describe esta clase de vida: «donde hay celos y contención, allí hay perturbación y toda obra perversa» (Stg 3:16). Herodes tuvo poder, riquezas y fama, y perdió a su esposa, a sus hijos y la paz de su alma (Mt 16:26).',
        arbol('Ver a Mariamne y a sus hijos en el árbol', 'mariamne')
      ],
      pensar: 'La envidia y la sospecha destruyeron la familia de Herodes. «la envidia es carcoma de los huesos» (Pr 14:30). ¿Hay algún celo o sospecha en tu familia que necesites llevar a Dios en oración antes de que crezca?'
    },
    {
      id: 'magos', n: 'Los magos y los niños de Belén', ref: 'Mateo 2:1-18; Miqueas 5:2; Jeremías 31:15; Éxodo 1:22', fecha: [-6, -4],
      visual: [
        img('hd-magos-herodes.webp', 'En una sala del palacio de Herodes en Jerusalén, a la luz de lámparas de aceite, el anciano rey Herodes, enfermo y desconfiado, recibe en secreto a tres sabios del oriente con ropas persas de viaje; un escriba sostiene un rollo abierto y un consejero se inclina para hablar al oído del rey', 'Herodes recibe en secreto a los magos y les pregunta por el tiempo de la aparición de la estrella (Mateo 2:7). Recreación.'),
        img('../imperio-persa/img/persia-magos-oriente.webp', 'Magos del oriente en camino, con camellos y ropas persas', 'Los magos del oriente. Recreación.'),
        mapa({ view: V.judea, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'belen', 'herodion', 'rama'], trazos: ['huida-egipto'] }),
        cita('Mateo 2:16-18', '@@mt/2/16-18')
      ],
      texto: [
        'Mateo cuenta que, cuando Jesús nació en Belén «en días del rey Herodes», llegaron a Jerusalén unos magos del oriente preguntando: «¿Dónde está el rey de los judíos, que ha nacido?» (Mt 2:1-2). Herodes tenía entonces unos setenta años, estaba enfermo y acababa de ejecutar a dos de sus hijos por sospechar de ellos.',
        { h: '«Se turbó, y toda Jerusalén con él»' },
        'La reacción de Herodes es la que se esperaría del hombre que conocemos por Josefo: «el rey Herodes se turbó, y toda Jerusalén con él» (Mt 2:3). La ciudad sabía lo que podía pasar cuando el rey se sentía amenazado. Herodes consultó a los principales sacerdotes y a los escribas, que conocían la profecía de Miqueas: el Mesías nacería en Belén (Mi 5:2). Entonces llamó a los magos en secreto, averiguó el tiempo de la estrella y les pidió que le avisaran, fingiendo que también quería adorar al niño.',
        { h: 'Los niños de Belén' },
        'Avisados en sueños, los magos volvieron por otro camino, y José huyó con el niño y su madre a Egipto. Cuando Herodes se vio burlado, mandó matar «a todos los niños menores de dos años que había en Belén y en todos sus alrededores» (Mt 2:16). Belén era una aldea pequeña: los estudiosos calculan que los niños de esa edad no pasarían de unos veinte. Para Mateo, el llanto de esas madres cumplía las palabras de Jeremías sobre Raquel que llora a sus hijos (Jer 31:15).',
        'La escena recuerda a otro rey que mandó matar a los niños de Israel: el faraón de Egipto (Éx 1:22). Moisés se salvó de él y llegó a ser el libertador de su pueblo; Jesús se salvó de Herodes para ser el Salvador del mundo.',
        { posturas: {
          titulo: '¿Por qué Josefo no menciona la matanza de Belén?',
          a: { n: 'Un hecho histórico pequeño', t: 'Para Josefo, que contó las muertes de esposas, hijos y nobles, la muerte de unos pocos niños en una aldea no era noticia. El hecho coincide con todo lo que sabemos del carácter de Herodes en sus últimos años.' },
          b: { n: 'Un relato con sentido simbólico', t: 'Algunos estudiosos piensan que Mateo construyó el episodio a partir del relato del faraón y de Moisés, para presentar a Jesús como el nuevo Moisés, y que no ocurrió como hecho.' },
          c: 'Mateo presenta el episodio como historia, con lugares y personas reales, y el silencio de una sola fuente no lo desmiente. El paralelo con Moisés es intencional, pero muestra cómo Dios repite sus caminos en la historia; no convierte el relato en una invención.'
        } },
        ir('Ver los pasajes del nacimiento en la Armonía de los evangelios', R.armonia)
      ],
      pensar: 'Herodes quiso eliminar al Rey verdadero y no pudo. «El que mora en los cielos se reirá» (Sal 2:4). ¿Qué te dice esta historia cuando ves que los poderosos se oponen a Cristo en tu tiempo?'
    },
    {
      id: 'muerte', n: 'La muerte y el testamento de Herodes', ref: 'Mateo 2:19-20; Lucas 12:20; Salmo 49:16-17', fecha: -4,
      visual: [
        img('hd-funeral-herodes.webp', 'Un gran cortejo fúnebre real avanza por un camino del desierto de Judea hacia la colina cónica del Herodión: soldados con armadura, la guardia de tracios, germanos y gálatas, servidores con perfumes, y en el centro un féretro de oro adornado con piedras preciosas y cubierto con un manto de púrpura, sobre el que reposa una corona; el cuerpo no se ve', 'El funeral de Herodes, según la descripción de Josefo: un féretro de oro cubierto de púrpura, llevado hacia el Herodión. Recreación.'),
        foto('foto-sarcofago-herodes.jpg', 'Sarcófago de piedra caliza rojiza con decoración de rosetas, reconstruido a partir de fragmentos, en una sala de museo', 'El sarcófago hallado en 2007 en la ladera del Herodión, que Ehud Netzer atribuyó a Herodes. Museo de Israel, Jerusalén.', 'CC BY-SA 4.0 · Oren Rozen, vía Wikimedia Commons'),
        cita('Mateo 2:19-20', '@@mt/2/19-20')
      ],
      texto: [
        'En sus últimos meses, Herodes estaba gravemente enfermo. Josefo describe fiebre, comezón insoportable, dolores intestinales, hinchazón y llagas con gusanos. Buscó alivio en las aguas termales de Calirroe, junto al mar Muerto, sin resultado, y volvió a su palacio de Jericó.',
        { h: 'Crueldad hasta el final' },
        'Ni siquiera enfermo dejó de matar. Unos jóvenes, animados por dos maestros de la ley, bajaron con hachas el águila de oro que Herodes había puesto sobre la puerta del templo, porque la ley prohíbe las imágenes. Herodes los hizo quemar vivos. Después ordenó encerrar en el hipódromo de Jericó a los hombres principales de todo el reino, y mandó que, cuando él muriera, los mataran: así habría llanto en el país el día de su muerte. Su hermana Salomé los dejó libres. Cinco días antes de morir, ejecutó a su hijo Antípatro.',
        'Herodes murió en Jericó a los setenta años, en la primavera, poco antes de la Pascua. Mateo lo dice con sencillez: «después de muerto Herodes», un ángel avisó a José que volviera, «porque han muerto los que procuraban la muerte del niño» (Mt 2:19-20).',
        { h: 'Un funeral y una tumba' },
        'Josefo describe un funeral magnífico: un féretro de oro con piedras preciosas, el cuerpo cubierto de púrpura con corona y cetro, la guardia y el ejército, y quinientos servidores con perfumes, camino al Herodión. En 2007, el arqueólogo Ehud Netzer, que lo buscó durante treinta y cinco años, anunció el hallazgo de la tumba en la ladera del Herodión, con un sarcófago de piedra rojiza hecho pedazos. Algunos arqueólogos discuten la identificación. Netzer murió en 2010 al caer en el mismo lugar que excavaba.',
        { posturas: {
          titulo: '¿Cuándo murió Herodes?',
          a: { n: 'En el 4 a.C.', t: 'La fecha más aceptada, según los años de reinado que da Josefo, un eclipse de luna que menciona poco antes de su muerte y las fechas de sus hijos. Jesús habría nacido hacia el 6 o el 5 a.C.' },
          b: { n: 'En el 1 a.C.', t: 'Algunos estudiosos proponen otro eclipse y otra cuenta de los años; ubican el nacimiento de Jesús hacia el 3 o 2 a.C.' },
          c: 'En los dos casos Jesús nació «en días del rey Herodes», como dice el evangelio (Mt 2:1). El desfase con el año 1 viene de un cálculo del monje Dionisio el Exiguo, en el siglo VI.'
        } },
        ir('Ver la Cronología del Nuevo Testamento: los magos y la muerte de Herodes', '../../cronologia-nuevo-testamento/#nacimiento/3')
      ],
      pensar: 'Herodes murió rodeado de oro y nadie lo lloró. Jesús dijo del rico necio: «esta noche vienen a pedirte tu alma; y lo que has provisto, ¿de quién será?» (Lc 12:20). ¿Qué estás preparando que sí vaya a permanecer?'
    },
    {
      id: 'reparto', n: 'El reino dividido entre tres hijos', ref: 'Mateo 2:22; Lucas 19:12-15, 27; Lucas 3:1', fecha: [-4, 6],
      visual: [
        pasos([
          { t: '4 a.C.: el reino de Herodes a su muerte', fecha: -4, estado: { view: V.palestina, capas: ['hd-herodes-20'], lugares: ['jerusalen', 'cesarea', 'jerico', 'paneas'] } },
          { t: 'Arquelao, etnarca de Judea, Samaria e Idumea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao'], lugares: ['jerusalen', 'samaria', 'cesarea', 'hebron'] } },
          { t: 'Antipas, tetrarca de Galilea y Perea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao', 'hd-antipas'], lugares: ['jerusalen', 'seforis', 'nazaret', 'maqueronte'] } },
          { t: 'Felipe, tetrarca de Batanea, Traconite, Auranítide e Iturea', fecha: -4, estado: { view: V.palestina, capas: ['hd-arquelao', 'hd-antipas', 'hd-felipe'], lugares: ['jerusalen', 'seforis', 'paneas', 'betsaida'] } }
        ]),
        tabla({
          titulo: 'El testamento de Herodes y la decisión de Augusto',
          cab: ['Heredero', 'Recibió', 'Título'],
          filas: [
            ['Arquelao', 'Judea, Samaria e Idumea, con Jerusalén y Cesarea', 'Etnarca (Herodes pedía rey)'],
            ['Antipas', 'Galilea y Perea', 'Tetrarca'],
            ['Felipe', 'Batanea, Traconite, Auranítide, Gaulanítide e Iturea', 'Tetrarca'],
            ['Salomé, hermana de Herodes', 'Las ciudades de Jamnia, Azoto y Fasaelis', 'Señora de esas ciudades']
          ]
        }),
        cita('Lucas 19:12-15', '@@lc/19/12-15')
      ],
      texto: [
        'Herodes cambió su testamento varias veces. En el último dejó su reino a tres hijos: Arquelao como rey de Judea, Antipas como tetrarca de Galilea y Perea, y Felipe como tetrarca del noreste. Pero el testamento de un rey cliente no valía hasta que lo confirmara el emperador, y todos viajaron a Roma.',
        { h: 'Un viaje a Roma para recibir un reino' },
        'Antes de partir, Arquelao enfrentó una revuelta en el templo durante la Pascua y la reprimió con el ejército: murieron unos tres mil judíos. En Roma, Antipas reclamó el trono con un testamento anterior que lo nombraba a él. Y llegó una embajada de cincuenta judíos, apoyada por miles de judíos de Roma, para pedir a Augusto que no les diera ningún Herodes como rey y uniera Judea a la provincia de Siria. Mientras tanto, en Judea estallaron rebeliones en varias partes, y Varo, el gobernador de Siria, las aplastó: según Josefo, crucificó a dos mil hombres alrededor de Jerusalén.',
        'Augusto respetó en lo esencial el testamento, pero no dio a nadie el título de rey: Arquelao sería etnarca, y rey solo si lo merecía.',
        { h: 'Una parábola con trasfondo conocido' },
        'Treinta años después, subiendo de Jericó, la ciudad del palacio de Arquelao, Jesús contó la parábola de «un hombre noble» que «se fue a un país lejano, para recibir un reino y volver», mientras sus conciudadanos enviaban tras él una embajada diciendo: «No queremos que éste reine sobre nosotros» (Lc 19:12-14). Sus oyentes reconocían la historia. Pero Jesús la usó para hablar de sí mismo: él también se iría para recibir el reino y volvería, y ese día pediría cuentas a sus siervos y juzgaría a los que rechazaron su reinado (Lc 19:15, 27).',
        { h: 'José evita Judea' },
        'Al volver de Egipto, José supo «que Arquelao reinaba en Judea en lugar de Herodes su padre, tuvo temor de ir allá» y se fue a Galilea, a Nazaret (Mt 2:22-23). Así el reparto del reino de Herodes ayudó a que Jesús creciera en Galilea, como Dios lo había dispuesto.',
        ir('Ver en el mapa de El mundo judío quién gobernaba en tiempos de Jesús', R.mundo + '#panorama/2')
      ],
      pensar: 'Jesús tomó una historia conocida para enseñar que él volverá como Rey y pedirá cuentas. Si hoy volviera, ¿qué encontraría en lo que te ha confiado?'
    }
  ];

  window.__HD.grande = grande;
})();
