/* Pactos y dispensaciones · ruta II. Los pactos de Dios (6-11) (ver encabezado en parte1.js) */
(() => {
  const pactos2 = [
    {
      id: 'sinai', n: 'El Sinaí: el pacto con Israel', ref: 'Éxodo 19:3-8; 24:3-8; 31:12-17; Gálatas 3:17-19', fecha: -1446,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/sinai-sangre.webp', alt: 'Al pie del monte Sinaí, junto a un altar de piedra con doce columnas de piedra alrededor, Moisés anciano rocía con un hisopo la sangre de un tazón sobre una multitud de israelitas', pie: '«He aquí la sangre del pacto que Jehová ha hecho con vosotros» (Éxodo 24:8).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ex/19/3-8', ref: 'Éxodo 19:3-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El pacto del Sinaí en resumen',
          cab: ['Elemento', 'En el Sinaí'],
          filas: [
            ['Partes', 'Jehová y la nación de Israel, rescatada de Egipto'],
            ['Promesa', 'Israel sería especial tesoro, reino de sacerdotes y gente santa'],
            ['Condición', '«si diereis oído a mi voz, y guardareis mi pacto»'],
            ['Contenido', 'Los mandamientos, los estatutos y el culto del tabernáculo'],
            ['Sangre', 'Rociada sobre el altar y sobre el pueblo'],
            ['Señal', 'El día de reposo (Éx 31:13-17)'],
            ['Duración', 'Hasta que viniese la simiente (Gá 3:19); reemplazado por el nuevo pacto (He 8:13)']
          ]
        } }
      ],
      texto: [
        'Tres meses después de salir de Egipto, Israel acampó frente al monte Sinaí. Allí Dios hizo con la nación el pacto que ocupa el centro del Antiguo Testamento. Moisés subió al monte, y Dios le dio un mensaje para el pueblo que comienza con lo que ya había hecho: «Vosotros visteis lo que hice a los egipcios, y cómo os tomé sobre alas de águilas, y os he traído a mí» (Éx 19:4).',
        { h: 'Un pacto con una condición' },
        'Luego vino la propuesta: «Ahora, pues, si diereis oído a mi voz, y guardareis mi pacto, vosotros seréis mi especial tesoro sobre todos los pueblos; porque mía es toda la tierra. Y vosotros me seréis un reino de sacerdotes, y gente santa» (Éx 19:5-6). Es un pacto condicional, como se vio en la ruta I. El pueblo respondió a una voz: «Todo lo que Jehová ha dicho, haremos» (Éx 19:8).',
        'Dios dio entonces los Diez Mandamientos y las leyes del libro del pacto (Éx 20–23). Moisés las leyó al pueblo, que volvió a comprometerse, y el pacto se selló con sangre: «Entonces Moisés tomó la sangre y roció sobre el pueblo, y dijo: He aquí la sangre del pacto que Jehová ha hecho con vosotros sobre todas estas cosas» (Éx 24:8). Después vinieron las instrucciones del tabernáculo, el sacerdocio y los sacrificios, y la señal del pacto, el día de reposo (Éx 31:13-17).',
        { h: 'Para qué fue dado' },
        'El pacto del Sinaí no anuló el pacto con Abraham. Pablo lo dice con claridad: «la ley que vino cuatrocientos treinta años después, no lo abroga, para invalidar la promesa» (Gá 3:17). Tampoco fue un camino de salvación por obras: se dio a un pueblo ya redimido, e incluía sacrificios para el perdón de los pecados. Su propósito fue apartar a Israel como nación santa, mostrar la santidad de Dios, revelar el pecado (Ro 3:20) y guiar a Israel hasta Cristo como un ayo (Gá 3:24).',
        'También tuvo un límite en el tiempo. Pablo pregunta: «¿para qué sirve la ley? Fue añadida a causa de las transgresiones, hasta que viniese la simiente a quien fue hecha la promesa» (Gá 3:19). Israel quebrantó el pacto muchas veces, y por medio de Jeremías Dios anunció un nuevo pacto, «No como el pacto que hice con sus padres» (Jer 31:32). El contenido de la ley, sus mandamientos y su vigencia se estudian en un recurso propio, La ley de Moisés.',
        { ejercicio: {
          pregunta: '¿Anuló el pacto del Sinaí las promesas hechas a Abraham?',
          opciones: [
            { t: 'Sí, porque la ley reemplazó a la promesa.', ok: false, por_que: 'Gálatas 3:17 dice expresamente que la ley no abroga el pacto ratificado antes.' },
            { t: 'No: la ley vino después y no invalidó la promesa.', ok: true, por_que: 'La promesa a Abraham sigue en pie; la ley se añadió por un tiempo, hasta Cristo.' },
            { t: 'Solo para los gentiles, no para Israel.', ok: false, por_que: 'Pablo habla de la relación entre la ley y la promesa en general, sin esa distinción.' }
          ],
          explicacion: 'El pacto del Sinaí se añadió a la promesa, no la reemplazó.'
        } }
      ],
      pensar: 'Israel prometió obedecer todo lo que Dios había dicho, y no pudo cumplirlo. ¿Qué te enseña esto sobre la diferencia entre buenas intenciones y la obra del Espíritu en el corazón?'
    },
    {
      id: 'tierra', n: 'El pacto de la tierra', ref: 'Deuteronomio 29:1, 10-15; 30:1-10; Levítico 26:40-45; Ezequiel 36:24-28', fecha: -1406,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@dt/30/1-10', ref: 'Deuteronomio 30:1-10' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que anuncia Deuteronomio 29 y 30',
          cab: ['Etapa', 'Qué dice el texto', 'Pasaje'],
          filas: [
            ['Desobediencia', 'Israel abandonaría el pacto', 'Dt 29:24-26'],
            ['Dispersión', 'Dios los arrancaría de su tierra y los echaría a otra', 'Dt 29:27-28'],
            ['Arrepentimiento', 'Volverían a Jehová en medio de las naciones', 'Dt 30:1-2'],
            ['Regreso', 'Dios los recogería aun de las partes más lejanas', 'Dt 30:3-5'],
            ['Corazón nuevo', 'Dios circuncidaría su corazón para que le amen', 'Dt 30:6'],
            ['Bendición', 'Prosperidad en la tierra y juicio sobre sus enemigos', 'Dt 30:7-9']
          ],
          nota: 'La enseñanza dispensacional lo llama pacto palestino o pacto de la tierra.'
        } }
      ],
      texto: [
        'Cuarenta años después del Sinaí, en las llanuras de Moab, frente a la tierra prometida, Moisés reunió a la nueva generación. Antes de cruzar el Jordán, Dios hizo con ellos otro pacto: «Estas son las palabras del pacto que Jehová mandó a Moisés que celebrase con los hijos de Israel en la tierra de Moab, además del pacto que concertó con ellos en Horeb» (Dt 29:1). Horeb es otro nombre del Sinaí.',
        { h: 'Un pacto sobre la tierra' },
        'Este pacto se centra en la posesión de la tierra. Moisés anuncia, con una claridad sorprendente, lo que pasaría: Israel abandonaría a Dios, sería arrancado de su tierra y esparcido entre las naciones (Dt 29:24-28). Pero no termina ahí. «Sucederá que cuando hubieren venido sobre ti todas estas cosas… y te convirtieres a Jehová tu Dios… entonces Jehová hará volver a tus cautivos, y tendrá misericordia de ti, y volverá a recogerte de entre todos los pueblos» (Dt 30:1-3).',
        'La promesa llega lejos: «Aun cuando tus desterrados estuvieren en las partes más lejanas que hay debajo del cielo, de allí te recogerá Jehová tu Dios» (Dt 30:4). Y llega hondo: «circuncidará Jehová tu Dios tu corazón, y el corazón de tu descendencia, para que ames a Jehová tu Dios con todo tu corazón y con toda tu alma» (Dt 30:6). El regreso a la tierra va unido a un cambio interior que solo Dios puede hacer.',
        { h: 'Condicional e incondicional a la vez' },
        'Este pacto combina las dos clases vistas en la ruta I. El disfrute de la tierra depende de la obediencia de cada generación: por eso hubo exilio. Pero la promesa final no depende de Israel, porque es Dios quien circuncidará su corazón. Levítico 26 dice lo mismo: aun en tierra de sus enemigos, Dios no los desechará, «invalidando mi pacto con ellos» (Lv 26:44).',
        'Los profetas retomaron esta promesa. Ezequiel anuncia que Dios tomará a Israel de las naciones, lo traerá a su tierra, le dará un corazón nuevo y pondrá su Espíritu dentro de él (Ez 36:24-28). El regreso del exilio en Babilonia fue un cumplimiento parcial; la lectura que sigue este estudio espera el cumplimiento completo en el futuro, cuando Israel se vuelva a su Mesías. Esa esperanza, con sus posturas, se estudia en La tierra de Israel.',
        { ir: { t: 'Ver «La promesa futura» en La tierra de Israel', a: '../../tierra-de-israel/#plan/6' } },
        { ejercicio: {
          pregunta: 'Según Deuteronomio 30:6, ¿qué haría Dios además de devolver a Israel a su tierra?',
          opciones: [
            { t: 'Les daría un nuevo código de leyes más fácil de cumplir.', ok: false, por_que: 'El texto no habla de leyes nuevas, sino de un cambio en el corazón.' },
            { t: 'Circuncidaría su corazón para que le amen con todo su ser.', ok: true, por_que: 'Es la misma promesa que reaparece en el nuevo pacto de Jeremías 31 y Ezequiel 36.' },
            { t: 'Haría que no necesitaran obedecer más.', ok: false, por_que: 'Dios cambia el corazón para que puedan amarle y obedecerle, no para eliminar la obediencia.' }
          ],
          explicacion: 'La restauración que Dios promete no es solo geográfica: es también un corazón nuevo.'
        } }
      ],
      pensar: 'Moisés anunció la dispersión de Israel antes de que entraran a la tierra, y también su regreso. ¿Qué te enseña sobre la paciencia de Dios con quienes se apartan de Él?'
    },
    {
      id: 'sacerdotal', n: 'El pacto sacerdotal', ref: 'Números 25:10-13; Malaquías 2:4-7; Jeremías 33:17-22; Hebreos 7:11-17', fecha: -1407,
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@nm/25/10-13', ref: 'Números 25:10-13' },
        { tipo: 'cita', titulo: 'Malaquías', texto: '@@mal/2/4-7', ref: 'Malaquías 2:4-7' }
      ],
      texto: [
        'Entre los grandes pactos de la Biblia hay uno que suele pasarse por alto: el pacto de Dios con el sacerdocio. No tiene el alcance de los pactos con Abraham o con David, pero ayuda a entender cómo Dios aseguró el servicio de su santuario y cómo ese servicio apuntaba a Cristo.',
        { h: 'Finees' },
        'Al final del viaje por el desierto, en Sitim, muchos israelitas se entregaron a la idolatría y a la inmoralidad con las mujeres de Moab, y una mortandad cayó sobre el pueblo. Finees, nieto de Aarón, actuó con celo por Dios y detuvo la plaga (Nm 25:1-9). Entonces Dios dijo: «He aquí yo establezco mi pacto de paz con él; y tendrá él, y su descendencia después de él, el pacto del sacerdocio perpetuo, por cuanto tuvo celo por su Dios e hizo expiación por los hijos de Israel» (Nm 25:12-13).',
        'Malaquías recuerda este pacto con Leví siglos después, para reprender a los sacerdotes de su tiempo: «Mi pacto con él fue de vida y de paz… La ley de verdad estuvo en su boca» (Mal 2:5-6). Los sacerdotes debían guardar el conocimiento de Dios y enseñarlo, «porque mensajero es de Jehová de los ejércitos» (Mal 2:7). Pero habían corrompido el pacto de Leví.',
        { h: 'Unido al pacto con David' },
        'Por medio de Jeremías, Dios pone juntos el pacto con David y el pacto con los sacerdotes: si alguien pudiera invalidar el pacto de Dios con el día y con la noche, «podrá también invalidarse mi pacto con mi siervo David… y mi pacto con los levitas y sacerdotes, mis ministros» (Jer 33:20-21). Un rey y un sacerdote: las dos funciones que Israel necesitaba.',
        { h: 'Un sacerdote mejor' },
        'El Nuevo Testamento muestra que esas dos funciones se unen en una sola persona. Jesús no era de la tribu de Leví, sino de Judá. Hebreos explica que Dios lo hizo sacerdote «según el orden de Melquisedec» (He 7:17), un orden anterior a Aarón, que une al rey y al sacerdote, y que no termina con la muerte. Cuando cambió el sacerdocio, cambió también la ley que lo regulaba (He 7:12). El pacto con Leví cumplió su papel; el sacerdocio de Cristo lo supera. Todo esto se estudia en detalle en El sacerdocio en Israel.',
        { ir: { t: 'Ver «Melquisedec» en El sacerdocio en Israel', a: '../../sacerdocio/#cristo/1' } },
        { ejercicio: {
          pregunta: '¿Por qué Hebreos dice que Jesús es sacerdote según el orden de Melquisedec y no de Aarón?',
          opciones: [
            { t: 'Porque Jesús descendía de Aarón por parte de su madre.', ok: false, por_que: 'Hebreos 7:14 dice que nuestro Señor vino de la tribu de Judá.' },
            { t: 'Porque es un sacerdocio que une al rey y al sacerdote, y que no termina.', ok: true, por_que: 'Melquisedec era rey y sacerdote, y Cristo vive para siempre para interceder (He 7:24-25).' },
            { t: 'Porque el sacerdocio levítico nunca tuvo valor.', ok: false, por_que: 'Tuvo valor como sombra y preparación; Hebreos dice que era imperfecto, no inútil.' }
          ],
          explicacion: 'En Cristo se unen el trono de David y un sacerdocio eterno.'
        } }
      ],
      pensar: 'Malaquías dice que el sacerdote debía guardar la sabiduría y enseñarla. En el nuevo pacto, todos los creyentes son sacerdotes (1 P 2:9). ¿A quién estás llevando el conocimiento de Dios?'
    },
    {
      id: 'david', n: 'David: un trono para siempre', ref: '2 Samuel 7:1-17; Salmo 89:3-4, 28-37; Isaías 9:6-7; Lucas 1:30-33', fecha: -995,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/david-natan.webp', alt: 'En una sala sencilla de su palacio de cedro en Jerusalén, el rey David, sentado, escucha con emoción al profeta Natán, que de pie le habla con la mano levantada; por la ventana se ve la tienda donde estaba el arca', pie: '«Y será afirmada tu casa y tu reino para siempre delante de tu rostro» (2 Samuel 7:16).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2s/7/8-16', ref: '2 Samuel 7:8-16' },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/estela-tel-dan.jpg', alt: 'Fragmento de piedra basáltica con escritura aramea; una de sus líneas menciona la «casa de David»', pie: 'La estela de Tel Dan (siglo IX a.C.), en arameo, menciona la «casa de David». Museo de Israel, Jerusalén.', origen: 'foto', licencia: 'Foto: Oren Rozen (2016), CC BY-SA 4.0, vía Wikimedia Commons' }
      ],
      texto: [
        'Cuando David ya reinaba en Jerusalén y tenía paz con sus enemigos, se sintió incómodo: él vivía en una casa de cedro mientras el arca de Dios estaba en una tienda. Quiso edificarle una casa a Dios. Pero esa noche Dios habló al profeta Natán con un mensaje sorprendente: no sería David quien le edificaría una casa a Dios, sino Dios quien le edificaría una casa a David (2 S 7:11).',
        { h: 'Las promesas' },
        'La palabra «casa» tiene aquí dos sentidos: un templo y una dinastía. Dios prometió a David un hijo que edificaría el templo, y algo mucho mayor: «yo afirmaré para siempre el trono de su reino» (2 S 7:13). «Y será afirmada tu casa y tu reino para siempre delante de tu rostro, y tu trono será estable eternamente» (2 S 7:16). Son tres promesas para siempre: una casa, un reino y un trono.',
        'También es un pacto incondicional. Si los hijos de David pecaban, Dios los disciplinaría, «pero mi misericordia no se apartará de él como la aparté de Saúl» (2 S 7:15). El salmo 89 lo celebra con juramento: «No olvidaré mi pacto, Ni mudaré lo que ha salido de mis labios. Una vez he jurado por mi santidad, Y no mentiré a David» (Sal 89:34-35). David mismo, al final de su vida, dijo que Dios había hecho con él «pacto perpetuo, Ordenado en todas las cosas, y será guardado» (2 S 23:5).',
        { h: 'Un trono vacío y una esperanza' },
        'La historia pareció contradecir la promesa. Los reyes de Judá fueron infieles, y en el año 586 a.C. Babilonia destruyó Jerusalén y se llevó al último rey. Durante siglos no hubo descendiente de David en el trono. Pero los profetas siguieron anunciando a un rey de la casa de David: un niño que se sentaría «sobre el trono de David y sobre su reino» y cuyo imperio no tendría límite (Is 9:7).',
        'Cuando el ángel Gabriel anunció a María el nacimiento de Jesús, usó las palabras del pacto: «el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin» (Lc 1:32-33). La ruta III muestra cómo Cristo cumple esta promesa.',
        'La arqueología también conservó el nombre de esa dinastía. La estela de Tel Dan, escrita en arameo por un rey enemigo de Israel en el siglo IX a.C., menciona la «casa de David», la misma expresión de 2 Samuel 7.',
        { ejercicio: {
          pregunta: '¿Qué dos sentidos tiene la palabra «casa» en 2 Samuel 7?',
          opciones: [
            { t: 'El palacio de David y el palacio de Salomón.', ok: false, por_que: 'El juego de palabras está entre la casa que David quería edificar a Dios y la casa que Dios le edificaría a él.' },
            { t: 'Un templo para Dios y una dinastía para David.', ok: true, por_que: 'David quería edificar un templo; Dios le prometió una descendencia que reinaría para siempre.' },
            { t: 'La tienda del arca y la ciudad de Jerusalén.', ok: false, por_que: 'La tienda es la ocasión del deseo de David, pero la promesa es sobre su descendencia.' }
          ],
          explicacion: 'Dios convierte el deseo de David de darle una casa en una promesa de darle a él una casa eterna.'
        } }
      ],
      pensar: 'David quería hacer algo grande para Dios, y Dios le respondió prometiendo hacer algo mucho más grande por él. ¿Qué te enseña esto sobre el servicio y la gracia?'
    },
    {
      id: 'nuevo-prometido', n: 'El nuevo pacto prometido', ref: 'Jeremías 31:31-34; Ezequiel 36:24-28; Isaías 59:20-21; Ezequiel 37:24-28', fecha: -587,
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: '../exilio/img/exi-carta-jeremias.webp', alt: 'En una habitación sencilla de Jerusalén, el profeta Jeremías dicta a su secretario Baruc, que escribe en un rollo', pie: '«Escríbete en un libro todas las palabras que te he hablado» (Jeremías 30:2).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jer/31/31-34', ref: 'Jeremías 31:31-34' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las promesas del nuevo pacto',
          cab: ['Promesa', 'Jeremías', 'Ezequiel'],
          filas: [
            ['La ley escrita en el corazón', 'Jer 31:33', 'Ez 36:26'],
            ['Una relación personal con Dios', 'Jer 31:33-34', 'Ez 36:28'],
            ['Todos conocerán a Jehová', 'Jer 31:34', '—'],
            ['El perdón completo de los pecados', 'Jer 31:34', 'Ez 36:25'],
            ['El Espíritu de Dios dentro de ellos', '—', 'Ez 36:27; 37:14'],
            ['Israel restaurado en su tierra', 'Jer 31:38-40; 32:37-41', 'Ez 36:24, 28; 37:25']
          ]
        } }
      ],
      texto: [
        'Jeremías vivió los peores años de Judá. Vio cómo el pueblo quebrantaba el pacto del Sinaí, anunció el juicio durante cuarenta años y presenció la destrucción de Jerusalén. Pero en medio de esa oscuridad, Dios le mandó escribir un libro de consuelo (Jer 30–33). En su centro está la promesa más importante del Antiguo Testamento.',
        { h: 'No como el pacto antiguo' },
        '«He aquí que vienen días, dice Jehová, en los cuales haré nuevo pacto con la casa de Israel y con la casa de Judá. No como el pacto que hice con sus padres el día que tomé su mano para sacarlos de la tierra de Egipto; porque ellos invalidaron mi pacto» (Jer 31:31-32). El problema del pacto del Sinaí no estaba en la ley, que era santa, sino en el corazón del pueblo, que no podía cumplirla.',
        { h: 'Lo nuevo del nuevo pacto' },
        'El nuevo pacto resuelve ese problema desde adentro: «Daré mi ley en su mente, y la escribiré en su corazón; y yo seré a ellos por Dios, y ellos me serán por pueblo» (Jer 31:33). La ley ya no estaría en tablas de piedra, frente al pueblo, sino dentro de cada uno. Todos conocerían a Dios personalmente, desde el más pequeño hasta el más grande, y Dios dice: «perdonaré la maldad de ellos, y no me acordaré más de su pecado» (Jer 31:34).',
        'Ezequiel, contemporáneo de Jeremías, añade cómo ocurrirá: «Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros… Y pondré dentro de vosotros mi Espíritu, y haré que andéis en mis estatutos» (Ez 36:26-27). El Espíritu Santo es el corazón del nuevo pacto: Él escribe la ley de Dios en el interior y da el poder para vivirla. Isaías también lo une a la promesa del Espíritu y de la palabra que no faltarán de la boca del pueblo (Is 59:21).',
        { h: 'Con la casa de Israel y la casa de Judá' },
        'Jeremías dice que este pacto se hará con Israel y Judá, y lo une a la permanencia de Israel como nación, tan segura como el sol y la luna (Jer 31:35-37). Al mismo tiempo, el Nuevo Testamento enseña que la iglesia ya participa del nuevo pacto por medio de Cristo. Cómo se relacionan las dos cosas se estudia en la ruta III.',
        { ejercicio: {
          pregunta: 'Según Jeremías 31, ¿cuál era el problema del pacto antiguo que el nuevo pacto resuelve?',
          opciones: [
            { t: 'Que la ley de Dios era mala y había que reemplazarla por otra.', ok: false, por_que: 'La ley era santa (Ro 7:12). El problema estaba en el pueblo, que invalidó el pacto.' },
            { t: 'Que el pueblo no podía cumplirlo; ahora Dios escribirá su ley en el corazón.', ok: true, por_que: 'El nuevo pacto cambia el interior: ley en el corazón, perdón completo y el Espíritu dentro.' },
            { t: 'Que el pacto antiguo era solo para los sacerdotes.', ok: false, por_que: 'El pacto del Sinaí se hizo con toda la nación.' }
          ],
          explicacion: 'Lo nuevo del nuevo pacto es un corazón transformado por el Espíritu.'
        } }
      ],
      pensar: 'El nuevo pacto promete que la ley de Dios estará escrita en el corazón. ¿Obedeces a Dios como quien cumple una regla de afuera o como quien ama lo que Él ama?'
    },
    {
      id: 'conjunto', n: 'Los pactos en conjunto', ref: 'Romanos 9:4-5; Efesios 2:12; Gálatas 3:15-22; 2 Corintios 1:20',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pactos.svg', alt: 'Esquema de los pactos de la Biblia en orden: Noé, Abraham con sus tres promesas de tierra, descendencia y bendición, el Sinaí añadido por un tiempo, el pacto de la tierra, David y el nuevo pacto; todas las líneas convergen en Cristo', pie: 'Los pactos de Dios, de Noé a Cristo.', origen: 'esquema' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Los pactos de Dios',
          cab: ['Pacto', 'Con quién', 'Promesa central', 'Clase', 'Señal'],
          filas: [
            ['Noé', 'Toda la humanidad y la tierra', 'No más diluvio', 'Incondicional', 'Arco iris'],
            ['Abraham', 'Abraham y su descendencia', 'Tierra, descendencia y bendición', 'Incondicional', 'Circuncisión'],
            ['Sinaí', 'La nación de Israel', 'Especial tesoro y reino de sacerdotes', 'Condicional', 'Día de reposo'],
            ['La tierra', 'Israel en Moab', 'Dispersión y regreso, corazón circuncidado', 'Mixto', '—'],
            ['Sacerdotal', 'Finees y los sacerdotes', 'Sacerdocio perpetuo', 'Incondicional', '—'],
            ['David', 'David y su casa', 'Casa, reino y trono para siempre', 'Incondicional', '—'],
            ['Nuevo pacto', 'Israel y Judá; la iglesia participa', 'Ley en el corazón, perdón, el Espíritu', 'Incondicional', 'La Cena del Señor']
          ]
        } }
      ],
      texto: [
        'Después de recorrer los pactos uno por uno, conviene verlos juntos. No son acuerdos sueltos, uno después de otro, como si Dios cambiara de idea en cada época. Forman una historia, y cada pacto se apoya en los anteriores.',
        { h: 'Un tronco y sus ramas' },
        'El pacto con Noé es el escenario: asegura que la tierra seguirá existiendo mientras Dios lleva adelante su plan. El pacto con Abraham es el tronco: sus tres promesas, tierra, descendencia y bendición, contienen todo lo que sigue. El pacto de la tierra desarrolla la primera promesa. El pacto con David desarrolla la segunda: la descendencia de Abraham tendrá un rey para siempre. Y el nuevo pacto desarrolla la tercera: la bendición del perdón y del Espíritu, que alcanzará a las naciones.',
        'El pacto del Sinaí ocupa un lugar distinto. Pablo dice que fue «añadida», es decir, puesta junto a la promesa por un tiempo, «hasta que viniese la simiente a quien fue hecha la promesa» (Gá 3:19). Cumplió su función y dio paso al nuevo pacto.',
        { h: 'Todos convergen en Cristo' },
        'El esquema muestra que todas las líneas llegan a una persona. Cristo es la simiente de Abraham (Gá 3:16), el Hijo de David (Lc 1:32), el que cumplió la ley (Mt 5:17), el sacerdote para siempre (He 7:17) y el mediador del nuevo pacto (He 9:15). Pablo lo resume: «todas las promesas de Dios son en él Sí, y en él Amén» (2 Co 1:20).',
        'Pablo también dice que los pactos pertenecen a Israel: «de los cuales son la adopción, la gloria, el pacto, la promulgación de la ley, el culto y las promesas» (Ro 9:4). Y recuerda a los efesios que antes de Cristo estaban «ajenos a los pactos de la promesa, sin esperanza y sin Dios en el mundo» (Ef 2:12). Los gentiles no tenían ningún derecho propio a esos pactos; llegaron a participar de ellos por gracia, en Cristo. Esa es la pregunta de la ruta siguiente.',
        { ejercicio: {
          pregunta: '¿Qué pacto es el «tronco» del que se desarrollan los demás pactos de promesa?',
          opciones: [
            { t: 'El pacto del Sinaí.', ok: false, por_que: 'El Sinaí fue añadido por un tiempo; no es la raíz de las promesas.' },
            { t: 'El pacto con Abraham.', ok: true, por_que: 'Sus promesas de tierra, descendencia y bendición se amplían en el pacto de la tierra, el de David y el nuevo pacto.' },
            { t: 'El pacto con Noé.', ok: false, por_que: 'El pacto con Noé preserva la tierra, pero las promesas de salvación comienzan con Abraham.' }
          ],
          explicacion: 'Los pactos de promesa desarrollan las tres promesas hechas a Abraham y se cumplen en Cristo.'
        } }
      ],
      pensar: 'Todas las promesas de Dios son «Sí» en Cristo (2 Co 1:20). ¿Qué promesa de Dios necesitas recordar hoy que ya está asegurada en Él?'
    }
  ];

  window.__PACTOS.pactos = window.__PACTOS.pactos.concat(pactos2);
})();
