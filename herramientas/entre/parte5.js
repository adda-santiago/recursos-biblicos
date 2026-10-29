/* Entre los Testamentos · ruta VI. Roma y Herodes (ver encabezado en parte1.js) */
(() => {
  const { V, mapa, pasos, img, esq, foto, cita, tabla, ir, R } = window.__ET;

  const roma = [
    {
      id: 'pompeyo', n: 'Pompeyo entra en el Lugar Santísimo', ref: 'Levítico 16:2; Hebreos 9:7; Hebreos 10:19-20; Daniel 2:40', fecha: -63,
      visual: [
        img('pompeyo-templo.webp', 'En el interior del santuario del templo de Jerusalén, a la luz de un candelero de oro de siete brazos, el general romano Pompeyo, con coraza y capa púrpura, avanza hacia el velo del Lugar Santísimo seguido por oficiales romanos, mientras dos sacerdotes judíos con vestiduras de lino blanco lo miran horrorizados', 'Pompeyo entra en el santuario del templo (63 a.C.). Recreación.'),
        mapa({ view: V.levante, capas: ['roma-133'], lugares: ['damasco', 'jerusalen', 'antioquia'], trazos: ['et-pompeyo'] }),
        tabla({
          titulo: 'Lo que cambió con Pompeyo',
          cab: ['Antes (asmoneos)', 'Después (63 a.C.)'],
          filas: [
            ['Judea independiente', 'Judea paga tributo a Roma'],
            ['Un rey y sumo sacerdote', 'Hircano II, solo sumo sacerdote y jefe del pueblo, sin título de rey'],
            ['Un reino de la costa al otro lado del Jordán', 'Pierde la costa, Samaria y las ciudades griegas de la Decápolis'],
            ['Política propia', 'Bajo el gobernador romano de Siria']
          ]
        })
      ],
      texto: [
        'En el otoño del 63 a.C., Pompeyo, el general más poderoso de Roma, llegó a Jerusalén. Aristóbulo II se había rendido, pero sus partidarios se encerraron en el monte del templo, mientras los de Hircano abrían a los romanos las puertas de la ciudad. El sitio del templo duró tres meses.',
        { h: 'Un sitio en día de reposo' },
        'Josefo cuenta que los romanos aprovecharon el día de reposo para levantar sus terraplenes y acercar las máquinas de asedio, porque los judíos solo se defendían en sábado si eran atacados directamente. Cuando la muralla cedió, los soldados entraron en los atrios. Los sacerdotes siguieron ofreciendo los sacrificios mientras eran degollados junto al altar, sin abandonar el servicio. Murieron unos doce mil judíos.',
        { h: 'En el Lugar Santísimo' },
        'Entonces ocurrió lo que los judíos nunca olvidarían. Pompeyo, con algunos de sus oficiales, entró en el santuario y llegó hasta el Lugar Santísimo, donde solo el sumo sacerdote podía entrar una vez al año, el Día de la Expiación, «no sin sangre» (He 9:7). Vio el candelero, la mesa, los vasos de oro y los tesoros, pero según Josefo no tocó nada, y al día siguiente ordenó purificar el templo y reanudar los sacrificios. Los romanos se sorprendieron de que en el lugar más santo de los judíos no hubiera ninguna imagen de su Dios.',
        'Los Salmos de Salomón, escritos poco después por judíos piadosos, lloran esa profanación y la ven como castigo por los pecados de los gobernantes de Jerusalén.',
        ir('Ver en Los libros apócrifos: los Salmos de Salomón', R.apocrifos + '#pseudo/4'),
        { h: 'Roma, el cuarto reino' },
        'Desde ese día, Judea no volvió a ser libre hasta el siglo XX. Pompeyo restituyó a Hircano II como sumo sacerdote, pero sin título de rey; separó de Judea la costa, Samaria y las ciudades griegas; y llevó a Aristóbulo y a sus hijos a Roma, para exhibirlos en su desfile triunfal. Muchos cautivos judíos quedaron en Roma y, al ser liberados, formaron allí la comunidad judía que conocemos en Hechos y en la carta a los Romanos.',
        'Daniel había anunciado un cuarto reino «fuerte como hierro» que desmenuzaría y quebrantaría todo (Dn 2:40). En el 63 a.C., ese reino llegó a Jerusalén. Cuarenta años más tarde, sería bajo su dominio que nacería el Rey cuyo reino no tendrá fin (Dn 2:44; Lc 1:33).'
      ],
      pensar: 'Pompeyo entró en el Lugar Santísimo por la fuerza y salió sin encontrar a Dios. Jesús abrió para nosotros «el camino nuevo y vivo» por su sangre (He 10:19-20). ¿Te acercas a Dios con la confianza que Cristo te dio?'
    },
    {
      id: 'antipatro', n: 'Antípatro el idumeo', ref: 'Génesis 25:23; Abdías 1:10; Malaquías 1:2-3; Marcos 3:6', fecha: [-63, -43],
      visual: [
        mapa({ view: V.palestina, capas: ['nt-idumea', 'nt-judea', 'nt-galilea'], lugares: ['jerusalen', 'maresa', 'petra', 'seforis'] }),
        tabla({
          titulo: 'La familia de Antípatro',
          cab: ['Persona', 'Relación', 'Qué hizo'],
          filas: [
            ['Antípatro', 'Idumeo, consejero de Hircano II', 'Gobierna Judea en la práctica; envenenado en el 43 a.C.'],
            ['Cipros', 'Su esposa, de familia noble nabatea', 'Madre de sus hijos'],
            ['Fasael', 'Hijo mayor', 'Gobernador de Jerusalén; muere prisionero de los partos (40 a.C.)'],
            ['Herodes', 'Segundo hijo', 'Gobernador de Galilea a los veinticinco años; rey de Judea desde el 40 a.C.'],
            ['Feroras', 'Hijo menor', 'Tetrarca de Perea bajo su hermano'],
            ['Salomé', 'Hija', 'Intrigó contra Mariamne y sus hijos']
          ]
        }),
        cita('Abdías 1:10', '@@abd/1/10')
      ],
      texto: [
        'Mientras Hircano II tenía el título de sumo sacerdote, el poder real estaba en manos de su consejero, Antípatro. Era un idumeo, es decir, descendiente de los edomitas que Juan Hircano había obligado a hacerse judíos medio siglo antes (V.6). Para muchos judíos piadosos, nunca dejó de ser un extranjero.',
        { h: 'Un hombre al lado de Roma' },
        'Antípatro entendió antes que nadie que el futuro de Judea se decidía en Roma, y apostó siempre por el romano más fuerte. Cuando Julio César quedó atrapado en Alejandría, en el 47 a.C., Antípatro llegó en su ayuda con tres mil soldados judíos y convenció a los judíos de Egipto de apoyarlo. César lo recompensó con la ciudadanía romana y lo nombró procurador de Judea, a la vez que confirmaba a Hircano como sumo sacerdote y jefe de los judíos. También concedió privilegios a los judíos de todo el imperio: libertad para reunirse, guardar el sábado y enviar dinero al templo.',
        { h: 'Herodes ante el Sanedrín' },
        'Antípatro puso a sus hijos en el gobierno: Fasael en Jerusalén y Herodes, de unos veinticinco años, en Galilea. Herodes persiguió con éxito a una banda de salteadores y ejecutó a su jefe, Ezequías, sin juicio. Los líderes de Jerusalén protestaron, porque solo el consejo podía condenar a muerte, y Herodes fue citado ante el Sanedrín. Es la primera vez que Josefo usa esa palabra para el tribunal de los judíos (ruta VII). Herodes llegó vestido de púrpura y con guardia armada, y los jueces callaron. Solo uno, Samaías, se atrevió a advertir que ese joven algún día los castigaría a todos. Hircano suspendió el juicio y Herodes se fue.',
        'En el 43 a.C., Antípatro murió envenenado. Pero su familia ya estaba instalada en el poder.',
        { h: 'Esaú y Jacob' },
        'Siglos antes, Dios había dicho a Rebeca que dos naciones estaban en su vientre, y que «el mayor servirá al menor» (Gn 25:23). Edom fue durante siglos enemigo de Israel, y Abdías lo reprendió por la violencia contra su hermano Jacob (Abd 1:10). Ahora, por una vuelta de la historia, un descendiente de Esaú iba a sentarse en el trono de Jerusalén. Y ese rey, Herodes, intentaría matar al Hijo de David recién nacido (Mt 2:16).'
      ],
      pensar: 'Antípatro siempre se puso del lado del más fuerte. ¿De qué lado te pones tú cuando seguir a Cristo no es lo más conveniente?'
    },
    {
      id: 'herodes', n: 'Herodes, rey de los judíos', ref: 'Mateo 2:1-18; Lucas 1:5; Juan 18:36', fecha: [-40, -4],
      visual: [
        img('herodes-obras.webp', 'En lo alto de una colina artificial en forma de cono, en el desierto de Judea, el rey Herodes, de unos sesenta años, con manto púrpura y diadema, revisa planos sobre una mesa con su arquitecto mientras cientos de obreros levantan los muros circulares de la fortaleza del Herodión', 'Herodes supervisa la construcción del Herodión. Recreación.'),
        mapa({ view: V.palestina, capas: ['h-herodes'], lugares: ['jerusalen', 'cesarea', 'samaria', 'masada', 'herodion', 'maqueronte', 'jerico'] }),
        tabla({
          titulo: 'Herodes en pocas palabras',
          cab: ['', ''],
          filas: [
            ['Nombrado rey', 'Por el Senado romano, en el 40 a.C.'],
            ['Reinó', 'Del 37 a.C., cuando tomó Jerusalén, hasta su muerte en el 4 a.C.'],
            ['Esposas', 'Diez; entre ellas Mariamne, nieta de Hircano II y de Aristóbulo II'],
            ['Construcciones', 'El templo, la fortaleza Antonia, Cesarea y su puerto, Sebaste, Masada, el Herodión, Maqueronte, palacios en Jericó'],
            ['Víctimas en su familia', 'Su cuñado Aristóbulo III, Hircano II, su esposa Mariamne, la madre de ella y tres de sus propios hijos'],
            ['En el Nuevo Testamento', 'Rey cuando nacen Juan el Bautista y Jesús (Lc 1:5; Mt 2:1)']
          ]
        })
      ],
      texto: [
        'En el 40 a.C., los partos, enemigos de Roma, invadieron Siria y Judea, y pusieron como rey y sumo sacerdote a Antígono, el último hijo de Aristóbulo II. Hircano fue mutilado de las orejas para que no pudiera volver a ser sumo sacerdote, y Fasael murió prisionero. Herodes escapó con su familia a Masada, la dejó allí y viajó a Roma. Allí, con el apoyo de Marco Antonio y Octavio, el Senado lo declaró rey de Judea. Volvió con un ejército romano y, en el 37 a.C., después de un sitio de cinco meses, tomó Jerusalén. Antígono fue decapitado. Terminaba la dinastía asmonea.',
        { h: 'Un rey constructor' },
        'Herodes reinó treinta y tres años. Fue un administrador hábil y un gran constructor: levantó Cesarea Marítima con su puerto artificial, reconstruyó Samaria con el nombre de Sebaste, construyó fortalezas y palacios en Masada, Maqueronte, Jericó y el Herodión, donde fue sepultado, y reconstruyó el templo de Jerusalén (VI.4).',
        { h: 'Un rey temeroso' },
        'Pero Herodes vivía con miedo a perder el trono. Para ganar legitimidad se casó con Mariamne, una princesa asmonea, y luego hizo morir a todos los que podían hacerle sombra: ahogó en una piscina de Jericó a su cuñado Aristóbulo III, de diecisiete años, a quien él mismo había nombrado sumo sacerdote; ejecutó al anciano Hircano II, a Mariamne, a la madre de ella y a tres de sus propios hijos, el último cinco días antes de morir. Un escritor romano cuenta que Augusto bromeaba diciendo que era mejor ser cerdo de Herodes que hijo de Herodes.',
        'Con ese carácter, no sorprende lo que cuenta Mateo. Cuando los magos preguntaron por el rey de los judíos que había nacido, «el rey Herodes se turbó, y toda Jerusalén con él» (Mt 2:3); y cuando se vio burlado, mandó matar a todos los niños menores de dos años de Belén (Mt 2:16). Herodes murió poco después, en Jericó, y su reino se repartió entre sus hijos Arquelao, Antipas y Felipe.',
        'La historia de sus descendientes se estudiará en La dinastía de Herodes (en preparación).',
        { posturas: {
          titulo: '¿Cuándo murió Herodes?',
          a: { n: 'En el 4 a.C.', t: 'La fecha más aceptada, según Josefo y los reinados de sus hijos. Jesús habría nacido hacia el 6–5 a.C.' },
          b: { n: 'En el 1 a.C.', t: 'Algunos estudiosos proponen otra cuenta y ubican el nacimiento de Jesús hacia el 3–2 a.C.' },
          c: 'En ambos casos Jesús nació en días de Herodes, como dice el evangelio. El desfase con el año 1 se debe a un cálculo del monje Dionisio el Exiguo, en el siglo VI.'
        } }
      ],
      pensar: 'Herodes tenía todo el poder y vivía con miedo a perderlo, hasta querer matar a un niño. Jesús dijo: «Mi reino no es de este mundo» (Jn 18:36). ¿Qué temores te quita saber que tu vida está en el reino de Cristo?'
    },
    {
      id: 'templo', n: 'El templo reconstruido por Herodes', ref: 'Hageo 2:7-9; Juan 2:19-21; Marcos 13:1-2; Malaquías 3:1', fecha: [-20, 64],
      visual: [
        img('../imperio-romano/img/roma-templo-herodes.webp', 'El templo de Jerusalén ampliado por Herodes, con sus grandes atrios y pórticos, visto desde el monte de los Olivos', 'El templo de Herodes desde el monte de los Olivos. Recreación.'),
        cita('Juan 2:19-21', '@@jn/2/19-21'),
        tabla({
          titulo: 'La obra de Herodes en el templo',
          cab: ['', ''],
          filas: [
            ['Comienzo', 'Año 18 de su reinado, 20–19 a.C.'],
            ['El santuario', 'Construido en un año y medio por mil sacerdotes formados como albañiles'],
            ['Los atrios y pórticos', 'Ocho años; la obra siguió hasta el 63–64 d.C.'],
            ['La explanada', 'Duplicada con enormes muros de contención; su muro occidental se conserva'],
            ['Destrucción', 'Por los romanos de Tito, en el 70 d.C.']
          ]
        })
      ],
      texto: [
        'El templo que habían reconstruido Zorobabel y Josué después del exilio tenía casi quinientos años y se veía pobre al lado de los edificios griegos y romanos. En el 20 o 19 a.C., en el año dieciocho de su reinado, Herodes anunció que lo reconstruiría con un esplendor digno de Jerusalén. Quería ganarse al pueblo, que lo despreciaba, y dejar un monumento a su nombre.',
        { h: 'Una obra cuidadosa' },
        'Los judíos temían que, al derribar el templo viejo, Herodes no construyera el nuevo. Por eso preparó todos los materiales antes de empezar. Como solo los sacerdotes podían entrar en el santuario, hizo enseñar el oficio de albañil y carpintero a mil sacerdotes, que construyeron el santuario en un año y medio sin que se interrumpieran los sacrificios. Los atrios y los pórticos tomaron ocho años más, y los trabajos siguieron, con mejoras y reparaciones, hasta pocos años antes de su destrucción.',
        'Herodes duplicó la superficie del monte del templo con muros de contención hechos de piedras enormes, algunas de más de cien toneladas. Uno de esos muros, el muro occidental, se conserva hasta hoy. Los rabinos posteriores dijeron que quien no había visto el edificio de Herodes no había visto nunca un edificio hermoso. Los discípulos de Jesús pensaban lo mismo: «Maestro, mira qué piedras, y qué edificios» (Mr 13:1).',
        { h: 'Cuarenta y seis años' },
        'Cuando Jesús purificó el templo al comienzo de su ministerio, los judíos le dijeron: «En cuarenta y seis años fue edificado este templo, ¿y tú en tres días lo levantarás?» (Jn 2:20). Contando desde el 20–19 a.C., eso nos lleva al año 27 o 28 d.C., una de las claves para fechar el ministerio de Jesús. Juan aclara que él hablaba del templo de su cuerpo (Jn 2:21).',
        { h: 'La gloria mayor' },
        'Hageo había prometido, a los que lloraban por la pobreza del segundo templo, que «la gloria postrera de esta casa será mayor que la primera» (Hag 2:9), y Malaquías, que el Señor vendría súbitamente a su templo (Mal 3:1). La gloria mayor de esa casa no fueron las piedras de Herodes, que Jesús anunció que serían derribadas (Mr 13:2), sino la presencia del Hijo de Dios enseñando en sus atrios.',
        ir('Recorrer el templo de Herodes en 3D', R.templo)
      ],
      pensar: 'Los discípulos admiraban las piedras del templo; Jesús les habló de su cuerpo como el verdadero templo. ¿Qué admiras más en tu vida de fe: lo que se ve o la presencia de Cristo?'
    },
    {
      id: 'augusto', n: 'Augusto y la paz romana', ref: 'Lucas 2:1-14; Gálatas 4:4; Daniel 2:44', fecha: [-31, 14],
      visual: [
        img('../imperio-romano/img/roma-augusto.webp', 'El emperador Augusto con toga y corona de laurel, de pie en un salón de mármol del palacio', 'Augusto, el emperador del nacimiento de Jesús. Recreación.'),
        mapa({ view: V.mediterraneo, capas: ['roma-14'], lugares: ['roma', 'accion', 'alejandria', 'jerusalen', 'cesarea', 'samaria'] }),
        cita('Lucas 2:10-11', '@@lc/2/10-11'),
        tabla({
          titulo: 'Los títulos de Augusto y los de Cristo',
          cab: ['Lo que se decía de Augusto', 'Lo que el ángel anunció de Jesús'],
          filas: [
            ['Hijo del divino (César)', 'Hijo del Altísimo (Lc 1:32)'],
            ['Salvador del mundo', 'Un Salvador, que es Cristo el Señor (Lc 2:11)'],
            ['Su nacimiento, comienzo de buenas noticias para el mundo', 'Nuevas de gran gozo para todo el pueblo (Lc 2:10)'],
            ['Trajo la paz al imperio', 'En la tierra paz, buena voluntad para con los hombres (Lc 2:14)']
          ],
          nota: 'Los títulos de Augusto aparecen en inscripciones de la época, como la de Priene, en Asia Menor (9 a.C.).'
        })
      ],
      texto: [
        'Mientras Herodes reinaba en Judea, Roma vivía su propia transformación. Después del asesinato de Julio César, en el 44 a.C., estallaron guerras civiles que terminaron en el 31 a.C. con la batalla naval de Accio, donde Octavio, sobrino nieto de César, venció a Marco Antonio y Cleopatra. Herodes había apoyado a Antonio, pero se presentó ante el vencedor sin su diadema y le prometió la misma lealtad. Octavio lo confirmó como rey y le amplió el reino.',
        { h: 'El primer emperador' },
        'En el 27 a.C., el Senado dio a Octavio el título de Augusto, «el venerable». Gobernó hasta el 14 d.C. como el primer emperador de Roma, aunque mantuvo la apariencia de la república. Terminó con un siglo de guerras civiles e inauguró la llamada paz romana, que duró unos doscientos años. Los caminos y los mares se volvieron seguros, se construyeron calzadas por todo el imperio y el comercio floreció.',
        'Augusto fue también objeto de culto. Se lo llamaba «hijo del divino» César, y en muchas ciudades se le dedicaron templos. Herodes mismo le construyó templos en Cesarea y en Sebaste. Una inscripción de la ciudad de Priene, del 9 a.C., dice que el nacimiento de Augusto fue para el mundo el comienzo de las buenas noticias, usando en griego la misma palabra que el Nuevo Testamento usa para el evangelio.',
        { h: '«Aconteció en aquellos días…»' },
        'Lucas comienza el relato del nacimiento de Jesús nombrando a ese emperador: «Aconteció en aquellos días, que se promulgó un edicto de parte de Augusto César, que todo el mundo fuese empadronado» (Lc 2:1). El hombre más poderoso de la tierra dio una orden desde Roma, y una pareja de Nazaret tuvo que viajar a Belén, donde los profetas habían dicho que nacería el Mesías (Mi 5:2).',
        'Y en los campos de Belén, el ángel anunció a unos pastores las verdaderas buenas noticias: «os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor» (Lc 2:11). La paz de Augusto se mantenía con legiones; la paz que cantaron los ángeles venía de Dios. Daniel lo había anunciado: en los días de esos reyes, «el Dios del cielo levantará un reino que no será jamás destruido» (Dn 2:44).',
        ir('Ver en El imperio romano: el censo de Cirenio', R.romano)
      ],
      pensar: 'Augusto se hacía llamar salvador e hijo de un dios; el verdadero Salvador nació en un pesebre. ¿A quién reconoces tú como Señor cuando otros poderes reclaman tu lealtad?'
    }
  ];

  window.__ET.roma = roma;
})();
