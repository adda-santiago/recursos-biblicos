  // ================== RUTA VI. El siglo XX ==================
  const siglo20 = [
    {
      id: 'azusa', n: 'Gales, Azusa y el nuevo Pentecostés', ref: 'Hechos 2:1-4; Hechos 2:16-18; Joel 2:28-29', fecha: [1901, 1914],
      visual: [
        foto('azusa.jpg', 'El edificio de madera de dos pisos de la Misión de la Fe Apostólica, en la calle Azusa 312 de Los Ángeles, con el nombre pintado en la fachada y automóviles antiguos estacionados delante', 'La Misión de la Fe Apostólica de la calle Azusa, en una fotografía posterior al avivamiento (por los automóviles, de fines de la década de 1920).', 'Dominio público, vía Wikimedia Commons', 'Foto'),
        pasos([
          { t: 'Topeka: Agnes Ozman habla en lenguas (1 de enero de 1901)', fecha: 1901, estado: { view: V.mundo, lugares: ['h-topeka'] } },
          { t: 'Avivamiento de Gales (1904-1905)', fecha: 1904, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales'] } },
          { t: 'Avivamiento de Mukti, India (1905)', fecha: 1905, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales', 'h-mukti'] } },
          { t: 'Calle Azusa, Los Ángeles (1906); el fuego llega a Europa', fecha: 1906, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales', 'h-mukti', 'h-los-angeles', 'h-oslo'], trazos: ['h-t-azusa-oslo'] } },
          { t: 'Pionyang (1907), Valparaíso (1909) y Brasil (1910-1911)', fecha: 1909, estado: { view: V.mundo, lugares: ['h-topeka', 'h-gales', 'h-mukti', 'h-los-angeles', 'h-oslo', 'h-pyongyang', 'h-valparaiso', 'h-chicago', 'h-belem'], trazos: ['h-t-azusa-oslo', 'h-t-mukti-chile', 'h-t-chicago-belem'] } }
        ], 'El fuego se extiende'),
        esq('esquema-pentecostales.svg', 'Gráfico de barras con el número de pentecostales y carismáticos en el mundo: unos 981 mil en 1900, 57,6 millones en 1970, 442,6 millones en 2000 y 676,1 millones en 2026', 'Pentecostales y carismáticos en el mundo (Status of Global Christianity 2026).', 'Crecimiento')
      ],
      texto: [
        'Al comenzar el siglo XX, muchos creyentes del movimiento de santidad oraban por un nuevo Pentecostés. Las respuestas llegaron en varios lugares a la vez. El 1 de enero de 1901, en una escuela bíblica de Topeka, Kansas, dirigida por Carlos Parham, una alumna llamada Agnes Ozman pidió que le impusieran las manos para recibir el Espíritu Santo y comenzó a hablar en otras lenguas. Parham enseñó desde entonces que hablar en lenguas es la señal inicial del bautismo en el Espíritu. En 1904 y 1905, Gales vivió un avivamiento en el que, según se calculó entonces, unas cien mil personas se convirtieron. En 1905, en la misión de Mukti, en la India, dirigida por Pandita Ramabai, jóvenes viudas y huérfanas vivieron un mover del Espíritu con oración, arrepentimiento y lenguas.',
        { h: 'La calle Azusa' },
        'Guillermo Seymour era un predicador afroamericano, hijo de antiguos esclavos, que había escuchado las clases de Parham en Houston sentado en el pasillo, porque las leyes de segregación no le permitían entrar al aula. En 1906 fue invitado a predicar en Los Ángeles. En abril, en una casa de la calle Bonnie Brae, varios de los que oraban con él recibieron el bautismo en el Espíritu y hablaron en lenguas. Pronto se trasladaron a un viejo edificio de madera en la calle Azusa 312. Durante tres años hubo reuniones casi todos los días, a veces sin un programa, con oración, alabanza, testimonios, sanidades y personas que hablaban en lenguas. Lo más sorprendente para la época era que negros, blancos, latinos y asiáticos oraban juntos; un testigo escribió que la línea del color había sido lavada en la sangre.',
        'Desde Azusa salieron misioneros y un periódico, La fe apostólica, que llevó la noticia a todo el mundo. En pocos años el movimiento llegó a Noruega, Inglaterra, India, China, Corea, Chile, Brasil, Sudáfrica y muchos otros lugares. Los pentecostales y carismáticos, que eran menos de un millón en 1900, son hoy unos 676 millones.',
        { posturas: {
          titulo: '¿Siguen vigentes los dones del Espíritu?',
          a: { n: 'Cesacionismo', t: 'Algunos teólogos evangélicos enseñan que los dones de señales, como las lenguas, la profecía y los milagros, cesaron con los apóstoles, una vez completada la Escritura. Entienden que «lo perfecto» de 1 Corintios 13:10 es el Nuevo Testamento terminado.' },
          b: { n: 'Continuismo', t: 'La promesa del Espíritu es «para vosotros es la promesa … y para todos los que están lejos» (Hch 2:39), los dones están dados para edificar a la iglesia «esperando la manifestación de nuestro Señor Jesucristo» (1 Co 1:7), y «lo perfecto» es la venida de Cristo, cuando veremos «cara a cara» (1 Co 13:10, 12).' },
          c: 'Este recurso sigue la segunda postura: el bautismo en el Espíritu Santo y los dones espirituales son para hoy, para edificación de la iglesia y para el testimonio. Se ejercen con amor (1 Co 13), con orden (1 Co 14:40) y bajo la autoridad de la Escritura, que es completa y no se aumenta.'
        } },
        'Este recurso dedica a Azusa una sola estación porque el movimiento pentecostal tiene su propio recurso, El movimiento pentecostal. La ruta VII cuenta el avivamiento de Valparaíso, que dio origen al pentecostalismo latinoamericano.',
        ir('Estudiar El movimiento pentecostal: Azusa y la primera expansión', '../../movimiento-pentecostal/#azusa/1'),
        { ejercicio: {
          pregunta: '¿Qué rasgo del avivamiento de la calle Azusa llamó especialmente la atención en la sociedad de 1906?',
          opciones: [
            { t: 'Que se celebraba en una catedral con liturgia en latín.', ok: false, por_que: 'Se celebraba en un edificio de madera muy sencillo, sin liturgia fija.' },
            { t: 'Que personas de distintas razas oraban juntas bajo el liderazgo de un pastor afroamericano.', ok: true, por_que: 'En una época de segregación, Azusa reunía a negros, blancos, latinos y asiáticos, y la dirigía Guillermo Seymour, hijo de esclavos.' },
            { t: 'Que lo organizaba el gobierno de Estados Unidos.', ok: false, por_que: 'Fue un movimiento espontáneo de creyentes sencillos; la prensa de la época incluso se burló de él.' }
          ],
          explicacion: 'Pentecostés fue desde el principio un don para «toda carne» (Hch 2:17): hijos e hijas, jóvenes y ancianos, siervos y siervas. En Azusa eso se vio de manera visible.'
        } }
      ],
      pensar: 'Pedro dijo que la promesa del Espíritu es «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hch 2:39). ¿Has buscado ser lleno del Espíritu Santo para ser testigo de Cristo donde vives?'
    },
    {
      id: 'fundamentos', n: 'Los fundamentos de la fe', ref: '1 Corintios 15:3-4; Judas 1:3; 2 Timoteo 3:16', fecha: [1910, 1925],
      visual: [
        tabla({
          titulo: 'Las verdades que defendían Los fundamentos (1910-1915)',
          cab: ['Doctrina', 'Base bíblica'],
          filas: [
            ['La inspiración y la verdad de la Escritura', '2 Ti 3:16; 2 P 1:21'],
            ['El nacimiento virginal de Cristo', 'Mt 1:23; Lc 1:34-35'],
            ['La muerte de Cristo en lugar del pecador', '1 P 2:24; Is 53:5'],
            ['La resurrección corporal de Cristo', '1 Co 15:3-8'],
            ['La realidad de los milagros', 'Jn 20:30-31'],
            ['La segunda venida de Cristo', 'Hch 1:11']
          ],
          nota: 'Doce tomos de ensayos de autores de varias denominaciones, distribuidos gratuitamente en unos tres millones de ejemplares.'
        }),
        cita('Judas 1:3', '@@jud/1/3')
      ],
      texto: [
        'A comienzos del siglo XX, las ideas liberales que se estudiaron en la ruta V habían llegado a muchas iglesias y seminarios de Norteamérica. Entre 1910 y 1915, dos empresarios cristianos financiaron la publicación de Los fundamentos, doce tomos de ensayos escritos por pastores y profesores de varias denominaciones, que defendían las doctrinas centrales de la fe. Se enviaron gratis a pastores, misioneros y estudiantes de todo el mundo, en unos tres millones de ejemplares.',
        { h: 'Fundamentalistas y modernistas' },
        'En 1920 se empezó a llamar «fundamentalistas» a quienes defendían esas verdades. Del otro lado estaban los «modernistas». En 1922, un famoso predicador liberal, Harry Emerson Fosdick, predicó un sermón titulado ¿Ganarán los fundamentalistas?, en el que pedía tolerancia para quienes no creían en el nacimiento virginal ni en la segunda venida literal. Al año siguiente, el profesor presbiteriano Juan Gresham Machen respondió con un libro en el que sostenía que el liberalismo no es otra versión del cristianismo, sino otra religión, porque niega lo que el cristianismo afirma sobre el pecado, Cristo y la salvación.',
        'Judas había escrito a la iglesia que contendiera «ardientemente por la fe que ha sido una vez dada a los santos» (Jud 1:3). Para los fundamentalistas, no se trataba de detalles: si Cristo no resucitó, «vana es entonces nuestra predicación» (1 Co 15:14).',
        { h: 'El juicio de Scopes y el repliegue' },
        'En 1925, en Dayton, Tennessee, un profesor fue juzgado por enseñar la evolución en una escuela pública, contra una ley del estado. El juicio se volvió un espectáculo nacional. El profesor fue condenado, pero la prensa ridiculizó a los fundamentalistas como ignorantes y atrasados. Muchos se retiraron de las universidades y de las grandes denominaciones, y formaron sus propias iglesias, escuelas e institutos bíblicos.',
        { h: 'Lo que dejó esta lucha' },
        'El movimiento fundamentalista defendió verdades esenciales y formó a generaciones de pastores y misioneros que llegaron también a América Latina. Pero con el tiempo una parte se volvió combativa, desconfiada de toda cultura y separada de otros creyentes. A mediados del siglo, otros evangélicos buscaron un camino que mantuviera las mismas verdades con una actitud más abierta y comprometida con el mundo, como se verá en la estación sobre Lausana. Para los pentecostales, que eran rechazados por muchos fundamentalistas por su experiencia del Espíritu, esa nueva etapa abrió la puerta a la comunión con otros evangélicos.'
      ],
      pensar: 'Judas pide contender por la fe, y Pablo pide hacerlo con amor y mansedumbre (2 Ti 2:24-25). ¿Cómo puedes defender las verdades centrales de la fe sin volverte contencioso por cosas secundarias?'
    },
    {
      id: 'totalitarismo', n: 'La iglesia ante Hitler', ref: 'Hechos 5:29; Lucas 9:23; Mateo 16:24-25', fecha: [1933, 1945],
      visual: [
        foto('bonhoeffer.jpg', 'Fotografía de Dietrich Bonhoeffer en 1939: un hombre de unos treinta y tres años, de pie y de perfil, con anteojos, chaqueta clara, camisa y corbata oscura, en un jardín', 'Dietrich Bonhoeffer en Sigurdshof, Pomerania, sede del seminario clandestino (1939).', 'Bundesarchiv, Bild 146-1987-074-16 / CC BY-SA 3.0 DE, vía Wikimedia Commons', 'Foto'),
        mapa({ view: V.reforma, lugares: ['h-barmen', 'h-flossenburg', 'h-wittenberg'] }, 'Mapa'),
        tabla({
          titulo: 'La iglesia confesante',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1933', 'Hitler llega al poder; los «cristianos alemanes» apoyan al nazismo'],
            ['1934', 'Declaración de Barmen: Cristo es la única Palabra de Dios'],
            ['1935-1937', 'Bonhoeffer dirige un seminario clandestino en Finkenwalde'],
            ['1937', 'Bonhoeffer publica El precio de la gracia; Niemöller es arrestado'],
            ['1944', 'Corrie ten Boom es arrestada en Holanda por esconder judíos'],
            ['1945', 'Bonhoeffer es ejecutado el 9 de abril en Flossenbürg']
          ]
        })
      ],
      texto: [
        'En 1933 Adolfo Hitler llegó al poder en Alemania, el país de la Reforma. Muchos protestantes lo recibieron con entusiasmo. Un movimiento llamado «cristianos alemanes» quiso unir la fe con el nacionalismo: pedía expulsar de la iglesia a los pastores de origen judío, quitar el Antiguo Testamento y presentar a Jesús como un héroe ario. El gobierno impuso un obispo del Reich.',
        { h: 'La Declaración de Barmen' },
        'Un grupo de pastores y teólogos se resistió. En mayo de 1934, reunidos en Barmen, firmaron una declaración redactada principalmente por el teólogo suizo Karl Barth. Su primer punto decía que Jesucristo, tal como lo presenta la Sagrada Escritura, es la única Palabra de Dios que la iglesia debe oír, confiar y obedecer en la vida y en la muerte, y rechazaba que la iglesia reconociera otras revelaciones, como la voz de un líder o de una nación. Así nació la iglesia confesante. El pastor Martín Niemöller, que había fundado una liga de pastores contra la persecución de los cristianos de origen judío, pasó ocho años en campos de concentración.',
        { h: 'Dietrich Bonhoeffer' },
        'Dietrich Bonhoeffer era un joven teólogo luterano de Berlín. Dirigió un seminario clandestino para formar pastores de la iglesia confesante y en 1937 publicó un libro sobre el discipulado en el que distinguía entre la «gracia barata», que perdona sin pedir arrepentimiento ni seguimiento, y la gracia costosa, que llama a seguir a Cristo y cuesta la vida. Recordaba las palabras de Jesús: «Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame» (Lc 9:23). En 1939 estaba a salvo en Nueva York, pero volvió a Alemania porque sentía que no podría ayudar a reconstruir la iglesia después de la guerra si no compartía el sufrimiento de su pueblo. Participó en la resistencia contra Hitler, fue arrestado en 1943 y ahorcado el 9 de abril de 1945, pocas semanas antes del fin de la guerra.',
        'En Holanda, la familia ten Boom, relojeros de Haarlem, escondió judíos en su casa. Corrie ten Boom fue arrestada en 1944 y llevada a un campo de concentración, donde murió su hermana Betsie. Después de la guerra, Corrie recorrió el mundo predicando el perdón, y llegó a dar la mano a uno de sus antiguos guardias.',
        { h: 'El silencio de muchos' },
        'La iglesia confesante fue una minoría. La mayoría de los cristianos alemanes calló o apoyó al régimen mientras se perseguía y asesinaba a millones de judíos. En octubre de 1945, los líderes de la iglesia evangélica alemana confesaron públicamente su culpa: no haber dado testimonio con más valor, ni orado con más fe, ni amado con más ardor. Es una advertencia para todas las generaciones: la iglesia que confunde el evangelio con una nación o un partido pierde su voz profética.'
      ],
      pensar: 'Bonhoeffer advirtió contra la «gracia barata», que perdona sin llamar a seguir a Cristo. ¿Hay alguna forma en que vives la gracia de Dios como si no te costara nada?'
    },
    {
      id: 'comunismo', n: 'Bajo el comunismo', ref: 'Salmo 2:1-4; Juan 15:18-20; Hechos 8:4', fecha: [1917, 1991],
      visual: [
        img('iglesia-casa.webp', 'Un pequeño grupo de creyentes chinos de distintas edades reunido de noche en la sala de una casa sencilla de la década de 1970: algunos sentados en taburetes y otros en el suelo, uno lee en voz baja una Biblia copiada a mano mientras los demás escuchan con atención; cortinas cerradas y luz de una lámpara pequeña', 'Una iglesia en casa en China durante la Revolución Cultural (recreación; personas anónimas).'),
        tabla({
          titulo: 'El cristianismo bajo regímenes comunistas',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1917', 'Revolución rusa; comienza la persecución de las iglesias'],
            ['1925', 'Se funda en la URSS la Liga de los Militantes Ateos'],
            ['1949', 'Triunfo comunista en China; en pocos años salen todos los misioneros'],
            ['1954', 'China crea el Movimiento Patriótico de las Tres Autonomías, controlado por el Estado'],
            ['1966-1976', 'Revolución Cultural: se cierran todos los templos de China'],
            ['1989-1991', 'Caída del muro de Berlín y fin de la Unión Soviética']
          ]
        })
      ],
      texto: [
        'El siglo XX fue el siglo con más mártires cristianos de la historia. Una parte de ellos murió bajo regímenes comunistas, que veían en la religión un obstáculo para construir una sociedad nueva sin Dios.',
        { h: 'La Unión Soviética' },
        'Después de la revolución de 1917, el gobierno soviético se propuso eliminar la religión. Miles de sacerdotes, pastores y creyentes fueron fusilados o enviados a campos de trabajo. De las decenas de miles de templos ortodoxos que había en Rusia, en 1939 quedaban abiertos apenas unos centenares. Los bautistas y otros evangélicos también fueron perseguidos; muchos se reunían en secreto en bosques y casas. En Rumania, el pastor Ricardo Wurmbrand pasó catorce años en la cárcel y fue torturado; después contó su historia en un libro que despertó a los creyentes de Occidente a orar por la iglesia perseguida. Un joven holandés, conocido como el Hermano Andrés, comenzó en 1955 a llevar Biblias escondidas a los países comunistas, y de esa obra nació Puertas Abiertas, que hoy publica cada año una lista de los países donde más se persigue a los cristianos.',
        { h: 'China' },
        'En 1949, cuando los comunistas tomaron el poder en China, había menos de un millón de protestantes. En pocos años todos los misioneros extranjeros fueron expulsados. El Estado creó una iglesia oficial, controlada por el partido, y los que no aceptaban ese control tuvieron que reunirse en casas. Durante la Revolución Cultural (1966-1976) se cerraron todos los templos, se quemaron las Biblias y muchos pastores pasaron décadas presos; Watchman Nee murió en un campo de trabajo en 1972. Parecía el fin de la iglesia en China.',
        { h: '«El que mora en los cielos se reirá»' },
        'Pero ocurrió lo contrario. Sin edificios, sin misioneros y sin libertad, los creyentes chinos se multiplicaron en las iglesias en casa, copiando la Biblia a mano y evangelizando de persona a persona. Las estimaciones varían mucho, pero hoy se habla de decenas de millones de cristianos en China. En 1989 cayó el muro de Berlín y en 1991 se disolvió la Unión Soviética, mientras las iglesias que habían sobrevivido salían a la luz. El salmista lo había anunciado: los reyes de la tierra se levantan contra el Señor y su ungido, pero «el que mora en los cielos se reirá» (Sal 2:4). Como en Hechos, «los que fueron esparcidos iban por todas partes anunciando el evangelio» (Hch 8:4).'
      ],
      pensar: 'Los creyentes chinos copiaban la Biblia a mano porque no podían tenerla impresa. ¿Qué te enseña su ejemplo sobre el valor de la Palabra y sobre la fuerza de la iglesia cuando le quitan todo lo demás?'
    },
    {
      id: 'lausana', n: 'Billy Graham y Lausana', ref: 'Marcos 16:15; 2 Corintios 5:19-20; Mateo 5:13-16', fecha: [1942, 2024],
      visual: [
        tabla({
          titulo: 'El movimiento evangélico mundial',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1942', 'Se forma en Estados Unidos la Asociación Nacional de Evangélicos, con iglesias pentecostales entre sus fundadoras'],
            ['1949', 'Campaña de Billy Graham en Los Ángeles; comienza su ministerio mundial'],
            ['1966', 'Congreso Mundial de Evangelización en Berlín'],
            ['1974', 'Congreso Internacional de Evangelización Mundial en Lausana, Suiza'],
            ['1989', 'Segundo Congreso de Lausana, en Manila'],
            ['2010', 'Tercer Congreso de Lausana, en Ciudad del Cabo'],
            ['2024', 'Cuarto Congreso de Lausana, en Seúl-Incheon, al cumplirse cincuenta años']
          ]
        }),
        mapa({ view: V.mundo, lugares: ['h-los-angeles', 'h-lausana', 'h-manila', 'h-ciudad-del-cabo', 'h-seul'] }, 'Mapa')
      ],
      texto: [
        'A mediados del siglo XX, un grupo de evangélicos de Norteamérica quiso superar el aislamiento en que habían caído muchos fundamentalistas, sin abandonar ninguna de sus convicciones. En 1942 formaron la Asociación Nacional de Evangélicos, y por primera vez varias iglesias pentecostales fueron aceptadas como hermanas por otras iglesias evangélicas. Se fundaron seminarios y revistas, y una nueva generación se propuso llevar el evangelio con seriedad intelectual y compromiso con la sociedad.',
        { h: 'Billy Graham' },
        'La figura más conocida de este movimiento fue Billy Graham, un evangelista bautista de Carolina del Norte. Su campaña en Los Ángeles, en 1949, duró ocho semanas y lo hizo famoso. Durante más de sesenta años predicó en casi todos los países del mundo, a cientos de millones de personas, por radio, televisión y en estadios. Su mensaje era sencillo: Dios te ama, el pecado te separa de Él, Cristo murió por ti y debes recibirlo por la fe. Al final de cada predicación invitaba a pasar adelante para entregar la vida a Cristo. Murió en 2018, a los 99 años.',
        { h: 'El Congreso de Lausana (1974)' },
        'En julio de 1974, Graham y otros líderes convocaron un congreso sobre la evangelización mundial en Lausana, Suiza. Llegaron unos 2.700 participantes de más de 150 países, muchos de ellos de Asia, África y América Latina. Allí hablaron, con una fuerza que sorprendió a muchos, dos latinoamericanos: el ecuatoriano René Padilla y el peruano Samuel Escobar. Pidieron que la evangelización no se separara de la vida concreta de los pueblos, ni el evangelio de una cultura extranjera.',
        'El congreso aprobó el Pacto de Lausana, redactado bajo la dirección del pastor inglés Juan Stott. Afirma que la evangelización y la responsabilidad social son parte del deber cristiano, y que en la misión de la iglesia la evangelización es lo primero, porque somos embajadores de Cristo que ruegan a los hombres: «Reconciliaos con Dios» (2 Co 5:20). El movimiento de Lausana siguió con congresos en Manila (1989), Ciudad del Cabo (2010) y Seúl-Incheon (2024), y es hoy una de las principales redes de cooperación misionera evangélica.',
        { ejercicio: {
          pregunta: 'Según el Pacto de Lausana, ¿qué lugar tiene la evangelización en la misión de la iglesia?',
          opciones: [
            { t: 'Es lo único que importa; la acción social no forma parte del deber cristiano.', ok: false, por_que: 'El Pacto afirma que la responsabilidad social también es parte del deber cristiano.' },
            { t: 'Es lo primero, aunque la responsabilidad social también es parte del deber cristiano.', ok: true, por_que: 'Lausana unió ambas cosas, pero afirmó la prioridad de anunciar el evangelio.' },
            { t: 'Debe dejarse de lado hasta que mejoren las condiciones sociales de los pueblos.', ok: false, por_que: 'Lausana nunca puso en duda la urgencia de evangelizar; al contrario, llamó a toda la iglesia a hacerlo.' }
          ],
          explicacion: 'Jesús envió a sus discípulos a predicar el evangelio a toda criatura (Mr 16:15) y a ser sal y luz con sus buenas obras (Mt 5:13-16). Lausana quiso mantener las dos cosas en su lugar.'
        } }
      ],
      pensar: 'Billy Graham predicó un mensaje sencillo durante sesenta años. ¿Podrías explicar con claridad el evangelio a un amigo en cinco minutos? Inténtalo esta semana.'
    },
    {
      id: 'unidad', n: 'El movimiento ecuménico', ref: 'Juan 17:20-23; Efesios 4:3-6; 1 Corintios 1:10', fecha: [1910, 1999],
      visual: [
        cita('Juan 17:20-23', '@@jn/17/20-23'),
        tabla({
          titulo: 'De Edimburgo al Consejo Mundial',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1910', 'Conferencia Misionera de Edimburgo'],
            ['1921', 'Consejo Misionero Internacional'],
            ['1925-1927', 'Conferencias de Vida y Acción (Estocolmo) y de Fe y Constitución (Lausana)'],
            ['1948', 'Nace en Ámsterdam el Consejo Mundial de Iglesias'],
            ['1961', 'Dos iglesias pentecostales chilenas se unen al Consejo, las primeras pentecostales en hacerlo'],
            ['1999', 'Luteranos y católicos firman una declaración conjunta sobre la justificación']
          ]
        })
      ],
      texto: [
        'Jesús oró por la unidad de los que creerían en Él: «para que todos sean uno … para que el mundo crea que tú me enviaste» (Jn 17:21). En el siglo XX, muchas iglesias sintieron que sus divisiones eran un escándalo ante el mundo y un obstáculo para la misión. Así nació el movimiento ecuménico, que buscaba la unidad de los cristianos.',
        { h: 'El Consejo Mundial de Iglesias' },
        'El deseo de cooperar que surgió en Edimburgo en 1910 dio origen a varias organizaciones, que en 1948 se unieron en Ámsterdam para formar el Consejo Mundial de Iglesias. Al principio lo integraron 147 iglesias protestantes y ortodoxas que confesaban a Jesucristo como Dios y Salvador. Con los años creció hasta reunir a cientos de iglesias. En 1961 se unieron dos iglesias pentecostales de Chile, las primeras de esta familia en hacerlo, mientras la mayoría de los pentecostales y evangélicos del mundo prefirió mantenerse fuera.',
        { h: 'Por qué muchos evangélicos se distanciaron' },
        'Con el tiempo, muchos evangélicos se distanciaron del Consejo. Les preocupaba que, por buscar la unidad de las instituciones, se dejaran de lado verdades esenciales, como la autoridad de la Biblia y la necesidad de la conversión personal; que la evangelización se reemplazara por el diálogo con otras religiones; y que el Consejo apoyara causas políticas de un solo signo. Por eso, a la vez, muchos evangélicos formaron sus propias redes de cooperación, como la Alianza Evangélica Mundial y el movimiento de Lausana.',
        { posturas: {
          titulo: '¿Qué clase de unidad pidió Jesús?',
          a: { n: 'Unidad visible e institucional', t: 'Las iglesias deben buscar la comunión plena y visible: reconocerse mutuamente, compartir la Cena del Señor y, si es posible, formar una sola organización, para que el mundo vea la unidad (Jn 17:21).' },
          b: { n: 'Unidad espiritual en la verdad', t: 'La unidad ya existe entre todos los verdaderos creyentes, porque hay «un cuerpo, y un Espíritu» (Ef 4:4). Se expresa en el amor y la cooperación, pero nace de compartir la verdad del evangelio y no requiere una sola organización (Ef 4:13; Gá 1:8).' },
          c: 'La mayoría de las iglesias evangélicas de América Latina sigue la segunda postura: busca la unidad con todos los que confiesan a Cristo según la Escritura y coopera con ellos en la misión y el servicio, sin sacrificar la verdad del evangelio por la unidad de las estructuras.'
        } },
        'La unidad que pidió Jesús es un desafío también para los evangélicos, que se han dividido muchas veces por orgullo o por cuestiones menores. Pablo pregunta: «¿Acaso está dividido Cristo?» (1 Co 1:13). No se trata de borrar las diferencias, sino de amar a los hermanos de otras iglesias, orar juntos y trabajar juntos en lo que nos une, que es mucho.'
      ],
      pensar: '«En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros» (Jn 13:35). ¿Qué paso concreto podrías dar para acercarte a creyentes de otra iglesia evangélica de tu ciudad?'
    },
    {
      id: 'renovacion', n: 'Vaticano II y la renovación carismática', ref: '1 Corintios 12:7; Hechos 10:44-47; 1 Tesalonicenses 5:21', fecha: [1960, 1990],
      visual: [
        tabla({
          titulo: 'El Concilio Vaticano II (1962-1965)',
          cab: ['Qué cambió', 'Qué no cambió'],
          filas: [
            ['La misa pasó del latín a la lengua de cada pueblo', 'La misa sigue entendiéndose como sacrificio'],
            ['Se animó a los católicos a leer la Biblia', 'La tradición y el magisterio siguen junto a la Escritura'],
            ['Se llamó a los protestantes «hermanos separados»', 'El papado y los dogmas marianos se mantienen'],
            ['Se afirmó la libertad religiosa', 'Las doctrinas de Trento siguen vigentes']
          ]
        }),
        mapa({ view: V.eeuu, lugares: ['h-los-angeles', 'h-pittsburgh', 'h-chicago'] }, 'Mapa')
      ],
      texto: [
        'En la década de 1960 ocurrieron dos cambios que sorprendieron a los evangélicos: la iglesia católica abrió sus puertas a la Biblia y a la lengua del pueblo, y la experiencia del Espíritu Santo, que hasta entonces parecía propia de los pentecostales, llegó a iglesias tradicionales.',
        { h: 'El Concilio Vaticano II' },
        'En 1962 el papa Juan XXIII convocó un concilio para poner al día a la iglesia católica. El Concilio Vaticano II (1962-1965) cambió muchas prácticas, como resume la tabla: la misa empezó a celebrarse en la lengua de cada pueblo, se animó a los fieles a leer la Escritura, se reconoció la libertad religiosa y se llamó a los protestantes «hermanos separados» en lugar de herejes. En América Latina, donde durante siglos la Biblia había estado lejos del pueblo, comenzaron a circular Biblias católicas en castellano. En 1999 luteranos y católicos firmaron una declaración conjunta en la que reconocían un acuerdo básico sobre la justificación por gracia mediante la fe.',
        'Pero las doctrinas centrales que separaron a la Reforma de Roma siguen vigentes: la autoridad del papa, la tradición junto a la Escritura, la misa como sacrificio, los dogmas sobre María y el purgatorio. Por eso los evangélicos valoran el acercamiento a la Biblia y el respeto mutuo, sin dejar de afirmar que la Escritura es la autoridad final.',
        { h: 'La renovación carismática' },
        'En 1960 un pastor episcopal de California, Dennis Bennett, contó a su congregación que había recibido el bautismo en el Espíritu Santo y había hablado en lenguas. La noticia se difundió por todo el país. En los años siguientes, miles de anglicanos, luteranos, presbiterianos y metodistas vivieron experiencias semejantes sin dejar sus iglesias: así nació el movimiento carismático. En febrero de 1967, durante un retiro de estudiantes de la Universidad Duquesne, en Pittsburgh, varios jóvenes católicos vivieron la misma experiencia, y comenzó la renovación carismática católica, que se extendió por todo el mundo, también por América Latina. En la década de 1980 surgió una «tercera ola» en iglesias evangélicas que no se identificaban como pentecostales.',
        'Para los pentecostales fue una sorpresa: lo que antes se rechazaba como fanatismo era ahora buscado en iglesias históricas. Muchos se alegraron, recordando que Pedro reconoció que Dios había dado el mismo don a los gentiles (Hch 10:47). Otros advirtieron que una experiencia espiritual no reemplaza la doctrina bíblica: la renovación debe llevar a la Escritura, a Cristo como único mediador y a una vida santa. El criterio sigue siendo el de Pablo: «Examinadlo todo; retened lo bueno» (1 Ts 5:21).'
      ],
      pensar: 'Pedro, al ver que el Espíritu caía sobre los gentiles, dijo: «¿Puede acaso alguno impedir el agua?» (Hch 10:47). ¿Cómo reaccionas cuando Dios obra en personas o grupos que no esperabas?'
    },
    {
      id: 'sur', n: 'El cristianismo se traslada al sur', ref: 'Isaías 49:6; Salmo 22:27; Malaquías 1:11', fecha: [1945, 2000],
      visual: [
        esq('esquema-continentes.svg', 'Gráfico de barras con el número de cristianos por continente en 1900 y en 2026', 'Cristianos por continente, en millones (Status of Global Christianity 2026).', 'Por continente'),
        tabla({
          titulo: 'Cristianos que viven en el sur global',
          cab: ['Año', 'Porcentaje'],
          filas: [['1900', '17,6 %'], ['1970', '42,7 %'], ['2000', '59,0 %'], ['2026', '69,0 %']],
          nota: 'Fuente: Status of Global Christianity, 2026. El sur global comprende África, Asia, América Latina y Oceanía.'
        })
      ],
      texto: [
        'Después de la Segunda Guerra Mundial, los imperios europeos se desmoronaron. La India se independizó en 1947 y, en las dos décadas siguientes, casi toda África y Asia. Muchos pensaron que, sin el respaldo colonial, el cristianismo desaparecería de esos países, por considerarlo una religión de extranjeros. Ocurrió exactamente lo contrario.',
        { h: 'África' },
        'En África, la iglesia creció como nunca cuando pasó a manos africanas. Desde la década de 1930, un avivamiento en Ruanda y Uganda, conocido como el avivamiento de África oriental, llamó a creyentes y pastores a la confesión del pecado y a la santidad, y se extendió durante décadas. Surgieron iglesias fundadas por africanos, con un fuerte énfasis en la oración, la sanidad y el Espíritu Santo. El número de cristianos en África pasó de unos 137 millones en 1970 a casi 780 millones en 2026: hoy es el continente con más cristianos.',
        { h: 'Asia' },
        'En Corea del Sur, el crecimiento de la iglesia fue extraordinario: en Seúl, una congregación pentecostal fundada en 1958 en una carpa llegó a ser la más grande del mundo, con cientos de miles de miembros organizados en grupos en las casas. En China, como se vio, la iglesia creció bajo persecución. También creció en Indonesia, Filipinas, Nepal, la India y otros países, muchas veces entre los más pobres y despreciados.',
        { h: 'Un nuevo mapa' },
        'El resultado es que el centro de gravedad del cristianismo se trasladó al sur, como muestra la tabla: en 1900, menos de dos de cada diez cristianos vivían en el sur global; en 2026, casi siete de cada diez. Hoy Brasil, Corea del Sur y Nigeria están entre los países que más misioneros envían. Iglesias africanas y latinoamericanas tienen congregaciones en Europa, donde los creyentes inmigrantes llenan templos que estaban vacíos. Lo que comenzó con misioneros que salían del norte hacia el sur se ha convertido en una misión de todas partes hacia todas partes.',
        'Dios había dicho a su Siervo: «te di por luz de las naciones, para que seas mi salvación hasta lo postrero de la tierra» (Is 49:6). El siglo XX vio cumplirse esa promesa como nunca antes.',
        { ejercicio: {
          pregunta: '¿Qué pasó con el cristianismo en África y Asia después del fin de los imperios coloniales?',
          opciones: [
            { t: 'Desapareció, porque era una religión impuesta por los extranjeros.', ok: false, por_que: 'Muchos lo predijeron, pero los datos muestran lo contrario: el cristianismo creció como nunca.' },
            { t: 'Creció con fuerza, sobre todo cuando las iglesias quedaron en manos de los creyentes de cada país.', ok: true, por_que: 'En África los cristianos pasaron de unos 137 millones en 1970 a casi 780 millones en 2026.' },
            { t: 'Se mantuvo igual que en tiempos coloniales.', ok: false, por_que: 'El cambio fue enorme: hoy la mayoría de los cristianos del mundo vive en el sur global.' }
          ],
          explicacion: 'El evangelio no pertenece a ninguna cultura. Cuando los creyentes de cada pueblo lo hicieron suyo, se extendió más que nunca.'
        } }
      ],
      pensar: 'Hoy la iglesia de América Latina es parte del sur que envía misioneros al mundo. ¿Qué podrías hacer tú, o tu iglesia, para participar en esa misión?'
    }
  ];
