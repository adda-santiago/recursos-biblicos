  // ================== RUTA III. Respuestas y guerras (1540-1648) ==================
  const respuestas = [
    {
      id: 'trento', n: 'La respuesta católica: Trento', ref: 'Romanos 3:28; Marcos 7:13; 2 Timoteo 3:16', fecha: [1545, 1563],
      visual: [
        img('trento.webp', 'Sesión del Concilio de Trento en la catedral de la ciudad: decenas de obispos con mitras blancas y capas sentados en gradas de madera a ambos lados de la nave, frente a una mesa presidida por los legados del papa; un secretario lee un documento en voz alta', 'Una sesión del Concilio de Trento (recreación; personas anónimas).'),
        tabla({
          titulo: 'Trento y la Reforma: los puntos centrales',
          cab: ['Tema', 'Concilio de Trento', 'Reformadores'],
          filas: [
            ['Autoridad', 'La Escritura y la tradición, recibidas con igual reverencia', 'La Escritura como autoridad final, sobre la tradición'],
            ['Biblia', 'La Vulgata latina es la versión auténtica para la enseñanza', 'Traducción de los originales a la lengua del pueblo'],
            ['Canon', 'Incluye los libros que los evangélicos llaman apócrifos', 'El canon hebreo para el Antiguo Testamento'],
            ['Justificación', 'Comienza por gracia y crece con las obras y los sacramentos', 'Declaración de Dios recibida solo por la fe'],
            ['Sacramentos', 'Siete; la misa es un sacrificio', 'Dos ordenanzas: bautismo y Cena del Señor'],
            ['Purgatorio e indulgencias', 'Se afirman, corrigiendo los abusos', 'Se rechazan por no tener base bíblica']
          ]
        })
      ],
      texto: [
        'La iglesia de Roma no se quedó de brazos cruzados. Ya antes de Lutero había católicos que trabajaban por una reforma: en España, el cardenal Cisneros había reformado a los religiosos y promovido la Biblia Políglota de Alcalá. Después de 1517, muchos católicos reconocieron que los abusos eran reales y que la iglesia necesitaba cambiar. Pero no aceptaron la doctrina de los reformadores.',
        { h: 'El Concilio de Trento (1545-1563)' },
        'El papa Pablo III convocó un concilio en la ciudad de Trento, en el norte de Italia. Sesionó con largas interrupciones durante dieciocho años. Corrigió muchos abusos: exigió que los obispos vivieran en sus diócesis, prohibió vender cargos y ordenó crear seminarios para formar mejor a los sacerdotes. Pero en doctrina respondió punto por punto a la Reforma, como resume la tabla. Afirmó que la Escritura y la tradición deben recibirse con igual reverencia, declaró auténtica la Vulgata latina, incluyó en el canon los libros apócrifos, mantuvo los siete sacramentos y la misa como sacrificio, y condenó la enseñanza de que el pecador es justificado solo por la fe.',
        'En los mismos años se creó la Inquisición romana (1542) y se publicó un índice de libros prohibidos (1559), en el que figuraban las Biblias en lengua vulgar sin permiso. En España y en sus colonias, la Inquisición ya existía y actuó con dureza contra los evangélicos, como se vio en Sevilla y Valladolid.',
        { h: 'Una reforma real y una división profunda' },
        'Trento produjo una iglesia católica más disciplinada, con sacerdotes mejor formados, y una fuerte renovación espiritual: es la época de Teresa de Ávila y Juan de la Cruz. Al mismo tiempo, fijó por cuatro siglos las diferencias con los protestantes. Para los evangélicos, el punto central sigue siendo el que Pablo resume así: «el hombre es justificado por fe sin las obras de la ley» (Ro 3:28). Este recurso describe con respeto la fe de los católicos y reconoce a los católicos que aman a Cristo, pero no oculta que en ese punto hay una diferencia de fondo.',
        'En el siglo XX, el Concilio Vaticano II cambió muchas prácticas y abrió la lectura de la Biblia a los católicos, como se verá en la ruta VI. Pero las doctrinas de Trento sobre la autoridad, los sacramentos y la misa siguen vigentes en la iglesia católica.'
      ],
      pensar: 'Jesús advirtió contra invalidar la palabra de Dios con la tradición (Mr 7:13). ¿Hay alguna costumbre de tu propia iglesia o familia que hayas puesto, sin darte cuenta, a la altura de la Escritura?'
    },
    {
      id: 'jesuitas', n: 'Los jesuitas y las misiones católicas', ref: 'Mateo 28:19-20; Romanos 10:14-15', fecha: [1540, 1767],
      visual: [
        pasos([
          { t: 'Roma: Ignacio de Loyola funda la Compañía de Jesús (1540)', fecha: 1540, estado: { view: V.mundo, lugares: ['h-roma'] } },
          { t: 'Francisco Javier en la India (1542) y Japón (1549)', fecha: 1549, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima'] } },
          { t: 'México y Lima: misiones en América (desde 1570)', fecha: 1570, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima', 'h-mexico', 'h-lima'] } },
          { t: 'Pekín: Mateo Ricci en la corte de China (1601)', fecha: 1601, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima', 'h-mexico', 'h-lima', 'h-pekin'] } },
          { t: 'Reducciones guaraníes en Paraguay (1609-1767)', fecha: 1609, estado: { view: V.mundo, lugares: ['h-roma', 'h-goa', 'h-kagoshima', 'h-mexico', 'h-lima', 'h-pekin', 'h-reducciones'] } }
        ], 'Las misiones de los jesuitas')
      ],
      texto: [
        'La respuesta católica a la Reforma no fue solo un concilio. Fue también un movimiento de misioneros, educadores y predicadores, y el más influyente fue la Compañía de Jesús, los jesuitas.',
        { h: 'Ignacio de Loyola' },
        'Ignacio de Loyola era un soldado vasco que en 1521, el mismo año de la dieta de Worms, fue herido en una batalla. Durante su larga convalecencia leyó vidas de santos y una vida de Cristo, y decidió entregar su vida a Dios. Escribió los Ejercicios espirituales, un método de oración y examen de conciencia, y reunió a un grupo de compañeros de estudio en París. En 1540 el papa aprobó la Compañía de Jesús, con un voto especial de obediencia al papa. Los jesuitas fundaron cientos de colegios y fueron la vanguardia de la reconquista católica de regiones que se habían vuelto protestantes, como Polonia, Baviera y Austria.',
        { h: 'Hasta los confines de la tierra' },
        'Su gran obra fueron las misiones. Francisco Javier llegó a Goa, en la India, en 1542, y a Japón en 1549, y murió a las puertas de China. Mateo Ricci aprendió el chino, se vistió como un sabio confuciano y en 1601 fue recibido en la corte de Pekín. En América, los jesuitas, junto a franciscanos, dominicos y otras órdenes, evangelizaron pueblos enteros; en Paraguay organizaron las reducciones guaraníes, pueblos donde los indígenas vivían protegidos de los esclavistas, hasta que el rey de España expulsó a la orden en 1767.',
        'Estas misiones tuvieron luces y sombras, que se estudian en la ruta VII: muchas veces el bautismo se impuso sin conversión verdadera, y la fe se mezcló con creencias antiguas. Pero muestran un celo misionero que pone en evidencia una pregunta incómoda.',
        { h: '¿Y los protestantes?' },
        'Durante casi doscientos años, las iglesias protestantes casi no enviaron misioneros fuera de Europa. Había razones: estaban ocupadas en sobrevivir a las guerras, no tenían colonias en ultramar ni órdenes religiosas que pudieran enviar, y algunos teólogos pensaban que la Gran Comisión había sido solo para los apóstoles. Hubo excepciones, como un grupo de hugonotes que llegó a Brasil en 1557 y los misioneros enviados desde Halle a la India en 1706. Pero el gran movimiento misionero evangélico tuvo que esperar hasta fines del siglo XVIII, como muestra la ruta V. El mandato de Jesús había sido claro: «id, y haced discípulos a todas las naciones» (Mt 28:19).',
        { ejercicio: {
          pregunta: '¿Cuál de estas razones explica que los protestantes enviaran pocos misioneros en los siglos XVI y XVII?',
          opciones: [
            { t: 'Creían que los pueblos lejanos no podían salvarse.', ok: false, por_que: 'No era esa la razón; la Reforma afirmaba que el evangelio es para todo el que cree.' },
            { t: 'Estaban absorbidos por las guerras y no tenían colonias ni órdenes misioneras.', ok: true, por_que: 'Las iglesias protestantes luchaban por sobrevivir en Europa y no tenían las estructuras que sí tenían los católicos.' },
            { t: 'El papa les había prohibido salir de Europa.', ok: false, por_que: 'Los protestantes no reconocían la autoridad del papa; sus limitaciones eran prácticas y teológicas.' }
          ],
          explicacion: 'Además de las guerras y la falta de colonias, algunos teólogos pensaban que la Gran Comisión había sido solo para los apóstoles. Esa idea cambió con los avivamientos del siglo XVIII.'
        } }
      ],
      pensar: 'Pablo pregunta: «¿cómo oirán sin haber quien les predique?» (Ro 10:14). ¿Qué excusas usamos hoy los creyentes para no anunciar el evangelio, como lo hicieron muchos protestantes durante dos siglos?'
    },
    {
      id: 'guerras', n: 'Las guerras de religión', ref: 'Juan 18:36; Mateo 26:52; 2 Corintios 10:4', fecha: [1546, 1598],
      visual: [
        pasos([
          { t: 'Alemania: guerra de Esmalcalda y paz de Augsburgo (1546-1555)', fecha: 1555, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-wittenberg'] } },
          { t: 'Francia: guerras de religión y noche de San Bartolomé (1562-1572)', fecha: 1572, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-paris'] } },
          { t: 'Países Bajos: rebelión contra España (desde 1568)', fecha: 1568, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-paris', 'h-amsterdam', 'h-amberes'] } },
          { t: 'Francia: edicto de Nantes, tolerancia para los hugonotes (1598)', fecha: 1598, estado: { view: V.europa, lugares: ['h-augsburgo', 'h-paris', 'h-amsterdam', 'h-amberes'] } }
        ], 'Guerras y paces'),
        cita('Juan 18:36', '@@jn/18/36')
      ],
      texto: [
        'En el siglo XVI casi nadie imaginaba que en un mismo país pudieran convivir personas de distintas confesiones. Se pensaba que la unidad de la fe era la base de la paz y de la obediencia al rey. Por eso, cuando Europa se dividió entre católicos y protestantes, la religión se mezcló con la política, y vinieron casi cien años de guerras.',
        { h: 'Alemania: «a tal rey, tal religión»' },
        'En Alemania, el emperador Carlos V derrotó a los príncipes luteranos en 1547, pero no pudo imponer el catolicismo. En 1555, la paz de Augsburgo estableció un principio que después se resumió así: «cuyo es el reino, suya es la religión». Cada príncipe decidía si su territorio sería católico o luterano, y quien no estuviera de acuerdo debía emigrar. Los reformados y los anabautistas quedaron fuera del acuerdo.',
        { h: 'Francia: los hugonotes' },
        'En Francia, los evangélicos, llamados hugonotes, llegaron a ser una minoría numerosa y organizada. Entre 1562 y 1598 hubo ocho guerras civiles. La más terrible matanza ocurrió en la noche de San Bartolomé, el 24 de agosto de 1572: en París y luego en otras ciudades fueron asesinados miles de hugonotes. Finalmente, en 1598, el rey Enrique IV, que había sido protestante, firmó el edicto de Nantes, que daba a los hugonotes libertad de culto en ciertos lugares. En 1685 Luis XIV lo revocó, y cientos de miles de hugonotes huyeron a otros países.',
        { h: 'Los Países Bajos' },
        'En los Países Bajos, que pertenecían a España, la persecución de los protestantes se unió al rechazo de los impuestos y del gobierno extranjero. Desde 1568, las provincias del norte se rebelaron contra Felipe II y, tras una larga guerra, formaron una república donde los reformados eran mayoría y otras confesiones eran toleradas. Ámsterdam se volvió refugio de perseguidos de toda Europa, y allí se imprimió en 1602 la revisión de Cipriano de Valera.',
        { h: 'Lo que estas guerras enseñan' },
        'Hubo en estas guerras mártires verdaderos, y también ambiciones políticas disfrazadas de fe. Ninguna de las dos partes estaba libre de culpa. Jesús había dicho a Pilato: «Mi reino no es de este mundo; si mi reino fuera de este mundo, mis servidores pelearían» (Jn 18:36), y a Pedro: «todos los que tomen espada, a espada perecerán» (Mt 26:52). La lección que la iglesia aprendió con tanto dolor es que el evangelio se extiende por la predicación y el testimonio, no por la fuerza, porque «las armas de nuestra milicia no son carnales» (2 Co 10:4).'
      ],
      pensar: 'Es fácil defender la fe con enojo y con armas de este mundo: insultos, presiones, votos o poder. ¿Cómo puedes defender la verdad con las armas que pide Pablo, sin dejar de ser firme?'
    },
    {
      id: 'westfalia', n: 'Los Treinta Años y la paz de Westfalia', ref: 'Romanos 12:18; Mateo 5:9; Salmo 133:1', fecha: [1618, 1648],
      visual: [
        mapa({ view: V.europa1600, capas: [...EUROPA_1600, 'h-otomanos'], lugares: ['h-praga', 'h-munster', 'h-osnabruck', 'h-roma', 'h-ginebra', 'h-wittenberg'] }, 'Europa hacia 1600'),
        tabla({
          titulo: 'La guerra de los Treinta Años',
          cab: ['Año', 'Hecho'],
          filas: [
            ['1618', 'Defenestración de Praga: los protestantes de Bohemia se rebelan'],
            ['1620', 'Batalla de la Montaña Blanca; Bohemia vuelve por la fuerza al catolicismo'],
            ['1630', 'El rey Gustavo Adolfo de Suecia entra en la guerra a favor de los protestantes'],
            ['1635', 'Francia, católica, se une a la guerra contra los Habsburgo católicos'],
            ['1648', 'Paz de Westfalia, firmada en Münster y Osnabrück']
          ],
          nota: 'El mapa muestra la confesión que predominaba en cada región hacia 1600, con fronteras de hoy y de forma aproximada. En muchas regiones convivían varias confesiones.'
        })
      ],
      texto: [
        'El mapa muestra cómo quedó Europa después de un siglo de Reforma. El norte de Alemania y Escandinavia eran luteranos. Suiza, los Países Bajos del norte, Escocia y partes de Hungría eran reformados. Inglaterra era anglicana. España, Portugal, Italia, Francia, Irlanda, Polonia y el sur de Alemania seguían siendo católicos. En el este, Rusia y los Balcanes eran ortodoxos, estos últimos bajo el dominio del imperio otomano.',
        { h: 'La guerra más destructiva' },
        'Esta división terminó en la guerra de los Treinta Años (1618-1648), la más destructiva que Europa había conocido hasta entonces. Comenzó en Praga, cuando los protestantes de Bohemia se rebelaron contra el emperador católico y arrojaron por una ventana a sus representantes. En 1620 fueron derrotados en la batalla de la Montaña Blanca, y Bohemia, la tierra de Juan Hus, fue obligada a volver al catolicismo; miles de familias evangélicas tuvieron que exiliarse. Algunos de sus descendientes, los hermanos moravos, reaparecerán en la ruta IV.',
        'Poco a poco la guerra se convirtió en una lucha entre potencias por el dominio de Europa. Suecia intervino a favor de los protestantes y Francia, aunque católica, se alió con ellos contra los Habsburgo. Ejércitos de mercenarios saquearon Alemania durante décadas. Con la guerra vinieron el hambre y las epidemias, y en algunas regiones murió un tercio de la población.',
        { h: 'La paz de Westfalia (1648)' },
        'Agotados, los gobernantes firmaron la paz en las ciudades de Münster y Osnabrück, en Westfalia. El acuerdo reconoció a los reformados junto a católicos y luteranos, y fijó por mucho tiempo el mapa religioso de Europa. Fue el fin de las grandes guerras de religión en el continente.',
        'Westfalia tuvo consecuencias profundas. Muchos europeos, cansados de la violencia en nombre de Dios, empezaron a pensar que la religión era un asunto privado que el Estado no debía imponer. Esa idea preparó el camino de la tolerancia religiosa, una conquista valiosa, pero también de la Ilustración y de una sociedad que con el tiempo dejaría de lado la fe, como se verá en la ruta IV. Los creyentes que querían una fe viva, en cambio, buscaron renovación en la oración, la Biblia y la comunión: así nacieron el pietismo y los avivamientos.',
        { ejercicio: {
          pregunta: 'Según el mapa de Europa hacia 1600, ¿cuál de estas regiones era principalmente reformada (calvinista)?',
          opciones: [
            { t: 'Escandinavia.', ok: false, por_que: 'Dinamarca, Noruega y Suecia adoptaron la Reforma luterana.' },
            { t: 'Escocia.', ok: true, por_que: 'Escocia adoptó en 1560 una confesión reformada, bajo la influencia de Juan Knox y de Ginebra.' },
            { t: 'España.', ok: false, por_que: 'En España la Inquisición eliminó a los grupos evangélicos; siguió siendo católica.' }
          ],
          explicacion: 'Las regiones reformadas eran Suiza, los Países Bajos del norte, Escocia, el Palatinado alemán y partes de Hungría y Transilvania. De Escocia vienen los presbiterianos.'
        } }
      ],
      pensar: 'Pablo pide: «Si es posible, en cuanto dependa de vosotros, estad en paz con todos los hombres» (Ro 12:18). ¿Con quién necesitas buscar la paz, aunque piensen distinto de ti?'
    },
    {
      id: 'confesiones', n: 'Las confesiones de fe y la gran discusión', ref: '1 Timoteo 2:4; Efesios 1:4-5; Hebreos 3:12-14', fecha: [1530, 1689],
      visual: [
        tabla({
          titulo: 'Las grandes confesiones de fe',
          cab: ['Año', 'Confesión', 'Familia'],
          filas: [
            ['1530', 'Confesión de Augsburgo', 'Luterana'],
            ['1563', 'Catecismo de Heidelberg', 'Reformada (Alemania y Países Bajos)'],
            ['1571', 'Treinta y nueve Artículos', 'Anglicana'],
            ['1619', 'Cánones de Dort', 'Reformada (Países Bajos)'],
            ['1647', 'Confesión de Westminster', 'Presbiteriana (Inglaterra y Escocia)'],
            ['1689', 'Segunda Confesión de Londres', 'Bautista']
          ],
          nota: 'Las confesiones no reemplazan a la Biblia: resumen lo que una iglesia entiende que la Biblia enseña.'
        }),
        mapa({ view: V.reforma, capas: EUROPA_1600, lugares: ['h-dordrecht', 'h-heidelberg', 'h-augsburgo', 'h-londres'] }, 'Mapa')
      ],
      texto: [
        'Después de la primera generación de reformadores, las iglesias protestantes pusieron por escrito su fe en confesiones y catecismos. Querían enseñar a los niños, formar a los pastores y mostrar que no eran herejes sino fieles a la Escritura. Algunas de esas obras se siguen usando hoy. El Catecismo de Heidelberg comienza preguntando cuál es el único consuelo en la vida y en la muerte, y responde que es pertenecer a Jesucristo, que pagó por todos los pecados con su sangre. El Catecismo de Westminster empieza afirmando que el fin principal del hombre es glorificar a Dios y gozar de Él para siempre.',
        { h: 'Arminio y el sínodo de Dort' },
        'En los Países Bajos estalló una discusión que sigue viva. Jacobo Arminio, un pastor y profesor reformado, cuestionó la manera en que se enseñaba la predestinación. Después de su muerte, sus seguidores presentaron en 1610 una «protesta» en cinco puntos. Las iglesias reformadas convocaron un gran sínodo en la ciudad de Dordrecht (Dort), que en 1619 rechazó esas ideas y respondió con cinco puntos que hoy se conocen como los cinco puntos del calvinismo. Desde entonces, las iglesias evangélicas se dividen entre calvinistas y arminianos.',
        { posturas: {
          titulo: 'Calvinismo y arminianismo',
          a: { n: 'Calvinismo (Dort)', t: 'Dios escogió desde la eternidad, por pura gracia, a los que serán salvos (Ef 1:4-5; Ro 8:29-30). Cristo murió para salvarlos con eficacia, el Espíritu los atrae de manera irresistible (Jn 6:44) y Dios los guarda de modo que no pueden perder la salvación (Jn 10:28-29).' },
          b: { n: 'Arminianismo (Arminio, Wesley)', t: 'Dios quiere que todos los hombres sean salvos (1 Ti 2:4; 2 P 3:9) y Cristo murió por todos (1 Jn 2:2). Su gracia precede y capacita a todos para creer, pero puede ser resistida (Hch 7:51). Dios elige en Cristo a los que creen, y el creyente permanece seguro mientras permanece en la fe (He 3:12-14; Jn 15:6).' },
          c: 'Las iglesias pentecostales y metodistas, y muchas otras de América Latina, siguen la segunda postura: Dios ofrece la salvación a todos, la gracia llama y capacita, el ser humano es responsable de responder, y la seguridad del creyente descansa en el poder de Dios que guarda a los que permanecen en Cristo (Jud 1:24; He 3:14). Ambas posturas afirman que la salvación es solo por gracia y solo por la fe, y en ambas hay creyentes fieles.'
        } },
        { h: 'El valor de las confesiones' },
        'Las confesiones de fe tienen un gran valor: ayudan a enseñar con orden, protegen contra el error y conectan a la iglesia de hoy con la de ayer. Pablo pedía a Timoteo: «Retén la forma de las sanas palabras» (2 Ti 1:13). Pero ninguna confesión es infalible. En el siglo XVII, algunos protestantes llegaron a discutir tanto sobre los detalles de sus confesiones que la fe se volvió fría y más intelectual que vital. Contra esa frialdad reaccionaron los movimientos que se estudian en la próxima ruta.'
      ],
      pensar: 'Hebreos exhorta a retener «firme hasta el fin nuestra confianza del principio» (He 3:14). ¿Qué hábitos te ayudan a permanecer firme en la fe en tiempos de prueba?'
    }
  ];
