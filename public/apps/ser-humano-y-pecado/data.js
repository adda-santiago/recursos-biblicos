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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cuando veo tus cielos, obra de tus dedos, La luna y las estrellas que tú formaste, Digo: ¿Qué es el hombre, para que tengas de él memoria, Y el hijo del hombre, para que lo visites? Le has hecho poco menor que los ángeles, Y lo coronaste de gloria y de honra. Le hiciste señorear sobre las obras de tus manos; Todo lo pusiste debajo de sus pies: Ovejas y bueyes, todo ello, Y asimismo las bestias del campo, Las aves de los cielos y los peces del mar; Todo cuanto pasa por los senderos del mar. ¡Oh Jehová, Señor nuestro, Cuán grande es tu nombre en toda la tierra!', ref: 'Salmos 8:3-9' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra. Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Y los bendijo Dios, y les dijo: Fructificad y multiplicaos; llenad la tierra, y sojuzgadla, y señoread en los peces del mar, en las aves de los cielos, y en todas las bestias que se mueven sobre la tierra.', ref: 'Génesis 1:26-28' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El, respondiendo, les dijo: ¿No habéis leído que el que los hizo al principio, varón y hembra los hizo, y dijo: Por esto el hombre dejará padre y madre, y se unirá a su mujer, y los dos serán una sola carne? Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.', ref: 'Mateo 19:4-6' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'El Dios que hizo el mundo y todas las cosas que en él hay, siendo Señor del cielo y de la tierra, no habita en templos hechos por manos humanas, ni es honrado por manos de hombres, como si necesitase de algo; pues él es quien da a todos vida y aliento y todas las cosas. Y de una sangre ha hecho todo el linaje de los hombres, para que habiten sobre toda la faz de la tierra; y les ha prefijado el orden de los tiempos, y los límites de su habitación; para que busquen a Dios, si en alguna manera, palpando, puedan hallarle, aunque ciertamente no está lejos de cada uno de nosotros. Porque en él vivimos, y nos movemos, y somos; como algunos de vuestros propios poetas también han dicho: Porque linaje suyo somos.', ref: 'Hechos 17:24-28' },
        { tipo: 'cita', titulo: 'La meta', texto: 'Después de esto miré, y he aquí una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas, que estaban delante del trono y en la presencia del Cordero, vestidos de ropas blancas, y con palmas en las manos; y clamaban a gran voz, diciendo: La salvación pertenece a nuestro Dios que está sentado en el trono, y al Cordero.', ref: 'Apocalipsis 7:9-10' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque tú formaste mis entrañas; Tú me hiciste en el vientre de mi madre. Te alabaré; porque formidables, maravillosas son tus obras; Estoy maravillado, Y mi alma lo sabe muy bien. No fue encubierto de ti mi cuerpo, Bien que en oculto fui formado, Y entretejido en lo más profundo de la tierra. Mi embrión vieron tus ojos, Y en tu libro estaban escritas todas aquellas cosas Que fueron luego formadas, Sin faltar una de ellas.', ref: 'Salmos 139:13-16' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase.', ref: 'Génesis 2:15' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor.', ref: '2 Corintios 3:18' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y el mismo Dios de paz os santifique por completo; y todo vuestro ser, espíritu, alma y cuerpo, sea guardado irreprensible para la venida de nuestro Señor Jesucristo.', ref: '1 Tesalonicenses 5:23' }
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque cuando los gentiles que no tienen ley, hacen por naturaleza lo que es de la ley, éstos, aunque no tengan ley, son ley para sí mismos, mostrando la obra de la ley escrita en sus corazones, dando testimonio su conciencia, y acusándoles o defendiéndoles sus razonamientos,', ref: 'Romanos 2:14-15' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros? Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios.', ref: '1 Corintios 6:19-20' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'A los cielos y a la tierra llamo por testigos hoy contra vosotros, que os he puesto delante la vida y la muerte, la bendición y la maldición; escoge, pues, la vida, para que vivas tú y tu descendencia; amando a Jehová tu Dios, atendiendo a su voz, y siguiéndole a él; porque él es vida para ti, y prolongación de tus días; a fin de que habites sobre la tierra que juró Jehová a tus padres, Abraham, Isaac y Jacob, que les había de dar.', ref: 'Deuteronomio 30:19-20' },
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
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Así que vivimos confiados siempre, y sabiendo que entre tanto que estamos en el cuerpo, estamos ausentes del Señor (porque por fe andamos, no por vista); pero confiamos, y más quisiéramos estar ausentes del cuerpo, y presentes al Señor.', ref: '2 Corintios 5:6-8' },
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
(() => {
  /* ---------------- III. La caída ----------------
     Génesis 3 se estudia aquí como doctrina. El relato completo del Edén está en La creación
     y los orígenes (ruta IV), con la que se enlaza. Adán y Eva aparecen en imágenes solo
     vestidos, después de Génesis 3:21. */
  const caida = [
    {
      id: 'prueba', n: 'La prueba del árbol', ref: 'Génesis 2:8-9, 15-17; Romanos 5:19; Oseas 6:7',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: 'img/hs-arbol.webp', alt: 'Un gran árbol frutal en medio de un huerto silencioso al atardecer, con frutos maduros que brillan con la última luz, sin personas', pie: '«Mas del árbol de la ciencia del bien y del mal no comerás» (Gn 2:17). Recreación.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase. Y mandó Jehová Dios al hombre, diciendo: De todo árbol del huerto podrás comer; mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás.', ref: 'Génesis 2:15-17' }
      ],
      texto: [
        'El Edén era un lugar de abundancia. Dios dijo a Adán: «De todo árbol del huerto podrás comer» (Gn 2:16). Había un solo árbol prohibido entre cientos de árboles permitidos. La prueba no fue una carga pesada, sino una sola señal de que el ser humano no era Dios.',
        { h: 'Un límite que hacía libre' },
        'El árbol se llamaba «de la ciencia del bien y del mal». No era que Dios quisiera mantener al ser humano ignorante. Muchos intérpretes entienden que «conocer el bien y el mal» significa decidir por uno mismo qué es bueno y qué es malo, sin depender de Dios. Comer del árbol era declararse independiente: «yo decidiré lo que está bien para mí». El límite era, en realidad, una invitación a confiar: a recibir de Dios la definición de lo bueno, como se recibe el pan.',
        { h: 'Un mandamiento con una advertencia' },
        'Dios no dejó la prueba sin explicación: «porque el día que de él comieres, ciertamente morirás» (Gn 2:17). Adán sabía lo que estaba en juego. Algunos teólogos llaman a esta relación «el pacto de obras» o «el pacto edénico», y se apoyan en Oseas 6:7: «Mas ellos, cual Adán, traspasaron el pacto». La estación «En el Edén» de Pactos y dispensaciones estudia esa relación y la dispensación de la inocencia.',
        { h: 'Adán, representante' },
        'El mandamiento fue dado a Adán antes de que Eva fuera formada (Gn 2:16-18). Por eso, aunque Eva comió primero, la Biblia atribuye la caída a Adán: «el pecado entró en el mundo por un hombre» (Ro 5:12). Adán no era solo un individuo: era la cabeza de la humanidad. Lo que él hiciera nos afectaría a todos. Pablo lo dice así: «por la desobediencia de un hombre los muchos fueron constituidos pecadores» (Ro 5:19). La ruta V estudia este misterio.',
        'La misma frase de Pablo continúa: «así también por la obediencia de uno, los muchos serán constituidos justos». Donde Adán falló en un huerto lleno de abundancia, Cristo obedeció en un desierto, con hambre, y en otro huerto, Getsemaní, con angustia de muerte.',
        { ir: { t: 'Ver «En el Edén» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#pactos/1' } }
      ],
      pensar: 'Dios te ha dado muchísimo, y te pide confiar en Él en algunas cosas que no entiendes del todo. ¿Hay algún «árbol» en tu vida, un límite que Dios puso, que te cuesta respetar?'
    },
    {
      id: 'serpiente', n: 'La serpiente y el origen del mal', ref: 'Génesis 3:1; Apocalipsis 12:9; 20:2; Juan 8:44; 2 Corintios 11:3, 14; Isaías 14:12-15; Ezequiel 28:12-17',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y fue lanzado fuera el gran dragón, la serpiente antigua, que se llama diablo y Satanás, el cual engaña al mundo entero; fue arrojado a la tierra, y sus ángeles fueron arrojados con él.', ref: 'Apocalipsis 12:9' },
        { tipo: 'cita', titulo: 'Ezequiel 28', texto: 'Hijo de hombre, levanta endechas sobre el rey de Tiro, y dile: Así ha dicho Jehová el Señor: Tú eras el sello de la perfección, lleno de sabiduría, y acabado de hermosura. En Edén, en el huerto de Dios estuviste; de toda piedra preciosa era tu vestidura; de cornerina, topacio, jaspe, crisólito, berilo y ónice; de zafiro, carbunclo, esmeralda y oro; los primores de tus tamboriles y flautas estuvieron preparados para ti en el día de tu creación. Tú, querubín grande, protector, yo te puse en el santo monte de Dios, allí estuviste; en medio de las piedras de fuego te paseabas. Perfecto eras en todos tus caminos desde el día que fuiste creado, hasta que se halló en ti maldad. A causa de la multitud de tus contrataciones fuiste lleno de iniquidad, y pecaste; por lo que yo te eché del monte de Dios, y te arrojé de entre las piedras del fuego, oh querubín protector. Se enalteció tu corazón a causa de tu hermosura, corrompiste tu sabiduría a causa de tu esplendor; yo te arrojaré por tierra; delante de los reyes te pondré para que miren en ti.', ref: 'Ezequiel 28:12-17' }
      ],
      texto: [
        'Génesis 3 comienza con una voz extraña en el huerto: «Pero la serpiente era astuta, más que todos los animales del campo» (Gn 3:1). Una serpiente que habla, que conoce el mandamiento de Dios y lo pone en duda. ¿Quién estaba detrás?',
        { h: 'La serpiente antigua' },
        'Génesis no lo dice, pero el resto de la Biblia sí. Apocalipsis llama a Satanás «la serpiente antigua, que se llama diablo y Satanás, el cual engaña al mundo entero» (Ap 12:9). Jesús dijo del diablo que «ha sido homicida desde el principio» y que «es mentiroso, y padre de mentira» (Jn 8:44): las dos cosas se cumplieron en el Edén, donde con una mentira trajo la muerte. Pablo temía que los corintios fueran engañados «como la serpiente con su astucia engañó a Eva» (2 Co 11:3). Detrás de la serpiente estaba un ser personal y malo.',
        { h: '¿De dónde vino el mal?' },
        'Si Dios creó todo «bueno en gran manera», ¿de dónde salió Satanás? La Biblia enseña que Dios no creó el mal. Creó ángeles buenos y libres, y algunos se rebelaron. Judas habla de «los ángeles que no guardaron su dignidad» (Jud 6). El pecado comenzó en una criatura que quiso ser como Dios. Dos pasajes proféticos han sido leídos, desde los primeros siglos, como descripciones de esa caída.',
        { posturas: {
          titulo: '¿Isaías 14 y Ezequiel 28 hablan de Satanás?',
          a: { n: 'Sí: detrás de los reyes se ve a Satanás', t: 'Isaías 14 habla del rey de Babilonia y Ezequiel 28 del rey de Tiro, pero usan palabras que van más allá de un hombre: el «Lucero, hijo de la mañana» que dijo «seré semejante al Altísimo» (Is 14:12-14), y un «querubín grande, protector» que estuvo «En Edén, en el huerto de Dios» y era «Perfecto… desde el día que fuiste creado, hasta que se halló en ti maldad» (Ez 28:13-15). Muchos padres de la iglesia y la enseñanza pentecostal clásica ven aquí, detrás del rey, al poder que lo inspiraba: Satanás, que cayó por orgullo (1 Ti 3:6).' },
          b: { n: 'No: son profecías sobre reyes humanos', t: 'Otros intérpretes, también conservadores, piensan que los dos pasajes son lamentos poéticos sobre reyes orgullosos, con imágenes exageradas propias de la poesía hebrea. Recuerdan que «Lucero» (en latín, «Lucifer») era un título del rey de Babilonia, no un nombre propio de Satanás, y que el Nuevo Testamento no cita estos pasajes al hablar del diablo.' },
          c: 'Las dos lecturas coinciden en lo que el Nuevo Testamento enseña con claridad: Satanás es un ser creado, que pecó, que cayó por orgullo y que será vencido (1 Ti 3:6; Jud 6; Ap 20:10). El orgullo de querer ser como Dios es la raíz del pecado, en el diablo y en el ser humano.'
        } },
        'La Biblia no satisface toda nuestra curiosidad sobre el origen del mal. Pero deja claras tres cosas: Dios no es su autor, el mal no es eterno como Dios, y su derrota ya está decidida.'
      ],
      pensar: 'El primer pecado del universo fue el orgullo de querer ser como Dios. ¿En qué áreas de tu vida quieres tener la última palabra, sin someterte a Dios?'
    },
    {
      id: 'tentacion', n: 'La tentación: duda, negación y deseo', ref: 'Génesis 3:1-6; 1 Juan 2:16; Mateo 4:1-11; Santiago 1:13-15; 2 Corintios 11:3',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-tentacion.svg', alt: 'Tabla de tres filas que compara la tentación de Eva en Génesis 3:6 (bueno para comer, agradable a los ojos, codiciable para alcanzar la sabiduría), las tres puertas de 1 Juan 2:16 (deseos de la carne, deseos de los ojos, vanagloria de la vida) y las tres tentaciones de Jesús en Mateo 4 (piedras en pan, echarse del templo, los reinos del mundo), con la respuesta de Jesús: Escrito está', pie: 'Las mismas tres puertas en el Edén, en el mundo y en el desierto. Donde Eva cayó, Jesús venció con la Palabra.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pero la serpiente era astuta, más que todos los animales del campo que Jehová Dios había hecho; la cual dijo a la mujer: ¿Conque Dios os ha dicho: No comáis de todo árbol del huerto? Y la mujer respondió a la serpiente: Del fruto de los árboles del huerto podemos comer; pero del fruto del árbol que está en medio del huerto dijo Dios: No comeréis de él, ni le tocaréis, para que no muráis. Entonces la serpiente dijo a la mujer: No moriréis; sino que sabe Dios que el día que comáis de él, serán abiertos vuestros ojos, y seréis como Dios, sabiendo el bien y el mal. Y vio la mujer que el árbol era bueno para comer, y que era agradable a los ojos, y árbol codiciable para alcanzar la sabiduría; y tomó de su fruto, y comió; y dio también a su marido, el cual comió así como ella.', ref: 'Génesis 3:1-6' }
      ],
      texto: [
        'La conversación entre la serpiente y la mujer es corta, pero muestra cómo funciona la tentación desde entonces. Tiene tres pasos.',
        { h: 'Primero, la duda' },
        'La serpiente no comenzó con una mentira, sino con una pregunta: «¿Conque Dios os ha dicho: No comáis de todo árbol del huerto?» (Gn 3:1). Exageró el mandamiento, como si Dios hubiera prohibido todo, para presentarlo como un Dios mezquino. Eva respondió bien, pero añadió algo que Dios no había dicho: «ni le tocaréis» (Gn 3:3). Cuando no conocemos con exactitud lo que Dios dijo, somos más fáciles de engañar.',
        { h: 'Después, la negación' },
        'Luego vino la mentira directa: «No moriréis» (Gn 3:4). Y una acusación contra Dios: «sabe Dios que el día que comáis de él, serán abiertos vuestros ojos, y seréis como Dios» (Gn 3:5). La serpiente sugirió que Dios no era bueno, que escondía algo, que su mandamiento era para mantenerlos abajo. Toda tentación, en el fondo, dice lo mismo: Dios no quiere tu bien; tú sabes mejor.',
        { h: 'Al final, el deseo' },
        'Entonces Eva miró el árbol con otros ojos: «vio la mujer que el árbol era bueno para comer, y que era agradable a los ojos, y árbol codiciable para alcanzar la sabiduría; y tomó de su fruto, y comió» (Gn 3:6). El esquema compara esas tres atracciones con las tres que menciona Juan: «los deseos de la carne, los deseos de los ojos, y la vanagloria de la vida» (1 Jn 2:16). Son las mismas puertas por las que el tentador llegó a Jesús en el desierto: el pan, el espectáculo y el poder (Mt 4:1-11).',
        'Santiago describe ese último paso: cada uno es tentado «cuando de su propia concupiscencia es atraído y seducido. Entonces la concupiscencia, después que ha concebido, da a luz el pecado» (Stg 1:14-15). La tentación no es pecado; ceder a ella, sí.',
        { h: 'Escrito está' },
        'Donde Eva cayó, Jesús venció. A cada tentación respondió con la Escritura: «Escrito está» (Mt 4:4, 7, 10). Fue tentado «en todo según nuestra semejanza, pero sin pecado» (He 4:15). Su victoria es nuestra esperanza, y su método es nuestro ejemplo. La ruta VII vuelve sobre la tentación y la victoria.',
        { ejercicio: {
          pregunta: '¿Cuál fue la primera estrategia de la serpiente en Génesis 3?',
          opciones: [
            { t: 'Sembrar duda sobre lo que Dios había dicho, exagerando su mandamiento.', ok: true, por_que: 'Correcto: «¿Conque Dios os ha dicho…?». Primero la duda, luego la negación, al final el deseo.' },
            { t: 'Obligar a Eva a comer por la fuerza.', ok: false, por_que: 'La serpiente no forzó a nadie: engañó. Eva y Adán eligieron.' },
            { t: 'Ofrecer a Eva una recompensa material, como oro o riquezas.', ok: false, por_que: 'La oferta fue ser «como Dios», no riquezas. La raíz de la tentación fue la autonomía.' }
          ],
          explicacion: 'Conocer bien lo que Dios dijo es la primera defensa contra la tentación.'
        } }
      ],
      pensar: '¿Cuál de las tres puertas (lo que deseas, lo que ves, lo que te hace sentir importante) es la más vulnerable en tu vida? ¿Qué texto de la Escritura puedes guardar para responder «escrito está»?'
    },
    {
      id: 'escondidos', n: 'Se escondieron', ref: 'Génesis 3:7-13; Salmos 32:1-5; Proverbios 28:13; 1 Juan 1:8-9',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: 'img/hs-huerto-tarde.webp', alt: 'Un huerto espeso al caer la tarde, con árboles altos y sombras largas, una brisa que mueve las hojas y la luz dorada que entra entre los troncos; no hay personas a la vista', pie: '«Y oyeron la voz de Jehová Dios que se paseaba en el huerto, al aire del día» (Gn 3:8). Recreación.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Entonces fueron abiertos los ojos de ambos, y conocieron que estaban desnudos; entonces cosieron hojas de higuera, y se hicieron delantales. Y oyeron la voz de Jehová Dios que se paseaba en el huerto, al aire del día; y el hombre y su mujer se escondieron de la presencia de Jehová Dios entre los árboles del huerto. Mas Jehová Dios llamó al hombre, y le dijo: ¿Dónde estás tú? Y él respondió: Oí tu voz en el huerto, y tuve miedo, porque estaba desnudo; y me escondí. Y Dios le dijo: ¿Quién te enseñó que estabas desnudo? ¿Has comido del árbol de que yo te mandé no comieses? Y el hombre respondió: La mujer que me diste por compañera me dio del árbol, y yo comí. Entonces Jehová Dios dijo a la mujer: ¿Qué es lo que has hecho? Y dijo la mujer: La serpiente me engañó, y comí.', ref: 'Génesis 3:7-13' }
      ],
      texto: [
        'La serpiente había prometido que sus ojos serían abiertos. Se cumplió, pero no como esperaban: «Entonces fueron abiertos los ojos de ambos, y conocieron que estaban desnudos» (Gn 3:7). Lo primero que vieron con sus nuevos ojos fue su propia vergüenza.',
        { h: 'Vergüenza y miedo' },
        'Antes, «estaban ambos desnudos… y no se avergonzaban» (Gn 2:25). Ahora cosieron hojas de higuera para cubrirse. La desnudez no había cambiado; había cambiado su corazón. El pecado rompió la confianza entre los dos, y cada uno quiso esconderse del otro.',
        'Y algo más grave: «el hombre y su mujer se escondieron de la presencia de Jehová Dios entre los árboles del huerto» (Gn 3:8). El Dios que antes era su gozo se volvió alguien a quien temer. Adán lo dijo: «Oí tu voz en el huerto, y tuve miedo, porque estaba desnudo; y me escondí» (Gn 3:10). Vergüenza, miedo y esconderse: los tres primeros frutos del pecado siguen siendo los mismos hoy.',
        { h: 'La cadena de la culpa' },
        'Dios hizo preguntas, no porque no supiera, sino para darles oportunidad de confesar. Pero ninguno lo hizo. Adán culpó a la mujer, y en el fondo a Dios: «La mujer que me diste por compañera me dio del árbol, y yo comí» (Gn 3:12). La mujer culpó a la serpiente: «La serpiente me engañó, y comí» (Gn 3:13). Desde entonces, el ser humano caído tiende a justificarse: la culpa siempre es de otro, de las circunstancias, de los padres, de la sociedad, de Dios.',
        { h: 'Salir de los árboles' },
        'La Biblia ofrece el camino contrario. Proverbios dice: «El que encubre sus pecados no prosperará; Mas el que los confiesa y se aparta alcanzará misericordia» (Pr 28:13). David contó lo que le pasó mientras callaba: «Mientras callé, se envejecieron mis huesos En mi gemir todo el día» (Sal 32:3); pero cuando confesó, encontró perdón (Sal 32:5). Y Juan promete: «Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9). Dios sigue llamando a los que se esconden. No para avergonzarlos, sino para cubrirlos.',
        { ir: { t: 'Ver «Del huerto al destierro» en La creación y los orígenes', a: '../../creacion-y-origenes/#eden/6' } }
      ],
      pensar: '¿Hay algo que estás escondiendo de Dios o de las personas que te aman? ¿A quién o a qué estás culpando para no reconocer tu parte? Dios te llama a salir de entre los árboles.'
    },
    {
      id: 'sentencias', n: 'Las sentencias', ref: 'Génesis 3:14-19; Romanos 8:20-22; 1 Corintios 15:21-22; Apocalipsis 22:3',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-sentencias.svg', alt: 'Cuatro bloques con las consecuencias de Génesis 3: la serpiente, maldita y derrotada; la mujer, dolor en el parto y conflicto en el matrimonio; el hombre, trabajo con fatiga y regreso al polvo; la tierra, maldita con espinos y cardos. Debajo, una franja con la gracia: la promesa de Génesis 3:15, las túnicas de pieles, y en Apocalipsis 22:3 «no habrá más maldición»', pie: 'El juicio de Génesis 3 alcanzó a todos los que participaron, pero en medio del juicio Dios anunció la salvación.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y Jehová Dios dijo a la serpiente: Por cuanto esto hiciste, maldita serás entre todas las bestias y entre todos los animales del campo; sobre tu pecho andarás, y polvo comerás todos los días de tu vida. Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar. A la mujer dijo: Multiplicaré en gran manera los dolores en tus preñeces; con dolor darás a luz los hijos; y tu deseo será para tu marido, y él se enseñoreará de ti. Y al hombre dijo: Por cuanto obedeciste a la voz de tu mujer, y comiste del árbol de que te mandé diciendo: No comerás de él; maldita será la tierra por tu causa; con dolor comerás de ella todos los días de tu vida. Espinos y cardos te producirá, y comerás plantas del campo. Con el sudor de tu rostro comerás el pan hasta que vuelvas a la tierra, porque de ella fuiste tomado; pues polvo eres, y al polvo volverás.', ref: 'Génesis 3:14-19' }
      ],
      texto: [
        'Después de las preguntas vino el juicio. Dios habló a la serpiente, a la mujer y al hombre, en el orden inverso al de las excusas. Es importante notar algo: Dios maldijo a la serpiente y a la tierra, pero no maldijo ni a Adán ni a Eva.',
        { h: 'La serpiente' },
        'A la serpiente le dijo: «maldita serás entre todas las bestias… sobre tu pecho andarás, y polvo comerás todos los días de tu vida» (Gn 3:14). Arrastrarse y comer polvo eran, en el lenguaje antiguo, imágenes de humillación y derrota. Y luego vino la promesa de su derrota final, que estudia la próxima estación.',
        { h: 'La mujer' },
        'A la mujer le anunció dolor en lo más propio de su vida: «con dolor darás a luz los hijos». Y un conflicto en la relación más cercana: «tu deseo será para tu marido, y él se enseñoreará de ti» (Gn 3:16). Muchos intérpretes ven aquí el comienzo de la lucha de poder entre los sexos: el deseo de dominar y la respuesta de dominio. No es el diseño de Dios, sino la consecuencia del pecado, que Cristo vino a sanar (Ef 5:25-33).',
        { h: 'El hombre y la tierra' },
        'Al hombre le dijo: «maldita será la tierra por tu causa; con dolor comerás de ella todos los días de tu vida» (Gn 3:17). El trabajo, que era un gozo, se volvió fatiga: «Espinos y cardos te producirá… Con el sudor de tu rostro comerás el pan hasta que vuelvas a la tierra» (Gn 3:18-19). Y la sentencia más dura: «polvo eres, y al polvo volverás». La muerte había entrado en el mundo. Pablo lo explica: «la muerte entró por un hombre» (1 Co 15:21), y la creación entera «fue sujetada a vanidad» (Ro 8:20).',
        { h: 'Un juicio justo y con esperanza' },
        'Las sentencias muestran que Dios es justo: el pecado tiene consecuencias reales, para la persona, para sus relaciones y para el mundo. Pero no son la última palabra. El mismo capítulo que anuncia el dolor anuncia también la promesa, y la Biblia termina con estas palabras sobre la nueva Jerusalén: «Y no habrá más maldición» (Ap 22:3). Lo que se perdió en Génesis 3 se recupera en Apocalipsis 22.',
        { ejercicio: {
          pregunta: '¿A quiénes maldijo Dios directamente en Génesis 3?',
          opciones: [
            { t: 'A la serpiente y a la tierra.', ok: true, por_que: 'Correcto: «maldita serás» (a la serpiente) y «maldita será la tierra por tu causa» (Gn 3:14, 17). A Adán y Eva les anunció consecuencias, pero no los maldijo.' },
            { t: 'A Adán y a Eva, para siempre.', ok: false, por_que: 'Lee Génesis 3:16-19 con atención: no hay una maldición sobre la persona del hombre ni de la mujer.' },
            { t: 'A toda la descendencia de Eva, sin esperanza.', ok: false, por_que: 'De la descendencia de Eva vendría precisamente el que heriría a la serpiente (Gn 3:15).' }
          ],
          explicacion: 'Aun en el juicio, Dios distinguió entre el tentador, que fue maldito, y los seres humanos, a quienes dejó una puerta abierta.'
        } }
      ],
      pensar: '¿Ves en tu vida o en tu familia alguna de las consecuencias de Génesis 3: la fatiga, el dolor, la lucha de poder? ¿Cómo puede Cristo empezar a sanar eso hoy?'
    },
    {
      id: 'protoevangelio', n: 'El protoevangelio', ref: 'Génesis 3:15; Gálatas 4:4; Hebreos 2:14; Romanos 16:20; 1 Juan 3:8; Apocalipsis 12:9-11',
      visual: [
        { tipo: 'hebreo', titulo: 'Génesis 3:15', ref: 'Génesis 3:15', he: 'וְאֵיבָה אָשִׁית בֵּינְךָ וּבֵין הָאִשָּׁה וּבֵין זַרְעֲךָ וּבֵין זַרְעָהּ הוּא יְשׁוּפְךָ רֹאשׁ וְאַתָּה תְּשׁוּפֶנּוּ עָקֵב׃', tr: 'Veevá ashit benjá uvén haishá, uvén zarajá uvén zarah; hu yeshufjá rosh, veatá teshufénu akev.',
          palabras: [
            { he: 'וְאֵיבָה', tr: 'veevá', es: 'y enemistad' },
            { he: 'אָשִׁית', tr: 'ashit', es: 'pondré' },
            { he: 'בֵּינְךָ', tr: 'benjá', es: 'entre ti' },
            { he: 'וּבֵין', tr: 'uvén', es: 'y entre' },
            { he: 'הָאִשָּׁה', tr: 'haishá', es: 'la mujer' },
            { he: 'וּבֵין', tr: 'uvén', es: 'y entre' },
            { he: 'זַרְעֲךָ', tr: 'zarajá', es: 'tu simiente' },
            { he: 'וּבֵין', tr: 'uvén', es: 'y entre' },
            { he: 'זַרְעָהּ', tr: 'zarah', es: 'la simiente de ella' },
            { he: 'הוּא', tr: 'hu', es: 'él' },
            { he: 'יְשׁוּפְךָ', tr: 'yeshufjá', es: 'te herirá' },
            { he: 'רֹאשׁ', tr: 'rosh', es: '(en la) cabeza' },
            { he: 'וְאַתָּה', tr: 'veatá', es: 'y tú' },
            { he: 'תְּשׁוּפֶנּוּ', tr: 'teshufénu', es: 'le herirás' },
            { he: 'עָקֵב', tr: 'akev', es: '(en el) calcañar' }
          ],
          rv: 'Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La promesa de Génesis 3:15 a lo largo de la Biblia',
          cab: ['Momento', 'Texto'],
          filas: [
            ['La promesa: la simiente de la mujer herirá a la serpiente', 'Gn 3:15'],
            ['La simiente se precisa: de Abraham, de Judá, de David', 'Gn 22:18; 49:10; 2 S 7:12'],
            ['Nacido de una virgen', 'Is 7:14; Mt 1:23'],
            ['«Nacido de mujer»', 'Gá 4:4'],
            ['En la cruz destruye al que tenía el imperio de la muerte', 'He 2:14; Col 2:15'],
            ['La iglesia participa de la victoria', 'Ro 16:20'],
            ['La serpiente antigua, lanzada al lago de fuego', 'Ap 12:9; 20:10'],
          ],
          nota: 'Por eso la iglesia antigua llamó a Génesis 3:15 el «protoevangelio»: el primer anuncio del evangelio.'
        } }
      ],
      texto: [
        'En medio del juicio a la serpiente, Dios pronunció la primera promesa de salvación de la Biblia: «Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar» (Gn 3:15). Antes de anunciar el dolor a la mujer y la muerte al hombre, Dios anunció la derrota del enemigo.',
        { h: 'Dos descendencias en guerra' },
        'La promesa habla de enemistad: entre la serpiente y la mujer, y entre la descendencia de cada una. Desde allí, la historia bíblica es la historia de esa lucha: Caín contra Abel, el faraón contra los niños hebreos, Herodes contra los niños de Belén. Pero la promesa se va concentrando en una persona: «ésta te herirá», dice la RV 1960, refiriéndose a la simiente; el hebreo dice literalmente «él te herirá». La pestaña de hebreo muestra la palabra hu, «él». Un descendiente de la mujer daría el golpe decisivo.',
        { h: 'Cabeza y calcañar' },
        'Las dos heridas no son iguales. La serpiente herirá el talón: una herida dolorosa, pero no mortal. La simiente herirá la cabeza: una herida definitiva. En la cruz se cumplieron las dos. Cristo sufrió y murió, pero resucitó; y con su muerte destruyó «al que tenía el imperio de la muerte, esto es, al diablo» (He 2:14). Juan lo resume: «Para esto apareció el Hijo de Dios, para deshacer las obras del diablo» (1 Jn 3:8).',
        { h: 'Nacido de mujer' },
        'Es notable que la promesa hable de la simiente de la mujer, y no del hombre, como era lo normal en las genealogías. Muchos intérpretes ven aquí un anuncio temprano del nacimiento virginal. Pablo usa una expresión que lo recuerda: «Dios envió a su Hijo, nacido de mujer» (Gá 4:4). Y la victoria de Cristo alcanza a su pueblo: «el Dios de paz aplastará en breve a Satanás bajo vuestros pies» (Ro 16:20).',
        'Dios no esperó a que Adán y Eva se arrepintieran para prometer la salvación. La gracia llegó antes. El evangelio no comienza en Belén, sino en el Edén.',
        { ir: { t: 'Ver «Cristo prometido» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#antes/4' } }
      ],
      pensar: 'Dios anunció la salvación en el mismo momento del pecado. ¿Qué te dice eso de cómo te mira Dios cuando fallas?'
    },
    {
      id: 'misericordia', n: 'Misericordia en el juicio', ref: 'Génesis 3:20-24; Hebreos 9:22; Apocalipsis 2:7; 22:1-2, 14',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: '../pactos-y-dispensaciones/img/eden-salida.webp', alt: 'Adán y Eva, vestidos con túnicas de pieles, salen del huerto de Edén; detrás de ellos, a la entrada, una luz intensa', pie: '«Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió» (Gn 3:21). Recreación (imagen de Pactos y dispensaciones).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y llamó Adán el nombre de su mujer, Eva, por cuanto ella era madre de todos los vivientes. Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió. Y dijo Jehová Dios: He aquí el hombre es como uno de nosotros, sabiendo el bien y el mal; ahora, pues, que no alargue su mano, y tome también del árbol de la vida, y coma, y viva para siempre. Y lo sacó Jehová del huerto del Edén, para que labrase la tierra de que fue tomado. Echó, pues, fuera al hombre, y puso al oriente del huerto de Edén querubines, y una espada encendida que se revolvía por todos lados, para guardar el camino del árbol de la vida.', ref: 'Génesis 3:20-24' }
      ],
      texto: [
        'Génesis 3 no termina con las sentencias. Los últimos versículos del capítulo muestran tres gestos de Dios que, en medio del juicio, revelan su misericordia.',
        { h: 'Un nombre de esperanza' },
        'Después de oír que volvería al polvo, Adán hizo algo sorprendente: «llamó Adán el nombre de su mujer, Eva, por cuanto ella era madre de todos los vivientes» (Gn 3:20). Eva suena en hebreo como «vida». Adán había oído la promesa de la simiente de la mujer, y creyó que la vida continuaría. Muchos ven en ese nombre el primer acto de fe después de la caída.',
        { h: 'Túnicas de pieles' },
        '«Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió» (Gn 3:21). Las hojas de higuera que ellos habían cosido no bastaban. Dios mismo los cubrió, y para hacerlo tuvo que morir un animal. Muchos intérpretes ven aquí el primer anuncio de un principio que recorre toda la Biblia: el pecado se cubre con una vida entregada, porque «sin derramamiento de sangre no se hace remisión» (He 9:22). El texto no lo explica, y conviene no forzarlo; pero el contraste es claro: lo que el ser humano hace para cubrirse no alcanza, y Dios provee lo que hace falta.',
        { h: 'Fuera del huerto, por amor' },
        'Al final, Dios sacó al hombre del Edén y puso querubines para guardar el camino al árbol de la vida (Gn 3:24). Parece solo un castigo, pero el texto da la razón: «que no alargue su mano, y tome también del árbol de la vida, y coma, y viva para siempre» (Gn 3:22). Vivir para siempre en estado de pecado habría sido una condena eterna. Dios cerró el camino al árbol para abrir, más adelante, un camino mejor.',
        { h: 'El árbol vuelve' },
        'Y lo abrió. El árbol de la vida reaparece en las últimas páginas de la Biblia, en la ciudad de Dios, con sus hojas «para la sanidad de las naciones» (Ap 22:2). Jesús promete: «Al que venciere, le daré a comer del árbol de la vida, el cual está en medio del paraíso de Dios» (Ap 2:7). Lo que Adán perdió en un huerto, Cristo lo recuperó en una cruz, y lo dará a los suyos en la nueva creación.',
        { ejercicio: {
          pregunta: '¿Por qué Dios impidió que Adán comiera del árbol de la vida después de la caída?',
          opciones: [
            { t: 'Para que no viviera para siempre en estado de pecado; el camino al árbol se abriría de nuevo por Cristo.', ok: true, por_que: 'Correcto: el texto lo explica en Génesis 3:22, y Apocalipsis 22 muestra el árbol restaurado.' },
            { t: 'Porque Dios quería que el ser humano nunca tuviera vida eterna.', ok: false, por_que: 'Apocalipsis 2:7 y 22:2 muestran lo contrario: Dios quiere dar a comer del árbol de la vida a los suyos.' },
            { t: 'Porque el árbol había quedado contaminado por la serpiente.', ok: false, por_que: 'El texto no dice eso; la razón está en el estado del ser humano, no del árbol.' }
          ],
          explicacion: 'Aun la expulsión del Edén fue un acto de misericordia: cerró un camino para abrir otro mejor.'
        } }
      ],
      pensar: 'Las hojas de higuera no alcanzaban para cubrir la vergüenza. ¿Con qué «hojas» (buenas obras, apariencias, excusas) tratas a veces de cubrirte ante Dios, en lugar de recibir lo que Él provee?'
    },
    {
      id: 'historia', n: 'Adán en el Nuevo Testamento: ¿historia o mito?', ref: 'Lucas 3:38; Mateo 19:4-6; Hechos 17:26; Romanos 5:12-19; 1 Corintios 15:21-22, 45-49; 1 Timoteo 2:13-14; Judas 14',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Adán y Eva en el Nuevo Testamento',
          cab: ['Texto', 'Lo que afirma'],
          filas: [
            ['Lc 3:38', 'La genealogía de Jesús llega hasta «Adán, hijo de Dios»'],
            ['Mt 19:4-6', 'Jesús basa el matrimonio en la creación de «varón y hembra» al principio'],
            ['Hch 17:26', 'Todos los pueblos vienen «de una sangre»'],
            ['Ro 5:12-19', 'El pecado y la muerte entraron «por un hombre»; Adán es «figura del que había de venir»'],
            ['1 Co 15:21-22, 45', '«En Adán todos mueren»; Cristo es «el postrer Adán»'],
            ['1 Co 11:8-9; 1 Ti 2:13-14', 'Pablo argumenta desde el orden de la creación y la caída'],
            ['Jud 14', 'Enoc, «séptimo desde Adán»'],
          ],
          nota: 'Jesús, Lucas, Pablo y Judas tratan a Adán como una persona real, tan histórica como Abraham o David.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque por cuanto la muerte entró por un hombre, también por un hombre la resurrección de los muertos. Porque así como en Adán todos mueren, también en Cristo todos serán vivificados.', ref: '1 Corintios 15:21-22' }
      ],
      texto: [
        'En los últimos siglos, muchos han propuesto leer Génesis 3 como un mito: una historia simbólica que describe la condición de todo ser humano, pero que no ocurrió. Adán sería «todo hombre», y la caída, algo que le pasa a cada persona. ¿Es posible leerlo así sin perder nada?',
        { h: 'Lo que dice el Nuevo Testamento' },
        'La tabla muestra cómo los autores del Nuevo Testamento hablan de Adán. Lucas pone su nombre en la misma lista que Abraham, David y José (Lc 3:23-38). Jesús fundamenta la enseñanza sobre el matrimonio en lo que Dios hizo «al principio» (Mt 19:4). Pablo construye su explicación del evangelio sobre un paralelo entre dos personas: Adán, por quien entró la muerte, y Cristo, por quien vino la vida. «Porque así como en Adán todos mueren, también en Cristo todos serán vivificados» (1 Co 15:22).',
        { h: 'Por qué importa' },
        'El argumento de Pablo depende de que los dos sean reales. Si Adán es solo un símbolo, ¿por qué no lo sería también Cristo? Si el pecado no entró «por un hombre» en un momento de la historia, entonces el mal sería parte de la naturaleza humana desde su origen, y Dios lo habría creado así. La Biblia enseña lo contrario: Dios creó al ser humano bueno, y el pecado es una intrusión, una rebelión que ocurrió en la historia y que en la historia fue vencida por Cristo.',
        'Por eso este recurso, como La creación y los orígenes, sostiene que Adán y Eva fueron personas reales, creadas directamente por Dios, de quienes desciende toda la humanidad, y que su caída fue un hecho histórico.',
        { h: 'Un relato con lenguaje propio' },
        'Afirmar que Génesis 3 cuenta hechos reales no significa negar que use un lenguaje con imágenes ricas: los árboles, la serpiente, los querubines, el polvo. Los intérpretes evangélicos discuten qué es literal y qué es figurado en algunos detalles, como el modo en que habló la serpiente. Pero esos detalles no tocan lo esencial: hubo una primera pareja, recibieron un mandamiento, desobedecieron, y por esa desobediencia el pecado y la muerte entraron en el mundo.',
        { ir: { t: 'Ver «¿Y la evolución?» en La creación y los orígenes', a: '../../creacion-y-origenes/#leer/6' } }
      ],
      pensar: 'Si la caída fue un hecho histórico, también lo fue la cruz, y también lo será la resurrección. ¿Qué seguridad te da que tu fe descanse en hechos y no en símbolos?'
    }
  ];

  /* ---------------- IV. ¿Qué es el pecado? ---------------- */
  const pecado = [
    {
      id: 'vocabulario', n: 'El vocabulario del pecado', ref: 'Salmos 32:1-2; 51:1-3; Romanos 3:23; 1 Juan 3:4; 5:17; Santiago 2:9',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Las palabras principales para «pecado»',
          cab: ['Palabra', 'Sentido básico', 'RV 1960', 'Texto'],
          filas: [
            ['חַטָּאת jatat', 'Errar el blanco', 'pecado', 'Sal 51:2; Jue 20:16'],
            ['עָוֺן avón', 'Torcer, desviarse; la culpa que queda', 'iniquidad, maldad', 'Sal 51:2; Is 53:6'],
            ['פֶּשַׁע pésha', 'Rebelarse contra una autoridad', 'rebelión, transgresión', 'Sal 51:1; Is 1:2'],
            ['ἁμαρτία hamartía', 'Errar el blanco', 'pecado', 'Ro 3:23'],
            ['παράβασις parábasis', 'Pasar por encima de un límite', 'transgresión', 'Ro 5:14; 1 Ti 2:14'],
            ['ἀνομία anomía', 'Vivir sin ley', 'infracción de la ley, iniquidad', '1 Jn 3:4'],
            ['ἀδικία adikía', 'Injusticia', 'injusticia, maldad', '1 Jn 1:9; 5:17'],
          ],
          nota: 'Cada palabra muestra un ángulo del mismo mal: fallar, torcerse y rebelarse contra Dios.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Bienaventurado aquel cuya transgresión ha sido perdonada, y cubierto su pecado. Bienaventurado el hombre a quien Jehová no culpa de iniquidad, Y en cuyo espíritu no hay engaño.', ref: 'Salmos 32:1-2' }
      ],
      texto: [
        'Hoy la palabra «pecado» se usa poco, o se usa en broma, para un postre «pecaminoso». Pero la Biblia la toma muy en serio, y tiene muchas palabras para describirlo. Conocerlas ayuda a entender qué es el pecado.',
        { h: 'Errar el blanco' },
        'La palabra más común en hebreo, jatá, y la más común en griego, hamartía, tienen un sentido básico parecido: errar el blanco, no llegar a la meta. En Jueces se usa para los honderos de Benjamín, que tiraban una piedra a un cabello «y no erraban» (Jue 20:16). Dios puso una meta para el ser humano: reflejar su gloria. «Por cuanto todos pecaron, y están destituidos de la gloria de Dios» (Ro 3:23): todos hemos errado ese blanco.',
        { h: 'Torcerse y rebelarse' },
        'Otras palabras muestran que el pecado no es solo un error inocente. Avón, «iniquidad», es lo torcido, y también la culpa que queda pegada al que lo hizo. Pésha, que la RV 1960 traduce como rebelión, es la palabra que se usaba cuando un pueblo se levantaba contra su rey (2 R 8:20). En el Salmo 32 aparecen las tres juntas: «Bienaventurado aquel cuya transgresión ha sido perdonada, y cubierto su pecado. Bienaventurado el hombre a quien Jehová no culpa de iniquidad» (Sal 32:1-2).',
        { h: 'Sin ley' },
        'En el Nuevo Testamento, Juan da una definición: «el pecado es infracción de la ley» (1 Jn 3:4). La palabra griega, anomía, significa «sin ley»: vivir como si Dios no hubiera hablado, como si cada uno pudiera hacer su propia ley. Es la misma actitud del Edén: decidir por uno mismo lo que es bueno y lo que es malo.',
        { h: 'Una definición' },
        'Reuniendo estas palabras, se puede definir el pecado como todo lo que, en lo que hacemos, decimos, pensamos o dejamos de hacer, no se conforma a la voluntad de Dios. No es solo romper una regla: es fallar en la relación con el Dios santo que nos creó. Las próximas estaciones desarrollan esta definición.',
        { ejercicio: {
          pregunta: '¿Qué muestra la palabra hebrea pésha, que la RV 1960 traduce «rebelión»?',
          opciones: [
            { t: 'Que el pecado es levantarse contra la autoridad de Dios, no solo un error.', ok: true, por_que: 'Correcto: pésha se usaba para la rebelión de un pueblo contra su rey.' },
            { t: 'Que el pecado es solo una falla sin importancia.', ok: false, por_que: 'Las palabras bíblicas muestran lo contrario: el pecado ofende a Dios y deja culpa.' },
            { t: 'Que el pecado solo existe cuando se rompe una ley escrita.', ok: false, por_que: 'El pecado es contra Dios mismo; también peca quien no conoce la ley escrita (Ro 2:12).' }
          ],
          explicacion: 'Cada palabra bíblica para el pecado muestra una cara distinta: fallar, torcerse, rebelarse y vivir sin ley.'
        } }
      ],
      pensar: '¿Sueles describir tus pecados con palabras suaves («un error», «una debilidad», «así soy»)? ¿Qué cambiaría si los llamaras como Dios los llama?'
    },
    {
      id: 'contra-dios', n: 'Contra ti solo he pecado', ref: 'Salmos 51:1-4; 2 Samuel 12:1-13; Génesis 39:9; Lucas 15:18, 21; Isaías 59:2',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: '../pactos-y-dispensaciones/img/david-natan.webp', alt: 'El profeta Natán, anciano, de pie ante el rey David en su palacio; David escucha en silencio', pie: '«Tú eres aquel hombre» (2 S 12:7). Recreación (imagen de Pactos y dispensaciones).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ten piedad de mí, oh Dios, conforme a tu misericordia; Conforme a la multitud de tus piedades borra mis rebeliones. Lávame más y más de mi maldad, Y límpiame de mi pecado. Porque yo reconozco mis rebeliones, Y mi pecado está siempre delante de mí. Contra ti, contra ti solo he pecado, Y he hecho lo malo delante de tus ojos; Para que seas reconocido justo en tu palabra, Y tenido por puro en tu juicio.', ref: 'Salmos 51:1-4' }
      ],
      texto: [
        'David cometió adulterio con Betsabé, y para ocultarlo, hizo matar a su marido, Urías. Pasó casi un año sin confesar. Entonces el profeta Natán le contó la historia de un rico que le robó al pobre su única oveja, y cuando David se indignó, Natán le dijo: «Tú eres aquel hombre» (2 S 12:7). David respondió: «Pequé contra Jehová» (2 S 12:13). El Salmo 51 es la oración que nació de esa confesión.',
        { h: 'Contra ti solo' },
        'En el salmo, David dice algo que parece extraño: «Contra ti, contra ti solo he pecado, Y he hecho lo malo delante de tus ojos» (Sal 51:4). ¿Acaso no pecó contra Betsabé, contra Urías, contra su familia y contra el pueblo? Claro que sí. Pero David entendió que, detrás de todo el daño que había hecho a otros, el pecado es ante todo una ofensa contra Dios. Lo que hace grave al pecado no es solo el daño que causa, sino a quién ofende: al Dios santo que nos creó y nos ama.',
        'José, tentado por la mujer de Potifar, respondió con la misma convicción: «¿cómo, pues, haría yo este grande mal, y pecaría contra Dios?» (Gn 39:9). Y el hijo pródigo, al volver, ensayó estas palabras: «Padre, he pecado contra el cielo y contra ti» (Lc 15:18).',
        { h: 'Por qué importa' },
        'Si el pecado fuera solo hacer daño a otros, bastaría con reparar el daño. Pero como es una ofensa contra Dios, solo Dios puede perdonarlo. Por eso los escribas tenían razón cuando dijeron: «¿Quién puede perdonar pecados, sino sólo Dios?» (Lc 5:21); su error fue no reconocer que Jesús era Dios.',
        'Esto explica también la consecuencia más grave del pecado: «vuestras iniquidades han hecho división entre vosotros y vuestro Dios» (Is 59:2). El pecado rompe la relación con Dios. La ruta VI estudia esa separación.',
        { h: 'Una oración para todos' },
        'El Salmo 51 enseña cómo responder al pecado. David no se justificó ni culpó a nadie. Apeló a la misericordia: «Ten piedad de mí, oh Dios, conforme a tu misericordia» (Sal 51:1). Reconoció su culpa: «yo reconozco mis rebeliones» (Sal 51:3). Y pidió algo más que perdón: «Crea en mí, oh Dios, un corazón limpio, Y renueva un espíritu recto dentro de mí» (Sal 51:10). El perdón limpia lo que hicimos; la nueva creación cambia lo que somos.'
      ],
      pensar: 'Cuando haces algo malo, ¿te preocupa más lo que piensen los demás o haber ofendido a Dios? Lee despacio el Salmo 51 y hazlo tu oración.'
    },
    {
      id: 'formas', n: 'De obra, de palabra, de pensamiento y de omisión', ref: 'Mateo 5:21-28; 12:36; 15:18-19; Santiago 3:2-10; 4:17; Romanos 14:23',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro formas del pecado',
          cab: ['Forma', 'Ejemplo bíblico', 'Texto'],
          filas: [
            ['De obra', 'Matar, robar, cometer adulterio', 'Éx 20:13-15; Gá 5:19-21'],
            ['De palabra', 'Mentir, maldecir, chismear, palabras ociosas', 'Stg 3:6-10; Mt 12:36; Ef 4:29'],
            ['De pensamiento', 'El enojo, la codicia, mirar para codiciar', 'Mt 5:22, 28; Ro 7:7'],
            ['De omisión', 'Saber hacer el bien y no hacerlo', 'Stg 4:17; Mt 25:42-45; Lc 10:31-32'],
          ],
          nota: 'Jesús llevó la ley del acto exterior al corazón, donde nace todo pecado (Mt 15:19).'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Oísteis que fue dicho a los antiguos: No matarás; y cualquiera que matare será culpable de juicio. Pero yo os digo que cualquiera que se enoje contra su hermano, será culpable de juicio; y cualquiera que diga: Necio, a su hermano, será culpable ante el concilio; y cualquiera que le diga: Fatuo, quedará expuesto al infierno de fuego.', ref: 'Mateo 5:21-22' }
      ],
      texto: [
        'Muchas personas creen que no son muy pecadoras, porque nunca han matado ni robado. Jesús les mostraría que el pecado es mucho más amplio de lo que pensamos.',
        { h: 'De obra y de palabra' },
        'El pecado más visible es el que se hace con las manos: robar, matar, cometer adulterio. Pero Santiago advierte que la lengua también es «un mundo de maldad» (Stg 3:6), y que con ella «bendecimos al Dios y Padre, y con ella maldecimos a los hombres» (Stg 3:9). Jesús dijo: «de toda palabra ociosa que hablen los hombres, de ella darán cuenta en el día del juicio» (Mt 12:36). La mentira, el chisme, la burla y la palabra hiriente son pecados reales.',
        { h: 'De pensamiento' },
        'En el Sermón del Monte, Jesús fue más profundo. La ley decía «No matarás», pero Él enseñó: «cualquiera que se enoje contra su hermano, será culpable de juicio» (Mt 5:22). La ley decía «No cometerás adulterio», pero Él dijo: «cualquiera que mira a una mujer para codiciarla, ya adulteró con ella en su corazón» (Mt 5:28). El pecado no comienza en las manos, sino en el corazón: «del corazón salen los malos pensamientos, los homicidios, los adulterios» (Mt 15:19). Un mal pensamiento que llega no es pecado; uno que se acoge y se alimenta, sí.',
        { h: 'De omisión' },
        'Hay un pecado que se comete sin hacer nada: «al que sabe hacer lo bueno, y no lo hace, le es pecado» (Stg 4:17). En la parábola del buen samaritano, el sacerdote y el levita no golpearon al herido; simplemente pasaron de largo (Lc 10:31-32). En el juicio de las naciones, los que fueron condenados no son acusados de lo que hicieron, sino de lo que no hicieron: «tuve hambre, y no me disteis de comer» (Mt 25:42).',
        { h: 'Todo lo que no proviene de fe' },
        'Pablo añade una frase que lo resume: «todo lo que no proviene de fe, es pecado» (Ro 14:23). Hacer algo que uno cree que desagrada a Dios, aunque en sí no sea malo, también es pecado, porque es actuar contra la propia conciencia y sin confiar en Él. Ante esta lista, nadie puede decir que no tiene pecado. Por eso el evangelio es necesario para todos.',
        { ejercicio: {
          pregunta: 'Según Jesús en Mateo 5, ¿dónde comienza el adulterio?',
          opciones: [
            { t: 'En el corazón, al mirar a alguien para codiciarlo.', ok: true, por_que: 'Correcto: «ya adulteró con ella en su corazón» (Mt 5:28). Jesús lleva la ley al corazón.' },
            { t: 'Solo en el acto físico; los pensamientos no cuentan.', ok: false, por_que: 'Jesús enseñó lo contrario: el pecado nace en el corazón (Mt 15:19).' },
            { t: 'Solo cuando otras personas se enteran.', ok: false, por_que: 'El pecado es contra Dios, que ve lo secreto, sea que otros lo sepan o no.' }
          ],
          explicacion: 'Jesús no hizo la ley más liviana, sino más profunda: Dios mira el corazón.'
        } }
      ],
      pensar: 'Revisa tu última semana con las cuatro formas del pecado. ¿En cuál hubo más fallas: obra, palabra, pensamiento u omisión? Confiésalo a Dios con sinceridad.'
    },
    {
      id: 'raiz', n: 'La raíz: incredulidad, orgullo e idolatría', ref: 'Génesis 4:6-7; Romanos 1:21-25; Hebreos 3:12; Proverbios 16:18; Jeremías 2:13; 1 Juan 5:21',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: '../creacion-y-origenes/img/cr-cain-abel.webp', alt: 'Caín y Abel junto a sus altares en un campo al atardecer; el humo del altar de Abel sube recto y Caín mira a su hermano con resentimiento', pie: '«El pecado está a la puerta; con todo esto, a ti será su deseo, y tú te enseñorearás de él» (Gn 4:7). Recreación (imagen de La creación y los orígenes).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Pues habiendo conocido a Dios, no le glorificaron como a Dios, ni le dieron gracias, sino que se envanecieron en sus razonamientos, y su necio corazón fue entenebrecido. Profesando ser sabios, se hicieron necios, y cambiaron la gloria del Dios incorruptible en semejanza de imagen de hombre corruptible, de aves, de cuadrúpedos y de reptiles. Por lo cual también Dios los entregó a la inmundicia, en las concupiscencias de sus corazones, de modo que deshonraron entre sí sus propios cuerpos, ya que cambiaron la verdad de Dios por la mentira, honrando y dando culto a las criaturas antes que al Creador, el cual es bendito por los siglos. Amén.', ref: 'Romanos 1:21-25' }
      ],
      texto: [
        'Los pecados que se ven son como los frutos de un árbol. Pero ¿cuál es la raíz? La Biblia señala tres, que en el fondo son una sola: apartarse de Dios.',
        { h: 'Incredulidad' },
        'En el Edén, todo empezó con una duda sobre la palabra de Dios y sobre su bondad. Desconfiar de Dios es la raíz del pecado. Hebreos advierte: «Mirad, hermanos, que no haya en ninguno de vosotros corazón malo de incredulidad para apartarse del Dios vivo» (He 3:12). Quien no confía en que Dios es bueno buscará su bien por otros caminos. Por eso Jesús dijo que el Espíritu convence al mundo de pecado «por cuanto no creen en mí» (Jn 16:9).',
        { h: 'Orgullo' },
        '«Seréis como Dios»: el orgullo de querer ocupar el lugar de Dios fue la tentación del Edén y, según muchos intérpretes, el pecado del diablo. «Antes del quebrantamiento es la soberbia, Y antes de la caída la altivez de espíritu» (Pr 16:18). El orgullo pone al yo en el centro: mis deseos, mi opinión, mi honra. Por eso «Dios resiste a los soberbios, y da gracia a los humildes» (Stg 4:6).',
        { h: 'Idolatría' },
        'Pablo describe cómo la humanidad, conociendo a Dios, «no le glorificaron como a Dios, ni le dieron gracias», y terminó «honrando y dando culto a las criaturas antes que al Creador» (Ro 1:21, 25). El ser humano fue hecho para adorar; si no adora a Dios, adorará otra cosa: el dinero, el placer, el éxito, una persona, su propia imagen. Jeremías lo dijo con una imagen: el pueblo dejó a Dios, «fuente de agua viva», para cavarse «cisternas rotas que no retienen agua» (Jer 2:13). Por eso Juan termina su carta: «Hijitos, guardaos de los ídolos» (1 Jn 5:21).',
        { h: 'El pecado a la puerta' },
        'Cuando Caín se enojó porque Dios no aceptó su ofrenda, Dios le advirtió: «si no hicieres bien, el pecado está a la puerta; con todo esto, a ti será su deseo, y tú te enseñorearás de él» (Gn 4:7). El pecado se presenta como una fiera agazapada, esperando entrar. Caín no lo dominó, y el resentimiento terminó en asesinato. Lo que no se arranca de raíz termina dando su fruto.'
      ],
      pensar: '¿Qué ocupa en tu corazón el lugar que solo Dios debería ocupar? ¿Qué «cisterna rota» estás cavando para buscar lo que solo Dios puede darte?'
    },
    {
      id: 'grados', n: '¿Hay pecados más graves?', ref: 'Santiago 2:10; Juan 19:11; Lucas 12:47-48; Números 15:27-31; Salmos 19:12-13; Mateo 23:23',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Todo pecado separa de Dios, pero no todo pecado es igual',
          cab: ['Verdad', 'Texto'],
          filas: [
            ['Un solo pecado basta para ser culpable ante la ley', 'Stg 2:10'],
            ['Todo pecado puede ser perdonado por la sangre de Cristo', '1 Jn 1:7'],
            ['Hay pecados por ignorancia y pecados «con soberbia»', 'Nm 15:27-30; Sal 19:12-13'],
            ['El que conoce más es más responsable', 'Lc 12:47-48'],
            ['Hay quien tiene «mayor pecado»', 'Jn 19:11'],
            ['Hay asuntos «más importantes de la ley»', 'Mt 23:23'],
            ['El daño a otros agrava el pecado', 'Mt 18:6'],
          ],
          nota: 'Equilibrio: nadie puede decir «mi pecado es pequeño», pero tampoco todos los pecados tienen las mismas consecuencias.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Aquel siervo que conociendo la voluntad de su señor, no se preparó, ni hizo conforme a su voluntad, recibirá muchos azotes. Mas el que sin conocerla hizo cosas dignas de azotes, será azotado poco; porque a todo aquel a quien se haya dado mucho, mucho se le demandará; y al que mucho se le haya confiado, más se le pedirá.', ref: 'Lucas 12:47-48' }
      ],
      texto: [
        'A veces se escucha: «para Dios, todos los pecados son iguales». ¿Es cierto? La Biblia responde con un equilibrio que vale la pena entender.',
        { h: 'Un solo pecado basta' },
        'En un sentido, sí: cualquier pecado nos hace culpables ante Dios. Santiago lo dice así: «cualquiera que guardare toda la ley, pero ofendiere en un punto, se hace culpable de todos» (Stg 2:10). La ley es como un vidrio: basta un golpe en cualquier lugar para quebrarlo. Nadie puede decir «yo solo tengo pecados pequeños» y pensar que no necesita al Salvador. Y, de la misma manera, ningún pecado es tan grande que la sangre de Cristo no pueda limpiarlo (1 Jn 1:7).',
        { h: 'Pero no todos son iguales' },
        'En otro sentido, la Biblia sí distingue grados de pecado y de responsabilidad. La ley de Moisés distinguía entre pecar «por yerro», sin intención, y pecar «con soberbia», a sabiendas y desafiando a Dios (Nm 15:27-30). David oraba por las dos cosas: «Líbrame de los que me son ocultos. Preserva también a tu siervo de las soberbias» (Sal 19:12-13). Jesús dijo a Pilato que el que lo había entregado «mayor pecado tiene» (Jn 19:11), y enseñó que el siervo que conocía la voluntad de su señor y no la hizo recibirá más azotes que el que no la conocía, «porque a todo aquel a quien se haya dado mucho, mucho se le demandará» (Lc 12:48).',
        { h: 'Qué hace más grave un pecado' },
        'Varias cosas agravan el pecado. El conocimiento: quien sabe más es más responsable. La intención: no es lo mismo caer en un momento de debilidad que planear el mal. El daño a otros: Jesús fue muy severo con quien hace tropezar a un pequeño (Mt 18:6). La posición: un líder que peca arrastra a muchos (Stg 3:1). Y la persistencia: quien vive en un pecado sin arrepentirse endurece su corazón.',
        { h: 'Para qué sirve saberlo' },
        'Este equilibrio protege de dos errores. Uno es la arrogancia del que se cree mejor que otros porque sus pecados parecen menores. El otro es la desesperación del que piensa que, si ya pecó en algo, da lo mismo pecar en todo. Los dos olvidan que todos necesitamos la misma gracia, y que esa gracia nos llama a dejar todo pecado.'
      ],
      pensar: '¿Hay algún pecado que consideras «pequeño» y por eso no te preocupas de dejarlo? ¿O alguno que te parece tan grande que dudas que Dios pueda perdonarlo?'
    },
    {
      id: 'ley', n: 'La ley que muestra el pecado', ref: 'Romanos 3:19-20; 7:7-13; Gálatas 3:19-24; Santiago 1:23-25',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '¿Qué diremos, pues? ¿La ley es pecado? En ninguna manera. Pero yo no conocí el pecado sino por la ley; porque tampoco conociera la codicia, si la ley no dijera: No codiciarás. Mas el pecado, tomando ocasión por el mandamiento, produjo en mí toda codicia; porque sin la ley el pecado está muerto. Y yo sin la ley vivía en un tiempo; pero venido el mandamiento, el pecado revivió y yo morí. Y hallé que el mismo mandamiento que era para vida, a mí me resultó para muerte; porque el pecado, tomando ocasión por el mandamiento, me engañó, y por él me mató. De manera que la ley a la verdad es santa, y el mandamiento santo, justo y bueno.', ref: 'Romanos 7:7-12' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Para qué sirve la ley frente al pecado',
          cab: ['La ley…', 'Texto'],
          filas: [
            ['Es santa, justa y buena', 'Ro 7:12'],
            ['Da a conocer el pecado', 'Ro 3:20; 7:7'],
            ['Hace que todo el mundo quede culpable ante Dios', 'Ro 3:19'],
            ['Muestra el pecado como «sobremanera pecaminoso»', 'Ro 7:13'],
            ['No puede justificar ni dar vida', 'Ro 3:20; Gá 3:21'],
            ['Es un ayo que lleva a Cristo', 'Gá 3:24'],
          ],
          nota: 'La ley es como un espejo: muestra la mancha, pero no la lava.'
        } }
      ],
      texto: [
        'Si alguien maneja de noche por una carretera sin señales, puede ir demasiado rápido sin saberlo. Cuando aparece el letrero con el límite, descubre que estaba en falta. El letrero no lo hizo culpable; le mostró que lo era. Así funciona, en parte, la ley de Dios frente al pecado.',
        { h: 'Por la ley es el conocimiento del pecado' },
        'Pablo lo explica en Romanos: «por medio de la ley es el conocimiento del pecado» (Ro 3:20). Y lo ilustra con su propia experiencia: «yo no conocí el pecado sino por la ley; porque tampoco conociera la codicia, si la ley no dijera: No codiciarás» (Ro 7:7). El décimo mandamiento es el único que no habla de una acción, sino de un deseo. Pablo, que era un fariseo irreprensible por fuera (Fil 3:6), descubrió con ese mandamiento que su corazón estaba lleno de codicia.',
        { h: 'La ley es buena; el problema es el pecado' },
        'Esto no hace mala a la ley. «De manera que la ley a la verdad es santa, y el mandamiento santo, justo y bueno» (Ro 7:12). El problema es que el pecado se aprovecha del mandamiento. Algo en el corazón caído se rebela justamente contra lo que está prohibido, como un niño al que le dicen «no toques» y entonces quiere tocar. Pablo lo dice así: «el pecado, tomando ocasión por el mandamiento, produjo en mí toda codicia» (Ro 7:8). Así la ley muestra que el pecado es «sobremanera pecaminoso» (Ro 7:13): no solo una debilidad, sino una rebelión.',
        { h: 'Un espejo y un ayo' },
        'Santiago compara la Palabra con un espejo (Stg 1:23-25). La ley muestra la mancha, pero no puede lavarla. Por eso nadie se salva cumpliendo la ley: «por las obras de la ley ningún ser humano será justificado delante de él» (Ro 3:20). La ley tiene otro propósito: «la ley ha sido nuestro ayo, para llevarnos a Cristo, a fin de que fuésemos justificados por la fe» (Gá 3:24). El ayo era el esclavo que llevaba a los niños a la escuela. La ley nos toma de la mano, nos muestra nuestra necesidad y nos lleva a Cristo.',
        { ir: { t: 'Ver «¿Qué pasa con el pacto del Sinaí?» en Pactos y dispensaciones', a: '../../pactos-y-dispensaciones/#cristo/4' } }
      ],
      pensar: 'Cuando lees los mandamientos de Dios, ¿te sientes juzgado o te sientes llevado a Cristo? ¿Qué mandamiento te ha mostrado más claramente tu necesidad de Él?'
    },
    {
      id: 'enemigos', n: 'El mundo, la carne y el diablo', ref: 'Efesios 2:1-3; 1 Juan 2:15-17; Gálatas 5:16-17; Santiago 1:14; 4:7; 1 Pedro 5:8-9',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y él os dio vida a vosotros, cuando estabais muertos en vuestros delitos y pecados, en los cuales anduvisteis en otro tiempo, siguiendo la corriente de este mundo, conforme al príncipe de la potestad del aire, el espíritu que ahora opera en los hijos de desobediencia, entre los cuales también todos nosotros vivimos en otro tiempo en los deseos de nuestra carne, haciendo la voluntad de la carne y de los pensamientos, y éramos por naturaleza hijos de ira, lo mismo que los demás.', ref: 'Efesios 2:1-3' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres enemigos y cómo resistirlos',
          cab: ['Enemigo', 'Qué es', 'Cómo se le resiste', 'Texto'],
          filas: [
            ['El mundo', 'La sociedad organizada sin Dios, con sus valores y presiones', 'No amarlo ni conformarse a él', '1 Jn 2:15; Ro 12:2'],
            ['La carne', 'La inclinación al pecado que queda en nosotros', 'Andar en el Espíritu; hacer morir sus obras', 'Gá 5:16; Ro 8:13'],
            ['El diablo', 'El enemigo personal que tienta y acusa', 'Someterse a Dios y resistirlo firmes en la fe', 'Stg 4:7; 1 P 5:9; Ef 6:11'],
          ],
          nota: 'Ninguno de los tres puede obligar al creyente a pecar: Dios da siempre la salida (1 Co 10:13).'
        } }
      ],
      texto: [
        'En Efesios 2, Pablo describe la vida sin Cristo con tres fuerzas que empujan al pecado: «siguiendo la corriente de este mundo, conforme al príncipe de la potestad del aire… en los deseos de nuestra carne» (Ef 2:2-3). Desde la iglesia antigua se las conoce como los tres enemigos del alma: el mundo, la carne y el diablo.',
        { h: 'El mundo' },
        'En este sentido, «mundo» no es la creación, que Dios hizo buena, ni las personas, a quienes Dios ama (Jn 3:16). Es la sociedad organizada como si Dios no existiera: su manera de pensar, sus valores, sus modas y sus presiones. Juan advierte: «No améis al mundo, ni las cosas que están en el mundo… Y el mundo pasa, y sus deseos; pero el que hace la voluntad de Dios permanece para siempre» (1 Jn 2:15, 17).',
        { h: 'La carne' },
        'La carne, en el sentido de Pablo, es la inclinación al pecado que permanece en el ser humano, aun en el creyente. No viene de fuera, sino de dentro. Santiago dice que cada uno es tentado «de su propia concupiscencia» (Stg 1:14). Por eso no podemos echar toda la culpa al diablo. El creyente vive una lucha real: «el deseo de la carne es contra el Espíritu, y el del Espíritu es contra la carne» (Gá 5:17). La respuesta no es la fuerza de voluntad, sino el Espíritu: «Andad en el Espíritu, y no satisfagáis los deseos de la carne» (Gá 5:16).',
        { h: 'El diablo' },
        'Detrás del mundo y aprovechando la carne está un enemigo personal. «Vuestro adversario el diablo, como león rugiente, anda alrededor buscando a quien devorar» (1 P 5:8). Pero su poder tiene límites, y fue vencido en la cruz. El creyente no lo teme: «Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros» (Stg 4:7). La armadura de Dios (Ef 6:10-18) es la manera de estar firmes contra él.',
        { h: 'Sin excusas, pero con esperanza' },
        'Conocer a los tres enemigos ayuda a pelear mejor. Pero ninguno de ellos quita la responsabilidad personal: el mundo presiona, la carne inclina y el diablo tienta, pero cada uno decide. Y ninguno es más fuerte que Dios: «fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir» (1 Co 10:13).',
        { ir: { t: 'Ver «Andar en el Espíritu» en El Espíritu Santo', a: '../../espiritu-santo/#vida/1' } }
      ],
      pensar: '¿Cuál de los tres enemigos te presiona más en esta etapa de tu vida? ¿Qué paso concreto puedes dar para resistirlo, apoyado en Dios?'
    }
  ];

  window.__HUMANO.caida = caida;
  window.__HUMANO.pecado = pecado;
})();
(() => {
  const MED = [[30, -2], [54, 37]];

  /* ---------------- V. El pecado original y la condición humana ----------------
     Decisiones del responsable: naturaleza caída heredada de Adán; transmisión de la culpa en
     `posturas`; lectura arminiana de las Asambleas de Dios (gracia preveniente) con la calvinista
     como postura; los niños que mueren antes de la edad de la responsabilidad son salvos. */
  const original = [
    {
      id: 'un-hombre', n: '«Por un hombre»', ref: 'Romanos 5:12-21; 1 Corintios 15:21-22',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-dos-adanes.svg', alt: 'Dos columnas enfrentadas: a la izquierda, Adán, con una desobediencia, el pecado, la condenación y la muerte que reina sobre todos; a la derecha, Cristo, con una obediencia, la gracia, la justificación y la vida que reina en los que reciben el don; entre las dos, la palabra «mucho más»', pie: 'Romanos 5:12-21: dos hombres, dos actos y dos resultados. La gracia de Cristo es «mucho más» que el pecado de Adán.', origen: 'esquema' },
        { tipo: 'imagen', titulo: 'Ilustración', src: 'img/hs-romanos.webp', alt: 'Pablo dicta en una habitación sencilla de Corinto mientras Tercio escribe en un rollo de papiro a la luz de una lámpara de aceite', pie: '«Yo Tercio, que escribí la epístola, os saludo en el Señor» (Ro 16:22). Recreación.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron. Pues antes de la ley, había pecado en el mundo; pero donde no hay ley, no se inculpa de pecado. No obstante, reinó la muerte desde Adán hasta Moisés, aun en los que no pecaron a la manera de la transgresión de Adán, el cual es figura del que había de venir. Pero el don no fue como la transgresión; porque si por la transgresión de aquel uno murieron los muchos, abundaron mucho más para los muchos la gracia y el don de Dios por la gracia de un hombre, Jesucristo. Y con el don no sucede como en el caso de aquel uno que pecó; porque ciertamente el juicio vino a causa de un solo pecado para condenación, pero el don vino a causa de muchas transgresiones para justificación. Pues si por la transgresión de uno solo reinó la muerte, mucho más reinarán en vida por uno solo, Jesucristo, los que reciben la abundancia de la gracia y del don de la justicia. Así que, como por la transgresión de uno vino la condenación a todos los hombres, de la misma manera por la justicia de uno vino a todos los hombres la justificación de vida. Porque así como por la desobediencia de un hombre los muchos fueron constituidos pecadores, así también por la obediencia de uno, los muchos serán constituidos justos.', ref: 'Romanos 5:12-19' }
      ],
      texto: [
        'Si alguien pregunta por qué todos los seres humanos pecan y mueren, la respuesta más completa de la Biblia está en Romanos 5:12-21. Pablo la escribió para explicar cómo la obra de Cristo alcanza a muchos, y para hacerlo comparó a Cristo con Adán.',
        { h: 'Lo que entró por Adán' },
        'El pasaje comienza así: «como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron» (Ro 5:12). El pecado no estaba en el mundo desde el principio: entró, como un intruso, por la desobediencia de Adán. Y con el pecado entró la muerte, que «reinó» desde entonces sobre toda la humanidad (Ro 5:14, 17).',
        'Pablo repite la idea de varias maneras: «por la transgresión de aquel uno murieron los muchos» (Ro 5:15); «por la transgresión de uno vino la condenación a todos los hombres» (Ro 5:18); «por la desobediencia de un hombre los muchos fueron constituidos pecadores» (Ro 5:19). No dice solo que todos imitaron a Adán, sino que lo que Adán hizo tuvo consecuencias para todos. Adán actuó como cabeza y representante de la humanidad.',
        { h: 'Antes de la ley' },
        'Pablo da una prueba: la muerte reinó «desde Adán hasta Moisés, aun en los que no pecaron a la manera de la transgresión de Adán» (Ro 5:14). Antes de que existiera la ley de Moisés, las personas morían igual. Morían aun los niños, que no habían pecado conscientemente. La muerte universal muestra que la humanidad entera quedó bajo la consecuencia del pecado de Adán.',
        { h: 'Mucho más por Cristo' },
        'Pero Pablo no escribió este pasaje para hundirnos, sino para levantarnos. Adán es «figura del que había de venir» (Ro 5:14). Como Adán trajo pecado y muerte a los suyos, Cristo trae justicia y vida a los suyos. Y la comparación no es pareja: la gracia es «mucho más» (Ro 5:15, 17). Un solo pecado trajo condenación; el don de Cristo vino para perdonar «muchas transgresiones» (Ro 5:16). «Mas cuando el pecado abundó, sobreabundó la gracia» (Ro 5:20).',
        'Pertenecemos a Adán por nacimiento; podemos pertenecer a Cristo por la fe. Todo el evangelio cabe en esa diferencia: «así como en Adán todos mueren, también en Cristo todos serán vivificados» (1 Co 15:22).',
        { ejercicio: {
          pregunta: '¿Para qué compara Pablo a Adán con Cristo en Romanos 5?',
          opciones: [
            { t: 'Para mostrar que, así como el pecado de uno alcanzó a muchos, la gracia de Cristo alcanza «mucho más» a los que la reciben.', ok: true, por_que: 'Correcto: el centro del pasaje es la abundancia de la gracia frente al pecado.' },
            { t: 'Para enseñar que cada persona es solo responsable de imitar el mal ejemplo de Adán.', ok: false, por_que: 'Pablo dice más que eso: «por la desobediencia de un hombre los muchos fueron constituidos pecadores» (Ro 5:19).' },
            { t: 'Para decir que Adán y Cristo tienen la misma importancia en la historia.', ok: false, por_que: 'La comparación es desigual: la gracia es «mucho más» y «sobreabundó».' }
          ],
          explicacion: 'Romanos 5 explica la caída para engrandecer la gracia.'
        } }
      ],
      pensar: 'Naciste «en Adán», sin elegirlo. Pero puedes estar «en Cristo» por la fe. ¿Puedes decir con seguridad a cuál de los dos perteneces hoy?'
    },
    {
      id: 'herencia', n: '¿Qué heredamos de Adán?', ref: 'Romanos 5:12-19; Salmos 51:5; 58:3; Efesios 2:3; Génesis 5:3; 8:21; Ezequiel 18:20',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-herencia.svg', alt: 'Arriba, Adán; abajo, toda la humanidad. Tres flechas muestran tres explicaciones de lo que pasa de Adán a nosotros: la representación (Adán como cabeza del pacto, su culpa se imputa a todos), la unidad (todos estábamos en Adán, como Leví en Abraham) y la naturaleza (heredamos una naturaleza inclinada al pecado; la culpa llega cuando pecamos personalmente). Debajo, lo que todas afirman', pie: 'Tres explicaciones evangélicas de cómo nos afecta el pecado de Adán. Todas afirman que nacemos con una naturaleza caída y necesitamos a Cristo.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y él os dio vida a vosotros, cuando estabais muertos en vuestros delitos y pecados, en los cuales anduvisteis en otro tiempo, siguiendo la corriente de este mundo, conforme al príncipe de la potestad del aire, el espíritu que ahora opera en los hijos de desobediencia, entre los cuales también todos nosotros vivimos en otro tiempo en los deseos de nuestra carne, haciendo la voluntad de la carne y de los pensamientos, y éramos por naturaleza hijos de ira, lo mismo que los demás.', ref: 'Efesios 2:1-3' }
      ],
      texto: [
        'La Biblia enseña que el pecado de Adán afectó a toda la humanidad. Pero ¿qué es exactamente lo que recibimos de él? Esta pregunta tiene una parte clara y otra que los cristianos han explicado de distintas maneras.',
        { h: 'Lo que es claro: una naturaleza caída' },
        'Todos nacemos con una naturaleza inclinada al pecado. David lo confesó: «He aquí, en maldad he sido formado, Y en pecado me concibió mi madre» (Sal 51:5). Después del diluvio, Dios dijo que «el intento del corazón del hombre es malo desde su juventud» (Gn 8:21). Pablo describe a todos, judíos y gentiles, como personas que «éramos por naturaleza hijos de ira, lo mismo que los demás» (Ef 2:3). Nadie necesita enseñar a un niño a mentir o a ser egoísta. El pecado no es solo algo que hacemos: es una condición en la que nacemos. Por eso los teólogos lo llaman «pecado original»: no porque Adán lo inventara, sino porque está en el origen de cada persona.',
        { h: 'Lo que se explica de distintas maneras: la culpa' },
        'La pregunta difícil es si heredamos también la culpa de Adán, o solo la naturaleza caída. Romanos 5:19 dice que «los muchos fueron constituidos pecadores», pero Ezequiel 18:20 dice que «el hijo no llevará el pecado del padre». El esquema muestra tres explicaciones, y el bloque siguiente las dos principales.',
        { posturas: {
          titulo: '¿Heredamos la culpa de Adán?',
          a: { n: 'Sí: Adán actuó por todos', t: 'Adán era la cabeza y el representante de la humanidad, como Cristo lo es de su pueblo. Así como la justicia de Cristo se imputa (se pone en la cuenta) a los creyentes sin que ellos la hayan ganado, la culpa de Adán se imputa a todos sus descendientes (Ro 5:18-19). Otra versión, la «realista», dice que toda la humanidad estaba presente en Adán, como Leví estaba «en los lomos» de Abraham (He 7:9-10). Es la lectura de la tradición reformada.' },
          b: { n: 'Heredamos la naturaleza; la culpa es personal', t: 'Todos heredan de Adán la muerte y una naturaleza corrompida que inevitablemente lleva a pecar; pero cada persona es culpable ante Dios por sus propios pecados, cuando llega a tener conciencia moral. Así lo entienden Ezequiel 18:20 y el final de Romanos 5:12: la muerte pasó a todos «por cuanto todos pecaron» (Ro 5:12). Muchos añaden que la obra de Cristo anuló la culpa heredada para todos (Ro 5:18). Es la lectura de la tradición wesleyana y de muchos pentecostales.' },
          c: 'Las Asambleas de Dios enseñan que el ser humano cayó por su transgresión voluntaria y que toda la humanidad nació con una naturaleza caída, separada de Dios, que necesita ser redimida. Las dos lecturas lo afirman. Las dos coinciden también en que nadie se salva sin Cristo y en que los niños que mueren antes de la edad de la responsabilidad están cubiertos por la obra de Cristo (estación V.5).'
        } },
        'Sea cual sea la explicación, la conclusión práctica es la misma: nadie puede decir que es bueno por naturaleza y que no necesita un Salvador. Todos necesitamos nacer de nuevo (Jn 3:3).'
      ],
      pensar: '¿Reconoces en tu propio corazón inclinaciones que nadie te enseñó? ¿Qué te dice eso de tu necesidad de un corazón nuevo?'
    },
    {
      id: 'depravacion', n: 'Depravación total: lo que significa y lo que no', ref: 'Romanos 3:10-18; 8:7-8; Jeremías 13:23; 17:9; Génesis 6:5; Efesios 4:17-19; Mateo 7:11',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Como está escrito: No hay justo, ni aun uno; No hay quien entienda. No hay quien busque a Dios. Todos se desviaron, a una se hicieron inútiles; No hay quien haga lo bueno, no hay ni siquiera uno. Sepulcro abierto es su garganta; Con su lengua engañan. Veneno de áspides hay debajo de sus labios; Su boca está llena de maldición y de amargura. Sus pies se apresuran para derramar sangre; Quebranto y desventura hay en sus caminos; Y no conocieron camino de paz. No hay temor de Dios delante de sus ojos.', ref: 'Romanos 3:10-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Depravación total',
          cab: ['Significa…', 'No significa…'],
          filas: [
            ['Que el pecado alcanzó todas las áreas del ser humano: mente, voluntad, afectos y cuerpo', 'Que cada persona es tan mala como podría llegar a ser'],
            ['Que nadie puede agradar a Dios ni salvarse por sus propias fuerzas (Ro 8:8)', 'Que el incrédulo no puede hacer nada bueno ante los hombres (Mt 7:11)'],
            ['Que el corazón se inclina al mal y se engaña a sí mismo (Jer 17:9)', 'Que se perdió la imagen de Dios o la conciencia (Gn 9:6; Ro 2:15)'],
            ['Que el ser humano necesita la gracia de Dios para volverse a Él', 'Que el ser humano ya no es responsable de sus actos'],
          ],
          nota: '«Total» describe la extensión del daño (todo el ser), no su intensidad (lo peor posible).'
        } }
      ],
      texto: [
        'En Romanos 3, Pablo reúne varios textos del Antiguo Testamento para dar un diagnóstico de la humanidad: «No hay justo, ni aun uno; No hay quien entienda. No hay quien busque a Dios. Todos se desviaron, a una se hicieron inútiles» (Ro 3:10-12). Los teólogos llaman a esta condición «depravación total». La expresión suena dura y a veces se entiende mal.',
        { h: 'Lo que significa' },
        '«Total» no quiere decir que cada persona sea tan mala como podría ser. Quiere decir que el pecado alcanzó todas las áreas de la persona. La mente: los incrédulos tienen «el entendimiento entenebrecido» (Ef 4:18). La voluntad: «los designios de la carne son enemistad contra Dios; porque no se sujetan a la ley de Dios, ni tampoco pueden» (Ro 8:7). Los afectos: amamos lo que no debemos. Y el cuerpo, que enferma y muere. No hay una parte del ser humano que haya quedado sana, desde la cual pueda salvarse a sí mismo.',
        'Jeremías lo preguntó con una imagen: «¿Mudará el etíope su piel, y el leopardo sus manchas? Así también, ¿podréis vosotros hacer bien, estando habituados a hacer mal?» (Jer 13:23). Por sí mismo, el ser humano no puede cambiar su corazón. Puede reformar algunas conductas, pero no puede volverse a Dios ni agradarle: «los que viven según la carne no pueden agradar a Dios» (Ro 8:8).',
        { h: 'Lo que no significa' },
        'La tabla muestra lo que esta doctrina no enseña. No niega que los incrédulos puedan hacer cosas buenas ante los hombres: Jesús dijo que aun los padres malos saben dar buenas cosas a sus hijos (Mt 7:11). Hay incrédulos honestos, generosos y valientes. Pero ninguna de esas obras puede borrar el pecado ni ganar la salvación, porque no nacen de la fe ni buscan la gloria de Dios. Tampoco niega que el ser humano conserve la imagen de Dios y la conciencia, ni que sea responsable de lo que hace.',
        { h: 'Para qué sirve esta doctrina' },
        'Esta enseñanza no busca humillar por humillar. Quita de en medio la última esperanza falsa: la de salvarnos con nuestro esfuerzo. Mientras alguien piense que su caso no es tan grave, no buscará al Médico. Jesús dijo: «No he venido a llamar a justos, sino a pecadores al arrepentimiento» (Lc 5:32). Reconocer la profundidad del pecado es el primer paso para valorar la profundidad de la gracia.',
        { ejercicio: {
          pregunta: '¿Qué quiere decir «total» en la expresión «depravación total»?',
          opciones: [
            { t: 'Que el pecado afectó todas las áreas del ser humano, de modo que nadie puede salvarse por sí mismo.', ok: true, por_que: 'Correcto: habla de la extensión del daño, no de que cada persona sea lo peor posible.' },
            { t: 'Que ningún incrédulo puede hacer nada bueno en ningún sentido.', ok: false, por_que: 'Jesús reconoce que los padres malos saben dar buenas cosas a sus hijos (Mt 7:11).' },
            { t: 'Que la imagen de Dios desapareció por completo.', ok: false, por_que: 'Después de la caída, la Biblia sigue llamando al ser humano imagen de Dios (Gn 9:6; Stg 3:9).' }
          ],
          explicacion: 'La depravación total muestra que todo el ser necesita la gracia, no que el ser humano haya dejado de ser humano.'
        } }
      ],
      pensar: '¿Hay alguna área de tu vida en la que confías en tu propia bondad o esfuerzo, en lugar de depender de la gracia de Dios?'
    },
    {
      id: 'gracia', n: 'Libre albedrío y gracia preveniente', ref: 'Juan 6:44; 12:32; 1:9; Tito 2:11; 1 Timoteo 2:4; 2 Pedro 3:9; Hechos 7:51; Filipenses 2:12-13',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Dos maneras de entender la gracia y la voluntad',
          cab: ['Pregunta', 'Arminiana (wesleyana)', 'Calvinista (reformada)'],
          filas: [
            ['¿Puede el pecador volverse a Dios por sí solo?', 'No', 'No'],
            ['¿A quiénes alcanza la gracia que capacita para creer?', 'A todos: Dios atrae a todos (Jn 12:32; Tit 2:11)', 'A los elegidos: el llamado eficaz (Jn 6:37, 44)'],
            ['¿Se puede resistir esa gracia?', 'Sí (Hch 7:51; Mt 23:37)', 'El llamado eficaz no se resiste finalmente'],
            ['¿Qué viene primero, la fe o el nuevo nacimiento?', 'La gracia capacita; el pecador cree y nace de nuevo', 'Dios regenera, y el regenerado cree'],
            ['¿Por quiénes murió Cristo?', 'Por todos (1 Jn 2:2)', 'Para salvar eficazmente a los elegidos'],
          ],
          nota: 'Las dos afirman que la salvación es solo por gracia, por medio de la fe, y que nadie se salva por mérito propio.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque la gracia de Dios se ha manifestado para salvación a todos los hombres, enseñándonos que, renunciando a la impiedad y a los deseos mundanos, vivamos en este siglo sobria, justa y piadosamente,', ref: 'Tito 2:11-12' }
      ],
      texto: [
        'Si el ser humano caído no puede volverse a Dios por sí mismo, ¿cómo es que alguien llega a creer? Aquí los evangélicos han dado dos respuestas, que la tabla compara. Este recurso presenta las dos con respeto, y explica por qué la tradición pentecostal sigue la primera.',
        { h: 'La gracia que va delante' },
        'La Biblia enseña que Dios toma siempre la iniciativa. Jesús dijo: «Ninguno puede venir a mí, si el Padre que me envió no le trajere» (Jn 6:44). Pero también dijo: «Y yo, si fuere levantado de la tierra, a todos atraeré a mí mismo» (Jn 12:32). Juan llama a Cristo «Aquella luz verdadera, que alumbra a todo hombre» (Jn 1:9), y Pablo enseña que «la gracia de Dios se ha manifestado para salvación a todos los hombres» (Tit 2:11). Dios «quiere que todos los hombres sean salvos» (1 Ti 2:4) y no quiere «que ninguno perezca, sino que todos procedan al arrepentimiento» (2 P 3:9).',
        'Uniendo estos textos, la tradición que viene de Arminio y de Juan Wesley enseña la gracia preveniente: una gracia que «va delante» de la conversión, que Dios da a todos por la obra de Cristo, que ilumina la mente, despierta la conciencia y libera la voluntad lo suficiente para que el pecador pueda responder al evangelio. Esa gracia no obliga: se puede resistir. Esteban acusó al Sanedrín: «Vosotros resistís siempre al Espíritu Santo» (Hch 7:51). Si el pecador cree, no es mérito suyo, porque aun la capacidad de creer fue un regalo. Si rechaza, la responsabilidad es suya.',
        { posturas: {
          titulo: '¿La gracia que lleva a creer se da a todos o solo a los elegidos?',
          a: { n: 'A todos, y se puede resistir (arminiana)', t: 'Es la lectura de las Asambleas de Dios y de la mayoría de los pentecostales, metodistas y movimientos de santidad. Explica que Dios ame al mundo y llame a todos sinceramente (Jn 3:16; Mt 11:28), que el ser humano sea responsable de su respuesta y que los llamados a no endurecer el corazón sean reales (He 3:7-8).' },
          b: { n: 'Solo a los elegidos, y es eficaz (calvinista)', t: 'Los reformados, siguiendo a Agustín y a Calvino, enseñan que el ser humano está tan muerto en el pecado (Ef 2:1) que solo puede creer si Dios primero le da vida; y que Dios, en su soberanía, da esa vida a los que eligió por pura gracia, sin mirar nada en ellos (Ro 9:16; Ef 1:4-5). Esa gracia lleva infaliblemente a la fe. Lo hacen para proteger que la salvación sea toda de Dios.' },
          c: 'Las dos posturas buscan lo mismo: dar toda la gloria a Dios y negar todo mérito humano. Las dos tienen hermanos fieles que aman la Escritura. La diferencia es cómo entienden la relación entre la soberanía de Dios y la responsabilidad humana. Este recurso sigue la primera, con la línea de las Asambleas de Dios. La elección y la seguridad de la salvación se estudiarán en La salvación (en preparación).'
        } },
        { h: 'Ocupaos en vuestra salvación' },
        'Pablo une las dos cosas en un solo versículo: «ocupaos en vuestra salvación con temor y temblor, porque Dios es el que en vosotros produce así el querer como el hacer» (Fil 2:12-13). Dios obra primero y siempre; el ser humano responde de verdad. Ninguno de los dos queda fuera.',
        { ir: { t: 'Ver «Las confesiones de fe y la gran discusión» en Historia de la Iglesia II', a: '../../historia-iglesia-2/#respuestas/5' } }
      ],
      pensar: 'Si hoy sientes el deseo de buscar a Dios, ese deseo no nació en ti: es la gracia que va delante. ¿Qué respuesta le darás?'
    },
    {
      id: 'ninos', n: 'Los niños y la edad de la responsabilidad', ref: '2 Samuel 12:22-23; Deuteronomio 1:39; Isaías 7:15-16; Mateo 18:3-5, 14; 19:13-15; Jonás 4:11; Romanos 7:9',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: 'img/hs-ninos.webp', alt: 'Jesús, visto de espaldas, se inclina para recibir a varios niños pequeños que corren hacia él en un patio de Judea, mientras sus madres miran', pie: '«Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de los cielos» (Mt 19:14). Recreación.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Textos sobre los niños pequeños',
          cab: ['Texto', 'Lo que muestra'],
          filas: [
            ['Dt 1:39', 'Los niños «que no saben hoy lo bueno ni lo malo» no cargan con la culpa de sus padres y entran en la tierra'],
            ['Is 7:15-16', 'Hay un tiempo antes de que el niño «sepa desechar lo malo y escoger lo bueno»'],
            ['Jon 4:11', 'Dios tiene compasión de los que «no saben discernir entre su mano derecha y su mano izquierda»'],
            ['2 S 12:23', 'David espera volver a ver a su hijo que murió: «Yo voy a él»'],
            ['Mt 19:14', '«De los tales es el reino de los cielos»'],
            ['Mt 18:14', 'No es la voluntad del Padre que se pierda uno de estos pequeños'],
          ],
          nota: 'La Biblia no fija una edad exacta: la responsabilidad depende de cuándo la persona es capaz de distinguir el bien y el mal.'
        } }
      ],
      texto: [
        'Pocas preguntas duelen tanto como esta: ¿qué pasa con un bebé que muere? Si todos nacemos con una naturaleza caída, ¿se pierden los niños que mueren antes de poder creer? La Biblia no dedica un capítulo al tema, pero da suficiente luz para responder con esperanza.',
        { h: 'Lo que enseña la Biblia' },
        'Cuando murió el hijo de David y Betsabé, David dejó de ayunar y dijo: «¿Podré yo hacerle volver? Yo voy a él, mas él no volverá a mí» (2 S 12:23). David esperaba reencontrarse con su hijo. En el desierto, Dios castigó a la generación incrédula, pero dijo que sus niños, «que no saben hoy lo bueno ni lo malo», entrarían en la tierra (Dt 1:39). Y Jesús recibió a los niños, los bendijo y dijo: «Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de los cielos» (Mt 19:14).',
        { h: 'La edad de la responsabilidad' },
        'Estos textos muestran que hay un período en la vida en que la persona todavía no sabe «desechar lo malo y escoger lo bueno» (Is 7:16). Los pentecostales, con muchos otros evangélicos, llaman «edad de la responsabilidad» al momento en que una persona llega a ser capaz de entender el bien y el mal y de responder a Dios. La Biblia no fija una edad exacta, porque depende de cada persona. Por la misma razón, la iglesia cree que Dios trata con misericordia a quienes, por una discapacidad mental profunda, nunca llegan a esa capacidad.',
        { h: 'Salvos por la obra de Cristo' },
        'Los niños no son salvos porque sean inocentes por naturaleza: también ellos heredan la naturaleza caída. Son salvos por la obra de Cristo, cuya muerte alcanza a quienes todavía no pueden creer ni rechazar el evangelio. Por eso este recurso enseña, con las Asambleas de Dios, que los niños que mueren antes de la edad de la responsabilidad están con el Señor. A los padres que han perdido un hijo, la Escritura les ofrece el mismo consuelo de David: volverán a verlo.',
        { h: 'Cuando el niño crece' },
        'Esta enseñanza tiene otra cara. Cuando el niño crece y llega a entender, necesita recibir a Cristo personalmente. Ser hijo de creyentes es un enorme privilegio, pero no reemplaza la fe propia. Por eso la iglesia enseña a los niños desde pequeños, ora por ellos y los lleva a Jesús, como hacían aquellas madres en Judea. Jesús dijo también: «si no os volvéis y os hacéis como niños, no entraréis en el reino de los cielos» (Mt 18:3).'
      ],
      pensar: '¿Hay niños a tu alrededor (hijos, sobrinos, alumnos de la escuela dominical) a quienes puedes acercar a Jesús? ¿Qué puedes hacer esta semana por su fe?'
    },
    {
      id: 'ley-corazon', n: 'La ley escrita en el corazón', ref: 'Romanos 1:18-20; 2:12-16; Hechos 14:15-17; 17:26-31; 4:12; Juan 14:6; Romanos 10:13-15',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'porque lo que de Dios se conoce les es manifiesto, pues Dios se lo manifestó. Porque las cosas invisibles de él, su eterno poder y deidad, se hacen claramente visibles desde la creación del mundo, siendo entendidas por medio de las cosas hechas, de modo que no tienen excusa.', ref: 'Romanos 1:19-20' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se revela Dios a todos',
          cab: ['Revelación', 'Qué muestra', 'Texto'],
          filas: [
            ['La creación', 'Su eterno poder y deidad', 'Ro 1:20; Sal 19:1'],
            ['La providencia', 'Su bondad: lluvias, cosechas, alegría', 'Hch 14:17'],
            ['La conciencia', 'La ley moral escrita en el corazón', 'Ro 2:14-15'],
            ['La Escritura', 'Su voluntad y su plan de salvación', '2 Ti 3:15'],
            ['Jesucristo', 'Dios mismo hecho hombre, el único camino', 'Jn 14:6; He 1:1-2'],
          ],
          nota: 'Las tres primeras dejan al ser humano «sin excusa»; solo las dos últimas le muestran el camino de la salvación.'
        } }
      ],
      texto: [
        'Si alguien nunca leyó la Biblia ni oyó hablar de Cristo, ¿es responsable ante Dios? La Biblia responde que todo ser humano recibe luz de Dios, aunque no toda la luz que necesita para salvarse.',
        { h: 'Sin excusa' },
        'Pablo enseña que Dios se ha dado a conocer a todos por medio de la creación: «las cosas invisibles de él, su eterno poder y deidad, se hacen claramente visibles desde la creación del mundo… de modo que no tienen excusa» (Ro 1:20). En Listra, Pablo dijo a los paganos que Dios «no se dejó a sí mismo sin testimonio, haciendo bien, dándonos lluvias del cielo y tiempos fructíferos» (Hch 14:17). Y además, como vio la ruta II, todo ser humano tiene «la obra de la ley escrita en sus corazones» (Ro 2:15).',
        'Esta luz es suficiente para que cada persona sepa que hay un Creador, que le debe gratitud y que hay un bien que debe hacer. Y nadie ha vivido a la altura de esa luz. Por eso Pablo concluye que todos son culpables: «todos los que sin ley han pecado, sin ley también perecerán» (Ro 2:12). Dios juzgará a cada uno con justicia, según la luz que recibió (Lc 12:47-48).',
        { h: 'Un solo camino de salvación' },
        'Pero la creación y la conciencia no pueden salvar. Muestran que Dios existe y que hemos fallado, pero no muestran cómo ser perdonados. Eso solo lo revela el evangelio. Pedro lo dijo con claridad: «en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos» (Hch 4:12). Y Jesús: «nadie viene al Padre, sino por mí» (Jn 14:6). Por eso este recurso, con las Asambleas de Dios, no enseña que las otras religiones sean caminos hacia Dios, ni que alguien pueda salvarse sin Cristo por ser sincero o bueno.',
        { h: '¿Cómo oirán sin haber quien les predique?' },
        'Esta verdad es el motor de las misiones. Pablo razonaba así: «todo aquel que invocare el nombre del Señor, será salvo. ¿Cómo, pues, invocarán a aquel en el cual no han creído? ¿Y cómo creerán en aquel de quien no han oído? ¿Y cómo oirán sin haber quien les predique?» (Ro 10:13-14). La pregunta por los que nunca oyeron no se responde especulando, sino yendo. Dios es justo y misericordioso, y quiere que todos procedan al arrepentimiento; por eso nos envió a anunciar.',
        { ejercicio: {
          pregunta: 'Según Romanos 1 y 2, ¿qué puede conocer de Dios una persona que nunca leyó la Biblia?',
          opciones: [
            { t: 'Que Dios existe y es poderoso, por la creación, y que hay un bien que debe hacer, por la conciencia; pero no el camino de salvación.', ok: true, por_que: 'Correcto: esa luz deja «sin excusa», pero solo el evangelio de Cristo muestra cómo ser salvos.' },
            { t: 'Nada en absoluto, por lo que no es responsable ante Dios.', ok: false, por_que: 'Pablo dice que lo invisible de Dios se hace «claramente visible» por la creación (Ro 1:20).' },
            { t: 'Todo lo necesario para salvarse, si es una persona sincera.', ok: false, por_que: 'La salvación es solo en el nombre de Jesús (Hch 4:12); por eso es necesario predicar (Ro 10:14).' }
          ],
          explicacion: 'La revelación general muestra al Creador; solo la revelación especial muestra al Salvador.'
        } }
      ],
      pensar: '¿Hay alguien en tu entorno que nunca ha oído el evangelio con claridad? Si «cómo oirán sin haber quien les predique», ¿podrías ser tú quien le hable?'
    },
    {
      id: 'agustin', n: 'De Agustín y Pelagio a Arminio y Dort', ref: 'Romanos 5:12; Efesios 2:8-9; Juan 15:5; Filipenses 2:13', fecha: [411, 1738],
      visual: [
        { tipo: 'mapa', titulo: 'Mapa', pasos: [
          { t: 'Hacia el 405-411: Pelagio, un monje británico, enseña en Roma que el ser humano nace sin pecado y puede vivir sin pecar por su propio esfuerzo. Agustín, obispo de Hipona, le responde.',
            estado: { view: MED, capas: [], lugares: ['h-roma', 'h-hipona'] } },
          { t: '411-418: el pelagianismo se discute en el norte de África. En el 415 un sínodo en Dióspolis (Lida) absuelve a Pelagio, pero en el 418 el concilio de Cartago condena su enseñanza.',
            estado: { view: MED, capas: [], lugares: ['h-hipona', 'h-cartago', 'h-dioospolis'] } },
          { t: '431: el concilio de Éfeso condena de nuevo el pelagianismo. 529: el concilio de Orange (Arausio) enseña que aun el comienzo de la fe es obra de la gracia, contra el «semipelagianismo».',
            estado: { view: MED, capas: [], lugares: ['h-efeso', 'h-orange'] } },
          { t: '1524-1525: Erasmo defiende el libre albedrío y Lutero le responde en Wittenberg con La esclavitud de la voluntad. Calvino, en Ginebra, sigue a Agustín.',
            estado: { view: MED, capas: [], lugares: ['h-wittenberg', 'h-ginebra'] } },
          { t: '1603-1619: Arminio, profesor en Leiden, enseña que la gracia se ofrece a todos y se puede resistir. Sus seguidores, los remonstrantes, son condenados en el sínodo de Dort (1618-1619).',
            estado: { view: MED, capas: [], lugares: ['h-leiden', 'h-dort'] } },
          { t: '1738 en adelante: Juan Wesley, desde Londres, predica la gracia preveniente y la salvación ofrecida a todos. De él vienen el metodismo, el movimiento de santidad y, después, los pentecostales.',
            estado: { view: MED, capas: [], lugares: ['h-londres'] } }
        ] },
        { tipo: 'imagen', titulo: 'Ilustración', src: 'img/hs-agustin.webp', alt: 'Agustín, obispo anciano de barba gris, escribe de noche en su biblioteca de Hipona a la luz de una lámpara, rodeado de rollos y códices', pie: 'Agustín de Hipona (354-430) escribió contra Pelagio entre el 412 y su muerte. Recreación.', origen: 'ia' },
        { tipo: 'imagen', titulo: 'Foto', src: 'img/agustin-laterano.jpg', alt: 'Fresco antiguo de Agustín sentado en una silla, vestido con una túnica blanca, con la mano derecha sobre un libro abierto apoyado en un atril', pie: 'El retrato más antiguo que se conserva de Agustín de Hipona: un fresco del siglo VI en el Laterano, en Roma, pintado casi un siglo después de su muerte.', origen: 'foto', licencia: 'Fresco de autor desconocido, siglo VI, dominio público (PD-Art), vía Wikimedia Commons', completa: true },
        { tipo: 'imagen', titulo: 'Sínodo de Dort', src: 'img/sinodo-dort.jpg', alt: 'Pintura de una gran sala con techo de madera, llena de pastores y delegados vestidos de negro sentados en bancos a los lados y en una mesa larga al centro, y un grupo de visitantes en primer plano', pie: 'El sínodo de Dort (1618-1619), pintado por Pouwels Weyts el Joven en 1621. Los delegados se sientan alrededor de la sala; en la mesa central, los remonstrantes, seguidores de Arminio.', origen: 'foto', licencia: 'Pouwels Weyts el Joven, 1621, Museo de Dordrecht; dominio público (PD-Art), vía Wikimedia Commons', completa: true },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro respuestas en la historia',
          cab: ['Postura', 'Qué enseña', 'Valoración'],
          filas: [
            ['Pelagianismo (Pelagio)', 'Nacemos sin pecado; podemos obedecer a Dios sin la gracia', 'Herejía, condenada en 418 y 431'],
            ['Semipelagianismo', 'El primer paso hacia Dios lo da el ser humano; la gracia ayuda después', 'Rechazado en Orange (529)'],
            ['Agustinismo y calvinismo', 'La gracia de Dios elige y lleva eficazmente a la fe', 'Postura evangélica'],
            ['Arminianismo wesleyano', 'La gracia preveniente se da a todos y capacita para creer o resistir', 'Postura evangélica; la de este recurso'],
          ],
          nota: 'Las dos posturas evangélicas rechazan el pelagianismo: nadie se salva sin la gracia.'
        } }
      ],
      texto: [
        'Las preguntas de esta ruta no son nuevas. La iglesia las discutió con intensidad en dos momentos de su historia, y conocerlos ayuda a entender por qué los cristianos de hoy hablan como hablan.',
        { h: 'Pelagio y Agustín' },
        'A comienzos del siglo V, un monje llamado Pelagio, nacido en las islas británicas, enseñaba en Roma. Le molestaba la poca seriedad moral de muchos cristianos, y llegó a enseñar que el pecado de Adán solo dañó a Adán; que los niños nacen sin pecado; y que el ser humano puede obedecer perfectamente a Dios con su propia voluntad, si se esfuerza. La gracia, para él, era una ayuda útil, pero no indispensable.',
        'Agustín, obispo de Hipona, en el norte de África, le respondió con fuerza. Conocía por experiencia propia, como cuenta en sus Confesiones, la esclavitud de una voluntad que quiere el bien y no puede hacerlo. Citando Romanos 5 y las palabras de Jesús, «separados de mí nada podéis hacer» (Jn 15:5), enseñó que toda la humanidad está caída en Adán y que solo la gracia puede salvar. El mapa muestra cómo la iglesia condenó la enseñanza de Pelagio en Cartago (418) y en Éfeso (431), y en Orange (529) rechazó también la idea de que el primer paso hacia Dios lo da el ser humano.',
        { h: 'Arminio y Dort' },
        'Mil años después, la discusión volvió entre los protestantes. Lutero y Calvino siguieron a Agustín. Pero en Holanda, Jacobo Arminio, profesor en Leiden, enseñó que la gracia de Dios se ofrece a todos, capacita a todos para creer y puede ser resistida. Sus seguidores fueron condenados en el sínodo de Dort (1618-1619), que formuló los puntos que hoy se conocen como el calvinismo. En el siglo XVIII, Juan Wesley retomó las ideas de Arminio con fuego evangelístico: Cristo murió por todos, y todos pueden ser salvos. De esa corriente nacieron el metodismo, el movimiento de santidad y, en el siglo XX, el pentecostalismo.',
        { h: 'Lo que no se discute' },
        'Hoy, calvinistas y arminianos discuten con respeto sobre la elección y la gracia. Pero los dos están del mismo lado frente a Pelagio: ninguno cree que el ser humano pueda salvarse sin la gracia. «Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe» (Ef 2:8-9). El pelagianismo, en cambio, vuelve una y otra vez, cada vez que alguien enseña que basta con esforzarse para ser bueno.',
        { ir: { t: 'Ver «Juan Wesley y el metodismo» en Historia de la Iglesia II', a: '../../historia-iglesia-2/#avivamientos/5' } }
      ],
      pensar: 'Pelagio decía «puedes, si te esfuerzas». El evangelio dice «puedes, porque Dios obra en ti». ¿Con cuál de las dos frases has estado viviendo tu vida cristiana?'
    }
  ];

  /* ---------------- VI. Las consecuencias del pecado ---------------- */
  const consecuencias = [
    {
      id: 'muerte-espiritual', n: 'Muerte espiritual', ref: 'Génesis 2:17; Isaías 59:1-2; Efesios 2:1-5, 12; 4:18; Colosenses 2:13; Lucas 15:24',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-muertes.svg', alt: 'Tres franjas que describen tres muertes: la muerte espiritual, separación de Dios ahora; la muerte física, separación del cuerpo y el alma; la muerte segunda, separación eterna de Dios. Al lado de cada una, lo que Cristo hace: da vida nueva, resucitará el cuerpo, libra del juicio', pie: 'La Biblia usa la palabra «muerte» para tres realidades. Las tres vienen del pecado, y Cristo las vence todas.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'He aquí que no se ha acortado la mano de Jehová para salvar, ni se ha agravado su oído para oír; pero vuestras iniquidades han hecho división entre vosotros y vuestro Dios, y vuestros pecados han hecho ocultar de vosotros su rostro para no oír.', ref: 'Isaías 59:1-2' }
      ],
      texto: [
        'Dios había advertido a Adán: «el día que de él comieres, ciertamente morirás» (Gn 2:17). Adán comió, y siguió viviendo más de novecientos años. ¿Falló la advertencia? No. Ese mismo día comenzó una muerte más profunda que la del cuerpo.',
        { h: 'Separados de Dios' },
        'En la Biblia, la muerte es ante todo separación. La muerte física separa el alma del cuerpo; la muerte espiritual separa a la persona de Dios. Ese día, Adán y Eva se escondieron de Dios y fueron echados de su presencia. Isaías lo explica: «vuestras iniquidades han hecho división entre vosotros y vuestro Dios, y vuestros pecados han hecho ocultar de vosotros su rostro» (Is 59:2). El problema no es que Dios no pueda oír: «no se ha acortado la mano de Jehová» (Is 59:1). El problema es el pecado.',
        { h: 'Muertos en delitos y pecados' },
        'Pablo describe así a toda persona sin Cristo: «estabais muertos en vuestros delitos y pecados» (Ef 2:1). No dice enfermos ni débiles, sino muertos: sin vida espiritual, sin capacidad de responder a Dios por sí mismos. Y describe esa condición: «sin esperanza y sin Dios en el mundo» (Ef 2:12), con «el entendimiento entenebrecido, ajenos de la vida de Dios» (Ef 4:18). Una persona puede estar llena de vida física, de inteligencia y de actividad, y estar espiritualmente muerta.',
        { h: 'Dios da vida' },
        'Por eso la salvación no es un arreglo, sino una resurrección. «Pero Dios, que es rico en misericordia, por su gran amor con que nos amó, aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo» (Ef 2:4-5). Jesús llamó a esto nacer de nuevo, nacer del Espíritu (Jn 3:5-6). Cuando el hijo pródigo volvió a casa, su padre lo dijo con las palabras exactas: «este mi hijo muerto era, y ha revivido» (Lc 15:24). La obra del Espíritu en el nuevo nacimiento se estudia en El Espíritu Santo.',
        { ir: { t: 'Ver «Nacer del Espíritu» en El Espíritu Santo', a: '../../espiritu-santo/#salvacion/2' } }
      ],
      pensar: '¿Conoces a alguien que parece muy vivo por fuera, pero vive «sin Dios en el mundo»? ¿Y tú, recuerdas el día en que Dios te dio vida? Si no lo recuerdas, hoy puede ser ese día.'
    },
    {
      id: 'muerte-fisica', n: 'Muerte física', ref: 'Génesis 3:19; 5:5; Romanos 5:12; 6:23; Hebreos 9:27; 1 Corintios 15:26, 54-57; Salmos 90:10-12',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y cuando esto corruptible se haya vestido de incorrupción, y esto mortal se haya vestido de inmortalidad, entonces se cumplirá la palabra que está escrita: Sorbida es la muerte en victoria. ¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria? ya que el aguijón de la muerte es el pecado, y el poder del pecado, la ley. Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo.', ref: '1 Corintios 15:54-57' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La muerte en la Biblia',
          cab: ['La muerte es…', 'Texto'],
          filas: [
            ['Consecuencia del pecado, no parte del diseño original', 'Gn 2:17; Ro 5:12'],
            ['«La paga del pecado»', 'Ro 6:23'],
            ['Universal: está establecido que todos mueran una vez', 'He 9:27'],
            ['Un enemigo, «el postrer enemigo»', '1 Co 15:26'],
            ['Vencida por la resurrección de Cristo', '1 Co 15:54-57; 2 Ti 1:10'],
            ['Para el creyente, «ganancia» y estar con Cristo', 'Fil 1:21-23'],
            ['Al final, destruida: «ya no habrá muerte»', 'Ap 21:4'],
          ],
          nota: 'La Biblia no presenta la muerte como algo natural y amigable, sino como un enemigo derrotado.'
        } }
      ],
      texto: [
        'Génesis 5 es una lista de nombres con un estribillo que se repite como una campana: «y murió». Adán vivió novecientos treinta años, «y murió» (Gn 5:5). Set, «y murió». Enós, «y murió». La sentencia del Edén, «polvo eres, y al polvo volverás» (Gn 3:19), se cumplió en cada generación.',
        { h: 'La paga del pecado' },
        'La Biblia enseña que la muerte del ser humano no es algo natural, que Dios quiso desde el principio, sino una consecuencia del pecado: «por el pecado la muerte» (Ro 5:12); «la paga del pecado es muerte» (Ro 6:23). Por eso la muerte duele tanto. Aunque es universal, nunca nos parece normal. Algo dentro de nosotros sabe que no fuimos hechos para morir: Dios puso «eternidad en el corazón» del ser humano (Ec 3:11). Jesús mismo lloró ante la tumba de Lázaro (Jn 11:35).',
        { h: 'Un enemigo vencido' },
        'Pablo llama a la muerte «el postrer enemigo que será destruido» (1 Co 15:26). Pero también canta su derrota: «¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria? ya que el aguijón de la muerte es el pecado» (1 Co 15:55-56). Un aguijón que ya picó no puede volver a picar. Cristo recibió en su propio cuerpo el aguijón de la muerte, que es el pecado, y por eso la muerte ya no puede destruir al creyente. Sigue siendo un enemigo, pero un enemigo sin veneno. Y será destruida del todo: en la nueva creación, «ya no habrá muerte» (Ap 21:4).',
        { h: 'Aprender a contar los días' },
        'Moisés oró: «Enséñanos de tal modo a contar nuestros días, Que traigamos al corazón sabiduría» (Sal 90:12). Recordar que vamos a morir no es morboso: es sabio. Nos ayuda a vivir con prioridades correctas, a perdonar, a reconciliarnos y a prepararnos para encontrarnos con Dios. Para el que está en Cristo, la muerte es una puerta: «para mí el vivir es Cristo, y el morir es ganancia» (Fil 1:21).'
      ],
      pensar: 'Si supieras que te queda un año de vida, ¿qué cambiarías? Moisés pide a Dios que nos enseñe a contar los días. ¿Qué cosa importante has estado postergando?'
    },
    {
      id: 'creacion', n: 'La creación sujeta a vanidad', ref: 'Génesis 3:17-18; Romanos 8:19-23; Isaías 11:6-9; 24:4-6; Apocalipsis 21:1-5; 22:3',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque el anhelo ardiente de la creación es el aguardar la manifestación de los hijos de Dios. Porque la creación fue sujetada a vanidad, no por su propia voluntad, sino por causa del que la sujetó en esperanza; porque también la creación misma será libertada de la esclavitud de corrupción, a la libertad gloriosa de los hijos de Dios. Porque sabemos que toda la creación gime a una, y a una está con dolores de parto hasta ahora; y no sólo ella, sino que también nosotros mismos, que tenemos las primicias del Espíritu, nosotros también gemimos dentro de nosotros mismos, esperando la adopción, la redención de nuestro cuerpo.', ref: 'Romanos 8:19-23' }
      ],
      texto: [
        'El pecado no se quedó dentro del corazón humano. Cuando Dios habló a Adán, le dijo: «maldita será la tierra por tu causa» (Gn 3:17). La caída del ser humano arrastró consigo a la creación que él debía gobernar.',
        { h: 'Una creación que gime' },
        'Pablo lo describe en Romanos 8: «la creación fue sujetada a vanidad, no por su propia voluntad, sino por causa del que la sujetó en esperanza» (Ro 8:20). «Vanidad» es la misma idea de Eclesiastés: frustración, inutilidad, cosas que no logran su propósito. La creación está bajo «la esclavitud de corrupción» (Ro 8:21): lo que nace se desgasta, lo que crece se marchita. Y Pablo añade una imagen sorprendente: «toda la creación gime a una, y a una está con dolores de parto hasta ahora» (Ro 8:22).',
        'Los terremotos, las sequías, las enfermedades, el sufrimiento de los animales, todo lo que en el mundo parece roto, la Biblia lo relaciona con un mundo que dejó de estar bajo el gobierno sano del ser humano unido a Dios. Esto no significa que cada desastre sea un castigo por un pecado particular, como verá la estación VI.6. Significa que vivimos en un mundo caído, que no es como Dios lo hizo al principio.',
        { h: 'Dolores de parto' },
        'Pero Pablo no habla de dolores de muerte, sino de dolores de parto. El sufrimiento de la creación anuncia algo nuevo. Fue sujetada «en esperanza», y esa esperanza es que «la creación misma será libertada… a la libertad gloriosa de los hijos de Dios» (Ro 8:21). Cuando los hijos de Dios sean glorificados, la creación será renovada con ellos. Isaías lo pintó con imágenes de paz: el lobo con el cordero, el niño junto a la serpiente, y «la tierra será llena del conocimiento de Jehová» (Is 11:6-9).',
        { h: 'Nosotros también gemimos' },
        'El creyente no está fuera de este gemido: «también nosotros mismos, que tenemos las primicias del Espíritu, nosotros también gemimos dentro de nosotros mismos, esperando la adopción, la redención de nuestro cuerpo» (Ro 8:23). Vivimos entre lo que ya tenemos y lo que todavía esperamos. Mientras tanto, cuidamos la creación como mayordomos, y esperamos el día en que Dios dirá: «He aquí, yo hago nuevas todas las cosas» (Ap 21:5).',
        { ir: { t: 'Ver «La creación que gime» en La creación y los orígenes', a: '../../creacion-y-origenes/#esperanza/3' } }
      ],
      pensar: 'Cuando ves el sufrimiento del mundo, ¿te lleva a la desesperanza o a anhelar la nueva creación? ¿Cómo puedes vivir hoy como alguien que espera un mundo restaurado?'
    },
    {
      id: 'esclavos', n: 'Esclavos del pecado', ref: 'Juan 8:31-36; Romanos 6:16-23; 7:14-15; 2 Pedro 2:19; Proverbios 5:22; Tito 3:3',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Dijo entonces Jesús a los judíos que habían creído en él: Si vosotros permaneciereis en mi palabra, seréis verdaderamente mis discípulos; y conoceréis la verdad, y la verdad os hará libres. Le respondieron: Linaje de Abraham somos, y jamás hemos sido esclavos de nadie. ¿Cómo dices tú: Seréis libres? Jesús les respondió: De cierto, de cierto os digo, que todo aquel que hace pecado, esclavo es del pecado. Y el esclavo no queda en la casa para siempre; el hijo sí queda para siempre. Así que, si el Hijo os libertare, seréis verdaderamente libres.', ref: 'Juan 8:31-36' },
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-espiral.svg', alt: 'Una espiral que baja en cinco pasos según Santiago 1:14-15 y Romanos 1: el deseo atrae, el deseo concibe, nace el pecado, el pecado se vuelve costumbre y esclavitud, y termina en muerte; al lado, una flecha hacia arriba: la verdad de Cristo hace libres', pie: 'Cómo el pecado pasa de una tentación a una esclavitud (Stg 1:14-15; Jn 8:34). Cristo rompe la espiral.', origen: 'esquema' }
      ],
      texto: [
        'El pecado promete libertad. La serpiente prometió a Eva que sería como Dios; el mundo promete que, sin las reglas de Dios, uno será libre de verdad. Pero la Biblia dice que pasa exactamente lo contrario.',
        { h: 'Todo aquel que hace pecado' },
        'Jesús lo dijo a unos judíos que se creían libres por ser hijos de Abraham: «De cierto, de cierto os digo, que todo aquel que hace pecado, esclavo es del pecado» (Jn 8:34). Pedro describe a los falsos maestros que «Les prometen libertad, y son ellos mismos esclavos de corrupción. Porque el que es vencido por alguno es hecho esclavo del que lo venció» (2 P 2:19). Proverbios lo dice con una imagen: «Prenderán al impío sus propias iniquidades, Y retenido será con las cuerdas de su pecado» (Pr 5:22).',
        { h: 'Cómo se forma una cadena' },
        'El esquema muestra la espiral que describe Santiago: el deseo atrae y seduce, «la concupiscencia, después que ha concebido, da a luz el pecado; y el pecado, siendo consumado, da a luz la muerte» (Stg 1:15). Un pecado repetido se vuelve costumbre, la costumbre se vuelve carácter, y el carácter, cadena. Lo que al principio uno hacía porque quería, después lo hace aunque no quiera. Las adicciones (a las drogas, al alcohol, a la pornografía, al juego) son un ejemplo visible de algo que sucede con todo pecado. Pablo, describiendo la lucha de quien quiere obedecer con sus propias fuerzas, dijo: «no hago lo que quiero, sino lo que aborrezco, eso hago» (Ro 7:15).',
        { h: 'Elegir a quién servir' },
        'Pablo explica que todo ser humano sirve a alguien: «sois esclavos de aquel a quien obedecéis, sea del pecado para muerte, o sea de la obediencia para justicia» (Ro 6:16). No existe una tercera opción de libertad absoluta. La pregunta no es si serviremos, sino a quién.',
        { h: 'Verdaderamente libres' },
        'Y aquí está la buena noticia que Jesús dio en el mismo pasaje: «conoceréis la verdad, y la verdad os hará libres… Así que, si el Hijo os libertare, seréis verdaderamente libres» (Jn 8:32, 36). No hay cadena que Cristo no pueda romper. Muchos que fueron esclavos de vicios durante años han sido liberados por el poder de Dios, a veces en un instante, otras veces en un proceso acompañado por la iglesia. La ruta VII estudia esta libertad en Romanos 6.',
        { ir: { t: 'Ir a «Libres del pecado» (VII.3)', a: '#redencion/3' } }
      ],
      pensar: '¿Hay algo en tu vida que comenzó como una elección y hoy se siente como una cadena? Jesús dijo: «si el Hijo os libertare, seréis verdaderamente libres». ¿Se lo has presentado a Él, y has pedido ayuda a tu iglesia?'
    },
    {
      id: 'juicio', n: 'Culpa, vergüenza y juicio', ref: 'Romanos 1:18; 2:5-11; 3:19; Hebreos 9:27; Mateo 25:41, 46; 2 Tesalonicenses 1:9; Apocalipsis 20:11-15',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y vi un gran trono blanco y al que estaba sentado en él, de delante del cual huyeron la tierra y el cielo, y ningún lugar se encontró para ellos. Y vi a los muertos, grandes y pequeños, de pie ante Dios; y los libros fueron abiertos, y otro libro fue abierto, el cual es el libro de la vida; y fueron juzgados los muertos por las cosas que estaban escritas en los libros, según sus obras. Y el mar entregó los muertos que había en él; y la muerte y el Hades entregaron los muertos que había en ellos; y fueron juzgados cada uno según sus obras. Y la muerte y el Hades fueron lanzados al lago de fuego. Esta es la muerte segunda. Y el que no se halló inscrito en el libro de la vida fue lanzado al lago de fuego.', ref: 'Apocalipsis 20:11-15' }
      ],
      texto: [
        'El pecado no solo daña: deja una deuda. La Biblia habla de culpa, de la ira de Dios y de un juicio final. Son temas que hoy incomodan, pero sin ellos no se entiende la cruz.',
        { h: 'Culpables ante Dios' },
        'Culpa no es solo un sentimiento: es una realidad ante la ley. Una persona puede no sentirse culpable y serlo, o sentirse culpable sin serlo. Pablo dice que la ley habla «para que toda boca se cierre y todo el mundo quede bajo el juicio de Dios» (Ro 3:19). Delante de Dios, todos somos deudores. La vergüenza que sintieron Adán y Eva es el eco de esa culpa en el corazón.',
        { h: 'La ira de Dios' },
        '«Porque la ira de Dios se revela desde el cielo contra toda impiedad e injusticia de los hombres» (Ro 1:18). La ira de Dios no es un enojo descontrolado, como la ira humana. Es la reacción santa y justa de Dios contra el mal. Un Dios que no se opusiera a la injusticia, al abuso y a la mentira no sería bueno. La misma santidad que hace a Dios amor hace que no pueda aceptar el pecado.',
        { h: 'El juicio final' },
        '«Está establecido para los hombres que mueran una sola vez, y después de esto el juicio» (He 9:27). Juan vio el gran trono blanco, donde «fueron juzgados los muertos por las cosas que estaban escritas en los libros, según sus obras» (Ap 20:12). Y el que no se halló inscrito en el libro de la vida «fue lanzado al lago de fuego» (Ap 20:15), que es «la muerte segunda» (Ap 20:14). Jesús habló del castigo eterno más que nadie en la Biblia: «E irán éstos al castigo eterno, y los justos a la vida eterna» (Mt 25:46). Pablo lo describe como estar «excluidos de la presencia del Señor» (2 Ts 1:9). La muerte segunda es la muerte espiritual hecha definitiva: la separación eterna de Dios.',
        { h: 'Por qué hablar de esto' },
        'La Biblia no habla del juicio para aterrorizar, sino para advertir y para mostrar el tamaño del amor de Dios. Si no hubiera juicio, la cruz no sería necesaria. Pero la hay, y por eso Cristo cargó con nuestra culpa: «Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1). El juicio de Dios es real, y también lo es su oferta de perdón. El orden de los juicios futuros se estudia en Los últimos tiempos.',
        { ir: { t: 'Ver «Los juicios de Dios» en Los últimos tiempos', a: '../../escatologia/#temas/3' } },
        { ejercicio: {
          pregunta: '¿Qué es la «muerte segunda» de Apocalipsis 20:14?',
          opciones: [
            { t: 'La separación eterna de Dios, en el lago de fuego, de quienes no están inscritos en el libro de la vida.', ok: true, por_que: 'Correcto: es el juicio final, la muerte espiritual hecha definitiva (Ap 20:14-15; 2 Ts 1:9).' },
            { t: 'Volver a nacer en otro cuerpo después de morir.', ok: false, por_que: 'La Biblia enseña que se muere «una sola vez, y después de esto el juicio» (He 9:27).' },
            { t: 'Dejar de existir para siempre, sin conciencia.', ok: false, por_que: 'Jesús llama «castigo eterno» a lo que espera a los que rechazan a Dios, en paralelo con la «vida eterna» (Mt 25:46).' }
          ],
          explicacion: 'El juicio es la consecuencia final del pecado; la cruz es la respuesta de Dios a ese juicio.'
        } }
      ],
      pensar: 'Si hoy fueras llamado ante el trono de Dios, ¿en qué confiarías: en tus obras o en Cristo? Romanos 8:1 promete que no hay condenación para los que están en Él.'
    },
    {
      id: 'enfermedad', n: '¿Toda enfermedad viene de un pecado?', ref: 'Juan 9:1-3; Lucas 13:1-5; Job 1–2; 42:7; Juan 5:14; Santiago 5:14-16; 2 Corintios 12:7-10',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: 'img/hs-ciego.webp', alt: 'Jesús, visto de espaldas, se detiene junto a un hombre ciego de nacimiento sentado a la orilla de un camino de Jerusalén, mientras dos discípulos le preguntan', pie: '«Rabí, ¿quién pecó, éste o sus padres, para que haya nacido ciego?» (Jn 9:2). Recreación.', origen: 'ia' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Pecado y enfermedad: el equilibrio bíblico',
          cab: ['Verdad', 'Texto'],
          filas: [
            ['La enfermedad existe porque el mundo está caído', 'Gn 3; Ro 8:20-22'],
            ['A veces una enfermedad es consecuencia de un pecado personal', 'Jn 5:14; 1 Co 11:30; Stg 5:15-16'],
            ['Muchas veces no tiene relación con un pecado personal', 'Jn 9:3; Job 1:1; Lc 13:2-5'],
            ['Juzgar al enfermo es un error', 'Job 42:7'],
            ['Dios sana hoy, y Cristo proveyó la sanidad en la cruz', 'Is 53:5; Stg 5:14-15'],
            ['No todos son sanados ahora; la gracia de Dios basta', '2 Co 12:9; 2 Ti 4:20'],
          ],
          nota: 'Nunca se culpa al enfermo por no sanar.'
        } }
      ],
      texto: [
        'Al pasar junto a un hombre ciego de nacimiento, los discípulos preguntaron a Jesús: «Rabí, ¿quién pecó, éste o sus padres, para que haya nacido ciego?» (Jn 9:2). Daban por hecho que detrás de la enfermedad había un pecado concreto. Muchas personas siguen pensando así. ¿Qué responde la Biblia?',
        { h: 'Un mundo caído' },
        'En un sentido general, sí: la enfermedad existe porque el pecado entró en el mundo. En el Edén no había ceguera ni cáncer, y en la nueva creación no habrá «llanto, ni clamor, ni dolor» (Ap 21:4). Toda enfermedad es parte de la creación que gime bajo la corrupción (Ro 8:20-22).',
        { h: 'A veces, un pecado concreto' },
        'También es cierto que algunos pecados traen consecuencias en el cuerpo. El abuso del alcohol, las drogas, la inmoralidad sexual o el odio guardado pueden enfermar. Jesús dijo al paralítico de Betesda: «Mira, has sido sanado; no peques más, para que no te venga alguna cosa peor» (Jn 5:14). Santiago une la oración por el enfermo con la confesión: «Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados» (Stg 5:16).',
        { h: 'Pero no siempre' },
        'Jesús, sin embargo, corrigió a sus discípulos: «No es que pecó éste, ni sus padres, sino para que las obras de Dios se manifiesten en él» (Jn 9:3). Cuando le contaron de unos galileos asesinados por Pilato, preguntó: «¿Pensáis que estos galileos, porque padecieron tales cosas, eran más pecadores…? Os digo: No» (Lc 13:2-3). Y el libro de Job es una larga advertencia: Job era «perfecto y recto» (Job 1:1), y sus amigos, que le aseguraban que sufría por algún pecado, fueron reprendidos por Dios (Job 42:7).',
        { h: 'El equilibrio pentecostal' },
        'Este recurso, como La persona y obra de Cristo, enseña que la sanidad divina está provista en la obra de Cristo y que Dios sana hoy. Por eso oramos por los enfermos con fe. Pero también enseña que no todos son sanados ahora: Pablo dejó a Trófimo enfermo en Mileto (2 Ti 4:20), y a él mismo Dios le dijo: «Bástate mi gracia» (2 Co 12:9). Por eso nunca se culpa al enfermo de su enfermedad ni de no ser sanado, ni se le dice que le falta fe. Usar médicos y medicinas no es falta de fe. Y en el enfermo, como en el ciego de Juan 9, Dios puede mostrar sus obras, sea sanándolo o sosteniéndolo.',
        { ir: { t: 'Ver «Sanidad en la expiación» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/8' } }
      ],
      pensar: '¿Has juzgado alguna vez a alguien que sufre, pensando que «algo habrá hecho»? ¿O has cargado tú con esa culpa sin razón? ¿Qué te enseña la respuesta de Jesús en Juan 9:3?'
    },
    {
      id: 'sociedad', n: 'El pecado en la sociedad', ref: 'Génesis 4:8-24; 6:5, 11; 11:1-9; Isaías 1:16-17; 10:1-2; Amós 5:11-12, 24; Miqueas 6:8; Santiago 5:1-6',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cómo se extiende el pecado en Génesis 3 a 11',
          cab: ['Capítulo', 'Lo que pasa', 'Alcance'],
          filas: [
            ['Gn 3', 'Una pareja desobedece y se culpan entre sí', 'El matrimonio'],
            ['Gn 4:8', 'Caín mata a su hermano', 'La familia'],
            ['Gn 4:23-24', 'Lamec se jacta de que será vengado setenta veces siete', 'La cultura'],
            ['Gn 6:5, 11', 'La tierra se llena de violencia', 'Toda la sociedad'],
            ['Gn 11:4', 'La humanidad se une para hacerse un nombre contra Dios', 'Las naciones'],
          ],
          nota: 'El pecado comienza en un corazón, pero no se queda allí: se extiende a la familia, a la cultura y a las naciones.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Por tanto, puesto que vejáis al pobre y recibís de él carga de trigo, edificasteis casas de piedra labrada, mas no las habitaréis; plantasteis hermosas viñas, mas no beberéis el vino de ellas. Porque yo sé de vuestras muchas rebeliones, y de vuestros grandes pecados; sé que afligís al justo, y recibís cohecho, y en los tribunales hacéis perder su causa a los pobres. Por tanto, el prudente en tal tiempo calla, porque el tiempo es malo. Buscad lo bueno, y no lo malo, para que viváis; porque así Jehová Dios de los ejércitos estará con vosotros, como decís. Aborreced el mal, y amad el bien, y estableced la justicia en juicio; quizá Jehová Dios de los ejércitos tendrá piedad del remanente de José.', ref: 'Amós 5:11-15' }
      ],
      texto: [
        'El pecado es siempre personal: cada uno responde por lo que hace. Pero no es solo individual. Génesis 3 a 11 muestra cómo un pecado en un huerto se extiende hasta llenar la tierra.',
        { h: 'Del corazón a la ciudad' },
        'La tabla sigue el camino del pecado en los primeros capítulos de la Biblia. Comienza en una pareja, que se culpa mutuamente. En la generación siguiente, un hermano mata a otro. Unas generaciones después, Lamec compone un poema para jactarse de su venganza (Gn 4:23-24): el pecado ya es parte de la cultura, se canta y se celebra. En tiempos de Noé, «estaba la tierra llena de violencia» (Gn 6:11). Y en Babel, la humanidad entera se organiza para hacerse un nombre sin Dios. La estación «La tierra llena de violencia» de La creación y los orígenes cuenta esta historia.',
        { h: 'Injusticias que se vuelven sistema' },
        'Los profetas denunciaron pecados que no eran solo de una persona, sino de toda una sociedad. Amós acusó a los que oprimían al pobre, aceptaban soborno y torcían el juicio en la puerta de la ciudad (Am 5:11-12). Isaías habló contra los que «dictan leyes injustas» para quitar el derecho a los pobres y a las viudas (Is 10:1-2). Santiago denunció a los ricos que retenían el salario de los obreros (Stg 5:4). Cuando muchos pecados personales se acumulan, se forman costumbres, leyes y estructuras injustas, que luego afectan a personas que no las eligieron: la corrupción, la explotación, la violencia organizada, el racismo, el abandono de los débiles.',
        { h: 'Lo que Dios pide' },
        'Frente a esto, el llamado de Dios es claro: «corra el juicio como las aguas, y la justicia como impetuoso arroyo» (Am 5:24). Miqueas lo resume: «Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios» (Mi 6:8). El creyente no puede cambiar la sociedad solo con leyes; la raíz es el corazón, y solo el evangelio lo cambia. Pero tampoco puede ser indiferente a la injusticia. El evangelio transforma personas, y las personas transformadas son sal y luz en su barrio, su trabajo y su país (Mt 5:13-16).',
        { ir: { t: 'Ver «La tierra llena de violencia» en La creación y los orígenes', a: '../../creacion-y-origenes/#cain/6' } }
      ],
      pensar: '¿Hay alguna injusticia cerca de ti que has aprendido a ver como «normal»? ¿Qué podrías hacer, como sal y luz, en tu familia, tu trabajo o tu barrio?'
    }
  ];

  window.__HUMANO.original = original;
  window.__HUMANO.consecuencias = consecuencias;
})();
(() => {
  /* ---------------- VII. De la caída a la redención ----------------
     Puente hacia La salvación (nº 106, en preparación): aquí se presenta la respuesta de Dios
     al pecado; la justificación, la regeneración y la seguridad se estudiarán allí.
     Decisión del responsable: en Romanos 7 prevalece la lectura del creyente que lucha en sus
     propias fuerzas. */
  const redencion = [
    {
      id: 'donde-estas', n: '«¿Dónde estás tú?»', ref: 'Génesis 3:8-9; Lucas 15:1-24; 19:10; Isaías 1:18; Romanos 5:8; 1 Juan 4:10, 19',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: 'img/hs-prodigo.webp', alt: 'Un padre anciano corre por un camino de tierra y abraza a su hijo joven, harapiento y descalzo, que vuelve a casa; al fondo, la casa de campo y los criados que salen', pie: '«Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó» (Lc 15:20). Recreación.', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y volviendo en sí, dijo: ¡Cuántos jornaleros en casa de mi padre tienen abundancia de pan, y yo aquí perezco de hambre! Me levantaré e iré a mi padre, y le diré: Padre, he pecado contra el cielo y contra ti. Ya no soy digno de ser llamado tu hijo; hazme como a uno de tus jornaleros. Y levantándose, vino a su padre. Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó. Y el hijo le dijo: Padre, he pecado contra el cielo y contra ti, y ya no soy digno de ser llamado tu hijo. Pero el padre dijo a sus siervos: Sacad el mejor vestido, y vestidle; y poned un anillo en su mano, y calzado en sus pies. Y traed el becerro gordo y matadlo, y comamos y hagamos fiesta; porque este mi hijo muerto era, y ha revivido; se había perdido, y es hallado. Y comenzaron a regocijarse.', ref: 'Lucas 15:17-24' }
      ],
      texto: [
        'Las primeras palabras de Dios al ser humano caído no fueron una sentencia, sino una pregunta: «Mas Jehová Dios llamó al hombre, y le dijo: ¿Dónde estás tú?» (Gn 3:9). Adán se escondía; Dios lo buscaba. Así comienza la historia de la redención.',
        { h: 'Dios toma la iniciativa' },
        'Toda la Biblia repite ese movimiento. No es el ser humano el que busca a Dios: «No hay quien busque a Dios» (Ro 3:11). Es Dios quien busca al ser humano. Llamó a Abraham en Ur, salió al encuentro de Jacob en Betel, llamó a Moisés desde la zarza, envió profetas una y otra vez. Y al final envió a su Hijo. Jesús lo dijo de sí mismo: «el Hijo del Hombre vino a buscar y a salvar lo que se había perdido» (Lc 19:10).',
        { h: 'Tres parábolas de lo perdido' },
        'En Lucas 15, Jesús contó tres historias seguidas a los fariseos que lo criticaban por recibir a los pecadores: una oveja perdida, una moneda perdida y un hijo perdido. En las tres, lo perdido no puede encontrarse solo; en las tres, alguien sale a buscar; y en las tres termina en fiesta: «habrá más gozo en el cielo por un pecador que se arrepiente, que por noventa y nueve justos que no necesitan de arrepentimiento» (Lc 15:7).',
        'La tercera parábola es la más conocida. El hijo menor pidió su herencia, la malgastó lejos y terminó cuidando cerdos. Cuando «volvió en sí», decidió regresar y decir: «Padre, he pecado contra el cielo y contra ti» (Lc 15:17-18). Pero el padre ya lo esperaba: lo vio de lejos, corrió, lo abrazó y lo besó antes de que terminara su confesión. Le dio el mejor vestido, un anillo y calzado, y mandó hacer fiesta: «este mi hijo muerto era, y ha revivido; se había perdido, y es hallado» (Lc 15:24).',
        { h: 'Nos amó primero' },
        'El evangelio no dice que Dios nos ama porque cambiamos, sino que cambiamos porque Él nos amó primero. «Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros» (Ro 5:8). «En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros» (1 Jn 4:10). La pregunta del Edén sigue resonando: ¿Dónde estás tú? No es una amenaza. Es la voz de un Padre que busca.'
      ],
      pensar: 'Si Dios te preguntara hoy «¿Dónde estás tú?», ¿qué le responderías con sinceridad? Él no pregunta para avergonzarte, sino para llevarte a casa.'
    },
    {
      id: 'postrer-adan', n: 'El postrer Adán', ref: '1 Corintios 15:21-22, 45-49; Romanos 5:15-19; Mateo 4:1-11; Lucas 22:39-46; Hebreos 2:14-18',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'El primer Adán y el postrer Adán',
          cab: ['', 'Adán', 'Cristo'],
          filas: [
            ['Origen', 'Formado del polvo (Gn 2:7)', 'El Señor, que es del cielo (1 Co 15:47)'],
            ['Lugar de la prueba', 'Un huerto lleno de abundancia', 'Un desierto, con hambre (Mt 4:2)'],
            ['Respuesta a la tentación', 'Desobedeció', 'Venció: «Escrito está» (Mt 4:4)'],
            ['En el huerto', 'Se escondió de Dios (Gn 3:8)', 'En Getsemaní: «no se haga mi voluntad» (Lc 22:42)'],
            ['Un árbol', 'Comió del árbol prohibido', 'Llevó nuestros pecados sobre el madero (1 P 2:24)'],
            ['Resultado', 'Pecado, condenación y muerte para los suyos', 'Justicia, justificación y vida para los suyos (Ro 5:18)'],
            ['Lo que da', '«Alma viviente»', '«Espíritu vivificante» (1 Co 15:45)'],
          ],
          nota: 'Cristo no solo deshizo lo que hizo Adán: llevó a la humanidad más lejos de lo que Adán llegó.'
        } },
        { tipo: 'imagen', titulo: 'Ilustración', src: '../persona-y-obra-de-cristo/img/golgota.webp', alt: 'La crucifixión en el Gólgota, vista a distancia bajo un cielo oscuro', pie: '«Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero» (1 P 2:24). Recreación (imagen de La persona y obra de Cristo).', origen: 'ia' }
      ],
      texto: [
        'Pablo llama a Jesús con un nombre sorprendente: «Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante» (1 Co 15:45). Jesús es el último Adán: el comienzo de una nueva humanidad.',
        { h: 'Donde Adán cayó, Cristo venció' },
        'La tabla compara a los dos. Adán fue probado en un huerto donde tenía todo lo que necesitaba, y cayó. Cristo fue probado en un desierto, después de cuarenta días sin comer, y venció con la Palabra. Adán, en un huerto, se escondió de Dios; Cristo, en el huerto de Getsemaní, se entregó a la voluntad del Padre con angustia de muerte: «no se haga mi voluntad, sino la tuya» (Lc 22:42). Adán tomó del árbol lo que no le correspondía; Cristo fue colgado en un madero para cargar con lo que no le correspondía.',
        { h: 'Una nueva cabeza' },
        'Lo más importante es que Cristo, como Adán, actuó como representante. «Así que, como por la transgresión de uno vino la condenación a todos los hombres, de la misma manera por la justicia de uno vino a todos los hombres la justificación de vida» (Ro 5:18). Quien está unido a Cristo por la fe pasa de la humanidad de Adán a la humanidad de Cristo. Pablo lo dice con una frase muy usada: estar «en Cristo». Y esa nueva humanidad tiene un destino: «así como hemos traído la imagen del terrenal, traeremos también la imagen del celestial» (1 Co 15:49).',
        { h: 'Verdaderamente hombre' },
        'Para ser el postrer Adán, el Hijo de Dios tuvo que hacerse verdaderamente hombre. «Así que, por cuanto los hijos participaron de carne y sangre, él también participó de lo mismo» (He 2:14), y «debía ser en todo semejante a sus hermanos» (He 2:17). Por eso puede ayudarnos: «en cuanto él mismo padeció siendo tentado, es poderoso para socorrer a los que son tentados» (He 2:18). La ruta «La cruz» de La persona y obra de Cristo estudia cómo su muerte nos salva.',
        { ir: { t: 'Ver «Sacrificio y sustitución» en La persona y obra de Cristo', a: '../../persona-y-obra-de-cristo/#cruz/3' } },
        { ejercicio: {
          pregunta: '¿Por qué Pablo llama a Cristo «el postrer Adán»?',
          opciones: [
            { t: 'Porque, como Adán, es cabeza de una humanidad; pero por su obediencia trae vida y justicia a los que están en Él.', ok: true, por_que: 'Correcto: los dos son representantes, con resultados opuestos (Ro 5:18-19; 1 Co 15:22).' },
            { t: 'Porque Cristo fue creado del polvo como Adán.', ok: false, por_que: 'Pablo dice lo contrario: el segundo hombre «es el Señor, es del cielo» (1 Co 15:47). Se hizo hombre, pero no fue creado.' },
            { t: 'Porque Cristo es el último hombre que nacerá en la historia.', ok: false, por_que: '«Postrer» no se refiere al tiempo de su nacimiento, sino a que inaugura la humanidad definitiva.' }
          ],
          explicacion: 'En Adán todos mueren; en Cristo todos los que creen son vivificados.'
        } }
      ],
      pensar: 'Naciste en la humanidad de Adán. ¿Puedes decir que hoy estás «en Cristo»? ¿Qué diferencia práctica hace en tu vida pertenecer a la nueva humanidad?'
    },
    {
      id: 'libres', n: 'Libres del pecado', ref: 'Romanos 6:1-23; 2 Corintios 5:17; Gálatas 2:20; Colosenses 3:1-10',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'sabiendo esto, que nuestro viejo hombre fue crucificado juntamente con él, para que el cuerpo del pecado sea destruido, a fin de que no sirvamos más al pecado. Porque el que ha muerto, ha sido justificado del pecado. Y si morimos con Cristo, creemos que también viviremos con él; sabiendo que Cristo, habiendo resucitado de los muertos, ya no muere; la muerte no se enseñorea más de él. Porque en cuanto murió, al pecado murió una vez por todas; mas en cuanto vive, para Dios vive. Así también vosotros consideraos muertos al pecado, pero vivos para Dios en Cristo Jesús, Señor nuestro. No reine, pues, el pecado en vuestro cuerpo mortal, de modo que lo obedezcáis en sus concupiscencias; ni tampoco presentéis vuestros miembros al pecado como instrumentos de iniquidad, sino presentaos vosotros mismos a Dios como vivos de entre los muertos, y vuestros miembros a Dios como instrumentos de justicia. Porque el pecado no se enseñoreará de vosotros; pues no estáis bajo la ley, sino bajo la gracia.', ref: 'Romanos 6:6-14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Cuatro verbos de Romanos 6',
          cab: ['Verbo', 'Qué pide', 'Texto'],
          filas: [
            ['Saber', 'Conocer lo que pasó: el viejo hombre fue crucificado con Cristo', 'Ro 6:3, 6, 9'],
            ['Considerar', 'Contarse a uno mismo muerto al pecado y vivo para Dios', 'Ro 6:11'],
            ['No dejar reinar', 'No obedecer los deseos del pecado', 'Ro 6:12'],
            ['Presentar', 'Entregar el cuerpo a Dios como instrumento de justicia', 'Ro 6:13, 19'],
          ],
          nota: 'Primero lo que Dios hizo (saber, considerar); después lo que el creyente hace (no dejar reinar, presentar).'
        } }
      ],
      texto: [
        'Después de explicar en Romanos 5 que la gracia sobreabundó donde abundó el pecado, Pablo anticipó una pregunta peligrosa: «¿Perseveraremos en el pecado para que la gracia abunde?» (Ro 6:1). Si Dios perdona todo, ¿da lo mismo seguir pecando? Su respuesta fue tajante: «En ninguna manera. Porque los que hemos muerto al pecado, ¿cómo viviremos aún en él?» (Ro 6:2).',
        { h: 'Muertos y resucitados con Cristo' },
        'Pablo explica que el creyente está unido a Cristo en su muerte y en su resurrección, y que el bautismo en agua es la señal de esa unión: «somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva» (Ro 6:4). Algo real ocurrió: «nuestro viejo hombre fue crucificado juntamente con él, para que el cuerpo del pecado sea destruido, a fin de que no sirvamos más al pecado» (Ro 6:6). El «viejo hombre» es lo que éramos en Adán. Esa vida terminó en la cruz.',
        { h: 'Considerar y presentar' },
        'La tabla resume cuatro verbos del capítulo. Los dos primeros miran lo que Dios ya hizo: saberlo y considerarlo verdad. «Así también vosotros consideraos muertos al pecado, pero vivos para Dios en Cristo Jesús» (Ro 6:11). Los dos últimos miran lo que el creyente hace en respuesta: «No reine, pues, el pecado en vuestro cuerpo mortal» (Ro 6:12), y «presentaos vosotros mismos a Dios como vivos de entre los muertos» (Ro 6:13). La victoria sobre el pecado no comienza con el esfuerzo, sino con la fe en lo que Cristo hizo; pero la fe se demuestra en decisiones concretas.',
        { h: 'El pecado no se enseñoreará' },
        'Pablo da una promesa: «el pecado no se enseñoreará de vosotros; pues no estáis bajo la ley, sino bajo la gracia» (Ro 6:14). No dice que el creyente ya no pueda pecar, sino que el pecado ya no es su amo. Antes era esclavo sin salida; ahora tiene un nuevo Señor y el poder del Espíritu. La santificación, el proceso de ser hechos santos, comienza aquí. El Espíritu Santo, que mora en el creyente, es quien la lleva adelante.',
        { ir: { t: 'Ver «Intercede y santifica» en El Espíritu Santo', a: '../../espiritu-santo/#salvacion/7' } }
      ],
      pensar: 'Pablo pide «considerarse» muerto al pecado. ¿Hay algún pecado frente al cual sigues pensando «no puedo dejarlo»? ¿Qué cambiaría si creyeras de verdad que ya no es tu amo?'
    },
    {
      id: 'creyente-peca', n: 'El creyente que peca', ref: '1 Juan 1:5–2:2; Salmos 32:5; Proverbios 24:16; Lucas 22:31-32, 61-62; Juan 21:15-17',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Si decimos que no tenemos pecado, nos engañamos a nosotros mismos, y la verdad no está en nosotros. Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad. Si decimos que no hemos pecado, le hacemos a él mentiroso, y su palabra no está en nosotros.', ref: '1 Juan 1:8-10' },
        { tipo: 'cita', titulo: '1 Juan 2:1-2', texto: 'Hijitos míos, estas cosas os escribo para que no pequéis; y si alguno hubiere pecado, abogado tenemos para con el Padre, a Jesucristo el justo. Y él es la propiciación por nuestros pecados; y no solamente por los nuestros, sino también por los de todo el mundo.', ref: '1 Juan 2:1-2' }
      ],
      texto: [
        'Si el pecado ya no es el amo del creyente, ¿qué pasa cuando un cristiano peca? Ocurre, y la Biblia no lo esconde. Pedro negó a Jesús tres veces. David cayó gravemente. Juan escribió su primera carta pensando en esa realidad.',
        { h: 'Dos errores opuestos' },
        'Juan corrige primero a los que decían no tener pecado: «Si decimos que no tenemos pecado, nos engañamos a nosotros mismos, y la verdad no está en nosotros» (1 Jn 1:8). Nadie en esta vida está libre de toda falta. Pero en seguida corrige el error contrario, el de tomar el pecado a la ligera: «Hijitos míos, estas cosas os escribo para que no pequéis» (1 Jn 2:1). El cristiano no vive en pecado, ni lo busca, ni lo justifica. Pero cuando cae, no se queda caído.',
        { h: 'Confesar' },
        'El camino de vuelta es la confesión: «Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad» (1 Jn 1:9). Confesar significa decir lo mismo que Dios dice sobre lo que hicimos: llamarlo pecado, sin excusas. Y Juan dice que Dios es «fiel y justo» para perdonar. Fiel, porque lo prometió. Justo, porque Cristo ya pagó: perdonar al que confiesa no es una injusticia, sino la consecuencia de la cruz.',
        { h: 'Un abogado' },
        '«Y si alguno hubiere pecado, abogado tenemos para con el Padre, a Jesucristo el justo. Y él es la propiciación por nuestros pecados» (1 Jn 2:1-2). Cuando el creyente peca, no pierde a su Abogado; al contrario, es entonces cuando más lo necesita. Jesús dijo a Pedro antes de su caída: «yo he rogado por ti, que tu fe no falte; y tú, una vez vuelto, confirma a tus hermanos» (Lc 22:32). Después de la resurrección, lo restauró junto al mar de Galilea con una pregunta repetida tres veces: «¿me amas?» (Jn 21:15-17).',
        { h: 'Levantarse' },
        'Proverbios dice: «siete veces cae el justo, y vuelve a levantarse» (Pr 24:16). La diferencia entre el justo y el impío no es que uno nunca cae, sino que el justo se levanta. El peligro no está en caer, sino en quedarse en el suelo, escondido como Adán. La seguridad de la salvación y la pregunta de si un creyente puede apartarse se estudiarán en La salvación.',
        { ejercicio: {
          pregunta: 'Según 1 Juan 1:8–2:2, ¿qué debe hacer un creyente cuando peca?',
          opciones: [
            { t: 'Confesar su pecado a Dios, confiando en Cristo, su abogado y propiciación, que lo perdona y lo limpia.', ok: true, por_que: 'Correcto: «Si confesamos nuestros pecados, él es fiel y justo para perdonar» (1 Jn 1:9).' },
            { t: 'Pensar que, como ya es cristiano, no necesita confesar nada.', ok: false, por_que: 'Juan dice que quien afirma no tener pecado se engaña (1 Jn 1:8).' },
            { t: 'Alejarse de Dios hasta sentirse digno de volver.', ok: false, por_que: 'Eso es repetir el error de Adán. Cristo es nuestro abogado precisamente cuando pecamos (1 Jn 2:1).' }
          ],
          explicacion: 'El creyente no vive en pecado, pero cuando cae, confiesa y se levanta, apoyado en Cristo.'
        } }
      ],
      pensar: '¿Hay algún pecado reciente que todavía no has confesado a Dios? Hazlo hoy, con sus palabras: Él es fiel y justo para perdonar.'
    },
    {
      id: 'romanos7', n: 'La lucha de Romanos 7', ref: 'Romanos 7:14–8:4; Gálatas 5:16-25; Filipenses 4:13',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y yo sé que en mí, esto es, en mi carne, no mora el bien; porque el querer el bien está en mí, pero no el hacerlo. Porque no hago el bien que quiero, sino el mal que no quiero, eso hago. Y si hago lo que no quiero, ya no lo hago yo, sino el pecado que mora en mí. Así que, queriendo yo hacer el bien, hallo esta ley: que el mal está en mí. Porque según el hombre interior, me deleito en la ley de Dios; pero veo otra ley en mis miembros, que se rebela contra la ley de mi mente, y que me lleva cautivo a la ley del pecado que está en mis miembros. ¡Miserable de mí! ¿quién me librará de este cuerpo de muerte? Gracias doy a Dios, por Jesucristo Señor nuestro. Así que, yo mismo con la mente sirvo a la ley de Dios, mas con la carne a la ley del pecado.', ref: 'Romanos 7:18-25' },
        { tipo: 'cita', titulo: 'Romanos 8:1-4', texto: 'Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús, los que no andan conforme a la carne, sino conforme al Espíritu. Porque la ley del Espíritu de vida en Cristo Jesús me ha librado de la ley del pecado y de la muerte. Porque lo que era imposible para la ley, por cuanto era débil por la carne, Dios, enviando a su Hijo en semejanza de carne de pecado y a causa del pecado, condenó al pecado en la carne; para que la justicia de la ley se cumpliese en nosotros, que no andamos conforme a la carne, sino conforme al Espíritu.', ref: 'Romanos 8:1-4' }
      ],
      texto: [
        'Pocos pasajes describen tan bien la lucha interior como Romanos 7. Pablo escribe en primera persona: «no hago el bien que quiero, sino el mal que no quiero, eso hago» (Ro 7:19). Y termina con un grito: «¡Miserable de mí! ¿quién me librará de este cuerpo de muerte?» (Ro 7:24). Muchos creyentes se han reconocido en estas palabras. ¿De quién habla Pablo?',
        { posturas: {
          titulo: '¿A quién describe Romanos 7:14-25?',
          a: { n: 'A un creyente que lucha con sus propias fuerzas', t: 'Pablo describe a alguien que ama la ley de Dios («según el hombre interior, me deleito en la ley de Dios», Ro 7:22), algo que no dice un incrédulo; pero que intenta vencer el pecado con su voluntad y con la ley, sin depender del Espíritu, que no se menciona ni una vez en Romanos 7:14-25 y aparece veinte veces en Romanos 8. Es el creyente que todavía no ha descubierto «la ley del Espíritu de vida» (Ro 8:2). Esta lectura, la que prevalece en este recurso, es común en la enseñanza pentecostal y de santidad.' },
          b: { n: 'A Pablo antes de su conversión, bajo la ley', t: 'Otros, desde los primeros siglos y en la tradición wesleyana, piensan que Pablo describe al judío piadoso bajo la ley, o al pecador despertado por la ley antes de conocer a Cristo. Señalan que el que habla está «vendido al pecado» (Ro 7:14) y «cautivo» (Ro 7:23), algo que Romanos 6:18 niega del creyente. En la tradición reformada, en cambio, se lee como la lucha normal de todo creyente maduro durante toda su vida.' },
          c: 'Todas las lecturas coinciden en lo esencial: la ley es buena pero no puede dar la victoria, la carne no puede vencer a la carne, y la respuesta no está en Romanos 7 sino en Romanos 8: «Gracias doy a Dios, por Jesucristo Señor nuestro» (Ro 7:25) y «ninguna condenación hay para los que están en Cristo Jesús» (Ro 8:1).'
        } },
        { h: 'De Romanos 7 a Romanos 8' },
        'Lo más importante del pasaje es hacia dónde lleva. En Romanos 7, el protagonista es «yo»: la palabra se repite decenas de veces. En Romanos 8, el protagonista es el Espíritu Santo. «Porque la ley del Espíritu de vida en Cristo Jesús me ha librado de la ley del pecado y de la muerte» (Ro 8:2). Lo que la ley no podía hacer, Dios lo hizo enviando a su Hijo, «para que la justicia de la ley se cumpliese en nosotros, que no andamos conforme a la carne, sino conforme al Espíritu» (Ro 8:4).',
        { h: 'La victoria es del Espíritu' },
        'Muchos creyentes viven en Romanos 7: aman a Dios, quieren obedecer, y fracasan una y otra vez porque lo intentan con su propia fuerza. La salida no es esforzarse más, sino depender más. Pablo lo dice en Gálatas: «Andad en el Espíritu, y no satisfagáis los deseos de la carne» (Gá 5:16). Esto incluye la oración, la Palabra, la comunión con la iglesia y la llenura del Espíritu. La lucha no desaparece en esta vida, pero ya no es una derrota segura: es una guerra en la que el creyente pelea del lado ganador.',
        { ir: { t: 'Ver «Andar en el Espíritu» en El Espíritu Santo', a: '../../espiritu-santo/#vida/1' } }
      ],
      pensar: '¿Te has sentido alguna vez como en Romanos 7, queriendo el bien y sin poder hacerlo? ¿Estás peleando con tus propias fuerzas, o aprendiendo a andar en el Espíritu?'
    },
    {
      id: 'victoria', n: 'Tentación y victoria', ref: '1 Corintios 10:12-13; Hebreos 4:15-16; Santiago 1:12-15; 4:7-8; Mateo 26:41; 2 Timoteo 2:22; Efesios 6:10-18',
      visual: [
        { tipo: 'imagen', titulo: 'Ilustración', src: '../persona-y-obra-de-cristo/img/tentacion-desierto.webp', alt: 'Jesús, visto de espaldas, solo en el desierto de Judea, de pie sobre una roca frente a un paisaje árido', pie: '«Fue tentado en todo según nuestra semejanza, pero sin pecado» (He 4:15). Recreación (imagen de La persona y obra de Cristo).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Así que, el que piensa estar firme, mire que no caiga. No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar.', ref: '1 Corintios 10:12-13' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Recursos bíblicos frente a la tentación',
          cab: ['Recurso', 'Texto'],
          filas: [
            ['Velar y orar', 'Mt 26:41'],
            ['Responder con la Palabra', 'Mt 4:4; Sal 119:11'],
            ['Huir de lo que alimenta el deseo', '2 Ti 2:22; 1 Co 6:18'],
            ['Someterse a Dios y resistir al diablo', 'Stg 4:7'],
            ['Tomar toda la armadura de Dios', 'Ef 6:10-18'],
            ['Buscar ayuda y rendir cuentas', 'Stg 5:16; Gá 6:1-2'],
            ['Acercarse al trono de la gracia', 'He 4:16'],
          ],
          nota: 'Dios no promete que no habrá tentación, sino que siempre habrá una salida.'
        } }
      ],
      texto: [
        'Ser tentado no es pecar. Jesús fue tentado y no pecó. La tentación llega a todos, y en la vida cristiana no desaparece. Pero la Biblia promete algo mejor que una vida sin tentación: una vida con victoria.',
        { h: 'Una promesa para todos' },
        'Pablo escribió a los corintios: «No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar» (1 Co 10:13). Este versículo dice tres cosas. Tu tentación no es única: otros pasaron por lo mismo. Dios pone un límite: nunca será más fuerte que la gracia disponible. Y siempre hay una salida: una puerta que Dios abre, aunque a veces haya que buscarla.',
        { h: 'Un sumo sacerdote que entiende' },
        'Jesús no nos mira desde lejos. «Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado» (He 4:15). Por eso la invitación es directa: «Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro» (He 4:16). En el momento de la tentación, la oración no es un último recurso: es el primero.',
        { h: 'Pelear con sabiduría' },
        'La tabla reúne recursos que da la Escritura. Jesús en Getsemaní pidió: «Velad y orad, para que no entréis en tentación» (Mt 26:41). En el desierto respondió con la Palabra. Pablo aconseja a Timoteo: «Huye también de las pasiones juveniles» (2 Ti 2:22). Hay tentaciones que se resisten de frente y otras de las que hay que huir, como José huyó de la mujer de Potifar dejando su ropa (Gn 39:12). Y hay luchas que no se ganan solos: confesar a un hermano maduro y pedir que ore y nos acompañe es parte del camino (Stg 5:16).',
        { h: 'La corona de vida' },
        'Santiago termina con una bienaventuranza: «Bienaventurado el varón que soporta la tentación; porque cuando haya resistido la prueba, recibirá la corona de vida, que Dios ha prometido a los que le aman» (Stg 1:12). Cada tentación vencida fortalece el carácter, y cada victoria es obra de la gracia.'
      ],
      pensar: 'Piensa en la tentación que más te cuesta. ¿Cuál es la «salida» que Dios te ha mostrado y no has tomado? ¿Con quién podrías hablar para no pelear solo?'
    },
    {
      id: 'glorificados', n: 'Restaurados a la imagen de Cristo', ref: 'Romanos 8:29-30; 2 Corintios 3:18; Filipenses 1:6; 3:20-21; 1 Juan 3:2-3; Apocalipsis 21:3-4; 22:3-5',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-cuatro-estados.svg', alt: 'Cuatro columnas que muestran la historia del ser humano: creado, caído, redimido y glorificado', pie: 'Del Edén a la nueva Jerusalén: el ser humano creado, caído, redimido y, al final, glorificado.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Y oí una gran voz del cielo que decía: He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios. Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron. Y el que estaba sentado en el trono dijo: He aquí, yo hago nuevas todas las cosas. Y me dijo: Escribe; porque estas palabras son fieles y verdaderas.', ref: 'Apocalipsis 21:3-5' }
      ],
      texto: [
        'Este recurso comenzó con una pregunta del Salmo 8: «¿Qué es el hombre?». Recorrió su creación a imagen de Dios, su caída, la profundidad del pecado y la respuesta de Dios en Cristo. Termina con el destino final del ser humano redimido.',
        { h: 'La cadena de oro' },
        'Pablo resume el plan de Dios en una cadena que no se rompe: «a los que antes conoció, también los predestinó para que fuesen hechos conformes a la imagen de su Hijo… y a los que justificó, a éstos también glorificó» (Ro 8:29-30). La meta de la salvación no es solo el perdón: es que seamos como Cristo. Dios terminará lo que comenzó: «el que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo» (Fil 1:6).',
        { h: 'Un cuerpo glorioso' },
        'Cuando Cristo vuelva, completará la obra en nuestros cuerpos. «Mas nuestra ciudadanía está en los cielos, de donde también esperamos al Salvador, al Señor Jesucristo; el cual transformará el cuerpo de la humillación nuestra, para que sea semejante al cuerpo de la gloria suya» (Fil 3:20-21). La debilidad, la enfermedad, la vejez y la muerte quedarán atrás.',
        { h: 'Seremos semejantes a Él' },
        'Y también el corazón será completamente libre. «Sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es» (1 Jn 3:2). El esquema muestra el último estado del ser humano: glorificado, ya no podrá pecar. No porque pierda su libertad, sino porque la tendrá completa. Adán podía no pecar; el redimido glorificado ya no podrá pecar, porque estará confirmado para siempre en el amor de Dios.',
        { h: 'Dios con los hombres' },
        'La Biblia termina donde comenzó, pero mejor. En el Edén, Dios se paseaba con el ser humano en el huerto. En la nueva Jerusalén, «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo» (Ap 21:3). No habrá más muerte, ni llanto, ni dolor. «Y no habrá más maldición… y verán su rostro» (Ap 22:3-4). Lo que el pecado rompió en Génesis 3, Dios lo restaura para siempre.',
        { h: 'Mientras tanto' },
        'Juan añade una aplicación práctica: «Y todo aquel que tiene esta esperanza en él, se purifica a sí mismo, así como él es puro» (1 Jn 3:3). La esperanza del futuro cambia el presente. Quien sabe que será como Cristo comienza ya a parecerse a Él.',
        { ir: { t: 'Ver «Cielos nuevos y tierra nueva» en Los últimos tiempos', a: '../../escatologia/#eventos/22' } }
      ],
      pensar: 'Un día verás a Cristo y serás semejante a Él. ¿Qué cosa de tu vida actual quisieras empezar a purificar hoy, pensando en ese día?'
    }
  ];

  /* ---------------- VIII. Textos difíciles y errores ----------------
     Decisiones del responsable: se rechazan las maldiciones generacionales sobre el creyente;
     los errores se describen nombrando a sus maestros y grupos, con respeto por sus miembros. */
  const textos = [
    {
      id: 'concibio', n: '«En pecado me concibió mi madre»', ref: 'Salmos 51:5; 58:3; Génesis 8:21; Job 14:4; Efesios 2:3; Hebreos 13:4',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Ten piedad de mí, oh Dios, conforme a tu misericordia; Conforme a la multitud de tus piedades borra mis rebeliones. Lávame más y más de mi maldad, Y límpiame de mi pecado. Porque yo reconozco mis rebeliones, Y mi pecado está siempre delante de mí. Contra ti, contra ti solo he pecado, Y he hecho lo malo delante de tus ojos; Para que seas reconocido justo en tu palabra, Y tenido por puro en tu juicio. He aquí, en maldad he sido formado, Y en pecado me concibió mi madre.', ref: 'Salmos 51:1-5' }
      ],
      texto: [
        'En el Salmo 51, David confiesa: «He aquí, en maldad he sido formado, Y en pecado me concibió mi madre» (Sal 51:5). El versículo ha sido leído de maneras muy distintas, y algunas lecturas hacen daño.',
        { h: 'Lo que no dice' },
        'No dice que la relación sexual dentro del matrimonio sea pecado. La Biblia enseña lo contrario: Dios bendijo a la primera pareja para que fructificara (Gn 1:28), y Hebreos dice: «Honroso sea en todos el matrimonio, y el lecho sin mancilla» (He 13:4). Tampoco dice que la madre de David haya cometido un pecado especial al concebirlo; no hay ninguna indicación de eso en la Biblia. Y no significa que el embrión sea menos valioso o menos humano: el Salmo 139 muestra a Dios formando con cuidado a la persona en el vientre.',
        { h: 'Lo que sí dice' },
        'David, al confesar su pecado con Betsabé, no buscó excusas, pero miró más hondo: su adulterio y su asesinato no eran accidentes aislados, sino frutos de algo que estaba en él desde el principio de su existencia. El pecado no comenzó en él el día que vio a Betsabé; estaba en su naturaleza desde la concepción. Otro salmo dice algo parecido: «Se apartaron los impíos desde la matriz» (Sal 58:3), y Job pregunta: «¿Quién hará limpio a lo inmundo? Nadie» (Job 14:4).',
        'Este es uno de los textos en que se apoya la doctrina del pecado original que estudió la ruta V: todos nacemos con una naturaleza inclinada al pecado. Pablo lo dice así: «éramos por naturaleza hijos de ira» (Ef 2:3).',
        { h: 'Para qué lo dijo David' },
        'David no escribió este versículo para culpar a su madre ni para disculparse a sí mismo. Lo escribió para reconocer que su problema era más profundo de lo que pensaba, y que por eso necesitaba algo más que un perdón: necesitaba un corazón nuevo. Dos versículos después pide: «Purifícame con hisopo, y seré limpio; Lávame, y seré más blanco que la nieve» (Sal 51:7), y luego: «Crea en mí, oh Dios, un corazón limpio» (Sal 51:10). Reconocer la raíz del pecado no lleva a la desesperación, sino a pedir la obra de Dios desde la raíz.',
        { ejercicio: {
          pregunta: '¿Qué enseña Salmos 51:5?',
          opciones: [
            { t: 'Que la naturaleza pecaminosa de David estaba presente desde el comienzo de su existencia, y por eso necesitaba un corazón nuevo.', ok: true, por_que: 'Correcto: David mira la raíz de su pecado para pedir una purificación completa (Sal 51:7, 10).' },
            { t: 'Que las relaciones sexuales dentro del matrimonio son pecado.', ok: false, por_que: 'La Biblia honra el matrimonio y el lecho sin mancilla (He 13:4).' },
            { t: 'Que la madre de David cometió un pecado especial.', ok: false, por_que: 'El texto habla de la condición de David, no de una falta de su madre.' }
          ],
          explicacion: 'Leer el versículo dentro de la oración completa del Salmo 51 evita interpretaciones que dañan.'
        } }
      ],
      pensar: 'David no se quedó en «así nací»: pidió un corazón nuevo. ¿Usas alguna vez tu naturaleza o tu historia como excusa, en lugar de pedir a Dios que te transforme?'
    },
    {
      id: 'padres', n: '«Los pecados de los padres»', ref: 'Éxodo 20:5-6; 34:6-7; Deuteronomio 24:16; Ezequiel 18:1-4, 19-20; Jeremías 31:29-30; 2 Reyes 14:6',
      visual: [
        { tipo: 'cita', titulo: 'Éxodo 20:5-6', texto: 'No te inclinarás a ellas, ni las honrarás; porque yo soy Jehová tu Dios, fuerte, celoso, que visito la maldad de los padres sobre los hijos hasta la tercera y cuarta generación de los que me aborrecen, y hago misericordia a millares, a los que me aman y guardan mis mandamientos.', ref: 'Éxodo 20:5-6' },
        { tipo: 'cita', titulo: 'Ezequiel 18:20', texto: 'Y si dijereis: ¿Por qué el hijo no llevará el pecado de su padre? Porque el hijo hizo según el derecho y la justicia, guardó todos mis estatutos y los cumplió, de cierto vivirá. El alma que pecare, esa morirá; el hijo no llevará el pecado del padre, ni el padre llevará el pecado del hijo; la justicia del justo será sobre él, y la impiedad del impío será sobre él.', ref: 'Ezequiel 18:19-20' }
      ],
      texto: [
        'En los Diez Mandamientos, Dios dice que visita «la maldad de los padres sobre los hijos hasta la tercera y cuarta generación de los que me aborrecen» (Éx 20:5). Pero en Ezequiel dice: «el hijo no llevará el pecado del padre» (Ez 18:20). ¿Se contradice la Biblia?',
        { h: 'Leer las frases completas' },
        'Primero, conviene leer Éxodo 20:5 completo. Dios visita la maldad hasta la tercera y cuarta generación «de los que me aborrecen», y hace misericordia «a millares, a los que me aman y guardan mis mandamientos» (Éx 20:5-6). El versículo no habla de hijos inocentes que pagan por sus padres, sino de generaciones que continúan en el mismo odio a Dios. Y el contraste es enorme: la consecuencia del pecado llega a tres o cuatro generaciones; la misericordia, a millares.',
        { h: 'Las consecuencias se heredan' },
        'Es un hecho de la vida que las decisiones de los padres afectan a los hijos. Un padre idólatra enseña idolatría a sus hijos; una familia marcada por la violencia, el alcohol o el abandono deja heridas y costumbres en las generaciones siguientes. Éxodo 20 describe esta realidad: el pecado no se queda en quien lo comete. En la casa de Israel, generaciones enteras repitieron los pecados de sus padres.',
        { h: 'La culpa no se hereda' },
        'Pero en tiempos de Ezequiel, el pueblo en el exilio usaba un refrán para culpar a otros: «Los padres comieron las uvas agrias, y los dientes de los hijos tienen la dentera» (Ez 18:2). Querían decir: sufrimos por culpa de nuestros padres, no por la nuestra. Dios rechazó ese refrán: «El alma que pecare, esa morirá; el hijo no llevará el pecado del padre» (Ez 18:20). La ley ya lo había establecido para los jueces humanos: «cada uno morirá por su pecado» (Dt 24:16). Cada persona responde ante Dios por sus propios actos, y cada hijo puede romper con el camino de sus padres: si el hijo hace lo recto, «de cierto vivirá» (Ez 18:19).',
        { h: 'Las dos verdades juntas' },
        'Los dos textos no se contradicen: hablan de cosas distintas. Las consecuencias del pecado pueden alcanzar a otros; la culpa ante Dios es personal. Y la gracia de Dios es más fuerte que cualquier herencia familiar. Un hijo de una familia herida no está condenado a repetir la historia: puede volverse a Dios y comenzar una nueva línea de bendición para sus hijos. La próxima estación aplica esto a una enseñanza muy difundida.',
        { ir: { t: 'Ir a «¿Maldiciones generacionales sobre el creyente?» (VIII.6)', a: '#textos/6' } }
      ],
      pensar: '¿Hay patrones en tu familia (de carácter, de vicios, de heridas) que no quieres repetir? Ezequiel 18 dice que puedes elegir otro camino. ¿Qué paso darás hoy para comenzar una nueva historia?'
    },
    {
      id: 'faraon', n: '¿Dios endureció a Faraón?', ref: 'Éxodo 4:21; 7:13; 8:15, 32; 9:12, 34; 1 Samuel 6:6; Romanos 9:17-18; 1:24-28; 2 Tesalonicenses 2:10-12',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Quién endurece el corazón de Faraón en Éxodo',
          cab: ['Texto', 'Lo que dice'],
          filas: [
            ['Éx 4:21; 7:3', 'Dios anuncia: «yo endureceré su corazón»'],
            ['Éx 7:13, 22; 8:19', 'El corazón de Faraón «se endureció»'],
            ['Éx 8:15, 32', 'Faraón «endureció su corazón»'],
            ['Éx 9:12', 'Por primera vez: «Jehová endureció el corazón de Faraón»'],
            ['Éx 9:34', 'Faraón «se obstinó en pecar», él y sus siervos'],
            ['Éx 10:1, 20, 27; 11:10', '«Jehová endureció el corazón de Faraón»'],
            ['1 S 6:6', 'Los filisteos: «Faraón endurecieron su corazón»'],
          ],
          nota: 'En las primeras plagas es Faraón quien endurece su corazón; desde la sexta, Dios confirma la decisión que Faraón ya había tomado.'
        } },
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Porque la Escritura dice a Faraón: Para esto mismo te he levantado, para mostrar en ti mi poder, y para que mi nombre sea anunciado por toda la tierra. De manera que de quien quiere, tiene misericordia, y al que quiere endurecer, endurece.', ref: 'Romanos 9:17-18' }
      ],
      texto: [
        'Antes de que Moisés volviera a Egipto, Dios le dijo: «yo endureceré su corazón, de modo que no dejará ir al pueblo» (Éx 4:21). Si Dios endureció el corazón de Faraón, ¿cómo podía castigarlo? ¿No fue Faraón una víctima?',
        { h: 'Lo que cuenta el texto' },
        'La tabla sigue el relato con atención. Durante las cinco primeras plagas, el texto dice que el corazón de Faraón «se endureció» o que Faraón mismo «endureció su corazón». Cuando vio que la plaga de las ranas cesaba, «endureció su corazón y no los escuchó» (Éx 8:15). Recién en la sexta plaga dice: «Jehová endureció el corazón de Faraón» (Éx 9:12). Y aun después, el texto vuelve a decir que Faraón «se obstinó en pecar» (Éx 9:34). Siglos después, los filisteos recordaban que Faraón y los egipcios «endurecieron su corazón» (1 S 6:6).',
        { h: 'Dios confirma lo que el ser humano eligió' },
        'Muchos intérpretes ven aquí un principio que aparece en otros lugares de la Biblia. Dios no endureció un corazón que quería obedecerle. Faraón ya era un rey orgulloso que había esclavizado y asesinado a los niños hebreos, y que dijo desde el principio: «¿Quién es Jehová, para que yo oiga su voz?» (Éx 5:2). Después de rechazar una y otra vez, Dios lo entregó a su propia decisión. Pablo describe lo mismo con la humanidad que rechaza a Dios: «Dios los entregó» a lo que ellos mismos eligieron (Ro 1:24, 26, 28). Y a los que «no recibieron el amor de la verdad», Dios les envía un poder engañoso (2 Ts 2:10-11). El endurecimiento es un juicio sobre quien ya rechazó la luz.',
        { h: 'Para que su nombre sea anunciado' },
        'Pablo cita el caso en Romanos 9: «Para esto mismo te he levantado, para mostrar en ti mi poder, y para que mi nombre sea anunciado por toda la tierra» (Ro 9:17). Dios es soberano, y usó aun la rebeldía de Faraón para mostrar su poder y salvar a Israel. Los intérpretes calvinistas ven en Romanos 9 la elección soberana de Dios; los arminianos, el derecho de Dios a juzgar a quien lo rechaza y a usar la historia para su propósito de salvar a muchos. Las dos lecturas rechazan que Dios sea autor del pecado de Faraón.',
        { h: 'Una advertencia para hoy' },
        'La lección práctica está en Hebreos: «Si oyereis hoy su voz, No endurezcáis vuestros corazones» (He 3:7-8). Cada vez que una persona rechaza la voz de Dios, le resulta más fácil rechazarla la próxima vez. El endurecimiento comienza con un «no» que parece pequeño.'
      ],
      pensar: '¿Hay algún llamado de Dios al que le has dicho «no» varias veces? Hebreos dice «hoy»: no esperes a que tu corazón se endurezca más.'
    },
    {
      id: 'pecado-muerte', n: 'El pecado de muerte', ref: '1 Juan 5:16-17; Hechos 5:1-11; 1 Corintios 5:5; 11:29-32; Mateo 12:31-32; Hebreos 6:4-6',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Si alguno viere a su hermano cometer pecado que no sea de muerte, pedirá, y Dios le dará vida; esto es para los que cometen pecado que no sea de muerte. Hay pecado de muerte, por el cual yo no digo que se pida. Toda injusticia es pecado; pero hay pecado no de muerte.', ref: '1 Juan 5:16-17' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Tres pasajes que suelen confundirse',
          cab: ['Pasaje', 'De qué habla', 'Dónde se estudia'],
          filas: [
            ['1 Jn 5:16-17', 'Un pecado «de muerte»', 'Esta estación'],
            ['Mt 12:31-32', 'La blasfemia contra el Espíritu Santo', 'El Espíritu Santo, VIII.1'],
            ['He 6:4-6', 'Los que «recayeron» después de ser iluminados', 'La salvación (en preparación)'],
          ],
          nota: 'Quien teme haber cometido un pecado imperdonable, y desea volver a Dios, da con ese mismo deseo la señal de que no lo cometió.'
        } }
      ],
      texto: [
        'Juan anima a orar por un hermano que peca, y añade: «Hay pecado de muerte, por el cual yo no digo que se pida» (1 Jn 5:16). ¿Qué pecado es ese? Juan no lo explica, y por eso los intérpretes han propuesto varias respuestas.',
        { h: 'Tres lecturas' },
        'Algunos piensan que Juan habla de la muerte física: un creyente que persiste en un pecado grave puede ser disciplinado por Dios con la muerte, como Ananías y Safira (Hch 5:1-11) o algunos corintios que participaban indignamente de la Cena del Señor (1 Co 11:30). Otros piensan que habla de la muerte espiritual: el rechazo deliberado y persistente de Cristo, como el de los falsos maestros que habían salido de la iglesia negando que Jesús es el Cristo (1 Jn 2:19, 22). Otros lo relacionan con la blasfemia contra el Espíritu Santo de Mateo 12. Las dos primeras lecturas son las más difundidas, y no se excluyen del todo.',
        { h: 'Lo que es claro' },
        'Aunque el detalle sea discutido, el pasaje enseña tres cosas claras. Primero, que la oración por el hermano que peca es poderosa: «pedirá, y Dios le dará vida» (1 Jn 5:16). La mayoría de los pecados de los creyentes son de este tipo, y la iglesia debe orar en lugar de condenar. Segundo, que el pecado es serio: persistir en él con dureza tiene consecuencias graves. Tercero, que Juan no pide juzgar a nadie como si hubiera cometido ese pecado: «yo no digo que se pida» no significa «prohíbo orar».',
        { h: 'Para el que tiene miedo' },
        'Muchas personas sensibles viven angustiadas pensando que cometieron un pecado imperdonable. A ellas hay que decirles con claridad: el que siente dolor por su pecado y desea volver a Dios no ha cometido el pecado de muerte ni la blasfemia contra el Espíritu, porque ese deseo es obra del mismo Espíritu. El que de verdad rechazó a Dios no siente esa angustia. La promesa sigue en pie: «al que a mí viene, no le echo fuera» (Jn 6:37). La estación «La blasfemia contra el Espíritu Santo» de El Espíritu Santo estudia Mateo 12.',
        { ir: { t: 'Ver «La blasfemia contra el Espíritu Santo» en El Espíritu Santo', a: '../../espiritu-santo/#textos/1' } }
      ],
      pensar: '¿Hay algún hermano o hermana que está pecando y por quien has hablado más de lo que has orado? Juan te invita a pedir, y Dios le dará vida.'
    },
    {
      id: 'no-practica', n: '«No practica el pecado»', ref: '1 Juan 3:4-10; 1:8-10; 2:1; Romanos 6:1-2; Gálatas 5:19-24',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Todo aquel que permanece en él, no peca; todo aquel que peca, no le ha visto, ni le ha conocido. Hijitos, nadie os engañe; el que hace justicia es justo, como él es justo. El que practica el pecado es del diablo; porque el diablo peca desde el principio. Para esto apareció el Hijo de Dios, para deshacer las obras del diablo. Todo aquel que es nacido de Dios, no practica el pecado, porque la simiente de Dios permanece en él; y no puede pecar, porque es nacido de Dios.', ref: '1 Juan 3:6-9' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Juan no se contradice',
          cab: ['1 Juan 1:8–2:1', '1 Juan 3:6-9'],
          filas: [
            ['«Si decimos que no tenemos pecado, nos engañamos»', '«Todo aquel que es nacido de Dios, no practica el pecado»'],
            ['Habla de actos de pecado en la vida del creyente', 'Habla de un estilo de vida, de lo que se hace de manera habitual'],
            ['Respuesta: confesar y confiar en el Abogado', 'Respuesta: la simiente de Dios permanece en él'],
          ],
          nota: 'El creyente puede caer en pecado; lo que no hace es vivir instalado en él.'
        } }
      ],
      texto: [
        'En el capítulo 1 de su carta, Juan dice que si decimos que no tenemos pecado nos engañamos. Pero en el capítulo 3 dice: «Todo aquel que es nacido de Dios, no practica el pecado, porque la simiente de Dios permanece en él; y no puede pecar, porque es nacido de Dios» (1 Jn 3:9). ¿Puede o no puede pecar el creyente?',
        { h: 'Un estilo de vida' },
        'La clave está en el verbo. Juan usa en el capítulo 3 una forma griega que indica algo continuo, habitual. La RV 1960 lo traduce bien con «practica»: «El que practica el pecado es del diablo» (1 Jn 3:8). Juan no dice que el creyente nunca comete un acto de pecado; eso lo negó en el capítulo 1. Dice que no vive en pecado, que el pecado no es la dirección de su vida. Una persona puede caer en el barro; otra vive en el barro. El creyente que cae se levanta, porque hay vida nueva en él.',
        { h: 'La simiente de Dios' },
        '¿Por qué el nacido de Dios no practica el pecado? «Porque la simiente de Dios permanece en él». El nuevo nacimiento no es solo un cambio de opinión, sino una vida nueva que Dios pone en la persona, con nuevos deseos. El creyente puede pecar, pero ya no puede hacerlo en paz: el Espíritu lo inquieta, lo convence y lo llama a volver. Por eso Juan da una señal para saber quién es de Dios: «el que hace justicia es justo» (1 Jn 3:7).',
        { h: 'Una advertencia y un consuelo' },
        'Este pasaje es una advertencia para quienes dicen ser cristianos y viven tranquilos en el pecado: Juan dice que ese estilo de vida muestra que no conocen a Dios (1 Jn 3:6). Pablo dice lo mismo en Gálatas: los que practican las obras de la carne «no heredarán el reino de Dios» (Gá 5:21). Y es un consuelo para el creyente que lucha y a veces cae: la tristeza que siente por su pecado es una señal de que la simiente de Dios está en él.',
        { ejercicio: {
          pregunta: '¿Cómo se armonizan 1 Juan 1:8 («si decimos que no tenemos pecado, nos engañamos») y 1 Juan 3:9 («no practica el pecado»)?',
          opciones: [
            { t: 'El creyente puede cometer pecados, pero no vive de manera habitual en el pecado.', ok: true, por_que: 'Correcto: el capítulo 3 habla de un estilo de vida («practica»), no de un acto aislado.' },
            { t: 'Los cristianos maduros ya no pecan nunca, y solo los nuevos pecan.', ok: false, por_que: 'Juan se incluye a sí mismo en 1 Juan 1:8-10: habla de «nosotros».' },
            { t: 'Juan se contradice, porque escribió los capítulos en momentos distintos.', ok: false, por_que: 'Juan escribe una sola carta con un pensamiento coherente; la diferencia está en el tipo de acción que describe.' }
          ],
          explicacion: 'Caer no es lo mismo que vivir caído.'
        } }
      ],
      pensar: 'Mirando tu vida en conjunto, ¿cuál es su dirección: hacia Dios o hacia el pecado? Si hay un pecado en el que te has instalado, hoy es el día de salir.'
    },
    {
      id: 'maldiciones', n: '¿Maldiciones generacionales sobre el creyente?', ref: 'Gálatas 3:13-14; Colosenses 2:13-15; 2 Corintios 5:17; Ezequiel 18:20; Números 23:23; Proverbios 26:2; 1 Juan 4:4',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: 'Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición (porque está escrito: Maldito todo el que es colgado en un madero), para que en Cristo Jesús la bendición de Abraham alcanzase a los gentiles, a fin de que por la fe recibiésemos la promesa del Espíritu.', ref: 'Gálatas 3:13-14' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Lo que es real y lo que no',
          cab: ['Es real…', 'No es bíblico…'],
          filas: [
            ['Que las familias transmiten costumbres, heridas y ejemplos', 'Que el creyente esté bajo una maldición de sus antepasados'],
            ['Que algunos problemas se repiten de padres a hijos', 'Que haga falta descubrir los pecados de los antepasados para ser libre'],
            ['Que la oración, el consejo y la disciplina ayudan a romper esos patrones', 'Que se necesiten ritos o fórmulas especiales para «cortar» maldiciones'],
            ['Que el pecado tiene consecuencias', 'Que Cristo haya dejado incompleta su obra en la cruz'],
          ],
          nota: 'En Cristo, el creyente es nueva criatura (2 Co 5:17). No necesita romper lo que Cristo ya rompió.'
        } }
      ],
      texto: [
        'En muchas iglesias de América Latina se enseña que los creyentes pueden estar bajo «maldiciones generacionales»: problemas que vendrían de pecados de sus padres, abuelos o antepasados, y que habría que identificar y romper con oraciones especiales. Esta enseñanza se apoya sobre todo en Éxodo 20:5. Este recurso, siguiendo la línea pentecostal clásica, la rechaza en cuanto se aplica a los creyentes.',
        { h: 'Lo que hizo Cristo' },
        'El texto clave es Gálatas 3:13: «Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición». En la cruz, Cristo cargó con toda maldición que pesaba sobre nosotros, y lo hizo para que «la bendición de Abraham alcanzase a los gentiles» (Gá 3:14). Pablo dice también que Cristo anuló «el acta de los decretos que había contra nosotros… clavándola en la cruz» (Col 2:14). Y que el que está en Cristo «nueva criatura es; las cosas viejas pasaron» (2 Co 5:17). Si la obra de Cristo es completa, no queda una maldición de los antepasados que deba romperse después.',
        { h: 'Lo que dicen los profetas' },
        'La estación VIII.2 mostró que Ezequiel 18 rechaza la idea de que los hijos carguen con la culpa de los padres. Y cuando Balaam fue contratado para maldecir a Israel, no pudo: «contra Jacob no hay agüero, Ni adivinación contra Israel» (Nm 23:23). Proverbios dice que «la maldición nunca vendrá sin causa» (Pr 26:2). El creyente está protegido por Dios: «mayor es el que está en vosotros, que el que está en el mundo» (1 Jn 4:4).',
        { h: 'Lo que sí es real' },
        'Esto no niega que las familias marquen a sus hijos. La tabla distingue. Un hijo que creció con violencia, alcoholismo, abuso o abandono puede llevar heridas y repetir conductas aprendidas. Eso es real, y no se resuelve negándolo. Pero no es una maldición mística: son consecuencias del pecado de otros y hábitos que se aprendieron. Se enfrentan con lo que la Biblia da: el perdón (también a los padres), la renovación de la mente por la Palabra (Ro 12:2), la oración, el consejo pastoral, el acompañamiento de la iglesia y, cuando hace falta, la ayuda profesional.',
        { h: 'Un peligro práctico' },
        'La enseñanza de las maldiciones generacionales puede producir miedo en lugar de fe, llevar a creyentes a buscar en su árbol genealógico en lugar de mirar a Cristo, y hacerlos depender de personas que dicen tener poder especial para «cortar» maldiciones. Contra eso, la verdad es sencilla y liberadora: «Así que, si el Hijo os libertare, seréis verdaderamente libres» (Jn 8:36).'
      ],
      pensar: '¿Te han hecho sentir alguna vez que cargas con una maldición de tu familia? ¿Qué te dice Gálatas 3:13? ¿Hay alguna herida familiar que necesitas llevar a Dios y a un consejero de tu iglesia?'
    },
    {
      id: 'errores', n: 'Errores sobre el ser humano y el pecado', ref: 'Romanos 3:23; Génesis 3:5; Salmos 82:6-7; Juan 10:34-36; 1 Juan 1:8; Isaías 43:10; Gálatas 1:8',
      visual: [
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'Seis errores y la respuesta bíblica',
          cab: ['Error', 'Quién lo enseña', 'Qué dice', 'Respuesta bíblica'],
          filas: [
            ['Bondad natural', 'Pelagianismo, antiguo y moderno', 'El ser humano nace bueno y puede salvarse con su esfuerzo', 'Ro 3:10-12, 23; Ef 2:8-9'],
            ['El pecado no es real', 'Ciencia Cristiana', 'El pecado, la enfermedad y la muerte son ilusiones de la mente', '1 Jn 1:8; Ro 6:23'],
            ['Divinidad interior', 'Nueva Era', 'El ser humano es divino; su problema es la ignorancia', 'Is 43:10; Gn 3:5'],
            ['«Pequeños dioses»', 'Algunos maestros de la fe de la palabra', 'Los creyentes son dioses, de la misma clase que Dios', 'Sal 82:6-7; Jn 10:34-36'],
            ['La caída fue un paso adelante', 'Mormones', 'Adán cayó para que los hombres existiesen; el ser humano puede llegar a ser un dios', 'Ro 5:12; Is 43:10'],
            ['Perfección sin pecado', 'Algunos grupos perfeccionistas', 'El creyente puede llegar a no tener ningún pecado en esta vida', '1 Jn 1:8-10; Fil 3:12'],
          ],
          nota: 'Todos estos errores tienen algo en común: rebajan la gravedad del pecado o elevan al ser humano por encima de lo que es. Los dos caminos terminan haciendo innecesaria la cruz.'
        } }
      ],
      texto: [
        'La enseñanza bíblica sobre el ser humano y el pecado tiene dos lados que deben ir juntos: el ser humano es imagen de Dios, con una dignidad inmensa; y está caído, en una condición de la que no puede salir solo. Casi todos los errores sobre este tema nacen de quedarse con uno de los dos lados. La tabla presenta seis, nombrando a los grupos que los enseñan. Se describen sus enseñanzas, no se juzga a las personas: muchos de sus miembros buscan sinceramente a Dios.',
        { h: 'Rebajar el pecado' },
        'El pelagianismo, que estudió la estación V.7, sigue vivo cada vez que se enseña que las personas son buenas por naturaleza y que basta con educarlas o esforzarse para ser aceptas ante Dios. La Ciencia Cristiana, fundada por Mary Baker Eddy en el siglo XIX en Estados Unidos, va más lejos: enseña que el pecado, la enfermedad y la muerte no son reales, sino errores de la mente que desaparecen al comprender la verdad. La Biblia responde que el pecado es tan real que costó la sangre de Cristo, y que «Si decimos que no tenemos pecado, nos engañamos a nosotros mismos» (1 Jn 1:8).',
        { h: 'Elevar al ser humano' },
        'La Nueva Era, un conjunto de creencias muy difundido, enseña que cada persona es divina en su interior y que el problema humano no es el pecado, sino la ignorancia de esa divinidad. Es la misma promesa de la serpiente: «seréis como Dios» (Gn 3:5). Los mormones (La Iglesia de Jesucristo de los Santos de los Últimos Días) enseñan que la caída de Adán fue un paso necesario y positivo: su Libro de Mormón dice que Adán cayó para que los hombres existiesen. Y enseñan que el ser humano fiel puede llegar a ser un dios. La Biblia presenta la caída como una tragedia (Ro 5:12) y dice: «Antes de mí no fue formado dios, ni lo será después de mí» (Is 43:10).',
        'Algo parecido aparece en un sector de la fe de la palabra, el movimiento que nombra El movimiento pentecostal al tratar el evangelio de la prosperidad. Algunos de sus maestros conocidos, como Kenneth Copeland, han enseñado que los creyentes son «pequeños dioses», de la misma clase que Dios. Se apoyan en el Salmo 82:6, «Yo dije: Vosotros sois dioses», que Jesús citó en Juan 10:34. Pero el salmo habla con ironía a jueces injustos y termina: «Pero como hombres moriréis» (Sal 82:7). El creyente es hijo de Dios por adopción, no un dios.',
        { h: 'Una perfección que no es bíblica' },
        'En el otro extremo, algunos grupos de santidad han enseñado que el creyente puede llegar en esta vida a un estado en que ya no tiene ningún pecado. Juan Wesley enseñaba la «perfección cristiana» como un amor perfecto a Dios y al prójimo, no como la ausencia de toda falta. La Biblia llama a la santidad con seriedad, pero también enseña que, mientras vivimos, necesitamos confesar (1 Jn 1:8-10), y Pablo dijo: «No que lo haya alcanzado ya, ni que ya sea perfecto; sino que prosigo» (Fil 3:12).',
        { ir: { t: 'Ver «El evangelio de la prosperidad» en El movimiento pentecostal', a: '../../movimiento-pentecostal/#discernimiento/1' } },
        { ejercicio: {
          pregunta: '¿Qué tienen en común casi todos los errores sobre el ser humano y el pecado?',
          opciones: [
            { t: 'Que rebajan la gravedad del pecado o elevan al ser humano por encima de lo que es, y así hacen innecesaria la cruz.', ok: true, por_que: 'Correcto: la verdad bíblica mantiene juntas la dignidad del ser humano y la profundidad de su caída.' },
            { t: 'Que todos niegan que Dios exista.', ok: false, por_que: 'La mayoría de estos grupos habla de Dios; su error está en lo que enseñan sobre el ser humano y el pecado.' },
            { t: 'Que todos enseñan que el ser humano es solo un animal.', ok: false, por_que: 'Varios hacen lo contrario: elevan al ser humano a la categoría de dios.' }
          ],
          explicacion: 'La imagen de Dios y la caída deben enseñarse juntas: sin la primera, el ser humano no vale nada; sin la segunda, no necesita Salvador.'
        } }
      ],
      pensar: '¿Has escuchado alguna de estas ideas en conversaciones, redes sociales o predicaciones? ¿Cómo podrías responder con amor y con la Escritura a alguien que las cree?'
    }
  ];

  const H = window.__HUMANO;
  delete window.__HUMANO;
  window.RUTA_DATA = {
    titulo: 'El ser humano y el pecado',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso. Texto hebreo: Códice de Leningrado (Westminster Leningrad Codex), dominio público, según la edición de Open Scriptures Hebrew Bible (CC BY 4.0).',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'imagen', grupo: 'El ser humano', n: 'I. Creados a imagen de Dios', info: 'Qué es la imagen de Dios, varón y mujer, una sola humanidad, la dignidad de la vida y Cristo', estaciones: H.imagen },
      { id: 'cuerpo', grupo: 'El ser humano', n: 'II. Cuerpo, alma y espíritu', info: 'Las palabras bíblicas, dos o tres partes, la conciencia, el cuerpo, el alma, la voluntad y la muerte', estaciones: H.cuerpo },
      { id: 'caida', grupo: 'El pecado', n: 'III. La caída', info: 'Génesis 3: la prueba, la serpiente, la tentación, las sentencias, el protoevangelio y Adán en el NT', estaciones: H.caida },
      { id: 'pecado', grupo: 'El pecado', n: 'IV. ¿Qué es el pecado?', info: 'Sus palabras, contra Dios, sus formas, su raíz, sus grados, la ley y los tres enemigos', estaciones: H.pecado },
      { id: 'original', grupo: 'El pecado', n: 'V. El pecado original y la condición humana', info: 'Romanos 5, la herencia de Adán, la depravación, la gracia preveniente, los niños y la historia', estaciones: H.original },
      { id: 'consecuencias', grupo: 'El pecado', n: 'VI. Las consecuencias del pecado', info: 'Muerte espiritual y física, la creación, la esclavitud, el juicio, la enfermedad y la sociedad', estaciones: H.consecuencias },
      { id: 'redencion', grupo: 'La respuesta de Dios', n: 'VII. De la caída a la redención', info: 'Dios busca, el postrer Adán, Romanos 6 y 7, el creyente que peca, la tentación y la gloria', estaciones: redencion },
      { id: 'textos', grupo: 'La respuesta de Dios', n: 'VIII. Textos difíciles y errores', info: 'Salmo 51:5, los pecados de los padres, Faraón, el pecado de muerte, 1 Juan 3:9, maldiciones y errores', estaciones: textos }
    ]
  };
})();
