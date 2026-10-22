  // ================== RUTA VI. La tierra en el plan de Dios ==================
  const plan = [
    {
      id: 'promesa', n: 'La promesa a Abraham', ref: 'Génesis 12:1-7; 13:14-17; 15:7-21; 17:8; Salmo 105:8-11',
      visual: [
        img('abraham.webp', 'Abraham, anciano, de pie en una colina rocosa cerca de Betel al atardecer, apoyado en su cayado, mirando hacia el norte, el sur, el oriente y el occidente sobre los montes y valles de Canaán; sus tiendas y rebaños abajo', '«Alza ahora tus ojos, y mira desde el lugar donde estás» (Gn 13:14).'),
        cita('Génesis 17:8', '@@gn/17/8'),
        mapa({ view: [[31.1, 34.6], [32.5, 35.6]], lugares: ['siquem', 'betel', 'hai', 'hebron', 'beerseba'], trazos: ['c-cresta'] }, 'Los altares de Abraham')
      ],
      texto: [
        'La historia de la tierra en la Biblia comienza con una orden y una promesa. Dios dijo a Abram: «Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré» (Gn 12:1). Abram obedeció sin saber adónde iba (He 11:8). Cuando llegó a Siquem, en el centro de Canaán, Dios le apareció y le dijo: «A tu descendencia daré esta tierra» (Gn 12:7). Abram respondió edificando un altar, y lo mismo hizo en Betel y en Hebrón. Así, el primer modo de «tomar posesión» de la tierra fue la adoración.',
        { h: 'Una promesa repetida y confirmada' },
        'Dios repitió la promesa varias veces. Cuando Lot escogió la llanura del Jordán, Dios le dijo a Abram: «Alza ahora tus ojos, y mira desde el lugar donde estás hacia el norte y el sur, y al oriente y al occidente. Porque toda la tierra que ves, la daré a ti y a tu descendencia para siempre» (Gn 13:14-15). En Génesis 15, Dios hizo un pacto solemne con Abram: partió unos animales, y una antorcha de fuego, señal de su presencia, pasó sola entre los pedazos mientras Abram dormía (Gn 15:17-18). En aquel tiempo, quien pasaba entre los animales partidos se comprometía bajo pena de muerte. Que solo Dios pasara significa que Él tomó sobre sí todo el compromiso.',
        'En Génesis 17, Dios cambió el nombre de Abram por Abraham y confirmó: «te daré a ti, y a tu descendencia después de ti, la tierra en que moras, toda la tierra de Canaán en heredad perpetua; y seré el Dios de ellos» (Gn 17:8). La misma promesa fue repetida a Isaac (Gn 26:3) y a Jacob (Gn 28:13). El salmista la llama «pacto sempiterno» (Sal 105:10-11).',
        { h: 'Extranjero en la tierra prometida' },
        'Sin embargo, Abraham nunca poseyó la tierra. Esteban lo recuerda: Dios «no le dio herencia en ella, ni aun para asentar un pie; pero le prometió que se la daría en posesión, y a su descendencia después de él, cuando él aún no tenía hijo» (Hch 7:5). Lo único que Abraham compró fue una cueva para sepultar a Sara (Gn 23). Vivió en tiendas, como extranjero, creyendo una promesa que no vio cumplida. Por eso la carta a los Hebreos dice que habitó «en la tierra prometida como en tierra ajena» (He 11:9).',
        { h: 'La tierra y la bendición' },
        'La promesa de la tierra va unida a otras dos: una descendencia numerosa y la bendición para todas las naciones: «serán benditas en ti todas las familias de la tierra» (Gn 12:3). La tierra no era un fin en sí misma, sino el lugar donde Dios formaría un pueblo y desde donde llegaría la bendición a todo el mundo, en Cristo, la descendencia de Abraham (Gá 3:8, 16).'
      ],
      pensar: 'Abraham respondió a la promesa levantando altares. ¿Dónde estás levantando tú «altares» de adoración en los lugares que Dios te ha dado?'
    },
    {
      id: 'por-que', n: '¿Por qué esta tierra?', ref: 'Deuteronomio 11:10-12; 7:7-8; Ezequiel 5:5; Hechos 17:26-27; Salmo 20:7; Gálatas 4:4',
      visual: [
        tabla({
          titulo: 'Razones que el texto bíblico sugiere',
          cab: ['La tierra es…', 'Lo que enseña', 'Pasajes'],
          filas: [
            ['Dependiente de la lluvia', 'Que el pueblo viva mirando a Dios y no a sus recursos', 'Dt 11:10-12; 8:10-18'],
            ['Pequeña', 'Que Dios no elige por grandeza, sino por amor y fidelidad', 'Dt 7:7-8; 1 Co 1:27-29'],
            ['Central', 'Que el pueblo sea testigo ante las naciones', 'Ez 5:5; Is 43:10; 49:6'],
            ['Asignada por Dios', 'Que Dios gobierna la historia y los límites de los pueblos', 'Dt 32:8; Hch 17:26-27'],
            ['Vulnerable', 'Que el pueblo confíe en Dios y no en ejércitos ni alianzas', 'Sal 20:7; Is 31:1'],
            ['El escenario del Mesías', 'Que la redención ocurra a la vista del mundo, en el tiempo señalado', 'Mi 5:2; Gá 4:4']
          ],
          nota: 'Son razones que se desprenden de los pasajes; la Biblia no da una explicación única de por qué Dios escogió esta tierra.'
        }),
        mapa({ view: V.levante, capas: ['t-israel'], vecinos: ['egipto-1274', 'asiria-730'], lugares: ['jerusalen', 'menfis', 'babilonia', 'ninive'] }, 'En medio de las naciones')
      ],
      texto: [
        'Hay tierras más grandes, más fértiles y más seguras que la de Israel. Egipto tenía el Nilo; Mesopotamia, dos grandes ríos; el norte, bosques y lluvia abundante. ¿Por qué Dios escogió esta franja angosta, seca en el sur, rodeada de imperios y cruzada por ejércitos? La Biblia no responde con una sola frase, pero varios pasajes, leídos juntos, sugieren algunas razones. Conviene tomarlas como lo que el texto deja ver, no como una explicación completa de los propósitos de Dios.',
        { h: 'Una tierra que enseña a depender' },
        'La razón más clara está en Deuteronomio 11. La tierra prometida no se riega como Egipto, desde un río que el hombre controla, sino que «bebe las aguas de la lluvia del cielo; tierra de la cual Jehová tu Dios cuida» (Dt 11:11-12). Dios escogió una tierra donde cada cosecha recordara que todo depende de Él. Moisés advirtió que la abundancia podía hacer que el pueblo olvidara a Dios y dijera: «Mi poder y la fuerza de mi mano me han traído esta riqueza» (Dt 8:17).',
        { h: 'Pequeña y vulnerable' },
        'Dios no escogió a Israel por ser grande: «No por ser vosotros más que todos los pueblos os ha querido Jehová y os ha escogido, pues vosotros erais el más insignificante de todos los pueblos» (Dt 7:7). La tierra se parece al pueblo. Además, su posición entre imperios la hacía vulnerable. Una y otra vez Israel tuvo que elegir entre confiar en Dios o buscar alianzas con Egipto o Asiria. Los profetas condenaron a los que «descienden a Egipto por ayuda, y confían en caballos» (Is 31:1). El salmista resume la lección: «Estos confían en carros, y aquéllos en caballos; mas nosotros del nombre de Jehová nuestro Dios tendremos memoria» (Sal 20:7).',
        { h: 'En medio de las naciones' },
        'Dios puso a Jerusalén «en medio de las naciones» (Ez 5:5). Israel debía ser testigo de Dios ante los pueblos que pasaban por sus caminos (Is 43:10), y su vocación era ser «luz de las naciones» (Is 49:6). Pablo explica en Atenas que Dios mismo fijó «los límites de su habitación» a los pueblos, «para que busquen a Dios» (Hch 17:26-27). La ubicación de Israel formaba parte de ese plan.',
        { h: 'El escenario de la redención' },
        'Finalmente, esta tierra fue el lugar escogido para que naciera el Mesías: «Pero tú, Belén Efrata… de ti me saldrá el que será Señor en Israel» (Mi 5:2). Jesús nació, murió y resucitó en una provincia del imperio romano conectada con todo el mundo conocido, «cuando vino el cumplimiento del tiempo» (Gá 4:4). Desde Jerusalén, el evangelio salió por los caminos de esa tierra hasta lo último de la tierra (Hch 1:8).',
        { ejercicio: {
          pregunta: '¿Qué razón da Deuteronomio 11:10-12 para mostrar que la tierra prometida es distinta de Egipto?',
          opciones: [
            { t: 'Que es más fértil y tiene más agua que Egipto.', ok: false, por_que: 'El texto no dice que tenga más agua; dice que el agua viene de otro lugar: del cielo.' },
            { t: 'Que depende de la lluvia del cielo y del cuidado de Dios.', ok: true, por_que: 'Así lo dice el pasaje: es tierra «que bebe las aguas de la lluvia del cielo» y sobre la cual están los ojos de Jehová.' },
            { t: 'Que no necesita trabajo humano para dar fruto.', ok: false, por_que: 'El campesino seguía arando y sembrando. La diferencia es que su cosecha dependía de la lluvia que Dios enviaba.' }
          ],
          explicacion: 'Egipto se regaba con el Nilo; la tierra prometida, con la lluvia. Dios escogió una tierra que enseñara a su pueblo a depender de Él cada año.'
        } }
      ],
      pensar: 'Dios escogió una tierra que obligaba a mirar al cielo. ¿Qué circunstancias de tu vida, que parecen desventajas, podrían ser el lugar donde Dios te enseña a depender de Él?'
    },
    {
      id: 'limites', n: 'Los límites de la tierra', ref: 'Génesis 15:18-21; Números 34:1-12; Josué 21:43-45; 1 Reyes 4:21; Ezequiel 47:13–48:29',
      visual: [
        pasos([
          { t: 'La promesa a Abraham: «desde el río de Egipto hasta el río grande, el río Eufrates» (Gn 15:18).', estado: { view: [[28.8, 31.8], [37.0, 41.0]], capas: ['h-promesa'], lugares: ['rio-egipto', 'carquemis', 'jerusalen'] } },
          { t: 'Los límites que Dios dio a Moisés para el reparto de Canaán (Nm 34).', estado: { view: V.amplia, capas: ['h-canaan'], lugares: ['rio-egipto', 'cades-barnea', 'hamat', 'jerusalen'] } },
          { t: 'Salomón domina desde el Éufrates hasta el límite con Egipto, con reinos tributarios (1 R 4:21).', estado: { view: [[28.8, 31.8], [37.0, 41.0]], capas: ['h-salomon', 'h-salomon-vas'], lugares: ['jerusalen', 'damasco', 'carquemis'] } },
          { t: 'La tierra repartida en la visión de Ezequiel (Ez 47:13–48:29).', estado: { view: V.amplia, capas: ['h-ezequiel'], lugares: ['hamat', 'damasco', 'jerusalen', 'cades-barnea'] } }
        ]),
        cita('Génesis 15:18', '@@gn/15/18')
      ],
      texto: [
        'La Biblia describe los límites de la tierra de varias maneras, y no siempre con las mismas palabras. Leer esos pasajes con atención ayuda a entender qué se prometió, qué se cumplió y qué queda por cumplirse.',
        { h: 'Los límites de la promesa' },
        'A Abraham, Dios le prometió la tierra «desde el río de Egipto hasta el río grande, el río Eufrates» (Gn 15:18), habitada entonces por diez pueblos. Es la descripción más amplia. Éxodo 23:31 da límites parecidos: del mar Rojo al mar de los filisteos, y del desierto al Éufrates. En cambio, Números 34 fija con detalle los límites de Canaán para el reparto entre las tribus: del desierto de Zin y Cades-barnea al sur, hasta la entrada de Hamat al norte, y del Mediterráneo al Jordán. Son límites más pequeños, porque describen la tierra que Israel debía conquistar y repartir en ese momento.',
        '¿Qué es «el río de Egipto»? La mayoría de los estudiosos lo identifica con el Wadi el-Arish, un cauce seco en el norte del Sinaí que marcaba la frontera con Egipto (Nm 34:5; Is 27:12). Otros piensan que se refiere a un brazo del Nilo. El mapa usa la primera identificación.',
        { h: '¿Se cumplió la promesa?' },
        'Al final de la conquista, Josué afirma: «De esta manera dio Jehová a Israel toda la tierra que había jurado dar a sus padres, y la poseyeron y habitaron en ella… No faltó palabra de todas las buenas promesas que Jehová había hecho» (Jos 21:43, 45). Y en tiempos de Salomón, el reino llegó hasta el Éufrates (1 R 4:21). Sin embargo, el mismo libro de Josué reconoce que quedaba «aún mucha tierra por poseer» (Jos 13:1), y Salomón dominaba esos territorios como reinos tributarios, no como tierra de Israel.',
        { posturas: {
          titulo: '¿Está cumplida la promesa de los límites?',
          a: { n: 'Cumplida en Josué y Salomón', t: 'Algunos intérpretes entienden que Josué 21:43-45, 1 Reyes 4:21 y Nehemías 9:8 muestran que la promesa territorial se cumplió por completo en la historia de Israel, y que lo que queda es su sentido espiritual en Cristo.' },
          b: { n: 'Cumplimiento parcial y futuro', t: 'Otros entienden que Josué afirma la fidelidad de Dios en lo que dio hasta entonces, pero que Israel nunca poseyó la tierra completa como heredad, y que los profetas, siglos después de Salomón, siguen anunciando una posesión futura y permanente (Ez 47–48; Am 9:15).' },
          c: 'Este recurso sigue la segunda lectura. Dios fue fiel en cada etapa (Jos 21:45), pero la promesa a Abraham, «heredad perpetua» (Gn 17:8), espera su cumplimiento pleno en el reino del Mesías, cuando Israel habite seguro en toda la tierra prometida. La ruta continúa con esa esperanza en la estación 6.'
        } }
      ],
      pensar: '«No faltó palabra de todas las buenas promesas» (Jos 21:45). ¿Qué promesas de Dios ya viste cumplidas en tu vida, y cuáles esperas todavía con fe?'
    },
    {
      id: 'tierra-mia', n: '«La tierra mía es»', ref: 'Levítico 25:1-28; 1 Reyes 21:1-3; Rut 4:1-10; Jeremías 32:6-15',
      visual: [
        cita('Levítico 25:23', '@@lv/25/23'),
        img('lindero.webp', 'Una piedra de lindero antigua, alta y tosca, entre dos parcelas de olivos en una ladera de Samaria, con un muro bajo de piedras y un campesino anónimo que trabaja al fondo', 'Una piedra marca el límite entre dos heredades (Dt 19:14).')
      ],
      texto: [
        'En la ley de Moisés hay una frase que cambia la manera de ver la tierra: «La tierra no se venderá a perpetuidad, porque la tierra mía es; pues vosotros forasteros y extranjeros sois para conmigo» (Lv 25:23). Israel recibió la tierra, pero no como dueño absoluto. El dueño era Dios, y el pueblo vivía en ella como un inquilino que debe rendir cuentas.',
        { h: 'Una heredad para cada familia' },
        'Cuando Josué repartió la tierra, cada tribu recibió su territorio y cada familia su heredad (Jos 13–21). Esa porción no era solo un bien económico: era el lugar de la familia en el pueblo de Dios, y debía pasar de padres a hijos. Por eso estaba prohibido mover las piedras que marcaban los linderos: «no reducirás los límites de la propiedad de tu prójimo, que fijaron los antiguos» (Dt 19:14).',
        { h: 'El año sabático y el jubileo' },
        'Como la tierra era de Dios, también tenía su descanso. Cada siete años, el campo debía quedar sin sembrar, y lo que creciera solo era para los pobres y los animales (Lv 25:1-7). Y cada cincuenta años se celebraba el jubileo: «pregonaréis libertad en la tierra a todos sus moradores» (Lv 25:10). En ese año, cada familia volvía a su heredad. Si alguien había tenido que vender su campo por pobreza, en realidad solo había vendido las cosechas hasta el jubileo. Además, un pariente cercano, el redentor, podía rescatar la tierra antes de ese año (Lv 25:25). Así actuó Booz en el libro de Rut (Rt 4:1-10).',
        { h: 'Nabot y la viña' },
        'Esta ley explica por qué Nabot se negó a vender su viña al rey Acab: «Guárdeme Jehová de que yo te dé a ti la heredad de mis padres» (1 R 21:3). Para Acab, era un buen negocio; para Nabot, era fidelidad a Dios. Jezabel mandó matar a Nabot con testigos falsos, y Elías anunció el juicio de Dios sobre la casa de Acab (1 R 21:17-24).',
        { h: 'Una compra en medio del asedio' },
        'Cuando Babilonia sitiaba Jerusalén y todo parecía perdido, Dios mandó a Jeremías comprar el campo de su primo en Anatot, como redentor. Jeremías pagó, firmó la escritura y la guardó en una vasija de barro, porque Dios había dicho: «Aún se comprarán casas, heredades y viñas en esta tierra» (Jer 32:15). La ley de la heredad se volvió una profecía de esperanza.',
        ir('Ver la compra de Jeremías en Pesos, medidas y monedas', '../../medidas-biblicas/#monedas/1')
      ],
      pensar: 'Si «De Jehová es la tierra y su plenitud» (Sal 24:1), lo que tienes también es suyo. ¿Cómo cambia tu manera de usar tus bienes saber que eres administrador y no dueño?'
    },
    {
      id: 'obediencia', n: 'Una posesión ligada a la obediencia', ref: 'Levítico 18:24-28; 26:32-45; Deuteronomio 28:63-68; 30:1-5; 2 Crónicas 36:20-21',
      visual: [
        pasos([
          { t: '722 a.C.: Asiria deporta a las tribus del reino de Israel.', fecha: -722, estado: { view: [[29.5, 33.5], [37.8, 46.5]], capas: ['asiria-720'], lugares: ['samaria', 'ninive', 'gozan'], trazos: ['deportacion-722'] } },
          { t: '586 a.C.: Babilonia destruye Jerusalén y lleva cautivo a Judá.', fecha: -586, estado: { view: [[29.5, 33.5], [37.8, 46.5]], capas: ['babilonia-570'], lugares: ['jerusalen', 'babilonia', 'ribla'], trazos: ['deportacion'] } },
          { t: '538 a.C.: Persia permite el regreso a la tierra.', fecha: -538, estado: { view: [[29.5, 33.5], [37.8, 50.0]], capas: ['persia-530'], lugares: ['babilonia', 'jerusalen', 'susa'], trazos: ['regreso'] } }
        ]),
        cita('2 Crónicas 36:21', '@@2cr/36/21')
      ],
      texto: [
        'La promesa de la tierra a Abraham fue incondicional: Dios la juró por sí mismo (Gn 15:17-18; He 6:13). Pero el disfrute de la tierra por cada generación dependía de su obediencia. Esta distinción es clave para entender toda la historia de Israel: la tierra pertenecía al pueblo por promesa, pero el pueblo podía perderla temporalmente por su pecado.',
        { h: 'La tierra que vomita' },
        'Levítico usa una imagen fuerte. Los cananeos habían contaminado la tierra con sus prácticas, y la tierra los «vomitó». Israel debía cuidarse: «no sea que la tierra os vomite por haberla contaminado, como vomitó a la nación que la habitó antes de vosotros» (Lv 18:28). La tierra no era neutral: era la tierra de Dios, y no toleraba indefinidamente la idolatría, la injusticia y la sangre inocente.',
        'Deuteronomio 28 presenta las bendiciones de la obediencia y las maldiciones de la desobediencia. La última de ellas es el exilio: «seréis arrancados de sobre la tierra a la cual entráis para tomar posesión de ella. Y Jehová te esparcirá por todos los pueblos» (Dt 28:63-64).',
        { h: 'El reposo de la tierra' },
        'Así ocurrió. Asiria deportó al reino del norte en 722 a.C., y Babilonia llevó a Judá en 586 a.C. El cronista explica el exilio con una razón sorprendente: el pueblo no había dado a la tierra sus años de descanso, y Dios se los cobró. Fue «para que se cumpliese la palabra de Jehová por la boca de Jeremías, hasta que la tierra hubo gozado de reposo; porque todo el tiempo de su asolamiento reposó, hasta que los setenta años fueron cumplidos» (2 Cr 36:21). Lo había anunciado Levítico 26:34-35.',
        { h: 'La puerta de regreso' },
        'Pero el castigo no era el final. Moisés mismo anunció que, si el pueblo se volvía a Dios desde el destierro, Dios lo haría volver: «Aun cuando tus desterrados estuvieren en las partes más lejanas que hay debajo del cielo, de allí te recogerá Jehová tu Dios» (Dt 30:4). Y en Levítico, después de las advertencias, Dios dice que se acordará de su pacto con Jacob, Isaac y Abraham, «y haré memoria de la tierra» (Lv 26:42). En 538 a.C., el rey Ciro de Persia permitió a los judíos volver, y comenzó la reconstrucción.',
        ir('Estudiar El exilio y los retornos', '../../exilio/')
      ],
      pensar: 'Dios disciplinó a su pueblo, pero no rompió su pacto (Lv 26:44). ¿Cómo te ayuda esto a entender la disciplina de Dios en tu propia vida (He 12:5-11)?'
    },
    {
      id: 'futuro', n: 'La promesa futura', ref: 'Ezequiel 36:24-28; 37:21-28; Amós 9:14-15; Isaías 11:11-12; Romanos 11:25-29; Zacarías 12:10',
      visual: [
        cita('Amós 9:14-15', '@@am/9/14-15'),
        mapa({ view: V.amplia, capas: ['h-ezequiel'], lugares: ['jerusalen', 'hamat', 'cades-barnea', 'damasco'] }, 'La tierra en Ezequiel')
      ],
      texto: [
        'Después del regreso de Babilonia, los profetas siguieron anunciando una restauración de Israel en su tierra mayor que la que habían visto. Las promesas hablan de un regreso desde todas las naciones, de un pueblo unido bajo un solo rey de la casa de David, de un corazón nuevo y de una posesión que no tendrá fin.',
        { h: 'Lo que anunciaron los profetas' },
        'Isaías dice que el Señor alzará «otra vez su mano para recobrar el remanente de su pueblo», y lo reunirá de los cuatro confines de la tierra (Is 11:11-12). Ezequiel ve los huesos secos que reciben vida y anuncia: «yo tomo a los hijos de Israel de entre las naciones a las cuales fueron, y los recogeré de todas partes, y los traeré a su tierra» (Ez 37:21), y promete que David, es decir el Mesías, será su rey para siempre (Ez 37:24-25). Amós termina con una promesa sin condición: «los plantaré sobre su tierra, y nunca más serán arrancados de su tierra que yo les di» (Am 9:15). Estas promesas van unidas a una renovación espiritual: «os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros» (Ez 36:26), y «mirarán a mí, a quien traspasaron» (Zac 12:10).',
        'El regreso de Persia, en el siglo VI a.C., fue un cumplimiento parcial: volvió una parte pequeña del pueblo, a una provincia bajo dominio extranjero, sin rey de la casa de David. Por eso los profetas posteriores, como Zacarías, siguieron esperando lo que faltaba.',
        { h: 'Israel en el Nuevo Testamento' },
        'Pablo enseña que el endurecimiento de Israel es parcial y temporal, «hasta que haya entrado la plenitud de los gentiles; y luego todo Israel será salvo» (Ro 11:25-26), «porque irrevocables son los dones y el llamamiento de Dios» (Ro 11:29). Jesús habló de una Jerusalén hollada por los gentiles «hasta que» se cumplan sus tiempos (Lc 21:24), y los discípulos preguntaron si restauraría el reino a Israel; Jesús no negó la esperanza, sino que dijo que los tiempos los pone el Padre (Hch 1:6-7).',
        { posturas: {
          titulo: '¿Tiene Israel un futuro en su tierra?',
          a: { n: 'Lectura futurista', t: 'Las promesas a Israel sobre la tierra se cumplirán literalmente: Israel será reunido, se volverá a su Mesías y habitará en su tierra durante el reino milenial de Cristo (Ap 20:1-6). La iglesia participa de las bendiciones de Abraham sin reemplazar a Israel.' },
          b: { n: 'Cumplimiento en Cristo y la iglesia', t: 'Las promesas de la tierra se cumplen espiritualmente en Cristo y en su pueblo, judíos y gentiles, y finalmente en la tierra nueva; no esperan un cumplimiento territorial para la nación de Israel.' },
          c: 'Este recurso sigue la lectura futurista, que respeta el sentido de las promesas para quienes las recibieron y la irrevocabilidad del llamamiento de Israel (Ro 11:29). Muchos creyentes ven en el regreso de los judíos a la tierra en el siglo XX un comienzo del cumplimiento de estas profecías. Aun así, la Biblia une la restauración plena al arrepentimiento nacional y a la venida del Mesías (Zac 12:10; Ro 11:26), y no permite fijar fechas ni identificar cada decisión política de un Estado moderno con la voluntad de Dios.'
        } },
        ir('Estudiar Los últimos tiempos', '../../escatologia/'),
        { ejercicio: {
          pregunta: 'Según Ezequiel 36 y Zacarías 12, ¿qué acompaña la restauración final de Israel en su tierra?',
          opciones: [
            { t: 'Una victoria militar sobre todas las naciones vecinas.', ok: false, por_que: 'Los profetas hablan de la intervención de Dios, pero lo que se destaca es un cambio en el corazón del pueblo.' },
            { t: 'Un corazón nuevo y el reconocimiento del Mesías traspasado.', ok: true, por_que: 'Ezequiel promete un corazón y un espíritu nuevos (Ez 36:26), y Zacarías anuncia que mirarán a aquel a quien traspasaron (Zac 12:10).' },
            { t: 'La reconstrucción de la torre de Babel en Jerusalén.', ok: false, por_que: 'No hay ninguna profecía así. Babel representa el orgullo humano, lo contrario de la restauración de Dios.' }
          ],
          explicacion: 'La restauración que anuncian los profetas no es solo geográfica sino espiritual: Israel volverá a su tierra y a su Dios, y reconocerá a Jesús como el Mesías.'
        } }
      ],
      pensar: 'Pablo sentía «gran tristeza y continuo dolor» por su pueblo y oraba por su salvación (Ro 9:2; 10:1). ¿Oras tú por la salvación del pueblo judío?'
    },
    {
      id: 'patria', n: 'Una patria mejor', ref: 'Hebreos 11:8-16; Mateo 5:5; Romanos 4:13; Apocalipsis 21:1-4',
      visual: [
        img('tiendas.webp', 'Abraham, anciano, de pie fuera de su tienda de pelo de cabra en la noche, mirando un cielo lleno de estrellas sobre las colinas de Canaán; las tiendas y los camellos de su campamento a su alrededor', '«Mira ahora los cielos, y cuenta las estrellas» (Gn 15:5).'),
        cita('Hebreos 11:13-16', '@@he/11/13-16')
      ],
      texto: [
        'La carta a los Hebreos mira la historia de los patriarcas desde un ángulo sorprendente. Abraham, Isaac y Jacob vivieron en tiendas, como extranjeros, en la misma tierra que se les había prometido, y murieron sin poseerla. Pero no vivieron frustrados: «Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos, y creyéndolo, y saludándolo, y confesando que eran extranjeros y peregrinos sobre la tierra» (He 11:13).',
        { h: 'Una ciudad con fundamentos' },
        'Hebreos explica qué esperaban: Abraham «esperaba la ciudad que tiene fundamentos, cuyo arquitecto y constructor es Dios» (He 11:10). Y agrega: «anhelaban una mejor, esto es, celestial; por lo cual Dios no se avergüenza de llamarse Dios de ellos; porque les ha preparado una ciudad» (He 11:16). La tierra de Canaán era real y la promesa sobre ella sigue en pie, como vimos en la estación anterior. Pero los patriarcas entendieron que la promesa apuntaba más alto: a vivir con Dios en una patria que no se acaba.',
        { h: 'Herederos del mundo' },
        'El Nuevo Testamento amplía el horizonte de la promesa. Pablo dice que Abraham y su descendencia recibieron la promesa «de que sería heredero del mundo» (Ro 4:13). Jesús promete: «Bienaventurados los mansos, porque ellos recibirán la tierra por heredad» (Mt 5:5), retomando el Salmo 37:11. La promesa hecha a Abraham sobre una franja de tierra se convierte en la promesa de una creación renovada, donde todos los que creen, judíos y gentiles, son hijos de Abraham por la fe (Gá 3:7, 29).',
        { h: 'Un cielo nuevo y una tierra nueva' },
        'La Biblia termina donde empezó: con Dios habitando con los hombres en una tierra sin pecado. Juan ve «un cielo nuevo y una tierra nueva» y la nueva Jerusalén que desciende del cielo, y oye una voz: «He aquí el tabernáculo de Dios con los hombres, y él morará con ellos; y ellos serán su pueblo, y Dios mismo estará con ellos como su Dios» (Ap 21:3). Las promesas de la tierra, de Abraham a los profetas, encuentran su meta final en esa ciudad donde no habrá más muerte, ni llanto, ni dolor (Ap 21:4).',
        { h: 'Peregrinos hoy' },
        'Por eso el creyente vive como peregrino. Ama la tierra donde vive, trabaja por su bien y ora por ella (Jer 29:7), pero sabe que su ciudadanía está en los cielos (Fil 3:20). Estudiar la tierra de Israel es estudiar el escenario donde Dios cumplió sus promesas en la historia; mirar más allá de ella es recordar que esas promesas no terminan allí. El Dios que fue fiel con Abraham en una tierra concreta será fiel con todos sus hijos en la patria mejor.',
        ir('Estudiar el libro de Apocalipsis', '../../apocalipsis/')
      ],
      pensar: 'Los patriarcas vivieron como «extranjeros y peregrinos», mirando de lejos lo prometido. ¿Qué cambia en tus prioridades de esta semana si vives como ciudadano de esa patria mejor?'
    }
  ];

  // ================== Ensamblado ==================
  window.RUTA_DATA = {
    titulo: 'La tierra de Israel',
    credito: 'Citas textuales: Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.',
    marca: 'Recursos Bíblicos',
    inicio: '../../',
    mapa: {
      detalle: window.MAPA_DETALLE,
      maxZoom: 11,
      // Sin alejarse más allá de las teselas de relieve del sitio
      minZoom: 4.5,
      maxBounds: [[5, -15], [56, 75]],
      zoomEncuadre: 10,
      rotulos: window.TIERRA_ROTULOS,
      relieve: {
        url: '../atlas/relieve/{z}/{x}/{y}.jpg', max: 7, bounds: [[5, -15], [56, 75]], attr: 'Relieve: NASA Earth Observatory (Blue Marble)',
        detalle: { min: 8, max: 8, bounds: [[28.3, 32.35], [35.45, 37.95]] }
      }
    },
    rutas: [
      { id: 'panorama', grupo: 'Geografía', n: 'I. Panorama de la tierra', info: 'Ubicación, nombres, tamaño, franjas, alturas, historia y vecinos', estaciones: panorama },
      { id: 'regiones', grupo: 'Geografía', n: 'II. Las regiones', info: 'De la costa al desierto y de Galilea a Edom', estaciones: regiones },
      { id: 'clima', grupo: 'Geografía', n: 'III. Clima, agua y vida', info: 'Lluvias, rocío, vientos, fuentes, cosechas y pastores', estaciones: clima },
      { id: 'caminos', grupo: 'Geografía', n: 'IV. Caminos, ciudades y distancias', info: 'Rutas internacionales, caminos interiores, pasos, puertas y viajes a pie', estaciones: caminos },
      { id: 'despues', grupo: 'Historia', n: 'V. La tierra después de la Biblia', info: 'Del año 70 a hoy: romanos, bizantinos, islam, cruzados, otomanos y el siglo XX', estaciones: despues,
        linea: { desde: 0, hasta: 2030, hitos: [
          { a: 70, t: 'Cae Jerusalén' }, { a: [324, 636], t: 'Bizancio' }, { a: [1099, 1291], t: 'Cruzadas' },
          { a: [1517, 1917], t: 'Otomanos' }, { a: 1948, t: 'Israel' }
        ] } },
      { id: 'plan', grupo: 'Teología', n: 'VI. La tierra en el plan de Dios', info: 'La promesa, sus límites, la obediencia, el futuro y la patria celestial', estaciones: plan }
    ]
  };
})();
