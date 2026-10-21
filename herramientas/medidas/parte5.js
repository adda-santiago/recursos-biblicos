/* Pesos, medidas, monedas y horas bíblicas · Taller práctico y definición de las rutas (ver encabezado en parte1.js) */
(() => {
  const taller = [
    {
      id: 'cana', n: 'Las tinajas de Caná', ref: 'Juan 2:1-11',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/tinajas.webp', alt: 'Seis grandes tinajas de piedra caliza alineadas junto a un muro en el patio de una casa de Galilea durante una boda, mientras dos sirvientes vierten agua en ellas con cántaros', pie: '«Seis tinajas de piedra para agua» (Jn 2:6).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/2/6-10', ref: 'Juan 2:6-10' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Paso', 'Dato', 'Resultado'],
          filas: [
            ['1. La unidad', 'Cántaro (metretes griego)', 'Unos 39 litros'],
            ['2. Una tinaja', 'Dos o tres cántaros', 'Entre 78 y 117 litros'],
            ['3. Las seis', 'Seis tinajas llenas hasta arriba', 'Entre 470 y 700 litros'],
            ['4. En botellas', 'Botellas de 0,75 L', 'Entre 600 y 900 botellas']
          ]
        } }
      ],
      texto: [
        'Este taller aplica lo aprendido a pasajes concretos. En cada estación se siguen los mismos pasos: identificar la unidad, buscar su equivalencia, hacer la cuenta y preguntarse qué agrega el resultado a la comprensión del texto.',
        'En una boda en Caná de Galilea faltó el vino. Había allí «seis tinajas de piedra para agua, conforme al rito de la purificación de los judíos, en cada una de las cuales cabían dos o tres cántaros» (Jn 2:6). Jesús mandó llenarlas de agua, y los sirvientes las llenaron «hasta arriba» (Jn 2:7).',
        { h: 'Paso 1 y 2: la unidad y la equivalencia' },
        'La palabra «cántaro» traduce el metretes, una medida griega de líquidos de unos 39 litros. Cada tinaja contenía dos o tres de esas medidas: entre 78 y 117 litros. Las tinajas de piedra se usaban porque, según las normas de pureza de la época, la piedra no se contaminaba como la cerámica. Se han encontrado vasijas de piedra de este tipo en excavaciones de Galilea y Jerusalén.',
        { h: 'Paso 3: la cuenta' },
        'Seis tinajas por 78 litros dan unos 470 litros; por 117, unos 700. Jesús transformó en vino entre 470 y 700 litros de agua: el equivalente a varios cientos de botellas.',
        { h: 'Paso 4: qué agrega' },
        'El resultado muestra la abundancia del milagro. Jesús no proveyó lo justo para salir del paso, sino más de lo que la fiesta podía consumir, y de la mejor calidad: el maestresala dijo que habían guardado «el buen vino hasta ahora» (Jn 2:10). Los profetas habían descrito la era del Mesías con imágenes de vino abundante (Am 9:13; Jl 3:18). Juan llama a este milagro la primera de las señales con que Jesús «manifestó su gloria; y sus discípulos creyeron en él» (Jn 2:11).',
        'Además, el agua estaba destinada a la purificación ritual. Jesús la transformó en el vino de la fiesta: anticipo de que Él trae lo que los ritos no podían dar.',
        { ejercicio: {
          pregunta: '¿Qué muestra principalmente la cantidad de vino que Jesús proveyó en Caná?',
          opciones: [
            { t: 'Que la boda tenía miles de invitados.', ok: false, por_que: 'El texto no dice cuántos invitados había. La cantidad excede lo que la fiesta necesitaba.' },
            { t: 'La abundancia generosa de Jesús, señal de que había llegado el tiempo del Mesías.', ok: true, por_que: 'Cientos de litros del mejor vino: una provisión que sobrepasa la necesidad y manifiesta su gloria.' },
            { t: 'Que Jesús quería que los invitados se embriagaran.', ok: false, por_que: 'La Biblia condena la embriaguez (Efesios 5:18). La abundancia es una señal de la bendición mesiánica, no una invitación al exceso.' }
          ],
          explicacion: 'Convertir los cántaros a litros revela el carácter del milagro: Jesús da en abundancia, y lo mejor queda para el final.'
        } }
      ],
      pensar: 'Los sirvientes llenaron las tinajas «hasta arriba», sin saber qué pasaría. ¿Qué obediencia sencilla te pide hoy el Señor, aunque todavía no veas el resultado?'
    },
    {
      id: 'barca', n: 'La barca en medio del lago', ref: 'Juan 6:16-21; Mateo 14:22-33',
      visual: [
        { tipo: 'imagen', titulo: 'Imagen', src: 'img/cuarta-vigilia.webp', alt: 'Antes del amanecer, una barca de pesca de madera lucha contra las olas en el mar de Galilea; los discípulos reman con esfuerzo y Pedro mira asombrado hacia una figura que camina sobre el agua, vista de espaldas', pie: '«A la cuarta vigilia de la noche, Jesús vino a ellos andando sobre el mar» (Mt 14:25).', origen: 'ia' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/6/16-21', ref: 'Juan 6:16-21' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Dato', 'Equivalencia', 'Resultado'],
          filas: [
            ['Ya oscuro (Jn 6:17)', 'Primera vigilia', 'Después de las 18:00'],
            ['Cuarta vigilia (Mt 14:25)', '3:00 a 6:00', 'Al menos nueve horas en el agua'],
            ['25 o 30 estadios (Jn 6:19)', 'Estadio de 185 m', 'Entre 4,6 y 5,5 km'],
            ['Ancho del lago', 'Unos 12 km', 'En medio del mar']
          ]
        } }
      ],
      texto: [
        'Después de alimentar a la multitud, Jesús mandó a los discípulos cruzar el lago en barca mientras Él subía al monte a orar. Juan y Mateo dan datos que, juntos, permiten reconstruir la noche.',
        { h: 'El tiempo' },
        'Los discípulos entraron en la barca cuando «Estaba ya oscuro» (Jn 6:17), al comienzo de la noche. Jesús llegó «a la cuarta vigilia de la noche» (Mt 14:25), entre las tres y las seis de la mañana. Es decir, llevaban al menos nueve horas en el agua, con el viento en contra (Mt 14:24). Marcos agrega que Jesús los vio «remar con gran fatiga» (Mr 6:48).',
        { h: 'La distancia' },
        'Juan dice que habían remado «como veinticinco o treinta estadios» (Jn 6:19). Con el estadio de 185 metros, eso son entre 4,6 y 5,5 kilómetros. El mar de Galilea mide unos 21 kilómetros de largo y unos 12 de ancho. Después de toda la noche, los discípulos estaban más o menos en el centro del lago, lejos de cualquier orilla: Mateo dice que la barca estaba «en medio del mar» (Mt 14:24).',
        { h: 'Qué agrega' },
        'Las cifras muestran la situación: nueve horas para avanzar cinco kilómetros, una distancia que con buen tiempo se recorre remando en una o dos horas. Estaban agotados, sin avanzar y lejos de tierra. Justo entonces llegó Jesús caminando sobre el agua. El que había orado toda la noche en el monte no se había olvidado de ellos.',
        'Las palabras de Jesús son las mismas en Juan y en Mateo: «Yo soy; no temáis» (Jn 6:20). Y Juan cierra con otro detalle: en cuanto lo recibieron en la barca, «la cual llegó en seguida a la tierra adonde iban» (Jn 6:21). Lo que no lograron en toda la noche, ocurrió en un instante con Jesús a bordo.',
        { ejercicio: {
          pregunta: 'Combinando Juan 6:19 y Mateo 14:25, ¿qué se puede concluir?',
          opciones: [
            { t: 'Que los discípulos avanzaron unos cinco kilómetros en más de nueve horas, en medio del lago.', ok: true, por_que: 'Veinticinco o treinta estadios son unos cinco kilómetros, y la cuarta vigilia indica que habían pasado casi toda la noche remando.' },
            { t: 'Que estaban a pocos metros de la orilla cuando llegó Jesús.', ok: false, por_que: 'Cinco kilómetros en un lago de doce de ancho los dejaba en medio del mar.' },
            { t: 'Que la travesía duró menos de una hora.', ok: false, por_que: 'Salieron al oscurecer y Jesús llegó en la cuarta vigilia, después de las tres de la mañana.' }
          ],
          explicacion: 'Las medidas de tiempo y distancia, leídas juntas, muestran el agotamiento de los discípulos y la oportunidad de la llegada de Jesús.'
        } }
      ],
      pensar: 'Remaron toda la noche y avanzaron poco; con Jesús en la barca llegaron enseguida. ¿En qué esfuerzo tuyo necesitas recibir a Jesús «en la barca»?'
    },
    {
      id: 'panes', n: 'Doscientos denarios de pan', ref: 'Juan 6:5-13; Marcos 6:35-44',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@jn/6/5-13', ref: 'Juan 6:5-13' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Dato', 'Equivalencia', 'Resultado'],
          filas: [
            ['200 denarios', '1 denario = 1 jornal', '200 días de trabajo'],
            ['200 días de trabajo', 'Unos 25 días de trabajo al mes', 'Unos ocho meses de sueldo'],
            ['Cinco mil hombres (Mt 14:21)', 'Más mujeres y niños', 'Tal vez diez mil personas o más'],
            ['200 denarios ÷ 5.000', '128 blancas por denario', 'Unas cinco blancas por hombre: un bocado']
          ]
        } }
      ],
      texto: [
        'Ante la multitud hambrienta, Jesús preguntó a Felipe: «¿De dónde compraremos pan para que coman éstos?» (Jn 6:5). Juan aclara que lo decía para probarlo, porque Él sabía lo que iba a hacer. Felipe hizo la cuenta: «Doscientos denarios de pan no bastarían para que cada uno de ellos tomase un poco» (Jn 6:7).',
        { h: 'Paso 1: la suma en jornales' },
        'Doscientos denarios son doscientos días de trabajo, unos ocho meses de sueldo. En Marcos, los discípulos preguntan si deben ir a comprar pan por esa suma (Mr 6:37), como quien dice que es imposible: no tenían ese dinero, y aunque lo tuvieran, no había dónde comprar tanto pan en un lugar desierto.',
        { h: 'Paso 2: la multitud' },
        'Eran unos cinco mil hombres, «sin contar las mujeres y los niños» (Mt 14:21). La multitud podía duplicar esa cifra. Repartidos entre cinco mil hombres, doscientos denarios darían a cada uno el valor de unas cinco blancas: un pedazo de pan. Por eso Felipe dice que no bastaría ni para que cada uno tomara «un poco».',
        { h: 'Paso 3: lo que había' },
        'Andrés encontró a un muchacho con «cinco panes de cebada y dos pececillos» (Jn 6:9). La cebada era el pan de los pobres, más barato que el trigo. Andrés mismo pregunta: «¿qué es esto para tantos?». La cuenta humana termina ahí: siete meses de sueldo no alcanzarían, y lo que hay es el almuerzo de un niño.',
        { h: 'Qué agrega' },
        'Jesús tomó los panes, dio gracias y los repartió, y todos comieron «cuanto querían» (Jn 6:11). Sobraron doce cestas (Jn 6:13). Convertir los doscientos denarios a jornales muestra que el problema no era un mal cálculo de los discípulos: era humanamente imposible. El milagro manifiesta que Jesús es el pan de vida (Jn 6:35), el que satisface por completo a quien viene a Él.',
        { ejercicio: {
          pregunta: '¿Qué quería decir Felipe con su respuesta en Juan 6:7?',
          opciones: [
            { t: 'Que con ocho meses de sueldo se podía alimentar bien a todos.', ok: false, por_que: 'Felipe dice lo contrario: esa suma no bastaría ni para un poco por persona.' },
            { t: 'Que ni siquiera una suma enorme, que no tenían, alcanzaría para un bocado por persona.', ok: true, por_que: 'Doscientos denarios eran unos ocho meses de trabajo, y aun así solo darían un pedazo a cada uno.' },
            { t: 'Que el pan en Galilea era muy barato.', ok: false, por_que: 'El cálculo de Felipe muestra que alimentar a la multitud costaba muchísimo.' }
          ],
          explicacion: 'Felipe hizo bien la cuenta humana. Jesús quería enseñarle que hay una provisión que supera todas las cuentas.'
        } }
      ],
      pensar: 'Felipe calculó lo que costaba; Andrés presentó lo poco que había. ¿Qué «cinco panes» puedes poner hoy en las manos de Jesús?'
    },
    {
      id: 'samaritano', n: 'El camino a Jericó y los dos denarios', ref: 'Lucas 10:30-37',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-jerico.svg', alt: 'Perfil del camino de Jerusalén a Jericó: unos 27 kilómetros con un descenso de más de mil metros, desde unos 750 metros sobre el nivel del mar hasta unos 250 metros bajo el nivel del mar, por el desierto de Judea', pie: 'De Jerusalén a Jericó: el camino «descendía» de verdad.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lc/10/30-35', ref: 'Lucas 10:30-35' }
      ],
      texto: [
        'Jesús comenzó la parábola con una frase que sus oyentes conocían bien: «Un hombre descendía de Jerusalén a Jericó» (Lc 10:30). La palabra «descendía» no es un adorno. Jerusalén está a unos 750 metros sobre el nivel del mar, y Jericó a unos 250 metros bajo el nivel del mar. En unos 27 kilómetros, el camino baja más de mil metros por el desierto de Judea, entre cerros áridos y quebradas: un lugar ideal para asaltantes.',
        { h: 'Paso 1: la distancia y el tiempo' },
        'Veintisiete kilómetros son casi un día de camino, unas siete u ocho horas a pie. El herido quedó «medio muerto» en un camino solitario. El sacerdote y el levita, que probablemente volvían a Jericó después de servir en el templo, lo vieron y pasaron de largo.',
        { h: 'Paso 2: el costo del samaritano' },
        'El samaritano vendó sus heridas, lo subió a su cabalgadura y lo llevó a un mesón. Al día siguiente, «sacó dos denarios, y los dio al mesonero» (Lc 10:35): dos días de su propio trabajo. Esa suma alcanzaba para varios días de alojamiento y comida, y además se comprometió a pagar lo que se gastara de más. Para un viajero era un gasto considerable, entregado a un desconocido y, más aún, a un judío, de un pueblo que despreciaba a los samaritanos (Jn 4:9).',
        { h: 'Paso 3: qué agrega' },
        'Las cifras muestran que el amor al prójimo tiene un costo concreto: tiempo, riesgo en un camino peligroso, dinero y compromiso a futuro. El samaritano no dio lo que le sobraba ni lo que no le costaba. Jesús terminó con una orden: «Ve, y haz tú lo mismo» (Lc 10:37).',
        'El sitio tiene un Atlas bíblico donde se puede ubicar el camino entre Jerusalén y Jericó en el mapa.',
        { ir: { t: 'Ver el camino en el Atlas bíblico', a: '../../atlas-biblico/' } },
        { ejercicio: {
          pregunta: '¿Qué indican los dos denarios que el samaritano dejó al mesonero?',
          opciones: [
            { t: 'Una propina simbólica, sin mucho valor.', ok: false, por_que: 'Dos denarios eran dos días de trabajo. No era una suma insignificante.' },
            { t: 'Dos días de su propio sueldo, entregados por un desconocido, con la promesa de pagar más.', ok: true, por_que: 'El samaritano pagó de su bolsillo el equivalente a dos jornadas y se comprometió a cubrir todo lo demás.' },
            { t: 'El impuesto que debían pagar los samaritanos al entrar a Judea.', ok: false, por_que: 'El texto dice que el dinero era para el cuidado del herido en el mesón.' }
          ],
          explicacion: 'La misericordia del samaritano se mide en tiempo, riesgo y dinero. Así es el amor que Jesús pide a sus discípulos.'
        } }
      ],
      pensar: '¿Quién es el «hombre medio muerto» que ves en tu camino esta semana? ¿Qué te costaría detenerte?'
    },
    {
      id: 'talentos-parabola', n: 'Los talentos: una fortuna en manos de siervos', ref: 'Mateo 25:14-30',
      visual: [
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@mt/25/14-18', ref: 'Mateo 25:14-18' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Siervo', 'Talentos', 'En denarios', 'Años de trabajo'],
          filas: [
            ['Primero', '5', '30.000', 'Unos 100'],
            ['Segundo', '2', '12.000', 'Unos 40'],
            ['Tercero', '1', '6.000', 'Unos 20']
          ],
          nota: 'Un talento = 6.000 denarios; unos 300 días de trabajo por año.'
        } }
      ],
      texto: [
        'En español, «talento» significa habilidad, precisamente por esta parábola. Pero en tiempos de Jesús, un talento era una suma de dinero, y una muy grande. Para entender la parábola hay que devolverle a la palabra su sentido original.',
        { h: 'Paso 1: convertir a denarios' },
        'El señor dio «A uno dio cinco talentos, y a otro dos, y a otro uno, a cada uno conforme a su capacidad» (Mt 25:15). Un talento eran seis mil denarios. El primer siervo recibió treinta mil denarios; el segundo, doce mil; el tercero, seis mil.',
        { h: 'Paso 2: convertir a años' },
        'Si un trabajador ganaba un denario por día y trabajaba unos trescientos días al año, un solo talento equivalía a unos veinte años de trabajo. El primer siervo recibió el sueldo de toda una vida, multiplicado. Y el que recibió menos, el tercero, tenía en sus manos más dinero del que la mayoría de la gente vería en su vida entera.',
        { h: 'Paso 3: qué agrega' },
        'La conversión corrige una lectura común. A veces se piensa que el tercer siervo recibió «poco» y por eso tuvo excusas. En realidad recibió una fortuna, y la enterró. Su falta no fue tener poco, sino no hacer nada con lo mucho que se le confió, por temor y por una idea equivocada de su señor (Mt 25:24-25).',
        'Los otros dos siervos negociaron y duplicaron lo recibido, y escucharon las mismas palabras: «Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré» (Mt 25:21, 23). Para el señor, cinco talentos eran «poco»: así de grande es lo que el Señor reserva a sus siervos fieles. Los dones, oportunidades y responsabilidades que Dios da a cada creyente, incluidos los dones del Espíritu (1 P 4:10), son una riqueza que se nos confía para hacerla producir hasta que Él vuelva.',
        { ejercicio: {
          pregunta: 'Si un talento equivalía a unos veinte años de trabajo, ¿qué muestra eso del tercer siervo?',
          opciones: [
            { t: 'Que recibió tan poco que no valía la pena negociar.', ok: false, por_que: 'Recibió seis mil denarios, una fortuna. La conversión desmiente esa idea.' },
            { t: 'Que recibió una gran riqueza y aun así no hizo nada con ella.', ok: true, por_que: 'Su problema no fue la cantidad, sino el miedo y la pereza (Mateo 25:26).' },
            { t: 'Que el señor fue injusto al darle menos que a los demás.', ok: false, por_que: 'El señor dio a cada uno según su capacidad, y a todos les confió mucho.' }
          ],
          explicacion: 'Lo que Dios confía a cada uno es valioso. La fidelidad se mide por lo que hacemos con lo recibido, sea mucho o «poco».'
        } }
      ],
      pensar: '¿Qué «talento» te ha confiado Dios que está enterrado? ¿Qué paso concreto puedes dar para ponerlo a trabajar en su obra?'
    },
    {
      id: 'pentecostes', n: 'Cincuenta días y la hora tercera', ref: 'Levítico 23:15-16; Hechos 1:3-5; 2:1-4, 15',
      visual: [
        { tipo: 'imagen', titulo: 'Esquema', src: 'img/esquema-pentecostes.svg', alt: 'Línea de cincuenta días: la Pascua y la muerte de Jesús, la resurrección el día de las primicias, cuarenta días de apariciones, la ascensión, diez días de espera en oración y el día de Pentecostés, cincuenta días después de las primicias', pie: 'De las primicias a Pentecostés: cincuenta días.', origen: 'esquema' },
        { tipo: 'cita', titulo: 'Pasaje', texto: '@@lv/23/15-16', ref: 'Levítico 23:15-16' },
        { tipo: 'tabla', titulo: 'Tabla', tabla: {
          titulo: 'La cuenta, paso a paso',
          cab: ['Día', 'Qué ocurre', 'Referencia'],
          filas: [
            ['Día 1', 'Primicias: Jesús resucita, el día siguiente al sábado', 'Lv 23:10-11; 1 Co 15:20'],
            ['Días 1 a 40', 'Jesús se aparece a sus discípulos', 'Hch 1:3'],
            ['Día 40', 'Ascensión desde el monte de los Olivos', 'Hch 1:9-12'],
            ['Días 41 a 49', 'Los discípulos esperan unánimes en oración', 'Hch 1:14'],
            ['Día 50', 'Pentecostés: el Espíritu es derramado a la hora tercera', 'Hch 2:1-4, 15']
          ]
        } }
      ],
      texto: [
        'La última estación del taller junta varias medidas de tiempo para leer el día de Pentecostés. El nombre mismo es una medida: Pentecostés significa «quincuagésimo» en griego, el día cincuenta.',
        { h: 'Paso 1: la cuenta de la ley' },
        'La ley mandaba contar desde el día en que se ofrecía la gavilla de las primicias, el día siguiente al sábado de la semana de Pascua: «Hasta el día siguiente del séptimo día de reposo contaréis cincuenta días» (Lv 23:16). Siete semanas completas y un día. Por eso también se la llamaba la fiesta de las semanas.',
        { h: 'Paso 2: la cuenta de los evangelios y Hechos' },
        'Jesús resucitó el primer día de la semana, el día siguiente al sábado: el día de las primicias. Pablo lo dice así: Cristo resucitó como «primicias de los que durmieron» (1 Co 15:20). Durante cuarenta días se apareció a sus discípulos (Hch 1:3), y luego ascendió desde el monte de los Olivos. Quedaban unos diez días hasta el día cincuenta. Los discípulos los pasaron esperando la promesa del Padre, como Jesús les había mandado (Hch 1:4-5), perseverando «unánimes en oración y ruego» (Hch 1:14).',
        { h: 'Paso 3: la hora' },
        '«Cuando llegó el día de Pentecostés, estaban todos unánimes juntos» (Hch 2:1). El Espíritu Santo descendió, y todos fueron llenos y comenzaron a hablar en otras lenguas (Hch 2:4). Pedro explicó a la multitud que no estaban ebrios, porque era «la hora tercera del día» (Hch 2:15): las nueve de la mañana, la hora del sacrificio y la oración de la mañana.',
        { h: 'Qué agrega' },
        'Las medidas de tiempo muestran que Pentecostés no fue un hecho aislado. Así como la Pascua se cumplió en la cruz y las primicias en la resurrección, la fiesta de la cosecha del trigo se cumplió con la primera gran cosecha del evangelio: unas tres mil personas añadidas a la iglesia en un día (Hch 2:41). Dios cumplió su calendario con exactitud. Y la promesa del Espíritu no quedó encerrada en esa fecha: «para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos» (Hch 2:39).',
        { ir: { t: 'Seguir estudiando el libro de Hechos', a: '../../hechos/' } },
        { ejercicio: {
          pregunta: '¿Cuántos días esperaron aproximadamente los discípulos entre la ascensión y Pentecostés?',
          opciones: [
            { t: 'Unos diez días.', ok: true, por_que: 'Jesús se apareció durante cuarenta días; Pentecostés era el día cincuenta. Quedaban unos diez.' },
            { t: 'Cincuenta días.', ok: false, por_que: 'Los cincuenta días se cuentan desde las primicias, el día de la resurrección, no desde la ascensión.' },
            { t: 'Tres días.', ok: false, por_que: 'Tres días es la cuenta de la sepultura a la resurrección, no de la ascensión a Pentecostés.' }
          ],
          explicacion: 'Cincuenta días desde la resurrección, menos cuarenta de apariciones, dejan unos diez días de espera en oración antes del derramamiento del Espíritu.'
        } }
      ],
      pensar: 'Los discípulos esperaron unidos en oración la promesa del Padre. ¿Cómo estás buscando tú la llenura del Espíritu Santo para tu vida y tu servicio?'
    }
  ];

  const M = window.__MEDIDAS;
  delete window.__MEDIDAS;
  window.RUTA_DATA = {
    titulo: 'Pesos, medidas, monedas y horas bíblicas',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    rutas: [
      { id: 'longitud', grupo: 'Las medidas de la Biblia', n: 'I. Longitud y distancia', info: 'Del dedo al estadio: el codo, las construcciones, los gigantes y los caminos', estaciones: M.longitud },
      { id: 'capacidad', grupo: 'Las medidas de la Biblia', n: 'II. Capacidad y peso', info: 'Gomer, efa y bato; el siclo, la mina y el talento; la balanza justa', estaciones: M.capacidad },
      { id: 'monedas', grupo: 'Las medidas de la Biblia', n: 'III. Monedas y dinero', info: 'De la plata pesada al denario: cuánto valía cada suma en días de trabajo', estaciones: M.monedas },
      { id: 'tiempo', grupo: 'Las medidas de la Biblia', n: 'IV. El tiempo', info: 'Horas, vigilias, semanas, meses, fiestas y el tiempo de la profecía', estaciones: M.tiempo },
      { id: 'taller', grupo: 'Práctica', n: 'Taller práctico', info: 'Seis pasajes leídos con las medidas en la mano', estaciones: taller }
    ]
  };
})();
