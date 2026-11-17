/* ==========================================================
   Recursos Bíblicos — El ser humano y el pecado · contenido de las rutas
   FUENTE de public/apps/ser-humano-y-pecado/data.js: no editar el data.js,
   editar estas partes y correr  python3 herramientas/humano_citas.py
   Las pestañas de pasaje marcadas con dos arrobas + libro/capítulo/versículos se llenan
   con el texto exacto de la RV 1960 del sitio (public/biblia/rv1960).
   Motor: ../assets/js/ruta-estudio.js (formato en su encabezado).
   Decisiones del responsable al aprobar el bosquejo (13-11-2026):
   - Pecado original: toda la humanidad hereda de Adán una naturaleza caída y está bajo la
     muerte; cómo se transmite la culpa (federal, realista, solo la naturaleza) va en `posturas`.
   - Depravación y libre albedrío: prevalece la lectura arminiana de las Asambleas de Dios
     (el pecado corrompió todas las facultades; la gracia preveniente capacita para responder);
     la incapacidad total calvinista, como postura y sin caricatura.
   - Los niños que mueren antes de la edad de la responsabilidad son salvos por la obra de Cristo.
   - Dos o tres partes del ser humano y el origen del alma: en `posturas`, sin fijar ninguna.
   - Romanos 7: prevalece la lectura del creyente que lucha en sus propias fuerzas.
   - Maldiciones generacionales: se rechaza que caigan sobre el creyente (Gá 3:13; Ez 18).
   - Errores con nombre y respeto: pelagianismo, Ciencia Cristiana, Nueva Era, «pequeños dioses»
     de la fe de la palabra, la «caída hacia arriba» de los mormones y el perfeccionismo.
   - Dignidad de la vida (aborto y eutanasia) y matrimonio: breve, pastoral, desde el texto.
   Coordinación con otros recursos:
   - La creación del ser humano y el relato del Edén están en La creación y los orígenes;
     aquí se estudia la doctrina y se enlazan sus estaciones.
   - La justificación, la regeneración y la seguridad de la salvación quedan para La salvación
     (nº 106, en preparación); la obra del Espíritu en la salvación y la blasfemia contra el
     Espíritu, en El Espíritu Santo; la cruz, en La persona y obra de Cristo.
   - El estado intermedio y las resurrecciones, en Los últimos tiempos.
   ========================================================== */
(() => {

  /* ---------------- I. Creados a imagen de Dios ---------------- */
  const imagen = [
    {
      id: 'hombre', n: '¿Qué es el hombre?', ref: 'Salmos 8; Hebreos 2:6-9; Eclesiastés 3:11; 12:13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/8/3-9', ref: 'Salmos 8:3-9' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cuatro-estados.svg', alt: 'Cuatro columnas que muestran la historia del ser humano: creado (bueno y libre, podía no pecar), caído (esclavo del pecado, no puede dejar de pecar por sí mismo), redimido (nueva criatura, puede no pecar por la gracia) y glorificado (semejante a Cristo, ya no podrá pecar)', pie: 'La historia del ser humano en cuatro estados: creado, caído, redimido y glorificado. Es el hilo de este recurso.', origen: 'esquema' }
      ],
      texto: [
        'Una noche, David levantó la vista al cielo. Vio la luna y las estrellas, obra de los dedos de Dios, y se sintió pequeño. Entonces hizo la pregunta que todos los seres humanos se han hecho alguna vez: «¿Qué es el hombre, para que tengas de él memoria, Y el hijo del hombre, para que lo visites?» (Sal 8:4).',
        { h: 'Pequeño y grande a la vez' },
        'La respuesta del salmo tiene dos lados. Frente al universo, el ser humano es casi nada: polvo, como recuerda otro salmo, porque Dios «se acuerda de que somos polvo» (Sal 103:14). Pero frente a las demás criaturas, es el que Dios coronó: «Le has hecho poco menor que los ángeles, Y lo coronaste de gloria y de honra» (Sal 8:5). Ni un animal más, ni un dios: una criatura con un lugar único en la obra de Dios.',
        'Las respuestas que da el mundo suelen quedarse con uno solo de los dos lados. Unas dicen que el ser humano es solo materia, un animal un poco más complejo, sin más propósito que sobrevivir. Otras dicen que es divino por naturaleza y que solo le falta descubrirlo. La Biblia rechaza las dos: el ser humano es criatura, y por eso depende de Dios; pero es criatura hecha a imagen de Dios, y por eso tiene una dignidad que ninguna otra tiene.',
        { h: 'Una historia en cuatro estados' },
        'Para entender lo que somos hay que conocer nuestra historia. El esquema la resume en cuatro momentos, siguiendo una idea que la iglesia enseña desde Agustín. Creado: bueno, libre y capaz de no pecar. Caído: separado de Dios, bajo el poder del pecado e incapaz de librarse solo. Redimido: hecho nueva criatura en Cristo, con poder para vencer el pecado por la gracia. Y glorificado: semejante a Cristo, donde ya no habrá pecado. Las ocho rutas de este recurso recorren esa historia, desde la imagen de Dios hasta la redención.',
        { h: 'La respuesta final es Cristo' },
        'La carta a los Hebreos cita el Salmo 8 y añade algo sorprendente. Todavía no vemos que todo esté sujeto al ser humano, como prometía el salmo; «Pero vemos a aquel que fue hecho un poco menor que los ángeles, a Jesús, coronado de gloria y de honra» (He 2:9). La respuesta final a «¿qué es el hombre?» es un hombre: Jesucristo, el ser humano como Dios lo quiso. Por eso este recurso termina en Él.',
        { ejercicio: {
          pregunta: 'Según el Salmo 8, ¿qué lugar tiene el ser humano en la creación?',
          opciones: [
            { t: 'Es una criatura pequeña frente al universo, pero coronada por Dios de gloria y de honra.', ok: true, por_que: 'Correcto: el salmo une la pequeñez del ser humano con la dignidad que Dios le dio.' },
            { t: 'Es un animal más, sin diferencia esencial con los demás seres vivos.', ok: false, por_que: 'El salmo dice que Dios lo hizo señorear sobre las obras de sus manos: tiene un lugar único.' },
            { t: 'Es un ser divino que debe descubrir su propia divinidad.', ok: false, por_que: 'El salmo lo llama criatura: Dios lo formó, lo recuerda y lo visita. No es Dios.' }
          ],
          explicacion: 'La Biblia mantiene juntas la humildad y la dignidad: somos polvo, pero polvo que Dios coronó.'
        } }
      ],
      pensar: 'Cuando te miras a ti mismo, ¿tiendes más a despreciarte o a creerte el centro de todo? ¿Qué cambia si recuerdas que eres polvo coronado por Dios?'
    },
    {
      id: 'imagen-de-dios', n: 'Qué es la imagen de Dios', ref: 'Génesis 1:26-28; 5:1-3; 9:6; Santiago 3:9; Colosenses 3:10; Efesios 4:24',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-imagen.svg', alt: 'Tres círculos que se superponen con las tres maneras de entender la imagen de Dios: lo que el ser humano es (razón, voluntad, moral, espiritualidad), su relación con Dios y con los demás, y su tarea de gobernar la creación en nombre de Dios; en el centro, Cristo, la imagen perfecta', pie: 'Tres aspectos de la imagen de Dios. La Biblia no obliga a elegir uno: los tres están en Génesis 1:26-28.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/1/26-28', ref: 'Génesis 1:26-28' }
      ],
      texto: [
        'Ninguna otra criatura recibe lo que Génesis dice del ser humano: «Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó» (Gn 1:27). La estación «El ser humano, corona de la creación» de La creación y los orígenes presenta el relato; aquí se estudia qué significa.',
        { h: 'Imagen y semejanza' },
        'Génesis usa dos palabras hebreas: tsélem, «imagen», que se usaba para estatuas y representaciones, y demut, «semejanza», «parecido». Algunos maestros antiguos pensaron que eran dos cosas distintas, una que se perdió en la caída y otra que permaneció. Hoy la mayoría de los intérpretes ve en ellas una sola idea dicha dos veces, al estilo hebreo: el ser humano se parece a Dios y lo representa.',
        { h: 'Tres maneras de entenderla' },
        'El esquema muestra las tres respuestas que la iglesia ha dado. La primera mira lo que el ser humano es: razón, voluntad libre, conciencia moral, capacidad de amar, crear y adorar. La segunda mira su relación: solo el ser humano fue hecho para conocer a Dios y hablar con Él, y para vivir en comunión con otros, «varón y hembra». La tercera mira su tarea: en el mundo antiguo un rey ponía estatuas suyas en las provincias para mostrar quién gobernaba; Dios puso al ser humano en la tierra para que la gobierne en su nombre (Gn 1:28). Las tres están en el texto, y se complementan.',
        { h: '¿Se perdió en la caída?' },
        'Después del pecado, la Biblia sigue llamando al ser humano imagen de Dios. Por eso el homicidio es tan grave: «porque a imagen de Dios es hecho el hombre» (Gn 9:6). Santiago reprende a los que maldicen a los hombres, «que están hechos a la semejanza de Dios» (Stg 3:9). La imagen no se perdió, pero quedó dañada, como un espejo quebrado que todavía refleja, pero deformado. Por eso el Nuevo Testamento habla de renovarla: el creyente se reviste del nuevo hombre, «creado según Dios en la justicia y santidad de la verdad» (Ef 4:24), que «conforme a la imagen del que lo creó se va renovando» (Col 3:10).',
        { posturas: {
          titulo: '¿Qué quedó de la imagen después de la caída?',
          a: { n: 'Quedó dañada en todo, pero no destruida', t: 'El ser humano sigue teniendo razón, conciencia, voluntad y dignidad, y sigue siendo responsable ante Dios (Gn 9:6; Stg 3:9). Pero el pecado alcanzó todas esas facultades: la mente se oscureció, la voluntad se inclinó al mal y la relación con Dios se rompió. En Cristo, la imagen se restaura.' },
          b: { n: 'Se distingue lo que quedó de lo que se perdió', t: 'Desde Ireneo, algunos distinguen la imagen (la naturaleza racional, que permanece) de la semejanza (la justicia original, que se perdió). La tradición católica todavía usa esta distinción. La mayoría de los evangélicos piensa que el hebreo no la permite, porque Génesis 5:3 usa las dos palabras para lo mismo.' },
          c: 'Las dos lecturas coinciden en lo esencial: todo ser humano, aun caído, tiene la dignidad de la imagen de Dios, y solo en Cristo esa imagen vuelve a reflejar a Dios como Él quiso.'
        } }
      ],
      pensar: 'Si cada persona que ves hoy lleva la imagen de Dios, aunque dañada, ¿cómo debería cambiar tu manera de hablar de los demás, incluso de los que te hacen mal?'
    },
    {
      id: 'varon-hembra', n: 'Varón y hembra los creó', ref: 'Génesis 1:27; 2:18-24; Mateo 19:4-6; 1 Corintios 11:11-12; Gálatas 3:28; 1 Pedro 3:7',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/19/4-6', ref: 'Mateo 19:4-6' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que Génesis 1 y 2 enseñan sobre varón y mujer',
          cab: ['Enseñanza', 'Texto'],
          filas: [
            ['Los dos son imagen de Dios, con igual dignidad', 'Gn 1:27; 5:1-2'],
            ['Los dos reciben la bendición y la tarea', 'Gn 1:28'],
            ['La soledad del varón «no es buena»', 'Gn 2:18'],
            ['La mujer es «ayuda idónea»: una ayuda que le corresponde', 'Gn 2:18-20'],
            ['El matrimonio une a un varón y una mujer en «una sola carne»', 'Gn 2:24; Mt 19:4-6'],
            ['Se necesitan el uno al otro, y todo procede de Dios', '1 Co 11:11-12'],
            ['Son coherederos de la gracia de la vida', '1 P 3:7'],
          ],
          nota: 'La diferencia entre varón y mujer es parte del diseño bueno de Dios, no un defecto ni una amenaza.'
        } }
      ],
      texto: [
        'La primera vez que la Biblia habla de la imagen de Dios, añade en seguida: «varón y hembra los creó» (Gn 1:27). Ser varón o ser mujer no es un detalle secundario de lo que somos: es una de las dos maneras en que Dios quiso que su imagen existiera en el mundo.',
        { h: 'Igual dignidad' },
        'En muchas culturas antiguas, la mujer valía menos que el varón. Génesis va contra esa corriente: los dos son imagen de Dios, los dos reciben la bendición y la tarea de llenar y gobernar la tierra (Gn 1:28). Génesis 5:2 lo repite: «Varón y hembra los creó; y los bendijo, y llamó el nombre de ellos Adán». Pedro llama a las esposas «coherederas de la gracia de la vida» (1 P 3:7), y Pablo enseña que en Cristo «no hay varón ni mujer» en cuanto al acceso a la salvación: «todos vosotros sois uno en Cristo Jesús» (Gá 3:28).',
        { h: 'Diferentes y complementarios' },
        'Igual dignidad no significa que sean lo mismo. Génesis 2 cuenta que Dios vio que la soledad del hombre no era buena y le hizo «ayuda idónea» (Gn 2:18). La palabra «ayuda», ézer, se usa casi siempre para Dios mismo, que es la ayuda de Israel: no significa inferioridad. «Idónea» quiere decir que le corresponde, que está frente a él como su igual. La estación «Ayuda idónea» de La creación y los orígenes la estudia con detalle. Pablo lo resume: «ni el varón es sin la mujer, ni la mujer sin el varón… pero todo procede de Dios» (1 Co 11:11-12).',
        { h: 'El matrimonio según el principio' },
        'Cuando le preguntaron sobre el divorcio, Jesús volvió al principio: «el que los hizo al principio, varón y hembra los hizo», y por eso los dos se unen y «serán una sola carne» (Mt 19:4-5). El matrimonio, según la enseñanza de Jesús, es la unión de un varón y una mujer, para toda la vida. Pablo ve en él una imagen de algo más grande: la unión de Cristo con su iglesia (Ef 5:31-32).',
        'Vivimos en una época que discute qué significa ser varón o mujer, y muchas personas sufren confusión y dolor en esta área. La iglesia no responde con desprecio. Afirma con claridad el diseño de Dios y, a la vez, recibe con amor a toda persona, porque toda persona lleva la imagen de Dios y es amada por Él. La misma gracia que nos alcanzó a nosotros está disponible para todos.',
        { ir: { t: 'Ver «Ayuda idónea: la creación de la mujer» en La creación y los orígenes', a: '../../creacion-y-origenes/#eden/4' } }
      ],
      pensar: '¿Ves en las personas del otro sexo a iguales en dignidad, con quienes Dios quiere que te complementes, o a rivales o inferiores? ¿Qué actitud tuya necesita cambiar?'
    },
    {
      id: 'humanidad', n: 'Una sola humanidad', ref: 'Hechos 17:24-28; Génesis 3:20; Malaquías 2:10; Apocalipsis 7:9-10; Gálatas 3:28',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@hch/17/24-28', ref: 'Hechos 17:24-28' },
        { tipo: 'cita', titulo: 'La meta', texto: '@@ap/7/9-10', ref: 'Apocalipsis 7:9-10' }
      ],
      texto: [
        'En Atenas, ante filósofos que se creían superiores a los demás pueblos, Pablo anunció que Dios «de una sangre ha hecho todo el linaje de los hombres, para que habiten sobre toda la faz de la tierra» (Hch 17:26). Todos los pueblos de la tierra forman una sola familia.',
        { h: 'Todos venimos de Adán y Eva' },
        'Génesis dice que Eva fue llamada así «por cuanto ella era madre de todos los vivientes» (Gn 3:20). No hay pueblos que vengan de otro origen, ni razas creadas aparte. La tabla de las naciones de Génesis 10 presenta a todos los pueblos conocidos como descendientes de Noé, y la genealogía de Lucas llega hasta «Adán, hijo de Dios» (Lc 3:38). Malaquías pregunta: «¿No tenemos todos un mismo padre? ¿No nos ha creado un mismo Dios?» (Mal 2:10).',
        { h: 'Una verdad contra el racismo' },
        'Esta enseñanza tiene consecuencias muy concretas. Si todos venimos de una sola sangre, ningún pueblo es superior a otro, y ningún color de piel, idioma o cultura vuelve a una persona menos humana. El racismo es pecado: niega la verdad de la creación y desprecia la imagen de Dios en el otro. La historia muestra lo que pasa cuando se olvida. Durante siglos, hubo quienes usaron mal la Biblia para justificar la esclavitud de los africanos o el despojo de los pueblos originarios de América. La estación «Sem, Cam y Jafet» de La creación y los orígenes explica por qué la llamada «maldición de Cam» no enseña eso.',
        'Pedro tuvo que aprender esta lección en casa de Cornelio: «En verdad comprendo que Dios no hace acepción de personas, sino que en toda nación se agrada del que le teme y hace justicia» (Hch 10:34-35). El evangelio no borra las culturas, pero sí derriba los muros entre ellas.',
        { h: 'De todas naciones y lenguas' },
        'La Biblia termina con la misma humanidad, ahora reunida. Juan vio «una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas» (Ap 7:9), delante del trono del Cordero. La diversidad de los pueblos no desaparece en el cielo: se convierte en un solo coro de adoración. Lo que comenzó en una pareja termina en una familia redimida de toda la tierra.',
        { ir: { t: 'Ver «Sem, Cam y Jafet» en La creación y los orígenes', a: '../../creacion-y-origenes/#babel/1' } },
        { ejercicio: {
          pregunta: '¿Qué consecuencia saca la Biblia de que Dios hizo de una sangre a todo el linaje humano?',
          opciones: [
            { t: 'Que ningún pueblo es superior a otro y que despreciar a alguien por su origen es pecado.', ok: true, por_que: 'Correcto: todos llevan la imagen de Dios y vienen de un mismo origen; Dios no hace acepción de personas.' },
            { t: 'Que todas las culturas deben volverse iguales y dejar sus costumbres.', ok: false, por_que: 'Apocalipsis muestra a los redimidos «de todas naciones y lenguas»: la diversidad permanece, sin muros.' },
            { t: 'Que algunos pueblos descienden de Adán y otros fueron creados aparte.', ok: false, por_que: 'La Biblia enseña lo contrario: Eva es madre de todos los vivientes y todos vienen de una sangre.' }
          ],
          explicacion: 'La unidad de la raza humana es la base bíblica de la dignidad igual de todos los pueblos.'
        } }
      ],
      pensar: '¿Hay algún grupo de personas (por su origen, su país, su color o su forma de hablar) al que tratas, aunque sea en tu mente, como inferior? ¿Qué te pide Hechos 17:26?'
    },
    {
      id: 'dignidad', n: 'La dignidad de toda vida humana', ref: 'Génesis 9:6; Éxodo 20:13; Salmos 139:13-16; Jeremías 1:5; Proverbios 14:31; 31:8; Mateo 25:40',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@sal/139/13-16', ref: 'Salmos 139:13-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La vida humana en todas sus etapas',
          cab: ['Etapa o situación', 'Lo que dice la Escritura'],
          filas: [
            ['Antes de nacer', 'Dios forma y conoce al niño en el vientre (Sal 139:13-16; Jer 1:5; Lc 1:41-44)'],
            ['La niñez', 'Los hijos son herencia de Jehová (Sal 127:3); Jesús recibe a los niños (Mr 10:14)'],
            ['La pobreza', 'El que oprime al pobre afrenta a su Hacedor (Pr 14:31)'],
            ['La enfermedad y la discapacidad', 'Jesús toca y sana a los que otros apartaban (Mr 1:41; Lc 14:13)'],
            ['El extranjero', 'Amarlo como a uno mismo (Lv 19:34)'],
            ['La vejez', 'Honrar al anciano (Lv 19:32); Dios sostiene hasta la vejez (Is 46:4)'],
            ['El final de la vida', 'La vida y la muerte están en manos de Dios (Dt 32:39; Job 1:21)'],
          ],
          nota: 'La dignidad no depende de la edad, la salud, la utilidad ni la riqueza: viene de la imagen de Dios.'
        } }
      ],
      texto: [
        'Después del diluvio, Dios estableció el valor de la vida humana con una razón que no cambia: «porque a imagen de Dios es hecho el hombre» (Gn 9:6). El mandamiento «No matarás» (Éx 20:13) protege esa imagen. Una vida humana vale, no por lo que produce ni por lo que otros opinan de ella, sino porque Dios la hizo para sí.',
        { h: 'Antes de nacer' },
        'El Salmo 139 es una oración de asombro: «tú formaste mis entrañas; Tú me hiciste en el vientre de mi madre» (Sal 139:13), y añade: «Mi embrión vieron tus ojos» (Sal 139:16). A Jeremías, Dios le dijo: «Antes que te formase en el vientre te conocí» (Jer 1:5). Y Juan el Bautista saltó de alegría en el vientre de Elisabet al llegar María (Lc 1:44). Por eso los cristianos, desde los primeros siglos, han rechazado el aborto: la vida que crece en el vientre es una vida humana que Dios conoce. La iglesia también acompaña con amor a las madres en situaciones difíciles, y anuncia perdón completo a quienes han pasado por un aborto y se acercan a Cristo con dolor: en Él hay restauración, no condenación.',
        { h: 'Hasta el final' },
        'La misma dignidad acompaña a la persona enferma, anciana o con una discapacidad. Provocar deliberadamente la muerte de alguien para terminar su sufrimiento, lo que se conoce como eutanasia o suicidio asistido, quita a Dios lo que solo a Él le pertenece. Esto no obliga a prolongar la vida a cualquier precio: aceptar que la muerte se acerca, y aliviar el dolor con cuidados médicos, no es lo mismo que causarla. El llamado de la iglesia es a acompañar, aliviar y consolar, para que nadie sienta que su vida ya no vale.',
        { h: 'Defender al débil' },
        'La dignidad de la vida no se agota en dos temas. Proverbios dice que «El que oprime al pobre afrenta a su Hacedor» (Pr 14:31) y manda: «Abre tu boca por el mudo En el juicio de todos los desvalidos» (Pr 31:8). El salmista pide hacer justicia «al afligido y al menesteroso» (Sal 82:3). Jesús se identificó con el hambriento, el extranjero, el enfermo y el preso: «en cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis» (Mt 25:40). Defender la vida es defender a todos los débiles.'
      ],
      pensar: '¿Hay alguna persona cerca de ti (un anciano, un enfermo, un niño, un extranjero) que la sociedad trata como si valiera menos? ¿Qué puedes hacer esta semana para honrar en ella la imagen de Dios?'
    },
    {
      id: 'senorio', n: 'Trabajo, descanso y señorío', ref: 'Génesis 1:28; 2:15; Éxodo 20:9-11; Marcos 2:27; Colosenses 3:23; Efesios 4:28',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@gn/2/15', ref: 'Génesis 2:15' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El trabajo antes y después de la caída',
          cab: ['Antes de la caída', 'Después de la caída', 'En Cristo'],
          filas: [
            ['Un encargo bueno de Dios (Gn 2:15)', 'Con dolor y sudor (Gn 3:17-19)', 'Hecho «como para el Señor» (Col 3:23)'],
            ['Gobernar en nombre de Dios (Gn 1:28)', 'El dominio se vuelve explotación', 'Mayordomos de lo que es de Dios (1 Co 4:2)'],
            ['Trabajo y reposo (Gn 2:2-3)', 'Trabajo sin descanso o pereza', 'Descanso en Cristo (Mt 11:28; He 4:9-10)'],
          ],
          nota: 'El trabajo no es castigo: el castigo fue la fatiga y la frustración que el pecado le añadió.'
        } }
      ],
      texto: [
        'La primera tarea que Dios dio al ser humano fue gobernar: «llenad la tierra, y sojuzgadla, y señoread» (Gn 1:28). La segunda fue cuidar: Dios puso al hombre en el huerto «para que lo labrara y lo guardase» (Gn 2:15). Ser imagen de Dios incluye trabajar como Él trabaja: creando orden, haciendo crecer la vida y cuidando lo que se nos confió.',
        { h: 'El trabajo es bueno' },
        'Mucha gente piensa que el trabajo es consecuencia del pecado. La Biblia dice otra cosa: Adán ya trabajaba en el Edén, antes de la caída. Lo que el pecado trajo fue la fatiga, la frustración y la tierra que produce «espinos y cardos» (Gn 3:18). El trabajo honesto sigue siendo un regalo: «No hay cosa mejor para el hombre sino que coma y beba, y que su alma se alegre en su trabajo» (Ec 2:24). Por eso Pablo manda al que robaba que trabaje con sus manos, «para que tenga qué compartir con el que padece necesidad» (Ef 4:28), y a todos les pide: «todo lo que hagáis, hacedlo de corazón, como para el Señor» (Col 3:23).',
        { h: 'Señorear no es explotar' },
        'Dios dio al ser humano autoridad sobre la tierra, pero una autoridad de mayordomo, no de dueño. La tierra sigue siendo del Señor (Sal 24:1). Señorear como Dios señorea significa gobernar para el bien de lo gobernado. La explotación sin medida de la tierra, de los animales o de otras personas es una deformación de la imagen de Dios, no su expresión. La estación «Mayordomos de la creación» de La creación y los orígenes desarrolla este tema.',
        { h: 'También el descanso' },
        'Dios trabajó seis días y reposó el séptimo, y lo bendijo (Gn 2:2-3). En la ley, el descanso semanal alcanzaba a todos: hijos, siervos, animales y extranjeros (Éx 20:10). Jesús recordó que «El día de reposo fue hecho por causa del hombre» (Mr 2:27). El ser humano no es una máquina: fue hecho para trabajar y para descansar, y en el descanso reconoce que su vida no depende solo de su esfuerzo, sino de Dios. Quien nunca descansa, y quien nunca trabaja, desfiguran por igual la imagen de Dios.',
        { ir: { t: 'Ver «Mayordomos de la creación» en La creación y los orígenes', a: '../../creacion-y-origenes/#esperanza/2' } }
      ],
      pensar: '¿Ves tu trabajo diario (en casa, en la empresa, en los estudios) como una manera de servir a Dios? ¿Y tu descanso, como un acto de confianza en Él?'
    },
    {
      id: 'cristo-imagen', n: 'Cristo, la imagen perfecta', ref: 'Colosenses 1:15; Hebreos 1:3; Juan 14:9; Romanos 8:29; 2 Corintios 3:18; 1 Juan 3:2',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2co/3/18', ref: '2 Corintios 3:18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'De Adán a Cristo: la imagen restaurada',
          cab: ['', 'Texto'],
          filas: [
            ['Creados a imagen de Dios', 'Gn 1:27'],
            ['La imagen dañada por el pecado', 'Ro 3:23'],
            ['Cristo es «la imagen del Dios invisible»', 'Col 1:15; He 1:3'],
            ['El creyente se va renovando a esa imagen', '2 Co 3:18; Col 3:10'],
            ['Dios nos predestinó a ser conformes a la imagen de su Hijo', 'Ro 8:29'],
            ['Cuando Él se manifieste, seremos semejantes a Él', '1 Jn 3:2'],
          ],
          nota: 'La imagen de Dios no es solo el punto de partida de la Biblia: es también su meta.'
        } }
      ],
      texto: [
        'Si quieres ver cómo es la imagen de Dios sin daño, mira a Jesús. Pablo lo llama «la imagen del Dios invisible» (Col 1:15), y Hebreos dice que es «el resplandor de su gloria, y la imagen misma de su sustancia» (He 1:3). Adán fue creado a imagen de Dios; Cristo es la imagen de Dios.',
        { h: 'Dios y hombre verdadero' },
        'Jesús es imagen de Dios en dos sentidos. Como Hijo eterno, es Dios mismo, y por eso pudo decir: «El que me ha visto a mí, ha visto al Padre» (Jn 14:9). Y como hombre verdadero, vivió la vida humana como Dios la quiso desde el principio: obediente, sin pecado, lleno del Espíritu, amando a Dios con todo su ser y al prójimo como a sí mismo. Lo que Adán debía ser y no fue, Cristo lo fue. La ruta «La encarnación» de La persona y obra de Cristo estudia su verdadera humanidad.',
        { h: 'La meta de la salvación' },
        'Dios no solo quiere perdonarnos: quiere hacernos semejantes a su Hijo. Pablo escribe que Dios nos predestinó «para que fuesen hechos conformes a la imagen de su Hijo» (Ro 8:29). Eso comienza ahora: «nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor» (2 Co 3:18). La santificación es el Espíritu Santo restaurando en nosotros, poco a poco, la imagen que el pecado dañó.',
        'Y terminará cuando Cristo vuelva: «sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es» (1 Jn 3:2). La ruta VII de este recurso, «De la caída a la redención», vuelve sobre esta esperanza.',
        { h: 'Lo que viene en este recurso' },
        'Esta primera ruta mostró la grandeza del ser humano. La segunda estudia de qué está hecho: cuerpo, alma y espíritu. La tercera cuenta cómo esa criatura gloriosa cayó, y las rutas IV a VI explican qué es el pecado, cómo afecta a toda la humanidad y qué consecuencias trae. Las dos últimas muestran la respuesta de Dios y los textos más difíciles.',
        { ir: { t: 'Ver «Verdadero hombre» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#encarnacion/4' } }
      ],
      pensar: '¿En qué aspecto de tu carácter te gustaría parecerte más a Jesús? Pide al Espíritu Santo que siga su obra de transformarte «de gloria en gloria».'
    }
  ];

  /* ---------------- II. Cuerpo, alma y espíritu ---------------- */
  const cuerpo = [
    {
      id: 'palabras', n: 'Las palabras de la Biblia sobre el ser humano', ref: 'Génesis 2:7; Deuteronomio 6:5; Salmos 42:1-2; Proverbios 4:23; Marcos 12:30; Romanos 7:18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Seis palabras clave en hebreo y en griego',
          cab: ['Hebreo', 'Griego', 'RV 1960', 'Qué destaca'],
          filas: [
            ['נֶפֶשׁ néfesh', 'ψυχή psyjé', 'alma, vida, ser', 'La persona viva, con sus deseos y emociones (Gn 2:7; Sal 42:2)'],
            ['רוּחַ rúaj', 'πνεῦμα pnéuma', 'espíritu, viento, aliento', 'La vida que viene de Dios; lo que se relaciona con Él (Ec 12:7; Ro 8:16)'],
            ['לֵב lev', 'καρδία kardía', 'corazón', 'El centro de la persona: pensar, sentir y decidir (Pr 4:23)'],
            ['בָּשָׂר basar', 'σάρξ sarx', 'carne', 'El cuerpo frágil; en Pablo, también la naturaleza caída (Ro 7:18)'],
            ['—', 'σῶμα sóma', 'cuerpo', 'El cuerpo, que será resucitado (1 Co 15:44)'],
            ['—', 'νοῦς nus', 'mente, entendimiento', 'La capacidad de pensar y juzgar (Ro 12:2)'],
          ],
          nota: 'Estas palabras no son piezas separadas: cada una mira a la persona entera desde un ángulo distinto.'
        } },
        { tipo: 'hebreo', titulo: 'Génesis 2:7', ref: 'Génesis 2:7', he: 'וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה׃', tr: 'vayhí haadam lenéfesh jayá.',
          palabras: [
            { he: 'וַיְהִי', tr: 'vayhí', es: 'y fue' },
            { he: 'הָאָדָם', tr: 'haadam', es: 'el hombre' },
            { he: 'לְנֶפֶשׁ', tr: 'lenéfesh', es: 'un ser (néfesh)' },
            { he: 'חַיָּה', tr: 'jayá', es: 'viviente' }
          ],
          rv: 'y fue el hombre un ser viviente.' }
      ],
      texto: [
        'Cuando hoy hablamos del «alma», solemos pensar en algo invisible que vive dentro del cuerpo. Pero la Biblia usa sus palabras de otra manera, y conviene conocerlas antes de preguntar de qué está hecho el ser humano.',
        { h: 'Néfesh: un ser viviente' },
        'Génesis 2:7 cuenta que Dios formó al hombre del polvo, sopló en su nariz aliento de vida, «y fue el hombre un ser viviente». La pestaña de hebreo muestra que «ser viviente» es néfesh jayá. El texto no dice que el hombre recibió una néfesh, sino que llegó a ser una néfesh. La palabra, que la RV 1960 traduce a menudo «alma», muchas veces significa la persona entera y viva, con sus deseos: «Mi alma tiene sed de Dios» (Sal 42:2) quiere decir «yo tengo sed de Dios, con todo mi ser».',
        { h: 'Rúaj, lev y basar' },
        'Rúaj significa viento, aliento y espíritu: la vida que viene de Dios y vuelve a Él (Ec 12:7). Lev, el corazón, no es solo el lugar de los sentimientos, como en español, sino el centro de toda la persona, donde se piensa, se siente y se decide; por eso: «Sobre toda cosa guardada, guarda tu corazón; Porque de él mana la vida» (Pr 4:23). Basar, la carne, es el cuerpo con su fragilidad.',
        { h: 'En el Nuevo Testamento' },
        'El griego tiene palabras parecidas: psyjé (alma), pnéuma (espíritu), kardía (corazón), nus (mente) y dos palabras para el cuerpo: sóma, el cuerpo como tal, que Dios creó y resucitará, y sarx, la carne. Pablo usa sarx con un sentido especial: no el cuerpo, sino la naturaleza humana inclinada al pecado. Cuando dice «en mí, esto es, en mi carne, no mora el bien» (Ro 7:18), no está despreciando el cuerpo, sino hablando del pecado que habita en nosotros. Confundir estos dos sentidos ha llevado a muchos a pensar, sin razón, que el cuerpo es malo.',
        'Jesús resumió la ley con varias de estas palabras juntas: amar a Dios «con todo tu corazón, y con toda tu alma, y con toda tu mente y con todas tus fuerzas» (Mr 12:30). No enumera piezas para separarlas, sino que pide el ser entero. La ruta «Palabras clave de la fe» del recurso de vocabulario hebreo estudia rúaj y néfesh con más detalle.',
        { ir: { t: 'Ver «Espíritu y alma: rúaj y néfesh» en Vocabulario y gramática del hebreo', a: '../../gramatica-hebrea/#palabras/6' } }
      ],
      pensar: 'Si «corazón» en la Biblia incluye lo que piensas y lo que decides, no solo lo que sientes, ¿qué significa para ti hoy «guardar tu corazón»?'
    },
    {
      id: 'partes', n: '¿Dos o tres partes?', ref: '1 Tesalonicenses 5:23; Hebreos 4:12; Mateo 10:28; Eclesiastés 12:7; 2 Corintios 7:1',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-partes.svg', alt: 'Dos diagramas lado a lado. A la izquierda, la lectura de dos partes: un círculo exterior, el cuerpo, y uno interior, el alma o espíritu. A la derecha, la lectura de tres partes: tres círculos concéntricos, el cuerpo, el alma y, en el centro, el espíritu. Abajo, lo que las dos afirman: la persona es una unidad y sigue existiendo consciente después de la muerte', pie: 'Las dos maneras de describir al ser humano que defienden los evangélicos. Las dos afirman la unidad de la persona y la vida consciente después de la muerte.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1ts/5/23', ref: '1 Tesalonicenses 5:23' }
      ],
      texto: [
        'Pablo terminó su primera carta a los tesalonicenses con una bendición: que «todo vuestro ser, espíritu, alma y cuerpo, sea guardado irreprensible para la venida de nuestro Señor Jesucristo» (1 Ts 5:23). ¿Quiere decir que el ser humano tiene tres partes? Los creyentes han respondido de dos maneras, y las dos tienen apoyo en la Escritura.',
        { posturas: {
          titulo: '¿El ser humano tiene dos partes o tres?',
          a: { n: 'Tres partes: cuerpo, alma y espíritu', t: 'Es la lectura más difundida entre los pentecostales. El cuerpo nos relaciona con el mundo; el alma (mente, emociones y voluntad) con nosotros mismos y los demás; el espíritu, con Dios. Se apoya en 1 Tesalonicenses 5:23 y en Hebreos 4:12, donde la Palabra penetra «hasta partir el alma y el espíritu» (He 4:12). Explica bien por qué el incrédulo, vivo en cuerpo y alma, está muerto espiritualmente (Ef 2:1), y por qué el creyente puede orar con su espíritu aunque su entendimiento quede sin fruto (1 Co 14:14).' },
          b: { n: 'Dos partes: cuerpo y alma (o espíritu)', t: 'Muchos teólogos evangélicos piensan que «alma» y «espíritu» son dos nombres de la misma realidad inmaterial, vista desde dos ángulos. Jesús habla de matar «el cuerpo» y «el alma» (Mt 10:28); Eclesiastés dice que el polvo vuelve a la tierra «y el espíritu vuelva a Dios que lo dio» (Ec 12:7); Pablo pide limpiarse «de toda contaminación de carne y de espíritu» (2 Co 7:1). En 1 Tesalonicenses 5:23, Pablo no estaría dividiendo al ser humano, sino diciendo «todo tu ser», como Jesús en Marcos 12:30 enumera corazón, alma, mente y fuerzas.' },
          c: 'Las Asambleas de Dios no fijan una de las dos. Lo importante es lo que comparten: el ser humano es una unidad que Dios creó; tiene una parte material y otra inmaterial; sigue existiendo consciente después de la muerte; y será resucitado en cuerpo. Las dos rechazan que el alma sea solo el funcionamiento del cerebro, y las dos rechazan que el cuerpo sea malo o descartable.'
        } },
        { h: 'Lo que sí es claro' },
        'Más allá del número, la Escritura enseña con claridad tres cosas. Primero, que el ser humano no es solo materia: Jesús advirtió que hay quienes «matan el cuerpo, mas el alma no pueden matar» (Mt 10:28). Segundo, que la persona es una unidad, y lo que pasa en el cuerpo afecta al alma y al revés: el dolor, el cansancio y la enfermedad tocan la fe, y la culpa y la tristeza tocan la salud (Sal 32:3-4). Tercero, que Dios quiere salvar y santificar al ser humano completo, no solo «su alma»: el Dios de paz nos santifica «por completo».',
        { ejercicio: {
          pregunta: '¿En qué coinciden las dos lecturas sobre las partes del ser humano?',
          opciones: [
            { t: 'En que la persona es una unidad, tiene una parte inmaterial que sigue consciente después de la muerte y resucitará en cuerpo.', ok: true, por_que: 'Correcto: ese es el terreno común de los evangélicos, sea cual sea el número de partes.' },
            { t: 'En que el cuerpo es una cárcel del alma y no tiene importancia para Dios.', ok: false, por_que: 'Ninguna de las dos lo enseña: el cuerpo es creación de Dios, templo del Espíritu y será resucitado.' },
            { t: 'En que el alma muere con el cuerpo y no existe hasta la resurrección.', ok: false, por_que: 'Las dos afirman la existencia consciente después de la muerte (Lc 23:43; Fil 1:23).' }
          ],
          explicacion: 'La pregunta por el número de partes es secundaria; la unidad y el destino eterno de la persona no lo son.'
        } }
      ],
      pensar: '¿Cuidas por igual tu vida espiritual, tu mente y tu cuerpo, o descuidas alguno de ellos? ¿Cuál necesita hoy más atención delante de Dios?'
    },
    {
      id: 'corazon', n: 'Corazón, mente y conciencia', ref: 'Proverbios 4:23; Jeremías 17:9-10; Romanos 2:14-15; 12:2; 1 Timoteo 1:5, 19; 4:2; Hebreos 9:14',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@ro/2/14-15', ref: 'Romanos 2:14-15' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo describe la Biblia la conciencia',
          cab: ['La conciencia puede ser…', 'Texto'],
          filas: [
            ['Buena', '1 Ti 1:5; 1 P 3:16'],
            ['Débil, demasiado escrupulosa', '1 Co 8:7-12'],
            ['Contaminada', 'Tit 1:15'],
            ['Cauterizada, insensible', '1 Ti 4:2'],
            ['Limpiada por la sangre de Cristo', 'He 9:14; 10:22'],
          ],
          nota: 'La conciencia es un regalo de Dios, pero no es infalible: necesita ser formada por la Palabra.'
        } }
      ],
      texto: [
        'Todo ser humano sabe, en algún lugar dentro de sí, que hay cosas buenas y cosas malas. Puede discutir cuáles son, pero no puede librarse de la idea de que algo «debe» hacerse. La Biblia explica de dónde viene esa voz.',
        { h: 'La ley escrita en el corazón' },
        'Pablo enseña que aun los gentiles, que no tenían la ley de Moisés, muestran «la obra de la ley escrita en sus corazones, dando testimonio su conciencia, y acusándoles o defendiéndoles sus razonamientos» (Ro 2:15). La conciencia es parte de la imagen de Dios: una capacidad de juzgar lo propio a la luz de lo bueno. Por eso pueblos de todas las épocas condenan el asesinato, la traición y el robo, aunque no conozcan la Biblia. La estación «La ley escrita en el corazón», en la ruta V, vuelve sobre este tema.',
        { h: 'Una conciencia que hay que formar' },
        'Pero la conciencia no es infalible. La tabla muestra cómo la describe el Nuevo Testamento. Puede ser buena, pero también débil, que condena lo que Dios permite (1 Co 8:7); contaminada (Tit 1:15); o «cauterizada», como una piel quemada que ya no siente, de tanto haber sido desobedecida (1 Ti 4:2). Por eso no basta con decir «sigue tu corazón». El corazón humano, dice Jeremías, es «Engañoso… más que todas las cosas, y perverso» (Jer 17:9). La conciencia tiene que ser corregida y formada por la Palabra de Dios.',
        { h: 'Renovar la mente' },
        'Pablo pide: «transformaos por medio de la renovación de vuestro entendimiento» (Ro 12:2). El pecado no solo afectó lo que hacemos, sino también cómo pensamos. Por eso la vida cristiana incluye aprender a pensar de nuevo, a la luz de la Escritura. Y para la conciencia cargada de culpa, la noticia es mejor aún: la sangre de Cristo «limpiará vuestras conciencias de obras muertas para que sirváis al Dios vivo» (He 9:14). Una conciencia limpia no es la de quien nunca pecó, sino la de quien fue perdonado y vive en la luz.'
      ],
      pensar: '¿Hay algo en lo que tu conciencia te ha estado hablando y que has preferido no escuchar? ¿Y hay alguna culpa que ya confesaste, pero que todavía no dejas que la sangre de Cristo limpie?'
    },
    {
      id: 'cuerpo-bueno', n: 'El cuerpo no es malo', ref: 'Génesis 1:31; 1 Corintios 6:13-20; Romanos 12:1; 1 Timoteo 4:1-5; Colosenses 2:20-23',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@1co/6/19-20', ref: '1 Corintios 6:19-20' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos errores sobre el cuerpo',
          cab: ['Error', 'Qué dice', 'Respuesta bíblica'],
          filas: [
            ['Desprecio del cuerpo (ascetismo)', 'El cuerpo es malo; hay que castigarlo para ser espiritual', 'Lo que Dios creó es bueno (1 Ti 4:4); esos rigores no vencen la carne (Col 2:23)'],
            ['Libertinaje', 'El cuerpo no importa; lo que hago con él no toca mi alma', 'El cuerpo es para el Señor y es templo del Espíritu (1 Co 6:13, 19)'],
          ],
          nota: 'Los dos errores nacen de la misma idea griega: que solo el alma importa. La Biblia la rechaza.'
        } }
      ],
      texto: [
        'En el mundo griego en que nació la iglesia, muchos filósofos enseñaban que el cuerpo era una cárcel del alma, y que la salvación consistía en escapar de él. Esa idea entró a la iglesia más de una vez. La Biblia dice otra cosa.',
        { h: 'Creado bueno' },
        'Dios formó el cuerpo del ser humano con sus propias manos, por decirlo así, del polvo de la tierra, y al terminar su obra dijo que todo era «bueno en gran manera» (Gn 1:31). El Hijo de Dios tomó un cuerpo humano real y lo levantó de la muerte. El Espíritu Santo habita en el cuerpo del creyente: «¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros…?» (1 Co 6:19). Y la esperanza cristiana no es una eternidad sin cuerpo, sino la resurrección del cuerpo.',
        { h: 'Dos errores opuestos' },
        'De la idea de que el cuerpo es malo nacieron dos errores, que la tabla compara. Unos concluyeron que había que castigar el cuerpo: prohibir el matrimonio, ciertos alimentos o el descanso para ser más espirituales. Pablo llama a esto «doctrinas de demonios» y responde: «todo lo que Dios creó es bueno, y nada es de desecharse, si se toma con acción de gracias» (1 Ti 4:1-4). Otros concluyeron lo contrario: como el cuerpo no importa, se puede hacer con él cualquier cosa. A estos Pablo les dice que el cuerpo «no es para la fornicación, sino para el Señor» (1 Co 6:13), porque fuimos «comprados por precio» (1 Co 6:20).',
        { h: 'Glorificar a Dios en el cuerpo' },
        'Por eso la santidad cristiana incluye el cuerpo. Pablo pide: «que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios» (Ro 12:1). Eso significa pureza sexual, pero también cuidado de la salud, moderación en la comida y la bebida, descanso, y rechazo de todo lo que destruye el cuerpo, como las drogas o el abuso del alcohol. No porque el cuerpo sea un ídolo, sino porque pertenece a Dios. Y significa tratar con respeto el cuerpo de los demás: nadie tiene derecho a usar, golpear o abusar del cuerpo de otra persona, que también es creación de Dios.',
        { ir: { t: 'Ver «La resurrección» en Los últimos tiempos', a: '../../escatologia/#temas/2' } }
      ],
      pensar: '¿Tratas tu cuerpo como algo que pertenece a Dios? ¿Hay algún hábito (de comida, de descanso, de lo que miras) que necesitas presentarle hoy como sacrificio vivo?'
    },
    {
      id: 'origen-alma', n: '¿De dónde viene cada alma?', ref: 'Génesis 2:7; 5:3; Salmos 51:5; Eclesiastés 12:7; Zacarías 12:1; Hebreos 7:9-10; 12:9',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres respuestas sobre el origen del alma',
          cab: ['Respuesta', 'Qué enseña', 'Textos', 'Valoración'],
          filas: [
            ['Creacionismo', 'Dios crea directamente cada alma y la une al cuerpo en la concepción', 'Ec 12:7; Zac 12:1; He 12:9', 'Postura evangélica'],
            ['Traducianismo', 'El alma se transmite de los padres a los hijos, junto con el cuerpo', 'Gn 5:3; Sal 51:5; He 7:10', 'Postura evangélica'],
            ['Preexistencia', 'Las almas existían antes y luego entran en un cuerpo', '—', 'Rechazada por la iglesia (Orígenes; hoy los mormones)'],
          ],
          nota: 'Las dos primeras son defendibles; la tercera no tiene apoyo bíblico.'
        } }
      ],
      texto: [
        'Adán recibió el aliento de vida directamente de Dios. Pero ¿y sus descendientes? ¿Cada persona recibe un alma creada por Dios en el momento de la concepción, o la recibe de sus padres? La Biblia no responde la pregunta de manera directa, y los creyentes han dado dos respuestas.',
        { posturas: {
          titulo: '¿Dios crea cada alma o se transmite de los padres?',
          a: { n: 'Dios crea cada alma (creacionismo)', t: 'Eclesiastés dice que el espíritu vuelve «a Dios que lo dio» (Ec 12:7); Zacarías, que Dios «forma el espíritu del hombre dentro de él» (Zac 12:1); y Hebreos llama a Dios «Padre de los espíritus», a diferencia de los padres terrenales (He 12:9). Esta lectura, común entre católicos y reformados, protege la idea de que cada persona es una obra directa de Dios.' },
          b: { n: 'El alma se transmite de los padres (traducianismo)', t: 'Adán engendró a Set «a su semejanza, conforme a su imagen» (Gn 5:3), y Hebreos dice que Leví ya estaba «en los lomos» de Abraham (He 7:10). Dios descansó de crear el séptimo día (Gn 2:2), y desde entonces obra a través de lo que creó. Esta lectura, común entre luteranos y muchos evangélicos, explica bien cómo se hereda la naturaleza caída de Adán: con la persona entera, y no solo con el cuerpo.' },
          c: 'Las dos coinciden en que la persona humana, cuerpo y alma, existe desde la concepción, y en que ningún ser humano existió antes de ser concebido. Por eso las dos sostienen el valor de la vida desde el vientre. La pregunta influye en cómo se explica el pecado original (ruta V), pero no cambia lo que la Biblia afirma sobre él.'
        } },
        { h: 'Una respuesta rechazada' },
        'Hay una tercera respuesta que la iglesia rechazó: la idea de que las almas existían antes de nacer, en el cielo o en otro lugar, y luego descienden a un cuerpo. La enseñó Orígenes en el siglo III, influido por la filosofía de Platón, y fue condenada en el siglo VI. Hoy la sostienen los mormones (La Iglesia de Jesucristo de los Santos de los Últimos Días), que enseñan que todos fuimos hijos espirituales de Dios en una vida premortal. La Biblia no enseña eso. Jeremías 1:5 («Antes que te formase en el vientre te conocí») habla de que Dios conocía a Jeremías de antemano, no de que Jeremías existía.',
        { ejercicio: {
          pregunta: '¿Qué significa Jeremías 1:5, «Antes que te formase en el vientre te conocí»?',
          opciones: [
            { t: 'Que Dios conocía y tenía un propósito para Jeremías antes de que fuera concebido.', ok: true, por_que: 'Correcto: habla del conocimiento y el plan de Dios, no de una existencia previa de Jeremías.' },
            { t: 'Que Jeremías vivía en el cielo como espíritu antes de nacer.', ok: false, por_que: 'El versículo no dice que Jeremías existiera, sino que Dios lo conocía: Dios conoce lo que aún no existe (Ro 4:17).' },
            { t: 'Que solo los profetas tienen un alma creada por Dios.', ok: false, por_que: 'El texto habla del llamado de Jeremías, no de una diferencia en el origen de su alma.' }
          ],
          explicacion: 'Leer un versículo dentro de su contexto evita construir doctrinas que la Biblia no enseña.'
        } }
      ],
      pensar: 'Dios te conocía antes de que existieras. ¿Qué seguridad te da saber que tu vida no es un accidente, sino algo que Él quiso?'
    },
    {
      id: 'voluntad', n: 'Libres y responsables: la voluntad', ref: 'Génesis 2:16-17; Deuteronomio 30:19; Josué 24:15; Mateo 23:37; Juan 7:17; Romanos 14:12',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@dt/30/19-20', ref: 'Deuteronomio 30:19-20' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La libertad humana en la historia de la salvación',
          cab: ['Estado', 'La voluntad', 'Texto'],
          filas: [
            ['Creado', 'Libre para obedecer o desobedecer', 'Gn 2:16-17'],
            ['Caído', 'Inclinada al mal; no puede volverse a Dios por sí sola', 'Jn 6:44; Ro 8:7-8'],
            ['Tocado por la gracia', 'Capacitado para responder al llamado de Dios', 'Jn 12:32; Tit 2:11'],
            ['Redimido', 'Liberado para servir a la justicia', 'Ro 6:17-18; Fil 2:13'],
            ['Glorificado', 'Libre de toda inclinación al pecado', '1 Jn 3:2'],
          ],
          nota: 'La ruta V estudia cómo se relacionan la gracia de Dios y la voluntad humana.'
        } }
      ],
      texto: [
        'En el Edén, Dios dio a Adán todo el huerto y un solo límite: «mas del árbol de la ciencia del bien y del mal no comerás» (Gn 2:17). Un mandamiento solo tiene sentido si quien lo recibe puede obedecerlo o desobedecerlo. Dios creó al ser humano con voluntad libre.',
        { h: 'Escoge, pues, la vida' },
        'A lo largo de la Biblia, Dios habla al ser humano como a alguien que elige y responde por sus decisiones. Moisés puso ante Israel la vida y la muerte: «escoge, pues, la vida, para que vivas tú y tu descendencia» (Dt 30:19). Josué desafió al pueblo: «escogeos hoy a quién sirváis» (Jos 24:15). Jesús lloró sobre Jerusalén: «¡Cuántas veces quise juntar a tus hijos… y no quisiste!» (Mt 23:37). Y Pablo enseña que «cada uno de nosotros dará a Dios cuenta de sí» (Ro 14:12). Dios no trata a las personas como piezas de un juego, sino como seres responsables.',
        { h: 'Una libertad herida' },
        'Pero la libertad que tenía Adán no es la misma que tenemos nosotros. El pecado no destruyó la voluntad humana, pero la inclinó hacia el mal. El ser humano caído sigue eligiendo, pero elige según un corazón que se aparta de Dios. Jesús dijo: «Ninguno puede venir a mí, si el Padre que me envió no le trajere» (Jn 6:44). Por sí solo, nadie busca a Dios (Ro 3:11).',
        'Aquí entra la gracia. La Biblia enseña que Dios toma la iniciativa: Cristo dijo que, levantado en la cruz, atraería «a todos» a sí mismo (Jn 12:32), y la gracia de Dios «se ha manifestado para salvación a todos los hombres» (Tit 2:11). Esa gracia que va delante, que los teólogos llaman gracia preveniente, despierta al pecador y lo capacita para responder. Puede recibirla o resistirla (Hch 7:51). Cuando la recibe, no es mérito suyo: todo es gracia. Cuando la rechaza, la responsabilidad es suya. La ruta V presenta esta enseñanza junto con la lectura calvinista.',
        { h: 'La verdadera libertad' },
        'La libertad más plena no es poder elegir el mal, sino estar libre para el bien. Jesús prometió: «Así que, si el Hijo os libertare, seréis verdaderamente libres» (Jn 8:36). En el cielo, los redimidos no podrán pecar, y serán más libres que nunca.'
      ],
      pensar: '¿Hay alguna decisión que estás postergando, sabiendo lo que Dios te pide? Hoy, como Israel ante Moisés, tienes delante la vida y la muerte: escoge la vida.'
    },
    {
      id: 'morir', n: 'Al morir y en la resurrección', ref: 'Eclesiastés 12:7; Lucas 16:19-31; 23:43; 2 Corintios 5:1-8; Filipenses 1:21-23; 1 Corintios 15:42-44',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@2co/5/6-8', ref: '2 Corintios 5:6-8' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que pasa con la persona al morir',
          cab: ['', 'El creyente', 'El que no cree'],
          filas: [
            ['El cuerpo', 'Vuelve al polvo y espera la resurrección (Ec 12:7; 1 Ts 4:16)', 'Vuelve al polvo y espera la resurrección (Jn 5:28-29)'],
            ['La persona', 'Consciente, con Cristo, en el paraíso (Lc 23:43; Fil 1:23)', 'Consciente, en tormento, separada de Dios (Lc 16:23-24)'],
            ['Al final', 'Resucita con un cuerpo glorioso para vida eterna (1 Co 15:42-44)', 'Resucita para el juicio (Jn 5:29; Ap 20:12-15)'],
          ],
          nota: 'Entre la muerte y la resurrección, la Biblia habla de un «estado intermedio» consciente.'
        } }
      ],
      texto: [
        'La muerte no es parte del plan original de Dios: es consecuencia del pecado, como verá la ruta VI. Pero la Biblia enseña con claridad qué pasa con la persona cuando muere, y esa enseñanza da esperanza al creyente.',
        { h: 'El cuerpo vuelve al polvo' },
        'En la muerte, el cuerpo y la parte inmaterial de la persona se separan. Eclesiastés lo describe así: «el polvo vuelva a la tierra, como era, y el espíritu vuelva a Dios que lo dio» (Ec 12:7). El cuerpo se descompone, pero la persona no deja de existir.',
        { h: 'Con Cristo, conscientes' },
        'Al ladrón arrepentido, Jesús le prometió: «hoy estarás conmigo en el paraíso» (Lc 23:43). Pablo sabía que morir era «partir y estar con Cristo, lo cual es muchísimo mejor» (Fil 1:23), y que estar «ausentes del cuerpo» es estar «presentes al Señor» (2 Co 5:8). En la historia del rico y Lázaro, los dos están conscientes después de morir: uno consolado y otro en tormento (Lc 16:22-25). Por eso los cristianos rechazan la idea de que el alma «duerme» inconsciente hasta la resurrección, o que deja de existir. Tampoco enseña la Biblia que los muertos vuelvan a la tierra como espíritus, ni que la persona se reencarne en otro cuerpo: «está establecido para los hombres que mueran una sola vez, y después de esto el juicio» (He 9:27).',
        { h: 'El cuerpo resucitará' },
        'Pero ese estado, aunque mejor, no es el final. Pablo no quería ser «desnudado», sino «revestido» (2 Co 5:4). La esperanza cristiana es la resurrección: «Se siembra en corrupción, resucitará en incorrupción. Se siembra en deshonra, resucitará en gloria» (1 Co 15:42-43). Dios no salvará solo almas: salvará personas completas, con cuerpos glorificados, semejantes al cuerpo resucitado de Cristo (Fil 3:21). El orden de las resurrecciones y los juicios se estudia en Los últimos tiempos.',
        { ir: { t: 'Ver «Las resurrecciones» en Los últimos tiempos', a: '../../escatologia/#temas/2' } },
        { ejercicio: {
          pregunta: 'Según el Nuevo Testamento, ¿qué pasa con el creyente en el momento de morir?',
          opciones: [
            { t: 'Está consciente con Cristo, y espera la resurrección de su cuerpo.', ok: true, por_que: 'Correcto: «ausentes del cuerpo, y presentes al Señor» (2 Co 5:8), hasta la resurrección (1 Co 15).' },
            { t: 'Duerme inconsciente hasta el día de la resurrección.', ok: false, por_que: 'Jesús prometió «hoy estarás conmigo en el paraíso», y Pablo llama a la muerte estar «con Cristo».' },
            { t: 'Vuelve a nacer en otro cuerpo para seguir aprendiendo.', ok: false, por_que: 'La Biblia enseña que se muere «una sola vez, y después de esto el juicio» (He 9:27).' }
          ],
          explicacion: 'Cuando la Biblia llama «sueño» a la muerte del creyente, habla del cuerpo que descansa y despertará, no de la persona inconsciente.'
        } }
      ],
      pensar: 'Pablo podía decir que morir era ganancia. ¿Qué tendría que cambiar en tu vida para que tú también pudieras decirlo con paz?'
    }
  ];

  window.__HUMANO = { imagen, cuerpo };
})();
